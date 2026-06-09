"use client";

import { bearingRadians, haversineMeters } from "@/lib/geo";
import { resolveRouteWaypoints, type ResolvedWaypoint } from "@/lib/routes";
import { XINJIANG_CORE_FEATURES } from "@/features/xinjiang-core-features";
import { CHINA_CORE_FEATURES } from "@/features/china-core-features";
import type { GeographicFeature } from "@/features/types";

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
  flyRoute: (route: FlightRoute, callbacks: RouteFlyCallbacks) => void;
  stopFlight: () => void;
  /** 将经纬度投影到屏幕坐标（返回 null 表示在视野外） */
  projectToScreen: (lat: number, lon: number) => { x: number; y: number } | null;
  /** 获取当前相机状态 */
  getCameraState: () => CameraState | null;
  /** 高亮指定地貌边界 */
  highlightBoundary: (boundaryId: string) => void;
  /** 重置所有边界为默认样式 */
  resetBoundaries: () => void;
}

export interface RouteFlyCallbacks {
  /** 飞抵航点：触发讲解（非阻塞，镜头继续飞行） */
  onWaypointArrival: (
    waypoint: ResolvedWaypoint,
    index: number
  ) => Promise<void> | void;
  onPreparingRoute?: () => void;
  onRouteReady?: () => void;
  onComplete: () => void;
  onCancelled?: () => void;
}

export type TerrainMode = "world" | "ellipsoid";

interface CesiumMapProps {
  onReady?: () => void;
  onTerrainMode?: (mode: TerrainMode) => void;
  onBoundaryHover?: (boundaryName: string | null) => void;
}

/** 飞机舷窗俯角 — 更低角度，模拟真实客机窗口 */
const WINDOW_PITCH_DEG = -42;

/** 巡航时的微滚转角（弧度），模拟轻微气流颠簸 */
const CRUISE_ROLL_DEG = 0.8;

const XINJIANG_VIEW = {
  lon: 85.0,
  lat: 42.0,
  height: 2_800_000,
};

/** 不同地貌类型的理想观看高度（米，离地） */
const TERRAIN_VIEW_HEIGHTS: Record<string, number> = {
  mountain_range: 8000,   // 山脉：降低高度以感受山体规模
  lake: 6000,             // 湖泊：近距离俯瞰湖面
  desert: 16000,          // 沙漠：升高以感受荒漠辽阔
  basin: 12000,           // 盆地：中等高度
  valley: 6000,           // 河谷：低飞穿越
  river: 8000,            // 河流：中低高度
  city: 5000,             // 城市：近距离观看
  scenic: 7000,           // 景观：适中距离
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

/** 缓入缓出 — 用于概览和过渡，平滑起停 */
function smoothStep(t: number): number {
  return t * t * (3 - 2 * t);
}

/**
 * 等待地形/影像瓦片收敛
 * tileLoadProgressEvent 的 queueLength 持续 stableMs 毫秒为 0 才算完成
 * 超时 timeoutMs 毫秒强制继续
 */
function waitForTilesSettled(
  viewer: import("cesium").Viewer,
  stableMs: number = 1000,
  timeoutMs: number = 8000
): Promise<void> {
  return new Promise((resolve) => {
    if (viewer.isDestroyed()) { resolve(); return; }

    let lastQueueLength = -1;
    let stableStart = 0;
    let resolved = false;

    const timeout = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        viewer.scene.globe.tileLoadProgressEvent.removeEventListener(onTileProgress);
        resolve();
      }
    }, timeoutMs);

    function onTileProgress(e: any) {
      if (resolved) return;
      const q = e.queueLength;
      if (q === 0) {
        if (lastQueueLength !== 0) {
          stableStart = Date.now();
          lastQueueLength = 0;
        } else if (Date.now() - stableStart >= stableMs) {
          resolved = true;
          clearTimeout(timeout);
          viewer.scene.globe.tileLoadProgressEvent.removeEventListener(onTileProgress);
          resolve();
        }
      } else {
        lastQueueLength = q;
        stableStart = Date.now();
      }
    }

    // 检查当前是否已经加载完成
    // tileLoadProgressEvent 只在有新 tile 时触发，需要主动检查
    viewer.scene.globe.tileLoadProgressEvent.addEventListener(onTileProgress);

    // 如果当前没有 tile 在加载，立即 resolve
    // (tileLoadProgressEvent 不会在 queueLength=0 时触发)
    setTimeout(() => {
      if (!resolved) {
        // 给一个短暂的窗口让 tile 开始加载
        // 如果仍然没有 tile 事件，说明已经加载完成
      }
    }, 100);
  });
}

