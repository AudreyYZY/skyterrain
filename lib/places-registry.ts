/**
 * Places Registry — 旅游模式的位置单一真实源（城市 / 机场 / 国家概览）。
 * 与 lib/regions.ts 的 regionId 对齐（country 字段）。坐标来源写入 source 便于审计。
 */

import { ALL_CITIES } from "@/lib/content/_generated/cities";

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
   * 粗粒度地理大区（跨省/州），仅用于目录里 admin1 分组标题旁的彩色圆点提示，
   * 不再单独作为可点击的目录层级——admin1 才是主要分组。
   * 中国：华北 / 东北 / 华东 / 华中 / 华南 / 西南 / 西北 / 港澳台。
   * 其它国家按各自方案（大区 / 岛群）。缺省不显示圆点。
   */
  zone?: string;
  /**
   * 该国官方一级行政区（中国=省/自治区/直辖市/特别行政区，其它国家=州/省/大区，
   * 跟随该国官方划分）。目录按此分组、作为可展开的主要层级。缺省时目录退回按 zone 分组
   * （国家尚未补齐 admin1 时的过渡态，不应长期缺省）。
   */
  admin1Zh?: string;
  admin1En?: string;
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
  "us-alaska-hawaii": { zh: "阿拉斯加与夏威夷", en: "Alaska & Hawaii", order: 46 },
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
  "nl-gelderland": { zh: "海尔德兰省", en: "Gelderland", order: 166 },
  "nl-noord-brabant": { zh: "北布拉班特省", en: "North Brabant", order: 167 },
  "nl-zeeland": { zh: "泽兰省", en: "Zeeland", order: 168 },
  // 奥地利（维也纳→蒂罗尔→萨尔茨堡→上奥地利→克恩顿→施泰尔马克→福拉尔贝格）
  "at-wien": { zh: "维也纳", en: "Vienna", order: 170 },
  "at-tirol": { zh: "蒂罗尔", en: "Tyrol", order: 171 },
  "at-salzburg": { zh: "萨尔茨堡州", en: "Salzburg (State)", order: 172 },
  "at-oberosterreich": { zh: "上奥地利", en: "Upper Austria", order: 173 },
  "at-karnten": { zh: "克恩顿", en: "Carinthia", order: 174 },
  "at-steiermark": { zh: "施泰尔马克", en: "Styria", order: 175 },
  "at-vorarlberg": { zh: "福拉尔贝格", en: "Vorarlberg", order: 176 },
  "at-niederosterreich": { zh: "下奥地利", en: "Lower Austria", order: 177 },
  "at-burgenland": { zh: "布尔根兰", en: "Burgenland", order: 178 },
  // 比利时（order 从 200 开始，与并行分支预留的号段错开）
  "be-brussels": { zh: "布鲁塞尔首都区", en: "Brussels-Capital", order: 200 },
  "be-antwerp": { zh: "安特卫普省", en: "Antwerp Province", order: 201 },
  "be-west-flanders": { zh: "西弗兰德省", en: "West Flanders", order: 202 },
  "be-east-flanders": { zh: "东弗兰德省", en: "East Flanders", order: 203 },
  "be-flemish-brabant": { zh: "佛兰芒布拉班特省", en: "Flemish Brabant", order: 204 },
  "be-liege": { zh: "列日省", en: "Liège Province", order: 205 },
  "be-namur": { zh: "那慕尔省", en: "Namur Province", order: 206 },
  "be-hainaut": { zh: "埃诺省", en: "Hainaut", order: 207 },
  // 爱尔兰（伦斯特→芒斯特→康诺特→阿尔斯特）
  "ie-leinster": { zh: "伦斯特省", en: "Leinster", order: 210 },
  "ie-munster": { zh: "芒斯特省", en: "Munster", order: 211 },
  "ie-connacht": { zh: "康诺特省", en: "Connacht", order: 212 },
  "ie-ulster": { zh: "阿尔斯特省（爱尔兰境内部分）", en: "Ulster (Republic of Ireland)", order: 213 },
  // 丹麦（首都大区→西兰大区→南丹麦大区→中日德兰大区→北日德兰大区→博恩霍尔姆）
  "dk-hovedstaden": { zh: "首都大区", en: "Capital Region", order: 220 },
  "dk-sjaelland": { zh: "西兰大区", en: "Region Zealand", order: 221 },
  "dk-syddanmark": { zh: "南丹麦大区", en: "Region of Southern Denmark", order: 222 },
  "dk-midtjylland": { zh: "中日德兰大区", en: "Central Denmark Region", order: 223 },
  "dk-nordjylland": { zh: "北日德兰大区", en: "North Denmark Region", order: 224 },
  "dk-bornholm": { zh: "博恩霍尔姆", en: "Bornholm", order: 225 },
  // 瑞典（斯韦阿兰—耶塔兰—诺尔兰，瑞典传统三大地区）
  "se-svealand": { zh: "斯韦阿兰", en: "Svealand", order: 230 },
  "se-gotaland": { zh: "耶塔兰", en: "Götaland", order: 231 },
  "se-norrland": { zh: "诺尔兰", en: "Norrland", order: 232 },
  // 芬兰（乌西马—西南芬兰—湖区芬兰—北芬兰）
  "fi-uusimaa": { zh: "乌西马", en: "Uusimaa", order: 240 },
  "fi-lounais-suomi": { zh: "西南芬兰", en: "Southwest Finland", order: 241 },
  "fi-jarvi-suomi": { zh: "湖区芬兰", en: "Finnish Lakeland", order: 242 },
  "fi-pohjois-suomi": { zh: "北芬兰（含拉普兰）", en: "Northern Finland (incl. Lapland)", order: 243 },
  // 卢森堡（埃斯灵—古特兰）
  "lu-oesling": { zh: "埃斯灵", en: "Oesling", order: 250 },
  "lu-gutland": { zh: "古特兰", en: "Gutland", order: 251 },
  // 泰国（曼谷都会区→中部→北部→东北部依善→东部→南部）
  "th-bangkok": { zh: "曼谷都会区", en: "Greater Bangkok", order: 300 },
  "th-central": { zh: "中部", en: "Central Thailand", order: 301 },
  "th-north": { zh: "北部", en: "Northern Thailand", order: 302 },
  "th-northeast": { zh: "东北部（依善）", en: "Northeast (Isan)", order: 303 },
  "th-east": { zh: "东部", en: "Eastern Thailand", order: 304 },
  "th-south": { zh: "南部", en: "Southern Thailand", order: 305 },
  // 韩国（首都圈→岭南→湖南→江原→济州）
  "kr-capital": { zh: "首都圈", en: "Capital Area", order: 280 },
  "kr-yeongnam": { zh: "岭南地区", en: "Yeongnam Region", order: 281 },
  "kr-honam": { zh: "湖南地区", en: "Honam Region", order: 282 },
  "kr-gangwon": { zh: "江原", en: "Gangwon", order: 283 },
  "kr-jeju": { zh: "济州岛", en: "Jeju Island", order: 284 },
  "kr-chungcheong": { zh: "忠清地区", en: "Chungcheong Region", order: 285 },
  // 波兰（马佐夫舍—小波兰—大波兰与西里西亚—波美拉尼亚—瓦尔米亚马祖里与波德拉谢）
  "pl-mazovia": { zh: "马佐夫舍", en: "Mazovia", order: 260 },
  "pl-malopolska": { zh: "小波兰", en: "Lesser Poland (Małopolska)", order: 261 },
  "pl-wielkopolska-slask": { zh: "大波兰与西里西亚", en: "Greater Poland & Silesia", order: 262 },
  "pl-pomorze": { zh: "波美拉尼亚", en: "Pomerania", order: 263 },
  "pl-mazury-podlasie": { zh: "瓦尔米亚—马祖里与波德拉谢", en: "Warmia-Masuria & Podlasie", order: 264 },
  // 越南（北部→中部→中部高原→南部）
  "vn-north": { zh: "北部", en: "Northern Vietnam", order: 310 },
  "vn-central": { zh: "中部", en: "Central Vietnam", order: 311 },
  "vn-central-highlands": { zh: "中部高原", en: "Central Highlands", order: 312 },
  "vn-south": { zh: "南部", en: "Southern Vietnam", order: 313 },
  // 蒙古
  "mn-central": { zh: "中部", en: "Central Mongolia", order: 320 },
  "mn-north": { zh: "北部", en: "Northern Mongolia", order: 321 },
  "mn-west": { zh: "西部", en: "Western Mongolia", order: 322 },
  "mn-gobi": { zh: "戈壁南部", en: "South Gobi", order: 323 },
  "mn-east": { zh: "东部", en: "Eastern Mongolia", order: 324 },
  // 马来西亚
  "my-central": { zh: "中部", en: "Central Malaysia", order: 330 },
  "my-north": { zh: "北部", en: "Northern Peninsula", order: 331 },
  "my-south": { zh: "南部", en: "Southern Peninsula", order: 332 },
  "my-sabah": { zh: "沙巴", en: "Sabah", order: 333 },
  "my-sarawak": { zh: "砂拉越", en: "Sarawak", order: 334 },
  // 新加坡
  "sg-main": { zh: "新加坡", en: "Singapore", order: 340 },
  // 菲律宾
  "ph-luzon": { zh: "吕宋岛", en: "Luzon", order: 350 },
  "ph-visayas": { zh: "维萨亚斯群岛", en: "Visayas", order: 351 },
  "ph-palawan": { zh: "巴拉望岛", en: "Palawan", order: 352 },
  "ph-mindanao": { zh: "棉兰老岛", en: "Mindanao", order: 353 },
  // 印度尼西亚
  "id-java": { zh: "爪哇岛", en: "Java", order: 360 },
  "id-bali": { zh: "巴厘岛", en: "Bali", order: 361 },
  "id-sumatra": { zh: "苏门答腊岛", en: "Sumatra", order: 362 },
  "id-nusa-tenggara": { zh: "努沙登加拉群岛", en: "Nusa Tenggara", order: 363 },
  "id-sulawesi": { zh: "苏拉威西岛", en: "Sulawesi", order: 364 },
  "id-kalimantan": { zh: "加里曼丹岛", en: "Kalimantan", order: 365 },
  // 哈萨克斯坦
  "kz-north": { zh: "北部", en: "Northern Kazakhstan", order: 370 },
  "kz-southeast": { zh: "东南部", en: "Southeastern Kazakhstan", order: 371 },
  "kz-south": { zh: "南部", en: "Southern Kazakhstan", order: 372 },
  "kz-west": { zh: "西部", en: "Western Kazakhstan", order: 373 },
  "kz-central": { zh: "中部", en: "Central Kazakhstan", order: 374 },
  "kz-east": { zh: "东部", en: "Eastern Kazakhstan", order: 375 },
  // 土耳其
  "tr-marmara": { zh: "马尔马拉地区", en: "Marmara Region", order: 380 },
  "tr-central-anatolia": { zh: "中安纳托利亚地区", en: "Central Anatolia", order: 381 },
  "tr-aegean": { zh: "爱琴海地区", en: "Aegean Region", order: 382 },
  "tr-mediterranean": { zh: "地中海地区", en: "Mediterranean Region", order: 383 },
  "tr-black-sea": { zh: "黑海地区", en: "Black Sea Region", order: 384 },
  // 克罗地亚
  "hr-zagreb": { zh: "萨格勒布地区", en: "Zagreb Region", order: 390 },
  "hr-istria-kvarner": { zh: "伊斯特拉与克瓦内尔", en: "Istria & Kvarner", order: 391 },
  "hr-dalmatia": { zh: "达尔马提亚", en: "Dalmatia", order: 392 },
  "hr-dubrovnik": { zh: "杜布罗夫尼克地区", en: "Dubrovnik Region", order: 393 },
  "hr-slavonia": { zh: "斯拉沃尼亚", en: "Slavonia", order: 394 },
  // 捷克
  "cz-prague": { zh: "布拉格地区", en: "Prague Region", order: 400 },
  "cz-west-bohemia": { zh: "西波希米亚", en: "West Bohemia", order: 401 },
  "cz-south-bohemia": { zh: "南波希米亚", en: "South Bohemia", order: 402 },
  "cz-central-bohemia": { zh: "中波希米亚", en: "Central Bohemia", order: 403 },
  "cz-moravia": { zh: "摩拉维亚", en: "Moravia", order: 404 },
  // 智利（南美首个国家，北→中→南→巴塔哥尼亚→复活节岛）
  "cl-norte-grande": { zh: "北大区（阿塔卡马）", en: "Norte Grande (Atacama)", order: 410 },
  "cl-norte-chico": { zh: "小北区（科金博）", en: "Norte Chico (Coquimbo)", order: 411 },
  "cl-centro": { zh: "中部大区", en: "Central Chile", order: 412 },
  "cl-sur": { zh: "南部湖区", en: "Southern Lake District", order: 413 },
  "cl-patagonia": { zh: "巴塔哥尼亚", en: "Chilean Patagonia", order: 414 },
  "cl-isla-de-pascua": { zh: "复活节岛", en: "Easter Island", order: 415 },
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

