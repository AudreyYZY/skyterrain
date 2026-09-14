import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 冰岛（regionId: "europe"，country: "iceland"）
// 坐标据 Icelandic Meteorological Office（Veðurstofa Íslands）/
// National Land Survey of Iceland / Institute of Earth Sciences /
// Vatnajökull National Park / UNESCO
// ============================================================

const HEKLA: TerrainEntry = {
  id: "hekla",
  nameZh: "海克拉火山",
  nameEn: "Hekla",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "海克拉主脊", lon: -19.667, lat: 63.983, elevation: 1491, kind: "peak" },
  bbox: [-19.85, 63.88, -19.45, 64.08],
  axis: [[-19.78, 63.90], [-19.55, 64.05]],
  viewFrom: 200,
  label: { lon: -19.67, lat: 63.98, rotation: -35 },
  source: "海克拉：冰岛最活跃的火山之一，一座沿裂隙发育的脊状层状火山（约1491m）；1104年以来多次喷发，中世纪欧洲称之为“地狱之门”（Icelandic Meteorological Office）",
};

const KATLA: TerrainEntry = {
  id: "katla",
  nameZh: "卡特拉火山",
  nameEn: "Katla",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "卡特拉破火山口（米尔达斯冰盖下）", lon: -19.05, lat: 63.63, elevation: 1490, kind: "escarpment" },
  bbox: [-19.30, 63.50, -18.75, 63.75],
  label: { lon: -19.05, lat: 63.63, rotation: 0 },
  source: "卡特拉：位于米尔达斯冰盖之下的大型破火山口（直径约10km），冰下爆发常引发巨大的冰川洪水（jökulhlaup）；上一次大喷发在1918年（Icelandic Meteorological Office）",
};

const EYJAFJALLAJOKULL: TerrainEntry = {
  id: "eyjafjallajokull",
  nameZh: "埃亚菲亚德拉冰盖火山",
  nameEn: "Eyjafjallajökull",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "埃亚菲亚德拉冰盖火山顶", lon: -19.613, lat: 63.633, elevation: 1651, kind: "peak" },
  bbox: [-19.80, 63.55, -19.42, 63.70],
  label: { lon: -19.61, lat: 63.63, rotation: 0 },
  source: "埃亚菲亚德拉冰盖火山：冰帽覆盖的层状火山（约1651m）；2010年4—5月的喷发产生大量细火山灰，加上盛行风向，一度使欧洲大部分空域关闭数日（Icelandic Meteorological Office）",
};

const GRIMSVOTN: TerrainEntry = {
  id: "grimsvotn",
  nameZh: "格里姆火山",
  nameEn: "Grímsvötn",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "格里姆火山冰下湖（瓦特纳冰原西北）", lon: -17.33, lat: 64.42, elevation: 1725, kind: "escarpment" },
  bbox: [-17.60, 64.32, -17.05, 64.52],
  label: { lon: -17.33, lat: 64.42, rotation: 0 },
  source: "格里姆火山：瓦特纳冰原西北部冰下的破火山口，是冰岛喷发最频繁的火山；冰下湖会周期性溃决、沿斯凯扎拉河形成冰川洪水（Icelandic Meteorological Office / Vatnajökull NP）",
};

const FAGRADALSFJALL: TerrainEntry = {
  id: "fagradalsfjall",
  nameZh: "法格拉达尔火山",
  nameEn: "Fagradalsfjall",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "法格拉达尔火山（雷克雅内斯半岛）", lon: -22.27, lat: 63.90, elevation: 385, kind: "peak" },
  bbox: [-22.42, 63.83, -22.10, 63.97],
  label: { lon: -22.27, lat: 63.90, rotation: 0 },
  source: "法格拉达尔火山：雷克雅内斯半岛沉寂约800年后于2021、2022、2023年发生的一系列以熔岩溢流为主的裂隙喷发地点；标志雷克雅内斯进入新的活动期（Icelandic Meteorological Office）",
};

