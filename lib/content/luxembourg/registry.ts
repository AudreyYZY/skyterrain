import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 卢森堡
// 国土面积仅约2586平方公里，地貌类型有限；经用户确认，本国地形集合数量
// 低于项目其它国家通常≥25的标准（本国12条），但选取与核实标准不降低。
// ============================================================

const OESLING_PLATEAU: TerrainEntry = {
  id: "oesling-plateau",
  nameZh: "埃斯灵高原",
  nameEn: "Oesling (Éislek)",
  category: "hills",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "克奈夫峰", lon: 6.0269, lat: 50.1806, elevation: 560, kind: "peak" },
  bbox: [5.85, 49.95, 6.35, 50.20],
  viewScale: 1.3,
  label: { lon: 6.05, lat: 50.08, rotation: 0 },
  source: "埃斯灵高原：卢森堡北部约三分之一国土，是阿登山地向东延伸的一部分，与比利时、德国相邻区域同属一片古老高原，克奈夫峰海拔560米，是卢森堡全境最高点，1997年经重新测量确认（卢森堡地籍与地形局 ACT）",
};

const MINETT_RED_LANDS: TerrainEntry = {
  id: "minett-red-lands",
  nameZh: "米内特红土地",
  nameEn: "Minett (Red Lands)",
  category: "hills",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "埃施阿尔泽特", lon: 5.9806, lat: 49.4958, elevation: 300, kind: "city" },
  bbox: [5.85, 49.45, 6.15, 49.60],
  label: { lon: 6.00, lat: 49.52, rotation: 0 },
  source: "米内特红土地：卢森堡最南端因侏罗纪鲕状铁矿层出露而得名的丘陵地带，19世纪起成为卢森堡钢铁工业的发源地，2020年该区域列入联合国教科文组织米内特生物圈保护区，为卢森堡首个也是唯一一个（法国邻近地区正另行申请，比利时未参与；核实 2026-09-11）（UNESCO）",
};

const OUR_VALLEY: TerrainEntry = {
  id: "our-valley",
  nameZh: "奥尔河谷",
  nameEn: "Our Valley",
  category: "valley",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "维安登城堡", lon: 6.2050, lat: 49.9350, elevation: 200, kind: "city" },
  bbox: [6.05, 49.85, 6.35, 50.15],
  axis: [[6.15, 50.12], [6.28, 49.88]],
  viewScale: 1.2,
  label: { lon: 6.20, lat: 50.00, rotation: -70 },
  source: "奥尔河谷：奥尔河切穿埃斯灵高原形成的深切河谷，构成卢森堡与德国的界河，维安登城堡矗立在河谷一侧的悬崖之上，是卢森堡最具代表性的河谷城堡景观（卢森堡地籍与地形局）",
};

const CLERVE_VALLEY: TerrainEntry = {
  id: "clerve-valley",
  nameZh: "克莱尔沃河谷",
  nameEn: "Clerve Valley",
  category: "valley",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "克莱尔沃城堡", lon: 6.0328, lat: 50.0553, elevation: 340, kind: "city" },
  bbox: [5.95, 49.98, 6.15, 50.15],
  label: { lon: 6.03, lat: 50.06, rotation: 0 },
  source: "克莱尔沃河谷：克莱尔沃河（奥尔河支流）切穿埃斯灵高原形成的狭窄河谷，克莱尔沃镇沿河谷两岸而建，中世纪城堡俯瞰整个谷地，是埃斯灵高原地区典型的河谷聚落景观（卢森堡地籍与地形局）",
};

const EISCH_VALLEY: TerrainEntry = {
  id: "eisch-valley",
  nameZh: "艾施河谷（七堡谷）",
  nameEn: "Eisch Valley (Valley of the Seven Castles)",
  category: "valley",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "安森堡城堡", lon: 6.0219, lat: 49.7139, elevation: 240, kind: "city" },
  bbox: [5.90, 49.65, 6.15, 49.80],
  axis: [[6.05, 49.78], [5.93, 49.68]],
  label: { lon: 6.00, lat: 49.73, rotation: -50 },
  source: "艾施河谷：卢森堡中西部艾施河沿岸一条河谷，因谷内分布七座中世纪城堡而俗称“七堡谷”，谷地大部分区域是卢森堡境内面积最大的自然保护区之一（卢森堡环境局）",
};

const MOSELLE_VALLEY_LU: TerrainEntry = {
  id: "moselle-valley-lu",
  nameZh: "摩泽尔河谷（卢森堡段）",
  nameEn: "Moselle Valley (Luxembourg)",
  category: "valley",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "雷米希", lon: 6.3667, lat: 49.5433, elevation: 155, kind: "city" },
  bbox: [6.25, 49.45, 6.40, 49.75],
  axis: [[6.28, 49.73], [6.38, 49.47]],
  viewScale: 1.2,
  label: { lon: 6.33, lat: 49.60, rotation: -75 },
  source: "摩泽尔河谷卢森堡段：摩泽尔河构成卢森堡与德国的界河，沿岸缓坡是卢森堡唯一的葡萄酒产区，气候相对温和，是卢森堡境内地势最低、气候最温和的区域（卢森堡地籍与地形局）",
};

