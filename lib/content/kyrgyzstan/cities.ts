import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 吉尔吉斯斯坦 ──
  // 中亚次区域。安全与零争议前置判断：英国外交部旅行建议（2026-09-14）只对吉塔边境巴特肯州一带有地区性提示；
  // 按「城市离国界 < 20 km 不收」：奥什（约 5 km）、托克莫克、凯明、坎特、贾拉拉巴德（约 10 km，统计表已写作马纳斯市）不收；比什凯克离国界约 17 km，首都照收但正文不写国界、口岸与邻国。
  // 条目只写地理、制度、建筑与交通；**不写族群构成与迁入史、宗教评价（清真寺 / 教堂只作建筑）、沙俄建城与移民叙事、苏联时期政治与军事、2005 / 2010 / 2020 年事件、改名史、现任领导人**。
  // 人口口径：国家统计委员会 **2026-01-01 常住人口估算**（表 769 / 825；村一级为村政府数据）；admin1 用 7 个州 + 比什凯克市（共和国直辖，与州同级）。
  // 玛纳斯国际机场 IATA 代码 2025-08-09 起由 FRU 改为 BSZ（机场公司官网，1 级）；纳伦、塔拉斯机场有定期航班但没有 IATA 代码，不填 airport 字段；塔姆奇（伊塞克湖国际机场）只有夏季季节航班，乔尔蓬阿塔不填。
  {
    id: "bishkek", nameZh: "比什凯克", nameEn: "Bishkek", country: "kyrgyzstan", tier: "capital", zone: "kg-north",
    admin1Zh: "比什凯克市", admin1En: "Bishkek City",
    lon: 74.6039, lat: 42.8764,
    airport: { iata: "BSZ", nameZh: "玛纳斯国际机场", nameEn: "Manas International Airport", lon: 74.4776, lat: 43.061298 },
    source: "比什凯克市中心（阿拉套广场）42.8764,74.6039（Wikidata Q2988303）；BSZ 机场 OurAirports 43.0613,74.4776，距广场直线约 23 km（按坐标算）；IATA 代码 2025-08-09 由 FRU 改 BSZ（airport.kg 官网新闻，1 级）；有国际与国内定期航班（玛纳斯机场航班屏 2026-09-14/16，1 级）",
  },
  {
    id: "karakol", nameZh: "卡拉科尔", nameEn: "Karakol", country: "kyrgyzstan", tier: "notable", zone: "kg-issykkul",
    admin1Zh: "伊塞克湖州", admin1En: "Issyk-Kul Region",
    lon: 78.3936, lat: 42.4906,
    airport: { iata: "IKG", nameZh: "卡拉科尔国际机场", nameEn: "Karakol International Airport", lon: 78.407799, lat: 42.508099 },
    source: "卡拉科尔中心 42.4906,78.3936（Wikidata Q194452）；伊塞克湖州州府（gov.kg 伊塞克湖州页，1 级）；IKG 机场 OurAirports 42.5081,78.4078，距市中心直线约 2.3 km；Asman Airlines 往返比什凯克的定期航班（航司接口 2026-09-15 查询 9-18 至 10-23 每周五、周日，1 级）",
  },
  {
    id: "cholpon-ata", nameZh: "乔尔蓬阿塔", nameEn: "Cholpon-Ata", country: "kyrgyzstan", tier: "notable", zone: "kg-issykkul",
    admin1Zh: "伊塞克湖州", admin1En: "Issyk-Kul Region",
    lon: 77.0822, lat: 42.6494,
    source: "乔尔蓬阿塔中心 42.6494,77.0822（Wikidata Q1017314）；伊塞克湖区区中心（统计表 825 列于伊塞克湖区下，1 级）；伊塞克湖国际机场（塔姆奇 IKU，OurAirports 42.5856,76.7012）距市中心直线约 32 km，只有夏季季节航班（2026-09-15 Asman 航线网络中无，1 级；夏季阿拉木图 / 塔什干季节航线，2 级），条目不写机场字段",
  },
  {
    id: "balykchy", nameZh: "巴雷克奇", nameEn: "Balykchy", country: "kyrgyzstan", tier: "notable", zone: "kg-issykkul",
    admin1Zh: "伊塞克湖州", admin1En: "Issyk-Kul Region",
    lon: 76.1833, lat: 42.4667,
    source: "巴雷克奇中心 42.4667,76.1833（Wikidata Q805876）；伊塞克湖州的州级市（统计表 769，1 级）；本地机场已关闭（OurAirports 标 closed，3 级；airport.kg 机场表无，1 级），伊塞克湖国际机场直线约 44 km、只有夏季季节航班，条目不写机场字段；夏季旅游列车终点「巴雷克奇海滨」站 42.4610,76.2245（OSM）",
  },
  {
    id: "naryn", nameZh: "纳伦", nameEn: "Naryn", country: "kyrgyzstan", tier: "notable", zone: "kg-inner",
    admin1Zh: "纳伦州", admin1En: "Naryn Region",
    lon: 76.0000, lat: 41.4333,
    source: "纳伦中心 41.4333,76.0000（Wikidata Q311946）；纳伦州州府、州内唯一的市（统计表 769，1 级）；纳伦机场 OurAirports 41.4415,76.1306，距市中心直线约 10.9 km，无 IATA 代码，Asman Airlines MN51/52 往返比什凯克（机场航班屏 2026-09-14/16 与航司接口，1 级），因无 IATA 不填机场字段",
  },
  {
    id: "talas", nameZh: "塔拉斯", nameEn: "Talas", country: "kyrgyzstan", tier: "notable", zone: "kg-north",
    admin1Zh: "塔拉斯州", admin1En: "Talas Region",
    lon: 72.2333, lat: 42.5167,
    source: "塔拉斯中心 42.5167,72.2333（Wikidata Q643955）；塔拉斯州州府、州内唯一的市（统计表 769，1 级）；塔拉斯机场 OurAirports 42.5059,72.2631，距市中心直线约 2.7 km，无 IATA 代码，Asman Airlines MN71/72 往返比什凯克（机场航班屏与航司接口，1 级），因无 IATA 不填机场字段；城市离国界约 26 km，正文不写邻国与过境路线；玛纳斯宫帐离国界约 19 km，不作 POI",
  },
  {
    id: "kochkor", nameZh: "科奇科尔", nameEn: "Kochkor", country: "kyrgyzstan", tier: "notable", zone: "kg-inner",
    admin1Zh: "纳伦州", admin1En: "Naryn Region",
    lon: 75.7555, lat: 42.2157,
    source: "科奇科尔中心 42.2157,75.7555（Wikidata Q2349614）；纳伦州科奇科尔区区中心，行政上是村（统计表 825 列为 с. Кочкор，1 级）；没有定期航班的机场（OurAirports 无条目、airport.kg 机场表无），最近有定期航班的纳伦机场直线约 89 km；距松湖（地形锚点）直线约 64 km（按坐标算）",
  },
  {
    id: "bokonbayevo", nameZh: "博孔巴耶沃", nameEn: "Bokonbayevo", country: "kyrgyzstan", tier: "notable", zone: "kg-issykkul",
    admin1Zh: "伊塞克湖州", admin1En: "Issyk-Kul Region",
    lon: 76.9889, lat: 42.1161,
    source: "博孔巴耶沃村中心 42.1161,76.9889（OSM）；伊塞克湖州通区下的村（统计委员会表 825，1 级）；没有定期航班的机场（airport.kg 机场表无，1 级），塔姆奇的伊塞克湖国际机场只有季节性航班、直线约 57 km；离国界约 90 km（已有城市补充批，2026-09-16）；Wikidata 无中文标签，译名按俄文 Боконбаево 音译",
  },
  {
    id: "at-bashy", nameZh: "阿特巴什", nameEn: "At-Bashy", country: "kyrgyzstan", tier: "notable", zone: "kg-inner",
    admin1Zh: "纳伦州", admin1En: "Naryn Region",
    lon: 75.8144, lat: 41.1689,
    source: "阿特巴什村中心 41.1689,75.8144（OSM）；纳伦州阿特巴什区下的村（统计委员会表 825，1 级）；没有定期航班的机场，纳伦机场直线约 40 km、有 Asman 往返比什凯克航班但无 IATA 码，不填 airport；离国界约 59 km（已有城市补充批，2026-09-16）；中文译名沿用仓库地形条目「阿特巴什山」（Wikidata zh 作「阿特巴希」）",
  },
  {
    id: "kara-balta", nameZh: "卡拉巴尔塔", nameEn: "Kara-Balta", country: "kyrgyzstan", tier: "notable", zone: "kg-north", admin1Zh: "楚河州", admin1En: "Chuy Region",
    lon: 73.8521, lat: 42.8016,
    source: "卡拉巴尔塔市政府大楼 42.8016,73.8521（OSM way/176363638）；市域内的机场与直升机坪在 OurAirports 里均标 closed、25 km 内无有定期航班的机场，最近的是玛纳斯国际机场（BSZ）直线约 59 km —— 不填 airport；离国界约 28 km；与地形条目 chuy-valley、kyrgyz-ala-too、suusamyr-valley 互指（已有城市补充批，2026-09-16）",
  },
  {
    id: "toktogul", nameZh: "托克托古尔", nameEn: "Toktogul", country: "kyrgyzstan", tier: "notable", zone: "kg-west", admin1Zh: "贾拉拉巴德州", admin1En: "Jalal-Abad Region",
    lon: 72.9397, lat: 41.8702,
    source: "托克托古尔市政府 41.8702,72.9397（OSM way/191268826，office=government，与市政府官网公布的街名一致）；市域西边约 6.5 km 的机场 scheduled_service=no，不填 airport —— 直线最近的两个有定期航班的机场所在城市离国界都不足 10 km、仓库本来就不收，正文因此只写「进出靠公路」，不点名（见注释）；离国界约 71 km；与地形条目 toktogul-reservoir、naryn-river 互指（已有城市补充批，2026-09-16）",
  },
];
