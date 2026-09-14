import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "south-korea-overview": {
    // identity sources: 51,117,378 是 2025-12-31 住民登录人口（行政安全部，经四家媒体转述，2 级）；原标「2024年末」错一年。行政安全部年末数次年 1 月初公布。核实 2026-09-12
    identity:
      "The Republic of Korea occupies the southern half of the Korean Peninsula in East Asia, covering about 100,000 km² with a resident-registered population of about 51.12 million at the end of 2025 (Ministry of the Interior and Safety); the capital is Seoul, the common language is Korean, and the currency is the Korean won (KRW).",
    layout:
      "The country divides broadly into five regions: the Capital Area (Seoul, Incheon and surroundings), the Yeongnam region (Busan, Gyeongju, Ulsan and other south-eastern cities), the Honam region (Jeonju and other south-western cities), Gangwon (Gangneung, Sokcho and the eastern coast and mountains), and Jeju Island (a volcanic island to the south).",
    gettingAround:
      "The KTX high-speed rail links Seoul with Busan, Gangneung, and other major cities and is the mainstay of intercity travel; domestic flights are centred on Seoul's Gimpo Airport, and the Gimpo–Jeju route is one of the busiest domestic air routes in the world. Within cities, the T-money card works across subway, bus, and taxi. Entry requires a separate electronic arrival card, and electronic travel-authorisation exemption arrangements for short-term visitors from various countries follow the latest official announcements.",
    culture:
      "The official language is Korean, and a bow on meeting is common etiquette. When dining or drinking with elders, offering and receiving drinks with both hands, and turning away or covering the mouth while drinking, is a common sign of respect — this isn't expected among peers of similar age. Tipping is not customary at restaurants, taxis, and similar places, and offering one can sometimes leave the recipient confused rather than pleased. Voltage is 220V, with type C/F round two-pin European-style sockets.",
    seeAndDo:
      "Natural landforms: the granite peaks of Seoraksan and Jirisan, the volcanic landscape of Hallasan and Jeju Island, and the tidal wetlands of Suncheon Bay and the Nakdong River estuary. Heritage and culture: Gyeongbokgung Palace in Seoul, the Silla-dynasty heritage sites of Gyeongju, and Hahoe Village in Andong. Islands and coast: Jeju Island, the archipelago of Hallyeohaesang Marine National Park, and the east-coast cities of Gangneung and Sokcho.",
    whenAndTips:
      "Cherry blossoms in spring (April–May) and autumn foliage (September–November) are the most popular travel seasons; summer (July–August) is hot, humid, and prone to typhoons, while winter (December–February) is cold but marks peak season for the ski resorts of Gangwon.",
  },
  seoul: {
    // identity sources: 首尔住民登录人口 9,284,263（2026 年 7 月末，行政安全部按月发布）——
    //   https://superkts.com/population/data/Seoul（3 级，转述行安部月度数据，2026-09-08 核）。
    //   首都圈（首尔+仁川+京畿，《首都圈整备计划法》口径）2026-06-30 约 2,611 万，占全国 51.11%。
    //   **口径**：韩国有两套并存的官方人口 —— 行政安全部的住民登录人口（按月，次月初发布）与
    //   统计厅 KOSTAT 的推算人口/登记基础人口总调查（按年），两者能差几十万。
    //   本项目韩国各城市用的都是**住民登录人口**，正文里已点名。
    //   **首尔是连年下降的**，原来写的 950 万 / 960 万都已过期，且这两个数本身就互相矛盾。
    identity:
      "Seoul is South Korea's capital and largest city, with a registered population of about 9.28 million (July 2026, Ministry of the Interior and Safety; about 26.1 million across the wider capital area, more than half the country); it straddles the Han River and is the country's centre of politics, economy, and culture.",
    // howItWorks sources: 「韩国唯一的特别市」**核实属实**（《地方自治法》第 2 条，1 级）。⚠️ 顺带记一个会让读者误读的新情况：2026-07-01 起出现「全南光州**统合特别市**」这一**并列但不同**的法定类别，名称含「特别市」三字。正文没有错，下一轮若要写韩国的行政层级，注意区分这两档。2026-09-12 核。
    howItWorks:
      "Seoul is Korea's only 'Special City', ranking with the provinces and governed by an elected mayor and council; beneath it lie 25 autonomous districts (gu), each with its own elected head and council, and beneath those more than four hundred 'dong', the unit in which residents give their address. The Han River divides the city into Gangbuk and Gangnam: Jongno and Jung districts north of the river are the old city and seat of government since the Joseon dynasty, Gangnam to the south is the new city built since the 1970s, and Yeouido is the financial district — three centres, each fully formed. The city's registered population has been declining and stood at about 9.28 million in July 2026, while the Seoul Capital Area including Incheon and Gyeonggi holds about 26 million, more than half the country. Since 2014 addresses use road name and building number, with the old lot numbers still in use, and the subway and regional rail run on one T-money card across the whole capital area. Newcomers most often go wrong by confusing the city with the capital area, when many who work in Seoul live beyond its boundary in Gyeonggi.",
    layout:
      "The city divides along the Han River into Gangbuk (the old town north of the river, dense with historic sites such as Gyeongbokgung and the Myeongdong shopping district) and Gangnam (a modern commercial and residential district south of the river), linked by dozens of bridges.",
    gettingAround:
      "Incheon International Airport is the main international gateway, about 50 km from the city centre, with the airport express reaching Seoul Station in about an hour; domestic flights mostly use Gimpo Airport. The city's subway network is extensive; the T-money card is recommended.",
    culture:
      "Korean is the common language, and English is fairly widely spoken among younger generations. Seoul has a strong café culture, and convenience stores are open 24 hours. Tipping is not expected at restaurants.",
    seeAndDo:
      "N Seoul Tower (on top of Namsan, the observation tower that is the most prominent landmark on Seoul's skyline, reachable by cable car or on foot); Gyeongbokgung Palace and the Bukchon Hanok Village; Myeongdong and Dongdaemun shopping districts; Han River parks (cycling, picnics); hiking in Bukhansan National Park; the confluence of the Han River's two branches at Yangsu-ri.",
    whenAndTips:
      "Cherry blossom season (April–May) and autumn foliage (September–November) are the most popular; a T-money card is worth getting, and most attractions close on Mondays.",
  },
  busan: {
    // identity sources: 釜山住民登录人口 3,232,370（2026 年 6 月，行政安全部）——
    //   https://knsi.kr/（3 级，注明数据源为행정안전부，2026-09-08 核）。
    //   **排名的比较对象要记下来**：同期仁川 3,061,002，釜山领先约 17 万，第二位仍成立，
    //   但差距在缩小 —— 下一轮刷新时要重算，不要默认这个名次还在。
    identity:
      "Busan has a registered population of about 3.23 million (June 2026), making it South Korea's second-largest city by that measure and its largest port, on the south-eastern coast of the Korean Peninsula, and an important maritime gateway and film-festival host city.",
    // howItWorks sources: 「按住民登录人口仍是韩国第二大城市」**目前成立**：2026 年 6 月末釜山 3,232,370、仁川 3,061,002，领先约 17.1 万。⚠️ **差距在快速收窄**，韩国本国媒体预测 2028—2031 年间仁川将反超 —— 这是个会自己过期的名次，下一轮务必重算。2026-09-12 核。
    howItWorks:
      "Busan is a 'Metropolitan City', ranking with the provinces and governed by an elected mayor, divided into fifteen autonomous districts and one county, each with its own head and council; with a registered population of about 3.23 million in June 2026 it remains Korea's second city by that measure, and its port ranks among the world's busiest. The city is strung along the south-east coast, cut by mountains into a chain of valleys and bays: Nampo-dong and Jung district are the old port and former centre, Seomyeon is the newer commercial and transfer hub, and Haeundae and Centum City to the east are the seaside new town, the three joined by four subway lines and a light rail. The Gyeongsang dialect is the everyday speech. Addresses use road name and building number, locals place things by 'the east', 'the west' and the names of beaches, and the KTX reaches Seoul in about 2 hours 15 minutes. Newcomers most often go wrong by assuming Busan has one downtown, when its life is spread among several bays separated by hills.",
    layout:
      "The city stretches along the coast, with the Nampo-dong and Seomyeon commercial districts at its centre, the Haeundae and Gwangalli beach resort areas, and the colourful hillside village of Gamcheon Culture Village each occupying different districts, linked by the subway.",
    gettingAround:
      "Gimhae International Airport is about 20 km from the city centre, connected by airport bus and subway; the KTX links Seoul in about 2.5 hours. The city's subway covers the main sights; the T-money card is recommended.",
    culture:
      "The Busan dialect differs somewhat from standard Seoul Korean, and locals are often seen as more direct and outgoing than Seoulites. The Busan International Film Festival is held every autumn and is a major film festival in Asia.",
    seeAndDo:
      "Haeundae and Gwangalli beaches; Gamcheon Culture Village; Jagalchi Fish Market; Taejongdae coastal cliff park; Busan Tower in Yongdusan Park.",
    whenAndTips:
      "Summer (July–August) is beach season, and accommodation is tight during the film festival in October; book seaside lodging in advance.",
  },
  "jeju-city": {
    // identity sources: 济州市住民登录人口（济州特别自治道官方人口页，1 级，
    //   https://www.jeju.go.kr/livingpopulation/jeju/jumin.htm，2026-09-08 核）：
    //   2025 年 7 月内国人 484,111 + 外国籍 18,658 = 合计 502,769；内国人口径 2024 年为 488,844、
    //   2026 年 6 月约 484,123。
    //   **这是一处「同条目两段各用一个口径都没写明」**：identity 用的是含外国籍的合计数、
    //   howItWorks 用的是纯内国人数，读者会以为其中一个写错了。两段现已各自点名口径。
    //   另注意区分「济州市」（济州道下辖的市）与「济州特别自治道」（整个道），后者约为前者的两倍。
    identity:
      "Jeju City is Jeju Island's largest city and gateway, with a registered population of about 503,000 including foreign residents (July 2025), and the main starting point for exploring Hallasan and Jeju's volcanic landforms.",
    // howItWorks sources: Wikipedia (2026-09): Jeju City (administrative city under Jeju Special Self-Governing Province since 2006, no council; 2024 pop 488,844)
    howItWorks:
      "Jeju City is the seat of Jeju Special Self-Governing Province, but it is not a self-governing body: in 2006 the island's four municipalities were merged into the two 'administrative cities' of Jeju and Seogwipo, whose mayors are appointed by the provincial governor and which have no councils — unique in Korea. With a registered Korean-national population of about 484,000 in June 2026 it is the island's administrative, commercial and transport centre, with Jeju International Airport on its western edge. The city has two parts: the old town by the harbour, with the Tapdong waterfront and Dongmun Market, and the newer Yeon-dong and Nohyeong districts near the airport, where the provincial offices, hotels and restaurants cluster. The island has no railway, and travel depends on buses and cars. Addresses use road name and building number, and locals speak of 'old Jeju' and 'new Jeju'. Newcomers most often go wrong by taking Jeju City for an ordinary Korean city, when it is an administrative city run directly by the province and the gateway to the whole island.",
    layout:
      "The city extends along the island's north coast; the old town around Dongmun Market retains traditional streets, while the newer Nohyeong-dong area is a modern commercial and residential district.",
    // gettingAround sources: 排他性措辞：岛上另有正石飞行场（私人飞行训练场，无商业客运），因此改成「唯一提供定期客运航班的机场」。3 级，2026-09-12 核。
    gettingAround:
      "Jeju International Airport sits right on the city's west side, the island's only airport with scheduled passenger service; the ring road and bus network cover the whole island, and self-driving is a common way to explore.",
    culture:
      "The Jeju dialect differs considerably from standard Korean, and the island preserves a distinctive haenyeo (female free-diving harvester) culture, with \"Culture of Jeju Haenyeo\" inscribed on the UNESCO Intangible Cultural Heritage list in 2016.",
    seeAndDo:
      "Yongduam Rock coast; Jeju Folklore and Natural History Museum; Dongmun traditional market; nearby, Hallasan, Seongsan Ilchulbong, and the Manjanggul lava tube.",
    whenAndTips:
      "Canola-flower season in spring (March–April) and silver-grass season in autumn (October–November) are most popular; typhoons cluster in summer (July–September), so check weather warnings before travelling.",
  },
  gyeongju: {
    // identity sources: 庆州住民登录人口 242,880（2026 年 7 月末，行政安全部）——
    //   https://dokdokinfo.kr/statsbyregionspecific/4713000000/（3 级，注明数据源为행정안전부，2026-09-08 核）。
    //   2025 年末为 244,055，持续小幅下降。
    identity:
      "Gyeongju's nearly a thousand years as a capital (57 BC – AD 935) tracks almost the entire arc of Silla's rise from a small statelet to the power that unified the Korean peninsula — after allying with Tang China to conquer Baekje and Goguryeo in the 7th century, Silla ruled the peninsula from here for three more centuries, and Cheomseongdae, built during the reign of Queen Seondeok (632–647), still stands as East Asia's oldest surviving astronomical observatory. Gyeongju has a registered population of about 243,000 (July 2026); the city is dotted with royal tombs, temples, and ruins, earning it the nickname \"museum without walls.\"",
    // howItWorks sources: 两项遗产、两个年份：**石窟庵与佛国寺 1995 年**列入；**庆州历史遗迹地区 2000 年**列入（南山／月城／大陵苑／皇龙寺／山城五区）。原句式易被读成佛国寺也是 2000 年列入，已分开写明。2026-09-12 核（国家遗产厅 1 级）。
    howItWorks:
      "Gyeongju is a city of North Gyeongsang covering about 1,324 km² with a registered population of about 243,000 in July 2026, still slowly declining, yet its town is a 'museum without walls': the remains of the Silla capital of nearly a thousand years, more than thirty royal tombs and five hundred burial mounds are scattered between houses and shops, with the Daereungwon tombs and the Cheomseongdae observatory in the middle of town. The city falls into three parts — the historic centre, Bulguksa and Seokguram at the foot of Tohamsan to the east (inscribed separately as World Heritage in 1995), and the Bomun Lake resort to the south-east; the tombs and ruins in and around town were inscribed in 2000 as the Gyeongju Historic Areas. Singyeongju KTX station lies about 10 km west of town, about two hours from Seoul. Addresses use road name and building number, and locals take their bearings from tombs and temples. Newcomers most often go wrong by expecting a walled ancient city, when Gyeongju is a living town in which the monuments and everyday life share the same streets.",
    layout:
      "The historic core sits on the flat land at the city centre, with the Daereungwon tomb cluster, Cheomseongdae observatory, and Bulguksa Temple and Seokguram Grotto spread across the city and its outskirts.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Pohang Gyeongju Airport (about 35 km away); the KTX Singyeongju station reaches Seoul in about 2 hours. The compact historic core is easily covered on foot or by rented bicycle.",
    culture:
      "As Silla's ancient capital, Gyeongju preserves a dense concentration of royal tombs and Buddhist heritage spanning a thousand years; the \"Gyeongju Historic Areas\" were inscribed on the UNESCO World Heritage List in 2000.",
    seeAndDo:
      "Bulguksa Temple and Seokguram Grotto (World Heritage); the Daereungwon tomb cluster and Cheonmachong tomb; Cheomseongdae (one of East Asia's oldest surviving observatories); night views at Donggung Palace and Wolji Pond; the traditional settlement of Yangdong Village.",
    whenAndTips:
      "Cherry blossom season in spring (April) and autumn (October–November) are most pleasant; plan at least two days to cover both the city-centre sites and Bulguksa/Seokguram separately.",
  },
  ulsan: {
    // 零改动留痕（2026-09-10）：MOIS 住民登录人口 2025-12 为 1,091,948、2026-07 为 1,086,756，「约 110 万」两期都成立。
    //   KTX 蔚山站在蔚州郡三南邑、不在市区（蔚山市官网，1 级），正文表述准确。
    identity:
      "Ulsan is a major heavy-industry city in South Korea, with a registered population of about 1.09 million in 2026, known for shipbuilding, automobiles, and petrochemicals, and also home to the Taehwa River ecological park and a whale-watching culture.",
    // howItWorks sources: 口径：现代官方用「世界最大的**单一**工厂」（약 500 만 ㎡、5 个总装厂、年产约 140 万辆），1 级。原文漏了「单一」。
    howItWorks:
      "Ulsan is a 'Metropolitan City' of Korea, ranking with the provinces and governed by an elected mayor, divided into four autonomous districts and Ulju county, each with its own head and council; it covers about 1,057 km² with about 1.1 million people. It is Korea's industrial capital: Hyundai Motor's Ulsan plant is the world's largest single-site car factory, about 5 km² with five assembly plants, Hyundai Heavy's shipyard and SK's refinery stand here too, income per head has long been among the country's highest, and the city is accordingly a set of residential districts each beside a works. The Taehwa River runs through it with parkland along its banks, the prehistoric Bangudae petroglyphs lie in a valley to the west, and the Yeongnam Alps rise on the city's western rim. There is no subway; the KTX station opened in 2010 lies in Ulju county about 20 km west of the centre, and Busan is about 60 km south. Newcomers most often go wrong by assuming the high-speed station is in town, when it stands out in the county.",
    layout:
      "The city is built along the Taehwa River, with the Taehwa River National Garden running along its banks, while industrial zones, residential areas, and natural parks occupy separate districts.",
    gettingAround:
      "Ulsan Airport is about 7.1 km in a straight line from the city centre; the KTX reaches Seoul in about 2 hours. The city bus network covers the main areas.",
    culture:
      "Ulsan has a historic association with whaling and whale-watching; Jangsaengpo Whale Culture Village and Whale Museum document this tradition, and the waters off Ulsan remain a site for whale-watching activities today.",
    seeAndDo:
      "Taehwa River National Garden (a 4-km bamboo grove); Jangsaengpo Whale Culture Village and Whale Museum; the coastal rock formations at Daewangam Park; nearby, the Yeongnam Alps mountains.",
    whenAndTips:
      "Spring and autumn are most pleasant; the bamboo grove along the Taehwa River is at its greenest in summer, a rare stretch of open nature within the city.",
  },
  yeosu: {
    // identity sources: 丽水市住民登录人口：官方人口页 2026 年 5 月末 260,913（1 级，
    //   https://www.yeosu.go.kr/www/govt/stats/stats_popul，2026-09-08 核），2026 年 6 月约 260,502。
    //   原文的 28 万 / 27 万分别偏高约 7% 与 3%，是这一批里降幅最大的一个；
    //   howItWorks 原来引的 268,823 连年份都没标，疑为较早的维基快照。
    identity:
      "Yeosu is a coastal port city in southern South Korea, with a registered population of about 261,000 (June 2026), which became a popular night-view and seaside destination after hosting the 2012 World Expo.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Yeosu (city on the south coast; 268,823; formed 1998 by merging Yeosu city, Yeocheon city and Yeocheon county; from 2026-07-01 under Jeonnam-Gwangju Special Metropolitan City after South Jeolla merged with Gwangju; ~365 islands; Dolsan bridge and cable car; Hyangiram; Odongdo; Expo 2012; Joseon naval headquarters from 1479, Yi Sun-sin's base)
    howItWorks:
      "Yeosu is a city on Korea's south coast with a registered population of about 261,000 in June 2026, declining in recent years, formed in 1998 by merging the old Yeosu city, Yeocheon city and Yeocheon county; since 1 July 2026, when South Jeolla merged with Gwangju into the Jeonnam-Gwangju Special Metropolitan City, it has lain directly under that provincial-level unit. The city spreads over a peninsula and some 365 islands: the centre sits at the peninsula's tip, the Dolsan bridge and a sea cable car cross to Dolsan island with the Hyangiram hermitage at its southern end, the camellias of Odongdo lie off the harbour, and the Expo 2012 site by the water is now the convention and hotel quarter; from 1479 the Joseon dynasty placed the naval command of eastern Jeolla here, and Yi Sun-sin used it as his base. The petrochemical works of the Yeosu national industrial complex on the western side are the city's economic mainstay, and the KTX ends at Yeosu-Expo station beside the Expo grounds. Newcomers most often go wrong by taking Yeosu for a small tourist city, when petrochemicals are its main trade.",
    layout:
      "The city extends along the coast of the Yeosu Peninsula, with the city centre adjoining the former Expo grounds; Dolsan Island and the main part of Yeosu are linked by a bridge.",
    gettingAround:
      "Yeosu Airport is about 10 km in a straight line from the city centre; the KTX Yeosu EXPO station reaches Seoul in about 3 hours. Getting around the city and Dolsan Island's coastal sights is best done by car or bus.",
    culture:
      "Yeosu became known for its marine ecology exhibits following the 2012 Expo's theme, \"The Living Ocean and Coast\"; its cross-sea cable car and musical fountain at night are among the city's signature evening experiences.",
    seeAndDo:
      "The Yeosu Maritime Cable Car (views across the water); the Odongdo Island coastal walk; the Yeosu Expo Aquarium; night views from Dolsan Bridge; Yulpo Liberation Beach.",
    whenAndTips:
      "Summer (June–August) is beach season, and the cable car's night view is best around dusk; plan one evening dedicated to Yeosu's night scenery.",
  },
  pohang: {
    // 零改动留痕（2026-09-10）：MOIS 住民登录人口 2026-06 末 487,008，「约 49 万」成立，未查到更新月份的公开转引。
    //   📌 下一轮直接走浦项市官方数据门户 phdata.pohang.go.kr/popltn/rsgstStatus（1 级），别再走 3 级聚合站。
    // identity sources: **韩国的官方人口口径**（2026-09-09 核）：**住民登录人口（주민등록인구，行政安全部 MOIS）** —— 韩国国民中的居住者 + 居住不明者 + 国内居所申报的在外国民，**不含外国人**，按月发布（月末数约在次月内更新），**这是本库统一采用的城市人口口径**；另有各地方政府自行合并 MOIS 数与法务部登记外国人数得到的「含外国人总人口」，**没有单一央级机构统一发布**，引用必须注明；统计厅（KOSTAT）的人口总调查每 5 年一次（尾数 0/5，最近 2025 年）与推计人口是另一套方法，**不能与住民登录人口混用**。行政层级：特别市 / 6 个广域市 / 特别自治市 与 道 / 特别自治道 同级（合称广域自治团体 17 个），其下市 / 郡 / 自治区为基础自治团体；「特例市」不是行政层级，是给人口 ≥100 万的市的扩权地位。**官方的「都会区」概念只存在于首都圈（수도권）**，地方城市没有对应的官方口径。
    //   浦项住民登录人口 487,008（2026 年 6 月末），3 级聚合自行政安全部住民登录人口。**下一轮建议直接抓浦项市官方数据门户（phdata.pohang.go.kr）这个 1 级页面。** 「庆尚北道人口最多的城市」按住民登录口径成立。2026-09-09 核。
    identity:
      "Pohang is a major steel-industry city in South Korea, with a population of about 490,000, home to the headquarters of POSCO, and also a gateway for the coast of Yeongil Bay and the Homigot sunrise viewpoint.",
    // howItWorks sources: 说法口径：官方／市场自营站写的是「东海岸规模最大的传统市场」（含水产区），非「最大的鱼市」，已按可核说法改写。
    howItWorks:
      "Pohang is the most populous city of North Gyeongsang with about 490,000 people, divided into the two autonomous districts of Nam and Buk, each with its own head and council. POSCO was founded here in 1968 and began production in 1972, and now ranks among the world's ten largest steelmakers by crude steel output, seventh in the World Steel Association's 2024 table, its works on the south shore of Yeongil Bay shaping the city's form and its employment; POSTECH, founded in 1986, and Handong Global University make it a research city as well. The city faces the East Sea: Yeongildae beach lies north of the centre, the 'Hands of Harmony' sculpture stands in the water at Homigot where people come for the New Year sunrise, Jukdo Market is one of the largest traditional markets on the east coast, known for its seafood, and the ferry to Ulleungdo sails from here. The KTX reached Pohang station in 2015, the airport lies south of town and Gyeongju about 30 km south-west. Newcomers most often go wrong by taking Pohang for a steelworks, when it is the east coast's regional city, with universities, a fishing port and beaches.",
    layout:
      "The city stretches along Yeongil Bay, with steel-industry zones and residential areas separate from the seaside Yeongildae Park; Homigot Park sits at the easternmost point of the coast, the classic sunrise spot.",
    gettingAround:
      "Pohang Gyeongju Airport is about 10 km by road from the city centre; the KTX reaches Seoul in about 2 hours. Getting around the city and coastal sights is best done by car or bus.",
    culture:
      "Pohang grew rapidly from a fishing village into an industrial city in the late 20th century following the establishment of POSCO, making it a representative city of Korea's postwar industrialisation.",
    seeAndDo:
      "Homigot Park (one of mainland Korea's easternmost sunrise viewpoints, with its hand-sculpture landmark); Yeongildae seaside park; the retro streets of Guryongpo; nearby, the historic sites of Gyeongju.",
    whenAndTips:
      "New Year's Day sunrise-viewing at Homigot is a signature local event and draws crowds; spring and autumn suit combining a visit with Gyeongju.",
  },
  gangneung: {
    // identity sources: 江陵住民登录人口 205,891（2026 年 3 月，行政安全部）——
    //   https://superkts.com/population/data/Gangwon-do/Gangneung-si（3 级，注明数据源为행정안전부，2026-09-08 核）。
    //   跌破 21 万这个节点当地媒体 2023-08 已报道（江原日报，2 级）。
    identity:
      "Gangneung is a representative city on the east coast of Gangwon, with a registered population of about 206,000 (March 2026), having fallen below 210,000; it co-hosted the 2018 Winter Olympics and is known for its coffee culture and the Gyeongpo Lagoon.",
    // howItWorks sources: 年数：官方（江陵端午祭官网、国家遗产厅，均 1 级）一律写「千年历史」，**「1,300 年」查无出处**，已改。列入年份 2005 属实（2005-11-25 代表作名录，2008 年并入非遗代表名录）。2026-09-12 核。
    howItWorks:
      "Gangneung is a city of Gangwon State covering about 1,040 km² with a registered population of about 206,000 in March 2026, governed by an elected mayor. The city lies east of the Taebaek range on the East Sea, a narrow strip between mountains and water: Gyeongpo beach and its lagoon lie north of the centre, Jeongdongjin on the cliffs to the south is where people watch the sunrise, the coffee street at Anmok grew from vending machines in the 1990s into an industry of its own, and Ojukheon is the birthplace of Shin Saimdang and Yi I; the Gangneung Danoje festival, with a thousand-year history, was inscribed as intangible heritage in 2005. All the ice events of the 2018 Winter Olympics were held here and the venues still stand east of town; the Gyeonggang KTX line opened in 2017 cut the journey from Seoul from six hours to about an hour and fifty minutes. Newcomers most often go wrong by taking Gangneung for a beach, when it is the regional city of the Yeongdong coast and the beach only its eastern edge.",
    layout:
      "The city extends along the east coast, with Gyeongpo Lagoon and Gyeongpo Beach adjoining each other on its north side, and the Anmok coffee street lined with sea-view cafés along the shoreline.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Yangyang International Airport (about 40 km away, with limited domestic scheduled service); the KTX Gangneung Line reaches Seoul's Cheongnyangni Station in about 2 hours. Getting around the city and Gyeongpo Lagoon is best done by car or bus.",
    culture:
      "The annual Gangneung Danoje Festival, held at Dano, blends shamanic ritual, mask drama, and market events; it was inscribed on the UNESCO Intangible Cultural Heritage list in 2005.",
    seeAndDo:
      "Gyeongpo Lagoon and the Gyeongpodae pavilion; the Anmok coastal coffee street; Ojukheon (birthplace of the Joseon-era scholar Yi I); Jeongdongjin sunrise-train station; nearby, the Daegwallyeong highland pastures.",
    whenAndTips:
      "The Gangneung Danoje Festival around Dano (5th day of the 5th lunar month) is the best time to experience local tradition; summer is beach season, winter is ski and hot-spring season.",
  },
  sokcho: {
    // 零改动留痕（2026-09-10）：✅ **零争议红线复查干净**——逐句复读七段中英全文（identity / howItWorks / layout /
    //   gettingAround / culture / seeAndDo / whenAndTips），未发现残留的 军事 / 分界线 / DMZ / 38 度 / 停战 / 边境 类表述，
    //   上一轮改掉的三处是彻底的，**没有第四处漏网**。
    // identity sources: **零争议红线**（`CLAUDE.md`）：`history` 段不碰现代政治 / 领土 / 宗教 / 族群评价；可能有争议 → **删或换中性表述**。
    //   **这一条不是核实方报的，是我在处理韩国批之后对全库做 `朝鲜战争 / Korean War / 军事分界线 / Military Demarcation / 非军事区 / DMZ / 38 度 / 停战` 的正则扫描扫出来的** —— 核实方只看它那一批的 14 个条目，扫全库才发现同一类表述还散在别处。**「派一批去核」和「把这一类在全库搜一遍」是两件事。**
    //   束草这一条**在 identity、howItWorks、culture 三段里各踩了一次**，三处都已改成可核实的地理、产业与生活事实。
    identity:
      "Sokcho is a coastal city in north-eastern Gangwon, with a population of about 80,000, the traditional gateway to Seoraksan National Park and a significant fishing port and seafood market on the east coast.",
    // howItWorks sources: 人口：MOIS 住民登录人口 2026-08 为 78,788。英文侧原写 81,000 属旧数残留，中文侧「约 8 万」无误。MOIS 按月发布、滞后约 1 个月。2026-09-10 核。
    howItWorks:
      "Sokcho is a city of Gangwon State covering about 106 km², with about 79,000 people (August 2026). The Abai village at Cheongho-dong is a distinct quarter of the city, linked to the far bank by a hand-pulled ferry; that ferry and the local fish cake are still Sokcho's emblems. The town is pressed between the East Sea and Seoraksan: the national park gate lies 10 km west with Sinheungsa and the cable car inside, Yeongnang lake sits in the middle of town and the fish market of Daepo harbour at its southern end. Seoul is about an hour and a half away, Yangyang airport 20 km south, and Goseong lies north. Newcomers most often go wrong by taking Sokcho for the gate of Seoraksan, when it is a coastal city with a fishing port and a rhythm of its own.",
    // layout sources: 距离：两段原写 10 与 15 公里。路网测算（OSRM）车行约 11.4 公里、直线约 9.4 公里，故统一到 10。⚠️ 没有拿到韩国国立公园公团的官方里程（官网被 WAF 拦截），所以只在两个既有值里择一、不写新数字。
    layout:
      "The city sits right on the east coast, with Cheongcho Lake lagoon and Sokcho Port within the city, while the entrance to Seoraksan National Park lies inland, about 10 km to the west.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Yangyang International Airport (about 20 km away, with limited domestic scheduled service); an express bus from Seoul takes about 2 to 2.5 hours. Getting around the city and to the Seoraksan entrance is best done by bus or hired car.",
    // culture sources: **零争议红线**（`CLAUDE.md`）：`history` 段不碰现代政治 / 领土 / 宗教 / 族群评价；可能有争议 → **删或换中性表述**。
    //   **这一处在 `culture` 段** —— 红线的适用范围不只是 `history` 段，任何段落里可能读作立场表态的句子都算。2026-09-10。
    culture:
      "Sokcho has long been a port town on the east coast, and today it is known for its seafood market and Seoraksan tourism.",
    seeAndDo:
      "Seoraksan National Park (hiking to Daecheongbong and Guryongso Falls); seafood at Sokcho Jungang Market; Cheongcho Lake ecological park; the seaside temple of Naksansa.",
    whenAndTips:
      "Autumn (October) foliage at Seoraksan is nationally famous, so book accommodation ahead; summer beaches and winter skiing each have their own peak season.",
  },
  chuncheon: {
    // 零改动留痕（2026-09-10）：✅ 零争议红线逐段复查通过（本条与 sokcho 同在江原、临近北汉江，属红线重点条目）。
    //   ⚠️ 人口存疑不改：MOIS 2026-01 末 290,468、**2026-06 末已降至约 285,027**，正文「约 29 万」取的是较早一端。
    //   两个数都在注释里、都属实，只是取整偏向了旧的那一期。下一轮直接抓 chuncheon.go.kr 官方页拿 7/8 月数再决定是否降为「约 28 万」。
    // identity sources: **韩国的官方人口口径**（2026-09-09 核）：**住民登录人口（주민등록인구，行政安全部 MOIS）** —— 韩国国民中的居住者 + 居住不明者 + 国内居所申报的在外国民，**不含外国人**，按月发布（月末数约在次月内更新），**这是本库统一采用的城市人口口径**；另有各地方政府自行合并 MOIS 数与法务部登记外国人数得到的「含外国人总人口」，**没有单一央级机构统一发布**，引用必须注明；统计厅（KOSTAT）的人口总调查每 5 年一次（尾数 0/5，最近 2025 年）与推计人口是另一套方法，**不能与住民登录人口混用**。行政层级：特别市 / 6 个广域市 / 特别自治市 与 道 / 特别自治道 同级（合称广域自治团体 17 个），其下市 / 郡 / 自治区为基础自治团体；「特例市」不是行政层级，是给人口 ≥100 万的市的扩权地位。**官方的「都会区」概念只存在于首都圈（수도권）**，地方城市没有对应的官方口径。
    //   春川住民登录人口 2026-01 末 290,468、2026-06 末约 285,027（2 级本国地方媒体报道官方数 + 3 级聚合），与同条目 howItWorks 的约 29 万统一。2026-09-09 核。
    identity:
      "Chuncheon is the seat of the Gangwon State provincial government, with a population of about 290,000, sitting at the confluence of the Soyang and North Han rivers; it is known for its lake scenery and as the birthplace of dakgalbi (spicy stir-fried chicken).",
    // howItWorks sources: 「江原特别自治道的道厅所在地」与「最近为原州机场（约 65 公里）」**均核实属实**：道厅一直在春川；原州机场仍由真气航空运营春川—原州—济州航线，路网测算约 64.3 公里，比襄阳（约 85 公里）、金浦（约 90 公里）近。2026-09-12 核。
    howItWorks:
      "Chuncheon is the seat of Gangwon State, covering about 1,167 km² with about 290,000 people, governed by an elected mayor, with the provincial government and assembly in town. The city lies in the valley where the Soyang and Bukhan rivers meet, the Soyang and Uiam dams damming them into a chain of lakes that ring the town, which is why it is called the lake city; dak-galbi, invented by a pork butcher here in the 1960s, and buckwheat mak-guksu are its two dishes; Nami Island lies about 25 km south-west and belongs administratively to Gapyeong county in Gyeonggi Province, and Legoland Korea opened in 2022 on an island in Uiam lake. The Gyeongchun line and the ITX-Cheongchun run direct from Seoul in about an hour, and Kangwon National University and Hallym University are in town. Newcomers most often go wrong by taking Nami Island for a Chuncheon sight, when it lies in a county of the neighbouring province and is merely easiest to reach from here.",
    layout:
      "The city is surrounded by bodies of water including Soyang Lake and Uiam Lake, with the Myeongdong shopping district, Nami Island, and the Soyang Dam lying in different directions from the city centre.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Wonju Airport (about 65 km away); Seoul's subway Gyeongchun Line runs directly to Chuncheon Station in about 1 to 1.5 hours, making it one of the most accessible cities near Seoul.",
    culture:
      "Chuncheon is known internationally as the filming location of the Korean drama \"Winter Sonata\" on Nami Island, and is also the birthplace of dakgalbi; the city's Dakgalbi Street is a signature local food experience.",
    seeAndDo:
      "Nami Island (a lake island and K-drama filming location); the Soyang Dam and a Soyang Lake boat cruise; Small Forest of Dreams Park; dakgalbi at Chuncheon's Dakgalbi Street.",
    whenAndTips:
      "Autumn foliage on Nami Island and winter snow scenery are the most popular seasons; an easy day trip from Seoul.",
  },
  andong: {
    // 零改动留痕（2026-09-10）：MOIS 2026-06 约 151,864，「约 15 万」成立。
    //   「韩国精神文化的首都」经核为市宣传口号、**非法定称号**，正文用「被称为」的被动式处理，与仓库对同类非官方称号的惯例一致，不再降级。
    // identity sources: **韩国的官方人口口径**（2026-09-09 核）：**住民登录人口（주민등록인구，行政安全部 MOIS）** —— 韩国国民中的居住者 + 居住不明者 + 国内居所申报的在外国民，**不含外国人**，按月发布（月末数约在次月内更新），**这是本库统一采用的城市人口口径**；另有各地方政府自行合并 MOIS 数与法务部登记外国人数得到的「含外国人总人口」，**没有单一央级机构统一发布**，引用必须注明；统计厅（KOSTAT）的人口总调查每 5 年一次（尾数 0/5，最近 2025 年）与推计人口是另一套方法，**不能与住民登录人口混用**。行政层级：特别市 / 6 个广域市 / 特别自治市 与 道 / 特别自治道 同级（合称广域自治团体 17 个），其下市 / 郡 / 自治区为基础自治团体；「特例市」不是行政层级，是给人口 ≥100 万的市的扩权地位。**官方的「都会区」概念只存在于首都圈（수도권）**，地方城市没有对应的官方口径。
    //   安东人口 152,610（2025-07）/ 约 151,864（2026-06），市官网（级别 1）。
    //   **「韩国精神文化的首都」是安东市的城市宣传口号，不是法定称号** —— 正文写的是「被称为」，已经是被动、非断言官方认证的写法，与本库对胡萨维克「欧洲观鲸之都」、基尔肯尼「中世纪之都」的处理一致，**判定不必再降级**。2026-09-09 复核，本轮无需改动。
    identity:
      "Andong is a historic and cultural city in north-eastern North Gyeongsang Province, with a population of about 150,000; Hahoe Village is one of Korea's best-preserved traditional settlements, and the city is also the birthplace of Andong jjimdak (braised chicken).",
    // howItWorks sources: 「河回村 2010 年列入世界遗产」（韩国历史村落：河回与良洞，1—2 级）与「假面舞节是全国最大的民俗节庆之一」（韩国观光公社与本国媒体的规模数据）**均核实属实**。⚠️ 距离「市区西面约 25 公里」：路网测算约 28 公里，略远于正文，但**没有官方里程可引**（只有路网估算），按「3 级／估算不作替换值的唯一依据」**未改**。2026-09-12 核。
    howItWorks:
      "Andong is the seat of North Gyeongsang province, covering about 1,591 km² with a registered population of about 152,000 in June 2026, governed by an elected mayor; the provincial government and assembly moved in 2016 from Daegu to a new town on the Andong-Yecheon border, turning Andong from a farming town into a provincial administrative centre. The city lies on the upper Nakdong, and since the Andong dam was built in 1976 a lake has stood north of town; this is the heartland of Joseon Confucianism and yangban culture: the Hahoe folk village, World Heritage since 2010, lies about 25 km west, Dosan Seowon to the north, Bongjeongsa to the north-west, and the mask dance festival in October is among the largest folk festivals in the country. Andong braised chicken, ritual rice and Andong soju are the local tastes, and the nearest airport is Daegu, 92 km away. Newcomers most often go wrong by taking Andong for a folk village, when it is a province's administrative centre and the folk village lies tens of kilometres away in a bend of the river.",
    layout:
      "The city sits along the upper Nakdong River; Hahoe Village occupies its own terrace on the inside of a Nakdong River meander to the city's west, at some distance from the centre.",
    gettingAround:
      "Andong's small local airfield currently has no scheduled passenger flights; the nearest airport with scheduled service is Daegu International Airport (about 90 km away); the KTX reaches Seoul in about 2.5 hours, and long-distance buses are also an option. Getting to Hahoe Village is best done by car or bus.",
    culture:
      "Andong is known as the \"capital of Korea's spiritual culture,\" with its Confucian academy (seowon) traditions and ceremonial rites well preserved; the \"Seowon, Korean Neo-Confucian Academies\" series, including Andong's Dosan Seowon and Byeongsan Seowon, was inscribed on the UNESCO World Heritage List in 2019.",
    seeAndDo:
      "The traditional settlement of Hahoe Village and its mask-dance performances; Dosan Seowon academy; Byeongsan Seowon academy; night views at Wolyeonggyo Bridge; Andong jjimdak.",
    whenAndTips:
      "The Andong International Mask Dance Festival in autumn (September–October) is the liveliest time to visit; plan at least half a day dedicated to Hahoe Village.",
  },
  jeonju: {
    // 抽样 seed=11（2026-09-14）：韩屋村「八百多座、韩国最大的城市韩屋群」查无一手支持（韩文维基 735 栋，未见「全国最大」权威表述）→ 改七百多座、删最高级；howItWorks「64 万 / 638,000」与同段 2026-06 的约 62 万自相矛盾，统一为约 62 万。核实 2026-09-14
    // identity sources: **韩国的官方人口口径**（2026-09-09 核）：**住民登录人口（주민등록인구，行政安全部 MOIS）** —— 韩国国民中的居住者 + 居住不明者 + 国内居所申报的在外国民，**不含外国人**，按月发布（月末数约在次月内更新），**这是本库统一采用的城市人口口径**；另有各地方政府自行合并 MOIS 数与法务部登记外国人数得到的「含外国人总人口」，**没有单一央级机构统一发布**，引用必须注明；统计厅（KOSTAT）的人口总调查每 5 年一次（尾数 0/5，最近 2025 年）与推计人口是另一套方法，**不能与住民登录人口混用**。行政层级：特别市 / 6 个广域市 / 特别自治市 与 道 / 特别自治道 同级（合称广域自治团体 17 个），其下市 / 郡 / 自治区为基础自治团体；「特例市」不是行政层级，是给人口 ≥100 万的市的扩权地位。**官方的「都会区」概念只存在于首都圈（수도권）**，地方城市没有对应的官方口径。
    //   全州住民登录人口 **620,874（2026 年 6 月末）**，2 级本国地方媒体报道全北道厅官方统计。
    //   **这一条同时暴露了一个二手来源的问题**：条目原注释引的维基「约 638,000（2026）」没有标月份、本身已经滞后 —— 又一次印证「二手来源的年份标注可能是错的」。下一轮直接核对全北特别自治道的道政现况统计（stat.jeonbuk.go.kr）这个 1 级页面。2026-09-09 核。
    identity:
      "Jeonju is the seat of the Jeonbuk State provincial government, with a population of about 620,000 (June 2026); the Jeonju Hanok Village preserves several hundred traditional hanok buildings and represents Korea's food culture and traditional-heritage experiences.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Jeonju (capital of Jeonbuk State; 2 gu Wansan and Deokjin; 206.22 km²; ~638,000 2026; Hanok Village with over 800 hanok; Gyeonggijeon with the portrait of Yi Seong-gye; Jeondong Cathedral 1908–14; Pungnammun; bibimbap; UNESCO City of Gastronomy 2012; film festival; ancestral home of the Joseon royal house)
    howItWorks:
      "Jeonju is the seat of Jeonbuk State, divided into the two autonomous districts of Wansan and Deokjin, covering about 206 km² with about 621,000 people in June 2026, governed by an elected mayor, with the provincial government and assembly in town. It is the ancestral seat of the Yi house of Joseon: Gyeonggijeon holds the portrait of the founder Yi Seong-gye, and Pungnammun is the only surviving gate of the old wall; the Hanok Village in Wansan gathers more than seven hundred traditional houses, with the Jeondong Cathedral of 1908–14 outside its gate; Jeonju bibimbap and its rice wine made it a UNESCO City of Gastronomy in 2012, and the international film festival draws about fifty thousand people a year. The KTX reaches Seoul in about an hour and a half, and there is no airport with scheduled flights in the city. Newcomers most often go wrong by taking the Hanok Village for Jeonju, when it is one quarter of Wansan district and the city itself is a provincial capital of about 621,000.",
    layout:
      "The Jeonju Hanok Village occupies one corner of the city centre, in striking contrast with the modern commercial districts around it; Jeondong Catholic Church and Gyeonggijeon Shrine sit at the village's edge.",
    // gettingAround sources: 机场距离：注册表坐标算出直线 83.4 公里；原文短于直线、不可能成立，已改。⚠️ 群山机场（KUV）离全州更近（约 50 公里），原文很可能把两座机场弄混；本轮只改被点名那座的距离。
    gettingAround:
      "There is no commercial airport locally; the nearest is Gwangju Airport (about 90 km away); the KTX Jeonju station reaches Seoul in about 2 hours, and long-distance buses also run directly into the city. The Hanok Village area is walkable.",
    culture:
      "Jeonju is recognised by UNESCO as a \"City of Gastronomy\"; Jeonju bibimbap originated here, and the Hanok Village is dense with traditional teahouses and craft workshops.",
    seeAndDo:
      "Jeonju Hanok Village (hanbok rental, strolling the traditional architecture); Jeondong Catholic Church; Gyeonggijeon Shrine (housing a royal portrait of the Joseon dynasty's founder); the Nambu Market night market; Jeonju bibimbap.",
    whenAndTips:
      "Spring and autumn are best for hanbok photography; renting traditional hanbok within the Hanok Village makes for an immersive experience that matches the architecture around you.",
  },

  // ── South Korea batch 2 (2026-09-05) ──
  incheon: {
    // identity sources: **零争议红线**（`CLAUDE.md`）：不碰现代政治 / 领土议题；可能有争议 → 删或换中性表述。
    //   这一条踩了两层：① 涉及朝鲜半岛现代军事史；② 「转折点」本身是评价性表述。**已删句**，同段其余内容（1883 年开港、韩国唯一官方中华街、开港场老建筑、2001 年仁川国际机场、松岛国际都市与 2003 年首个经济自由区、2014 年亚运会、江华岛与舞衣岛）全部保留。2026-09-10。
    //   **这一条是全库扫描扫出来的，不在韩国地形那一批的 14 个条目里** —— 又一次说明「派一批去核」和「把这一类在全库搜一遍」是两件事。
    identity:
      "Incheon lies on the Yellow Sea coast west of Seoul, South Korea's third-largest city with about 3.02 million people (2026). Opened as a port in 1883, it was one of the first places on the peninsula to meet the outside world; the Chinatown beside Incheon Station is Korea's only official one, and the Open Port area keeps Japanese and Western buildings of that era. Incheon International Airport (2001) on Yeongjong Island is the country's international gateway; Songdo is a new city planned on reclaimed land and became Korea's first free economic zone in 2003, and the city hosted the 2014 Asian Games. Ganghwa and Muuido islands also belong to Incheon.",
    // howItWorks sources: Wikipedia (2026-09): Incheon (Metropolitan City; 2026-01 pop 3,015,482; Songdo FEZ 2003; ICN); Special cities of South Korea
    howItWorks:
      "Incheon is a 'Metropolitan City', ranking with the provinces and governed by an elected mayor, divided into eight autonomous districts and two counties, each with its own head and council; with about 3.02 million people in 2026 it is Korea's third city. It is at once an independent city and the western gate of the capital area: Incheon International Airport stands on Yeongjong Island with a direct railway to Seoul Station, Seoul Metro Line 1 runs through to Incheon Station, and many residents commute daily to Seoul. The city has three centres of gravity — the old Open Port town around Incheon Station, the reclaimed new city of Songdo, Korea's first free economic zone in 2003, and the commercial districts of Bupyeong and Guwol-dong. Addresses use road name and building number, and locals speak of 'Songdo', 'the old town' and 'the airport'; the islands of Ganghwa and Muuido also belong to Incheon. Newcomers most often go wrong by taking Incheon for the suburb where the airport is, when it is a metropolitan city with centres of its own and a larger area than Seoul.",
    layout:
      "The city occupies the coastal plain west of Seoul, merging with the capital into one metropolitan area. The old town surrounds Incheon Station: Chinatown, the Open Port historic quarter and Jayu Park sit on the slope by the station, with Wolmido on the shore to the west. Songdo lies to the south on reclaimed land with its Central Park and towers, and the Incheon Bridge (2009, about 21 km) crosses from Songdo to Yeongjong Island and the airport. Bupyeong and Guwol-dong are commercial districts. Ganghwa Island to the north-west has dolmens (World Heritage) and a Goryeo palace site; Muuido lies west of the airport island.",
    gettingAround:
      "Incheon International Airport (ICN) on Yeongjong Island is linked to Seoul Station by the AREX railway in about 45–55 minutes, and to Incheon's own centre by airport buses or rail with a change, about 1 hour. Seoul Metro Line 1 runs through to Incheon Station (about 1 hour from Seoul Station), and Incheon's Lines 1 and 2 cover the city and Songdo; the Suin-Bundang line reaches Suwon. Buses are frequent, the Chinatown area is walkable, and Ganghwa Island is about 1.5 hours by bus. The climate is temperate monsoon with humid rainy summers and cold dry winters.",
    culture:
      "Korean is universal, with Chinese in Chinatown. Chinatown is the birthplace of Korean-style jjajangmyeon noodles and has a museum devoted to them; the old buildings of the Open Port are now museums and cafés. The MacArthur statue in Jayu Park commemorates the landing. Songdo's towers and parks are K-drama locations. At the Yeonan wharf fish market you buy seafood and have it cooked on the spot. No tipping in Korea.",
    seeAndDo:
      "Chinatown and the Jjajangmyeon Museum; the Open Port historic quarter (the old Japanese banks, the Jemulpo Club); Jayu Park; Wolmido (amusement park, seafront walk, the Wolmi Sea Train); Songdo Central Park and the G-Tower lookout; the Incheon Bridge and the Yeongjong shore; the Yeonan wharf fish market; Ganghwa Island (dolmens, Jeondeungsa Temple, the Goryeo palace site); Muuido beaches; the Incheon Landing Operation Memorial Hall.",
    whenAndTips:
      "April–May and September–October are most comfortable; summers are humid and winters cold. An easy day trip from Seoul; long-haul transit passengers can overnight on Yeongjong Island or in Songdo near the airport. Ganghwa Island needs its own day.",
  },
  suwon: {
    // 零改动留痕（2026-09-10）：含登记外国人的总人口 2026-08 为 1,229,190，住民登录人口（不含外国人）2026-06 约 1,185,770；
    //   正文取总人口口径且已在注释点名区分，「约 123 万 / 超过 120 万」均成立。
    //   📌 特例市（특례시）现行名单已扩至 **5 座**（2022 年首批水原／龙仁／高阳／昌原 + **华城 2025-01-01 加入**）——
    //   正文只说水原「是一座特例市」、没有做穷举式断言，不构成错误；记在这里供下次涉及华城时参考。
    //   另注：昌原 2026-05 含外国人约 100.99 万，已逼近 100 万门槛，有跌出资格的风险。
    // identity sources: **韩国的官方人口口径**（2026-09-09 核）：**住民登录人口（주민등록인구，行政安全部 MOIS）** —— 韩国国民中的居住者 + 居住不明者 + 国内居所申报的在外国民，**不含外国人**，按月发布（月末数约在次月内更新），**这是本库统一采用的城市人口口径**；另有各地方政府自行合并 MOIS 数与法务部登记外国人数得到的「含外国人总人口」，**没有单一央级机构统一发布**，引用必须注明；统计厅（KOSTAT）的人口总调查每 5 年一次（尾数 0/5，最近 2025 年）与推计人口是另一套方法，**不能与住民登录人口混用**。行政层级：特别市 / 6 个广域市 / 特别自治市 与 道 / 特别自治道 同级（合称广域自治团体 17 个），其下市 / 郡 / 自治区为基础自治团体；「特例市」不是行政层级，是给人口 ≥100 万的市的扩权地位。**官方的「都会区」概念只存在于首都圈（수도권）**，地方城市没有对应的官方口径。
    //   **水原是这一批里唯一一个两套口径都在用的城市**：住民登录人口（不含外国人）2026-06 约 1,185,770（约 119 万）；含登记外国人的总人口 2026-08 为 1,229,190（约 123 万，外国人约 6%）。正文的「约 123 万 / 超过 120 万」对应后者、且是最新值，**本轮判定不改**；但如果日后要把全库韩国城市统一到住民登录口径，这一条要降到约 119 万。2 级 + 3 级，2026-09-09 核。**这两个数不是打架，是两个口径 —— 不能合并成一个数字。**
    identity:
      "Suwon is the seat of Gyeonggi Province about 30 km south of Seoul, with about 1.23 million people (2026). Hwaseong Fortress, built in 1794–1796 by King Jeongjo when he moved his father Crown Prince Sado's tomb here, is the masterpiece of late-Joseon fortification — 5.7 km of wall, four gates, the palace and the bastions survive — and was inscribed as a World Heritage site in 1997; the king's yearly procession from Seoul to Suwon is the model for the Hwaseong Cultural Festival. Samsung Electronics was founded in 1969 and has had its headquarters and production base in Suwon since 1973, with the head office and research campus in Yeongtong district. Suwon galbi (grilled beef ribs) is the local dish, and the Korean Folk Village lies in neighbouring Yongin.",
    // howItWorks sources: 三星电子：**1969 年创立、1973 年起水原为总部与生产基地、2016 年 3 月首尔支援部门并入水原**，是三件不同的事。原文 identity 写「1969 年创立于水原」、howItWorks 写「1973 年把总部迁来」，各取一件且都没说清是哪一件，并排读像打架。**核实方要求把 1973 改成 1969，未采纳** —— 1973 有韩国先驱报（2 级）支撑；「创立于水原」反而是更没把握的那半句。两段统一改成「创立年 + 总部年」的同一结构。2026-09-10 核。
    howItWorks:
      "Suwon is the seat of Gyeonggi Province with more than 1.2 million people, more than several metropolitan cities, yet because it lies within a province it is only a 'special case city' with less self-government than a metropolitan city; it has four autonomous districts and an elected mayor. Hwaseong Fortress, built by King Jeongjo in 1796 when he moved his father's tomb, rings the old town, and its walls and palace were inscribed as World Heritage in 1997, the construction record Hwaseong Seongyeok Uigwe so detailed that the fortress could be rebuilt from it after the war; Samsung Electronics, founded in 1969, has had its headquarters and production base here since 1973, with the research campus and head office in Yeongtong district to the east as the city's largest employer. Three Seoul Metro lines call at more than a dozen stations in the city, the KTX stops here, and Seoul lies about 30 km north; Suwon galbi and the Gwanggyo new town are its other two names. Newcomers most often go wrong by taking Suwon for a satellite of Seoul, when it is the seat of Gyeonggi Province with more people than most Seoul districts.",
    layout:
      "Hwaseong encloses the old town: Paldalmun in the south, Janganmun in the north, Hwahongmun over the Suwoncheon stream in the north-east and the Seojangdae command post on Paldalsan hill to the west; the Haenggung palace stands in the middle and Paldalmun market by the south gate. Suwon Station is about 2 km south-west of the walls, with the sports complex and World Cup stadium outside. The Samsung campus lies east in Yeongtong and the Gwanggyo new town north-east. The Korean Folk Village is about 15 km east in Yongin, with Everland further east.",
    gettingAround:
      "Suwon has no airport with scheduled flights; the nearest is Incheon International (about 40 km), with airport buses of about 1.5 hours. Seoul Metro Line 1 runs through to Suwon Station (about 1 hour from Seoul Station), KTX and regular trains also stop there, and express buses from Gangnam take about 1 hour. Buses are frequent — about 15 minutes from the station to the fortress — and inside the walls you walk or ride the Hwaseong tourist train. The climate is temperate monsoon with humid summers and cold winters.",
    culture:
      "Korean is universal. The whole wall can be walked (2–3 hours), with the city on both sides; the palace stages Jeongjo-era ceremonies and demonstrations of the 24 martial arts at weekends. The Hwaseong Cultural Festival in October re-enacts the royal procession. The streets around Paldalmun market are lined with Suwon galbi and fried-chicken restaurants. The Korean Folk Village stages traditional weddings and farmers' music. No tipping.",
    seeAndDo:
      "Walking the Hwaseong wall (Paldalmun → Seojangdae → Janganmun → Hwahongmun); the Haenggung palace; Hwahongmun and the Banghwasuryujeong pavilion at night; the Hwaseong Museum; Paldalmun market and the Tongdal-mun galbi street; the Hwaseong tourist train; the Korean Folk Village (Yongin); Gwanggyo Lake Park; the Hwaseong Cultural Festival in October.",
    whenAndTips:
      "April–May and September–October are most comfortable, with the festival in October; summers are humid. Half a day to a day for the fortress, half a day for the folk village. Most often a day trip from Seoul.",
  },
  daegu: {
    identity:
      "Daegu lies in a basin in south-eastern Korea, the country's fourth-largest city with about 2.35 million people (2026). Historically the textile city, it is also Korea's hottest city in summer, nicknamed 'Daefrica'; the Yangnyeongsi market founded around 1658 is the oldest herbal-medicine market in the country, and Seomun Market is among Korea's largest traditional markets. Donghwasa Temple (founded 493) and the Gatbawi stone Buddha on Palgongsan, the Apsan observatory and the mural street honouring the folk singer Kim Gwang-seok are the usual stops, and Daegu hosted the 2011 World Athletics Championships.",
    // howItWorks sources: Wikipedia (2026-09): Daegu (Metropolitan City; 2026-01 pop 2,351,461; Seomun/Yangnyeongsi; 3 metro lines)
    howItWorks:
      "Daegu is a 'Metropolitan City', ranking with the provinces and governed by an elected mayor, divided into seven autonomous districts and one county, each with its own head and council; with about 2.35 million people in 2026 it is Korea's fourth city. The centre lies around Dongseong-ro and Banwoldang, with the Yangnyeongsi medicine market and Seomun Market on its west side as the commercial heart of the old town; the city stretches south-east towards Suseong and Dongdaegu Station, with Palgongsan to the north. Three metro lines join the districts, the third a monorail. Addresses use road name and building number, and locals place things by landmarks — Dongseong-ro, Seomun Market, Suseong Lake. Daegu is the hottest city in Korea in summer, and 'Daefrica' is the locals' own joke. Newcomers most often go wrong by treating Daegu as a stop between Seoul and Busan, when it is the self-contained centre of the inland Yeongnam region.",
    layout:
      "The centre lies around Dongseong-ro and Jungang-ro (Banwoldang and Jungangno stations); Yangnyeongsi and the modern-history alleys (Gyesan Cathedral, Cheongna Hill) are on the west side of the centre with Seomun Market further west, and Kim Gwang-seok Street is by Bangcheon Market to the south-east. Dongdaegu Station (KTX) is in the east of the city and the airport in Dongchon to the north-east. Palgongsan rises about 20 km north of the city and Apsan to the south. Gyeongju lies about 60 km east.",
    gettingAround:
      "Daegu International Airport (TAE) is in the north-east of the city, about 15 minutes' walk from Ayanggyo station on Metro Line 1, with scheduled flights. KTX trains take about 1 hour 50 from Seoul and about 50 minutes from Busan to Dongdaegu. The city has three metro lines (Line 3 is a monorail), the centre works on foot and by metro, and Palgongsan is about 1 hour by bus. The climate is temperate monsoon with very hot summers (a record of 40°C) and cold dry winters.",
    culture:
      "Korean is universal. Yangnyeongsi has a medicine museum with foot baths and herbal teas; Gyesan Cathedral and the modern-history alleys tell the Catholic and modern story. The Seomun night market (weekends) is the place to eat, and Daegu has its 'ten tastes' (Dongin-dong braised ribs, napjak mandu flat dumplings and more). Donghwasa is a Buddhist temple — shoes off and quiet in the halls. Avoid the midday heat in summer. No tipping.",
    seeAndDo:
      "Seomun Market and its night market; Yangnyeongsi and the medicine museum; the modern-history alleys (Gyesan Cathedral, Cheongna Hill, the March First road); Kim Gwang-seok Street; the Dongseong-ro shopping district; Donghwasa and Gatbawi on Palgongsan (hike or cable car); the Apsan observatory (cable car, night view); the Daegu Arboretum; Suseong Lake; the Dongin-dong braised-rib street.",
    whenAndTips:
      "April–May and October–November are most comfortable, with Palgongsan's foliage in late October; summers are extreme. A day for the city, half a day to a day for Palgongsan. On the KTX line, easily linked with Gyeongju and Busan.",
  },
  gwangju: {
    identity:
      "Gwangju is the hub city of the Honam region in south-western Korea, with about 1.40 million people (2026); on 1 July 2026 Gwangju Metropolitan City and South Jeolla Province merged to form Jeonnam-Gwangju Special Metropolitan City. The Gwangju Democratic Uprising that began on 18 May 1980 is a landmark of modern Korean history, commemorated at the May 18th National Cemetery and the democracy square before the old provincial hall; the Asia Culture Center opened beside the old hall in 2015, and the Gwangju Biennale founded in 1995 is one of Asia's most important contemporary-art exhibitions. Mudeungsan National Park (1,187 m) east of the city, a UNESCO Global Geopark, is known for the columnar joints of Ipseokdae and Seoseokdae, and Gwangju is famous for kimchi and the generous tables of Jeolla cooking.",
    // howItWorks sources: Wikipedia (2026-09): Gwangju; Administrative divisions of South Korea (Jeonnam-Gwangju Special Metropolitan City 2026-07-01; 2026-02 pop 1,401,235)
    howItWorks:
      "On 1 July 2026 Gwangju merged with South Jeolla Province to form Jeonnam-Gwangju Special Metropolitan City, a new kind of provincial-level unit combining a metropolitan city and a province; the five autonomous districts of the former city keep their own heads and councils, and the urban area had about 1.4 million people in 2026. The centre lies around Geumnam-ro and Chungjang-ro, where the May 18 Democracy Square, the old provincial hall and the Asia Culture Center are the city's points of reference; Sangmu to the west is the new administrative and business district, and Mudeungsan to the east is the citizens' mountain. A single metro line joins Gwangju Songjeong Station to the centre, and the KTX reaches Seoul in about 1.5 hours. Addresses use road name and building number, and locals speak of 'the old provincial hall', 'Sangmu' and 'Chungjang-ro'. Newcomers most often go wrong by taking Gwangju for a provincial town of the Honam region, when it is the political, cultural and transport centre of the south-west.",
    layout:
      "The centre lies along Geumnam-ro and Chungjang-ro: the May 18 Democracy Square, the old provincial hall and the Asia Culture Center are at the eastern end of Geumnam-ro, Chungjang-ro is the pedestrian shopping street and Yangdong Market lies on the west side of the centre. The Gwangju stream runs through the city, and Sangmu to the west is the new civic centre. Mudeungsan rises east of the city, climbed from the Jeungsimsa or Wonhyosa trailheads; the May 18th National Cemetery is at Mangwol-dong to the north. Gwangju Songjeong Station (KTX) is in the west of the city and the airport in Gwangsan district to the west.",
    gettingAround:
      "Gwangju Airport (KWJ) on the west side of the city serves only Jeju and Seoul Gimpo, and is planned to hand over to Muan Airport (about 60 km) in the longer term. KTX trains from Seoul Yongsan reach Gwangju Songjeong in about 1.5 hours; a single metro line links Songjeong to the centre, and buses are frequent. The Jeungsimsa entrance to Mudeungsan is about 40 minutes by bus. The climate is temperate monsoon with humid summers and winters milder but snowier than Seoul's.",
    culture:
      "Korean is universal. The May 18 memorial sites are solemn places — keep quiet; the Asia Culture Center has exhibitions, performances and a library, mostly free. Gwangju's tables are known for their many side dishes (hanjeongsik), and the kimchi festival is held in autumn. Keep to the trails on Mudeungsan, where Ipseokdae is windy. The Biennale runs in autumn of even-numbered years. No tipping.",
    seeAndDo:
      "The Asia Culture Center, the May 18 Democracy Square and the old provincial hall; the May 18th National Cemetery; Yangdong Market; Chungjang-ro and the art street; Mudeungsan (Jeungsimsa – Ipseokdae – Seoseokdae); the Gwangju Museum of Art and the Biennale hall; the Yangnim-dong modern-history village; Kimchi Town; the Juknokwon bamboo garden and Soswaewon in Damyang (about 25 km north).",
    whenAndTips:
      "April–May and September–November are most comfortable, with Mudeungsan's foliage from late October to November; summers are humid. A day for the city, half a day to a day for Mudeungsan, half a day for Damyang. The hub of a Honam route (Jeonju, Mokpo, Yeosu).",
  },
  daejeon: {
    identity:
      "Daejeon lies in the Chungcheong region of central Korea, the country's fifth-largest city with about 1.44 million people (2026), and its science capital: the Daedeok research complex gathers more than twenty government institutes and KAIST, and the 1993 Daejeon Expo left the Expo park and bridge. The Daejeon Government Complex has housed ministries moved from Seoul since the 1980s. The city has the Yuseong hot springs and Korea's largest man-made arboretum, Hanbat, with Gyeryongsan National Park to the west; the Sungsimdang bakery is Daejeon's best-known 'landmark', and the city will host the 2027 Summer World University Games.",
    // howItWorks sources: Wikipedia (2026-09): Daejeon (Metropolitan City; 2026-02 pop 1,441,203; Daedeok; Government Complex; KTX 50 min)
    howItWorks:
      "Daejeon is a 'Metropolitan City', ranking with the provinces and governed by an elected mayor, divided into five autonomous districts, each with its own head and council; with about 1.44 million people in 2026 it is Korea's fifth city. Its weight is divided three ways: the old centre around Daejeon Station, the new centre at Dunsan — the Government Complex, city hall and Hanbat Arboretum — and the Daedeok research complex and KAIST to the north, whose twenty-odd government institutes let the city call itself the capital of science. One metro line strings Daejeon Station, Dunsan and Yuseong hot springs together; the KTX reaches Seoul in about 50 minutes, and Daejeon is the hub of the national rail network. Addresses use road name and building number, and locals speak of 'the old town', 'Dunsan' and 'Yuseong'. Newcomers most often go wrong by taking the station area for downtown, when the administrative and commercial centre has long since moved to Dunsan.",
    layout:
      "The city sits in a basin crossed by the Gapcheon and Daejeoncheon streams: the old centre lies around Daejeon Station (Sungsimdang, the central market), the new centre at Dunsan (the government complex, Hanbat Arboretum, the city art museum), the Expo park and the National Science Museum across the Gapcheon north of Dunsan, and the Daedeok complex and KAIST beyond; Yuseong hot springs lie in the west and Gyeryongsan about 15 km west of the city. Seodaejeon Station (Honam line) is in the south-west.",
    gettingAround:
      "Daejeon has no airport with scheduled flights; the nearest are Cheongju International (about 40 km, about 1 hour by bus) and Incheon International (about 3 hours by direct airport bus). KTX trains reach Daejeon in about 50 minutes from Seoul and about 1.5 hours from Busan — the hub of Korea's rail network. A single metro line links Daejeon Station, the centre and Yuseong, with frequent buses. Gyeryongsan is about 40 minutes by bus. The climate is temperate monsoon with humid summers and cold winters.",
    culture:
      "Korean is universal. Sungsimdang (founded 1956) has queues for its fried pineapple bread and the like and is the city's emblem. The Yuseong hot-spring street has a free foot-bath park; the National Science Museum and the Expo park suit families. Gyeryongsan has Donghaksa (a nuns' temple) and Gapsa — keep quiet in the halls. Bean-sprout soup rice and spicy braised chicken are local tastes. No tipping.",
    seeAndDo:
      "The Expo park, the Expo bridge and the National Science Museum; the Sungsimdang main shop; Hanbat Arboretum and the city art museum (Dunsan); the Yuseong foot bath and hot-spring baths; Gyeryongsan National Park (Donghaksa, Gapsa); the Daecheong Lake shore path; the Daejeon central market; the KAIST campus; a stroll through the old town near Daejeon Station.",
    whenAndTips:
      "April–May and September–October are most comfortable, with Gyeryongsan's foliage in late October; summers are humid. A day for the city, half a day to a day for Gyeryongsan. A midway stop on the Seoul–Busan high-speed line and an easy day trip from Seoul.",
  },
  tongyeong: {
    // identity sources: 统营市住民登录人口：官方人口页 2026 年 8 月末内国人 115,975（1 级，
    //   https://www.tongyeong.go.kr/00001/00030/00032.web，2026-09-08 核）；2026 年 7 月含外国籍合计 121,687。
    //   **含不含外国籍是两个口径**：合计数 12.2 万反而更接近原文写的 11.9 万，
    //   但那是巧合而不是「数字还对」—— 原文用的是 2024 年的内国人数，现在已降到 11.6 万。
    // identity sources: 2026-09-13 核（抽样 seed=8）：三道水军统制营 1593 年设于闲山岛，1592 年是闲山岛大捷之年 —— 韩国民族文化大百科辞典（韩国学中央研究院，级别 2）
    identity:
      "Tongyeong lies on Korea's south-east coast within Hallyeohaesang National Park, with a registered Korean-national population of about 116,000 (August 2026), or about 122,000 including registered foreign residents, and is called 'the Naples of Korea'. In 1593, during the Imjin War, Admiral Yi Sun-sin set up the naval headquarters of the three provinces on Hansan Island, from which the name Tongyeong derives (the city was formerly Chungmu, after the admiral's posthumous title); a replica turtle ship floats in the harbour and the Jeseungdang shrine stands on Hansan Island. The Mireuksan cable car looks over a sea scattered with hundreds of islands, the Dongpirang mural village and the night lights of Seopirang are popular, the composer Isang Yun and the novelist Park Kyung-ni were born here, and an international music festival is held each spring. Oysters are the local produce and Chungmu gimbap the local snack.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Tongyeong (city in South Gyeongsang; 236.5 km² over the Goseong peninsula, Hansando, Mireuk and Yokji islands, 41 inhabited and 110 uninhabited islands; ~119,000 2024; formerly Chungmu, merged with Tongyeong county 1995; name from Yi Sun-sin's Tongjeyeong naval command on Hansan Island; Yun Isang and Park Kyung-ni; ~6–7 million visitors; chungmu gimbap and kkulppang)
    howItWorks:
      "Tongyeong is a city on the south coast of South Gyeongsang covering about 237 km² across the Goseong peninsula and the islands of Hansan, Mireuk and Yokji, 41 of them inhabited and 110 not, with a registered Korean-national population of about 116,000 in August 2026. Its name comes from the Tongjeyeong, the naval command Yi Sun-sin set up on Hansan Island, and when the old Chungmu city merged with Tongyeong county in 1995 the present name was adopted — Chungmu was Yi's posthumous title, and chungmu gimbap still carries it. The town lies at Gangguan harbour between Mireuk island and the peninsula, the mural village of Dongpirang climbing the slope above the port, a cable car running to the top of Mireuksan and boats leaving for the islands of the Hallyeohaesang national park; the composer Yun Isang and the novelist Park Kyung-ni were born here, and a Yun Isang music festival is held each year. Oyster farming is the local industry, there is no railway and Busan lies about 100 km east. Newcomers most often go wrong by taking Tongyeong for a small harbour town, when it is a territory spread over more than a hundred islands, reached only by boat.",
    layout:
      "The town sits at the southern tip of the Tongyeong peninsula around Gangguan harbour: the central market, the turtle ship and the Dongpirang murals climb the slope east of the harbour and Seopirang lies to the west; Mireuk Island is joined to the town across the Tongyeong canal (by bridge and an undersea tunnel), with the cable-car station on the island and Daya Park at its southern end. Hansan Island lies about 6 km south-east of the harbour, about 25 minutes by boat; outer islands such as Somaemuldo and Yokjido are 1–2 hours away. Geoje Island lies east, joined by the Geoje bridge.",
    gettingAround:
      "Tongyeong has no airport with scheduled flights; the nearest are Sacheon (about 50 km, with very few flights) and Busan Gimhae (about 100 km). Intercity buses take about 1.5–2 hours from Busan and about 4 hours from Seoul and are the main way in; there is no railway. City buses reach the cable car and Daya Park, the harbour area is walkable, and ferries serve Hansan Island and Somaemuldo. The climate is temperate maritime, averaging about 14.7°C with mild winters.",
    culture:
      "Korean is universal. The Jeseungdang shrine on Hansan Island is a memorial to Admiral Yi — keep quiet. The Dongpirang mural village is a residential neighbourhood — no noise, no entering courtyards. Oyster season is winter (November–March), with raw oysters and Chungmu gimbap in the central market and honey bread (kkulppang) as the souvenir. The international music festival is in March–April. The cable car stops in high wind. No tipping.",
    seeAndDo:
      "The Mireuksan cable car and summit lookout; the Dongpirang murals and the night lights of Seopirang; Gangguan harbour, the turtle ship and the central market; the Jeseungdang shrine on Hansan Island (25-minute ferry); Somaemuldo and its lighthouse islet (joined on foot at low tide); sunset at Daya Park; the Tongyeong canal and undersea tunnel; the Isang Yun memorial hall; the Sebyeonggwan hall of the old naval headquarters; the DPIRANG night-light park.",
    whenAndTips:
      "March–May and September–November are most comfortable, winter is oyster season, and summer is the island peak. A day for the town, a day for the outer islands. Linked with Geoje Island and Busan on a south-coast route.",
  },
};
