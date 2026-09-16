import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ===== 欧洲 / 拉脱维亚 =====（Wikidata P625 坐标；Wikidata 无坐标的取 OpenStreetMap Nominatim）
  riga: [
    { nameZh: "里加老城", nameEn: "Old Riga", lon: 24.1082, lat: 56.9485, kind: "landmark" },
    { nameZh: "里加主教座堂", nameEn: "Riga Cathedral", lon: 24.1044, lat: 56.9492, kind: "landmark" },
    { nameZh: "圣彼得教堂", nameEn: "St Peter's Church", lon: 24.1094, lat: 56.9475, kind: "landmark" },
    { nameZh: "黑头宫", nameEn: "House of the Blackheads", lon: 24.1069, lat: 56.9471, kind: "landmark" },
    { nameZh: "自由纪念碑", nameEn: "Freedom Monument", lon: 24.1132, lat: 56.9516, kind: "landmark" },
    { nameZh: "里加中央市场", nameEn: "Riga Central Market", lon: 24.1160, lat: 56.9440, kind: "landmark" },
    { nameZh: "拉脱维亚国家图书馆", nameEn: "National Library of Latvia", lon: 24.0966, lat: 56.9413, kind: "landmark" },
    { nameZh: "阿尔伯特街", nameEn: "Alberta iela", lon: 24.1099, lat: 56.9590, kind: "landmark" },
  ],
  daugavpils: [
    { nameZh: "陶格夫匹尔斯要塞", nameEn: "Daugavpils Fortress", lon: 26.4953, lat: 55.8863, kind: "landmark" },
    { nameZh: "罗斯科博物馆", nameEn: "Rothko Museum", lon: 26.5019, lat: 55.8828, kind: "landmark" },
    { nameZh: "团结之家", nameEn: "Unity House", lon: 26.5168, lat: 55.8707, kind: "landmark" },
    { nameZh: "团结桥", nameEn: "Unity Bridge", lon: 26.5121, lat: 55.8658, kind: "landmark" },
  ],
  liepaja: [
    { nameZh: "伟大琥珀音乐厅", nameEn: "Great Amber Concert Hall", lon: 21.0106, lat: 56.5114, kind: "landmark" },
    { nameZh: "圣三一主教座堂", nameEn: "Holy Trinity Cathedral", lon: 21.0127, lat: 56.5099, kind: "landmark" },
    { nameZh: "海滨公园", nameEn: "Seaside Park", lon: 20.9942, lat: 56.5070, kind: "landmark" },
    { nameZh: "卡罗斯塔圣尼古拉海军主教座堂", nameEn: "St Nicholas Naval Cathedral, Karosta", lon: 21.0124, lat: 56.5529, kind: "landmark" },
  ],
  jelgava: [
    { nameZh: "叶尔加瓦宫", nameEn: "Jelgava Palace", lon: 23.7330, lat: 56.6558, kind: "landmark" },
    { nameZh: "圣三一教堂塔楼", nameEn: "Holy Trinity Church Tower", lon: 23.7289, lat: 56.6524, kind: "landmark" },
    { nameZh: "佩特里纳学院", nameEn: "Academia Petrina", lon: 23.7288, lat: 56.6499, kind: "landmark" },
    { nameZh: "伦达尔宫（鲍斯卡市镇）", nameEn: "Rundāle Palace (Bauska Municipality)", lon: 24.0248, lat: 56.4133, kind: "landmark" },
  ],
  jurmala: [
    { nameZh: "约马街", nameEn: "Jomas iela", lon: 23.8049, lat: 56.9737, kind: "landmark" },
    { nameZh: "津塔里音乐厅", nameEn: "Dzintari Concert Hall", lon: 23.8128, lat: 56.9781, kind: "landmark" },
    { nameZh: "凯梅里水塔", nameEn: "Ķemeri Water Tower", lon: 23.4996, lat: 56.9475, kind: "landmark" },
    { nameZh: "尤尔马拉露天博物馆", nameEn: "Jūrmala Open-Air Museum", lon: 23.9157, lat: 56.9967, kind: "landmark" },
    { nameZh: "凯梅里大沼泽栈道（市界外）", nameEn: "Great Ķemeri Bog Boardwalk (outside the city)", lon: 23.4600, lat: 56.9097, kind: "landmark" },
  ],
  ventspils: [
    { nameZh: "文茨皮尔斯城堡", nameEn: "Ventspils Castle", lon: 21.5586, lat: 57.3961, kind: "landmark" },
    { nameZh: "滨海露天博物馆", nameEn: "Seaside Open-Air Museum", lon: 21.5350, lat: 57.3859, kind: "landmark" },
    { nameZh: "文茨皮尔斯灯塔", nameEn: "Ventspils Lighthouse", lon: 21.5246, lat: 57.4053, kind: "landmark" },
  ],
  sigulda: [
    { nameZh: "图拉伊达城堡", nameEn: "Turaida Castle", lon: 24.8503, lat: 57.1822, kind: "landmark" },
    { nameZh: "锡古尔达中世纪城堡", nameEn: "Sigulda Medieval Castle", lon: 24.8500, lat: 57.1664, kind: "landmark" },
    { nameZh: "古特马纳洞", nameEn: "Gūtmaņala (Gutman's Cave)", lon: 24.8423, lat: 57.1763, kind: "landmark" },
    { nameZh: "克里木尔达庄园", nameEn: "Krimulda Manor", lon: 24.8297, lat: 57.1675, kind: "landmark" },
    { nameZh: "锡古尔达雪橇赛道", nameEn: "Sigulda Bobsleigh and Luge Track", lon: 24.8386, lat: 57.1522, kind: "landmark" },
  ],
  cesis: [
    { nameZh: "采西斯城堡", nameEn: "Cēsis Castle", lon: 25.2700, lat: 57.3133, kind: "landmark" },
    { nameZh: "圣约翰教堂", nameEn: "St John's Church", lon: 25.2719, lat: 57.3122, kind: "landmark" },
    { nameZh: "统一广场", nameEn: "Unity Square", lon: 25.2749, lat: 57.3133, kind: "landmark" },
    { nameZh: "阿赖希湖上城堡（镇外）", nameEn: "Āraiši Lake Fortress (outside the town)", lon: 25.2853, lat: 57.2516, kind: "landmark" },
  ],
  kuldiga: [
    { nameZh: "文塔瀑布", nameEn: "Venta Rapid", lon: 21.9789, lat: 56.9681, kind: "landmark" },
    { nameZh: "库尔迪加砖桥", nameEn: "Kuldīga Brick Bridge", lon: 21.9775, lat: 56.9701, kind: "landmark" },
    { nameZh: "阿列克舒皮特瀑布", nameEn: "Alekšupīte Waterfall", lon: 21.9752, lat: 56.9699, kind: "landmark" },
    { nameZh: "市政厅广场", nameEn: "Town Hall Square", lon: 21.9708, lat: 56.9679, kind: "landmark" },
    { nameZh: "里耶祖佩沙洞（镇外）", nameEn: "Riežupe Sand Caves (outside the town)", lon: 21.9866, lat: 57.0069, kind: "landmark" },
  ],
  valmiera: [
    { nameZh: "圣西门教堂", nameEn: "St Simon's Church", lon: 25.4264, lat: 57.5385, kind: "landmark" },
    { nameZh: "瓦尔米耶拉博物馆与城堡遗址", nameEn: "Valmiera Museum and castle ruins", lon: 25.4279, lat: 57.5392, kind: "landmark" },
    { nameZh: "瓦尔米耶拉剧院", nameEn: "Valmiera Theatre", lon: 25.4258, lat: 57.5393, kind: "landmark" },
  ],
  rezekne: [
    { nameZh: "拉特加莱使馆 GORS 音乐厅", nameEn: "Latgale Embassy GORS", lon: 27.3262, lat: 56.5029, kind: "landmark" },
    { nameZh: "创意服务中心 Zeimuļs", nameEn: "Zeimuļs creative centre", lon: 27.3337, lat: 56.5032, kind: "landmark" },
    { nameZh: "古堡山与城堡遗址", nameEn: "Castle mound and ruins", lon: 27.3351, lat: 56.5025, kind: "landmark" },
    { nameZh: "拉特加莱文化历史博物馆", nameEn: "Latgale Culture and History Museum", lon: 27.3322, lat: 56.5076, kind: "landmark" },
    { nameZh: "科夫舒湖", nameEn: "Kovšu Lake", lon: 27.3273, lat: 56.4997, kind: "nature" },
  ],
  madona: [
    { nameZh: "马多纳地方志与艺术博物馆", nameEn: "Madona Museum of Local History and Art", lon: 26.2103, lat: 56.8526, kind: "landmark" },
    { nameZh: "斯梅采雷斯松林运动基地", nameEn: "Smeceres sils sports centre", lon: 26.1761, lat: 56.8281, kind: "nature" },
    { nameZh: "盖津卡尔恩斯山（全国最高点）", nameEn: "Gaiziņkalns", lon: 25.9594, lat: 56.87, kind: "nature" },
    { nameZh: "采斯瓦伊内城堡", nameEn: "Cesvaine Castle", lon: 26.3121, lat: 56.9694, kind: "landmark" },
    { nameZh: "泰伊奇沼泽", nameEn: "Teiči bog", lon: 26.4421, lat: 56.6129, kind: "nature" },
  ],
};
