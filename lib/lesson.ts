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
 * 讲解板块的固定顺序（朗读 + 面板 + 高亮同步都用这个）
 * 概述 → 地貌特征 → 从空中怎么看 → 与相似地形的区分 → 地理知识 → 历史与人文
 */
export const LESSON_SECTION_ORDER = [
  "seeing",
  "formation",
  "observation",
  "distinguish",
  "concept",
  "history",
] as const;

export const LESSON_SECTION_HEADING: Record<string, string> = {
  seeing: "概述",
  formation: "地貌特征",
  observation: "从空中怎么看",
  distinguish: "与相似地形的区分",
  concept: "地理知识",
  history: "历史与人文",
};

export const LESSON_SECTION_HEADING_EN: Record<string, string> = {
  seeing: "Overview",
  formation: "The landform",
  observation: "From the air",
  distinguish: "Telling it apart",
  concept: "Geography note",
  history: "History & people",
};

/** 按语言取板块标题 */
export function sectionHeading(key: string, lang: "zh-CN" | "en-US"): string {
  return (
    (lang === "en-US" ? LESSON_SECTION_HEADING_EN[key] : LESSON_SECTION_HEADING[key]) ??
    key
  );
}

/** 按固定顺序返回非空板块 [{key,text}] */
export function lessonSections(lesson: TerrainLesson): { key: string; text: string }[] {
  return LESSON_SECTION_ORDER.map((key) => ({
    key,
    text: (lesson[key as keyof TerrainLesson] as string | undefined) ?? "",
  })).filter((s) => s.text.trim().length > 0);
}

/**
 * 讲解文本（纯文本，用于 UI 显示 / 浏览器 TTS）
 */
export function lessonToSpeech(lesson: TerrainLesson): string {
  return lessonSections(lesson)
    .map((s) => s.text)
    .join(" ");
}

/**
 * 讲解文本（用于 Edge TTS）—— 见 wrapSSML 说明，实际是纯文本拼接
 */
export function lessonToSSML(lesson: TerrainLesson): string {
  return wrapSSML(lessonSections(lesson).map((s) => s.text));
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
