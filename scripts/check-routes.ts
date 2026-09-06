/**
 * 航线自检脚本（无测试框架依赖）
 *   运行: node --experimental-strip-types scripts/check-routes.ts
 *
 * 校验每条航线:
 *   - 第一个和最后一个 waypoint 是机场（airport: true）
 *   - 所有坐标合法（lat∈[-90,90], lon∈[-180,180]）
 *   - terrain waypoint 的 id 在 TERRAIN_REGISTRY 中
 *   - 相邻 waypoint 距离 > 0，总航程与 flight.durationMin 量级一致
 *   - flight 字段完整
 */

import { TERRAIN_REGISTRY } from "../lib/terrain-registry.ts";
import { ROUTE_NARRATION, getRouteNarration } from "../lib/route-narration.ts";
import { ALL_ROUTES } from "../data/routes/manifest.ts";
import { COUNTRIES } from "../lib/regions.ts";
import type { RouteWaypoint } from "../types/route.ts";

const ROUTES = ALL_ROUTES;
const IDS = new Set(TERRAIN_REGISTRY.map((e) => e.id));
const COUNTRY_SLUGS = new Set(COUNTRIES.map((c) => c.slug));
const seenIds = new Set<string>();

/** 航点的可读标识：城市用 id、地形用 terrainId、标注点用 name */
const wpLabel = (w: RouteWaypoint): string =>
  w.kind === "city" ? w.id : w.kind === "terrain" ? w.terrainId : w.name;

function haversineKm(a: [number, number], b: [number, number]): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b[1] - a[1]);
  const dLon = toRad(b[0] - a[0]);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a[1])) * Math.cos(toRad(b[1])) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

let failures = 0;
let missingSource = 0;
const fail = (id: string, msg: string) => {
  failures++;
  console.error(`  ✗ ${id}: ${msg}`);
};

