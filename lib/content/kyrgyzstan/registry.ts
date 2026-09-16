import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 / 吉尔吉斯斯坦（中亚次区域；联合国 M49 归中亚）
// 零争议红线：天山最高峰、汗腾格里峰、外阿赖山最高峰、马纳斯峰都在国界上 —— 不作锚点、不写位于哪两国之间、不写命名史；
// 巴特肯州与吉塔边境一带整体不收（英国外交部旅行建议 2026-09-14 提示该区域谨慎、可能有未爆弹药）；
// 阿克赛谷地、科克沙尔套、吐尔尕特山口与口岸、克尔苏湖不收；楚河中游是界河 —— 楚河谷地只写境内、不以河为轴；
// 河流一律只写境内段，不写出境、上下游国家与水量分配；伊塞克湖不写军事设施；内天山高原与阿克希拉克不写矿山；
// 托克托古尔水库不写水位与能源问题；族群、宗教、苏联时期政治叙事与以政治人物命名的峰不写。
// 童话峡谷（无 1–3 级来源）、阿尔斯兰博布（无 1 级来源、分类不合）、琼凯明谷地（只有一个面积数）、苏莱曼山（文化与宗教遗产、近国界）本批不收。
// 骨架：约 90% 国土海拔 1,500 m 以上（国家统计委员会）；天山诸山大体东西向平行，向东在中天山汇成冰川集中的山结；
// 天山北部的昆格与泰尔斯凯夹着伊塞克湖盆地、吉尔吉斯山界定楚河谷地，内天山是高山、谷地与 3,500–4,000 m 的古夷平面（夏尔特）相间，
// 西南是费尔干纳山脉，南部是阿赖山与阿赖谷地；低地只有边缘的楚河谷地、塔拉斯河谷。
// 主要来源：国家统计委员会《吉尔吉斯共和国环境 2020–2024》（stat.gov.kg，2025-11-14 发布，1 级：国土、湖泊面积、保护地 2024 年面积）、
// UNESCO（世界遗产 1490 / 人与生物圈），苏联大百科 BSE（2 级，1970 年代，只用于长度、岩性与地貌结构）、俄语维基（3 级）。
// 法规库 cbd.minjust.gov.kg 取不到，保护地设立年份只有 2–3 级来源；统计委员会列出的河长口径不明（疑为境内长度），正文不引。
// 锚点坐标取 OSM / Wikidata，距国界用 OSM 国界关系 178009 自算；未查到实测海拔的为取景用概略值（注明）。
// ============================================================

const KYRGYZ_ALA_TOO: TerrainEntry = {
  id: "kyrgyz-ala-too",
  nameZh: "吉尔吉斯山脉",
  nameEn: "Kyrgyz Ala-Too",
  category: "mountain_system",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "吐阿舒山口", lon: 73.80633, lat: 42.35141, elevation: 3200, kind: "pass" },
  bbox: [72.90, 42.30, 75.80, 42.90],
  axis: [[73.00, 42.55], [75.70, 42.55]],
  viewScale: 1.5,
  label: { lon: 74.300, lat: 42.700, rotation: 0 },
  source: "吉尔吉斯山脉（Кыргыз Ала-Тоо）：长 375 km（指全山），北坡比南坡平缓而长、从南面界定楚河谷地，由沉积岩、变质岩、玢岩、花岗岩构成，2,500 m 以下为草原与云杉、圆柏林，其上为亚高山与高山草甸，3,700 m 以上有雪原与冰川（苏联大百科 BSE，2 级）；北天山属早加里东褶皱系（BSE「吉尔吉斯苏维埃社会主义共和国」地貌节，2 级）；主要支脉有阿拉阿尔恰支脉，最高点峰名两说、高程 4,855–4,895 m 四个值，苏联时期测量值常被认为偏高（俄语维基，3 级）—— 正文不写最高点。锚点吐阿舒山口（OSM node 2428463677）海拔 OSM 3,586 m / 俄语维基 3,180 m 两说，landmark 海拔为取景用概略值；距国界约 24.7 km；改名史不写（研究子代理事实表 2026-09-15）",
};

const TALAS_ALA_TOO: TerrainEntry = {
  id: "talas-ala-too",
  nameZh: "塔拉斯阿拉套山",
  nameEn: "Talas Ala-Too",
  category: "mountain_system",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "库梅什塔格峰", lon: 71.79603, lat: 42.26331, elevation: 4251, kind: "peak" },
  bbox: [70.90, 41.95, 73.30, 42.45],
  axis: [[71.00, 42.30], [73.20, 42.15]],
  viewScale: 1.4,
  label: { lon: 72.100, lat: 42.450, rotation: 0 },
  source: "塔拉斯阿拉套山（Талас Ала-Тоосу）：长约 270 km（指全山），把塔拉斯河谷与西天山、内天山西部的山地谷地隔开，主要由变质片岩与花岗岩构成，山脊多岩、有冰川，上部为石质高山与高山草甸，坡上为草原与森林—草甸—草原景观（BSE，2 级）；西天山诸主要山脉从它向西南分出，其中最大的是恰特卡尔山（俄语维基，3 级）；别什塔什国家自然公园 13,731.5 ha、卡拉布拉国家自然公园 61,770.0 ha（国家统计委员会《环境 2020–2024》附表 4.15，2024 年面积，1 级）。最高点马纳斯峰距国界约 3 km，不作锚点；锚点库梅什塔格峰 4,251 m 峰名只见 OSM（node 5578960408），距国界约 44 km；卡拉布拉公园近界一片不作 POI（研究子代理事实表 2026-09-15）",
};

