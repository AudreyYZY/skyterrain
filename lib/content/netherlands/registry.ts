import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 荷兰
// ============================================================

const VAALSERBERG: TerrainEntry = {
  id: "vaalserberg",
  nameZh: "瓦尔斯山",
  nameEn: "Vaalserberg",
  category: "hills",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "瓦尔斯山顶", lon: 6.0206, lat: 50.7539, elevation: 322.7, kind: "peak" },
  bbox: [5.97, 50.73, 6.07, 50.78],
  label: { lon: 6.02, lat: 50.75, rotation: 0 },
  source: "瓦尔斯山：荷兰全境最高点，海拔322.7米，位于荷兰、德国、比利时三国交界地带（中性地理表述，不涉边界主权）；山体是阿登高原向北延伸的余脉，覆盖森林，山顶设有观景塔（荷兰地形测量局 Kadaster）",
};

const VELUWE: TerrainEntry = {
  id: "veluwe",
  nameZh: "费吕沃",
  nameEn: "Veluwe",
  category: "hills",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "高费吕沃国家公园", lon: 5.8500, lat: 52.0800, elevation: 110, kind: "escarpment" },
  bbox: [5.65, 51.95, 6.05, 52.30],
  viewScale: 1.3,
  label: { lon: 5.85, lat: 52.15, rotation: 0 },
  source: "费吕沃：荷兰中部一片由末次冰期冰川推挤堆积形成的沙质丘陵，最高点约110米，是荷兰最大的连片森林与荒原保护区；1935年设立高费吕沃国家公园，园内保留大片欧石楠荒原和流动沙丘（荷兰国家林务局 Staatsbosbeheer）",
};

const UTRECHTSE_HEUVELRUG: TerrainEntry = {
  id: "utrechtse-heuvelrug",
  nameZh: "乌得勒支丘陵脊",
  nameEn: "Utrechtse Heuvelrug",
  category: "hills",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "阿默龙恩一带高地", lon: 5.3833, lat: 52.0333, elevation: 69, kind: "escarpment" },
  bbox: [5.15, 51.95, 5.55, 52.15],
  axis: [[5.15, 52.10], [5.55, 51.98]],
  label: { lon: 5.35, lat: 52.05, rotation: -15 },
  source: "乌得勒支丘陵脊：荷兰中部一条狭长的末次冰期冰碛脊，长约30公里、最高点约69米，是同一冰期冰川作用在荷兰留下的另一列丘陵；2003年设立乌得勒支丘陵脊国家公园（荷兰国家林务局 Staatsbosbeheer）",
};

const DRENTHE_HONDSRUG: TerrainEntry = {
  id: "drenthe-hondsrug",
  nameZh: "德伦特洪兹鲁格脊",
  nameEn: "Drenthe Hondsrug",
  category: "hills",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "埃门史前石冢群", lon: 6.8500, lat: 52.8500, elevation: 25, kind: "escarpment" },
  bbox: [6.55, 52.75, 7.05, 53.05],
  axis: [[6.55, 53.00], [7.05, 52.78]],
  label: { lon: 6.80, lat: 52.90, rotation: -20 },
  source: "德伦特洪兹鲁格脊：荷兰东北部德伦特省一条冰碛沙脊，是荷兰境内已知最古老的连续人类定居地带之一；脊上分布着约54座新石器时代巨石墓（hunebedden，公元前3400-3200年），2023年整体作为地质公园列入联合国教科文组织世界地质公园网络（UNESCO）",
};

