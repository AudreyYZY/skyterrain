/**
 * Terrain Label Registry
 *
 * 标签的显示元数据（位置 / 走向 / 重要性 / 分类）。
 * 位置与走向来自单一真实源 lib/terrain-registry.ts，本文件只补充
 * 「标签重要性 importance」这一显示层决策。
 * 视觉参数（字号 / 颜色）由 TerrainTheme 决定。
 */

import type { Importance } from "./terrain-label-theme";
import { TERRAIN_REGISTRY, labelPosOf, type TerrainCategory } from "./terrain-registry";

export type LandformCategory =
  | "mountain"
  | "plateau"
  | "basin"
  | "desert"
  | "lake"
  | "peak"
  | "river"
  | "plain"
  | "scenic"
  | "oasis"
  | "city";

export interface TerrainLabel {
  id: string;
  name: string;
  importance: Importance;
  category: LandformCategory;
  lat: number;
  lon: number;
  /** 山脉走向旋转角度 (度)，其他类型为 0 */
  rotation: number;
  /** 所属区域 — 用于区域切换时过滤标签 */
  regionId: string;
}

/** registry 分类 → 标签分类 */
const CATEGORY_MAP: Record<TerrainCategory, LandformCategory> = {
  mountain_system: "mountain",
  plateau: "plateau",
  basin: "basin",
  plain: "plain",
  desert: "desert",
  lake: "lake",
  river: "river",
  valley: "river",
  scenic: "scenic",
  oasis: "oasis",
  city: "city",
};

/**
 * 标签重要性 — 决定何时可见（zoom）、字号、字间距。
 * 未列出的 id 按分类给默认值。
 */
const IMPORTANCE_BY_ID: Record<string, Importance> = {
  // 大陆尺度
  "qinghai-tibet": "continental",
  himalaya: "continental",
  // 国家尺度 — 一级山脉 / 高原 / 大盆地 / 大平原
  tianshan: "national",
  kunlun: "national",
  altai: "national",
  qinling: "national",
  qilian: "national",
  taihang: "national",
  daxinganling: "national",
  hengduan: "national",
  loess: "national",
  "inner-mongolia": "national",
  "yunnan-guizhou": "national",
  sichuan: "national",
  northeast: "national",
  "north-china": "national",
  yangtze: "national",
  // 区域尺度
  "junggar-basin": "regional",
  "tarim-basin": "regional",
  taklamakan: "regional",
  pamir: "regional",
  karakoram: "regional",
  "turpan-basin": "regional",
  qaidam: "regional",
  sayram: "regional",
  gurbantunggut: "regional",
  "ili-valley": "regional",
  "tarim-river": "regional",
  ertis: "regional",
};

function importanceOf(id: string, category: TerrainCategory): Importance {
  if (IMPORTANCE_BY_ID[id]) return IMPORTANCE_BY_ID[id];
  if (category === "mountain_system" || category === "plateau" || category === "basin" || category === "plain")
    return "regional";
  return "poi";
}

export const TERRAIN_LABELS: TerrainLabel[] = TERRAIN_REGISTRY.map((e) => {
  const pos = labelPosOf(e);
  return {
    id: e.id,
    name: e.nameZh,
    importance: importanceOf(e.id, e.category),
    category: CATEGORY_MAP[e.category],
    lat: pos.lat,
    lon: pos.lon,
    rotation: pos.rotation,
    // 目前只有「中国」这一个可选区域（新疆地形也在中国视图内展示）。
    // 待引入独立的新疆子区域时再按 e.regionId 细分。
    regionId: "china",
  };
});
