import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 意大利（regionId: "europe"，country: "italy"）
// 坐标据 ISPRA（意大利环境保护与研究院·地质调查）/ INGV（国家地球物理与火山学研究所）/
// 意大利国家公园 / UNESCO；只做本土与西西里、撒丁；跨境山脉（阿尔卑斯）按中性事实表述
// ============================================================

const ITALIAN_ALPS: TerrainEntry = {
  id: "italian-alps",
  nameZh: "意大利阿尔卑斯山脉",
  nameEn: "Italian Alps / Alpi italiane",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "大帕拉迪索峰（Gran Paradiso，4061m，完全在意大利境内的最高峰）", lon: 7.2686, lat: 45.5167, elevation: 4061, kind: "peak" },
  bbox: [6.55, 44.05, 13.75, 47.10],
  axis: [[6.9, 44.6], [13.4, 46.6]],
  viewFrom: 180,
  viewScale: 2.4,
  label: { lon: 9.5, lat: 46.2, rotation: -20 },
  pois: [
    { name: "勃朗峰（Monte Bianco / Mont Blanc）", lon: 6.865, lat: 45.833, note: "在意大利与法国交界一带" },
    { name: "马特洪峰（Cervino / Matterhorn）", lon: 7.658, lat: 45.976, note: "在意大利与瑞士交界一带" },
    { name: "罗莎峰（Monte Rosa）", lon: 7.867, lat: 45.937, note: "在意大利与瑞士交界一带" },
  ],
  source: "意大利阿尔卑斯：阿尔卑斯山脉沿意大利北界呈弧形的一段，构成波河平原和北方各国之间的屏障；勃朗峰、马特洪峰、罗莎峰都在意大利与法国 / 瑞士交界一带，完全落在意大利境内的最高峰是大帕拉迪索4061米（ISPRA）",
};

const APENNINES: TerrainEntry = {
  id: "apennines",
  nameZh: "亚平宁山脉",
  nameEn: "Apennines / Appennini",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "大萨索山·大角峰（Corno Grande，2912m，亚平宁最高峰）", lon: 13.564, lat: 42.469, elevation: 2912, kind: "peak" },
  bbox: [7.5, 38.0, 16.6, 44.5],
  axis: [[8.0, 44.3], [16.2, 38.2]],
  viewScale: 2.6,
  label: { lon: 13.0, lat: 42.0, rotation: -40 },
  source: "亚平宁山脉：纵贯意大利半岛约1200km 的“脊梁”，是亚得里亚板块与欧洲板块汇聚形成的年轻褶皱-逆冲山脉，至今地震频繁、滑坡多；最高峰大角峰2912米，山上的卡尔代罗内冰川曾是欧洲纬度最南的冰川、现已所剩无几（ISPRA / INGV）",
};

const DOLOMITES: TerrainEntry = {
  id: "dolomites",
  nameZh: "多洛米蒂山",
  nameEn: "Dolomites / Dolomiti",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "拉瓦雷多三峰（Tre Cime di Lavaredo）", lon: 12.305, lat: 46.618, elevation: 2999, kind: "peak" },
  bbox: [11.35, 46.00, 12.65, 46.85],
  axis: [[11.5, 46.15], [12.5, 46.70]],
  viewScale: 1.7,
  label: { lon: 11.90, lat: 46.45, rotation: -18 },
  pois: [
    { name: "马莫拉达峰（Marmolada，3343m）与其冰川", lon: 11.851, lat: 46.434, note: "多洛米蒂最高峰、也是这片山里唯一像样的冰川，近年退缩极快" },
  ],
  source: "多洛米蒂山：意大利东北的一片浅色碳酸盐岩山峰，岩石是约2.5亿年前特提斯海里的碳酸盐台地和珊瑚-藻礁，后来白云石化、又被阿尔卑斯造山抬升、断块化；垂直的岩壁、尖塔和台地是这片山的标志；2009年列入世界遗产（UNESCO / ISPRA）",
};

