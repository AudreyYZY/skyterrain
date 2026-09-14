import type { CityPoi } from "@/lib/places-registry";

export const POIS: Record<string, CityPoi[]> = {
  // ── 波兰 ──
  warsaw: [
    { nameZh: "老城广场与皇家城堡", nameEn: "Old Town Market Square & Royal Castle", lon: 21.0139, lat: 52.2489, kind: "landmark" },
    { nameZh: "瓦津基公园", nameEn: "Łazienki Park", lon: 21.0353, lat: 52.2151, kind: "nature" },
    { nameZh: "华沙起义博物馆", nameEn: "Warsaw Rising Museum", lon: 20.9797, lat: 52.2280, kind: "landmark" },
  ],
  krakow: [
    { nameZh: "瓦维尔城堡", nameEn: "Wawel Castle", lon: 19.9356, lat: 50.0544, kind: "landmark" },
    { nameZh: "中央集市广场与圣玛丽教堂", nameEn: "Main Market Square & St Mary's Basilica", lon: 19.9373, lat: 50.0617, kind: "landmark" },
    { nameZh: "卡齐米日历史街区", nameEn: "Kazimierz", lon: 19.9464, lat: 50.0508, kind: "district" },
  ],
  zakopane: [
    { nameZh: "卡斯普罗维维尔赫峰缆车", nameEn: "Kasprowy Wierch Cable Car", lon: 19.9814, lat: 49.2319, kind: "nature" },
    { nameZh: "克鲁普夫基步行街", nameEn: "Krupówki Street", lon: 19.9553, lat: 49.2989, kind: "district" },
    { nameZh: "莫尔斯科奥科湖", nameEn: "Morskie Oko", lon: 20.0800, lat: 49.2000, kind: "nature" },
  ],
  rzeszow: [
    { nameZh: "热舒夫市集广场与地下旅游线路", nameEn: "Rzeszów Market Square & Underground Route", lon: 22.0042, lat: 50.0389, kind: "landmark" },
    { nameZh: "波德卡尔帕茨基航空博物馆", nameEn: "Podkarpackie Aviation Museum", lon: 22.0231, lat: 50.1067, kind: "landmark" },
  ],
  wroclaw: [
    { nameZh: "主集市广场与市政厅", nameEn: "Market Square & Old Town Hall", lon: 17.0326, lat: 51.1101, kind: "landmark" },
    { nameZh: "教堂岛", nameEn: "Ostrów Tumski (Cathedral Island)", lon: 17.0447, lat: 51.1147, kind: "district" },
    { nameZh: "百年厅", nameEn: "Centennial Hall", lon: 17.0728, lat: 51.1075, kind: "landmark" },
  ],
  poznan: [
    { nameZh: "老集市广场与文艺复兴市政厅", nameEn: "Old Market Square & Renaissance Town Hall", lon: 16.9339, lat: 52.4083, kind: "landmark" },
    { nameZh: "主教座堂岛", nameEn: "Cathedral Island", lon: 16.9450, lat: 52.4083, kind: "district" },
  ],
  gdansk: [
    { nameZh: "长街与长市场", nameEn: "Long Street & Long Market", lon: 18.6539, lat: 54.3492, kind: "district" },
    { nameZh: "圣玛丽教堂", nameEn: "St Mary's Church", lon: 18.6544, lat: 54.3494, kind: "landmark" },
    { nameZh: "欧洲团结中心", nameEn: "European Solidarity Centre", lon: 18.6489, lat: 54.3542, kind: "landmark" },
  ],
  szczecin: [
    { nameZh: "波美拉尼亚公爵城堡", nameEn: "Ducal Castle of Pomerania", lon: 14.5561, lat: 53.4297, kind: "landmark" },
    { nameZh: "哈肯露台", nameEn: "Hakenterrasse", lon: 14.5583, lat: 53.4297, kind: "nature" },
  ],
  torun: [
    { nameZh: "哥白尼故居博物馆", nameEn: "Copernicus House Museum", lon: 18.6047, lat: 53.0128, kind: "landmark" },
    { nameZh: "老城市政厅", nameEn: "Old Town Hall", lon: 18.6031, lat: 53.0111, kind: "landmark" },
  ],
  olsztyn: [
    { nameZh: "奥尔什丁城堡", nameEn: "Olsztyn Castle", lon: 20.4783, lat: 53.7767, kind: "landmark" },
  ],
  bialystok: [
    { nameZh: "布拉尼茨基宫", nameEn: "Branicki Palace", lon: 23.1636, lat: 53.1300, kind: "landmark" },
  ],
};
