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
  // 挪威（东→南→西部峡湾→中部→北部→北极挪威）
  "no-eastern": { zh: "东部", en: "Eastern Norway", order: 90 },
  "no-southern": { zh: "南部", en: "Southern Norway", order: 91 },
  "no-western": { zh: "西部（峡湾区）", en: "Western Norway (Fjords)", order: 92 },
  "no-central": { zh: "中部（特伦德拉格）", en: "Trøndelag", order: 93 },
  "no-northern": { zh: "北部", en: "Northern Norway", order: 94 },
  "no-arctic": { zh: "北极挪威", en: "Arctic Norway", order: 95 },
  // 法国（巴黎大区→北部→阿尔萨斯→罗讷-阿尔卑斯→普罗旺斯→西南→西部→科西嘉）
  "fr-paris-region": { zh: "巴黎大区", en: "Paris Region", order: 100 },
  "fr-north": { zh: "北部", en: "Northern France", order: 101 },
  "fr-alsace": { zh: "阿尔萨斯", en: "Alsace", order: 102 },
  "fr-rhone-alpes": { zh: "罗讷-阿尔卑斯", en: "Rhône-Alpes", order: 103 },
  "fr-provence": { zh: "普罗旺斯", en: "Provence", order: 104 },
  "fr-southwest": { zh: "西南部", en: "Southwest France", order: 105 },
  "fr-west": { zh: "西部", en: "Western France", order: 106 },
  "fr-corsica": { zh: "科西嘉", en: "Corsica", order: 107 },
  // 意大利（中部→西北→东北→南部→西西里→撒丁）
  "it-central": { zh: "中部", en: "Central Italy", order: 110 },
  "it-northwest": { zh: "西北部", en: "Northwest Italy", order: 111 },
  "it-northeast": { zh: "东北部", en: "Northeast Italy", order: 112 },
  "it-south": { zh: "南部", en: "Southern Italy", order: 113 },
  "it-sicily": { zh: "西西里", en: "Sicily", order: 114 },
  "it-sardinia": { zh: "撒丁岛", en: "Sardinia", order: 115 },
  // 西班牙（中部→加泰罗尼亚→安达卢西亚→东部→北部→西北→东北→巴利阿里→加那利）
  "es-central": { zh: "中部", en: "Central Spain", order: 120 },
  "es-catalonia": { zh: "加泰罗尼亚", en: "Catalonia", order: 121 },
  "es-andalusia": { zh: "安达卢西亚", en: "Andalusia", order: 122 },
  "es-east": { zh: "东部海岸", en: "Eastern Coast", order: 123 },
  "es-north": { zh: "北部", en: "Northern Spain", order: 124 },
  "es-northwest": { zh: "西北部（加利西亚）", en: "Northwest (Galicia)", order: 125 },
  "es-northeast": { zh: "东北部（阿拉贡）", en: "Northeast (Aragon)", order: 126 },
  "es-balearic": { zh: "巴利阿里群岛", en: "Balearic Islands", order: 127 },
  "es-canary": { zh: "加那利群岛", en: "Canary Islands", order: 128 },
  // 德国（柏林→巴伐利亚→北部→西部→中部→东部→西南→东北）
  "de-berlin": { zh: "柏林", en: "Berlin", order: 130 },
  "de-bavaria": { zh: "巴伐利亚", en: "Bavaria", order: 131 },
  "de-north": { zh: "北部", en: "Northern Germany", order: 132 },
  "de-west": { zh: "西部", en: "Western Germany", order: 133 },
  "de-central": { zh: "中部", en: "Central Germany", order: 134 },
  "de-east": { zh: "东部", en: "Eastern Germany", order: 135 },
  "de-southwest": { zh: "西南部", en: "Southwest Germany", order: 136 },
  "de-northeast": { zh: "东北部", en: "Northeast Germany", order: 137 },
  // 希腊（阿提卡→马其顿→色萨利→伊庇鲁斯→伯罗奔尼撒→克里特→伊奥尼亚→爱琴海诸岛）
  "gr-attica": { zh: "阿提卡（雅典地区）", en: "Attica (Athens Region)", order: 140 },
  "gr-macedonia": { zh: "马其顿", en: "Macedonia", order: 141 },
  "gr-thessaly": { zh: "色萨利", en: "Thessaly", order: 142 },
  "gr-epirus": { zh: "伊庇鲁斯", en: "Epirus", order: 143 },
  "gr-peloponnese": { zh: "伯罗奔尼撒", en: "Peloponnese", order: 144 },
  "gr-crete": { zh: "克里特", en: "Crete", order: 145 },
  "gr-ionian": { zh: "伊奥尼亚群岛", en: "Ionian Islands", order: 146 },
  "gr-aegean": { zh: "爱琴海诸岛", en: "Aegean Islands", order: 147 },
  // 葡萄牙（里斯本大区→北部→中部→阿连特茹→阿尔加维→马德拉→亚速尔）
  "pt-lisbon-region": { zh: "里斯本大区", en: "Lisbon Region", order: 150 },
  "pt-north": { zh: "北部", en: "Northern Portugal", order: 151 },
  "pt-central": { zh: "中部", en: "Central Portugal", order: 152 },
  "pt-alentejo": { zh: "阿连特茹", en: "Alentejo", order: 153 },
  "pt-algarve": { zh: "阿尔加维", en: "Algarve", order: 154 },
  "pt-madeira": { zh: "马德拉", en: "Madeira", order: 155 },
  "pt-azores": { zh: "亚速尔", en: "Azores", order: 156 },
  // 荷兰（北荷兰→南荷兰→乌得勒支→林堡→格罗宁根-弗里斯兰→上艾瑟尔）
  "nl-noord-holland": { zh: "北荷兰省", en: "North Holland", order: 160 },
  "nl-zuid-holland": { zh: "南荷兰省", en: "South Holland", order: 161 },
  "nl-utrecht": { zh: "乌得勒支省", en: "Utrecht", order: 162 },
  "nl-limburg": { zh: "林堡省", en: "Limburg", order: 163 },
  "nl-groningen-friesland": { zh: "格罗宁根与弗里斯兰", en: "Groningen & Friesland", order: 164 },
  "nl-overijssel": { zh: "上艾瑟尔省", en: "Overijssel", order: 165 },
  // 奥地利（维也纳→蒂罗尔→萨尔茨堡→上奥地利→克恩顿→施泰尔马克→福拉尔贝格）
  "at-wien": { zh: "维也纳", en: "Vienna", order: 170 },
  "at-tirol": { zh: "蒂罗尔", en: "Tyrol", order: 171 },
  "at-salzburg": { zh: "萨尔茨堡州", en: "Salzburg (State)", order: 172 },
  "at-oberosterreich": { zh: "上奥地利", en: "Upper Austria", order: 173 },
  "at-karnten": { zh: "克恩顿", en: "Carinthia", order: 174 },
  "at-steiermark": { zh: "施泰尔马克", en: "Styria", order: 175 },
  "at-vorarlberg": { zh: "福拉尔贝格", en: "Vorarlberg", order: 176 },
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
  { country: "norway", nameZh: "挪威", nameEn: "Norway" },
  { country: "france", nameZh: "法国", nameEn: "France" },
  { country: "italy", nameZh: "意大利", nameEn: "Italy" },
  { country: "spain", nameZh: "西班牙", nameEn: "Spain" },
  { country: "germany", nameZh: "德国", nameEn: "Germany" },
  { country: "greece", nameZh: "希腊", nameEn: "Greece" },
  { country: "portugal", nameZh: "葡萄牙", nameEn: "Portugal" },
  { country: "netherlands", nameZh: "荷兰", nameEn: "Netherlands" },
  { country: "austria", nameZh: "奥地利", nameEn: "Austria" },
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

  // ── 挪威 ──
  {
    id: "oslo", nameZh: "奥斯陆", nameEn: "Oslo", country: "norway", tier: "capital", zone: "no-eastern",
    lon: 10.7522, lat: 59.9139,
    airport: { iata: "OSL", nameZh: "奥斯陆加勒穆恩机场", nameEn: "Oslo Gardermoen", lon: 11.1004, lat: 60.1939 },
    source: "奥斯陆市中心 59.9139,10.7522；OSL 机场：公开资料",
  },
  {
    id: "lillehammer", nameZh: "利勒哈默尔", nameEn: "Lillehammer", country: "norway", tier: "notable", zone: "no-eastern",
    lon: 10.4662, lat: 61.1153,
    source: "利勒哈默尔 61.1153,10.4662：公开资料（无机场，铁路进入，1994 冬奥会举办地）",
  },
  {
    id: "kristiansand", nameZh: "克里斯蒂安桑", nameEn: "Kristiansand", country: "norway", tier: "notable", zone: "no-southern",
    lon: 7.9956, lat: 58.1467,
    airport: { iata: "KRS", nameZh: "谢维克机场", nameEn: "Kristiansand Airport, Kjevik", lon: 8.0853, lat: 58.2042 },
    source: "克里斯蒂安桑市中心 58.1467,7.9956；KRS 机场：公开资料",
  },
  {
    id: "stavanger", nameZh: "斯塔万格", nameEn: "Stavanger", country: "norway", tier: "major", zone: "no-western",
    lon: 5.7331, lat: 58.9700,
    airport: { iata: "SVG", nameZh: "索拉机场", nameEn: "Stavanger Airport, Sola", lon: 5.6378, lat: 58.8767 },
    source: "斯塔万格市中心 58.9700,5.7331；SVG 机场：公开资料",
  },
  {
    id: "bergen", nameZh: "卑尔根", nameEn: "Bergen", country: "norway", tier: "major", zone: "no-western",
    lon: 5.3221, lat: 60.3913,
    airport: { iata: "BGO", nameZh: "弗莱斯兰机场", nameEn: "Bergen Airport, Flesland", lon: 5.2181, lat: 60.2934 },
    source: "卑尔根市中心 60.3913,5.3221；BGO 机场：公开资料",
  },
  {
    id: "alesund", nameZh: "奥勒松", nameEn: "Ålesund", country: "norway", tier: "notable", zone: "no-western",
    lon: 6.1495, lat: 62.4722,
    airport: { iata: "AES", nameZh: "维格拉机场", nameEn: "Ålesund Airport, Vigra", lon: 6.1197, lat: 62.5625 },
    source: "奥勒松市中心 62.4722,6.1495；AES 机场：公开资料",
  },
  {
    id: "trondheim", nameZh: "特隆赫姆", nameEn: "Trondheim", country: "norway", tier: "major", zone: "no-central",
    lon: 10.3951, lat: 63.4305,
    airport: { iata: "TRD", nameZh: "韦讷斯机场", nameEn: "Trondheim Airport, Værnes", lon: 10.9240, lat: 63.4578 },
    source: "特隆赫姆市中心 63.4305,10.3951；TRD 机场：公开资料",
  },
  {
    id: "bodo", nameZh: "博德", nameEn: "Bodø", country: "norway", tier: "notable", zone: "no-northern",
    lon: 14.4049, lat: 67.2804,
    airport: { iata: "BOO", nameZh: "博德机场", nameEn: "Bodø Airport", lon: 14.3653, lat: 67.2692 },
    source: "博德市中心 67.2804,14.4049；BOO 机场：公开资料",
  },
  {
    id: "narvik", nameZh: "纳尔维克", nameEn: "Narvik", country: "norway", tier: "notable", zone: "no-northern",
    lon: 17.4272, lat: 68.4385,
    source: "纳尔维克 68.4385,17.4272：公开资料（无就近机场，Ofoten 铁路终点、深水不冻港）",
  },
  {
    id: "tromso", nameZh: "特罗姆瑟", nameEn: "Tromsø", country: "norway", tier: "major", zone: "no-arctic",
    lon: 18.9553, lat: 69.6492,
    airport: { iata: "TOS", nameZh: "朗内斯机场", nameEn: "Tromsø Airport, Langnes", lon: 18.9189, lat: 69.6833 },
    source: "特罗姆瑟市中心 69.6492,18.9553；TOS 机场：公开资料",
  },
  {
    id: "alta", nameZh: "阿尔塔", nameEn: "Alta", country: "norway", tier: "notable", zone: "no-arctic",
    lon: 23.2716, lat: 69.9689,
    airport: { iata: "ALF", nameZh: "阿尔塔机场", nameEn: "Alta Airport", lon: 23.3717, lat: 69.9761 },
    source: "阿尔塔 69.9689,23.2716；ALF 机场：公开资料",
  },

  // ── 法国 ──
  {
    id: "paris", nameZh: "巴黎", nameEn: "Paris", country: "france", tier: "capital", zone: "fr-paris-region",
    lon: 2.3522, lat: 48.8566,
    airport: { iata: "CDG", nameZh: "戴高乐机场", nameEn: "Charles de Gaulle Airport", lon: 2.5479, lat: 49.0097 },
    source: "巴黎市中心 48.8566,2.3522；CDG 机场：公开资料",
  },
  {
    id: "lille", nameZh: "里尔", nameEn: "Lille", country: "france", tier: "notable", zone: "fr-north",
    lon: 3.0573, lat: 50.6292,
    airport: { iata: "LIL", nameZh: "里尔机场", nameEn: "Lille Airport", lon: 3.0894, lat: 50.5619 },
    source: "里尔市中心 50.6292,3.0573；LIL 机场：公开资料",
  },
  {
    id: "strasbourg", nameZh: "斯特拉斯堡", nameEn: "Strasbourg", country: "france", tier: "notable", zone: "fr-alsace",
    lon: 7.7521, lat: 48.5734,
    airport: { iata: "SXB", nameZh: "斯特拉斯堡机场", nameEn: "Strasbourg Airport", lon: 7.6282, lat: 48.5383 },
    source: "斯特拉斯堡市中心 48.5734,7.7521；SXB 机场：公开资料",
  },
  {
    id: "lyon", nameZh: "里昂", nameEn: "Lyon", country: "france", tier: "major", zone: "fr-rhone-alpes",
    lon: 4.8357, lat: 45.7640,
    airport: { iata: "LYS", nameZh: "里昂圣埃克絮佩里机场", nameEn: "Lyon–Saint-Exupéry Airport", lon: 5.0811, lat: 45.7256 },
    source: "里昂市中心 45.7640,4.8357；LYS 机场：公开资料",
  },
  {
    id: "grenoble", nameZh: "格勒诺布尔", nameEn: "Grenoble", country: "france", tier: "notable", zone: "fr-rhone-alpes",
    lon: 5.7245, lat: 45.1885,
    airport: { iata: "GNB", nameZh: "格勒诺布尔-伊泽尔机场", nameEn: "Grenoble–Isère Airport", lon: 5.3294, lat: 45.3629 },
    source: "格勒诺布尔市中心 45.1885,5.7245；GNB 机场：公开资料（机场距市区约 40 公里）",
  },
  {
    id: "marseille", nameZh: "马赛", nameEn: "Marseille", country: "france", tier: "major", zone: "fr-provence",
    lon: 5.3698, lat: 43.2965,
    airport: { iata: "MRS", nameZh: "马赛-普罗旺斯机场", nameEn: "Marseille Provence Airport", lon: 5.2214, lat: 43.4393 },
    source: "马赛市中心 43.2965,5.3698；MRS 机场：公开资料",
  },
  {
    id: "nice", nameZh: "尼斯", nameEn: "Nice", country: "france", tier: "major", zone: "fr-provence",
    lon: 7.2620, lat: 43.7102,
    airport: { iata: "NCE", nameZh: "尼斯蓝色海岸机场", nameEn: "Nice Côte d'Azur Airport", lon: 7.2159, lat: 43.6584 },
    source: "尼斯市中心 43.7102,7.2620；NCE 机场：公开资料",
  },
  {
    id: "toulouse", nameZh: "图卢兹", nameEn: "Toulouse", country: "france", tier: "major", zone: "fr-southwest",
    lon: 1.4442, lat: 43.6047,
    airport: { iata: "TLS", nameZh: "图卢兹-布拉尼亚克机场", nameEn: "Toulouse–Blagnac Airport", lon: 1.3638, lat: 43.6293 },
    source: "图卢兹市中心 43.6047,1.4442；TLS 机场：公开资料",
  },
  {
    id: "bordeaux", nameZh: "波尔多", nameEn: "Bordeaux", country: "france", tier: "major", zone: "fr-southwest",
    lon: -0.5792, lat: 44.8378,
    airport: { iata: "BOD", nameZh: "波尔多-梅里尼亚克机场", nameEn: "Bordeaux–Mérignac Airport", lon: -0.7156, lat: 44.8283 },
    source: "波尔多市中心 44.8378,-0.5792；BOD 机场：公开资料",
  },
  {
    id: "nantes", nameZh: "南特", nameEn: "Nantes", country: "france", tier: "notable", zone: "fr-west",
    lon: -1.5536, lat: 47.2184,
    airport: { iata: "NTE", nameZh: "南特大西洋机场", nameEn: "Nantes Atlantique Airport", lon: -1.6108, lat: 47.1532 },
    source: "南特市中心 47.2184,-1.5536；NTE 机场：公开资料",
  },
  {
    id: "ajaccio", nameZh: "阿雅克肖", nameEn: "Ajaccio", country: "france", tier: "notable", zone: "fr-corsica",
    lon: 8.7386, lat: 41.9192,
    airport: { iata: "AJA", nameZh: "阿雅克肖机场", nameEn: "Ajaccio Airport", lon: 8.8029, lat: 41.9236 },
    source: "阿雅克肖市中心 41.9192,8.7386；AJA 机场：公开资料",
  },

  // ── 意大利 ──
  {
    id: "rome", nameZh: "罗马", nameEn: "Rome", country: "italy", tier: "capital", zone: "it-central",
    lon: 12.4964, lat: 41.9028,
    airport: { iata: "FCO", nameZh: "菲乌米奇诺机场", nameEn: "Rome Fiumicino Airport", lon: 12.2389, lat: 41.8003 },
    source: "罗马市中心 41.9028,12.4964；FCO 机场：公开资料",
  },
  {
    id: "florence", nameZh: "佛罗伦萨", nameEn: "Florence", country: "italy", tier: "major", zone: "it-central",
    lon: 11.2558, lat: 43.7696,
    airport: { iata: "FLR", nameZh: "佛罗伦萨机场", nameEn: "Florence Airport", lon: 11.2051, lat: 43.8100 },
    source: "佛罗伦萨市中心 43.7696,11.2558；FLR 机场：公开资料",
  },
  {
    id: "milan", nameZh: "米兰", nameEn: "Milan", country: "italy", tier: "major", zone: "it-northwest",
    lon: 9.1900, lat: 45.4642,
    airport: { iata: "LIN", nameZh: "米兰利纳特机场", nameEn: "Milan Linate Airport", lon: 9.2767, lat: 45.4451 },
    source: "米兰市中心 45.4642,9.1900；LIN 机场：公开资料",
  },
  {
    id: "turin", nameZh: "都灵", nameEn: "Turin", country: "italy", tier: "notable", zone: "it-northwest",
    lon: 7.6869, lat: 45.0703,
    airport: { iata: "TRN", nameZh: "都灵机场", nameEn: "Turin Airport", lon: 7.6497, lat: 45.2008 },
    source: "都灵市中心 45.0703,7.6869；TRN 机场：公开资料",
  },
  {
    id: "venice", nameZh: "威尼斯", nameEn: "Venice", country: "italy", tier: "major", zone: "it-northeast",
    lon: 12.3155, lat: 45.4408,
    airport: { iata: "VCE", nameZh: "威尼斯马可波罗机场", nameEn: "Venice Marco Polo Airport", lon: 12.3519, lat: 45.5053 },
    source: "威尼斯市中心 45.4408,12.3155；VCE 机场：公开资料",
  },
  {
    id: "bologna", nameZh: "博洛尼亚", nameEn: "Bologna", country: "italy", tier: "notable", zone: "it-northeast",
    lon: 11.3426, lat: 44.4949,
    airport: { iata: "BLQ", nameZh: "博洛尼亚机场", nameEn: "Bologna Airport", lon: 11.2887, lat: 44.5354 },
    source: "博洛尼亚市中心 44.4949,11.3426；BLQ 机场：公开资料",
  },
  {
    id: "naples", nameZh: "那不勒斯", nameEn: "Naples", country: "italy", tier: "major", zone: "it-south",
    lon: 14.2681, lat: 40.8518,
    airport: { iata: "NAP", nameZh: "那不勒斯机场", nameEn: "Naples Airport", lon: 14.2908, lat: 40.8860 },
    source: "那不勒斯市中心 40.8518,14.2681；NAP 机场：公开资料",
  },
  {
    id: "bari", nameZh: "巴里", nameEn: "Bari", country: "italy", tier: "notable", zone: "it-south",
    lon: 16.8719, lat: 41.1171,
    airport: { iata: "BRI", nameZh: "巴里机场", nameEn: "Bari Airport", lon: 16.7606, lat: 41.1389 },
    source: "巴里市中心 41.1171,16.8719；BRI 机场：公开资料",
  },
  {
    id: "palermo", nameZh: "巴勒莫", nameEn: "Palermo", country: "italy", tier: "notable", zone: "it-sicily",
    lon: 13.3615, lat: 38.1157,
    airport: { iata: "PMO", nameZh: "巴勒莫机场", nameEn: "Palermo Airport", lon: 13.0910, lat: 38.1760 },
    source: "巴勒莫市中心 38.1157,13.3615；PMO 机场：公开资料",
  },
  {
    id: "catania", nameZh: "卡塔尼亚", nameEn: "Catania", country: "italy", tier: "notable", zone: "it-sicily",
    lon: 15.0830, lat: 37.5079,
    airport: { iata: "CTA", nameZh: "卡塔尼亚机场", nameEn: "Catania Airport", lon: 15.0664, lat: 37.4668 },
    source: "卡塔尼亚市中心 37.5079,15.0830；CTA 机场：公开资料",
  },
  {
    id: "cagliari", nameZh: "卡利亚里", nameEn: "Cagliari", country: "italy", tier: "notable", zone: "it-sardinia",
    lon: 9.1217, lat: 39.2238,
    airport: { iata: "CAG", nameZh: "卡利亚里机场", nameEn: "Cagliari Airport", lon: 9.0543, lat: 39.2515 },
    source: "卡利亚里市中心 39.2238,9.1217；CAG 机场：公开资料",
  },

  // ── 西班牙 ────────────────────────────────────────────
  {
    id: "madrid", nameZh: "马德里", nameEn: "Madrid", country: "spain", tier: "capital", zone: "es-central",
    lon: -3.7038, lat: 40.4168,
    airport: { iata: "MAD", nameZh: "马德里巴拉哈斯机场", nameEn: "Madrid–Barajas", lon: -3.561, lat: 40.472 },
    source: "马德里市中心 40.4168,-3.7038；MAD 机场：公开资料",
  },
  {
    id: "barcelona", nameZh: "巴塞罗那", nameEn: "Barcelona", country: "spain", tier: "major", zone: "es-catalonia",
    lon: 2.1686, lat: 41.3874,
    airport: { iata: "BCN", nameZh: "巴塞罗那机场（埃尔普拉特）", nameEn: "Barcelona–El Prat", lon: 2.078, lat: 41.297 },
    source: "巴塞罗那市中心 41.3874,2.1686；BCN 机场：公开资料",
  },
  {
    id: "seville", nameZh: "塞维利亚", nameEn: "Seville", country: "spain", tier: "major", zone: "es-andalusia",
    lon: -5.9845, lat: 37.3891,
    airport: { iata: "SVQ", nameZh: "塞维利亚机场", nameEn: "Seville Airport", lon: -5.893, lat: 37.418 },
    source: "塞维利亚市中心 37.3891,-5.9845；SVQ 机场：公开资料",
  },
  {
    id: "valencia", nameZh: "瓦伦西亚", nameEn: "Valencia", country: "spain", tier: "major", zone: "es-east",
    lon: -0.3763, lat: 39.4699,
    airport: { iata: "VLC", nameZh: "瓦伦西亚机场", nameEn: "Valencia Airport", lon: -0.481, lat: 39.489 },
    source: "瓦伦西亚市中心 39.4699,-0.3763；VLC 机场：公开资料",
  },
  {
    id: "granada", nameZh: "格拉纳达", nameEn: "Granada", country: "spain", tier: "notable", zone: "es-andalusia",
    lon: -3.5986, lat: 37.1773,
    airport: { iata: "GRX", nameZh: "格拉纳达机场", nameEn: "Granada Airport", lon: -3.777, lat: 37.189 },
    source: "格拉纳达市中心 37.1773,-3.5986；GRX 机场：公开资料",
  },
  {
    id: "malaga", nameZh: "马拉加", nameEn: "Málaga", country: "spain", tier: "notable", zone: "es-andalusia",
    lon: -4.4214, lat: 36.7213,
    airport: { iata: "AGP", nameZh: "马拉加机场", nameEn: "Málaga Airport", lon: -4.499, lat: 36.675 },
    source: "马拉加市中心 36.7213,-4.4214；AGP 机场：公开资料",
  },
  {
    id: "bilbao", nameZh: "毕尔巴鄂", nameEn: "Bilbao", country: "spain", tier: "notable", zone: "es-north",
    lon: -2.9350, lat: 43.2630,
    airport: { iata: "BIO", nameZh: "毕尔巴鄂机场", nameEn: "Bilbao Airport", lon: -2.911, lat: 43.301 },
    source: "毕尔巴鄂市中心 43.2630,-2.9350；BIO 机场：公开资料",
  },
  {
    id: "santiago-de-compostela", nameZh: "圣地亚哥-德孔波斯特拉", nameEn: "Santiago de Compostela", country: "spain", tier: "notable", zone: "es-northwest",
    lon: -8.5448, lat: 42.8782,
    airport: { iata: "SCQ", nameZh: "圣地亚哥机场", nameEn: "Santiago Airport", lon: -8.415, lat: 42.896 },
    source: "圣地亚哥-德孔波斯特拉市中心 42.8782,-8.5448；SCQ 机场：公开资料",
  },
  {
    id: "zaragoza", nameZh: "萨拉戈萨", nameEn: "Zaragoza", country: "spain", tier: "notable", zone: "es-northeast",
    lon: -0.8891, lat: 41.6488,
    airport: { iata: "ZAZ", nameZh: "萨拉戈萨机场", nameEn: "Zaragoza Airport", lon: -1.041, lat: 41.666 },
    source: "萨拉戈萨市中心 41.6488,-0.8891；ZAZ 机场：公开资料",
  },
  {
    id: "palma", nameZh: "帕尔马", nameEn: "Palma de Mallorca", country: "spain", tier: "notable", zone: "es-balearic",
    lon: 2.6502, lat: 39.5696,
    airport: { iata: "PMI", nameZh: "帕尔马机场（松波恩）", nameEn: "Palma de Mallorca Airport", lon: 2.739, lat: 39.551 },
    source: "帕尔马市中心 39.5696,2.6502；PMI 机场：公开资料",
  },
  {
    id: "santa-cruz-de-tenerife", nameZh: "圣克鲁斯-德特内里费", nameEn: "Santa Cruz de Tenerife", country: "spain", tier: "notable", zone: "es-canary",
    lon: -16.2518, lat: 28.4636,
    airport: { iata: "TFN", nameZh: "特内里费北机场", nameEn: "Tenerife North Airport", lon: -16.341, lat: 28.483 },
    source: "圣克鲁斯-德特内里费市中心 28.4636,-16.2518；TFN 机场：公开资料",
  },

  // ── 德国 ────────────────────────────────────────────
  {
    id: "berlin", nameZh: "柏林", nameEn: "Berlin", country: "germany", tier: "capital", zone: "de-berlin",
    lon: 13.4050, lat: 52.5200,
    airport: { iata: "BER", nameZh: "柏林勃兰登堡机场", nameEn: "Berlin Brandenburg", lon: 13.5033, lat: 52.3667 },
    source: "柏林市中心 52.5200,13.4050；BER 机场：公开资料",
  },
  {
    id: "munich", nameZh: "慕尼黑", nameEn: "Munich", country: "germany", tier: "major", zone: "de-bavaria",
    lon: 11.5820, lat: 48.1351,
    airport: { iata: "MUC", nameZh: "慕尼黑机场", nameEn: "Munich Airport", lon: 11.7861, lat: 48.3538 },
    source: "慕尼黑市中心 48.1351,11.5820；MUC 机场：公开资料",
  },
  {
    id: "hamburg", nameZh: "汉堡", nameEn: "Hamburg", country: "germany", tier: "major", zone: "de-north",
    lon: 9.9937, lat: 53.5511,
    airport: { iata: "HAM", nameZh: "汉堡机场", nameEn: "Hamburg Airport", lon: 9.9882, lat: 53.6304 },
    source: "汉堡市中心 53.5511,9.9937；HAM 机场：公开资料",
  },
  {
    id: "cologne", nameZh: "科隆", nameEn: "Cologne", country: "germany", tier: "major", zone: "de-west",
    lon: 6.9603, lat: 50.9375,
    airport: { iata: "CGN", nameZh: "科隆-波恩机场", nameEn: "Cologne Bonn Airport", lon: 7.1427, lat: 50.8659 },
    source: "科隆市中心 50.9375,6.9603；CGN 机场：公开资料",
  },
  {
    id: "frankfurt", nameZh: "法兰克福", nameEn: "Frankfurt", country: "germany", tier: "major", zone: "de-central",
    lon: 8.6821, lat: 50.1109,
    airport: { iata: "FRA", nameZh: "法兰克福机场", nameEn: "Frankfurt Airport", lon: 8.5622, lat: 50.0379 },
    source: "法兰克福市中心 50.1109,8.6821；FRA 机场：公开资料",
  },
  {
    id: "dresden", nameZh: "德累斯顿", nameEn: "Dresden", country: "germany", tier: "notable", zone: "de-east",
    lon: 13.7373, lat: 51.0504,
    airport: { iata: "DRS", nameZh: "德累斯顿机场", nameEn: "Dresden Airport", lon: 13.7672, lat: 51.1328 },
    source: "德累斯顿市中心 51.0504,13.7373；DRS 机场：公开资料",
  },
  {
    id: "nuremberg", nameZh: "纽伦堡", nameEn: "Nuremberg", country: "germany", tier: "notable", zone: "de-bavaria",
    lon: 11.0767, lat: 49.4521,
    airport: { iata: "NUE", nameZh: "纽伦堡机场", nameEn: "Nuremberg Airport", lon: 11.0669, lat: 49.4987 },
    source: "纽伦堡市中心 49.4521,11.0767；NUE 机场：公开资料",
  },
  {
    id: "freiburg", nameZh: "弗赖堡", nameEn: "Freiburg", country: "germany", tier: "notable", zone: "de-southwest",
    lon: 7.8421, lat: 47.9990,
    airport: { iata: "EAP", nameZh: "巴塞尔-米卢斯-弗赖堡欧洲机场", nameEn: "EuroAirport Basel-Mulhouse-Freiburg", lon: 7.5299, lat: 47.5896 },
    source: "弗赖堡市中心 47.9990,7.8421；弗赖堡本地无商业机场，最近的欧洲机场（巴塞尔-米卢斯-弗赖堡）距市区约70km：公开资料",
  },
  {
    id: "heidelberg", nameZh: "海德堡", nameEn: "Heidelberg", country: "germany", tier: "notable", zone: "de-southwest",
    lon: 8.6724, lat: 49.3988,
    airport: { iata: "FRA", nameZh: "法兰克福机场", nameEn: "Frankfurt Airport", lon: 8.5622, lat: 50.0379 },
    source: "海德堡市中心 49.3988,8.6724；海德堡本地无商业机场，多数旅客经法兰克福机场（距市区约85km）转乘：公开资料",
  },
  {
    id: "trier", nameZh: "特里尔", nameEn: "Trier", country: "germany", tier: "notable", zone: "de-west",
    lon: 6.6428, lat: 49.7596,
    airport: { iata: "HHN", nameZh: "法兰克福哈恩机场", nameEn: "Frankfurt-Hahn Airport", lon: 7.2639, lat: 49.9487 },
    source: "特里尔市中心 49.7596,6.6428；最近商业机场为法兰克福哈恩机场（距市区约50km）：公开资料",
  },
  {
    id: "stralsund", nameZh: "施特拉尔松", nameEn: "Stralsund", country: "germany", tier: "notable", zone: "de-northeast",
    lon: 13.0930, lat: 54.3153,
    airport: { iata: "RLG", nameZh: "罗斯托克-拉格机场", nameEn: "Rostock-Laage Airport", lon: 12.2783, lat: 53.9182 },
    source: "施特拉尔松市中心 54.3153,13.0930；最近商业机场为罗斯托克-拉格机场（距市区约70km）：公开资料",
  },
  // ===== 希腊 =====
  {
    id: "athens", nameZh: "雅典", nameEn: "Athens", country: "greece", tier: "capital", zone: "gr-attica",
    lon: 23.7275, lat: 37.9838,
    airport: { iata: "ATH", nameZh: "雅典埃莱夫塞里奥斯·韦尼泽洛斯国际机场", nameEn: "Athens Eleftherios Venizelos International Airport", lon: 23.9445, lat: 37.9364 },
    source: "雅典市中心 37.9838,23.7275；ATH 机场：公开资料",
  },
  {
    id: "thessaloniki", nameZh: "塞萨洛尼基", nameEn: "Thessaloniki", country: "greece", tier: "major", zone: "gr-macedonia",
    lon: 22.9444, lat: 40.6401,
    airport: { iata: "SKG", nameZh: "塞萨洛尼基马其顿机场", nameEn: "Thessaloniki Macedonia Airport", lon: 22.9709, lat: 40.5197 },
    source: "塞萨洛尼基市中心 40.6401,22.9444；SKG 机场：公开资料",
  },
  {
    id: "heraklion", nameZh: "伊拉克利翁", nameEn: "Heraklion", country: "greece", tier: "major", zone: "gr-crete",
    lon: 25.1442, lat: 35.3387,
    airport: { iata: "HER", nameZh: "伊拉克利翁尼科斯·卡赞扎基斯机场", nameEn: "Heraklion Nikos Kazantzakis Airport", lon: 25.1803, lat: 35.3397 },
    source: "伊拉克利翁市中心 35.3387,25.1442；HER 机场：公开资料",
  },
  {
    id: "chania", nameZh: "哈尼亚", nameEn: "Chania", country: "greece", tier: "notable", zone: "gr-crete",
    lon: 24.0180, lat: 35.5138,
    airport: { iata: "CHQ", nameZh: "哈尼亚国际机场", nameEn: "Chania International Airport", lon: 24.1497, lat: 35.5317 },
    source: "哈尼亚市中心 35.5138,24.0180；CHQ 机场：公开资料",
  },
  {
    id: "rhodes-town", nameZh: "罗德城", nameEn: "Rhodes Town", country: "greece", tier: "notable", zone: "gr-aegean",
    lon: 28.2276, lat: 36.4341,
    airport: { iata: "RHO", nameZh: "罗德国际机场（迪亚戈拉斯）", nameEn: "Rhodes International Airport (Diagoras)", lon: 28.0862, lat: 36.4054 },
    source: "罗德城市中心 36.4341,28.2276；RHO 机场：公开资料",
  },
  {
    id: "santorini", nameZh: "圣托里尼（费拉）", nameEn: "Santorini (Fira)", country: "greece", tier: "notable", zone: "gr-aegean",
    lon: 25.4315, lat: 36.4166,
    airport: { iata: "JTR", nameZh: "圣托里尼（锡拉）国家机场", nameEn: "Santorini (Thira) National Airport", lon: 25.4793, lat: 36.3992 },
    source: "费拉市中心 36.4166,25.4315；JTR 机场：公开资料",
  },
  {
    id: "corfu-town", nameZh: "科孚城", nameEn: "Corfu Town", country: "greece", tier: "notable", zone: "gr-ionian",
    lon: 19.9203, lat: 39.6243,
    airport: { iata: "CFU", nameZh: "科孚约安尼斯·卡波季斯特里亚斯国际机场", nameEn: "Corfu Ioannis Kapodistrias International Airport", lon: 19.9117, lat: 39.6019 },
    source: "科孚城市中心 39.6243,19.9203；CFU 机场：公开资料",
  },
  {
    id: "nafplio", nameZh: "纳夫普利翁", nameEn: "Nafplio", country: "greece", tier: "notable", zone: "gr-peloponnese",
    lon: 22.8075, lat: 37.5673,
    airport: { iata: "ATH", nameZh: "雅典埃莱夫塞里奥斯·韦尼泽洛斯国际机场", nameEn: "Athens Eleftherios Venizelos International Airport", lon: 23.9445, lat: 37.9364 },
    source: "纳夫普利翁市中心 37.5673,22.8075；本地无商业机场，最近机场为雅典机场（公路距离约140km）：公开资料",
  },
  {
    id: "ioannina", nameZh: "约阿尼纳", nameEn: "Ioannina", country: "greece", tier: "notable", zone: "gr-epirus",
    lon: 20.8537, lat: 39.6650,
    airport: { iata: "IOA", nameZh: "约阿尼纳国家机场", nameEn: "Ioannina National Airport", lon: 20.8225, lat: 39.6964 },
    source: "约阿尼纳市中心 39.6650,20.8537；IOA 机场：公开资料",
  },
  {
    id: "kalamata", nameZh: "卡拉马塔", nameEn: "Kalamata", country: "greece", tier: "notable", zone: "gr-peloponnese",
    lon: 22.1109, lat: 37.0389,
    airport: { iata: "KLX", nameZh: "卡拉马塔国际机场", nameEn: "Kalamata International Airport", lon: 22.0257, lat: 37.0683 },
    source: "卡拉马塔市中心 37.0389,22.1109；KLX 机场：公开资料",
  },
  {
    id: "volos", nameZh: "沃洛斯", nameEn: "Volos", country: "greece", tier: "notable", zone: "gr-thessaly",
    lon: 22.9444, lat: 39.3622,
    airport: { iata: "VOL", nameZh: "内阿安希阿洛斯国家机场", nameEn: "Nea Anchialos National Airport", lon: 22.7943, lat: 39.2197 },
    source: "沃洛斯市中心 39.3622,22.9444；VOL 机场：公开资料",
  },

  // ── 葡萄牙 ──
  {
    id: "lisbon", nameZh: "里斯本", nameEn: "Lisbon", country: "portugal", tier: "capital", zone: "pt-lisbon-region",
    lon: -9.1393, lat: 38.7223,
    airport: { iata: "LIS", nameZh: "里斯本机场", nameEn: "Lisbon Airport", lon: -9.1359, lat: 38.7813 },
    source: "里斯本市中心 38.7223,-9.1393；LIS 机场：公开资料",
  },
  {
    id: "sintra", nameZh: "辛特拉", nameEn: "Sintra", country: "portugal", tier: "notable", zone: "pt-lisbon-region",
    lon: -9.3899, lat: 38.7975,
    source: "辛特拉 38.7975,-9.3899：公开资料（无机场，就近用里斯本；山中王室夏宫小镇）",
  },
  {
    id: "porto", nameZh: "波尔图", nameEn: "Porto", country: "portugal", tier: "major", zone: "pt-north",
    lon: -8.6291, lat: 41.1579,
    airport: { iata: "OPO", nameZh: "波尔图机场", nameEn: "Porto Airport", lon: -8.6814, lat: 41.2481 },
    source: "波尔图市中心 41.1579,-8.6291；OPO 机场：公开资料",
  },
  {
    id: "braga", nameZh: "布拉加", nameEn: "Braga", country: "portugal", tier: "notable", zone: "pt-north",
    lon: -8.4265, lat: 41.5454,
    source: "布拉加 41.5454,-8.4265：公开资料（无机场，就近用波尔图；葡萄牙宗教中心）",
  },
  {
    id: "guimaraes", nameZh: "吉马良斯", nameEn: "Guimarães", country: "portugal", tier: "notable", zone: "pt-north",
    lon: -8.2918, lat: 41.4425,
    source: "吉马良斯 41.4425,-8.2918：公开资料（无机场，就近用波尔图；葡萄牙王国发祥地）",
  },
  {
    id: "aveiro", nameZh: "阿威罗", nameEn: "Aveiro", country: "portugal", tier: "notable", zone: "pt-north",
    lon: -8.6538, lat: 40.6405,
    source: "阿威罗 40.6405,-8.6538：公开资料（无定期商业航班，就近用波尔图；运河小城）",
  },
  {
    id: "coimbra", nameZh: "科英布拉", nameEn: "Coimbra", country: "portugal", tier: "notable", zone: "pt-central",
    lon: -8.4103, lat: 40.2033,
    source: "科英布拉 40.2033,-8.4103：公开资料（无定期商业航班，就近用里斯本或波尔图；1290年建校，葡萄牙最古老大学所在地）",
  },
  {
    id: "evora", nameZh: "埃武拉", nameEn: "Évora", country: "portugal", tier: "notable", zone: "pt-alentejo",
    lon: -7.9096, lat: 38.5714,
    source: "埃武拉 38.5714,-7.9096：公开资料（无定期商业航班，就近用里斯本；阿连特茹历史中心）",
  },
  {
    id: "faro", nameZh: "法鲁", nameEn: "Faro", country: "portugal", tier: "major", zone: "pt-algarve",
    lon: -7.9304, lat: 37.0194,
    airport: { iata: "FAO", nameZh: "法鲁机场", nameEn: "Faro Airport", lon: -7.9659, lat: 37.0144 },
    source: "法鲁市中心 37.0194,-7.9304；FAO 机场：公开资料",
  },
  {
    id: "funchal", nameZh: "丰沙尔", nameEn: "Funchal", country: "portugal", tier: "notable", zone: "pt-madeira",
    lon: -16.9241, lat: 32.6669,
    airport: { iata: "FNC", nameZh: "马德拉机场", nameEn: "Madeira Airport", lon: -16.7745, lat: 32.6979 },
    source: "丰沙尔市中心 32.6669,-16.9241；FNC 机场：公开资料",
  },
  {
    id: "ponta-delgada", nameZh: "蓬塔德尔加达", nameEn: "Ponta Delgada", country: "portugal", tier: "notable", zone: "pt-azores",
    lon: -25.6756, lat: 37.7412,
    airport: { iata: "PDL", nameZh: "蓬塔德尔加达机场", nameEn: "Ponta Delgada Airport", lon: -25.6979, lat: 37.7412 },
    source: "蓬塔德尔加达市中心 37.7412,-25.6756；PDL 机场：公开资料",
  },
  // ── 荷兰 ──
  {
    id: "amsterdam", nameZh: "阿姆斯特丹", nameEn: "Amsterdam", country: "netherlands", tier: "capital", zone: "nl-noord-holland",
    lon: 4.9041, lat: 52.3676,
    airport: { iata: "AMS", nameZh: "史基浦机场", nameEn: "Amsterdam Schiphol Airport", lon: 4.7683, lat: 52.3105 },
    source: "阿姆斯特丹市中心 52.3676,4.9041；AMS 机场：公开资料",
  },
  {
    id: "haarlem", nameZh: "哈勒姆", nameEn: "Haarlem", country: "netherlands", tier: "notable", zone: "nl-noord-holland",
    lon: 4.6462, lat: 52.3874,
    source: "哈勒姆 52.3874,4.6462：公开资料（无机场，就近用史基浦；北荷兰省首府，靠近荷兰沙丘海岸）",
  },
  {
    id: "texel", nameZh: "特塞尔岛", nameEn: "Texel", country: "netherlands", tier: "notable", zone: "nl-noord-holland",
    lon: 4.8267, lat: 53.0500,
    source: "特塞尔岛（登堡）53.0500,4.8267：公开资料（小型机场无定期商业航班，就近用史基浦+渡轮；西弗里西亚群岛最大岛）",
  },
  {
    id: "rotterdam", nameZh: "鹿特丹", nameEn: "Rotterdam", country: "netherlands", tier: "major", zone: "nl-zuid-holland",
    lon: 4.4777, lat: 51.9244,
    airport: { iata: "RTM", nameZh: "鹿特丹海牙机场", nameEn: "Rotterdam The Hague Airport", lon: 4.4372, lat: 51.9569 },
    source: "鹿特丹市中心 51.9244,4.4777；RTM 机场：公开资料",
  },
  {
    id: "the-hague", nameZh: "海牙", nameEn: "The Hague", country: "netherlands", tier: "notable", zone: "nl-zuid-holland",
    lon: 4.3007, lat: 52.0705,
    source: "海牙 52.0705,4.3007：公开资料（无自有机场，就近用鹿特丹海牙机场；荷兰政府所在地、国际法院所在地）",
  },
  {
    id: "delft", nameZh: "代尔夫特", nameEn: "Delft", country: "netherlands", tier: "notable", zone: "nl-zuid-holland",
    lon: 4.3571, lat: 52.0116,
    source: "代尔夫特 52.0116,4.3571：公开资料（无机场，就近用鹿特丹海牙机场；代尔夫特蓝陶与理工大学所在地）",
  },
  {
    id: "leiden", nameZh: "莱顿", nameEn: "Leiden", country: "netherlands", tier: "notable", zone: "nl-zuid-holland",
    lon: 4.4970, lat: 52.1601,
    source: "莱顿 52.1601,4.4970：公开资料（无机场，就近用史基浦；荷兰最古老大学所在地）",
  },
  {
    id: "utrecht", nameZh: "乌得勒支", nameEn: "Utrecht", country: "netherlands", tier: "major", zone: "nl-utrecht",
    lon: 5.1214, lat: 52.0907,
    source: "乌得勒支 52.0907,5.1214：公开资料（无机场，就近用史基浦；荷兰第四大城市、铁路枢纽）",
  },
  {
    id: "maastricht", nameZh: "马斯特里赫特", nameEn: "Maastricht", country: "netherlands", tier: "notable", zone: "nl-limburg",
    lon: 5.6910, lat: 50.8514,
    airport: { iata: "MST", nameZh: "马斯特里赫特-亚琛机场", nameEn: "Maastricht Aachen Airport", lon: 5.7703, lat: 50.9114 },
    source: "马斯特里赫特市中心 50.8514,5.6910；MST 机场：公开资料",
  },
  {
    id: "groningen", nameZh: "格罗宁根", nameEn: "Groningen", country: "netherlands", tier: "notable", zone: "nl-groningen-friesland",
    lon: 6.5665, lat: 53.2194,
    airport: { iata: "GRQ", nameZh: "埃尔德机场", nameEn: "Groningen Airport Eelde", lon: 6.5794, lat: 53.1197 },
    source: "格罗宁根市中心 53.2194,6.5665；GRQ 机场：公开资料",
  },
  {
    id: "zwolle", nameZh: "兹沃勒", nameEn: "Zwolle", country: "netherlands", tier: "notable", zone: "nl-overijssel",
    lon: 6.0958, lat: 52.5168,
    source: "兹沃勒 52.5168,6.0958：公开资料（无机场，就近用史基浦；艾瑟尔河畔汉萨古城，羊角村门户）",
  },
  // ===== 奥地利 =====
  {
    id: "vienna", nameZh: "维也纳", nameEn: "Vienna", country: "austria", tier: "capital", zone: "at-wien",
    lon: 16.3738, lat: 48.2082,
    airport: { iata: "VIE", nameZh: "维也纳国际机场", nameEn: "Vienna International Airport", lon: 16.5697, lat: 48.1103 },
    source: "维也纳市中心 48.2082,16.3738；VIE 机场：公开资料",
  },
  {
    id: "salzburg", nameZh: "萨尔茨堡", nameEn: "Salzburg", country: "austria", tier: "major", zone: "at-salzburg",
    lon: 13.0550, lat: 47.8095,
    airport: { iata: "SZG", nameZh: "萨尔茨堡莫扎特机场", nameEn: "Salzburg Airport W. A. Mozart", lon: 13.0043, lat: 47.7933 },
    source: "萨尔茨堡市中心 47.8095,13.0550；SZG 机场：公开资料",
  },
  {
    id: "innsbruck", nameZh: "因斯布鲁克", nameEn: "Innsbruck", country: "austria", tier: "major", zone: "at-tirol",
    lon: 11.4041, lat: 47.2692,
    airport: { iata: "INN", nameZh: "因斯布鲁克机场", nameEn: "Innsbruck Airport", lon: 11.3440, lat: 47.2602 },
    source: "因斯布鲁克市中心 47.2692,11.4041；INN 机场：公开资料",
  },
  {
    id: "graz", nameZh: "格拉茨", nameEn: "Graz", country: "austria", tier: "notable", zone: "at-steiermark",
    lon: 15.4395, lat: 47.0707,
    airport: { iata: "GRZ", nameZh: "格拉茨机场", nameEn: "Graz Airport", lon: 15.4396, lat: 46.9911 },
    source: "格拉茨市中心 47.0707,15.4395；GRZ 机场：公开资料",
  },
  {
    id: "linz", nameZh: "林茨", nameEn: "Linz", country: "austria", tier: "notable", zone: "at-oberosterreich",
    lon: 14.2858, lat: 48.3069,
    airport: { iata: "LNZ", nameZh: "林茨蓝色多瑙河机场", nameEn: "Linz Blue Danube Airport", lon: 14.1875, lat: 48.2332 },
    source: "林茨市中心 48.3069,14.2858；LNZ 机场：公开资料",
  },
  {
    id: "klagenfurt", nameZh: "克拉根福", nameEn: "Klagenfurt", country: "austria", tier: "notable", zone: "at-karnten",
    lon: 14.3050, lat: 46.6247,
    airport: { iata: "KLU", nameZh: "克拉根福机场", nameEn: "Klagenfurt Airport", lon: 14.3377, lat: 46.6425 },
    source: "克拉根福市中心 46.6247,14.3050；KLU 机场：公开资料",
  },
  {
    id: "villach", nameZh: "菲拉赫", nameEn: "Villach", country: "austria", tier: "notable", zone: "at-karnten",
    lon: 13.8558, lat: 46.6111,
    airport: { iata: "KLU", nameZh: "克拉根福机场", nameEn: "Klagenfurt Airport", lon: 14.3377, lat: 46.6425 },
    source: "菲拉赫市中心 46.6111,13.8558；本地无商业机场，最近机场为克拉根福机场（距市区约40km）：公开资料",
  },
  {
    id: "hallstatt", nameZh: "哈尔施塔特", nameEn: "Hallstatt", country: "austria", tier: "notable", zone: "at-oberosterreich",
    lon: 13.6486, lat: 47.5622,
    airport: { iata: "SZG", nameZh: "萨尔茨堡莫扎特机场", nameEn: "Salzburg Airport W. A. Mozart", lon: 13.0043, lat: 47.7933 },
    source: "哈尔施塔特村中心 47.5622,13.6486；本地无商业机场，最近机场为萨尔茨堡机场（距市区约70km）：公开资料",
  },
  {
    id: "kitzbuhel-city", nameZh: "基茨比厄尔", nameEn: "Kitzbühel", country: "austria", tier: "notable", zone: "at-tirol",
    lon: 12.3925, lat: 47.4467,
    airport: { iata: "INN", nameZh: "因斯布鲁克机场", nameEn: "Innsbruck Airport", lon: 11.3440, lat: 47.2602 },
    source: "基茨比厄尔市中心 47.4467,12.3925；本地无商业机场，最近机场为因斯布鲁克机场（距市区约80km）：公开资料",
  },
  {
    id: "bregenz", nameZh: "布雷根茨", nameEn: "Bregenz", country: "austria", tier: "notable", zone: "at-vorarlberg",
    lon: 9.7471, lat: 47.5031,
    airport: { iata: "FDH", nameZh: "腓特烈港机场", nameEn: "Friedrichshafen Airport", lon: 9.5115, lat: 47.6713 },
    source: "布雷根茨市中心 47.5031,9.7471；本地无商业机场，最近机场为德国腓特烈港机场（距市区约25km）：公开资料",
  },
  {
    id: "zell-am-see", nameZh: "采尔湖畔采尔", nameEn: "Zell am See", country: "austria", tier: "notable", zone: "at-salzburg",
    lon: 12.7942, lat: 47.3239,
    airport: { iata: "SZG", nameZh: "萨尔茨堡莫扎特机场", nameEn: "Salzburg Airport W. A. Mozart", lon: 13.0043, lat: 47.7933 },
    source: "采尔湖畔采尔市中心 47.3239,12.7942；本地无商业机场，最近机场为萨尔茨堡机场（距市区约80km）：公开资料",
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
  norway: "europe",
  france: "europe",
  italy: "europe",
  spain: "europe",
  germany: "europe",
  greece: "europe",
  portugal: "europe",
  netherlands: "europe",
  austria: "europe",
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
