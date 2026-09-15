import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 爱沙尼亚（北欧次区域第八国；联合国 M49 归北欧）
// 零争议红线：楚德湖只写「横跨爱沙尼亚与俄罗斯交界一带」，不写界线、条约与任何边境议题；
// history 段只写地质史、史前与中世纪至近代的建筑 / 地名史、保护地设立年份与 UNESCO；
// 苏联时期政治叙事、族群构成、语言政策一律不碰。
// 骨架：北部是奥陶纪石灰岩台地与北爱沙尼亚陡崖，南部是泥盆纪砂岩上的冰川堆积高地（哈尼亚 / 奥泰佩 / 卡鲁拉），
// 中部是冰川塑造的鼓丘、蛇形丘与大片沼泽，西部是仍在抬升的低地与群岛。
// 冰川堆积高地与鼓丘 / 蛇形丘区→`hills`、石灰岩与砂岩台地→`plateau`、陡崖与海湾海岸→`coast`、
// 瀑布与砂岩崖谷→`gorge`、沼泽与低地→`plain`、岛→`island`、陨石坑→`basin`、湖→`lake`、河→`river`。
// 主要来源：Eesti entsüklopeedia（2 级）、环境局 kaitsealad.ee / EELIS / loodusveeb.ee（1 级）、气候部、UNESCO；
// 事实由研究子代理出带分级来源的事实表（2026-09-13），数字冲突时写区间或不写。
// ============================================================

const HAANJA_UPLAND: TerrainEntry = {
  id: "haanja-upland",
  nameZh: "哈尼亚高地",
  nameEn: "Haanja Upland",
  category: "hills",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "大蛋山（Suur Munamägi）", lon: 27.0598, lat: 57.7140, elevation: 318, kind: "peak" },
  bbox: [26.85, 57.62, 27.20, 57.92],
  viewScale: 1.2,
  label: { lon: 27.020, lat: 57.940, rotation: 0 },
  source: "哈尼亚高地（Haanja kõrgustik）：爱沙尼亚东南角沃鲁县的冰川堆积高地，面积 816 km²；大蛋山（Suur Munamägi）为爱沙尼亚与波罗的海三国最高点，海拔 318 m（爱沙尼亚百科；环境局页 317.2 m，2017 年换 EH2000 高程基准后 317.4 m），相对高约 60 m；另有瓦拉山（Vällamägi）304 m、相对高 88 m；湖泊约 170 个；1991 年设哈尼亚自然公园；山顶石塔 1939 年建成、观景平台高 29.1 m（Eesti entsüklopeedia 2 级、kaitsealad.ee 1 级，研究子代理 2026-09-13）",
};

const OTEPAA_UPLAND: TerrainEntry = {
  id: "otepaa-upland",
  nameZh: "奥泰佩高地",
  nameEn: "Otepää Upland",
  category: "hills",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "库采山（Kuutsemägi）", lon: 26.3258, lat: 58.0287, elevation: 217, kind: "peak" },
  bbox: [26.20, 57.92, 26.70, 58.20],
  viewScale: 1.2,
  label: { lon: 26.450, lat: 58.220, rotation: 0 },
  source: "奥泰佩高地（Otepää kõrgustik）：爱沙尼亚东南部横跨瓦尔加、塔尔图、佩尔瓦三县的冰川「岛状高地」，面积 1,247 km²，砂岩基底；最高点库采山 217 m；湖泊 130 余个，普哈湖（Pühajärv）谷底海拔 115–130 m；洼地多为冰川喀斯特；1957 年首批保护、1997 年定为奥泰佩自然公园现范围（Eesti entsüklopeedia 2 级、kaitsealad.ee 1 级，2026-09-13）",
};

