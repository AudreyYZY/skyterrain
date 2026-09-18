import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 爱尔兰 =====
  {
    id: "dublin", nameZh: "都柏林", nameEn: "Dublin", country: "ireland", tier: "capital", zone: "ie-leinster", admin1Zh: "都柏林郡", admin1En: "County Dublin",
    lon: -6.2603, lat: 53.3498,
    airport: { iata: "DUB", nameZh: "都柏林机场", nameEn: "Dublin Airport", lon: -6.2701, lat: 53.4213 },
    source: "都柏林市中心 53.3498,-6.2603；DUB 机场：公开资料",
  },
  {
    id: "kilkenny", nameZh: "基尔肯尼", nameEn: "Kilkenny", country: "ireland", tier: "notable", zone: "ie-leinster", admin1Zh: "基尔肯尼郡", admin1En: "County Kilkenny",
    lon: -7.2448, lat: 52.6541,
    airport: { iata: "DUB", nameZh: "都柏林机场", nameEn: "Dublin Airport", lon: -6.2701, lat: 53.4213 },
    source: "基尔肯尼市中心 52.6541,-7.2448；本地无商业机场，最近机场为都柏林机场（距市区约120km）：公开资料",
  },
  {
    id: "cork", nameZh: "科克", nameEn: "Cork", country: "ireland", tier: "major", zone: "ie-munster", admin1Zh: "科克郡", admin1En: "County Cork",
    lon: -8.4756, lat: 51.8985,
    airport: { iata: "ORK", nameZh: "科克机场", nameEn: "Cork Airport", lon: -8.4911, lat: 51.8413 },
    source: "科克市中心 51.8985,-8.4756；ORK 机场：公开资料",
  },
  {
    id: "killarney", nameZh: "基拉尼", nameEn: "Killarney", country: "ireland", tier: "notable", zone: "ie-munster", admin1Zh: "凯里郡", admin1En: "County Kerry",
    lon: -9.5044, lat: 52.0599,
    airport: { iata: "KIR", nameZh: "凯里机场", nameEn: "Kerry Airport", lon: -9.5238, lat: 52.1809 },
    source: "基拉尼市中心 52.0599,-9.5044；KIR 机场（距市区约15km）：公开资料",
  },
  {
    id: "dingle", nameZh: "丁格尔", nameEn: "Dingle", country: "ireland", tier: "notable", zone: "ie-munster", admin1Zh: "凯里郡", admin1En: "County Kerry",
    lon: -10.2672, lat: 52.1408,
    airport: { iata: "KIR", nameZh: "凯里机场", nameEn: "Kerry Airport", lon: -9.5238, lat: 52.1809 },
    source: "丁格尔市中心 52.1408,-10.2672；本地无商业机场，最近机场为凯里机场（距市区约50km）：公开资料",
  },
  {
    id: "waterford", nameZh: "沃特福德", nameEn: "Waterford", country: "ireland", tier: "notable", zone: "ie-munster", admin1Zh: "沃特福德郡", admin1En: "County Waterford",
    lon: -7.1101, lat: 52.2593,
    airport: { iata: "ORK", nameZh: "科克机场", nameEn: "Cork Airport", lon: -8.4911, lat: 51.8413 },
    source: "沃特福德市中心 52.2593,-7.1101；本地沃特福德机场航班班次极少，通常经科克机场（距市区约110km）或都柏林机场中转：公开资料",
  },
  {
    id: "limerick", nameZh: "利默里克", nameEn: "Limerick", country: "ireland", tier: "major", zone: "ie-munster", admin1Zh: "利默里克郡", admin1En: "County Limerick",
    lon: -8.6267, lat: 52.6638,
    airport: { iata: "SNN", nameZh: "香农机场", nameEn: "Shannon Airport", lon: -8.9248, lat: 52.7019 },
    source: "利默里克市中心 52.6638,-8.6267；SNN 机场（距市区约25km）：公开资料",
  },
  {
    id: "galway", nameZh: "戈尔韦", nameEn: "Galway", country: "ireland", tier: "major", zone: "ie-connacht", admin1Zh: "戈尔韦郡", admin1En: "County Galway",
    lon: -9.0568, lat: 53.2707,
    airport: { iata: "SNN", nameZh: "香农机场", nameEn: "Shannon Airport", lon: -8.9248, lat: 52.7019 },
    source: "戈尔韦市中心 53.2707,-9.0568；本地戈尔韦机场已停止定期客运，最近机场为香农机场（距市区约100km）：公开资料",
  },
  {
    id: "westport", nameZh: "韦斯特波特", nameEn: "Westport", country: "ireland", tier: "notable", zone: "ie-connacht", admin1Zh: "梅奥郡", admin1En: "County Mayo",
    lon: -9.5167, lat: 53.8000,
    airport: { iata: "NOC", nameZh: "爱尔兰西部诺克机场", nameEn: "Ireland West Airport Knock", lon: -8.8185, lat: 53.9103 },
    source: "韦斯特波特市中心 53.8000,-9.5167；NOC 机场（距市区约50km）：公开资料",
  },
  {
    id: "donegal-town", nameZh: "多尼戈尔镇", nameEn: "Donegal Town", country: "ireland", tier: "notable", zone: "ie-ulster", admin1Zh: "多尼戈尔郡", admin1En: "County Donegal",
    lon: -8.1097, lat: 54.6539,
    airport: { iata: "CFN", nameZh: "多尼戈尔机场（卡里克芬）", nameEn: "Donegal Airport (Carrickfinn)", lon: -8.3405, lat: 55.0442 },
    source: "多尼戈尔镇市中心 54.6539,-8.1097；CFN 机场（距市区约65km）：公开资料",
  },
  {
    id: "ennis", nameZh: "恩尼斯", nameEn: "Ennis", country: "ireland", tier: "notable", zone: "ie-munster", admin1Zh: "克莱尔郡", admin1En: "County Clare",
    lon: -8.9837, lat: 52.8435,
    airport: { iata: "SNN", nameZh: "香农机场", nameEn: "Shannon Airport", lon: -8.9248, lat: 52.7019 },
    source: "恩尼斯镇中心 52.8435,-8.9837（OSM）；SNN 香农机场直线约 16 km（按坐标算，离恩尼斯比离利默里克市中心近）；莫赫悬崖与伯伦地形条目的门户（已有城市补充批，2026-09-16）",
  },
  {
    id: "sligo", nameZh: "斯莱戈", nameEn: "Sligo", country: "ireland", tier: "notable", zone: "ie-connacht", admin1Zh: "斯莱戈郡", admin1En: "County Sligo",
    lon: -8.4751, lat: 54.2721,
    airport: { iata: "NOC", nameZh: "爱尔兰西部诺克机场", nameEn: "Ireland West Airport Knock", lon: -8.8185, lat: 53.9103 },
    source: "斯莱戈镇中心 54.2721,-8.4751（OSM）；斯莱戈机场 SXL 直线约 8 km 没有定期航班（机场官网，1 级）；最近有定期航班的是 NOC，直线约 46 km（按坐标算）（已有城市补充批，2026-09-16）",
  },
  // ── 爱尔兰补城批（2026-09-18，城市 12 → 16）──
  // 安全前置：FCDO 爱尔兰页更新 2026-09-04，**无任何地区级劝阻、无需回避的地区**（实际取页确认）。
  // 人口口径：**爱尔兰的城镇人口只有普查才有**（CSO 年度估计只到全国与 8 个 NUTS3 区域），
  //   一律用 **2022 年普查建成区（Built Up Area, BUA）** —— CSO PxStat 表 F1015，数据集时间戳 2023-06-29。
  //   BUA 边界由 CSO + 住房地方政府与遗产部 + Tailte Éireann 用「建筑聚集与城市土地利用」算法生成，
  //   **与 2016 年普查的 Settlement 口径不可直接比较**。下一次普查 2027-05。
  //   逐位自检（同表）：戈尔韦 city and suburbs 85,910 / 沃特福德 city and suburbs 60,079 / 斯莱戈 20,608。
  // **本批 howItWorks 主线（仓库没写过的形态）**：爱尔兰 2014 年把**所有**市镇议会一次性废除了 ——
  //   《Local Government Reform Act 2014》s.24(2) 原文「On the transfer date each town council stands dissolved
  //   and ceases to exist」，废除日 2014-06-01（S.I. 216/2014）。**被废除的是 80 个**
  //   （逐条数 LGA 2001 Schedule 6：5 个 borough + 49 个前 urban district + 26 个前 town commissioners）——
  //   外界流传的「80」与「75 + 5」是同一批的两种数法，正文写 80 并写明含 5 个 borough council。
  //   改革后全国 **31 个地方政府**（逐条数 Schedule 5：26 郡 + 3 市 + 2 市郡）。⚠️「改革前 114 个」无 1 级来源，不写。
  //   **Municipal District（市政区）不是一级政府**：LGA 2001 s.22B 原文 —— 市政区的成员就是本区各选区选出的
  //   **郡议员本人**，他们在市政区里行使的是「郡议会的职权」。没有自己的法人、议员、税收。
  //   四镇的议会全在 2014-06-01 一并废除，此后本地**一个自己的政府机构都没有**，只有郡议会的办事处。
  // 机场：四镇都没有本地机场，最近的有定期航班机场都在别的郡，**一律不填 airport 字段**。
  // 红线：**1649 年德罗赫达围城一律不写**；教堂与大教堂只作建筑与年代事实；郡界调整、郡界检讨这类
  //   公共争议议题不写过程与结论；卢西塔尼亚号海难叙事不写；不写族群、住房与移民议题。
  {
    id: "drogheda", nameZh: "德罗赫达", nameEn: "Drogheda", country: "ireland", tier: "notable", zone: "ie-leinster", admin1Zh: "伦斯特", admin1En: "Leinster",
    lon: -6.3506, lat: 53.7149,
    source: "镇中心参考点 The Tholsel（西街与 Shop Street 路口的旧市政厅建筑）53.714938,-6.350612（OSM）；2022 年普查建成区人口 44,135（CSO PxStat 表 F1015，条目名「Drogheda, Counties Louth & Meath」，1 级）—— CSO 原话「County Louth had the two largest towns in the State, Drogheda with 44,135 people」，**该发布把「town」当作 BUA 的同义词、五座城市的 city and suburbs 型建成区另计**，所以排名必须带这段口径；建成区跨路斯与米斯两郡，**政府不跨界**：河北侧历史市区在路斯郡、属 Borough District of Drogheda（S.I. 626/2018，1 级），南缘伸进米斯郡那部分属米斯郡议会的 Laytown–Bettystown 市政区；两郡为此合编一份联合地方区域规划（米斯郡议会官网，1 级）；Borough District 的主席可沿用 Mayor 头衔（LGA 2001 s.32(1A)(b)）—— **那是市政区主席、也就是郡议员之一，不是一座「德罗赫达市政府」的首长**；本镇无机场，最近为都柏林机场 DUB 直线约 33 km（按坐标算），不填 airport（爱尔兰补城批，2026-09-18）",
  },
  {
    id: "cobh", nameZh: "科夫", nameEn: "Cobh", country: "ireland", tier: "notable", zone: "ie-munster", admin1Zh: "芒斯特", admin1En: "Munster",
    lon: -8.3003, lat: 51.8488,
    source: "镇中心参考点 Cobh 火车站（Lower Road，站房与遗产中心同一组建筑）51.848837,-8.300253（OSM）；2022 年普查建成区人口 14,148（CSO 表 F1015「Cobh, Co Cork」，1 级）；**2019 年科克市界大幅扩张没有把科夫划进市里** —— 两面夹证：S.I. 28/2019（2019-01-31 生效）第 4(c) 条设 the Municipal District of Cobh，其 LEA 法定描述把 Cobh Rural / Cobh Urban **整块列入**、而逐个点名了另外四个选区要扣掉「已划入科克市」的部分；《Local Government Act 2019》（执行市界扩张的那部法案）全文搜索「Cobh」**零命中**（均 irishstatutebook，1 级）；镇在 Great Island 上；本镇议会属前 urban district、2014-06-01 废除；最近有定期航班机场为科克机场 ORK 直线约 13 km（按坐标算），不填 airport（爱尔兰补城批，2026-09-18）",
  },
  {
    id: "athlone", nameZh: "阿斯隆", nameEn: "Athlone", country: "ireland", tier: "notable", zone: "ie-leinster", admin1Zh: "伦斯特", admin1En: "Leinster",
    lon: -7.9427, lat: 53.4232,
    source: "镇中心参考点 阿斯隆城堡（Main Street，香农河西岸）53.423198,-7.942671（OSM）；2022 年普查建成区人口 22,869（CSO 表 F1015「Athlone, Counties Westmeath & Roscommon」，1 级）；**建成区跨两郡且分属两个郡议会，两郡各设一个名字带 Athlone 的市政区**：韦斯特米斯侧为 the Municipal District of Athlone — Moate（S.I. 636/2018），罗斯康芒侧为 the Municipal District of Athlone（S.I. 631/2018），两份命令的选区清单互斥、可自证；**⚠️ 香农河不是这里的郡界** —— 「Athlone West Urban」选区在韦斯特米斯、「Athlone West Rural」在罗斯康芒，所以河西岸的阿斯隆城堡仍在韦斯特米斯郡，更往西的蒙克斯兰（直线约 3.7 km）才进入罗斯康芒（两份 S.I. 1 级 + OSM 行政层级实测）；本镇议会属前 urban district、2014-06-01 废除，韦斯特米斯郡议会在本镇设 Civic Centre；本镇无机场，都柏林机场直线约 112 km、香农机场约 104 km（按坐标算），不填 airport（爱尔兰补城批，2026-09-18）",
  },
  {
    id: "cashel", nameZh: "卡舍尔", nameEn: "Cashel", country: "ireland", tier: "notable", zone: "ie-munster", admin1Zh: "芒斯特", admin1En: "Munster",
    lon: -7.8876, lat: 52.5169,
    source: "镇中心参考点 卡舍尔遗产中心与旅游信息处（Main Street）52.516938,-7.887641（OSM）；2022 年普查建成区人口 4,805（CSO 表 F1015「Cashel, Co Tipperary」，1 级）；市政区为 the Municipal District of Cahir — Cashel，由 Cahir 与 **Cashel — Tipperary** 两个 LEA 构成（S.I. 634/2018，1 级）——**「卡舍尔」在市政区与选区两级各配一个不同的搭档名，别混**；蒂珀雷里郡议会 2014 年由南北两个郡议会合并而成；**现行法律上卡舍尔不是 city**（LGA 2001 Schedule 5 的 city 只有都柏林、科克、戈尔韦，另加利默里克与沃特福德两个市郡），历史上的市法团 1840 年废除（2 级），所以**不写「爱尔兰最小的城市」这类无口径断言**；卡舍尔之岩由公共工程局 OPW 管理（heritageireland.ie，1 级）；本镇无火车站，实际可用的铁路门户是直线约 18 km 的瑟尔斯（干线站）；最近有定期航班机场为香农机场直线约 73 km（按坐标算），不填 airport（爱尔兰补城批，2026-09-18）",
  },
];
