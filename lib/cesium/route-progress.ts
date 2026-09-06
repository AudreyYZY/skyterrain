/**
 * 航线飞行 / 地形点击的观看高度 —— 与 React、组件状态无关的纯函数。
 *
 * 进度映射与运动模型已移到 lib/cesium/route-flight.ts（那边可以离线对全部航线
 * 跑断言），这里只留高度推导，避免两处各留一份迟早漂移。
 */

/** 不同地貌类型的理想观看高度（米，离地） */
export const TERRAIN_VIEW_HEIGHTS: Record<string, number> = {
  mountain_system: 8000,  // 山脉：降低高度以感受山体规模
  lake: 6000,             // 湖泊：近距离俯瞰湖面
  desert: 16000,          // 沙漠：升高以感受荒漠辽阔
  basin: 12000,           // 盆地：中等高度
  valley: 6000,           // 河谷：低飞穿越
  river: 8000,            // 河流：中低高度
  grassland: 12000,       // 草原：中等高度看开阔
  coast: 6000,            // 海岸：近距离看海蚀地貌
  inselberg: 5000,        // 岛山：贴近看单体
};

/**
 * 返回理想观看高度（米，离地）
 *
 * 优先级：显式 cameraHeight（地形点击时 = 数据驱动相机推导的 range）
 *   > 地貌类型默认值（仅航线巡航等未指定高度的场景）
 *   > 巡航高度
 *
 * 注意：地形点击路径不再传 category，因此 TERRAIN_VIEW_HEIGHTS 只作为
 * 航线飞行的兜底，不会覆盖 computeTerrainCamera 的 range。
 */
export function viewHeightForTerrain(
  terrain: { category?: string; cameraHeight?: number } | undefined,
  cruiseHeight: number
): number {
  if (typeof terrain?.cameraHeight === "number") return terrain.cameraHeight;
  if (terrain?.category && TERRAIN_VIEW_HEIGHTS[terrain.category]) {
    return TERRAIN_VIEW_HEIGHTS[terrain.category]!;
  }
  return cruiseHeight;
}