const KARULA_UPLAND: TerrainEntry = {
  id: "karula-upland",
  nameZh: "卡鲁拉高地",
  nameEn: "Karula Upland",
  category: "hills",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "卡鲁拉国家公园", lon: 26.4867, lat: 57.7144, elevation: 120, kind: "peak" },
  bbox: [26.30, 57.62, 26.70, 57.80],
  label: { lon: 26.490, lat: 57.820, rotation: 0 },
  source: "卡鲁拉高地（Karula kõrgustik）：爱沙尼亚南部沃鲁县与瓦尔加县之间一道宽 4–8 km 的弧形丘陵带，面积 275 km²，最高点托尔尼山 137 m；蛇形丘—冰碛阜群密集，单条长 50–300 m、高可达 10 m；1979 年设景观保护区，1993 年在其范围内设卡鲁拉国家公园（123 km²），环境局称其为爱沙尼亚面积最小、地形起伏最大的国家公园（Eesti entsüklopeedia 2 级、kaitsealad.ee 1 级，2026-09-13）。锚点海拔为取景用概略值",
};

const SAKALA_UPLAND: TerrainEntry = {
  id: "sakala-upland",
  nameZh: "萨卡拉高地",
  nameEn: "Sakala Upland",
  category: "plateau",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "萨卡拉高地中部", lon: 25.6562, lat: 58.0434, elevation: 120, kind: "escarpment" },
  bbox: [25.30, 57.85, 26.00, 58.45],
  viewScale: 1.4,
  label: { lon: 25.650, lat: 58.470, rotation: 0 },
  source: "萨卡拉高地（Sakala kõrgustik）：爱沙尼亚南部维尔扬迪县与瓦尔加县的泥盆纪砂岩台地，面积 2,792 km²，台面海拔由维尔扬迪一带 60–70 m 升到 128 m；最高点哈尔亚萨雷山 147 m（2015 年测定，此前以为鲁图山 145 m 最高）；古河谷如塔纳西尔马—维尔扬迪—劳德纳谷宽约 1 km、深达 30 m，谷坡出露泥盆纪砂岩并有泉水侵蚀的洞穴；约四分之一面积受保护，最大的是洛迪自然公园（Eesti entsüklopeedia 2 级，2026-09-13）。锚点为高地中部概略点",
};

const VOOREMAA: TerrainEntry = {
  id: "vooremaa",
  nameZh: "沃雷马鼓丘群",
  nameEn: "Vooremaa Drumlin Field",
  category: "hills",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "沃雷马鼓丘群中部", lon: 26.5892, lat: 58.6649, elevation: 80, kind: "escarpment" },
  bbox: [26.20, 58.45, 26.95, 58.90],
  axis: [[26.30, 58.85], [26.90, 58.48]],
  viewScale: 1.2,
  label: { lon: 26.580, lat: 58.920, rotation: 0 },
  source: "沃雷马（Vooremaa）：爱沙尼亚中东部约格瓦县与塔尔图县的鼓丘区，面积 977 km²，约 55 × 24 km；近百条大型鼓丘平行排列、长轴西北—东南，记录了冰流绕过潘迪弗雷高地的方向；最高处莱乌塞 144 m，最大的科伊穆拉鼓丘 13 × 3.5 km；残存湖泊 13 个，萨德湖最大最深（707.6 ha、25 m）；1964 年设沃雷马景观保护区（Eesti entsüklopeedia 2 级，2026-09-13）",
};

const PANDIVERE_UPLAND: TerrainEntry = {
  id: "pandivere-upland",
  nameZh: "潘迪弗雷高地",
  nameEn: "Pandivere Upland",
  category: "plateau",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "埃穆山（Emumägi）", lon: 26.3741, lat: 58.9376, elevation: 166, kind: "peak" },
  bbox: [25.70, 58.75, 26.80, 59.30],
  viewScale: 1.4,
  label: { lon: 26.250, lat: 59.320, rotation: 0 },
  source: "潘迪弗雷高地（Pandivere kõrgustik）：爱沙尼亚东北部西维鲁县与耶尔瓦县的石灰岩穹状高地，面积 2,415 km²、直径约 60 km，比周边高 50–60 m；最高点埃穆山 166 m（北爱沙尼亚最高点）；冰碛层仅 1–5 m，1,375 km² 的补给区没有常年河流，是爱沙尼亚最大的喀斯特区；阿拉韦泰泉流量 993 l/s 为全国最大泉；发源于此的河流约占全国河川径流的七分之一（Eesti entsüklopeedia 2 级，2026-09-13）",
};

