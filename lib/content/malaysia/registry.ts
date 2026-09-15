import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 — 马来西亚
// ============================================================

const TITIWANGSA_MOUNTAINS: TerrainEntry = {
  id: "titiwangsa-mountains",
  nameZh: "蒂蒂旺沙山脉",
  nameEn: "Titiwangsa Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "哥打峰", lon: 101.267, lat: 4.833, elevation: 2183, kind: "peak" },
  bbox: [100.9, 2.2, 101.8, 6.2],
  axis: [[100.95, 5.8], [101.7, 2.6]],
  viewScale: 1.5,
  label: { lon: 101.35, lat: 4.5, rotation: -20 },
  source: "蒂蒂旺沙山脉：马来半岛的脊梁山系，呈西北—东南走向绵延约480公里，是马来半岛最长、最连贯的山脉；最高峰哥打峰海拔2183米，为半岛第二高峰（Wikipedia/worldatlas.com WebSearch 2026）",
};

const GUNUNG_TAHAN: TerrainEntry = {
  id: "gunung-tahan",
  nameZh: "大汉山（塔汉山）",
  nameEn: "Gunung Tahan",
  category: "mountain_system",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "大汉山主峰", lon: 102.24, lat: 4.633, elevation: 2187, kind: "peak" },
  bbox: [102.05, 4.35, 102.55, 4.85],
  viewScale: 1.3,
  label: { lon: 102.25, lat: 4.30, rotation: 0 },
  source: "大汉山：马来半岛最高峰，海拔2187米，位于彭亨与吉兰丹交界，是国家公园（大汉山国家公园）的核心地物，公园涵盖彭亨、吉兰丹、登嘉楼三州交界的大片低地热带雨林，是马来半岛现存最古老的雨林生态系统之一（Britannica/Wikipedia WebSearch 2026）",
};

const CAMERON_HIGHLANDS: TerrainEntry = {
  id: "cameron-highlands",
  nameZh: "金马仑高原",
  nameEn: "Cameron Highlands",
  category: "plateau",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "丹拉打镇", lon: 101.38, lat: 4.470, elevation: 1500, kind: "city" },
  bbox: [101.30, 4.40, 101.50, 4.55],
  viewScale: 1.2,
  label: { lon: 101.38, lat: 4.35, rotation: 0 },
  source: "金马仑高原：蒂蒂旺沙山脉中一片海拔1100至1800米的凉爽高原，1885年由威廉·金马仑勘察得名，20世纪初起被英国殖民当局开发为避暑高地；1929年首个茶园“波爹茶园”建成后发展为马来西亚重要的高山茶产区（Britannica WebSearch 2026）",
};

const MOUNT_KINABALU: TerrainEntry = {
  id: "mount-kinabalu",
  nameZh: "京那巴鲁山（神山）",
  nameEn: "Mount Kinabalu",
  category: "mountain_system",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "罗氏峰", lon: 116.5581, lat: 6.0754, elevation: 4095, kind: "peak" },
  bbox: [116.45, 5.90, 116.70, 6.20],
  viewScale: 1.3,
  label: { lon: 116.55, lat: 5.85, rotation: 0 },
  source: "京那巴鲁山：马来西亚与马来群岛最高峰，海拔4095米，是侵入克罗克山脉沉积岩层的一座独立花岗岩体，锆石铀铅测年约785万至722万年前（核实 2026-09-11：原写的约1500万年前、为克罗克山脉的一部分均不成立）；2000年京那巴鲁公园列入UNESCO世界遗产名录，是东南亚植物多样性核心地区之一，园内植物物种约5000至6000种（Britannica/UNESCO WebSearch 2026）",
};

const CROCKER_RANGE: TerrainEntry = {
  id: "crocker-range",
  nameZh: "克罗克山脉",
  nameEn: "Crocker Range",
  category: "mountain_system",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "克罗克山脉中段", lon: 116.30, lat: 5.50, elevation: 1500, kind: "peak" },
  bbox: [116.10, 5.10, 116.50, 6.00],
  axis: [[116.20, 5.90], [116.40, 5.15]],
  viewScale: 1.3,
  label: { lon: 116.20, lat: 5.55, rotation: -15 },
  source: "克罗克山脉：沙巴西部一条南北走向、长约120公里的山系，无突出的单一主峰，海拔介于6至2076米之间；克罗克山脉生物圈保护区面积达35万公顷，是婆罗洲岛上最大的保护区之一，2014年列入UNESCO人与生物圈计划（UNESCO/crbr.sabahparks.org.my WebSearch 2026）",
};

