import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 葡萄牙
// ============================================================

const PENEDA_GERES: TerrainEntry = {
  id: "peneda-geres",
  nameZh: "佩内达-杰雷斯山",
  nameEn: "Peneda-Gerês",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "内沃萨峰", lon: -8.203, lat: 41.828, elevation: 1545, kind: "peak" },
  bbox: [-8.35, 41.70, -7.85, 41.95],
  axis: [[-8.35, 41.90], [-7.90, 41.75]],
  viewScale: 1.3,
  label: { lon: -8.10, lat: 41.80, rotation: -30 },
  source: "佩内达-杰雷斯山：葡萄牙西北角、与西班牙加利西亚交界一带的花岗岩山地，最高点约1545米；1971年设立佩内达-杰雷斯国家公园，是葡萄牙本土唯一的国家公园；山地保留野生阿洛依诺马和多处新石器时代石阵遗迹（葡萄牙自然与森林保护局 ICNF）",
};

const SERRA_DA_ESTRELA: TerrainEntry = {
  id: "serra-da-estrela",
  nameZh: "埃斯特雷拉山",
  nameEn: "Serra da Estrela",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "托雷峰", lon: -7.6144, lat: 40.3213, elevation: 1993, kind: "peak" },
  bbox: [-7.75, 40.25, -7.50, 40.45],
  axis: [[-7.72, 40.42], [-7.55, 40.28]],
  label: { lon: -7.62, lat: 40.35, rotation: -50 },
  source: "埃斯特雷拉山：葡萄牙大陆最高山系，主峰托雷海拔1993米，是葡萄牙大陆最高点；花岗岩山体经第四纪冰期塑造，保留冰蚀谷、冰斗湖等地貌；1976年设立埃斯特雷拉山自然公园，2020年联合国教科文组织将其列为世界地质公园（UNESCO / ICNF）",
};

const SERRA_DE_SINTRA: TerrainEntry = {
  id: "serra-de-sintra",
  nameZh: "辛特拉山",
  nameEn: "Serra de Sintra",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "十字架高地", lon: -9.3988, lat: 38.7876, elevation: 528, kind: "peak" },
  bbox: [-9.47, 38.75, -9.33, 38.82],
  label: { lon: -9.40, lat: 38.79, rotation: 0 },
  source: "辛特拉山：里斯本以西的一列小型花岗岩山地，最高点约528米，因常年受大西洋雾气笼罩、气候独特而自19世纪起成为葡萄牙王室避暑地；山上的佩纳宫等建筑与自然景观于1995年作为文化景观整体列入联合国教科文组织世界遗产名录（UNESCO）",
};

const SERRA_DE_MONCHIQUE: TerrainEntry = {
  id: "serra-de-monchique",
  nameZh: "蒙希克山",
  nameEn: "Serra de Monchique",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "福亚峰", lon: -8.5972, lat: 37.3181, elevation: 902, kind: "peak" },
  bbox: [-8.65, 37.28, -8.50, 37.38],
  label: { lon: -8.58, lat: 37.32, rotation: 0 },
  source: "蒙希克山：阿尔加维内陆的一列碱性侵入岩（正长岩）山地，最高点福亚峰海拔902米，是阿尔加维大区最高点；与周边主要为石灰岩的地质背景不同，山体富含温泉，蒙希克镇自罗马时代起即以温泉疗养闻名（葡萄牙地质调查局 LNEG）",
};

const SERRA_DE_MONTESINHO: TerrainEntry = {
  id: "serra-de-montesinho",
  nameZh: "蒙特西尼奥山",
  nameEn: "Serra de Montesinho",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "蒙特西尼奥峰", lon: -6.85, lat: 41.90, elevation: 1481, kind: "peak" },
  bbox: [-7.05, 41.80, -6.65, 42.00],
  label: { lon: -6.85, lat: 41.90, rotation: 0 },
  source: "蒙特西尼奥山：葡萄牙东北角特拉斯山地区一片古老的板岩、片麻岩山地，最高点约1481米；1979年设立蒙特西尼奥自然公园，是伊比利亚半岛狼群重要栖息地之一，保留大量传统石砌村落（ICNF）",
};

