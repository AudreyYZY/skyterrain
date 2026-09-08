/**
 * 航线飞行运动自检（不联网、不开浏览器）
 *   运行: npm run check:flight
 *
 * 把 lib/cesium/route-flight.ts 的运动模型按 60 Hz 在全部航线上跑一遍，检查的是
 * 「镜头动得稳不稳」这件事本身，而不是画面好不好看：
 *   - 进度→距离映射单调不减，且 f(0)=0、f(1)=全程
 *   - 地速上限：相机每秒扫过的距离不能超过取景高度的一定比例，
 *     否则瓦片来不及加载，画面就是糊的
 *   - 加速度上限：停留点两侧的加减速不能太猛（原来是硬停硬起）
 *   - 转向速率上限
 *   - 飞行时长 ≥ 解说时长，解说不会被镜头甩下
 *
 * 模型口径：这里用 WGS84 把航点按巡航高度投到 ECEF，走与线上同一套曲线与进度
 * 映射。它不复刻 cameraAt 里那一点相机偏移，所以校验的是沿航线的运动规律，
 * 不是最终构图。构图仍需在浏览器里看。
 */

import { getAllRoutes, resolveRouteWaypoints } from "../lib/routes.ts";
import { getRouteNarration } from "../lib/route-narration.ts";
import { estimateSpeechDurationSec } from "../lib/speech.ts";
import {
  buildHeightProfile,
  planRouteFlight,
  sampleFlight,
  MAX_SPEED_OVER_HEIGHT,
  type FlightCurve,
  type Vec3,
} from "../lib/cesium/route-flight.ts";
import { bearingRadians, haversineMeters } from "../lib/geo.ts";
import { ROUTE_ANCHORS } from "../lib/route-anchors.data.ts";
import { buildAnchoringForNarration } from "../lib/route-anchors.ts";
import { splitSentences } from "../lib/sentences.ts";

// ── 阈值 ──────────────────────────────────────────────────────────────
// 「每秒扫过几个取景高度」的上限从 route-flight.ts 取（那边同时拿它当取景高度的地板），
// 两边写死成两个数就会重演下面这个坑。
/** 加速度上限，按「每秒改变多少个取景高度」计 */
const MAX_ACCEL_OVER_HEIGHT = 1.2;
/** 转向速率上限（度/秒） */
const MAX_TURN_DEG_PER_SEC = 25;
/** 采样帧率 */
const FPS = 60;

// ── WGS84 → ECEF ──────────────────────────────────────────────────────
const A = 6378137.0;
const E2 = 6.69437999014e-3;
function toEcef(latDeg: number, lonDeg: number, h: number): Vec3 {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180;
  const s = Math.sin(lat);
  const N = A / Math.sqrt(1 - E2 * s * s);
  const c = Math.cos(lat);
  return {
    x: (N + h) * c * Math.cos(lon),
    y: (N + h) * c * Math.sin(lon),
    z: (N * (1 - E2) + h) * s,
  };
}

const dist3 = (a: Vec3, b: Vec3) =>
  Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);

// ── 主循环 ────────────────────────────────────────────────────────────
let failures = 0;
const fail = (id: string, msg: string) => {
  failures++;
  console.error(`  ✗ ${id}: ${msg}`);
};

interface Row {
  id: string;
  intl: boolean;
  km: number;
  sec: number;
  heightKm: number;
  meanKmS: number;
  maxKmS: number;
  frameFrac: number;
  turnDegS: number;
  oldMeanKmS: number;
}
const rows: Row[] = [];
let anchoredCount = 0;

