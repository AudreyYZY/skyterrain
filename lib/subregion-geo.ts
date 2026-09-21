/**
 * 次区域的地形数量与地理中心（由 TERRAIN_REGISTRY 派生）。
 * 用于顶栏两级下拉：选中某次区域时把地球飞到该次区域地形的重心。
 */

import type { AppMode } from "./app-mode";
import { CITY_REGISTRY } from "./places-registry";
import { TERRAIN_REGISTRY } from "./terrain-registry";
import { COUNTRY_TO_SUBREGION, SUBREGIONS } from "./regions";

export interface SubregionGeo {
  id: string;
  continentId: string;
  count: number;
  /** 该次区域全部地形 landmark 的算术平均（够用作飞行目标） */
  lon: number;
  lat: number;
}

type Bucket = { continentId: string; sum: [number, number]; n: number };

function emptyBuckets(): Map<string, Bucket> {
  return new Map(SUBREGIONS.map((s) => [s.id, { continentId: s.continentId, sum: [0, 0], n: 0 }]));
}

const terrainById = emptyBuckets();
const travelById = emptyBuckets();

for (const e of TERRAIN_REGISTRY) {
  const subId = COUNTRY_TO_SUBREGION[e.country];
  const bucket = subId ? terrainById.get(subId) : undefined;
  if (!bucket) continue;
  bucket.sum[0] += e.landmark.lon;
  bucket.sum[1] += e.landmark.lat;
  bucket.n += 1;
}

for (const city of CITY_REGISTRY) {
  const subId = COUNTRY_TO_SUBREGION[city.country];
  const bucket = subId ? travelById.get(subId) : undefined;
  if (!bucket) continue;
  bucket.sum[0] += city.lon;
  bucket.sum[1] += city.lat;
  bucket.n += 1;
}

function toGeo(buckets: Map<string, Bucket>): Record<string, SubregionGeo> {
  const out: Record<string, SubregionGeo> = {};
  for (const [id, b] of buckets) {
    if (b.n === 0) continue;
    out[id] = {
      id,
      continentId: b.continentId,
      count: b.n,
      lon: b.sum[0] / b.n,
      lat: b.sum[1] / b.n,
    };
  }
  return out;
}

export const SUBREGION_GEO = toGeo(terrainById);
export const SUBREGION_TRAVEL_GEO = toGeo(travelById);

/** 某大洲下在当前模式有内容的次区域（按 SUBREGIONS 地理顺序） */
export function subregionGeosForContinent(continentId: string, mode: AppMode = "study"): SubregionGeo[] {
  const registry = mode === "study" ? SUBREGION_GEO : SUBREGION_TRAVEL_GEO;
  return SUBREGIONS.filter((s) => s.continentId === continentId)
    .map((s) => registry[s.id])
    .filter((g): g is SubregionGeo => Boolean(g));
}
