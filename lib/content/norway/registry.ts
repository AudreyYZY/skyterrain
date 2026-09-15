import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 挪威（regionId: "europe"，country: "norway"）
// 坐标据 NGU（挪威地质调查局）/ Miljødirektoratet（环境署·国家公园）/
// Kartverket（地图与地名局）/ NVE（水资源能源局）/ UNESCO；只做挪威本土，
// 不含斯瓦尔巴与扬马延；地名挪威语为主，北萨米语并列
// ============================================================

const SCANDINAVIAN_MOUNTAINS_NORWAY: TerrainEntry = {
  id: "scandinavian-mountains-norway",
  nameZh: "斯堪的纳维亚山脉（挪威段）",
  nameEn: "Scandinavian Mountains (Norway)",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "加尔赫皮根峰（Galdhøpiggen，2469m，全脉最高点）", lon: 8.3125, lat: 61.6364, elevation: 2469, kind: "peak" },
  bbox: [4.5, 58.3, 25.5, 69.8],
  axis: [[6.0, 58.5], [24.0, 69.5]],
  viewScale: 2.6,
  label: { lon: 12.0, lat: 64.5, rotation: -38 },
  source: "斯堪的纳维亚山脉（挪威语 Kjølen / Den skandinaviske fjellkjede）：纵贯挪威全境的山脉骨架，由约4亿年前加里东造山带的岩石构成，其上是长期夷平的古夷平面（paleic surface）；今日高度部分由新近纪以来的抬升重新塑造，具体机制学界仍有讨论；与瑞典共有（NGU）",
};

const JOTUNHEIMEN: TerrainEntry = {
  id: "jotunheimen",
  nameZh: "尤通黑门山",
  nameEn: "Jotunheimen",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "耶恩湖与贝赛根山脊（Gjende / Besseggen）", lon: 8.790, lat: 61.497, elevation: 984, kind: "lake" },
  bbox: [7.55, 61.20, 8.95, 61.80],
  axis: [[7.65, 61.35], [8.85, 61.65]],
  viewFrom: 200,
  viewScale: 1.5,
  label: { lon: 8.30, lat: 61.55, rotation: -12 },
  pois: [
    { name: "加尔赫皮根峰（Galdhøpiggen，2469m）", lon: 8.3125, lat: 61.6364, note: "挪威与北欧最高峰" },
    { name: "斯卡加斯特山（Store Skagastølstind，2405m）", lon: 7.812, lat: 61.475, note: "许伦加内群峰，北欧第三高" },
  ],
  source: "尤通黑门（挪威语意为“巨人之家”，1862年诗人 Aasmund Olavsson Vinje 定名）：挪威最高的一片山地，含全国29座最高峰、逾250座逾1900m 的山峰；主要由坚硬的辉长岩构成，加里东造山期成山、后经冰川深切；冰川多在西坡；尤通黑门国家公园1980年设立（Miljødirektoratet / NGU）",
};

const HARDANGERVIDDA: TerrainEntry = {
  id: "hardangervidda",
  nameZh: "哈当厄高原",
  nameEn: "Hardangervidda",
  category: "plateau",
  regionId: "europe",
  country: "norway",
  landmark: { name: "哈当厄冰帽（Hardangerjøkulen）", lon: 7.167, lat: 60.548, elevation: 1863, kind: "escarpment" },
  bbox: [6.75, 59.80, 8.20, 60.75],
  viewScale: 2.2,
  label: { lon: 7.50, lat: 60.25, rotation: 0 },
  source: "哈当厄高原：面积约6500 km²、平均海拔约1100m 的山地高原，是北欧最大的同类高原；地表是一片抬升的古夷平面，最高点桑德弗洛加（Sandfloegga）1721m；西缘有哈当厄冰帽，边坡被瀑布与冰蚀谷切割；欧洲最大的野生驯鹿群之一在此活动；哈当厄高原国家公园（Miljødirektoratet）",
};

