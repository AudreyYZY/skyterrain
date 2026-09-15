import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  {
    id: "astana", nameZh: "阿斯塔纳", nameEn: "Astana", country: "kazakhstan", tier: "capital", zone: "kz-north", admin1Zh: "阿斯塔纳市", admin1En: "Astana",
    lon: 71.4460, lat: 51.1801,
    airport: { iata: "NQZ", nameZh: "阿斯塔纳国际机场", nameEn: "Astana International Airport", lon: 71.4669, lat: 51.0222 },
    source: "阿斯塔纳市中心 51.1801,71.4460；NQZ机场（距市区约17km）：公开资料",
  },
  {
    id: "almaty", nameZh: "阿拉木图", nameEn: "Almaty", country: "kazakhstan", tier: "major", zone: "kz-southeast", admin1Zh: "阿拉木图市", admin1En: "Almaty",
    lon: 76.8512, lat: 43.2220,
    airport: { iata: "ALA", nameZh: "阿拉木图国际机场", nameEn: "Almaty International Airport", lon: 77.0405, lat: 43.3521 },
    source: "阿拉木图市中心 43.2220,76.8512；ALA机场（距市区直线约 21 km，按本条目坐标算）：公开资料",
  },
  {
    id: "shymkent", nameZh: "希姆肯特", nameEn: "Shymkent", country: "kazakhstan", tier: "major", zone: "kz-south", admin1Zh: "希姆肯特市", admin1En: "Shymkent",
    lon: 69.6000, lat: 42.3000,
    airport: { iata: "CIT", nameZh: "希姆肯特国际机场", nameEn: "Shymkent International Airport", lon: 69.4794, lat: 42.3651 },
    source: "希姆肯特市中心 42.3000,69.6000；CIT机场（距市区约12km）：公开资料",
  },
  {
    id: "aktau", nameZh: "阿克套", nameEn: "Aktau", country: "kazakhstan", tier: "major", zone: "kz-west", admin1Zh: "曼格斯套州", admin1En: "Mangystau Region",
    lon: 51.1500, lat: 43.6500,
    airport: { iata: "SCO", nameZh: "阿克套国际机场", nameEn: "Aktau International Airport", lon: 51.0922, lat: 43.8600 },
    source: "阿克套市中心 43.6500,51.1500；SCO机场（距市区约25km），是探索曼格斯套地区的主要门户：公开资料",
  },
  {
    id: "turkestan", nameZh: "突厥斯坦", nameEn: "Turkestan", country: "kazakhstan", tier: "notable", zone: "kz-south", admin1Zh: "突厥斯坦州", admin1En: "Turkestan Region",
    lon: 68.2500, lat: 43.3000,
    airport: { iata: "HSA", nameZh: "哈兹拉特苏丹国际机场", nameEn: "Hazrat Sultan International Airport", lon: 68.5503, lat: 43.3111 },
    source: "突厥斯坦市中心 43.3000,68.2500；HSA机场2020年启用（距市区直线约 24 km，按本条目坐标算），机场名取自艾哈迈德·亚萨维的尊号“哈兹拉特苏丹”：公开资料",
  },
  {
    id: "karaganda", nameZh: "卡拉干达", nameEn: "Karaganda", country: "kazakhstan", tier: "notable", zone: "kz-central", admin1Zh: "卡拉干达州", admin1En: "Karaganda Region",
    lon: 73.1094, lat: 49.8047,
    airport: { iata: "KGF", nameZh: "萨雷阿尔卡机场", nameEn: "Sary-Arka Airport", lon: 73.3419, lat: 49.6642 },
    source: "卡拉干达市中心 49.8047,73.1094；KGF机场（距市区直线约 23 km，按本条目坐标算），是探索卡尔卡拉雷山与别克套阿塔的门户之一：公开资料",
  },
  {
    id: "semey", nameZh: "谢梅伊", nameEn: "Semey", country: "kazakhstan", tier: "notable", zone: "kz-east", admin1Zh: "阿拜州", admin1En: "Abai Region",
    lon: 80.2275, lat: 50.4111,
    airport: { iata: "PLX", nameZh: "谢梅伊机场", nameEn: "Semey Airport", lon: 80.2350, lat: 50.3522 },
    source: "谢梅伊市中心 50.4111,80.2275；PLX机场（距市区约7km），沿额尔齐斯河而建：公开资料",
  },
  {
    id: "pavlodar", nameZh: "巴甫洛达尔", nameEn: "Pavlodar", country: "kazakhstan", tier: "notable", zone: "kz-east", admin1Zh: "巴甫洛达尔州", admin1En: "Pavlodar Region",
    lon: 76.9674, lat: 52.2873,
    airport: { iata: "PWQ", nameZh: "巴甫洛达尔机场", nameEn: "Pavlodar Airport", lon: 77.0781, lat: 52.1958 },
    source: "巴甫洛达尔市中心 52.2873,76.9674；PWQ机场（距市区约13km），沿额尔齐斯河而建：公开资料",
  },
  {
    id: "kokshetau", nameZh: "科克舍套", nameEn: "Kokshetau", country: "kazakhstan", tier: "notable", zone: "kz-north", admin1Zh: "阿克莫拉州", admin1En: "Akmola Region",
    lon: 69.3833, lat: 53.2833,
    airport: { iata: "KOV", nameZh: "科克舍套机场", nameEn: "Kokshetau Airport", lon: 69.5942, lat: 53.3325 },
    source: "科克舍套市中心 53.2833,69.3833；KOV机场（距市区约18km），是前往布拉拜国家公园的主要门户：公开资料",
  },
];
