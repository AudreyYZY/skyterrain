import type { CityEntry } from "@/lib/places-registry";

export const CITIES: CityEntry[] = [
  // ── 南非 ──
  // 人口统一取 Stats SA《Census 2022 Municipal Fact Sheet》（Report 03-01-82，1 级）的市镇
  // 全域（municipality）口径——南非官方统计体系没有「市区/建成区」这一档，正文一律写明
  // 「市镇全域」并注明是否含都会自治市（8 个之一）还是地方自治市。机场坐标取 OurAirports
  // 2026-09-22 离线表并与航司/机场官网交叉；只有核实到当前定期客运的机场才填 airport。
  {
    id: "pretoria", nameZh: "比勒陀利亚", nameEn: "Pretoria", country: "south-africa", tier: "capital", zone: "za-gauteng",
    admin1Zh: "豪登省", admin1En: "Gauteng",
    lon: 28.1881, lat: -25.7461,
    source: "市中心 -25.7461,28.1881（Wikidata Q3926）；所属茨瓦内都会自治市（City of Tshwane）2022 年普查全域人口 4,040,315（Stats SA Census 2022 Municipal Fact Sheet，1 级）；本地 Wonderboom 机场（PRY）仅有少量包机/公务机、无定期商业客运，不填 airport；国际/国内定期航班共用约翰内斯堡 OR Tambo 国际机场",
  },
  {
    id: "cape-town", nameZh: "开普敦", nameEn: "Cape Town", country: "south-africa", tier: "capital", zone: "za-western-cape",
    admin1Zh: "西开普省", admin1En: "Western Cape",
    lon: 18.4241, lat: -33.9249,
    airport: { iata: "CPT", nameZh: "开普敦国际机场", nameEn: "Cape Town International Airport", lon: 18.6017, lat: -33.9648 },
    source: "市中心 -33.9249,18.4241（Wikidata Q5465）；开普敦都会自治市 2022 年普查全域人口 4,772,846（Stats SA Census 2022 Municipal Fact Sheet，1 级）；CPT 坐标 OurAirports -33.9648,18.6017，本国第二繁忙机场",
  },
  {
    id: "bloemfontein", nameZh: "布隆方丹", nameEn: "Bloemfontein", country: "south-africa", tier: "capital", zone: "za-free-state",
    admin1Zh: "自由州省", admin1En: "Free State",
    lon: 26.1596, lat: -29.0852,
    airport: { iata: "BFN", nameZh: "布拉姆·菲舍尔国际机场", nameEn: "Bram Fischer International Airport", lon: 26.3024, lat: -29.0927 },
    source: "市中心 -29.0852,26.1596（Wikidata Q182881）；所属曼夸恩都会自治市（Mangaung）2022 年普查全域人口 811,431，含布隆方丹本身、博茨哈贝洛、塔巴恩楚三部分（Stats SA Census 2022 Municipal Fact Sheet，1 级）；BFN 坐标 OurAirports -29.0927,26.3024",
  },
  {
    id: "johannesburg", nameZh: "约翰内斯堡", nameEn: "Johannesburg", country: "south-africa", tier: "major", zone: "za-gauteng",
    admin1Zh: "豪登省", admin1En: "Gauteng",
    lon: 28.0473, lat: -26.2041,
    airport: { iata: "JNB", nameZh: "OR·坦博国际机场", nameEn: "OR Tambo International Airport", lon: 28.246, lat: -26.1392 },
    source: "市中心 -26.2041,28.0473（Wikidata Q3630）；约翰内斯堡都会自治市 2022 年普查全域人口 4,803,262，是全国人口最多的单一都会自治市（Stats SA Census 2022 Municipal Fact Sheet，1 级）；JNB 坐标 OurAirports -26.1392,28.246，实际位于埃库尔勒尼都会自治市境内（肯普顿公园附近），机场品牌与约翰内斯堡绑定但行政归属另一城市",
  },
  {
    id: "durban", nameZh: "德班", nameEn: "Durban", country: "south-africa", tier: "major", zone: "za-kwazulu-natal",
    admin1Zh: "夸祖鲁-纳塔尔省", admin1En: "KwaZulu-Natal",
    lon: 31.0218, lat: -29.8587,
    airport: { iata: "DUR", nameZh: "沙卡国王国际机场", nameEn: "King Shaka International Airport", lon: 31.1197, lat: -29.6144 },
    source: "市中心 -29.8587,31.0218（Wikidata Q999891）；埃塔科维尼都会自治市 2022 年普查全域人口 4,239,901，是夸祖鲁-纳塔尔省最大城市但非省会（省会彼得马里茨堡，Stats SA Census 2022 Municipal Fact Sheet，1 级）；DUR 坐标 OurAirports -29.6144,31.1197，2010 年世界杯前新建启用",
  },
  {
    id: "gqeberha", nameZh: "格贝哈", nameEn: "Gqeberha", country: "south-africa", tier: "major", zone: "za-eastern-cape",
    admin1Zh: "东开普省", admin1En: "Eastern Cape",
    lon: 25.6022, lat: -33.9608,
    airport: { iata: "PLZ", nameZh: "大卫·斯图尔曼酋长国际机场", nameEn: "Chief Dawid Stuurman International Airport", lon: 25.6173, lat: -33.9849 },
    source: "市中心 -33.9608,25.6022（Wikidata Q131491）；所属纳尔逊曼德拉湾都会自治市 2022 年普查全域人口 1,190,496（Stats SA Census 2022 Municipal Fact Sheet，1 级）；城市 2021-02-23 由伊丽莎白港（Port Elizabeth）正式宪报改名为科萨语地名格贝哈，同批机场改名，PLZ 坐标 OurAirports -33.9849,25.6173；⚠️ 中文译名未找到官方一级来源，采用中文维基「格贝哈」通行译法",
  },
  {
    id: "stellenbosch", nameZh: "斯泰伦博斯", nameEn: "Stellenbosch", country: "south-africa", tier: "notable", zone: "za-western-cape",
    admin1Zh: "西开普省", admin1En: "Western Cape",
    lon: 18.8602, lat: -33.9321,
    source: "市中心 -33.9321,18.8602（Wikidata Q193284）；斯泰伦博斯地方自治市 2022 年普查全域人口 175,411，隶属开普酒乡区自治市（Stats SA Census 2022 Municipal Fact Sheet，1 级）；本地无机场，最近有定期客运的是开普敦国际机场，不填 airport 字段",
  },
  {
    id: "polokwane", nameZh: "波罗奎瓦内", nameEn: "Polokwane", country: "south-africa", tier: "notable", zone: "za-limpopo",
    admin1Zh: "林波波省", admin1En: "Limpopo",
    lon: 29.4689, lat: -23.9045,
    airport: { iata: "PTG", nameZh: "波罗奎瓦内国际机场", nameEn: "Polokwane International Airport", lon: 29.4587, lat: -23.8497 },
    source: "市中心 -23.9045,29.4689（Wikidata Q473261）；波罗奎瓦内地方自治市 2022 年普查全域人口 843,459，隶属卡普里科恩区自治市，是林波波省省会（Stats SA Census 2022 Municipal Fact Sheet，1 级）；PTG 坐标 OurAirports -23.8497,29.4587，2023-03 起每日定期往返约翰内斯堡（Wikipedia「Polokwane International Airport」，2 级）",
  },
];
