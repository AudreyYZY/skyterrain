import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 / 乌兹别克斯坦（中亚次区域；联合国 M49 归中亚）
// 零争议红线：东部山地的主脊大段就是国界 —— 国界线上的峰（全国最高点、别什托尔、沙乌卡尔套）不作锚点、不写位置关系；
// 费尔干纳盆地只写境内地貌，不写飞地、三国分属与城市列表；阿姆河界河段、铁尔梅兹一带不收；上游国家、水量分配、水库调度不写；
// 咸海只写水文事实，不写归责主体、水面国界、健康与政策叙事；卡拉卡尔帕克斯坦只作地名；族群、宗教词源与圣地、苏联时期政治叙事与旧峰名不写。
// 普斯克姆山（锚点距国界 8.5 km、最高点在界线上）、扎敏山（境内高点全部贴界）、泽拉夫尚山脉西段（无 1–2 级来源）本批不收。
// 骨架：国土约五分之四是平原（图兰平原、克孜勒库姆），东部与东北是天山西段（恰特卡尔 / 库拉马）与帕米尔—阿赖西段（吉萨尔 / 拜孙套 / 努拉套），
// 山间最大的是费尔干纳盆地；两条大河阿姆河与锡尔河在绿洲里被大量引灌，尾闾咸海持续缩小，湖底出露成阿拉尔库姆沙漠。
// 主要来源：政府门户 gov.uz（1 级，国土、平原比例、最高点 4,643 m、最大山间盆地）、国家法律数据库 lex.uz（1 级，保护地设立）、UNESCO（世界遗产 / 预备名录 / MAB）、
// 国际地层委员会（GSSP）；统计委员会年鉴取不到，河长、山脉长度等描述性数字多来自苏联大百科 BSE（2 级，1970 年代）与俄语维基（3 级）。
// 锚点坐标取 OSM / Wikidata；未查到实测海拔的为取景用概略值（注明）。
// ============================================================

const CHATKAL_RANGE: TerrainEntry = {
  id: "chatkal-range",
  nameZh: "恰特卡尔山脉",
  nameEn: "Chatkal Range",
  category: "mountain_system",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "巴什克孜尔赛（恰特卡尔保护区）", lon: 69.934, lat: 41.21, elevation: 1500, kind: "gorge" },
  bbox: [69.60, 41.00, 70.60, 41.75],
  axis: [[69.70, 41.05], [70.55, 41.70]],
  viewScale: 1.5,
  label: { lon: 70.100, lat: 41.800, rotation: 0 },
  source: "恰特卡尔山脉境内部分（Chotqol tizmasi）：政府门户 gov.uz「Geographical location」列为境内天山西段诸山之一（1 级）；恰特卡尔国家生物圈保护区的迈丹塔尔片区 24,706 ha 与巴什克孜尔赛片区 11,018 ha 作为「西天山」跨国系列遗产组成部分列入世界遗产（UNESCO whc 1490，1 级；列入年份通行说法 2016，写前确认）；乌加姆—恰特卡尔国家生物圈保留地 42,952.81 ha（2018 年内阁第 367 号决议，lex.uz，1 级）；山脉长约 200 km，由片岩、灰岩、花岗岩构成，北坡短而陡、南坡较缓，有核桃林、天山云杉、冷杉、圆柏林，上部为草甸（苏联大百科 BSE，2 级）；构成费尔干纳盆地北缘一段（俄语维基，3 级）。山脉最高点 4,503 m 不在境内，正文不写；锚点取 UNESCO 给出的巴什克孜尔赛片区坐标，海拔为取景用概略值；主脊国界不写（研究子代理事实表 2026-09-15）",
};

const GREATER_CHIMGAN: TerrainEntry = {
  id: "greater-chimgan",
  nameZh: "大钦甘山",
  nameEn: "Greater Chimgan",
  category: "mountain_system",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "大钦甘峰", lon: 70.05867, lat: 41.49519, elevation: 3309, kind: "peak" },
  bbox: [69.95, 41.43, 70.15, 41.56],
  label: { lon: 70.050, lat: 41.580, rotation: 0 },
  source: "大钦甘山（Katta Chimyon）：恰特卡尔山脉西南部的穹状山块，最高 3,309 m（OSM ele、Wikidata、俄语维基一致，3 级），在塔什干州博斯坦雷克区；山麓约 1,600 m 处有钦甘等滑雪场（俄语维基，3 级）；与恰尔瓦克水库相距约 16 km（按坐标算）。本条无 1–2 级来源，正文少写数字（研究子代理事实表 2026-09-15）",
};