const SNAEFELLSJOKULL: TerrainEntry = {
  id: "snaefellsjokull",
  nameZh: "斯奈山冰川火山",
  nameEn: "Snæfellsjökull",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "斯奈山冰川火山顶", lon: -23.767, lat: 64.808, elevation: 1446, kind: "peak" },
  bbox: [-23.95, 64.72, -23.55, 64.88],
  label: { lon: -23.77, lat: 64.81, rotation: 0 },
  source: "斯奈山冰川火山：斯奈山半岛尖端一座约70万年、冰帽覆盖的层状火山（约1446m），上一次喷发约在1800年前；儒勒·凡尔纳《地心游记》的入口；斯奈山国家公园（Icelandic Met Office / 环境署）",
};

const ASKJA: TerrainEntry = {
  id: "askja",
  nameZh: "阿斯基亚破火山口",
  nameEn: "Askja",
  category: "basin",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "厄斯丘湖（Öskjuvatn）", lon: -16.75, lat: 65.03, elevation: 1050, kind: "lake" },
  bbox: [-16.95, 64.92, -16.55, 65.12],
  viewScale: 1.5,
  label: { lon: -16.75, lat: 65.03, rotation: 0 },
  source: "阿斯基亚：中部高地丁久山（Dyngjufjöll）里的破火山口群；1875年喷发的火山灰迫使冰岛东北部大量居民外迁；口内的厄斯丘湖是冰岛最深的湖，NASA 阿波罗宇航员曾在此训练（Institute of Earth Sciences）",
};

const THINGVELLIR: TerrainEntry = {
  id: "thingvellir",
  nameZh: "辛格维利尔",
  nameEn: "Þingvellir",
  category: "valley",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "阿尔曼纳陷谷（Almannagjá）", lon: -21.128, lat: 64.256, elevation: 110, kind: "gorge" },
  bbox: [-21.30, 64.10, -20.95, 64.40],
  axis: [[-21.15, 64.10], [-21.10, 64.40]],
  viewScale: 1.5,
  label: { lon: -21.13, lat: 64.28, rotation: 0 },
  pois: [
    { name: "辛格瓦德拉湖（Þingvallavatn）", lon: -21.10, lat: 64.18, note: "冰岛最大的天然湖" },
  ],
  source: "辛格维利尔：北美与欧亚两大板块拉张、地壳下陷形成的地堑（裂谷）；930年起在此召开“阿尔庭”议会——世界现存最古老的议会之一；世界文化遗产（UNESCO / Þingvellir NP）",
};

const VATNAJOKULL: TerrainEntry = {
  id: "vatnajokull",
  nameZh: "瓦特纳冰原",
  nameEn: "Vatnajökull",
  category: "plateau",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "华纳达尔斯赫努克（Hvannadalshnúkur，冰原南缘）", lon: -16.678, lat: 64.016, elevation: 2110, kind: "peak" },
  bbox: [-18.60, 63.85, -15.30, 64.95],
  viewScale: 2.5,
  label: { lon: -17.0, lat: 64.4, rotation: 0 },
  pois: [
    { name: "冰河湖（Breiðárlón / 布雷达默克冰舌）", lon: -16.30, lat: 64.10, note: "南缘退缩的冰舌前形成的冰河湖" },
  ],
  source: "瓦特纳冰原：冰岛最大、按体积计欧洲最大的冰帽，约7700km²（占冰岛约8%），最厚近1km；冰下有多座活火山，南缘华纳达尔斯赫努克2110m 为冰岛最高点；世界遗产（UNESCO / Vatnajökull NP）",
};

const LANGJOKULL: TerrainEntry = {
  id: "langjokull",
  nameZh: "朗格冰原",
  nameEn: "Langjökull",
  category: "plateau",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "朗格冰原（西部高地）", lon: -20.00, lat: 64.65, elevation: 1300, kind: "escarpment" },
  bbox: [-20.60, 64.38, -19.35, 64.92],
  viewScale: 1.8,
  label: { lon: -20.00, lat: 64.65, rotation: 0 },
  source: "朗格冰原：冰岛第二大冰帽（约900km²），位于西部高地，形态较平缓；融水补给辛格瓦德拉湖的地下泉、以及经黄金瀑布下泄的白河（Hvítá）；近年退缩很快（Institute of Earth Sciences）",
};

