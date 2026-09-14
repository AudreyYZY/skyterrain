import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Netherlands ============
  "netherlands-overview": {
    // identity sources: CBS《Bevolkingsgroei in eerste helft 2025 ongeveer gelijk aan vorig jaar》：2025-06-30 约 18.08 百万。https://www.cbs.nl/nl-nl/nieuws/2025/31/bevolkingsgroei-in-eerste-helft-2025-ongeveer-gelijk-aan-vorig-jaar
    //   核实日 2026-09-07，来源级别 1
    identity:
      "The Netherlands is an extremely low-lying country in Western Europe, about 42,000 sq km with a population of about 18.08 million as of mid-2025 (Statistics Netherlands); more than a quarter of the country is below sea level, and even the national high point, Vaalserberg, is only 322.7 m. This is a country that has dealt with the sea and water for centuries — reclaiming land and building dikes is a tradition running through hundreds of years of history, and the Dutch name for the country itself carries the meaning 'low land'.",
    layout:
      "It helps to divide the Netherlands into: North Holland (Amsterdam and surroundings, the dune coast); South Holland (Rotterdam, The Hague — the port and political centre); Utrecht province (the central rail hub); Limburg (Maastricht, the only province with pronounced relief); Groningen and Friesland (the north, near the Wadden Sea); and Overijssel (the historic Hanseatic town on the IJssel).",
    gettingAround:
      "The Netherlands is small and the rail network is extensive — most major cities are 1–2 hours apart by train, the everyday way the Dutch get around, and domestic flights are very limited (only Schiphol to Maastricht and to Groningen). The bicycle is another Dutch trademark, with a well-developed cycle-lane network in almost every city, and visitors can rent one too. Drive on the right; parking downtown is inconvenient and expensive. Restaurant tipping is not required (rounding up or leaving 5–10% is fine). Tap water is drinkable. Power is 230V with the European two-round-pin plug.",
    culture:
      "The official language is Dutch, and English proficiency is among the highest of any non-English-speaking country in the world — you can communicate in English in almost any setting. The Dutch are known for being direct and practical, and generally say what they mean. Cycling, environmental awareness and social tolerance are all hallmarks of Dutch culture. Restaurant tipping is not required — rounding up or leaving 5–10% is fine.",
    seeAndDo:
      "The canal belt and museums of Amsterdam; the modern architecture and port of Rotterdam; the waterborne village of Giethoorn; Keukenhof Gardens (spring tulips); the windmill village of Zaanse Schans; the mudflats and dunes of the Wadden Sea and West Frisian Islands; the historic centre of Maastricht; the flood barriers of the Delta Works.",
    whenAndTips:
      "April–May is tulip season, the most popular time to visit; June–August has the mildest, most comfortable weather. The Netherlands is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. The weather is changeable, windy and rainy year-round — keep a waterproof jacket handy. When cycling, follow local traffic rules and watch for tram tracks.",
  },

  amsterdam: {
    // identity sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   阿姆斯特丹市镇 2026-01-01 = 941,927。**原文 identity 的「都会区约150万」与同条目 howItWorks 的「阿姆斯特丹都会区约250万」互相矛盾** —— 同一个概念两个数字差一百万；150 万更像 Eurostat 的功能性城市区（FUA）口径，与 CBS 无关。改用有官方数字的市镇口径。
    identity:
      "Amsterdam is the capital of the Netherlands, with a municipal population of about 942,000 (1 January 2026, Statistics Netherlands), named for a dam built on the Amstel river ('Amstel dam'). It rose to become a global centre of trade and finance during the 17th-century Dutch Golden Age, and the concentric canal belt around its centre survives intact today, inscribed as a whole as a UNESCO World Heritage Site in 2010.",
    // howItWorks sources: **CBS 已于约 2016 报告年度起停止发布**「stedelijke / grootstedelijke agglomeratie」（都会聚集区／大都市聚集区）
    //   与「stadsgewest」（城市地区）——CBS 概念页写明理由是这套分类的方法已不合时宜。
    //   **「兰斯塔德（Randstad）」也从来不是一张按年发布的统计表** —— CBS 新闻稿只把它当描述性地理概念用。
    //   现行仍在发布的口径只有 `gemeente`（市镇）、`provincie`（省）、`COROP-gebied`。
    //   市镇临时人口数基准日每年 1 月 1 日、**每年 3 月上旬**发布。2026-09-09 核。
    //   **MRA（大都市区阿姆斯特丹，32 个市镇）自己公布 262 万人（2024）** —— MRA 官方新闻稿（2 级）。
    //   这是一个真实的跨市镇治理联合体，可以引它自报的数，**但必须标明它不是 CBS 的统计单元**。
    //   阿姆斯特丹 gemeente 2026-01-01 约 94.2 万（CBS 临时数，1 级），正文已有。
    howItWorks:
      "Amsterdam is the capital of the Netherlands by constitution, while the government, parliament and the royal offices work in The Hague. The municipality covers about 219 km² with about 942,000 people as of 1 January 2026, governed by an elected council, its mayor appointed by the Crown like every Dutch mayor; it is divided into seven boroughs (stadsdelen) and Weesp, merged in 2022, the borough committees having lost powers in 2014 and 2022. Amstelveen, Haarlem and Zaanstad are municipalities of their own; the Metropolitan Region Amsterdam (MRA), a cross-municipal partnership rather than a CBS statistical unit, puts its own population at about 2.62 million in 2024, and Schiphol lies in the municipality of Haarlemmermeer. The city grew outward from the seventeenth-century canal ring, inscribed as World Heritage in 2010; Noord lies across the IJ, reached by free ferry, the Zuidas is the new business district, and the Bijlmer is the high-rise estate of the 1970s. Addresses give street, number and a postcode of four digits and two letters. GVB's five metro lines — the North–South line of 2018 runs under the centre — trams and ferries run on one OV card, and the bicycle carries most journeys within the city. The housing shortage is the city's daily topic. Newcomers most often go wrong by taking the canal ring for the city, when it is a small piece of a city of 935,000.",
    layout:
      "Amsterdam's old town is built around four concentric canals, centred on Dam Square (site of the Royal Palace). Inside the canal belt is the dense historic centre, including the well-known Red Light District and the Jordaan quarter; outside it are the more modern residential and commercial South and East districts. The whole city is low-lying, much of it at or below sea level.",
    gettingAround:
      "Schiphol Airport (AMS) is about 11 km in a straight line from the city, with a train straight to Central Station (about 15 minutes). The city has trams, buses, a metro and ferries; the bicycle is one of the main ways to get around, and renting one is easy. The old canal-side streets are narrow, and pedestrians should watch closely for bikes and trams. The climate is temperate maritime, mild year-round with rain and wind.",
    culture:
      "Dutch is the main language, with extremely high English proficiency. Amsterdam's pace is moderate, and the city is highly accepting of diverse cultures and lifestyles. Cycling is a daily habit for locals — visitors renting a bike should follow traffic rules and give way to trams and pedestrians. Watch for the separate bike lanes (usually red paving or their own markings) — stepping into one while walking is a common visitor mistake and can draw a bell ring or worse from cyclists. Restaurant tipping is not required.",
    seeAndDo:
      "A canal-belt boat tour; the Van Gogh Museum and the Rijksmuseum (Rembrandt's 'The Night Watch'); the Anne Frank House (Second World War history — a sombre subject; book online well ahead); the Royal Palace and Dam Square; the markets and shops of the Jordaan; the Bloemenmarkt flower market; the Red Light District (learn the background first, then decide for yourself whether to visit).",
    whenAndTips:
      "April–May (tulip season) and June–August (the most comfortable weather) are also the two busiest times of year. Book popular sights such as the Anne Frank House and the Van Gogh Museum online weeks ahead. Follow traffic rules when cycling, and mind local etiquette around photography in the Red Light District. Canal-side cobbles are slippery — wear grippy shoes.",
  },

  haarlem: {
    // identity sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   哈勒姆市镇 2026-01-01 = 168,898。**哈勒姆根本没有官方界定的「都会区」** —— 原文写的那个数字本质就是市镇人口，套了个不存在的标签。
    identity:
      "Haarlem is the capital of North Holland, with a municipal population of about 169,000 (1 January 2026, Statistics Netherlands), about 20 km west of Amsterdam and just inland from the Holland Dunes coast — one of the oldest cities in the Netherlands, an important textile and brewing centre in the 17th century, and the hometown of Dutch Golden Age painter Frans Hals.",
    // howItWorks sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   同上。
    howItWorks:
      "Haarlem is the capital of North Holland province, though Amsterdam is far larger; the municipality covers about 32 km² with about 169,000 people as of 1 January 2026, governed by an elected council with a mayor appointed by the Crown like every Dutch mayor, and police belong to the state. The old town wraps around the Grote Markt, the organ of St Bavo was played by Mozart, the Frans Hals Museum and the Teylers, the oldest museum in the Netherlands, both lie in the old town, the Spaarne runs through it, the first Dutch railway ran from Amsterdam to here in 1839 and the train still takes about 15 minutes; the beach at Zandvoort 10 km west is another municipality, and the bulb fields lie to the south. Newcomers most often go wrong by taking Haarlem for a suburb of Amsterdam, when it is the provincial capital with an old town and museums of its own, and older than Amsterdam.",
    layout:
      "Haarlem's old town centres on the Grote Markt, with St Bavo's Church as the city's landmark. The old town preserves many 17th-century gabled buildings, and the Spaarne river runs through the city. The dune-coast national park is not far to the west.",
    gettingAround:
      "Haarlem has no airport with scheduled flights; the nearest is Schiphol (about 20 minutes by car). The train from Amsterdam takes about 15 minutes, making it a popular day trip. The old town is walkable, and cycling is also convenient. The climate is temperate maritime, moderated by the coast, mild and windy.",
    culture:
      "Dutch is the main language, with widespread English. Haarlem is quieter and more 'local' than Amsterdam, a favourite weekend destination for the Dutch themselves. Restaurant tipping is not required.",
    seeAndDo:
      "St Bavo's Church (with a famous historic organ once played by Mozart); the Frans Hals Museum; the Grote Markt and its historic buildings; nearby Keukenhof Gardens (spring tulips, about 30 minutes away); hiking or cycling in the Holland Dunes national park.",
    whenAndTips:
      "During tulip season (April–May), nearby Keukenhof Gardens gets very crowded — book tickets ahead. Haarlem itself suits half a day to a day, often visited as a side trip around Amsterdam.",
  },

  texel: {
    // identity sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   特塞尔市镇 2026-01-01 = 13,958，四舍五入仍是约 1.4 万 —— **数值没变，补的是年份**。原文两段都没有年份。
    identity:
      "Texel is the largest and most populous of the West Frisian Islands, in the northernmost waters of the Netherlands, with a municipal resident population of about 14,000 (1 January 2026) — a distinctive Dutch island ecotourism destination, its dunes, mudflats, pasture and lighthouses giving it a landscape quite unlike the mainland.",
    // howItWorks sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   同上。
    howItWorks:
      "Texel is the largest of the Dutch Wadden islands and a municipality, about 162 km² of land with about 14,000 people as of 1 January 2026, governed by an elected council with a mayor appointed by the Crown; the Wadden Sea was inscribed as World Heritage in 2009. The island has seven villages: Den Burg, the municipal seat, in the middle, De Koog the beach resort behind the dunes on the west coast, Oudeschild the fishing harbour on the east, and the ferry from Den Helder on the mainland reaching the pier at the southern tip in about 20 minutes; the west coast is 30 km of beach and dune national park, the east polder and sheep, some seven-tenths of the economy is tourism, and the island moves by bicycle. Newcomers most often go wrong by taking Texel for a beach village, when it is an island 24 km long and the villages are half an hour's ride apart.",
    layout:
      "Texel is long and narrow: continuous beach and dune on the North Sea side, intertidal mudflat on the Wadden Sea side, and pasture and small villages in the middle. Den Burg is the island's largest village and ferry-terminal town, and a historic lighthouse stands at De Cocksdorp on the northern tip.",
    gettingAround:
      "Texel has no scheduled commercial flights; a ferry runs from Den Helder on the mainland (about 20 minutes), with parking and bus connections at the terminal. The island has buses, but the bicycle is the main way to get around, on a well-developed network of cycle paths. The climate is temperate maritime, windier and more changeable than the mainland.",
    culture:
      "Dutch is the main language; tourism is an important pillar of the island economy, and English is widespread. Islanders live at a relaxed pace, closely tied to the Wadden Sea and North Sea, and traditional sheep farming and fishing continue today. Restaurant tipping is not required.",
    seeAndDo:
      "Cycling or walking the North Sea beaches; the lighthouse and seal sanctuary at De Cocksdorp (you can visit the seal rehabilitation centre); hiking the Wadden Sea mudflats (go with a certified guide — there is risk near high tide); Ecomare (introducing Wadden Sea ecology); the island's traditional villages and windmills.",
    whenAndTips:
      "May–September is best, also the island's peak season for mainland visitors — book ferries and lodging ahead. It's windy by the sea — carry a windproof jacket. For Wadden Sea mudflat walks, always know the tide times and never go alone.",
  },

  rotterdam: {
    // identity sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   鹿特丹市镇 2026-01-01 = 673,804。**原文 identity 的「都会区约120万」与同条目 howItWorks 的「与海牙合成约240万人的都会区」差了一倍** —— 指向同一个「都会区」却是两个数字。MRDH 是跨市镇的交通/规划治理联合体，不是 CBS 统计单元。
    identity:
      "Rotterdam is the second-largest city in the Netherlands, with a municipal population of about 674,000 (1 January 2026, Statistics Netherlands), and Europe's largest port. Its centre was almost completely destroyed by bombing in the Second World War, and the postwar rebuild boldly embraced modernist and contemporary architecture, a sharp contrast to Amsterdam's historic streets — earning Rotterdam the nickname 'the architecture capital' of the Netherlands.",
    // howItWorks sources: **CBS 已于约 2016 报告年度起停止发布**「stedelijke / grootstedelijke agglomeratie」（都会聚集区／大都市聚集区）
    //   与「stadsgewest」（城市地区）——CBS 概念页写明理由是这套分类的方法已不合时宜。
    //   **「兰斯塔德（Randstad）」也从来不是一张按年发布的统计表** —— CBS 新闻稿只把它当描述性地理概念用。
    //   现行仍在发布的口径只有 `gemeente`（市镇）、`provincie`（省）、`COROP-gebied`。
    //   市镇临时人口数基准日每年 1 月 1 日、**每年 3 月上旬**发布。2026-09-09 核。
    //   **MRDH（鹿特丹—海牙都会区，21 个市镇的交通与规划联合体）自报约 240 万人** —— MRDH 官网（2 级），
    //   未标具体年份；**它不是 CBS 统计单元**。
    //   **「五条地铁线在两座城之间穿行」是错的**：RandstadRail 网共 4 条线（E/3/4/34），
    //   **真正连接鹿特丹与海牙的只有 RET E 线一条**（海牙中央—鹿特丹 Slinge）；
    //   3/4/34 号线是海牙通往泽特梅尔方向的有轨电车/轻轨，根本不到鹿特丹（3 级，2026-09-09 核）。
    howItWorks:
      "Rotterdam covers about 325 km² including its port areas and water, with about 674,000 people as of 1 January 2026, governed by an elected council with a mayor appointed by the Crown; it is divided into fourteen areas, each with an area committee. With The Hague it belongs to MRDH, a transport and planning partnership of 21 municipalities rather than a CBS statistical unit, which puts its own catchment at about 2.4 million, whose MRDH transport authority runs the public transport of both cities, with five metro lines running between them. The Port of Rotterdam is the largest in Europe, stretching about 40 km west along the Nieuwe Maas from the city to the Maasvlakte, and the ferry port of Hoek van Holland lies within the municipality. The bombing of 1940 razed the centre and it was rebuilt from nothing, so the city has no old town but is a laboratory of modern architecture — the Markthal, the Cube Houses, the towers; the Nieuwe Maas divides the northern centre from Feijenoord and the Kop van Zuid on the south bank, joined by the Erasmus Bridge. About half of residents have a migration background. Addresses give street, number and a postcode of four digits and two letters. Metro, trams and buses run on one OV card. Newcomers most often go wrong by looking for an old town in Rotterdam, when its identity is precisely the modern city rebuilt after the war.",
    layout:
      "Rebuilt after the war, Rotterdam's centre has an open, modern urban layout, with landmark contemporary buildings such as the Cube Houses, the Erasmus Bridge and the Markthal scattered through it. The Meuse runs through the city, and the riverside districts (such as Rotterdam South) have developed rapidly in recent years. The port area (the Europoort) extends west along the river toward the North Sea.",
    gettingAround:
      "Rotterdam The Hague Airport (RTM) is about 8 km by road from the city, with a bus connection; you can also take the train from Schiphol (about 40 minutes). The city has a metro, trams and buses, and the centre is easy to walk or cycle. The climate is temperate maritime, windier around the port.",
    culture:
      "Dutch is the main language, with widespread English. Because of the port economy, Rotterdam is ethnically diverse, with a practical, young character and strong openness to new architecture and contemporary art, a contrast to Amsterdam's more historic feel. Restaurant tipping is not required.",
    seeAndDo:
      "The Cube Houses and the Erasmus Bridge; the Markthal (a huge mural under an arched ceiling, with food stalls inside); Rotterdam Zoo; a port cruise around the Europoort; the WWII bombing memorial statue 'The Destroyed City' (a sombre subject); the canal town of Delft (about 20 minutes away).",
    whenAndTips:
      "May–September is the most comfortable. The Markthal gets busy at peak dining times (weekend lunches) — go outside those hours if you can. Check schedules ahead for port cruises. Rotterdam is often used as a base for exploring South Holland towns such as Delft and The Hague.",
  },

  "the-hague": {
    // identity sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   海牙市镇 2026-01-01 = 569,468。**原文的「都会区约110万」找不到对应的官方口径** —— 海牙单独没有 CBS 界定的都会区；与鹿特丹合并的 MRDH 约 240 万，远大于此数，二者不是一回事。
    //   **「荷兰第三大城市」这条排名复核后仍成立**：阿姆斯特丹 94.2 万 > 鹿特丹 67.4 万 > 海牙 56.9 万 > 乌得勒支 37.8 万。
    identity:
      "The Hague is the seat of the Dutch government and the residence of the Dutch king, with a municipal population of about 569,000 (1 January 2026, Statistics Netherlands); although not the constitutional capital (that is Amsterdam), it is the Netherlands' de facto political centre, and is also home to the International Court of Justice, the International Criminal Court and other international judicial bodies, earning it the name 'the international city of peace and justice'.",
    // howItWorks sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   同上。
    howItWorks:
      "The Hague is the seat of the Dutch government but not the capital: parliament, the cabinet, the Supreme Court and the King's offices and residence are all here, while the constitutional capital is Amsterdam. The municipality covers about 98 km² with about 569,000 people as of 1 January 2026, the third city of the Netherlands, governed by an elected council with a mayor appointed by the Crown and divided into eight districts. The centre wraps around the Binnenhof where parliament sits, the Peace Palace houses the International Court of Justice, and the International Criminal Court and some 200 international bodies scattered through the city let it call itself the 'city of peace and justice'; the beach and pier of Scheveningen at the municipality's northern edge are the largest seaside resort in the country, RandstadRail joins the Rotterdam metro, and the airport is shared with Rotterdam. Newcomers most often go wrong by taking The Hague for the capital of the Netherlands, when the capital is Amsterdam and The Hague is only where the government lives.",
    layout:
      "The Hague's centre is built around the Binnenhof (the seat of the Dutch parliament), surrounded by government institutions and the embassy district. Scheveningen, to the west, is the largest beach resort in the Netherlands, with a long beach and a historic pier. Important museums such as the Mauritshuis cluster in the city centre.",
    gettingAround:
      "The Hague has no airport of its own; the nearest is Rotterdam The Hague Airport (about 15 km) or Schiphol (about 50 km). The city has trams and buses, with a direct tram from the centre to Scheveningen beach. The climate is temperate maritime, windier near the coast.",
    culture:
      "Dutch is the main language; because of the many international institutions, English and other languages are widespread. The Hague feels relatively formal and international, with many embassies and diplomatic staff. Restaurant tipping is not required.",
    seeAndDo:
      "The Binnenhof and the Dutch parliament; the Mauritshuis (Vermeer's 'Girl with a Pearl Earring'); the Peace Palace (seat of the International Court of Justice — viewable from outside, with interior tours by appointment for some slots); Scheveningen beach and pier; Madurodam (a famous miniature-model park of Dutch landmarks).",
    whenAndTips:
      "May–September suits beach activities. The Mauritshuis has an exquisite but small collection — avoid weekend peak times. Interior tours of the Peace Palace have limited places and need advance application.",
  },

  delft: {
    // 零改动留痕（2026-09-10）：✅ identity 正文**已经是「2026 年 1 月 1 日市镇人口约 X 万（荷兰中央统计局）」的完整写法**——
    //   年份、口径（gemeente）、机构都在正文里，不是只藏在注释中。这是本轮十城里唯一一开始就做对的一组。
    //   ✅ 口径：已确认荷兰**没有官方「都会区」口径**（CBS 已停发聚集区／城市地区分类，Randstad 也从来不是年度统计表），正文未出现无出处的都会区数字。
    //   ⚠️ 本轮尝试直接抓 CBS 表格逐位复核数值，但那是 Excel 下载、抓不到明细行；数值系 2026-09-09 同批核实、留有一手 CBS 出处注释，未发现矛盾证据。
    //   下一轮若要坐实，用能读 StatLine API 的工具核数字本身即可，**不必再查「要不要写年份口径」——那件事已经做对了**。
    // identity sources: **CBS 已于约 2016 报告年度起停止发布**「stedelijke / grootstedelijke agglomeratie」（都会聚集区／大都市聚集区）
    //   与「stadsgewest」（城市地区）——CBS 概念页写明理由是这套分类的方法已不合时宜。
    //   **「兰斯塔德（Randstad）」也从来不是一张按年发布的统计表** —— CBS 新闻稿只把它当描述性地理概念用。
    //   现行仍在发布的口径只有 `gemeente`（市镇）、`provincie`（省）、`COROP-gebied`。
    //   市镇临时人口数基准日每年 1 月 1 日、**每年 3 月上旬**发布。2026-09-09 核。
    //   delft gemeente **110,089 人（2026-01-01，CBS 临时数，1 级，2026-09-09 核）**。
    //   **原文的「都会区」是荷兰已停发的口径，而那个数其实就是市镇人口本身、只是套错了标签** ——
    //   这与中国的「市区常住人口」是同一形状：**口径名是编的，数字反倒是对的**。
    identity:
      "Delft is between The Hague and Rotterdam, with a municipal population of about 110,000 at 1 January 2026 (CBS), the hometown of Dutch Golden Age painter Vermeer and the birthplace of Delft Blue (Delftware, blue-and-white glazed pottery); Delft University of Technology is one of the largest technical universities in the Netherlands.",
    // howItWorks sources: 人口：荷兰中央统计局 2026-01-01 市镇（gemeente）人口，与同条目 identity 段同源（1 级），与 identity 段同一基准日（约 11 万）。原文这一段只有裸数字。
    howItWorks:
      "Delft is a municipality of South Holland, about 24 km² with about 104,000 people as of 1 January 2026 (Statistics Netherlands), governed by an elected council with a mayor appointed by the Crown, and police belonging to the state. The old town lies within a ring of canals, the town hall and the Nieuwe Kerk at either end of the Markt, the House of Orange buried in the Nieuwe Kerk since William the Silent, the Oude Kerk on another canal, Vermeer painting here all his life, the Royal Delft pottery south of town, and the gunpowder explosion of 1654 destroying half the city; TU Delft has about 26,500 students on a campus south of the old town, The Hague lies 10 km north and Rotterdam 15 km south, and trains and trams knit the three cities together. Newcomers most often go wrong by taking Delft for a museum town of blue pottery, when it is a city that lives on its technical university, with students a quarter of the whole.",
    layout:
      "Delft's old town is small, laced with canals, centred on the Markt square (with the Oude Kerk and Nieuwe Kerk at either end). Delft University's campus is to the south, bringing a young energy to this historic small city.",
    gettingAround:
      "Delft has no airport with scheduled flights; the nearest is Rotterdam The Hague Airport (about 10 km). The train from Rotterdam or The Hague takes about 10–15 minutes. The old town is walkable, and a bicycle rental is easy too. The climate is temperate maritime, similar to nearby cities.",
    culture:
      "Dutch is the main language; the university-town character brings a noticeable student atmosphere, with widespread English. Delft is proud of its local Delftware craft and Vermeer heritage. Restaurant tipping is not required.",
    seeAndDo:
      "The Markt square and the Nieuwe Kerk (climb the tower); a Royal Delft pottery workshop tour (see the traditional ceramic craft); the Vermeer Centre; the Delft University of Technology campus; a canal-side walk, taking in the light and atmosphere of Vermeer's paintings of the old town.",
    whenAndTips:
      "May–September is the most comfortable. Delft is small — half a day is enough, often a stop on a day trip from The Hague or Rotterdam. Check opening times ahead for the Delftware workshop tour.",
  },

  leiden: {
    // 零改动留痕（2026-09-10）：同 delft —— identity 正文已含年份、gemeente 口径与 CBS 机构名；无无出处的「都会区」数字。
    //   CBS 发布节奏：1 月 1 日口径的**临时数次年 3 月上旬**、**定编数同年 6 月下旬**（2026-01-01 定编数已于 2026-06-23 补齐）。
    // identity sources: **CBS 已于约 2016 报告年度起停止发布**「stedelijke / grootstedelijke agglomeratie」（都会聚集区／大都市聚集区）
    //   与「stadsgewest」（城市地区）——CBS 概念页写明理由是这套分类的方法已不合时宜。
    //   **「兰斯塔德（Randstad）」也从来不是一张按年发布的统计表** —— CBS 新闻稿只把它当描述性地理概念用。
    //   现行仍在发布的口径只有 `gemeente`（市镇）、`provincie`（省）、`COROP-gebied`。
    //   市镇临时人口数基准日每年 1 月 1 日、**每年 3 月上旬**发布。2026-09-09 核。
    //   leiden gemeente **130,328 人（2026-01-01，CBS 临时数，1 级，2026-09-09 核）**。
    //   **原文的「都会区」是荷兰已停发的口径，而那个数其实就是市镇人口本身、只是套错了标签** ——
    //   这与中国的「市区常住人口」是同一形状：**口径名是编的，数字反倒是对的**。
    identity:
      "Leiden is between Amsterdam and The Hague, with a municipal population of about 130,000 at 1 January 2026 (CBS); founded in 1575, Leiden University is the oldest in the Netherlands, where scholars including Descartes, Huygens, Grotius and Spinoza studied or taught, and it is also the birthplace of Rembrandt.",
    // howItWorks sources: 人口：荷兰中央统计局 2026-01-01 市镇（gemeente）人口，与同条目 identity 段同源（1 级），与 identity 段同一基准日（约 13 万）。原文这一段只有裸数字。
    howItWorks:
      "Leiden is a municipality of South Holland, about 23 km² with about 127,000 people as of 1 January 2026 (Statistics Netherlands), governed by an elected council with a mayor appointed by the Crown, and police belonging to the state. Leiden University, founded in 1575, is the oldest in the Netherlands, its 35,000 students scattered among the canals of the old town with no separate campus, thirteen Nobel laureates from here, and 'City of Discoveries' its own name; the old town lies between two arms of the Old Rhine, the Burcht on the mound at its centre, the National Museum of Antiquities and Naturalis in town, the Pilgrims sheltering here from 1609 to 1620 before sailing for America, the Bio Science Park to the west the new industry, Leiden Centraal among the busiest transfer stations in the country, The Hague 20 km south, Amsterdam 40 km north, and the beach at Katwijk 10 km west in another municipality. Newcomers most often go wrong by looking for the university campus in Leiden, when the university is the old town itself.",
    layout:
      "Leiden's old town is ringed by canals, with the ruins of a hilltop fortress (De Burcht) as the high point overlooking the whole city. Leiden University's buildings and its botanical garden (one of the oldest in Europe) are scattered through the old town, woven into everyday city life.",
    gettingAround:
      "Leiden has no airport with scheduled flights; the nearest is Schiphol (about 20 km). The train from Amsterdam or The Hague takes about 15–35 minutes. The old town is walkable, and cycling is convenient too. The climate is temperate maritime.",
    culture:
      "Dutch is the main language; the university-town character brings a strong academic atmosphere, with very high English proficiency. Leiden people are proud of the city's deep scholarly tradition. Restaurant tipping is not required.",
    seeAndDo:
      "Leiden University's old campus and the Hortus Botanicus; the hilltop fortress ruins for the city view; the National Museum of Antiquities (one of the largest archaeology museums in the Netherlands, with Egyptian artefacts); a plaque marking Rembrandt's birthplace; the wall poems along the canals (poems in many languages painted on old-town walls).",
    whenAndTips:
      "May–September is the most comfortable; 3 October's 'Leiden's Relief' festival (commemorating the 1574 lifting of the Spanish siege — a sombre historical commemoration) is an important local holiday. Leiden is often a convenient stop between Amsterdam and The Hague.",
  },

  utrecht: {
    // identity sources: **CBS 已于约 2016 报告年度起停止发布**「stedelijke / grootstedelijke agglomeratie」（都会聚集区／大都市聚集区）
    //   与「stadsgewest」（城市地区）——CBS 概念页写明理由是这套分类的方法已不合时宜。
    //   **「兰斯塔德（Randstad）」也从来不是一张按年发布的统计表** —— CBS 新闻稿只把它当描述性地理概念用。
    //   现行仍在发布的口径只有 `gemeente`（市镇）、`provincie`（省）、`COROP-gebied`。
    //   市镇临时人口数基准日每年 1 月 1 日、**每年 3 月上旬**发布。2026-09-09 核。
    //   utrecht gemeente **378,121 人（2026-01-01，CBS 临时数，1 级，2026-09-09 核）**。
    //   **原文的「都会区」是荷兰已停发的口径，而那个数其实就是市镇人口本身、只是套错了标签** ——
    //   这与中国的「市区常住人口」是同一形状：**口径名是编的，数字反倒是对的**。
    identity:
      "Utrecht is the fourth-largest city in the Netherlands, with a municipal population of about 378,000 at 1 January 2026 (CBS), in the geographic centre of the country and its most important rail hub; it is also home to Utrecht University, one of the largest in the Netherlands. The city's history goes back to Roman times, and in the Middle Ages it was the religious centre of the Netherlands.",
    // howItWorks sources: 车站排名：统一为「按客流计最繁忙」（与同条目 gettingAround 段一致、且有可核口径）；原 howItWorks 段的「全国最大」没有给出按什么算，按 C1b 处理。2026-09-12 复核。
    howItWorks:
      "Utrecht is the capital of Utrecht province and the fourth city of the Netherlands, a municipality of about 99 km² with about 378,000 people in 2026, governed by an elected council with a mayor appointed by the Crown, and divided into ten districts (wijken). It lies at the geographic centre of the country, and nearly every main line meets at Utrecht Centraal, the busiest station in the Netherlands by passenger numbers; the medieval centre is ringed by canals, the wharf cellars along the Oudegracht are its own streetscape, the Dom Tower at 112 m is the tallest church tower in the country, and a filled-in stretch of the moat was dug out again as water in 2020. Leidsche Rijn west of the Amsterdam-Rhine Canal is the largest planned new district in the Netherlands, and the Science Park and the university founded in 1636 lie to the east. Bicycles carry 51 per cent of journeys within the city, and the bicycle park at the station holds 12,500, the largest in the world. Addresses give street, number and a postcode of four digits and two letters. The Uithoflijn tram joins the station and the Science Park. Newcomers most often go wrong by taking Utrecht for a satellite of Amsterdam, when it is one of the four main cities of the Randstad and the heart of the railway network.",
    layout:
      "Utrecht's old town has a distinctive multi-level canal structure (the Oudegracht, with warehouses converted into restaurants and bars at the lower level and streets above). The Dom Tower (the tallest church tower in the Netherlands) is the city's landmark, separated from the main body of the Dom Church since an 18th-century tornado destroyed the nave — the gap is now a square.",
    gettingAround:
      "Utrecht has no airport with scheduled flights; the nearest is Schiphol (about 40 km). Utrecht Centraal is the busiest railway station in the Netherlands, about 25 minutes from Amsterdam. The old town is walkable, and cycling is convenient too (one of the highest bicycle-use cities in the Netherlands). The climate is temperate maritime.",
    culture:
      "Dutch is the main language; the university-town character brings a relatively young population, with widespread English. Utrecht is often cited as one of the Netherlands' most liveable cities, with a more relaxed pace than Amsterdam. Restaurant tipping is not required.",
    seeAndDo:
      "Climbing the Dom Tower for the city view (465 steps); a walk along the Oudegracht, taking in the riverside restaurants and bars; the Centraal Museum; the Rietveld Schröder House (a modernist architectural icon, a World Heritage Site, visit by appointment); an old-town canal boat tour.",
    whenAndTips:
      "May–September is the most comfortable. Book a time slot ahead for climbing the Dom Tower. Visits to the Rietveld Schröder House are limited — book online weeks ahead. Utrecht, as the core of the Dutch rail network, is a good base for exploring surrounding cities.",
  },

  maastricht: {
    // identity sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   马斯特里赫特市镇 2026-01-01 = 126,026。**马斯特里赫特没有官方界定的都会区口径** —— 跨境的 Euregio Maas-Rijn 是完全不同尺度的区域合作组织（约 390 万人），与这里的「12 万」无关。原文写的就是市镇人口。
    identity:
      "Maastricht is the capital of Limburg province, with a municipal population of about 126,000 (1 January 2026, Statistics Netherlands), in the far south of the Netherlands on the Meuse — one of the oldest cities in the country, an important town since Roman times because it commanded a crossing of the Meuse. The Maastricht Treaty, signed here in 1992, is one of the founding documents of the European Union.",
    // howItWorks sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   同上。
    howItWorks:
      "Maastricht is the capital of Limburg and the southernmost city of the Netherlands, a municipality of about 60 km² with about 126,000 people as of 1 January 2026, governed by an elected council with a mayor appointed by the Crown, and police belonging to the state. The Meuse divides the city: the west bank holds the old town with the Vrijthof, the Basilica of St Servatius and the Markt, the east bank the Wyck quarter with the station, and the caves of Sint Pietersberg lie south of town; the EU treaty was signed here in 1992, more than half the students of the university founded in 1976 are foreign, Limburgish is the local speech, carnival is the high point of the year and the TEFAF art fair is held here each March; the Belgian border lies 5 km away, Aachen and Liège each 30 km, and the airport at Beek to the north. Newcomers most often go wrong by imagining Maastricht from an idea of the Netherlands, when its accent, food and Catholic tradition are closer to Belgium and Germany, and the Netherlands here is only the nationality.",
    layout:
      "Maastricht's old town straddles the Meuse, linked by St Servatius Bridge, one of the oldest bridges in the Netherlands. The old town preserves extensive medieval walls and churches, and the Vrijthof is the central square. Sitting near where the Netherlands, Belgium and Germany meet, the city's character blends Dutch, Belgian and German architecture and food.",
    gettingAround:
      "Maastricht Aachen Airport (MST) is about 8.7 km in a straight line from the city, with a bus connection; there are also direct flights from Amsterdam Schiphol (about 50 minutes). The old town is walkable, and cycling is also an option. The climate is temperate maritime, slightly milder than the north of the Netherlands, and this is the region with the most pronounced relief in the country.",
    culture:
      "Dutch is the main language; being close to the Belgian and German borders, French and German are occasionally heard, with widespread English. Maastricht people are proud of a lifestyle closer to Burgundian ease (good food and wine, outdoor café culture), a contrast to the more practical style of the northern Netherlands. Restaurant tipping is not required.",
    seeAndDo:
      "St Servatius Bridge and the old town on both banks of the Meuse; Boekhandel Dominicanen (a bookshop converted from a medieval church, often rated one of the world's most beautiful bookshops); the Basilica of Our Lady and St John's Church; the Vrijthof (a hub of outdoor cafés and restaurants); the tunnels of St Pietersberg (prehistoric quarry passages, visit with a tour).",
    whenAndTips:
      "May–September is the most comfortable, also a good season for hiking and cycling in Limburg. Boekhandel Dominicanen gets busy in peak season — avoid weekend midday. As a city where the Netherlands, Belgium and Germany meet, a cross-border day trip is possible (check the day's Schengen-area rules).",
  },

  groningen: {
    // identity sources: **CBS 已于约 2016 报告年度起停止发布**「stedelijke / grootstedelijke agglomeratie」（都会聚集区／大都市聚集区）
    //   与「stadsgewest」（城市地区）——CBS 概念页写明理由是这套分类的方法已不合时宜。
    //   **「兰斯塔德（Randstad）」也从来不是一张按年发布的统计表** —— CBS 新闻稿只把它当描述性地理概念用。
    //   现行仍在发布的口径只有 `gemeente`（市镇）、`provincie`（省）、`COROP-gebied`。
    //   市镇临时人口数基准日每年 1 月 1 日、**每年 3 月上旬**发布。2026-09-09 核。
    //   groningen gemeente **244,427 人（2026-01-01，CBS 临时数，1 级，2026-09-09 核）**。
    //   **原文的「都会区」是荷兰已停发的口径，而那个数其实就是市镇人口本身、只是套错了标签** ——
    //   这与中国的「市区常住人口」是同一形状：**口径名是编的，数字反倒是对的**。
    identity:
      "Groningen is the largest city in the northern Netherlands, with a municipal population of about 244,000 at 1 January 2026 (CBS), the capital of Groningen province and home to the University of Groningen, one of the top universities in the Netherlands; with such a high share of students in its population, it's sometimes called one of the Netherlands' 'youngest' cities.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Groningen (municipality ~198 km²; ~245,000 2025; province capital, largest city of the north; university 1614 + Hanze, students ~25%; 57% of commutes by bicycle, car-free centre; Martinitoren; Groninger Museum; Eelde airport; Amsterdam 180 km ~2 h; Gronings dialect)
    howItWorks:
      "Groningen is the capital of Groningen province and the largest city of the northern Netherlands, a municipality of about 198 km² with about 245,000 people in 2025, governed by an elected council with a mayor appointed by the Crown, and police belonging to the state. The university founded in 1614 and the Hanze university of applied sciences make a quarter of residents students, the youngest city in the country; the old town wraps around the Grote Markt with the Martinitoren as its reference point, the Groninger Museum stands on the canal opposite the station, through traffic has been banned from the centre since the 1970s, about six in ten commutes are by bicycle, among the highest shares in the world; Amsterdam lies 180 km south-west, about two hours by train, the airport at Eelde to the south, and the Gronings dialect survives in the countryside. Newcomers most often go wrong by taking Groningen for a remote provincial town, when it is the capital of the north, the youngest city in the Netherlands in pace and in age.",
    layout:
      "Groningen's old town is ringed by a circular canal, with the landmark Martini Tower (a church bell tower) the highest point in the city. The Grote Markt is the centre, surrounded by university buildings, shops and cafés; the city overall is compact and easy to explore on foot or by bike.",
    gettingAround:
      "Groningen Airport Eelde (GRQ) is about 11 km in a straight line from the city, with a bus connection; there are also direct flights from Amsterdam Schiphol (about 35 minutes). The old town is walkable, and the bicycle is the main way locals get around (Groningen is considered one of the Netherlands' most cycling-oriented cities). The climate is temperate maritime, windy given its proximity to the North Sea and Wadden Sea.",
    culture:
      "Dutch is the main language; the university-town character brings a high share of young people and lively nightlife, with very high English proficiency. Groningen people are proud of the local cycling culture and the city's student identity. Restaurant tipping is not required.",
    seeAndDo:
      "Climbing the Martini Tower for the city view; the Grote Markt and its historic buildings; the Groningen Museum (a striking contemporary building on the water); cycling along the old-town canals; an hour north to Wadden Sea coastal towns or Lauwersmeer National Park.",
    whenAndTips:
      "May–September is the most comfortable. Groningen is an ideal base for exploring the northern Netherlands (the Wadden Sea, Friesland). The city suits exploring by bike — rentals are available near the station.",
  },

  zwolle: {
    // 零改动留痕（2026-09-10）：同 delft —— identity 正文已含年份、gemeente 口径与 CBS 机构名；无无出处的「都会区」数字。
    //   ✅ 零争议红线：未涉殖民史评价或移民／融合议题。
    // identity sources: **CBS 已于约 2016 报告年度起停止发布**「stedelijke / grootstedelijke agglomeratie」（都会聚集区／大都市聚集区）
    //   与「stadsgewest」（城市地区）——CBS 概念页写明理由是这套分类的方法已不合时宜。
    //   **「兰斯塔德（Randstad）」也从来不是一张按年发布的统计表** —— CBS 新闻稿只把它当描述性地理概念用。
    //   现行仍在发布的口径只有 `gemeente`（市镇）、`provincie`（省）、`COROP-gebied`。
    //   市镇临时人口数基准日每年 1 月 1 日、**每年 3 月上旬**发布。2026-09-09 核。
    //   zwolle gemeente **134,147 人（2026-01-01，CBS 临时数，1 级，2026-09-09 核）**。
    //   **原文的「都会区」是荷兰已停发的口径，而那个数其实就是市镇人口本身、只是套错了标签** ——
    //   这与中国的「市区常住人口」是同一形状：**口径名是编的，数字反倒是对的**。
    identity:
      "Zwolle is the capital of Overijssel province, with a municipal population of about 134,000 at 1 January 2026 (CBS), on the IJssel; in the Middle Ages it was an important member of the Hanseatic League (the northern European trading-city alliance), and the old town still keeps a complete star-shaped fortification and walls — the gateway city to Giethoorn and other Overijssel sights.",
    // howItWorks sources: 人口：荷兰中央统计局 2026-01-01 市镇（gemeente）人口，与同条目 identity 段同源（1 级），与 identity 段同一基准日（约 13.4 万）。原文这一段只有裸数字。
    howItWorks:
      "Zwolle is the capital of Overijssel province, a municipality of about 119 km² with about 134,000 people as of 1 January 2026 (Statistics Netherlands), governed by an elected council with a mayor appointed by the Crown, and police belonging to the state. The old town is a star-shaped fortress still ringed by its moat, the Sassenpoort gate and the 'Peperbus' church tower its landmarks, it joined the Hanseatic League in 1294 and the fifteenth century was its golden age, the oval roof of the Museum de Fundatie its new landmark and the three-star De Librije in the old town; it is a major railway junction, about an hour and ten minutes from Amsterdam, half of trips are by bicycle, and Giethoorn lies about 30 km north-east. Newcomers most often go wrong by taking Zwolle for a transfer station on the way to Giethoorn, when it is a provincial capital with a moat and a Hanseatic past.",
    layout:
      "Zwolle's old town has a classic star-fort layout, a moat running the whole way around the walls, with streets radiating out from St Michael's Church at the centre. The old town is small and its historic buildings are well preserved, one of the most complete medieval town layouts in the Netherlands.",
    gettingAround:
      "Zwolle has no airport with scheduled flights; the nearest is Schiphol (about 120 km, 1.5–2 hours by car or train). The train from Amsterdam takes about 1 hour direct. The old town is walkable; reaching nearby sights such as Giethoorn needs a car or a regional bus (about 40 minutes). The climate is temperate maritime.",
    culture:
      "Dutch is the main language, with widespread English. Zwolle's pace is more relaxed than the big cities, and locals are proud of the Hanseatic history and the well-preserved old-town layout. Restaurant tipping is not required.",
    seeAndDo:
      "St Michael's Church; a walk along the star-shaped walls and moat; the Sassenpoort (one of the surviving medieval city gates); day trips to Giethoorn (the waterborne village) or Weerribben-Wieden National Park (peat-marsh wetland).",
    whenAndTips:
      "May–September is the most comfortable, also the best season for a boat trip in Giethoorn. Giethoorn gets busy in peak season (weekends, summer) — go on a weekday or early morning; public transport there is limited, so driving or a tour is more convenient.",
  },

  // ── Netherlands batch 2 (2026-09-05) ──
  eindhoven: {
    // identity sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   埃因霍温市镇 2026-01-01 = 249,783（2025-01-01 = 249,035）。**原文的 24.9 万 / 2025 年经核实无误** —— 不是推算值，只是有了更新一期。「荷兰第五大城市」排名复核后仍成立。同条的「脑港约 80 万」是区域合作组织口径，非 CBS 统计单元，原文已表述为区域名称、未冒充官方统计，保留。
    identity:
      "Eindhoven lies in the southern province of North Brabant, the fifth-largest city in the Netherlands with about 250,000 people (1 January 2026). Philips opened its light-bulb factory here in 1891 and the village grew into an industrial city; the old Philips works at Strijp-S are now a creative quarter, and with DAF Trucks, ASML in neighbouring Veldhoven and the High Tech Campus, Eindhoven is the heart of the 'Brainport' technology region, while the university of technology and the Design Academy underpin Dutch Design Week each October. The Van Abbemuseum holds modern art, PSV is one of the great Dutch football clubs, and Van Gogh lived and painted in nearby Nuenen.",
    // howItWorks sources: **CBS 已于约 2016 报告年度起停止发布**「stedelijke / grootstedelijke agglomeratie」（都会聚集区／大都市聚集区）
    //   与「stadsgewest」（城市地区）——CBS 概念页写明理由是这套分类的方法已不合时宜。
    //   **「兰斯塔德（Randstad）」也从来不是一张按年发布的统计表** —— CBS 新闻稿只把它当描述性地理概念用。
    //   现行仍在发布的口径只有 `gemeente`（市镇）、`provincie`（省）、`COROP-gebied`。
    //   市镇临时人口数基准日每年 1 月 1 日、**每年 3 月上旬**发布。2026-09-09 核。
    //   「脑港」（Brainport Eindhoven）是 **21 个市镇组成的区域发展合作组织**，其官方 Brainport Monitor
    //   给 **816,291 人（2025 年初）**（2 级）—— **数字可引，但它不是 CBS 统计单元，不该叫「都会区」**。
    //   费尔德霍芬 47,918、海尔蒙德 96,860（均 2026-01-01，CBS），确为独立市镇。
    //   **荷兰只有三处存在这类可引的区域组织自报数**：阿姆斯特丹 MRA、鹿特丹—海牙 MRDH、埃因霍温 Brainport；
    //   **其余城市（代尔夫特、莱顿、乌得勒支、格罗宁根、兹沃勒）没有对应组织，就只写市镇人口，不要再造一个「都会区」。**
    howItWorks:
      "Eindhoven is the fifth city of the Netherlands and the largest outside the Randstad, a municipality of about 89 km² with about 250,000 people as of 1 January 2026, governed by an elected council with a mayor appointed by the Crown; today's municipality was formed in 1920 by merging the old town with the surrounding villages of Woensel, Strijp, Gestel, Stratum and Tongelre, whose names remain the language in which locals place things. Philips, founded here in 1891, made the city: the centre was rebuilt after wartime destruction, Strijp-S is the old Philips works turned creative district, the High Tech Campus lies to the south, and the University of Technology stands east of the centre. The region known as Brainport — a partnership of 21 municipalities rather than a CBS statistical unit — held about 816,000 people in early 2025, with Veldhoven, home of ASML, and Helmond as municipalities of their own. The Design Academy and Dutch Design Week each October are the city's other face, and PSV its football club. There is no metro or tram, buses and bicycles carry the traffic, and the airport is the second-busiest in the country by passengers. Addresses give street, number and a postcode of four digits and two letters. Newcomers most often go wrong by taking Eindhoven for a factory town, when it is the technology and design centre of the Netherlands.",
    layout:
      "The centre surrounds the station and the market square, with the pedestrian streets and shops south of the station; Strijp-S lies about 2 km north-west in the old factory district, and the Evoluon (the flying-saucer former science museum) to the west; the Van Abbemuseum stands by the canal south of the centre, the Philips Museum in the centre and the PSV stadium north-west of it. The High Tech Campus lies in the south. Nuenen is about 8 km north-east, the airport about 8 km west.",
    gettingAround:
      "Eindhoven Airport (EIN), about 8 km from the centre, is the second-busiest airport in the Netherlands by passengers, dominated by Ryanair, Transavia and other leisure carriers, with a bus of about 20 minutes to the station. Intercity trains take about 1 hour 20 from Amsterdam, about 50 minutes from Utrecht and about 1 hour from Maastricht. Buses are frequent, the centre is walkable and a hire bicycle is easiest; Nuenen is a bus ride. The climate is temperate maritime.",
    culture:
      "Dutch is universal and almost everyone speaks English. During Design Week (October) Strijp-S and the whole city fill with exhibitions and lodging is tight. The stadium area is lively on PSV match days. The weekend market and restaurants of Strijp-S are local life. Eindhoven calls itself the city of light and holds the GLOW light festival in November. Tipping is optional.",
    seeAndDo:
      "The Strijp-S creative quarter (weekend market, restaurants, studios); the Van Abbemuseum; the Philips Museum; the Evoluon; the PSV museum and stadium; the DAF museum; the 'Blob' building in the centre; Van Gogh's Nuenen and the glowing Van Gogh–Roosegaarde cycle path; Dutch Design Week (October) and GLOW (November).",
    whenAndTips:
      "May–September is most comfortable, with Design Week in October and GLOW in November the most rewarding but crowded. A day for the city. The gateway to the southern Netherlands via its airport, linked with Maastricht and 's-Hertogenbosch.",
  },
  arnhem: {
    // identity sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   阿纳姆市镇 2026-01-01 = 171,822，较 2021 年的约 16.2 万增长约 6%。
    identity:
      "Arnhem is the capital of Gelderland, on the north bank of the Nederrijn, with about 172,000 people (1 January 2026). In September 1944 British paratroopers fought for the Rhine bridge here in Operation Market Garden — the 'bridge too far' — commemorated by the John Frost Bridge and the Airborne Museum at Oosterbeek. The Netherlands Open Air Museum north of the city gathers old houses and windmills from across the country, Burgers' Zoo is known for its ecosystem halls and Sonsbeek is an English landscape park within the city; in the Hoge Veluwe National Park to the north stands the Kröller-Müller Museum, with the second-largest collection of Van Gogh's work by number of pieces. Arnhem is the only Dutch city with trolleybuses.",
    // howItWorks sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   同上。
    howItWorks:
      "Arnhem is the capital of Gelderland province, a municipality of about 102 km² with about 172,000 people as of 1 January 2026, governed by an elected council with a mayor appointed by the Crown, and police belonging to the state. The city lies on the north bank of the Lower Rhine, the airborne troops of Operation Market Garden fought for its bridge in 1944 and the rebuilt bridge is named for John Frost, with the Airborne Museum at Oosterbeek to the west; Sonsbeek park lies on the north side of the centre, Burgers' Zoo and the Open Air Museum to the north, the Hoge Veluwe national park and the Kröller-Müller museum about 15 km north-west, the city's trolleybuses the only ones in the Netherlands, the German border about 15 km east and Nijmegen 20 km south. Newcomers most often go wrong by taking Arnhem for a war memorial, when it is a provincial capital ringed by parkland and known for its fashion school.",
    layout:
      "The centre climbs the slope on the north bank of the Rhine, with the central station in the north-west, the shopping district in the middle and the John Frost Bridge crossing the river to the south-east; Sonsbeek Park lies north of the centre, with the Open Air Museum and Burgers' Zoo about 3 km further north. Oosterbeek (the Airborne Museum, the British war cemetery) lies about 5 km west. The Hoge Veluwe National Park is about 15 km north (Otterlo entrance), with the Kröller-Müller Museum inside it.",
    gettingAround:
      "Arnhem has no airport with scheduled flights; the nearest are Schiphol (about 100 km) and Eindhoven. Intercity trains take about 1 hour 10 from Amsterdam and about 35 minutes from Utrecht, and ICE trains about 1.5 hours from Cologne. The city has trolleybuses and buses, and the centre is walkable; the trolleybus reaches the Open Air Museum and the zoo, the Kröller-Müller is reached by train to Ede or Arnhem plus bus, and inside the park you ride the free white bicycles. The climate is temperate maritime.",
    culture:
      "Dutch is universal and English widespread. The Airborne Museum and the cemetery are memorial sites — keep quiet; commemorations are held each September. The Open Air Museum demonstrates old crafts and the zoo's halls follow set routes. Allow half a day for the sculpture garden and Van Goghs of the Kröller-Müller, with the park entry charged separately. Tipping is optional.",
    seeAndDo:
      "The John Frost Bridge and the airborne memorials; the Airborne Museum and the British cemetery at Oosterbeek; the Netherlands Open Air Museum; Burgers' Zoo; Sonsbeek Park; the white bicycles of the Hoge Veluwe National Park; the Kröller-Müller Museum (Van Gogh, the sculpture garden); the Rhine riverside path; the tower of the Eusebius church in the centre.",
    whenAndTips:
      "May–September is most comfortable, with the commemorations in September and the Veluwe forests in autumn colour. Half a day to a day for the city, a day for the park and the museum. A day trip from Amsterdam works.",
  },
  giethoorn: {
    identity:
      "Giethoorn lies in the wetlands of north-western Overijssel, with about 2,800 people, and is a famous water village in the Netherlands, called the 'Venice of the North': the old village has no roads, a canal threads between thatched farmhouses, 176 wooden bridges link the banks, and transport is by small boat and 'whisper boat' (quiet electric launches). It began with medieval peat digging, whose channels and lakes became today's landscape; the village adjoins the Weerribben-Wieden National Park, the largest lowland peat bog in the Netherlands, and the canals can be skated when they freeze in winter. In 2015 it was chosen for the international edition of Monopoly.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Giethoorn (village ~2,800 in Steenwijkerland municipality, Overijssel; 176 bridges; car-free old core, boats only; Weerribben-Wieden peat landscape; ~1 million visitors/yr; whisper boats; Zwolle ~30 km; no rail; independent municipality until 1973)
    howItWorks:
      "Giethoorn is not a town but a village of about 2,800 people in the municipality of Steenwijkerland in Overijssel, a municipality of its own until 1973 and now run by Steenwijkerland's council with a mayor appointed by the Crown. The old village runs along one canal, thatched farmhouses each on its own islet joined by 176 wooden bridges, the old core without roads and reached only on foot, by bicycle or by boat, and the lakes and wetlands left by peat digging form the Weerribben-Wieden national park; about a million visitors a year pour in, the electric 'whisper boats' are the way to see it, Zwolle lies about 30 km south, there is no railway, and the bus comes from Steenwijk. Newcomers most often go wrong by assuming the whole of Giethoorn is car-free, when only the old core is, and the newer quarters and car parks lie along the road outside.",
    layout:
      "The village runs along a north–south main canal (the Dorpsgracht) and the parallel footpath (the Binnenpad), with the thatched farms and little bridges on both banks and the museum and restaurants midway along; the southern end opens onto the Bovenwijde lake. Cars stop at car parks outside the village. Steenwijk, about 5 km north-west, is the nearest station; Zwolle lies about 35 km south.",
    gettingAround:
      "Giethoorn has no airport with scheduled flights; from Amsterdam take the train to Steenwijk in about 1.5 hours (via Zwolle) and then the 70 bus for about 15 minutes; by car it is about 1.5 hours from Amsterdam. In the village walk, cycle or hire a boat (no licence needed for whisper boats) — the water is the best way to see it, and guided tour boats run in high season. The climate is temperate maritime, with occasional winter ice for skating.",
    culture:
      "Dutch is universal, English widespread, and Chinese signage common in high season. The farmhouses are mostly private homes — stay out of gardens and don't photograph through windows; the canals are narrow, so keep right, go slowly and mind the bridges. Crowds are heavy in high season (July–August and weekends), and early morning and evening are quietest. Restaurants serve Dutch pancakes and local eel. Tipping is optional.",
    seeAndDo:
      "A walk along the Binnenpad past the thatched farms and bridges; a whisper boat or rowing boat through the village; the village museum ('t Olde Maat Uus); boating on the Bovenwijde; the wetland trails and kayaking of Weerribben-Wieden National Park; skating on the canals in a freezing winter; the Blauwe Bos woods nearby.",
    whenAndTips:
      "April–October is best, with fewer people in May–June and September; July–August is packed. Half a day to a day, or a night to see the empty village at dawn. A day trip from Amsterdam works.",
  },
  middelburg: {
    // identity sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   米德尔堡市镇 2026-01-01 = 50,439。
    identity:
      "Middelburg is the capital of Zeeland, in the middle of the former island of Walcheren, with about 50,000 people (1 January 2026). In the seventeenth century it housed the Dutch East India Company's chamber second only to Amsterdam, and merchants' houses and the fifteenth-century Gothic town hall recall that prosperity; the 'Lange Jan' tower of the abbey complex is the city's emblem, and the town's spectacle-makers (Lipperhey, Janssen) of the late sixteenth and early seventeenth centuries are linked to the invention of the telescope and microscope. Bombing on 17 May 1940 destroyed about a third of the old town, rebuilt after the war on the old lines. The old harbour of Veere, the beaches of Domburg and the Oosterschelde storm-surge barrier, the centrepiece of the Delta Works, lie close by.",
    // howItWorks sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   同上。
    howItWorks:
      "Middelburg is the capital of Zeeland province, on the island of Walcheren, a municipality of about 53 km² with about 50,000 people as of 1 January 2026, governed by an elected council with a mayor appointed by the Crown, and police belonging to the state. The old town is ringed by canals, the abbey and the 'Lange Jan' tower at its centre with the provincial government housed in the abbey, the Gothic town hall on the market square, in the seventeenth century the second chamber of the East India Company after Amsterdam, the telescope and microscope said to have come from its spectacle-makers, and the bombing of 1940 destroyed a third of the old town, since rebuilt; the port of Vlissingen 6 km south is another municipality, the beaches of Domburg lie 12 km west, the Delta Works ring the island, and the train reaches Rotterdam in about an hour and a quarter. Newcomers most often go wrong by taking Middelburg for a seaside town, when it lies in the middle of the island and the sea is several municipalities away.",
    layout:
      "The old town is ringed by canals and star-shaped ramparts, with the market square and the town hall in the centre and the abbey complex (the Lange Jan, the Zeeuws Museum, the provincial government) east of the square; old warehouses and merchants' houses line the canals of the old harbour. The station lies across the canal on the south side of the old town. Veere is about 7 km north-east, Domburg and its beaches about 15 km north-west, the Oosterschelde barrier about 25 km north and Vlissingen about 8 km south.",
    gettingAround:
      "Middelburg has no airport with scheduled flights; from Schiphol the direct intercity train takes about 2.5 hours, from Rotterdam about 1.5. The old town is walkable; cycling is best for Veere and Domburg (Zeeland's paths are flat), and the barrier is reached by bus or car. The climate is temperate maritime, windy and sunny.",
    culture:
      "Dutch is universal, English widespread, and the Zeeland dialect survives. Thursday is the traditional market day, and summer brings 'ringrijden' (tilting at rings on horseback). The abbey and the Lange Jan can be climbed; the Zeeuws Museum shows Zeeland costume and tapestries. Zeeland is known for mussels, oysters and lobster (mussel season July–April). Tipping is optional.",
    seeAndDo:
      "The abbey complex and the climb up the Lange Jan; the town hall; the Zeeuws Museum; a walk along the canals and old warehouses; the old harbour and great church of Veere; Domburg's beach and dunes; the Oosterschelde storm-surge barrier and the Neeltje Jans delta park; Zeeland mussels; summer ring-riding.",
    whenAndTips:
      "May–September is most comfortable, with the beaches lively in summer; winter is windy and quiet. Half a day for the old town, half a day to a day for Veere and the coast. The hub of a Zeeland delta route.",
  },
  alkmaar: {
    // identity sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   阿尔克马尔市镇 2026-01-01 = 113,196。**原文两段年份不一致**（identity 标 2022 年 11.3 万、howItWorks 标 2023 年 11 万），四舍五入结果也不同，已统一。
    identity:
      "Alkmaar lies in North Holland about 40 km north of Amsterdam, with about 113,000 people (1 January 2026), and is famous for its cheese market: from the first Friday of April to the first Friday of September, every Friday morning on the square before the Waag, carriers in white with coloured hats bear cheeses on stretchers and trade them in the manner of centuries past — a tradition going back to the weighing rights of 1365. In 1573 Alkmaar repulsed the Spanish siege, a turning point of the Dutch Revolt, and 'victory begins at Alkmaar' became a saying. The old town has nearly 400 listed buildings ringed by canals; the beaches and dunes of Egmond and Bergen lie about 10 km west.",
    // howItWorks sources: 荷兰中央统计局（CBS）《Voorlopige bevolkingsaantallen per gemeente, 1-1-2026》（2026-03-10 发布，BRP 个人记录基本库在册居民，1 月 1 日基准的临时数）。子代理下载官方 xlsx 逐条核对，**级别 1**。https://www.cbs.nl/nl-nl/maatwerk/2026/11/voorlopige-bevolkingsaantallen-per-gemeente-1-1-2026
    //   发布节奏：**每年 3 月上旬**发布当年 1 月 1 日的临时市镇人口数；下一期（1-1-2027）预计 2027-03。
    //   已核实 2025、2026 两年荷兰市镇数量均为 342 个、**无市镇合并**，与旧年份的数字可比。
    //   **荷兰没有 CBS 法定的「都会区」人口口径**：MRA（阿姆斯特丹都会区）、MRDH（鹿特丹—海牙都会区）、Brainport（脑港）都是**地方政府间的规划/治理联合体**，不是统计单元。
    //   同上。
    howItWorks:
      "Alkmaar is a municipality of North Holland, about 117 km² with about 113,000 people as of 1 January 2026, governed by an elected council with a mayor appointed by the Crown, and police belonging to the state. The old town is ringed by canals, the cheese market held on Friday mornings from April to September before the Waag of 1582 is the city's signature scene, the Grote Kerk lies to the west, nearly four hundred listed buildings are scattered through the streets, and the Spanish siege of 1573 failed, making 'victory begins at Alkmaar' a watchword of the Dutch revolt; the beaches of Egmond and Bergen lie about 8 km west in another municipality, the train reaches Amsterdam in about 30 minutes, and AZ is its football club. Newcomers most often go wrong by taking Alkmaar for a cheese market that exists only on Friday mornings, when it is a city of 113,000 and the market only a few dozen mornings in the year.",
    layout:
      "The old town fills an oval ringed by canals: the Waag and the cheese market are on the Waagplein on the east side, the Grote Sint-Laurenskerk at the western end, the Langestraat shopping street joins the two, and canals (the Oudegracht and others) and old houses fill the middle. The station lies north-west of the old town. Egmond's beach is about 10 km west, Bergen to the north-west and the Zaanse Schans windmills about 25 km south.",
    gettingAround:
      "Alkmaar has no airport with scheduled flights; Schiphol is about 40 km away. Trains take about 35 minutes from Amsterdam Centraal and about 45 from Schiphol. The old town is walkable, a hire bicycle reaches the beach in about 30 minutes, and canal boats run. The climate is temperate maritime.",
    culture:
      "Dutch is universal and English widespread. The cheese market runs Fridays 10:00–12:30 — arrive early for a spot on the square, and the cheese museum beside it explains the trading; market days are very crowded. The church and the Waag are historic buildings. Dutch cheeses (Gouda, Edam, old Alkmaar) and herring are the local tastes. Tipping is optional.",
    seeAndDo:
      "The Friday cheese market, the Waag and the cheese museum; the Grote Sint-Laurenskerk (the organ); a canal cruise; the National Beer Museum and the Beatles Museum (Lennon and Alkmaar) in the old town; the city museum; Egmond's beach and lighthouse; the artists' village and woods of Bergen; a day at the Zaanse Schans.",
    whenAndTips:
      "Fridays from April to September for the cheese market; summer pairs with the beach. Half a day to a day. A very easy day trip from Amsterdam.",
  },
};