/**
 * 大区圆点配色 —— 不用固定调色板按索引取色（那样相邻 order 的大区可能跳到完全不
 * 相关的色相，看起来杂乱无章）。改成：同一国家的大区按 order 排出相对位次
 * （第几个 / 该国共几个大区），沿色相环连续过渡取一段色相（0°~300°，不绕回起点，
 * 避免首尾撞色）。同一国家内大区本来就按地理顺序排列（如中国 华北→东北→华东→
 * 华中→华南→西南→西北→港澳台，见上表），色相跟着这个顺序连续变化，看起来是
 * 一段有内在顺序的"光谱"而不是随机撞色。故意用中饱和度柔和色 + 固定明度，
 * 适配暗色主题，且避开 --accent 琥珀色附近色相，避免跟"当前选中"状态混淆。
 */
const ZONE_COUNTRY_GROUPS: Map<string, string[]> = (() => {
  const groups = new Map<string, { key: string; order: number }[]>();
  for (const [key, meta] of Object.entries(ZONE_META)) {
    const prefix = key.split("-")[0]!;
    if (!groups.has(prefix)) groups.set(prefix, []);
    groups.get(prefix)!.push({ key, order: meta.order });
  }
  const out = new Map<string, string[]>();
  for (const [prefix, entries] of groups) {
    entries.sort((a, b) => a.order - b.order);
    out.set(prefix, entries.map((e) => e.key));
  }
  return out;
})();