const PO_VALLEY: TerrainEntry = {
  id: "po-valley",
  nameZh: "波河平原",
  nameEn: "Po Valley / Pianura Padana",
  category: "plain",
  regionId: "europe",
  country: "italy",
  landmark: { name: "波河平原中部（曼托瓦 / 克雷莫纳一带）", lon: 10.30, lat: 45.10, elevation: 35, kind: "escarpment" },
  bbox: [7.0, 44.4, 12.6, 45.9],
  viewScale: 2.4,
  label: { lon: 10.0, lat: 45.1, rotation: 0 },
  source: "波河平原（Pianura Padana）：意大利最大的低地，东西向约650km、约4.6万平方公里，从西阿尔卑斯一直铺到亚得里亚海；本质是阿尔卑斯和亚平宁之间一个持续下沉的前陆盆地，被两侧山脉的碎屑和波河水系的冲积物填满；地势极平、常年多雾，是意大利的农业和工业核心（ISPRA）",
};

const PO_RIVER: TerrainEntry = {
  id: "po-river",
  nameZh: "波河",
  nameEn: "Po",
  category: "river",
  regionId: "europe",
  country: "italy",
  landmark: { name: "波河中游（皮亚琴察 / 克雷莫纳一带的堤防河段）", lon: 9.90, lat: 45.05, elevation: 40, kind: "meander" },
  bbox: [6.9, 44.6, 12.6, 45.6],
  axis: [[7.05, 44.70], [12.50, 44.95]],
  viewScale: 2.2,
  label: { lon: 9.8, lat: 45.0, rotation: -4 },
  source: "波河：意大利最长的河（约652km），源出西阿尔卑斯的蒙维索山，横穿波河平原、接纳阿尔卑斯和亚平宁下来的大量支流，在亚得里亚海堆出一个大三角洲；下游全程束在人工堤防之间，河床因泥沙淤积高出两岸农田（“悬河”），是意大利防洪的重点（ISPRA / AIPo）",
};

const TIBER_RIVER: TerrainEntry = {
  id: "tiber-river",
  nameZh: "台伯河",
  nameEn: "Tiber / Tevere",
  category: "river",
  regionId: "europe",
  country: "italy",
  landmark: { name: "台伯河·罗马市区曲流段", lon: 12.472, lat: 41.900, elevation: 15, kind: "meander" },
  bbox: [11.65, 41.65, 12.60, 43.95],
  axis: [[12.10, 43.85], [12.30, 41.75]],
  viewScale: 2.0,
  label: { lon: 12.15, lat: 42.6, rotation: -78 },
  source: "台伯河（Tevere）：意大利第三长的河（约406km），源出亚平宁的富马约洛山，向南穿翁布里亚和拉齐奥、经罗马，在奥斯蒂亚附近注入第勒尼安海；历史上是罗马城的生命线和防线，古代常泛滥，19世纪末在市区两岸筑起高堤（Britannica）",
};

const SICILY: TerrainEntry = {
  id: "sicily",
  nameZh: "西西里岛",
  nameEn: "Sicily / Sicilia",
  category: "island",
  regionId: "europe",
  country: "italy",
  landmark: { name: "埃特纳火山（Etna，2024-09 复测约3403m）", lon: 14.993, lat: 37.751, elevation: 3403, kind: "peak" },
  bbox: [12.35, 36.60, 15.70, 38.35],
  axis: [[12.5, 37.9], [15.5, 37.3]],
  viewScale: 1.6,
  label: { lon: 14.0, lat: 37.5, rotation: -12 },
  source: "西西里岛：地中海最大的岛，形状近三角形；北部是亚平宁的延续（马多尼耶、内布罗迪山），中南部是被褶皱抬升的沉积岩丘陵和硫、盐矿区，东岸立着埃特纳——欧洲最高、活动最频繁的活火山之一（ISPRA / INGV）",
};

