import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 澳大利亚（regionId: "australia"）
// 坐标据 Geoscience Australia / Parks Australia / 地名委员会
// ============================================================

const GREAT_DIVIDING_RANGE: TerrainEntry = {
  id: "great-dividing-range",
  nameZh: "大分水岭",
  nameEn: "Great Dividing Range",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "新英格兰断崖", lon: 152.4, lat: -30.0, elevation: 1300, kind: "escarpment" },
  bbox: [144.5, -37.5, 153.0, -16.0],
  axis: [[145.5, -37.0], [145.5, -17.0]],
  viewFrom: 90, // 相机在东侧海岸一侧，看陡峭的东坡断崖
  label: { lon: 151.5, lat: -31.5, rotation: -78 },
  source: "大分水岭沿澳大利亚东缘 ~3500km；锚点取新英格兰台地东缘断崖",
};

const AUSTRALIAN_ALPS: TerrainEntry = {
  id: "australian-alps",
  nameZh: "澳大利亚阿尔卑斯山脉",
  nameEn: "Australian Alps",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "科修斯科山", lon: 148.263, lat: -36.456, elevation: 2228, kind: "peak" },
  bbox: [146.0, -37.5, 149.3, -35.3],
  axis: [[147.0, -37.2], [148.6, -35.6]],
  label: { lon: 148.3, lat: -36.6, rotation: -30 },
  source: "科修斯科山 2228m 为澳大利亚大陆最高峰（Geoscience Australia）",
};

const MACDONNELL_RANGES: TerrainEntry = {
  id: "macdonnell-ranges",
  nameZh: "麦克唐奈山脉",
  nameEn: "MacDonnell Ranges",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "齐尔山", lon: 132.36, lat: -23.40, elevation: 1531, kind: "peak" },
  bbox: [131.5, -24.2, 135.0, -23.0],
  axis: [[131.6, -23.6], [134.8, -23.5]],
  label: { lon: 133.0, lat: -23.5, rotation: -4 },
  source: "齐尔山 1531m；麦克唐奈山脉横贯澳大利亚中部，爱丽斯泉一带",
};

const FLINDERS_RANGES: TerrainEntry = {
  id: "flinders-ranges",
  nameZh: "弗林德斯山脉",
  nameEn: "Flinders Ranges",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "圣玛丽峰（威尔佩纳凹地）", lon: 138.59, lat: -31.53, elevation: 1171, kind: "peak" },
  bbox: [137.8, -33.5, 139.6, -30.0],
  axis: [[138.4, -33.3], [138.8, -30.3]],
  label: { lon: 138.6, lat: -31.8, rotation: -80 },
  source: "圣玛丽峰 1171m；威尔佩纳凹地（Ikara）为标志性天然圆形山围",
};

const BLUE_MOUNTAINS: TerrainEntry = {
  id: "blue-mountains",
  nameZh: "蓝山",
  nameEn: "Blue Mountains",
  category: "plateau",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "三姊妹岩（卡通巴）", lon: 150.312, lat: -33.732, elevation: 1000, kind: "escarpment" },
  bbox: [150.0, -34.1, 150.7, -33.3],
  label: { lon: 150.3, lat: -33.6, rotation: 0 },
  source: "蓝山：悉尼以西的砂岩台地，深切峡谷；三姊妹岩、世界遗产区",
};

const PILBARA: TerrainEntry = {
  id: "pilbara",
  nameZh: "哈默斯利岭（皮尔巴拉）",
  nameEn: "Hamersley Range (Pilbara)",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "梅哈里山", lon: 118.59, lat: -22.98, elevation: 1249, kind: "peak" },
  bbox: [116.5, -23.8, 120.5, -21.0],
  axis: [[116.8, -22.3], [120.2, -22.6]],
  label: { lon: 118.3, lat: -22.4, rotation: -6 },
  source: "梅哈里山 1249m（西澳最高）；皮尔巴拉太古宙铁矿区、卡里吉尼峡谷",
};

const KIMBERLEY: TerrainEntry = {
  id: "kimberley",
  nameZh: "金伯利高原",
  nameEn: "The Kimberley",
  category: "plateau",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "班古鲁班古鲁岭（普努鲁鲁）", lon: 128.40, lat: -17.50, elevation: 578, kind: "escarpment" },
  bbox: [124.5, -18.7, 129.0, -14.0],
  label: { lon: 126.5, lat: -16.5, rotation: 0 },
  source: "普努鲁鲁 / 班古鲁班古鲁蜂窝状砂岩塔；金伯利古老砂岩高原、深切峡湾",
};

