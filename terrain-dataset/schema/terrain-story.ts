/**
 * TerrainStory — 地貌故事
 *
 * 纪录片式内容，不是教科书
 * 基于权威来源
 */

export interface TerrainStory {
  /** 关联的 Terrain ID */
  terrainId: string;
  /** 核心问题 (用户最想知道的) */
  question: string;
  /** 权威解答 */
  answer: string;
  /** 飞机上看到什么 */
  fromAirplane: string;
  /** 常见误区 */
  misconception?: string;
  /** 关键数据 */
  keyNumbers?: Array<{ label: string; value: string; source: string }>;
}
