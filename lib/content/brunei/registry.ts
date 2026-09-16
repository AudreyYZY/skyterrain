import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 / 文莱（东南亚次区域；国土约 5,765 km²，地形按马耳他 / 卢森堡 / 新加坡的 12 条小国口径）
// 中文译名随中国外交部「文莱达鲁萨兰国」与其行政区划名（文莱—摩拉区、马来奕区、都东区、淡布隆区；首都斯里巴加湾市）。
// 零争议红线：国土分为互不相连的东西两块，正文**只写「东西两块」「湾内」，一个邻国行政区名都不点**；
// 国界划定与任何领土主张、文莱湾湾内国界、界河段一律不写；海域、专属经济区与离岸礁一律不写；
// 油气产业评价与公司名、王室、宗教评价、族群比例不进地形条目。
// 文莱国土窄，12 条里多数锚点离陆地国界不足 10 km（研究子代理按 OSM 国界关系 2103120 算），正文统一不写「靠近边境」。
// 骨架（文莱政府提交《生物多样性公约》第 4 次国家报告 2010 与《初始国家信息通报》2016，1 级）：
// 西块是冲积、多沼泽的滨海平原，背后是低丘，更往内陆又是沼泽，内陆大部分低于 90 m；
// 东块是沼泽化滨海平原，经低丘升到内陆山地，南部山地由始新世至中新世沉积岩构成，全国最高点巴贡山约 1,850 m（峰顶在国界上，不作锚点）。
// 主要来源：统计局 DEPS《Statistical Yearbook 2025》（陆地面积、海岸线约 161 km，1 级）；林业局 forestry.gov.bn 各森林类型页与休憩公园名录（面积，1 级）；
// 东盟生物多样性中心 ACB 遗产公园页（1 级）；旅游发展局 bruneitourism.com（1 级，宣传文案只取位置与河长类事实）；FAO AQUASTAT 2011（流域面积，2 级）；
// 本国 1 级来源之间多处自相矛盾（海岸线 161 / 168 / 130 km、泥炭沼泽 90,884 / 103,860 ha、国家公园 46,210 ha / 5 万 ha / 550 km²），面积一律用林业局口径；河长除都东河外不写。
// 锚点坐标取 OSM；未查到实测海拔的为取景用概略值（注明）。事实表 scratchpad/brunei-terrain-facts.md（2026-09-15）。
// ============================================================

const ULU_TEMBURONG: TerrainEntry = {
  id: "ulu-temburong",
  nameZh: "淡布隆山地（乌鲁淡布隆国家公园）",
  nameEn: "Temburong Highlands (Ulu Temburong National Park)",
  category: "mountain_system",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "白拉弄山", lon: 115.18522, lat: 4.49021, elevation: 913, kind: "peak" },
  bbox: [114.98, 4.02, 115.36, 4.72],
  axis: [[115.10, 4.70], [115.32, 4.30]],
  label: { lon: 115.20, lat: 4.40, rotation: 0 },
  source: "淡布隆山地：国土东块南部从低丘升到山地，文莱的山地林只分布在淡布隆区、约 750 m 起出现，下部山地混交林 910–1,280 m、上部矮型山地林覆苔藓与猪笼草（林业局 Montane 页，1 级）；乌鲁淡布隆国家公园 46,210 ha（林业局休憩公园名录，1 级；旅游局另写约 5 万 ha / 550 km²，不用）；东部崎岖山地，南部山地由始新世至中新世沉积岩构成、山顶多在 700–900 m（《初始国家信息通报》2016，1 级）；全国最高点巴贡山约 1,850 m（CBD 第 4 次国家报告 2010，1 级；英文维基并列 1,841 / 1,843 m，3 级）—— 峰顶在国界上，不作锚点、不写位置；瓜拉白拉弄一带从海拔约 30 m 升到最南端，深 V 形河谷与刀刃状尖脊相间，基岩以塞塔普组页岩为主、脊顶覆梅利甘组（ForestGEO 瓜拉白拉弄站点页，2 级）。锚点白拉弄山 OSM node 13818386653，ele 913 仅 OSM 一处（3 级）",
};

