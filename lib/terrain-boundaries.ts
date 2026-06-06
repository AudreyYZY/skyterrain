/**
 * 地貌边界数据 — 手工粗略 Polygon
 *
 * 用于在地图上显示地貌空间范围
 * 第一阶段使用粗略边界，后续可替换为精确 GeoJSON
 *
 * 坐标格式: [lon, lat] 数组
 */

export interface TerrainBoundary {
  id: string;
  name: string;
  type: "basin" | "desert" | "lake" | "mountain" | "plateau";
  /** Polygon 坐标 [lon, lat][] */
  coordinates: [number, number][];
}

/** 塔里木盆地 — 粗略边界 */
const TARIM_BASIN: TerrainBoundary = {
  id: "tarim-basin-boundary",
  name: "塔里木盆地",
  type: "basin",
  coordinates: [
    [74.5, 39.0], [76.0, 40.5], [79.0, 41.5], [82.0, 42.0],
    [86.0, 42.0], [89.0, 41.5], [91.0, 40.5], [92.0, 39.5],
    [91.0, 38.0], [89.0, 37.0], [86.0, 36.5], [82.0, 36.5],
    [79.0, 37.0], [76.0, 37.5], [74.5, 39.0],
  ],
};

/** 准噶尔盆地 — 粗略边界 */
const JUNGGAR_BASIN: TerrainBoundary = {
  id: "junggar-basin-boundary",
  name: "准噶尔盆地",
  type: "basin",
  coordinates: [
    [82.0, 44.0], [84.0, 45.5], [87.0, 46.5], [90.0, 47.0],
    [92.0, 46.5], [93.0, 45.5], [92.0, 44.0], [90.0, 43.0],
    [87.0, 42.5], [84.0, 43.0], [82.0, 44.0],
  ],
};

/** 塔克拉玛干沙漠 — 粗略边界 */
const TAKLAMAKAN: TerrainBoundary = {
  id: "taklamakan-boundary",
  name: "塔克拉玛干沙漠",
  type: "desert",
  coordinates: [
    [77.0, 39.0], [79.0, 40.5], [82.0, 41.0], [85.0, 41.0],
    [88.0, 40.5], [90.0, 39.5], [90.5, 38.0], [89.0, 37.0],
    [86.0, 36.5], [83.0, 37.0], [80.0, 37.5], [77.0, 39.0],
  ],
};

/** 博斯腾湖 — 粗略边界 */
const BOSTEN_LAKE: TerrainBoundary = {
  id: "bosten-boundary",
  name: "博斯腾湖",
  type: "lake",
  coordinates: [
    [86.5, 41.7], [86.8, 42.0], [87.3, 42.1], [87.5, 41.9],
    [87.3, 41.6], [87.0, 41.5], [86.7, 41.5], [86.5, 41.7],
  ],
};

/** 赛里木湖 — 粗略边界 */
const SAYRAM_LAKE: TerrainBoundary = {
  id: "sayram-boundary",
  name: "赛里木湖",
  type: "lake",
  coordinates: [
    [80.8, 44.4], [81.0, 44.6], [81.4, 44.7], [81.7, 44.6],
    [81.8, 44.4], [81.5, 44.2], [81.2, 44.2], [80.8, 44.4],
  ],
};

/** 天山范围 — 粗略边界 */
const TIANSHAN: TerrainBoundary = {
  id: "tianshan-boundary",
  name: "天山",
  type: "mountain",
  coordinates: [
    [74.0, 41.0], [76.0, 42.5], [79.0, 43.5], [82.0, 44.0],
    [85.0, 44.5], [88.0, 44.0], [91.0, 43.0], [93.0, 42.5],
    [95.0, 42.0], [93.0, 41.0], [90.0, 40.5], [87.0, 41.0],
    [84.0, 41.5], [81.0, 42.0], [78.0, 41.5], [74.0, 41.0],
  ],
};

