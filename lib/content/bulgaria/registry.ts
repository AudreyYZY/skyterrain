import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 保加利亚（东欧次区域；联合国 M49 归东欧）
// 零争议红线：多瑙河保加利亚段全是界河 —— 不单列（罗马尼亚 danube-romania 已覆盖），平原与湖泊条目只写「北临多瑙河」；
// 边界山脊与界河上的对象不收、不作锚点，跨境的山与河只写境内部分、不写境内占比、不点邻国名与外语河名；
// 多布罗加归属史、马其顿问题相关叙事、罗多彼的族群宗教与地名改名史、军事设施、宗教场所与传说、争议工程一律不写。
// 骨架：自北向南东西向平行带 —— 多瑙河平原 / 巴尔干山脉 / 山前盆地（索非亚、卡赞勒克）/ 斯雷德纳山 / 上色雷斯平原 / 里拉—罗多彼地块（里拉、皮林、维托沙、罗多彼），东临黑海。
// 山体→`mountain_system`、平原→`plain`、山前盆地→`basin`、台地→`plateau`、河→`river`、海岸与岬角→`coast`、湖→`lake`、岩柱与土林→`hills`、峡谷→`gorge`。
// 主要来源：保加利亚国家统计局 NSI《Statistical Reference Book 2025》地理章节（1 级：峰高 / 河长 / 湖面积 / 海岸线，河长表与正文有不一致处）、
// 执行环境署保护区登记册 EEA-ZT（1 级：保护地面积与设立文件，面积有近年重测值）、里拉与中巴尔干国家公园管理局、UNESCO；描述性数字多只有保加利亚语维基（3 级）。
// 锚点坐标取 OSM；锚点海拔未查到实测值的为取景用概略值（注明）。
// ============================================================

const BALKAN_MOUNTAINS: TerrainEntry = {
  id: "balkan-mountains",
  nameZh: "巴尔干山脉",
  nameEn: "Balkan Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "博泰夫峰", lon: 24.91728, lat: 42.71687, elevation: 2376, kind: "peak" },
  bbox: [22.35, 42.55, 27.95, 43.45],
  axis: [[22.40, 43.30], [27.90, 42.70]],
  viewScale: 2.2,
  label: { lon: 25.000, lat: 43.350, rotation: 0 },
  source: "巴尔干山脉（Стара планина / 斯塔拉山）：最高峰博泰夫峰 2,376 m（保加利亚国家统计局 NSI《Statistical Reference Book 2025》表 4，来源地籍测绘局 GCCA，1 级；BGWIKI 2,375.9 m）；境内长约 530 km、宽 15–50 km、以兹拉蒂察与弗拉特尼克山口分西中东三段，北接前巴尔干、南接一串山前盆地，东端在埃米内角没入黑海，年轻褶皱山系、新近纪分阶段抬升（BGWIKI，3 级）；埃米内角 1976 年设为自然地标（执行环境署保护区登记册 EEA-ZT，1 级；面积研究表记 0.5 ha、核实子代理查到两处写 50 ha，两说不一，正文不写面积）。长度等描述性数字只有 3 级，正文不写长度；山脉西端延入境外只写「西段到国界」；峰名改名史不写（研究子代理事实表 2026-09-15）",
};