const BELAIT_PEAT_SWAMP: TerrainEntry = {
  id: "belait-peat-swamp",
  nameZh: "马来奕泥炭沼泽森林",
  nameEn: "Belait Peat Swamp Forest",
  category: "plain",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "巴达斯一带的泥炭沼泽", lon: 114.42127, lat: 4.56017, elevation: 10, kind: "grassland" },
  bbox: [114.10, 4.25, 114.55, 4.65],
  viewScale: 1.4,
  label: { lon: 114.32, lat: 4.47, rotation: 0 },
  source: "马来奕泥炭沼泽森林：泥炭沼泽林发育在未分解与半分解的有机质上，泥炭把地面抬成穹顶、顶部高于正常洪水位；约 90,884 ha、占国土 15.6%，是面积第二的森林类型，分布最广的在马来奕区；阿兰（Shorea albida）林在马来奕水系大面积分布，从上方看平整的林冠像一片花椰菜田（林业局 Peat Swamp 页，1 级；《初始国家信息通报》2016 另写 103,860 ha、18%，两个 1 级来源不一致，正文用林业局口径并注明）；泥炭沼泽林主体沿马来奕河流域分布、几乎处于原始状态（CBD 第 4 次国家报告 2010，1 级）；泥炭沼泽林内不允许采伐（CBD 第 5 次国家报告 2014，1 级）；乌鲁门达拉姆保护区研究区：河边混合沼泽林 → 阿兰巴都群落 → 离河最远处林冠闭合、高约 50 m 的阿兰花群落，林地没有明确的地表水道（Cobb et al. 2017 PNAS，2 级）。锚点取离国界较远的巴达斯地名点 OSM node 5940679127（研究区原坐标离国界约 2.5 km，不用），海拔为取景用概略值",
};

const BELAIT_COASTAL_PLAIN: TerrainEntry = {
  id: "belait-coastal-plain",
  nameZh: "马来奕滨海平原",
  nameEn: "Belait Coastal Plain",
  category: "plain",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "诗里亚", lon: 114.33018, lat: 4.61416, elevation: 5, kind: "city" },
  bbox: [114.17, 4.56, 114.62, 4.78],
  axis: [[114.18, 4.58], [114.60, 4.77]],
  label: { lon: 114.42, lat: 4.72, rotation: 0 },
  source: "马来奕滨海平原（描述性名称，无正式地名）：西块是冲积、常有沼泽的滨海平原，背后是低丘，更往内陆又是沼泽（CBD 第 4 次国家报告 2010，1 级）；海岸以高滩型沙质海滩为主，东北段为河口红树林与泥滩（CBD 第 4 / 5 次国家报告，1 级）；海滩林生长在高潮线以上的沙土上、固沙并防止沿岸潟湖淤塞，从摩拉到都东、再往西到瓜拉马来奕的海岸线上都能见到，优势树种有木麻黄、黄槿等（林业局 Beach Type 页，1 级）；沙脊地带有石楠林（kerangas）镶嵌，安杜基 / 卢穆特沿海带有卡普尔帕亚（Dryobalanops rappa）林（CBD 第 5 次国家报告，1 级）；马来奕河在瓜拉马来奕镇处变窄、河口沙坝限制入海（FAO AQUASTAT 2011，2 级）。平原宽度与海拔无来源，不写；油田与产业不写。锚点诗里亚 OSM node 1841496285，海拔为取景用概略值",
};

