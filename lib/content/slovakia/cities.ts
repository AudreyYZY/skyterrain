import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 欧洲 / 斯洛伐克 =====
  // 东欧次区域第四国（波兰、捷克、匈牙利之后）。安全与零争议前置判断：无活跃冲突、
  // 不在 §2.1 排除名单内；条目只写地理、制度与广泛记载的前现代史，
  // **二十世纪的政治 / 领土 / 民族议题一律不碰**。
  {
    id: "bratislava", nameZh: "布拉迪斯拉发", nameEn: "Bratislava", country: "slovakia", tier: "capital", zone: "sk-bratislava",
    admin1Zh: "布拉迪斯拉发州", admin1En: "Bratislava Region",
    lon: 17.1077, lat: 48.1486,
    airport: { iata: "BTS", nameZh: "布拉迪斯拉发什特凡尼克机场", nameEn: "Bratislava M. R. Štefánik Airport", lon: 17.2127, lat: 48.1702 },
    source: "布拉迪斯拉发市中心 48.1486,17.1077；BTS 机场 48.1702,17.2127：公开资料",
  },
  {
    id: "kosice", nameZh: "科希策", nameEn: "Košice", country: "slovakia", tier: "major", zone: "sk-east",
    admin1Zh: "科希策州", admin1En: "Košice Region",
    lon: 21.2611, lat: 48.7164,
    airport: { iata: "KSC", nameZh: "科希策国际机场", nameEn: "Košice International Airport", lon: 21.2411, lat: 48.6631 },
    source: "科希策市中心 48.7164,21.2611；KSC 机场 48.6631,21.2411：公开资料",
  },
  {
    id: "zilina", nameZh: "日利纳", nameEn: "Žilina", country: "slovakia", tier: "major", zone: "sk-north",
    admin1Zh: "日利纳州", admin1En: "Žilina Region",
    lon: 18.7408, lat: 49.2231,
    source: "日利纳市中心 49.2231,18.7408；本地的多尔尼赫里乔夫机场（ILZ，距市区约 12 km）无稳定定期客运航班，跨国出行多用布拉迪斯拉发或邻国枢纽：公开资料",
  },
  {
    id: "banska-bystrica", nameZh: "班斯卡比斯特里察", nameEn: "Banská Bystrica", country: "slovakia", tier: "major", zone: "sk-central",
    admin1Zh: "班斯卡比斯特里察州", admin1En: "Banská Bystrica Region",
    lon: 19.1462, lat: 48.7395,
    source: "班斯卡比斯特里察市中心 48.7395,19.1462；附近斯利亚奇机场（SLD，距市区约 12 km）以包机与不定期航班为主，无稳定定期客运航线：公开资料",
  },
  {
    id: "poprad", nameZh: "波普拉德", nameEn: "Poprad", country: "slovakia", tier: "notable", zone: "sk-tatras",
    admin1Zh: "普雷绍夫州", admin1En: "Prešov Region",
    lon: 20.2977, lat: 49.0614,
    airport: { iata: "TAT", nameZh: "波普拉德—塔特拉机场", nameEn: "Poprad–Tatry Airport", lon: 20.2411, lat: 49.0736 },
    source: "波普拉德市中心 49.0614,20.2977；TAT 机场 49.0736,20.2411，是欧洲海拔最高的国际机场之一（约 718 m）；定期航班很少，多为季节性包机：公开资料",
  },
  {
    id: "banska-stiavnica", nameZh: "班斯卡什佳夫尼察", nameEn: "Banská Štiavnica", country: "slovakia", tier: "notable", zone: "sk-central",
    admin1Zh: "班斯卡比斯特里察州", admin1En: "Banská Bystrica Region",
    lon: 18.8944, lat: 48.4486,
    source: "班斯卡什佳夫尼察市中心 48.4486,18.8944；本地无民用机场，最近有定期航班的机场为布拉迪斯拉发（约 170 km）：公开资料",
  },
  {
    id: "bardejov", nameZh: "巴尔代约夫", nameEn: "Bardejov", country: "slovakia", tier: "notable", zone: "sk-east",
    admin1Zh: "普雷绍夫州", admin1En: "Prešov Region",
    lon: 21.2758, lat: 49.2944,
    source: "巴尔代约夫市中心 49.2944,21.2758；本地无民用机场，最近有定期航班的机场为科希策（约 75 km）：公开资料",
  },
  {
    id: "levoca", nameZh: "莱沃恰", nameEn: "Levoča", country: "slovakia", tier: "notable", zone: "sk-tatras",
    admin1Zh: "普雷绍夫州", admin1En: "Prešov Region",
    lon: 20.5889, lat: 49.0222,
    source: "莱沃恰市中心 49.0222,20.5889；本地无民用机场，最近机场为波普拉德—塔特拉（约 28 km），有稳定定期航班的机场为科希策（约 95 km）：公开资料",
  },
  {
    id: "nitra", nameZh: "尼特拉", nameEn: "Nitra", country: "slovakia", tier: "major", zone: "sk-west",
    admin1Zh: "尼特拉州", admin1En: "Nitra Region",
    lon: 18.0885, lat: 48.3138,
    source: "尼特拉市中心广场 48.3138,18.0885（OSM）；尼特拉州首府；城东南的小型机场无定期航班（OurAirports LZNI），不填 airport；布拉迪斯拉发 BTS 直线约 67 km（按 OurAirports 算）；离国界约 62 km（已有城市补充批，2026-09-15）",
  },
  {
    id: "trnava", nameZh: "特尔纳瓦", nameEn: "Trnava", country: "slovakia", tier: "major", zone: "sk-west",
    admin1Zh: "特尔纳瓦州", admin1En: "Trnava Region",
    lon: 17.5858, lat: 48.3775,
    source: "特尔纳瓦三位一体广场 48.3775,17.5858（OSM）；特尔纳瓦州首府；附近两处小型机场无定期航班（OurAirports），不填 airport；布拉迪斯拉发 BTS 直线约 36 km（按 OurAirports 算）；离国界约 46 km（已有城市补充批，2026-09-15）。注：罗马尼亚条目里的「特尔纳瓦河 / 台地」是 Târnava，与本市无关",
  },
];
