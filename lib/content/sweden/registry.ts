import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 瑞典
// ============================================================

const KEBNEKAISE_MASSIF: TerrainEntry = {
  id: "kebnekaise-massif",
  nameZh: "凯布讷山",
  nameEn: "Kebnekaise",
  category: "mountain_system",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "凯布讷山北峰", lon: 18.5661, lat: 67.9086, elevation: 2097, kind: "peak" },
  bbox: [18.35, 67.82, 18.90, 67.98],
  viewScale: 1.2,
  label: { lon: 18.58, lat: 67.90, rotation: 0 },
  source: "凯布讷山：瑞典拉普兰地区的斯堪的纳维亚山脉组成部分，是瑞典全境最高峰，北峰为裸露岩石峰、海拔固定为2096.8米，南峰覆盖冰川、海拔逐年变化，近年因冰川消融南峰已连续多年低于北峰（斯德哥尔摩大学冰川监测）",
};

const SAREK_MOUNTAINS: TerrainEntry = {
  id: "sarek-mountains",
  nameZh: "萨雷克山地",
  nameEn: "Sarek",
  category: "mountain_system",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "萨雷克塔克峰", lon: 17.7472, lat: 67.4406, elevation: 2089, kind: "peak" },
  bbox: [17.20, 67.15, 18.10, 67.65],
  viewScale: 1.4,
  label: { lon: 17.60, lat: 67.42, rotation: 0 },
  source: "萨雷克山地：1909年设立的萨雷克国家公园核心区域，瑞典最早的国家公园之一，园内有6座海拔超过2000米的山峰（瑞典全境13座之一），无常设步道与住宿设施，常被称为“欧洲最后的荒野”之一（瑞典国家公园管理局 Naturvårdsverket）",
};

const OLAND_ALVAR: TerrainEntry = {
  id: "oland-alvar",
  nameZh: "厄兰岛大阿尔瓦石灰岩荒原",
  nameEn: "Stora Alvaret, Öland",
  category: "plateau",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "大阿尔瓦荒原", lon: 16.50, lat: 56.40, elevation: 15, kind: "escarpment" },
  bbox: [16.35, 56.25, 16.65, 56.55],
  viewScale: 1.2,
  label: { lon: 16.48, lat: 56.42, rotation: 0 },
  source: "大阿尔瓦荒原：厄兰岛南部一片长约40公里的裸露奥陶纪石灰岩台地，占岛屿面积约四分之一，是欧洲现存面积最大的同类石灰岩荒原，2000年南厄兰岛农业景观列入联合国教科文组织世界遗产名录（UNESCO）",
};

const VINDELFJALLEN: TerrainEntry = {
  id: "vindelfjallen",
  nameZh: "文德尔山地自然保护区",
  nameEn: "Vindelfjällen",
  category: "plateau",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "阿马纳斯", lon: 16.2167, lat: 65.9667, elevation: 450, kind: "city" },
  bbox: [14.60, 65.55, 16.90, 66.45],
  viewScale: 1.7,
  label: { lon: 15.70, lat: 66.05, rotation: 0 },
  source: "文德尔山地自然保护区：瑞典面积最大的自然保护区（约55.5万公顷），以桦树林带与高山苔原过渡带的山地高原地貌为主，是瑞典拉普兰重要的驯鹿放牧区（瑞典国家公园管理局）",
};

const SILJAN_RING: TerrainEntry = {
  id: "siljan-ring",
  nameZh: "希尔扬陨石坑",
  nameEn: "Siljan Ring",
  category: "basin",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "莫拉", lon: 14.5333, lat: 61.0000, elevation: 165, kind: "city" },
  bbox: [13.75, 60.60, 15.25, 61.35],
  viewScale: 1.7,
  label: { lon: 14.50, lat: 61.00, rotation: 0 },
  source: "希尔扬陨石坑：约3.77亿年前泥盆纪一颗直径约5公里的天体撞击形成，环形构造直径约52公里，是欧洲已知最大的陨石撞击构造，希尔扬湖位于环形构造西南边缘（隆德大学 / 希尔扬地质公园）",
};