const SERRA_DE_AIRE_CANDEEIROS: TerrainEntry = {
  id: "serra-de-aire-candeeiros",
  nameZh: "艾雷-坎迪埃罗斯山",
  nameEn: "Serra de Aire e Candeeiros",
  category: "plateau",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "皮亚斯高地", lon: -8.70, lat: 39.53, elevation: 679, kind: "escarpment" },
  bbox: [-8.85, 39.40, -8.55, 39.65],
  viewScale: 1.2,
  label: { lon: -8.70, lat: 39.53, rotation: 0 },
  source: "艾雷-坎迪埃罗斯山：葡萄牙中西部一片侏罗纪石灰岩高地，最高点约679米，喀斯特地貌发育，溶洞、落水洞广布，米拉德艾雷洞是葡萄牙已知最大的溶洞系统；1979年设立艾雷-坎迪埃罗斯自然公园（ICNF / 地质文献）",
};

const TRAS_OS_MONTES_PLATEAU: TerrainEntry = {
  id: "tras-os-montes-plateau",
  nameZh: "特拉斯山高原",
  nameEn: "Trás-os-Montes Plateau",
  category: "plateau",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "米兰达高原", lon: -6.27, lat: 41.49, elevation: 700, kind: "escarpment" },
  bbox: [-7.00, 41.20, -6.10, 41.90],
  viewScale: 1.6,
  label: { lon: -6.55, lat: 41.55, rotation: 0 },
  source: "特拉斯山高原：葡萄牙东北角一片古老结晶岩台地，海拔多在600–900米之间，是伊比利亚台地向大西洋的过渡地带；气候冬冷夏热、大陆性明显，与沿海地区差异显著；台地被杜罗河切出的深谷（国际杜罗河谷）分隔（葡萄牙国家统计局 / 地理文献）",
};

const ALENTEJO_PLAIN: TerrainEntry = {
  id: "alentejo-plain",
  nameZh: "阿连特茹平原",
  nameEn: "Alentejo Plain",
  category: "plain",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "埃武拉平原", lon: -7.90, lat: 38.57, elevation: 300, kind: "grassland" },
  bbox: [-8.30, 37.90, -7.20, 39.10],
  viewScale: 1.8,
  label: { lon: -7.80, lat: 38.50, rotation: 0 },
  source: "阿连特茹平原：葡萄牙南部大面积起伏平原，占国土约三分之一，海拔多在200–400米之间，是伊比利亚台地向西南延伸的一部分；地表广布软木橡树与荷兰栎稀树草原（montado），是全球软木塞主要产地，2016年联合国粮农组织将该农林复合系统列为全球重要农业文化遗产（FAO / 葡萄牙农业部）",
};

const DOURO_VALLEY: TerrainEntry = {
  id: "douro-valley",
  nameZh: "杜罗河谷",
  nameEn: "Douro Valley",
  category: "valley",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "皮尼昂葡萄园梯田", lon: -7.546, lat: 41.192, elevation: 120, kind: "escarpment" },
  bbox: [-7.85, 41.10, -7.30, 41.30],
  axis: [[-7.85, 41.20], [-7.30, 41.16]],
  label: { lon: -7.55, lat: 41.14, rotation: 5 },
  source: "杜罗河谷：葡萄牙北部杜罗河中游两岸的陡峭梯田葡萄园区，人工修建的石砌梯田已有约2000年历史，是全世界最古老的受保护法定葡萄酒产区（1756年划定），波特酒即产自此地；2001年作为文化景观列入联合国教科文组织世界遗产名录（UNESCO）",
};

const DOURO_INTERNATIONAL: TerrainEntry = {
  id: "douro-international",
  nameZh: "国际杜罗河谷",
  nameEn: "International Douro",
  category: "gorge",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "米兰达峡谷观景台", lon: -6.60, lat: 41.34, elevation: 200, kind: "gorge" },
  bbox: [-6.85, 41.15, -6.40, 41.55],
  axis: [[-6.85, 41.55], [-6.45, 41.20]],
  viewScale: 1.2,
  label: { lon: -6.62, lat: 41.35, rotation: -60 },
  source: "国际杜罗河谷：杜罗河在葡萄牙、西班牙边境一段切穿古老结晶岩台地形成的深切峡谷，两岸崖壁高达数百米，是伊比利亚半岛内陆金雕、埃及秃鹫等猛禽的重要栖息地；葡、西两国分别设立国际杜罗河谷自然公园对边境两侧共同保护（ICNF）",
};