const SIMPSON_DESERT: TerrainEntry = {
  id: "simpson-desert",
  nameZh: "辛普森沙漠",
  nameEn: "Simpson Desert",
  category: "desert",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "大红丘（Nappanerica）", lon: 139.35, lat: -25.90, elevation: 40, kind: "dune" },
  bbox: [135.5, -27.5, 140.0, -23.0],
  axis: [[137.5, -27.0], [137.6, -23.5]],
  label: { lon: 137.5, lat: -25.2, rotation: -88 },
  source: "辛普森沙漠：世界最长平行沙垄，NNW–SSE 走向，最长逾200km",
};

const GREAT_VICTORIA_DESERT: TerrainEntry = {
  id: "great-victoria-desert",
  nameZh: "大维多利亚沙漠",
  nameEn: "Great Victoria Desert",
  category: "desert",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "沙漠中心", lon: 128.5, lat: -29.0, elevation: 250, kind: "dune" },
  bbox: [124.5, -31.0, 132.5, -27.0],
  label: { lon: 128.5, lat: -29.0, rotation: 0 },
  source: "大维多利亚沙漠：澳大利亚最大沙漠，约35万km²，横跨西澳与南澳",
};

const NULLARBOR_PLAIN: TerrainEntry = {
  id: "nullarbor-plain",
  nameZh: "纳拉伯平原",
  nameEn: "Nullarbor Plain",
  category: "plain",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "邦达断崖（大澳大利亚湾）", lon: 130.30, lat: -31.62, elevation: 90, kind: "escarpment" },
  bbox: [126.0, -32.3, 132.5, -30.0],
  label: { lon: 129.5, lat: -31.0, rotation: -3 },
  source: "纳拉伯：世界最大单块石灰岩，几乎无树；邦达断崖直落大澳大利亚湾",
};

const GREAT_ARTESIAN_BASIN: TerrainEntry = {
  id: "great-artesian-basin",
  nameZh: "大自流盆地",
  nameEn: "Great Artesian Basin",
  category: "basin",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "朗里奇（渠沟之乡）", lon: 144.25, lat: -23.44, elevation: 190, kind: "grassland" },
  bbox: [138.0, -30.0, 148.0, -18.0],
  label: { lon: 143.0, lat: -24.0, rotation: 0 },
  source: "大自流盆地：世界最大最深的自流地下水盆地，占澳大利亚约1/5面积",
};

const LAKE_EYRE: TerrainEntry = {
  id: "lake-eyre",
  nameZh: "埃尔湖（卡蒂坦达）",
  nameEn: "Lake Eyre (Kati Thanda)",
  category: "lake",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "湖心", lon: 137.36, lat: -28.37, elevation: -15, kind: "salt-lake" },
  bbox: [136.0, -29.6, 138.6, -27.4],
  label: { lon: 137.3, lat: -28.4, rotation: 0 },
  source: "卡蒂坦达-埃尔湖：澳大利亚最低点 -15m，最大盐湖，多数年份干涸",
};

const ULURU: TerrainEntry = {
  id: "uluru",
  nameZh: "乌鲁鲁（艾尔斯岩）",
  nameEn: "Uluṟu",
  category: "inselberg",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "乌鲁鲁", lon: 131.036, lat: -25.345, elevation: 863, kind: "peak" },
  bbox: [130.9, -25.45, 131.15, -25.24],
  label: { lon: 131.04, lat: -25.30, rotation: 0 },
  source: "乌鲁鲁：巨型砂岩残丘（岛山），高出周围平原约348m；原住民阿南古圣地",
};

const KATA_TJUTA: TerrainEntry = {
  id: "kata-tjuta",
  nameZh: "卡塔丘塔（奥尔加山）",
  nameEn: "Kata Tjuṯa",
  category: "inselberg",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "奥尔加山", lon: 130.74, lat: -25.30, elevation: 1066, kind: "peak" },
  bbox: [130.65, -25.40, 130.83, -25.22],
  label: { lon: 130.74, lat: -25.28, rotation: 0 },
  source: "卡塔丘塔：36 座砾岩圆丘，最高奥尔加山出露约546m；与乌鲁鲁同属国家公园",
};

