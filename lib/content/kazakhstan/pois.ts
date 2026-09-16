import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // 哈萨克斯坦
  astana: [
    { nameZh: "拜特列克塔", nameEn: "Bayterek Tower", lon: 71.4306, lat: 51.1284, kind: "landmark" },
    { nameZh: "可汗夏迪尔购物娱乐中心", nameEn: "Khan Shatyr", lon: 71.4067, lat: 51.1319, kind: "landmark" },
    { nameZh: "努尔阿斯塔纳清真寺", nameEn: "Nur-Astana Mosque", lon: 71.4419, lat: 51.1667, kind: "landmark" },
    { nameZh: "哈萨克斯坦国家博物馆", nameEn: "National Museum of Kazakhstan", lon: 71.4419, lat: 51.1275, kind: "landmark" },
    { nameZh: "独立广场", nameEn: "Independence Square", lon: 71.4183, lat: 51.1289, kind: "landmark" },
  ],
  almaty: [
    { nameZh: "梅德奥高山溜冰场", nameEn: "Medeu Skating Rink", lon: 77.0500, lat: 43.1500, kind: "landmark" },
    { nameZh: "潘菲洛夫公园与升天大教堂", nameEn: "Panfilov Park & Ascension Cathedral", lon: 76.9531, lat: 43.2578, kind: "landmark" },
    { nameZh: "共和国广场", nameEn: "Republic Square", lon: 76.9451, lat: 43.2389, kind: "landmark" },
    { nameZh: "阿拜歌剧院", nameEn: "Abay Opera and Ballet Theatre", lon: 76.9286, lat: 43.2497, kind: "landmark" },
  ],
  shymkent: [
    { nameZh: "希姆肯特中央巴扎", nameEn: "Shymkent Central Bazaar", lon: 69.5833, lat: 42.3167, kind: "district" },
    { nameZh: "独立公园", nameEn: "Independence Park", lon: 69.5967, lat: 42.3153, kind: "landmark" },
    { nameZh: "阿尔法拉比广场", nameEn: "Al-Farabi Square", lon: 69.5900, lat: 42.3100, kind: "landmark" },
  ],
  aktau: [
    { nameZh: "阿克套海滨步道", nameEn: "Aktau Seaside Promenade", lon: 51.1656, lat: 43.6544, kind: "nature" },
    { nameZh: "曼格斯套地区历史博物馆", nameEn: "Mangystau Regional History Museum", lon: 51.1500, lat: 43.6500, kind: "landmark" },
  ],
  turkestan: [
    { nameZh: "亚萨维陵墓", nameEn: "Yasawi Mausoleum", lon: 68.2711, lat: 43.2975, kind: "landmark" },
    { nameZh: "哈兹拉特苏丹清真寺", nameEn: "Hazrat Sultan Mosque", lon: 68.2694, lat: 43.3025, kind: "landmark" },
    { nameZh: "突厥斯坦地区历史博物馆", nameEn: "Turkestan Regional History Museum", lon: 68.2750, lat: 43.2950, kind: "landmark" },
  ],
  karaganda: [
    { nameZh: "卡拉干达地区历史博物馆", nameEn: "Karaganda Regional History Museum", lon: 73.1094, lat: 49.8047, kind: "landmark" },
  ],
  semey: [
    { nameZh: "谢梅伊斜拉桥", nameEn: "Semey Cable-Stayed Bridge", lon: 80.2275, lat: 50.4111, kind: "landmark" },
    { nameZh: "阿巴伊纪念馆", nameEn: "Abai Memorial Museum", lon: 80.2306, lat: 50.4089, kind: "landmark" },
    { nameZh: "陀思妥耶夫斯基文学纪念馆", nameEn: "Dostoevsky Literary Memorial Museum", lon: 80.2258, lat: 50.4125, kind: "landmark" },
  ],
  pavlodar: [
    { nameZh: "额尔齐斯河河滨步道", nameEn: "Irtysh Riverside Promenade", lon: 76.9674, lat: 52.2873, kind: "nature" },
    { nameZh: "巴甫洛达尔地区历史博物馆", nameEn: "Pavlodar Regional History Museum", lon: 76.9700, lat: 52.2900, kind: "landmark" },
  ],
  kokshetau: [
    { nameZh: "科克舍套地区历史博物馆", nameEn: "Kokshetau Regional History Museum", lon: 69.3833, lat: 53.2833, kind: "landmark" },
  ],
  oskemen: [
    { nameZh: "东哈萨克斯坦州历史地方志博物馆", nameEn: "East Kazakhstan Regional Museum of History and Local Lore", lon: 82.6215, lat: 49.9467, kind: "landmark" },
    { nameZh: "额尔齐斯河与乌尔巴河汇流口滨河路", nameEn: "Irtysh–Ulba confluence embankment", lon: 82.6194, lat: 49.9426, kind: "landmark" },
  ],
  atyrau: [
    { nameZh: "伊曼加利清真寺", nameEn: "Imangali Mosque", lon: 51.90051, lat: 47.10583, kind: "landmark" },
    { nameZh: "圣母安息主教座堂", nameEn: "Dormition Cathedral", lon: 51.90421, lat: 47.11409, kind: "landmark" },
    { nameZh: "州立话剧院", nameEn: "Atyrau Regional Drama Theatre", lon: 51.93304, lat: 47.10508, kind: "landmark" },
    { nameZh: "跨乌拉尔河人行桥", nameEn: "Footbridge over the Ural", lon: 51.89393, lat: 47.09604, kind: "landmark" },
    { nameZh: "萨赖希克博物馆保护区（邻区）", nameEn: "Saraishyq museum-reserve (neighbouring district)", lon: 51.71799, lat: 47.49801, kind: "landmark" },
  ],
  taldykorgan: [
    { nameZh: "扬苏古罗夫故居博物馆", nameEn: "Ilyas Zhansugurov house museum", lon: 78.38409, lat: 45.01773, kind: "landmark" },
    { nameZh: "特内什帕耶夫博物馆", nameEn: "Tynyshpayev museum", lon: 78.38441, lat: 45.01621, kind: "landmark" },
    { nameZh: "中央公园", nameEn: "Central Park", lon: 78.38393, lat: 45.01898, kind: "nature" },
    { nameZh: "扎斯塔尔公园", nameEn: "Zhastar Park", lon: 78.34681, lat: 45.00543, kind: "nature" },
  ],
};
