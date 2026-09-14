import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 / 越南
// 东南亚次区域第二个国家；黄沙（西沙）/长沙（南沙）群岛主权争议区域不收录，
// 与本项目一贯的南海争议排除原则一致；红河/湄公河上游、板约瀑布（与中国界河瀑布）
// 均中性表述、不涉主权；不写"东海/南海"等有争议海域专有名称
// ============================================================

const FANSIPAN: TerrainEntry = {
  id: "fansipan",
  nameZh: "番西邦峰",
  nameEn: "Fansipan",
  category: "mountain_system",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "番西邦峰主峰", lon: 103.7752, lat: 22.3033, elevation: 3147, kind: "peak" },
  bbox: [103.70, 22.24, 103.86, 22.38],
  label: { lon: 103.78, lat: 22.31, rotation: 0 },
  source: "番西邦峰：越南与中南半岛最高峰(3147米)，是黄连山脉的最高点，山体形成于约2.5亿至2.6亿年前古生代二叠纪至中生代三叠纪之交，山顶终年低温，保存有云雾林与高山植被生态，地处黄连山国家公园（越南林业局/UNESCO）",
};

const PHONG_NHA_KE_BANG: TerrainEntry = {
  id: "phong-nha-ke-bang",
  nameZh: "峰牙己榜",
  nameEn: "Phong Nha-Ke Bang",
  category: "mountain_system",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "峰牙洞", lon: 106.2833, lat: 17.5936, elevation: 200, kind: "gorge" },
  bbox: [106.05, 17.35, 106.55, 17.75],
  viewScale: 1.3,
  label: { lon: 106.25, lat: 17.55, rotation: 0 },
  source: "峰牙己榜：越南中部沿老挝边境一片喀斯特山地，石灰岩地层演化史可追溯至约4亿年前古生代，是亚洲现存规模最大的古老喀斯特地貌之一，境内已探明洞穴与地下水道总长约243公里（2023年联合测绘），世界最大天然洞穴韶洞即位于此，2003年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const BA_NA_HILLS: TerrainEntry = {
  id: "ba-na-hills",
  nameZh: "巴拿山",
  nameEn: "Ba Na Hills",
  category: "mountain_system",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "巴拿山主峰", lon: 107.9908, lat: 15.9967, elevation: 1487, kind: "peak" },
  bbox: [107.94, 15.95, 108.05, 16.05],
  label: { lon: 108.00, lat: 16.00, rotation: 0 },
  source: "巴拿山：岘港以西一座海拔1487米的山峰，山顶气候比沿海城区低约10摄氏度，20世纪初曾是法国殖民时期的避暑山庄，如今山顶经缆车可达，是越南中部知名的高山旅游目的地（越南国家旅游局）",
};

const BACH_MA_MOUNTAIN: TerrainEntry = {
  id: "bach-ma-mountain",
  nameZh: "白马山",
  nameEn: "Bach Ma",
  category: "mountain_system",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "白马山主峰", lon: 107.8508, lat: 16.1967, elevation: 1448, kind: "peak" },
  bbox: [107.78, 16.14, 107.92, 16.26],
  label: { lon: 107.85, lat: 16.20, rotation: 0 },
  source: "白马山：顺化与岘港之间一座海拔1448米的山峰，山体覆盖900米以上亚热带常绿季风林与900米以下热带常绿季风林两种植被带，1932年法国殖民当局曾在此修建避暑山庄，如今荒废的法式别墅遗迹散落山间，1991年设为国家公园（越南林业局）",
};

const DONG_VAN_KARST_PLATEAU: TerrainEntry = {
  id: "dong-van-karst-plateau",
  nameZh: "同文喀斯特高原",
  nameEn: "Dong Van Karst Plateau",
  category: "plateau",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "苗峰", lon: 105.4667, lat: 23.1667, elevation: 1971, kind: "peak" },
  bbox: [104.90, 22.80, 105.40, 23.40],
  viewScale: 1.3,
  label: { lon: 105.15, lat: 23.10, rotation: 0 },
  source: "同文喀斯特高原：越南最北端一片喀斯特台地（原属河江省最北四县；2025 年河江省并入宣光省、县级一级撤销），面积约2345平方公里，石灰岩地层可追溯至约5.5亿年前寒武纪，记录有泥盆纪-石炭纪之交与二叠纪-三叠纪之交两次生物大灭绝的地质证据，2010年成为越南首个联合国教科文组织世界地质公园（UNESCO）",
};