const HOFSJOKULL: TerrainEntry = {
  id: "hofsjokull",
  nameZh: "霍夫斯冰原",
  nameEn: "Hofsjökull",
  category: "plateau",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "霍夫斯冰原（冰岛中部）", lon: -18.80, lat: 64.80, elevation: 1600, kind: "escarpment" },
  bbox: [-19.30, 64.60, -18.30, 65.02],
  viewScale: 1.7,
  label: { lon: -18.80, lat: 64.80, rotation: 0 },
  source: "霍夫斯冰原：冰岛第三大冰帽（约800km²），盾状，冰下藏着一个大型活动破火山口；冰岛最长的河雷神河（Þjórsá）和布兰达河都发源于此；大致位于冰岛地理中心（Institute of Earth Sciences）",
};

const MYRDALSJOKULL: TerrainEntry = {
  id: "myrdalsjokull",
  nameZh: "米尔达斯冰盖",
  nameEn: "Mýrdalsjökull",
  category: "plateau",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "米尔达斯冰盖", lon: -19.10, lat: 63.65, elevation: 1450, kind: "escarpment" },
  bbox: [-19.55, 63.48, -18.70, 63.82],
  viewScale: 1.5,
  label: { lon: -19.10, lat: 63.65, rotation: 0 },
  pois: [
    { name: "索尔海马冰舌（Sólheimajökull）", lon: -19.37, lat: 63.53, note: "西南缘的出口冰川，近几十年退缩数百米" },
  ],
  source: "米尔达斯冰盖：冰岛第四大冰帽（约590km²），直接盖在卡特拉火山之上；西南缘的索尔海马冰舌是热门的冰川徒步点、退缩明显（Icelandic Met Office）",
};

const SKEIDARARSANDUR: TerrainEntry = {
  id: "skeidararsandur",
  nameZh: "斯凯扎拉桑德",
  nameEn: "Skeiðarársandur",
  category: "plain",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "斯凯扎拉桑德（斯凯扎拉冰舌与海之间）", lon: -17.50, lat: 63.95, elevation: 20, kind: "delta" },
  bbox: [-18.20, 63.78, -16.90, 64.12],
  viewScale: 2.2,
  label: { lon: -17.50, lat: 63.95, rotation: 0 },
  source: "斯凯扎拉桑德：世界上最大的冰川外冲平原（sandur），约1000km²，由辫状冰川河和格里姆火山的冰川洪水堆积；1996年的特大冰川洪水冲毁了这里环岛公路的多座桥梁（Vatnajökull NP / Icelandic Met Office）",
};

const JOKULSARLON: TerrainEntry = {
  id: "jokulsarlon",
  nameZh: "杰古沙龙冰河湖",
  nameEn: "Jökulsárlón",
  category: "lake",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "杰古沙龙冰河湖", lon: -16.180, lat: 64.048, elevation: 5, kind: "lake" },
  bbox: [-16.35, 63.95, -16.00, 64.13],
  label: { lon: -16.18, lat: 64.05, rotation: 0 },
  pois: [
    { name: "钻石冰沙滩（Breiðamerkursandur）", lon: -16.23, lat: 64.03, note: "冰山碎块被冲上黑沙滩" },
  ],
  source: "杰古沙龙冰河湖：瓦特纳冰原布雷达默克冰舌退缩后、约1935年起形成并快速扩大的冰前湖；现为冰岛最深的湖（约248m），与海相通，冰山从湖里漂向大海（Vatnajökull NP）",
};

const LAKI: TerrainEntry = {
  id: "laki",
  nameZh: "拉基火山口列",
  nameEn: "Laki / Lakagígar",
  category: "hills",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "拉基火山口列", lon: -18.230, lat: 64.070, elevation: 800, kind: "escarpment" },
  bbox: [-18.55, 63.92, -17.95, 64.22],
  axis: [[-18.45, 63.95], [-18.05, 64.20]],
  viewScale: 1.6,
  label: { lon: -18.23, lat: 64.07, rotation: -35 },
  source: "拉基火山口列（Lakagígar）：1783—84年沿约25km裂隙喷发形成的约130个火山口，是有记载以来最大的玄武质熔岩喷发之一；释放的气体导致牲畜大批死亡和随后的大饥荒（“迷雾之灾”）（Institute of Earth Sciences）",
};

