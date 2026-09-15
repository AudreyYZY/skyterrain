import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 斯里兰卡 ──
  // 南亚次区域。安全与零争议前置判断：英国外交部旅行建议（2026-05-26）只对北部（军事存在、排雷区、高度安全区）与东部部分排雷地区有地区性提示 ——
  // 北部省（贾夫纳等）与马纳尔一带不收；亭可马里（东部省，城内港口与军事设施密集、可写地标不足）本批不收；拜蒂克洛不收。
  // 条目只写地理、制度、建筑、交通与参观礼仪；**不写族群与宗教人口比例、宗教评价与传说、内战与 2019 年复活节袭击、2022 年事件、港口与军事设施、政治人物**。
  // 人口口径：统计局 2024 年人口与住房普查（时点 2024-12-19，常住口径）；公开表只到县 / 分区秘书处（DS）/ 村官区（GN），**没有市议会辖区人口**，所以城市人口写「分区秘书处」，只有科特能确认 DS = 市议会辖区。
  // 只有科伦坡班达拉奈克国际机场（CMB）有常规定期航班；锡吉里耶、科加拉等只有 Cinnamon Air 季节性小型航班 —— 除科伦坡外一律不填 airport 字段。
  {
    id: "sri-jayawardenepura-kotte", nameZh: "斯里贾亚瓦德纳普拉科特", nameEn: "Sri Jayawardenepura Kotte", country: "sri-lanka", tier: "capital", zone: "lk-west",
    admin1Zh: "西部省", admin1En: "Western Province",
    lon: 79.9164, lat: 6.9000,
    source: "科特市中心 6.9000,79.9164（Wikidata Q41963）；议会大厦 6.8868,79.9187（Wikidata；政府建筑，不作 POI）；科特市议会官网：1985-01-29 起被宣布为首都（引 1985-02-06 特别公报）；议会 1982-04-29 在科特迪亚瓦纳湖岛上启用（议会官网，1 级），陆地面积约 1,674 公顷，辖区 20 个村官区（1 级）；与科伦坡市中心直线约 6.8 km（按坐标算）；CMB 直线约 31 km，条目不写机场字段",
  },
  {
    id: "colombo", nameZh: "科伦坡", nameEn: "Colombo", country: "sri-lanka", tier: "major", zone: "lk-west",
    admin1Zh: "西部省", admin1En: "Western Province",
    lon: 79.8606, lat: 6.9267,
    airport: { iata: "CMB", nameZh: "班达拉奈克国际机场", nameEn: "Bandaranaike International Airport", lon: 79.8841, lat: 7.18076 },
    source: "科伦坡市中心 6.9267,79.8606（Wikidata Q35381）；CMB 机场 OurAirports 7.1808,79.8841，在加姆珀哈县卡图纳耶克，距科伦坡市中心直线约 28 km、距尼甘布约 6 km（按坐标算）；有国际定期航班（机场运营方 AASL 周时刻表 2026-09-15，1 级）",
  },
  {
    id: "kandy", nameZh: "康提", nameEn: "Kandy", country: "sri-lanka", tier: "major", zone: "lk-hill",
    admin1Zh: "中部省", admin1En: "Central Province",
    lon: 80.6350, lat: 7.2931,
    source: "康提中心 7.2931,80.6350（Wikidata Q203197，与地形条目 kandy-plateau 锚点一致）；康提市议会依 1865 年《市政条例》设立、1866-03-20 首次开会（市议会官网，1 级）；没有常规定期航班的机场（维多利亚水库、波尔戈拉水库水上机场只有 Cinnamon Air 季节性小型航班或包机），CMB 直线约 84 km",
  },
  {
    id: "galle", nameZh: "加勒", nameEn: "Galle", country: "sri-lanka", tier: "major", zone: "lk-south",
    admin1Zh: "南部省", admin1En: "Southern Province",
    lon: 80.2156, lat: 6.0328,
    source: "加勒中心 6.0328,80.2156（Wikidata Q319366）；加勒堡 6.0275,80.2171（Wikidata）；加勒市议会 1867-01-01 设立、陆地面积约 16.5 km²（市议会官网，1 级）；没有常规定期航班的机场（科加拉只有冬季季节性小型航班），CMB 直线约 133 km",
  },
  {
    id: "nuwara-eliya", nameZh: "努沃勒埃利耶", nameEn: "Nuwara Eliya", country: "sri-lanka", tier: "notable", zone: "lk-hill",
    admin1Zh: "中部省", admin1En: "Central Province",
    lon: 80.7667, lat: 6.9667,
    source: "努沃勒埃利耶中心 6.9667,80.7667（Wikidata Q1340579）；海拔 1,895 m、年均气温约 15.8 ℃（统计局《Statistical Abstract 2025》第 1 章，1 级）；最近火车站努沃拉尔（Nanu Oya）6.9424,80.7437 距市中心直线约 3.7 km（按坐标算）；没有常规定期航班的机场",
  },
  {
    id: "ella", nameZh: "埃拉", nameEn: "Ella", country: "sri-lanka", tier: "notable", zone: "lk-hill",
    admin1Zh: "乌沃省", admin1En: "Uva Province",
    lon: 81.0383, lat: 6.8753,
    source: "埃拉中心 6.8753,81.0383（Wikidata Q14214903）；埃拉乡议会辖区（乡议会官网，1 级）；埃拉站 6.8762,81.0475（OSM）；努沃拉尔—巴杜勒段铁路 2026-06-20 恢复客运（The Sunday Times 2026-06-21，2 级）；没有常规定期航班的机场",
  },
  {
    id: "negombo", nameZh: "尼甘布", nameEn: "Negombo", country: "sri-lanka", tier: "notable", zone: "lk-west",
    admin1Zh: "西部省", admin1En: "Western Province",
    lon: 79.8386, lat: 7.2111,
    source: "尼甘布中心 7.2111,79.8386（Wikidata Q668616；译名与地形条目 negombo-lagoon 一致）；班达拉奈克国际机场 CMB 在城东南，距市中心直线约 6 km（按坐标算），机场不在尼甘布市议会辖区内，条目不写机场字段",
  },
  {
    id: "anuradhapura", nameZh: "阿努拉德普勒", nameEn: "Anuradhapura", country: "sri-lanka", tier: "major", zone: "lk-dry-zone",
    admin1Zh: "北中部省", admin1En: "North Central Province",
    lon: 80.4108, lat: 8.3350,
    source: "阿努拉德普勒中心 8.3350,80.4108（Wikidata Q5724，与地形条目 sri-lanka-dry-zone-plain 锚点一致）；UNESCO 200「阿努拉德普勒圣城」1982（1 级）；本地机场 ACJ 无定期航班，CMB 直线约 141 km；离马纳尔直线约 91 km，北中部省不在英国外交部地区性提示内",
  },
  {
    id: "dambulla", nameZh: "丹布勒", nameEn: "Dambulla", country: "sri-lanka", tier: "notable", zone: "lk-dry-zone",
    admin1Zh: "中部省", admin1En: "Central Province",
    lon: 80.6542, lat: 7.8514,
    source: "丹布勒中心 7.8514,80.6542（Wikidata Q377343）；丹布勒市议会（普查表，1 级）；UNESCO 561「丹布勒金寺」1991、202「锡吉里耶古城」1982（1 级）；锡吉里耶岩距丹布勒中心直线约 16.5 km（按坐标算）；锡吉里耶机场只有季节性小型航班，条目不写机场字段",
  },
  {
    id: "polonnaruwa", nameZh: "波隆纳鲁沃", nameEn: "Polonnaruwa", country: "sri-lanka", tier: "notable", zone: "lk-dry-zone",
    admin1Zh: "北中部省", admin1En: "North Central Province",
    lon: 81.0000, lat: 7.9333,
    source: "波隆纳鲁沃 7.9333,81.0000（Wikidata，落在古城区与帕拉克拉马湖之间）；UNESCO 201「波隆纳鲁沃古城」1982（1 级）；本地没有定期航班的机场，CMB 直线约 149 km，按既有斯里兰卡口径不填 airport；离亭可马里、拜蒂克洛两城直线均 > 70 km（已有城市补充批，2026-09-16）",
  },
];
