import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 南美洲 / 智利
// ============================================================

const ANDES_CHILE: TerrainEntry = {
  id: "andes-chile",
  nameZh: "安第斯山脉（智利段）",
  nameEn: "Andes (Chile)",
  category: "mountain_system",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "奥霍斯德萨拉多火山", lon: -68.5397, lat: -27.1067, elevation: 6893, kind: "peak" },
  bbox: [-72.5, -56.0, -66.0, -17.5],
  axis: [[-69.1, -17.5], [-72.3, -56.0]],
  viewScale: 1.8,
  label: { lon: -69.5, lat: -35.0, rotation: 15 },
  source: "安第斯山脉智利段：纵贯智利全境南北的主脊，是智利与阿根廷之间的天然分界（中性地理表述，不涉边界主权），锚点奥霍斯德萨拉多火山海拔6893米，是世界最高的活火山、南美洲第二高峰，位于智利与阿根廷交界一带；山体由纳斯卡板块俯冲南美板块形成，沿线密布数十座活火山（SERNAGEOMIN/公开地理资料 WebSearch 2026）",
};

const CORDILLERA_DE_LA_COSTA: TerrainEntry = {
  id: "cordillera-de-la-costa",
  nameZh: "智利海岸山脉",
  nameEn: "Chilean Coastal Range",
  category: "mountain_system",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "拉坎帕纳峰", lon: -71.078, lat: -32.958, elevation: 1880, kind: "peak" },
  bbox: [-71.6, -33.2, -70.7, -32.6],
  axis: [[-71.2, -32.6], [-71.1, -33.2]],
  label: { lon: -71.1, lat: -32.9, rotation: 10 },
  source: "智利海岸山脉：与安第斯山脉平行、沿太平洋岸延伸的古老低山，中段（圣地亚哥—瓦尔帕莱索一带）在拉坎帕纳国家公园抬升到1880米，达尔文1834年曾登临此峰观测；两山之间夹着中央谷地，是智利地貌“三段式”结构（海岸山脉—中央谷地—安第斯山脉）的西侧骨架（CONAF/公开地理资料 WebSearch 2026）",
};

const VILLARRICA_VOLCANO: TerrainEntry = {
  id: "villarrica-volcano",
  nameZh: "维亚里卡火山",
  nameEn: "Villarrica Volcano",
  category: "mountain_system",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "维亚里卡火山", lon: -71.939, lat: -39.420, elevation: 2847, kind: "peak" },
  bbox: [-72.10, -39.55, -71.75, -39.25],
  label: { lon: -71.94, lat: -39.42, rotation: 0 },
  source: "维亚里卡火山：智利湖区标志性活火山之一，海拔2847米，山顶终年积雪、火山口常年可见岩浆湖发光，是南美少数几座能常态观测到熔岩湖的活火山；紧邻普孔小镇，2015年曾发生喷发（SERNAGEOMIN/公开地理资料 WebSearch 2026）",
};

const OSORNO_VOLCANO: TerrainEntry = {
  id: "osorno-volcano",
  nameZh: "奥索尔诺火山",
  nameEn: "Osorno Volcano",
  category: "mountain_system",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "奥索尔诺火山", lon: -72.493, lat: -41.100, elevation: 2652, kind: "peak" },
  bbox: [-72.65, -41.22, -72.30, -40.95],
  label: { lon: -72.49, lat: -41.10, rotation: 0 },
  source: "奥索尔诺火山：形态对称的成层火山，海拔2652米，因外形酷似富士山常被称作“智利富士山”，矗立在延基韦湖与托多斯洛斯桑托斯湖之间，是湖区最上镜的地标；近两百年记录在案的喷发超过10次，最近一次为1869年（SERNAGEOMIN/公开地理资料 WebSearch 2026）",
};

const LLAIMA_VOLCANO: TerrainEntry = {
  id: "llaima-volcano",
  nameZh: "利亚伊马火山",
  nameEn: "Llaima Volcano",
  category: "mountain_system",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "利亚伊马火山", lon: -71.729, lat: -38.692, elevation: 3125, kind: "peak" },
  bbox: [-71.90, -38.85, -71.55, -38.55],
  label: { lon: -71.73, lat: -38.69, rotation: 0 },
  source: "利亚伊马火山：智利中南部海拔最高、喷发最频繁的活火山之一，历史记载喷发超过50次，海拔3125米；坐落在孔吉列奥国家公园内，山麓分布着智利的“活化石”南洋杉（智利南洋杉）原始林（SERNAGEOMIN/CONAF WebSearch 2026）",
};

