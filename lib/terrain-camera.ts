/**
 * Terrain Camera — 从地形注册表数据推导相机参数
 *
 * 输入: TerrainEntry (lib/terrain-registry.ts)
 * 输出: { target:[lon,lat], heading, pitch, range }
 *   target = 相机所在经纬度（已从锚点沿观察反方向偏移，使锚点落在画面中部）
 *   heading = 相机朝向 (0=N, 90=E, 180=S, 270=W)
 *   pitch  = 俯角 (负 = 向下看)
 *   range  = 相机离地高度 (米)
 *
 * 设计原则:
 *   - 没有任何逐地形写死的 heading/pitch/range
 *   - 相机对准该地形最标志性的地物 (entry.landmark)
 *   - 停在能看清地形具体特征的「舷窗视角」距离
 *   - 超大地形聚焦锚点周边代表性区段 (showKm 封顶)
 *
 * flyToTerrainAndWait(payload, { heading, pitch }) 消费本模块输出，
 * payload.cameraHeight = range，且不传 category。
 */

import type { TerrainEntry } from "./terrain-registry";

export interface CameraParams {
  target: [number, number];
  heading: number;
  pitch: number;
  range: number;
}

// ---- 调参常量（端到端校准后可微调）----
/** 画面纵向"想让地形填充"的比例对应的半视角（度）越大→相机越近 */
const FRAME_HALF_ANGLE_DEG = 24;
/** 有效垂直视场角（度），用于把锚点放到画面偏下位置 */
const EFFECTIVE_VFOV_DEG = 43;
/** 锚点在画面中的纵向落点 (0=顶, 1=底)。略低于中心，前景留出地形肌理 */
const LANDMARK_SCREEN_FRAC = 0.52;
/** 偏移距离修正系数（几何值 = range / tan(角)，此系数吸收 Cesium pitch 语义差异）*/
const OFFSET_K = 1.0;

/** 展示尺度上下限（km）——普通上限即"超大地形只看代表性区段" */
const SHOW_KM_MIN = 18;
const SHOW_KM_MAX = 120;
/**
 * 加宽上限：仅当条目显式给了 `viewScale > 1`（大面积高原/盆地/平原/沙漠，
 * 需要拉远才能看出地貌本身特征，而非一个局部景物）时才可达到。
 */
const SHOW_KM_MAX_WIDE = 320;
/** range 上下限（米）——普通上限保留舷窗视角 */
const RANGE_MIN = 14_000;
const RANGE_MAX = 135_000;
/** 加宽 range 上限（配合 viewScale）*/
const RANGE_MAX_WIDE = 340_000;
/** pitch 范围（度）：小地形更俯冲看细节，大地形更接近舷窗斜视 */
const PITCH_STEEP = -55;
const PITCH_SHALLOW = -38;

const EARTH_R = 6_371_000;
const DEG = Math.PI / 180;

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * clamp(t, 0, 1);
}
function norm(v: number, lo: number, hi: number): number {
  return (v - lo) / (hi - lo);
}

/** 两点大圆距离（km），[lon,lat] */
export function haversineKm(a: [number, number], b: [number, number]): number {
  const dLat = (b[1] - a[1]) * DEG;
  const dLon = (b[0] - a[0]) * DEG;
  const lat1 = a[1] * DEG;
  const lat2 = b[1] * DEG;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return (2 * EARTH_R * Math.asin(Math.sqrt(h))) / 1000;
}

/** 方位角 P1→P2（度，0=北，顺时针） */
export function bearingDeg(a: [number, number], b: [number, number]): number {
  const dLon = (b[0] - a[0]) * DEG;
  const lat1 = a[1] * DEG;
  const lat2 = b[1] * DEG;
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  return (Math.atan2(y, x) / DEG + 360) % 360;
}

/** 从 [lon,lat] 沿 bearing（度）移动 distMeters，返回新的 [lon,lat] */
export function geodesicMove(
  origin: [number, number],
  bearing: number,
  distMeters: number
): [number, number] {
  const br = bearing * DEG;
  const d = distMeters / EARTH_R;
  const lat1 = origin[1] * DEG;
  const lon1 = origin[0] * DEG;
  const lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(d) + Math.cos(lat1) * Math.sin(d) * Math.cos(br)
  );
  const lon2 =
    lon1 +
    Math.atan2(
      Math.sin(br) * Math.sin(d) * Math.cos(lat1),
      Math.cos(d) - Math.sin(lat1) * Math.sin(lat2)
    );
  return [((lon2 / DEG + 540) % 360) - 180, lat2 / DEG];
}

/** bbox [W,S,E,N] 宽 / 高（km） */
function bboxSpanKm(bbox: [number, number, number, number]): { widthKm: number; heightKm: number } {
  const [w, s, e, n] = bbox;
  const midLat = (s + n) / 2;
  return {
    widthKm: haversineKm([w, midLat], [e, midLat]),
    heightKm: haversineKm([(w + e) / 2, s], [(w + e) / 2, n]),
  };
}

/** 山脉/河谷走向方位角（0..360，用 bearingDeg 原值） */
function axisAzimuthFull(axis: [[number, number], [number, number]]): number {
  return bearingDeg(axis[0], axis[1]);
}

/**
 * 叉积符号：landmark 在 axis 有向线段的哪一侧
 * >0 左侧（沿 axis 前进方向），<0 右侧，≈0 在线上
 * 返回单位化的横向偏移量（度，粗略）
 */
function sideOfAxis(
  axis: [[number, number], [number, number]],
  p: [number, number]
): number {
  const [ax, ay] = axis[0];
  const [bx, by] = axis[1];
  const dx = bx - ax;
  const dy = by - ay;
  const len = Math.hypot(dx, dy) || 1;
  return ((p[0] - ax) * dy - (p[1] - ay) * dx) / len;
}

