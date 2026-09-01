import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";

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

/**
 * 两份内容文件合计约 1.25 万行，用动态 import 延后到真正打开一篇攻略时才加载
 * （见 lib/terrain-content.ts 同样的处理），加载后常驻内存缓存。
 */
let zhPromise: Promise<Record<string, TravelGuide>> | null = null;
let enPromise: Promise<Record<string, TravelGuide>> | null = null;

function loadZh(): Promise<Record<string, TravelGuide>> {
  if (!zhPromise) {
    zhPromise = import("@/lib/travel-content.zh").then((m) => m.TRAVEL_CONTENT_ZH);
  }
  return zhPromise;
}

function loadEn(): Promise<Record<string, TravelGuide>> {
  if (!enPromise) {
    enPromise = import("@/lib/travel-content.en").then((m) => m.TRAVEL_CONTENT_EN);
  }
  return enPromise;
}

export async function resolveTravelGuide(id: string, lang: Language): Promise<TravelGuide | null> {
  const [zh, en] = await Promise.all([loadZh(), loadEn()]);
  const primary = lang === "zh-CN" ? zh : en;
  const fallback = lang === "zh-CN" ? en : zh;
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
