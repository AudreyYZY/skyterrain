/**
 * 大洲在当前模式里的可用性与计数——首页、顶栏和模式切换共用这一处判据。
 *
 * 学习模式看地形数；旅游模式看城市数。不要再让组件各自复制一套判断，
 * 否则「已有地形、尚无城市」的新大洲会在旅游模式里打开一个空目录。
 */
import type { AppMode } from "./app-mode";
import { getCitiesForContinent } from "./places-registry";
import { REGIONS, type Region } from "./regions";

export interface ContinentAvailability {
  region: Region;
  count: number;
  available: boolean;
}

export function continentAvailability(region: Region, mode: AppMode): ContinentAvailability {
  const count = mode === "study" ? region.terrainCount : getCitiesForContinent(region.id).length;
  return {
    region,
    count,
    available: mode === "study" ? region.available && count > 0 : count > 0,
  };
}

export function continentAvailabilities(mode: AppMode): ContinentAvailability[] {
  return REGIONS.map((region) => continentAvailability(region, mode));
}
