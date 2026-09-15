import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 希腊
// ============================================================

const MOUNT_OLYMPUS: TerrainEntry = {
  id: "mount-olympus",
  nameZh: "奥林匹斯山",
  nameEn: "Mount Olympus",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "米蒂卡斯峰", lon: 22.3583, lat: 40.0855, elevation: 2917, kind: "peak" },
  bbox: [22.2, 39.98, 22.55, 40.15],
  label: { lon: 22.35, lat: 40.09, rotation: 0 },
  source: "奥林匹斯山：希腊最高峰，主峰米蒂卡斯海拔2917m；主体由石灰岩、大理岩构成，发育典型喀斯特地貌；1938年设为希腊第一座国家公园，1981年列入联合国教科文组织生物圈保护区；古希腊神话中的众神居所（Britannica / 希腊国家公园管理局）",
};

const PINDUS_MOUNTAINS: TerrainEntry = {
  id: "pindus-mountains",
  nameZh: "品都斯山脉",
  nameEn: "Pindus Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "斯莫利卡斯峰", lon: 20.9167, lat: 40.10, elevation: 2637, kind: "peak" },
  bbox: [20.6, 38.7, 21.4, 40.3],
  axis: [[20.75, 40.25], [21.15, 38.75]],
  viewScale: 1.8,
  label: { lon: 20.95, lat: 39.6, rotation: -60 },
  source: "品都斯山脉：贯穿希腊大陆西部的主干山系，从阿尔巴尼亚边境向东南延伸至科林斯湾一带，有“希腊脊梁”之称；第二高峰斯莫利卡斯海拔2637m（仅次于奥林匹斯山）；石灰岩喀斯特地貌发育，维科斯峡谷即位于其中；山脉分隔了西侧多雨的伊庇鲁斯与东侧较干燥的色萨利/马其顿（Britannica / Pindus National Park）",
};

const TAYGETUS: TerrainEntry = {
  id: "taygetus",
  nameZh: "泰格特斯山",
  nameEn: "Taygetus",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "先知伊利亚斯峰", lon: 22.367, lat: 36.933, elevation: 2407, kind: "peak" },
  bbox: [22.2, 36.7, 22.55, 37.2],
  axis: [[22.4, 37.2], [22.37, 36.75]],
  viewScale: 1.2,
  label: { lon: 22.35, lat: 36.95, rotation: -80 },
  source: "泰格特斯山：伯罗奔尼撒半岛南部最高大的山脉，主峰先知伊利亚斯海拔2407m，几乎直接从海边陡然隆起，是希腊本土地势最陡峻的山地之一；山体以大理岩、石灰岩为主；南端延伸为马尼半岛（Britannica）",
};

const MOUNT_PARNASSUS: TerrainEntry = {
  id: "mount-parnassus",
  nameZh: "帕纳索斯山",
  nameEn: "Mount Parnassus",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "利亚库拉峰", lon: 22.5975, lat: 38.5372, elevation: 2457, kind: "peak" },
  bbox: [22.45, 38.45, 22.75, 38.65],
  label: { lon: 22.6, lat: 38.55, rotation: 0 },
  source: "帕纳索斯山：希腊中部石灰岩山地，主峰利亚库拉海拔2457m；山体以三叠纪至白垩纪海相石灰岩为主，夹红色页岩，逆冲断层发育，山中分布多个南北向排列的浅层喀斯特盆地，蕴含铝土矿；南麓的德尔斐是古希腊最重要的神谕圣地之一（Britannica / 地质文献）",
};

const MOUNT_ATHOS: TerrainEntry = {
  id: "mount-athos",
  nameZh: "阿索斯山",
  nameEn: "Mount Athos",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "阿索斯峰", lon: 24.3264, lat: 40.1550, elevation: 2033, kind: "peak" },
  bbox: [23.95, 40.15, 24.45, 40.45],
  axis: [[23.98, 40.42], [24.43, 40.15]],
  viewScale: 1.3,
  label: { lon: 24.2, lat: 40.3, rotation: -50 },
  source: "阿索斯山：哈尔基季基三叉半岛最东侧一条狭长的山地半岛，主峰海拔2033m，山体陡峭直插爱琴海；9世纪起陆续有隐修士在此定居，10世纪拜占庭皇帝颁布特许状确立修道传统，此后千余年间先后建起20座东正教修道院；1988年作为自然与文化双重遗产列入联合国教科文组织世界遗产名录（UNESCO）",
};