const GREAT_BARRIER_REEF: TerrainEntry = {
  id: "great-barrier-reef",
  nameZh: "大堡礁",
  nameEn: "Great Barrier Reef",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "凯恩斯外礁", lon: 146.2, lat: -16.5, elevation: 0, kind: "island" },
  bbox: [143.0, -24.0, 152.0, -10.0],
  axis: [[145.0, -22.0], [147.0, -11.5]],
  label: { lon: 147.5, lat: -18.0, rotation: -70 },
  source: "大堡礁：世界最大珊瑚礁系统，约2300km、3000座礁体；世界自然遗产",
};

const TWELVE_APOSTLES: TerrainEntry = {
  id: "twelve-apostles",
  nameZh: "十二门徒岩",
  nameEn: "Twelve Apostles",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "十二门徒岩", lon: 143.104, lat: -38.665, elevation: 45, kind: "escarpment" },
  bbox: [142.9, -38.75, 143.5, -38.55],
  label: { lon: 143.1, lat: -38.62, rotation: 0 },
  source: "十二门徒岩：大洋路石灰岩海蚀柱，最高约45m；波特坎贝尔国家公园",
};

const TASMANIA: TerrainEntry = {
  id: "tasmania",
  nameZh: "塔斯马尼亚岛",
  nameEn: "Tasmania",
  category: "island",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "摇篮山", lon: 145.95, lat: -41.68, elevation: 1545, kind: "island" },
  bbox: [144.5, -43.7, 148.5, -40.6],
  axis: [[146.0, -43.5], [147.5, -40.8]],
  label: { lon: 146.5, lat: -42.0, rotation: 0 },
  source: "塔斯马尼亚：岛屿州，冰川刨蚀的荒野高地；摇篮山、圣克莱尔湖",
};

const MURRAY_DARLING: TerrainEntry = {
  id: "murray-darling",
  nameZh: "墨累-达令河",
  nameEn: "Murray–Darling",
  category: "river",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "墨累河与达令河汇流处（温特沃斯）", lon: 141.92, lat: -34.11, elevation: 30, kind: "meander" },
  bbox: [138.5, -37.0, 149.5, -25.0],
  axis: [[149.0, -30.0], [139.5, -35.5]],
  label: { lon: 143.5, lat: -34.0, rotation: -20 },
  source: "墨累-达令水系：澳大利亚最大河系（>3500km），横贯东南部内陆",
};

// —— 分类标准审定后补录（docs/terrain-taxonomy.md §4）——

const KGARI: TerrainEntry = {
  id: "kgari",
  nameZh: "弗雷泽岛（K'gari）",
  nameEn: "K'gari (Fraser Island)",
  category: "island",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "麦肯锡湖", lon: 153.055, lat: -25.443, elevation: 100, kind: "lake" },
  bbox: [152.9, -25.95, 153.42, -24.68],
  axis: [[153.15, -25.9], [153.05, -24.75]],
  label: { lon: 153.2, lat: -25.3, rotation: 0 },
  source: "K'gari：世界最大沙岛（约123km、1660km²），沙丘上生长雨林；世界自然遗产（Parks Australia / UNESCO）",
};

const KAKADU: TerrainEntry = {
  id: "kakadu",
  nameZh: "卡卡杜",
  nameEn: "Kakadu",
  category: "plain",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "阿纳姆地崖线（吉姆吉姆瀑布）", lon: 132.83, lat: -13.27, elevation: 250, kind: "escarpment" },
  bbox: [131.6, -13.9, 133.1, -12.3],
  label: { lon: 132.3, lat: -12.9, rotation: 0 },
  viewScale: 1.6,
  source: "卡卡杜：热带季风湿地 + 阿纳姆地砂岩崖线，约2万km²；世界自然与文化双遗产（Parks Australia）",
};

const GRAMPIANS: TerrainEntry = {
  id: "grampians",
  nameZh: "格兰坪山（Gariwerd）",
  nameEn: "Grampians (Gariwerd)",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "威廉山（Duwul）", lon: 142.604, lat: -37.297, elevation: 1167, kind: "peak" },
  bbox: [141.9, -37.65, 142.75, -36.8],
  axis: [[142.4, -37.6], [142.5, -36.85]],
  label: { lon: 142.5, lat: -37.2, rotation: -6 },
  source: "格兰坪山：维多利亚州西部翘起的砂岩单面山群，最高威廉山1167m（Parks Victoria / Geoscience Australia）",
};

