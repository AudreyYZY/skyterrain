import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 拉脱维亚（北欧次区域；联合国 M49 归北欧）
// 零争议红线：东部与南部高地、道加瓦河、德里济斯湖只写「国土东部 / 东南部」，不写邻国与界线；
// 道加瓦河只写境内河段，发源地只说「发源于境外」；普拉维尼亚斯水电站只写工程事实与年份，
// 被淹没的河崖不点名；斯利泰雷海岸不写族群与封闭边境区；西库尔萨高地最高点用并用名 Radiņkalns。
// history 段只写地质史、保护地设立年份、UNESCO 与广泛记载的前现代史。
// 骨架：东半部是冰川「岛状」堆积高地（维泽梅 / 阿卢克斯内 / 拉特加莱），东南是边缘型的奥格什泽梅高地，
// 西部是基岩高地（西库尔萨），高地之间是东拉脱维亚低地与泽姆加莱平原，沿海是滨海低地；
// 几条大河沿基岩古河谷流动（高亚 / 道加瓦 / 阿巴瓦）。
// 冰川高地→`hills`、低地 / 平原 / 高位沼泽→`plain`、海岸与海崖→`coast`、古河谷与深切曲流→`valley`、
// 跌水→`gorge`、湖→`lake`、河→`river`。
// 主要来源：拉脱维亚国家百科 enciklopedija.lv（2 级，条目作者为拉脱维亚大学地理学者）、
// 自然保护局 tiekamiesdaba.lv（1 级）、UNESCO；事实由研究子代理出带分级来源的事实表（2026-09-15），
// 数字冲突时写区间、并列或不写。锚点海拔未查到实测值的，为取景用概略值（注明）。
// ============================================================

const VIDZEME_UPLAND: TerrainEntry = {
  id: "vidzeme-upland",
  nameZh: "维泽梅高地",
  nameEn: "Vidzeme Upland",
  category: "hills",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "盖津卡尔恩斯山（Gaiziņkalns）", lon: 25.9594, lat: 56.8700, elevation: 312, kind: "peak" },
  bbox: [25.20, 56.65, 26.50, 57.45],
  viewScale: 1.3,
  label: { lon: 25.850, lat: 57.480, rotation: 0 },
  source: "维泽梅高地（Vidzemes augstiene）：拉脱维亚中东部的冰川「岛状」构造—堆积高地；全国最高点盖津卡尔恩斯山在其维斯泰纳丘陵区，311.94 m（ENC-自然地理表与 OSM；ENC 正文 311.9 m、LVWIKI 正文 311.5 m）；第四纪沉积维斯泰纳一带厚 170–210 m（ENC-地貌）；100 km² 网格内高差可达 160 m 的区域在高地西北部与东南部（ENC-地貌）；维斯泰纳保护景观区 1977 年设立、27,114 ha（自然保护局 tiekamiesdaba.lv 1 级）；面积 4,772 km² 只有 LVWIKI（3 级，正文不写）（研究子代理事实表 2026-09-15）",
};

const LATGALE_UPLAND: TerrainEntry = {
  id: "latgale-upland",
  nameZh: "拉特加莱高地",
  nameEn: "Latgale Upland",
  category: "hills",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "大利耶普卡尔恩斯山（Lielais Liepukalns）", lon: 27.6544, lat: 56.2708, elevation: 289, kind: "peak" },
  bbox: [26.80, 55.85, 28.10, 56.75],
  viewScale: 1.3,
  label: { lon: 27.450, lat: 56.800, rotation: 0 },
  source: "拉特加莱高地（Latgales augstiene）：国土东南部的冰川「岛状」堆积高地；最高点大利耶普卡尔恩斯山 289.2 m，属拉兹纳瓦丘陵区（ENC-自然地理 2 级、OSM）；全国面积 >1 ha 的 2,256 个湖泊中 43% 在本高地、36% 在维泽梅高地（ENC-内陆水 2 级）；拉兹纳国家公园 2007 年设立、59,615 ha，园内有拉兹纳湖、叶泽湖（岛屿超过 33 个，自然保护局页面；2026-09-15 核实改正）、马孔卡尔恩斯山（248 m），大利耶普卡尔恩斯山顶有 34 m 木制观景塔（tiekamiesdaba.lv 1 级）。名次两说（DAP 第三 / ENC 表第五），正文不写名次（研究子代理事实表 2026-09-15）",
};

