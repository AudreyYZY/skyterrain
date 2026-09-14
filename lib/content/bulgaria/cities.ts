import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 保加利亚 ──
  // 东欧次区域。安全与零争议前置判断：五个邻国都无活跃冲突；鲁塞在多瑙河右岸（河即国界）照收，但不写界河、对岸与大桥名称由来；
  // 班斯科离国界约 40 km 照收，**全篇不出现「马其顿」**、不点名西南方向的邻国；布尔加斯不写南部边境地带；里拉修道院不作城市条目（宗教场所、所在镇离国界约 25 km）。
  // 条目只写地理、制度、建筑与前现代史实；**不写族群构成、宗教评价、1877–1878 年战争与「解放」叙事、1879 年以后的政治史、社会主义时期纪念建筑**。
  // 人口口径：NSI 年度人口为常住人口、按申报的现住址分到地方，时点 2025-12-31（2026-04-29 发布）；**城市（定居点）与市镇（община）分开写**；
  // 内塞伯尔年度数比 2021 年普查高出五成（原因未查明），改用 2021 年普查数。admin1 用 28 个州（област）。机场坐标取 OurAirports。
  {
    id: "sofia", nameZh: "索非亚", nameEn: "Sofia", country: "bulgaria", tier: "capital", zone: "bg-west",
    admin1Zh: "索非亚市州", admin1En: "Sofia City Province",
    lon: 23.3217, lat: 42.6979,
    airport: { iata: "SOF", nameZh: "索非亚机场", nameEn: "Sofia Airport", lon: 23.417671, lat: 42.696357 },
    source: "索非亚市中心（拉尔戈 / 圣涅代利亚一带）42.6979,23.3217（Wikidata Q472）；SOF 机场 OurAirports 42.6964,23.4177，距市中心直线约 7.8 km（按坐标算）；地铁 M4 通到机场（Metropoliten EAD 官网，1 级）",
  },
  {
    id: "plovdiv", nameZh: "普罗夫迪夫", nameEn: "Plovdiv", country: "bulgaria", tier: "major", zone: "bg-south",
    admin1Zh: "普罗夫迪夫州", admin1En: "Plovdiv Province",
    lon: 24.7415, lat: 42.1421,
    airport: { iata: "PDV", nameZh: "普罗夫迪夫机场", nameEn: "Plovdiv Airport", lon: 24.8508, lat: 42.067799 },
    source: "普罗夫迪夫市中心（主步行街一带）42.1421,24.7415（Wikidata Q459）；PDV 机场 OurAirports 42.0678,24.8508，距市中心直线约 12.2 km（按坐标算；机场官网「东南 12 km」，1 级）；无国内定期航线",
  },
  {
    id: "varna", nameZh: "瓦尔纳", nameEn: "Varna", country: "bulgaria", tier: "major", zone: "bg-coast",
    admin1Zh: "瓦尔纳州", admin1En: "Varna Province",
    lon: 27.9111, lat: 43.2114,
    airport: { iata: "VAR", nameZh: "瓦尔纳机场", nameEn: "Varna Airport", lon: 27.8251, lat: 43.232101 },
    source: "瓦尔纳市中心 43.2114,27.9111（Wikidata Q6506）；VAR 机场 OurAirports 43.2321,27.8251，距市中心直线约 7.3 km（按坐标算）；有飞往索非亚的国内定期航班（瓦尔纳机场官网航班屏 2026-09-14/15 快照，1 级）；409 路公交往返市中心（机场官网，1 级，核实 2026-09-15）",
  },
  {
    id: "burgas", nameZh: "布尔加斯", nameEn: "Burgas", country: "bulgaria", tier: "major", zone: "bg-coast",
    admin1Zh: "布尔加斯州", admin1En: "Burgas Province",
    lon: 27.4702, lat: 42.5030,
    airport: { iata: "BOJ", nameZh: "布尔加斯机场", nameEn: "Burgas Airport", lon: 27.515173, lat: 42.569917 },
    source: "布尔加斯市中心 42.5030,27.4702（Wikidata Q6509）；BOJ 机场 OurAirports 42.5699,27.5152，距市中心直线约 8.3 km（按坐标算）；有飞往索非亚的国内定期航班（保加利亚航空官网目的地页，1 级；机场航班屏未能读取）",
  },
  {
    id: "veliko-tarnovo", nameZh: "大特尔诺沃", nameEn: "Veliko Tarnovo", country: "bulgaria", tier: "notable", zone: "bg-north",
    admin1Zh: "大特尔诺沃州", admin1En: "Veliko Tarnovo Province",
    lon: 25.6283, lat: 43.0787,
    source: "大特尔诺沃市中心 43.0787,25.6283（Wikidata Q173474；察雷韦茨要塞在其东约 2 km）；附近的戈尔纳奥里亚霍维察机场（GOZ，直线约 10.6 km）无定期客运航班（OurAirports scheduled=no），不填 airport",
  },
  {
    id: "ruse", nameZh: "鲁塞", nameEn: "Ruse", country: "bulgaria", tier: "major", zone: "bg-north",
    admin1Zh: "鲁塞州", admin1En: "Ruse Province",
    lon: 25.9539, lat: 43.8445,
    source: "鲁塞市中心 43.8445,25.9539（Wikidata Q160173）；鲁塞机场（ROU，直线约 18.6 km）无定期客运航班（OurAirports scheduled=no），不填 airport；城市位于多瑙河右岸，界河与对岸不写",
  },
  {
    id: "nesebar", nameZh: "内塞伯尔", nameEn: "Nesebar", country: "bulgaria", tier: "notable", zone: "bg-coast",
    admin1Zh: "布尔加斯州", admin1En: "Burgas Province",
    lon: 27.7360, lat: 42.6591,
    airport: { iata: "BOJ", nameZh: "布尔加斯机场", nameEn: "Burgas Airport", lon: 27.515173, lat: 42.569917 },
    source: "内塞伯尔老城 42.6591,27.7360（UNESCO 开放数据 id 217；Wikidata 城市点在新城一侧约 0.9 km 外）；最近的有定期航班机场为布尔加斯 BOJ，距老城直线约 20.6 km（按坐标算，参照罗马尼亚康斯坦察 24 km 照填的先例）",
  },
  {
    id: "bansko", nameZh: "班斯科", nameEn: "Bansko", country: "bulgaria", tier: "notable", zone: "bg-south",
    admin1Zh: "布拉戈耶夫格勒州", admin1En: "Blagoevgrad Province",
    lon: 23.4888, lat: 41.8385,
    source: "班斯科镇中心 41.8385,23.4888（Wikidata Q391159）；无机场，最近的有定期航班机场为索非亚 SOF，直线约 95.6 km（按坐标算），不填 airport；正文不写邻国与区域政治名称",
  },
  {
    id: "kazanlak", nameZh: "卡赞勒克", nameEn: "Kazanlak", country: "bulgaria", tier: "notable", zone: "bg-south",
    admin1Zh: "旧扎戈拉州", admin1En: "Stara Zagora Province",
    lon: 25.3932, lat: 42.6188,
    source: "卡赞勒克镇中心 42.6188,25.3932（Wikidata Q192926）；无机场，最近的有定期航班机场为普罗夫迪夫 PDV，直线约 75.8 km（按坐标算），不填 airport；UNESCO 中文名作「卡赞利克的色雷斯古墓」",
  },
];
