import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 爱尔兰
// ============================================================

const MACGILLYCUDDYS_REEKS: TerrainEntry = {
  id: "macgillycuddys-reeks",
  nameZh: "麦吉利卡迪山脉",
  nameEn: "MacGillycuddy's Reeks",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "卡朗图希尔峰", lon: -9.7419, lat: 51.9993, elevation: 1038, kind: "peak" },
  bbox: [-9.85, 51.94, -9.55, 52.06],
  axis: [[-9.83, 52.00], [-9.58, 51.97]],
  viewScale: 1.2,
  label: { lon: -9.72, lat: 52.01, rotation: 0 },
  source: "麦吉利卡迪山脉：爱尔兰唯一海拔超过1000米的山脉，由古红砂岩构成，约3.6亿年前华力西造山运动抬升，经末次冰期强烈冰蚀形成尖峰、冰斗与刃脊；卡朗图希尔峰1038.6米为爱尔兰最高峰（维基 / OSI）",
};

const WICKLOW_MOUNTAINS: TerrainEntry = {
  id: "wicklow-mountains",
  nameZh: "威克洛山脉",
  nameEn: "Wicklow Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "卢格纳奎拉峰", lon: -6.4644, lat: 52.9686, elevation: 925, kind: "peak" },
  bbox: [-6.55, 52.85, -6.20, 53.15],
  axis: [[-6.45, 52.88], [-6.35, 53.12]],
  viewScale: 1.2,
  label: { lon: -6.40, lat: 53.00, rotation: -50 },
  source: "威克洛山脉：爱尔兰东部最大的连绵山地，主体为花岗岩岩基，是不列颠群岛最大的花岗岩出露区之一；卢格纳奎拉峰925米为山脉最高点，山地距都柏林市中心仅约30公里（维基 / OSI）",
};

const CONNEMARA_TWELVE_BENS: TerrainEntry = {
  id: "connemara-twelve-bens",
  nameZh: "康尼马拉·十二本斯山",
  nameEn: "Connemara / Twelve Bens",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "本鲍恩峰", lon: -9.8461, lat: 53.5236, elevation: 729, kind: "peak" },
  bbox: [-9.95, 53.44, -9.55, 53.62],
  axis: [[-9.92, 53.48], [-9.65, 53.58]],
  viewScale: 1.3,
  label: { lon: -9.78, lat: 53.53, rotation: -30 },
  source: "康尼马拉·十二本斯山：爱尔兰西部戈尔韦郡的石英岩山峰群，由约12座尖峰组成，山间散布泥炭沼泽与湖泊，是康尼马拉国家公园的核心地貌；本鲍恩峰729米为最高点（爱尔兰国家公园与野生动物管理局）",
};

const COMERAGH_MOUNTAINS: TerrainEntry = {
  id: "comeragh-mountains",
  nameZh: "科默拉山脉",
  nameEn: "Comeragh Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "福斯库姆峰", lon: -7.5833, lat: 52.2167, elevation: 792, kind: "peak" },
  bbox: [-7.68, 52.12, -7.42, 52.32],
  viewScale: 1.2,
  label: { lon: -7.56, lat: 52.22, rotation: 0 },
  source: "科默拉山脉：爱尔兰东南部沃特福德郡的古红砂岩高地，末次冰期冰川作用在山体边缘刻出多个冰斗湖（如科姆申湖），山顶为平缓的高原状台地（维基 / OSI）",
};

const GALTEE_MOUNTAINS: TerrainEntry = {
  id: "galtee-mountains",
  nameZh: "加尔提山脉",
  nameEn: "Galtee Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "加尔提莫尔峰", lon: -8.2306, lat: 52.3608, elevation: 919, kind: "peak" },
  bbox: [-8.38, 52.29, -8.05, 52.42],
  axis: [[-8.36, 52.35], [-8.10, 52.38]],
  label: { lon: -8.22, lat: 52.36, rotation: 0 },
  source: "加尔提山脉：爱尔兰南部内陆最高的山脉，古红砂岩构成，加尔提莫尔峰919米为爱尔兰内陆地区最高峰，山体北坡有多个冰蚀湖（维基 / OSI）",
};

const NEPHIN_BEG_RANGE: TerrainEntry = {
  id: "nephin-beg-range",
  nameZh: "内芬贝格山脉",
  nameEn: "Nephin Beg Range",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "斯利夫卡尔峰", lon: -9.6667, lat: 54.0167, elevation: 721, kind: "peak" },
  bbox: [-9.80, 53.92, -9.45, 54.15],
  viewScale: 1.3,
  label: { lon: -9.62, lat: 54.03, rotation: 0 },
  source: "内芬贝格山脉：爱尔兰西北部梅奥郡一片人迹罕至的石英岩荒野山地，山间广布高地泥炭沼泽，是爱尔兰面积最大的连片荒野区之一（爱尔兰国家公园与野生动物管理局）",
};