const CENTRAL_HIGHLANDS_TAY_NGUYEN: TerrainEntry = {
  id: "central-highlands-tay-nguyen",
  nameZh: "西原高原",
  nameEn: "Central Highlands (Tây Nguyên)",
  category: "plateau",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "大叻", lon: 108.4419, lat: 11.9404, elevation: 1500, kind: "city" },
  bbox: [107.30, 11.20, 108.70, 15.20],
  viewScale: 1.8,
  label: { lon: 108.00, lat: 13.30, rotation: 0 },
  source: "西原高原：越南中南部一系列连绵高原的统称，海拔大致在500至1500米之间，玄武岩风化形成的红土广泛覆盖高原表面，是越南最主要的咖啡种植区，大叻所在的林园高原海拔约1500米，气候常年温和（越南农业与农村发展部）",
};

const CAT_BA_ISLAND: TerrainEntry = {
  id: "cat-ba-island",
  nameZh: "吉婆岛",
  nameEn: "Cat Ba Island",
  category: "island",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "吉婆镇", lon: 107.0483, lat: 20.8033, elevation: 5, kind: "island" },
  bbox: [106.90, 20.68, 107.20, 20.90],
  label: { lon: 107.05, lat: 20.78, rotation: 0 },
  source: "吉婆岛：越南面积最大的近海岛屿之一，全岛面积约354平方公里，1986年近半岛域及邻近约90平方公里海域设为国家公园，岛上分布亚热带常绿林、淡水沼泽林、红树林与珊瑚礁等多种生态系统（越南林业局）",
};

const CON_DAO: TerrainEntry = {
  id: "con-dao",
  nameZh: "昆岛",
  nameEn: "Con Dao",
  category: "island",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "昆山岛", lon: 106.6000, lat: 8.6833, elevation: 10, kind: "island" },
  bbox: [106.50, 8.60, 106.70, 8.78],
  label: { lon: 106.60, lat: 8.69, rotation: 0 },
  source: "昆岛：越南南部海域一处由16座岛屿组成的群岛，主岛昆山岛为群岛中面积最大者，1993年设为国家公园，周边海域是越南境内绿海龟重要的产卵地之一（越南林业局）",
};

const PHU_QUOC: TerrainEntry = {
  id: "phu-quoc",
  nameZh: "富国岛",
  nameEn: "Phu Quoc",
  category: "island",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "阳东", lon: 103.9670, lat: 10.2270, elevation: 5, kind: "island" },
  bbox: [103.80, 9.90, 104.10, 10.45],
  viewScale: 1.2,
  label: { lon: 103.95, lat: 10.20, rotation: 0 },
  source: "富国岛：越南最大的岛屿，面积约589平方公里，岛屿超过一半面积为富国国家公园森林覆盖，2010年列入联合国教科文组织世界生物圈保护区候选名录相关研究区域，是越南南部重要的海岛旅游目的地（越南林业局）",
};

const LY_SON_ISLAND: TerrainEntry = {
  id: "ly-son-island",
  nameZh: "李山岛",
  nameEn: "Ly Son Island",
  category: "island",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "推楼火山口", lon: 109.1167, lat: 15.3833, elevation: 169, kind: "island" },
  bbox: [109.06, 15.35, 109.18, 15.42],
  label: { lon: 109.12, lat: 15.38, rotation: 0 },
  source: "李山岛：越南中部广义省近海一座火山岛，约2500万至3000万年前的多期次火山活动形成岛上五座已休眠的火山口，岛屿四周环绕珊瑚礁，是越南重要的大蒜种植地与海岛地质旅游目的地（越南地质矿产总局）",
};