const TAGUS_RIVER: TerrainEntry = {
  id: "tagus-river",
  nameZh: "特茹河",
  nameEn: "Tagus (Tejo)",
  category: "river",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "圣塔伦河段", lon: -8.68, lat: 39.24, elevation: 20, kind: "meander" },
  bbox: [-8.90, 39.10, -8.40, 39.45],
  axis: [[-8.40, 39.42], [-8.85, 39.15]],
  label: { lon: -8.65, lat: 39.28, rotation: -25 },
  source: "特茹河：伊比利亚半岛最长河流，全长约1038公里，发源于西班牙阿尔巴拉辛山，穿越葡萄牙中部注入大西洋；圣塔伦一带河道宽阔、河谷平坦，是葡萄牙重要的灌溉农业区（葡萄牙环境署 APA）",
};

const MINHO_RIVER: TerrainEntry = {
  id: "minho-river",
  nameZh: "米尼奥河",
  nameEn: "Minho River",
  category: "river",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "瓦伦萨河段", lon: -8.643, lat: 42.031, elevation: 10, kind: "meander" },
  bbox: [-8.85, 41.90, -8.15, 42.13],
  axis: [[-8.15, 42.05], [-8.85, 41.90]],
  label: { lon: -8.50, lat: 41.98, rotation: -15 },
  source: "米尼奥河：发源于西班牙加利西亚、下游约75公里构成葡萄牙与西班牙的边境线，最终在维亚纳堡以北注入大西洋；河口一带是重要的候鸟栖息湿地（葡萄牙环境署 APA）",
};

const MONDEGO_RIVER: TerrainEntry = {
  id: "mondego-river",
  nameZh: "蒙德古河",
  nameEn: "Mondego River",
  category: "river",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "科英布拉河段", lon: -8.4103, lat: 40.2033, elevation: 15, kind: "meander" },
  bbox: [-8.60, 40.05, -8.10, 40.45],
  axis: [[-8.10, 40.42], [-8.55, 40.10]],
  label: { lon: -8.35, lat: 40.25, rotation: -20 },
  source: "蒙德古河：葡萄牙全境在国内发源、全程流经本国的最长河流，全长约227公里，发源于埃斯特雷拉山，流经科英布拉后注入大西洋（葡萄牙环境署 APA）",
};

const GUADIANA_RIVER: TerrainEntry = {
  id: "guadiana-river",
  nameZh: "瓜迪亚纳河",
  nameEn: "Guadiana River",
  category: "river",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "梅尔托拉河段", lon: -7.664, lat: 37.639, elevation: 50, kind: "meander" },
  bbox: [-7.85, 37.50, -7.40, 37.80],
  label: { lon: -7.65, lat: 37.63, rotation: 10 },
  source: "瓜迪亚纳河：发源于西班牙拉曼恰高原，下游一段构成葡、西边境，在维拉雷阿尔迪圣安东尼奥注入大西洋；梅尔托拉一带河谷曲折、两岸为板岩丘陵，历史上曾是重要的铜矿采运通道（葡萄牙环境署 APA）",
};

const ALQUEVA_RESERVOIR: TerrainEntry = {
  id: "alqueva-reservoir",
  nameZh: "阿尔克瓦水库",
  nameEn: "Alqueva Reservoir",
  category: "lake",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "阿尔克瓦大坝", lon: -7.503, lat: 38.187, elevation: 152, kind: "lake" },
  bbox: [-7.65, 38.00, -7.30, 38.45],
  viewScale: 1.3,
  label: { lon: -7.50, lat: 38.25, rotation: 0 },
  source: "阿尔克瓦水库：2002年蓄水完成的人工水库，水面面积约250平方公里，是西欧最大的人工湖；大坝拦截瓜迪亚纳河而成，主要用于灌溉、发电和供水，也是欧洲首个官方认证的“暗夜保护区”之一（葡萄牙国家水资源局 / IUCN）",
};

const TAGUS_ESTUARY: TerrainEntry = {
  id: "tagus-estuary",
  nameZh: "特茹河口",
  nameEn: "Tagus Estuary",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "特茹河口（草海）", lon: -9.05, lat: 38.75, elevation: 0, kind: "delta" },
  bbox: [-9.20, 38.60, -8.85, 38.90],
  label: { lon: -9.00, lat: 38.75, rotation: 0 },
  source: "特茹河口：里斯本以东特茹河汇入大西洋前形成的宽阔河口湾，当地俗称“草海”（Mar da Palha），面积约320平方公里，是欧洲西部最重要的水鸟越冬地之一；1976年设立特茹河口自然保护区（ICNF）",
};

