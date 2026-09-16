import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  auckland: [
    { nameZh: "天空塔", nameEn: "Sky Tower", lon: 174.762, lat: -36.848, kind: "landmark" },
    { nameZh: "伊甸山（Maungawhau）", nameEn: "Maungawhau / Mt Eden", lon: 174.764, lat: -36.877, kind: "nature" },
    { nameZh: "独树山（Maungakiekie）", nameEn: "Maungakiekie / One Tree Hill", lon: 174.783, lat: -36.900, kind: "nature" },
    { nameZh: "奥克兰博物馆", nameEn: "Auckland War Memorial Museum", lon: 174.778, lat: -36.860, kind: "landmark" },
    { nameZh: "高架桥海港区", nameEn: "Viaduct Harbour", lon: 174.762, lat: -36.843, kind: "district" },
    { nameZh: "德文波特", nameEn: "Devonport", lon: 174.796, lat: -36.829, kind: "district" },
    { nameZh: "怀希基岛", nameEn: "Waiheke Island", lon: 175.090, lat: -36.800, kind: "nature" },
    { nameZh: "皮哈海滩", nameEn: "Piha Beach", lon: 174.468, lat: -36.955, kind: "nature" },
  ],

  wellington: [
    { nameZh: "蒂帕帕国家博物馆", nameEn: "Te Papa", lon: 174.782, lat: -41.290, kind: "landmark" },
    { nameZh: "缆车", nameEn: "Cable Car", lon: 174.777, lat: -41.283, kind: "transport" },
    { nameZh: "植物园", nameEn: "Botanic Garden", lon: 174.767, lat: -41.281, kind: "nature" },
    { nameZh: "Zealandia 生态保护区", nameEn: "Zealandia", lon: 174.752, lat: -41.290, kind: "nature" },
    { nameZh: "古巴街", nameEn: "Cuba Street", lon: 174.775, lat: -41.294, kind: "district" },
    { nameZh: "国会（蜂巢）", nameEn: "Parliament (the Beehive)", lon: 174.777, lat: -41.278, kind: "landmark" },
    { nameZh: "维多利亚山", nameEn: "Mount Victoria", lon: 174.794, lat: -41.297, kind: "nature" },
  ],

  rotorua: [
    { nameZh: "政府花园", nameEn: "Government Gardens", lon: 176.256, lat: -38.136, kind: "nature" },
    { nameZh: "库伊劳公园", nameEn: "Kuirau Park", lon: 176.240, lat: -38.132, kind: "nature" },
    { nameZh: "怀奥塔普地热区", nameEn: "Wai-O-Tapu", lon: 176.366, lat: -38.357, kind: "nature" },
    { nameZh: "蒂普亚（Te Puia）", nameEn: "Te Puia", lon: 176.252, lat: -38.163, kind: "landmark" },
    { nameZh: "红木森林", nameEn: "The Redwoods (Whakarewarewa Forest)", lon: 176.283, lat: -38.157, kind: "nature" },
    { nameZh: "波利尼西亚温泉", nameEn: "Polynesian Spa", lon: 176.257, lat: -38.138, kind: "landmark" },
    { nameZh: "蓝湖", nameEn: "Blue Lake (Tikitapu)", lon: 176.340, lat: -38.190, kind: "nature" },
  ],

  christchurch: [
    { nameZh: "大教堂广场", nameEn: "Cathedral Square", lon: 172.637, lat: -43.531, kind: "landmark" },
    { nameZh: "植物园 · 海格利公园", nameEn: "Botanic Gardens · Hagley Park", lon: 172.625, lat: -43.531, kind: "nature" },
    { nameZh: "纸板教堂", nameEn: "Cardboard Cathedral", lon: 172.645, lat: -43.532, kind: "landmark" },
    { nameZh: "坎特伯雷博物馆", nameEn: "Canterbury Museum", lon: 172.628, lat: -43.531, kind: "landmark" },
    { nameZh: "港丘缆车", nameEn: "Christchurch Gondola (Port Hills)", lon: 172.700, lat: -43.581, kind: "nature" },
    { nameZh: "国际南极中心", nameEn: "International Antarctic Centre", lon: 172.541, lat: -43.492, kind: "landmark" },
    { nameZh: "阿卡罗阿", nameEn: "Akaroa", lon: 172.966, lat: -43.804, kind: "district" },
  ],

  queenstown: [
    { nameZh: "天际缆车", nameEn: "Skyline Gondola", lon: 168.657, lat: -45.028, kind: "nature" },
    { nameZh: "瓦卡蒂普湖滨", nameEn: "Lake Wakatipu waterfront", lon: 168.661, lat: -45.033, kind: "nature" },
    { nameZh: "TSS 厄恩斯劳号", nameEn: "TSS Earnslaw", lon: 168.663, lat: -45.031, kind: "landmark" },
    { nameZh: "箭镇", nameEn: "Arrowtown", lon: 168.834, lat: -44.943, kind: "district" },
    { nameZh: "卓越山滑雪场", nameEn: "The Remarkables ski field", lon: 168.813, lat: -45.058, kind: "nature" },
    { nameZh: "格林诺奇", nameEn: "Glenorchy", lon: 168.383, lat: -44.847, kind: "nature" },
    { nameZh: "瓦纳卡", nameEn: "Wānaka", lon: 169.153, lat: -44.700, kind: "nature" },
  ],

  dunedin: [
    { nameZh: "八角广场", nameEn: "The Octagon", lon: 170.503, lat: -45.874, kind: "district" },
    { nameZh: "达尼丁火车站", nameEn: "Dunedin Railway Station", lon: 170.508, lat: -45.874, kind: "landmark" },
    { nameZh: "奥塔哥博物馆", nameEn: "Otago Museum", lon: 170.510, lat: -45.865, kind: "landmark" },
    { nameZh: "泰亚罗阿角（信天翁中心）", nameEn: "Taiaroa Head (Royal Albatross Centre)", lon: 170.727, lat: -45.775, kind: "nature" },
    { nameZh: "拉纳克城堡", nameEn: "Larnach Castle", lon: 170.669, lat: -45.850, kind: "landmark" },
    { nameZh: "鲍德温街", nameEn: "Baldwin Street", lon: 170.535, lat: -45.851, kind: "landmark" },
    { nameZh: "摩拉基大圆石", nameEn: "Moeraki Boulders", lon: 170.826, lat: -45.346, kind: "nature" },
  ],

  // ── 新西兰 批2（2026-09-05）──
  napier: [
    { nameZh: "海滨大道与帕尼亚雕像", nameEn: "Marine Parade & Pania of the Reef", lon: 176.9200, lat: -39.4880, kind: "landmark" },
    { nameZh: "装饰艺术区（艾默生街）", nameEn: "Art Deco Quarter (Emerson Street)", lon: 176.9160, lat: -39.4920, kind: "district" },
    { nameZh: "布拉夫山观景台", nameEn: "Bluff Hill Lookout", lon: 176.9240, lat: -39.4790, kind: "nature" },
    { nameZh: "绑架者角塘鹅栖息地", nameEn: "Cape Kidnappers Gannet Colony", lon: 177.0960, lat: -39.6440, kind: "nature" },
    { nameZh: "特马塔峰", nameEn: "Te Mata Peak", lon: 176.8950, lat: -39.6660, kind: "nature" },
  ],
  taupo: [
    { nameZh: "胡卡瀑布", nameEn: "Huka Falls", lon: 176.0890, lat: -38.6490, kind: "nature" },
    { nameZh: "陶波湖滨", nameEn: "Lake Taupō Waterfront", lon: 176.0680, lat: -38.6900, kind: "nature" },
    { nameZh: "月亮火山口", nameEn: "Craters of the Moon", lon: 176.0710, lat: -38.6480, kind: "nature" },
    { nameZh: "湖畔毛利岩雕（船游）", nameEn: "Māori Rock Carvings, Mine Bay", lon: 175.9900, lat: -38.7300, kind: "landmark" },
    { nameZh: "汤加里罗国家公园", nameEn: "Tongariro National Park", lon: 175.5800, lat: -39.2000, kind: "nature" },
  ],
  tauranga: [
    { nameZh: "芒格努伊山（毛奥）", nameEn: "Mount Maunganui (Mauao)", lon: 176.1740, lat: -37.6320, kind: "nature" },
    { nameZh: "芒格努伊山主海滩", nameEn: "Mount Maunganui Main Beach", lon: 176.1800, lat: -37.6360, kind: "nature" },
    { nameZh: "陶朗加海滨（斯特兰德）", nameEn: "Tauranga Waterfront (The Strand)", lon: 176.1690, lat: -37.6830, kind: "district" },
    { nameZh: "盖特帕战场遗址", nameEn: "Gate Pā Historic Reserve", lon: 176.1380, lat: -37.7130, kind: "landmark" },
    { nameZh: "麦克拉伦瀑布公园", nameEn: "McLaren Falls Park", lon: 176.0450, lat: -37.7900, kind: "nature" },
  ],
  nelson: [
    { nameZh: "基督教堂主教座堂", nameEn: "Christ Church Cathedral", lon: 173.2830, lat: -41.2750, kind: "landmark" },
    { nameZh: "新西兰中心标志（植物园山）", nameEn: "Centre of New Zealand (Botanical Hill)", lon: 173.2980, lat: -41.2720, kind: "nature" },
    { nameZh: "塔胡纳努伊海滩", nameEn: "Tahunanui Beach", lon: 173.2420, lat: -41.2830, kind: "nature" },
    { nameZh: "阿贝尔·塔斯曼国家公园（马拉豪）", nameEn: "Abel Tasman National Park (Marahau)", lon: 173.0100, lat: -40.9900, kind: "nature" },
    { nameZh: "尼尔森周六市集", nameEn: "Nelson Saturday Market", lon: 173.2820, lat: -41.2720, kind: "district" },
  ],
  kaikoura: [
    { nameZh: "凯库拉半岛步道", nameEn: "Kaikōura Peninsula Walkway", lon: 173.7200, lat: -42.4230, kind: "nature" },
    { nameZh: "观鲸出发码头（南湾）", nameEn: "Whale Watch Departure (South Bay)", lon: 173.6900, lat: -42.4200, kind: "transport" },
    { nameZh: "海豹栖息地（角点）", nameEn: "Point Kean Seal Colony", lon: 173.7300, lat: -42.4180, kind: "nature" },
    { nameZh: "凯库拉火车站（太平洋海岸列车）", nameEn: "Kaikōura Station (Coastal Pacific)", lon: 173.6810, lat: -42.3990, kind: "transport" },
    { nameZh: "奥豪角海豹区", nameEn: "Ōhau Point", lon: 173.8800, lat: -42.2500, kind: "nature" },
  ],
  wanaka: [
    { nameZh: "瓦纳卡湖滨与“瓦纳卡树”", nameEn: "Lake Wānaka & That Wānaka Tree", lon: 169.1200, lat: -44.6970, kind: "nature" },
    { nameZh: "罗伊峰步道", nameEn: "Roys Peak Track", lon: 169.0500, lat: -44.6900, kind: "nature" },
    { nameZh: "奥斯派灵山国家公园（罗布罗伊冰川）", nameEn: "Mount Aspiring NP (Rob Roy Glacier)", lon: 168.7200, lat: -44.4800, kind: "nature" },
    { nameZh: "卡德罗纳滑雪场", nameEn: "Cardrona Alpine Resort", lon: 168.9400, lat: -44.8700, kind: "nature" },
    { nameZh: "瓦纳卡镇中心", nameEn: "Wānaka Town Centre", lon: 169.1400, lat: -44.6990, kind: "district" },
  ],
  "new-plymouth": [
    { nameZh: "塔拉纳基山", nameEn: "Taranaki Maunga", lon: 174.063803, lat: -39.296216, kind: "nature" },
    { nameZh: "北埃格蒙特访客中心", nameEn: "North Egmont Visitor Centre", lon: 174.09595, lat: -39.2703, kind: "landmark" },
    { nameZh: "恩加莫图 / 糖塔群岛", nameEn: "Ngā Motu / Sugar Loaf Islands", lon: 174.013551, lat: -39.053479, kind: "nature" },
    { nameZh: "帕里图图岩", nameEn: "Paritutu", lon: 174.023389, lat: -39.059528, kind: "nature" },
    { nameZh: "普克库拉公园", nameEn: "Pukekura Park", lon: 174.07974, lat: -39.06483, kind: "nature" },
    { nameZh: "普凯阿里基博物馆", nameEn: "Puke Ariki", lon: 174.07189, lat: -39.05702, kind: "landmark" },
    { nameZh: "特雷瓦雷瓦桥", nameEn: "Te Rewa Rewa Bridge", lon: 174.11228, lat: -39.03778, kind: "landmark" },
  ],
  "te-anau": [
    { nameZh: "蒂阿瑙湖", nameEn: "Lake Te Anau", lon: 167.773155, lat: -45.219681, kind: "nature" },
    { nameZh: "蒂阿瑙萤火虫洞", nameEn: "Te Ana-au Glow-Worm Caves", lon: 167.72644, lat: -45.2945, kind: "nature" },
    { nameZh: "凯普勒步道", nameEn: "Kepler Track", lon: 167.68619, lat: -45.42344, kind: "nature" },
    { nameZh: "蒂阿瑙鸟类保护区", nameEn: "Punanga Manu o Te Anau", lon: 167.71334, lat: -45.43265, kind: "nature" },
    { nameZh: "马纳波里", nameEn: "Manapouri", lon: 167.6134, lat: -45.56515, kind: "district" },
    { nameZh: "米尔福德峡湾", nameEn: "Milford Sound / Piopiotahi", lon: 167.89717, lat: -44.640893, kind: "nature" },
  ],
};
