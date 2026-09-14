import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 智利 ──
  {
    id: "santiago", nameZh: "圣地亚哥", nameEn: "Santiago", country: "chile", tier: "capital", zone: "cl-centro",
    admin1Zh: "圣地亚哥首都大区", admin1En: "Santiago Metropolitan Region",
    lon: -70.6693, lat: -33.4489,
    airport: { iata: "SCL", nameZh: "圣地亚哥阿图罗·梅里诺·贝尼特斯机场", nameEn: "Santiago Arturo Merino Benítez Airport", lon: -70.7858, lat: -33.3930 },
    source: "圣地亚哥市中心 -33.4489,-70.6693；SCL 机场坐标：公开资料",
  },
  {
    id: "valparaiso", nameZh: "瓦尔帕莱索", nameEn: "Valparaíso", country: "chile", tier: "major", zone: "cl-centro",
    admin1Zh: "瓦尔帕莱索大区", admin1En: "Valparaíso Region",
    lon: -71.6127, lat: -33.0472,
    source: "瓦尔帕莱索市中心 -33.0472,-71.6127；本地无定期商用机场，最近机场为圣地亚哥机场（距市区约115km）：公开资料",
  },
  {
    id: "antofagasta", nameZh: "安托法加斯塔", nameEn: "Antofagasta", country: "chile", tier: "major", zone: "cl-norte-grande",
    admin1Zh: "安托法加斯塔大区", admin1En: "Antofagasta Region",
    lon: -70.3975, lat: -23.6509,
    airport: { iata: "ANF", nameZh: "安德烈斯·萨贝利亚机场", nameEn: "Andrés Sabella Gálvez Airport", lon: -70.4451, lat: -23.4445 },
    source: "安托法加斯塔市中心 -23.6509,-70.3975；ANF 机场坐标：公开资料",
  },
  {
    id: "calama", nameZh: "卡拉马", nameEn: "Calama", country: "chile", tier: "notable", zone: "cl-norte-grande",
    admin1Zh: "安托法加斯塔大区", admin1En: "Antofagasta Region",
    lon: -68.9333, lat: -22.4667,
    airport: { iata: "CJC", nameZh: "埃尔洛阿机场", nameEn: "El Loa Airport", lon: -68.9036, lat: -22.4983 },
    source: "卡拉马市中心 -22.4667,-68.9333；CJC 机场坐标：公开资料，是圣佩德罗德阿塔卡马旅游区的主要空中门户",
  },
  {
    id: "san-pedro-de-atacama", nameZh: "圣佩德罗德阿塔卡马", nameEn: "San Pedro de Atacama", country: "chile", tier: "notable", zone: "cl-norte-grande",
    admin1Zh: "安托法加斯塔大区", admin1En: "Antofagasta Region",
    lon: -68.1997, lat: -22.9087,
    source: "圣佩德罗德阿塔卡马镇中心 -22.9087,-68.1997；本地无机场，最近机场为卡拉马埃尔洛阿机场（距市区约100km）：公开资料",
  },
  {
    id: "la-serena", nameZh: "拉塞雷纳", nameEn: "La Serena", country: "chile", tier: "major", zone: "cl-norte-chico",
    admin1Zh: "科金博大区", admin1En: "Coquimbo Region",
    lon: -71.2519, lat: -29.9027,
    airport: { iata: "LSC", nameZh: "拉弗洛里达机场", nameEn: "La Florida Airport", lon: -71.1994, lat: -29.9162 },
    source: "拉塞雷纳市中心 -29.9027,-71.2519；LSC 机场坐标：公开资料",
  },
  {
    id: "concepcion", nameZh: "康塞普西翁", nameEn: "Concepción", country: "chile", tier: "major", zone: "cl-sur",
    admin1Zh: "比奥比奥大区", admin1En: "Biobío Region",
    lon: -73.0444, lat: -36.8201,
    airport: { iata: "CCP", nameZh: "卡列尔苏尔机场", nameEn: "Carriel Sur Airport", lon: -73.0631, lat: -36.7727 },
    source: "康塞普西翁市中心 -36.8201,-73.0444；CCP 机场坐标：公开资料，是智利第二大都会区",
  },
  {
    id: "temuco", nameZh: "特木科", nameEn: "Temuco", country: "chile", tier: "major", zone: "cl-sur",
    admin1Zh: "阿劳卡尼亚大区", admin1En: "Araucanía Region",
    lon: -72.5904, lat: -38.7359,
    airport: { iata: "ZCO", nameZh: "拉阿劳卡尼亚机场", nameEn: "La Araucanía Airport", lon: -72.6515, lat: -38.9259 },
    source: "特木科市中心 -38.7359,-72.5904；ZCO 机场坐标：公开资料",
  },
  {
    id: "pucon", nameZh: "普孔", nameEn: "Pucón", country: "chile", tier: "notable", zone: "cl-sur",
    admin1Zh: "阿劳卡尼亚大区", admin1En: "Araucanía Region",
    lon: -71.9752, lat: -39.2819,
    source: "普孔镇中心 -39.2819,-71.9752；本地小型机场无定期商业航班，最近有定期航班的机场为特木科拉阿劳卡尼亚机场（距市区约100km）：公开资料",
  },
  {
    id: "puerto-varas", nameZh: "普埃托瓦拉斯", nameEn: "Puerto Varas", country: "chile", tier: "notable", zone: "cl-sur",
    admin1Zh: "洛斯拉戈斯大区", admin1En: "Los Lagos Region",
    lon: -72.9856, lat: -41.3195,
    source: "普埃托瓦拉斯市中心 -41.3195,-72.9856；本地无机场，最近机场为普埃托蒙特埃尔特帕尔机场（距市区约20km）：公开资料",
  },
  {
    id: "puerto-montt", nameZh: "普埃托蒙特", nameEn: "Puerto Montt", country: "chile", tier: "major", zone: "cl-sur",
    admin1Zh: "洛斯拉戈斯大区", admin1En: "Los Lagos Region",
    lon: -72.9424, lat: -41.4693,
    airport: { iata: "PMC", nameZh: "埃尔特帕尔机场", nameEn: "El Tepual Airport", lon: -73.0940, lat: -41.4389 },
    source: "普埃托蒙特市中心 -41.4693,-72.9424；PMC 机场坐标：公开资料，是智利南部通往巴塔哥尼亚的主要空中门户",
  },
  {
    id: "coyhaique", nameZh: "科伊艾克", nameEn: "Coyhaique", country: "chile", tier: "notable", zone: "cl-patagonia",
    admin1Zh: "艾森大区", admin1En: "Aysén Region",
    lon: -72.0685, lat: -45.5712,
    airport: { iata: "BBA", nameZh: "巴尔马塞达机场", nameEn: "Balmaceda Airport", lon: -71.6897, lat: -45.9159 },
    source: "科伊艾克市中心 -45.5712,-72.0685；本地小型机场（Teniente Vidal）无定期商业航班，实际商业航空门户为巴尔马塞达机场（距市区约55km）：公开资料",
  },
  {
    id: "punta-arenas", nameZh: "蓬塔阿雷纳斯", nameEn: "Punta Arenas", country: "chile", tier: "major", zone: "cl-patagonia",
    admin1Zh: "麦哲伦与智利南极大区", admin1En: "Magallanes Region",
    lon: -70.9171, lat: -53.1638,
    airport: { iata: "PUQ", nameZh: "卡洛斯·伊瓦涅斯·德尔坎波总统机场", nameEn: "Presidente Carlos Ibáñez del Campo Airport", lon: -70.8546, lat: -53.0026 },
    source: "蓬塔阿雷纳斯市中心 -53.1638,-70.9171；PUQ 机场坐标：公开资料，是智利前往百内国家公园与南极的主要门户",
  },
  {
    id: "hanga-roa", nameZh: "汉加罗阿", nameEn: "Hanga Roa", country: "chile", tier: "notable", zone: "cl-isla-de-pascua",
    admin1Zh: "瓦尔帕莱索大区·复活节岛省", admin1En: "Valparaíso Region · Easter Island Province",
    lon: -109.3497, lat: -27.1127,
    airport: { iata: "IPC", nameZh: "马塔维里机场", nameEn: "Mataveri Airport", lon: -109.4219, lat: -27.1648 },
    source: "汉加罗阿镇中心 -27.1127,-109.3497；IPC 机场坐标：公开资料，是复活节岛唯一的机场与聚落",
  },
];