const SARDINIA: TerrainEntry = {
  id: "sardinia",
  nameZh: "撒丁岛",
  nameEn: "Sardinia / Sardegna",
  category: "island",
  regionId: "europe",
  country: "italy",
  landmark: { name: "真纳尔真图山（Gennargentu，最高点拉马莫拉峰1834m）", lon: 9.310, lat: 40.000, elevation: 1834, kind: "peak" },
  bbox: [8.10, 38.85, 9.90, 41.30],
  axis: [[8.9, 39.1], [9.4, 41.1]],
  viewScale: 1.6,
  label: { lon: 8.9, lat: 40.1, rotation: -75 },
  source: "撒丁岛：地中海第二大岛，是一块古老的地块——主体是海西造山的花岗岩和更老的古生代基岩，只在东部有石灰岩高地（苏普拉蒙泰）；它和科西嘉曾是同一块“撒丁-科西嘉”微陆块，在地中海张开时被转动、分开；地震和火山活动都很弱（ISPRA）",
};

const GRAN_PARADISO: TerrainEntry = {
  id: "gran-paradiso",
  nameZh: "大帕拉迪索山群",
  nameEn: "Gran Paradiso",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "大帕拉迪索峰（4061m）", lon: 7.2686, lat: 45.5167, elevation: 4061, kind: "peak" },
  bbox: [6.98, 45.33, 7.58, 45.68],
  axis: [[7.05, 45.40], [7.50, 45.62]],
  viewScale: 1.5,
  label: { lon: 7.28, lat: 45.55, rotation: -20 },
  source: "大帕拉迪索山群：意大利阿尔卑斯的一片片麻岩穹隆状高山（“内部结晶岩体”之一），最高峰4061米，是完全在意大利境内的最高峰；1922年在这里设立意大利第一个国家公园——由原王室猎场改建，目的之一是保护当时几乎被猎绝的阿尔卑斯羱羊，与法国的瓦努瓦兹国家公园接壤（Parco Nazionale Gran Paradiso / ISPRA）",
};

const GRAN_SASSO: TerrainEntry = {
  id: "gran-sasso",
  nameZh: "大萨索山",
  nameEn: "Gran Sasso d'Italia",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "大角峰（Corno Grande，2912m）与坎波因佩拉托雷高原", lon: 13.564, lat: 42.469, elevation: 2912, kind: "peak" },
  bbox: [13.28, 42.33, 13.92, 42.62],
  axis: [[13.35, 42.40], [13.85, 42.55]],
  viewScale: 1.6,
  label: { lon: 13.56, lat: 42.50, rotation: -20 },
  source: "大萨索山：亚平宁中段的一片石灰岩高山，最高峰大角峰2912米，是亚平宁的最高点；山上的卡尔代罗内冰川自1913年起是欧洲纬度最南的冰川、现已萎缩到只剩薄薄一层冰；南坡的坎波因佩拉托雷是一片被称作“小西藏”的高山草原（ISPRA / INGV）",
};

const POLLINO: TerrainEntry = {
  id: "pollino",
  nameZh: "波利诺山",
  nameEn: "Pollino",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "多尔切多尔梅峰（Serra Dolcedorme，2267m）", lon: 16.200, lat: 39.900, elevation: 2267, kind: "peak" },
  bbox: [15.88, 39.74, 16.48, 40.06],
  axis: [[15.95, 39.80], [16.40, 40.00]],
  viewScale: 1.7,
  label: { lon: 16.15, lat: 39.90, rotation: -20 },
  source: "波利诺山：亚平宁南段、巴西利卡塔与卡拉布里亚交界的一片石灰岩-白云岩高山，最高峰多尔切多尔梅2267米；波利诺国家公园约1925平方公里，是意大利面积最大的国家公园，以孑遗针叶树“波斯尼亚松”（pino loricato）为标志——园内一株经科学定年约1230岁的波斯尼亚松是欧洲已知最老的树（Parco Nazionale del Pollino）",
};