const FLEVOLAND_POLDER: TerrainEntry = {
  id: "flevoland-polder",
  nameZh: "弗莱福兰围垦地",
  nameEn: "Flevoland Polder",
  category: "plain",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "弗莱福兰中部农田", lon: 5.6000, lat: 52.5300, elevation: -4, kind: "grassland" },
  bbox: [5.30, 52.35, 5.90, 52.75],
  viewScale: 1.5,
  label: { lon: 5.60, lat: 52.55, rotation: 0 },
  source: "弗莱福兰围垦地：1950-1968年间从须德海（今艾瑟尔湖）排水围垦而成的土地，是世界最大的人工岛/围垦地之一，大部分地面低于海平面（低洼处约-4米），完全依靠泵站持续排水维持；1986年设立为荷兰第12个省（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const ZUIDPLASPOLDER: TerrainEntry = {
  id: "zuidplaspolder",
  nameZh: "南普拉斯围垦地",
  nameEn: "Zuidplaspolder",
  category: "basin",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "新韦克尔克-伊瑟尔洼地", lon: 4.6200, lat: 51.9800, elevation: -6.76, kind: "grassland" },
  bbox: [4.50, 51.92, 4.75, 52.05],
  label: { lon: 4.62, lat: 51.98, rotation: 0 },
  source: "南普拉斯围垦地：1840年排干的一片前湖泊洼地，地表最低点约海拔-6.76米，是荷兰全境地势最低点；洼地由风车、后改为蒸汽泵站持续排水维持干燥，是荷兰围垦工程史上的重要样本（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const LOONSE_EN_DRUNENSE_DUINEN: TerrainEntry = {
  id: "loonse-en-drunense-duinen",
  nameZh: "洛嫩-德吕嫩沙丘",
  nameEn: "Loonse en Drunense Duinen",
  category: "desert",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "内陆流动沙丘核心区", lon: 5.0800, lat: 51.6300, elevation: 15, kind: "dune" },
  bbox: [5.00, 51.60, 5.16, 51.67],
  label: { lon: 5.08, lat: 51.63, rotation: 0 },
  source: "洛嫩-德吕嫩沙丘：荷兰南部布拉班特省一片约35平方公里的内陆流动沙丘，中世纪过度放牧与砍伐导致表土流失、风沙外露而形成，因景观酷似沙漠常被称为“布拉班特的撒哈拉”；1971年设立国家公园加以保护，沙丘至今仍在缓慢移动（荷兰国家林务局 Staatsbosbeheer）",
};

const WADDEN_SEA_NL: TerrainEntry = {
  id: "wadden-sea-nl",
  nameZh: "瓦登海",
  nameEn: "Wadden Sea",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "斯希蒙尼克岛外滩涂", lon: 6.2000, lat: 53.4500, elevation: 0, kind: "delta" },
  bbox: [4.70, 52.95, 7.20, 53.55],
  axis: [[4.70, 53.10], [7.20, 53.50]],
  viewScale: 1.6,
  label: { lon: 5.80, lat: 53.30, rotation: 15 },
  source: "瓦登海：北海东南岸一片世界最大的连续潮间带滩涂系统，从荷兰经德国延伸至丹麦（跨三国的自然区域，中性表述），荷兰段沿西弗里西亚群岛内侧展开；2009年荷兰与德国段共同列入联合国教科文组织世界遗产名录，是数百万候鸟的中途停歇地（UNESCO）",
};

const ZEELAND_DELTA: TerrainEntry = {
  id: "zeeland-delta",
  nameZh: "泽兰三角洲",
  nameEn: "Zeeland Delta",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "东斯海尔德风暴潮屏障", lon: 3.9000, lat: 51.6500, elevation: 0, kind: "escarpment" },
  bbox: [3.55, 51.40, 4.20, 51.85],
  label: { lon: 3.85, lat: 51.62, rotation: 0 },
  source: "泽兰三角洲：莱茵河、马斯河、斯海尔德河共同入海处的复杂三角洲地带，1953年一次风暴潮造成严重洪灾后，荷兰启动“三角洲工程”修建了一系列防洪闸坝，东斯海尔德风暴潮屏障（1986年完工，长约9公里）是其中规模最大的一座，平时开放让海水自然流通、仅在预警风暴时关闭（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const WESTERSCHELDE: TerrainEntry = {
  id: "westerschelde",
  nameZh: "西斯海尔德河口",
  nameEn: "Westerschelde",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "弗利辛恩河口段", lon: 3.8000, lat: 51.4000, elevation: 0, kind: "delta" },
  bbox: [3.35, 51.30, 4.10, 51.50],
  axis: [[3.35, 51.35], [4.10, 51.42]],
  label: { lon: 3.75, lat: 51.38, rotation: 5 },
  source: "西斯海尔德河口：斯海尔德河（发源于法国、流经比利时）在荷兰泽兰省境内注入北海前形成的宽阔潮汐河口，是通往比利时安特卫普港的主航道，荷、比两国就该航道的疏浚与维护订有长期协议（中性表述，不涉主权）；河口沿岸有大片盐沼和滩涂湿地（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const HOLLAND_DUNES: TerrainEntry = {
  id: "holland-dunes",
  nameZh: "荷兰沙丘海岸",
  nameEn: "Holland Dunes",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "南肯尼默兰国家公园", lon: 4.5500, lat: 52.4200, elevation: 30, kind: "dune" },
  bbox: [4.45, 52.30, 4.65, 52.55],
  axis: [[4.60, 52.30], [4.50, 52.55]],
  label: { lon: 4.55, lat: 52.42, rotation: -80 },
  source: "荷兰沙丘海岸：北海沿岸一条连续的沙丘带，从泽兰一直延伸到瓦登群岛，是荷兰天然的海岸防线，也是荷兰地下水的重要蓄水层；南肯尼默兰一带的沙丘国家公园保留有荷兰面积最大的连片沙丘荒原（荷兰国家林务局 Staatsbosbeheer）",
};

