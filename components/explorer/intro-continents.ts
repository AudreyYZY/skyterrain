/**
 * 首屏大陆卡片数据（2026-09-14 从 ExplorerApp 搬出，行为不变）。
 */
import type { ContinentCard } from "@/components/ContinentIntro";
import { continentAvailabilities } from "@/lib/continent-availability";

/** 学习模式：含建设中的大洲，供选择器完整呈现 */
export const STUDY_INTRO_CONTINENTS: ContinentCard[] = continentAvailabilities("study").map(({ region, count, available }) => ({
  id: region.id,
  name: region.name,
  nameEn: region.nameEn ?? region.name,
  count,
  available,
}));

/**
 * 旅游模式——available 独立判定，不能借用学习模式的 available（那个只反映"该洲有没有地形"）：
 * 旅游内容按城市数有没有 > 0 算，两边碰巧现在同步不代表以后一直同步。
 */
export const TRAVEL_INTRO_CONTINENTS: ContinentCard[] = continentAvailabilities("travel").map(({ region, count, available }) => ({
  id: region.id,
  name: region.name,
  nameEn: region.nameEn ?? region.name,
  count,
  available,
}));