const STORE_MOSSE: TerrainEntry = {
  id: "store-mosse",
  nameZh: "斯托雷莫瑟沼泽",
  nameEn: "Store Mosse",
  category: "basin",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "斯托雷莫瑟国家公园游客中心", lon: 13.9667, lat: 57.2667, elevation: 155, kind: "city" },
  bbox: [13.75, 57.15, 14.15, 57.35],
  label: { lon: 13.95, lat: 57.25, rotation: 0 },
  source: "斯托雷莫瑟沼泽：瑞典拉普兰以南面积最大的隆起泥炭沼泽，1982年设立国家公园，是瑞典南部重要的候鸟栖息与泥炭湿地保护区（瑞典国家公园管理局）",
};

const VANERN: TerrainEntry = {
  id: "vanern",
  nameZh: "维纳恩湖",
  nameEn: "Vänern",
  category: "lake",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "莱克城堡", lon: 13.1667, lat: 58.6833, elevation: 44, kind: "lake" },
  bbox: [12.35, 58.15, 14.50, 59.90],
  viewScale: 1.8,
  label: { lon: 13.40, lat: 59.00, rotation: 0 },
  source: "维纳恩湖：欧盟境内面积最大的湖泊，约5650平方公里，末次冰期冰川侵蚀形成的湖盆，湖水经约塔河注入卡特加特海峡，也是瑞典哥塔运河连接北海与波罗的海航道的组成部分（瑞典水文气象局 SMHI）",
};

const VATTERN: TerrainEntry = {
  id: "vattern",
  nameZh: "韦特恩湖",
  nameEn: "Vättern",
  category: "lake",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "瓦兹泰纳", lon: 14.8956, lat: 58.4500, elevation: 88, kind: "city" },
  bbox: [14.20, 57.90, 14.95, 58.90],
  axis: [[14.60, 57.95], [14.70, 58.85]],
  viewScale: 1.5,
  label: { lon: 14.45, lat: 58.40, rotation: -80 },
  source: "韦特恩湖：瑞典第二大湖，也是欧洲水质最清澈的大型湖泊之一，最大水深约128米，湖盆沿一条古老的构造断裂带发育，湖中的维辛索岛保留有中世纪修道院遗址（瑞典水文气象局）",
};

const MALAREN: TerrainEntry = {
  id: "malaren",
  nameZh: "梅拉伦湖",
  nameEn: "Mälaren",
  category: "lake",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "德罗特宁霍尔姆宫", lon: 17.8867, lat: 59.3217, elevation: 1, kind: "lake" },
  bbox: [16.20, 59.10, 18.20, 59.65],
  viewScale: 1.6,
  label: { lon: 17.20, lat: 59.35, rotation: 0 },
  source: "梅拉伦湖：瑞典第三大湖，湖岸线极为曲折、支汊众多，斯德哥尔摩坐落在其东端出海口，历史上是瑞典王室与贵族庄园的聚居水域，德罗特宁霍尔姆宫1991年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const TORNETRASK: TerrainEntry = {
  id: "tornetrask",
  nameZh: "托讷特雷斯克湖",
  nameEn: "Torneträsk",
  category: "lake",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "阿比斯库", lon: 18.7900, lat: 68.3550, elevation: 385, kind: "lake" },
  bbox: [17.80, 68.20, 20.00, 68.50],
  viewScale: 1.6,
  label: { lon: 19.00, lat: 68.35, rotation: 0 },
  source: "托讷特雷斯克湖：瑞典拉普兰地区一座狭长的构造湖，最大水深约168米，湖畔的阿比斯库因地处“雨影区”降水稀少、天空通透，是瑞典观测极光的著名地点（瑞典国家公园管理局）",
};

const TAAKERN: TerrainEntry = {
  id: "taakern",
  nameZh: "托克恩湖",
  nameEn: "Tåkern",
  category: "lake",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "韦弗松达观鸟塔", lon: 14.8333, lat: 58.3667, elevation: 92, kind: "lake" },
  bbox: [14.70, 58.30, 14.95, 58.42],
  label: { lon: 14.83, lat: 58.36, rotation: 0 },
  source: "托克恩湖：瑞典南部一座水深不足1.5米的浅水湖，芦苇沼泽广布，是瑞典重要的候鸟栖息地之一，每年春秋两季数以万计的候鸟在此停歇（瑞典皇家科学院鸟类保护区）",
};