const FINNMARKSVIDDA: TerrainEntry = {
  id: "finnmarksvidda",
  nameZh: "芬马克高原",
  nameEn: "Finnmarksvidda / Finnmárkkoduottar",
  category: "plateau",
  regionId: "europe",
  country: "norway",
  landmark: { name: "考托凯诺一带（Kautokeino / Guovdageaidnu）", lon: 23.040, lat: 69.011, elevation: 307, kind: "escarpment" },
  bbox: [21.8, 68.5, 26.6, 70.0],
  axis: [[22.0, 68.7], [26.2, 69.8]],
  viewScale: 2.4,
  label: { lon: 24.0, lat: 69.2, rotation: -20 },
  source: "芬马克高原（北萨米语 Finnmárkkoduottar）：挪威最大的高原，面积逾22000 km²、海拔约300—500m，是前寒武纪基岩长期风化剥蚀形成的低缓磨蚀面，散布大量湖泊与沼泽；广泛记载的土地利用是萨米人的驯鹿放牧；冬季严寒、盛夏多蚊（NGU / Britannica）",
};

const SOGNEFJORD: TerrainEntry = {
  id: "sognefjord",
  nameZh: "松恩峡湾",
  nameEn: "Sognefjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "松恩峡湾内段（巴莱斯特兰 / 维克一带）", lon: 6.75, lat: 61.16, elevation: 0, kind: "escarpment" },
  bbox: [4.75, 60.85, 7.85, 61.40],
  axis: [[4.90, 61.05], [7.30, 61.18]],
  viewScale: 1.8,
  label: { lon: 6.10, lat: 61.20, rotation: -6 },
  pois: [
    { name: "纳柔依峡湾（Nærøyfjorden）", lon: 6.90, lat: 60.90, note: "松恩峡湾的一条支汊，世界遗产" },
  ],
  source: "松恩峡湾：挪威最长（约205km）、最深（约1308m）的峡湾，有“峡湾之王”之称；冰川沿断裂带与古河谷反复下切、过度加深而成，内段仍深逾1000m；两侧支汊延伸入尤通黑门与约斯特达尔冰川脚下（Kartverket / NGU）",
};

const GLOMMA: TerrainEntry = {
  id: "glomma",
  nameZh: "格洛马河",
  nameEn: "Glomma",
  category: "river",
  regionId: "europe",
  country: "norway",
  landmark: { name: "格洛马河·厄斯特达尔段（埃尔沃吕姆一带）", lon: 11.56, lat: 60.88, elevation: 185, kind: "meander" },
  bbox: [10.3, 59.20, 11.95, 62.70],
  axis: [[11.30, 62.55], [10.95, 59.25]],
  viewScale: 2.0,
  label: { lon: 11.10, lat: 61.0, rotation: -78 },
  source: "格洛马河（挪威语 Glomma / Glåma）：挪威最长、水量最大的河，长约620km，流域约42000 km²、约占本土面积13%；从勒罗斯附近的奥尔松湖流出，沿厄斯特达尔南下，经厄耶伦湖在弗雷德里克斯塔注入奥斯陆峡湾（NVE / Kartverket）",
};

const LOFOTEN: TerrainEntry = {
  id: "lofoten",
  nameZh: "罗弗敦群岛",
  nameEn: "Lofoten",
  category: "island",
  regionId: "europe",
  country: "norway",
  landmark: { name: "莫斯克内斯岛·雷讷一带（“罗弗敦墙”）", lon: 13.10, lat: 67.94, elevation: 400, kind: "island" },
  bbox: [12.0, 67.70, 16.6, 68.50],
  axis: [[12.9, 67.85], [16.3, 68.40]],
  viewFrom: 200,
  viewScale: 1.6,
  label: { lon: 14.4, lat: 68.25, rotation: -30 },
  pois: [
    { name: "莫斯克流（Moskstraumen）", lon: 12.95, lat: 67.89, note: "群岛南端的强潮流，历史上“大漩涡 Maelstrom”一词即源于此" },
  ],
  source: "罗弗敦群岛：挪威海中一列陡峭山岛，是一条大体被海水淹没、经强烈剥蚀的山脊出露的顶部，岩石以前寒武纪片麻岩、花岗岩为主，沿加里东造山期的断层抬升；山峰常直逼海面形成“罗弗敦墙”；南端有莫斯克流（NGU）",
};