const CENTRAL_BALKAN: TerrainEntry = {
  id: "central-balkan",
  nameZh: "中巴尔干国家公园",
  nameEn: "Central Balkan National Park",
  category: "mountain_system",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "斯泰内托峡谷", lon: 24.7098, lat: 42.74463, elevation: 1200, kind: "gorge" },
  bbox: [24.20, 42.62, 25.35, 42.90],
  axis: [[24.25, 42.78], [25.30, 42.72]],
  viewScale: 1.5,
  label: { lon: 24.800, lat: 42.940, rotation: 0 },
  source: "中巴尔干国家公园（Национален парк „Централен Балкан“）：依环境部 1991-10-31 第 843 号令设立、1999 年重新归类为国家公园（EEA-ZT、环境与水利部 2025-10-31 新闻稿，1 级）；面积 71,757.15 ha，2026-03-06 第 РД-215 号令按更精确测量更新（国家公园管理局 visitcentralbalkan.net 公告与 EEA-ZT，1 级；旧值 72,021.07 ha）；园内 9 个保护区的老山毛榉林 2017 年作为「喀尔巴阡及欧洲其他地区的古老与原始山毛榉林」系列遗产组成部分列入世界遗产，2009 年获欧洲委员会欧洲保护区证书（环境与水利部，1 级；UNESCO whc 1133，1 级）；园区称拉伊斯科瀑布（124.5 m）是全国约 300 个瀑布中最高的（园区 1 级原话，正文写「园区称」）；斯泰内托为切尔尼奥瑟姆河上游的喀斯特峡谷（parks.bg，3 级）。锚点不用离博泰夫峰只有约 2 km 的拉伊斯科瀑布；锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const RILA_MOUNTAINS: TerrainEntry = {
  id: "rila-mountains",
  nameZh: "里拉山脉",
  nameEn: "Rila Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "穆萨拉峰", lon: 23.58528, lat: 42.17919, elevation: 2925, kind: "peak" },
  bbox: [23.10, 41.95, 23.95, 42.35],
  viewScale: 1.6,
  label: { lon: 23.550, lat: 42.390, rotation: 0 },
  source: "里拉山脉（Рила）：NSI《Statistical Reference Book 2025》第 14 页正文与表 4：保加利亚与巴尔干半岛最高的山是里拉山，最高峰穆萨拉 2,925 m（1 级，比较口径即 NSI 原文）；里拉国家公园 1992 年设立、1999 年改为国家公园，2024-07-19 第 РД-642 号令按实测更新面积为 77,956.44 ha（里拉国家公园管理局 rilanationalpark.bg 与 EEA-ZT，1 级；旧值 81,046.0 ha）；园内约 120 个湖、其中约 70 个冰川湖，湖水总量约 8,000 万 m³，冰川湖多在 1,900–2,600 m 的冰斗底部；最深的是奥科托湖（37.5 m）（管理局「湖泊」页，1 级）；主脊为主分水岭、核部以花岗岩为主（BGWIKI，3 级）。「东欧最高峰」不写；宗教场所与峰名词源不写（研究子代理事实表 2026-09-15）",
};

const SEVEN_RILA_LAKES: TerrainEntry = {
  id: "seven-rila-lakes",
  nameZh: "里拉七湖",
  nameEn: "Seven Rila Lakes",
  category: "lake",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "布利兹纳卡湖", lon: 23.31611, lat: 42.20082, elevation: 2243, kind: "lake" },
  bbox: [23.30, 42.19, 23.335, 42.215],
  label: { lon: 23.318, lat: 42.222, rotation: 0 },
  source: "里拉七湖（Седемте рилски езера）：里拉国家公园管理局「七湖」页（1 级）：自上而下萨尔扎塔 2,535 m / 0.7 ha / 深 4.5 m、奥科托 2,440 m / 6.8 ha / 深 37.5 m、巴布雷卡 2,282 m / 8.5 ha / 深 28 m、布利兹纳卡 2,243 m / 9.1 ha / 深 27.5 m（湖群中面积最大、干旱年份中间最窄处几乎干涸分成两个湖）、特里利斯特尼卡 2,216 m、里布诺 2,184 m、多尔诺 2,095 m；下湖汇集其余各湖之水、是杰尔曼河源头、杰尔曼河汇入斯特鲁马河；园区称密集旅游造成下三湖状况最差（管理方判断）。园区「巴尔干半岛最深冰斗湖」无比较方法，只写深度；宗教集会与传说不写；OSM 在索非亚有同名地物，坐标已核（研究子代理事实表 2026-09-15）",
};

const PIRIN_MOUNTAINS: TerrainEntry = {
  id: "pirin-mountains",
  nameZh: "皮林山脉",
  nameEn: "Pirin Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "维赫伦峰", lon: 23.39884, lat: 41.76733, elevation: 2914, kind: "peak" },
  bbox: [23.20, 41.43, 23.80, 41.93],
  axis: [[23.25, 41.90], [23.75, 41.45]],
  viewScale: 1.4,
  label: { lon: 23.500, lat: 41.960, rotation: 0 },
  source: "皮林山脉（Пирин）与皮林国家公园：维赫伦峰 2,914 m（NSI 表 4、UNESCO，1 级），在 NSI 表 4 中排第二、仅次于穆萨拉；1983 年列入世界遗产、2010 年扩展，遗产面积 38,350.04 ha，标准 (vii)(viii)(ix)，排除两处滑雪开发区；UNESCO 认定的地球科学价值是冰川地貌：冰斗、深谷与 70 多个冰川湖（UNESCO whc 225，1 级；UNESCO 英文写 limestone，园区与 parks.bg 写大理岩，正文用大理岩）；国家公园前身 1962 年设立的维赫伦人民公园、1999 年改为国家公园，现面积 40,370.54 ha（EEA-ZT，1 级）；地垒—断块高山，夹在斯特鲁马与梅斯塔两地堑谷之间，北皮林主脊北段为大理岩、南段为花岗岩（parks.bg，3 级）。「巴尔干第三高峰」「欧洲最古老山之一」不写；区域政治名称、滑雪开发争议不写（研究子代理事实表 2026-09-15）",
};

