/**
 * 中国核心 GeographicFeature
 *
 * 全国尺度地貌数据
 * 使用 hoverGeometry 确保 Feature 不重叠
 * 与 xinjiang-core-features.ts 独立，不修改新疆数据
 */

import type { GeographicFeature } from "./types";

// ==================== 山脉 ====================

/** 秦岭 */
const QINLING: GeographicFeature = {
  id: "qinling",
  name: "秦岭",
  featureType: "mountain_system",

  identityGeometry: {
    type: "LineString",
    coordinates: [
      [104.0, 33.5], [106.0, 34.0], [108.0, 34.0], [110.0, 33.5],
      [111.0, 33.5], [112.0, 33.0], [113.0, 33.0],
    ],
  },

  hoverGeometry: {
    type: "RidgeCorridor",
    ridgeLine: [
      [104.0, 33.5], [106.0, 34.0], [108.0, 34.0], [110.0, 33.5],
      [111.0, 33.5], [112.0, 33.0], [113.0, 33.0],
    ],
    segments: [
      [[[104.0, 33.0], [106.0, 34.5], [108.0, 34.5], [110.0, 34.0], [108.0, 33.0], [106.0, 32.5], [104.0, 33.0]]],
      [[[110.0, 33.0], [112.0, 33.5], [113.0, 33.5], [112.0, 32.5], [110.0, 33.0]]],
    ],
  },

  focusGeometry: {
    type: "LineString",
    coordinates: [
      [104.0, 33.5], [106.0, 34.0], [108.0, 34.0], [110.0, 33.5],
      [111.0, 33.5], [112.0, 33.0], [113.0, 33.0],
    ],
  },

  cameraGeometry: { target: [108.0, 33.5], heading: 0, pitch: -30, range: 300000 },
  storyGeometry: [
    { id: "qinling-1", name: "太白山", position: [107.8, 34.0], text: "太白山是秦岭最高峰，海拔3771米。" },
    { id: "qinling-2", name: "华山", position: [110.1, 34.5], text: "华山以险峻著称，是中国五岳之一。" },
  ],

  label: { labelText: "秦岭", labelType: "ridge", rotation: -5, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "秦岭横贯中国中部，是中国南北地理分界线。山脊以北是黄河流域，以南是长江流域。",
    formation: "秦岭是扬子板块与华北板块碰撞形成的褶皱山系，新生代以来持续抬升。",
    history: "秦岭自古以来就是中国南北的天然屏障，蜀道难就指秦岭山区的交通困难。",
    observation: "秦岭呈东西走向，山脊线连续。从飞机上看，山北是黄土高原，山南是四川盆地。",
  },
};

/** 祁连山 */
const QILIAN: GeographicFeature = {
  id: "qilian",
  name: "祁连山",
  featureType: "mountain_system",

  identityGeometry: {
    type: "LineString",
    coordinates: [
      [96.0, 38.0], [98.0, 38.5], [100.0, 38.5], [102.0, 38.0],
      [103.0, 37.5], [104.0, 37.0],
    ],
  },

  hoverGeometry: {
    type: "RidgeCorridor",
    ridgeLine: [
      [96.0, 38.0], [98.0, 38.5], [100.0, 38.5], [102.0, 38.0],
      [103.0, 37.5], [104.0, 37.0],
    ],
    segments: [
      [[[96.0, 37.5], [98.0, 39.0], [100.0, 39.0], [102.0, 38.5], [104.0, 37.5], [102.0, 37.0], [100.0, 37.0], [98.0, 37.0], [96.0, 37.5]]],
    ],
  },

  focusGeometry: {
    type: "LineString",
    coordinates: [
      [96.0, 38.0], [98.0, 38.5], [100.0, 38.5], [102.0, 38.0],
      [103.0, 37.5], [104.0, 37.0],
    ],
  },

  cameraGeometry: { target: [100.0, 38.0], heading: 0, pitch: -28, range: 250000 },
  storyGeometry: [
    { id: "qilian-1", name: "祁连山主峰", position: [100.0, 38.5], text: "祁连山主峰海拔5827米。" },
  ],

  label: { labelText: "祁连山", labelType: "ridge", rotation: -3, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "祁连山位于甘肃与青海交界处，是河西走廊的天然屏障。山顶终年积雪，冰川广布。",
    formation: "祁连山是青藏高原东北缘的褶皱山系，受印度板块挤压持续抬升。",
    history: "祁连山是古代丝绸之路的重要地标，匈奴语称天为祁连。",
    observation: "祁连山呈西北-东南走向，山顶雪线明显。北侧是河西走廊，南侧是柴达木盆地。",
  },
};

