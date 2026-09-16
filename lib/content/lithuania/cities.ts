import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 立陶宛 ──
  // 北欧次区域（联合国 M49）。安全与零争议前置判断：无活跃冲突、不在 §2.1 排除名单内；
  // 条目只写地理、制度与广泛记载的前现代史实；**不写族群构成、语言政策、两次世界大战与苏联时期叙事、领土与边境议题**
  // （考纳斯不写「临时首都」及其原因；克莱佩达不写 1923 / 1939 归属与旧名；库尔斯沙嘴只写「库尔斯沙嘴」不写全长与另一侧；
  // 边境城市德鲁斯基宁凯本批不收）。
  // 人口一律取立陶宛统计局 OSP「年初常住人口」2026-01-01 数（SDMX API，S3R167_M3010210_1 城市 / S3R167_M3010214 市镇，2026-05-07 更新，1 级）；
  // 城市（miestas）与所属市镇（savivaldybė）分开写；「XX 市市镇」与同名「XX 区市镇」是两个政府。
  // admin1 用 10 个县（apskritis）作目录分组 —— 2010 年撤销县长公署后县只是地域与统计单位，正文不称「县政府」。
  // 机场坐标取 OurAirports；希奥利艾 SQQ、尼达小机场无定期客运航班，不填 airport；克莱佩达本市无机场，最近的 PLQ 在帕兰加市域。
  {
    id: "vilnius", nameZh: "维尔纽斯", nameEn: "Vilnius", country: "lithuania", tier: "capital", zone: "lt-east",
    admin1Zh: "维尔纽斯县", admin1En: "Vilnius County",
    lon: 25.2800, lat: 54.6872,
    airport: { iata: "VNO", nameZh: "维尔纽斯国际机场", nameEn: "Vilnius International Airport", lon: 25.285801, lat: 54.634102 },
    source: "维尔纽斯市中心 54.6872,25.2800（Wikidata Q216）；VNO 机场 OurAirports 54.6341,25.2858，距市中心直线约 5.9 km（按本条目坐标算）；2025—2029 年另有象征性名称「维尔纽斯丘尔廖尼斯国际机场」，正式名称不变（LRT，2 级）",
  },
  {
    id: "kaunas", nameZh: "考纳斯", nameEn: "Kaunas", country: "lithuania", tier: "major", zone: "lt-central",
    admin1Zh: "考纳斯县", admin1En: "Kaunas County",
    lon: 23.9333, lat: 54.9000,
    airport: { iata: "KUN", nameZh: "考纳斯国际机场", nameEn: "Kaunas International Airport", lon: 24.08582, lat: 54.963965 },
    source: "考纳斯市中心 54.9000,23.9333（Wikidata）；KUN 机场 OurAirports 54.9640,24.0858，在考纳斯区市镇的卡尔梅拉瓦、不在考纳斯市域（ltwiki，3 级），距市中心直线约 12 km（按本条目坐标算）",
  },
  {
    id: "klaipeda", nameZh: "克莱佩达", nameEn: "Klaipėda", country: "lithuania", tier: "major", zone: "lt-west",
    admin1Zh: "克莱佩达县", admin1En: "Klaipėda County",
    lon: 21.1350, lat: 55.7125,
    source: "克莱佩达市中心 55.7125,21.1350（Wikidata）；本市无机场，不填 airport 字段；最近的有定期航班的机场是帕兰加 PLQ（在帕兰加市域），直线约 29 km（按坐标算），机场—克莱佩达汽车站大巴约 39 分钟（国家公共交通数据门户 GTFS 2026-09-16，1 级）",
  },
  {
    id: "siauliai", nameZh: "希奥利艾", nameEn: "Šiauliai", country: "lithuania", tier: "major", zone: "lt-north",
    admin1Zh: "希奥利艾县", admin1En: "Šiauliai County",
    lon: 23.3167, lat: 55.9281,
    source: "希奥利艾市中心 55.9281,23.3167（Wikidata）；希奥利艾机场 SQQ 无定期客运航班（OurAirports scheduled_service=no），不填 airport 字段；有定期航班的最近机场为考纳斯 KUN，直线约 118 km（按坐标算）",
  },
  {
    id: "panevezys", nameZh: "帕内韦日斯", nameEn: "Panevėžys", country: "lithuania", tier: "major", zone: "lt-north",
    admin1Zh: "帕内韦日斯县", admin1En: "Panevėžys County",
    lon: 24.3639, lat: 55.7250,
    source: "帕内韦日斯市中心 55.7250,24.3639（Wikidata）；本地无机场，不填 airport 字段；考纳斯 KUN 直线约 86 km、维尔纽斯 VNO 直线约 135 km（按坐标算）",
  },
  {
    id: "trakai", nameZh: "特拉凯", nameEn: "Trakai", country: "lithuania", tier: "notable", zone: "lt-east",
    admin1Zh: "维尔纽斯县", admin1En: "Vilnius County",
    lon: 24.9333, lat: 54.6333,
    source: "特拉凯镇中心 54.6333,24.9333（Wikidata）；特拉凯区市镇行政中心；本地无机场，不填 airport 字段；维尔纽斯 VNO 直线约 23 km（按坐标算）",
  },
  {
    id: "palanga", nameZh: "帕兰加", nameEn: "Palanga", country: "lithuania", tier: "notable", zone: "lt-west",
    admin1Zh: "克莱佩达县", admin1En: "Klaipėda County",
    lon: 21.0667, lat: 55.9167,
    airport: { iata: "PLQ", nameZh: "帕兰加国际机场", nameEn: "Palanga International Airport", lon: 21.093901, lat: 55.973202 },
    source: "帕兰加市中心 55.9167,21.0667（Wikidata）；PLQ 机场 OurAirports 55.9732,21.0939，地址在帕兰加市市镇（OSM，3 级），距市中心直线约 6.5 km（按本条目坐标算），机场—帕兰加汽车站大巴约 11 分钟（GTFS 2026-09-16，1 级）",
  },
  {
    id: "nida", nameZh: "尼达（内林加）", nameEn: "Nida (Neringa)", country: "lithuania", tier: "notable", zone: "lt-west",
    admin1Zh: "克莱佩达县", admin1En: "Klaipėda County",
    lon: 21.0053, lat: 55.3040,
    source: "尼达中心 55.3040,21.0053（Wikidata Q1004306）；尼达属内林加市（城市由库尔斯沙嘴上 4 个聚落组成、与市镇范围重合，vle.lt 2 级；统计局把内林加单列为一座城市，1 级），尼达本身无单列统计人口；尼达小机场无定期客运航班，不填 airport 字段；帕兰加 PLQ 直线约 75 km（按坐标算）；中文「内林加」无中文维基条目，为音译",
  },
  {
    id: "birstonas", nameZh: "比尔什托纳斯", nameEn: "Birštonas", country: "lithuania", tier: "notable", zone: "lt-central",
    admin1Zh: "考纳斯县", admin1En: "Kaunas County",
    lon: 24.0333, lat: 54.6000,
    source: "比尔什托纳斯镇中心 54.6000,24.0333（Wikidata）；本地无机场，不填 airport 字段；考纳斯 KUN 直线约 41 km（按坐标算）；选它而不选德鲁斯基宁凯是零争议取舍（后者紧邻国界、史实段以二十世纪归属更迭为主）",
  },
  {
    id: "anyksciai", nameZh: "阿尼克什奇艾", nameEn: "Anykščiai", country: "lithuania", tier: "notable", zone: "lt-north",
    admin1Zh: "乌田纳县", admin1En: "Utena County",
    lon: 25.1030, lat: 55.5250,
    source: "阿尼克什奇艾镇中心圣马太教堂一带 55.5250,25.1030（OSM）；本地没有定期航班的机场，不填 airport；考纳斯 KUN 直线约 90 km、维尔纽斯 VNO 约 100 km（按 OurAirports 算）；离国界约 70 km（已有城市补充批，2026-09-16）",
  },
  {
    id: "plunge", nameZh: "普伦盖", nameEn: "Plungė", country: "lithuania", tier: "notable", zone: "lt-west", admin1Zh: "特尔希艾县", admin1En: "Telšiai County",
    lon: 21.8534, lat: 55.9139,
    source: "普伦盖 55.9139,21.8534（OSM place 节点，靠近车站；庄园在城西北约 1 km）；20 km 内无有定期航班的机场，最近是帕兰加 PLQ、直线约 48 km（算）；热马伊蒂亚国家公园管理局与游客中心在本市镇的普拉特利艾镇（公园官网地址，1 级），与地形条目 plateliai-lake、zemaiciai-upland 互指（已有城市补充批，2026-09-16）",
  },
  {
    id: "alytus", nameZh: "阿利图斯", nameEn: "Alytus", country: "lithuania", tier: "major", zone: "lt-central", admin1Zh: "阿利图斯县", admin1En: "Alytus County",
    lon: 24.0459, lat: 54.3961,
    source: "阿利图斯 54.3961,24.0459（OSM place 节点）；城边 2 km 确有一座机场但 scheduled_service=no，按规则 ⑬ 正文写「没有定期航班的机场」、不填 airport；最近有定期航班的是考纳斯 KUN、直线约 63 km（算）；与地形条目 nemunas-river、dzukai-upland、zuvintas 互指（已有城市补充批，2026-09-16）",
  },
];
