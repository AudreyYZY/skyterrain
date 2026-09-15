import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 匈牙利
// 东欧次区域第三个国家（波兰、捷克之后）。匈牙利是喀尔巴阡盆地的中心，
// 全境七成以上是海拔 200 米以下的平原，山地只沿北缘与西南零星分布 ——
// 这份地形集的主线因此不是"高度"，而是"一个内陆沉降盆地怎么被河流填平、
// 又被火山与石灰岩在边缘打断"。
// 跨境地形（克塞格山、泽姆普伦山北端、费尔特湖）一律按"匈牙利与奥地利/
// 斯洛伐克交界"中性表述，不涉主权、不描述边界线；`history` 段只写地质史与
// 广泛记载的前现代史及 UNESCO 认定，二十世纪的政治/领土议题一律不碰。
// 火山锥与火山山地→`mountain_system`、石灰岩山地→`mountain_system`、
// 喀斯特台地→`plateau`、沉积大平原→`plain`、草原（puszta）→`grassland`、
// 湖→`lake`、河→`river`、峡谷式河段→`gorge`、玄武岩残丘→`inselberg`。
// ============================================================

const MATRA: TerrainEntry = {
  id: "matra",
  nameZh: "马特劳山",
  nameEn: "Mátra",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "凯凯什峰", lon: 20.0136, lat: 47.8778, elevation: 1014, kind: "peak" },
  bbox: [19.70, 47.76, 20.30, 48.00],
  axis: [[19.75, 47.86], [20.25, 47.86]],
  viewScale: 1.2,
  label: { lon: 20.01, lat: 48.02, rotation: 0 },
  source: "马特劳山：匈牙利北部中山地带的火山山地，主峰凯凯什峰（Kékes）海拔 1014 米，是匈牙利全境最高点；山体由中新世安山岩与流纹岩质火山碎屑岩组成（匈牙利国家公园管理局与匈牙利地质与地球物理研究所口径，WebSearch 2026-09）",
};

const BUKK: TerrainEntry = {
  id: "bukk",
  nameZh: "比克山",
  nameEn: "Bükk Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "比克高原", lon: 20.4472, lat: 48.0836, elevation: 959, kind: "peak" },
  bbox: [20.20, 47.90, 20.80, 48.20],
  axis: [[20.25, 48.02], [20.75, 48.02]],
  viewScale: 1.2,
  label: { lon: 20.45, lat: 48.22, rotation: 0 },
  source: "比克山：匈牙利北部以三叠纪石灰岩为主的山地，最高点为双峰山南峰（现称 Szilvási-kő）约 960.7 米（2014-01 GPS 精测，精度 0.05 m），此前长期被当作主峰的伊什塔洛什科峰（Istállós-kő）959 米现为第三高——**两说并存，正文并列写明**；山顶是一片抬升的石灰岩高原面（Bükk-fennsík），发育竖井、落水洞与洞穴，1977 年设为比克国家公园（匈牙利国家公园管理局口径，WebSearch 2026-09）",
};

const BORZSONY: TerrainEntry = {
  id: "borzsony",
  nameZh: "伯尔容山",
  nameEn: "Börzsöny",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "乔万约什峰", lon: 18.9167, lat: 47.9333, elevation: 938, kind: "peak" },
  bbox: [18.70, 47.80, 19.15, 48.05],
  axis: [[18.78, 47.92], [19.10, 47.92]],
  viewScale: 1.15,
  label: { lon: 18.92, lat: 48.07, rotation: 0 },
  source: "伯尔容山：多瑙河湾北岸的中新世安山岩火山山地，主峰乔万约什峰（Csóványos）海拔 938 米；山体是一座被侵蚀削平的层状火山，与河对岸的维谢格拉德山同属一个火山系统（多瑙河—伊波伊河谷国家公园口径，WebSearch 2026-09）",
};

const PILIS: TerrainEntry = {
  id: "pilis",
  nameZh: "皮利什山",
  nameEn: "Pilis",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "皮利什峰", lon: 18.8992, lat: 47.6906, elevation: 756, kind: "peak" },
  bbox: [18.75, 47.60, 19.05, 47.78],
  axis: [[18.78, 47.68], [19.02, 47.70]],
  viewScale: 1.1,
  label: { lon: 18.90, lat: 47.80, rotation: 0 },
  source: "皮利什山：多瑙河湾南岸的三叠纪白云岩与石灰岩山地，主峰皮利什峰（Pilis-tető）海拔 756 米；与北侧的维谢格拉德火山山地隔谷相望，两者岩性完全不同，是匈牙利中山地带「石灰岩与火山并列」的典型断面（多瑙河—伊波伊河谷国家公园口径，WebSearch 2026-09）",
};

