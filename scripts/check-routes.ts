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
import pekUrc from "../data/routes/pek-urc.json" with { type: "json" };
import ctuLxa from "../data/routes/ctu-lxa.json" with { type: "json" };
import canLxa from "../data/routes/can-lxa.json" with { type: "json" };
import urcKhg from "../data/routes/urc-khg.json" with { type: "json" };

const ROUTES = [pekUrc, ctuLxa, canLxa, urcKhg] as any[];
const IDS = new Set(TERRAIN_REGISTRY.map((e) => e.id));

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

  const narr = (ROUTE_NARRATION as any)[r.id];
  if (!narr?.["zh-CN"] || !narr?.["en-US"]) fail(r.id, "缺少航线解说 route-narration");
  else if (narr["zh-CN"].length < 200) fail(r.id, "中文解说过短");

  // 解析坐标序列
  const coords: [number, number][] = [];
  for (const wp of wps) {
    if (wp.kind === "city") {
      if (
        typeof wp.lat !== "number" ||
        typeof wp.lon !== "number" ||
        Math.abs(wp.lat) > 90 ||
        Math.abs(wp.lon) > 180
      ) {
        fail(r.id, `城市 ${wp.id} 坐标非法`);
        continue;
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
  const cruiseKmh = ((r.flight?.durationMin ?? 120) / 60) * 800; // 粗略 800 km/h
  const ratio = total / cruiseKmh;
  const flag = ratio < 0.4 || ratio > 1.8 ? " ⚠ 航程与时长不匹配" : "";
  console.log(
    `  ${r.id.padEnd(10)} ${wps.length} 点  ${total.toFixed(0)} km  ~${r.flight?.durationMin}min${flag}`,
  );
}

console.log(`\n${ROUTES.length} 条航线, ${failures} 项异常`);
process.exit(failures > 0 ? 1 : 0);
