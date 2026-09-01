/**
 * 地形相机推导自检脚本（无测试框架依赖）
 *   运行: node --experimental-strip-types scripts/check-terrain-camera.ts
 *
 * 校验:
 *   - 所有 47 项: range∈[15k,320k], pitch∈[-52,-32], 无 NaN
 *   - target 应位于 landmark 沿 (heading+180) 方向, 即 bearing(target→landmark) ≈ heading
 *   - 打印一览表供人工核对取景
 */

import { TERRAIN_REGISTRY } from "../lib/terrain-registry.ts";
import {
  computeTerrainCamera,
  bearingDeg,
  haversineKm,
} from "../lib/terrain-camera.ts";

let failures = 0;
const rows: string[] = [];

function angDiff(a: number, b: number): number {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

for (const e of TERRAIN_REGISTRY) {
  const cam = computeTerrainCamera(e);
  const problems: string[] = [];

  if (!Number.isFinite(cam.range) || !Number.isFinite(cam.pitch) || !Number.isFinite(cam.heading))
    problems.push("NaN");
  // viewScale>1 的大面积地形允许更大的 range（加宽取景）
  const rangeMax = (e as { viewScale?: number }).viewScale ? 345_000 : 135_000;
  if (cam.range < 14_000 || cam.range > rangeMax) problems.push(`range=${cam.range}`);
  if (cam.pitch < -55.5 || cam.pitch > -31.5) problems.push(`pitch=${cam.pitch}`);
  if (!Number.isFinite(cam.target[0]) || !Number.isFinite(cam.target[1]))
    problems.push("target NaN");

  const lm: [number, number] = [e.landmark.lon, e.landmark.lat];
  const back = bearingDeg(cam.target, lm); // target 看向 landmark 的方位
  const offsetKm = haversineKm(cam.target, lm);
  if (angDiff(back, cam.heading) > 4) problems.push(`aim off ${back.toFixed(0)}° vs h${cam.heading}°`);
  if (offsetKm < 3) problems.push(`offset ${offsetKm.toFixed(0)}km too small`);

  const ok = problems.length === 0;
  if (!ok) failures++;

  rows.push(
    `${ok ? "  " : "✗ "}${e.id.padEnd(18)} ${e.category.padEnd(16)} ` +
      `h=${String(cam.heading).padStart(5)}° p=${String(cam.pitch).padStart(5)}° ` +
      `range=${String(Math.round(cam.range / 1000)).padStart(3)}km ` +
      `offset=${String(Math.round(offsetKm)).padStart(3)}km` +
      (ok ? "" : `   << ${problems.join(", ")}`)
  );
}

console.log(rows.join("\n"));
console.log(
  `\n${TERRAIN_REGISTRY.length} 项, ${failures} 项异常, ${
    TERRAIN_REGISTRY.length - failures
  } 项通过`
);
process.exit(failures > 0 ? 1 : 0);