const JAEREN: TerrainEntry = {
  id: "jaeren",
  nameZh: "耶伦",
  nameEn: "Jæren",
  category: "plain",
  regionId: "europe",
  country: "norway",
  landmark: { name: "耶伦低地（克莱普 / 奥勒一带）", lon: 5.55, lat: 58.77, elevation: 20, kind: "escarpment" },
  bbox: [5.35, 58.42, 6.10, 59.10],
  viewScale: 1.6,
  label: { lon: 5.60, lat: 58.72, rotation: 0 },
  source: "耶伦：挪威最大的一片低平陆地，位于西南端；坐落在一道延入海中的大终碛之上，下伏片麻岩与花岗岩，表层是冰川带来的砂与黏土，土壤肥沃、是挪威主要农牧区之一；海岸“耶伦海滩”（Jærstrendene）长约70km，砂滩、砾滩与碛石海岸相间，为景观保护区（NGU / Miljødirektoratet）",
};

const DOVREFJELL: TerrainEntry = {
  id: "dovrefjell",
  nameZh: "多夫勒山",
  nameEn: "Dovrefjell",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "斯诺赫塔峰（Snøhetta，2286m）", lon: 9.267, lat: 62.332, elevation: 2286, kind: "peak" },
  bbox: [8.30, 62.05, 9.95, 62.70],
  axis: [[8.45, 62.25], [9.85, 62.45]],
  viewScale: 1.7,
  label: { lon: 9.10, lat: 62.40, rotation: -14 },
  source: "多夫勒山：挪威中部一片东西向约160km 的山地高原，是东挪威与特伦德拉格之间的天然屏障，也横跨斯堪的纳维亚主分水岭；最高点斯诺赫塔峰2286m；麝牛1930年代从格陵兰引入、二战后重新引入，多夫勒是挪威唯一能见到麝牛的地方；多夫勒山-松达尔山国家公园是挪威最大的连片保护区（Miljødirektoratet）",
};

const RONDANE: TerrainEntry = {
  id: "rondane",
  nameZh: "龙达讷山",
  nameEn: "Rondane",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "龙达讷宫（Rondeslottet，2178m）", lon: 9.816, lat: 61.906, elevation: 2178, kind: "peak" },
  bbox: [9.55, 61.70, 10.15, 62.10],
  axis: [[9.65, 61.78], [10.05, 62.02]],
  viewScale: 1.6,
  label: { lon: 9.85, lat: 61.95, rotation: -20 },
  source: "龙达讷山：1962年设立、挪威第一个国家公园，10 座逾2000m 的山峰围着大片高原；基岩是约5—6亿年前浅海沉积后变质的石英岩类，冰期的冰川刻出圆缓的峰顶、冰斗和 U 形谷；重要的野生驯鹿栖息地；易卜生《培尔·金特》部分场景设在龙达讷（Miljødirektoratet）",
};

const TROLLHEIMEN: TerrainEntry = {
  id: "trollheimen",
  nameZh: "巨魔山",
  nameEn: "Trollheimen",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "因讷达尔谷与因讷达尔塔（Innerdalstårnet，1394m）", lon: 8.870, lat: 62.716, elevation: 900, kind: "escarpment" },
  bbox: [8.60, 62.55, 9.55, 62.90],
  axis: [[8.75, 62.62], [9.40, 62.82]],
  viewScale: 1.5,
  label: { lon: 9.10, lat: 62.78, rotation: -16 },
  source: "巨魔山：特伦德拉格与诺尔穆勒之间的山地，处在海洋性与大陆性气候的过渡带，岩性多变——西部岩石坚硬、山形尖峭（如“大教堂”般的因讷达尔塔），东部多片岩、山形浑圆；最高点大特罗拉峰约1850m；因讷达尔1967年成为挪威第一个自然保护区；巨魔山景观保护区（Miljødirektoratet）",
};

const JOSTEDALSBREEN: TerrainEntry = {
  id: "jostedalsbreen",
  nameZh: "约斯特达尔冰川",
  nameEn: "Jostedalsbreen",
  category: "valley",
  regionId: "europe",
  country: "norway",
  landmark: { name: "约斯特达尔冰原（尼加冰舌 Nigardsbreen 上方）", lon: 7.050, lat: 61.660, elevation: 1900, kind: "escarpment" },
  bbox: [6.65, 61.30, 7.55, 61.95],
  axis: [[6.85, 61.40], [7.25, 61.90]],
  viewScale: 1.7,
  label: { lon: 7.05, lat: 61.62, rotation: -70 },
  pois: [
    { name: "尼加冰舌（Nigardsbreen）", lon: 7.133, lat: 61.717, note: "最著名的冰舌之一，下伸至谷底湖" },
    { name: "布里克斯达尔冰舌（Briksdalsbreen）", lon: 6.895, lat: 61.664, note: "1990年代曾一度前进、后快速退缩" },
  ],
  source: "约斯特达尔冰川：欧洲大陆最大的冰川，冰盖面积约458 km²（2022年），呈南北向的高原冰帽，向四周谷地伸出几十条冰舌（尼加、布里克斯达尔等）；它并非上一次冰期的残留——约8000年前曾完全消融，之后在全新世重新形成；约斯特达尔冰川国家公园；NVE 长期监测其物质平衡（NVE / Norsk Polarinstitutt）",
};

