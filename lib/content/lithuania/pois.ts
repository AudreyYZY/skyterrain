import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ===== 欧洲 / 立陶宛 =====（Wikidata P625 坐标；Wikidata 无坐标的取 OpenStreetMap Nominatim）
  vilnius: [
    { nameZh: "维尔纽斯主教座堂", nameEn: "Vilnius Cathedral", lon: 25.2879, lat: 54.6859, kind: "landmark" },
    { nameZh: "格迪米纳斯塔", nameEn: "Gediminas' Tower", lon: 25.2907, lat: 54.6868, kind: "landmark" },
    { nameZh: "立陶宛大公宫", nameEn: "Palace of the Grand Dukes of Lithuania", lon: 25.2890, lat: 54.6859, kind: "landmark" },
    { nameZh: "黎明门", nameEn: "Gate of Dawn", lon: 25.2894, lat: 54.6744, kind: "landmark" },
    { nameZh: "圣安娜教堂", nameEn: "St Anne's Church", lon: 25.2933, lat: 54.6831, kind: "landmark" },
    { nameZh: "维尔纽斯大学", nameEn: "Vilnius University", lon: 25.2872, lat: 54.6825, kind: "landmark" },
    { nameZh: "维尔纽斯市政厅", nameEn: "Vilnius Town Hall", lon: 25.2870, lat: 54.6780, kind: "landmark" },
    { nameZh: "乌祖皮斯区", nameEn: "Užupis", lon: 25.2994, lat: 54.6813, kind: "landmark" },
  ],
  kaunas: [
    { nameZh: "考纳斯城堡", nameEn: "Kaunas Castle", lon: 23.8850, lat: 54.8989, kind: "landmark" },
    { nameZh: "考纳斯市政厅", nameEn: "Kaunas Town Hall", lon: 23.8862, lat: 54.8968, kind: "landmark" },
    { nameZh: "雷神之屋", nameEn: "House of Perkūnas", lon: 23.8861, lat: 54.8956, kind: "landmark" },
    { nameZh: "自由大道", nameEn: "Laisvės alėja", lon: 23.9136, lat: 54.8972, kind: "landmark" },
    { nameZh: "基督复活教堂", nameEn: "Church of Christ's Resurrection", lon: 23.9170, lat: 54.9026, kind: "landmark" },
    { nameZh: "丘尔廖尼斯国家美术馆", nameEn: "M. K. Čiurlionis National Art Museum", lon: 23.9114, lat: 54.9000, kind: "landmark" },
    { nameZh: "绿山缆车", nameEn: "Žaliakalnis Funicular", lon: 23.9175, lat: 54.9008, kind: "landmark" },
    { nameZh: "帕扎伊斯利斯修道院", nameEn: "Pažaislis Monastery", lon: 24.0227, lat: 54.8760, kind: "landmark" },
  ],
  klaipeda: [
    { nameZh: "剧院广场", nameEn: "Theatre Square", lon: 21.1316, lat: 55.7078, kind: "landmark" },
    { nameZh: "克莱佩达城堡博物馆", nameEn: "Klaipėda Castle Museum", lon: 21.1290, lat: 55.7056, kind: "landmark" },
    { nameZh: "「子午线」号帆船", nameEn: "Meridianas sailing ship", lon: 21.1349, lat: 55.7103, kind: "landmark" },
    { nameZh: "立陶宛海事博物馆（斯米尔提内）", nameEn: "Lithuanian Sea Museum (Smiltynė)", lon: 21.0998, lat: 55.7168, kind: "landmark" },
  ],
  siauliai: [
    { nameZh: "希奥利艾主教座堂", nameEn: "Šiauliai Cathedral", lon: 23.3200, lat: 55.9327, kind: "landmark" },
    { nameZh: "日晷广场", nameEn: "Sundial Square", lon: 23.3251, lat: 55.9307, kind: "landmark" },
    { nameZh: "塔尔克沙湖", nameEn: "Lake Talkša", lon: 23.3352, lat: 55.9370, kind: "landmark" },
    { nameZh: "十字架山（市界外）", nameEn: "Hill of Crosses (outside the city)", lon: 23.4167, lat: 56.0153, kind: "landmark" },
  ],
  panevezys: [
    { nameZh: "基督君王主教座堂", nameEn: "Cathedral of Christ the King", lon: 24.3564, lat: 55.7229, kind: "landmark" },
    { nameZh: "自由广场", nameEn: "Freedom Square", lon: 24.3626, lat: 55.7291, kind: "landmark" },
    { nameZh: "米尔蒂尼斯话剧院", nameEn: "Juozas Miltinis Drama Theatre", lon: 24.3646, lat: 55.7289, kind: "landmark" },
    { nameZh: "奥克什泰蒂亚窄轨铁路站", nameEn: "Aukštaitija Narrow Gauge Railway station", lon: 24.3597, lat: 55.7466, kind: "landmark" },
  ],
  trakai: [
    { nameZh: "特拉凯岛城堡", nameEn: "Trakai Island Castle", lon: 24.9331, lat: 54.6525, kind: "landmark" },
    { nameZh: "半岛城堡遗址", nameEn: "Trakai Peninsula Castle ruins", lon: 24.9370, lat: 54.6460, kind: "landmark" },
    { nameZh: "加尔维湖", nameEn: "Lake Galvė", lon: 24.9333, lat: 54.6611, kind: "landmark" },
    { nameZh: "乌祖特拉基斯庄园", nameEn: "Užutrakis Manor", lon: 24.9433, lat: 54.6594, kind: "landmark" },
  ],
  palanga: [
    { nameZh: "帕兰加琥珀博物馆（蒂什凯维奇宫）", nameEn: "Palanga Amber Museum (Tiškevičiai Palace)", lon: 21.0558, lat: 55.9069, kind: "landmark" },
    { nameZh: "比鲁泰公园", nameEn: "Birutė Park", lon: 21.0582, lat: 55.9116, kind: "landmark" },
    { nameZh: "比鲁泰山", nameEn: "Birutė Hill", lon: 21.0528, lat: 55.9056, kind: "landmark" },
    { nameZh: "帕兰加栈桥", nameEn: "Palanga Pier", lon: 21.0478, lat: 55.9201, kind: "landmark" },
  ],
  nida: [
    { nameZh: "帕尔尼迪斯沙丘", nameEn: "Parnidis Dune", lon: 20.9944, lat: 55.2917, kind: "landmark" },
    { nameZh: "尼达灯塔", nameEn: "Nida Lighthouse", lon: 20.9949, lat: 55.3051, kind: "landmark" },
    { nameZh: "尼达福音路德教堂", nameEn: "Nida Evangelical Lutheran Church", lon: 21.0069, lat: 55.3094, kind: "landmark" },
    { nameZh: "渔民民族志农舍", nameEn: "Fisherman's Ethnographic Homestead", lon: 21.0062, lat: 55.3015, kind: "landmark" },
    { nameZh: "女巫山（尤奥德克兰泰）", nameEn: "Hill of Witches (Juodkrantė)", lon: 21.1147, lat: 55.5364, kind: "landmark" },
  ],
  birstonas: [
    { nameZh: "维陶塔斯山（城堡丘）", nameEn: "Vytautas Hill (hillfort)", lon: 24.0338, lat: 54.5970, kind: "landmark" },
    { nameZh: "比尔什托纳斯观景塔", nameEn: "Birštonas Observation Tower", lon: 24.0133, lat: 54.6037, kind: "landmark" },
    { nameZh: "疗养会所", nameEn: "Birštonas Kurhaus", lon: 24.0335, lat: 54.6004, kind: "landmark" },
  ],
  anyksciai: [
    { nameZh: "圣马太教堂", nameEn: "St Matthew's Church", lon: 25.1004, lat: 55.5244, kind: "landmark" },
    { nameZh: "树冠步道", nameEn: "Treetop Walking Path", lon: 25.0621, lat: 55.4856, kind: "landmark" },
    { nameZh: "蓬图卡斯巨石", nameEn: "Puntukas boulder", lon: 25.0554, lat: 55.4749, kind: "landmark" },
    { nameZh: "马博物馆", nameEn: "Horse Museum", lon: 25.0858, lat: 55.5736, kind: "landmark" },
  ],
  plunge: [
    { nameZh: "奥金斯基宫（热马伊蒂亚美术馆）", nameEn: "Oginski Palace (Samogitian Art Museum)", lon: 21.8446, lat: 55.918, kind: "landmark" },
    { nameZh: "庄园园林", nameEn: "Plungė manor park", lon: 21.843, lat: 55.9178, kind: "nature" },
    { nameZh: "甘丁加古堡山", nameEn: "Gandinga hillfort", lon: 21.7717, lat: 55.8869, kind: "nature" },
    { nameZh: "普拉特利艾镇与国家公园管理局", nameEn: "Plateliai and the national park headquarters", lon: 21.815, lat: 56.042, kind: "district" },
    { nameZh: "普拉特利艾湖", nameEn: "Lake Plateliai", lon: 21.87306, lat: 56.04722, kind: "nature" },
  ],
  alytus: [
    { nameZh: "白玫瑰人行桥", nameEn: "White Rose footbridge", lon: 24.0813, lat: 54.3932, kind: "landmark" },
    { nameZh: "阿利图斯古堡山", nameEn: "Alytus hillfort", lon: 24.08, lat: 54.3966, kind: "nature" },
    { nameZh: "市立花园", nameEn: "City Garden", lon: 24.0475, lat: 54.3937, kind: "nature" },
    { nameZh: "青年公园", nameEn: "Youth Park", lon: 24.03, lat: 54.4046, kind: "nature" },
    { nameZh: "茹温塔斯保护区游客中心", nameEn: "Žuvintas reserve visitor centre", lon: 23.6404, lat: 54.457, kind: "nature" },
  ],
};