const BELAIT_RIVER: TerrainEntry = {
  id: "belait-river",
  nameZh: "马来奕河",
  nameEn: "Belait River",
  category: "river",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "武吉萨瓦河段", lon: 114.55419, lat: 4.52513, elevation: 10, kind: "meander" },
  bbox: [114.17, 4.15, 114.80, 4.62],
  axis: [[114.78, 4.22], [114.18, 4.59]],
  label: { lon: 114.48, lat: 4.42, rotation: -30 },
  source: "马来奕河：全国四大流域（淡布隆、马来奕、都东、文莱河）中马来奕流域最大，约 2,700 km²，下游集水区是大片泥炭沼泽林，河在瓜拉马来奕镇变窄、河口沙坝限制入海，上游部分已开垦为农地（FAO AQUASTAT 2011，2 级）；淡水沼泽林沿马来奕河分布，河堤冲积土上的恩普兰（empran）林沿河呈 100–200 m 宽的窄带（林业局 Freshwater Swamp 页，1 级）；下游河岸有水椰林（林业局 Mangrove 页，1 级）；林业局 1933 年 3 月设立的第一个办事处在瓜拉马来奕（林业局 Introduction 页，1 级）。河长只有维基 206 / 209 km 与 OSM 算约 201 km（3 级），正文不写；河源段与国界的关系不写。锚点武吉萨瓦村河段 OSM node 4320585692，海拔为取景用概略值",
};

const LABI_HILLS: TerrainEntry = {
  id: "labi-hills",
  nameZh: "拉比丘陵",
  nameEn: "Labi Hills",
  category: "hills",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "特拉加山", lon: 114.43499, lat: 4.30575, elevation: 412, kind: "peak" },
  bbox: [114.30, 4.20, 114.62, 4.55],
  label: { lon: 114.48, lat: 4.36, rotation: 0 },
  source: "拉比丘陵：西块内陆大部分低于 90 m、最西端升到近 400 m（CBD 第 4 次国家报告 2010，1 级；原文「最西端」与拉比丘陵的对应是推断，正文只写「西块内陆南部的丘陵」）；低地型混合龙脑香林见于拉比丘陵、拉丹丘陵等低矮地形，混合龙脑香林占全国森林约 41%（林业局 Mixed Dipterocarp 页，1 级）；拉比丘陵森林保护区内支流沿岸有恩普兰淡水沼泽林（林业局 Freshwater Swamp 页，1 级）；马来奕区森林保护区里记录有约 40 处瀑布，从首都到拉比约一个半小时车程、从瓜拉马来奕约 45 分钟（旅游局马来奕区页与《Explore Labi》2025-03，1 级）。丘陵范围、最高点、保护区面积均无 1 级数字，不写；与国界另一侧保护区的相连关系不写。锚点特拉加山 OSM node 4816041499，ele 412 仅 OSM（3 级）",
};

const TUTONG_RIVER: TerrainEntry = {
  id: "tutong-river",
  nameZh: "都东河",
  nameEn: "Tutong River",
  category: "river",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "都东镇", lon: 114.6595, lat: 4.80667, elevation: 5, kind: "city" },
  bbox: [114.58, 4.38, 114.85, 4.82],
  axis: [[114.80, 4.41], [114.60, 4.77]],
  label: { lon: 114.76, lat: 4.62, rotation: -60 },
  source: "都东河：长约 137 km，从都东区高地流到南海，流经都东镇（旅游局 Tutong River 地点页，1 级；OSM 干流算约 122 km，河源段可能不全，正文用旅游局数）；流域约 1,300 km²，河口是在两道沙嘴之间形成的复杂河口系统，潮汐影响较强（FAO AQUASTAT 2011，2 级）；中游有大片季节性淹水的泥炭沼泽林（CBD 第 4 次国家报告 2010，1 级）；琼孔（jongkong）泥炭沼泽林沿河呈斑块分布、下游河岸为水椰林（林业局，1 级）；默林本湖在都东河西岸（东盟生物多样性中心，1 级）。锚点都东镇 OSM node 5940019095，海拔为取景用概略值",
};