const FOLGEFONNA: TerrainEntry = {
  id: "folgefonna",
  nameZh: "佛尔格冰川",
  nameEn: "Folgefonna",
  category: "valley",
  regionId: "europe",
  country: "norway",
  landmark: { name: "南佛尔格冰帽（Søndre Folgefonna）", lon: 6.350, lat: 60.030, elevation: 1550, kind: "escarpment" },
  bbox: [6.10, 59.80, 6.60, 60.35],
  axis: [[6.30, 59.85], [6.40, 60.30]],
  viewScale: 1.6,
  label: { lon: 6.35, lat: 60.05, rotation: -78 },
  source: "佛尔格冰川：佛尔格半岛上的三块温冰帽（北、中、南），合计面积约207 km²、最厚近400m，是挪威本土第三大冰川；夹在哈当厄峡湾和挪威海之间，属海洋性冰川，降雪极丰；佛尔格冰川国家公园（NVE / Miljødirektoratet）",
};

const SVARTISEN: TerrainEntry = {
  id: "svartisen",
  nameZh: "斯瓦蒂森冰川",
  nameEn: "Svartisen",
  category: "valley",
  regionId: "europe",
  country: "norway",
  landmark: { name: "西斯瓦蒂森（Vestisen）与恩加冰舌（Engabreen）", lon: 13.800, lat: 66.640, elevation: 1200, kind: "escarpment" },
  bbox: [13.45, 66.35, 14.30, 66.90],
  axis: [[13.60, 66.45], [14.10, 66.85]],
  viewScale: 1.7,
  label: { lon: 13.85, lat: 66.68, rotation: -60 },
  pois: [
    { name: "恩加冰舌（Engabreen）", lon: 13.720, lat: 66.660, note: "冰舌前缘一度下伸到近海平面，是欧洲大陆位置最低的冰川末端之一；NVE 在其下设有冰下实验室" },
  ],
  source: "斯瓦蒂森（“黑冰”）：挪威本土第二大冰川，分为西斯瓦蒂森与东斯瓦蒂森两片，合计约370 km²，位于诺尔兰郡；北极圈从冰川南部穿过；恩加冰舌一度下伸到近海平面；NVE 自1970年代监测，并在恩加冰舌下设有冰下实验室（NVE）",
};

const GEIRANGERFJORD: TerrainEntry = {
  id: "geirangerfjord",
  nameZh: "盖朗厄尔峡湾",
  nameEn: "Geirangerfjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "盖朗厄尔峡湾（“七姊妹”瀑布一带）", lon: 7.100, lat: 62.105, elevation: 0, kind: "escarpment" },
  bbox: [6.95, 62.02, 7.30, 62.18],
  axis: [[7.00, 62.10], [7.28, 62.10]],
  viewScale: 1.3,
  label: { lon: 7.14, lat: 62.11, rotation: -4 },
  source: "盖朗厄尔峡湾：松恩峡湾支系斯托尔峡湾的一条约15km 长的支汊，两侧结晶岩壁高达约1400m、水深达约海平面下500m，悬谷瀑布（“七姊妹”“求婚者”等）成排跌下；与纳柔依峡湾同列“西挪威峡湾”世界遗产（UNESCO / 2005）",
};

