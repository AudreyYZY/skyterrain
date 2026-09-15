import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ===== 捷克 =====
  {
    id: "prague", nameZh: "布拉格", nameEn: "Prague", country: "czechia", tier: "capital", zone: "cz-prague", admin1Zh: "布拉格", admin1En: "Prague",
    lon: 14.4208, lat: 50.0880,
    airport: { iata: "PRG", nameZh: "布拉格瓦茨拉夫·哈维尔机场", nameEn: "Václav Havel Airport Prague", lon: 14.2632, lat: 50.1018 },
    source: "布拉格市中心 50.0880,14.4208；PRG 机场（距市区约17km）：公开资料",
  },
  {
    id: "brno", nameZh: "布尔诺", nameEn: "Brno", country: "czechia", tier: "major", zone: "cz-moravia", admin1Zh: "南摩拉维亚州", admin1En: "South Moravian Region",
    lon: 16.6068, lat: 49.1951,
    airport: { iata: "BRQ", nameZh: "布尔诺-图拉尼机场", nameEn: "Brno-Tuřany Airport", lon: 16.6944, lat: 49.1514 },
    source: "布尔诺市中心 49.1951,16.6068；BRQ 机场（距市区约7.5km），捷克第二大城市、摩拉维亚地区中心：公开资料",
  },
  {
    id: "plzen", nameZh: "皮尔森（比尔森）", nameEn: "Plzeň (Pilsen)", country: "czechia", tier: "major", zone: "cz-west-bohemia", admin1Zh: "皮尔森州", admin1En: "Plzeň Region",
    lon: 13.3775, lat: 49.7475,
    airport: { iata: "PRG", nameZh: "布拉格瓦茨拉夫·哈维尔机场", nameEn: "Václav Havel Airport Prague", lon: 14.2632, lat: 50.1018 },
    source: "皮尔森市中心 49.7475,13.3775；本地无商业机场，最近机场为布拉格机场（距市区约90km）：公开资料",
  },
  {
    id: "karlovy-vary", nameZh: "卡罗维发利", nameEn: "Karlovy Vary", country: "czechia", tier: "major", zone: "cz-west-bohemia", admin1Zh: "卡罗维发利州", admin1En: "Karlovy Vary Region",
    lon: 12.8725, lat: 50.2306,
    airport: { iata: "KLV", nameZh: "卡罗维发利机场", nameEn: "Karlovy Vary Airport", lon: 12.9150, lat: 50.2031 },
    source: "卡罗维发利市中心 50.2306,12.8725；KLV 机场（距市区约6km）：公开资料",
  },
  {
    id: "cesky-krumlov", nameZh: "切斯基克鲁姆洛夫", nameEn: "Český Krumlov", country: "czechia", tier: "notable", zone: "cz-south-bohemia", admin1Zh: "南波希米亚州", admin1En: "South Bohemian Region",
    lon: 14.3153, lat: 48.8111,
    source: "切斯基克鲁姆洛夫市中心 48.8111,14.3153；本地无机场，最近机场为布拉格机场（距市区约170km），常经捷克布杰约维采公路转乘：公开资料",
  },
  {
    id: "kutna-hora", nameZh: "库特纳霍拉", nameEn: "Kutná Hora", country: "czechia", tier: "notable", zone: "cz-central-bohemia", admin1Zh: "中波希米亚州", admin1En: "Central Bohemian Region",
    lon: 15.2683, lat: 49.9483,
    source: "库特纳霍拉市中心 49.9483,15.2683；本地无机场，最近机场为布拉格机场（距市区约70km）：公开资料",
  },
  {
    id: "olomouc", nameZh: "奥洛穆茨", nameEn: "Olomouc", country: "czechia", tier: "major", zone: "cz-moravia", admin1Zh: "奥洛穆茨州", admin1En: "Olomouc Region",
    lon: 17.2508, lat: 49.5939,
    airport: { iata: "BRQ", nameZh: "布尔诺-图拉尼机场", nameEn: "Brno-Tuřany Airport", lon: 16.6944, lat: 49.1514 },
    source: "奥洛穆茨市中心 49.5939,17.2508；本地机场客运航班有限，最近有稳定定期航班的机场为布尔诺机场（距市区约75km）：公开资料",
  },
];
