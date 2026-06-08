/**
 * 中国核心 GeographicFeature
 *
 * 全国尺度地貌数据
 * maturityLevel: 1 (支持点击/飞行/讲解，无 Hover Geometry)
 * 包含真实准确的 lesson 数据
 */

import type { GeographicFeature } from "./types";

// ==================== 山脉 ====================

/** 秦岭 */
const QINLING: GeographicFeature = {
  id: "qinling",
  name: "秦岭",
  featureType: "mountain_system",
  maturityLevel: 1,
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
  story: {
    seeing: "秦岭横贯中国中部，是中国南北地理分界线。从飞机上看，山脊呈东西走向，将中国分为南方和北方。山北是黄河流域，山南是长江流域。",
    formation: "秦岭是扬子板块与华北板块碰撞形成的褶皱山系，新生代以来持续抬升。山体主要由变质岩和花岗岩组成。",
    history: "秦岭自古以来就是中国南北的天然屏障。蜀道难，难于上青天，指的就是秦岭山区的交通困难。秦岭也是大熊猫的重要栖息地。",
    observation: "秦岭呈东西走向，山脊线连续。从飞机上看，山北是黄土高原的黄色调，山南是四川盆地的绿色调，分界非常明显。",
  },
};

/** 祁连山 */
const QILIAN: GeographicFeature = {
  id: "qilian",
  name: "祁连山",
  featureType: "mountain_system",
  maturityLevel: 1,
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
  story: {
    seeing: "祁连山位于甘肃与青海交界处，是河西走廊的天然屏障。山顶终年积雪，冰川广布，山下是广阔的草原和戈壁。",
    formation: "祁连山是青藏高原东北缘的褶皱山系，受印度板块挤压持续抬升。山体由古生代变质岩和中生代花岗岩组成。",
    history: "祁连山是古代丝绸之路的重要地标。匈奴语称天为祁连，祁连山即天山之意。霍去病曾在此大败匈奴。",
    observation: "祁连山呈西北-东南走向，山顶雪线明显。从飞机上看，北侧是干旱的河西走廊，南侧是湿润的青海草原。",
  },
};

/** 太行山 */
const TAIHANG: GeographicFeature = {
  id: "taihang",
  name: "太行山",
  featureType: "mountain_system",
  maturityLevel: 1,
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
  story: {
    seeing: "太行山纵贯华北，是华北平原与黄土高原的天然分界线。山体陡峭，峡谷深邃，东坡落差极大。",
    formation: "太行山是华北板块西缘的断块山，受断裂控制形成陡峭的东坡。山体由前寒武纪变质岩和古生代沉积岩组成。",
    history: "太行山是古代军事要地，愚公移山的故事就发生在这里。抗日战争时期，太行山是重要的敌后根据地。",
    observation: "太行山呈南北走向，东坡陡峭，西坡平缓。从飞机上看，东侧是一望无际的华北平原，西侧是沟壑纵横的黄土高原。",
  },
};

/** 大兴安岭 */
const DAXINGANLING: GeographicFeature = {
  id: "daxinganling",
  name: "大兴安岭",
  featureType: "mountain_system",
  maturityLevel: 1,
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
  story: {
    seeing: "大兴安岭是中国东北的天然屏障，森林覆盖率极高。从飞机上看，一片翠绿，是中国最大的原始林区之一。",
    formation: "大兴安岭是古生代褶皱山系，受冰川作用形成平缓的山顶。山体由花岗岩和变质岩组成。",
    history: "大兴安岭是鄂伦春族的传统居住地，也是中国重要的林业基地。1987年大兴安岭火灾是中国最严重的森林火灾。",
    observation: "大兴安岭呈东北-西南走向，山顶平缓，森林茂密。西侧是内蒙古高原，东侧是东北平原。从飞机上看，绿色森林与黄色草原分界明显。",
  },
};

/** 横断山脉 */
const HENGDUAN: GeographicFeature = {
  id: "hengduan",
  name: "横断山脉",
  featureType: "mountain_system",
  maturityLevel: 1,
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
  story: {
    seeing: "横断山脉是中国西南的南北走向山脉群，金沙江、澜沧江、怒江在此并行南流，形成三江并流的世界自然遗产。",
    formation: "横断山脉是印度板块挤压形成的褶皱山系，河流深切形成峡谷。山脉与河流平行排列，山高谷深。",
    history: "横断山脉是古代茶马古道的重要通道，也是多民族聚居区。藏族、彝族、纳西族等民族在此繁衍生息。",
    observation: "横断山脉呈南北走向，河流与山脉平行排列。从飞机上看，峡谷深邃，山脊陡峭，河流在谷底蜿蜒。",
  },
};