const NINGALOO: TerrainEntry = {
  id: "ningaloo",
  nameZh: "宁格罗礁",
  nameEn: "Ningaloo",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "珊瑚湾外礁", lon: 113.77, lat: -23.14, elevation: 0, kind: "escarpment" },
  bbox: [113.4, -23.7, 114.25, -21.8],
  axis: [[113.9, -23.6], [113.65, -21.9]],
  label: { lon: 113.6, lat: -22.6, rotation: 0 },
  source: "宁格罗礁：西澳裾礁（fringing reef，紧贴海岸，长约260km），与大堡礁的堡礁形成对比；世界自然遗产（Parks Australia）",
};

// —— 澳大利亚补录（2026-08，Geoscience Australia / Parks Australia / 各州公园管理局 / UNESCO）——

const SHARK_BAY: TerrainEntry = {
  id: "shark-bay",
  nameZh: "鲨鱼湾（Gathaagudu）",
  nameEn: "Shark Bay (Gathaagudu)",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "哈梅林池叠层石", lon: 114.163, lat: -26.405, elevation: 0, kind: "escarpment" },
  bbox: [112.9, -27.0, 114.5, -24.8],
  axis: [[113.3, -26.8], [113.6, -24.9]],
  label: { lon: 113.5, lat: -25.7, rotation: 0 },
  viewScale: 1.4,
  source: "鲨鱼湾：澳大利亚大陆最西端的海湾群，世界自然遗产（UNESCO 1991）；哈梅林池因海水盐度约为普通海水两倍而保存现代叠层石；贝壳滩由鸟蛤壳堆积、长约100km、厚可达约10m（UNESCO / DBCA WA）",
};

const PURNULULU: TerrainEntry = {
  id: "purnululu",
  nameZh: "普努鲁鲁（邦格尔邦格尔山）",
  nameEn: "Purnululu (Bungle Bungle Range)",
  category: "hills",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "邦格尔邦格尔山南缘蜂窝状塔群", lon: 128.383, lat: -17.53, elevation: 578, kind: "escarpment" },
  bbox: [128.2, -17.68, 128.55, -17.32],
  label: { lon: 128.28, lat: -17.42, rotation: 0 },
  source: "普努鲁鲁国家公园：泥盆纪石英砂岩与砾岩经约2000万年侵蚀而成的蜂窝状锥丘，橙灰相间的横向条纹分别是含铁锰的结壳与蓝藻结壳；UNESCO 称其为“砂岩锥状喀斯特的典范”；世界自然遗产（UNESCO 2003 / Parks Australia）",
};

const WAVE_ROCK: TerrainEntry = {
  id: "wave-rock",
  nameZh: "波浪岩",
  nameEn: "Wave Rock",
  category: "inselberg",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "波浪岩（海登岩北壁）", lon: 118.897, lat: -32.443, elevation: 350, kind: "escarpment" },
  bbox: [118.83, -32.49, 118.96, -32.39],
  label: { lon: 118.9, lat: -32.38, rotation: 0 },
  source: "波浪岩：海登岩（Hyden Rock）岛山北侧一段高约15m、长约110m的凹形坡（flared slope）；岩体属伊尔冈克拉通花岗岩、约26亿年；凹面由地下水在基岩根部的化学风化形成，后随土层剥蚀而出露（Wikipedia 引 Twidale；WA DBCA）",
};

const KARLU_KARLU: TerrainEntry = {
  id: "karlu-karlu",
  nameZh: "卡尔卢卡尔卢（魔鬼大理石）",
  nameEn: "Karlu Karlu (Devils Marbles)",
  category: "inselberg",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "卡尔卢卡尔卢巨砾群", lon: 134.267, lat: -20.565, elevation: 400, kind: "escarpment" },
  bbox: [134.19, -20.63, 134.34, -20.49],
  label: { lon: 134.32, lat: -20.48, rotation: 0 },
  source: "卡尔卢卡尔卢／魔鬼大理石保护区：约16亿年的花岗岩体经抬升、节理切割成方块，再经球状风化（沿棱角风化更快）磨圆，巨砾直径约0.5—6m；瓦鲁蒙古／凯特泰／阿利亚瓦拉／瓦尔皮里人的圣地（NT Parks and Wildlife）",
};