const BIESBOSCH: TerrainEntry = {
  id: "biesbosch",
  nameZh: "比斯博斯",
  nameEn: "Biesbosch",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "比斯博斯国家公园水道", lon: 4.8000, lat: 51.7500, elevation: 0, kind: "delta" },
  bbox: [4.65, 51.68, 4.95, 51.82],
  label: { lon: 4.80, lat: 51.75, rotation: 0 },
  source: "比斯博斯：马斯河与莱茵河支流汇合处的一片淡水潮汐湿地，1421年一次堤坝溃决引发的洪水（圣伊丽莎白洪水）淹没原有陆地后逐渐演变而成，如今是水道纵横的淡水潮汐三角洲，1994年设立国家公园，是欧洲少有的淡水潮汐湿地样本之一（荷兰国家林务局 Staatsbosbeheer）",
};

const MAASVLAKTE: TerrainEntry = {
  id: "maasvlakte",
  nameZh: "马斯平原（鹿特丹港填海区）",
  nameEn: "Maasvlakte",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "马斯平原二期填海区", lon: 4.0200, lat: 51.9500, elevation: 5, kind: "delta" },
  bbox: [3.90, 51.90, 4.15, 52.00],
  label: { lon: 4.02, lat: 51.95, rotation: 0 },
  source: "马斯平原：鹿特丹港自1970年代起在马斯河口以西的北海海域填海造陆形成的人工陆地，2013年完工的二期工程（Maasvlakte 2）进一步向海推进约2公里，是欧洲最大港口鹿特丹港的核心作业区之一，也是荷兰持续与海争地传统的当代延续（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const AFSLUITDIJK: TerrainEntry = {
  id: "afsluitdijk",
  nameZh: "阿夫鲁戴克大坝",
  nameEn: "Afsluitdijk",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "阿夫鲁戴克大坝中段", lon: 5.3000, lat: 53.0700, elevation: 7, kind: "escarpment" },
  bbox: [5.05, 52.98, 5.45, 53.13],
  axis: [[5.05, 53.00], [5.45, 53.08]],
  label: { lon: 5.25, lat: 53.05, rotation: 10 },
  source: "阿夫鲁戴克大坝：1932年完工的一条长约32公里的拦海大坝，将原本与北海相通的须德海封闭为如今的淡水湖艾瑟尔湖，是荷兰围垦史上最具标志性的工程之一，大坝上建有公路和纪念碑（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const IJSSELMEER: TerrainEntry = {
  id: "ijsselmeer",
  nameZh: "艾瑟尔湖",
  nameEn: "IJsselmeer",
  category: "lake",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "艾瑟尔湖中部", lon: 5.3000, lat: 52.7500, elevation: -0.2, kind: "lake" },
  bbox: [4.95, 52.45, 5.75, 53.10],
  viewScale: 1.3,
  label: { lon: 5.30, lat: 52.75, rotation: 0 },
  source: "艾瑟尔湖：荷兰最大的湖泊，面积约1100平方公里，1932年阿夫鲁戴克大坝建成后，原本与北海相通的咸水湾须德海被封闭并逐渐淡化，形成如今的淡水湖；湖区周边多段被围垦为弗莱福兰省的陆地（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const MARKERMEER: TerrainEntry = {
  id: "markermeer",
  nameZh: "马尔默湖",
  nameEn: "Markermeer",
  category: "lake",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "马尔默湖中部", lon: 5.2500, lat: 52.5000, elevation: -0.2, kind: "lake" },
  bbox: [5.00, 52.35, 5.50, 52.65],
  label: { lon: 5.25, lat: 52.50, rotation: 0 },
  source: "马尔默湖：1976年一条拦湖坝（Houtribdijk）将艾瑟尔湖南部隔出的一片独立淡水湖，面积约700平方公里；因水流不畅、泥沙淤积导致水质浑浊，近年荷兰启动“马尔默沃德”生态修复工程，人工建造湿地岛屿改善水质（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const GREVELINGEN: TerrainEntry = {
  id: "grevelingen",
  nameZh: "赫雷弗林恩湖",
  nameEn: "Grevelingen",
  category: "lake",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "赫雷弗林恩湖中部", lon: 3.8500, lat: 51.7500, elevation: 0, kind: "lake" },
  bbox: [3.65, 51.68, 4.05, 51.82],
  label: { lon: 3.85, lat: 51.75, rotation: 0 },
  source: "赫雷弗林恩湖：三角洲工程期间（1971年筑坝完工）由原河口湾封闭形成的咸水湖，是西欧最大的咸水湖之一；因不再受潮汐冲刷，湖区成为潜水和水上运动热点，也是重要的水鸟栖息地（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const LAUWERSMEER: TerrainEntry = {
  id: "lauwersmeer",
  nameZh: "劳沃斯湖",
  nameEn: "Lauwersmeer",
  category: "lake",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "劳沃斯湖国家公园", lon: 6.2500, lat: 53.3500, elevation: -1, kind: "lake" },
  bbox: [6.10, 53.28, 6.40, 53.42],
  label: { lon: 6.25, lat: 53.35, rotation: 0 },
  source: "劳沃斯湖：1969年一条拦海坝将原本与瓦登海相通的劳沃斯湾封闭后逐渐淡化形成的湖泊与湿地，1990年设立国家公园，是荷兰北部重要的候鸟栖息与观测地（荷兰国家林务局 Staatsbosbeheer）",
};