/** 昆仑山范围 — 粗略边界 */
const KUNLUN: TerrainBoundary = {
  id: "kunlun-boundary",
  name: "昆仑山",
  type: "mountain",
  coordinates: [
    [74.0, 36.0], [77.0, 37.0], [80.0, 37.5], [83.0, 37.0],
    [86.0, 36.5], [89.0, 36.0], [92.0, 35.5], [95.0, 36.0],
    [95.0, 35.0], [92.0, 34.5], [89.0, 35.0], [86.0, 35.5],
    [83.0, 36.0], [80.0, 36.5], [77.0, 36.0], [74.0, 36.0],
  ],
};

/** 阿尔泰山范围 — 粗略边界 */
const ALTAI: TerrainBoundary = {
  id: "altai-boundary",
  name: "阿尔泰山",
  type: "mountain",
  coordinates: [
    [86.0, 47.0], [88.0, 48.5], [90.0, 49.0], [92.0, 48.5],
    [94.0, 48.0], [95.0, 47.0], [94.0, 46.0], [92.0, 45.5],
    [90.0, 46.0], [88.0, 46.5], [86.0, 47.0],
  ],
};

/** 帕米尔高原 — 粗略边界 */
const PAMIR: TerrainBoundary = {
  id: "pamir-boundary",
  name: "帕米尔高原",
  type: "plateau",
  coordinates: [
    [73.0, 38.0], [74.0, 39.5], [76.0, 40.0], [78.0, 39.5],
    [79.0, 38.5], [78.0, 37.0], [76.0, 36.5], [74.0, 37.0],
    [73.0, 38.0],
  ],
};

/** 喀纳斯湖 — 粗略边界 */
const KANAS_LAKE: TerrainBoundary = {
  id: "kanas-boundary",
  name: "喀纳斯湖",
  type: "lake",
  coordinates: [
    [87.0, 48.7], [87.2, 48.8], [87.5, 48.8], [87.7, 48.7],
    [87.5, 48.6], [87.2, 48.6], [87.0, 48.7],
  ],
};

/** 所有地貌边界 */
export const TERRAIN_BOUNDARIES: TerrainBoundary[] = [
  TARIM_BASIN,
  JUNGGAR_BASIN,
  TAKLAMAKAN,
  TIANSHAN,
  KUNLUN,
  ALTAI,
  PAMIR,
  BOSTEN_LAKE,
  SAYRAM_LAKE,
  KANAS_LAKE,
];

/** 边界样式配置 — 极弱边界线，不填充 */
export const BOUNDARY_STYLES = {
  basin: {
    default: { alpha: 0.15, width: 1, color: [255, 255, 255] as [number, number, number] },
    hover: { alpha: 0.30, width: 1.5 },
    selected: { alpha: 0.50, width: 2, color: [251, 191, 36] as [number, number, number] },
  },
  desert: {
    default: { alpha: 0.12, width: 1, color: [255, 255, 255] as [number, number, number] },
    hover: { alpha: 0.25, width: 1.5 },
    selected: { alpha: 0.45, width: 2, color: [251, 191, 36] as [number, number, number] },
  },
  lake: {
    default: { alpha: 0.18, width: 1, color: [255, 255, 255] as [number, number, number] },
    hover: { alpha: 0.35, width: 1.5 },
    selected: { alpha: 0.55, width: 2, color: [251, 191, 36] as [number, number, number] },
  },
  mountain: {
    default: { alpha: 0.10, width: 1, color: [255, 255, 255] as [number, number, number] },
    hover: { alpha: 0.20, width: 1.5 },
    selected: { alpha: 0.40, width: 2, color: [251, 191, 36] as [number, number, number] },
  },
  plateau: {
    default: { alpha: 0.10, width: 1, color: [255, 255, 255] as [number, number, number] },
    hover: { alpha: 0.20, width: 1.5 },
    selected: { alpha: 0.40, width: 2, color: [251, 191, 36] as [number, number, number] },
  },
} as const;
