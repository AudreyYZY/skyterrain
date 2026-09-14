import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 / 泰国
// 东南亚次区域首个国家；不涉及南海主权争议岛屿（泰国无南海领土主张）；
// 湄公河构成泰国-老挝界河段中性表述、不涉主权；南部宋卡/北大年/也拉/
// 陶公府等有安全局势的府份不收录地形
// ============================================================

const DOI_INTHANON: TerrainEntry = {
  id: "doi-inthanon",
  nameZh: "茵他侬山",
  nameEn: "Doi Inthanon",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "茵他侬山主峰", lon: 98.4867, lat: 18.5883, elevation: 2565, kind: "peak" },
  bbox: [98.40, 18.50, 98.60, 18.65],
  label: { lon: 98.49, lat: 18.58, rotation: 0 },
  source: "茵他侬山：泰国最高峰(2565米)，山体为花岗岩岩基，是泰国北部丹伦他吾山脉（缅甸掸邦高原向南延伸的一部分）的最高点，以已故清迈王因他哇洛拉萨命名，1972年设为国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const DOI_LUANG_CHIANG_DAO: TerrainEntry = {
  id: "doi-luang-chiang-dao",
  nameZh: "清道山",
  nameEn: "Doi Luang Chiang Dao",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "清道山主峰", lon: 98.9186, lat: 19.4058, elevation: 2225, kind: "peak" },
  bbox: [98.85, 19.35, 99.00, 19.45],
  label: { lon: 98.92, lat: 19.40, rotation: 0 },
  source: "清道山：泰国第三高峰（各来源在2175—2275米之间，核实 2026-09-11），山体为石灰岩喀斯特地貌，泰国境内规模最大的溶洞系统之一清道岩洞就发育于山体之中，2021年清道山生物圈保护区列入联合国教科文组织人与生物圈计划（UNESCO）",
};

const DOI_SUTHEP_PUI: TerrainEntry = {
  id: "doi-suthep-pui",
  nameZh: "素贴山",
  nameEn: "Doi Suthep",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "素贴寺", lon: 98.9219, lat: 18.8047, elevation: 1676, kind: "peak" },
  bbox: [98.86, 18.76, 98.98, 18.85],
  label: { lon: 98.92, lat: 18.80, rotation: 0 },
  source: "素贴山：清迈城西侧一座海拔1676米的山峰，山腰始建于14世纪的素贴寺是泰国北部最重要的佛教朝圣地之一，1981年山体与相邻的普伊山共同设为国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const KHAO_LUANG: TerrainEntry = {
  id: "khao-luang",
  nameZh: "考銮山",
  nameEn: "Khao Luang",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "考銮山主峰", lon: 99.7833, lat: 8.4667, elevation: 1780, kind: "peak" },
  bbox: [99.70, 8.38, 99.87, 8.55],
  label: { lon: 99.78, lat: 8.47, rotation: 0 },
  source: "考銮山：泰国南部半岛最高峰(1780米)，位于洛坤府境内，山体为花岗岩构成，1974年设为国家公园，湿润的山地气候使其成为泰国南部重要的水果种植区（泰国国家公园、野生动物与植物保护厅）",
};

const KHAO_YAI: TerrainEntry = {
  id: "khao-yai",
  nameZh: "考艾山",
  nameEn: "Khao Yai",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "考隆峰", lon: 101.3725, lat: 14.4386, elevation: 1351, kind: "peak" },
  bbox: [101.15, 14.30, 101.55, 14.55],
  label: { lon: 101.35, lat: 14.42, rotation: 0 },
  source: "考艾山：泰国境内一片跨越呵叻高原西南边缘的山地森林，1962年设为泰国第一座国家公园，2005年“丹辇拉扎-考艾森林群”作为东南亚大陆现存面积最大的常绿林之一列入联合国教科文组织世界遗产名录（UNESCO/泰国国家公园、野生动物与植物保护厅）",
};

