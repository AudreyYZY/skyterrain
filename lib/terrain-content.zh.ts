/**
 * 地形讲解内容（权威·结构化）
 *
 * 来源基调：中国国家地理、中国科学院地理所/青藏所、自然资源部（原国测局）、
 * 中学与大学《中国地理》教材中公认的事实。非文学化旁白、非凭空生成。
 *
 * 每条 6 个通用板块（见 types/terrain.ts TerrainLesson / lib/lesson.ts 顺序）：
 *   seeing      概述
 *   formation   地貌特征
 *   observation 从空中怎么看
 *   distinguish 与相似地形的区分
 *   concept     地理知识（为什么算这类地形 / 常见误区）
 *   history     历史与人文
 *
 * 未收录的地形在 UI 上显示占位（PLACEHOLDER_LESSON）。
 *
 * ⚠️ 2026-09-14 起正文按国家拆到 lib/content/<country>/（见 lib/content/countries.ts），本文件只做合并导出。
 */

import type { TerrainLesson } from "@/types/terrain";
import { ALL_TERRAIN_ZH } from "@/lib/content/_generated/terrain-zh";

/** 全部国家合并后的同步导出 —— 给脚本与 TTS 清单用。界面请走按国家懒加载（lib/content/_generated/loaders.ts）。 */
export const TERRAIN_CONTENT_ZH: Record<string, TerrainLesson> = ALL_TERRAIN_ZH;