const GENNARGENTU: TerrainEntry = {
  id: "gennargentu",
  nameZh: "真纳尔真图山",
  nameEn: "Gennargentu",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "拉马莫拉峰（Punta La Marmora，1834m，撒丁岛最高点）", lon: 9.312, lat: 39.992, elevation: 1834, kind: "peak" },
  bbox: [9.10, 39.84, 9.56, 40.16],
  axis: [[9.18, 39.90], [9.45, 40.12]],
  viewScale: 1.5,
  label: { lon: 9.31, lat: 39.99, rotation: -20 },
  source: "真纳尔真图山：撒丁岛中东部的高地，撒丁岛的最高点拉马莫拉峰1834米；岩石是海西造山的古生代片岩、板岩，山形浑圆、林线以上是牧场，是撒丁岛几条主要河流的源头，也是传统牧羊文化区“巴尔巴贾”的核心（ISPRA）",
};

const LAKE_GARDA: TerrainEntry = {
  id: "lake-garda",
  nameZh: "加尔达湖",
  nameEn: "Lake Garda / Lago di Garda",
  category: "lake",
  regionId: "europe",
  country: "italy",
  landmark: { name: "加尔达湖（北段峡谷段 / 南段冰碛丘一带）", lon: 10.65, lat: 45.65, elevation: 65, kind: "lake" },
  bbox: [10.48, 45.38, 10.92, 45.92],
  axis: [[10.72, 45.42], [10.60, 45.88]],
  viewScale: 1.5,
  label: { lon: 10.65, lat: 45.65, rotation: -75 },
  source: "加尔达湖：按面积是意大利最大的湖（约370平方公里）；一条阿尔卑斯的冰川沿构造谷向南流、把谷底刨深（北段最深约346m、两岸是峭壁），在谷口一带堆出一圈同心的终碛丘（南段因此宽浅、四周是低缓的葡萄园）——是典型的“冰蚀-冰碛”湖（ISPRA）",
};

const LAKE_COMO: TerrainEntry = {
  id: "lake-como",
  nameZh: "科莫湖",
  nameEn: "Lake Como / Lago di Como",
  category: "lake",
  regionId: "europe",
  country: "italy",
  landmark: { name: "科莫湖·三汊口（贝拉焦一带）", lon: 9.263, lat: 45.985, elevation: 199, kind: "lake" },
  bbox: [9.04, 45.78, 9.44, 46.22],
  axis: [[9.25, 45.82], [9.28, 46.18]],
  viewScale: 1.5,
  label: { lon: 9.26, lat: 45.99, rotation: -78 },
  source: "科莫湖：阿尔卑斯脚下一个倒“Y”字形的深湖，最深约410m、湖底远低于海平面（隐洼地）；“Y”形来自末次冰期的阿达冰川——冰流被山体分成三股、各刨出一条深槽，三槽在贝拉焦一带交汇（ISPRA）",
};

const VENETIAN_LAGOON: TerrainEntry = {
  id: "venetian-lagoon",
  nameZh: "威尼斯潟湖",
  nameEn: "Venetian Lagoon / Laguna di Venezia",
  category: "coast",
  regionId: "europe",
  country: "italy",
  landmark: { name: "威尼斯潟湖（威尼斯本岛与利多沙洲一带）", lon: 12.35, lat: 45.42, elevation: 0, kind: "escarpment" },
  bbox: [12.13, 45.18, 12.62, 45.62],
  viewScale: 1.5,
  label: { lon: 12.35, lat: 45.42, rotation: 0 },
  source: "威尼斯潟湖：亚得里亚海北端一片约550平方公里的浅水潟湖，被一列沙坝岛（利多）和三个潮汐口与外海隔开；冰后期海面上升淹没波河平原东缘、加上布伦塔、锡莱等河带来的泥沙，共同塑造了潟湖；地面因自然沉降和20世纪抽取地下水，近百年相对海面下降约20多厘米，现有 MOSE 活动闸防潮（ISPRA）",
};

