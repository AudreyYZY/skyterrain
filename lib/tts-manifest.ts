/**
 * 播报清单 —— 枚举「界面上任何一次点击最终会送给 /api/tts 的每一段文本」。
 *
 * 关键约束：这里产出的 text 必须和客户端实际发出的**逐字节相同**，否则预热出来的
 * 缓存线上一个也命中不了。因此这里不自己拼文本，一律调用与客户端同一套函数：
 *   - 地形讲解 → resolveLesson + lessonSections（components/ExplorerApp.tsx 走的同一条）
 *   - 城市攻略 → resolveTravelGuide + travelGuideToSections
 *   - 航线解说 → getRouteNarration（整条一段，不分段）
 * 语音则来自 getTTSVoice(language)：所有播报入口都显式传 language，
 * 所以实际只会用到中英各一个语音。
 */

import { getTTSVoice, type Language } from "@/lib/i18n";
import { lessonSections } from "@/lib/lesson";
import { CITY_REGISTRY, COUNTRY_OVERVIEWS } from "@/lib/places-registry";
import { getAllRoutes } from "@/lib/routes";
import { getRouteNarration } from "@/lib/route-narration";
import { resolveLesson } from "@/lib/terrain-lesson";
import { TERRAIN_REGISTRY } from "@/lib/terrain-registry";
import { resolveTravelGuide, travelGuideToSections } from "@/lib/travel-lesson";

export const LANGUAGES: Language[] = ["zh-CN", "en-US"];

export type TtsSegmentKind = "terrain" | "travel" | "route";

export interface TtsSegment {
  kind: TtsSegmentKind;
  /** 地形 id / 城市 id / 航线 id */
  id: string;
  /** 段落键：讲解板块名、攻略段名，或航线的 study / travel */
  section: string;
  lang: Language;
  voice: string;
  text: string;
}

/** 某个地形解析不到讲解内容——预热覆盖不到，需要单独报出来 */
export interface ManifestGap {
  kind: TtsSegmentKind;
  id: string;
  lang: Language;
  reason: string;
}

export interface Manifest {
  segments: TtsSegment[];
  gaps: ManifestGap[];
}

export interface CollectOptions {
  /** 只收某几类，默认全收 */
  kinds?: TtsSegmentKind[];
  /** 只收某个语言，默认中英都收 */
  langs?: Language[];
}

export async function collectTtsSegments(opts: CollectOptions = {}): Promise<Manifest> {
  const kinds = new Set<TtsSegmentKind>(opts.kinds ?? ["terrain", "travel", "route"]);
  const langs = opts.langs ?? LANGUAGES;

  const segments: TtsSegment[] = [];
  const gaps: ManifestGap[] = [];
  const push = (
    kind: TtsSegmentKind,
    id: string,
    section: string,
    lang: Language,
    text: string,
  ) => {
    if (!text || !text.trim()) return;
    segments.push({ kind, id, section, lang, voice: getTTSVoice(lang), text });
  };

  if (kinds.has("terrain")) {
    for (const entry of TERRAIN_REGISTRY) {
      for (const lang of langs) {
        // 与 ExplorerApp.showTerrainLesson 同参：nameZh 用于 i18n-stories 兜底。
        // fallback（早期地形 JSON 的 lesson）这里不传——那条兜底只在权威内容缺失时
        // 触发，真触发了说明该地形没有 terrain-content，属于要单独处理的缺口。
        const lesson = await resolveLesson(entry.id, lang, { nameZh: entry.nameZh });
        if (!lesson) {
          gaps.push({ kind: "terrain", id: entry.id, lang, reason: "resolveLesson 返回 null" });
          continue;
        }
        for (const s of lessonSections(lesson)) {
          push("terrain", entry.id, s.key, lang, s.text);
        }
      }
    }
  }

  if (kinds.has("travel")) {
    const travelIds = [
      ...CITY_REGISTRY.map((c) => c.id),
      ...COUNTRY_OVERVIEWS.map((o) => `${o.country}-overview`),
    ];
    for (const id of travelIds) {
      for (const lang of langs) {
        const guide = await resolveTravelGuide(id, lang);
        if (!guide) {
          gaps.push({ kind: "travel", id, lang, reason: "resolveTravelGuide 返回 null" });
          continue;
        }
        for (const s of travelGuideToSections(guide, lang)) {
          push("travel", id, s.key, lang, s.text);
        }
      }
    }
  }

  if (kinds.has("route")) {
    for (const route of getAllRoutes()) {
      for (const mode of ["study", "travel"] as const) {
        for (const lang of langs) {
          const text = getRouteNarration(route.id, lang, mode);
          if (!text) {
            gaps.push({ kind: "route", id: route.id, lang, reason: `缺 ${mode} 解说` });
            continue;
          }
          // 航线解说整条一段送 TTS（见 ExplorerApp 的 narrText），不分段
          push("route", route.id, mode, lang, text);
        }
      }
    }
  }

  return { segments, gaps };
}