for (const r of ROUTES) {
  const wps = r.waypoints;
  const first = wps[0];
  const last = wps[wps.length - 1];

  if (first?.kind !== "city" || !first?.airport) fail(r.id, "首航点不是机场");
  if (last?.kind !== "city" || !last?.airport) fail(r.id, "末航点不是机场");

  if (!r.flight?.flightNo || !r.flight?.aircraft || !r.flight?.airline) {
    fail(r.id, "flight 字段不完整");
  }
  if (!r.nameEn || !r.descriptionEn) fail(r.id, "缺少英文名/描述");

  // 核查留痕：城市与地形一直强制 source，航线补齐这一档。
  // 只能验「有没有留痕、格式对不对」，验不了「内容是不是真的」——
  // 真伪要靠人按 ref 复核，checkedOn 用来判断这份快照有多旧。
  if (!r.source) {
    missingSource++;
  } else {
    if (!r.source.ref?.trim()) fail(r.id, "source.ref 为空");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.source.checkedOn ?? "")) {
      fail(r.id, `source.checkedOn 不是 YYYY-MM-DD：${r.source.checkedOn}`);
    }
  }

  if (seenIds.has(r.id)) fail(r.id, "航线 id 重复");
  seenIds.add(r.id);

  if (!COUNTRY_SLUGS.has(r.depCountry)) fail(r.id, `depCountry 不在 COUNTRIES: ${r.depCountry}`);
  if (!COUNTRY_SLUGS.has(r.arrCountry)) fail(r.id, `arrCountry 不在 COUNTRIES: ${r.arrCountry}`);

  const narr = ROUTE_NARRATION[r.id]?.study;
  if (!narr?.["zh-CN"] || !narr?.["en-US"]) fail(r.id, "缺少航线学习模式解说 route-narration.study");
  else if (narr["zh-CN"].length < 200) fail(r.id, "中文学习模式解说过短");
  // ≤3 分钟：中文播报约 4.5 字/秒，180 秒 ≈ 810 字上限（留余量到 900）
  if (narr?.["zh-CN"] && narr["zh-CN"].length > 900) fail(r.id, "中文学习模式解说过长（>3 分钟）");
  const tnarr = ROUTE_NARRATION[r.id]?.travel;
  if (tnarr?.["zh-CN"] && tnarr["zh-CN"].length > 900) fail(r.id, "中文旅游模式解说过长（>3 分钟）");

  // 解说里若点名机型，必须与 flight.aircraft 对得上。
  // 实测踩过两次：北京—华沙解说写「波音777」而数据是 A330；北京—乌兰巴托解说写
  // C919 而数据是 737 MAX 8（C919 实际飞的是 CA723，不是 CA901）。
  // 「747」在蒙特利尔—温哥华那篇指的是机场快线巴士线路号，不是机型，故排除。
  // 未核实的航线，解说里不得点名机型或航班号 —— 那等于把没核过的断言摆出去当真。
  // 界面与搜索已由 lib/routes.ts isFlightVerified 挡住，解说是最后一处出口。
  if (!r.source) {
    for (const mode of ["study", "travel"] as const) {
      for (const lang of ["zh-CN", "en-US"] as const) {
        const text = getRouteNarration(r.id, lang, mode);
        if (!text) continue;
        const bad = [...new Set(text.match(/(空客\s?A3\d\d|波音\s?7\d\d|Airbus\s?A3\d\d|Boeing\s?7\d\d|C919|[A-Z]{2}\d{3,4}航班|flight\s[A-Z]{2}\d{3,4})/g) ?? [])];
        if (bad.length > 0) {
          fail(r.id, `未核实航线的 ${mode}/${lang} 解说点名了「${bad.join("、")}」，未核实就不应写出机型/航班号`);
        }
      }
    }
  }

  if (r.source && r.flight?.aircraft) {
    const acn = r.flight.aircraft.replace(/[^0-9A-Za-z]/g, "").toLowerCase();
    for (const mode of ["study", "travel"] as const) {
      for (const lang of ["zh-CN", "en-US"] as const) {
        const text = getRouteNarration(r.id, lang, mode);
        if (!text) continue;
        const hits = [...new Set(text.match(/(波音\s?7\d\d|Boeing\s?7\d\d|空客\s?A3\d\d|Airbus\s?A3\d\d|C919)/g) ?? [])];
        for (const h of hits) {
          const key = h.replace(/[^0-9A-Za-z]/g, "").replace(/^(boeing|airbus)/i, "").toLowerCase();
          if (key === "747" && /747\s?(快线|express)/i.test(text)) continue; // 机场巴士线路号
          if (!acn.includes(key) && !acn.includes(key.slice(0, 3))) {
            fail(r.id, `${mode}/${lang} 解说提到机型「${h}」，与数据 flight.aircraft「${r.flight.aircraft}」不符`);
          }
        }
      }
    }
  }

  // 解析坐标序列
  const coords: [number, number][] = [];
  for (const wp of wps) {
    if (wp.kind === "city" || wp.kind === "feature") {
      if (
        typeof wp.lat !== "number" ||
        typeof wp.lon !== "number" ||
        Math.abs(wp.lat) > 90 ||
        Math.abs(wp.lon) > 180
      ) {
        fail(r.id, `${wp.kind === "city" ? "城市" : "标注点"} ${wpLabel(wp)} 坐标非法`);
        continue;
      }
      if (wp.kind === "feature" && (!wp.name || !wp.nameEn)) {
        fail(r.id, `标注点 ${wp.name ?? "?"} 缺中/英名`);
      }
      coords.push([wp.lon, wp.lat]);
    } else {
      if (!IDS.has(wp.terrainId)) {
        fail(r.id, `地形 ${wp.terrainId} 不在注册表`);
        continue;
      }
      const e = TERRAIN_REGISTRY.find((x) => x.id === wp.terrainId)!;
      coords.push([e.landmark.lon, e.landmark.lat]);
    }
  }

  let total = 0;
  for (let i = 1; i < coords.length; i++) {
    const d = haversineKm(coords[i - 1]!, coords[i]!);
    if (d <= 0) fail(r.id, `第 ${i} 段距离为 0`);
    total += d;
  }

  // 航点应沿「起点→终点」方向大致单调推进（投影参数递增），否则镜头会来回折
  // 经度差归一化到 (-180, 180]：跨越 180° 经线的真实航线（如中国—北美东岸的极地航线）
  // 经度原始差值可能 >180（意味着走的其实是「另一边」更短的弧），不归一化会被误判为倒退
  const wrapLonDelta = (d: number): number => {
    let x = d % 360;
    if (x < -180) x += 360;
    if (x > 180) x -= 360;
    return x;
  };
  if (coords.length >= 3) {
    const A = coords[0]!;
    const B = coords[coords.length - 1]!;
    const ux = wrapLonDelta(B[0] - A[0]), uy = B[1] - A[1];
    const L2 = ux * ux + uy * uy || 1e-9;
    const params = coords.map(([x, y]) => (wrapLonDelta(x - A[0]) * ux + (y - A[1]) * uy) / L2);
    for (let i = 1; i < params.length; i++) {
      if (params[i]! < params[i - 1]! - 0.08) {
        const label = wpLabel(wps[i - 1]!);
        const label2 = wpLabel(wps[i]!);
        fail(r.id, `航点回退：${label}(${params[i - 1]!.toFixed(2)}) → ${label2}(${params[i]!.toFixed(2)})`);
      }
    }
  }
  // 估算时长 = 地面/爬升/下降固定开销 + 巡航段（距离/800km/h）。
  // 早期版本没有固定开销项，直接拿总距离除以一个固定巡航速度——短途航线因此
  // 系统性被误判：200~500km 的短程真实航班，大部分航段时间花在爬升/下降，
  // 均速本就远低于巡航速度的 800km/h，纯按距离/巡航速度算出的"预期时长"会比
  // 真实（已核实的航空公司时刻表）时长短很多，23 条真实短途航线因此被误报。
  // 加固定开销后按真实短途航班时刻表核对，误报清零，且仍能正常揪出长途异常。
  const GROUND_OVERHEAD_MIN = 25;
  const estimatedMin = GROUND_OVERHEAD_MIN + (total / 800) * 60;
  const actualMin = r.flight?.durationMin ?? estimatedMin;
  const ratio = actualMin / estimatedMin;
  const flag = ratio < 0.6 || ratio > 1.6 ? " ⚠ 航程与时长不匹配" : "";
  console.log(
    `  ${r.id.padEnd(10)} ${wps.length} 点  ${total.toFixed(0)} km  ~${r.flight?.durationMin}min${flag}`,
  );
}

if (missingSource > 0) {
  console.log(
    `\n· ${missingSource}/${ROUTES.length} 条航线尚未核实（无 source 留痕）` +
      "\n  未核实不是错误：这些航线照常可飞、地理解说照常播，只是**界面与搜索都不显示" +
      "\n  航班号/机型**（见 lib/routes.ts isFlightVerified），解说里也不得点名机型。" +
      "\n  逐条核实后补 source.ref / checkedOn / note，航班信息随即对外显示。",
  );
}
console.log(`\n${ROUTES.length} 条航线, ${failures} 项异常`);
process.exit(failures > 0 ? 1 : 0);