const THUNG_YAI_HUAI_KHA_KHAENG: TerrainEntry = {
  id: "thung-yai-huai-kha-khaeng",
  nameZh: "通艾-惠凯野生动物保护区",
  nameEn: "Thung Yai–Huai Kha Khaeng Wildlife Sanctuaries",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "惠凯保护区中心", lon: 99.30, lat: 15.50, elevation: 400, kind: "city" },
  bbox: [98.85, 14.90, 99.55, 16.00],
  viewScale: 1.4,
  label: { lon: 99.20, lat: 15.40, rotation: 0 },
  source: "通艾-惠凯野生动物保护区：泰国西部沿缅甸边境一片山地森林，面积约622200公顷，是中南半岛现存面积最大的自然保护区，1991年列入联合国教科文组织世界遗产名录，栖息有泰国境内约77%的大型哺乳动物种群（UNESCO）",
};

const KHORAT_PLATEAU: TerrainEntry = {
  id: "khorat-plateau",
  nameZh: "呵叻高原",
  nameEn: "Khorat Plateau",
  category: "plateau",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "呵叻（那空叻差是玛）", lon: 102.0977, lat: 14.9799, elevation: 190, kind: "city" },
  bbox: [101.00, 14.00, 105.60, 18.50],
  viewScale: 2.0,
  label: { lon: 103.30, lat: 16.20, rotation: 0 },
  source: "呵叻高原：泰国东北部一片广袤的砂岩台地，面积约占泰国国土三分之一，是泰国传统“依善”地区的地理主体，高原边缘的碧差汶山脉与丹辇拉扎山脉（Dong Phaya Yen）将其与中部平原分隔（核实 2026-09-11：原写的「佩差邦」是 Phetchabun 的另一种转写，与碧差汶是同一条山脉）",
};

const PHU_KRADUENG: TerrainEntry = {
  id: "phu-kradueng",
  nameZh: "普卡东山",
  nameEn: "Phu Kradueng",
  category: "plateau",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "普卡东山顶台地", lon: 101.8167, lat: 16.8667, elevation: 1250, kind: "peak" },
  bbox: [101.72, 16.80, 101.90, 16.93],
  label: { lon: 101.82, lat: 16.87, rotation: 0 },
  source: "普卡东山：泰国东北部黎府境内一座心形砂岩桌山，山顶台地面积约60平方公里、平均海拔约1250米，四周为陡峭崖壁环绕，基岩为侏罗纪呵叻群砂岩，1962年设为泰国第二座国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const SIMILAN_ISLANDS: TerrainEntry = {
  id: "similan-islands",
  nameZh: "斯米兰群岛",
  nameEn: "Similan Islands",
  category: "island",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "斯米兰主岛", lon: 97.6400, lat: 8.6500, elevation: 0, kind: "island" },
  bbox: [97.58, 8.55, 97.72, 8.78],
  label: { lon: 97.65, lat: 8.66, rotation: 0 },
  source: "斯米兰群岛：安达曼海一处由11座岛屿组成的花岗岩群岛，距海岸约70公里，陆地面积约26平方公里，海底巨型花岗岩巨石与水下岩柱是中生代缅甸板块与巽他板块俯冲事件的遗留地貌，1982年设为国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const SURIN_ISLANDS: TerrainEntry = {
  id: "surin-islands",
  nameZh: "苏林群岛",
  nameEn: "Surin Islands",
  category: "island",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "苏林主岛", lon: 97.8667, lat: 9.4667, elevation: 0, kind: "island" },
  bbox: [97.80, 9.40, 97.95, 9.55],
  label: { lon: 97.87, lat: 9.47, rotation: 0 },
  source: "苏林群岛：安达曼海邻近缅甸边境的一组由5座花岗岩岛屿组成的群岛，1981年设为国家海洋公园，是泰国境内莫肯海上游牧民族传统聚居的海域之一（泰国国家公园、野生动物与植物保护厅）",
};

const KO_TARUTAO: TerrainEntry = {
  id: "ko-tarutao",
  nameZh: "达鲁涛岛",
  nameEn: "Ko Tarutao",
  category: "island",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "达鲁涛主岛", lon: 99.6667, lat: 6.6667, elevation: 0, kind: "island" },
  bbox: [99.55, 6.50, 99.85, 6.90],
  viewScale: 1.3,
  label: { lon: 99.68, lat: 6.68, rotation: 0 },
  source: "达鲁涛岛：泰国最南端沿海的一座石灰岩与砂岩岛屿，是1974年设立的泰国首座国家海洋公园的主岛，岛上保留大片原始雨林与石灰岩溶洞（泰国国家公园、野生动物与植物保护厅）",
};