const ALUKSNE_UPLAND: TerrainEntry = {
  id: "aluksne-upland",
  nameZh: "阿卢克斯内高地",
  nameEn: "Alūksne Upland",
  category: "hills",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "德林卡尔恩斯山（Dēliņkalns）", lon: 26.9434, lat: 57.5424, elevation: 272, kind: "peak" },
  bbox: [26.30, 57.05, 27.50, 57.85],
  viewScale: 1.2,
  label: { lon: 26.900, lat: 57.880, rotation: 0 },
  source: "阿卢克斯内高地（Alūksnes augstiene）：国土东北部的冰川「岛状」堆积高地；最高点德林卡尔恩斯山 271.6 m（ENC-自然地理、OSM；DAP 271.5 m、LVWIKI 271 m），属韦茨莱采内丘陵区；阿卢克斯内湖水面 15.44 km²、水面海拔 183.7 m（ENC-内陆水湖泊表 2 级）；韦茨莱采内保护景观区 1977 年设立、20,846 ha、区内 11 个湖（tiekamiesdaba.lv 1 级）；高亚河与道加瓦河流域分水岭、北端与爱沙尼亚哈尼亚高地（haanja-upland）相连（LVWIKI 3 级）（研究子代理事实表 2026-09-15）",
};

const AUGSZEME_UPLAND: TerrainEntry = {
  id: "augszeme-upland",
  nameZh: "奥格什泽梅高地",
  nameEn: "Augšzeme Upland",
  category: "hills",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "叶格卢卡尔恩斯山（Egļukalns）", lon: 26.3266, lat: 55.8732, elevation: 221, kind: "peak" },
  bbox: [25.60, 55.67, 26.80, 56.20],
  viewScale: 1.2,
  label: { lon: 26.200, lat: 56.230, rotation: 0 },
  source: "奥格什泽梅高地（Augšzemes augstiene）：国土东南部，ENC 地貌分类里唯一的「边缘型高地」，与波罗的海主终碛带相连，以冰舌间丘岭群与终碛岭为主（ENC-地貌 2 级）；最高点叶格卢卡尔恩斯山 220.6 m，属伊卢克斯泰丘陵区（ENC-自然地理 2 级、OSM）；Kaldabruņa 终碛岭长 25 km（LVWIKI 3 级）。保护景观区设立年份只有 3 级来源，正文不写（研究子代理事实表 2026-09-15）",
};

const WEST_KURSA_UPLAND: TerrainEntry = {
  id: "west-kursa-upland",
  nameZh: "西库尔萨高地",
  nameEn: "West Kursa Upland",
  category: "hills",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "拉丁卡尔恩斯山（Radiņkalns）", lon: 21.7818, lat: 56.4867, elevation: 190, kind: "peak" },
  bbox: [21.30, 56.30, 22.20, 57.00],
  viewScale: 1.2,
  label: { lon: 21.750, lat: 57.030, rotation: 0 },
  source: "西库尔萨高地（Rietumkursas augstiene）：拉脱维亚西部的「岛状侵蚀—堆积高地」（基岩高地），冰期时处在冰盖斜坡上、侵蚀强于沉积，丘陵区冰碛厚 60–80 m、平原区 10–40 m（ENC-地貌 2 级）；最高点 190.2 m（ENC-自然地理、OSM；LVWIKI 189.5 m），属恩布泰丘陵区，锚点用 ENC 给出的并用名 Radiņkalns；全国年径流深最大（380 mm）的区域是西库尔萨高地与维泽梅高地（ENC-内陆水 2 级）（研究子代理事实表 2026-09-15）",
};