const SLIEVE_BLOOM_MOUNTAINS: TerrainEntry = {
  id: "slieve-bloom-mountains",
  nameZh: "斯利夫布卢姆山",
  nameEn: "Slieve Bloom Mountains",
  category: "hills",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "阿德林峰", lon: -7.5589, lat: 53.0567, elevation: 527, kind: "peak" },
  bbox: [-7.72, 52.96, -7.35, 53.15],
  label: { lon: -7.55, lat: 53.05, rotation: 0 },
  source: "斯利夫布卢姆山：坐落于爱尔兰中部低地平原正中央的孤立老地块，砂岩与页岩构成，阿德林峰527米，是中部平原上少有的地势起伏地区（维基 / OSI）",
};

const OX_MOUNTAINS: TerrainEntry = {
  id: "ox-mountains",
  nameZh: "牛山",
  nameEn: "Ox Mountains",
  category: "hills",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "诺克隆吉峰", lon: -8.85, lat: 54.09, elevation: 544, kind: "peak" },
  bbox: [-9.05, 53.98, -8.55, 54.20],
  axis: [[-9.00, 54.00], [-8.60, 54.15]],
  label: { lon: -8.80, lat: 54.08, rotation: -20 },
  source: "牛山：爱尔兰西北部斯莱戈郡与梅奥郡交界一条狭长的前寒武纪变质岩山脉，山势低缓浑圆，诺克隆吉峰544米为最高点（维基 / OSI）",
};

const THE_BURREN: TerrainEntry = {
  id: "the-burren",
  nameZh: "伯伦高原",
  nameEn: "The Burren",
  category: "plateau",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "穆拉山", lon: -9.1128, lat: 52.9944, elevation: 191, kind: "peak" },
  bbox: [-9.30, 52.90, -8.95, 53.15],
  viewScale: 1.3,
  label: { lon: -9.12, lat: 53.03, rotation: 0 },
  source: "伯伦高原：爱尔兰西部克莱尔郡一片约250平方公里的石炭纪石灰岩喀斯特台地，地表大面积裸露石灰岩板，几无表土，地下发育溶洞与地下河，是欧洲最典型的喀斯特地貌之一（爱尔兰国家公园与野生动物管理局）",
};

const CENTRAL_LOWLANDS_BOG_OF_ALLEN: TerrainEntry = {
  id: "central-lowlands-bog-of-allen",
  nameZh: "爱尔兰中部低地·艾伦沼泽",
  nameEn: "Central Lowlands / Bog of Allen",
  category: "plain",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "艾伦沼泽自然中心", lon: -6.9083, lat: 53.2830, elevation: 80, kind: "city" },
  bbox: [-7.70, 52.90, -6.60, 53.55],
  viewScale: 1.6,
  label: { lon: -7.15, lat: 53.20, rotation: 0 },
  source: "爱尔兰中部低地：由石炭纪石灰岩构成的低缓向斜盆地，末次冰期后表层沉积物排水不畅，形成大面积隆起泥炭沼泽，艾伦沼泽是其中面积最大、最具代表性的一片，历史上曾是爱尔兰泥炭燃料的主要产地（地质调查局爱尔兰 / Bord na Móna）",
};

const GLENDALOUGH: TerrainEntry = {
  id: "glendalough",
  nameZh: "格兰达洛冰蚀谷",
  nameEn: "Glendalough",
  category: "valley",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "格兰达洛修道院遗址", lon: -6.3305, lat: 53.0087, elevation: 130, kind: "city" },
  bbox: [-6.40, 52.97, -6.27, 53.05],
  axis: [[-6.38, 53.01], [-6.30, 53.00]],
  label: { lon: -6.34, lat: 53.02, rotation: 0 },
  source: "格兰达洛：意为“两湖之谷”，威克洛山脉中一条典型的冰川槽谷，谷底串有上、下两座冰蚀湖，谷口6世纪建有基维尼修道院遗址，是爱尔兰重要的早期基督教遗迹（维基 / OPW）",
};