const NORTH_ESTONIAN_KLINT: TerrainEntry = {
  id: "north-estonian-klint",
  nameZh: "北爱沙尼亚石灰岩陡崖",
  nameEn: "North Estonian Klint",
  category: "coast",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "翁蒂卡陡崖", lon: 27.2833, lat: 59.4333, elevation: 55, kind: "escarpment" },
  bbox: [23.40, 59.20, 28.10, 59.55],
  axis: [[23.45, 59.35], [28.05, 59.40]],
  viewScale: 1.9,
  viewFrom: 5,
  label: { lon: 25.700, lat: 59.620, rotation: 0 },
  source: "北爱沙尼亚石灰岩陡崖（Põhja-Eesti paekallas）：波罗的海陡崖（Baltic Klint）的一段，自奥斯穆萨尔岛到纳尔瓦一带，直线约 300 km、沿曲折海岸约 600 km；崖体下部为寒武纪蓝黏土与砂岩，上部为奥陶纪石灰岩，岩层约 5.4 亿—4.45 亿年前形成；在翁蒂卡最高，约 55 m（各来源 55–56 m），帕克里半岛约 25 m；陡崖大致是芬诺斯堪的亚地盾与东欧地台两大构造的分界；成因有多种假说，今天的形态主要来自冰后期海浪侵蚀与陆地抬升（loodusveeb.ee 1 级、Eesti entsüklopeedia 2 级、TalTech 地质所 GEOGuide《North Estonian Klint》2007，2 级，2026-09-13）；帕克里景观保护区 1998 年设立、2019 年扩大（气候部新闻，1 级）",
};

const PANGA_CLIFF: TerrainEntry = {
  id: "panga-cliff",
  nameZh: "潘加陡崖",
  nameEn: "Panga Cliff",
  category: "coast",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "潘加陡崖", lon: 22.2889, lat: 58.5706, elevation: 21, kind: "escarpment" },
  bbox: [22.24, 58.55, 22.34, 58.59],
  viewFrom: 340,
  label: { lon: 22.290, lat: 58.600, rotation: 0 },
  source: "潘加陡崖（Panga pank）：萨列马岛北岸的志留纪白云岩陡崖，最高 21.3 m，是西爱沙尼亚石灰岩陡崖最高的一段（2023 年保护条例第 1 条，1 级）；陡崖长约 2.5–3 km（爱沙尼亚百科与 2022 年环境局地质鉴定报告各一说）；水上两级台阶、水下另有一级；顶层为礁灰岩（生物礁）白云岩，化石丰富；1959 年首次保护、1999 年设潘加景观保护区、2023 年新条例施行（Riigi Teataja RT I, 22.03.2023, 20；Eesti entsüklopeedia 2 级，2026-09-13）",
};

const JAGALA_WATERFALL: TerrainEntry = {
  id: "jagala-waterfall",
  nameZh: "耶加拉瀑布",
  nameEn: "Jägala Waterfall",
  category: "gorge",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "耶加拉瀑布", lon: 25.1785, lat: 59.4498, elevation: 25, kind: "gorge" },
  bbox: [25.16, 59.44, 25.20, 59.46],
  viewFrom: 20,
  label: { lon: 25.180, lat: 59.465, rotation: 0 },
  source: "耶加拉瀑布（Jägala juga）：哈尤县耶加拉河上跌下北爱沙尼亚陡崖的天然瀑布，落差 8.1 m，丰水期宽 60–70 m；下游峡谷长约 280 m、深 12–14 m；1688—1931 年间瀑布每年后退约 17.3 cm；奥陶纪碳酸盐岩盖层压在较软岩层之上；1959 年起受保护，属「自然2000」地区（EELIS 环境登记 1 级、Eesti entsüklopeedia 2 级，2026-09-13）。「全国最高 / 最宽天然瀑布」只有 3 级来源，正文不写",
};