const EAST_LATVIAN_LOWLAND: TerrainEntry = {
  id: "east-latvian-lowland",
  nameZh: "东拉脱维亚低地",
  nameEn: "East Latvian Lowland",
  category: "plain",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "卢班斯平原中部", lon: 26.60, lat: 56.70, elevation: 95, kind: "escarpment" },
  bbox: [25.90, 56.20, 27.40, 57.30],
  viewScale: 1.5,
  label: { lon: 26.650, lat: 57.330, rotation: 0 },
  source: "东拉脱维亚低地（Austrumlatvijas zemiene）：维泽梅高地与拉特加莱高地之间的冰川低地；ENC 地貌分类里唯一的「顺向低地」，占据一个槽形基岩洼地，有大片冰川槽纹地与线状刻槽地；马多纳—特雷佩冰碛垄相对高 64–72 m，标出冰川消退时卢班斯冰舌边缘（ENC-地貌 2 级）；全国第四纪沉积厚度从几十厘米到 314 m 不等（ENC-自然地理 2 级；LVWIKI 把 314 m 定位在本低地，3 级，正文不写位置）。锚点为卢班斯湖以西的概略点、海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const ZEMGALE_PLAIN: TerrainEntry = {
  id: "zemgale-plain",
  nameZh: "泽姆加莱平原",
  nameEn: "Zemgale Plain",
  category: "plain",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "叶尔加瓦", lon: 23.729, lat: 56.652, elevation: 5, kind: "city" },
  bbox: [23.00, 56.25, 24.40, 56.75],
  viewScale: 1.4,
  label: { lon: 23.700, lat: 56.780, rotation: 0 },
  source: "泽姆加莱平原（Zemgales līdzenums）：中拉脱维亚低地的南部；泽姆加莱鼓丘群与布尔特涅克斯、瓦达克斯泰鼓丘群并列为拉脱维亚最大的鼓丘群（ENC-地貌 2 级）；全国年径流深最小（160 mm）的地方（ENC-内陆水 2 级）；因土壤肥沃有「拉脱维亚粮仓」之称（ENC-泽姆加莱 2 级）；地表向北倾斜、基岩为上泥盆统白云岩、覆盖层多约 20 m（LVWIKI 3 级）。锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const GULF_OF_RIGA_COAST: TerrainEntry = {
  id: "gulf-of-riga-coast",
  nameZh: "里加湾沿岸",
  nameEn: "Gulf of Riga Coast",
  category: "coast",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "尤尔马拉海滩", lon: 23.8054, lat: 56.9731, elevation: 2, kind: "escarpment" },
  bbox: [22.60, 56.95, 24.45, 57.88],
  viewScale: 1.5,
  label: { lon: 23.500, lat: 57.300, rotation: 0 },
  source: "里加湾沿岸与滨海低地（Rīgas līča piekraste; Piejūras zemiene）：拉脱维亚海岸线总长 497 km，其中开阔波罗的海岸 183 km、伊尔贝海峡岸 70 km、里加湾岸 234 km；里加湾中部最深约 60 m、水体积 424 km³、盐度 3–7‰；侵蚀段 150 km、堆积段 140 km、稳定段 200 km，岸高一般不超过 5 m；利托里纳海时期堆出多段沙质潟湖障壁，约 2,800 年前海平面稳定在接近今天的位置；风暴增水在里加湾岸可达 2.0–2.5 m，天文潮差只有 0.03–0.1 m（ENC-海岸 2 级）（研究子代理事实表 2026-09-15）",
};

const SLITERE_KOLKA: TerrainEntry = {
  id: "slitere-kolka",
  nameZh: "斯利泰雷与科尔卡角",
  nameEn: "Slītere and Cape Kolka",
  category: "coast",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "科尔卡角（Kolkasrags）", lon: 22.6048, lat: 57.7589, elevation: 1, kind: "escarpment" },
  bbox: [22.19, 57.61, 22.61, 57.76],
  label: { lon: 22.400, lat: 57.800, rotation: 0 },
  source: "斯利泰雷国家公园（Slīteres nacionālais parks）与科尔卡角：国家公园 2000 年由原斯利泰雷国家保护区改名设立、16,414 ha，核心区 1923 年以约 1,100 ha 的自然纪念地受保护；「蓝山」（Zilie kalni）是波罗的冰湖时期的古岸崖，DAP 写高 30–50 m（LVWIKI 最高 42.5 m、长约 20 km）；园内是古沙丘垄（kangari）与狭长沼泽洼地（vigas）交替的地貌；科尔卡角是波罗的海与里加湾的分界（tiekamiesdaba.lv 1 级、ENC-海岸 2 级）；科尔卡灯塔建在人工岛上、1884 年落成（LVWIKI 3 级，正文不写）（研究子代理事实表 2026-09-15）",
};

const JURKALNE_CLIFFS: TerrainEntry = {
  id: "jurkalne-cliffs",
  nameZh: "于尔卡尔内海崖",
  nameEn: "Jūrkalne Bluffs",
  category: "coast",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "于尔卡尔内", lon: 21.3869, lat: 57.0061, elevation: 20, kind: "escarpment" },
  bbox: [21.15, 56.88, 21.45, 57.10],
  label: { lon: 21.330, lat: 57.120, rotation: 0 },
  source: "于尔卡尔内海崖（Jūrkalnes stāvkrasts）：拉脱维亚西部开阔波罗的海岸的现代海蚀崖；全国海崖段岸高可达 15–20 m、缺少细粒泥沙的岸段后退 0.5–2.0 m/年（ENC-海岸 2 级，泛指全国海崖）；于尔卡尔内一带崖高可达 20 m、帕维洛斯塔以北至萨尔纳泰约 24 km 连续崖段、被小河谷与冲沟切开（库尔泽梅旅游协会 kurzeme.lv、redzet.lv，均 3 级）。本条缺 1–2 级专门数字，正文只写「高可达约二十米」并注明为地方旅游资料口径；「全国最高海崖」不写（研究子代理事实表 2026-09-15）。锚点海拔为崖顶概略值",
};

