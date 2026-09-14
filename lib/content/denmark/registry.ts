import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 丹麦
// ============================================================

const CENTRAL_JUTLAND_HIGHLANDS: TerrainEntry = {
  id: "central-jutland-highlands",
  nameZh: "日德兰中部高地",
  nameEn: "Central Jutland Highlands",
  category: "hills",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "默勒霍伊", lon: 9.8264, lat: 56.0064, elevation: 171, kind: "peak" },
  bbox: [9.68, 55.94, 9.98, 56.08],
  label: { lon: 9.83, lat: 56.02, rotation: 0 },
  source: "日德兰中部高地：末次冰期终碛垄形成的丘陵地带，默勒霍伊海拔170.86米，2005年新测量确认为丹麦本土最高点，仅比相邻的埃耶尔巴内霍伊高0.5米左右（丹麦地质调查局 GEUS）",
};

const MOLS_BJERGE: TerrainEntry = {
  id: "mols-bjerge",
  nameZh: "莫尔斯山地",
  nameEn: "Mols Bjerge",
  category: "hills",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "阿格里巴内霍伊", lon: 10.5833, lat: 56.2667, elevation: 137, kind: "peak" },
  bbox: [10.45, 56.20, 10.72, 56.35],
  label: { lon: 10.58, lat: 56.27, rotation: 0 },
  source: "莫尔斯山地：位于于特兰半岛东部于兰半岛（迪厄斯兰）的末次冰期终碛丘陵地带，地形起伏是丹麦本土少有的明显丘陵景观，1960年代起划为自然保护区（丹麦自然署 Naturstyrelsen）",
};

const REBILD_BAKKER: TerrainEntry = {
  id: "rebild-bakker",
  nameZh: "雷比尔丘陵",
  nameEn: "Rebild Bakker",
  category: "hills",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "雷比尔丘陵观景点", lon: 9.7461, lat: 56.8339, elevation: 90, kind: "escarpment" },
  bbox: [9.62, 56.78, 9.88, 56.90],
  label: { lon: 9.75, lat: 56.85, rotation: 0 },
  source: "雷比尔丘陵：日德兰半岛北部一片覆盖石楠荒原的冰碛丘陵，毗邻罗尔森林（丹麦面积最大的森林），1912年由旅美丹麦人捐赠建成丹麦第一座国家公园式保护区（丹麦自然署）",
};

const BORNHOLM_ALMINDINGEN: TerrainEntry = {
  id: "bornholm-almindingen",
  nameZh: "博恩霍尔姆·阿尔明丁根高地",
  nameEn: "Bornholm / Almindingen",
  category: "hills",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "骑士峰", lon: 14.8500, lat: 55.1167, elevation: 162, kind: "peak" },
  bbox: [14.75, 55.05, 14.98, 55.20],
  label: { lon: 14.85, lat: 55.13, rotation: 0 },
  source: "博恩霍尔姆岛中部的阿尔明丁根森林高地：全岛约三分之二基岩为花岗岩，是丹麦本土（月石灰岩地区外）唯一可见花岗岩出露的地方，骑士峰海拔162米为全岛最高点（GEUS / 丹麦自然署）",
};

const MONS_KLINT: TerrainEntry = {
  id: "mons-klint",
  nameZh: "默恩岛白垩崖",
  nameEn: "Møns Klint",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "默恩崖观景台", lon: 12.5372, lat: 54.9581, elevation: 128, kind: "escarpment" },
  bbox: [12.48, 54.94, 12.62, 54.99],
  axis: [[12.50, 54.94], [12.58, 54.98]],
  label: { lon: 12.55, lat: 54.97, rotation: -30 },
  source: "默恩岛白垩崖：约7000万年前晚白垩世沉积的石灰质白垩层构成，末次冰期冰川挤压形成褶皱构造，崖顶最高处海拔约128米，是丹麦最高的海岸崖壁（GEUS）",
};

