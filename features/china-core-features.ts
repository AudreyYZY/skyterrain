/**
 * 中国核心 GeographicFeature
 *
 * 全国尺度地貌数据
 * maturityLevel: 1 (支持点击/飞行/讲解)
 * 内容基于中国科学院、中国国家地理等官方公开数据提炼
 */

import type { GeographicFeature } from "./types";

// ==================== 山脉 ====================

/** 秦岭 */
const QINLING: GeographicFeature = {
  id: "qinling",
  name: "秦岭",
  featureType: "mountain_system",
  elevation: 3771, // 太白山主峰，秦岭最高峰
  maturityLevel: 1,
  cameraGeometry: { target: [107.76, 33.95], heading: 0, pitch: -30, range: 300000 },
  storyGeometry: [
    { id: "qinling-1", name: "太白山", position: [107.8, 34.0], text: "太白山是秦岭最高峰，海拔3771.2米。" },
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
    seeing: "秦岭横贯中国中部，是中国南北地理分界线。从飞机上看，山脊呈东西走向，将中国分为南方和北方。山北是黄河流域的黄土高原，山南是长江流域的四川盆地，分界非常明显。",
    formation: "秦岭是扬子板块与华北板块碰撞形成的褶皱山系，新生代以来持续抬升。山体主要由变质岩和花岗岩组成，太白山海拔3771米，是秦岭最高峰。",
    history: "秦岭自古以来就是中国南北的天然屏障。蜀道难，难于上青天，指的就是秦岭山区的交通困难。秦岭也是大熊猫的重要栖息地，佛坪自然保护区就位于此处。",
    observation: "秦岭呈东西走向，山脊线连续。从飞机上看，山北是黄土高原的黄色调，山南是四川盆地的绿色调，分界非常明显。山体北坡陡峭，南坡平缓。",
  },
};