const VIDZEME_ROCKY_COAST: TerrainEntry = {
  id: "vidzeme-rocky-coast",
  nameZh: "维泽梅石质海岸",
  nameEn: "Vidzeme Rocky Seashore",
  category: "coast",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "韦茨泽米红崖（Veczemju klintis）", lon: 24.3687, lat: 57.5837, elevation: 5, kind: "escarpment" },
  bbox: [24.34, 57.49, 24.41, 57.61],
  label: { lon: 24.380, lat: 57.630, rotation: 0 },
  source: "维泽梅石质海岸（Vidzemes akmeņainā jūrmala）：里加湾东岸北段；自然保护区 1957 年设立、1,517 ha，全部位于北维泽梅生物圈保护区内；韦茨泽米红崖高约 3.5–6 m（daba.gov.lv 地质自然纪念地登记 1 级；2026-09-15 核实改正，原写 5–7 m），由约 3.5–3.8 亿年前的中泥盆世砂岩与泥岩构成（tiekamiesdaba.lv 1 级原文区间），有浪蚀洞、龛与岩柱（tiekamiesdaba.lv 1 级）；图亚—韦茨泽米 12 km 海岸上风暴浪在中泥盆统布尔特涅基组砂岩里掏出的浪蚀洞多数只存在几个月到几年（ENC-洞穴 2 级）；北维泽梅生物圈保护区 1997 年设立并列入 UNESCO「人与生物圈」网络、475,514 ha（tiekamiesdaba.lv 1 级）（研究子代理事实表 2026-09-15）",
};

const KEMERI_BOG: TerrainEntry = {
  id: "kemeri-bog",
  nameZh: "凯梅里大沼泽",
  nameEn: "Great Ķemeri Bog",
  category: "plain",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "凯梅里沼泽栈道", lon: 23.4600, lat: 56.9097, elevation: 10, kind: "escarpment" },
  bbox: [23.25, 56.79, 23.63, 57.05],
  label: { lon: 23.440, lat: 57.070, rotation: 0 },
  source: "凯梅里大沼泽（Lielais Ķemeru tīrelis）：凯梅里国家公园 1997 年设立、36,180 ha；大沼泽面积超过 6,000 ha、年龄估计约 8,000 年，公园一带有 30 多处硫磺泉（tiekamiesdaba.lv 1 级）；按泥炭资源库数据面积 6,192 ha，是国家公园内最大的沼泽，泥炭开阔区平均厚约 4.8 m、最厚 8 m；古波罗的海水位下降后露出的内陆沙丘列与浅潟湖挡住地表水入海，沙质平原上发育出高位沼泽（ENC-凯梅里沼泽 2 级）（研究子代理事实表 2026-09-15）。锚点海拔为取景用概略值",
};

const TEICI_BOG: TerrainEntry = {
  id: "teici-bog",
  nameZh: "泰伊奇沼泽",
  nameEn: "Teiči Bog",
  category: "plain",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "泰伊奇沼泽", lon: 26.4576, lat: 56.6129, elevation: 100, kind: "escarpment" },
  bbox: [26.27, 56.53, 26.61, 56.70],
  label: { lon: 26.440, lat: 56.720, rotation: 0 },
  source: "泰伊奇沼泽群（Teiču purvs）：东拉脱维亚低地耶尔西卡平原上的穹状高位沼泽群，面积 14,473 ha，1982 年起划入泰伊奇自然保护区；是卢班斯湖、艾维埃克斯泰河与道加瓦河之间的分水岭；分出 5 个穹顶、相对高 5–7 m，泥炭平均厚 4.1 m、最厚 9.5 m；次生湖是近 3,000–2,000 年间泥炭层滑移破裂形成的，大于 2 ha 的 18 个、最大的库尔塔瓦湖 74 ha（ENC-泰伊奇 2 级）；拉姆萨尔湿地「泰伊奇与佩莱查雷沼泽综合体」24,000 ha（ENC-自然保护 2 级）。面积另有 19,587 ha（LVWIKI「沼泽」口径），与保护区、拉姆萨尔湿地是不同口径，正文只用 ENC 沼泽群口径（研究子代理事实表 2026-09-15）。锚点海拔为取景用概略值",
};

