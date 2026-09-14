import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 卢森堡 ──
  "luxembourg-city": [
    { nameZh: "佩特吕斯地堡", nameEn: "Pétrusse Casemates", lon: 6.1319, lat: 49.6094, kind: "landmark" },
    { nameZh: "博克岩石与要塞遗址", nameEn: "Bock Promontory & Fortress", lon: 6.1361, lat: 49.6117, kind: "landmark" },
    { nameZh: "宪法广场", nameEn: "Place de la Constitution", lon: 6.1300, lat: 49.6094, kind: "landmark" },
    { nameZh: "大公宫", nameEn: "Grand Ducal Palace", lon: 6.1328, lat: 49.6108, kind: "landmark" },
    { nameZh: "科尔尼什峡谷步道", nameEn: "The Corniche", lon: 6.1350, lat: 49.6122, kind: "nature" },
  ],
  "esch-sur-alzette": [
    { nameZh: "贝尔瓦尔高炉工业遗产园区", nameEn: "Belval Blast Furnaces", lon: 5.9481, lat: 49.5019, kind: "landmark" },
    { nameZh: "米内特国家矿业博物馆", nameEn: "National Museum of Mining, Minett", lon: 5.9950, lat: 49.4958, kind: "landmark" },
  ],
  echternach: [
    { nameZh: "本笃会修道院与圣威利布罗德教堂", nameEn: "Benedictine Abbey & Basilica of St Willibrord", lon: 6.4200, lat: 49.8125, kind: "landmark" },
    { nameZh: "老城市集广场", nameEn: "Old Market Square", lon: 6.4175, lat: 49.8117, kind: "district" },
  ],
  remich: [
    { nameZh: "摩泽尔河滨河步道", nameEn: "Moselle Riverside Promenade", lon: 6.3667, lat: 49.5433, kind: "nature" },
  ],
  diekirch: [
    { nameZh: "国家军事历史博物馆", nameEn: "National Museum of Military History", lon: 6.1600, lat: 49.8681, kind: "landmark" },
    { nameZh: "圣洛朗教堂地下考古遗址", nameEn: "St Laurent's Church Crypt", lon: 6.1544, lat: 49.8672, kind: "landmark" },
  ],
  ettelbruck: [
    { nameZh: "巴顿广场", nameEn: "Patton Square", lon: 6.1050, lat: 49.8478, kind: "landmark" },
    { nameZh: "埃特尔布吕克军事博物馆", nameEn: "Ettelbruck Military Museum", lon: 6.1039, lat: 49.8486, kind: "landmark" },
  ],
  vianden: [
    { nameZh: "维安登城堡", nameEn: "Vianden Castle", lon: 6.2050, lat: 49.9350, kind: "landmark" },
    { nameZh: "雨果故居博物馆", nameEn: "Victor Hugo House", lon: 6.2028, lat: 49.9347, kind: "landmark" },
  ],
  clervaux: [
    { nameZh: "克莱尔沃城堡", nameEn: "Clervaux Castle", lon: 6.0322, lat: 50.0544, kind: "landmark" },
    { nameZh: "圣莫里斯与莫尔本笃会修道院", nameEn: "Benedictine Abbey of Saint Maurice and Maur", lon: 6.0269, lat: 50.0578, kind: "landmark" },
  ],
  "esch-sur-sure": [
    { nameZh: "埃施叙尔苏尔城堡遗址", nameEn: "Esch-sur-Sûre Castle Ruins", lon: 5.9169, lat: 49.9169, kind: "landmark" },
  ],
};