/** 祁连山 */
const QILIAN: GeographicFeature = {
  id: "qilian",
  name: "祁连山",
  featureType: "mountain_system",
  elevation: 5827, // 团结峰，祁连山最高峰
  maturityLevel: 1,
  cameraGeometry: { target: [101.47, 37.70], heading: 0, pitch: -28, range: 300000 },
  storyGeometry: [
    { id: "qilian-1", name: "祁连山主峰", position: [100.0, 38.5], text: "祁连山主峰海拔5827米。" },
  ],
  label: { labelText: "祁连山", labelType: "ridge", rotation: -15, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
  story: {
    seeing: "祁连山位于甘肃与青海交界处，是河西走廊的天然屏障。山顶终年积雪，冰川广布，山下是广阔的草原和戈壁。从飞机上看，雪线以上是白色冰川，雪线以下是深色山体，山前是绿色草原。",
    formation: "祁连山是青藏高原东北缘的褶皱山系，受印度板块挤压持续抬升。山体由古生代变质岩和中生代花岗岩组成，冰川作用形成了典型的U形谷和角峰。",
    history: "祁连山是古代丝绸之路的重要地标。匈奴语称天为祁连，祁连山即天山之意。霍去病曾在此大败匈奴，留下「失我祁连山，使我六畜不蕃息」的诗句。",
    observation: "祁连山呈西北-东南走向，山顶雪线明显。从飞机上看，北侧是干旱的河西走廊，南侧是湿润的青海草原，分界非常清晰。山前有明显的冲积扇。",
  },
};

/** 太行山 */
const TAIHANG: GeographicFeature = {
  id: "taihang",
  name: "太行山",
  featureType: "mountain_system",
  elevation: 2996, // 小五台山东台，太行山最高峰
  maturityLevel: 1,
  cameraGeometry: { target: [113.42, 38.97], heading: 0, pitch: -30, range: 300000 },
  storyGeometry: [
    { id: "taihang-1", name: "太行山北段", position: [114.0, 39.0], text: "太行山北段是华北平原与黄土高原的分界线。" },
  ],
  label: { labelText: "太行山", labelType: "ridge", rotation: -78, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
  story: {
    seeing: "太行山纵贯华北，是华北平原与黄土高原的天然分界线。从飞机上看，东坡陡峭落差极大，西坡平缓过渡到黄土高原。山体由红色砂岩构成，断崖峭壁气势雄伟。",
    formation: "太行山是华北板块西缘的断块山，受断裂控制形成陡峭的东坡。山体由前寒武纪变质岩和古生代沉积岩组成，红色砂岩是其显著特征。",
    history: "太行山是古代军事要地，愚公移山的故事就发生在这里。抗日战争时期，太行山是重要的敌后根据地，八路军在此建立了广泛的抗日根据地。",
    observation: "太行山呈南北走向，东坡陡峭，西坡平缓。从飞机上看，东侧是一望无际的华北平原，西侧是沟壑纵横的黄土高原，分界非常明显。",
  },
};

/** 大兴安岭 */
const DAXINGANLING: GeographicFeature = {
  id: "daxinganling",
  name: "大兴安岭",
  featureType: "mountain_system",
  elevation: 2035, // 大白山，大兴安岭最高峰
  maturityLevel: 1,
  cameraGeometry: { target: [117.0, 48.0], heading: 20, pitch: -28, range: 300000 },
  storyGeometry: [
    { id: "daxinganling-1", name: "大兴安岭北段", position: [124.0, 52.0], text: "大兴安岭北段是中国最北的原始森林。" },
  ],
  label: { labelText: "大兴安岭", labelType: "ridge", rotation: -68, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
  story: {
    seeing: "大兴安岭是中国东北的天然屏障，森林覆盖率极高。从飞机上看，一片翠绿，是中国最大的原始林区之一。山脉呈东北-西南走向，西侧是内蒙古高原，东侧是东北平原。",
    formation: "大兴安岭是古生代褶皱山系，受冰川作用形成平缓的山顶。山体由花岗岩和变质岩组成，是中国东部重要的地理分界线。",
    history: "大兴安岭是鄂伦春族的传统居住地，也是中国重要的林业基地。1987年大兴安岭火灾是中国最严重的森林火灾，过火面积达101万公顷。",
    observation: "大兴安岭呈东北-西南走向，山顶平缓，森林茂密。从飞机上看，绿色森林与西侧黄色草原分界明显。山脉海拔不高，一般在1000-1500米。",
  },
};

/** 横断山脉 */
const HENGDUAN: GeographicFeature = {
  id: "hengduan",
  name: "横断山脉",
  featureType: "mountain_system",
  elevation: 7556, // 贡嘎山，横断山脉最高峰
  maturityLevel: 1,
  cameraGeometry: { target: [100.0, 30.0], heading: -10, pitch: -25, range: 300000 },
  storyGeometry: [
    { id: "hengduan-1", name: "三江并流", position: [99.0, 29.0], text: "金沙江、澜沧江、怒江在此并行南流。" },
  ],
  label: { labelText: "横断山脉", labelType: "ridge", rotation: -82, priority: 90, minZoom: 1, maxZoom: 20 },
  visibility: { hierarchyLevel: 1 },
  interaction: {
    hoverable: false, selectable: true,
    idleStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    hoverStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    focusStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
    selectedStyle: { outlineAlpha: 0, outlineWidth: 0, outlineColor: [255, 255, 255], brightnessAdjust: 0, labelOpacityMultiplier: 1 },
  },
  story: {
    seeing: "横断山脉是中国西南的南北走向山脉群，金沙江、澜沧江、怒江在此并行南流，形成三江并流的世界自然遗产。从飞机上看，山脉与河流平行排列，山高谷深，地形极其复杂。",
    formation: "横断山脉是印度板块挤压形成的褶皱山系，河流深切形成峡谷。山脉与河流平行排列，山高谷深，相对高差可达3000米以上。",
    history: "横断山脉是古代茶马古道的重要通道，也是多民族聚居区。藏族、彝族、纳西族等民族在此繁衍生息，形成了独特的多元文化。",
    observation: "横断山脉呈南北走向，河流与山脉平行排列。从飞机上看，峡谷深邃，山脊陡峭，河流在谷底蜿蜒。与周围东西走向的山脉形成鲜明对比。",
  },
};

/** 喜马拉雅山 */
const HIMALAYA: GeographicFeature = {
  id: "himalaya",
  name: "喜马拉雅山",
  featureType: "mountain_system",
  elevation: 8849, // 珠穆朗玛峰 8848.86m，四舍五入
  maturityLevel: 1,
  cameraGeometry: { target: [86.0, 29.0], heading: 0, pitch: -25, range: 300000 },
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
    seeing: "喜马拉雅山脉是世界最高的山脉，珠穆朗玛峰海拔8848.86米（2020年中国-尼泊尔联合测量）。从飞机上看，雪山连绵不断，冰川广布，气势磅礴。山脉呈东西走向，绵延2400多公里。",
    formation: "喜马拉雅山是印度板块与欧亚板块碰撞形成的，至今仍在抬升，每年约上升5毫米。山体主要由变质岩和沉积岩组成，拥有世界上最大的冰川群之一。",
    history: "喜马拉雅山是古代丝绸之路南线的重要地标，也是藏传佛教的圣地。1953年人类首次登顶珠穆朗玛峰，至今仍是世界登山运动的终极目标。",
    observation: "喜马拉雅山呈东西走向，雪线极高，约5500米。从飞机上看，山顶终年积雪，冰川从山顶延伸到山谷。南坡陡峭，北坡平缓，分界明显。",
  },
};

// ==================== 高原 ====================

/** 青藏高原 */
const QINGHAI_TIBET: GeographicFeature = {
  id: "qinghai-tibet",
  name: "青藏高原",
  featureType: "plateau",
  elevation: 4500, // 平均海拔
  maturityLevel: 1,
  cameraGeometry: { target: [89.6, 32.0], heading: 0, pitch: -30, range: 300000 },
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
    seeing: "青藏高原是世界上海拔最高的高原，平均海拔4000米以上，被称为世界屋脊。从飞机上看，雪山连绵，草原广袤，湖泊星罗棋布。长江、黄河、澜沧江等大河都发源于此。",
    formation: "青藏高原是印度板块与欧亚板块碰撞形成的，至今仍在抬升。高原上有多座7000米以上的山峰，冰川面积约占中国冰川总面积的80%以上。",
    history: "青藏高原是藏族的传统居住地，也是多条大河的发源地。布达拉宫、大昭寺等文化遗产位于此处。高原上的牦牛是藏族牧民的重要生产资料。",
    observation: "青藏高原地势高亢，雪山连绵。从飞机上看，高原面相对平坦，边缘陡峭。湖泊呈蓝色，草原呈绿色，色彩对比鲜明。空气稀薄，能见度极高。",
  },
};

/** 黄土高原 */
const LOESS: GeographicFeature = {
  id: "loess",
  name: "黄土高原",
  featureType: "plateau",
  elevation: 1300, // 平均海拔
  maturityLevel: 1,
  cameraGeometry: { target: [109.40, 36.58], heading: 0, pitch: -32, range: 300000 },
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
    seeing: "黄土高原是世界上最大的黄土堆积区，土层深厚，沟壑纵横。从飞机上看，黄色的大地被无数沟壑切割，梯田层层叠叠。黄河穿流其间，携带大量泥沙。",
    formation: "黄土高原的黄土是数百万年来风力搬运堆积形成的，厚度可达200米以上。流水侵蚀形成了千沟万壑的地貌，是中国水土流失最严重的地区。",
    history: "黄土高原是中华文明的发源地之一，半坡遗址、仰韶文化都在这里。延安是中国革命的圣地，窑洞是黄土高原特有的民居形式。",
    observation: "黄土高原呈黄色调，沟壑纵横。从飞机上看，地形破碎，梯田层层叠叠，与周围绿色山脉形成鲜明对比。黄河在高原上切割出深邃的峡谷。",
  },
};