const TORNE_RIVER: TerrainEntry = {
  id: "torne-river",
  nameZh: "托讷河",
  nameEn: "Torne River",
  category: "river",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "哈帕兰达", lon: 24.1361, lat: 65.8378, elevation: 5, kind: "city" },
  bbox: [20.00, 65.70, 24.30, 68.50],
  axis: [[20.50, 68.40], [24.15, 65.85]],
  viewScale: 1.8,
  label: { lon: 22.00, lat: 67.20, rotation: -60 },
  source: "托讷河：瑞典最长的未经水电开发的天然河流之一，全长约520公里，下游河段构成瑞典与芬兰的界河，沿岸测量点作为跨十国的“斯特鲁维测地弧”的一部分于2005年列入联合国教科文组织世界遗产名录（UNESCO，核实 2026-09-10）",
};

const DALALVEN: TerrainEntry = {
  id: "dalalven",
  nameZh: "达拉河",
  nameEn: "Dalälven",
  category: "river",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "埃尔夫卡尔比", lon: 17.4667, lat: 60.5667, elevation: 5, kind: "city" },
  bbox: [14.30, 60.40, 17.60, 61.20],
  axis: [[14.50, 61.00], [17.45, 60.57]],
  viewScale: 1.6,
  label: { lon: 16.00, lat: 60.80, rotation: -20 },
  source: "达拉河：流经达拉纳省的瑞典重要河流，源头水系环绕希尔扬陨石坑构造区，下游在埃尔夫卡尔比附近形成三角洲注入波的尼亚湾，沿岸历史上是瑞典水力锯木业的重要基地（瑞典水文气象局）",
};

const KLARALVEN: TerrainEntry = {
  id: "klaralven",
  nameZh: "克拉勒河",
  nameEn: "Klarälven",
  category: "river",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "埃克斯海尔德河曲带", lon: 13.4667, lat: 60.1833, elevation: 165, kind: "meander" },
  bbox: [12.80, 59.30, 13.90, 61.50],
  axis: [[13.20, 61.40], [13.50, 59.38]],
  viewScale: 1.9,
  label: { lon: 13.30, lat: 60.40, rotation: -85 },
  source: "克拉勒河：发源于挪威山地、流经瑞典韦姆兰省注入维纳恩湖的河流，中上游河道在低缓地形中自由摆动，形成大量典型的自由河曲，是北欧研究河流蛇曲地貌的经典样本（瑞典水文气象局）",
};

const LAPPORTEN: TerrainEntry = {
  id: "lapporten",
  nameZh: "拉普门谷",
  nameEn: "Lapporten",
  category: "valley",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "比尔克利登观景点", lon: 18.1667, lat: 68.4167, elevation: 500, kind: "meander" },
  bbox: [18.00, 68.30, 18.45, 68.48],
  axis: [[18.05, 68.44], [18.35, 68.35]],
  label: { lon: 18.20, lat: 68.40, rotation: -20 },
  source: "拉普门谷：琼纳特亚卡山与尼松通约罗山之间一条呈标志性U形的冰川槽谷，因形似大门而得名（萨米语称“拉普门”意为拉普兰之门），是瑞典拉普兰地区辨识度最高的冰蚀地貌之一（瑞典国家公园管理局）",
};

const ABISKO_CANYON: TerrainEntry = {
  id: "abisko-canyon",
  nameZh: "阿比斯库峡谷",
  nameEn: "Abisko Canyon",
  category: "gorge",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "阿比斯库峡谷", lon: 18.7719, lat: 68.3611, elevation: 400, kind: "gorge" },
  bbox: [18.70, 68.33, 18.85, 68.40],
  axis: [[18.72, 68.40], [18.80, 68.34]],
  label: { lon: 18.77, lat: 68.37, rotation: -40 },
  source: "阿比斯库峡谷：阿比斯科约卡河切穿古老构造断裂带形成的峡谷，是瑞典著名徒步路线孔斯莱登（“国王小径”）的北段起点，峡谷两岸生长着受局地小气候庇护的特殊植物群落（瑞典国家公园管理局）",
};