const WHITE_MOUNTAINS_CRETE: TerrainEntry = {
  id: "white-mountains-crete",
  nameZh: "白山（克里特）",
  nameEn: "White Mountains (Lefka Ori)",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "帕赫内斯峰", lon: 24.085, lat: 35.3111, elevation: 2453, kind: "peak" },
  bbox: [23.85, 35.15, 24.25, 35.45],
  viewScale: 1.1,
  label: { lon: 24.05, lat: 35.3, rotation: 0 },
  source: "白山：克里特岛西部第二高山群，主峰帕赫内斯海拔2453m；石灰岩喀斯特地貌广布，发育大量深切峡谷（萨马利亚峡谷即源出于此）与高山洼地；因积雪常年保留至初夏、远望呈白色而得名（Britannica）",
};

const SAMOTHRAKI: TerrainEntry = {
  id: "samothraki",
  nameZh: "萨莫色雷斯岛",
  nameEn: "Samothrace / Samothraki",
  category: "island",
  regionId: "europe",
  country: "greece",
  landmark: { name: "芬加里峰", lon: 25.5289, lat: 40.4711, elevation: 1611, kind: "peak" },
  bbox: [25.4, 40.38, 25.65, 40.58],
  viewScale: 1.1,
  label: { lon: 25.53, lat: 40.5, rotation: 0 },
  source: "萨莫色雷斯岛：北爱琴海一座以花岗岩为主体的岛屿，中央的芬加里峰海拔1611m，是整个爱琴海诸岛中的最高点，岛屿面积虽不大但山势陡峭、多瀑布溪流；古代萨莫色雷斯秘仪圣地（发现《萨莫色雷斯的胜利女神》雕像处）即位于岛上（Britannica）",
};

const NISYROS: TerrainEntry = {
  id: "nisyros",
  nameZh: "尼西罗斯火山",
  nameEn: "Nisyros",
  category: "basin",
  regionId: "europe",
  country: "greece",
  landmark: { name: "斯特凡诺斯火山口", lon: 27.1667, lat: 36.5833, elevation: 260, kind: "peak" },
  bbox: [27.13, 36.55, 27.22, 36.62],
  label: { lon: 27.17, lat: 36.59, rotation: 0 },
  source: "尼西罗斯火山：多德卡尼斯群岛中一座近圆形的休眠层状火山岛，中央斯特凡诺斯火山口直径约260m，口底至今仍有活跃的喷气孔与地热活动；与圣托里尼、米洛斯、梅萨纳同属南爱琴火山弧（Global Volcanism Program / GSG）",
};

const MOUNT_PILIO: TerrainEntry = {
  id: "mount-pilio",
  nameZh: "皮利翁山",
  nameEn: "Mount Pelion",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "普利亚西迪峰", lon: 23.0833, lat: 39.3667, elevation: 1624, kind: "peak" },
  bbox: [22.95, 39.15, 23.35, 39.45],
  axis: [[23.05, 39.45], [23.2, 39.15]],
  viewScale: 1.2,
  label: { lon: 23.15, lat: 39.3, rotation: -30 },
  source: "皮利翁山：色萨利东部一条伸入爱琴海的多林山地半岛，最高点普利亚西迪峰海拔1624m，山坡广布山毛榉与栗树林，多石砌传统村落；古希腊神话中半人马族的居所（Britannica）",
};

const METHANA: TerrainEntry = {
  id: "methana",
  nameZh: "梅萨纳火山半岛",
  nameEn: "Methana",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "卡梅诺武诺熔岩穹丘", lon: 23.3667, lat: 37.5833, elevation: 760, kind: "peak" },
  bbox: [23.32, 37.55, 23.42, 37.65],
  label: { lon: 23.37, lat: 37.6, rotation: 0 },
  source: "梅萨纳：伯罗奔尼撒半岛东北角一座由多个安山岩熔岩穹丘拼合而成的火山半岛，是南爱琴火山弧最西端的活动中心；已知最近一次喷发约公元前230年（弗莱韦斯岛熔岩穹丘），半岛上仍有温泉与硫质喷气活动（Global Volcanism Program）",
};