/** 太行山 */
const TAIHANG: GeographicFeature = {
  id: "taihang",
  name: "太行山",
  featureType: "mountain_system",

  identityGeometry: {
    type: "LineString",
    coordinates: [
      [112.0, 34.0], [113.0, 36.0], [114.0, 38.0], [114.5, 39.0],
      [114.0, 40.0],
    ],
  },

  hoverGeometry: {
    type: "RidgeCorridor",
    ridgeLine: [
      [112.0, 34.0], [113.0, 36.0], [114.0, 38.0], [114.5, 39.0],
      [114.0, 40.0],
    ],
    segments: [
      [[[112.0, 34.0], [113.5, 36.0], [114.5, 38.0], [115.0, 39.5], [114.5, 40.5], [113.5, 39.5], [113.0, 38.0], [112.5, 36.0], [111.5, 34.0], [112.0, 34.0]]],
    ],
  },

  focusGeometry: {
    type: "LineString",
    coordinates: [
      [112.0, 34.0], [113.0, 36.0], [114.0, 38.0], [114.5, 39.0],
      [114.0, 40.0],
    ],
  },

  cameraGeometry: { target: [113.5, 37.0], heading: 0, pitch: -30, range: 300000 },
  storyGeometry: [
    { id: "taihang-1", name: "太行山北段", position: [114.0, 39.0], text: "太行山北段是华北平原与黄土高原的分界线。" },
  ],

  label: { labelText: "太行山", labelType: "ridge", rotation: -70, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "太行山纵贯华北，是华北平原与黄土高原的天然分界线。山体陡峭，峡谷深邃。",
    formation: "太行山是华北板块西缘的断块山，受断裂控制形成陡峭的东坡。",
    history: "太行山是古代军事要地，愚公移山的故事就发生在这里。",
    observation: "太行山呈南北走向，东坡陡峭，西坡平缓。从飞机上看，东侧是华北平原，西侧是黄土高原。",
  },
};

/** 大兴安岭 */
const DAXINGANLING: GeographicFeature = {
  id: "daxinganling",
  name: "大兴安岭",
  featureType: "mountain_system",

  identityGeometry: {
    type: "LineString",
    coordinates: [
      [120.0, 43.0], [121.0, 45.0], [122.0, 47.0], [123.0, 49.0],
      [124.0, 51.0], [125.0, 53.0],
    ],
  },

  hoverGeometry: {
    type: "RidgeCorridor",
    ridgeLine: [
      [120.0, 43.0], [121.0, 45.0], [122.0, 47.0], [123.0, 49.0],
      [124.0, 51.0], [125.0, 53.0],
    ],
    segments: [
      [[[119.5, 43.0], [120.5, 45.0], [121.5, 47.0], [122.5, 49.0], [123.5, 51.0], [125.5, 53.0], [125.0, 53.0], [124.0, 51.0], [123.0, 49.0], [122.0, 47.0], [121.0, 45.0], [120.0, 43.0], [119.5, 43.0]]],
    ],
  },

  focusGeometry: {
    type: "LineString",
    coordinates: [
      [120.0, 43.0], [121.0, 45.0], [122.0, 47.0], [123.0, 49.0],
      [124.0, 51.0], [125.0, 53.0],
    ],
  },

  cameraGeometry: { target: [122.0, 48.0], heading: 20, pitch: -28, range: 400000 },
  storyGeometry: [
    { id: "daxinganling-1", name: "大兴安岭北段", position: [124.0, 52.0], text: "大兴安岭北段是中国最北的原始森林。" },
  ],

  label: { labelText: "大兴安岭", labelType: "ridge", rotation: -75, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "大兴安岭是中国东北的天然屏障，森林覆盖率极高。从飞机上看，一片翠绿。",
    formation: "大兴安岭是古生代褶皱山系，受冰川作用形成平缓的山顶。",
    history: "大兴安岭是鄂伦春族的传统居住地，也是中国重要的林业基地。",
    observation: "大兴安岭呈东北-西南走向，山顶平缓，森林茂密。西侧是内蒙古高原，东侧是东北平原。",
  },
};