const STEVNS_KLINT: TerrainEntry = {
  id: "stevns-klint",
  nameZh: "斯特文斯崖",
  nameEn: "Stevns Klint",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "赫耶鲁普老教堂", lon: 12.4500, lat: 55.2833, elevation: 41, kind: "escarpment" },
  bbox: [12.40, 55.24, 12.52, 55.33],
  axis: [[12.42, 55.25], [12.48, 55.32]],
  label: { lon: 12.45, lat: 55.29, rotation: -50 },
  source: "斯特文斯崖：崖壁中一层数厘米厚的暗色黏土层（当地称“鱼粘土”）记录了6600万年前白垩纪—古近纪灭绝事件的地质证据，2014年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const SKAGEN_ODDE: TerrainEntry = {
  id: "skagen-odde",
  nameZh: "斯卡恩岬角",
  nameEn: "Skagen Odde",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "格伦角", lon: 10.6333, lat: 57.7500, elevation: 3, kind: "escarpment" },
  bbox: [10.45, 57.55, 10.70, 57.76],
  axis: [[10.50, 57.60], [10.63, 57.75]],
  label: { lon: 10.58, lat: 57.68, rotation: -70 },
  source: "斯卡恩岬角：日德兰半岛最北端一条持续向海延伸的沙嘴，约一万年来由沿岸流搬运沙粒堆积而成，尖端格伦角是北海与卡特加特海峡水流交汇处（GEUS）",
};

const RUBJERG_KNUDE: TerrainEntry = {
  id: "rubjerg-knude",
  nameZh: "鲁比耶克努德沙丘",
  nameEn: "Rubjerg Knude",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "鲁比耶克努德灯塔", lon: 9.7692, lat: 57.4494, elevation: 60, kind: "dune" },
  bbox: [9.70, 57.40, 9.85, 57.50],
  label: { lon: 9.77, lat: 57.45, rotation: 0 },
  source: "鲁比耶克努德：日德兰半岛北海沿岸一处活动沙丘，19世纪末以来持续向内陆迁移，1900年建成的灯塔因沙丘掩埋于2019年被整体迁移，是丹麦风蚀沙丘地貌的典型样本（丹麦自然署）",
};

const LIMFJORD: TerrainEntry = {
  id: "limfjord",
  nameZh: "利姆海峡",
  nameEn: "Limfjord",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "勒斯特厄", lon: 9.2564, lat: 56.9711, elevation: 2, kind: "city" },
  bbox: [8.10, 56.60, 10.60, 57.20],
  axis: [[8.20, 56.70], [10.50, 57.05]],
  viewScale: 1.6,
  label: { lon: 9.30, lat: 56.85, rotation: 0 },
  source: "利姆海峡：横贯日德兰半岛北部的狭长水道，将文茨赛尔—提半岛与半岛主体分隔，1825年一次风暴潮冲开西端与北海的永久通道，此前该水道曾多次因泥沙淤积而与海洋断开（GEUS）",
};

const ISEFJORD_ROSKILDE_FJORD: TerrainEntry = {
  id: "isefjord-roskilde-fjord",
  nameZh: "伊瑟峡湾与罗斯基勒峡湾",
  nameEn: "Isefjord & Roskilde Fjord",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "罗斯基勒", lon: 12.0803, lat: 55.6415, elevation: 5, kind: "city" },
  bbox: [11.65, 55.55, 12.15, 55.95],
  axis: [[11.70, 55.90], [12.08, 55.65]],
  viewScale: 1.3,
  label: { lon: 11.90, lat: 55.75, rotation: -40 },
  source: "伊瑟峡湾与罗斯基勒峡湾：西兰岛北部一条深切入内陆约40公里的峡湾水系，罗斯基勒峡湾为其东侧分支，末次冰期冰川侵蚀塑造了峡湾轮廓（GEUS）",
};