const LASITHI_PLATEAU: TerrainEntry = {
  id: "lasithi-plateau",
  nameZh: "拉西提高原",
  nameEn: "Lasithi Plateau",
  category: "plateau",
  regionId: "europe",
  country: "greece",
  landmark: { name: "高原中心（提济利维斯附近）", lon: 25.4667, lat: 35.1833, elevation: 850, kind: "city" },
  bbox: [25.4, 35.13, 25.55, 35.24],
  label: { lon: 25.47, lat: 35.19, rotation: 0 },
  source: "拉西提高原：克里特岛东部一处海拔约850m的封闭式喀斯特高原盆地（poljie），四周群山环绕，历史上曾建有数千座白色帆布风车用于抽水灌溉；高原东南边缘的迪克泰洞穴在古希腊神话中被认为是宙斯的出生地（Britannica）",
};

const THESSALY_PLAIN: TerrainEntry = {
  id: "thessaly-plain",
  nameZh: "色萨利平原",
  nameEn: "Thessalian Plain",
  category: "plain",
  regionId: "europe",
  country: "greece",
  landmark: { name: "平原中心（拉里萨附近）", lon: 22.42, lat: 39.64, elevation: 70, kind: "city" },
  bbox: [21.7, 39.1, 23.0, 39.9],
  viewScale: 1.8,
  label: { lon: 22.4, lat: 39.55, rotation: 0 },
  source: "色萨利平原：希腊本土面积最大、最重要的农业平原，由皮尼奥斯河及其支流冲积而成；西邻品都斯山脉，南接奥特里斯山，东靠皮利翁山，东北为奥萨山与奥林匹斯山（间以坦佩谷相通），北面是哈西亚与卡姆武尼亚山地；小麦、棉花、玉米为主要作物，有“希腊粮仓”之称（Britannica / 皮尼奥斯河流域资料）",
};

const SANTORINI_CALDERA: TerrainEntry = {
  id: "santorini-caldera",
  nameZh: "圣托里尼火山口",
  nameEn: "Santorini Caldera",
  category: "basin",
  regionId: "europe",
  country: "greece",
  landmark: { name: "内亚卡梅尼火山穹丘", lon: 25.3967, lat: 36.4028, elevation: 130, kind: "peak" },
  bbox: [25.32, 36.33, 25.48, 36.48],
  viewScale: 1.2,
  label: { lon: 25.4, lat: 36.42, rotation: 0 },
  source: "圣托里尼火山口：公元前约1600年一次青铜时代晚期的大规模喷发（“米诺斯喷发”，火山爆发指数约7级，人类历史上最大规模喷发之一）造成岛屿中央塌陷形成的破火山口，直径约12km，四周残留的岛弧构成如今的锡拉岛主体，费拉、伊亚等城镇建在高约300m的火口崖顶上；口中央的内亚卡梅尼、帕列亚卡梅尼是喷发后陆续隆起的再生熔岩穹丘；喷发掩埋的阿克罗蒂里青铜时代聚落遗址已被系统考古发掘（GSG / 考古文献）",
};

const GULF_OF_CORINTH: TerrainEntry = {
  id: "gulf-of-corinth",
  nameZh: "科林斯湾",
  nameEn: "Gulf of Corinth",
  category: "coast",
  regionId: "europe",
  country: "greece",
  landmark: { name: "里翁—安蒂里翁海峡", lon: 21.78, lat: 38.30, elevation: 0, kind: "escarpment" },
  bbox: [21.7, 38.10, 23.2, 38.45],
  axis: [[21.75, 38.18], [23.15, 38.02]],
  viewScale: 1.6,
  label: { lon: 22.4, lat: 38.2, rotation: -5 },
  source: "科林斯湾：分隔伯罗奔尼撒半岛与希腊大陆的一条狭长海湾，本质是一条活动地堑（裂谷），两岸持续拉张，是全球伸展速率最快的大陆裂谷之一（地质学界估算约每年1cm量级，具体速率尚有不同测算）；最窄处的里翁—安蒂里翁海峡建有斜拉桥连接两岸（地质文献）",
};