const KUNGEY_ALA_TOO: TerrainEntry = {
  id: "kungey-ala-too",
  nameZh: "昆格阿拉套山",
  nameEn: "Kungey Ala-Too",
  category: "mountain_system",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "乔克塔尔峰", lon: 76.68852, lat: 42.77556, elevation: 4771, kind: "peak" },
  bbox: [76.00, 42.55, 78.70, 43.00],
  axis: [[76.20, 42.75], [78.60, 42.85]],
  viewScale: 1.4,
  label: { lon: 77.400, lat: 42.950, rotation: 0 },
  source: "昆格阿拉套山（Күңгөй Ала-Тоо，「昆格」意为向阳的一面）：从北面环抱伊塞克湖盆地，长约 280 km，最高 4,771 m（乔克塔尔峰），由花岗岩、片岩、砂岩构成，地形强烈切割、脊部为高山地貌，现代冰川主要在北坡，以山地草甸与草甸草原为主，南坡下部为山地草原，北坡与峡谷有云杉林（BSE，2 级）；与外伊犁阿拉套一起组成北天山，泰尔斯凯（背阴的一面）与之相对（俄语维基，3 级）。与哈萨克斯坦 `zailiysky-alatau` 平行、bbox 部分重叠，id 不同；锚点乔克塔尔峰（OSM node 5578960584，BSE / OSM / Wikidata 三者一致）距国界约 14 km，正文不写国界与山口（研究子代理事实表 2026-09-15）",
};

const TERSKEY_ALA_TOO: TerrainEntry = {
  id: "terskey-ala-too",
  nameZh: "泰尔斯凯阿拉套山",
  nameEn: "Terskey Ala-Too",
  category: "mountain_system",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "卡拉科尔峰", lon: 78.46405, lat: 42.17243, elevation: 5216, kind: "peak" },
  bbox: [76.40, 41.90, 79.30, 42.45],
  axis: [[76.50, 42.10], [79.20, 42.30]],
  viewScale: 1.5,
  label: { lon: 77.800, lat: 42.050, rotation: 0 },
  source: "泰尔斯凯阿拉套山（Тескей Ала-Тоо，「泰尔斯凯」意为背阴的一面）：从南面界定伊塞克湖盆地，长 375 km、最高 5,216 m；北坡陡而高、被窄峡谷切割，峡谷上游有冰川槽谷与冰斗；山脊平坦、顶上是平顶冰川；南坡平缓、与内天山和中天山的高原（夏尔特）连成一片；主要由花岗岩、变质片岩、灰岩构成；北坡峡谷有云杉林，脊部为高山草甸，南坡过渡到寒冷高山荒漠（BSE，2 级）；冰川一半多在朝向伊塞克湖的北坡（俄语维基，3 级；冰川面积为旧值，不写）；卡拉科尔国家自然公园 38,134 ha（统计委员会附表 4.15，2024，1 级）。最高点高程 5,216 m（BSE / OSM / Wikidata）/ 5,281 m（俄语维基）两说；距国界约 70 km；与中国 `tianshan` 条目非同一范围；以政治命名的峰不写（研究子代理事实表 2026-09-15）",
};

const INYLCHEK_GLACIER: TerrainEntry = {
  id: "inylchek-glacier",
  nameZh: "伊内尔切克冰川",
  nameEn: "Inylchek Glacier",
  category: "valley",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "南伊内尔切克冰川冰舌中段", lon: 79.82, lat: 42.18, elevation: 3300, kind: "corridor" },
  bbox: [79.30, 41.95, 80.30, 42.35],
  axis: [[79.55, 42.15], [80.10, 42.08]],
  viewScale: 1.3,
  label: { lon: 79.750, lat: 42.380, rotation: 0 },
  source: "伊内尔切克冰川（Эңилчек）：南、北伊内尔切克是中天山伊内尔切克河上游的树枝状山谷冰川，两冰川之间隔着东西向的中间山脊，北伊内尔切克冰川末端与南伊内尔切克冰川下部之间是梅茨巴赫湖（BSE，2 级）；南伊内尔切克冰川长 59.5 km（BSE）/ 60.5 km（俄语维基），冰舌下段约 14 km 被冰碛覆盖（BSE、俄语维基）；汗腾格里峰由大理岩与大理岩化灰岩构成、高约 7,000 m（BSE 6,995 m / OSM 7,010 m），天山最高峰海拔 7,439 m（BSE / OSM；中国 `tianshan` 条目用国测局 7,443 m，两者为测量口径差异）；梅茨巴赫湖是冰川堰塞湖，1903 年由梅茨巴赫率领的考察队到达，下湖以冰坝为界、每年溃决一两次，湖水数日内经冰下通道泄入伊内尔切克河谷（俄语维基，3 级）；汗腾格里国家自然公园 275,800.3 ha（统计委员会附表 4.15，2024，1 级）。冰川面积两说差距大（逾 800 km² / 567.2 km²）且会过期，不写；锚点取 Wikidata Q4534118 冰舌点，距国界约 16.9 km，海拔为取景用概略值；与中国 `tianshan` 条目 bbox 重叠、id 不同；峰的位置关系、命名史与湖水出境不写（研究子代理事实表 2026-09-15）",
};

