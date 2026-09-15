import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Vietnam ============
  "vietnam-overview": {
    // identity sources: 越南统计总局（GSO）《Thông cáo báo chí về tình hình dân số, lao động, việc làm quý IV và năm 2025》：2025 年平均人口 102.3 百万人。https://www.nso.gov.vn/tin-tuc-thong-ke/2026/01/thong-cao-bao-chi-ve-tinh-hinh-dan-so-lao-dong-viec-lam-quy-iv-va-nam-2025/
    //   核实日 2026-09-07，来源级别 1
    identity:
      "The Socialist Republic of Vietnam lies on the eastern side of the Southeast Asian mainland, its territory forming a long S-shape, covering about 330,000 km² with an average population of about 102.3 million in 2025 (General Statistics Office of Vietnam); the capital is Hanoi, the official language is Vietnamese, and the currency is the Vietnamese dong (VND).",
    layout:
      "The country divides broadly into four regions: the North (Hanoi, Ha Long Bay, the Sapa highlands), the Centre (the coastal ancient-capital belt of Da Nang, Hoi An, and Hue), the Central Highlands (basalt plateaus including Da Lat), and the South (Ho Chi Minh City, the Mekong Delta).",
    gettingAround:
      "Domestic flights are centred on two hubs, Hanoi's Noi Bai Airport and Ho Chi Minh City's Tan Son Nhat Airport; the North-South Reunification railway links Hanoi and Ho Chi Minh City in a journey of over 30 hours. Motorbikes are the dominant mode of transport within cities, and the Grab app is widely used. Electronic visa or visa-exemption arrangements for short-term visitors from various countries follow the latest official announcements from Vietnam.",
    culture:
      "The official language is Vietnamese, with French and English also spoken to some extent in tourist areas. Dress modestly when visiting pagodas and temples (no shorts or sleeveless tops), and some require shoes off; pointing your feet at a Buddha image or stepping over offerings is considered disrespectful. Tipping is not a mandatory tradition, but leaving a small amount at restaurants and spas is increasingly common. Voltage is 220V, with a mix of type A/C sockets in use.",
    seeAndDo:
      "Natural landforms: the karst island groups of Ha Long Bay and Cat Ba Island, Fansipan and the Sapa rice terraces, and the karst cave clusters of Phong Nha-Ke Bang. Heritage and culture: Hanoi's Old Quarter, the ancient town of Hoi An, and the Nguyen dynasty's imperial citadel in Hue. River-delta life: the floating markets of the Mekong Delta.",
    whenAndTips:
      "The country's elongated shape creates a marked north-south climate difference: the north is cool and dry from November to March, while the south is warm year-round with a rainy season from May to October — check the specific destination's seasonal pattern before travelling.",
  },
  hanoi: {
    // identity sources: 人口：GSO/NSO 2024 年中期人口与住房调查（基准 2024-04-01）**8,685,607**（1 级）。此前正文 850 万、howItWorks 886 万（英文维基推算）、官方 869 万三个数打架，统一取 GSO。2026-09-10 核。
    identity:
      "Hanoi's founding is tied to the vision that gave it its old name — in 1010, Ly Thai To, the first ruler of the Ly dynasty, moved the capital from the defensible but remote Hoa Lu (near today's Ninh Binh) to this site, and according to legend saw a dragon rising from the Red River as he arrived, naming the new capital Thăng Long, \"Ascending Dragon\"; it remained Vietnam's political centre for most of the nearly eight centuries that followed. Hanoi is Vietnam's capital, with a population of about 8.69 million at the April 2024 mid-term survey (GSO), on the right bank of the Red River, and the country's political and cultural centre.",
    // howItWorks sources: 人口：**两个并存的官方口径** —— 越南统计总局 2024 年年中人口与住房调查（基准 2024-04-01）8,685,607；河内市统计局 2024 年度报告「年平均人口」871.76 万（2023 年 858.71 万）。两者都是 1 级，口径不同（五年一次抽样调查 vs 年度行政估算）。⚠️ 原文的「2025 年约 886 万」来自英文维基推算，**不是越南任何官方口径**，已删除。2025 年分市数取不到：河内市统计局《2025 年第四季度及全年报告》2026-01-07 已发布，但站点连接失败／证书不匹配，只确认到标题；越南统计总局 2025 年全国平均人口 1.023 亿未见分省拆分。下一轮换路径重试，或查该局统计年鉴电子版。2026-09-12 核。
    howItWorks:
      "Hanoi is a 'centrally-governed city' of Vietnam, ranking with the provinces and governed by a People's Committee and People's Council; from 1 July 2025 Vietnam abolished the district tier and merged its 63 provincial units into 34, so beneath the city lie 126 wards and communes directly — 51 wards and 75 communes — and the old 'districts' survive only in speech and place names. Since Hà Tây province was absorbed in 2008 the city covers about 3,360 km², with about 8.69 million people at the April 2024 mid-term population and housing survey (Vietnam's General Statistics Office) and about 8.72 million on the Hanoi Statistics Office's annual average for the same year, two parallel official figures, and the Red River divides it, with the main city on the west bank. The city grew outward from Hoàn Kiếm Lake: the Old Quarter of 36 streets to its north, the French Quarter to its south, Ba Đình as the government and embassy quarter, West Lake as the wealthy residential shore, Cầu Giấy, Mỹ Đình and Hà Đông as the new towns of the 2000s, and Long Biên across the river now rising. Addresses give number, street and ward, with layered ngõ (lane) and ngách (alley) numbers below the house number. Two urban rail lines run, and the motorbike remains the absolute master. Newcomers most often go wrong by taking the Old Quarter for Hanoi, when most of the city is new districts built since 2000.",
    layout:
      "The Old Quarter preserves its traditional 36-street layout and French colonial architecture, with Hoan Kiem Lake as the city's geographic and cultural centre, while the West Lake area is a hub of modern housing and embassies.",
    gettingAround:
      "Noi Bai International Airport is about 35 km from the city centre, with an airport express bus taking about 45 minutes. The Old Quarter is easily explored on foot or by motorbike, and Grab covers the whole city.",
    culture:
      "Vietnamese is the official language; the French colonial legacy leaves a deep imprint on the city's architecture and café culture, and Hanoi's egg coffee is a distinctive local drink. Tipping at restaurants is not mandatory.",
    seeAndDo:
      "Hoan Kiem Lake and Ngoc Son Temple; the Old Quarter's 36 streets; Ho Chi Minh's Mausoleum and residence; the Temple of Literature; sunset over West Lake.",
    whenAndTips:
      "October–December and March–April are most pleasant; the Old Quarter's streets are narrow and busy with traffic, so walking or a motorbike taxi is a good way to experience weaving through the old streets.",
  },
  "ho-chi-minh-city": {
    // identity sources: 2025 年越南把 63 个省市并成 34 个。胡志明市与平阳省、巴地—头顿省合并为新的中央直辖市，
    //   面积约 6,772 平方公里、人口约 1,400 万、190 个行政单位；决议 2025-09-01 生效、新市 09-15 运作。
    //   https://en.vietnamplus.vn/hcm-city-set-to-become-megametropolis-after-administrative-merger-post320188.vnp
    //   （2 级，越南通讯社英文版，2026-09-08 核）。
    //   **行政区划合并会让人口数一夜之间变一倍**，比年度增减凶得多 —— 越南 2025 年这一轮波及全国，
    //   凡是越南的城市条目都要按合并后的边界重核。
    identity:
      "Ho Chi Minh City (formerly Saigon) is Vietnam's largest city and economic centre, with a population of about 14 million after its 2025 merger with Binh Duong and Ba Ria–Vung Tau provinces, on the banks of the Saigon River, and the commercial and cultural hub of southern Vietnam.",
    // howItWorks sources: 越南国会第 202/2025/QH15 号决议（2025-06-12 通过）第 1 条第 16 款：自然面积 6,772.59 km²、人口 14,002,598 人。**另有转述给出 ≈6,796.91 km²，来源与差异原因未核实**（可能是含内水/滩涂的另一口径）；原文写的「约 6,781」是本库在两个转述数之间取的中值，不是官方数，已弃用。2026-09-12 核。
    howItWorks:
      "Ho Chi Minh City is a 'centrally-governed city' of Vietnam, ranking with the provinces; since Bình Dương and Bà Rịa–Vũng Tàu provinces were merged into it in 2025 it covers about 6,772.59 km² with more than 14 million people, and since July of that year, with the district tier abolished, 113 wards, 54 communes and the Côn Đảo special zone lie directly beneath the city. The old names 'District 1' and 'District 3' are no longer administrative units but remain the language in which locals place things: District 1 is the centre, with the Reunification Palace and the cathedral, and in 2025 its core became 'Saigon ward', while Bến Thành Market falls in the adjacent 'Bến Thành ward'; Chợ Lớn is the old Chinese city in the former Districts 5 and 6; Thủ Đức is the university and technology district to the east; and the industrial towns of Bình Dương and the seaside of Vũng Tàu now lie within the city line. Locals still call the city 'Saigon' every day. Addresses give number, street and ward, with lane and alley numbers below the house number. Metro Line 1, opened in December 2024, is the first rail line, and motorbikes carry most journeys; Tân Sơn Nhất airport lies inside the city; Long Thành to the east is structurally largely complete and entered trial operations in September 2026, with no commercial passenger flights yet as of that month and an official target of starting commercial operations by the end of 2026. Newcomers most often go wrong by taking District 1 for the whole city, when it is one corner of a city of 14 million.",
    layout:
      "The core city centre is the former District 1, where French-era buildings and skyscrapers stand side by side; the former District 3 and District 5 (Cholon, the Chinatown quarter) each have their own character, and the Mekong Delta spreads out to the south-west of the city.",
    gettingAround:
      "Tan Son Nhat International Airport is about 8 km from the city centre, Vietnam's busiest airport; motorbike density in the city is extremely high, Grab is widely used, and Metro Line 1 is now in operation.",
    culture:
      "As Vietnam's most economically dynamic city, Ho Chi Minh City moves at a noticeably faster pace than Hanoi, with French-era architecture, Vietnam War-era historic sites, and modern commercial culture coexisting.",
    seeAndDo:
      "Notre-Dame Cathedral (Red Church) and the Central Post Office; the War Remnants Museum; the nightlife of Pham Ngu Lao Street; the Cholon Chinatown district; the fruit stalls and street food around Pham Ngu Lao.",
    whenAndTips:
      "December to April, the dry season, is best for travel; the rainy season (May–November) often brings brief afternoon showers, so carry rain gear.",
  },
  "da-nang": {
    // identity sources: 2025-06-30 岘港市宣布国会关于设立新岘港市的决定（广南省并入），**2025-07-01 生效**：
    //   新岘港面积 11,867 平方公里、人口逾 300 万、94 个乡级单位（23 坊 + 70 社 + 黄沙特区）。
    //   https://vietnamnet.vn/en/da-nang-becomes-centrally-managed-city-after-merger-with-quang-nam-2396278.html
    //   （2 级，越南官方媒体，2026-09-08 核）。
    //   **这是越南 2025 年区划大合并的一部分**（63 省市并成 34 个），与胡志明市、芹苴同批 ——
    //   会安古镇与美山圣地从此都在岘港市内。行政区划合并会让人口一夜之间翻倍，
    //   凡是越南的城市条目都要按合并后的边界重核。
    identity:
      "Da Nang is the largest city in central Vietnam, with a population of more than 3 million after Quang Nam province was merged into it in 2025, at the mouth of the Han River, and an ideal gateway for exploring Hoi An, Hue, and Ba Na Hills.",
    // howItWorks sources: 乡级单位：官方 94 个 = 23 坊 + 70 社 + 1 个岛屿特区（2025-07-01 生效，2 级，2026-09-12 核）。⚠️ **那个特区的名称涉中越主权争议，按零争议红线不写入正文**，因此正文只列 23 坊 + 70 社 —— 有意为之，勿「补全」。面积 11,859.59 km²（另一份官方转述写 11,867.18 km²，两稿本身不一致）、人口 3,065,628，与正文一致。
    howItWorks:
      "Da Nang is a 'centrally-governed city' of Vietnam, ranking with the provinces; since Quảng Nam province was merged into it on 1 July 2025 it covers about 11,860 km² with about 3 million people, and Hội An and Mỹ Sơn now lie within the city, while with the district tier abolished that year 23 wards and 70 communes lie directly beneath it. The city itself is divided by the Han River: the west bank is the old town, with the city offices, the market and the railway station; the east bank is the line of hotels and new housing along Mỹ Khê beach and the Sơn Trà peninsula, joined to the centre by the Dragon Bridge and its neighbours. It is the largest city of central Vietnam, with the airport inside the city, the Hải Vân Pass separating it from Huế to the north, and the Marble Mountains on the coast to the south. Addresses give number, street and ward, with lane and alley numbers below the house number. There is no rail transit, and motorbikes and cars carry the traffic. Newcomers most often go wrong by taking Da Nang for a beach city, when it is the centre of a province-level unit that includes all of Quảng Nam, and Hội An is one of its wards.",
    layout:
      "The city extends along the Han River and My Khe Beach, with the Dragon Bridge spanning the Han River as a city landmark, and resort hotels lining My Khe Beach.",
    gettingAround:
      "Da Nang International Airport is about 3 km in a straight line from the city centre, an important aviation hub for central Vietnam; taxis and Grab reach nearby attractions easily.",
    culture:
      "Da Nang is one of Vietnam's fastest-growing coastal cities, combining a traditional fishing culture with a modern tourism-resort industry.",
    seeAndDo:
      "My Khe Beach; the Dragon Bridge's weekend fire-breathing show; a day trip to Ba Na Hills via cable car and the Golden Bridge; the caves and rock-cut sculptures of the Marble Mountains; a night cruise on the Han River.",
    whenAndTips:
      "February–August is the dry season and the best time to visit; typhoons and heavier rain cluster from September to January, so check weather warnings before travelling.",
  },
  "hoi-an": {
    identity:
      "Hoi An is a well-preserved ancient trading-port town in central Vietnam, an important Southeast Asian international trading port from the 16th to 19th centuries, its ancient town was inscribed on the UNESCO World Heritage List in 1999.",
    // howItWorks sources: 原会安市 2025-07-01 重组为 3 坊 1 社：**会安坊**（明安坊 + 锦浦坊 + 山峰坊 + 锦南坊 + 锦金社）、会安东坊、会安西坊、新协社；广南省并入岘港市（保留「岘港」名）。正文「分成几个直属岘港的坊、古城那一片叫会安坊」成立。（依第 1659/NQ-UBTVQH15 号决议，3 级转引，2026-09-12 核，无需改动。）
    howItWorks:
      "Since 1 July 2025 Hội An has no longer been a city: Quảng Nam province was merged into Da Nang, the district tier was abolished, and Hội An became several wards directly under Da Nang, the one holding the old town called Hội An ward. The Ancient Town lies on the north bank of the Thu Bồn, World Heritage since 1999 with a ticket to enter the old streets, An Bàng and Cửa Đại beaches 4 km east, the Cham Islands offshore and Da Nang airport about 30 km north. Lanterns by night and tailors' shops are its trade. Newcomers most often go wrong by taking Hội An for an independent city, when it is now a few wards of Da Nang, whose government sits 30 km away by road.",
    layout:
      "The ancient town is built along the Thu Bon River, with the Japanese Covered Bridge as its landmark structure, and yellow-walled traditional merchant houses and Chinese assembly halls lining its old streets.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Da Nang International Airport (about 30 km away by road); motorised vehicles are barred from the ancient town's core, so walking or cycling is the main way to get around.",
    culture:
      "Hoi An's ancient town blends Vietnamese, Chinese, Japanese, and European architecture and trading culture; on the 14th night of each lunar month the town turns off its electric lights and holds a \"Lantern Festival\" lit entirely by lanterns.",
    seeAndDo:
      "The Japanese Covered Bridge; the ancient town's traditional merchant houses and Chinese assembly halls; releasing lanterns on the Thu Bon River; Hoi An Central Market; nearby coconut-village basket-boat experiences.",
    whenAndTips:
      "February–August, the dry season, is most pleasant; the Lantern Festival on the 14th night of each lunar month is the best time to experience the ancient town at night, though it draws crowds, so plan ahead.",
  },
  hue: {
    // identity sources（2026-09-15 核实，update）: 顺化中央直辖市官方人口 1,236,393（与同条目 howItWorks 一致，2 级）；原「约 45 万」是升格前旧顺化市口径；下一期约 2027
    identity:
      "Hue owes its selection as a capital largely to what the Perfume River offered — after unifying Vietnam in 1802, Emperor Gia Long, founder of the Nguyen dynasty, chose this site for its backdrop of hills and the river winding through it, and built a citadel explicitly modeled on Beijing's Forbidden City; for the 143 years that followed (1802–1945), Vietnam's last royal dynasty ruled from here and was buried in the tomb complexes along the Perfume River. Hue is a historic former capital in central Vietnam, raised from Thừa Thiên Huế province to a centrally governed city in January 2025, with about 1.24 million people, and the Complex of Hue Monuments was inscribed on the UNESCO World Heritage List in 1993.",
    // howItWorks sources: 建制：2025-01-01 由承天顺化省整体升格为中央直辖市；2025-07-01 县级撤销后重编为 40 个乡级单位（21 坊 + 19 社）。官方面积 4,947.11 km²、人口 1,236,393（2 级，2026-09-12 核），与正文「约 4,950 平方公里」「一百多万」一致。
    howItWorks:
      "Huế has been a centrally-governed city of Vietnam since 1 January 2025, raised from the former Thừa Thiên Huế province, covering about 4,950 km² with more than a million people, and since the district tier was abolished that July it has been re-organised into 21 wards and 19 communes directly under the city. The Perfume River divides the town: the north bank holds the Citadel and Forbidden Purple City of the Nguyễn dynasty of 1802–1945, World Heritage since 1993, the south bank the French-era quarter and today's commercial centre, the royal tombs scattered in the hills to the south, Thuận An beach to the east, Phu Bai airport about 15 km south and the Hải Vân Pass separating it from Da Nang. Newcomers most often go wrong by taking Huế for the Citadel quarter, when it is a centrally-governed city running from the mountains to the sea, far larger than Da Nang's urban area.",
    layout:
      "The Perfume River runs through the city; the Imperial City and Forbidden Purple City ruins on the north bank preserve the Nguyen court's layout, the south bank is the modern city centre, and several royal tombs lie along the Perfume River on the city's outskirts.",
    gettingAround:
      "Phu Bai International Airport is about 14 km in a straight line from the city centre; a dragon boat cruise on the Perfume River or a hired car is recommended for linking the Imperial City and the royal tombs, with taxis and Grab available in the city.",
    culture:
      "As the Nguyen dynasty's ancient capital, Hue has a rich tradition of royal-court cuisine and vegetarian food culture, and the local dialect and food customs differ noticeably from other parts of Vietnam.",
    seeAndDo:
      "The Hue Imperial City; the Tomb of Khai Dinh; the Tomb of Minh Mang; Thien Mu Pagoda; a dragon boat cruise on the Perfume River.",
    whenAndTips:
      "February–August, the dry season, is most pleasant, with heavier rain September–January; plan at least a day dedicated to the Imperial City and the royal tombs, with a dragon boat cruise a classic way to link the sites.",
  },
  sapa: {
    // howItWorks sources（2026-09-15 核实，update）: 老街省官方媒体：沙坝坊 54.63 km²、22,882 人（2 级）；下一期约 2027
    identity:
      "Sapa is a mountain town in Lao Cai Province, north-western Vietnam, at about 1,500 m elevation, the gateway to Fansipan and its terraced rice-field scenery, home to several ethnic-minority communities.",
    // howItWorks sources: 原沙坝镇 2025-07-01 重组为 6 个坊，镇中心即**沙坝坊**（54.63 km²、22,882 人）；老街省与安沛省合并后保留「老街」省名。⚠️ **反直觉的一点**：合并后的**行政中心迁到了安沛市**，不在老街市 —— 正文没写省会位置，所以不算错，但以后要补写时别想当然。（2 级，老街省官方媒体，2026-09-12 核，无需改动。）
    howItWorks:
      "Sa Pa was a district-level town of Lào Cai province and, since the district tier was abolished in July 2025, is a ward directly under Lào Cai province, which merged with Yên Bái the same year. The town sits on the Hoàng Liên Sơn range at about 1,600 m with about 70,000 people in 2022 across the former town (before the 2025 reform; the reorganised Sa Pa ward has about 22,900); the centre is a slope around the stone church, the terraces lie in the Mường Hoa valley to the south with the villages of Cát Cát and Tả Van scattered through it, the Fansipan cable car has run from the edge of town to the 3,143 m summit since 2016, Lào Cai city and its railway station lie 35 km east and Hanoi 250 km away. Fog and cold are the ordinary condition. Newcomers most often go wrong by taking Sa Pa for a mountain village, when it is a tourist town whose visitors outnumber residents many times over, and the villages lie outside it.",
    layout:
      "The town is built into the hillside, with surrounding valleys home to Hmong, Dao, and Tay ethnic-minority villages and stepped terraced fields.",
    gettingAround:
      "Neither Sapa nor Lao Cai Province has an airport; the nearest is Hanoi's Noi Bai International Airport (about 300 km away by road). A sleeper train from Hanoi to Lao Cai followed by a bus, or a direct long-distance bus, takes about 5 to 6 hours.",
    culture:
      "The valleys around Sapa are home to Hmong, Dao, Tay, and other ethnic-minority communities, and traditional handwoven textiles and market culture are well preserved.",
    seeAndDo:
      "The Fansipan cable car and hiking trails; the terraced rice fields of Muong Hoa Valley; Black Hmong villages (Cat Cat Village); Love Waterfall; the Sapa weekend night market.",
    whenAndTips:
      "September–November, when the golden rice ripens, and March–May, the water-filled planting season, are the best times for the terraced-field scenery; the mountains have a large day-night temperature swing, so pack warm clothing.",
  },
  "ha-long-city": {
    // identity sources: 建制：广宁省未与任何省合并、仍名广宁省；原下龙市域 30 个乡级单位并为 11 个，中心区为「下龙坊」（鸿华坊 + 鸿海坊），省的政治行政中心在此（2 级，广宁省官方媒体，2026-09-12 核；另有 2026 年后迁往统一社新行政区的计划）。人口 27 万是 2019 年普查的**旧市区**口径，正文已写明「此前的市区人口」。⚠️ 原文与同条目 howItWorks 段自相矛盾 —— identity 段没跟上改革。
    identity:
      "Ha Long was the capital city of Quang Ninh province in north-eastern Vietnam; since the district tier was abolished in July 2025 it has been split into several wards directly under the province, its former urban area holding about 270,000 people at the 2019 census, and the main gateway for exploring the karst islands of Ha Long Bay.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Hạ Long (former provincial city ceased 2025-07-01; capital of Quảng Ninh; 270,054 2019; Bãi Cháy tourist west vs Hòn Gai administrative/coal east, Bãi Cháy Bridge 2006; Ha Long Bay UNESCO 1994; cruises from Tuần Châu; Vân Đồn airport ~50 km; Hanoi ~165 km) — Vietnam 2025-07-01 two-tier reform (district level abolished) per Administrative divisions of Vietnam
    howItWorks:
      "Hạ Long is the capital of Quảng Ninh province, a former provincial city split into several wards directly under the province when the district tier was abolished in July 2025, with about 270,000 people in 2019. The city is in two halves: Bãi Cháy to the west is the tourist quarter of hotels and amusement parks, Hòn Gai to the east the old town of the provincial offices, the market and the coal mines, joined by the Bãi Cháy Bridge of 2006; Ha Long Bay has been World Heritage since 1994, most cruises leave from the pier on Tuần Châu island to the west, Vân Đồn airport lies about 50 km east and Hanoi about 165 km west, a little over two hours by expressway. Coal is the city's old trade. Newcomers most often go wrong by taking Hạ Long city for Ha Long Bay, when the bay is at sea, the city on shore, and the cruise pier on an island outside town.",
    layout:
      "The city extends along the shore of Ha Long Bay, with numerous boat piers along the coast serving as departure points for bay cruises.",
    gettingAround:
      "Van Don International Airport is about 41 km in a straight line from the city centre; a long-distance bus from Hanoi takes about 2.5 to 3 hours, and hiring a car via the expressway is another option.",
    culture:
      "Ha Long has grown rapidly around the Ha Long Bay tourism industry, with fishing and tourism as its two economic pillars.",
    seeAndDo:
      "A Ha Long Bay boat cruise (including caves and floating villages); the Hon Trong Mai (\"Fighting Cocks\") islet; Thien Cung Cave; the Queen Cable Car for a panoramic view of Ha Long Bay.",
    whenAndTips:
      "October–December and March–April are most pleasant; an overnight cruise is recommended, offering the chance to watch sunrise and sunset over the bay from the boat.",
  },
  "nha-trang-city": {
    // identity sources: 人口：改制前原市区约 50 万（与本条目 howItWorks 一致）；原文 54 万缺年份且与 howItWorks 打架。行政：2025-07-01 庆和省与宁顺省合并，**省名仍为庆和省**、省会在芽庄。2026-09-10 核。
    identity:
      "Nha Trang is the capital of Khánh Hòa province — which absorbed Ninh Thuận in 2025 and kept the name Khánh Hòa — its former city area holding about 500,000 people before the reform, on Nha Trang Bay, and a well-known Vietnamese beach and diving destination.",
    // howItWorks sources: **芽庄坊 47.12 km²、136,118 人**（万盛坊 + 禄寿坊 + 永原坊 + 新进坊 + 福和坊合并，2025-07-01 生效），与正文「约 47 平方公里、13.6 万人」精确吻合；庆和省与宁顺省合并后仍名庆和省、行政中心仍在芽庄。（1—2 级，庆和省官方网站，2026-09-12 核，无需改动。）
    howItWorks:
      "Nha Trang is the capital of Khánh Hòa province, a former provincial city split into several wards directly under the province when the district tier was abolished in July 2025, the central one called Nha Trang ward, about 47 km² with about 136,000 people, the whole former city about 500,000; the province absorbed Ninh Thuận the same year. The city runs along a 6 km beach, Trần Phú boulevard is the seafront axis with the hotels on one side and the locals' quarters a few blocks behind, the Po Nagar towers stand at the river mouth to the north, the Vinpearl resort on Hòn Tre island offshore is reached by cable car and ferry, the railway station lies in the centre and Cam Ranh airport about 35 km south. Newcomers most often go wrong by taking the seafront boulevard for Nha Trang, when the locals' markets and life lie a few streets back from the sea.",
    layout:
      "The city extends along Nha Trang Bay's beach, with the Po Nagar Cham towers on its north side; several offshore islands in the bay are the main destinations for island-hopping.",
    gettingAround:
      "Cam Ranh International Airport is about 27 km in a straight line from the city centre; taxis and Grab easily reach the beach and other attractions.",
    culture:
      "Nha Trang preserves the Po Nagar Cham towers from the era of the Champa kingdom, an important site for studying ancient Cham culture in Vietnam.",
    seeAndDo:
      "Nha Trang Beach; the Po Nagar Cham Towers; the Vinpearl island amusement park (reached by cable car); the granite scenery of Hon Chong Promontory; Nha Trang's mud-bath hot springs.",
    whenAndTips:
      "January–August is the dry season and most pleasant; the rainy season (September–December) occasionally brings typhoons; check sea conditions before island-hopping, as some outer-island routes suspend during the rainy season.",
  },
  "da-lat": {
    // identity sources: 建制：越南国会常委会决议 1671/NQ-UBTVQH15（政府政策门户全文，1/2 级，2026-09-12 核）—— 2025-07-01 起撤销大叻的市级建制，重组为兴香/金利/林园/春长/琅比安 5 个坊，直属合并后的林同省（省会仍设大叻）。人口：重组后官方**尚未公布**；2024-04 期中普查按旧 16 坊/社边界，2026-01 统计发布会只给人均 GRDP。所以正文把 25.8 万明确标注为「旧大叻市、2022 年底」，不再当作现状人口。下一轮回来看越南统计总局是否发布新坊级数据。
    identity:
      "Da Lat is the seat of Lâm Đồng province, which absorbed Bình Thuận and Đắk Nông in 2025 and kept the name Lâm Đồng. On 1 July 2025 Da Lat's city-level status was abolished and its territory reorganised into five wards; no population figure has been published for the new units, and the earlier figure of about 258,000 refers to the former city at the end of 2022. The town stands at about 1,500 m elevation; developed as a summer retreat during the French colonial period, it is now an important flower- and produce-growing region in Vietnam.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Đà Lạt (former provincial city ceased 2025-07-01; capital of Lâm Đồng province, which absorbed Bình Thuận and Đắk Nông; ~1,500 m Langbiang plateau; Yersin 1893, French hill station; Xuân Hương lake; Liên Khương airport ~30 km; no rail) — Vietnam 2025-07-01 two-tier reform (district level abolished) per Administrative divisions of Vietnam
    howItWorks:
      "Đà Lạt is the capital of Lâm Đồng province, a former provincial city split into several wards directly under the province when the district tier was abolished in July 2025; the province absorbed Bình Thuận and Đắk Nông the same year, running from the plateau to the coast. The city sits on the Langbiang plateau at about 1,500 m, made a hill station by the French after Yersin came upon the highland in 1893, villas and pines its groundwork, Xuân Hương lake in the centre, the market on the slope above the lake, flower and vegetable farms ringing the town, Liên Khương airport about 30 km south and no railway, the old station kept only as a monument. Newcomers most often go wrong by imagining Đà Lạt from Vietnam's climate, when a day here has four seasons and the evening needs a jacket.",
    layout:
      "The city is built into the hillside, with Xuan Huong Lake as its central landmark, and French-era villas and churches scattered across the undulating terrain.",
    gettingAround:
      "Lien Khuong Airport is about 30 km by road from the city centre; the terrain within the city is quite hilly, and taxis or motorbike rentals are common ways to get around.",
    culture:
      "Known as \"little Paris\" for its cool climate and French-era architecture, Da Lat is an important growing region for flowers, coffee, and strawberries in Vietnam.",
    seeAndDo:
      "A walk around Xuan Huong Lake; the \"Crazy House\" (a Hogwarts-style architectural fantasy); Da Lat Railway Station (French colonial architecture); the Da Lat night market; nearby coffee and strawberry farms.",
    whenAndTips:
      "The climate is cool and pleasant year-round, driest and most comfortable from December to March; bring a light jacket, as the hillside town gets cool at night.",
  },
  "can-tho": {
    // identity sources: 2025 年芹苴与后江省、朔庄省合并为新的中央直辖市，面积 6,360.83 平方公里、
    //   2025 年人口 4,199,824，市中心仍在宁桥。后江省 2025-06-12 撤销并入。
    //   https://en.vietnamplus.vn/party-chief-urges-merged-can-tho-city-to-proactively-set-strategic-breakthroughs-post320450.vnp
    //   （2 级，越南通讯社英文版，2026-09-08 核）。
    identity:
      "Can Tho is the largest city in the Mekong Delta, with a population of about 4.2 million after its 2025 merger with Hau Giang and Soc Trang provinces, and the core gateway for exploring the delta's floating markets and river-town culture.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Cần Thơ (centrally-governed city; merged with Hậu Giang and Sóc Trăng 2025; ~6,360 km²; ~4.2 million; 31 wards + 72 communes; Hậu River; Ninh Kiều; Cái Răng floating market; airport ~9 km; Khmer community in Sóc Trăng; HCMC ~170 km) — Vietnam 2025-07-01 two-tier reform (district level abolished) per Administrative divisions of Vietnam
    howItWorks:
      "Cần Thơ is a centrally-governed city of Vietnam; since Hậu Giang and Sóc Trăng provinces were merged into it in 2025 it covers about 6,360 km² with about 4.2 million people, and with the district tier abolished 31 wards and 72 communes lie directly beneath it. It is the centre of the Mekong Delta, the town on the west bank of the Hậu (Bassac) River, the Ninh Kiều wharf its point of reference, the Cái Răng floating market on the channel south of town, the Cần Thơ bridge of 2010 joining it to the far bank, the airport 9 km north-west, and a large Khmer community around Sóc Trăng. Ho Chi Minh City lies about 170 km north-east. Newcomers most often go wrong by taking Cần Thơ for a small town of floating markets, when it is a centrally-governed city of four million covering half the delta.",
    layout:
      "The city is built along the Hau River (a Mekong branch), with Ninh Kieu Bridge spanning the water; a dense network of channels surrounds the city, with floating markets on the waterways outside town.",
    gettingAround:
      "Can Tho International Airport is about 10 km by road from the city centre; exploring the floating markets requires an early-morning boat trip, with taxis and Grab available in the city.",
    culture:
      "Can Tho preserves a classic Mekong Delta river-town way of life, with floating-market trading activity concentrated in the early morning.",
    seeAndDo:
      "An early-morning boat trip to Cai Rang Floating Market; night views from Ninh Kieu Bridge; the Can Tho Museum; a boat trip through nearby orchards and canals; sunset over the Mekong.",
    whenAndTips:
      "December to April, the dry season, is most pleasant; visit the floating market between 5 and 7 am, when trading is at its liveliest.",
  },
  "phu-quoc-city": {
    // howItWorks sources（2026-09-15 核实，update）: 同上；下一期约 2027
    // howItWorks sources（2026-09-15 核实，update）: 富国特区 2024-12-31 口径 157,629（与同条目 identity 一致）；原「18 万」查无出处；下一期约 2027
    // identity sources: 人口：阳东坊 2020 年 44,607。**原文「约 2 万」偏低一倍以上。** 2025 年改革后阳东并入富国特区（2024-12-31 特区口径 157,629），坊一级不再单独发布 —— 已写进 claims-stale-exempt。2026-09-10 核。
    identity:
      "Duong Dong is Phu Quoc Island's main town, with a population of about 45,000 in 2020 — the 2025 reform folded it into the Phu Quoc special zone, so the ward is no longer counted separately — and the core hub for the island's tourism and fishing activities.",
    // howItWorks sources: 生效日：越南 2025 年的省级合并（国会第 202/2025/QH15 号决议，2025-06-12 通过）与县级撤销／乡级重组（各省常委会 168x 号决议，多数 2025-06-16 通过）**统一自 2025-07-01 生效** —— 写「2025 年 6 月」是把「决议通过日」当成了「生效日」。富国特区 = 原富国市整体（阳东坊 + 安泰坊 + 6 社），约 589 km²，2025-07-01 生效；坚江省并入安江省、行政中心在迪石（2 级，2026-09-12 核）。
    howItWorks:
      "Phú Quốc is Vietnam's largest island, about 575 km², made a city in 2021 and, since the district tier was abolished in July 2025, a 'special zone' directly under An Giang province, into which Kiên Giang was merged the same year with its capital at Rạch Giá. The island (Phú Quốc special zone) held about 158,000 people at the end of 2024, the main town of Dương Đông on the west coast with the airport, the night market and Long Beach nearby, An Thới at the southern tip with a cable car to Hòn Thơm island, the new resort city to the north, fish sauce and pepper the old industries, and the international airport of 2012 and visa-free entry for many nationalities — check the Vietnamese authorities for the current length and eligibility — making it an island open to the world. Newcomers most often go wrong by taking Phú Quốc for a resort, when it is an island 50 km long with about 158,000 residents and a zone government at Dương Đông.",
    layout:
      "The town extends along the mouth of the Duong Dong River, with the Duong Dong night market as its liveliest commercial street, and beach resort hotels lining the coast nearby.",
    gettingAround:
      "Phu Quoc International Airport is about 6 km in a straight line from town; taxis, motorbike rentals, and the island's cross-sea cable car are the main ways to get around.",
    culture:
      "Phu Quoc has a long tradition of fishing and fish-sauce production, and the Duong Dong night market showcases the island's seafood food culture.",
    seeAndDo:
      "Seafood at the Duong Dong night market; the world's longest cross-sea cable car (to An Thoi/Hon Thom island); hiking in Phu Quoc National Park; visiting pepper farms and fish-sauce workshops; a pearl farm.",
    whenAndTips:
      "November to April is the dry season and most pleasant, with calm seas suited to boat trips; the rainy season (May–October) occasionally brings heavy downpours, so check the weather before travelling.",
  },
  "ninh-binh": {
    // identity sources: 人口：原宁平市 2023-12-31 为 153,992（2022 年 148,869）。**该统计单元已消失**——2024 年底并入华闾县、2025-07-01 再与河南、南定合并为新宁平省，只能停在改革前最后一版，已写进 claims-stale-exempt。
    //   ⚠️ 另记：howItWorks 写「省会设在华闾坊」过度简化——2025-07-01 后原华闾市拆为华闾、东华闾、西华闾、南华闾 4 个坊，行政中心在原宁庆坊一带。下一轮软化这个专名。2026-09-10 核。
    identity:
      "Ninh Binh's Hoa Lu was the capital of Vietnam's first unified dynasty — in 968, Dinh Bo Linh founded the kingdom of Dai Co Viet and set his capital at Hoa Lu specifically for its ring of defensible limestone karst; the Dinh and Early Le dynasties ruled from here for over four decades, until 1010, when Ly Thai To judged the site too enclosed for the kingdom to grow and moved the capital to Hanoi (then Thăng Long). Ninh Binh is a city in northern Vietnam known for its karst rice-field scenery, its former urban core holding about 154,000 at the end of 2023, before the mergers, the core gateway for exploring the Trang An Landscape Complex and Tam Coc, often called \"Ha Long Bay on land.\"",
    // howItWorks sources: 「省会设在华闾坊」**经核实成立**：原宁平市与华闾县 2024 年底先合并为华闾市，2025-07-01 再拆为 4 个坊（华闾／东华闾／西华闾／南华闾）；新宁平省（宁平 + 河南 + 南定，保留「宁平」名）的政府机关地址落在原云江坊范围内，而云江坊已并入华闾坊。此前注释里担心这句「过度简化」，这次查到的具体地址反而印证了它，不需要软化。（2—3 级，2026-09-12 核，无需改动。）
    howItWorks:
      "Ninh Bình was the capital city of Ninh Bình province, which merged with Hà Nam and Nam Định in 2025 with its capital at Hoa Lư ward — the urban area formed from the former Ninh Bình city and Hoa Lư district — the wards lying directly under the province once the district tier was abolished. The town lies on the Đáy river, a plain provincial seat with the railway and bus stations, Hanoi about 95 km north; what people come to Ninh Bình for lies 7 to 15 km west in the karst hills — the boat rides of Tràng An and Tam Cốc, Bái Đính pagoda and the tenth-century capital of Hoa Lư, inscribed together as World Heritage in 2014. Newcomers most often go wrong by looking for the scenery in Ninh Bình town, when it lies in the fields and waterways outside, and the town is only a place to get off.",
    layout:
      "The city is ringed by limestone karst peak clusters, with rice paddies and waterways interwoven across the valley floors between the peaks.",
    // gettingAround sources: 机场距离：注册表坐标算出直线 109.3 公里，原文短于直线、不可能成立，已改为略高于直线的值（实际公路里程可能更长）。
    gettingAround:
      "There is no commercial airport locally; the nearest is Hanoi's Noi Bai International Airport (about 110 km in a straight line away); a train or long-distance bus from Hanoi takes about 2 to 2.5 hours.",
    culture:
      "The Ninh Binh area served as the capital of Vietnam's Dinh and Early Le dynasties from the 10th century onward, and the ancient capital ruins at Hoa Lu record this history.",
    seeAndDo:
      "Boating through the caves of the Trang An Landscape Complex; a bamboo-raft trip through Tam Coc (\"Three Caves\"); the ancient capital ruins at Hoa Lu; Bai Dinh Pagoda (one of Vietnam's largest Buddhist pagodas); Mua Cave and its viewpoint.",
    whenAndTips:
      "The rice fields are vivid green in May–June and golden-ripe in September–October, the best seasons for photographing the karst rice-field scenery; plan a full day for boating and hiking.",
  },

  // ── Vietnam batch 2 (2026-09-05) ──
  haiphong: {
    // identity sources: 合并方向：**海阳省并入海防市**（2025-07-01）。排名：海防 4,664,124 在六个中央直辖市中第三（胡志明市、河内在前），在全国 34 个省级行政区中第四 —— 安江省约 4,952,238 高于它（2 级，2026-09-12 核）。⚠️ 「第三大城市」这种不给口径的写法在两个口径下答案不同，已按 C1b 标准补口径。
    identity:
      "Haiphong is the largest port city of northern Vietnam, about 120 km east of Hanoi; after absorbing Hai Duong province in July 2025 it is a centrally run city of about 4.66 million people, third by population among Vietnam's six centrally-governed cities and fourth among all 34 provincial-level units. The French colonial opera house, cathedral and boulevards give the old centre a French air, and the flame trees that fill the city gave it the name 'city of red flamboyants'; Haiphong was the first city in Vietnam and mainland South-east Asia to be electrified. Cat Ba Island and Lan Ha Bay (inscribed in 2023 as an extension of the Ha Long Bay World Heritage site) lie in Haiphong's waters, Do Son is an old seaside resort, and the city's crab spring rolls and crab noodle soup are local specialities.",
    // howItWorks sources: 乡级单位：114 个 = 45 坊 + 67 社 + 2 特区（吉海 Cát Hải、白龙尾 Bạch Long Vĩ）—— 国会常委会第 1669/NQ-UBTVQH15 号决议，2025-07-01 生效（2 级转引，2026-09-12 核）。**吉海特区含吉婆岛**（本条目后文提到的吉婆岛即在该特区内）。面积 3,194.72 km²、人口 4,664,124、市政机关设于水源新城均与正文一致。
    howItWorks:
      "Haiphong is a 'centrally-governed city' of Vietnam, ranking with the provinces; since Hải Dương province was merged into it in 2025 it covers about 3,195 km² with about 4.66 million people, and with the district tier abolished that July 45 wards, 67 communes and the two special zones of Cát Hải and Bạch Long Vĩ lie directly beneath it, with the city offices at Thủy Nguyên. It is the largest port city of northern Vietnam: the port runs from the Cấm River in the city out to the Lạch Huyện deep-water terminal on the coast, with shipbuilding, steel and, lately, car-making spread around it, and it was the first city in Vietnam to be electrified. The old centre is the French-era quarter, with the Opera House and the flame trees of May as its emblems; Cát Bà island lies offshore, inscribed with Ha Long Bay as an extended World Heritage site in 2023. Hanoi is about 100 km away by expressway, and Cát Bi airport lies to the south-east. Addresses give number, street and ward, with lane and alley numbers below the house number. Motorbikes and cars carry the traffic. Newcomers most often go wrong by taking Haiphong for the pier to Cát Bà, when it is the industrial and port centre of the north.",
    layout:
      "The centre lies on the south bank of the Cam river, with the opera-house square, the cathedral, the market and the French quarter together and the port along the Cam. The Do Son peninsula lies about 20 km south-east with beaches and a casino. Cat Ba Island lies east in the sea, reached by road and bridge to the Cat Hai ferry and then a short crossing, or by fast boat in about 1 hour; Lan Ha Bay lies east of Cat Ba, joined to Ha Long Bay. Cat Bi Airport is about 6 km south-east of the centre.",
    gettingAround:
      "Cat Bi International Airport (HPH), about 7 km in a straight line from the centre, has scheduled domestic and international flights. Trains from Hanoi take about 2.5 hours and buses on the Hanoi–Haiphong expressway about 2. In town use taxis and motorbike taxis, with the old centre walkable; Cat Ba is about 2.5 hours by bus and ferry, or by fast boat from the city pier. The climate is tropical monsoon with hot wet summers and typhoons and cool winters.",
    culture:
      "Vietnamese is universal. Haiphong people are known for their directness, and street food runs deep: crab noodle soup (bánh đa cua), crab spring rolls and rice porridge. The square before the opera house is the civic gathering place. Cat Ba and Lan Ha Bay cruises are less crowded than Ha Long — choose licensed operators; Cat Ba National Park shelters the critically endangered golden-headed langur, so keep quiet. The flame trees bloom in May. Tipping is not expected.",
    seeAndDo:
      "The opera house and the French quarter; the cathedral and the Iron Market; the Cam river port; Do Son beach; Cat Ba Island (the national park, Cannon Fort, the beaches); Lan Ha Bay cruises and kayaking; street food (crab noodle soup); the rocky shore at Do Son.",
    whenAndTips:
      "October–December and March–May are most comfortable, with the flame trees in May; summers are hot and wet with typhoons. Half a day to a day for the city, one or two days for Cat Ba and Lan Ha Bay. An alternative gateway to the sea on a Hanoi–Ha Long route.",
  },
  "dong-hoi": {
    identity:
      "Dong Hoi lies on the central Vietnamese coast and is the gateway city to Phong Nha–Ke Bang National Park; since July 2025 the former Quang Binh province has been merged into Quang Tri. Phong Nha–Ke Bang is one of the world's most important karst cave regions, inscribed as a World Heritage site in 2003, extended in 2015 and in 2025 joined with Laos's Hin Nam No National Park as a transboundary site; it holds Son Doong, the world's largest cave (found by a local man in 1991 and announced by a British expedition in 2009; over 5 km long and about 200 m high), the 31 km Paradise Cave and Phong Nha Cave with its underground river. Dong Hoi itself has Nhat Le beach, the Quang Binh Gate and remnants of its citadel, and not far north lies the former 1954–1975 demarcation line (the DMZ) and the Vinh Moc tunnels.",
    // howItWorks sources: 广平省与广治省合并后**新省仍名「广治」**，政治行政中心设在原广平、即洞海；**洞海坊**由德宁东／同海／同富／富海／海城五坊加宝宁／德宁两社合并，基本覆盖原洞海市全域（2025-07-01 生效）。正文成立。（2—3 级，2026-09-12 核，无需改动。）
    howItWorks:
      "Đồng Hới was the capital city of Quảng Bình province, which merged with Quảng Trị in 2025 into a new Quảng Trị province with its capital at Đồng Hới, the urban area split into wards directly under the province once the district tier was abolished, the central one called Đồng Hới ward. The city lies at the mouth of the Nhật Lệ river, the beach on the east bank and the town on the west, the Quảng Bình gate a remnant of the old wall, the airport north of town and the railway station to the west; Phong Nha-Kẻ Bàng National Park lies about 42 km in a straight line north-west in the hills, World Heritage since 2003, with Paradise Cave and Sơn Đoòng within it. Newcomers most often go wrong by taking Đồng Hới for the doorstep of Phong Nha, when the caves lie an hour's drive into the hills and Đồng Hới is a provincial seat by the sea.",
    layout:
      "The city sits at the mouth of the Nhat Le river, with Nhat Le beach on the sandbar of the east bank (the Bao Ninh peninsula), the Quang Binh Gate and old walls in the centre, the station on the west side and the airport about 6 km north. Phong Nha village, about 45 km north-west, is the base for the caves — Phong Nha Cave, Paradise Cave and the Dark Cave all start from there; Son Doong lies deep in the park and is reached only on limited-number multi-day expeditions. The Vinh Moc tunnels and the Ben Hai river (the former dividing line) lie about 60–70 km south.",
    gettingAround:
      "Dong Hoi Airport (VDH), about 6 km north of the city, has scheduled domestic flights. Reunification Express trains take about 3 hours from Hue and 9–10 hours from Hanoi (overnight); buses run on Highway 1. In town use taxis and motorbike taxis, and cycle to the beach; Phong Nha is about 1 hour by local bus (a few a day), hired car or tour. The climate is tropical monsoon, with heavy rains and floods from September to December and dry heat from March to August.",
    culture:
      "Vietnamese is universal, with English-speaking guesthouses and agencies in Phong Nha. Enter caves only with licensed operators; Son Doong is run by a single operator with a yearly limit and a very high price, booked about a year ahead, while Paradise Cave and Phong Nha Cave have boardwalks and boats for everyone. Touch no formations and leave no litter inside caves. The Vinh Moc tunnels are a war site — keep quiet. Local food includes Dong Hoi's fish porridge (cháo canh) and seafood. Tipping is not expected.",
    seeAndDo:
      "Phong Nha Cave (by boat); Paradise Cave (boardwalk, with a longer caving option); the Dark Cave (kayaking, zip line); cycling the countryside and riverside around Phong Nha; a Son Doong or Hang En expedition (multi-day, limited); Nhat Le beach; the Quang Binh Gate and walls; the Vinh Moc tunnels and the Ben Hai river (DMZ); Dong Hoi market.",
    whenAndTips:
      "The March–August dry season is best for caving (Son Doong tours run January–August); caves may close in the September–December floods. At least two days for Phong Nha, half a day for Dong Hoi. Linked with Hue on a central Vietnam route.",
  },
  "quy-nhon": {
    // identity sources: 人口：原归仁市 481,110（2022 年，越南统计总局口径）—— 平定省政府官网，1 级，2026-09-12 核。⚠️ 原 identity 段的「约 58 万（2024）」**查无可靠出处**，且与同条目 howItWorks 段的 48 万相差 10 万；改革后新设的「归仁坊」只有 21.78 km²、129,326 人，是另一个统计单元，不能混用。建制：平定省并入嘉莱省（保留「嘉莱」名），政治行政中心设在原平定，即归仁。
    identity:
      "Quy Nhon lies in a crescent bay on the south-central coast of Vietnam, with about 481,000 people (2022, the pre-reform city of Quy Nhon); since July 2025 the former Binh Dinh province has been merged into Gia Lai, of which Quy Nhon is the seat. This was a heartland of the ancient Champa kingdom (eleventh-century Vijaya), with the Twin Towers in the city and the Binh Dinh Cham towers outside it; Zheng He's fleet called here in the fifteenth century. The poet Han Mac Tu died at the Quy Hoa leprosy hospital and is buried here, and the Tay Son uprising began to the west, where the Quang Trung Museum stands. Ky Co beach and the Eo Gio sea cliffs are newly popular, Binh Dinh is Vietnam's martial-arts homeland, and Quy Nhon is far quieter than Nha Trang.",
    // howItWorks sources: 富吉机场在归仁西北约 30–35 km；原文写「北面」方位不准。**随机抽样审计（seed=1）抽中**。2026-09-12 核。
    howItWorks:
      "Quy Nhơn was the capital city of Bình Định province, with about 481,000 people in 2022; in 2025 Bình Định merged with Gia Lai into a new Gia Lai province with its capital at Quy Nhơn, and the urban area was split into wards directly under the province once the district tier was abolished. The city runs along a crescent bay, the seafront boulevard and the centre in the middle of the curve, the Twin Cham Towers in town, Kỳ Co and Eo Gió on the headland of the Phương Mai peninsula about 20 km north, Phù Cát airport about 30 km to the north-west and the railway station at Diêu Trì to the west; the homeland of the Tây Sơn uprising lies in the hills to the west. Newcomers most often go wrong by taking Quy Nhơn for a small beach town, when it is now the capital of a merged province running from the coast to the central highlands.",
    layout:
      "The city follows the crescent bay, with the beach on its edge and the seafront boulevard as the hotel and restaurant strip; the Twin Towers stand in the north-west of the city and the station (its branch line now closed) in the centre. Quy Hoa and Han Mac Tu's grave lie in a valley south of the city; Ky Co beach and Eo Gio are about 20 km north-east on the Phuong Mai peninsula; the Banh It (Silver) towers about 20 km north; and the Quang Trung Museum about 40 km in a straight line west at Tay Son. The airport is about 30 km north-west.",
    gettingAround:
      "Phu Cat Airport (UIH), about 30 km from the city, has only a few domestic routes, with an airport bus. Reunification Express trains stop at Dieu Tri (about 10 km north-west of the city) — about 6 hours from Da Nang and 4 from Nha Trang; buses run on Highway 1. In town use taxis and motorbike taxis, with the beach on foot; Ky Co and Eo Gio are about 40 minutes by hired car or motorbike taxi. The climate is tropical monsoon, wet from September to December and dry from January to August.",
    culture:
      "Vietnamese is universal; tourism is still developing and English is limited. The Cham towers are monuments — no climbing. The Quy Hoa hospital grounds and the poet's grave are quiet places. Martial-arts villages in Binh Dinh give demonstrations, and the Quang Trung Museum at Tay Son is a memorial. Local food includes Binh Dinh's jumping-shrimp pancakes (bánh xèo tôm nhảy), fish cakes and seafood. Tipping is not expected.",
    seeAndDo:
      "Quy Nhon beach and the seafront; the Twin Towers; Ky Co beach and the Eo Gio cliffs; Quy Hoa and Han Mac Tu's grave and memorial garden; the Binh Dinh Cham towers (Silver and Bronze); the Quang Trung Museum (Tay Son); Long Khanh pagoda; the dunes and fishing villages of the Phuong Mai peninsula; seafood at the night market.",
    whenAndTips:
      "February–August is best, with the clearest water in March–May; September–December is wet. A day for the city, a day for Ky Co and the towers. A stop between Nha Trang and Da Nang for those avoiding the crowds.",
  },
  "phan-thiet": {
    identity:
      "Phan Thiet lies on the southern Vietnamese coast about 200 km north-east of Ho Chi Minh City; since July 2025 the former Binh Thuan province has been merged into Lam Dong. It is known for Mui Ne, about 20 km east — a former fishing village whose coast is now a resort strip of about 15 km, with the red and white sand dunes and the Fairy Stream as its landmarks, and steady monsoon winds that make it one of Asia's best kitesurfing spots. Phan Thiet has made fish sauce since ancient times, the Cham-era Po Shanu towers stand on a hill east of the city, Ta Cu mountain holds one of Vietnam's largest reclining Buddhas, and the Ke Ga lighthouse to the south was built by the French in 1899. Ho Chi Minh taught briefly at the Duc Thanh school in Phan Thiet.",
    // howItWorks sources: **潘切坊 4.46 km²、85,493 人**（富贞坊 + 乐道坊 + 平兴坊合并，2025-06-16 决议、2025-07-01 生效），与正文「约 4.5 平方公里」吻合；平顺省与得农省并入林同省（保留「林同」名），政治行政中心在原林同、即大叻。（3 级转引决议，2026-09-12 核，无需改动。）
    howItWorks:
      "Phan Thiết was the capital city of Bình Thuận province, about 230,000 people; in 2025 Bình Thuận was merged into Lâm Đồng province with its capital at Đà Lạt, and the urban area was split into wards directly under Lâm Đồng once the district tier was abolished, the central one called Phan Thiết ward, only about 4.5 km². The city lies at the mouth of the Cà Ty river, fish-sauce works lining the banks, the market and the old streets on either side; Mũi Né is another ward about 20 km east, its resorts strung along the coast road with the red and white dunes further east, Ho Chi Minh City about 200 km south-west, about two and a half hours since the expressway opened in 2023, the train reaching Phan Thiết station, and an airport whose civil-aviation section broke ground in April 2026 with a target opening in 2027, with no scheduled commercial flights before that. Newcomers most often go wrong by taking Mũi Né for Phan Thiết, when Phan Thiết is a city of fishing port and fish sauce and Mũi Né its beach 20 km away.",
    layout:
      "The city sits at the mouth of the Ca Ty river, with fish-sauce works and the fishing port along the river and the Po Shanu towers on the hill to the east. The Mui Ne resort strip runs north-east along the coast from Phan Thiet: Nguyen Dinh Chieu road is the hotel zone, Mui Ne fishing village lies at its eastern end with the red dunes nearby and the white dunes about 25 km further north-east; the Fairy Stream lies midway along the hotel zone. Ta Cu mountain is about 30 km south-west and the Ke Ga lighthouse about 30 km south-west on its headland. The station is on the north side of the city.",
    gettingAround:
      "Phan Thiet has no operating airport (a new one is under construction); the nearest are Cam Ranh (about 200 km) and Ho Chi Minh City's Tan Son Nhat (about 200 km). Trains from Saigon station take about 4 hours; since the Ho Chi Minh City–Phan Thiet expressway opened in 2023 buses take about 3 hours, and resorts run shuttles. Around Mui Ne use taxis, hire a motorbike, or charter a jeep for the dunes (at dawn or dusk). The climate is tropical and dry — one of the least rainy parts of Vietnam — with a windy dry season from December to April (the kitesurfing season) and rain from May to November.",
    culture:
      "Vietnamese is universal, with plenty of Russian and English signage in Mui Ne. Sandboarding and quad-bike touts on the dunes overcharge — agree prices first; the Fairy Stream is walked barefoot in the water. The fishing village's morning market shows the catch, and seafood stalls cook what you pick. Fish-sauce works can be visited. Ta Cu is a Buddhist sanctuary — dress modestly; the Cham towers are monuments. Tipping is not expected.",
    seeAndDo:
      "Sunset on the red dunes and sunrise on the white dunes; the Fairy Stream; Mui Ne fishing village and its morning market; kitesurfing and windsurfing; the Po Shanu Cham towers; the reclining Buddha of Ta Cu (cable car); the Ke Ga lighthouse; a fish-sauce works and the Duc Thanh school in Phan Thiet; the seafood stalls on Mui Ne beach.",
    whenAndTips:
      "December–April is best and the kitesurfing season; May–November has little rain but less wind. Stay two or three nights. Reached from Ho Chi Minh City in a day and often linked with Da Lat (about 4 hours over the mountains).",
  },
  "vung-tau": {
    identity:
      "Vung Tau lies at the tip of a peninsula about 95 km by road south-east of Ho Chi Minh City, the most convenient seaside city of the south; since July 2025 the former Ba Ria–Vung Tau province has been merged into Ho Chi Minh City. Under French rule it was Cap Saint-Jacques, and the lighthouse of 1910 and the governor's villa, the White Palace, survive; the Christ statue on the small mountain, begun in 1974 and completed in 1993, stands about 32 m tall and is one of Vietnam's best-known landmarks. Front Beach and Back Beach are the two main beaches, the offshore oil and gas fields make Vung Tau the base of Vietnam's petroleum industry, and the ferry to Con Dao leaves from here.",
    // howItWorks sources: **头顿坊 16.86 km²、117,413 人**（第 1—5 坊 + 胜二坊 + 胜三坊合并，第 1685/NQ-UBTVQH15 号决议，2025-07-01 生效），与正文「约 17 平方公里、12 万人」吻合；巴地—头顿省与平阳省**同时**并入胡志明市（保留「胡志明市」名），政治行政中心留在原胡志明市。（2 级，2026-09-12 核，无需改动。）
    howItWorks:
      "Vũng Tàu was a provincial city of Bà Rịa–Vũng Tàu, about 350,000 people; in 2025 that province was merged into Ho Chi Minh City, and once the district tier was abolished the urban area was split into wards directly under Ho Chi Minh City, the one at the tip of the peninsula called Vũng Tàu ward, about 17 km² with about 117,000 people. The city lies on a peninsula running into the sea, Front Beach facing the harbour to the west and Back Beach the open sea to the east, the two hills of Núi Lớn and Núi Nhỏ framing the town, the Christ statue and the lighthouse on Núi Nhỏ its reference points, and the Vietsovpetro base making it Vietnam's offshore oil centre; Saigon lies about 95 km north-west, about an hour and a half since the expressway of 2023, and ferries sail to Côn Đảo. Saigon pours in at weekends. Newcomers most often go wrong by taking Vũng Tàu for an independent seaside city, when it is now a ward of Ho Chi Minh City, whose government sits 95 km away by road.",
    layout:
      "Vung Tau occupies a long narrow peninsula with two hills — Big Mountain (Nui Lon) and Small Mountain (Nui Nho) — the lighthouse on Small Mountain's summit, the Christ statue on its southern slope and the White Palace at the foot of Big Mountain by the sea; Front Beach (Bai Truoc) faces the bay on the west side with the old town and the pier, and Back Beach (Bai Sau) on the east side is the long beach and hotel zone. Nghinh Phong cape at the southern tip is the southernmost point. The passenger pier and the Con Dao ferry are on the Front Beach side.",
    gettingAround:
      "Vung Tau has no commercial airport; from Ho Chi Minh City's Tan Son Nhat it is about 2 hours by road, and Con Dao flights leave from Ho Chi Minh City. Buses from Ho Chi Minh City take about 2 hours on the expressway, and fast boats from the Saigon river port about 2 hours. In town use taxis or hire a motorbike; Front and Back beaches are about 3 km apart, and the Christ statue is climbed by about 800 steps. The climate is tropical monsoon, wet from May to October and dry from November to April.",
    culture:
      "Vietnamese is universal, and visitors from Ho Chi Minh City crowd in at weekends. The Christ statue is a religious site — dress modestly to climb (no bare shoulders or shorts; rules are posted); the lighthouse and the White Palace are heritage sites. Watch for rip currents and red flags at Back Beach. The seafood stalls are on Back Beach, and bánh khọt (small savoury pancakes) are the local snack. The oil companies' expatriate community supports a few Western restaurants. Tipping is not expected.",
    seeAndDo:
      "The Christ statue (climb for the peninsula view); the lighthouse and the Small Mountain path; the White Palace (Bach Dinh); the Front Beach seafront and sunset at the pier; Back Beach; Nghinh Phong cape and Huong Phong beach; the Guanyin statue and Niet Ban pagoda; bánh khọt; the ferry to Con Dao (about 3.5 hours).",
    whenAndTips:
      "November–April is best; weekends and holidays are crowded and expensive, weekdays calmer. A day or a night. A seaside escape from Ho Chi Minh City or a stepping stone to Con Dao.",
  },
  "ha-giang": {
    // identity sources: 生效日：越南 2025 年的省级合并（国会第 202/2025/QH15 号决议，2025-06-12 通过）与县级撤销／乡级重组（各省常委会 168x 号决议，多数 2025-06-16 通过）**统一自 2025-07-01 生效** —— 写「2025 年 6 月」是把「决议通过日」当成了「生效日」。合并后保留「宣光」省名，政治行政中心在原宣光省（宣光市）、不在河江（1 级，宣光省政府官网，2026-09-12 核）。
    identity:
      "Ha Giang lies in the valley of the Lo river at the northern tip of Vietnam about 320 km north of Hanoi, the starting point of the 'Ha Giang Loop'; since July 2025 the former Ha Giang province has been merged into Tuyen Quang. North of the city the Dong Van Karst Plateau, Vietnam's first UNESCO Global Geopark (2010), spreads its limestone peaks, deep valleys and terraces to the Chinese border; the Ma Pi Leng Pass (about 1,500 m) above the Nho Que gorge is the most dramatic stretch of the loop, and the Lung Cu flag tower marks the northernmost point of Vietnam. This is the home of the Hmong, Tay, Dao, Nung and some twenty other peoples, whose weekend markets and dress are the main attraction. The loop is usually ridden by motorbike or driven over three or four days.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Hà Giang city (former capital of Hà Giang province; 2025 Hà Giang merged into Tuyên Quang province, capital Tuyên Quang; now wards under Tuyên Quang; Lô river; ~100 m; start of the Hà Giang Loop — Đồng Văn karst plateau UNESCO Global Geopark 2010, Mã Pí Lèng, Lũng Cú ~180 km; no airport; Hanoi ~300 km) — Vietnam 2025-07-01 two-tier reform (district level abolished) per Administrative divisions of Vietnam
    howItWorks:
      "Hà Giang city was the capital of Hà Giang province, which was merged into Tuyên Quang province in 2025 with its capital moved to Tuyên Quang, and once the district tier was abolished the urban area was split into wards directly under Tuyên Quang. The city lies in the valley of the Lô river at only about 100 m, an ordinary border town, Hanoi about 300 km south by road alone, with no airport with scheduled flights, and the Chinese border 20 km north; people come here to set out northward: the Đồng Văn karst plateau became a UNESCO Global Geopark in 2010, the Mã Pí Lèng pass and the Lũng Cú flag tower lie 150 to 180 km into the mountains, Hmong, Tày and Dao villages scattered along the way, and a rented motorbike is the usual means. Newcomers most often go wrong by taking Hà Giang city for the scenery, when it is only the start of the loop and the scenery lies three or four days up the road.",
    layout:
      "Ha Giang city sits in the valley on both banks of the Lo, with the Km 0 marker as the loop's start. North via Quan Ba (Heaven's Gate and the Twin Mountains) and Yen Minh to Dong Van (old quarter, the Vuong palace, the Lung Cu tower) is about 150 km, then over the Ma Pi Leng Pass to Meo Vac (Sunday market) about 25 km, and back south via Bac Me or Bao Lac to Ha Giang — about 350 km in all. Mountain roads link the towns, and Dong Van and Meo Vac are the usual overnight stops.",
    gettingAround:
      "Ha Giang has no airport with scheduled flights; the nearest is Hanoi's Noi Bai (about 320 km). Buses and sleeper coaches from Hanoi's My Dinh station take about 6 hours, mostly overnight. The loop is ridden on hired motorbikes (an international licence is required; local 'easy rider' drivers carry passengers), by hired car or with a tour — winding roads and landslides in the rains. The climate is subtropical highland, cold and foggy in winter and rainy in summer.",
    culture:
      "Vietnamese is universal, and each people has its own language. Foreigners need a border-area permit (arranged cheaply by guesthouses or agencies). The markets (Dong Van and Meo Vac on Sundays) are where the peoples gather — ask before photographing and don't block the way; ask before entering village courtyards, and give children neither sweets nor money. The Vuong palace is a heritage site. Don't ride at night. Corn wine, buckwheat cakes and cured meat are the mountain foods. Tipping is not expected.",
    seeAndDo:
      "The Ha Giang Loop (three to four days); Heaven's Gate and the Twin Mountains at Quan Ba; the Dong Van old quarter and the Vuong palace; the Lung Cu flag tower; the Ma Pi Leng Pass and a boat on the Nho Que river; the Meo Vac Sunday market; the terraces in buckwheat-flower season (October–November); the Hoang Su Phi terraces west of Ha Giang (September–October); the ethnology museum in Ha Giang city.",
    whenAndTips:
      "September–November is best (buckwheat flowers, golden terraces, stable weather), and March–May is good; June–August brings rain and landslides, December–February cold fog. Allow at least four days including travel. Motorbikes need a licence and insurance, roads are slippery in rain — ride within your ability.",
  },
};
