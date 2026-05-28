import type { TerrainLesson, TerrainPoint } from "@/types/terrain";
import { generateNarrationFromTerrainData, generateRouteNarration } from "@/lib/narration-engine";

export function lessonToSpeech(lesson: TerrainLesson): string {
  return [lesson.seeing, lesson.formation, lesson.history]
    .filter((s) => s.trim().length > 0)
    .join(" ");
}

/**
 * 从结构化地理数据生成完整讲解脚本（优先使用结构化数据）
 */
export function terrainToSpeech(terrain: TerrainPoint): string {
  return generateNarrationFromTerrainData(terrain);
}

/**
 * 生成航线讲解脚本（飞越提示 + 完整讲解）
 */
export function terrainToRouteSpeech(terrain: TerrainPoint): string {
  return generateRouteNarration(terrain);
}