/** 横断山脉 */
const HENGDUAN: GeographicFeature = {
  id: "hengduan",
  name: "横断山脉",
  featureType: "mountain_system",

  identityGeometry: {
    type: "LineString",
    coordinates: [
      [98.0, 28.0], [99.0, 29.0], [100.0, 30.0], [101.0, 31.0],
      [102.0, 32.0],
    ],
  },

  hoverGeometry: {
    type: "RidgeCorridor",
    ridgeLine: [
      [98.0, 28.0], [99.0, 29.0], [100.0, 30.0], [101.0, 31.0],
      [102.0, 32.0],
    ],
    segments: [
      [[[97.0, 28.0], [98.5, 29.0], [99.5, 30.0], [100.5, 31.0], [101.5, 32.0], [102.5, 32.5], [102.0, 32.0], [101.0, 31.0], [100.0, 30.0], [99.0, 29.0], [98.0, 28.0], [97.0, 28.0]]],
    ],
  },

  focusGeometry: {
    type: "LineString",
    coordinates: [
      [98.0, 28.0], [99.0, 29.0], [100.0, 30.0], [101.0, 31.0],
      [102.0, 32.0],
    ],
  },

  cameraGeometry: { target: [100.0, 30.0], heading: -10, pitch: -25, range: 350000 },
  storyGeometry: [
    { id: "hengduan-1", name: "三江并流", position: [99.0, 29.0], text: "金沙江、澜沧江、怒江在此并行南流。" },
  ],

  label: { labelText: "横断山脉", labelType: "ridge", rotation: -60, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "横断山脉是中国西南的南北走向山脉群，金沙江、澜沧江、怒江在此并行南流。",
    formation: "横断山脉是印度板块挤压形成的褶皱山系，河流深切形成峡谷。",
    history: "横断山脉是古代茶马古道的重要通道，也是多民族聚居区。",
    observation: "横断山脉呈南北走向，河流与山脉平行排列。从飞机上看，峡谷深邃，山脊陡峭。",
  },
};

