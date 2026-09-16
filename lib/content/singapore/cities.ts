import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  {
    id: "singapore-city", nameZh: "新加坡市区", nameEn: "Singapore", country: "singapore", tier: "capital", zone: "sg-main", admin1Zh: "新加坡", admin1En: "Singapore",
    lon: 103.8607, lat: 1.2836,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "新加坡市中心（滨海湾）1.2836,103.8607；樟宜机场（距市区约20km）：公开资料",
  },
  {
    id: "sentosa", nameZh: "圣淘沙", nameEn: "Sentosa", country: "singapore", tier: "notable", zone: "sg-main", admin1Zh: "新加坡", admin1En: "Singapore",
    lon: 103.8303, lat: 1.2494,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "圣淘沙岛中心 1.2494,103.8303；本地无独立机场，经樟宜机场（距岛约30km）往返：公开资料",
  },
  {
    id: "chinatown-singapore", nameZh: "牛车水", nameEn: "Chinatown", country: "singapore", tier: "notable", zone: "sg-main", admin1Zh: "新加坡", admin1En: "Singapore",
    lon: 103.8442, lat: 1.2812,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "牛车水核心区 1.2812,103.8442；本地无独立机场，经樟宜机场（距市区约20km）往返：公开资料",
  },
  {
    id: "kampong-glam", nameZh: "甘榜格南", nameEn: "Kampong Glam", country: "singapore", tier: "notable", zone: "sg-main", admin1Zh: "新加坡", admin1En: "Singapore",
    lon: 103.8594, lat: 1.3021,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "甘榜格南核心区 1.3021,103.8594；本地无独立机场，经樟宜机场（距市区约20km）往返：公开资料",
  },
  {
    id: "little-india-singapore", nameZh: "小印度", nameEn: "Little India", country: "singapore", tier: "notable", zone: "sg-main", admin1Zh: "新加坡", admin1En: "Singapore",
    lon: 103.8496, lat: 1.3067,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "小印度核心区 1.3067,103.8496；本地无独立机场，经樟宜机场（距市区约20km）往返：公开资料",
  },
  {
    id: "katong", nameZh: "加东", nameEn: "Katong", country: "singapore", tier: "notable", zone: "sg-main", admin1Zh: "新加坡", admin1En: "Singapore",
    lon: 103.90234, lat: 1.30726,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "加东分区边界中心 1.30726,103.90234（OSM relation 19910225）；SIN 直线约 12 km（算）；注：文莱的 Gadong 在本库写作「加东」，两者同名不同地，见 lib/content/brunei（已有城市补充批，2026-09-16）",
  },
  {
    id: "changi-village", nameZh: "樟宜村", nameEn: "Changi Village", country: "singapore", tier: "notable", zone: "sg-main", admin1Zh: "新加坡", admin1En: "Singapore",
    lon: 103.98808, lat: 1.38966,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "樟宜村 1.38966,103.98808（OSM node 2970751698，place=suburb）；SIN 直线约 2.8 km（算），是全库离樟宜机场最近的城市条目；往乌敏岛的驳船从紧邻的樟宜角渡轮码头开出（已有城市补充批，2026-09-16）",
  },
  {
    id: "tiong-bahru", nameZh: "中峇鲁", nameEn: "Tiong Bahru", country: "singapore", tier: "notable", zone: "sg-main", admin1Zh: "新加坡", admin1En: "Singapore",
    lon: 103.83139, lat: 1.28388,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "中峇鲁 1.28388,103.83139（OSM node/2511055449 place=neighbourhood）；樟宜机场直线约 20 km，沿用既有新加坡条目一律填 SIN 的做法；离牛车水条目只有 1.45 km，正文避免重复那边的店屋叙事（已有城市补充批，2026-09-16）",
  },
  {
    id: "punggol", nameZh: "榜鹅", nameEn: "Punggol", country: "singapore", tier: "notable", zone: "sg-main", admin1Zh: "新加坡", admin1En: "Singapore",
    lon: 103.90165, lat: 1.40902,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "榜鹅镇中心 1.40902,103.90165（OSM node/13348031102 place=neighbourhood「Punggol Town Centre」）；樟宜机场直线约 11 km，填 SIN —— ⚠️ **不要写「最近的机场是樟宜」**：实里达机场离镇中心只有约 3.9 km 且有定期航班，正文如实并写、按规则 ⑫ 不列航点；与地形条目 coney-island-park 互指（已有城市补充批，2026-09-16）",
  },
];
