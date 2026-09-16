import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 欧洲 / 马耳他 =====
  // 南欧次区域第七国。安全与零争议前置判断：无活跃冲突、不在 §2.1 排除名单内；
  // 条目只写地理、制度与广泛记载的史实；**不写移民、建设开发、海域划界等议题**。
  // 马耳他没有「市」这一级：全国分 68 个地方议会辖区（locality），下面的「城市」都是 locality。
  // 人口一律用 NSO《World Population Day: 11 July 2026》（NR 120/2026，2026-07-09 发布）表 11
  // 的 2025-12-31 分地方人口（在浏览器里直接解析官方 xlsx 取数，1 级）。
  // 大区归属按政府文化机构 vca.gov.mt 发布的六大区地图（2021 年起的六个大区议会，1 级）。
  // 全国唯一的民用机场为卢卡的马耳他国际机场（MLA）；戈佐岛无定期航班，不填 airport。
  {
    id: "valletta", nameZh: "瓦莱塔", nameEn: "Valletta", country: "malta", tier: "capital", zone: "mt-harbour",
    admin1Zh: "港口大区", admin1En: "Port Region",
    lon: 14.5125, lat: 35.8983,
    airport: { iata: "MLA", nameZh: "马耳他国际机场", nameEn: "Malta International Airport", lon: 14.4775, lat: 35.8575 },
    source: "瓦莱塔城门一带 35.8983,14.5125；MLA 机场在卢卡 35.8575,14.4775（按本条目坐标算直线约 5.5 km，公开资料多写公路约 8 km；机场—瓦莱塔的直达公交 2025-04-20 起由 X4 改为 TD4 路，Malta Public Transport 公告）：维基坐标与 maltauncovered 等公开资料",
  },
  {
    id: "sliema", nameZh: "斯利马", nameEn: "Sliema", country: "malta", tier: "major", zone: "mt-harbour",
    admin1Zh: "东部大区", admin1En: "Eastern Region",
    lon: 14.5042, lat: 35.9122,
    airport: { iata: "MLA", nameZh: "马耳他国际机场", nameEn: "Malta International Airport", lon: 14.4775, lat: 35.8575 },
    source: "斯利马 35.9122,14.5042；MLA 机场直线约 6.5 km（按本条目坐标算）：维基坐标与公开资料",
  },
  {
    id: "st-julians", nameZh: "圣朱利安斯", nameEn: "St Julian's", country: "malta", tier: "notable", zone: "mt-harbour",
    admin1Zh: "东部大区", admin1En: "Eastern Region",
    lon: 14.4900, lat: 35.9186,
    airport: { iata: "MLA", nameZh: "马耳他国际机场", nameEn: "Malta International Airport", lon: 14.4775, lat: 35.8575 },
    source: "圣朱利安斯 35.9186,14.4900；MLA 机场直线约 6.9 km（按本条目坐标算）：维基坐标与公开资料",
  },
  {
    id: "mdina", nameZh: "姆迪纳与拉巴特", nameEn: "Mdina & Rabat", country: "malta", tier: "notable", zone: "mt-west",
    admin1Zh: "西部大区", admin1En: "Western Region",
    lon: 14.4031, lat: 35.8858,
    airport: { iata: "MLA", nameZh: "马耳他国际机场", nameEn: "Malta International Airport", lon: 14.4775, lat: 35.8575 },
    source: "姆迪纳 35.8858,14.4031（拉巴特紧邻其南侧 35.8817,14.3989）；MLA 机场直线约 7.4 km（按本条目坐标算）：维基坐标与公开资料",
  },
  {
    id: "birgu", nameZh: "比尔古（三城）", nameEn: "Birgu (Three Cities)", country: "malta", tier: "notable", zone: "mt-harbour",
    admin1Zh: "港口大区", admin1En: "Port Region",
    lon: 14.5225, lat: 35.8881,
    airport: { iata: "MLA", nameZh: "马耳他国际机场", nameEn: "Malta International Airport", lon: 14.4775, lat: 35.8575 },
    source: "比尔古 35.8881,14.5225；MLA 机场直线约 5.3 km（按本条目坐标算）：维基坐标与公开资料",
  },
  {
    id: "victoria-gozo", nameZh: "维多利亚（戈佐岛）", nameEn: "Victoria (Gozo)", country: "malta", tier: "major", zone: "mt-gozo",
    admin1Zh: "戈佐大区", admin1En: "Gozo Region",
    lon: 14.2431, lat: 36.0436,
    source: "维多利亚 36.0436,14.2431；戈佐岛无定期航班，不填 airport 字段；经奇克瓦—米加尔渡轮（约 25 分钟）或瓦莱塔—米加尔快船往返马耳他岛，最近机场为马耳他岛的 MLA：维基坐标与 Gozo Channel、visitgozo.com",
  },
  {
    id: "marsaxlokk", nameZh: "马尔萨什洛克", nameEn: "Marsaxlokk", country: "malta", tier: "notable", zone: "mt-south",
    admin1Zh: "南部大区", admin1En: "Southern Region",
    lon: 14.5447, lat: 35.8417,
    airport: { iata: "MLA", nameZh: "马耳他国际机场", nameEn: "Malta International Airport", lon: 14.4775, lat: 35.8575 },
    source: "马尔萨什洛克 35.8417,14.5447；MLA 机场直线约 6.3 km（按本条目坐标算）：维基坐标与公开资料",
  },
  {
    id: "mellieha", nameZh: "梅利哈", nameEn: "Mellieħa", country: "malta", tier: "notable", zone: "mt-north",
    admin1Zh: "北部大区", admin1En: "Northern Region",
    lon: 14.3664, lat: 35.9564,
    airport: { iata: "MLA", nameZh: "马耳他国际机场", nameEn: "Malta International Airport", lon: 14.4775, lat: 35.8575 },
    source: "梅利哈 35.9564,14.3664；MLA 机场直线约 15 km（按本条目坐标算）；去戈佐岛的奇克瓦渡轮码头在梅利哈辖区西北端：维基坐标与公开资料",
  },
  {
    id: "st-pauls-bay", nameZh: "圣保罗湾", nameEn: "St Paul's Bay", country: "malta", tier: "notable", zone: "mt-north",
    admin1Zh: "北部大区", admin1En: "Northern Region",
    lon: 14.4017, lat: 35.9483,
    airport: { iata: "MLA", nameZh: "马耳他国际机场", nameEn: "Malta International Airport", lon: 14.4775, lat: 35.8575 },
    source: "圣保罗湾 35.9483,14.4017（布吉巴、夸拉同属本地方议会）；MLA 机场直线约 12 km（按本条目坐标算）：维基坐标、圣保罗湾地方议会官网",
  },
  {
    id: "qrendi", nameZh: "奎伦迪", nameEn: "Qrendi", country: "malta", tier: "notable", zone: "mt-west",
    admin1Zh: "西部大区", admin1En: "Western Region",
    lon: 14.4589, lat: 35.8342,
    airport: { iata: "MLA", nameZh: "马耳他国际机场", nameEn: "Malta International Airport", lon: 14.4775, lat: 35.8575 },
    source: "奎伦迪 35.8342,14.4589（Wikidata）；属西部大区（regjunpunent.gov.mt，1 级）；MLA 直线约 3.1 km（按本条目坐标算）；中文译名沿用仓库地形条目「奎伦迪」（已有城市补充批，2026-09-16）",
  },
  {
    id: "xaghra", nameZh: "沙拉（戈佐岛）", nameEn: "Ix-Xagħra", country: "malta", tier: "notable", zone: "mt-gozo", admin1Zh: "戈佐大区", admin1En: "Gozo Region",
    lon: 14.2648, lat: 36.0503,
    source: "沙拉辖区中心 36.0503,14.2648（OSM Nominatim，与教区圣殿基本重合）；戈佐岛没有定期航班，不填 airport，最近有定期航班的是 MLA、直线约 29 km（算）；与地形条目 gozo-uplands、ramla-bay 互指（已有城市补充批，2026-09-16）",
  },
  {
    id: "mosta", nameZh: "莫斯塔", nameEn: "Il-Mosta", country: "malta", tier: "major", zone: "mt-north", admin1Zh: "北部大区", admin1En: "Northern Region",
    lon: 14.4258, lat: 35.9101,
    airport: { iata: "MLA", nameZh: "马耳他国际机场", nameEn: "Malta International Airport", lon: 14.4775, lat: 35.8575 },
    source: "莫斯塔圆顶教堂前的广场 35.9101,14.4258（OSM）；MLA 直线约 7.5 km（算）；地形条目 great-fault-malta 的锚点就在本辖区北端的莫斯塔堡一带，两边互指（已有城市补充批，2026-09-16）",
  },
];