const FERGANA_RANGE: TerrainEntry = {
  id: "fergana-range",
  nameZh: "费尔干纳山脉",
  nameEn: "Fergana Range",
  category: "mountain_system",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "克克阿尔特山口", lon: 73.75808, lat: 41.19714, elevation: 3000, kind: "pass" },
  bbox: [72.90, 40.40, 74.90, 41.70],
  axis: [[72.90, 41.60], [74.80, 40.50]],
  viewScale: 1.4,
  label: { lon: 73.600, lat: 41.450, rotation: -30 },
  source: "费尔干纳山脉（Фергана кырка тоосу）：分隔费尔干纳盆地与内天山，是内天山的西南边框；长 225 km；西南坡长而缓、东北坡短而陡；由片岩、砂岩、灰岩等沉积—变质岩层构成，有辉长岩、辉绿岩侵入；现代冰川主要在东南部；西南坡有大片核桃林，其上为暗针叶林与圆柏林、亚高山与高山草甸（BSE，2 级）；西南坡年降水可达 900–1,000 mm、背风的对坡只有 200–250 mm（BSE 地貌与气候节，2 级）；库伦阿塔保护区 27,540.2 ha、赛马卢塔什国家自然公园 31,932.0 ha（统计委员会附表 4.15，2024，1 级）。最高点 4,692 m（BSE）/ 4,893 m（Wikidata）/ 4,905 m（OSM）三说，不写；与乌兹别克斯坦 `fergana-valley` 相接，盆地分属不写；锚点克克阿尔特山口（OSM node 5604556451）距国界约 62 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const ALAY_RANGE: TerrainEntry = {
  id: "alay-range",
  nameZh: "阿赖山脉",
  nameEn: "Alay Range",
  category: "mountain_system",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "塔尔迪克山口", lon: 73.16999, lat: 39.76839, elevation: 3615, kind: "pass" },
  bbox: [72.00, 39.70, 74.00, 40.20],
  axis: [[72.00, 39.85], [74.00, 39.90]],
  viewScale: 1.3,
  label: { lon: 73.000, lat: 40.150, rotation: 0 },
  source: "阿赖山脉（Алай кыркасы）：帕米尔—阿赖山系的山脉，长约 400 km（指全山，含西段），从南面界定费尔干纳盆地，由砂泥岩层与结晶片岩构成；北坡平缓、有一串纵向谷地，南坡陡落阿赖谷地；脊部积雪、有冰川；山麓为半荒漠，坡上为干草原、草甸草原与圆柏林，其上为高山草甸（BSE，2 级）；南天山海西褶皱系的山脉之一（BSE 地貌节，2 级）；塔尔迪克山口海拔 3,615 m，1894 年经此修通了从费尔干纳盆地进入阿赖谷地的第一条马车路（俄语维基，3 级；同段军事叙事不取）。本条只取东段（bbox 西界 72.0°E，避开巴特肯州与吉塔边境）；最高点在西段，不写；锚点距国界约 40 km；以人名命名的峰不作锚点（研究子代理事实表 2026-09-15）",
};