for (const route of getAllRoutes()) {
  const wps = resolveRouteWaypoints(route);
  if (wps.length < 2) continue;
  const n = wps.length;

  const cum = [0];
  for (let i = 1; i < n; i++) {
    cum.push(
      cum[i - 1]! +
        Math.max(1, haversineMeters(wps[i - 1]!.lat, wps[i - 1]!.lon, wps[i]!.lat, wps[i]!.lon)),
    );
  }
  const total = cum[n - 1]!;

  // 解说时长用中英里较长的那个，飞行时长必须容得下它
  let narrationSec = 0;
  for (const mode of ["study", "travel"] as const) {
    for (const lang of ["zh-CN", "en-US"] as const) {
      const text = getRouteNarration(route.id, lang, mode);
      if (text) narrationSec = Math.max(narrationSec, estimateSpeechDurationSec(text, 0.88, lang));
    }
  }

  const holdIndices: number[] = [];
  for (let i = 1; i < n - 1; i++) {
    const k = wps[i]!.kind;
    if (k === "terrain" || k === "feature") holdIndices.push(i);
  }

  const headings = wps.map((_, i) => {
    const a = wps[Math.max(0, i - 1)]!;
    const b = wps[Math.min(n - 1, i + 1)]!;
    return bearingRadians(a.lat, a.lon, b.lat, b.lon);
  });

  // 有锚点表就按解说锚点排镜头（第 4 步）。逐句起始时间在浏览器里来自 TTS 的
  // word boundary；这里按各句字数比例切分总时长估算，与运行时的兜底口径一致。
  let anchoring = null as null | { anchors: number[]; sentenceStartSec: number[]; narrationSec: number };
  {
    const zh = getRouteNarration(route.id, "zh-CN", "study");
    const entry = ROUTE_ANCHORS[route.id]?.["zh-CN"];
    if (zh && entry) {
      const sents = splitSentences(zh);
      if (sents.length === entry.perSentence.length) {
        const totalChars = sents.reduce((a, x) => a + x.trim().length, 0) || 1;
        const dur = estimateSpeechDurationSec(zh, 0.88, "zh-CN");
        const starts: number[] = [];
        let acc = 0;
        for (const x of sents) {
          starts.push((acc / totalChars) * dur);
          acc += x.trim().length;
        }
        anchoring = { anchors: entry.perSentence, sentenceStartSec: starts, narrationSec: dur };
        anchoredCount++;
      }
    }
  }

  const plan = planRouteFlight({
    cum,
    total,
    holdIndices,
    narrationSec,
    baseHeightM: route.cruiseHeight ?? 11000,
    headings,
    latLon: wps.map((w) => ({ lat: w.lat, lon: w.lon })),
    anchoring,
  });
  const progressToDistance = plan.progressToDistance;

  if (plan.durationSec + 1e-6 < narrationSec) {
    fail(route.id, `飞行时长 ${plan.durationSec.toFixed(0)}s < 解说时长 ${narrationSec.toFixed(0)}s`);
  }

  // 单调性与端点
  if (Math.abs(progressToDistance(0)) > 1e-6) fail(route.id, "进度映射 f(0) ≠ 0");
  if (Math.abs(progressToDistance(1) - total) > 1) fail(route.id, "进度映射 f(1) ≠ 全程");
  let prevD = -1;
  for (let i = 0; i <= 1000; i++) {
    const d = progressToDistance(i / 1000);
    if (d < prevD - 1e-6) {
      fail(route.id, `进度映射在 p=${(i / 1000).toFixed(3)} 处回退`);
      break;
    }
    prevD = d;
  }

  const curve: FlightCurve = {
    camPoints: wps.map((w) => toEcef(w.lat, w.lon, plan.cruiseHeightM)),
    cum,
    plan,
  };

  // 按帧采样，量速度 / 加速度 / 转向速率
  const heightAt = buildHeightProfile(curve);
  const frames = Math.max(2, Math.round(plan.durationSec * FPS));
  const dt = plan.durationSec / frames;
  let prevPos: Vec3 | null = null;
  let prevSpeed = 0;
  let prevHeading = 0;
  let maxSpeed = 0;
  let maxAccel = 0;
  let maxTurn = 0;
  // 分母必须是**当时的**取景高度，不是巡航高度。起降段高度会压到 26 km，
  // 拿巡航高度当分母的话，落地前那十几秒无论多快都算不出超标 ——
  // 实测 52 条航线在下降段超红线、最高 3.25 个高度/秒，旧口径一条都没报。
  let frameFrac = 0;
  let fracAtP = 0;
  for (let f = 0; f <= frames; f++) {
    const p = f / frames;
    const { position, heading } = sampleFlight(curve, p);
    if (prevPos) {
      const speed = dist3(prevPos, position) / dt;
      maxSpeed = Math.max(maxSpeed, speed);
      const frac = speed / heightAt(p);
      if (frac > frameFrac) {
        frameFrac = frac;
        fracAtP = p;
      }
      if (f > 1) maxAccel = Math.max(maxAccel, Math.abs(speed - prevSpeed) / dt);
      let dh = heading - prevHeading;
      while (dh > Math.PI) dh -= 2 * Math.PI;
      while (dh < -Math.PI) dh += 2 * Math.PI;
      maxTurn = Math.max(maxTurn, Math.abs((dh * 180) / Math.PI) / dt);
      prevSpeed = speed;
    }
    prevPos = position;
    prevHeading = heading;
  }

  if (frameFrac > MAX_SPEED_OVER_HEIGHT) {
    fail(
      route.id,
      `地速过快：p=${fracAtP.toFixed(3)} 处取景高度 ${(heightAt(fracAtP) / 1000).toFixed(0)} km，每秒扫过 ${frameFrac.toFixed(2)} 个高度`,
    );
  }
  if (maxAccel / plan.cruiseHeightM > MAX_ACCEL_OVER_HEIGHT) {
    fail(route.id, `加速度过大：${(maxAccel / plan.cruiseHeightM).toFixed(2)} 高度/秒²`);
  }
  if (maxTurn > MAX_TURN_DEG_PER_SEC) {
    fail(route.id, `转向过快：${maxTurn.toFixed(0)} 度/秒`);
  }

  rows.push({
    id: route.id,
    intl: route.depCountry !== route.arrCountry,
    km: total / 1000,
    sec: plan.durationSec,
    heightKm: plan.cruiseHeightM / 1000,
    meanKmS: plan.meanGroundSpeed / 1000,
    maxKmS: maxSpeed / 1000,
    frameFrac,
    turnDegS: maxTurn,
    // 旧模型：时长恒定 ~150s（或解说时长），高度封顶 130 km
    oldMeanKmS: total / 1000 / Math.max(45, narrationSec || 150),
  });
}

