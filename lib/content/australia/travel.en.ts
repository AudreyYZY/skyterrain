import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "australia-overview": {
    // identity sources: 澳大利亚统计局 ABS《National, state and territory population, September 2025》：2025-09-30 估计常住人口 27,724,744 人。https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/sep-2025
    //   原文写的是「人口只有约2700万」——没有年份，也没说是 ERP 口径。核实日 2026-09-07，来源级别 1
    identity:
      "Australia is almost the size of the whole of Europe with a population of only about 27.7 million (estimated resident population, September 2025, Australian Bureau of Statistics), most of whom live in a handful of cities on the east and south-west coasts; the vast interior is nearly empty. It is its own continent, and much of its wildlife and plant life is found nowhere else. As a Southern Hemisphere country its seasons are reversed — December to February is summer, June to August is winter.",
    layout:
      "Australia divides roughly into four parts: the eastern city belt (Sydney, Melbourne, Brisbane — the demographic and economic core); the arid interior (red desert, Uluru, a scatter of mining and pastoral outposts); the west (the single big city of Perth plus large mining regions); and the island state of Tasmania across the strait. The capital, Canberra, is a mid-sized planned city inland — not the largest city.",
    gettingAround:
      "Distances between cities are huge and interstate travel is essentially by plane (Sydney to Perth is about 5 hours, with a 2–3 hour time difference). Big cities have trains, trams, buses and ferries, paid with a transit card or contactless bank card, but public transport is less dense than in East Asia and a car is easier in many places; Australians drive on the left. Climate-wise: the north (Cairns, Darwin) is hot and humid year-round with a dry and a wet season; the south (Sydney, Melbourne, Adelaide) has four distinct seasons, hot summers and cool winters; the interior has large day–night temperature swings. UV is strong everywhere — sun protection is a given. Food is very multicultural, coffee culture is strong, and tap water is safe to drink.",
    culture:
      "Australia is a country of immigrants; the official language is English, with local accent and slang (afternoon becomes \"arvo\"). Life is relatively relaxed, with a strong focus on the outdoors and the weekend, and shops and many attractions close early or don't open on Sundays and public holidays. Aboriginal peoples are the continent's first inhabitants, with tens of thousands of years of continuous culture; many natural sacred sites and place names are Aboriginal, and visitors follow local guidance. Tipping in restaurants and taxis is not obligatory.",
    seeAndDo:
      "The coastline is Australia's best feature: Sydney Harbour and its beaches, Victoria's Great Ocean Road, the Great Barrier Reef in Queensland, the coral coast of Western Australia. The red desert interior and Uluru are a different kind of experience entirely. The cities each have their own character — Sydney outgoing, Melbourne arty, Brisbane easy-going, Perth isolated. Kangaroos, koalas, dolphins and whales can be seen close up in many places.",
    whenAndTips:
      "The southern cities are most comfortable in spring and autumn (September–November, March–May); the north is best avoided in the November–April wet season and heat, with May–October the dry season. Border controls on food, wood products and plant and animal material are strict — declare everything, and declare if unsure. Citizens of most countries need to apply online for an electronic visa or an Electronic Travel Authority (ETA) before departure; you cannot get one on arrival. Carry plenty of sun protection and water, and for interior driving check road conditions and carry extra fuel and drinking water in advance.",
  },

  sydney: {
    // identity sources: 澳大利亚统计局（ABS）《Regional population》**年度**发布，覆盖截至当年 6 月 30 日的估计常住人口（ERP），
    //   通常在**次年 3 月下旬**公布（2024–25 财年数据于 2026-03-31 发布，下一期预计 2027-03）。
    //   另一份《National, state and territory population》是**季度**的，但只到州/领地层级、不含 GCCSA 细分，
    //   **不能拿来查城市人口**。城市级人口一律用年度那份 ERP，不用五年一次的普查数。2026-09-08 核。
    //   **ABS 有三档并存口径，差别极大**：GCCSA（大首府城市）/ SUA（主要城区，非首府城市用这一档）/ LGA（地方政府区，
    //   悉尼市 LGA 只有二十多万人）。写的时候必须点名是哪一档。
    //   大悉尼（Greater Sydney，GCCSA）2025-06-30 ERP **5,638,830**（1 级，2026-09-08 核）。
    //   **原 identity 的 530 万与同条目 howItWorks 已引的数字打架** —— 这一批六个首府条目
    //   （悉尼/墨尔本/布里斯班/珀斯/阿德莱德/达尔文）的 identity **全部是旧数**，是「先写 identity、
    //   后写 howItWorks 但没回头同步」的批次性遗留，不是编造口径。
    identity:
      "Sydney is Australia's largest city and the capital of New South Wales; Greater Sydney had an estimated resident population of about 5.64 million in June 2025 (Australian Bureau of Statistics). It is an outgoing city built around a harbour and its beaches, and it is where many people first enter Australia. Finance, tourism and culture are all strong, and the cost of living is the highest in the country. It is not the national capital — that is Canberra.",
    // howItWorks sources: ABS Regional population (ERP 30 Jun 2025: Greater Sydney 5,638,830); City of Sydney "City at a glance" (ERP 30 Jun 2022: 218,096; Greater Sydney 34 councils); Wikipedia LGAs of NSW (33, 2024-09) → 正文写"三十多个"; NSW Greater Sydney Region Plan 2018; Local government in Australia. See docs/city-depth-redesign-2026-09-06.md §4
    howItWorks:
      "The Sydney people speak of is a metropolitan region assembled from more than thirty local government areas, known officially as Greater Sydney. Each has its own elected council, in charge of waste, parks, libraries and development approvals, while rail, buses, policing, schools and hospitals are run by the New South Wales state government. The nominal 'City of Sydney' covers only the central business district and its surroundings, about 26 km² with some 218,000 residents in 2022 — a small corner of the whole. In 2018 the state's regional plan described the region as three cities: the Harbour City, the River City centred on Parramatta, and the Western Parkland City growing around the new airport. Here an address never names the council area, only the suburb, the state and a four-digit postcode, and when locals say they are going to 'the city' they mean the central business district alone. Where the railway reaches, daily life reaches too. Newcomers most often go wrong in two ways: taking the City of Sydney for the whole of Sydney, and mistaking a sub-centre such as Parramatta for a suburb.",
    layout:
      "Sydney is built around a huge natural deep-water harbour (Port Jackson), whose inlets cut the city into many peninsulas and bay suburbs. The city centre (CBD) is on the south shore of the harbour, with the Opera House and the Harbour Bridge; to the east are beach areas such as Bondi, and to the west the suburbs run continuously to the foot of the Blue Mountains. The city has no significant high ground — it is a gently rolling sandstone plateau cut by river valleys.",
    gettingAround:
      "There is an airport train from the airport to Central station in about 15–20 minutes (the airport stations charge a separate, fairly high station access fee). Around the city you mostly use trains, light rail, buses and ferries, tapped with an Opal card or a contactless bank card, with a lower daily cap on Sundays. The ferry is the best way to see the harbour. The climate is mild and subtropical-leaning: summer (December–February) is around 26 °C with occasional spells above 35 °C and afternoon thunderstorms; winter (June–August) is about 9–17 °C and rarely cold. UV is strong all year — use sun protection. Food is very diverse, with a Chinatown in the centre and sizeable Korean, Vietnamese and Lebanese communities in the suburbs.",
    culture:
      "Sydney is a classic immigrant city; English is the main language and you hear many others on the street. Life centres on the outdoors — the beach, parks, weekend barbecues. The pace is faster and more business-minded than Melbourne. The New Year's Eve fireworks over Sydney Harbour are one of the first major New Year celebrations in the world. Tipping in restaurants is not required. Many small shops close on Sundays and public holidays, while supermarkets and big malls stay open.",
    seeAndDo:
      "The signature is the harbour: the Opera House, the Harbour Bridge (bridge climbs by booking), and a ferry from Circular Quay to Manly Beach or Taronga Zoo. The Bondi-to-Coogee coast walk is a classic half-day hike. In the city there are also the Royal Botanic Garden, The Rocks (colonial-era lanes) and Darling Harbour. About 90 minutes west are the sandstone canyons of the Blue Mountains and the Three Sisters.",
    whenAndTips:
      "The most comfortable weather is in spring and autumn (September–November, March–May), and it is not the busiest time either. High summer is peak season — the beaches are liveliest but accommodation is most expensive and hardest to book. Australia Day in late January, Easter, and Christmas to New Year are all high-price periods that need booking ahead. Swim only between the red-and-yellow flags and follow the lifeguards; watch for rip currents. Customs checks on food and plant and animal material are strict — declare honestly.",
  },

  melbourne: {
    // identity sources: 澳大利亚统计局（ABS）《Regional population》**年度**发布，覆盖截至当年 6 月 30 日的估计常住人口（ERP），
    //   通常在**次年 3 月下旬**公布（2024–25 财年数据于 2026-03-31 发布，下一期预计 2027-03）。
    //   另一份《National, state and territory population》是**季度**的，但只到州/领地层级、不含 GCCSA 细分，
    //   **不能拿来查城市人口**。城市级人口一律用年度那份 ERP，不用五年一次的普查数。2026-09-08 核。
    //   **ABS 有三档并存口径，差别极大**：GCCSA（大首府城市）/ SUA（主要城区，非首府城市用这一档）/ LGA（地方政府区，
    //   悉尼市 LGA 只有二十多万人）。写的时候必须点名是哪一档。
    //   大墨尔本（Greater Melbourne，GCCSA）2025-06-30 ERP **5,435,590**（1 级，2026-09-08 核）。
    identity:
      "Melbourne is the capital of Victoria, where Greater Melbourne had an estimated resident population of about 5.44 million in June 2025 (Australian Bureau of Statistics) — Australia's second-most populous capital city area, and often compared with Sydney. Its reputation is for the arts, coffee and sport: laneway cafes and street art, a strong live-music and theatre scene, and the yearly Australian Open and Spring Racing Carnival. The weather is famously changeable — locals say it has \"four seasons in one day.\"",
    // howItWorks sources: ABS Regional population (ERP 30 Jun 2025: Greater Melbourne 5,435,590); Wikipedia: Melbourne (31 LGAs, 9,993 km²); City of Melbourne (37.7 km², 2021 census 149,615); Plan Melbourne 2017–2050. See docs/city-depth-redesign-2026-09-06.md §4
    howItWorks:
      "Greater Melbourne is made up of 31 local government areas, and the City of Melbourne among them runs only the central business district and its surroundings, about 37.7 km² with some 150,000 residents at the 2021 census, under a Lord Mayor. Councils look after waste, libraries, local roads and development approvals, while trains, trams, buses, schools and policing belong to the Victorian government. Unlike Sydney, Melbourne's jobs and transport remain concentrated on the Hoddle Grid of the central business district, into which the railway lines converge like the spokes of a wheel. Addresses here use the suburb, VIC and a four-digit postcode, 3000 for the central business district. The Yarra divides the city into north and south, the tram network is the world's largest by length, and the hook turn at intersections is a driving rule found nowhere else. Newcomers most often go wrong by taking the City of Melbourne for the whole of Melbourne, or by assuming it is as polycentric as Sydney.",
    layout:
      "Melbourne sits at the head of Port Phillip Bay, with the Yarra River running through the centre. The CBD is a regular grid, ringed by inner suburbs each with its own character (Fitzroy, Carlton, St Kilda), and then wide outer suburbs. The land is flat — no sea cliffs or hills; an hour to the north-east is the Yarra Valley wine country, and the Great Ocean Road begins along the coast to the south-west.",
    gettingAround:
      "There is no train from the airport to the city — you use the airport bus or a taxi/rideshare, about 30–45 minutes. The tram network is one of the largest in the world; trams are free inside the CBD (the Free Tram Zone), and there are also trains and buses, paid with a Myki card. Four distinct seasons: summer (December–February) is about 14–26 °C with occasional heatwaves above 40 °C; winter (June–August) is about 7–14 °C, grey and wet but very rarely snowing. Sharp weather changes within a day are common — carry a jacket. The food scene is known for coffee and its many immigrant cuisines; Chinatown is one of the oldest in the Southern Hemisphere.",
    culture:
      "Melbourne is an immigrant city; English is the main language, with large Greek, Italian, Vietnamese and Chinese communities. Life leans toward culture and sport — the weekend is for the football (Australian Rules is close to a religion here), markets and cafes. The pace is a touch slower and more reserved than Sydney. The city is busy and accommodation tight during the Spring Racing Carnival (with a public holiday) in October–November and the Australian Open in January. Tipping is not required.",
    seeAndDo:
      "In the city: Federation Square, the State Library of Victoria, the Royal Botanic Gardens, wandering the CBD laneways for cafes and street art, the Queen Victoria Market. Little penguins come ashore at St Kilda. Out of town: the Great Ocean Road (the Twelve Apostles), the wineries of the Yarra Valley and Mornington Peninsula, the penguin parade on Phillip Island, the gold-rush town of Sovereign Hill.",
    whenAndTips:
      "Spring and autumn (especially March–May and September–November) have relatively settled, comfortable weather; summer brings heatwaves and winter is grey and cold. In any season the temperature can swing sharply within a day — dress in layers. Driving the Great Ocean Road one way takes a full day; don't expect to do it in half a day. Border checks on food and plant and animal material are strict — declare honestly. Citizens of most countries need to apply online for an electronic visa or ETA before departure.",
  },

  geelong: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   City of Greater Geelong LGA 2025-06-30 ERP = 295,052（2024 年 288,676，+2.2%）。原文的「都会区」不是 ABS 口径，已改为议会辖区（LGA）。
    identity:
      "Geelong sits on Corio Bay about 75 km south-west of Melbourne, with a population of about 295,000 in the local government area (June 2025, Australian Bureau of Statistics) — Victoria's second-largest city, and home ground of the Geelong Cats, one of the oldest clubs in the Australian Football League. Once a wool-trading and manufacturing hub, it is now better known as the gateway to the Great Ocean Road and the Bellarine Peninsula, and many travellers treat it as a genuine stop rather than just a drive-through.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   City of Greater Geelong LGA 2025-06-30 ERP = 295,052。
    howItWorks:
      "Geelong is Victoria's second city, governed by the City of Greater Geelong council over about 1,330 km² with about 295,000 people in June 2025; the council runs waste, parks and planning approvals, while rail, police and schools belong to the state. The centre lies on the west shore of Corio Bay with the waterfront as its face, Avalon airport to the north, and V/Line trains about an hour to Melbourne. Newcomers most often go wrong by taking Geelong for the start of the Great Ocean Road, when Torquay and the Surf Coast belong to another shire and the scenery begins there.",
    layout:
      "The city centre hugs the eastern shore of Corio Bay. A waterfront promenade links Cunningham Pier, the Eastern Beach sea baths and the 103 painted timber Baywalk Bollards. The old town grid, with the National Wool Museum and a cluster of 19th-century stone buildings, is within walking distance of the waterfront. A short drive south-west is the Otway Ranges and Torquay, where the Great Ocean Road officially begins; to the east is the Bellarine Peninsula, with the historic town of Queenscliff and a wine-growing district.",
    gettingAround:
      "Geelong's nearest commercial airport is Avalon Airport (AVV), about 20 km north-east of the centre, served by Jetstar with scheduled domestic flights; Melbourne Airport (Tullamarine) is about an hour's drive away. Neither airport has a direct train — use the airport bus or a taxi/rideshare. V/Line intercity trains run direct from Melbourne's Southern Cross Station to Geelong Station, about an hour each way with services roughly every half hour, and are the most common way to travel between the two cities. The waterfront and centre are walkable, with buses covering the rest; a car or a tour is needed for the Great Ocean Road and the Bellarine Peninsula. The climate is similar to Melbourne's temperate maritime pattern but slightly drier on the bay: summer (December–February) is about 14–25 °C with occasional heatwaves; winter (June–August) is about 7–14 °C, windy and cool.",
    culture:
      "Life in Geelong moves at a more relaxed pace than Melbourne. Local identity is closely tied to the Geelong Cats — the waterfront noticeably livens up on match days. The city's manufacturing and wool-processing past has given way to services and education in recent decades, and the waterfront itself has been substantially redeveloped over that time. Tipping is not required.",
    seeAndDo:
      "Along the waterfront: the painted Baywalk Bollards, the Eastern Beach sea baths (built in the 1930s), the National Wool Museum, and the Geelong Botanic Gardens. Out of town: south-west to Torquay and the Otway Ranges to formally start the Great Ocean Road (the Twelve Apostles are further along); east to the Bellarine Peninsula, where Queenscliff's colonial-era fort and lighthouse and the peninsula's wineries make for a common day trip.",
    whenAndTips:
      "Spring and autumn (March–May, September–November) have the most comfortable weather; summer brings occasional heatwaves and winter is windy and cool. Using Geelong as the starting point for the Great Ocean Road is efficient — the Twelve Apostles are still several hours' drive further on, so don't plan a same-day return to Melbourne. Border checks on food and plant and animal material are strict — declare honestly. Citizens of most countries need to apply online for an electronic visa or ETA before departure.",
  },

  brisbane: {
    // identity sources: 澳大利亚统计局（ABS）《Regional population》**年度**发布，覆盖截至当年 6 月 30 日的估计常住人口（ERP），
    //   通常在**次年 3 月下旬**公布（2024–25 财年数据于 2026-03-31 发布，下一期预计 2027-03）。
    //   另一份《National, state and territory population》是**季度**的，但只到州/领地层级、不含 GCCSA 细分，
    //   **不能拿来查城市人口**。城市级人口一律用年度那份 ERP，不用五年一次的普查数。2026-09-08 核。
    //   **ABS 有三档并存口径，差别极大**：GCCSA（大首府城市）/ SUA（主要城区，非首府城市用这一档）/ LGA（地方政府区，
    //   悉尼市 LGA 只有二十多万人）。写的时候必须点名是哪一档。
    //   大布里斯班（Greater Brisbane，GCCSA）2025-06-30 ERP **2,833,524**（1 级，2026-09-08 核）。
    //   **这是本批矛盾最明显的一条**：同条目 howItWorks 写的就是 283 万，identity 却是 260 万。
    identity:
      "Brisbane is the capital of Queensland, where Greater Brisbane had an estimated resident population of about 2.83 million in June 2025 (Australian Bureau of Statistics) — Australia's third-most populous capital city area. It is warmer, slower and more casual than Sydney and Melbourne to the south, with sunshine year-round and mild winters. It is the gateway to the Sunshine Coast, the Gold Coast and the southern Great Barrier Reef, and it will host the Summer Olympics in 2032.",
    // howItWorks sources: Wikipedia (2026-09): City of Brisbane; LGAs of Queensland; List of cities in Australia by population (ABS ERP 2025-06)
    howItWorks:
      "Brisbane took a different road from Sydney and Melbourne. In 1925 more than twenty towns and shires were merged into a single Brisbane City Council, and ever since one council has governed about 1,343 km² of the urban core, with some 1.24 million residents at the 2021 census — the most populous local government in Australia, led by a Lord Mayor. Around it, Logan, Ipswich, Moreton Bay and Redland are cities in their own right, and together with Brisbane they form a Greater Brisbane of about 2.83 million people in June 2025; trains, buses, ferries, police and schools remain with the Queensland government. The centre sits in a bend of the Brisbane River, and South Bank, Fortitude Valley and West End each have a character of their own as the river winds the city into a chain of peninsulas. Addresses still name only the suburb, QLD and a postcode, and the council boundary scarcely appears in everyday speech. Newcomers most often go wrong by picturing 'Brisbane City Council' as a small downtown authority, when it governs the whole city from the port to the foothills.",
    layout:
      "The city spreads along the winding Brisbane River, which separates the CBD from the South Bank cultural precinct, linked by bridges and ferries. The centre is flat, with a few small hills around it (Mount Coot-tha, with a lookout over the whole city). It is about an hour to the coast to the east, the Sunshine Coast to the north and the Gold Coast to the south.",
    gettingAround:
      "There is an airport train straight to the city, about 20 minutes (with a separate airport station fee). Around the city you mostly use trains, buses and the CityCat river ferries, paid with a go card or a contactless bank card. The climate is subtropical: summer (December–February) is hot and humid, about 21–30 °C, with frequent afternoon thunderstorms, and it is the season when tropical cyclones can have an effect; winter (June–August) is dry and pleasant, about 10–21 °C. UV is strong all year. Dining is casual, concentrated along the river and at South Bank.",
    culture:
      "Brisbane people have a reputation for being relaxed and friendly, and life revolves around the outdoors and the river — South Bank has a man-made beach and pool, and there are many weekend markets. The pace is noticeably slower than Sydney. The mild winter makes it a place other Australians go to escape the cold. Tipping is not required.",
    seeAndDo:
      "The man-made beach and cultural precinct at South Bank, Lone Pine Koala Sanctuary (koalas up close), the Mount Coot-tha lookout, a CityCat ferry along the river. Out of town: north to the Sunshine Coast and Noosa, south to the Gold Coast theme parks and Surfers Paradise, a boat to Moreton Island to see dolphins, or a short flight to the southern Great Barrier Reef.",
    whenAndTips:
      "Winter (May–September) has the most comfortable weather — dry and clear — and is the peak season. Summer is hot, humid and stormy, and November–April is the cyclone season, so check the forecast before travelling. Sun protection matters all year. On beaches watch for marine stingers (especially in the warm season) and rip currents. Quarantine checks on entry are strict — declare honestly. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  perth: {
    // identity sources: 澳大利亚统计局（ABS）《Regional population》**年度**发布，覆盖截至当年 6 月 30 日的估计常住人口（ERP），
    //   通常在**次年 3 月下旬**公布（2024–25 财年数据于 2026-03-31 发布，下一期预计 2027-03）。
    //   另一份《National, state and territory population》是**季度**的，但只到州/领地层级、不含 GCCSA 细分，
    //   **不能拿来查城市人口**。城市级人口一律用年度那份 ERP，不用五年一次的普查数。2026-09-08 核。
    //   **ABS 有三档并存口径，差别极大**：GCCSA（大首府城市）/ SUA（主要城区，非首府城市用这一档）/ LGA（地方政府区，
    //   悉尼市 LGA 只有二十多万人）。写的时候必须点名是哪一档。
    //   大珀斯（Greater Perth，GCCSA）2025-06-30 ERP **2,452,765**（1 级，2026-09-08 核）。
    identity:
      "Perth is the capital of Western Australia, where Greater Perth had an estimated resident population of about 2.45 million in June 2025 (Australian Bureau of Statistics), and is called one of the most isolated big cities in the world — thousands of kilometres from the eastern cities, about 5 hours' flight to Sydney with a 2–3 hour time difference. It grew rich on mining and energy, has a Mediterranean climate, and gets the most sunshine of any Australian capital.",
    // howItWorks sources: Wikipedia (2026-09): City of Perth; Perth (30 LGAs per Planning and Development Act 2005); ABS ERP 2025-06
    howItWorks:
      "Perth is a long, narrow metropolis spread some 125 km along the coast, with about 2.45 million residents in June 2025 and 30 local governments; the nominal City of Perth covers only about 20 km² around the central business district, with fewer than 30,000 residents at the 2021 census, one of the smallest capital-city councils in the country. Councils look after waste, parks and development approvals, while trains, buses and ferries are run by the state's Transperth, and the recent Metronet works push the railway further into the suburbs. The Swan River divides the city into north and south, and locals mark out their territory as 'north of the river' or 'south of the river'; the Darling Scarp to the east is the city's edge. Addresses name only the suburb, WA and a postcode. Newcomers most often go wrong by imagining Perth as a compact city, when daily life is scattered through suburbs strung along more than a hundred kilometres of coast.",
    layout:
      "Perth is on the Swan River, about fifteen kilometres from the Indian Ocean coast. The CBD is right by the river, and the city has large green spaces (Kings Park is one of the biggest inner-city parks in the world, with a view over the whole city). To the west are Fremantle (the old port town) and the Indian Ocean beaches, and Rottnest Island lies off the river mouth. The land is flat.",
    gettingAround:
      "There is an airport train into the city, about 20 minutes. Trains and buses are decent, and there are free buses (CAT) within the CBD. The Mediterranean climate: summer (December–February) is hot and dry, about 18–31 °C, often above 35 °C, with an afternoon sea breeze (the \"Fremantle Doctor\"); winter (June–August) is mild and wet, about 8–18 °C. UV is very strong. The food scene has local seafood and the wines of the Margaret River region.",
    culture:
      "Perth life is relaxed and outdoor-focused — the beach, river sports, barbecues. Because of the isolation there is a strong local identity. The Noongar people are the traditional owners of this area, and the Swan River (Derbarl Yerrigan) is significant in their culture. Tipping is not required.",
    seeAndDo:
      "Kings Park and Botanic Garden, Fremantle's old prison and weekend markets, a boat or ferry to Rottnest Island (to see quokkas and cycle around), sunset at Indian Ocean beaches such as Cottesloe. Out of town: south to the Margaret River wineries, forests and coast; further north, the Pinnacles and the coral coast.",
    whenAndTips:
      "Spring and autumn (September–November, March–May) have the most comfortable weather, and spring is also wildflower season. Summer is hot but dry, with an evening sea breeze. Note the time difference with the east coast when planning interstate travel. Use sun protection and carry water for the outdoors and beaches. Trips further afield are mostly long drives — plan ahead. Quarantine checks on entry are strict. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  adelaide: {
    // identity sources: 澳大利亚统计局（ABS）《Regional population》**年度**发布，覆盖截至当年 6 月 30 日的估计常住人口（ERP），
    //   通常在**次年 3 月下旬**公布（2024–25 财年数据于 2026-03-31 发布，下一期预计 2027-03）。
    //   另一份《National, state and territory population》是**季度**的，但只到州/领地层级、不含 GCCSA 细分，
    //   **不能拿来查城市人口**。城市级人口一律用年度那份 ERP，不用五年一次的普查数。2026-09-08 核。
    //   **ABS 有三档并存口径，差别极大**：GCCSA（大首府城市）/ SUA（主要城区，非首府城市用这一档）/ LGA（地方政府区，
    //   悉尼市 LGA 只有二十多万人）。写的时候必须点名是哪一档。
    //   大阿德莱德（Greater Adelaide，GCCSA）2025-06-30 ERP **1,491,015**（1 级，2026-09-08 核）。
    identity:
      "Adelaide is the capital of South Australia, where Greater Adelaide had an estimated resident population of about 1.49 million in June 2025 (Australian Bureau of Statistics). It is a planned city — a square grid in the centre, wrapped by a continuous ring of parkland (the Park Lands). It is known for wine, festivals and a relatively unhurried life, and prices are usually a little lower than in Sydney or Melbourne.",
    // howItWorks sources: Wikipedia (2026-09): City of Adelaide (15.57 km², 2021 census 25,026; Light 1837 plan; Park Lands); ABS ERP 2025-06
    howItWorks:
      "Adelaide's centre still keeps the grid that Colonel Light laid out in 1837: a square mile of city blocks ringed by about 7.6 km² of Park Lands, with North Adelaide facing it across the Torrens. The City of Adelaide governs precisely this grid and its green belt, about 15.6 km² with some 25,000 residents at the 2021 census; beyond the belt, Greater Adelaide is made up of more than a dozen councils and had about 1.49 million residents in June 2025. Trains, trams and buses are run by the state government's Adelaide Metro. The city lies on the plain between the coast and the Adelaide Hills, and locals take their bearings from 'the hills' and 'the beach' — the eastern suburbs against the hills, the western ones by the sea. Addresses name only the suburb, SA and a postcode. Newcomers most often go wrong by taking the area inside the Park Lands for the whole of Adelaide, when the great majority of people live on the plain beyond it.",
    layout:
      "Adelaide sits on the plain between Gulf St Vincent and the Mount Lofty Ranges, with the Torrens River through the centre. The CBD is neatly enclosed by the Park Lands, with North Adelaide across the river to the north. East and uphill are the Adelaide Hills; north is the Barossa Valley; south are McLaren Vale and the Fleurieu Peninsula coast, and further south, by ferry, Kangaroo Island.",
    gettingAround:
      "The airport is close to the city (about 15 minutes' drive), with an airport bus and no airport train. Around the city there are buses, trams and trains, and the tram is free within the CBD. The Mediterranean climate: summer (December–February) is dry and hot, about 17–29 °C, with heatwaves above 40 °C; winter (June–August) is cool and wet, about 8–16 °C. It is one of the driest of Australia's big cities. Famous wine regions are right on the doorstep, and the food and produce are very good.",
    culture:
      "Adelaide life is unhurried, and it is called a \"20-minute city\" (nothing is far). February and March are festival season (the Adelaide Festival and Fringe), when the city is at its busiest. It has no convict past in its history, something locals often mention. Tipping is not required.",
    seeAndDo:
      "The Central Market, the Botanic Garden and the museums and galleries along North Terrace, Glenelg beach. Out of town: wine tasting in the Barossa Valley and McLaren Vale, the towns and wildlife parks of the Adelaide Hills, Hahndorf (a German settlement village), and south to Kangaroo Island for sea lions and wildlife.",
    whenAndTips:
      "Spring and autumn (March–May, September–November) have the most comfortable weather; summer brings heatwaves and winter is wet and cold. Accommodation is tight and needs booking ahead during the February–March festival season. If you drive on a wine tour, mind the drink-driving limits, or take a tour with a driver. Quarantine checks on entry are strict — declare honestly. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  cairns: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Cairns Regional Council LGA 2025-06-30 ERP = 179,334（2024 年 177,573，+1.0%）。原文的「都会区约15万」既非 ABS 口径、数值也偏低约 3 万。
    identity:
      "Cairns is in the tropical far north of Queensland — a small city (about 179,000 in the local government area, June 2025, Australian Bureau of Statistics) that runs almost entirely on tourism. It is the base for visiting the northern Great Barrier Reef and the Daintree rainforest — one of the few places on Earth where rainforest meets coral reef. It is hot year-round, with a dry and a wet season.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Cairns Regional Council LGA 2025-06-30 ERP = 179,334。
    howItWorks:
      "Cairns is the centre of Far North Queensland, governed by the Cairns Regional Council with about 179,000 people in June 2025; the council runs local services, while police, hospitals and schools belong to the state. The centre lies on the mudflats of Trinity Inlet with no beach, the Esplanade's artificial lagoon standing in for one, the Northern Beaches a string of suburbs, the airport north of town and the Great Barrier Reef reached by boat. Newcomers most often go wrong by expecting a beach in the city centre, when the beaches lie in the northern suburbs and Port Douglas and the Daintree belong to another shire 60 km away.",
    layout:
      "Cairns is wedged between the Coral Sea and steep, rainforest-covered mountains, with only a narrow strip of flat land. The centre runs along an Esplanade (the city itself has no beach — there is a man-made lagoon pool); to the north are a string of beach suburbs and Port Douglas, inland and uphill are the Atherton Tablelands, and out to sea is the reef.",
    gettingAround:
      "The airport is about 10 minutes' drive from the city, with no airport train — you use a taxi/rideshare or a hotel transfer. The city is small and walkable; getting to the sights is mostly by tour bus, rental car or organised tour. The tropical climate: the dry season (May–October) is about 18–29 °C, sunny and less humid, and is the peak season; the wet season (November–April) is hot and sticky, about 23–32 °C, with heavy rain, and is also the season for tropical cyclones and dangerous marine stingers in the sea. Sun protection and insect repellent all year.",
    culture:
      "Cairns is a small tourist city — slow-paced, multicultural and geared to international visitors. There are Aboriginal communities in the surrounding area, and some rainforest and reef tours are run by Aboriginal operators who explain their relationship with the land and sea. Tipping is not required.",
    seeAndDo:
      "A trip out to the Great Barrier Reef to snorkel or dive (day tours or multi-day liveaboard trips); the rainforest village of Kuranda (scenic railway up, cable car down); the Daintree rainforest and Cape Tribulation (where rainforest runs straight to the beach); the waterfalls and volcanic lakes of the Atherton Tablelands. In the city, the lagoon pool and night markets.",
    whenAndTips:
      "The dry season (May–October, especially June–September) has the best weather and is the peak season — reef and rainforest trips need booking ahead. The wet season is hot and rainy, and from November to May the sea has deadly box jellyfish and Irukandji; swim only in netted areas or wear a stinger suit, and follow local advice. Strong sun protection and insect repellent all year. Quarantine checks on entry are strict. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  darwin: {
    // identity sources: 澳大利亚统计局（ABS）《Regional population》**年度**发布，覆盖截至当年 6 月 30 日的估计常住人口（ERP），
    //   通常在**次年 3 月下旬**公布（2024–25 财年数据于 2026-03-31 发布，下一期预计 2027-03）。
    //   另一份《National, state and territory population》是**季度**的，但只到州/领地层级、不含 GCCSA 细分，
    //   **不能拿来查城市人口**。城市级人口一律用年度那份 ERP，不用五年一次的普查数。2026-09-08 核。
    //   **ABS 有三档并存口径，差别极大**：GCCSA（大首府城市）/ SUA（主要城区，非首府城市用这一档）/ LGA（地方政府区，
    //   悉尼市 LGA 只有二十多万人）。写的时候必须点名是哪一档。
    //   大达尔文（Greater Darwin，GCCSA）2025-06-30 ERP **159,284**（1 级，2026-09-08 核）。
    //   **小首府最容易把 LGA 与 GCCSA 混用** —— 原文的 14 万像是 2021 年普查或更早的数。
    identity:
      "Darwin is the capital of the Northern Territory, where Greater Darwin had an estimated resident population of about 159,000 in June 2025 (Australian Bureau of Statistics) — the smallest of Australia's capitals and the closest to Asia (Bali is a shorter flight than Sydney). It is in the tropics, with only a dry and a wet season, and is hot year-round. It is the gateway to Kakadu and Litchfield national parks, and has a World War II and multicultural history.",
    // howItWorks sources: Wikipedia (2026-09): Darwin (City of Darwin / Palmerston / Litchfield; Cyclone Tracy 1974; Larrakia); ABS ERP 2025-06
    howItWorks:
      "Darwin is the smallest of the Australian capitals, with about 159,000 residents in Greater Darwin in June 2025 — more than half the population of the Northern Territory. The City of Darwin council governs the central business district and the surrounding suburbs, while the satellite city of Palmerston to the south-east and the rural municipality of Litchfield have councils of their own, the three together forming Greater Darwin; schools, hospitals, buses and police belong to the territory government. Cyclone Tracy destroyed more than seventy per cent of the buildings on Christmas Day 1974, and today's city was rebuilt after it, which is why its buildings are young and its layout orderly: the old town and the business district at one corner of the peninsula, the northern suburbs at another, and the eastern suburbs stretching towards Palmerston. This is the country of the Larrakia people, and Aboriginal people make up more than a tenth of the population, the highest share of any capital. Addresses name the suburb, NT and a postcode. Newcomers most often go wrong by taking Palmerston for a district of Darwin, when it is a city with a government of its own.",
    layout:
      "Darwin is on a peninsula reaching into the Timor Sea, with water on three sides. The centre is small, with dining and sights concentrated near the waterfront. The land is flat. Kakadu is about 2–3 hours' drive to the east, Litchfield about 1.5 hours to the south, and the \"Red Centre\" is much further south (a long drive or a flight).",
    gettingAround:
      "The airport is about 15 minutes' drive from the city, with no airport train — you use an airport bus or a taxi/rideshare. The city is small and walkable; reaching the national parks needs a rental car or a tour (in the wet season some roads close due to flooding). The tropical climate: the dry season (May–October) is about 21–32 °C, sunny, low humidity and almost no rain, and is the peak season; the wet season (November–April) is hot, about 25–33 °C, with very high humidity, strong thunderstorms, monsoon rain and tropical cyclones. Food is multicultural with a strong South-East Asian influence, and the open-air markets (such as the Mindil Beach sunset market) are well known.",
    culture:
      "Darwin's population is very mixed, with high proportions of Aboriginal people and Asian migrants; life is slow-paced, with a strong outdoor and market culture. The Northern Territory has large areas of Aboriginal-owned land (including Arnhem Land), which need a permit to enter. Follow guidance when visiting Aboriginal sacred sites and rock art at Kakadu and elsewhere. Tipping is not required.",
    seeAndDo:
      "The waterfront precinct, the WWII oil storage tunnels, and the Mindil Beach sunset market (dry season). Out of town: the rock art (Ubirr, Nourlangie), wetlands and waterfalls of Kakadu; the waterfalls and termite mounds of Litchfield; a boat trip to see leaping saltwater crocodiles.",
    whenAndTips:
      "The dry season (May–October, especially June–August) is the only comfortable time and the only good time for the national parks; accommodation in peak season needs booking ahead. The wet season is hot, stormy and floods some roads, and while the waterfalls are full some sites close. Never swim in water that may hold saltwater crocodiles (many calm-looking rivers and pools do) — swim only where it is clearly signed safe. Sun protection, insect repellent, and drink plenty of water. Quarantine checks on entry are strict. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  canberra: {
    identity:
      "Canberra is Australia's capital, in a purpose-set-aside \"Australian Capital Territory\" within New South Wales, inland between Sydney and Melbourne, with about 470,000 people. It is not an organically grown city but a planned one built from 1913 onward to settle the rivalry between Sydney and Melbourne over which should be capital. Its streets are laid out around the artificial Lake Burley Griffin and several radiating axes.",
    // howItWorks sources: Wikipedia (2026-09): Canberra (ACT Legislative Assembly 1989; NCA; Griffin plan 1913; town centres); ABS ERP 2025-06
    howItWorks:
      "Canberra is the only Australian capital without a local council. The city is the Australian Capital Territory itself, and since 1989 an elected territory assembly and government have carried out both state and municipal functions, from schools and hospitals to rubbish and street lights, while the federal National Capital Authority guards the axes and lake of the 1913 plan by Walter Burley Griffin and Marion Mahony Griffin. The city is laid out as a series of districts, each with its own town centre — Civic in the middle, Belconnen, Woden, Tuggeranong and Gungahlin — with bushland between the residential areas and suburbs largely named after political figures. It had about 485,000 residents in June 2025, and Queanbeyan, across the New South Wales border, runs into it. Addresses name the suburb, ACT and a postcode. Newcomers most often go wrong by taking Civic for the whole city, when daily life is spread among several town centres and almost every journey is made by car.",
    layout:
      "The city centres on the lake: the south shore holds the Parliamentary Triangle (Parliament House and several national museums and memorials), the north shore the Civic centre and commercial district. Around them is a ring of satellite residential districts with a great deal of green space, and the encircling hills are visible from town. The scale is designed for driving, with walkable areas concentrated inside a few precincts.",
    gettingAround:
      "The airport is about 10 minutes from the centre, with a bus into town, though most people use a taxi or rideshare. There is one north–south light rail line plus buses, but service is not dense, so a rental car or bike is more flexible. At about 580 m elevation Canberra has the coldest winters of Australia's larger cities: July nights are often around 0 °C with frost, while summer days are about 28 °C and dry. Spring and autumn (March–April, September–October) are the most comfortable.",
    culture:
      "Public servants, diplomats and university staff and students make up a large share of the population; the pace is quieter than Sydney or Melbourne, and many places are quiet on evenings and weekends. It has the country's greatest concentration of national cultural institutions, most of them free. The city is friendly to cycling and the outdoors. Tipping is not required.",
    seeAndDo:
      "The Australian War Memorial, National Gallery, National Museum, Parliament House (open to visitors) and National Portrait Gallery; walking and cycling around the lake; the Floriade flower festival in September–October; climbing Red Hill or Mount Ainslie for a city panorama; the mountains of nearby Namadgi National Park.",
    whenAndTips:
      "Spring and autumn have the best weather and cover Floriade and several major events. Winter is cold, so bring warm clothing; use sun protection in summer. The city is spread out, so without a car keep to the Parliamentary Triangle and Civic. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  newcastle: {
    // identity sources: 澳大利亚统计局（ABS）《Regional population》**年度**发布，覆盖截至当年 6 月 30 日的估计常住人口（ERP），
    //   通常在**次年 3 月下旬**公布（2024–25 财年数据于 2026-03-31 发布，下一期预计 2027-03）。
    //   另一份《National, state and territory population》是**季度**的，但只到州/领地层级、不含 GCCSA 细分，
    //   **不能拿来查城市人口**。城市级人口一律用年度那份 ERP，不用五年一次的普查数。2026-09-08 核。
    //   **ABS 有三档并存口径，差别极大**：GCCSA（大首府城市）/ SUA（主要城区，非首府城市用这一档）/ LGA（地方政府区，
    //   悉尼市 LGA 只有二十多万人）。写的时候必须点名是哪一档。
    //   **纽卡斯尔不是首府城市，ABS 没有「Greater Newcastle」GCCSA** —— 官方口径是
    //   **SUA（Significant Urban Area）**：纽卡斯尔—梅特兰 SUA 2025-06-30 ERP 约 **541,634**（1 级，2026-09-08 核）。
    //   「新南威尔士州人口第二多」按 SUA 口径成立（次于悉尼，领先中央海岸）。
    //   **非首府城市一律用 SUA，不要套「都会区」这个会被读成 GCCSA 的词。**
    identity:
      "Newcastle is about 160 km north of Sydney, the second-most populous urban area in New South Wales (the Newcastle–Maitland Significant Urban Area had an estimated population of about 542,000 in June 2025, Australian Bureau of Statistics), at the mouth of the Hunter River. It was historically a coal-export port — its name comes from the English coal city of Newcastle upon Tyne, and the Australian city was formally named in 1804. Today it has shifted from heavy industry toward its university, beaches and culture.",
    // howItWorks sources: Wikipedia (2026-09): Newcastle, NSW (Greater Newcastle LGAs, 2021 census 682,465; coal port); ABS ERP 2025-06 SUA
    howItWorks:
      "Newcastle is a metropolitan area assembled from several independent local governments: the City of Newcastle governs the port and the old city, the City of Lake Macquarie to the south has more people, and with Maitland, Cessnock and Port Stephens they form a Greater Newcastle of about 682,000 at the 2021 census, while the Newcastle–Maitland urban area had about 542,000 residents in June 2025. Trains, buses and the light rail are run by the New South Wales government. The city grew around the world's largest coal-export port, the business district sits on the peninsula at the mouth of the Hunter, and the light rail opened in 2019 links the station to the beaches; each council keeps its own identity, and residents of Lake Macquarie seldom say they live in Newcastle. Addresses name the suburb, NSW and a postcode. Newcomers most often go wrong by calling the whole region Newcastle, when to locals only the city by the harbour bears the name.",
    layout:
      "The centre sits on a peninsula between the Hunter River and the beaches, compact and walkable. A string of east-facing city beaches (Newcastle, Nobbys, Merewether) runs along the coast, linked by a shoreline walk. Inland is the Hunter Valley, one of Australia's oldest wine regions.",
    gettingAround:
      "The airport is about 25 km north at Williamtown (shared with an air force base), with a bus into town; you can also take a train from Sydney (about 2.5–3 hours). The centre is walkable, with light rail and buses (use a transport card or contactless bank card). Reaching the Hunter Valley wineries needs a rental car or tour. The climate is mild: summer about 19–27 °C with fairly high humidity, winter about 9–18 °C and sunny. The sea is swimmable year-round; swim only in flagged patrolled areas.",
    culture:
      "Newcastle is more relaxed than Sydney and cheaper to live in, with a strong surf and beach culture and a lively independent music and arts scene. The surrounding area is the country of the Awabakal and Worimi peoples. Tipping is not required.",
    seeAndDo:
      "The lighthouse, fort and coastal walk at Nobbys Head and Fort Scratchley; Nobbys Beach and the ocean baths (rock sea pools); Newcastle Museum and Art Gallery; a day trip to the Hunter Valley wineries; the large sand dunes around Stockton to the north.",
    whenAndTips:
      "Autumn (March–May) is usually the most settled and comfortable; summer has more thunderstorms but warm water. Swim only between the red and yellow flags. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  "gold-coast": {
    identity:
      "The Gold Coast is in south-east Queensland, about an hour's drive south of Brisbane — a continuous belt of beachside resort city with about 700,000 people. It is known for a long run of east-facing beaches, a dense high-rise apartment skyline, and a cluster of theme parks inland. It is warm year-round.",
    // howItWorks sources: Wikipedia (2026-09): City of Gold Coast (1,334 km², 2021 census 625,087; 1959; Yugambeh); ABS ERP 2025-06 SUA
    howItWorks:
      "The Gold Coast is a city governed by a single council: about 1,334 km² with some 625,000 residents at the 2021 census, among the most populous local governments in Australia, raised from the Town of Gold Coast in 1959, and the Gold Coast–Tweed Heads urban area had about 762,000 residents in June 2025. Trains, buses and the G:link light rail opened in 2014 are run by the Queensland government. The city stretches north and south along the coast without a single centre in the traditional sense: Surfers Paradise is the famous landmark and the seat of the council, Southport the historic administrative and commercial centre, and Robina and Nerang inland are centres of their own. This is the country of the Yugambeh people. Addresses name the suburb, QLD and a postcode. Newcomers most often go wrong by taking Surfers Paradise for the whole Gold Coast, when most of the city's people live in suburbs several kilometres inland from the beach.",
    layout:
      "The city stretches a long way north–south along the coast, with \"Surfers Paradise\" the central, tallest section. Behind the beaches are canal-estate suburbs, and further inland the land rises quickly into rainforest mountains (Springbrook, the Border Ranges). The airport is at the far south, near the New South Wales border.",
    gettingAround:
      "Gold Coast Airport (Coolangatta) is about 25 minutes from Surfers Paradise; Brisbane Airport is also used, with a train plus light rail between them. There is a coastal light rail line plus buses (use a transport card or contactless bank card). Reaching the inland national parks needs a rental car or tour. The subtropical climate: summer (December–February) about 21–29 °C, humid with thunderstorms; winter (June–August) about 12–21 °C, sunny and dry, and very pleasant. The sea is swimmable year-round; watch for rip currents and swim only in flagged patrolled areas.",
    culture:
      "The Gold Coast is one of Australia's most typical holiday and retirement cities, with a relaxed, visitor-facing atmosphere and nightlife concentrated around Surfers Paradise and Broadbeach. Tipping is not required.",
    seeAndDo:
      "A string of beaches (Surfers Paradise, Broadbeach, Coolangatta, Burleigh Heads); theme parks (Warner Bros. Movie World, Sea World, Dreamworld, Wet'n'Wild); rainforest and waterfalls in Lamington and Springbrook national parks inland; the glow-worms at Springbrook. A popular place to learn to surf.",
    whenAndTips:
      "Winter (June–August) has the most settled, comfortable weather; summer is hotter and wetter but the water is warm. Late September to early October is Australian school holidays and crowded. Swim only between the red and yellow flags and follow the lifeguards. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  hobart: {
    identity:
      "Hobart is the capital of Tasmania and, founded in 1804, Australia's second-oldest capital city after Sydney, with about 250,000 people. It sits at the mouth of the Derwent River below Mount Wellington (kunanyi) and keeps a great deal of early stone architecture. The city is named after Robert Hobart, then the British colonial secretary.",
    // howItWorks sources: Wikipedia (2026-09): Hobart (Greater Hobart councils; Derwent; Metro Tasmania); ABS ERP 2025-06
    howItWorks:
      "Hobart spreads along both banks of the Derwent estuary, with about 255,000 residents in Greater Hobart in June 2025. The City of Hobart governs only the central city on the western shore and the foot of Mount Wellington; Glenorchy to the north, Clarence on the eastern shore and Kingborough to the south are cities or municipalities of their own, and Greater Hobart is assembled from these councils without a single city government. Buses are run by the state's Metro Tasmania, there is no passenger railway, and commuting depends almost entirely on cars and buses. The Derwent is the boundary that matters — locals speak of 'the eastern shore' and 'the western shore', joined by the Tasman Bridge. Addresses name the suburb, TAS and a postcode. Newcomers most often go wrong by assuming Hobart is only the old town around Salamanca and the waterfront, when most of its people live across the river and in the valleys to the north.",
    layout:
      "The centre is compact, along the west bank of the Derwent, with the old sandstone warehouses around Salamanca now a dining and market district. Mount Wellington (about 1,270 m) is visible behind the city and occasionally holds snow. Across the river to the north is the MONA art museum. The city gives way quickly to mountains and coast.",
    gettingAround:
      "The airport is about 20 minutes from the city with no airport rail — use an airport bus or a taxi/rideshare. The centre is walkable; a dedicated ferry runs to MONA; reaching the surroundings (Mount Wellington, wineries, Bruny Island, Port Arthur) needs a rental car or tour. Tasmania's climate is cool and changeable: summer (December–February) about 12–22 °C with long daylight; winter about 4–12 °C, cold, wet and rainy; the weather can change several times in a day, so carry a windproof, waterproof jacket in any season.",
    culture:
      "Tasmania is slow-paced with a strong sense of community and a focus on local produce (oysters, salmon, cheese, whisky, cider). Tasmanian Aboriginal people (palawa) have lived on the island for tens of thousands of years, and some place names have been restored to Aboriginal forms (such as kunanyi for Mount Wellington). Tipping is not required.",
    seeAndDo:
      "Salamanca Market (Saturdays), the surrounding historic buildings, and the MONA art museum; driving up Mount Wellington for the panorama; south to the Port Arthur Historic Site (a solemn former penal site) and Bruny Island; the Dark Mofo winter arts festival in June. Hobart is also a resupply port for Antarctic research ships.",
    whenAndTips:
      "Summer (December–February) has the longest daylight and the most events and is the peak season, so book accommodation ahead; winter is cold and wet but has Dark Mofo. The weather is very changeable, so dress in layers. The island has many mountain roads and abundant wildlife, so drive slowly after dusk. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  launceston: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Launceston SUA（城区）2025-06-30 ERP = 92,993。
    identity:
      "Launceston is in northern Tasmania, the state's second-largest city (about 93,000 in the urban area, June 2025, Australian Bureau of Statistics) and one of Australia's earlier inland cities. It sits at the junction of three rivers, right beside a rocky gorge called Cataract Gorge. The city is named after Launceston in Cornwall, England.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Launceston SUA 2025-06-30 ERP = 92,993 —— **比 2024 年的 93,048 少了 55 人**，是本轮少见的下降案例，不要写成持续增长。
    howItWorks:
      "Launceston is Tasmania's second city, governed by the City of Launceston with about 93,000 people in the urban area in June 2025; the council runs local services, while police and schools belong to the state. The centre lies at the head of the Tamar where the North and South Esk rivers meet, with Cataract Gorge a few hundred metres from downtown; it was named a UNESCO City of Gastronomy in 2021, and Hobart lies about 200 km south. Newcomers most often go wrong by counting the Tamar Valley wineries as part of Launceston, when they belong to the West Tamar and George Town councils.",
    layout:
      "The centre keeps a great deal of Victorian and Edwardian architecture, arranged around several squares and easy to walk. The Tamar River runs past the edge of town, and to the north is the Tamar Valley wine region. Cataract Gorge is within walking distance of the centre.",
    gettingAround:
      "The airport is about 15 minutes from the city — use an airport bus or a taxi/rideshare. The centre is walkable, and the gorge is a short walk or drive; reaching the Tamar Valley wineries or Cradle Mountain needs a rental car or tour. The climate is like Hobart's but more inland: summer days can exceed 25 °C, winter nights often bring frost, and the daily temperature range is large.",
    culture:
      "Launceston is the farming and food centre of northern Tasmania, driven in recent years by dining, wine and a regional university campus, and is slower-paced than Hobart. Tipping is not required.",
    seeAndDo:
      "Cataract Gorge (trails, a suspension bridge, a long single-span chairlift); the historic buildings and parks of the centre; the Queen Victoria Museum and Art Gallery; a day of Tamar Valley wineries; about 2.5 hours west is Cradle Mountain–Lake St Clair National Park (part of the Tasmanian Wilderness).",
    whenAndTips:
      "Summer and autumn (December–April) are best for the outdoors and wineries; winter is cold with short days. Cradle Mountain's weather is very changeable and snow is possible any time of year, so check road and weather conditions before going. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  "alice-springs": {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Alice Springs Town Council LGA 2025-06-30 ERP = 30,875（2024 年 30,487，+1.3%）。
    identity:
      "Alice Springs (Mparntwe in the Arrernte language) is at the very centre of Australia, among the MacDonnell Ranges, with about 31,000 people (June 2025, Australian Bureau of Statistics) — the largest settlement and supply base of the \"Red Centre,\" roughly 1,500 km from the nearest large city. It is the base for visiting Uluṟu, Kata Tjuṯa, Kings Canyon and the MacDonnell Ranges.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Alice Springs Town Council LGA 2025-06-30 ERP = 30,875。
    howItWorks:
      "Alice Springs is the third-largest settlement of the Northern Territory, governed by the Alice Springs Town Council with about 31,000 people in June 2025; the council runs local services, while police, hospitals and schools belong to the territory government. The town stands on both banks of the mostly dry Todd River with the MacDonnell Ranges to the south, the Arrernte are the traditional owners, the airport lies south of town, and the Ghan runs from here to Darwin and Adelaide. Newcomers most often go wrong by assuming Uluru is near Alice Springs, when it lies about 450 km south-west at Yulara, a five-hour drive.",
    layout:
      "The small town is hemmed in by a gap in the MacDonnell Ranges (Heavitree Gap), with the Todd River (a dry bed most of the time) running through it; the centre is a few blocks. Red ranges and desert begin immediately around it. Uluṟu is in fact about 450 km away, roughly a 5-hour drive — not a nearby suburb.",
    gettingAround:
      "The airport is about 15 minutes from town — use a taxi/rideshare or an accommodation transfer. The town is small and walkable; the West and East MacDonnell gorges are day trips, while Uluṟu and Kings Canyon need an overnight stay or a flight. The inland desert climate: summer (December–February) days often exceed 38 °C, winter (June–August) days about 20 °C with nights that can fall below 0 °C; the daily range is extreme, so carry plenty of water in any season.",
    culture:
      "Alice Springs is a centre of Central Australian Aboriginal art, with several Aboriginal-run galleries; large areas of surrounding land are Aboriginal-owned, and entering some areas or leaving the main roads needs a permit. Follow local guidance when visiting sacred sites and taking photos — some places may not be photographed. Tipping is not required.",
    seeAndDo:
      "The West MacDonnell gorges (Simpsons Gap, Standley Chasm, Ormiston Gorge, Glen Helen) and the East MacDonnell (Trephina Gorge); the Telegraph Station Historical Reserve, the Royal Flying Doctor Service base, and the Desert Park; a starting point for Uluṟu–Kata Tjuṯa and Kings Canyon. The Larapinta Trail is a long-distance ridge walk.",
    whenAndTips:
      "May–September (winter) is the only season comfortable for daytime outdoors and is the peak season, so book Uluṟu-area accommodation far ahead. Summer is extremely hot and midday is no time to hike. Driving into the desert means carrying plenty of fuel and water, logging your route, and watching for livestock and wild camels on the road. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  katherine: {
    identity:
      "Katherine is in the Northern Territory, about a 3-hour drive south of Darwin, with about 6,000 people — the largest settlement in the Territory's \"Top End\" after Darwin, and the crossroads of the north–south Stuart Highway and east–west routes. It is right beside Nitmiluk (Katherine Gorge) National Park; the local Jawoyn people call the area Nitmiluk.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Katherine (Katherine Town Council; ~9,600 2021; Katherine River; Nitmiluk Gorge ~30 km; RAAF Tindal; Stuart Highway; Darwin 320 km)
    howItWorks:
      "Katherine is the hub town of the southern Northern Territory, governed by the Katherine Town Council with about 9,600 people in 2021; the council runs local services and the rest belongs to the territory. The town lies on the Katherine River at the crossing of the Stuart Highway and the Savannah Way, Darwin 320 km north and RAAF Base Tindal outside town; Nitmiluk Gorge lies about 30 km north-east in a national park jointly managed with the Jawoyn. Newcomers most often go wrong by expecting the gorge in town, when it lies half an hour away in the park and the town itself is a highway supply stop.",
    layout:
      "The town runs along the Katherine River and the highway and is only a few streets. The Nitmiluk gorges are about 30 km east, Edith Falls is to the north, and open wilderness and, further on, Western Australia lie to the south-west.",
    gettingAround:
      "Katherine's civilian flights use nearby Tindal (also an air force base), with few services; most people drive from Darwin or take a coach. The town is walkable; reaching the gorge and falls needs a rental car or tour. The tropical climate has only a dry and a wet season: the dry (May–October) is sunny, about 14–32 °C, and is the tourist season; the wet (November–April) is hot and stormy, the river rises sharply, and some trails and roads close.",
    culture:
      "There are large areas of Jawoyn and other Aboriginal land around Katherine, and Nitmiluk National Park is jointly managed by the traditional owners and the NT parks agency. Entering Aboriginal land or leaving the main roads needs a permit. Tipping is not required.",
    seeAndDo:
      "Nitmiluk Gorge — by boat, kayak or the gorge walking tracks; swimming at Edith Falls (Leliyn); Katherine Hot Springs; the Cutta Cutta caves. Further south are the Mataranka thermal pools and the Roper River area.",
    whenAndTips:
      "The dry season (especially June–August) is the only comfortable time and the only time for water activities. In the wet the river runs too fast and crocodile range expands, so most water activities stop. Do not enter any water that may hold saltwater crocodiles — swim only where it is clearly signed safe. Sun protection and insect repellent. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  broome: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Shire of Broome LGA 2025-06-30 ERP = 19,193（2024 年 19,001，+1.0%）。
    identity:
      "Broome is on the Kimberley coast of north-western Western Australia, with about 19,000 people (June 2025, Australian Bureau of Statistics) — a remote seaside town known for its red rock coast, long beaches and pearling history, about 2,200 km from Perth. It is the gateway to the Kimberley region by sea.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Shire of Broome LGA 2025-06-30 ERP = 19,193。
    howItWorks:
      "Broome is the largest town of the Kimberley, governed by the Shire of Broome with about 19,000 people in June 2025; the shire runs local services and the rest belongs to the state, with Perth more than 2,000 km south. The town has two parts: the old town around 'Chinatown', the quarter left by the pearling industry of the 1880s, with the cemetery of Japanese, Chinese and Malay divers recording that history; and Cable Beach a few kilometres west as the resort strip. The Yawuru won native title over this land in 2006. Newcomers most often go wrong by taking Broome for Cable Beach, when the town centre lies on the bay on the other side and the two are a drive apart.",
    layout:
      "Broome is on a peninsula: the west side is the roughly 22-km Cable Beach (facing the Indian Ocean, for sunsets), the east side the mangroves and big tidal mudflats of Roebuck Bay. The Chinatown area is the old town centre, now a dining and shopping district. The town is small in scale.",
    gettingAround:
      "The airport is almost within the town — use a taxi/rideshare or an accommodation transfer. In town you can rent a car or cycle, and Cable Beach has a bus. Kimberley inland roads (such as the Gibb River Road) are mostly unsealed and close in the wet, so driving them needs a 4WD and full preparation, or a tour. The tropical climate: the dry (May–October) is sunny, about 20–30 °C, and is the peak season; the wet (November–April) is hot and stormy with frequent tropical cyclones, and many trips stop running.",
    culture:
      "Broome historically drew Aboriginal people and pearling workers from across Asia, so its population is very mixed. The surrounding area is the country of the Yawuru and other Aboriginal peoples, and places like Cable Beach are jointly managed. The tidal range is huge (up to about 9 m), so tide-pooling and viewing the dinosaur footprints go by the tide table. Tipping is not required.",
    seeAndDo:
      "Sunset and camel rides on Cable Beach; the \"Staircase to the Moon\" (a band of light the moon makes on the mudflats at low tide on certain dates); the dinosaur footprints at Gantheaume Point (visible at low tide); the pearling history and the Japanese cemetery (a solemn historic site); a starting point for the Kimberley by land or by sea.",
    whenAndTips:
      "The dry season (May–September) has the best weather and is the peak season, with expensive accommodation that needs booking ahead. The wet is hot, roads often close, and cyclone risk is high. The tidal range is huge, so check the tide before going in the sea, tide-pooling or walking the mudflats; northern waters have dangerous jellyfish in the wet season. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  exmouth: {
    identity:
      "Exmouth is on a peninsula in north-western Western Australia, with about 2,800 people — the gateway town to Ningaloo Reef, one of the few places in the world where you can swim to a coral reef straight from the beach. The town is named after Viscount Exmouth, a British admiral (there is also a town of Exmouth in Devon, England). Cape Range National Park is alongside it.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Exmouth (Shire of Exmouth; ~2,800 2021, ~6,000 in season; founded 1964/1967 for Harold E. Holt naval station; Ningaloo on the west side of the cape ~40 km; Learmonth airport 37 km)
    howItWorks:
      "Exmouth is a small town on the North West Cape of Western Australia, governed by the Shire of Exmouth with about 2,800 people in 2021, rising to 6,000 in season; the shire runs local services and the rest belongs to the state. The town was built in 1964 for the US naval communication station and stands on the east side of the cape; Ningaloo Reef and Cape Range National Park lie on the west side about 40 km away, World Heritage since 2011, with whale-shark season from March to July; the airport is at Learmonth 37 km south. Newcomers most often go wrong by expecting the reef at the edge of town, when it lies on the far side of the cape and every day starts with a drive.",
    layout:
      "The town is on the east side of the peninsula, on Exmouth Gulf, and is only a few streets. Ningaloo Reef and Cape Range National Park are on the west side — Coral Bay, Turquoise Bay and Yardie Creek gorge are all over there, about 40 minutes to an hour's drive from town. Learmonth Airport is at the southern tip.",
    gettingAround:
      "Flights use Learmonth Airport about 35 km south of town, with few services; you can also drive from Perth (about two days). Getting around town and to the park needs your own car, and some park areas require pre-booking parking or snorkelling slots online. The peninsula is hot and dry: summer (December–March) often exceeds 38 °C with cyclone risk; winter (June–August) is about 10–25 °C and the most comfortable. The water is swimmable year-round.",
    culture:
      "The small town revolves around ocean activities and is very slow-paced. The Ningaloo coast is the traditional sea country of the Yinigudura and other Aboriginal groups. Tides and currents strongly affect snorkelling safety, so follow local and park guidance. Tipping is not required.",
    seeAndDo:
      "Snorkelling on Ningaloo Reef (the \"drift snorkel\" at Turquoise Bay and Coral Bay); swimming with whale sharks from March to August (licensed, tightly regulated trips), with humpback whales visible in late winter and early spring; a boat trip up Yardie Creek gorge to see black-footed rock wallabies; driving up Cape Range for views of the peninsula and the Coral Sea.",
    whenAndTips:
      "April–October has the best weather and sea conditions; the whale shark season (about March–August) is the peak and trips need booking ahead. Summer is extremely hot and November–April has cyclones. When snorkelling, watch for rips and tides, and never stand on or touch the coral. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  "coober-pedy": {
    identity:
      "Coober Pedy is in the desert of northern South Australia, halfway along the road and rail line between Adelaide and Alice Springs, with about 1,800 people — one of the world's main sources of opal. Because the surface is so hot, many homes, hotels and churches here are dug underground. The name comes from the Aboriginal Kokatha term kupa piti.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Coober Pedy (District Council of Coober Pedy; 1,437 2021; opal 1915; dugouts; Stuart Highway; Adelaide 846 km; Umoona)
    howItWorks:
      "Coober Pedy is an opal-mining town in the South Australian outback, governed by the District Council of Coober Pedy with about 1,400 people in 2021, Adelaide 846 km south; the council runs local services and the rest belongs to the state. After opal was found in 1915 the town grew among more than seventy opal fields, and summer heat above 40°C sends half the residents into dugouts cut into the hillsides, with churches and hotels underground too; since the Stuart Highway was sealed in 1987 tourism has become the second industry. Newcomers most often go wrong by looking for the town centre above ground, when most of the town is below it and the surface is mullock heaps and a few streets.",
    layout:
      "On the surface it is a brown plain covered with mining spoil heaps (like small cones), with fuel stations, shops and mine entrances along a few main streets. A good part of the real \"town\" is underground — the temperature-stable dugout hotels and homes are cool in summer and warm in winter. The surrounding desert is often used as a film location for science fiction.",
    gettingAround:
      "There is a small airport with very few flights; most people drive the Stuart Highway or take a coach. The town is small and walkable; reaching the surroundings (the Moon Plain, the Dog Fence, the Painted Desert) needs a rental car or tour, and some roads are unsealed. The climate is extreme desert: summer days often exceed 40 °C, winter days about 20 °C with nights near 0 °C, and almost no rain.",
    culture:
      "Coober Pedy's residents come from dozens of countries (many descended from migrants who came to mine), and it is a practical, rough-edged mining town. There is Aboriginal land around it, and areas off the main roads need a permit to enter. The mine fields are full of unfenced vertical shafts — never walk backwards or wander at night outside marked areas. Tipping is not required.",
    seeAndDo:
      "Touring the underground homes, underground churches and an opal mine museum; \"noodling\" through mine tailings to try your luck; the \"Moon Plain\" and a section of the Dog Fence (the wild-dog barrier fence); the Painted Desert mesa country to the north-east.",
    whenAndTips:
      "April–September (winter) is the only season for daytime outdoors. Summer is extremely hot and no time for outdoor activity. Driving unsealed roads means carrying a spare tyre, water and a communication device, and logging your route. Never go near an unfenced old shaft. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  // ── Australia batch 2 (2026-09-05): major urban areas by state/territory ──
  wollongong: {
    identity:
      "Wollongong is New South Wales' third-largest city, about 85 km south of Sydney in the Illawarra region, with an urban population of about 306,000 (2021 census). It occupies a narrow coastal plain between the Tasman Sea and the Illawarra Escarpment — sheer sandstone cliffs behind, a string of beaches in front. It grew on coal and the steelworks of Port Kembla (gazetted as a town in 1834, a city in 1942) and is today a university town and a weekend seaside escape for Sydneysiders. The traditional owners are the Dharawal people.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Wollongong (City of Wollongong LGA ~220,000; metro 305,691 2021 incl. Shellharbour/Kiama councils; escarpment strip; Port Kembla; UOW; train ~1.5 h to Sydney)
    howItWorks:
      "Wollongong is the third city of New South Wales, its city council area holding about 220,000 people in 2021 and the metropolitan area with the Shellharbour and Kiama councils to the south about 305,000; the council runs local services, while police, schools and rail belong to the state. The city is a narrow strip between the Illawarra escarpment and the sea, with the centre by the shore, the Port Kembla steelworks to the south, the University of Wollongong to the west and trains about an hour and a half to Sydney. Newcomers most often go wrong by taking the whole Illawarra coast for Wollongong, when Shellharbour and Kiama are councils of their own.",
    layout:
      "The city runs north–south along the coast, with the centre and Wollongong Harbour (lighthouse, beaches) in the middle. North is a chain of beach suburbs, and farther north the Sea Cliff Bridge (opened 2005) hangs out over the sea from the cliff road. West, on top of the escarpment, the Mount Keira lookout (464 m) surveys the whole coastline. South are the Port Kembla industrial area and Nan Tien Temple (1995), one of the largest Buddhist temples in the Southern Hemisphere. About 40 km farther south is the Kiama Blowhole.",
    gettingAround:
      "Wollongong's local Shellharbour Airport (WOL) has had no scheduled flights since May 2026, so access is via Sydney Airport (about 74 km). The train from Sydney Central takes about 1.5 hours along the coast through the Royal National Park. Local buses (some inner-city routes are free) and taxis serve the city, and the centre and harbour are walkable; the Sea Cliff Bridge and Mount Keira need a car or bus. The climate is temperate maritime — mild all year, occasionally humid in summer, rarely below 5°C in winter.",
    culture:
      "English is spoken in a diverse migrant city. Nan Tien is a working Buddhist temple — dress modestly, remove shoes and keep quiet in the main hall. Swim between the patrolled flags; rips are common. Locals identify with the city's steel and coal working history, and the 1902 Mount Kembla mine disaster (96 dead) is a key chapter in that story. Tipping is not expected.",
    seeAndDo:
      "The Sea Cliff Bridge (walk or drive it, for the cliffs and the sea); the Mount Keira and Bulli Pass lookouts over the escarpment and coast; Wollongong Harbour's lighthouse and North Beach; Nan Tien Temple (and its vegetarian restaurant); the Illawarra Fly treetop walk on the escarpment; the Kiama Blowhole to the south; coastal walks through the Royal National Park to the north.",
    whenAndTips:
      "October–April is best for beaches, with January–February the hottest; winter is mild and good for walks and whale watching (humpbacks pass June–November). The Sea Cliff Bridge is busy at weekends — go early. A day trip from Sydney is easy; an overnight gives two sunrises. Sunscreen is essential under Australia's strong UV.",
  },
  "byron-bay": {
    identity:
      "Byron Bay is a seaside town in the far north-east corner of New South Wales with only about 6,300 residents (2021 census) but around two million visitors a year. Cape Byron beside the town is the easternmost point of mainland Australia, and a lighthouse built in 1901 crowns the headland. Known since the 1970s for surfers and its alternative community, it is today famous for beaches, surfing, whale watching, yoga and music festivals. The traditional owners are the Arakwal people of the Bundjalung Nation; the traditional name, Cavvanbah, means 'meeting place'.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Byron Bay 有独立于 Byron Shire 的 SUA 编码：Byron Bay SUA 2025-06-30 ERP = 11,482；Byron Shire LGA = 38,784，是镇本身的约 3.4 倍，务必不要用郡数字冒充镇数字。
    howItWorks:
      "Byron Bay is a seaside town on the north coast of New South Wales with about 11,000 permanent residents in the urban area in June 2025, part of Byron Shire (about 39,000 across the shire, seat at Mullumbimby); the shire runs local services and the rest belongs to the state. The town lies below Cape Byron, the easternmost point of the mainland, with the lighthouse on the headland, some 2 million visitors a year pouring into a town of a few thousand and house prices among the highest in the country; Bangalow and Mullumbimby in the hinterland are another life, and the airport is at Ballina 30 km south. Newcomers most often go wrong by taking Byron Bay for a city, when it is one town in a shire whose government sits elsewhere.",
    layout:
      "The town sits on the bay west of Cape Byron, its main street Jonson Street a few minutes' walk from Main Beach. The cape juts east into the Pacific; the coastal walk from town to the lighthouse is about 4 km, passing Wategos Beach and the easternmost-point lookout. North of town is the long Tallow Beach, south along the coast Suffolk Park and Broken Head. Inland are rolling hills and small towns (Bangalow, Nimbin). The airport is at Ballina to the south.",
    gettingAround:
      "Byron Bay has no airport of its own; the nearest are Ballina Byron Gateway (BNK, about 35 km, Sydney and Melbourne flights) and Gold Coast Airport (OOL, about 66 km, more routes), both with shuttle buses to town; Brisbane Airport is about 173 km. Walk or cycle in town; the lighthouse can be reached on foot, by bike or shuttle, and the hinterland towns need a hire car. The climate is humid subtropical — warm, humid summers with thunderstorms (over 1,500 mm of rain a year) and mild, dry winters.",
    culture:
      "English is spoken. The town has a strong environmental, wellness and creative streak, with plenty of organic and vegetarian food. Swim between the flags, with surfing zones separate from swimming zones. The lighthouse and cape walk lie in a national park — take nothing away, and keep your distance from whales. The Bluesfest at Easter is the town's biggest event. Tipping is not expected.",
    seeAndDo:
      "Cape Byron Lighthouse and the easternmost-point lookout (sunrise; humpback whales June–November); the Cape Byron coastal walk; surfing and swimming at Main Beach and Wategos; a walk along Tallow Beach; the town's markets and cafés; inland to Bangalow and Nimbin, or a hike to Minyon Falls; kayaking with dolphins.",
    whenAndTips:
      "September–November and March–May are most comfortable and less crowded; December–January and the Easter festival period bring very tight, expensive accommodation. Summer afternoons often bring storms. Parking in town is scarce and paid — walk or cycle. The lighthouse path has steep sections; carry water and sun protection.",
  },
  "coffs-harbour": {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   City of Coffs Harbour LGA 2025-06-30 ERP = 82,109（2024 年 81,529，+0.7%）。
    identity:
      "Coffs Harbour lies on the Mid North Coast of New South Wales, about 530 km north of Sydney and 390 km south of Brisbane, with a population of about 82,000 in the local government area (June 2025, Australian Bureau of Statistics). It is the only place in New South Wales where the Great Dividing Range reaches the Pacific, so mountain rainforest and coast meet within a few kilometres. Timber and banana growing built the town, and the Big Banana of 1964 was one of Australia's first 'big things'; today it is about beaches, a marine park and its role as gateway to the Gondwana rainforests World Heritage Site. The traditional owners are the Gumbaynggirr people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   City of Coffs Harbour LGA 2025-06-30 ERP = 82,109。
    howItWorks:
      "Coffs Harbour is a city on the mid-north coast of New South Wales, governed by the City of Coffs Harbour with about 82,000 people in June 2025; the council runs local services and the rest belongs to the state. The centre lies on the inland side by the Pacific Highway, the harbour and the timber jetty a few kilometres away on the shore with Muttonbird Island joined by the breakwater, the Big Banana on the highway to the north and the airport to the south; a highway bypass is under construction. This is Gumbaynggirr country. Newcomers most often go wrong by expecting the centre on the beach, when the railway and a few kilometres of road lie between the centre and the harbour.",
    layout:
      "The town sits on the coastal plain, with the harbour and the old timber jetty east of the centre; the breakwater links to Muttonbird Island Nature Reserve, a breeding ground for wedge-tailed shearwaters. North along the coast are Park Beach and a string of beach suburbs, with the Big Banana on the Pacific Highway north of town; the Solitary Islands Marine Park runs about 75 km north from here. About 60 km west, up on the range, is Dorrigo National Park, part of the Gondwana Rainforests World Heritage Site. The airport is about 3 km south of the centre.",
    gettingAround:
      "Coffs Harbour Airport (CFS), about 3 km south, has scheduled flights. The Sydney–Brisbane coastal train takes about 9 hours; most people drive the Pacific Highway or fly. Local buses exist but the sights are scattered, so a hire car is easiest. The climate is humid subtropical — hot, wet summers (about 1,700 mm of rain a year) and mild winters.",
    culture:
      "English is spoken. Muttonbird Island is a bird breeding site — stay on the path and do not disturb burrows (the shearwaters breed from September to April). Swim between the flags. The harbour has fishing and yachting, seafood leads the menu, and bananas and blueberries are the local produce. Tipping is not expected.",
    seeAndDo:
      "The Muttonbird Island walk (shearwaters returning at dusk, whales in season); the old jetty and harbour beach; the Big Banana park; diving and snorkelling in the Solitary Islands Marine Park; the Skywalk and rainforest waterfalls of Dorrigo National Park; the Bellinger valley; Woolgoolga's beach and its Sikh temple to the north.",
    whenAndTips:
      "Any season works: summer (December–February) has the warmest sea but the most rain, September–November and March–May are the most comfortable, and winter is clear and mild with humpbacks passing June–October. Dorrigo on the range is much cooler and wetter than the coast — bring a jacket and rain gear. Beach campsites and lodging book out in the holidays.",
  },
  katoomba: {
    identity:
      "Katoomba is the main town of the Blue Mountains, on the Great Dividing Range about 100 km west of Sydney at an elevation of about 1,017 m, with a population of about 8,300 (2021 census). The mountains take their name from the blue haze of eucalyptus oil in sunlight, and the Greater Blue Mountains Area was inscribed as a natural World Heritage Site in 2000. Katoomba has been a hill resort for Sydney since the 1880s, and Echo Point south of town looks straight at the Three Sisters and the sandstone walls of the Jamison Valley. The name comes from an Aboriginal word meaning 'shining, falling water'. The traditional owners are the Gundungurra and Darug peoples.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Katoomba (8,268 2021; chief town of City of Blue Mountains ~80,000, a string of towns along highway/railway; Three Sisters/Echo Point 2 km; train ~2 h; Greater Blue Mountains WHA 2000)
    howItWorks:
      "Katoomba is the chief town of the City of Blue Mountains, with about 8,300 people in 2021; the city is not one town but a string of some twenty along the Great Western Highway and railway, about 80,000 people in all, whose council runs local services while the national park belongs to the state. Echo Point, the lookout for the Three Sisters, lies 2 km south of town with Scenic World beside it, the train reaches Sydney in about two hours, and the Greater Blue Mountains were inscribed as World Heritage in 2000. Newcomers most often go wrong by taking Katoomba for the entrance to the Blue Mountains, when the mountains are a ridge of dozens of towns, each opening onto a different valley.",
    layout:
      "The town lies along the Great Western Highway and railway, with the station at the northern end of the main street, which runs about 2 km downhill south to Echo Point. Echo Point is the frontal viewpoint for the Three Sisters, with the Giant Stairway descending to the valley floor; Scenic World, west of Echo Point, has the 52-degree Scenic Railway (among the steepest passenger railways in the world), a cableway and skyway, and a rainforest boardwalk on the valley floor. Neighbouring Leura to the east has gardens and cliff walks, then Wentworth Falls; west are Blackheath and the lookouts over the Grose Valley.",
    gettingAround:
      "Katoomba has no airport with scheduled flights; Sydney Airport is about 1.5–2 hours away. The Blue Mountains Line runs from Sydney Central directly to Katoomba station in about 2 hours — the easiest way. A hop-on bus links Echo Point, Scenic World and Leura, and walking works too (about 30 minutes to Echo Point). The climate is cool temperate, 5–10°C below Sydney, with occasional winter snow and frequent valley mist.",
    culture:
      "English is spoken. The Blue Mountains are a national park and World Heritage Site — stay on tracks, take no plants, and watch fire-danger notices in the summer bushfire season. Lookouts have railings; do not climb over. The town has Art Deco buildings and cafés, and hosts a Northern-Hemisphere-style 'Yulefest' in winter. Tipping is not expected.",
    seeAndDo:
      "The Three Sisters from Echo Point; Scenic World's railway, skyway, cableway and valley boardwalk; the Prince Henry Cliff Walk from Katoomba to Leura; Katoomba Falls; the gardens and Everglades of Leura; the cliff walks at Wentworth Falls; Govetts Leap lookout and the Grose Valley at Blackheath; the Jenolan limestone caves (about 1.5 hours' drive).",
    whenAndTips:
      "October–November and March–May are most comfortable, and Leura's autumn leaves are the highlight; summer brings high fire risk and occasional closures; winter is cold with occasional snow scenes. Weather is more changeable than Sydney's — bring a jacket and rain gear. Scenic World queues in peak season, so go early. A day trip from Sydney works; an overnight gives the morning cloud sea.",
  },
  ballarat: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   City of Ballarat LGA 2025-06-30 ERP = 122,661（2024 年 120,559，+1.7%）。
    identity:
      "Ballarat lies in the central highlands of Victoria about 110 km north-west of Melbourne, with a population of about 123,000 in the local government area (June 2025, Australian Bureau of Statistics) — one of Australia's most populous inland cities. Gold was found here in August 1851 and tens of thousands of diggers poured in within a few years; the Eureka Stockade of 3 December 1854, an armed miners' protest against the licence system in which 22 miners died, is regarded as a defining moment in Australian democratic history. The gold era left broad tree-lined boulevards and Victorian streetscapes, and Sovereign Hill, an open-air museum opened in 1970, recreates the 1850s goldfield town. The traditional owners are the Wadawurrung people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   City of Ballarat LGA 2025-06-30 ERP = 122,661。
    howItWorks:
      "Ballarat is an inland city of Victoria, governed by the City of Ballarat with about 123,000 people in June 2025, Melbourne 110 km south-east and about an hour by train; the council runs local services and the rest belongs to the state. The gold rush of 1851 built the city, the Victorian stone buildings of Lydiard Street are its legacy, the Eureka uprising of 1854 took place in the east of town, Sovereign Hill is a rebuilt gold town, and Lake Wendouree lies to the west. Newcomers most often go wrong by taking Ballarat for the site of a theme park, when it is a regional capital with a university and hospitals, and Sovereign Hill is one corner on its edge.",
    layout:
      "The centre lines Sturt Street, a boulevard running west from the railway station to Lake Wendouree past 19th-century banks, theatres and hotels; the Art Gallery of Ballarat (1884, Australia's oldest regional gallery) is in the centre. Lake Wendouree lies west of the city, with the botanical gardens on its shore and the rowing course used in the 1956 Melbourne Olympics. Sovereign Hill is on a hillside about 3 km south, and the Eureka Centre is in the east. Around the city are farmland and volcanic plains.",
    gettingAround:
      "Ballarat has no commercial airport; Melbourne Airport is about 1.5 hours away. V/Line trains from Melbourne's Southern Cross reach Ballarat in about 1.5 hours with frequent services — the easiest way. Local buses run, with buses and taxis to Sovereign Hill; the centre is walkable. The climate is temperate maritime at about 440 m, 3–5°C colder than Melbourne, with damp frosty winters, occasional snow and sometimes fierce summer heat.",
    culture:
      "English is spoken. Sovereign Hill is a recreated historic town with staff in period dress, gold panning and mine demonstrations; the Eureka Centre tells the story of 1854 and is a solemn historic site. The Begonia Festival (since 1953) is held by Lake Wendouree each March. The city keeps a Victorian-era pub and café culture. Tipping is not expected.",
    seeAndDo:
      "Sovereign Hill (gold panning, the underground mine tour, gold pouring — allow most of a day); the Art Gallery of Ballarat; the historic buildings of Sturt Street and the Mining Exchange; the Lake Wendouree circuit walk, the botanical gardens and the Prime Ministers' Avenue; the Eureka Centre; Ballarat Wildlife Park; the town of Creswick and the Daylesford spa country (about 40 km).",
    whenAndTips:
      "October–November and March–May are most comfortable, and March's Begonia Festival is the liveliest time; winter (June–August) is cold, though Sovereign Hill runs winter night-light events. A day trip from Melbourne is easy; give Sovereign Hill at least half a day. Pack for big swings between seasons.",
  },
  bendigo: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Bendigo SUA（城区）2025-06-30 ERP = 106,493（2024 年 105,610，+0.8%）。
    identity:
      "Bendigo lies in central Victoria about 150 km north-west of Melbourne, with an urban population of about 106,000 (June 2025, Australian Bureau of Statistics), the state's fourth-largest city. Gold was found on Bendigo Creek in October 1851 and the field became one of the richest in the world (more than 600 tonnes historically), its wealth leaving a stock of grand Victorian public buildings; Chinese miners left one of Australia's deepest Chinese histories, carried on today by the Golden Dragon Museum and the Easter dragon parade. The traditional owners are the Dja Dja Wurrung people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Bendigo SUA 2025-06-30 ERP = 106,493。
    howItWorks:
      "Bendigo is a city of north-central Victoria, governed by the City of Greater Bendigo over about 3,000 km² with about 106,000 people in the urban area in June 2025, Melbourne 150 km south; the council runs local services and the rest belongs to the state. The gold rush of 1851 built the city, officially named Sandhurst from 1853 to 1891, the Sacred Heart Cathedral and the Shamrock Hotel in the centre are buildings of that era, about a fifth of residents in the mid-nineteenth century were Chinese, the Golden Dragon Museum records that history, and in 2019 it was named a UNESCO City of Gastronomy. Newcomers most often go wrong by taking Bendigo for a mining town, when it is Victoria's fourth city and the headquarters of Bendigo Bank.",
    layout:
      "The centre is around Pall Mall, with the Alexandra Fountain, the post office, the Shamrock Hotel and Rosalind Park forming the core; the spire of Sacred Heart Cathedral (completed 1977, one of Australia's largest provincial churches) to the south-west is the city's landmark. Central Deborah Gold Mine, where visitors go underground, is south of the centre; the Golden Dragon Museum is on the east side of the centre in the Chinese precinct, beside a Chinese garden and the Guan Di temple. A vintage tram runs along the main streets. Around the city are low hills and eucalypt bush, with Bendigo Creek running through.",
    gettingAround:
      "Bendigo Airport has no scheduled passenger flights; Melbourne Airport is about 1.5–2 hours away. V/Line trains from Melbourne's Southern Cross take about 2 hours and are the usual way in. Local buses and the tourist tram run, and the centre is walkable. The climate is temperate with hot, dry summers and cool winters, and about 510 mm of rain a year.",
    culture:
      "English is spoken. Bendigo's Chinese community has continued since the gold rush; the giant Easter parade dragon (the old Sun Loong retired, replaced from 2019 by the new Dai Gum Loong) is a city emblem, and the Guan Di temple and Chinese garden are places for quiet. The underground mine tour requires hard hats and has height limits. Bendigo pottery and local wine are the specialities. Tipping is not expected.",
    seeAndDo:
      "The Central Deborah Gold Mine underground tour; the Golden Dragon Museum, Chinese garden and Guan Di temple; Bendigo Art Gallery (1887, with major touring exhibitions); Sacred Heart Cathedral; the tourist tram past Victorian streetscapes; Rosalind Park and its lookout tower; the Bendigo Pottery; the Heathcote wine region nearby.",
    whenAndTips:
      "March–May and September–November are most comfortable, and the Easter parade is the biggest event; summer (January–February) often tops 35°C, and winter mornings and evenings are cold. A day trip from Melbourne is easy; book ahead when the gallery has a major show. Combine with Ballarat and Daylesford for a goldfields loop.",
  },
  "sunshine-coast": {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Sunshine Coast SUA（城区）2025-06-30 ERP = 424,741。
    identity:
      "The Sunshine Coast lies in south-east Queensland about 100 km north of Brisbane — a coastal urban area about 60 km long with an urban population of about 425,000 (June 2025, Australian Bureau of Statistics; Australia's ninth-largest). It is not a single traditional city but a chain of seaside towns — Caloundra, Kawana, Maroochydore, Noosa — that have grown into one urban region, administered from Maroochydore. Beaches, Noosa National Park, the Glass House Mountains inland and the hill towns of Maleny and Montville are its four calling cards. The traditional owners are the Kabi Kabi and Jinibara peoples.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   **这条原来不是「数字过时」，是同一段里混用了两个口径**：34 万是 2021 年 LGA（阳光海岸区议会）数，42 万是 2025 年 SUA（城区）数，两句各自都对，但并排放会读成「一件事涨了 8 万人」。已统一到同一年份、两个口径各自标明：LGA 2025-06-30 ERP = 381,957，SUA = 424,741。
    howItWorks:
      "The Sunshine Coast is a local government formed in 2008 by merging the City of Caloundra with the shires of Maroochy and Noosa, from which Noosa broke away again in 2014; today's Sunshine Coast Region covers about 2,254 km², had about 382,000 residents in June 2025, with about 425,000 in the wider urban area. It has no traditional city centre: the council has designated Maroochydore as a newly built central business district, Caloundra and Nambour inland are the other main centres, and the coastal towns run one after another in a strip. Trains and buses are run by the Queensland government, and daily travel depends almost entirely on cars. This is the country of the Kabi Kabi and Jinibara peoples. Addresses name the suburb, QLD and a postcode. Newcomers most often go wrong by looking for a 'Sunshine Coast city centre' that does not exist, when life here is spread among a chain of coastal towns, each with a character of its own.",
    layout:
      "The coast runs from Caloundra, Kawana and Mooloolaba (marina, beach) in the south, through Maroochydore (the commercial centre at the mouth of the Maroochy River), to Noosa in the north (Noosa Heads, the Noosa River, Hastings Street), with beaches and surf breaks all the way. Inland to the west are the hills of the Blackall Range: the Glass House Mountains (volcanic plugs named by Captain Cook in 1770) in the southern hinterland, Australia Zoo at Beerwah, Maleny and Montville on the ridge above the coast, and the Eumundi markets in the Noosa hinterland. The airport is at Marcoola, about 10 km north of Maroochydore.",
    gettingAround:
      "Sunshine Coast Airport (MCY) at Marcoola has scheduled flights; from Brisbane Airport it is about 1.5 hours by car, or train to Landsborough or Nambour and a bus. Local buses exist but the towns are spread out, and almost everyone hires a car. The climate is humid subtropical — hot, humid summers (December–March) with storms, and clear mild winters (June–August) that draw southern visitors.",
    culture:
      "English is spoken. Swim between the flags in a strong surf culture; take nothing from the Noosa National Park tracks, where koalas are sometimes seen. The Eumundi markets (Wednesday and Saturday) are among Australia's largest craft markets. Mooloolaba prawns, hinterland ginger (the Buderim ginger factory) and tropical fruit are the local produce. Tipping is not expected.",
    seeAndDo:
      "Noosa (Hastings Street, the coastal track through Noosa National Park, boating on the Noosa River); Mooloolaba beach and its aquarium; the Glass House Mountains lookouts and walks; Australia Zoo; the Eumundi markets; the ridge towns and views of Maleny and Montville; the Caloundra foreshore walk with views of Bribie Island; Kondalilla Falls in the hinterland.",
    whenAndTips:
      "It works year-round: April–October is most comfortable and driest, and June–August is the peak for southern visitors escaping winter; December–February is humid with afternoon storms and crowded beaches in school holidays. Noosa lodging books out in holidays and parking is tight. The hinterland is cooler than the coast — bring a jacket.",
  },
  townsville: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Townsville SUA（城区）2025-06-30 ERP = 190,551（2024 年 188,799，+0.9%）。原文「人口约20万」既没有年份也没有口径。
    identity:
      "Townsville is the largest city in northern Queensland, on the dry-tropics coast about 350 km south of Cairns, with an urban population of about 191,000 (June 2025, Australian Bureau of Statistics), founded in 1864. It is the administrative, military and educational centre of North Queensland (James Cook University's main campus, Lavarack Barracks) and the gateway to the central Great Barrier Reef and Magnetic Island; Castle Hill (286 m), a granite monolith behind the centre, and The Strand waterfront are the city's living room. Unlike Cairns it enjoys about 300 sunny days a year in the 'dry tropics'. The traditional owners are the Wulgurukaba and Bindal peoples.",
    // howItWorks sources: Wikipedia (2026-09): City of Townsville (2008 Thuringowa merger; 3,731 km²; Bindal/Wulgurukaba); ABS ERP 2025-06 SUA
    howItWorks:
      "Townsville is the largest city in northern Australia, with about 191,000 residents in its urban area in June 2025. In 2008 the City of Townsville merged with the City of Thuringowa to its west into a single council, and today the City of Townsville governs about 3,731 km², from Alligator Creek in the south to the Paluma range in the north, with Magnetic Island offshore included. Schools, hospitals, buses and police belong to the Queensland government. The city is arranged around Castle Hill, with the business district on a peninsula by the sea, and the defence base and James Cook University are the two pillars of its economy. This is the country of the Bindal and Wulgurukaba peoples. Addresses name the suburb, QLD and a postcode. Newcomers most often go wrong by picturing Townsville as a resort city like Cairns, when its economy rests on defence, the university and the port.",
    layout:
      "The centre lies on Cleveland Bay north of the Ross River mouth, with Castle Hill rising straight behind it — a road and walking tracks lead to the lookout. The Strand runs north along the shore with beaches, pools and parks; south is the large cargo and naval port. Magnetic Island lies about 8 km offshore, a 20–25 minute ferry ride, with bays and a national park. The airport is about 4 km west of the centre. South along the Bruce Highway are Ayr and Bowen; west inland is the gold town of Charters Towers.",
    gettingAround:
      "Townsville Airport (TSV), about 4 km west of the centre and shared with an RAAF base, has scheduled flights. The Spirit of Queensland train from Brisbane takes about 24 hours. City buses run, the centre and The Strand are walkable, and Magnetic Island is reached by passenger and car ferries. The climate is tropical savanna: December–March is the wet, hot season, May–September dry and sunny.",
    culture:
      "English is spoken in a city with many soldiers and students. Marine stinger season runs from November to May — swim only in netted enclosures; Magnetic Island's koalas and rock wallabies are wild, so do not feed them. The Museum of Tropical Queensland holds relics of HMS Pandora. The Strand has weekend markets. Tipping is not expected.",
    seeAndDo:
      "Castle Hill lookout (sunrise and sunset); The Strand, its rock pool and water park; the Museum of Tropical Queensland; Magnetic Island (Horseshoe Bay, Arcadia, the Forts walk for koalas, snorkelling); Great Barrier Reef trips (the SS Yongala wreck is a world-renowned dive); crocodiles at the Billabong Sanctuary; the gold-rush town of Charters Towers; the Paluma rainforest.",
    whenAndTips:
      "May–October is most comfortable, sunny and dry; December–March is hot, humid and carries cyclone risk. Follow stinger-season rules and wear a stinger suit in the sea. Ferries to Magnetic Island are frequent, and a night on the island is more relaxed. The Castle Hill track is exposed — walk it early or late.",
  },
  toowoomba: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   排名复核：2025-06-30 SUA 表里人口多于图文巴（153,781）的内陆城区只有堪培拉—奎恩比恩（521,049），其余更大的都是沿海城区。断言成立，补口径限定。
    identity:
      "Toowoomba sits on the crest of the Great Dividing Range in south-east Queensland, about 130 km west of Brisbane at about 690 m, with an urban population of about 154,000 (June 2025, Australian Bureau of Statistics) — by urban-area population Australia's second most populous inland city after Canberra. It is known as the 'Garden City', and its Carnival of Flowers has been held every September since 1949; the highland climate is cooler than the Queensland coast, with winter frosts. Wellcamp Airport, opened in 2014, was the first major new civilian airport built in Australia in decades. The traditional owners are the Giabal and Jarowair peoples.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03。**城市级人口用这个年度 ERP，不用五年一次的普查数。**
    //   Toowoomba SUA 2025-06-30 ERP = 153,781。
    //   同条目的「澳大利亚人口第二多的内陆城市」排名断言已用 2025 年 ABS 城区表全量排序复核：全国城区人口比图文巴多的内陆城区只有堪培拉—奎恩比恩（521,049），巴拉瑞特（120,939）与本迪戈（106,493）都在其后，**断言仍成立**；正文已补上「按城区人口计」的口径限定，避免被读成行政区排名。
    howItWorks:
      "Toowoomba is the second most populous inland city in Australia, governed by the Toowoomba Regional Council over about 13,000 km² with about 154,000 people in the urban area in June 2025, Brisbane 132 km east; the council runs local services and the rest belongs to the state. The city sits on the crest of the Great Dividing Range at about 700 m, most of it west of the divide, the gateway to the Darling Downs, its 159 parks earning it the name 'Garden City', the Carnival of Flowers each September its emblem, and Wellcamp airport privately built in 2014. Newcomers most often go wrong by taking Toowoomba for a suburb of Brisbane, when it lies on the far side of the range with a climate quite unlike the plain.",
    layout:
      "The city stands on a plateau on the ridge top, its eastern edge the escarpment of the range, where lookouts such as Picnic Point overlook the Lockyer Valley towards Brisbane. The centre is around Ruthven Street, with Queens Park and the botanic gardens east of the centre as the main carnival venue. West, gentle slopes open onto the farmland of the Darling Downs. The airport is about 16 km west of the centre. Nearby are Crows Nest National Park and, about 150 km north-west, the Bunya Mountains.",
    gettingAround:
      "Toowoomba Wellcamp Airport (WTB), about 16 km from the centre, has a Sydney service and regional flights into outback Queensland; from Brisbane Airport it is about 1.5–2 hours by car, which is how most people come, and there are airport shuttles. City buses run and the centre is walkable. The climate is humid subtropical highland — warm summers, cool frosty winters, and rare snow.",
    culture:
      "English is spoken. September's Carnival of Flowers (floral parade, garden competitions, food festival) is the city's biggest event; private gardens open during it, so follow the owners' directions. The Cobb+Co Museum holds Australia's largest collection of horse-drawn vehicles, and the Empire Theatre is among the largest regional theatres in Australia. Street murals are everywhere downtown. Tipping is not expected.",
    seeAndDo:
      "Picnic Point lookout over the escarpment; Queens Park and the botanic gardens (spring flower displays); the Ju Raku En Japanese garden; the Cobb+Co Museum; the Empire Theatre; the downtown mural walk; walks in Crows Nest National Park; north-west to the rainforest and bunya pines of the Bunya Mountains.",
    whenAndTips:
      "September's carnival is the liveliest and the tightest for lodging; March–May and October–November are comfortable; winter mornings and evenings are cold. A day trip from Brisbane is easy. Highland UV is strong — sunscreen is essential.",
  },
  "airlie-beach": {
    identity:
      "Airlie Beach is a resort town on the central Queensland coast with only about 1,300 permanent residents (2021 census), yet it is the departure port for the Whitsundays and the central Great Barrier Reef. Seventy-four islands are scattered beyond the bay; Whitehaven Beach on Whitsunday Island is famous for its almost pure white silica sand, and Hamilton Island is the main resort island. The town itself centres on a seafront lagoon, marinas and sailing and island-hopping trips. The traditional owners are the Ngaro people.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Airlie Beach (1,312 2021; Whitsunday Region, seat Proserpine; two marinas; lagoon; Whitsunday Coast airport 39 km at Proserpine)
    howItWorks:
      "Airlie Beach is a resort town on Queensland's Whitsunday coast with about 1,300 permanent residents in 2021, part of the Whitsunday Regional Council whose seat is at Proserpine 26 km inland; the council runs local services and the rest belongs to the state. The town runs along one main street and two marinas as the departure point for the Whitsunday Islands and the reef, an artificial lagoon standing in for a sea that has stingers, and the airport lies at Proserpine 39 km south. Newcomers most often go wrong by taking Airlie Beach for the Whitsundays themselves, when the islands lie offshore and Whitehaven Beach is an hour or two by boat.",
    layout:
      "The town runs along a bay, with the main street, restaurants and bars in the middle and the free man-made lagoon pool (about 4,300 m²) on the waterfront. Two marinas (Coral Sea Marina and Port of Airlie) are the departure points. North is the rainforest of Conway National Park; south across a bay is Shute Harbour (the large ferry terminal). The Whitsunday Islands lie east beyond the bay, with Whitehaven Beach about 1.5–2 hours by boat and Hamilton Island having its own airport. The airport is near Proserpine to the south.",
    gettingAround:
      "Whitsunday Coast Airport (PPP), about 14 km south of Proserpine and about 40 km from town, has scheduled flights with shuttle buses; Hamilton Island Airport (HTI) has more routes, then a ferry to town. The railway station is at Proserpine. Walk in town, and take buses or taxis to Shute Harbour and around. The climate is tropical: November–April is hot, humid and wet with cyclone risk, May–October dry.",
    culture:
      "English is spoken in a resort town mixing backpackers and yachties, with lively nightlife. November to May is box-jellyfish season — wear a stinger suit in the sea or swim in the lagoon; choose licensed operators for boat trips. The reef and islands are marine parks — never touch coral or take shells. Tipping is not expected.",
    seeAndDo:
      "Island day trips or multi-day sailing (Whitehaven Beach, the Hill Inlet lookout over the swirling sand and water); snorkelling and diving on the outer reef; helicopter or seaplane flights over Heart Reef; Hamilton and Daydream islands; the Airlie Beach Lagoon; the walks and lookouts of Conway National Park; the Saturday foreshore markets.",
    whenAndTips:
      "June–October is most comfortable — steady winds, clear water, little rain — and the peak season; December–March is hot, humid and wet. Book boat trips ahead, and multi-day sailing well ahead. Bring seasickness tablets if prone. The sun on Whitehaven is fierce — carry plenty of sunscreen and water.",
  },
  albany: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   City of Albany LGA 2025-06-30 ERP = 42,308（2024 年 41,714，+1.4%）。
    identity:
      "Albany lies on Western Australia's south coast about 420 km south-east of Perth, with a population of about 42,300 in the local government area (June 2025, Australian Bureau of Statistics). A British post was established here on 26 December 1826, more than two years before Perth and Fremantle, making it the state's oldest colonial settlement. King George Sound is a natural deep-water harbour from which the first convoy of Anzac troops sailed in 1914 — the theme of the National Anzac Centre opened in 2014. The Gap and the Natural Bridge in Torndirrup National Park to the south are landmarks of the granite coast, and the whaling station that closed in 1978 was Australia's last. The traditional owners are the Menang people of the Noongar nation.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   City of Albany LGA 2025-06-30 ERP = 42,308。
    howItWorks:
      "Albany is a port city of Western Australia's Great Southern, governed by the City of Albany with about 42,300 people in June 2025, Perth 418 km north; the council runs local services and the rest belongs to the state. Founded in 1826, two years before Perth, it is the oldest colonial settlement in the state, its centre between two hills above Princess Royal Harbour; the ANZAC convoys sailed from King George Sound in 1914, the National Anzac Centre opened on the hill in 2014, and the whaling station closed in 1978 on the headland outside town is now a museum. Newcomers most often go wrong by taking Albany for a far-off town of Perth, when it is the oldest city in the state with a port and history of its own.",
    layout:
      "The city sits on hillsides above the north shore of Princess Royal Harbour, the old town between Mount Clarence and Mount Melville with a large stock of colonial buildings along Stirling Terrace and York Street. Princess Royal Harbour opens east into King George Sound, where the National Anzac Centre stands in Anzac Park on Mount Clarence. Across the harbour to the south is the Torndirrup peninsula with the Gap, the Natural Bridge and Whale World (the former whaling station); about 35 km east is Two Peoples Bay. The airport is about 11 km north-west.",
    gettingAround:
      "Albany Airport (ALH), about 11 km from the city, has flights only to Perth. Driving from Perth on Albany Highway takes about 4.5–5 hours, and long-distance coaches run. City buses serve town and the old centre is walkable; Torndirrup, Whale World and Two Peoples Bay need a car. The climate is Mediterranean — mild dry summers (rarely above 30°C), wet windy winters, and wind all year.",
    culture:
      "English is spoken. The National Anzac Centre and Anzac Park are memorial sites — keep quiet; the dawn service on 25 April is held on Mount Clarence. Seas at the Gap are violent — do not climb the railings, and stay off wave-washed rocks on the south coast, where swells are unpredictable. Southern right and humpback whales enter the sound June–October. Local wine (Great Southern region) and seafood are the specialities. Tipping is not expected.",
    seeAndDo:
      "The National Anzac Centre and Anzac Park; the Gap, the Natural Bridge and the blowholes of Torndirrup National Park; Whale World (the old whaling station museum); the colonial buildings of the old town (the old gaol, Patrick Taylor Cottage) and the replica Brig Amity; Middleton Beach; Little Beach and Waterfall Beach in Two Peoples Bay Nature Reserve; the end of the Bibbulmun Track; Bluff Knoll in the Stirling Range (about 1.5 hours' drive).",
    whenAndTips:
      "October–April is most comfortable; June–October is whale season but wet and windy. The south-coast sea is dangerous — swim only at patrolled beaches. Albany is far from Perth and is usually joined with Margaret River, Denmark and Esperance into a southern loop.",
  },
  busselton: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Busselton UCL（城区）2021 年普查 27,233 人 —— **ABS 只在普查年更新 UCL**，所以这个数不是过期，要等 2026 年普查结果公布才会有新数；正文已注明这一点。同一时点 City of Busselton LGA 为 46,184、Busselton SUA 为 46,023，范围都比 UCL 大得多，不能拿来替换。
    identity:
      "Busselton lies on Geographe Bay in Western Australia's south-west, about 220 km south of Perth, with a population of about 27,000 (2021 census; ABS does not update its urban-centre figures annually), the gateway to the Margaret River wine region and the Leeuwin–Naturaliste capes. Its landmark is the 1,841 m timber jetty reaching into the bay — the longest timber-piled jetty in the Southern Hemisphere, begun in 1864 and extended until the 1960s, with an underwater observatory at its end. The shallow, calm bay is one of Western Australia's favourite family beaches. The traditional owners are the Wadandi people of the Noongar nation.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   City of Busselton LGA 2025-06-30 ERP = 46,184（2024 年 45,189，+2.2%，西澳增速最快之一）。
    howItWorks:
      "Busselton is among the fastest-growing cities of Western Australia's south-west, governed by the City of Busselton with about 46,000 people in its area in June 2025, Perth 220 km north; the council runs local services and the rest belongs to the state. The town lies on the south shore of Geographe Bay, its timber jetty of 1,841 m running out to sea, the longest in the southern hemisphere; Dunsborough and Yallingup lie at the western end of the area, and the airport outside town. Newcomers most often go wrong by counting the Margaret River wine region as part of Busselton, when Margaret River belongs to another shire to the south and Busselton is only its northern gate.",
    layout:
      "The town runs along the southern shore of Geographe Bay, with the jetty striking straight out from the town beach and a little train along it. West along the bay are Dunsborough and Cape Naturaliste (lighthouse of 1903, whale lookouts); about 50 km south are Margaret River town and more than a hundred wineries, while Leeuwin-Naturaliste National Park runs down the coast from the north cape to Cape Leeuwin, with limestone caves (Ngilgi, Mammoth, Jewel) and surf beaches along the way. The airport is about 6.5 km south of town.",
    // gettingAround sources: 悉尼航线：2026-06-02 起暂停、公告恢复日 2026-09-21/22（因燃油成本上涨）—— 2 级（主流媒体引航司公告，2026-09-12 核）。墨尔本航线每周三班（周三/五/日）未受影响。⚠️ 原文「2026 年 9 月前暂停」这种写法会在到期日前后变成误导，已改成自带时点。下一轮（2026 年 10 月之后）回来确认是否真的复航。
    gettingAround:
      "Busselton Margaret River Airport (BQB), about 6.5 km from the centre, has a Melbourne service three times a week; the Sydney service has been suspended since June 2026 over fuel costs, with the airline giving a resumption date in late September, and as of mid-September 2026 it had not resumed; from Perth Airport it is about 2.5–3 hours by car, and coaches run. Walk or cycle in town; Margaret River, the caves and the wineries need a car. The climate is Mediterranean — warm dry summers, mild wet winters, and frequent sea breezes.",
    culture:
      "English is spoken. The jetty and its observatory are ticketed, with timed entry for the observatory. Wineries have set hours, most charge a tasting fee credited against purchases, and Australia's drink-driving limits apply if you are driving between them. Swim between the flags; the surf breaks are west around Yallingup. Humpback and blue whales pass September–December. Tipping is not expected.",
    seeAndDo:
      "The Busselton Jetty (walk it or ride the train) and the underwater observatory; the Geographe Bay beaches; Dunsborough and the Cape Naturaliste lighthouse walks; the wineries, breweries and chocolate factory of Margaret River; the Ngilgi and Mammoth limestone caves; the surf beaches and headland at Yallingup; the Cape Leeuwin lighthouse where two oceans meet (about 100 km); the karri forest of Boranup.",
    whenAndTips:
      "November–April is best for the beach, with the sea warmest in February; autumn (March–May) brings the grape harvest and winery events; winter is wet but mild, and whale season begins. Margaret River lodging fills at weekends and holidays. Book the underwater observatory in advance.",
  },
  "mount-gambier": {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   City of Mount Gambier LGA 2025-06-30 ERP = 28,057。
    //   **「南澳人口第二多的城市」这句已经不成立**：按 ABS 城区（SUA）口径，2025-06-30 维克托港—古尔瓦（Victor Harbor – Goolwa）30,900 已略微反超芒特甘比尔 30,875，只差 25 人，且前者 2023→2025 增 3.5%、后者仅增 0.5%。改成不排名次的「最大的两座之一」。
    identity:
      "Mount Gambier lies in the Limestone Coast region of South Australia's south-east corner, about 450 km from Adelaide and 435 km from Melbourne, with a population of about 28,100 in the local government area (June 2025, Australian Bureau of Statistics) — by urban-area population one of the two largest South Australian cities outside Adelaide. It is built on the slopes of a dormant maar volcano that last erupted only several thousand years ago, and its symbol is the crater lake, Blue Lake, which turns each year around November from winter's grey-blue to summer's cobalt, a change linked to water temperature and calcium carbonate. Sinkhole gardens formed by limestone collapse dot the town. The traditional owners are the Boandik people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   City of Mount Gambier LGA 2025-06-30 ERP = 28,057。
    howItWorks:
      "Mount Gambier is the largest regional city of South Australia, governed by the City of Mount Gambier over a small area ringed by the District Council of Grant, with about 28,100 people in June 2025, Adelaide 450 km north-west and the Victorian border 17 km east; the council runs local services and the rest belongs to the state. The city stands at the foot of an extinct volcano, the Blue Lake in its crater the city's water supply, turning cobalt each November, the Umpherston Sinkhole and Cave Garden in the centre, the cave diving of the Limestone Coast based here, and the airport lying within the Grant council area. Newcomers most often go wrong by taking Mount Gambier for a mountain, when it is a city at a volcano's foot and the mountain is only a ring of hills at its edge.",
    layout:
      "The centre lies on the flat ground at the northern foot of the volcanic cone, with Commercial Street the main shopping street; Blue Lake occupies the crater south of the centre, ringed by a road and walking track, beside Valley Lake and two smaller crater lakes. The Umpherston Sinkhole (made a garden in 1886) is on the east side of the centre, and the Cave Garden is right beside the downtown mall. Pine forests and pasture surround the city; the Coonawarra wine district is about 50 km north, and the Naracoorte Caves National Park (World Heritage since 1994) about 100 km north. The airport is about 9 km north.",
    gettingAround:
      "Mount Gambier Airport (MGB), about 9 km from the city, has Adelaide and Melbourne flights. Driving from either Adelaide or Melbourne takes about 5 hours, and coaches run. City buses run; the centre and the Cave Garden are walkable, Blue Lake and the sinkholes a few minutes' drive, and Coonawarra and Naracoorte need a car. The climate is temperate maritime — cool wet winters and warm dry summers.",
    culture:
      "English is spoken. Blue Lake is the city's drinking-water supply — no swimming; sinkhole and crater lookouts have railings, so stay behind them. Coonawarra's cabernet sauvignon is among Australia's best known, and the wineries keep set hours. Timber and dairying are local industries. Tipping is not expected.",
    seeAndDo:
      "The Blue Lake circuit (cobalt from November to March) and lookouts; the Umpherston Sinkhole garden (possums at dusk); the Cave Garden and the downtown night lighting; the Valley Lake wildlife park; the Centenary Tower over the volcanic complex; the Coonawarra wineries; the Naracoorte Caves (fossil chamber, bat viewing); Piccaninnie Ponds on the coast to the south (diving and snorkelling by permit).",
    whenAndTips:
      "December–March is when the lake is bluest and the weather most comfortable; winter (June–August) is cold and wet, with the lake grey-blue. The town takes a day; add two for Coonawarra and Naracoorte. It is a natural stop on the Adelaide–Melbourne coastal drive towards the Great Ocean Road.",
  },
  devonport: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Devonport City Council LGA 2025-06-30 ERP = 26,994（2024 年 26,978，基本持平）。
    identity:
      "Devonport lies on Tasmania's north-west coast at the mouth of the Mersey River, with a population of about 27,000 in the local government area (June 2025, Australian Bureau of Statistics), the state's third-largest city. Its defining role is as the port of the Spirit of Tasmania — the overnight ferry from Geelong in Victoria docks here, and many self-drive visitors begin their Tasmanian loop in town. The Mersey Bluff lighthouse (1889) on the western headland is the landmark, and Tiagarra on the bluff (opened 1976) is a Tasmanian Aboriginal cultural centre. Cradle Mountain lies about 80 km inland. The traditional owners are the palawa, the Tasmanian Aboriginal people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Devonport City Council LGA 2025-06-30 ERP = 26,994。
    howItWorks:
      "Devonport is a port city on Tasmania's north coast, governed by the City of Devonport with about 27,000 people in June 2025, the island's third city; the council runs local services and the rest belongs to the state. The city lies on both banks of the Mersey mouth, the Spirit of Tasmania sails from here to Geelong, the port handles more than half the island's freight, the airport lies east of town and Launceston about 100 km south-east; Cradle Mountain lies about 80 km south-west in another council area. Newcomers most often go wrong by taking Devonport for the gate of Cradle Mountain, when it is a ferry and freight port and the mountain is another hour's drive.",
    layout:
      "The city straddles the Mersey: the centre and the ferry terminal are on the west bank, East Devonport and the airport side on the east. North of the centre is Mersey Bluff, with the lighthouse, Tiagarra and a coastal walk, and beaches below. West along the coast is Burnie (about 47 km); east are Latrobe and Sheffield (the mural town), and Launceston about 100 km south-east; the Cradle Mountain–Lake St Clair National Park is about 80 km south-west in the mountains. The airport is about 10 km east.",
    gettingAround:
      "Devonport Airport (DPO), about 10 km from town, has flights only to Melbourne. The Spirit of Tasmania sails overnight from Geelong in about 9–11 hours and carries cars — the most distinctive way to arrive. City buses run, the centre and the bluff are walkable, and Cradle Mountain and the mural town need a car. The climate is temperate maritime, mild all year — about 20°C in summer, 13°C in winter — with frequent sea winds.",
    culture:
      "English is spoken. Tiagarra is a keeping place for Aboriginal culture — follow its rules for viewing. Fresh fruit and vegetables cannot be brought into Tasmania on the ferry (biosecurity) — eat or discard them before boarding. Cradle Mountain's weather is extreme and changeable — bring warm and waterproof layers in any season. Tasmanian seafood, raspberries and apples are the local produce. Tipping is not expected.",
    seeAndDo:
      "The Mersey Bluff lighthouse and coastal walk; the Tiagarra Aboriginal cultural centre; the Devonport maritime museum; the East Devonport beaches; the murals of Sheffield; Cradle Mountain (the Dove Lake circuit, wombats — a day or an overnight); the penguin viewing at Burnie; the Tasmanian Arch and Guide Falls along the coast to the west.",
    whenAndTips:
      "December–March is most comfortable and also the peak for the ferry and Cradle Mountain — book the ferry with a car far ahead; winter (June–August) is cold, with possible snow at Cradle Mountain but few people. The ferry docks early in the morning, so plan your first day. Tasmania's roads are mostly two-lane and hilly, with wildlife at night — avoid night driving.",
  },
  yulara: {
    identity:
      "Yulara is the resort town in the central Northern Territory desert that serves Uluru-Kata Tjuta National Park, with about 850 permanent residents (2021 census), about 18 km from Uluru and about 430 km from Alice Springs. Uluru (Ayers Rock) is a vast sandstone monolith rising 348 m above the plain, and Kata Tjuta (the Olgas) a group of 36 domed rock hills; the park was inscribed as a natural World Heritage Site in 1987 and as a cultural landscape in 1994, and is sacred to the Anangu, the Aboriginal traditional owners. The park's land was returned to the Anangu in 1985 and leased back for joint management with the federal parks agency; climbing Uluru has been prohibited since October 2019. The town was planned in the 1970s and built in the 1980s to keep lodging and services outside the park.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Yulara (853 2021; purpose-built resort town 1984 outside Uluru-Kata Tjuta NP, Anangu-owned jointly managed park; unincorporated NT; Ayers Rock airport 6 km; Uluru 18 km; Alice Springs 428 km)
    howItWorks:
      "Yulara is not an ordinary town but a resort built in 1984 outside Uluru-Kata Tjuta National Park, with about 850 permanent residents in 2021, nearly all resort staff; it is an unincorporated enclave of the Northern Territory without a local council, run by the territory government directly. The park is Anangu land, jointly managed with the parks agency, with an entry fee, Uluru 18 km south, the airport 6 km outside the town and Alice Springs 428 km north-east. Newcomers most often go wrong by expecting to stay at the foot of Uluru, when there is no lodging inside the park and everyone stays at Yulara.",
    layout:
      "Yulara is a ring-shaped resort: hotels, a campground, a supermarket and the visitor centre surround a central dune lookout, and a free loop bus circles the town. The airport is about 6 km north. Uluru lies about 18 km south-east, with a ring road of about 10 km, sunrise and sunset viewing areas and a cultural centre; Kata Tjuta is about 40 km west of Uluru, with the Valley of the Winds and Walpa Gorge walks. Around are red dunes and desert oaks, with Mount Conner visible far on the horizon.",
    gettingAround:
      "Ayers Rock Airport (AYQ), about 6 km north of town, has scheduled flights, and hotels run free transfers. Driving from Alice Springs takes about 4.5–5 hours. The town has a free loop bus; to reach Uluru and Kata Tjuta you hire a car, use paid shuttles or join tours. A multi-day park pass is required. The climate is desert: summer (November–March) days often exceed 40°C, winter days are mild with nights near freezing, and rain totals under 300 mm a year.",
    culture:
      "English is spoken; the Anangu speak Pitjantjatjara and related languages. Uluru is a sacred site: climbing is prohibited, several sacred sites on the rock are signed as no-photography areas — do not photograph or enter them — and take no rocks or sand. Visit the park's cultural centre to learn about Tjukurpa, the Anangu law and stories, and follow Aboriginal guides' directions. Desert flies are numerous — a face net helps; sunset viewing areas fill early. Tipping is not expected.",
    seeAndDo:
      "Sunrise and sunset viewing of Uluru; the base walk (about 10 km, early morning) and the Mala and Kuniya walks (with Aboriginal-guided options); the cultural centre; the Valley of the Winds walk at Kata Tjuta (early, closed in extreme heat) and Walpa Gorge; the 'Field of Light' art installation (since 2016); desert stargazing; camel rides and helicopter or balloon flights for the overview.",
    whenAndTips:
      "May–September is most comfortable, around 20°C by day and cold at night; October–March is scorching, walks close in the heat of the day, so carry plenty of water and avoid midday outdoors. Lodging is run by a single resort operator — book months ahead in peak season. The park pass is priced by days; allow at least two: one for Uluru, one for Kata Tjuta.",
  },

  // ── Australia batch 3 (2026-09-05) ──
  gosford: {
    identity:
      "Gosford is the centre of the Central Coast region of New South Wales, about 77 km north of Sydney and 86 km south of Newcastle; the Gosford statistical area had about 178,000 residents (2021 census), and the whole Central Coast urban area forms a corridor between Sydney and Newcastle. The city sits on the northern shore of Brisbane Water, an inlet, with the surf beaches of Terrigal and Avoca and Bouddi National Park to the east. Named in 1839 after the Earl of Gosford, it became a city in 1980. The traditional owners are the Darkinjung people.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Gosford (CBD suburb; seat of Central Coast Council ~350,000 formed 2016 from Gosford and Wyong; Brisbane Water; train ~1.2 h to Sydney; Terrigal/Avoca beaches in other suburbs)
    howItWorks:
      "Gosford is the seat of Central Coast Council, formed in 2016 by merging the Gosford and Wyong councils and governing about 350,000 people, among the most populous local councils in New South Wales; the council runs local services, while police, schools and rail belong to the state. Gosford itself is only the town centre at the north end of Brisbane Water, with the railway station, hospital and stadium, the train about an hour and a quarter to Sydney, most residents living in the surrounding suburbs and the beaches at Terrigal and Avoca to the east. Newcomers most often go wrong by taking Gosford for a city, when the 'Central Coast' is the city and Gosford only its administrative centre.",
    layout:
      "The centre lies on the hillside at the northern end of Brisbane Water, with the station and shops near the water. About 10 km east are Terrigal (beach, esplanade) and Avoca Beach, and farther south the coastal walks of Bouddi National Park; north are Ourimbah and the bushland around the Australian Reptile Park; south across Brisbane Water are Woy Woy and the peninsula beaches. The Central Coast's built-up area runs north from Gosford to Wyong and Tuggerah Lake.",
    gettingAround:
      "The Central Coast has no commercial airport; access is via Sydney Airport (about 90 km) or Newcastle Airport. Trains from Sydney Central reach Gosford in about 1.5 hours with frequent services — the easiest way. Local buses run, but a hire car is easier for the beaches and national park. The climate is humid subtropical — about 27°C in summer and 12°C in winter, with about 1,300 mm of rain concentrated in late summer and autumn.",
    culture:
      "English is spoken. The Central Coast is a Sydney weekend escape, with a lively dining and beachfront scene at Terrigal. Swim between the flags; Bouddi's coastal walk has cliffs — keep to the track. The Australian Reptile Park is known for its spider and snake antivenom programme — follow the keepers' directions. Tipping is not expected.",
    seeAndDo:
      "Terrigal beach and the Skillion lookout; Avoca Beach; the Bouddi coastal walk (Maitland Bay to MacMasters Beach); the Australian Reptile Park; boating and fishing on Brisbane Water; the Central Coast regional gallery and Japanese garden in Gosford; pelican feeding at The Entrance.",
    whenAndTips:
      "October–April suits the beaches, January–February is hottest, and autumn is best for the coastal walks. Beach parking is tight at weekends and holidays. An easy day trip from Sydney and a stop on the way to Newcastle and the Hunter Valley.",
  },
  "port-macquarie": {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Port Macquarie SUA（城区）2025-06-30 ERP = 53,369（2024 年 52,769）。identity 的「约5.2万（2023年）」与 howItWorks 的「2021 年约 4.8 万」本来就是同一个 SUA 口径的不同年份，不是口径冲突，统一到 2025 年即可。
    identity:
      "Port Macquarie lies on the Mid North Coast of New South Wales at the mouth of the Hastings River, about 390 km north of Sydney, with an urban population of about 53,400 (June 2025, Australian Bureau of Statistics). Founded in 1821 as a penal settlement, it is one of the state's oldest colonial towns; today it is known for a mild climate, beaches and koalas — the town's Koala Hospital treats injured animals. The Tacking Point Lighthouse (1879) and a 9 km coastal walk are its landmarks. The traditional owners are the Birpai people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Port Macquarie SUA 2025-06-30 ERP = 53,369。
    howItWorks:
      "Port Macquarie is a city on the mid-north coast of New South Wales with about 53,400 people in the urban area in June 2025, part of the Port Macquarie-Hastings Council of about 87,000; the council runs local services and the rest belongs to the state. The city lies on the south bank of the Hastings mouth, founded in 1821 as a penal settlement, its centre at the river mouth, Town, Flynns and Lighthouse beaches strung south along the coast, the Koala Hospital in the centre, the airport west of town and Sydney 390 km south. Retirees make up a large share. Newcomers most often go wrong by taking Port Macquarie for a resort town, when it is a regional city with a university campus and hospitals, and more retirees than tourists.",
    layout:
      "The town centre sits on the south bank of the Hastings River mouth, with the breakwall and Town Beach beside the centre. The coast runs south: the coastal walk from Westport Park through the centre to Tacking Point Lighthouse strings together a chain of beaches (Flynns, Nobbys, Shelly, Miners); Sea Acres National Park beside Shelly Beach has a rainforest boardwalk; the Koala Hospital is at Roto House south of the centre. The airport is about 4 km west. Inland to the west are the Hastings valley and Wauchope.",
    gettingAround:
      "Port Macquarie Airport (PQQ), about 4 km west of town, has Sydney and Brisbane flights and a service to Lord Howe Island. Driving from Sydney on the Pacific Highway takes about 4.5 hours, and coaches run; trains reach Wauchope with a bus connection. Walk or cycle in town and walk the coastal track; a hire car serves the hinterland and the beaches to the north. The climate is humid subtropical — warm humid summers and short mild winters, rated among the most pleasant in Australia.",
    culture:
      "English is spoken. The Koala Hospital is a volunteer-run rescue centre — follow tour times and do not touch the animals; stay on the boardwalk at Sea Acres. Swim between the flags; the painted rocks on the breakwall are a local tradition. The river mouth has fishing and yachting, and seafood leads the menu. Tipping is not expected.",
    seeAndDo:
      "The Koala Hospital; the coastal walk (Westport Park to Tacking Point Lighthouse); whale watching from Tacking Point (June–November); the Sea Acres rainforest boardwalk; Town Beach and Flynns Beach; Hastings River cruises; Billabong Zoo; north to the beaches of Crescent Head and the seafood of Bellingen.",
    whenAndTips:
      "Any season works: beaches in summer, whales in winter, and spring and autumn most comfortable. Lodging is tight in school holidays. The full coastal walk takes about 3 hours — carry water and a hat.",
  },
  "wagga-wagga": {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Wagga Wagga SUA 2025-06-30 ERP = 58,117（2024 年 58,130，**略降 13 人**）。原文的「约5.7万」用的正是 SUA 口径（2021 年 57,260），不是 UCL（2021 年只有 49,686），口径没问题、只是年份旧。
    identity:
      "Wagga Wagga lies in the Riverina of southern New South Wales on the Murrumbidgee River, roughly 450 km from both Sydney and Melbourne and about 245 km west of Canberra, with an urban population of about 58,100 (June 2025, Australian Bureau of Statistics) — one of the state's largest inland cities. The name is Wiradjuri, and the meaning adopted by the council in 2019 is 'place of many dances and celebrations'. It is a military town (the Kapooka army recruit training centre, RAAF Base Wagga), the home of Charles Sturt University and the centre of the Riverina farming district. The traditional owners are the Wiradjuri people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Wagga Wagga SUA 2025-06-30 ERP = 58,117。
    howItWorks:
      "Wagga Wagga is the largest inland city of New South Wales, governed by the City of Wagga Wagga with about 58,100 people in the urban area in June 2025, midway between Sydney and Melbourne at about 450 km from each; the council runs local services and the rest belongs to the state. The city lies in the alluvial valley of the Murrumbidgee with its centre on the south bank, and Charles Sturt University, the Kapooka army training base and RAAF Base Wagga make it a city of soldiers and students, with flights to the three big cities. This is Wiradjuri country. Newcomers most often go wrong by taking Wagga Wagga for a highway rest stop, when it is the capital of the Riverina.",
    layout:
      "The centre lies on the south bank of the Murrumbidgee behind a levee, with Baylis and Fitzmaurice streets the main streets and the river beach and floodplain parks on the water. The botanic gardens and zoo are on Willans Hill south of the centre, Charles Sturt University at Estella to the north, and the airport and air base at Forest Hill to the south-east. Wheat, vineyards and sheep country surround the city, with the Hume Highway passing to the east.",
    gettingAround:
      "Wagga Wagga Airport (WGA), about 11 km south-east, has scheduled flights. The Sydney–Melbourne XPT train stops here — about 6 hours from Sydney and 5 from Melbourne; driving from Canberra takes about 2.5 hours. City buses run and the centre is walkable. The climate is temperate with hot dry summers and cold frosty winters, and about 570 mm of rain a year.",
    culture:
      "English is spoken. The military bases are closed to the public, though Kapooka's recruit graduations are sometimes open. The Riverina has wine (Gundagai) and agricultural-show culture, and the city holds an annual food and wine festival. Murrumbidgee levels swing in flood season — heed warnings by the river. Tipping is not expected.",
    seeAndDo:
      "The Murrumbidgee floodplain parks and Wagga Beach; the botanic gardens and free zoo on Willans Hill; the Wagga Wagga Art Gallery and National Art Glass Gallery; the old buildings of the Botany historic precinct; the wineries of Gundagai (about 30 km); the Lockhart wine district; in winter, the Snowy Mountains to the south-east (about 2.5 hours).",
    whenAndTips:
      "March–May and September–November are most comfortable; summers often exceed 35°C and winter mornings are frosty. A good halfway stop on a Sydney–Melbourne drive — a day is enough.",
  },
  mildura: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   **这条是口径陷阱，不是单纯的过期**：原文「约3.6万」对应的是 UCL（Mildura–Buronga 的 Mildura 段）2021 年普查 35,652 人，ABS **不逐年更新 UCL**；而逐年更新的 Mildura–Buronga SUA 2025-06-30 为 54,379 人，范围大得多（把 Red Cliffs、Merbein、Irymple 等周边城镇并了进来）。**直接换成 5.4 万会让读者以为镇区一年暴涨 50%**，所以两个口径并列写明，各自标注。
    identity:
      "Mildura lies on the Murray River in the far north-west of Victoria, about 545 km north-west of Melbourne and 400 km east of Adelaide, with an urban population of about 36,000 (2021 census; ABS does not update its urban-centre figures annually — the wider significant urban area was about 54,400 in June 2025). Founded in 1887 by the Chaffey brothers, it was Australia's first irrigation colony — Murray water turned semi-arid mallee scrub into vineyards and citrus groves, and the region now produces about four-fifths of Victoria's grapes and more than 70% of Australia's dried vine fruit. Paddle steamers, citrus and hot-air balloons are its tourist emblems; about 110 km north is Mungo National Park in the Willandra Lakes World Heritage Area. The traditional owners are the Latji Latji people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   同上：UCL 2021 = 35,652（不逐年更新），Mildura–Buronga SUA 2025-06-30 = 54,379。
    howItWorks:
      "Mildura is a city in the north-west corner of Victoria, governed by the Rural City of Mildura over about 22,000 km² with about 36,000 people in the town itself at the 2021 census (ABS does not update urban-centre figures annually) and about 54,400 in the wider significant urban area in June 2025 across the river in New South Wales; the council runs local services and the rest belongs to the state. The city stands on the south bank of the Murray, where the Chaffey brothers laid out Australia's first planned irrigation colony in 1887, and the district now grows nine-tenths of the country's export table grapes; the airport is Victoria's busiest regional one, Melbourne lies 545 km south-east, and Adelaide is nearer. Newcomers most often go wrong by reckoning Mildura's distances as a Victorian city, when Adelaide is closer and the far bank of the river is another state.",
    layout:
      "The city lies on the south (Victorian) bank of the Murray, with New South Wales across the river; Deakin Avenue is a broad tree-lined main street. Lock 11 and the wharf are on the river, where paddle steamers depart; east along the river are the orchards of the irrigation district and the town of Red Cliffs. Mungo National Park lies about 110 km north-east in New South Wales, with its crescent dune, the 'Walls of China', and the site where 40,000-year-old human remains were found. The airport is about 7 km south-west.",
    gettingAround:
      "Mildura Airport (MQL), about 7 km from the city, has Melbourne and Sydney flights and is Victoria's busiest regional airport. Driving takes about 6 hours from Melbourne and 4.5 from Adelaide, with coaches; there is no direct passenger train. City buses run and the centre is walkable; Mungo needs a car (partly unsealed) or a tour. The climate is semi-arid — hot summers (often over 35°C), mild winters, under 300 mm of rain and abundant sunshine.",
    culture:
      "English is spoken. The Murray is one of Australia's most important rivers — boating and fishing need state permits; Mungo is an Aboriginal sacred site and World Heritage Area where the burial site is closed and the dunes may be walked only with a guide. Citrus, dried fruit, local wine and Murray cod are the produce, and the city holds an annual wine and food festival. Summer is extreme — protect against sun and drink plenty. Tipping is not expected.",
    seeAndDo:
      "Paddle steamers on the Murray (the PS Melbourne and others); Lock 11 and the riverside walk; Deakin Avenue and Rio Vista, the Chaffey house; orchard picking and citrus factories; hot-air ballooning on autumn and winter mornings; Mungo National Park (the Walls of China, dune sunsets, guided walks); the river red gums of Lake Hattah; across the river to Wentworth in New South Wales for the Murray–Darling junction.",
    whenAndTips:
      "April–May and September–October are most comfortable; summer is very hot but citrus season, and winter suits ballooning. Mungo needs a full day, and its dirt roads may close after rain — check park notices. A stop on the inland Melbourne–Adelaide route.",
  },
  "phillip-island": {
    identity:
      "Phillip Island lies at the mouth of Western Port in southern Victoria, about 140 km south-east of Melbourne; its main town, Cowes, has about 6,600 residents (2021 census), and a bridge has linked the island to San Remo on the mainland since 1940. The island's south-western tip hosts the world-famous Penguin Parade — every evening after sunset, little penguins come ashore in groups to their burrows at Summerland Beach; Seal Rocks off the Nobbies is one of Australia's largest fur-seal colonies. The island also has a motorcycle Grand Prix circuit and surf beaches. The traditional owners are the Bunurong people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   ABS 的 SA2「Phillip Island」（代码 205031091）边界大致就是全岛，且逐年更新：2025-06-30 ERP = 14,503（2024 年 14,253）。不需要退而用巴斯海岸郡（2025 年 44,377，范围含大陆部分）或考斯镇。
    howItWorks:
      "Phillip Island lies 125 km south-east of Melbourne, about 100 km² with about 14,500 permanent residents in June 2025 rising to 40,000 in summer, part of Bass Coast Shire whose seat is at Wonthaggi on the mainland; the shire runs local services and the rest belongs to the state. Cowes is the main town on the north shore, the bridge of 1940 ties the island to San Remo, the Penguin Parade lies at the south-west corner under Phillip Island Nature Parks, the grand prix circuit in the middle of the island, and there is no railway. Newcomers most often go wrong by taking the Penguin Parade for the whole island, when it has a town, a racetrack and a full circuit of coast.",
    layout:
      "Phillip Island is about 26 km long. Cowes sits on a calm bay on the north shore and is the centre for lodging and dining; the Penguin Parade, the Nobbies and Seal Rocks are at the island's south-western tip; the Grand Prix circuit is in the south-centre; the south coast has surf beaches such as Woolamai and Cape Woolamai; Churchill Island at the eastern end has a heritage farm. The bridge crosses between Newhaven at the eastern end and San Remo.",
    gettingAround:
      "There is no airport with scheduled flights on the island; from Melbourne Airport it is about 2 hours by car and 1.5–2 hours from the city, with day tours and coaches from Melbourne. Island buses are limited, so a hire car is easiest; Cowes itself is walkable. The climate is temperate maritime — mild, windy and often overcast all year, with summer highs in the low 20s.",
    culture:
      "English is spoken. The Penguin Parade is a strictly managed reserve: no photography or torches (flash harms the penguins), keep quiet and stay on the stands and boardwalks; penguins and wombats cross island roads at night, so drive slowly. Seal Rocks and the Nobbies are wildlife habitats — no feeding. Surf beaches are rough — swim between the flags. Tipping is not expected.",
    seeAndDo:
      "The Penguin Parade (book ahead, at sunset); the Nobbies boardwalk and Seal Rocks (shore telescopes or a boat); the Koala Conservation Reserve; the Churchill Island heritage farm; surfing and the headland walk at Woolamai; a circuit tour and go-karts at the Grand Prix circuit; the Cowes jetty and bay; pelican feeding at San Remo.",
    whenAndTips:
      "Penguins can be seen year-round; in summer (December–February) the parade is late and crowded, in winter sunset is early but colder and windier. Parade tickets sell out in peak season — book ahead, and bring warm windproof layers as the stands are exposed. A day trip from Melbourne is feasible; an overnight is more relaxed.",
  },
  mackay: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Mackay SUA（城区）2025-06-30 ERP = 89,761（2024 年 89,015）。原文的「约8.4万」用的正是 SUA 口径（2021 年 85,408）。
    identity:
      "Mackay lies on the central Queensland coast at the mouth of the Pioneer River, about 970 km north of Brisbane and 390 km south of Townsville, with an urban population of about 89,800 (June 2025, Australian Bureau of Statistics). It grew on sugar cane and is known as Australia's 'sugar capital', its port and mills still working, though mining has become the main industry in recent years. Rebuilt after a 1918 cyclone, the centre keeps a large stock of Art Deco buildings; inland, Eungella National Park is one of the few places in Australia where wild platypus are reliably seen, and kangaroos visit the beach at Cape Hillsborough at dawn. The traditional owners are the Yuwibara people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Mackay SUA 2025-06-30 ERP = 89,761。
    howItWorks:
      "Mackay is a city of central-north Queensland, governed by the Mackay Regional Council with about 89,800 people in the urban area in June 2025; the council runs local services and the rest belongs to the state. The city lies at the mouth of the Pioneer River, cane fields running from every side to the sea, sugar its old trade and the coal of the Bowen Basin and the coal port at Hay Point now the mainstay, with many miners based here; the cyclone of 1918 all but destroyed the centre, and the rebuilding left a set of Art Deco buildings, with the airport south of town and Eungella National Park to the west. Newcomers most often go wrong by taking Mackay for a stop on the way to the Whitsundays, when it is the mining and sugar centre of Queensland.",
    layout:
      "The centre lies on the south bank of the Pioneer River, with the port and marina area east of the river mouth. The Bluewater Trail runs along the river and coast linking the Bluewater Lagoon, the botanic gardens and the markets. Cape Hillsborough is about 50 km north, a national park with beaches; Eungella is about 80 km west in the hills, with Broken River below it the place for platypus; the Sarina sugar mill lies to the south. The airport is on the south side of the city.",
    gettingAround:
      "Mackay Airport (MKY), about 6 km south of the centre, has scheduled flights. The Spirit of Queensland train passes through, and the Bruce Highway runs past. City buses run and the centre is walkable; Eungella and Cape Hillsborough need a car. The climate is tropical — hot, humid and wet from November to April with cyclone risk, dry from May to October.",
    culture:
      "English is spoken. Sugar mills can be visited in the crushing season (June–November); keep off the cane-train tracks between the fields. Watch platypus in silence and stay out of the water; the Cape Hillsborough kangaroos are wild — no feeding. Stinger season runs November–May in the sea, and the Bluewater Lagoon is the safe alternative. Tipping is not expected.",
    seeAndDo:
      "The Bluewater Trail and Bluewater Lagoon; an Art Deco walk through the centre; the Mackay Regional Botanic Gardens; Cape Hillsborough (kangaroos on the beach at dawn); Eungella National Park (platypus at Broken River, the summit lookout over the Pioneer valley); the harbour beach and marina village; the Sarina sugar mill tour; reef trips offshore.",
    whenAndTips:
      "May–October is most comfortable and the sugar-crushing season; summer is hot, humid and wet. The Cape Hillsborough kangaroos appear around sunrise — start early. The Eungella road is winding and often misty — drive it in daylight.",
  },
  rockhampton: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Rockhampton Regional Council LGA 2025-06-30 ERP = 85,794（2024 年 85,170）。
    identity:
      "Rockhampton lies on the Fitzroy River in central Queensland about 45 km from the river's mouth and 630 km north of Brisbane, with a population of about 85,800 in the local government area (June 2025, Australian Bureau of Statistics). It sits just north of the Tropic of Capricorn, marked by a monument in town, and calls itself Australia's 'beef capital' for the vast cattle country around it. Quay Street by the river preserves a run of 19th-century sandstone commercial buildings, Mount Archer to the east overlooks the city, and Yeppoon and Great Keppel Island on the Capricorn Coast lie about 40 km east. The traditional owners are the Darumbal people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Rockhampton Regional Council LGA 2025-06-30 ERP = 85,794。
    howItWorks:
      "Rockhampton is a city of central Queensland, governed by the Rockhampton Regional Council with about 85,800 people in June 2025; the council runs local services and the rest belongs to the state. The city lies on both banks of the Fitzroy with the Tropic of Capricorn passing its edge, calls itself the 'beef capital' with two abattoirs among its largest employers, keeps the nineteenth-century streetscape of Quay Street from the gold years, has Mount Archer looking down from the east and the airport to the west. Newcomers most often go wrong by taking Yeppoon on the coast for Rockhampton's beach district, when Yeppoon belongs to Livingstone Shire as another town and Rockhampton itself lies 40 km inland.",
    layout:
      "The centre lies on the south bank of the Fitzroy, with Quay Street along the river and several bridges to North Rockhampton. Mount Archer rises to the east with a lookout and treetop walkway; the botanic gardens and zoo are in the south. About 25 km north are the Capricorn Caves; about 40 km east are Yeppoon and the Capricorn Coast, with boats to Great Keppel Island from Rosslyn Bay. The airport is about 6 km west.",
    gettingAround:
      "Rockhampton Airport (ROK), about 6 km west, has scheduled flights. The tilt train from Brisbane takes about 7 hours, and the Bruce Highway passes through. City buses run and the centre is walkable; Yeppoon, the caves and Great Keppel need a car. The climate is humid subtropical — hot humid summers, warm dry winters and about 720 mm of rain a year.",
    culture:
      "English is spoken. Beef is the heart of local eating, and the triennial 'Beef Australia' exposition is the big event. Quay Street's buildings are National Trust-listed; the Capricorn Caves are a private reserve entered on guided tours. Do not touch the coral at Great Keppel. Stinger season applies in the sea (November–May). Tipping is not expected.",
    seeAndDo:
      "The Quay Street heritage precinct and the Fitzroy riverside; the Tropic of Capricorn marker; the Mount Archer lookout and treetop walk; the Rockhampton botanic gardens and zoo; the Capricorn Caves; the beaches and lagoon of Yeppoon; Great Keppel Island (snorkelling, beaches); cattle-station and farm experiences in the surrounding country.",
    whenAndTips:
      "May–October is most comfortable; summers are hot and wet. The city takes a day, Yeppoon and Great Keppel another. A natural stop heading north on the Bruce Highway.",
  },
  "port-douglas": {
    identity:
      "Port Douglas lies on the coast of far northern Queensland about 60 km north of Cairns, with about 3,700 permanent residents (2021 census) — a resort town serving the outer Great Barrier Reef and the Daintree rainforest. Founded as a port in 1877 after gold was found on the Hodgkinson field, it declined and was reborn as a resort in the 1980s. Four Mile Beach is a long palm-fringed strand; boats from town reach the Low Isles and Agincourt Reef, Mossman Gorge is about 20 km north and the Daintree rainforest beyond it. The traditional owners are the Kuku Yalanji people, whose name for the place is Jabulkanji.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Port Douglas (3,650 2021; Shire of Douglas, seat Mossman; Four Mile Beach; Macrossan Street; reef/Daintree gateway; Cairns airport 60 km; resort development late 1980s)
    howItWorks:
      "Port Douglas is a resort town of Far North Queensland with about 3,700 people in 2021, part of the Shire of Douglas whose seat is at Mossman 20 km inland; the shire runs local services and the rest belongs to the state. The town lies on a headland with Four Mile Beach on one side and the marina on the other, Macrossan Street its one main street, and resort development of the late 1980s turned a faded port into what it is; reef boats leave from the marina, the Daintree lies north and the airport at Cairns 60 km south. Newcomers most often go wrong by taking Port Douglas for a city, when it is a resort town of a few thousand whose shire government, hospital and airport are all in other towns.",
    layout:
      "The town occupies a small peninsula jutting into the sea, with Macrossan Street the main street ending at the marina (the reef departure point) and the Flagstaff Hill lookout at the peninsula's northern tip. Four Mile Beach runs south along the peninsula's east side. North along the Captain Cook Highway about 20 km are Mossman town and Mossman Gorge (the southern entrance to Daintree National Park), then across the Daintree River ferry the rainforest and Cape Tribulation; south is Cairns.",
    gettingAround:
      "Port Douglas has no airport with scheduled flights; from Cairns Airport it is about an hour by car along the scenic coastal highway, with airport shuttles. Walk or cycle in town; Mossman Gorge and the Daintree need a hire car or tour, and reef trips leave from the marina. The climate is tropical monsoon — hot, humid and wet from November to April with cyclone risk, January–March the wettest and the peak of stinger season, May–October dry.",
    culture:
      "English is spoken. Mossman Gorge offers Kuku Yalanji 'Dreamtime' guided walks — respect the guides' explanations and no-go areas. The reef is a marine park — never touch coral and follow the boat crew when snorkelling. In stinger season Four Mile Beach has a netted swimming enclosure — swim only inside it. The Sunday markets at the marina sell crafts and local produce. Tipping is not expected.",
    seeAndDo:
      "Four Mile Beach and the Flagstaff Hill lookout; reef trips to the Low Isles (snorkelling, turtles) or the Agincourt outer reef (diving); the rainforest walks and streams of Mossman Gorge; the Daintree rainforest (the canopy walk, Cape Tribulation where rainforest meets beach); crocodile cruises on the Daintree River; Hartley's Crocodile Adventures; the Sunday markets.",
    whenAndTips:
      "June–October is most comfortable — clear water, steady wind, little rain; December–March is hot, wet and stinger season. Allow a day for the outer reef and a day for the Daintree — three nights or more works well. Wear a stinger suit or use the net when swimming. Lodging is tight in peak season — book early.",
  },
  bunbury: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Bunbury SUA 2025-06-30 ERP = 84,332（2024 年 83,000）。
    //   **「西澳第三大人口中心」这句是错的**：按 ABS 城区（SUA）口径，2025 年西澳珀斯以外的排序是班伯里 84,332 > 巴瑟尔顿 46,023 > 杰拉尔顿 42,104 > 奥尔巴尼 38,287 > 卡尔古利—博尔德 31,016 —— 班伯里是**第一**，不是第三。
    identity:
      "Bunbury lies on Western Australia's south-west coast about 175 km south of Perth, with an urban population of about 84,300 (June 2025, Australian Bureau of Statistics), the largest Western Australian city outside Perth. It is built on a peninsula between the Leschenault Inlet and Geographe Bay, its port the freight gateway of the south-west; at the Dolphin Discovery Centre on Koombana Bay, wild bottlenose dolphins can be seen at close range in the shallows. It is also the gateway to Margaret River and the forests and wineries of the south-west. The traditional owners are the Wardandi people of the Noongar nation, whose name for the place is Goomburrup.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，子代理直接读取一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）/ 32180DS0003_2001-25.xlsx（SA2）得出。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期预计 2027-03。
    //   Bunbury SUA 2025-06-30 ERP = 84,332；排名同上，班伯里是珀斯以外西澳最大的城市。
    howItWorks:
      "Bunbury is Western Australia's third city, though the City of Bunbury council itself covers a small area of about 33,000 people, while Greater Bunbury with Eaton and Australind to the east held about 84,300 in June 2025 across four councils; the councils run local services and the rest belongs to the state. The centre lies on a peninsula with the port on one side and the dolphins of Koombana Bay on the other, Perth 175 km north, the Australind train two hours to Perth, and mineral processing and the port the economic mainstay. Newcomers most often go wrong by taking the City of Bunbury's area for the whole city, when more than half its residents live in the suburbs of three other shires across the estuary.",
    layout:
      "The centre sits on the peninsula, with the Indian Ocean's Back Beach to the west, the calm Leschenault Inlet to the east and Koombana Bay and the port to the north; the chequered lighthouse stands on the hill at the peninsula's northern end. The Dolphin Discovery Centre is on the Koombana Bay shore. South along the coast about 50 km is Busselton, east inland are the coal town of Collie and the forests, and south-west is the Margaret River region. The airport, about 8 km south-east, is general aviation only.",
    gettingAround:
      "Bunbury Airport has no scheduled passenger flights; from Perth Airport it is about 2 hours by car; the Australind train from Perth takes about 2.5 hours, and coaches run. City buses serve town, the centre and beaches are walkable, and the wineries and forests need a car. The climate is Mediterranean — warm dry summers and mild wet winters.",
    culture:
      "English is spoken. The dolphins at the Discovery Centre are wild — enter only the interaction zone under staff direction and do not touch or feed them; sightings depend on season and weather. Back Beach has heavy surf — swim between the flags. Local wine (the Geographe region) and seafood are the specialities. Tipping is not expected.",
    seeAndDo:
      "The Dolphin Discovery Centre (the shore interaction zone, dolphin cruises); the Bunbury lighthouse and the Marlston Hill lookout; Back Beach and the basalt coast; the mangrove boardwalk on the Leschenault Inlet; the Bunbury Regional Art Gallery; east to the reservoir and forests of Wellington National Park; south to the Busselton Jetty and Margaret River.",
    whenAndTips:
      "October–April is best for the beach and dolphins (more often seen in summer); winter is wet. Half a day to a day is enough, as a stop between Perth and Margaret River.",
  },
  kalgoorlie: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Kalgoorlie–Boulder SUA（城区）2025-06-30 ERP = 31,016；同一时点 LGA 口径为 31,268，两者边界不同，正文取城区。
    identity:
      "Kalgoorlie-Boulder lies in Western Australia's inland goldfields about 595 km east of Perth, with an urban population of about 31,000 (June 2025, Australian Bureau of Statistics). Paddy Hannan found gold here in June 1893, and the rush that followed created the 'Golden Mile', once called the richest square mile of earth on the planet; today's Super Pit (the Fimiston open pit) is about 3.6 km long, 1.6 km wide and over 600 m deep, one of Australia's largest open-cut gold mines and still working. The Goldfields Water Supply pipeline, completed in 1903, brought water nearly 600 km from near Perth — an engineering feat of its day. The traditional owners are the Wangkatha people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Kalgoorlie–Boulder SUA 2025-06-30 ERP = 31,016（LGA 口径 31,268）。
    howItWorks:
      "Kalgoorlie-Boulder is the centre of Western Australia's Goldfields, governed by the City of Kalgoorlie-Boulder over about 95,000 km² with an urban population of about 31,000 in June 2025, Perth 595 km west; the council runs local services and the rest belongs to the state. Paddy Hannan found gold here in 1893, Kalgoorlie and the mining town of Boulder to its south merged into one city in 1989, Hannan Street is the main street of the centre, and the Super Pit east of town, 3.6 km long and over 600 m deep, is mined around the clock with a quarter of the workforce on it; the Prospector train and flights run to Perth. Newcomers most often go wrong by taking Kalgoorlie for a town of gold-rush relics, when it is a working city that lives to this day off one enormous pit.",
    layout:
      "Kalgoorlie and Boulder were neighbouring mining towns that merged in 1989. Kalgoorlie's Hannan Street is a broad main street lined with gold-rush hotels and public buildings; Boulder, about 5 km south-east, has heritage buildings and markets on Burt Street. The Super Pit lies on the east side between the two, with its lookout on the Boulder side. Red earth, salt lakes and scrub surround the city. The airport is about 6 km south.",
    gettingAround:
      "Kalgoorlie-Boulder Airport (KGI), about 6 km south, flies only to Perth but with frequent services for mining commuters. The Prospector train from Perth takes about 7 hours, and the Great Eastern Highway drive about 7 hours. City buses run, Hannan Street is walkable, and the Super Pit lookout and Boulder are a drive or taxi away. The climate is semi-arid — scorching summers (January highs average about 34°C), mild winter days with cold nights, and under 270 mm of rain.",
    culture:
      "English is spoken. This is a mining town: mine sites are off limits and the Super Pit is viewed only from the lookout, with blast times posted. Hannan Street's historic hotels (such as the Exchange) still trade. The mining museum and the Hannans North tourist mine offer underground tours and gold-panning demonstrations. Carry water and fuel when driving the outback around. Tipping is not expected.",
    seeAndDo:
      "The Super Pit lookout (giant trucks and blasting); the Museum of the Goldfields and the Hannans North tourist mine; Hannan Street's heritage buildings and the Paddy Hannan statue; Burt Street and the town hall in Boulder; the end of the goldfields pipeline and the C.Y. O'Connor memorial; the Kalgoorlie racecourse (Race Round in September); the ghost towns to the north (Coolgardie, Gwalia).",
    whenAndTips:
      "April–October is most comfortable, with pleasant winter days; summer is scorching — avoid the midday outdoors. Lodging is tight during Race Round in September and the goldfields festival. A supply stop on the drive across the Nullarbor.",
  },
  "port-lincoln": {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   City of Port Lincoln LGA 2025-06-30 ERP = 15,065（2024 年为 15,067，**基本持平、略降 2 人**）。
    identity:
      "Port Lincoln lies on Boston Bay at the southern tip of South Australia's Eyre Peninsula, about 280 km west of Adelaide by air (about 650 km by road), with a population of about 15,000 (June 2025, Australian Bureau of Statistics). It is home to Australia's largest commercial fishing fleet and calls itself the 'seafood capital' — southern bluefin tuna are ranched in pens here, along with oysters, abalone and mussels; it is also the only place in South Australia to cage-dive with great white sharks or swim with sea lions. The traditional owners are the Barngarla people, whose name Galinyala means 'place of sweet water'.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   City of Port Lincoln LGA 2025-06-30 ERP = 15,065。
    howItWorks:
      "Port Lincoln is a city at the tip of South Australia's Eyre Peninsula, governed by the City of Port Lincoln with about 15,000 people in June 2025, Adelaide 650 km east by road and about 50 minutes by air; the council runs local services and the rest belongs to the state. The city lies on the shore of Boston Bay and calls itself Australia's seafood capital, with bluefin tuna, oyster and abalone farming as its economy, the grain terminal as its other lifeline, shark cage diving leaving the harbour for the Neptune Islands and Lincoln National Park south of town. This is Barngarla country. Newcomers most often go wrong by picturing Port Lincoln as an outer suburb of Adelaide by road distance, when it stands on its own across Spencer Gulf and most people come and go by air.",
    layout:
      "The town sits on the west shore of Boston Bay, a natural deep-water harbour opening east into Spencer Gulf, with the wharves and tuna-processing area south of town. Lincoln National Park lies on the peninsula about 15 km south-east, with dunes and bays; about 50 km west is Coffin Bay (oysters); shark-cage boats head south to the Neptune Islands, and the sea lions are at Baird Bay to the north-west. The airport is about 13 km north.",
    gettingAround:
      "Port Lincoln Airport (PLO), about 13 km north, flies only to Adelaide but frequently. Driving from Adelaide around Spencer Gulf takes about 7 hours. Walk in town; the national park, Coffin Bay and Baird Bay need a car, and shark and sea-lion trips leave from the marina. The climate is Mediterranean — dry warm summers, mild wet winters and under 400 mm of rain.",
    culture:
      "English is spoken. Tuna ranches can be visited by boat with fish feeding; shark cage diving and sea-lion swims must be with licensed operators, following the crew. At Coffin Bay you can eat oysters straight from the farm in waders. Four-wheel driving on the park's dunes and beaches needs a permit. The Tunarama festival each January is the local event. Tipping is not expected.",
    seeAndDo:
      "Tuna-ranch cruises (swim with the tuna); great white shark cage diving (Neptune Islands, a full day); swimming with sea lions at Baird Bay; Lincoln National Park (dunes, bays, the lighthouse); the Coffin Bay oyster-farm experience; the Boston Bay foreshore walk and marina; the Eyre Peninsula coast to the north.",
    whenAndTips:
      "December–April is most comfortable; shark and sea-lion trips run year-round but depend on sea conditions, and winter is rough. Book cage diving far ahead and bring seasickness tablets. Seasons: oysters in winter and spring, the tuna catch January–March.",
  },
  burnie: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Burnie City Council LGA 2025-06-30 ERP = 20,420。
    identity:
      "Burnie lies on Emu Bay on Tasmania's north-west coast, about 47 km west of Devonport and 135 km west of Launceston, with a population of about 20,400 (June 2025, Australian Bureau of Statistics). It is Tasmania's largest bulk port; the paper mill that ran from 1936 to 2010 was once the city's mainstay (in 1939 it made the world's first paper entirely from eucalypt pulp). Today it is known for a seaside little-penguin viewing point, a makers' centre, and the tulip fields and rainforest nearby. The traditional owners are the palawa, the Tasmanian Aboriginal people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Burnie City Council LGA 2025-06-30 ERP = 20,420。
    howItWorks:
      "Burnie is a port city on Tasmania's north-west coast, governed by the City of Burnie with about 20,400 people in June 2025, the island's fourth city; the council runs local services and the rest belongs to the state. The city lies on Emu Bay, its port the largest general-cargo port in the state handling nearly half the island's containers, the paper mill of 1936 once its mainstay until it closed in 2010 and the city turned to education, health and logistics, the University of Tasmania's Cradle Coast campus here, the airport at Wynyard to the west and Cradle Mountain about an hour and a half south. Newcomers most often go wrong by taking Burnie for a declining industrial port, when it is the medical and university centre of the north-west coast.",
    layout:
      "The centre sits beside the port on Emu Bay, whose wharves and freight yards take the middle of the shore, with West Beach and the penguin observation centre to the west. About 17 km west are Wynyard and the airport, then Table Cape (tulip farm, lighthouse) and Stanley (the volcanic 'Nut'); south inland are the Fern Glade rainforest and Guide Falls; east along the coast is Devonport.",
    gettingAround:
      "Burnie Airport (BWT) at Wynyard, about 17 km from the city, has Melbourne flights. From the Devonport ferry terminal it is about 45 minutes by car, from Launceston about 2 hours. City buses run and the centre is walkable; the surrounding sights need a car. The climate is temperate maritime — mild and rainy all year, about 20°C in summer and 13°C in winter.",
    culture:
      "English is spoken. Little penguins come ashore at dusk from October to March, with volunteers guiding at the viewing point — no flash and no approaching. The old paper-mill site has been redeveloped, and the city's industrial history is shown in the museum. The Makers' Workshop shows papermaking and local design. The Table Cape tulips are open for only about a month in October. Tipping is not expected.",
    seeAndDo:
      "The Burnie penguin observation centre (at dusk); the Makers' Workshop and regional museum; West Beach and the port; the Table Cape lighthouse and the October tulip fields; the Nut and historic street of Stanley (about 80 km); the Fern Glade rainforest walk and Guide Falls; platypus at Emu Valley.",
    whenAndTips:
      "October–March is best: penguin season, tulip month (October) and summer seaside. Winter is cold and wet. Half a day in town, plus a day for Table Cape and Stanley. A usual stop on a north-west Tasmania drive.",
  },

  // ── Australia batch 4 (2026-09-05) ──
  albury: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Albury–Wodonga SUA（两城合计城区）2025-06-30 ERP = 102,435；City of Albury LGA = 59,538。这是同一条目里两个口径并列的例子，两个数各自标明口径。
    identity:
      "Albury sits on the New South Wales bank of the Murray River at the Victorian border, paired with Wodonga on the opposite bank as Albury–Wodonga, an urban area of about 102,000 people (June 2025, Australian Bureau of Statistics; the City of Albury itself about 59,500) and the largest city on the Hume Highway between Sydney and Melbourne. Lake Hume, about 10 km upstream, is a large reservoir completed in 1936; the Bonegilla migrant centre opened in 1947 as Australia's first migrant reception centre, and some 300,000 post-war migrants passed through it. Rutherglen to the south is Victoria's fortified-wine region. The Traditional Owners are the Wiradjuri people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   City of Albury LGA 2025-06-30 ERP = 59,538。
    howItWorks:
      "Albury is a city on the Murray in New South Wales, governed by the City of Albury with about 59,500 people in June 2025; Wodonga across the river belongs to Victoria with a council of its own, and the two make one urban area of about 98,000 under two states, two sets of laws and two councils. The centre lies on the north bank, the Hume Highway and railway cross the river here, the airport is one of the busiest regional airports in New South Wales, Lake Hume lies to the east, and Sydney and Melbourne each lie some 300 km away. Newcomers most often go wrong by taking Albury-Wodonga for one city, when crossing one bridge changes the state, and with it the schools, the police and the holidays.",
    layout:
      "The city centre climbs a gentle slope on the north bank of the Murray; Dean Street is the main street and Noreuil Park and the river walk line the water; across the Hume Highway bridge is Wodonga in Victoria. The Hume Dam is about 10 km east, with Bonegilla on the Wodonga side of the lake. The Rutherglen wineries are about 45 km south-west and the gold-rush town of Beechworth about 40 km south. The airport is about 4 km east of the centre.",
    gettingAround:
      "Albury Airport (ABX), about 4 km from the centre, is one of the busiest regional airports in New South Wales, with flights to Sydney and Brisbane. The Sydney–Melbourne XPT and Victoria's V/Line trains both stop at Albury — Melbourne about 3.5 hours, Sydney about 7; by car Melbourne is about 3.5 hours and Sydney about 5.5. Local buses run and the centre is walkable; Lake Hume and the wineries need a car. The climate is temperate with hot dry summers and cool wet winters.",
    culture:
      "English is universal. The Bonegilla site is a national heritage place presenting migration history — visit respectfully. Check water levels and currents before swimming or paddling in the Murray; Lake Hume is used for fishing and boating. Rutherglen cellar doors keep tasting hours — mind the drink-driving limit. The Albury art gallery and MAMA show local art. No tipping.",
    seeAndDo:
      "The Murray River walk and Noreuil Park; the Albury botanic gardens and Monument Hill; the Bonegilla Migrant Experience; the Hume Dam and lakeside picnics; the Rutherglen wineries (muscat and topaque fortifieds); the gold-rush streetscape of Beechworth; the alpine valleys beyond Wodonga to Bright (about 1.5 hours).",
    whenAndTips:
      "March–May and September–November are most comfortable; summers often exceed 35°C and winter mornings are frosty. It makes a natural halfway stop on a Sydney–Melbourne drive and a day is enough; add the wineries and Bright for two nights.",
  },
  dubbo: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Dubbo SUA（城区）2025-06-30 ERP = 42,452。原文的 4.4 万是 2021 年普查的城区数。
    identity:
      "Dubbo lies on the Macquarie River in central New South Wales about 390 km north-west of Sydney, with an urban population of about 42,000 (June 2025, Australian Bureau of Statistics), and serves as the hub of the western plains. It is best known for Taronga Western Plains Zoo, an open-range zoo opened in 1977 whose large continent-themed enclosures hold rhinos, giraffes and other threatened species and can be toured by bicycle or car; the Old Dubbo Gaol in the centre is a well-preserved colonial prison. Wellington Caves lie about 58 km south-east. The Traditional Owners are the Wiradjuri people, and the district has evidence of human presence going back more than 40,000 years.",
    // howItWorks sources: 与 layout 段统一。2026-09-13 核。
    howItWorks:
      "Dubbo is the largest city of the Orana region of New South Wales, governed by the Dubbo Regional Council with an urban population of about 42,000 in June 2025, Sydney 392 km south-east; the council runs local services and the rest belongs to the state. The city lies on the Macquarie River where three highways cross, the road and rail hub for the west, with Taronga Western Plains Zoo on the outskirts, the Old Gaol in the centre, about 16 per cent of residents Aboriginal, and this Wiradjuri country. Newcomers most often go wrong by taking Dubbo for a stop on the way to the zoo, when it is the medical, commercial and transport centre of western New South Wales.",
    // layout sources: 东南约 58 km。随机抽样审计（seed=4）抽中；同条目另一段一并统一。2026-09-13 核。
    layout:
      "The centre sits on the east bank of the Macquarie, with Macquarie Street the main street and the Old Gaol on it; the Western Plains Cultural Centre is on the east side of town. Taronga Western Plains Zoo is about 5 km south-west beside the Obley Road. The Great Dividing Range's foothills rise to the east and the Darling Basin plains stretch west; Wellington Caves are about 58 km south-east, and the observatory and volcanic landforms of Warrumbungle National Park about 200 km north-west. The airport is about 4 km north-west.",
    gettingAround:
      "Dubbo Regional Airport (DBO), about 4 km from the centre, has scheduled flights. The Sydney–Dubbo XPT takes about 6.5 hours; driving from Sydney about 5. Local buses run and the centre is walkable; inside the zoo you cycle, drive or ride the tour vehicle. The climate sits between humid subtropical and semi-arid, with hot summers and cool dry winters.",
    culture:
      "English is universal. The zoo is open-range — follow the driving rules, stay in the vehicle near animals and do not feed them; the Old Gaol displays gallows and other grim history, so visit respectfully. Dubbo is the centre of a farming district with an annual agricultural show, and the Western Plains Cultural Centre exhibits Wiradjuri art. No tipping.",
    seeAndDo:
      "Taronga Western Plains Zoo (allow half a day to a day; bicycles for hire and accommodation inside the park); the Old Dubbo Gaol; the Western Plains Cultural Centre; the Macquarie River walk and the Shoyoen Japanese garden; stargazing at the Dubbo observatory; Wellington Caves; a day trip north-west to Warrumbungle National Park.",
    whenAndTips:
      "March–May and September–November are most comfortable, and animals are most active early in the morning; summers are hot, so carry water and sun protection at the zoo. A day for the zoo and gaol, two with the caves. A starting point for inland routes west of Sydney.",
  },
  tamworth: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Tamworth SUA（城区）2025-06-30 ERP = 46,024。
    identity:
      "Tamworth lies on the Peel River in north-eastern New South Wales about 420 km north of Sydney at around 400 m elevation, with an urban population of about 46,000 (June 2025, Australian Bureau of Statistics) — the state's third-largest inland city. It is Australia's country-music capital: the Tamworth Country Music Festival, held over ten days in late January since 1973, is the second-largest country music festival in the world, and the 12 m Golden Guitar is the city's landmark. On 9 November 1888 Tamworth became the first town in Australia to light its streets from a municipal power station, earning the title 'city of light'. The Traditional Owners are the Kamilaroi people, from whose language the English word 'budgerigar' comes.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Tamworth SUA 2025-06-30 ERP = 46,024。
    howItWorks:
      "Tamworth is the centre of the New England region of New South Wales, governed by the Tamworth Regional Council with an urban population of about 46,000 in June 2025, Sydney about 420 km south; the council runs local services and the rest belongs to the state. The city lies on the Peel River, in 1888 it was the first town in Australia to light its streets from a municipal power station, its Country Music Festival each January is the second-largest in the world, the Golden Guitar its emblem, its equine centre the largest in the southern hemisphere and the airport west of town. Newcomers most often go wrong by taking Tamworth for a town that exists only in the festival fortnight, when it is the administrative and medical centre of the district all year.",
    layout:
      "The centre sits on the north bank of the Peel, with Peel Street the main street and Bicentennial Park along the river; the Golden Guitar and the country music hall of fame stand on the New England Highway on the south side of town. The Powerstation Museum in the centre commemorates the 1888 street lights. Around the city lie the hills of the New England region and horse studs (Tamworth is one of Australia's equine centres). The airport is about 10 km west. The New England tableland and Armidale lie north, and Port Macquarie's coast over the range to the east.",
    gettingAround:
      "Tamworth Airport (TMW), about 10 km from the centre, has flights to Sydney and Brisbane. The Sydney–Armidale XPT takes about 6 hours; driving from Sydney about 5.5 hours on the New England Highway. Local buses run and the centre is walkable; the surrounding district needs a car. The climate is subtropical but tempered by elevation, with hot summers and cold frosty winters.",
    culture:
      "English is universal. During the January festival the whole town becomes a stage — buskers, pub gigs and packed campgrounds — and lodging should be booked six months or more ahead. The Golden Guitar is the photo stop and the hall of fame tells the story of country music. Horse sports and rodeo are local traditions, centred on the Australian Equine and Livestock Events Centre. No tipping.",
    seeAndDo:
      "The Golden Guitar and the country music hall of fame; the Powerstation Museum; the Peel River walk and Bicentennial Park; events at the Australian Equine and Livestock Events Centre; the roll of renown and hand-prints of country artists in town; the New England towns nearby (Armidale, Nundle); the country music festival in January.",
    whenAndTips:
      "The ten days of the January festival are the liveliest and most crowded; March–May and September–November are most comfortable; summers are hot. A day covers the city. A handy stop on the New England Highway between Sydney and Brisbane.",
  },
  cessnock: {
    identity:
      "Cessnock lies in the lower Hunter Valley of New South Wales about 52 km west of Newcastle and 154 km north of Sydney, with an urban population of about 23,000 (2021 census; the wider local government area about 64,000). It is the main town of the Hunter Valley wine region — one of Australia's oldest, with vineyards from the 1820s — and more than a hundred cellar doors cluster around Pokolbin, known for semillon and shiraz. Cessnock grew as a coal-mining town in the early twentieth century; today wineries, hot-air ballooning and the Hunter Valley Gardens are its draws. The Traditional Owners are the Wonnarua people.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Cessnock (City of Cessnock LGA 63,632 2021, town 23,211; former coal town; Hunter Valley vineyards at Pokolbin ~15 km, ~1,800 ha; Newcastle 52 km; no passenger rail)
    howItWorks:
      "Cessnock is a city of the Hunter Valley in New South Wales, governed by the City of Cessnock whose area held about 64,000 people in 2021, the town itself about 23,000, Newcastle 52 km east; the council runs local services and the rest belongs to the state. The town was raised by coal mining between 1903 and 1923, and the streets of the centre keep the mining-town grid; the Hunter Valley wineries lie about 15 km north-west at Pokolbin, the oldest wine region in Australia, with some 1,800 hectares of vines scattered through the countryside. There is no passenger rail, and travel depends on the car. Newcomers most often go wrong by looking for wineries in Cessnock town, when they lie in the country outside and the town itself is an old miners' town.",
    layout:
      "The town sits on the flat southern edge of the valley, its main street lined with old mining-town buildings. The wineries cluster about 10 km north and north-west around Pokolbin, Lovedale, Rothbury and Mount View, with the Hunter Valley Gardens (a large display garden) at Pokolbin; Broke and Wollombi lie in the valleys further west. The Brokenback Range rises to the north, with Singleton in the upper valley beyond. Newcastle Airport is about 53 km east.",
    gettingAround:
      "Cessnock's local airfield has no scheduled flights; the gateways are Newcastle Airport (NTL, about 53 km) or Sydney Airport (about 2 hours by road). Driving from Sydney takes about 2 hours, and tour coaches and day tours run; by train, go to Maitland and connect by bus. The town is walkable, but the wineries need a car, winery shuttles or a tasting tour. The climate is humid subtropical with hot summers and cool winters.",
    culture:
      "English is universal. Cellar doors mostly charge for tastings (often refunded on purchase) and keep set hours; mind Australia's drink-driving limit — most visitors join a tour or hire a driver. The Hunter Valley Gardens stage a light show around Christmas. Balloons fly at dawn, weather permitting. Local cheese and chocolate makers are worth a stop. No tipping.",
    seeAndDo:
      "Tastings at the Pokolbin wineries (historic estates such as Tyrrell's, Brokenwood and Audrey Wilkinson); the Hunter Valley Gardens; dawn hot-air ballooning; the Hunter Valley cheese factory and chocolate shops; lookouts on the Brokenback Range; the old churches of Wollombi; weekend winery markets and concerts (large open-air shows are common in summer).",
    whenAndTips:
      "The March–May vintage is the liveliest; September–November and winter are clear and dry; summers are hot. Weekends and concert days strain lodging and crowd the cellar doors — weekdays are calmer. Plan one or two nights and stay among the wineries.",
  },
  warrnambool: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Warrnambool City Council LGA 2025-06-30 ERP = 36,255。
    identity:
      "Warrnambool lies on the south-west coast of Victoria and is the city at the western end of the Great Ocean Road (which finishes at Allansford about 13 km east), with about 36,300 people (June 2025, Australian Bureau of Statistics). From June to September southern right whales bring their calves to Logans Beach on the edge of town to nurse, visible from the viewing platform on shore; Flagstaff Hill Maritime Village recreates a nineteenth-century port town and holds shipwreck relics. Tower Hill to the west is a dormant volcano with a wildlife reserve inside the crater. The Traditional Owners are the Gunditjmara people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Warrnambool City Council LGA 2025-06-30 ERP = 36,255。
    howItWorks:
      "Warrnambool is a city on the south-west coast of Victoria, governed by the City of Warrnambool over a small area with about 36,300 people in June 2025, Melbourne 265 km east and about three and a half hours by train; the council runs local services and the rest belongs to the state. The city stands at the western end of the Great Ocean Road, its centre on the high ground by the sea, the Flagstaff Hill maritime museum keeping the old lighthouses and shipwreck relics, and Logans Beach a nursery for southern right whales, where mothers and calves linger off the beach from late May to August; dairying is the district's economy. Newcomers most often go wrong by taking Warrnambool for a lookout on the Great Ocean Road, when it is a city at the road's end with a port and industry of its own.",
    layout:
      "The centre sits on a terrace above the sea, with Liebig Street the main street and Flagstaff Hill overlooking the harbour on the south side; the Logans Beach whale platform is about 5 km east beyond the Hopkins River mouth. The Tower Hill crater is about 15 km west, and the harbour town of Port Fairy about 15 km further; eastwards the Great Ocean Road reaches the Twelve Apostles and Port Campbell in about 80 km. Hopkins Falls lie north of town. The airport, about 11 km north-west, serves general aviation only.",
    gettingAround:
      "Warrnambool Airport has no scheduled passenger flights; from Melbourne Airport the drive is about 3.5 hours. The V/Line train from Melbourne's Southern Cross station takes about 3.5 hours and is the most convenient public transport. Local buses run and the centre is walkable; Logans Beach, Tower Hill and the Great Ocean Road need a car. The climate is Mediterranean, with mild dry summers, cool wet winters and strong sea winds.",
    culture:
      "English is universal. Whale watching is done from the shore platform, not by chasing boats at sea, and June–September is the reliable window. Tower Hill has wild emus, koalas and kangaroos — do not feed them. Flagstaff Hill stages a shipwreck-themed sound-and-light show at night. The Port Fairy folk festival in March is the big regional event. No tipping.",
    seeAndDo:
      "The Logans Beach whale platform (June–September); Flagstaff Hill Maritime Village (shipwreck relics, evening sound-and-light show); the Tower Hill wildlife reserve (crater walks); Hopkins Falls; Lady Bay beach and the breakwater; the old port and beaches of Port Fairy; the Twelve Apostles, London Bridge and the Bay of Islands east along the Great Ocean Road.",
    whenAndTips:
      "June–September for whales, December–March for the beaches; winters are windy and wet. It is a good base at the western end of the Great Ocean Road — the Twelve Apostles stretch can be done in a day from here. Check the daily whale sightings bulletin.",
  },
  bright: {
    identity:
      "Bright is a small town in the alpine region of north-eastern Victoria in the Ovens Valley at about 320 m elevation, about 320 km north-east of Melbourne, with about 2,600 people (2021 census). It is famous for its autumn colour — the town and valley are planted with European deciduous trees and an autumn festival is held every April–May — and it is the gateway to the Victorian Alps: Mount Buffalo National Park, the Mount Hotham and Falls Creek ski resorts, and Victoria's highest peak, Mount Bogong (1,986 m), lie nearby. The 95 km Murray to Mountains Rail Trail follows the old railway through the town. Gold was mined here in the nineteenth century.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Bright (2,620 2021; Alpine Shire seat; Ovens Valley 319 m; Autumn Festival; gateway to Mount Buffalo/Hotham/Feathertop; Murray to Mountains Rail Trail; Melbourne ~310 km; no rail)
    howItWorks:
      "Bright is a small town at the foot of the Victorian Alps with about 2,600 people in 2021, the seat of Alpine Shire, whose council runs local services while the rest belongs to the state. The town lies at the head of the Ovens Valley at 319 m, its autumn colours from European trees and its Autumn Festival its emblem, the snowfields and trails of Mount Buffalo, Mount Hotham and Feathertop all climbing from here, the old railway turned into the Murray to Mountains rail trail, Melbourne about 310 km south-west and no railway. Newcomers most often go wrong by expecting Bright on the mountain, when it lies on the valley floor and the snowfields are an hour's drive up on the tops.",
    layout:
      "The town runs along the Ovens River, with Gavan Street the main street and walking tracks and a swimming hole along the water; the autumn colour is thickest in the valley and along the tree-lined streets of the centre. Mount Buffalo is about 30 km west (plateau, granite tors, lookouts), Mount Hotham about 55 km south-east, and Falls Creek about 100 km east over the range; Harrietville and the Mount Feathertop trailhead lie south. The rail trail runs west through Myrtleford and Beechworth to Wangaratta.",
    gettingAround:
      "Bright has no airport with scheduled flights; the nearest commercial airport is Albury (about 90 km), and Melbourne Airport is about 3.5 hours by car. V/Line trains reach Wangaratta with a connecting coach to Bright. The town is walkable and cyclable, but the mountains need a car; chains must be carried on Mount Hotham in winter. The climate is temperate with warm summers and cold wet winters, with snow on the peaks.",
    culture:
      "English is universal. The autumn festival fills the town and lodging is tight; keep to the trails in Mount Buffalo and the Alpine National Park, where weather changes fast — carry warm layers in any season. The ski resorts charge entry and lift fees, and the season runs June–September. Local breweries, wineries and the valley's nut and berry farms are part of the visit. No tipping.",
    seeAndDo:
      "The tree-lined streets and Ovens River walks in autumn; Mount Buffalo National Park (lookouts, tors, lakes, snow in winter); cycling the Murray to Mountains Rail Trail; skiing at Mount Hotham or its summer alpine walks; the Mount Feathertop hike (a long day); the Bright brewery; the old gold town of Harrietville; the historic streets of Beechworth.",
    whenAndTips:
      "April–May brings the best colour and the biggest crowds — book months ahead; December–February suits cycling and riverside cooling; June–September is ski season. Mountain temperatures swing sharply and the weather turns quickly. Carry chains when driving up in winter.",
  },
  bundaberg: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Bundaberg SUA（城区）2025-06-30 ERP = 79,283。
    identity:
      "Bundaberg lies on the Burnett River on the central Queensland coast about 370 km north of Brisbane, with an urban population of about 79,000 (June 2025, Australian Bureau of Statistics). It grew on sugar cane: the Bundaberg Rum distillery, founded in 1888, makes rum from molasses and is Australia's best-known rum brand, and Bundaberg ginger beer has been brewed here since 1960. Mon Repos on the coast is one of the largest loggerhead-turtle nesting sites on the mainland of the southern hemisphere, with guided night viewing of nesting and hatching from November to March; boats and small planes from Bundaberg reach Lady Musgrave and Lady Elliot islands at the southern tip of the Great Barrier Reef, hence the title 'southern gateway to the reef'. The Traditional Owners include the Taribelang Bunda people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Bundaberg SUA 2025-06-30 ERP = 79,283。
    howItWorks:
      "Bundaberg is Queensland's ninth city, governed by the Bundaberg Regional Council with about 79,000 people in the urban area in June 2025; the council runs local services and the rest belongs to the state. The city lies on both banks of the Burnett about 20 km from the coast, cane fields ringing the town, the Bundaberg Rum distillery of 1888 its emblem, Bargara on the shore 13 km east, the turtles of Mon Repos coming ashore to nest from November to March, flights to Lady Elliot Island letting it call itself the southern gateway to the reef, the airport south of town and backpackers coming for farm work to extend their visas. Newcomers most often go wrong by expecting Bundaberg on the sea, when the town lies inland on the river and the beach is another fifteen minutes' drive.",
    layout:
      "The centre sits on the south bank of the Burnett, whose mouth is about 20 km east at Burnett Heads. The rum distillery stands by the river on the east side of the city and the ginger-beer brewery to the south. The Mon Repos turtle reserve is about 15 km north-east on the coast; Bargara is the seaside resort east of town with beaches and reef snorkelling; Lady Elliot Island is about 30 minutes by light aircraft from Bundaberg, and Lady Musgrave Island by boat from the town of 1770 or Bundaberg. Cane fields surround the city. The airport is about 5 km south-west.",
    gettingAround:
      "Bundaberg Airport (BDB), about 5 km from the centre, has flights to Brisbane. The tilt train from Brisbane takes about 4.5 hours; driving on the Bruce Highway about 4.5 hours. Local buses run and the centre is walkable; Mon Repos and Bargara need a car, and turtle viewing must be booked, with shuttles provided. The climate is humid subtropical with hot wet summers and mild dry winters.",
    culture:
      "English is universal. Turtle viewing at Mon Repos is run by the Queensland parks service: no lights or flash on the beach at night, and follow the rangers. Distillery tours include tastings for adults only; the sugar mills can be seen during the crushing season (June–November). Watch for the stinger season (November–May) when swimming. No tipping.",
    seeAndDo:
      "The Bundaberg Rum distillery tour; the Bundaberg Barrel ginger-beer experience; the Mon Repos turtle centre and night turtle viewing (November–March); Bargara beach and reef snorkelling; Burnett River cruises; the botanic gardens and the Hinkler aviation museum; a flight to Lady Elliot Island or a boat to Lady Musgrave Island for the southern reef (day trip or overnight).",
    whenAndTips:
      "November–January for nesting turtles and January–March for hatchlings, booked ahead; May–September is dry and pleasant. Lady Elliot flights and island lodging book out early. Summers are hot and wet.",
  },
  "hervey-bay": {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Hervey Bay SUA（城区）2025-06-30 ERP = 63,312。
    identity:
      "Hervey Bay lies on Queensland's Fraser Coast about 290 km north of Brisbane, with an urban population of about 63,300 (June 2025, Australian Bureau of Statistics). It is Australia's best-known whale-watching destination: from July to November humpback whales pause in the sheltered bay on their southward migration, and in 2019 it was declared the world's first Whale Heritage Site by the World Cetacean Alliance. Beyond the bay lies K'gari (Fraser Island), the world's largest sand island and a World Heritage site since 1992, reached by ferry from River Heads south of town. The Urangan pier, stretching almost 900 m into the sea, is the town's landmark. The Traditional Owners are the Butchulla people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Hervey Bay SUA 2025-06-30 ERP = 63,312。
    howItWorks:
      "Hervey Bay is a city of Queensland's Fraser Coast with an urban population of about 63,300 in June 2025, part of the Fraser Coast Regional Council formed by merger in 2008, whose council runs local services while the rest belongs to the state. The city has no traditional centre: Pialba, Torquay, Scarness and Urangan, once separate townships, run along the Esplanade in a strip a dozen kilometres long, Urangan Pier is the seaside reference point, ferries to K'gari (Fraser Island) leave from River Heads to the south, whale-watching boats from July to October made it the world's first Whale Heritage Site in 2019, the airport lies south of town and retirees form a large share. Newcomers most often go wrong by looking for a downtown in Hervey Bay, when it is a string of seaside suburbs, each with a shopping street of its own.",
    layout:
      "Hervey Bay is a string of seaside suburbs along the southern shore of the bay from Pialba to Urangan, joined by the Esplanade, with calm, waveless beaches. The Urangan pier and marina are at the eastern end, where the whale boats depart, and the airport is beside Urangan. The River Heads ferry terminal is about 20 km south, with a 50-minute crossing to Kingfisher Bay on K'gari; the island has Seventy-Five Mile Beach, Lake McKenzie, rainforest and dunes.",
    gettingAround:
      "Hervey Bay Airport (HVB) at Urangan, about 9 km from the centre, has scheduled flights. Trains run to Maryborough West with a connecting coach; driving from Brisbane takes about 3.5 hours. Local buses run and the Esplanade is good for cycling; River Heads needs a car, and K'gari requires a four-wheel drive (hire one or join a tour). The climate is humid subtropical with hot humid summers and warm dry winters — the whale high season.",
    culture:
      "English is universal. Whale boats keep the regulated distance and never chase; the sheltered bay is one of the few places in Australia where whales can be watched from small boats at close range. K'gari is Butchulla country and a World Heritage site: the dingoes are wild — never feed them, and keep food and children close; beach driving follows the tides. The sea is calm for swimming, but mind the stinger season. No tipping.",
    seeAndDo:
      "Whale-watching cruises (July–November, half a day); sunset and fishing at the Urangan pier; cycling the Esplanade and the beaches; a day or multi-day trip to K'gari (Seventy-Five Mile Beach, Lake McKenzie, the Central Station rainforest, the Champagne Pools); the botanic gardens and wetlands; the heritage streets of Maryborough to the south; dolphin and turtle cruises.",
    whenAndTips:
      "July–November is whale season and the peak, with August–September the most reliable; other months suit the island and beaches. K'gari needs a four-wheel drive and an access permit — tours are the easiest option. Book whale cruises ahead and bring seasickness remedies if needed.",
  },
  geraldton: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Geraldton SUA（城区）2025-06-30 ERP = 42,104。
    identity:
      "Geraldton lies on the mid-west coast of Western Australia about 420 km north of Perth, with an urban population of about 42,000 (June 2025, Australian Bureau of Statistics) — the largest city north of Perth. It is a rock-lobster fishing and wheat-export port and a windsurfing destination. The HMAS Sydney II Memorial (2001) on Mount Scott in the city commemorates the Australian cruiser lost in 1941, its dome of 645 stainless-steel seagulls representing the crew. The Abrolhos Islands about 60 km offshore are where the Batavia was wrecked in 1629; about 100 km north lies the pink Hutt Lagoon and about 160 km north the gorge coast of Kalbarri. The Traditional Owners are the Yamatji people.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Geraldton SUA 2025-06-30 ERP = 42,104。
    howItWorks:
      "Geraldton is a port city of Western Australia's Mid West, governed by the City of Greater Geraldton with about 42,000 people in the urban area in June 2025, Perth 424 km south; the council runs local services and the rest belongs to the state. The city grew around its port, whose seven bulk berths ship iron ore, grain and mineral sands, its centre on the shore by the port, the HMAS Sydney II Memorial on the hill to the east with 645 stainless-steel gulls for the crew lost in 1941; the Abrolhos Islands lie 60 km offshore, where the Batavia was wrecked in 1629; spring and summer winds make it a windsurfing and kitesurfing ground, and the airport lies east of town. Newcomers most often go wrong by taking Geraldton for a stop on the road to Perth, when it is the outlet to the sea for the mines and farms of the Mid West.",
    layout:
      "The centre sits by the sea, with the foreshore and port to the north, St Francis Xavier Cathedral (designed by the architect-priest Hawes) in the middle of town and the HMAS Sydney memorial on Mount Scott to the east. Beaches and windsurfing spots run south, and the Indian Ocean Drive follows the coast north to Kalbarri; Hutt Lagoon lies beside Port Gregory. The Abrolhos Islands are reached by air or boat. The airport is about 11 km east.",
    gettingAround:
      "Geraldton Airport (GET), about 11 km from the centre, has flights to Perth and regional services to Broome and Karratha. Driving from Perth on the Brand Highway takes about 4.5 hours, and coaches run. Local buses serve the city and the centre is walkable; Hutt Lagoon and Kalbarri need a car. The climate is Mediterranean with hot dry windy summers and mild wet winters, and about 420 mm of rain a year.",
    culture:
      "English is universal. The HMAS Sydney memorial is a national place of remembrance — keep quiet. The Abrolhos Islands are a protected area: land and dive with licensed operators, and recreational lobster fishing needs a licence. Windsurfing peaks in the windy spring and summer. Yamatji art is shown in the local gallery. No tipping.",
    seeAndDo:
      "The HMAS Sydney II Memorial; the Museum of Geraldton (Batavia shipwreck relics); St Francis Xavier Cathedral; the foreshore and beaches; the Abrolhos Islands (scenic flights or dive tours); the pink Hutt Lagoon to the north; the gorges and sea cliffs of Kalbarri National Park; Greenough to the south.",
    whenAndTips:
      "September–November and March–May are most comfortable; summers are hot and windy, good for windsurfing, and winters bring rain. A day for the city, a day for Kalbarri and the pink lake. The first stop on the road north from Perth to Ningaloo Reef and Broome.",
  },
  esperance: {
    // identity sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Shire of Esperance LGA 2025-06-30 ERP = 14,663；镇本身城区（Esperance SUA）只有 12,580——郡辖区把周边农业腹地也算了进去，两者差约 2,000 人。正文取郡口径并写明。
    identity:
      "Esperance lies on the south coast of Western Australia about 720 km south-east of Perth, with about 14,700 people in the shire (June 2025, Australian Bureau of Statistics). It is known for Australia's whitest sand and turquoise water: in Cape Le Grand National Park about 50 km east, kangaroos often lounge on the beach at Lucky Bay; the Recherche Archipelago scatters more than a hundred islands across the bay; and the 40 km Great Ocean Drive loop west of town strings together beaches and cliffs. Debris from the American Skylab space station fell in this district in 1979. The Traditional Owners are the Wudjari people of the Noongar nation, whose name for the place, Kepa Kurl, means 'where the water lies like a boomerang'.",
    // howItWorks sources: ABS《Regional population, 2024–25 financial year》（2026-03-31 发布），ERP 时点 2025-06-30，取自一手数据表 32180DS0002_2024-25.xlsx（LGA）/ 32180DS0004_2001-25.xlsx（SUA）。https://www.abs.gov.au/statistics/people/population/regional-population/latest-release （级别 1）
    //   ABS Regional population 每年 3 月下旬发布上一财年（截至 6 月 30 日）的数，下一期 2025–26 财年预计 2027-03 发布。**城市级人口应当用这个年度 ERP，不是五年一次的普查数。**
    //   Shire of Esperance LGA 2025-06-30 ERP = 14,663（镇区 SUA 为 12,580）。
    howItWorks:
      "Esperance is a town on the south coast of Western Australia, governed by the Shire of Esperance over about 42,000 km² with about 14,700 people in June 2025, Perth 720 km north-west; the shire runs local services and the rest belongs to the state. The town lies on Esperance Bay, its port among the deepest on the southern coast shipping grain and minerals, Twilight Beach strung along the coast road west of town, Cape Le Grand National Park and the kangaroos of Lucky Bay about 60 km east, the Recherche Archipelago offshore, the debris of Skylab fallen outside town in 1979, and the airport north of town. Newcomers most often go wrong by expecting Lucky Bay at the edge of town, when it lies an hour's drive away in the national park.",
    layout:
      "The town sits on the western shore of Esperance Bay, with the foreshore and jetty in the centre; west of town runs the Great Ocean Drive loop (Twilight Beach, Blue Haven, lookouts) and Pink Lake (rarely pink now). Cape Le Grand National Park is about 50 km east (Lucky Bay, Hellfire Bay, Frenchman Peak), with Cape Arid further on. The Recherche islands lie offshore with cruises to them. The airport is at Gibson, about 20 km north-west.",
    gettingAround:
      "Esperance Airport (EPR), about 20 km from town, has flights to Perth only. Driving from Perth takes about 8 hours and from Kalgoorlie about 4, and coaches run. The town is walkable and cyclable, but Cape Le Grand and the Great Ocean Drive need a car. The climate is Mediterranean with warm dry summers, mild wet winters and wind all year.",
    culture:
      "English is universal. The kangaroos at Lucky Bay are wild — do not feed them and keep your distance; the national park charges entry and camping must be booked. The south-coast surf and rips are dangerous — swim only at patrolled beaches and watch for king waves when fishing. The Esperance Museum holds Skylab debris. No tipping.",
    seeAndDo:
      "Cape Le Grand National Park (Lucky Bay, Hellfire Bay, the Frenchman Peak walk); the Great Ocean Drive loop (Twilight Beach, Blue Haven, lookouts); the Esperance foreshore and jetty; a Recherche Archipelago cruise (Woody Island); the Esperance Museum; Pink Lake; the wild coast of Cape Arid National Park to the east (four-wheel drive).",
    whenAndTips:
      "December–March has the warmest water and best weather and is the peak; spring brings wildflowers, winter rain and wind. Allow at least a day for Cape Le Grand, staying in town or camping in the park. Distances are long — it is usually linked with Albany and Kalgoorlie on a southern Western Australia loop.",
  },
  tanunda: {
    identity:
      "Tanunda is the central town of South Australia's Barossa Valley, about 70 km north-east of Adelaide, with about 4,700 people (2021 census). The Barossa is one of Australia's most famous wine regions: Prussian settlers founded villages such as Bethany and Langmeil in the 1840s, and Lutheran churches, baking and smallgoods traditions survive; the shiraz vines planted in 1847 at Turkey Flat in Tanunda are regarded as among the oldest still in commercial production anywhere, and Seppeltsfield, Penfolds and Jacob's Creek are among the great names in the valley. The Tanunda Town Band is one of the oldest brass bands in the southern hemisphere. The Traditional Owners are the Peramangk and Ngadjuri peoples.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Tanunda (4,710 2021; The Barossa Council, seat Nuriootpa; Barossa Valley; Prussian/Silesian Lutheran settlement 1840s; Turkey Flat Shiraz 1847; Adelaide ~66 km; no rail)
    howItWorks:
      "Tanunda is a town of South Australia's Barossa Valley with about 4,700 people in 2021, part of The Barossa Council whose seat is at Nuriootpa a few kilometres north; the council runs local services and the rest belongs to the state. The town lies along its main street on the valley floor, Prussian and Silesian Lutheran settlers of the 1840s founded the villages around it, its male choir and brass band survive to this day, Shiraz vines planted in 1847 are believed the oldest still in commercial production in the world, the wineries of Jacob's Creek and Seppeltsfield lie scattered through the valley, Adelaide about 66 km south-west, and there is no railway. Newcomers most often go wrong by taking Tanunda for the capital of the Barossa, when the council sits at Nuriootpa and the wineries are spread across the valley.",
    layout:
      "Tanunda lies in the middle of the valley, with Murray Street the main street and German churches and old shops in town. Nuriootpa (Penfolds and other large wineries) is about 7 km north; Seppeltsfield (the palm avenue and centenary cellars) about 10 km north-west; Rowland Flat (Jacob's Creek) and Lyndoch about 8 km south; the Mengler Hill lookout is east of town. Eden Valley lies in the hills to the east and is known for riesling. Adelaide Airport is about 70 km south-west.",
    gettingAround:
      "The Barossa has no airport with scheduled flights; from Adelaide Airport the drive is about 1 hour. Day tasting tours and buses (about 1.5 hours) run from Adelaide. The town is walkable, but the wineries need a car, a bicycle (there is a cycle path), a hired driver or a tour. The climate is Mediterranean with hot dry summers and cool wet winters.",
    culture:
      "English is universal, with German heritage in the churches, bakeries and festivals. Cellar doors keep set hours and mostly charge for tastings; mind the drink-driving limit — a tour or driver is safest. The Barossa Vintage Festival around Easter in odd-numbered years is the biggest event. Lutheran churches can be visited — keep quiet during services. German-style baking, smoked meats and cheese are local staples. No tipping.",
    seeAndDo:
      "Seppeltsfield (centenary tawny, the palm avenue); the Penfolds, Jacob's Creek and Turkey Flat cellar doors; the Mengler Hill lookout over the valley; Tanunda's Lutheran churches and German bakeries; the Barossa farmers' market (Saturdays, Angaston); the riesling wineries of Eden Valley; hot-air balloon flights over the valley; the Whispering Wall at the Barossa Reservoir.",
    whenAndTips:
      "March–April vintage is the liveliest (with the festival in odd years) and September–November spring is pleasant; summers are hot. The wineries are many and spread out — allow one or two nights. Book restaurants and lodging at weekends.",
  },
  strahan: {
    identity:
      "Strahan is a small fishing village on Macquarie Harbour on Tasmania's west coast with only about 630 people (2021 census), yet it is the gateway to the Tasmanian Wilderness World Heritage Area. Cruises pass through Hells Gates, the harbour's narrow mouth, and run up the Gordon River deep into the temperate rainforest of the Franklin–Gordon Wild Rivers National Park; Sarah Island in the harbour was one of the harshest penal settlements in colonial Australia between 1822 and 1833. The West Coast Wilderness Railway follows the old mining line from Strahan to Queenstown. The Traditional Owners are the palawa, the Tasmanian Aboriginal people.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short; LGA/state split per Local government in Australia): Strahan (634 2021; West Coast Council, seat Queenstown; Macquarie Harbour; Gordon River cruises into the Tasmanian Wilderness WHA; Sarah Island; West Coast Wilderness Railway; Hobart ~302 km)
    howItWorks:
      "Strahan is a small village on Tasmania's west coast with about 630 people in 2021, part of the West Coast Council whose seat is at Queenstown 40 km inland; the council runs local services and the rest belongs to the state. The village lies on the shore of Macquarie Harbour, in the nineteenth century the port for Huon pine and minerals, and now lives on tourism: the Gordon River cruises sail from here into the Tasmanian Wilderness World Heritage Area, the penal settlement ruins of Sarah Island lie in the harbour, the West Coast Wilderness Railway runs to Queenstown, and Hobart lies about 300 km south-east. Newcomers most often go wrong by taking Strahan for a town, when it is a wharf village of a few hundred, with the hospital, the fuel and the council all at Queenstown.",
    layout:
      "The village sits on Strahan harbour at the northern end of Macquarie Harbour, with the wharf, old customs house and shops along one waterfront street; cruises and the railway both leave from here (the station is at Regatta Point). Macquarie Harbour stretches about 30 km south-west with Hells Gates at its western mouth; the Gordon River enters at the southern end and Sarah Island lies in the southern part of the harbour. Ocean Beach and the Henty Dunes are on the coast to the west. Queenstown is about 40 km north-east in the hills, Hobart about 300 km south-east.",
    gettingAround:
      "Strahan Airport (SRN) lies about 4 km west of the village; most visitors drive — about 4.5 hours from Hobart and 2.5 from Burnie on winding mountain roads. The village is walkable; cruises and the railway must be booked ahead. The climate is temperate maritime, wet all year (nearly 1,500 mm), cool and windy, with cold winters.",
    culture:
      "English is universal. Sarah Island is a penal-settlement site whose guides tell a heavy history — visit respectfully. The Gordon River rainforest is World Heritage: cruises land only at set points with boardwalks, and moss and trees must not be touched; Ocean Beach has dangerous surf and is not for swimming. The West Coast Wilderness Railway is a steam heritage line. The village stages a long-running play about the convict story. No tipping.",
    seeAndDo:
      "A Gordon River cruise (Hells Gates, Sarah Island, rainforest walks; half a day to a day); the West Coast Wilderness Railway to Queenstown (half or full day); sandboarding on the Henty Dunes; sunset at Ocean Beach; Hogarth Falls; the waterfront walk and old customs house; the mining landscape and railway terminus at Queenstown.",
    whenAndTips:
      "December–March has the more settled weather and the most cruise and train departures; winter is cold and wet with fewer services. Book cruises and the railway ahead. The west-coast roads are winding and slippery in rain — allow extra time.",
  },
};
