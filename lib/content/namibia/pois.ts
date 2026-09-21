import type { CityPoi } from "@/lib/places-registry";

/** OSM / Wikidata 坐标，供城市尺度取景与方位核对，不作步行导航。 */
export const POIS: Record<string, CityPoi[]> = {
  windhoek: [
    { nameZh: "独立纪念博物馆", nameEn: "Independence Memorial Museum", lon: 17.0879, lat: -22.5681, kind: "landmark" },
    { nameZh: "基督教堂", nameEn: "Christ Church", lon: 17.0875, lat: -22.5679, kind: "landmark" },
    { nameZh: "纳米比亚手工艺中心", nameEn: "Namibia Craft Centre", lon: 17.0806, lat: -22.5651, kind: "district" },
    { nameZh: "国家植物园", nameEn: "National Botanic Garden", lon: 17.0934, lat: -22.5680, kind: "nature" },
  ],
  "walvis-bay": [
    { nameZh: "沃尔维斯湾潟湖", nameEn: "Walvis Bay Lagoon", lon: 14.4870, lat: -22.9800, kind: "nature" },
    { nameZh: "沃尔维斯湾滨水区", nameEn: "Walvis Bay Waterfront", lon: 14.4828, lat: -22.9582, kind: "district" },
    { nameZh: "鹈鹕角", nameEn: "Pelican Point", lon: 14.4380, lat: -22.8840, kind: "nature" },
    { nameZh: "七号沙丘", nameEn: "Dune 7", lon: 14.5960, lat: -23.0670, kind: "nature" },
  ],
  swakopmund: [
    { nameZh: "斯瓦科普蒙德博物馆", nameEn: "Swakopmund Museum", lon: 14.5224, lat: -22.6766, kind: "landmark" },
    { nameZh: "斯瓦科普蒙德栈桥", nameEn: "Swakopmund Jetty", lon: 14.5220, lat: -22.6805, kind: "landmark" },
    { nameZh: "国家海洋水族馆", nameEn: "National Marine Aquarium", lon: 14.5205, lat: -22.6840, kind: "landmark" },
    { nameZh: "月亮谷地", nameEn: "Moon Landscape", lon: 15.0440, lat: -22.6590, kind: "nature" },
  ],
  luderitz: [
    { nameZh: "菲尔森教堂", nameEn: "Felsenkirche", lon: 15.1544, lat: -26.6487, kind: "landmark" },
    { nameZh: "科尔曼斯科普", nameEn: "Kolmanskop", lon: 15.2310, lat: -26.7030, kind: "landmark" },
    { nameZh: "迪亚斯角", nameEn: "Diaz Point", lon: 15.0910, lat: -26.6350, kind: "nature" },
    { nameZh: "阿加特海滩", nameEn: "Agate Beach", lon: 15.1280, lat: -26.5650, kind: "nature" },
  ],
  rundu: [
    { nameZh: "伦杜河滨", nameEn: "Rundu Riverfront", lon: 19.7600, lat: -17.9065, kind: "district" },
    { nameZh: "伦杜露天市场", nameEn: "Rundu Open Market", lon: 19.7710, lat: -17.9200, kind: "district" },
    { nameZh: "卡万戈河", nameEn: "Kavango River", lon: 19.7550, lat: -17.9000, kind: "nature" },
  ],
  "katima-mulilo": [
    { nameZh: "赞比西河滨", nameEn: "Zambezi Riverfront", lon: 24.2810, lat: -17.4700, kind: "nature" },
    { nameZh: "纳姆维岛", nameEn: "Namwi Island", lon: 24.2880, lat: -17.4870, kind: "nature" },
    { nameZh: "卡蒂马穆利洛露天市场", nameEn: "Katima Mulilo Open Market", lon: 24.2710, lat: -17.5030, kind: "district" },
    { nameZh: "恩卡萨—鲁帕拉洪泛平原", nameEn: "Nkasa Rupara Floodplain", lon: 23.7656, lat: -18.3961, kind: "nature" },
  ],
};