const KURAMA_RANGE: TerrainEntry = {
  id: "kurama-range",
  nameZh: "库拉马山脉",
  nameEn: "Kurama Range",
  category: "mountain_system",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "卡姆奇克山口", lon: 70.51763, lat: 41.09969, elevation: 2268, kind: "pass" },
  bbox: [69.60, 40.65, 70.75, 41.20],
  axis: [[69.65, 40.70], [70.70, 41.15]],
  viewScale: 1.3,
  label: { lon: 70.100, lat: 41.250, rotation: 0 },
  source: "库拉马山脉（Qurama tizmasi）：政府门户列为境内天山西段诸山之一（gov.uz，1 级）；2026-03-25 总统第 ПП-109 号决议设立的国家自然公园以保护库拉马山与普斯克姆山天然林为目标之一（lex.uz，1 级）；长约 170 km、最高点博博约布峰 3,769 m，界定费尔干纳盆地西北缘，是阿汉加兰河与锡尔河流域的分水岭，由变质片岩、砂岩、花岗岩构成（BSE，2 级）；卡姆奇克山口是穿越库拉马山的公路山口、海拔 2,268 m，2016 年起山口下方有铁路隧道（俄语维基，3 级）。「最高在用山口」「唯一陆路通道」不写；国界不写（研究子代理事实表 2026-09-15）",
};

const HISSAR_RANGE: TerrainEntry = {
  id: "hissar-range",
  nameZh: "吉萨尔山脉",
  nameEn: "Hissar Range",
  category: "mountain_system",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "卡班奇克峰", lon: 67.55533, lat: 39.02139, elevation: 4350, kind: "peak" },
  bbox: [67.30, 38.50, 68.30, 39.20],
  viewScale: 1.5,
  label: { lon: 67.800, lat: 39.280, rotation: 0 },
  source: "吉萨尔山脉境内部分（Hisor tizmasi）：政府门户称全国最高点 4,643 m 在东部山地，并把吉萨尔山列为帕米尔—阿赖诸山之一（gov.uz，1 级；门户未点峰名，最高点在边界山脊上，正文不点名不写位置）；「吉萨尔山」2024 年列入 UNESCO 世界遗产预备名录：吉萨尔国家保护区在山脉西坡、海拔 1,750–4,349 m，1985 年由克孜勒苏与米拉基两保护区合并，保护卡什卡河上源与谢韦尔佐夫冰川，山体西南分出拜孙套扇状山系（whc tentativelists 6782，缔约国申报文本，1 级）；是泽拉夫尚河与阿姆河流域的分水岭，主要由结晶岩、片岩、砂岩构成并有花岗岩侵入（BSE，2 级）。旧峰名与邻国一侧地物不写；锚点卡班奇克峰海拔取 OSM（研究子代理事实表 2026-09-15）",
};

const BAYSUNTAU: TerrainEntry = {
  id: "baysuntau",
  nameZh: "拜孙套山",
  nameEn: "Baysuntau",
  category: "mountain_system",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "奇姆拜峰", lon: 67.33146, lat: 38.69224, elevation: 3798, kind: "peak" },
  bbox: [66.90, 38.10, 67.80, 38.95],
  axis: [[67.70, 38.90], [66.95, 38.15]],
  viewScale: 1.3,
  label: { lon: 67.200, lat: 39.000, rotation: 0 },
  source: "拜孙套山（Boysuntog'）：政府门户列为境内帕米尔—阿赖诸山之一（gov.uz，1 级）；UNESCO 预备名录 6782 称吉萨尔山在西南分为拜孙套扇状山系（1 级）；吉萨尔山的西南支脉，由灰岩、砂岩、黏土构成，下坡为半荒漠植被、上部为圆柏林与高山草甸，隔开卡什卡河盆地与苏尔汉河盆地（BSE，2 级）；喀斯特与洞穴发育（俄语维基，3 级）。最高点 4,424 / 4,425 / 3,251 m 多说且与 OSM 不符，正文不写最高点；锚点奇姆拜峰海拔取 OSM；古人类遗址与古代疆界不写（研究子代理事实表 2026-09-15）",
};

