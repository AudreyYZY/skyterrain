import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 德国 ────────────────────────────────────────────
  {
    id: "berlin", nameZh: "柏林", nameEn: "Berlin", country: "germany", tier: "capital", zone: "de-berlin", admin1Zh: "柏林市", admin1En: "Berlin",
    lon: 13.4050, lat: 52.5200,
    airport: { iata: "BER", nameZh: "柏林勃兰登堡机场", nameEn: "Berlin Brandenburg", lon: 13.5033, lat: 52.3667 },
    source: "柏林市中心 52.5200,13.4050；BER 机场：公开资料",
  },
  {
    id: "munich", nameZh: "慕尼黑", nameEn: "Munich", country: "germany", tier: "major", zone: "de-bavaria", admin1Zh: "巴伐利亚州", admin1En: "Bavaria",
    lon: 11.5820, lat: 48.1351,
    airport: { iata: "MUC", nameZh: "慕尼黑机场", nameEn: "Munich Airport", lon: 11.7861, lat: 48.3538 },
    source: "慕尼黑市中心 48.1351,11.5820；MUC 机场：公开资料",
  },
  {
    id: "hamburg", nameZh: "汉堡", nameEn: "Hamburg", country: "germany", tier: "major", zone: "de-north", admin1Zh: "汉堡市", admin1En: "Hamburg",
    lon: 9.9937, lat: 53.5511,
    airport: { iata: "HAM", nameZh: "汉堡机场", nameEn: "Hamburg Airport", lon: 9.9882, lat: 53.6304 },
    source: "汉堡市中心 53.5511,9.9937；HAM 机场：公开资料",
  },
  {
    id: "cologne", nameZh: "科隆", nameEn: "Cologne", country: "germany", tier: "major", zone: "de-west", admin1Zh: "北莱茵-威斯特法伦州", admin1En: "North Rhine-Westphalia",
    lon: 6.9603, lat: 50.9375,
    airport: { iata: "CGN", nameZh: "科隆-波恩机场", nameEn: "Cologne Bonn Airport", lon: 7.1427, lat: 50.8659 },
    source: "科隆市中心 50.9375,6.9603；CGN 机场：公开资料",
  },
  {
    id: "frankfurt", nameZh: "法兰克福", nameEn: "Frankfurt", country: "germany", tier: "major", zone: "de-central", admin1Zh: "黑森州", admin1En: "Hesse",
    lon: 8.6821, lat: 50.1109,
    airport: { iata: "FRA", nameZh: "法兰克福机场", nameEn: "Frankfurt Airport", lon: 8.5622, lat: 50.0379 },
    source: "法兰克福市中心 50.1109,8.6821；FRA 机场：公开资料",
  },
  {
    id: "dresden", nameZh: "德累斯顿", nameEn: "Dresden", country: "germany", tier: "notable", zone: "de-east", admin1Zh: "萨克森州", admin1En: "Saxony",
    lon: 13.7373, lat: 51.0504,
    airport: { iata: "DRS", nameZh: "德累斯顿机场", nameEn: "Dresden Airport", lon: 13.7672, lat: 51.1328 },
    source: "德累斯顿市中心 51.0504,13.7373；DRS 机场：公开资料",
  },
  {
    id: "nuremberg", nameZh: "纽伦堡", nameEn: "Nuremberg", country: "germany", tier: "notable", zone: "de-bavaria", admin1Zh: "巴伐利亚州", admin1En: "Bavaria",
    lon: 11.0767, lat: 49.4521,
    airport: { iata: "NUE", nameZh: "纽伦堡机场", nameEn: "Nuremberg Airport", lon: 11.0669, lat: 49.4987 },
    source: "纽伦堡市中心 49.4521,11.0767；NUE 机场：公开资料",
  },
  {
    id: "freiburg", nameZh: "弗赖堡", nameEn: "Freiburg", country: "germany", tier: "notable", zone: "de-southwest", admin1Zh: "巴登-符腾堡州", admin1En: "Baden-Württemberg",
    lon: 7.8421, lat: 47.9990,
    airport: { iata: "EAP", nameZh: "巴塞尔-米卢斯-弗赖堡欧洲机场", nameEn: "EuroAirport Basel-Mulhouse-Freiburg", lon: 7.5299, lat: 47.5896 },
    source: "弗赖堡市中心 47.9990,7.8421；弗赖堡本地无商业机场，最近的欧洲机场（巴塞尔-米卢斯-弗赖堡）距市区约70km：公开资料",
  },
  {
    id: "heidelberg", nameZh: "海德堡", nameEn: "Heidelberg", country: "germany", tier: "notable", zone: "de-southwest", admin1Zh: "巴登-符腾堡州", admin1En: "Baden-Württemberg",
    lon: 8.6724, lat: 49.3988,
    airport: { iata: "FRA", nameZh: "法兰克福机场", nameEn: "Frankfurt Airport", lon: 8.5622, lat: 50.0379 },
    source: "海德堡市中心 49.3988,8.6724；海德堡本地无商业机场，多数旅客经法兰克福机场（距市区约85km）转乘：公开资料",
  },
  {
    id: "trier", nameZh: "特里尔", nameEn: "Trier", country: "germany", tier: "notable", zone: "de-west", admin1Zh: "莱茵兰-普法尔茨州", admin1En: "Rhineland-Palatinate",
    lon: 6.6428, lat: 49.7596,
    airport: { iata: "HHN", nameZh: "法兰克福哈恩机场", nameEn: "Frankfurt-Hahn Airport", lon: 7.2639, lat: 49.9487 },
    source: "特里尔市中心 49.7596,6.6428；最近商业机场为法兰克福哈恩机场（距市区约50km）：公开资料",
  },
  {
    id: "stralsund", nameZh: "施特拉尔松", nameEn: "Stralsund", country: "germany", tier: "notable", zone: "de-northeast", admin1Zh: "梅克伦堡-前波美拉尼亚州", admin1En: "Mecklenburg-Vorpommern",
    lon: 13.0930, lat: 54.3153,
    airport: { iata: "RLG", nameZh: "罗斯托克-拉格机场", nameEn: "Rostock-Laage Airport", lon: 12.2783, lat: 53.9182 },
    source: "施特拉尔松市中心 54.3153,13.0930；最近商业机场为罗斯托克-拉格机场（距市区约70km）：公开资料",
  },

  // ── 德国 批2（2026-09-05）──
  {
    id: "leipzig", nameZh: "莱比锡", nameEn: "Leipzig", country: "germany", tier: "major", zone: "de-east", admin1Zh: "萨克森州", admin1En: "Saxony",
    lon: 12.3750, lat: 51.3400,
    airport: { iata: "LEJ", nameZh: "莱比锡/哈雷机场", nameEn: "Leipzig/Halle Airport", lon: 12.2364, lat: 51.4239 },
    source: "Leipzig 51.3400,12.3750（en.wikipedia）；LEJ 机场：en.wikipedia（市区西北约 20 公里，S-Bahn 直达，DHL 欧洲枢纽）；人口 633,592（2025-12）",
  },
  {
    id: "stuttgart", nameZh: "斯图加特", nameEn: "Stuttgart", country: "germany", tier: "major", zone: "de-southwest", admin1Zh: "巴登-符腾堡州", admin1En: "Baden-Württemberg",
    lon: 9.1800, lat: 48.7775,
    airport: { iata: "STR", nameZh: "斯图加特机场", nameEn: "Stuttgart Airport", lon: 9.2219, lat: 48.6900 },
    source: "Stuttgart 48.7775,9.1800（en.wikipedia）；STR 机场：en.wikipedia（市中心南约 13 公里，S2/S3 约 30 分钟）；人口 612,663（2024-12）",
  },
  {
    id: "dusseldorf", nameZh: "杜塞尔多夫", nameEn: "Düsseldorf", country: "germany", tier: "major", zone: "de-west", admin1Zh: "北莱茵-威斯特法伦州", admin1En: "North Rhine-Westphalia",
    lon: 6.7767, lat: 51.2256,
    airport: { iata: "DUS", nameZh: "杜塞尔多夫机场", nameEn: "Düsseldorf Airport", lon: 6.7667, lat: 51.2894 },
    source: "Düsseldorf 51.2256,6.7767（en.wikipedia）；DUS 机场：en.wikipedia（市中心北约 7 公里，德国第四繁忙机场）；人口 619,444（2025-12）",
  },
  {
    id: "lubeck", nameZh: "吕贝克", nameEn: "Lübeck", country: "germany", tier: "notable", zone: "de-north", admin1Zh: "石勒苏益格-荷尔斯泰因州", admin1En: "Schleswig-Holstein",
    lon: 10.6864, lat: 53.8697,
    airport: { iata: "HAM", nameZh: "汉堡机场（经汉堡转乘）", nameEn: "Hamburg Airport (via Hamburg)", lon: 9.9882, lat: 53.6304 },
    source: "Lübeck 53.8697,10.6864（en.wikipedia）；本地布兰肯泽机场航线极少，与汉堡条目共用 HAM（约 74 公里）；人口 216,889（2024-12）",
  },
  {
    id: "rothenburg", nameZh: "罗滕堡", nameEn: "Rothenburg ob der Tauber", country: "germany", tier: "notable", zone: "de-bavaria", admin1Zh: "巴伐利亚州", admin1En: "Bavaria",
    lon: 10.1800, lat: 49.3800,
    source: "Rothenburg ob der Tauber 49.3800,10.1800（en.wikipedia）；无机场，最近为纽伦堡（约 100 公里），条目不写机场字段，火车经 Steinach 换乘；人口 11,365（2024-12）",
  },
  {
    id: "regensburg", nameZh: "雷根斯堡", nameEn: "Regensburg", country: "germany", tier: "notable", zone: "de-bavaria", admin1Zh: "巴伐利亚州", admin1En: "Bavaria",
    lon: 12.0830, lat: 49.0170,
    source: "Regensburg 49.0170,12.0830（en.wikipedia）；无机场，最近为慕尼黑（约 120 公里）、纽伦堡（约 100 公里），条目不写机场字段；人口 151,389（2024-12）",
  },
];
