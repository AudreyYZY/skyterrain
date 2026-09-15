import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // 克罗地亚
  zagreb: [
    { nameZh: "圣马可教堂", nameEn: "St. Mark's Church", lon: 15.9711, lat: 45.8306, kind: "landmark" },
    { nameZh: "上城区石门", nameEn: "Stone Gate", lon: 15.9722, lat: 45.8500, kind: "landmark" },
    { nameZh: "多拉茨露天市场", nameEn: "Dolac Market", lon: 15.9761, lat: 45.8144, kind: "district" },
    { nameZh: "耶拉契奇总督广场", nameEn: "Ban Jelačić Square", lon: 15.9775, lat: 45.8131, kind: "district" },
    { nameZh: "破碎关系博物馆", nameEn: "Museum of Broken Relationships", lon: 15.9739, lat: 45.8317, kind: "landmark" },
  ],
  split: [
    { nameZh: "戴克里先宫", nameEn: "Diocletian's Palace", lon: 16.4396, lat: 43.5083, kind: "landmark" },
    { nameZh: "圣多姆尼乌斯主教座堂", nameEn: "Cathedral of St. Domnius", lon: 16.4406, lat: 43.5086, kind: "landmark" },
    { nameZh: "里瓦滨海长廊", nameEn: "Riva Waterfront", lon: 16.4386, lat: 43.5069, kind: "nature" },
    { nameZh: "马尔扬山", nameEn: "Marjan Hill", lon: 16.4197, lat: 43.5142, kind: "nature" },
  ],
  dubrovnik: [
    { nameZh: "杜布罗夫尼克城墙", nameEn: "Dubrovnik City Walls", lon: 18.1100, lat: 42.6403, kind: "landmark" },
    { nameZh: "斯特拉敦大道", nameEn: "Stradun", lon: 18.1088, lat: 42.6414, kind: "district" },
    { nameZh: "斯庞扎宫", nameEn: "Sponza Palace", lon: 18.1108, lat: 42.6423, kind: "landmark" },
    { nameZh: "洛克鲁姆岛", nameEn: "Lokrum Island", lon: 18.1197, lat: 42.6289, kind: "nature" },
    { nameZh: "斯尔季山缆车", nameEn: "Srđ Cable Car", lon: 18.1136, lat: 42.6444, kind: "landmark" },
  ],
  rijeka: [
    { nameZh: "特尔萨特城堡", nameEn: "Trsat Castle", lon: 14.4453, lat: 45.3372, kind: "landmark" },
    { nameZh: "科尔佐步行街", nameEn: "Korzo", lon: 14.4436, lat: 45.3272, kind: "district" },
  ],
  zadar: [
    { nameZh: "海之风琴", nameEn: "Sea Organ", lon: 15.2214, lat: 44.1136, kind: "landmark" },
    { nameZh: "向太阳致敬", nameEn: "Sun Salutation", lon: 15.2206, lat: 44.1144, kind: "landmark" },
    { nameZh: "圣多纳特教堂", nameEn: "Church of St. Donatus", lon: 15.2261, lat: 44.1156, kind: "landmark" },
    { nameZh: "圣阿纳斯塔西娅主教座堂", nameEn: "Cathedral of St. Anastasia", lon: 15.2269, lat: 44.1150, kind: "landmark" },
  ],
  pula: [
    { nameZh: "普拉竞技场", nameEn: "Pula Arena", lon: 13.8500, lat: 44.8733, kind: "landmark" },
    { nameZh: "奥古斯都神庙", nameEn: "Temple of Augustus", lon: 13.8478, lat: 44.8686, kind: "landmark" },
    { nameZh: "金门", nameEn: "Golden Gate (Arch of the Sergii)", lon: 13.8467, lat: 44.8672, kind: "landmark" },
  ],
  osijek: [
    { nameZh: "特维尔扎堡垒老城区", nameEn: "Tvrđa Old Fortress District", lon: 18.6947, lat: 45.5583, kind: "district" },
    { nameZh: "圣彼得圣保罗座堂", nameEn: "Co-Cathedral of Sts. Peter and Paul", lon: 18.6875, lat: 45.5556, kind: "landmark" },
    { nameZh: "德拉瓦河滨步道", nameEn: "Drava Riverside Promenade", lon: 18.6900, lat: 45.5589, kind: "nature" },
  ],
  "hvar-town": [
    { nameZh: "福尔蒂察堡垒", nameEn: "Fortica Fortress", lon: 16.4419, lat: 43.1744, kind: "landmark" },
    { nameZh: "圣斯特凡广场与主教座堂", nameEn: "St. Stephen's Square & Cathedral", lon: 16.4419, lat: 43.1722, kind: "landmark" },
    { nameZh: "斯塔里格拉德平原", nameEn: "Stari Grad Plain", lon: 16.5972, lat: 43.1878, kind: "nature" },
    { nameZh: "帕克莱尼岛群", nameEn: "Pakleni Islands", lon: 16.4053, lat: 43.1667, kind: "nature" },
  ],
  sibenik: [
    { nameZh: "圣雅各布主教座堂", nameEn: "Cathedral of St James", lon: 15.8891, lat: 43.7357, kind: "landmark" },
    { nameZh: "圣米迦勒要塞", nameEn: "St Michael's Fortress", lon: 15.8896, lat: 43.7376, kind: "landmark" },
    { nameZh: "巴罗内要塞", nameEn: "Barone Fortress", lon: 15.8964, lat: 43.7373, kind: "landmark" },
    { nameZh: "圣约翰要塞", nameEn: "St John's Fortress", lon: 15.8940, lat: 43.7408, kind: "landmark" },
    { nameZh: "圣尼古拉要塞", nameEn: "St Nicholas Fortress", lon: 15.8547, lat: 43.7214, kind: "landmark" },
    { nameZh: "大公宫（市博物馆）", nameEn: "Rector's Palace (City Museum)", lon: 15.8892, lat: 43.7352, kind: "landmark" },
    { nameZh: "斯克拉丁瀑布", nameEn: "Skradinski buk", lon: 15.9640, lat: 43.8051, kind: "nature" },
  ],
  porec: [
    { nameZh: "尤弗拉西苏斯圣殿", nameEn: "Euphrasian Basilica", lon: 13.5933, lat: 45.2286, kind: "landmark" },
    { nameZh: "马拉福尔广场", nameEn: "Marafor Square", lon: 13.5909, lat: 45.2282, kind: "landmark" },
    { nameZh: "五角塔", nameEn: "Pentagonal Tower", lon: 13.5946, lat: 45.2276, kind: "landmark" },
    { nameZh: "波雷奇地方博物馆", nameEn: "Poreč Heritage Museum", lon: 13.5933, lat: 45.2278, kind: "landmark" },
    { nameZh: "圣尼古拉岛", nameEn: "Sveti Nikola Island", lon: 13.5838, lat: 45.2250, kind: "nature" },
    { nameZh: "巴雷迪内溶洞", nameEn: "Baredine Cave", lon: 13.6619, lat: 45.2703, kind: "nature" },
  ],
};
