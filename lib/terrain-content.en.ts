/**
 * Terrain lessons — English.
 *
 * Written to the same authoritative register as the Chinese set (standard
 * physical-geography facts from textbooks, the Chinese Academy of Sciences,
 * the Ministry of Natural Resources, China National Geographic). Not literary
 * voiceover, not machine translation of the Chinese.
 *
 * 6 sections, same order as types/terrain.ts TerrainLesson:
 *   seeing · formation · observation · distinguish · concept · history
 *
 * ⚠️ 2026-09-14 起正文按国家拆到 lib/content/<country>/（见 lib/content/countries.ts），本文件只做合并导出。
 */

import type { TerrainLesson } from "@/types/terrain";
import { ALL_TERRAIN_EN } from "@/lib/content/_generated/terrain-en";

/** 全部国家合并后的同步导出 —— 给脚本与 TTS 清单用。界面请走按国家懒加载（lib/content/_generated/loaders.ts）。 */
export const TERRAIN_CONTENT_EN: Record<string, TerrainLesson> = ALL_TERRAIN_EN;