const BAKONY: TerrainEntry = {
  id: "bakony",
  nameZh: "巴科尼山",
  nameEn: "Bakony",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "克里什山", lon: 17.7217, lat: 47.2533, elevation: 709, kind: "peak" },
  bbox: [17.20, 46.95, 18.35, 47.45],
  axis: [[17.30, 47.05], [18.25, 47.35]],
  viewScale: 1.3,
  label: { lon: 17.72, lat: 47.47, rotation: 0 },
  source: "巴科尼山：横斜在巴拉顿湖西北的中生代石灰岩与白云岩山地，主峰克里什山（Kőris-hegy）海拔 709 米，是外多瑙山系（Dunántúli-középhegység）中面积最大的一段；东南缘的巴拉顿高地上散布着上新世玄武岩残丘（匈牙利国家公园管理局与巴拉顿高地国家公园口径，WebSearch 2026-09）",
};

const MECSEK: TerrainEntry = {
  id: "mecsek",
  nameZh: "迈切克山",
  nameEn: "Mecsek",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "曾格峰", lon: 18.4342, lat: 46.0864, elevation: 682, kind: "peak" },
  bbox: [18.05, 46.00, 18.65, 46.25],
  axis: [[18.10, 46.10], [18.60, 46.12]],
  viewScale: 1.15,
  label: { lon: 18.43, lat: 46.27, rotation: 0 },
  source: "迈切克山：匈牙利西南部从大平原边缘拔起的孤立山地，主峰曾格峰（Zengő）海拔 682 米；山体以中生代石灰岩与二叠纪—三叠纪砂岩为主，因位置偏南、被平原环绕而气候明显偏暖，是匈牙利地中海型植物分布最北的一片山地（杜纳—德拉瓦国家公园口径，WebSearch 2026-09）",
};

const ZEMPLEN: TerrainEntry = {
  id: "zemplen",
  nameZh: "泽姆普伦山",
  nameEn: "Zemplén Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "纳吉米利奇峰", lon: 21.4383, lat: 48.5567, elevation: 894, kind: "peak" },
  bbox: [21.10, 48.20, 21.75, 48.60],
  axis: [[21.20, 48.28], [21.60, 48.55]],
  viewScale: 1.25,
  label: { lon: 21.44, lat: 48.62, rotation: 0 },
  source: "泽姆普伦山：匈牙利东北角的中新世火山山地，主体由流纹岩、安山岩与凝灰岩组成；最高点纳吉米利奇峰（Nagy-Milic）海拔 894 米，位于匈牙利与斯洛伐克交界一带。山南麓的托卡伊一带火山凝灰岩风化成的土壤与地下酒窖，是该产区葡萄种植的自然基础（匈牙利国家公园管理局与 UNESCO 口径，WebSearch 2026-09）",
};

const ALFOLD: TerrainEntry = {
  id: "alfold",
  nameZh: "匈牙利大平原",
  nameEn: "Great Hungarian Plain (Alföld)",
  category: "plain",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "德布勒森", lon: 21.6273, lat: 47.5316, elevation: 121, kind: "city" },
  bbox: [19.00, 45.75, 22.90, 48.10],
  axis: [[19.20, 46.10], [22.60, 47.90]],
  viewScale: 2.0,
  label: { lon: 20.90, lat: 46.90, rotation: 0 },
  source: "匈牙利大平原（Alföld）：喀尔巴阡盆地东南部的沉积平原，占匈牙利国土的一半以上，地面高度大体在海拔 80–150 米之间；由多瑙河、蒂萨河及其支流在第四纪持续充填而成（匈牙利中央统计局与匈牙利地质资料口径，WebSearch 2026-09）",
};

