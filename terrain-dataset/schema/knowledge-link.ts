/**
 * KnowledgeLink — 知识图谱层
 *
 * 用于未来 AI 问答
 * 例如:
 *   秦岭 → 分界 → 长江流域
 *   秦岭 → 阻挡 → 季风
 *   祁连山 → 提供水源 → 河西走廊
 */

export type RelationType =
  | "divides"        // 分界
  | "blocks"         // 阻挡
  | "provides"       // 提供
  | "feeds"          // 滋养
  | "borders"        // 毗邻
  | "contains"       // 包含
  | "originates"     // 发源于
  | "influences";    // 影响

export interface KnowledgeLink {
  id: string;
  sourceId: string;       // TerrainEntity.id 或 FeatureOfInterest.id
  sourceType: "terrain" | "foi";
  relation: RelationType;
  targetId: string;       // TerrainEntity.id 或 FeatureOfInterest.id
  targetType: "terrain" | "foi";
  description: string;
  sources: Array<{
    provider: string;
    url?: string;
    accessedAt: string;
  }>;
}