const NURATAU: TerrainEntry = {
  id: "nuratau",
  nameZh: "努拉套山",
  nameEn: "Nuratau Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "哈亚特巴希峰", lon: 66.72046, lat: 40.4951, elevation: 2169, kind: "peak" },
  bbox: [65.60, 40.20, 67.60, 40.75],
  axis: [[65.65, 40.35], [67.55, 40.60]],
  viewScale: 1.5,
  label: { lon: 66.600, lat: 40.850, rotation: 0 },
  source: "努拉套山（Nurota tog'lari）：「努拉塔山」2024 年列入 UNESCO 世界遗产预备名录，位于帕米尔—阿赖与天山山系向图兰荒漠平原的过渡带，努拉塔国家山地保护区 1975 年设立、面积 17,752 ha（whc tentativelists 6787，缔约国申报文本，1 级；动物数字有误不用）；帕米尔—阿赖最西端的支脉之一，从南面界定克孜勒库姆沙漠，长约 170 km、最高 2,169 m，山脊平坦、北坡陡峭多岩、南坡平缓被小河谷切割（BSE，2 级）；东端以「帖木儿之门」深谷与马尔古扎尔山分开（俄语维基，3 级）。峰名两说（扎尔加尔 / 哈亚特巴希）；岩性多说不写；朝圣地与族群不写（研究子代理事实表 2026-09-15）",
};

const FERGANA_VALLEY: TerrainEntry = {
  id: "fergana-valley",
  nameZh: "费尔干纳盆地",
  nameEn: "Fergana Valley",
  category: "basin",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "亚兹亚万白沙", lon: 71.7, lat: 40.64, elevation: 420, kind: "dune" },
  bbox: [70.60, 40.30, 72.90, 41.20],
  axis: [[70.65, 40.75], [72.85, 40.80]],
  viewScale: 1.9,
  label: { lon: 71.600, lat: 41.280, rotation: 0 },
  source: "费尔干纳盆地（Farg'ona vodiysi）境内部分：政府门户称境内最大的山间盆地是费尔干纳盆地，长 370 km、宽至 190 km，三面环山、只向西敞开（gov.uz，1 级；尺寸指整个盆地，与 BSE 的约 300 × 170 km 不一致，正文带「据政府门户」口径）；2026-03-25 总统第 ПП-109 号决议把亚兹亚万白沙与明布拉克白沙列为自然纪念地（lex.uz，1 级）；构造凹陷被周围山地剥蚀下来的松散物质填满，堆积底面自西向东由约 320 m 升到 500–1,000 m，边缘有冲积扇与黄土砾石丘陵带，沿盆地底部周边是连续的绿洲带、中部为盐土与流沙；锡尔河在盆地东部由纳伦河与卡拉河汇成（BSE，2 级）。飞地、三国分属、城市列表与区名一律不写；锚点为亚兹亚万镇西南沙地的概略点（研究子代理事实表 2026-09-15）",
};

const MIRZACHUL: TerrainEntry = {
  id: "mirzachul",
  nameZh: "米尔扎丘尔（饥饿草原）",
  nameEn: "Mirzachul (Hungry Steppe)",
  category: "plain",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "古利斯坦", lon: 68.77587, lat: 40.49598, elevation: 280, kind: "city" },
  bbox: [67.90, 40.05, 69.10, 40.85],
  viewScale: 1.4,
  label: { lon: 68.500, lat: 40.920, rotation: 0 },
  source: "米尔扎丘尔（Mirzacho'l，俄语意译「饥饿草原」）：锡尔河出费尔干纳盆地后左岸的平原，主要在锡尔河州，海拔约 230–385 m，坐落在由黄土状亚黏土与亚砂土构成的锡尔河阶地上，向锡尔河以陡坎跌落，北与西北融入克孜勒库姆沙漠，土壤盐渍化，开垦始于 19 世纪末（BSE，2 级）；「饥饿草原」泛指大片缺水、只局部适于游牧的土地（俄语维基，3 级）。本条无 1 级来源；与阿尔纳赛洼地的同名旧称区分；政治叙事与跨境不写（研究子代理事实表 2026-09-15）",
};