const GULLFOSS: TerrainEntry = {
  id: "gullfoss",
  nameZh: "黄金瀑布",
  nameEn: "Gullfoss",
  category: "gorge",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "黄金瀑布", lon: -20.123, lat: 64.327, elevation: 100, kind: "gorge" },
  bbox: [-20.22, 64.29, -20.02, 64.37],
  axis: [[-20.15, 64.30], [-20.08, 64.36]],
  label: { lon: -20.12, lat: 64.33, rotation: -30 },
  source: "黄金瀑布：白河（Hvítá，源自朗格冰原）分两级、成直角跌入古维斯河谷（Gullfossgljúfur）——一条冰期末冰川洪水冲刷、向上游后退切成的峡谷；20世纪初曾险被筑坝发电（National Land Survey of Iceland）",
};

const DETTIFOSS: TerrainEntry = {
  id: "dettifoss",
  nameZh: "黛提瀑布",
  nameEn: "Dettifoss",
  category: "gorge",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "黛提瀑布", lon: -16.385, lat: 65.815, elevation: 330, kind: "gorge" },
  bbox: [-16.48, 65.78, -16.30, 65.86],
  axis: [[-16.40, 65.80], [-16.37, 65.84]],
  label: { lon: -16.385, lat: 65.815, rotation: 0 },
  source: "黛提瀑布：菲厄德尔冰川河（Jökulsá á Fjöllum，源自瓦特纳冰原）上、宽约100m、落差约44m 的瀑布，按平均流量是冰岛最大、常被列为欧洲最强的瀑布之一（Vatnajökull NP）",
};

const JOKULSARGLJUFUR: TerrainEntry = {
  id: "jokulsargljufur",
  nameZh: "约克尔萨峡谷",
  nameEn: "Jökulsárgljúfur",
  category: "gorge",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "阿斯比吉马蹄形峡谷（Ásbyrgi）", lon: -16.510, lat: 66.020, elevation: 60, kind: "gorge" },
  bbox: [-16.62, 65.80, -16.35, 66.10],
  axis: [[-16.42, 65.82], [-16.52, 66.08]],
  viewScale: 1.6,
  label: { lon: -16.52, lat: 65.95, rotation: -70 },
  source: "约克尔萨峡谷：菲厄德尔冰川河下切的峡谷，长约25km、深达约100m；主要由全新世多次冰下喷发引发的特大冰川洪水冲刷而成；北端的阿斯比吉是一处马蹄形的天然峡湾（Vatnajökull NP）",
};

const SKOGAFOSS: TerrainEntry = {
  id: "skogafoss",
  nameZh: "斯科加瀑布",
  nameEn: "Skógafoss",
  category: "gorge",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "斯科加瀑布", lon: -19.511, lat: 63.532, elevation: 60, kind: "escarpment" },
  bbox: [-19.58, 63.50, -19.44, 63.57],
  label: { lon: -19.51, lat: 63.53, rotation: 0 },
  source: "斯科加瀑布：斯科加河从一道约60m高的陡崖跌下——这道横贯冰岛南部的陡崖是过去的海岸线，如今海岸已因陆地抬升和外冲平原向前推进而南移数公里（National Land Survey of Iceland）",
};

const HAUKADALUR_GEYSIR: TerrainEntry = {
  id: "haukadalur-geysir",
  nameZh: "盖歇尔间歇泉区",
  nameEn: "Haukadalur (Geysir)",
  category: "basin",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "斯特罗库尔间歇泉（Strokkur）", lon: -20.301, lat: 64.313, elevation: 110, kind: "escarpment" },
  bbox: [-20.35, 64.29, -20.25, 64.34],
  label: { lon: -20.30, lat: 64.313, rotation: 0 },
  source: "豪卡达鲁尔地热谷：含“大盖歇尔”（Geysir，英文 geyser 一词的词源，现基本休眠）和每5—10分钟喷发一次的斯特罗库尔；“黄金圈”景区之一（Institute of Earth Sciences）",
};

