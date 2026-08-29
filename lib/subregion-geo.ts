/**
 * 次区域的地形数量与地理中心（由 TERRAIN_REGISTRY 派生）。
 * 用于顶栏两级下拉：选中某次区域时把地球飞到该次区域地形的重心。
 */

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

const byId = new Map<string, { continentId: string; sum: [number, number]; n: number }>();

for (const s of SUBREGIONS) {
  byId.set(s.id, { continentId: s.continentId, sum: [0, 0], n: 0 });
}

for (const e of TERRAIN_REGISTRY) {
  const subId = COUNTRY_TO_SUBREGION[e.country];
  const bucket = subId ? byId.get(subId) : undefined;
  if (!bucket) continue;
  bucket.sum[0] += e.landmark.lon;
  bucket.sum[1] += e.landmark.lat;
  bucket.n += 1;
}

export const SUBREGION_GEO: Record<string, SubregionGeo> = {};
for (const [id, b] of byId) {
  if (b.n === 0) continue;
  SUBREGION_GEO[id] = {
    id,
    continentId: b.continentId,
    count: b.n,
    lon: b.sum[0] / b.n,
    lat: b.sum[1] / b.n,
  };
}

/** 某大洲下有地形的次区域（按 SUBREGIONS 地理顺序） */
export function subregionGeosForContinent(continentId: string): SubregionGeo[] {
  return SUBREGIONS.filter((s) => s.continentId === continentId)
    .map((s) => SUBREGION_GEO[s.id])
    .filter((g): g is SubregionGeo => Boolean(g));
}
