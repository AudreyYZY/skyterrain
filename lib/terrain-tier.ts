/**
 * 地形分级（Tier）—— 目录排序用。见 docs/terrain-taxonomy.md：
 *   T1 骨架  = 不讲它就讲不清该地区地表结构（一级山脉/高原/盆地/平原/主干河流…）
 *   T2 地貌省 = 有独立个性的次级地貌区
 *   T3 标志地点 = 具体的一处（名气大 / 单帧画面强 / 人文聚落）
 *
 * 目前由标签重要性（terrain-label-registry 的 IMPORTANCE_BY_ID + 默认规则）派生，
 * 不额外维护一份 tier 表：continental/national → T1，regional → T2，poi → T3。
 */

import { importanceOf } from "./terrain-label-registry";
import { getTerrainEntry } from "./terrain-registry";
import type { TerrainCategory } from "./terrain-registry";

export type Tier = 1 | 2 | 3;

export function terrainTier(id: string, category?: TerrainCategory): Tier {
  const cat = category ?? getTerrainEntry(id)?.category ?? "hills";
  const imp = importanceOf(id, cat);
  if (imp === "continental" || imp === "national") return 1;
  if (imp === "poi") return 3;
  return 2;
}

/** 分类在同一 tier 内的排序权重（骨架类地貌靠前） */
const CATEGORY_ORDER: Record<string, number> = {
  mountain_system: 0,
  plateau: 1,
  basin: 2,
  plain: 3,
  valley: 4,
  river: 5,
  gorge: 6,
  hills: 7,
  desert: 8,
  lake: 9,
  grassland: 10,
  coast: 11,
  island: 12,
  inselberg: 13,
  settlement: 14,
};

export function categoryOrder(category: string): number {
  return CATEGORY_ORDER[category] ?? 99;
}