const RHODOPE_MOUNTAINS: TerrainEntry = {
  id: "rhodope-mountains",
  nameZh: "罗多彼山脉",
  nameEn: "Rhodope Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "戈利亚姆佩雷利克峰", lon: 24.57449, lat: 41.60272, elevation: 2191, kind: "peak" },
  bbox: [23.75, 41.35, 26.15, 42.15],
  viewScale: 2.0,
  label: { lon: 24.900, lat: 42.200, rotation: 0 },
  source: "罗多彼山脉保加利亚境内部分（Родопи）：最高峰戈利亚姆佩雷利克 2,191 m（NSI 表 4，1 级；BGWIKI 2,190.2 m）；分西罗多彼（高）与东罗多彼（低），北以陡坡落向上色雷斯平原（沿马里查断裂带），西北与里拉相连、西以梅斯塔河谷与皮林分开，全山平均海拔约 785 m、属中山，河网密而深切（BGWIKI，3 级）。只写境内，不写境内占比；族群、宗教、地名改名史、领土变化与峰顶设施一律不写；本条 1–2 级来源只有峰高（研究子代理事实表 2026-09-15）",
};

const VITOSHA: TerrainEntry = {
  id: "vitosha",
  nameZh: "维托沙山",
  nameEn: "Vitosha",
  category: "mountain_system",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "切尔尼峰", lon: 23.27934, lat: 42.56309, elevation: 2290, kind: "peak" },
  bbox: [23.12, 42.45, 23.40, 42.68],
  label: { lon: 23.260, lat: 42.700, rotation: 0 },
  source: "维托沙山（Витоша）与维托沙自然公园：最高峰切尔尼峰 2,290 m（NSI 表 4，1 级；BGWIKI 称地形图三角点实测 2,280.5 m、2,290 m 为文献流传数，两说并存）；自然公园依 1934-10-27 第 15422 号部长会议决定设立、现面积 27,079.11 ha（EEA-ZT，1 级）；山体近圆形，核部为巨大的二长岩侵入体，周围是晚白垩世火山岩；第四纪山顶处于冰缘气候带，形成石河、雪蚀洼地、岩屑坡，兹拉特尼特莫斯托韦（「金桥」）是面积最大的石河（BGWIKI，3 级）；斯特鲁马河发源于维托沙（BGWIKI，3 级）。「巴尔干第一个国家公园」「唯一穹状山」不写（研究子代理事实表 2026-09-15）",
};

const SREDNA_GORA: TerrainEntry = {
  id: "sredna-gora",
  nameZh: "斯雷德纳山",
  nameEn: "Sredna Gora",
  category: "mountain_system",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "博格丹峰", lon: 24.46151, lat: 42.60723, elevation: 1604, kind: "peak" },
  bbox: [23.45, 42.25, 26.55, 42.75],
  axis: [[23.50, 42.55], [26.50, 42.40]],
  viewScale: 1.9,
  label: { lon: 25.000, lat: 42.780, rotation: 0 },
  source: "斯雷德纳山（Средна гора；中文维基作「斯雷那山脉」）：最高峰博格丹峰 1,604 m（NSI 表 4，1 级）；西起伊斯克尔河谷、东到通贾河拐弯处，北接山前盆地（索非亚、卡尔洛沃、卡赞勒克等），南渐没入上色雷斯平原，分伊赫蒂曼、本部、萨尔内纳三段；由向北倒伏的背斜褶皱组成，核部为海西期花岗岩与古老变质岩（BGWIKI，3 级）。除峰高外无 1–2 级来源，正文不写长宽面积（研究子代理事实表 2026-09-15）",
};

const STRANDZHA: TerrainEntry = {
  id: "strandzha",
  nameZh: "斯特兰贾山",
  nameEn: "Strandzha",
  category: "mountain_system",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "帕皮亚峰", lon: 27.84673, lat: 42.11161, elevation: 505, kind: "peak" },
  bbox: [27.10, 41.95, 28.05, 42.40],
  viewScale: 1.4,
  label: { lon: 27.600, lat: 42.440, rotation: 0 },
  source: "斯特兰贾山保加利亚境内部分（Странджа）与斯特兰贾自然公园：NSI 表 4 列斯特兰贾最高峰 710 m（1 级；该峰在边界山脊上，正文不点峰名、只写境内最高约 710 m，锚点改用北部博斯纳岭上的帕皮亚峰 505 m，OSM）；自然公园依 1995-01-24 第 РД-30 号令设立，面积 116,054.21 ha（EEA-ZT，1 级，登记册注明数字边界正在更新）；低山，宽缓山岭之间是深切河谷；斯特兰贾复背斜核部为海西期花岗岩；气候受黑海强烈影响，森林为南欧克辛型，下层有斯特兰贾杜鹃等常绿灌木（BGWIKI，3 级）。南坡、界河、邻国城镇与近代起义史不写；「最大保护区」不写（研究子代理事实表 2026-09-15）",
};

