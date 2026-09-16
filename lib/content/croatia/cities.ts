import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // 克罗地亚
  {
    id: "zagreb", nameZh: "萨格勒布", nameEn: "Zagreb", country: "croatia", tier: "capital", zone: "hr-zagreb", admin1Zh: "萨格勒布市", admin1En: "City of Zagreb",
    lon: 15.9819, lat: 45.8150,
    airport: { iata: "ZAG", nameZh: "萨格勒布机场", nameEn: "Zagreb Airport", lon: 16.0688, lat: 45.7429 },
    source: "萨格勒布市中心 45.8150,15.9819；ZAG机场（距市区约17km），克罗地亚首都与最大城市：公开资料",
  },
  {
    id: "split", nameZh: "斯普利特", nameEn: "Split", country: "croatia", tier: "major", zone: "hr-dalmatia", admin1Zh: "斯普利特-达尔马提亚县", admin1En: "Split-Dalmatia County",
    lon: 16.4402, lat: 43.5081,
    airport: { iata: "SPU", nameZh: "斯普利特机场", nameEn: "Split Airport", lon: 16.2981, lat: 43.5389 },
    source: "斯普利特市中心 43.5081,16.4402；SPU机场（距市区约19km），达尔马提亚地区最大城市，戴克里先宫所在地：公开资料",
  },
  {
    id: "dubrovnik", nameZh: "杜布罗夫尼克", nameEn: "Dubrovnik", country: "croatia", tier: "major", zone: "hr-dubrovnik", admin1Zh: "杜布罗夫尼克-内雷特瓦县", admin1En: "Dubrovnik-Neretva County",
    lon: 18.0944, lat: 42.6507,
    airport: { iata: "DBV", nameZh: "杜布罗夫尼克机场", nameEn: "Dubrovnik Airport", lon: 18.2682, lat: 42.5614 },
    source: "杜布罗夫尼克市中心 42.6507,18.0944；DBV机场（距市区约20km），南达尔马提亚沿海古城，1979年老城列入世界遗产：公开资料",
  },
  {
    id: "rijeka", nameZh: "里耶卡", nameEn: "Rijeka", country: "croatia", tier: "major", zone: "hr-istria-kvarner", admin1Zh: "滨海-山地科塔尔县", admin1En: "Primorje-Gorski Kotar County",
    lon: 14.4422, lat: 45.3271,
    airport: { iata: "RJK", nameZh: "里耶卡机场", nameEn: "Rijeka Airport", lon: 14.5703, lat: 45.2169 },
    source: "里耶卡市中心 45.3271,14.4422；RJK机场（位于克尔克岛上，距市区约30km），克罗地亚最大海港：公开资料",
  },
  {
    id: "zadar", nameZh: "扎达尔", nameEn: "Zadar", country: "croatia", tier: "notable", zone: "hr-dalmatia", admin1Zh: "扎达尔县", admin1En: "Zadar County",
    lon: 15.2314, lat: 44.1194,
    airport: { iata: "ZAD", nameZh: "扎达尔机场", nameEn: "Zadar Airport", lon: 15.3467, lat: 44.1083 },
    source: "扎达尔市中心 44.1194,15.2314；ZAD机场（距市区约8km），北达尔马提亚古城，以海之风琴、科尔纳蒂群岛门户著称：公开资料",
  },
  {
    id: "pula", nameZh: "普拉", nameEn: "Pula", country: "croatia", tier: "notable", zone: "hr-istria-kvarner", admin1Zh: "伊斯特拉县", admin1En: "Istria County",
    lon: 13.8496, lat: 44.8666,
    airport: { iata: "PUY", nameZh: "普拉机场", nameEn: "Pula Airport", lon: 13.9222, lat: 44.8935 },
    source: "普拉市中心 44.8666,13.8496；PUY机场（距市区约6km），伊斯特拉半岛最大城市，古罗马竞技场所在地：公开资料",
  },
  {
    id: "osijek", nameZh: "奥西耶克", nameEn: "Osijek", country: "croatia", tier: "notable", zone: "hr-slavonia", admin1Zh: "奥西耶克-巴拉尼亚县", admin1En: "Osijek-Baranja County",
    lon: 18.6955, lat: 45.5550,
    airport: { iata: "OSI", nameZh: "奥西耶克机场", nameEn: "Osijek Airport", lon: 18.8103, lat: 45.4626 },
    source: "奥西耶克市中心 45.5550,18.6955；OSI机场（距市区约20km），斯拉沃尼亚地区最大城市，德拉瓦河畔：公开资料",
  },
  {
    id: "hvar-town", nameZh: "赫瓦尔镇", nameEn: "Hvar Town", country: "croatia", tier: "notable", zone: "hr-dalmatia", admin1Zh: "斯普利特-达尔马提亚县", admin1En: "Split-Dalmatia County",
    lon: 16.4413, lat: 43.1729,
    source: "赫瓦尔镇 43.1729,16.4413；岛上无机场，经斯普利特或杜布罗夫尼克机场转乘渡轮/双体船抵达，赫瓦尔岛以充足日照与薰衣草田闻名：公开资料",
  },
  {
    id: "sibenik", nameZh: "希贝尼克", nameEn: "Šibenik", country: "croatia", tier: "notable", zone: "hr-dalmatia", admin1Zh: "希贝尼克-克宁县", admin1En: "Šibenik-Knin County",
    lon: 15.8956, lat: 43.7339,
    source: "希贝尼克市中心 43.7339,15.8956（Wikidata）；县治；斯普利特 SPU 直线约 39 km、扎达尔 ZAD 约 59 km（按 OurAirports 算），本市没有定期航班的机场，不填机场字段；圣雅各布主教座堂 UNESCO 963（2000）、圣尼古拉要塞为 UNESCO 1533 组成部分（2017）；斯克拉丁瀑布距市中心直线约 9.6 km（已有城市补充批，2026-09-15）",
  },
  {
    id: "porec", nameZh: "波雷奇", nameEn: "Poreč", country: "croatia", tier: "notable", zone: "hr-istria-kvarner", admin1Zh: "伊斯特拉县", admin1En: "Istria County",
    lon: 13.5935, lat: 45.2280,
    source: "波雷奇老城半岛 45.2280,13.5935（取尤弗拉西苏斯圣殿与德库马努斯之间，OSM / UNESCO 坐标）；普拉 PUY 直线约 45 km（按 OurAirports 算），附近小机场无定期航班，不填机场字段；最近火车站帕津直线约 27 km；UNESCO 809（1997）（已有城市补充批，2026-09-15）",
  },
  {
    id: "varazdin", nameZh: "瓦拉日丁", nameEn: "Varaždin", country: "croatia", tier: "notable", zone: "hr-north", admin1Zh: "瓦拉日丁县", admin1En: "Varaždin County",
    lon: 16.3379, lat: 46.3081,
    source: "瓦拉日丁国王托米斯拉夫广场 46.308089,16.337851（OSM Nominatim；Wikidata P625 几乎同点）；市域内的瓦拉日丁小机场（LDVA）与周边几处均 scheduled_service=no，不填 airport；最近有定期航班的是萨格勒布 ZAG，直线约 66 km（算）（已有城市补充批，2026-09-16）",
  },
  {
    id: "trogir", nameZh: "特罗吉尔", nameEn: "Trogir", country: "croatia", tier: "notable", zone: "hr-dalmatia", admin1Zh: "斯普利特-达尔马提亚县", admin1En: "Split-Dalmatia County",
    lon: 16.2512, lat: 43.5170,
    source: "特罗吉尔若望保禄二世广场 43.516959,16.251184（OSM；UNESCO 810 官方坐标 43.5170833,16.2513611 几乎同点）；斯普利特机场 SPU 直线约 4.5 km 但在邻市卡什泰拉市域内，按既有波雷奇 / 希贝尼克的做法不填 airport、在正文里写清楚（已有城市补充批，2026-09-16）",
  },
];