const VALASTE_WATERFALL: TerrainEntry = {
  id: "valaste-waterfall",
  nameZh: "瓦拉斯泰瀑布",
  nameEn: "Valaste Waterfall",
  category: "gorge",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "瓦拉斯泰瀑布", lon: 27.3351, lat: 59.4440, elevation: 45, kind: "gorge" },
  bbox: [27.31, 59.435, 27.36, 59.455],
  viewFrom: 0,
  label: { lon: 27.335, lat: 59.460, rotation: 0 },
  source: "瓦拉斯泰瀑布（Valaste juga）：伊达维鲁县翁蒂卡陡崖上的瀑布，落差可达约 30 m、随水量变化；**人工成因** —— 水流来自卡西克韦利亚干渠（排水沟），爱沙尼亚百科原文「爱沙尼亚最高的是人工形成的瓦拉斯泰瀑布」；崖面依次出露第四纪沉积、奥陶纪石灰岩与砂岩、寒武纪砂岩与蓝黏土；位于翁蒂卡景观保护区内（Eesti entsüklopeedia 2 级，2026-09-13）",
};

const TAEVASKOJA: TerrainEntry = {
  id: "taevaskoja",
  nameZh: "塔埃瓦斯科亚砂岩崖",
  nameEn: "Taevaskoja Sandstone Cliffs",
  category: "gorge",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "大塔埃瓦斯科达崖", lon: 27.0497, lat: 58.1074, elevation: 60, kind: "escarpment" },
  bbox: [27.02, 58.09, 27.08, 58.13],
  label: { lon: 27.050, lat: 58.135, rotation: 0 },
  source: "塔埃瓦斯科亚（Taevaskoja）：佩尔瓦县阿赫亚河右岸的中泥盆世交错层理砂岩崖，大塔埃瓦斯科达崖高二十多米（维基 22.5 m、旅游资料 24 m，无官方数，正文不写精确值），小塔埃瓦斯科达崖约 13 m；泉水在崖脚掏出洞穴；1957 年设阿赫亚河古河谷景观保护区、2001 年定为现范围（Eesti entsüklopeedia 2 级，维基 3 级，2026-09-13）",
};

const KORVEMAA: TerrainEntry = {
  id: "korvemaa",
  nameZh: "科尔韦马丘陵沼泽区",
  nameEn: "Kõrvemaa",
  category: "hills",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "科尔韦马景观保护区", lon: 25.5217, lat: 59.1903, elevation: 90, kind: "escarpment" },
  bbox: [25.20, 59.05, 25.90, 59.35],
  viewScale: 1.3,
  label: { lon: 25.550, lat: 59.370, rotation: 0 },
  source: "科尔韦马（Kõrvemaa）：爱沙尼亚中北部横跨哈尤、耶尔瓦、西维鲁等县的森林—沼泽—冰川地貌区，面积约 3,130 km²（另有其他界定）；最高点埃里库 111 m 在奥赫帕卢—维特纳蛇形丘系上，蛇形丘一般高 10–15 m，阿埃格维杜—鲍克湖蛇形丘长 16 km 以上；最大的沼泽系统埃普—卡克尔迪 364 km²，森林约占 73%；1957 年设保护地、1971 年扩大并改名科尔韦马景观保护区（Eesti entsüklopeedia 2 级，2026-09-13）",
};

const LAHEMAA_COAST: TerrainEntry = {
  id: "lahemaa-coast",
  nameZh: "拉赫马海岸",
  nameEn: "Lahemaa Coast",
  category: "coast",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "凯斯穆半岛", lon: 25.8967, lat: 59.6035, elevation: 5, kind: "escarpment" },
  bbox: [25.40, 59.35, 26.40, 59.70],
  axis: [[25.45, 59.55], [26.35, 59.60]],
  viewScale: 1.5,
  viewFrom: 10,
  label: { lon: 25.900, lat: 59.720, rotation: 0 },
  source: "拉赫马海岸（Lahemaa）：哈尤县与西维鲁县北岸，1971 年 6 月 1 日设立的拉赫马国家公园为爱沙尼亚最早、面积最大的国家公园，74,784 ha（海域 26,874 ha）；尤明达、帕里斯佩阿、凯斯穆、韦尔吉四个半岛呈西北—东南走向；石灰岩陡崖把沿海低地与台地分开；漂砾大多由约 12,500 年前的冰川从今芬兰东南部带来（环形斑状花岗岩），环境局称这里是北欧冰川作用区漂砾数量最多的地区之一；「拉赫马」一名 1922 年由地理学家格拉诺提出（kaitsealad.ee 1 级、Eesti entsüklopeedia 2 级，2026-09-13）",
};

