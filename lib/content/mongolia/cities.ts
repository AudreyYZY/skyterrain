import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  {
    id: "ulaanbaatar", nameZh: "乌兰巴托", nameEn: "Ulaanbaatar", country: "mongolia", tier: "capital", zone: "mn-central", admin1Zh: "乌兰巴托市", admin1En: "Ulaanbaatar",
    lon: 106.9177, lat: 47.9184,
    airport: { iata: "UBN", nameZh: "成吉思汗国际机场", nameEn: "Chinggis Khaan International", lon: 106.8161, lat: 47.6467 },
    source: "乌兰巴托市中心 47.9184,106.9177；成吉思汗国际机场2021年启用，位于市区以南约52公里的呼西格河谷：公开资料/Wikipedia",
  },
  {
    id: "erdenet", nameZh: "额尔登特", nameEn: "Erdenet", country: "mongolia", tier: "major", zone: "mn-north", admin1Zh: "鄂尔浑省", admin1En: "Orkhon Province",
    lon: 104.0833, lat: 49.0333,
    airport: { iata: "ERT", nameZh: "额尔登特机场", nameEn: "Erdenet Airport", lon: 104.1506, lat: 48.9831 },
    source: "额尔登特市中心 49.0333,104.0833；本地设有额尔登特机场（ERT），航班班次以实际时刻表为准，主要客运也可经乌兰巴托方向的公路与蒙古国铁支线往返：公开资料",
  },
  {
    id: "darkhan", nameZh: "达尔汗", nameEn: "Darkhan", country: "mongolia", tier: "major", zone: "mn-north", admin1Zh: "达尔汗乌勒省", admin1En: "Darkhan-Uul Province",
    lon: 105.9228, lat: 49.4867,
    airport: { iata: "UBN", nameZh: "成吉思汗国际机场", nameEn: "Chinggis Khaan International", lon: 106.8161, lat: 47.6467 },
    source: "达尔汗市中心 49.4867,105.9228；本地无稳定定期客运航班，主要经蒙古纵贯铁路（乌兰巴托—苏赫巴托尔线）与公路往返乌兰巴托（约219km）：公开资料",
  },
  {
    id: "kharkhorin", nameZh: "哈拉和林", nameEn: "Kharkhorin", country: "mongolia", tier: "notable", zone: "mn-central", admin1Zh: "前杭爱省", admin1En: "Övörkhangai Province",
    lon: 102.8395, lat: 47.1975,
    airport: { iata: "UBN", nameZh: "成吉思汗国际机场", nameEn: "Chinggis Khaan International", lon: 106.8161, lat: 47.6467 },
    source: "哈拉和林（鄂尔浑河谷）47.1975,102.8395；本地哈拉和林机场几乎无客运处理设施，通常经乌兰巴托方向公路往返（约370km）：公开资料/Wikipedia",
  },
  {
    id: "moron", nameZh: "木伦", nameEn: "Mörön", country: "mongolia", tier: "notable", zone: "mn-north", admin1Zh: "库苏古尔省", admin1En: "Khövsgöl Province",
    lon: 100.1625, lat: 49.6342,
    airport: { iata: "MXV", nameZh: "木伦机场", nameEn: "Mörön Airport", lon: 100.1, lat: 49.6637 },
    source: "木伦市中心 49.6342,100.1625；MXV机场：公开资料/MIAT蒙古国际航空国内航线",
  },
  {
    id: "dalanzadgad", nameZh: "达兰扎德嘎德", nameEn: "Dalanzadgad", country: "mongolia", tier: "notable", zone: "mn-gobi", admin1Zh: "南戈壁省", admin1En: "Ömnögovi Province",
    lon: 104.4250, lat: 43.5708,
    airport: { iata: "DLZ", nameZh: "达兰扎德嘎德机场", nameEn: "Dalanzadgad Airport", lon: 104.3677, lat: 43.6086 },
    source: "达兰扎德嘎德市中心 43.5708,104.4250；DLZ机场：公开资料/MIAT蒙古国际航空国内航线",
  },
  {
    id: "khovd", nameZh: "科布多", nameEn: "Khovd", country: "mongolia", tier: "notable", zone: "mn-west", admin1Zh: "科布多省", admin1En: "Khovd Province",
    lon: 91.6417, lat: 47.9975,
    airport: { iata: "HVD", nameZh: "科布多机场", nameEn: "Khovd Airport", lon: 91.6289, lat: 47.9539 },
    source: "科布多市中心 47.9975,91.6417；HVD机场：公开资料/MIAT蒙古国际航空国内航线",
  },
  {
    id: "olgii", nameZh: "乌力吉", nameEn: "Ölgii", country: "mongolia", tier: "notable", zone: "mn-west", admin1Zh: "巴彦乌列盖省", admin1En: "Bayan-Ölgii Province",
    lon: 89.9575, lat: 48.9700,
    airport: { iata: "ULG", nameZh: "乌力吉国际机场", nameEn: "Ölgii International", lon: 89.9308, lat: 48.9964 },
    source: "乌力吉市中心 48.9700,89.9575；ULG机场：公开资料/MIAT蒙古国际航空国内航线（每周约2班，4至10月运营）",
  },
  {
    id: "choibalsan", nameZh: "乔巴山", nameEn: "Choibalsan", country: "mongolia", tier: "notable", zone: "mn-east", admin1Zh: "道尔诺德省", admin1En: "Dornod Province",
    lon: 114.5352, lat: 48.0733,
    airport: { iata: "COQ", nameZh: "乔巴山机场", nameEn: "Choibalsan Airport", lon: 114.6472, lat: 48.1354 },
    source: "乔巴山市中心 48.0733,114.5352；COQ机场：公开资料/MIAT蒙古国际航空国内航线",
  },
  {
    id: "tsetserleg", nameZh: "车车尔勒格", nameEn: "Tsetserleg", country: "mongolia", tier: "notable", zone: "mn-central", admin1Zh: "阿尔汗盖省", admin1En: "Arkhangai Province",
    lon: 101.4544, lat: 47.4767,
    airport: { iata: "UBN", nameZh: "成吉思汗国际机场", nameEn: "Chinggis Khaan International", lon: 106.8161, lat: 47.6467 },
    source: "车车尔勒格市中心 47.4767,101.4544；本地设有车车尔勒格机场（TSZ）但客运航班暂不稳定，通常经乌兰巴托方向公路往返（约420km）：公开资料",
  },
  {
    id: "sainshand", nameZh: "赛音山达", nameEn: "Sainshand", country: "mongolia", tier: "notable", zone: "mn-gobi", admin1Zh: "东戈壁省", admin1En: "Dornogovi Province",
    lon: 110.1431, lat: 44.8884,
    source: "赛音山达 44.888391,110.143126（OSM Nominatim administrative 节点）；本地机场 OurAirports scheduled_service=no、无 IATA 码，不填 airport；进出以铁路为主，车站在城区北片 44.9158,110.1415（OSM）（已有城市补充批，2026-09-16）",
  },
  {
    id: "bayankhongor", nameZh: "巴彦洪戈尔", nameEn: "Bayankhongor", country: "mongolia", tier: "notable", zone: "mn-central", admin1Zh: "巴彦洪戈尔省", admin1En: "Bayankhongor Province",
    lon: 100.7143, lat: 46.1937,
    source: "巴彦洪戈尔 46.193665,100.714265（OSM Nominatim administrative 节点；同一查询的 45.238,99.515 是省的中心，未用）；本地 BYN 机场在城区约 3.5 km，OurAirports 标有定期航班，但国内航班班次的四个来源互相矛盾、MIAT 官网取不到，按规则 ⑬ 的保守做法不填 airport、正文写「班次很少，出发前查询」（已有城市补充批，2026-09-16）",
  },
];