const PHI_PHI_ISLANDS: TerrainEntry = {
  id: "phi-phi-islands",
  nameZh: "皮皮群岛",
  nameEn: "Phi Phi Islands",
  category: "island",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "大皮皮岛", lon: 98.7784, lat: 7.7407, elevation: 0, kind: "island" },
  bbox: [98.72, 7.67, 98.85, 7.80],
  label: { lon: 98.78, lat: 7.74, rotation: 0 },
  source: "皮皮群岛：安达曼海一组由二叠纪石灰岩构成的岛屿，大皮皮岛与小皮皮岛之间由一道狭窄的沙洲相连，形成蝴蝶结状的地貌轮廓，玛雅湾是岛群中最具代表性的封闭式石灰岩海湾（泰国国家公园、野生动物与植物保护厅）",
};

const AO_PHANG_NGA: TerrainEntry = {
  id: "ao-phang-nga",
  nameZh: "攀牙湾",
  nameEn: "Ao Phang Nga",
  category: "coast",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "宾坎岩（“007岛”）", lon: 98.5000, lat: 8.2833, elevation: 20, kind: "escarpment" },
  bbox: [98.40, 8.15, 98.60, 8.40],
  label: { lon: 98.50, lat: 8.28, rotation: 0 },
  source: "攀牙湾：泰国南部安达曼海一处约400平方公里的淹没型喀斯特海湾，二叠纪拉查布里石灰岩地层在末次冰期后海平面上升过程中被淹没，露出海面的部分形成陡峭孤立的塔状岩岛，1981年设为国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const KRABI_KARST_COAST: TerrainEntry = {
  id: "krabi-karst-coast",
  nameZh: "甲米喀斯特海岸",
  nameEn: "Krabi Karst Coast",
  category: "coast",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "莱利岬角", lon: 98.8372, lat: 8.0114, elevation: 30, kind: "escarpment" },
  bbox: [98.75, 7.95, 98.92, 8.10],
  label: { lon: 98.83, lat: 8.02, rotation: 0 },
  source: "甲米喀斯特海岸：安达曼海沿岸一段以陡峭石灰岩塔状崖壁为特征的海岸线，莱利岬角三面被垂直的石灰岩崖壁环绕、仅能经海路抵达，是攀岩与深水抱石运动的知名地点（泰国国家公园、野生动物与植物保护厅）",
};

const KHAO_SAM_ROI_YOT: TerrainEntry = {
  id: "khao-sam-roi-yot",
  nameZh: "三百峰山",
  nameEn: "Khao Sam Roi Yot",
  category: "coast",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "帕耶那空岩洞", lon: 99.9622, lat: 12.1958, elevation: 50, kind: "escarpment" },
  bbox: [99.90, 12.10, 100.05, 12.30],
  label: { lon: 99.96, lat: 12.20, rotation: 0 },
  source: "三百峰山：泰国湾沿岸一列由约300座石灰岩山峰组成的山地，“三百峰”由此得名，最高峰海拔605米，山地西北角的通三百峰淡水沼泽是泰国境内面积最大的湿地之一，1966年设为泰国首座海洋型国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const THUNG_SALAENG_LUANG: TerrainEntry = {
  id: "thung-salaeng-luang",
  nameZh: "通萨兰銮草原",
  nameEn: "Thung Salaeng Luang",
  category: "grassland",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "通萨兰銮草原核心区", lon: 100.8333, lat: 16.8000, elevation: 700, kind: "grassland" },
  bbox: [100.65, 16.65, 101.05, 17.00],
  viewScale: 1.3,
  label: { lon: 100.85, lat: 16.82, rotation: 0 },
  source: "通萨兰銮草原：泰国中北部彭世洛府与碧差汶府交界处一片海拔300至1028米的高原草甸，被称为“泰国的稀树草原”，开阔草地与松林、常绿林交错分布，是泰国少见的大面积非森林高地植被景观（泰国国家公园、野生动物与植物保护厅）",
};