/** 喜马拉雅山 */
const HIMALAYA: GeographicFeature = {
  id: "himalaya",
  name: "喜马拉雅山",
  featureType: "mountain_system",

  identityGeometry: {
    type: "LineString",
    coordinates: [
      [78.0, 30.0], [80.0, 30.5], [82.0, 30.0], [84.0, 28.5],
      [86.0, 28.0], [88.0, 28.0], [90.0, 28.5], [92.0, 29.0],
      [94.0, 29.0], [96.0, 29.5],
    ],
  },

  hoverGeometry: {
    type: "RidgeCorridor",
    ridgeLine: [
      [78.0, 30.0], [80.0, 30.5], [82.0, 30.0], [84.0, 28.5],
      [86.0, 28.0], [88.0, 28.0], [90.0, 28.5], [92.0, 29.0],
      [94.0, 29.0], [96.0, 29.5],
    ],
    segments: [
      [[[78.0, 29.5], [80.0, 31.0], [82.0, 30.5], [84.0, 29.0], [86.0, 28.5], [88.0, 28.5], [90.0, 29.0], [92.0, 29.5], [94.0, 29.5], [96.0, 30.0], [96.0, 29.0], [94.0, 28.5], [92.0, 28.5], [90.0, 28.0], [88.0, 27.5], [86.0, 27.5], [84.0, 28.0], [82.0, 29.5], [80.0, 30.0], [78.0, 29.5]]],
    ],
  },

  focusGeometry: {
    type: "LineString",
    coordinates: [
      [78.0, 30.0], [80.0, 30.5], [82.0, 30.0], [84.0, 28.5],
      [86.0, 28.0], [88.0, 28.0], [90.0, 28.5], [92.0, 29.0],
      [94.0, 29.0], [96.0, 29.5],
    ],
  },

  cameraGeometry: { target: [86.0, 29.0], heading: 0, pitch: -25, range: 500000 },
  storyGeometry: [
    { id: "himalaya-1", name: "珠穆朗玛峰", position: [86.9, 28.0], text: "珠穆朗玛峰海拔8848米，是世界最高峰。" },
  ],

  label: { labelText: "喜马拉雅山", labelType: "ridge", rotation: 5, priority: 100, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.12, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.35, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.55, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.85, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "喜马拉雅山脉是世界最高的山脉，珠穆朗玛峰海拔8848米。从飞机上看，雪山连绵不断。",
    formation: "喜马拉雅山是印度板块与欧亚板块碰撞形成的，至今仍在抬升。",
    history: "喜马拉雅山是古代丝绸之路南线的重要地标，也是多种宗教的圣地。",
    observation: "喜马拉雅山呈东西走向，雪线极高。从飞机上看，山顶终年积雪，冰川广布。",
  },
};

// ==================== 高原 ====================

/** 青藏高原 */
const QINGHAI_TIBET: GeographicFeature = {
  id: "qinghai-tibet",
  name: "青藏高原",
  featureType: "plateau",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [78.0, 28.0], [80.0, 32.0], [85.0, 36.0], [90.0, 38.0],
      [95.0, 38.0], [100.0, 36.0], [104.0, 34.0], [104.0, 30.0],
      [100.0, 28.0], [95.0, 27.0], [90.0, 27.0], [85.0, 28.0],
      [80.0, 28.0], [78.0, 28.0],
    ]],
  },

  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [78.0, 28.0], [80.0, 32.0], [85.0, 36.0], [90.0, 38.0],
      [95.0, 38.0], [100.0, 36.0], [104.0, 34.0], [104.0, 30.0],
      [100.0, 28.0], [95.0, 27.0], [90.0, 27.0], [85.0, 28.0],
      [80.0, 28.0], [78.0, 28.0],
    ]],
  },

  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [78.0, 28.0], [80.0, 32.0], [85.0, 36.0], [90.0, 38.0],
      [95.0, 38.0], [100.0, 36.0], [104.0, 34.0], [104.0, 30.0],
      [100.0, 28.0], [95.0, 27.0], [90.0, 27.0], [85.0, 28.0],
      [80.0, 28.0], [78.0, 28.0],
    ]],
  },

  cameraGeometry: { target: [90.0, 33.0], heading: 0, pitch: -30, range: 1500000 },
  storyGeometry: [
    { id: "qinghai-tibet-1", name: "拉萨", position: [91.1, 29.6], text: "拉萨是青藏高原上最大的城市。" },
  ],

  label: { labelText: "青藏高原", labelType: "region", rotation: 0, priority: 100, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.08, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.25, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.45, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.75, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "青藏高原是世界上海拔最高的高原，平均海拔4000米以上。从飞机上看，雪山连绵，草原广袤。",
    formation: "青藏高原是印度板块与欧亚板块碰撞形成的，至今仍在抬升。",
    history: "青藏高原是藏族的传统居住地，也是多条大河的发源地。",
    observation: "青藏高原地势高亢，雪山连绵。从飞机上看，高原面相对平坦，边缘陡峭。",
  },
};

