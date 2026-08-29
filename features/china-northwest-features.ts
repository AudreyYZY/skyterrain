/**
 * 中国西北 8 个核心 GeographicFeature（天山 / 昆仑 / 阿尔泰 / 塔里木 等）
 *
 * 每个 Feature 拥有 4 种 Geometry:
 *   identityGeometry    → 标签放置、走向、LOD
 *   hoverGeometry → Hover 区域
 *   focusGeometry → Focus 高亮内容
 *   cameraGeometry      → 飞行目标、最佳观赏角度
 *   storyGeometry       → 讲解节点、镜头运动路径
 *
 * 当前使用手工估算几何数据
 * Phase 1C 将替换为 Natural Earth / HydroLAKES 真实数据
 */

import type { GeographicFeature } from "./types";

/** 天山 — Ridge Line + Hover Corridor + Focus Ridge */
const TIANSHAN: GeographicFeature = {
  id: "tianshan",
  name: "天山",
  featureType: "mountain_system",
  elevation: 7443, // 托木尔峰，天山最高峰
  maturityLevel: 2,

  // 标识几何: 沿主脊线方向 (标签放置)
  identityGeometry: {
    type: "LineString",
    coordinates: [
      [74.0, 41.0], [76.0, 42.0], [78.0, 42.5], [80.0, 43.0],
      [82.0, 43.5], [84.0, 44.0], [86.0, 44.0], [88.0, 43.5],
      [90.0, 43.0], [92.0, 42.5], [94.0, 42.0], [95.0, 41.5],
    ],
  },

  // Hover 几何: 山脊走廊 (鼠标进入区域，不覆盖准噶尔盆地)
  hoverGeometry: {
    type: "RidgeCorridor",
    ridgeLine: [
      [74.0, 41.0], [76.0, 42.0], [78.0, 42.5], [80.0, 43.0],
      [82.0, 43.5], [84.0, 44.0], [86.0, 44.0], [88.0, 43.5],
      [90.0, 43.0], [92.0, 42.5], [94.0, 42.0], [95.0, 41.5],
    ],
    segments: [
      // 西天山 — 北界不超过 43°N
      [[[74.0, 40.5], [76.0, 41.5], [78.0, 42.5], [76.0, 43.0], [74.0, 42.0], [74.0, 40.5]]],
      // 中天山 — 北界不超过 44°N (不侵入准噶尔盆地)
      [[[78.0, 42.0], [82.0, 43.0], [86.0, 44.0], [84.0, 44.0], [80.0, 43.5], [78.0, 42.0]]],
      // 东天山 — 北界不超过 43.5°N
      [[[86.0, 43.0], [90.0, 43.5], [94.0, 42.5], [95.5, 41.5], [92.0, 41.0], [88.0, 42.0], [86.0, 43.0]]],
    ],
  },

  // Focus 几何: 山脊线 (高亮显示内容)
  focusGeometry: {
    type: "LineString",
    coordinates: [
      [74.0, 41.0], [76.0, 42.0], [78.0, 42.5], [80.0, 43.0],
      [82.0, 43.5], [84.0, 44.0], [86.0, 44.0], [88.0, 43.5],
      [90.0, 43.0], [92.0, 42.5], [94.0, 42.0], [95.0, 41.5],
    ],
  },

  // 镜头几何: 乌鲁木齐南部，俯瞰博格达峰
  cameraGeometry: {
    target: [84.39, 42.60],
    heading: 120,
    pitch: -28,
    range: 180000,
  },

  // 故事几何: 讲解节点路径
  storyGeometry: [
    { id: "tianshan-1", name: "天山西段", position: [78.0, 42.5], text: "天山西段是天山最宽的部分，山脊海拔多在5000米以上。" },
    { id: "tianshan-2", name: "博格达峰", position: [88.3, 43.8], text: "博格达峰海拔5445米，是天山东段最高峰。" },
    { id: "tianshan-3", name: "天池", position: [88.1, 43.9], text: "天池是天山著名的冰蚀湖，海拔1910米。" },
    { id: "tianshan-4", name: "伊犁河谷", position: [81.0, 43.5], text: "伊犁河谷是天山西段的重要绿洲，气候湿润。" },
  ],

  label: {
    labelText: "天山",
    labelType: "ridge",
    rotation: -8,
    priority: 100,
    minZoom: 2,
    maxZoom: 20,
  },

  visibility: { hierarchyLevel: 2 },

  interaction: {
    hoverable: true,
    selectable: true,
    idleStyle: { outlineAlpha: 0.08, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.25, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.40, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.70, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },

  story: {
    seeing: "天山横贯新疆中部，当前可见博格达雪峰与天池所在冰川谷。窗外白色区域为现代冰川与终年积雪；山麓黄绿色条带多为冲积扇和灌溉绿洲。",
    formation: "天山是古亚洲洋闭合后形成的褶皱山系，新生代抬升强烈。冰川刨蚀形成U形谷和冰蚀湖，融水在山前堆积成扇形地貌。",
    history: "天山是北疆与南疆的气候分水岭：北坡受西风影响较湿润，南坡相对干旱。乌鲁木齐、石河子等城市分布在北麓绿洲。",
    observation: "天山呈东西走向，山脊线连续平行，山前有明显的冲积扇绿洲带。与阿尔泰山相比，天山雪线更高，山前绿洲更宽。",
  },
};

/** 昆仑山 — Ridge Line + Ridge Corridor */
const KUNLUN: GeographicFeature = {
  id: "kunlun",
  name: "昆仑山",
  featureType: "mountain_system",
  elevation: 7167, // 公格尔山，昆仑山最高峰
  maturityLevel: 2,

  identityGeometry: {
    type: "LineString",
    coordinates: [
      [74.0, 36.5], [76.0, 37.0], [78.0, 37.0], [80.0, 36.5],
      [82.0, 36.0], [84.0, 36.0], [86.0, 36.0], [88.0, 35.5],
      [90.0, 36.0], [92.0, 36.0], [94.0, 36.5], [96.0, 36.0],
    ],
  },

  // Hover 几何: 山脊走廊
  hoverGeometry: {
    type: "RidgeCorridor",
    ridgeLine: [
      [74.0, 36.5], [76.0, 37.0], [78.0, 37.0], [80.0, 36.5],
      [82.0, 36.0], [84.0, 36.0], [86.0, 36.0], [88.0, 35.5],
      [90.0, 36.0], [92.0, 36.0], [94.0, 36.5], [96.0, 36.0],
    ],
    segments: [
      // 西昆仑
      [[[74.0, 35.5], [76.0, 37.5], [80.0, 37.5], [78.0, 36.0], [74.0, 35.5]]],
      // 中昆仑
      [[[80.0, 35.5], [84.0, 37.0], [88.0, 36.5], [86.0, 35.0], [80.0, 35.5]]],
      // 东昆仑
      [[[88.0, 35.0], [92.0, 37.0], [96.0, 37.0], [94.0, 35.5], [88.0, 35.0]]],
    ],
  },

  // Focus 几何: 山脊线
  focusGeometry: {
    type: "LineString",
    coordinates: [
      [74.0, 36.5], [76.0, 37.0], [78.0, 37.0], [80.0, 36.5],
      [82.0, 36.0], [84.0, 36.0], [86.0, 36.0], [88.0, 35.5],
      [90.0, 36.0], [92.0, 36.0], [94.0, 36.5], [96.0, 36.0],
    ],
  },

  cameraGeometry: {
    target: [89.10, 36.29],
    heading: 0,
    pitch: -25,
    range: 200000,
  },

  storyGeometry: [
    { id: "kunlun-1", name: "西昆仑", position: [76.0, 37.0], text: "西昆仑是昆仑山最宽的部分，慕士塔格峰位于此处。" },
    { id: "kunlun-2", name: "中昆仑", position: [84.0, 36.0], text: "中昆仑是塔里木盆地与青藏高原的分界线。" },
    { id: "kunlun-3", name: "东昆仑", position: [92.0, 36.0], text: "东昆仑逐渐降低，与阿尔金山相接。" },
  ],

  label: {
    labelText: "昆仑山",
    labelType: "ridge",
    rotation: -5,
    priority: 100,
    minZoom: 2,
    maxZoom: 20,
  },

  visibility: { hierarchyLevel: 2 },

  interaction: {
    hoverable: true,
    selectable: true,
    idleStyle: { outlineAlpha: 0.08, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.25, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.40, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.70, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },

  story: {
    seeing: "昆仑山横亘于新疆南部，是塔里木盆地与青藏高原的天然分界线。山脊终年积雪，冰川广布。",
    formation: "昆仑山是印度板块与欧亚板块碰撞的产物，新生代以来持续抬升。山体主要由变质岩和花岗岩组成。",
    history: "昆仑山在中国神话中具有重要地位，被视为万山之祖。古代丝绸之路南道沿昆仑山北麓延伸。",
    observation: "昆仑山与喀喇昆仑山的区别：昆仑山更宽广，雪线更高；喀喇昆仑山更陡峭，冰川更密集。",
  },
};

/** 阿尔泰山 — Ridge Line + Ridge Corridor */
const ALTAI: GeographicFeature = {
  id: "altai",
  name: "阿尔泰山",
  featureType: "mountain_system",
  elevation: 4374, // 友谊峰，阿尔泰山最高峰
  maturityLevel: 2,

  identityGeometry: {
    type: "LineString",
    coordinates: [
      [86.0, 47.5], [88.0, 48.0], [90.0, 48.5], [92.0, 48.0],
      [94.0, 47.5], [96.0, 47.0],
    ],
  },

  // Hover 几何: 山脊走廊
  hoverGeometry: {
    type: "RidgeCorridor",
    ridgeLine: [
      [86.0, 47.5], [88.0, 48.0], [90.0, 48.5], [92.0, 48.0],
      [94.0, 47.5], [96.0, 47.0],
    ],
    segments: [
      // 西阿尔泰
      [[[86.0, 47.0], [88.0, 48.5], [90.0, 49.0], [88.0, 47.0], [86.0, 47.0]]],
      // 东阿尔泰
      [[[90.0, 47.0], [92.0, 48.5], [95.0, 48.0], [94.0, 46.5], [90.0, 47.0]]],
    ],
  },

  // Focus 几何: 山脊线
  focusGeometry: {
    type: "LineString",
    coordinates: [
      [86.0, 47.5], [88.0, 48.0], [90.0, 48.5], [92.0, 48.0],
      [94.0, 47.5], [96.0, 47.0],
    ],
  },

  cameraGeometry: {
    target: [91.77, 47.24],
    heading: 30,
    pitch: -30,
    range: 150000,
  },

  storyGeometry: [
    { id: "altai-1", name: "喀纳斯", position: [87.0, 48.7], text: "喀纳斯湖是阿尔泰山最著名的冰蚀湖。" },
    { id: "altai-2", name: "友谊峰", position: [87.8, 49.2], text: "友谊峰海拔4374米，是阿尔泰山最高峰。" },
  ],

  label: {
    labelText: "阿尔泰山",
    labelType: "ridge",
    rotation: -35,
    priority: 100,
    minZoom: 2,
    maxZoom: 20,
  },

  visibility: { hierarchyLevel: 2 },

  interaction: {
    hoverable: true,
    selectable: true,
    idleStyle: { outlineAlpha: 0.08, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.25, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.40, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.70, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },

  story: {
    seeing: "阿尔泰山位于新疆最北部，是中国与蒙古、俄罗斯的界山。山间有翡翠色的冰蚀湖和茂密的针叶林。",
    formation: "阿尔泰山是古生代褶皱山系，受冰川作用强烈，形成大量U形谷和冰蚀湖。喀纳斯湖就是典型的冰川堰塞湖。",
    history: "阿尔泰山是古代游牧民族的重要牧场，至今仍有哈萨克族牧民在此放牧。山区矿产资源丰富，以金矿著名。",
    observation: "阿尔泰山呈西北—东南走向，森林覆盖更密，山谷中有翡翠色冰蚀湖。与天山相比，阿尔泰山植被垂直带更完整。",
  },
};

/** 准噶尔盆地 */
const JUNGGAR_BASIN: GeographicFeature = {
  id: "junggar-basin",
  name: "准噶尔盆地",
  featureType: "basin",
  elevation: 500, // 盆地底部平均海拔
  maturityLevel: 2,

  // 标识几何: 盆地范围 (标签放置)
  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [82.0, 44.0], [84.0, 45.5], [87.0, 46.5], [90.0, 47.0],
      [92.0, 46.5], [93.0, 45.5], [92.0, 44.0], [90.0, 43.0],
      [87.0, 42.5], [84.0, 43.0], [82.0, 44.0],
    ]],
  },

  // Hover 几何: 盆地完整范围 (鼠标进入区域)
  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      // 覆盖整个准噶尔盆地 (扩大范围)
      [80.0, 43.0], [82.0, 45.0], [84.0, 46.5], [87.0, 47.5],
      [90.0, 47.5], [92.0, 47.0], [93.5, 45.5], [93.0, 44.0],
      [91.0, 43.0], [88.0, 42.5], [85.0, 42.0], [82.0, 42.5],
      [80.0, 43.0],
    ]],
  },

  // Focus 几何: 盆地边界 (高亮显示内容)
  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [80.0, 43.0], [82.0, 45.0], [84.0, 46.5], [87.0, 47.5],
      [90.0, 47.5], [92.0, 47.0], [93.5, 45.5], [93.0, 44.0],
      [91.0, 43.0], [88.0, 42.5], [85.0, 42.0], [82.0, 42.5],
      [80.0, 43.0],
    ]],
  },

  cameraGeometry: {
    target: [85.63, 44.77],
    heading: 0,
    pitch: -35,
    range: 250000,
  },

  storyGeometry: [
    { id: "junggar-1", name: "古尔班通古特沙漠", position: [88.0, 45.0], text: "古尔班通古特沙漠是中国第二大沙漠，位于盆地中部。" },
    { id: "junggar-2", name: "克拉玛依", position: [84.9, 45.6], text: "克拉玛依油田是中国第一个大油田。" },
  ],

  label: {
    labelText: "准噶尔盆地",
    labelType: "region",
    rotation: 0,
    priority: 90,
    minZoom: 2,
    maxZoom: 20,
  },

  visibility: { hierarchyLevel: 2 },

  interaction: {
    hoverable: true,
    selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.70, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },

  story: {
    seeing: "准噶尔盆地位于天山与阿尔泰山之间，是中国第二大盆地。盆地中部是古尔班通古特沙漠，边缘有绿洲和牧场。",
    formation: "准噶尔盆地是古生代以来的沉降区，周围山脉的碎屑物质不断堆积形成厚厚的沉积层。盆地内有丰富的石油和天然气资源。",
    history: "准噶尔盆地是古代丝绸之路北道的重要通道。盆地内的克拉玛依油田是中国第一个大油田。",
    observation: "准噶尔盆地呈三角形，北部开阔，南部被天山封闭。与塔里木盆地相比，准噶尔盆地更湿润，沙漠面积更小。",
  },
};

