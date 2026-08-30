/**
 * Places Registry — 旅游模式的位置单一真实源（城市 / 机场 / 国家概览）。
 * 与 lib/regions.ts 的 regionId 对齐（country 字段）。坐标来源写入 source 便于审计。
 */

export type PlaceTier = "capital" | "major" | "notable";

export type PoiKind = "landmark" | "district" | "nature" | "transport";

/** 攻略里提到的地点 —— 选中城市时在地图上标注（非导航精度，城市尺度取景够用） */
export interface CityPoi {
  nameZh: string;
  nameEn: string;
  lon: number;
  lat: number;
  kind: PoiKind;
}

export interface CityEntry {
  id: string;
  nameZh: string;
  nameEn: string;
  country: string; // regionId: "australia" | "china"
  tier: PlaceTier;
  lon: number;
  lat: number;
  airport?: { iata: string; nameZh: string; nameEn: string; lon: number; lat: number };
  /** 攻略正文提到的主要地点（选中该城市时标注在地图上） */
  pois?: CityPoi[];
  /** 相机：城市上空斜视角。缺省用 DEFAULT_CITY_VIEW。 */
  view?: { heightM?: number; pitchDeg?: number; headingDeg?: number };
  source: string;
}

export interface CountryOverviewEntry {
  country: string;
  nameZh: string;
  nameEn: string;
}

export const DEFAULT_CITY_VIEW = { heightM: 26_000, pitchDeg: -45, headingDeg: 0 } as const;

export const COUNTRY_OVERVIEWS: CountryOverviewEntry[] = [
  { country: "australia", nameZh: "澳大利亚", nameEn: "Australia" },
  { country: "china", nameZh: "中国", nameEn: "China" },
  { country: "japan", nameZh: "日本", nameEn: "Japan" },
];