const SOOMAA: TerrainEntry = {
  id: "soomaa",
  nameZh: "苏马沼泽",
  nameEn: "Soomaa",
  category: "plain",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "苏马国家公园", lon: 25.1056, lat: 58.4400, elevation: 30, kind: "grassland" },
  bbox: [24.85, 58.30, 25.40, 58.60],
  viewScale: 1.2,
  label: { lon: 25.120, lat: 58.620, rotation: 0 },
  source: "苏马（Soomaa）：维尔扬迪县与派尔努县之间的高位沼泽与河漫滩湿地，1993 年设国家公园，面积约 39,844 ha，沼泽占 51%；五大沼泽中库雷苏沼泽 11,000 ha 最大；春季融雪与降雨使河流漫溢，洪水最多可覆盖 175 km²，当地称「第五季」；沼泽面比周边矿质地面高 5–6 m，约 13,000 年前冰川退去后开始发育；1997 年列入拉姆萨尔国际重要湿地；当地挖凿扩展独木舟（haabjas）的技艺 2021 年列入 UNESCO 急需保护的非物质文化遗产名录（环境局 Soomaa 手册、kaitsealad.ee、UNESCO ICH，1 级，2026-09-13）",
};

const ALUTAGUSE: TerrainEntry = {
  id: "alutaguse",
  nameZh: "阿卢塔古塞森林沼泽",
  nameEn: "Alutaguse",
  category: "plain",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "普哈图沼泽一带", lon: 27.6630, lat: 59.1739, elevation: 40, kind: "grassland" },
  bbox: [27.20, 58.95, 28.00, 59.30],
  viewScale: 1.3,
  label: { lon: 27.600, lat: 59.320, rotation: 0 },
  source: "阿卢塔古塞（Alutaguse）：伊达维鲁县的森林—沼泽低地，2018 年 11 月 24 日由阿古萨卢、穆拉卡、普哈图、塞利苏等自然保护区合并设立国家公园；沼泽约占 54%、森林约 42%；气候部称普哈图为北欧最大的湿地区之一；1938 年设立的拉特瓦沼泽保护区使这里被称为「爱沙尼亚沼泽保护的摇篮」；2026 年 9 月 10 日政府批准扩大国家公园范围，生效日以《国家公报》刊登为准（kliimaministeerium.ee、kaitsealad.ee、EELIS，1 级，2026-09-13）。⚠️ 面积正在变更，正文不写公顷数",
};

const WEST_ESTONIAN_LOWLAND: TerrainEntry = {
  id: "west-estonian-lowland",
  nameZh: "西爱沙尼亚低地",
  nameEn: "West Estonian Lowland",
  category: "plain",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "哈普萨卢", lon: 23.5410, lat: 58.9430, elevation: 5, kind: "city" },
  bbox: [23.30, 58.20, 24.60, 59.35],
  axis: [[23.60, 59.30], [24.30, 58.25]],
  viewScale: 1.9,
  label: { lon: 23.950, lat: 59.370, rotation: 0 },
  source: "西爱沙尼亚低地（Lääne-Eesti madalik）：爱沙尼亚本土西部自芬兰湾到里加湾的低地，面积约 6,035 km²，爱沙尼亚百科称其为面积最大、类型最多样的景观区；石灰岩台地被冰期波罗的冰流刨蚀、又反复被冰湖与海水淹没；北部自冰期以来已抬升近 90 m，但大片地面仍不超过海拔 10 m；现今陆升速率自爱沙尼亚东南部约 0 mm/年增到西北部约 3 mm/年（Eesti entsüklopeedia 2 级；爱沙尼亚大地测量进展 2018–2022 报告，2 级；2026-09-13）",
};

