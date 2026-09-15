import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { getCityById } from "@/lib/places-registry";
import { TRAVEL_EN_LOADERS, TRAVEL_ZH_LOADERS } from "@/lib/content/_generated/loaders";

export interface TravelGuide {
  /** 1. 这是座什么城 —— 性格、地位、第一印象 */
  identity: string;
  /**
   * 1.5 这座城怎么运转 —— 治理结构（谁管什么）、单中心还是多中心、本地人的地址语言、
   * 生活半径由什么决定、外来者最常见的结构性误解。固定问题、逐城作答，见
   * docs/city-depth-redesign-2026-09-06.md。可选：先在 Tier A 城市补齐，再逐步铺开。
   */
  howItWorks?: string;
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
  "howItWorks",
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
 * 攻略正文按国家存放在 lib/content/<country>/travel.{zh,en}.ts。打开一篇攻略时只下载该国那一份
 * （每国一个 chunk），加载后常驻内存缓存。id 形如 `<city>` 或 `<country>-overview`。
 */
const cache = new Map<string, Promise<Record<string, TravelGuide>>>();

function loadCountry(country: string, lang: Language): Promise<Record<string, TravelGuide>> {
  const key = `${country}:${lang}`;
  let p = cache.get(key);
  if (!p) {
    const loader = (lang === "zh-CN" ? TRAVEL_ZH_LOADERS : TRAVEL_EN_LOADERS)[country];
    p = loader ? loader() : Promise.resolve({});
    p.catch(() => cache.delete(key));
    cache.set(key, p);
  }
  return p;
}

function countryOfGuide(id: string): string | undefined {
  if (id.endsWith("-overview")) return id.slice(0, -"-overview".length);
  return getCityById(id)?.country;
}

export async function resolveTravelGuide(id: string, lang: Language): Promise<TravelGuide | null> {
  const country = countryOfGuide(id);
  if (!country) return null;
  const [zh, en] = await Promise.all([loadCountry(country, "zh-CN"), loadCountry(country, "en-US")]);
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
