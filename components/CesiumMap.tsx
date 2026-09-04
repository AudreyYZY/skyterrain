"use client";

import type { ScreenSpaceEventHandler } from "cesium";
import { bearingRadians, haversineMeters } from "@/lib/geo";
import { resolveRouteWaypoints, type ResolvedWaypoint } from "@/lib/routes";
import { TERRAIN_REGISTRY } from "@/lib/terrain-registry";
import type { FlightRoute } from "@/types/route";
import type { TerrainPoint } from "@/types/terrain";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

declare global {
  interface Window {
    /** 开发环境调试面板 — 仅 NODE_ENV !== "production" 时挂载 */
    viewer?: import("cesium").Viewer;
    Cesium?: typeof import("cesium");
    debugCesium?: Record<string, unknown>;
    __debugHover?: boolean;
  }
}

export interface CameraState {
  /** 相机距地高度（米） */
  altitude: number;
  /** 缩放级别（1=最远, 20=最近） */
  zoomLevel: number;
  /** 经度 */
  lon: number;
  /** 纬度 */
  lat: number;
}

export interface CesiumMapHandle {
  flyToTerrain: (terrain: TerrainPoint) => void;
  flyToTerrainAndWait: (terrain: TerrainPoint, cameraOptions?: { heading?: number; pitch?: number }) => Promise<void>;
  flyToRegion: (center: { lon: number; lat: number; height: number; duration?: number }) => void;
  flyRoute: (route: FlightRoute, callbacks: RouteFlyCallbacks) => void;
  stopFlight: () => void;
  /** 将经纬度投影到屏幕坐标（返回 null 表示在视野外） */
  projectToScreen: (lat: number, lon: number) => { x: number; y: number } | null;
  /** 获取当前相机状态 */
  getCameraState: () => CameraState | null;
  /** 高亮指定地形区域（传 null 清除）— 用于点击跳转后标出地形范围 */
  focusTerrain: (terrainId: string | null) => void;
  /** 相机飞到城市上空的斜视角（旅游模式）*/
  focusCity: (
    lon: number,
    lat: number,
    view?: { heightM?: number; pitchDeg?: number; headingDeg?: number },
  ) => void;
}

export interface RouteFlyCallbacks {
  /** 飞行开始：播放整条航线的解说，返回 Promise（解说结束时 resolve）。非阻塞 —— 镜头同时飞行。 */
  onNarrate: () => Promise<void>;
  /** 镜头经过某航点（非阻塞，仅用于同步面板显示当前地形名） */
  onFlyoverWaypoint?: (waypoint: ResolvedWaypoint, index: number) => void;
  /**
   * 当前解说进度 0..1（由解说音频 currentTime/duration 得出）。
   * 返回 null = 音频还没开始 / 无法测量（浏览器 TTS）→ 用时长估算兜底。
   * 镜头飞行以此为节拍，保证「解说播完时航线也飞完」。
   */
  narrationProgress?: () => number | null;
  /** 解说时长估算（秒），仅在 narrationProgress 不可用时作兜底节拍 */
  estNarrationSec?: number;
  onPreparingRoute?: () => void;
  onRouteReady?: () => void;
  onComplete: () => void;
  onCancelled?: () => void;
}

/** 兜底：无法测量解说进度时的镜头飞行总时长（秒） */
const ROUTE_FLIGHT_SEC = 150;

export type TerrainMode = "world" | "ellipsoid";

interface CesiumMapProps {
  onReady?: () => void;
  onTerrainMode?: (mode: TerrainMode) => void;
  /** 鼠标 hover 到某地形区域时回调其 id（移出时 null） */
  onTerrainHover?: (terrainId: string | null) => void;
  /** 点击地图上某地形区域时回调其 id（不受当前大洲限制） */
  onTerrainSelect?: (terrainId: string) => void;
  /** 应用模式：travel 时不做地形 hover / 区域高亮 */
  appMode?: "study" | "travel";
}

/** 飞机舷窗俯角 — 更低角度，模拟真实客机窗口 */
const WINDOW_PITCH_DEG = -42;

/** 巡航时的微滚转角（弧度），模拟轻微气流颠簸 */
const CRUISE_ROLL_DEG = 0.8;

/**
 * 初始画面 — 电影级构图，不是远处的小地球。
 * 相机停在当前区域（默认中国）南侧上空，向北俯视，
 * 让整片大陆以 3/4 视角铺满画面。
 */
const INTRO_VIEW = {
  lon: 102.0,
  lat: 24.0,          // 锚点偏南 → 相机在南、镜头朝北看整片中国
  height: 4_600_000,  // ~4,600km
  heading: 0,
  pitch: -1.257,      // ≈ -72°，高空俯视，地平线与大气弧留在画面上缘
};

/** 不同地貌类型的理想观看高度（米，离地） */

