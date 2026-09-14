import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_ZH: Record<string, TravelGuide> = {
  // ============ 爱尔兰 ============
  "ireland-overview": {
    // identity sources: CSO Ireland《Population and Migration Estimates, April 2025》（2025-08-26 发布）：常住人口估计 5,458,600 人。https://www.cso.ie/en/releasesandpublications/ep/p-pme/populationandmigrationestimatesapril2025/
    //   核实日 2026-09-07，来源级别 1
    identity:
      "爱尔兰共和国地处西北欧大西洋边缘，面积约7万平方公里，2025年4月人口估计约546万（爱尔兰中央统计局），以绿色田园、大西洋海崖与悠久的凯尔特—盖尔文化著称，官方语言为爱尔兰语与英语。",
    layout:
      "可大致分为：伦斯特省（都柏林，东部平原与首都圈）、芒斯特省（科克、利默里克、凯里，南部与西南沿海及山地）、康诺特省（戈尔韦，西部沿海与盖尔语区）、阿尔斯特省爱尔兰境内部分（多尼戈尔，西北沿海）。国土中部为大片低地与泥炭沼泽，山地多分布于沿海边缘。",
    gettingAround:
      "都柏林机场是主要国际门户，铁路与长途大巴网络覆盖主要城镇，城际之间通常1-3小时可达。国内定期航班很少，目前主要是都柏林—多尼戈尔（政府补贴航线）与都柏林—凯里（瑞安航空商业航线，2021年起不再享受政府补贴）两条。自驾靠左行驶，乡间道路较窄。属温带海洋性气候，全年温和多雨，天气变化快，需常备雨具。餐厅账单通常不含小费，习惯上给10%左右或凑整。电压230V，英式三孔插头。",
    culture:
      "官方语言为爱尔兰语（盖尔语）与英语，日常交流以英语为主，西部沿海部分地区（盖尔语区）仍以爱尔兰语为主要用语。爱尔兰人以健谈、幽默、热情好客著称，酒吧文化是社交生活的重要组成部分。传统音乐、舞蹈与凯尔特节庆（如圣帕特里克节）在全国各地广泛庆祝。",
    seeAndDo:
      "自然地貌：莫赫悬崖、伯伦高原、麦吉利卡迪山脉与凯里之环、康尼马拉十二本斯山、斯利夫利格悬崖。历史人文：都柏林圣三一学院与凯尔斯书、格兰达洛早期基督教遗址、纽格兰奇史前墓室。海岛与海岸：阿伦群岛、斯凯利格·迈克尔岛、基拉里峡湾。",
    whenAndTips:
      "5-9月天气相对稳定、日照较长，是旅游旺季；沿大西洋海岸线的“狂野大西洋之路”自驾是探索西海岸的经典方式，山区与海崖步道需注意突变天气与防风防雨装备。",
  },
  dublin: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   都柏林：2022 年普查，NUTS3「Dublin」区（四个地方政府）合计 1,458,154；都柏林市议会辖区约 59 万。CSO 官方新闻稿，级别 1，2026-09-09 核。
    //   https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsdublin
    //   **原文的「都会区约 120 万」是自造口径**（CSO 没有 metro area 这一档），而同条目 howItWorks 早就写着约 146 万 —— 又一次「一个条目里两段各写各的」。
    //   另有一个数量级接近的官方档：CSO 2022 年起启用的「都柏林市及郊区」建成区约 126 万，但本轮**没能回到 CSO 一手表格逐字核对**，只有 3 级转引，因此正文未采用。
    identity:
      "都柏林是爱尔兰首都与最大城市，都柏林市议会辖区人口约59万、连同周边共四个地方政府合计约146万（2022年普查），坐落于利菲河口都柏林湾畔，是爱尔兰的政治、经济与文化中心，也是欧洲重要的科技与金融枢纽之一。",
    // howItWorks sources: Wikipedia (2026-09): Dublin (Dublin City Council 117.8 km², 592,713 2022, 63 councillors, ceremonial Lord Mayor, chief executive; 4 councils in County Dublin; County Dublin ~1.46 million; GDA ~2.1 million; postal districts odd north/even south; Luas/DART/Leap); Local government in the Republic of Ireland
    howItWorks:
      "人们口中的都柏林，在行政上分成四块：都柏林市议会管辖约 118 平方公里、2022 年约 59 万人，此外芬戈、南都柏林、邓莱里—拉斯当各有自己的议会，四者合成都柏林郡，约 146 万人；大都柏林区约 200 万，占爱尔兰的四成。爱尔兰的地方议会由民选议员组成，但行政由任命的首席执行官掌管，市长（Lord Mayor）是每年轮换的礼仪职位；议会管住房、规划、道路、图书馆与消防，警察、学校与医疗归中央政府。利菲河把城市分成北岸与南岸，邮政区号单数在北、双数在南——“都柏林 4”“都柏林 8”是本地人的地址语言，2015 年起又加了 Eircode。乔治时期的广场在南岸，圣殿酒吧区在河边，码头区是金融与科技公司的所在，凤凰公园在西面。地址写“门牌、街道、邮政区号、Eircode”。两条 Luas 有轨电车线、DART 沿海铁路与公交用一张 Leap 卡贯通，没有地铁。初来的人最容易犯的错，是把都柏林市议会的辖区当作整座城，而它只占都柏林郡人口的四成。",
    layout:
      "利菲河横贯市区，将城市分为河北与河南两片：河南以圣三一学院、格拉夫顿街等历史商业区为主，河北则以奥康奈尔街等主干道及码头区为主；市郊延伸至都柏林湾沿岸。",
    gettingAround:
      "都柏林机场距市中心约10公里，有巴士与出租车接驳，暂无直达地铁。市内主要靠步行、有轨电车（Luas）与公交，河南历史区步行可达。属温带海洋性气候，全年温和多雨，天气变化快。",
    culture:
      "官方语言为爱尔兰语与英语，日常交流以英语为主。都柏林酒吧文化发达，坦普尔酒吧区是夜生活聚集地；圣帕特里克节大游行在此举行。餐厅账单通常不含小费，习惯上给10%左右。",
    seeAndDo:
      "圣三一学院与《凯尔斯书》；都柏林城堡；健力士啤酒展馆（Guinness Storehouse）；圣帕特里克大教堂；坦普尔酒吧区；凤凰公园（欧洲最大的城市公园之一）。周边可前往威克洛山脉与格兰达洛。",
    whenAndTips:
      "5-9月天气相对温暖、日照较长；圣帕特里克节（3月17日前后）游客较多、住宿紧张，建议提前预订；市内景点集中，步行加公交足以覆盖。",
  },
  kilkenny: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "基尔肯尼是爱尔兰东南部伦斯特省一座保存完好的中世纪城镇，人口约2.7万（2022年普查），以诺曼城堡与中世纪街巷闻名，被称为爱尔兰的“中世纪之都”。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kilkenny (Ireland; city in County Kilkenny in Leinster with 27,184 residents in 2022, the thirteenth-largest urban centre in the country; a 6th-century ecclesiastical settlement of Saint Canice, a town charter from William Marshall in 1207 and city status by royal charter of James I in 1609; the Confederation of Kilkenny operated here from 1642 to 1649; Kilkenny Castle, formerly the Butler seat; St Canice's Cathedral with its 9th-century round tower; nicknamed the Marble City for the local black limestone with white fossils; the Kilkenny Arts Festival, the Cat Laughs comedy festival and the Roots Festival; Cartoon Saloon and a craft and design scene; rail to Dublin and Waterford)
    howItWorks:
      "基尔肯尼是爱尔兰东南部的城市，2022 年人口 27,184，是全国第十三大城区。它在法律上是城市：1609 年詹姆斯一世授予城市特许状，但爱尔兰 2014 年废除了市镇一级议会，如今由基尔肯尼郡议会统一管辖，因此“城市”是历史身份而非行政层级。城市的骨架是一条“中世纪一英里”：南端是巴特勒家族的基尔肯尼城堡，北端是圣卡尼斯大教堂与 9 世纪的圆塔，两者之间由几条窄巷串起，1207 年威廉·马歇尔颁发的城镇特许状划定的范围大致就是这一段。它得名“大理石之城”是因为本地黑色石灰岩里嵌着白色化石，磨光后像大理石，老建筑多用它砌成。1642 至 1649 年“基尔肯尼同盟”在此运作，是爱尔兰史上常被提及的一段。夏天的艺术节与喜剧节把全城占满，铁路通往都柏林与沃特福德。初来的人最容易犯的错，是按“城市”二字预期规模，而这里步行半小时可以走穿。",
    layout:
      "老城沿诺尔河而建，城堡与主教座堂分别位于河两岸的制高点，中世纪街巷格局至今保留完整，是爱尔兰保存最完好的中世纪城镇之一。",
    gettingAround:
      "本地无商业机场，最近机场为都柏林机场（约120公里，火车约1.5小时）。老城步行可达。属温带海洋性气候，内陆位置使其降雨略少于沿海地区。",
    culture:
      "官方语言为爱尔兰语与英语，日常以英语为主。基尔肯尼是爱尔兰重要的手工艺与设计中心，也是国内知名的精酿啤酒产地之一。餐厅账单通常不含小费，习惯上给10%左右。",
    seeAndDo:
      "基尔肯尼城堡；圣卡尼斯主教座堂与圆塔；中世纪之英里步行路线；圣弗朗西斯修道院遗址；周边可前往杰波因特修道院。",
    whenAndTips:
      "5-9月最宜人；基尔肯尼艺术节（8月）期间游客较多；作为内陆小城，适合作为探索伦斯特省东南部乡村的一到两日落脚点。",
  },
  cork: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "科克是爱尔兰第二大城市（按2022年普查的城市及郊区人口计），人口约22万（2022年普查），坐落在利河河口，是爱尔兰南部芒斯特省的经济与文化中心，当地人常戏称科克为爱尔兰“真正的首都”。",
    // howItWorks sources: Wikipedia (2026-09): Cork (Cork City Council ~187 km² after 2019 extension; 224,004 2022; separate from Cork County Council; island in the Lee; UCC; Apple; buses; suburban rail to Cobh/Midleton); Local government in the Republic of Ireland
    howItWorks:
      "科克是爱尔兰第二大城市，科克市议会 2019 年扩界后管辖约 187 平方公里、2022 年约 22 万人，与科克郡议会是两个独立的地方政府；议会由民选议员组成，行政由任命的首席执行官掌管，市长每年轮换，警察、学校与医疗归中央。市中心在利河两条河汊之间的岛上，圣帕特里克街与英国市场在那里，主街之下曾是河道；北岸的香登区在山坡上，南岸向科克港延伸——世界最大的天然港之一，科夫与林加斯基迪的制药业在港边。科克大学与苹果的欧洲总部是两个最大的雇主。公共交通只有公交，市郊铁路通往科夫与米德尔顿。科克人自称“真正的首都”，口音的抑扬是它的标签。地址写“门牌、街道、Eircode”。初来的人最容易犯的错，是把科克当作一座小城，而它的市议会辖区在 2019 年扩大了近五倍，港口一带的产业规模不逊于都柏林。",
    layout:
      "老城中心建在利河分叉形成的岛状地带上，街道格局与运河系统相关；市郊沿利河河口延伸，科布港是历史上重要的跨大西洋航运港口。",
    gettingAround:
      "科克机场距市中心约8公里，有巴士接驳。市内以步行为主，老城区紧凑集中。属温带海洋性气候，全年温和多雨。",
    culture:
      "官方语言为爱尔兰语与英语，日常以英语为主。科克以本地美食文化著称，英式市场是当地饮食生活的核心场所。餐厅账单通常不含小费，习惯上给10%左右。",
    seeAndDo:
      "英式市场；圣芬巴尔大教堂；科克大学；周边科布港（泰坦尼克号最后停靠港）与布拉尼城堡（“巧言石”）。",
    whenAndTips:
      "5-9月最宜人；科克是探索芒斯特省南部海岸与凯里郡的理想门户，火车可直达都柏林（约2.5小时）。",
  },
  killarney: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "基拉尼是爱尔兰西南部凯里郡的小城，人口约1.4万（2022年普查），紧邻麦吉利卡迪山脉与基拉尼湖群，是探索凯里之环与爱尔兰最高峰的传统门户。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Killarney (Ireland; town in County Kerry with 14,412 residents in 2022, the second largest in the county; a monastery founded on Innisfallen Island in 640; tourism has underpinned the town's economy for more than two and a half centuries, with Queen Victoria's visit of 1861 raising its profile; the Lakes of Killarney, Ross Castle, Muckross House and Abbey, MacGillycuddy's Reeks and the Gap of Dunloe; the Muckross estate presented to the Irish state in 1932 to create the country's first national park; tourism worth about 410 million euros a year with about 1.1 million visitors; the Liebherr plant of 1958 a major employer; the N22, rail to Dublin, Cork and Tralee, and Kerry Airport at Farranfore)
    howItWorks:
      "基拉尼是爱尔兰凯里郡的城镇，2022 年人口 14,412，是全郡第二大；爱尔兰 2014 年废除了市镇一级议会，本地事务由凯里郡议会办理。这座镇的经济两个半世纪以来一直靠旅游，1861 年维多利亚女王来访使它在英语世界出名，如今每年约一百一十万人次到访，旅游收入约四亿一千万欧元。它的资本是身后的山与湖：基拉尼国家公园是爱尔兰第一座国家公园，1932 年马克罗斯庄园捐给国家而设立，此后不断扩大，园内有基拉尼三湖、罗斯城堡、马克罗斯宅邸与修道院；麦吉利卡迪山脉是爱尔兰最高的山群，敦洛峡在其中，“凯里之环”环形公路从镇上出发。马车至今在公园里载客。1958 年设厂的利勃海尔是镇上另一大雇主，铁路通往都柏林、科克与特拉利，凯里机场在法兰福尔。初来的人最容易犯的错，是把“凯里之环”当作一天的轻松兜风，而它是一条约 180 公里的窄路。",
    layout:
      "小城中心紧凑，基拉尼国家公园与湖群紧邻城区西南侧，麦吉利卡迪山脉屏立在国家公园西侧，构成典型的山湖相依格局。",
    gettingAround:
      "凯里机场距市区约15公里，有出租车接驳；也可从都柏林坐火车（约3.5小时，多数班次需在马洛换乘一次）。老城步行可达，游览湖区与国家公园可租自行车或乘马车。属温带海洋性气候，多雨。",
    culture:
      "官方语言为爱尔兰语与英语，日常以英语为主。基拉尼自18世纪起即为欧洲贵族的度假胜地，旅游业是当地经济的核心。餐厅账单通常不含小费，习惯上给10%左右。",
    seeAndDo:
      "基拉尼国家公园与三大湖泊；马克罗斯庄园；邓洛峡口马车观光；麦吉利卡迪山脉徒步（卡朗图希尔峰）；作为凯里之环自驾起点。",
    whenAndTips:
      "5-9月最宜人，也是徒步与湖区观光旺季；凯里之环建议逆时针自驾以避开旅游大巴车流；山区天气多变，登山需备防风雨装备。",
  },
  dingle: {
    identity:
      "丁格尔是丁格尔半岛上的小渔港小镇，人口约2千，是爱尔兰语（盖尔语）保存较好的地区之一，也是探索半岛海崖与史前遗迹的门户。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Dingle (Ireland; town in County Kerry on the Dingle Peninsula, the only town on the peninsula, about 50 km south-west of Tralee; 1,671 residents in the 2022 census, down from 2016, with the oldest average age of any town in Ireland at 44.4 years; within a Gaeltacht region, about 13.7 per cent speaking Irish daily in 2016; more goods exported through Dingle than Limerick by the 13th century; tourism, fishing and agriculture the principal industries, with Dingle Mart serving the region; Fungie, a bottlenose dolphin, sought human contact in Dingle Bay from 1983 and disappeared in 2020; a 2005 order on Gaeltacht place names, and after a 2006 plebiscite in which about 90 per cent supported bilingual signage, legislation designates Dingle as the English name and Daingean Uí Chúis as the Irish)
    howItWorks:
      "丁格尔是爱尔兰凯里郡丁格尔半岛上唯一的城镇，2022 年人口 1,671，在特拉利西南约 50 公里；爱尔兰 2014 年废除了市镇一级议会，本地事务由凯里郡议会办理。它在“盖尔塔赫特”范围内——这是政府划定的爱尔兰语社区，公共标识、学校与地方行政都要用爱尔兰语，2016 年约 13.7% 的居民每天讲爱尔兰语。地名本身就是这套制度的例子：2005 年的法令一度只承认爱尔兰语名，2006 年的公投中约九成居民支持双语并用，此后立法把 Dingle 定为英文名、Daingean Uí Chúis 定为爱尔兰文名。13 世纪它的出口量一度超过利默里克，如今渔业、农业与旅游是三大行业，镇上的牲畜市场服务整个半岛。斯利海角环线沿海岸绕行，路边有蜂窝状的石屋遗迹，布拉斯基特群岛在西面海上。这座镇的平均年龄 44.4 岁，是全国城镇中最高的。初来的人最容易犯的错，是以为爱尔兰语只是装饰，而在这里它是社区的日常语言。",
    layout:
      "小镇沿丁格尔湾港口而建，街巷紧凑，半岛沿岸的斯利亚角与布兰登山构成小镇周边的主要地貌背景。",
    gettingAround:
      "本地无商业机场，最近机场为凯里机场（约50公里）。小镇步行可达，探索半岛沿海景观道路需自驾或跟团。属温带海洋性气候，大西洋沿岸风力较强。",
    culture:
      "官方语言为爱尔兰语与英语，丁格尔是爱尔兰语区，当地招牌与地名多以爱尔兰语标注。小镇以海鲜、传统音乐酒吧闻名。餐厅账单通常不含小费，习惯上给10%左右。",
    seeAndDo:
      "斯利亚角观景；甘那炎修士石屋等早期基督教遗迹；丁格尔湾出海观鲸观豚（自1983年起长住港内的宽吻海豚“芬吉”于2020年10月起不再出现，码头立有其铜像）；沿半岛海岸的斯利亚角自驾环线。",
    whenAndTips:
      "5-9月最宜人；半岛沿海道路狭窄且多急弯，自驾需谨慎；小镇夜晚的传统音乐酒吧是体验当地文化的好去处。",
  },
  waterford: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "沃特福德是爱尔兰最古老的城市，由维京人于914年建立，人口约6万（2022年普查），位于爱尔兰东南部苏尔河口，以水晶工艺闻名。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Waterford (Ireland; city in the south-east in Munster, the oldest city in the state, founded by Vikings in 914, with 60,079 residents in 2022, the fifth most populous city in the state; the Viking Triangle is the tenth-century settlement, with Reginald's Tower of the 13th to 14th century as its landmark; the motto Urbs Intacta Manet Waterfordia earned after repelling sieges in the 15th century; Waterford Crystal made here from 1783 until early 2009 and resumed in 2010; the port handles about 12 per cent of Ireland's external trade by value, on the River Suir; South East Technological University established 2022; the M9 to Dublin and rail from Plunkett station; the airport currently without scheduled flights)
    howItWorks:
      "沃特福德是爱尔兰东南部的城市，2022 年人口 60,079，是爱尔兰共和国第五大城市，也是最古老的一座——公元 914 年由维京人建城，比都柏林还早。城市治理归沃特福德市与郡议会：2014 年爱尔兰的地方改革把原来的市议会与郡议会合并，如今一个议会同时管城与郡。老城最核心的一块叫“维京三角”，就是 10 世纪的原始聚落所在，13 至 14 世纪的雷金纳德塔立在河边，是全国现存最古老的城市建筑之一；15 世纪它两次挡住围城，因此得了“沃特福德城完好无损”的城市箴言。沃特福德水晶自 1783 年在此生产，2009 年初停产，2010 年恢复了规模较小的生产与展示。港口在舒尔河上，按货值约占爱尔兰对外贸易的一成二；东南理工大学 2022 年成立，M9 高速与铁路通往都柏林，本地机场目前没有定期航班。初来的人最容易犯的错，是以为都柏林最老，而这座城早了将近半个世纪。",
    layout:
      "老城沿苏尔河北岸而建，维京三角区保留着中世纪街巷格局，市郊沿河口向外延伸至沃特福德港。",
    gettingAround:
      "本地沃特福德机场目前无定期客运航班，通常经科克机场（约110公里）或都柏林机场（约165公里）中转，也可乘火车往返都柏林（约2.5小时）。老城步行可达。属温带海洋性气候。",
    culture:
      "官方语言为爱尔兰语与英语，日常以英语为主。沃特福德水晶是爱尔兰工艺的代表品牌之一，城市历史与维京、诺曼定居传统密切相关。餐厅账单通常不含小费，习惯上给10%左右。",
    seeAndDo:
      "沃特福德水晶工坊参观；里金纳德塔（爱尔兰现存最古老的城市建筑）；维京三角区中世纪博物馆群；周边可前往科默拉山脉。",
    whenAndTips:
      "5-9月最宜人；作为爱尔兰最古老的城市，沃特福德适合安排半日到一日深度探访其维京—诺曼历史街区。",
  },
  limerick: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "利默里克是爱尔兰第三大城市（按2022年普查的城市及郊区人口计），人口约10万（2022年普查），坐落于香农河口，是爱尔兰中西部芒斯特省的重要城市与门户。",
    // howItWorks sources: 利默里克城市及郊区约 102,000（2022 年普查，CSO）。**「都会区约 16 万」是自造口径** —— CSO 没有 metro area 这一档，与 dublin 条目同型，本轮一并清掉。2026-09-09 核。
    //   https://www.cso.ie/
    //   2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市一级没有官方更新数。
    howItWorks:
      "利默里克是爱尔兰第三大城市，2014 年市与郡合并为利默里克市郡议会，2024 年 6 月它选出了爱尔兰第一位直选市长，其他地方议会的市长仍是每年轮换的礼仪职位；2022 年普查的城市及郊区人口约 10.2 万；爱尔兰官方没有「都会区」这一档，更大范围只能按郡计。议会管住房、规划与道路，警察、学校与医疗归中央。城市在香农河口：国王岛上的中世纪城区有 1210 年的约翰王城堡，河南岸的纽敦佩里是 18 世纪的乔治式格网，奥康奈尔街是它的主街，这种格网在爱尔兰城市里独一无二；利默里克大学在东郊的卡斯尔特罗伊，香农机场在西面约 25 公里。橄榄球是这座城的宗教，芒斯特队的主场托蒙德公园在国王岛旁。“利默里克 2030”的再生计划正在改造市中心。公共交通只有公交，铁路通往都柏林。地址写“门牌、街道、Eircode”。初来的人最容易犯的错，是把利默里克当作去克莱尔郡的过路站，而它是中西部的行政与大学中心。",
    layout:
      "老城沿香农河而建，国王约翰城堡扼守河道要冲，市区分为爱尔兰镇、英格兰镇与纽敦佩里等历史片区。",
    gettingAround:
      "香农机场距市区约25公里，有巴士接驳。市内以步行与公交为主。属温带海洋性气候，香农河口地势平坦，风力较大。",
    culture:
      "官方语言为爱尔兰语与英语，日常以英语为主。利默里克是爱尔兰橄榄球文化重镇之一，五行打油诗“利默里克体”一般认为得名于此，但确切由来学界尚无定论。餐厅账单通常不含小费，习惯上给10%左右。",
    seeAndDo:
      "国王约翰城堡；利默里克圣玛丽大教堂；香农河畔散步；周边可前往香农河沿线的比尔城堡等中世纪遗迹。",
    whenAndTips:
      "5-9月最宜人；利默里克是探索香农河沿岸与克莱尔郡（伯伦高原、莫赫悬崖）的便捷门户，距莫赫悬崖车程约1.5小时。",
  },
  galway: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "戈尔韦是爱尔兰西部康诺特省的核心城市，人口约8.6万（2022年普查），坐落于科里布河口戈尔韦湾畔，是探索康尼马拉与阿伦群岛的门户，也是爱尔兰重要的盖尔语文化中心。",
    // howItWorks sources: Wikipedia (2026-09): Galway (Galway City Council 57.3 km²; 85,910 2022; separate from County Galway; Corrib/Galway Bay; University of Galway ~19,000; Gaeltacht neighbourhoods; medtech; buses only); Local government in the Republic of Ireland
    howItWorks:
      "戈尔韦是爱尔兰西部最大的城市，戈尔韦市议会管辖约 57 平方公里、2022 年约 8.6 万人，与戈尔韦郡议会是两个独立的地方政府；议会管住房、规划与道路，警察、学校与医疗归中央。城市在科里布河注入戈尔韦湾的地方：中世纪的拉丁区沿商店街到西班牙拱门，艾尔广场是市中心，克拉达在河西岸，索尔特希尔的海滨长廊向西延伸。戈尔韦大学约 1.9 万学生，占市民的四分之一；市内的几个街区属于盖尔语区，康尼马拉的盖尔语区就在西面，路牌与剧院双语并行。医疗器械是最大的产业，美敦力与波士顿科学的工厂在城里。艺术节与赛马周是一年的两个高潮。公共交通只有公交，铁路通往都柏林，渡轮通往阿伦群岛。地址写“门牌、街道、Eircode”。初来的人最容易犯的错，是把戈尔韦当作一座旅游小镇，而它是西部的大学与医疗器械之城。",
    layout:
      "老城中心紧凑，沿科里布河口而建，拉丁区保留中世纪街巷格局，长堤海滨步道沿戈尔韦湾向外延伸。",
    gettingAround:
      "本地戈尔韦机场已停止定期客运，最近机场为香农机场（约100公里）。老城步行可达，前往康尼马拉与阿伦群岛需自驾、跟团或搭渡轮。属温带海洋性气候，多雨多风。",
    culture:
      "官方语言为爱尔兰语与英语，戈尔韦及周边是爱尔兰重要的盖尔语区，街头艺人与传统音乐酒吧氛围浓厚。戈尔韦国际艺术节（7月）是爱尔兰重要的文化节庆。餐厅账单通常不含小费，习惯上给10%左右。",
    seeAndDo:
      "拉丁区街道与圣尼古拉斯教堂；长堤海滨步道；科里布河桥梁与鲑鱼洄游观察点；作为康尼马拉十二本斯山与阿伦群岛一日游的出发地。",
    whenAndTips:
      "5-9月最宜人，也是戈尔韦国际艺术节旺季；前往阿伦群岛需提前查询渡轮班次，冬季航班易受天气影响。",
  },
  westport: {
    identity:
      "韦斯特波特是爱尔兰西部梅奥郡的小镇，人口约6千，是探索克罗帕特里克圣山与阿基尔岛的传统门户，被认为是爱尔兰最宜居的小镇之一。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Westport (Ireland; town in County Mayo at the south-east corner of Clew Bay, 6,872 residents in 2022; one of only a few planned towns in Ireland, laid out in the 18th century around Westport House, with the Carrowbeg river channelled into the design to make the tree-lined Mall and its stone bridges; Croagh Patrick, locally the Reek, about 10 km west, with the Reek Sunday pilgrimage; the Great Western Greenway, a 42 km cycling route on the former railway; winner of the Irish Tidy Towns Competition in 2001, 2006 and 2008 and named Best Place to Live in Ireland in 2012; AbbVie employs about 1,400, roughly a quarter of the workforce; rail to Dublin Heuston 250 km away)
    howItWorks:
      "韦斯特波特是爱尔兰梅奥郡的城镇，位于克卢湾东南角，2022 年人口 6,872；爱尔兰 2014 年废除了市镇一级议会，本地事务由梅奥郡议会办理。它是爱尔兰少见的“规划市镇”之一：18 世纪围绕韦斯特波特庄园整体设计，卡罗贝格河被引入城中，两岸筑石堤、种行道树，形成叫作“林荫道”的中轴，几座石桥横跨其上——今天的街区形状仍是那次规划的产物。城西约 10 公里是克罗帕特里克山，当地人叫它“the Reek”，每年七月最后一个星期日有大批人徒步上山朝圣。旧铁路改成的“大西部绿道”长 42 公里，从这里通往阿基尔岛，是爱尔兰最早的长距离自行车道之一。艾伯维制药厂雇了约一千四百人，约占本地劳动力的四分之一。这座镇三次拿过全国“整洁市镇”冠军。铁路通往 250 公里外的都柏林。初来的人最容易犯的错，是以为它是自然长成的老镇，而它的街道是一次画出来的。",
    layout:
      "小镇按18世纪的规划建成（一般归于英国建筑师詹姆斯·怀亚特1780年前后的设计），运河与林荫大道贯穿镇中心，是爱尔兰少有的规划型小镇。",
    gettingAround:
      "爱尔兰西部诺克机场距市区约50公里，有巴士接驳。小镇步行可达，前往阿基尔岛与克罗帕特里克山需自驾。属温带海洋性气候，大西洋沿岸风力较强。",
    culture:
      "官方语言为爱尔兰语与英语，日常以英语为主。韦斯特波特以规划整齐的镇中心与浓厚的音乐酒吧文化著称，是爱尔兰西部重要的户外旅游集散地。餐厅账单通常不含小费，习惯上给10%左右。",
    seeAndDo:
      "克罗帕特里克圣山徒步（爱尔兰重要的朝圣山）；阿基尔岛基姆湾悬崖；克莱尔岛渡轮；韦斯特波特大道与克罗帕特里克庄园。",
    whenAndTips:
      "5-9月最宜人；每年7月最后一个星期日的“圣帕特里克朝圣日”期间克罗帕特里克山朝圣者众多，登山道会较为拥挤。",
  },
  "donegal-town": {
    identity:
      "多尼戈尔镇是爱尔兰西北部多尼戈尔郡的小镇，人口约2.8千，是探索斯利夫利格悬崖与格伦维国家公园的传统门户。",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Donegal Town (Ireland; town in County Donegal with an urban population of 2,749 in 2022; although it gave the county its name, Lifford is the county town; from the 15th to the early 17th century the capital of Tyrconnell under the O'Donnell dynasty, rebuilt by Captain Basil Brooke around 1611 after the Flight of the Earls of 1607, who laid out the square known as the Diamond; Donegal Castle, the former O'Donnell stronghold, restored by the Office of Public Works; Donegal Abbey, a 15th-century Franciscan friary; the Annals of the Four Masters compiled nearby between 1632 and 1636; at the mouth of the River Eske on Donegal Bay below the Blue Stack Mountains)
    howItWorks:
      "多尼戈尔镇是爱尔兰多尼戈尔郡的城镇，2022 年城区人口 2,749；爱尔兰 2014 年废除了市镇一级议会，本地事务由多尼戈尔郡议会办理。这里有一处常被弄错的关系：郡以这座镇命名，但郡治并不在此，而在东北边境上的利福德。15 世纪到 17 世纪初，它是奥唐奈家族统治的蒂尔康奈尔的首府，1607 年“伯爵出走”之后，巴兹尔·布鲁克上尉在 1611 年前后重建市镇，画出了今天中心那个叫“钻石”的三角形广场，镇上的道路都从这里发散。奥唐奈家族的多尼戈尔城堡经国家公共工程局修复后开放，15 世纪的方济各会修道院废墟在河口；著名的《四大师年鉴》1632 至 1636 年间在附近编成。镇子在埃斯克河入海处、多尼戈尔湾边，蓝石山在背后，粗花呢是本地的老手艺，“野性大西洋之路”沿海岸经过。初来的人最容易犯的错，是以为这里是郡治，而郡政府在利福德。",
    layout:
      "小镇以三角形市集广场为中心，多尼戈尔城堡与河口相邻，是多尼戈尔湾沿岸的历史贸易据点。",
    gettingAround:
      "多尼戈尔机场（卡里克芬）距市区约65公里，有政府补贴的都柏林往返航班。小镇步行可达，前往斯利夫利格悬崖与格伦维国家公园需自驾。属温带海洋性气候，是爱尔兰风力较强的地区之一。",
    culture:
      "官方语言为爱尔兰语与英语，多尼戈尔郡是爱尔兰重要的盖尔语区之一。当地以手织粗花呢（多尼戈尔粗花呢）传统工艺闻名。餐厅账单通常不含小费，习惯上给10%左右。",
    seeAndDo:
      "多尼戈尔城堡；三角形市集广场；周边斯利夫利格悬崖（欧洲最高海崖之一）与格伦维国家公园；多尼戈尔湾沿岸风光。",
    whenAndTips:
      "5-9月最宜人；作为爱尔兰西北部相对偏远的地区，自驾是探索斯利夫利格悬崖与格伦维国家公园最便捷的方式，山区天气多变需备好防风雨装备。",
  },
};