const ALAY_VALLEY: TerrainEntry = {
  id: "alay-valley",
  nameZh: "阿赖谷地",
  nameEn: "Alay Valley",
  category: "valley",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "克孜勒苏河谷地中段", lon: 72.90137, lat: 39.66362, elevation: 2800, kind: "grassland" },
  bbox: [72.30, 39.45, 73.60, 39.80],
  axis: [[72.30, 39.55], [73.55, 39.72]],
  viewScale: 1.3,
  label: { lon: 72.900, lat: 39.500, rotation: 0 },
  source: "阿赖谷地（Алай өрөөнү）：帕米尔—阿赖山系中的山间凹陷，东西长约 150 km、宽 8–25 km，海拔自西约 2,240 m 升到东约 3,536 m，由克孜勒苏河及其支流灌溉，平坦的谷底由冲积与洪积物构成、局部被冰碛丘岗打断，是山地牧场（BSE，2 级）；外阿赖山北坡下部为山地草原与草甸、其上为永久积雪与冰川（BSE，2 级）；外阿赖山的雪墙高出谷地 3,000–3,500 m，山麓长满草的古冰碛上有许多小湖（俄语维基，3 级）。外阿赖山最高峰名称与位置、边境通行制度、村庄归属说法、河流出境、口岸与军事史一律不写；bbox 南界不压外阿赖山主脊；锚点为河谷中段概略点（OSM way 640159416），距国界约 32 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const AT_BASHY_RANGE: TerrainEntry = {
  id: "at-bashy-range",
  nameZh: "阿特巴什山",
  nameEn: "At-Bashy Range",
  category: "mountain_system",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "阿特巴什山中段", lon: 75.88230, lat: 40.99890, elevation: 4000, kind: "peak" },
  bbox: [75.00, 40.70, 76.80, 41.20],
  axis: [[75.00, 40.80], [76.70, 41.10]],
  viewScale: 1.3,
  label: { lon: 75.900, lat: 41.250, rotation: 15 },
  source: "阿特巴什山（Ат-Башы кырка тоосу）：内天山南部的山脉，自西南西向东北东延伸，把北面的阿特巴什盆地与南面的恰特尔湖盆地隔开；长 135 km、最高 4,786 m；由古生代变质片岩、灰岩、砂岩及部分花岗岩、正长岩构成；脊部有冰川地貌，以山地草甸与亚冰雪带景观为主（BSE，2 级）；阿特巴什盆地在纳伦河以南，长约 120 km、宽约 20 km、海拔 2,000–2,400 m，由新近纪与第四纪沉积物充填，半荒漠与草原景观，有灌溉与旱作农业（BSE，2 级）；3,200–3,400 m 以上几乎普遍有多年冻土（BSE「天山」，2 级）。本条无 1 级来源；锚点取 Wikidata Q3545703 山脉代表点（无命名地物），距国界约 44 km，海拔为取景用概略值；南侧近界谷地不入 bbox（研究子代理事实表 2026-09-15）",
};

const INNER_TIAN_SHAN_SYRTS: TerrainEntry = {
  id: "inner-tian-shan-syrts",
  nameZh: "内天山高原（夏尔特）",
  nameEn: "Syrts of the Inner Tian Shan",
  category: "plateau",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "阿拉贝尔山口一带高原面", lon: 77.69370, lat: 41.82401, elevation: 3845, kind: "grassland" },
  bbox: [76.80, 41.40, 78.80, 42.00],
  viewScale: 1.6,
  label: { lon: 77.800, lat: 41.600, rotation: 0 },
  source: "夏尔特（сырт）：天山中海拔 3,500–4,000 m 的平坦或微起伏地面，是古夷平面的残余，在新构造运动中被弯曲成大型褶皱、被断裂复杂化、又被侵蚀切割（BSE「夏尔特」，2 级）；内天山东部与中天山有高达约 3,850 m 的大片夷平地面（BSE 地貌节，2 级）；泰尔斯凯阿拉套南坡平缓、与夏尔特连成一片，过渡到寒冷高山荒漠（BSE，2 级）；天山高原的高山凹陷里有冻胀丘与泥炭地，3,200–3,400 m 以上多年冻土几乎普遍（BSE「天山」，2 级）；萨雷恰特—埃尔塔什国家保护区 149,117.9 ha（统计委员会附表 4.15，2024，1 级）。「阿拉贝尔高原」无 1–3 级来源，正文用「内天山高原」泛称；锚点阿拉贝尔山口（OSM node 5604554594，ele 3,845）距国界约 62 km；矿山与保护区边界争议不写（研究子代理事实表 2026-09-15）",
};

const ISSYK_KUL: TerrainEntry = {
  id: "issyk-kul",
  nameZh: "伊塞克湖",
  nameEn: "Issyk-Kul",
  category: "lake",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "伊塞克湖", lon: 77.25557, lat: 42.46205, elevation: 1607, kind: "lake" },
  bbox: [76.20, 42.10, 78.40, 42.90],
  axis: [[76.25, 42.40], [78.35, 42.55]],
  viewScale: 1.6,
  label: { lon: 77.250, lat: 42.500, rotation: 0 },
  source: "伊塞克湖（Ысык-Көл）：国内湖泊水面面积最大，6,236 km²（其后松湖 275、恰特尔湖 175 km²）（国家统计委员会《环境 2020–2024》正文，1 级）；「伊塞克湖」生物圈保护区 2001 年纳入 UNESCO 人与生物圈网络，登记描述称湖长约 180 km、宽约 60 km，因深度、低盐度与温泉而冬季不结冰（UNESCO MAB，1 级；同段跨国名次不取）；伊塞克湖国家保护区 18,999.7 ha（统计委员会附表 4.15，2024，1 级）；最大的湖都在构造凹陷里（BSE，2 级）；无出口湖，约 80 条入湖小河，湖水微咸，平均深 278 m、最大深 668 m（旧值 702 m）、长 182 km、宽 58 km（俄语维基，3 级）；湖盆是被断裂复杂化的向斜凹陷，湖岸有古湖阶地，盆地西部干旱、东部湿润（俄语维基，3 级）。湖面海拔 1,606–1,609 m 多个值，正文写约 1,600 m；最大深度写约 670 m 并注旧值；军事设施、湖底古城、湖名宗教化词源不写；距国界约 49 km（研究子代理事实表 2026-09-15）",
};

