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
  ekurhuleni: [
    { nameZh: "日耳曼斯顿老城", nameEn: "Germiston Old Town", lon: 28.1672, lat: -26.2178, kind: "district" },
    { nameZh: "博克斯堡", nameEn: "Boksburg", lon: 28.2620, lat: -26.2130, kind: "district" },
  ],
  "east-london": [
    { nameZh: "水牛河口", nameEn: "Buffalo River Mouth", lon: 27.9130, lat: -33.0230, kind: "nature" },
    { nameZh: "东伦敦老城区", nameEn: "East London Old Town", lon: 27.9116, lat: -33.0153, kind: "district" },
  ],
  kimberley: [
    { nameZh: "大洞", nameEn: "Big Hole", lon: 24.7573, lat: -28.7385, kind: "landmark" },
  ],
  george: [
    { nameZh: "乌斯河山", nameEn: "Outeniqua Mountains", lon: 22.4500, lat: -33.9200, kind: "nature" },
  ],
  "richards-bay": [
    { nameZh: "理查兹湾潟湖", nameEn: "Richards Bay Lagoon", lon: 32.0700, lat: -28.7700, kind: "nature" },
    { nameZh: "理查兹湾煤炭码头", nameEn: "Richards Bay Coal Terminal", lon: 32.0950, lat: -28.7900, kind: "landmark" },
  ],
  upington: [
    { nameZh: "奥兰治河葡萄园", nameEn: "Orange River Vineyards", lon: 21.2561, lat: -28.4478, kind: "nature" },
  ],
  knysna: [
    { nameZh: "克尼斯纳头", nameEn: "Knysna Heads", lon: 23.0700, lat: -34.0800, kind: "landmark" },
    { nameZh: "费瑟贝德自然保护区", nameEn: "Featherbed Nature Reserve", lon: 23.0500, lat: -34.0850, kind: "nature" },
  ],
  mbombela: [
    { nameZh: "苏德瓦拉洞", nameEn: "Sudwala Caves", lon: 30.6998, lat: -25.3698, kind: "nature" },
  ],
  rustenburg: [
    { nameZh: "太阳城/皮兰斯堡自然保护区", nameEn: "Sun City / Pilanesberg Nature Reserve", lon: 27.0878, lat: -25.3375, kind: "nature" },
  ],
};
