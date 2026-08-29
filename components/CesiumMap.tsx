"use client";

import { bearingRadians, haversineMeters } from "@/lib/geo";
import { resolveRouteWaypoints, type ResolvedWaypoint } from "@/lib/routes";
import { XINJIANG_CORE_FEATURES } from "@/features/xinjiang-core-features";
import { CHINA_CORE_FEATURES } from "@/features/china-core-features";
import type { GeographicFeature } from "@/features/types";
import { getTerrainFOI } from "@/lib/foi-registry";
import { computeCameraFromPolygon, computeCameraFromRidge } from "@/lib/auto-camera";
import { TERRAIN_REGISTRY } from "@/lib/terrain-registry";

/** 所有 Feature (新疆 + 全国) */
const ALL_FEATURES: GeographicFeature[] = [...XINJIANG_CORE_FEATURES, ...CHINA_CORE_FEATURES];
import type { FlightRoute } from "@/types/route";
import type { TerrainPoint } from "@/types/terrain";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

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
  /** 显示指定地形的 Debug 信息（FOI + 边界 + Camera Target + Range） */
  debugBoundaries: (boundaryId: string) => void;
}

export interface RouteFlyCallbacks {
  /** 飞行开始：播放整条航线的解说，返回 Promise（解说结束时 resolve）。非阻塞 —— 镜头同时飞行。 */
  onNarrate: () => Promise<void>;
  /** 镜头经过某航点（非阻塞，仅用于同步面板显示当前地形名） */
  onFlyoverWaypoint?: (waypoint: ResolvedWaypoint, index: number) => void;
  onPreparingRoute?: () => void;
  onRouteReady?: () => void;
  onComplete: () => void;
  onCancelled?: () => void;
}

/** 一条航线的镜头飞行总时长（秒）—— 与 ~700 字解说大致对齐，控制在 3 分钟内 */
const ROUTE_FLIGHT_SEC = 165;

export type TerrainMode = "world" | "ellipsoid";

interface CesiumMapProps {
  onReady?: () => void;
  onTerrainMode?: (mode: TerrainMode) => void;
  /** 鼠标 hover 到某地形区域时回调其 id（移出时 null） */
  onTerrainHover?: (terrainId: string | null) => void;
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
  settlement: 5000,       // 绿洲聚落：近距离观看
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

      const tilesLoaded = (viewer.scene.globe as any).tilesLoaded;

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

/** 在 Canvas 上绘制调试标记图（红十字/黄十字）—— billboard 用 */
function makeDebugMarkerImage(Cesium: typeof import("cesium"), color: import("cesium").Color): string {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, size, size);

  const center = size / 2;
  const half = size * 0.4;
  const arm = size * 0.08;

  // 十字
  ctx.fillStyle = `rgba(${Math.round(color.red * 255)},${Math.round(color.green * 255)},${Math.round(color.blue * 255)},1)`;
  ctx.fillRect(center - arm, center - half, arm * 2, half * 2);
  ctx.fillRect(center - half, center - arm, half * 2, arm * 2);

  // 外圈
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(center, center, half + 12, 0, Math.PI * 2);
  ctx.stroke();

  // 阴影
  ctx.shadowColor = "rgba(0,0,0,0.7)";
  ctx.shadowBlur = 12;
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.strokeRect(center - half - 4, center - half - 4, half * 2 + 8, half * 2 + 8);

  const blob = new Blob([canvas.toDataURL("image/png")], { type: "image/png" });
  return URL.createObjectURL(blob);
}