const MOUNT_VESUVIUS: TerrainEntry = {
  id: "mount-vesuvius",
  nameZh: "维苏威火山",
  nameEn: "Mount Vesuvius / Vesuvio",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "维苏威火山锥（约1281m）与索马环形山脊", lon: 14.426, lat: 40.821, elevation: 1281, kind: "peak" },
  bbox: [14.34, 40.77, 14.53, 40.88],
  viewScale: 1.3,
  label: { lon: 14.43, lat: 40.82, rotation: 0 },
  source: "维苏威火山：那不勒斯湾东岸的一座层火山，是欧洲大陆唯一的活火山；今天的锥体套在更老的“索马火山”一圈残缺的环形山脊里；公元79年的一次普林尼式喷发把庞贝、赫库兰尼姆两座罗马城埋在数米厚的火山碎屑下（世界遗产），最近一次喷发在1944年；维苏威国家公园（INGV / UNESCO）",
};

const MOUNT_ETNA: TerrainEntry = {
  id: "mount-etna",
  nameZh: "埃特纳火山",
  nameEn: "Mount Etna",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "埃特纳火山（2024-09 复测约3403m，欧洲不计高加索的最高活火山）", lon: 14.993, lat: 37.751, elevation: 3403, kind: "peak" },
  bbox: [14.83, 37.58, 15.22, 37.92],
  axis: [[14.9, 37.65], [15.1, 37.88]],
  viewScale: 1.5,
  label: { lon: 14.99, lat: 37.75, rotation: 0 },
  source: "埃特纳火山：西西里东岸的一座巨型层火山，峰顶随喷发变化、2024-09 INGV 无人机复测约3403m（核实 2026-09-11），是欧洲（不计高加索）最高、也是世界上活动最频繁的火山之一，几乎常年在喷发或流熔岩；东坡有一个巨大的塌陷凹地“公牛谷”；山坡上一层层熔岩流、火山锥和葡萄园、柑橘园相间；2013年列入世界遗产（INGV / UNESCO）",
};

const CAMPI_FLEGREI: TerrainEntry = {
  id: "campi-flegrei",
  nameZh: "坎皮弗莱格瑞",
  nameEn: "Campi Flegrei / Phlegraean Fields",
  category: "basin",
  regionId: "europe",
  country: "italy",
  landmark: { name: "索尔法塔拉火口与波佐利一带（大破火山口内）", lon: 14.139, lat: 40.827, elevation: 90, kind: "escarpment" },
  bbox: [14.00, 40.77, 14.27, 40.93],
  viewScale: 1.5,
  label: { lon: 14.13, lat: 40.84, rotation: 0 },
  source: "坎皮弗莱格瑞（“燃烧的原野”）：那不勒斯以西一个直径约12—15km 的大破火山口，由约3.9万年前和1.5万年前两次特大喷发塌陷形成，口内散布几十座小火山锥、火口湖和喷气孔（索尔法塔拉）；波佐利一带的地面在缓慢升降（“慢地动”bradyseism），古罗马集市的石柱上留有被海生动物钻蚀的痕迹、记录了几米的升降；INGV 密切监测（INGV）",
};

const AEOLIAN_ISLANDS: TerrainEntry = {
  id: "aeolian-islands",
  nameZh: "伊奥利亚群岛",
  nameEn: "Aeolian Islands / Isole Eolie",
  category: "island",
  regionId: "europe",
  country: "italy",
  landmark: { name: "利帕里岛与武尔卡诺岛（群岛中部）", lon: 14.955, lat: 38.480, elevation: 400, kind: "island" },
  bbox: [14.30, 38.33, 15.30, 38.85],
  axis: [[14.5, 38.55], [15.25, 38.80]],
  viewScale: 1.7,
  label: { lon: 14.8, lat: 38.55, rotation: -20 },
  source: "伊奥利亚群岛：西西里以北一列7座主要火山岛（利帕里、武尔卡诺、萨利纳、斯特龙博利等），是非洲板块俯冲带上升的岩浆堆成的；“火山”（volcano）和两种喷发方式“武尔卡诺式”“斯特龙博利式”都以这里的岛命名；利帕里的黑曜岩和浮岩、武尔卡诺的喷气孔和泥浴很有名；2000年列入世界遗产（INGV / UNESCO）",
};