const KELABIT_HIGHLANDS: TerrainEntry = {
  id: "kelabit-highlands",
  nameZh: "格拉比高原",
  nameEn: "Kelabit Highlands",
  category: "plateau",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "巴里奥村", lon: 115.48, lat: 3.74, elevation: 1000, kind: "city" },
  bbox: [115.15, 3.55, 115.75, 4.05],
  viewScale: 1.2,
  label: { lon: 115.48, lat: 3.50, rotation: 0 },
  source: "格拉比高原：砂拉越最北端米里省内一片内陆高原，核心为巴里奥村所在的“巴平原”，海拔1000至1200米、南北延伸约30公里；周边最高峰穆鲁德山海拔2423米；是砂拉越原住民格拉比族的传统聚居地，全区约6800人（Wikipedia WebSearch 2026）",
};

const GUA_TEMPURUNG: TerrainEntry = {
  id: "gua-tempurung",
  nameZh: "东姑洞（椰壳洞）",
  nameEn: "Gua Tempurung",
  category: "gorge",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "东姑洞主厅", lon: 101.187, lat: 4.433, elevation: 100, kind: "gorge" },
  bbox: [101.14, 4.40, 101.23, 4.47],
  label: { lon: 101.19, lat: 4.46, rotation: 0 },
  source: "东姑洞：霹雳州哥打镇一处石灰岩溶洞，洞穴年代约4亿年，晚中新世（约1000万年前）经石灰岩溶蚀作用形成，全长约4.5公里，内有长约1.6公里的地下暗河，因周边石灰岩山体形似椰壳而得名（malaysia.travel/thelandofwanderlust.com WebSearch 2026）",
};

const BATU_CAVES: TerrainEntry = {
  id: "batu-caves",
  nameZh: "黑风洞",
  nameEn: "Batu Caves",
  category: "gorge",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "黑风洞石灰岩丘", lon: 101.6839, lat: 3.2379, elevation: 325, kind: "gorge" },
  bbox: [101.665, 3.225, 101.705, 3.250],
  label: { lon: 101.684, lat: 3.215, rotation: 0 },
  source: "黑风洞：雪兰莪州鹅麦一座海拔325米的石灰岩丘及其洞穴群，主体为志留纪石灰岩，年代约4亿年，三叠纪（约2亿年前）经历地壳抬升、挤压与褶皱等构造变形；洞穴由地下水长期溶蚀石灰岩形成，是马来西亚知名的溶洞地貌（Wikipedia WebSearch 2026）",
};

const GUNUNG_MULU_NP: TerrainEntry = {
  id: "gunung-mulu-np",
  nameZh: "姆鲁山国家公园",
  nameEn: "Gunung Mulu National Park",
  category: "gorge",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "姆鲁山尖峰石林", lon: 114.90, lat: 4.05, elevation: 2377, kind: "peak" },
  bbox: [114.75, 3.95, 115.05, 4.20],
  viewScale: 1.2,
  label: { lon: 114.90, lat: 4.25, rotation: 0 },
  source: "姆鲁山国家公园：砂拉越一处世界研究最深入的热带喀斯特地区，公园面积5.29万公顷，以海拔2377米的姆鲁山砂岩尖峰群与逾295公里已探明洞穴系统著称；砂拉越洞厅长600米、宽415米、高80米，是已知世界最大天然洞穴厅；鹿洞是世界第二大洞穴，2000年列入UNESCO世界遗产名录（UNESCO/Wikipedia WebSearch 2026）",
};

const NIAH_CAVES: TerrainEntry = {
  id: "niah-caves",
  nameZh: "尼亚洞穴",
  nameEn: "Niah Caves",
  category: "gorge",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "大洞（尼亚国家公园）", lon: 113.77, lat: 3.825, elevation: 394, kind: "gorge" },
  bbox: [113.72, 3.78, 113.82, 3.87],
  label: { lon: 113.77, lat: 3.88, rotation: 0 },
  source: "尼亚洞穴：砂拉越海岸平原苏比斯山石灰岩地块北缘的洞穴群，石灰岩层形成于该区域曾没于海底的古地质年代；大洞洞口高逾60米，洞内「深洞头骨」2016年重测为距今约3.7万至4.5万年，另有石器等人类活动证据可追溯至约6.5万年前（核实 2026-09-11：原写的「头骨碎片约6.5万年」把石器年代安到了头骨上），是东南亚已知最早的人类遗迹之一，2024年列入UNESCO世界遗产名录（Wikipedia/nationalgeographic.com WebSearch 2026）",
};

