/**
 * 航线解说 —— 每条航线一段连贯口播稿，专为这条飞行路线写：
 * 依次飞越哪些地貌、彼此的地理关系、关键知识点。
 *
 * 面向不了解这些地形的乘客，帮助在一次 ~3 分钟的飞行里建立整片区域的框架。
 * 依据中学 / 大学《中国地理》教材中公认的区域地理事实与航拍观察，
 * 不写会产生争议的判断，尽量少用需要逐一核实的精确数字。
 *
 * 双语，随界面语言切换。
 *
 * ⚠️ 2026-09-14 起正文按国家拆到 lib/content/<country>/（见 lib/content/countries.ts），本文件只做合并导出。
 */

import type { Language } from "@/lib/i18n";
import { ALL_ROUTE_NARRATION } from "@/lib/content/_generated/routes";

export type RouteNarrationEntry = { study: Record<Language, string>; travel: Record<Language, string> };

export const ROUTE_NARRATION: Record<string, RouteNarrationEntry> = ALL_ROUTE_NARRATION;

/** 取某航线某语言的解说稿 */
export function getRouteNarration(
  routeId: string,
  lang: Language,
  mode: "study" | "travel",
): string | null {
  const text = ROUTE_NARRATION[routeId]?.[mode]?.[lang];
  return text && text.trim() ? text : null;
}
