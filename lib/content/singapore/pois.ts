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
  katong: [
    { nameZh: "坤成路土生华人排屋", nameEn: "Koon Seng Road Peranakan terrace houses", lon: 103.90246, lat: 1.31037, kind: "landmark" },
    { nameZh: "兴都庙（锡兰路）", nameEn: "Sri Senpaga Vinayagar Temple", lon: 103.90251, lat: 1.30552, kind: "landmark" },
    { nameZh: "慈光阁（土生华人收藏馆）", nameEn: "The Intan", lon: 103.90098, lat: 1.31468, kind: "landmark" },
    { nameZh: "欧亚裔文化馆", nameEn: "Eurasian Heritage Gallery", lon: 103.89932, lat: 1.31004, kind: "landmark" },
    { nameZh: "海格路巴刹与熟食中心", nameEn: "Haig Road Market & Food Centre", lon: 103.89558, lat: 1.31513, kind: "landmark" },
    { nameZh: "滨海湾东区巴刹与熟食中心", nameEn: "Marine Parade Market & Food Centre", lon: 103.90634, lat: 1.30218, kind: "landmark" },
    { nameZh: "东海岸公园", nameEn: "East Coast Park", lon: 103.91261, lat: 1.30032, kind: "nature" },
  ],
  "changi-village": [
    { nameZh: "樟宜村巴刹与熟食中心", nameEn: "Changi Village Market & Hawker Centre", lon: 103.98815, lat: 1.38942, kind: "landmark" },
    { nameZh: "樟宜角渡轮码头（往乌敏岛）", nameEn: "Changi Point Ferry Terminal", lon: 103.98754, lat: 1.39104, kind: "district" },
    { nameZh: "樟宜村巴士总站", nameEn: "Changi Village bus terminal", lon: 103.9879, lat: 1.38947, kind: "district" },
    { nameZh: "樟宜海滩公园", nameEn: "Changi Beach Park", lon: 103.99128, lat: 1.39132, kind: "nature" },
    { nameZh: "樟宜角海岸栈道", nameEn: "Changi Point Coastal Walk", lon: 103.98276, lat: 1.39262, kind: "nature" },
    { nameZh: "乌敏岛", nameEn: "Pulau Ubin", lon: 103.9648, lat: 1.4103, kind: "nature" },
  ],
  "tiong-bahru": [
    { nameZh: "中峇鲁巴刹与熟食中心", nameEn: "Tiong Bahru Market & Food Centre", lon: 103.83255, lat: 1.28479, kind: "district" },
    { nameZh: "成保茶园", nameEn: "Seng Poh Tea Garden", lon: 103.83113, lat: 1.28379, kind: "nature" },
    { nameZh: "中峇鲁防空洞", nameEn: "Tiong Bahru air-raid shelter", lon: 103.83084, lat: 1.28342, kind: "landmark" },
    { nameZh: "齐天宫", nameEn: "Qi Tian Gong", lon: 103.83434, lat: 1.28385, kind: "landmark" },
    { nameZh: "中峇鲁公园", nameEn: "Tiong Bahru Park", lon: 103.8244, lat: 1.28778, kind: "nature" },
    { nameZh: "中峇鲁地铁站", nameEn: "Tiong Bahru MRT station", lon: 103.8272, lat: 1.2861, kind: "transport" },
  ],
  punggol: [
    { nameZh: "可尼岛公园", nameEn: "Coney Island Park", lon: 103.92147, lat: 1.40942, kind: "nature" },
    { nameZh: "榜鹅水道公园", nameEn: "Punggol Waterway Park", lon: 103.90568, lat: 1.40934, kind: "nature" },
    { nameZh: "我的水道@榜鹅", nameEn: "My Waterway@Punggol", lon: 103.9004, lat: 1.40896, kind: "nature" },
    { nameZh: "榜鹅数码园区", nameEn: "Punggol Digital District", lon: 103.90879, lat: 1.41281, kind: "district" },
    { nameZh: "新加坡理工大学榜鹅校园", nameEn: "SIT Punggol Campus", lon: 103.91064, lat: 1.4127, kind: "landmark" },
    { nameZh: "榜鹅角码头", nameEn: "Punggol Point Jetty", lon: 103.91065, lat: 1.42177, kind: "landmark" },
  ],
};
