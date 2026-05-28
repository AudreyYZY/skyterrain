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

/** 对比地理关系 — 用于未来比较模式 */
export interface GeographyComparison {
  id: string;
  label: string;
  terrainIds: string[];
  description: string;
}

/** 地理世界观节点 — 层级结构 */
export interface GeographyWorldviewNode {
  id: string;
  label: string;
  categories: TerrainCategory[];
  /** 子分组（可选） */
  subgroups?: {
    id: string;
    label: string;
    filter: (terrain: TerrainPoint) => boolean;
  }[];
}

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

/** 三层地理讲解（固定结构，避免文学化旁白） */
export interface TerrainLesson {
  seeing: string;
  formation: string;
  history: string;
  funFact: string;
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
}