const SON_KUL: TerrainEntry = {
  id: "son-kul",
  nameZh: "松湖",
  nameEn: "Song-Köl",
  category: "lake",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "松湖", lon: 75.17322, lat: 41.84139, elevation: 3016, kind: "lake" },
  bbox: [74.95, 41.70, 75.40, 41.97],
  label: { lon: 75.170, lat: 42.020, rotation: 0 },
  source: "松湖（Соң-Көл，中文维基作「宋湖」）：国内第二大湖，水面 275 km²（国家统计委员会《环境 2020–2024》正文，1 级）；位于松湖山（北）与莫尔多套山（南）之间，湖面海拔 3,016 m，构造成因，湖岸低平、少曲折、多沼泽化，数条小河入湖，唯一出水河松湖河注入纳伦河，9 月底封冻、5 月底解冻（BSE，2 级）；松湖山长约 60 km、主要由灰岩构成（BSE，2 级）；卡拉塔尔—贾佩雷克国家保护区 36,392.6 ha（统计委员会附表 4.15，2024，1 级）。最大深度 22 m（BSE）/ 约 14 m（俄语维基）差距大，不写；拉姆萨尔登记只取到检索摘要，不写；距国界约 112 km（研究子代理事实表 2026-09-15）",
};

const CHATYR_KUL: TerrainEntry = {
  id: "chatyr-kul",
  nameZh: "恰特尔湖",
  nameEn: "Chatyr-Köl",
  category: "lake",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "恰特尔湖", lon: 75.28066, lat: 40.64225, elevation: 3530, kind: "lake" },
  bbox: [75.10, 40.55, 75.45, 40.72],
  label: { lon: 75.280, lat: 40.780, rotation: 0 },
  source: "恰特尔湖（Чатыр-Көл，「天幕湖」）：国内第三大湖，水面 175 km²（国家统计委员会《环境 2020–2024》正文，1 级）；无出口湖，湖面海拔 3,530 m，11 月至次年 4 月封冻，以雪水补给为主（BSE，2 级）；位于构造凹陷最低处，凹陷是弱切割的湖—河堆积平原，年均气温约 −5.6 °C，年降水两三百毫米、大部分落在夏季（俄语维基，3 级）；阿克赛—恰特尔湖盆地局部多年冻土厚逾 100 m（BSE「天山」，2 级）。深度 3.8 m（BSE）/ 16.5 m（俄语维基）差 4 倍，不写；南侧界山、山口与口岸不写，正文只写「阿特巴什山南侧的高原盆地」；锚点距国界约 12.8 km（研究子代理事实表 2026-09-15）",
};

const SARY_CHELEK: TerrainEntry = {
  id: "sary-chelek",
  nameZh: "萨雷切列克湖",
  nameEn: "Sary-Chelek",
  category: "lake",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "萨雷切列克湖", lon: 71.95825, lat: 41.89506, elevation: 1875, kind: "lake" },
  bbox: [71.85, 41.80, 72.08, 41.98],
  viewScale: 1.4,
  label: { lon: 71.960, lat: 42.000, rotation: 0 },
  source: "萨雷切列克湖（Сары-Челек，「黄碗」）：萨雷切列克国家生物圈保护区（23,868 ha）作为「西天山」跨国系列遗产的组成部分 2016 年列入世界遗产，同一遗产的吉方组成部分还有别什阿拉尔与帕德沙阿塔两处保护区（UNESCO whc 1490，1 级）；1978 年纳入人与生物圈网络，登记描述称湖深 245 m（UNESCO MAB，1 级；同段「海拔约 2,000 m」为概数）；保护区在恰特卡尔山支脉，1959 年为保护核桃—果树林而设，2,100 m 以下以核桃与苹果林为主，其上为冷杉、云杉林与草甸（BSE，2 级）；山崩堰塞湖，湖岸陡峭曲折，南岸是天然核桃—果树林（俄语维基，3 级；成因年代无出处，不写）；统计委员会附表 4.15 保护区 23,868.0 ha（2024，1 级）。湖面积 470 / 492 / 507 ha 三说，正文写约 5 km²；湖面海拔 1,873–1,878 m（OSM / 俄语维基 / Wikidata），正文写约 1,870 m；与乌兹别克斯坦 `chatkal-range` 同属 UNESCO 1490；距国界约 43 km（研究子代理事实表 2026-09-15）",
};

