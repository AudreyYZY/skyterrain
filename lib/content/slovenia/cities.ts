import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 欧洲 / 斯洛文尼亚 =====
  // 南欧次区域第六国。安全与零争议前置判断：无活跃冲突、不在 §2.1 排除名单内；
  // 条目只写地理、制度与广泛记载的前现代史；**国土南缘与东南缘的邻国不写国名**，
  // 海岸城市**不写海湾划界与海域问题**；一战之后的政治 / 领土 / 民族议题一律不碰。
  // 人口一律用 SURS 2026-01-01 的市镇（občina）人口（SiStat 05E1022S，2026H1）。
  {
    id: "ljubljana", nameZh: "卢布尔雅那", nameEn: "Ljubljana", country: "slovenia", tier: "capital", zone: "si-central",
    admin1Zh: "中斯洛文尼亚统计区", admin1En: "Central Slovenia Statistical Region",
    lon: 14.5051, lat: 46.0511,
    airport: { iata: "LJU", nameZh: "卢布尔雅那约热·普奇尼克机场", nameEn: "Ljubljana Jože Pučnik Airport", lon: 14.4576, lat: 46.2237 },
    source: "卢布尔雅那市中心 46.0511,14.5051；LJU 机场 46.2237,14.4576（在城北布尔尼克，按本条目坐标算直线约 20 km、公路约 26 km）：公开资料与卢布尔雅那旅游局",
  },
  {
    id: "maribor", nameZh: "马里博尔", nameEn: "Maribor", country: "slovenia", tier: "major", zone: "si-east",
    admin1Zh: "德拉瓦统计区", admin1En: "Drava Statistical Region",
    lon: 15.6459, lat: 46.5547,
    source: "马里博尔市中心 46.5547,15.6459；本地的爱德华·鲁希扬机场（MBX）无稳定定期客运航班，不填 airport 字段；有定期航班的最近机场为奥地利格拉茨（直线约 51 km）与卢布尔雅那 LJU（直线约 98 km），按本条目坐标算：公开资料",
  },
  {
    id: "celje", nameZh: "采列", nameEn: "Celje", country: "slovenia", tier: "major", zone: "si-east",
    admin1Zh: "萨维尼亚统计区", admin1En: "Savinja Statistical Region",
    lon: 15.2604, lat: 46.2309,
    source: "采列市中心 46.2309,15.2604；本地无民用机场，最近有定期航班的机场为卢布尔雅那 LJU（直线约 62 km，按本条目坐标算）：公开资料",
  },
  {
    id: "kranj", nameZh: "克拉尼", nameEn: "Kranj", country: "slovenia", tier: "notable", zone: "si-alps",
    admin1Zh: "上卡尼奥拉统计区", admin1En: "Upper Carniola Statistical Region",
    lon: 14.3556, lat: 46.2389,
    source: "克拉尼老城 46.2389,14.3556；本市无自有机场，卢布尔雅那 LJU 机场在城东（直线约 8 km，按本条目坐标算；公开资料多写约 9.5 km），属采尔克列市镇、不在克拉尼市域内：公开资料",
  },
  {
    id: "koper", nameZh: "科佩尔", nameEn: "Koper", country: "slovenia", tier: "notable", zone: "si-coast",
    admin1Zh: "沿海—喀斯特统计区", admin1En: "Coastal–Karst Statistical Region",
    lon: 13.7302, lat: 45.5481,
    source: "科佩尔老城 45.5481,13.7302；本地无民用机场，最近有定期航班的机场为意大利的里雅斯特（直线约 37 km）与卢布尔雅那 LJU（直线约 94 km），按本条目坐标算：公开资料",
  },
  {
    id: "piran", nameZh: "皮兰", nameEn: "Piran", country: "slovenia", tier: "notable", zone: "si-coast",
    admin1Zh: "沿海—喀斯特统计区", admin1En: "Coastal–Karst Statistical Region",
    lon: 13.5683, lat: 45.5283,
    source: "皮兰塔尔蒂尼广场 45.5283,13.5683；市镇内的波尔托罗日机场以通用航空为主、无稳定定期客运航班，不填 airport 字段；最近有定期航班的机场为意大利的里雅斯特（直线约 34 km）与卢布尔雅那 LJU（直线约 104 km），按本条目坐标算：公开资料",
  },
  {
    id: "bled", nameZh: "布莱德", nameEn: "Bled", country: "slovenia", tier: "notable", zone: "si-alps",
    admin1Zh: "上卡尼奥拉统计区", admin1En: "Upper Carniola Statistical Region",
    lon: 14.1146, lat: 46.3683,
    source: "布莱德镇中心 46.3683,14.1146；本地无机场，卢布尔雅那 LJU 机场直线约 31 km（按本条目坐标算），布莱德旅游局口径为距机场约 35 km、距卢布尔雅那约 55 km：公开资料",
  },
  {
    id: "ptuj", nameZh: "普图伊", nameEn: "Ptuj", country: "slovenia", tier: "notable", zone: "si-east",
    admin1Zh: "德拉瓦统计区", admin1En: "Drava Statistical Region",
    lon: 15.8700, lat: 46.4200,
    source: "普图伊老城 46.4200,15.8700；本地无民用机场，最近有定期航班的机场为奥地利格拉茨（直线约 71 km）与卢布尔雅那 LJU（直线约 111 km），按本条目坐标算：公开资料",
  },
  {
    id: "idrija", nameZh: "伊德里亚", nameEn: "Idrija", country: "slovenia", tier: "notable", zone: "si-west",
    admin1Zh: "戈里察统计区", admin1En: "Goriška Statistical Region",
    lon: 14.0219, lat: 46.0008,
    source: "伊德里亚老城主广场 46.0008,14.0219（OSM）；普通市镇（gov.si 市镇名录，1 级）；本地没有定期航班的机场，不填 airport；卢布尔雅那 LJU 直线约 42 km（按 OurAirports 算）；离国界约 30 km（按 OSM 边界算，已有城市补充批，2026-09-15）",
  },
  {
    id: "postojna", nameZh: "波斯托伊纳", nameEn: "Postojna", country: "slovenia", tier: "notable", zone: "si-west",
    admin1Zh: "滨海—内卡尼奥拉统计区", admin1En: "Littoral–Inner Carniola Statistical Region",
    lon: 14.2131, lat: 45.7751,
    source: "波斯托伊纳镇中心 45.7751,14.2131（OSM）；普通市镇（gov.si，1 级）；本地没有定期航班的机场，不填 airport；卢布尔雅那 LJU 直线约 53 km（按 OurAirports 算）；溶洞入口在镇中心西北约 1.1 km、普雷德亚马城堡直线约 8 km（按 OSM 坐标算）；离国界约 28 km（已有城市补充批，2026-09-15）",
  },
];