const TASEK_MERIMBUN: TerrainEntry = {
  id: "tasek-merimbun",
  nameZh: "默林本湖",
  nameEn: "Tasek Merimbun",
  category: "lake",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "默林本湖湖面", lon: 114.67977, lat: 4.59316, elevation: 10, kind: "lake" },
  bbox: [114.62, 4.54, 114.74, 4.64],
  label: { lon: 114.68, lat: 4.62, rotation: 0 },
  source: "默林本湖（Tasek Merimbun，音译）：默林本湖遗产公园面积 7,800 ha，1984-11-29 在曼谷第二届东盟部长会议上宣布为东盟遗产公园，位于图东—马来奕沿海公路以南 32 km、都东河西岸的兰拜乡，生境有淡水沼泽林、泥炭沼泽、低地混合龙脑香林、石楠林与草本沼泽，管理机构为博物馆局，园内有步道通往湖中小岛上的考古遗址（东盟生物多样性中心 ACB 遗产公园页，1 级；旅游局另写 2,500 余 ha，不用）；旅游局称其为全国最大的天然湖、黑水湖（旅游局都东区页与地点页，1 级 —— 须保留「天然」：OSM 上的乌鲁都东水库约 5.9 km² 比它大）；湖面面积无 1 级来源（OSM 多边形算约 1.8 km²，不写）；湖水因落叶的单宁而呈深色、湖呈 S 形（英文维基，3 级）。锚点 OSM relation 6440319 中心，海拔为取景用概略值",
};

const BRUNEI_RIVER_ESTUARY: TerrainEntry = {
  id: "brunei-river-estuary",
  nameZh: "文莱河口（水村）",
  nameEn: "Brunei River Estuary (Kampong Ayer)",
  category: "coast",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "水村", lon: 114.9439, lat: 4.88186, elevation: 2, kind: "city" },
  bbox: [114.84, 4.80, 115.03, 4.93],
  axis: [[114.843, 4.808], [115.018, 4.925]],
  label: { lon: 114.93, lat: 4.91, rotation: 0 },
  source: "文莱河口：文莱河流入文莱湾，上游是西块主要的淡水水源（FAO AQUASTAT 2011，2 级）；文莱河口的红树林与相连河道是经济鱼虾的育幼场、河口是本地捕虾捕鱼的主要场所，各大河口以泥滩为主、大泥滩多紧邻红树林（CBD 第 5 次国家报告 2014，1 级）；首都斯里巴加湾市面积约 100.36 km²（统计年鉴 2025 前言，1 级；同句首都人口实为全国数，不引）；水村是建在河上的高脚屋聚落，以木栈道和桥相连、靠小船往来（旅游局地点页，1 级）；斯里巴加湾一带河岸曾发生咸水鳄袭击钓鱼者致死（英国外交部旅行建议 2026-03-19，1 级）。水村的名次（旅游局两页互相冲突）、河长、河口对岸与国界的关系、王宫与清真寺不写。锚点水村 OSM node 5863646187，海拔为取景用概略值",
};

const BRUNEI_BAY_MANGROVES: TerrainEntry = {
  id: "brunei-bay-mangroves",
  nameZh: "文莱湾红树林（塞利隆岛）",
  nameEn: "Brunei Bay Mangroves (Pulau Selirong)",
  category: "coast",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "塞利隆岛", lon: 115.12874, lat: 4.8846, elevation: 2, kind: "island" },
  bbox: [115.00, 4.75, 115.20, 5.00],
  label: { lon: 115.10, lat: 4.95, rotation: 0 },
  source: "文莱湾红树林（境内一侧）：全国红树林约 18,418 ha，大部分在文莱湾内湾；按优势种分 7 型，巴考（Rhizophora apiculata）林约占淡布隆区红树林的一半，塞利隆与拉布森林保护区有几乎纯的木果楝（Xylocarpus granatum）林，水椰林沿淡布隆、拉布等河下游广泛分布，海桑（Sonneratia caseolaris）小片生于新淤积的淤泥上（林业局 Mangrove 页，1 级）；塞利隆岛森林休憩公园 2,566 ha（林业局，1 级；两个页面区属不一致，正文只写「湾内」）；文莱湾红树林是全国六个优先保护关键地点之一（CBD 第 4 次国家报告 2010，1 级；同报告「可能是北博尔内奥现存最大的完整红树林」自带「可能」，名次不写）；岛上有木栈道、只能乘船前往（英文维基，3 级，写进正文前以旅游模式来源为准）。湾的归属、湾内国界不写。锚点 OSM relation 13338450 中心（岛多边形算约 24 km²），海拔为取景用概略值",
};

