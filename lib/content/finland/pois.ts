import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 芬兰 ──
  helsinki: [
    { nameZh: "元老院广场与赫尔辛基大教堂", nameEn: "Senate Square & Helsinki Cathedral", lon: 24.9522, lat: 60.1699, kind: "landmark" },
    { nameZh: "岩石教堂", nameEn: "Rock Church (Temppeliaukio)", lon: 24.9256, lat: 60.1733, kind: "landmark" },
    { nameZh: "苏欧曼林纳海防要塞", nameEn: "Suomenlinna", lon: 24.9880, lat: 60.1454, kind: "landmark" },
    { nameZh: "市场广场", nameEn: "Market Square (Kauppatori)", lon: 24.9528, lat: 60.1675, kind: "district" },
  ],
  turku: [
    { nameZh: "图尔库城堡", nameEn: "Turku Castle", lon: 22.2467, lat: 60.4356, kind: "landmark" },
    { nameZh: "图尔库大教堂", nameEn: "Turku Cathedral", lon: 22.2764, lat: 60.4522, kind: "landmark" },
    { nameZh: "奥拉河畔历史船只博物馆", nameEn: "Forum Marinum Ship Museums", lon: 22.2372, lat: 60.4361, kind: "landmark" },
  ],
  mariehamn: [
    { nameZh: "奥兰海事博物馆", nameEn: "Åland Maritime Museum", lon: 19.9394, lat: 60.0958, kind: "landmark" },
    { nameZh: "西港游艇码头", nameEn: "West Harbour", lon: 19.9269, lat: 60.0967, kind: "district" },
    { nameZh: "奥兰博物馆", nameEn: "Åland Museum", lon: 19.9394, lat: 60.0983, kind: "landmark" },
  ],
  tampere: [
    { nameZh: "坦梅尔科斯基急流", nameEn: "Tammerkoski Rapids", lon: 23.7658, lat: 61.4983, kind: "nature" },
    { nameZh: "芬拉伊松工厂区", nameEn: "Finlayson District", lon: 23.7594, lat: 61.4989, kind: "district" },
    { nameZh: "坦佩雷大教堂", nameEn: "Tampere Cathedral", lon: 23.7736, lat: 61.4986, kind: "landmark" },
  ],
  jyvaskyla: [
    { nameZh: "阿尔瓦·阿尔托博物馆", nameEn: "Alvar Aalto Museum", lon: 25.7369, lat: 62.2394, kind: "landmark" },
    { nameZh: "派耶内湖畔", nameEn: "Lake Päijänne Shore", lon: 25.7550, lat: 62.2350, kind: "nature" },
    { nameZh: "中央芬兰博物馆", nameEn: "Central Finland Museum", lon: 25.7411, lat: 62.2411, kind: "landmark" },
  ],
  savonlinna: [
    { nameZh: "奥拉维林纳城堡", nameEn: "Olavinlinna Castle", lon: 28.8867, lat: 61.8600, kind: "landmark" },
  ],
  kuopio: [
    { nameZh: "普宜奥山观景塔", nameEn: "Puijo Tower", lon: 27.6539, lat: 62.9214, kind: "nature" },
    { nameZh: "库奥皮奥市集广场", nameEn: "Kuopio Market Square", lon: 27.6783, lat: 62.8925, kind: "district" },
    { nameZh: "东正教博物馆", nameEn: "Orthodox Church Museum", lon: 27.6822, lat: 62.8925, kind: "landmark" },
  ],
  oulu: [
    { nameZh: "奥卢市场广场与老海关仓库", nameEn: "Oulu Market Square & Customs Warehouses", lon: 25.4675, lat: 65.0122, kind: "district" },
    { nameZh: "奥卢大教堂", nameEn: "Oulu Cathedral", lon: 25.4694, lat: 65.0128, kind: "landmark" },
  ],
  rovaniemi: [
    { nameZh: "圣诞老人村", nameEn: "Santa Claus Village", lon: 25.8472, lat: 66.5433, kind: "landmark" },
    { nameZh: "阿克提库姆北极博物馆", nameEn: "Arktikum", lon: 25.7269, lat: 66.5033, kind: "landmark" },
  ],
  kuusamo: [
    { nameZh: "基乌塔科斯基急流（奥兰卡国家公园）", nameEn: "Kiutaköngäs Rapids (Oulanka NP)", lon: 29.3167, lat: 66.3667, kind: "nature" },
    { nameZh: "鲁卡滑雪度假区", nameEn: "Ruka Ski Resort", lon: 29.1500, lat: 66.1667, kind: "landmark" },
  ],
  inari: [
    { nameZh: "西伊达萨米博物馆", nameEn: "Siida Sámi Museum", lon: 27.0264, lat: 68.9061, kind: "landmark" },
    { nameZh: "伊纳里湖畔", nameEn: "Lake Inari Shore", lon: 27.0300, lat: 68.9100, kind: "nature" },
  ],
  rauma: [
    { nameZh: "老劳马", nameEn: "Old Rauma", lon: 21.5132, lat: 61.128, kind: "landmark" },
    { nameZh: "圣十字教堂", nameEn: "Church of the Holy Cross", lon: 21.5122, lat: 61.1296, kind: "landmark" },
    { nameZh: "老市政厅（劳马博物馆）", nameEn: "Old Town Hall (Rauma Museum)", lon: 21.5112, lat: 61.1279, kind: "landmark" },
    { nameZh: "马雷拉船东宅博物馆", nameEn: "Marela Shipowner's House", lon: 21.5151, lat: 61.128, kind: "landmark" },
    { nameZh: "萨马拉赫登迈基青铜时代墓葬群", nameEn: "Sammallahdenmäki Bronze Age Burial Site", lon: 21.7752, lat: 61.1177, kind: "landmark" },
    { nameZh: "凯尔米皮赫拉亚灯塔", nameEn: "Kylmäpihlaja lighthouse", lon: 21.3028, lat: 61.1446, kind: "nature" },
  ],
  vaasa: [
    { nameZh: "集市广场", nameEn: "Market Square", lon: 21.6158, lat: 63.0958, kind: "landmark" },
    { nameZh: "瓦萨教堂", nameEn: "Vaasa Church", lon: 21.6101, lat: 63.0947, kind: "landmark" },
    { nameZh: "博滕博物馆与克瓦尔肯自然中心", nameEn: "Ostrobothnian Museum and Terranova", lon: 21.6019, lat: 63.0996, kind: "landmark" },
    { nameZh: "昆奇现代艺术博物馆", nameEn: "Kuntsi Museum of Modern Art", lon: 21.6003, lat: 63.0964, kind: "landmark" },
    { nameZh: "旧瓦萨", nameEn: "Old Vaasa", lon: 21.7228, lat: 63.0734, kind: "landmark" },
    { nameZh: "雷普洛特桥", nameEn: "Replot Bridge", lon: 21.4727, lat: 63.2067, kind: "nature" },
  ],
};
