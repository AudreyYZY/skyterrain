import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 德国 ──
  berlin: [
    { nameZh: "博物馆岛", nameEn: "Museum Island", lon: 13.3969, lat: 52.5169, kind: "landmark" },
    { nameZh: "勃兰登堡门", nameEn: "Brandenburg Gate", lon: 13.3777, lat: 52.5163, kind: "landmark" },
    { nameZh: "东区画廊", nameEn: "East Side Gallery", lon: 13.4394, lat: 52.5054, kind: "landmark" },
    { nameZh: "查理检查站", nameEn: "Checkpoint Charlie", lon: 13.3903, lat: 52.5076, kind: "landmark" },
    { nameZh: "波茨坦无忧宫", nameEn: "Sanssouci Palace, Potsdam", lon: 13.0384, lat: 52.4041, kind: "landmark" },
  ],
  munich: [
    { nameZh: "玛丽恩广场", nameEn: "Marienplatz", lon: 11.5755, lat: 48.1374, kind: "landmark" },
    { nameZh: "宁芬堡宫", nameEn: "Nymphenburg Palace", lon: 11.5030, lat: 48.1583, kind: "landmark" },
    { nameZh: "英国花园", nameEn: "English Garden", lon: 11.6047, lat: 48.1642, kind: "nature" },
    { nameZh: "楚格峰", nameEn: "Zugspitze", lon: 10.9866, lat: 47.4211, kind: "nature" },
  ],
  hamburg: [
    { nameZh: "仓库城", nameEn: "Speicherstadt", lon: 9.9954, lat: 53.5441, kind: "landmark" },
    { nameZh: "易北爱乐音乐厅", nameEn: "Elbphilharmonie", lon: 9.9837, lat: 53.5412, kind: "landmark" },
    { nameZh: "圣保利渔市", nameEn: "St. Pauli Fish Market", lon: 9.9539, lat: 53.5460, kind: "district" },
    { nameZh: "阿尔斯特湖", nameEn: "Alster Lakes", lon: 9.9950, lat: 53.5580, kind: "nature" },
  ],
  cologne: [
    { nameZh: "科隆大教堂", nameEn: "Cologne Cathedral", lon: 6.9583, lat: 50.9413, kind: "landmark" },
    { nameZh: "霍亨索伦桥", nameEn: "Hohenzollern Bridge", lon: 6.9614, lat: 50.9432, kind: "landmark" },
    { nameZh: "路德维希博物馆", nameEn: "Museum Ludwig", lon: 6.9600, lat: 50.9407, kind: "landmark" },
  ],
  frankfurt: [
    { nameZh: "罗马广场", nameEn: "Römerberg", lon: 8.6821, lat: 50.1106, kind: "landmark" },
    { nameZh: "施泰德美术馆", nameEn: "Städel Museum", lon: 8.6746, lat: 50.1041, kind: "landmark" },
    { nameZh: "法兰克福大教堂", nameEn: "Frankfurt Cathedral", lon: 8.6837, lat: 50.1106, kind: "landmark" },
    { nameZh: "萨克森豪森区", nameEn: "Sachsenhausen", lon: 8.6800, lat: 50.1030, kind: "district" },
  ],
  dresden: [
    { nameZh: "茨温格宫", nameEn: "Zwinger Palace", lon: 13.7350, lat: 51.0526, kind: "landmark" },
    { nameZh: "圣母教堂", nameEn: "Frauenkirche", lon: 13.7433, lat: 51.0518, kind: "landmark" },
    { nameZh: "德累斯顿城堡", nameEn: "Dresden Castle", lon: 13.7396, lat: 51.0522, kind: "landmark" },
    { nameZh: "巴斯泰岩", nameEn: "Bastei", lon: 14.0956, lat: 50.9683, kind: "nature" },
  ],
  nuremberg: [
    { nameZh: "纽伦堡城堡", nameEn: "Nuremberg Castle", lon: 11.0775, lat: 49.4577, kind: "landmark" },
    { nameZh: "圣劳伦茨教堂", nameEn: "St. Lorenz Church", lon: 11.0775, lat: 49.4527, kind: "landmark" },
    { nameZh: "日耳曼国家博物馆", nameEn: "Germanic National Museum", lon: 11.0722, lat: 49.4478, kind: "landmark" },
    { nameZh: "索伦霍芬化石产地", nameEn: "Solnhofen Fossil Site", lon: 10.9167, lat: 48.9167, kind: "nature" },
  ],
  freiburg: [
    { nameZh: "弗赖堡大教堂", nameEn: "Freiburg Minster", lon: 7.8525, lat: 47.9955, kind: "landmark" },
    { nameZh: "施罗斯山", nameEn: "Schlossberg", lon: 7.8578, lat: 47.9958, kind: "nature" },
    { nameZh: "费尔德山", nameEn: "Feldberg", lon: 7.9836, lat: 47.8744, kind: "nature" },
    { nameZh: "蒂蒂湖", nameEn: "Lake Titisee", lon: 8.1500, lat: 47.9000, kind: "nature" },
  ],
  heidelberg: [
    { nameZh: "海德堡城堡", nameEn: "Heidelberg Castle", lon: 8.7157, lat: 49.4106, kind: "landmark" },
    { nameZh: "老桥", nameEn: "Old Bridge", lon: 8.7089, lat: 49.4127, kind: "landmark" },
    { nameZh: "哲学家小径", nameEn: "Philosophers' Walk", lon: 8.7050, lat: 49.4160, kind: "nature" },
  ],
  trier: [
    { nameZh: "黑门", nameEn: "Porta Nigra", lon: 6.6425, lat: 49.7583, kind: "landmark" },
    { nameZh: "古罗马大浴场", nameEn: "Imperial Baths", lon: 6.6472, lat: 49.7517, kind: "landmark" },
    { nameZh: "圆形剧场", nameEn: "Roman Amphitheatre", lon: 6.6553, lat: 49.7517, kind: "landmark" },
    { nameZh: "马克思故居", nameEn: "Karl Marx House", lon: 6.6444, lat: 49.7558, kind: "landmark" },
  ],
  stralsund: [
    { nameZh: "圣尼古拉教堂", nameEn: "St. Nicholas Church", lon: 13.0928, lat: 54.3153, kind: "landmark" },
    { nameZh: "海洋博物馆", nameEn: "Ozeaneum", lon: 13.0894, lat: 54.3167, kind: "landmark" },
    { nameZh: "吕根岛白垩崖", nameEn: "Rügen Chalk Cliffs", lon: 13.6461, lat: 54.5578, kind: "nature" },
  ],
  // ── 德国 批2（2026-09-05）──
  leipzig: [
    { nameZh: "圣托马斯教堂", nameEn: "Thomaskirche", lon: 12.3720, lat: 51.3390, kind: "landmark" },
    { nameZh: "圣尼古拉教堂", nameEn: "Nikolaikirche", lon: 12.3780, lat: 51.3400, kind: "landmark" },
    { nameZh: "布商大厦与奥古斯特广场", nameEn: "Gewandhaus & Augustusplatz", lon: 12.3800, lat: 51.3380, kind: "landmark" },
    { nameZh: "民族大会战纪念碑", nameEn: "Monument to the Battle of the Nations", lon: 12.4130, lat: 51.3120, kind: "landmark" },
    { nameZh: "莱比锡中央车站", nameEn: "Leipzig Hauptbahnhof", lon: 12.3820, lat: 51.3450, kind: "transport" },
    { nameZh: "棉纺厂艺术区", nameEn: "Spinnerei", lon: 12.3200, lat: 51.3300, kind: "district" },
  ],
  stuttgart: [
    { nameZh: "王宫广场", nameEn: "Schlossplatz", lon: 9.1790, lat: 48.7785, kind: "district" },
    { nameZh: "梅赛德斯—奔驰博物馆", nameEn: "Mercedes-Benz Museum", lon: 9.2340, lat: 48.7880, kind: "landmark" },
    { nameZh: "保时捷博物馆", nameEn: "Porsche Museum", lon: 9.1520, lat: 48.8340, kind: "landmark" },
    { nameZh: "州立美术馆", nameEn: "Staatsgalerie", lon: 9.1870, lat: 48.7800, kind: "landmark" },
    { nameZh: "威廉玛动植物园", nameEn: "Wilhelma", lon: 9.2050, lat: 48.8040, kind: "nature" },
    { nameZh: "斯图加特中央车站", nameEn: "Stuttgart Hauptbahnhof", lon: 9.1820, lat: 48.7830, kind: "transport" },
  ],
  dusseldorf: [
    { nameZh: "老城", nameEn: "Altstadt", lon: 6.7720, lat: 51.2260, kind: "district" },
    { nameZh: "国王大道", nameEn: "Königsallee", lon: 6.7790, lat: 51.2220, kind: "district" },
    { nameZh: "莱茵河滨步道", nameEn: "Rhine Promenade", lon: 6.7700, lat: 51.2250, kind: "nature" },
    { nameZh: "媒体港", nameEn: "MedienHafen", lon: 6.7500, lat: 51.2160, kind: "district" },
    { nameZh: "莱茵塔", nameEn: "Rheinturm", lon: 6.7620, lat: 51.2180, kind: "landmark" },
    { nameZh: "K20 美术馆", nameEn: "K20 Kunstsammlung", lon: 6.7760, lat: 51.2280, kind: "landmark" },
  ],
  lubeck: [
    { nameZh: "霍尔斯滕门", nameEn: "Holstentor", lon: 10.6800, lat: 53.8660, kind: "landmark" },
    { nameZh: "圣玛丽教堂", nameEn: "St. Mary's Church", lon: 10.6850, lat: 53.8680, kind: "landmark" },
    { nameZh: "布登勃洛克之家", nameEn: "Buddenbrookhaus", lon: 10.6850, lat: 53.8690, kind: "landmark" },
    { nameZh: "尼德埃格杏仁糖店", nameEn: "Niederegger Marzipan", lon: 10.6860, lat: 53.8670, kind: "landmark" },
    { nameZh: "特拉沃明德海滩", nameEn: "Travemünde Beach", lon: 10.8800, lat: 53.9600, kind: "nature" },
    { nameZh: "吕贝克中央车站", nameEn: "Lübeck Hauptbahnhof", lon: 10.6700, lat: 53.8670, kind: "transport" },
  ],
  rothenburg: [
    { nameZh: "集市广场与市政厅", nameEn: "Marktplatz & Town Hall", lon: 10.1790, lat: 49.3770, kind: "district" },
    { nameZh: "普伦莱茵", nameEn: "Plönlein", lon: 10.1800, lat: 49.3740, kind: "landmark" },
    { nameZh: "城墙步道", nameEn: "Town Wall Walk", lon: 10.1830, lat: 49.3760, kind: "landmark" },
    { nameZh: "德国圣诞博物馆", nameEn: "German Christmas Museum", lon: 10.1780, lat: 49.3765, kind: "landmark" },
    { nameZh: "城堡花园", nameEn: "Burggarten", lon: 10.1730, lat: 49.3770, kind: "nature" },
  ],
  regensburg: [
    { nameZh: "石桥", nameEn: "Stone Bridge", lon: 12.0970, lat: 49.0220, kind: "landmark" },
    { nameZh: "圣彼得主教座堂", nameEn: "St. Peter's Cathedral", lon: 12.0980, lat: 49.0190, kind: "landmark" },
    { nameZh: "老城与哈德市场", nameEn: "Old Town & Haidplatz", lon: 12.0960, lat: 49.0180, kind: "district" },
    { nameZh: "历史香肠厨房", nameEn: "Historische Wurstkuchl", lon: 12.0960, lat: 49.0215, kind: "landmark" },
    { nameZh: "图恩与塔克西斯宫", nameEn: "Thurn und Taxis Palace", lon: 12.1000, lat: 49.0130, kind: "landmark" },
    { nameZh: "瓦尔哈拉神殿", nameEn: "Walhalla", lon: 12.2260, lat: 49.0320, kind: "landmark" },
  ],
};