/**
 * 观察方位（相机相对锚点所在的罗盘方向，landmark→camera 的 bearing）
 *
 * - entry.viewFrom 显式给定则直接用（编辑决策，如"从北侧看秦岭断崖面"）
 * - 锚点明显偏离主脊（湖泊/断坡）：相机站在锚点这一侧
 * - 锚点在主脊上（山峰）：纪录片惯例——东西向山脉从低地一侧（多为北）看，
 *   南北向山脉从平原一侧（多为东）看
 * - 面状地形：从正北看（配合偏移把锚点摆正）
 */
function deriveViewFrom(entry: TerrainEntry): number {
  if (typeof entry.viewFrom === "number") return ((entry.viewFrom % 360) + 360) % 360;

  if (entry.axis) {
    const azFull = axisAzimuthFull(entry.axis);
    const side = sideOfAxis(entry.axis, [entry.landmark.lon, entry.landmark.lat]);
    const crossSpanDeg =
      Math.abs(Math.sin(azFull * DEG)) * (entry.bbox[3] - entry.bbox[1]) +
      Math.abs(Math.cos(azFull * DEG)) * (entry.bbox[2] - entry.bbox[0]);
    const offAxis = Math.abs(side) > 0.12 * (crossSpanDeg || 1);

    if (offAxis) {
      // 相机与锚点同侧：side>0（锚点在 axis 前进方向左侧）→ 相机在 (azFull-90)
      return ((side > 0 ? azFull - 90 : azFull + 90) + 360) % 360;
    }

    const trend = ((azFull % 180) + 180) % 180; // 0..180
    const eastWest = trend >= 45 && trend <= 135;
    if (eastWest) {
      const midLat = (entry.bbox[1] + entry.bbox[3]) / 2;
      const northHalf =
        entry.landmark.lat > midLat + 0.12 * (entry.bbox[3] - entry.bbox[1]);
      return northHalf ? 0 : 180; // 锚点在北半 → 相机在北（低地一侧）
    }
    const midLon = (entry.bbox[0] + entry.bbox[2]) / 2;
    const westHalf =
      entry.landmark.lon < midLon - 0.12 * (entry.bbox[2] - entry.bbox[0]);
    return westHalf ? 270 : 90; // 默认相机在东（平原一侧）
  }

  return 0; // 面状：相机在正北
}

/** 展示尺度（km）：线状取跨脊剖面，面状取 bbox 对角线的一部分 */
function deriveShowKm(entry: TerrainEntry): number {
  const { widthKm, heightKm } = bboxSpanKm(entry.bbox);
  let raw: number;
  if (entry.axis) {
    // 跨脊方向的尺度 = bbox 短边，再放大以纳入两翼与前景
    raw = Math.min(widthKm, heightKm) * 1.15;
  } else {
    raw = Math.hypot(widthKm, heightKm) * 0.72;
  }
  // 先按普通上限夹紧，再按 viewScale 放大到加宽上限
  const base = clamp(raw, SHOW_KM_MIN, SHOW_KM_MAX);
  const scale = entry.viewScale ?? 1;
  if (scale <= 1) return base;
  return clamp(base * scale, SHOW_KM_MIN, SHOW_KM_MAX_WIDE);
}

/**
 * 主入口：从注册表条目推导相机参数
 */
export function computeTerrainCamera(entry: TerrainEntry): CameraParams {
  const landmark: [number, number] = [entry.landmark.lon, entry.landmark.lat];

  const showKm = deriveShowKm(entry);
  const wide = (entry.viewScale ?? 1) > 1;
  // pitch 由普通尺度档位决定（加宽视角仍保持舷窗斜视，不因超大而更平）
  const t = norm(Math.min(showKm, SHOW_KM_MAX), SHOW_KM_MIN, SHOW_KM_MAX);

  // pitch: 小地形俯冲、大地形斜视
  const pitch = lerp(PITCH_STEEP, PITCH_SHALLOW, t);

  // range: 使 showKm 在半视角 FRAME_HALF_ANGLE_DEG 内充满；斜视做前景拉伸修正
  const obliqueStretch = lerp(0.78, 1.0, norm(Math.abs(pitch), Math.abs(PITCH_SHALLOW), Math.abs(PITCH_STEEP)));
  let range = (showKm * 1000 * 0.5) / Math.tan(FRAME_HALF_ANGLE_DEG * DEG);
  range = clamp(range * obliqueStretch, RANGE_MIN, wide ? RANGE_MAX_WIDE : RANGE_MAX);

  // 相机位置：从锚点沿"观察反方向"（viewFrom）偏移，
  // 使锚点落在画面纵向 LANDMARK_SCREEN_FRAC 处
  const viewFrom = deriveViewFrom(entry);
  const lookDownAngle =
    Math.abs(pitch) + (LANDMARK_SCREEN_FRAC - 0.5) * EFFECTIVE_VFOV_DEG;
  const groundDist =
    (range / Math.tan(clamp(lookDownAngle, 5, 85) * DEG)) * OFFSET_K;
  const target = geodesicMove(landmark, viewFrom, groundDist);

  // heading 由几何精确回推，保证锚点水平居中（吸收大圆偏航）
  const heading = bearingDeg(target, landmark);

  return {
    target,
    heading: Math.round(heading * 10) / 10,
    pitch: Math.round(pitch * 10) / 10,
    range: Math.round(range),
  };
}

/** 便于调试：返回锚点本身（画面应对准处） */
export function landmarkOf(entry: TerrainEntry): [number, number] {
  return [entry.landmark.lon, entry.landmark.lat];
}
