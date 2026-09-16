import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 文莱 ──
  // 东南亚次区域。安全与零争议前置判断：英国外交部旅行建议（2026-03-19，本轮 2026-09-15 复核仍是该版）对文莱没有任何地区性风险提示，犯罪水平低。
  // 国土窄，四个区的中心镇里三个离陆地国界 < 6 km（按 OSM 国界算）—— 首都与区中心照收，**正文一律不写国界、口岸、对岸城市与邻国行政区名**。
  // 条目只写地理、制度、建筑、交通与参观礼仪；**不写王室与政治体制、宗教评价、族群比例、刑罚细节、油气产业评价与公司名**；王宫、王室御用器物博物馆、陵墓、纪念塔不作 POI。
  // 中文译名随中国外交部：文莱、斯里巴加湾市、文莱—摩拉区、马来奕区、都东区、淡布隆区。
  // 人口口径：区一级用统计局《2025 年人口估算》（时点未注明，写「2025 年估算」）；镇 / 乡 / 村一级只有 **2021 年人口与住房普查附表 B**（1 级）；两套不在一句里比。首都市域人口 unknown（统计年鉴那句 45.86 万是全国数）。
  // 只有文莱国际机场（BWN）有定期客运航班；诗里亚附近的安杜基机场不飞定期航班 —— 首都与水村填 BWN，其余不填。诗里亚并入瓜拉马来奕条目（两镇合设一个市政委员会）。
  {
    id: "bandar-seri-begawan", nameZh: "斯里巴加湾市", nameEn: "Bandar Seri Begawan", country: "brunei", tier: "capital", zone: "bn-west",
    admin1Zh: "文莱—摩拉区", admin1En: "Brunei-Muara District",
    lon: 114.94176, lat: 4.88955,
    airport: { iata: "BWN", nameZh: "文莱国际机场", nameEn: "Brunei International Airport", lon: 114.928001, lat: 4.9442 },
    source: "斯里巴加湾市中心 OSM node 1699083598 4.88955,114.94176（Wikidata Q9279）；首都在文莱—摩拉区、面积约 100.36 km²（统计局《统计年鉴 2025》前言，1 级；中国外交部国家概况 2026-06 同，1 级）；BWN 机场 OurAirports 4.9442,114.9280，距市中心直线约 6.3 km（按坐标算），旅游局称约 15 分钟车程（1 级）；有国际定期航班（文莱皇家航空 2026 夏秋航季时刻表，1 级）",
  },
  {
    id: "kampong-ayer", nameZh: "水村", nameEn: "Kampong Ayer", country: "brunei", tier: "notable", zone: "bn-west",
    admin1Zh: "文莱—摩拉区", admin1En: "Brunei-Muara District",
    lon: 114.9439, lat: 4.88186,
    airport: { iata: "BWN", nameZh: "文莱国际机场", nameEn: "Brunei International Airport", lon: 114.928001, lat: 4.9442 },
    source: "水村 OSM node 5863646187 4.88186,114.9439，距斯里巴加湾市中心直线约 0.9 km、BWN 约 7.2 km（按坐标算）；建在文莱河上的高脚屋聚落，以木栈道和桥相连（旅游局地点页，1 级）；比照新加坡按片区拆分、与首都分开写（地形条目 brunei-river-estuary 锚点同点）",
  },
  {
    id: "tutong", nameZh: "都东", nameEn: "Tutong", country: "brunei", tier: "notable", zone: "bn-west",
    admin1Zh: "都东区", admin1En: "Tutong District",
    lon: 114.6595, lat: 4.80667,
    source: "都东镇 OSM node 5940019095 4.80667,114.6595；都东区中心，设都东市政委员会（统计局《统计年鉴 2025》预算表，1 级）；BWN 直线约 33 km（按坐标算），本地没有定期航班的机场（只有直升机坪，OurAirports，3 级），不填机场字段",
  },
  {
    id: "kuala-belait", nameZh: "瓜拉马来奕", nameEn: "Kuala Belait", country: "brunei", tier: "notable", zone: "bn-west",
    admin1Zh: "马来奕区", admin1En: "Belait District",
    lon: 114.19324, lat: 4.58451,
    source: "瓜拉马来奕镇 OSM node 1013092342 4.58451,114.19324；马来奕区中心，与诗里亚合设一个市政委员会（统计局《统计年鉴 2025》预算表「Lembaga Bandaran Kuala Belait dan Seria」，1 级）；诗里亚镇 OSM 4.61416,114.33018、两镇直线约 15.5 km（按坐标算）；BWN 直线约 91 km，附近安杜基机场（KUB）不飞定期航班（OurAirports，3 级），不填机场字段",
  },
  {
    id: "bangar", nameZh: "邦阿", nameEn: "Bangar", country: "brunei", tier: "notable", zone: "bn-east",
    admin1Zh: "淡布隆区", admin1En: "Temburong District",
    lon: 115.07244, lat: 4.70765,
    source: "邦阿镇 OSM node 1699103550 4.70765,115.07244；淡布隆区中心，没有市政委员会（统计局《统计年鉴 2025》预算表只列三个市政委员会，1 级）；约 30 km 的淡布隆大桥 2020 年 3 月通车（旅游局地点页，1 级）；BWN 直线约 31 km（按坐标算），本地没有定期航班的机场（只有直升机坪，OurAirports，3 级），不填机场字段",
  },
  {
    id: "muara", nameZh: "摩拉", nameEn: "Muara", country: "brunei", tier: "notable", zone: "bn-west", admin1Zh: "文莱—摩拉区", admin1En: "Brunei-Muara District",
    lon: 115.07023, lat: 5.02626,
    source: "摩拉镇 5.02626,115.07023（OSM node 369493516，place=town）；本地没有定期航班的机场，BWN 直线约 18 km（算）—— 比照都东（约 33 km 不填）与斯里巴加湾（约 6 km 填）的既有做法，本条目不填 airport，在正文里写距离（已有城市补充批，2026-09-16）",
  },
  {
    id: "labi", nameZh: "拉比", nameEn: "Labi", country: "brunei", tier: "notable", zone: "bn-west", admin1Zh: "马来奕区", admin1En: "Belait District",
    lon: 114.4658, lat: 4.4044,
    source: "拉比 4.4044,114.4658 —— OSM 上没有 Kg Labi 的 place 节点，锚点取本地的中华拉比学校（OSM way 1084907132）；BWN 直线约 79 km（算），不填 airport；与地形条目 labi-hills（拉比丘陵，锚点为特拉加山）互指（已有城市补充批，2026-09-16）",
  },
];