/** 塔里木盆地 */
const TARIM_BASIN: GeographicFeature = {
  id: "tarim-basin",
  name: "塔里木盆地",
  featureType: "basin",
  elevation: 1100, // 盆地底部平均海拔
  maturityLevel: 2,

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [74.5, 39.0], [76.0, 40.5], [79.0, 41.5], [82.0, 42.0],
      [86.0, 42.0], [89.0, 41.5], [91.0, 40.5], [92.0, 39.5],
      [91.0, 38.0], [89.0, 37.0], [86.0, 36.5], [82.0, 36.5],
      [79.0, 37.0], [76.0, 37.5], [74.5, 39.0],
    ]],
  },

  // Hover 几何: 盆地范围
  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [74.5, 39.0], [76.0, 40.5], [79.0, 41.5], [82.0, 42.0],
      [86.0, 42.0], [89.0, 41.5], [91.0, 40.5], [92.0, 39.5],
      [91.0, 38.0], [89.0, 37.0], [86.0, 36.5], [82.0, 36.5],
      [79.0, 37.0], [76.0, 37.5], [74.5, 39.0],
    ]],
  },

  // Focus 几何: 盆地边界
  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [74.5, 39.0], [76.0, 40.5], [79.0, 41.5], [82.0, 42.0],
      [86.0, 42.0], [89.0, 41.5], [91.0, 40.5], [92.0, 39.5],
      [91.0, 38.0], [89.0, 37.0], [86.0, 36.5], [82.0, 36.5],
      [79.0, 37.0], [76.0, 37.5], [74.5, 39.0],
    ]],
  },

  cameraGeometry: {
    target: [83.20, 39.16],
    heading: 0,
    pitch: -35,
    range: 300000,
  },

  storyGeometry: [
    { id: "tarim-1", name: "塔克拉玛干", position: [83.0, 38.5], text: "塔克拉玛干沙漠占据盆地中心，面积33万平方公里。" },
    { id: "tarim-2", name: "塔里木河", position: [85.0, 41.0], text: "塔里木河是中国最长的内陆河，环绕沙漠。" },
    { id: "tarim-3", name: "库车", position: [83.0, 41.7], text: "库车是古龟兹国所在地，丝绸之路重镇。" },
  ],

  label: {
    labelText: "塔里木盆地",
    labelType: "region",
    rotation: 0,
    priority: 90,
    minZoom: 2,
    maxZoom: 20,
  },

  visibility: { hierarchyLevel: 2 },

  interaction: {
    hoverable: true,
    selectable: true,
    idleStyle: { outlineAlpha: 0.10, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.30, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.50, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.70, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },

  story: {
    seeing: "塔里木盆地位于天山与昆仑山之间，是中国最大的内陆盆地。盆地中心是塔克拉玛干沙漠，周围环绕着绿洲和戈壁。",
    formation: "塔里木盆地是古生代以来的稳定沉降区，周围山脉的碎屑物质不断堆积形成厚厚的沉积层。盆地内蕴藏着丰富的石油和天然气资源。",
    history: "塔里木盆地是丝绸之路南道的核心区域，古代绿洲城市如楼兰、于阗、龟兹都位于盆地边缘。塔里木河是中国最长的内陆河。",
    observation: "塔里木盆地呈椭圆形，被天山、昆仑山、帕米尔高原环绕。盆地中心的塔克拉玛干沙漠面积33万平方公里，是中国最大的沙漠。",
  },
};