const BUKHARA_OASIS: TerrainEntry = {
  id: "bukhara-oasis",
  nameZh: "布哈拉绿洲",
  nameEn: "Bukhara Oasis",
  category: "plain",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "布哈拉", lon: 64.41515, lat: 39.77598, elevation: 225, kind: "oasis" },
  bbox: [63.70, 39.40, 64.90, 40.20],
  viewScale: 1.3,
  label: { lon: 64.300, lat: 40.280, rotation: 0 },
  source: "布哈拉绿洲（Buxoro vohasi，泽拉夫尚河尾闾的冲积平原）：泽拉夫尚河下游（称卡拉库尔河）分布着布哈拉绿洲与卡拉库尔绿洲，河水全部被引作灌溉、不再流到阿姆河（BSE「Зеравшан」，2 级）；泽拉夫尚河在两绿洲分为多股汊流、古代是阿姆河的支流（俄语维基，3 级）。本条无 1 级来源，面积不写；古城与宗教建筑属旅游模式（研究子代理事实表 2026-09-15）",
};

const KHOREZM_OASIS: TerrainEntry = {
  id: "khorezm-oasis",
  nameZh: "花剌子模绿洲",
  nameEn: "Khorezm Oasis",
  category: "plain",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "乌尔根奇", lon: 60.63128, lat: 41.55179, elevation: 100, kind: "oasis" },
  bbox: [60.00, 41.10, 61.60, 42.20],
  viewScale: 1.3,
  label: { lon: 60.800, lat: 42.300, rotation: 0 },
  source: "花剌子模绿洲（Xorazm vohasi，阿姆河下游冲积平原）：阿姆河自图亚穆云峡口起在古三角洲冲积物中流动、河谷展宽到数十公里，河道迁移快、在河漫滩内游荡（BSE「Амударья」，2 级）；绿洲北接昆格勒低地、南为卡拉库姆沙漠、西为乌斯秋尔特、东为克孜勒库姆（俄语维基，3 级）。本条无 1 级来源；政治地位表述、跨境延伸与古国史不写（研究子代理事实表 2026-09-15）",
};

const KARSHI_STEPPE: TerrainEntry = {
  id: "karshi-steppe",
  nameZh: "卡尔希草原",
  nameEn: "Karshi Steppe",
  category: "plain",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "卡尔希", lon: 65.7891, lat: 38.8606, elevation: 375, kind: "oasis" },
  bbox: [64.90, 38.50, 66.30, 39.40],
  viewScale: 1.3,
  label: { lon: 65.600, lat: 39.480, rotation: 0 },
  source: "卡尔希草原（Qarshi cho'li）：卡什卡河出山后的缓波状平原，自东向西由约 500 m 降到 200 m，从泽拉夫尚山、吉萨尔山的丘陵山麓降向桑杜克利沙地，部分由卡什卡河灌溉，年降水 200–400 mm（BSE，2 级）；卡什卡河以雪水补给、春季与初夏水大（BSE「Кашкадарьинская область」，2 级）。本条无 1 级来源；卡尔希市坐标为通行值；政治叙事不写（研究子代理事实表 2026-09-15）",
};

const KYZYLKUM_DESERT: TerrainEntry = {
  id: "kyzylkum-desert",
  nameZh: "克孜勒库姆沙漠",
  nameEn: "Kyzylkum Desert",
  category: "desert",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "克孜勒库姆腹地沙垄", lon: 63.0, lat: 42.0, elevation: 150, kind: "dune" },
  bbox: [61.00, 39.80, 67.00, 43.80],
  viewScale: 2.4,
  label: { lon: 63.600, lat: 43.900, rotation: 0 },
  source: "克孜勒库姆沙漠境内部分（Qizilqum，「红沙」）：政府门户称国土中北部是克孜勒库姆沙漠（gov.uz，1 级；同句「世界最大沙漠之一」不写）；阿姆河与锡尔河之间的沙质荒漠，整体向西北倾斜，海拔自东南约 300 m 降到西北约 53 m，有若干封闭洼地与孤立残山（布坎套、库尔朱克套、塔姆德套等），大部为半固定沙丘、以南北向沙垄最常见，全境无一条地表常流河但有丰富承压淡水，年降水 100–200 mm（BSE，2 级）。全沙漠面积与各国占比不写；矿产开发不写；锚点为腹地概略点（研究子代理事实表 2026-09-15）",
};

