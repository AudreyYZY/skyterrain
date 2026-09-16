import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 挪威 ──
  {
    id: "oslo", nameZh: "奥斯陆", nameEn: "Oslo", country: "norway", tier: "capital", zone: "no-eastern", admin1Zh: "奥斯陆", admin1En: "Oslo",
    lon: 10.7522, lat: 59.9139,
    airport: { iata: "OSL", nameZh: "奥斯陆加勒穆恩机场", nameEn: "Oslo Gardermoen", lon: 11.1004, lat: 60.1939 },
    source: "奥斯陆市中心 59.9139,10.7522；OSL 机场：公开资料",
  },
  {
    id: "lillehammer", nameZh: "利勒哈默尔", nameEn: "Lillehammer", country: "norway", tier: "notable", zone: "no-eastern", admin1Zh: "内陆郡", admin1En: "Innlandet County",
    lon: 10.4662, lat: 61.1153,
    source: "利勒哈默尔 61.1153,10.4662：公开资料（无机场，铁路进入，1994 冬奥会举办地）",
  },
  {
    id: "kristiansand", nameZh: "克里斯蒂安桑", nameEn: "Kristiansand", country: "norway", tier: "notable", zone: "no-southern", admin1Zh: "阿格德尔郡", admin1En: "Agder County",
    lon: 7.9956, lat: 58.1467,
    airport: { iata: "KRS", nameZh: "谢维克机场", nameEn: "Kristiansand Airport, Kjevik", lon: 8.0853, lat: 58.2042 },
    source: "克里斯蒂安桑市中心 58.1467,7.9956；KRS 机场：公开资料",
  },
  {
    id: "stavanger", nameZh: "斯塔万格", nameEn: "Stavanger", country: "norway", tier: "major", zone: "no-western", admin1Zh: "罗加兰郡", admin1En: "Rogaland County",
    lon: 5.7331, lat: 58.9700,
    airport: { iata: "SVG", nameZh: "索拉机场", nameEn: "Stavanger Airport, Sola", lon: 5.6378, lat: 58.8767 },
    source: "斯塔万格市中心 58.9700,5.7331；SVG 机场：公开资料",
  },
  {
    id: "bergen", nameZh: "卑尔根", nameEn: "Bergen", country: "norway", tier: "major", zone: "no-western", admin1Zh: "韦斯特兰郡", admin1En: "Vestland County",
    lon: 5.3221, lat: 60.3913,
    airport: { iata: "BGO", nameZh: "弗莱斯兰机场", nameEn: "Bergen Airport, Flesland", lon: 5.2181, lat: 60.2934 },
    source: "卑尔根市中心 60.3913,5.3221；BGO 机场：公开资料",
  },
  {
    id: "alesund", nameZh: "奥勒松", nameEn: "Ålesund", country: "norway", tier: "notable", zone: "no-western", admin1Zh: "默勒-鲁姆斯达尔郡", admin1En: "Møre og Romsdal County",
    lon: 6.1495, lat: 62.4722,
    airport: { iata: "AES", nameZh: "维格拉机场", nameEn: "Ålesund Airport, Vigra", lon: 6.1197, lat: 62.5625 },
    source: "奥勒松市中心 62.4722,6.1495；AES 机场：公开资料",
  },
  {
    id: "trondheim", nameZh: "特隆赫姆", nameEn: "Trondheim", country: "norway", tier: "major", zone: "no-central", admin1Zh: "特伦德拉格郡", admin1En: "Trøndelag County",
    lon: 10.3951, lat: 63.4305,
    airport: { iata: "TRD", nameZh: "韦讷斯机场", nameEn: "Trondheim Airport, Værnes", lon: 10.9240, lat: 63.4578 },
    source: "特隆赫姆市中心 63.4305,10.3951；TRD 机场：公开资料",
  },
  {
    id: "bodo", nameZh: "博德", nameEn: "Bodø", country: "norway", tier: "notable", zone: "no-northern", admin1Zh: "诺尔兰郡", admin1En: "Nordland County",
    lon: 14.4049, lat: 67.2804,
    airport: { iata: "BOO", nameZh: "博德机场", nameEn: "Bodø Airport", lon: 14.3653, lat: 67.2692 },
    source: "博德市中心 67.2804,14.4049；BOO 机场：公开资料",
  },
  {
    id: "narvik", nameZh: "纳尔维克", nameEn: "Narvik", country: "norway", tier: "notable", zone: "no-northern", admin1Zh: "诺尔兰郡", admin1En: "Nordland County",
    lon: 17.4272, lat: 68.4385,
    source: "纳尔维克 68.4385,17.4272：公开资料（无就近机场，Ofoten 铁路终点、深水不冻港）",
  },
  {
    id: "tromso", nameZh: "特罗姆瑟", nameEn: "Tromsø", country: "norway", tier: "major", zone: "no-arctic", admin1Zh: "特罗姆斯郡", admin1En: "Troms County",
    lon: 18.9553, lat: 69.6492,
    airport: { iata: "TOS", nameZh: "朗内斯机场", nameEn: "Tromsø Airport, Langnes", lon: 18.9189, lat: 69.6833 },
    source: "特罗姆瑟市中心 69.6492,18.9553；TOS 机场：公开资料",
  },
  {
    id: "alta", nameZh: "阿尔塔", nameEn: "Alta", country: "norway", tier: "notable", zone: "no-arctic", admin1Zh: "芬马克郡", admin1En: "Finnmark County",
    lon: 23.2716, lat: 69.9689,
    airport: { iata: "ALF", nameZh: "阿尔塔机场", nameEn: "Alta Airport", lon: 23.3717, lat: 69.9761 },
    source: "阿尔塔 69.9689,23.2716；ALF 机场：公开资料",
  },
  {
    id: "svolvaer", nameZh: "斯沃尔韦尔（罗弗敦）", nameEn: "Svolvær (Lofoten)", country: "norway", tier: "notable", zone: "no-northern", admin1Zh: "诺尔兰郡", admin1En: "Nordland County",
    lon: 14.5646, lat: 68.2322,
    airport: { iata: "SVJ", nameZh: "斯沃尔韦尔赫勒机场", nameEn: "Svolvær Airport, Helle", lon: 14.6692, lat: 68.2433 },
    source: "斯沃尔韦尔港边广场 68.2322,14.5646（OSM）；SVJ 机场 OurAirports 68.2433,14.6692，直线约 4.5 km，2026-09-17 有往返博德的定期航班（Entur，1 级）；沃根市镇行政中心（已有城市补充批，2026-09-16）",
  },
  {
    id: "roros", nameZh: "勒罗斯", nameEn: "Røros", country: "norway", tier: "notable", zone: "no-central", admin1Zh: "特伦德拉格郡", admin1En: "Trøndelag County",
    lon: 11.3836, lat: 62.5746,
    airport: { iata: "RRS", nameZh: "勒罗斯机场", nameEn: "Røros Airport", lon: 11.3423, lat: 62.5784 },
    source: "勒罗斯镇中心 62.5746,11.3836（OSM）；RRS 机场 OurAirports 62.5784,11.3423，直线约 2.2 km，2026-09 有往返奥斯陆的定期航班（Entur，1 级）；地形条目 glomma / femund 已用「勒罗斯」译名（已有城市补充批，2026-09-16）",
  },
];
