import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 英国 ──
  {
    id: "london", nameZh: "伦敦", nameEn: "London", country: "uk", tier: "capital", zone: "uk-england-south", admin1Zh: "英格兰", admin1En: "England",
    lon: -0.1278, lat: 51.5074,
    airport: { iata: "LHR", nameZh: "希思罗机场", nameEn: "Heathrow", lon: -0.4543, lat: 51.4700 },
    source: "伦敦市中心 51.5074,-0.1278；LHR 机场：公开资料",
  },
  {
    id: "bristol", nameZh: "布里斯托尔", nameEn: "Bristol", country: "uk", tier: "notable", zone: "uk-england-south", admin1Zh: "英格兰", admin1En: "England",
    lon: -2.5879, lat: 51.4545,
    airport: { iata: "BRS", nameZh: "布里斯托尔机场", nameEn: "Bristol Airport", lon: -2.7191, lat: 51.3827 },
    source: "布里斯托尔市中心 51.4545,-2.5879；BRS 机场：公开资料",
  },
  {
    id: "birmingham", nameZh: "伯明翰", nameEn: "Birmingham", country: "uk", tier: "major", zone: "uk-england-midlands", admin1Zh: "英格兰", admin1En: "England",
    lon: -1.8904, lat: 52.4862,
    airport: { iata: "BHX", nameZh: "伯明翰机场", nameEn: "Birmingham Airport", lon: -1.7480, lat: 52.4539 },
    source: "伯明翰市中心 52.4862,-1.8904；BHX 机场：公开资料",
  },
  {
    id: "manchester", nameZh: "曼彻斯特", nameEn: "Manchester", country: "uk", tier: "major", zone: "uk-england-north", admin1Zh: "英格兰", admin1En: "England",
    lon: -2.2426, lat: 53.4808,
    airport: { iata: "MAN", nameZh: "曼彻斯特机场", nameEn: "Manchester Airport", lon: -2.2750, lat: 53.3537 },
    source: "曼彻斯特市中心 53.4808,-2.2426；MAN 机场：公开资料",
  },
  {
    id: "liverpool", nameZh: "利物浦", nameEn: "Liverpool", country: "uk", tier: "notable", zone: "uk-england-north", admin1Zh: "英格兰", admin1En: "England",
    lon: -2.9916, lat: 53.4084,
    airport: { iata: "LPL", nameZh: "利物浦约翰·列侬机场", nameEn: "Liverpool John Lennon", lon: -2.8497, lat: 53.3336 },
    source: "利物浦市中心 53.4084,-2.9916；LPL 机场：公开资料",
  },
  {
    id: "york", nameZh: "约克", nameEn: "York", country: "uk", tier: "notable", zone: "uk-england-north", admin1Zh: "英格兰", admin1En: "England",
    lon: -1.0873, lat: 53.9600,
    source: "约克市中心 53.9600,-1.0873：公开资料（无自有机场，就近用利兹或曼彻斯特）",
  },
  {
    id: "edinburgh", nameZh: "爱丁堡", nameEn: "Edinburgh", country: "uk", tier: "notable", zone: "uk-scotland", admin1Zh: "苏格兰", admin1En: "Scotland",
    lon: -3.1883, lat: 55.9533,
    airport: { iata: "EDI", nameZh: "爱丁堡机场", nameEn: "Edinburgh Airport", lon: -3.3725, lat: 55.9500 },
    source: "爱丁堡市中心 55.9533,-3.1883；EDI 机场：公开资料",
  },
  {
    id: "glasgow", nameZh: "格拉斯哥", nameEn: "Glasgow", country: "uk", tier: "major", zone: "uk-scotland", admin1Zh: "苏格兰", admin1En: "Scotland",
    lon: -4.2518, lat: 55.8642,
    airport: { iata: "GLA", nameZh: "格拉斯哥机场", nameEn: "Glasgow Airport", lon: -4.4331, lat: 55.8719 },
    source: "格拉斯哥市中心 55.8642,-4.2518；GLA 机场：公开资料",
  },
  {
    id: "aberdeen", nameZh: "阿伯丁", nameEn: "Aberdeen", country: "uk", tier: "notable", zone: "uk-scotland", admin1Zh: "苏格兰", admin1En: "Scotland",
    lon: -2.0943, lat: 57.1497,
    airport: { iata: "ABZ", nameZh: "阿伯丁机场", nameEn: "Aberdeen Airport", lon: -2.1978, lat: 57.2019 },
    source: "阿伯丁市中心 57.1497,-2.0943；ABZ 机场：公开资料",
  },
  {
    id: "inverness", nameZh: "因弗内斯", nameEn: "Inverness", country: "uk", tier: "notable", zone: "uk-scotland", admin1Zh: "苏格兰", admin1En: "Scotland",
    lon: -4.2247, lat: 57.4778,
    airport: { iata: "INV", nameZh: "因弗内斯机场", nameEn: "Inverness Airport", lon: -4.0475, lat: 57.5425 },
    source: "因弗内斯市中心 57.4778,-4.2247；INV 机场：公开资料",
  },
  {
    id: "cardiff", nameZh: "卡迪夫", nameEn: "Cardiff", country: "uk", tier: "notable", zone: "uk-wales", admin1Zh: "威尔士", admin1En: "Wales",
    lon: -3.1791, lat: 51.4816,
    airport: { iata: "CWL", nameZh: "卡迪夫机场", nameEn: "Cardiff Airport", lon: -3.3433, lat: 51.3967 },
    source: "卡迪夫市中心 51.4816,-3.1791；CWL 机场：公开资料",
  },
  {
    id: "belfast", nameZh: "贝尔法斯特", nameEn: "Belfast", country: "uk", tier: "notable", zone: "uk-northern-ireland", admin1Zh: "北爱尔兰", admin1En: "Northern Ireland",
    lon: -5.9301, lat: 54.5973,
    airport: { iata: "BFS", nameZh: "贝尔法斯特国际机场", nameEn: "Belfast Int'l", lon: -6.2158, lat: 54.6575 },
    source: "贝尔法斯特市中心 54.5973,-5.9301；BFS 机场：公开资料",
  },

  // ── 英国 批2（2026-09-05）──
  {
    id: "bath", nameZh: "巴斯", nameEn: "Bath", country: "uk", tier: "notable", zone: "uk-england-south", admin1Zh: "英格兰", admin1En: "England",
    lon: -2.3597, lat: 51.3814,
    airport: { iata: "BRS", nameZh: "布里斯托尔机场（经布里斯托尔转乘）", nameEn: "Bristol Airport (via Bristol)", lon: -2.7191, lat: 51.3827 },
    source: "Bath 51.3814,-2.3597（en.wikipedia）；无自有机场，与布里斯托尔条目共用 BRS（约 25 公里）；人口 94,080（2021 普查）",
  },
  {
    id: "oxford", nameZh: "牛津", nameEn: "Oxford", country: "uk", tier: "notable", zone: "uk-england-south", admin1Zh: "英格兰", admin1En: "England",
    lon: -1.2578, lat: 51.7519,
    source: "Oxford 51.7519,-1.2578（en.wikipedia）；无机场，最近为伦敦希思罗（约 80 公里），条目不写机场字段，铁路到帕丁顿约 1 小时；人口 162,040（2021 普查）",
  },
  {
    id: "cambridge", nameZh: "剑桥", nameEn: "Cambridge", country: "uk", tier: "notable", zone: "uk-england-south", admin1Zh: "英格兰", admin1En: "England",
    lon: 0.1225, lat: 52.2050,
    source: "Cambridge 52.2050,0.1225（en.wikipedia）；无机场，最近为伦敦斯坦斯特德（约 48 公里），条目不写机场字段，铁路到伦敦约 50 分钟；人口 145,700（2021 普查）",
  },
  {
    id: "brighton", nameZh: "布莱顿", nameEn: "Brighton", country: "uk", tier: "notable", zone: "uk-england-south", admin1Zh: "英格兰", admin1En: "England",
    lon: -0.1528, lat: 50.8278,
    source: "Brighton and Hove 50.8278,-0.1528（en.wikipedia）；无机场，最近为盖特威克（约 45 公里），条目不写机场字段，铁路到伦敦维多利亚约 1 小时；人口 283,870（2021 普查）",
  },
  {
    id: "newcastle-upon-tyne", nameZh: "泰恩河畔纽卡斯尔", nameEn: "Newcastle upon Tyne", country: "uk", tier: "notable", zone: "uk-england-north", admin1Zh: "英格兰", admin1En: "England",
    lon: -1.6131, lat: 54.9738,
    airport: { iata: "NCL", nameZh: "纽卡斯尔国际机场", nameEn: "Newcastle Int'l", lon: -1.6897, lat: 55.0381 },
    source: "Newcastle upon Tyne 54.9738,-1.6131（en.wikipedia）；NCL 机场：en.wikipedia（市中心西北约 12 公里，地铁直达）；人口 320,605（2021 普查）",
  },
  {
    id: "stirling", nameZh: "斯特灵", nameEn: "Stirling", country: "uk", tier: "notable", zone: "uk-scotland", admin1Zh: "苏格兰", admin1En: "Scotland",
    lon: -3.9369, lat: 56.1166,
    source: "Stirling 56.1166,-3.9369（en.wikipedia）；无机场，最近为格拉斯哥（约 42 公里）、爱丁堡（约 60 公里），条目不写机场字段；人口 38,587（2021）",
  },
  {
    id: "portree", nameZh: "波特里（斯凯岛）", nameEn: "Portree (Isle of Skye)", country: "uk", tier: "notable", zone: "uk-scotland", admin1Zh: "苏格兰", admin1En: "Scotland",
    lon: -6.1920, lat: 57.4120,
    source: "Portree 57.4120,-6.1920（en.wikipedia）；无机场，最近为因弗内斯（约 119 公里），条目不写机场字段，经斯凯桥公路进岛；人口 2,281（2022 普查）",
  },
  {
    id: "windermere", nameZh: "温德米尔（湖区）", nameEn: "Windermere (Lake District)", country: "uk", tier: "notable", zone: "uk-england-north", admin1Zh: "英格兰", admin1En: "England",
    lon: -2.9070, lat: 54.3760,
    source: "Windermere town 54.3760,-2.9070（en.wikipedia）；无机场，最近为曼彻斯特（约 130 公里），条目不写机场字段，支线铁路自奥克森霍姆接西海岸干线；人口 4,826（2021）",
  },
];
