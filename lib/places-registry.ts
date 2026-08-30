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
  // 澳大利亚（州 / 领地，大致由东南向外）
  "au-nsw": { zh: "新南威尔士", en: "New South Wales", order: 40 },
  "au-act": { zh: "首都领地", en: "Australian Capital Territory", order: 41 },
  "au-vic": { zh: "维多利亚", en: "Victoria", order: 42 },
  "au-tas": { zh: "塔斯马尼亚", en: "Tasmania", order: 43 },
  "au-qld": { zh: "昆士兰", en: "Queensland", order: 44 },
  "au-sa": { zh: "南澳大利亚", en: "South Australia", order: 45 },
  "au-wa": { zh: "西澳大利亚", en: "Western Australia", order: 46 },
  "au-nt": { zh: "北领地", en: "Northern Territory", order: 47 },
  // 美国（大致由东到西）
  "us-northeast": { zh: "东北部", en: "Northeast", order: 40 },
  "us-south": { zh: "南部", en: "South", order: 41 },
  "us-midwest": { zh: "中西部", en: "Midwest", order: 42 },
  "us-mountain-west": { zh: "山区西部", en: "Mountain West", order: 43 },
  "us-southwest": { zh: "西南部", en: "Southwest", order: 44 },
  "us-west-coast": { zh: "西海岸", en: "West Coast", order: 45 },
  // 加拿大（大致由东到西再到北）
  "ca-atlantic": { zh: "大西洋省份", en: "Atlantic Canada", order: 50 },
  "ca-central": { zh: "中部（安大略·魁北克）", en: "Central Canada", order: 51 },
  "ca-prairies": { zh: "草原三省", en: "Prairies", order: 52 },
  "ca-west-coast": { zh: "西海岸", en: "West Coast", order: 53 },
  "ca-north": { zh: "北方", en: "The North", order: 54 },
  // 英国（英格兰南→中→北→苏格兰→威尔士→北爱尔兰）
  "uk-england-south": { zh: "英格兰南部", en: "Southern England", order: 60 },
  "uk-england-midlands": { zh: "英格兰中部", en: "The Midlands", order: 61 },
  "uk-england-north": { zh: "英格兰北部", en: "Northern England", order: 62 },
  "uk-scotland": { zh: "苏格兰", en: "Scotland", order: 63 },
  "uk-wales": { zh: "威尔士", en: "Wales", order: 64 },
  "uk-northern-ireland": { zh: "北爱尔兰", en: "Northern Ireland", order: 65 },
  // 冰岛（首都圈→南→东南→东→北→西部峡湾）
  "is-southwest": { zh: "首都圈与西南", en: "Capital Region & Southwest", order: 70 },
  "is-south": { zh: "南部海岸", en: "South Coast", order: 71 },
  "is-southeast": { zh: "东南部", en: "Southeast", order: 72 },
  "is-east": { zh: "东部", en: "East", order: 73 },
  "is-north": { zh: "北部", en: "North", order: 74 },
  "is-westfjords": { zh: "西部峡湾", en: "Westfjords", order: 75 },
  // 瑞士（中部高原→日内瓦湖区→伯尔尼高地→瓦莱→格劳宾登→提契诺）
  "ch-plateau": { zh: "中部高原", en: "Swiss Plateau", order: 80 },
  "ch-lake-geneva": { zh: "日内瓦湖区", en: "Lake Geneva Region", order: 81 },
  "ch-bernese-oberland": { zh: "伯尔尼高地", en: "Bernese Oberland", order: 82 },
  "ch-valais": { zh: "瓦莱州", en: "Valais", order: 83 },
  "ch-graubunden": { zh: "格劳宾登州", en: "Graubünden", order: 84 },
  "ch-ticino": { zh: "提契诺州", en: "Ticino", order: 85 },
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
  { country: "usa", nameZh: "美国", nameEn: "United States" },
  { country: "canada", nameZh: "加拿大", nameEn: "Canada" },
  { country: "uk", nameZh: "英国", nameEn: "United Kingdom" },
  { country: "iceland", nameZh: "冰岛", nameEn: "Iceland" },
  { country: "switzerland", nameZh: "瑞士", nameEn: "Switzerland" },
];

