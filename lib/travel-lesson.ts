import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { TRAVEL_CONTENT_ZH } from "@/lib/travel-content.zh";
import { TRAVEL_CONTENT_EN } from "@/lib/travel-content.en";

export interface TravelGuide {
  /** 1. 这是座什么城 —— 性格、地位、第一印象 */
  identity: string;
  /** 2. 地理与格局 —— 为什么在这里、坐落在什么地形、分几个片区 */
  layout: string;
  /** 3. 衣食住行 —— 气候穿衣、当地饮食、住哪片、怎么走动 */
  gettingAround: string;
  /** 4. 人文与习俗 —— 语言/方言、生活节奏、习俗与禁忌、节庆 */
  culture: string;
  /** 5. 看什么 · 体验什么 —— 标志性去处与体验 */
  seeAndDo: string;
  /** 6. 什么时候去 · 实用提示 —— 最佳季节、注意事项、与周边连接 */
  whenAndTips: string;
}

export const TRAVEL_SECTION_ORDER = [
  "identity",
  "layout",
  "gettingAround",
  "culture",
  "seeAndDo",
  "whenAndTips",
] as const;

export function travelSectionHeading(key: string, lang: Language): string {
  return t(`travel.${key}`, lang);
}

export function resolveTravelGuide(id: string, lang: Language): TravelGuide | null {
  const primary = lang === "zh-CN" ? TRAVEL_CONTENT_ZH : TRAVEL_CONTENT_EN;
  const fallback = lang === "zh-CN" ? TRAVEL_CONTENT_EN : TRAVEL_CONTENT_ZH;
  return primary[id] ?? fallback[id] ?? null;
}

export function travelGuideToSections(
  g: TravelGuide,
  lang: Language,
): { key: string; heading: string; text: string }[] {
  return TRAVEL_SECTION_ORDER.map((key) => ({
    key,
    heading: travelSectionHeading(key, lang),
    text: g[key] ?? "",
  })).filter((s) => s.text.trim().length > 0);
}
