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
    airport: { iata: "HZK", nameZh: "胡萨维克机场", nameEn: "Húsavík Airport", lon: -17.4260, lat: 65.9522 },
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
];