const PAINE_MASSIF: TerrainEntry = {
  id: "paine-massif",
  nameZh: "百内山群（托雷斯德百内）",
  nameEn: "Paine Massif (Torres del Paine)",
  category: "mountain_system",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "百内格兰德峰", lon: -73.03, lat: -51.09, elevation: 3050, kind: "peak" },
  bbox: [-73.35, -51.30, -72.75, -50.85],
  label: { lon: -73.03, lat: -51.05, rotation: 0 },
  source: "百内山群：巴塔哥尼亚安第斯山脉东侧一处独立花岗岩山群，最高峰百内格兰德峰3050米，以三座陡峭花岗岩尖塔“百内三塔”（Torres del Paine）与角峰群“三牛角”（Cuernos del Paine）著称，山体由中新世花岗岩侵入后经冰川长期刨蚀塑造，是百内国家公园的核心景观、南美洲最知名的徒步目的地之一（CONAF/公开地理资料 WebSearch 2026）",
};

const ALTIPLANO_CHILE: TerrainEntry = {
  id: "altiplano-chile",
  nameZh: "智利阿尔蒂普拉诺高原",
  nameEn: "Chilean Altiplano",
  category: "plateau",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "琼加拉湖", lon: -69.15, lat: -18.24, elevation: 4517, kind: "lake" },
  bbox: [-69.60, -18.90, -68.70, -17.60],
  viewScale: 1.6,
  label: { lon: -69.2, lat: -18.4, rotation: 0 },
  source: "智利阿尔蒂普拉诺高原：安第斯山脉西侧一段平均海拔超过4000米的高原，是南美洲安第斯高原（Altiplano）的智利段，与玻利维亚、秘鲁相接（中性地理表述，不涉边界主权）；琼加拉湖是世界海拔最高的湖泊之一，湖畔可见帕里纳科塔等对称火山锥，高原上栖息大群火烈鸟与骆马（SERNAGEOMIN/CONAF WebSearch 2026）",
};

const CAMPO_DE_HIELO_SUR: TerrainEntry = {
  id: "campo-de-hielo-sur",
  nameZh: "南巴塔哥尼亚冰原",
  nameEn: "Southern Patagonian Ice Field",
  category: "plateau",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "巴尔马塞达峰", lon: -73.10, lat: -51.05, elevation: 2035, kind: "peak" },
  bbox: [-74.0, -51.7, -72.3, -48.3],
  viewScale: 1.8,
  label: { lon: -73.5, lat: -50.0, rotation: 15 },
  source: "南巴塔哥尼亚冰原：南北延伸约350公里，面积约1.3万平方公里，是南半球除南极洲外最大的连续冰体，横跨智利与阿根廷（中性地理表述，不涉边界主权）；冰原孕育数十条冰川，智利一侧的皮奥十一冰川是南半球面积最大的冰川、也是南美少数仍在前进的冰川之一（Wikipedia/公开地理资料 WebSearch 2026）",
};

const SALAR_DE_ATACAMA: TerrainEntry = {
  id: "salar-de-atacama",
  nameZh: "阿塔卡马盐沼",
  nameEn: "Salar de Atacama",
  category: "basin",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "查克萨潟湖", lon: -68.20, lat: -23.50, elevation: 2300, kind: "salt-lake" },
  bbox: [-68.35, -23.90, -67.85, -22.90],
  label: { lon: -68.15, lat: -23.4, rotation: 0 },
  source: "阿塔卡马盐沼：智利面积最大的盐沼，约3000平方公里，是安第斯山与海岸山脉之间一处封闭内流盆地长期蒸发浓缩的产物；盐壳边缘的查克萨潟湖是观测火烈鸟的著名地点，盐沼卤水富含锂，是全球锂资源最集中的产区之一（SERNAGEOMIN/公开地理资料 WebSearch 2026）",
};

const EL_TATIO_GEYSERS: TerrainEntry = {
  id: "el-tatio-geysers",
  nameZh: "塔蒂奥间歇泉",
  nameEn: "El Tatio Geysers",
  category: "basin",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "塔蒂奥间歇泉群", lon: -68.0136, lat: -22.3372, elevation: 4320, kind: "escarpment" },
  bbox: [-68.10, -22.42, -67.92, -22.28],
  label: { lon: -68.01, lat: -22.34, rotation: 0 },
  source: "塔蒂奥间歇泉：海拔约4320米，是世界上海拔最高的高山间歇泉田之一，也是南半球间歇泉数量最多的地热区，喷泉超过80处；日出前后气温骤降，蒸汽柱在冷空气中格外醒目，是圣佩德罗德阿塔卡马附近的经典观测点（SERNAGEOMIN/公开地理资料 WebSearch 2026）",
};