const KRAFLA: TerrainEntry = {
  id: "krafla",
  nameZh: "克拉夫拉火山",
  nameEn: "Krafla",
  category: "basin",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "维提火口与克拉夫拉破火山口", lon: -16.755, lat: 65.716, elevation: 500, kind: "escarpment" },
  bbox: [-16.95, 65.60, -16.55, 65.80],
  viewScale: 1.5,
  label: { lon: -16.76, lat: 65.72, rotation: 0 },
  source: "克拉夫拉火山：米湖附近一个直径约10km 的破火山口，附带一条裂隙带；1975—84年的“克拉夫拉之火”是九幕裂谷张裂-喷发，地面沿裂隙带累计拉开数米，是研究离散板块边界的经典地点（Icelandic Met Office / Institute of Earth Sciences）",
};

const MYVATN: TerrainEntry = {
  id: "myvatn",
  nameZh: "米湖",
  nameEn: "Mývatn",
  category: "lake",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "米湖（斯库图斯塔济尔假火山群一带）", lon: -17.03, lat: 65.57, elevation: 278, kind: "lake" },
  bbox: [-17.18, 65.50, -16.85, 65.70],
  viewScale: 1.5,
  label: { lon: -17.03, lat: 65.60, rotation: 0 },
  source: "米湖（Mývatn，意为“蚊虫之湖”）：约2300年前一次玄武岩熔岩流堵住河谷形成的浅水营养湖；湖畔的“假火山”是熔岩流过湿地时的蒸汽爆炸锥；水鸟种类居欧洲之首（Institute of Earth Sciences / 环境署）",
};

const REYKJANES_PENINSULA: TerrainEntry = {
  id: "reykjanes-peninsula",
  nameZh: "雷克雅内斯半岛",
  nameEn: "Reykjanes Peninsula",
  category: "coast",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "格纳胡佛地热区与瓦拉赫努克海崖（半岛西端）", lon: -22.68, lat: 63.82, elevation: 30, kind: "escarpment" },
  bbox: [-22.75, 63.78, -21.80, 64.08],
  axis: [[-22.70, 63.83], [-21.90, 64.00]],
  viewScale: 1.7,
  label: { lon: -22.3, lat: 63.9, rotation: -20 },
  source: "雷克雅内斯半岛：大西洋中脊在陆地上出露的唯一一段——一组雁行排列的裂隙带和年轻熔岩原；含斯瓦特森吉、克里苏维克等高温地热区、“大陆桥”步行桥；雷克雅内斯世界地质公园（Icelandic Met Office）",
};

const REYNISFJARA: TerrainEntry = {
  id: "reynisfjara",
  nameZh: "雷尼斯黑沙滩",
  nameEn: "Reynisfjara / Dyrhólaey",
  category: "coast",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "雷尼斯黑沙滩与柱状玄武岩崖", lon: -19.045, lat: 63.404, elevation: 15, kind: "escarpment" },
  bbox: [-19.16, 63.38, -18.95, 63.46],
  label: { lon: -19.05, lat: 63.41, rotation: 0 },
  pois: [
    { name: "迪尔霍拉里海蚀拱（Dyrhólaey）", lon: -19.128, lat: 63.402, note: "120m 高岬角上的大海蚀拱，冰岛本土最南点" },
  ],
  source: "雷尼斯黑沙滩：维克镇附近的玄武质黑沙海滩，衬着柱状玄武岩崖和外海的雷尼斯德朗格岩柱；以突发的“疯狗浪”危险著称，海边设有警示（National Land Survey of Iceland）",
};