const STROMBOLI: TerrainEntry = {
  id: "stromboli",
  nameZh: "斯特龙博利火山",
  nameEn: "Stromboli",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "斯特龙博利火山岛（约924m）与“火流”坡（Sciara del Fuoco）", lon: 15.213, lat: 38.789, elevation: 924, kind: "peak" },
  bbox: [15.16, 38.75, 15.27, 38.83],
  viewScale: 1.3,
  label: { lon: 15.21, lat: 38.79, rotation: 0 },
  source: "斯特龙博利火山：伊奥利亚群岛最北的一座火山岛，两千多年来几乎从未停止过每隔几分钟到几十分钟一次的小规模爆炸（“斯特龙博利式”喷发），夜里从海上看像一座灯塔，故有“地中海的灯塔”之称；西北坡有一道叫“火流”的滑塌凹槽，喷出物沿它滚进海里；偶有较强的“阵发”（2019年一次曾造成人员伤亡）（INGV）",
};

const AMALFI_COAST: TerrainEntry = {
  id: "amalfi-coast",
  nameZh: "阿马尔菲海岸",
  nameEn: "Amalfi Coast / Costiera Amalfitana",
  category: "coast",
  regionId: "europe",
  country: "italy",
  landmark: { name: "阿马尔菲 / 波西塔诺一带的石灰岩崖岸", lon: 14.600, lat: 40.630, elevation: 250, kind: "escarpment" },
  bbox: [14.40, 40.58, 14.78, 40.68],
  axis: [[14.42, 40.62], [14.75, 40.64]],
  viewFrom: 180,
  viewScale: 1.4,
  label: { lon: 14.58, lat: 40.63, rotation: -6 },
  source: "阿马尔菲海岸：索伦托半岛南侧约50km 长的一段海岸，拉塔里山的石灰岩崖直插第勒尼安海，被一条条短而陡的深沟切开，村镇沿崖坡层层叠建、坡上是柠檬园的石阶梯田；1997年作为地中海式文化景观列入世界遗产（ISPRA / UNESCO）",
};

const CAPRI: TerrainEntry = {
  id: "capri",
  nameZh: "卡普里岛",
  nameEn: "Capri",
  category: "island",
  regionId: "europe",
  country: "italy",
  landmark: { name: "卡普里岛与法拉利奥尼海蚀柱", lon: 14.233, lat: 40.550, elevation: 400, kind: "island" },
  bbox: [14.18, 40.53, 14.29, 40.575],
  viewScale: 1.3,
  label: { lon: 14.23, lat: 40.55, rotation: 0 },
  source: "卡普里岛：那不勒斯湾口一座石灰岩小岛，原来和索伦托半岛相连、后被海侵隔开；四周是近乎垂直的海崖，海里立着“法拉利奥尼”海蚀柱；“蓝洞”是一个只有小船能钻进去的海蚀洞，阳光从水下的洞口透进来把洞里照成幽蓝色（ISPRA）",
};

const CINQUE_TERRE: TerrainEntry = {
  id: "cinque-terre",
  nameZh: "五渔村海岸",
  nameEn: "Cinque Terre",
  category: "coast",
  regionId: "europe",
  country: "italy",
  landmark: { name: "五渔村（维尔纳扎 / 马纳罗拉一带的梯田崖岸）", lon: 9.710, lat: 44.110, elevation: 150, kind: "escarpment" },
  bbox: [9.64, 44.07, 9.78, 44.16],
  axis: [[9.66, 44.14], [9.76, 44.08]],
  viewFrom: 90,
  viewScale: 1.3,
  label: { lon: 9.71, lat: 44.11, rotation: -55 },
  source: "五渔村：利古里亚东海岸一段陡峭的砂岩-片岩崖岸，五个村子挤在少有的几处溪口小平地上，村后的陡坡被几百公里长的干砌石墙修成一级级葡萄梯田；1997年作为文化景观列入世界遗产，1999年设国家公园；石墙年久失修引发的滑坡是主要威胁（ISPRA / UNESCO）",
};