const CesiumMap = forwardRef<CesiumMapHandle, CesiumMapProps>(
  function CesiumMap({ onReady, onTerrainMode, onTerrainHover, appMode = "study" }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const modeRef = useRef(appMode);
    const viewerRef = useRef<import("cesium").Viewer | null>(null);
    const cesiumRef = useRef<typeof import("cesium") | null>(null);
    const heightCacheRef = useRef<Map<string, number>>(new Map());
    const flightCancelledRef = useRef(false);
    const routeEntityRef = useRef<import("cesium").Entity | null>(null);
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

      debugBoundaries(boundaryId: string) {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium) return;

        // 1. 清除旧的 debug-boundary 实体
        const existing = viewer.entities.values.filter((e: any) => e.properties?.getValue?.()?.isDebugBoundary);
        existing.forEach((e: any) => viewer.entities.remove(e));

        // 2. 查找 feature
        const feature = ALL_FEATURES.find((f) => f.id === boundaryId);
        if (!feature) { console.log("[Debug] feature not found:", boundaryId); return; }

        // 3. 获取 FOI
        const terrainFOI = getTerrainFOI(boundaryId);

        // 4. 画 FOI 红点（billboard + heightReference.NONE + 绝对不可见）
        if (terrainFOI) {
          const foiPos = Cesium.Cartesian3.fromDegrees(terrainFOI.primary.lon, terrainFOI.primary.lat, 500);
          viewer.entities.add({
            position: foiPos,
            billboard: {
              image: makeDebugMarkerImage(Cesium, Cesium.Color.RED),
              scale: 3.0,
              verticalOrigin: Cesium.VerticalOrigin.CENTER,
              heightReference: Cesium.HeightReference.NONE,
            },
            label: {
              text: `FOI: ${terrainFOI.primary.name}`,
              font: "bold 18px monospace",
              fillColor: Cesium.Color.RED,
              outlineColor: Cesium.Color.WHITE,
              outlineWidth: 4,
              style: Cesium.LabelStyle.FILL_AND_OUTLINE,
              pixelOffset: new Cesium.Cartesian2(0, -30),
            },
            properties: { isDebugBoundary: true, debugType: "foi" },
          });
          console.log(`[Debug] FOI: ${terrainFOI.primary.name} [${terrainFOI.primary.lon}, ${terrainFOI.primary.lat}]`);
        }

        // 5. 画 FOI geometryCoords 边界（billboard 线，不 clampToGround）
        if (terrainFOI) {
          const coords = terrainFOI.geometryCoords;
          if (terrainFOI.featureType === "mountain_system") {
            const ridgePositions = coords.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat, 100));
            viewer.entities.add({
              polyline: {
                positions: ridgePositions,
                width: 6,
                material: Cesium.Color.RED,
              },
              properties: { isDebugBoundary: true, debugType: "ridge" },
            });
          } else {
            const positions = coords.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat, 100));
            viewer.entities.add({
              polygon: {
                hierarchy: new Cesium.PolygonHierarchy(positions),
                material: Cesium.Color.RED.withAlpha(0.3),
                outline: true,
                outlineColor: Cesium.Color.RED,
                outlineWidth: 4,
              },
              properties: { isDebugBoundary: true, debugType: "polygon" },
            });
          }
          console.log(`[Debug] ${terrainFOI.featureType} boundary: ${coords.length} coords`);
        }

        // 6. 计算 Camera Target + range + source
        const foi = getTerrainFOI(boundaryId);
        let target: [number, number] | null = null;
        let range: number | null = null;
        let source = "";

        if (foi) {
          if (foi.featureType === "mountain_system") {
            const cp = computeCameraFromRidge(foi.geometryCoords, foi.primary);
            target = cp.target; range = cp.range; source = "FOI/AutoCamera(Ridge)";
          } else {
            const cp = computeCameraFromPolygon(foi.geometryCoords, foi.primary);
            target = cp.target; range = cp.range; source = "FOI/AutoCamera(Polygon)";
          }
        } else if (feature.cameraGeometry) {
          target = feature.cameraGeometry.target;
          range = feature.cameraGeometry.range;
          source = "CameraGeometry (manual)";
        } else {
          source = "No camera source";
        }

        // 7. 画 Camera Target 黄点（billboard + heightReference.NONE + 超大小）
        if (target) {
          const targetPos = Cesium.Cartesian3.fromDegrees(target[0], target[1], 500);
          viewer.entities.add({
            position: targetPos,
            billboard: {
              image: makeDebugMarkerImage(Cesium, Cesium.Color.YELLOW),
              scale: 4.0,
              verticalOrigin: Cesium.VerticalOrigin.CENTER,
              heightReference: Cesium.HeightReference.NONE,
            },
            label: {
              text: `${source} | ${(range! / 1000).toFixed(0)}km\n[${target[0].toFixed(2)}°, ${target[1].toFixed(2)}°]`,
              font: "bold 16px monospace",
              fillColor: Cesium.Color.YELLOW,
              outlineColor: Cesium.Color.BLACK,
              outlineWidth: 4,
              style: Cesium.LabelStyle.FILL_AND_OUTLINE,
              pixelOffset: new Cesium.Cartesian2(0, -50),
            },
            properties: { isDebugBoundary: true, debugType: "target" },
          });
          console.log(`[Debug] Target: [${target[0]}, ${target[1]}] range=${range! / 1000}km source=${source}`);
        }

        // 8. 打印到 console（总结）
        console.log(`[Debug] ${feature.name}: source=${source}, range=${range ? (range / 1000).toFixed(0) : "N/A"}km`);

        viewer.scene.requestRender();
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
                  } catch (e) { /* ignore */ }
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
          drawRouteLine(Cesium, viewer, waypoints, routeEntityRef);

          // 立刻把镜头摆到起点机场上空、朝向航线方向（不做慢飞概览）
          const start = waypoints[0]!;
          const next = waypoints[1]!;
          const startDest = await cameraAt(
            Cesium, viewer, start.lat, start.lon,
            route.cruiseHeight ?? 11000, start.elevation ?? 200,
            heightCacheRef.current
          );
          viewer.camera.setView({
            destination: startDest,
            orientation: {
              heading: bearingRadians(start.lat, start.lon, next.lat, next.lon),
              pitch: Cesium.Math.toRadians(WINDOW_PITCH_DEG),
              roll: Cesium.Math.toRadians(CRUISE_ROLL_DEG),
            },
          });
          viewer.scene.requestRender();

          setRoutePreparing(false);
          callbacks.onRouteReady?.();
          await sleep(600);
          if (flightCancelledRef.current) { callbacks.onCancelled?.(); return; }

          // 解说与镜头飞行并行
          const narrationDone = Promise.resolve(callbacks.onNarrate()).catch(() => {});

          // 镜头沿航线匀速飞完，总时长 ROUTE_FLIGHT_SEC；各段按距离分配时间
          const segDist: number[] = [];
          let totalDist = 0;
          for (let i = 1; i < waypoints.length; i++) {
            const d = haversineMeters(
              waypoints[i - 1]!.lat, waypoints[i - 1]!.lon,
              waypoints[i]!.lat, waypoints[i]!.lon
            );
            segDist.push(d);
            totalDist += d;
          }

          for (let i = 1; i < waypoints.length; i++) {
            if (flightCancelledRef.current) { callbacks.onCancelled?.(); return; }
            const from = waypoints[i - 1]!;
            const to = waypoints[i]!;
            const legSec = Math.max(6, ROUTE_FLIGHT_SEC * (segDist[i - 1]! / totalDist));

            const targetHeight = viewHeightForTerrain(to.terrain, route.cruiseHeight ?? 11000);
            const dest = await cameraAt(
              Cesium, viewer, to.lat, to.lon, targetHeight,
              to.elevation ?? to.terrain?.elevation ?? 500,
              heightCacheRef.current
            );

            await new Promise<void>((resolve) => {
              viewer.camera.flyTo({
                destination: dest,
                duration: legSec,
                easingFunction: Cesium.EasingFunction.LINEAR_NONE,
                orientation: {
                  heading: bearingRadians(from.lat, from.lon, to.lat, to.lon),
                  pitch: Cesium.Math.toRadians(WINDOW_PITCH_DEG),
                  roll: Cesium.Math.toRadians(CRUISE_ROLL_DEG),
                },
                complete: () => resolve(),
                cancel: () => resolve(),
              });
            });

            if (flightCancelledRef.current) { callbacks.onCancelled?.(); return; }
            // 非阻塞：同步面板显示当前飞越的地形
            if (to.kind === "terrain") callbacks.onFlyoverWaypoint?.(to, i);
          }

          // 镜头到终点后，等解说播完（封顶 60s，避免异常时卡住）
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

          // 暴露 viewer 和 Cesium 到 window 供调试
          (window as any).viewer = viewer;
          (window as any).Cesium = Cesium;
          (window as any).__ALL_FEATURES = ALL_FEATURES;

          // Debug panel — 暴露到 window 供生产环境诊断
          const origTerrain = viewer.terrainProvider;
          const ellipsoidTerrain = new Cesium.EllipsoidTerrainProvider();

          (window as any).debugCesium = {
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
                hasVertexNormals: (tp as any).hasVertexNormals,
                hasWaterMask: (tp as any).hasWaterMask,
              });
              console.log("[debug] Globe:", {
                maximumScreenSpaceError: viewer.scene.globe.maximumScreenSpaceError,
                depthTestAgainstTerrain: viewer.scene.globe.depthTestAgainstTerrain,
                terrainExaggeration: (viewer.scene.globe as any).terrainExaggeration ?? "N/A",
              });
            },
            /** 删除 — 已替换为 debugBoundaries(id) 新方法 */
            debugBoundaries: undefined as any,
            /** 显示指定 Feature (或全部) 的 hoverGeometry */
            debugGeometry(target: string | boolean = true) {
              const existing = viewer.entities.values.filter((e: any) => e.properties?.getValue?.()?.isDebugGeometry);
              existing.forEach((e: any) => viewer.entities.remove(e));

              if (target === false) {
                console.log("[debug] Geometry debug hidden");
                viewer.scene.requestRender();
                return;
              }

              const colors: Record<string, [number, number, number]> = {
                tianshan: [255, 0, 0],
                kunlun: [0, 255, 0],
                altai: [0, 0, 255],
                "junggar-basin": [255, 165, 0],
                "tarim-basin": [255, 255, 0],
                pamir: [128, 0, 128],
                taklamakan: [255, 192, 203],
                sayram: [0, 255, 255],
              };

              const features = typeof target === "string"
                ? ALL_FEATURES.filter(f => f.id === target)
                : ALL_FEATURES;

              for (const feature of features) {
                const geo = feature.hoverGeometry;
                if (!geo) continue;
                const color = colors[feature.id] ?? [255, 255, 255];

                if (geo.type === "Polygon") {
                  const coords = geo.coordinates[0] as [number, number][];
                  const positions = coords.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat));
                  viewer.entities.add({
                    polygon: {
                      hierarchy: new Cesium.PolygonHierarchy(positions),
                      material: Cesium.Color.fromBytes(color[0], color[1], color[2], 60),
                      outline: true,
                      outlineColor: Cesium.Color.fromBytes(color[0], color[1], color[2], 180),
                      outlineWidth: 2,
                    },
                    properties: { isDebugGeometry: true, featureId: feature.id },
                  });
                  console.log(`[debug] ${feature.name}: Polygon (${coords.length} vertices)`);
                } else if (geo.type === "RidgeCorridor") {
                  for (let si = 0; si < geo.segments.length; si++) {
                    const ring = geo.segments[si][0] as [number, number][];
                    if (!ring) continue;
                    const positions = ring.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat));
                    viewer.entities.add({
                      polygon: {
                        hierarchy: new Cesium.PolygonHierarchy(positions),
                        material: Cesium.Color.fromBytes(color[0], color[1], color[2], 50),
                        outline: true,
                        outlineColor: Cesium.Color.fromBytes(color[0], color[1], color[2], 150),
                        outlineWidth: 2,
                      },
                      properties: { isDebugGeometry: true, featureId: feature.id },
                    });
                  }
                  const ridgePositions = geo.ridgeLine.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat));
                  viewer.entities.add({
                    polyline: {
                      positions: ridgePositions,
                      width: 3,
                      material: Cesium.Color.fromBytes(color[0], color[1], color[2], 200),
                      clampToGround: true,
                    },
                    properties: { isDebugGeometry: true, featureId: feature.id },
                  });
                  console.log(`[debug] ${feature.name}: RidgeCorridor (${geo.segments.length} segments, ${geo.ridgeLine.length} ridge points)`);
                }
              }
              viewer.scene.requestRender();
            },
            /** Hover Pick 调试 — 鼠标移动时打印命中的 Feature */
            debugHover(enable: boolean = true) {
              (window as any).__debugHover = enable;
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
            /** 打印所有 Feature 的镜头目标 */
            debugFlight() {
              console.log("[debug] Feature camera targets:");
              for (const f of ALL_FEATURES) {
                const cg = f.cameraGeometry;
                if (cg) {
                  console.log(`  ${f.id} (${f.name}): target=[${cg.target[0]}, ${cg.target[1]}] range=${cg.range} heading=${cg.heading} pitch=${cg.pitch}`);
                } else {
                  console.log(`  ${f.id} (${f.name}): no cameraGeometry`);
                }
              }
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
            /** 显示 identityGeometry (标签放置) */
            debugIdentity(target: string | boolean = true) {
              const existing = viewer.entities.values.filter((e: any) => e.properties?.getValue?.()?.isDebugIdentity);
              existing.forEach((e: any) => viewer.entities.remove(e));
              if (target === false) { viewer.scene.requestRender(); return; }
              const features = typeof target === "string"
                ? ALL_FEATURES.filter(f => f.id === target)
                : ALL_FEATURES;
              for (const feature of features) {
                const geo = feature.identityGeometry;
                if (!geo) continue;
                if (geo.type === "LineString") {
                  const coords = geo.coordinates as [number, number][];
                  const positions = coords.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat));
                  viewer.entities.add({ polyline: { positions, width: 4, material: Cesium.Color.GREEN.withAlpha(0.8), clampToGround: true }, properties: { isDebugIdentity: true } });
                } else if (geo.type === "Polygon") {
                  const coords = geo.coordinates[0] as [number, number][];
                  const positions = coords.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat));
                  viewer.entities.add({ polygon: { hierarchy: new Cesium.PolygonHierarchy(positions), material: Cesium.Color.GREEN.withAlpha(0.15), outline: true, outlineColor: Cesium.Color.GREEN.withAlpha(0.6), outlineWidth: 2 }, properties: { isDebugIdentity: true } });
                }
                console.log(`[debug] ${feature.name}: identityGeometry = ${geo.type}`);
              }
              viewer.scene.requestRender();
            },
            /** 显示 focusGeometry (高亮内容) */
            debugFocus(target: string | boolean = true) {
              const existing = viewer.entities.values.filter((e: any) => e.properties?.getValue?.()?.isDebugFocus);
              existing.forEach((e: any) => viewer.entities.remove(e));
              if (target === false) { viewer.scene.requestRender(); return; }
              const features = typeof target === "string"
                ? ALL_FEATURES.filter(f => f.id === target)
                : ALL_FEATURES;
              for (const feature of features) {
                const geo = feature.focusGeometry;
                if (!geo) continue;
                if (geo.type === "LineString") {
                  const coords = geo.coordinates as [number, number][];
                  const positions = coords.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat));
                  viewer.entities.add({ polyline: { positions, width: 5, material: Cesium.Color.YELLOW.withAlpha(0.9), clampToGround: true }, properties: { isDebugFocus: true } });
                } else if (geo.type === "Polygon") {
                  const coords = geo.coordinates[0] as [number, number][];
                  const positions = coords.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat));
                  viewer.entities.add({ polygon: { hierarchy: new Cesium.PolygonHierarchy(positions), material: Cesium.Color.YELLOW.withAlpha(0.2), outline: true, outlineColor: Cesium.Color.YELLOW.withAlpha(0.7), outlineWidth: 3 }, properties: { isDebugFocus: true } });
                }
                console.log(`[debug] ${feature.name}: focusGeometry = ${geo.type}`);
              }
              viewer.scene.requestRender();
            },
            /** 绘制 Auto Camera 调试标记 (Polygon + FOI + Target + Camera Position) */
            debugAutoCamera(terrainId: string) {
              const existing = viewer.entities.values.filter((e: any) => e.properties?.getValue?.()?.isDebugAutoCamera);
              existing.forEach((e: any) => viewer.entities.remove(e));

              const feature = ALL_FEATURES.find(f => f.id === terrainId);
              if (!feature) { console.log("[debug] feature not found:", terrainId); return; }

              // 1. 绘制 identityGeometry / focusGeometry (Terrain Polygon)
              const geo = feature.focusGeometry ?? feature.identityGeometry;
              if (geo?.type === "Polygon") {
                const coords = geo.coordinates[0] as [number, number][];
                const positions = coords.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat));
                viewer.entities.add({
                  polygon: { hierarchy: new Cesium.PolygonHierarchy(positions), material: Cesium.Color.CYAN.withAlpha(0.1), outline: true, outlineColor: Cesium.Color.CYAN.withAlpha(0.6), outlineWidth: 2 },
                  properties: { isDebugAutoCamera: true },
                });
                console.log(`[debug] Polygon: ${coords.length} points`);
              }

              // 2. 绘制 FOI Point (红点)
              const terrainFOI = getTerrainFOI(terrainId);
              if (terrainFOI) {
                const foiPos = Cesium.Cartesian3.fromDegrees(terrainFOI.primary.lon, terrainFOI.primary.lat);
                viewer.entities.add({
                  position: foiPos,
                  point: { pixelSize: 14, color: Cesium.Color.RED, outlineColor: Cesium.Color.WHITE, outlineWidth: 2 },
                  label: { text: `FOI: ${terrainFOI.primary.name}`, font: "14px sans-serif", fillColor: Cesium.Color.WHITE, pixelOffset: new Cesium.Cartesian2(0, -20), style: Cesium.LabelStyle.FILL_AND_OUTLINE, outlineWidth: 2 },
                  properties: { isDebugAutoCamera: true },
                });
                console.log(`[debug] FOI: ${terrainFOI.primary.name} [${terrainFOI.primary.lon}, ${terrainFOI.primary.lat}]`);
              }

              // 3. 计算 Auto Camera 参数
              let cameraParams: any;
              if (terrainFOI?.featureType === "mountain_system") {
                cameraParams = computeCameraFromRidge(terrainFOI.geometryCoords, terrainFOI.primary);
              } else if (terrainFOI) {
                cameraParams = computeCameraFromPolygon(terrainFOI.geometryCoords, terrainFOI.primary);
              }
              if (cameraParams) {
                // 4. 绘制 Camera Target (蓝点)
                const targetPos = Cesium.Cartesian3.fromDegrees(cameraParams.target[0], cameraParams.target[1]);
                viewer.entities.add({
                  position: targetPos,
                  point: { pixelSize: 14, color: Cesium.Color.BLUE, outlineColor: Cesium.Color.WHITE, outlineWidth: 2 },
                  label: { text: `Target [${cameraParams.target[0].toFixed(2)}, ${cameraParams.target[1].toFixed(2)}]`, font: "13px sans-serif", fillColor: Cesium.Color.LIGHTBLUE, pixelOffset: new Cesium.Cartesian2(0, -20), style: Cesium.LabelStyle.FILL_AND_OUTLINE, outlineWidth: 2 },
                  properties: { isDebugAutoCamera: true },
                });
                console.log(`[debug] Target: [${cameraParams.target[0].toFixed(4)}, ${cameraParams.target[1].toFixed(4)}]`);

                // 5. 计算并绘制 Camera Position (绿点)
                const headingRad = Cesium.Math.toRadians(cameraParams.heading);
                const pitchRad = Cesium.Math.toRadians(cameraParams.pitch);
                const cameraHeight = cameraParams.range;

                // Camera position = target + offset based on heading and pitch
                const targetCartographic = Cesium.Cartographic.fromDegrees(cameraParams.target[0], cameraParams.target[1]);
                const targetCartesian = Cesium.Cartographic.toCartesian(targetCartographic);

                // Create a temporary camera to compute position from orientation
                const tempCamera = new Cesium.Camera(viewer.scene);
                tempCamera.setView({
                  destination: Cesium.Cartesian3.fromDegrees(cameraParams.target[0], cameraParams.target[1], cameraHeight),
                  orientation: { heading: headingRad, pitch: pitchRad, roll: 0 },
                });
                const camPos = tempCamera.position;
                const camCartographic = Cesium.Cartographic.fromCartesian(camPos);

                viewer.entities.add({
                  position: camPos,
                  point: { pixelSize: 14, color: Cesium.Color.GREEN, outlineColor: Cesium.Color.WHITE, outlineWidth: 2 },
                  label: { text: `Camera [${Cesium.Math.toDegrees(camCartographic.longitude).toFixed(2)}, ${Cesium.Math.toDegrees(camCartographic.latitude).toFixed(2)}] h=${Math.round(camCartographic.height/1000)}km`, font: "13px sans-serif", fillColor: Cesium.Color.LIGHTGREEN, pixelOffset: new Cesium.Cartesian2(0, -20), style: Cesium.LabelStyle.FILL_AND_OUTLINE, outlineWidth: 2 },
                  properties: { isDebugAutoCamera: true },
                });
                console.log(`[debug] Camera Position: [${Cesium.Math.toDegrees(camCartographic.longitude).toFixed(4)}, ${Cesium.Math.toDegrees(camCartographic.latitude).toFixed(4)}] height=${Math.round(camCartographic.height)}m (${Math.round(camCartographic.height/1000)}km)`);
                console.log(`[debug] Camera Params: heading=${cameraParams.heading}° pitch=${cameraParams.pitch}° range=${cameraParams.range}m (${Math.round(cameraParams.range/1000)}km)`);
              }

              viewer.scene.requestRender();
            },
          };
          console.log("[debug] window.debugCesium ready — use toggleTerrain(), toggleImagery(), printLayers(), printTerrain(), debugGeometry(), debugAutoCamera(id)");

          // 相机移动结束后触发额外渲染 — 确保瓦片精炼完成
          viewer.camera.moveEnd.addEventListener(() => {
            if (!viewer.isDestroyed()) {
              viewer.scene.requestRender();
            }
          });

          // 地形区域 Hover — pick terrainId，高亮该地形区域椭圆 + 通知标签系统
          const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

          handler.setInputAction((movement: any) => {
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
          onReady?.();
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
        terrainRegionRef.current.clear();
        viewerRef.current?.destroy();
        viewerRef.current = null;
      };
    }, [onReady, onTerrainMode]);

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

function drawRouteLine(
  Cesium: typeof import("cesium"),
  viewer: import("cesium").Viewer,
  waypoints: ResolvedWaypoint[],
  entityRef: { current: import("cesium").Entity | null }
) {
  if (entityRef.current) {
    viewer.entities.remove(entityRef.current);
    entityRef.current = null;
  }

  // 固定高度 + 大圆弧段 —— 不用 clampToGround（会懒加载 createGroundPolylineGeometry
  // worker，网络异常时崩溃，与 polygon.outline 同类问题）。
  const ROUTE_LINE_HEIGHT_M = 120_000;
  entityRef.current = viewer.entities.add({
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights(
        waypoints.flatMap((w) => [w.lon, w.lat, ROUTE_LINE_HEIGHT_M])
      ),
      width: 2.5,
      material: Cesium.Color.fromCssColorString("#f5b544").withAlpha(0.9),
      arcType: Cesium.ArcType.GEODESIC,
    },
  });
}

export default CesiumMap;
