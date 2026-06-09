/**
 * GeometryRecord — GIS 几何层
 *
 * 系统最重要的数据层
 * 存储 Boundary, Ridge Line, Interaction Region, Label Region
 * 未来 Camera, Hover, Spatial Query, LOD 全部依赖这里
 * 必须来自标准 GIS 数据源，禁止 Claude 手工生成
 */

export type GeometryPurpose =
  | "boundary"
  | "interaction"
  | "label"
  | "camera"
  | "story";

export type GeometrySource =
  | "GMBA"
  | "NaturalEarth"
  | "HydroSHEDS"
  | "HydroLAKES"
  | "GeoNames"
  | "manual";

export interface GeometryRecord {
  id: string;
  terrainId: string;
  purpose: GeometryPurpose;
  source: GeometrySource;
  geometry: {
    type: string;
    coordinates: unknown;
  };
  version: string;
  downloadedAt: string;
  confidence: number;
  notes?: string;
}