/** 帕米尔高原 */
const PAMIR: GeographicFeature = {
  id: "pamir",
  name: "帕米尔高原",
  elevation: 5500, // 平均海拔
  maturityLevel: 2,
  featureType: "plateau",

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [73.0, 38.0], [74.0, 39.5], [76.0, 40.0], [78.0, 39.5],
      [79.0, 38.5], [78.0, 37.0], [76.0, 36.5], [74.0, 37.0],
      [73.0, 38.0],
    ]],
  },

  // Hover 几何: 高原范围
  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [73.0, 38.0], [74.0, 39.5], [76.0, 40.0], [78.0, 39.5],
      [79.0, 38.5], [78.0, 37.0], [76.0, 36.5], [74.0, 37.0],
      [73.0, 38.0],
    ]],
  },

  // Focus 几何: 高原边界
  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [73.0, 38.0], [74.0, 39.5], [76.0, 40.0], [78.0, 39.5],
      [79.0, 38.5], [78.0, 37.0], [76.0, 36.5], [74.0, 37.0],
      [73.0, 38.0],
    ]],
  },

  cameraGeometry: {
    target: [73.42, 38.13],
    heading: 45,
    pitch: -25,
    range: 150000,
  },

  storyGeometry: [
    { id: "pamir-1", name: "慕士塔格峰", position: [75.1, 38.3], text: "慕士塔格峰海拔7509米，被称为冰山之父。" },
    { id: "pamir-2", name: "喀拉库勒湖", position: [75.0, 38.4], text: "喀拉库勒湖倒映慕士塔格峰，是帕米尔标志性景观。" },
  ],

  label: {
    labelText: "帕米尔高原",
    labelType: "region",
    rotation: 0,
    priority: 90,
    minZoom: 2,
    maxZoom: 20,
  },

  visibility: { hierarchyLevel: 2 },

  interaction: {
    hoverable: true,
    selectable: true,
    idleStyle: { outlineAlpha: 0.08, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.25, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.40, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.70, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },

  story: {
    seeing: "帕米尔高原位于中国最西端，是天山、昆仑山、喀喇昆仑山的交汇处。高原平均海拔4000米以上，被称为世界屋脊。",
    formation: "帕米尔高原是印度板块与欧亚板块碰撞的产物，是青藏高原的西延部分。高原上有多座7000米以上的山峰。",
    history: "帕米尔高原是古代丝绸之路的重要通道，玄奘西行取经时曾经过此地。塔吉克族是高原上的主要居民。",
    observation: "帕米尔高原地势高亢，雪山连绵，与周围的山系明显不同。从空中看，高原面相对平坦，边缘陡峭。",
  },
};

