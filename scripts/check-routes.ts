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

const ROUTES = ALL_ROUTES as any[];
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
  const wps = r.waypoints as any[];
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

  const narr = (ROUTE_NARRATION as any)[r.id]?.study;
  if (!narr?.["zh-CN"] || !narr?.["en-US"]) fail(r.id, "缺少航线学习模式解说 route-narration.study");
  else if (narr["zh-CN"].length < 200) fail(r.id, "中文学习模式解说过短");
  // ≤3 分钟：中文播报约 4.5 字/秒，180 秒 ≈ 810 字上限（留余量到 900）
  if (narr?.["zh-CN"] && narr["zh-CN"].length > 900) fail(r.id, "中文学习模式解说过长（>3 分钟）");
  const tnarr = (ROUTE_NARRATION as any)[r.id]?.travel;
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
  if (coords.length >= 3) {
    const A = coords[0]!;
    const B = coords[coords.length - 1]!;
    const ux = B[0] - A[0], uy = B[1] - A[1];
    const L2 = ux * ux + uy * uy || 1e-9;
    const params = coords.map(([x, y]) => ((x - A[0]) * ux + (y - A[1]) * uy) / L2);
    for (let i = 1; i < params.length; i++) {
      if (params[i]! < params[i - 1]! - 0.08) {
        const label = wps[i - 1]!.kind === "city" ? wps[i - 1]!.id : wps[i - 1]!.terrainId;
        const label2 = wps[i]!.kind === "city" ? wps[i]!.id : wps[i]!.terrainId;
        fail(r.id, `航点回退：${label}(${params[i - 1]!.toFixed(2)}) → ${label2}(${params[i]!.toFixed(2)})`);
      }
    }
  }
  const cruiseKmh = ((r.flight?.durationMin ?? 120) / 60) * 800; // 粗略 800 km/h
  const ratio = total / cruiseKmh;
  const flag = ratio < 0.4 || ratio > 1.8 ? " ⚠ 航程与时长不匹配" : "";
  console.log(
    `  ${r.id.padEnd(10)} ${wps.length} 点  ${total.toFixed(0)} km  ~${r.flight?.durationMin}min${flag}`,
  );
}

console.log(`\n${ROUTES.length} 条航线, ${failures} 项异常`);
process.exit(failures > 0 ? 1 : 0);