/** 不同地貌类型的理想观看高度（米，离地） */
const TERRAIN_VIEW_HEIGHTS: Record<string, number> = {
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

function heightCacheKey(lon: number, lat: number): string {
  return `${lat.toFixed(3)},${lon.toFixed(3)}`;
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** 四次缓出 — 更平滑的减速曲线，模拟重力感 */
function quarticEaseOut(t: number): number {
  return 1 - (1 - t) ** 4;
}


/**
 * 等待地形/影像瓦片收敛
 * 每帧检查 viewer.scene.globe.tilesLoaded 状态
 * tilesLoaded=true 持续 stableMs 毫秒才算完成
 * 超时 timeoutMs 毫秒强制继续
 */
function waitForTilesSettled(
  viewer: import("cesium").Viewer,
  stableMs: number = 1000,
  timeoutMs: number = 8000
): Promise<void> {
  return new Promise((resolve) => {
    if (viewer.isDestroyed()) { resolve(); return; }

    const start = Date.now();
    let loadedSince = 0;

    const tick = () => {
      if (viewer.isDestroyed()) { resolve(); return; }

      const tilesLoaded = viewer.scene.globe.tilesLoaded;

      if (tilesLoaded) {
        if (loadedSince === 0) loadedSince = Date.now();
        if (Date.now() - loadedSince >= stableMs) {
          resolve();
          return;
        }
      } else {
        loadedSince = 0;
      }

      if (Date.now() - start > timeoutMs) {
        resolve();
        return;
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

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
function buildRouteProgressMap(
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

/** 每个地形/地标航点停留的目标秒数——不是精确值（解说时长会拉伸/压缩这个份额），是"大致停多久" */
const WAYPOINT_HOLD_SEC = 1.8;

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
function viewHeightForTerrain(
  terrain: { category?: string; cameraHeight?: number } | undefined,
  cruiseHeight: number
): number {
  if (typeof terrain?.cameraHeight === "number") return terrain.cameraHeight;
  if (terrain?.category && TERRAIN_VIEW_HEIGHTS[terrain.category]) {
    return TERRAIN_VIEW_HEIGHTS[terrain.category]!;
  }
  return cruiseHeight;
}

/** 有精确 Natural Earth 轮廓的地形（data/gis/exports/*.geojson）*/
const TERRAIN_RING_FILES = new Set([
  "alataw", "altai", "altun", "dabie", "dalou", "daxinganling",
  "gobi", "hainan", "hexi-corridor", "himalaya", "inner-mongolia", "junggar-basin",
  "karakoram", "kunlun", "leizhou", "liaodong-hills", "loess", "luliang", "muus",
  "nanling", "north-china", "northeast", "pamir", "qaidam", "qilian", "qinghai-tibet",
  "qinling", "shandong-hills", "sichuan", "taihang", "taiwan", "taklamakan",
  "tarim-basin", "tianshan", "tsangpo-gorge", "wuyi", "xiaoxinganling",
  "yangtze-gorges", "yinshan", "yunnan-guizhou",
]);

/** 取地形轮廓外环 [lon,lat][]，无文件返回 null */
async function loadTerrainRing(id: string): Promise<[number, number][] | null> {
  if (!TERRAIN_RING_FILES.has(id)) return null;
  try {
    const res = await fetch(`/data/gis/exports/${id}.geojson`);
    if (!res.ok) return null;
    const gj = await res.json();
    const g = gj.geometry ?? gj;
    if (g.type === "Polygon") return g.coordinates[0] as [number, number][];
    if (g.type === "MultiPolygon") {
      // 取顶点最多的那个环
      let best: [number, number][] = [];
      for (const poly of g.coordinates as [number, number][][][]) {
        if (poly[0] && poly[0].length > best.length) best = poly[0] as [number, number][];
      }
      return best.length ? best : null;
    }
  } catch {
    /* ignore */
  }
  return null;
}

/** bbox → 八边形环（比矩形更像"一块地形"）*/
function bboxOctagon(bbox: [number, number, number, number]): [number, number][] {
  const [w, s, e, n] = bbox;
  const cx = (w + e) / 2;
  const cy = (s + n) / 2;
  const rx = (e - w) / 2;
  const ry = (n - s) / 2;
  const k = 0.42; // 斜切比例
  return [
    [cx - rx, cy - ry * k], [cx - rx * k, cy - ry], [cx + rx * k, cy - ry],
    [cx + rx, cy - ry * k], [cx + rx, cy + ry * k], [cx + rx * k, cy + ry],
    [cx - rx * k, cy + ry], [cx - rx, cy + ry * k], [cx - rx, cy - ry * k],
  ];
}

/**
 * 地形区域高亮 —— hover / focus 时把该地形「整块地表」按真实起伏轻微抬起
 * （perPositionHeight：顶面跟随地形高程，侧壁 = 地块切面），保留原色（材质极淡）。
 */
// 统一暖琥珀 —— hover / focus 只是强弱不同，始终一眼可辨"这是被高亮的地块"
// 地形选中指示 —— 只是一条细淡的 UI 描边，帮用户知道"选了哪块 / 悬停在哪块"，
// 不代表任何官方地理边界（形状本身是概略的），也刻意不抢眼、不遮挡地形影像。
// 不再做染色填充和 3D 抬升。
const REGION_CSS = "#d7dee8"; // 冷淡浅灰蓝，读作"界面选择线"而非"地物"
const REGION_RIM_ALPHA_HOVER = 0.3;
const REGION_RIM_ALPHA_FOCUS = 0.45;
const REGION_RIM_WIDTH = 1.4;
const REGION_RIM_GROUND_OFFSET_M = 80; // 描边略高于地表，避免被地形遮住

interface RegionEntry {
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

/** 多边形环面积（度²，shoelace，仅用于比较大小）*/
function ringAreaDeg2(ring: [number, number][]): number {
  let a = 0;
  for (let i = 0, n = ring.length; i < n; i++) {
    const [x1, y1] = ring[i]!;
    const [x2, y2] = ring[(i + 1) % n]!;
    a += x1 * y2 - x2 * y1;
  }
  return Math.abs(a) / 2;
}

/** 采样地形轮廓顶点的地表高度（懒加载，一次）*/
async function sampleRegionGround(
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
function applyTerrainRegionStyles(
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
function tickTerrainRegions(
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

const CesiumMap = forwardRef<CesiumMapHandle, CesiumMapProps>(
  function CesiumMap({ onReady, onTerrainMode, onTerrainHover, onTerrainSelect, appMode = "study" }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const modeRef = useRef(appMode);
    const onTerrainSelectRef = useRef(onTerrainSelect);
    onTerrainSelectRef.current = onTerrainSelect;
    /**
     * onReady 必须走 ref，不能进 init effect 的依赖数组——它在 ExplorerApp 里依赖
     * [activeRegion, mode]，每次切大洲/切模式都会拿到新的函数引用，若留在依赖数组里
     * 会导致整个 Viewer 被销毁重建（重新 fetch GeoJSON、重建全部地形高亮实体），
     * 同时打断刚发起的 flyToRegion 动画。
     */
    const onReadyRef = useRef(onReady);
    onReadyRef.current = onReady;
    const viewerRef = useRef<import("cesium").Viewer | null>(null);
    const cesiumRef = useRef<typeof import("cesium") | null>(null);
    const heightCacheRef = useRef<Map<string, number>>(new Map());
    const flightCancelledRef = useRef(false);
    /** 地形区域高亮实体（每个 terrain：贴地拾取多边形 + 抬升体）*/
    const terrainRegionRef = useRef<Map<string, RegionEntry>>(new Map());
    const hoveredTerrainRef = useRef<string | null>(null);
    const focusedTerrainRef = useRef<string | null>(null);
    const regionAnimRef = useRef<number | null>(null);

    /** 启动/维持地形区域抬升动画的 rAF 循环 */
    const pokeRegionAnim = useRef(() => {
      const Cesium = cesiumRef.current;
      const viewer = viewerRef.current;
      if (!Cesium || !viewer || viewer.isDestroyed()) return;
      if (regionAnimRef.current != null) return;
      const step = () => {
        if (!viewerRef.current || viewerRef.current.isDestroyed()) {
          regionAnimRef.current = null;
          return;
        }
        const more = tickTerrainRegions(Cesium, terrainRegionRef.current);
        viewerRef.current.scene.requestRender();
        regionAnimRef.current = more ? requestAnimationFrame(step) : null;
      };
      regionAnimRef.current = requestAnimationFrame(step);
    }).current;

    const [status, setStatus] = useState<"loading" | "ready" | "error">(
      "loading"
    );
    const [routePreparing, setRoutePreparing] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useImperativeHandle(ref, () => ({
      projectToScreen(lat: number, lon: number) {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium) return null;
        const canvas = viewer.canvas;
        if (canvas.width === 0 || canvas.height === 0) return null;
        try {
          const cartesian = Cesium.Cartesian3.fromDegrees(lon, lat);

          // 遮挡剔除：地球背面 / 地平线以下的点不返回坐标，
          // 否则缩小看地球时背面标签会投影到屏幕上堆在一起。
          // (@types/cesium 版本较旧，EllipsoidalOccluder 需 any 断言)
          const OccluderCtor = (Cesium as unknown as {
            EllipsoidalOccluder: new (
              e: unknown,
              p: unknown
            ) => { isPointVisible: (pt: unknown) => boolean };
          }).EllipsoidalOccluder;
          const occluder = new OccluderCtor(
            Cesium.Ellipsoid.WGS84,
            viewer.scene.camera.positionWC
          );
          if (!occluder.isPointVisible(cartesian)) return null;

          const canvasPos = Cesium.SceneTransforms.worldToWindowCoordinates(
            viewer.scene,
            cartesian
          );
          if (!canvasPos) return null;
          if (
            canvasPos.x < -50 ||
            canvasPos.y < -50 ||
            canvasPos.x > canvas.width + 50 ||
            canvasPos.y > canvas.height + 50
          ) {
            return null;
          }
          return { x: canvasPos.x, y: canvasPos.y };
        } catch {
          return null;
        }
      },

      getCameraState() {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium) return null;
        try {
          const camera = viewer.camera;
          const cartographic = Cesium.Cartographic.fromCartesian(camera.position);
          const altitude = cartographic.height;
          const lon = Cesium.Math.toDegrees(cartographic.longitude);
          const lat = Cesium.Math.toDegrees(cartographic.latitude);
          // 将高度映射到 1-20 缩放级别
          // 20m → 20 (最近), 20000000m → 1 (最远)
          const zoomLevel = Math.max(1, Math.min(20, Math.round(20 - Math.log2(altitude / 50))));
          return { altitude, zoomLevel, lon, lat };
        } catch {
          return null;
        }
      },

      stopFlight() {
        flightCancelledRef.current = true;
        setRoutePreparing(false);
        viewerRef.current?.camera.cancelFlight();
      },

      flyToRegion(center: { lon: number; lat: number; height: number; duration?: number }) {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium) return;

        flightCancelledRef.current = true;
        viewer.camera.cancelFlight();
        flightCancelledRef.current = false;

        const duration = center.duration ?? 2.5;

        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(center.lon, center.lat, center.height),
          duration,
          easingFunction: Cesium.EasingFunction.CUBIC_IN_OUT,
          orientation: {
            heading: 0,
            // 高空俯视整片区域（-30° 会看向地平线 / 太空）
            pitch: Cesium.Math.toRadians(-78),
            roll: 0,
          },
        });
      },

      focusTerrain(terrainId: string | null) {
        focusedTerrainRef.current = terrainId;
        applyTerrainRegionStyles(
          cesiumRef.current, viewerRef.current, terrainRegionRef.current,
          hoveredTerrainRef.current, terrainId, pokeRegionAnim
        );
        pokeRegionAnim();
      },

      focusCity(
        lon: number,
        lat: number,
        view?: { heightM?: number; pitchDeg?: number; headingDeg?: number },
      ) {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium || viewer.isDestroyed()) return;
        const height = view?.heightM ?? 26_000;
        const pitchDeg = view?.pitchDeg ?? -45;
        const heading = Cesium.Math.toRadians(view?.headingDeg ?? 0);
        // 从城市点沿 pitch 反方向后退，让城市落在画面中部（1° 纬度 ≈ 111km）
        const groundKm = height / 1000 / Math.tan(Math.abs(Cesium.Math.toRadians(pitchDeg)));
        const dest = Cesium.Cartesian3.fromDegrees(lon, lat - groundKm / 111, height);
        viewer.camera.flyTo({
          destination: dest,
          orientation: { heading, pitch: Cesium.Math.toRadians(pitchDeg), roll: 0 },
          duration: 1.6,
        });
      },

      flyToTerrain(terrain: TerrainPoint) {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium) return;

        flightCancelledRef.current = true;
        viewer.camera.cancelFlight();
        flightCancelledRef.current = false;

        cameraAt(Cesium, viewer, terrain.lat, terrain.lon, viewHeightForTerrain(terrain, terrain.cameraHeight), terrain.elevation, heightCacheRef.current)
          .then((dest) => {
            if (viewer.isDestroyed()) return;
            viewer.camera.flyTo({
              destination: dest,
              duration: 7,
              easingFunction: quarticEaseOut,
              orientation: {
                heading: 0,
                pitch: Cesium.Math.toRadians(WINDOW_PITCH_DEG),
                roll: Cesium.Math.toRadians(CRUISE_ROLL_DEG),
              },
            });
            viewer.scene.requestRender();
          })
          .catch((err) => {
            console.error("[CesiumMap] flyToTerrain failed:", err);
          });
      },

      flyToTerrainAndWait(terrain: TerrainPoint, cameraOptions?: { heading?: number; pitch?: number }): Promise<void> {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium) return Promise.resolve();

        flightCancelledRef.current = true;
        viewer.camera.cancelFlight();
        flightCancelledRef.current = false;

        const heading = cameraOptions?.heading ?? 0;
        const pitchDeg = cameraOptions?.pitch ?? WINDOW_PITCH_DEG;

        console.log("[CesiumMap.flyToTerrainAndWait] INPUT:");
        console.log("  terrain.id:", terrain.id);
        console.log("  terrain.lat:", terrain.lat);
        console.log("  terrain.lon:", terrain.lon);
        console.log("  terrain.cameraHeight:", terrain.cameraHeight);
        console.log("  terrain.category:", terrain.category);
        console.log("  cameraOptions.heading:", heading.toFixed(1) + "°");
        console.log("  cameraOptions.pitch:", pitchDeg.toFixed(1) + "°");
        console.log("  viewHeightForTerrain result:", viewHeightForTerrain(terrain, terrain.cameraHeight));

        return cameraAt(
          Cesium,
          viewer,
          terrain.lat,
          terrain.lon,
          viewHeightForTerrain(terrain, terrain.cameraHeight),
          terrain.elevation,
          heightCacheRef.current
        ).then(
          (dest) =>
            new Promise<void>((resolve) => {
              if (viewer.isDestroyed()) {
                resolve();
                return;
              }
              viewer.camera.flyTo({
                destination: dest,
                duration: 7,
                easingFunction: quarticEaseOut,
                orientation: {
                  heading: Cesium.Math.toRadians(heading),
                  pitch: Cesium.Math.toRadians(pitchDeg),
                  roll: Cesium.Math.toRadians(CRUISE_ROLL_DEG),
                },
                complete: () => {
                  console.log("[CesiumMap] flyTo complete:", terrain.id);
                  // 记录实际 Camera 位置
                  try {
                    const cam = viewer.camera;
                    const camCarto = Cesium.Cartographic.fromCartesian(cam.position);
                    const camLon = Cesium.Math.toDegrees(camCarto.longitude);
                    const camLat = Cesium.Math.toDegrees(camCarto.latitude);
                    const camH = camCarto.height;
                    const camHeading = Cesium.Math.toDegrees(cam.heading);
                    const camPitch = Cesium.Math.toDegrees(cam.pitch);
                    const camRoll = Cesium.Math.toDegrees(cam.roll);

                    // 计算目标点在屏幕上的位置
                    const targetPos = Cesium.Cartesian3.fromDegrees(terrain.lon, terrain.lat);
                    const screenPos = Cesium.SceneTransforms.worldToWindowCoordinates(
                      viewer.scene,
                      targetPos
                    );

                    const canvas = viewer.canvas;
                    const screenX = screenPos ? screenPos.x / canvas.width : null;
                    const screenY = screenPos ? 1.0 - (screenPos.y / canvas.width) : null;

                    // 计算 ViewRectangle
                    const viewRect = cam.computeViewRectangle(Cesium.Ellipsoid.WGS84);

                    console.log(`[CesiumMap] Camera actual position: [${camLon.toFixed(4)}, ${camLat.toFixed(4)}] height=${Math.round(camH)}m (${Math.round(camH/1000)}km)`);
                    console.log(`[CesiumMap] Camera orientation: heading=${camHeading.toFixed(1)}° pitch=${camPitch.toFixed(1)}° roll=${camRoll.toFixed(1)}°`);
                    const frustum = cam.frustum;
                    const fovDeg = frustum instanceof Cesium.PerspectiveFrustum && frustum.fov ? Cesium.Math.toDegrees(frustum.fov).toFixed(1) : 'N/A';
                    console.log(`[CesiumMap] Camera FOV: ${fovDeg}°`);
                    console.log(`[CesiumMap] Target on screen: [${screenX?.toFixed(3) ?? 'null'}, ${screenY?.toFixed(3) ?? 'null'}] (0,0=左上，0.5,0.5=中心，1,1=右下)`);
                    console.log(`[CesiumMap] ViewRectangle: [${viewRect?.west.toFixed(4)}, ${viewRect?.south.toFixed(4)}] → [${viewRect?.east.toFixed(4)}, ${viewRect?.north.toFixed(4)}]`);
                    console.log(`[CesiumMap] Target in ViewRectangle: ${viewRect ? (viewRect.west <= terrain.lon && terrain.lon <= viewRect.east && viewRect.south <= terrain.lat && terrain.lat <= viewRect.north ? 'YES' : 'NO') : 'N/A'}`);
                    console.log(`[CesiumMap] Camera requested: target=[${terrain.lon}, ${terrain.lat}] range=${terrain.cameraHeight}m heading=${heading}° pitch=${pitchDeg}°`);
                  } catch { /* ignore */ }
                  // 等待 tiles 收敛后再 resolve
                  waitForTilesSettled(viewer, 1000, 8000).then(() => {
                    console.log("[CesiumMap] tiles settled:", terrain.id);
                    resolve();
                  });
                },
                cancel: () => {
                  console.log("[CesiumMap] flyTo cancelled:", terrain.id);
                  resolve();
                },
              });
              viewer.scene.requestRender();
            })
        );
      },

      flyRoute(route: FlightRoute, callbacks: RouteFlyCallbacks) {
        flightCancelledRef.current = false;
        const viewer = viewerRef.current;
        if (!viewer) return;

        void import("cesium").then(async (Cesium) => {
          const waypoints = resolveRouteWaypoints(route);
          if (waypoints.length < 2) return;

          callbacks.onPreparingRoute?.();
          setRoutePreparing(true);

          // 轻量准备：采样航点地表高程（用于镜头高度）+ 画航线
          await preloadRoute(Cesium, viewer, waypoints, heightCacheRef.current);
          if (flightCancelledRef.current) {
            setRoutePreparing(false);
            callbacks.onCancelled?.();
            return;
          }

          // 飞行途中把地形细节稍微调粗 —— 减少切片加载，过洋 / 长途更顺、少抖。
          // 结束后恢复（见下方 restoreDetail）。
          const prevSSE = viewer.scene.globe.maximumScreenSpaceError;
          viewer.scene.globe.maximumScreenSpaceError = 4;
          const restoreDetail = () => {
            viewer.scene.globe.maximumScreenSpaceError = prevSSE;
            viewer.scene.requestRender();
          };

          const n = waypoints.length;

          // 全程恒定的巡航取景高度（取沿途最高需求，避免忽上忽下的"俯冲"感）
          let flyHeight = route.cruiseHeight ?? 11000;
          for (const w of waypoints) {
            flyHeight = Math.max(flyHeight, viewHeightForTerrain(w.terrain, route.cruiseHeight ?? 11000));
          }
          flyHeight = Math.min(Math.max(flyHeight, 42000), 130000);

          // 预取所有航点的镜头位置（含地表高程）—— 飞行过程中不再有异步停顿
          const camPts: import("cesium").Cartesian3[] = [];
          for (const w of waypoints) {
            camPts.push(await cameraAt(
              Cesium, viewer, w.lat, w.lon, flyHeight,
              w.elevation ?? w.terrain?.elevation ?? 500,
              heightCacheRef.current,
            ));
          }
          if (flightCancelledRef.current) { restoreDetail(); setRoutePreparing(false); callbacks.onCancelled?.(); return; }

          // 每个航点的朝向 = 前后航点连线的切向（端点用相邻段）
          const headings = waypoints.map((_, i) => {
            const a = waypoints[Math.max(0, i - 1)]!;
            const b = waypoints[Math.min(n - 1, i + 1)]!;
            return bearingRadians(a.lat, a.lon, b.lat, b.lon);
          });

          // 沿航线累计弧长（大圆距离）
          const cum = [0];
          for (let i = 1; i < n; i++) {
            cum.push(cum[i - 1]! + Math.max(1, haversineMeters(
              waypoints[i - 1]!.lat, waypoints[i - 1]!.lon, waypoints[i]!.lat, waypoints[i]!.lon)));
          }
          const total = cum[n - 1]!;

          const pitchRad = Cesium.Math.toRadians(WINDOW_PITCH_DEG);
          const rollRad = Cesium.Math.toRadians(CRUISE_ROLL_DEG);

          // 摆到起点位（用与飞行同一高度，衔接不跳）
          viewer.camera.setView({
            destination: camPts[0]!,
            orientation: { heading: headings[0]!, pitch: pitchRad, roll: rollRad },
          });
          viewer.scene.requestRender();

          setRoutePreparing(false);
          callbacks.onRouteReady?.();
          // 起飞前停一下，让人看清「从哪起飞」
          callbacks.onFlyoverWaypoint?.(waypoints[0]!, 0);
          await sleep(2200);
          if (flightCancelledRef.current) { restoreDetail(); callbacks.onCancelled?.(); return; }

          // 解说与镜头飞行并行
          let narrationOver = false;
          const narrationDone = Promise.resolve(callbacks.onNarrate())
            .catch(() => {})
            .finally(() => { narrationOver = true; });

          // 用户一旦自己滚轮/拖动地图 → 交还控制权（解说与地形名继续同步）
          let userTookOver = false;
          const relinquish = () => { userTookOver = true; };
          const canvas = viewer.scene.canvas;
          canvas.addEventListener("wheel", relinquish, { passive: true });
          canvas.addEventListener("pointerdown", relinquish, { passive: true });

          const catmull = (
            p0: import("cesium").Cartesian3, p1: import("cesium").Cartesian3,
            p2: import("cesium").Cartesian3, p3: import("cesium").Cartesian3, t: number,
          ) => {
            const t2 = t * t, t3 = t2 * t;
            const term = (a: number, b: number, c: number, d: number) =>
              0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
            return new Cesium.Cartesian3(
              term(p0.x, p1.x, p2.x, p3.x),
              term(p0.y, p1.y, p2.y, p3.y),
              term(p0.z, p1.z, p2.z, p3.z),
            );
          };
          const lerpAngle = (a: number, b: number, t: number) => {
            let d = b - a;
            while (d > Math.PI) d -= 2 * Math.PI;
            while (d < -Math.PI) d += 2 * Math.PI;
            return a + d * t;
          };

          // 兜底节拍：无法测量解说进度时用估算时长
          const estimatedTotalSec = Math.max(45, callbacks.estNarrationSec ?? ROUTE_FLIGHT_SEC);
          const fallbackMs = estimatedTotalSec * 1000;
          const startMs = performance.now();
          let firedUpTo = 0;
          let smoothP = 0; // 平滑后的进度，防止解说进度回跳/抖动
          // 进度→距离映射：在每个地形/地标航点插入停留平台，见函数注释
          const progressToDistance = buildRouteProgressMap(
            waypoints, cum, total, WAYPOINT_HOLD_SEC, estimatedTotalSec,
          );

          await new Promise<void>((resolve) => {
            const tick = () => {
              if (flightCancelledRef.current) { resolve(); return; }

              // 进度以解说为准（解说播完时航线也飞完）
              const np = callbacks.narrationProgress?.();
              const elapsed = performance.now() - startMs;
              if (narrationOver) {
                // 解说已结束：从当前位置指数平滑收到终点（~1.5s）
                smoothP = Math.min(1, smoothP + (1 - smoothP) * 0.06 + 0.003);
              } else if (np != null) {
                // 跟随解说进度（currentTime/duration 本身平滑单调）——镜头与地形名不落后
                smoothP = Math.max(smoothP, np);
              } else {
                // 解说还没出声 / 浏览器 TTS 不可测 → 按估算时长走
                smoothP = Math.max(smoothP, Math.min(0.97, elapsed / fallbackMs));
              }
              const p = smoothP;
              const targetDist = progressToDistance(p);

              let j = 0;
              while (j < n - 2 && cum[j + 1]! <= targetDist) j++;
              const segLen = Math.max(1, cum[j + 1]! - cum[j]!);
              const lt = Math.min(1, Math.max(0, (targetDist - cum[j]!) / segLen));

              const pos = catmull(
                camPts[Math.max(0, j - 1)]!, camPts[j]!,
                camPts[Math.min(n - 1, j + 1)]!, camPts[Math.min(n - 1, j + 2)]!, lt,
              );
              const heading = lerpAngle(headings[j]!, headings[Math.min(n - 1, j + 1)]!, lt);

              if (!userTookOver) {
                viewer.camera.setView({ destination: pos, orientation: { heading, pitch: pitchRad, roll: rollRad } });
              }
              viewer.scene.requestRender();

              while (firedUpTo < j) {
                firedUpTo++;
                const w = waypoints[firedUpTo]!;
                if (w.kind === "terrain" || w.kind === "feature") callbacks.onFlyoverWaypoint?.(w, firedUpTo);
              }

              // 收尾条件：解说结束且已到终点，或（无解说）估算时长到
              if (p >= 0.999 && (narrationOver || np == null)) { resolve(); return; }
              requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });

          canvas.removeEventListener("wheel", relinquish);
          canvas.removeEventListener("pointerdown", relinquish);
          restoreDetail();
          if (flightCancelledRef.current) { callbacks.onCancelled?.(); return; }

          // 收尾：抵达到达机场
          callbacks.onFlyoverWaypoint?.(waypoints[n - 1]!, n - 1);

          // 等解说播完（封顶 60s，避免异常时卡住）
          await Promise.race([narrationDone, sleep(60000)]);

          if (!flightCancelledRef.current) callbacks.onComplete();
        });
      },
    }));

    // 模式切换：travel 时清掉地形区域高亮 + hover
    useEffect(() => {
      modeRef.current = appMode;
      if (appMode === "travel") {
        hoveredTerrainRef.current = null;
        focusedTerrainRef.current = null;
        applyTerrainRegionStyles(
          cesiumRef.current,
          viewerRef.current,
          terrainRegionRef.current,
          null,
          null,
          pokeRegionAnim,
        );
        pokeRegionAnim();
        onTerrainHover?.(null);
      }
    }, [appMode, onTerrainHover, pokeRegionAnim]);

    useEffect(() => {
      let cancelled = false;
      let resizeObserver: ResizeObserver | null = null;
      // ref.current 全程指向同一个 Map（仅被增删改，从不重新赋值），
      // 在此捕获一份供 cleanup 使用以满足 exhaustive-deps 检查
      const terrainRegions = terrainRegionRef.current;

      /** 等待容器获得非零尺寸（带超时保护） */
      function waitForDimensions(el: HTMLElement): Promise<void> {
        return new Promise((resolve) => {
          if (el.clientWidth > 0 && el.clientHeight > 0) {
            resolve();
            return;
          }
          console.warn("[CesiumMap] Container has 0 dimensions, waiting for layout...");
          const ro = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (entry && entry.contentRect.width > 0 && entry.contentRect.height > 0) {
              console.log("[CesiumMap] Container dimensions resolved:", entry.contentRect.width, "x", entry.contentRect.height);
              ro.disconnect();
              clearTimeout(timer);
              resolve();
            }
          });
          ro.observe(el);
          // 超时保护：3秒后强制继续，避免永久挂起
          const timer = setTimeout(() => {
            console.warn("[CesiumMap] waitForDimensions timeout (3s), proceeding with init. Container:", el.clientWidth, "x", el.clientHeight);
            ro.disconnect();
            resolve();
          }, 3000);
        });
      }

      async function init() {
        if (!containerRef.current) return;

        try {
          (window as unknown as { CESIUM_BASE_URL?: string }).CESIUM_BASE_URL =
            "/cesium/";

          const Cesium = await import("cesium");
          await import("cesium/Build/Cesium/Widgets/widgets.css");

          if (cancelled || !containerRef.current) return;

          // 等待容器获得非零尺寸 — 避免 Cesium WebGL 崩溃
          await waitForDimensions(containerRef.current);

          if (cancelled || !containerRef.current) return;

          const ionToken =
            process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN?.trim() ?? "";

          let terrainMode: TerrainMode = "ellipsoid";
          let terrainProvider: import("cesium").TerrainProvider;
          let imageryProvider: import("cesium").ImageryProvider | undefined;

          if (ionToken) {
            Cesium.Ion.defaultAccessToken = ionToken;
            try {
              terrainProvider = await Cesium.createWorldTerrainAsync();
              terrainMode = "world";
            } catch {
              terrainProvider = new Cesium.EllipsoidTerrainProvider();
            }
            // 显式创建 Ion 影像源 — 避免隐式默认行为导致空白瓦片
            try {
              imageryProvider = await Cesium.IonImageryProvider.fromAssetId(2); // Bing Maps
            } catch {
              // Ion 影像失败时使用默认
            }
          } else {
            terrainProvider = new Cesium.EllipsoidTerrainProvider();
          }

          if (cancelled || !containerRef.current) return;

          const viewer = new Cesium.Viewer(containerRef.current, {
            animation: false,
            baseLayerPicker: false,
            fullscreenButton: false,
            geocoder: false,
            homeButton: false,
            infoBox: false,
            navigationHelpButton: false,
            sceneModePicker: false,
            selectionIndicator: false,
            timeline: false,
            terrainProvider,
            creditContainer: document.createElement("div"),
            requestRenderMode: false,
          });

          // 显式添加 Ion 影像源
          if (imageryProvider) {
            viewer.imageryLayers.removeAll();
            viewer.imageryLayers.addImageryProvider(imageryProvider);
          }

          viewer.scene.globe.depthTestAgainstTerrain = true;
          viewer.scene.fog.enabled = false;
          viewer.scene.globe.maximumScreenSpaceError = 2.0;
          if (viewer.scene.skyAtmosphere) {
            viewer.scene.skyAtmosphere.show = false;
          }

          // 显式配置相机控制器 — 确保触控板缩放和拖拽旋转正常
          const controller = viewer.scene.screenSpaceCameraController;
          controller.enableZoom = true;
          controller.enableRotate = true;
          controller.enableTilt = true;
          controller.enableTranslate = true;
          controller.inertiaSpin = 0.9;
          controller.inertiaZoom = 0.9;
          controller.inertiaTranslate = 0.9;

          viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(
              INTRO_VIEW.lon,
              INTRO_VIEW.lat,
              INTRO_VIEW.height
            ),
            orientation: {
              heading: INTRO_VIEW.heading,
              pitch: INTRO_VIEW.pitch,
              roll: 0,
            },
          });

          viewerRef.current = viewer;
          cesiumRef.current = Cesium;

          // 暴露 viewer / Cesium / debugCesium 到 window 供调试 —— 仅开发环境，
          // 生产环境不挂载这个调试面（避免任意访客能拿到 viewer 引用 / 触发 debug 方法）。
          if (process.env.NODE_ENV !== "production") {
          window.viewer = viewer;
          window.Cesium = Cesium;

          // Debug panel — 暴露到 window 供开发环境诊断
          const origTerrain = viewer.terrainProvider;
          const ellipsoidTerrain = new Cesium.EllipsoidTerrainProvider();

          window.debugCesium = {
            viewer,
            toggleTerrain() {
              const isEllipsoid = viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider;
              if (isEllipsoid) {
                viewer.terrainProvider = origTerrain;
                console.log("[debug] Terrain → WorldTerrain");
              } else {
                viewer.terrainProvider = ellipsoidTerrain;
                console.log("[debug] Terrain → EllipsoidTerrainProvider");
              }
              viewer.scene.requestRender();
            },
            toggleImagery() {
              const layer = viewer.imageryLayers.get(0);
              if (!layer) { console.log("[debug] No imagery layer"); return; }
              layer.show = !layer.show;
              console.log("[debug] Imagery show =", layer.show);
              viewer.scene.requestRender();
            },
            printLayers() {
              const count = viewer.imageryLayers.length;
              console.log("[debug] Imagery layers:", count);
              for (let i = 0; i < count; i++) {
                const layer = viewer.imageryLayers.get(i);
                console.log(`  [${i}]`, {
                  provider: layer.imageryProvider.constructor.name,
                  show: layer.show,
                  alpha: layer.alpha,
                  brightness: layer.brightness,
                  contrast: layer.contrast,
                  gamma: layer.gamma,
                });
              }
            },
            printTerrain() {
              const tp = viewer.terrainProvider;
              console.log("[debug] Terrain:", {
                type: tp.constructor.name,
                hasVertexNormals: tp.hasVertexNormals,
                hasWaterMask: tp.hasWaterMask,
              });
              console.log("[debug] Globe:", {
                maximumScreenSpaceError: viewer.scene.globe.maximumScreenSpaceError,
                depthTestAgainstTerrain: viewer.scene.globe.depthTestAgainstTerrain,
                terrainExaggeration:
                  (viewer.scene.globe as unknown as { terrainExaggeration?: number })
                    .terrainExaggeration ?? "N/A",
              });
            },
            /** Hover Pick 调试 — 鼠标移动时打印命中的 Feature */
            debugHover(enable: boolean = true) {
              window.__debugHover = enable;
              console.log(`[debug] Hover debug ${enable ? "enabled" : "disabled"}`);
            },
            /** 打印当前相机状态 */
            debugCamera() {
              const camera = viewer.camera;
              const carto = Cesium.Cartographic.fromCartesian(camera.position);
              const lon = Cesium.Math.toDegrees(carto.longitude);
              const lat = Cesium.Math.toDegrees(carto.latitude);
              const height = carto.height;
              const heading = Cesium.Math.toDegrees(camera.heading);
              const pitch = Cesium.Math.toDegrees(camera.pitch);
              const roll = Cesium.Math.toDegrees(camera.roll);
              console.log("[debug] Camera state:");
              console.log(`  position: [${lon.toFixed(4)}, ${lat.toFixed(4)}]`);
              console.log(`  height: ${Math.round(height)}m (${(height / 1000).toFixed(1)}km)`);
              console.log(`  heading: ${heading.toFixed(1)}°`);
              console.log(`  pitch: ${pitch.toFixed(1)}°`);
              console.log(`  roll: ${roll.toFixed(1)}°`);
              console.log(`  ground: ${Math.round(height - (viewer.scene.globe.getHeight(carto) ?? 0))}m above ground`);
            },
            /** 打印当前 zoomLevel 和可见标签 */
            debugLabels() {
              const camera = viewer.camera;
              const cartographic = Cesium.Cartographic.fromCartesian(camera.position);
              const altitude = cartographic.height;
              const zoomLevel = Math.max(1, Math.min(20, Math.round(20 - Math.log2(altitude / 50))));
              console.log("[debug] altitude:", Math.round(altitude / 1000), "km, zoomLevel:", zoomLevel);
              // 这里需要访问 labelManager，但它在 ExplorerApp 中
              // 先打印 zoomLevel，用户可以在 ExplorerApp 中验证
            },
          };
          console.log("[debug] window.debugCesium ready — use toggleTerrain(), toggleImagery(), printLayers(), printTerrain(), debugHover(), debugCamera(), debugLabels()");
          } // NODE_ENV guard end

          // 相机移动结束后触发额外渲染 — 确保瓦片精炼完成
          viewer.camera.moveEnd.addEventListener(() => {
            if (!viewer.isDestroyed()) {
              viewer.scene.requestRender();
            }
          });

          // 地形区域 Hover — pick terrainId，高亮该地形区域椭圆 + 通知标签系统
          const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

          handler.setInputAction((movement: ScreenSpaceEventHandler.MotionEvent) => {
            if (viewer.isDestroyed() || modeRef.current !== "study") return;
            // drillPick：重叠地块里取面积最小（最具体）的那个
            const hits = viewer.scene.drillPick(movement.endPosition, 8);
            let newHoveredId: string | null = null;
            let bestArea = Infinity;
            for (const h of hits) {
              const tid = h?.id?.properties?.getValue?.()?.terrainId;
              if (!tid) continue;
              const area = terrainRegionRef.current.get(tid)?.areaDeg2 ?? Infinity;
              if (area < bestArea) {
                bestArea = area;
                newHoveredId = tid;
              }
            }

            if (newHoveredId !== hoveredTerrainRef.current) {
              hoveredTerrainRef.current = newHoveredId;
              applyTerrainRegionStyles(
                Cesium, viewer, terrainRegionRef.current,
                newHoveredId, focusedTerrainRef.current, pokeRegionAnim
              );
              pokeRegionAnim();
              onTerrainHover?.(newHoveredId);
            }
          }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

          // 地形区域点击 — 命中最具体的地块即选中（不受当前大洲限制，可跨洲跳转）
          handler.setInputAction((click: ScreenSpaceEventHandler.PositionedEvent) => {
            if (viewer.isDestroyed() || modeRef.current !== "study") return;
            const hits = viewer.scene.drillPick(click.position, 8);
            let hitId: string | null = null;
            let bestArea = Infinity;
            for (const h of hits) {
              const tid = h?.id?.properties?.getValue?.()?.terrainId;
              if (!tid) continue;
              const area = terrainRegionRef.current.get(tid)?.areaDeg2 ?? Infinity;
              if (area < bestArea) {
                bestArea = area;
                hitId = tid;
              }
            }
            if (hitId) onTerrainSelectRef.current?.(hitId);
          }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

          // 瓦片加载完成后触发渲染 — 确保高分辨率瓦片显示
          viewer.scene.globe.tileLoadProgressEvent.addEventListener((e) => {
            if (!viewer.isDestroyed()) {
              if (e.queueLength === 0) {
                viewer.scene.requestRender();
              }
              // 调试：记录 tile 加载队列深度
              if (e.queueLength > 10) {
                console.log("[CesiumMap] tile queue:", e.queueLength);
              }
            }
          });

          // ResizeObserver — 侧边栏调整时同步 Cesium 画布尺寸
          resizeObserver = new ResizeObserver(() => {
            if (viewerRef.current && !viewerRef.current.isDestroyed()) {
              viewerRef.current.resize();
              viewerRef.current.scene.requestRender();
            }
          });
          resizeObserver.observe(containerRef.current);

          // 地形区域 — 每个地形：贴地透明拾取多边形 + 隐藏的抬升体。
          // 形状优先用 Natural Earth GeoJSON（data/gis/exports），否则用 bbox 八边形。
          // 抬升体的几何在首次 hover/focus 时按真实地表高程重建（见 tickTerrainRegions）。
          terrainRegionRef.current.clear();
          for (const entry of TERRAIN_REGISTRY) {
            let ring = await loadTerrainRing(entry.id);
            if (!ring) ring = bboxOctagon(entry.bbox);
            const flat = ring.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat));
            const hierarchy = new Cesium.PolygonHierarchy(flat);

            const pick = viewer.entities.add({
              polygon: { hierarchy, material: Cesium.Color.TRANSPARENT },
              properties: { terrainId: entry.id, terrainName: entry.nameZh },
            });
            const lift = viewer.entities.add({
              show: false,
              polygon: {
                hierarchy,
                perPositionHeight: true,
                extrudedHeight: 0,
                material: Cesium.Color.WHITE.withAlpha(0),
              },
              properties: { terrainId: entry.id },
            });
            const rim = viewer.entities.add({
              show: false,
              polyline: {
                positions: flat,
                width: REGION_RIM_WIDTH,
                material: Cesium.Color.WHITE.withAlpha(0),
                arcType: Cesium.ArcType.GEODESIC,
              },
              properties: { terrainId: entry.id },
            });
            terrainRegionRef.current.set(entry.id, {
              pick,
              lift,
              rim,
              ringDeg: ring,
              areaDeg2: ringAreaDeg2(ring),
              landmarkElev: entry.landmark.elevation ?? 500,
              groundHeights: null,
              sampling: false,
              cur: 0,
              target: 0,
              state: "idle",
            });
          }

          onTerrainMode?.(terrainMode);
          setStatus("ready");
          onReadyRef.current?.();
        } catch (err) {
          if (!cancelled) {
            setStatus("error");
            setErrorMessage(
              err instanceof Error ? err.message : "地图初始化失败"
            );
          }
        }
      }

      void init();

      return () => {
        cancelled = true;
        flightCancelledRef.current = true;
        resizeObserver?.disconnect();
        if (regionAnimRef.current != null) {
          cancelAnimationFrame(regionAnimRef.current);
          regionAnimRef.current = null;
        }
        terrainRegions.clear();
        viewerRef.current?.destroy();
        viewerRef.current = null;
      };
      // onReady 走 onReadyRef（见上），故意不放进依赖数组——见 onReadyRef 声明处注释。
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onTerrainMode]);

    return (
      <div className="relative h-full w-full">
        {/* touch-action: none 确保触控板手势（缩放/平移）传递给 Cesium */}
        <div ref={containerRef} className="h-full w-full" style={{ touchAction: "none" }} />

        {status === "loading" && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0c1218]/80 backdrop-blur-sm">
            <p className="text-sm tracking-wide text-white/70">
              正在加载三维地球…
            </p>
          </div>
        )}

        {status === "ready" && routePreparing && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0c1218]/70 backdrop-blur-sm">
            <p className="text-sm tracking-wide text-white/70">
              正在预加载航线区域地形…
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0c1218] p-6">
            <p className="max-w-md text-center text-sm text-red-300">
              {errorMessage ?? "地图加载失败"}
            </p>
          </div>
        )}
      </div>
    );
  }
);