const WADDEN_SEA_DK: TerrainEntry = {
  id: "wadden-sea-dk",
  nameZh: "瓦登海（丹麦段）",
  nameEn: "Wadden Sea (Danish section)",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "勒姆岛", lon: 8.5500, lat: 55.1667, elevation: 2, kind: "island" },
  bbox: [8.30, 54.90, 8.80, 55.45],
  viewScale: 1.2,
  label: { lon: 8.55, lat: 55.15, rotation: 0 },
  source: "瓦登海丹麦段：北海沿岸潮间带滩涂与堰洲岛系统的最北端部分，与德国、荷兰段共同构成世界最大的连续潮间带生态系统，2014年丹麦段并入联合国教科文组织世界遗产瓦登海名录（UNESCO）",
};

const BORNHOLM_GRANITE_COAST: TerrainEntry = {
  id: "bornholm-granite-coast",
  nameZh: "博恩霍尔姆花岗岩海岸",
  nameEn: "Bornholm Granite Coast",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "哈默伦岬角", lon: 14.7833, lat: 55.2667, elevation: 30, kind: "escarpment" },
  bbox: [14.70, 55.20, 14.92, 55.32],
  axis: [[14.72, 55.30], [14.86, 55.22]],
  label: { lon: 14.79, lat: 55.27, rotation: -60 },
  source: "博恩霍尔姆花岗岩海岸：岛屿北端哈默伦岬角由前寒武纪花岗岩构成陡峭崖壁，是丹麦全境唯一大面积裸露花岗岩基岩的海岸，与南侧圣地崖等花岗岩海岸共同构成岛屿独特的地质景观（GEUS）",
};

const SILKEBORG_LAKE_DISTRICT: TerrainEntry = {
  id: "silkeborg-lake-district",
  nameZh: "锡尔克堡湖区",
  nameEn: "Silkeborg Lake District",
  category: "lake",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "尤尔湖", lon: 9.6167, lat: 56.1500, elevation: 24, kind: "lake" },
  bbox: [9.45, 56.05, 9.78, 56.25],
  axis: [[9.48, 56.08], [9.75, 56.20]],
  label: { lon: 9.60, lat: 56.15, rotation: -30 },
  source: "锡尔克堡湖区：丹麦最长河流古德诺河中游沿岸串联的一系列冰蚀湖泊，是丹麦本土唯一的湖区式地貌集群，与相邻的日德兰中部丘陵共同构成丹麦地势起伏最明显的区域（GEUS）",
};

const ARRESOE: TerrainEntry = {
  id: "arresoe",
  nameZh: "阿勒瑟湖",
  nameEn: "Arresø",
  category: "lake",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "阿勒瑟湖", lon: 12.0667, lat: 56.0167, elevation: 3, kind: "lake" },
  bbox: [11.95, 55.98, 12.20, 56.08],
  label: { lon: 12.07, lat: 56.02, rotation: 0 },
  source: "阿勒瑟湖：丹麦面积最大的湖泊，约40平方公里，末次冰期冰川侵蚀形成的浅水湖盆，湖水经河道注入伊瑟峡湾（GEUS）",
};

const FURESOE: TerrainEntry = {
  id: "furesoe",
  nameZh: "菲于瑟湖",
  nameEn: "Furesø",
  category: "lake",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "菲于瑟湖", lon: 12.3667, lat: 55.8000, elevation: 19, kind: "lake" },
  bbox: [12.30, 55.75, 12.42, 55.85],
  label: { lon: 12.37, lat: 55.80, rotation: 0 },
  source: "菲于瑟湖：丹麦水深最深的湖泊，最大水深约37.8米，位于哥本哈根北郊，湖盆由末次冰期冰川挖蚀形成的深槽积水而成（GEUS）",
};

const GUDENAA_RIVER: TerrainEntry = {
  id: "gudenaa-river",
  nameZh: "古德诺河",
  nameEn: "Gudenå",
  category: "river",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "兰讷斯", lon: 10.0369, lat: 56.4607, elevation: 5, kind: "city" },
  bbox: [9.30, 55.90, 10.20, 56.60],
  axis: [[9.35, 55.93], [10.15, 56.55]],
  viewScale: 1.3,
  label: { lon: 9.75, lat: 56.25, rotation: -50 },
  source: "古德诺河：丹麦最长的河流，全长约158公里，发源于日德兰中部高地附近，中游流经锡尔克堡湖区，最终在兰讷斯附近汇入兰讷斯峡湾（GEUS）",
};

