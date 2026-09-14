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
];
