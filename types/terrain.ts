export type TerrainCategory =
  | "mountain_range"
  | "lake"
  | "desert"
  | "valley"
  | "basin"
  | "river"
  | "city"
  | "scenic"
  | "oasis"
  | "silk_road";

export type TerrainType =
  | "mountain"
  | "lake"
  | "desert"
  | "valley"
  | "basin"
  | "river"
  | "city"
  | "scenic"
  | "oasis"
  | "silk_road";

/** 结构化地理知识（用于生成准确的讲解内容） */
export interface TerrainKnowledge {
  terrainFeatures: string[];
  formation: string[];
  airplaneViewFeatures: string[];
  historicalTopics: string[];
  cultureTopics: string[];
  climateFeatures: string[];
  interestingFacts: string[];
  visualKeywords: string[];
  recommendedViewingAltitude: string;
  representativeReason: string;
  sources: { title: string; url?: string }[];
  lastUpdated: string;
  confidence: "high" | "medium" | "low";
}

/** 右侧三格速览 */
export interface TerrainCards {
  location: string;
  peak: string;
  feature: string;
}

/**
 * 地理讲解（固定通用板块，避免文学化旁白）
 * 顺序即朗读顺序：概述 → 地貌特征 → 从空中怎么看 → 与相似地形的区分 → 地理知识 → 历史与人文
 * seeing / formation / history 为必填（兼容旧内容）；其余可选。
 */
export interface TerrainLesson {
  /** 概述 — 是什么、在哪、为什么重要、从空中的整体印象 */
  seeing: string;
  /** 地貌特征 — 形态、尺度、组成、成因 */
  formation: string;
  /** 从空中怎么看 — 关键观测点、标志物、颜色与纹理 */
  observation?: string;
  /** 与相似地形的区分 — 对比要点 */
  distinguish?: string;
  /** 地理知识 — 为什么算这类地形、常见误区、关键概念 */
  concept?: string;
  /** 历史与人文 */
  history: string;
}

export interface TerrainPoint {
  id: string;
  name: string;
  category: TerrainCategory;
  type: TerrainType;
  lat: number;
  lon: number;
  cameraHeight: number;
  elevation: number;
  description: string;
  /** 飞越时即时播报，对应「你现在看到什么」 */
  flyoverCue: string;
  cards: TerrainCards;
  lesson: TerrainLesson;
  facts: string[];
  knowledge: TerrainKnowledge;
  /** 所属地理区域（用于层级导航） */
  region?: string;
}