const GAUJA_VALLEY: TerrainEntry = {
  id: "gauja-valley",
  nameZh: "高亚河古河谷",
  nameEn: "Gauja Ancient Valley",
  category: "valley",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "古特马纳洞（Gūtmaņala）", lon: 24.8423, lat: 57.1759, elevation: 40, kind: "gorge" },
  bbox: [24.65, 57.08, 25.50, 57.52],
  axis: [[25.45, 57.48], [24.72, 57.12]],
  viewScale: 1.3,
  label: { lon: 25.100, lat: 57.550, rotation: 0 },
  source: "高亚河古河谷（Gaujas senieleja）与高亚国家公园：国家公园 1973 年设立，是拉脱维亚第一个国家公园，面积 91,786 ha（tiekamiesdaba.lv 1 级；LVWIKI 91,745 ha）；河谷岩层为 3.7–3.8 亿年的泥盆纪砂岩，河谷在末次冰期后由冰融水冲刷定型；古特马纳洞壁最早的刻字可追溯到 16 世纪，锡古尔达一带 19 世纪得名「维泽梅的瑞士」（tiekamiesdaba.lv 1 级）；拉脱维亚 76 个较大洞穴中 55 个在高亚古河谷及其支谷谷坡上（ENC-洞穴 2 级，表注来源 DAP 2025）；高亚、道加瓦、阿巴瓦沿基岩古河谷流动（ENC-自然地理 2 级）；锡古尔达段深超过 85 m 只有 LVWIKI（3 级），正文不写具体深度。锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const ABAVA_VALLEY: TerrainEntry = {
  id: "abava-valley",
  nameZh: "阿巴瓦河古河谷",
  nameEn: "Abava Ancient Valley",
  category: "valley",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "阿巴瓦跌水（Abavas rumba）", lon: 22.5269, lat: 57.0707, elevation: 30, kind: "gorge" },
  bbox: [22.00, 56.95, 22.95, 57.15],
  axis: [[22.90, 57.00], [22.05, 57.12]],
  viewScale: 1.2,
  label: { lon: 22.500, lat: 57.180, rotation: 0 },
  source: "阿巴瓦古河谷（Abavas senleja）：自然地理单元面积 236 km²，主轴阿巴瓦—斯洛采内古河谷长约 60 km、西北西—东南东走向，把东库尔萨高地分成南北两半；古河谷是在前第四纪基岩里切出的 30–58 m 深的侵蚀槽，谷底谷坡出露多个上泥盆统地层；阿巴瓦跌水是一级碳酸盐岩台坎（ENC-阿巴瓦 2 级）；阿巴瓦古河谷自然公园 1957 年设立、14,858 ha，有魔鬼洞与玛拉洞群等泥盆纪岩层出露，坎达瓦、萨比莱两座古城在谷中（tiekamiesdaba.lv 1 级）；阿巴瓦河长 129 km（ENC-内陆水表）/ 134 km（LVWIKI），正文不写（研究子代理事实表 2026-09-15）。锚点海拔为取景用概略值",
};

const DAUGAVAS_LOKI: TerrainEntry = {
  id: "daugavas-loki",
  nameZh: "道加瓦河曲流",
  nameEn: "Daugava Bends",
  category: "valley",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "瓦萨尔格利什基观景塔（罗扎利什基曲流）", lon: 26.8153, lat: 55.9149, elevation: 130, kind: "meander" },
  bbox: [26.70, 55.87, 27.15, 55.92],
  label: { lon: 26.930, lat: 55.960, rotation: 0 },
  source: "道加瓦河曲流（Daugavas loki）：自然公园 1990 年设立、12,561 ha，园内 8 个大曲流各长 4–6 km，2011 年列入 UNESCO 世界遗产拉脱维亚国家预备清单（不是正式世界遗产），罗扎利什基曲流的景色曾印在 10 拉特纸币上（tiekamiesdaba.lv 1 级）；道加瓦河在上道加瓦洼地（拉特加莱高地与奥格什泽梅高地之间）的河段谷宽 2.0–4.5 km、深 35–45 m，由 10 个大深切曲流组成（按整个河段计，与自然公园范围内的 8 个口径不同），曲颈最窄处只有 2–3 km；韦尔韦里崖与斯卢蒂什基崖都高约 42 m（ENC-道加瓦 2 级）。锚点海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const VENTA_RAPID: TerrainEntry = {
  id: "venta-rapid",
  nameZh: "文塔瀑布",
  nameEn: "Venta Rapid",
  category: "gorge",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "文塔瀑布（Ventas rumba）", lon: 21.9792, lat: 56.9680, elevation: 15, kind: "gorge" },
  bbox: [21.87, 56.93, 22.04, 57.10],
  label: { lon: 21.960, lat: 57.120, rotation: 0 },
  source: "文塔瀑布（Ventas rumba）：库尔迪加的河道宽幅跌水；「文塔河谷」自然保护区 1957 年设立、2,505 ha，2004 年起属 Natura 2000，DAP 写宽 249 m 并称「欧洲最宽的瀑布」（tiekamiesdaba.lv 1 级，未说明比较口径与水位，正文不写最高级）；LVWIKI 写平时宽约 100–110 m、汛期可达约 270 m、落差 1.6–2.2 m（3 级）；2023 年「库尔迪加老城」列入世界遗产，遗产范围包括文塔河与阿列克舒皮特溪交汇处及文塔瀑布，UNESCO 称瀑布对库尔迪加发展成贸易中心至关重要（UNESCO whc 1658，1 级）。宽度两说并列（研究子代理事实表 2026-09-15）。锚点海拔为取景用概略值",
};

