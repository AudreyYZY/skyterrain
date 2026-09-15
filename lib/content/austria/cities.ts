import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 奥地利 =====
  {
    id: "vienna", nameZh: "维也纳", nameEn: "Vienna", country: "austria", tier: "capital", zone: "at-wien", admin1Zh: "维也纳", admin1En: "Vienna",
    lon: 16.3738, lat: 48.2082,
    airport: { iata: "VIE", nameZh: "维也纳国际机场", nameEn: "Vienna International Airport", lon: 16.5697, lat: 48.1103 },
    source: "维也纳市中心 48.2082,16.3738；VIE 机场：公开资料",
  },
  {
    id: "salzburg", nameZh: "萨尔茨堡", nameEn: "Salzburg", country: "austria", tier: "major", zone: "at-salzburg", admin1Zh: "萨尔茨堡州", admin1En: "Salzburg",
    lon: 13.0550, lat: 47.8095,
    airport: { iata: "SZG", nameZh: "萨尔茨堡莫扎特机场", nameEn: "Salzburg Airport W. A. Mozart", lon: 13.0043, lat: 47.7933 },
    source: "萨尔茨堡市中心 47.8095,13.0550；SZG 机场：公开资料",
  },
  {
    id: "innsbruck", nameZh: "因斯布鲁克", nameEn: "Innsbruck", country: "austria", tier: "major", zone: "at-tirol", admin1Zh: "蒂罗尔州", admin1En: "Tyrol",
    lon: 11.4041, lat: 47.2692,
    airport: { iata: "INN", nameZh: "因斯布鲁克机场", nameEn: "Innsbruck Airport", lon: 11.3440, lat: 47.2602 },
    source: "因斯布鲁克市中心 47.2692,11.4041；INN 机场：公开资料",
  },
  {
    id: "graz", nameZh: "格拉茨", nameEn: "Graz", country: "austria", tier: "notable", zone: "at-steiermark", admin1Zh: "施泰尔马克州", admin1En: "Styria",
    lon: 15.4395, lat: 47.0707,
    airport: { iata: "GRZ", nameZh: "格拉茨机场", nameEn: "Graz Airport", lon: 15.4396, lat: 46.9911 },
    source: "格拉茨市中心 47.0707,15.4395；GRZ 机场：公开资料",
  },
  {
    id: "linz", nameZh: "林茨", nameEn: "Linz", country: "austria", tier: "notable", zone: "at-oberosterreich", admin1Zh: "上奥地利州", admin1En: "Upper Austria",
    lon: 14.2858, lat: 48.3069,
    airport: { iata: "LNZ", nameZh: "林茨蓝色多瑙河机场", nameEn: "Linz Blue Danube Airport", lon: 14.1875, lat: 48.2332 },
    source: "林茨市中心 48.3069,14.2858；LNZ 机场：公开资料",
  },
  {
    id: "klagenfurt", nameZh: "克拉根福", nameEn: "Klagenfurt", country: "austria", tier: "notable", zone: "at-karnten", admin1Zh: "克恩顿州", admin1En: "Carinthia",
    lon: 14.3050, lat: 46.6247,
    airport: { iata: "KLU", nameZh: "克拉根福机场", nameEn: "Klagenfurt Airport", lon: 14.3377, lat: 46.6425 },
    source: "克拉根福市中心 46.6247,14.3050；KLU 机场：公开资料",
  },
  {
    id: "villach", nameZh: "菲拉赫", nameEn: "Villach", country: "austria", tier: "notable", zone: "at-karnten", admin1Zh: "克恩顿州", admin1En: "Carinthia",
    lon: 13.8558, lat: 46.6111,
    airport: { iata: "KLU", nameZh: "克拉根福机场", nameEn: "Klagenfurt Airport", lon: 14.3377, lat: 46.6425 },
    source: "菲拉赫市中心 46.6111,13.8558；本地无商业机场，最近机场为克拉根福机场（距市区约40km）：公开资料",
  },
  {
    id: "hallstatt", nameZh: "哈尔施塔特", nameEn: "Hallstatt", country: "austria", tier: "notable", zone: "at-oberosterreich", admin1Zh: "上奥地利州", admin1En: "Upper Austria",
    lon: 13.6486, lat: 47.5622,
    airport: { iata: "SZG", nameZh: "萨尔茨堡莫扎特机场", nameEn: "Salzburg Airport W. A. Mozart", lon: 13.0043, lat: 47.7933 },
    source: "哈尔施塔特村中心 47.5622,13.6486；本地无商业机场，最近机场为萨尔茨堡机场（距市区约70km）：公开资料",
  },
  {
    id: "kitzbuhel-city", nameZh: "基茨比厄尔", nameEn: "Kitzbühel", country: "austria", tier: "notable", zone: "at-tirol", admin1Zh: "蒂罗尔州", admin1En: "Tyrol",
    lon: 12.3925, lat: 47.4467,
    airport: { iata: "INN", nameZh: "因斯布鲁克机场", nameEn: "Innsbruck Airport", lon: 11.3440, lat: 47.2602 },
    source: "基茨比厄尔市中心 47.4467,12.3925；本地无商业机场，最近机场为因斯布鲁克机场（距市区约80km）：公开资料",
  },
  {
    id: "bregenz", nameZh: "布雷根茨", nameEn: "Bregenz", country: "austria", tier: "notable", zone: "at-vorarlberg", admin1Zh: "福拉尔贝格州", admin1En: "Vorarlberg",
    lon: 9.7471, lat: 47.5031,
    airport: { iata: "FDH", nameZh: "腓特烈港机场", nameEn: "Friedrichshafen Airport", lon: 9.5115, lat: 47.6713 },
    source: "布雷根茨市中心 47.5031,9.7471；本地无商业机场，最近机场为德国腓特烈港机场（距市区约25km）：公开资料",
  },
  {
    id: "zell-am-see", nameZh: "采尔湖畔采尔", nameEn: "Zell am See", country: "austria", tier: "notable", zone: "at-salzburg", admin1Zh: "萨尔茨堡州", admin1En: "Salzburg",
    lon: 12.7942, lat: 47.3239,
    airport: { iata: "SZG", nameZh: "萨尔茨堡莫扎特机场", nameEn: "Salzburg Airport W. A. Mozart", lon: 13.0043, lat: 47.7933 },
    source: "采尔湖畔采尔市中心 47.3239,12.7942；本地无商业机场，最近机场为萨尔茨堡机场（距市区约80km）：公开资料",
  },

  // ── 奥地利 批2（2026-09-05）──
  {
    id: "sankt-polten", nameZh: "圣珀尔滕", nameEn: "Sankt Pölten", country: "austria", tier: "notable", zone: "at-niederosterreich", admin1Zh: "下奥地利州", admin1En: "Lower Austria",
    lon: 15.6167, lat: 48.2000,
    airport: { iata: "VIE", nameZh: "维也纳国际机场（经维也纳转乘）", nameEn: "Vienna International Airport (via Vienna)", lon: 16.5697, lat: 48.1103 },
    source: "Sankt Pölten 48.2000,15.6167（en.wikipedia）；无自有机场，与维也纳条目共用 VIE（约 85 公里，Railjet 直达）；人口 59,767（2025-01）",
  },
  {
    id: "krems", nameZh: "克雷姆斯（瓦豪）", nameEn: "Krems an der Donau (Wachau)", country: "austria", tier: "notable", zone: "at-niederosterreich", admin1Zh: "下奥地利州", admin1En: "Lower Austria",
    lon: 15.6167, lat: 48.4167,
    source: "Krems 48.4167,15.6167（en.wikipedia）；无机场，最近为维也纳 VIE（约 90 公里），条目不写机场字段，火车自维也纳约 1 小时；人口 25,272（2023-01）；瓦豪文化景观 2000 世界遗产",
  },
  {
    id: "bad-ischl", nameZh: "巴特伊舍尔", nameEn: "Bad Ischl", country: "austria", tier: "notable", zone: "at-oberosterreich", admin1Zh: "上奥地利州", admin1En: "Upper Austria",
    lon: 13.6333, lat: 47.7203,
    airport: { iata: "SZG", nameZh: "萨尔茨堡莫扎特机场（经萨尔茨堡转乘）", nameEn: "Salzburg Airport W. A. Mozart (via Salzburg)", lon: 13.0043, lat: 47.7933 },
    source: "Bad Ischl 47.7203,13.6333（en.wikipedia）；无自有机场，与萨尔茨堡条目共用 SZG（约 55 公里）；人口 14,133（2018-01）；2024 欧洲文化之都",
  },
  {
    id: "eisenstadt", nameZh: "艾森施塔特", nameEn: "Eisenstadt", country: "austria", tier: "notable", zone: "at-burgenland", admin1Zh: "布尔根兰州", admin1En: "Burgenland",
    lon: 16.5233, lat: 47.8457,
    airport: { iata: "VIE", nameZh: "维也纳国际机场（经维也纳转乘）", nameEn: "Vienna International Airport (via Vienna)", lon: 16.5697, lat: 48.1103 },
    source: "Eisenstadt 老城 47.8457,16.5233（2026-09-16 由 en.wikipedia 度分粗坐标改为老城核心，check:layout-bearings 查出）；无自有机场，与维也纳条目共用 VIE（约 45 公里）；人口 16,118（2025）",
  },
  {
    id: "st-anton", nameZh: "圣安东（阿尔贝格）", nameEn: "St. Anton am Arlberg", country: "austria", tier: "notable", zone: "at-tirol", admin1Zh: "蒂罗尔州", admin1En: "Tyrol",
    lon: 10.2670, lat: 47.1300,
    source: "St. Anton am Arlberg 村中心 47.1300,10.2670（2026-09-16 由 en.wikipedia 度分粗坐标改为村中心 / 车站一带，check:layout-bearings 查出；海拔 1,304 米）；无机场，最近为因斯布鲁克（约 100 公里）、苏黎世（约 200 公里），条目不写机场字段，阿尔贝格铁路直达；人口 2,357（2021）",
  },
];