const MATSALU_BAY: TerrainEntry = {
  id: "matsalu-bay",
  nameZh: "马察卢湾",
  nameEn: "Matsalu Bay",
  category: "coast",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "卡萨里河三角洲", lon: 23.5969, lat: 58.7600, elevation: 0, kind: "delta" },
  bbox: [23.35, 58.68, 23.85, 58.84],
  viewScale: 1.1,
  viewFrom: 270,
  label: { lon: 23.600, lat: 58.860, rotation: 0 },
  source: "马察卢湾（Matsalu laht）：西爱沙尼亚沿海的浅海湾，卡萨里河（长 115 km、流域 3,220 km²，EELIS 2026）在湾顶形成三角洲；马察卢国家公园面积 48,860 ha（EELIS），1957 年设自然保护区、2004 年定为国家公园；芦苇荡约 3,000 ha，湾内与近岸有 60 余个小岛；秋季约 2 万只灰鹤、春季 3 万余只白颊黑雁在此停歇；已列入拉姆萨尔国际重要湿地（列入年份各来源有 1971 / 1976 / 1994 三说，正文不写年份）（EELIS 与 kaitsealad.ee 1 级、Eesti entsüklopeedia 2 级，2026-09-13）",
};

const SAAREMAA: TerrainEntry = {
  id: "saaremaa",
  nameZh: "萨列马岛",
  nameEn: "Saaremaa",
  category: "island",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "萨列马岛中部", lon: 22.5000, lat: 58.4167, elevation: 20, kind: "island" },
  bbox: [21.80, 57.90, 23.35, 58.65],
  viewScale: 1.8,
  label: { lon: 22.550, lat: 58.680, rotation: 0 },
  source: "萨列马岛（Saaremaa）：爱沙尼亚最大的岛屿，面积约 2,673 km²（爱沙尼亚百科）；地表在奥陶纪与志留纪石灰岩基岩上由冰川与冰后期过程塑造，属西爱沙尼亚群岛喀斯特区；1990 年西爱沙尼亚群岛（含萨列马、希乌马、沃尔姆西、穆胡）被 UNESCO 列为生物圈保护区（unesco.org MAB 1 级、Eesti entsüklopeedia 2 级，2026-09-13）",
};

const HIIUMAA: TerrainEntry = {
  id: "hiiumaa",
  nameZh: "希乌马岛",
  nameEn: "Hiiumaa",
  category: "island",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "科普灯塔", lon: 22.1997, lat: 58.9160, elevation: 60, kind: "island" },
  bbox: [22.05, 58.70, 23.10, 59.10],
  viewScale: 1.5,
  label: { lon: 22.600, lat: 59.120, rotation: 0 },
  source: "希乌马岛（Hiiumaa）：爱沙尼亚第二大岛，面积 989 km²；一万多年前科普半岛最高处先露出海面，今天陆地仍以约 3 mm/年抬升，卡萨里岛正逐渐与本岛连成半岛；科普灯塔 1505 年动工、一般认为 1531 年建成，交通局航海百科 mereviki（1 级）称其为仍在持续使用的最古老航标之一（该名次另有说法，正文署名转述）；科普半岛有石器时代捕海豹人的季节营地遗址（Eesti entsüklopeedia 2 级，2026-09-13）。锚点海拔为概略值",
};

const VILSANDI: TerrainEntry = {
  id: "vilsandi",
  nameZh: "维尔桑迪岛",
  nameEn: "Vilsandi",
  category: "island",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "维尔桑迪岛", lon: 21.8667, lat: 58.3833, elevation: 5, kind: "island" },
  bbox: [21.75, 58.30, 22.00, 58.45],
  label: { lon: 21.870, lat: 58.460, rotation: 0 },
  source: "维尔桑迪（Vilsandi）：萨列马岛西岸外的岛屿与国家公园；岛面积约 8.75 km²；1910 年设立的瓦伊卡鸟类保护区是波罗的海三国最早的保护地，1993 年设维尔桑迪国家公园，面积 23,882 ha（环境局手册与 EELIS；kaitsealad.ee 英文页的 48,594.6 ha 疑为误植，不采用），三分之二以上为水域，含约 160 个岛屿与礁石；爱沙尼亚最西端点位于园内；陆地约 7,000 年来持续抬升；1997 年列入拉姆萨尔湿地；灯塔 1809 年建（环境局手册、kaitsealad.ee，1 级，2026-09-13）",
};

