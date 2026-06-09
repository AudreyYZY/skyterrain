/**
 * Auto Camera — 从 Geometry + FOI 自动计算 Camera 参数
 *
 * 输入: Terrain Geometry (Polygon/LineString) + FOI
 * 输出: target, heading, pitch, range
 *
 * 规则:
 * - mountain: 优先观察主脊或代表性山峰
 * - basin: 优先观察中心区域
 * - plateau: 优先观察典型地貌区域
 */

import type { Position } from "@/features/types";

export interface CameraParams {
  target: [number, number]; // [lon, lat]
  heading: number;          // degrees
  pitch: number;            // degrees (negative = looking down)
  range: number;            // meters above ground
}

export interface FOI {
  name: string;
  lon: number;
  lat: number;
  type: "peak" | "ridge" | "valley" | "city" | "center";
  description: string;
}

/** 从多边形坐标计算 bbox */
function computeBBox(coords: [number, number][]): {
  west: number; east: number; south: number; north: number;
  centerLon: number; centerLat: number;
  spanLon: number; spanLat: number;
} {
  let west = Infinity, east = -Infinity, south = Infinity, north = -Infinity;
  for (const [lon, lat] of coords) {
    if (lon < west) west = lon;
    if (lon > east) east = lon;
    if (lat < south) south = lat;
    if (lat > north) north = lat;
  }
  return {
    west, east, south, north,
    centerLon: (west + east) / 2,
    centerLat: (south + north) / 2,
    spanLon: east - west,
    spanLat: north - south,
  };
}

/** 从 Polygon 坐标数组提取所有坐标 */
export function extractPolygonCoords(geometry: { type: string; coordinates: any }): [number, number][] {
  if (geometry.type === "Polygon") {
    return (geometry.coordinates[0] as [number, number][]);
  }
  if (geometry.type === "MultiPolygon") {
    // 取最大的 polygon
    let maxArea = 0;
    let best: [number, number][] = [];
    for (const poly of geometry.coordinates as [number, number][][][]) {
      const coords = poly[0] as [number, number][];
      const bbox = computeBBox(coords);
      const area = bbox.spanLon * bbox.spanLat;
      if (area > maxArea) {
        maxArea = area;
        best = coords;
      }
    }
    return best;
  }
  return [];
}

/** 从 LineString 坐标数组提取所有坐标 */
export function extractLineCoords(geometry: { type: string; coordinates: any }): [number, number][] {
  if (geometry.type === "LineString") {
    return geometry.coordinates as [number, number][];
  }
  return [];
}

/**
 * 计算从 P1 到 P2 的方位角 (0°=北, 90°=东)
 */
function bearingDeg(lon1: number, lat1: number, lon2: number, lat2: number): number {
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const lat1Rad = lat1 * Math.PI / 180;
  const lat2Rad = lat2 * Math.PI / 180;
  const y = Math.sin(dLon) * Math.cos(lat2Rad);
  const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) - Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);
  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

/**
 * 从 Polygon geometry 计算 Camera 参数
 * 用于 basin / plateau
 */
export function computeCameraFromPolygon(
  polygonCoords: [number, number][],
  primaryFOI: FOI
): CameraParams {
  const bbox = computeBBox(polygonCoords);
  const maxSpan = Math.max(bbox.spanLon, bbox.spanLat);

  // 1 度纬度 ≈ 111km
  const spanKm = maxSpan * 111;

  // Camera 高度: span × 1.5, 限制在 50km ~ 1500km
  const range = Math.max(50_000, Math.min(1_500_000, spanKm * 1.5 * 1000));

  // pitch: 更大的 span → 更平的视角
  const pitch = clamp(-35 - (spanKm / 1000) * 2, -50, -25);

  // target: 优先使用 FOI, 否则 bbox 中心
  const target: [number, number] = [primaryFOI.lon, primaryFOI.lat];

  return {
    target,
    heading: 0, // basin/plateau 北朝上
    pitch,
    range,
  };
}

/**
 * 从 LineString geometry + FOI 计算 Camera 参数
 * 用于 mountain_system
 */
export function computeCameraFromRidge(
  ridgeCoords: [number, number][],
  primaryFOI: FOI
): CameraParams {
  const bbox = computeBBox(ridgeCoords);
  const maxSpan = Math.max(bbox.spanLon, bbox.spanLat);
  const spanKm = maxSpan * 111;

  // Camera 高度: span × 1.2
  const range = Math.max(50_000, Math.min(1_500_000, spanKm * 1.2 * 1000));

  // pitch: 山脉用更陡的角度
  const pitch = clamp(-38 - (spanKm / 1000) * 1.5, -50, -30);

  // heading: 基于 bbox 长轴方向, 取垂直方向
  // 如果东西跨度 > 南北跨度 → 山脊大致东西走向 → Camera 从南侧观察 (heading=0)
  // 如果南北跨度 > 东西跨度 → 山脊大致南北走向 → Camera 从东侧观察 (heading=90)
  let heading = 0;
  if (bbox.spanLon > bbox.spanLat) {
    // 东西走向山脉 (秦岭、天山等) → 从南侧看
    heading = 0;
  } else {
    // 南北走向山脉 (横断山脉等) → 从东侧看
    heading = 90;
  }

  // target: FOI 位置
  const target: [number, number] = [primaryFOI.lon, primaryFOI.lat];

  return { target, heading, pitch, range };
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}