async function cameraAt(
  Cesium: typeof import("cesium"),
  viewer: import("cesium").Viewer,
  lat: number,
  lon: number,
  heightAboveGround: number,
  fallbackElevation: number,
  cache: Map<string, number>
): Promise<import("cesium").Cartesian3> {
  const key = heightCacheKey(lon, lat);
  let ground = cache.get(key);

  if (ground === undefined) {
    const cartographic = Cesium.Cartographic.fromDegrees(lon, lat);
    const isEllipsoid =
      viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider;

    if (isEllipsoid) {
      ground = fallbackElevation;
    } else {
      try {
        const [sampled] = await Cesium.sampleTerrainMostDetailed(
          viewer.terrainProvider,
          [cartographic]
        );
        ground = sampled.height ?? fallbackElevation;
      } catch {
        ground = fallbackElevation;
      }
    }
    cache.set(key, ground);
  }

  return Cesium.Cartesian3.fromDegrees(lon, lat, ground + heightAboveGround);
}

async function preloadRoute(
  Cesium: typeof import("cesium"),
  viewer: import("cesium").Viewer,
  waypoints: ResolvedWaypoint[],
  cache: Map<string, number>
): Promise<void> {
  const isEllipsoid =
    viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider;

  const lons = waypoints.map((w) => w.lon);
  const lats = waypoints.map((w) => w.lat);
  const west = Math.min(...lons) - 1.5;
  const east = Math.max(...lons) + 1.5;
  const south = Math.min(...lats) - 1;
  const north = Math.max(...lats) + 1;

  viewer.camera.flyTo({
    destination: Cesium.Rectangle.fromDegrees(west, south, east, north),
    duration: 0,
  });
  viewer.scene.requestRender();
  await sleep(400);

  if (!isEllipsoid) {
    const positions = waypoints.map((w) =>
      Cesium.Cartographic.fromDegrees(w.lon, w.lat)
    );
    try {
      const sampled = await Cesium.sampleTerrainMostDetailed(
        viewer.terrainProvider,
        positions
      );
      sampled.forEach((p, i) => {
        const w = waypoints[i]!;
        cache.set(
          heightCacheKey(w.lon, w.lat),
          p.height ?? w.terrain?.elevation ?? 500
        );
      });
    } catch {
      /* 使用航点海拔回退 */
    }
  }

  for (const w of waypoints) {
    if (!cache.has(heightCacheKey(w.lon, w.lat))) {
      cache.set(heightCacheKey(w.lon, w.lat), w.terrain?.elevation ?? 500);
    }
  }

  await sleep(300);
  viewer.scene.requestRender();
}

export default CesiumMap;