/** 黄土高原 */
const LOESS: GeographicFeature = {
  id: "loess",
  name: "黄土高原",
  featureType: "plateau",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [103.0, 34.0], [105.0, 37.0], [108.0, 39.0], [111.0, 40.0],
      [114.0, 40.0], [114.0, 37.0], [112.0, 35.0], [110.0, 34.0],
      [107.0, 33.0], [104.0, 33.0], [103.0, 34.0],
    ]],
  },

  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [103.0, 34.0], [105.0, 37.0], [108.0, 39.0], [111.0, 40.0],
      [114.0, 40.0], [114.0, 37.0], [112.0, 35.0], [110.0, 34.0],
      [107.0, 33.0], [104.0, 33.0], [103.0, 34.0],
    ]],
  },

  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [103.0, 34.0], [105.0, 37.0], [108.0, 39.0], [111.0, 40.0],
      [114.0, 40.0], [114.0, 37.0], [112.0, 35.0], [110.0, 34.0],
      [107.0, 33.0], [104.0, 33.0], [103.0, 34.0],
    ]],
  },

  cameraGeometry: { target: [109.0, 36.0], heading: 0, pitch: -32, range: 600000 },
  storyGeometry: [
    { id: "loess-1", name: "延安", position: [109.5, 36.6], text: "延安是黄土高原上的革命圣地。" },
  ],

  label: { labelText: "黄土高原", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.08, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.25, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.45, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.75, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "黄土高原是世界上最大的黄土堆积区，土层深厚，沟壑纵横。",
    formation: "黄土高原的黄土是数百万年来风力搬运堆积形成的。",
    history: "黄土高原是中华文明的发源地之一，半坡遗址就在这里。",
    observation: "黄土高原呈黄色调，沟壑纵横。从飞机上看，地形破碎，梯田层层叠叠。",
  },
};

/** 内蒙古高原 */
const INNER_MONGOLIA: GeographicFeature = {
  id: "inner-mongolia",
  name: "内蒙古高原",
  featureType: "plateau",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [100.0, 38.0], [105.0, 42.0], [110.0, 44.0], [115.0, 46.0],
      [120.0, 46.0], [120.0, 42.0], [115.0, 40.0], [110.0, 38.0],
      [105.0, 37.0], [100.0, 38.0],
    ]],
  },

  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [100.0, 38.0], [105.0, 42.0], [110.0, 44.0], [115.0, 46.0],
      [120.0, 46.0], [120.0, 42.0], [115.0, 40.0], [110.0, 38.0],
      [105.0, 37.0], [100.0, 38.0],
    ]],
  },

  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [100.0, 38.0], [105.0, 42.0], [110.0, 44.0], [115.0, 46.0],
      [120.0, 46.0], [120.0, 42.0], [115.0, 40.0], [110.0, 38.0],
      [105.0, 37.0], [100.0, 38.0],
    ]],
  },

  cameraGeometry: { target: [112.0, 42.0], heading: 0, pitch: -35, range: 1200000 },
  storyGeometry: [
    { id: "inner-mongolia-1", name: "呼伦贝尔", position: [119.8, 49.2], text: "呼伦贝尔草原是内蒙古最著名的草原。" },
  ],

  label: { labelText: "内蒙古高原", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.08, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.25, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.45, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.75, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "内蒙古高原是中国第二大高原，草原辽阔，牛羊成群。",
    formation: "内蒙古高原是古老的稳定地块，地表覆盖着厚厚的黄土和风积沙。",
    history: "内蒙古高原是蒙古族的传统居住地，也是中国重要的畜牧业基地。",
    observation: "内蒙古高原地势平坦，草原广袤。从飞机上看，绿色草地一望无际。",
  },
};

