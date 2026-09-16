import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 捷克 ──
  prague: [
    { nameZh: "布拉格城堡", nameEn: "Prague Castle", lon: 14.4009, lat: 50.0909, kind: "landmark" },
    { nameZh: "查理大桥", nameEn: "Charles Bridge", lon: 14.4114, lat: 50.0865, kind: "landmark" },
    { nameZh: "老城广场与天文钟", nameEn: "Old Town Square & Astronomical Clock", lon: 14.4213, lat: 50.0870, kind: "landmark" },
    { nameZh: "小城区", nameEn: "Lesser Town (Malá Strana)", lon: 14.4038, lat: 50.0875, kind: "district" },
    { nameZh: "佩特任山", nameEn: "Petřín Hill", lon: 14.3958, lat: 50.0836, kind: "nature" },
  ],
  brno: [
    { nameZh: "什皮尔伯克城堡", nameEn: "Špilberk Castle", lon: 16.5978, lat: 49.1936, kind: "landmark" },
    { nameZh: "圣彼得与圣保罗主教座堂", nameEn: "Cathedral of Sts. Peter and Paul", lon: 16.6072, lat: 49.1928, kind: "landmark" },
    { nameZh: "图根哈特别墅", nameEn: "Villa Tugendhat", lon: 16.6103, lat: 49.2119, kind: "landmark" },
    { nameZh: "自由广场", nameEn: "Freedom Square", lon: 16.6086, lat: 49.1955, kind: "district" },
  ],
  plzen: [
    { nameZh: "比尔森啤酒厂", nameEn: "Pilsner Urquell Brewery", lon: 13.3908, lat: 49.7440, kind: "landmark" },
    { nameZh: "共和国广场与圣巴托洛缪主教座堂", nameEn: "Republic Square & St. Bartholomew's Cathedral", lon: 13.3776, lat: 49.7475, kind: "landmark" },
    { nameZh: "皮尔森历史地下通道", nameEn: "Pilsen Historical Underground", lon: 13.3776, lat: 49.7466, kind: "landmark" },
    { nameZh: "大犹太会堂", nameEn: "Great Synagogue", lon: 13.3796, lat: 49.7458, kind: "landmark" },
  ],
  "karlovy-vary": [
    { nameZh: "磨坊温泉回廊", nameEn: "Mill Colonnade", lon: 12.8797, lat: 50.2314, kind: "landmark" },
    { nameZh: "温泉喷泉回廊", nameEn: "Hot Spring Colonnade", lon: 12.8817, lat: 50.2308, kind: "landmark" },
    { nameZh: "普普大酒店", nameEn: "Grandhotel Pupp", lon: 12.8858, lat: 50.2261, kind: "landmark" },
  ],
  "cesky-krumlov": [
    { nameZh: "克鲁姆洛夫城堡", nameEn: "Krumlov Castle", lon: 14.3131, lat: 48.8117, kind: "landmark" },
    { nameZh: "城堡塔楼观景台", nameEn: "Castle Tower Viewpoint", lon: 14.3125, lat: 48.8113, kind: "landmark" },
    { nameZh: "老城广场", nameEn: "Old Town Square", lon: 14.3161, lat: 48.8103, kind: "district" },
  ],
  "kutna-hora": [
    { nameZh: "圣芭芭拉教堂", nameEn: "St. Barbara's Church", lon: 15.2611, lat: 49.9469, kind: "landmark" },
    { nameZh: "塞德莱茨白骨教堂", nameEn: "Sedlec Ossuary", lon: 15.2814, lat: 49.9558, kind: "landmark" },
    { nameZh: "捷克银币博物馆", nameEn: "Czech Museum of Silver", lon: 15.2672, lat: 49.9481, kind: "landmark" },
  ],
  olomouc: [
    { nameZh: "圣三一柱", nameEn: "Holy Trinity Column", lon: 17.2514, lat: 49.5942, kind: "landmark" },
    { nameZh: "奥洛穆茨天文钟", nameEn: "Olomouc Astronomical Clock", lon: 17.2508, lat: 49.5939, kind: "landmark" },
    { nameZh: "奥洛穆茨主教座堂", nameEn: "Olomouc Cathedral (St. Wenceslas)", lon: 17.2554, lat: 49.5965, kind: "landmark" },
  ],
  "ceske-budejovice": [
    { nameZh: "普热米斯尔·奥托卡二世广场与参孙喷泉", nameEn: "Přemysl Otakar II Square and Samson Fountain", lon: 14.4743, lat: 48.9746, kind: "landmark" },
    { nameZh: "黑塔", nameEn: "Black Tower", lon: 14.4757, lat: 48.9755, kind: "landmark" },
    { nameZh: "圣尼古拉主教座堂", nameEn: "St Nicholas Cathedral", lon: 14.4761, lat: 48.9753, kind: "landmark" },
    { nameZh: "多明我会修道院与圣母献堂教堂", nameEn: "Dominican Monastery and Church of the Presentation", lon: 14.4716, lat: 48.9754, kind: "landmark" },
    { nameZh: "南波希米亚博物馆", nameEn: "South Bohemian Museum", lon: 14.4766, lat: 48.9725, kind: "landmark" },
    { nameZh: "布杰约维采啤酒厂", nameEn: "Budějovický Budvar brewery", lon: 14.4769, lat: 48.9934, kind: "landmark" },
  ],
  telc: [
    { nameZh: "扎哈里亚什·赫拉德茨广场", nameEn: "Zachariáš of Hradec Square", lon: 15.4528, lat: 49.1842, kind: "landmark" },
    { nameZh: "泰尔奇国立城堡", nameEn: "Telč State Castle", lon: 15.4513, lat: 49.1854, kind: "landmark" },
    { nameZh: "圣雅各教堂", nameEn: "Church of St James", lon: 15.4507, lat: 49.185, kind: "landmark" },
    { nameZh: "圣灵塔", nameEn: "Tower of the Holy Spirit", lon: 15.4547, lat: 49.1831, kind: "landmark" },
    { nameZh: "乌利采塘", nameEn: "Ulický Pond", lon: 15.451, lat: 49.1839, kind: "landmark" },
  ],
  litomysl: [
    { nameZh: "利托米什尔国立城堡", nameEn: "Litomyšl State Castle", lon: 16.3127, lat: 49.8734, kind: "landmark" },
    { nameZh: "城堡啤酒厂（斯美塔那出生寓所）", nameEn: "Castle brewery (Smetana's birthplace)", lon: 16.3138, lat: 49.873, kind: "landmark" },
    { nameZh: "斯美塔那广场", nameEn: "Smetana Square", lon: 16.3106, lat: 49.8714, kind: "landmark" },
    { nameZh: "皮亚里斯特会圣十字架寻获教堂", nameEn: "Piarist Church of the Finding of the Holy Cross", lon: 16.3125, lat: 49.872, kind: "landmark" },
    { nameZh: "地区博物馆", nameEn: "Regional Museum", lon: 16.3119, lat: 49.8723, kind: "landmark" },
  ],
  ostrava: [
    { nameZh: "下维特科维采（博尔特塔）", nameEn: "Dolní Vítkovice (Bolt Tower)", lon: 18.2767, lat: 49.8194, kind: "landmark" },
    { nameZh: "新市政厅观景塔", nameEn: "New Town Hall viewing tower", lon: 18.2916, lat: 49.8417, kind: "landmark" },
    { nameZh: "兰德克公园（采矿博物馆）", nameEn: "Landek Park mining museum", lon: 18.263, lat: 49.8666, kind: "landmark" },
    { nameZh: "西里西亚俄斯特拉发城堡", nameEn: "Silesian Ostrava Castle", lon: 18.2997, lat: 49.8305, kind: "landmark" },
    { nameZh: "救世主主教座堂", nameEn: "Cathedral of the Divine Saviour", lon: 18.289, lat: 49.8358, kind: "landmark" },
    { nameZh: "埃马矸石山", nameEn: "Ema spoil heap", lon: 18.3149, lat: 49.8398, kind: "nature" },
  ],
  "hradec-kralove": [
    { nameZh: "白塔", nameEn: "White Tower", lon: 15.8308, lat: 50.209, kind: "landmark" },
    { nameZh: "圣灵主教座堂", nameEn: "Cathedral of the Holy Spirit", lon: 15.831, lat: 50.2088, kind: "landmark" },
    { nameZh: "东波希米亚博物馆", nameEn: "Museum of Eastern Bohemia", lon: 15.8345, lat: 50.2129, kind: "landmark" },
    { nameZh: "胡恰克水电站", nameEn: "Hučák hydroelectric station", lon: 15.8254, lat: 50.2072, kind: "landmark" },
    { nameZh: "易北河与奥尔利采河汇流处", nameEn: "Confluence of the Elbe and the Orlice", lon: 15.8254, lat: 50.2049, kind: "nature" },
    { nameZh: "乌尔里赫广场与戈恰尔阶梯", nameEn: "Ulrich Square and the Gočár Steps", lon: 15.8221, lat: 50.2105, kind: "district" },
  ],
};