const TUSCAN_HILLS: TerrainEntry = {
  id: "tuscan-hills",
  nameZh: "托斯卡纳丘陵",
  nameEn: "Tuscan Hills",
  category: "hills",
  regionId: "europe",
  country: "italy",
  landmark: { name: "锡耶纳黏土丘陵（Crete Senesi）与奥尔恰谷", lon: 11.55, lat: 43.20, elevation: 300, kind: "escarpment" },
  bbox: [10.95, 42.85, 11.95, 43.55],
  viewScale: 1.9,
  label: { lon: 11.45, lat: 43.20, rotation: 0 },
  source: "托斯卡纳丘陵：亚平宁西侧一片起伏和缓的丘陵，底子是上新世一片古海留下的黏土、泥灰岩，夹着盐和石膏；锡耶纳以南的“黏土丘陵”几乎无树，被流水冲成沟壑（calanchi）和白色的泥丘（biancane），像月球表面；奥尔恰谷 2004 年作为文化景观列入世界遗产（ISPRA / UNESCO）",
};

const CARSO_KARST: TerrainEntry = {
  id: "carso-karst",
  nameZh: "卡尔索高原",
  nameEn: "The Carso / Karst Plateau",
  category: "plateau",
  regionId: "europe",
  country: "italy",
  landmark: { name: "的里雅斯特北面的卡尔索石灰岩高原", lon: 13.85, lat: 45.70, elevation: 300, kind: "escarpment" },
  bbox: [13.58, 45.58, 14.02, 45.86],
  viewScale: 1.5,
  label: { lon: 13.82, lat: 45.72, rotation: 0 },
  source: "卡尔索高原：的里雅斯特北面一片石灰岩台地，跨意大利与斯洛文尼亚——“喀斯特”（karst）一词就来自这里的地名；地表几乎没有河流、遍布落水洞和溶蚀洼地（doline），地下发育大量洞穴和暗河，蒂马沃河在此“钻”入地下、几十公里后又在海边涌出（ISPRA）",
};

const ALTA_MURGIA: TerrainEntry = {
  id: "alta-murgia",
  nameZh: "上穆尔杰高原",
  nameEn: "Alta Murgia",
  category: "plateau",
  regionId: "europe",
  country: "italy",
  landmark: { name: "上穆尔杰石灰岩台地（阿尔塔穆拉 / 格拉维纳一带）", lon: 16.40, lat: 40.85, elevation: 500, kind: "escarpment" },
  bbox: [15.95, 40.48, 16.85, 41.12],
  viewScale: 1.9,
  label: { lon: 16.40, lat: 40.80, rotation: 0 },
  pois: [
    { name: "马泰拉峡谷与“萨西”窑洞城区（Gravina di Matera）", lon: 16.612, lat: 40.665, note: "台地被切出的干峡谷，谷壁上凿出的窑洞聚落是世界遗产" },
  ],
  source: "上穆尔杰：普利亚中部一片海拔几百米的石灰岩喀斯特台地，地表是一片碎石、矮草的“石漠草原”，被几条只在暴雨时过水的干峡谷（gravina）切开；峡谷壁上从旧石器时代起就有人凿洞居住，马泰拉的“萨西”窑洞城区是延续到20世纪的例子（世界遗产）；上穆尔杰国家公园2004年设立（Parco Nazionale dell'Alta Murgia）",
};

const GARGANO_PROMONTORY: TerrainEntry = {
  id: "gargano-promontory",
  nameZh: "加尔加诺半岛",
  nameEn: "Gargano Promontory",
  category: "hills",
  regionId: "europe",
  country: "italy",
  landmark: { name: "加尔加诺半岛内陆的翁布拉森林一带", lon: 16.00, lat: 41.80, elevation: 700, kind: "escarpment" },
  bbox: [15.58, 41.55, 16.28, 42.02],
  viewScale: 1.6,
  label: { lon: 16.00, lat: 41.78, rotation: 0 },
  source: "加尔加诺半岛：意大利“靴子”的“马刺”，一块石灰岩地垒，原本是亚得里亚海里的一座岛，后来被塔沃利耶雷平原的泥沙连到大陆上；台地上是喀斯特和一片古老的山毛榉-栎树混交林（翁布拉森林，世界遗产），沿海是沙坝拦出的潟湖（莱西纳湖、瓦拉诺湖）和海蚀崖、海蚀柱；加尔加诺国家公园1991年设立（Parco Nazionale del Gargano）",
};

