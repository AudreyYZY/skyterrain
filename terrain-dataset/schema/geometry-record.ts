/**
 * GeometryRecord — GIS 几何数据
 *
 * 独立于 TerrainEntity 管理
 * 同一个 Terrain 可以有多个 Geometry (boundary, ridge, label)
 */

export type GeometryType = "boundary" | "ridge" | "centerline" | "label" | "corridor";
export type GeometrySource = "GMBA" | "NaturalEarth" | "HydroSHEDS" | "HydroLAKES" | "GeoNames" | "manual";

export interface GeometryRecord {
  /** 唯一标识 */
  id: string;
  /** 关联的 Terrain ID */
  terrainId: string;
  /** 几何类型 */
  geometryType: GeometryType;
  /** 数据来源 */
  source: GeometrySource;
  /** GeoJSON 几何数据 */
  geometry: GeoJSON;
  /** 数据版本 */
  version: string;
  /** 下载时间 */
  downloadedAt: string;
  /** 置信度 (0-1) */
  confidence: number;
  /** 备注 */
  notes?: string;
}