const UPPER_SURE_LAKE: TerrainEntry = {
  id: "upper-sure-lake",
  nameZh: "上苏尔湖",
  nameEn: "Upper Sûre Lake",
  category: "lake",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "埃施叙尔苏尔", lon: 5.9167, lat: 49.9167, elevation: 320, kind: "lake" },
  bbox: [5.75, 49.83, 5.98, 49.97],
  label: { lon: 5.87, lat: 49.90, rotation: 0 },
  source: "上苏尔湖：1950年代末拦截苏尔河修建大坝形成的人工水库（大坝1956年动工、1957年建成、1959年首次蓄满），面积约3.8平方公里，供应卢森堡约70%人口的饮用水（核实 2026-09-11），湖区周边设有上苏尔自然公园，埃施叙尔苏尔古堡俯瞰湖畔（卢森堡水务局 / 上苏尔自然公园）",
};

const SURE_RIVER: TerrainEntry = {
  id: "sure-river",
  nameZh: "苏尔河",
  nameEn: "Sûre",
  category: "river",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "迪基希", lon: 6.1594, lat: 49.8683, elevation: 200, kind: "city" },
  bbox: [5.75, 49.75, 6.55, 49.97],
  axis: [[5.78, 49.85], [6.50, 49.72]],
  viewScale: 1.4,
  label: { lon: 6.10, lat: 49.90, rotation: -15 },
  source: "苏尔河：发源于比利时、流经卢森堡北部与中部的河流，全长约206公里（其中约136公里在卢森堡境内），最终在瓦瑟比利希附近注入摩泽尔河，是卢森堡境内最长的河流（卢森堡水务局）",
};

const ALZETTE_RIVER: TerrainEntry = {
  id: "alzette-river",
  nameZh: "阿尔泽特河",
  nameEn: "Alzette",
  category: "river",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "埃施阿尔泽特", lon: 5.9806, lat: 49.4958, elevation: 300, kind: "city" },
  bbox: [5.85, 49.45, 6.15, 49.80],
  axis: [[5.87, 49.53], [6.10, 49.75]],
  viewScale: 1.2,
  label: { lon: 6.00, lat: 49.65, rotation: -70 },
  source: "阿尔泽特河：发源于法国境内，向北流经卢森堡首都卢森堡市与南部米内特工业区，在埃特尔布吕克汇入苏尔河（梅尔施是它与马梅尔河、艾施河的汇流处），是贯穿卢森堡人口最密集区域的主要河流（卢森堡地籍与地形局）",
};

const MULLERTHAL_BERDORF: TerrainEntry = {
  id: "mullerthal-berdorf",
  nameZh: "米勒达尔·贝多夫砂岩区（“小瑞士”）",
  nameEn: "Mullerthal / Berdorf (\"Little Switzerland\")",
  category: "gorge",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "贝多夫砂岩地貌区", lon: 6.3536, lat: 49.8161, elevation: 380, kind: "gorge" },
  bbox: [6.28, 49.77, 6.42, 49.87],
  label: { lon: 6.35, lat: 49.82, rotation: 0 },
  source: "米勒达尔地区因侵蚀强烈的砂岩地貌被称为卢森堡“小瑞士”，贝多夫周边密布蜂窝状砂岩石柱与狭窄岩缝，“狼峡”等地名记录了当地民间传说，是卢森堡长距离徒步路线米勒达尔小径沿线最具代表性的地貌（卢森堡旅游局 / 米勒达尔地区旅游局）",
};

const SCHIESSENTUMPEL: TerrainEntry = {
  id: "schiessentumpel",
  nameZh: "希森滕佩尔瀑布",
  nameEn: "Schiessentümpel",
  category: "gorge",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "希森滕佩尔瀑布", lon: 6.3167, lat: 49.8206, elevation: 300, kind: "gorge" },
  bbox: [6.28, 49.79, 6.36, 49.85],
  label: { lon: 6.32, lat: 49.82, rotation: 0 },
  source: "希森滕佩尔瀑布：米勒达尔地区一处小型三级跌水瀑布，瀑布前一座建于1879年的砂岩拱桥已成为米勒达尔“小瑞士”地区的标志性景观（米勒达尔地区旅游局）",
};

const LUXEMBOURG_PLATEAU: TerrainEntry = {
  id: "luxembourg-plateau",
  nameZh: "卢森堡砂岩台地",
  nameEn: "Luxembourg Plateau",
  category: "plateau",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "博克岩石与佩特吕斯地堡", lon: 6.1347, lat: 49.6117, elevation: 300, kind: "escarpment" },
  bbox: [6.08, 49.58, 6.19, 49.65],
  label: { lon: 6.13, lat: 49.61, rotation: 0 },
  source: "卢森堡砂岩台地：古特兰地区中南部一片砂岩台地，首都卢森堡市即建于此，阿尔泽特河与佩特吕斯河深切台地形成的峡谷环绕老城，17世纪起在博克岩石中凿建的地堡工事使古城获得“北方直布罗陀”之称，1994年老城与要塞列入联合国教科文组织世界遗产名录（UNESCO）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 卢森堡 =====
  OESLING_PLATEAU, MINETT_RED_LANDS,
  OUR_VALLEY, CLERVE_VALLEY, EISCH_VALLEY, MOSELLE_VALLEY_LU,
  UPPER_SURE_LAKE,
  SURE_RIVER, ALZETTE_RIVER,
  MULLERTHAL_BERDORF, SCHIESSENTUMPEL,
  LUXEMBOURG_PLATEAU,
];