const CHEOW_LARN_LAKE: TerrainEntry = {
  id: "cheow-larn-lake",
  nameZh: "焦拉湖",
  nameEn: "Cheow Larn Lake",
  category: "lake",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "叻差巴帕水坝", lon: 98.8333, lat: 8.9000, elevation: 100, kind: "lake" },
  bbox: [98.60, 8.70, 98.95, 9.10],
  viewScale: 1.2,
  label: { lon: 98.75, lat: 8.90, rotation: 0 },
  source: "焦拉湖：1987年拦截克隆桑河修建叻差巴帕水坝形成的人工水库，湖区位于考索国家公园南缘，数百座石灰岩孤峰从湖面耸立而起，形成喀斯特地貌被淹没后的独特库区景观（泰国国家公园、野生动物与植物保护厅）",
};

const BUENG_BORAPHET: TerrainEntry = {
  id: "bueng-boraphet",
  nameZh: "汶拉帕沼泽湖",
  nameEn: "Bueng Boraphet",
  category: "lake",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "汶拉帕沼泽湖", lon: 100.1667, lat: 15.6667, elevation: 25, kind: "lake" },
  bbox: [100.05, 15.55, 100.30, 15.80],
  label: { lon: 100.18, lat: 15.68, rotation: 0 },
  source: "汶拉帕沼泽湖：泰国中部南河与平河汇流处附近一片天然淡水沼泽湖，面积约224平方公里，是泰国中部面积最大的淡水湿地，1930年经筑坝后形成如今的开阔水面，是重要的候鸟越冬地（泰国国家公园、野生动物与植物保护厅）",
};

const CHAO_PHRAYA_RIVER: TerrainEntry = {
  id: "chao-phraya-river",
  nameZh: "湄南河",
  nameEn: "Chao Phraya River",
  category: "river",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "北榄坡（那空沙旺）汇流处", lon: 100.1189, lat: 15.6906, elevation: 25, kind: "city" },
  bbox: [99.90, 13.60, 100.30, 15.75],
  axis: [[100.12, 15.69], [100.57, 13.60]],
  viewScale: 1.2,
  label: { lon: 100.30, lat: 14.60, rotation: -85 },
  source: "湄南河：宾河与难河在那空沙旺府汇流后始称湄南河干流，全长约372公里，流经泰国中部平原后在曼谷附近注入泰国湾，是泰国中部平原最主要的河流水系（泰国国土发展局）",
};

const MEKONG_RIVER_TH: TerrainEntry = {
  id: "mekong-river-th",
  nameZh: "湄公河（泰国段）",
  nameEn: "Mekong River (Thailand)",
  category: "river",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "清坎", lon: 101.6667, lat: 17.8975, elevation: 155, kind: "city" },
  bbox: [100.40, 15.20, 104.80, 20.40],
  axis: [[100.45, 20.35], [104.75, 15.30]],
  viewScale: 1.6,
  label: { lon: 102.50, lat: 18.00, rotation: -60 },
  source: "湄公河泰国段：湄公河自缅甸、老挝三国交界处进入后，沿泰国东北部边境构成泰国与老挝之间近千公里的界河，最终在泰国东北端离境流入老挝境内，清坎一带的河段以险滩密布著称（泰国国土发展局）",
};

const MUN_RIVER: TerrainEntry = {
  id: "mun-river",
  nameZh: "文河",
  nameEn: "Mun River",
  category: "river",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "乌汶叻差他尼", lon: 104.8564, lat: 15.2286, elevation: 125, kind: "city" },
  bbox: [102.00, 14.60, 105.00, 15.60],
  axis: [[102.05, 14.95], [104.85, 15.23]],
  viewScale: 1.3,
  label: { lon: 103.50, lat: 15.10, rotation: -10 },
  source: "文河：发源于呵叻高原西南部讪甘烹山脉（Sankamphaeng，核实 2026-09-11；佩差邦/碧差汶山脉在高原西北缘、是另一条），向东流贯呵叻高原南部，是泰国依善地区最主要的河流，在乌汶叻差他尼附近汇入湄公河，沿线接纳支流希河后水量显著增大（泰国国土发展局）",
};