const VIKOS_GORGE: TerrainEntry = {
  id: "vikos-gorge",
  nameZh: "维科斯峡谷",
  nameEn: "Vikos Gorge",
  category: "gorge",
  regionId: "europe",
  country: "greece",
  landmark: { name: "奥克夏观景点", lon: 20.7597, lat: 39.9711, elevation: 900, kind: "gorge" },
  bbox: [20.65, 39.92, 20.85, 40.05],
  axis: [[20.75, 40.03], [20.78, 39.93]],
  label: { lon: 20.76, lat: 39.98, rotation: 20 },
  source: "维科斯峡谷：品都斯山脉伊庇鲁斯扎戈里地区的一条石灰岩峡谷，由沃伊多马蒂斯河切蚀而成，峡谷最深处相对宽度之比在同类峡谷中极为突出，曾被吉尼斯世界纪录列为按此口径“世界最深峡谷”；地处维科斯—阿奥斯国家公园内（吉尼斯世界纪录 / 国家公园管理机构）",
};

const SAMARIA_GORGE: TerrainEntry = {
  id: "samaria-gorge",
  nameZh: "萨马利亚峡谷",
  nameEn: "Samaria Gorge",
  category: "gorge",
  regionId: "europe",
  country: "greece",
  landmark: { name: "希洛斯卡洛峡谷入口", lon: 23.9214, lat: 35.3164, elevation: 1250, kind: "gorge" },
  bbox: [23.88, 35.22, 24.00, 35.35],
  axis: [[23.94, 35.33], [23.92, 35.23]],
  label: { lon: 23.93, lat: 35.28, rotation: 15 },
  source: "萨马利亚峡谷：克里特岛白山南麓一条长约16km的石灰岩峡谷，是欧洲最长的峡谷之一，最窄处“铁门”两壁相距仅约3-4m、崖高约300m；1962年设为国家公园，是克里特野山羊（克里克里）的重要栖息地（希腊环境与能源部 / 国家公园管理机构）",
};

const ZAKYNTHOS_NAVAGIO: TerrainEntry = {
  id: "zakynthos-navagio",
  nameZh: "扎金索斯沉船湾",
  nameEn: "Navagio Beach, Zakynthos",
  category: "coast",
  regionId: "europe",
  country: "greece",
  landmark: { name: "沉船湾", lon: 20.6242, lat: 37.8597, elevation: 0, kind: "escarpment" },
  bbox: [20.58, 37.83, 20.66, 37.89],
  label: { lon: 20.62, lat: 37.86, rotation: 0 },
  source: "沉船湾：扎金索斯岛西北岸一处被陡峭白色石灰岩崖壁环抱的狭小海湾，仅能经海路或崖顶观景点抵达，湾内沙滩上搁浅着一艘1980年代的走私船残骸，是伊奥尼亚群岛最具代表性的海岸景观之一（希腊旅游局）",
};

const MANI_PENINSULA: TerrainEntry = {
  id: "mani-peninsula",
  nameZh: "马尼半岛",
  nameEn: "Mani Peninsula",
  category: "coast",
  regionId: "europe",
  country: "greece",
  landmark: { name: "迪罗斯洞穴", lon: 22.3667, lat: 36.6333, elevation: 5, kind: "escarpment" },
  bbox: [22.2, 36.38, 22.85, 36.85],
  axis: [[22.45, 36.85], [22.48, 36.4]],
  viewScale: 1.3,
  label: { lon: 22.45, lat: 36.6, rotation: -85 },
  source: "马尼半岛：伯罗奔尼撒半岛最南端伸出的三条岛脚之一，是泰格特斯山向南的延续，地势崎岖、多裸露石灰岩；西岸的迪罗斯洞穴（弗利哈达洞）是希腊最重要的洞穴之一，内有地下湖泊水系；半岛最南端的泰纳隆角常被视为希腊大陆的最南点；传统石砌塔楼是当地民居的鲜明特征（Britannica）",
};