// ── 报告 ──────────────────────────────────────────────────────────────
const p = (v: number[], q: number) => {
  const a = [...v].sort((x, y) => x - y);
  return a[Math.min(a.length - 1, Math.floor(a.length * q))]!;
};
const group = (intl: boolean) => rows.filter((r) => r.intl === intl);

console.log("镜头运动统计（新模型）");
console.log(
  `  ${"".padEnd(6)}${"条数".padStart(6)}${"中位距离".padStart(10)}${"中位时长".padStart(10)}${"中位高度".padStart(10)}${"最大地速".padStart(11)}${"每秒扫过".padStart(10)}`,
);
for (const [label, intl] of [["国内", false], ["国际", true]] as const) {
  const g = group(intl);
  if (g.length === 0) continue;
  console.log(
    `  ${label.padEnd(6)}${String(g.length).padStart(6)}${`${p(g.map((r) => r.km), 0.5).toFixed(0)} km`.padStart(10)}${`${p(g.map((r) => r.sec), 0.5).toFixed(0)} s`.padStart(10)}${`${p(g.map((r) => r.heightKm), 0.5).toFixed(0)} km`.padStart(10)}${`${p(g.map((r) => r.maxKmS), 1).toFixed(1)} km/s`.padStart(11)}${p(g.map((r) => r.frameFrac), 1).toFixed(2).padStart(10)}`,
  );
}

const worst = [...rows].sort((a, b) => b.maxKmS - a.maxKmS).slice(0, 5);
console.log("\n地速最高的几条（新 vs 旧模型的平均地速）");
for (const r of worst) {
  console.log(
    `  ${r.id.padEnd(10)} ${r.km.toFixed(0).padStart(6)} km  时长 ${r.sec.toFixed(0).padStart(3)}s  高度 ${r.heightKm.toFixed(0).padStart(3)} km  新 ${r.meanKmS.toFixed(1)} km/s  旧 ${r.oldMeanKmS.toFixed(1)} km/s`,
  );
}
console.log(
  `\n转向速率最大 ${p(rows.map((r) => r.turnDegS), 1).toFixed(1)} 度/秒（上限 ${MAX_TURN_DEG_PER_SEC}）`,
);

// ── 单次飞行有多长（用户点一条航线要坐在那儿看多久）────────────────────
//
// 这一段按**每种语言各自的解说**重算一次，不像上面那样取中英里较长的那个：
// 镜头时长跟着当前语言的解说走，而「锚点排镜头 + 解说太短」会逼出很长的飞行
// —— 短解说要求镜头在开头几秒里冲过几千公里，速度上限做不到，排镜就把整条
// 航线拉长来凑，于是解说播完了镜头还在飞。这类篇目要靠补足解说长度来修，
// 不是调常量。
/**
 * 真正要卡的不是「飞得久」，是「解说播完之后还要干飞多久」——那段没有声音、
 * 画面又在高空匀速移动，用户只会觉得点了一下之后卡住了。北京—纽约的学习模式
 * 解说本身就有四分钟，镜头陪着飞四分钟没有问题；旅游模式解说只有一分半，
 * 镜头却要飞满三分钟，就有问题。
 */