/** 内蒙古高原 */
const INNER_MONGOLIA: GeographicFeature = {
  id: "inner-mongolia",
  name: "内蒙古高原",
  featureType: "plateau",
  elevation: 1100, // 平均海拔
  maturityLevel: 1,
  cameraGeometry: { target: [114.50, 44.00], heading: 0, pitch: -35, range: 300000 },
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
    seeing: "内蒙古高原是中国第二大高原，草原辽阔，牛羊成群。从飞机上看，绿色草地一望无际，河流蜿蜒其中。西部有巴丹吉林沙漠和腾格里沙漠。",
    formation: "内蒙古高原是古老的稳定地块，地表覆盖着厚厚的黄土和风积沙。地形平坦，起伏和缓，平均海拔1000-1200米。",
    history: "内蒙古高原是蒙古族的传统居住地，也是中国重要的畜牧业基地。呼伦贝尔草原是世界著名的天然牧场，锡林郭勒草原是蒙古族文化的发源地之一。",
    observation: "内蒙古高原地势平坦，草原广袤。从飞机上看，绿色草地一望无际，偶有河流和湖泊点缀其间。西部逐渐过渡为沙漠和戈壁。",
  },
};

/** 云贵高原 */
const YUNNAN_GUIZHOU: GeographicFeature = {
  id: "yunnan-guizhou",
  name: "云贵高原",
  featureType: "plateau",
  elevation: 1500, // 平均海拔
  maturityLevel: 1,
  cameraGeometry: { target: [102.83, 25.00], heading: 0, pitch: -32, range: 300000 },
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
    seeing: "云贵高原是中国第四大高原，喀斯特地貌发育典型。从飞机上看，峰林、溶洞、暗河遍布，地形崎岖。贵州部分多雨雾，云南部分阳光充足。",
    formation: "云贵高原是古老的石灰岩高原，受流水侵蚀形成喀斯特地貌。溶洞、石林、暗河是典型特征。黄果树瀑布、路南石林都是喀斯特地貌的代表。",
    history: "云贵高原是多民族聚居区，苗族、彝族、布依族等民族在此繁衍生息。也是中国重要的有色金属产地，个旧锡矿、铜仁汞矿都很著名。",
    observation: "云贵高原地形崎岖，喀斯特地貌明显。从飞机上看，峰林耸立，溶洞遍布，与周围平原形成鲜明对比。贵州多雨雾，云南多晴天。",
  },
};