const DANUBIAN_PLAIN: TerrainEntry = {
  id: "danubian-plain",
  nameZh: "多瑙河平原",
  nameEn: "Danubian Plain",
  category: "plain",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "普列文", lon: 24.6169, lat: 43.4132, elevation: 116, kind: "city" },
  bbox: [22.50, 43.00, 28.60, 44.20],
  viewScale: 2.3,
  label: { lon: 25.500, lat: 43.900, rotation: 0 },
  source: "多瑙河平原（Дунавска равнина，保加利亚北部）：面积约 31,523 km²、东西长约 500 km，以维特河与扬特拉河分西中东三段；地质上是默西亚地台，上覆更新世黄土与类黄土；典型地貌是平坦的河间台地、峡谷状与不对称河谷、沿多瑙河的冲积低地（BGWIKI，3 级；本条无 1–2 级来源，正文只写形态、不写面积长度）。与罗马尼亚侧 romanian-plain 属同一下多瑙平原的两岸、互相点名；北缘是界河多瑙河，只写「北临多瑙河」，不写对岸（研究子代理事实表 2026-09-15）",
};

const UPPER_THRACIAN_PLAIN: TerrainEntry = {
  id: "upper-thracian-plain",
  nameZh: "上色雷斯平原",
  nameEn: "Upper Thracian Plain",
  category: "plain",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "普罗夫迪夫", lon: 24.7415, lat: 42.1421, elevation: 172, kind: "city" },
  bbox: [24.00, 41.90, 26.30, 42.45],
  viewScale: 1.9,
  label: { lon: 25.100, lat: 42.500, rotation: 0 },
  source: "上色雷斯平原（Горнотракийска низина，也称马里查平原）：夹在斯雷德纳山（北）与罗多彼山（南）之间，以奇尔潘高地分为西部帕扎尔吉克—普罗夫迪夫原野与东部斯塔拉扎戈拉原野；是罗多彼与斯雷德纳山之间下陷的深地堑，南缘沿罗多彼山麓为马里查断裂带；第三纪时是湖盆；西部年降水不足 500 mm、农业依赖灌溉（BGWIKI，3 级；本条无 1–2 级来源，正文不写面积）。「最大低地」「地震最敏感」不写（研究子代理事实表 2026-09-15）",
};

const SOFIA_BASIN: TerrainEntry = {
  id: "sofia-basin",
  nameZh: "索非亚盆地",
  nameEn: "Sofia Basin",
  category: "basin",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "索非亚", lon: 23.3217, lat: 42.6979, elevation: 560, kind: "city" },
  bbox: [22.95, 42.55, 23.75, 42.90],
  axis: [[22.95, 42.85], [23.75, 42.55]],
  viewScale: 1.3,
  label: { lon: 23.350, lat: 42.940, rotation: 0 },
  source: "索非亚盆地（Софийска котловина）：北与东北是巴尔干山脉、西南是柳林山与维托沙、南与东南是斯雷德纳山伊赫蒂曼段；西北—东南走向，平均海拔约 550 m；地貌形成与索非亚地堑构造有关，盆底充填上新世砂与黏土并覆盖河流沉积，伊斯克尔河自南向北流过；断裂构造带来多处温泉；常有逆温（BGWIKI，3 级；本条无 1–2 级来源）。「最大山前盆地」不写（研究子代理事实表 2026-09-15）",
};

const KAZANLAK_VALLEY: TerrainEntry = {
  id: "kazanlak-valley",
  nameZh: "卡赞勒克盆地",
  nameEn: "Kazanlak Valley",
  category: "basin",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "卡赞勒克", lon: 25.3932, lat: 42.6187, elevation: 407, kind: "city" },
  bbox: [24.95, 42.50, 25.75, 42.72],
  axis: [[24.95, 42.62], [25.75, 42.60]],
  viewScale: 1.2,
  label: { lon: 25.350, lat: 42.760, rotation: 0 },
  source: "卡赞勒克盆地（Казанлъшка котловина，别名「玫瑰谷」）：北是巴尔干山脉、南是萨尔内纳斯雷德纳山；东西向长条，平均海拔约 350 m、向东倾斜；新近纪—第四纪下沉的构造洼地，由西边的谢伊诺沃地堑与东边的卡赞勒克地堑组成，西部多巴尔干河流冲积扇；通贾河自西向东纵贯（BGWIKI，3 级；本条无 1–2 级来源）。玫瑰种植面积与产量无来源，只写别名（研究子代理事实表 2026-09-15）",
};