const KINGS_CANYON: TerrainEntry = {
  id: "kings-canyon",
  nameZh: "国王峡谷（瓦塔卡）",
  nameEn: "Kings Canyon (Watarrka)",
  category: "gorge",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "国王峡谷砂岩崖壁", lon: 131.573, lat: -24.251, elevation: 700, kind: "gorge" },
  bbox: [131.45, -24.35, 131.70, -24.14],
  axis: [[131.52, -24.30], [131.62, -24.20]],
  label: { lon: 131.60, lat: -24.13, rotation: 0 },
  source: "瓦塔卡国家公园国王峡谷：切入约4亿年前（泥盆纪）风成沙丘沉积的梅里尼砂岩（Mereenie Sandstone），崖壁高约100m；砂岩下有页岩隔水层，托起“伊甸园”水潭；河流沿垂直节理下切，顶面被切成“失落之城”圆丘（NT Parks — Watarrka Geology）",
};

const NITMILUK: TerrainEntry = {
  id: "nitmiluk",
  nameZh: "尼特米卢克（凯瑟琳峡谷）",
  nameEn: "Nitmiluk (Katherine Gorge)",
  category: "gorge",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "凯瑟琳河第一峡谷", lon: 132.438, lat: -14.313, elevation: 120, kind: "gorge" },
  bbox: [132.33, -14.46, 132.62, -14.20],
  axis: [[132.40, -14.42], [132.55, -14.24]],
  label: { lon: 132.36, lat: -14.30, rotation: 0 },
  source: "尼特米卢克国家公园：凯瑟琳河切穿约16.5亿年的孔博尔吉砂岩（Kombolgie Sandstone），沿节理与断层形成一串相互成角的直线状峡谷，共13段；由贾沃因（Jawoyn）人拥有、共同管理，“Nitmiluk”意为“蝉之地”（NT Parks / northernterritory.com）",
};

const GLASSHOUSE_MOUNTAINS: TerrainEntry = {
  id: "glasshouse-mountains",
  nameZh: "玻璃屋山",
  nameEn: "Glass House Mountains",
  category: "inselberg",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "比尔瓦山（Beerwah）", lon: 152.886, lat: -26.856, elevation: 556, kind: "peak" },
  bbox: [152.80, -27.02, 153.02, -26.72],
  label: { lon: 152.78, lat: -26.72, rotation: 0 },
  source: "玻璃屋山：昆士兰东南部一组孤立的火山颈，约2500—2700万年前（中新世）由粗面岩、流纹岩岩浆在浅部凝固，周围较软的砂岩被剥蚀后留存；1770 年由詹姆斯·库克命名；吉尼巴拉（Jinibara）人的重要文化景观（QLD Parks / Oregon State Volcano World）",
};

const GREAT_SANDY_DESERT: TerrainEntry = {
  id: "great-sandy-desert",
  nameZh: "大沙沙漠",
  nameEn: "Great Sandy Desert",
  category: "desert",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "沙脊与丘间走廊", lon: 124.5, lat: -20.6, elevation: 300, kind: "dune" },
  bbox: [121.5, -23.0, 129.0, -18.0],
  axis: [[122.0, -20.8], [128.5, -20.4]],
  label: { lon: 124.5, lat: -20.0, rotation: 0 },
  viewScale: 1.9,
  source: "大沙沙漠：西澳东北部、跨皮尔巴拉与南金伯利并延入北领地，Geoscience Australia 命名沙漠面积约26.7万km²；以低矮沙原与近东西向的纵向（线状）沙丘为主，部分沙脊连续超过40km、丘间走廊有黏土坑与盐湖；沙丘因铁氧化物包膜而呈红色（Geoscience Australia）",
};

const GREAT_AUSTRALIAN_BIGHT: TerrainEntry = {
  id: "great-australian-bight",
  nameZh: "大澳大利亚湾（邦达崖）",
  nameEn: "Great Australian Bight (Bunda Cliffs)",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "邦达崖", lon: 131.2, lat: -31.63, elevation: 90, kind: "escarpment" },
  bbox: [128.8, -32.4, 133.6, -31.4],
  axis: [[129.0, -31.7], [133.4, -31.6]],
  label: { lon: 131.0, lat: -31.9, rotation: 0 },
  viewScale: 1.5,
  source: "大澳大利亚湾：南大洋一段开阔海湾，北缘的邦达崖（又称纳拉伯崖）沿岸连续约210km、高约60—120m，由始新世威尔逊崖石灰岩（Wilson Bluff Limestone，尤克拉盆地）组成，是澳大利亚与南极分离后残留的古海底边缘；比海（Head of Bight）是南露脊鲸重要的繁育海域（Wikipedia 引 Bunda Cliffs；澳大利亚政府 DCCEEW）",
};