const NAEROYFJORD: TerrainEntry = {
  id: "naeroyfjord",
  nameZh: "纳柔依峡湾",
  nameEn: "Nærøyfjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "纳柔依峡湾（古德旺恩一带）", lon: 6.900, lat: 60.905, elevation: 0, kind: "escarpment" },
  bbox: [6.78, 60.83, 7.02, 61.10],
  axis: [[6.87, 60.86], [6.93, 61.08]],
  viewScale: 1.3,
  label: { lon: 6.86, lat: 60.97, rotation: -78 },
  source: "纳柔依峡湾：松恩峡湾的一条支汊，长约17km，最窄处仅约250m，两岸岩壁高逾1600m；被视为峡湾景观的“原型”，与盖朗厄尔峡湾同列“西挪威峡湾”世界遗产（UNESCO / 2005）",
};

const HARDANGERFJORD: TerrainEntry = {
  id: "hardangerfjord",
  nameZh: "哈当厄峡湾",
  nameEn: "Hardangerfjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "哈当厄峡湾内段（艾德峡湾 / 金萨维克，背靠哈当厄高原）", lon: 6.720, lat: 60.420, elevation: 0, kind: "escarpment" },
  bbox: [5.30, 59.70, 7.15, 60.60],
  axis: [[5.45, 59.85], [7.05, 60.45]],
  viewScale: 1.9,
  label: { lon: 6.20, lat: 60.20, rotation: -30 },
  source: "哈当厄峡湾：挪威第二长的峡湾，自大西洋向内陆伸约179km，直抵哈当厄高原脚下；主干分出瑟尔峡湾、艾德峡湾等支汊；峡湾内坡因气候温和多果园，是挪威著名的水果产区（Kartverket / NGU）",
};

const LYSEFJORD: TerrainEntry = {
  id: "lysefjord",
  nameZh: "吕瑟峡湾",
  nameEn: "Lysefjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "布道石（Preikestolen，峡湾北岸约604m 高的水平岩台）", lon: 6.190, lat: 58.986, elevation: 604, kind: "escarpment" },
  bbox: [6.05, 58.90, 6.80, 59.08],
  axis: [[6.10, 58.98], [6.75, 59.03]],
  viewScale: 1.4,
  label: { lon: 6.40, lat: 59.02, rotation: -6 },
  pois: [
    { name: "谢拉格（Kjerag）与卡石（Kjeragbolten）", lon: 6.593, lat: 59.035, note: "峡湾南岸约1000m 的岩壁，卡石是卡在裂缝里的一块巨砾" },
  ],
  source: "吕瑟峡湾：斯塔万格东北一条长约42km、深达约海平面下400m 的花岗-片麻岩峡湾，两岸岩壁陡直、局部逾1000m；北岸的布道石是一块水平节理花岗岩形成的平顶悬崖，约在海平面上604m（Kartverket / NGU）",
};

const TRONDHEIMSFJORD: TerrainEntry = {
  id: "trondheimsfjord",
  nameZh: "特隆赫姆峡湾",
  nameEn: "Trondheimsfjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "特隆赫姆峡湾（特隆赫姆与蒙克岛一带）", lon: 10.35, lat: 63.47, elevation: 0, kind: "escarpment" },
  bbox: [9.55, 63.30, 11.45, 64.20],
  axis: [[9.70, 63.60], [11.35, 64.05]],
  viewScale: 1.9,
  label: { lon: 10.60, lat: 63.75, rotation: -34 },
  source: "特隆赫姆峡湾：挪威第三长的峡湾，长约130km、最深约617m；比西部的峡湾宽阔得多，主段全年不冻；生物生产力居挪威峡湾之首，记录鱼类逾90种、深水有冷水珊瑚（Lophelia），沿岸有多条挪威顶级鲑鱼河；自维京时代就是重要水道（Kartverket / 海洋研究所）",
};

const ROMSDALEN: TerrainEntry = {
  id: "romsdalen",
  nameZh: "罗姆斯达尔谷",
  nameEn: "Romsdalen",
  category: "valley",
  regionId: "europe",
  country: "norway",
  landmark: { name: "巨魔墙（Trollveggen）与劳马河谷底", lon: 7.760, lat: 62.503, elevation: 120, kind: "escarpment" },
  bbox: [7.55, 62.30, 8.10, 62.62],
  axis: [[7.68, 62.58], [7.95, 62.32]],
  viewFrom: 270,
  viewScale: 1.4,
  label: { lon: 7.80, lat: 62.48, rotation: -70 },
  source: "罗姆斯达尔谷：劳马河切过的一条深 U 形谷，西侧的巨魔墙（Trollveggen）是欧洲最高的垂直岩壁，从谷底到巨魔诸峰顶落差约1700m、崖面上部外倾近50m；谷底并行着劳马河、E136 公路和劳马铁路（NGU）",
};