const DOBRUDZHA_PLATEAU: TerrainEntry = {
  id: "dobrudzha-plateau",
  nameZh: "多布罗加台地",
  nameEn: "Dobrudzha Plateau",
  category: "plateau",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "多布里奇", lon: 27.8319, lat: 43.5622, elevation: 225, kind: "city" },
  bbox: [27.55, 43.30, 28.60, 43.78],
  viewScale: 1.3,
  label: { lon: 28.000, lat: 43.820, rotation: 0 },
  source: "多布罗加台地保加利亚东北部（Добруджанско плато）：位于多瑙河平原东段，向西渐过渡为更高的卢多戈里台地，东南在巴尔奇克、卡瓦尔纳一带陡降到海岸；海拔自东北 150–200 m 升到西南 300–350 m；由早白垩世与萨尔马特期近水平石灰岩、砂质泥灰岩构成，分水岭上覆厚层黄土，北部多干谷、河流水少；典型黑钙土、大部分为耕地（BGWIKI，3 级；本条无 1–2 级来源）。与罗马尼亚侧 dobrogea-plateau 互相点名；跨境延伸与归属史不写（研究子代理事实表 2026-09-15）",
};

const ISKAR_RIVER: TerrainEntry = {
  id: "iskar-river",
  nameZh: "伊斯克尔河",
  nameEn: "Iskar River",
  category: "river",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "拉卡特尼克岩（伊斯克尔峡谷）", lon: 23.3821, lat: 43.08871, elevation: 450, kind: "gorge" },
  bbox: [23.20, 42.10, 24.50, 43.75],
  axis: [[23.55, 42.15], [24.40, 43.70]],
  viewScale: 1.9,
  label: { lon: 23.900, lat: 43.400, rotation: 0 },
  source: "伊斯克尔河（Искър）：NSI《Statistical Reference Book 2025》第 14 页正文称保加利亚最长的河是伊斯克尔河，表 3 也列在境内主要河流第一（1 级）；河长 NSI 正文 368 km 与表 3 352.3 km 同一年鉴内部不一致，正文不写具体河长；发源于里拉山北麓，经萨莫科夫盆地、伊斯克尔水库、索非亚盆地，北切巴尔干山脉后汇入多瑙河（BGWIKI，3 级）；伊斯克尔峡谷长约 84 km，是典型的先成谷——河流在巴尔干山脉逐步抬升的同时下切，保留 6–7 级阶地；拉卡特尼克岩由近水平红色砂岩与石灰岩构成（BGWIKI，3 级）。峡谷内宗教设施与十字架史不写；锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const MARITSA_RIVER: TerrainEntry = {
  id: "maritsa-river",
  nameZh: "马里查河",
  nameEn: "Maritsa River",
  category: "river",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "帕扎尔吉克", lon: 24.3328, lat: 42.1935, elevation: 205, kind: "city" },
  bbox: [23.55, 41.70, 26.40, 42.35],
  axis: [[23.60, 42.20], [26.35, 41.80]],
  viewScale: 1.9,
  label: { lon: 24.900, lat: 42.000, rotation: 0 },
  source: "马里查河保加利亚段（Марица）：NSI 第 14 页称马里查河是保加利亚流量最大的河，表 3 境内长度 309.0 km（1 级；BGWIKI 321 km）；发源于里拉山的马里奇尼湖群（冰斗），上游在冰川谷里多急流，经莫米纳克利苏拉峡谷在别洛沃以下进入上色雷斯平原，在平原上贴近罗多彼山麓流动，河床宽、多沙洲与汊流（BGWIKI，3 级）。全长跨境口径、出境后流路、界河段与外语河名不写，只写「向东南流出国境」；锚点不用已是上色雷斯平原锚点的普罗夫迪夫（研究子代理事实表 2026-09-15）",
};

const STRUMA_RIVER: TerrainEntry = {
  id: "struma-river",
  nameZh: "斯特鲁马河",
  nameEn: "Struma River",
  category: "river",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "克雷斯纳峡谷", lon: 23.1553, lat: 41.78329, elevation: 222, kind: "gorge" },
  bbox: [22.90, 41.35, 23.35, 42.60],
  axis: [[23.20, 42.55], [23.20, 41.40]],
  viewScale: 1.7,
  label: { lon: 23.100, lat: 42.100, rotation: 0 },
  source: "斯特鲁马河保加利亚段（Струма）与克雷斯纳峡谷：境内长度 275.1 km（NSI 表 3，1 级；BGWIKI 290 km）；发源于维托沙山，先后穿过佩尔尼克、拉多米尔、丘斯滕迪尔、布拉戈耶夫格勒等盆地与其间峡谷，最后向南流出国境（BGWIKI，3 级）；克雷斯纳峡谷介于马莱舍夫斯卡山与皮林之间，叠置成因，深切于花岗岩与变质岩中（BGWIKI，3 级；峡谷长度两说不写）；「克雷斯纳峡谷」保护地 2008 年第 РД-56 号令设立、418.5 ha（EEA-ZT，1 级）；峡谷一带是地中海气候与中欧气候的过渡带（BGWIKI，3 级）。区域政治、近代起义纪念与公路线位争议不写（研究子代理事实表 2026-09-15）",
};

