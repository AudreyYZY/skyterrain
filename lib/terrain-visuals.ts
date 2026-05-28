import type { TerrainVisualAssets } from "@/types/terrain-visual";

/**
 * 获取地貌的视觉资源（当前为占位架构，未来接入真实图片数据）
 */
export function getTerrainVisuals(terrainId: string): TerrainVisualAssets {
  // 占位实现：返回空数组，未来可接入 NASA、Sentinel 等数据源
  return {
    terrainId,
    images: [],
  };
}

/**
 * 检查地貌是否有可用的视觉资源
 */
export function hasTerrainVisuals(terrainId: string): boolean {
  const visuals = getTerrainVisuals(terrainId);
  return visuals.images.length > 0;
}

/** 视觉类型标签 */
export const VISUAL_TYPE_LABEL: Record<string, string> = {
  satellite: "卫星影像",
  aerial: "航拍摄影",
  airplane: "舷窗视角",
  documentary: "纪录片素材",
};
