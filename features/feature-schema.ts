/**
 * GeographicFeature 校验
 *
 * 确保 Feature 数据完整性
 */

import type { GeographicFeature, Geometry, FeatureType } from "./types";
import { FEATURE_TYPE_GEOMETRY } from "./feature-types";

/** 校验结果 */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/** 校验几何类型是否匹配 Feature 类型 */
function validateGeometryType(
  featureType: FeatureType,
  geometry: Geometry,
  role: "identity" | "interaction"
): string | null {
  const expected = FEATURE_TYPE_GEOMETRY[featureType];

  if (role === "identity") {
    const expectedType = expected.identity;
    if (expectedType === "LineString" && !geometry.type.startsWith("Line")) {
      return `identityGeometry 应为 LineString, 实际为 ${geometry.type}`;
    }
    if (expectedType === "Polygon" && !geometry.type.startsWith("Polygon") && geometry.type !== "MultiPolygon") {
      return `identityGeometry 应为 Polygon, 实际为 ${geometry.type}`;
    }
    if (expectedType === "Point" && geometry.type !== "Point") {
      return `identityGeometry 应为 Point, 实际为 ${geometry.type}`;
    }
  }

  if (role === "interaction") {
    if (geometry.type !== "Polygon" && geometry.type !== "MultiPolygon") {
      return `interactionGeometry 应为 Polygon 或 MultiPolygon, 实际为 ${geometry.type}`;
    }
  }

  return null;
}

/** 校验坐标数组 */
function validateCoordinates(geometry: Geometry): string[] {
  const errors: string[] = [];

  if (geometry.type === "Point") {
    const [lon, lat] = geometry.coordinates;
    if (typeof lon !== "number" || typeof lat !== "number") {
      errors.push("Point 坐标必须为 [lon, lat]");
    }
    if (lon < -180 || lon > 180) {
      errors.push(`Point 经度 ${lon} 超出范围 [-180, 180]`);
    }
    if (lat < -90 || lat > 90) {
      errors.push(`Point 纬度 ${lat} 超出范围 [-90, 90]`);
    }
  }

  return errors;
}

/** 校验单个 Feature */
export function validateFeature(feature: GeographicFeature): ValidationResult {
  const errors: string[] = [];

  // 基础字段
  if (!feature.id) errors.push("缺少 id");
  if (!feature.name) errors.push("缺少 name");
  if (!feature.featureType) errors.push("缺少 featureType");

  // 几何校验
  if (!feature.identityGeometry) {
    errors.push("缺少 identityGeometry");
  } else {
    const geoError = validateGeometryType(feature.featureType, feature.identityGeometry, "identity");
    if (geoError) errors.push(geoError);
    errors.push(...validateCoordinates(feature.identityGeometry));
  }

  if (!feature.interactionGeometry) {
    errors.push("缺少 interactionGeometry");
  } else {
    const geoError = validateGeometryType(feature.featureType, feature.interactionGeometry as Geometry, "interaction");
    if (geoError) errors.push(geoError);
  }

  // 标签校验
  if (!feature.label) {
    errors.push("缺少 label");
  } else {
    if (!feature.label.labelText) errors.push("label.labelText 为空");
    if (feature.label.priority < 0 || feature.label.priority > 100) {
      errors.push(`label.priority ${feature.label.priority} 超出范围 [0, 100]`);
    }
  }

  // 可见性校验
  if (!feature.visibility) {
    errors.push("缺少 visibility");
  } else {
    if (![2, 3, 4].includes(feature.visibility.hierarchyLevel)) {
      errors.push(`visibility.hierarchyLevel ${feature.visibility.hierarchyLevel} 应为 2, 3, 4`);
    }
  }

  // 交互校验
  if (!feature.interaction) {
    errors.push("缺少 interaction");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
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

  // 检查 ID 唯一性
  const ids = features.map((f) => f.id);
  const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (duplicates.length > 0) {
    errors.push(`重复 ID: ${duplicates.join(", ")}`);
  }

  // 检查父子关系
  for (const feature of features) {
    if (feature.visibility.parentId) {
      const parent = features.find((f) => f.id === feature.visibility.parentId);
      if (!parent) {
        errors.push(`[${feature.id}] 父级 ${feature.visibility.parentId} 不存在`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
