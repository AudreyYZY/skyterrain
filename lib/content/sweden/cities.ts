import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
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
    source: "奥勒市中心 63.3986,13.0817；OSD 机场（距市区直线约 75 km，按本条目坐标算）：公开资料",
  },
];
