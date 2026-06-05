import type { TerrainLesson, TerrainPoint } from "@/types/terrain";
import { generateNarrationFromTerrainData, generateRouteNarration } from "@/lib/narration-engine";

/**
 * 将多段文本拼接为纯文本，段落之间用句号分隔
 * edge-tts-universal 始终将输入包装在 <speak><voice><prosody> 中，
 * 传入 SSML 标签（<break>, <p>, <prosody>）会导致嵌套标签被当作纯文本朗读。
 * rate/pitch 由 EdgeTTS 构造函数参数控制。
 */
function wrapSSML(sections: string[]): string {
  const valid = sections.filter((s) => s && s.trim().length > 0);
  if (valid.length === 0) return "";
  return valid.join(" ");
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
