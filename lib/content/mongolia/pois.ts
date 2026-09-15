import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // 蒙古
  ulaanbaatar: [
    { nameZh: "苏赫巴托尔广场（成吉思汗广场）", nameEn: "Sükhbaatar Square", lon: 106.9175, lat: 47.9185, kind: "landmark" },
    { nameZh: "甘丹寺", nameEn: "Gandantegchinlen Monastery", lon: 106.8875, lat: 47.9203, kind: "landmark" },
    { nameZh: "蒙古国家历史博物馆", nameEn: "National Museum of Mongolia", lon: 106.9186, lat: 47.9178, kind: "landmark" },
    { nameZh: "成吉思汗骑马雕像", nameEn: "Chinggis Khaan Equestrian Statue", lon: 107.6497, lat: 47.8306, kind: "landmark" },
    { nameZh: "博格达汗冬宫博物馆", nameEn: "Bogd Khaan Palace Museum", lon: 106.8858, lat: 47.8814, kind: "landmark" },
    { nameZh: "扎伊桑纪念碑", nameEn: "Zaisan Memorial", lon: 106.9294, lat: 47.8794, kind: "landmark" },
  ],
  erdenet: [
    { nameZh: "额尔登特矿业公司观景点", nameEn: "Erdenet Mining Corporation Viewpoint", lon: 104.0500, lat: 49.0500, kind: "landmark" },
    { nameZh: "额尔登特中心广场", nameEn: "Erdenet Central Square", lon: 104.0833, lat: 49.0333, kind: "landmark" },
  ],
  darkhan: [
    { nameZh: "达尔汗中心广场", nameEn: "Darkhan Central Square", lon: 105.9228, lat: 49.4867, kind: "landmark" },
    { nameZh: "达尔汗敖包山", nameEn: "Darkhan Ovoo Hill", lon: 105.9500, lat: 49.4800, kind: "nature" },
  ],
  kharkhorin: [
    { nameZh: "额尔德尼召寺", nameEn: "Erdene Zuu Monastery", lon: 102.8425, lat: 47.2033, kind: "landmark" },
    { nameZh: "哈拉和林博物馆", nameEn: "Karakorum Museum", lon: 102.8453, lat: 47.1969, kind: "landmark" },
    { nameZh: "龟形石碑", nameEn: "Turtle Rock", lon: 102.8283, lat: 47.1892, kind: "landmark" },
    { nameZh: "鄂尔浑河谷观景点", nameEn: "Orkhon Valley Viewpoint", lon: 102.8300, lat: 47.2100, kind: "nature" },
  ],
  moron: [
    { nameZh: "哈特嘎尔村（库苏古尔湖南岸）", nameEn: "Khatgal Village", lon: 100.1583, lat: 50.4331, kind: "district" },
    { nameZh: "库苏古尔国家公园入口", nameEn: "Khövsgöl National Park Entrance", lon: 100.1600, lat: 50.4400, kind: "nature" },
    { nameZh: "乌希金乌维尔鹿石遗址", nameEn: "Uushigiin Uver Deer Stones", lon: 99.8000, lat: 49.7000, kind: "landmark" },
    { nameZh: "木伦鹿石博物馆", nameEn: "Mörön Deer Stone Museum", lon: 100.1625, lat: 49.6342, kind: "landmark" },
  ],
  dalanzadgad: [
    { nameZh: "洪戈林额勒斯歌唱沙丘", nameEn: "Khongoryn Els", lon: 102.1830, lat: 43.7500, kind: "nature" },
    { nameZh: "约林音峡谷（鹰谷）", nameEn: "Yolyn Am", lon: 104.0200, lat: 43.6800, kind: "nature" },
    { nameZh: "巴彦扎格燃烧的悬崖", nameEn: "Bayanzag (Flaming Cliffs)", lon: 103.7500, lat: 44.1300, kind: "nature" },
    { nameZh: "古尔班赛罕山徒步区", nameEn: "Gurvan Saikhan Hiking Area", lon: 103.9500, lat: 43.5800, kind: "nature" },
  ],
  khovd: [
    { nameZh: "科布多省博物馆", nameEn: "Khovd Provincial Museum", lon: 91.6400, lat: 47.9970, kind: "landmark" },
    { nameZh: "哈尔乌苏湖", nameEn: "Khar-Us Lake", lon: 92.2000, lat: 48.1700, kind: "nature" },
  ],
  olgii: [
    { nameZh: "塔王博格达（呼依滕峰）", nameEn: "Tavan Bogd (Khüiten Peak)", lon: 87.8567, lat: 49.1289, kind: "nature" },
    { nameZh: "乌力吉哈萨克文化博物馆", nameEn: "Ölgii Kazakh Culture Museum", lon: 89.9575, lat: 48.9700, kind: "landmark" },
    { nameZh: "萨格塞村（金雕猎人村）", nameEn: "Sagsai (Eagle Hunters' Village)", lon: 89.5500, lat: 48.7500, kind: "district" },
  ],
  choibalsan: [
    { nameZh: "克鲁伦河沿岸", nameEn: "Kherlen Riverside", lon: 114.5400, lat: 48.0750, kind: "nature" },
    { nameZh: "道尔诺德省博物馆", nameEn: "Dornod Provincial Museum", lon: 114.5352, lat: 48.0733, kind: "landmark" },
  ],
  tsetserleg: [
    { nameZh: "科尔戈火山口", nameEn: "Khorgo Volcano Crater", lon: 99.8500, lat: 48.2000, kind: "nature" },
    { nameZh: "特日和音查干湖", nameEn: "Terkhiin Tsagaan Lake", lon: 99.7000, lat: 48.1900, kind: "nature" },
    { nameZh: "扎雅音格根寺", nameEn: "Zayain Gegeenii Süm", lon: 101.4500, lat: 47.4800, kind: "landmark" },
  ],
};