const CU_LAO_CHAM: TerrainEntry = {
  id: "cu-lao-cham",
  nameZh: "占婆岛",
  nameEn: "Cu Lao Cham",
  category: "island",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "占婆岛", lon: 108.5167, lat: 15.9500, elevation: 5, kind: "island" },
  bbox: [108.46, 15.90, 108.58, 16.02],
  label: { lon: 108.52, lat: 15.96, rotation: 0 },
  source: "占婆岛：秋盆河入海口下游的一组岛屿，2009年“占婆岛-会安”生物圈保护区列入联合国教科文组织世界生物圈保护区名录，周边海域珊瑚礁与河口生态系统交汇，生物多样性丰富（UNESCO/越南林业局）",
};

const HA_LONG_BAY: TerrainEntry = {
  id: "ha-long-bay",
  nameZh: "下龙湾",
  nameEn: "Ha Long Bay",
  category: "coast",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "斗鸡石", lon: 107.0667, lat: 20.9101, elevation: 15, kind: "escarpment" },
  bbox: [106.95, 20.80, 107.55, 21.05],
  viewScale: 1.3,
  label: { lon: 107.20, lat: 20.90, rotation: 0 },
  source: "下龙湾：越南东北部海域一处淹没型喀斯特海湾，海域面积约1553平方公里，散布约1600座石灰岩塔状岛屿，石灰岩地层沉积始于约5亿年前，经构造抬升与数百万年海蚀溶蚀塑造出如今的塔峰群岛景观，1994年因地质地貌价值、2000年因景观美学价值两次列入联合国教科文组织世界遗产名录（UNESCO）",
};

const MUI_NE_DUNES: TerrainEntry = {
  id: "mui-ne-dunes",
  nameZh: "美奈沙丘",
  nameEn: "Mui Ne Dunes",
  category: "coast",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "红沙丘", lon: 108.2833, lat: 10.9333, elevation: 20, kind: "dune" },
  bbox: [108.20, 10.88, 108.38, 10.98],
  label: { lon: 108.29, lat: 10.93, rotation: 0 },
  source: "美奈沙丘：越南南中部沿海一片红色与白色沙丘群，由长期盛行风搬运沿岸沙粒堆积而成，红沙丘因沙粒中氧化铁矿物含量较高而呈现橙红色，是越南沿海少见的大范围风成沙丘地貌（越南国家旅游局）",
};

const NHA_TRANG_BAY: TerrainEntry = {
  id: "nha-trang-bay",
  nameZh: "芽庄湾",
  nameEn: "Nha Trang Bay",
  category: "coast",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "琴石岬", lon: 109.1922, lat: 12.2444, elevation: 15, kind: "escarpment" },
  bbox: [109.13, 12.15, 109.28, 12.32],
  label: { lon: 109.20, lat: 12.24, rotation: 0 },
  source: "芽庄湾：越南南中部沿海一处开阔海湾，湾内散布多座岛屿与珊瑚礁，琴石岬一带的花岗岩巨石经长期风化呈现出层叠交错的自然纹理，是越南重要的潜水与海湾旅游目的地（越南国家旅游局）",
};

const BA_BE_LAKE: TerrainEntry = {
  id: "ba-be-lake",
  nameZh: "巴别湖",
  nameEn: "Ba Be Lake",
  category: "lake",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "巴别湖", lon: 105.6167, lat: 22.4000, elevation: 178, kind: "lake" },
  bbox: [105.55, 22.35, 105.68, 22.45],
  label: { lon: 105.62, lat: 22.40, rotation: 0 },
  source: "巴别湖：越南北部一处天然淡水湖，实际由三段相连水域组成，四周环绕石灰岩崖壁与常绿林，湖区海拔约178米，是越南面积最大的天然湖泊之一，1992年设为国家公园（越南林业局）",
};

const LAK_LAKE: TerrainEntry = {
  id: "lak-lake",
  nameZh: "拉克湖",
  nameEn: "Lak Lake",
  category: "lake",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "拉克湖", lon: 108.1667, lat: 12.4333, elevation: 420, kind: "lake" },
  bbox: [108.11, 12.39, 108.22, 12.48],
  label: { lon: 108.17, lat: 12.43, rotation: 0 },
  source: "拉克湖：西原高原多乐省境内一处天然淡水湖，距邦美蜀市中心约55公里，湖区周边生态系统丰富，栖息有多种列入越南濒危物种红皮书的动植物（越南农业与农村发展部）",
};