const ALGARVE_COAST: TerrainEntry = {
  id: "algarve-coast",
  nameZh: "阿尔加维海岸",
  nameEn: "Algarve Coast",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "皮耶达德角", lon: -8.667, lat: 37.083, elevation: 20, kind: "escarpment" },
  bbox: [-8.80, 37.05, -8.55, 37.15],
  label: { lon: -8.67, lat: 37.09, rotation: 0 },
  source: "阿尔加维海岸：葡萄牙最南端石灰岩海岸，以金黄色岩壁、海蚀拱、海蚀柱和众多小型海滩闻名，拉戈什一带的皮耶达德角是其中最具代表性的一段；地貌由第三纪石灰岩经海浪长期侵蚀塑造（葡萄牙地质调查局 LNEG）",
};

const RIA_FORMOSA: TerrainEntry = {
  id: "ria-formosa",
  nameZh: "福尔摩沙潟湖",
  nameEn: "Ria Formosa",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "法鲁潟湖", lon: -7.98, lat: 37.02, elevation: 0, kind: "delta" },
  bbox: [-8.15, 36.95, -7.60, 37.08],
  axis: [[-8.15, 37.00], [-7.60, 37.00]],
  label: { lon: -7.90, lat: 37.00, rotation: 0 },
  source: "福尔摩沙潟湖：阿尔加维沿海一条约60公里长的潟湖体系，由一连串沙洲、沙坝与河口湿地组成，随潮汐涨落不断变化；1987年设立福尔摩沙潟湖自然公园，是地中海地区数量最多的白头鹮繁殖地之一（ICNF）",
};

const COSTA_VICENTINA: TerrainEntry = {
  id: "costa-vicentina",
  nameZh: "维森特角海岸",
  nameEn: "Costa Vicentina",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "圣维森特角", lon: -8.972, lat: 37.023, elevation: 60, kind: "escarpment" },
  bbox: [-8.98, 36.95, -8.65, 37.65],
  axis: [[-8.972, 37.02], [-8.78, 37.65]],
  viewScale: 1.2,
  label: { lon: -8.85, lat: 37.30, rotation: 80 },
  source: "维森特角海岸：葡萄牙西南端一段面朝大西洋的陡崖海岸，从圣维森特角向北延伸约百余公里，崖壁多为古生代变质岩，因常年受强风和洋流影响、开发程度低，1995年设立西南海岸暨维森特角自然公园；圣维森特角自古被视为已知世界的西南尽头（ICNF）",
};

const ARRABIDA_COAST: TerrainEntry = {
  id: "arrabida-coast",
  nameZh: "阿拉比达海岸",
  nameEn: "Arrábida Coast",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "波尔蒂尼奥湾", lon: -8.98, lat: 38.48, elevation: 500, kind: "escarpment" },
  bbox: [-9.05, 38.44, -8.80, 38.53],
  label: { lon: -8.95, lat: 38.48, rotation: 0 },
  source: "阿拉比达海岸：里斯本以南塞图巴尔半岛一段石灰岩山地直插大西洋形成的陡峭海岸，最高点约500米，山海高差极大；1976年设立阿拉比达自然公园，海域内清澈的浅蓝色海水和茂密的地中海灌丛是其显著特征（ICNF）",
};

const BERLENGAS: TerrainEntry = {
  id: "berlengas",
  nameZh: "贝尔伦加群岛",
  nameEn: "Berlengas",
  category: "island",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "大贝尔伦加岛", lon: -9.508, lat: 39.410, elevation: 85, kind: "island" },
  bbox: [-9.55, 39.38, -9.46, 39.46],
  label: { lon: -9.51, lat: 39.41, rotation: 0 },
  source: "贝尔伦加群岛：距佩尼谢海岸约10–17公里的一组花岗岩小岛，主岛大贝尔伦加长约1.5公里；1981年依第264/81号法令设为自然保护区、1998年扩大到周边海域（第30/98号规范法令，1 级，核实 2026-09-12），也是重要的海鸟繁殖地；2011年列入联合国教科文组织生物圈保护区（UNESCO / ICNF）",
};