//
// 排镜那边把干飞时长压在 75 秒以内（route-flight.ts 的 MAX_SILENT_TAIL_SEC），
// 但镜头有速度上限：压到 75 秒之后仍然飞不到终点的航线会被再拉长一截。这里
// 留出这一截的余量，只卡真正失控的。
const MAX_SILENT_TAIL_SEC = 105;
/** 无论解说多长，一次飞行的绝对上限 */
const MAX_SINGLE_FLIGHT_SEC = 300;
const durRows: { id: string; lang: string; sec: number; narrSec: number; km: number }[] = [];
for (const route of getAllRoutes()) {
  const wps = resolveRouteWaypoints(route);
  if (wps.length < 2) continue;
  const n = wps.length;
  const cum = [0];
  for (let i = 1; i < n; i++) {
    cum.push(cum[i - 1]! + Math.max(1, haversineMeters(wps[i - 1]!.lat, wps[i - 1]!.lon, wps[i]!.lat, wps[i]!.lon)));
  }
  const total = cum[n - 1]!;
  const holdIndices: number[] = [];
  for (let i = 1; i < n - 1; i++) {
    const k = wps[i]!.kind;
    if (k === "terrain" || k === "feature") holdIndices.push(i);
  }
  const headings = wps.map((_, i) =>
    bearingRadians(
      wps[Math.max(0, i - 1)]!.lat, wps[Math.max(0, i - 1)]!.lon,
      wps[Math.min(n - 1, i + 1)]!.lat, wps[Math.min(n - 1, i + 1)]!.lon,
    ),
  );
  for (const mode of ["study", "travel"] as const) {
    for (const lang of ["zh-CN", "en-US"] as const) {
      const text = getRouteNarration(route.id, lang, mode);
      if (!text) continue;
      const narrSec = estimateSpeechDurationSec(text, 0.88, lang);
      const plan = planRouteFlight({
        cum, total, holdIndices,
        narrationSec: narrSec,
        baseHeightM: route.cruiseHeight ?? 11000,
        headings,
        latLon: wps.map((w) => ({ lat: w.lat, lon: w.lon })),
        anchoring: buildAnchoringForNarration(route.id, lang, mode, text),
      });
          durRows.push({ id: route.id, lang: `${mode}/${lang}`, sec: plan.durationSec, narrSec, km: total / 1000 });
      if (plan.durationSec > MAX_SINGLE_FLIGHT_SEC) {
        fail(route.id, `${mode} ${lang} 飞行 ${plan.durationSec.toFixed(0)}s 超过绝对上限 ${MAX_SINGLE_FLIGHT_SEC}s`);
      } else if (plan.durationSec - narrSec > MAX_SILENT_TAIL_SEC) {
        fail(route.id, `${mode} ${lang} 解说 ${narrSec.toFixed(0)}s 播完后还要干飞 ${(plan.durationSec - narrSec).toFixed(0)}s（上限 ${MAX_SILENT_TAIL_SEC}s）`);
      }
    }
  }
}
durRows.sort((a, b) => b.sec - b.narrSec - (a.sec - a.narrSec));
console.log("\n解说播完后干飞最久的几条");
for (const r of durRows.slice(0, 6)) {
  console.log(`  ${r.id.padEnd(10)} ${r.lang.padEnd(14)} ${r.km.toFixed(0).padStart(6)} km  解说 ${r.narrSec.toFixed(0).padStart(3)}s → 镜头 ${r.sec.toFixed(0).padStart(3)}s  干飞 ${(r.sec - r.narrSec).toFixed(0).padStart(3)}s`);
}
console.log(`  镜头时长中位 ${[...durRows].sort((a, b) => a.sec - b.sec)[Math.floor(durRows.length / 2)]!.sec.toFixed(0)}s · 干飞上限 ${MAX_SILENT_TAIL_SEC}s · 绝对上限 ${MAX_SINGLE_FLIGHT_SEC}s`);

console.log(`\n其中 ${anchoredCount} 条按解说锚点排镜头（第 4 步），其余按航点均匀停留`);
console.log(`\n${rows.length} 条航线, ${failures} 项异常`);
process.exit(failures > 0 ? 1 : 0);
