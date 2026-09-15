import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Croatia ============
  "croatia-overview": {
    // identity sources: DZS《STAN-2026-3-1 Procjena stanovništva Republike Hrvatske u 2025》：2025 年年中估计 3,874,993 人。https://podaci.dzs.hr/2026/hr/121477
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Croatia sits in south-central Europe on the eastern Adriatic coast, covering about 56,600 km² with an estimated mid-2025 population of about 3.875 million (Croatian Bureau of Statistics). Its capital is Zagreb, the official language is Croatian, and it has used the euro and been part of the Schengen Area since 2023.",
    layout:
      "The country divides broadly into three regions: the Pannonian lowland (Zagreb and Slavonia, inland plains and hills), the Dinaric mountain belt (an inland mountainous zone), and the Adriatic coast (Istria, the Kvarner Gulf, and Dalmatia, with a long, indented coastline and 1,244 islands).",
    gettingAround:
      "Domestic flights connect Zagreb with major coastal cities. The coast has hot, dry summers and mild winters, while the interior has a distinct continental climate. Long-distance buses are extensive, and ferries and catamarans link the Dalmatian coastal towns to the islands. As a Schengen and eurozone member, entry and currency use follow the same rules as other Schengen countries.",
    culture:
      "The official language is Croatian, and most residents are Catholic. Modest dress is expected in churches; swimwear is fine on beaches but should be changed before leaving the beach area. Restaurant tips are typically around 10% of the bill, or simply rounding up.",
    seeAndDo:
      "The travertine lakes and waterfalls of Plitvice Lakes National Park; Dubrovnik's Old Town walls; Diocletian's Palace in Split; Zagreb's Upper Town; and the Dalmatian coastal islands (Hvar, Brač, Kornati).",
    whenAndTips:
      "May to September is peak season on the coast, with July and August the hottest and most crowded; May, June, and September offer pleasant weather and lower prices. Inland Zagreb suits any season and has a Christmas market in winter. Travel between the coast and interior can take a while, so plan enough days.",
  },
  zagreb: {
    // 零改动留痕（2026-09-10）：ZAG（萨格勒布机场）代码现行有效；注册表只写描述性名称，官方冠名从略（2026-09-11）；history 段止于中世纪格拉德茨与卡普托尔
    //   两座山丘小镇，未涉 1990 年代及以后议题。✅ 零争议红线通过。
    // identity sources: 人口：DZS 年中估计 777,744（2025 年年中，STAN-2026-3-1，2026-09-04 发布，1 级）。萨格勒布因「市 = 县」地位在该序列里单列，所以它**有**年度更新数，不同于其他克罗地亚城市。2026-09-10 核。
    identity:
      "Zagreb is Croatia's capital and largest city, with a mid-2025 population of about 778,000 (DZS), and the country's political, economic, and cultural center. The city's history traces back to the medieval hill towns of Gradec and Kaptol.",
    // howItWorks sources: 人口：DZS 年中估计 777,744（2025 年年中，STAN-2026-3-1，2026-09-04 发布，1 级）；占全国 20.1%。原文「都会区约 110 万」核不到发布方——DZS 不发布这一档，已撤下（Eurostat FUA 一类有具名发布方的口径不禁用，但要写明是谁发的、哪一年）。2026-09-10 核。
    howItWorks:
      "Zagreb is both the capital of Croatia and an administrative unit ranking with the counties, a different government from the Zagreb County around it; it is governed by an elected mayor and city assembly and divided into seventeen city districts, each with an elected council, and beneath them 218 local committees. The city covers about 641 km² and takes in some seventy settlements including Sesvete, with about 778,000 people in mid-2025 (DZS), about a fifth of Croatia; DZS publishes no metropolitan-area tier of its own, so anything wider has to be counted by county. The city lies in three tiers from north to south: the Upper Town on the slope is the old town formed from the two medieval towns of Gradec and Kaptol, the Lower Town is the nineteenth-century grid with Ban Jelačić Square as its point of reference and the green horseshoe of parks running through it, and Novi Zagreb across the Sava is the housing district built after the war. Medvednica to the north is the citizens' mountain. ZET trams are the backbone of the city's transport, and there is no metro; a funicular joins the two towns, and the Dolac market lies in the centre. Addresses give street, number and five-digit postcode beginning with 10000. Newcomers most often go wrong by taking the Upper and Lower Towns for the whole city, when hundreds of thousands live south of the Sava.",
    layout:
      "The city has an Upper Town (the historic old town, home to St. Mark's Church and the government buildings) and a Lower Town (a grid of 19th-century streets centered on Ban Jelačić Square and numerous museums), linked by the traditional Dolac Market.",
    gettingAround:
      "Zagreb Airport is about 17 km from the city center. An extensive tram network is the main way to get around day to day, while the old town is walkable.",
    culture:
      "The official language is Croatian. Modest dress is expected when visiting St. Mark's Church and other religious sites. Restaurant tips are typically around 10% of the bill. Zagreb has a faster pace of life than the coastal cities, with a strong outdoor café culture.",
    seeAndDo:
      "St. Mark's Church (its colorful tiled roof forms the coats of arms of Croatia and Zagreb); the Stone Gate and Lotrščak Tower in the Upper Town; Dolac open-air market; the Museum of Broken Relationships; and the Zagreb Christmas Market each year from November to January.",
    whenAndTips:
      "April to June and September to October are the best seasons to visit Zagreb. December's Christmas market draws more visitors but has a festive atmosphere. As an inland city, Zagreb is worth visiting year-round, independent of the coastal tourist season.",
  },
  split: {
    // 零改动留痕（2026-09-10）：SPU 机场代码现行有效；戴克里先宫 1979 年列入 UNESCO 属实；
    //   history 段止于古罗马—威尼斯—哈布斯堡，未涉现代议题。✅ 零争议红线通过。
    // identity sources: 人口：2021 年普查（DZS）。DZS 另有逐市镇年度估计 SP31_2（2001–2024），本轮工具取不到交互式表的具体值——**不进 stale-exempt**（那张表确实存在，属该刷新而非该免检），下一轮直接查 SP31_2。下次普查预计 2031 年。2026-09-10 核。
    identity:
      "Split is the largest city in Dalmatia, with a population of about 161,000 in the 2021 census, famous as the site where the Roman emperor Diocletian built his retirement palace, which over nearly 1,700 years evolved into the core of today's old town.",
    // howItWorks sources: ⚠️ 「约 31 万」原本挂在索林 + 卡什泰拉两个市镇上，实际那是斯普利特连同周边十余个市镇的**加总**（2021 年普查 307,289，含斯普利特本身 16.1 万）。索林 24,912 + 卡什泰拉 37,951 ≈ 6.3 万。DZS 不发布「都会区」档，故写成「加总」而不是造一个口径。2026-09-10 核。
    howItWorks:
      "Split is Croatia's second city and the seat of Split-Dalmatia County; the municipality covers about 79 km² with about 161,000 people in 2021, governed by an elected mayor and council and divided into 27 districts (kotari). The city grew out of Diocletian's Palace: the Roman emperor's palace of the fourth century is itself the old town, people still live within its walls, it was inscribed as World Heritage in 1979, and the Riva promenade runs outside its southern wall; the Marjan peninsula is the forested hill to the west, and Bačvice the beach in the centre. The port is among the largest passenger ports on the Adriatic, with ferries to Hvar, Brač, Vis and Italy. Solin, the ancient Salona, and Kaštela are the two municipalities that run continuously into the city, about 63,000 between them in the 2021 census; adding Split to the dozen or so municipalities around it comes to roughly 307,000 (a 2021 census sum — DZS publishes no metropolitan-area tier of its own). The airport lies in Kaštela about 24 km away. Promet buses carry the traffic, and there is no rail transit. Hajduk and the Poljud stadium are the city's identity, and klapa singing the voice of Dalmatia. Addresses give street, number and five-digit postcode beginning with 21000. Newcomers most often go wrong by taking Diocletian's Palace for a ruin, when it is an old town in which people live.",
    layout:
      "The old town sits entirely within the site of Diocletian's Palace; the palace cellars, the Cathedral of St. Domnius (originally Diocletian's mausoleum), and the street layout still follow the Roman-era plan. The Riva waterfront promenade links the old town with the harbor for everyday leisure.",
    // gettingAround sources: 随机抽样审计（seed=2）抽中。2026-09-13 核。
    gettingAround:
      "Split Airport is about 19 km from the city center. The old town is walkable, and ferries and catamarans to the Dalmatian islands (Hvar, Brač, Kornati) depart from Split's harbor.",
    culture:
      "The official language is Croatian. Modest dress is expected when visiting the Cathedral of St. Domnius and other religious sites. Restaurant tips are typically around 10% of the bill. The old town gets crowded in summer, so keep an eye on valuables.",
    seeAndDo:
      "The cellars of Diocletian's Palace along with the Silver and Golden Gates; the Cathedral of St. Domnius; the Riva waterfront promenade; Marjan Hill for panoramic views of the city and bay; and Split as the gateway to Dalmatian islands such as Hvar and Brač.",
    whenAndTips:
      "May to June and September bring mild weather and relatively fewer visitors; July and August are peak seaside season with higher temperatures. Split is the main transport hub for exploring the Dalmatian islands, so it works well as a base for a multi-day island itinerary.",
  },
  dubrovnik: {
    identity:
      "Dubrovnik is a historic walled city on the southern Dalmatian coast, with a population of about 40,000. In the Middle Ages it was the independent Republic of Ragusa, which used maritime trade and diplomacy to maintain autonomy amid powerful neighbors; its Old Town was inscribed on the World Heritage List in 1979.",
    // howItWorks sources: Wikipedia (2026-09): Dubrovnik (~143 km²; 41,562 2021; Dubrovnik-Neretva seat; Neum corridor, Pelješac Bridge 2022; Old Town UNESCO 1979 ~1,500 residents; Lapad/Gruž; Ragusa until 1808; Srđ cable car; cruise cap ~4,000/day; Čilipi 20 km)
    howItWorks:
      "Dubrovnik is the seat of Dubrovnik-Neretva County, a municipality of about 143 km² with about 42,000 people in 2021, governed by an elected mayor and council. It is separated from the rest of Croatia by a stretch of coast belonging to Bosnia and Herzegovina at Neum, and since the Pelješac Bridge opened in 2022 the road no longer needs to cross the border. The Dubrovnik people picture is the walled Old Town — the Republic of Ragusa until 1808, inscribed as World Heritage in 1979 — but only about 1,500 residents remain within the walls; the citizens live in Lapad and Gruž to the west, Gruž holding the port and the bus station, and Babin Kuk is the hotel district. The cable car climbs Mount Srđ from behind the old town, and Lokrum lies offshore. To manage the crowds, cruise visitors are limited to about 4,000 a day. Čilipi airport lies about 20 km south, there is no railway, and buses and cars carry the traffic. Addresses give street, number and five-digit postcode beginning with 20000. Newcomers most often go wrong by taking the Old Town for the whole city, when daily life goes on outside the walls in Lapad and Gruž.",
    layout:
      "The Old Town sits entirely within a ring of medieval walls nearly 2 km long. The main street, Stradun, runs east–west through the town, with stepped side lanes climbing toward the walls on either side. The Old Port on the town's east side was historically the Republic of Ragusa's trading gateway.",
    gettingAround:
      "Dubrovnik Airport is about 20 km from the city center. Motor vehicles are banned inside the Old Town, so walking is the only way to get around; a full lap of the city walls takes about two hours.",
    culture:
      "The official language is Croatian. Sun on the city walls is intense at midday, so bring sun protection and water. Restaurant tips in the Old Town are typically 10–15% of the bill. In peak season, it's best to walk the walls before the morning rush of cruise-ship groups.",
    seeAndDo:
      "The medieval walls encircling the Old Town (with views over red-tiled roofs and the Adriatic); Stradun; the Sponza Palace and Franciscan Monastery; Lokrum Island (a day-trip island just offshore); and the Srđ cable car for panoramic views.",
    whenAndTips:
      "May to June and September to October bring pleasant weather with relatively fewer visitors; July and August are hot and heavily visited by cruise passengers. The city walls have no shade, so avoid midday and bring plenty of water.",
  },
  rijeka: {
    // 零改动留痕（2026-09-10）：RJK 机场代码现行有效。history 段的「1924–1945 年费乌梅／苏沙克分界」是两次大战之间的
    //   行政边界事实（费乌梅自由邦），早于 1990 年代那条线，✅ 零争议红线通过、不改。
    // identity sources: 人口：2021 年普查（DZS）。DZS 另有逐市镇年度估计 SP31_2（2001–2024），本轮工具取不到交互式表的具体值——**不进 stale-exempt**（那张表确实存在，属该刷新而非该免检），下一轮直接查 SP31_2。下次普查预计 2031 年。2026-09-10 核。
    identity:
      "Rijeka is Croatia's largest seaport and third-largest city, with a population of about 108,000 in the 2021 census. It has been an important port linking Central Europe to the Mediterranean since Austro-Hungarian times, and remains a city with a deep industrial and maritime tradition.",
    // howItWorks sources: Wikipedia (2026-09): Rijeka (43.4 km²; 107,964 2021; Primorje-Gorski Kotar seat; largest port; Korzo; Trsat; Rječina Fiume/Sušak 1924–45; Opatija 15 km; ECoC 2020; torpedo 1874; University of Rijeka)
    howItWorks:
      "Rijeka is Croatia's third city and its largest port, the seat of Primorje-Gorski Kotar County; the municipality covers about 43 km² with about 108,000 people in 2021, governed by an elected mayor and council. The city spreads in a narrow band along the foot of the hills on Kvarner Bay: the Korzo pedestrian street is the centre, Trsat Castle looks down from the hill, and the Rječina river separates the old town from Sušak to the east — between 1924 and 1945 that river was the boundary between two cities. Under Austria-Hungary it was the empire's main port, the tenth-busiest in Europe by 1913; Whitehead built the first torpedo here in 1874, and Europe's first industrial oil refinery opened here in 1882. In 2020 it was European Capital of Culture, and the University of Rijeka is in the city. The Opatija riviera 15 km west is another municipality, and the airport on the island of Krk lies about 30 km away. Autotrolej buses carry the traffic, and there is no rail transit. Addresses give street, number and five-digit postcode beginning with 51000. Newcomers most often go wrong by taking Rijeka for a pier to the islands, when it is a port city with an industrial history and a university of its own.",
    layout:
      "The city stretches along the Kvarner Gulf coastline, with the port area tightly linked to the city center. Trsat Castle stands on a hill north of the mouth of the Rječina River, overlooking the whole city and harbor.",
    gettingAround:
      "Rijeka Airport is on the island of Krk, about 30 km from the city center, reached by road via the Krk Bridge. The city has a good bus network and serves as a gateway to the Kvarner Gulf coast and islands.",
    culture:
      "The official language is Croatian. Rijeka is an industrial port city with fewer tourists, giving it a more local feel than the coastal resort towns. Restaurant tips are typically around 10% of the bill.",
    seeAndDo:
      "Trsat Castle and its pilgrimage church; Korzo pedestrian street; the port-side architecture of the city center; and Rijeka as a gateway to Učka Nature Park and the Kvarner islands (Cres, Krk).",
    whenAndTips:
      "May to September brings pleasant weather. Rijeka sees fewer visitors than the Dalmatian coastal cities, making it a good fit for travelers who enjoy a local atmosphere. As the Kvarner Gulf's gateway, it's an ideal starting point for visiting Učka and the islands.",
  },
  zadar: {
    // 零改动留痕（2026-09-10）：ZAD 机场代码现行有效；history 段止于古罗马至威尼斯时期。✅ 零争议红线通过。
    // identity sources: 人口：2021 年普查（DZS）。DZS 另有逐市镇年度估计 SP31_2（2001–2024），本轮工具取不到交互式表的具体值——**不进 stale-exempt**（那张表确实存在，属该刷新而非该免检），下一轮直接查 SP31_2。下次普查预计 2031 年。2026-09-10 核。
    identity:
      "Zadar is a historic town in northern Dalmatia with a population of about 71,000 in the 2021 census, its history dating back to Roman times; it holds some of Croatia's richest Roman remains.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Zadar (Croatia; the seat of Zadar County and the fifth-largest city in the country, with 70,779 residents in the 2021 census; the oldest continuously inhabited city in Croatia, beginning as the Liburnian settlement Iader in the 9th century BC, a Roman municipality in 59 BC and a Roman colony in 48 BC, held in turn by Byzantine, Venetian, Hungarian and Austrian rule; the 9th-century Church of St Donatus, the cathedral and the Roman forum; the Sea Organ and the Monument to the Sun installed in the 2000s; the fortified city inscribed by UNESCO in 2017 as part of the Venetian defensive works; a ferry port for the Zadar archipelago; Zadar Airport)
    howItWorks:
      "Zadar is the seat of Zadar County in Croatia and the fifth-largest city in the country with 70,779 residents in the 2021 census; Croatian local government has two levels, county and municipality, the city run by an elected mayor and council while the county handles regional matters. It is the longest continuously inhabited city in Croatia: the Liburnians founded a settlement called Iader here in the ninth century BC, it became a Roman municipality in 59 BC and a colony in 48 BC, and was held in turn under Byzantine, Venetian, Hungarian and Habsburg rule. The old town stands on a peninsula reaching into the sea, its streets still following the Roman grid, with the remains of the Roman forum on its square; the ninth-century Church of St Donatus is a chief example of early Dalmatian church building, the cathedral beside it. In 2017 the city's fortifications were inscribed as World Heritage among the Venetian defensive works. The Sea Organ and the Monument to the Sun on the waterfront were added in the 2000s, the first sounding pipes driven by the waves. Ferries run from here to the Zadar archipelago, and the university founded in 1396 is the oldest in Croatia. Newcomers most often go wrong by taking the old town for a few minutes' walk, when two thousand years from Rome to Venice are layered on that peninsula.",
    layout:
      "The old town sits on a narrow peninsula, with the Roman Forum ruins and the Church of St. Donatus at its core. At the tip of the waterfront promenade stand the contemporary landmarks the Sea Organ and Sun Salutation.",
    gettingAround:
      "Zadar Airport is about 8 km from the city center. The old town is walkable, and boats and buses to Kornati National Park and Lake Vrana depart from Zadar.",
    culture:
      "The official language is Croatian. Modest dress is expected when visiting the Church of St. Donatus and other religious sites. The Sea Organ draws crowds at sunset, so arrive early to find a spot. Restaurant tips are typically around 10% of the bill.",
    seeAndDo:
      "The Sea Organ (an art installation that makes sound from the waves); Sun Salutation (a circular light installation illuminated at night); the Church of St. Donatus and Roman Forum ruins; the Cathedral of St. Anastasia; and Zadar as the gateway to Kornati National Park and Lake Vrana.",
    whenAndTips:
      "May to September brings pleasant weather, with sunset the best time to experience the Sea Organ and Sun Salutation together. Zadar is the main gateway city for visiting Kornati National Park.",
  },
  pula: {
    // 零改动留痕（2026-09-10）：PUY 机场代码现行有效；history 段止于古罗马—威尼斯共和国—奥匈帝国。✅ 零争议红线通过。
    // identity sources: 人口：2021 年普查（DZS）。DZS 另有逐市镇年度估计 SP31_2（2001–2024），本轮工具取不到交互式表的具体值——**不进 stale-exempt**（那张表确实存在，属该刷新而非该免检），下一轮直接查 SP31_2。下次普查预计 2031 年。2026-09-10 核。
    identity:
      "Pula is the largest city on the Istrian peninsula, with a population of about 52,000 in the 2021 census, famous for its well-preserved Roman amphitheater; it was successively ruled by Rome, the Republic of Venice, and Austria-Hungary.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Pula (Croatia; the largest city in Istria County and the seventh-largest in the country with 52,220 residents in 2021, though it was the administrative centre of Istria from Roman times until superseded by Pazin in 1991; the Pula Arena, one of the best preserved Roman amphitheatres and among the six largest surviving, still used for concerts and a film festival; the Temple of Augustus and the 1st-century Arch of the Sergii; under Austro-Hungarian rule the natural harbour became Austria's main naval base and a major shipbuilding centre from 1856; James Joyce taught English here from 30 October 1904 to March 1905; Brijuni National Park nearby; Pula Airport)
    howItWorks:
      "Pula is the largest city of Istria County in Croatia and the seventh-largest in the country with 52,220 residents in 2021; Croatian local government has two levels, county and municipality, the city run by an elected mayor and council. One relation is easily mistaken here: Pula was the administrative centre of the Istrian peninsula from Roman times, but after 1991 the county seat moved inland to Pazin, so it is the largest city rather than the capital. The amphitheatre in town is among the best preserved Roman arenas and among the six largest surviving, with all four side towers intact, and is still used for concerts and a film festival; the Temple of Augustus and the first-century Arch of the Sergii stand in the old town as well. Its modern shape came from the navy: from 1856 the Austro-Hungarian Empire built this natural harbour into its main naval base and a major shipbuilding centre, the city grew accordingly, and the Uljanik yard works to this day. James Joyce taught English here from October 1904 to the following March. Brijuni National Park lies offshore to the north-west and the airport east of town. Newcomers most often go wrong by assuming Pula is Istria's capital, when the county government sits at Pazin.",
    layout:
      "The old town centers on the Roman Arena, with the Forum and a Roman triumphal arch scattered through its compact old-town streets. The harbor lies southeast of the old town, historically Istria's traditional naval and shipbuilding center.",
    gettingAround:
      "Pula Airport is about 6 km from the city center. The old town is walkable; reaching Rovinj, Poreč, and other towns on Istria's west coast requires a car or local bus.",
    culture:
      "The official language is Croatian (Italian is also widely used in Istria and shares official status regionally). Restaurant tips are typically around 10% of the bill. Pula Arena often hosts open-air film festivals and concerts in summer, so check for events that may affect a visit before buying tickets.",
    seeAndDo:
      "Pula Arena (a Roman amphitheater with all four walls intact, seating 23,000); the Temple of Augustus and the Forum; the Golden Gate (a Roman triumphal arch); and Pula as the gateway to the red-soil coastal towns of Rovinj and Poreč.",
    whenAndTips:
      "May to September brings pleasant weather; summer often brings lively music-festival events at the Arena, so book tickets in advance. Pula is an ideal base for exploring the red-soil coastal towns of Istria.",
  },
  osijek: {
    // 零改动留痕（2026-09-10）：OSI 机场代码现行有效；history 段止于奥斯曼—哈布斯堡治理，未涉 1990 年代及以后议题。
    //   ✅ 零争议红线通过——这一条本轮专门查过，因为斯拉沃尼亚是红线最敏感的一带。
    // identity sources: 人口：2021 年普查（DZS）。DZS 另有逐市镇年度估计 SP31_2（2001–2024），本轮工具取不到交互式表的具体值——**不进 stale-exempt**（那张表确实存在，属该刷新而非该免检），下一轮直接查 SP31_2。下次普查预计 2031 年。2026-09-10 核。
    identity:
      "Osijek is the largest city in the Slavonia region and Croatia's fourth-largest city, with a population of about 96,000 in the 2021 census. The Drava River runs through it, and it was successively ruled by the Ottoman Empire and the Habsburg monarchy.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Osijek (Croatia; the fourth-largest city in the country and the seat of Osijek-Baranja County, the largest city in Slavonia, with 96,313 residents in 2021; on the Drava about 25 km upstream from its confluence with the Danube; the Roman settlement of Mursa, an important military colony, later under Ottoman control for over 150 years until Habsburg forces took it in 1687; the Tvrđa, an 18th-century Baroque fortress quarter; the neo-Gothic co-cathedral whose 90 m tower is the second-highest church tower in Croatia; agriculture and food industry, with Saponia, the Osječko brewery and Kandit; Kopački rit nature park; a tram system running since 1884, the only one in Croatia outside Zagreb; Osijek Airport and the university)
    howItWorks:
      "Osijek is the fourth-largest city in Croatia, the seat of Osijek-Baranja County and the largest city of Slavonia, with 96,313 residents in 2021; Croatian local government has two levels, county and municipality, the city run by an elected mayor and council. It stands on the Drava about 25 km upstream from where that river joins the Danube, surrounded by the Pannonian plain — the granary of Croatia, which is why the local economy rests on farming and food, the Saponia detergent works, the Osječko brewery and the Kandit confectionery among its old firms. In Roman times this was the military colony of Mursa; the Ottomans then held it for more than a century and a half until Habsburg forces took it in 1687 and built the Tvrđa, a bastioned quarter along the river in the eighteenth century, whose Baroque barracks and squares survive whole as the most recognisable part of the city. The neo-Gothic co-cathedral's tower rises 90 m, the second-highest church tower in Croatia. The tramway that opened in 1884 is the only one still running in Croatia outside Zagreb. Kopački rit nature park lies north-east in the wetlands between the rivers. Newcomers most often go wrong by assuming Croatia is all coast, when this city is a long way from the sea.",
    layout:
      "The old Tvrđa fortress district preserves an 18th-century Habsburg-era Baroque quarter within a star-shaped fortification outline. The city center stretches along the Drava's north bank, with a riverside promenade for everyday leisure.",
    gettingAround:
      "Osijek Airport is about 20 km from the city center, with a good city tram network. Osijek is the main gateway to Kopački Rit wetland park, a drive of just over ten kilometers away.",
    culture:
      "The official language is Croatian. Modest dress is expected at religious sites. Restaurant tips are typically around 10% of the bill. Osijek sees far fewer visitors than the coast, making it a representative city for experiencing inland Slavonian life and cuisine (known for grilled sausages and paprika-seasoned dishes).",
    seeAndDo:
      "The Tvrđa fortress old town; the Co-Cathedral of Sts. Peter and Paul (locally called the 'Green Church,' its Gothic Revival spire a city landmark); the Drava riverside promenade; and Osijek as the gateway to birdwatching at Kopački Rit wetland park.",
    whenAndTips:
      "May to September brings pleasant weather, with spring and autumn best for birdwatching at Kopački Rit. Osijek has a typical continental climate — cold winters and hot summers.",
  },
  "hvar-town": {
    identity:
      "Hvar Town is the main town on Hvar Island, a well-known gateway to one of Croatia's premier resort islands; it was historically an important Republic of Venice stronghold in the Adriatic.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Hvar Town (Croatia; the town on the island of Hvar in Split-Dalmatia County; the island is about 68 km long with 10,678 residents in 2021; the island markets itself as the sunniest spot in Europe with over 2,715 hours of sunshine in an average year; a fertile coastal plain, fresh water springs, pine-covered hillsides, vineyards, olive groves, orchards and lavender fields; the Greeks founded the colony of Pharos in 384 BC, and in medieval times the town of Hvar became a major naval base within the Venetian empire; churches on the island hold paintings by Venetian artists including Tintoretto, Veronese and Bellini; lavender oil and Plavac Mali wine; the Stari Grad Plain on the same island inscribed by UNESCO in 2008; ferries and catamarans from Split)
    howItWorks:
      "Hvar Town stands on the island of Hvar in Split-Dalmatia County, Croatia; the island runs about 68 km with 10,678 residents in 2021 and is divided among several municipalities, this town governed by an elected mayor and council while the county handles regional matters. Its standing came from the sea: in the Middle Ages it was a major naval base of the Venetian empire on the eastern Adriatic where fleets wintered and resupplied, which is why this small town holds buildings out of proportion to its size — its square is among the largest urban squares in Dalmatia, the town theatre completed in 1612 is among the earliest public theatres in Europe, and churches on the island keep works by Venetian painters including Tintoretto, Veronese and Bellini. The Greeks founded the colony of Pharos on the island in 384 BC and the division of its fields can still be read, for which the Stari Grad Plain was inscribed as World Heritage in 2008. The island's other living comes from sunlight: more than 2,715 hours a year, with lavender and vines on the slopes and Plavac Mali as the local red grape. Ferries and catamarans run from Split. Newcomers most often go wrong by taking Hvar Town for the island of Hvar, when the island is nearly seventy kilometres long and the old town of Stari Grad and its farmland lie at the other end.",
    layout:
      "The old town surrounds St. Stephen's Square, one of the largest squares in Dalmatia, with St. Stephen's Cathedral at one end and the harbor at the other. Fortica fortress on the hill behind town overlooks both the town and the Pakleni Islands offshore.",
    gettingAround:
      "Hvar Island has no airport with scheduled flights; visitors arrive via ferry or catamaran from Split or Dubrovnik airports through the harbor, with the Split–Hvar Town catamaran crossing taking about an hour. The town itself is walkable.",
    culture:
      "The official language is Croatian. Modest dress is expected when visiting St. Stephen's Cathedral. Hvar is a well-known resort and nightlife island, with dense crowds of visitors and yachts in summer and higher dining prices than inland cities. Restaurant tips are typically around 10% of the bill.",
    seeAndDo:
      "Fortica fortress for panoramic views; St. Stephen's Square and Cathedral; the Stari Grad Plain (an ancient Greek agricultural site and World Heritage listing); day trips to the Pakleni Islands; and summer lavender fields near the inland village of Velo Grablje.",
    whenAndTips:
      "June to September is Hvar's peak season, with July and August the busiest for yachts and visitors. Lavender typically blooms from mid-to-late June through July, the best time to photograph the fields. The island depends on ferries, so book tickets ahead, especially on peak-season weekends.",
  },
};