const CRETE: TerrainEntry = {
  id: "crete",
  nameZh: "克里特岛",
  nameEn: "Crete",
  category: "island",
  regionId: "europe",
  country: "greece",
  landmark: { name: "普西罗里蒂斯峰（伊达山）", lon: 24.8228, lat: 35.2461, elevation: 2456, kind: "peak" },
  bbox: [23.5, 34.75, 26.35, 35.7],
  axis: [[23.6, 35.3], [26.2, 35.35]],
  viewScale: 2.0,
  label: { lon: 25.0, lat: 35.3, rotation: 0 },
  source: "克里特岛：希腊面积最大的岛屿，地处非洲板块向爱琴微板块俯冲形成的希腊弧（Hellenic Arc）之上，长期整体隆升；岛上自西向东分布白山、伊达山（普西罗里蒂斯，海拔2456m，全岛最高点）、迪克蒂山等多条山系，中南部有梅萨拉平原；伊达山的伊代恩洞穴在古希腊神话中被认为是宙斯成长之地（Britannica / 地质文献）",
};

const CORFU: TerrainEntry = {
  id: "corfu",
  nameZh: "科孚岛",
  nameEn: "Corfu / Kerkyra",
  category: "island",
  regionId: "europe",
  country: "greece",
  landmark: { name: "潘托克拉托山", lon: 19.8167, lat: 39.7667, elevation: 906, kind: "peak" },
  bbox: [19.64, 39.35, 20.08, 39.82],
  viewScale: 1.3,
  label: { lon: 19.85, lat: 39.6, rotation: 0 },
  source: "科孚岛：伊奥尼亚群岛最北端的主要岛屿，石灰岩喀斯特地貌为主，最高点潘托克拉托山海拔906m；因降水明显多于爱琴海诸岛，植被终年葱郁，多橄榄林；科孚老城的威尼斯式城防建筑群1386至1797年间陆续建成，2007年列入联合国教科文组织世界遗产（UNESCO）",
};

const MILOS: TerrainEntry = {
  id: "milos",
  nameZh: "米洛斯岛",
  nameEn: "Milos",
  category: "island",
  regionId: "europe",
  country: "greece",
  landmark: { name: "萨拉基尼科海岸", lon: 24.5386, lat: 36.7519, elevation: 20, kind: "escarpment" },
  bbox: [24.38, 36.62, 24.62, 36.78],
  label: { lon: 24.45, lat: 36.7, rotation: 0 },
  source: "米洛斯岛：南爱琴火山弧上一座火山成因的岛屿，岛内多种颜色的火山岩层构成独特景观，其中萨拉基尼科海岸由白色浮岩、凝灰岩经海蚀风蚀形成月球表面般的地貌；岛上自新石器时代起即开采黑曜岩并对外贸易，1820年在岛上发现《米洛斯的维纳斯》雕像；至今仍产高岭土、珍珠岩、膨润土（Britannica / GSG）",
};

const RHODES: TerrainEntry = {
  id: "rhodes",
  nameZh: "罗德岛",
  nameEn: "Rhodes",
  category: "island",
  regionId: "europe",
  country: "greece",
  landmark: { name: "阿塔维罗斯峰", lon: 27.8422, lat: 36.1519, elevation: 1215, kind: "peak" },
  bbox: [27.65, 35.85, 28.25, 36.5],
  viewScale: 1.4,
  label: { lon: 27.95, lat: 36.2, rotation: 0 },
  source: "罗德岛：多德卡尼斯群岛中面积最大的岛屿，以石灰岩地形为主，最高点阿塔维罗斯峰海拔1215m；罗德城中世纪古城由医院骑士团于14至16世纪修筑城防，是欧洲保存最完好的中世纪城防城市之一，1988年列入联合国教科文组织世界遗产（UNESCO）",
};

