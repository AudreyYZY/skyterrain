/**
 * ExplorerApp 的模块级常量与纯函数（2026-09-14 从 components/ExplorerApp.tsx 搬出，行为不变）。
 */
import type { Language } from "@/lib/i18n";
import type { TerrainLesson } from "@/types/terrain";
import { TERRAIN_REGISTRY } from "@/lib/terrain-registry";
import { terrainTier } from "@/lib/terrain-tier";
import { getTerrainById } from "@/lib/terrain";
import { CHINA_CORE_FEATURES } from "@/features/china-core-features";

/** Sidebar 统一分类类型 */
export type SidebarCategory =
  | "mountain" | "plateau" | "basin" | "plain" | "hill"
  | "lake" | "desert" | "river" | "gorge" | "island"
  | "grassland" | "coast" | "inselberg";


/**
 * 将原始 category/featureType 统一映射为 Sidebar 分类
 * 不修改原始数据，只用于 Sidebar 分组
 */
export function normalizeType(raw: string, name?: string): SidebarCategory | null {
  // 名称包含"平原" → 强制映射为 plain
  if (name && name.includes("平原")) return "plain";

  switch (raw) {
    case "mountain_range":
    case "mountain_system":
    case "peak":
      return "mountain";
    case "plateau":
      return "plateau";
    case "basin":
      return "basin";
    case "plain":
    case "delta":
      return "plain";
    case "hills":
      return "hill";
    case "lake":
      return "lake";
    case "desert":
      return "desert";
    case "river":
    case "valley":
      return "river";
    case "gorge":
      return "gorge";
    case "island":
      return "island";
    case "grassland":
      return "grassland";
    case "coast":
      return "coast";
    case "inselberg":
      return "inselberg";
    default:
      return null;
  }
}

/** 统一 Feature Registry — 以 terrain-registry 为单一真实源 */
export const ALL_FEATURES = TERRAIN_REGISTRY.map((e, idx) => ({
  id: e.id,
  name: e.nameZh,
  type: normalizeType(e.category, e.nameZh),
  category: e.category,
  // 区域过滤用：regionId 已是大洲
  region: e.regionId,
  country: e.country,
  registryIndex: idx,
  tier: terrainTier(e.id, e.category),
  terrain: getTerrainById(e.id) ?? null,                       // 早期地形 JSON（部分条目自带讲解内容）
  feature: CHINA_CORE_FEATURES.find((f) => f.id === e.id) ?? null,
})).filter((f) => f.type !== null);

export const routeEndLesson = (lang: Language): TerrainLesson => ({
  seeing:
    lang === "zh-CN"
      ? "航线飞行结束。欢迎继续探索左侧目录里的其他地貌，或选择另一条航线。"
      : "The flight is over. Explore other landforms from the index on the left, or pick another route.",
  formation: "",
  history: "",
});

export const SPEECH_RATE = 0.88;

/** 尚无权威讲解内容的地形，面板占位 */
export const placeholderLesson = (lang: Language): TerrainLesson => ({
  seeing:
    lang === "zh-CN"
      ? "这处地形的权威讲解正在整理中。你仍可从飞机视角观察它的范围、走向和与周边地貌的关系。"
      : "An authoritative entry for this landform is still being written. You can still study its extent, trend and relationship to nearby terrain from the air.",
  formation: "",
  history: "",
  observation: "",
});

export const ZERO_INTERACTION_STYLE = {
  outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255] as [number, number, number],
  brightnessAdjust: 0, labelOpacityMultiplier: 1,
};

/** registry 分类 → GeographicFeature.featureType（合成用）*/
export function registryCatToFeatureType(cat: string): import("@/features/types").FeatureType {
  switch (cat) {
    case "mountain_system": return "mountain_system";
    case "plateau": return "plateau";
    case "basin": return "basin";
    case "plain":
    case "delta":
    case "hills":
    case "grassland":
    case "coast":
    case "island": return "plain";
    case "inselberg": return "mountain_system";
    case "desert": return "desert";
    case "lake": return "lake";
    case "river":
    case "valley":
    case "gorge": return "valley";
    default: return "poi";
  }
}

/** 叙述后的停留时间（毫秒） — 让用户消化内容 */
export const POST_NARRATION_DWELL_MS = 2000;