const CENTRAL_VALLEY_CHILE: TerrainEntry = {
  id: "central-valley-chile",
  nameZh: "智利中央谷地",
  nameEn: "Chilean Central Valley",
  category: "plain",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "库里科", lon: -71.24, lat: -34.98, elevation: 225, kind: "city" },
  bbox: [-71.60, -36.50, -70.40, -32.80],
  viewScale: 1.6,
  label: { lon: -71.0, lat: -34.8, rotation: 5 },
  source: "智利中央谷地：夹在海岸山脉与安第斯山脉之间的狭长堆积平原，南北延伸约1000公里，由安第斯冰川与河流长期携带的沉积物填埋而成；属地中海式气候，是智利葡萄酒产区与农业核心地带，圣地亚哥、库里科、塔尔卡等主要城市均坐落于此（公开地理资料 WebSearch 2026）",
};

const ATACAMA_DESERT: TerrainEntry = {
  id: "atacama-desert",
  nameZh: "阿塔卡马沙漠",
  nameEn: "Atacama Desert",
  category: "desert",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "阿塔卡马沙漠核心区", lon: -69.75, lat: -24.00, elevation: 1000, kind: "dune" },
  bbox: [-70.30, -25.50, -68.50, -21.00],
  viewScale: 1.8,
  label: { lon: -69.6, lat: -23.5, rotation: 0 },
  source: "阿塔卡马沙漠：位于海岸山脉与安第斯山脉之间的高原沙漠，受东侧安第斯山雨影效应与西侧寒冷的洪堡洋流双重作用，是地球上除极地干燥谷地外最干旱的地区之一，部分气象站数十年无有效降水记录；因空气极度干燥、光污染极低，欧洲南方天文台等多座世界级天文台建在此地（SERNAGEOMIN/公开地理资料 WebSearch 2026）",
};

const VALLE_DE_LA_LUNA: TerrainEntry = {
  id: "valle-de-la-luna",
  nameZh: "月亮谷",
  nameEn: "Valle de la Luna (Moon Valley)",
  category: "desert",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "月亮谷观景点", lon: -68.312, lat: -22.917, elevation: 2200, kind: "escarpment" },
  bbox: [-68.40, -23.00, -68.20, -22.85],
  label: { lon: -68.31, lat: -22.92, rotation: 0 },
  source: "月亮谷：阿塔卡马沙漠中一处由风蚀与古盐层沉积共同塑造的地貌，地表布满波状沙丘、盐壳与侵蚀岩脊，日落时分岩壁呈现红褐至粉紫色调，因形似月球表面地貌而得名，是圣佩德罗德阿塔卡马附近最著名的观景点（CONAF/公开地理资料 WebSearch 2026）",
};

const LAKE_LLANQUIHUE: TerrainEntry = {
  id: "lake-llanquihue",
  nameZh: "延基韦湖",
  nameEn: "Lake Llanquihue",
  category: "lake",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "延基韦湖", lon: -72.87, lat: -41.15, elevation: 51, kind: "lake" },
  bbox: [-73.10, -41.35, -72.60, -40.95],
  label: { lon: -72.87, lat: -41.15, rotation: 0 },
  source: "延基韦湖：面积约860平方公里，是智利第二大湖，由更新世冰川作用形成的冰蚀湖盆蓄水而成；湖岸风光以奥索尔诺火山、卡尔布科火山的倒影著称，普埃托瓦拉斯、弗鲁蒂利亚等湖畔小镇保留大量19世纪德国移民建筑风格（公开地理资料 WebSearch 2026）",
};

const LAKE_VILLARRICA: TerrainEntry = {
  id: "lake-villarrica",
  nameZh: "维亚里卡湖",
  nameEn: "Lake Villarrica",
  category: "lake",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "维亚里卡湖", lon: -72.13, lat: -39.27, elevation: 227, kind: "lake" },
  bbox: [-72.35, -39.35, -71.85, -39.18],
  label: { lon: -72.13, lat: -39.27, rotation: 0 },
  source: "维亚里卡湖：面积约176平方公里的冰蚀湖，湖畔普孔镇正对着终年冒着蒸汽的维亚里卡火山，是智利湖区最具代表性的“火山—湖泊”组合景观之一，也是温泉与水上运动集中的旅游中心（公开地理资料 WebSearch 2026）",
};

