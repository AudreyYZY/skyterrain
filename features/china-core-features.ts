/**
 * 中国核心 GeographicFeature
 *
 * 全国尺度地貌数据
 * maturityLevel: 0 (支持点击/飞行/讲解，无 Hover Geometry)
 * 包含真实准确的 lesson 数据
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
  storyGeometry: [
    { id: "qinling-1", name: "太白山", position: [107.8, 34.0], text: "太白山是秦岭最高峰，海拔3771米。" },
    { id: "qinling-2", name: "华山", position: [110.1, 34.5], text: "华山以险峻著称，是中国五岳之一。" },
  ],
  label: { labelText: "秦岭", labelType: "ridge", rotation: -5, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "qilian-1", name: "祁连山主峰", position: [100.0, 38.5], text: "祁连山主峰海拔5827米。" },
  ],
  label: { labelText: "祁连山", labelType: "ridge", rotation: -3, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "taihang-1", name: "太行山北段", position: [114.0, 39.0], text: "太行山北段是华北平原与黄土高原的分界线。" },
  ],
  label: { labelText: "太行山", labelType: "ridge", rotation: -70, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "daxinganling-1", name: "大兴安岭北段", position: [124.0, 52.0], text: "大兴安岭北段是中国最北的原始森林。" },
  ],
  label: { labelText: "大兴安岭", labelType: "ridge", rotation: -75, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "hengduan-1", name: "三江并流", position: [99.0, 29.0], text: "金沙江、澜沧江、怒江在此并行南流。" },
  ],
  label: { labelText: "横断山脉", labelType: "ridge", rotation: -60, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "himalaya-1", name: "珠穆朗玛峰", position: [86.9, 28.0], text: "珠穆朗玛峰海拔8848米，是世界最高峰。" },
  ],
  label: { labelText: "喜马拉雅山", labelType: "ridge", rotation: 5, priority: 100, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "qinghai-tibet-1", name: "拉萨", position: [91.1, 29.6], text: "拉萨是青藏高原上最大的城市。" },
  ],
  label: { labelText: "青藏高原", labelType: "region", rotation: 0, priority: 100, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "loess-1", name: "延安", position: [109.5, 36.6], text: "延安是黄土高原上的革命圣地。" },
  ],
  label: { labelText: "黄土高原", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "inner-mongolia-1", name: "呼伦贝尔", position: [119.8, 49.2], text: "呼伦贝尔草原是内蒙古最著名的草原。" },
  ],
  label: { labelText: "内蒙古高原", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "yunnan-guizhou-1", name: "昆明", position: [102.7, 25.0], text: "昆明是云贵高原上的春城。" },
  ],
  label: { labelText: "云贵高原", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "sichuan-1", name: "成都", position: [104.1, 30.6], text: "成都是四川盆地的中心，天府之国。" },
  ],
  label: { labelText: "四川盆地", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "qaidam-1", name: "格尔木", position: [94.9, 36.4], text: "格尔木是柴达木盆地的重要城市。" },
  ],
  label: { labelText: "柴达木盆地", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "northeast-1", name: "哈尔滨", position: [126.6, 45.7], text: "哈尔滨是东北平原的最大城市。" },
  ],
  label: { labelText: "东北平原", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "north-china-1", name: "北京", position: [116.4, 39.9], text: "北京是华北平原的中心，中国的首都。" },
  ],
  label: { labelText: "华北平原", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  storyGeometry: [
    { id: "yangtze-1", name: "上海", position: [121.5, 31.2], text: "上海是长江入海口，中国最大的城市。" },
  ],
  label: { labelText: "长江中下游平原", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
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
  // 平原
  NORTHEAST,
  NORTH_CHINA,
  YANGTZE,
];
