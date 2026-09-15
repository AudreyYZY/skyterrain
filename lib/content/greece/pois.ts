import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 希腊 ──
  athens: [
    { nameZh: "卫城与帕特农神庙", nameEn: "Acropolis & Parthenon", lon: 23.7264, lat: 37.9715, kind: "landmark" },
    { nameZh: "普拉卡老城区", nameEn: "Plaka", lon: 23.7295, lat: 37.9722, kind: "district" },
    { nameZh: "宪法广场", nameEn: "Syntagma Square", lon: 23.7346, lat: 37.9756, kind: "landmark" },
    { nameZh: "国家考古博物馆", nameEn: "National Archaeological Museum", lon: 23.7324, lat: 37.9893, kind: "landmark" },
    { nameZh: "比雷埃夫斯港", nameEn: "Piraeus Port", lon: 23.6478, lat: 37.9475, kind: "transport" },
  ],
  thessaloniki: [
    { nameZh: "白塔", nameEn: "White Tower", lon: 22.9497, lat: 40.6263, kind: "landmark" },
    { nameZh: "伽拉里乌斯拱门", nameEn: "Arch of Galerius", lon: 22.9508, lat: 40.6314, kind: "landmark" },
    { nameZh: "罗通达", nameEn: "Rotunda", lon: 22.9494, lat: 40.6328, kind: "landmark" },
    { nameZh: "亚里士多德广场", nameEn: "Aristotelous Square", lon: 22.9425, lat: 40.6335, kind: "landmark" },
    { nameZh: "上城（阿诺波利）", nameEn: "Ano Poli (Upper Town)", lon: 22.9508, lat: 40.6425, kind: "district" },
  ],
  heraklion: [
    { nameZh: "克诺索斯米诺斯王宫遗址", nameEn: "Palace of Knossos", lon: 25.1633, lat: 35.2977, kind: "landmark" },
    { nameZh: "威尼斯港与科尔斯要塞", nameEn: "Venetian Harbour & Koules Fortress", lon: 25.1408, lat: 35.3453, kind: "landmark" },
    { nameZh: "伊拉克利翁考古博物馆", nameEn: "Heraklion Archaeological Museum", lon: 25.1447, lat: 35.3400, kind: "landmark" },
    { nameZh: "1866大街市场", nameEn: "1866 Street Market", lon: 25.1408, lat: 35.3400, kind: "district" },
  ],
  chania: [
    { nameZh: "威尼斯老港", nameEn: "Venetian Harbour", lon: 24.0181, lat: 35.5169, kind: "landmark" },
    { nameZh: "哈尼亚灯塔", nameEn: "Chania Lighthouse", lon: 24.0225, lat: 35.5197, kind: "landmark" },
    { nameZh: "哈尼亚中央市场", nameEn: "Chania Central Market", lon: 24.0203, lat: 35.5142, kind: "landmark" },
    { nameZh: "萨马利亚峡谷入口", nameEn: "Samaria Gorge Entrance", lon: 23.9214, lat: 35.3164, kind: "nature" },
  ],
  "rhodes-town": [
    { nameZh: "大团长宫殿", nameEn: "Palace of the Grand Master", lon: 28.2264, lat: 36.4436, kind: "landmark" },
    { nameZh: "骑士团大街", nameEn: "Street of the Knights", lon: 28.2277, lat: 36.4431, kind: "landmark" },
    { nameZh: "曼德拉基港", nameEn: "Mandraki Harbour", lon: 28.2298, lat: 36.4483, kind: "landmark" },
    { nameZh: "林多斯卫城", nameEn: "Acropolis of Lindos", lon: 28.0867, lat: 36.0917, kind: "landmark" },
  ],
  santorini: [
    { nameZh: "伊亚", nameEn: "Oia", lon: 25.3753, lat: 36.4611, kind: "district" },
    { nameZh: "阿克罗蒂里青铜时代遗址", nameEn: "Akrotiri Archaeological Site", lon: 25.4030, lat: 36.3517, kind: "landmark" },
    { nameZh: "红沙滩", nameEn: "Red Beach", lon: 25.3961, lat: 36.3494, kind: "nature" },
    { nameZh: "内亚卡梅尼火山岛", nameEn: "Nea Kameni", lon: 25.3967, lat: 36.4028, kind: "nature" },
  ],
  "corfu-town": [
    { nameZh: "旧堡垒", nameEn: "Old Fortress", lon: 19.9258, lat: 39.6247, kind: "landmark" },
    { nameZh: "利斯顿林荫大道", nameEn: "Liston", lon: 19.9214, lat: 39.6255, kind: "landmark" },
    { nameZh: "斯皮亚纳达广场", nameEn: "Spianada Square", lon: 19.9219, lat: 39.6248, kind: "landmark" },
    { nameZh: "阿基利翁宫", nameEn: "Achilleion Palace", lon: 19.9219, lat: 39.5892, kind: "landmark" },
  ],
  nafplio: [
    { nameZh: "帕拉米迪要塞", nameEn: "Palamidi Fortress", lon: 22.8139, lat: 37.5661, kind: "landmark" },
    { nameZh: "布尔齐堡垒", nameEn: "Bourtzi Fortress", lon: 22.7969, lat: 37.5714, kind: "landmark" },
    { nameZh: "宪法广场", nameEn: "Syntagma Square", lon: 22.7967, lat: 37.5672, kind: "landmark" },
    { nameZh: "迈锡尼考古遗址", nameEn: "Archaeological Site of Mycenae", lon: 22.7553, lat: 37.7306, kind: "landmark" },
  ],
  ioannina: [
    { nameZh: "约阿尼纳城堡", nameEn: "Ioannina Castle", lon: 20.8514, lat: 39.6647, kind: "landmark" },
    { nameZh: "阿斯兰帕夏清真寺", nameEn: "Aslan Pasha Mosque", lon: 20.8508, lat: 39.6656, kind: "landmark" },
    { nameZh: "帕姆沃蒂斯湖心岛", nameEn: "Lake Pamvotis Island", lon: 20.8419, lat: 39.6725, kind: "nature" },
    { nameZh: "维科斯峡谷", nameEn: "Vikos Gorge", lon: 20.7597, lat: 39.9711, kind: "nature" },
  ],
  kalamata: [
    { nameZh: "卡拉马塔城堡", nameEn: "Kalamata Castle", lon: 22.1119, lat: 37.0417, kind: "landmark" },
    { nameZh: "滨海大道", nameEn: "Waterfront Promenade", lon: 22.1150, lat: 37.0333, kind: "district" },
    { nameZh: "考古与拜占庭博物馆", nameEn: "Archaeological & Byzantine Museum", lon: 22.1128, lat: 37.0394, kind: "landmark" },
    { nameZh: "迪罗斯洞穴", nameEn: "Diros Caves", lon: 22.3667, lat: 36.6333, kind: "nature" },
  ],
  volos: [
    { nameZh: "滨海大道", nameEn: "Waterfront Promenade", lon: 22.9472, lat: 39.3600, kind: "district" },
    { nameZh: "考古博物馆", nameEn: "Archaeological Museum", lon: 22.9494, lat: 39.3661, kind: "landmark" },
    { nameZh: "马克里尼察村", nameEn: "Makrinitsa", lon: 23.0011, lat: 39.4106, kind: "district" },
    { nameZh: "波尔塔里亚村", nameEn: "Portaria", lon: 23.0006, lat: 39.3892, kind: "district" },
  ],
  // ── 希腊 批2（2026-09-05）──
  mykonos: [
    { nameZh: "卡托米利风车", nameEn: "Kato Mili Windmills", lon: 25.3260, lat: 37.4440, kind: "landmark" },
    { nameZh: "小威尼斯", nameEn: "Little Venice", lon: 25.3250, lat: 37.4460, kind: "district" },
    { nameZh: "帕拉波尔蒂亚尼教堂", nameEn: "Panagia Paraportiani", lon: 25.3240, lat: 37.4480, kind: "landmark" },
    { nameZh: "老港（提洛岛船）", nameEn: "Old Port (Delos boats)", lon: 25.3290, lat: 37.4490, kind: "transport" },
    { nameZh: "提洛岛遗址", nameEn: "Delos", lon: 25.2670, lat: 37.3960, kind: "landmark" },
    { nameZh: "天堂海滩", nameEn: "Paradise Beach", lon: 25.3620, lat: 37.4120, kind: "nature" },
  ],
  naxos: [
    { nameZh: "波尔塔拉（阿波罗神庙门）", nameEn: "Portara", lon: 25.3740, lat: 37.1090, kind: "landmark" },
    { nameZh: "卡斯特罗（威尼斯城堡区）", nameEn: "Kastro", lon: 25.3770, lat: 37.1060, kind: "district" },
    { nameZh: "圣普罗科皮奥斯海滩", nameEn: "Agios Prokopios Beach", lon: 25.3560, lat: 37.0700, kind: "nature" },
    { nameZh: "哈尔基村", nameEn: "Halki", lon: 25.4850, lat: 37.0620, kind: "district" },
    { nameZh: "阿佩兰托斯村", nameEn: "Apeiranthos", lon: 25.5220, lat: 37.0740, kind: "district" },
    { nameZh: "宙斯山", nameEn: "Mount Zas", lon: 25.4990, lat: 37.0350, kind: "nature" },
  ],
  kalabaka: [
    { nameZh: "大迈泰奥拉修道院", nameEn: "Great Meteoron Monastery", lon: 21.6270, lat: 39.7250, kind: "landmark" },
    { nameZh: "瓦尔拉姆修道院", nameEn: "Varlaam Monastery", lon: 21.6300, lat: 39.7220, kind: "landmark" },
    { nameZh: "圣斯特凡诺修道院", nameEn: "St. Stephen's Monastery", lon: 21.6380, lat: 39.7120, kind: "landmark" },
    { nameZh: "卡斯特拉基村", nameEn: "Kastraki", lon: 21.6180, lat: 39.7140, kind: "district" },
    { nameZh: "卡兰巴卡站", nameEn: "Kalambaka Station", lon: 21.6260, lat: 39.7040, kind: "transport" },
  ],
  patras: [
    { nameZh: "圣安德烈主教座堂", nameEn: "St. Andrew's Cathedral", lon: 21.7280, lat: 38.2410, kind: "landmark" },
    { nameZh: "罗马音乐厅", nameEn: "Roman Odeon", lon: 21.7330, lat: 38.2480, kind: "landmark" },
    { nameZh: "帕特雷城堡", nameEn: "Patras Castle", lon: 21.7350, lat: 38.2460, kind: "landmark" },
    { nameZh: "里奥—安蒂里奥大桥", nameEn: "Rio–Antirrio Bridge", lon: 21.7860, lat: 38.3210, kind: "landmark" },
    { nameZh: "阿凯亚克劳斯酒庄", nameEn: "Achaia Clauss Winery", lon: 21.7800, lat: 38.2100, kind: "landmark" },
    { nameZh: "帕特雷港", nameEn: "Port of Patras", lon: 21.7300, lat: 38.2500, kind: "transport" },
  ],
  zakynthos: [
    { nameZh: "索洛莫斯广场", nameEn: "Solomos Square", lon: 20.8990, lat: 37.7860, kind: "district" },
    { nameZh: "圣狄奥尼修斯教堂", nameEn: "Church of St. Dionysios", lon: 20.8990, lat: 37.7790, kind: "landmark" },
    { nameZh: "博哈利城堡", nameEn: "Bochali Castle", lon: 20.8880, lat: 37.7920, kind: "landmark" },
    { nameZh: "纳瓦吉奥沉船湾观景台", nameEn: "Navagio (Shipwreck) Viewpoint", lon: 20.6270, lat: 37.8580, kind: "nature" },
    { nameZh: "拉加纳斯湾（海龟）", nameEn: "Laganas Bay (turtles)", lon: 20.8600, lat: 37.7250, kind: "nature" },
    { nameZh: "蓝洞", nameEn: "Blue Caves", lon: 20.6420, lat: 37.9270, kind: "nature" },
  ],
};