const GLENVEAGH: TerrainEntry = {
  id: "glenveagh",
  nameZh: "格伦维谷",
  nameEn: "Glenveagh",
  category: "valley",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "格伦维城堡", lon: -8.0119, lat: 55.0361, elevation: 50, kind: "city" },
  bbox: [-8.15, 54.95, -7.85, 55.10],
  axis: [[-8.10, 54.97], [-7.90, 55.08]],
  label: { lon: -8.00, lat: 55.02, rotation: -30 },
  source: "格伦维谷：爱尔兰西北部多尼戈尔郡一条深切的冰川槽谷，谷中的格伦维湖两岸悬崖陡峭，是爱尔兰面积最大的国家公园格伦维国家公园的核心地貌（爱尔兰国家公园与野生动物管理局）",
};

const GAP_OF_DUNLOE: TerrainEntry = {
  id: "gap-of-dunloe",
  nameZh: "邓洛峡口",
  nameEn: "Gap of Dunloe",
  category: "gorge",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "邓洛峡口", lon: -9.6167, lat: 52.0167, elevation: 150, kind: "pass" },
  bbox: [-9.68, 51.97, -9.55, 52.07],
  axis: [[-9.65, 51.99], [-9.60, 52.06]],
  label: { lon: -9.62, lat: 52.02, rotation: -60 },
  source: "邓洛峡口：麦吉利卡迪山脉与紫山之间一条由冰川侵蚀形成的狭窄山口，谷底串联五座小型冰蚀湖，是爱尔兰最著名的山地徒步与马车观光路线之一（维基 / 凯里国家公园）",
};

const LOUGH_CORRIB: TerrainEntry = {
  id: "lough-corrib",
  nameZh: "科里布湖",
  nameEn: "Lough Corrib",
  category: "lake",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "科里布湖", lon: -9.30, lat: 53.48, elevation: 8, kind: "lake" },
  bbox: [-9.42, 53.30, -9.00, 53.65],
  axis: [[-9.10, 53.32], [-9.35, 53.62]],
  label: { lon: -9.18, lat: 53.50, rotation: -70 },
  source: "科里布湖：爱尔兰共和国境内面积最大的湖泊，约176平方公里，湖区石灰岩基底发育喀斯特地貌，湖水经科里布河注入戈尔韦湾（爱尔兰环保署 / 维基）",
};

const KILLARNEY_LAKES: TerrainEntry = {
  id: "killarney-lakes",
  nameZh: "基拉尼湖群",
  nameEn: "Lakes of Killarney",
  category: "lake",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "马克罗斯湖", lon: -9.5333, lat: 52.0167, elevation: 20, kind: "lake" },
  bbox: [-9.62, 51.95, -9.45, 52.10],
  label: { lon: -9.53, lat: 52.03, rotation: 0 },
  source: "基拉尼湖群：由利恩湖、马克罗斯湖与上湖三座冰蚀湖组成，紧邻麦吉利卡迪山脉东麓，马克罗斯湖水深达75米，是爱尔兰最深的湖泊，湖区为基拉尼国家公园核心（维基 / 国家公园与野生动物管理局）",
};

const LOUGH_DERG_SHANNON: TerrainEntry = {
  id: "lough-derg-shannon",
  nameZh: "德格湖（香农河）",
  nameEn: "Lough Derg (River Shannon)",
  category: "lake",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "德格湖", lon: -8.33, lat: 52.93, elevation: 33, kind: "lake" },
  bbox: [-8.55, 52.75, -8.15, 53.08],
  axis: [[-8.45, 52.80], [-8.25, 53.02]],
  label: { lon: -8.30, lat: 52.90, rotation: -70 },
  source: "德格湖：香农河沿线三座主要湖泊中面积最大的一座，约118平方公里，为区别多尼戈尔郡同名朝圣湖，此处特指香农河水系的德格湖（维基 / 香农发展局）",
};

const LOUGH_MASK: TerrainEntry = {
  id: "lough-mask",
  nameZh: "马斯克湖",
  nameEn: "Lough Mask",
  category: "lake",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "马斯克湖", lon: -9.30, lat: 53.63, elevation: 19, kind: "lake" },
  bbox: [-9.45, 53.50, -9.15, 53.75],
  label: { lon: -9.28, lat: 53.65, rotation: -60 },
  source: "马斯克湖：爱尔兰西部石灰岩湖泊，与南侧的科里布湖之间存在地下暗河连通，湖区周边喀斯特溶洞发育（爱尔兰环保署 / 维基）",
};

