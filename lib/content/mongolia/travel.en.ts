import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Mongolia ============
  "mongolia-overview": {
    // identity sources（2026-09-13 核改）：NSO 1212.mn dashboard「2025-12-31 Population 3 591 120」（1 级）。旧记录：MONTSAME 2024-04-30 转引 NSO：截至 2023 年末约 350 万（+4.72 万 / +1.4%）。**2024 年末终值未查到**。⚠️ 蒙古政府站点的证书问题不止 1212.mn 一个域名——新开的 data.nso.mn 本轮同样报 certificate expired，说明是这批站点普遍的问题。下一轮换手段：① web.archive.org 抓 1212.mn / data.nso.mn 的历史快照绕开实时证书校验；② UN Demographic Yearbook（UNSD 收录各国统计局报送数）。2026-09-12 核。
    identity:
      "Mongolia is a landlocked country bordered by Russia to the north and China to the south, covering about 1,564,116 km² (Mongolian General Department of Land Affairs, Geodesy and Cartography, end-2023) with a population of about 3.59 million at the end of 2025 (National Statistics Office of Mongolia); its capital is Ulaanbaatar, the official language is Mongolian (written in Cyrillic), and its currency is the tögrög (MNT).",
    layout:
      "The country divides roughly into: the Centre (Ulaanbaatar and the Kharkhorin/Orkhon valley, the political and cultural core), the North (Erdenet, Darkhan, Mörön — forest and lake country), the West (Khovd, Ölgii — the Mongol Altai and the Kazakh community), the South Gobi (Dalanzadgad — the Gobi desert belt), and the East (Choibalsan — the Daurian steppe belt).",
    gettingAround:
      "Domestic flights are hubbed at Chinggis Khaan International Airport in Ulaanbaatar, reaching Khovd, Ölgii, Mörön, Dalanzadgad, Choibalsan and other destinations, some routes seasonal; the domestic rail backbone is the Trans-Mongolian Railway (Ulaanbaatar–Sükhbaatar–Russia and Ulaanbaatar–Zamiin-Üüd–China); inter-provincial travel otherwise relies heavily on roads, some of which are in limited condition. Visa or visa-free arrangements for short-term visitors vary by nationality — check Mongolia's official current announcements.",
    culture:
      "The official language is Mongolian, written in Cyrillic; English has some presence in Ulaanbaatar and in tourism. Mongolians place strong value on nomadic tradition and hospitality; visiting a ger (traditional yurt) as a guest comes with its own customs (such as not stepping on the threshold, and receiving objects with both hands). Tipping is not a mandatory tradition, but leaving 5–10% in city restaurants is increasingly common. The voltage is 220V, with plugs mostly two-round-pin European style (types C/E/F).",
    seeAndDo:
      "Natural landforms: Gobi Gurvansaikhan National Park (Khongoryn Els dunes, Yolyn Am gorge), Lake Khövsgöl, the Orkhon Waterfall, the Dariganga volcanic field. History and culture: the Orkhon Valley Cultural Landscape at Kharkhorin, Erdene Zuu Monastery, the sacred mountain of Burkhan Khaldun. Steppe life: Przewalski's horses at Khustain Nuruu National Park, staying with a nomadic herder family in a ger, the Naadam festival (every July).",
    whenAndTips:
      "June–August has the most pleasant climate and is peak tourist season, coinciding with the Naadam festival; winter (December–February) is long and severely cold, with Ulaanbaatar often ranked among the coldest capitals in the world — dress accordingly. Given the vast distances involved, plan cross-region itineraries around domestic flights or allow ample time for road travel.",
  },
  ulaanbaatar: {
    // identity sources: 乌兰巴托 2025 年约 1,796,045（蒙古国家统计局，经维基 infobox 转引 data.1212.mn，
    //   **3 级**，2026-09-08 核）。
    //   **1212.mn 本轮仍无法直连**（unable to verify the first certificate），
    //   蒙古各城的数字都只能核到这一级 —— 恢复访问后应优先回源核对。
    identity:
      "Ulaanbaatar is the capital of Mongolia, with a population of about 1.8 million (2025) — nearly half the country's total — set in a highland valley on the Tuul River, and the country's political, economic and cultural centre.",
    // howItWorks sources: Wikipedia (2026-09): Ulaanbaatar (provincial status; 9 districts, 204 khoroo; Citizens' Representatives Khural 45 members; governor appointed by PM on nomination; ~4,700 km²; ~1.7 million 2024 ≈ half of Mongolia; ger districts; buses only; airport 50 km)
    howItWorks:
      "Ulaanbaatar is the capital of Mongolia, ranking with the provinces and governed by an elected Citizens' Representatives Khural and a mayor nominated by the Khural and appointed by the Prime Minister; the city is divided into nine districts and, beneath them, some two hundred khoroo, the units in which residents register and do business. It covers about 4,700 km², mostly mountain and steppe, with about 1.8 million people in 2025, close to half the country. The city lies in the valley of the Tuul at about 1,350 m, with Bogd Khan Mountain to the south: Sükhbaatar Square is the political and commercial centre, Peace Avenue the east–west axis, Soviet-era apartment districts spread around the centre, and more than half of residents live in the ger districts sprawling over the surrounding hills — mostly without piped water or district heating, where coal stoves in winter are the main source of the air pollution. Public transport is buses only, with no rail; Chinggis Khaan International Airport lies about 50 km south. Addresses give district, khoroo, street, building and door. Newcomers most often go wrong by picturing Ulaanbaatar as a compact Soviet city, when most of its people live in the ger districts beyond the centre.",
    layout:
      "The city centre is anchored by Sükhbaatar Square (also called Chinggis Square); the area around Gandantegchinlen Monastery preserves traditional Tibetan Buddhist architecture, while large ger districts of traditional Mongolian yurts spread across the city's outskirts.",
    gettingAround:
      "Chinggis Khaan International Airport opened in 2021 about 52 km south of the city centre; an airport bus takes about an hour into town. Around the city, buses and taxis are the main options, and rush-hour traffic congestion is common.",
    culture:
      "The official language is Mongolian; the average annual temperature is about -0.8°C, making it one of the coldest capital cities in the world. The city blends Soviet-era architecture, Tibetan Buddhist monasteries and modern high-rises. Tipping is not a local tradition; it has become more common in city restaurants in recent years, with no set rate.",
    seeAndDo:
      "Sükhbaatar Square (Chinggis Square); Gandantegchinlen Monastery; the National Museum of Mongolia; the Chinggis Khaan equestrian statue (on the outskirts); the Bogd Khaan Palace Museum.",
    whenAndTips:
      "June–August has the most pleasant climate; winter is long and severely cold, with January averages dropping to below -20°C, so dress warmly and build in indoor activities.",
  },
  erdenet: {
    // 人口 sources（2026-09-13 核改）：同中文侧，NSO data.1212.mn DT_NSO_0300_004V5 resident population（1 级）。
    identity:
      "Erdenet is Mongolia's second-largest city, with about 103,100 residents in 2025 (National Statistics Office of Mongolia), in Orkhon Province in the north; it grew into an important industrial city around a large copper-molybdenum mine.",
    // howItWorks sources: Wikipedia (2026-09): Erdenet (Orkhon Province capital; 112,520 2026; founded 1974 around copper-molybdenum mine; 240 km NW of Ulaanbaatar; rail branch; carpet factory 1981)
    howItWorks:
      "Erdenet is Mongolia's second city and the capital of Orkhon Province, a province created in 1994 for the city alone and so small it is very nearly the city itself. It had about 103,100 residents in 2025. The city was built in 1974 to work the Erdenet copper-molybdenum deposit, still among the largest copper mines in Asia; the mining company was once a Mongolian-Soviet joint venture and is now controlled on the Mongolian side, and it remains one of the country's main sources of foreign currency. The city was built to a Soviet plan, with rows of apartment blocks and the mine on the hills to the north, and the carpet factory of 1981 is its other emblem. It lies in the valley between the Selenge and Orkhon rivers, about 240 km in a straight line north-west of Ulaanbaatar, with a railway branch joining the Trans-Mongolian line and a fully paved road. Addresses give district, street, building and door. Newcomers most often go wrong by taking Erdenet for an ordinary provincial town, when it is a city that exists for one mine.",
    layout:
      "The city was built around the mining and ore-processing facilities of the Erdenet Mining Corporation, its layout carrying the typical features of a Soviet-era planned industrial town, with residential and factory areas kept largely separate.",
    gettingAround:
      "Erdenet Airport (ERT) serves the city, though flight frequency should be checked against current schedules; the city can also be reached by road or a branch of the Mongolian railway from Ulaanbaatar, a journey of several hours.",
    culture:
      "The official language is Mongolian. Erdenet was established in the 1970s as a joint Mongolian-Soviet copper-mining venture, and its population has a relatively high proportion of technical workers, representative of Mongolia's industrial-city culture.",
    seeAndDo:
      "The Erdenet Mining Corporation viewpoint; the city's central square; the natural scenery of the northern foothills of the Khangai Mountains nearby.",
    whenAndTips:
      "June–August has the most pleasant climate; as an industrial city it sees relatively few tourists, making it a good brief stop for travellers interested in Mongolia's modern industrial development.",
  },
  darkhan: {
    // 人口 sources（2026-09-13 核改）：同中文侧，NSO data.1212.mn DT_NSO_0300_004V5（1 级）。
    // identity sources: 达尔汗-乌勒省国家注册局：省 102,014 人、达尔汗市 85,066 人，**页面未标统计时点**，故正文不写年份而写明「该页未标注」——比硬安一个年份诚实。原文的「2022 年 8.8 万」来源已追不到。2026-09-12 核。
    identity:
      "Darkhan is Mongolia's third-largest city by population, with a population of about 89,400 in 2025 (National Statistics Office of Mongolia, Darkhan sum; the page carries no reference date), in Darkhan-Uul Province in the north, and an important industrial and transport hub on the Trans-Mongolian Railway.",
    // howItWorks sources: Wikipedia (2026-09): Darkhan (city) (Darkhan-Uul capital; 87,696 2022; founded 1961 with Comecon aid; old/new Darkhan; 220 km N of Ulaanbaatar; Trans-Mongolian Railway; 86% in apartments)
    howItWorks:
      "Darkhan is Mongolia's third city and the capital of Darkhan-Uul Province, created in 1994 and among the smallest provinces in the country. It had about 89,400 residents in 2025. The city was built from nothing in 1961 as an industrial town with Comecon aid, with Polish, Hungarian and other specialists taking part, timber, meat processing and building materials as its first industries and coal, metallurgy and building materials as its mainstays today. It falls into two parts: Old Darkhan is the first industrial area around the station, New Darkhan the residential districts planned later, and about 86 per cent of residents live in apartments, with the ger districts on the edge — an unusual proportion for a Mongolian city. It lies on the Trans-Mongolian Railway and the main highway, about 220 km by road north of Ulaanbaatar, in one of the country's main farming regions. Addresses give district, street, building and door. Newcomers most often go wrong by taking Darkhan for a station to pass through, when it is a planned city with an industry of its own.",
    layout:
      "The city is divided into northern and southern districts linked by an industrial zone in between, a classic example of a new industrial town planned along Soviet lines during Mongolia's planned-economy era.",
    gettingAround:
      "There is no stable scheduled passenger air service locally; the city is mainly reached from Ulaanbaatar via the Trans-Mongolian Railway (the Ulaanbaatar–Sükhbaatar line) or by road, a journey of about 3 to 4 hours.",
    culture:
      "The official language is Mongolian. Darkhan was founded in 1961 as Mongolia's second city built under unified Soviet-style planning during the socialist era; its name means \"blacksmith,\" symbolizing its industrial character.",
    seeAndDo:
      "Darkhan's central square; the surrounding steppe and river-valley scenery; views along the Trans-Mongolian Railway route.",
    whenAndTips:
      "June–August has the most pleasant climate; as a railway-line city, it makes a convenient stopover for itineraries between Ulaanbaatar and the northern Selenge direction.",
  },
  kharkhorin: {
    // 人口 sources（2026-09-13 核改）：同中文侧，NSO data.1212.mn DT_NSO_0300_004V5（1 级）。
    identity:
      "Kharkhorin is the site of Karakorum, the 13th–14th century capital of the Mongol Empire, set in the Orkhon Valley, and today the core gateway for exploring the Orkhon Valley Cultural Landscape (a UNESCO World Heritage Site since 2004). Well watered and rich in pasture, and commanding the central steppe, the valley had already served as the seat of the Türk and Uyghur steppe powers before the Mongols (the ruins of the Uyghur capital Ordu-Baliq, or Khar Balgas, lie nearby), so Ögedei's choice of the site for his imperial capital followed an older tradition; after Kublai Khan took the throne in 1260 and moved the capital to Shangdu, Karakorum went into steady decline.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kharkhorin (Mongolia; town and sum centre of Övörkhangai Province, 14,765 residents in 2017 over 20.5 km²; in the lower Orkhon valley where the Khangai mountains meet the central steppe; the site of Karakorum, capital of the Mongol Empire in the 13th century; Erdene Zuu monastery; the Orkhon Valley Cultural Landscape UNESCO World Heritage; Kharakhorum Museum; tourism and irrigated agriculture; airport with flights to Ulaanbaatar; coal-fired heating September to May)
    howItWorks:
      "Kharkhorin is a town and sum centre of Övörkhangai Province in Mongolia with about 11,800 residents in 2025 (National Statistics Office, Kharkhorin sum); Mongolian local government has two levels, the province (aimag) and the sum, with governors appointed centrally and local assemblies elected, education and health organised at province level. The town lies in the lower Orkhon valley where the Khangai mountains come down to the central steppe. Its weight is all underfoot: Karakorum, capital of the Mongol Empire, stood here, built around 1235 as the political centre of an empire spanning Eurasia, later destroyed, and only foundations and scattered stonework remain above ground. Erdene Zuu monastery, completed in 1585, was raised from stone taken out of those ruins, its wall of a hundred and eight white stupas its mark, and it is in use today. The Orkhon Valley Cultural Landscape was inscribed as World Heritage in 2004 and covers this district. Tourism and irrigated farming in the valley are the local economy, and Ulaanbaatar lies about 360 km east. Newcomers most often go wrong by expecting to see a capital, when the city above ground is long gone and what remains is a site and a monastery.",
    layout:
      "The modern town of Kharkhorin sits alongside the ancient city ruins and Erdene Zuu Monastery; most of the ruined site remains to be archaeologically excavated, with traces of walls and building foundations visible at the surface.",
    gettingAround:
      "Kharkhorin's local airport has virtually no passenger-handling facilities; the town is usually reached by road from Ulaanbaatar, a journey of about 6 to 7 hours (roughly 370 km).",
    culture:
      "The official language is Mongolian. Karakorum was founded as the Mongol Empire's capital in 1235 by Ögedei Khan, son of Genghis Khan; after Erdene Zuu Monastery was built in the 16th century, much of the stone from the ancient city ruins was reused in the monastery's construction.",
    seeAndDo:
      "Erdene Zuu Monastery (built in the 16th century, one of Mongolia's earliest surviving Tibetan Buddhist monasteries); the Karakorum ancient city museum; the turtle-shaped stone monument; the pastoral scenery of the Orkhon Valley.",
    whenAndTips:
      "June–August has the most pleasant climate; allow ample time to explore the nomadic pastoral life around the Orkhon Valley Cultural Landscape rather than making only a brief stop at the ancient city ruins.",
  },
  moron: {
    // 人口 sources（2026-09-13 核改）：同中文侧，NSO data.1212.mn DT_NSO_0300_004V5 resident population（1 级）。
    // identity sources: 人口：取**有明确年份**的 2017 年 39,404。⚠️ 网上流传的 46,918 在英文维基同一条目里与 infobox 的 2017 数并存且**没有年份**——按「拿不准就不要编一个年份」，不采用。1212.mn 证书错误无法访问，已进豁免表。「蒙古第五大城市」经与乔巴山条目互证仍成立、不受数字选择影响。
    identity:
      "Mörön is the capital of Khövsgöl Province in northern Mongolia, with about 42,900 residents in 2025 (Mongolia's National Statistics Office), and the core gateway for exploring Lake Khövsgöl.",
    // howItWorks sources: 人口：蒙古国家统计局 2017 年 39,404（1 级），与 identity 段统一。原文这一段的「约 4.7 万」查无出处、与 identity 段相差近 20%。更新一期取不到（蒙古国家统计局 1212.mn 证书失效，issue #197 同因）。
    // howItWorks sources（2026-09-13 回扫改）：删「机场 1957 年起运行」—— 3 级来源分别写 1956 与 1960，互相矛盾，查无一手。核实 2026-09-13
    howItWorks:
      "Mörön is the capital of Khövsgöl Province in Mongolia with about 42,900 residents in 2025 (National Statistics Office of Mongolia); Mongolian local government has two levels, province and sum, with governors appointed centrally and local assemblies elected, and the provincial capital holds the administration, hospitals and secondary schools of the whole province. The town stands on the Delgermörön river at about 1,710 m, its name simply meaning river in Mongolian. It grew from a monastery: one was built here between about 1809 and 1811 and housed some thirteen hundred monks before its destruction in 1937, and Danzadardscha Khiid was rebuilt near the site in 1990. The provincial museum holds more than 3,600 objects. Modern services came late — electricity only in 2004 and the paved road to Ulaanbaatar only in December 2014 — so for decades flying worked better than driving. Lake Khövsgöl lies about 100 km north at Khatgal, and the province is also home to Tsaatan reindeer herders. The record low is about −47°C. Newcomers most often go wrong by taking Mörön for a lakeside town, when the lake is a hundred kilometres away.",
    layout:
      "The city sits on the flat valley floor of the Delgermörön River, ringed by forested mountains, and is connected to Lake Khövsgöl by road.",
    gettingAround:
      "Mörön Airport (MXV) has scheduled flights to and from Ulaanbaatar; the drive from central Mörön to Khatgal village on the southern shore of Lake Khövsgöl takes about 1 to 1.5 hours.",
    culture:
      "The official language is Mongolian; local Tuvan and Darkhad nomadic communities retain traditional fishing and herding ways of life.",
    seeAndDo:
      "Lake Khövsgöl (Mongolia's largest freshwater lake); Khövsgöl National Park; traditional nomadic life at Khatgal village; reindeer-herder communities (seasonally accessible).",
    whenAndTips:
      "June–August has the most pleasant climate and is the best season for exploring Lake Khövsgöl; the lake freezes over in winter, and in some years ice activities are possible, but a professional guide is needed to arrange them.",
  },
  dalanzadgad: {
    // 人口 sources（2026-09-13 核改）：同中文侧，NSO data.1212.mn DT_NSO_0300_004V5（1 级）。
    // identity sources: 人口：2024 年 32,674，底层引用**南戈壁省统计局 2025 年发布**——是这批九城里来源质量最好的一条（与本条目 howItWorks 一致）。
    identity:
      "Dalanzadgad is the capital of South Gobi Province in southern Mongolia, with a 2025 population of about 33,300 (National Statistics Office of Mongolia), and the core gateway for exploring Gobi Gurvansaikhan National Park.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Dalanzadgad (Mongolia; capital of Ömnögovi (South Gobi) Province, about 32,674 residents in 2024 over 476 km², divided into ten bags; 540 km south of Ulaanbaatar, paved road completed 2014; one of the warmest places in Mongolia in winter, extremes −36.1 °C to 39.9 °C, annual precipitation 134 mm; Yolyn Am gorge in Gurvan Saikhan National Park with streams and grass in the desert; dinosaur fossil sites and major mining in the province; airport runway the second longest in the country)
    howItWorks:
      "Dalanzadgad is the capital of Ömnögovi, the South Gobi Province of Mongolia, with about 33,300 people in 2025 over 476 km² divided into ten bags; Mongolian local government has two levels, province and sum: the provincial governor is appointed by the prime minister and the sum governor by the provincial governor, each after winning a majority in the elected citizens' representative khural at that level. It stands in the middle of the Gobi, 540 km in a straight line south of Ulaanbaatar, and the paved road reached it only in 2014. The climate is desert: about 134 mm of rain a year and extremes from −36°C to nearly 40°C, yet by Mongolian standards its winters are among the mildest in the country. In Gurvan Saikhan National Park about 50 km west lies the Yolyn Am gorge, where water runs and grass grows on the floor and ice can survive into summer, in contrast to the desert around it; the Khongoryn Els dunes and the flaming cliffs of Bayanzag lie further out, the latter known for its dinosaur egg finds. Oyu Tolgoi and Tavan Tolgoi in this province are among Mongolia's most important mines, and mining and tourism together carry the town. The airport runway is the second longest in the country. Newcomers most often go wrong by expecting the sights beside the town, when Gobi distances are counted in hundreds of kilometres.",
    layout:
      "The city sits at the edge of the Gobi desert at the northern foot of the Gurvan Saikhan Mountains, and serves as the administrative and supply centre for the South Gobi region.",
    gettingAround:
      "Dalanzadgad Airport (DLZ) has scheduled flights to and from Ulaanbaatar; reaching Khongoryn Els, Yolyn Am, Bayanzag and other sites from the city requires driving or hiring a car, journeys of roughly 1 to 3 hours each.",
    culture:
      "The official language is Mongolian. Dalanzadgad and the surrounding Gobi region retain a traditional camel-herding culture, with the Bactrian camel an important part of local nomadic life.",
    seeAndDo:
      "Gobi Gurvansaikhan National Park (Khongoryn Els singing dunes, Yolyn Am ice gorge); the Bayanzag Flaming Cliffs; hiking in the Gurvan Saikhan Mountains.",
    whenAndTips:
      "May–June and September are the most comfortable months; daytime temperatures in the Gobi can exceed 35°C in July–August. Winters are severely cold and some roads to sights become limited, so avoid these extreme seasons.",
  },
  khovd: {
    // 人口 sources（2026-09-13 核改）：同中文侧，NSO data.1212.mn DT_NSO_0300_004V5（1 级）。
    // identity sources: 科布多市 2017 年 29,800（蒙古国家统计局，经维基 infobox 转引，3 级，2026-09-08 核）。
    //   **这已是九年前的数**，1212.mn 证书错误无法直连，确认不了有没有更新一期。
    //   原 identity 的「3.1 万」对不上任何已知年份的官方数。
    identity:
      "Khovd is the capital of Khovd Province in western Mongolia, with a population of about 34,500 in 2025 (National Statistics Office of Mongolia), at the eastern foot of the Altai, and an important gateway for exploring the Mongol Altai Mountains and the multi-ethnic communities of western Mongolia.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Khovd (Mongolia; capital of Khovd Province in the west, about 29,800 residents in 2017; at the foot of the Altai mountains, bisected by the Buyant river; founded in 1685 by Galdan Boshugtu Khan of the Dzungar Khanate, later moved to the present site on the Buyant; Mongolian forces took the city on 7 August 1912 and destroyed the garrisons; ethnically diverse — Khalkha, Zakhchin, Torghut, Uriankhai, Kazakh and others; Khar-Us Lake protected area about 25 km east; Museum of Khovd Province; cold desert climate with records near −45 °C)
    // howItWorks sources（2026-09-13 回扫改，零争议红线）：删「1912 年 8 月 7 日蒙古军队攻下此城、摧毁驻军营地」—— 涉及蒙古独立与清朝之间的军事冲突，按红线「修法是删不是改对」，只保留清代驻防城城墙遗迹这一中性事实。核实 2026-09-13
    howItWorks:
      "Khovd is the capital of Khovd Province in western Mongolia with about 34,500 people in 2025; Mongolian local government has two levels, province and sum, with governors appointed centrally and local assemblies elected, and the provincial capital concentrates administration, hospitals and higher education, Khovd University standing here. The town lies at the eastern foot of the Altai, split in two by the Buyant river. Galdan Boshugtu Khan of the Dzungar Khanate founded a town in this district in 1685, and the site later moved to the present one by the Buyant; the walls of a Qing-era garrison town still stand outside town. It is among the most ethnically mixed cities in Mongolia, where Khalkha, Zakhchin, Torghut, Uriankhai, Kazakh and other groups live together with their own languages and customs. Khar-Us Lake National Park lies about 25 km east as a major stop for migrating birds. The climate is cold desert with records near −45°C. Newcomers most often go wrong by assuming western Mongolia holds only herders, when this town is the administrative and university centre of a whole province.",
    layout:
      "The city extends along both banks of the river that runs through it, and has historically served as a traditional centre for the coexistence and trade of multiple ethnic groups (Mongols, Kazakhs, Tuvans and others) in western Mongolia.",
    gettingAround:
      "Khovd Airport (HVD) has scheduled flights to and from Ulaanbaatar; reaching the Tavan Bogd area of the Mongol Altai requires driving or hiring a car, journeys ranging from several hours to a full day.",
    culture:
      "The official language is Mongolian; the local population is ethnically diverse, with Dörvöd Mongols, Kazakhs and other groups long living side by side, and both Tibetan Buddhism and Islam practiced locally.",
    seeAndDo:
      "Khovd Provincial Museum; the surrounding steppe and river-valley scenery; hiking and horseback routes toward the Mongol Altai (a professional guide is recommended).",
    whenAndTips:
      "June–August has the most pleasant climate; as a multi-ethnic western region, consider timing a visit around local festivals (such as Kazakh traditional events).",
  },
  olgii: {
    // 人口 sources（2026-09-13 核改）：同中文侧，NSO data.1212.mn DT_NSO_0300_004V5 resident population（1 级）。
    // identity sources: 乌力吉**市镇本身** 2024 年 50,126；**巴彦乌列盖省** 2024 年约 110,800，其中约九成三是哈萨克族
    //   （蒙古国家统计局，经维基 infobox 转引，3 级，2026-09-08 核）。
    //   **市与省差一倍多，两段各讲一个而都不写明主体，读者会以为其中一个错了。**
    //   原 identity 的「约 3 万」既不是市镇也不是省，是过期值。
    identity:
      "Ölgii is the capital of Bayan-Ölgii Province, Mongolia's westernmost province, with about 41,100 residents in Ölgii sum in 2025 (about 109,000 in the province as a whole, National Statistics Office of Mongolia); it is the main area of Mongolia's Kazakh community and the core gateway for exploring the Tavan Bogd massif.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Ölgii and Bayan-Ölgii Province (Mongolia; the westernmost province, established 1940 with its capital at Ölgii, 45,704.89 km², about 110,799 residents in 2024, the country's only Kazakh-majority and Muslim aimag with about 93 per cent Kazakh; the Abu-Bakr Siddiq central mosque in Ölgii; an estimated 80 per cent of the world's eagle hunters live in the province, with a Golden Eagle Festival each October; Altai Tavan Bogd National Park 6,362 km² with Khüiten Peak 4,374 m, Mongolia's highest; the Khovd river rises here; Ölgii Airport with flights to Ulaanbaatar; 2.3 million head of livestock in 2022)
    howItWorks:
      "Ölgii is the capital of Bayan-Ölgii Province in Mongolia; Mongolian local government has two levels, province and sum, with governors appointed centrally and local assemblies elected, and the provincial capital holds the administration, hospitals and secondary schools of the province. The province was created in 1940 at the far west of the country, covering about 45,700 km² with some 109,000 residents in 2025, about ninety-three per cent of them Kazakh — it is Mongolia's only Kazakh-majority and mainly Muslim aimag, so Kazakh is the working language of the town, the Abu-Bakr Siddiq mosque stands at its centre, and its festivals and food differ from the rest of the country. An estimated eighty per cent of the world's eagle hunters live in this province, and the Golden Eagle Festival each October gathers them outside Ölgii as the largest local event. The Khovd river rises in this district, and Altai Tavan Bogd National Park covers 6,362 km² including Khüiten Peak at 4,374 m, Mongolia's highest. Herding is the main living, with 2.3 million head of livestock in 2022. Newcomers most often go wrong by assuming Mongolia is uniform, when the language and religion here stand apart.",
    layout:
      "The city sits in a river valley at the foot of the Mongol Altai, serving as the administrative and cultural centre of Bayan-Ölgii Province, where traditional Kazakh culture is well preserved.",
    gettingAround:
      "Ölgii International Airport (ULG) has year-round scheduled flights to and from Ulaanbaatar, with more frequent service in the April–October tourist season; reaching the Tavan Bogd massif requires driving or hiring a car with a professional guide.",
    culture:
      "Bayan-Ölgii Province is the main home of Mongolia's Kazakh minority; the official language is Mongolian, and the local Kazakh community retains its own language, Islamic faith and the traditional art of golden eagle hunting.",
    seeAndDo:
      "The Tavan Bogd massif (Khüiten Peak, Mongol Altai glaciers); traditional golden eagle hunting demonstrations (the Golden Eagle Festival each October); a stay with a Kazakh nomadic herder family in a ger.",
    whenAndTips:
      "June–August is the best season for hiking the Tavan Bogd massif; the Golden Eagle Festival each October is the best time to see traditional Kazakh eagle-hunting culture, though temperatures have already turned cold by then, so dress warmly.",
  },
  choibalsan: {
    // 人口 sources（2026-09-13 核改）：同中文侧，NSO data.1212.mn DT_NSO_0300_004V5 resident population（1 级）。
    // identity sources: 人口：2025 年 38,537（与本条目 howItWorks 一致），是这批里最新的一期；原 identity 的「约 3.9 万」取整偏松，已与 howItWorks 对齐。
    //   「蒙古第四大城市」经维基原文「after Ulaanbaatar, Darkhan, and Erdenet」直接印证。
    //   ✅ 红线：howItWorks 提到 1939 年哈拉哈河战役与朱可夫纪念馆——广泛记载的军事史事实、不涉现代邻国关系或评价，**判定保留**。
    identity:
      "Choibalsan is the capital of Dornod Province in eastern Mongolia, with about 46,800 residents in 2025 (Mongolia's National Statistics Office), set on the Kherlen River, and the core gateway for exploring the Daurian steppe of eastern Mongolia.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Choibalsan (Mongolia; capital of Dornod Province in the east, 38,537 residents in 2025, the fourth-largest city in Mongolia after Ulaanbaatar, Darkhan and Erdenet; on the Kherlen river at 747 m; called Bayan Tümen until 1941, renamed for the 20th anniversary of the 1921 revolution after Khorloogiin Choibalsan; mainly Khalkha with Buryat and other groups; Choibalsan Airport with flights to Ulaanbaatar and Chinese cities; a railway to the Trans-Siberian, passenger service ending at Chuluunkhoroot on the border; museum to Georgy Zhukov near the site of the Battle of Khalkhin Gol; extremes −41.1 °C to 41.9 °C)
    howItWorks:
      "Choibalsan is the capital of Dornod Province in eastern Mongolia with about 46,800 residents in 2025, the fourth-largest city in the country after Ulaanbaatar, Darkhan and Erdenet; Mongolian local government has two levels, province and sum: the provincial governor is appointed by the prime minister and the sum governor by the provincial governor, each after winning a majority in the elected citizens' representative khural at that level. The town stands on the Kherlen river at about 747 m amid the open eastern steppe, among the best-preserved temperate grasslands in the world, where herds of Mongolian gazelle migrate nearby. It was called Bayan Tümen until 1941, when it was renamed for the twentieth anniversary of the 1921 revolution after the leader of the day, Khorloogiin Choibalsan. In the twentieth century it became a railway node, with a branch line running north from the town. A museum to Georgy Zhukov stands outside town because the Battle of Khalkhin Gol of 1939 was fought in this province. The airport has flights to Ulaanbaatar and to Chinese cities, and temperatures range from −41°C to nearly 42°C. Newcomers most often go wrong by assuming the railway here will carry them much further afield, when passenger services are very limited.",
    layout:
      "The city extends along both banks of the Kherlen River and is the largest city and regional administrative centre of Mongolia's eastern steppe belt.",
    gettingAround:
      "Choibalsan Airport (COQ) has scheduled flights to and from Ulaanbaatar; reaching the Mongol Daguur Strictly Protected Area and other eastern steppe sites requires driving or hiring a car.",
    culture:
      "The official language is Mongolian. Choibalsan is named after the Mongolian revolutionary leader Khorloogiin Choibalsan, and the city stands at the intersection of the eastern steppe's nomadic culture and Mongolia's 20th-century modernization history.",
    seeAndDo:
      "Scenery along the Kherlen River; the Mongol Daguur Strictly Protected Area (birdwatching, Mongolian gazelle migration); nomadic life on the surrounding eastern steppe.",
    whenAndTips:
      "June–August has the most pleasant climate and is also a good season for seeing the large-scale migration of Mongolian gazelles and bird activity; sites on the eastern steppe are widely scattered, so plan a route and guide in advance.",
  },
  tsetserleg: {
    // 人口 sources（2026-09-13 核改）：同中文侧，NSO data.1212.mn DT_NSO_0300_004V5（1 级）。
    // identity sources: 车车尔勒格 2017 年 21,620（蒙古国家统计局，经维基 infobox 转引，3 级，2026-09-08 核）。
    //   原 identity 的「1.7 万」对不上任何已知年份。九年前的数，1212.mn 无法直连确认更新一期。
    identity:
      "Tsetserleg is the capital of Arkhangai Province in central Mongolia, with a population of about 21,400 in 2025 (National Statistics Office of Mongolia), set at the eastern foot of the Khangai Mountains, and the core gateway for exploring Khorgo-Terkhiin Tsagaan Nuur National Park.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Tsetserleg (Mongolia; capital of Arkhangai Province, 21,620 residents in 2017 over 536 km² at 1,691 m; 600 km south-west of Ulaanbaatar on the north-eastern slopes of the Khangai mountains; founded around 1631, the Zayiin Gegeen Monastery established in the early 1680s, its main temple now the provincial museum; a dry-winter subarctic climate milder than the surrounding region, January nights about −15 °C to −25 °C; airport with connections to Ulaanbaatar; theatre, hospital and agricultural college; food processing the main industry) ⚑ 2026-09-15：「约 600 km」与本条公路里程约 480 km 矛盾，按注册表坐标算直线约 410 km，正文已改。
    // howItWorks sources（2026-09-13 回扫改）：原「约建于 1631 年，1680 年代初建起扎音格根寺」把寺院始建（多说 1631）与主殿建成年代混为一谈，建城年又有 1616 / 1631 两说，均为 3 级且互相矛盾，删去年份，只写城镇围绕寺院发展。核实 2026-09-13
    howItWorks:
      "Tsetserleg is the capital of Arkhangai Province in Mongolia with about 21,400 people in 2025 over 536 km² at about 1,691 m; Mongolian local government has two levels, province and sum, with governors appointed centrally and local assemblies elected, and the provincial capital holds the hospital, theatre and secondary schools of the province. The town lies on the north-eastern slopes of the Khangai mountains below Bulgan hill, about 410 km in a straight line west of Ulaanbaatar. The town grew up around the Zayiin Gegeen Monastery; the temples fell out of use in the twentieth century and the main hall is now the Arkhangai provincial museum, the white Buddha figure and the monastery wall on the slope forming the backdrop of the town. The ground gives it one peculiarity: high as it stands, its winters are milder than the country around, January nights running about −15°C to −25°C, which counts as gentle in Mongolia. Food processing is the main industry and there is an agricultural college. The Tsenkher hot springs outside town and Terkhiin Tsagaan Lake further west are hours away by road. Newcomers most often go wrong by confusing it with the sum of the same name in the north of the province, which is a separate administrative unit.",
    layout:
      "The town is built into the valley terrain, with Tibetan Buddhist monastery architecture standing alongside a Soviet-era planned town layout.",
    gettingAround:
      "Tsetserleg Airport (TSZ) exists locally but passenger service is not currently reliable; the town is usually reached from Ulaanbaatar by road (mostly via Kharkhorin), a journey of about 7 to 8 hours (roughly 480 km by road).",
    culture:
      "The official language is Mongolian. Tsetserleg is a town where the traditional nomadic life of the Khangai region meets Tibetan Buddhist culture, with several traditional monastery sites preserved nearby.",
    seeAndDo:
      "Khorgo-Terkhiin Tsagaan Nuur National Park (the extinct Khorgo volcano, the lava-dammed lake); horseback routes across the surrounding Khangai steppe; local Tibetan Buddhist monasteries.",
    whenAndTips:
      "June–August has the most pleasant climate; consider using Tsetserleg as a stopover on a central Mongolia itinerary between the Orkhon Valley and Lake Khövsgöl, staying one to two days.",
  },

  sainshand: {
    // 全七段 sources: 同中文侧（National Statistics Office of Mongolia table 004V5, tier 1; Law on Administrative and Territorial Units and their Governance via legalinfo.mn official English text, tier 1; FCDO travel advice 2026-08-07, tier 1; OurAirports; distances computed）。 核实 2026-09-16 当批。 核实 2026-09-16 当批（同中文侧）。
    identity:
      "Sainshand is the capital of Dornogovi province in Mongolia, with 28,250 residents in 2025 (National Statistics Office), out on the dry steppe of the Gobi. The town grew along Mongolia's trunk railway, with the station in its northern part; some thirty kilometres south, out in the Gobi, stands Khamaryn Khiid, the monastery founded by the 19th-century monk and poet Danzanravjaa, who also has a museum in town.",
    howItWorks:
      "Mongolian local government has only two tiers, the province and the soum (the capital has districts instead). Under the current law on administrative and territorial units, the provincial governor is appointed by the prime minister, the soum governor by the provincial governor and the bagh governor by the soum governor, each for four years, with candidates first having to win a majority in the elected citizens' representative khural at that level; khural seats are set in bands by population, 35 for a province of this size and 29 for the soum. In law Sainshand is the soum that holds the provincial seat rather than a city in its own right. What the soum handles is concrete — its own budget and plans, housing and utilities, local roads and green space, the dump and the cemetery, and the siting and protection of the drinking-water points people live on, which in the Gobi weighs more than it does elsewhere. The town keeps railway time: passenger and freight services share the same trunk line, and the station is 3 km north of the centre. Newcomers often assume they will fly in, when the local airfield has no scheduled passenger flights and the railway is the way in and out; many also expect Khamaryn Khiid to be in town, when it is thirty-odd kilometres out in the desert.",
    layout:
      "The built-up area runs north to south along the railway: the station is about 3 km north of the centre, and the Danzanravjaa museum and the provincial museum are both in the centre. Khamaryn Khiid and the pilgrimage site beside it lie about 32 to 34 km south in a straight line, out in the Gobi, and need a vehicle.",
    gettingAround:
      "Sainshand has no airport with scheduled passenger flights; the way in and out is the railway, with trains towards Ulaanbaatar, and by road the capital is about 418 km away in a straight line. According to UK Foreign Office travel advice only about a tenth of Mongolia's roads outside the capital are paved and signage is sparse, so driving takes preparation; as of September 2026 there is also a nationwide fuel shortage advisory. The town is small enough to walk or take a taxi. The climate is arid and continental, with bitter winters, hot summers and a lot of wind-blown dust.",
    culture:
      "Mongolian is spoken, written in Cyrillic. In monasteries ask before taking photographs and do not touch images or ritual objects. Carry your passport — police do not accept photocopies at checks — and note that photographing police or military personnel is illegal in Mongolia. Tipping is not a local tradition; it has become more common in city restaurants in recent years, with no set rate.",
    seeAndDo:
      "Khamaryn Khiid and the pilgrimage site beside it; the Danzanravjaa museum and the provincial museum; the freight trains on the trunk line by the station; and the Gobi landscape outside town.",
    whenAndTips:
      "May to September is best for travel, with hot days in July and August; winters are bitter. Visiting the monastery means hiring a vehicle or joining a local car, mostly on unpaved roads, so agree on the route and the return time before setting out.",
  },

  bayankhongor: {
    // 全七段 sources: 同中文侧（National Statistics Office table 004V5, tier 1; the same governance law, tier 1; FCDO travel advice, tier 1; the 1961 relocation only tier 3 and written as reported; distances computed）。 核实 2026-09-16 当批。 核实 2026-09-16 当批（同中文侧）。
    identity:
      "Bayankhongor is the capital of Bayankhongor province in Mongolia, with 33,506 residents in 2025 (National Statistics Office), on the Tuin river at about 1,870 m. Close to four in ten of the province's 87,974 people live in this one town (on the same figures). The province runs north to south from the southern slopes of the Khangai mountains through the Gobi-Altai and down into the Gobi, and the town sits in the middle of that section.",
    howItWorks:
      "Mongolian local government has only two tiers, province and soum: the provincial governor is appointed by the prime minister and the soum governor by the provincial governor, each for four years, with candidates first having to win a majority in the elected citizens' representative khural; by population band the provincial khural here has 35 seats and the soum 29. The provincial seat holds the administration, the hospital and the secondary schools, which is why close to four in ten of the province's people live here while the rest are spread across the soums; the soum tier runs its own budget, housing and utilities and local roads, and also the siting and protection of drinking-water points. The town is reportedly not on its original site — accounts say the first location was abandoned in 1961 because of permafrost and some 900 households, more than three thousand people, moved to where the town stands today (only encyclopaedic sources so far, still to be confirmed from a primary one). The living radius is set by the road: there is no railway, Ulaanbaatar is over 500 km away in a straight line, and flights from the local airfield are few. Newcomers tend to treat the place as a fuel stop on the way to the Gobi, when it is the one place in the province where administration and health care are concentrated.",
    layout:
      "The town spreads along the Tuin river, with the museum of history and ethnography, the natural history museum and the theatre all within a few hundred metres of the centre. The Shargaljuut hot springs are about 42 km north-east in a straight line, and Orog Lake about 125 km south.",
    gettingAround:
      "There is an airport at Bayankhongor, but flights are few and the schedule is unreliable, so check before you count on it; travel is mainly by road, with Ulaanbaatar about 507 km away in a straight line, and there is no railway in the province. According to UK Foreign Office travel advice only about a tenth of Mongolia's roads outside the capital are paved and signage is sparse; as of September 2026 a nationwide fuel shortage advisory is in force, so plan long trips around fuel stops. The town itself is walkable. The climate is continental and high, with bitter winters and wide daily temperature swings.",
    culture:
      "Mongolian is spoken, written in Cyrillic. In monasteries ask before taking photographs and do not touch images or ritual objects. Carry your passport — police do not accept photocopies at checks — and photographing police or military personnel is illegal in Mongolia. Tipping is not a local tradition; it has become more common in city restaurants in recent years, with no set rate.",
    seeAndDo:
      "The museum of history and ethnography; the natural history museum; a soak at the Shargaljuut hot springs; a trip south to Orog Lake and the foothills of the Gobi-Altai; and wool and leather goods in the town market.",
    whenAndTips:
      "June to September is the best time, when the pastures are green and the roads are passable; winters are bitter and long stretches may close. Roads out of town are mostly unpaved, so a hired vehicle is safer than driving yourself — settle fuel and return arrangements first.",
  },
};