const KISALFOLD: TerrainEntry = {
  id: "kisalfold",
  nameZh: "匈牙利小平原",
  nameEn: "Little Hungarian Plain (Kisalföld)",
  category: "plain",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "杰尔", lon: 17.6350, lat: 47.6875, elevation: 108, kind: "city" },
  bbox: [16.60, 47.30, 18.20, 48.00],
  axis: [[16.80, 47.55], [18.05, 47.75]],
  viewScale: 1.4,
  label: { lon: 17.40, lat: 48.02, rotation: 0 },
  source: "匈牙利小平原（Kisalföld）：喀尔巴阡盆地西北端的沉积平原，比大平原小得多，由多瑙河与拉巴河等河流的冲积物充填；多瑙河在此分汊形成的河间岛地带（Szigetköz）是其标志性地貌（匈牙利地质资料与费尔特—汉沙格国家公园口径，WebSearch 2026-09）",
};

const HORTOBAGY: TerrainEntry = {
  id: "hortobagy",
  nameZh: "霍尔托巴吉草原",
  nameEn: "Hortobágy Puszta",
  category: "grassland",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "九孔桥", lon: 21.1497, lat: 47.5844, elevation: 90, kind: "grassland" },
  bbox: [20.75, 47.35, 21.65, 47.80],
  axis: [[20.85, 47.55], [21.55, 47.62]],
  viewScale: 1.4,
  label: { lon: 21.15, lat: 47.82, rotation: 0 },
  source: "霍尔托巴吉：匈牙利大平原东部的一片开阔草原（puszta），中欧面积最大的连片天然草地之一；1973 年设为匈牙利第一座国家公园，1999 年以文化景观类别列入 UNESCO 世界遗产（whc.unesco.org 与霍尔托巴吉国家公园官网，WebSearch 2026-09）",
};

const KISKUNSAG: TerrainEntry = {
  id: "kiskunsag",
  nameZh: "基什孔沙地",
  nameEn: "Kiskunság Sand Country",
  category: "grassland",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "布格茨沙丘", lon: 19.6089, lat: 46.6875, elevation: 111, kind: "dune" },
  bbox: [19.00, 46.30, 20.30, 47.15],
  axis: [[19.15, 46.45], [20.15, 47.05]],
  viewScale: 1.4,
  label: { lon: 19.60, lat: 47.17, rotation: 0 },
  source: "基什孔：多瑙河与蒂萨河之间的沙地区，地表为风成沙丘与丘间洼地，洼地里分布着季节性的碱水湖与碱土草原；1975 年设立基什孔国家公园（基什孔国家公园官网，WebSearch 2026-09）",
};

const DANUBE_BEND: TerrainEntry = {
  id: "danube-bend",
  nameZh: "多瑙河湾",
  nameEn: "Danube Bend",
  category: "gorge",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "维谢格拉德城堡山", lon: 18.9761, lat: 47.7936, elevation: 328, kind: "gorge" },
  bbox: [18.70, 47.70, 19.15, 47.90],
  axis: [[18.75, 47.82], [19.10, 47.78]],
  viewScale: 1.1,
  label: { lon: 18.95, lat: 47.92, rotation: 0 },
  source: "多瑙河湾：多瑙河在匈牙利北部自西向东流到伯尔容山与维谢格拉德—皮利什山地之间、急转向南的一段，两岸为火山岩与碳酸盐岩山地，河谷深切（多瑙河—伊波伊河谷国家公园口径，WebSearch 2026-09）",
};

const LAKE_BALATON: TerrainEntry = {
  id: "lake-balaton",
  nameZh: "巴拉顿湖",
  nameEn: "Lake Balaton",
  category: "lake",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "蒂豪尼半岛", lon: 17.8919, lat: 46.9128, elevation: 130, kind: "island" },
  bbox: [17.22, 46.66, 18.20, 47.10],
  axis: [[17.28, 46.72], [18.14, 47.05]],
  viewScale: 1.35,
  label: { lon: 17.70, lat: 47.12, rotation: 0 },
  source: "巴拉顿湖：中欧面积最大的湖泊，水面约 594 平方公里，东北—西南向长约 77 公里，平均水深仅约 3 米；湖盆为断陷成因，北岸紧邻巴科尼山与巴拉顿高地的玄武岩残丘（巴拉顿高地国家公园与匈牙利水文资料口径，WebSearch 2026-09）",
};

