import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  {
    id: "jakarta", nameZh: "雅加达", nameEn: "Jakarta", country: "indonesia", tier: "capital", zone: "id-java", admin1Zh: "雅加达首都特区", admin1En: "DKI Jakarta",
    lon: 106.8456, lat: -6.2088,
    airport: { iata: "CGK", nameZh: "苏加诺—哈达国际机场", nameEn: "Soekarno-Hatta International Airport", lon: 106.6559, lat: -6.1256 },
    source: "雅加达市中心 -6.2088,106.8456；CGK机场（距市区直线约 23 km，按本条目坐标算）：公开资料",
  },
  {
    id: "yogyakarta", nameZh: "日惹", nameEn: "Yogyakarta", country: "indonesia", tier: "major", zone: "id-java", admin1Zh: "日惹特区", admin1En: "DI Yogyakarta",
    lon: 110.3695, lat: -7.7956,
    airport: { iata: "YIA", nameZh: "日惹国际机场", nameEn: "Yogyakarta International Airport", lon: 110.0570, lat: -7.9004 },
    source: "日惹市中心 -7.7956,110.3695；YIA机场2019年启用（距市区约45km），已于2020年3月起全面取代原阿迪苏芝普托机场：公开资料/Wikipedia",
  },
  {
    id: "denpasar", nameZh: "登巴萨", nameEn: "Denpasar", country: "indonesia", tier: "major", zone: "id-bali", admin1Zh: "巴厘省", admin1En: "Bali",
    lon: 115.2126, lat: -8.6705,
    airport: { iata: "DPS", nameZh: "伍拉赖国际机场", nameEn: "Ngurah Rai International Airport", lon: 115.1667, lat: -8.7467 },
    source: "登巴萨市中心 -8.6705,115.2126；DPS机场（距市区约13km）：公开资料",
  },
  {
    id: "surabaya", nameZh: "泗水", nameEn: "Surabaya", country: "indonesia", tier: "major", zone: "id-java", admin1Zh: "东爪哇省", admin1En: "East Java",
    lon: 112.7521, lat: -7.2575,
    airport: { iata: "SUB", nameZh: "朱安达国际机场", nameEn: "Juanda International Airport", lon: 112.7869, lat: -7.3798 },
    source: "泗水市中心 -7.2575,112.7521；SUB机场（距市区约20km）：公开资料",
  },
  {
    id: "bandung", nameZh: "万隆", nameEn: "Bandung", country: "indonesia", tier: "major", zone: "id-java", admin1Zh: "西爪哇省", admin1En: "West Java",
    lon: 107.6191, lat: -6.9175,
    airport: { iata: "BDO", nameZh: "胡先·沙斯特拉内加拉机场", nameEn: "Husein Sastranegara International Airport", lon: 107.5764, lat: -6.9006 },
    source: "万隆市中心 -6.9175,107.6191；BDO机场（距市区约4km，以国内航线为主）：公开资料",
  },
  {
    id: "medan", nameZh: "棉兰", nameEn: "Medan", country: "indonesia", tier: "major", zone: "id-sumatra", admin1Zh: "北苏门答腊省", admin1En: "North Sumatra",
    lon: 98.6722, lat: 3.5952,
    airport: { iata: "KNO", nameZh: "瓜拉纳姆国际机场", nameEn: "Kualanamu International Airport", lon: 98.8853, lat: 3.6422 },
    source: "棉兰市中心 3.5952,98.6722；KNO机场（距市区约39km）：公开资料",
  },
  {
    id: "makassar", nameZh: "望加锡", nameEn: "Makassar", country: "indonesia", tier: "major", zone: "id-sulawesi", admin1Zh: "南苏拉威西省", admin1En: "South Sulawesi",
    lon: 119.4327, lat: -5.1477,
    airport: { iata: "UPG", nameZh: "苏丹哈桑努丁国际机场", nameEn: "Sultan Hasanuddin International Airport", lon: 119.5541, lat: -5.0616 },
    source: "望加锡市中心 -5.1477,119.4327；UPG机场（距市区约21km）：公开资料",
  },
  {
    id: "labuan-bajo", nameZh: "拉布安巴焦", nameEn: "Labuan Bajo", country: "indonesia", tier: "notable", zone: "id-nusa-tenggara", admin1Zh: "东努沙登加拉省", admin1En: "East Nusa Tenggara",
    lon: 119.8936, lat: -8.4960,
    airport: { iata: "LBJ", nameZh: "科莫多机场", nameEn: "Komodo Airport", lon: 119.8892, lat: -8.4864 },
    source: "拉布安巴焦市中心 -8.4960,119.8936（OSM Nominatim「city」节点，2026-09-15 改：原坐标落在机场上）；LBJ机场（距市中心直线约1.2km）：公开资料",
  },
  {
    id: "balikpapan", nameZh: "巴厘巴板", nameEn: "Balikpapan", country: "indonesia", tier: "notable", zone: "id-kalimantan", admin1Zh: "东加里曼丹省", admin1En: "East Kalimantan",
    lon: 116.8529, lat: -1.2379,
    airport: { iata: "BPN", nameZh: "苏丹阿吉穆罕默德苏莱曼机场", nameEn: "Sultan Aji Muhammad Sulaiman Airport", lon: 116.8938, lat: -1.2683 },
    source: "巴厘巴板市中心 -1.2379,116.8529；BPN机场（距市区约11km），是通往加里曼丹东部与印尼新首都努桑塔拉建设工地的主要空中门户：公开资料",
  },
  {
    id: "manado", nameZh: "万鸦老", nameEn: "Manado", country: "indonesia", tier: "notable", zone: "id-sulawesi", admin1Zh: "北苏拉威西省", admin1En: "North Sulawesi",
    lon: 124.8421, lat: 1.4748,
    airport: { iata: "MDC", nameZh: "萨姆拉图兰吉国际机场", nameEn: "Sam Ratulangi International Airport", lon: 124.9264, lat: 1.5492 },
    source: "万鸦老市中心 1.4748,124.8421；MDC机场（距市区约13km）：公开资料",
  },
  {
    id: "pangkalan-bun", nameZh: "邦卡兰文", nameEn: "Pangkalan Bun", country: "indonesia", tier: "notable", zone: "id-kalimantan", admin1Zh: "中加里曼丹省", admin1En: "Central Kalimantan",
    lon: 111.6165, lat: -2.6822,
    airport: { iata: "PKN", nameZh: "伊斯坎达尔机场", nameEn: "Iskandar Airport", lon: 111.6725, lat: -2.7048 },
    source: "邦卡兰文市中心 -2.6822,111.6165；PKN机场（距市区直线约 7 km，按本条目坐标算），是前往丹绒普丁国家公园的主要门户：公开资料",
  },
  {
    id: "semarang", nameZh: "三宝垄", nameEn: "Semarang", country: "indonesia", tier: "major", zone: "id-java", admin1Zh: "中爪哇省", admin1En: "Central Java",
    lon: 110.4229, lat: -6.9904,
    airport: { iata: "SRG", nameZh: "艾哈迈德·亚尼将军机场", nameEn: "Jenderal Ahmad Yani Airport", lon: 110.3732, lat: -6.9707 },
    source: "三宝垄市中心（老城与五岔路广场之间）-6.9903988,110.4229104（OSM Nominatim r12 行政多边形中心）；SRG OurAirports -6.9707,110.3732，直线约 6 km，有国内与国际定期航班；注：同名的三宝垄县（Kabupaten Semarang）是另一个政府、驻温加兰（已有城市补充批，2026-09-16）",
  },
  {
    id: "mataram", nameZh: "马塔兰", nameEn: "Mataram", country: "indonesia", tier: "notable", zone: "id-nusa-tenggara", admin1Zh: "西努沙登加拉省", admin1En: "West Nusa Tenggara",
    lon: 116.1069, lat: -8.5838,
    airport: { iata: "LOP", nameZh: "龙目国际机场", nameEn: "Lombok International Airport", lon: 116.2782, lat: -8.7600 },
    source: "马塔兰市中心 -8.5837726,116.1068500（OSM Nominatim r12 行政多边形中心）；LOP OurAirports -8.7600,116.2782，直线约 27 km，有定期航班 —— 机场在中龙目县普朱特、不在本市市域内，正文写明（已有城市补充批，2026-09-16）",
  },
  {
    id: "palembang", nameZh: "巨港", nameEn: "Palembang", country: "indonesia", tier: "major", zone: "id-sumatra", admin1Zh: "南苏门答腊省", admin1En: "South Sumatra",
    lon: 104.756728, lat: -2.991045,
    airport: { iata: "PLM", nameZh: "苏丹马哈茂德·巴达鲁丁二世机场", nameEn: "Sultan Mahmud Badaruddin II Airport", lon: 104.698147, lat: -2.897653 },
    source: "巨港市长办公楼（旧水塔楼）-2.991045,104.756728（OSM way/605453912）；PLM 直线约 12 km、**在本市市域内**（苏卡拉米区），有国内与国际定期航班 —— 与本库马塔兰 LOP、三宝垄 SRG 的「机场在隔壁县」不同，正文可以正面写；⚠️ 该机场的国际身份 2024 年被撤销、2025 年恢复，正文带年份；与地形条目 krakatoa、lake-toba 所在的苏门答腊一侧呼应（本库无穆西河条目）（已有城市补充批，2026-09-17）",
  },
  {
    id: "banjarmasin", nameZh: "班贾尔马辛", nameEn: "Banjarmasin", country: "indonesia", tier: "major", zone: "id-kalimantan", admin1Zh: "南加里曼丹省", admin1En: "South Kalimantan",
    lon: 114.588732, lat: -3.327742,
    airport: { iata: "BDJ", nameZh: "沙姆苏丁·努尔国际机场", nameEn: "Syamsudin Noor International Airport", lon: 114.761209, lat: -3.440112 },
    source: "班贾尔马辛市政厅 -3.327742,114.588732（OSM way/558907717 amenity=townhall）；BDJ 直线约 23 km、有定期航班，**机场在班贾尔巴鲁市、不在本市市域** —— 与「省会 2022 年也搬到了班贾尔巴鲁」是同一条线索；比照既有做法仍填 airport；与地形条目 kapuas-river、tanjung-puting 所在的加里曼丹一侧呼应（本库无巴里托河条目）（已有城市补充批，2026-09-17）",
  },
];