const WILLANDRA_LAKES: TerrainEntry = {
  id: "willandra-lakes",
  nameZh: "威兰德拉湖区（芒戈湖）",
  nameEn: "Willandra Lakes Region (Lake Mungo)",
  category: "lake",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "芒戈湖东岸月牙形沙垄（“中国墙”）", lon: 143.05, lat: -33.72, elevation: 60, kind: "lake" },
  bbox: [142.7, -34.1, 143.4, -33.1],
  axis: [[142.9, -34.0], [143.15, -33.3]],
  label: { lon: 142.8, lat: -33.4, rotation: 0 },
  viewScale: 1.4,
  source: "威兰德拉湖区：新南威尔士西南部约17处更新世干涸湖床，由威兰德拉溪（古拉克伦河汊道）补给，约1.85万年前彻底干涸；各湖东岸留有新月形“月牙沙垄”（lunette）；世界自然与文化双遗产（UNESCO 1981）；芒戈湖出土约4万年前的人类遗骸与约460处化石足迹，均有科学发表并经 UNESCO 收录（DCCEEW / UNESCO）",
};

const NAMBUNG_PINNACLES: TerrainEntry = {
  id: "nambung-pinnacles",
  nameZh: "尖峰石阵（南邦）",
  nameEn: "The Pinnacles (Nambung)",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "尖峰石阵石灰岩柱群", lon: 115.158, lat: -30.604, elevation: 20, kind: "dune" },
  bbox: [115.08, -30.70, 115.28, -30.49],
  label: { lon: 115.06, lat: -30.5, rotation: 0 },
  source: "南邦国家公园尖峰石阵：黄色石英砂中成千上万根石灰岩柱，最高约3.5m；成岩母质是更新世风成钙质砂岩（塔马拉石灰岩，Tamala Limestone）——由海滩贝屑砂被风吹成沙丘后胶结而成；石柱一般认为是溶蚀管道扩大、合并后残留的产物，具体过程学界仍有讨论（WA DBCA；Lipar & Webb 2014）",
};

const MOUNT_GAMBIER: TerrainEntry = {
  id: "mount-gambier",
  nameZh: "甘比尔山（蓝湖）",
  nameEn: "Mount Gambier (Blue Lake)",
  category: "lake",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "蓝湖（Warwar）", lon: 140.782, lat: -37.845, elevation: 100, kind: "lake" },
  bbox: [140.72, -37.90, 140.85, -37.79],
  label: { lon: 140.7, lat: -37.79, rotation: 0 },
  source: "甘比尔山火山复合体：四个相互叠置的低平火山口（maar），由岩浆与地下水相互作用的爆发形成，蓝湖是其中最大的一个；对最近一次喷发的年代有不同测定（约2.8万年前、约6000年前等），近年一项基于放射性碳的测定认为在约6000年前，若成立则可能是澳大利亚大陆已知最近的一次火山喷发；蓝湖水色在每年11月至次年3月转为钴蓝、其余时间偏灰（SA Dept for Environment and Water）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 澳大利亚 =====
  GREAT_DIVIDING_RANGE, AUSTRALIAN_ALPS, MACDONNELL_RANGES, FLINDERS_RANGES,
  PILBARA,
  BLUE_MOUNTAINS, KIMBERLEY,
  SIMPSON_DESERT, GREAT_VICTORIA_DESERT,
  NULLARBOR_PLAIN,
  GREAT_ARTESIAN_BASIN,
  LAKE_EYRE,
  ULURU, KATA_TJUTA, GREAT_BARRIER_REEF, TWELVE_APOSTLES,
  TASMANIA, KGARI,
  MURRAY_DARLING,
  KAKADU, GRAMPIANS, NINGALOO,
  SHARK_BAY, PURNULULU, GLASSHOUSE_MOUNTAINS,
  WAVE_ROCK, KARLU_KARLU,
  KINGS_CANYON, NITMILUK,
  GREAT_SANDY_DESERT,
  GREAT_AUSTRALIAN_BIGHT, NAMBUNG_PINNACLES,
  WILLANDRA_LAKES, MOUNT_GAMBIER,
];
