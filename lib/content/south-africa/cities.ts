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
  // ── 南非旅游模式批 2（2026-09-22）── 人口口径续用 Stats SA Census 2022 Municipal Fact Sheet。
  {
    id: "ekurhuleni", nameZh: "埃库尔勒尼", nameEn: "Ekurhuleni", country: "south-africa", tier: "major", zone: "za-gauteng",
    admin1Zh: "豪登省", admin1En: "Gauteng",
    lon: 28.1672, lat: -26.2178,
    source: "锚点取日耳曼斯顿（Germiston，埃库尔勒尼都会自治市行政总部所在），坐标 26°13'4\"S,28°10'2\"E（2 级，Wikipedia「Germiston」+Wikidata Q993721 交叉）；埃库尔勒尼都会自治市 2022 年普查全域人口 4,066,691，全国都会自治市人口第四（约翰内斯堡/开普敦/德班之后，⚠️ 核实更正 2026-09-22：原写「第三」有误，Stats SA Census 2022 Municipal Fact Sheet，1 级）；OR·坦博国际机场（JNB）实际位于本市境内（肯普顿公园附近）但机场品牌与条目已挂在约翰内斯堡，本条目不重复填 airport 字段，避免两城市条目显示同一机场造成混淆",
  },
  {
    id: "east-london", nameZh: "东伦敦", nameEn: "East London", country: "south-africa", tier: "major", zone: "za-eastern-cape",
    admin1Zh: "东开普省", admin1En: "Eastern Cape",
    lon: 27.9116, lat: -33.0153,
    airport: { iata: "ELS", nameZh: "金法罗机场", nameEn: "King Phalo Airport", lon: 27.8258, lat: -33.0355 },
    source: "市中心 -33.0153,27.9116（Wikidata Q193339）；所属水牛城都会自治市 2022 年普查全域人口 975,255，是全国 8 个都会自治市中人口规模最小的（Stats SA Census 2022 Municipal Fact Sheet，1 级）；ELS 坐标 OurAirports -33.0355,27.8258，机场 2021-02-23 由「East London Airport」正式宪报改名为「King Phalo Airport」（2 级，多篇新闻交叉）；⚠️ 城市本身 2026-02 起处于改名为「KuGompo City」的公众异议/法律挑战阶段，尚未最终生效，条目主名维持「东伦敦」，见 travel.zh source 注释",
  },
  {
    id: "kimberley", nameZh: "金伯利", nameEn: "Kimberley", country: "south-africa", tier: "notable", zone: "za-northern-cape",
    admin1Zh: "北开普省", admin1En: "Northern Cape",
    lon: 24.7499, lat: -28.7282,
    airport: { iata: "KIM", nameZh: "金伯利机场", nameEn: "Kimberley Airport", lon: 24.7645, lat: -28.8026 },
    source: "市中心 -28.7282,24.7499（Wikidata Q184023）；所属索尔·普拉杰地方自治市 2022 年普查全域人口 270,078，隶属弗朗西斯巴尔德区自治市，是北开普省省会（Stats SA Census 2022 Municipal Fact Sheet，1 级）；KIM 坐标 OurAirports -28.8026,24.7645，Airlink 运营 JNB-KIM 与 CPT-KIM 定期航班（2026-09-21 FlightRadar24 活体追踪+Airlink 2024 排期 PDF 双源确认航班号，2 级）",
  },
  {
    id: "george", nameZh: "乔治", nameEn: "George", country: "south-africa", tier: "notable", zone: "za-western-cape",
    admin1Zh: "西开普省", admin1En: "Western Cape",
    lon: 22.4619, lat: -33.9628,
    airport: { iata: "GRJ", nameZh: "乔治机场", nameEn: "George Airport", lon: 22.3789, lat: -34.0056 },
    source: "市中心 -33.9628,22.4619（Wikidata Q473259）；乔治地方自治市 2022 年普查全域人口 294,929（2011 年 193,672，十年增速全库前列），隶属花园大道区自治市（2018 年由伊甸区自治市改名，Stats SA Census 2022 Municipal Fact Sheet 附注，1 级）；GRJ 坐标 OurAirports -34.0056,22.3789，是花园大道地区唯一有定期商业客运航班的机场，Airlink/CemAir/FlySafair 三家航司运营（2026-09-21 FlightRadar24+Airlink 排期双源确认，2 级）",
  },
  {
    id: "richards-bay", nameZh: "理查兹湾", nameEn: "Richards Bay", country: "south-africa", tier: "notable", zone: "za-kwazulu-natal",
    admin1Zh: "夸祖鲁-纳塔尔省", admin1En: "KwaZulu-Natal",
    lon: 32.0383, lat: -28.7807,
    airport: { iata: "RCB", nameZh: "理查兹湾机场", nameEn: "Richards Bay Airport", lon: 32.0917, lat: -28.7409 },
    source: "镇中心 -28.7807,32.0383（2 级，Wikipedia「Richards Bay」）；⚠️ 理查兹湾本身不是独立地方自治市，所属的乌姆赫拉图泽（uMhlathuze）地方自治市 2022 年普查全域人口 412,075，隶属国王采茨瓦约区自治市，覆盖理查兹湾镇本身及恩帕格骝加等周边城镇（Stats SA Census 2022 Municipal Fact Sheet，1 级），正文口径须写「市镇全域」；RCB 坐标 OurAirports -28.7409,32.0917，Airlink 独家运营 JNB-RCB，2023-12-04 起以 Embraer 170 取代此前更小机型（1 级色彩，richardsbayairport.co.za 官网排期页）",
  },
  {
    id: "upington", nameZh: "乌平通", nameEn: "Upington", country: "south-africa", tier: "notable", zone: "za-northern-cape",
    admin1Zh: "北开普省", admin1En: "Northern Cape",
    lon: 21.2561, lat: -28.4478,
    airport: { iata: "UTN", nameZh: "乌平通国际机场", nameEn: "Upington International Airport", lon: 21.2603, lat: -28.3999 },
    source: "镇中心 -28.4478,21.2561（2 级，Wikipedia「Upington」）；⚠️ 中文译名「乌平通」采中文维基主条目用名，「阿平顿」是常见变体但未找到权威来源优先使用它；乌平通所属戴维·克鲁伊珀地方自治市 2022 年普查全域人口 125,744，隶属 ZF Mgcawu 区自治市（Stats SA Census 2022 Municipal Fact Sheet，1 级），正文口径须写「市镇全域」；与本库已收录的奥兰治河/奥拉比斯瀑布地形条目地理呼应（阿平顿以西约 120 公里）；UTN 坐标 OurAirports -28.3999,21.2603，跑道全长 4,900 米，是南半球最长的民用跑道（2/3 级），Airlink 独家运营 JNB-UTN 与 CPT-UTN（2026-09-21 FlightRadar24+Airlink 排期双源确认航班号，2 级）",
  },
  {
    id: "knysna", nameZh: "克尼斯纳", nameEn: "Knysna", country: "south-africa", tier: "notable", zone: "za-western-cape",
    admin1Zh: "西开普省", admin1En: "Western Cape",
    lon: 23.0471, lat: -34.0363,
    source: "市中心 -34.0363,23.0471（Wikidata Q928836）；克尼斯纳地方自治市 2022 年普查全域人口 96,055，隶属花园大道区自治市（Stats SA Census 2022 Municipal Fact Sheet，1 级，2026-09-22 核实）；本地无定期客运机场，依赖约 60 公里外的乔治机场，不填 airport 字段；2017-06-07 野火事件按中性事实性语言处理，不渲染灾害细节",
  },
  {
    id: "mbombela", nameZh: "姆邦贝拉", nameEn: "Mbombela", country: "south-africa", tier: "capital", zone: "za-mpumalanga",
    admin1Zh: "姆普马兰加省", admin1En: "Mpumalanga",
    lon: 30.9853, lat: -25.4658,
    airport: { iata: "MQP", nameZh: "克鲁格姆普马兰加国际机场", nameEn: "Kruger Mpumalanga International Airport", lon: 31.1056, lat: -25.3833 },
    source: "中文译名「姆邦贝拉」依中文维基百科词条标题（原名内尔斯普雷特，1 级）；市中心坐标 25°27′57″S,30°59′07″E 据 Wikipedia infobox；姆邦贝拉是姆普马兰加省首府，所属姆邦贝拉市 2022 年普查全域人口 809,674（Stats SA Census 2022 Municipal Fact Sheet 原始 PDF 表格，1 级——该 PDF 开篇勘误声明明确指出姆邦贝拉与塔巴楚韦两市首次发布的人口数已被修正，809,674 是修正后数字，818,925 为已作废的初版数字，citypopulation.de 等二级站点尚未同步更新，2026-09-23 核实时发现并订正，正文口径写「市辖区全域」），同时是埃兰扎尼区自治市驻地；2016-08-03 乌姆津迪地方自治市并入姆邦贝拉市，原驻地巴伯顿（19 世纪 80 年代金矿小镇）自此成为本市辖区内一座城镇（Wikipedia「Mbombela Local Municipality」/「Umjindi Local Municipality」，2/3 级）；MQP 机场坐标据 Wikipedia/机场官网，距市中心约 27 公里（行政上仍属姆邦贝拉市辖区，靠近白河镇），有往返约翰内斯堡的多班定期航班及开普敦等航线；本地无轨道交通，出行以自驾与出租车为主；⚠️ 已收录的「神之窗」（God's Window，属 blyde-river-canyon 地形条目所在的潘诺拉马观景公路一带）距本市车程约 90-106 公里（2026-09-23 核实修正，原估 75-90 公里偏低），不作本市地标，仅作一日往返提及",
  },
  {
    id: "rustenburg", nameZh: "鲁斯滕堡", nameEn: "Rustenburg", country: "south-africa", tier: "major", zone: "za-north-west",
    admin1Zh: "西北省", admin1En: "North West",
    lon: 27.2428, lat: -25.6667,
    source: "市中心 25°40′00″S,27°14′34″E 据 Wikipedia「Rustenburg」infobox 坐标；鲁斯滕堡地方自治市 2022 年普查全域人口 562,315（Stats SA Census 2022 Municipal Fact Sheet 原始 PDF 表格核对无误，1 级，2026-09-23 核实），同时是博亚纳拉铂金区自治市驻地；市议会 2021 年 11 月选举后无单一政党过半、由多党联合治理（Wikipedia，2/3 级；下一届地方选举 2026-11-04，本条须在届时复核）；本市位于已收录的布什维尔德杂岩体地形条目西瓣——该条目正文已写明西瓣「鲁斯滕堡一带最著名」，本条目不新增地质断言；本地鲁斯滕堡机场（FARG）无定期客运航班，最近有定期航班的机场是公路里程约 107 公里外的兰赛里亚机场，约翰内斯堡 OR·坦博国际机场更远、约 173 公里（2026-09-23 核实修正，原写「OR·坦博约 112 公里」既低估了距离也选错了最近机场），不填 airport 字段；太阳城/皮兰斯堡自然保护区距本市约 32-44 公里（视路线而定），非本市行政辖区、本库未收录该地形，仅作地理邻近提及",
  },
];