const MALIAU_BASIN: TerrainEntry = {
  id: "maliau-basin",
  nameZh: "马利吾盆地（沙巴迷失的世界）",
  nameEn: "Maliau Basin",
  category: "basin",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "马利吾盆地中心", lon: 116.90, lat: 4.75, elevation: 900, kind: "peak" },
  bbox: [116.75, 4.60, 117.05, 4.90],
  viewScale: 1.2,
  label: { lon: 116.90, lat: 4.55, rotation: 0 },
  source: "马利吾盆地（俗称“沙巴迷失的世界”）：沙巴内陆一处近圆形碟状盆地，直径约25公里，外缘陡坡高差300至1600米，形成天然屏障；盆地由约1500万至900万年前三角洲沉积的砂岩与泥岩构成，约500万年前经火山与构造运动整体抬升为高原、中部再受风化侵蚀下陷为盆地（非死火山口）（Geological Society of Malaysia/mysabah.com WebSearch 2026）",
};

const DANUM_VALLEY: TerrainEntry = {
  id: "danum-valley",
  nameZh: "丹浓谷",
  nameEn: "Danum Valley",
  category: "valley",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "丹浓谷研究中心", lon: 117.80, lat: 5.03, elevation: 200, kind: "city" },
  bbox: [117.65, 4.90, 117.95, 5.15],
  label: { lon: 117.80, lat: 4.85, rotation: 0 },
  source: "丹浓谷保护区：沙巴中部一片面积438平方公里、基本未受干扰的低地龙脑香科雨林，1980年设立保护区，森林历史约1.3亿年，是世界现存最古老的雨林之一，95%为混合龙脑香林、5%为山地地形，1968年起被列为沙巴森林法一级（保护）林（Wikipedia/mysabah.com WebSearch 2026）",
};

const ENDAU_ROMPIN: TerrainEntry = {
  id: "endau-rompin",
  nameZh: "安顺—罗宾国家公园",
  nameEn: "Endau-Rompin National Park",
  category: "hills",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "安顺—罗宾公园总部", lon: 103.25, lat: 2.55, elevation: 150, kind: "city" },
  bbox: [103.05, 2.35, 103.55, 2.85],
  viewScale: 1.2,
  label: { lon: 103.25, lat: 2.30, rotation: 0 },
  source: "安顺—罗宾国家公园：横跨柔佛与彭亨两州、马来半岛南部现存最大的保护区，面积4.89万公顷，地貌以起伏丘陵、花岗岩露头、河谷与瀑布群为主；园内岩层年代可追溯至约2.48亿年前，雨林生态系统历史逾1.3亿年，是马来虎、马来貘等濒危旗舰物种的重要栖息地（ASEAN Centre for Biodiversity/Wikipedia WebSearch 2026）",
};

const LANGKAWI_GEOPARK: TerrainEntry = {
  id: "langkawi-geopark",
  nameZh: "浮罗交怡地质公园",
  nameEn: "Langkawi UNESCO Global Geopark",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "基林河喀斯特地质森林公园", lon: 99.85, lat: 6.42, elevation: 50, kind: "island" },
  bbox: [99.62, 6.15, 99.93, 6.50],
  label: { lon: 99.75, lat: 6.10, rotation: 0 },
  source: "浮罗交怡地质公园：2007年获认定为东南亚首个UNESCO世界地质公园，地质记录跨越逾5.5亿年，涵盖马来西亚保存最完整的寒武纪至二叠纪古生代沉积序列；基林河一带以石灰岩喀斯特地貌为主，长期溶蚀作用形成众多海蚀柱与海蚀拱，公园由玛琴昌寒武纪地质森林公园、基林喀斯特地质森林公园、浮罗浮浮大理岩地质森林公园三部分组成（UNESCO WebSearch 2026）",
};

const PENANG_ISLAND: TerrainEntry = {
  id: "penang-island",
  nameZh: "槟榔屿",
  nameEn: "Penang Island",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "升旗山", lon: 100.267, lat: 5.427, elevation: 833, kind: "island" },
  bbox: [100.15, 5.25, 100.35, 5.50],
  label: { lon: 100.30, lat: 5.20, rotation: 0 },
  source: "槟榔屿：马来半岛西北岸外一座花岗岩岛屿，最高点升旗山海拔833米，岛屿中心为森林覆盖的花岗岩丘陵、四周为沿海平原，北部区域岩体形成于早侏罗纪至晚石炭纪，南部区域为中粒至粗粒黑云母长石花岗岩，中央丘陵是重要的集水区，森林历史逾1.3亿年（Wikipedia/gsm.org.my WebSearch 2026）",
};

