import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 加拿大 ──
  {
    id: "toronto", nameZh: "多伦多", nameEn: "Toronto", country: "canada", tier: "major", zone: "ca-central", admin1Zh: "安大略省", admin1En: "Ontario",
    lon: -79.3832, lat: 43.6532,
    airport: { iata: "YYZ", nameZh: "多伦多皮尔逊国际机场", nameEn: "Toronto Pearson Int'l", lon: -79.6248, lat: 43.6777 },
    source: "多伦多市中心 43.6532,-79.3832；YYZ 机场：公开资料",
  },
  {
    id: "ottawa", nameZh: "渥太华", nameEn: "Ottawa", country: "canada", tier: "capital", zone: "ca-central", admin1Zh: "安大略省", admin1En: "Ontario",
    lon: -75.6972, lat: 45.4215,
    airport: { iata: "YOW", nameZh: "渥太华麦克唐纳-卡蒂埃国际机场", nameEn: "Ottawa Macdonald–Cartier Int'l", lon: -75.6692, lat: 45.3225 },
    source: "渥太华市中心 45.4215,-75.6972；YOW 机场：公开资料",
  },
  {
    id: "montreal", nameZh: "蒙特利尔", nameEn: "Montreal", country: "canada", tier: "major", zone: "ca-central", admin1Zh: "魁北克省", admin1En: "Quebec",
    lon: -73.5674, lat: 45.5019,
    airport: { iata: "YUL", nameZh: "蒙特利尔特鲁多国际机场", nameEn: "Montréal–Trudeau Int'l", lon: -73.7408, lat: 45.4706 },
    source: "蒙特利尔市中心 45.5019,-73.5674；YUL 机场：公开资料",
  },
  {
    id: "quebec-city", nameZh: "魁北克市", nameEn: "Quebec City", country: "canada", tier: "notable", zone: "ca-central", admin1Zh: "魁北克省", admin1En: "Quebec",
    lon: -71.2080, lat: 46.8139,
    airport: { iata: "YQB", nameZh: "让·勒萨热国际机场", nameEn: "Québec City Jean Lesage Int'l", lon: -71.3933, lat: 46.7911 },
    source: "魁北克市中心 46.8139,-71.2080；YQB 机场：公开资料",
  },
  {
    id: "halifax", nameZh: "哈利法克斯", nameEn: "Halifax", country: "canada", tier: "notable", zone: "ca-atlantic", admin1Zh: "新斯科舍省", admin1En: "Nova Scotia",
    lon: -63.5752, lat: 44.6488,
    airport: { iata: "YHZ", nameZh: "哈利法克斯斯坦菲尔德国际机场", nameEn: "Halifax Stanfield Int'l", lon: -63.5086, lat: 44.8808 },
    source: "哈利法克斯市中心 44.6488,-63.5752；YHZ 机场：公开资料",
  },
  {
    id: "st-johns", nameZh: "圣约翰斯", nameEn: "St. John's", country: "canada", tier: "notable", zone: "ca-atlantic", admin1Zh: "纽芬兰与拉布拉多省", admin1En: "Newfoundland and Labrador",
    lon: -52.7126, lat: 47.5615,
    airport: { iata: "YYT", nameZh: "圣约翰斯国际机场", nameEn: "St. John's Int'l", lon: -52.7519, lat: 47.6186 },
    source: "圣约翰斯市中心 47.5615,-52.7126；YYT 机场：公开资料",
  },
  {
    id: "winnipeg", nameZh: "温尼伯", nameEn: "Winnipeg", country: "canada", tier: "notable", zone: "ca-prairies", admin1Zh: "曼尼托巴省", admin1En: "Manitoba",
    lon: -97.1384, lat: 49.8951,
    airport: { iata: "YWG", nameZh: "温尼伯理查森国际机场", nameEn: "Winnipeg Richardson Int'l", lon: -97.2399, lat: 49.9100 },
    source: "温尼伯市中心 49.8951,-97.1384；YWG 机场：公开资料",
  },
  {
    id: "calgary", nameZh: "卡尔加里", nameEn: "Calgary", country: "canada", tier: "major", zone: "ca-prairies", admin1Zh: "阿尔伯塔省", admin1En: "Alberta",
    lon: -114.0719, lat: 51.0447,
    airport: { iata: "YYC", nameZh: "卡尔加里国际机场", nameEn: "Calgary Int'l", lon: -114.0106, lat: 51.1315 },
    source: "卡尔加里市中心 51.0447,-114.0719；YYC 机场：公开资料",
  },
  {
    id: "edmonton", nameZh: "埃德蒙顿", nameEn: "Edmonton", country: "canada", tier: "notable", zone: "ca-prairies", admin1Zh: "阿尔伯塔省", admin1En: "Alberta",
    lon: -113.4938, lat: 53.5461,
    airport: { iata: "YEG", nameZh: "埃德蒙顿国际机场", nameEn: "Edmonton Int'l", lon: -113.5797, lat: 53.3097 },
    source: "埃德蒙顿市中心 53.5461,-113.4938；YEG 机场：公开资料",
  },
  {
    id: "vancouver", nameZh: "温哥华", nameEn: "Vancouver", country: "canada", tier: "major", zone: "ca-west-coast", admin1Zh: "不列颠哥伦比亚省", admin1En: "British Columbia",
    lon: -123.1207, lat: 49.2827,
    airport: { iata: "YVR", nameZh: "温哥华国际机场", nameEn: "Vancouver Int'l", lon: -123.1815, lat: 49.1967 },
    source: "温哥华市中心 49.2827,-123.1207；YVR 机场：公开资料",
  },

  // ── 加拿大 批2（2026-09-05）──
  {
    id: "victoria", nameZh: "维多利亚", nameEn: "Victoria", country: "canada", tier: "notable", zone: "ca-west-coast", admin1Zh: "不列颠哥伦比亚省", admin1En: "British Columbia",
    lon: -123.3647, lat: 48.4283,
    airport: { iata: "YYJ", nameZh: "维多利亚国际机场", nameEn: "Victoria Int'l", lon: -123.4258, lat: 48.6472 },
    source: "Victoria 48.4283,-123.3647（en.wikipedia）；YYJ 机场：en.wikipedia（市区北约 25 公里）；人口 91,867、都会区 397,237（2021 普查）",
  },
  {
    id: "whistler", nameZh: "惠斯勒", nameEn: "Whistler", country: "canada", tier: "notable", zone: "ca-west-coast", admin1Zh: "不列颠哥伦比亚省", admin1En: "British Columbia",
    lon: -122.9542, lat: 50.1167,
    source: "Whistler 50.1167,-122.9542（en.wikipedia，海拔 670 米）；无定期航班，最近为温哥华 YVR（约 125 公里），条目不写机场字段；常住人口 13,982（2021 普查）",
  },
  {
    id: "banff", nameZh: "班夫", nameEn: "Banff", country: "canada", tier: "notable", zone: "ca-prairies", admin1Zh: "阿尔伯塔省", admin1En: "Alberta",
    lon: -115.5736, lat: 51.1778,
    source: "Banff 51.1778,-115.5736（en.wikipedia，海拔 1,400 米）；无机场，最近为卡尔加里 YYC（约 126 公里），条目不写机场字段；人口 8,305（2021 普查）",
  },
  {
    id: "jasper", nameZh: "贾斯珀", nameEn: "Jasper", country: "canada", tier: "notable", zone: "ca-prairies", admin1Zh: "阿尔伯塔省", admin1En: "Alberta",
    lon: -118.0822, lat: 52.8731,
    source: "Jasper 52.8731,-118.0822（en.wikipedia，海拔 1,060 米）；无机场，最近为埃德蒙顿 YEG（约 362 公里），条目不写机场字段，VIA 铁路经停；人口 4,738（2021 普查）；2024-07 山火烧毁约三分之一建筑，按实写入",
  },
  {
    id: "regina", nameZh: "里贾纳", nameEn: "Regina", country: "canada", tier: "notable", zone: "ca-prairies", admin1Zh: "萨斯喀彻温省", admin1En: "Saskatchewan",
    lon: -104.6067, lat: 50.4547,
    airport: { iata: "YQR", nameZh: "里贾纳国际机场", nameEn: "Regina Int'l", lon: -104.6661, lat: 50.4322 },
    source: "Regina 50.4547,-104.6067（en.wikipedia）；YQR 机场：en.wikipedia（市中心西南约 7 公里）；人口 226,404（2021 普查）",
  },
  {
    id: "charlottetown", nameZh: "夏洛特敦", nameEn: "Charlottetown", country: "canada", tier: "notable", zone: "ca-atlantic", admin1Zh: "爱德华王子岛省", admin1En: "Prince Edward Island",
    lon: -63.1267, lat: 46.2353,
    airport: { iata: "YYG", nameZh: "夏洛特敦机场", nameEn: "Charlottetown Airport", lon: -63.1286, lat: 46.2886 },
    source: "Charlottetown 46.2353,-63.1267（en.wikipedia）；YYG 机场：en.wikipedia（市区北约 6 公里）；人口 38,809（2021 普查）",
  },
  {
    id: "niagara-falls", nameZh: "尼亚加拉瀑布城", nameEn: "Niagara Falls", country: "canada", tier: "notable", zone: "ca-central", admin1Zh: "安大略省", admin1En: "Ontario",
    lon: -79.1067, lat: 43.0600,
    source: "Niagara Falls, Ontario 43.0600,-79.1067（en.wikipedia）；加拿大一侧无定期航班机场（河对岸美国纽约州有 Niagara Falls International IAG），最近为多伦多皮尔逊 YYZ（约 130 公里），条目不写机场字段，GO 列车可达；人口 94,415（2021 普查）",
  },
  {
    id: "fredericton", nameZh: "弗雷德里克顿", nameEn: "Fredericton", country: "canada", tier: "notable", zone: "ca-atlantic", admin1Zh: "新不伦瑞克省", admin1En: "New Brunswick",
    lon: -66.6667, lat: 45.9453,
    airport: { iata: "YFC", nameZh: "弗雷德里克顿国际机场", nameEn: "Fredericton Int'l", lon: -66.5279, lat: 45.8721 },
    source: "Fredericton 45.9453,-66.6667（en.wikipedia）；YFC 机场：en.wikipedia（市区东南约 15 公里）；人口 63,116（2021 普查）",
  },
  {
    id: "yellowknife", nameZh: "黄刀镇", nameEn: "Yellowknife", country: "canada", tier: "notable", zone: "ca-north", admin1Zh: "西北地区", admin1En: "Northwest Territories",
    lon: -114.3700, lat: 62.4536,
    airport: { iata: "YZF", nameZh: "黄刀镇机场", nameEn: "Yellowknife Airport", lon: -114.4403, lat: 62.4628 },
    source: "Yellowknife 62.4536,-114.3700（en.wikipedia）；YZF 机场：en.wikipedia（市区约 5 公里）；人口 20,340（2021 普查）",
  },
  {
    id: "whitehorse", nameZh: "白马市", nameEn: "Whitehorse", country: "canada", tier: "notable", zone: "ca-north", admin1Zh: "育空地区", admin1En: "Yukon",
    lon: -135.0561, lat: 60.7242,
    airport: { iata: "YXY", nameZh: "埃里克·尼尔森白马国际机场", nameEn: "Erik Nielsen Whitehorse Int'l", lon: -135.0686, lat: 60.7094 },
    source: "Whitehorse 60.7242,-135.0561（en.wikipedia）；YXY 机场：en.wikipedia（在市区西侧台地上，距市中心约 3 公里）；人口 28,201（2021 普查）",
  },
];