const HOGA_KUSTEN: TerrainEntry = {
  id: "hoga-kusten",
  nameZh: "高海岸",
  nameEn: "Höga Kusten (High Coast)",
  category: "coast",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "高海岸大桥", lon: 18.1975, lat: 62.7958, elevation: 5, kind: "escarpment" },
  bbox: [17.90, 62.60, 18.60, 63.10],
  viewScale: 1.3,
  label: { lon: 18.10, lat: 62.85, rotation: 0 },
  source: "高海岸：波的尼亚湾沿岸一段末次冰期后地壳持续均衡抬升的海岸，当地陆地至今仍以每年约8毫米的速度上升，古海岸线已抬升至海拔约286米处，是全球陆地均衡抬升幅度最大的地区之一，2000年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const BOHUSLAN_COAST: TerrainEntry = {
  id: "bohuslan-coast",
  nameZh: "布胡斯兰海岸",
  nameEn: "Bohuslän Coast",
  category: "coast",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "科斯特群岛", lon: 11.0833, lat: 58.8833, elevation: 5, kind: "island" },
  bbox: [10.90, 58.30, 11.60, 59.00],
  viewScale: 1.3,
  label: { lon: 11.20, lat: 58.65, rotation: 0 },
  source: "布胡斯兰海岸：瑞典西海岸一段裸露花岗岩礁岛密布的海岸，科斯特群岛周边海域2009年设立瑞典第一座海洋国家公园科斯特海国家公园，是瑞典重要的海洋生态保护区（瑞典国家公园管理局）",
};

const BLEKINGE_ARCHIPELAGO: TerrainEntry = {
  id: "blekinge-archipelago",
  nameZh: "布莱金厄群岛",
  nameEn: "Blekinge Archipelago",
  category: "coast",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "卡尔斯克鲁纳", lon: 15.5869, lat: 56.1612, elevation: 5, kind: "city" },
  bbox: [15.30, 55.95, 16.10, 56.30],
  viewScale: 1.2,
  label: { lon: 15.65, lat: 56.10, rotation: 0 },
  source: "布莱金厄群岛：瑞典东南部波罗的海沿岸的花岗岩群岛，卡尔斯克鲁纳自17世纪起即为瑞典皇家海军基地，1998年其海军城规划列入联合国教科文组织世界遗产名录（UNESCO）",
};

const STOCKHOLM_ARCHIPELAGO: TerrainEntry = {
  id: "stockholm-archipelago",
  nameZh: "斯德哥尔摩群岛",
  nameEn: "Stockholm Archipelago",
  category: "coast",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "瓦克斯霍尔姆", lon: 18.3528, lat: 59.4022, elevation: 5, kind: "island" },
  bbox: [17.80, 59.00, 19.30, 59.80],
  viewScale: 1.6,
  label: { lon: 18.60, lat: 59.35, rotation: 0 },
  source: "斯德哥尔摩群岛：波罗的海沿岸由约三万座岛屿、礁石组成的群岛，由末次冰期冰川刮蚀的花岗岩基岩经地壳均衡抬升逐渐出露海面而成，是世界上岛屿密度最高的群岛之一（瑞典国家公园管理局）",
};

const GOTLAND: TerrainEntry = {
  id: "gotland",
  nameZh: "哥得兰岛",
  nameEn: "Gotland",
  category: "island",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "维斯比古城", lon: 18.2948, lat: 57.6348, elevation: 15, kind: "city" },
  bbox: [18.05, 56.90, 19.15, 57.90],
  viewScale: 1.5,
  label: { lon: 18.55, lat: 57.35, rotation: 0 },
  source: "哥得兰岛：波罗的海中瑞典面积最大的岛屿，主体由志留纪石灰岩构成，维斯比古城完整保留中世纪城墙，1995年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const FARO: TerrainEntry = {
  id: "faro",
  nameZh: "法罗岛",
  nameEn: "Fårö",
  category: "island",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "朗哈马斯海蚀柱群", lon: 19.2000, lat: 57.9500, elevation: 5, kind: "escarpment" },
  bbox: [19.05, 57.88, 19.45, 58.00],
  label: { lon: 19.20, lat: 57.94, rotation: 0 },
  source: "法罗岛：哥得兰岛以北的小岛，海岸分布着志留纪石灰岩经长期海浪侵蚀形成的海蚀柱（瑞典语称“raukar”），朗哈马斯海蚀柱群是瑞典境内最密集的海蚀柱地貌（瑞典地质调查局 SGU）",
};