/** 喜马拉雅山 */
const HIMALAYA: GeographicFeature = {
  id: "himalaya",
  name: "喜马拉雅山",
  featureType: "mountain_system",
  maturityLevel: 1,
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
  story: {
    seeing: "喜马拉雅山脉是世界最高的山脉，珠穆朗玛峰海拔8848米。从飞机上看，雪山连绵不断，冰川广布，气势磅礴。",
    formation: "喜马拉雅山是印度板块与欧亚板块碰撞形成的，至今仍在抬升，每年约上升5毫米。",
    history: "喜马拉雅山是古代丝绸之路南线的重要地标，也是藏传佛教的圣地。1953年人类首次登顶珠穆朗玛峰。",
    observation: "喜马拉雅山呈东西走向，雪线极高，约5500米。从飞机上看，山顶终年积雪，冰川从山顶延伸到山谷。",
  },
};

// ==================== 高原 ====================

/** 青藏高原 */
const QINGHAI_TIBET: GeographicFeature = {
  id: "qinghai-tibet",
  name: "青藏高原",
  featureType: "plateau",
  maturityLevel: 1,
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
  story: {
    seeing: "青藏高原是世界上海拔最高的高原，平均海拔4000米以上，被称为世界屋脊。从飞机上看，雪山连绵，草原广袤，湖泊星罗棋布。",
    formation: "青藏高原是印度板块与欧亚板块碰撞形成的，至今仍在抬升。高原上有多座7000米以上的山峰。",
    history: "青藏高原是藏族的传统居住地，也是多条大河的发源地，包括长江、黄河、澜沧江等。",
    observation: "青藏高原地势高亢，雪山连绵。从飞机上看，高原面相对平坦，边缘陡峭。湖泊呈蓝色，草原呈绿色，色彩对比鲜明。",
  },
};

/** 黄土高原 */
const LOESS: GeographicFeature = {
  id: "loess",
  name: "黄土高原",
  featureType: "plateau",
  maturityLevel: 1,
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
  story: {
    seeing: "黄土高原是世界上最大的黄土堆积区，土层深厚，沟壑纵横。从飞机上看，黄色的大地被无数沟壑切割，梯田层层叠叠。",
    formation: "黄土高原的黄土是数百万年来风力搬运堆积形成的，厚度可达200米以上。流水侵蚀形成了千沟万壑的地貌。",
    history: "黄土高原是中华文明的发源地之一，半坡遗址、仰韶文化都在这里。延安是中国革命的圣地。",
    observation: "黄土高原呈黄色调，沟壑纵横。从飞机上看，地形破碎，梯田层层叠叠，与周围绿色山脉形成鲜明对比。",
  },
};

/** 内蒙古高原 */
const INNER_MONGOLIA: GeographicFeature = {
  id: "inner-mongolia",
  name: "内蒙古高原",
  featureType: "plateau",
  maturityLevel: 1,
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
  story: {
    seeing: "内蒙古高原是中国第二大高原，草原辽阔，牛羊成群。从飞机上看，绿色草地一望无际，河流蜿蜒其中。",
    formation: "内蒙古高原是古老的稳定地块，地表覆盖着厚厚的黄土和风积沙。地形平坦，起伏和缓。",
    history: "内蒙古高原是蒙古族的传统居住地，也是中国重要的畜牧业基地。呼伦贝尔草原是世界著名的天然牧场。",
    observation: "内蒙古高原地势平坦，草原广袤。从飞机上看，绿色草地一望无际，偶有河流和湖泊点缀其间。",
  },
};

/** 云贵高原 */
const YUNNAN_GUIZHOU: GeographicFeature = {
  id: "yunnan-guizhou",
  name: "云贵高原",
  featureType: "plateau",
  maturityLevel: 1,
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
  story: {
    seeing: "云贵高原是中国第四大高原，喀斯特地貌发育典型。从飞机上看，峰林、溶洞、暗河遍布，地形崎岖。",
    formation: "云贵高原是古老的石灰岩高原，受流水侵蚀形成喀斯特地貌。溶洞、石林、暗河是典型特征。",
    history: "云贵高原是多民族聚居区，苗族、彝族、布依族等民族在此繁衍生息。也是中国重要的有色金属产地。",
    observation: "云贵高原地形崎岖，喀斯特地貌明显。从飞机上看，峰林耸立，溶洞遍布，与周围平原形成鲜明对比。",
  },
};