const LAKE_LUBANS: TerrainEntry = {
  id: "lake-lubans",
  nameZh: "卢班斯湖",
  nameEn: "Lake Lubāns",
  category: "lake",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "卢班斯湖", lon: 26.8635, lat: 56.7647, elevation: 92, kind: "lake" },
  bbox: [26.76, 56.71, 26.94, 56.82],
  label: { lon: 26.850, lat: 56.840, rotation: 0 },
  source: "卢班斯湖（Lubāns）：按 ENC 湖泊表的水面面积是拉脱维亚最大的湖，水面 80.70 km²（含岛 82.10 km²）、水体积 1.28 亿 m³、水面海拔 92.5 m（ENC-内陆水湖泊表，出自《Latvijas daba》+ LĢIA 2017，2 级）；最深 2.5 m、平均深 1.6 m，出水口艾维埃克斯泰河，湖岸有 36 km 堤坝；面积随水位在 66.96–95.53 km² 之间变化，闸控水位 92.0–92.5 m，今天的湖面约为冰期末古卢班斯湖的三分之一（ENC-卢班斯 2 级）；「卢班斯湿地」自然保护区 2009 年由 12 个保护区合并设立、51,344 ha（tiekamiesdaba.lv 1 级）；拉姆萨尔湿地 47,902 ha（ENC-自然保护）。流域 2,180 / 2,040 km² 两说，正文不写；「欧洲最大的筑堤湖」无比较口径，正文不写（研究子代理事实表 2026-09-15）",
};

const LAKE_RAZNA: TerrainEntry = {
  id: "lake-razna",
  nameZh: "拉兹纳湖",
  nameEn: "Lake Rāzna",
  category: "lake",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "拉兹纳湖", lon: 27.4265, lat: 56.3304, elevation: 163, kind: "lake" },
  bbox: [27.34, 56.28, 27.51, 56.38],
  label: { lon: 27.430, lat: 56.400, rotation: 0 },
  source: "拉兹纳湖（Rāznas ezers）：水面 57.56 km²（含岛 57.81 km²）、水体积 4.05 亿 m³、水面海拔 163.4 m（ENC-内陆水湖泊表 2 级；LVWIKI 引雷泽克内县规则 4.28 亿 m³、163.8 m）；按同一张表比较水体积全国最大（第二名乌斯马湖 1.90 亿 m³，这是从表格推出，不是原文）；DAP 称其为全国第二大湖、拉兹纳国家公园的核心、别名「拉特加莱海」（tiekamiesdaba.lv 1 级）；湖中 10 个岛，出水口雷泽克内河 1938–1940 年经过调控、湖面随之下降，最深 17.0 m、平均深 7.0 m（LVWIKI 3 级）（研究子代理事实表 2026-09-15）",
};

const LAKE_BURTNIEKS: TerrainEntry = {
  id: "lake-burtnieks",
  nameZh: "布尔特涅克斯湖",
  nameEn: "Lake Burtnieks",
  category: "lake",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "布尔特涅克斯湖", lon: 25.2475, lat: 57.7439, elevation: 40, kind: "lake" },
  bbox: [25.17, 57.70, 25.31, 57.79],
  label: { lon: 25.240, lat: 57.810, rotation: 0 },
  source: "布尔特涅克斯湖（Burtnieks）：水面 40.06 km²、流域 2,215 km²、水体积 0.88 亿 m³、水面海拔 39.5 m，按 ENC 表面积排第四（ENC-内陆水湖泊表 2 级）；布尔特涅克斯鼓丘群与泽姆加莱、瓦达克斯泰鼓丘群并列为拉脱维亚最大的鼓丘群（ENC-地貌 2 级）；20 世纪初湖岸崖上的浪蚀洞在湖水位降低后消失（ENC-洞穴 2 级）；萨拉察河从湖中流出、全长 95 km、注入里加湾，湖在北维泽梅生物圈保护区内（tiekamiesdaba.lv 1 级、ENC）；最深 4.1 m、平均深 2.9 m（LVWIKI 3 级）（研究子代理事实表 2026-09-15）",
};

const LAKE_ENGURE: TerrainEntry = {
  id: "lake-engure",
  nameZh: "恩古雷湖",
  nameEn: "Lake Engure",
  category: "lake",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "恩古雷湖", lon: 23.1036, lat: 57.2600, elevation: 1, kind: "lake" },
  bbox: [23.06, 57.18, 23.17, 57.33],
  label: { lon: 23.110, lat: 57.350, rotation: 0 },
  source: "恩古雷湖（Engures ezers）：水面 40.46 km²（含岛 47.31 km²）、流域 644 km²、水体积 0.17 亿 m³，按 ENC 湖泊表水面面积排第三（ENC-内陆水湖泊表 2 级）；梅尔斯拉格斯—恩古雷一线是利托里纳海时期的沙质潟湖障壁之一（ENC-海岸 2 级）；恩古雷湖自然公园 1957 年设立、12,580 ha，186 种鸟在此繁殖（tiekamiesdaba.lv 1 级）；拉姆萨尔湿地 18,000 ha（ENC-自然保护 2 级）；约 4,000 年前形成的潟湖，与里加湾隔 1.5–2.5 km 沙丘带，1842 年开挖梅尔斯拉格斯运河、湖面下降约 1.5 m，最深 2.1 m（LVWIKI 3 级）。水面海拔 0.3 / 3.2 m 两说差距大，不写（研究子代理事实表 2026-09-15）。锚点海拔为取景用概略值",
};

