"use client";

import type { ScreenSpaceEventHandler } from "cesium";
import { bearingRadians, haversineMeters } from "@/lib/geo";
import { resolveRouteWaypoints, type ResolvedWaypoint } from "@/lib/routes";
import { TERRAIN_REGISTRY } from "@/lib/terrain-registry";
import type { FlightRoute } from "@/types/route";
import type { TerrainPoint } from "@/types/terrain";
import { cameraAt, preloadRoute } from "@/lib/cesium/camera-flight";
import { bboxOctagon, loadTerrainRing, ringAreaDeg2 } from "@/lib/cesium/geometry";
import {
  applyTerrainRegionStyles,
  REGION_RIM_WIDTH,
  tickTerrainRegions,
  type RegionEntry,
} from "@/lib/cesium/region-highlight";
import { viewHeightForTerrain } from "@/lib/cesium/route-progress";
import {
  planRouteFlight,
  sampleFlight,
  type FlightCurve,
  type RouteAnchoring,
} from "@/lib/cesium/route-flight";
import { quarticEaseOut, sleep, waitForTilesSettled } from "@/lib/cesium/utils";
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
   * 解说时长估算（秒）。飞行时长取「按距离算出来的」与它的较大值，
   * 保证解说永远不会被镜头甩在后面。镜头节拍本身是帧率驱动的，与音频无关
   * —— 跟着 audio.currentTime 走会把媒体元素的台阶式播放位置变成画面抖动。
   */
  estNarrationSec?: number;
  /**
   * 解说锚点（仅学习模式有）。给了就按解说排镜头 —— 讲到某个航点时镜头正好在
   * 那里，这是「文字播报的地方和地图上的位置对不上」的正解。缺省则按航点均匀停留。
   */
  anchoring?: RouteAnchoring | null;
  onPreparingRoute?: () => void;
  onRouteReady?: () => void;
  onComplete: () => void;
  onCancelled?: () => void;
}

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

          // 飞行途中把地形细节略调粗。取景高度现在随地速提高（见 planRouteFlight），
          // 长航线不再需要靠大幅降精度来换流畅，所以从 4 收回到 3。
          const prevSSE = viewer.scene.globe.maximumScreenSpaceError;
          viewer.scene.globe.maximumScreenSpaceError = 3;
          const restoreDetail = () => {
            viewer.scene.globe.maximumScreenSpaceError = prevSSE;
            viewer.scene.requestRender();
          };

          const n = waypoints.length;

          // 沿航线累计弧长（大圆距离）—— 先算距离，因为时长与取景高度都由它推出来
          const cum = [0];
          for (let i = 1; i < n; i++) {
            cum.push(cum[i - 1]! + Math.max(1, haversineMeters(
              waypoints[i - 1]!.lat, waypoints[i - 1]!.lon, waypoints[i]!.lat, waypoints[i]!.lon)));
          }
          const total = cum[n - 1]!;

          // 沿途地貌要求的最低取景高度（山脉要低一点看出体量，沙漠要高一点看出辽阔）
          let baseHeight = route.cruiseHeight ?? 11000;
          for (const w of waypoints) {
            baseHeight = Math.max(baseHeight, viewHeightForTerrain(w.terrain, route.cruiseHeight ?? 11000));
          }

          // 会触发「停一下看清楚」的航点（首尾机场各有自己的停顿，不计入）
          const holdIndices: number[] = [];
          for (let i = 1; i < n - 1; i++) {
            const k = waypoints[i]!.kind;
            if (k === "terrain" || k === "feature") holdIndices.push(i);
          }

          // 每个航点的朝向 = 前后航点连线的切向（端点用相邻段）
          const headings = waypoints.map((_, i) => {
            const a = waypoints[Math.max(0, i - 1)]!;
            const b = waypoints[Math.min(n - 1, i + 1)]!;
            return bearingRadians(a.lat, a.lon, b.lat, b.lon);
          });

          // 时长按距离定，取景高度跟着峰值地速涨 —— 见 lib/cesium/route-flight.ts 顶部说明
          const plan = planRouteFlight({
            cum,
            total,
            holdIndices,
            narrationSec: callbacks.estNarrationSec ?? 0,
            baseHeightM: baseHeight,
            headings,
            latLon: waypoints.map((w) => ({ lat: w.lat, lon: w.lon })),
            anchoring: callbacks.anchoring ?? null,
          });
          const flyHeight = plan.cruiseHeightM;

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

          const pitchRad = Cesium.Math.toRadians(WINDOW_PITCH_DEG);
          const rollRad = Cesium.Math.toRadians(CRUISE_ROLL_DEG);

          // 摆到起点位（用与飞行同一高度，衔接不跳）
          viewer.camera.setView({
            destination: camPts[0]!,
            orientation: { heading: plan.headingAtDistance(0), pitch: pitchRad, roll: rollRad },
          });
          viewer.scene.requestRender();

          setRoutePreparing(false);
          callbacks.onRouteReady?.();
          // 起飞前停一下，让人看清「从哪起飞」
          callbacks.onFlyoverWaypoint?.(waypoints[0]!, 0);
          await sleep(2200);
          if (flightCancelledRef.current) { restoreDetail(); callbacks.onCancelled?.(); return; }

          // 解说与镜头飞行并行；镜头节拍不再依赖解说进度，只在收尾处等它播完
          const narrationDone = Promise.resolve(callbacks.onNarrate()).catch(() => {});

          // 用户一旦自己滚轮/拖动地图 → 交还控制权（解说与地形名继续同步）
          let userTookOver = false;
          const relinquish = () => { userTookOver = true; };
          const canvas = viewer.scene.canvas;
          canvas.addEventListener("wheel", relinquish, { passive: true });
          canvas.addEventListener("pointerdown", relinquish, { passive: true });

          // 运动模型全部在 lib/cesium/route-flight.ts（纯函数，可离线对全部航线跑断言）
          const curve: FlightCurve = { camPoints: camPts, cum, plan };

          const durationMs = plan.durationSec * 1000;
          let elapsedMs = 0;
          let lastFrameMs = performance.now();
          let firedUpTo = 0;

          await new Promise<void>((resolve) => {
            const tick = () => {
              if (flightCancelledRef.current) { resolve(); return; }

              // 帧率驱动：进度只由时间推进。
              // 原来是跟着 audio.currentTime/duration 走，媒体元素的播放位置是台阶式
              // 更新的，没有帧间插值，高地速下每级台阶就是几公里的跳跃 —— 那是「抖」
              // 的主要来源。时长已经在 planRouteFlight 里保证 ≥ 解说时长，解说不会被切。
              //
              // 单帧推进封顶 100ms：标签页被切走时浏览器会停发 requestAnimationFrame，
              // 若直接用挂钟时间差，切回来的那一帧会把积攒的几十秒一次性走完，镜头瞬移。
              const now = performance.now();
              elapsedMs += Math.min(100, Math.max(0, now - lastFrameMs));
              lastFrameMs = now;
              const p = Math.min(1, elapsedMs / durationMs);
              const { position, heading, segmentIndex } = sampleFlight(curve, p);

              if (!userTookOver) {
                viewer.camera.setView({
                  destination: new Cesium.Cartesian3(position.x, position.y, position.z),
                  orientation: { heading, pitch: pitchRad, roll: rollRad },
                });
              }
              viewer.scene.requestRender();

              while (firedUpTo < segmentIndex) {
                firedUpTo++;
                const w = waypoints[firedUpTo]!;
                if (w.kind === "terrain" || w.kind === "feature") callbacks.onFlyoverWaypoint?.(w, firedUpTo);
              }

              if (p >= 1) { resolve(); return; }
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


export default CesiumMap;