const RIVER_SHANNON: TerrainEntry = {
  id: "river-shannon",
  nameZh: "香农河",
  nameEn: "River Shannon",
  category: "river",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "阿斯隆", lon: -7.9407, lat: 53.4239, elevation: 40, kind: "city" },
  bbox: [-9.70, 52.50, -7.85, 54.28],
  axis: [[-7.92, 54.27], [-9.65, 52.55]],
  viewScale: 1.4,
  label: { lon: -8.60, lat: 53.30, rotation: -55 },
  source: "香农河：爱尔兰与不列颠群岛最长的河流，全长约360公里，发源于北部香农锅泉，向南流经德格湖、里河等多座湖泊后在利默里克附近汇入大西洋河口湾（爱尔兰环保署 / OSI）",
};

const RIVER_LIFFEY: TerrainEntry = {
  id: "river-liffey",
  nameZh: "利菲河",
  nameEn: "River Liffey",
  category: "river",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "都柏林", lon: -6.2603, lat: 53.3498, elevation: 5, kind: "city" },
  bbox: [-6.62, 53.10, -6.15, 53.40],
  axis: [[-6.55, 53.15], [-6.22, 53.35]],
  label: { lon: -6.40, lat: 53.25, rotation: -30 },
  source: "利菲河：发源于威克洛山脉，全长约130公里，河道呈马蹄形绕经威克洛山地后向东流入都柏林湾，是都柏林城市发展的地理轴线（维基 / OSI）",
};

const RIVER_BLACKWATER_MUNSTER: TerrainEntry = {
  id: "river-blackwater-munster",
  nameZh: "芒斯特黑水河",
  nameEn: "Munster Blackwater",
  category: "river",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "约赫尔", lon: -7.85, lat: 51.95, elevation: 5, kind: "city" },
  bbox: [-9.25, 51.90, -7.80, 52.20],
  axis: [[-9.20, 52.15], [-7.85, 51.95]],
  label: { lon: -8.50, lat: 52.05, rotation: -15 },
  source: "芒斯特黑水河：发源于爱尔兰西南部凯里郡，先向东流经芒斯特平原、又在利斯莫尔附近急转向南，最终在约赫尔汇入大西洋，因流向奇特被称为“爱尔兰的莱茵河”（维基）",
};

const ARAN_ISLANDS: TerrainEntry = {
  id: "aran-islands",
  nameZh: "阿伦群岛",
  nameEn: "Aran Islands",
  category: "island",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "邓恩古堡", lon: -9.7692, lat: 53.1231, elevation: 87, kind: "escarpment" },
  bbox: [-9.90, 53.05, -9.42, 53.28],
  label: { lon: -9.70, lat: 53.13, rotation: -20 },
  source: "阿伦群岛：戈尔韦湾入海口三座石灰岩岛屿，与伯伦高原同属一片喀斯特石灰岩台地，最大岛因希莫尔岛上的邓恩古堡是爱尔兰铁器时代最重要的石造要塞遗址之一（维基 / 国家历史遗迹局）",
};

const SKELLIG_MICHAEL: TerrainEntry = {
  id: "skellig-michael",
  nameZh: "斯凯利格·迈克尔岛",
  nameEn: "Skellig Michael",
  category: "island",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "斯凯利格·迈克尔修道院", lon: -10.5397, lat: 51.7714, elevation: 218, kind: "escarpment" },
  bbox: [-10.58, 51.75, -10.50, 51.80],
  label: { lon: -10.54, lat: 51.78, rotation: 0 },
  source: "斯凯利格·迈克尔岛：爱尔兰西南海岸外约12公里处一座陡峭的锥形寒武纪砂岩海岛，岛顶600年前后建有早期基督教僧侣隐修院，1996年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const ACHILL_ISLAND: TerrainEntry = {
  id: "achill-island",
  nameZh: "阿基尔岛",
  nameEn: "Achill Island",
  category: "island",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "斯利夫莫尔山", lon: -10.0167, lat: 53.9500, elevation: 671, kind: "peak" },
  bbox: [-10.30, 53.90, -9.90, 54.05],
  label: { lon: -10.10, lat: 53.97, rotation: 0 },
  source: "阿基尔岛：爱尔兰面积最大的岛屿，经桥梁与本土相连，岛上基姆湾旁的悬崖高逾600米，是欧洲最高的海崖之一，斯利夫莫尔山671米为岛屿最高点（维基 / 梅奥郡议会）",
};

const CLIFFS_OF_MOHER: TerrainEntry = {
  id: "cliffs-of-moher",
  nameZh: "莫赫悬崖",
  nameEn: "Cliffs of Moher",
  category: "coast",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "奥布莱恩塔", lon: -9.4309, lat: 52.9715, elevation: 214, kind: "escarpment" },
  bbox: [-9.45, 52.94, -9.38, 53.00],
  axis: [[-9.43, 52.94], [-9.42, 53.00]],
  label: { lon: -9.41, lat: 52.97, rotation: -85 },
  source: "莫赫悬崖：爱尔兰西部克莱尔郡一段长约14公里、最高处约214米的大西洋海崖，由石炭纪砂岩与页岩层构成，是爱尔兰访问量最大的自然景点之一（Clare County Council）",
};

