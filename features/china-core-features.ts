/**
 * 中国核心 GeographicFeature
 *
 * 全国尺度地貌数据
 * 默认 maturityLevel: 0 (Label Only)
 * 不包含 geometry 数据，只显示名称
 * 与 xinjiang-core-features.ts 独立
 */

import type { GeographicFeature } from "./types";

// ==================== 山脉 ====================

/** 秦岭 */
const QINLING: GeographicFeature = {
  id: "qinling",
  name: "秦岭",
  featureType: "mountain_system",
  maturityLevel: 0,
  cameraGeometry: { target: [108.0, 33.5], heading: 0, pitch: -30, range: 300000 },
  label: { labelText: "秦岭", labelType: "ridge", rotation: -5, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 祁连山 */
const QILIAN: GeographicFeature = {
  id: "qilian",
  name: "祁连山",
  featureType: "mountain_system",
  maturityLevel: 0,
  cameraGeometry: { target: [100.0, 38.0], heading: 0, pitch: -28, range: 250000 },
  label: { labelText: "祁连山", labelType: "ridge", rotation: -3, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 太行山 */
const TAIHANG: GeographicFeature = {
  id: "taihang",
  name: "太行山",
  featureType: "mountain_system",
  maturityLevel: 0,
  cameraGeometry: { target: [113.5, 37.0], heading: 0, pitch: -30, range: 300000 },
  label: { labelText: "太行山", labelType: "ridge", rotation: -70, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 大兴安岭 */
const DAXINGANLING: GeographicFeature = {
  id: "daxinganling",
  name: "大兴安岭",
  featureType: "mountain_system",
  maturityLevel: 0,
  cameraGeometry: { target: [122.0, 48.0], heading: 20, pitch: -28, range: 400000 },
  label: { labelText: "大兴安岭", labelType: "ridge", rotation: -75, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 横断山脉 */
const HENGDUAN: GeographicFeature = {
  id: "hengduan",
  name: "横断山脉",
  featureType: "mountain_system",
  maturityLevel: 0,
  cameraGeometry: { target: [100.0, 30.0], heading: -10, pitch: -25, range: 350000 },
  label: { labelText: "横断山脉", labelType: "ridge", rotation: -60, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 喜马拉雅山 */
const HIMALAYA: GeographicFeature = {
  id: "himalaya",
  name: "喜马拉雅山",
  featureType: "mountain_system",
  maturityLevel: 0,
  cameraGeometry: { target: [86.0, 29.0], heading: 0, pitch: -25, range: 500000 },
  label: { labelText: "喜马拉雅山", labelType: "ridge", rotation: 5, priority: 100, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

// ==================== 高原 ====================

/** 青藏高原 */
const QINGHAI_TIBET: GeographicFeature = {
  id: "qinghai-tibet",
  name: "青藏高原",
  featureType: "plateau",
  maturityLevel: 0,
  cameraGeometry: { target: [90.0, 33.0], heading: 0, pitch: -30, range: 1500000 },
  label: { labelText: "青藏高原", labelType: "region", rotation: 0, priority: 100, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 黄土高原 */
const LOESS: GeographicFeature = {
  id: "loess",
  name: "黄土高原",
  featureType: "plateau",
  maturityLevel: 0,
  cameraGeometry: { target: [109.0, 36.0], heading: 0, pitch: -32, range: 600000 },
  label: { labelText: "黄土高原", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 内蒙古高原 */
const INNER_MONGOLIA: GeographicFeature = {
  id: "inner-mongolia",
  name: "内蒙古高原",
  featureType: "plateau",
  maturityLevel: 0,
  cameraGeometry: { target: [112.0, 42.0], heading: 0, pitch: -35, range: 1200000 },
  label: { labelText: "内蒙古高原", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 云贵高原 */
const YUNNAN_GUIZHOU: GeographicFeature = {
  id: "yunnan-guizhou",
  name: "云贵高原",
  featureType: "plateau",
  maturityLevel: 0,
  cameraGeometry: { target: [105.0, 25.0], heading: 0, pitch: -32, range: 800000 },
  label: { labelText: "云贵高原", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

// ==================== 盆地 ====================

/** 四川盆地 */
const SICHUAN: GeographicFeature = {
  id: "sichuan",
  name: "四川盆地",
  featureType: "basin",
  maturityLevel: 0,
  cameraGeometry: { target: [106.0, 30.5], heading: 0, pitch: -35, range: 500000 },
  label: { labelText: "四川盆地", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 柴达木盆地 */
const QAIDAM: GeographicFeature = {
  id: "qaidam",
  name: "柴达木盆地",
  featureType: "basin",
  maturityLevel: 0,
  cameraGeometry: { target: [94.0, 37.0], heading: 0, pitch: -35, range: 400000 },
  label: { labelText: "柴达木盆地", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 吐鲁番盆地 */
const TURPAN_BASIN: GeographicFeature = {
  id: "turpan-basin",
  name: "吐鲁番盆地",
  featureType: "basin",
  maturityLevel: 0,
  cameraGeometry: { target: [89.5, 42.5], heading: 0, pitch: -35, range: 100000 },
  label: { labelText: "吐鲁番盆地", labelType: "region", rotation: 0, priority: 85, minZoom: 2, maxZoom: 20 },
  visibility: { hierarchyLevel: 2 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

// ==================== 平原 ====================

/** 东北平原 */
const NORTHEAST: GeographicFeature = {
  id: "northeast",
  name: "东北平原",
  featureType: "basin",
  maturityLevel: 0,
  cameraGeometry: { target: [125.0, 45.0], heading: 0, pitch: -35, range: 1000000 },
  label: { labelText: "东北平原", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 华北平原 */
const NORTH_CHINA: GeographicFeature = {
  id: "north-china",
  name: "华北平原",
  featureType: "basin",
  maturityLevel: 0,
  cameraGeometry: { target: [117.0, 36.0], heading: 0, pitch: -35, range: 800000 },
  label: { labelText: "华北平原", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 长江中下游平原 */
const YANGTZE: GeographicFeature = {
  id: "yangtze",
  name: "长江中下游平原",
  featureType: "basin",
  maturityLevel: 0,
  cameraGeometry: { target: [115.0, 29.5], heading: 0, pitch: -35, range: 800000 },
  label: { labelText: "长江中下游平原", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: false,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
};

/** 所有中国核心 Feature */
export const CHINA_CORE_FEATURES: GeographicFeature[] = [
  // 山脉
  QINLING,
  QILIAN,
  TAIHANG,
  DAXINGANLING,
  HENGDUAN,
  HIMALAYA,
  // 高原
  QINGHAI_TIBET,
  LOESS,
  INNER_MONGOLIA,
  YUNNAN_GUIZHOU,
  // 盆地
  SICHUAN,
  QAIDAM,
  TURPAN_BASIN,
  // 平原
  NORTHEAST,
  NORTH_CHINA,
  YANGTZE,
];