const LAKE_PAPE: TerrainEntry = {
  id: "lake-pape",
  nameZh: "帕佩湖",
  nameEn: "Lake Pape",
  category: "lake",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "帕佩湖", lon: 21.0663, lat: 56.1864, elevation: 0, kind: "lake" },
  bbox: [21.03, 56.15, 21.08, 56.22],
  label: { lon: 21.060, lat: 56.240, rotation: 0 },
  source: "帕佩湖（Papes ezers）：拉脱维亚西南端的潟湖型湖泊；ENC 湖泊表把水面面积标为「可变」，含岛 12.1 km²、流域 231 km²、水面海拔 0.1 m（ENC-内陆水 2 级）；尼达—帕佩一线是利托里纳海时期的沙质潟湖障壁（ENC-海岸 2 级）；帕佩湖与尼达沼泽是约 6,000 年前形成的两处相似潟湖，帕佩仍是湖、尼达已成苔藓沼泽，帕佩自然公园 2003 年设立、10,853 ha（tiekamiesdaba.lv 1 级）；拉姆萨尔湿地「帕佩湿地综合体」51,725 ha（ENC-自然保护 2 级）；1834 年开挖帕佩运河连通大海，平均深 0.5 m，湖与海之间隔 1–2 km 宽的沙丘带（LVWIKI 3 级）。最深 2 / 1.1 m 两说，不写（研究子代理事实表 2026-09-15）",
};

const LAKE_DRIDZIS: TerrainEntry = {
  id: "lake-dridzis",
  nameZh: "德里济斯湖",
  nameEn: "Lake Drīdzis",
  category: "lake",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "德里济斯湖", lon: 27.2922, lat: 55.9759, elevation: 159, kind: "lake" },
  bbox: [27.24, 55.96, 27.38, 55.99],
  label: { lon: 27.300, lat: 56.010, rotation: 0 },
  source: "德里济斯湖（Drīdzis）：拉特加莱东南部的冰下河道型湖泊；ENC「最深湖泊」表列第一、最深 63.1 m（校正后深度）、平均深 12.8 m（ENC-内陆水 2 级）；DAP 写深 65.1 m，湖形曲折如河、长 11 km、9 个岛，「德里济斯湖」自然公园 1977 年设立、2,597 ha（daba.gov.lv 1 级；2026-09-15 核实改正，原写 2,627 ha）（tiekamiesdaba.lv 1 级）；历史资料 65.1 m、1998 年重测 63.1 m、2020 年陶格夫匹尔斯大学测得 66.2 m，面积 7.53 km²（LVWIKI 3 级）。三组深度都排全国第一，正文并列 63.1 / 65.1 m 两说、只写「拉脱维亚最深的湖」，不写「波罗的海地区最深」；湖长 11 / 9.8 km 两说，不写（研究子代理事实表 2026-09-15）",
};

const DAUGAVA_RIVER: TerrainEntry = {
  id: "daugava-river",
  nameZh: "道加瓦河",
  nameEn: "Daugava River",
  category: "river",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "道加瓦河口（里加湾）", lon: 24.0306, lat: 57.0617, elevation: 0, kind: "delta" },
  bbox: [23.95, 55.80, 27.30, 57.10],
  axis: [[27.25, 55.85], [24.03, 57.06]],
  viewScale: 1.8,
  label: { lon: 25.600, lat: 56.600, rotation: 0 },
  source: "道加瓦河（Daugava）：全长 1,005 km，拉脱维亚境内 352 km；流域 87,900 km²，境内 24,700 km²、占国土 38%；注入里加湾；ENC 定义为拉脱维亚水量最丰富的河流，平均流量 678 m³/s、年径流约 20.5 km³；修建水电站梯级前全长 1,020 km；河谷形成于末次冰期末、冰融水逐级泄入冰前湖；普拉维尼亚斯到艾兹克劳克莱之间原是有急流与高达 30 m 白云岩崖的峡谷状河谷，修建普拉维尼亚斯水电站水库时被淹没；境内三座水电站凯古姆斯（1939）、普拉维尼亚斯（ENC-内陆水表 1965 年投运 / ENC-道加瓦正文 1968 年）、里加（1974）；境内河谷穿过 5 个地貌单元（ENC-道加瓦 2 级、ENC-内陆水 2 级）。发源地与上中游不写，被淹没的河崖不点名（研究子代理事实表 2026-09-15）",
};

