import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 冰岛 ──
  {
    id: "reykjavik", nameZh: "雷克雅未克", nameEn: "Reykjavík", country: "iceland", tier: "capital", zone: "is-southwest", admin1Zh: "首都圈与西南", admin1En: "Capital Region & Southwest",
    lon: -21.9426, lat: 64.1466,
    airport: { iata: "RKV", nameZh: "雷克雅未克机场（国内）", nameEn: "Reykjavík Airport", lon: -21.9406, lat: 64.1300 },
    source: "雷克雅未克市中心 64.1466,-21.9426；RKV 国内机场：公开资料（国际航班用凯夫拉维克 KEF）",
  },
  {
    id: "keflavik", nameZh: "凯夫拉维克", nameEn: "Keflavík", country: "iceland", tier: "notable", zone: "is-southwest", admin1Zh: "首都圈与西南", admin1En: "Capital Region & Southwest",
    lon: -22.5624, lat: 64.0049,
    airport: { iata: "KEF", nameZh: "凯夫拉维克国际机场", nameEn: "Keflavík Int'l", lon: -22.6056, lat: 63.9850 },
    source: "凯夫拉维克镇 64.0049,-22.5624；KEF 机场：公开资料",
  },
  {
    id: "vik", nameZh: "维克", nameEn: "Vík í Mýrdal", country: "iceland", tier: "notable", zone: "is-south", admin1Zh: "南部海岸", admin1En: "South Coast",
    lon: -19.0060, lat: 63.4187,
    source: "维克（Vík í Mýrdal）63.4187,-19.0060：公开资料（无机场，南岸环岛公路上的小镇）",
  },
  {
    id: "hofn", nameZh: "赫本", nameEn: "Höfn", country: "iceland", tier: "notable", zone: "is-southeast", admin1Zh: "东南部", admin1En: "Southeast",
    lon: -15.2082, lat: 64.2539,
    airport: { iata: "HFN", nameZh: "赫本机场", nameEn: "Hornafjörður Airport", lon: -15.2272, lat: 64.2956 },
    source: "赫本（Höfn í Hornafirði）64.2539,-15.2082；HFN 机场：公开资料",
  },
  {
    id: "egilsstadir", nameZh: "埃伊尔斯塔济", nameEn: "Egilsstaðir", country: "iceland", tier: "notable", zone: "is-east", admin1Zh: "东部", admin1En: "East",
    lon: -14.3948, lat: 65.2669,
    airport: { iata: "EGS", nameZh: "埃伊尔斯塔济机场", nameEn: "Egilsstaðir Airport", lon: -14.4014, lat: 65.2833 },
    source: "埃伊尔斯塔济 65.2669,-14.3948；EGS 机场：公开资料",
  },
  {
    id: "akureyri", nameZh: "阿克雷里", nameEn: "Akureyri", country: "iceland", tier: "major", zone: "is-north", admin1Zh: "北部", admin1En: "North",
    lon: -18.1105, lat: 65.6839,
    airport: { iata: "AEY", nameZh: "阿克雷里机场", nameEn: "Akureyri Airport", lon: -18.0728, lat: 65.6600 },
    source: "阿克雷里 65.6839,-18.1105；AEY 机场：公开资料",
  },
  {
    id: "husavik", nameZh: "胡萨维克", nameEn: "Húsavík", country: "iceland", tier: "notable", zone: "is-north", admin1Zh: "北部", admin1En: "North",
    lon: -17.3389, lat: 66.0449,
    // airport 字段 2026-09-18 删除：胡萨维克机场（HZK/BIHU）自 2025-03 起没有定期航班
    // （Eagle Air 2024-04 停飞并停业；2024-12–2025-03 由 Norlandair 执飞过一季补贴冬季航班），
    // 按规则 ⑬ 与本库既定做法「无定期航班不填 airport」。⚠️ 机场运营方 innanlandsflugvellir.is 的
    // Húsavík Destinations 页 2026-09-18 仍写着 Eagle Air 每日两班 —— 官方页面比第三方数据集滞后得更久。
    // 1 级旁证：同机构的雷克雅未克机场航司清单只有 Icelandair 与 Norlandair。
    source: "胡萨维克 66.0449,-17.3389；HZK 机场：公开资料",
  },
  {
    id: "isafjordur", nameZh: "伊萨菲厄泽", nameEn: "Ísafjörður", country: "iceland", tier: "notable", zone: "is-westfjords", admin1Zh: "西部峡湾", admin1En: "Westfjords",
    lon: -23.1355, lat: 66.0748,
    airport: { iata: "IFJ", nameZh: "伊萨菲厄泽机场", nameEn: "Ísafjörður Airport", lon: -23.1353, lat: 66.0581 },
    source: "伊萨菲厄泽 66.0748,-23.1355；IFJ 机场：公开资料",
  },
  {
    id: "selfoss", nameZh: "塞尔福斯", nameEn: "Selfoss", country: "iceland", tier: "notable", zone: "is-south", admin1Zh: "南部海岸", admin1En: "South Coast",
    lon: -21.0002, lat: 63.9322,
    source: "塞尔福斯 63.9322,-21.0002（Wikidata）；阿尔博格市镇（1998 年四合一）行政中心；本地小机场 BISF 无定期航班，雷克雅未克国内机场 RKV 直线约 51 km、凯夫拉维克 KEF 约 79 km（按 OurAirports 算），不填机场字段；与北部约克尔萨峡谷的同名瀑布不是一处（已有城市补充批，2026-09-15）",
  },
  {
    id: "heimaey", nameZh: "海梅岛", nameEn: "Heimaey (Vestmannaeyjar)", country: "iceland", tier: "notable", zone: "is-south", admin1Zh: "南部海岸", admin1En: "South Coast",
    lon: -20.2700, lat: 63.4380,
    source: "海梅岛镇中心 63.4380,-20.2700（取兰达教堂与地方博物馆之间，OSM；Wikidata 两个点一在海里、一在岛中心，不用）；韦斯特曼纳群岛镇（市镇代码 8000）；城市 id 不用 vestmannaeyjar（地形条目已占）；韦斯特曼纳群岛机场 VEY 距镇中心约 1.6 km，只有冬季（12–2 月）政府补贴航班（镇官网 2025-11-17 / Norlandair，1 级），不算常规定期航班，不填机场字段；渡轮兰德埃亚港直线约 13 km（已有城市补充批，2026-09-15）",
  },
  {
    id: "stykkisholmur", nameZh: "斯蒂基斯霍尔米", nameEn: "Stykkishólmur", country: "iceland", tier: "notable", zone: "is-west", admin1Zh: "西部", admin1En: "West",
    lon: -22.7303, lat: 65.0743,
    source: "斯蒂基斯霍尔米 65.074258,-22.730295（OSM Nominatim）；镇上的 SYK 机场 OurAirports scheduled_service=no，不填 airport；最近有定期航班的是 RKV 直线约 112 km、KEF 约 121 km（算）（已有城市补充批，2026-09-16）",
  },
  {
    id: "seydisfjordur", nameZh: "塞济斯菲厄泽", nameEn: "Seyðisfjörður", country: "iceland", tier: "notable", zone: "is-east", admin1Zh: "东部", admin1En: "East",
    lon: -14.0049, lat: 65.2598,
    airport: { iata: "EGS", nameZh: "埃伊尔斯塔济机场", nameEn: "Egilsstaðir Airport", lon: -14.4014, lat: 65.2833 },
    source: "塞济斯菲厄泽 65.259848,-14.004901（OSM Nominatim）；本镇没有机场，airport 填 EGS（直线约 19 km，但公路要翻 620 m 的菲亚扎尔海迪山口，正文写清楚）；注：西部峡湾另有一个同名海湾 Seyðisfjörður（66.0078,-22.9080），与本镇无关（已有城市补充批，2026-09-16）",
  },
  // ── 冰岛补城批（2026-09-18，城市 12 → 16）──
  // 安全与零争议前置：英国外交部旅行建议 2026-08-11 更新，对冰岛**没有任何地区级「建议勿前往」**；
  // 雷克雅内斯半岛 2023-12 起的系列喷发只影响格林达维克及其周边（FCDO 原话「the rest of Iceland have not been affected」），
  // **格林达维克本轮不收**；本批四处离受影响区域最近的是赫韦拉格迪（距格林达维克直线约 63 km、距 Sundhnúkur 火口列约 60 km），
  // 远在发布门槛 ② 的 20 km 线之外，四处全部照收。
  // 人口口径：冰岛统计局（Hagstofa Íslands）**2026-01-01**，城镇建成区（byggðakjarni）表 MAN030101 与市镇（sveitarfélag）表 MAN02005，
  //   两张表同日（2026-03-12）更新、常规发布月份为 3 月。**「城镇」与「市镇」是两个口径，正文分开写、不在一句里比。**
  //   ⚠️ 统计局 2024-03 改了人口估算方法（登记 → 登记 + 税务 + 学生数据）并下修了 2011 年起的全部时序，
  //   2024-01-01 全国人口原被高估 15,245 人 —— 所以**2024 年之前发布的旧数与现行数不可混比**
  //   （实例：Vegagerðin 2025 环评文件写 Skagafjörður 2024-01-01 为 4,390，现行表给 4,276，差的是方法不是年份）。
  // 中文译名：四处均**查不到中国外交部 / 新华社口径**，用中文维基条目名，正文首次出现时并列冰岛语原名。
  // 机场：四处**都不填 airport 字段** —— 锡格吕菲厄泽与邵扎克罗库尔各有一座本地机场但均无定期航班
  //   （不在 Isavia 子公司 Innanlandsflugvellir 的定期航班机场名单内），米湖与赫韦拉格迪本地无机场；
  //   最近的有定期航班机场按直线距离分别为 AEY 66.7 / 72.3 / 53.4 km 与 KEF 约 69 km，都远超本库填 airport 的惯例距离。
  // 红线：四个市镇官网都列了议员姓名、政党字母与 2026 年选举得票，**一律只取席位数与会议安排**；
  //   捕鲸、渔业配额、能源与数据中心、移民与族群构成、在任领导人姓名一律不写。
  {
    id: "siglufjordur", nameZh: "锡格吕菲厄泽", nameEn: "Siglufjörður", country: "iceland", tier: "notable", zone: "is-north", admin1Zh: "北部", admin1En: "North",
    lon: -18.9096, lat: 66.1505,
    source: "锡格吕菲厄泽镇中心 66.150493,-18.909628（OSM place=town 节点 61365704）；2026-01-01 城镇人口 1,159（统计局表 MAN030101 code 580，1 级），所属市镇 Fjallabyggð 1,969（表 MAN02005 code 6250，1 级）—— Fjallabyggð = 本镇 1,159 + 奥拉夫斯菲厄泽 771 + 散居 39，三数相加核对过；2006 年与奥拉夫斯菲厄泽合并成 Fjallabyggð（市政府官网，1 级），市政府办公室在本镇 Gránugata 24；议会 7 席（市政府官网，1 级），公开会议在两镇之间轮流举行；本镇 Siglufjarðarflugvöllur 无定期航班（不在 Innanlandsflugvellir 的定期航班机场名单内，1 级），最近有定期航班的是 AEY 直线约 66.7 km（算），不填 airport（冰岛补城批，2026-09-18）",
  },
  {
    id: "saudarkrokur", nameZh: "邵扎克罗库尔", nameEn: "Sauðárkrókur", country: "iceland", tier: "notable", zone: "is-north", admin1Zh: "北部", admin1En: "North",
    lon: -19.6386, lat: 65.7443,
    source: "邵扎克罗库尔镇中心 65.744321,-19.638580（OSM place=town 节点 65295844）；2026-01-01 城镇人口 2,672（统计局表 MAN030101 code 560，1 级），所属市镇 Skagafjörður 4,361（表 MAN02005 code 5716，1 级）；市镇内人口最多的城镇（Vegagerðin 2025 环评文件原话「stærsta þéttbýli sveitarfélagsins」，1 级；按 2026-01-01 数仍成立，已与同市镇的 Varmahlíð / Hólar / Hofsós 核过）；1998 年 11 个市镇合并成 Sveitarfélagið Skagafjörður、2022 年与 Akrahreppur 再合并并改名 Skagafjörður（kennitala 550698-2349 印证 1998，市政府官网 1 级；两次合并的生效日与公投比例只有 3 级来源，正文只写年份）；议会 9 席，市政府在本镇 Skagfirðingabraut 21；本镇 SAK 机场无定期航班（Innanlandsflugvellir 名单，1 级），最近有定期航班的是 AEY 直线约 72.3 km（算），不填 airport（冰岛补城批，2026-09-18）",
  },
  {
    id: "reykjahlid", nameZh: "雷恰赫利兹", nameEn: "Reykjahlíð", country: "iceland", tier: "notable", zone: "is-north", admin1Zh: "北部", admin1En: "North",
    lon: -16.9100, lat: 65.6416,
    source: "雷恰赫利兹村中心 65.641561,-16.910007（OSM place=village 节点 270961115）；2026-01-01 城镇人口 270（统计局表 MAN030101 code 700，1 级；2024=251 / 2025=266，村一级对年份敏感，正文必须带时点），所属市镇 Þingeyjarsveit 1,471（表 MAN02005 code 6613，1 级）；2022 年由 Skútustaðahreppur 与旧 Þingeyjarsveit 合并（kennitala 550322-1100 印证，市政府官网把两个前政府的年度财报分成三套并列存档，1 级；生效日与公投比例只有 3 级来源）；市政府主办公室不在本地、在约 43 km 外的 Laugar（算），本地只有一间**临时关闭**的分支办公室（市政府官网原话「lokuð tímabundið」，1 级）；议会 7 席；本地无机场，最近有定期航班的是 AEY 直线约 53.4 km（算），不填 airport；米湖与拉克萨河保护区依 2004 年第 97 号法（Alþingi 法规库，1 级）、拉姆萨尔湿地（冰岛补城批，2026-09-18）",
  },
  {
    id: "hveragerdi", nameZh: "赫韦拉格迪", nameEn: "Hveragerði", country: "iceland", tier: "notable", zone: "is-south", admin1Zh: "南部海岸", admin1En: "South Coast",
    lon: -21.1868, lat: 63.9976,
    source: "赫韦拉格迪镇中心 63.997594,-21.186830（OSM place=town 节点 59864605）；2026-01-01 城镇人口 3,342（统计局表 MAN030101 code 1170，1 级），所属市镇 Hveragerðisbær 3,344（表 MAN02005 code 8716，1 级）—— **两个数只差 2 人**，是本批「市镇几乎等于城本身」的一端；1929 年成聚落、1946 年从 Ölfushreppur 分出设 Hveragerðishreppur、1987 年改为镇（市政府官网 Saga 页，1 级；1946-04-29 这个具体日期只有 3 级来源，不写），市政府 2026 年在办 80 周年（与 1946 自洽）；**从未合并过**，改以 4 个跨市镇联营体（Bergrisinn / Héraðsnefnd Árnesinga / Sorpstöð Suðurlands / Heilbrigðiseftirlit Suðurlands）购买服务（市政府官网，1 级）；议会 7 席、每月第一个周四 17:00 开会且对公众开放；距格林达维克直线约 63 km（算，发布门槛核查）；本地无机场，不填 airport（冰岛补城批，2026-09-18）",
  },
];