/** 塔克拉玛干沙漠 */
const TAKLAMAKAN: GeographicFeature = {
  id: "taklamakan",
  name: "塔克拉玛干沙漠",
  featureType: "desert",
  elevation: 1200, // 沙漠平均海拔
  maturityLevel: 2,

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [77.0, 39.0], [79.0, 40.5], [82.0, 41.0], [85.0, 41.0],
      [88.0, 40.5], [90.0, 39.5], [90.5, 38.0], [89.0, 37.0],
      [86.0, 36.5], [83.0, 37.0], [80.0, 37.5], [77.0, 39.0],
    ]],
  },

  // Hover 几何: 沙漠范围
  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [77.0, 39.0], [79.0, 40.5], [82.0, 41.0], [85.0, 41.0],
      [88.0, 40.5], [90.0, 39.5], [90.5, 38.0], [89.0, 37.0],
      [86.0, 36.5], [83.0, 37.0], [80.0, 37.5], [77.0, 39.0],
    ]],
  },

  // Focus 几何: 沙漠边界
  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [77.0, 39.0], [79.0, 40.5], [82.0, 41.0], [85.0, 41.0],
      [88.0, 40.5], [90.0, 39.5], [90.5, 38.0], [89.0, 37.0],
      [86.0, 36.5], [83.0, 37.0], [80.0, 37.5], [77.0, 39.0],
    ]],
  },

  cameraGeometry: {
    target: [81.85, 38.78],
    heading: 0,
    pitch: -40,
    range: 200000,
  },

  storyGeometry: [
    { id: "taklamakan-1", name: "沙漠中心", position: [83.0, 38.5], text: "塔克拉玛干沙漠中心是连绵的流动沙丘。" },
    { id: "taklamakan-2", name: "沙漠公路", position: [84.0, 39.0], text: "塔克拉玛干沙漠公路是世界上最长的贯穿流动沙漠公路。" },
  ],

  label: {
    labelText: "塔克拉玛干",
    labelType: "region",
    rotation: 0,
    priority: 80,
    minZoom: 3,
    maxZoom: 20,
  },

  visibility: { hierarchyLevel: 3, parentId: "tarim-basin" },

  interaction: {
    hoverable: true,
    selectable: true,
    idleStyle: { outlineAlpha: 0.06, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.20, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.35, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.60, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },

  story: {
    seeing: "塔克拉玛干沙漠位于塔里木盆地中心，是中国最大的沙漠。沙丘连绵起伏，大部分是流动沙丘。",
    formation: "塔克拉玛干沙漠形成于新生代，周围山脉的碎屑物质被风力搬运堆积形成。沙漠下蕴藏着丰富的石油和天然气资源。",
    history: "塔克拉玛干沙漠是丝绸之路南道的最大障碍，古代商队需要绕行沙漠边缘的绿洲城市。沙漠中有许多被掩埋的古代城市遗址。",
    observation: "塔克拉玛干沙漠呈椭圆形，占据塔里木盆地的大部分面积。从空中看，沙丘呈新月形，颜色从浅黄到深褐色变化。",
  },
};

