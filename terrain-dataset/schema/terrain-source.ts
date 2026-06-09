/**
 * TerrainSource — 数据来源追溯
 *
 * 确保每个数据点都有可追溯的来源
 * 未来 5-10 年可维护
 */

export interface GeometrySource {
  provider: "GMBA" | "NaturalEarth" | "HydroSHEDS" | "HydroLAKES" | "GeoNames" | "manual";
  version: string;
  url: string;
  downloadedAt: string;
  confidence: number;
}

export interface ElevationSource {
  provider: string;
  method: "peak" | "average" | "basin_floor" | "lake_surface";
  value: number;
  unit: "meters";
  url?: string;
}

export interface ContentSource {
  provider: string;
  url?: string;
  accessedAt: string;
}

export interface TerrainSource {
  terrainId: string;
  geometrySources: GeometrySource[];
  elevationSources: ElevationSource[];
  contentSources: ContentSource[];
}
