/**
 * 地形讲解内容（权威·结构化·双语）
 *
 * 来源基调：中国国家地理、中国科学院、自然资源部、中学与大学《中国地理》教材中
 * 公认的事实。非文学化旁白、非凭空生成。英文按同类权威口径撰写，非机器直译。
 *
 * 6 个通用板块见 types/terrain.ts TerrainLesson / lib/lesson.ts 顺序：
 *   seeing 概述 · formation 地貌特征 · observation 从空中怎么看 ·
 *   distinguish 与相似地形的区分 · concept 地理知识 · history 历史与人文
 *
 * 中文在 terrain-content.zh.ts，英文在 terrain-content.en.ts，均按注册表 id 索引。
 * 未收录的地形由 resolveLesson 回退到 i18n-stories / 早期地形 JSON / 占位。
 */

import type { TerrainLesson } from "@/types/terrain";
import type { Language } from "@/lib/i18n";
import { TERRAIN_CONTENT_ZH } from "@/lib/terrain-content.zh";
import { TERRAIN_CONTENT_EN } from "@/lib/terrain-content.en";

/** 取某语言的权威结构化讲解，无则 undefined */
export function getTerrainContent(
  id: string,
  lang: Language,
): TerrainLesson | undefined {
  return lang === "en-US" ? TERRAIN_CONTENT_EN[id] : TERRAIN_CONTENT_ZH[id];
}

/** 任一语言是否有该地形的权威内容 */
export function hasTerrainContent(id: string): boolean {
  return id in TERRAIN_CONTENT_ZH || id in TERRAIN_CONTENT_EN;
}

export { TERRAIN_CONTENT_ZH, TERRAIN_CONTENT_EN };