/** 赛里木湖 */
const SAYRAM: GeographicFeature = {
  id: "sayram",
  name: "赛里木湖",
  featureType: "lake",
  elevation: 2073, // 湖面海拔
  maturityLevel: 2,

  identityGeometry: {
    type: "Polygon",
    coordinates: [[
      [80.8, 44.4], [81.0, 44.6], [81.4, 44.7], [81.7, 44.6],
      [81.8, 44.4], [81.5, 44.2], [81.2, 44.2], [80.8, 44.4],
    ]],
  },

  // Hover 几何: 湖泊范围
  hoverGeometry: {
    type: "Polygon",
    coordinates: [[
      [80.8, 44.4], [81.0, 44.6], [81.4, 44.7], [81.7, 44.6],
      [81.8, 44.4], [81.5, 44.2], [81.2, 44.2], [80.8, 44.4],
    ]],
  },

  // Focus 几何: 湖泊边界
  focusGeometry: {
    type: "Polygon",
    coordinates: [[
      [80.8, 44.4], [81.0, 44.6], [81.4, 44.7], [81.7, 44.6],
      [81.8, 44.4], [81.5, 44.2], [81.2, 44.2], [80.8, 44.4],
    ]],
  },

  cameraGeometry: {
    target: [81.3, 44.5],
    heading: 0,
    pitch: -45,
    range: 30000,
  },

  storyGeometry: [
    { id: "sayram-1", name: "赛里木湖", position: [81.3, 44.5], text: "赛里木湖是新疆海拔最高、面积最大的高山湖泊。" },
  ],

  label: {
    labelText: "赛里木湖",
    labelType: "lake",
    rotation: 0,
    priority: 60,
    minZoom: 3,
    maxZoom: 20,
  },

  visibility: { hierarchyLevel: 3, parentId: "tianshan" },

  interaction: {
    hoverable: true,
    selectable: true,
    idleStyle: { outlineAlpha: 0.12, outlineWidth: 1, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0.35, outlineWidth: 1.5, outlineColor: [255, 255, 255], brightnessAdjust: 0.05, labelOpacityMultiplier: 1.3 },
    focusStyle: { outlineAlpha: 0.55, outlineWidth: 2, outlineColor: [255, 255, 255], brightnessAdjust: 0.10, labelOpacityMultiplier: 1.8 },
    selectedStyle: { outlineAlpha: 0.80, outlineWidth: 2.5, outlineColor: [251, 191, 36], brightnessAdjust: 0.10, labelOpacityMultiplier: 2.0 },
  },

  story: {
    seeing: "赛里木湖位于天山西段，是新疆海拔最高、面积最大的高山湖泊。湖水碧蓝，周围是广阔的草原和雪山。",
    formation: "赛里木湖是地壳断陷形成的构造湖，湖水主要来自周围山脉的冰雪融水。湖泊面积约450平方公里，最深处约90米。",
    history: "赛里木湖是古代丝绸之路北道的重要地标，蒙古语称赛里木淖尔，意为山脊上的湖。湖畔有草原石人等古代遗迹。",
    observation: "赛里木湖呈椭圆形，湖水在阳光下呈现深蓝色。与喀纳斯湖相比，赛里木湖更大更开阔，周围没有茂密的森林。",
  },
};

/** 所有核心 Feature */
export const CHINA_NORTHWEST_FEATURES: GeographicFeature[] = [
  TIANSHAN,
  KUNLUN,
  ALTAI,
  JUNGGAR_BASIN,
  TARIM_BASIN,
  PAMIR,
  TAKLAMAKAN,
  SAYRAM,
];
