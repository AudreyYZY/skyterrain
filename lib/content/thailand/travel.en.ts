import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "thailand-overview": {
    // identity sources: NSO Thailand《Statistical Yearbook Thailand 2025》采用内政部地方行政厅（DOPA）户籍登记口径：2025-01-08 为 65,951,210 人。https://www.nso.go.th/public/e-book/Statistical-Yearbook/SYB-2025/55/
    //   **这是本轮发现的一个新错误模式**：原文「约7100万」与联合国 World Population Prospects 的推算口径（约 7160 万）吻合，与泰国本国官方登记口径差约 560 万。国际机构推算与本国官方统计是两套方法，不能混用——正文只写本国官方口径。核实日 2026-09-07，来源级别 1
    identity:
      "The Kingdom of Thailand sits at the centre of the Southeast Asian mainland, covering about 510,000 km² with a registered population of about 65.95 million as of January 2025 (National Statistical Office of Thailand); the capital is Bangkok, the official language is Thai, and the currency is the Thai baht (THB).",
    layout:
      "The country divides broadly into five regions: the central plain (Bangkok, Ayutthaya), the northern mountains (Chiang Mai, Chiang Rai, Sukhothai), the north-eastern Isan plateau (Udon Thani, Nakhon Ratchasima), the eastern coast (Pattaya), and the southern peninsula (Phuket, Krabi, Koh Samui).",
    gettingAround:
      "Domestic flights are centred on Bangkok's two airports — Suvarnabhumi (mainly international) and Don Mueang (mainly low-cost carriers); within Bangkok the BTS Skytrain and MRT subway cover the main districts, taxis and tuk-tuks are common, and the Grab app is widely used. Visa-exemption or visa-on-arrival arrangements for short-term visitors from various countries follow the latest announcements from Thailand's Ministry of Foreign Affairs.",
    culture:
      "The official language is Thai, and Buddhism is the dominant religion; modest dress and removing shoes are required at temples. Pointing your feet at people or Buddha images, and touching someone's head, are considered disrespectful; women should not touch monks directly or hand them things by hand. Avoid joking about or criticising the Thai monarchy in public — insulting it is a criminal offence in Thailand. Tipping is not mandatory but leaving a small amount at restaurants and spas is common etiquette. Voltage is 220V, with a mix of type A/B/C/O sockets in use.",
    seeAndDo:
      "Natural landforms: the granite Similan Islands and the karst islands of Ao Phang Nga in the Andaman Sea, the Khorat Plateau and the mesa of Phu Kradueng, and Doi Inthanon and Doi Luang Chiang Dao in the north. Heritage and culture: the Grand Palace in Bangkok, Ayutthaya Historical Park, and Sukhothai Historical Park. Islands and beaches: Phuket, Koh Samui, and Krabi.",
    whenAndTips:
      "November to February, the cool season, is the most pleasant and the peak tourist period; March–May is hot, June–October is the rainy season, and the rainy season timing differs slightly between the peninsula's east and west coasts — worth checking the specific coast's seasonal pattern before travelling.",
  },
  bangkok: {
    // identity sources: 泰国的人口登记由**内政部地方行政厅（DOPA / กรมการปกครอง）**发布，基准日每年 12 月 31 日，
    //   次年 1—2 月公布上一年度数据（一手站点 stat.bora.dopa.go.th，2026-09-08 本轮多次直连失败，
    //   只能经泰媒与维基转引，来源级别 2—3 级）。
    //   曼谷 DOPA 登记人口 **5,422,568 人（2025-12-31）**；曼谷都会区（曼谷 + 暖武里/巴吞他尼/北榄/
    //   龙仔厝/北柳）DOPA 登记合计约 **1,087 万（2022-12）**。
    //   **原 identity 的「1050 万」与「都会区 1700 万」两个数都查无来源** —— 英文维基信息框的
    //   17,400,000 未标年份与出处，疑为建成区推算。
    //   **泰国有两套并行口径**：DOPA 登记（户籍）与 NSO 普查（实际居住）。NSO 2025 年初步普查的
    //   六省规划区数为 1,522 万 —— 与登记数不可混用。本项目统一优先用 DOPA 登记口径并写明。
    identity:
      "Bangkok is Thailand's capital and largest city, with a registered population of about 5.42 million in December 2025 and more than 10 million across the Bangkok Metropolitan Region of Bangkok plus its neighbouring provinces, built on the Chao Phraya Delta and the country's centre of politics, economy, and culture.",
    // howItWorks sources: Wikipedia (2026-09): Bangkok (special administrative area; elected governor; 50 khet with appointed directors, 180 khwaeng; 1,569 km²; registered ~5.4 million; BMR with 5 provinces); Local government in Thailand
    howItWorks:
      "Bangkok is Thailand's only 'special administrative area', ranking with the provinces and governed by the Bangkok Metropolitan Administration, whose governor is directly elected — the only elected provincial-level executive in the country, the governors of every other province being appointed by the Ministry of Interior — with a council elected from the districts. The city is divided into 50 districts (khet), whose directors are appointed by the governor, and 180 subdistricts (khwaeng). It covers about 1,569 km² with a registered population of about 5.42 million in December 2025, while the Bangkok Metropolitan Region — Bangkok with Nonthaburi, Samut Prakan, Pathum Thani and other neighbouring provinces — has more than 10 million registered, each of those provinces under a government of its own. The Chao Phraya divides the city: Rattanakosin on the east bank is the old city of the Grand Palace, Sukhumvit, Silom and Sathon are the business districts, and Thonburi on the west bank joined Bangkok only in 1972. Addresses give number, soi (lane), road and district, and locals place things by soi number. BTS, MRT and the airport link form a network, congestion remains daily life, and canal boats are the old city's other passage. Newcomers most often go wrong by taking Bangkok for one city, when its metropolitan region straddles several provinces.",
    layout:
      "The city is organised along the Chao Phraya River, with the old town (home to the Grand Palace and Wat Phra Kaew) on the east bank, modern commercial districts such as Siam and Silom in the city centre and east, and a canal network still serving as an important mode of transport in some areas.",
    gettingAround:
      "Suvarnabhumi Airport is the main international gateway, about 28 km in a straight line from the city centre; domestic low-cost carriers mostly use Don Mueang Airport. The BTS Skytrain and MRT subway cover the main commercial districts, and Chao Phraya River ferries are also a convenient way to get around.",
    culture:
      "Thai is the official language, and English is fairly widely spoken in tourist areas. Bangkok has a strong night-market culture, and street food is an important part of local food culture. Tipping is not mandatory at restaurants, but leaving small change is common etiquette.",
    seeAndDo:
      "The Grand Palace and Wat Phra Kaew; Wat Arun (Temple of Dawn); a night cruise on the Chao Phraya River; the Chatuchak Weekend Market; Khao San Road and the Siam shopping district.",
    whenAndTips:
      "November to February, the cool season, is best for travel; dress modestly when visiting temples (no bare shoulders or knees), and some attractions close on Mondays.",
  },
  "chiang-mai": {
    // identity sources: 泰国内政部地方行政厅（DOPA）基准日每年 **12 月 31 日**，全国公告次年 1—2 月发布；
    //   市镇与府级细分表由二手渠道零散转引、滞后数周到数月。**一手站点 stat.bora.dopa.go.th 本轮仍直连失败**
    //   （疑 SPA/反爬），下一轮试其开放数据接口或 gdcatalog.go.th。2026-09-09 核。
    //   chiang-mai：见 finding 中的 2025/2024/2023 年 DOPA 登记数（3 级转引，2026-09-09 核）。
    //   **本轮通过泰文维基的「เทศบาลนครในประเทศไทย」整表页拿到了 2568 年（2025）末的市镇细分数**，
    //   补上了前两轮因一手站点直连失败留下的缺口。
    identity:
      "Chiang Mai is the largest city in northern Thailand, with a registered municipal population of about 112,000 in 2025 (the built-up area spreads well beyond the municipal boundary, but has no official statistical basis), set in the Ping River valley; once the ancient capital of the Lanna kingdom, it is northern Thailand's cultural and craft centre.",
    // howItWorks sources: 北端终点：目前成立；登斋—清莱—清孔双线铁路 2026-03 进度约 59.6%、目标 2028 年通车，通车后最北端移至清孔（2 级，2026-09-12 核）。正文已写成「目前是」并附在建线路 —— 既不提前写成已发生，也不会在 2028 年突然过期。
    howItWorks:
      "Chiang Mai is the seat of Chiang Mai province, whose governor is appointed by the Ministry of Interior; the city itself is a 'city municipality' with an elected mayor and council, but it covers only about 40 km² with about 112,000 people at the end of 2025, while the real city has long spilled into the surrounding districts, a built-up area of about a million people split among a dozen local bodies of their own. The square moated old city is the capital of the Lanna kingdom founded in 1296 and remains the point of reference; Nimmanhaemin to the west is the new commercial quarter, the Night Bazaar lies by the river to the east, and Doi Suthep looks down from the north-west. The Superhighway ring is the edge of the city in local minds. There is no rail transit, red songthaews and tuk-tuks carry the traffic, and the railway station is currently the northern terminus of the Thai rail network (a new line via Den Chai to Chiang Rai and Chiang Khong is under construction, targeted to open in 2028, after which the northern terminus will shift to Chiang Khong). The northern dialect, Kham Mueang, is still the everyday speech of many locals. Addresses give number, soi, road and subdistrict. The burning season from February to April brings severe air pollution. Newcomers most often go wrong by taking the old city for Chiang Mai, when the municipality governs only a small corner of the built-up area.",
    layout:
      "The old town is a square bounded by walls and a moat on all four sides, densely dotted with temples, while the Nimman Road area is a hub of modern cafés and design shops.",
    gettingAround:
      "Chiang Mai International Airport is about 3.4 km in a straight line from the city centre, the aviation hub of northern Thailand; the old town is easily explored on foot or by songthaew (converted pickup-truck taxi).",
    culture:
      "The local Lanna dialect exists alongside standard Thai; Chiang Mai is known for its Sunday walking-street night market and craft markets. Tipping at restaurants is not mandatory.",
    seeAndDo:
      "Wat Phra Singh and Wat Chiang Man; Wat Phra That Doi Suthep (overlooking the whole city from its hillside); the Sunday walking-street night market; a day trip to Doi Inthanon National Park; the Nimman Road café district.",
    whenAndTips:
      "November to February, the cool season, is most pleasant; in some years, February–April sees reduced air quality from surrounding agricultural burning, so check the air quality index before travelling.",
  },
  phuket: {
    // howItWorks sources（2026-09-15 核实，add-year）: 普吉镇 71,284（2024）、普吉府 429,583（2024-12-31，DOPA，1 级；2025 年末一期因 DOPA 站点连不上未核）；下一期约 2026-10
    // identity sources: 普吉府 429,583（2024-12-31，NSO 报告，级别 1）；普吉镇 71,284（2024，3 级）。**identity 用府口径、howItWorks 用镇口径，两段各自准确、不是数字打架** —— 这一点写在这里免得下一轮被「统一」掉。截至 2026-09-10 未见 2025 年末更新一期（NSO 报告惯例次年发布，值得下一轮回来确认）。2026-09-10 复核，维持 2026-09-09 结论。
    identity:
      "Phuket is Thailand's largest island, with a registered population of about 430,000 in 2024, in the Andaman Sea, and the country's most famous island resort destination.",
    // howItWorks sources: Wikipedia (2026-09): Phuket (city) (thesaban nakhon ~12 km², 71,284 2024; provincial capital; Old Town Sino-Portuguese; airport 36 km; Patong in Kathu district); Local government in Thailand
    howItWorks:
      "Phuket is a province of Thailand whose governor is appointed by the Ministry of Interior, with three districts on the island; Phuket Town is the provincial seat and itself a 'city municipality' with an elected mayor and council, covering only about 12 km² with about 71,000 people in 2024, while the island's registered population was about 430,000 at the end of 2024 (Department of Provincial Administration) and its real population far larger. Most of what people picture as 'Phuket' lies outside the town: the beach resorts of Patong, Karon and Kata are in Kathu district on the west coast, each under a local body of its own, the airport lies 36 km north in Thalang district, and the Sarasin Bridge ties the island to the mainland. The town is the Chinese trading settlement of the tin-mining era, and its Sino-Portuguese shophouses and Peranakan food and festivals are its identity, recognised in 2015 as a UNESCO Creative City of Gastronomy. Songthaews are the local public transport, and there is no railway. Addresses give number, soi, road and subdistrict. Newcomers most often go wrong by taking Phuket Town for a resort, when it is the provincial seat where islanders live and do business, with the beaches in other districts.",
    layout:
      "The west coast is lined with major beach resort areas including Patong, Karon, and Kata, while Phuket Town preserves an old quarter blending Portuguese and Chinese architectural styles.",
    gettingAround:
      "Phuket International Airport is about 32 km from Phuket Town and about 42 km from Patong Beach; taxis, songthaews, and motorbike rentals are common ways to get around the island.",
    culture:
      "Phuket Town's old quarter attracted large numbers of Chinese and Portuguese traders during the historic tin-mining era, producing a distinctive Sino-Portuguese architectural style. The local Chinese community holds a traditional procession each year during the Vegetarian Festival.",
    seeAndDo:
      "Nightlife on Patong Beach; the Sino-Portuguese old quarter of Phuket Town; a day trip to Ao Phang Nga; the Big Buddha viewpoint; the Karon viewpoint.",
    whenAndTips:
      "November to April is the dry season and the best time to visit; from May to October the south-west monsoon brings rougher seas on the Andaman side, and some beach activities are suspended.",
  },
  krabi: {
    // identity sources: 泰国内政部地方行政厅（DOPA）基准日每年 **12 月 31 日**，全国公告次年 1—2 月发布；
    //   市镇与府级细分表由二手渠道零散转引、滞后数周到数月。**一手站点 stat.bora.dopa.go.th 本轮仍直连失败**
    //   （疑 SPA/反爬），下一轮试其开放数据接口或 gdcatalog.go.th。2026-09-09 核。
    //   krabi：见 finding 中的 2025/2024/2023 年 DOPA 登记数（3 级转引，2026-09-09 核）。
    //   **本轮通过泰文维基的「เทศบาลนครในประเทศไทย」整表页拿到了 2568 年（2025）末的市镇细分数**，
    //   补上了前两轮因一手站点直连失败留下的缺口。
    identity:
      "Krabi is a province on Thailand's southern Andaman coast, with a registered population of about 483,000 in 2023, known for its steep limestone karst coastline and the rock-climbing destination of Railay Peninsula.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Krabi (thesaban mueang ~19 km², 32,644 2020; capital of Krabi province, appointed governor; Krabi River/Phang Nga Bay; Ao Nang ~20 km separate subdistrict; Railay boat only; Ko Phi Phi/Ko Lanta in province; airport 12 km — ⚠️ 2026-09-13 check:airports 抓到同条目两说：howItWorks 写 12 km、gettingAround 写 18 km，直线只有 8.9 km。两句指的是同一座机场，已统一到 18 km（与 gettingAround 一致），下一轮拿机场官方或公路里程定一个准数)
    howItWorks:
      "Krabi town is the seat of Krabi province, whose governor is appointed by the Ministry of Interior; the town itself is a 'town municipality' of about 19 km² with about 33,000 people in 2020 and an elected mayor. The town lies where the Krabi River enters Phang Nga Bay, the place of the provincial offices, the hospital, the bus station and the night market, with the airport about 18 km north-east; the beaches people come to Krabi for are all outside town — Ao Nang about 20 km west under a local body of its own, Railay reachable only by boat, and Ko Phi Phi and Ko Lanta an hour or two out to sea. Newcomers most often go wrong by looking for a beach in Krabi town, when the town has only the river and the mangroves, and the beaches are at Ao Nang and on the islands.",
    layout:
      "Krabi Town sits at the mouth of the Krabi River and serves as the transport hub for Railay, Ao Nang Beach, and the Phi Phi Islands, with numerous island-hopping boat piers around the town.",
    gettingAround:
      "Krabi International Airport is about 9 km in a straight line from Krabi Town; Railay Peninsula, enclosed on three sides by cliffs, is reachable only by longtail boat.",
    culture:
      "Krabi is one of the southern Thai provinces with a comparatively large Muslim population, and local cuisine blends Thai and Malay influences.",
    seeAndDo:
      "Rock climbing and beaches at Railay Peninsula; Ao Nang Beach; a four-island boat trip (Chicken Island, Poda Island, and others); the panoramic view from Tiger Cave Temple; the Krabi riverside night market.",
    whenAndTips:
      "November to April is the dry season with calm seas, ideal for island-hopping; from May to October the rainy season suspends some outer-island boat routes.",
  },
  pattaya: {
    // identity sources: **泰国的官方人口口径**（2026-09-10 核）：**DOPA（内政部地方行政厅）的户籍登记人口**，按 12 月 31 日基准、次年 1–2 月起陆续发布（府/市镇级细分表常滞后数周到数月；一手站点 stat.bora.dopa.go.th 本轮仍连不上）· **NSO（国家统计局）的普查与专项调查人口**（普查十年一次）。**两套互不可换算、常年差很多**（曼谷：DOPA 登记约 542 万 vs NSO 普查规划区 1522 万），写哪一套必须点名。本库统一用 DOPA 登记口径。
    //   芭提雅登记人口约 12 万为 **2019 年（พ.ศ. 2562）** 的内政部数据，本轮未找到可信的更新一期。
    //   https://en.wikipedia.org/wiki/Pattaya
    //   ⚠️ **这是本库第三次确认同一个坑**：en.wikipedia 的 Pattaya 信息框把这个 2019 年的数标成「2025 年 1 月」，**脚注引的却是 2019 年的报告** —— 二手来源的年份标注本身可能是错的，凡引二手必须点开脚注看一手。
    identity:
      "Pattaya is a seaside resort city on Thailand's eastern gulf coast, with a registered population of about 120,000 in 2019 (higher during peak tourist season; no reliable later figure found), about 150 km by road from Bangkok and a traditional weekend getaway for Bangkok residents.",
    // howItWorks sources: 建制沿革：1978 年设立时为市经理制（市议会推举市长、报府尹任命）；后经修法改为直选。英文与泰文维基互证的年份是 **1999 年修法、2004-03 首次直选市长**，但两处都只到 3 级，**没有拿到内政部或皇家公报的一手文本**，所以正文不写这两个年份、只写沿革顺序。下一轮若能取到公报再补。⚠️ 这与「把公告年份当生效年份」是同一族错：把制度史上两个不同的年份压成了一个。
    howItWorks:
      "Pattaya is Thailand's only 'special local administrative area' besides Bangkok, established in 1978 under a city-manager arrangement in which the council picked the mayor, with direct election of the mayor introduced by a later reform, yet it lies within Chonburi province, whose governor is appointed by the Ministry of Interior, and police and schools belong to the state. The city covers about 53 km² with a registered population of about 120,000 in 2019 (no reliable later figure found), several times that in actual residents, and Greater Pattaya about 351,000 in 2021 on a lower-grade source. The city runs along the coast in three parts — Naklua to the north, Pattaya Beach and Walking Street in the middle, Jomtien to the south — each with a character of its own, Ko Larn offshore, U-Tapao airport about 30 km to the south-east, Bangkok 150 km away; the Eastern Economic Corridor high-speed line meant to link the three airports has never broken ground since the 2018 concession, and in 2026 the concessionaire and the government were still disputing whether to terminate it, so check the Ministry of Transport and the EEC Office for the latest. Newcomers most often go wrong by taking Pattaya for an independent city, when it is a special area within Chonburi province, whose government sits 30 km away in Chonburi.",
    layout:
      "The city runs along Pattaya Bay, with Pattaya Beach, Jomtien Beach, and Wong Amat Beach lying from north to south; Pattaya Walking Street is the centre of its nightlife.",
    gettingAround:
      "U-Tapao International Airport is about 30 km in a straight line from the city centre; it is also reachable by road from Bangkok's two airports in about 2 to 2.5 hours. Songthaews are the main form of public transport within the city.",
    culture:
      "Pattaya is one of Thailand's most concentrated nightlife destinations, while also having developed a diverse tourism scene including family holidays and water sports.",
    seeAndDo:
      "Nightlife on Pattaya Walking Street; the Sanctuary of Truth (an all-wood religious art building); island-hopping to Koh Larn; Thai cultural performances at Nong Nooch Tropical Garden; floating markets.",
    whenAndTips:
      "November to February, the cool season, is most pleasant; Jomtien Beach is comparatively quiet and suits families, while the Pattaya Walking Street area is centred on nightlife.",
  },
  "chiang-rai": {
    // identity sources: 泰国内政部地方行政厅（DOPA）基准日每年 **12 月 31 日**，全国公告次年 1—2 月发布；
    //   市镇与府级细分表由二手渠道零散转引、滞后数周到数月。**一手站点 stat.bora.dopa.go.th 本轮仍直连失败**
    //   （疑 SPA/反爬），下一轮试其开放数据接口或 gdcatalog.go.th。2026-09-09 核。
    //   chiang-rai：见 finding 中的 2025/2024/2023 年 DOPA 登记数（3 级转引，2026-09-09 核）。
    //   **本轮通过泰文维基的「เทศบาลนครในประเทศไทย」整表页拿到了 2568 年（2025）末的市镇细分数**，
    //   补上了前两轮因一手站点直连失败留下的缺口。
    identity:
      "Chiang Rai is the capital of Thailand's northernmost province, with a registered municipal population of about 74,000 in 2025, known for contemporary religious-art buildings such as the White Temple and Blue Temple.",
    // howItWorks sources: 清莱府 DOPA 登记 **1,297,657 人（2024）**，与正文「约 130 万」精确吻合。
    //   清莱市自治市最近可查为 **69,888 人（2012）**，与「约 7 万」大致吻合 —— **年份很旧**，
    //   本轮未找到更新数据（DOPA 一手站点 stat.bora.dopa.go.th 直连失败）。3 级，2026-09-08 核。
    //   下一轮换网络环境直连 DOPA 复核市一级的数。
    howItWorks:
      "Chiang Rai is the seat of Chiang Rai province, whose governor is appointed by the Ministry of Interior; the city is a 'city municipality' with an elected mayor and about 74,000 people in 2025, while the province held about 1.3 million. The town lies on the Kok River, where King Mangrai founded the first capital of the Lanna kingdom in 1262, the clock tower and the night bazaar are the reference points of the centre, the airport lies north of town and there is no railway; the White Temple lies 13 km south, the Blue Temple north of town, the Black House outside it, and the Mae Salong tea hills in the mountains to the north-west. Newcomers most often go wrong by expecting the White Temple and the hill tea plantations in Chiang Rai city, when each lies tens of kilometres away and the town itself is a quiet provincial seat.",
    layout:
      "Chiang Rai town is comparatively small; the White Temple sits on the outskirts, the Blue Temple and the Black House museum lie in different parts of town, and the north and north-west of the province are mountainous.",
    gettingAround:
      "Chiang Rai International Airport is about 6.4 km in a straight line from the city centre; a car or hired driver is recommended for the temples outside town and the hill tea plantations.",
    culture:
      "Chiang Rai Province is home to several of northern Thailand's hill-tribe communities, and traditional handicrafts and produce from these communities are common at local markets.",
    seeAndDo:
      "Wat Rong Khun (the White Temple, a contemporary Buddhist art building); the Blue Temple; the Black House museum; the hillside tea plantations of Mae Salong.",
    whenAndTips:
      "November to February, the cool season, is most pleasant, with cooler mornings in the hills. The north of the province lies near the national border; keep trips to the city and the main sights, and don't travel to border crossings or across them.",
  },
  "koh-samui": {
    // identity sources: 苏梅岛 DOPA 登记人口 **70,059 人（2019）**；面积约 229 km²，按面积计是泰国第二大岛
    //   （普吉约 514 km² > 苏梅 229 km² > 象岛 217 km²）—— 3 级，2026-09-08 核。
    //   **原写「泰国湾第二大岛」的限定语站不住脚**：拿来比的普吉岛在**安达曼海、不在泰国湾**；
    //   若严格在泰国湾内比，苏梅反而是最大的。限定语用错了范围，比不写限定语更糟 ——
    //   它读起来像是已经交代了口径。
    //   identity 原写的 6.4 万查无来源，与本条目 howItWorks 的「约 7 万」也对不上，已一并对齐。
    identity:
      "Koh Samui is Thailand's second-largest island by area, after Phuket, with a registered population of about 70,000 in 2019, known for the Chaweng and Lamai beach resort areas and its traditional coconut-growing heritage.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Ko Samui (228.7 km²; ~70,000 registered, 200,000+ with migrants/tourists; district of Surat Thani province; Ko Samui City Municipality since 2012 with elected mayor; Nathon port/district office west vs Chaweng/Lamai east; ring road 51 km; Bangkok Airways-owned airport 1989; ferries from Don Sak)
    howItWorks:
      "Ko Samui is Thailand's second-largest island, about 229 km² with about 70,000 registered residents and more than 200,000 living there with migrant workers and tourists; it is a district of Surat Thani province and since 2012 the whole island has been one 'city municipality' with an elected mayor, while the provincial governor is appointed by the Ministry of Interior. Nathon on the west coast holds the port, the district office and the locals' market; Chaweng and Lamai on the east coast are the tourists' beaches, the airport at the north-east corner is privately owned by Bangkok Airways and opened in 1989, the 51 km ring road joins them, ferries come from Don Sak on the mainland, and Ko Pha Ngan and Ko Tao lie to the north. Newcomers most often go wrong by taking Chaweng for the island's centre, when the administrative centre and local life are at Nathon on the west coast.",
    layout:
      "Several beach resort areas ring the island's coastline, with Chaweng Beach the liveliest, while the island's interior still preserves extensive traditional coconut groves.",
    gettingAround:
      "Samui Airport sits at the island's north-eastern tip, privately operated by Bangkok Airways; the ring road and taxi or motorbike rental are the main ways to get around the island.",
    culture:
      "Koh Samui's traditional economy centred on coconut farming; tourism is now the main economic pillar, though traditional coconut groves and processing workshops can still be seen on the island.",
    seeAndDo:
      "Chaweng and Lamai beaches; the Big Buddha Temple; island-hopping in Ang Thong National Marine Park; the Secret Buddha Garden; the Fisherman's Village night market.",
    whenAndTips:
      "The rainy season on the Gulf of Thailand side differs from the Andaman side; Koh Samui's climate is comparatively mild year-round, though rainfall concentrates somewhat in October–November — worth checking the seasonal difference before travelling.",
  },
  ayutthaya: {
    // identity sources: 泰国内政部地方行政厅（DOPA）基准日每年 **12 月 31 日**，全国公告次年 1—2 月发布；
    //   市镇与府级细分表由二手渠道零散转引、滞后数周到数月。**一手站点 stat.bora.dopa.go.th 本轮仍直连失败**
    //   （疑 SPA/反爬），下一轮试其开放数据接口或 gdcatalog.go.th。2026-09-09 核。
    //   ayutthaya：见 finding 中的 2025/2024/2023 年 DOPA 登记数（3 级转引，2026-09-09 核）。
    //   **本轮通过泰文维基的「เทศบาลนครในประเทศไทย」整表页拿到了 2568 年（2025）末的市镇细分数**，
    //   补上了前两轮因一手站点直连失败留下的缺口。
    identity:
      "Ayutthaya's site was a deliberate piece of geographic calculation — in 1350, King Ramathibodi I set his new capital on a natural island ringed by the confluence of the Chao Phraya, Lop Buri and Pa Sak rivers, letting the rivers themselves serve as a moat while keeping the city well connected downstream for international trade; over the next 417 years (1350–1767) it grew into one of Southeast Asia's largest and most cosmopolitan cities, until Burmese forces sacked and burned it in 1767. Ayutthaya is a historic former capital in central Thailand, with about 46,000 people in the city municipality in 2025, and Ayutthaya Historical Park was inscribed on the UNESCO World Heritage List in 1991.",
    // howItWorks sources: 2026-09-08 复核：大城市自治市仍未能取得带年份的一手数字（DOPA 站点直连失败），
    //   正文停在「约 5 万」并如实不写年份 —— 这是正确处理，不要为了让 C6 计数下降而硬填一个年份。
    //   下一轮换网络环境直连 DOPA。
    howItWorks:
      "Ayutthaya is the seat of Ayutthaya province, whose governor is appointed by the Ministry of Interior; the city is a 'city municipality' with an elected mayor and about 46,000 people in 2025. The city lies on an island ringed by the Chao Phraya, Pa Sak and Lopburi rivers, the capital of Siam from 1351 to 1767, the western half of the island the historical park with the towers of Wat Mahathat and Wat Phra Si Sanphet, World Heritage since 1991, and Wat Chaiwatthanaram across the river; the eastern half is today's town, the railway station lies off the island on the east bank about an hour and a half from Bangkok, bicycles and tuk-tuks move around the island and the industrial estates lie outside. Newcomers most often go wrong by taking Ayutthaya for a field of ruins, when ruins and town share one island and residents live among the old towers.",
    layout:
      "The historical park sits on an island-like area encircled by the Chao Phraya, Lopburi, and Pa Sak rivers, densely dotted with temple ruins and adjoining the surrounding modern town.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Bangkok's Don Mueang International Airport (about 60 km away by road); a train or long-distance bus from Bangkok takes about 1.5 to 2 hours, and a rented bicycle is recommended within the historical park.",
    culture:
      "The Ayutthaya kingdom was a major international trading centre in 17th-century Southeast Asia, with frequent commercial exchange with Europe, China, and Japan; the temple ruins in today's historical park record this era of prosperity.",
    seeAndDo:
      "Wat Mahathat (the Buddha head entwined in tree roots); Wat Phra Si Sanphet; the reclining Buddha at Wat Lokayasutharam; cycling through Ayutthaya Historical Park; a Chao Phraya River boat trip.",
    whenAndTips:
      "November to February, the cool season, is most pleasant; plan a day trip from Bangkok or an overnight stay, and avoid touring the ruins at midday when it's hottest.",
  },
  sukhothai: {
    // identity sources: 素可泰他尼镇（เทศบาลเมืองสุโขทัยธานี，「镇级自治市」）登记人口约 14,850（2566/2023 年，
    //   泰国内政部地方行政厅 DOPA 人口住户统计报告；更早一期为 13,567）。
    //   https://th.wikipedia.org/wiki/เทศบาลเมืองสุโขทัยธานี（3 级，明确引用 DOPA，2026-09-08 核）。
    //   **原来 howItWorks 写的「3.7 万」出自英文维基上一句带 `citation needed` 标记的话** ——
    //   来源自己都标了「没有出处」，我们却当成事实抄了进来。identity 的「2 万」也对不上任何一期。
    //   **发布节奏**：DOPA 年度登记统计按年发布、通常次年初；下一轮应直接查 stat.bora.dopa.go.th
    //   取带年份的一手数字（本轮该站点无法直接访问，只能经维基转引，来源级别 3）。
    identity:
      "The Thai alphabet is traditionally said to have been created in this very capital — founded in 1238, Sukhothai was transformed from a minor polity into the first major Tai kingdom under its third ruler, Ram Khamhaeng the Great (r. 1279–1298), who is traditionally credited with devising the Thai script in 1283; a stone inscription from 1283–1290, the Ram Khamhaeng stele, is the earliest known text in Thai. The Sukhothai kingdom ruled from here for about a century (1238–1347) before the rising Ayutthaya kingdom took its place. Sukhothai was the capital of Thailand's first independent kingdom; the new town of Sukhothai Thani has a registered population of about 15,000 (2023, Ministry of Interior figures), and Sukhothai Historical Park was inscribed on the UNESCO World Heritage List in 1991.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Sukhothai Thani (town municipality 3.5 km², ~37,000; capital of Sukhothai province; Yom River; Old Sukhothai/Historical Park UNESCO 1991 ~12 km west; established 1937; airport ~27 km; Bangkok 427 km)
    howItWorks:
      "Sukhothai's new town is called Sukhothai Thani, the seat of Sukhothai province, whose governor is appointed by the Ministry of Interior; the new town is a 'town municipality' of only about 3.5 km² with a registered population of about 15,000 (2023), established in 1937 on the Yom River, with the bus station and the market. The old city lies about 12 km west, the capital of the first Siamese kingdom of the thirteenth century and the source of King Ramkhamhaeng's inscription, its historical park World Heritage since 1991 and toured by bicycle; the old city of Si Satchanalai lies 55 km north, the airport about 27 km north run by Bangkok Airways, and Phitsanulok 60 km east. Newcomers most often go wrong by looking for the ruins in the new town, when the old city lies 12 km away and a songthaew runs between the two.",
    layout:
      "The historical park is divided into central, northern, western, and southern zones, with the Wat Mahathat ruins at the core of the central zone, ringed by remnants of a moat and city wall.",
    gettingAround:
      "Sukhothai Airport, privately operated by Bangkok Airways, is about 27 km in a straight line from the historical park; a long-distance bus from Bangkok takes about 6 to 7 hours, and a rented bicycle is recommended within the historical park.",
    culture:
      "The Sukhothai kingdom is regarded as an important birthplace of the Thai script and Buddhist art; the Thai alphabet is traditionally said to have been created by King Ramkhamhaeng of Sukhothai in the 13th century.",
    seeAndDo:
      "The Wat Mahathat ruins; the seated Buddha at Wat Si Chum; Wat Sa Si; a bicycle loop through the historical park; the Sukhothai ceramics museum.",
    whenAndTips:
      "November to February, the cool season, is most pleasant, with a light-and-sound show held in the historical park during the Loy Krathong festival in November; visit early morning or evening to avoid the midday heat.",
  },
  "hua-hin": {
    // identity sources: 华欣县 DOPA 登记 **126,355 人（2025-01）**；华欣市自治市 DOPA 登记 **62,111 人（2023 财年）**
    //   —— 3 级（转引 DOPA），2026-09-08 核。**原 identity 的「约 1.9 万」两层都对不上，差三倍以上，查无来源。**
    //   **行政层级也已过期**：华欣自治市于 **2024-09-27 由镇级（เทศบาลเมือง）升格为市级（เทศบาลนคร）**，
    //   原文写「镇级自治市」已不准确，同批一并改。
    identity:
      "Hua Hin is a seaside town on the Gulf of Thailand coast, with about 62,000 registered residents in the municipality in 2023 and about 126,000 across the wider district in 2025; it has been a traditional royal seaside retreat since the Thai royal family built a residence here in the early 20th century.",
    // howItWorks sources: 升格：内政部公告 2024-09-27、刊宪 2024-10-30，**生效日 2025-03-28**（泰文维基引皇家公报，3 级）。⚠️ 公告年份与生效年份差了半年，原文写的是公告年份。
    howItWorks:
      "Hua Hin is a district and municipality of Prachuap Khiri Khan province, upgraded from town to city status with effect from March 2025, the Ministry of Interior's order having been announced in September 2024 and gazetted the following month, the district about 840 km² with about 126,000 people in 2025, the provincial governor appointed by the Ministry of Interior and the mayor elected by residents. In the 1920s the royal family built the Railway Hotel and the Klai Kangwon palace here, and Hua Hin has since been Thailand's oldest and most respectable seaside resort, the palace still standing on the shore north of town; the centre lies around the railway station of 1911 and the night market, the beach runs along the town's east side, Khao Takiab lies 7 km south, Cha-am 25 km north belongs to Phetchaburi province as another resort town, Bangkok lies about 200 km north, the airport has only sporadic flights, and retired foreigners and golf courses are daily life. Newcomers most often go wrong by taking Hua Hin for a beach, when it is a town with a palace, a market and tens of thousands of locals, and the beach is only its eastern edge.",
    layout:
      "The town runs along Hua Hin Beach, with the town centre preserving colonial-era buildings such as Hua Hin Railway Station, and resort hotels and golf courses spread along the beach's northern and southern ends.",
    // gettingAround sources: 航线：2025 年 9 月起 EZY Airlines 开通普吉 / 素叻他尼 / 合艾等支线航班，泰亚航仍飞清迈（3 级，2026-09-12 核）。⚠️ 只有 3 级来源，所以正文**不列具体航线**、改成「以航司最新时刻表为准」—— 这类小机场的航线开停频繁，写死必然过期。
    gettingAround:
      "Hua Hin Airport has added a few regional services besides the Chiang Mai route in recent years, so check the airlines' latest schedules; getting to Bangkok is still usually by road (about 3 hours). Tuk-tuks and taxis are common ways to get around town.",
    culture:
      "Hua Hin is known as the \"royal seaside\" for the Thai royal family's long history of summering here; the night market and seafood restaurants are an important part of the local visitor experience.",
    seeAndDo:
      "Hua Hin Beach; Hua Hin Railway Station (one of Thailand's oldest train stations); night-market seafood; the Hua Hin Hills Vineyard; a day trip to Khao Sam Roi Yot National Park.",
    whenAndTips:
      "November to February, the cool season, is most pleasant; Hua Hin Railway Station is not just a transport hub but also a popular photo spot in its own right.",
  },
  "udon-thani": {
    // identity sources: 泰国内政部地方行政厅（DOPA）基准日每年 **12 月 31 日**，全国公告次年 1—2 月发布；
    //   市镇与府级细分表由二手渠道零散转引、滞后数周到数月。**一手站点 stat.bora.dopa.go.th 本轮仍直连失败**
    //   （疑 SPA/反爬），下一轮试其开放数据接口或 gdcatalog.go.th。2026-09-09 核。
    //   udon-thani：见 finding 中的 2025/2024/2023 年 DOPA 登记数（3 级转引，2026-09-09 核）。
    //   **本轮通过泰文维基的「เทศบาลนครในประเทศไทย」整表页拿到了 2568 年（2025）末的市镇细分数**，
    //   补上了前两轮因一手站点直连失败留下的缺口。
    identity:
      "Udon Thani is an important city in Thailand's north-eastern Isan region, with a registered population of about 112,000 in 2025, and the gateway city for exploring the Ban Chiang prehistoric site.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Udon Thani (thesaban nakhon 130,531 2019; urban ~400,000; capital of Udon Thani province; Isan; US air base 1960s–70s; Ban Chiang UNESCO 1992 ~55 km; Red Lotus Sea ~40 km; Nong Khai/Vientiane ~80 km; airport; rail)
    howItWorks:
      "Udon Thani is the seat of Udon Thani province, whose governor is appointed by the Ministry of Interior; the city is a 'city municipality' with an elected mayor, about 112,000 registered residents in 2025, one of the 'big four' cities of Isan. The town lies on a grid either side of the railway, Nong Prajak park is the lake at its centre, the American air base of the 1960s and 70s left western-style blocks and bars, the airport lies south of town, and rail and road run 80 km north to Nong Khai and Vientiane in Laos; the Ban Chiang site lies about 55 km east, World Heritage since 1992, and the Red Lotus Sea about 40 km south. Isan is the local language. Newcomers most often go wrong by taking Udon for a stop on the way to Laos, when it is the commercial and medical centre of northern Isan.",
    layout:
      "The city follows a typical Thai provincial-capital layout, with Nong Prajak Park at the city centre serving as the main recreational space for local residents.",
    gettingAround:
      "Udon Thani International Airport is about 5 km by road from the city centre; it can also be reached by train via the Nong Khai rail line, and is one of the common road gateways to Vientiane, Laos.",
    culture:
      "The Ban Chiang site in Udon Thani Province has yielded painted pottery and bronze artefacts dating to around 2000 BC, an important archaeological site for studying Southeast Asian prehistory.",
    seeAndDo:
      "Nong Prajak Park; the Ban Chiang National Museum (World Heritage); the blue temple of Wat Pa Phu Kon; the Udon Thani night market.",
    whenAndTips:
      "November to February, the cool season, is most pleasant; Udon Thani is also a common overland gateway to Vientiane, Laos via the Friendship Bridge.",
  },
  "nakhon-ratchasima": {
    // identity sources: 泰国内政部地方行政厅（DOPA）基准日每年 **12 月 31 日**，全国公告次年 1—2 月发布；
    //   市镇与府级细分表由二手渠道零散转引、滞后数周到数月。**一手站点 stat.bora.dopa.go.th 本轮仍直连失败**
    //   （疑 SPA/反爬），下一轮试其开放数据接口或 gdcatalog.go.th。2026-09-09 核。
    //   nakhon-ratchasima：见 finding 中的 2025/2024/2023 年 DOPA 登记数（3 级转引，2026-09-09 核）。
    //   **本轮通过泰文维基的「เทศบาลนครในประเทศไทย」整表页拿到了 2568 年（2025）末的市镇细分数**，
    //   补上了前两轮因一手站点直连失败留下的缺口。
    identity:
      "Nakhon Ratchasima (Khorat) is the gateway city to Thailand's north-eastern Isan region, with a registered population of about 111,000 in 2025, and an important base for exploring Khao Yai National Park and the Khorat Plateau.",
    // howItWorks sources: 中泰高铁一期（曼谷—呵叻）：2026 年施工进度约 55%—57%（泰国交通部口径），通车目标由 2026 年推迟至 2030 年（2 级，2026-09-12 核）。⚠️ 与芭堤雅条目里的东部经济走廊三机场高铁**是两条不同的线**，后者从未开工。
    howItWorks:
      "Korat is the seat of Nakhon Ratchasima, one of Thailand's largest provinces by area — sources disagree on the exact figure and ranking — whose governor is appointed by the Ministry of Interior and which held about 2.61 million people at the end of 2025; the city is a 'city municipality' with an elected mayor, about 111,000 registered residents at the end of 2025 and about 466,000 in the urban area. The town lies on the western edge of the Khorat plateau as Bangkok's gateway into Isan, the Thao Suranari monument and the old town's moat are the reference points of the centre, Terminal 21 the new commercial centre, rail and road fan out from here across Isan and the first phase of the Thai-Chinese high-speed line from Bangkok was more than half built by 2026, its opening target repeatedly pushed back, so check Thailand's Ministry of Transport for the latest; Khao Yai National Park lies about 100 km west at Pak Chong and the Khmer temple of Phimai 60 km north-east. Locals say 'Korat', never the full name. Newcomers most often go wrong by expecting Khao Yai at the edge of town, when it lies a hundred kilometres away in the hills.",
    layout:
      "The city preserves remnants of the old Thamalak city wall and moat, and has long served as the traditional transport hub linking Bangkok with the Isan region.",
    gettingAround:
      "Nakhon Ratchasima Airport currently has no stable scheduled passenger service; the city is usually reached by road from Bangkok (train or long-distance bus), a journey of about 3 to 4 hours.",
    culture:
      "Nakhon Ratchasima is widely known for the legend and memorial of Thao Suranari, a local heroine, and the Isan culture and north-eastern dialect are distinctly present here.",
    seeAndDo:
      "The Thao Suranari Memorial; a day trip to Phanom Rung Historical Park (a Khmer temple complex); Khao Yai National Park (the watershed ridge and its waterfalls); the remnants of the Thamalak city wall.",
    whenAndTips:
      "November to February, the cool season, is most pleasant; Nakhon Ratchasima makes a good base for a day trip to hike in Khao Yai National Park.",
  },

  // ── Thailand batch 2 (2026-09-05) ──
  kanchanaburi: {
    // howItWorks sources（2026-09-15 核实，add-year）: 北碧镇 24,624（2024-12-31，DOPA 转引，3 级）；下一期约 2026-10
    // identity sources: 泰国内政部地方行政厅（DOPA）基准日每年 **12 月 31 日**，全国公告次年 1—2 月发布；
    //   市镇与府级细分表由二手渠道零散转引、滞后数周到数月。**一手站点 stat.bora.dopa.go.th 本轮仍直连失败**
    //   （疑 SPA/反爬），下一轮试其开放数据接口或 gdcatalog.go.th。2026-09-09 核。
    //   北碧镇（เทศบาลเมืองกาญจนบุรี）**2024-12-31 登记 24,624 人**（3 级转引 DOPA，2026-09-09 核）——
    //   此前两轮都停在 2017 年的 25,651。
    //   **「桂诺河与桂艾河汇成湄公河」是把两条完全不同的河写成了一条**：
    //   แม่กลอง（Mae Klong）中文作**湄功河／夜功河**，发源于泰国西部、注入泰国湾；
    //   **湄公河（Mekong）是另一条国际河流**，与北碧毫无关系。**与「因河被写成多瑙河」是同一形状的错。**
    //   北碧府 19,483 km²「泰国面积第三大」经核成立。
    identity:
      "Kanchanaburi lies about 120 km by road west of Bangkok where the Khwae Noi and Khwae Yai rivers meet to form the Mae Klong — a different river from the Mekong — with a registered town population of about 24,600 at the end of 2024. In the Second World War the Japanese army built the Thailand–Burma 'Death Railway' with Allied prisoners of war and Asian labourers, about half of whom died of disease, maltreatment and accidents; the Bridge over the River Kwai, the Kanchanaburi War Cemetery, the Thailand–Burma Railway Centre and Hellfire Pass commemorate that history. The province also holds the seven-tiered Erawan Falls, Sai Yok and the Mon wooden bridge at Sangkhlaburi near the Myanmar border, making it one of the most popular day and overnight trips from Bangkok.",
    // howItWorks sources: **泰国的官方人口口径**（2026-09-10 核）：**DOPA（内政部地方行政厅）的户籍登记人口**，按 12 月 31 日基准、次年 1–2 月起陆续发布（府/市镇级细分表常滞后数周到数月；一手站点 stat.bora.dopa.go.th 本轮仍连不上）· **NSO（国家统计局）的普查与专项调查人口**（普查十年一次）。**两套互不可换算、常年差很多**（曼谷：DOPA 登记约 542 万 vs NSO 普查规划区 1522 万），写哪一套必须点名。本库统一用 DOPA 登记口径。
    //   北碧镇 **24,624（2024-12-31，DOPA）**，与同条目 identity 一致；原 howItWorks 的 25,651 是 **2017 年**旧数。2026-09-10 复核。
    //   **这是泰国这批「identity 已更新、howItWorks 没回填」的第三例**（清迈、呵叻、北碧）—— 见 known-errors 里对这个方向的记录。
    howItWorks:
      "Kanchanaburi town is the seat of Kanchanaburi province, whose governor is appointed by the Ministry of Interior; the town itself is a 'town municipality' with an elected mayor and about 24,600 registered residents at the end of 2024 (Department of Provincial Administration), while the province of about 19,000 km² is Thailand's third-largest, reaching to the Myanmar border. The town lies where the Kwai Yai and Kwai Noi rivers meet, the Bridge on the River Kwai spans the river just north of town, built by prisoners of war and labourers in 1942–43, two war cemeteries and museums lie in town and raft houses on the river are the local lodging; Hellfire Pass lies about 80 km north-west, the Erawan falls about 65 km north, Bangkok about 120 km east and the train comes from Thonburi. Newcomers most often go wrong by taking Kanchanaburi for a bridge, when the bridge is in town and the province's forests and waterfalls are another hour or two away.",
    layout:
      "The town lies on the east bank of the Khwae Yai, with hotels, floating raft houses and restaurants along the river; the bridge stands about 3 km north of town, the war cemetery and the railway centre beside the station, and the JEATH museum by the river. The Death Railway runs north-west from the bridge along the Khwae Noi to Nam Tok, passing the Tham Krasae cliff trestle; Hellfire Pass is about 73 km in a straight line north-west. Erawan National Park lies about 65 km north, Sai Yok about 100 km north-west and Sangkhlaburi about 220 km north-west.",
    gettingAround:
      "Kanchanaburi has no airport with scheduled flights; from Bangkok's Suvarnabhumi or Don Mueang it is about 2.5–3 hours by road. Trains from Bangkok's Thonburi station take about 3 hours (twice daily, slow but scenic) and continue to Nam Tok along the Death Railway — the bridge-to-Tham Krasae stretch is the classic ride; minibuses from Bangkok take about 2 hours. In town walk or hire a bicycle or motorbike; Erawan is about 1.5 hours by bus, and Hellfire Pass needs a hired car or a tour. The climate is tropical savanna — cool and dry from November to February, hot from March to May and wet from May to October.",
    culture:
      "Thai is universal, with English in the tourist areas. The war cemetery and the Hellfire Pass memorial are solemn places — dress modestly and keep quiet; the bridge can be walked, stepping aside when trains pass. The pools at Erawan hold fish and food is banned on the upper tiers. Tipping is not expected in Thailand but small change is often left. Floating restaurants and raft houses on the river are a local feature. Sangkhlaburi has Mon villages and temples — respect local custom.",
    seeAndDo:
      "The Bridge over the River Kwai; the war cemetery and the Thailand–Burma Railway Centre; the JEATH war museum; the Death Railway train (the Tham Krasae trestle); the Hellfire Pass memorial and walking trail; Erawan Falls (seven tiers, swimming allowed); Sai Yok National Park; the Mon bridge and sunken temple at Sangkhlaburi; Wat Tham Sua (the Tiger Cave temple); a night in a raft house on the river.",
    whenAndTips:
      "November–February is most comfortable; March–May is hot, and in the rains the falls are full but the paths slippery. A day for the town and railway, a day for Erawan. A day trip from Bangkok works, but a night by the river is more relaxed.",
  },
  lampang: {
    // identity sources: 人口：DOPA 2560/2017 年登记人口 53,614，与正文一致（identity 与 howItWorks 两段都已写明年份与「登记人口」口径）。**取不到更新一期**：DOPA 在线库 stat.bora.dopa.go.th 域名解析失败、且为逐年下拉的动态查询系统，与本库另外 14 个「渠道本身取不到数」的条目同类。2026-09-12 复核，本轮无需改动。下一轮若能直连 DOPA 再取 2024/2025 年数。
    identity:
      "Lampang lies in the Wang river valley of northern Thailand about 100 km by road south-east of Chiang Mai, with about 54,000 registered residents in 2017 — one of the old Lanna capitals and the only Thai city where horse-drawn carriages (introduced in 1916) still carry passengers. Wat Phra That Lampang Luang is the archetype of Lanna timber temple architecture and keeps nineteenth-century murals; of the 31 Burmese-style temples surviving in Thailand, nine — built by nineteenth-century Burmese teak merchants — are in Lampang. The Thai Elephant Conservation Center outside town is the national elephant institution, Chae Son National Park has hot springs and waterfalls, and Lampang is known for ceramics, with the rooster bowl as its emblem.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Lampang (thesaban nakhon ~58,000 2010, 22 km²; capital of Lampang province; Wang River valley; horse carriages; Wat Phra That Lampang Luang ~18 km; ceramics; Elephant Conservation Center; Chiang Mai 101 km; rail; airport; Mae Moh lignite)
    howItWorks:
      "Lampang is the seat of Lampang province, whose governor is appointed by the Ministry of Interior; the city is a 'city municipality' with an elected mayor, about 22 km² with about 54,000 registered residents in 2017. The town lies in the valley of the Wang River, the old quarter along the bank, horse carriages still its emblem, ceramics works scattered on the outskirts making the rooster bowls; Wat Phra That Lampang Luang lies about 18 km south-west at Ko Kha, the Thai Elephant Conservation Center about 30 km west, Chiang Mai 101 km north-west, the railway a stop on the Bangkok-Chiang Mai line, the airport south of town and the Mae Moh lignite plant to the east. Newcomers most often go wrong by taking Lampang for a stop on the way to Chiang Mai, when it is a provincial seat that keeps the streets of the Lanna and teak years at a far slower pace than Chiang Mai.",
    layout:
      "The old town lies on the south bank of the Wang; the Kad Kong Ta old street follows the river and becomes a walking-street night market at weekends, and the Ratsadaphisek bridge (1917) is the landmark; the Burmese temples (Wat Si Rong Muang, Wat Pratu Pong and others) are scattered through town. Wat Phra That Lampang Luang lies about 18 km south-west at Ko Kha, the elephant centre about 30 km north-west at Hang Chat and Chae Son about 70 km north. The station is on the west side of town and the airport on its southern edge.",
    gettingAround:
      "Lampang Airport (LPT) adjoins the town and currently has only the Bangkok Don Mueang route (AirAsia); Chiang Mai's airport is about 100 km away. Trains take about 10–12 hours from Bangkok (overnight) and about 2 hours from Chiang Mai; buses from Chiang Mai take about 1.5 hours. In town ride a horse carriage (fixed routes and prices), a songthaew or a hire bicycle; the great temple and the elephant centre are reached by songthaew or hired car. The climate is tropical savanna — cool from November to February, hot from March to May, wet from May to October.",
    culture:
      "Thai is universal; tourism is less developed than in Chiang Mai and English less common. Dress modestly and remove shoes at temples; some halls of Wat Phra That Lampang Luang are closed to women (signed — respect the local rule). The carriages are a tradition rather than a pure tourist ride — agree the price first. The elephant centre offers no riding, only care and training demonstrations. Local food includes Lampang khanom jeen noodles, and rooster-bowl ceramics make souvenirs. Tipping is not expected.",
    seeAndDo:
      "Wat Phra That Lampang Luang; the Kad Kong Ta weekend night market; the Ratsadaphisek bridge and the Wang riverside; the Burmese temples (Wat Si Rong Muang, Wat Chedi Sao); a horse-carriage tour of the old town; the Thai Elephant Conservation Center; ceramics workshops (rooster bowls); the Chae Son hot springs and falls; the hilltop Wat Phra That Doi Phra Chan.",
    whenAndTips:
      "November–February is most comfortable and the season of the weekend market; March–April brings haze. A day for the town, a day for the outlying temple and the elephant centre. A quieter Lanna destination than Chiang Mai, linked with Phitsanulok or Sukhothai.",
  },
  "ko-chang": {
    identity:
      "Ko Chang lies in the Gulf of Thailand off Trat Province near the Cambodian border, about 210 km² and Thailand's third-largest island by area after Phuket and Samui, with about 8,500 people. Some 85 percent of the island lies within Mu Ko Chang National Park — a rainforest interior rising to 744 m — with a string of beaches on the west coast, White Sand Beach and Lonely Beach among them, and the stilted fishing village of Bang Bao at the southern tip. Developed later than Phuket and Samui, it is far quieter, about 300 km from Bangkok.",
    // howItWorks sources: 国家公园占比：**约 85% 的岛陆地**在莫库象国家公园内（本条目 identity 段早已写对）；原文的「约七成」是**公园总面积里海域的比例**（公园含 52 个岛、约 650 平方公里），两个分母被弄混了。面积：identity 与 howItWorks 原本写 210 与 217 两个数，已统一为约 210 平方公里（多数来源 210—213）。公园 1982 年设立（泰国第 45 座国家公园）属实。3 级来源，2026-09-12 核。
    howItWorks:
      "Ko Chang is Thailand's third-largest island, about 210 km² with about 8,000 permanent residents; it is a district of Trat province, whose governor is appointed by the Ministry of Interior, its villages having local bodies of their own, and about 85 per cent of the island lies inside the Mu Ko Chang National Park created in 1982. The west coast is a string of beaches — White Sand, Klong Prao, Kai Bae, Lonely Beach — where the hotels and restaurants are, the east coast fishing villages and mangroves, Salak Phet at the southern tip, and an unclosed ring road joins them; ferries come from Laem Ngop on the mainland in about 30 minutes, Trat airport lies about 40 km east of the pier and is run by Bangkok Airways, Bangkok lies 315 km away, and Ko Kut and Ko Mak lie to the south. Newcomers most often go wrong by taking Ko Chang for a resort, when it is an island mostly of forested hills and the beaches lie only in a narrow strip on the west.",
    layout:
      "The island runs north–south, with the main beaches lined along the west coast from north to south: White Sand Beach is the liveliest, followed by Khlong Prao, Kai Bae and Lonely Beach, with Bang Bao village and pier (boats to the outer islands) at the southern end; the east coast is quiet with mangroves and fishing villages. Ferries from Ao Thammachat on the mainland reach Ao Sapparot pier at the northern tip in about 30 minutes, and the ring road follows the coast (not a full loop — the southern hills are steep). Khlong Phlu waterfall lies in the middle of the island. Ko Kut and Ko Mak lie to the south.",
    gettingAround:
      "Ko Chang has no airport with scheduled flights; Trat Airport (TDX, run by Bangkok Airways, only the Bangkok Suvarnabhumi route, about 1 hour) is on the mainland about 17 km from the ferry pier. From Bangkok, buses or minibuses reach Trat or the pier in about 5 hours, then the ferry takes about 30 minutes. On the island use songthaews (charged by stretch), hire a motorbike (steep roads, many accidents) or a car, and take boats to the outer islands. The climate is tropical monsoon, dry from November to April and wet from May to October (rough surf on some beaches and suspended island boats).",
    culture:
      "Thai is universal, with English in the tourist areas. The national-park waterfalls charge entry; take a guide for rainforest walks. Bang Bao's seafood restaurants stand on the jetties. Beaches have rip currents in the rains — stay out when the red flag flies. A licence and helmet are needed for motorbikes, and the mountain roads have sharp bends. Tipping is not expected.",
    seeAndDo:
      "White Sand Beach and its evening beach bars; Lonely Beach; Bang Bao fishing village and sunset at the pier; Khlong Phlu waterfall; rainforest treks and elephant camps (choose no-riding operators); kayaking in the east-coast mangroves; snorkelling and diving trips to Ko Kut, Ko Mak and Ko Rang; Muay Thai bouts; Salak Phet bay.",
    whenAndTips:
      "November–April is best, with December–February the peak; the May–October rains are quiet but boats are few. Stay at least three nights. Reachable from Bangkok in a day but not as a day trip.",
  },
  "khao-lak": {
    identity:
      "Khao Lak lies on the Andaman coast of Phang Nga Province about 60 km north of Phuket — a string of resort villages (Bang Niang, Nang Thong, Khuk Khak and others) along some 20–25 km of coast, backed by the rainforest hills of Khao Lak–Lam Ru National Park. It is the main departure point for diving and liveaboards to the Similan and Surin islands. The Indian Ocean tsunami of 26 December 2004 caused Thailand's worst losses here, and police boat 813, carried 1.25 km inland, is now a memorial; rebuilt, Khao Lak is known for its quiet long beaches and family resorts, far calmer than Phuket.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Khao Lak (string of beach villages — Bang Niang, Nang Thong, Khuk Khak, Bang Sak — in Takua Pa district, Phang Nga province, not a municipality; ~25 km of coast; 2004 tsunami; Similan liveaboards from Thap Lamu; Phuket airport ~60–70 km; low-rise resort rules)
    howItWorks:
      "Khao Lak is not a town but a string of villages along about 25 km of coast in Takua Pa district of Phang Nga province — Bang Niang, Nang Thong, Khuk Khak, Bang Sak — with no common municipal government, each village under a subdistrict body of the district, and the provincial governor appointed by the Ministry of Interior. The resorts are scattered along the coast road with no centre, the tsunami of 2004 took more than four thousand lives here, the police boat carried inland stands at Bang Niang as a memorial, and the rules since have kept buildings low; Similan liveaboards leave from Thap Lamu pier to the south, Phuket airport lies sixty or seventy kilometres south, and Takua Pa old town about 30 km north. Newcomers most often go wrong by looking for 'Khao Lak town' on the map, when it is only a collective name, and whichever village you stay in is the beach you have.",
    layout:
      "Khao Lak stretches north–south along Highway 4 and the coast: Khao Lak beach and Nang Thong at the southern end near the national park, then Bang Niang (the boat 813 memorial and the tsunami museum), Khuk Khak and White Sand beach, with Pakarang Cape at the northern end; Thap Lamu pier about 15 km in a straight line south is where the Similan and Surin boats leave. Takua Pa old town lies about 25 km north and Khao Sok National Park (karst rainforest and Cheow Lan lake) about 80 km north-east. Phuket's airport is about 65 km south.",
    gettingAround:
      "Khao Lak has no airport with scheduled flights; from Phuket International (HKT) it is about 1–1.5 hours by road, with minibuses and shuttles. Between the villages use songthaews, motorbikes or a hire car; the Similans are about 1.5 hours by speedboat for a day trip, or by liveaboard. The climate is tropical monsoon, dry from November to April and wet with rough seas from May to October, when the Similan islands close (mid-May to mid-October).",
    culture:
      "Thai is universal, with English and German common (many European visitors). Keep quiet at the tsunami memorials. The Similans are a national park — no touching coral, with visitor limits; the beaches carry tsunami warning towers and evacuation signs. Stay out of the sea under red flags in the rains. Book the raft houses on Cheow Lan lake at Khao Sok ahead. Tipping is not expected.",
    seeAndDo:
      "The long beaches of Bang Niang and Nang Thong; the boat 813 tsunami memorial and the International Tsunami Museum; a Similan day trip or liveaboard (November–April); the Surin islands and the Moken village; rainforest trails and small beaches in Khao Lak–Lam Ru National Park; Khao Sok and the Cheow Lan lake raft houses; Takua Pa old town and its Sunday market; the Bang Niang night market.",
    whenAndTips:
      "November–April is best and the only season the Similans are open; December–February is busiest. Stay three to five nights with one Similan trip. Rainy-season hotels are cheap but seas are rough and some places close.",
  },
  "ko-lanta": {
    // identity sources: 人口：兰塔大岛 = 沙拉丹乡 + 兰塔大岛乡两个乡（兰塔小岛是另一座岛，不计入）。泰国内政部地方行政厅 2565/2022-12 登记人口 7,082 + 6,942 ≈ 1.4 万。**来源级别 3 级引 1 级**：泰文维基引 DOPA《人口住宅统计报告》，DOPA 在线库 stat.bora.dopa.go.th 本轮域名解析失败、取不到一手页面。口径是**登记人口**（不含未登记的外来务工与常住外国人），2026-09-12 核。原文「2012 年约 1.1 万」偏低且与乡级数据连不成趋势，根因是上一轮把兰塔小岛的乡也加了进来。
    identity:
      "Ko Lanta lies in the Andaman Sea off Krabi Province, made up of Lanta Yai and Lanta Noi; the main island is about 25 km long and 6 km wide, about 81 km²; administratively the main island is made up of the Sala Dan and Ko Lanta Yai subdistricts, whose registered population together was about 14,000 at the end of 2022 (Thailand's Department of Provincial Administration). Quieter than Phi Phi, it has a chain of long beaches on the west coast (Klong Dao, Long Beach, Kantiang Bay), the lighthouse and headland of Mu Ko Lanta National Park at the southern tip, and on the east coast Lanta Old Town, a wooden fishing port settled in the nineteenth century by Chinese traders and the Urak Lawoi sea people. The Siri Lanta Bridge, opened in 2016, joined the two Lanta islands to each other; reaching the mainland still means a car ferry, and Ko Rok and the Hin Daeng and Hin Muang pinnacles are among the best dive sites in the Andaman. The 2004 tsunami affected Lanta far less than Phi Phi.",
    // howItWorks sources: 兰达耶岛（主岛）**10,830 人（2012）**；兰达县（含大小兰达岛）30,500 人（2012）
    //   或 26,805（2010 年 NSO 普查）——3 级，2026-09-08 核。
    //   **howItWorks 原写的「约 2 万」三个数都对不上**：注释称它转引自英文维基关于苏梅岛的
    //   「约 80 km²、约 2 万人」，但实际抓取该页找不到这句话，**疑为写作时张冠李戴**。
    //   identity 的「约 1.1 万」才是对的，已把 howItWorks 对齐过来 ——
    //   这是 `check:claims` C6i（同条目两段人口打架）报出来的最后一条。
    howItWorks:
      "Ko Lanta is a district of Krabi province, whose governor is appointed by the Ministry of Interior, with the island's subdistricts having local bodies of their own; the main island of Lanta Yai covers about 80 km² with about 11,000 permanent residents in 2012, the majority Muslim. Sala Dan is the pier town at the northern tip with the ferries and shops, the bridge opened in 2016 joins it to Lanta Noi and a car ferry reaches the mainland; the west coast is a string of beaches — Klong Dao, Long Beach, Klong Nin — where the hotels are, Lanta Old Town on the east coast is the street of wooden houses left by the Chinese and the Urak Lawoi sea people, the national park lies at the lighthouse on the southern tip, and Krabi airport about 70 km north-east, about two hours. Most shops close for the rainy season. Newcomers most often go wrong by taking Sala Dan for the whole of Ko Lanta, when the island runs 27 km and the beaches grow quieter the further south they lie.",
    layout:
      "Saladan at the northern tip of the main island is the port and main town, where ferries and speedboats leave; the beaches run down the west coast from north to south — Klong Dao, Long Beach, Klong Khong, Klong Nin, Kantiang Bay — quieter and rougher-roaded the further south, with the national park at the southern tip. The Old Town lies midway down the east coast, facing the mainland. Lanta Noi lies north of the main island, with the bridge linking both islands to the mainland ferry point.",
    gettingAround:
      "Ko Lanta has no airport with scheduled flights; from Krabi Airport (KBV) minibuses take about 2 hours via the bridge (with a short ferry), or take boats between Krabi, Phi Phi and Lanta (November–April). On the island hire a motorbike or use songthaews; roads in the south are poor, and the Old Town is about 20 minutes' drive from the west-coast beaches. The climate is tropical monsoon, dry from November to April and wet from May to October, when some resorts and boats stop.",
    culture:
      "Thai is universal, the island's Muslim community is large, and the Urak Lawoi sea people have their own language and twice-yearly boat festivals; respect the residents of the Old Town's Chinese temples and wooden houses. The national park charges entry and the lighthouse walk is exposed. Dive with PADI-certified shops; Ko Rok is open only in the dry season. Beach fire shows are milder than on Phi Phi. Tipping is not expected.",
    seeAndDo:
      "Long Beach and Klong Dao; sunset at Kantiang Bay; Lanta Old Town (wooden houses, seafood, cafés); the Mu Ko Lanta National Park lighthouse and headland trail; a Ko Rok snorkelling day and diving at Hin Daeng and Hin Muang; the four-island trip (the Emerald Cave); kayaking in the east-coast mangroves; the Lanta Animal Welfare centre; the Saladan night market.",
    whenAndTips:
      "November–April is best, with December–February the peak; the May–October rains are quiet and cheap but boats are few. Stay three or four nights. Linked with Krabi, Phi Phi and Ko Lipe on an Andaman route.",
  },
};
