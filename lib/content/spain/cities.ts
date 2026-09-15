import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 西班牙 ────────────────────────────────────────────
  {
    id: "madrid", nameZh: "马德里", nameEn: "Madrid", country: "spain", tier: "capital", zone: "es-central", admin1Zh: "马德里自治区", admin1En: "Community of Madrid",
    lon: -3.7038, lat: 40.4168,
    airport: { iata: "MAD", nameZh: "马德里巴拉哈斯机场", nameEn: "Madrid–Barajas", lon: -3.561, lat: 40.472 },
    source: "马德里市中心 40.4168,-3.7038；MAD 机场：公开资料",
  },
  {
    id: "barcelona", nameZh: "巴塞罗那", nameEn: "Barcelona", country: "spain", tier: "major", zone: "es-catalonia", admin1Zh: "加泰罗尼亚自治区", admin1En: "Catalonia",
    lon: 2.1686, lat: 41.3874,
    airport: { iata: "BCN", nameZh: "巴塞罗那机场（埃尔普拉特）", nameEn: "Barcelona–El Prat", lon: 2.078, lat: 41.297 },
    source: "巴塞罗那市中心 41.3874,2.1686；BCN 机场：公开资料",
  },
  {
    id: "seville", nameZh: "塞维利亚", nameEn: "Seville", country: "spain", tier: "major", zone: "es-andalusia", admin1Zh: "安达卢西亚自治区", admin1En: "Andalusia",
    lon: -5.9845, lat: 37.3891,
    airport: { iata: "SVQ", nameZh: "塞维利亚机场", nameEn: "Seville Airport", lon: -5.893, lat: 37.418 },
    source: "塞维利亚市中心 37.3891,-5.9845；SVQ 机场：公开资料",
  },
  {
    id: "valencia", nameZh: "瓦伦西亚", nameEn: "Valencia", country: "spain", tier: "major", zone: "es-east", admin1Zh: "瓦伦西亚自治区", admin1En: "Valencian Community",
    lon: -0.3763, lat: 39.4699,
    airport: { iata: "VLC", nameZh: "瓦伦西亚机场", nameEn: "Valencia Airport", lon: -0.481, lat: 39.489 },
    source: "瓦伦西亚市中心 39.4699,-0.3763；VLC 机场：公开资料",
  },
  {
    id: "granada", nameZh: "格拉纳达", nameEn: "Granada", country: "spain", tier: "notable", zone: "es-andalusia", admin1Zh: "安达卢西亚自治区", admin1En: "Andalusia",
    lon: -3.5986, lat: 37.1773,
    airport: { iata: "GRX", nameZh: "格拉纳达机场", nameEn: "Granada Airport", lon: -3.777, lat: 37.189 },
    source: "格拉纳达市中心 37.1773,-3.5986；GRX 机场：公开资料",
  },
  {
    id: "malaga", nameZh: "马拉加", nameEn: "Málaga", country: "spain", tier: "notable", zone: "es-andalusia", admin1Zh: "安达卢西亚自治区", admin1En: "Andalusia",
    lon: -4.4214, lat: 36.7213,
    airport: { iata: "AGP", nameZh: "马拉加机场", nameEn: "Málaga Airport", lon: -4.499, lat: 36.675 },
    source: "马拉加市中心 36.7213,-4.4214；AGP 机场：公开资料",
  },
  {
    id: "bilbao", nameZh: "毕尔巴鄂", nameEn: "Bilbao", country: "spain", tier: "notable", zone: "es-north", admin1Zh: "巴斯克自治区", admin1En: "Basque Country",
    lon: -2.9350, lat: 43.2630,
    airport: { iata: "BIO", nameZh: "毕尔巴鄂机场", nameEn: "Bilbao Airport", lon: -2.911, lat: 43.301 },
    source: "毕尔巴鄂市中心 43.2630,-2.9350；BIO 机场：公开资料",
  },
  {
    id: "santiago-de-compostela", nameZh: "圣地亚哥-德孔波斯特拉", nameEn: "Santiago de Compostela", country: "spain", tier: "notable", zone: "es-northwest", admin1Zh: "加利西亚自治区", admin1En: "Galicia",
    lon: -8.5448, lat: 42.8782,
    airport: { iata: "SCQ", nameZh: "圣地亚哥机场", nameEn: "Santiago Airport", lon: -8.415, lat: 42.896 },
    source: "圣地亚哥-德孔波斯特拉市中心 42.8782,-8.5448；SCQ 机场：公开资料",
  },
  {
    id: "zaragoza", nameZh: "萨拉戈萨", nameEn: "Zaragoza", country: "spain", tier: "notable", zone: "es-northeast", admin1Zh: "阿拉贡自治区", admin1En: "Aragon",
    lon: -0.8891, lat: 41.6488,
    airport: { iata: "ZAZ", nameZh: "萨拉戈萨机场", nameEn: "Zaragoza Airport", lon: -1.041, lat: 41.666 },
    source: "萨拉戈萨市中心 41.6488,-0.8891；ZAZ 机场：公开资料",
  },
  {
    id: "palma", nameZh: "帕尔马", nameEn: "Palma de Mallorca", country: "spain", tier: "notable", zone: "es-balearic", admin1Zh: "巴利阿里群岛自治区", admin1En: "Balearic Islands",
    lon: 2.6502, lat: 39.5696,
    airport: { iata: "PMI", nameZh: "帕尔马机场", nameEn: "Palma de Mallorca Airport", lon: 2.739, lat: 39.551 },
    source: "帕尔马市中心 39.5696,2.6502；PMI 机场：公开资料",
  },
  {
    id: "santa-cruz-de-tenerife", nameZh: "圣克鲁斯-德特内里费", nameEn: "Santa Cruz de Tenerife", country: "spain", tier: "notable", zone: "es-canary", admin1Zh: "加那利群岛自治区", admin1En: "Canary Islands",
    lon: -16.2518, lat: 28.4636,
    airport: { iata: "TFN", nameZh: "特内里费北机场", nameEn: "Tenerife North Airport", lon: -16.341, lat: 28.483 },
    source: "圣克鲁斯-德特内里费市中心 28.4636,-16.2518；TFN 机场：公开资料",
  },

  // ── 西班牙 批2（2026-09-05）──
  {
    id: "san-sebastian", nameZh: "圣塞瓦斯蒂安", nameEn: "San Sebastián (Donostia)", country: "spain", tier: "notable", zone: "es-north", admin1Zh: "巴斯克自治区", admin1En: "Basque Country",
    lon: -1.9856, lat: 43.3214,
    airport: { iata: "EAS", nameZh: "圣塞瓦斯蒂安机场（翁达里维亚）", nameEn: "San Sebastián Airport (Hondarribia)", lon: -1.7906, lat: 43.3564 },
    source: "San Sebastián 43.3214,-1.9856（en.wikipedia）；EAS 机场：en.wikipedia（翁达里维亚，市区东约 20 公里，主要马德里/巴塞罗那航线）；人口 188,487（2024）",
  },
  {
    id: "toledo", nameZh: "托莱多", nameEn: "Toledo", country: "spain", tier: "notable", zone: "es-central", admin1Zh: "卡斯蒂利亚-拉曼恰自治区", admin1En: "Castilla–La Mancha",
    lon: -4.0244, lat: 39.8567,
    source: "Toledo 39.8567,-4.0244（en.wikipedia）；无机场，最近为马德里（约 88 公里），条目不写机场字段，AVE 到马德里约 30 分钟；人口 87,216（2025）",
  },
  {
    id: "cordoba", nameZh: "科尔多瓦", nameEn: "Córdoba", country: "spain", tier: "notable", zone: "es-andalusia", admin1Zh: "安达卢西亚自治区", admin1En: "Andalusia",
    lon: -4.7800, lat: 37.8900,
    source: "Córdoba 37.8900,-4.7800（en.wikipedia）；科尔多瓦机场 ODB 只有少量定期航线（Aena 目的地页 2026-09-14：Vueling 飞巴塞罗那、Binter 飞大加那利岛），条目不写机场字段；多数旅客经塞维利亚（约 140 公里）、马拉加（约 160 公里），条目不写机场字段，AVE 到马德里约 1 小时 45 分；人口 324,902（2024）",
  },
  {
    id: "salamanca", nameZh: "萨拉曼卡", nameEn: "Salamanca", country: "spain", tier: "notable", zone: "es-central", admin1Zh: "卡斯蒂利亚-莱昂自治区", admin1En: "Castile and León",
    lon: -5.6642, lat: 40.9650,
    source: "Salamanca 40.9650,-5.6642（en.wikipedia）；本地机场无稳定定期航线，最近为马德里（约 200 公里），条目不写机场字段；人口 144,458（2024）",
  },
  {
    id: "girona", nameZh: "赫罗纳", nameEn: "Girona", country: "spain", tier: "notable", zone: "es-catalonia", admin1Zh: "加泰罗尼亚自治区", admin1En: "Catalonia",
    lon: 2.8211, lat: 41.9844,
    airport: { iata: "GRO", nameZh: "赫罗纳-布拉瓦海岸机场", nameEn: "Girona–Costa Brava", lon: 2.7606, lat: 41.9008 },
    source: "Girona 41.9844,2.8211（en.wikipedia）；GRO 机场：en.wikipedia（市区西南约 12.5 公里，以廉航为主）；人口 108,666（2025）",
  },
  {
    id: "las-palmas", nameZh: "大加那利岛拉斯帕尔马斯", nameEn: "Las Palmas de Gran Canaria", country: "spain", tier: "major", zone: "es-canary", admin1Zh: "加那利群岛自治区", admin1En: "Canary Islands",
    lon: -15.4353, lat: 28.1258,
    airport: { iata: "LPA", nameZh: "大加那利机场", nameEn: "Gran Canaria Airport", lon: -15.3867, lat: 27.9319 },
    source: "Las Palmas 28.1258,-15.4353（en.wikipedia）；LPA 机场：en.wikipedia（市区南约 19 公里）；人口 383,516（2024）",
  },
];