const TEMBURONG_RIVER: TerrainEntry = {
  id: "temburong-river",
  nameZh: "淡布隆河",
  nameEn: "Temburong River",
  category: "river",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "邦阿", lon: 115.07244, lat: 4.70765, elevation: 5, kind: "city" },
  bbox: [115.02, 4.32, 115.34, 4.82],
  axis: [[115.324, 4.332], [115.062, 4.791]],
  label: { lon: 115.16, lat: 4.60, rotation: -60 },
  source: "淡布隆河：国土东块的主河，从南部山地向西北流经邦阿、注入文莱湾（OSM 干流走向）；四大流域中淡布隆河最小，集水面积约 430 km²（FAO AQUASTAT 2011，2 级；英文维基另写 840 km²、自相矛盾，不用）；下游有纯水椰林、新淤积泥上有海桑林（林业局 Mangrove 页，1 级）；国家公园内的主要河流是淡布隆河与白拉弄河，瓜拉白拉弄研究站在白拉弄河西岸（ForestGEO，2 级）。河长只有维基 98 km 与 OSM 算约 110 km（3 级），正文不写；界河段与邻国河流不写。锚点邦阿 OSM node 1699103550，海拔为取景用概略值",
};

const PERADAYAN_HILLS: TerrainEntry = {
  id: "peradayan-hills",
  nameZh: "佩拉达扬—帕托伊双丘",
  nameEn: "Peradayan and Patoi Hills",
  category: "hills",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "佩拉达扬山", lon: 115.16558, lat: 4.72543, elevation: 374, kind: "peak" },
  bbox: [115.12, 4.69, 115.22, 4.78],
  label: { lon: 115.17, lat: 4.76, rotation: 0 },
  source: "佩拉达扬—帕托伊双丘：东块沼泽化滨海平原经低丘升到内陆山地（CBD 第 4 次国家报告 2010，1 级），这两座孤立的低丘是其中「低丘」一环；帕托伊山森林休憩公园 997 ha，淡布隆区（林业局休憩公园名录，1 级；英文维基另写 1,070 ha，不用）；佩拉达扬山高程 OSM 374 m / 英文维基 410 m、帕托伊山约 310 m（维基），两说并存，正文写「三四百米」；距邦阿约 15 km（英文维基，3 级；按坐标算直线约 10.5 km，正文用算的直线距离）。锚点佩拉达扬山 OSM node 13835046032（离国界约 8.4 km，比帕托伊山远）",
};

const LUAGAN_LALAK: TerrainEntry = {
  id: "luagan-lalak",
  nameZh: "卢阿甘拉拉克季节湖沼",
  nameEn: "Luagan Lalak",
  category: "lake",
  regionId: "asia",
  country: "brunei",
  landmark: { name: "卢阿甘拉拉克观景台", lon: 114.47528, lat: 4.51533, elevation: 15, kind: "lake" },
  bbox: [114.46, 4.50, 114.49, 4.53],
  label: { lon: 114.475, lat: 4.528, rotation: 0 },
  source: "卢阿甘拉拉克：卢阿甘拉拉克森林休憩公园 270 ha，马来奕区（林业局休憩公园名录，1 级）；位于拉比丘陵森林公园内、沿拉比公路 25 km 处的黑水沼泽，景色随季节变化，有步道通往观景亭（旅游局地点页，1 级）；冲积淡水沼泽（empran），有大片 Lepironia articulata 莎草，旱季水位明显下降、谷地被莎草覆盖，luagan 在当地马来语里指不流动的大片水体（英文维基，3 级 —— 正文只写季节变化这一旅游局也提到的事实，植物学名与词源不写）。锚点主观景台 OSM node 4971585804，海拔为取景用概略值",
};

export const TERRAINS: TerrainEntry[] = [
  ULU_TEMBURONG, BELAIT_PEAT_SWAMP, BELAIT_COASTAL_PLAIN, BELAIT_RIVER,
  LABI_HILLS, TUTONG_RIVER, TASEK_MERIMBUN, BRUNEI_RIVER_ESTUARY,
  BRUNEI_BAY_MANGROVES, TEMBURONG_RIVER, PERADAYAN_HILLS, LUAGAN_LALAK,
];