const TUNDZHA_RIVER: TerrainEntry = {
  id: "tundzha-river",
  nameZh: "通贾河",
  nameEn: "Tundzha River",
  category: "river",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "扬博尔", lon: 26.5038, lat: 42.4824, elevation: 114, kind: "city" },
  bbox: [24.85, 41.95, 26.75, 42.75],
  axis: [[24.90, 42.65], [26.60, 42.05]],
  viewScale: 1.8,
  label: { lon: 25.800, lat: 42.650, rotation: 0 },
  source: "通贾河保加利亚段（Тунджа；中文维基条目名「登萨河」，本库用常见音译「通贾河」）：境内长度 328.4 km（NSI 表 3，1 级；BGWIKI 349.5 km）；发源于巴尔干山脉卡洛费尔山，到卡洛费尔后折向东纵贯卡赞勒克盆地，经科普林卡水库与梅日德尼克峡谷内的兹雷布切沃水库，进入斯利文原野与扬博尔原野，下游多曲流、汊流与牛轭湖（BGWIKI，3 级）。界河段与汇口在境外，只写「向南流出国境」；除境内长度外无 1–2 级来源（研究子代理事实表 2026-09-15）",
};

const YANTRA_RIVER: TerrainEntry = {
  id: "yantra-river",
  nameZh: "扬特拉河",
  nameEn: "Yantra River",
  category: "river",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "大特尔诺沃峡谷段", lon: 25.6283, lat: 43.0787, elevation: 220, kind: "gorge" },
  bbox: [25.30, 42.85, 25.95, 43.65],
  axis: [[25.30, 42.90], [25.70, 43.60]],
  viewScale: 1.4,
  label: { lon: 25.650, lat: 43.350, rotation: 0 },
  source: "扬特拉河（Янтра）：发源于巴尔干山脉什普卡山北麓，经加布罗沃，在大特尔诺沃穿过特尔诺沃高地的峡谷，出峡后进入多瑙河平原，在平原上比降小、形成大曲流与牛轭湖，接纳最大支流罗西察河后继续北流（BGWIKI，3 级）；境内长度 NSI 表 3 为 222.0 km、BGWIKI 285.5 km，差距大、口径不明，正文不写河长；来源里大特尔诺沃城内一段是峡谷而非平原曲流，正文如实区分；「弯曲系数全国最大」不写（研究子代理事实表 2026-09-15）。锚点海拔为取景用概略值",
};

const BLACK_SEA_COAST_BG: TerrainEntry = {
  id: "black-sea-coast-bg",
  nameZh: "保加利亚黑海沿岸",
  nameEn: "Bulgarian Black Sea Coast",
  category: "coast",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "埃米内角", lon: 27.90071, lat: 42.70139, elevation: 60, kind: "escarpment" },
  bbox: [27.40, 41.95, 28.62, 43.75],
  viewScale: 1.7,
  label: { lon: 28.200, lat: 42.900, rotation: 0 },
  source: "保加利亚黑海沿岸（Българско Черноморие）：黑海海岸线长 378 km（NSI 表 1，来源 GCCA，1 级；BGWIKI 354 km 为另一量算口径）；巴尔干山脉在埃米内角没入黑海，把海岸大致分成北段岩岸多、南段沙滩宽长；北段为多布罗加台地东缘，岸坡由红色萨尔马特期石灰岩与砾岩构成（BGWIKI，3 级）；埃米内角 1976 年设为自然地标（EEA-ZT，1 级），崖高约 60 m（BGWIKI，3 级）。与罗马尼亚侧 black-sea-coast-ro 互相点名；两端边界点、领海、岛屿不写（研究子代理事实表 2026-09-15）",
};