const ZONE_HUE_SPAN_DEG = 300; // 0°(暖红) 到 300°(品紫)，避开跟起点撞色的 300°~360°
const ZONE_SATURATION = "62%";
const ZONE_LIGHTNESS = "68%"; // 偏亮，暗色底上清晰但不刺眼

export function zoneColor(zone: string | undefined): string | undefined {
  if (!zone) return undefined;
  if (!ZONE_META[zone]) return undefined;
  const prefix = zone.split("-")[0]!;
  const siblings = ZONE_COUNTRY_GROUPS.get(prefix) ?? [zone];
  const rank = siblings.indexOf(zone);
  const total = siblings.length;
  const hue = total <= 1 ? 200 : Math.round((rank / (total - 1)) * ZONE_HUE_SPAN_DEG);
  return `hsl(${hue}, ${ZONE_SATURATION}, ${ZONE_LIGHTNESS})`;
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
  { country: "belgium", nameZh: "比利时", nameEn: "Belgium" },
  { country: "ireland", nameZh: "爱尔兰", nameEn: "Ireland" },
  { country: "denmark", nameZh: "丹麦", nameEn: "Denmark" },
  { country: "sweden", nameZh: "瑞典", nameEn: "Sweden" },
  { country: "finland", nameZh: "芬兰", nameEn: "Finland" },
  { country: "luxembourg", nameZh: "卢森堡", nameEn: "Luxembourg" },
  { country: "thailand", nameZh: "泰国", nameEn: "Thailand" },
  { country: "south-korea", nameZh: "韩国", nameEn: "South Korea" },
  { country: "poland", nameZh: "波兰", nameEn: "Poland" },
  { country: "vietnam", nameZh: "越南", nameEn: "Vietnam" },
  { country: "mongolia", nameZh: "蒙古", nameEn: "Mongolia" },
  { country: "malaysia", nameZh: "马来西亚", nameEn: "Malaysia" },
  { country: "singapore", nameZh: "新加坡", nameEn: "Singapore" },
  { country: "philippines", nameZh: "菲律宾", nameEn: "Philippines" },
  { country: "indonesia", nameZh: "印度尼西亚", nameEn: "Indonesia" },
  { country: "kazakhstan", nameZh: "哈萨克斯坦", nameEn: "Kazakhstan" },
  { country: "turkey", nameZh: "土耳其", nameEn: "Turkey" },
  { country: "croatia", nameZh: "克罗地亚", nameEn: "Croatia" },
  { country: "czechia", nameZh: "捷克", nameEn: "Czechia" },
  { country: "chile", nameZh: "智利", nameEn: "Chile" },
  { country: "hungary", nameZh: "匈牙利", nameEn: "Hungary" },
  { country: "slovakia", nameZh: "斯洛伐克", nameEn: "Slovakia" },
  { country: "slovenia", nameZh: "斯洛文尼亚", nameEn: "Slovenia" },
  { country: "malta", nameZh: "马耳他", nameEn: "Malta" },
  { country: "estonia", nameZh: "爱沙尼亚", nameEn: "Estonia" },
];

/** 城市按国家存放在 lib/content/<country>/cities.ts，这里是合并结果（顺序与 CONTENT_COUNTRIES 一致）。 */
export const CITY_REGISTRY: CityEntry[] = ALL_CITIES;

const BY_ID = new Map(CITY_REGISTRY.map((c) => [c.id, c]));

/** 国家 slug → 大洲 id（regionId）。新增国家时补一行。 */
export const COUNTRY_TO_CONTINENT: Record<string, string> = {
  china: "asia",
  japan: "asia",
  thailand: "asia",
  "south-korea": "asia",
  vietnam: "asia",
  mongolia: "asia",
  malaysia: "asia",
  singapore: "asia",
  philippines: "asia",
  indonesia: "asia",
  kazakhstan: "asia",
  turkey: "asia",
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
  belgium: "europe",
  ireland: "europe",
  denmark: "europe",
  sweden: "europe",
  finland: "europe",
  luxembourg: "europe",
  poland: "europe",
  croatia: "europe",
  czechia: "europe",
  hungary: "europe",
  slovakia: "europe",
  slovenia: "europe",
  malta: "europe",
  estonia: "europe",
  chile: "south-america",
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
