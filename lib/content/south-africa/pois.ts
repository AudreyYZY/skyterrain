import type { CityPoi } from "@/lib/places-registry";

/** OSM / Wikidata 坐标，供城市尺度取景与方位核对，不作步行导航。 */
export const POIS: Record<string, CityPoi[]> = {
  pretoria: [
    { nameZh: "联合大厦", nameEn: "Union Buildings", lon: 28.2114, lat: -25.7409, kind: "landmark" },
    { nameZh: "教堂广场", nameEn: "Church Square", lon: 28.1878, lat: -25.7469, kind: "landmark" },
    { nameZh: "阿卡迪亚使馆区", nameEn: "Arcadia", lon: 28.2018, lat: -25.7444, kind: "district" },
  ],
  "cape-town": [
    { nameZh: "桌山缆车站", nameEn: "Table Mountain Cableway", lon: 18.4038, lat: -33.9628, kind: "landmark" },
    { nameZh: "维多利亚与阿尔弗雷德海滨区", nameEn: "V&A Waterfront", lon: 18.4201, lat: -33.9036, kind: "district" },
    { nameZh: "罗本岛", nameEn: "Robben Island", lon: 18.3702, lat: -33.8065, kind: "landmark" },
    { nameZh: "开普角", nameEn: "Cape Point", lon: 18.4968, lat: -34.3568, kind: "nature" },
  ],
  bloemfontein: [
    { nameZh: "最高上诉法院", nameEn: "Supreme Court of Appeal", lon: 26.2149, lat: -29.1183, kind: "landmark" },
    { nameZh: "瓦尔登斯坦", nameEn: "Waldensteyn", lon: 26.2050, lat: -29.1050, kind: "district" },
  ],
  johannesburg: [
    { nameZh: "市中心商务区", nameEn: "Johannesburg CBD", lon: 28.0473, lat: -26.2041, kind: "district" },
    { nameZh: "桑顿", nameEn: "Sandton", lon: 28.0567, lat: -26.1076, kind: "district" },
    { nameZh: "索维托", nameEn: "Soweto", lon: 27.8540, lat: -26.2485, kind: "district" },
  ],
  durban: [
    { nameZh: "黄金英里", nameEn: "Golden Mile", lon: 31.0350, lat: -29.8300, kind: "district" },
    { nameZh: "德班港", nameEn: "Port of Durban", lon: 31.0350, lat: -29.8710, kind: "landmark" },
  ],
  gqeberha: [
    { nameZh: "格贝哈海湾", nameEn: "Algoa Bay", lon: 25.6470, lat: -33.9700, kind: "nature" },
    { nameZh: "历史港区", nameEn: "Historic Harbour Quarter", lon: 25.6022, lat: -33.9608, kind: "district" },
  ],
  stellenbosch: [
    { nameZh: "老城荷兰角式建筑街区", nameEn: "Stellenbosch Old Town", lon: 18.8600, lat: -33.9346, kind: "district" },
    { nameZh: "斯泰伦博斯大学", nameEn: "Stellenbosch University", lon: 18.8663, lat: -33.9345, kind: "landmark" },
    { nameZh: "弗兰斯胡克", nameEn: "Franschhoek", lon: 19.1211, lat: -33.9106, kind: "district" },
  ],
  polokwane: [
    { nameZh: "波罗奎瓦内市中心", nameEn: "Polokwane City Centre", lon: 29.4689, lat: -23.9045, kind: "district" },
  ],
};