const WEERRIBBEN_WIEDEN: TerrainEntry = {
  id: "weerribben-wieden",
  nameZh: "维里本-维登湿地",
  nameEn: "Weerribben-Wieden",
  category: "lake",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "维里本-维登国家公园", lon: 6.0500, lat: 52.7500, elevation: -1, kind: "lake" },
  bbox: [5.90, 52.68, 6.20, 52.82],
  label: { lon: 6.05, lat: 52.75, rotation: 0 },
  source: "维里本-维登湿地：荷兰西北部一片由历史上大规模泥炭开采形成的湖沼湿地，纵横的水道原是采泥炭留下的沟渠，是西欧现存面积最大的低地泥炭沼泽之一；1992年整合设立国家公园，芦苇收割等传统利用方式延续至今（荷兰国家林务局 Staatsbosbeheer）",
};

const RHINE_DELTA_NL: TerrainEntry = {
  id: "rhine-delta-nl",
  nameZh: "莱茵河荷兰段",
  nameEn: "Rhine Delta (Netherlands)",
  category: "river",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "潘纳尔登运河分流点", lon: 6.1000, lat: 51.8700, elevation: 10, kind: "meander" },
  bbox: [5.80, 51.80, 6.30, 51.95],
  label: { lon: 6.05, lat: 51.87, rotation: 0 },
  source: "莱茵河荷兰段：莱茵河（发源于瑞士阿尔卑斯山）进入荷兰后在潘纳尔登运河一带分流为下莱茵河/莱克河与瓦尔河两支，是欧洲最重要的内河航运通道之一；三条支流最终分别经鹿特丹、代尔夫齐尔等多个入海口汇入北海（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const MEUSE_RIVER_NL: TerrainEntry = {
  id: "meuse-river-nl",
  nameZh: "马斯河荷兰段",
  nameEn: "Meuse (Maas) River",
  category: "river",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "马斯特里赫特河段", lon: 5.6900, lat: 50.8500, elevation: 45, kind: "meander" },
  bbox: [5.55, 50.75, 5.95, 51.15],
  axis: [[5.60, 50.78], [5.90, 51.10]],
  label: { lon: 5.75, lat: 50.95, rotation: -40 },
  source: "马斯河荷兰段：发源于法国、流经比利时后进入荷兰南部林堡省的河流，马斯特里赫特一带河谷较窄、两岸有低丘，向北进入布拉班特省后河道展宽变缓，与莱茵河支流在鹿特丹以西汇合入海（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const IJSSEL_RIVER: TerrainEntry = {
  id: "ijssel-river",
  nameZh: "艾瑟尔河",
  nameEn: "IJssel River",
  category: "river",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "德文特尔河段", lon: 6.1000, lat: 52.3500, elevation: 5, kind: "meander" },
  bbox: [5.90, 52.05, 6.25, 52.60],
  axis: [[5.95, 52.05], [5.90, 52.60]],
  label: { lon: 6.05, lat: 52.35, rotation: -70 },
  source: "艾瑟尔河：莱茵河下莱茵河段在阿纳姆附近分出的一条支流，向北流约120公里注入艾瑟尔湖，是荷兰东部“汉萨城市”（代芬特尔、坎彭等，历史上曾是汉萨同盟贸易网络的成员）沿岸的主要水道（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const VECHT_RIVER: TerrainEntry = {
  id: "vecht-river",
  nameZh: "费赫特河",
  nameEn: "Vecht River",
  category: "river",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "洛嫩镇河段", lon: 5.0300, lat: 52.2200, elevation: 0, kind: "meander" },
  bbox: [4.95, 52.15, 5.15, 52.35],
  label: { lon: 5.03, lat: 52.22, rotation: -30 },
  source: "费赫特河：荷兰中部一条流速平缓的小河，17-18世纪阿姆斯特丹商人沿河修建了大量避暑庄园（buitenplaatsen），至今两岸保留数十座历史庄园和花园，是荷兰黄金时代乡村景观的代表样本（荷兰文化遗产局 Rijksdienst voor het Cultureel Erfgoed）",
};

