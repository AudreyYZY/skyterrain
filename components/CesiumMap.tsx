"use client";

import { bearingRadians, haversineMeters } from "@/lib/geo";
import { TERRAIN_BOUNDARIES, BOUNDARY_STYLES, type TerrainBoundary } from "@/lib/terrain-boundaries";
import { resolveRouteWaypoints, type ResolvedWaypoint } from "@/lib/routes";
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
  flyToTerrainAndWait: (terrain: TerrainPoint) => Promise<void>;
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
    const boundaryEntitiesRef = useRef<Map<string, import("cesium").Entity>>(new Map());
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

        for (const [id, entity] of boundaryEntitiesRef.current) {
          const boundary = TERRAIN_BOUNDARIES.find((b) => b.id === id);
          if (!boundary) continue;
          const style = BOUNDARY_STYLES[boundary.type];
          const isTarget = id === boundaryId;
          const s = isTarget ? style.selected : style.default;

          if (entity.polygon) {
            entity.polygon.outlineColor = new Cesium.ConstantProperty(
              Cesium.Color.fromBytes(s.color[0], s.color[1], s.color[2], Math.round(s.alpha * 255))
            );
            entity.polygon.outlineWidth = new Cesium.ConstantProperty(s.width);
          }
        }
        viewer.scene.requestRender();
      },

      resetBoundaries() {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium) return;

        for (const [id, entity] of boundaryEntitiesRef.current) {
          const boundary = TERRAIN_BOUNDARIES.find((b) => b.id === id);
          if (!boundary) continue;
          const style = BOUNDARY_STYLES[boundary.type];

          if (entity.polygon) {
            entity.polygon.outlineColor = new Cesium.ConstantProperty(
              Cesium.Color.fromBytes(style.default.color[0], style.default.color[1], style.default.color[2], Math.round(style.default.alpha * 255))
            );
            entity.polygon.outlineWidth = new Cesium.ConstantProperty(style.default.width);
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

      flyToTerrainAndWait(terrain: TerrainPoint): Promise<void> {
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (!viewer || !Cesium) return Promise.resolve();

        flightCancelledRef.current = true;
        viewer.camera.cancelFlight();
        flightCancelledRef.current = false;

        console.log("[CesiumMap] flyToTerrainAndWait:", terrain.id, terrain.name);

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
                  heading: 0,
                  pitch: Cesium.Math.toRadians(WINDOW_PITCH_DEG),
                  roll: Cesium.Math.toRadians(CRUISE_ROLL_DEG),
                },
                complete: () => {
                  console.log("[CesiumMap] flyTo complete:", terrain.id);
                  resolve();
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
          viewer.scene.fog.enabled = true;
          // 屏幕空间误差阈值 — 2.0 为默认值，平衡清晰度与 tile 加载压力
          viewer.scene.globe.maximumScreenSpaceError = 2.0;
          if (viewer.scene.skyAtmosphere) {
            viewer.scene.skyAtmosphere.show = true;
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
          };
          console.log("[debug] window.debugCesium ready — use toggleTerrain(), toggleImagery(), printLayers(), printTerrain()");

          // 相机移动结束后触发额外渲染 — 确保瓦片精炼完成
          viewer.camera.moveEnd.addEventListener(() => {
            if (!viewer.isDestroyed()) {
              viewer.scene.requestRender();
            }
          });

          // 地貌边界 Hover 效果
          const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
          let hoveredBoundaryId: string | null = null;

          handler.setInputAction((movement: any) => {
            if (viewer.isDestroyed()) return;
            const picked = viewer.scene.pick(movement.endPosition);
            let newHoveredId: string | null = null;

            if (Cesium.defined(picked) && picked.id?.properties) {
              const props = picked.id.properties;
              const boundaryId = props?.getValue?.()?.boundaryId;
              if (boundaryId) {
                newHoveredId = boundaryId;
              }
            }

            if (newHoveredId !== hoveredBoundaryId) {
              hoveredBoundaryId = newHoveredId;
              for (const [id, entity] of boundaryEntitiesRef.current) {
                const boundary = TERRAIN_BOUNDARIES.find((b) => b.id === id);
                if (!boundary) continue;
                const style = BOUNDARY_STYLES[boundary.type];
                const isHovered = id === newHoveredId;
                const s = isHovered ? style.hover : style.default;
                const color = style.default.color;

                if (entity.polygon) {
                  entity.polygon.outlineColor = new Cesium.ConstantProperty(
                    Cesium.Color.fromBytes(color[0], color[1], color[2], Math.round(s.alpha * 255))
                  );
                  entity.polygon.outlineWidth = new Cesium.ConstantProperty(s.width);
                }
              }
              // 通知标签系统高亮对应标签
              const hoveredName = newHoveredId
                ? TERRAIN_BOUNDARIES.find((b) => b.id === newHoveredId)?.name ?? null
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

          // 绘制地貌边界 — 极弱边界线，不填充
          for (const boundary of TERRAIN_BOUNDARIES) {
            const style = BOUNDARY_STYLES[boundary.type];
            const positions = boundary.coordinates.map(([lon, lat]) =>
              Cesium.Cartesian3.fromDegrees(lon, lat)
            );

            const entity = viewer.entities.add({
              polygon: {
                hierarchy: new Cesium.PolygonHierarchy(positions),
                material: Cesium.Color.TRANSPARENT,
                outline: true,
                outlineColor: Cesium.Color.fromBytes(
                  style.default.color[0],
                  style.default.color[1],
                  style.default.color[2],
                  Math.round(style.default.alpha * 255)
                ),
                outlineWidth: style.default.width,
              },
              properties: {
                boundaryId: boundary.id,
                boundaryName: boundary.name,
                boundaryType: boundary.type,
              },
            });

            boundaryEntitiesRef.current.set(boundary.id, entity);
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