const TIOMAN_ISLAND: TerrainEntry = {
  id: "tioman-island",
  nameZh: "刁曼岛",
  nameEn: "Tioman Island",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "刁曼岛中央山体", lon: 104.161, lat: 2.786, elevation: 1038, kind: "island" },
  bbox: [104.10, 2.70, 104.20, 2.90],
  label: { lon: 104.10, lat: 2.65, rotation: 0 },
  source: "刁曼岛：彭亨州外南海一座火成岩岛屿，岩体主要由火山岩、深成岩与接触变质岩构成，东、北、南部以火山岩为主（流纹岩与英安岩，局部为安山岩），花岗岩体形成于晚白垩世（约8000万年前），比火山岩晚约880万年侵入，是马来西亚知名的潜水与生态旅游目的地（Geological Society of Malaysia WebSearch 2026）",
};

const PERHENTIAN_ISLANDS: TerrainEntry = {
  id: "perhentian-islands",
  nameZh: "停泊岛",
  nameEn: "Perhentian Islands",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "大停泊岛", lon: 102.73, lat: 5.90, elevation: 100, kind: "island" },
  bbox: [102.68, 5.85, 102.78, 5.97],
  label: { lon: 102.73, lat: 5.80, rotation: 0 },
  source: "停泊岛：登嘉楼州外南海一对花岗岩小岛（大停泊岛与小停泊岛），沿岸多白沙海滩与珊瑚礁，是马来半岛东岸知名的潜水与浮潜目的地，岛名“停泊”源自马来语，历史上曾是往来商船的停靠补给点（公开资料 WebSearch 2026）",
};

const REDANG_ISLAND: TerrainEntry = {
  id: "redang-island",
  nameZh: "热浪岛",
  nameEn: "Redang Island",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "热浪岛主岛", lon: 103.01, lat: 5.77, elevation: 150, kind: "island" },
  bbox: [102.95, 5.72, 103.08, 5.83],
  label: { lon: 103.01, lat: 5.68, rotation: 0 },
  source: "热浪岛：登嘉楼州外南海一座花岗岩岛屿，是马来西亚海洋公园的组成部分，沿岸珊瑚礁生态系统保存完好，是马来半岛东岸重要的珊瑚礁保护区与潜水目的地（公开资料 WebSearch 2026）",
};


const PAHANG_RIVER: TerrainEntry = {
  id: "pahang-river",
  nameZh: "彭亨河",
  nameEn: "Pahang River",
  category: "river",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "北根（彭亨河口）", lon: 103.39, lat: 3.49, elevation: 0, kind: "delta" },
  bbox: [102.35, 3.45, 103.45, 4.05],
  axis: [[102.36, 3.93], [103.39, 3.49]],
  viewScale: 1.2,
  label: { lon: 102.9, lat: 3.75, rotation: -20 },
  source: "彭亨河：马来半岛最长的河流，全长459公里，由哲莱河与淡美璐河两条源流在杰兰突以北约16公里处汇合而成，流域面积约2.9万平方公里，向南流经淡马鲁后在昔加末转向东流，最终于北根注入南海（Britannica WebSearch 2026）",
};

const KELANTAN_RIVER: TerrainEntry = {
  id: "kelantan-river",
  nameZh: "吉兰丹河",
  nameEn: "Kelantan River",
  category: "river",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "哥打巴鲁（吉兰丹河口）", lon: 102.24, lat: 6.13, elevation: 0, kind: "delta" },
  bbox: [101.85, 4.95, 102.30, 6.20],
  axis: [[101.9, 5.0], [102.24, 6.13]],
  viewScale: 1.2,
  label: { lon: 102.0, lat: 5.6, rotation: -10 },
  source: "吉兰丹河：马来半岛第四长河流，全长248公里，由加拉斯河与勒比河汇流而成，流域面积约1.19万平方公里，向北流经哥打巴鲁后注入南海，流域涵盖大汉山国家公园部分区域（Wikipedia WebSearch 2026）",
};

const PERAK_RIVER: TerrainEntry = {
  id: "perak-river",
  nameZh: "霹雳河",
  nameEn: "Perak River",
  category: "river",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "端洛（霹雳河口）", lon: 100.98, lat: 4.02, elevation: 0, kind: "delta" },
  bbox: [100.98, 4.02, 101.35, 5.65],
  axis: [[101.3, 5.60], [100.98, 4.02]],
  viewScale: 1.2,
  label: { lon: 101.15, lat: 4.8, rotation: -15 },
  source: "霹雳河：马来半岛第二长河流，全长约400公里，发源于霹雳、吉兰丹与泰国三方交界处、皇家贝伦州立公园一带的蒂蒂旺沙山脉，向南流经端洛注入马六甲海峡（Wikipedia WebSearch 2026）",
};

