
/**
 * 旅游模式：城市 / 国家概览 攻略（中文）。6 段固定模板见 lib/travel-lesson.ts。
 * 来源（澳大利亚）：Tourism Australia / 各州旅游局 / 澳大利亚气象局气候资料 /
 *   内政部签证入境信息 / 公认旅行指南共识。
 * 来源（中国）：各城市文旅局 / 中国气象局气候平均值 / 国家移民管理局入境政策 /
 *   12306 铁路购票规则 / 公认旅行指南共识。
 * 可查的照实；主观判断（如季节、是否值得去）写成一般性建议、不绝对化；
 * 政策类（签证、免签天数）只说近年有放宽、以官方最新公布为准，不写死具体天数。
 * 字符串内的引号一律用中文引号，不要用直双引号（会截断 JS 字符串字面量）。
 *
 * ⚠️ 2026-09-14 起正文按国家拆到 lib/content/<country>/（见 lib/content/countries.ts），本文件只做合并导出。
 */

import type { TravelGuide } from "@/lib/travel-lesson";
import { ALL_TRAVEL_ZH } from "@/lib/content/_generated/travel-zh";

/** 全部国家合并后的同步导出 —— 给脚本与 TTS 清单用。界面请走按国家懒加载（lib/content/_generated/loaders.ts）。 */
export const TRAVEL_CONTENT_ZH: Record<string, TravelGuide> = ALL_TRAVEL_ZH;
