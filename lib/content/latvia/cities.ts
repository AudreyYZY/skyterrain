import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 拉脱维亚 ──
  // 北欧次区域。安全与零争议前置判断：无活跃冲突、不在 §2.1 排除名单内；
  // 条目只写地理、制度与广泛记载的前现代史实；**不写族群构成、语言政策、两次世界大战与苏联时期叙事、边境议题**
  // （陶格夫匹尔斯只写城市结构、要塞建筑与文化；卡罗斯塔只写建成年代与建筑）。
  // 人口一律取中央统计局 CSP 表 IRS031「年初人口（城市、镇与市镇）」2026-01-01 数（PxWeb API 直接取数，2026-06-02 更新，1 级）；
  // 2021 年地方政府改革后全国 42 个地方政府 = 7 个国家城市地方政府 + 35 个市镇（novads），锡古尔达 / 采西斯 / 库尔迪加是所属市镇的镇，
  // 镇与市镇人口分开写明。admin1 用 5 个规划区域（内阁条例 MK Nr. 418，1 级）作目录分组 —— 规划区域不是一级地方政府，正文不称其为「省 / 州」。
  // 机场坐标取 OurAirports；利耶帕亚 LPX、文茨皮尔斯 VNT 目前无定期客运航班，不填 airport。
  {
    id: "riga", nameZh: "里加", nameEn: "Riga", country: "latvia", tier: "capital", zone: "lv-riga",
    admin1Zh: "里加规划区域", admin1En: "Riga Planning Region",
    lon: 24.1064, lat: 56.9489,
    airport: { iata: "RIX", nameZh: "里加国际机场", nameEn: "Riga International Airport", lon: 23.970711, lat: 56.920752 },
    source: "里加市中心 56.9489,24.1064（维基）；RIX 机场 OurAirports 56.9208,23.9707，位于马鲁佩市镇、不在里加市域内（OurAirports iso_region LV-062），距市中心直线约 8.8 km（按本条目坐标算）",
  },
  {
    id: "daugavpils", nameZh: "陶格夫匹尔斯", nameEn: "Daugavpils", country: "latvia", tier: "major", zone: "lv-latgale",
    admin1Zh: "拉特加莱规划区域", admin1En: "Latgale Planning Region",
    lon: 26.5161, lat: 55.8714,
    source: "陶格夫匹尔斯市中心 55.8714,26.5161（Wikidata Q80021 / OSM）；本地无定期航班机场（Grīva 小机场无定期航班，OurAirports），不填 airport 字段；有定期航班的里加 RIX 直线约 195 km（按坐标算）；中文名取中文维基「陶格夫匹尔斯」",
  },
  {
    id: "liepaja", nameZh: "利耶帕亚", nameEn: "Liepāja", country: "latvia", tier: "major", zone: "lv-kurzeme",
    admin1Zh: "库尔泽梅规划区域", admin1En: "Kurzeme Planning Region",
    lon: 21.0111, lat: 56.5083,
    source: "利耶帕亚市中心 56.5083,21.0111（Wikidata）；利耶帕亚国际机场 LPX 在城东直线约 5 km，2020 年 9 月起没有定期客运航班（LSM 2020-09-17 与 2026-04-28，2 级），不填 airport 字段；里加 RIX 直线约 186 km（按坐标算）",
  },
  {
    id: "jelgava", nameZh: "叶尔加瓦", nameEn: "Jelgava", country: "latvia", tier: "major", zone: "lv-zemgale",
    admin1Zh: "泽姆加莱规划区域", admin1En: "Zemgale Planning Region",
    lon: 23.7244, lat: 56.6522,
    source: "叶尔加瓦市中心 56.6522,23.7244（Wikidata）；本地无定期航班机场，不填 airport 字段；里加 RIX 直线约 33 km（按坐标算）",
  },
  {
    id: "jurmala", nameZh: "尤尔马拉", nameEn: "Jūrmala", country: "latvia", tier: "major", zone: "lv-riga",
    admin1Zh: "里加规划区域", admin1En: "Riga Planning Region",
    lon: 23.7968, lat: 56.9713,
    source: "尤尔马拉以马约里（Majori）为中心，旅游信息中心设在马约里（visitjurmala.lv，1 级）；坐标取马约里站 OSM 56.9713,23.7968；本地无机场，不填 airport 字段；里加 RIX 直线约 12 km（按坐标算）",
  },
  {
    id: "ventspils", nameZh: "文茨皮尔斯", nameEn: "Ventspils", country: "latvia", tier: "notable", zone: "lv-kurzeme",
    admin1Zh: "库尔泽梅规划区域", admin1En: "Kurzeme Planning Region",
    lon: 21.5644, lat: 57.3897,
    source: "文茨皮尔斯市中心 57.3897,21.5644（Wikidata）；文茨皮尔斯国际机场 VNT 在城南直线约 4 km，无定期客运航班（机场官网史页：airBaltic 仅 2008-04-11 至 2008-09-30 飞过里加线，1 级；OurAirports scheduled_service=no），不填 airport 字段；里加 RIX 直线约 154 km（按坐标算）",
  },
  {
    id: "sigulda", nameZh: "锡古尔达", nameEn: "Sigulda", country: "latvia", tier: "notable", zone: "lv-riga",
    admin1Zh: "里加规划区域", admin1En: "Riga Planning Region",
    lon: 24.8544, lat: 57.1539,
    source: "锡古尔达镇中心 57.1539,24.8544（Wikidata）；锡古尔达市镇属里加规划区域（MK Nr. 418，1 级）；本地无机场，不填 airport 字段；里加 RIX 直线约 59 km（按坐标算）",
  },
  {
    id: "cesis", nameZh: "采西斯", nameEn: "Cēsis", country: "latvia", tier: "notable", zone: "lv-vidzeme",
    admin1Zh: "维泽梅规划区域", admin1En: "Vidzeme Planning Region",
    lon: 25.2747, lat: 57.3131,
    source: "采西斯镇中心 57.3131,25.2747（Wikidata）；本地无定期航班机场，不填 airport 字段；里加 RIX 直线约 90 km（按坐标算）",
  },
  {
    id: "kuldiga", nameZh: "库尔迪加", nameEn: "Kuldīga", country: "latvia", tier: "notable", zone: "lv-kurzeme",
    admin1Zh: "库尔泽梅规划区域", admin1En: "Kurzeme Planning Region",
    lon: 21.9700, lat: 56.9672,
    source: "库尔迪加镇中心 56.9672,21.9700（Wikidata）；本地无定期航班机场，不填 airport 字段；里加 RIX 直线约 122 km（按坐标算）",
  },
  {
    id: "valmiera", nameZh: "瓦尔米耶拉", nameEn: "Valmiera", country: "latvia", tier: "notable", zone: "lv-vidzeme",
    admin1Zh: "维泽梅规划区域", admin1En: "Vidzeme Planning Region",
    lon: 25.4264, lat: 57.5385,
    source: "瓦尔米耶拉老城圣西门教堂一带 57.5385,25.4264（OSM）；国家城市、属瓦尔米耶拉市镇（likumi.lv，1 级）；本地没有定期航班的机场，不填 airport；里加 RIX 直线约 111 km（按 OurAirports 算）；离国界约 43 km（已有城市补充批，2026-09-16）",
  },
];