const TISZA_RIVER: TerrainEntry = {
  id: "tisza-river",
  nameZh: "蒂萨河",
  nameEn: "Tisza River",
  category: "river",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "塞格德", lon: 20.1414, lat: 46.2530, elevation: 79, kind: "city" },
  bbox: [19.90, 45.95, 22.35, 48.40],
  axis: [[22.20, 48.30], [20.10, 46.05]],
  viewScale: 1.8,
  label: { lon: 20.60, lat: 47.30, rotation: 0 },
  source: "蒂萨河：多瑙河最长的支流，自东北向西南斜贯匈牙利大平原；19 世纪起的大规模裁弯取直与筑堤工程把它原来的自由曲流河道大幅缩短，河道两侧至今保留着成串的牛轭湖（匈牙利水管理部门与公开地理资料口径，WebSearch 2026-09）",
};

const VISEGRAD_HILLS: TerrainEntry = {
  id: "visegrad-hills",
  nameZh: "维谢格拉德山",
  nameEn: "Visegrád Hills",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "多博戈山", lon: 18.8967, lat: 47.7186, elevation: 700, kind: "peak" },
  bbox: [18.78, 47.65, 19.10, 47.82],
  axis: [[18.82, 47.72], [19.05, 47.75]],
  viewScale: 1.1,
  label: { lon: 18.90, lat: 47.84, rotation: 0 },
  source: "维谢格拉德山：多瑙河湾南岸的中新世安山岩火山山地，与北岸的伯尔容山同属一个火山系统、被多瑙河切开；最高点多博戈山海拔约 700 米。它与西邻的皮利什山常被混称，但两者岩性与所属山系都不同（多瑙河—伊波伊河谷国家公园与匈牙利地理资料口径，WebSearch 2026-09）",
};

const VERTES: TerrainEntry = {
  id: "vertes",
  nameZh: "维尔特什山",
  nameEn: "Vértes",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "大恰卡尼山", lon: 18.3617, lat: 47.3739, elevation: 487, kind: "peak" },
  bbox: [18.15, 47.25, 18.60, 47.50],
  axis: [[18.20, 47.32], [18.55, 47.45]],
  viewScale: 1.1,
  label: { lon: 18.36, lat: 47.52, rotation: 0 },
  source: "维尔特什山：外多瑙山系中段的中生代石灰岩与白云岩断块山地，最高点大恰卡尼山（Nagy-Csákány）海拔 487 米；岩性以三叠纪白云岩为主、夹石灰岩；西侧以陡崖俯瞰莫尔沟（Móri-árok）断陷谷（匈牙利国家公园管理局与匈牙利地理资料口径，WebSearch 2026-09）",
};

const GERECSE: TerrainEntry = {
  id: "gerecse",
  nameZh: "盖雷切山",
  nameEn: "Gerecse",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "大盖雷切山", lon: 18.4808, lat: 47.6875, elevation: 634, kind: "peak" },
  bbox: [18.25, 47.58, 18.75, 47.80],
  axis: [[18.30, 47.65], [18.70, 47.72]],
  viewScale: 1.1,
  label: { lon: 18.48, lat: 47.82, rotation: 0 },
  source: "盖雷切山：外多瑙山系东段的中生代石灰岩山地，最高点大盖雷切山（Nagy-Gerecse）海拔 634 米；北缘直抵多瑙河，历史上以红色石灰岩（「盖雷切红」）采石著称（匈牙利地理资料口径，WebSearch 2026-09）",
};

const KOSZEG_MOUNTAINS: TerrainEntry = {
  id: "koszeg-mountains",
  nameZh: "克塞格山",
  nameEn: "Kőszeg Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "伊罗特科峰", lon: 16.4306, lat: 47.3500, elevation: 882, kind: "peak" },
  bbox: [16.30, 47.28, 16.65, 47.45],
  axis: [[16.33, 47.33], [16.60, 47.40]],
  viewScale: 1.05,
  label: { lon: 16.43, lat: 47.47, rotation: 0 },
  source: "克塞格山：匈牙利西部边缘的变质岩（片岩、千枚岩）低山，是阿尔卑斯东缘余脉伸入喀尔巴阡盆地的一段；最高点伊罗特科峰（Írott-kő）海拔 882 米，在匈牙利与奥地利交界一带，也是匈牙利外多瑙地区的最高点（匈牙利国家公园管理局与匈牙利地理资料口径，WebSearch 2026-09）",
};