const CAPE_KALIAKRA: TerrainEntry = {
  id: "cape-kaliakra",
  nameZh: "卡利阿克拉角",
  nameEn: "Cape Kaliakra",
  category: "coast",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "卡利阿克拉角", lon: 28.46522, lat: 43.36037, elevation: 60, kind: "escarpment" },
  bbox: [28.43, 43.34, 28.48, 43.38],
  label: { lon: 28.455, lat: 43.390, rotation: 0 },
  source: "卡利阿克拉角（нос Калиакра）：「卡利阿克拉」保护区依 1941-09-27 第 16298 号部长会议决定设立、现面积 712.81 ha，设立目的是保护沿海海洋生态系统、典型草原植被与珍稀鸟类的崖壁巢穴（EEA-ZT，1 级）；岬角是多布罗加台地东南部一条长而窄的半岛、伸入海中约 2 km，海崖近乎垂直、高约 70 m，由坚硬的萨尔马特期石灰岩与富含铁氧化物黏土胶结的砾岩构成、呈红色，崖脚有浪蚀洞与海蚀拱（BGWIKI，3 级）。军事设施、海战纪念、传说与归属史一律不写；锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const BURGAS_LAKES: TerrainEntry = {
  id: "burgas-lakes",
  nameZh: "布尔加斯湖群",
  nameEn: "Burgas Lakes",
  category: "lake",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "布尔加斯湖（瓦亚湖）", lon: 27.39856, lat: 42.49543, elevation: 0, kind: "lake" },
  bbox: [27.25, 42.40, 27.70, 42.62],
  viewScale: 1.2,
  label: { lon: 27.450, lat: 42.650, rotation: 0 },
  source: "布尔加斯湖群（Бургаски езера）：NSI 表 3 境内主要天然湖泊面积：布尔加斯湖 27.6 km²（表中面积第一）、阿塔纳索夫斯科湖 16.9 km²、曼德拉湖 10.0 km²、波莫里耶湖 5.0 km²（不含盐田）（1 级，来源 GCCA）；「瓦亚」保护地 1997 年设立、379.44 ha、拉姆萨尔湿地；「阿塔纳索夫斯科湖」维护型保护区 1980 年设立、1,040.82 ha；「波莫里耶湖」保护地 2001 年设立、760.83 ha、拉姆萨尔湿地，设立目的包括保护盐田（EEA-ZT，1 级）；布尔加斯湖是浅水溺谷湖、以沙嘴与海隔开、经带闸运河与海相连；波莫里耶湖盐度 60–80‰、用于晒盐与取疗养泥；曼德拉湖 1963 年筑坝大部分变成淡水水库（BGWIKI，3 级）。形成年代 BGWIKI 自相矛盾不写（研究子代理事实表 2026-09-15）",
};

const SREBARNA_LAKE: TerrainEntry = {
  id: "srebarna-lake",
  nameZh: "斯雷伯尔纳湖",
  nameEn: "Srebarna Lake",
  category: "lake",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "斯雷伯尔纳湖", lon: 27.07354, lat: 44.11096, elevation: 10, kind: "lake" },
  bbox: [27.05, 44.09, 27.10, 44.13],
  label: { lon: 27.075, lat: 44.140, rotation: 0 },
  source: "斯雷伯尔纳湖（Сребърна）：1983 年列入世界遗产（标准 x），遗产面积 638 ha、缓冲区 673 ha，1992–2003 年在濒危世界遗产名录上；UNESCO 称它是沿多瑙河沼泽带被排干后留下的最大的湖，1949 年修堤后与多瑙河断开、1994 年修渠恢复春季进水，是保加利亚第一个获得法律保护的湿地（1948 年），约 99 种鸟在此繁殖、约 80 种候鸟季节性停留，是保加利亚唯一的卷羽鹈鹕繁殖群所在地（UNESCO whc 219，1 级）；维护型保护区依 1948 年部长会议决定设立、1993 年扩大、现面积 892.05 ha（EEA-ZT，1 级）；水深 1–3 m（BGWIKI，3 级）。三个面积口径正文带口径；归属史与对岸保护区不写（研究子代理事实表 2026-09-15）",
};