const ARALKUM_DESERT: TerrainEntry = {
  id: "aralkum-desert",
  nameZh: "阿拉尔库姆沙漠",
  nameEn: "Aralkum Desert",
  category: "desert",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "干涸湖底（旧咸海东部湖盆）", lon: 60.0, lat: 44.6, elevation: 30, kind: "salt-lake" },
  bbox: [58.60, 43.70, 61.20, 45.20],
  viewScale: 1.6,
  label: { lon: 59.900, lat: 45.300, rotation: 0 },
  source: "阿拉尔库姆沙漠（Orol cho'li）境内部分：咸海湖底出露后形成的新沙漠；南咸海分为东西两叶、2001 年南端连接断开、东叶此后迅速后退、2014 年完全消失（NASA Earth Observatory「World of Change: Shrinking Aral Sea」，2 级）；植被 1960 年代起在旧湖底发育（俄语维基，3 级）。面积多说只有 3 级不写；归责主体、盐尘危害、健康影响与政策宣示不写；与哈萨克斯坦 north-aral-sea、本国 south-aral-sea 分工（研究子代理事实表 2026-09-15）",
};

const USTYURT_PLATEAU_UZBEKISTAN: TerrainEntry = {
  id: "ustyurt-plateau-uzbekistan",
  nameZh: "乌斯秋尔特高原（东部）",
  nameEn: "Ustyurt Plateau (east)",
  category: "plateau",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "乌斯秋尔特东缘崖", lon: 58.34949, lat: 43.97152, elevation: 150, kind: "escarpment" },
  bbox: [55.95, 41.70, 58.80, 45.00],
  viewScale: 2.0,
  label: { lon: 57.300, lat: 45.080, rotation: 0 },
  source: "乌斯秋尔特高原乌兹别克斯坦境内部分：2020-11-11 内阁第 707 号决议在卡拉卡尔帕克斯坦昆格勒区设立「南乌斯秋尔特」国家自然公园，面积 1,447,143 ha（lex.uz，1 级）；「图兰冷冬荒漠」2023 年列入世界遗产，乌方组成部分之一「南乌斯秋尔特」1,447,143 ha（UNESCO whc 1693，1 级）；高原四周以陡崖（查因克）收边，高 150 m 以上，主要由新近纪灰岩、泥灰岩、黏土、砂岩构成，是桌状台地，其上有缓岗与大型封闭洼地，灰岩与石膏溶蚀形成喀斯特，年降水略多于 100 mm（BSE，2 级）；「查因克」高可达 300–350 m（BSE「Чинк」，2 级）。与哈萨克斯坦 ustyurt-plateau 是同一高原的两侧，互相点名；油气开发与边境设施不写；锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const SOUTH_ARAL_SEA: TerrainEntry = {
  id: "south-aral-sea",
  nameZh: "南咸海",
  nameEn: "South Aral Sea",
  category: "lake",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "南咸海西部湖盆", lon: 58.25, lat: 44.5, elevation: 28, kind: "salt-lake" },
  bbox: [57.90, 43.90, 59.20, 45.00],
  viewScale: 1.2,
  label: { lon: 58.500, lat: 45.100, rotation: 0 },
  source: "南咸海乌兹别克斯坦境内部分（Orol dengizi）：2000 年时北咸海已与南咸海分开、南咸海分为东西两叶，2001 年南端连接断开，东叶 2005–2009 年后退尤其明显，2014 年东叶完全消失（NASA Earth Observatory，2 级）；20 世纪中叶咸海面积约 6.8 万 km²、本世纪初水位比 50 年代末低约 22 m（俄语维基，3 级；正文不写）。2020 年代现状面积无来源，正文不写现状数字；归责主体、水面国界、湖底勘探不写；与哈萨克斯坦 north-aral-sea 互相点名；锚点为西部湖盆的概略点，湖面海拔为概略值，西部湖盆水面宽度年际变化大（研究子代理事实表 2026-09-15）",
};

