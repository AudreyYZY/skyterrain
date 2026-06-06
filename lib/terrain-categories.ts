import type { TerrainCategory } from "@/types/terrain";

/** 地貌探索分类 — 按地形类型组织，非行政区 */
export const TERRAIN_CATEGORY_ORDER: TerrainCategory[] = [
  "mountain_range",
  "lake",
  "desert",
  "basin",
  "river",
  "scenic",
];

export const TERRAIN_CATEGORY_LABEL: Record<TerrainCategory, string> = {
  mountain_range: "山脉",
  lake: "湖泊",
  desert: "沙漠",
  basin: "盆地",
  river: "河谷",
  scenic: "景观",
  valley: "河谷",
  oasis: "绿洲",
  silk_road: "丝路",
  city: "城市",
};