const GUDBRANDSDALEN: TerrainEntry = {
  id: "gudbrandsdalen",
  nameZh: "古德布兰河谷",
  nameEn: "Gudbrandsdalen",
  category: "valley",
  regionId: "europe",
  country: "norway",
  landmark: { name: "古德布兰河谷·劳根河中段（南弗龙 / 温斯特拉一带）", lon: 9.75, lat: 61.55, elevation: 250, kind: "meander" },
  bbox: [9.10, 61.10, 10.30, 62.20],
  axis: [[9.30, 61.20], [10.00, 62.10]],
  viewScale: 1.9,
  label: { lon: 9.60, lat: 61.65, rotation: -55 },
  source: "古德布兰河谷：挪威东部主干河谷之一，劳根河（Gudbrandsdalslågen）自约特山地流向姆约萨湖，谷长约230km；冰川把一条构造低谷拓宽成宽 U 形谷，谷底有厚层冰川与河流沉积、多级河流阶地，是历史上东挪威南北往来的主通道（Kartverket / NGU）",
};

const LYNGEN_ALPS: TerrainEntry = {
  id: "lyngen-alps",
  nameZh: "林根阿尔卑斯山",
  nameEn: "Lyngen Alps / Lyngsalpan",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "耶克瓦里峰（Jiehkkevárri，1834m）", lon: 19.980, lat: 69.475, elevation: 1834, kind: "peak" },
  bbox: [19.55, 69.30, 20.40, 69.85],
  axis: [[19.70, 69.35], [20.20, 69.80]],
  viewScale: 1.5,
  label: { lon: 20.00, lat: 69.60, rotation: -18 },
  source: "林根阿尔卑斯（林根半岛，特罗姆瑟东北）：夹在乌尔峡湾和林根峡湾之间的一条尖峰-冰川山脊，最高点耶克瓦里峰1834m；角峰、刀脊和几十条小冰川直逼峡湾水面；林根阿尔卑斯景观保护区（Miljødirektoratet）",
};

const MJOSA: TerrainEntry = {
  id: "mjosa",
  nameZh: "姆约萨湖",
  nameEn: "Mjøsa",
  category: "lake",
  regionId: "europe",
  country: "norway",
  landmark: { name: "姆约萨湖（哈马尔 / 耶维克一带）", lon: 10.95, lat: 60.75, elevation: 123, kind: "lake" },
  bbox: [10.60, 60.35, 11.30, 61.15],
  axis: [[10.75, 60.40], [11.20, 61.10]],
  viewScale: 1.7,
  label: { lon: 10.95, lat: 60.75, rotation: -60 },
  source: "姆约萨湖：挪威最大的湖，面积约365 km²、最深约450m、长约117km；沿古德布兰河谷的构造低带发育、被冰川深挖，湖底低于海平面（冰蚀-断裂谷湖）；1970—80年代的“姆约萨行动”是挪威著名的湖泊治污案例（NVE / 环境署）",
};

const FEMUNDEN: TerrainEntry = {
  id: "femund",
  nameZh: "费蒙湖",
  nameEn: "Femunden",
  category: "lake",
  regionId: "europe",
  country: "norway",
  landmark: { name: "费蒙湖（费蒙斯马卡一侧）", lon: 11.870, lat: 62.150, elevation: 662, kind: "lake" },
  bbox: [11.60, 61.85, 12.15, 62.45],
  axis: [[11.75, 61.90], [12.00, 62.40]],
  viewScale: 1.6,
  label: { lon: 11.87, lat: 62.15, rotation: -70 },
  source: "费蒙湖：挪威第三大湖、第二大天然（几乎未受水位调节）湖，面积约204 km²、最深约150m，海拔662m；东岸是费蒙斯马卡国家公园，湖水部分向东经特吕西尔河系流入瑞典（Kartverket / Miljødirektoratet）",
};