const MARMOLADA: TerrainEntry = {
  id: "marmolada",
  nameZh: "马莫拉达峰",
  nameEn: "Marmolada",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "马莫拉达峰（Punta Penia，3343m）与马莫拉达冰川", lon: 11.851, lat: 46.434, elevation: 3343, kind: "peak" },
  bbox: [11.77, 46.40, 11.93, 46.48],
  viewScale: 1.3,
  label: { lon: 11.851, lat: 46.434, rotation: 0 },
  source: "马莫拉达峰：多洛米蒂的最高峰（顶峰佩尼亚峰3343m），也是这片山里唯一一座“像样”的山峰——它不是白云岩，而是灰色石灰岩；北坡的马莫拉达冰川是多洛米蒂唯一的冰川，面积已缩到约1.6 km²、退缩极快，可能在本世纪中叶前后消失；2022年一次冰崩造成人员伤亡（ISPRA / Dolomiti UNESCO）",
};

const LAKE_TRASIMENO: TerrainEntry = {
  id: "lake-trasimeno",
  nameZh: "特拉西梅诺湖",
  nameEn: "Lake Trasimeno / Lago Trasimeno",
  category: "lake",
  regionId: "europe",
  country: "italy",
  landmark: { name: "特拉西梅诺湖", lon: 12.10, lat: 43.13, elevation: 257, kind: "lake" },
  bbox: [11.95, 43.03, 12.27, 43.24],
  viewScale: 1.4,
  label: { lon: 12.10, lat: 43.13, rotation: 0 },
  source: "特拉西梅诺湖：翁布里亚一个约128平方公里的浅湖，是亚平宁半岛上最大的湖，但最深只有约6米；它坐落在一个构造洼地里、没有天然出水口（古罗马时代起就靠人工隧道排水），水位随降水大幅波动；公元前217年汉尼拔在此湖畔伏击并大败罗马军队（ISPRA）",
};

const DUNE_DI_PISCINAS: TerrainEntry = {
  id: "dune-di-piscinas",
  nameZh: "皮西纳斯沙丘",
  nameEn: "Dune di Piscinas",
  category: "coast",
  regionId: "europe",
  country: "italy",
  landmark: { name: "皮西纳斯海岸沙丘（撒丁岛西南“绿色海岸”）", lon: 8.440, lat: 39.550, elevation: 30, kind: "dune" },
  bbox: [8.39, 39.49, 8.51, 39.62],
  axis: [[8.46, 39.51], [8.42, 39.60]],
  viewScale: 1.3,
  label: { lon: 8.44, lat: 39.55, rotation: -70 },
  source: "皮西纳斯沙丘：撒丁岛西南“绿色海岸”上一片欧洲少见的大型海岸沙丘，最高处近百米、向内陆延伸数公里；沙来自后方几条河（其中带着19世纪蒙泰韦基奥矿区冲下的物质），被盛行的西风堆上岸、正缓慢埋没后面的刺柏丛，被称作“撒丁岛的撒哈拉”（ISPRA）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 意大利 =====
  ITALIAN_ALPS, APENNINES, DOLOMITES, PO_VALLEY, PO_RIVER, TIBER_RIVER, SICILY, SARDINIA,
  GRAN_PARADISO, GRAN_SASSO, POLLINO, GENNARGENTU, LAKE_GARDA, LAKE_COMO, VENETIAN_LAGOON,
  MOUNT_VESUVIUS, MOUNT_ETNA, CAMPI_FLEGREI, AEOLIAN_ISLANDS, STROMBOLI,
  AMALFI_COAST, CAPRI, CINQUE_TERRE,
  TUSCAN_HILLS, CARSO_KARST, ALTA_MURGIA, GARGANO_PROMONTORY, MARMOLADA,
  LAKE_TRASIMENO, DUNE_DI_PISCINAS,
];