const AYDAR_ARNASAY_LAKES: TerrainEntry = {
  id: "aydar-arnasay-lakes",
  nameZh: "艾达尔—阿尔纳赛湖系",
  nameEn: "Aydar–Arnasay Lakes",
  category: "lake",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "艾达尔湖", lon: 66.54695, lat: 40.96226, elevation: 245, kind: "lake" },
  bbox: [65.90, 40.55, 67.90, 41.15],
  axis: [[65.95, 40.95], [67.85, 40.70]],
  viewScale: 1.6,
  label: { lon: 66.800, lat: 41.220, rotation: 0 },
  source: "艾达尔—阿尔纳赛湖系（Aydar-Arnasoy ko'llar tizimi）：2008 年列入拉姆萨尔国际重要湿地名录（gov.uz 林业署 2026-02-02 新闻，1 级）；2022-02-22 总统第 ПП-141 号决议《关于完善艾达尔—阿尔纳赛湖系管理的措施》（lex.uz，1 级）；湖系包括艾达尔湖、图兹坎湖与东阿尔纳赛诸湖，位于克孜勒库姆最东端的盐土洼地，20 世纪中叶以前阿尔纳赛洼地一年大部分时间是干盐湖；1969 年锡尔河洪水被泄入洼地后形成湖泊（俄语维基，3 级）。面积多个口径与年份不写；上游水库名与所在国不写；锚点取 OSM「Aydar Ko'li」点（研究子代理事实表 2026-09-15）",
};

const AMU_DARYA: TerrainEntry = {
  id: "amu-darya",
  nameZh: "阿姆河（下游与三角洲）",
  nameEn: "Amu Darya (lower course and delta)",
  category: "river",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "阿姆河三角洲", lon: 59.5, lat: 43.0, elevation: 60, kind: "delta" },
  bbox: [58.80, 41.20, 61.60, 44.00],
  axis: [[61.50, 41.30], [59.00, 43.90]],
  viewScale: 1.6,
  label: { lon: 60.300, lat: 43.400, rotation: 0 },
  source: "阿姆河境内下游段（Amudaryo）：政府门户称国土位于阿姆河与锡尔河之间（gov.uz，1 级）；2011 年设立下阿姆河国家生物圈保留地，面积 68,717.8 ha（lex.uz，1 级），后纳入 UNESCO 人与生物圈网络，保存着天然图盖林（河岸林）（UNESCO MAB，1 级）；阿姆河由喷赤河与瓦赫什河汇成、注入咸海，只在最初约 180 km 接纳支流，其余河段水被引灌、蒸发、渗漏而减少，自图亚穆云峡口起在古三角洲冲积物中流动、自塔希阿塔什村起为现代三角洲，河道游荡，6–8 月流量最大（BSE，2 级）；距河口约 100 km 处分成多条汊流形成宽广三角洲，多汊流、小湖、图盖林与芦苇丛（BSE「Каракалпакская АССР」，2 级）。界河段不写不入 bbox；上游国家与水量分配不写；「中亚水量最大」不写（研究子代理事实表 2026-09-15）",
};

const SYR_DARYA: TerrainEntry = {
  id: "syr-darya",
  nameZh: "锡尔河（境内段）",
  nameEn: "Syr Darya",
  category: "river",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "纳伦河与卡拉河汇流处", lon: 71.75806, lat: 40.90056, elevation: 380, kind: "corridor" },
  bbox: [68.10, 40.20, 71.90, 41.30],
  axis: [[71.80, 40.90], [68.20, 40.60]],
  viewScale: 1.8,
  label: { lon: 70.000, lat: 41.380, rotation: 0 },
  source: "锡尔河乌兹别克斯坦境内段（Sirdaryo）：政府门户称国土位于阿姆河与锡尔河之间（gov.uz，1 级）；锡尔河由纳伦河与卡拉河在费尔干纳盆地东部汇成、注入咸海，在盆地内河漫滩宽 3–5 km，从盆地周边山地流下的支流几乎都在冲积扇上被引灌殆尽、到不了锡尔河，出盆地后转向西北，以雪水补给为主、春夏汛（BSE，2 级）。出入境、水库调度与下游国家不写；「中亚最长」不写；锚点为汇流点（Wikidata，研究子代理事实表 2026-09-15）",
};

