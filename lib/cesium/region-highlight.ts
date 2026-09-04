/**
 * 地形区域高亮 —— hover / focus 时地表描边的样式与动画推进逻辑。
 * 从 components/CesiumMap.tsx 抽出（2026-09 技术债清理，行为不变，仅搬家）。
 *
 * 地形选中指示 —— 只是一条细淡的 UI 描边，帮用户知道"选了哪块 / 悬停在哪块"，
 * 不代表任何官方地理边界（形状本身是概略的），也刻意不抢眼、不遮挡地形影像。
 * 不再做染色填充和 3D 抬升。
 */

// 统一暖琥珀 —— hover / focus 只是强弱不同，始终一眼可辨"这是被高亮的地块"
export const REGION_CSS = "#d7dee8"; // 冷淡浅灰蓝，读作"界面选择线"而非"地物"
export const REGION_RIM_ALPHA_HOVER = 0.3;
export const REGION_RIM_ALPHA_FOCUS = 0.45;
export const REGION_RIM_WIDTH = 1.4;
export const REGION_RIM_GROUND_OFFSET_M = 80; // 描边略高于地表，避免被地形遮住

export interface RegionEntry {
  /** 贴地透明多边形 — 仅作 scene.pick 命中目标 */
  pick: import("cesium").Entity;
  /** 抬升体 — hover/focus 时升起，idle 隐藏 */
  lift: import("cesium").Entity;
  /** 顶面亮边框 polyline —— 任意视角都能看清地块轮廓 */
  rim: import("cesium").Entity;
  /** 轮廓环顶点经纬度 */
  ringDeg: [number, number][];
  /** 环面积（度²，近似）—— 重叠拾取时取最小者（最具体）*/
  areaDeg2: number;
  /** 采样前的近似地表高度（锚点海拔）*/
  landmarkElev: number;
  /** 采样后每个顶点的地表高度（米）；null = 未采样 */
  groundHeights: number[] | null;
  sampling: boolean;
  /** 当前抬升高度（米），动画插值 */
  cur: number;
  target: number;
  state: "idle" | "hover" | "focus";
}

/** 采样地形轮廓顶点的地表高度（懒加载，一次）*/
export async function sampleRegionGround(
  Cesium: typeof import("cesium"),
  viewer: import("cesium").Viewer,
  r: RegionEntry,
  onDone: () => void
): Promise<void> {
  if (r.groundHeights || r.sampling) return;
  r.sampling = true;
  try {
    if (viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider) {
      r.groundHeights = r.ringDeg.map(() => r.landmarkElev);
    } else {
      const carto = r.ringDeg.map(([lon, lat]) => Cesium.Cartographic.fromDegrees(lon, lat));
      const sampled = await Cesium.sampleTerrainMostDetailed(viewer.terrainProvider, carto);
      r.groundHeights = sampled.map((c) =>
        Number.isFinite(c.height) ? (c.height as number) : r.landmarkElev
      );
    }
  } catch {
    r.groundHeights = r.ringDeg.map(() => r.landmarkElev);
  } finally {
    r.sampling = false;
    onDone();
  }
}

/** 设置 hover / focus 目标 + 触发地表采样；动画由 tickTerrainRegions 推进 */
export function applyTerrainRegionStyles(
  Cesium: typeof import("cesium") | null,
  viewer: import("cesium").Viewer | null,
  regions: Map<string, RegionEntry>,
  hoveredId: string | null,
  focusedId: string | null,
  poke: () => void
): void {
  if (!Cesium || !viewer || viewer.isDestroyed()) return;
  for (const [id, r] of regions) {
    const state: RegionEntry["state"] =
      id === focusedId ? "focus" : id === hoveredId ? "hover" : "idle";
    r.state = state;
    // target 现在是"描边可见度" 0/1（不再是抬升高度）
    r.target = state === "idle" ? 0 : 1;
    if (state !== "idle" && !r.groundHeights && !r.sampling) {
      void sampleRegionGround(Cesium, viewer, r, poke);
    }
  }
}

/** 每帧推进所有地形区域的抬升动画，返回是否仍在动画中 */
export function tickTerrainRegions(
  Cesium: typeof import("cesium"),
  regions: Map<string, RegionEntry>
): boolean {
  let animating = false;
  for (const r of regions.values()) {
    const diff = r.target - r.cur; // target/cur ∈ [0,1]：描边淡入淡出
    if (Math.abs(diff) < 0.02) {
      r.cur = r.target;
      if (r.target === 0) {
        if (r.lift.show) r.lift.show = false;
        if (r.rim.show) r.rim.show = false;
        continue;
      }
    } else {
      r.cur += diff * 0.22;
      animating = true;
    }

    // 抬升体/填充已停用 —— 只保留一条贴地的细描边
    if (r.lift.show) r.lift.show = false;
    if (!r.rim.show) r.rim.show = true;

    const heights = r.groundHeights ?? r.ringDeg.map(() => r.landmarkElev);
    const rimPts = r.ringDeg.map(([lon, lat], i) =>
      Cesium.Cartesian3.fromDegrees(lon, lat, heights[i]! + REGION_RIM_GROUND_OFFSET_M)
    );

    const focus = r.state === "focus";
    const rimAlpha = (focus ? REGION_RIM_ALPHA_FOCUS : REGION_RIM_ALPHA_HOVER) * r.cur;
    const color = Cesium.Color.fromCssColorString(REGION_CSS);

    const line = r.rim.polyline!;
    line.positions = new Cesium.ConstantProperty(rimPts);
    line.width = new Cesium.ConstantProperty(REGION_RIM_WIDTH);
    line.material = new Cesium.ColorMaterialProperty(color.withAlpha(rimAlpha));
    // 不用 polygon.outline —— 会懒加载 createPolygonOutlineGeometry worker，网络异常时崩溃。
  }
  return animating;
}