// ==================== 盆地 ====================

/** 四川盆地 */
const SICHUAN: GeographicFeature = {
  id: "sichuan",
  name: "四川盆地",
  featureType: "basin",
  elevation: 400, // 盆地底部平均海拔
  maturityLevel: 1,
  cameraGeometry: { target: [104.07, 30.57], heading: 0, pitch: -35, range: 300000 },
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
    seeing: "四川盆地是中国四大盆地之一，被群山环绕，气候湿润，物产丰富，被称为天府之国。从飞机上看，四周是高大的山脉，中间是绿色平原，泾渭分明。",
    formation: "四川盆地是古老的沉积盆地，周围山脉的碎屑物质堆积形成厚厚的沉积层。盆地内有丰富的天然气资源，是中国重要的能源基地。",
    history: "四川盆地是巴蜀文化的发源地，都江堰水利工程已有2000多年历史。三国时期刘备在此建立蜀汉政权，成都武侯祠至今仍是重要文化地标。",
    observation: "四川盆地被群山环绕，内部平坦。从飞机上看，四周是高大的山脉，中间是绿色的平原，分界非常明显。盆地内多雾，能见度有时较低。",
  },
};

/** 柴达木盆地 */
const QAIDAM: GeographicFeature = {
  id: "qaidam",
  name: "柴达木盆地",
  featureType: "basin",
  elevation: 2800, // 盆地底部平均海拔
  maturityLevel: 1,
  cameraGeometry: { target: [95.30, 36.80], heading: 0, pitch: -35, range: 300000 },
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
    seeing: "柴达木盆地是中国三大内陆盆地之一，地势高亢，盐湖广布。从飞机上看，白色盐田和绿色草地交错分布，周围是荒凉的戈壁和雪山。",
    formation: "柴达木盆地是青藏高原上的构造盆地，沉积了厚厚的盐类矿产。盆地内有丰富的钾盐、锂矿资源，是中国重要的盐化工基地。",
    history: "柴达木盆地是蒙古语盐泽之意，盐湖资源丰富。茶卡盐湖是中国著名的天空之镜，察尔汗盐湖是中国最大的盐湖。",
    observation: "柴达木盆地地势高亢，盐湖广布。从飞机上看，白色盐田和绿色草地交错，与周围雪山形成鲜明对比。盆地内风力强劲，有大面积风蚀地貌。",
  },
};