/** 云贵高原 */
const YUNNAN_GUIZHOU: GeographicFeature = {
  id: "yunnan-guizhou",
  name: "云贵高原",
  featureType: "plateau",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [100.0, 22.0], [102.0, 25.0], [105.0, 27.0], [108.0, 28.0],
      [110.0, 27.0], [110.0, 24.0], [108.0, 22.0], [105.0, 21.0],
      [102.0, 21.0], [100.0, 22.0],
    ]],
  },

  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [100.0, 22.0], [102.0, 25.0], [105.0, 27.0], [108.0, 28.0],
      [110.0, 27.0], [110.0, 24.0], [108.0, 22.0], [105.0, 21.0],
      [102.0, 21.0], [100.0, 22.0],
    ]],
  },

  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [100.0, 22.0], [102.0, 25.0], [105.0, 27.0], [108.0, 28.0],
      [110.0, 27.0], [110.0, 24.0], [108.0, 22.0], [105.0, 21.0],
      [102.0, 21.0], [100.0, 22.0],
    ]],
  },

  cameraGeometry: { target: [105.0, 25.0], heading: 0, pitch: -32, range: 800000 },
  storyGeometry: [
    { id: "yunnan-guizhou-1", name: "昆明", position: [102.7, 25.0], text: "昆明是云贵高原上的春城。" },
  ],

  label: { labelText: "云贵高原", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.08, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.25, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.45, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.75, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "云贵高原是中国第四大高原，喀斯特地貌发育典型，溶洞、石林遍布。",
    formation: "云贵高原是古老的石灰岩高原，受流水侵蚀形成喀斯特地貌。",
    history: "云贵高原是多民族聚居区，也是中国重要的有色金属产地。",
    observation: "云贵高原地形崎岖，喀斯特地貌明显。从飞机上看，峰林、溶洞、暗河遍布。",
  },
};

// ==================== 盆地 ====================

/** 四川盆地 */
const SICHUAN: GeographicFeature = {
  id: "sichuan",
  name: "四川盆地",
  featureType: "basin",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [102.0, 28.0], [104.0, 32.0], [108.0, 34.0], [110.0, 33.0],
      [110.0, 30.0], [108.0, 28.0], [106.0, 27.0], [104.0, 27.0],
      [102.0, 28.0],
    ]],
  },

  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [102.0, 28.0], [104.0, 32.0], [108.0, 34.0], [110.0, 33.0],
      [110.0, 30.0], [108.0, 28.0], [106.0, 27.0], [104.0, 27.0],
      [102.0, 28.0],
    ]],
  },

  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [102.0, 28.0], [104.0, 32.0], [108.0, 34.0], [110.0, 33.0],
      [110.0, 30.0], [108.0, 28.0], [106.0, 27.0], [104.0, 27.0],
      [102.0, 28.0],
    ]],
  },

  cameraGeometry: { target: [106.0, 30.5], heading: 0, pitch: -35, range: 500000 },
  storyGeometry: [
    { id: "sichuan-1", name: "成都", position: [104.1, 30.6], text: "成都是四川盆地的中心，天府之国。" },
  ],

  label: { labelText: "四川盆地", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "四川盆地是中国四大盆地之一，被群山环绕，气候湿润，物产丰富。",
    formation: "四川盆地是古老的沉积盆地，周围山脉的碎屑物质堆积形成厚厚的沉积层。",
    history: "四川盆地是巴蜀文化的发源地，都江堰水利工程已有2000多年历史。",
    observation: "四川盆地被群山环绕，内部平坦。从飞机上看，四周是山脉，中间是绿色平原。",
  },
};

/** 柴达木盆地 */
const QAIDAM: GeographicFeature = {
  id: "qaidam",
  name: "柴达木盆地",
  featureType: "basin",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [90.0, 36.0], [93.0, 38.0], [96.0, 39.0], [98.0, 38.0],
      [98.0, 36.0], [96.0, 35.0], [93.0, 35.0], [90.0, 36.0],
    ]],
  },

  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [90.0, 36.0], [93.0, 38.0], [96.0, 39.0], [98.0, 38.0],
      [98.0, 36.0], [96.0, 35.0], [93.0, 35.0], [90.0, 36.0],
    ]],
  },

  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [90.0, 36.0], [93.0, 38.0], [96.0, 39.0], [98.0, 38.0],
      [98.0, 36.0], [96.0, 35.0], [93.0, 35.0], [90.0, 36.0],
    ]],
  },

  cameraGeometry: { target: [94.0, 37.0], heading: 0, pitch: -35, range: 400000 },
  storyGeometry: [
    { id: "qaidam-1", name: "格尔木", position: [94.9, 36.4], text: "格尔木是柴达木盆地的重要城市。" },
  ],

  label: { labelText: "柴达木盆地", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "柴达木盆地是中国三大内陆盆地之一，地势高亢，盐湖广布。",
    formation: "柴达木盆地是青藏高原上的构造盆地，沉积了厚厚的盐类矿产。",
    history: "柴达木盆地是蒙古语盐泽之意，盐湖资源丰富。",
    observation: "柴达木盆地地势高亢，盐湖广布。从飞机上看，白色盐田和绿色草地交错。",
  },
};