const LAKE_GENERAL_CARRERA: TerrainEntry = {
  id: "lake-general-carrera",
  nameZh: "赫内拉尔卡雷拉湖",
  nameEn: "Lake General Carrera",
  category: "lake",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "大理石教堂", lon: -73.246, lat: -46.585, elevation: 200, kind: "lake" },
  bbox: [-73.60, -46.90, -71.70, -46.20],
  viewScale: 1.4,
  label: { lon: -72.8, lat: -46.6, rotation: 0 },
  source: "赫内拉尔卡雷拉湖：智利面积最大的湖泊，也是南美洲第二大湖，湖体跨智利与阿根廷（阿根廷一侧称布宜诺斯艾利斯湖，中性表述，不涉边界主权）；湖水因冰川融水中的碳酸钙沉积呈现罕见的绿松石色，智利一侧的“大理石教堂”是湖水千万年侵蚀大理石岩体形成的洞穴群，从水面可乘船直入（公开地理资料 WebSearch 2026）",
};

const RIO_LOA: TerrainEntry = {
  id: "rio-loa",
  nameZh: "洛阿河",
  nameEn: "Loa River",
  category: "river",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "洛阿河卡拉马段", lon: -68.93, lat: -22.47, elevation: 2260, kind: "meander" },
  bbox: [-70.20, -22.60, -68.00, -21.30],
  axis: [[-68.10, -21.40], [-70.06, -21.42]],
  label: { lon: -69.3, lat: -21.9, rotation: 0 },
  source: "洛阿河：智利最长的河流，全长约440公里，发源于安第斯山北段，先向南、再折向西横穿阿塔卡马沙漠，最终注入太平洋，是沙漠腹地少有的常年地表径流，沿途滋养卡拉马等绿洲城镇，也是沙漠地区最主要的淡水来源（SERNAGEOMIN/公开地理资料 WebSearch 2026）",
};

const RIO_BAKER: TerrainEntry = {
  id: "rio-baker",
  nameZh: "贝克河",
  nameEn: "Baker River",
  category: "river",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "托尔特尔村河口", lon: -73.53, lat: -47.80, elevation: 20, kind: "meander" },
  bbox: [-73.70, -48.00, -72.30, -46.60],
  axis: [[-72.55, -46.75], [-73.53, -47.80]],
  label: { lon: -73.0, lat: -47.3, rotation: 0 },
  source: "贝克河：智利流量最大的河流，发源于赫内拉尔卡雷拉湖，向西注入太平洋，河水因冰川融水呈现独特的松石绿色；下游托尔特尔是智利少数没有陆路公路连接、居民出行依靠木栈道与船只的村落（公开地理资料 WebSearch 2026）",
};

const ELQUI_VALLEY: TerrainEntry = {
  id: "elqui-valley",
  nameZh: "埃尔基谷",
  nameEn: "Elqui Valley",
  category: "valley",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "维库尼亚", lon: -70.71, lat: -30.03, elevation: 670, kind: "oasis" },
  bbox: [-71.25, -30.35, -70.20, -29.65],
  axis: [[-70.20, -29.90], [-71.25, -29.95]],
  label: { lon: -70.7, lat: -29.95, rotation: 0 },
  source: "埃尔基谷：智利北部一条由埃尔基河灌溉的狭长绿洲谷地，谷底葡萄园与皮斯科白兰地酒庄层叠分布，两侧是干燥的安第斯山麓；因海拔适中、空气洁净、几乎全年无云，谷地上游建有托洛洛山美洲天文台等多座国际天文台，是全球公认的观星胜地（公开地理资料 WebSearch 2026）",
};

const CAJON_DEL_MAIPO: TerrainEntry = {
  id: "cajon-del-maipo",
  nameZh: "迈波峡谷",
  nameEn: "Cajón del Maipo",
  category: "gorge",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "圣何塞德迈波", lon: -70.35, lat: -33.65, elevation: 950, kind: "gorge" },
  bbox: [-70.45, -33.85, -69.90, -33.55],
  label: { lon: -70.2, lat: -33.72, rotation: 20 },
  source: "迈波峡谷：迈波河切穿安第斯山西麓形成的深切峡谷，距圣地亚哥市区约一小时车程，是圣地亚哥居民最常去的近郊安第斯山地貌样本；峡谷内可见温泉、冰川湖与迈波火山，也是首都用水的重要水源地（公开地理资料 WebSearch 2026）",
};

