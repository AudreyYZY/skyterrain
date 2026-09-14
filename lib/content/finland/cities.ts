import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
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
];