const ZERAVSHAN_RIVER: TerrainEntry = {
  id: "zeravshan-river",
  nameZh: "泽拉夫尚河",
  nameEn: "Zeravshan River",
  category: "river",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "米扬卡尔河间岛", lon: 66.57, lat: 39.92, elevation: 500, kind: "island" },
  bbox: [63.70, 39.40, 67.40, 40.20],
  axis: [[67.35, 39.60], [63.80, 39.75]],
  viewScale: 1.9,
  label: { lon: 65.500, lat: 40.280, rotation: 0 },
  source: "泽拉夫尚河（Zarafshon，「撒金者」）：政府门户列出的山间盆地之一是「泽拉夫尚」盆地（gov.uz，1 级）；河长 877 km，发源于泽拉夫尚冰川，前段在窄深河谷中，进入平原后不再有大支流，在撒马尔罕附近分为北支阿克河与南支卡拉河、到下游重新汇合、两支之间是米扬卡尔，下游称卡拉库尔河、流经布哈拉绿洲与卡拉库尔绿洲、到不了阿姆河，7 月流量最大，河水全部被引灌（BSE，2 级）；米扬卡尔岛长约 100 km、平均宽约 15 km（俄语维基，3 级）；图达库尔与库尤马扎尔水库 2020 年列入拉姆萨尔名录（gov.uz 林业署，1 级）。发源国与出入境不写；古代征服史不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const CHARVAK_RESERVOIR: TerrainEntry = {
  id: "charvak-reservoir",
  nameZh: "恰尔瓦克水库",
  nameEn: "Charvak Reservoir",
  category: "lake",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "恰尔瓦克水库", lon: 70.04855, lat: 41.63471, elevation: 860, kind: "lake" },
  bbox: [69.93, 41.58, 70.16, 41.73],
  label: { lon: 70.050, lat: 41.760, rotation: 0 },
  source: "恰尔瓦克水库（Chorvoq suv ombori）：位于塔什干州博斯坦雷克区，在普斯克姆河与恰特卡尔河汇合处稍下游的奇尔奇克河上，由高 168 m 的堆石坝形成，库容约 2 km³，平均深约 36 m，水面海拔约 860 m，夏季因灌溉放水水位明显下降（俄语维基，3 级）；奇尔奇克河由恰特卡尔河与普斯克姆河汇成（BSE，2 级）；大坝 1970 年建成（3 级）。本条无 1 级来源，正文少写数字；旅游区开发不写（研究子代理事实表 2026-09-15）",
};

const TAMDYTAU: TerrainEntry = {
  id: "tamdytau",
  nameZh: "塔姆德套山",
  nameEn: "Tamdytau",
  category: "inselberg",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "塔姆德套山", lon: 64.5, lat: 41.5833, elevation: 600, kind: "peak" },
  bbox: [64.00, 41.40, 64.90, 41.80],
  label: { lon: 64.450, lat: 41.880, rotation: 0 },
  source: "塔姆德套山（Tomditov tog'lari）：2025 年 3 月内阁决议（文号未独立核实）为「阿克套—塔姆德」国家保护区设立保护带（lex.uz，1 级，只取到标题）；克孜勒库姆中的山块，最高 922 m、长约 60 km，由砂岩、片岩、灰岩构成并有花岗岩侵入，平顶、强烈切割，由东西向岩质山脊与孤立岩丘组成（BSE，2 级）；残山坡面多岩、被干谷切割、山麓环绕洪积裙（BSE，2 级）。锚点为山体概略点，海拔为取景用概略值；金矿与矿业城市不写（研究子代理事实表 2026-09-15）",
};

const ZINZILBAN_GORGE: TerrainEntry = {
  id: "zinzilban-gorge",
  nameZh: "津济尔班峡谷",
  nameEn: "Zinzilban Gorge",
  category: "gorge",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "埃姆斯阶底界 GSSP", lon: 67.30556, lat: 39.2, elevation: 1500, kind: "gorge" },
  bbox: [67.20, 39.10, 67.45, 39.28],
  label: { lon: 67.320, lat: 39.320, rotation: 0 },
  source: "津济尔班峡谷（Zinzilbon darasi）：国际地层委员会认定下泥盆统埃姆斯阶底界的「全球界线层型剖面和点」（GSSP）位于基塔布国家地质保护区津济尔班峡谷，坐标 39°12′N、67°18′20″E，以牙形刺 Polygnathus kitabicus 的首现为标志（该种即据此剖面命名），剖面是较均一的深色微晶灰岩序列，GSSP 在峡谷西壁（ICS stratigraphy.org，1 级；批准年份通行说法 1996，写前核）；2020 年总统第 ПП-4766 号决议以基塔布国家地质保护区为基础设立地质国家自然公园（lex.uz，1 级）；保护区 1979 年设立，位于泽拉夫尚山西南支脉、卡什卡河流域（俄语维基，3 级）。ICS 原文到撒马尔罕的距离疑有误不写；锚点海拔为概略值（研究子代理事实表 2026-09-15）",
};

