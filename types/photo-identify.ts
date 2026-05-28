export interface PhotoIdentifyResult {
  possibleTerrain: string;
  features: string[];
  confidence: "高" | "中" | "低";
  narration: string;
  source?: "ai" | "catalog" | "fallback";
}