const SLIEVE_LEAGUE: TerrainEntry = {
  id: "slieve-league",
  nameZh: "斯利夫利格悬崖",
  nameEn: "Slieve League",
  category: "coast",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "斯利夫利格观景台", lon: -8.6833, lat: 54.6167, elevation: 601, kind: "escarpment" },
  bbox: [-8.75, 54.58, -8.58, 54.66],
  axis: [[-8.72, 54.60], [-8.62, 54.64]],
  label: { lon: -8.66, lat: 54.62, rotation: -60 },
  source: "斯利夫利格悬崖：爱尔兰西北部多尼戈尔郡的大西洋海崖，最高处约601米，是欧洲最高的海崖之一，高度约为莫赫悬崖的三倍（维基 / Fáilte Ireland）",
};

const DINGLE_PENINSULA: TerrainEntry = {
  id: "dingle-peninsula",
  nameZh: "丁格尔半岛",
  nameEn: "Dingle Peninsula",
  category: "coast",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "斯利亚角", lon: -10.4442, lat: 52.0989, elevation: 100, kind: "escarpment" },
  bbox: [-10.55, 52.05, -9.95, 52.25],
  viewScale: 1.2,
  label: { lon: -10.20, lat: 52.15, rotation: -20 },
  source: "丁格尔半岛：爱尔兰最西端的半岛，脊线为布兰登山（952米），半岛沿岸分布陡峭海崖与史前石造遗迹，被《国家地理旅行者》评为“地球上最美的地方”之一（Fáilte Ireland）",
};

const RING_OF_KERRY_IVERAGH: TerrainEntry = {
  id: "ring-of-kerry-iveragh",
  nameZh: "凯里之环·艾弗拉半岛",
  nameEn: "Ring of Kerry / Iveragh Peninsula",
  category: "coast",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "沃特维尔", lon: -10.1739, lat: 51.8258, elevation: 5, kind: "city" },
  bbox: [-10.50, 51.73, -9.85, 52.07],
  viewScale: 1.3,
  label: { lon: -10.15, lat: 51.90, rotation: 0 },
  source: "凯里之环：环绕艾弗拉半岛的沿海景观道路，串联大西洋海岸、沙滩与麦吉利卡迪山脉西南麓，是爱尔兰最经典的自驾观光路线之一（Fáilte Ireland）",
};

const KILLARY_HARBOUR: TerrainEntry = {
  id: "killary-harbour",
  nameZh: "基拉里峡湾",
  nameEn: "Killary Harbour",
  category: "coast",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "基拉里峡湾", lon: -9.85, lat: 53.6167, elevation: 0, kind: "gorge" },
  bbox: [-9.97, 53.58, -9.65, 53.68],
  axis: [[-9.95, 53.62], [-9.68, 53.61]],
  label: { lon: -9.80, lat: 53.63, rotation: 5 },
  source: "基拉里峡湾：爱尔兰唯一的真正峡湾，末次冰期冰川刻蚀出的深水河谷被海水淹没形成，长约16公里，是康尼马拉与梅奥郡的界湾（维基 / 爱尔兰国家公园与野生动物管理局）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 爱尔兰 =====
  MACGILLYCUDDYS_REEKS, WICKLOW_MOUNTAINS, CONNEMARA_TWELVE_BENS,
  COMERAGH_MOUNTAINS, GALTEE_MOUNTAINS, NEPHIN_BEG_RANGE,
  SLIEVE_BLOOM_MOUNTAINS, OX_MOUNTAINS,
  THE_BURREN,
  CENTRAL_LOWLANDS_BOG_OF_ALLEN,
  GLENDALOUGH, GLENVEAGH,
  GAP_OF_DUNLOE,
  LOUGH_CORRIB, KILLARNEY_LAKES, LOUGH_DERG_SHANNON, LOUGH_MASK,
  RIVER_SHANNON, RIVER_LIFFEY, RIVER_BLACKWATER_MUNSTER,
  ARAN_ISLANDS, SKELLIG_MICHAEL, ACHILL_ISLAND,
  CLIFFS_OF_MOHER, SLIEVE_LEAGUE, DINGLE_PENINSULA, RING_OF_KERRY_IVERAGH, KILLARY_HARBOUR,
];
