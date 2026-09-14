import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "portugal-overview": {
    // identity sources: INE Portugal《Estimativas de População Residente 2025》：2025-12-31 常住人口 11,424,031 人（首次完全基于行政登记数据）。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679&DESTAQUESmodo=2&xlang=pt
    //   本批偏差最大的一条：原文约 1030 万，实际已达 1142 万（2021 年以来移民持续流入），差约 11%。核实日 2026-09-07，来源级别 1
    identity:
      "Portugal is the westernmost country on the European mainland, on the western side of the Iberian Peninsula, about 92,000 sq km (excluding the overseas autonomous regions) with an estimated resident population of about 11.4 million at the end of 2025 (Statistics Portugal); including the Atlantic autonomous regions of Madeira and the Azores, the total area is about 93,000 sq km. The land is higher in the north and lower in the south: the north and centre are mountainous and hilly, with rivers such as the Douro and Mondego cutting north-east to south-west through old crystalline plateau rock; the south (Alentejo) is a broad rolling plain; the south-western tip (the Algarve) is a limestone coast. Travel mode covers mainland Portugal plus the overseas autonomous regions of Madeira and the Azores.",
    layout:
      "It helps to divide Portugal into: the Lisbon region (the capital and surroundings, including Sintra); the north (Porto, Braga, Guimarães, and the Douro Valley wine region); the centre (Coimbra, its university and the Mondego); the Alentejo (Évora, oak savanna and wine); the Algarve (Faro, the southern coastal resort region); and, in the Atlantic, the Madeira and Azores archipelagos.",
    gettingAround:
      "Portugal is long and narrow; rail and long-distance coach networks cover the main cities, with Lisbon–Porto about 2.5–3 hours. Domestic flights mainly link the mainland with the overseas island groups, Madeira and the Azores (there are very few flights within the mainland — the train is more commonly used). Lisbon and Porto have a metro; historic centres are mostly narrow old lanes, some steep. Drive on the right; motorways are mostly tolled. Restaurant tipping is not required (rounding up is fine). Tap water is drinkable. Power is 230V with the European two-round-pin plug.",
    culture:
      "The official language is Portuguese; English is fairly common in tourist areas and among younger people. The Portuguese are generally mild-mannered and a touch slower-paced than Spain; fado music is an important cultural symbol, inscribed as UNESCO intangible heritage in 2011. Most Catholic churches welcome visitors, but dress modestly — avoid very short shorts or sleeveless tops. Tipping is not required — rounding up or leaving 5–10% is fine.",
    seeAndDo:
      "The tram-served old town and Belém district of Lisbon; the riverside wine cellars of Porto; the terraced vineyards of the Douro Valley; the Romantic palaces of Sintra; the oak savanna and old town of Évora in the Alentejo; the limestone coast of the Algarve; the laurel forest and cliff roads of Madeira; the volcanic lakes and geothermal areas of the Azores.",
    whenAndTips:
      "April–June and September–October are the most comfortable; July–August is peak season on the southern coast and islands, with higher temperatures. Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. The old towns of Lisbon and Porto are steep and slippery — wear comfortable, grippy shoes. Book flights and ferries to Madeira and the Azores ahead of time.",
  },

  lisbon: {
    // howItWorks sources（2026-09-15 核实，update）: 同identity条 · INE 2025 Estimativas，2026-06-22发布，方法论结构性修订 · 1级 · 2026-09-15 核；下一期约 2027-06
    // identity sources（2026-09-15 核实，update）: https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679 · INE《Estimativas de População Residente 2025》(2026-06-22发布) · 直接下载官方CSV Q_1_1_2021_2025.csv: Lisboa municipio=658,236；Grande Lisboa(NUTS)=2,415,261 + Península de Setúbal=937,678 → AML=3,352,939，均2025-12-31 · 1级 · 2026-09-15 核；下一期约 2027-06
    identity:
      "Lisbon is the capital of Portugal, with a municipal population of about 658,000 and a metropolitan-area (AML) population of about 3.35 million (end of 2025, INE), on the north bank of the broad estuary where the Tagus meets the Atlantic — one of the oldest cities in Europe. Built on seven hills, its Baixa district, rebuilt on a regular grid after the 1755 earthquake, contrasts sharply with the medieval lanes of the old Alfama quarter.",
    // howItWorks sources: Wikipedia (2026-09): Lisbon (municipality ~100 km², ~548,700 2025; 24 freguesias since 2012; LMA 18 municipalities, 2021 census ~2.87 million ≈ 28% of Portugal; Metro 4 lines; Carris; Pombaline grid after 1755)
    howItWorks:
      "The Lisbon people speak of is, administratively, only the municipality of Lisbon of about 100 km², with about 658,000 people at the end of 2025, governed by an elected city chamber (câmara) and divided into 24 civil parishes (freguesias) — merged from 53 in 2012 — each with an elected board; the Lisbon Metropolitan Area gathers 18 municipalities with about 2.87 million people at the 2021 census, 28 per cent of Portugal, and Sintra, Cascais, Loures, Amadora and Almada across the Tagus each have a chamber of their own. The city stands on seven hills at the mouth of the Tagus: the Baixa rebuilt on the Marquis of Pombal's grid after the earthquake of 1755, Alfama, Bairro Alto and Chiado on the slopes either side, the Avenidas Novas as the twentieth-century extension, the Parque das Nações left by Expo 98, and Belém by the river to the west. Addresses give street, number and postcode. Four metro lines, the Carris trams and the CP suburban trains run on one Navegante card, and the 25 de Abril and Vasco da Gama bridges cross the estuary. Newcomers most often go wrong by taking the municipality for the whole city, when it holds only a fifth of the metropolitan population.",
    layout:
      "Lisbon's core is three old districts: Alfama (the oldest, by the river, keeping its Moorish-era layout, overlooked by São Jorge Castle); Baixa (rebuilt on a grid plan after the 1755 earthquake, the commercial centre); and Chiado/Bairro Alto (arts and nightlife). Belém, to the west along the river, holds the monuments of the Age of Discovery.",
    gettingAround:
      "Lisbon Airport (LIS) is close to the city, with a metro straight into the centre (about 20 minutes). The city has a metro, buses, the old yellow trams (route 28 through the old town's narrow lanes is a classic experience) and three funiculars. The old town is steep and cobbled. The climate is Mediterranean: hot, dry summers and mild, rainy winters.",
    culture:
      "Portuguese is the main language, with widespread English in tourist areas. Fado houses (casas de fado) cluster in Alfama and Bairro Alto — dinner with live fado is a classic experience. Restaurant tipping is not required. Watch for pickpockets on trams, funiculars and around the sights.",
    seeAndDo:
      "The old town of Alfama and São Jorge Castle; Belém's Jerónimos Monastery, Belém Tower and the Monument to the Discoveries (landmarks of the Age of Discovery, World Heritage or under consideration); a ride on the old tram 28; the Santa Justa Lift; live fado; a day trip by train to Sintra.",
    whenAndTips:
      "April–June and September–October are the most comfortable. The old town is steep and slippery, especially the cobbles when wet — wear grippy shoes. Jerónimos Monastery and Belém Tower have long queues in peak season — book online ahead or go early. Watch for pickpockets on trams and near sights.",
  },

  sintra: {
    identity:
      "Sintra is about 30 km by road north-west of Lisbon, on the northern slope of the Serra de Sintra; because of near-constant Atlantic mist, its cool, humid climate has made it a retreat from summer heat since Moorish times. In the 19th century the Portuguese royal family built extensive palaces and gardens here, among them the brightly coloured Pena Palace.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   辛特拉市镇 2025 年末 449,956（2021 年修订后 400,216，修订前约 387,235）。**「葡萄牙人口第二多的市镇」这条排名用新数复核后仍成立**（仅次于里斯本 658,236）。
    howItWorks:
      "Sintra is administratively a municipality governed by an elected chamber, about 319 km² with about 450,000 residents at end-2025, the second most populous in Portugal — but most of them live in Queluz, Cacém, Algueirão and the other suburbs on the Lisbon commuter line. The Sintra people picture is only the small town in the hills, a few thousand people, inscribed as a cultural landscape World Heritage in 1995, with the Pena Palace, the Moorish castle and the Quinta da Regaleira on the hills around it, and Cabo da Roca at the western end of the municipality the westernmost point of the continent; the train from Lisbon's Rossio reaches Sintra station in about 40 minutes and bus 434 circles the sights. Newcomers most often go wrong by taking Sintra for a hill town, when most of the municipality is Lisbon suburb and the town is one corner of it.",
    layout:
      "Sintra town itself is small, with an old historic centre; the palaces and castles are scattered through the surrounding Serra de Sintra: Pena Palace at the summit, Quinta da Regaleira halfway up, and the ruins of the Moorish Castle running along the ridge — the sites are somewhat spread out, usually linked by shuttle bus.",
    gettingAround:
      "Sintra has no airport with scheduled flights; the train from Lisbon takes about 40 minutes direct. Bus 434 (the 'Sintra circuit') loops between the palaces from the town centre and up the hill; you can also walk (steep) or take a taxi. The climate is a distinct Atlantic-moderated microclimate, cooler and damper than Lisbon, often misty.",
    culture:
      "Portuguese is the main language; tourism dominates, with widespread English. Sintra is a popular day trip and gets crowded in peak season. Restaurant tipping is not required.",
    seeAndDo:
      "Pena Palace (a brightly coloured Romantic palace — climb the tower for the view); Quinta da Regaleira (a neo-Gothic estate with the mysterious spiral 'Initiation Well'); the ruins of the Moorish Castle (walls along the ridge, overlooking Sintra); the National Palace of Sintra (in the town centre, with its iconic twin conical chimneys).",
    whenAndTips:
      "Start early from Lisbon to beat the tour-group crowds. Book Pena Palace and other popular sites online ahead — on-the-day queues often exceed an hour in peak season. The sites are a fair distance apart — plan for two or three in a day at most. The hills are often foggy and wet — bring a jacket.",
  },

  porto: {
    // identity sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   波尔图市镇 2025 年末 273,476；**Área Metropolitana do Porto（AMP，法定建制，17 个市镇）= 1,861,727**。波尔图是葡萄牙仅有的两个法定都会区之一，这个口径是合法的。
    identity:
      "Porto is Portugal's second-largest city, with a metropolitan area of about 1.86 million (end-2025; a legally defined area of 17 municipalities), on the north bank of the Douro estuary just before it reaches the Atlantic — the namesake city of Port wine and its main export port. Its well-preserved medieval riverside quarter was inscribed as a whole as a UNESCO World Heritage Site in 1996.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   同上。
    howItWorks:
      "The Porto people speak of is, administratively, only the municipality of Porto of about 41 km², with about 273,000 residents at the end of 2025, governed by an elected city chamber and divided into seven parishes merged in 2013; the Porto Metropolitan Area gathers 17 municipalities and about 1.86 million people at end-2025: Vila Nova de Gaia across the Douro, the bank of the port wine lodges, is a separate city with more people than Porto, Matosinhos on the coast holds the port and the beaches, and the airport lies in Maia. The old town of Ribeira climbs the slope from the river, inscribed as World Heritage in 1996, and the Dom Luís I Bridge carries the metro and pedestrians on its upper deck and cars below; the Baixa around the Avenida dos Aliados is the commercial centre, Boavista the newer business district to the west, and Foz the seaside quarter where the Douro meets the Atlantic. The six lines of the Porto Metro cross several municipalities on one Andante card. Addresses give street, number and postcode. Locals call themselves 'tripeiros', tripe-eaters, and the francesinha sandwich is the city's invention. Newcomers most often go wrong by taking Vila Nova de Gaia for a district of Porto, when it is another city across the river with a chamber of its own.",
    layout:
      "Porto's old Ribeira quarter climbs the steep north bank of the Douro, houses stacked in colourful layers. Across the river, Vila Nova de Gaia is the traditional home of the Port wine cellars, linked to Ribeira by the 19th-century Dom Luís I Bridge.",
    gettingAround:
      "Porto Airport (OPO) is north-west of the city, with a metro straight into the centre (about 35 minutes). The city has a metro, buses and a funicular (linking the upper and lower levels of Vila Nova de Gaia). The old town is steep and walkable but requires stamina. The climate is temperate maritime, cooler and wetter than Lisbon.",
    culture:
      "Portuguese is the main language, with widespread English in tourist areas. Porto people are proud of their local identity and Port wine tradition, and the city is often seen as more down-to-earth and lived-in than Lisbon. Restaurant tipping is not required.",
    seeAndDo:
      "The Ribeira riverfront and the Dom Luís I Bridge; Port wine cellar tours and tastings in Vila Nova de Gaia (several need booking); Livraria Lello (neo-Gothic, often called one of the world's most beautiful bookshops); São Bento railway station (blue-and-white tile murals); the Clérigos Tower (climb for the city view); a Douro river cruise.",
    whenAndTips:
      "May–September is the most comfortable; winter is wet. Book cellar tours ahead — popular slots (weekend afternoons) are busy. Livraria Lello requires a ticket (redeemable against in-store purchases) — book a time slot online ahead in peak season. The old town is steep — wear comfortable shoes.",
  },

  braga: {
    identity:
      "Braga is about 50 km north-east of Porto, one of Portugal's oldest cities (founded in Roman times) and the country's Catholic religious centre, with an exceptionally high density of churches — sometimes called 'the Portuguese Rome'. The Bom Jesus do Monte pilgrimage church on the outskirts, with its Baroque staircase, is its signature landmark.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   布拉加市镇 2025 年末 212,635（2021 年修订后 195,527）。
    howItWorks:
      "Braga is a municipality of northern Portugal and the capital of Braga district, governed by an elected chamber, about 183 km² with about 213,000 residents at end-2025 and the third-largest urban area in Portugal; the chamber runs local services, and health, education and police belong to the state. In Roman times it was Bracara Augusta, it is the seat of the oldest archdiocese in Iberia and is called the 'Rome of Portugal', the cathedral and the Avenida da Liberdade in the centre, the Bom Jesus do Monte sanctuary 5 km east reached by an old funicular and World Heritage since 2019; the University of Minho makes it among the youngest cities in Portugal, Porto lies 55 km south about an hour by train, and there is no airport with scheduled flights. Newcomers most often go wrong by taking Braga for an old religious city, when it is among the fastest-growing technology and university towns in Portugal.",
    layout:
      "Braga's old town centres on the cathedral, with Baroque churches and squares densely packed into the pedestrian core. Bom Jesus do Monte, east of the city, is an important pilgrimage site, its zigzagging Baroque staircase running from the foot of the hill up to the church at the summit.",
    gettingAround:
      "Braga has no airport with scheduled flights; the nearest is Porto (about 50 minutes by car), or take the train/coach to and from Porto (about 1 hour). The city is mainly walkable; a bus or a century-old funicular reaches Bom Jesus do Monte. The climate is temperate, cooler and wetter than Lisbon.",
    culture:
      "Portuguese is the main language, with fairly common English in tourist areas. Braga has a relatively young population (a well-known university), and its Holy Week religious processions are among the largest in the country. Restaurant tipping is not required.",
    seeAndDo:
      "Braga Cathedral (Portugal's oldest surviving cathedral); Bom Jesus do Monte and its Baroque staircase (climb it or take the funicular); the old town squares and Baroque architecture; the Sameiro pilgrimage sanctuary (another hilltop pilgrimage church); east to Peneda-Gerês National Park.",
    whenAndTips:
      "May–September is the most comfortable; during Holy Week religious activity is intense and lodging is tight. The Bom Jesus staircase has over 500 steps — pace yourself or take the funicular. As one gateway to Peneda-Gerês National Park, a car or tour is needed.",
  },

  guimaraes: {
    identity:
      "Guimarães is about 20 km east of Braga, called Portugal's 'cradle city' — tradition holds that Afonso I, the founding king of the Kingdom of Portugal, was born here and declared independence, and the old town is inscribed as a whole as a UNESCO World Heritage Site. A 10th-century castle still stands on high ground above the city.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   吉马良斯市镇 2025 年末 165,554（2021 年修订后 157,985）。
    howItWorks:
      "Guimarães is a municipality of Braga district in northern Portugal, governed by an elected chamber, about 241 km² with about 166,000 residents at end-2025; the chamber runs local services and the rest belongs to the state. It is called the 'cradle of Portugal': the first king, Afonso I, is believed to have been born here, the battle of São Mamede of 1128 was fought outside the town, the castle and the palace of the Dukes of Braganza stand on the high ground of the old town, inscribed as World Heritage in 2001, and Penha hill rises to the east with a cable car to 613 m; textiles, footwear and metalwork make it among the most industrialised municipalities in Portugal, it was European Capital of Culture in 2012, and Porto lies 55 km south about an hour by train. Newcomers most often go wrong by taking Guimarães for a museum town, when it is a city that lives on its factories and the old town is one piece at its centre.",
    layout:
      "Guimarães's old town is arranged around a main square, its medieval stone buildings well preserved, with timber-framed overhanging houses a local feature. The castle and the Palace of the Dukes of Braganza stand on high ground at the north of the old town, overlooking the city.",
    gettingAround:
      "Guimarães has no airport with scheduled flights; the nearest is Porto (about 1 hour by car), or take the train/coach to and from Porto (about 1 hour). The old town is walkable, with a climb to the castle. The climate is temperate, similar to Braga.",
    culture:
      "Portuguese is the main language, with fairly common English in tourist areas. Locals are intensely proud of the city's identity as the 'birthplace of Portugal', with related commemorative markers throughout. Restaurant tipping is not required.",
    seeAndDo:
      "Guimarães Castle (10th century, traditionally the birthplace of Afonso I); the Palace of the Dukes of Braganza (a 15th-century noble residence, now a museum); the old town's main square and Largo de Santiago; the Church of Our Lady of Oliveira; a cable car up Penha Hill for the city and mountain panorama.",
    whenAndTips:
      "May–September is the most comfortable. The old town is small — half a day to a day is enough, often visited as a day trip from Porto. A combined ticket for the castle and palace is better value. The Penha Hill cable car has good views — plan for clear weather.",
  },

  aveiro: {
    identity:
      "Aveiro is about 60 km south of Porto, called the 'Venice of Portugal' for its crisscrossing canals plied by traditional painted flat-bottomed boats (moliceiros). Historically the city lived on seaweed harvesting and salt production, and is now a university and tourist town.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   阿威罗市镇 2025 年末 91,397（2021 年修订后 83,676）。
    howItWorks:
      "Aveiro is a municipality of central Portugal and the capital of Aveiro district, governed by an elected chamber, about 198 km² with about 91,000 residents at end-2025; the chamber runs local services and the rest belongs to the state. The city lies on the shore of the Ria de Aveiro lagoon, a few canals crossing the centre with painted moliceiro boats on them, Art Nouveau buildings along the canals, salt pans to the west, the university founded in 1973 to the south, and ovos moles its sweet; the striped houses and beach of Costa Nova lie about 10 km west in the municipality of Ílhavo, and Porto 75 km north about an hour by train. Newcomers most often go wrong by expecting Aveiro on the sea, when it lies on the lagoon and the beach is in another municipality, reached by bus.",
    layout:
      "Aveiro's centre has a few connected canals, lined with colourful Art Nouveau buildings. The city sits right beside the Ria de Aveiro — the largest lagoon wetland system in northern Portugal, dotted with traditional salt pans and seaweed-harvesting grounds.",
    gettingAround:
      "Aveiro has no scheduled commercial flights; the nearest airport is Porto (about 1 hour by car). The train to Porto takes about 45 minutes, to Lisbon about 2.5 hours. The city is walkable, and a canal boat ride is a popular experience. The climate is temperate maritime, moderated by the lagoon.",
    culture:
      "Portuguese is the main language, with widespread English in tourist areas. Aveiro's traditional sweet, ovos moles (egg-yolk sugar filling wrapped in a thin wafer), is a nationally known local speciality. Restaurant tipping is not required.",
    seeAndDo:
      "A painted-boat canal cruise; the Art Nouveau Museum and the Art Nouveau buildings along the canals; Aveiro Cathedral; the striped, brightly painted fishing village of Costa Nova (about 20 minutes away, wooden houses with bold stripes); a visit to the traditional salt pans.",
    whenAndTips:
      "May–September is the most comfortable. Check the canal boat schedule ahead — quieter times are more pleasant. Costa Nova's striped houses are a popular photo spot — mornings and evenings have fewer people and better light. The city is small — half a day to a day is enough.",
  },

  coimbra: {
    // identity sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   科英布拉市镇 2025 年末 156,359。**「都会区」是虚构口径** —— 葡萄牙只有里斯本与波尔图两个法定 área metropolitana，科英布拉没有；原文写的数字实际就是市镇人口，套了个不存在的标签。已与 howItWorks 的市镇口径统一。
    identity:
      "Coimbra is between Lisbon and Porto on the Mondego, with a municipal population of about 156,000 (end-2025), once the capital of Portugal (12th–13th centuries). The University of Coimbra was founded in Lisbon in 1290 by King Dinis, shifted back and forth between Lisbon and Coimbra several times, and only settled permanently in Coimbra in 1537; it is Portugal's oldest and one of Europe's oldest universities, its university quarter inscribed as a whole as a World Heritage Site in 2013.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   同上。
    howItWorks:
      "Coimbra is a municipality of central Portugal and the capital of Coimbra district, governed by an elected chamber, about 319 km² with about 156,000 residents at end-2025; the chamber runs local services and the rest belongs to the state. From 1131 to 1255 it was the capital of Portugal, the university founded in 1290 is the oldest in the Portuguese-speaking world, its campus on the hilltop Alta above the north bank of the Mondego with the Joanina library inside, World Heritage since 2013, the Baixa the commercial streets by the river and Santa Clara across it; some 28,000 students wear black gowns, the Queima das Fitas in May is their graduation festival, the Coimbra-B station lies on the Lisbon-Porto main line and there is no airport with scheduled flights. Newcomers most often go wrong by taking Coimbra for a university, when it is a district capital with an old town and industry of its own, and the university holds only the hilltop.",
    layout:
      "Coimbra's old town climbs the hillside on the north bank of the Mondego, with the university quarter at the top, overlooked by the landmark university bell tower (Torre da Universidade). The old town slopes down to the riverside, the commercial and everyday-life district.",
    gettingAround:
      "Coimbra has no scheduled commercial flights; the nearest airports are Lisbon (about 2 hours by car) or Porto (about 1 hour). Trains to both cities are convenient (about 1–2 hours). The old town is steep and mainly walked. The climate is temperate with four clear seasons.",
    culture:
      "Portuguese is the main language; the university-town character brings a strong student atmosphere and relatively common English. The 'Burning of the Ribbons' (Queima das Fitas) graduation festival in May is nationally known. Restaurant tipping is not required.",
    seeAndDo:
      "The old university campus and the Joanina Library (Baroque, with an extremely ornate collection); the site of the old Convent of Santa Clara (across the river, with a view over the old town); the old cathedral; a Mondego river cruise or riverside walk; fado music (Coimbra fado differs from the Lisbon style, traditionally sung by students).",
    whenAndTips:
      "May–September is the most comfortable; May's graduation season is lively but lodging is tight. Visitor numbers to the Joanina Library are limited — book online ahead. The old town is steep — wear comfortable shoes.",
  },

  evora: {
    // identity sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   埃武拉市镇 2025 年末 58,567。**「都会区」是虚构口径**，理由同科英布拉。
    identity:
      "Évora is the capital of the Alentejo region, with a municipal population of about 59,000 (end-2025); its old town preserves layered remains from Roman, Moorish and medieval periods, inscribed as a whole as a UNESCO World Heritage Site in 1986 and often called a 'museum city'.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   同上。
    howItWorks:
      "Évora is the centre of the Alentejo and the capital of Évora district, governed by an elected chamber, about 1,300 km² mostly plains of cork oak and wheat, with about 59,000 residents at end-2025 nearly all in the town; the chamber runs local services and the rest belongs to the state. The walled old town was inscribed as World Heritage in 1986, the Roman temple, the cathedral and the Chapel of Bones inside the walls, the university founded in 1559 in the old town and the aqueduct of 1531 reaching in from outside; Lisbon lies about 140 km west, about an hour and a half by train, the city will be European Capital of Culture in 2027, and in summer it is among the hottest in Portugal. Newcomers most often go wrong by taking the municipality of Évora for a town, when its territory is the size of half of Hong Kong and the walled town one point within it.",
    layout:
      "Évora's old town is ringed by medieval walls, with the ruins of a Roman temple right beside the central square; traditional white-and-yellow-trimmed Alentejo houses line the narrow lanes. The compact old core is entirely walkable for the main sights.",
    gettingAround:
      "Évora has no scheduled commercial flights; the nearest airport is Lisbon (about 1.5 hours by car). Coach or train to and from Lisbon takes about 1.5–2 hours. The old town is walkable; surrounding olive groves and estates need a car or a tour. The climate is Mediterranean, hot and dry in summer.",
    culture:
      "Portuguese is the main language, with widespread English in tourist areas. Évora is a centre of the Alentejo wine region, and local food is known for bread-thickened stews (açorda) and black-pig charcuterie. Restaurant tipping is not required.",
    seeAndDo:
      "The Roman Temple ruins (the Temple of Diana, 1st century AD); Évora Cathedral; the Chapel of Bones (walls lined with thousands of human bones — a sombre subject; learn the background before visiting); the old walls and main square; nearby Alentejo estate wine tastings (mostly by appointment); south to the Alqueva Reservoir.",
    whenAndTips:
      "April–June and September–October are the most comfortable; July–August is hot. The Chapel of Bones is small — go early in peak season. Visiting the surrounding olive groves and estates is best with a car or a hired driver, as public transport is limited.",
  },

  faro: {
    // identity sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   法鲁市镇 2025 年末 80,256。**「都会区」是虚构口径**，理由同科英布拉。
    identity:
      "Faro is the capital of the Algarve region, with a municipal population of about 80,000 (end-2025), and the site of the gateway airport for tourism on Portugal's southern coast. The old town keeps its walls and Moorish-era layout intact, right beside the Ria Formosa Natural Park.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   **这条是本轮最值得记的一例**：howItWorks 原本已经是「2024 年 70,347」——**标了年份、标了来源、上一轮核实过**，但 INE 2026-06 的方法修订把 2024 年的官方值上修到了 **80,316（+14%）**。也就是说「已核实」的数字被同一机构自己推翻了。这批里修订幅度最大的一个。
    howItWorks:
      "Faro is the capital of the Algarve region — the administrative seat of the district since 1756 — and of Faro District, governed by an elected city chamber and divided into a few parishes; the municipality covers about 203 km² with about 80,000 residents at end-2025. Most of what people picture as the 'Algarve resorts' lies elsewhere: Albufeira, Vilamoura and Lagos are each in municipalities of their own, and Faro is the city where locals live and do business. The walled old town, the Cidade Velha, stands by the water with the Arco da Vila and the cathedral inside and the quay and marina outside; half the municipality is the Ria Formosa lagoon park, and barrier islands such as Deserta and Culatra belong to Faro and are reached by boat. Faro Airport, about 7 km west, carried more than 10 million passengers in 2025 and is very nearly the gateway to the whole Algarve, and the railway runs to Lisbon. The University of the Algarve is in town. Addresses give street, number and postcode. Newcomers most often go wrong by taking Faro for an airport town, when it is a regional capital with an old town, a lagoon and a university.",
    layout:
      "Faro's old town is ringed by walls, centred on the cathedral square, with cobbled lanes preserving their Moorish and medieval layout. Outside the walls is a more modern commercial district and seafront promenade; the Ria Formosa lagoon lies just south of the city, reached by boat.",
    gettingAround:
      "Faro Airport (FAO) is west of the city, about 3.2 km in a straight line from the old town, with a connecting bus. The city is mainly walked; reaching Algarve coastal resort towns (Lagos, Albufeira and others) needs a car, train or coach. The climate is Mediterranean, hot and dry in summer — one of Portugal's sunniest regions.",
    culture:
      "Portuguese is the main language; because tourism is so developed, English (also often German and Dutch) is widespread. Faro itself is relatively quiet, with most visitors using it as a gateway to nearby beach towns. Restaurant tipping is not required.",
    seeAndDo:
      "Faro's old town and cathedral (climb the tower); Ria Formosa Natural Park (a boat through the sandbars and lagoons to see birdlife); an hour west to Ponta da Piedade at Lagos for the sea-carved rocks; nearby beach towns (Albufeira, Vilamoura and others); Ilha Deserta, a sandbar-beach island in the lagoon reached by boat.",
    whenAndTips:
      "April–June and September–October are the most comfortable; July–August is peak season, hot with crowded beaches and sights. Check tides and schedules ahead for the Ria Formosa boat trips. Renting a car from Faro is convenient for touring the Algarve coast, as public transport coverage is limited.",
  },

  funchal: {
    // identity sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   丰沙尔市镇 2025 年末 113,443。**「都会区」是虚构口径** —— 马德拉是自治区，没有法定都会区建制。
    identity:
      "Funchal is the capital of the Madeira archipelago, with a municipal population of about 113,000 (end-2025), on a natural bay on the south coast of Madeira Island, called the 'Garden of the Atlantic' for its year-round mild climate. The city climbs the hillside from the sea in layers, with a classic clifftop-style toboggan run.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   同上。
    howItWorks:
      "Funchal is the capital of the Autonomous Region of Madeira, which has a government and assembly of its own running health, education and most public services, while the municipality is governed by an elected chamber for local affairs; it covers about 76 km² with about 113,000 residents at end-2025, four in ten of the island. The city stands on a half-circle of slopes rising from the sea to 1,200 m, the old quarter on the east side of the harbour, a cable car climbing from the shore to Monte and wicker toboggans sliding back down, the hotel zone at the Lido to the west, the cruise pier in the harbour and the airport about 18 km east at Santa Cruz; the levada walks are scattered across the island. Newcomers most often go wrong by taking Funchal for Madeira, when the island runs about 57 km, the north coast and the summits keep another climate, and the drive from town takes an hour or two.",
    layout:
      "Funchal spreads around the bay: the old town, with long-established wine lodges and markets, is to the east; the modern hotel resort area is to the west. The steep mountains behind the city rise to Monte, halfway up, the terminus of a cable car and the starting point of the traditional wicker toboggan run.",
    gettingAround:
      "Madeira Airport (FNC) is about 18 km east of the city, its runway built out over a cliff and notoriously challenging to approach, with a connecting bus into town. The city has buses and a cable car; reaching other parts of the island (such as Pico Ruivo, Cabo Girão) mostly needs a car or a tour. The climate is subtropical maritime, mild year-round, rarely extreme.",
    culture:
      "Portuguese is the main language, with widespread English in tourist areas. Madeira wine (a fortified wine) is the local signature product, and many Funchal wine lodges can be visited and tasted. The New Year's Eve fireworks display has been recognised as one of the largest firework shows in the world. Restaurant tipping is not required.",
    seeAndDo:
      "The old town's lanes and markets (taste Madeira wine and tropical fruit); the Monte cable car and traditional wicker toboggan run (an experiential way down the hill); the Monte Palace Tropical Garden; a hike up Pico Ruivo (the island's highest peak, needing a car to the trailhead); the suspended glass viewing platform at Cabo Girão (one of Europe's highest sea cliffs).",
    whenAndTips:
      "Year-round is possible; April–October is warmer and better for hiking. The toboggan ride is short but very popular — expect a queue in peak season. Mountain trails such as Pico Ruivo have changeable weather — check the forecast and bring warm layers. Book flights to and from the mainland and New Year lodging well ahead.",
  },

  "ponta-delgada": {
    // identity sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   蓬塔德尔加达市镇 2025 年末 71,695。**「都会区」是虚构口径** —— 亚速尔是自治区，没有法定都会区建制。
    identity:
      "Ponta Delgada is the capital of the Azores, on the south coast of São Miguel (the largest Azorean island), with a municipal population of about 72,000 (end-2025). The city rose after a 1522 earthquake destroyed the original capital, and is now the gateway for exploring São Miguel's volcanic landscape.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   同上。
    howItWorks:
      "Ponta Delgada is the largest city of the Autonomous Region of the Azores and the seat of its government — but the Azores have no single capital: the government sits here, the assembly at Horta on Faial and the courts at Angra on Terceira, three islands sharing three functions. The municipality is governed by an elected chamber, about 233 km² with about 72,000 residents at end-2025, taking up the western half of São Miguel; the city gates and the waterfront are the reference points of the centre, the airport lies 3 km west with about 3.3 million passengers in 2024, the crater lakes of Sete Cidades lie at the municipality's western end, the hot springs of Furnas in another municipality to the east, and Lisbon is about two and a half hours by air. Newcomers most often go wrong by taking Ponta Delgada for the capital of the Azores, when the archipelago's three powers sit on three islands and this is only the executive corner.",
    layout:
      "Ponta Delgada's old town spreads along the bay, with the iconic three black-and-white arches standing at the waterfront square. The city itself is small, most sights near the harbour, while the island's volcanic lakes and geothermal areas (Sete Cidades, Furnas) lie in different directions out of town, reached by car.",
    gettingAround:
      "Ponta Delgada Airport (PDL) is right by the city (about 3 km), with bus and taxi connections. The city is walkable; reaching other island sights (Sete Cidades, Furnas and others) needs a car or a tour, as island public transport is limited. The climate is temperate maritime, mild and rainy year-round, with fast-changing weather.",
    culture:
      "Portuguese is the main language, with widespread English in tourist areas. Being far from the mainland, the Azores keep a distinct island culture and cuisine (such as Furnas's geothermally cooked stew, local cheese and tea — one of the few commercial tea-growing areas in Europe). Restaurant tipping is not required.",
    seeAndDo:
      "The old town's seafront arches and cathedral; Sete Cidades caldera (a two-tone crater lake, with a viewpoint over the whole basin); the Furnas geothermal area (fumaroles, hot springs, geothermally cooked stew); São Miguel's tea plantations (one of Europe's few commercial tea-growing areas); whale watching (the waters around the island are an important whale-observation site).",
    whenAndTips:
      "May–September has relatively stable weather and is also whale-watching season. Weather on the island is changeable and rain can come at any time — bring a waterproof jacket. It's about an hour's drive between Sete Cidades and Furnas — plan a full day for a driving loop of the island. Book flights and ferries to and from the mainland ahead; some winter flights are weather-sensitive.",
  },

  // ── Portugal batch 2 (2026-09-05) ──
  lagos: {
    // identity sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   拉戈斯市镇 2025 年末 40,729（2021 年修订后 35,773，比原引用的 3.3—3.4 万明显上修）。
    identity:
      "Lagos lies on the coast of the western Algarve, with about 41,000 people (end-2025), and was a key port of the Age of Discovery: Prince Henry the Navigator often resided here directing his expeditions, and in 1444 the first slave market of colonial Europe was set up here (the building is now a museum). The sixteenth-century walls, the seaside church of Santo António (1715) and the cobbled lanes of the old town survive. Ponta da Piedade south of the town is a famous group of sea cliffs and rock pillars in the Algarve, Praia Dona Ana and Praia do Camilo lie between golden rock walls, and Meia Praia is an open beach of several kilometres; Sagres and Cape St Vincent, the south-western corner of mainland Europe, lie about 35 km west.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   同上。
    howItWorks:
      "Lagos is a municipality of the western Algarve, governed by an elected chamber, about 213 km² with about 41,000 residents at end-2025; the chamber runs local services and the rest belongs to the state. The old town lies within its walls at the mouth of the Bensafrim, the marina across the river, the fleets of Henry the Navigator sailed from here in the fifteenth century, the rock pillars of Ponta da Piedade stand on the headland to the south, Praia Dona Ana at the edge of town and Meia Praia running for kilometres across the river; Faro airport lies about 90 km east, the Algarve railway line ends here, and Sagres lies about 30 km west. Newcomers most often go wrong by taking Lagos for a beach, when it is a walled old town with a market and people living in it in winter, and the beaches lie on the headland outside.",
    layout:
      "The old town lies on the west bank of the Bensafrim estuary, with pedestrian streets, churches and squares inside the walls, the slave-market museum on the riverside square and the marina across the river. Ponta da Piedade is on the headland about 3 km south, with Dona Ana and Camilo beaches on the way; Meia Praia stretches east from the east bank. The station stands by the marina on the east bank. Sagres lies west and the Benagil cave about 25 km east.",
    gettingAround:
      "Lagos has no airport with scheduled flights; from Faro Airport (about 90 km) the train takes about 1.5 hours (Lagos is the western terminus of the Algarve line) or the bus about 1.5 hours. The old town is walkable; Ponta da Piedade is about 40 minutes on foot or a tourist-train ride, Meia Praia a walk or bus ride, Sagres about 1 hour by bus, and the sea caves are visited by boat from the marina. The climate is Mediterranean with hot dry summers and mild winters.",
    culture:
      "Portuguese is universal, with English widespread in the tourist areas. The slave-market museum tells that history — visit with respect. The clifftop path at Ponta da Piedade runs close to the edge — take care in wind; beaches are lifeguarded, so watch the flags. The old town is full of seafood restaurants, with grilled sardines and cataplana seafood stew as local dishes. Tipping is optional, 5–10%.",
    seeAndDo:
      "Ponta da Piedade (the clifftop path, boat trips through the grottoes); Dona Ana and Camilo beaches; the old town, the walls and the gilded church of Santo António; the slave-market museum; Meia Praia; boat trips from the marina for caves and dolphins; the fortress at Sagres and sunset at Cape St Vincent; the Benagil cave (by boat or kayak); Praia da Luz.",
    whenAndTips:
      "May–June and September–October are best; July–August are the most crowded and hot; winter is mild and quiet. Stay two or three nights as a base for the western Algarve. Book cave boats and kayaks ahead.",
  },
  tavira: {
    // identity sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   塔维拉市镇 2025 年末 33,006（2021 年修订后 29,913）。原文连年份都没有。
    identity:
      "Tavira lies at the mouth of the Gilão river in the eastern Algarve about 28 km in a straight line east of Faro, with about 33,000 people (end-2025) — the most old-town-like of the Algarve's towns. Phoenicians settled here in the eighth century BC, the Moors ruled for five centuries and Christians retook it in 1242; the 'Roman bridge' over the river is in fact Moorish, and the old town is said to have 37 churches. Once a tuna-fishing centre, it is now known for slow living (a Cittaslow member), and the neighbouring Ria Formosa Natural Park has salt pans, flamingos and the long beach of Ilha de Tavira, reached by ferry.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   同上。
    howItWorks:
      "Tavira is a municipality of the eastern Algarve, governed by an elected chamber, about 607 km² reaching north into the hills, with about 33,000 residents at end-2025; the chamber runs local services and the rest belongs to the state. The old town lies on both banks of the Gilão with the Roman bridge joining them, the castle on the slope of the west bank, some thirty churches scattered through the town and salt pans by the lagoon to the south; the beach lies on the Ilha de Tavira beyond the Ria Formosa lagoon, reached by ferry from the pier south of town, Faro about 28 km west, the railway station at the edge of town and the Spanish border about 30 km east. Newcomers most often go wrong by looking for the sea in Tavira town, when the beach lies on a barrier island beyond the lagoon and the ferry runs rarely in winter.",
    layout:
      "The old town straddles the Gilão, with the Roman bridge linking the banks, the Praça da República and the castle ruin on the slope of the west bank and churches and white houses spread across the hillside; the market and restaurants lie on the east bank. The station is on the north side of the old town. The ferry to Ilha de Tavira leaves from the Quatro Águas pier at the river mouth, about 10 minutes, with salt pans on both sides of the estuary. The fishing village of Santa Luzia lies about 3 km south-west.",
    gettingAround:
      "Tavira has no airport with scheduled flights; Faro Airport is about 31 km in a straight line away. Trains from Faro take about 35 minutes, and buses are easy. The old town is walkable, and hire bicycles suit the river and the salt pans; the ferry to the island runs often in summer and less in winter. The climate is Mediterranean — one of the sunniest corners of Europe.",
    culture:
      "Portuguese is universal, English works in the tourist areas, and many British and Dutch retirees live here. Most churches open by day — dress modestly. The island is part of the natural park, with no shade — bring water — and part of it is a naturist beach. Paths cross the salt pans, and flamingos come in autumn and winter. Tuna, octopus (Santa Luzia is the octopus capital) and fleur de sel are the local produce. Tipping is optional.",
    seeAndDo:
      "The Roman bridge and the riverside; the castle garden and the camera obscura (in the old water tower); the Praça da República and the churches (Santa Maria, the Misericórdia); the beach of Ilha de Tavira; the salt-pan paths and flamingos; the octopus restaurants of Santa Luzia; boat trips in the Ria Formosa; the old village of Cacela Velha; the Saturday market.",
    whenAndTips:
      "May–June and September–October are best; summer is hot but the beaches are liveliest. A day or two nights, at a slow pace. An easy day trip from Faro and a quiet base for the eastern Algarve.",
  },
  nazare: {
    // identity sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   纳扎雷市镇 2025 年末 17,067（2021 年修订后 15,699）。原文连年份都没有。
    identity:
      "Nazaré lies on the Atlantic coast of central Portugal about 100 km north of Lisbon, with about 17,000 people (end-2025) — a traditional fishing village and seaside resort now famous for the largest surfable waves in the world: the underwater Nazaré Canyon amplifies the winter swells, and waves at Praia do Norte reach more than 20 m; Garrett McNamara's ride here in 2011 drew global attention, and in 2020 Sebastian Steudtner set the world record of 26.2 m. The clifftop village of Sítio has a funicular of 1889, the church of Our Lady of Nazaré and the fort of São Miguel Arcanjo with its lighthouse (the wave-watching point); the fishwives' seven skirts and the festival of 8 September are local traditions.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   同上。
    howItWorks:
      "Nazaré is a municipality on Portugal's central coast, governed by an elected chamber, about 82 km² with about 17,000 residents at end-2025; the chamber runs local services and the rest belongs to the state. The town is in three tiers: Praia by the sea is the fishing village and resort, Sítio on the cliff holds the sanctuary and the fort with a funicular joining the two, and Pederneira inland is the old town; the giant waves break at Praia do Norte north of Sítio, where an undersea canyon lifts winter swells past 20 m and the record of 26.2 m was set in 2020, the fort's lighthouse the place to watch, Lisbon about 120 km south and no railway. Newcomers most often go wrong by expecting giant waves on the town beach, when they break on another beach north of the cliff, and only in winter.",
    layout:
      "The town has three parts: the beach quarter (Praia) on the flat by the sea, the old fishing village and resort with Nazaré beach; Sítio on the clifftop about 100 m above to the north, reached by the funicular from the beach quarter, with the church and square on top and the fort of São Miguel at the western tip of the headland, beyond which lies Praia do Norte; and Pederneira on the hillside to the east. The bus station is in the beach quarter.",
    gettingAround:
      "Nazaré has no airport with scheduled flights; Lisbon Airport is about 120 km away, with direct buses of about 1.5–2 hours, and Porto about 2.5 hours. There is no railway. In town walk and take the funicular (a few minutes); Praia do Norte is about 20 minutes' walk from Sítio or a short drive. The climate is Mediterranean-maritime, with cool foggy summers and wet winters of big surf.",
    culture:
      "Portuguese is universal, with English in the tourist areas. Giant waves come from October to March on days with a big-swell forecast; the fort charges entry and the clifftop is windy — keep away from the edge and from the water's edge at Praia do Norte (dangerous); in summer the beach has lifeguarded zones. The fishwives' costume is seen at festivals and by the fish-drying racks — ask before photographing. Grilled fish and caldeirada fish stew are the local dishes. Tipping is optional.",
    seeAndDo:
      "The clifftop of Sítio, the church and the square; the fort of São Miguel with the surf museum and the lighthouse wave-watching deck; the giant waves of Praia do Norte (winter); the funicular; Nazaré beach and the fish-drying racks; the fishing harbour and market; the Pederneira viewpoint; day trips to the monasteries of Alcobaça and Batalha (World Heritage) and to Óbidos.",
    whenAndTips:
      "October–March for the giant waves (check the forecast; big-wave days are packed); June–September for the beach. Half a day to a day, combined with Óbidos, Alcobaça and Batalha. A day trip from Lisbon works.",
  },
  obidos: {
    identity:
      "Óbidos sits on a hill about 80 km by road north of Lisbon, one of the best-preserved medieval walled towns in Portugal, with about 3,100 people within the walls. In 1210 Afonso II gave it to his queen, and for centuries it belonged to the queens of Portugal — hence the 'town of the queens'; the castle is now a state pousada hotel, the complete walls can be walked, and white houses trimmed in blue and yellow line the Rua Direita. Ginja cherry liqueur served in chocolate cups is its signature, the medieval fair in July and the international chocolate festival in March are the big events, and in 2015 UNESCO named it a City of Literature, with a dozen bookshops in town.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   奥比杜什市镇 2025 年末 13,912（2021 年修订后 12,371）。
    //   同条目 identity 的「镇内人口约3100」（城墙内老村）**不是 INE 的统计单位** —— INE 不按城墙内外划分，无法用官方数据核实，如实保留但不作为市镇人口。
    // howItWorks sources: 2026-09-13 核（抽样 seed=8）：删去「约 3,000 人住在墙内」—— 约 3,000 是教区整体人口、墙内常住只有百人量级（3 级来源，未取到官方数，故只删不补）
    howItWorks:
      "Óbidos is a municipality of central Portugal, governed by an elected chamber, about 142 km² with about 13,900 residents at end-2025; the chamber runs local services and the rest belongs to the state. The Óbidos people picture is the walled medieval village, its castle now a state-run pousada, the town held by Portugal's queens from the Middle Ages, cherry liqueur its speciality, the medieval fair in July and the chocolate festival in March packing visitors into one main street, and a UNESCO City of Literature since 2015; Lisbon lies about 85 km south, there is no railway, buses serve, and the Óbidos lagoon and the coast lie at the municipality's western end. Newcomers most often go wrong by taking the walled village for the whole of Óbidos, when most of the municipality is farmland and coast and the village is only its emblem.",
    layout:
      "The town lies along the ridge inside the walls: the town gate (with its tiled chapel) is at the southern end, the Rua Direita runs north from the gate to the castle, the church of Santa Maria and the square lie midway, and the walls ring the whole town for about 1.5 km and can be climbed. The car park and bus stop lie outside the walls to the south. The Óbidos lagoon is about 8 km north-west on the coast, Nazaré about 40 km north and Caldas da Rainha about 6 km north-east.",
    gettingAround:
      "Óbidos has no airport with scheduled flights; Lisbon Airport is about 80 km away. Direct buses from Lisbon's Campo Grande take about 1 hour; trains need a change and are slow. The town is walked entirely (steep cobbles); the lagoon and beaches need a car. The climate is Mediterranean with hot dry summers and mild winters.",
    culture:
      "Portuguese is universal, with English in the tourist areas. The walls have no railings — mind the wind and children; dress modestly in the churches. Ginja is sold by the cup at street kiosks. The medieval fair (July–August) is crowded and parts are ticketed; the Christmas village (December) brings lights. The bookshops occupy churches, markets and other old buildings. Tipping is optional.",
    seeAndDo:
      "Walking the walls; the Rua Direita and the tiled chapel of the town gate; the church of Santa Maria (tiled walls, paintings by Josefa de Óbidos); the castle (the pousada from outside); ginja in chocolate cups; the bookshops (the Santiago church bookshop); the Óbidos lagoon and beaches; the sixteenth-century aqueduct; day trips to Nazaré, Alcobaça and Batalha.",
    whenAndTips:
      "April–June and September–October are most comfortable; the medieval fair in July–August and the Christmas village in December are the liveliest. Half a day or a night (stay inside the walls for the empty dawn). Most often a day trip from Lisbon, and a stop on the way to Nazaré.",
  },
  "viana-do-castelo": {
    // identity sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   维亚纳堡市镇 2025 年末 92,860（2021 年修订后 86,869）。**这条是这批里原本写得最规范的一个** —— 标了口径也标了年份，只是被新一期超过。
    identity:
      "Viana do Castelo lies at the mouth of the Lima in the Minho region of northern Portugal about 60 km in a straight line north of Porto, with about 93,000 people in the municipality (end-2025). A port of shipbuilding and deep-sea fishing in the Age of Discovery, it gained the Ponte Eiffel (designed by Eiffel's firm) across the Lima in 1882; the Sanctuary of the Sacred Heart begun in 1904 on the hill of Santa Luzia overlooks the estuary and coast and is the emblem of northern Portugal. The Romaria de Nossa Senhora da Agonia in August is one of Portugal's largest folk festivals, parading the Minho's traditional costume and gold filigree; the hospital ship Gil Eannes, which served the Newfoundland fishing fleet, is moored in the harbour as a museum, and Praia do Cabedelo across the river is a surf beach.",
    // howItWorks sources: 葡萄牙国家统计局（INE）《Estimativas de População Residente – 2025》（2026-06-22 发布），市镇级数据表 Quadro 1.1（2021–2025），子代理直接下载官方 CSV，**级别 1**。https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=770295679
    //   发布节奏：**每年 6 月**发布上一年 12 月 31 日的市镇级估计（2024 年数 2025-06-18、2025 年数 2026-06-22）。下一期预计 2027-06。
    //   **⚠️ 这一期是结构性修订**：INE 首次完全基于行政数据源估计，并整合了 AIMA（移民与庇护管理局）的登记数据，**用同一套新方法回溯修订了 2021–2024 整个序列** —— 此前系统性低估了外籍居民。多个市镇的「官方旧数字」因此被官方自己推翻。
    //   **葡萄牙只有两个法定 área metropolitana**（Lei n.º 75/2013）：里斯本（AML）与波尔图（AMP）。其余城市没有法定都会区建制。
    //   同上。
    howItWorks:
      "Viana do Castelo is the northernmost district capital of Portugal, governed by an elected chamber, about 319 km² with about 93,000 residents at end-2025; the chamber runs local services and the rest belongs to the state. The city lies on the north bank of the Lima mouth, the Praça da República the centre of the old town, the Santa Luzia sanctuary on the hilltop to the north reached by funicular, the hospital ship Gil Eannes moored by the river, Cabedelo beach on the spit across the river, the Agonia festival in August among the largest religious festivals in Portugal, and gold filigree and Minho folk custom its identity; the Minho railway line runs to Porto and Spain, Porto about 70 km south, the border about 25 km north, and the shipyard and the offshore wind farm lie off the river mouth. Newcomers most often go wrong by taking Viana do Castelo for a far suburb of Porto, when it is a district capital with a port, festivals and industry of its own.",
    layout:
      "The old town lies on the north bank of the Lima, with the Praça da República (the fountain, the Misericórdia, the old town hall) at its centre, the cathedral and Renaissance buildings around it and the quays and the hospital ship on the river. The hill of Santa Luzia rises north of the town, with a funicular (Portugal's longest) climbing from beside the station to the sanctuary and an Iron Age settlement on top. The Ponte Eiffel stands east of the old town, leading to Darque and Cabedelo beach. The station lies on the northern edge of the old town.",
    gettingAround:
      "Viana do Castelo has no airport with scheduled flights; Porto Airport is about 60 km away by road. Minho-line trains from Porto's Campanhã take about 1.5 hours, faster services about 1; buses are easy too. The old town is walkable, the funicular (about 7 minutes) or the steps climb Santa Luzia, and Cabedelo beach is reached by ferry or by bus over the bridge. The climate is temperate maritime, mild and wet.",
    culture:
      "Portuguese is universal, with English in the tourist areas. The sanctuary is a place of worship — dress modestly; the dome can be climbed. The August festival runs for several days with a giant procession, fireworks and streets carpeted with flowers — book lodging early. Minho's vinho verde, grilled cod and arroz de sarrabulho are the local tastes, and gold filigree the traditional craft. Tipping is optional.",
    seeAndDo:
      "The Santa Luzia sanctuary (funicular up, the dome climb); the Praça da República and the old town; the cathedral; the Gil Eannes hospital ship; the Ponte Eiffel; the costume museum (Minho traditional dress); surfing at Cabedelo; a boat on the Lima; the August festival; day trips to Ponte de Lima (one of Portugal's oldest towns) and the fortress of Valença.",
    whenAndTips:
      "May–September is best, with the festival in mid-August the liveliest; winters are wet. A day for the town. An easy day trip from Porto and a stop on the way north into Galicia.",
  },
};
