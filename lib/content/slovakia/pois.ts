import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ===== 欧洲 / 斯洛伐克 =====
  bratislava: [
    { nameZh: "布拉迪斯拉发城堡", nameEn: "Bratislava Castle", lon: 17.1000, lat: 48.1420, kind: "landmark" },
    { nameZh: "圣马丁主教座堂", nameEn: "St Martin's Cathedral", lon: 17.1053, lat: 48.1416, kind: "landmark" },
    { nameZh: "主广场与旧市政厅", nameEn: "Main Square and Old Town Hall", lon: 17.1085, lat: 48.1440, kind: "landmark" },
    { nameZh: "米哈尔门", nameEn: "Michael's Gate", lon: 17.1063, lat: 48.1454, kind: "landmark" },
    { nameZh: "SNP 大桥观景塔", nameEn: "UFO Observation Deck, SNP Bridge", lon: 17.1042, lat: 48.1381, kind: "landmark" },
    { nameZh: "德文城堡", nameEn: "Devín Castle", lon: 16.9792, lat: 48.1736, kind: "landmark" },
    { nameZh: "彼得扎尔卡", nameEn: "Petržalka", lon: 17.1078, lat: 48.1189, kind: "landmark" },
  ],
  kosice: [
    { nameZh: "圣伊丽莎白主教座堂", nameEn: "St Elisabeth Cathedral", lon: 21.2586, lat: 48.7203, kind: "landmark" },
    { nameZh: "主街广场", nameEn: "Hlavná Street Square", lon: 21.2589, lat: 48.7228, kind: "landmark" },
    { nameZh: "乌尔班塔（钟楼）", nameEn: "Urban Tower", lon: 21.2591, lat: 48.7211, kind: "landmark" },
    { nameZh: "东斯洛伐克博物馆", nameEn: "East Slovak Museum", lon: 21.2574, lat: 48.7263, kind: "landmark" },
    { nameZh: "霍尔纳德河畔", nameEn: "Hornád riverside", lon: 21.2700, lat: 48.7150, kind: "nature" },
  ],
  zilina: [
    { nameZh: "玛丽亚广场", nameEn: "Mariánske Square", lon: 18.7397, lat: 49.2239, kind: "landmark" },
    { nameZh: "布达廷城堡", nameEn: "Budatín Castle", lon: 18.7333, lat: 49.2325, kind: "landmark" },
    { nameZh: "瓦赫河与基苏察河汇口", nameEn: "Váh–Kysuca confluence", lon: 18.7300, lat: 49.2330, kind: "nature" },
    { nameZh: "日利纳火车站", nameEn: "Žilina railway station", lon: 18.7411, lat: 49.2261, kind: "landmark" },
  ],
  "banska-bystrica": [
    { nameZh: "SNP 广场", nameEn: "SNP Square", lon: 19.1461, lat: 48.7355, kind: "landmark" },
    { nameZh: "倾斜钟楼", nameEn: "Leaning Clock Tower", lon: 19.1464, lat: 48.7357, kind: "landmark" },
    { nameZh: "城堡区教堂群", nameEn: "Castle precinct churches", lon: 19.1444, lat: 48.7364, kind: "landmark" },
    { nameZh: "赫龙河畔", nameEn: "Hron riverside", lon: 19.1500, lat: 48.7320, kind: "nature" },
  ],
  poprad: [
    { nameZh: "斯皮什斯卡索博塔历史广场", nameEn: "Spišská Sobota historic square", lon: 20.3092, lat: 49.0692, kind: "landmark" },
    { nameZh: "波普拉德市中心广场", nameEn: "Poprad central square", lon: 20.2981, lat: 49.0594, kind: "landmark" },
    { nameZh: "斯塔里斯莫科韦茨", nameEn: "Starý Smokovec", lon: 20.2222, lat: 49.1389, kind: "landmark" },
    { nameZh: "什特尔布斯凯湖", nameEn: "Štrbské pleso", lon: 20.0611, lat: 49.1206, kind: "nature" },
  ],
  "banska-stiavnica": [
    { nameZh: "三一广场", nameEn: "Trojičné Square", lon: 18.8944, lat: 48.4583, kind: "landmark" },
    { nameZh: "新城堡", nameEn: "New Castle", lon: 18.8917, lat: 48.4569, kind: "landmark" },
    { nameZh: "老城堡", nameEn: "Old Castle", lon: 18.8967, lat: 48.4600, kind: "landmark" },
    { nameZh: "卡尔瓦里建筑群", nameEn: "Banská Štiavnica Calvary", lon: 18.9139, lat: 48.4592, kind: "landmark" },
  ],
  bardejov: [
    { nameZh: "集市广场", nameEn: "Bardejov Market Square", lon: 21.2756, lat: 49.2939, kind: "landmark" },
    { nameZh: "圣埃吉迪乌斯教堂", nameEn: "Basilica of St Egidius", lon: 21.2747, lat: 49.2950, kind: "landmark" },
    { nameZh: "老城墙与塔楼", nameEn: "Town walls and towers", lon: 21.2778, lat: 49.2933, kind: "landmark" },
    { nameZh: "巴尔代约夫温泉区", nameEn: "Bardejovské Kúpele spa", lon: 21.2833, lat: 49.3306, kind: "landmark" },
  ],
  levoca: [
    { nameZh: "圣雅各教堂", nameEn: "Church of St James", lon: 20.5886, lat: 49.0247, kind: "landmark" },
    { nameZh: "莱沃恰大广场", nameEn: "Levoča Main Square", lon: 20.5889, lat: 49.0242, kind: "landmark" },
    { nameZh: "老市政厅", nameEn: "Levoča Town Hall", lon: 20.5883, lat: 49.0244, kind: "landmark" },
    { nameZh: "玛丽亚山朝圣教堂", nameEn: "Marian Hill pilgrimage church", lon: 20.5919, lat: 49.0342, kind: "landmark" },
    { nameZh: "斯皮什城堡", nameEn: "Spiš Castle", lon: 20.7683, lat: 48.9994, kind: "landmark" },
  ],
};
