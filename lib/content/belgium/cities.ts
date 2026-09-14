import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 比利时 =====
  {
    id: "brussels", nameZh: "布鲁塞尔", nameEn: "Brussels", country: "belgium", tier: "capital", zone: "be-brussels", admin1Zh: "布鲁塞尔首都区", admin1En: "Brussels-Capital Region",
    lon: 4.3517, lat: 50.8503,
    airport: { iata: "BRU", nameZh: "布鲁塞尔机场（扎芬特姆）", nameEn: "Brussels Airport (Zaventem)", lon: 4.4844, lat: 50.9014 },
    source: "布鲁塞尔市中心 50.8503,4.3517；BRU 机场：公开资料",
  },
  {
    id: "antwerp", nameZh: "安特卫普", nameEn: "Antwerp", country: "belgium", tier: "major", zone: "be-antwerp", admin1Zh: "安特卫普省", admin1En: "Antwerp Province",
    lon: 4.4025, lat: 51.2194,
    airport: { iata: "ANR", nameZh: "安特卫普机场（德尔讷）", nameEn: "Antwerp Airport (Deurne)", lon: 4.4603, lat: 51.1892 },
    source: "安特卫普市中心 51.2194,4.4025；ANR 机场：公开资料",
  },
  {
    id: "bruges", nameZh: "布鲁日", nameEn: "Bruges", country: "belgium", tier: "major", zone: "be-west-flanders", admin1Zh: "西弗兰德省", admin1En: "West Flanders",
    lon: 3.2247, lat: 51.2093,
    airport: { iata: "OST", nameZh: "奥斯坦德—布鲁日国际机场", nameEn: "Ostend-Bruges International Airport", lon: 2.8642, lat: 51.1989 },
    source: "布鲁日市中心 51.2093,3.2247；OST 机场：公开资料",
  },
  {
    id: "ghent", nameZh: "根特", nameEn: "Ghent", country: "belgium", tier: "notable", zone: "be-east-flanders", admin1Zh: "东弗兰德省", admin1En: "East Flanders",
    lon: 3.7174, lat: 51.0543,
    airport: { iata: "BRU", nameZh: "布鲁塞尔机场（扎芬特姆）", nameEn: "Brussels Airport (Zaventem)", lon: 4.4844, lat: 50.9014 },
    source: "根特市中心 51.0543,3.7174；本地无商业机场，最近机场为布鲁塞尔机场（距市区约55km）：公开资料",
  },
  {
    id: "liege", nameZh: "列日", nameEn: "Liège", country: "belgium", tier: "notable", zone: "be-liege", admin1Zh: "列日省", admin1En: "Liège Province",
    lon: 5.5731, lat: 50.6326,
    airport: { iata: "BRU", nameZh: "布鲁塞尔机场（扎芬特姆）（经布鲁塞尔转乘）", nameEn: "Brussels Airport (Zaventem) (via Brussels)", lon: 4.4844, lat: 50.9014 },
    source: "列日市中心 50.6326,5.5731；LGG 机场：公开资料",
  },
  {
    id: "namur", nameZh: "那慕尔", nameEn: "Namur", country: "belgium", tier: "notable", zone: "be-namur", admin1Zh: "那慕尔省", admin1En: "Namur Province",
    lon: 4.8657, lat: 50.4669,
    airport: { iata: "CRL", nameZh: "布鲁塞尔南沙勒罗瓦机场", nameEn: "Brussels South Charleroi Airport", lon: 4.4538, lat: 50.4592 },
    source: "那慕尔市中心 50.4669,4.8657；本地无商业机场，最近机场为布鲁塞尔南沙勒罗瓦机场（距市区约35km）：公开资料",
  },
  {
    id: "leuven", nameZh: "鲁汶", nameEn: "Leuven", country: "belgium", tier: "notable", zone: "be-flemish-brabant", admin1Zh: "佛兰芒布拉班特省", admin1En: "Flemish Brabant",
    lon: 4.7011, lat: 50.8798,
    airport: { iata: "BRU", nameZh: "布鲁塞尔机场（扎芬特姆）", nameEn: "Brussels Airport (Zaventem)", lon: 4.4844, lat: 50.9014 },
    source: "鲁汶市中心 50.8798,4.7011；本地无商业机场，最近机场为布鲁塞尔机场（距市区约25km）：公开资料",
  },
  {
    id: "mons", nameZh: "蒙斯", nameEn: "Mons", country: "belgium", tier: "notable", zone: "be-hainaut", admin1Zh: "埃诺省", admin1En: "Hainaut",
    lon: 3.9520, lat: 50.4542,
    airport: { iata: "CRL", nameZh: "布鲁塞尔南沙勒罗瓦机场", nameEn: "Brussels South Charleroi Airport", lon: 4.4538, lat: 50.4592 },
    source: "蒙斯市中心 50.4542,3.9520；本地无商业机场，最近机场为布鲁塞尔南沙勒罗瓦机场（距市区直线约 36 km，按本条目坐标算）：公开资料",
  },
  {
    id: "dinant", nameZh: "迪南", nameEn: "Dinant", country: "belgium", tier: "notable", zone: "be-namur", admin1Zh: "那慕尔省", admin1En: "Namur Province",
    lon: 4.9127, lat: 50.2603,
    airport: { iata: "CRL", nameZh: "布鲁塞尔南沙勒罗瓦机场", nameEn: "Brussels South Charleroi Airport", lon: 4.4538, lat: 50.4592 },
    source: "迪南市中心 50.2603,4.9127；本地无商业机场，最近机场为布鲁塞尔南沙勒罗瓦机场（距市区约50km）：公开资料",
  },
  {
    id: "ostend", nameZh: "奥斯坦德", nameEn: "Ostend", country: "belgium", tier: "notable", zone: "be-west-flanders", admin1Zh: "西弗兰德省", admin1En: "West Flanders",
    lon: 2.9265, lat: 51.2154,
    airport: { iata: "OST", nameZh: "奥斯坦德—布鲁日国际机场", nameEn: "Ostend-Bruges International Airport", lon: 2.8642, lat: 51.1989 },
    source: "奥斯坦德市中心 51.2154,2.9265；OST 机场：公开资料",
  },
  {
    id: "spa", nameZh: "斯帕", nameEn: "Spa", country: "belgium", tier: "notable", zone: "be-liege", admin1Zh: "列日省", admin1En: "Liège Province",
    lon: 5.8642, lat: 50.4914,
    airport: { iata: "BRU", nameZh: "布鲁塞尔机场（扎芬特姆）（经布鲁塞尔转乘）", nameEn: "Brussels Airport (Zaventem) (via Brussels)", lon: 4.4844, lat: 50.9014 },
    source: "斯帕市中心 50.4914,5.8642；本地无商业机场；列日机场直线约 34 km 但已无定期客运航班，故 airport 字段填布鲁塞尔机场（直线约 107 km，按本条目坐标算）：公开资料",
  },
];