const TOKTOGUL_RESERVOIR: TerrainEntry = {
  id: "toktogul-reservoir",
  nameZh: "托克托古尔水库",
  nameEn: "Toktogul Reservoir",
  category: "lake",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "托克托古尔水库", lon: 72.94874, lat: 41.76627, elevation: 870, kind: "lake" },
  bbox: [72.60, 41.60, 73.30, 41.95],
  viewScale: 1.2,
  label: { lon: 72.950, lat: 41.980, rotation: 0 },
  source: "托克托古尔水库：由纳伦河上托克托古尔水电站大坝形成，20 世纪 70 年代初开始蓄水（BSE 1974 / 俄语维基 1973 两说），面积约 284 km²、容积约 19.5 km³、长约 65 km、最大深约 180 m、水位变幅可达约 63 m，进行多年径流调节（BSE，2 级；俄语维基 3 级数字一致）；淹没的克特缅秋别盆地海拔约 750–1,000 m（BSE「奥什州」，2 级）。本条无 1 级来源；效益叙述、水位与电力问题、调度对下游的影响不写；水面海拔随水位变化，landmark 取 OSM ele 870 m；距国界约 80 km（研究子代理事实表 2026-09-15）",
};

const ALA_KUL: TerrainEntry = {
  id: "ala-kul",
  nameZh: "阿拉库尔湖",
  nameEn: "Ala-Kul",
  category: "lake",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "阿拉库尔湖", lon: 78.53545, lat: 42.31772, elevation: 3532, kind: "lake" },
  bbox: [78.35, 42.25, 78.65, 42.50],
  viewScale: 1.4,
  label: { lon: 78.540, lat: 42.380, rotation: 0 },
  source: "阿拉库尔湖（Ала-Көл，「花斑湖」；与哈萨克斯坦的阿拉湖 Alakol 同名不同湖）：位于泰尔斯凯阿拉套北坡、卡拉科尔河右支流上游，湖面海拔 3,532 m，冰川成因，从湖岸能看到后退后的冰川占据谷地上部、继续补给湖水，湖深逾 70 m（俄语维基，3 级）；湖面海拔 OSM 3,532 m / Wikidata 3,560 m。本条无 1–2 级来源，正文只写成因与位置，不写面积（Wikidata 值单位不明）；与卡拉科尔国家自然公园的范围关系不明，不写；bbox 放大到卡拉科尔河谷以便取景；距国界约 56 km（研究子代理事实表 2026-09-15）",
};

