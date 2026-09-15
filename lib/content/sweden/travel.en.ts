import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Sweden ============
  "sweden-overview": {
    // identity sources: SCB Population statistics 2025：2025-12-31 登记人口（folkbokförd befolkning）10,605,529 人。https://www.scb.se/en/finding-statistics/statistics-by-subject-area/population-and-living-conditions/population-composition-and-development/population-statistics/pong/statistical-news/population-statistics-year-2025-publish-1/
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Sweden sits on the eastern side of the Scandinavian Peninsula in Northern Europe, covering about 450,000 km² — the largest country in the Nordic region — with a registered population of about 10.61 million at the end of 2025 (Statistics Sweden). It spans an enormous range of latitude, from the Skåne Plain in the far south to Arctic Lapland in the far north, with correspondingly dramatic differences in landform and climate.",
    layout:
      "Sweden can be divided roughly into: Svealand (Stockholm and its surroundings, the political and economic centre), Götaland (Gothenburg, Malmö and the island of Gotland, the southern coastal and farming region), and Norrland (Kiruna and Luleå, the northern forest and Lapland mountain region, covering about two-thirds of the country's area but sparsely populated).",
    gettingAround:
      "Stockholm Arlanda Airport is the main international gateway; domestic flights are hubbed through Stockholm across more than 80 routes nationwide, and the rail network also covers the main cities, though a north-south journey across the country can take anywhere from several hours to over ten. Driving is on the right. The climate transitions from temperate continental in the south to subarctic in the north; Lapland in the far north has long, severe winters with midnight sun in summer, while the south is comparatively mild. Restaurant bills typically already include service, with no extra tip required. The voltage is 230V with EU-style two-round-pin plugs.",
    culture:
      "The official language is Swedish, and English proficiency is extremely high. Swedes value equality, simplicity and the philosophy of \"lagom\" (just the right amount), and society places strong emphasis on environmental protection and gender equality. Northern Lapland is the traditional homeland of the Indigenous Sámi people, and reindeer-herding culture continues there today. Anything stronger than low-alcohol beer can only be bought at the state-run Systembolaget shops, which keep limited hours and are usually closed on Sundays — ordinary supermarkets sell only low-alcohol drinks. Restaurant bills typically don't require a tip; rounding up is fine.",
    seeAndDo:
      "Natural landforms: Kebnekaise and Sarek National Park, the High Coast (a World Heritage Site), Lapporten, the Stockholm Archipelago, the medieval town of Visby on Gotland (a World Heritage Site). Heritage and culture: Stockholm's Old Town and the Vasa Museum, Uppsala Cathedral, the naval city of Karlskrona (a World Heritage Site). Polar experiences: the northern lights and the Ice Hotel at Kiruna.",
    whenAndTips:
      "June–August is peak season in the south, and in Lapland to the north June–July brings the midnight sun while December–January brings the northern lights; for a trip spanning north and south, domestic flights are the practical way to connect the two, while rail suits deeper regional exploration.",
  },
  stockholm: {
    // identity sources: 瑞典统计局（SCB）市镇（kommun）年末登记人口：斯德哥尔摩市 999,200（2025-12-31）；斯德哥尔摩省约 2,486,300—2,488,902。
    //   **发布节奏**：年度汇总新闻稿于次年 **2 月下旬**发布（2025 年数据 2026-02-24 发布）。核实日 2026-09-08。
    //   **瑞典有三档并存口径，混用是这一批最大的坑**：kommun（市镇，含乡村）／tätort（城区/建成区，SCB 每 2—3 年发布一次，最近一期是 2023 年数据、2024-11-28 发布、下一期预计 2026-11-26）／storstadsområde 或 län（都会区/省）。写哪一档必须点名。
    identity:
      "Stockholm is Sweden's capital and largest city, with a population of about 1 million (end of 2025; about 2.49 million across Stockholm County), sitting where Lake Mälaren meets the Baltic Sea, spread across 14 main islands, and an important Nordic centre for politics, business and design.",
    // howItWorks sources: **瑞典的官方人口口径**（SCB，2026-09-09 核）：`kommun`（市镇年末登记人口，含郊区与乡村，**每年 12-31 基准、次年 2 月下旬发布**）· `tätort`（城区/建成区，**每 2–3 年一期**，最近一期 2023 年数据、2024-11-28 发布，下一期预计 2026-11-26）· `län` / `Region`（省 / 大区）。**没有统一官方定义的「都会区」**，但部分是有法人地位的市镇联合体（如 Göteborgsregionen），可具名引用并附该机构自己的数字。三档能差好几倍（卡尔马市镇约 7.3 万 vs 城区 4.26 万），**写哪一档必须点名**。
    //   斯德哥尔摩大区 2025 年末约 249 万（SCB，级别 1）。
    //   https://www.scb.se/pressmeddelande/lagsta-folkokningen-pa-25-ar/
    howItWorks:
      "The Stockholm people speak of is, administratively, only Stockholm Municipality of about 188 km², with about a million people in 2025, governed by a council whose mayor, the finance commissioner, is chosen by the majority; it is divided into eleven districts (merged from fourteen in 2023), each with a committee running primary schools, social services and culture. Swedish municipalities run schools, elder care and planning, the 21 regions run hospitals and public transport, and the state runs police and universities: Region Stockholm had 26 municipalities and about 2.49 million people at the end of 2025, SL's network covers the whole region, and Solna, Nacka and Sundbyberg are municipalities of their own. The city stands on fourteen islands where Lake Mälaren meets the Baltic, three-tenths water and three-tenths green: Gamla Stan on the central island, Södermalm, Östermalm, Kungsholmen and Norrmalm as the quarters of the inner city, Djurgården as the museum island, and beyond the inner city the post-war suburbs of Söderort and Västerort. Three metro lines, commuter trains and buses run on one SL card, and Arlanda airport lies about 40 km north. Addresses give street, number and five-digit postcode. Newcomers most often go wrong by taking Stockholm Municipality for the whole city, when it holds only four in ten of the region's people.",
    layout:
      "The old town, Gamla Stan, occupies the central island, preserving a medieval street layout with the Royal Palace and the cathedral nearby; districts such as Södermalm, Norrmalm and Kungsholmen are linked by numerous bridges, with the Stockholm Archipelago extending out to the east.",
    gettingAround:
      "Arlanda Airport is about 40 km from the centre, with a direct express train. The city has an extensive metro network (often called \"the world's longest art gallery\"), and buses and walking are also good options. The climate is temperate continental, cold and snowy in winter, cool in summer.",
    culture:
      "The official language is Swedish, and English proficiency is extremely high. Stockholm is the birthplace of Swedish design brands such as IKEA and H&M, and the site of the Nobel Prize ceremony. \"Fika\" (a coffee-break social ritual) is an important Swedish tradition. Restaurant bills typically already include service.",
    seeAndDo:
      "Gamla Stan old town and the Royal Palace; the Vasa Museum (displaying a fully recovered 17th-century warship); City Hall (venue of the Nobel banquet); Skansen open-air museum. A boat trip out into the Stockholm Archipelago nearby.",
    whenAndTips:
      "June–August is the most pleasant season with the longest daylight; a boat trip through the Stockholm Archipelago is a classic summer way to experience the natural scenery around the city — worth setting aside at least half a day.",
  },
  uppsala: {
    // identity sources: **瑞典的官方人口口径**（SCB，2026-09-09 核）：`kommun`（市镇年末登记人口，含郊区与乡村，**每年 12-31 基准、次年 2 月下旬发布**）· `tätort`（城区/建成区，**每 2–3 年一期**，最近一期 2023 年数据、2024-11-28 发布，下一期预计 2026-11-26）· `län` / `Region`（省 / 大区）。**没有统一官方定义的「都会区」**，但部分是有法人地位的市镇联合体（如 Göteborgsregionen），可具名引用并附该机构自己的数字。三档能差好几倍（卡尔马市镇约 7.3 万 vs 城区 4.26 万），**写哪一档必须点名**。
    //   乌普萨拉城区（tätort）174,982（2023 年，SCB 2024-11-28 发布），全国第四大城区（斯德哥尔摩 1,652,895 > 哥德堡 674,529 > 马尔默 339,316 > 乌普萨拉）。级别 1，2026-09-09 核。
    //   https://www.scb.se/pressmeddelande/fler-bor-i-stora-tatorter-men-regionala-skillnader/
    //   原文引的是 2019 年的 177,074，**落后一期**；tätort 每 2–3 年一期，下一期（2025 年数据）预计 2026-11-26。
    identity:
      "Uppsala is Sweden's oldest university town, with an urban-area (tätort) population of about 175,000 (2023), about 70 km north of Stockholm; Uppsala University, founded in 1477, is the oldest university in the Nordic region.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Uppsala (Sweden; fourth-largest urban area, 177,074 in 2019; 71 km north of Stockholm; seat of the Archbishop of Sweden since 1164, cathedral inaugurated 1435, the largest in Scandinavia at about 119 m; Uppsala University 1477, the oldest centre of higher education in Scandinavia, Celsius and Linnaeus; Fyris river divides old west from modern east; Central Station ~45,000 passengers a day; Gamla Uppsala mounds 5 km north; Arlanda ~30 km)
    howItWorks:
      "Uppsala is Sweden's fourth-largest urban area with about 175,000 people in 2023, 71 km north of Stockholm, governed by an elected council; Swedish municipalities run schools, elder care and planning, the regions hospitals and public transport, and the state police and universities. The city has two identities: since 1164 it has been the seat of the Archbishop of Sweden, and the cathedral inaugurated in 1435, about 119 m tall, is the largest in Scandinavia and remains the centre of the Church of Sweden; Uppsala University, founded in 1477, is the oldest centre of higher education in the Nordic countries, where Celsius of the temperature scale and Linnaeus of taxonomy both taught, and the student nations and the celebrations of 30 April set the city's rhythm. The Fyris divides the city: the cathedral and castle stand in the old town on the west bank, the station and the modern quarters on the east; the royal mounds of Gamla Uppsala lie 5 km north as a pre-Christian ritual centre. The central station handles about 45,000 passengers a day and Arlanda airport lies about 30 km south. Newcomers most often go wrong by taking Uppsala for a dormitory of Stockholm, when it is the seat of the Swedish church and its oldest university.",
    layout:
      "The old town is centred on Uppsala Cathedral (the tallest church building in Scandinavia), with the main university building and botanical garden nearby, and the Fyris River running through the centre.",
    gettingAround:
      "Uppsala's own airport has no scheduled passenger service; the nearest with scheduled flights is Arlanda (about 40 km); from Stockholm a direct train takes about 40 minutes. The old town is walkable, and cycling is an important part of daily local transport. The climate is temperate continental.",
    culture:
      "The official language is Swedish, with high English proficiency and a lively university-town atmosphere. Uppsala is where the botanist Carl Linnaeus lived and worked for much of his life, and the Linnaeus Garden survives today. Restaurant bills typically already include service.",
    seeAndDo:
      "Uppsala Cathedral (a former coronation site for Swedish monarchs); Uppsala Castle; the Linnaeus Garden and Linnaeus Museum; the Old Uppsala burial mounds (a Viking-age royal burial site).",
    whenAndTips:
      "May–September is the most pleasant season; it's an easy day trip from Stockholm, well suited to a half- to full-day deep dive into its history and culture.",
  },
  gothenburg: {
    // identity sources: 瑞典统计局（SCB）市镇（kommun）年末登记人口：哥德堡市 613,278（2025-12-31，当年内突破 60 万）；大哥德堡（13 市镇）约 110 万。
    //   **发布节奏**：年度汇总新闻稿于次年 **2 月下旬**发布（2025 年数据 2026-02-24 发布）。核实日 2026-09-08。
    //   **瑞典有三档并存口径，混用是这一批最大的坑**：kommun（市镇，含乡村）／tätort（城区/建成区，SCB 每 2—3 年发布一次，最近一期是 2023 年数据、2024-11-28 发布、下一期预计 2026-11-26）／storstadsområde 或 län（都会区/省）。写哪一档必须点名。
    identity:
      "Gothenburg is Sweden's second-largest city, with a population of about 613,000 (end of 2025; about 1.1 million across metropolitan Gothenburg), sitting at the mouth of the Göta River on Sweden's west coast, an important port city and gateway for exploring the Bohuslän Coast.",
    // howItWorks sources: **瑞典的官方人口口径**（SCB，2026-09-09 核）：`kommun`（市镇年末登记人口，含郊区与乡村，**每年 12-31 基准、次年 2 月下旬发布**）· `tätort`（城区/建成区，**每 2–3 年一期**，最近一期 2023 年数据、2024-11-28 发布，下一期预计 2026-11-26）· `län` / `Region`（省 / 大区）。**没有统一官方定义的「都会区」**，但部分是有法人地位的市镇联合体（如 Göteborgsregionen），可具名引用并附该机构自己的数字。三档能差好几倍（卡尔马市镇约 7.3 万 vs 城区 4.26 万），**写哪一档必须点名**。
    //   哥德堡市镇 2025 年末约 61.3 万；**「都会区」换成具名的 Göteborgsregionen（GR，13 个市镇的市镇联合体）**，GR 官方 2025 年末 1,093,760 人（级别 1）。
    //   https://goteborgsregionen.se/kunskapsbank/folkmangdigoteborgsregionen2024.5.3d3d65dc17ee36e9de7ce73.html
    //   **做法与瑞士巴塞尔三国区、大日内瓦一致**：不是官方统计口径不等于不能写，写明是谁统计的、哪一年就可核。
    howItWorks:
      "Gothenburg is Sweden's second city and the seat of Västra Götaland County; the municipality covers about 450 km² including its islands, with about 612,000 people, governed by a council. The municipality runs schools, elder care and planning, the region runs hospitals and the transport company Västtrafik, and the state runs police and universities; Göteborgsregionen, the 13-municipality federation, held about 1.09 million people at the end of 2025, with Mölndal and Partille as municipalities of their own. The Göta älv divides the city: the south bank holds the centre laid out in 1621 on the Dutch canal-city model — Inom Vallgraven, the Avenyn and the old quarter of Haga — and the island of Hisingen on the north bank holds Volvo's headquarters and the Lindholmen science park, joined by bridges and ferries. The port is the largest in the Nordic countries, the tram network the largest in Scandinavia, and the Gothenburg archipelago belongs to the municipality, reached by ferry. Chalmers and the University of Gothenburg are its two universities, and Liseberg its emblem. Gothenburg humour and deadpan jokes are a character known across the country. Addresses give street, number and five-digit postcode. Newcomers most often go wrong by taking Gothenburg for a port-industrial city, when its centre is a city of canals and boulevards.",
    layout:
      "The city centre is built around a historic canal-lined quarter, with a Dutch-inspired canal system dating from the city's 17th-century founding; the Frihamnen waterfront has been redeveloped in recent years into a cultural and leisure district.",
    gettingAround:
      "Göteborg Landvetter Airport is about 25 km from the centre, reached by bus; from Stockholm the train takes about 3 hours. The city has an extensive tram network, and walking or cycling are also good options. The climate is temperate maritime, with a rainy coast.",
    culture:
      "The official language is Swedish, with high English proficiency. Gothenburgers are known for their humour and directness and are often considered Sweden's most down-to-earth big-city residents. \"Fika\" coffee culture is equally strong here. Restaurant bills typically already include service.",
    seeAndDo:
      "Liseberg amusement park (one of the largest in Northern Europe); Gothenburg Cathedral; Feskekôrka (the \"Fish Church\" fish market); the Frihamnen waterfront cultural district. A day trip to the Koster Islands on the Bohuslän Coast nearby.",
    whenAndTips:
      "June–August is the most pleasant season; Gothenburg is an ideal gateway for exploring the skerry landforms of the Bohuslän Coast, with the Koster Islands reachable on a self-drive or guided day trip.",
  },
  malmoe: {
    // identity sources: 瑞典统计局（SCB）市镇（kommun）年末登记人口：马尔默市 367,924（2025-12-31），按市镇人口排全国第三。
    //   **发布节奏**：年度汇总新闻稿于次年 **2 月下旬**发布（2025 年数据 2026-02-24 发布）。核实日 2026-09-08。
    //   **瑞典有三档并存口径，混用是这一批最大的坑**：kommun（市镇，含乡村）／tätort（城区/建成区，SCB 每 2—3 年发布一次，最近一期是 2023 年数据、2024-11-28 发布、下一期预计 2026-11-26）／storstadsområde 或 län（都会区/省）。写哪一档必须点名。
    identity:
      "Malmö is Sweden's third-largest city, with a population of about 368,000 (end of 2025), at the very southern tip of the country, linked to Copenhagen, Denmark by the Øresund Bridge, and the core city of the Skåne Plain.",
    // howItWorks sources: 马尔默市镇 2025 年末约 37 万（SCB，kommun 口径，年末基准、次年 2 月下旬发布）。原文停在 2024 年、与同条目 identity 的 2025 年末对不上，已统一。2026-09-09 核。
    howItWorks:
      "Malmö is Sweden's third city and the seat of Skåne County; the municipality covers about 157 km² with about 368,000 people at the end of 2025, governed by a council. The municipality runs schools, elder care and planning, Region Skåne runs hospitals and the transport company Skånetrafiken, and the state runs police and universities; Stormalmö — Greater Malmö, its twelve municipalities — held about 780,000 people in 2025. The Øresund Bridge opened in 2000 joins it to Copenhagen in a cross-border metropolitan region, with trains every 30 to 40 minutes and heavy daily commuting across the border, and the City Tunnel of 2010 carries trains from the central station through Triangeln to Hyllie beneath the city. The old town centres on Stortorget and Lilla Torg, the Västra Hamnen is the old shipyard turned new district with the Turning Torso as its emblem, Möllevången is the immigrant quarter and market, and Rosengård the housing estate of the 1960s. Until 1658 the city was Danish, and the Kockums shipyard is its industrial past. About half of residents have a foreign background, from some 180 countries. The trams stopped in 1973, buses and bicycles carry the traffic, and about four in ten commutes are by bicycle. Addresses give street, number and five-digit postcode. Newcomers most often go wrong by taking Malmö for a suburb of Copenhagen, when it is the capital of southern Sweden with a university and port of its own.",
    layout:
      "The old town centre preserves a medieval street layout, with Malmö Castle and the old town square at its historic core; the Western Harbour district has been redeveloped in recent years as a sustainability showcase, home to the landmark Turning Torso tower.",
    gettingAround:
      "Malmö Airport is about 28 km from the centre; a train across the Øresund Bridge also reaches Copenhagen Airport directly (about 25 minutes). The city has an extensive network of cycle lanes, and buses and walking are also good options. The climate is temperate maritime, one of the mildest in Sweden.",
    culture:
      "The official language is Swedish, with high English proficiency and a culturally diverse population due to a high share of immigrants. Malmö and Copenhagen together form the Øresund metropolitan region, with frequent daily commuting between the two. Restaurant bills typically already include service.",
    seeAndDo:
      "Malmö Castle; the view from the Turning Torso (one of the tallest buildings in Scandinavia); the old town square; the Western Harbour sustainable district. A day trip across the Øresund Bridge to Copenhagen.",
    whenAndTips:
      "May–September is the most pleasant season; Malmö is a convenient gateway for exploring the Skåne Plain and for a cross-border day trip to Denmark via the Øresund Bridge.",
  },
  visby: {
    // identity sources: 瑞典统计局（SCB）城区（tätort）人口，最近一期为 **2023 年数据、2024-11-28 发布**：维斯比城区 26,305。
    //   **下一期（2025 年数据）预计 2026-11-26 发布，届时这一批城区数字要一起回来刷新。** 核实日 2026-09-08。
    //   **瑞典三档并存口径**：kommun（市镇，含乡村）／tätort（城区）／storstadsområde 或 län（都会区/省）——本条写的是城区。
    identity:
      "Visby is the main town on the island of Gotland, with an urban-area population of about 26,000 (2023), preserving intact medieval walls and street layout, and an important Hanseatic League trading town from the 12th century.",
    // howItWorks sources: **瑞典的官方人口口径**（SCB，2026-09-09 核）：`kommun`（市镇年末登记人口，含郊区与乡村，**每年 12-31 基准、次年 2 月下旬发布**）· `tätort`（城区/建成区，**每 2–3 年一期**，最近一期 2023 年数据、2024-11-28 发布，下一期预计 2026-11-26）· `län` / `Region`（省 / 大区）。**没有统一官方定义的「都会区」**，但部分是有法人地位的市镇联合体（如 Göteborgsregionen），可具名引用并附该机构自己的数字。三档能差好几倍（卡尔马市镇约 7.3 万 vs 城区 4.26 万），**写哪一档必须点名**。
    //   维斯比城区 26,305（2023 年，SCB 2024-11-28 发布，经瑞典语维基信息框转引核对，3 级）。**原来 identity 写 26,305、howItWorks 写 24,330，同一条目两段打架**，已统一。2026-09-09 核。
    howItWorks:
      "Visby is a town on the island of Gotland with 26,305 people in 2023, the most populous Swedish locality off the mainland, reached only by ferry or air; the whole island forms a single municipality that also exercises regional powers as Region Gotland, running schools, elder care and hospitals, while the state runs police. In the Middle Ages it was an important Hanseatic trading town on the Baltic, at its height in the fourteenth century, and in 1361 Valdemar IV of Denmark took Gotland, eighteen hundred dying before the walls; the long decline that followed left the medieval town standing as it was, inscribed as World Heritage in 1995 as one of the best-preserved medieval cities in Scandinavia. The town wall built about 1300 runs 3.4 km and still encircles the old town, with a dozen church ruins inside it. Almedalen Week each July brings Sweden's parties, press and lobbyists here to talk, and Medieval Week puts the whole town in costume; ferries come from Nynäshamn and Oskarshamn and the airport lies north of town. Newcomers most often go wrong by taking Visby for Gotland, when the island runs about 170 km and its villages and beaches lie all around.",
    layout:
      "The old town is ringed by about 3.4 km of medieval walls, its cobblestone streets, rose-covered walls and church ruins densely packed within — one of the best-preserved medieval trading towns in the Baltic region.",
    gettingAround:
      "Visby Airport is about 4 km from the centre; ferries also run from Stockholm or ports in Södermanland. The old town is walkable; exploring the rest of the island is best done by car or rented bicycle. The climate is temperate maritime, moderated by the surrounding sea.",
    culture:
      "The official language is Swedish, with high English proficiency. Visby hosts Almedalen Week each July, a major political gathering and medieval-themed festival, and is an important venue for Swedish cultural and political events. Restaurant bills typically already include service.",
    seeAndDo:
      "A walk along Visby's medieval city walls; St Mary's Cathedral; the ruins of St Catherine's Church. Day trips to Stora Alvaret and the sea stacks of Fårö nearby.",
    whenAndTips:
      "June–August is the most pleasant season and also Almedalen Week, when visitors and politicians crowd the town and accommodation is tight; plan at least two to three days for a full island tour covering Stora Alvaret and Fårö.",
  },
  karlskrona: {
    // identity sources: 市镇人口 66,021（2025-12-31，市政府公报引 SCB Befpak，1 级）；SCB 次年 2 月发布。核实 2026-09-12
    identity:
      "Karlskrona is the core city of Blekinge in south-eastern Sweden, with about 66,000 people in the municipality at the end of 2025 (Statistics Sweden), a Swedish royal naval base since the city's founding in 1680, its naval city plan inscribed as a World Heritage Site in 1998.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Karlskrona (Sweden; 66,675 in 2018; capital of Blekinge County; founded 10 August 1680 by Charles XI as an ice-free naval base south of Stockholm, built across an archipelago; Sweden's only baroque city with its original grid; Naval Port of Karlskrona UNESCO 1998; still the main Swedish naval base and Coast Guard headquarters; Blekinge Institute of Technology ~8,000 students; Stena Line ferry to Gdynia, nearly 500,000 passengers)
    howItWorks:
      "Karlskrona is the capital of Blekinge County in Sweden with about 66,000 people at the end of 2025, governed by an elected council; the municipality runs schools and planning, the region hospitals and public transport, and the state police and the navy. The city was not grown but made: after Sweden took Blekinge in 1658 it needed an ice-free naval base south of Stockholm, and on 10 August 1680 King Charles XI ordered a city built across this archipelago, its streets laid out at once on a Baroque grid — Sweden's only Baroque city, with the Fredrikskyrkan and the central square from that time. The Naval Port of Karlskrona was inscribed as World Heritage in 1998, the Swedish Navy's main base and the Coast Guard headquarters are still here, and the Blekinge Institute of Technology founded in 1989 has about eight thousand students. Stena Line ferries sail to Gdynia in Poland with nearly half a million passengers a year. Newcomers most often go wrong by taking Karlskrona for an old fishing town, when it is a naval city built to a drawing in the seventeenth century and a naval port still.",
    layout:
      "The city is built on the island of Trossö and several surrounding islets, its 17th-century Baroque town plan well preserved, with naval dockyards and fortress buildings lining the coast.",
    gettingAround:
      "Ronneby Airport is about 30 km from the centre, reached by bus; from Stockholm the train takes about 5 hours. The old town is walkable; exploring the Blekinge Archipelago nearby requires a car or boat. The climate is temperate maritime.",
    culture:
      "The official language is Swedish, with high English proficiency. Karlskrona's civic identity is closely tied to the history of the Swedish Royal Navy, and it remains an important naval base today. Restaurant bills typically already include service.",
    seeAndDo:
      "The Naval Museum; the Church of Saint Mary and Trinity Church (Baroque architecture landmarks); the old town square. A boat tour of the Blekinge Archipelago nearby.",
    whenAndTips:
      "June–August is the most pleasant season; as a gateway for exploring the granite skerry landforms of the Blekinge Archipelago, plan a half- to full-day boat tour of the islands.",
  },
  kalmar: {
    // identity sources: 瑞典统计局（SCB）城区（tätort）人口，最近一期为 **2023 年数据、2024-11-28 发布**：卡尔马城区 42,622；**卡尔马市镇（含乡村）约 7.3 万，是另一档，别混用**。
    //   **下一期（2025 年数据）预计 2026-11-26 发布，届时这一批城区数字要一起回来刷新。** 核实日 2026-09-08。
    //   **瑞典三档并存口径**：kommun（市镇，含乡村）／tätort（城区）／storstadsområde 或 län（都会区/省）——本条写的是城区。
    identity:
      "Kalmar is the core city of Kalmar County in south-eastern Sweden, with an urban-area population of about 43,000 (2023); Kalmar Castle is one of the best-preserved Renaissance castles in Sweden, and the city is a gateway for exploring the island of Öland.",
    // howItWorks sources: **瑞典的官方人口口径**（SCB，2026-09-09 核）：`kommun`（市镇年末登记人口，含郊区与乡村，**每年 12-31 基准、次年 2 月下旬发布**）· `tätort`（城区/建成区，**每 2–3 年一期**，最近一期 2023 年数据、2024-11-28 发布，下一期预计 2026-11-26）· `län` / `Region`（省 / 大区）。**没有统一官方定义的「都会区」**，但部分是有法人地位的市镇联合体（如 Göteborgsregionen），可具名引用并附该机构自己的数字。三档能差好几倍（卡尔马市镇约 7.3 万 vs 城区 4.26 万），**写哪一档必须点名**。
    //   卡尔马城区 42,622（2023 年，SCB 2024-11-28 发布，3 级转引核对）。**注意与市镇口径的差别**：卡尔马市镇约 7.3 万，城区 4.26 万，差近一倍 —— 正文现在点了「城区」。2026-09-09 核。
    howItWorks:
      "Kalmar is the capital of Kalmar County in Sweden with an urban-area population of 42,622 in 2023, governed by an elected council; the municipality runs schools and planning, the region hospitals and public transport, and the state police. The city stands on the Baltic coast facing the island of Öland. On 13 July 1397 the envoys of Denmark, Norway and Sweden signed the treaty of the Kalmar Union in Kalmar Castle, putting the three kingdoms under one crown until Sweden left in 1523; the castle was later rebuilt in Renaissance form and still stands on the water south of town. The old town lies north of it with the Baroque cathedral of 1703 on its square. The Öland bridge opened in 1972 runs 6 km as the longest in Sweden and ties the city to the island, over which the whole country drives on holiday in summer; Linnaeus University has a campus in town and the airport lies 5 km west. Newcomers most often go wrong by taking Kalmar for a stop on the way to Öland, when it is a provincial capital with a castle, a cathedral and six hundred years of history.",
    layout:
      "The old town is built along the coast around Kalmar Castle, with a well-preserved 17th-century Baroque new-town district; a bridge connects Kalmar to Öland across the strait.",
    gettingAround:
      "Kalmar Airport is about 6 km from the centre, reached by bus; from Stockholm the train takes about 4.5 hours. The old town is walkable; Öland is reachable by car across the bridge. The climate is temperate maritime.",
    culture:
      "The official language is Swedish, with high English proficiency. Kalmar Castle was the site where the Kalmar Union — the 1397 union of the crowns of Denmark, Sweden and Norway — was concluded, an important landmark in Nordic history. Restaurant bills typically already include service.",
    seeAndDo:
      "Kalmar Castle; Kalmar Cathedral; the Baroque old-town district. A day trip across the bridge to Stora Alvaret on Öland.",
    whenAndTips:
      "June–August is the most pleasant season; Kalmar is the most convenient gateway to Öland's Stora Alvaret limestone plateau, just a roughly ten-minute drive across the bridge.",
  },
  kiruna: {
    // identity sources: 瑞典统计局（SCB）城区（tätort）人口，最近一期为 **2023 年数据、2024-11-28 发布**：基律纳城区 17,284；**市镇 22,399（2026-06-30），是瑞典面积最大的市镇**。
    //   **下一期（2025 年数据）预计 2026-11-26 发布，届时这一批城区数字要一起回来刷新。** 核实日 2026-09-08。
    //   **瑞典三档并存口径**：kommun（市镇，含乡村）／tätort（城区）／storstadsområde 或 län（都会区/省）——本条写的是城区。
    //   原来写的 1.8 万介于两档之间、更接近城区，但没点名是哪一档。
    identity:
      "Kiruna is Sweden's northernmost city, with an urban-area population of about 17,000 (2023; about 22,000 across the wider municipality), about 145 km north of the Arctic Circle, home to the world's largest underground iron-ore mine and a gateway for exploring Kebnekaise and Sarek National Park.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kiruna (Sweden; the northernmost city in Sweden, in Lapland, 145 km north of the Arctic Circle, Norrbotten County; built in the 1890s to serve the Kiruna mine; the Kiirunavaara iron ore mine, whose underground extraction causes subsidence; since 2004 the town centre is being moved 3 km east, and Kiruna Church was relocated in August 2025; Icehotel at Jukkasjärvi; Esrange space centre 1966; midnight sun 28 May–16 July; winters below −30 °C)
    howItWorks:
      "Kiruna is the northernmost city in Sweden, in Lapland 145 km north of the Arctic Circle in Norrbotten County, governed by an elected council, its municipality the largest in Sweden by area; the municipality runs schools and planning, the region hospitals and the state police. The town was built in the 1890s to serve the Kiruna mine, and Kiirunavaara is the largest underground iron ore mine in the world, its orebody slanting beneath the town — which is why the subsidence of mining is swallowing the old centre: since 2004 the town centre has been moving 3 km east, the new centre opened in 2022, and in August 2025 even the church was lifted whole and carried to the new site. This is a city born for one mine and moved house for the same mine. The Esrange space centre founded in 1966 lies east, the Icehotel at Jukkasjärvi is rebuilt each winter, Abisko and Kebnekaise lie west, and Sami reindeer herding goes on in the fells around; the sun does not set from 28 May to 16 July and winter often falls below −30°C. Newcomers most often go wrong by looking for Kiruna's centre on a map, when it is on its way east.",
    layout:
      "Mining-induced ground subsidence has forced the city into an ongoing full relocation programme since 2014, with some historic buildings — such as Kiruna Church — moved intact to a new site, a rare example anywhere in the world of an entire town being relocated.",
    gettingAround:
      "Kiruna Airport is about 8 km from the centre, reached by bus; from Stockholm the night train takes about 17 hours. The town centre is walkable; reaching Kebnekaise and Abisko requires a car or train. The climate is subarctic, with long, severe winters (temperatures can fall below -30°C) and midnight sun in summer.",
    culture:
      "The official language is Swedish, and Kiruna is also an important centre of Swedish Sámi Indigenous culture, home to the Sámi Parliament's museum. Restaurant bills typically already include service.",
    seeAndDo:
      "Kiruna Church (a timber church moved intact to its new site); the Sámi cultural centre; the Icehotel (rebuilt from ice and snow each winter). Hiking Kebnekaise nearby, or watching the northern lights at Abisko.",
    whenAndTips:
      "June–July brings the midnight sun and is peak season for hiking and outdoor activity; December–January is the best window for the northern lights — bring proper polar cold-weather gear in winter.",
  },
  lulea: {
    // identity sources: **瑞典的官方人口口径**（SCB，2026-09-09 核）：`kommun`（市镇年末登记人口，含郊区与乡村，**每年 12-31 基准、次年 2 月下旬发布**）· `tätort`（城区/建成区，**每 2–3 年一期**，最近一期 2023 年数据、2024-11-28 发布，下一期预计 2026-11-26）· `län` / `Region`（省 / 大区）。**没有统一官方定义的「都会区」**，但部分是有法人地位的市镇联合体（如 Göteborgsregionen），可具名引用并附该机构自己的数字。三档能差好几倍（卡尔马市镇约 7.3 万 vs 城区 4.26 万），**写哪一档必须点名**。
    //   吕勒奥城区（tätort）49,123（2023 年，SCB，级别 1 + 3 级转引核对精确数）。2026-09-09 核。
    //   https://www.scb.se/pressmeddelande/fler-bor-i-stora-tatorter-men-regionala-skillnader/
    identity:
      "Luleå is the core city of Norrbotten in northern Sweden, with an urban-area (tätort) population of about 49,100 (2023), on the Gulf of Bothnia coast, and a gateway for exploring Sweden's northern archipelago and Lapland.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Luleå (Sweden; ~49,646 in the urban core; capital of Norrbotten County; chartered 1621 by Gustavus Adolphus, moved in 1649 because post-glacial rebound made the harbour too shallow; 1887 fire; Gammelstad Church Town UNESCO 1996; the world's largest brackish-water archipelago with 1,312 islands; Luleå University of Technology; SSAB steelworks; Facebook's first European data centre from 2012; fifth-largest airport; seventh-busiest cargo port; northern lights September–March)
    howItWorks:
      "Luleå is the capital of Norrbotten County in Sweden with 49,123 people in the urban core in 2023, at the head of the Gulf of Bothnia, governed by an elected council; the municipality runs schools and planning, the region hospitals and public transport, and the state police. Gustavus Adolphus chartered it in 1621, and in 1649 the whole town moved — post-glacial rebound keeps lifting the land, the old harbour had grown too shallow and the town had to go seaward; the Gammelstad Church Town left behind, with more than four hundred cabins where churchgoers slept over, was inscribed as World Heritage in 1996. The fire of 1887 burned most of the town, and the neo-Gothic cathedral completed in 1893 is the tallest survivor. Today the SSAB steelworks and Luleå University of Technology are the largest employers, and in 2012 Facebook built its first European data centre here for the cold air and the hydropower; offshore lies the world's largest brackish-water archipelago of 1,312 islands, with ice roads driven across it in winter. Newcomers most often go wrong by taking Gammelstad for a village, when it is where this city used to stand.",
    layout:
      "The historic church town of Gammelstad, at the city's core, is a well-preserved cluster of wooden church cottages inscribed as a World Heritage Site in 1996; the modern city centre extends along the Gulf of Bothnia coast, where the frozen winter bay creates a distinctive ice-crossing landscape.",
    gettingAround:
      "Luleå Airport is about 8 km from the centre, reached by bus; from Stockholm the train takes about 14 hours, or about 1.5 hours by air. The city centre is walkable. The climate is subarctic, with severe winters and a frozen bay.",
    culture:
      "The official language is Swedish, with high English proficiency. Luleå is an important steel-industry and technology centre in northern Sweden, and a transport hub for reaching the northern archipelago and Lapland. Restaurant bills typically already include service.",
    seeAndDo:
      "Gammelstad Church Town (a World Heritage Site); the Luleå archipelago (walkable or ski-able across the frozen sea in winter); the Norrbotten Museum.",
    whenAndTips:
      "June–August suits exploring the archipelago nearby; February–March, when the sea ice is stable, offers a distinctive chance for ice-walking and skiing across the frozen bay.",
  },
  harnosand: {
    // identity sources: 瑞典统计局（SCB）城区（tätort）人口，最近一期为 **2023 年数据、2024-11-28 发布**：海讷桑德城区 18,236；市镇 25,012（2023 年末）。
    //   **下一期（2025 年数据）预计 2026-11-26 发布，届时这一批城区数字要一起回来刷新。** 核实日 2026-09-08。
    //   **瑞典三档并存口径**：kommun（市镇，含乡村）／tätort（城区）／storstadsområde 或 län（都会区/省）——本条写的是城区。
    //   **这条是「口径先于数字」的典型**：identity 的 1.8 万与 howItWorks 的 2.5 万**两个数字都各自准确**，
    //   一个是城区、一个是市镇，但正文一处都没点名，读者只会看到同一座城两个打架的数。
    identity:
      "Härnösand is a small coastal town in north-central Sweden, with an urban-area population of about 18,000 (2023; about 25,000 across the wider municipality), the traditional gateway to the High Coast World Heritage Site.",
    // howItWorks sources: 人口：瑞典统计局 BefolkManadCKM，Härnösand kommun（2280）2025-12-31 = 24,348（月度初步数 2026-07-31 已降至 24,259）。口径是市镇（kommun）常住人口。年末定案数通常次年 2 月随年度汇总发布，月度初步数滞后约 5—6 周。
    howItWorks:
      "Härnösand is the capital of Västernorrland County in Sweden with about 24,300 people at the end of 2025 (Statistics Sweden), built on the island of Härnön, governed by an elected council; the municipality runs schools and planning, the region hospitals and public transport, and the state police. Small as it is, it is a county's administrative and ecclesiastical centre: the cathedral of the Diocese of Härnösand, the county governor's residence and the county museum are all here, and the cathedral is the smallest in Sweden. On 10 December 1885 it became the first Swedish town with electric street lighting, powered from the Gådeå station outside town. The city calls itself the gate to the High Coast: the Höga Kusten a few tens of kilometres north is a World Heritage landscape where the land has risen nearly 300 m in post-glacial rebound, the greatest recorded anywhere, so that the shoreline changes from year to year. Sundsvall lies about 50 km south and Stockholm about 400 km. Newcomers most often go wrong by taking Härnösand for a small town, when it is a county capital — the county simply has few people.",
    layout:
      "The old town is built at the mouth of the Härnösand River, its 19th-century wooden building district well preserved — an important historic port town along the High Coast.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Sundsvall-Timrå Airport (about 45 km); from Stockholm the train takes about 4.5 hours. The old town is walkable; exploring the High Coast requires a car. The climate is temperate continental, with cold winters.",
    culture:
      "The official language is Swedish, with high English proficiency. Härnösand was historically an important Swedish timber-trading port and is now the gateway town for exploring the geological wonder of the High Coast. Restaurant bills typically already include service.",
    seeAndDo:
      "The old town's 19th-century wooden building district; the view from the High Coast Bridge. A hike along the uplifted shoreline trails of the High Coast nearby.",
    whenAndTips:
      "June–August is the most pleasant season and the best time to explore the High Coast; plan one to two days for a self-drive tour of the uplifted coastal landforms along the High Coast Bridge route.",
  },
  are: {
    // identity sources: 瑞典统计局（SCB）城区（tätort）人口，最近一期为 **2023 年数据、2024-11-28 发布**：奥勒村/城区 3,699；奥勒市镇 12,770（2025-12-31）。
    //   **下一期（2025 年数据）预计 2026-11-26 发布，届时这一批城区数字要一起回来刷新。** 核实日 2026-09-08。
    //   **瑞典三档并存口径**：kommun（市镇，含乡村）／tätort（城区）／storstadsområde 或 län（都会区/省）——本条写的是城区。
    //   **同一地名下差了近 4 倍的三个量**：村/城区 3,699、市镇 12,770。
    //   原来 identity 写「1.4 万」（接近市镇但偏高、未点名），howItWorks 写「3,200」（城区，且已过期）。
    identity:
      "Åre is a resort town in Jämtland in west-central Sweden, with about 3,700 permanent residents in the village itself (2023; about 13,000 across the wider municipality), Northern Europe's largest alpine ski resort, set beside Lake Åre at the foot of Åreskutan mountain.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Åre (Sweden; village ~3,200 in Åre Municipality, Jämtland; at about 400 m by Åresjön below Åreskutan; the largest alpine ski resort in northern Europe with more than 30 lifts; tourism about 25 per cent of the local economy; visitors came after the railway of 1882 as "air-guests"; Alpine World Championships 1954, 1977 and 2007 and 2019, over 100 World Cup races; the largest mountain-bike resort in Sweden since the 1990s; on the line from Östersund to Trondheim)
    howItWorks:
      "Åre is a village of Jämtland County in Sweden with about 3,200 permanent residents, in Åre Municipality, governed by an elected council; the municipality runs schools and planning, the region hospitals and public transport, and the state police. The village lies by Åresjön below Åreskutan at about 400 m. After the railway reached it in 1882, people came up from Stockholm to breathe the mountain air and look at the view — 'air-guests' as they were called — and tourism has been the local business ever since, now about a quarter of the economy. It is the largest alpine ski resort in northern Europe with more than thirty lifts, the only Swedish venue fit for Olympic downhill, host of the Alpine World Championships in 1954, 2007 and 2019 and of more than a hundred World Cup races; since the 1990s it has also become Sweden's largest mountain-bike resort in summer. The railway from Östersund to Trondheim in Norway passes the village. Newcomers most often go wrong by judging its scale from the resident population, when Åre in season holds tens of thousands.",
    layout:
      "The town is built along the northern shore of Lake Åre, with cable cars running directly up to the ski area on the mountain; in summer the town transforms into a destination for hiking, cycling and fishing.",
    // gettingAround sources: 机场距离：注册表坐标算出直线 74.5 公里，原文短于直线、不可能成立，已改为略高于直线的值（实际公路里程可能更长）。
    gettingAround:
      "Åre Östersund Airport is about 80 km from town, reached by bus; from Stockholm the train takes about 6.5 hours. The town itself is walkable; the ski area is reached by cable car or shuttle. The climate is subarctic mountain, cold and snowy in winter, cool in summer.",
    culture:
      "The official language is Swedish, with high English proficiency. Åre is a favourite retreat of Swedish royalty and celebrities, and home to the largest ski resort in Northern Europe. Restaurant bills typically already include service.",
    seeAndDo:
      "Skiing Åreskutan (one of the largest ski areas in Northern Europe); canoeing and fishing on Lake Åre in summer; a cable-car ride to the summit for the view; hiking the Jämtland mountains nearby.",
    whenAndTips:
      "December–April is peak ski season; June–August is peak season for summer outdoor activities — one of the few destinations with both a winter ski season and a summer hiking season.",
  },
};