const SYDFYNSKE_OEHAV_AEROE: TerrainEntry = {
  id: "sydfynske-oehav-aeroe",
  nameZh: "南菲英群岛·埃勒岛",
  nameEn: "South Funen Archipelago / Ærø",
  category: "island",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "埃勒斯考宾", lon: 10.4083, lat: 54.8908, elevation: 5, kind: "city" },
  bbox: [10.10, 54.75, 10.75, 55.05],
  label: { lon: 10.40, lat: 54.90, rotation: 0 },
  source: "南菲英群岛：菲英岛以南由数十座小岛组成的群岛，末次冰期终碛丘陵部分被海水淹没后形成岛链地貌；埃勒岛的埃勒斯考宾保留有丹麦最完整的18世纪木骨石砌小镇街区（丹麦自然署）",
};

const LAESOE: TerrainEntry = {
  id: "laesoe",
  nameZh: "累索岛",
  nameEn: "Læsø",
  category: "island",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "拜鲁姆", lon: 11.0167, lat: 57.2833, elevation: 3, kind: "city" },
  bbox: [10.85, 57.20, 11.20, 57.35],
  label: { lon: 11.02, lat: 57.28, rotation: 0 },
  source: "累索岛：卡特加特海峡中丹麦面积最大的岛屿，岛屿地表以低平沙质冰碛台地为主，历史上因近海盐泉发达制盐业，岛上传统海藻苫顶民居是丹麦独有的建筑形式（丹麦自然署）",
};

const JUTLAND_HEATH: TerrainEntry = {
  id: "jutland-heath",
  nameZh: "日德兰石楠荒原",
  nameEn: "Jutland Heath",
  category: "grassland",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "兰伯尔荒原", lon: 9.1000, lat: 55.6333, elevation: 45, kind: "grassland" },
  bbox: [8.95, 55.55, 9.30, 55.75],
  viewScale: 1.2,
  label: { lon: 9.12, lat: 55.65, rotation: 0 },
  source: "日德兰石楠荒原：19世纪以前曾覆盖日德兰半岛西部大片贫瘠沙质冰水沉积平原，兰伯尔荒原是丹麦现存面积最大的连片石楠荒原残余，19世纪后大部分荒原经排水与植树改造为农林用地（丹麦自然署）",
};

const ANHOLT_OERKENEN: TerrainEntry = {
  id: "anholt-oerkenen",
  nameZh: "安霍尔特岛·“沙漠”",
  nameEn: "Anholt / \"Ørkenen\" (the Desert)",
  category: "grassland",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "沙漠（Ørkenen）", lon: 11.5667, lat: 56.7167, elevation: 8, kind: "dune" },
  bbox: [11.50, 56.68, 11.65, 56.75],
  label: { lon: 11.57, lat: 56.71, rotation: 0 },
  source: "安霍尔特岛东部约四分之三的面积覆盖着当地称为“沙漠”（Ørkenen）的地衣石楠荒原，实为16世纪岛上森林被砍伐后风力搬运沙丘上发育的地衣群落，并非气候意义上的真正沙漠，是北欧最大的地衣荒原（丹麦自然署）",
};

const STORE_VILDMOSE: TerrainEntry = {
  id: "store-vildmose",
  nameZh: "大维尔德沼原",
  nameEn: "Store Vildmose",
  category: "basin",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "大维尔德沼原自然保护区", lon: 9.8833, lat: 57.1667, elevation: 5, kind: "city" },
  bbox: [9.70, 57.10, 10.05, 57.25],
  viewScale: 1.2,
  label: { lon: 9.88, lat: 57.18, rotation: 0 },
  source: "大维尔德沼原：日德兰半岛北部一片曾经的大面积隆起泥炭沼泽洼地，20世纪初通过排水工程改造为农业用地，现存部分区域已恢复为湿地自然保护区（丹麦自然署）",
};