const AGGTELEK_KARST: TerrainEntry = {
  id: "aggtelek-karst",
  nameZh: "阿格泰莱克喀斯特",
  nameEn: "Aggtelek Karst",
  category: "plateau",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "巴拉德拉洞入口", lon: 20.5133, lat: 48.4697, elevation: 340, kind: "gorge" },
  bbox: [20.30, 48.38, 20.80, 48.58],
  axis: [[20.35, 48.45], [20.72, 48.52]],
  viewScale: 1.1,
  label: { lon: 20.52, lat: 48.60, rotation: 0 },
  source: "阿格泰莱克喀斯特：匈牙利东北部的三叠纪石灰岩喀斯特台地，地表发育落水洞与干谷、地下发育大型洞穴系统，其中巴拉德拉洞是最著名的一处；1995 年与相邻的斯洛伐克喀斯特一并以「阿格泰莱克喀斯特与斯洛伐克喀斯特洞穴群」列入 UNESCO 世界自然遗产（whc.unesco.org 与阿格泰莱克国家公园官网，WebSearch 2026-09）",
};

const BALATON_WITNESS_HILLS: TerrainEntry = {
  id: "balaton-witness-hills",
  nameZh: "巴拉顿高地玄武岩证人山",
  nameEn: "Basalt Witness Hills of the Balaton Uplands",
  category: "inselberg",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "巴达乔尼山", lon: 17.5017, lat: 46.7969, elevation: 437, kind: "peak" },
  bbox: [17.25, 46.72, 17.75, 46.92],
  axis: [[17.30, 46.78], [17.70, 46.86]],
  viewScale: 1.05,
  label: { lon: 17.50, lat: 46.94, rotation: 0 },
  source: "巴拉顿高地玄武岩证人山：巴拉顿湖北岸一批孤立的平顶山与火山颈，成因是上新世玄武岩火山活动留下的熔岩盖与火山通道，周围较软的沉积岩被剥蚀后它们留存下来；巴达乔尼山（437 米）、圣乔治山、绍姆洛山是其中最醒目的几座（巴拉顿高地国家公园口径，WebSearch 2026-09）",
};

const TIHANY_PENINSULA: TerrainEntry = {
  id: "tihany-peninsula",
  nameZh: "蒂豪尼半岛",
  nameEn: "Tihany Peninsula",
  category: "inselberg",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "蒂豪尼内湖", lon: 17.8900, lat: 46.9147, elevation: 130, kind: "lake" },
  bbox: [17.84, 46.87, 17.95, 46.96],
  axis: [[17.86, 46.89], [17.93, 46.95]],
  viewScale: 1.0,
  label: { lon: 17.89, lat: 46.98, rotation: 0 },
  source: "蒂豪尼半岛：从巴拉顿湖北岸伸入湖中的火山半岛，由上新世凝灰岩与玄武岩构成，几乎把湖面掐成两段；半岛上的内湖是火山口积水而成，另有温泉活动留下的泉华丘（gejzírkúp）。1952 年设为匈牙利第一处景观保护区（巴拉顿高地国家公园口径，WebSearch 2026-09）",
};

const LAKE_FERTO: TerrainEntry = {
  id: "lake-ferto",
  nameZh: "费尔特湖",
  nameEn: "Lake Fertő",
  category: "lake",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "费尔特湖芦苇带", lon: 16.7500, lat: 47.6800, elevation: 115, kind: "lake" },
  bbox: [16.62, 47.62, 16.98, 47.88],
  axis: [[16.68, 47.66], [16.92, 47.84]],
  viewScale: 1.1,
  label: { lon: 16.75, lat: 47.90, rotation: 0 },
  source: "费尔特湖：欧亚草原带最西端的一处内陆碱性浅水湖，位于匈牙利与奥地利交界，湖面大部分在奥地利一侧；水深极浅、湖岸被大片芦苇带包围，水位随蒸发与降水大幅摆动，历史上曾多次几近干涸。2001 年以「费尔特／新锡德尔湖文化景观」列入 UNESCO 世界遗产（whc.unesco.org 与费尔特—汉沙格国家公园口径，WebSearch 2026-09）",
};

