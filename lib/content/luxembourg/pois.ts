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
  "mondorf-les-bains": [
    { nameZh: "蒙多夫温泉疗养中心与温泉公园", nameEn: "Mondorf Domaine Thermal and spa park", lon: 6.2819, lat: 49.5017, kind: "landmark" },
    { nameZh: "圣米迦勒教堂", nameEn: "Church of St Michael", lon: 6.2706, lat: 49.5059, kind: "landmark" },
  ],
  differdange: [
    { nameZh: "迪弗当日城堡（大学校区）", nameEn: "Château de Differdange", lon: 5.8892, lat: 49.5213, kind: "landmark" },
    { nameZh: "卢森堡科学中心", nameEn: "Luxembourg Science Center", lon: 5.8943, lat: 49.5221, kind: "landmark" },
    { nameZh: "旧市政厅区域文化中心", nameEn: "Aalt Stadhaus cultural centre", lon: 5.8875, lat: 49.521, kind: "landmark" },
    { nameZh: "拉索瓦日村", nameEn: "Lasauvage", lon: 5.8358, lat: 49.5221, kind: "district" },
    { nameZh: "钢厂区", nameEn: "Steelworks", lon: 5.9, lat: 49.5303, kind: "district" },
  ],
  mersch: [
    { nameZh: "梅尔施城堡（市政厅）", nameEn: "Mersch Castle (town hall)", lon: 6.1032, lat: 49.7479, kind: "landmark" },
    { nameZh: "圣米歇尔塔", nameEn: "Tour Saint-Michel", lon: 6.1028, lat: 49.7464, kind: "landmark" },
    { nameZh: "国家文学中心", nameEn: "National Literature Centre", lon: 6.1082, lat: 49.751, kind: "landmark" },
    { nameZh: "舍恩费尔斯城堡", nameEn: "Schoenfels Castle", lon: 6.0934, lat: 49.7197, kind: "landmark" },
    { nameZh: "霍伦费尔斯城堡（邻镇）", nameEn: "Hollenfels Castle (neighbouring commune)", lon: 6.0516, lat: 49.7121, kind: "landmark" },
  ],
};