const LAKE_TRICHONIDA: TerrainEntry = {
  id: "lake-trichonida",
  nameZh: "特里霍尼达湖",
  nameEn: "Lake Trichonida",
  category: "lake",
  regionId: "europe",
  country: "greece",
  landmark: { name: "湖心", lon: 21.6, lat: 38.55, elevation: 15, kind: "lake" },
  bbox: [21.45, 38.48, 21.85, 38.62],
  label: { lon: 21.65, lat: 38.58, rotation: 0 },
  source: "特里霍尼达湖：位于希腊大陆西部埃托利亚—阿卡纳尼亚州，是希腊面积最大的天然湖泊（约96平方公里），系构造成因的湖盆，水深相对较大（Britannica）",
};

const LAKE_PRESPA: TerrainEntry = {
  id: "lake-prespa",
  nameZh: "普雷斯帕湖",
  nameEn: "Lake Prespa",
  category: "lake",
  regionId: "europe",
  country: "greece",
  landmark: { name: "阿吉奥斯阿希利奥斯岛", lon: 21.0, lat: 40.77, elevation: 853, kind: "lake" },
  bbox: [20.9, 40.68, 21.15, 40.95],
  viewScale: 1.3,
  label: { lon: 21.0, lat: 40.85, rotation: 0 },
  source: "普雷斯帕湖：分为大普雷斯帕湖与小普雷斯帕湖两部分，湖区跨希腊、阿尔巴尼亚、北马其顿三国，海拔约853m，属喀斯特构造湖，是卷羽鹈鹕等重要水鸟的栖息地；三国于2000年共同设立跨境普雷斯帕公园开展保护合作（“北马其顿”为2019年《普雷斯帕协议》后的现行正式名称）（Prespa Park / Ramsar）",
};

const ACHELOOS_RIVER: TerrainEntry = {
  id: "acheloos-river",
  nameZh: "阿刻罗俄斯河",
  nameEn: "Acheloos River",
  category: "river",
  regionId: "europe",
  country: "greece",
  landmark: { name: "阿刻罗俄斯河口三角洲", lon: 21.194, lat: 38.334, elevation: 2, kind: "delta" },
  bbox: [21.0, 38.3, 21.7, 39.75],
  axis: [[21.4, 39.7], [21.19, 38.33]],
  viewScale: 1.4,
  label: { lon: 21.3, lat: 39.0, rotation: -75 },
  source: "阿刻罗俄斯河：希腊本土最长的河流，全长约220km，发源于品都斯山脉南段，一路向南穿峡谷、经水库后在埃托利亚—阿卡纳尼亚沿岸注入伊奥尼亚海，河口发育三角洲与潟湖湿地；在古希腊神话中被人格化为河神阿刻罗俄斯（Britannica）",
};

const METEORA: TerrainEntry = {
  id: "meteora",
  nameZh: "迈泰奥拉",
  nameEn: "Meteora",
  category: "inselberg",
  regionId: "europe",
  country: "greece",
  landmark: { name: "大迈泰奥隆修道院岩柱", lon: 21.6300, lat: 39.7214, elevation: 534, kind: "peak" },
  bbox: [21.60, 39.69, 21.66, 39.75],
  label: { lon: 21.63, lat: 39.72, rotation: 0 },
  source: "迈泰奥拉：色萨利平原西北缘一群陡峭孤立的砂岩、砾岩岩柱，约6000万年前由古河流三角洲沉积后经区域隆升与差异侵蚀塑造而成；14世纪起东正教隐修士陆续在岩顶建起修道院，鼎盛时曾有20余座，现存6座仍在使用；1988年作为自然与文化双重遗产列入联合国教科文组织世界遗产名录（UNESCO / 地质文献）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 希腊 =====
  MOUNT_OLYMPUS, PINDUS_MOUNTAINS, TAYGETUS, MOUNT_PARNASSUS, MOUNT_ATHOS,
  WHITE_MOUNTAINS_CRETE, MOUNT_PILIO, METHANA,
  LASITHI_PLATEAU, THESSALY_PLAIN,
  SANTORINI_CALDERA, NISYROS,
  GULF_OF_CORINTH,
  VIKOS_GORGE, SAMARIA_GORGE,
  ZAKYNTHOS_NAVAGIO, MANI_PENINSULA,
  CRETE, SAMOTHRAKI, CORFU, MILOS, RHODES,
  LAKE_TRICHONIDA, LAKE_PRESPA,
  ACHELOOS_RIVER,
  METEORA,
];
