/**
 * TerrainEntity — 地形实体
 *
 * 描述地理学对象
 * 不包含 Camera、UI、Story、Cesium 参数
 */

export type FeatureCategory =
  | "mountain_system"
  | "plateau"
  | "basin"
  | "plain"
  | "desert"
  | "lake"
  | "peak"
  | "river"
  | "canyon";

export interface ElevationStats {
  highestPoint?: { name: string; elevation: number; unit: "meters" };
  averageElevation?: string;
  lowestPoint?: { name: string; elevation: number; unit: "meters" };
}

export interface TerrainEntity {
  id: string;
  name: string;
  aliases?: string[];
  category: FeatureCategory;
  geometryIds: string[];  // → GeometryRecord.id
  elevationStats: ElevationStats;
}
