import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "norway-overview": {
    // identity sources: SSB Folketall：2025-09-30 人口 5,618,400 人。https://www.ssb.no/befolkning/folketall
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Norway is a country in western Scandinavia, about 320,000 sq km (not counting Svalbard and other dependencies), with a population of about 5.62 million as of September 2025 (Statistics Norway). It stretches about 1,750 km north to south, with an extremely broken coastline of countless fjords and islands. The land is mostly mountains and plateaus: an old range worn by ice (the Scandinavian Mountains, shared with Sweden) runs up the east, and the western side is cut into deep fjords reaching inland. Because of the warm North Atlantic current, Norway's winters are far milder than at similar latitudes elsewhere.",
    layout:
      "The population is concentrated in the southern half: the east (the lowlands and valleys around Oslo, nearly half the country's people), the southern coast (Kristiansand), the western fjord region (Bergen, Stavanger, Ålesund — mountains meeting sea, and wet), and central Trøndelag (Trondheim). The further north, the fewer people: northern Norway (Bodø, Narvik, the Lofoten Islands), and 'Arctic Norway' north of the Arctic Circle (Tromsø, Alta), the place for the northern lights and the midnight sun, and an area where the Sámi (Sápmi) have traditionally herded reindeer.",
    gettingAround:
      "Norway's domestic air network is one of the densest in Europe (the terrain makes roads long), with Widerøe, SAS and Norwegian linking towns large and small. Railways reach only the centre and south (Oslo–Bergen and Oslo–Trondheim–Bodø are scenic lines). The west coast has coastal ships (such as Hurtigruten) that double as scheduled transport. Between fjords you often take a car ferry. Drive on the right; mountain roads are narrow with many tunnels, and winter tyres are needed. Prices are very high (alcohol and eating out especially). Tap water is excellent and drinkable. Power is 230V with the European two-round-pin plug.",
    culture:
      "The official language is Norwegian (with two written standards, Bokmål and Nynorsk); in parts of the north, Northern Sámi is also official, with bilingual signs; almost everyone speaks fluent English. Society is egalitarian, high-trust and safe. Norwegians value the outdoors (friluftsliv) and not disturbing others. The 'right to roam' (allemannsretten) allows hiking and camping in uncultivated wild land, subject to rules and leaving no trace. Restaurants do not require tipping.",
    seeAndDo:
      "Fjords: the Sognefjord, the Geirangerfjord, the Nærøyfjord (the last two are World Heritage Sites), Preikestolen and Kjeragbolten on the Lysefjord. Mountains and plateaus: Jotunheimen (with Norway's highest peaks), the Hardangervidda, Dovrefjell. Glaciers: Jostedalsbreen (the largest on mainland Europe). Cities: the wharf houses of Bergen (a World Heritage Site), the museums and opera house of Oslo, the cathedral of Trondheim. The north: the Lofoten Islands, the northern lights at Tromsø. Scenic trains: the Bergen Railway, the Flåm Railway.",
    whenAndTips:
      "June–August has the longest daylight (the midnight sun in the north), with all mountain roads and ferries open — best for fjords and hiking; September–March is aurora season in the north but cold, dark and with some roads closed. Mountain and fjord weather is changeable — dress in layers and carry a waterproof. Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. Book scenic trains and popular ferries ahead in peak season. Prices are high, and supermarkets and the alcohol monopoly (Vinmonopolet) have limited hours and mostly close on Sundays.",
  },

  oslo: {
    // identity sources: 奥斯陆 kommune 2026 年二季度 **729,437**；**Oslo tettsted 2026-01-01 为 1,119,478，在 SSB 官方城区表里列第 1**
    //   —— SSB（1 级，2026-09-08 核）。
    //   **「都会区」不是 SSB 的口径**：原文的 100 万实际对应 tettsted，标签错了、数字也过期。
    //   **「奥斯陆地区约 160 万」查无 SSB 单一口径** —— 那对应的是 Osloregionen（一个约 65 个市镇组成的
    //   跨市镇政治合作联盟，非 SSB）或政府白皮书里的 Stor-Oslo 概念，两者定义不同，数字从约 150 万到
    //   约 210 万不等（一份 2020 年 Stor-Oslo 数据是 1,546,706）。**不是可以钉死的官方数字，已改写成不带精确值的说法。**
    identity:
      "Oslo is the capital and largest city of Norway, with a municipal population of about 730,000 (Q2 2026, SSB) and an urban-area (tettsted) population of about 1.12 million (1 January 2026), at the innermost end of the Oslofjord, ringed on three sides by forested hills. It is one of the older Scandinavian capitals (its founding goes back to the 11th century), and it has changed a great deal in the last two or three decades with a new waterfront district, an opera house and a set of new museums.",
    // howItWorks sources: Wikipedia (2026-09): Oslo (municipality + county; parliamentary byråd since 1986; 15 bydeler with elected councils; 454 km², two-thirds Marka; ~720,000 2024; Greater Oslo ~1.1 million; region ~1.6 million; Ruter); Municipalities of Norway
    howItWorks:
      "Oslo is both a municipality and a county, the two governments combined in one; since 1986 it has had a parliamentary system in which a city government (byråd) formed by the council majority governs and the mayor is a ceremonial head, and it is divided into fifteen boroughs (bydeler), each with an elected council responsible for kindergartens, elder care and social services. Norwegian municipalities run primary schools, kindergartens, elder care and planning, counties run upper secondary schools, county roads and the public transport companies, and the state runs hospitals, police and universities. The city covers about 454 km², two-thirds of it the protected forest of Marka, with about 730,000 people in Q2 2026, while the official SSB urban area (tettsted) held about 1.12 million on 1 January 2026; the wider commuting belt is often called the Oslo region, but that is a boundary drawn by a cross-municipal partnership rather than a single official SSB tier, and estimates range from about 1.5 to 2 million depending on how many municipalities are counted, with Bærum and Lillestrøm as independent municipalities in Akershus county. The fjord and the forest are the two natural boundaries, and the Akerselva river is the east–west divide in local minds: Frogner to the west is the wealthy old quarter, Grünerløkka to the east an old workers' district turned fashionable, and the Barcode towers at Bjørvika the new waterfront. Ruter's metro, trams, buses and ferries are priced by zone, and the toll ring keeps cars out. Gardermoen airport lies about 50 km north. Addresses give street, number and four-digit postcode. Newcomers most often go wrong by picturing Oslo as a compact city, when two-thirds of its territory is forest.",
    layout:
      "Oslo is on flat ground at the head of the fjord, with the centre running from the central station along Karl Johans gate to the Royal Palace, past the parliament, the university and the national theatre. The Bjørvika waterfront district has the opera house (you can walk up the roof), the Munch Museum and the public library. Behind the city is the great forest, the Marka, reached by metro for hiking or cross-country skiing, and small islands in the fjord are reachable by ferry.",
    gettingAround:
      "Oslo Gardermoen Airport (OSL) is north of the city, with the airport express (Flytoget) or an ordinary train about 20–25 minutes to the central station. The city has a metro, trams, buses and fjord ferries on one Ruter ticket; the centre is walkable. Oslo is the hub of the Norwegian rail network. The climate is temperate, moderated by the fjord and forest: winters have snow but are not extreme, and summers are mild with very long daylight.",
    culture:
      "Norwegian (Bokmål), with near-universal English. Oslo people value the outdoors and equality, and socialising is more reserved than in southern Europe. Prices are high, eating out and alcohol especially; many museums have free periods. Most shops close on Sundays. Restaurants do not require tipping.",
    seeAndDo:
      "The opera house (walk up the sloping marble roof) and the Bjørvika district; the Munch Museum (The Scream); the National Museum; the Vigeland Sculpture Park (free, over 200 figure sculptures); Akershus Fortress; the museums on the Bygdøy peninsula (the Fram polar ship, the Kon-Tiki; the Viking Ship Museum is being rebuilt); the metro up to the Holmenkollen ski jump for the city view; a fjord ferry to the islands.",
    whenAndTips:
      "May–September is the most comfortable, with long daylight. In winter you can cross-country ski and toboggan. The Oslo Pass includes public transport and most museums and pays off for a busy itinerary. The fjord ferries are part of public transport — an ordinary ticket works. The train toward Bergen is a world-famous scenic line — book ahead.",
  },

  lillehammer: {
    // identity sources: 挪威统计局（SSB）只发布两档口径：**kommune（市镇）** 与 **tettsted（城区/建成区）**，
    //   **没有「市区」这个官方称谓**。kommune 按季度发布（Q1 约 5 月中、Q2 约 8 月中、Q3 约 11 月中下旬、
    //   跨年 1 月 1 日基准数约次年 2 月中）；tettsted 按年、1 月 1 日基准，约当年 5 月发布（本期 2026-05-22）。
    //   2026-09-08 核。
    //   利勒哈默尔 kommune 2026 年二季度 **29,462**；tettsted 2025 年约 2.09–2.17 万（SSB，1 级）。
    //   原文的「市区人口约 2.8 万」两档都对不上，而同条目 howItWorks 写的 29,011 是 kommune 口径。
    identity:
      "Lillehammer is about 180 km by road north of Oslo at the northern end of Norway's largest lake, Mjøsa, at the mouth of the Gudbrandsdalen valley, with a municipal population of about 29,500 (Q2 2026, SSB). It is known worldwide for hosting the 1994 Winter Olympics, and still keeps the ski jump, the bobsleigh track and the ski areas — one of the centres of inland Norwegian winter sport.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Lillehammer (Norway; municipality in Innlandet county, 29,011 residents in 2025, 39th most populous, 478 km²; at the northern tip of Lake Mjøsa, Norway's largest lake; market rights in 1827, merged with Fåberg in 1964; host of the 1994 Winter Olympics and the 2016 Winter Youth Olympics; Maihaugen, the largest open-air museum in Norway with 185 historic buildings, and the Norwegian Olympic Museum, the only museum in northern Europe devoted to the whole history of the Games; the Lysgårdsbakkene ski jumps and alpine venues; Sigrid Undset, Nobel laureate of 1928, lived at Bjerkebæk from 1919 to 1940; UNESCO City of Literature 2017)
    howItWorks:
      "Lillehammer is a municipality of Innlandet county in Norway with 29,011 residents in 2025 over about 478 km²; Norwegian municipalities run schools, childcare and planning, the counties upper secondary schools and local transport, hospitals belong to state health enterprises and policing to the state. The town stands at the northern tip of Lake Mjøsa, Norway's largest lake, received market rights in 1827 and merged with Fåberg in 1964. The 1994 Winter Olympics remain the dividing line in the life of this town of thirty thousand: the Lysgårdsbakkene jumps, the bobsleigh track and several mountain venues were kept as lasting training and competition facilities, the Winter Youth Olympics followed in 2016, and the Olympic Museum here is the only one in northern Europe covering the whole history of the Games. Maihaugen, with 185 historic buildings moved to the site, is the largest open-air museum in Norway. Sigrid Undset, Nobel laureate of 1928, lived at Bjerkebæk in the town from 1919 to 1940, and in 2017 the city was named a UNESCO City of Literature. Newcomers most often go wrong by taking it for a ski resort, when the skiing is up at Hafjell and Kvitfjell and the town sits by the lake.",
    layout:
      "Lillehammer is built on the hillside on the north-west shore of Mjøsa, with a paved pedestrian main street (Storgata) lined with coloured wooden houses. On the hill north of town is the Olympic ski jump, with a view over the lake and valley. North the town leads into the long, narrow Gudbrandsdalen — a large valley along a fault, farms and forest on either side, the historic route from Oslo to the north-western fjords and Trondheim.",
    gettingAround:
      "Lillehammer has no airport with scheduled flights; the train from Oslo is about 2 hours (the Dovre Line), from Oslo Airport about 1.5 hours. The town is small and walkable, with buses to the ski areas and Olympic venues. The climate is more inland: cold with a long snow season and more sun than the coast; summers are mild.",
    culture:
      "Norwegian, with widespread English. The town identifies with its Olympic legacy and winter sport. The surrounding Gudbrandsdalen is one of the core areas of Norwegian folk tradition, stave churches (stavkirke) and farm culture. Restaurants do not require tipping.",
    seeAndDo:
      "The Maihaugen open-air museum (over a hundred old farmhouses and cabins from Gudbrandsdalen moved and reassembled — one of the largest open-air museums in Europe); the Olympic Park ski jump (a chairlift up, ski-jump simulator in summer) and the bobsleigh track (you can ride it); the Norwegian Olympic Museum; skiing at Hafjell and Kvitfjell in winter; driving north up Gudbrandsdalen for the stave churches.",
    whenAndTips:
      "December–March is ski season and the town's liveliest time; June–September suits hiking and the open-air museum. The Olympic venues are mostly on the edge of town and need transport. The Gudbrandsdalen valley and its stave churches are best strung together by car heading north.",
  },

  kristiansand: {
    // identity sources: 挪威统计局（SSB）只发布两档口径：**kommune（市镇）** 与 **tettsted（城区/建成区）**，
    //   **没有「市区」这个官方称谓**。kommune 按季度发布（Q1 约 5 月中、Q2 约 8 月中、Q3 约 11 月中下旬、
    //   跨年 1 月 1 日基准数约次年 2 月中）；tettsted 按年、1 月 1 日基准，约当年 5 月发布（本期 2026-05-22）。
    //   2026-09-08 核。
    //   克里斯蒂安桑 kommune 2026 年二季度 **119,720**；tettsted 2026-01-01 **68,300**（SSB，1 级）。
    //   **「挪威第五大城区」是错的**：SSB 官方城区排名表里（2026-01-01）克里斯蒂安桑城区列**第 8**
    //   https://www.ssb.no/befolkning/folketall/artikler/de-storste-byene-og-tettstedene-i-norge（1 级）——
    //   奥斯陆 / 卑尔根 / 斯塔万格-桑内斯 / 特隆赫姆 / 德拉门 / 弗雷德里克斯塔-萨尔普斯堡 / 波什格伦-希恩之后。
    identity:
      "Kristiansand is at the southern tip of Norway, facing the Skagerrak strait, with a municipal population of about 120,000 (Q2 2026, SSB) — the largest city on the southern coast (Sørlandet) and the ferry port to Denmark. The city was founded in 1641 by King Christian IV on a grid plan, and the old quarter, 'Kvadraturen', is still a regular grid. In summer it is Norwegians' own holiday spot — white wooden houses, smooth rock coastline, relatively warm sea.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kristiansand (Norway; administrative centre of its municipality and of Agder county, about 67,920 residents in 2025, the fifth-largest urban area in Norway; founded on 5 July 1641 by King Christian IV on a Renaissance grid plan still visible in the central Kvadraturen; five urban boroughs plus Songdalen and Søgne after the 2020 merger; the sunniest part of Norway with a temperate oceanic climate; Kristiansand Zoo and Amusement Park with over 900,000 visitors a year; beaches at Hamresanden and Bystranda; ferry across the Skagerrak; University of Agder)
    howItWorks:
      "Kristiansand is the administrative centre of Agder county in Norway with a municipal population of about 120,000 in Q2 2026; its urban area (tettsted) held about 68,300 on 1 January 2026, the eighth-largest urban area in the country; Norwegian municipalities run schools, childcare and planning, the counties upper secondary schools and local transport, hospitals belong to state health enterprises and policing to the state. King Christian IV ordered the city built on 5 July 1641 to a Renaissance grid laid out at once, and that grid is still called the Kvadraturen and still the shape of the centre — the key to the place, which was not a harbour settlement grown by itself but a city planted by a king to control the Skagerrak. In 2020 it merged with the municipalities of Songdalen and Søgne and now has five urban boroughs and two rural districts. This is the sunniest part of Norway with a mild oceanic climate, and Norwegians come south to these beaches in summer; the zoo and amusement park draw more than nine hundred thousand visitors a year, among the most visited attractions in the country. A ferry crosses to Denmark and the University of Agder is in town. Newcomers most often go wrong by expecting fjords in southern Norway, when this coast is low rock and sand.",
    layout:
      "Kristiansand is built on a flat sand-and-rock coast, the old town a royal grid of white wooden houses. The centre has a fish market, a fortress and an old wooden-house quarter (Posebyen). Along the shore is a long beach (Bystranda) and a pier. Around the city is the typical southern landscape of low hills, pine forest and countless small islands.",
    gettingAround:
      "Kjevik Airport (KRS) is about 16 km north-east, with an airport bus. The city has buses, and the old town is walkable. The train on the Sørland Line is about 4.5 hours to Oslo, about 3 hours to Stavanger. There is a ferry to Denmark (about 3.25 hours). The climate is among the milder in Norway, relatively warm in summer and not extreme in winter, with wind and rain possible all year.",
    culture:
      "Norwegian (the softer southern accent), with widespread English. Life on the southern coast revolves around boats, cabins and summer. Kristiansand identifies with its zoo (one of Norway's most popular family attractions) and its summer music festival. Restaurants do not require tipping.",
    seeAndDo:
      "The white wooden houses of Posebyen and the grid streets of Kvadraturen; Christiansholm Fortress and the fish market; Bystranda city beach; boat trips among the islands and out to lighthouses; the Kristiansand Zoo and amusement park (Dyreparken, east of the city); driving the southern coast to white-house towns (Lillesand, Grimstad).",
    whenAndTips:
      "June–August is high season, and the busiest time for Norwegian domestic tourists — coastal-town lodging is tight, so book early. The sea is warm by Norwegian standards but still cool. The rock coast is slippery at low tide. Driving the coast toward Stavanger is scenic but narrow and winding, with several ferry crossings.",
  },

  stavanger: {
    // identity sources: 挪威统计局（SSB）只发布两档口径：**kommune（市镇）** 与 **tettsted（城区/建成区）**，
    //   **没有「市区」这个官方称谓**。kommune 按季度发布（Q1 约 5 月中、Q2 约 8 月中、Q3 约 11 月中下旬、
    //   跨年 1 月 1 日基准数约次年 2 月中）；tettsted 按年、1 月 1 日基准，约当年 5 月发布（本期 2026-05-22）。
    //   2026-09-08 核。
    //   斯塔万格 kommune 2026 年二季度 **151,761**（SSB，1 级）。
    //   **「约 36 万人的城区」与它自己的排名口径对不上**：SSB 官方城区（tettsted）表里
    //   斯塔万格/桑内斯城区 2026-01-01 为 **244,378**，确实排第 3 —— 但那是 24.4 万，不是 36 万。
    //   36 万更接近含索拉、兰达伯格等在内的「雅伦地区 / Stavanger-regionen」这一更宽泛的功能区
    //   （约 35.4 万，2026），**与「第三大城市连绵区」这个排名所依据的 tettsted 不是同一个数**。已分开写。
    identity:
      "Stavanger is in south-western Norway on a peninsula cut up by fjords and islands, with a municipal population of about 152,000 (Q2 2026, SSB). It was a small town living on herring and sardine canning until oil was found in the North Sea in 1969, when it became Norway's 'oil capital' and the headquarters and supply base for offshore work. The old town has one of the most complete areas of 18th–19th-century white wooden houses in northern Europe.",
    // howItWorks sources: Wikipedia (2026-09): Stavanger (merged with Finnøy/Rennesøy 2020; ~151,669 2025; Rogaland capital; Stavanger/Sandnes urban area ~360,000; founded 1125; oil 1969, Equinor HQ; Sola; Jæren Line; Ryfast; Kolumbus); Municipalities of Norway
    howItWorks:
      "Stavanger is Norway's fourth-largest municipality and the seat of Rogaland county, merged in 2020 with the island municipalities of Finnøy and Rennesøy, with about 152,000 people in 2025; with Sandnes to the south — a separate municipality — it forms Norway's third-largest urban area — about 244,000 on the official tettsted measure at 1 January 2026, or about 350,000 for the wider Jæren region including Sola, Randaberg and other adjoining municipalities. The municipality runs primary schools, kindergartens and planning, the county runs upper secondary schools and the transport company Kolumbus, and the state runs hospitals and police. After oil was found in the North Sea in 1969 the city was chosen as the onshore base, and it has been Norway's 'oil capital' since: the headquarters of the state company Equinor and the Norwegian Petroleum Museum are here, about a fifth of residents have an immigrant background, and English is in general use in offices and on the street. The wooden houses of Gamle Stavanger stand on the west side of Vågen harbour, and the cathedral completed in 1125 is the point of reference of the centre. Sola airport lies to the south-west, the Jæren Line runs to Sandnes, and the Ryfast undersea tunnel leads to the Lysefjord and Preikestolen. There is no light rail, and buses and cars are daily life. Addresses give street, number and four-digit postcode beginning with 40. Newcomers most often go wrong by taking Stavanger for a staging post for Preikestolen, when it is the centre of Norway's energy industry.",
    layout:
      "Stavanger wraps around a small harbour (Vågen), with a dining and bar strip on one side (Øvre Holmegate is a street painted in bright colours) and, on the hillside opposite, 'Old Stavanger' (Gamle Stavanger) with its blocks of white wooden houses. Beyond the city are the low farmland of Jæren and a series of deep fjords. The Petroleum Museum, shaped like an offshore platform, stands at the water's edge.",
    gettingAround:
      "Sola Airport (SVG) is about 11 km south, with an airport bus and local buses. The city has buses, and the old town and harbour are walkable. Coastal ships and ferries run to the fjords and islands. The climate is west-coast maritime: mild, wet and windy, rarely severely cold in winter but damp.",
    culture:
      "Norwegian (the local dialect), with widespread English and, because of the oil industry, many foreigners. The city is practical and closely tied to oil and gas, and is also investing in the energy transition. Stavanger was a European Capital of Culture (2008) and has an active street-art scene (the Nuart festival). Restaurants do not require tipping.",
    seeAndDo:
      "The white-house lanes of Old Stavanger; the Norwegian Petroleum Museum (candid, and discussing the environmental cost); the harbour and the coloured street; a boat to the Lysefjord to hike Preikestolen (Pulpit Rock, a flat ledge about 600 m above the fjord, about 4 hours round trip) or the harder Kjeragbolten; the beaches and lighthouses of Jæren; a street-art walk.",
    whenAndTips:
      "May–September suits fjord hiking. The Preikestolen trail is very crowded in peak season — start early or go on a weekday; the path is rocky and slippery, so wear hiking boots, know your limits and stay behind the safety line. The weather is changeable — carry rain gear and warm layers. The coastal road toward Bergen (with ferries and the world's longest subsea road tunnel) is interesting.",
  },

  bergen: {
    // identity sources: 挪威统计局（SSB）只发布两档口径：**kommune（市镇）** 与 **tettsted（城区/建成区）**，
    //   **没有「市区」这个官方称谓**。kommune 按季度发布（Q1 约 5 月中、Q2 约 8 月中、Q3 约 11 月中下旬、
    //   跨年 1 月 1 日基准数约次年 2 月中）；tettsted 按年、1 月 1 日基准，约当年 5 月发布（本期 2026-05-22）。
    //   2026-09-08 核。
    //   卑尔根 kommune 2026 年二季度 **295,009**（SSB，1 级）；**按 kommune 人口是全国第二大市镇，排名成立**。
    //   **「都会区约 45 万」保留但注意**：与 Bergen storbyregion 的二手数据（约 43.8–46.9 万，2024）量级相符，
    //   但不是 SSB 的单一官方口径 —— 下一轮要么找到官方口径，要么改成不带数字的表述。
    identity:
      "Bergen is the second-largest city in Norway and the centre of the western fjord region, with a municipal population of about 295,000 (Q2 2026, SSB), ringed by seven mountains and facing a fjord out to the open sea. In the Middle Ages it was an important Hanseatic League trading post in northern Europe, prospering on dried-cod trade, and the row of coloured wooden merchant houses on the wharf (Bryggen) is a World Heritage Site. It is also the rainiest big city in Norway, with about 240 rainy days a year.",
    // howItWorks sources: 卑尔根 kommune 2026 年二季度 **295,009**；**Bergen tettsted 2026-01-01 为 274,589，SSB 官方城区排名第 2**
    //   （1 级，2026-09-08 核）。
    //   **上一轮把「都会区约 45 万」判为 unknown 留着，这一轮查清了：SSB 没有这一档。**
    //   45 万对应的是第三方/媒体聚合的 Bergen storbyregion（约 43.8—46.9 万，2024），**不是 SSB 的表**，
    //   且与 tettsted 的 27.5 万相差悬殊、不能互相替代 —— 已删掉硬数字。
    //   **处理方式与奥胡斯「东日德兰的都会区约 140 万」一致：口径是编的，数字再精确也没意义。**
    // howItWorks sources: verified 2026-09-15, sampling seed=15 (content-verifier): Bybanen opened centre–Nesttun in 2010, airport branch 2017, Fyllingsdalen line 2022 (Wikipedia "Bergen Light Rail", level 3).
    howItWorks:
      "Bergen is Norway's second city and, since 2020, the capital of Vestland county; it has had a parliamentary system since 2000, with a city government (byråd) formed by the council majority, and is divided into eight boroughs (bydeler). The municipality runs primary schools, kindergartens and planning, the county runs upper secondary schools and the transport company Skyss, and the state runs hospitals and police. The municipality covers about 465 km² with about 295,000 people in Q2 2026 and an official urban area (tettsted) of about 275,000 on 1 January 2026, the second-largest in the country; the wider commuting belt is sometimes called Greater Bergen, but that is not a single official SSB tier. The city is enclosed by seven mountains at the head of a bay: the Hanseatic wooden houses of Bryggen were inscribed as World Heritage in 1979, the fish market stands at the head of Vågen harbour, Torgallmenningen is the central square, the Fløibanen funicular lifts people up to see the whole, and the Bybanen light rail, opened in stages (centre to Nesttun in 2010, the airport in 2017, Fyllingsdalen in 2022), now joins airport, centre and Fyllingsdalen. Precipitation falls on about 240 days a year, and the raincoat is daily wear. The Bergen dialect and the self-image that 'Bergen is not Norway' are the city's character; the Hurtigruten coastal ships sail from here and the Bergen Line runs to Oslo. Addresses give street, number and four-digit postcode beginning with 50. Newcomers most often go wrong by taking Bergen for a gateway to the fjords, when it is a city with seven hundred years of identity of its own.",
    layout:
      "Bergen's old town wraps around the Vågen harbour, with the gabled wooden houses of Bryggen on the east side and the fish market at the head. The city is hemmed in by mountains and can only spread along valleys and the shore. The funicular station for Mount Fløyen is right by the centre, a few minutes up to a view over the city and fjord. The higher Mount Ulriken has a cable car.",
    gettingAround:
      "Flesland Airport (BGO) is south of the city, with a light rail (Bybanen) about 45 minutes to the centre. The city has light rail and buses, and the old town is walkable (with hills). Bergen is the end of the Bergen Railway (about 6.5 hours to Oslo, a scenic line) and the start of the Hurtigruten coastal ships and several fjord cruises. The climate is west-coast maritime: very wet, windy, and mild but damp in winter.",
    culture:
      "Norwegian (the Bergen dialect has a distinctive guttural r), with widespread English. Bergen people identify with 'not being Oslo', with the rain, with the local football team and with the composer Grieg. The city has a musical and literary tradition (Grieg, the Bergen International Festival). Restaurants do not require tipping. Carrying an umbrella is almost a way of life.",
    seeAndDo:
      "The Hanseatic wooden houses of Bryggen and the Hanseatic Museum; the fish market; the Fløibanen funicular for a walk on the mountain; a cruise into the Sognefjord and the Nærøyfjord (the 'Norway in a Nutshell' day trip); Grieg's home (Troldhaugen), with lunchtime concerts in summer; the Flåm Railway (a steep descent from Myrdal to the fjord, world-famous); the Ulriken cable car.",
    whenAndTips:
      "May–September is relatively drier with long daylight, but it can rain at any time — a waterproof jacket and shoes are essential. Bryggen is crowded by day — early morning has better light and fewer people. Book 'Norway in a Nutshell' and the Flåm Railway ahead in peak season. Bergen is often the start of a fjord cruise or a road trip.",
  },

  alesund: {
    // identity sources: 挪威统计局（SSB）只发布两档口径：**kommune（市镇）** 与 **tettsted（城区/建成区）**，
    //   **没有「市区」这个官方称谓**。kommune 按季度发布（Q1 约 5 月中、Q2 约 8 月中、Q3 约 11 月中下旬、
    //   跨年 1 月 1 日基准数约次年 2 月中）；tettsted 按年、1 月 1 日基准，约当年 5 月发布（本期 2026-05-22）。
    //   2026-09-08 核。
    //   奥勒松 kommune 2026 年二季度 **59,790**；tettsted 2026-01-01 **56,763**（SSB，1 级）。
    //   **「挪威第九大城镇」已过期**：按 SSB 官方城区排名表（2026-01-01），奥勒松城区**已被通斯贝格
    //   （57,011）反超，现列第 10**。名次是会被反超的量，写的时候要带时点。
    identity:
      "Ålesund is on the western coast of Norway among several small islands, with a municipal population of about 60,000 (Q2 2026, SSB), and an important fishing and seafood-processing port. In 1904 a great fire destroyed almost the entire town, which was then rebuilt over a few years in the then-fashionable Art Nouveau (Jugendstil) style — so the whole centre is a rare unbroken ensemble of Art Nouveau buildings, with turrets, spires and carved flowers and plants, its defining feature.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Ålesund (Norway; town in Møre og Romsdal county with 55,684 residents in 2024 over 28.93 km², the ninth-largest town in Norway, built across islands; the fire of 23 January 1904 destroyed the wooden town, one person died and more than 10,000 lost their homes, and Kaiser Wilhelm II, a frequent visitor, sent four warships with material for temporary shelter; rebuilt in stone, brick and mortar in Jugendstil between 1904 and 1907 by about fifty builders and architects trained across Europe, giving the town its uniform Art Nouveau centre; the Jugendstilsenteret museum; a major fishing port and the clipfish trade; an NTNU campus with about 1,800 students; the Aksla viewpoint)
    howItWorks:
      "Ålesund is a town of Møre og Romsdal county in Norway with a municipal population of about 59,800 in Q2 2026 over about 29 km²; its urban area (tettsted) held 56,763 on 1 January 2026, the tenth-largest in the country, spread across linked islands with the harbour running through the middle; Norwegian municipalities run schools, childcare and planning, the counties upper secondary schools and local transport, hospitals belong to state health enterprises and policing to the state. Its present appearance came from a fire: on 23 January 1904 the wooden town burned, one person died and more than ten thousand lost their homes, and Kaiser Wilhelm II, a frequent visitor to this coast, sent four warships with materials for temporary shelter. Between 1904 and 1907 some fifty architects and builders trained across Europe rebuilt the whole town in stone and brick in the Jugendstil of the day, which is why Ålesund has an Art Nouveau centre of a completeness rare in northern Europe, the subject of the Jugendstilsenteret museum. It is one of Norway's largest fishing ports, the clipfish trade its old business, and NTNU has a campus here with about 1,800 students. The Aksla viewpoint is reached by 418 steps. Newcomers most often go wrong by expecting the Geiranger fjord next door, when it is hours away by road or boat.",
    layout:
      "Ålesund is built on several islands connected by bridges, the centre straddling an inner harbour canal, Art Nouveau stone buildings side by side. The town's Aksla hill has 418 steps (or a road) up to a viewpoint over the city, the islands and the distant snow peaks of Sunnmøre. East, the town is the gateway to the Geirangerfjord.",
    gettingAround:
      "Vigra Airport (AES) is on an island north of the city, with an airport bus over the bridges into town. The centre is walkable, and ferries and fast boats reach the surrounding islands and fjords. The climate is west-coast maritime — wet, windy and mild in winter.",
    culture:
      "Norwegian (the Sunnmøre dialect), with widespread English. The town is closely tied to the seafood industry. It is proud of its Art Nouveau heritage, with a dedicated Art Nouveau Centre telling the story of the fire and the rebuilding. Restaurants do not require tipping.",
    seeAndDo:
      "An Art Nouveau walk through the centre, and the Art Nouveau Centre (Jugendstilsenteret, in a preserved old pharmacy); the Aksla viewpoint for sunset over the islands; a boat to the Geirangerfjord (a World Heritage Site, the Seven Sisters waterfall, the Eagle Road); the Atlantic Road (a road winding between rocks and islets) on Averøy; the mountaineering town of Rønndal.",
    whenAndTips:
      "May–September is best, and Geirangerfjord cruises run from late April to October. Ålesund is often the start of a west-coast driving loop (the Atlantic Road + Geiranger + the Trollstigen hairpin road); the mountain roads only open in May and may close in October. It is wet — bring a waterproof.",
  },

  trondheim: {
    // identity sources: 特隆赫姆 kommune 2026 年二季度 **218,787**，**按市镇人口计为全国第三大市镇**（成立）；
    //   tettsted 2026-01-01 为 **202,397**，**在 SSB 官方城区表里列第 4** —— SSB（1 级，2026-09-08 核）。
    //   **原文把「全国第三」的名次和 tettsted 口径的数字拼在一起**，读者会以为按同一档既是第三又是 20 万。
    //   这与斯塔万格「约 36 万人的城区 + 第三大城市连绵区」是同一形状的错。
    identity:
      "Trondheim is the centre of the Trøndelag region of central Norway and with a municipal population of about 219,000 (Q2 2026, SSB) — Norway's third-largest municipality on that measure — and an urban-area (tettsted) population of about 202,000 (1 January 2026), where the Nidelva river meets the Trondheimsfjord. It was Norway's first capital and a major medieval pilgrimage destination — Nidaros Cathedral is built over the grave of King Olav II, venerated as a saint, and is the largest medieval church in northern Europe. Today it is a university and technology city.",
    // howItWorks sources: Wikipedia (2026-09): Trondheim (merged with Klæbu 2020; 218,460 Jan 2026; Trøndelag seat; Nidaros 997, capital until 1217; 1681 fire Cicignon grid; NTNU ~40,000; AtB; Værnes 35 km); Municipalities of Norway
    howItWorks:
      "Trondheim is Norway's third city and the seat of Trøndelag county, merged with Klæbu in 2020, with about 218,000 people in 2026. The municipality runs primary schools, kindergartens and planning, the county runs upper secondary schools and the transport company AtB, and the state runs hospitals, police and the university. It is Nidaros, founded in 997 by the Viking king Olav Tryggvason and Norway's capital until 1217; Nidaros Cathedral is a major medieval pilgrimage site in the Nordic countries, and the St Olav's Ways still lead here. The Nidelva loops around the centre: inside the bend lies the grid of broad streets laid out by Cicignon after the great fire of 1681, the Old Town Bridge crosses to the wooden houses of Bakklandet, and Solsiden is an old shipyard turned new quarter. NTNU, with about 40,000 students, is the country's largest university, SINTEF stands beside it, and students make up a quarter of the city. The Gråkallbanen tram is among the northernmost tramways in the world. Værnes airport lies about 35 km north-east, and the Dovre Line runs to Oslo. Addresses give street, number and four-digit postcode beginning with 70. Newcomers most often go wrong by taking Trondheim for a quiet cathedral town, when it is a technology city where a quarter of the people are students.",
    layout:
      "Trondheim's old town is in a meander loop of the Nidelva, with a row of coloured old warehouses (Bryggene) along the river. The cathedral and the Archbishop's Palace are on the south side of the loop. The centre has wide, regular streets (planned after a fire in 1681, for fire safety). The Old Town Bridge (Gamle Bybro) links the old town to Bakklandet on the east bank — an old workers' quarter of coloured wooden houses, now a café district. A 17th-century star fort stands on the edge of the city.",
    gettingAround:
      "Værnes Airport (TRD) is about 35 km east, with a train and airport bus about 35–40 minutes. The city has buses (including a 'bicycle lift' up a hill), and the old town is walkable. Trondheim is a rail hub: south to Oslo, north to Bodø (the Nordland Line, scenic). The climate is fairly northern but moderated by the fjord — snow in winter, cool summers, long daylight.",
    culture:
      "Norwegian (the Trøndelag dialect), with widespread English. The city is young and full of students thanks to NTNU. It identifies with Nidaros Cathedral and the 'first capital' history. Restaurants do not require tipping.",
    seeAndDo:
      "Nidaros Cathedral (the sculpture-covered west front, you can climb the tower; also the end of the St Olav pilgrimage route) and the Archbishop's Palace Museum; the Old Town Bridge and the coloured wooden houses and cafés of Bakklandet; the old warehouses along the river; Kristiansten Fortress for the city view; the Rockheim popular-music museum; a boat to the Munkholmen islet.",
    whenAndTips:
      "June–August is the most comfortable, with very long daylight. In late July the St Olav Festival has a medieval market and concerts. The Nordland Line north (to Bodø, crossing the Arctic Circle) is a classic scenic ride. The city is small — two or three days is enough — and is often a stop on the way north to Lofoten or west to the fjords.",
  },

  bodo: {
    // identity sources: 挪威统计局（SSB）只发布两档口径：**kommune（市镇）** 与 **tettsted（城区/建成区）**，
    //   **没有「市区」这个官方称谓**。kommune 按季度发布（Q1 约 5 月中、Q2 约 8 月中、Q3 约 11 月中下旬、
    //   跨年 1 月 1 日基准数约次年 2 月中）；tettsted 按年、1 月 1 日基准，约当年 5 月发布（本期 2026-05-22）。
    //   2026-09-08 核。
    //   博德 kommune 2026 年二季度 **53,671**；tettsted 2025 年约 **43,500**（SSB，1 级）。
    //   原文的「约 5 万」正好卡在两档中间、又不说明是哪一档。
    identity:
      "Bodø is in northern Norway about 80 km north of the Arctic Circle, the capital of Nordland county and the end of the northern railway, with a municipal population of about 54,000 (Q2 2026, SSB; the urban area, tettsted, about 43,000 in 2025). The city was bombed flat in the Second World War and rebuilt afterwards, so it looks fairly modern. It is the gateway to the Lofoten Islands, and just outside town is one of the strongest tidal maelstroms in the world, the Saltstraumen. In 2024 it was a European Capital of Culture.",
    // howItWorks sources: 人口：挪威统计局表 01222，Bodø kommune 2026 Q2 = 53,671（2026-08-19 更新）；城区 tettsted 表 14216 代码 7501，2026-01-01 = 43,446（2024/2025 分别 43,322 / 43,504）。kommune 按季度发布（Q1 五月中 / Q2 八月中 / Q3 十一月中下旬），tettsted 每年五月。改这一段的起因是同条目 identity 段已更新、howItWorks 段落后两年。
    howItWorks:
      "Bodø is the capital of Nordland county in Norway with 53,671 people in the municipality at the end of Q2 2026 over about 1,395 km², about 43,400 in the urban area (tettsted) as of January 2026, standing just north of the Arctic Circle; Norwegian municipalities run schools, childcare and planning, the counties upper secondary schools and local transport, hospitals belong to state health enterprises and policing to the state. It is the transport knot of northern Norway: the Nordland railway ends here and there is no track further north, only road, ship or aircraft; the coastal express calls here and the ferries to the Lofoten islands leave from this port. German bombing in May 1940 destroyed nearly the whole town, so today's centre is a post-war rebuilding with no old quarter. The airport sits against the town and was long one of the main Norwegian air force bases, its role reduced after the F-16s were retired in January 2022, with plans under way to move the runway. About 30 km out, Saltstraumen is among the strongest tidal currents in the world at speeds reaching 22 knots, its whirlpools visible from the bridge on the turn of the tide. The sun does not set from 1 to 13 June, and in 2024 the city was European Capital of Culture. Newcomers most often go wrong by coming to Bodø for the northern lights, when it is more a place of transfer, onward north and out to the islands.",
    layout:
      "Bodø is built on the tip of a peninsula reaching into the sea, water on three sides, mountains behind. The centre is compact, focused on the station and the harbour. South of the city, the Saltstraumen is a narrow channel where, four times a day at the turn of the tide, hundreds of millions of cubic metres of water force through, forming huge whirlpools and rapids. Around the city are the typical sharp granite peaks of Nordland.",
    gettingAround:
      "Bodø Airport (BOO) is right by the centre (walkable) and is a northern air hub. The train to Trondheim is about 10 hours (the Nordland Line, crossing the Arctic Circle). Ferries and fast boats go to Lofoten (about 3.5 hours by car ferry to Moskenes). The climate is maritime, moderated by the warm current despite being inside the Arctic Circle: milder in winter than the latitude suggests, but windy with rain and snow; the midnight sun from late May to mid-July, polar night and the aurora in winter.",
    culture:
      "Norwegian (the Nordland dialect), with widespread English. Life in the north is closely tied to the sea, the mountains and the weather, with large distances between communities. Sámi culture is more concentrated further inland. Restaurants do not require tipping.",
    seeAndDo:
      "The Saltstraumen maelstrom (check the tide table for the strongest window; from the bridge or by fast boat); the Nordland Museum and the Aviation Museum; a hike up Keiservarden for the panorama; a car ferry to the Lofoten Islands; sea fishing and puffins in summer; the aurora in winter.",
    whenAndTips:
      "May–August is good, with the midnight sun; September–March for the aurora but with poor weather and short days. To see the Saltstraumen whirlpools, go strictly by the tide table — the strongest flow is around the spring tides. The Lofoten car ferry has long queues in peak season — arrive early or reserve. Northern weather changes very fast — keep the itinerary flexible.",
  },

  narvik: {
    // identity sources: 挪威统计局（SSB）只发布两档口径：**kommune（市镇）** 与 **tettsted（城区/建成区）**，
    //   **没有「市区」这个官方称谓**。kommune 按季度发布（Q1 约 5 月中、Q2 约 8 月中、Q3 约 11 月中下旬、
    //   跨年 1 月 1 日基准数约次年 2 月中）；tettsted 按年、1 月 1 日基准，约当年 5 月发布（本期 2026-05-22）。
    //   2026-09-08 核。
    //   纳尔维克 tettsted 2025 年 **14,092–14,200**；kommune 2026 年二季度 **21,651**
    //   （2020 年与巴朗恩、部分蒂斯菲尤尔合并后）—— SSB（1 级）。
    //   **两个数字都是对的，错在没说是两档不同口径。**
    identity:
      "Narvik is in northern Norway at the end of a deep fjord (the Ofotfjord), north of the Arctic Circle, with an urban-area (tettsted) population of about 14,200 (2025, SSB) and a municipal (kommune) population of about 21,700 (Q2 2026) — the municipality having absorbed Ballangen and part of Tysfjord in 2020. It exists almost entirely because of a railway: in the late 19th century, to ship iron ore from Kiruna in Sweden to an ice-free deep-water port, the cross-border Ofoten Line was built, and Narvik grew up as its terminus. The town is hemmed in by high mountains, and there was fierce mountain and naval fighting here early in the Second World War.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Narvik (Norway; town and municipality in Nordland county inside the Arctic Circle on the Ofotfjord, 21,580 residents in 2024, 61st among Norwegian municipalities; separated from Ankenes in 1902; developed as an all-year ice-free port for the Swedish iron mines at Kiruna and Gällivare, its deep harbour kept open by the Gulf Stream, with the Ofoten railway to Sweden; strategically critical in the Second World War, the Allies capturing it briefly in May 1940 in what is considered the first Allied infantry victory of the war before withdrawing in June; the Narvik War Museum; the Narvikfjellet alpine facility, host of the 2029 FIS Alpine World Ski Championships; merged with Ballangen and part of Tysfjord in 2020)
    howItWorks:
      "Narvik is a town and municipality of Nordland county in Norway, inside the Arctic Circle at the head of the Ofotfjord, with 21,580 residents in 2024; Norwegian municipalities run schools, childcare and planning, the counties upper secondary schools and local transport, hospitals belong to state health enterprises and policing to the state. The town exists for one reason: the Gulf Stream keeps this deep harbour ice-free all year, while the iron ore of Kiruna and Gällivare in Sweden cannot leave by the Gulf of Bothnia in winter, so the Ofoten railway opened in 1902, the ore has been shipped from here ever since, and the town separated from Ankenes municipality in that same year. Being an ore port made it a focus of the Second World War: Allied forces briefly took the town in May 1940, counted as the first Allied infantry victory of the war, and withdrew in June as the wider war turned; the war museum tells that history. In 2020 it merged with Ballangen and part of Tysfjord and grew much larger in area. The Narvikfjellet cable car runs to the summit and the Alpine World Ski Championships come here in 2029; the local airport closed in 2017 and flights moved to Evenes. Newcomers most often go wrong by assuming the mines are in Norway, when they are in Sweden and Narvik is their way to sea.",
    layout:
      "Narvik is built on a steep slope on the north shore of the fjord, with the railway and the ore-loading quays at the water and the town on the hillside. Sharp snow mountains rise across and behind the fjord, and the town's Narvikfjellet mountain has a cable car — in winter you can ski from the top down to near sea level with the fjord in view. East, the railway and road climb over the mountains into Sweden.",
    gettingAround:
      "Narvik has no large airport nearby (Harstad/Narvik Airport, EVE, is about 1.5 hours away by road, with an airport bus). The Ofoten Line runs east to Kiruna and Abisko in Sweden (a stretch rated a world-class scenic railway) and connects to the Swedish network. There are buses and ferries/coaches toward Lofoten. The climate is Arctic mountain-maritime: snowy, with polar night and the aurora in winter.",
    culture:
      "Norwegian, with widespread English; being close to Sweden, Swedish is also often heard. The town is closely tied to the railway, the ore and the Second World War, with a dedicated war museum (a sombre subject) and a railway workers' museum. Restaurants do not require tipping.",
    seeAndDo:
      "Ride the Ofoten Line toward Abisko for the fjord, snow mountains and ore trains (a day trip is possible); the Narvikfjellet cable car for the fjord panorama (skiing in winter, hiking in summer); the Narvik War Museum and the war sites around Ankenes; boat or car trips to the surrounding fjords; using Narvik as a stepping stone to Lofoten or Swedish Lapland.",
    whenAndTips:
      "June–August has the midnight sun, with all mountain roads and trails open; December–January is polar night, and February–March is best for the aurora and skiing. The cable car and the railway views depend heavily on the weather. EVE airport is a 1.5-hour drive — plan the transfer. In winter, do mountain activities with a local guide and watch the avalanche forecast.",
  },

  tromso: {
    // identity sources: 特罗姆瑟 kommune 2026 年二季度 **79,932**（SSB，1 级，2026-09-08 核）。
    //   **原文的「都会区约 7.7 万」在任何官方口径下都不对**：SSB 自 2013 年起把特罗姆瑟的建成区拆成三个
    //   独立城区（Tromsø / Tromsdalen / Kvaløysletta），特罗姆瑟岛本体 2026-01-01 为 43,835，三者合计约 7.05 万。
    //   「北极挪威人口最多」按 kommune 成立（远超博德 53,671、阿尔塔 22,155、纳尔维克 21,651）；
    //   **有意思的是按最窄的单一城区口径，特罗姆瑟 2026 年才首次反超博德**（43,835 vs 43,446，NRK 称
    //   「自 2012 年以来首次」）—— 同一个「谁更大」的问题，换一档口径答案就不同。
    identity:
      "Tromsø is in northern Norway about 350 km north of the Arctic Circle, the most populous municipality in Arctic Norway (about 80,000, Q2 2026, SSB), on a small island in a fjord. Historically it was the departure port for Arctic exploration and hunting, and it is called the 'Paris of the North', with one of the world's northernmost universities, cathedrals, botanic gardens and breweries. It is one of the most convenient cities for seeing the northern lights and the midnight sun.",
    // howItWorks sources: Wikipedia (2026-09): Tromsø (~2,520 km²; ~80,000 2024; Troms capital; Tromsøya island, bridge 1960, tunnel to Kvaløya; UiT 1968; midnight sun 19 May–27 July; polar night late Nov–mid Jan; Langnes airport; buses only); Municipalities of Norway
    howItWorks:
      "Tromsø is the largest city in Norway north of the Arctic Circle and the seat of Troms county; the municipality covers about 2,520 km², most of it mountain and island, with about 80,000 people in Q2 2026. The municipality runs primary schools, kindergartens and planning, the county runs upper secondary schools and buses, and the state runs hospitals, police and the university. The centre lies on the island of Tromsøya, joined by the Tromsø Bridge of 1960 to Tromsdalen and the Arctic Cathedral on the mainland and by an undersea tunnel to Kvaløya to the west, with the wooden houses of the centre mostly built between 1789 and 1904. The University of Tromsø founded in 1968, the 'Arctic University', and the University Hospital of North Norway make it the educational and medical centre of the whole north and a base for polar research. The sun does not set from 19 May to 27 July, the polar night lasts from late November to mid-January, the winter aurora is the largest tourist industry, and the Hurtigruten ships call here. Sámi history and present-day life are part of the city. Public transport is buses only, and Langnes airport lies on the island itself. Addresses give street, number and four-digit postcode beginning with 90. Newcomers most often go wrong by picturing Tromsø as a polar outpost, when it is a northern capital of 80,000 with a university and a hospital.",
    layout:
      "Tromsø's old town is on the east side of Tromsø Island, wooden houses and shops along the shore, with a long bridge and a subsea tunnel to the mainland side. On the mainland side a cable car (Fjellheisen) goes up in a few minutes to 420 m for a panorama of the city, fjord and mountains. The landmark 'Arctic Cathedral' is actually a modern triangular church on the mainland side. Around the city are sharp snow peaks and fjords.",
    gettingAround:
      "Langnes Airport (TOS) is on the west side of Tromsø Island, with an airport bus about 15 minutes to the centre. The city has buses, and the old town is walkable. Long-distance coaches and the Hurtigruten coastal ships go north to Alta and south to Narvik. The climate is maritime, strongly moderated by the warm current: winters far milder than the latitude (often around 0°C) but windy and snowy; polar night from late November to mid-January, the midnight sun from mid-May to mid-July.",
    culture:
      "Norwegian, with Northern Sámi also official in this area and seen on signs; widespread English. The city is international and young thanks to the university and Arctic research. The Sámi (Sápmi) have traditionally herded reindeer around Tromsø and further inland, and the city has exhibits on Sámi culture. Restaurants do not require tipping.",
    seeAndDo:
      "The Fjellheisen cable car for the panorama (open in the evenings in aurora season); the Arctic Cathedral; the Polaria aquarium and the Tromsø University Museum (Sámi culture, aurora science); the world's northernmost brewery; in winter, aurora tours (chasing clear skies inland), dog sledding, a reindeer camp; in summer, midnight-sun hikes and whale watching (the whale season is in the colder months, in the fjords nearby).",
    whenAndTips:
      "For the aurora: late September–March — allow at least 3–4 nights and go with a mobile guide chasing clear skies. For the midnight sun and hiking: late May–July. During the polar night (about late November–mid-January) the sun stays below the horizon, but there are a few hours of blue light around midday. Winter roads ice over — bring proper gear. Prices are high even for Norway.",
  },

  alta: {
    // identity sources: 挪威统计局（SSB）只发布两档口径：**kommune（市镇）** 与 **tettsted（城区/建成区）**，
    //   **没有「市区」这个官方称谓**。kommune 按季度发布（Q1 约 5 月中、Q2 约 8 月中、Q3 约 11 月中下旬、
    //   跨年 1 月 1 日基准数约次年 2 月中）；tettsted 按年、1 月 1 日基准，约当年 5 月发布（本期 2026-05-22）。
    //   2026-09-08 核。
    //   阿尔塔 tettsted 约 **15,484**（2025）；kommune 2026 年二季度 **22,155**（SSB，1 级）。
    //   **两个数字都是对的，错在没说是两档不同口径** —— 与纳尔维克同一形状。
    identity:
      "Alta is in Norway's northernmost county, Finnmark (Northern Sámi: Finnmárku), at the end of a fjord where the Alta river reaches the sea, with an urban-area (tettsted) population of about 15,500 (2025, SSB) and a municipal population of about 22,200 (Q2 2026) — the most populous municipality in Finnmark. Outside the town, a group of rock carvings records the life of local hunting, fishing and reindeer peoples from about 7,000 to 2,000 years ago; inscribed as a World Heritage Site in 1985, it is one of the largest concentrations of prehistoric hunter-gatherer rock art in Northern Europe. The Finnmark plateau (Finnmarksvidda / Finnmárkkoduottar) has long been an area where the Sámi herd reindeer.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Alta (Norway; the largest populated municipality in Finnmark county at 3,849 km² with about 21,708 residents in 2025, 59th most populous in Norway, up 9.5 per cent over the previous decade; just below the 70th parallel, the northernmost settlement of urban significance in the European Economic Area; the Rock Art of Alta, roughly 7000–500 BC, UNESCO World Heritage; the town badly damaged by fire in the Second World War and rebuilt; the Northern Lights Cathedral completed 2013; the Sautso canyon on the Altaelva among the largest in Europe; slate quarrying, education and aurora tourism; midnight sun 18 May–27 July, polar night 26 November–16 January; Alta Airport)
    howItWorks:
      "Alta is the largest populated municipality in Finnmark county in Norway, about 3,849 km² with some 21,700 residents in 2025, up about 9.5 per cent over the previous decade; Norwegian municipalities run schools, childcare and planning, the counties upper secondary schools and local transport, hospitals belong to state health enterprises and policing to the state. It lies just below the 70th parallel as the northernmost settlement of urban significance in the European Economic Area. The rock art outside town was carved roughly between 7000 and 500 BC and was inscribed as World Heritage in 1985, Norway's only prehistoric site on the list, with the museum built on the coastal slope where the carvings are. Fire destroyed much of the town at the end of the Second World War and it was rebuilt, so the centre is modern; the Northern Lights Cathedral completed in 2013 is the new landmark. The Sautso canyon cut by the Altaelva is among the largest in Europe, and a hydroelectric station was built on the river around the early 1980s. Slate quarrying, education and aurora tourism are the local industries; the sun does not set from 18 May to 27 July and does not rise from 26 November to 16 January. Newcomers most often go wrong by expecting no forest at this latitude, when the warm current lets birch and pine grow in stands here.",
    layout:
      "Alta is spread across the head of the fjord and several river valleys, with some distance between its centres (Bossekop, Elvebakken, Bukta). The landmark modern building is the 'Northern Lights Cathedral', a spiral of titanium panels. South of the town is the canyon the Alta river has cut (one of the largest in northern Europe) and the road up to the interior Finnmark plateau — dwarf birch, lakes and reindeer.",
    gettingAround:
      "Alta Airport (ALF) is near the centre, with buses. The town is spread out and most people drive. The E6 road, and roads inland to Karasjok and Kautokeino (centres of Sámi culture), branch here. The climate is inland Arctic: colder and drier than coastal Tromsø, with many clear days in winter — it is billed as one of the most reliable aurora spots in the Nordic countries — with polar night and the midnight sun.",
    culture:
      "Norwegian and Northern Sámi are both official, with bilingual signs; widespread English. Alta and its surroundings are a core area of Sámi culture, where reindeer herding is a continuing, widely documented form of land use, and reindeer cross the roads on the spring and autumn migrations. Restaurants do not require tipping.",
    seeAndDo:
      "The Alta rock carvings and the World Heritage Rock Art Museum (boardwalks past deer, boats and people carved into the rock); the Northern Lights Cathedral; in winter, the ice hotel (Sorrisniva, rebuilt each year) and aurora tours and dog sledding; hiking the Alta canyon; inland to Kautokeino and Karasjok to learn about Sámi culture (Sámi festivals and reindeer races around Easter).",
    whenAndTips:
      "For the aurora: late September–March; inland Alta has a high chance of clear skies and is often used as an aurora base. For the midnight sun: mid-May–July. Winter is very cold (often below −20°C) — prepare for extreme cold. When driving in spring and autumn, watch for migrating reindeer herds — slow down and do not sound the horn. Parts of the rock-art museum's boardwalk close for snow in winter.",
  },
  svolvaer: {
    // 全七段 sources: 同中文侧（SSB tables 01222, 04859 and 01182, tier 1; Local Government Act, tier 1; Store norske leksikon, tier 2; Lovdata regulation FOR-2007-12-11-1814, tier 1; Entur journey planner 2026-09-17, tier 1; Visit Norway, tier 1; distances computed）。 核实 2026-09-16 当批（content-verifier 独立检索，本条 ok；公交 300 路线路名来自 Entur 数据）。
    identity:
      "Svolvær is the main town of the Lofoten Islands in northern Norway and the administrative centre of Vågan municipality in Nordland County, with about 4,900 people in the urban settlement and about 9,900 in the whole municipality on 1 January 2026 (Statistics Norway). The town is squeezed around a harbour on the south shore of Austvågøya with steep peaks behind it, and during the Lofoten cod fishery each year from February to April it is one of the main fishing ports.",
    howItWorks:
      "Svolvær has no government of its own: it is the administrative centre of Vågan municipality, whose council has 29 seats, with the mayor chosen by the council from its executive committee and a chief executive appointed by the council; upper secondary schools, buses and express boats belong to Nordland County. More importantly, 'Lofoten' itself is not an administrative unit but an archipelago of six municipalities — Vågan, Vestvågøy, Flakstad, Moskenes, Værøy and Røst — that exists only as a court district and a deanery. The centre of town is the ring around the harbour: the express-boat quay, the coastal express quay, the square and the artists' centre are all packed along the water, and the whole urban settlement covers just 2.35 km². Life follows the cod, with late winter and early spring the season for fishing and drying stockfish. Newcomers often assume Lofoten can only be reached by boat, when since 2007 the E10 road has run from the mainland to Å at the southern end of the islands without a ferry, though there is no railway; many also imagine Lofoten is a single town.",
    layout:
      "The centre is the square by the harbour, where express boats and the coastal express berth; the island of Svinøya, with its old fishermen's cabins, is linked to the centre by a bridge, and behind the town rise the Svolværgeita pinnacle and Fløya. About 4 km west in a straight line is Kabelvåg, with Vågan Church and the Lofoten Aquarium, and about 17 km south-west is the fishing village of Henningsvær. The airport is north-east of town.",
    gettingAround:
      "Svolvær Airport, Helle (SVJ), about 4.5 km from the centre in a straight line, has scheduled flights to Bodø; long-haul travellers usually come through Evenes Airport, about 3 hours away by airport bus. The express boat from Bodø takes about 3.5 hours, and the coastal express calls here too. The E10 road links the islands with the mainland, and bus 300 runs through the islands between Narvik and Å. There is no railway on the islands, so driving is easiest.",
    culture:
      "Norwegian is spoken, and English is widely used in tourism. Stockfish from Lofoten is protected as a geographical indication and must be dried naturally on wooden racks in Lofoten; in late spring and early summer you can see rows of drying racks. Tipping is generally not common in Norway, though in bars and restaurants people tip when pleased, and it is entirely up to you; cards are accepted almost everywhere, and tap water is safe to drink.",
    seeAndDo:
      "The harbour square and the old fishermen's cabins on Svinøya; the North Norwegian Artists' Centre; a hike up Fløya for views over the islands; Vågan Church and the Lofoten Aquarium in Kabelvåg; the fishing village of Henningsvær; and the drying racks and stockfish.",
    whenAndTips:
      "June–August brings the midnight sun and the best hiking; February–April is the cod season; in winter you can see the northern lights, but the weather is changeable and the days very short. Mountain trails are steep, so don't go up in bad weather; boat and bus timetables change with the seasons, so check the operators' schedules before travelling.",
  },
  roros: {
    // 全七段 sources: 同中文侧（SSB tables 01222, 04859 and 01182, tier 1; Local Government Act, tier 1; Sámi Parliament, tier 1; UNESCO 55, tier 1; Røros Museum, tier 1; rorosmartnan.no, tier 1; Store norske leksikon, tier 2; Entur 2026-09-17, tier 1; Visit Norway, tier 1; distances computed）。 核实 2026-09-16 当批（content-verifier 独立检索，奥拉夫矿距离两个坐标源相差约 2 km，改为「十几公里外」，其余 ok）。
    identity:
      "Røros is a mining town on the plateau in the south-east of Trøndelag County, Norway, whose municipality's official name, 'Røros – Rosse', pairs Norwegian with South Sámi; on 1 January 2026 the urban settlement had about 3,900 people and the whole municipality about 5,600 (Statistics Norway). Copper was found here in 1644 and the mining town, built entirely of wood, was founded in 1646; 'Røros Mining Town and the Circumference' was inscribed on the World Heritage list in 1980 and extended in 2010.",
    howItWorks:
      "Røros is governed by a 27-seat municipal council, with the mayor chosen by the council and a chief executive appointed by it; upper secondary schools and local transport belong to Trøndelag County; and the municipality is part of the Sámi language administrative area, so residents can deal with public bodies in Sámi. The World Heritage site is far bigger than the town: it is made up of three parts within the privilege area granted to the copper works by the king in 1646 — the mining town and its surrounding cultural landscape, the distant Femundshytta smelter site, and the winter transport route along lakes and rivers — covering about 16,500 hectares. The centre is the mining town itself, with the smelting house and slag heaps at one end, the church at the other and rows of wooden houses along two main streets between them, and the railway station right beside the old town. The whole municipality lies above 615 m, cold and remote, and historically travel depended on winter ice and snow. Newcomers often assume winter is the off-season, when the famous Røros market is held in February, because ice and snow once made for the best transport; many also think copper is still mined here, when mining ended in 1977.",
    layout:
      "The old town lies east of the railway station, with Kjerkgata and Bergmannsgata running up in parallel, Røros Church at the top of Kjerkgata and the smelting-house museum and slag heaps by the river on the north-east side of the old town; the airport is a short way west of town. A little over 10 km north-east is the Olav mine, and far to the south-east is the Femundshytta smelter site.",
    gettingAround:
      "Røros Airport (RRS), about 2.2 km from the centre in a straight line, has scheduled flights to Oslo. Direct trains from Trondheim take about 2 hours 35 minutes; from Oslo the train takes about 5 hours with a change at Hamar. The old town is walkable, and the Olav mine and Femundshytta need a car.",
    culture:
      "Norwegian is spoken, and English is widely used in tourism. The Røros market is held every year in late February, first held in 1854, and is still the town's busiest time. Tipping is generally not common in Norway, though in bars and restaurants people tip when pleased, and it is entirely up to you; cards are accepted almost everywhere, and tap water is safe to drink.",
    seeAndDo:
      "The wooden streets of the old town; Røros Church, completed in 1784; the smelting-house museum (World Heritage centre) and slag heaps; a guided tour of the Olav mine; the Røros market in February; and sledding and cross-country skiing in winter.",
    whenAndTips:
      "June–August is the most comfortable; winters are severe with long snow cover, and accommodation fills up during the February market, so book ahead. The mine is cold all year, so bring warm clothes; museum and mine opening times are as announced by the operators.",
  },
};
