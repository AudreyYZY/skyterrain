/**
 * 统一讲解解析 —— 一处决定「某地形、某语言」用哪份讲解内容。
 *
 * 取代原来散落在 ExplorerApp 三处的内联优先级逻辑。
 *
 * 优先级
 *   zh-CN: 权威内容(zh) → i18n-stories(zh) → 传入的兜底(早期地形 JSON / feature story) → null
 *   en-US: 权威内容(en) → i18n-stories(en) → 权威内容(zh，至少是结构化的) → 兜底 → null
 */

import type { Language } from "@/lib/i18n";
import type { TerrainLesson } from "@/types/terrain";
import { getTerrainContent } from "@/lib/terrain-content";
import { getTerrainStory } from "@/lib/i18n-stories";

interface ResolveOpts {
  /** 中文名 —— 用于查 i18n-stories（它以中文名为 key）*/
  nameZh?: string;
  /** 兜底讲解（早期地形 JSON 自带 lesson / core-features story），通常是中文 */
  fallback?: TerrainLesson | null;
}

function storyToLesson(s: {
  seeing: string;
  formation: string;
  observation: string;
  history: string;
}): TerrainLesson {
  return {
    seeing: s.seeing,
    formation: s.formation,
    observation: s.observation,
    history: s.history,
  };
}

export async function resolveLesson(
  id: string,
  lang: Language,
  opts?: ResolveOpts,
): Promise<TerrainLesson | null> {
  const authored = await getTerrainContent(id, lang);
  if (authored) return authored;

  if (opts?.nameZh) {
    const story = getTerrainStory(opts.nameZh, lang);
    if (story) return storyToLesson(story);
  }

  if (lang === "en-US") {
    const zh = await getTerrainContent(id, "zh-CN");
    if (zh) return zh;
  }

  return opts?.fallback ?? null;
}