const KINABATANGAN_RIVER: TerrainEntry = {
  id: "kinabatangan-river",
  nameZh: "京那巴当岸河",
  nameEn: "Kinabatangan River",
  category: "river",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "苏高（京那巴当岸下游）", lon: 118.35, lat: 5.50, elevation: 20, kind: "meander" },
  bbox: [116.5, 5.2, 118.5, 5.9],
  axis: [[116.5, 5.3], [118.5, 5.9]],
  viewScale: 1.2,
  label: { lon: 117.5, lat: 5.7, rotation: -8 },
  source: "京那巴当岸河：马来西亚第二长河流，全长约560公里，发源于沙巴西南部克罗克山脉，向东流经桑达坎东南方注入苏禄海；下游河漫滩森林是全球仅有的两处可同时观察到10种灵长类动物的地点之一，2005年沙巴政府划设京那巴当岸野生动物保护区（Wikipedia/borneoecotours.com WebSearch 2026）",
};

const REJANG_RIVER: TerrainEntry = {
  id: "rejang-river",
  nameZh: "拉让江",
  nameEn: "Rejang River",
  category: "river",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "诗巫（拉让江畔最大城镇）", lon: 111.82, lat: 2.29, elevation: 10, kind: "meander" },
  bbox: [111.55, 1.95, 114.15, 2.60],
  axis: [[114.0, 2.30], [111.55, 2.20]],
  viewScale: 1.3,
  label: { lon: 112.8, lat: 2.15, rotation: 5 },
  source: "拉让江：马来西亚最长的河流，全长约563公里，发源于婆罗洲内陆伊兰山脉，向西流入南海，是婆罗洲第七长河流；沿岸最大城镇诗巫距河口约60公里，历史上是砂拉越内陆重要的木材与农产品运输水道（Wikivoyage/etawau.com WebSearch 2026）",
};

const TASIK_CHINI: TerrainEntry = {
  id: "tasik-chini",
  nameZh: "琴宁湖",
  nameEn: "Tasik Chini (Lake Chini)",
  category: "lake",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "琴宁湖", lon: 102.89, lat: 3.42, elevation: 40, kind: "lake" },
  bbox: [102.82, 3.36, 102.95, 3.48],
  label: { lon: 102.89, lat: 3.32, rotation: 0 },
  source: "琴宁湖：马来半岛第二大天然淡水湖，由12个相连的小湖组成，占地约5085公顷，距关丹约100公里；2009年获UNESCO认定为马来西亚首个生物圈保护区，湖区栖息138种植物、300余种非水生生物及144种淡水鱼，湖畔世居原住民奥朗阿斯利雅贡族（UNESCO/scmp.com WebSearch 2026）",
};

const BAKO_NATIONAL_PARK: TerrainEntry = {
  id: "bako-national-park",
  nameZh: "巴哥国家公园",
  nameEn: "Bako National Park",
  category: "coast",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "巴都卡帕海蚀柱", lon: 110.47, lat: 1.72, elevation: 10, kind: "escarpment" },
  bbox: [110.40, 1.68, 110.53, 1.78],
  label: { lon: 110.47, lat: 1.66, rotation: 0 },
  source: "巴哥国家公园：砂拉越一处沿岸砂岩地貌，历经数百万年海浪侵蚀塑造出陡峭悬崖、岬角与白沙海湾；海蚀作用在岬角处进一步侵蚀出造型奇特的海蚀拱与海蚀柱，柱体最高处约15米，表面因氧化铁沉积呈现橙红色条纹（Wikipedia/thestar.com.my WebSearch 2026）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 马来西亚 =====
  TITIWANGSA_MOUNTAINS, GUNUNG_TAHAN, CAMERON_HIGHLANDS,
  MOUNT_KINABALU, CROCKER_RANGE, KELABIT_HIGHLANDS,
  GUA_TEMPURUNG, BATU_CAVES, GUNUNG_MULU_NP, NIAH_CAVES,
  MALIAU_BASIN, DANUM_VALLEY, ENDAU_ROMPIN,
  LANGKAWI_GEOPARK, PENANG_ISLAND, TIOMAN_ISLAND,
  PERHENTIAN_ISLANDS, REDANG_ISLAND, PAHANG_RIVER, KELANTAN_RIVER, PERAK_RIVER, KINABATANGAN_RIVER,
  REJANG_RIVER, TASIK_CHINI, BAKO_NATIONAL_PARK,
];