/** 吐鲁番盆地 */
const TURPAN_BASIN: GeographicFeature = {
  id: "turpan-basin",
  name: "吐鲁番盆地",
  featureType: "basin",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [88.0, 42.0], [89.0, 43.0], [90.5, 43.0], [91.0, 42.5],
      [91.0, 42.0], [90.0, 41.5], [89.0, 41.5], [88.0, 42.0],
    ]],
  },

  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [88.0, 42.0], [89.0, 43.0], [90.5, 43.0], [91.0, 42.5],
      [91.0, 42.0], [90.0, 41.5], [89.0, 41.5], [88.0, 42.0],
    ]],
  },

  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [88.0, 42.0], [89.0, 43.0], [90.5, 43.0], [91.0, 42.5],
      [91.0, 42.0], [90.0, 41.5], [89.0, 41.5], [88.0, 42.0],
    ]],
  },

  cameraGeometry: { target: [89.5, 42.5], heading: 0, pitch: -35, range: 100000 },
  storyGeometry: [
    { id: "turpan-basin-1", name: "火焰山", position: [89.5, 42.5], text: "火焰山是吐鲁番盆地的标志性地貌。" },
  ],

  label: { labelText: "吐鲁番盆地", labelType: "region", rotation: 0, priority: 85, minZoom: 2, maxZoom: 20 },
  visibility: { hierarchyLevel: 2 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "吐鲁番盆地是中国最低的盆地，火焰山就在这里。夏季地表温度可达70°C。",
    formation: "吐鲁番盆地是天山中的断陷盆地，气候极端干旱。",
    history: "吐鲁番是古代丝绸之路上的重要城市，高昌古城就在这里。",
    observation: "吐鲁番盆地四周被天山环绕，中间是低洼的绿洲。火焰山呈红色，非常醒目。",
  },
};

// ==================== 平原 ====================

/** 东北平原 */
const NORTHEAST: GeographicFeature = {
  id: "northeast",
  name: "东北平原",
  featureType: "basin",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [118.0, 40.0], [120.0, 43.0], [125.0, 46.0], [130.0, 48.0],
      [135.0, 48.0], [135.0, 43.0], [130.0, 40.0], [125.0, 40.0],
      [120.0, 40.0], [118.0, 40.0],
    ]],
  },

  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [118.0, 40.0], [120.0, 43.0], [125.0, 46.0], [130.0, 48.0],
      [135.0, 48.0], [135.0, 43.0], [130.0, 40.0], [125.0, 40.0],
      [120.0, 40.0], [118.0, 40.0],
    ]],
  },

  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [118.0, 40.0], [120.0, 43.0], [125.0, 46.0], [130.0, 48.0],
      [135.0, 48.0], [135.0, 43.0], [130.0, 40.0], [125.0, 40.0],
      [120.0, 40.0], [118.0, 40.0],
    ]],
  },

  cameraGeometry: { target: [125.0, 45.0], heading: 0, pitch: -35, range: 1000000 },
  storyGeometry: [
    { id: "northeast-1", name: "哈尔滨", position: [126.6, 45.7], text: "哈尔滨是东北平原的最大城市。" },
  ],

  label: { labelText: "东北平原", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "东北平原是中国最大的平原，黑土地肥沃，是中国重要的粮食产区。",
    formation: "东北平原是松花江、辽河等河流冲积形成的。",
    history: "东北平原是满族的传统居住地，也是中国重要的工业基地。",
    observation: "东北平原地势平坦，黑土地广袤。从飞机上看，农田整齐，河流蜿蜒。",
  },
};