const BELOGRADCHIK_ROCKS: TerrainEntry = {
  id: "belogradchik-rocks",
  nameZh: "贝洛格拉奇克岩",
  nameEn: "Belogradchik Rocks",
  category: "hills",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "贝洛格拉奇克岩", lon: 22.6796, lat: 43.6116, elevation: 500, kind: "escarpment" },
  bbox: [22.55, 43.52, 22.85, 43.70],
  label: { lon: 22.690, lat: 43.730, rotation: 0 },
  source: "贝洛格拉奇克岩（Белоградчишки скали）：自然地标，依 1949-01-27 第 998 号部长会议决定设立，1987、2012 年两次扩大，现面积 652.36 ha，设立目的「保护岩石形态」（EEA-ZT，1 级）；位于西前巴尔干、沿贝洛格拉奇克断裂分布，由杂色三叠纪砂岩与砾岩构成，破碎程度不同的岩层长期风化形成塔柱与岩壁，红色来自铁的氧化物（BGWIKI，3 级；岩体高度与年代只有 3 级）。要塞与传说不写；锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const MELNIK_PYRAMIDS: TerrainEntry = {
  id: "melnik-pyramids",
  nameZh: "梅尔尼克砂岩塔林",
  nameEn: "Melnik Pyramids",
  category: "hills",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "梅尔尼克砂岩塔林", lon: 23.4127, lat: 41.53165, elevation: 450, kind: "escarpment" },
  bbox: [23.33, 41.48, 23.47, 41.56],
  label: { lon: 23.400, lat: 41.580, rotation: 0 },
  source: "梅尔尼克砂岩塔林（Мелнишки пирамиди）：自然地标，依 1960-12-14 第 2607 号令设立，1978 年扩大、2023 年缩小，现面积 1,164.52 ha，覆盖梅尔尼克镇与周边几个村，设立目的「保护独特而典型的地形特征」（EEA-ZT，1 级）；位于皮林山西南麓，外营力在厚层上新世沉积物中塑造出塔柱，坡面为砂质、局部近乎直立，仍在风化中、外形持续变化（BGWIKI，3 级；最高约 100 m 只有 3 级）。中世纪史与修道院不写；锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const TRIGRAD_GORGE: TerrainEntry = {
  id: "trigrad-gorge",
  nameZh: "特里格拉德峡谷",
  nameEn: "Trigrad Gorge",
  category: "gorge",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "魔喉洞洞口", lon: 24.37913, lat: 41.61488, elevation: 1180, kind: "gorge" },
  bbox: [24.36, 41.58, 24.42, 41.66],
  label: { lon: 24.390, lat: 41.680, rotation: 0 },
  source: "特里格拉德峡谷（Триградско ждрело）与魔喉洞：保护地依 1963-12-06 第 4021 号令设立，现面积 710.57 ha，设立目的是保护罗多彼特有植物（EEA-ZT，1 级）；位于西罗多彼，是特里格拉德河上的叠置成因峡谷，切在强烈喀斯特化的古老大理岩中，峡谷两壁高数百米；在特里格拉德村以北约 1.5 km 处河水钻进魔喉洞，在地下流一段后以大型喀斯特泉重新出露；魔喉洞主厅内有地下瀑布（BGWIKI，3 级）。「巴尔干最高地下瀑布」等名次不写；族群、宗教与名称起源传说不写（研究子代理事实表 2026-09-15）",
};

const POBITI_KAMANI: TerrainEntry = {
  id: "pobiti-kamani",
  nameZh: "波比蒂·卡马尼石林",
  nameEn: "Pobiti Kamani (Stone Forest)",
  category: "hills",
  regionId: "europe",
  country: "bulgaria",
  landmark: { name: "石林中央群", lon: 27.70652, lat: 43.22604, elevation: 60, kind: "escarpment" },
  bbox: [27.65, 43.19, 27.85, 43.27],
  label: { lon: 27.750, lat: 43.300, rotation: 0 },
  source: "波比蒂·卡马尼（Побити камъни，「石林」）：保护地依 1995-07-17 第 РД-258 号令设立、2002 年改为「保护地」类别、面积 253.3 ha（EEA-ZT，1 级）；在瓦尔纳以西约 18 km，分若干群；岩柱为石灰岩、高多在 5–7 m、没有坚硬基座、内部中空充填砂，所以像是被打进沙里；地层时代为早始新世；成因有多种假说——有机成因、无机成因，近年研究认为它记录了一个古代烃类渗漏系统（BGWIKI，3 级；正文并列多说）。「第一个自然地标」与登记册年份冲突不写；旧名与战争记述不写；锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 保加利亚 =====
  BALKAN_MOUNTAINS, CENTRAL_BALKAN, RILA_MOUNTAINS, SEVEN_RILA_LAKES,
  PIRIN_MOUNTAINS, RHODOPE_MOUNTAINS, VITOSHA, SREDNA_GORA,
  STRANDZHA, DANUBIAN_PLAIN, UPPER_THRACIAN_PLAIN, SOFIA_BASIN,
  KAZANLAK_VALLEY, DOBRUDZHA_PLATEAU, ISKAR_RIVER, MARITSA_RIVER,
  STRUMA_RIVER, TUNDZHA_RIVER, YANTRA_RIVER, BLACK_SEA_COAST_BG,
  CAPE_KALIAKRA, BURGAS_LAKES, SREBARNA_LAKE, BELOGRADCHIK_ROCKS,
  MELNIK_PYRAMIDS, TRIGRAD_GORGE, POBITI_KAMANI,
];
