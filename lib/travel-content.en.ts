
/**
 * Travel mode: city / country-overview guides (English). 6-section template — see lib/travel-lesson.ts.
 * Sources (Australia): Tourism Australia / state tourism boards / Australian Bureau of Meteorology
 *   climate data / Dept. of Home Affairs entry rules / established guidebook consensus.
 * Sources (China): city culture-and-tourism bureaus / China Meteorological Administration climate
 *   normals / National Immigration Administration entry policy / 12306 rail ticketing rules /
 *   established guidebook consensus.
 * Facts stated plainly; judgments (best season, worth seeing) written as general guidance, not
 * absolutes. Visa / visa-free-day policy is described only as "relaxed in recent years, check the
 * latest official announcement" — no hard day counts.
 *
 * ⚠️ 2026-09-14 起正文按国家拆到 lib/content/<country>/（见 lib/content/countries.ts），本文件只做合并导出。
 */

import type { TravelGuide } from "@/lib/travel-lesson";
import { ALL_TRAVEL_EN } from "@/lib/content/_generated/travel-en";

/** 全部国家合并后的同步导出 —— 给脚本与 TTS 清单用。界面请走按国家懒加载（lib/content/_generated/loaders.ts）。 */
export const TRAVEL_CONTENT_EN: Record<string, TravelGuide> = ALL_TRAVEL_EN;
