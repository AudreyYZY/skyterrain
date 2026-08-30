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
  /**
   * 目录分组用的地理片区（左侧栏城市按此分栏）。
   * 中国：华北 / 东北 / 华东 / 华中 / 华南 / 西南 / 西北 / 港澳台。
   * 其它国家按各自方案（州 / 大区 / 岛）。缺省归到「其它」。
   */
  zone?: string;
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

/** 片区显示名（左侧栏分栏小标题）+ 排序。key = CityEntry.zone */
export const ZONE_META: Record<string, { zh: string; en: string; order: number }> = {
  // 中国
  "cn-north": { zh: "华北", en: "North China", order: 10 },
  "cn-northeast": { zh: "东北", en: "Northeast", order: 11 },
  "cn-east": { zh: "华东", en: "East China", order: 12 },
  "cn-central": { zh: "华中", en: "Central China", order: 13 },
  "cn-south": { zh: "华南", en: "South China", order: 14 },
  "cn-southwest": { zh: "西南", en: "Southwest", order: 15 },
  "cn-northwest": { zh: "西北", en: "Northwest", order: 16 },
  "cn-hmt": { zh: "港澳台", en: "Hong Kong · Macao · Taiwan", order: 17 },
  // 日本（大致由北到南）
  "jp-hokkaido": { zh: "北海道", en: "Hokkaido", order: 20 },
  "jp-tohoku": { zh: "东北", en: "Tohoku", order: 21 },
  "jp-kanto": { zh: "关东", en: "Kanto", order: 22 },
  "jp-chubu": { zh: "中部", en: "Chubu", order: 23 },
  "jp-kansai": { zh: "关西", en: "Kansai", order: 24 },
  "jp-chugoku": { zh: "中国地方", en: "Chugoku", order: 25 },
  "jp-shikoku": { zh: "四国", en: "Shikoku", order: 26 },
  "jp-kyushu": { zh: "九州", en: "Kyushu", order: 27 },
  "jp-okinawa": { zh: "冲绳", en: "Okinawa", order: 28 },
  // 新西兰
  "nz-north": { zh: "北岛", en: "North Island", order: 30 },
  "nz-south": { zh: "南岛", en: "South Island", order: 31 },
};

export function zoneLabel(zone: string | undefined, lang: "zh-CN" | "en-US"): string | undefined {
  if (!zone) return undefined;
  const m = ZONE_META[zone];
  if (!m) return undefined;
  return lang === "zh-CN" ? m.zh : m.en;
}

export function zoneOrder(zone: string | undefined): number {
  const o = zone ? ZONE_META[zone]?.order : undefined;
  return o ?? 99;
}