const RED_RIVER: TerrainEntry = {
  id: "red-river",
  nameZh: "红河",
  nameEn: "Red River",
  category: "river",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "河内", lon: 105.8342, lat: 21.0278, elevation: 10, kind: "city" },
  bbox: [102.10, 20.90, 105.90, 22.90],
  axis: [[102.15, 22.85], [105.85, 21.02]],
  viewScale: 1.4,
  label: { lon: 104.00, lat: 22.00, rotation: -30 },
  source: "红河：发源于中国云南，流经越南西北部后于河内附近汇入越南平原水系，全长约1149公里（越南境内约510公里），河水因携带大量红色泥沙而得名，是越南北部最主要的河流水系（越南自然资源与环境部）",
};

const MEKONG_RIVER_VN: TerrainEntry = {
  id: "mekong-river-vn",
  nameZh: "湄公河（越南段）",
  nameEn: "Mekong River (Vietnam)",
  category: "river",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "美湫", lon: 106.3600, lat: 10.3600, elevation: 3, kind: "city" },
  bbox: [105.60, 9.90, 106.70, 10.85],
  axis: [[105.65, 10.75], [106.65, 10.05]],
  viewScale: 1.3,
  label: { lon: 106.10, lat: 10.40, rotation: -20 },
  source: "湄公河越南段：湄公河在越南境内分为前江、后江两大支流，河网密布、支汊纵横，美湫一带是越南南部重要的河运枢纽，河流最终在越南南部沿海多个入海口分流入海（越南自然资源与环境部）",
};

const PERFUME_RIVER: TerrainEntry = {
  id: "perfume-river",
  nameZh: "香江",
  nameEn: "Perfume River",
  category: "river",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "顺化", lon: 107.5909, lat: 16.4637, elevation: 10, kind: "city" },
  bbox: [107.45, 16.20, 107.75, 16.55],
  axis: [[107.50, 16.25], [107.68, 16.52]],
  label: { lon: 107.58, lat: 16.38, rotation: -60 },
  source: "香江：发源于长山山脉，流经越南古都顺化后注入沿海潟湖，因流经区域森林中桂皮与药草落入河中使河水带有淡淡香气而得名，阮朝皇城与多座皇陵沿江分布（越南文化体育与旅游部）",
};

const TRANG_AN_LANDSCAPE_COMPLEX: TerrainEntry = {
  id: "trang-an-landscape-complex",
  nameZh: "长安名胜群",
  nameEn: "Trang An Landscape Complex",
  category: "valley",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "长安溶洞群", lon: 105.9167, lat: 20.2500, elevation: 15, kind: "gorge" },
  bbox: [105.85, 20.20, 105.98, 20.30],
  label: { lon: 105.92, lat: 20.25, rotation: 0 },
  source: "长安名胜群：宁平省境内一片喀斯特塔峰与地下水道交织的谷地，面积约6226公顷，石灰岩地貌演化史逾2.5亿年，谷内密布可乘小舟穿行的水下溶洞，考古发现证实这一区域连续约3万年的人类适应环境活动遗迹，2014年作为越南首个文化与自然混合遗产列入联合国教科文组织世界遗产名录（UNESCO）",
};

const TU_SAN_CANYON: TerrainEntry = {
  id: "tu-san-canyon",
  nameZh: "图产峡谷",
  nameEn: "Tu San Canyon",
  category: "gorge",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "马匹粮山口", lon: 105.4167, lat: 23.2333, elevation: 1500, kind: "pass" },
  bbox: [105.35, 23.18, 105.48, 23.29],
  label: { lon: 105.42, lat: 23.24, rotation: 0 },
  source: "图产峡谷：同文喀斯特高原上一处东南亚地区最深的峡谷之一，深度约700至800米，泥河沿石灰岩断裂带长期下切侵蚀塑造出两岸近乎垂直的崖壁，马匹粮山口是俯瞰峡谷全貌的经典观景点（UNESCO/越南地质矿产总局）",
};