const KAALI_CRATER: TerrainEntry = {
  id: "kaali-crater",
  nameZh: "卡利陨石坑群",
  nameEn: "Kaali Crater Field",
  category: "basin",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "卡利主坑", lon: 22.6694, lat: 58.3728, elevation: 20, kind: "lake" },
  bbox: [22.655, 58.365, 22.685, 58.38],
  label: { lon: 22.670, lat: 58.383, rotation: 0 },
  source: "卡利陨石坑群（Kaali meteoriidikraatrid）：萨列马岛上 1 个主坑与 8 个小坑，分布在约 1 km² 内；主坑直径约 110 m、深约 22 m（含湖泥），小坑直径 13–39 m；撞击体为铁陨石，在大气中碎裂；1937 年首次发现陨石碎片；形成年代各研究相差很大，Losiak 等 2016 年的测年认为「很可能形成于公元前 1530—1450 年之后不久」；1938 年起受保护；主坑坡上曾有设防聚落（Eesti entsüklopeedia 2 级；环境局卡利管理计划 2010–2019，1 级；Meteoritics & Planetary Science 2016，2 级；2026-09-13）",
};

const LAKE_PEIPUS: TerrainEntry = {
  id: "lake-peipus",
  nameZh: "楚德湖（佩普西湖）",
  nameEn: "Lake Peipus",
  category: "lake",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "楚德湖中部", lon: 27.4833, lat: 58.6833, elevation: 30, kind: "lake" },
  bbox: [26.90, 57.85, 28.20, 59.05],
  axis: [[27.40, 59.00], [27.90, 57.90]],
  viewScale: 1.9,
  viewFrom: 270,
  label: { lon: 27.200, lat: 59.070, rotation: 0 },
  source: "楚德湖（Peipsi järv）：爱沙尼亚东部、横跨爱沙尼亚与俄罗斯交界一带的大湖，由北部主湖、中部温暖湖（Lämmijärv）与南部普斯科夫湖三部分组成，整个湖面约 3,500 余 km²（爱沙尼亚百科 3,555、环境署 loodusveeb 约 3,543，均为全湖）；典型的冰川刨蚀湖盆，北部抬升快于南部，湖水因此南移、湖面扩大；唯一出水口为纳尔瓦河；loodusveeb 称其为欧洲最大的湖泊之一（loodusveeb.ee 1 级、Eesti entsüklopeedia 2 级，2026-09-13）。⚠️ 零争议：只写「交界一带」，不写界线与任何条约；水深两说（平均 7.1 / 8 m、最深 15.3 / 17.6 m），正文不写",
};

const LAKE_VORTSJARV: TerrainEntry = {
  id: "lake-vortsjarv",
  nameZh: "维尔茨湖",
  nameEn: "Lake Võrtsjärv",
  category: "lake",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "维尔茨湖中部", lon: 26.0333, lat: 58.2833, elevation: 34, kind: "lake" },
  bbox: [25.85, 58.05, 26.20, 58.45],
  axis: [[26.10, 58.43], [25.95, 58.08]],
  viewScale: 1.2,
  label: { lon: 26.030, lat: 58.470, rotation: 0 },
  source: "维尔茨湖（Võrtsjärv）：爱沙尼亚中南部、完全位于境内的最大湖泊，面积约 270 km²，平均深 2.8 m、最深 6 m，长约 35 km、宽约 15 km；湖盆在冰期前已存在、被冰川加深，今天的湖约有 7,500 年历史；湖水经埃马约吉河流出，高水位时河水会倒流入湖；水体约一年更新一次（loodusveeb.ee 1 级、Eesti entsüklopeedia 2 级，2026-09-13）。爱沙尼亚百科称「最大内陆湖」，loodusveeb 计入楚德湖称「第二大湖」，正文统一写「完全位于境内的最大湖泊」",
};