// ==================== 平原 ====================

/** 东北平原 */
const NORTHEAST: GeographicFeature = {
  id: "northeast",
  name: "东北平原",
  featureType: "basin",
  elevation: 150, // 平均海拔
  maturityLevel: 1,
  cameraGeometry: { target: [125.0, 46.0], heading: 0, pitch: -35, range: 300000 },
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
    seeing: "东北平原是中国最大的平原，黑土地肥沃，是中国重要的粮食产区。从飞机上看，农田整齐，河流蜿蜒，一望无际。松花江、辽河穿流其间。",
    formation: "东北平原是松花江、辽河等河流冲积形成的。黑土层数百万年积累形成，肥力极高，是世界三大黑土区之一。",
    history: "东北平原是满族的传统居住地，也是中国重要的工业基地。北大荒变北大仓，是中国农业开发的典范。大庆油田是中国重要的石油产地。",
    observation: "东北平原地势平坦，黑土地广袤。从飞机上看，农田整齐划一，河流蜿蜒其中，与周围山地形成对比。冬季白雪覆盖，夏季绿色一片。",
  },
};

/** 华北平原 */
const NORTH_CHINA: GeographicFeature = {
  id: "north-china",
  name: "华北平原",
  featureType: "basin",
  elevation: 50, // 平均海拔
  maturityLevel: 1,
  cameraGeometry: { target: [116.0, 37.0], heading: 0, pitch: -35, range: 300000 },
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
    seeing: "华北平原是中国第二大平原，黄河、海河冲积形成，是中国重要的农业区。从飞机上看，平原辽阔，城市密集，黄河蜿蜒流过。",
    formation: "华北平原是黄河、海河等河流冲积形成的。黄河携带大量泥沙堆积，形成了广阔的冲积平原。平原地势平坦，海拔多在50米以下。",
    history: "华北平原是中华文明的核心区域，北京、天津等大城市都在这里。大运河连接南北，是中国古代重要的交通动脉。黄河流域是中华文明的发源地。",
    observation: "华北平原地势平坦，农田广袤。从飞机上看，黄河蜿蜒流过平原，城市和农田交错分布。黄河含沙量大，河床高于地面，是地上悬河。",
  },
};

/** 长江中下游平原 */
const YANGTZE: GeographicFeature = {
  id: "yangtze",
  name: "长江中下游平原",
  featureType: "basin",
  elevation: 50, // 平均海拔
  maturityLevel: 1,
  cameraGeometry: { target: [115.0, 29.5], heading: 0, pitch: -35, range: 300000 },
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
    seeing: "长江中下游平原是中国最重要的农业区，水网密布，湖泊众多。从飞机上看，长江蜿蜒流过平原，湖泊星罗棋布，农田整齐。鄱阳湖、洞庭湖等大湖分布其间。",
    formation: "长江中下游平原是长江及其支流冲积形成的。长江携带大量泥沙堆积，形成了广阔的冲积平原和众多湖泊。平原地势低平，海拔多在50米以下。",
    history: "长江中下游平原是中国经济最发达的地区之一，上海、南京、武汉等大城市都在这里。自古就是鱼米之乡，江南水乡文化闻名天下。",
    observation: "长江中下游平原水网密布，湖泊众多。从飞机上看，长江蜿蜒流过平原，湖泊星罗棋布，农田整齐。与华北平原相比，这里水网更密，绿色更多。",
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