const BAN_GIOC_WATERFALL: TerrainEntry = {
  id: "ban-gioc-waterfall",
  nameZh: "板约瀑布",
  nameEn: "Ban Gioc Waterfall",
  category: "gorge",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "板约瀑布", lon: 106.7275, lat: 22.8503, elevation: 200, kind: "gorge" },
  bbox: [106.68, 22.82, 106.78, 22.88],
  label: { lon: 106.73, lat: 22.85, rotation: 0 },
  source: "板约瀑布：归春河流经中越边境处一处宽约300米、落差约30米的瀑布，是亚洲规模最大的跨境瀑布，也是越南境内规模最大的瀑布，瀑布沿河流天然形成的边境线一分为二，两岸石灰岩崖壁与喀斯特地貌交相辉映（越南自然资源与环境部）",
};

const RED_RIVER_DELTA: TerrainEntry = {
  id: "red-river-delta",
  nameZh: "红河三角洲",
  nameEn: "Red River Delta",
  category: "plain",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "海防", lon: 106.6881, lat: 20.8449, elevation: 3, kind: "city" },
  bbox: [105.60, 20.35, 107.10, 21.40],
  viewScale: 1.4,
  label: { lon: 106.20, lat: 20.70, rotation: 0 },
  source: "红河三角洲：红河及其支流泥沙长期沉积形成的三角形冲积平原，面积约1.5万平方公里，是越南两大农业核心区之一，地势低平、多数区域海拔不足3米，河内与海防两座城市均建于三角洲之上（越南自然资源与环境部）",
};

const MEKONG_DELTA: TerrainEntry = {
  id: "mekong-delta",
  nameZh: "湄公河三角洲",
  nameEn: "Mekong Delta",
  category: "plain",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "芹苴", lon: 105.7469, lat: 10.0452, elevation: 3, kind: "city" },
  bbox: [104.70, 8.60, 106.80, 10.90],
  viewScale: 1.6,
  label: { lon: 105.60, lat: 9.80, rotation: 0 },
  source: "湄公河三角洲：湄公河入海前在越南南部形成的巨大冲积平原，面积约3.9万平方公里，是世界最大的河流三角洲之一，密布的河汊与人工运河网络构成独特的水乡地貌，是越南最重要的稻米与水产养殖产区（越南农业与农村发展部）",
};

const NGU_HANH_SON: TerrainEntry = {
  id: "ngu-hanh-son",
  nameZh: "五行山",
  nameEn: "Ngu Hanh Son (Marble Mountains)",
  category: "hills",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "水山", lon: 108.2606, lat: 16.0044, elevation: 106, kind: "peak" },
  bbox: [108.24, 15.98, 108.28, 16.02],
  label: { lon: 108.26, lat: 16.00, rotation: 0 },
  source: "五行山：岘港以南沿海一组由五座大理岩丘体组成的低矮山丘，分别以金木水火土五行命名，水山为其中最高者，山体内分布多处天然溶洞与不同年代的佛教与印度教石窟造像（核实 2026-09-11：印度教造像可追溯至早于阮朝的占婆时期，具体断代待查），是越南中部重要的宗教与地质旅游地（越南文化体育与旅游部）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 越南 =====
  FANSIPAN, PHONG_NHA_KE_BANG, BA_NA_HILLS, BACH_MA_MOUNTAIN,
  DONG_VAN_KARST_PLATEAU, CENTRAL_HIGHLANDS_TAY_NGUYEN,
  CAT_BA_ISLAND, CON_DAO, PHU_QUOC, LY_SON_ISLAND, CU_LAO_CHAM,
  HA_LONG_BAY, MUI_NE_DUNES, NHA_TRANG_BAY,
  BA_BE_LAKE, LAK_LAKE,
  RED_RIVER, MEKONG_RIVER_VN, PERFUME_RIVER,
  TRANG_AN_LANDSCAPE_COMPLEX,
  TU_SAN_CANYON, BAN_GIOC_WATERFALL,
  RED_RIVER_DELTA, MEKONG_DELTA,
  NGU_HANH_SON,
];
