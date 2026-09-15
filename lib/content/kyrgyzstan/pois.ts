import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ===== 亚洲 / 吉尔吉斯斯坦 =====（Wikidata P625 优先，缺的取 OpenStreetMap；离国界 < 20 km 的古迹不作 POI）
  bishkek: [
    { nameZh: "阿拉套广场", nameEn: "Ala-Too Square", lon: 74.6039, lat: 42.8764, kind: "landmark" },
    { nameZh: "吉尔吉斯国家历史博物馆", nameEn: "National Historical Museum", lon: 74.6036, lat: 42.8775, kind: "landmark" },
    { nameZh: "厄尔金迪克林荫大道", nameEn: "Erkindik Boulevard", lon: 74.6062, lat: 42.8700, kind: "district" },
    { nameZh: "国家美术馆", nameEn: "Museum of Fine Arts", lon: 74.6109, lat: 42.8787, kind: "landmark" },
    { nameZh: "国家爱乐音乐厅", nameEn: "National Philharmonic", lon: 74.5875, lat: 42.8783, kind: "landmark" },
    { nameZh: "奥什巴扎", nameEn: "Osh Bazaar", lon: 74.5687, lat: 42.8752, kind: "landmark" },
    { nameZh: "阿拉阿尔恰国家公园", nameEn: "Ala-Archa National Park", lon: 74.4846, lat: 42.5475, kind: "nature" },
  ],
  karakol: [
    { nameZh: "圣三一教堂（木构）", nameEn: "Holy Trinity Cathedral (wooden)", lon: 78.3949, lat: 42.4891, kind: "landmark" },
    { nameZh: "易卜拉欣哈吉清真寺（木构）", nameEn: "Ibrahim Haji Mosque (wooden)", lon: 78.3909, lat: 42.4974, kind: "landmark" },
    { nameZh: "卡拉科尔地方志博物馆", nameEn: "Karakol Regional Museum", lon: 78.3916, lat: 42.4894, kind: "landmark" },
    { nameZh: "卡拉科尔主市场", nameEn: "Karakol Main Bazaar", lon: 78.3850, lat: 42.4934, kind: "landmark" },
    { nameZh: "卡拉科尔雪场", nameEn: "Karakol Ski Base", lon: 78.4662, lat: 42.4084, kind: "nature" },
    { nameZh: "阿尔滕阿拉善谷", nameEn: "Altyn-Arashan Valley", lon: 78.6120, lat: 42.3730, kind: "nature" },
    { nameZh: "杰特奥古兹红岩（七公牛岩）", nameEn: "Jeti-Ögüz Rocks", lon: 78.2311, lat: 42.3378, kind: "nature" },
  ],
  "cholpon-ata": [
    { nameZh: "伊塞克湖露天岩画区", nameEn: "Cholpon-Ata Petroglyph Open-Air Museum", lon: 77.0570, lat: 42.6607, kind: "landmark" },
    { nameZh: "鲁赫奥尔多文化中心", nameEn: "Rukh Ordo Cultural Centre", lon: 77.0950, lat: 42.6481, kind: "landmark" },
    { nameZh: "湖滨公园", nameEn: "Lakeside Park", lon: 77.0872, lat: 42.6401, kind: "nature" },
    { nameZh: "乔尔蓬阿塔长途汽车站", nameEn: "Cholpon-Ata Bus Station", lon: 77.0809, lat: 42.6470, kind: "transport" },
  ],
  balykchy: [
    { nameZh: "巴雷克奇鱼市", nameEn: "Balykchy Fish Market", lon: 76.1502, lat: 42.4565, kind: "landmark" },
    { nameZh: "巴雷克奇长途汽车站", nameEn: "Balykchy Bus Station", lon: 76.1665, lat: 42.4519, kind: "transport" },
    { nameZh: "巴雷克奇海滨站", nameEn: "Balykchy Beach Station", lon: 76.2245, lat: 42.4610, kind: "transport" },
    { nameZh: "博姆峡谷", nameEn: "Boom Gorge", lon: 75.8045, lat: 42.5791, kind: "nature" },
  ],
  naryn: [
    { nameZh: "纳伦州历史民族博物馆", nameEn: "Naryn Historical and Ethnographic Museum", lon: 76.0214, lat: 41.4255, kind: "landmark" },
    { nameZh: "纳伦州音乐话剧院", nameEn: "Naryn Music and Drama Theatre", lon: 75.9932, lat: 41.4288, kind: "landmark" },
    { nameZh: "纳伦城市市场", nameEn: "Naryn City Market", lon: 75.9919, lat: 41.4304, kind: "landmark" },
    { nameZh: "萨尔金托尔国家自然公园", nameEn: "Salkyn-Tor Nature Park", lon: 76.1833, lat: 41.4333, kind: "nature" },
    { nameZh: "纳伦机场", nameEn: "Naryn Airport", lon: 76.1306, lat: 41.4415, kind: "transport" },
  ],
  talas: [
    { nameZh: "塔拉斯中央巴扎", nameEn: "Talas Central Bazaar", lon: 72.2449, lat: 42.5162, kind: "landmark" },
    { nameZh: "塔拉斯州音乐话剧院", nameEn: "Talas Music and Drama Theatre", lon: 72.2516, lat: 42.5252, kind: "landmark" },
    { nameZh: "别什塔什国家自然公园", nameEn: "Besh-Tash Nature Park", lon: 72.3309, lat: 42.2915, kind: "nature" },
    { nameZh: "塔拉斯机场", nameEn: "Talas Airport", lon: 72.2631, lat: 42.5059, kind: "transport" },
  ],
  kochkor: [
    { nameZh: "科奇科尔地方志博物馆", nameEn: "Kochkor Regional Museum", lon: 75.7595, lat: 42.2145, kind: "landmark" },
    { nameZh: "科奇科尔牲畜市场", nameEn: "Kochkor Livestock Market", lon: 75.7340, lat: 42.2120, kind: "landmark" },
    { nameZh: "松湖", nameEn: "Song-Köl", lon: 75.1732, lat: 41.8414, kind: "nature" },
  ],
};