const SULTANUIZDAG: TerrainEntry = {
  id: "sultanuizdag",
  nameZh: "苏尔坦乌瓦伊斯山",
  nameEn: "Sultanuizdag",
  category: "inselberg",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "苏尔坦乌瓦伊斯山", lon: 60.66667, lat: 42.08333, elevation: 300, kind: "peak" },
  bbox: [60.30, 41.85, 61.30, 42.25],
  label: { lon: 60.800, lat: 42.320, rotation: 0 },
  source: "苏尔坦乌瓦伊斯山（Sulton Uvays tizmasi）：阿姆河右岸的山块，最高 473 m，长逾 50 km、宽至 25 km，由石英岩、片麻岩、大理岩等构成并有花岗闪长岩侵入，南坡与西坡陡、北坡与东坡较缓，荒漠景观（BSE，2 级）；位于克孜勒库姆最西南，把沙漠与阿姆河谷隔开，无常流水（俄语维基，3 级）。本条无 1 级来源；山名词源与宗教场所不写；锚点为山体概略点、海拔为概略值（研究子代理事实表 2026-09-15）",
};

const DENGIZKUL_LAKE: TerrainEntry = {
  id: "dengizkul-lake",
  nameZh: "登吉兹湖",
  nameEn: "Lake Dengizkul",
  category: "lake",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "登吉兹湖", lon: 64.14356, lat: 39.11388, elevation: 182, kind: "salt-lake" },
  bbox: [63.95, 38.95, 64.35, 39.30],
  label: { lon: 64.150, lat: 39.360, rotation: 0 },
  source: "登吉兹湖（Dengizko'l）：2001 年列入拉姆萨尔国际重要湿地名录，是乌兹别克斯坦第一处拉姆萨尔湿地（gov.uz 林业署 2026-02-02 新闻，1 级）；位于布哈拉州南部的构造洼地中，湖面海拔约 181.5 m，无出口，靠排水渠回归水与农田渗水补给，湖水盐度较高，湖底有食盐沉积（俄语维基，3 级）。1987 年的面积已过时不写；邻近边界与气田不写（研究子代理事实表 2026-09-15）",
};

const SUDOCHYE_LAKES: TerrainEntry = {
  id: "sudochye-lakes",
  nameZh: "苏多奇耶湖",
  nameEn: "Lake Sudochye",
  category: "lake",
  regionId: "asia",
  country: "uzbekistan",
  landmark: { name: "大苏多奇耶湖", lon: 58.56432, lat: 43.41333, elevation: 55, kind: "lake" },
  bbox: [58.35, 43.20, 58.85, 43.65],
  label: { lon: 58.600, lat: 43.700, rotation: 0 },
  source: "苏多奇耶湖（Sudochye）：2023 年列入拉姆萨尔国际重要湿地名录（gov.uz 林业署 2026-02-02 新闻，1 级）；位于阿姆河三角洲左岸、穆伊纳克区，湖的西岸沿线就是乌斯秋尔特东缘崖，过去是三角洲中较大的湖、靠阿姆河汊流补给并以汊流通咸海，因水量减少已分解为若干水体（俄语维基，3 级）。旧时面积自相矛盾不写；社会叙事不写；锚点湖面海拔为概略值（研究子代理事实表 2026-09-15）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 乌兹别克斯坦 =====
  CHATKAL_RANGE, GREATER_CHIMGAN, KURAMA_RANGE, HISSAR_RANGE,
  BAYSUNTAU, NURATAU, FERGANA_VALLEY, MIRZACHUL,
  BUKHARA_OASIS, KHOREZM_OASIS, KARSHI_STEPPE, KYZYLKUM_DESERT,
  ARALKUM_DESERT, USTYURT_PLATEAU_UZBEKISTAN, SOUTH_ARAL_SEA, AYDAR_ARNASAY_LAKES,
  AMU_DARYA, SYR_DARYA, ZERAVSHAN_RIVER, CHARVAK_RESERVOIR,
  TAMDYTAU, ZINZILBAN_GORGE, SULTANUIZDAG, DENGIZKUL_LAKE,
  SUDOCHYE_LAKES,
];