/** 华北平原 */
const NORTH_CHINA: GeographicFeature = {
  id: "north-china",
  name: "华北平原",
  featureType: "basin",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [112.0, 32.0], [114.0, 35.0], [117.0, 38.0], [120.0, 40.0],
      [122.0, 40.0], [122.0, 35.0], [120.0, 33.0], [117.0, 32.0],
      [114.0, 32.0], [112.0, 32.0],
    ]],
  },

  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [112.0, 32.0], [114.0, 35.0], [117.0, 38.0], [120.0, 40.0],
      [122.0, 40.0], [122.0, 35.0], [120.0, 33.0], [117.0, 32.0],
      [114.0, 32.0], [112.0, 32.0],
    ]],
  },

  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [112.0, 32.0], [114.0, 35.0], [117.0, 38.0], [120.0, 40.0],
      [122.0, 40.0], [122.0, 35.0], [120.0, 33.0], [117.0, 32.0],
      [114.0, 32.0], [112.0, 32.0],
    ]],
  },

  cameraGeometry: { target: [117.0, 36.0], heading: 0, pitch: -35, range: 800000 },
  storyGeometry: [
    { id: "north-china-1", name: "北京", position: [116.4, 39.9], text: "北京是华北平原的中心，中国的首都。" },
  ],

  label: { labelText: "华北平原", labelType: "region", rotation: 0, priority: 95, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "华北平原是中国第二大平原，黄河、海河冲积形成，是中国重要的农业区。",
    formation: "华北平原是黄河、海河等河流冲积形成的。",
    history: "华北平原是中华文明的核心区域，北京、天津等大城市都在这里。",
    observation: "华北平原地势平坦，农田广袤。从飞机上看，黄河蜿蜒流过平原。",
  },
};

/** 长江中下游平原 */
const YANGTZE: GeographicFeature = {
  id: "yangtze",
  name: "长江中下游平原",
  featureType: "basin",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [108.0, 28.0], [110.0, 30.0], [113.0, 31.0], [116.0, 31.0],
      [120.0, 32.0], [122.0, 31.0], [122.0, 28.0], [118.0, 27.0],
      [114.0, 27.0], [110.0, 27.0], [108.0, 28.0],
    ]],
  },

  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [108.0, 28.0], [110.0, 30.0], [113.0, 31.0], [116.0, 31.0],
      [120.0, 32.0], [122.0, 31.0], [122.0, 28.0], [118.0, 27.0],
      [114.0, 27.0], [110.0, 27.0], [108.0, 28.0],
    ]],
  },

  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [108.0, 28.0], [110.0, 30.0], [113.0, 31.0], [116.0, 31.0],
      [120.0, 32.0], [122.0, 31.0], [122.0, 28.0], [118.0, 27.0],
      [114.0, 27.0], [110.0, 27.0], [108.0, 28.0],
    ]],
  },

  cameraGeometry: { target: [115.0, 29.5], heading: 0, pitch: -35, range: 800000 },
  storyGeometry: [
    { id: "yangtze-1", name: "上海", position: [121.5, 31.2], text: "上海是长江入海口，中国最大的城市。" },
  ],

  label: { labelText: "长江中下游平原", labelType: "region", rotation: 0, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: true, selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 3, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },
  story: {
    seeing: "长江中下游平原是中国最重要的农业区，水网密布，湖泊众多。",
    formation: "长江中下游平原是长江及其支流冲积形成的。",
    history: "长江中下游平原是中国经济最发达的地区之一，上海、南京等大城市都在这里。",
    observation: "长江中下游平原水网密布，湖泊众多。从飞机上看，长江蜿蜒流过平原，湖泊星罗棋布。",
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