const KWAI_RIVER_VALLEY: TerrainEntry = {
  id: "kwai-river-valley",
  nameZh: "桂河谷地",
  nameEn: "Kwai River Valley",
  category: "valley",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "桂河大桥", lon: 99.5011, lat: 14.0392, elevation: 30, kind: "city" },
  bbox: [98.90, 13.90, 99.60, 14.60],
  axis: [[99.05, 14.55], [99.53, 14.02]],
  viewScale: 1.2,
  label: { lon: 99.20, lat: 14.30, rotation: -30 },
  source: "桂河谷地：夸伊诺伊河切穿泰国西部丹伦他吾山脉南段形成的河谷地带，二战期间日军强征战俘与劳工修建的泰缅铁路沿谷地而建，1943年建成的桂河大桥是这段历史广为人知的见证（泰国国家档案馆/泰国国家公园、野生动物与植物保护厅）",
};

const ERAWAN_WATERFALL: TerrainEntry = {
  id: "erawan-waterfall",
  nameZh: "伊拉旺瀑布",
  nameEn: "Erawan Waterfall",
  category: "gorge",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "伊拉旺瀑布", lon: 99.1500, lat: 14.3667, elevation: 200, kind: "gorge" },
  bbox: [99.08, 14.32, 99.22, 14.42],
  label: { lon: 99.15, lat: 14.37, rotation: 0 },
  source: "伊拉旺瀑布：夸伊诺伊河支流沿石灰岩阶地跌落形成的七级阶梯状瀑布，各级瀑布之间形成天然的碧绿色石灰华水潭，1975年设为国家公园，是泰国西部最具代表性的瀑布地貌之一（泰国国家公园、野生动物与植物保护厅）",
};

const SAM_PHAN_BOK: TerrainEntry = {
  id: "sam-phan-bok",
  nameZh: "三千崩",
  nameEn: "Sam Phan Bok",
  category: "gorge",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "三千崩河床", lon: 105.4167, lat: 15.3333, elevation: 105, kind: "gorge" },
  bbox: [105.35, 15.28, 105.48, 15.38],
  label: { lon: 105.42, lat: 15.33, rotation: 0 },
  source: "三千崩：湄公河干流河床上一片规模最大的砂岩蚀余地貌，“三千崩”意为三千座浅坑，旱季水位下降后河床上密布的圆形壶穴与沟槽出露水面，是湄公河季节性水位变化侵蚀砂岩形成的典型地貌，仅在12月至次年4月旱季可见（泰国国家公园、野生动物与植物保护厅）",
};

const CHAO_PHRAYA_DELTA: TerrainEntry = {
  id: "chao-phraya-delta",
  nameZh: "湄南河三角洲",
  nameEn: "Chao Phraya Delta",
  category: "plain",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "曼谷", lon: 100.5018, lat: 13.7563, elevation: 2, kind: "city" },
  bbox: [99.90, 13.30, 100.90, 14.40],
  viewScale: 1.4,
  label: { lon: 100.30, lat: 13.80, rotation: 0 },
  source: "湄南河三角洲：湄南河入海口处发育的冲积三角洲低地，泰国首都曼谷即建于三角洲之上，部分区域海拔不足2米，长期面临地面沉降与海平面上升的双重压力，是泰国人口最密集、经济最发达的区域（泰国国土发展局）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 泰国 =====
  DOI_INTHANON, DOI_LUANG_CHIANG_DAO, DOI_SUTHEP_PUI, KHAO_LUANG, KHAO_YAI,
  THUNG_YAI_HUAI_KHA_KHAENG,
  KHORAT_PLATEAU, PHU_KRADUENG,
  SIMILAN_ISLANDS, SURIN_ISLANDS, KO_TARUTAO, PHI_PHI_ISLANDS,
  AO_PHANG_NGA, KRABI_KARST_COAST, KHAO_SAM_ROI_YOT,
  THUNG_SALAENG_LUANG,
  CHEOW_LARN_LAKE, BUENG_BORAPHET,
  CHAO_PHRAYA_RIVER, MEKONG_RIVER_TH, MUN_RIVER,
  KWAI_RIVER_VALLEY,
  ERAWAN_WATERFALL, SAM_PHAN_BOK,
  CHAO_PHRAYA_DELTA,
];
