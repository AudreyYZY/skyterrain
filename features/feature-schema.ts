/**
 * GeographicFeature 校验
 *
 * 确保 Feature 数据完整性
 */

import type { GeographicFeature, Geometry, FeatureType } from "./types";

/** 校验结果 */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/** 校验坐标数组 */
function validateCoordinates(geometry: Geometry): string[] {
  const errors: string[] = [];

  if (geometry.type === "Point") {
    const [lon, lat] = geometry.coordinates;
    if (typeof lon !== "number" || typeof lat !== "number") {
      errors.push("Point 坐标必须为 [lon, lat]");
    }
    if (lon < -180 || lon > 180) errors.push(`Point 经度 ${lon} 超出范围`);
    if (lat < -90 || lat > 90) errors.push(`Point 纬度 ${lat} 超出范围`);
  }

  return errors;
}

/** 校验单个 Feature */
export function validateFeature(feature: GeographicFeature): ValidationResult {
  const errors: string[] = [];

  if (!feature.id) errors.push("缺少 id");
  if (!feature.name) errors.push("缺少 name");
  if (!feature.featureType) errors.push("缺少 featureType");

  // Geometry 校验基于 maturityLevel
  if (feature.maturityLevel >= 1 && !feature.identityGeometry) {
    errors.push("Level 1+ 需要 identityGeometry");
  } else if (feature.identityGeometry) {
    errors.push(...validateCoordinates(feature.identityGeometry));
  }

  if (feature.maturityLevel >= 2 && !feature.hoverGeometry) {
    errors.push("Level 2+ 需要 hoverGeometry");
  }
  if (feature.maturityLevel >= 2 && !feature.cameraGeometry) {
    errors.push("Level 2+ 需要 cameraGeometry");
  }

  if (!feature.label) {
    errors.push("缺少 label");
  } else {
    if (!feature.label.labelText) errors.push("label.labelText 为空");
  }

  if (!feature.visibility) errors.push("缺少 visibility");
  if (!feature.interaction) errors.push("缺少 interaction");

  return { valid: errors.length === 0, errors };
}

/** 校验 Feature 数组 */
export function validateFeatures(features: GeographicFeature[]): ValidationResult {
  const errors: string[] = [];

  for (const feature of features) {
    const result = validateFeature(feature);
    if (!result.valid) {
      errors.push(`[${feature.id}] ${result.errors.join(", ")}`);
    }
  }

  const ids = features.map((f) => f.id);
  const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (duplicates.length > 0) errors.push(`重复 ID: ${duplicates.join(", ")}`);

  for (const feature of features) {
    if (feature.visibility.parentId) {
      const parent = features.find((f) => f.id === feature.visibility.parentId);
      if (!parent) errors.push(`[${feature.id}] 父级 ${feature.visibility.parentId} 不存在`);
    }
  }

  return { valid: errors.length === 0, errors };
}