// ==================== 盆地 ====================

/** 四川盆地 */
const SICHUAN: GeographicFeature = {
  id: "sichuan",
  name: "四川盆地",
  featureType: "basin",
  maturityLevel: 1,
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
  story: {
    seeing: "四川盆地是中国四大盆地之一，被群山环绕，气候湿润，物产丰富，被称为天府之国。从飞机上看，四周是山脉，中间是绿色平原。",
    formation: "四川盆地是古老的沉积盆地，周围山脉的碎屑物质堆积形成厚厚的沉积层。盆地内有丰富的天然气资源。",
    history: "四川盆地是巴蜀文化的发源地，都江堰水利工程已有2000多年历史。三国时期刘备在此建立蜀汉政权。",
    observation: "四川盆地被群山环绕，内部平坦。从飞机上看，四周是高大的山脉，中间是绿色的平原，泾渭分明。",
  },
};

/** 柴达木盆地 */
const QAIDAM: GeographicFeature = {
  id: "qaidam",
  name: "柴达木盆地",
  featureType: "basin",
  maturityLevel: 1,
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
  story: {
    seeing: "柴达木盆地是中国三大内陆盆地之一，地势高亢，盐湖广布。从飞机上看，白色盐田和绿色草地交错分布。",
    formation: "柴达木盆地是青藏高原上的构造盆地，沉积了厚厚的盐类矿产。盆地内有丰富的钾盐、锂矿资源。",
    history: "柴达木盆地是蒙古语盐泽之意，盐湖资源丰富。茶卡盐湖是中国著名的天空之镜。",
    observation: "柴达木盆地地势高亢，盐湖广布。从飞机上看，白色盐田和绿色草地交错，与周围雪山形成鲜明对比。",
  },
};

// ==================== 平原 ====================

/** 东北平原 */
const NORTHEAST: GeographicFeature = {
  id: "northeast",
  name: "东北平原",
  featureType: "basin",
  maturityLevel: 1,
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
  story: {
    seeing: "东北平原是中国最大的平原，黑土地肥沃，是中国重要的粮食产区。从飞机上看，农田整齐，河流蜿蜒，一望无际。",
    formation: "东北平原是松花江、辽河等河流冲积形成的。黑土层数百万年积累形成，肥力极高。",
    history: "东北平原是满族的传统居住地，也是中国重要的工业基地。北大荒变北大仓，是中国农业开发的典范。",
    observation: "东北平原地势平坦，黑土地广袤。从飞机上看，农田整齐划一，河流蜿蜒其中，与周围山地形成对比。",
  },
};

/** 华北平原 */
const NORTH_CHINA: GeographicFeature = {
  id: "north-china",
  name: "华北平原",
  featureType: "basin",
  maturityLevel: 1,
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
  story: {
    seeing: "华北平原是中国第二大平原，黄河、海河冲积形成，是中国重要的农业区。从飞机上看，平原辽阔，城市密集。",
    formation: "华北平原是黄河、海河等河流冲积形成的。黄河携带大量泥沙堆积，形成了广阔的冲积平原。",
    history: "华北平原是中华文明的核心区域，北京、天津等大城市都在这里。大运河连接南北，是中国古代重要的交通动脉。",
    observation: "华北平原地势平坦，农田广袤。从飞机上看，黄河蜿蜒流过平原，城市和农田交错分布。",
  },
};

/** 长江中下游平原 */
const YANGTZE: GeographicFeature = {
  id: "yangtze",
  name: "长江中下游平原",
  featureType: "basin",
  maturityLevel: 1,
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
  story: {
    seeing: "长江中下游平原是中国最重要的农业区，水网密布，湖泊众多。从飞机上看，长江蜿蜒流过平原，湖泊星罗棋布。",
    formation: "长江中下游平原是长江及其支流冲积形成的。长江携带大量泥沙堆积，形成了广阔的冲积平原和众多湖泊。",
    history: "长江中下游平原是中国经济最发达的地区之一，上海、南京、武汉等大城市都在这里。自古就是鱼米之乡。",
    observation: "长江中下游平原水网密布，湖泊众多。从飞机上看，长江蜿蜒流过平原，湖泊星罗棋布，农田整齐。",
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
