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
  idrija: [
    { nameZh: "安东尼坑道", nameEn: "Anthony's Main Road (Antonijev rov)", lon: 14.0226, lat: 45.9997, kind: "landmark" },
    { nameZh: "汞冶炼厂访客中心", nameEn: "Mercury Smelting Plant", lon: 14.0309, lat: 46.0073, kind: "landmark" },
    { nameZh: "格韦尔肯埃格城堡（伊德里亚市立博物馆）", nameEn: "Gewerkenegg Castle (Idrija Municipal Museum)", lon: 14.0187, lat: 46.0007, kind: "landmark" },
    { nameZh: "卡姆什特木制水轮泵", nameEn: "Kamšt water wheel", lon: 14.0325, lat: 45.9987, kind: "landmark" },
    { nameZh: "弗朗西斯竖井", nameEn: "Frančiška Shaft", lon: 14.0247, lat: 46.0024, kind: "landmark" },
    { nameZh: "野湖", nameEn: "Wild Lake (Divje jezero)", lon: 14.028, lat: 45.9821, kind: "landmark" },
  ],
  postojna: [
    { nameZh: "波斯托伊纳溶洞入口", nameEn: "Postojna Cave entrance", lon: 14.2039, lat: 45.7827, kind: "landmark" },
    { nameZh: "洞螈馆", nameEn: "Vivarium Proteus", lon: 14.2049, lat: 45.7827, kind: "landmark" },
    { nameZh: "普雷德亚马城堡", nameEn: "Predjama Castle", lon: 14.1267, lat: 45.8158, kind: "landmark" },
    { nameZh: "普拉尼纳洞", nameEn: "Planina Cave", lon: 14.2456, lat: 45.8199, kind: "landmark" },
    { nameZh: "内卡尼奥拉博物馆", nameEn: "Notranjska Museum Postojna", lon: 14.2175, lat: 45.7772, kind: "landmark" },
  ],
  kamnik: [
    { nameZh: "马利格拉德岩丘与礼拜堂", nameEn: "Mali grad", lon: 14.6117, lat: 46.2246, kind: "landmark" },
    { nameZh: "舒特纳街与主广场", nameEn: "Šutna street and Glavni trg", lon: 14.612, lat: 46.2257, kind: "district" },
    { nameZh: "扎普里采城堡（博物馆）", nameEn: "Zaprice Castle", lon: 14.6057, lat: 46.2231, kind: "landmark" },
    { nameZh: "梅金耶修道院", nameEn: "Mekinje Monastery", lon: 14.6149, lat: 46.2348, kind: "landmark" },
    { nameZh: "沃尔奇波托克树木园", nameEn: "Arboretum Volčji Potok", lon: 14.6137, lat: 46.1881, kind: "nature" },
    { nameZh: "韦利卡普拉尼纳高山牧场", nameEn: "Velika planina", lon: 14.652, lat: 46.2959, kind: "nature" },
  ],
  bohinj: [
    { nameZh: "博希尼湖", nameEn: "Lake Bohinj", lon: 13.8586, lat: 46.2847, kind: "nature" },
    { nameZh: "圣约翰洗者堂与石桥", nameEn: "Church of St John the Baptist and the stone bridge", lon: 13.8867, lat: 46.2787, kind: "landmark" },
    { nameZh: "萨维察瀑布", nameEn: "Savica Waterfall", lon: 13.7963, lat: 46.2932, kind: "nature" },
    { nameZh: "沃格尔索道下站", nameEn: "Vogel cable car base station", lon: 13.8381, lat: 46.2698, kind: "district" },
    { nameZh: "莫斯特尼察隘谷", nameEn: "Mostnica gorge", lon: 13.8855, lat: 46.2981, kind: "nature" },
    { nameZh: "博希尼斯卡比斯特里察（市镇驻地）", nameEn: "Bohinjska Bistrica", lon: 13.9539, lat: 46.2724, kind: "district" },
  ],
};
