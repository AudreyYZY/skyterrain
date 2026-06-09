/**
 * ProvenanceRecord — 来源追溯层
 *
 * 所有数据必须可追溯
 * 支持: Terrain, Geometry, FOI, Story, KnowledgeLink
 */

export type EntityType =
  | "terrain"
  | "geometry"
  | "foi"
  | "story"
  | "knowledge_link";

export interface ProvenanceRecord {
  entityType: EntityType;
  entityId: string;
  provider: string;
  version: string;
  url?: string;
  downloadedAt: string;
  confidence: number;
  notes?: string;
}