const WEST_JUTLAND_OUTWASH_PLAIN: TerrainEntry = {
  id: "west-jutland-outwash-plain",
  nameZh: "西日德兰外冲平原",
  nameEn: "West Jutland Outwash Plain",
  category: "plain",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "斯克恩河三角洲", lon: 8.3167, lat: 55.9667, elevation: 2, kind: "delta" },
  bbox: [8.10, 55.70, 8.90, 56.20],
  viewScale: 1.3,
  label: { lon: 8.45, lat: 55.95, rotation: 0 },
  source: "西日德兰外冲平原：末次冰期主冰盖边缘融水携带的沙砾沉积形成的大片低平砂质平原，斯克恩河（丹麦流量最大的河流）在此形成三角洲注入灵讷峡湾，20世纪初曾大规模改道排干沿岸湿地（GEUS）",
};

const LOLLAND_FALSTER_LOWLAND: TerrainEntry = {
  id: "lolland-falster-lowland",
  nameZh: "洛兰—法尔斯特低地",
  nameEn: "Lolland-Falster Lowland",
  category: "plain",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "尼克宾法尔斯特", lon: 11.8667, lat: 54.7667, elevation: 3, kind: "city" },
  bbox: [11.30, 54.55, 12.30, 54.95],
  viewScale: 1.4,
  label: { lon: 11.75, lat: 54.75, rotation: 0 },
  source: "洛兰—法尔斯特低地：丹麦最南端两座岛屿构成的低平农业区，海拔多在数米以内，部分沿海低地历史上经堤坝围垦形成，是丹麦重要的甜菜与谷物产区（GEUS）",
};

const FUNEN_ROLLING_FARMLAND: TerrainEntry = {
  id: "funen-rolling-farmland",
  nameZh: "菲英岛缓丘农田",
  nameEn: "Funen Rolling Farmland",
  category: "plain",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "欧登塞", lon: 10.3883, lat: 55.3959, elevation: 15, kind: "city" },
  bbox: [9.90, 55.05, 10.80, 55.60],
  viewScale: 1.3,
  label: { lon: 10.35, lat: 55.30, rotation: 0 },
  source: "菲英岛缓丘农田：末次冰期年轻终碛地貌经长期农业开垦形成的缓丘农田景观，土壤肥沃、田块规整，素有“丹麦花园”之称（丹麦自然署）",
};

const GREJSDALEN: TerrainEntry = {
  id: "grejsdalen",
  nameZh: "格赖斯河谷",
  nameEn: "Grejsdalen",
  category: "valley",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "格赖斯河谷", lon: 9.5333, lat: 55.7333, elevation: 20, kind: "gorge" },
  bbox: [9.45, 55.68, 9.65, 55.80],
  axis: [[9.48, 55.78], [9.60, 55.70]],
  label: { lon: 9.53, lat: 55.74, rotation: -40 },
  source: "格赖斯河谷：末次冰期冰下融水沿冰盖边缘侵蚀形成的隧道谷，谷壁相对陡峭、谷底森林茂密，是日德兰半岛地势起伏较明显的隧道谷地貌代表（GEUS）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 丹麦 =====
  CENTRAL_JUTLAND_HIGHLANDS, MOLS_BJERGE, REBILD_BAKKER, BORNHOLM_ALMINDINGEN,
  MONS_KLINT, STEVNS_KLINT, SKAGEN_ODDE, RUBJERG_KNUDE, LIMFJORD, ISEFJORD_ROSKILDE_FJORD,
  WADDEN_SEA_DK, BORNHOLM_GRANITE_COAST,
  SILKEBORG_LAKE_DISTRICT, ARRESOE, FURESOE,
  GUDENAA_RIVER,
  SYDFYNSKE_OEHAV_AEROE, LAESOE,
  JUTLAND_HEATH, ANHOLT_OERKENEN,
  STORE_VILDMOSE,
  WEST_JUTLAND_OUTWASH_PLAIN, LOLLAND_FALSTER_LOWLAND, FUNEN_ROLLING_FARMLAND,
  GREJSDALEN,
];