export const CITY_REGISTRY: CityEntry[] = [
  {
    id: "sydney", nameZh: "悉尼", nameEn: "Sydney", country: "australia", tier: "major", zone: "au-nsw",
    lon: 151.2093, lat: -33.8688,
    airport: { iata: "SYD", nameZh: "悉尼金斯福德·史密斯机场", nameEn: "Sydney Kingsford Smith", lon: 151.177, lat: -33.946 },
    source: "悉尼市中心 -33.8688,151.2093；SYD 机场坐标：公开资料",
  },
  {
    id: "melbourne", nameZh: "墨尔本", nameEn: "Melbourne", country: "australia", tier: "major", zone: "au-vic",
    lon: 144.9631, lat: -37.8136,
    airport: { iata: "MEL", nameZh: "墨尔本机场（图拉马林）", nameEn: "Melbourne (Tullamarine)", lon: 144.843, lat: -37.669 },
    source: "墨尔本 CBD -37.8136,144.9631；MEL 机场：公开资料",
  },
  {
    id: "brisbane", nameZh: "布里斯班", nameEn: "Brisbane", country: "australia", tier: "major", zone: "au-qld",
    lon: 153.0251, lat: -27.4698,
    airport: { iata: "BNE", nameZh: "布里斯班机场", nameEn: "Brisbane", lon: 153.117, lat: -27.384 },
    source: "布里斯班 CBD -27.4698,153.0251；BNE 机场：公开资料",
  },
  {
    id: "perth", nameZh: "珀斯", nameEn: "Perth", country: "australia", tier: "major", zone: "au-wa",
    lon: 115.8605, lat: -31.9523,
    airport: { iata: "PER", nameZh: "珀斯机场", nameEn: "Perth", lon: 115.967, lat: -31.940 },
    source: "珀斯 CBD -31.9523,115.8605；PER 机场：公开资料",
  },
  {
    id: "adelaide", nameZh: "阿德莱德", nameEn: "Adelaide", country: "australia", tier: "major", zone: "au-sa",
    lon: 138.6007, lat: -34.9285,
    airport: { iata: "ADL", nameZh: "阿德莱德机场", nameEn: "Adelaide", lon: 138.531, lat: -34.945 },
    source: "阿德莱德 CBD -34.9285,138.6007；ADL 机场：公开资料",
  },
  {
    id: "cairns", nameZh: "凯恩斯", nameEn: "Cairns", country: "australia", tier: "notable", zone: "au-qld",
    lon: 145.7710, lat: -16.9203,
    airport: { iata: "CNS", nameZh: "凯恩斯机场", nameEn: "Cairns", lon: 145.755, lat: -16.885 },
    source: "凯恩斯 -16.9203,145.7710；CNS 机场：公开资料",
  },
  {
    id: "darwin", nameZh: "达尔文", nameEn: "Darwin", country: "australia", tier: "notable", zone: "au-nt",
    lon: 130.8456, lat: -12.4634,
    airport: { iata: "DRW", nameZh: "达尔文机场", nameEn: "Darwin", lon: 130.877, lat: -12.415 },
    source: "达尔文 -12.4634,130.8456；DRW 机场：公开资料",
  },
  {
    id: "canberra", nameZh: "堪培拉", nameEn: "Canberra", country: "australia", tier: "capital", zone: "au-act",
    lon: 149.1300, lat: -35.2809,
    airport: { iata: "CBR", nameZh: "堪培拉机场", nameEn: "Canberra", lon: 149.195, lat: -35.307 },
    source: "堪培拉市中心 -35.2809,149.1300；CBR 机场：公开资料",
  },
  {
    id: "newcastle", nameZh: "纽卡斯尔", nameEn: "Newcastle", country: "australia", tier: "major", zone: "au-nsw",
    lon: 151.7817, lat: -32.9283,
    airport: { iata: "NTL", nameZh: "纽卡斯尔机场（威廉敦）", nameEn: "Newcastle (Williamtown)", lon: 151.834, lat: -32.795 },
    source: "纽卡斯尔 CBD -32.9283,151.7817；NTL 机场：公开资料",
  },
  {
    id: "gold-coast", nameZh: "黄金海岸", nameEn: "Gold Coast", country: "australia", tier: "major", zone: "au-qld",
    lon: 153.4000, lat: -28.0167,
    airport: { iata: "OOL", nameZh: "黄金海岸机场（库兰加塔）", nameEn: "Gold Coast (Coolangatta)", lon: 153.505, lat: -28.164 },
    source: "黄金海岸冲浪者天堂一带 -28.0167,153.4000；OOL 机场：公开资料",
  },
  {
    id: "hobart", nameZh: "霍巴特", nameEn: "Hobart", country: "australia", tier: "major", zone: "au-tas",
    lon: 147.3272, lat: -42.8821,
    airport: { iata: "HBA", nameZh: "霍巴特机场", nameEn: "Hobart", lon: 147.510, lat: -42.836 },
    source: "霍巴特 CBD -42.8821,147.3272；HBA 机场：公开资料",
  },
  {
    id: "launceston", nameZh: "朗塞斯顿", nameEn: "Launceston", country: "australia", tier: "notable", zone: "au-tas",
    lon: 147.1441, lat: -41.4332,
    airport: { iata: "LST", nameZh: "朗塞斯顿机场", nameEn: "Launceston", lon: 147.214, lat: -41.545 },
    source: "朗塞斯顿 CBD -41.4332,147.1441；LST 机场：公开资料",
  },
  {
    id: "alice-springs", nameZh: "爱丽斯泉", nameEn: "Alice Springs", country: "australia", tier: "notable", zone: "au-nt",
    lon: 133.8807, lat: -23.6980,
    airport: { iata: "ASP", nameZh: "爱丽斯泉机场", nameEn: "Alice Springs", lon: 133.902, lat: -23.807 },
    source: "爱丽斯泉 -23.6980,133.8807；ASP 机场：公开资料",
  },
  {
    id: "katherine", nameZh: "凯瑟琳", nameEn: "Katherine", country: "australia", tier: "notable", zone: "au-nt",
    lon: 132.2635, lat: -14.4652,
    airport: { iata: "KTR", nameZh: "凯瑟琳机场（廷达尔）", nameEn: "Katherine (Tindal)", lon: 132.378, lat: -14.521 },
    source: "凯瑟琳 -14.4652,132.2635；KTR/廷达尔 机场：公开资料",
  },
  {
    id: "broome", nameZh: "布鲁姆", nameEn: "Broome", country: "australia", tier: "notable", zone: "au-wa",
    lon: 122.2359, lat: -17.9614,
    airport: { iata: "BME", nameZh: "布鲁姆机场", nameEn: "Broome", lon: 122.232, lat: -17.945 },
    source: "布鲁姆 -17.9614,122.2359；BME 机场：公开资料",
  },
  {
    id: "exmouth", nameZh: "埃克斯茅斯", nameEn: "Exmouth", country: "australia", tier: "notable", zone: "au-wa",
    lon: 114.1281, lat: -21.9316,
    airport: { iata: "LEA", nameZh: "勒尔蒙斯机场", nameEn: "Learmonth", lon: 114.089, lat: -22.235 },
    source: "埃克斯茅斯镇 -21.9316,114.1281；LEA/勒尔蒙斯 机场（镇南约35km）：公开资料",
  },
  {
    id: "coober-pedy", nameZh: "库伯佩迪", nameEn: "Coober Pedy", country: "australia", tier: "notable", zone: "au-sa",
    lon: 134.7544, lat: -29.0139,
    airport: { iata: "CPD", nameZh: "库伯佩迪机场", nameEn: "Coober Pedy", lon: 134.721, lat: -29.040 },
    source: "库伯佩迪 -29.0139,134.7544；CPD 机场：公开资料",
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

  // ── 美国 ──────────────────────────────────────────────
  {
    id: "new-york", nameZh: "纽约", nameEn: "New York", country: "usa", tier: "major", zone: "us-northeast",
    lon: -74.0060, lat: 40.7128,
    airport: { iata: "JFK", nameZh: "肯尼迪国际机场", nameEn: "John F. Kennedy Int'l", lon: -73.778, lat: 40.641 },
    source: "曼哈顿下城 40.7128,-74.0060；JFK 机场：公开资料",
  },
  {
    id: "washington-dc", nameZh: "华盛顿", nameEn: "Washington, D.C.", country: "usa", tier: "capital", zone: "us-northeast",
    lon: -77.0369, lat: 38.9072,
    airport: { iata: "IAD", nameZh: "杜勒斯国际机场", nameEn: "Washington Dulles Int'l", lon: -77.456, lat: 38.953 },
    source: "国家广场一带 38.9072,-77.0369；IAD 机场：公开资料",
  },
  {
    id: "chicago", nameZh: "芝加哥", nameEn: "Chicago", country: "usa", tier: "major", zone: "us-midwest",
    lon: -87.6298, lat: 41.8781,
    airport: { iata: "ORD", nameZh: "奥黑尔国际机场", nameEn: "O'Hare Int'l", lon: -87.905, lat: 41.978 },
    source: "芝加哥卢普区 41.8781,-87.6298；ORD 机场：公开资料",
  },
  {
    id: "new-orleans", nameZh: "新奥尔良", nameEn: "New Orleans", country: "usa", tier: "notable", zone: "us-south",
    lon: -90.0715, lat: 29.9511,
    airport: { iata: "MSY", nameZh: "路易斯·阿姆斯特朗新奥尔良国际机场", nameEn: "Louis Armstrong New Orleans Int'l", lon: -90.258, lat: 29.993 },
    source: "法国区一带 29.9511,-90.0715；MSY 机场：公开资料",
  },
  {
    id: "miami", nameZh: "迈阿密", nameEn: "Miami", country: "usa", tier: "major", zone: "us-south",
    lon: -80.1918, lat: 25.7617,
    airport: { iata: "MIA", nameZh: "迈阿密国际机场", nameEn: "Miami Int'l", lon: -80.279, lat: 25.796 },
    source: "迈阿密市中心 25.7617,-80.1918；MIA 机场：公开资料",
  },
  {
    id: "denver", nameZh: "丹佛", nameEn: "Denver", country: "usa", tier: "major", zone: "us-mountain-west",
    lon: -104.9903, lat: 39.7392,
    airport: { iata: "DEN", nameZh: "丹佛国际机场", nameEn: "Denver Int'l", lon: -104.673, lat: 39.862 },
    source: "丹佛市中心 39.7392,-104.9903；DEN 机场：公开资料",
  },
  {
    id: "las-vegas", nameZh: "拉斯维加斯", nameEn: "Las Vegas", country: "usa", tier: "notable", zone: "us-southwest",
    lon: -115.1398, lat: 36.1699,
    airport: { iata: "LAS", nameZh: "哈里·里德国际机场", nameEn: "Harry Reid Int'l", lon: -115.154, lat: 36.084 },
    source: "拉斯维加斯大道一带 36.1699,-115.1398；LAS 机场：公开资料",
  },
  {
    id: "san-francisco", nameZh: "旧金山", nameEn: "San Francisco", country: "usa", tier: "major", zone: "us-west-coast",
    lon: -122.4194, lat: 37.7749,
    airport: { iata: "SFO", nameZh: "旧金山国际机场", nameEn: "San Francisco Int'l", lon: -122.379, lat: 37.622 },
    source: "旧金山市中心 37.7749,-122.4194；SFO 机场：公开资料",
  },
  {
    id: "los-angeles", nameZh: "洛杉矶", nameEn: "Los Angeles", country: "usa", tier: "major", zone: "us-west-coast",
    lon: -118.2437, lat: 34.0522,
    airport: { iata: "LAX", nameZh: "洛杉矶国际机场", nameEn: "Los Angeles Int'l", lon: -118.408, lat: 33.942 },
    source: "洛杉矶市中心 34.0522,-118.2437；LAX 机场：公开资料",
  },

  // ── 加拿大 ──
  {
    id: "toronto", nameZh: "多伦多", nameEn: "Toronto", country: "canada", tier: "major", zone: "ca-central",
    lon: -79.3832, lat: 43.6532,
    airport: { iata: "YYZ", nameZh: "多伦多皮尔逊国际机场", nameEn: "Toronto Pearson Int'l", lon: -79.6248, lat: 43.6777 },
    source: "多伦多市中心 43.6532,-79.3832；YYZ 机场：公开资料",
  },
  {
    id: "ottawa", nameZh: "渥太华", nameEn: "Ottawa", country: "canada", tier: "capital", zone: "ca-central",
    lon: -75.6972, lat: 45.4215,
    airport: { iata: "YOW", nameZh: "渥太华麦克唐纳-卡蒂埃国际机场", nameEn: "Ottawa Macdonald–Cartier Int'l", lon: -75.6692, lat: 45.3225 },
    source: "渥太华市中心 45.4215,-75.6972；YOW 机场：公开资料",
  },
  {
    id: "montreal", nameZh: "蒙特利尔", nameEn: "Montreal", country: "canada", tier: "major", zone: "ca-central",
    lon: -73.5674, lat: 45.5019,
    airport: { iata: "YUL", nameZh: "蒙特利尔特鲁多国际机场", nameEn: "Montréal–Trudeau Int'l", lon: -73.7408, lat: 45.4706 },
    source: "蒙特利尔市中心 45.5019,-73.5674；YUL 机场：公开资料",
  },
  {
    id: "quebec-city", nameZh: "魁北克市", nameEn: "Quebec City", country: "canada", tier: "notable", zone: "ca-central",
    lon: -71.2080, lat: 46.8139,
    airport: { iata: "YQB", nameZh: "让·勒萨热国际机场", nameEn: "Québec City Jean Lesage Int'l", lon: -71.3933, lat: 46.7911 },
    source: "魁北克市中心 46.8139,-71.2080；YQB 机场：公开资料",
  },
  {
    id: "halifax", nameZh: "哈利法克斯", nameEn: "Halifax", country: "canada", tier: "notable", zone: "ca-atlantic",
    lon: -63.5752, lat: 44.6488,
    airport: { iata: "YHZ", nameZh: "哈利法克斯斯坦菲尔德国际机场", nameEn: "Halifax Stanfield Int'l", lon: -63.5086, lat: 44.8808 },
    source: "哈利法克斯市中心 44.6488,-63.5752；YHZ 机场：公开资料",
  },
  {
    id: "st-johns", nameZh: "圣约翰斯", nameEn: "St. John's", country: "canada", tier: "notable", zone: "ca-atlantic",
    lon: -52.7126, lat: 47.5615,
    airport: { iata: "YYT", nameZh: "圣约翰斯国际机场", nameEn: "St. John's Int'l", lon: -52.7519, lat: 47.6186 },
    source: "圣约翰斯市中心 47.5615,-52.7126；YYT 机场：公开资料",
  },
  {
    id: "winnipeg", nameZh: "温尼伯", nameEn: "Winnipeg", country: "canada", tier: "notable", zone: "ca-prairies",
    lon: -97.1384, lat: 49.8951,
    airport: { iata: "YWG", nameZh: "温尼伯理查森国际机场", nameEn: "Winnipeg Richardson Int'l", lon: -97.2399, lat: 49.9100 },
    source: "温尼伯市中心 49.8951,-97.1384；YWG 机场：公开资料",
  },
  {
    id: "calgary", nameZh: "卡尔加里", nameEn: "Calgary", country: "canada", tier: "major", zone: "ca-prairies",
    lon: -114.0719, lat: 51.0447,
    airport: { iata: "YYC", nameZh: "卡尔加里国际机场", nameEn: "Calgary Int'l", lon: -114.0106, lat: 51.1315 },
    source: "卡尔加里市中心 51.0447,-114.0719；YYC 机场：公开资料",
  },
  {
    id: "edmonton", nameZh: "埃德蒙顿", nameEn: "Edmonton", country: "canada", tier: "notable", zone: "ca-prairies",
    lon: -113.4938, lat: 53.5461,
    airport: { iata: "YEG", nameZh: "埃德蒙顿国际机场", nameEn: "Edmonton Int'l", lon: -113.5797, lat: 53.3097 },
    source: "埃德蒙顿市中心 53.5461,-113.4938；YEG 机场：公开资料",
  },
  {
    id: "vancouver", nameZh: "温哥华", nameEn: "Vancouver", country: "canada", tier: "major", zone: "ca-west-coast",
    lon: -123.1207, lat: 49.2827,
    airport: { iata: "YVR", nameZh: "温哥华国际机场", nameEn: "Vancouver Int'l", lon: -123.1815, lat: 49.1967 },
    source: "温哥华市中心 49.2827,-123.1207；YVR 机场：公开资料",
  },

  // ── 英国 ──
  {
    id: "london", nameZh: "伦敦", nameEn: "London", country: "uk", tier: "capital", zone: "uk-england-south",
    lon: -0.1278, lat: 51.5074,
    airport: { iata: "LHR", nameZh: "希思罗机场", nameEn: "Heathrow", lon: -0.4543, lat: 51.4700 },
    source: "伦敦市中心 51.5074,-0.1278；LHR 机场：公开资料",
  },
  {
    id: "bristol", nameZh: "布里斯托尔", nameEn: "Bristol", country: "uk", tier: "notable", zone: "uk-england-south",
    lon: -2.5879, lat: 51.4545,
    airport: { iata: "BRS", nameZh: "布里斯托尔机场", nameEn: "Bristol Airport", lon: -2.7191, lat: 51.3827 },
    source: "布里斯托尔市中心 51.4545,-2.5879；BRS 机场：公开资料",
  },
  {
    id: "birmingham", nameZh: "伯明翰", nameEn: "Birmingham", country: "uk", tier: "major", zone: "uk-england-midlands",
    lon: -1.8904, lat: 52.4862,
    airport: { iata: "BHX", nameZh: "伯明翰机场", nameEn: "Birmingham Airport", lon: -1.7480, lat: 52.4539 },
    source: "伯明翰市中心 52.4862,-1.8904；BHX 机场：公开资料",
  },
  {
    id: "manchester", nameZh: "曼彻斯特", nameEn: "Manchester", country: "uk", tier: "major", zone: "uk-england-north",
    lon: -2.2426, lat: 53.4808,
    airport: { iata: "MAN", nameZh: "曼彻斯特机场", nameEn: "Manchester Airport", lon: -2.2750, lat: 53.3537 },
    source: "曼彻斯特市中心 53.4808,-2.2426；MAN 机场：公开资料",
  },
  {
    id: "liverpool", nameZh: "利物浦", nameEn: "Liverpool", country: "uk", tier: "notable", zone: "uk-england-north",
    lon: -2.9916, lat: 53.4084,
    airport: { iata: "LPL", nameZh: "利物浦约翰·列侬机场", nameEn: "Liverpool John Lennon", lon: -2.8497, lat: 53.3336 },
    source: "利物浦市中心 53.4084,-2.9916；LPL 机场：公开资料",
  },
  {
    id: "york", nameZh: "约克", nameEn: "York", country: "uk", tier: "notable", zone: "uk-england-north",
    lon: -1.0873, lat: 53.9600,
    source: "约克市中心 53.9600,-1.0873：公开资料（无自有机场，就近用利兹或曼彻斯特）",
  },
  {
    id: "edinburgh", nameZh: "爱丁堡", nameEn: "Edinburgh", country: "uk", tier: "notable", zone: "uk-scotland",
    lon: -3.1883, lat: 55.9533,
    airport: { iata: "EDI", nameZh: "爱丁堡机场", nameEn: "Edinburgh Airport", lon: -3.3725, lat: 55.9500 },
    source: "爱丁堡市中心 55.9533,-3.1883；EDI 机场：公开资料",
  },
  {
    id: "glasgow", nameZh: "格拉斯哥", nameEn: "Glasgow", country: "uk", tier: "major", zone: "uk-scotland",
    lon: -4.2518, lat: 55.8642,
    airport: { iata: "GLA", nameZh: "格拉斯哥机场", nameEn: "Glasgow Airport", lon: -4.4331, lat: 55.8719 },
    source: "格拉斯哥市中心 55.8642,-4.2518；GLA 机场：公开资料",
  },
  {
    id: "aberdeen", nameZh: "阿伯丁", nameEn: "Aberdeen", country: "uk", tier: "notable", zone: "uk-scotland",
    lon: -2.0943, lat: 57.1497,
    airport: { iata: "ABZ", nameZh: "阿伯丁机场", nameEn: "Aberdeen Airport", lon: -2.1978, lat: 57.2019 },
    source: "阿伯丁市中心 57.1497,-2.0943；ABZ 机场：公开资料",
  },
  {
    id: "inverness", nameZh: "因弗内斯", nameEn: "Inverness", country: "uk", tier: "notable", zone: "uk-scotland",
    lon: -4.2247, lat: 57.4778,
    airport: { iata: "INV", nameZh: "因弗内斯机场", nameEn: "Inverness Airport", lon: -4.0475, lat: 57.5425 },
    source: "因弗内斯市中心 57.4778,-4.2247；INV 机场：公开资料",
  },
  {
    id: "cardiff", nameZh: "卡迪夫", nameEn: "Cardiff", country: "uk", tier: "notable", zone: "uk-wales",
    lon: -3.1791, lat: 51.4816,
    airport: { iata: "CWL", nameZh: "卡迪夫机场", nameEn: "Cardiff Airport", lon: -3.3433, lat: 51.3967 },
    source: "卡迪夫市中心 51.4816,-3.1791；CWL 机场：公开资料",
  },
  {
    id: "belfast", nameZh: "贝尔法斯特", nameEn: "Belfast", country: "uk", tier: "notable", zone: "uk-northern-ireland",
    lon: -5.9301, lat: 54.5973,
    airport: { iata: "BFS", nameZh: "贝尔法斯特国际机场", nameEn: "Belfast Int'l", lon: -6.2158, lat: 54.6575 },
    source: "贝尔法斯特市中心 54.5973,-5.9301；BFS 机场：公开资料",
  },

  // ── 冰岛 ──
  {
    id: "reykjavik", nameZh: "雷克雅未克", nameEn: "Reykjavík", country: "iceland", tier: "capital", zone: "is-southwest",
    lon: -21.9426, lat: 64.1466,
    airport: { iata: "RKV", nameZh: "雷克雅未克机场（国内）", nameEn: "Reykjavík Airport", lon: -21.9406, lat: 64.1300 },
    source: "雷克雅未克市中心 64.1466,-21.9426；RKV 国内机场：公开资料（国际航班用凯夫拉维克 KEF）",
  },
  {
    id: "keflavik", nameZh: "凯夫拉维克", nameEn: "Keflavík", country: "iceland", tier: "notable", zone: "is-southwest",
    lon: -22.5624, lat: 64.0049,
    airport: { iata: "KEF", nameZh: "凯夫拉维克国际机场", nameEn: "Keflavík Int'l", lon: -22.6056, lat: 63.9850 },
    source: "凯夫拉维克镇 64.0049,-22.5624；KEF 机场：公开资料",
  },
  {
    id: "vik", nameZh: "维克", nameEn: "Vík í Mýrdal", country: "iceland", tier: "notable", zone: "is-south",
    lon: -19.0060, lat: 63.4187,
    source: "维克（Vík í Mýrdal）63.4187,-19.0060：公开资料（无机场，南岸环岛公路上的小镇）",
  },
  {
    id: "hofn", nameZh: "赫本", nameEn: "Höfn", country: "iceland", tier: "notable", zone: "is-southeast",
    lon: -15.2082, lat: 64.2539,
    airport: { iata: "HFN", nameZh: "赫本机场", nameEn: "Hornafjörður Airport", lon: -15.2272, lat: 64.2956 },
    source: "赫本（Höfn í Hornafirði）64.2539,-15.2082；HFN 机场：公开资料",
  },
  {
    id: "egilsstadir", nameZh: "埃伊尔斯塔济", nameEn: "Egilsstaðir", country: "iceland", tier: "notable", zone: "is-east",
    lon: -14.3948, lat: 65.2669,
    airport: { iata: "EGS", nameZh: "埃伊尔斯塔济机场", nameEn: "Egilsstaðir Airport", lon: -14.4014, lat: 65.2833 },
    source: "埃伊尔斯塔济 65.2669,-14.3948；EGS 机场：公开资料",
  },
  {
    id: "akureyri", nameZh: "阿克雷里", nameEn: "Akureyri", country: "iceland", tier: "major", zone: "is-north",
    lon: -18.1105, lat: 65.6839,
    airport: { iata: "AEY", nameZh: "阿克雷里机场", nameEn: "Akureyri Airport", lon: -18.0728, lat: 65.6600 },
    source: "阿克雷里 65.6839,-18.1105；AEY 机场：公开资料",
  },
  {
    id: "husavik", nameZh: "胡萨维克", nameEn: "Húsavík", country: "iceland", tier: "notable", zone: "is-north",
    lon: -17.3389, lat: 66.0449,
    airport: { iata: "HZK", nameZh: "胡萨维克机场", nameEn: "Húsavík Airport", lon: -17.4260, lat: 65.9522 },
    source: "胡萨维克 66.0449,-17.3389；HZK 机场：公开资料",
  },
  {
    id: "isafjordur", nameZh: "伊萨菲厄泽", nameEn: "Ísafjörður", country: "iceland", tier: "notable", zone: "is-westfjords",
    lon: -23.1355, lat: 66.0748,
    airport: { iata: "IFJ", nameZh: "伊萨菲厄泽机场", nameEn: "Ísafjörður Airport", lon: -23.1353, lat: 66.0581 },
    source: "伊萨菲厄泽 66.0748,-23.1355；IFJ 机场：公开资料",
  },

  // ── 瑞士 ──
  {
    id: "zurich", nameZh: "苏黎世", nameEn: "Zürich", country: "switzerland", tier: "major", zone: "ch-plateau",
    lon: 8.5417, lat: 47.3769,
    airport: { iata: "ZRH", nameZh: "苏黎世机场", nameEn: "Zurich Airport", lon: 8.5492, lat: 47.4647 },
    source: "苏黎世市中心 47.3769,8.5417；ZRH 机场：公开资料",
  },
  {
    id: "bern", nameZh: "伯尔尼", nameEn: "Bern", country: "switzerland", tier: "capital", zone: "ch-plateau",
    lon: 7.4474, lat: 46.9480,
    airport: { iata: "BRN", nameZh: "伯尔尼机场", nameEn: "Bern Airport", lon: 7.4971, lat: 46.9141 },
    source: "伯尔尼市中心 46.9480,7.4474；BRN 机场：公开资料",
  },
  {
    id: "basel", nameZh: "巴塞尔", nameEn: "Basel", country: "switzerland", tier: "major", zone: "ch-plateau",
    lon: 7.5886, lat: 47.5596,
    airport: { iata: "BSL", nameZh: "巴塞尔-米卢斯欧洲机场", nameEn: "EuroAirport Basel-Mulhouse", lon: 7.5299, lat: 47.5896 },
    source: "巴塞尔市中心 47.5596,7.5886；BSL 机场：公开资料（三国交界，机场主体在法国境内）",
  },
  {
    id: "lucerne", nameZh: "卢塞恩", nameEn: "Lucerne", country: "switzerland", tier: "notable", zone: "ch-plateau",
    lon: 8.3093, lat: 47.0502,
    source: "卢塞恩市中心 47.0502,8.3093：公开资料（无机场，就近用苏黎世）",
  },
  {
    id: "geneva", nameZh: "日内瓦", nameEn: "Geneva", country: "switzerland", tier: "major", zone: "ch-lake-geneva",
    lon: 6.1432, lat: 46.2044,
    airport: { iata: "GVA", nameZh: "日内瓦机场", nameEn: "Geneva Airport", lon: 6.1090, lat: 46.2381 },
    source: "日内瓦市中心 46.2044,6.1432；GVA 机场：公开资料",
  },
  {
    id: "lausanne", nameZh: "洛桑", nameEn: "Lausanne", country: "switzerland", tier: "notable", zone: "ch-lake-geneva",
    lon: 6.6323, lat: 46.5197,
    source: "洛桑市中心 46.5197,6.6323：公开资料（无机场，就近用日内瓦）",
  },
  {
    id: "interlaken", nameZh: "因特拉肯", nameEn: "Interlaken", country: "switzerland", tier: "notable", zone: "ch-bernese-oberland",
    lon: 7.8632, lat: 46.6863,
    source: "因特拉肯 46.6863,7.8632：公开资料（无机场，铁路进入，少女峰门户）",
  },
  {
    id: "zermatt", nameZh: "采尔马特", nameEn: "Zermatt", country: "switzerland", tier: "notable", zone: "ch-valais",
    lon: 7.7491, lat: 46.0207,
    source: "采尔马特 46.0207,7.7491：公开资料（无机动车、无机场，需在特施换齿轨火车进入）",
  },
  {
    id: "st-moritz", nameZh: "圣莫里茨", nameEn: "St. Moritz", country: "switzerland", tier: "notable", zone: "ch-graubunden",
    lon: 9.8355, lat: 46.4908,
    source: "圣莫里茨 46.4908,9.8355：公开资料（无定期航班，就近萨梅丹通用航空机场；铁路进入）",
  },
  {
    id: "lugano", nameZh: "卢加诺", nameEn: "Lugano", country: "switzerland", tier: "notable", zone: "ch-ticino",
    lon: 8.9511, lat: 46.0037,
    airport: { iata: "LUG", nameZh: "卢加诺-阿尼奥机场", nameEn: "Lugano Airport", lon: 8.9106, lat: 46.0043 },
    source: "卢加诺市中心 46.0037,8.9511；LUG 机场：公开资料",
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
  uk: "europe",
  iceland: "europe",
  switzerland: "europe",
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