export const CITY_REGISTRY: CityEntry[] = [
  {
    id: "sydney", nameZh: "悉尼", nameEn: "Sydney", country: "australia", tier: "major",
    lon: 151.2093, lat: -33.8688,
    airport: { iata: "SYD", nameZh: "悉尼金斯福德·史密斯机场", nameEn: "Sydney Kingsford Smith", lon: 151.177, lat: -33.946 },
    source: "悉尼市中心 -33.8688,151.2093；SYD 机场坐标：公开资料",
  },
  {
    id: "melbourne", nameZh: "墨尔本", nameEn: "Melbourne", country: "australia", tier: "major",
    lon: 144.9631, lat: -37.8136,
    airport: { iata: "MEL", nameZh: "墨尔本机场（图拉马林）", nameEn: "Melbourne (Tullamarine)", lon: 144.843, lat: -37.669 },
    source: "墨尔本 CBD -37.8136,144.9631；MEL 机场：公开资料",
  },
  {
    id: "brisbane", nameZh: "布里斯班", nameEn: "Brisbane", country: "australia", tier: "major",
    lon: 153.0251, lat: -27.4698,
    airport: { iata: "BNE", nameZh: "布里斯班机场", nameEn: "Brisbane", lon: 153.117, lat: -27.384 },
    source: "布里斯班 CBD -27.4698,153.0251；BNE 机场：公开资料",
  },
  {
    id: "perth", nameZh: "珀斯", nameEn: "Perth", country: "australia", tier: "major",
    lon: 115.8605, lat: -31.9523,
    airport: { iata: "PER", nameZh: "珀斯机场", nameEn: "Perth", lon: 115.967, lat: -31.940 },
    source: "珀斯 CBD -31.9523,115.8605；PER 机场：公开资料",
  },
  {
    id: "adelaide", nameZh: "阿德莱德", nameEn: "Adelaide", country: "australia", tier: "major",
    lon: 138.6007, lat: -34.9285,
    airport: { iata: "ADL", nameZh: "阿德莱德机场", nameEn: "Adelaide", lon: 138.531, lat: -34.945 },
    source: "阿德莱德 CBD -34.9285,138.6007；ADL 机场：公开资料",
  },
  {
    id: "cairns", nameZh: "凯恩斯", nameEn: "Cairns", country: "australia", tier: "notable",
    lon: 145.7710, lat: -16.9203,
    airport: { iata: "CNS", nameZh: "凯恩斯机场", nameEn: "Cairns", lon: 145.755, lat: -16.885 },
    source: "凯恩斯 -16.9203,145.7710；CNS 机场：公开资料",
  },
  {
    id: "darwin", nameZh: "达尔文", nameEn: "Darwin", country: "australia", tier: "notable",
    lon: 130.8456, lat: -12.4634,
    airport: { iata: "DRW", nameZh: "达尔文机场", nameEn: "Darwin", lon: 130.877, lat: -12.415 },
    source: "达尔文 -12.4634,130.8456；DRW 机场：公开资料",
  },

  // ── 中国 ──────────────────────────────────────────────
  {
    id: "beijing", nameZh: "北京", nameEn: "Beijing", country: "china", tier: "capital",
    lon: 116.4074, lat: 39.9042,
    airport: { iata: "PEK", nameZh: "北京首都国际机场", nameEn: "Beijing Capital Int'l", lon: 116.585, lat: 40.080 },
    source: "北京市中心 39.9042,116.4074；PEK 机场：公开资料",
  },
  {
    id: "shanghai", nameZh: "上海", nameEn: "Shanghai", country: "china", tier: "major",
    lon: 121.4737, lat: 31.2304,
    airport: { iata: "PVG", nameZh: "上海浦东国际机场", nameEn: "Shanghai Pudong Int'l", lon: 121.805, lat: 31.143 },
    source: "上海人民广场 31.2304,121.4737；PVG 机场：公开资料",
  },
  {
    id: "guangzhou", nameZh: "广州", nameEn: "Guangzhou", country: "china", tier: "major",
    lon: 113.2644, lat: 23.1291,
    airport: { iata: "CAN", nameZh: "广州白云国际机场", nameEn: "Guangzhou Baiyun Int'l", lon: 113.299, lat: 23.392 },
    source: "广州珠江新城一带 23.1291,113.2644；CAN 机场：公开资料",
  },
  {
    id: "shenzhen", nameZh: "深圳", nameEn: "Shenzhen", country: "china", tier: "major",
    lon: 114.0579, lat: 22.5431,
    airport: { iata: "SZX", nameZh: "深圳宝安国际机场", nameEn: "Shenzhen Bao'an Int'l", lon: 113.811, lat: 22.639 },
    source: "深圳福田一带 22.5431,114.0579；SZX 机场：公开资料",
  },
  {
    id: "chengdu", nameZh: "成都", nameEn: "Chengdu", country: "china", tier: "major",
    lon: 104.0668, lat: 30.5728,
    airport: { iata: "CTU", nameZh: "成都双流国际机场", nameEn: "Chengdu Shuangliu Int'l", lon: 103.947, lat: 30.578 },
    source: "成都天府广场 30.5728,104.0668；CTU 机场：公开资料",
  },
  {
    id: "chongqing", nameZh: "重庆", nameEn: "Chongqing", country: "china", tier: "major",
    lon: 106.5516, lat: 29.5630,
    airport: { iata: "CKG", nameZh: "重庆江北国际机场", nameEn: "Chongqing Jiangbei Int'l", lon: 106.642, lat: 29.719 },
    source: "重庆渝中区 29.5630,106.5516；CKG 机场：公开资料",
  },
  {
    id: "xian", nameZh: "西安", nameEn: "Xi'an", country: "china", tier: "major",
    lon: 108.9398, lat: 34.3416,
    airport: { iata: "XIY", nameZh: "西安咸阳国际机场", nameEn: "Xi'an Xianyang Int'l", lon: 108.752, lat: 34.447 },
    source: "西安钟楼 34.3416,108.9398；XIY 机场：公开资料",
  },
  {
    id: "hangzhou", nameZh: "杭州", nameEn: "Hangzhou", country: "china", tier: "major",
    lon: 120.1551, lat: 30.2741,
    airport: { iata: "HGH", nameZh: "杭州萧山国际机场", nameEn: "Hangzhou Xiaoshan Int'l", lon: 120.434, lat: 30.234 },
    source: "杭州西湖东岸 30.2741,120.1551；HGH 机场：公开资料",
  },
  {
    id: "kunming", nameZh: "昆明", nameEn: "Kunming", country: "china", tier: "major",
    lon: 102.7183, lat: 25.0389,
    airport: { iata: "KMG", nameZh: "昆明长水国际机场", nameEn: "Kunming Changshui Int'l", lon: 102.929, lat: 25.100 },
    source: "昆明市中心 25.0389,102.7183；KMG 机场：公开资料",
  },
  {
    id: "guilin", nameZh: "桂林", nameEn: "Guilin", country: "china", tier: "notable",
    lon: 110.2907, lat: 25.2736,
    airport: { iata: "KWL", nameZh: "桂林两江国际机场", nameEn: "Guilin Liangjiang Int'l", lon: 110.039, lat: 25.219 },
    source: "桂林市中心 25.2736,110.2907；KWL 机场：公开资料",
  },
  {
    id: "nanjing", nameZh: "南京", nameEn: "Nanjing", country: "china", tier: "major",
    lon: 118.7969, lat: 32.0603,
    airport: { iata: "NKG", nameZh: "南京禄口国际机场", nameEn: "Nanjing Lukou Int'l", lon: 118.862, lat: 31.742 },
    source: "南京新街口 32.0603,118.7969；NKG 机场：公开资料",
  },
  {
    id: "sanya", nameZh: "三亚", nameEn: "Sanya", country: "china", tier: "notable",
    lon: 109.5119, lat: 18.2528,
    airport: { iata: "SYX", nameZh: "三亚凤凰国际机场", nameEn: "Sanya Phoenix Int'l", lon: 109.412, lat: 18.303 },
    source: "三亚市中心 18.2528,109.5119；SYX 机场：公开资料",
  },
  {
    id: "lhasa", nameZh: "拉萨", nameEn: "Lhasa", country: "china", tier: "notable",
    lon: 91.1409, lat: 29.6456,
    airport: { iata: "LXA", nameZh: "拉萨贡嘎国际机场", nameEn: "Lhasa Gonggar Int'l", lon: 90.912, lat: 29.298 },
    source: "拉萨市中心 29.6456,91.1409；LXA 机场：公开资料",
  },
  {
    id: "harbin", nameZh: "哈尔滨", nameEn: "Harbin", country: "china", tier: "major",
    lon: 126.5350, lat: 45.8038,
    airport: { iata: "HRB", nameZh: "哈尔滨太平国际机场", nameEn: "Harbin Taiping Int'l", lon: 126.250, lat: 45.623 },
    source: "哈尔滨市中心 45.8038,126.5350；HRB 机场：公开资料",
  },
  {
    id: "qingdao", nameZh: "青岛", nameEn: "Qingdao", country: "china", tier: "major",
    lon: 120.3826, lat: 36.0671,
    airport: { iata: "TAO", nameZh: "青岛胶东国际机场", nameEn: "Qingdao Jiaodong Int'l", lon: 120.086, lat: 36.366 },
    source: "青岛市南区 36.0671,120.3826；TAO 机场：公开资料",
  },
  {
    id: "zhangjiajie", nameZh: "张家界", nameEn: "Zhangjiajie", country: "china", tier: "notable",
    lon: 110.4796, lat: 29.1170,
    airport: { iata: "DYG", nameZh: "张家界荷花国际机场", nameEn: "Zhangjiajie Hehua Int'l", lon: 110.443, lat: 29.103 },
    source: "张家界市区 29.1170,110.4796；DYG 机场：公开资料",
  },
  {
    id: "lijiang", nameZh: "丽江", nameEn: "Lijiang", country: "china", tier: "notable",
    lon: 100.2270, lat: 26.8721,
    airport: { iata: "LJG", nameZh: "丽江三义国际机场", nameEn: "Lijiang Sanyi Int'l", lon: 100.246, lat: 26.680 },
    source: "丽江古城 26.8721,100.2270；LJG 机场：公开资料",
  },
  {
    id: "dunhuang", nameZh: "敦煌", nameEn: "Dunhuang", country: "china", tier: "notable",
    lon: 94.6618, lat: 40.1421,
    airport: { iata: "DNH", nameZh: "敦煌莫高国际机场", nameEn: "Dunhuang Mogao Int'l", lon: 94.809, lat: 40.161 },
    source: "敦煌市区 40.1421,94.6618；DNH 机场：公开资料",
  },

  // ── 日本 ──────────────────────────────────────────────
  {
    id: "tokyo", nameZh: "东京", nameEn: "Tokyo", country: "japan", tier: "capital",
    lon: 139.7671, lat: 35.6812,
    airport: { iata: "HND", nameZh: "东京羽田机场", nameEn: "Tokyo Haneda", lon: 139.780, lat: 35.552 },
    source: "东京站一带 35.6812,139.7671；HND 机场：公开资料",
  },
  {
    id: "kyoto", nameZh: "京都", nameEn: "Kyoto", country: "japan", tier: "major",
    lon: 135.7681, lat: 35.0116,
    airport: { iata: "KIX", nameZh: "关西国际机场（经大阪转乘）", nameEn: "Kansai Int'l (via Osaka)", lon: 135.244, lat: 34.427 },
    source: "京都站一带 35.0116,135.7681；KIX 机场：公开资料（京都无民航机场，经关西/伊丹转铁路）",
  },
  {
    id: "osaka-city", nameZh: "大阪", nameEn: "Osaka", country: "japan", tier: "major",
    lon: 135.5023, lat: 34.6937,
    airport: { iata: "KIX", nameZh: "关西国际机场", nameEn: "Kansai Int'l", lon: 135.244, lat: 34.427 },
    source: "大阪梅田一带 34.6937,135.5023；KIX 机场：公开资料",
  },
  {
    id: "sapporo", nameZh: "札幌", nameEn: "Sapporo", country: "japan", tier: "major",
    lon: 141.3545, lat: 43.0618,
    airport: { iata: "CTS", nameZh: "新千岁机场", nameEn: "New Chitose", lon: 141.692, lat: 42.775 },
    source: "札幌站一带 43.0618,141.3545；CTS 机场：公开资料",
  },
  {
    id: "fukuoka", nameZh: "福冈", nameEn: "Fukuoka", country: "japan", tier: "major",
    lon: 130.4017, lat: 33.5902,
    airport: { iata: "FUK", nameZh: "福冈机场", nameEn: "Fukuoka", lon: 130.451, lat: 33.586 },
    source: "福冈天神/博多一带 33.5902,130.4017；FUK 机场：公开资料",
  },
  {
    id: "naha", nameZh: "那霸", nameEn: "Naha", country: "japan", tier: "notable",
    lon: 127.6809, lat: 26.2124,
    airport: { iata: "OKA", nameZh: "那霸机场", nameEn: "Naha", lon: 127.646, lat: 26.196 },
    source: "那霸市区 26.2124,127.6809；OKA 机场：公开资料",
  },
];

