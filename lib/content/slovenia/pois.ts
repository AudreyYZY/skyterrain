import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ===== 欧洲 / 斯洛文尼亚 =====
  ljubljana: [
    { nameZh: "卢布尔雅那城堡", nameEn: "Ljubljana Castle", lon: 14.5086, lat: 46.0490, kind: "landmark" },
    { nameZh: "三桥", nameEn: "Triple Bridge", lon: 14.5063, lat: 46.0511, kind: "landmark" },
    { nameZh: "普列舍仁广场", nameEn: "Prešeren Square", lon: 14.5061, lat: 46.0514, kind: "landmark" },
    { nameZh: "中央市场", nameEn: "Central Market", lon: 14.5092, lat: 46.0514, kind: "landmark" },
    { nameZh: "龙桥", nameEn: "Dragon Bridge", lon: 14.5103, lat: 46.0522, kind: "landmark" },
    { nameZh: "蒂沃利公园", nameEn: "Tivoli Park", lon: 14.4950, lat: 46.0550, kind: "landmark" },
  ],
  maribor: [
    { nameZh: "老藤之家", nameEn: "Old Vine House", lon: 15.6431, lat: 46.5571, kind: "landmark" },
    { nameZh: "伦特滨河区", nameEn: "Lent riverfront", lon: 15.6420, lat: 46.5569, kind: "landmark" },
    { nameZh: "主广场与市政厅", nameEn: "Main Square and Town Hall", lon: 15.6456, lat: 46.5575, kind: "landmark" },
    { nameZh: "波霍列缆车下站", nameEn: "Pohorje cable car lower station", lon: 15.6025, lat: 46.5328, kind: "landmark" },
  ],
  celje: [
    { nameZh: "采列古堡", nameEn: "Old Castle of Celje", lon: 15.2733, lat: 46.2197, kind: "landmark" },
    { nameZh: "采列地方博物馆", nameEn: "Celje Regional Museum", lon: 15.2625, lat: 46.2297, kind: "landmark" },
    { nameZh: "采列老城", nameEn: "Celje old town", lon: 15.2600, lat: 46.2305, kind: "landmark" },
  ],
  kranj: [
    { nameZh: "克拉尼老城主街", nameEn: "Kranj old town main street", lon: 14.3556, lat: 46.2389, kind: "landmark" },
    { nameZh: "科克拉河峡谷", nameEn: "Kokra Canyon", lon: 14.3592, lat: 46.2408, kind: "landmark" },
    { nameZh: "普列舍仁林园", nameEn: "Prešeren Grove", lon: 14.3551, lat: 46.2433, kind: "landmark" },
  ],
  koper: [
    { nameZh: "执政官宫", nameEn: "Praetorian Palace", lon: 13.7297, lat: 45.5480, kind: "landmark" },
    { nameZh: "主教座堂与钟楼", nameEn: "Cathedral and bell tower", lon: 13.7302, lat: 45.5482, kind: "landmark" },
  ],
  piran: [
    { nameZh: "塔尔蒂尼广场", nameEn: "Tartini Square", lon: 13.5683, lat: 45.5283, kind: "landmark" },
    { nameZh: "塔尔蒂尼故居", nameEn: "Tartini House", lon: 13.5686, lat: 45.5286, kind: "landmark" },
    { nameZh: "圣乔治教堂与钟楼", nameEn: "St George's Church and bell tower", lon: 13.5669, lat: 45.5297, kind: "landmark" },
    { nameZh: "皮兰城墙", nameEn: "Piran town walls", lon: 13.5706, lat: 45.5275, kind: "landmark" },
    { nameZh: "波尔托罗日", nameEn: "Portorož", lon: 13.5910, lat: 45.5140, kind: "landmark" },
  ],
  bled: [
    { nameZh: "布莱德城堡", nameEn: "Bled Castle", lon: 14.1003, lat: 46.3697, kind: "landmark" },
    { nameZh: "布莱德岛与圣母升天教堂", nameEn: "Bled Island and Church of the Assumption", lon: 14.0906, lat: 46.3620, kind: "landmark" },
    { nameZh: "温特加尔峡谷", nameEn: "Vintgar Gorge", lon: 14.0850, lat: 46.3933, kind: "landmark" },
    { nameZh: "萨维察瀑布", nameEn: "Savica Waterfall", lon: 13.7967, lat: 46.2911, kind: "landmark" },
  ],
  ptuj: [
    { nameZh: "普图伊城堡", nameEn: "Ptuj Castle", lon: 15.8681, lat: 46.4222, kind: "landmark" },
    { nameZh: "普图伊主广场", nameEn: "Ptuj Town Square", lon: 15.8697, lat: 46.4197, kind: "landmark" },
    { nameZh: "多明我会修道院", nameEn: "Dominican Monastery", lon: 15.8722, lat: 46.4214, kind: "landmark" },
  ],
};