export const COUNTRY_OVERVIEWS: CountryOverviewEntry[] = [
  { country: "australia", nameZh: "澳大利亚", nameEn: "Australia" },
  { country: "china", nameZh: "中国", nameEn: "China" },
  { country: "japan", nameZh: "日本", nameEn: "Japan" },
  { country: "new-zealand", nameZh: "新西兰", nameEn: "New Zealand" },
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
    id: "beijing", nameZh: "北京", nameEn: "Beijing", country: "china", tier: "capital", zone: "cn-north",
    lon: 116.4074, lat: 39.9042,
    airport: { iata: "PEK", nameZh: "北京首都国际机场", nameEn: "Beijing Capital Int'l", lon: 116.585, lat: 40.080 },
    source: "北京市中心 39.9042,116.4074；PEK 机场：公开资料",
  },
  {
    id: "shanghai", nameZh: "上海", nameEn: "Shanghai", country: "china", tier: "major", zone: "cn-east",
    lon: 121.4737, lat: 31.2304,
    airport: { iata: "PVG", nameZh: "上海浦东国际机场", nameEn: "Shanghai Pudong Int'l", lon: 121.805, lat: 31.143 },
    source: "上海人民广场 31.2304,121.4737；PVG 机场：公开资料",
  },
  {
    id: "guangzhou", nameZh: "广州", nameEn: "Guangzhou", country: "china", tier: "major", zone: "cn-south",
    lon: 113.2644, lat: 23.1291,
    airport: { iata: "CAN", nameZh: "广州白云国际机场", nameEn: "Guangzhou Baiyun Int'l", lon: 113.299, lat: 23.392 },
    source: "广州珠江新城一带 23.1291,113.2644；CAN 机场：公开资料",
  },
  {
    id: "shenzhen", nameZh: "深圳", nameEn: "Shenzhen", country: "china", tier: "major", zone: "cn-south",
    lon: 114.0579, lat: 22.5431,
    airport: { iata: "SZX", nameZh: "深圳宝安国际机场", nameEn: "Shenzhen Bao'an Int'l", lon: 113.811, lat: 22.639 },
    source: "深圳福田一带 22.5431,114.0579；SZX 机场：公开资料",
  },
  {
    id: "chengdu", nameZh: "成都", nameEn: "Chengdu", country: "china", tier: "major", zone: "cn-southwest",
    lon: 104.0668, lat: 30.5728,
    airport: { iata: "CTU", nameZh: "成都双流国际机场", nameEn: "Chengdu Shuangliu Int'l", lon: 103.947, lat: 30.578 },
    source: "成都天府广场 30.5728,104.0668；CTU 机场：公开资料",
  },
  {
    id: "chongqing", nameZh: "重庆", nameEn: "Chongqing", country: "china", tier: "major", zone: "cn-southwest",
    lon: 106.5516, lat: 29.5630,
    airport: { iata: "CKG", nameZh: "重庆江北国际机场", nameEn: "Chongqing Jiangbei Int'l", lon: 106.642, lat: 29.719 },
    source: "重庆渝中区 29.5630,106.5516；CKG 机场：公开资料",
  },
  {
    id: "xian", nameZh: "西安", nameEn: "Xi'an", country: "china", tier: "major", zone: "cn-northwest",
    lon: 108.9398, lat: 34.3416,
    airport: { iata: "XIY", nameZh: "西安咸阳国际机场", nameEn: "Xi'an Xianyang Int'l", lon: 108.752, lat: 34.447 },
    source: "西安钟楼 34.3416,108.9398；XIY 机场：公开资料",
  },
  {
    id: "hangzhou", nameZh: "杭州", nameEn: "Hangzhou", country: "china", tier: "major", zone: "cn-east",
    lon: 120.1551, lat: 30.2741,
    airport: { iata: "HGH", nameZh: "杭州萧山国际机场", nameEn: "Hangzhou Xiaoshan Int'l", lon: 120.434, lat: 30.234 },
    source: "杭州西湖东岸 30.2741,120.1551；HGH 机场：公开资料",
  },
  {
    id: "kunming", nameZh: "昆明", nameEn: "Kunming", country: "china", tier: "major", zone: "cn-southwest",
    lon: 102.7183, lat: 25.0389,
    airport: { iata: "KMG", nameZh: "昆明长水国际机场", nameEn: "Kunming Changshui Int'l", lon: 102.929, lat: 25.100 },
    source: "昆明市中心 25.0389,102.7183；KMG 机场：公开资料",
  },
  {
    id: "guilin", nameZh: "桂林", nameEn: "Guilin", country: "china", tier: "notable", zone: "cn-south",
    lon: 110.2907, lat: 25.2736,
    airport: { iata: "KWL", nameZh: "桂林两江国际机场", nameEn: "Guilin Liangjiang Int'l", lon: 110.039, lat: 25.219 },
    source: "桂林市中心 25.2736,110.2907；KWL 机场：公开资料",
  },
  {
    id: "nanjing", nameZh: "南京", nameEn: "Nanjing", country: "china", tier: "major", zone: "cn-east",
    lon: 118.7969, lat: 32.0603,
    airport: { iata: "NKG", nameZh: "南京禄口国际机场", nameEn: "Nanjing Lukou Int'l", lon: 118.862, lat: 31.742 },
    source: "南京新街口 32.0603,118.7969；NKG 机场：公开资料",
  },
  {
    id: "sanya", nameZh: "三亚", nameEn: "Sanya", country: "china", tier: "notable", zone: "cn-south",
    lon: 109.5119, lat: 18.2528,
    airport: { iata: "SYX", nameZh: "三亚凤凰国际机场", nameEn: "Sanya Phoenix Int'l", lon: 109.412, lat: 18.303 },
    source: "三亚市中心 18.2528,109.5119；SYX 机场：公开资料",
  },
  {
    id: "lhasa", nameZh: "拉萨", nameEn: "Lhasa", country: "china", tier: "notable", zone: "cn-southwest",
    lon: 91.1409, lat: 29.6456,
    airport: { iata: "LXA", nameZh: "拉萨贡嘎国际机场", nameEn: "Lhasa Gonggar Int'l", lon: 90.912, lat: 29.298 },
    source: "拉萨市中心 29.6456,91.1409；LXA 机场：公开资料",
  },
  {
    id: "harbin", nameZh: "哈尔滨", nameEn: "Harbin", country: "china", tier: "major", zone: "cn-northeast",
    lon: 126.5350, lat: 45.8038,
    airport: { iata: "HRB", nameZh: "哈尔滨太平国际机场", nameEn: "Harbin Taiping Int'l", lon: 126.250, lat: 45.623 },
    source: "哈尔滨市中心 45.8038,126.5350；HRB 机场：公开资料",
  },
  {
    id: "qingdao", nameZh: "青岛", nameEn: "Qingdao", country: "china", tier: "major", zone: "cn-east",
    lon: 120.3826, lat: 36.0671,
    airport: { iata: "TAO", nameZh: "青岛胶东国际机场", nameEn: "Qingdao Jiaodong Int'l", lon: 120.086, lat: 36.366 },
    source: "青岛市南区 36.0671,120.3826；TAO 机场：公开资料",
  },
  {
    id: "zhangjiajie", nameZh: "张家界", nameEn: "Zhangjiajie", country: "china", tier: "notable", zone: "cn-central",
    lon: 110.4796, lat: 29.1170,
    airport: { iata: "DYG", nameZh: "张家界荷花国际机场", nameEn: "Zhangjiajie Hehua Int'l", lon: 110.443, lat: 29.103 },
    source: "张家界市区 29.1170,110.4796；DYG 机场：公开资料",
  },
  {
    id: "lijiang", nameZh: "丽江", nameEn: "Lijiang", country: "china", tier: "notable", zone: "cn-southwest",
    lon: 100.2270, lat: 26.8721,
    airport: { iata: "LJG", nameZh: "丽江三义国际机场", nameEn: "Lijiang Sanyi Int'l", lon: 100.246, lat: 26.680 },
    source: "丽江古城 26.8721,100.2270；LJG 机场：公开资料",
  },
  {
    id: "dunhuang", nameZh: "敦煌", nameEn: "Dunhuang", country: "china", tier: "notable", zone: "cn-northwest",
    lon: 94.6618, lat: 40.1421,
    airport: { iata: "DNH", nameZh: "敦煌莫高国际机场", nameEn: "Dunhuang Mogao Int'l", lon: 94.809, lat: 40.161 },
    source: "敦煌市区 40.1421,94.6618；DNH 机场：公开资料",
  },
  // ── 中国 · 补齐 34 个省级行政区主要城市 ──
  {
    id: "tianjin", nameZh: "天津", nameEn: "Tianjin", country: "china", tier: "major", zone: "cn-north",
    lon: 117.2010, lat: 39.0842,
    airport: { iata: "TSN", nameZh: "天津滨海国际机场", nameEn: "Tianjin Binhai Int'l", lon: 117.346, lat: 39.124 },
    source: "天津市中心 39.0842,117.2010；TSN 机场：公开资料",
  },
  {
    id: "shijiazhuang", nameZh: "石家庄", nameEn: "Shijiazhuang", country: "china", tier: "major", zone: "cn-north",
    lon: 114.5143, lat: 38.0428,
    airport: { iata: "SJW", nameZh: "石家庄正定国际机场", nameEn: "Shijiazhuang Zhengding Int'l", lon: 114.696, lat: 38.281 },
    source: "石家庄市中心 38.0428,114.5143；SJW 机场：公开资料",
  },
  {
    id: "taiyuan", nameZh: "太原", nameEn: "Taiyuan", country: "china", tier: "major", zone: "cn-north",
    lon: 112.5489, lat: 37.8706,
    airport: { iata: "TYN", nameZh: "太原武宿国际机场", nameEn: "Taiyuan Wusu Int'l", lon: 112.629, lat: 37.747 },
    source: "太原市中心 37.8706,112.5489；TYN 机场：公开资料",
  },
  {
    id: "hohhot", nameZh: "呼和浩特", nameEn: "Hohhot", country: "china", tier: "major", zone: "cn-north",
    lon: 111.7492, lat: 40.8424,
    airport: { iata: "HET", nameZh: "呼和浩特盛乐国际机场", nameEn: "Hohhot Shengle Int'l", lon: 111.573, lat: 40.480 },
    source: "呼和浩特市中心 40.8424,111.7492；HET 机场：白塔机场迁建为盛乐国际机场（和林格尔县，2026 转场投用），IATA/ICAO 不变，坐标 40.480,111.573",
  },
  {
    id: "shenyang", nameZh: "沈阳", nameEn: "Shenyang", country: "china", tier: "major", zone: "cn-northeast",
    lon: 123.4315, lat: 41.8057,
    airport: { iata: "SHE", nameZh: "沈阳桃仙国际机场", nameEn: "Shenyang Taoxian Int'l", lon: 123.483, lat: 41.640 },
    source: "沈阳市中心 41.8057,123.4315；SHE 机场：公开资料",
  },
  {
    id: "changchun", nameZh: "长春", nameEn: "Changchun", country: "china", tier: "major", zone: "cn-northeast",
    lon: 125.3235, lat: 43.8171,
    airport: { iata: "CGQ", nameZh: "长春龙嘉国际机场", nameEn: "Changchun Longjia Int'l", lon: 125.685, lat: 44.001 },
    source: "长春市中心 43.8171,125.3235；CGQ 机场：公开资料",
  },
  {
    id: "nanchang", nameZh: "南昌", nameEn: "Nanchang", country: "china", tier: "major", zone: "cn-east",
    lon: 115.8579, lat: 28.6820,
    airport: { iata: "KHN", nameZh: "南昌昌北国际机场", nameEn: "Nanchang Changbei Int'l", lon: 115.900, lat: 28.865 },
    source: "南昌市中心 28.6820,115.8579；KHN 机场：公开资料",
  },
  {
    id: "hefei", nameZh: "合肥", nameEn: "Hefei", country: "china", tier: "major", zone: "cn-east",
    lon: 117.2272, lat: 31.8206,
    airport: { iata: "HFE", nameZh: "合肥新桥国际机场", nameEn: "Hefei Xinqiao Int'l", lon: 116.977, lat: 31.780 },
    source: "合肥市中心 31.8206,117.2272；HFE 机场：公开资料",
  },
  {
    id: "xiamen", nameZh: "厦门", nameEn: "Xiamen", country: "china", tier: "major", zone: "cn-east",
    lon: 118.0894, lat: 24.4798,
    airport: { iata: "XMN", nameZh: "厦门高崎国际机场", nameEn: "Xiamen Gaoqi Int'l", lon: 118.128, lat: 24.544 },
    source: "厦门本岛 24.4798,118.0894；XMN 机场：公开资料",
  },
  {
    id: "zhengzhou", nameZh: "郑州", nameEn: "Zhengzhou", country: "china", tier: "major", zone: "cn-central",
    lon: 113.6254, lat: 34.7466,
    airport: { iata: "CGO", nameZh: "郑州新郑国际机场", nameEn: "Zhengzhou Xinzheng Int'l", lon: 113.841, lat: 34.520 },
    source: "郑州市中心 34.7466,113.6254；CGO 机场：公开资料",
  },
  {
    id: "wuhan", nameZh: "武汉", nameEn: "Wuhan", country: "china", tier: "major", zone: "cn-central",
    lon: 114.3052, lat: 30.5928,
    airport: { iata: "WUH", nameZh: "武汉天河国际机场", nameEn: "Wuhan Tianhe Int'l", lon: 114.208, lat: 30.774 },
    source: "武汉三镇交汇处 30.5928,114.3052；WUH 机场：公开资料",
  },
  {
    id: "guiyang", nameZh: "贵阳", nameEn: "Guiyang", country: "china", tier: "major", zone: "cn-southwest",
    lon: 106.6302, lat: 26.6470,
    airport: { iata: "KWE", nameZh: "贵阳龙洞堡国际机场", nameEn: "Guiyang Longdongbao Int'l", lon: 106.801, lat: 26.539 },
    source: "贵阳市中心 26.6470,106.6302；KWE 机场：公开资料",
  },
  {
    id: "xining", nameZh: "西宁", nameEn: "Xining", country: "china", tier: "major", zone: "cn-northwest",
    lon: 101.7782, lat: 36.6171,
    airport: { iata: "XNN", nameZh: "西宁曹家堡国际机场", nameEn: "Xining Caojiabao Int'l", lon: 102.043, lat: 36.528 },
    source: "西宁市中心 36.6171,101.7782；XNN 机场：公开资料",
  },
  {
    id: "yinchuan", nameZh: "银川", nameEn: "Yinchuan", country: "china", tier: "major", zone: "cn-northwest",
    lon: 106.2309, lat: 38.4872,
    airport: { iata: "INC", nameZh: "银川河东国际机场", nameEn: "Yinchuan Hedong Int'l", lon: 106.393, lat: 38.322 },
    source: "银川市中心 38.4872,106.2309；INC 机场：公开资料",
  },
  {
    id: "urumqi", nameZh: "乌鲁木齐", nameEn: "Ürümqi", country: "china", tier: "major", zone: "cn-northwest",
    lon: 87.6168, lat: 43.8256,
    airport: { iata: "URC", nameZh: "乌鲁木齐天山国际机场", nameEn: "Ürümqi Tianshan Int'l", lon: 87.474, lat: 43.907 },
    source: "乌鲁木齐市中心 43.8256,87.6168；URC 机场：2025-03 民航局批复由「地窝堡」更名「天山」，IATA/位置不变",
  },
  {
    id: "hongkong", nameZh: "香港", nameEn: "Hong Kong", country: "china", tier: "major", zone: "cn-hmt",
    lon: 114.1772, lat: 22.3025,
    airport: { iata: "HKG", nameZh: "香港国际机场", nameEn: "Hong Kong Int'l", lon: 113.915, lat: 22.309 },
    source: "香港中环一带 22.3025,114.1772；HKG 机场：公开资料",
  },
  {
    id: "macao", nameZh: "澳门", nameEn: "Macao", country: "china", tier: "notable", zone: "cn-hmt",
    lon: 113.5439, lat: 22.1987,
    airport: { iata: "MFM", nameZh: "澳门国际机场", nameEn: "Macao Int'l", lon: 113.592, lat: 22.156 },
    source: "澳门半岛 22.1987,113.5439；MFM 机场：公开资料",
  },
  {
    id: "taipei", nameZh: "台北", nameEn: "Taipei", country: "china", tier: "major", zone: "cn-hmt",
    lon: 121.5654, lat: 25.0330,
    airport: { iata: "TPE", nameZh: "台湾桃园国际机场", nameEn: "Taiwan Taoyuan Int'l", lon: 121.233, lat: 25.078 },
    source: "台北市中心 25.0330,121.5654；TPE 机场：公开资料",
  },

  // ── 日本 ──────────────────────────────────────────────
  {
    id: "tokyo", nameZh: "东京", nameEn: "Tokyo", country: "japan", tier: "capital", zone: "jp-kanto",
    lon: 139.7671, lat: 35.6812,
    airport: { iata: "HND", nameZh: "东京羽田机场", nameEn: "Tokyo Haneda", lon: 139.780, lat: 35.552 },
    source: "东京站一带 35.6812,139.7671；HND 机场：公开资料",
  },
  {
    id: "kyoto", nameZh: "京都", nameEn: "Kyoto", country: "japan", tier: "major", zone: "jp-kansai",
    lon: 135.7681, lat: 35.0116,
    airport: { iata: "KIX", nameZh: "关西国际机场（经大阪转乘）", nameEn: "Kansai Int'l (via Osaka)", lon: 135.244, lat: 34.427 },
    source: "京都站一带 35.0116,135.7681；KIX 机场：公开资料（京都无民航机场，经关西/伊丹转铁路）",
  },
  {
    id: "osaka-city", nameZh: "大阪", nameEn: "Osaka", country: "japan", tier: "major", zone: "jp-kansai",
    lon: 135.5023, lat: 34.6937,
    airport: { iata: "KIX", nameZh: "关西国际机场", nameEn: "Kansai Int'l", lon: 135.244, lat: 34.427 },
    source: "大阪梅田一带 34.6937,135.5023；KIX 机场：公开资料",
  },
  {
    id: "sapporo", nameZh: "札幌", nameEn: "Sapporo", country: "japan", tier: "major", zone: "jp-hokkaido",
    lon: 141.3545, lat: 43.0618,
    airport: { iata: "CTS", nameZh: "新千岁机场", nameEn: "New Chitose", lon: 141.692, lat: 42.775 },
    source: "札幌站一带 43.0618,141.3545；CTS 机场：公开资料",
  },
  {
    id: "fukuoka", nameZh: "福冈", nameEn: "Fukuoka", country: "japan", tier: "major", zone: "jp-kyushu",
    lon: 130.4017, lat: 33.5902,
    airport: { iata: "FUK", nameZh: "福冈机场", nameEn: "Fukuoka", lon: 130.451, lat: 33.586 },
    source: "福冈天神/博多一带 33.5902,130.4017；FUK 机场：公开资料",
  },
  {
    id: "naha", nameZh: "那霸", nameEn: "Naha", country: "japan", tier: "notable", zone: "jp-okinawa",
    lon: 127.6809, lat: 26.2124,
    airport: { iata: "OKA", nameZh: "那霸机场", nameEn: "Naha", lon: 127.646, lat: 26.196 },
    source: "那霸市区 26.2124,127.6809；OKA 机场：公开资料",
  },
  {
    id: "sendai", nameZh: "仙台", nameEn: "Sendai", country: "japan", tier: "notable", zone: "jp-tohoku",
    lon: 140.8694, lat: 38.2682,
    airport: { iata: "SDJ", nameZh: "仙台机场", nameEn: "Sendai", lon: 140.917, lat: 38.140 },
    source: "仙台站一带 38.2682,140.8694；SDJ 机场：公开资料",
  },
  {
    id: "yokohama", nameZh: "横滨", nameEn: "Yokohama", country: "japan", tier: "major", zone: "jp-kanto",
    lon: 139.6380, lat: 35.4437,
    airport: { iata: "HND", nameZh: "东京羽田机场", nameEn: "Tokyo Haneda", lon: 139.780, lat: 35.552 },
    source: "横滨站/港未来一带 35.4437,139.6380；HND 机场：公开资料",
  },
  {
    id: "nagoya", nameZh: "名古屋", nameEn: "Nagoya", country: "japan", tier: "major", zone: "jp-chubu",
    lon: 136.9066, lat: 35.1815,
    airport: { iata: "NGO", nameZh: "中部国际机场", nameEn: "Chubu Centrair Int'l", lon: 136.805, lat: 34.858 },
    source: "名古屋站一带 35.1815,136.9066；NGO 机场：公开资料",
  },
  {
    id: "kanazawa", nameZh: "金泽", nameEn: "Kanazawa", country: "japan", tier: "notable", zone: "jp-chubu",
    lon: 136.6480, lat: 36.5780,
    airport: { iata: "KMQ", nameZh: "小松机场（经小松转乘）", nameEn: "Komatsu (via Komatsu)", lon: 136.407, lat: 36.394 },
    source: "金泽站一带 36.5780,136.6480；KMQ 机场：公开资料",
  },
  {
    id: "nara", nameZh: "奈良", nameEn: "Nara", country: "japan", tier: "notable", zone: "jp-kansai",
    lon: 135.8048, lat: 34.6851,
    airport: { iata: "KIX", nameZh: "关西国际机场（经大阪转乘）", nameEn: "Kansai Int'l (via Osaka)", lon: 135.244, lat: 34.427 },
    source: "奈良公园一带 34.6851,135.8048；KIX 机场：公开资料（奈良无民航机场，经关西/大阪转铁路）",
  },
  {
    id: "hiroshima", nameZh: "广岛", nameEn: "Hiroshima", country: "japan", tier: "major", zone: "jp-chugoku",
    lon: 132.4553, lat: 34.3853,
    airport: { iata: "HIJ", nameZh: "广岛机场", nameEn: "Hiroshima", lon: 132.919, lat: 34.436 },
    source: "广岛站一带 34.3853,132.4553；HIJ 机场：公开资料",
  },
  {
    id: "takamatsu", nameZh: "高松", nameEn: "Takamatsu", country: "japan", tier: "notable", zone: "jp-shikoku",
    lon: 134.0466, lat: 34.3428,
    airport: { iata: "TAK", nameZh: "高松机场", nameEn: "Takamatsu", lon: 134.016, lat: 34.214 },
    source: "高松站一带 34.3428,134.0466；TAK 机场：公开资料",
  },
  {
    id: "nagasaki", nameZh: "长崎", nameEn: "Nagasaki", country: "japan", tier: "notable", zone: "jp-kyushu",
    lon: 129.8737, lat: 32.7503,
    airport: { iata: "NGS", nameZh: "长崎机场", nameEn: "Nagasaki", lon: 129.914, lat: 32.917 },
    source: "长崎站一带 32.7503,129.8737；NGS 机场：公开资料",
  },

  // ── 新西兰 ──────────────────────────────────────────────
  {
    id: "auckland", nameZh: "奥克兰", nameEn: "Auckland", country: "new-zealand", tier: "major", zone: "nz-north",
    lon: 174.7633, lat: -36.8485,
    airport: { iata: "AKL", nameZh: "奥克兰机场", nameEn: "Auckland", lon: 174.792, lat: -37.008 },
    source: "奥克兰市中心 -36.8485,174.7633；AKL 机场：公开资料",
  },
  {
    id: "wellington", nameZh: "惠灵顿", nameEn: "Wellington", country: "new-zealand", tier: "capital", zone: "nz-north",
    lon: 174.7762, lat: -41.2865,
    airport: { iata: "WLG", nameZh: "惠灵顿机场", nameEn: "Wellington", lon: 174.805, lat: -41.327 },
    source: "惠灵顿市中心 -41.2865,174.7762；WLG 机场：公开资料",
  },
  {
    id: "rotorua", nameZh: "罗托鲁瓦", nameEn: "Rotorua", country: "new-zealand", tier: "notable", zone: "nz-north",
    lon: 176.2514, lat: -38.1368,
    airport: { iata: "ROT", nameZh: "罗托鲁瓦机场", nameEn: "Rotorua", lon: 176.317, lat: -38.109 },
    source: "罗托鲁瓦市中心 -38.1368,176.2514；ROT 机场：公开资料",
  },
  {
    id: "christchurch", nameZh: "基督城", nameEn: "Christchurch", country: "new-zealand", tier: "major", zone: "nz-south",
    lon: 172.6362, lat: -43.5321,
    airport: { iata: "CHC", nameZh: "基督城机场", nameEn: "Christchurch", lon: 172.532, lat: -43.489 },
    source: "基督城大教堂广场 -43.5321,172.6362；CHC 机场：公开资料",
  },
  {
    id: "queenstown", nameZh: "皇后镇", nameEn: "Queenstown", country: "new-zealand", tier: "notable", zone: "nz-south",
    lon: 168.6626, lat: -45.0312,
    airport: { iata: "ZQN", nameZh: "皇后镇机场", nameEn: "Queenstown", lon: 168.739, lat: -45.021 },
    source: "皇后镇市中心 -45.0312,168.6626；ZQN 机场：公开资料",
  },
  {
    id: "dunedin", nameZh: "达尼丁", nameEn: "Dunedin", country: "new-zealand", tier: "notable", zone: "nz-south",
    lon: 170.5028, lat: -45.8788,
    airport: { iata: "DUD", nameZh: "达尼丁机场", nameEn: "Dunedin", lon: 170.198, lat: -45.928 },
    source: "达尼丁八角广场 -45.8788,170.5028；DUD 机场：公开资料",
  },
];

const BY_ID = new Map(CITY_REGISTRY.map((c) => [c.id, c]));

/** 国家 slug → 大洲 id（regionId）。新增国家时补一行。 */
export const COUNTRY_TO_CONTINENT: Record<string, string> = {
  china: "asia",
  japan: "asia",
  australia: "oceania",
  "new-zealand": "oceania",
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
