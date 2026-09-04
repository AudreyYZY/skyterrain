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
  "kr-gangwon": { zh: "江原道", en: "Gangwon Province", order: 283 },
  "kr-jeju": { zh: "济州岛", en: "Jeju Island", order: 284 },
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
 * 大区圆点配色 —— 10 色循环调色板，按 zone 在其所属国家内的 order 序号取色，
 * 同一国家内相邻大区颜色不同即可；不追求全局唯一（不同国家复用同一颜色没关系，
 * 用户一次只看一个国家的目录）。故意避开 --accent 琥珀色附近色相，避免跟"当前选中"
 * 状态的强调色混淆。
 */
const ZONE_COLOR_PALETTE = [
  "#7dd3fc", // sky
  "#86efac", // green
  "#c4b5fd", // violet
  "#fda4af", // rose
  "#67e8f9", // cyan
  "#d9f99d", // lime
  "#f0abfc", // fuchsia
  "#93c5fd", // blue
  "#fca5a5", // coral
  "#5eead4", // teal
] as const;

export function zoneColor(zone: string | undefined): string | undefined {
  if (!zone) return undefined;
  const meta = ZONE_META[zone];
  if (!meta) return undefined;
  // 同一国家的 zone order 是连续分配的（见上表），用它对调色板取模即可让
  // 一个国家内的相邻大区拿到不同颜色，不需要每个 zone 手动指定颜色。
  return ZONE_COLOR_PALETTE[meta.order % ZONE_COLOR_PALETTE.length];
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
    id: "geelong", nameZh: "吉朗", nameEn: "Geelong", country: "australia", tier: "notable", zone: "au-vic",
    lon: 144.3617, lat: -38.1499,
    airport: { iata: "AVV", nameZh: "阿瓦隆机场", nameEn: "Avalon Airport", lon: 144.4708, lat: -38.0406 },
    source: "吉朗市中心 -38.1499,144.3617；AVV 阿瓦隆机场（吉朗东北约20km，是吉朗地区主要商用机场）：公开资料",
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
    id: "darwin", nameZh: "达尔文", nameEn: "Darwin", country: "australia", tier: "major", zone: "au-nt",
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
    id: "beijing", nameZh: "北京", nameEn: "Beijing", country: "china", tier: "capital", zone: "cn-north", admin1Zh: "北京市", admin1En: "Beijing",
    lon: 116.4074, lat: 39.9042,
    airport: { iata: "PEK", nameZh: "北京首都国际机场", nameEn: "Beijing Capital Int'l", lon: 116.585, lat: 40.080 },
    source: "北京市中心 39.9042,116.4074；PEK 机场：公开资料",
  },
  {
    id: "shanghai", nameZh: "上海", nameEn: "Shanghai", country: "china", tier: "major", zone: "cn-east", admin1Zh: "上海市", admin1En: "Shanghai",
    lon: 121.4737, lat: 31.2304,
    airport: { iata: "PVG", nameZh: "上海浦东国际机场", nameEn: "Shanghai Pudong Int'l", lon: 121.805, lat: 31.143 },
    source: "上海人民广场 31.2304,121.4737；PVG 机场：公开资料",
  },
  {
    id: "guangzhou", nameZh: "广州", nameEn: "Guangzhou", country: "china", tier: "major", zone: "cn-south", admin1Zh: "广东省", admin1En: "Guangdong",
    lon: 113.2644, lat: 23.1291,
    airport: { iata: "CAN", nameZh: "广州白云国际机场", nameEn: "Guangzhou Baiyun Int'l", lon: 113.299, lat: 23.392 },
    source: "广州珠江新城一带 23.1291,113.2644；CAN 机场：公开资料",
  },
  {
    id: "shenzhen", nameZh: "深圳", nameEn: "Shenzhen", country: "china", tier: "major", zone: "cn-south", admin1Zh: "广东省", admin1En: "Guangdong",
    lon: 114.0579, lat: 22.5431,
    airport: { iata: "SZX", nameZh: "深圳宝安国际机场", nameEn: "Shenzhen Bao'an Int'l", lon: 113.811, lat: 22.639 },
    source: "深圳福田一带 22.5431,114.0579；SZX 机场：公开资料",
  },
  {
    id: "chengdu", nameZh: "成都", nameEn: "Chengdu", country: "china", tier: "major", zone: "cn-southwest", admin1Zh: "四川省", admin1En: "Sichuan",
    lon: 104.0668, lat: 30.5728,
    airport: { iata: "CTU", nameZh: "成都双流国际机场", nameEn: "Chengdu Shuangliu Int'l", lon: 103.947, lat: 30.578 },
    source: "成都天府广场 30.5728,104.0668；CTU 机场：公开资料",
  },
  {
    id: "chongqing", nameZh: "重庆", nameEn: "Chongqing", country: "china", tier: "major", zone: "cn-southwest", admin1Zh: "重庆市", admin1En: "Chongqing",
    lon: 106.5516, lat: 29.5630,
    airport: { iata: "CKG", nameZh: "重庆江北国际机场", nameEn: "Chongqing Jiangbei Int'l", lon: 106.642, lat: 29.719 },
    source: "重庆渝中区 29.5630,106.5516；CKG 机场：公开资料",
  },
  {
    id: "xian", nameZh: "西安", nameEn: "Xi'an", country: "china", tier: "major", zone: "cn-northwest", admin1Zh: "陕西省", admin1En: "Shaanxi",
    lon: 108.9398, lat: 34.3416,
    airport: { iata: "XIY", nameZh: "西安咸阳国际机场", nameEn: "Xi'an Xianyang Int'l", lon: 108.752, lat: 34.447 },
    source: "西安钟楼 34.3416,108.9398；XIY 机场：公开资料",
  },
  {
    id: "hangzhou", nameZh: "杭州", nameEn: "Hangzhou", country: "china", tier: "major", zone: "cn-east", admin1Zh: "浙江省", admin1En: "Zhejiang",
    lon: 120.1551, lat: 30.2741,
    airport: { iata: "HGH", nameZh: "杭州萧山国际机场", nameEn: "Hangzhou Xiaoshan Int'l", lon: 120.434, lat: 30.234 },
    source: "杭州西湖东岸 30.2741,120.1551；HGH 机场：公开资料",
  },
  {
    id: "kunming", nameZh: "昆明", nameEn: "Kunming", country: "china", tier: "major", zone: "cn-southwest", admin1Zh: "云南省", admin1En: "Yunnan",
    lon: 102.7183, lat: 25.0389,
    airport: { iata: "KMG", nameZh: "昆明长水国际机场", nameEn: "Kunming Changshui Int'l", lon: 102.929, lat: 25.100 },
    source: "昆明市中心 25.0389,102.7183；KMG 机场：公开资料",
  },
  {
    id: "guilin", nameZh: "桂林", nameEn: "Guilin", country: "china", tier: "notable", zone: "cn-south", admin1Zh: "广西壮族自治区", admin1En: "Guangxi",
    lon: 110.2907, lat: 25.2736,
    airport: { iata: "KWL", nameZh: "桂林两江国际机场", nameEn: "Guilin Liangjiang Int'l", lon: 110.039, lat: 25.219 },
    source: "桂林市中心 25.2736,110.2907；KWL 机场：公开资料",
  },
  {
    id: "nanjing", nameZh: "南京", nameEn: "Nanjing", country: "china", tier: "major", zone: "cn-east", admin1Zh: "江苏省", admin1En: "Jiangsu",
    lon: 118.7969, lat: 32.0603,
    airport: { iata: "NKG", nameZh: "南京禄口国际机场", nameEn: "Nanjing Lukou Int'l", lon: 118.862, lat: 31.742 },
    source: "南京新街口 32.0603,118.7969；NKG 机场：公开资料",
  },
  {
    id: "sanya", nameZh: "三亚", nameEn: "Sanya", country: "china", tier: "notable", zone: "cn-south", admin1Zh: "海南省", admin1En: "Hainan",
    lon: 109.5119, lat: 18.2528,
    airport: { iata: "SYX", nameZh: "三亚凤凰国际机场", nameEn: "Sanya Phoenix Int'l", lon: 109.412, lat: 18.303 },
    source: "三亚市中心 18.2528,109.5119；SYX 机场：公开资料",
  },
  {
    id: "lhasa", nameZh: "拉萨", nameEn: "Lhasa", country: "china", tier: "major", zone: "cn-southwest", admin1Zh: "西藏自治区", admin1En: "Tibet",
    lon: 91.1409, lat: 29.6456,
    airport: { iata: "LXA", nameZh: "拉萨贡嘎国际机场", nameEn: "Lhasa Gonggar Int'l", lon: 90.912, lat: 29.298 },
    source: "拉萨市中心 29.6456,91.1409；LXA 机场：公开资料",
  },
  {
    id: "harbin", nameZh: "哈尔滨", nameEn: "Harbin", country: "china", tier: "major", zone: "cn-northeast", admin1Zh: "黑龙江省", admin1En: "Heilongjiang",
    lon: 126.5350, lat: 45.8038,
    airport: { iata: "HRB", nameZh: "哈尔滨太平国际机场", nameEn: "Harbin Taiping Int'l", lon: 126.250, lat: 45.623 },
    source: "哈尔滨市中心 45.8038,126.5350；HRB 机场：公开资料",
  },
  {
    id: "qingdao", nameZh: "青岛", nameEn: "Qingdao", country: "china", tier: "major", zone: "cn-east", admin1Zh: "山东省", admin1En: "Shandong",
    lon: 120.3826, lat: 36.0671,
    airport: { iata: "TAO", nameZh: "青岛胶东国际机场", nameEn: "Qingdao Jiaodong Int'l", lon: 120.086, lat: 36.366 },
    source: "青岛市南区 36.0671,120.3826；TAO 机场：公开资料",
  },
  {
    id: "zhangjiajie", nameZh: "张家界", nameEn: "Zhangjiajie", country: "china", tier: "notable", zone: "cn-central", admin1Zh: "湖南省", admin1En: "Hunan",
    lon: 110.4796, lat: 29.1170,
    airport: { iata: "DYG", nameZh: "张家界荷花国际机场", nameEn: "Zhangjiajie Hehua Int'l", lon: 110.443, lat: 29.103 },
    source: "张家界市区 29.1170,110.4796；DYG 机场：公开资料",
  },
  {
    id: "lijiang", nameZh: "丽江", nameEn: "Lijiang", country: "china", tier: "notable", zone: "cn-southwest", admin1Zh: "云南省", admin1En: "Yunnan",
    lon: 100.2270, lat: 26.8721,
    airport: { iata: "LJG", nameZh: "丽江三义国际机场", nameEn: "Lijiang Sanyi Int'l", lon: 100.246, lat: 26.680 },
    source: "丽江古城 26.8721,100.2270；LJG 机场：公开资料",
  },
  {
    id: "dunhuang", nameZh: "敦煌", nameEn: "Dunhuang", country: "china", tier: "notable", zone: "cn-northwest", admin1Zh: "甘肃省", admin1En: "Gansu",
    lon: 94.6618, lat: 40.1421,
    airport: { iata: "DNH", nameZh: "敦煌莫高国际机场", nameEn: "Dunhuang Mogao Int'l", lon: 94.809, lat: 40.161 },
    source: "敦煌市区 40.1421,94.6618；DNH 机场：公开资料",
  },
  // ── 中国 · 补齐 34 个省级行政区主要城市 ──
  {
    id: "tianjin", nameZh: "天津", nameEn: "Tianjin", country: "china", tier: "major", zone: "cn-north", admin1Zh: "天津市", admin1En: "Tianjin",
    lon: 117.2010, lat: 39.0842,
    airport: { iata: "TSN", nameZh: "天津滨海国际机场", nameEn: "Tianjin Binhai Int'l", lon: 117.346, lat: 39.124 },
    source: "天津市中心 39.0842,117.2010；TSN 机场：公开资料",
  },
  {
    id: "shijiazhuang", nameZh: "石家庄", nameEn: "Shijiazhuang", country: "china", tier: "major", zone: "cn-north", admin1Zh: "河北省", admin1En: "Hebei",
    lon: 114.5143, lat: 38.0428,
    airport: { iata: "SJW", nameZh: "石家庄正定国际机场", nameEn: "Shijiazhuang Zhengding Int'l", lon: 114.696, lat: 38.281 },
    source: "石家庄市中心 38.0428,114.5143；SJW 机场：公开资料",
  },
  {
    id: "taiyuan", nameZh: "太原", nameEn: "Taiyuan", country: "china", tier: "major", zone: "cn-north", admin1Zh: "山西省", admin1En: "Shanxi",
    lon: 112.5489, lat: 37.8706,
    airport: { iata: "TYN", nameZh: "太原武宿国际机场", nameEn: "Taiyuan Wusu Int'l", lon: 112.629, lat: 37.747 },
    source: "太原市中心 37.8706,112.5489；TYN 机场：公开资料",
  },
  {
    id: "hohhot", nameZh: "呼和浩特", nameEn: "Hohhot", country: "china", tier: "major", zone: "cn-north", admin1Zh: "内蒙古自治区", admin1En: "Inner Mongolia",
    lon: 111.7492, lat: 40.8424,
    airport: { iata: "HET", nameZh: "呼和浩特盛乐国际机场", nameEn: "Hohhot Shengle Int'l", lon: 111.573, lat: 40.480 },
    source: "呼和浩特市中心 40.8424,111.7492；HET 机场：白塔机场迁建为盛乐国际机场（和林格尔县，2026 转场投用），IATA/ICAO 不变，坐标 40.480,111.573",
  },
  {
    id: "shenyang", nameZh: "沈阳", nameEn: "Shenyang", country: "china", tier: "major", zone: "cn-northeast", admin1Zh: "辽宁省", admin1En: "Liaoning",
    lon: 123.4315, lat: 41.8057,
    airport: { iata: "SHE", nameZh: "沈阳桃仙国际机场", nameEn: "Shenyang Taoxian Int'l", lon: 123.483, lat: 41.640 },
    source: "沈阳市中心 41.8057,123.4315；SHE 机场：公开资料",
  },
  {
    id: "changchun", nameZh: "长春", nameEn: "Changchun", country: "china", tier: "major", zone: "cn-northeast", admin1Zh: "吉林省", admin1En: "Jilin",
    lon: 125.3235, lat: 43.8171,
    airport: { iata: "CGQ", nameZh: "长春龙嘉国际机场", nameEn: "Changchun Longjia Int'l", lon: 125.685, lat: 44.001 },
    source: "长春市中心 43.8171,125.3235；CGQ 机场：公开资料",
  },
  {
    id: "nanchang", nameZh: "南昌", nameEn: "Nanchang", country: "china", tier: "major", zone: "cn-east", admin1Zh: "江西省", admin1En: "Jiangxi",
    lon: 115.8579, lat: 28.6820,
    airport: { iata: "KHN", nameZh: "南昌昌北国际机场", nameEn: "Nanchang Changbei Int'l", lon: 115.900, lat: 28.865 },
    source: "南昌市中心 28.6820,115.8579；KHN 机场：公开资料",
  },
  {
    id: "hefei", nameZh: "合肥", nameEn: "Hefei", country: "china", tier: "major", zone: "cn-east", admin1Zh: "安徽省", admin1En: "Anhui",
    lon: 117.2272, lat: 31.8206,
    airport: { iata: "HFE", nameZh: "合肥新桥国际机场", nameEn: "Hefei Xinqiao Int'l", lon: 116.977, lat: 31.780 },
    source: "合肥市中心 31.8206,117.2272；HFE 机场：公开资料",
  },
  {
    id: "xiamen", nameZh: "厦门", nameEn: "Xiamen", country: "china", tier: "major", zone: "cn-east", admin1Zh: "福建省", admin1En: "Fujian",
    lon: 118.0894, lat: 24.4798,
    airport: { iata: "XMN", nameZh: "厦门高崎国际机场", nameEn: "Xiamen Gaoqi Int'l", lon: 118.128, lat: 24.544 },
    source: "厦门本岛 24.4798,118.0894；XMN 机场：公开资料",
  },
  {
    id: "zhengzhou", nameZh: "郑州", nameEn: "Zhengzhou", country: "china", tier: "major", zone: "cn-central", admin1Zh: "河南省", admin1En: "Henan",
    lon: 113.6254, lat: 34.7466,
    airport: { iata: "CGO", nameZh: "郑州新郑国际机场", nameEn: "Zhengzhou Xinzheng Int'l", lon: 113.841, lat: 34.520 },
    source: "郑州市中心 34.7466,113.6254；CGO 机场：公开资料",
  },
  {
    id: "wuhan", nameZh: "武汉", nameEn: "Wuhan", country: "china", tier: "major", zone: "cn-central", admin1Zh: "湖北省", admin1En: "Hubei",
    lon: 114.3052, lat: 30.5928,
    airport: { iata: "WUH", nameZh: "武汉天河国际机场", nameEn: "Wuhan Tianhe Int'l", lon: 114.208, lat: 30.774 },
    source: "武汉三镇交汇处 30.5928,114.3052；WUH 机场：公开资料",
  },
  {
    id: "guiyang", nameZh: "贵阳", nameEn: "Guiyang", country: "china", tier: "major", zone: "cn-southwest", admin1Zh: "贵州省", admin1En: "Guizhou",
    lon: 106.6302, lat: 26.6470,
    airport: { iata: "KWE", nameZh: "贵阳龙洞堡国际机场", nameEn: "Guiyang Longdongbao Int'l", lon: 106.801, lat: 26.539 },
    source: "贵阳市中心 26.6470,106.6302；KWE 机场：公开资料",
  },
  {
    id: "xining", nameZh: "西宁", nameEn: "Xining", country: "china", tier: "major", zone: "cn-northwest", admin1Zh: "青海省", admin1En: "Qinghai",
    lon: 101.7782, lat: 36.6171,
    airport: { iata: "XNN", nameZh: "西宁曹家堡国际机场", nameEn: "Xining Caojiabao Int'l", lon: 102.043, lat: 36.528 },
    source: "西宁市中心 36.6171,101.7782；XNN 机场：公开资料",
  },
  {
    id: "yinchuan", nameZh: "银川", nameEn: "Yinchuan", country: "china", tier: "major", zone: "cn-northwest", admin1Zh: "宁夏回族自治区", admin1En: "Ningxia",
    lon: 106.2309, lat: 38.4872,
    airport: { iata: "INC", nameZh: "银川河东国际机场", nameEn: "Yinchuan Hedong Int'l", lon: 106.393, lat: 38.322 },
    source: "银川市中心 38.4872,106.2309；INC 机场：公开资料",
  },
  {
    id: "urumqi", nameZh: "乌鲁木齐", nameEn: "Ürümqi", country: "china", tier: "major", zone: "cn-northwest", admin1Zh: "新疆维吾尔自治区", admin1En: "Xinjiang",
    lon: 87.6168, lat: 43.8256,
    airport: { iata: "URC", nameZh: "乌鲁木齐天山国际机场", nameEn: "Ürümqi Tianshan Int'l", lon: 87.474, lat: 43.907 },
    source: "乌鲁木齐市中心 43.8256,87.6168；URC 机场：2025-03 民航局批复由「地窝堡」更名「天山」，IATA/位置不变",
  },
  {
    id: "hongkong", nameZh: "香港", nameEn: "Hong Kong", country: "china", tier: "major", zone: "cn-hmt", admin1Zh: "香港特别行政区", admin1En: "Hong Kong",
    lon: 114.1772, lat: 22.3025,
    airport: { iata: "HKG", nameZh: "香港国际机场", nameEn: "Hong Kong Int'l", lon: 113.915, lat: 22.309 },
    source: "香港中环一带 22.3025,114.1772；HKG 机场：公开资料",
  },
  {
    id: "macao", nameZh: "澳门", nameEn: "Macao", country: "china", tier: "major", zone: "cn-hmt", admin1Zh: "澳门特别行政区", admin1En: "Macao",
    lon: 113.5439, lat: 22.1987,
    airport: { iata: "MFM", nameZh: "澳门国际机场", nameEn: "Macao Int'l", lon: 113.592, lat: 22.156 },
    source: "澳门半岛 22.1987,113.5439；MFM 机场：公开资料",
  },
  {
    id: "taipei", nameZh: "台北", nameEn: "Taipei", country: "china", tier: "major", zone: "cn-hmt", admin1Zh: "台湾", admin1En: "Taiwan",
    lon: 121.5654, lat: 25.0330,
    airport: { iata: "TPE", nameZh: "台湾桃园国际机场", nameEn: "Taiwan Taoyuan Int'l", lon: 121.233, lat: 25.078 },
    source: "台北市中心 25.0330,121.5654；TPE 机场：公开资料",
  },
  // ── 中国 · 补齐 Tier 1 省会缺口（福建/山东/湖南/广西/海南/甘肃）──
  {
    id: "fuzhou", nameZh: "福州", nameEn: "Fuzhou", country: "china", tier: "major", zone: "cn-east", admin1Zh: "福建省", admin1En: "Fujian",
    lon: 119.2964, lat: 26.0743,
    airport: { iata: "FOC", nameZh: "福州长乐国际机场", nameEn: "Fuzhou Changle Int'l", lon: 119.663, lat: 25.935 },
    source: "福州市中心（鼓楼区）26.0743,119.2964；FOC 机场：公开资料（Wikipedia）",
  },
  {
    id: "jinan", nameZh: "济南", nameEn: "Jinan", country: "china", tier: "major", zone: "cn-east", admin1Zh: "山东省", admin1En: "Shandong",
    lon: 117.0207, lat: 36.6702,
    airport: { iata: "TNA", nameZh: "济南遥墙国际机场", nameEn: "Jinan Yaoqiang Int'l", lon: 117.216, lat: 36.857 },
    source: "济南市中心（历下区）36.6702,117.0207；TNA 机场：公开资料（Wikipedia）",
  },
  {
    id: "changsha", nameZh: "长沙", nameEn: "Changsha", country: "china", tier: "major", zone: "cn-central", admin1Zh: "湖南省", admin1En: "Hunan",
    lon: 112.9390, lat: 28.2280,
    airport: { iata: "CSX", nameZh: "长沙黄花国际机场", nameEn: "Changsha Huanghua Int'l", lon: 113.221, lat: 28.197 },
    source: "长沙市中心（芙蓉区）28.2280,112.9390；CSX 机场：公开资料（Wikipedia）",
  },
  {
    id: "nanning", nameZh: "南宁", nameEn: "Nanning", country: "china", tier: "major", zone: "cn-south", admin1Zh: "广西壮族自治区", admin1En: "Guangxi",
    lon: 108.3275, lat: 22.8167,
    airport: { iata: "NNG", nameZh: "南宁吴圩国际机场", nameEn: "Nanning Wuxu Int'l", lon: 108.172, lat: 22.608 },
    source: "南宁市中心（广西壮族自治区政府一带）22.8167,108.3275；NNG 机场：公开资料（Wikipedia）",
  },
  {
    id: "haikou", nameZh: "海口", nameEn: "Haikou", country: "china", tier: "major", zone: "cn-south", admin1Zh: "海南省", admin1En: "Hainan",
    lon: 110.3488, lat: 20.0186,
    airport: { iata: "HAK", nameZh: "海口美兰国际机场", nameEn: "Haikou Meilan Int'l", lon: 110.459, lat: 19.935 },
    source: "海口市中心（海南省政府一带）20.0186,110.3488；HAK 机场：公开资料（Wikipedia）",
  },
  {
    id: "lanzhou", nameZh: "兰州", nameEn: "Lanzhou", country: "china", tier: "major", zone: "cn-northwest", admin1Zh: "甘肃省", admin1En: "Gansu",
    lon: 103.8268, lat: 36.0606,
    airport: { iata: "LHW", nameZh: "兰州中川国际机场", nameEn: "Lanzhou Zhongchuan Int'l", lon: 103.621, lat: 36.515 },
    source: "兰州市中心（城关区）36.0606,103.8268；LHW 机场：公开资料（Wikipedia，机场距市区约70km，中国离市中心最远机场之一）",
  },
  // ── 中国 · Tier 2 热门城市批1（计划单列市 + UNESCO 遗产城市）──
  {
    id: "dalian", nameZh: "大连", nameEn: "Dalian", country: "china", tier: "notable", zone: "cn-northeast", admin1Zh: "辽宁省", admin1En: "Liaoning",
    lon: 121.6515, lat: 38.9168,
    airport: { iata: "DLC", nameZh: "大连周水子国际机场", nameEn: "Dalian Zhoushuizi Int'l", lon: 121.538, lat: 38.966 },
    source: "大连中山广场一带 38.9168,121.6515；DLC 机场：公开资料（Wikipedia）",
  },
  {
    id: "ningbo", nameZh: "宁波", nameEn: "Ningbo", country: "china", tier: "notable", zone: "cn-east", admin1Zh: "浙江省", admin1En: "Zhejiang",
    lon: 121.554, lat: 29.869,
    airport: { iata: "NGB", nameZh: "宁波栎社国际机场", nameEn: "Ningbo Lishe Int'l", lon: 121.462, lat: 29.827 },
    source: "宁波天一广场一带 29.869,121.554；NGB 机场：公开资料（Wikipedia）",
  },
  {
    id: "suzhou", nameZh: "苏州", nameEn: "Suzhou", country: "china", tier: "notable", zone: "cn-east", admin1Zh: "江苏省", admin1En: "Jiangsu",
    lon: 120.6158, lat: 31.3200,
    airport: { iata: "WUX", nameZh: "苏南硕放国际机场", nameEn: "Sunan Shuofang Int'l (Wuxi–Suzhou)", lon: 120.429, lat: 31.494 },
    source: "苏州观前街一带 31.3200,120.6158；WUX 机场：公开资料（Wikipedia，机场位于无锡与苏州之间，2023-03 更名“苏南硕放机场（无锡苏州）”，距苏州市区约22km，苏州本身无独立商用机场）",
  },
  {
    id: "luoyang", nameZh: "洛阳", nameEn: "Luoyang", country: "china", tier: "notable", zone: "cn-central", admin1Zh: "河南省", admin1En: "Henan",
    lon: 112.4539, lat: 34.6197,
    airport: { iata: "LYA", nameZh: "洛阳北郊机场", nameEn: "Luoyang Beijiao Airport", lon: 112.388, lat: 34.741 },
    source: "洛阳市中心（西工区）34.6197,112.4539；LYA 机场：公开资料（Wikipedia）",
  },
  {
    id: "datong", nameZh: "大同", nameEn: "Datong", country: "china", tier: "notable", zone: "cn-north", admin1Zh: "山西省", admin1En: "Shanxi",
    lon: 113.3000, lat: 40.0900,
    airport: { iata: "DAT", nameZh: "大同云冈机场", nameEn: "Datong Yungang Int'l", lon: 113.482, lat: 40.060 },
    source: "大同古城（九龙壁一带）40.0900,113.3000；DAT 机场：公开资料（Wikipedia）",
  },
  {
    id: "huangshan", nameZh: "黄山", nameEn: "Huangshan", country: "china", tier: "notable", zone: "cn-east", admin1Zh: "安徽省", admin1En: "Anhui",
    lon: 118.3153, lat: 29.6961,
    airport: { iata: "TXN", nameZh: "黄山屯溪国际机场", nameEn: "Huangshan Tunxi Int'l", lon: 118.253, lat: 29.730 },
    source: "黄山市屯溪区（老街一带）29.6961,118.3153；TXN 机场：公开资料（Wikipedia）；本条为黄山市/屯溪城区，与黄山风景区（地形注册表 jiangnan-hills 锚点，30.13N 118.17E）同名不同地",
  },
  {
    id: "quanzhou", nameZh: "泉州", nameEn: "Quanzhou", country: "china", tier: "notable", zone: "cn-east", admin1Zh: "福建省", admin1En: "Fujian",
    lon: 118.6757, lat: 24.8744,
    airport: { iata: "JJN", nameZh: "泉州晋江国际机场", nameEn: "Quanzhou Jinjiang Int'l", lon: 118.589, lat: 24.799 },
    source: "泉州市中心（鲤城区）24.8744,118.6757；JJN 机场：公开资料（Wikipedia）",
  },
  {
    id: "zhangye", nameZh: "张掖", nameEn: "Zhangye", country: "china", tier: "notable", zone: "cn-northwest", admin1Zh: "甘肃省", admin1En: "Gansu",
    lon: 100.4499, lat: 38.9248,
    airport: { iata: "YZY", nameZh: "张掖甘州机场", nameEn: "Zhangye Ganzhou Airport", lon: 100.675, lat: 38.802 },
    source: "张掖市中心（甘州区）38.9248,100.4499；YZY 机场：公开资料（Wikipedia）",
  },
  // ── 中国 · Tier 2 热门城市批2 ──
  {
    id: "wenzhou", nameZh: "温州", nameEn: "Wenzhou", country: "china", tier: "notable", zone: "cn-east", admin1Zh: "浙江省", admin1En: "Zhejiang",
    lon: 120.6550, lat: 28.0197,
    airport: { iata: "WNZ", nameZh: "温州龙湾国际机场", nameEn: "Wenzhou Longwan Int'l", lon: 120.8519, lat: 27.9119 },
    source: "温州市鹿城区人民政府一带 28.0197,120.6550（WebSearch：28°01′11″N 120°39′18″E）；WNZ 机场：公开资料（Wikipedia，27°54′43″N 120°51′07″E）",
  },
  {
    id: "yangzhou", nameZh: "扬州", nameEn: "Yangzhou", country: "china", tier: "notable", zone: "cn-east", admin1Zh: "江苏省", admin1En: "Jiangsu",
    lon: 119.4143, lat: 32.3947,
    airport: { iata: "YTY", nameZh: "扬州泰州国际机场", nameEn: "Yangzhou Taizhou Int'l", lon: 119.7150, lat: 32.5617 },
    source: "扬州市广陵区（文昌阁一带）32.3947,119.4143；YTY 机场：公开资料（Wikipedia，32°33′42″N 119°42′54″E，位于扬州与泰州之间，距扬州市区约30km）",
  },
  {
    id: "zhuhai", nameZh: "珠海", nameEn: "Zhuhai", country: "china", tier: "notable", zone: "cn-south", admin1Zh: "广东省", admin1En: "Guangdong",
    lon: 113.5832, lat: 22.2654,
    airport: { iata: "ZUH", nameZh: "珠海金湾机场", nameEn: "Zhuhai Jinwan", lon: 113.3761, lat: 22.0069 },
    source: "珠海市香洲区情侣路（渔女雕像一带）22.2654,113.5832（WebSearch：22°15′55″N 113°34′60″E）；ZUH 机场：公开资料（Wikipedia，22°00′25″N 113°22′34″E，位于金湾区，距市区约50km）",
  },
  {
    id: "chengde", nameZh: "承德", nameEn: "Chengde", country: "china", tier: "notable", zone: "cn-north", admin1Zh: "河北省", admin1En: "Hebei",
    lon: 117.9375, lat: 40.9875,
    airport: { iata: "CDE", nameZh: "承德普宁机场", nameEn: "Chengde Puning Airport", lon: 118.0739, lat: 41.1225 },
    source: "承德市双桥区（避暑山庄一带）40.9875,117.9375（WebSearch：Chengde Mountain Resort 40°59′15″N 117°56′15″E）；CDE 机场：公开资料（Wikipedia，41°07′21″N 118°04′26″E）",
  },
  {
    id: "wuyishan", nameZh: "武夷山", nameEn: "Wuyishan", country: "china", tier: "notable", zone: "cn-east", admin1Zh: "福建省", admin1En: "Fujian",
    lon: 118.0342, lat: 27.7566,
    airport: { iata: "WUS", nameZh: "武夷山机场", nameEn: "Wuyishan Airport", lon: 118.0003, lat: 27.7008 },
    source: "武夷山市城区（崇安街道一带）概略 27.7566,118.0342；WUS 机场：公开资料（Wikipedia，27°42′03″N 118°00′01″E）；本条为武夷山市城区，与武夷山风景区/地形注册表 wuyi 锚点（黄岗山，27.75N 117.65E）同名不同地",
  },
  {
    id: "jingdezhen", nameZh: "景德镇", nameEn: "Jingdezhen", country: "china", tier: "notable", zone: "cn-east", admin1Zh: "江西省", admin1En: "Jiangxi",
    lon: 117.1831, lat: 29.2738,
    airport: { iata: "JDZ", nameZh: "景德镇罗家机场", nameEn: "Jingdezhen Luojia Airport", lon: 117.1758, lat: 29.3386 },
    source: "景德镇市昌江区（市政府驻地）29.2738,117.1831（WebSearch）；JDZ 机场：公开资料（Wikipedia，29°20′19″N 117°10′33″E）",
  },
  {
    id: "jinghong", nameZh: "景洪", nameEn: "Jinghong", country: "china", tier: "notable", zone: "cn-southwest", admin1Zh: "云南省", admin1En: "Yunnan",
    lon: 100.7970, lat: 22.0090,
    airport: { iata: "JHG", nameZh: "西双版纳嘎洒国际机场", nameEn: "Xishuangbanna Gasa Int'l", lon: 100.7596, lat: 21.9739 },
    source: "景洪市（西双版纳州府驻地）22.0090,100.7970（WebSearch：22°00′32″N 100°47′49″E）；JHG 机场：公开资料（Wikipedia，21°58′26″N 100°45′35″E，又称景洪机场）",
  },
  {
    id: "wuxi", nameZh: "无锡", nameEn: "Wuxi", country: "china", tier: "notable", zone: "cn-east", admin1Zh: "江苏省", admin1En: "Jiangsu",
    lon: 120.2955, lat: 31.5798,
    airport: { iata: "WUX", nameZh: "苏南硕放国际机场", nameEn: "Sunan Shuofang Int'l (Wuxi–Suzhou)", lon: 120.429, lat: 31.494 },
    source: "无锡市梁溪区（崇安寺一带）31.5798,120.2955（WebSearch：31°34′47″N 120°17′44″E）；WUX 机场：公开资料（Wikipedia），机场实际位于无锡新吴区硕放街道，与本项目已收录的苏州条目共用同一机场记录（苏州本身无独立商用机场），坐标沿用苏州条目数值以保持一致",
  },
  // ── 中国 · 南疆绿洲聚落（原地形注册表 settlement 分类，2026-09-04 迁移至旅游模式）──
  {
    id: "kashgar", nameZh: "喀什", nameEn: "Kashgar", country: "china", tier: "notable", zone: "cn-northwest", admin1Zh: "新疆维吾尔自治区", admin1En: "Xinjiang",
    lon: 75.99, lat: 39.47,
    airport: { iata: "KHG", nameZh: "喀什徕宁国际机场", nameEn: "Kashgar Laining Int'l", lon: 76.02, lat: 39.543 },
    source: "喀什市中心（艾提尕尔清真寺一带）39.47,75.99（沿用原地形注册表 kashgar 锚点坐标）；KHG 机场：Wikipedia（39°32′35″N 76°01′12″E），已有 urc-khg 国内航线（本项目 data/routes/urc-khg.json）",
  },
  {
    id: "hotan", nameZh: "和田", nameEn: "Hotan", country: "china", tier: "notable", zone: "cn-northwest", admin1Zh: "新疆维吾尔自治区", admin1En: "Xinjiang",
    lon: 79.93, lat: 37.11,
    airport: { iata: "HTN", nameZh: "和田昆冈机场", nameEn: "Hotan Kungang Airport", lon: 79.865, lat: 37.039 },
    source: "和田市中心 37.11,79.93（沿用原地形注册表 hotan 锚点坐标）；HTN 机场：Wikipedia（37°02′19″N 79°51′54″E，位于市区西南约11.5km），已有 urc-htn 国内航线（本项目 data/routes/urc-htn.json）",
  },
  {
    id: "turpan", nameZh: "吐鲁番", nameEn: "Turpan", country: "china", tier: "notable", zone: "cn-northwest", admin1Zh: "新疆维吾尔自治区", admin1En: "Xinjiang",
    lon: 89.18, lat: 42.95,
    airport: { iata: "TLQ", nameZh: "吐鲁番交河机场", nameEn: "Turpan Jiaohe Airport", lon: 89.1006, lat: 43.0306 },
    source: "吐鲁番市高昌区中心 42.95,89.18（沿用原地形注册表 turpan-city 锚点坐标）；TLQ 机场：Wikipedia（43°01′50″N 89°06′02″E，位于市区西北约10km，2010年通航，2019年与乌鲁木齐天山机场合并运营管理，2025年客运量约88.7万人次，是在运营的商用机场，与乌鲁木齐、兰州等地有航班），WebSearch 未找到吐鲁番—乌鲁木齐/其它城市的固定商业直飞航线可稳定核实班次，本轮暂不收录航线",
  },
  {
    id: "bachu", nameZh: "巴楚", nameEn: "Bachu", country: "china", tier: "notable", zone: "cn-northwest", admin1Zh: "新疆维吾尔自治区", admin1En: "Xinjiang",
    lon: 78.55, lat: 39.79,
    source: "巴楚县城中心 39.79,78.55（沿用原地形注册表 bachu 锚点坐标）；WebSearch 核实巴楚本身无民用机场，最近机场为图木舒克唐王城机场（TWC，属图木舒克市/新疆生产建设兵团管辖，直线距离约50km），巴楚有南疆铁路客运车站（喀什—巴楚约5小时）及国道/高速公路（G3012/315国道，距喀什约2小时车程），未收录航线（无可核实的商业航班）",
  },
  {
    id: "maigaiti", nameZh: "麦盖提", nameEn: "Makit", country: "china", tier: "notable", zone: "cn-northwest", admin1Zh: "新疆维吾尔自治区", admin1En: "Xinjiang",
    lon: 77.65, lat: 38.9,
    source: "麦盖提县城中心 38.9,77.65（沿用原地形注册表 maigaiti 锚点坐标）；WebSearch 核实麦盖提本身无民用机场、无铁路直达（巴楚—麦盖提—莎车铁路截至2026年仍在规划中，尚未通车），经麦喀高速（S16，全长约178km，约2–2.5小时车程）与喀什公路相连，未收录航线（无可核实的商业航班）",
  },

  // ── 中国 · Tier 2 批3（9 省级行政区"仅有首府"缺口，2026-09-04）──
  {
    id: "hulunbuir", nameZh: "呼伦贝尔", nameEn: "Hulunbuir", country: "china", tier: "notable", zone: "cn-north", admin1Zh: "内蒙古自治区", admin1En: "Inner Mongolia",
    lon: 119.736, lat: 49.212,
    airport: { iata: "HLD", nameZh: "呼伦贝尔海拉尔国际机场", nameEn: "Hulunbuir Hailar Int'l", lon: 119.825, lat: 49.205 },
    source: "海拉尔区中心 49.212,119.736（WebSearch）；HLD 机场：Wikipedia（49°12′18″N 119°49′36″E），2025年11月更名为国际机场，2025/26冬春航季34条航线通航30城；已核实 CA9747（国航，北京首都—海拉尔，直飞不经停，约2h5min）",
  },
  {
    id: "jilin-city", nameZh: "吉林市", nameEn: "Jilin City", country: "china", tier: "notable", zone: "cn-northeast", admin1Zh: "吉林省", admin1En: "Jilin",
    lon: 126.55, lat: 43.84,
    source: "吉林市区（船营/昌邑一带）中心 43.84,126.55（WebSearch）；WebSearch 核实吉林市本身无在运营的民用机场——原吉林二台子机场已于2005年停止民航开放（因长春龙嘉机场启用而停运），2024年11月虽签署复航改扩建合作协议，但截至2026年仍在办理审批、尚未恢复商业运营；长春龙嘉国际机场（CGQ，本项目已收录长春条目）距吉林市区约35km，两市共用；吉林市另有长珲高铁站直通长春（约25分钟），未收录航线（无独立可核实的商业航班）",
  },
  {
    id: "mohe", nameZh: "漠河", nameEn: "Mohe", country: "china", tier: "notable", zone: "cn-northeast", admin1Zh: "黑龙江省", admin1En: "Heilongjiang",
    lon: 122.52, lat: 52.97,
    airport: { iata: "OHE", nameZh: "漠河古莲机场", nameEn: "Mohe Gulian Airport", lon: 122.421, lat: 52.921 },
    source: "漠河市西林吉镇（市政府驻地）52.97,122.52（WebSearch）；OHE 机场：Wikipedia（52°55′16″N 122°25′14″E），中国纬度最高的民用机场；WebSearch 核实漠河—哈尔滨为直飞（南航/春秋等），漠河—北京现有航班（南航 CZ6268/CZ6267）实际经停哈尔滨、非不经停直飞，故本轮未收录漠河至四大枢纽的国内航线",
  },
  {
    id: "yichang", nameZh: "宜昌", nameEn: "Yichang", country: "china", tier: "notable", zone: "cn-central", admin1Zh: "湖北省", admin1En: "Hubei",
    lon: 111.28, lat: 30.70,
    airport: { iata: "YIH", nameZh: "宜昌三峡国际机场", nameEn: "Yichang Sanxia Int'l", lon: 111.480, lat: 30.556 },
    source: "宜昌市西陵区中心 30.70,111.28（WebSearch）；YIH 机场：Wikipedia（30°33′23″N 111°28′48″E），距市中心约26km、距三峡大坝约55km，开通国内航线20余条；已核实北京首都—宜昌航线每日多班（东航/国航），CA1523 约2h25min",
  },
  {
    id: "leshan", nameZh: "乐山", nameEn: "Leshan", country: "china", tier: "notable", zone: "cn-southwest", admin1Zh: "四川省", admin1En: "Sichuan",
    lon: 103.77, lat: 29.57,
    source: "乐山市市中区中心 29.57,103.77（WebSearch）；WebSearch 核实乐山（峨眉山沙坪）机场截至2026年9月仍处于校飞/试运营准备阶段（2026年1月完成首次校验飞行，目标2026年上半年通航），尚未查到已正式投入商业运营的确切证据，故本轮未收录乐山机场信息；乐山传统上经成都双流/天府机场（约120–150km，高速直达约1.5–2小时）或成乐高铁/成贵高铁往返，游客多以成都为出发地当天往返",
  },
  {
    id: "kaili", nameZh: "凯里", nameEn: "Kaili", country: "china", tier: "notable", zone: "cn-southwest", admin1Zh: "贵州省", admin1En: "Guizhou",
    lon: 107.97, lat: 26.59,
    airport: { iata: "KJH", nameZh: "凯里黄平机场", nameEn: "Kaili Huangping Airport", lon: 107.989, lat: 26.973 },
    source: "凯里市中心 26.59,107.97（WebSearch）；KJH 机场：Wikipedia（26°58′27″N 107°58′50″E），距凯里市区约54km；WebSearch 核实黄平机场现有航线多为经停中转格局（如2026年5月新开的西安—凯里—海口），未能核实到当前仍在运营、飞往北京/上海/广州/成都四大枢纽且不经停的直飞航班，故本轮未收录航线；凯里另有沪昆高铁站，距贵阳约30分钟车程，是更常见的进出方式",
  },
  {
    id: "yanan", nameZh: "延安", nameEn: "Yan'an", country: "china", tier: "notable", zone: "cn-northwest", admin1Zh: "陕西省", admin1En: "Shaanxi",
    lon: 109.49, lat: 36.60,
    airport: { iata: "ENY", nameZh: "延安南泥湾机场", nameEn: "Yan'an Nanniwan Airport", lon: 109.4653, lat: 36.4764 },
    source: "延安市宝塔区中心（宝塔山一带）36.60,109.49（WebSearch）；ENY 机场：Wikipedia（36°28′35″N 109°27′55″E）；已核实 CA1279（国航 C919，北京首都—延安，直飞，每日至少1班）",
  },
  {
    id: "golmud", nameZh: "格尔木", nameEn: "Golmud", country: "china", tier: "notable", zone: "cn-northwest", admin1Zh: "青海省", admin1En: "Qinghai",
    lon: 94.89, lat: 36.42,
    airport: { iata: "GOQ", nameZh: "格尔木机场", nameEn: "Golmud Airport", lon: 94.7861, lat: 36.4006 },
    source: "格尔木市中心 36.42,94.89（WebSearch：36°24′51″N 94°53′42″E）；GOQ 机场：Wikipedia（36°24′02″N 94°47′10″E），海拔2842m；已核实 TV9965/TV9966（西藏航空 A319，成都双流—格尔木，直飞不经停，约2h30–2h40，每周二/四/六）",
  },
  {
    id: "zhongwei", nameZh: "中卫", nameEn: "Zhongwei", country: "china", tier: "notable", zone: "cn-northwest", admin1Zh: "宁夏回族自治区", admin1En: "Ningxia",
    lon: 105.197, lat: 37.521,
    airport: { iata: "ZHY", nameZh: "中卫沙坡头机场", nameEn: "Zhongwei Shapotou Airport", lon: 105.1544, lat: 37.5728 },
    source: "中卫市中心 37.521,105.197（WebSearch）；ZHY 机场：Wikipedia（37°34′22″N 105°09′16″E）；WebSearch 核实北京是中卫机场通航以来长期存在的航点之一，但现有资料显示其航班多经西安/石家庄等枢纽以\"经西飞\"\"经石飞\"中转模式运营，未能核实到当前仍在运营、不经停的北京直飞航班，故本轮未收录航线；中卫另有包兰铁路/银西高铁，距银川约1小时车程",
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
    id: "reykjavik", nameZh: "雷克雅未克", nameEn: "Reykjavík", country: "iceland", tier: "capital", zone: "is-southwest", admin1Zh: "首都圈与西南", admin1En: "Capital Region & Southwest",
    lon: -21.9426, lat: 64.1466,
    airport: { iata: "RKV", nameZh: "雷克雅未克机场（国内）", nameEn: "Reykjavík Airport", lon: -21.9406, lat: 64.1300 },
    source: "雷克雅未克市中心 64.1466,-21.9426；RKV 国内机场：公开资料（国际航班用凯夫拉维克 KEF）",
  },
  {
    id: "keflavik", nameZh: "凯夫拉维克", nameEn: "Keflavík", country: "iceland", tier: "notable", zone: "is-southwest", admin1Zh: "首都圈与西南", admin1En: "Capital Region & Southwest",
    lon: -22.5624, lat: 64.0049,
    airport: { iata: "KEF", nameZh: "凯夫拉维克国际机场", nameEn: "Keflavík Int'l", lon: -22.6056, lat: 63.9850 },
    source: "凯夫拉维克镇 64.0049,-22.5624；KEF 机场：公开资料",
  },
  {
    id: "vik", nameZh: "维克", nameEn: "Vík í Mýrdal", country: "iceland", tier: "notable", zone: "is-south", admin1Zh: "南部海岸", admin1En: "South Coast",
    lon: -19.0060, lat: 63.4187,
    source: "维克（Vík í Mýrdal）63.4187,-19.0060：公开资料（无机场，南岸环岛公路上的小镇）",
  },
  {
    id: "hofn", nameZh: "赫本", nameEn: "Höfn", country: "iceland", tier: "notable", zone: "is-southeast", admin1Zh: "东南部", admin1En: "Southeast",
    lon: -15.2082, lat: 64.2539,
    airport: { iata: "HFN", nameZh: "赫本机场", nameEn: "Hornafjörður Airport", lon: -15.2272, lat: 64.2956 },
    source: "赫本（Höfn í Hornafirði）64.2539,-15.2082；HFN 机场：公开资料",
  },
  {
    id: "egilsstadir", nameZh: "埃伊尔斯塔济", nameEn: "Egilsstaðir", country: "iceland", tier: "notable", zone: "is-east", admin1Zh: "东部", admin1En: "East",
    lon: -14.3948, lat: 65.2669,
    airport: { iata: "EGS", nameZh: "埃伊尔斯塔济机场", nameEn: "Egilsstaðir Airport", lon: -14.4014, lat: 65.2833 },
    source: "埃伊尔斯塔济 65.2669,-14.3948；EGS 机场：公开资料",
  },
  {
    id: "akureyri", nameZh: "阿克雷里", nameEn: "Akureyri", country: "iceland", tier: "major", zone: "is-north", admin1Zh: "北部", admin1En: "North",
    lon: -18.1105, lat: 65.6839,
    airport: { iata: "AEY", nameZh: "阿克雷里机场", nameEn: "Akureyri Airport", lon: -18.0728, lat: 65.6600 },
    source: "阿克雷里 65.6839,-18.1105；AEY 机场：公开资料",
  },
  {
    id: "husavik", nameZh: "胡萨维克", nameEn: "Húsavík", country: "iceland", tier: "notable", zone: "is-north", admin1Zh: "北部", admin1En: "North",
    lon: -17.3389, lat: 66.0449,
    airport: { iata: "HZK", nameZh: "胡萨维克机场", nameEn: "Húsavík Airport", lon: -17.4260, lat: 65.9522 },
    source: "胡萨维克 66.0449,-17.3389；HZK 机场：公开资料",
  },
  {
    id: "isafjordur", nameZh: "伊萨菲厄泽", nameEn: "Ísafjörður", country: "iceland", tier: "notable", zone: "is-westfjords", admin1Zh: "西部峡湾", admin1En: "Westfjords",
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
    id: "oslo", nameZh: "奥斯陆", nameEn: "Oslo", country: "norway", tier: "capital", zone: "no-eastern", admin1Zh: "奥斯陆", admin1En: "Oslo",
    lon: 10.7522, lat: 59.9139,
    airport: { iata: "OSL", nameZh: "奥斯陆加勒穆恩机场", nameEn: "Oslo Gardermoen", lon: 11.1004, lat: 60.1939 },
    source: "奥斯陆市中心 59.9139,10.7522；OSL 机场：公开资料",
  },
  {
    id: "lillehammer", nameZh: "利勒哈默尔", nameEn: "Lillehammer", country: "norway", tier: "notable", zone: "no-eastern", admin1Zh: "内陆郡", admin1En: "Innlandet County",
    lon: 10.4662, lat: 61.1153,
    source: "利勒哈默尔 61.1153,10.4662：公开资料（无机场，铁路进入，1994 冬奥会举办地）",
  },
  {
    id: "kristiansand", nameZh: "克里斯蒂安桑", nameEn: "Kristiansand", country: "norway", tier: "notable", zone: "no-southern", admin1Zh: "阿格德尔郡", admin1En: "Agder County",
    lon: 7.9956, lat: 58.1467,
    airport: { iata: "KRS", nameZh: "谢维克机场", nameEn: "Kristiansand Airport, Kjevik", lon: 8.0853, lat: 58.2042 },
    source: "克里斯蒂安桑市中心 58.1467,7.9956；KRS 机场：公开资料",
  },
  {
    id: "stavanger", nameZh: "斯塔万格", nameEn: "Stavanger", country: "norway", tier: "major", zone: "no-western", admin1Zh: "罗加兰郡", admin1En: "Rogaland County",
    lon: 5.7331, lat: 58.9700,
    airport: { iata: "SVG", nameZh: "索拉机场", nameEn: "Stavanger Airport, Sola", lon: 5.6378, lat: 58.8767 },
    source: "斯塔万格市中心 58.9700,5.7331；SVG 机场：公开资料",
  },
  {
    id: "bergen", nameZh: "卑尔根", nameEn: "Bergen", country: "norway", tier: "major", zone: "no-western", admin1Zh: "韦斯特兰郡", admin1En: "Vestland County",
    lon: 5.3221, lat: 60.3913,
    airport: { iata: "BGO", nameZh: "弗莱斯兰机场", nameEn: "Bergen Airport, Flesland", lon: 5.2181, lat: 60.2934 },
    source: "卑尔根市中心 60.3913,5.3221；BGO 机场：公开资料",
  },
  {
    id: "alesund", nameZh: "奥勒松", nameEn: "Ålesund", country: "norway", tier: "notable", zone: "no-western", admin1Zh: "默勒-鲁姆斯达尔郡", admin1En: "Møre og Romsdal County",
    lon: 6.1495, lat: 62.4722,
    airport: { iata: "AES", nameZh: "维格拉机场", nameEn: "Ålesund Airport, Vigra", lon: 6.1197, lat: 62.5625 },
    source: "奥勒松市中心 62.4722,6.1495；AES 机场：公开资料",
  },
  {
    id: "trondheim", nameZh: "特隆赫姆", nameEn: "Trondheim", country: "norway", tier: "major", zone: "no-central", admin1Zh: "特伦德拉格郡", admin1En: "Trøndelag County",
    lon: 10.3951, lat: 63.4305,
    airport: { iata: "TRD", nameZh: "韦讷斯机场", nameEn: "Trondheim Airport, Værnes", lon: 10.9240, lat: 63.4578 },
    source: "特隆赫姆市中心 63.4305,10.3951；TRD 机场：公开资料",
  },
  {
    id: "bodo", nameZh: "博德", nameEn: "Bodø", country: "norway", tier: "notable", zone: "no-northern", admin1Zh: "诺尔兰郡", admin1En: "Nordland County",
    lon: 14.4049, lat: 67.2804,
    airport: { iata: "BOO", nameZh: "博德机场", nameEn: "Bodø Airport", lon: 14.3653, lat: 67.2692 },
    source: "博德市中心 67.2804,14.4049；BOO 机场：公开资料",
  },
  {
    id: "narvik", nameZh: "纳尔维克", nameEn: "Narvik", country: "norway", tier: "notable", zone: "no-northern", admin1Zh: "诺尔兰郡", admin1En: "Nordland County",
    lon: 17.4272, lat: 68.4385,
    source: "纳尔维克 68.4385,17.4272：公开资料（无就近机场，Ofoten 铁路终点、深水不冻港）",
  },
  {
    id: "tromso", nameZh: "特罗姆瑟", nameEn: "Tromsø", country: "norway", tier: "major", zone: "no-arctic", admin1Zh: "特罗姆斯郡", admin1En: "Troms County",
    lon: 18.9553, lat: 69.6492,
    airport: { iata: "TOS", nameZh: "朗内斯机场", nameEn: "Tromsø Airport, Langnes", lon: 18.9189, lat: 69.6833 },
    source: "特罗姆瑟市中心 69.6492,18.9553；TOS 机场：公开资料",
  },
  {
    id: "alta", nameZh: "阿尔塔", nameEn: "Alta", country: "norway", tier: "notable", zone: "no-arctic", admin1Zh: "芬马克郡", admin1En: "Finnmark County",
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
  // ===== 比利时 =====
  {
    id: "brussels", nameZh: "布鲁塞尔", nameEn: "Brussels", country: "belgium", tier: "capital", zone: "be-brussels",
    lon: 4.3517, lat: 50.8503,
    airport: { iata: "BRU", nameZh: "布鲁塞尔机场（扎芬特姆）", nameEn: "Brussels Airport (Zaventem)", lon: 4.4844, lat: 50.9014 },
    source: "布鲁塞尔市中心 50.8503,4.3517；BRU 机场：公开资料",
  },
  {
    id: "antwerp", nameZh: "安特卫普", nameEn: "Antwerp", country: "belgium", tier: "major", zone: "be-antwerp",
    lon: 4.4025, lat: 51.2194,
    airport: { iata: "ANR", nameZh: "安特卫普机场（德尔讷）", nameEn: "Antwerp Airport (Deurne)", lon: 4.4603, lat: 51.1892 },
    source: "安特卫普市中心 51.2194,4.4025；ANR 机场：公开资料",
  },
  {
    id: "bruges", nameZh: "布鲁日", nameEn: "Bruges", country: "belgium", tier: "major", zone: "be-west-flanders",
    lon: 3.2247, lat: 51.2093,
    airport: { iata: "OST", nameZh: "奥斯坦德—布鲁日国际机场", nameEn: "Ostend-Bruges International Airport", lon: 2.8642, lat: 51.1989 },
    source: "布鲁日市中心 51.2093,3.2247；OST 机场：公开资料",
  },
  {
    id: "ghent", nameZh: "根特", nameEn: "Ghent", country: "belgium", tier: "notable", zone: "be-east-flanders",
    lon: 3.7174, lat: 51.0543,
    airport: { iata: "BRU", nameZh: "布鲁塞尔机场（扎芬特姆）", nameEn: "Brussels Airport (Zaventem)", lon: 4.4844, lat: 50.9014 },
    source: "根特市中心 51.0543,3.7174；本地无商业机场，最近机场为布鲁塞尔机场（距市区约55km）：公开资料",
  },
  {
    id: "liege", nameZh: "列日", nameEn: "Liège", country: "belgium", tier: "notable", zone: "be-liege",
    lon: 5.5731, lat: 50.6326,
    airport: { iata: "LGG", nameZh: "列日机场", nameEn: "Liège Airport", lon: 5.4432, lat: 50.6374 },
    source: "列日市中心 50.6326,5.5731；LGG 机场：公开资料",
  },
  {
    id: "namur", nameZh: "那慕尔", nameEn: "Namur", country: "belgium", tier: "notable", zone: "be-namur",
    lon: 4.8657, lat: 50.4669,
    airport: { iata: "CRL", nameZh: "布鲁塞尔南沙勒罗瓦机场", nameEn: "Brussels South Charleroi Airport", lon: 4.4538, lat: 50.4592 },
    source: "那慕尔市中心 50.4669,4.8657；本地无商业机场，最近机场为布鲁塞尔南沙勒罗瓦机场（距市区约35km）：公开资料",
  },
  {
    id: "leuven", nameZh: "鲁汶", nameEn: "Leuven", country: "belgium", tier: "notable", zone: "be-flemish-brabant",
    lon: 4.7011, lat: 50.8798,
    airport: { iata: "BRU", nameZh: "布鲁塞尔机场（扎芬特姆）", nameEn: "Brussels Airport (Zaventem)", lon: 4.4844, lat: 50.9014 },
    source: "鲁汶市中心 50.8798,4.7011；本地无商业机场，最近机场为布鲁塞尔机场（距市区约25km）：公开资料",
  },
  {
    id: "mons", nameZh: "蒙斯", nameEn: "Mons", country: "belgium", tier: "notable", zone: "be-hainaut",
    lon: 3.9520, lat: 50.4542,
    airport: { iata: "CRL", nameZh: "布鲁塞尔南沙勒罗瓦机场", nameEn: "Brussels South Charleroi Airport", lon: 4.4538, lat: 50.4592 },
    source: "蒙斯市中心 50.4542,3.9520；本地无商业机场，最近机场为布鲁塞尔南沙勒罗瓦机场（距市区约20km）：公开资料",
  },
  {
    id: "dinant", nameZh: "迪南", nameEn: "Dinant", country: "belgium", tier: "notable", zone: "be-namur",
    lon: 4.9127, lat: 50.2603,
    airport: { iata: "CRL", nameZh: "布鲁塞尔南沙勒罗瓦机场", nameEn: "Brussels South Charleroi Airport", lon: 4.4538, lat: 50.4592 },
    source: "迪南市中心 50.2603,4.9127；本地无商业机场，最近机场为布鲁塞尔南沙勒罗瓦机场（距市区约50km）：公开资料",
  },
  {
    id: "ostend", nameZh: "奥斯坦德", nameEn: "Ostend", country: "belgium", tier: "notable", zone: "be-west-flanders",
    lon: 2.9265, lat: 51.2154,
    airport: { iata: "OST", nameZh: "奥斯坦德—布鲁日国际机场", nameEn: "Ostend-Bruges International Airport", lon: 2.8642, lat: 51.1989 },
    source: "奥斯坦德市中心 51.2154,2.9265；OST 机场：公开资料",
  },
  {
    id: "spa", nameZh: "斯帕", nameEn: "Spa", country: "belgium", tier: "notable", zone: "be-liege",
    lon: 5.8642, lat: 50.4914,
    airport: { iata: "LGG", nameZh: "列日机场", nameEn: "Liège Airport", lon: 5.4432, lat: 50.6374 },
    source: "斯帕市中心 50.4914,5.8642；本地无商业机场，最近机场为列日机场（距市区约35km）：公开资料",
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
  // ===== 爱尔兰 =====
  {
    id: "dublin", nameZh: "都柏林", nameEn: "Dublin", country: "ireland", tier: "capital", zone: "ie-leinster",
    lon: -6.2603, lat: 53.3498,
    airport: { iata: "DUB", nameZh: "都柏林机场", nameEn: "Dublin Airport", lon: -6.2701, lat: 53.4213 },
    source: "都柏林市中心 53.3498,-6.2603；DUB 机场：公开资料",
  },
  {
    id: "kilkenny", nameZh: "基尔肯尼", nameEn: "Kilkenny", country: "ireland", tier: "notable", zone: "ie-leinster",
    lon: -7.2448, lat: 52.6541,
    airport: { iata: "DUB", nameZh: "都柏林机场", nameEn: "Dublin Airport", lon: -6.2701, lat: 53.4213 },
    source: "基尔肯尼市中心 52.6541,-7.2448；本地无商业机场，最近机场为都柏林机场（距市区约120km）：公开资料",
  },
  {
    id: "cork", nameZh: "科克", nameEn: "Cork", country: "ireland", tier: "major", zone: "ie-munster",
    lon: -8.4756, lat: 51.8985,
    airport: { iata: "ORK", nameZh: "科克机场", nameEn: "Cork Airport", lon: -8.4911, lat: 51.8413 },
    source: "科克市中心 51.8985,-8.4756；ORK 机场：公开资料",
  },
  {
    id: "killarney", nameZh: "基拉尼", nameEn: "Killarney", country: "ireland", tier: "notable", zone: "ie-munster",
    lon: -9.5044, lat: 52.0599,
    airport: { iata: "KIR", nameZh: "凯里机场", nameEn: "Kerry Airport", lon: -9.5238, lat: 52.1809 },
    source: "基拉尼市中心 52.0599,-9.5044；KIR 机场（距市区约15km）：公开资料",
  },
  {
    id: "dingle", nameZh: "丁格尔", nameEn: "Dingle", country: "ireland", tier: "notable", zone: "ie-munster",
    lon: -10.2672, lat: 52.1408,
    airport: { iata: "KIR", nameZh: "凯里机场", nameEn: "Kerry Airport", lon: -9.5238, lat: 52.1809 },
    source: "丁格尔市中心 52.1408,-10.2672；本地无商业机场，最近机场为凯里机场（距市区约50km）：公开资料",
  },
  {
    id: "waterford", nameZh: "沃特福德", nameEn: "Waterford", country: "ireland", tier: "notable", zone: "ie-munster",
    lon: -7.1101, lat: 52.2593,
    airport: { iata: "ORK", nameZh: "科克机场", nameEn: "Cork Airport", lon: -8.4911, lat: 51.8413 },
    source: "沃特福德市中心 52.2593,-7.1101；本地沃特福德机场航班班次极少，通常经科克机场（距市区约110km）或都柏林机场中转：公开资料",
  },
  {
    id: "limerick", nameZh: "利默里克", nameEn: "Limerick", country: "ireland", tier: "major", zone: "ie-munster",
    lon: -8.6267, lat: 52.6638,
    airport: { iata: "SNN", nameZh: "香农机场", nameEn: "Shannon Airport", lon: -8.9248, lat: 52.7019 },
    source: "利默里克市中心 52.6638,-8.6267；SNN 机场（距市区约25km）：公开资料",
  },
  {
    id: "galway", nameZh: "戈尔韦", nameEn: "Galway", country: "ireland", tier: "major", zone: "ie-connacht",
    lon: -9.0568, lat: 53.2707,
    airport: { iata: "SNN", nameZh: "香农机场", nameEn: "Shannon Airport", lon: -8.9248, lat: 52.7019 },
    source: "戈尔韦市中心 53.2707,-9.0568；本地戈尔韦机场已停止定期客运，最近机场为香农机场（距市区约100km）：公开资料",
  },
  {
    id: "westport", nameZh: "韦斯特波特", nameEn: "Westport", country: "ireland", tier: "notable", zone: "ie-connacht",
    lon: -9.5167, lat: 53.8000,
    airport: { iata: "NOC", nameZh: "爱尔兰西部诺克机场", nameEn: "Ireland West Airport Knock", lon: -8.8185, lat: 53.9103 },
    source: "韦斯特波特市中心 53.8000,-9.5167；NOC 机场（距市区约50km）：公开资料",
  },
  {
    id: "donegal-town", nameZh: "多尼戈尔镇", nameEn: "Donegal Town", country: "ireland", tier: "notable", zone: "ie-ulster",
    lon: -8.1097, lat: 54.6539,
    airport: { iata: "CFN", nameZh: "多尼戈尔机场（卡里克芬）", nameEn: "Donegal Airport (Carrickfinn)", lon: -8.3405, lat: 55.0442 },
    source: "多尼戈尔镇市中心 54.6539,-8.1097；CFN 机场（距市区约65km）：公开资料",
  },
  // ===== 丹麦 =====
  {
    id: "copenhagen", nameZh: "哥本哈根", nameEn: "Copenhagen", country: "denmark", tier: "capital", zone: "dk-hovedstaden", admin1Zh: "首都大区", admin1En: "Capital Region",
    lon: 12.5683, lat: 55.6761,
    airport: { iata: "CPH", nameZh: "哥本哈根机场", nameEn: "Copenhagen Airport", lon: 12.6476, lat: 55.6180 },
    source: "哥本哈根市中心 55.6761,12.5683；CPH 机场：公开资料",
  },
  {
    id: "helsingoer", nameZh: "赫尔辛格", nameEn: "Helsingør", country: "denmark", tier: "notable", zone: "dk-hovedstaden", admin1Zh: "首都大区", admin1En: "Capital Region",
    lon: 12.6136, lat: 56.0360,
    airport: { iata: "CPH", nameZh: "哥本哈根机场", nameEn: "Copenhagen Airport", lon: 12.6476, lat: 55.6180 },
    source: "赫尔辛格市中心 56.0360,12.6136；本地无商业机场，最近机场为哥本哈根机场（距市区约60km）：公开资料",
  },
  {
    id: "roskilde", nameZh: "罗斯基勒", nameEn: "Roskilde", country: "denmark", tier: "notable", zone: "dk-sjaelland", admin1Zh: "西兰大区", admin1En: "Region Zealand",
    lon: 12.0803, lat: 55.6415,
    airport: { iata: "CPH", nameZh: "哥本哈根机场", nameEn: "Copenhagen Airport", lon: 12.6476, lat: 55.6180 },
    source: "罗斯基勒市中心 55.6415,12.0803；本地罗斯基勒机场无定期客运航班，最近有定期航班的机场为哥本哈根机场（距市区约35km）：公开资料",
  },
  {
    id: "odense", nameZh: "欧登塞", nameEn: "Odense", country: "denmark", tier: "major", zone: "dk-syddanmark", admin1Zh: "南丹麦大区", admin1En: "Region of Southern Denmark",
    lon: 10.4024, lat: 55.4038,
    airport: { iata: "BLL", nameZh: "比隆机场", nameEn: "Billund Airport", lon: 9.1517, lat: 55.7403 },
    source: "欧登塞市中心 55.4038,10.4024；本地欧登塞机场无定期客运航班，最近有定期航班的机场为比隆机场（距市区约75km）：公开资料",
  },
  {
    id: "esbjerg", nameZh: "埃斯比约", nameEn: "Esbjerg", country: "denmark", tier: "notable", zone: "dk-syddanmark", admin1Zh: "南丹麦大区", admin1En: "Region of Southern Denmark",
    lon: 8.4594, lat: 55.4765,
    airport: { iata: "BLL", nameZh: "比隆机场", nameEn: "Billund Airport", lon: 9.1517, lat: 55.7403 },
    source: "埃斯比约市中心 55.4765,8.4594；本地埃斯比约机场以海上石油平台直升机业务为主，定期客运航班很少，最近有定期客运航班的机场为比隆机场（距市区约45km）：公开资料",
  },
  {
    id: "ribe", nameZh: "里伯", nameEn: "Ribe", country: "denmark", tier: "notable", zone: "dk-syddanmark", admin1Zh: "南丹麦大区", admin1En: "Region of Southern Denmark",
    lon: 8.7667, lat: 55.3300,
    airport: { iata: "BLL", nameZh: "比隆机场", nameEn: "Billund Airport", lon: 9.1517, lat: 55.7403 },
    source: "里伯市中心 55.3300,8.7667；本地无商业机场，最近机场为比隆机场（距市区约45km）：公开资料",
  },
  {
    id: "billund", nameZh: "比隆", nameEn: "Billund", country: "denmark", tier: "notable", zone: "dk-syddanmark", admin1Zh: "南丹麦大区", admin1En: "Region of Southern Denmark",
    lon: 9.1216, lat: 55.7308,
    airport: { iata: "BLL", nameZh: "比隆机场", nameEn: "Billund Airport", lon: 9.1517, lat: 55.7403 },
    source: "比隆市中心 55.7308,9.1216；BLL 机场：公开资料",
  },
  {
    id: "aarhus", nameZh: "奥胡斯", nameEn: "Aarhus", country: "denmark", tier: "major", zone: "dk-midtjylland", admin1Zh: "中日德兰大区", admin1En: "Central Denmark Region",
    lon: 10.2134, lat: 56.1496,
    airport: { iata: "AAR", nameZh: "奥胡斯机场", nameEn: "Aarhus Airport", lon: 10.6190, lat: 56.3000 },
    source: "奥胡斯市中心 56.1496,10.2134；AAR 机场（距市区约35km）：公开资料",
  },
  {
    id: "silkeborg", nameZh: "锡尔克堡", nameEn: "Silkeborg", country: "denmark", tier: "notable", zone: "dk-midtjylland", admin1Zh: "中日德兰大区", admin1En: "Central Denmark Region",
    lon: 9.5451, lat: 56.1697,
    airport: { iata: "AAR", nameZh: "奥胡斯机场", nameEn: "Aarhus Airport", lon: 10.6190, lat: 56.3000 },
    source: "锡尔克堡市中心 56.1697,9.5451；本地无商业机场，最近机场为奥胡斯机场（距市区约55km）：公开资料",
  },
  {
    id: "aalborg", nameZh: "奥尔堡", nameEn: "Aalborg", country: "denmark", tier: "major", zone: "dk-nordjylland", admin1Zh: "北日德兰大区", admin1En: "North Denmark Region",
    lon: 9.9217, lat: 57.0488,
    airport: { iata: "AAL", nameZh: "奥尔堡机场", nameEn: "Aalborg Airport", lon: 9.8492, lat: 57.0928 },
    source: "奥尔堡市中心 57.0488,9.9217；AAL 机场：公开资料",
  },
  {
    id: "skagen", nameZh: "斯卡恩", nameEn: "Skagen", country: "denmark", tier: "notable", zone: "dk-nordjylland", admin1Zh: "北日德兰大区", admin1En: "North Denmark Region",
    lon: 10.5844, lat: 57.7208,
    airport: { iata: "AAL", nameZh: "奥尔堡机场", nameEn: "Aalborg Airport", lon: 9.8492, lat: 57.0928 },
    source: "斯卡恩市中心 57.7208,10.5844；本地无商业机场，最近机场为奥尔堡机场（距市区约100km）：公开资料",
  },
  {
    id: "roenne", nameZh: "龙讷", nameEn: "Rønne", country: "denmark", tier: "notable", zone: "dk-bornholm", admin1Zh: "首都大区", admin1En: "Capital Region",
    lon: 14.7069, lat: 55.0997,
    airport: { iata: "RNN", nameZh: "博恩霍尔姆机场", nameEn: "Bornholm Airport", lon: 14.7594, lat: 55.0633 },
    source: "龙讷市中心 55.0997,14.7069；RNN 机场（距市区约5km）：公开资料",
  },
  // ===== 瑞典 =====
  {
    id: "stockholm", nameZh: "斯德哥尔摩", nameEn: "Stockholm", country: "sweden", tier: "capital", zone: "se-svealand", admin1Zh: "斯德哥尔摩省", admin1En: "Stockholm County",
    lon: 18.0686, lat: 59.3293,
    airport: { iata: "ARN", nameZh: "斯德哥尔摩阿兰达机场", nameEn: "Stockholm Arlanda Airport", lon: 17.9186, lat: 59.6519 },
    source: "斯德哥尔摩市中心 59.3293,18.0686；ARN 机场：公开资料",
  },
  {
    id: "uppsala", nameZh: "乌普萨拉", nameEn: "Uppsala", country: "sweden", tier: "notable", zone: "se-svealand", admin1Zh: "乌普萨拉省", admin1En: "Uppsala County",
    lon: 17.6389, lat: 59.8586,
    airport: { iata: "ARN", nameZh: "斯德哥尔摩阿兰达机场", nameEn: "Stockholm Arlanda Airport", lon: 17.9186, lat: 59.6519 },
    source: "乌普萨拉市中心 59.8586,17.6389；本地乌普萨拉机场无定期客运航班，最近有定期航班的机场为阿兰达机场（距市区约40km）：公开资料",
  },
  {
    id: "gothenburg", nameZh: "哥德堡", nameEn: "Gothenburg", country: "sweden", tier: "major", zone: "se-gotaland", admin1Zh: "西约塔兰省", admin1En: "Västra Götaland County",
    lon: 11.9746, lat: 57.7089,
    airport: { iata: "GOT", nameZh: "哥德堡兰德维特机场", nameEn: "Göteborg Landvetter Airport", lon: 12.2798, lat: 57.6628 },
    source: "哥德堡市中心 57.7089,11.9746；GOT 机场（距市区约25km）：公开资料",
  },
  {
    id: "malmoe", nameZh: "马尔默", nameEn: "Malmö", country: "sweden", tier: "major", zone: "se-gotaland", admin1Zh: "斯科讷省", admin1En: "Skåne County",
    lon: 13.0038, lat: 55.6050,
    airport: { iata: "MMX", nameZh: "马尔默机场", nameEn: "Malmö Airport", lon: 13.3762, lat: 55.5363 },
    source: "马尔默市中心 55.6050,13.0038；MMX 机场（距市区约28km）：公开资料",
  },
  {
    id: "visby", nameZh: "维斯比", nameEn: "Visby", country: "sweden", tier: "notable", zone: "se-gotaland", admin1Zh: "哥特兰省", admin1En: "Gotland County",
    lon: 18.2948, lat: 57.6348,
    airport: { iata: "VBY", nameZh: "维斯比机场", nameEn: "Visby Airport", lon: 18.3462, lat: 57.6628 },
    source: "维斯比市中心 57.6348,18.2948；VBY 机场（距市区约4km）：公开资料",
  },
  {
    id: "karlskrona", nameZh: "卡尔斯克鲁纳", nameEn: "Karlskrona", country: "sweden", tier: "notable", zone: "se-gotaland", admin1Zh: "布莱金厄省", admin1En: "Blekinge County",
    lon: 15.5869, lat: 56.1612,
    airport: { iata: "RNB", nameZh: "龙讷比机场", nameEn: "Ronneby Airport", lon: 15.2649, lat: 56.2666 },
    source: "卡尔斯克鲁纳市中心 56.1612,15.5869；RNB 机场（距市区约30km）：公开资料",
  },
  {
    id: "kalmar", nameZh: "卡尔马", nameEn: "Kalmar", country: "sweden", tier: "notable", zone: "se-gotaland", admin1Zh: "卡尔马省", admin1En: "Kalmar County",
    lon: 16.3566, lat: 56.6634,
    airport: { iata: "KLR", nameZh: "卡尔马机场", nameEn: "Kalmar Airport", lon: 16.2875, lat: 56.6855 },
    source: "卡尔马市中心 56.6634,16.3566；KLR 机场（距市区约6km）：公开资料",
  },
  {
    id: "kiruna", nameZh: "基律纳", nameEn: "Kiruna", country: "sweden", tier: "notable", zone: "se-norrland", admin1Zh: "北博滕省", admin1En: "Norrbotten County",
    lon: 20.2253, lat: 67.8558,
    airport: { iata: "KRN", nameZh: "基律纳机场", nameEn: "Kiruna Airport", lon: 20.3369, lat: 67.8220 },
    source: "基律纳市中心 67.8558,20.2253；KRN 机场（距市区约8km）：公开资料",
  },
  {
    id: "lulea", nameZh: "吕勒奥", nameEn: "Luleå", country: "sweden", tier: "notable", zone: "se-norrland", admin1Zh: "北博滕省", admin1En: "Norrbotten County",
    lon: 22.1567, lat: 65.5848,
    airport: { iata: "LLA", nameZh: "吕勒奥机场", nameEn: "Luleå Airport", lon: 22.1220, lat: 65.5438 },
    source: "吕勒奥市中心 65.5848,22.1567；LLA 机场（距市区约8km）：公开资料",
  },
  {
    id: "harnosand", nameZh: "海讷桑德", nameEn: "Härnösand", country: "sweden", tier: "notable", zone: "se-norrland", admin1Zh: "西诺尔兰省", admin1En: "Västernorrland County",
    lon: 17.9382, lat: 62.6324,
    airport: { iata: "SDL", nameZh: "松兹瓦尔—蒂姆罗机场", nameEn: "Sundsvall-Timrå Airport", lon: 17.4436, lat: 62.5285 },
    source: "海讷桑德市中心 62.6324,17.9382；本地无商业机场，最近机场为松兹瓦尔—蒂姆罗机场（距市区约45km）：公开资料",
  },
  {
    id: "are", nameZh: "奥勒", nameEn: "Åre", country: "sweden", tier: "notable", zone: "se-norrland", admin1Zh: "耶姆特兰省", admin1En: "Jämtland County",
    lon: 13.0817, lat: 63.3986,
    airport: { iata: "OSD", nameZh: "奥勒—厄斯特松德机场", nameEn: "Åre Östersund Airport", lon: 14.5008, lat: 63.1936 },
    source: "奥勒市中心 63.3986,13.0817；OSD 机场（距市区约65km）：公开资料",
  },
  // ===== 芬兰 =====
  {
    id: "helsinki", nameZh: "赫尔辛基", nameEn: "Helsinki", country: "finland", tier: "capital", zone: "fi-uusimaa", admin1Zh: "乌西马区", admin1En: "Uusimaa",
    lon: 24.9384, lat: 60.1699,
    airport: { iata: "HEL", nameZh: "赫尔辛基万塔机场", nameEn: "Helsinki-Vantaa Airport", lon: 24.9633, lat: 60.3172 },
    source: "赫尔辛基市中心 60.1699,24.9384；HEL 机场：公开资料",
  },
  {
    id: "turku", nameZh: "图尔库", nameEn: "Turku", country: "finland", tier: "major", zone: "fi-lounais-suomi", admin1Zh: "西南芬兰区", admin1En: "Southwest Finland",
    lon: 22.2666, lat: 60.4518,
    airport: { iata: "TKU", nameZh: "图尔库机场", nameEn: "Turku Airport", lon: 22.2628, lat: 60.5141 },
    source: "图尔库市中心 60.4518,22.2666；TKU 机场（距市区约8km）：公开资料",
  },
  {
    id: "mariehamn", nameZh: "玛丽港", nameEn: "Mariehamn", country: "finland", tier: "notable", zone: "fi-lounais-suomi", admin1Zh: "奥兰区", admin1En: "Åland",
    lon: 19.9348, lat: 60.0973,
    airport: { iata: "MHQ", nameZh: "玛丽港机场", nameEn: "Mariehamn Airport", lon: 19.8983, lat: 60.1222 },
    source: "玛丽港市中心 60.0973,19.9348；MHQ 机场（距市区约3km）：公开资料",
  },
  {
    id: "tampere", nameZh: "坦佩雷", nameEn: "Tampere", country: "finland", tier: "major", zone: "fi-jarvi-suomi", admin1Zh: "皮尔坎马区", admin1En: "Pirkanmaa",
    lon: 23.7610, lat: 61.4978,
    airport: { iata: "TMP", nameZh: "坦佩雷—皮尔卡拉机场", nameEn: "Tampere-Pirkkala Airport", lon: 23.6044, lat: 61.4141 },
    source: "坦佩雷市中心 61.4978,23.7610；TMP 机场（距市区约17km）：公开资料",
  },
  {
    id: "jyvaskyla", nameZh: "于韦斯屈莱", nameEn: "Jyväskylä", country: "finland", tier: "notable", zone: "fi-jarvi-suomi", admin1Zh: "中芬兰区", admin1En: "Central Finland",
    lon: 25.7473, lat: 62.2426,
    airport: { iata: "JYV", nameZh: "于韦斯屈莱机场", nameEn: "Jyväskylä Airport", lon: 25.6783, lat: 62.3992 },
    source: "于韦斯屈莱市中心 62.2426,25.7473；JYV 机场（距市区约20km）：公开资料",
  },
  {
    id: "savonlinna", nameZh: "萨翁林纳", nameEn: "Savonlinna", country: "finland", tier: "notable", zone: "fi-jarvi-suomi", admin1Zh: "南萨沃区", admin1En: "South Savo",
    lon: 28.8783, lat: 61.8681,
    airport: { iata: "SVL", nameZh: "萨翁林纳机场", nameEn: "Savonlinna Airport", lon: 28.9450, lat: 61.9430 },
    source: "萨翁林纳市中心 61.8681,28.8783；SVL 机场（距市区约15km）：公开资料",
  },
  {
    id: "kuopio", nameZh: "库奥皮奥", nameEn: "Kuopio", country: "finland", tier: "notable", zone: "fi-jarvi-suomi", admin1Zh: "北萨沃区", admin1En: "North Savo",
    lon: 27.6783, lat: 62.8924,
    airport: { iata: "KUO", nameZh: "库奥皮奥机场", nameEn: "Kuopio Airport", lon: 27.7979, lat: 63.0072 },
    source: "库奥皮奥市中心 62.8924,27.6783；KUO 机场（距市区约15km）：公开资料",
  },
  {
    id: "oulu", nameZh: "奥卢", nameEn: "Oulu", country: "finland", tier: "major", zone: "fi-pohjois-suomi", admin1Zh: "北博滕区", admin1En: "North Ostrobothnia",
    lon: 25.4651, lat: 65.0121,
    airport: { iata: "OUL", nameZh: "奥卢机场", nameEn: "Oulu Airport", lon: 25.3546, lat: 64.9301 },
    source: "奥卢市中心 65.0121,25.4651；OUL 机场（距市区约15km）：公开资料",
  },
  {
    id: "rovaniemi", nameZh: "罗瓦涅米", nameEn: "Rovaniemi", country: "finland", tier: "notable", zone: "fi-pohjois-suomi", admin1Zh: "拉普兰区", admin1En: "Lapland",
    lon: 25.7294, lat: 66.5039,
    airport: { iata: "RVN", nameZh: "罗瓦涅米机场", nameEn: "Rovaniemi Airport", lon: 25.8304, lat: 66.5648 },
    source: "罗瓦涅米市中心 66.5039,25.7294；RVN 机场（距市区约10km）：公开资料",
  },
  {
    id: "kuusamo", nameZh: "库萨莫", nameEn: "Kuusamo", country: "finland", tier: "notable", zone: "fi-pohjois-suomi", admin1Zh: "北博滕区", admin1En: "North Ostrobothnia",
    lon: 29.1833, lat: 65.9667,
    airport: { iata: "KAO", nameZh: "库萨莫机场", nameEn: "Kuusamo Airport", lon: 29.2394, lat: 65.9878 },
    source: "库萨莫市中心 65.9667,29.1833；KAO 机场（距市区约5km）：公开资料",
  },
  {
    id: "inari", nameZh: "伊纳里", nameEn: "Inari", country: "finland", tier: "notable", zone: "fi-pohjois-suomi", admin1Zh: "拉普兰区", admin1En: "Lapland",
    lon: 27.0272, lat: 68.9061,
    airport: { iata: "IVL", nameZh: "伊瓦洛机场", nameEn: "Ivalo Airport", lon: 27.4053, lat: 68.6072 },
    source: "伊纳里村中心 68.9061,27.0272；IVL 机场（距市区约40km）：公开资料",
  },
  // ===== 卢森堡 =====
  {
    id: "luxembourg-city", nameZh: "卢森堡市", nameEn: "Luxembourg City", country: "luxembourg", tier: "capital", zone: "lu-gutland",
    lon: 6.1319, lat: 49.6117,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "卢森堡市中心 49.6117,6.1319；LUX 机场（距市区约6km）：公开资料",
  },
  {
    id: "esch-sur-alzette", nameZh: "埃施阿尔泽特", nameEn: "Esch-sur-Alzette", country: "luxembourg", tier: "major", zone: "lu-gutland",
    lon: 5.9806, lat: 49.4958,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "埃施阿尔泽特市中心 49.4958,5.9806；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约20km）：公开资料",
  },
  {
    id: "echternach", nameZh: "埃希特纳赫", nameEn: "Echternach", country: "luxembourg", tier: "notable", zone: "lu-gutland",
    lon: 6.4181, lat: 49.8114,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "埃希特纳赫市中心 49.8114,6.4181；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约30km）：公开资料",
  },
  {
    id: "remich", nameZh: "雷米希", nameEn: "Remich", country: "luxembourg", tier: "notable", zone: "lu-gutland",
    lon: 6.3667, lat: 49.5433,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "雷米希市中心 49.5433,6.3667；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约20km）：公开资料",
  },
  {
    id: "diekirch", nameZh: "迪基希", nameEn: "Diekirch", country: "luxembourg", tier: "notable", zone: "lu-oesling",
    lon: 6.1594, lat: 49.8683,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "迪基希市中心 49.8683,6.1594；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约35km）：公开资料",
  },
  {
    id: "ettelbruck", nameZh: "埃特尔布吕克", nameEn: "Ettelbruck", country: "luxembourg", tier: "notable", zone: "lu-oesling",
    lon: 6.1039, lat: 49.8486,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "埃特尔布吕克市中心 49.8486,6.1039；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约35km）：公开资料",
  },
  {
    id: "vianden", nameZh: "维安登", nameEn: "Vianden", country: "luxembourg", tier: "notable", zone: "lu-oesling",
    lon: 6.2050, lat: 49.9350,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "维安登市中心 49.9350,6.2050；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约45km）：公开资料",
  },
  {
    id: "clervaux", nameZh: "克莱尔沃", nameEn: "Clervaux", country: "luxembourg", tier: "notable", zone: "lu-oesling",
    lon: 6.0328, lat: 50.0553,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "克莱尔沃市中心 50.0553,6.0328；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约55km）：公开资料",
  },
  {
    id: "esch-sur-sure", nameZh: "埃施叙尔苏尔", nameEn: "Esch-sur-Sûre", country: "luxembourg", tier: "notable", zone: "lu-oesling",
    lon: 5.9167, lat: 49.9167,
    airport: { iata: "LUX", nameZh: "卢森堡芬德尔机场", nameEn: "Luxembourg Findel Airport", lon: 6.2044, lat: 49.6233 },
    source: "埃施叙尔苏尔市中心 49.9167,5.9167；本地无商业机场，最近机场为卢森堡芬德尔机场（距市区约45km）：公开资料",
  },

  // ── 泰国 ──────────────────────────────────────────────
  {
    id: "bangkok", nameZh: "曼谷", nameEn: "Bangkok", country: "thailand", tier: "capital", zone: "th-bangkok",
    lon: 100.5018, lat: 13.7563,
    airport: { iata: "BKK", nameZh: "素万那普机场", nameEn: "Suvarnabhumi Airport", lon: 100.7501, lat: 13.6900 },
    source: "曼谷市中心 13.7563,100.5018；BKK 机场：公开资料（国内廉航多用廊曼机场 DMK，本表统一列国际枢纽素万那普）",
  },
  {
    id: "chiang-mai", nameZh: "清迈", nameEn: "Chiang Mai", country: "thailand", tier: "major", zone: "th-north",
    lon: 98.9853, lat: 18.7883,
    airport: { iata: "CNX", nameZh: "清迈国际机场", nameEn: "Chiang Mai International", lon: 98.9626, lat: 18.7669 },
    source: "清迈古城一带 18.7883,98.9853；CNX 机场：公开资料",
  },
  {
    id: "phuket", nameZh: "普吉岛", nameEn: "Phuket", country: "thailand", tier: "major", zone: "th-south",
    lon: 98.3923, lat: 7.8804,
    airport: { iata: "HKT", nameZh: "普吉国际机场", nameEn: "Phuket International", lon: 98.3169, lat: 8.1132 },
    source: "普吉镇一带 7.8804,98.3923；HKT 机场：公开资料",
  },
  {
    id: "krabi", nameZh: "甲米", nameEn: "Krabi", country: "thailand", tier: "notable", zone: "th-south",
    lon: 98.9063, lat: 8.0863,
    airport: { iata: "KBV", nameZh: "甲米国际机场", nameEn: "Krabi International", lon: 98.9863, lat: 8.0991 },
    source: "甲米镇一带 8.0863,98.9063；KBV 机场：公开资料",
  },
  {
    id: "pattaya", nameZh: "芭提雅", nameEn: "Pattaya", country: "thailand", tier: "notable", zone: "th-east",
    lon: 100.8825, lat: 12.9236,
    airport: { iata: "UTP", nameZh: "乌达堡国际机场", nameEn: "U-Tapao International", lon: 101.0050, lat: 12.6799 },
    source: "芭提雅市中心 12.9236,100.8825；UTP 机场（距市区约30km）：公开资料",
  },
  {
    id: "chiang-rai", nameZh: "清莱", nameEn: "Chiang Rai", country: "thailand", tier: "notable", zone: "th-north",
    lon: 99.8406, lat: 19.9105,
    airport: { iata: "CEI", nameZh: "清莱国际机场", nameEn: "Chiang Rai International", lon: 99.8828, lat: 19.9523 },
    source: "清莱市中心 19.9105,99.8406；CEI 机场：公开资料",
  },
  {
    id: "koh-samui", nameZh: "苏梅岛", nameEn: "Koh Samui", country: "thailand", tier: "notable", zone: "th-south",
    lon: 100.0136, lat: 9.5120,
    airport: { iata: "USM", nameZh: "苏梅机场", nameEn: "Samui Airport", lon: 100.0625, lat: 9.5478 },
    source: "查汶一带 9.5120,100.0136；USM 机场为曼谷航空私有机场：公开资料",
  },
  {
    id: "ayutthaya", nameZh: "大城", nameEn: "Ayutthaya", country: "thailand", tier: "notable", zone: "th-central",
    lon: 100.5648, lat: 14.3532,
    airport: { iata: "DMK", nameZh: "廊曼国际机场", nameEn: "Don Mueang International", lon: 100.6069, lat: 13.9126 },
    source: "大城历史公园一带 14.3532,100.5648；本地无商业机场，最近机场为曼谷廊曼国际机场（距市区约60km，多经陆路火车往返）：公开资料",
  },
  {
    id: "sukhothai", nameZh: "素可泰", nameEn: "Sukhothai", country: "thailand", tier: "notable", zone: "th-north",
    lon: 99.8265, lat: 17.0072,
    airport: { iata: "THS", nameZh: "素可泰机场", nameEn: "Sukhothai Airport", lon: 99.8161, lat: 17.2382 },
    source: "新素可泰市中心 17.0072,99.8265；THS 机场为曼谷航空私有机场（距历史公园约27km）：公开资料",
  },
  {
    id: "hua-hin", nameZh: "华欣", nameEn: "Hua Hin", country: "thailand", tier: "notable", zone: "th-central",
    lon: 99.9577, lat: 12.5684,
    airport: { iata: "HHQ", nameZh: "华欣机场", nameEn: "Hua Hin Airport", lon: 99.9539, lat: 12.6360 },
    source: "华欣市中心 12.5684,99.9577；HHQ 机场目前仅有飞往清迈的定期航班（每周约4班），前往曼谷通常经陆路（车程约3小时）：公开资料",
  },
  {
    id: "udon-thani", nameZh: "乌隆他尼", nameEn: "Udon Thani", country: "thailand", tier: "notable", zone: "th-northeast",
    lon: 102.7872, lat: 17.4139,
    airport: { iata: "UTH", nameZh: "乌隆他尼国际机场", nameEn: "Udon Thani International", lon: 102.7881, lat: 17.3864 },
    source: "乌隆他尼市中心 17.4139,102.7872；UTH 机场：公开资料",
  },
  {
    id: "nakhon-ratchasima", nameZh: "呵叻（那空叻差是玛）", nameEn: "Nakhon Ratchasima", country: "thailand", tier: "notable", zone: "th-northeast",
    lon: 102.0977, lat: 14.9799,
    airport: { iata: "DMK", nameZh: "廊曼国际机场", nameEn: "Don Mueang International", lon: 100.6069, lat: 13.9126 },
    source: "呵叻市中心 14.9799,102.0977；本地那空叻差是玛机场目前无稳定的定期客运航班，实际多经陆路（火车/长途大巴）往返曼谷（约260公里）：公开资料",
  },
  // ── 韩国 ──────────────────────────────────────────────
  {
    id: "seoul", nameZh: "首尔", nameEn: "Seoul", country: "south-korea", tier: "capital", zone: "kr-capital",
    lon: 126.9780, lat: 37.5665,
    airport: { iata: "ICN", nameZh: "仁川国际机场", nameEn: "Incheon International", lon: 126.4407, lat: 37.4602 },
    source: "首尔市厅一带 37.5665,126.9780；ICN 机场：公开资料（国内航线主要用金浦机场 GMP，本表统一列国际枢纽 ICN）",
  },
  {
    id: "busan", nameZh: "釜山", nameEn: "Busan", country: "south-korea", tier: "major", zone: "kr-yeongnam",
    lon: 129.0756, lat: 35.1796,
    airport: { iata: "PUS", nameZh: "金海国际机场", nameEn: "Gimhae International", lon: 128.9386, lat: 35.1795 },
    source: "釜山站/南浦一带 35.1796,129.0756；PUS 机场：公开资料",
  },
  {
    id: "jeju-city", nameZh: "济州市", nameEn: "Jeju City", country: "south-korea", tier: "major", zone: "kr-jeju",
    lon: 126.5312, lat: 33.4996,
    airport: { iata: "CJU", nameZh: "济州国际机场", nameEn: "Jeju International", lon: 126.4930, lat: 33.5113 },
    source: "济州市中心 33.4996,126.5312；CJU 机场：公开资料",
  },
  {
    id: "gyeongju", nameZh: "庆州", nameEn: "Gyeongju", country: "south-korea", tier: "major", zone: "kr-yeongnam",
    lon: 129.2247, lat: 35.8562,
    airport: { iata: "KPO", nameZh: "浦项庆州机场", nameEn: "Pohang Gyeongju Airport", lon: 129.4204, lat: 35.9878 },
    source: "庆州历史区一带 35.8562,129.2247；本地无商业机场，最近机场为浦项庆州机场（距市区约35km）：公开资料",
  },
  {
    id: "ulsan", nameZh: "蔚山", nameEn: "Ulsan", country: "south-korea", tier: "notable", zone: "kr-yeongnam",
    lon: 129.3114, lat: 35.5384,
    airport: { iata: "USN", nameZh: "蔚山机场", nameEn: "Ulsan Airport", lon: 129.3519, lat: 35.5934 },
    source: "蔚山市中心 35.5384,129.3114；USN 机场：公开资料",
  },
  {
    id: "yeosu", nameZh: "丽水", nameEn: "Yeosu", country: "south-korea", tier: "notable", zone: "kr-honam",
    lon: 127.6622, lat: 34.7604,
    airport: { iata: "RSU", nameZh: "丽水机场", nameEn: "Yeosu Airport", lon: 127.6169, lat: 34.8423 },
    source: "丽水市中心 34.7604,127.6622；RSU 机场：公开资料",
  },
  {
    id: "pohang", nameZh: "浦项", nameEn: "Pohang", country: "south-korea", tier: "notable", zone: "kr-yeongnam",
    lon: 129.3435, lat: 36.0190,
    airport: { iata: "KPO", nameZh: "浦项庆州机场", nameEn: "Pohang Gyeongju Airport", lon: 129.4204, lat: 35.9878 },
    source: "浦项市中心 36.0190,129.3435；KPO 机场：公开资料",
  },
  {
    id: "gangneung", nameZh: "江陵", nameEn: "Gangneung", country: "south-korea", tier: "notable", zone: "kr-gangwon",
    lon: 128.8761, lat: 37.7519,
    airport: { iata: "YNY", nameZh: "襄阳国际机场", nameEn: "Yangyang International", lon: 128.6692, lat: 38.0611 },
    source: "江陵市中心 37.7519,128.8761；本地无商业机场，最近机场为襄阳国际机场（距市区约40km，国内定期航班有限）：公开资料",
  },
  {
    id: "sokcho", nameZh: "束草", nameEn: "Sokcho", country: "south-korea", tier: "notable", zone: "kr-gangwon",
    lon: 128.5918, lat: 38.2070,
    airport: { iata: "YNY", nameZh: "襄阳国际机场", nameEn: "Yangyang International", lon: 128.6692, lat: 38.0611 },
    source: "束草市中心 38.2070,128.5918；本地无商业机场，最近机场为襄阳国际机场（距市区约20km，国内定期航班有限）：公开资料",
  },
  {
    id: "chuncheon", nameZh: "春川", nameEn: "Chuncheon", country: "south-korea", tier: "notable", zone: "kr-gangwon",
    lon: 127.7298, lat: 37.8813,
    airport: { iata: "WJU", nameZh: "原州机场", nameEn: "Wonju Airport", lon: 127.9600, lat: 37.4380 },
    source: "春川市中心 37.8813,127.7298；本地无商业机场，最近机场为原州机场（距市区约65km）：公开资料",
  },
  {
    id: "andong", nameZh: "安东", nameEn: "Andong", country: "south-korea", tier: "notable", zone: "kr-yeongnam",
    lon: 128.7294, lat: 36.5684,
    airport: { iata: "TAE", nameZh: "大邱国际机场", nameEn: "Daegu International", lon: 128.6589, lat: 35.8942 },
    source: "安东市中心 36.5684,128.7294；本地小型机场现无定期客运航班，最近有定期航班的机场为大邱国际机场（距市区约90km）：公开资料",
  },
  {
    id: "jeonju", nameZh: "全州", nameEn: "Jeonju", country: "south-korea", tier: "notable", zone: "kr-honam",
    lon: 127.1480, lat: 35.8242,
    airport: { iata: "KWJ", nameZh: "光州机场", nameEn: "Gwangju Airport", lon: 126.8093, lat: 35.1264 },
    source: "全州韩屋村一带 35.8242,127.1480；本地无商业机场，最近机场为光州机场（距市区约50km）：公开资料",
  },
  // ===== 波兰 =====
  {
    id: "warsaw", nameZh: "华沙", nameEn: "Warsaw", country: "poland", tier: "capital", zone: "pl-mazovia",
    lon: 21.0122, lat: 52.2297,
    airport: { iata: "WAW", nameZh: "华沙肖邦机场", nameEn: "Warsaw Chopin Airport", lon: 20.9671, lat: 52.1657 },
    source: "华沙市中心 52.2297,21.0122；WAW 机场：公开资料",
  },
  {
    id: "krakow", nameZh: "克拉科夫", nameEn: "Kraków", country: "poland", tier: "major", zone: "pl-malopolska",
    lon: 19.9450, lat: 50.0647,
    airport: { iata: "KRK", nameZh: "克拉科夫若望保禄二世机场", nameEn: "Kraków John Paul II Airport", lon: 19.7848, lat: 50.0777 },
    source: "克拉科夫市中心 50.0647,19.9450；KRK 机场（距市区约11km）：公开资料",
  },
  {
    id: "zakopane", nameZh: "扎科帕内", nameEn: "Zakopane", country: "poland", tier: "notable", zone: "pl-malopolska",
    lon: 19.9496, lat: 49.2992,
    airport: { iata: "KRK", nameZh: "克拉科夫若望保禄二世机场", nameEn: "Kraków John Paul II Airport", lon: 19.7848, lat: 50.0777 },
    source: "扎科帕内市中心 49.2992,19.9496；本地无商业机场，最近机场为克拉科夫机场（距市区约100km）：公开资料",
  },
  {
    id: "rzeszow", nameZh: "热舒夫", nameEn: "Rzeszów", country: "poland", tier: "notable", zone: "pl-malopolska",
    lon: 21.9990, lat: 50.0413,
    airport: { iata: "RZE", nameZh: "热舒夫—亚西翁卡机场", nameEn: "Rzeszów-Jasionka Airport", lon: 22.0189, lat: 50.1100 },
    source: "热舒夫市中心 50.0413,21.9990；RZE 机场（距市区约10km）：公开资料",
  },
  {
    id: "wroclaw", nameZh: "弗罗茨瓦夫", nameEn: "Wrocław", country: "poland", tier: "major", zone: "pl-wielkopolska-slask",
    lon: 17.0385, lat: 51.1079,
    airport: { iata: "WRO", nameZh: "弗罗茨瓦夫机场", nameEn: "Wrocław Airport", lon: 16.8858, lat: 51.1027 },
    source: "弗罗茨瓦夫市中心 51.1079,17.0385；WRO 机场（距市区约10km）：公开资料",
  },
  {
    id: "poznan", nameZh: "波兹南", nameEn: "Poznań", country: "poland", tier: "major", zone: "pl-wielkopolska-slask",
    lon: 16.9252, lat: 52.4064,
    airport: { iata: "POZ", nameZh: "波兹南—瓦维察机场", nameEn: "Poznań-Ławica Airport", lon: 16.8263, lat: 52.4210 },
    source: "波兹南市中心 52.4064,16.9252；POZ 机场（距市区约6km）：公开资料",
  },
  {
    id: "gdansk", nameZh: "格但斯克", nameEn: "Gdańsk", country: "poland", tier: "major", zone: "pl-pomorze",
    lon: 18.6466, lat: 54.3520,
    airport: { iata: "GDN", nameZh: "格但斯克莱赫瓦文萨机场", nameEn: "Gdańsk Lech Wałęsa Airport", lon: 18.4662, lat: 54.3776 },
    source: "格但斯克市中心 54.3520,18.6466；GDN 机场（距市区约12km）：公开资料",
  },
  {
    id: "szczecin", nameZh: "什切青", nameEn: "Szczecin", country: "poland", tier: "notable", zone: "pl-pomorze",
    lon: 14.5528, lat: 53.4285,
    airport: { iata: "SZZ", nameZh: "什切青—戈萊尼乌夫机场", nameEn: "Szczecin-Goleniów Airport", lon: 14.9022, lat: 53.5847 },
    source: "什切青市中心 53.4285,14.5528；SZZ 机场（距市区约45km）：公开资料",
  },
  {
    id: "torun", nameZh: "托伦", nameEn: "Toruń", country: "poland", tier: "notable", zone: "pl-pomorze",
    lon: 18.5984, lat: 53.0138,
    airport: { iata: "BZG", nameZh: "比得哥什机场", nameEn: "Bydgoszcz Airport", lon: 17.9776, lat: 53.0968 },
    source: "托伦市中心 53.0138,18.5984；本地无商业机场，最近机场为比得哥什机场（距市区约50km）：公开资料",
  },
  {
    id: "olsztyn", nameZh: "奥尔什丁", nameEn: "Olsztyn", country: "poland", tier: "notable", zone: "pl-mazury-podlasie",
    lon: 20.4801, lat: 53.7784,
    airport: { iata: "SZY", nameZh: "奥尔什丁—马祖里机场", nameEn: "Olsztyn-Mazury Airport", lon: 20.9377, lat: 53.4819 },
    source: "奥尔什丁市中心 53.7784,20.4801；SZY 机场（距市区约58km）：公开资料",
  },
  {
    id: "bialystok", nameZh: "比亚韦斯托克", nameEn: "Białystok", country: "poland", tier: "notable", zone: "pl-mazury-podlasie",
    lon: 23.1688, lat: 53.1325,
    airport: { iata: "WAW", nameZh: "华沙肖邦机场", nameEn: "Warsaw Chopin Airport", lon: 20.9671, lat: 52.1657 },
    source: "比亚韦斯托克市中心 53.1325,23.1688；本地机场客运航班有限，最近有稳定定期航班的机场为华沙肖邦机场（距市区约180km）：公开资料",
  },
  // ── 越南 ──────────────────────────────────────────────
  {
    id: "hanoi", nameZh: "河内", nameEn: "Hanoi", country: "vietnam", tier: "capital", zone: "vn-north",
    lon: 105.8342, lat: 21.0278,
    airport: { iata: "HAN", nameZh: "内排国际机场", nameEn: "Noi Bai International", lon: 105.8073, lat: 21.2212 },
    source: "河内市中心 21.0278,105.8342；HAN 机场：公开资料",
  },
  {
    id: "ho-chi-minh-city", nameZh: "胡志明市", nameEn: "Ho Chi Minh City", country: "vietnam", tier: "major", zone: "vn-south",
    lon: 106.7009, lat: 10.7769,
    airport: { iata: "SGN", nameZh: "新山一国际机场", nameEn: "Tan Son Nhat International", lon: 106.6520, lat: 10.8188 },
    source: "胡志明市中心 10.7769,106.7009；SGN 机场：公开资料",
  },
  {
    id: "da-nang", nameZh: "岘港", nameEn: "Da Nang", country: "vietnam", tier: "major", zone: "vn-central",
    lon: 108.2022, lat: 16.0544,
    airport: { iata: "DAD", nameZh: "岘港国际机场", nameEn: "Da Nang International", lon: 108.1994, lat: 16.0439 },
    source: "岘港市中心 16.0544,108.2022；DAD 机场：公开资料",
  },
  {
    id: "hoi-an", nameZh: "会安", nameEn: "Hoi An", country: "vietnam", tier: "notable", zone: "vn-central",
    lon: 108.3380, lat: 15.8801,
    airport: { iata: "DAD", nameZh: "岘港国际机场", nameEn: "Da Nang International", lon: 108.1994, lat: 16.0439 },
    source: "会安古城一带 15.8801,108.3380；本地无商业机场，最近机场为岘港国际机场（距古城约30km）：公开资料",
  },
  {
    id: "hue", nameZh: "顺化", nameEn: "Hue", country: "vietnam", tier: "notable", zone: "vn-central",
    lon: 107.5909, lat: 16.4637,
    airport: { iata: "HUI", nameZh: "富牌国际机场", nameEn: "Phu Bai International", lon: 107.7033, lat: 16.4015 },
    source: "顺化市中心 16.4637,107.5909；HUI 机场：公开资料",
  },
  {
    id: "sapa", nameZh: "沙巴", nameEn: "Sapa", country: "vietnam", tier: "notable", zone: "vn-north",
    lon: 103.8438, lat: 22.3364,
    airport: { iata: "HAN", nameZh: "内排国际机场", nameEn: "Noi Bai International", lon: 105.8073, lat: 21.2212 },
    source: "沙巴镇中心 22.3364,103.8438；本地及老街省均无机场，最近机场为河内内排国际机场（距沙巴约320km）：公开资料",
  },
  {
    id: "ha-long-city", nameZh: "下龙市", nameEn: "Ha Long City", country: "vietnam", tier: "notable", zone: "vn-north",
    lon: 107.0839, lat: 20.9101,
    airport: { iata: "VDO", nameZh: "云屯国际机场", nameEn: "Van Don International", lon: 107.4144, lat: 21.1183 },
    source: "下龙市中心 20.9101,107.0839；VDO 机场（距市区约50km）：公开资料",
  },
  {
    id: "nha-trang-city", nameZh: "芽庄", nameEn: "Nha Trang", country: "vietnam", tier: "notable", zone: "vn-central",
    lon: 109.1967, lat: 12.2388,
    airport: { iata: "CXR", nameZh: "金兰国际机场", nameEn: "Cam Ranh International", lon: 109.2196, lat: 11.9982 },
    source: "芽庄市中心 12.2388,109.1967；CXR 机场（距市区约35km）：公开资料",
  },
  {
    id: "da-lat", nameZh: "大叻", nameEn: "Da Lat", country: "vietnam", tier: "notable", zone: "vn-central-highlands",
    lon: 108.4419, lat: 11.9404,
    airport: { iata: "DLI", nameZh: "莲香机场", nameEn: "Lien Khuong Airport", lon: 108.3667, lat: 11.7500 },
    source: "大叻市中心 11.9404,108.4419；DLI 机场（距市区约30km）：公开资料",
  },
  {
    id: "can-tho", nameZh: "芹苴", nameEn: "Can Tho", country: "vietnam", tier: "notable", zone: "vn-south",
    lon: 105.7469, lat: 10.0452,
    airport: { iata: "VCA", nameZh: "芹苴国际机场", nameEn: "Can Tho International", lon: 105.7122, lat: 10.0851 },
    source: "芹苴市中心 10.0452,105.7469；VCA 机场：公开资料",
  },
  {
    id: "phu-quoc-city", nameZh: "阳东", nameEn: "Duong Dong", country: "vietnam", tier: "notable", zone: "vn-south",
    lon: 103.9670, lat: 10.2170,
    airport: { iata: "PQC", nameZh: "富国国际机场", nameEn: "Phu Quoc International", lon: 103.9950, lat: 10.1700 },
    source: "阳东镇一带 10.2170,103.9670；PQC 机场（距镇区约15km）：公开资料",
  },
  {
    id: "ninh-binh", nameZh: "宁平", nameEn: "Ninh Binh", country: "vietnam", tier: "notable", zone: "vn-north",
    lon: 105.9744, lat: 20.2506,
    airport: { iata: "HAN", nameZh: "内排国际机场", nameEn: "Noi Bai International", lon: 105.8073, lat: 21.2212 },
    source: "宁平市中心 20.2506,105.9744；本地无商业机场，最近机场为河内内排国际机场（距市区约90km）：公开资料",
  },
  {
    id: "ulaanbaatar", nameZh: "乌兰巴托", nameEn: "Ulaanbaatar", country: "mongolia", tier: "capital", zone: "mn-central",
    lon: 106.9177, lat: 47.9184,
    airport: { iata: "UBN", nameZh: "成吉思汗国际机场", nameEn: "Chinggis Khaan International", lon: 106.8161, lat: 47.6467 },
    source: "乌兰巴托市中心 47.9184,106.9177；成吉思汗国际机场2021年启用，位于市区以南约52公里的呼西格河谷：公开资料/Wikipedia",
  },
  {
    id: "erdenet", nameZh: "额尔登特", nameEn: "Erdenet", country: "mongolia", tier: "major", zone: "mn-north",
    lon: 104.0833, lat: 49.0333,
    airport: { iata: "ERT", nameZh: "额尔登特机场", nameEn: "Erdenet Airport", lon: 104.0664, lat: 49.0392 },
    source: "额尔登特市中心 49.0333,104.0833；本地设有额尔登特机场（ERT），航班班次以实际时刻表为准，主要客运也可经乌兰巴托方向的公路与蒙古国铁支线往返：公开资料",
  },
  {
    id: "darkhan", nameZh: "达尔汗", nameEn: "Darkhan", country: "mongolia", tier: "major", zone: "mn-north",
    lon: 105.9228, lat: 49.4867,
    airport: { iata: "UBN", nameZh: "成吉思汗国际机场", nameEn: "Chinggis Khaan International", lon: 106.8161, lat: 47.6467 },
    source: "达尔汗市中心 49.4867,105.9228；本地无稳定定期客运航班，主要经蒙古纵贯铁路（乌兰巴托—苏赫巴托尔线）与公路往返乌兰巴托（约219km）：公开资料",
  },
  {
    id: "kharkhorin", nameZh: "哈拉和林", nameEn: "Kharkhorin", country: "mongolia", tier: "notable", zone: "mn-central",
    lon: 102.8395, lat: 47.1975,
    airport: { iata: "UBN", nameZh: "成吉思汗国际机场", nameEn: "Chinggis Khaan International", lon: 106.8161, lat: 47.6467 },
    source: "哈拉和林（鄂尔浑河谷）47.1975,102.8395；本地哈拉和林机场几乎无客运处理设施，通常经乌兰巴托方向公路往返（约370km）：公开资料/Wikipedia",
  },
  {
    id: "moron", nameZh: "木伦", nameEn: "Mörön", country: "mongolia", tier: "notable", zone: "mn-north",
    lon: 100.1625, lat: 49.6342,
    airport: { iata: "MXV", nameZh: "木伦机场", nameEn: "Mörön Airport", lon: 100.1492, lat: 49.6633 },
    source: "木伦市中心 49.6342,100.1625；MXV机场：公开资料/MIAT蒙古国际航空国内航线",
  },
  {
    id: "dalanzadgad", nameZh: "达兰扎德嘎德", nameEn: "Dalanzadgad", country: "mongolia", tier: "notable", zone: "mn-gobi",
    lon: 104.4250, lat: 43.5708,
    airport: { iata: "DLZ", nameZh: "达兰扎德嘎德机场", nameEn: "Dalanzadgad Airport", lon: 104.4283, lat: 43.5919 },
    source: "达兰扎德嘎德市中心 43.5708,104.4250；DLZ机场：公开资料/MIAT蒙古国际航空国内航线",
  },
  {
    id: "khovd", nameZh: "科布多", nameEn: "Khovd", country: "mongolia", tier: "notable", zone: "mn-west",
    lon: 91.6417, lat: 47.9975,
    airport: { iata: "HVD", nameZh: "科布多机场", nameEn: "Khovd Airport", lon: 91.6289, lat: 47.9539 },
    source: "科布多市中心 47.9975,91.6417；HVD机场：公开资料/MIAT蒙古国际航空国内航线",
  },
  {
    id: "olgii", nameZh: "乌力吉", nameEn: "Ölgii", country: "mongolia", tier: "notable", zone: "mn-west",
    lon: 89.9575, lat: 48.9700,
    airport: { iata: "ULG", nameZh: "乌力吉国际机场", nameEn: "Ölgii International", lon: 89.9308, lat: 48.9964 },
    source: "乌力吉市中心 48.9700,89.9575；ULG机场：公开资料/MIAT蒙古国际航空国内航线（每周约2班，4至10月运营）",
  },
  {
    id: "choibalsan", nameZh: "乔巴山", nameEn: "Choibalsan", country: "mongolia", tier: "notable", zone: "mn-east",
    lon: 114.5352, lat: 48.0733,
    airport: { iata: "COQ", nameZh: "乔巴山机场", nameEn: "Choibalsan Airport", lon: 114.5539, lat: 48.0967 },
    source: "乔巴山市中心 48.0733,114.5352；COQ机场：公开资料/MIAT蒙古国际航空国内航线",
  },
  {
    id: "tsetserleg", nameZh: "车车尔勒格", nameEn: "Tsetserleg", country: "mongolia", tier: "notable", zone: "mn-central",
    lon: 101.4544, lat: 47.4767,
    airport: { iata: "UBN", nameZh: "成吉思汗国际机场", nameEn: "Chinggis Khaan International", lon: 106.8161, lat: 47.6467 },
    source: "车车尔勒格市中心 47.4767,101.4544；本地设有车车尔勒格机场（TSZ）但客运航班暂不稳定，通常经乌兰巴托方向公路往返（约420km）：公开资料",
  },
  {
    id: "kuala-lumpur", nameZh: "吉隆坡", nameEn: "Kuala Lumpur", country: "malaysia", tier: "capital", zone: "my-central",
    lon: 101.6869, lat: 3.1390,
    airport: { iata: "KUL", nameZh: "吉隆坡国际机场", nameEn: "Kuala Lumpur International Airport", lon: 101.7099, lat: 2.7456 },
    source: "吉隆坡市中心 3.1390,101.6869；KLIA机场（距市区约45km）：公开资料",
  },
  {
    id: "george-town", nameZh: "乔治市", nameEn: "George Town", country: "malaysia", tier: "major", zone: "my-north",
    lon: 100.3288, lat: 5.4141,
    airport: { iata: "PEN", nameZh: "槟城国际机场", nameEn: "Penang International Airport", lon: 100.2769, lat: 5.2971 },
    source: "乔治市中心 5.4141,100.3288；PEN机场（距市区约18km）：公开资料",
  },
  {
    id: "johor-bahru", nameZh: "新山", nameEn: "Johor Bahru", country: "malaysia", tier: "major", zone: "my-south",
    lon: 103.7414, lat: 1.4927,
    airport: { iata: "JHB", nameZh: "士乃国际机场", nameEn: "Senai International Airport", lon: 103.6697, lat: 1.6414 },
    source: "新山市中心 1.4927,103.7414；JHB机场（距市区约21km）：公开资料",
  },
  {
    id: "malacca-city", nameZh: "马六甲市", nameEn: "Malacca City", country: "malaysia", tier: "major", zone: "my-south",
    lon: 102.2501, lat: 2.1896,
    airport: { iata: "MKZ", nameZh: "马六甲机场", nameEn: "Malacca Airport", lon: 102.2539, lat: 2.2633 },
    source: "马六甲市中心 2.1896,102.2501；MKZ机场目前无国内定期航班，仅有少量国际航线（如新加坡），主要客运经吉隆坡方向公路往返（约145km）：公开资料",
  },
  {
    id: "ipoh", nameZh: "怡保", nameEn: "Ipoh", country: "malaysia", tier: "major", zone: "my-north",
    lon: 101.0901, lat: 4.5975,
    airport: { iata: "IPH", nameZh: "苏丹阿兹兰沙机场", nameEn: "Sultan Azlan Shah Airport", lon: 101.0921, lat: 4.5679 },
    source: "怡保市中心 4.5975,101.0901；IPH机场（距市区约15km）：公开资料",
  },
  {
    id: "kota-kinabalu", nameZh: "亚庇", nameEn: "Kota Kinabalu", country: "malaysia", tier: "major", zone: "my-sabah",
    lon: 116.0735, lat: 5.9804,
    airport: { iata: "BKI", nameZh: "亚庇国际机场", nameEn: "Kota Kinabalu International Airport", lon: 116.0517, lat: 5.9372 },
    source: "亚庇市中心 5.9804,116.0735；BKI机场（距市区约7km）：公开资料",
  },
  {
    id: "kuching", nameZh: "古晋", nameEn: "Kuching", country: "malaysia", tier: "major", zone: "my-sarawak",
    lon: 110.3593, lat: 1.5535,
    airport: { iata: "KCH", nameZh: "古晋国际机场", nameEn: "Kuching International Airport", lon: 110.3467, lat: 1.4847 },
    source: "古晋市中心 1.5535,110.3593；KCH机场（距市区约11km）：公开资料",
  },
  {
    id: "kota-bharu", nameZh: "哥打巴鲁", nameEn: "Kota Bharu", country: "malaysia", tier: "notable", zone: "my-north",
    lon: 102.2381, lat: 6.1254,
    airport: { iata: "KBR", nameZh: "苏丹依斯迈布特拉机场", nameEn: "Sultan Ismail Petra Airport", lon: 102.2922, lat: 6.1669 },
    source: "哥打巴鲁市中心 6.1254,102.2381；KBR机场（距市区约8km）：公开资料",
  },
  {
    id: "kuantan", nameZh: "关丹", nameEn: "Kuantan", country: "malaysia", tier: "notable", zone: "my-south",
    lon: 103.3260, lat: 3.8077,
    airport: { iata: "KUA", nameZh: "苏丹哈芝阿末沙机场", nameEn: "Sultan Ahmad Shah Airport", lon: 103.2081, lat: 3.7758 },
    source: "关丹市中心 3.8077,103.3260；KUA机场（距市区约15km）：公开资料",
  },
  {
    id: "sandakan", nameZh: "山打根", nameEn: "Sandakan", country: "malaysia", tier: "notable", zone: "my-sabah",
    lon: 118.1179, lat: 5.8402,
    airport: { iata: "SDK", nameZh: "山打根机场", nameEn: "Sandakan Airport", lon: 118.0592, lat: 5.9012 },
    source: "山打根市中心 5.8402,118.1179；SDK机场（距市区约11km）：公开资料",
  },
  {
    id: "miri", nameZh: "美里", nameEn: "Miri", country: "malaysia", tier: "notable", zone: "my-sarawak",
    lon: 113.9914, lat: 4.3995,
    airport: { iata: "MYY", nameZh: "美里机场", nameEn: "Miri Airport", lon: 113.9878, lat: 4.3225 },
    source: "美里市中心 4.3995,113.9914；MYY机场（距市区约8km）：公开资料",
  },
  {
    id: "langkawi-city", nameZh: "瓜镇", nameEn: "Kuah", country: "malaysia", tier: "notable", zone: "my-north",
    lon: 99.8467, lat: 6.3228,
    airport: { iata: "LGK", nameZh: "浮罗交怡国际机场", nameEn: "Langkawi International Airport", lon: 99.7286, lat: 6.3297 },
    source: "浮罗交怡瓜镇 6.3228,99.8467；LGK机场（距瓜镇约11km）：公开资料",
  },
  {
    id: "singapore-city", nameZh: "新加坡市区", nameEn: "Singapore", country: "singapore", tier: "capital", zone: "sg-main",
    lon: 103.8607, lat: 1.2836,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "新加坡市中心（滨海湾）1.2836,103.8607；樟宜机场（距市区约20km）：公开资料",
  },
  {
    id: "sentosa", nameZh: "圣淘沙", nameEn: "Sentosa", country: "singapore", tier: "notable", zone: "sg-main",
    lon: 103.8303, lat: 1.2494,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "圣淘沙岛中心 1.2494,103.8303；本地无独立机场，经樟宜机场（距岛约30km）往返：公开资料",
  },
  {
    id: "chinatown-singapore", nameZh: "牛车水", nameEn: "Chinatown", country: "singapore", tier: "notable", zone: "sg-main",
    lon: 103.8442, lat: 1.2812,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "牛车水核心区 1.2812,103.8442；本地无独立机场，经樟宜机场（距市区约20km）往返：公开资料",
  },
  {
    id: "kampong-glam", nameZh: "甘榜格南", nameEn: "Kampong Glam", country: "singapore", tier: "notable", zone: "sg-main",
    lon: 103.8594, lat: 1.3021,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "甘榜格南核心区 1.3021,103.8594；本地无独立机场，经樟宜机场（距市区约20km）往返：公开资料",
  },
  {
    id: "little-india-singapore", nameZh: "小印度", nameEn: "Little India", country: "singapore", tier: "notable", zone: "sg-main",
    lon: 103.8496, lat: 1.3067,
    airport: { iata: "SIN", nameZh: "樟宜机场", nameEn: "Changi Airport", lon: 103.9915, lat: 1.3644 },
    source: "小印度核心区 1.3067,103.8496；本地无独立机场，经樟宜机场（距市区约20km）往返：公开资料",
  },
  {
    id: "manila", nameZh: "马尼拉", nameEn: "Manila", country: "philippines", tier: "capital", zone: "ph-luzon",
    lon: 120.9842, lat: 14.5995,
    airport: { iata: "MNL", nameZh: "尼诺伊·阿基诺国际机场", nameEn: "Ninoy Aquino International Airport", lon: 121.0198, lat: 14.5086 },
    source: "马尼拉市中心 14.5995,120.9842；MNL机场（距市区约7km）：公开资料",
  },
  {
    id: "cebu-city", nameZh: "宿务市", nameEn: "Cebu City", country: "philippines", tier: "major", zone: "ph-visayas",
    lon: 123.8854, lat: 10.3157,
    airport: { iata: "CEB", nameZh: "麦克坦—宿务国际机场", nameEn: "Mactan-Cebu International Airport", lon: 123.9794, lat: 10.3075 },
    source: "宿务市中心 10.3157,123.8854；CEB机场（位于麦克坦岛，距市区约16km）：公开资料",
  },
  {
    id: "davao-city", nameZh: "达沃市", nameEn: "Davao City", country: "philippines", tier: "major", zone: "ph-mindanao",
    lon: 125.6128, lat: 7.0731,
    airport: { iata: "DVO", nameZh: "弗朗西斯科·邦戈伊国际机场", nameEn: "Francisco Bangoy International Airport", lon: 125.6458, lat: 7.1255 },
    source: "达沃市中心 7.0731,125.6128；DVO机场（距市区约11km）：公开资料",
  },
  {
    id: "baguio", nameZh: "碧瑶", nameEn: "Baguio", country: "philippines", tier: "major", zone: "ph-luzon",
    lon: 120.5960, lat: 16.4023,
    airport: { iata: "MNL", nameZh: "尼诺伊·阿基诺国际机场", nameEn: "Ninoy Aquino International Airport", lon: 121.0198, lat: 14.5086 },
    source: "碧瑶市中心 16.4023,120.5960；本地洛坎机场（BAG）已停止商业客运，主要经马尼拉方向公路往返（约250km，山路车程约5至6小时）：公开资料",
  },
  {
    id: "puerto-princesa", nameZh: "普林塞萨港", nameEn: "Puerto Princesa", country: "philippines", tier: "major", zone: "ph-palawan",
    lon: 118.7384, lat: 9.7392,
    airport: { iata: "PPS", nameZh: "普林塞萨港国际机场", nameEn: "Puerto Princesa International Airport", lon: 118.7583, lat: 9.7422 },
    source: "普林塞萨港市中心 9.7392,118.7384；PPS机场（距市区约4km）：公开资料",
  },
  {
    id: "legazpi", nameZh: "黎牙实比", nameEn: "Legazpi", country: "philippines", tier: "notable", zone: "ph-luzon",
    lon: 123.7438, lat: 13.1391,
    airport: { iata: "DRP", nameZh: "比科尔国际机场", nameEn: "Bicol International Airport", lon: 123.7325, lat: 13.1575 },
    source: "黎牙实比市中心 13.1391,123.7438；DRP机场（位于达拉牙，距市区约8km，取代原黎牙实比机场）：公开资料",
  },
  {
    id: "tagaytay", nameZh: "塔加泰", nameEn: "Tagaytay", country: "philippines", tier: "notable", zone: "ph-luzon",
    lon: 120.9367, lat: 14.1153,
    airport: { iata: "MNL", nameZh: "尼诺伊·阿基诺国际机场", nameEn: "Ninoy Aquino International Airport", lon: 121.0198, lat: 14.5086 },
    source: "塔加泰市中心 14.1153,120.9367；本地无商业机场，经马尼拉方向公路往返（约60km，车程约1.5至2小时）：公开资料",
  },
  {
    id: "boracay", nameZh: "长滩岛（马来镇）", nameEn: "Boracay (Malay)", country: "philippines", tier: "notable", zone: "ph-visayas",
    lon: 121.9248, lat: 11.9674,
    airport: { iata: "MPH", nameZh: "戈多弗雷多·拉莫斯机场", nameEn: "Godofredo P. Ramos Airport", lon: 122.0053, lat: 11.9247 },
    source: "长滩岛 11.9674,121.9248；MPH机场（俗称卡蒂克兰机场，位于长滩岛对岸马来镇，需转乘渡船约10分钟上岛）：公开资料",
  },
  {
    id: "el-nido-town", nameZh: "艾尔尼多镇", nameEn: "El Nido", country: "philippines", tier: "notable", zone: "ph-palawan",
    lon: 119.4090, lat: 11.1949,
    airport: { iata: "ENI", nameZh: "艾尔尼多机场", nameEn: "El Nido Airport", lon: 119.4166, lat: 11.1783 },
    source: "艾尔尼多镇 11.1949,119.4090；ENI机场为私营小型机场（距镇区约3km），航班选择有限，多数游客经普林塞萨港转乘公路前往（约420km，车程约5至6小时）：公开资料",
  },
  {
    id: "coron-town", nameZh: "科隆镇", nameEn: "Coron", country: "philippines", tier: "notable", zone: "ph-palawan",
    lon: 120.2019, lat: 12.0011,
    airport: { iata: "USU", nameZh: "弗朗西斯科·雷耶斯机场", nameEn: "Francisco B. Reyes Airport", lon: 120.1042, lat: 12.1447 },
    source: "科隆镇 12.0011,120.2019；USU机场（位于布桑加岛，距镇区约30km，需转乘公路或渡船）：公开资料",
  },
  {
    id: "tagbilaran", nameZh: "塔比拉兰", nameEn: "Tagbilaran", country: "philippines", tier: "notable", zone: "ph-visayas",
    lon: 123.8543, lat: 9.6474,
    airport: { iata: "TAG", nameZh: "保和—邦劳国际机场", nameEn: "Bohol-Panglao International Airport", lon: 123.7622, lat: 9.5675 },
    source: "塔比拉兰市中心 9.6474,123.8543；TAG机场（位于邦劳岛，2018年启用取代原塔比拉兰机场，距市区约18km）：公开资料",
  },
  {
    id: "vigan", nameZh: "维甘", nameEn: "Vigan", country: "philippines", tier: "notable", zone: "ph-luzon",
    lon: 120.3869, lat: 17.5747,
    airport: { iata: "MNL", nameZh: "尼诺伊·阿基诺国际机场", nameEn: "Ninoy Aquino International Airport", lon: 121.0198, lat: 14.5086 },
    source: "维甘市中心 17.5747,120.3869；本地维甘机场客运航班暂不稳定，多数游客经马尼拉方向公路往返（约400km，车程约7至8小时）：公开资料",
  },
  {
    id: "jakarta", nameZh: "雅加达", nameEn: "Jakarta", country: "indonesia", tier: "capital", zone: "id-java",
    lon: 106.8456, lat: -6.2088,
    airport: { iata: "CGK", nameZh: "苏加诺—哈达国际机场", nameEn: "Soekarno-Hatta International Airport", lon: 106.6559, lat: -6.1256 },
    source: "雅加达市中心 -6.2088,106.8456；CGK机场（距市区约20km）：公开资料",
  },
  {
    id: "yogyakarta", nameZh: "日惹", nameEn: "Yogyakarta", country: "indonesia", tier: "major", zone: "id-java",
    lon: 110.3695, lat: -7.7956,
    airport: { iata: "YIA", nameZh: "日惹国际机场", nameEn: "Yogyakarta International Airport", lon: 110.0570, lat: -7.9004 },
    source: "日惹市中心 -7.7956,110.3695；YIA机场2019年启用（距市区约45km），已于2020年3月起全面取代原阿迪苏芝普托机场：公开资料/Wikipedia",
  },
  {
    id: "denpasar", nameZh: "登巴萨", nameEn: "Denpasar", country: "indonesia", tier: "major", zone: "id-bali",
    lon: 115.2126, lat: -8.6705,
    airport: { iata: "DPS", nameZh: "伍拉赖国际机场", nameEn: "Ngurah Rai International Airport", lon: 115.1667, lat: -8.7467 },
    source: "登巴萨市中心 -8.6705,115.2126；DPS机场（距市区约13km）：公开资料",
  },
  {
    id: "surabaya", nameZh: "泗水", nameEn: "Surabaya", country: "indonesia", tier: "major", zone: "id-java",
    lon: 112.7521, lat: -7.2575,
    airport: { iata: "SUB", nameZh: "朱安达国际机场", nameEn: "Juanda International Airport", lon: 112.7869, lat: -7.3798 },
    source: "泗水市中心 -7.2575,112.7521；SUB机场（距市区约20km）：公开资料",
  },
  {
    id: "bandung", nameZh: "万隆", nameEn: "Bandung", country: "indonesia", tier: "major", zone: "id-java",
    lon: 107.6191, lat: -6.9175,
    airport: { iata: "BDO", nameZh: "胡先·沙斯特拉内加拉机场", nameEn: "Husein Sastranegara International Airport", lon: 107.5764, lat: -6.9006 },
    source: "万隆市中心 -6.9175,107.6191；BDO机场（距市区约4km，以国内航线为主）：公开资料",
  },
  {
    id: "medan", nameZh: "棉兰", nameEn: "Medan", country: "indonesia", tier: "major", zone: "id-sumatra",
    lon: 98.6722, lat: 3.5952,
    airport: { iata: "KNO", nameZh: "瓜拉纳姆国际机场", nameEn: "Kualanamu International Airport", lon: 98.8853, lat: 3.6422 },
    source: "棉兰市中心 3.5952,98.6722；KNO机场（距市区约39km）：公开资料",
  },
  {
    id: "makassar", nameZh: "望加锡", nameEn: "Makassar", country: "indonesia", tier: "major", zone: "id-sulawesi",
    lon: 119.4327, lat: -5.1477,
    airport: { iata: "UPG", nameZh: "苏丹哈桑努丁国际机场", nameEn: "Sultan Hasanuddin International Airport", lon: 119.5541, lat: -5.0616 },
    source: "望加锡市中心 -5.1477,119.4327；UPG机场（距市区约21km）：公开资料",
  },
  {
    id: "labuan-bajo", nameZh: "拉布安巴焦", nameEn: "Labuan Bajo", country: "indonesia", tier: "notable", zone: "id-nusa-tenggara",
    lon: 119.8886, lat: -8.4874,
    airport: { iata: "LBJ", nameZh: "科莫多机场", nameEn: "Komodo Airport", lon: 119.8892, lat: -8.4864 },
    source: "拉布安巴焦市中心 -8.4874,119.8886；LBJ机场（距市区约2km）：公开资料",
  },
  {
    id: "balikpapan", nameZh: "巴厘巴板", nameEn: "Balikpapan", country: "indonesia", tier: "notable", zone: "id-kalimantan",
    lon: 116.8529, lat: -1.2379,
    airport: { iata: "BPN", nameZh: "苏丹阿吉穆罕默德苏莱曼机场", nameEn: "Sultan Aji Muhammad Sulaiman Airport", lon: 116.8938, lat: -1.2683 },
    source: "巴厘巴板市中心 -1.2379,116.8529；BPN机场（距市区约11km），是通往加里曼丹东部与印尼新首都努桑塔拉建设工地的主要空中门户：公开资料",
  },
  {
    id: "manado", nameZh: "万鸦老", nameEn: "Manado", country: "indonesia", tier: "notable", zone: "id-sulawesi",
    lon: 124.8421, lat: 1.4748,
    airport: { iata: "MDC", nameZh: "萨姆拉图兰吉国际机场", nameEn: "Sam Ratulangi International Airport", lon: 124.9264, lat: 1.5492 },
    source: "万鸦老市中心 1.4748,124.8421；MDC机场（距市区约13km）：公开资料",
  },
  {
    id: "pangkalan-bun", nameZh: "邦卡兰文", nameEn: "Pangkalan Bun", country: "indonesia", tier: "notable", zone: "id-kalimantan",
    lon: 111.6165, lat: -2.6822,
    airport: { iata: "PKN", nameZh: "伊斯坎达尔机场", nameEn: "Iskandar Airport", lon: 111.6725, lat: -2.7048 },
    source: "邦卡兰文市中心 -2.6822,111.6165；PKN机场（距市区约3km），是前往丹绒普丁国家公园的主要门户：公开资料",
  },
  {
    id: "astana", nameZh: "阿斯塔纳", nameEn: "Astana", country: "kazakhstan", tier: "capital", zone: "kz-north",
    lon: 71.4460, lat: 51.1801,
    airport: { iata: "NQZ", nameZh: "阿斯塔纳国际机场", nameEn: "Astana International Airport", lon: 71.4669, lat: 51.0222 },
    source: "阿斯塔纳市中心 51.1801,71.4460；NQZ机场（距市区约17km）：公开资料",
  },
  {
    id: "almaty", nameZh: "阿拉木图", nameEn: "Almaty", country: "kazakhstan", tier: "major", zone: "kz-southeast",
    lon: 76.8512, lat: 43.2220,
    airport: { iata: "ALA", nameZh: "阿拉木图国际机场", nameEn: "Almaty International Airport", lon: 77.0405, lat: 43.3521 },
    source: "阿拉木图市中心 43.2220,76.8512；ALA机场（距市区约18km）：公开资料",
  },
  {
    id: "shymkent", nameZh: "希姆肯特", nameEn: "Shymkent", country: "kazakhstan", tier: "major", zone: "kz-south",
    lon: 69.6000, lat: 42.3000,
    airport: { iata: "CIT", nameZh: "希姆肯特国际机场", nameEn: "Shymkent International Airport", lon: 69.4794, lat: 42.3651 },
    source: "希姆肯特市中心 42.3000,69.6000；CIT机场（距市区约12km）：公开资料",
  },
  {
    id: "aktau", nameZh: "阿克套", nameEn: "Aktau", country: "kazakhstan", tier: "major", zone: "kz-west",
    lon: 51.1500, lat: 43.6500,
    airport: { iata: "SCO", nameZh: "阿克套国际机场", nameEn: "Aktau International Airport", lon: 51.0922, lat: 43.8600 },
    source: "阿克套市中心 43.6500,51.1500；SCO机场（距市区约25km），是探索曼格斯套地区的主要门户：公开资料",
  },
  {
    id: "turkestan", nameZh: "突厥斯坦", nameEn: "Turkestan", country: "kazakhstan", tier: "notable", zone: "kz-south",
    lon: 68.2500, lat: 43.3000,
    airport: { iata: "HSA", nameZh: "哈兹拉特苏丹国际机场", nameEn: "Hazrat Sultan International Airport", lon: 68.4000, lat: 43.1667 },
    source: "突厥斯坦市中心 43.3000,68.2500；HSA机场2020年启用（距市区约16km），机场名取自艾哈迈德·亚萨维的尊号“哈兹拉特苏丹”：公开资料",
  },
  {
    id: "karaganda", nameZh: "卡拉干达", nameEn: "Karaganda", country: "kazakhstan", tier: "notable", zone: "kz-central",
    lon: 73.1094, lat: 49.8047,
    airport: { iata: "KGF", nameZh: "萨雷阿尔卡机场", nameEn: "Sary-Arka Airport", lon: 73.3419, lat: 49.6642 },
    source: "卡拉干达市中心 49.8047,73.1094；KGF机场（距市区约20km），是探索卡尔卡拉雷山与别克套阿塔的门户之一：公开资料",
  },
  {
    id: "semey", nameZh: "谢梅伊", nameEn: "Semey", country: "kazakhstan", tier: "notable", zone: "kz-east",
    lon: 80.2275, lat: 50.4111,
    airport: { iata: "PLX", nameZh: "谢梅伊机场", nameEn: "Semey Airport", lon: 80.2350, lat: 50.3522 },
    source: "谢梅伊市中心 50.4111,80.2275；PLX机场（距市区约7km），沿额尔齐斯河而建：公开资料",
  },
  {
    id: "pavlodar", nameZh: "巴甫洛达尔", nameEn: "Pavlodar", country: "kazakhstan", tier: "notable", zone: "kz-east",
    lon: 76.9674, lat: 52.2873,
    airport: { iata: "PWQ", nameZh: "巴甫洛达尔机场", nameEn: "Pavlodar Airport", lon: 77.0781, lat: 52.1958 },
    source: "巴甫洛达尔市中心 52.2873,76.9674；PWQ机场（距市区约13km），沿额尔齐斯河而建：公开资料",
  },
  {
    id: "kokshetau", nameZh: "科克舍套", nameEn: "Kokshetau", country: "kazakhstan", tier: "notable", zone: "kz-north",
    lon: 69.3833, lat: 53.2833,
    airport: { iata: "KOV", nameZh: "科克舍套机场", nameEn: "Kokshetau Airport", lon: 69.5942, lat: 53.3325 },
    source: "科克舍套市中心 53.2833,69.3833；KOV机场（距市区约18km），是前往布拉拜国家公园的主要门户：公开资料",
  },
  // 土耳其
  {
    id: "istanbul", nameZh: "伊斯坦布尔", nameEn: "Istanbul", country: "turkey", tier: "major", zone: "tr-marmara",
    lon: 28.9784, lat: 41.0082,
    airport: { iata: "IST", nameZh: "伊斯坦布尔机场", nameEn: "Istanbul Airport", lon: 28.7519, lat: 41.2753 },
    source: "伊斯坦布尔市中心 41.0082,28.9784；IST机场（欧洲区，距市中心约35km），跨博斯普鲁斯海峡两岸、横跨亚欧两大洲：公开资料",
  },
  {
    id: "ankara", nameZh: "安卡拉", nameEn: "Ankara", country: "turkey", tier: "capital", zone: "tr-central-anatolia",
    lon: 32.8597, lat: 39.9334,
    airport: { iata: "ESB", nameZh: "安卡拉埃森博阿机场", nameEn: "Ankara Esenboğa Airport", lon: 32.9951, lat: 40.1281 },
    source: "安卡拉市中心 39.9334,32.8597；ESB机场（距市区约28km），土耳其首都、共和国成立后新建的行政中心：公开资料",
  },
  {
    id: "izmir", nameZh: "伊兹密尔", nameEn: "Izmir", country: "turkey", tier: "major", zone: "tr-aegean",
    lon: 27.1428, lat: 38.4237,
    airport: { iata: "ADB", nameZh: "伊兹密尔阿德南·门德雷斯机场", nameEn: "Izmir Adnan Menderes Airport", lon: 27.1570, lat: 38.2924 },
    source: "伊兹密尔市中心 38.4237,27.1428；ADB机场（距市区约18km），土耳其第三大城市、爱琴海沿岸港口，是前往以弗所古城的门户：公开资料",
  },
  {
    id: "antalya", nameZh: "安塔利亚", nameEn: "Antalya", country: "turkey", tier: "major", zone: "tr-mediterranean",
    lon: 30.7133, lat: 36.8969,
    airport: { iata: "AYT", nameZh: "安塔利亚机场", nameEn: "Antalya Airport", lon: 30.8005, lat: 36.8987 },
    source: "安塔利亚市中心 36.8969,30.7133；AYT机场（距市区约13km），土耳其地中海（土耳其里维埃拉）旅游中心，卡莱伊奇老城临海而建：公开资料",
  },
  {
    id: "cappadocia", nameZh: "卡帕多奇亚（格雷梅）", nameEn: "Cappadocia (Göreme)", country: "turkey", tier: "notable", zone: "tr-central-anatolia",
    lon: 34.8286, lat: 38.6431,
    airport: { iata: "NAV", nameZh: "内夫谢希尔卡帕多奇亚机场", nameEn: "Nevşehir Kapadokya Airport", lon: 34.5344, lat: 38.7708 },
    source: "格雷梅镇中心 38.6431,34.8286；NAV机场（距格雷梅约40km，车程约35至40分钟），凯塞利阿散机场（ASR）距格雷梅约69km亦可作备选门户：公开资料",
  },
  {
    id: "bodrum", nameZh: "博德鲁姆", nameEn: "Bodrum", country: "turkey", tier: "notable", zone: "tr-aegean",
    lon: 27.4305, lat: 37.0344,
    airport: { iata: "BJV", nameZh: "米拉斯—博德鲁姆机场", nameEn: "Milas–Bodrum Airport", lon: 27.6644, lat: 37.2506 },
    source: "博德鲁姆市中心 37.0344,27.4305；BJV机场（距市区约36km），爱琴海南岸半岛度假胜地：公开资料",
  },
  {
    id: "pamukkale", nameZh: "棉花堡（代尼兹利）", nameEn: "Pamukkale (Denizli)", country: "turkey", tier: "notable", zone: "tr-aegean",
    lon: 29.1189, lat: 37.9203,
    airport: { iata: "DNZ", nameZh: "代尼兹利恰尔达克机场", nameEn: "Denizli Çardak Airport", lon: 29.5614, lat: 37.7856 },
    source: "棉花堡台地 37.9203,29.1189；DNZ机场（距棉花堡约65km，距代尼兹利市区约55km）：公开资料",
  },
  {
    id: "trabzon", nameZh: "特拉布宗", nameEn: "Trabzon", country: "turkey", tier: "notable", zone: "tr-black-sea",
    lon: 39.7168, lat: 41.0027,
    airport: { iata: "TZX", nameZh: "特拉布宗机场", nameEn: "Trabzon Airport", lon: 39.7897, lat: 40.9950 },
    source: "特拉布宗市中心 41.0027,39.7168；TZX机场（距市区约6km），黑海东岸港口城市，是前往苏美拉修道院的门户：公开资料",
  },
  {
    id: "konya", nameZh: "科尼亚", nameEn: "Konya", country: "turkey", tier: "notable", zone: "tr-central-anatolia",
    lon: 32.4932, lat: 37.8746,
    airport: { iata: "KYA", nameZh: "科尼亚机场", nameEn: "Konya Airport", lon: 32.5619, lat: 37.9787 },
    source: "科尼亚市中心 37.8746,32.4932；KYA机场（距市区约18km），塞尔柱王朝古都、鲁米与旋转苦行僧发源地：公开资料",
  },
  {
    id: "bursa", nameZh: "布尔萨", nameEn: "Bursa", country: "turkey", tier: "notable", zone: "tr-marmara",
    lon: 29.0665, lat: 40.1826,
    airport: { iata: "YEI", nameZh: "布尔萨耶尼谢希尔机场", nameEn: "Bursa Yenişehir Airport", lon: 29.5622, lat: 40.2530 },
    source: "布尔萨市中心 40.1826,29.0665；YEI机场（距市区约45km），奥斯曼帝国首个都城，紧邻乌鲁山：公开资料",
  },
  // 克罗地亚
  {
    id: "zagreb", nameZh: "萨格勒布", nameEn: "Zagreb", country: "croatia", tier: "capital", zone: "hr-zagreb",
    lon: 15.9819, lat: 45.8150,
    airport: { iata: "ZAG", nameZh: "萨格勒布弗拉尼奥·图季曼机场", nameEn: "Zagreb Franjo Tuđman Airport", lon: 16.0688, lat: 45.7429 },
    source: "萨格勒布市中心 45.8150,15.9819；ZAG机场（距市区约17km），克罗地亚首都与最大城市：公开资料",
  },
  {
    id: "split", nameZh: "斯普利特", nameEn: "Split", country: "croatia", tier: "major", zone: "hr-dalmatia",
    lon: 16.4402, lat: 43.5081,
    airport: { iata: "SPU", nameZh: "斯普利特机场", nameEn: "Split Airport", lon: 16.2981, lat: 43.5389 },
    source: "斯普利特市中心 43.5081,16.4402；SPU机场（距市区约19km），达尔马提亚地区最大城市，戴克里先宫所在地：公开资料",
  },
  {
    id: "dubrovnik", nameZh: "杜布罗夫尼克", nameEn: "Dubrovnik", country: "croatia", tier: "major", zone: "hr-dubrovnik",
    lon: 18.0944, lat: 42.6507,
    airport: { iata: "DBV", nameZh: "杜布罗夫尼克机场", nameEn: "Dubrovnik Airport", lon: 18.2682, lat: 42.5614 },
    source: "杜布罗夫尼克市中心 42.6507,18.0944；DBV机场（距市区约20km），南达尔马提亚沿海古城，1979年老城列入世界遗产：公开资料",
  },
  {
    id: "rijeka", nameZh: "里耶卡", nameEn: "Rijeka", country: "croatia", tier: "major", zone: "hr-istria-kvarner",
    lon: 14.4422, lat: 45.3271,
    airport: { iata: "RJK", nameZh: "里耶卡机场", nameEn: "Rijeka Airport", lon: 14.5703, lat: 45.2169 },
    source: "里耶卡市中心 45.3271,14.4422；RJK机场（位于克尔克岛上，距市区约30km），克罗地亚最大海港：公开资料",
  },
  {
    id: "zadar", nameZh: "扎达尔", nameEn: "Zadar", country: "croatia", tier: "notable", zone: "hr-dalmatia",
    lon: 15.2314, lat: 44.1194,
    airport: { iata: "ZAD", nameZh: "扎达尔机场", nameEn: "Zadar Airport", lon: 15.3467, lat: 44.1083 },
    source: "扎达尔市中心 44.1194,15.2314；ZAD机场（距市区约8km），北达尔马提亚古城，以海之风琴、科尔纳蒂群岛门户著称：公开资料",
  },
  {
    id: "pula", nameZh: "普拉", nameEn: "Pula", country: "croatia", tier: "notable", zone: "hr-istria-kvarner",
    lon: 13.8496, lat: 44.8666,
    airport: { iata: "PUY", nameZh: "普拉机场", nameEn: "Pula Airport", lon: 13.9222, lat: 44.8935 },
    source: "普拉市中心 44.8666,13.8496；PUY机场（距市区约6km），伊斯特拉半岛最大城市，古罗马竞技场所在地：公开资料",
  },
  {
    id: "osijek", nameZh: "奥西耶克", nameEn: "Osijek", country: "croatia", tier: "notable", zone: "hr-slavonia",
    lon: 18.6955, lat: 45.5550,
    airport: { iata: "OSI", nameZh: "奥西耶克机场", nameEn: "Osijek Airport", lon: 18.8103, lat: 45.4626 },
    source: "奥西耶克市中心 45.5550,18.6955；OSI机场（距市区约20km），斯拉沃尼亚地区最大城市，德拉瓦河畔：公开资料",
  },
  {
    id: "hvar-town", nameZh: "赫瓦尔镇", nameEn: "Hvar Town", country: "croatia", tier: "notable", zone: "hr-dalmatia",
    lon: 16.4413, lat: 43.1729,
    source: "赫瓦尔镇 43.1729,16.4413；岛上无机场，经斯普利特或杜布罗夫尼克机场转乘渡轮/双体船抵达，赫瓦尔岛以充足日照与薰衣草田闻名：公开资料",
  },
  // ===== 捷克 =====
  {
    id: "prague", nameZh: "布拉格", nameEn: "Prague", country: "czechia", tier: "capital", zone: "cz-prague",
    lon: 14.4208, lat: 50.0880,
    airport: { iata: "PRG", nameZh: "布拉格瓦茨拉夫·哈维尔机场", nameEn: "Václav Havel Airport Prague", lon: 14.2632, lat: 50.1018 },
    source: "布拉格市中心 50.0880,14.4208；PRG 机场（距市区约17km）：公开资料",
  },
  {
    id: "brno", nameZh: "布尔诺", nameEn: "Brno", country: "czechia", tier: "major", zone: "cz-moravia",
    lon: 16.6068, lat: 49.1951,
    airport: { iata: "BRQ", nameZh: "布尔诺-图拉尼机场", nameEn: "Brno-Tuřany Airport", lon: 16.6944, lat: 49.1514 },
    source: "布尔诺市中心 49.1951,16.6068；BRQ 机场（距市区约7.5km），捷克第二大城市、摩拉维亚地区中心：公开资料",
  },
  {
    id: "plzen", nameZh: "皮尔森（比尔森）", nameEn: "Plzeň (Pilsen)", country: "czechia", tier: "major", zone: "cz-west-bohemia",
    lon: 13.3775, lat: 49.7475,
    airport: { iata: "PRG", nameZh: "布拉格瓦茨拉夫·哈维尔机场", nameEn: "Václav Havel Airport Prague", lon: 14.2632, lat: 50.1018 },
    source: "皮尔森市中心 49.7475,13.3775；本地无商业机场，最近机场为布拉格机场（距市区约90km）：公开资料",
  },
  {
    id: "karlovy-vary", nameZh: "卡罗维发利", nameEn: "Karlovy Vary", country: "czechia", tier: "major", zone: "cz-west-bohemia",
    lon: 12.8725, lat: 50.2306,
    airport: { iata: "KLV", nameZh: "卡罗维发利机场", nameEn: "Karlovy Vary Airport", lon: 12.9150, lat: 50.2031 },
    source: "卡罗维发利市中心 50.2306,12.8725；KLV 机场（距市区约6km）：公开资料",
  },
  {
    id: "cesky-krumlov", nameZh: "切斯基克鲁姆洛夫", nameEn: "Český Krumlov", country: "czechia", tier: "notable", zone: "cz-south-bohemia",
    lon: 14.3153, lat: 48.8111,
    source: "切斯基克鲁姆洛夫市中心 48.8111,14.3153；本地无机场，最近机场为布拉格机场（距市区约170km），常经捷克布杰约维采公路转乘：公开资料",
  },
  {
    id: "kutna-hora", nameZh: "库特纳霍拉", nameEn: "Kutná Hora", country: "czechia", tier: "notable", zone: "cz-central-bohemia",
    lon: 15.2683, lat: 49.9483,
    source: "库特纳霍拉市中心 49.9483,15.2683；本地无机场，最近机场为布拉格机场（距市区约70km）：公开资料",
  },
  {
    id: "olomouc", nameZh: "奥洛穆茨", nameEn: "Olomouc", country: "czechia", tier: "major", zone: "cz-moravia",
    lon: 17.2508, lat: 49.5939,
    airport: { iata: "BRQ", nameZh: "布尔诺-图拉尼机场", nameEn: "Brno-Tuřany Airport", lon: 16.6944, lat: 49.1514 },
    source: "奥洛穆茨市中心 49.5939,17.2508；本地机场客运航班有限，最近有稳定定期航班的机场为布尔诺机场（距市区约75km）：公开资料",
  },
];

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