const CHILEAN_FJORDS: TerrainEntry = {
  id: "chilean-fjords",
  nameZh: "智利峡湾",
  nameEn: "Chilean Fjords",
  category: "coast",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "最后希望湾", lon: -72.50, lat: -51.73, elevation: 0, kind: "escarpment" },
  bbox: [-75.0, -54.0, -71.5, -45.0],
  viewScale: 1.8,
  label: { lon: -73.5, lat: -49.5, rotation: 0 },
  source: "智利峡湾：智利南部艾森至麦哲伦大区海岸线被更新世冰川深度侵蚀后、海水倒灌形成的峡湾与水道群，海岸线曲折漫长、岛屿星罗棋布，是世界上最复杂的峡湾海岸之一；水道两侧陡峭的山壁直插海面，沿途常见冰川直接崩入海中，也是南美海狮、麦哲伦企鹅等海洋生物的栖息地（公开地理资料 WebSearch 2026）",
};

const STRAIT_OF_MAGELLAN: TerrainEntry = {
  id: "strait-of-magellan",
  nameZh: "麦哲伦海峡",
  nameEn: "Strait of Magellan",
  category: "coast",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "第一海峡", lon: -70.85, lat: -52.75, elevation: 0, kind: "corridor" },
  bbox: [-74.8, -53.2, -68.5, -52.2],
  axis: [[-74.8, -52.6], [-68.6, -52.4]],
  viewScale: 1.4,
  label: { lon: -71.0, lat: -52.9, rotation: 0 },
  source: "麦哲伦海峡：连接大西洋与太平洋的天然海峡，全长约570公里，位于南美大陆与火地岛之间，因葡萄牙航海家麦哲伦1520年经此完成人类首次环球航行的关键航段而得名；海峡两岸风力强劲、地貌以次南极草原与稀疏南山毛榉林为主，蓬塔阿雷纳斯是海峡北岸的主要城市（公开地理资料 WebSearch 2026）",
};

const LA_PORTADA_COAST: TerrainEntry = {
  id: "la-portada-coast",
  nameZh: "拉波塔达海蚀拱",
  nameEn: "La Portada Natural Monument",
  category: "coast",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "拉波塔达海蚀拱", lon: -70.428, lat: -23.469, elevation: 0, kind: "escarpment" },
  bbox: [-70.50, -23.55, -70.35, -23.40],
  label: { lon: -70.43, lat: -23.47, rotation: 0 },
  source: "拉波塔达海蚀拱：安托法加斯塔附近一处高约43米的海蚀岩柱，由海浪长期侵蚀第三纪沉积岩层形成天然拱门，是阿塔卡马沙漠直抵太平洋这一「沙漠—海岸」地貌交界的代表性景观，也是当地海鸟与海狮的栖息地（公开地理资料 WebSearch 2026）",
};

const CHILOE_ARCHIPELAGO: TerrainEntry = {
  id: "chiloe-archipelago",
  nameZh: "奇洛埃群岛",
  nameEn: "Chiloé Archipelago",
  category: "island",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "卡斯特罗", lon: -73.76, lat: -42.48, elevation: 15, kind: "island" },
  bbox: [-74.30, -43.40, -73.00, -41.80],
  label: { lon: -73.8, lat: -42.6, rotation: 0 },
  source: "奇洛埃群岛：智利第二大岛及周边岛群，主岛奇洛埃岛面积约8400平方公里，气候常年多雨湿润，独特的高脚木构教堂群（16座列入UNESCO世界遗产）与神话传说是当地文化标志；岛上还保留大片温带雨林与传统的高跷屋渔村景观（UNESCO/公开地理资料 WebSearch 2026）",
};

const EASTER_ISLAND: TerrainEntry = {
  id: "easter-island",
  nameZh: "复活节岛（拉帕努伊岛）",
  nameEn: "Easter Island (Rapa Nui)",
  category: "island",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "拉诺拉拉库火山", lon: -109.2917, lat: -27.1219, elevation: 160, kind: "peak" },
  bbox: [-109.465, -27.205, -109.225, -27.030],
  label: { lon: -109.35, lat: -27.12, rotation: 0 },
  source: "复活节岛：南太平洋一座三座火山拼合而成的三角形火山岛，距智利大陆约3700公里，是世界上最孤立的有人居住岛屿之一；玻里尼西亚人约公元1200—1250年间抵达并定居，建造了近900尊摩艾石像，拉诺拉拉库火山是绝大多数摩艾的采石场；1888年并入智利，1995年整岛列入UNESCO世界遗产（UNESCO/公开地理资料 WebSearch 2026）",
};

