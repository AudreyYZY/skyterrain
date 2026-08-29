/**
 * 大洲 / 国家归属自检（无测试框架依赖）
 *   运行: node --experimental-strip-types scripts/check-regions.ts
 *
 * 校验:
 *   - 每个 TerrainEntry 的 regionId ∈ REGIONS，country 非空
 *   - REGIONS[*].terrainCount == 该大洲实际条目数
 *   - available:true 的大洲至少有 1 个条目；有条目的大洲必须 available:true
 *   - 旅游模式 COUNTRY_TO_CONTINENT 的目标大洲 ∈ REGIONS
 *   - 打印每洲 / 每国条目数一览
 */

import { TERRAIN_REGISTRY } from "../lib/terrain-registry.ts";
import { REGIONS } from "../lib/regions.ts";
import { COUNTRY_TO_CONTINENT } from "../lib/places-registry.ts";

let failures = 0;
const fail = (m: string) => {
  console.log("✗ " + m);
  failures++;
};

const regionIds = new Set(REGIONS.map((r) => r.id));

const countByRegion = new Map<string, number>();
const countByCountry = new Map<string, number>();

for (const e of TERRAIN_REGISTRY) {
  if (!regionIds.has(e.regionId)) fail(`${e.id}: regionId "${e.regionId}" 不在 REGIONS`);
  if (!e.country || !e.country.trim()) fail(`${e.id}: country 为空`);
  countByRegion.set(e.regionId, (countByRegion.get(e.regionId) ?? 0) + 1);
  countByCountry.set(e.country, (countByCountry.get(e.country) ?? 0) + 1);
}

for (const r of REGIONS) {
  const actual = countByRegion.get(r.id) ?? 0;
  if (r.terrainCount !== actual)
    fail(`REGIONS "${r.id}": terrainCount=${r.terrainCount} 但实际 ${actual}`);
  if (r.available && actual === 0) fail(`REGIONS "${r.id}": available:true 但没有条目`);
  if (!r.available && actual > 0)
    fail(`REGIONS "${r.id}": 有 ${actual} 个条目但 available:false`);
}

for (const [country, continent] of Object.entries(COUNTRY_TO_CONTINENT)) {
  if (!regionIds.has(continent))
    fail(`COUNTRY_TO_CONTINENT["${country}"] = "${continent}" 不在 REGIONS`);
}

console.log("\n每大洲:");
for (const r of REGIONS) {
  console.log(
    `  ${r.id.padEnd(15)} ${String(countByRegion.get(r.id) ?? 0).padStart(3)}  ${
      r.available ? "" : "(建设中)"
    }`,
  );
}
console.log("每国家:");
for (const [c, n] of [...countByCountry.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${c.padEnd(15)} ${String(n).padStart(3)}`);
}

console.log(`\n${TERRAIN_REGISTRY.length} 个地形, ${failures} 项异常`);
process.exit(failures > 0 ? 1 : 0);