const HORNINDALSVATNET: TerrainEntry = {
  id: "hornindalsvatnet",
  nameZh: "霍宁达尔湖",
  nameEn: "Hornindalsvatnet",
  category: "lake",
  regionId: "europe",
  country: "norway",
  landmark: { name: "霍宁达尔湖", lon: 6.350, lat: 61.920, elevation: 53, kind: "lake" },
  bbox: [6.00, 61.86, 6.75, 61.99],
  axis: [[6.05, 61.90], [6.70, 61.94]],
  viewScale: 1.4,
  label: { lon: 6.35, lat: 61.92, rotation: -4 },
  source: "霍宁达尔湖：欧洲最深的湖，深约514m（湖面海拔约53m，湖底远低于海平面）；由冰川沿一条谷强烈过度加深而成；不受冰川河补给，水质格外清澈（NVE）",
};

const TROLLTUNGA: TerrainEntry = {
  id: "trolltunga",
  nameZh: "巨魔舌",
  nameEn: "Trolltunga",
  category: "gorge",
  regionId: "europe",
  country: "norway",
  landmark: { name: "巨魔舌（林厄达尔湖上方约700m 的水平悬挑岩台）", lon: 6.740, lat: 60.124, elevation: 1100, kind: "escarpment" },
  bbox: [6.66, 60.08, 6.84, 60.17],
  label: { lon: 6.74, lat: 60.124, rotation: 0 },
  source: "巨魔舌：奥达附近、哈当厄高原西缘一块水平伸出的薄岩台，悬在林厄达尔湖上方约700m；岩石沿一组水平节理被冰川拔蚀和冻融作用一层层剥离，留下这条悬挑的“舌头”（NGU）",
};

const SALTSTRAUMEN: TerrainEntry = {
  id: "saltstraumen",
  nameZh: "萨尔特急流",
  nameEn: "Saltstraumen",
  category: "gorge",
  regionId: "europe",
  country: "norway",
  landmark: { name: "萨尔特海峡（萨尔特桥一带）", lon: 14.625, lat: 67.232, elevation: 0, kind: "escarpment" },
  bbox: [14.55, 67.19, 14.72, 67.27],
  axis: [[14.58, 67.21], [14.70, 67.25]],
  viewScale: 1.2,
  label: { lon: 14.63, lat: 67.235, rotation: -30 },
  source: "萨尔特急流：博德附近连接萨尔特峡湾与谢尔斯塔峡湾的一条约3km 长、最窄约150m 的海峡；每6小时约4亿 m³ 海水涌过，流速可达约20节（约10m/s），形成直径达约10m 的漩涡，是世界上最强的潮流（Kartverket）",
};

const VARANGERHALVOYA: TerrainEntry = {
  id: "varangerhalvoya",
  nameZh: "瓦朗厄尔半岛",
  nameEn: "Varangerhalvøya / Várnjárga",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "瓦朗厄尔半岛内陆苔原高地", lon: 29.60, lat: 70.35, elevation: 300, kind: "escarpment" },
  bbox: [28.4, 69.95, 31.0, 70.95],
  axis: [[28.7, 70.10], [30.6, 70.80]],
  viewScale: 2.0,
  label: { lon: 29.8, lat: 70.5, rotation: -22 },
  source: "瓦朗厄尔半岛（北萨米语 Várnjárga）：挪威最东北的半岛，是本土唯一有真正北极苔原和多年冻土的地方；地表大体是末次冰期之前就形成的低缓高地和无植被的碎石原（felsenmeer），冰期冰盖在此几乎静止、少有改造；弱变质的新元古代—早寒武纪岩层里保存有著名的“瓦兰吉尔冰期”冰碛岩；瓦朗厄尔半岛国家公园（NGU / Miljødirektoratet）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 挪威 =====
  SCANDINAVIAN_MOUNTAINS_NORWAY, JOTUNHEIMEN, HARDANGERVIDDA, FINNMARKSVIDDA,
  SOGNEFJORD, GLOMMA, LOFOTEN, JAEREN,
  DOVREFJELL, RONDANE, TROLLHEIMEN, JOSTEDALSBREEN, FOLGEFONNA, SVARTISEN,
  GEIRANGERFJORD, NAEROYFJORD, HARDANGERFJORD, LYSEFJORD, TRONDHEIMSFJORD,
  ROMSDALEN, GUDBRANDSDALEN, LYNGEN_ALPS, MJOSA, FEMUNDEN, HORNINDALSVATNET,
  TROLLTUNGA, SALTSTRAUMEN, VARANGERHALVOYA,
];