const BY_ID = new Map(CITY_REGISTRY.map((c) => [c.id, c]));

/** 国家 slug → 大洲 id（regionId）。新增国家时补一行。 */
export const COUNTRY_TO_CONTINENT: Record<string, string> = {
  china: "asia",
  japan: "asia",
  australia: "oceania",
  usa: "north-america",
  canada: "north-america",
};

export function continentOfCountry(country: string): string | undefined {
  return COUNTRY_TO_CONTINENT[country];
}

export function getCitiesForCountry(country: string): CityEntry[] {
  return CITY_REGISTRY.filter((c) => c.country === country);
}

/** 某大洲下所有城市（按 country→continent 映射） */
export function getCitiesForContinent(continent: string): CityEntry[] {
  return CITY_REGISTRY.filter((c) => COUNTRY_TO_CONTINENT[c.country] === continent);
}

/** 某大洲下有内容（城市或国家概览）的国家 slug 列表，按 CITY_REGISTRY / COUNTRY_OVERVIEWS 出现顺序 */
export function getCountriesForContinent(continent: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const o of COUNTRY_OVERVIEWS) {
    if (COUNTRY_TO_CONTINENT[o.country] === continent && !seen.has(o.country)) {
      seen.add(o.country);
      out.push(o.country);
    }
  }
  for (const c of CITY_REGISTRY) {
    if (COUNTRY_TO_CONTINENT[c.country] === continent && !seen.has(c.country)) {
      seen.add(c.country);
      out.push(c.country);
    }
  }
  return out;
}

export function getCountryOverview(country: string): CountryOverviewEntry | undefined {
  return COUNTRY_OVERVIEWS.find((o) => o.country === country);
}

export function getCityById(id: string): CityEntry | undefined {
  return BY_ID.get(id);
}