const WADDEN_ISLANDS: TerrainEntry = {
  id: "wadden-islands",
  nameZh: "西弗里西亚群岛",
  nameEn: "West Frisian Islands",
  category: "island",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "特塞尔岛沙丘", lon: 4.8300, lat: 53.1300, elevation: 15, kind: "dune" },
  bbox: [4.70, 52.95, 6.30, 53.50],
  axis: [[4.75, 53.05], [6.20, 53.48]],
  viewScale: 1.4,
  label: { lon: 5.50, lat: 53.30, rotation: 25 },
  source: "西弗里西亚群岛：荷兰北部瓦登海外侧一列由沙丘构成的堰洲岛链，自西向东主要包括特塞尔、弗利兰、特斯海灵、阿默兰、斯希蒙尼克岛等，是瓦登海生态系统的天然屏障；特塞尔岛是其中面积最大、人口最多的一座（荷兰国家林务局 Staatsbosbeheer）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 荷兰 =====
  VAALSERBERG, VELUWE, UTRECHTSE_HEUVELRUG, DRENTHE_HONDSRUG,
  FLEVOLAND_POLDER,
  ZUIDPLASPOLDER,
  LOONSE_EN_DRUNENSE_DUINEN,
  WADDEN_SEA_NL, ZEELAND_DELTA, WESTERSCHELDE, HOLLAND_DUNES, BIESBOSCH, MAASVLAKTE, AFSLUITDIJK,
  IJSSELMEER, MARKERMEER, GREVELINGEN, LAUWERSMEER, WEERRIBBEN_WIEDEN,
  RHINE_DELTA_NL, MEUSE_RIVER_NL, IJSSEL_RIVER, VECHT_RIVER,
  WADDEN_ISLANDS,
];