const GAUJA_RIVER: TerrainEntry = {
  id: "gauja-river",
  nameZh: "高亚河",
  nameEn: "Gauja River",
  category: "river",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "高亚河口（卡尔尼卡瓦）", lon: 24.2663, lat: 57.1593, elevation: 0, kind: "delta" },
  bbox: [24.20, 56.95, 26.60, 57.80],
  axis: [[25.43, 57.54], [24.27, 57.16]],
  viewScale: 1.6,
  label: { lon: 25.600, lat: 57.700, rotation: 0 },
  source: "高亚河（Gauja）：全长 452 km、流域 9,080 km²（境内 7,920 km²）、年径流 2.24 km³（ENC-内陆水河流表 2 级）；全程几乎没有人工调控，是波罗的海地区少数保留七鳃鳗与鲑科鱼类天然产卵场的河流之一（tiekamiesdaba.lv 高亚国家公园页 1 级）；发源于维泽梅高地（具体源头两说），绕维泽梅高地一个大弧，流经采西斯、利加特内、锡古尔达，在卡尔尼卡瓦附近入里加湾，总落差 234 m（LVWIKI 3 级）。「只在境内流动的最长河流」LVWIKI 同页自相矛盾，不写（研究子代理事实表 2026-09-15）",
};

const VENTA_RIVER: TerrainEntry = {
  id: "venta-river",
  nameZh: "文塔河",
  nameEn: "Venta River",
  category: "river",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "文塔河口（文茨皮尔斯）", lon: 21.5444, lat: 57.3956, elevation: 0, kind: "delta" },
  bbox: [21.50, 56.35, 22.40, 57.42],
  axis: [[22.30, 56.40], [21.55, 57.39]],
  viewScale: 1.5,
  label: { lon: 22.050, lat: 56.800, rotation: 0 },
  source: "文塔河（Venta）：全长 346 km、境内 178 km，流域 11,800 km²（境内 6,600 km²），年径流 2.94 km³（ENC-内陆水河流表 2 级）；最大支流阿巴瓦河，在文茨皮尔斯入海（ENC-内陆水 2 级）；上游在立陶宛（中性事实）；从什凯尔韦列河口到库尔迪加的河岸有白云岩出露、急流段与平缓深水段交替，库尔迪加以下进入滨海低地、河道弯曲、有红色砂岩出露（LVWIKI 3 级）；2023 年库尔迪加老城世界遗产范围包括文塔河与阿列克舒皮特溪交汇处及文塔瀑布（UNESCO 1 级）（研究子代理事实表 2026-09-15）",
};

const LIELUPE_RIVER: TerrainEntry = {
  id: "lielupe-river",
  nameZh: "利耶卢佩河",
  nameEn: "Lielupe River",
  category: "river",
  regionId: "europe",
  country: "latvia",
  landmark: { name: "利耶卢佩河口", lon: 23.9331, lat: 57.0086, elevation: 0, kind: "delta" },
  bbox: [23.70, 56.40, 24.20, 57.05],
  axis: [[24.18, 56.41], [23.93, 57.01]],
  viewScale: 1.3,
  label: { lon: 23.850, lat: 56.700, rotation: 0 },
  source: "利耶卢佩河（Lielupe）：全长 119 km；流域 17,600 km²（境内 8,800 km²）、年径流 3.56 km³，在 ENC 河流表的年径流一栏排第二、仅次于道加瓦河（ENC-内陆水河流表 2 级）；在鲍斯卡由梅梅莱河与穆萨河汇合而成，总落差只有 10.8 m，鲍斯卡到梅佐特内一段在白云岩古河谷中流动，梅佐特内以下流经泽姆加莱平原与滨海低地，在尤尔马拉东端入里加湾（LVWIKI 3 级）（研究子代理事实表 2026-09-15）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 拉脱维亚 =====
  VIDZEME_UPLAND, LATGALE_UPLAND, ALUKSNE_UPLAND, AUGSZEME_UPLAND, WEST_KURSA_UPLAND,
  EAST_LATVIAN_LOWLAND, ZEMGALE_PLAIN, GULF_OF_RIGA_COAST, SLITERE_KOLKA, JURKALNE_CLIFFS,
  VIDZEME_ROCKY_COAST, KEMERI_BOG, TEICI_BOG, GAUJA_VALLEY, ABAVA_VALLEY,
  DAUGAVAS_LOKI, VENTA_RAPID, LAKE_LUBANS, LAKE_RAZNA, LAKE_BURTNIEKS,
  LAKE_ENGURE, LAKE_PAPE, LAKE_DRIDZIS, DAUGAVA_RIVER, GAUJA_RIVER,
  VENTA_RIVER, LIELUPE_RIVER,
];
