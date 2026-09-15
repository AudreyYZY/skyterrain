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
 * 正文按国家存放在 lib/content/<country>/terrain.{zh,en}.ts，均按注册表 id 索引。
 * 未收录的地形由 resolveLesson 回退到 i18n-stories / 早期地形 JSON / 占位。
 */

import type { TerrainLesson } from "@/types/terrain";
import type { Language } from "@/lib/i18n";
import { getTerrainEntry } from "@/lib/terrain-registry";
import { TERRAIN_EN_LOADERS, TERRAIN_ZH_LOADERS } from "@/lib/content/_generated/loaders";

/**
 * 讲解正文按国家存放在 lib/content/<country>/terrain.{zh,en}.ts。首屏（地球 + 目录）不需要它们，
 * 打开一篇讲解时**只下载该地形所属国家的那一份**（每国一个 chunk），加载后常驻内存缓存。
 * 拆分前是整份 2.8 万行一次性下载。
 */
const cache = new Map<string, Promise<Record<string, TerrainLesson>>>();

function loadCountry(country: string, lang: Language): Promise<Record<string, TerrainLesson>> {
  const key = `${country}:${lang}`;
  let p = cache.get(key);
  if (!p) {
    const loader = (lang === "en-US" ? TERRAIN_EN_LOADERS : TERRAIN_ZH_LOADERS)[country];
    p = loader ? loader() : Promise.resolve({});
    // 加载失败（网络抖动）不要把失败的 Promise 永久缓存
    p.catch(() => cache.delete(key));
    cache.set(key, p);
  }
  return p;
}

/** 取某语言的权威结构化讲解，无则 undefined */
export async function getTerrainContent(
  id: string,
  lang: Language,
): Promise<TerrainLesson | undefined> {
  const country = getTerrainEntry(id)?.country;
  if (!country) return undefined;
  const content = await loadCountry(country, lang);
  return content[id];
}