const LAKE_HEVIZ: TerrainEntry = {
  id: "lake-heviz",
  nameZh: "赫维兹温泉湖",
  nameEn: "Lake Hévíz",
  category: "lake",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "赫维兹湖", lon: 17.1900, lat: 46.7881, elevation: 117, kind: "lake" },
  bbox: [17.17, 46.78, 17.21, 46.80],
  axis: [[17.18, 46.785], [17.20, 46.793]],
  viewScale: 1.0,
  label: { lon: 17.19, lat: 46.805, rotation: 0 },
  source: "赫维兹温泉湖：巴拉顿湖西端附近的一处天然温泉湖，由湖底的岩溶泉持续涌出温水补给，水体整体温热、全年可浴，是世界上面积最大的可供沐浴的天然温泉湖之一；湖水更新很快，是理解岩溶泉出露与地下热水循环的现成案例（巴拉顿高地国家公园与匈牙利水文资料口径，WebSearch 2026-09）",
};

const LAKE_VELENCE: TerrainEntry = {
  id: "lake-velence",
  nameZh: "沃伦采湖",
  nameEn: "Lake Velence",
  category: "lake",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "沃伦采湖", lon: 18.6300, lat: 47.2100, elevation: 104, kind: "lake" },
  bbox: [18.52, 47.16, 18.72, 47.26],
  axis: [[18.55, 47.18], [18.70, 47.24]],
  viewScale: 1.05,
  label: { lon: 18.63, lat: 47.28, rotation: 0 },
  source: "沃伦采湖：布达佩斯西南的一处浅水湖，水深大多不足两米，西端有大片芦苇沼泽、是重要的水鸟栖息地；湖水含碱，夏季升温极快（多瑙河—伊波伊河谷国家公园与匈牙利水文资料口径，WebSearch 2026-09）",
};

const DANUBE_HUNGARY: TerrainEntry = {
  id: "danube-hungary",
  nameZh: "多瑙河匈牙利段",
  nameEn: "Danube in Hungary",
  category: "river",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "布达佩斯河段", lon: 19.0450, lat: 47.4979, elevation: 96, kind: "city" },
  bbox: [16.90, 45.75, 19.20, 48.00],
  axis: [[17.10, 47.85], [18.95, 45.90]],
  viewScale: 1.6,
  label: { lon: 18.60, lat: 46.60, rotation: 0 },
  source: "多瑙河匈牙利段：多瑙河自西北进入匈牙利，先横穿小平原，在多瑙河湾折向南，纵贯大平原后出境；匈牙利境内河段是全河中下游的一段，河道在平原上宽阔、多沙洲（匈牙利水管理部门与公开地理资料口径，WebSearch 2026-09）",
};

const SZIGETKOZ: TerrainEntry = {
  id: "szigetkoz",
  nameZh: "岛间地",
  nameEn: "Szigetköz",
  category: "river",
  regionId: "europe",
  country: "hungary",
  landmark: { name: "岛间地汊流区", lon: 17.3000, lat: 47.8500, elevation: 115, kind: "delta" },
  bbox: [17.05, 47.72, 17.90, 48.00],
  axis: [[17.10, 47.95], [17.85, 47.76]],
  viewScale: 1.2,
  label: { lon: 17.30, lat: 48.02, rotation: 0 },
  source: "岛间地（Szigetköz）：多瑙河进入小平原后坡度骤减、河道分汊，在主流与汊流之间围出的一片河间岛地带，地表是成网的汊流、牛轭湖与河漫滩森林；面积约 375 平方公里、长约 52 公里、宽 6–8 公里，是匈牙利境内最大的内陆河流岛区（东北多瑙水务局，1 级）（费尔特—汉沙格国家公园与匈牙利水管理部门口径，WebSearch 2026-09）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 匈牙利 =====
  MATRA, BUKK, BORZSONY, PILIS, BAKONY, MECSEK, ZEMPLEN,
  ALFOLD, KISALFOLD, HORTOBAGY, KISKUNSAG,
  DANUBE_BEND, LAKE_BALATON, TISZA_RIVER,
  VISEGRAD_HILLS, VERTES, GERECSE, KOSZEG_MOUNTAINS,
  AGGTELEK_KARST, BALATON_WITNESS_HILLS, TIHANY_PENINSULA,
  LAKE_FERTO, LAKE_HEVIZ, LAKE_VELENCE,
  DANUBE_HUNGARY, SZIGETKOZ,
];