const SODERASEN: TerrainEntry = {
  id: "soderasen",
  nameZh: "苏德罗森岭",
  nameEn: "Söderåsen",
  category: "hills",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "科帕哈滕观景台", lon: 13.2500, lat: 56.0333, elevation: 195, kind: "escarpment" },
  bbox: [13.10, 55.98, 13.45, 56.10],
  label: { lon: 13.25, lat: 56.03, rotation: 0 },
  source: "苏德罗森岭：斯科讷省中北部一条断块隆起的岭脊（长度查无 1/2 级来源，2026-09-12 两轮核实后从正文删去），两侧断崖陡立，岭上生长着瑞典南部保存最完好的古老阔叶林之一，1988年设立国家公园（瑞典国家公园管理局）",
};

const TIVEDEN: TerrainEntry = {
  id: "tiveden",
  nameZh: "蒂韦登",
  nameEn: "Tiveden",
  category: "hills",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "斯滕谢拉", lon: 14.6667, lat: 58.7333, elevation: 195, kind: "escarpment" },
  bbox: [14.50, 58.60, 14.85, 58.85],
  label: { lon: 14.67, lat: 58.73, rotation: 0 },
  source: "蒂韦登：历史上曾长期是瑞典南北两大传统区域之间的天然屏障，地表散布着末次冰期冰川搬运遗留的大量花岗岩巨砾，古老松林与沼泽湖泊交织，1983年设立国家公园（瑞典国家公园管理局）",
};

const HALLANDSASEN: TerrainEntry = {
  id: "hallandsasen",
  nameZh: "哈兰德斯岭",
  nameEn: "Hallandsåsen",
  category: "hills",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "博斯塔",
    lon: 12.9167, lat: 56.4167, elevation: 150, kind: "escarpment" },
  bbox: [12.65, 56.35, 13.20, 56.50],
  axis: [[12.70, 56.42], [13.15, 56.40]],
  label: { lon: 12.90, lat: 56.43, rotation: 0 },
  source: "哈兰德斯岭：斯科讷省与哈兰省交界处一条东西走向的断块山岭，一条铁路隧道1992年动工穿越山岭、因地质条件复杂历经多次延期，2015年最终通车，是瑞典近代铁路工程史上著名的地质挑战案例（瑞典交通局）",
};

const SKANE_PLAIN: TerrainEntry = {
  id: "skane-plain",
  nameZh: "斯科讷平原",
  nameEn: "Skåne Plain",
  category: "plain",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "隆德", lon: 13.1910, lat: 55.7047, elevation: 40, kind: "city" },
  bbox: [12.80, 55.35, 14.30, 56.30],
  viewScale: 1.4,
  label: { lon: 13.50, lat: 55.85, rotation: 0 },
  source: "斯科讷平原：瑞典最南端由末次冰期冰碛与黄土状沉积构成的低平农业区，土壤肥沃，是瑞典最重要的谷物与油菜种植区，气候也是瑞典全境最温和的地区之一（瑞典水文气象局）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 瑞典 =====
  KEBNEKAISE_MASSIF, SAREK_MOUNTAINS,
  OLAND_ALVAR, VINDELFJALLEN,
  SILJAN_RING, STORE_MOSSE,
  VANERN, VATTERN, MALAREN, TORNETRASK, TAAKERN,
  TORNE_RIVER, DALALVEN, KLARALVEN,
  LAPPORTEN,
  ABISKO_CANYON,
  HOGA_KUSTEN, BOHUSLAN_COAST, BLEKINGE_ARCHIPELAGO, STOCKHOLM_ARCHIPELAGO,
  GOTLAND, FARO,
  SODERASEN, TIVEDEN, HALLANDSASEN,
  SKANE_PLAIN,
];
