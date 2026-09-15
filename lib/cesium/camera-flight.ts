/**
 * 相机地表定位与航线预加载 —— 接收 Cesium/viewer 作为显式参数，不闭包组件状态。
 * 从 components/CesiumMap.tsx 抽出（2026-09 技术债清理，行为不变，仅搬家）。
 */

import type { ResolvedWaypoint } from "@/lib/routes";
import { heightCacheKey, sleep } from "./utils";

export async function cameraAt(
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
        const res = await withTimeout(
          Cesium.sampleTerrainMostDetailed(viewer.terrainProvider, [cartographic]),
          TERRAIN_SAMPLE_TIMEOUT_MS,
        );
        ground = res?.[0]?.height ?? fallbackElevation;
      } catch {
        ground = fallbackElevation;
      }
    }
    cache.set(key, ground);
  }

  return Cesium.Cartesian3.fromDegrees(lon, lat, ground + heightAboveGround);
}

/**
 * 地表高程采样的超时。sampleTerrainMostDetailed 本身不带超时：地形瓦片请求卡住（网络差、
 * Cesium 请求调度被影像瓦片占满、无头浏览器软件渲染）时会一直挂着，航线就永远停在「航线加载中…」。
 * 2026-09-14 浏览器自动化测试里复现过三分钟不返回。超时后回退到航点自带的海拔（镜头高度差几百米，无感）。
 */
export const TERRAIN_SAMPLE_TIMEOUT_MS = 6000;

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T | null> {
  return Promise.race([p, new Promise<null>((r) => setTimeout(() => r(null), ms))]);
}

export async function preloadRoute(
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
      const sampled = await withTimeout(
        Cesium.sampleTerrainMostDetailed(viewer.terrainProvider, positions),
        TERRAIN_SAMPLE_TIMEOUT_MS,
      );
      sampled?.forEach((p, i) => {
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
