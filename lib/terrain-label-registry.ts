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
  | "plain"
  | "hills"
  | "desert"
  | "lake"
  | "peak"
  | "river"
  | "gorge"
  | "island"
  | "grassland"
  | "coast"
  | "inselberg"
  | "settlement";

export interface TerrainLabel {
  id: string;
  name: string;
  nameEn: string;
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
  hills: "hills",
  desert: "desert",
  lake: "lake",
  river: "river",
  valley: "river",
  gorge: "gorge",
  island: "island",
  grassland: "grassland",
  coast: "coast",
  inselberg: "inselberg",
  settlement: "settlement",
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
  changbai: "national",
  nanling: "national",
  wuyi: "national",
  taiwan: "national",
  hainan: "national",
  altun: "national",
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
  yinshan: "regional",
  luliang: "regional",
  helan: "regional",
  liupan: "regional",
  dabashan: "regional",
  xuefeng: "regional",
  dabie: "regional",
  dalou: "regional",
  xiaoxinganling: "regional",
  "hexi-corridor": "regional",
  "yangtze-gorges": "regional",
  "tsangpo-gorge": "regional",
  "chengdu-plain": "regional",
  "guanzhong-plain": "regional",
  "hetao-plain": "regional",
  "yangtze-delta": "regional",
  "pearl-delta": "regional",
  "liaodong-hills": "regional",
  "shandong-hills": "regional",
  "jiangnan-hills": "regional",
  "liangguang-hills": "regional",
  "badain-jaran": "regional",
  tengger: "regional",
  gobi: "regional",
  "qinghai-lake": "regional",
  namtso: "regional",
  poyang: "regional",
  dongting: "regional",

  // 澳大利亚
  "great-dividing-range": "national",
  "australian-alps": "national",
  "great-barrier-reef": "national",
  uluru: "national",
  "nullarbor-plain": "national",
  "great-artesian-basin": "national",
  "simpson-desert": "national",
  "murray-darling": "national",
  tasmania: "national",
  "macdonnell-ranges": "regional",
  "flinders-ranges": "regional",
  "blue-mountains": "regional",
  pilbara: "regional",
  kimberley: "regional",
  "great-victoria-desert": "regional",
  "lake-eyre": "regional",
  "kata-tjuta": "regional",
  "twelve-apostles": "regional",

  // 新西兰
  "aoraki-southern-alps": "national",
  "mount-ruapehu": "national",
  "mount-taranaki": "national",
  fiordland: "national",
  "lake-taupo": "national",
  "canterbury-plains": "national",
  "waikato-river": "national",
  "clutha-river": "national",
};

function importanceOf(id: string, category: TerrainCategory): Importance {
  if (IMPORTANCE_BY_ID[id]) return IMPORTANCE_BY_ID[id];
  // 大类地貌默认至少「区域级」——否则常规缩放看不到标签（见 PR #9）。
  // 只有点状小地物（绿洲聚落 / 单体岛山）默认为 poi。
  if (category === "settlement" || category === "inselberg") return "poi";
  return "regional";
}

export const TERRAIN_LABELS: TerrainLabel[] = TERRAIN_REGISTRY.map((e) => {
  const pos = labelPosOf(e);
  return {
    id: e.id,
    name: e.nameZh,
    nameEn: e.nameEn,
    importance: importanceOf(e.id, e.category),
    category: CATEGORY_MAP[e.category],
    lat: pos.lat,
    lon: pos.lon,
    rotation: pos.rotation,
    // regionId 已是大洲（asia / oceania / …）
    regionId: e.regionId,
  };
});
