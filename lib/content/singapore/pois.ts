import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // 新加坡
  "singapore-city": [
    { nameZh: "鱼尾狮公园", nameEn: "Merlion Park", lon: 103.8545, lat: 1.2868, kind: "landmark" },
    { nameZh: "驳船码头与克拉码头", nameEn: "Boat Quay & Clarke Quay", lon: 103.8484, lat: 1.2884, kind: "district" },
    { nameZh: "市政厅与旧国会大厦", nameEn: "City Hall & Old Parliament House", lon: 103.8514, lat: 1.2903, kind: "landmark" },
    { nameZh: "滨海湾金沙", nameEn: "Marina Bay Sands", lon: 103.8607, lat: 1.2836, kind: "landmark" },
    { nameZh: "滨海湾花园", nameEn: "Gardens by the Bay", lon: 103.8636, lat: 1.2816, kind: "landmark" },
    { nameZh: "牛车水（佛牙寺）", nameEn: "Chinatown (Buddha Tooth Relic Temple)", lon: 103.8442, lat: 1.2812, kind: "district" },
    { nameZh: "甘榜格南（苏丹回教堂）", nameEn: "Kampong Glam (Sultan Mosque)", lon: 103.8594, lat: 1.3021, kind: "district" },
    { nameZh: "小印度", nameEn: "Little India", lon: 103.8496, lat: 1.3067, kind: "district" },
    { nameZh: "新加坡植物园", nameEn: "Singapore Botanic Gardens", lon: 103.8159, lat: 1.3138, kind: "nature" },
  ],
  sentosa: [
    { nameZh: "圣淘沙名胜世界", nameEn: "Resorts World Sentosa", lon: 103.8203, lat: 1.2544, kind: "landmark" },
    { nameZh: "西乐索海滩", nameEn: "Siloso Beach", lon: 103.8156, lat: 1.2500, kind: "nature" },
    { nameZh: "圣淘沙跨海缆车站", nameEn: "Sentosa Cable Car Station", lon: 103.8228, lat: 1.2653, kind: "transport" },
    { nameZh: "斜坡滑车公园", nameEn: "Skyline Luge Sentosa", lon: 103.8181, lat: 1.2569, kind: "landmark" },
  ],
  "chinatown-singapore": [
    { nameZh: "马里安曼兴都庙", nameEn: "Sri Mariamman Temple", lon: 103.8444, lat: 1.2822, kind: "landmark" },
    { nameZh: "佛牙寺龙华院", nameEn: "Buddha Tooth Relic Temple", lon: 103.8436, lat: 1.2815, kind: "landmark" },
    { nameZh: "史密斯街与宝塔街骑楼", nameEn: "Smith Street & Pagoda Street Shophouses", lon: 103.8440, lat: 1.2825, kind: "district" },
    { nameZh: "牛车水传统文化馆", nameEn: "Chinatown Heritage Centre", lon: 103.8438, lat: 1.2827, kind: "landmark" },
  ],
  "kampong-glam": [
    { nameZh: "苏丹回教堂", nameEn: "Sultan Mosque", lon: 103.8594, lat: 1.3025, kind: "landmark" },
    { nameZh: "旧王宫（马来传统文化馆）", nameEn: "Istana Kampong Glam (Malay Heritage Centre)", lon: 103.8600, lat: 1.3020, kind: "landmark" },
    { nameZh: "哈芝巷", nameEn: "Haji Lane", lon: 103.8590, lat: 1.3010, kind: "district" },
    { nameZh: "亚拉街", nameEn: "Arab Street", lon: 103.8598, lat: 1.3016, kind: "district" },
  ],
  "little-india-singapore": [
    { nameZh: "斯里维拉玛卡里雅曼庙", nameEn: "Sri Veeramakaliamman Temple", lon: 103.8494, lat: 1.3073, kind: "landmark" },
    { nameZh: "竹脚中心", nameEn: "Tekka Centre", lon: 103.8497, lat: 1.3061, kind: "landmark" },
    { nameZh: "实龙岗路商铺街", nameEn: "Serangoon Road Shops", lon: 103.8496, lat: 1.3067, kind: "district" },
  ],
};
