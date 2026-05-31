import type { TerrainLesson, TerrainPoint } from "@/types/terrain";
import { generateNarrationFromTerrainData, generateRouteNarration } from "@/lib/narration-engine";

/**
 * 将文本转义为 SSML 安全格式
 */
function escapeSSML(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * 将多段文本包装为 SSML，段落之间加自然停顿
 * 纪录片风格：缓慢语速，微降音调，段落间呼吸停顿
 */
function wrapSSML(sections: string[]): string {
  const valid = sections.filter((s) => s && s.trim().length > 0);
  if (valid.length === 0) return "";

  const parts = valid.map((s) => `<p>${escapeSSML(s)}</p>`);
  return `<speak><prosody rate="slow" pitch="-2%">${parts.join('<break time="1200ms"/>')}</prosody></speak>`;
}

/**
 * 讲解文本（纯文本，用于 UI 显示）
 */
export function lessonToSpeech(lesson: TerrainLesson): string {
  return [lesson.seeing, lesson.formation, lesson.history, lesson.observation]
    .filter((s) => s && s.trim().length > 0)
    .join(" ");
}

/**
 * 讲解文本（SSML 格式，用于语音合成）
 * 段落之间有 1.2 秒自然停顿
 */
export function lessonToSSML(lesson: TerrainLesson): string {
  return wrapSSML([lesson.seeing, lesson.formation, lesson.history, lesson.observation ?? ""]);
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
