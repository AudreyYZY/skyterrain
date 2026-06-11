/**
 * Auto Camera — 从 Geometry + FOI 自动计算 Camera 参数
 *
 * 输入: Terrain Geometry (Polygon/LineString) + FOI
 * 输出: target, heading, pitch, range
 *
 * target = 相机位置 (camera position)
 * heading = 相机朝向 (0=N, 90=E, 180=S, 270=W)
 * pitch = 俯角 (negative = looking down)
 *
 * 核心逻辑:
 *   相机不直接设在 FOI 正上方。
 *   根据 heading 和 pitch, 相机向反方向偏移,
 *   使得屏幕中心落在 FOI 上。
 *
 * 例如东西走向山脉 (heading=0, 朝北看):
 *   相机设在 FOI 南方偏移处, 朝北看 → FOI 在屏幕中心
 * 例如南北走向山脉 (heading=270, 朝西看):
 *   相机设在 FOI 东方偏移处, 朝西看 → FOI 在屏幕中心
 *
 * 偏移距离 = range * tan(abs(pitch)) (地面投影距离)
 */

export interface CameraParams {
  target: [number, number]; // [lon, lat] — 相机位置
  heading: number;          // degrees (0=N, 90=E, 180=S, 270=W)
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
 * 根据 heading 反算偏移量, 使相机面向目标
 *
 * Cesium flyTo 行为:
 *   destination = 相机位置
 *   orientation.heading = 相机朝向
 *   orientation.pitch = 俯角
 *
 * 当相机直接设在目标正上方时 (cameraAt),
 *   heading=0 → 屏幕中心落在目标北方
 *   偏移量 = range * tan(abs(pitch))
 *
 * 修复: 将相机位置向反方向偏移,
 *   使屏幕中心回到 FOI。
 *
 * 例: 东西走向山脉 (heading=0, 朝北看)
 *   相机设在 FOI 南方 range*tan(|pitch|) 处, 朝北看
 *   → 屏幕中心 = FOI
 */
function offsetPositionForHeading(
  foiLon: number,
  foiLat: number,
  heading: number,
  pitchDeg: number,
  rangeMeters: number
): [number, number] {
  const groundDistance = rangeMeters * Math.tan((Math.abs(pitchDeg) * Math.PI) / 180);

  // 相机朝向的反方向 = (heading + 180) % 360
  const backBearing = (heading + 180) % 360;
  const backRad = (backBearing * Math.PI) / 180;

  // 地球半径
  const R = 6371000;
  const d = groundDistance;

  // 沿方位角 backBearing 移动 groundDistance 米
  const lat1Rad = foiLat * Math.PI / 180;
  const lon1Rad = foiLon * Math.PI / 180;

  const newLat = Math.asin(
    Math.sin(lat1Rad) * Math.cos(d / R) +
    Math.cos(lat1Rad) * Math.sin(d / R) * Math.cos(backRad)
  );
  const newLon = lon1Rad + Math.atan2(
    Math.sin(backRad) * Math.sin(d / R) * Math.cos(lat1Rad),
    Math.cos(d / R) - Math.sin(lat1Rad) * Math.sin(newLat)
  );

  return [
    newLon * 180 / Math.PI,
    newLat * 180 / Math.PI,
  ];
}

/**
 * 计算山地观察方向
 * 东西走向 → 从南侧看 (heading=0, 朝北)
 * 南北走向 → 从东侧看 (heading=270, 朝西)
 */
function computeMountainHeading(bbox: { spanLon: number; spanLat: number }): number {
  if (bbox.spanLon > bbox.spanLat) {
    // 东西走向: 从南侧看, 朝北
    return 0;
  }
  // 南北走向: 从东侧看, 朝西
  return 270;
}

/**
 * 基于 span 自动计算相机高度
 * 地形越大, 飞得越高
 */
function computeRangeForSpan(spanKm: number): number {
  if (spanKm < 50) {
    return 50_000;
  }
  if (spanKm < 300) {
    return spanKm * 500;
  }
  if (spanKm < 1000) {
    return spanKm * 400;
  }
  return Math.min(spanKm * 300, 500_000);
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
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
  const spanKm = maxSpan * 111;

  const range = computeRangeForSpan(spanKm);
  const pitch = clamp(-35 - (spanKm / 1000) * 2, -50, -25);

  // 面状地形: 从正上方俯瞰
  return {
    target: [primaryFOI.lon, primaryFOI.lat],
    heading: 0,
    pitch,
    range,
  };
}

/**
 * 从 LineString geometry + FOI 计算 Camera 参数
 * 用于 mountain_system
 *
 * 核心: 相机位置 offset 从 FOI 反方向,
 *   使得屏幕中心落在 FOI 上。
 */
export function computeCameraFromRidge(
  ridgeCoords: [number, number][],
  primaryFOI: FOI
): CameraParams {
  const bbox = computeBBox(ridgeCoords);
  const maxSpan = Math.max(bbox.spanLon, bbox.spanLat);
  const spanKm = maxSpan * 111;

  const range = computeRangeForSpan(spanKm);
  const pitch = clamp(-38 - (spanKm / 1000) * 1.5, -50, -30);
  const heading = computeMountainHeading(bbox);

  // 关键: target = offset 后的位置,
  //   不是 FOI 本身。
  //   相机设在 target 正上方,
  //   朝 heading 方向看,
  //   屏幕中心 = FOI。
  const cameraPos = offsetPositionForHeading(
    primaryFOI.lon,
    primaryFOI.lat,
    heading,
    pitch,
    range
  );

  return {
    target: cameraPos,
    heading,
    pitch,
    range,
  };
}
