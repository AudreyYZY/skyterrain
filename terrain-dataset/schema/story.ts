/**
 * Story — 纪录片内容层
 *
 * 必须绑定 FeatureOfInterest，不是 Terrain
 * 内容必须来自权威来源 (中国国家地理、中科院等)
 * 禁止 AI 自动生成，只能用 AI 提炼/整合
 */

export interface Story {
  id: string;
  observationPointId: string;  // → FeatureOfInterest.id
  question: string;
  answer: string;
  fromAirplane: string;
  misconception?: string;
  keyNumbers?: Array<{ label: string; value: string; source: string }>;
  sources: Array<{
    provider: string;
    url?: string;
    accessedAt: string;
  }>;
}
