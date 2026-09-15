import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ===== 欧洲 / 匈牙利 =====
  budapest: [
    { nameZh: "布达城堡（旧王宫）", nameEn: "Buda Castle", lon: 19.0399, lat: 47.4962, kind: "landmark" },
    { nameZh: "马加什教堂", nameEn: "Matthias Church", lon: 19.0345, lat: 47.5020, kind: "landmark" },
    { nameZh: "渔人堡", nameEn: "Fisherman's Bastion", lon: 19.0347, lat: 47.5025, kind: "landmark" },
    { nameZh: "国会大厦", nameEn: "Hungarian Parliament Building", lon: 19.0456, lat: 47.5072, kind: "landmark" },
    { nameZh: "链子桥", nameEn: "Széchenyi Chain Bridge", lon: 19.0435, lat: 47.4987, kind: "landmark" },
    { nameZh: "英雄广场", nameEn: "Heroes' Square", lon: 19.0777, lat: 47.5149, kind: "landmark" },
    { nameZh: "塞切尼温泉浴场", nameEn: "Széchenyi Thermal Bath", lon: 19.0832, lat: 47.5187, kind: "landmark" },
    { nameZh: "盖勒特山", nameEn: "Gellért Hill", lon: 19.0463, lat: 47.4869, kind: "nature" },
    { nameZh: "中央市场", nameEn: "Great Market Hall", lon: 19.0587, lat: 47.4874, kind: "landmark" },
    { nameZh: "玛格丽特岛", nameEn: "Margaret Island", lon: 19.0500, lat: 47.5275, kind: "nature" },
  ],
  debrecen: [
    { nameZh: "归正宗大教堂", nameEn: "Reformed Great Church", lon: 21.6255, lat: 47.5317, kind: "landmark" },
    { nameZh: "科苏特广场", nameEn: "Kossuth Square", lon: 21.6259, lat: 47.5308, kind: "landmark" },
    { nameZh: "大森林公园", nameEn: "Nagyerdő Park", lon: 21.6247, lat: 47.5553, kind: "nature" },
    { nameZh: "德布勒森大学主楼", nameEn: "University of Debrecen", lon: 21.6242, lat: 47.5533, kind: "landmark" },
    { nameZh: "德里博物馆", nameEn: "Déri Museum", lon: 21.6236, lat: 47.5333, kind: "landmark" },
  ],
  szeged: [
    { nameZh: "还愿教堂", nameEn: "Votive Church of Szeged", lon: 20.1499, lat: 46.2531, kind: "landmark" },
    { nameZh: "大教堂广场", nameEn: "Dóm Square", lon: 20.1491, lat: 46.2527, kind: "landmark" },
    { nameZh: "塞格德市政厅", nameEn: "Szeged Town Hall", lon: 20.1477, lat: 46.2536, kind: "landmark" },
    { nameZh: "蒂萨河畔", nameEn: "Tisza Riverside", lon: 20.1533, lat: 46.2545, kind: "nature" },
    { nameZh: "新塞格德温泉浴场", nameEn: "Újszeged Thermal Bath", lon: 20.1613, lat: 46.2514, kind: "landmark" },
  ],
  pecs: [
    { nameZh: "塞切尼广场", nameEn: "Széchenyi Square", lon: 18.2281, lat: 46.0763, kind: "landmark" },
    { nameZh: "帕夏加齐·卡西姆清真寺（现为教堂）", nameEn: "Mosque of Pasha Qasim", lon: 18.2278, lat: 46.0765, kind: "landmark" },
    { nameZh: "佩奇主教座堂", nameEn: "Pécs Cathedral", lon: 18.2225, lat: 46.0787, kind: "landmark" },
    { nameZh: "早期基督教墓葬群", nameEn: "Early Christian Necropolis", lon: 18.2240, lat: 46.0781, kind: "landmark" },
    { nameZh: "佐尔奈文化区", nameEn: "Zsolnay Cultural Quarter", lon: 18.2417, lat: 46.0714, kind: "landmark" },
  ],
  gyor: [
    { nameZh: "主教山与主教座堂", nameEn: "Chapter Hill and Cathedral", lon: 17.6353, lat: 47.6932, kind: "landmark" },
    { nameZh: "杰尔市政厅", nameEn: "Győr Town Hall", lon: 17.6345, lat: 47.6869, kind: "landmark" },
    { nameZh: "两河汇口", nameEn: "Confluence of the Rába and Mosoni-Duna", lon: 17.6318, lat: 47.6923, kind: "nature" },
    { nameZh: "巴洛克老城", nameEn: "Baroque Old Town", lon: 17.6357, lat: 47.6906, kind: "landmark" },
  ],
  eger: [
    { nameZh: "多博广场", nameEn: "Dobó Square", lon: 20.3756, lat: 47.9023, kind: "landmark" },
    { nameZh: "埃格尔城堡", nameEn: "Eger Castle", lon: 20.3799, lat: 47.9042, kind: "landmark" },
    { nameZh: "埃格尔宣礼塔", nameEn: "Eger Minaret", lon: 20.3736, lat: 47.9036, kind: "landmark" },
    { nameZh: "埃格尔主教座堂", nameEn: "Eger Basilica", lon: 20.3736, lat: 47.8995, kind: "landmark" },
    { nameZh: "美妇人谷", nameEn: "Valley of the Beautiful Women", lon: 20.3653, lat: 47.8896, kind: "landmark" },
  ],
  sopron: [
    { nameZh: "火塔", nameEn: "Fire Tower", lon: 16.5897, lat: 47.6856, kind: "landmark" },
    { nameZh: "肖普朗主广场", nameEn: "Fő tér", lon: 16.5891, lat: 47.6859, kind: "landmark" },
    { nameZh: "山羊教堂", nameEn: "Goat Church", lon: 16.5888, lat: 47.6857, kind: "landmark" },
    { nameZh: "埃斯泰尔哈齐宫（费尔特德）", nameEn: "Esterházy Palace, Fertőd", lon: 16.8720, lat: 47.6197, kind: "landmark" },
  ],
  szentendre: [
    { nameZh: "圣安德烈主广场", nameEn: "Szentendre Main Square", lon: 19.0762, lat: 47.6697, kind: "landmark" },
    { nameZh: "贝尔格莱德教堂", nameEn: "Belgrade Cathedral", lon: 19.0742, lat: 47.6712, kind: "landmark" },
    { nameZh: "教堂山", nameEn: "Church Hill", lon: 19.0753, lat: 47.6706, kind: "landmark" },
    { nameZh: "露天民俗博物馆", nameEn: "Hungarian Open Air Museum (Skanzen)", lon: 19.0447, lat: 47.6917, kind: "landmark" },
  ],
};
