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
};