/** 根据地貌类型返回理想观看高度 */
function viewHeightForTerrain(
  terrain: { category?: string; cameraHeight?: number } | undefined,
  cruiseHeight: number
): number {
  if (terrain?.category && TERRAIN_VIEW_HEIGHTS[terrain.category]) {
    return TERRAIN_VIEW_HEIGHTS[terrain.category]!;
  }
  return terrain?.cameraHeight ?? cruiseHeight;
}

const CesiumMap = forwardRef<CesiumMapHandle, CesiumMapProps>(
  function CesiumMap({ onReady, onTerrainMode, onBoundaryHover }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const viewerRef = useRef<import("cesium").Viewer | null>(null);
    const cesiumRef = useRef<typeof import("cesium") | null>(null);
    const heightCacheRef = useRef<Map<string, number>>(new Map());
    const flightCancelledRef = useRef(false);
    const routeEntityRef = useRef<import("cesium").Entity | null>(null);
    const featureEntitiesRef = useRef<Map<string, import("cesium").Entity[]>>(new Map());
    const featureHaloRef = useRef<Map<string, import("cesium").Entity[]>>(new Map());
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

      highlightBoundary(boundaryId: string) {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium) return;

        for (const [id, entities] of featureEntitiesRef.current) {
          const feature = ALL_FEATURES.find((f) => f.id === id);
          if (!feature) continue;
          const isTarget = id === boundaryId;
          const s = isTarget ? feature.interaction.selectedStyle : feature.interaction.idleStyle;

          for (const entity of entities) {
            if (entity.polygon) {
              if (isTarget && s.brightnessAdjust > 0) {
                entity.polygon.material = new Cesium.ColorMaterialProperty(
                  Cesium.Color.WHITE.withAlpha(s.brightnessAdjust)
                );
              } else {
                entity.polygon.material = Cesium.Color.TRANSPARENT as any;
              }
              entity.polygon.outlineColor = new Cesium.ConstantProperty(
                Cesium.Color.fromBytes(s.outlineColor[0], s.outlineColor[1], s.outlineColor[2], Math.round(s.outlineAlpha * 255))
              );
              entity.polygon.outlineWidth = new Cesium.ConstantProperty(s.outlineWidth);
            }
            if (entity.polyline) {
              entity.polyline.width = new Cesium.ConstantProperty(s.outlineWidth);
              (entity.polyline as any).material = new Cesium.ColorMaterialProperty(
                Cesium.Color.fromBytes(s.outlineColor[0], s.outlineColor[1], s.outlineColor[2], Math.round(s.outlineAlpha * 255))
              );
            }
          }
        }
        viewer.scene.requestRender();
      },

      resetBoundaries() {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium) return;

        for (const [id, entities] of featureEntitiesRef.current) {
          const feature = ALL_FEATURES.find((f) => f.id === id);
          if (!feature) continue;
          const s = feature.interaction.idleStyle;

          for (const entity of entities) {
            if (entity.polygon) {
              entity.polygon.material = Cesium.Color.TRANSPARENT as any;
              entity.polygon.outlineColor = new Cesium.ConstantProperty(
                Cesium.Color.fromBytes(s.outlineColor[0], s.outlineColor[1], s.outlineColor[2], Math.round(s.outlineAlpha * 255))
              );
              entity.polygon.outlineWidth = new Cesium.ConstantProperty(s.outlineWidth);
            }
            if (entity.polyline) {
              entity.polyline.width = new Cesium.ConstantProperty(s.outlineWidth);
              (entity.polyline as any).material = new Cesium.ColorMaterialProperty(
                Cesium.Color.fromBytes(s.outlineColor[0], s.outlineColor[1], s.outlineColor[2], Math.round(s.outlineAlpha * 255))
              );
            }
          }
        }
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
          if (waypoints.length < 1) return;

          callbacks.onPreparingRoute?.();
          setRoutePreparing(true);

          await preloadRoute(Cesium, viewer, waypoints, heightCacheRef.current);

          if (flightCancelledRef.current) {
            setRoutePreparing(false);
            callbacks.onCancelled?.();
            return;
          }

          setRoutePreparing(false);
          callbacks.onRouteReady?.();

          drawRouteLine(Cesium, viewer, waypoints, routeEntityRef);

          // Phase 1: Show route overview — let the user see the full route
          await flyToRouteOverview(Cesium, viewer, waypoints);
          await sleep((route.overviewDwellSec ?? 4) * 1000);

          if (flightCancelledRef.current) {
            callbacks.onCancelled?.();
            return;
          }

          // Phase 2: Sequential flight — fly to waypoint, narrate, then continue
          for (let i = 0; i < waypoints.length; i++) {
            if (flightCancelledRef.current) {
              callbacks.onCancelled?.();
              return;
            }

            const wp = waypoints[i]!;

            // Fly to this waypoint (camera moves)
            if (i > 0) {
              const from = waypoints[i - 1]!;
              await flyLeg(Cesium, viewer, from, wp, route, heightCacheRef.current);
            }

            if (flightCancelledRef.current) {
              callbacks.onCancelled?.();
              return;
            }

            // 关键：await 叙述完成 — 镜头在航点等待，叙述完成后再继续
            await callbacks.onWaypointArrival(wp, i);

            if (flightCancelledRef.current) {
              callbacks.onCancelled?.();
              return;
            }

            // 短暂停留 — 让用户消化内容后镜头再移动
            await sleep((route.dwellDuringFlightSec ?? 8) * 1000);
          }

          if (!flightCancelledRef.current) {
            callbacks.onComplete();
          }
        });
      },
    }));

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

          viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(
              XINJIANG_VIEW.lon,
              XINJIANG_VIEW.lat,
              XINJIANG_VIEW.height
            ),
            duration: 0,
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
            /** 显示所有 Feature 顶点 */
            debugBoundaries(show: boolean = true) {
              const existing = viewer.entities.values.filter((e: any) => e.properties?.getValue?.()?.isDebugVertex);
              existing.forEach((e: any) => viewer.entities.remove(e));

              if (!show) {
                console.log("[debug] Feature vertices hidden");
                return;
              }

              for (const feature of ALL_FEATURES) {
                const geo = feature.hoverGeometry;
                if (!geo) continue;
                if (geo.type === "Polygon") {
                  const coords = geo.coordinates[0] as [number, number][];
                  for (const [lon, lat] of coords) {
                    viewer.entities.add({
                      position: Cesium.Cartesian3.fromDegrees(lon, lat),
                      point: { pixelSize: 5, color: Cesium.Color.RED },
                      properties: { isDebugVertex: true, featureId: feature.id },
                    });
                  }
                  console.log(`[debug] ${feature.name}: ${coords.length} vertices`);
                } else if (geo.type === "RidgeCorridor") {
                  for (const [lon, lat] of geo.ridgeLine) {
                    viewer.entities.add({
                      position: Cesium.Cartesian3.fromDegrees(lon, lat),
                      point: { pixelSize: 5, color: Cesium.Color.RED },
                      properties: { isDebugVertex: true, featureId: feature.id },
                    });
                  }
                  console.log(`[debug] ${feature.name}: ${geo.ridgeLine.length} ridge points, ${geo.segments.length} segments`);
                }
              }
              viewer.scene.requestRender();
            },
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
          };
          console.log("[debug] window.debugCesium ready — use toggleTerrain(), toggleImagery(), printLayers(), printTerrain(), debugBoundaries(), debugGeometry()");

          // 相机移动结束后触发额外渲染 — 确保瓦片精炼完成
          viewer.camera.moveEnd.addEventListener(() => {
            if (!viewer.isDestroyed()) {
              viewer.scene.requestRender();
            }
          });

          // 地貌 Feature Hover 效果
          const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
          let hoveredFeatureId: string | null = null;

          handler.setInputAction((movement: any) => {
            if (viewer.isDestroyed()) return;
            const picked = viewer.scene.pick(movement.endPosition);
            let newHoveredId: string | null = null;

            if (Cesium.defined(picked) && picked.id?.properties) {
              const props = picked.id.properties;
              const val = props?.getValue?.();
              const featureId = val?.featureId;
              const boundaryId = val?.boundaryId;
              if (featureId) {
                newHoveredId = featureId;
              } else if (boundaryId) {
                newHoveredId = boundaryId;
              }
            }

            // Hover Pick 调试
            if ((window as any).__debugHover) {
              const feature = newHoveredId ? ALL_FEATURES.find(f => f.id === newHoveredId) : null;
              console.log("[hover]", {
                feature: feature?.name ?? "none",
                id: newHoveredId ?? "none",
                type: feature?.featureType ?? "-",
                maturity: feature?.maturityLevel ?? "-",
              });
            }

            // 检查 maturityLevel — Level 0-1 不支持 hover
            // GeoJSON 边界 (boundaryId) 始终支持 hover
            const hoveredFeature = newHoveredId ? ALL_FEATURES.find(f => f.id === newHoveredId) : null;
            const isGeoJsonBoundary = newHoveredId && !hoveredFeature;
            if (hoveredFeature && hoveredFeature.maturityLevel < 2 && !isGeoJsonBoundary) {
              newHoveredId = null; // 不支持 hover
            }

            if (newHoveredId !== hoveredFeatureId) {
              const prevHoveredId = hoveredFeatureId;
              hoveredFeatureId = newHoveredId;

              // Region Halo: fade-in 动画
              const HALO_ALPHA = 0.07;
              const FADE_DURATION = 300; // ms
              const startTime = performance.now();

              // 立即隐藏之前的 halo
              if (prevHoveredId) {
                const prevHalos = featureHaloRef.current.get(prevHoveredId);
                if (prevHalos) {
                  for (const h of prevHalos) {
                    if (h.polygon) {
                      h.polygon.material = Cesium.Color.WHITE.withAlpha(0.0) as any;
                    }
                  }
                }
              }

              // Fade-in 新的 halo
              if (newHoveredId) {
                const newHalos = featureHaloRef.current.get(newHoveredId);
                if (newHalos) {
                  const animate = () => {
                    const elapsed = performance.now() - startTime;
                    const progress = Math.min(1, elapsed / FADE_DURATION);
                    const alpha = HALO_ALPHA * progress;
                    for (const h of newHalos) {
                      if (h.polygon) {
                        h.polygon.material = Cesium.Color.WHITE.withAlpha(alpha) as any;
                      }
                    }
                    viewer.scene.requestRender();
                    if (progress < 1) {
                      requestAnimationFrame(animate);
                    }
                  };
                  requestAnimationFrame(animate);
                }
              }

              // 更新 outline 样式
              for (const [id, entities] of featureEntitiesRef.current) {
                const feature = ALL_FEATURES.find((f) => f.id === id);
                if (!feature) continue;
                const isHovered = id === newHoveredId;
                const s = isHovered ? feature.interaction.hoverStyle : feature.interaction.idleStyle;

                for (const entity of entities) {
                  if (entity.polygon) {
                    entity.polygon.material = Cesium.Color.TRANSPARENT as any;
                    entity.polygon.outlineColor = new Cesium.ConstantProperty(
                      Cesium.Color.fromBytes(s.outlineColor[0], s.outlineColor[1], s.outlineColor[2], Math.round(s.outlineAlpha * 255))
                    );
                    entity.polygon.outlineWidth = new Cesium.ConstantProperty(s.outlineWidth);
                  }
                  if (entity.polyline) {
                    entity.polyline.width = new Cesium.ConstantProperty(s.outlineWidth);
                    (entity.polyline as any).material = new Cesium.ColorMaterialProperty(
                      Cesium.Color.fromBytes(s.outlineColor[0], s.outlineColor[1], s.outlineColor[2], Math.round(s.outlineAlpha * 255))
                    );
                  }
                }
              }
              // 通知标签系统高亮对应标签
              const hoveredName = newHoveredId
                ? ALL_FEATURES.find((f) => f.id === newHoveredId)?.name ?? null
                : null;
              onBoundaryHover?.(hoveredName);
              viewer.scene.requestRender();
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

          // 绘制地貌 Feature — 严格按 maturityLevel
          for (const feature of ALL_FEATURES) {
            const entities: import("cesium").Entity[] = [];
            const idle = feature.interaction.idleStyle;

            const featureProps = {
              featureId: feature.id,
              featureName: feature.name,
              featureType: feature.featureType,
              maturityLevel: feature.maturityLevel,
            };

            // Level 0: 仅 Label，不渲染任何 Geometry
            // Level 1: Identity Geometry (标签放置)
            // Level 2+: Hover Geometry (交互)
            if (feature.maturityLevel < 2) continue;

            const geo = feature.hoverGeometry;
            if (!geo) continue;

            if (geo.type === "Polygon" || geo.type === "MultiPolygon") {
              // 盆地/沙漠/湖泊: 渲染 Polygon 边界
              const coords = geo.type === "Polygon"
                ? (geo.coordinates[0] as [number, number][])
                : (geo.coordinates[0]?.[0] as [number, number][] | undefined);
              if (coords) {
                const positions = coords.map(([lon, lat]) =>
                  Cesium.Cartesian3.fromDegrees(lon, lat)
                );
                const entity = viewer.entities.add({
                  polygon: {
                    hierarchy: new Cesium.PolygonHierarchy(positions),
                    material: Cesium.Color.TRANSPARENT,
                    outline: true,
                    outlineColor: Cesium.Color.fromBytes(
                      idle.outlineColor[0], idle.outlineColor[1], idle.outlineColor[2],
                      Math.round(idle.outlineAlpha * 255)
                    ),
                    outlineWidth: idle.outlineWidth,
                  },
                  properties: featureProps,
                });
                entities.push(entity);
              }
            } else if (geo.type === "RidgeCorridor") {
              // 山脉: 渲染山脊线 + 局部山体区域
              const ridgePositions = geo.ridgeLine.map(([lon, lat]) =>
                Cesium.Cartesian3.fromDegrees(lon, lat)
              );
              const ridgeEntity = viewer.entities.add({
                polyline: {
                  positions: ridgePositions,
                  width: 1.5,
                  material: Cesium.Color.fromBytes(
                    idle.outlineColor[0], idle.outlineColor[1], idle.outlineColor[2],
                    Math.round(idle.outlineAlpha * 255)
                  ),
                  clampToGround: true,
                },
                properties: featureProps,
              });
              entities.push(ridgeEntity);

              // 渲染山体区域轮廓
              for (const segment of geo.segments) {
                const ring = segment[0] as [number, number][] | undefined;
                if (!ring) continue;
                const positions = ring.map(([lon, lat]) =>
                  Cesium.Cartesian3.fromDegrees(lon, lat)
                );
                const entity = viewer.entities.add({
                  polygon: {
                    hierarchy: new Cesium.PolygonHierarchy(positions),
                    material: Cesium.Color.TRANSPARENT,
                    outline: true,
                    outlineColor: Cesium.Color.fromBytes(
                      idle.outlineColor[0], idle.outlineColor[1], idle.outlineColor[2],
                      Math.round(idle.outlineAlpha * 0.6 * 255)
                    ),
                    outlineWidth: 1,
                  },
                  properties: featureProps,
                });
                entities.push(entity);
              }
            }

            featureEntitiesRef.current.set(feature.id, entities);

            // Region Halo: 极淡填充，Hover 时显示
            const haloEntities: import("cesium").Entity[] = [];
            if (geo.type === "Polygon" || geo.type === "MultiPolygon") {
              const coords = geo.type === "Polygon"
                ? (geo.coordinates[0] as [number, number][])
                : (geo.coordinates[0]?.[0] as [number, number][] | undefined);
              if (coords) {
                const positions = coords.map(([lon, lat]) =>
                  Cesium.Cartesian3.fromDegrees(lon, lat)
                );
                const haloEntity = viewer.entities.add({
                  polygon: {
                    hierarchy: new Cesium.PolygonHierarchy(positions),
                    material: Cesium.Color.WHITE.withAlpha(0.0),
                    outline: false,
                  },
                  properties: featureProps,
                });
                haloEntities.push(haloEntity);
              }
            } else if (geo.type === "RidgeCorridor") {
              for (const segment of geo.segments) {
                const ring = segment[0] as [number, number][] | undefined;
                if (!ring) continue;
                const positions = ring.map(([lon, lat]) =>
                  Cesium.Cartesian3.fromDegrees(lon, lat)
                );
                const haloEntity = viewer.entities.add({
                  polygon: {
                    hierarchy: new Cesium.PolygonHierarchy(positions),
                    material: Cesium.Color.WHITE.withAlpha(0.0),
                    outline: false,
                  },
                  properties: featureProps,
                });
                haloEntities.push(haloEntity);
              }
            }
            if (haloEntities.length > 0) {
              featureHaloRef.current.set(feature.id, haloEntities);
            }
          }

          // 加载 Natural Earth GeoJSON 边界
          const BOUNDARY_FILES = [
            "tianshan", "kunlun", "altai", "junggar-basin", "tarim-basin",
            "taklamakan", "pamir", "qinling", "qilian", "taihang",
            "loess", "sichuan", "inner-mongolia",
          ];
          for (const id of BOUNDARY_FILES) {
            try {
              const res = await fetch(`/data/gis/exports/${id}.geojson`);
              if (!res.ok) continue;
              const geojson = await res.json();
              const geometry = geojson.geometry;
              if (!geometry) continue;

              if (geometry.type === "Polygon") {
                const ring = geometry.coordinates[0];
                if (!ring) continue;
                const positions = ring.map(([lon, lat]: [number, number]) =>
                  Cesium.Cartesian3.fromDegrees(lon, lat)
                );
                positions.push(positions[0]);
                viewer.entities.add({
                  polyline: {
                    positions,
                    width: 1,
                    material: Cesium.Color.WHITE.withAlpha(0.12),
                    clampToGround: true,
                  },
                  properties: { boundaryId: id, boundaryName: id, boundaryType: "geojson" },
                });
              } else if (geometry.type === "MultiPolygon") {
                for (const poly of geometry.coordinates) {
                  const ring = poly[0];
                  if (!ring) continue;
                  const positions = ring.map(([lon, lat]: [number, number]) =>
                    Cesium.Cartesian3.fromDegrees(lon, lat)
                  );
                  positions.push(positions[0]);
                  viewer.entities.add({
                    polyline: {
                      positions,
                      width: 1,
                      material: Cesium.Color.WHITE.withAlpha(0.12),
                      clampToGround: true,
                    },
                    properties: { boundaryId: id, boundaryName: id, boundaryType: "geojson" },
                  });
                }
              }
            } catch (e) {
              // 静默跳过加载失败的文件
            }
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

async function flyToRouteOverview(
  Cesium: typeof import("cesium"),
  viewer: import("cesium").Viewer,
  waypoints: ResolvedWaypoint[]
): Promise<void> {
  const lons = waypoints.map((w) => w.lon);
  const lats = waypoints.map((w) => w.lat);
  const west = Math.min(...lons) - 0.8;
  const east = Math.max(...lons) + 0.8;
  const south = Math.min(...lats) - 0.5;
  const north = Math.max(...lats) + 0.5;

  // 先快速拉高到全景
  return new Promise((resolve) => {
    viewer.camera.flyTo({
      destination: Cesium.Rectangle.fromDegrees(west, south, east, north),
      duration: 5,
      easingFunction: smoothStep,
      orientation: {
        heading: 0,
        pitch: Cesium.Math.toRadians(-30), // 概览时角度稍平，看更广
        roll: 0,
      },
      complete: () => resolve(),
      cancel: () => resolve(),
    });
  });
}

function legDurationSec(
  route: FlightRoute,
  distanceM: number
): number {
  const bySpeed = distanceM / route.cruiseSpeedMps;
  return Math.min(140, Math.max(route.minLegDurationSec, bySpeed));
}

async function flyLeg(
  Cesium: typeof import("cesium"),
  viewer: import("cesium").Viewer,
  from: ResolvedWaypoint,
  to: ResolvedWaypoint,
  route: FlightRoute,
  cache: Map<string, number>
): Promise<void> {
  const distance = haversineMeters(from.lat, from.lon, to.lat, to.lon);
  const duration = legDurationSec(route, distance);
  const heading = bearingRadians(from.lat, from.lon, to.lat, to.lon);

  // 地形感知高度：山脉和河谷降低，沙漠升高
  const targetHeight = viewHeightForTerrain(to.terrain, route.cruiseHeight);

  const dest = await cameraAt(
    Cesium,
    viewer,
    to.lat,
    to.lon,
    targetHeight,
    to.terrain?.elevation ?? 500,
    cache
  );

  return new Promise((resolve) => {
    viewer.camera.flyTo({
      destination: dest,
      duration,
      easingFunction: quarticEaseOut,
      orientation: {
        heading,
        pitch: Cesium.Math.toRadians(WINDOW_PITCH_DEG),
        roll: Cesium.Math.toRadians(CRUISE_ROLL_DEG),
      },
      complete: () => {
        viewer.scene.requestRender();
        resolve();
      },
      cancel: () => resolve(),
    });
  });
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

  entityRef.current = viewer.entities.add({
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray(
        waypoints.flatMap((w) => [w.lon, w.lat])
      ),
      width: 3,
      material: Cesium.Color.fromCssColorString("#fbbf24").withAlpha(0.85),
      clampToGround: true,
    },
  });
}

export default CesiumMap;
