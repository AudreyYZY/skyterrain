import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 卢森堡 =====
  {
    id: "luxembourg-city", nameZh: "卢森堡市", nameEn: "Luxembourg City", country: "luxembourg", tier: "capital", zone: "lu-gutland", admin1Zh: "卢森堡县", admin1En: "Luxembourg",
    lon: 6.1319, lat: 49.6117,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "卢森堡市中心 49.6117,6.1319；LUX 机场（距市区约6km）：公开资料",
  },
  {
    id: "esch-sur-alzette", nameZh: "埃施阿尔泽特", nameEn: "Esch-sur-Alzette", country: "luxembourg", tier: "major", zone: "lu-gutland", admin1Zh: "阿尔泽特河畔埃施县", admin1En: "Esch-sur-Alzette",
    lon: 5.9806, lat: 49.4958,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "埃施阿尔泽特市中心 49.4958,5.9806；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约20km）：公开资料",
  },
  {
    id: "echternach", nameZh: "埃希特纳赫", nameEn: "Echternach", country: "luxembourg", tier: "notable", zone: "lu-gutland", admin1Zh: "埃希特纳赫县", admin1En: "Echternach",
    lon: 6.4181, lat: 49.8114,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "埃希特纳赫市中心 49.8114,6.4181；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约30km）：公开资料",
  },
  {
    id: "remich", nameZh: "雷米希", nameEn: "Remich", country: "luxembourg", tier: "notable", zone: "lu-gutland", admin1Zh: "雷米希县", admin1En: "Remich",
    lon: 6.3667, lat: 49.5433,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "雷米希市中心 49.5433,6.3667；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约20km）：公开资料",
  },
  {
    id: "diekirch", nameZh: "迪基希", nameEn: "Diekirch", country: "luxembourg", tier: "notable", zone: "lu-oesling", admin1Zh: "迪基希县", admin1En: "Diekirch",
    lon: 6.1594, lat: 49.8683,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "迪基希市中心 49.8683,6.1594；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约35km）：公开资料",
  },
  {
    id: "ettelbruck", nameZh: "埃特尔布吕克", nameEn: "Ettelbruck", country: "luxembourg", tier: "notable", zone: "lu-oesling", admin1Zh: "迪基希县", admin1En: "Diekirch",
    lon: 6.1039, lat: 49.8486,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "埃特尔布吕克市中心 49.8486,6.1039；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约35km）：公开资料",
  },
  {
    id: "vianden", nameZh: "维安登", nameEn: "Vianden", country: "luxembourg", tier: "notable", zone: "lu-oesling", admin1Zh: "维安登县", admin1En: "Vianden",
    lon: 6.2050, lat: 49.9350,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "维安登市中心 49.9350,6.2050；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约45km）：公开资料",
  },
  {
    id: "clervaux", nameZh: "克莱尔沃", nameEn: "Clervaux", country: "luxembourg", tier: "notable", zone: "lu-oesling", admin1Zh: "克莱尔沃县", admin1En: "Clervaux",
    lon: 6.0328, lat: 50.0553,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "克莱尔沃市中心 50.0553,6.0328；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约55km）：公开资料",
  },
  {
    id: "esch-sur-sure", nameZh: "埃施叙尔苏尔", nameEn: "Esch-sur-Sûre", country: "luxembourg", tier: "notable", zone: "lu-oesling", admin1Zh: "维尔茨县", admin1En: "Wiltz",
    lon: 5.9167, lat: 49.9167,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "埃施叙尔苏尔市中心 49.9167,5.9167；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约45km）：公开资料",
  },
  {
    id: "mondorf-les-bains", nameZh: "蒙多夫莱班", nameEn: "Mondorf-les-Bains", country: "luxembourg", tier: "notable", zone: "lu-gutland", admin1Zh: "雷米希县", admin1En: "Remich",
    lon: 6.2756, lat: 49.5060,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "蒙多夫莱班镇中心广场 49.5060,6.2756（OSM）；LUX 直线约 14 km（按 OurAirports 算），与既有卢森堡条目一致填 LUX（已有城市补充批，2026-09-16）",
  },
  {
    id: "differdange", nameZh: "迪弗当日", nameEn: "Differdange", country: "luxembourg", tier: "major", zone: "lu-gutland", admin1Zh: "阿尔泽特河畔埃施县", admin1En: "Esch-sur-Alzette",
    lon: 5.89139, lat: 49.52417,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "迪弗当日 49.52417,5.89139（市官网 chiffres 页自报，1 级）；LUX 直线约 25 km（算），卢森堡既有条目均填 LUX；人口 31,421（STATEC 2026-01-01，1 级；市官网自写 31,415，差 6 人，正文用 STATEC）（已有城市补充批，2026-09-16）",
  },
  {
    id: "mersch", nameZh: "梅尔施", nameEn: "Mersch", country: "luxembourg", tier: "notable", zone: "lu-gutland", admin1Zh: "梅尔施县", admin1En: "Mersch",
    lon: 6.1032, lat: 49.7479,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "梅尔施城堡（即市政厅）Place Saint-Michel 49.7479,6.1032（OSM）；LUX 直线约 16 km（算）；卢森堡语作 Miersch（市官网页眉，1 级）；与地形条目 eisch-valley 互指 —— 七堡谷的城堡分属几个市镇，本市镇内有 Schoenfels 与 Pettingen 两座（已有城市补充批，2026-09-16）",
  },
];