const EMAJOGI: TerrainEntry = {
  id: "emajogi",
  nameZh: "埃马约吉河",
  nameEn: "Emajõgi",
  category: "river",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "塔尔图河段", lon: 26.7290, lat: 58.3780, elevation: 35, kind: "corridor" },
  bbox: [26.10, 58.30, 27.30, 58.48],
  axis: [[26.13, 58.38], [27.24, 58.44]],
  viewScale: 1.5,
  label: { lon: 26.700, lat: 58.500, rotation: 0 },
  source: "埃马约吉河（Emajõgi）：自维尔茨湖流经塔尔图注入楚德湖，长约 100 km（EELIS 100 km、爱沙尼亚百科 101 km），流域约 9,770 km²（EELIS 2026）；河道穿行在一条古河谷中，塔尔图附近谷宽约 1 km、深达 20 m，全程落差只有约 3.5 m，高水位时源头附近会倒流；爱沙尼亚百科称其为爱沙尼亚唯一全程可通航的河流；1224 年文献首次出现其名（EELIS 1 级、Eesti entsüklopeedia 2 级，2026-09-13）",
};

const PARNU_RIVER: TerrainEntry = {
  id: "parnu-river",
  nameZh: "派尔努河",
  nameEn: "Pärnu River",
  category: "river",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "派尔努河口", lon: 24.4762, lat: 58.3774, elevation: 0, kind: "delta" },
  bbox: [24.40, 58.30, 25.80, 59.05],
  axis: [[25.71, 59.03], [24.48, 58.38]],
  viewScale: 1.5,
  label: { lon: 25.050, lat: 58.750, rotation: 0 },
  source: "派尔努河（Pärnu jõgi）：发源于潘迪弗雷高地西麓的罗斯纳—阿利库泉湖，经派德、蒂里注入派尔努湾；长约 144–145 km、流域约 6,710–6,920 km²（EELIS 与爱沙尼亚百科各一），按长度与流域面积均为爱沙尼亚第二（爱沙尼亚百科）；落差 78 m；河口附近辛迪的普利中石器时代遗址是爱沙尼亚已知最早的人类居址（Eesti entsüklopeedia 2 级、EELIS 1 级，2026-09-13）",
};

const VOHANDU_RIVER: TerrainEntry = {
  id: "vohandu-river",
  nameZh: "沃汉杜河",
  nameEn: "Võhandu River",
  category: "river",
  regionId: "europe",
  country: "estonia",
  landmark: { name: "雷皮纳河段", lon: 27.4638, lat: 58.0977, elevation: 40, kind: "corridor" },
  bbox: [26.70, 57.95, 27.60, 58.15],
  axis: [[26.72, 58.06], [27.55, 58.10]],
  viewScale: 1.4,
  label: { lon: 27.100, lat: 58.170, rotation: 0 },
  source: "沃汉杜河（Võhandu jõgi）：发源于奥泰佩高地的萨韦尔纳，经瓦古拉湖、雷皮纳注入楚德湖南部的温暖湖（Lämmijärv）；长约 160 余 km（爱沙尼亚百科 162 km、EELIS 166 km），是全程位于爱沙尼亚境内的最长河流；流域约 1,420 km²，落差约 100 m；沿岸出露中泥盆世砂岩崖，当地称「墙」（müürid）（Eesti entsüklopeedia 2 级、EELIS 1 级，2026-09-13）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 爱沙尼亚 =====
  HAANJA_UPLAND, OTEPAA_UPLAND, KARULA_UPLAND, SAKALA_UPLAND, VOOREMAA,
  PANDIVERE_UPLAND, NORTH_ESTONIAN_KLINT, PANGA_CLIFF, JAGALA_WATERFALL, VALASTE_WATERFALL,
  TAEVASKOJA, KORVEMAA, LAHEMAA_COAST, SOOMAA, ALUTAGUSE,
  WEST_ESTONIAN_LOWLAND, MATSALU_BAY, SAAREMAA, HIIUMAA, VILSANDI,
  KAALI_CRATER, LAKE_PEIPUS, LAKE_VORTSJARV, EMAJOGI, PARNU_RIVER,
  VOHANDU_RIVER,
];
