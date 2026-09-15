import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 爱尔兰 ──
  dublin: [
    { nameZh: "圣三一学院", nameEn: "Trinity College", lon: -6.2546, lat: 53.3438, kind: "landmark" },
    { nameZh: "健力士啤酒厂", nameEn: "Guinness Storehouse", lon: -6.2867, lat: 53.3419, kind: "landmark" },
    { nameZh: "都柏林城堡", nameEn: "Dublin Castle", lon: -6.2674, lat: 53.3429, kind: "landmark" },
    { nameZh: "坦普尔酒吧区", nameEn: "Temple Bar", lon: -6.2635, lat: 53.3453, kind: "district" },
    { nameZh: "凤凰公园", nameEn: "Phoenix Park", lon: -6.3298, lat: 53.3596, kind: "nature" },
  ],
  kilkenny: [
    { nameZh: "基尔肯尼城堡", nameEn: "Kilkenny Castle", lon: -7.2514, lat: 52.6497, kind: "landmark" },
    { nameZh: "圣卡尼斯主教座堂", nameEn: "St Canice's Cathedral", lon: -7.2528, lat: 52.6597, kind: "landmark" },
    { nameZh: "中世纪之英里", nameEn: "Medieval Mile", lon: -7.2500, lat: 52.6520, kind: "district" },
  ],
  cork: [
    { nameZh: "英式市场", nameEn: "English Market", lon: -8.4738, lat: 51.8988, kind: "landmark" },
    { nameZh: "圣芬巴尔大教堂", nameEn: "St Fin Barre's Cathedral", lon: -8.4813, lat: 51.8934, kind: "landmark" },
    { nameZh: "科克大学", nameEn: "University College Cork", lon: -8.4904, lat: 51.8936, kind: "landmark" },
    { nameZh: "科布港", nameEn: "Cobh Harbour", lon: -8.2943, lat: 51.8506, kind: "district" },
    { nameZh: "布拉尼城堡", nameEn: "Blarney Castle", lon: -8.5701, lat: 51.9298, kind: "landmark" },
  ],
  killarney: [
    { nameZh: "基拉尼国家公园", nameEn: "Killarney National Park", lon: -9.5333, lat: 52.0167, kind: "nature" },
    { nameZh: "马克罗斯庄园", nameEn: "Muckross House & Estate", lon: -9.5089, lat: 51.9959, kind: "landmark" },
    { nameZh: "邓洛峡口", nameEn: "Gap of Dunloe", lon: -9.6167, lat: 52.0167, kind: "nature" },
    { nameZh: "罗斯城堡", nameEn: "Ross Castle", lon: -9.5500, lat: 52.0333, kind: "landmark" },
  ],
  dingle: [
    { nameZh: "斯利亚角", nameEn: "Slea Head", lon: -10.4442, lat: 52.0989, kind: "nature" },
    { nameZh: "甘那炎修士石屋", nameEn: "Gallarus Oratory", lon: -10.3492, lat: 52.1706, kind: "landmark" },
    { nameZh: "丁格尔港", nameEn: "Dingle Harbour", lon: -10.2672, lat: 52.1408, kind: "district" },
  ],
  waterford: [
    { nameZh: "里金纳德塔", nameEn: "Reginald's Tower", lon: -7.1108, lat: 52.2591, kind: "landmark" },
    { nameZh: "沃特福德水晶工坊", nameEn: "Waterford Crystal", lon: -7.1147, lat: 52.2578, kind: "landmark" },
    { nameZh: "维京三角区", nameEn: "Viking Triangle", lon: -7.1120, lat: 52.2588, kind: "district" },
  ],
  limerick: [
    { nameZh: "国王约翰城堡", nameEn: "King John's Castle", lon: -8.6252, lat: 52.6663, kind: "landmark" },
    { nameZh: "利默里克圣玛丽大教堂", nameEn: "St Mary's Cathedral, Limerick", lon: -8.6247, lat: 52.6645, kind: "landmark" },
    { nameZh: "比尔城堡", nameEn: "Bunratty Castle", lon: -8.8092, lat: 52.7025, kind: "landmark" },
  ],
  galway: [
    { nameZh: "拉丁区与圣尼古拉斯教堂", nameEn: "Latin Quarter & St Nicholas' Church", lon: -9.0522, lat: 53.2707, kind: "district" },
    { nameZh: "长堤海滨步道", nameEn: "Salthill Promenade", lon: -9.0736, lat: 53.2611, kind: "nature" },
    { nameZh: "科里布河鲑鱼堰", nameEn: "Corrib Salmon Weir", lon: -9.0511, lat: 53.2789, kind: "landmark" },
  ],
  westport: [
    { nameZh: "克罗帕特里克圣山", nameEn: "Croagh Patrick", lon: -9.6592, lat: 53.7597, kind: "nature" },
    { nameZh: "韦斯特波特庄园", nameEn: "Westport House", lon: -9.5375, lat: 53.8025, kind: "landmark" },
    { nameZh: "基姆湾悬崖（阿基尔岛）", nameEn: "Keem Bay Cliffs (Achill Island)", lon: -10.2214, lat: 53.9722, kind: "nature" },
  ],
  "donegal-town": [
    { nameZh: "多尼戈尔城堡", nameEn: "Donegal Castle", lon: -8.1097, lat: 54.6539, kind: "landmark" },
    { nameZh: "三角形市集广场", nameEn: "The Diamond", lon: -8.1089, lat: 54.6536, kind: "district" },
    { nameZh: "斯利夫利格悬崖", nameEn: "Slieve League", lon: -8.6833, lat: 54.6167, kind: "nature" },
  ],
  ennis: [
    { nameZh: "恩尼斯修道院遗址", nameEn: "Ennis Friary", lon: -8.9814, lat: 52.846, kind: "landmark" },
    { nameZh: "克莱尔博物馆", nameEn: "Clare Museum", lon: -8.9817, lat: 52.8442, kind: "landmark" },
    { nameZh: "莫赫悬崖游客中心", nameEn: "Cliffs of Moher visitor centre", lon: -9.4258, lat: 52.9719, kind: "nature" },
    { nameZh: "伯伦国家公园", nameEn: "Burren National Park", lon: -8.9875, lat: 53.0118, kind: "nature" },
    { nameZh: "邦拉蒂城堡", nameEn: "Bunratty Castle", lon: -8.812, lat: 52.6967, kind: "landmark" },
  ],
  sligo: [
    { nameZh: "斯莱戈修道院遗址", nameEn: "Sligo Abbey", lon: -8.47, lat: 54.271, kind: "landmark" },
    { nameZh: "卡罗莫尔新石器墓群", nameEn: "Carrowmore Megalithic Cemetery", lon: -8.5193, lat: 54.2495, kind: "landmark" },
    { nameZh: "诺克纳雷山", nameEn: "Knocknarea", lon: -8.5745, lat: 54.2588, kind: "nature" },
    { nameZh: "德拉姆克利夫叶芝墓", nameEn: "Yeats's grave, Drumcliffe", lon: -8.4934, lat: 54.3262, kind: "landmark" },
    { nameZh: "本布尔宾山", nameEn: "Benbulbin", lon: -8.4742, lat: 54.3649, kind: "nature" },
    { nameZh: "斯特兰德希尔", nameEn: "Strandhill", lon: -8.5943, lat: 54.27, kind: "nature" },
  ],
};
