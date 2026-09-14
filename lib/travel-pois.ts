/**
 * 旅游模式：每座城市攻略正文里提到的主要地点，选中城市时标注在地图上。
 *
 * 坐标为地标概略位置（城市尺度取景 ~26km 足够），非导航精度。
 * 取自各地公开的地标位置资料；不含任何有争议的地点或表述。
 *
 * ⚠️ 2026-09-14 起正文按国家拆到 lib/content/<country>/（见 lib/content/countries.ts），本文件只做合并导出。
 */

import type { CityPoi } from "@/lib/places-registry";
import { ALL_POIS } from "@/lib/content/_generated/pois";

export const POIS_BY_CITY: Record<string, CityPoi[]> = ALL_POIS;

export function getCityPois(cityId: string): CityPoi[] {
  return POIS_BY_CITY[cityId] ?? [];
}