const LATRABJARG: TerrainEntry = {
  id: "latrabjarg",
  nameZh: "拉特拉尔角海鸟崖",
  nameEn: "Látrabjarg",
  category: "coast",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "拉特拉尔角海崖（Bjargtangar）", lon: -24.532, lat: 65.501, elevation: 440, kind: "escarpment" },
  bbox: [-24.56, 65.46, -24.05, 65.53],
  axis: [[-24.53, 65.50], [-24.10, 65.50]],
  viewFrom: 180,
  label: { lon: -24.35, lat: 65.50, rotation: -3 },
  source: "拉特拉尔角：西峡湾一段长约14km、高达约440m 的海崖，是欧洲最大的海鸟崖之一（海鹦、刀嘴海雀、崖海鸦等数以百万计）；西端的比雅尔唐加是冰岛最西点（Icelandic Institute of Natural History）",
};

const VESTMANNAEYJAR: TerrainEntry = {
  id: "vestmannaeyjar",
  nameZh: "韦斯特曼纳群岛",
  nameEn: "Vestmannaeyjar",
  category: "island",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "海梅岛与埃尔德费尔火山（1973年）", lon: -20.253, lat: 63.432, elevation: 200, kind: "island" },
  bbox: [-20.60, 63.25, -20.10, 63.52],
  viewScale: 1.5,
  label: { lon: -20.28, lat: 63.42, rotation: 0 },
  pois: [
    { name: "叙尔特塞岛（Surtsey）", lon: -20.604, lat: 63.303, note: "1963—67年从海里喷发形成，此后作为“生命如何定居新陆地”的自然实验室受严格保护" },
  ],
  source: "韦斯特曼纳群岛：冰岛南岸外一组年轻的火山岛；叙尔特塞1963—67年从海中升起（世界遗产）；有人居住的海梅岛1973年埃尔德费尔喷发，居民一夜乘渔船撤离、熔岩被海水冷却阻挡以保住港口（UNESCO / Icelandic Met Office）",
};

const THJORSA: TerrainEntry = {
  id: "thjorsa",
  nameZh: "雷神河",
  nameEn: "Þjórsá",
  category: "river",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "雷神河中游（布尔费德一带）", lon: -19.75, lat: 64.10, elevation: 200, kind: "meander" },
  bbox: [-20.90, 63.80, -18.60, 64.75],
  axis: [[-19.10, 64.65], [-20.75, 63.85]],
  viewScale: 2.0,
  label: { lon: -20.0, lat: 64.2, rotation: -55 },
  source: "雷神河（Þjórsá）：冰岛最长的河（约230km），冰川河，源自霍夫斯冰原；约8600年前的“雷神河大熔岩”沿河谷流了约130km，是全新世体积最大的单次熔岩流；下游梯级水电开发（National Land Survey of Iceland）",
};

const JOKULSA_A_FJOLLUM: TerrainEntry = {
  id: "jokulsa-a-fjollum",
  nameZh: "菲厄德尔冰川河",
  nameEn: "Jökulsá á Fjöllum",
  category: "river",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "菲厄德尔冰川河中游（高地荒漠段）", lon: -16.55, lat: 65.20, elevation: 400, kind: "meander" },
  bbox: [-16.95, 64.55, -16.30, 66.20],
  axis: [[-16.55, 64.60], [-16.45, 66.15]],
  viewScale: 2.0,
  label: { lon: -16.7, lat: 65.3, rotation: -80 },
  source: "菲厄德尔冰川河（Jökulsá á Fjöllum）：冰岛第二长的河（约206km），源自瓦特纳冰原的丁久冰舌，穿过高地荒漠，在约克尔萨峡谷跌下黛提等瀑布，注入厄克萨峡湾；易发冰川洪水（Vatnajökull NP）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 冰岛 =====
  HEKLA, KATLA, EYJAFJALLAJOKULL, GRIMSVOTN, FAGRADALSFJALL, SNAEFELLSJOKULL,
  ASKJA, THINGVELLIR,
  VATNAJOKULL, LANGJOKULL, HOFSJOKULL, MYRDALSJOKULL,
  SKEIDARARSANDUR, JOKULSARLON, LAKI,
  GULLFOSS, DETTIFOSS, JOKULSARGLJUFUR, SKOGAFOSS, HAUKADALUR_GEYSIR, KRAFLA,
  MYVATN, REYKJANES_PENINSULA, REYNISFJARA, LATRABJARG, VESTMANNAEYJAR,
  THJORSA, JOKULSA_A_FJOLLUM,
];
