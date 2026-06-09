/**
 * TerrainEntity — 地貌实体（事实层）
 *
 * 只包含地理事实，不包含 UI/相机/故事
 * 未来 5-10 年可维护
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
  /** 最高点 */
  highestPoint?: { name: string; elevation: number; unit: "meters" };
  /** 平均海拔 */
  averageElevation?: { range: string; unit: "meters" };
  /** 最低点 */
  lowestPoint?: { name: string; elevation: number; unit: "meters" };
}

export interface TerrainEntity {
  /** 唯一标识 */
  id: string;
  /** 名称 */
  name: string;
  /** 别名 */
  aliases?: string[];
  /** 地貌类型 */
  category: FeatureCategory;
  /** 关联的 Geometry ID */
  geometryId: string;
  /** 海拔统计 */
  elevationStats: ElevationStats;
  /** 数据来源 */
  source: {
    geometry: string;
    elevation: string;
  };
}
