import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ===== 亚洲 / 文莱 =====（OSM 坐标；王宫、王室御用器物博物馆、陵墓、纪念塔与军事设施不作 POI）
  "bandar-seri-begawan": [
    { nameZh: "奥马尔·阿里·赛福鼎清真寺", nameEn: "Omar Ali Saifuddien Mosque", lon: 114.9392, lat: 4.88942, kind: "landmark" },
    { nameZh: "哈桑纳尔·博尔基亚清真寺", nameEn: "Jame' 'Asr Hassanil Bolkiah Mosque", lon: 114.92191, lat: 4.89798, kind: "landmark" },
    { nameZh: "文莱历史中心", nameEn: "Brunei History Centre", lon: 114.94152, lat: 4.8917, kind: "landmark" },
    { nameZh: "塔塞克拉马公园", nameEn: "Tasek Lama Park", lon: 114.9458, lat: 4.90258, kind: "nature" },
    { nameZh: "加东夜市", nameEn: "Gadong Night Market", lon: 114.91902, lat: 4.90509, kind: "district" },
    { nameZh: "马来技术博物馆", nameEn: "Malay Technology Museum", lon: 114.9698, lat: 4.88325, kind: "landmark" },
    { nameZh: "文莱海事博物馆", nameEn: "Maritime Museum", lon: 114.96839, lat: 4.88182, kind: "landmark" },
    { nameZh: "摩拉海滩", nameEn: "Muara Beach", lon: 115.07956, lat: 5.03794, kind: "nature" },
  ],
  "kampong-ayer": [
    { nameZh: "水村文化旅游馆", nameEn: "Kampong Ayer Cultural & Tourism Gallery", lon: 114.94447, lat: 4.8842, kind: "landmark" },
  ],
  tutong: [
    { nameZh: "斯里克纳甘海滩", nameEn: "Seri Kenangan Beach", lon: 114.62784, lat: 4.80046, kind: "nature" },
    { nameZh: "双溪巴松休闲公园", nameEn: "Sungai Basong Recreational Park", lon: 114.67071, lat: 4.81781, kind: "nature" },
    { nameZh: "默林本湖遗产公园", nameEn: "Tasek Merimbun Heritage Park", lon: 114.67977, lat: 4.59316, kind: "nature" },
  ],
  "kuala-belait": [
    { nameZh: "马来奕区博物馆", nameEn: "Belait District Museum", lon: 114.19101, lat: 4.58882, kind: "landmark" },
    { nameZh: "诗里亚", nameEn: "Seria", lon: 114.33018, lat: 4.61416, kind: "district" },
    { nameZh: "诗里亚能源实验室", nameEn: "Seria Energy Lab", lon: 114.32716, lat: 4.61719, kind: "landmark" },
    { nameZh: "卢阿甘拉拉克森林休憩公园", nameEn: "Luagan Lalak Forest Recreation Park", lon: 114.47528, lat: 4.51533, kind: "nature" },
  ],
  bangar: [
    { nameZh: "佩利乌南公园", nameEn: "Peliunan Park", lon: 115.10397, lat: 4.71832, kind: "nature" },
    { nameZh: "帕托伊山森林休憩公园", nameEn: "Bukit Patoi Forest Recreation Park", lon: 115.1792, lat: 4.74614, kind: "nature" },
    { nameZh: "乌鲁淡布隆国家公园林冠步道", nameEn: "Ulu Temburong National Park canopy walk", lon: 115.15976, lat: 4.55209, kind: "nature" },
    { nameZh: "淡布隆大桥", nameEn: "Temburong Bridge", lon: 115.09292, lat: 4.84214, kind: "transport" },
  ],
};