const PICO_MOUNTAIN: TerrainEntry = {
  id: "pico-mountain",
  nameZh: "皮库山",
  nameEn: "Mount Pico",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "皮库火山口", lon: -28.3979, lat: 38.4699, elevation: 2351, kind: "peak" },
  bbox: [-28.45, 38.42, -28.25, 38.53],
  label: { lon: -28.35, lat: 38.47, rotation: 0 },
  source: "皮库山：亚速尔群岛皮库岛上的层状火山，海拔2351米，是葡萄牙全境最高点，也是大西洋中脊上一处典型的洋岛火山；山麓一带传统的黑色玄武岩石墙葡萄园（葡萄种植于熔岩石圈内以防风）于2004年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const SETE_CIDADES_CALDERA: TerrainEntry = {
  id: "sete-cidades-caldera",
  nameZh: "七城破火山口",
  nameEn: "Sete Cidades Caldera",
  category: "basin",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "七城双湖", lon: -25.7897, lat: 37.8608, elevation: 260, kind: "lake" },
  bbox: [-25.83, 37.83, -25.75, 37.89],
  label: { lon: -25.79, lat: 37.86, rotation: 0 },
  source: "七城破火山口：亚速尔群岛圣米格尔岛西端一座直径约5公里的火山破火山口，口底一大一小两个相连的湖泊因光线折射常呈现一蓝一绿的对比色，当地传说据此附会为“恋人之泪”；活跃的圣米格尔火山系统由葡萄牙火山与地质灾害监测局持续监测（IVAR）",
};

const FURNAS_CALDERA: TerrainEntry = {
  id: "furnas-caldera",
  nameZh: "富尔纳斯破火山口",
  nameEn: "Furnas Caldera",
  category: "basin",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "富尔纳斯地热区", lon: -25.3181, lat: 37.7697, elevation: 360, kind: "escarpment" },
  bbox: [-25.37, 37.73, -25.28, 37.81],
  label: { lon: -25.32, lat: 37.77, rotation: 0 },
  source: "富尔纳斯破火山口：亚速尔群岛圣米格尔岛东部一座活跃火山破火山口，口内地热活动强烈，遍布喷气孔、沸泥塘和温泉，当地传统用地热蒸汽焖煮“火山炖菜”（cozido das Furnas）；由葡萄牙火山与地质灾害监测局持续监测（IVAR）",
};

const MADEIRA_MOUNTAINS: TerrainEntry = {
  id: "madeira-mountains",
  nameZh: "马德拉山地",
  nameEn: "Madeira Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "皮库鲁伊武峰", lon: -16.9425, lat: 32.7597, elevation: 1862, kind: "peak" },
  bbox: [-17.05, 32.70, -16.85, 32.78],
  label: { lon: -16.95, lat: 32.74, rotation: 0 },
  source: "马德拉山地：马德拉岛中央一列由火山喷发堆积形成的高山脊，最高点皮库鲁伊武海拔1862米；岛上保存有大片劳里西尔瓦月桂林（第三纪残遗植被），2007年作为自然遗产列入联合国教科文组织世界遗产名录（UNESCO）",
};

const CABO_GIRAO: TerrainEntry = {
  id: "cabo-girao",
  nameZh: "吉朗角",
  nameEn: "Cabo Girão",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "吉朗角观景台", lon: -17.0011, lat: 32.6494, elevation: 580, kind: "escarpment" },
  bbox: [-17.03, 32.63, -16.97, 32.67],
  label: { lon: -17.00, lat: 32.65, rotation: 0 },
  source: "吉朗角：马德拉岛南岸一处近乎垂直的海崖，崖顶到海面落差约580米，是欧洲最高的海崖之一；崖壁由多次火山喷发形成的熔岩与火山碎屑层交替堆叠而成，崖顶设有悬空玻璃观景台（葡萄牙旅游局 Visit Madeira）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 葡萄牙 =====
  PENEDA_GERES, SERRA_DA_ESTRELA, SERRA_DE_SINTRA, SERRA_DE_MONCHIQUE, SERRA_DE_MONTESINHO,
  SERRA_DE_AIRE_CANDEEIROS, TRAS_OS_MONTES_PLATEAU,
  ALENTEJO_PLAIN,
  DOURO_VALLEY, DOURO_INTERNATIONAL,
  TAGUS_RIVER, MINHO_RIVER, MONDEGO_RIVER, GUADIANA_RIVER,
  ALQUEVA_RESERVOIR,
  TAGUS_ESTUARY, ALGARVE_COAST, RIA_FORMOSA, COSTA_VICENTINA, ARRABIDA_COAST,
  BERLENGAS,
  PICO_MOUNTAIN, SETE_CIDADES_CALDERA, FURNAS_CALDERA,
  MADEIRA_MOUNTAINS, CABO_GIRAO,
];
