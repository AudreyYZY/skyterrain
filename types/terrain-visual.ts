export type VisualAssetType = "satellite" | "aerial" | "airplane" | "documentary";

export interface TerrainVisualAsset {
  title: string;
  source: string;
  url: string;
  credit: string;
  type: VisualAssetType;
}

export interface TerrainVisualAssets {
  terrainId: string;
  images: TerrainVisualAsset[];
}
