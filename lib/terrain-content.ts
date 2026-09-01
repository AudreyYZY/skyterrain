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

/**
 * 两份内容文件合计近 2.8 万行，占初始 JS 体积的大头，且首屏（地球 + 目录）
 * 并不需要它们——用动态 import 延后到真正打开一篇讲解时才加载，
 * 加载后常驻内存缓存，同一会话只请求一次。
 */
let zhPromise: Promise<Record<string, TerrainLesson>> | null = null;
let enPromise: Promise<Record<string, TerrainLesson>> | null = null;

function loadZh(): Promise<Record<string, TerrainLesson>> {
  if (!zhPromise) {
    zhPromise = import("@/lib/terrain-content.zh").then((m) => m.TERRAIN_CONTENT_ZH);
  }
  return zhPromise;
}

function loadEn(): Promise<Record<string, TerrainLesson>> {
  if (!enPromise) {
    enPromise = import("@/lib/terrain-content.en").then((m) => m.TERRAIN_CONTENT_EN);
  }
  return enPromise;
}

/** 取某语言的权威结构化讲解，无则 undefined */
export async function getTerrainContent(
  id: string,
  lang: Language,
): Promise<TerrainLesson | undefined> {
  const content = lang === "en-US" ? await loadEn() : await loadZh();
  return content[id];
}
