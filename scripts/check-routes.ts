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
import { ROUTE_NARRATION } from "../lib/route-narration.ts";
import { ALL_ROUTES } from "../data/routes/manifest.ts";
import { COUNTRIES } from "../lib/regions.ts";

const ROUTES = ALL_ROUTES;
const IDS = new Set(TERRAIN_REGISTRY.map((e) => e.id));
const COUNTRY_SLUGS = new Set(COUNTRIES.map((c) => c.slug));
const seenIds = new Set<string>();

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
        fail(r.id, `${wp.kind === "city" ? "城市" : "标注点"} ${wp.id ?? wp.name} 坐标非法`);
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
        const label = wps[i - 1]!.kind === "city" ? wps[i - 1]!.id : wps[i - 1]!.terrainId;
        const label2 = wps[i]!.kind === "city" ? wps[i]!.id : wps[i]!.terrainId;
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

console.log(`\n${ROUTES.length} 条航线, ${failures} 项异常`);
process.exit(failures > 0 ? 1 : 0);