const JUAN_FERNANDEZ_ARCHIPELAGO: TerrainEntry = {
  id: "juan-fernandez-archipelago",
  nameZh: "胡安费尔南德斯群岛",
  nameEn: "Juan Fernández Archipelago",
  category: "island",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "埃永克峰", lon: -78.83, lat: -33.65, elevation: 915, kind: "peak" },
  bbox: [-78.95, -33.72, -78.72, -33.58],
  label: { lon: -78.83, lat: -33.65, rotation: 0 },
  source: "胡安费尔南德斯群岛：距智利大陆约670公里的火山岛群，主岛现名“鲁滨逊漂流记岛”，因18世纪苏格兰水手亚历山大·塞尔柯克在此孤岛求生四年多的经历、启发丹尼尔·笛福写出小说《鲁滨逊漂流记》而得名；岛上特有植物物种比例极高，1977年列入UNESCO人与生物圈保护区（UNESCO/公开地理资料 WebSearch 2026）",
};

const TIERRA_DEL_FUEGO_CHILE: TerrainEntry = {
  id: "tierra-del-fuego-chile",
  nameZh: "火地岛（智利段）",
  nameEn: "Tierra del Fuego (Chilean portion)",
  category: "island",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "波韦尼尔", lon: -70.37, lat: -53.30, elevation: 20, kind: "city" },
  bbox: [-71.00, -55.00, -68.60, -52.60],
  label: { lon: -70.0, lat: -53.9, rotation: 0 },
  source: "火地岛：南美大陆最南端的群岛主岛，由智利与阿根廷分治（中性地理表述，不涉边界主权），智利一侧约占西部三分之二，以次南极草原、南山毛榉林与卡鲁基卡自然公园的原始森林为主；岛上曾是雅甘人、塞尔克南人等原住民世代生活的家园，波韦尼尔是智利一侧最大的定居点（公开地理资料 WebSearch 2026）",
};

const PATAGONIAN_STEPPE_CHILE: TerrainEntry = {
  id: "patagonian-steppe-chile",
  nameZh: "智利巴塔哥尼亚草原",
  nameEn: "Chilean Patagonian Steppe",
  category: "grassland",
  regionId: "south-america",
  country: "chile",
  landmark: { name: "帕利艾克火山口", lon: -69.75, lat: -52.15, elevation: 100, kind: "grassland" },
  bbox: [-70.20, -52.50, -69.20, -51.50],
  label: { lon: -69.7, lat: -52.0, rotation: 0 },
  source: "智利巴塔哥尼亚草原：麦哲伦大区东部一片开阔干燥的草原，因地处安第斯山雨影区、降水稀少，植被以低矮禾草与灌丛为主，是绵羊牧场的传统分布区；帕利艾克国家公园内保留着数十个火山渣锥与熔岩流地貌，附近的米洛敦洞穴曾出土已灭绝的美洲地懒化石（CONAF/公开地理资料 WebSearch 2026）",
};

// ============================================================
// 注册表
// ============================================================

export const TERRAINS: TerrainEntry[] = [
  // ===== 南美洲 / 智利 =====
  ANDES_CHILE, CORDILLERA_DE_LA_COSTA, VILLARRICA_VOLCANO, OSORNO_VOLCANO,
  LLAIMA_VOLCANO, PAINE_MASSIF,
  ALTIPLANO_CHILE, CAMPO_DE_HIELO_SUR,
  SALAR_DE_ATACAMA, EL_TATIO_GEYSERS,
  CENTRAL_VALLEY_CHILE,
  ATACAMA_DESERT, VALLE_DE_LA_LUNA,
  LAKE_LLANQUIHUE, LAKE_VILLARRICA, LAKE_GENERAL_CARRERA,
  RIO_LOA, RIO_BAKER,
  ELQUI_VALLEY,
  CAJON_DEL_MAIPO,
  CHILEAN_FJORDS, STRAIT_OF_MAGELLAN, LA_PORTADA_COAST,
  CHILOE_ARCHIPELAGO, EASTER_ISLAND, JUAN_FERNANDEZ_ARCHIPELAGO, TIERRA_DEL_FUEGO_CHILE,
  PATAGONIAN_STEPPE_CHILE,
];