const CHUY_VALLEY: TerrainEntry = {
  id: "chuy-valley",
  nameZh: "楚河谷地",
  nameEn: "Chüy Valley",
  category: "plain",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "楚河谷地冲积平原", lon: 74.11, lat: 42.83, elevation: 800, kind: "oasis" },
  bbox: [73.50, 42.60, 76.00, 43.00],
  axis: [[73.50, 42.85], [75.80, 42.75]],
  viewScale: 1.5,
  label: { lon: 74.700, lat: 42.700, rotation: 0 },
  source: "楚河谷地（Чүй өрөөнү）：楚河中游的谷地，自博姆峡谷向西北展开，海拔约 500–1,200 m，年降水 250–400 mm、主要在春季，几乎全部开垦并灌溉（BSE，2 级；谷地长宽指整个谷地，不写）；地质上是向斜凹陷，由中新生代松散沉积物充填，上覆楚河及其支流的冲积物，南侧有来自吉尔吉斯山的支流冲积扇，原生景观是半荒漠与干草原，大楚河运河是灌溉系统的骨干（俄语维基，3 级）；楚河谷地、塔拉斯河谷与费尔干纳盆地东缘是国土边缘 1,500 m 以下的较低谷地（BSE 地貌节，2 级）。楚河中游是界河 —— 本条只写境内、bbox 北界不越过楚河、不以河为轴；首都位置与城市列表不写；锚点为谷地腹地概略点，距国界约 35 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const TALAS_VALLEY: TerrainEntry = {
  id: "talas-valley",
  nameZh: "塔拉斯河谷",
  nameEn: "Talas Valley",
  category: "valley",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "塔拉斯", lon: 72.24769, lat: 42.52199, elevation: 1300, kind: "oasis" },
  bbox: [71.50, 42.30, 73.30, 42.70],
  axis: [[71.60, 42.62], [73.20, 42.35]],
  viewScale: 1.3,
  label: { lon: 72.500, lat: 42.700, rotation: -10 },
  source: "塔拉斯河谷（Талас өрөөнү）：山间盆地，在吉尔吉斯山（北）与塔拉斯阿拉套（南）之间，海拔约 600–2,000 m，塔拉斯河流经盆地底部；坡面与基底由片岩、砂岩、灰岩构成，有花岗岩侵入；以半荒漠、干草原与草原景观为主，平坦谷底与支流冲积扇上是绿洲耕地（BSE，2 级；长度指整个谷地，不写）；塔拉斯河是国土西北部的主要河流（BSE 地貌节，2 级）。本条无 1 级地貌来源；河流出境不写；锚点塔拉斯市（OSM node 297094905），距国界约 25 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const SUUSAMYR_VALLEY: TerrainEntry = {
  id: "suusamyr-valley",
  nameZh: "苏萨梅尔谷地",
  nameEn: "Suusamyr Valley",
  category: "valley",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "苏萨梅尔", lon: 73.95896, lat: 42.18151, elevation: 2200, kind: "grassland" },
  bbox: [73.20, 41.95, 74.60, 42.35],
  viewScale: 1.3,
  label: { lon: 73.900, lat: 42.050, rotation: 0 },
  source: "苏萨梅尔谷地（Суусамыр өрөөнү）：天山的高山盆地，北有塔拉斯阿拉套与吉尔吉斯山、南有苏萨梅尔套与朱姆加尔套，由苏萨梅尔河与西卡拉科尔河（纳伦河流域）灌溉，谷底海拔 2,100–2,500 m、部分沼泽化，山地羊茅草原与草甸草原用作牧场（BSE，2 级）；苏萨梅尔套长约 125 km、高 4,048 m，主要由花岗岩与变质片岩构成（BSE，2 级）；苏萨梅尔盆地与伊塞克湖盆地把北天山山脉带与内天山北部山脉带隔开（BSE「天山」，2 级）。本条无 1 级来源；1992 年地震未找到可引用来源，不写；锚点苏萨梅尔村（OSM node 830474940），距国界约 45 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const NARYN_RIVER: TerrainEntry = {
  id: "naryn-river",
  nameZh: "纳伦河",
  nameEn: "Naryn River",
  category: "river",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "纳伦（纳伦盆地）", lon: 75.99763, lat: 41.42860, elevation: 2050, kind: "city" },
  bbox: [72.50, 41.20, 78.10, 41.90],
  axis: [[78.00, 41.80], [72.60, 41.65]],
  viewScale: 1.8,
  label: { lon: 75.300, lat: 41.300, rotation: 0 },
  source: "纳伦河（Нарын）：全长约 807 km（BSE、俄语维基，指全长），发源于中天山冰川，在山间谷地中流动、局部穿行于狭窄峡谷，以雪冰补给为主，5 月汛期，冬季有流冰与岸冰（BSE，2 级）；国内最大的河流，发源于彼得罗夫冰川，主要支流有阿特巴什河等（BSE 地貌节，2 级）；纳伦盆地沿纳伦河中游，海拔约 1,300–3,000 m，右岸发育劣地，冬季寒冷少雪、年降水 200–300 mm（BSE「纳伦盆地」，2 级）；纳伦国家保护区 105,519.5 ha（统计委员会附表 4.15，2024，1 级）。统计委员会列出「纳伦河 535 km」未注明口径（疑为境内长度），正文不引；出境、汇成锡尔河、下游用水、水电站群不写；下游与乌兹别克斯坦 `syr-darya` 衔接；锚点纳伦市（OSM node 254372964），距国界约 82 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const BOOM_GORGE: TerrainEntry = {
  id: "boom-gorge",
  nameZh: "博姆峡谷",
  nameEn: "Boom Gorge",
  category: "gorge",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "博姆峡谷", lon: 75.80447, lat: 42.57914, elevation: 1500, kind: "gorge" },
  bbox: [75.60, 42.45, 76.00, 42.65],
  label: { lon: 75.800, lat: 42.680, rotation: 0 },
  source: "博姆峡谷（Боом капчыгайы）：楚河的深窄横向峡谷，分隔吉尔吉斯山与昆格阿拉套，长约 30 km、谷坡高可达 1,500 m，公路与铁路经峡谷连接楚河谷地与伊塞克湖岸（BSE，2 级）；峡谷上段地形较缓、河漫滩宽，下段是窄峡谷、河流在陡崖间曲折，1948 年通铁路（俄语维基，3 级）；楚河在距伊塞克湖数公里处转向西北，经博姆峡谷进入楚河谷地（俄语维基「楚河」，3 级）。本条无 1 级来源；Wikidata 中文标签「繁荣谷」为误译不用；锚点 OSM node 6270033785，距国界约 25 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const JETI_OGUZ: TerrainEntry = {
  id: "jeti-oguz",
  nameZh: "杰特奥古兹红岩",
  nameEn: "Jeti-Ögüz Rocks",
  category: "hills",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "七公牛岩", lon: 78.23109, lat: 42.33779, elevation: 2200, kind: "escarpment" },
  bbox: [78.15, 42.20, 78.30, 42.40],
  label: { lon: 78.230, lat: 42.430, rotation: 0 },
  source: "杰特奥古兹（Жети-Өгүз，「七头公牛」）：峡谷位于泰尔斯凯阿拉套北坡、同名河的河漫滩，得名于一列巨大的红色岩脊「七公牛」，另一处著名岩石是「破碎之心」（俄语维基，3 级）；岩体是第三纪红色砾岩构成的陡崖（英语维基，3 级，单一来源）；杰特奥古兹疗养地在森林覆盖的杰特奥古兹河谷中，海拔约 2,200–2,400 m，有温泉（BSE，2 级）。本条无 1 级来源；岩性只有 3 级单一来源，正文写「红色砾岩」不写年代；传说与疗养院不写；锚点 OSM node 5017059611，距国界约 58 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const ALA_ARCHA_GORGE: TerrainEntry = {
  id: "ala-archa-gorge",
  nameZh: "阿拉阿尔恰峡谷",
  nameEn: "Ala-Archa Gorge",
  category: "gorge",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "阿拉阿尔恰峡谷中段", lon: 74.49270, lat: 42.55590, elevation: 2100, kind: "gorge" },
  bbox: [74.40, 42.40, 74.65, 42.65],
  label: { lon: 74.490, lat: 42.680, rotation: 0 },
  source: "阿拉阿尔恰（Ала-Арча，「花斑的圆柏」）：阿拉阿尔恰国家自然公园 2024 年面积 18,494.8 ha（国家统计委员会《环境 2020–2024》附表 4.15，1 级）；位于吉尔吉斯山北坡，海拔约 1,600–4,860 m，阿拉阿尔恰河流过公园，有冰川与瀑布，1976 年设立（俄语维基，3 级；设立年份无 1 级来源）；阿拉阿尔恰支脉是吉尔吉斯山的主要支脉之一，峡谷源头是一圈 4,000–4,900 m 的山峰（俄语维基「吉尔吉斯山」，3 级）。俄语维基首段面积 2,280 ha 与同条自相矛盾，不用；门票与管理规定不写；锚点 OSM way 1320142401（峡谷中段），距国界约 52 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const AKSHIYRAK: TerrainEntry = {
  id: "akshiyrak",
  nameZh: "阿克希拉克山",
  nameEn: "Akshiyrak Massif",
  category: "mountain_system",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "阿克希拉克山", lon: 78.4263, lat: 41.8759, elevation: 4500, kind: "peak" },
  bbox: [78.05, 41.70, 78.75, 42.05],
  viewScale: 1.2,
  label: { lon: 78.430, lat: 42.100, rotation: 0 },
  source: "阿克希拉克山（Акшыйрак）：天山中的山块，自南西南向北东北延伸，是纳伦河上游与萨雷贾兹河流域诸河的分水岭；由三条雁列状平行山脊组成，长约 50 km、最高 5,126 m；由变质片岩、灰岩、花岗岩构成；是天山重要的冰川中心之一，最大的彼得罗夫冰川是纳伦河的源头；以高山亚冰雪带与冰雪带景观为主（BSE「阿克希拉克」，2 级；冰川面积为 1970 年代值，不写）；阿克希拉克山块把中天山与内天山分开（BSE 地貌节，2 级）。本条无 1 级来源；山区矿山不写；锚点取 Wikidata 代表点，距国界约 43 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const JUMGAL_BASIN: TerrainEntry = {
  id: "jumgal-basin",
  nameZh: "朱姆加尔盆地",
  nameEn: "Jumgal Basin",
  category: "basin",
  regionId: "asia",
  country: "kyrgyzstan",
  landmark: { name: "恰耶克", lon: 74.5165, lat: 41.9266, elevation: 1700, kind: "grassland" },
  bbox: [74.10, 41.75, 74.95, 42.05],
  viewScale: 1.2,
  label: { lon: 74.520, lat: 42.080, rotation: 0 },
  source: "朱姆加尔盆地（Жумгал өрөөнү）：天山中的山间盆地，在伊塞克湖以西，海拔约 1,500 m 至 2,000–2,500 m，北有朱姆加尔套、南有莫尔多套（苏联大百科「朱姆加尔盆地」词条摘要，2 级）；盆地长约 60 km、宽 8–25 km（同一词典页收录的另一部百科释文，2 级）；朱姆加尔套呈东西向，长逾 100 km、高 3,948 m，西端以克克梅伦河峡谷与苏萨梅尔套分开，由凝灰质砂岩、钙质云母片岩与花岗岩构成，坡上有草甸、草甸草原与圆柏、云杉林（BSE「朱姆加尔套」，2 级）。本条只有 2 级来源，正文少写数字；锚点恰耶克村（OSM Nominatim 41.9266,74.5165），距国界约 99 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

export const TERRAINS: TerrainEntry[] = [
  KYRGYZ_ALA_TOO, TALAS_ALA_TOO, KUNGEY_ALA_TOO, TERSKEY_ALA_TOO,
  INYLCHEK_GLACIER, FERGANA_RANGE, ALAY_RANGE, ALAY_VALLEY,
  AT_BASHY_RANGE, INNER_TIAN_SHAN_SYRTS, ISSYK_KUL, SON_KUL,
  CHATYR_KUL, SARY_CHELEK, TOKTOGUL_RESERVOIR, ALA_KUL,
  CHUY_VALLEY, TALAS_VALLEY, SUUSAMYR_VALLEY, NARYN_RIVER,
  BOOM_GORGE, JETI_OGUZ, ALA_ARCHA_GORGE, AKSHIYRAK,
  JUMGAL_BASIN,
];
