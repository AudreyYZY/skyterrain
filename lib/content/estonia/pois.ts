import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ===== 欧洲 / 爱沙尼亚 =====（维基 / 爱沙尼亚语维基坐标；维基无坐标的取 OpenStreetMap Nominatim）
  tallinn: [
    { nameZh: "市政厅广场", nameEn: "Town Hall Square", lon: 24.7455, lat: 59.4371, kind: "landmark" },
    { nameZh: "图姆皮亚城堡", nameEn: "Toompea Castle", lon: 24.7372, lat: 59.4356, kind: "landmark" },
    { nameZh: "卡德里奥格宫", nameEn: "Kadriorg Palace", lon: 24.7908, lat: 59.4385, kind: "landmark" },
    { nameZh: "水上飞机港博物馆", nameEn: "Seaplane Harbour", lon: 24.7383, lat: 59.4504, kind: "landmark" },
    { nameZh: "皮里塔", nameEn: "Pirita", lon: 24.8328, lat: 59.4669, kind: "landmark" },
  ],
  tartu: [
    { nameZh: "塔尔图市政厅", nameEn: "Tartu Town Hall", lon: 26.7217, lat: 58.3800, kind: "landmark" },
    { nameZh: "塔尔图大学主楼", nameEn: "University of Tartu Main Building", lon: 26.7200, lat: 58.3811, kind: "landmark" },
    { nameZh: "塔尔图老天文台", nameEn: "Tartu Old Observatory", lon: 26.7201, lat: 58.3788, kind: "landmark" },
    { nameZh: "爱沙尼亚国家博物馆", nameEn: "Estonian National Museum", lon: 26.7456, lat: 58.3956, kind: "landmark" },
    { nameZh: "圣约翰教堂", nameEn: "St John's Church", lon: 26.7202, lat: 58.3827, kind: "landmark" },
  ],
  parnu: [
    { nameZh: "派尔努海滩", nameEn: "Pärnu Beach", lon: 24.4953, lat: 58.3742, kind: "landmark" },
    { nameZh: "红塔", nameEn: "Red Tower", lon: 24.5028, lat: 58.3850, kind: "landmark" },
    { nameZh: "塔林门", nameEn: "Tallinn Gate", lon: 24.4948, lat: 58.3836, kind: "landmark" },
    { nameZh: "泥疗浴场", nameEn: "Pärnu Mud Baths", lon: 24.4960, lat: 58.3758, kind: "landmark" },
    { nameZh: "派尔努河口防波堤", nameEn: "Pärnu Pier", lon: 24.4724, lat: 58.3718, kind: "landmark" },
  ],
  kuressaare: [
    { nameZh: "库雷萨雷主教城堡", nameEn: "Kuressaare Episcopal Castle", lon: 22.4793, lat: 58.2469, kind: "landmark" },
    { nameZh: "卡利陨石坑", nameEn: "Kaali Crater", lon: 22.6694, lat: 58.3728, kind: "landmark" },
    { nameZh: "潘加陡崖", nameEn: "Panga Cliff", lon: 22.2880, lat: 58.5702, kind: "landmark" },
    { nameZh: "安加拉风车群", nameEn: "Angla Windmills", lon: 22.7003, lat: 58.5267, kind: "landmark" },
  ],
  haapsalu: [
    { nameZh: "哈普萨卢主教城堡", nameEn: "Haapsalu Episcopal Castle", lon: 23.5386, lat: 58.9472, kind: "landmark" },
    { nameZh: "休闲会馆", nameEn: "Haapsalu Kuursaal", lon: 23.5376, lat: 58.9504, kind: "landmark" },
    { nameZh: "旧火车站（铁路博物馆）", nameEn: "Old Railway Station (Railway Museum)", lon: 23.5322, lat: 58.9381, kind: "landmark" },
  ],
  viljandi: [
    { nameZh: "骑士团城堡遗址", nameEn: "Viljandi Order Castle ruins", lon: 25.5950, lat: 58.3592, kind: "landmark" },
    { nameZh: "传统音乐中心", nameEn: "Estonian Traditional Music Centre", lon: 25.5961, lat: 58.3611, kind: "landmark" },
    { nameZh: "维尔扬迪湖", nameEn: "Lake Viljandi", lon: 25.5931, lat: 58.3500, kind: "landmark" },
  ],
  rakvere: [
    { nameZh: "拉克韦雷城堡", nameEn: "Rakvere Castle", lon: 26.3522, lat: 59.3478, kind: "landmark" },
    { nameZh: "原牛雕像", nameEn: "Aurochs statue", lon: 26.3506, lat: 59.3492, kind: "landmark" },
  ],
  otepaa: [
    { nameZh: "泰赫万迪体育中心", nameEn: "Tehvandi Sports Centre", lon: 26.5092, lat: 58.0508, kind: "landmark" },
    { nameZh: "普哈湖", nameEn: "Lake Pühajärv", lon: 26.4500, lat: 58.0333, kind: "landmark" },
    { nameZh: "奥泰佩城堡山", nameEn: "Otepää Castle Hill", lon: 26.5041, lat: 58.0575, kind: "landmark" },
  ],
  kardla: [
    { nameZh: "凯尔德拉港", nameEn: "Kärdla harbour", lon: 22.7529, lat: 59.0091, kind: "landmark" },
    { nameZh: "凯尔德拉教堂", nameEn: "Kärdla church", lon: 22.7524, lat: 59.0028, kind: "landmark" },
    { nameZh: "塔赫库纳灯塔", nameEn: "Tahkuna lighthouse", lon: 22.5862, lat: 59.0914, kind: "landmark" },
    { nameZh: "科普灯塔", nameEn: "Kõpu lighthouse", lon: 22.1997, lat: 58.916, kind: "landmark" },
  ],
  voru: [
    { nameZh: "中心广场与凯瑟琳教堂", nameEn: "Central square and St Catherine's Church", lon: 26.9951, lat: 57.8485, kind: "landmark" },
    { nameZh: "克洛伊茨瓦尔德纪念馆", nameEn: "Kreutzwald Memorial Museum", lon: 26.9983, lat: 57.8443, kind: "landmark" },
    { nameZh: "塔穆拉湖", nameEn: "Lake Tamula", lon: 26.9837, lat: 57.8396, kind: "landmark" },
    { nameZh: "沃鲁县博物馆", nameEn: "Võru County Museum", lon: 26.9921, lat: 57.846, kind: "landmark" },
  ],
  toila: [
    { nameZh: "奥鲁公园", nameEn: "Oru Park", lon: 27.5272, lat: 59.4219, kind: "nature" },
    { nameZh: "托伊拉港（小艇码头）", nameEn: "Toila marina", lon: 27.5333, lat: 59.4268, kind: "district" },
    { nameZh: "瓦拉斯泰瀑布", nameEn: "Valaste Waterfall", lon: 27.3351, lat: 59.4438, kind: "nature" },
    { nameZh: "翁蒂卡陡崖", nameEn: "Ontika klint", lon: 27.3023, lat: 59.4429, kind: "nature" },
  ],
  vosu: [
    { nameZh: "沃苏海滩", nameEn: "Võsu beach", lon: 25.9655, lat: 59.581, kind: "nature" },
    { nameZh: "凯斯穆（船长村）", nameEn: "Käsmu", lon: 25.8967, lat: 59.6035, kind: "district" },
    { nameZh: "凯斯穆漂砾群", nameEn: "Käsmu boulder field", lon: 25.9084, lat: 59.609, kind: "nature" },
    { nameZh: "帕尔姆塞庄园（国家公园访客中心）", nameEn: "Palmse Manor (park visitor centre)", lon: 25.9562, lat: 59.5128, kind: "landmark" },
    { nameZh: "萨加迪庄园与森林博物馆", nameEn: "Sagadi Manor and Forest Museum", lon: 26.0837, lat: 59.5378, kind: "landmark" },
    { nameZh: "阿尔特亚渔村", nameEn: "Altja fishing village", lon: 26.1097, lat: 59.5797, kind: "district" },
  ],
};
