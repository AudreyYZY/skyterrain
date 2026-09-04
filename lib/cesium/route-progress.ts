/**
 * 航线飞行的观看高度与镜头进度映射 —— 与 React/组件状态无关的纯函数。
 * 从 components/CesiumMap.tsx 抽出（2026-09 技术债清理，行为不变，仅搬家）。
 */

import type { ResolvedWaypoint } from "@/lib/routes";

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

/** 每个地形/地标航点停留的目标秒数——不是精确值（解说时长会拉伸/压缩这个份额），是"大致停多久" */
export const WAYPOINT_HOLD_SEC = 1.8;

/**
 * 航线飞行：narration 进度 → 沿途已飞距离，中间插入"到达地形/地标就停一下"的平台段。
 *
 * 原来是纯线性 `targetDist = p * total`——镜头速度只取决于"总距离 / 解说时长"，
 * 短途国内航线和上万公里的洲际航线用的是同一套解说节奏（都 ~150s 左右），
 * 长航线镜头因此要飞快得多，瓦片来不及加载/精细化，画面糊、地图看不清。
 * 且镜头从不真正停下来，飞越每个地形/地标只是触发一次面板文字同步，肉眼上
 * 只是"一晃而过"，来不及看清。
 *
 * 修：给每个会触发 onFlyoverWaypoint 的地形/地标航点（不含首尾机场，那两处
 * 各自已有独立的起飞前停顿 / 收尾等待）在解说进度轴上分配一小段"停留区间"
 * （镜头位置不变，纯粹是时间到了才继续走），其余"迁徙区间"里把剩余的距离
 * 按比例分给剩余的解说进度——航线越长，停留占比不变、迁徙速度相应更快，
 * 但停留本身给了瓦片一段静止窗口去精细化、把画面缓清晰，观感上不再是"全程
 * 匀速掠过"，是"停-看-飞-停-看"的节奏，且严格不打乱"解说播完镜头也刚好
 * 飞完"这条硬约束（只改距离怎么分配，不改总时长）。
 */
export function buildRouteProgressMap(
  waypoints: ResolvedWaypoint[],
  cum: number[],
  total: number,
  holdSecEach: number,
  estimatedTotalSec: number,
): (p: number) => number {
  const holdIdx: number[] = [];
  for (let i = 1; i < waypoints.length - 1; i++) {
    if (waypoints[i]!.kind === "terrain" || waypoints[i]!.kind === "feature") holdIdx.push(i);
  }
  if (holdIdx.length === 0 || total <= 0 || estimatedTotalSec <= 0) {
    return (p: number) => p * total;
  }

  // 单个停留点占多大的解说进度份额；停留点多的航线整体停留占比封顶 45%，
  // 保证无论插了多少个地形航点，迁徙段总还留着一半以上的进度可用。
  const rawHoldFrac = holdSecEach / estimatedTotalSec;
  const holdFrac = Math.min(rawHoldFrac, 0.45 / holdIdx.length);

  const breaks: { p: number; d: number }[] = [{ p: 0, d: 0 }];
  let prevP = 0;
  let prevDist = 0;
  for (const idx of holdIdx) {
    const distHere = cum[idx]!;
    const moveDist = distHere - prevDist;
    const moveFrac = (moveDist / total) * (1 - holdFrac * holdIdx.length);
    const pMoveEnd = prevP + moveFrac;
    breaks.push({ p: pMoveEnd, d: distHere });
    const pHoldEnd = pMoveEnd + holdFrac;
    breaks.push({ p: pHoldEnd, d: distHere });
    prevP = pHoldEnd;
    prevDist = distHere;
  }
  breaks.push({ p: 1, d: total });

  return (p: number) => {
    if (p <= 0) return 0;
    if (p >= 1) return total;
    for (let i = 1; i < breaks.length; i++) {
      const b = breaks[i]!;
      if (p <= b.p) {
        const a = breaks[i - 1]!;
        if (b.p === a.p) return a.d;
        const t = (p - a.p) / (b.p - a.p);
        return a.d + (b.d - a.d) * t;
      }
    }
    return total;
  };
}
