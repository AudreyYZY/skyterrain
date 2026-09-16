import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 日本 ──────────────────────────────────────────────
  {
    id: "tokyo", nameZh: "东京", nameEn: "Tokyo", country: "japan", tier: "capital", zone: "jp-kanto", admin1Zh: "东京都", admin1En: "Tokyo",
    lon: 139.7671, lat: 35.6812,
    airport: { iata: "HND", nameZh: "东京羽田机场", nameEn: "Tokyo Haneda", lon: 139.780, lat: 35.552 },
    source: "东京站一带 35.6812,139.7671；HND 机场：公开资料",
  },
  {
    id: "kyoto", nameZh: "京都", nameEn: "Kyoto", country: "japan", tier: "major", zone: "jp-kansai", admin1Zh: "京都府", admin1En: "Kyoto",
    lon: 135.7681, lat: 35.0116,
    airport: { iata: "KIX", nameZh: "关西国际机场（经大阪转乘）", nameEn: "Kansai Int'l (via Osaka)", lon: 135.244, lat: 34.427 },
    source: "京都站一带 35.0116,135.7681；KIX 机场：公开资料（京都无民航机场，经关西/伊丹转铁路）",
  },
  {
    id: "osaka-city", nameZh: "大阪", nameEn: "Osaka", country: "japan", tier: "major", zone: "jp-kansai", admin1Zh: "大阪府", admin1En: "Osaka",
    lon: 135.5023, lat: 34.6937,
    airport: { iata: "KIX", nameZh: "关西国际机场", nameEn: "Kansai Int'l", lon: 135.244, lat: 34.427 },
    source: "大阪梅田一带 34.6937,135.5023；KIX 机场：公开资料",
  },
  {
    id: "sapporo", nameZh: "札幌", nameEn: "Sapporo", country: "japan", tier: "major", zone: "jp-hokkaido", admin1Zh: "北海道", admin1En: "Hokkaido",
    lon: 141.3545, lat: 43.0618,
    airport: { iata: "CTS", nameZh: "新千岁机场", nameEn: "New Chitose", lon: 141.692, lat: 42.775 },
    source: "札幌站一带 43.0618,141.3545；CTS 机场：公开资料",
  },
  {
    id: "fukuoka", nameZh: "福冈", nameEn: "Fukuoka", country: "japan", tier: "major", zone: "jp-kyushu", admin1Zh: "福冈县", admin1En: "Fukuoka Prefecture",
    lon: 130.4017, lat: 33.5902,
    airport: { iata: "FUK", nameZh: "福冈机场", nameEn: "Fukuoka", lon: 130.451, lat: 33.586 },
    source: "福冈天神/博多一带 33.5902,130.4017；FUK 机场：公开资料",
  },
  {
    id: "naha", nameZh: "那霸", nameEn: "Naha", country: "japan", tier: "notable", zone: "jp-okinawa", admin1Zh: "冲绳县", admin1En: "Okinawa Prefecture",
    lon: 127.6809, lat: 26.2124,
    airport: { iata: "OKA", nameZh: "那霸机场", nameEn: "Naha", lon: 127.646, lat: 26.196 },
    source: "那霸市区 26.2124,127.6809；OKA 机场：公开资料",
  },
  {
    id: "sendai", nameZh: "仙台", nameEn: "Sendai", country: "japan", tier: "notable", zone: "jp-tohoku", admin1Zh: "宫城县", admin1En: "Miyagi Prefecture",
    lon: 140.8694, lat: 38.2682,
    airport: { iata: "SDJ", nameZh: "仙台机场", nameEn: "Sendai", lon: 140.917, lat: 38.140 },
    source: "仙台站一带 38.2682,140.8694；SDJ 机场：公开资料",
  },
  {
    id: "yokohama", nameZh: "横滨", nameEn: "Yokohama", country: "japan", tier: "major", zone: "jp-kanto", admin1Zh: "神奈川县", admin1En: "Kanagawa Prefecture",
    lon: 139.6380, lat: 35.4437,
    airport: { iata: "HND", nameZh: "东京羽田机场", nameEn: "Tokyo Haneda", lon: 139.780, lat: 35.552 },
    source: "横滨站/港未来一带 35.4437,139.6380；HND 机场：公开资料",
  },
  {
    id: "nagoya", nameZh: "名古屋", nameEn: "Nagoya", country: "japan", tier: "major", zone: "jp-chubu", admin1Zh: "爱知县", admin1En: "Aichi Prefecture",
    lon: 136.9066, lat: 35.1815,
    airport: { iata: "NGO", nameZh: "中部国际机场", nameEn: "Chubu Centrair Int'l", lon: 136.805, lat: 34.858 },
    source: "名古屋站一带 35.1815,136.9066；NGO 机场：公开资料",
  },
  {
    id: "kanazawa", nameZh: "金泽", nameEn: "Kanazawa", country: "japan", tier: "notable", zone: "jp-chubu", admin1Zh: "石川县", admin1En: "Ishikawa Prefecture",
    lon: 136.6480, lat: 36.5780,
    airport: { iata: "KMQ", nameZh: "小松机场（经小松转乘）", nameEn: "Komatsu (via Komatsu)", lon: 136.407, lat: 36.394 },
    source: "金泽站一带 36.5780,136.6480；KMQ 机场：公开资料",
  },
  {
    id: "nara", nameZh: "奈良", nameEn: "Nara", country: "japan", tier: "notable", zone: "jp-kansai", admin1Zh: "奈良县", admin1En: "Nara Prefecture",
    lon: 135.8048, lat: 34.6851,
    airport: { iata: "KIX", nameZh: "关西国际机场（经大阪转乘）", nameEn: "Kansai Int'l (via Osaka)", lon: 135.244, lat: 34.427 },
    source: "奈良公园一带 34.6851,135.8048；KIX 机场：公开资料（奈良无民航机场，经关西/大阪转铁路）",
  },
  {
    id: "hiroshima", nameZh: "广岛", nameEn: "Hiroshima", country: "japan", tier: "major", zone: "jp-chugoku", admin1Zh: "广岛县", admin1En: "Hiroshima Prefecture",
    lon: 132.4753, lat: 34.3977,
    airport: { iata: "HIJ", nameZh: "广岛机场", nameEn: "Hiroshima", lon: 132.919, lat: 34.436 },
    source: "广岛站一带 34.3977,132.4753（2026-09-16 改：原坐标 34.3853,132.4553 离广岛站约 1.8 km，check:layout-bearings 查出）；HIJ 机场：公开资料",
  },
  {
    id: "takamatsu", nameZh: "高松", nameEn: "Takamatsu", country: "japan", tier: "notable", zone: "jp-shikoku", admin1Zh: "香川县", admin1En: "Kagawa Prefecture",
    lon: 134.0466, lat: 34.3428,
    airport: { iata: "TAK", nameZh: "高松机场", nameEn: "Takamatsu", lon: 134.016, lat: 34.214 },
    source: "高松站一带 34.3428,134.0466；TAK 机场：公开资料",
  },
  {
    id: "nagasaki", nameZh: "长崎", nameEn: "Nagasaki", country: "japan", tier: "notable", zone: "jp-kyushu", admin1Zh: "长崎县", admin1En: "Nagasaki Prefecture",
    lon: 129.8737, lat: 32.7503,
    airport: { iata: "NGS", nameZh: "长崎机场", nameEn: "Nagasaki", lon: 129.914, lat: 32.917 },
    source: "长崎站一带 32.7503,129.8737；NGS 机场：公开资料",
  },

  // ── 日本 批2（2026-09-05）──
  {
    id: "kobe", nameZh: "神户", nameEn: "Kobe", country: "japan", tier: "major", zone: "jp-kansai", admin1Zh: "兵库县", admin1En: "Hyōgo Prefecture",
    lon: 135.1956, lat: 34.6900,
    airport: { iata: "UKB", nameZh: "神户机场", nameEn: "Kobe Airport", lon: 135.2239, lat: 34.6328 },
    source: "神户市役所一带 34.6900,135.1956（en.wikipedia）；UKB 机场：en.wikipedia（港岛南侧人工岛，港湾线到三宫 18 分钟；2025-04 起有国际航班）；人口约 152 万（2021）",
  },
  {
    id: "himeji", nameZh: "姬路", nameEn: "Himeji", country: "japan", tier: "notable", zone: "jp-kansai", admin1Zh: "兵库县", admin1En: "Hyōgo Prefecture",
    lon: 134.6853, lat: 34.8153,
    airport: { iata: "UKB", nameZh: "神户机场（经神户转乘）", nameEn: "Kobe Airport (via Kobe)", lon: 135.2239, lat: 34.6328 },
    source: "姬路 34.8153,134.6853（en.wikipedia）；无自有机场，最近为神户 UKB（约 66 公里）、关西 KIX（约 127 公里），与神户条目共用机场记录；人口 518,311（2025）",
  },
  {
    id: "takayama", nameZh: "高山", nameEn: "Takayama", country: "japan", tier: "notable", zone: "jp-chubu", admin1Zh: "岐阜县", admin1En: "Gifu Prefecture",
    lon: 137.2522, lat: 36.1460,
    source: "高山 36.1460,137.2522（en.wikipedia）；无机场，最近为富山（约 80 公里）、中部国际 NGO（约 150 公里），条目不写机场字段；人口 81,968（2025-09）",
  },
  {
    id: "matsumoto", nameZh: "松本", nameEn: "Matsumoto", country: "japan", tier: "notable", zone: "jp-chubu", admin1Zh: "长野县", admin1En: "Nagano Prefecture",
    lon: 137.9720, lat: 36.2380,
    airport: { iata: "MMJ", nameZh: "松本机场（信州松本）", nameEn: "Matsumoto Airport", lon: 137.9228, lat: 36.1667 },
    source: "松本 36.2380,137.9720（en.wikipedia，海拔 610 米）；MMJ 机场：en.wikipedia（市中心西南约 9 公里，海拔 657 米为日本最高民用机场，仅札幌/福冈/神户等国内航线）；人口 235,972（2025-06）",
  },
  {
    id: "hakodate", nameZh: "函馆", nameEn: "Hakodate", country: "japan", tier: "notable", zone: "jp-hokkaido", admin1Zh: "北海道", admin1En: "Hokkaido",
    lon: 140.7289, lat: 41.7686,
    airport: { iata: "HKD", nameZh: "函馆机场", nameEn: "Hakodate Airport", lon: 140.8219, lat: 41.7700 },
    source: "函馆 41.7686,140.7289（en.wikipedia）；HKD 机场：en.wikipedia（函馆站东约 8 公里）；人口 239,813（2024-01）",
  },
  {
    id: "kumamoto", nameZh: "熊本", nameEn: "Kumamoto", country: "japan", tier: "notable", zone: "jp-kyushu", admin1Zh: "熊本县", admin1En: "Kumamoto Prefecture",
    lon: 130.7078, lat: 32.8031,
    airport: { iata: "KMJ", nameZh: "熊本机场（阿苏熊本）", nameEn: "Kumamoto Airport", lon: 130.8553, lat: 32.8372 },
    source: "熊本 32.8031,130.7078（en.wikipedia）；KMJ 机场：en.wikipedia（益城町，市中心东约 20 公里）；人口 737,543（2025-01）",
  },
  {
    id: "kagoshima", nameZh: "鹿儿岛", nameEn: "Kagoshima", country: "japan", tier: "notable", zone: "jp-kyushu", admin1Zh: "鹿儿岛县", admin1En: "Kagoshima Prefecture",
    lon: 130.5572, lat: 31.5969,
    airport: { iata: "KOJ", nameZh: "鹿儿岛机场", nameEn: "Kagoshima Airport", lon: 130.7169, lat: 31.8033 },
    source: "鹿儿岛 31.5969,130.5572（en.wikipedia）；KOJ 机场：en.wikipedia（雾岛市，鹿儿岛中央站东北约 30 公里）；人口 583,966（2024-07）",
  },
  {
    id: "matsuyama", nameZh: "松山", nameEn: "Matsuyama", country: "japan", tier: "notable", zone: "jp-shikoku", admin1Zh: "爱媛县", admin1En: "Ehime Prefecture",
    lon: 132.7656, lat: 33.8392,
    airport: { iata: "MYJ", nameZh: "松山机场", nameEn: "Matsuyama Airport", lon: 132.6997, lat: 33.8272 },
    source: "松山 33.8392,132.7656（en.wikipedia）；MYJ 机场：en.wikipedia（市中心西南约 6 公里）；人口约 49.4 万（2026），四国最大城市",
  },
];
