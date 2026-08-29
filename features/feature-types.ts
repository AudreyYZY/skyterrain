/**
 * Feature 类型定义与标签
 */

import type { FeatureType, LabelType } from "./types";

/** Feature 类型标签 (中文) */
export const FEATURE_TYPE_LABEL: Record<FeatureType, string> = {
  mountain_system: "山系",
  basin: "盆地",
  plain: "平原",
  desert: "沙漠",
  plateau: "高原",
  lake: "湖泊",
  peak: "山峰",
  valley: "河谷",
  poi: "兴趣点",
};

/** Feature 类型 → 默认标签类型 */
export const FEATURE_TYPE_DEFAULT_LABEL: Record<FeatureType, LabelType> = {
  mountain_system: "ridge",
  basin: "region",
  plain: "region",
  desert: "region",
  plateau: "region",
  lake: "lake",
  peak: "peak",
  valley: "ridge",
  poi: "poi",
};

/** Feature 类型 → 默认几何类型 */
export const FEATURE_TYPE_GEOMETRY: Record<
  FeatureType,
  { identity: "LineString" | "Polygon" | "Point"; interaction: "Polygon" }
> = {
  mountain_system: { identity: "LineString", interaction: "Polygon" },
  basin: { identity: "Polygon", interaction: "Polygon" },
  plain: { identity: "Polygon", interaction: "Polygon" },
  desert: { identity: "Polygon", interaction: "Polygon" },
  plateau: { identity: "Polygon", interaction: "Polygon" },
  lake: { identity: "Polygon", interaction: "Polygon" },
  peak: { identity: "Point", interaction: "Polygon" },
  valley: { identity: "LineString", interaction: "Polygon" },
  poi: { identity: "Point", interaction: "Polygon" },
};

/** 层级标签 */
export const HIERARCHY_LABEL: Record<number, string> = {
  1: "大陆尺度",
  2: "国家尺度",
  3: "区域尺度",
  4: "探索尺度",
};
