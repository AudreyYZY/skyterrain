"use client";

import { bearingRadians, haversineMeters } from "@/lib/geo";
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

export interface CesiumMapHandle {
  flyToTerrain: (terrain: TerrainPoint) => void;
  flyToTerrainAndWait: (terrain: TerrainPoint) => Promise<void>;
  flyRoute: (route: FlightRoute, callbacks: RouteFlyCallbacks) => void;
  stopFlight: () => void;
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
  function CesiumMap({ onReady, onTerrainMode }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const viewerRef = useRef<import("cesium").Viewer | null>(null);
    const heightCacheRef = useRef<Map<string, number>>(new Map());
    const flightCancelledRef = useRef(false);
    const routeEntityRef = useRef<import("cesium").Entity | null>(null);
    const [status, setStatus] = useState<"loading" | "ready" | "error">(
      "loading"
    );
    const [routePreparing, setRoutePreparing] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useImperativeHandle(ref, () => ({
      stopFlight() {
        flightCancelledRef.current = true;
        setRoutePreparing(false);
        viewerRef.current?.camera.cancelFlight();
      },

      flyToTerrain(terrain: TerrainPoint) {
        const viewer = viewerRef.current;
        if (!viewer) return;

        flightCancelledRef.current = true;
        viewer.camera.cancelFlight();
        flightCancelledRef.current = false;

        void import("cesium").then(async (Cesium) => {
          const height = viewHeightForTerrain(terrain, terrain.cameraHeight);
          const dest = await cameraAt(
            Cesium,
            viewer,
            terrain.lat,
            terrain.lon,
            height,
            terrain.elevation,
            heightCacheRef.current
          );
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
        });
      },

      flyToTerrainAndWait(terrain: TerrainPoint): Promise<void> {
        const viewer = viewerRef.current;
        if (!viewer) return Promise.resolve();

        flightCancelledRef.current = true;
        viewer.camera.cancelFlight();
        flightCancelledRef.current = false;

        return import("cesium").then(
          (Cesium) =>
            new Promise<void>(async (resolve) => {
              const height = viewHeightForTerrain(terrain, terrain.cameraHeight);
              const dest = await cameraAt(
                Cesium,
                viewer,
                terrain.lat,
                terrain.lon,
                height,
                terrain.elevation,
                heightCacheRef.current
              );
              viewer.camera.flyTo({
                destination: dest,
                duration: 7,
                easingFunction: quarticEaseOut,
                orientation: {
                  heading: 0,
                  pitch: Cesium.Math.toRadians(WINDOW_PITCH_DEG),
                  roll: Cesium.Math.toRadians(CRUISE_ROLL_DEG),
                },
                complete: () => resolve(),
                cancel: () => resolve(),
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

      async function init() {
        if (!containerRef.current) return;

        try {
          (window as unknown as { CESIUM_BASE_URL?: string }).CESIUM_BASE_URL =
            "/cesium/";

          const Cesium = await import("cesium");
          await import("cesium/Build/Cesium/Widgets/widgets.css");

          if (cancelled || !containerRef.current) return;

          const ionToken =
            process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN?.trim() ?? "";

          let terrainMode: TerrainMode = "ellipsoid";
          let terrainProvider: import("cesium").TerrainProvider;

          if (ionToken) {
            Cesium.Ion.defaultAccessToken = ionToken;
            try {
              terrainProvider = await Cesium.createWorldTerrainAsync();
              terrainMode = "world";
            } catch {
              terrainProvider = new Cesium.EllipsoidTerrainProvider();
            }
          } else {
            terrainProvider = new Cesium.EllipsoidTerrainProvider();
          }

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
          });

          viewer.scene.globe.depthTestAgainstTerrain = true;
          viewer.scene.fog.enabled = true;
          viewer.scene.globe.maximumScreenSpaceError = 2;
          if (viewer.scene.skyAtmosphere) {
            viewer.scene.skyAtmosphere.show = true;
          }

          viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(
              XINJIANG_VIEW.lon,
              XINJIANG_VIEW.lat,
              XINJIANG_VIEW.height
            ),
            duration: 0,
          });

          viewerRef.current = viewer;
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
        viewerRef.current?.destroy();
        viewerRef.current = null;
      };
    }, [onReady, onTerrainMode]);

    return (
      <div className="relative h-full w-full">
        <div ref={containerRef} className="h-full w-full" />

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
