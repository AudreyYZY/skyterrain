import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Malaysia ============
  "malaysia-overview": {
    // identity sources: DOSM《Current Population Estimates, Malaysia, 2025》：34.2 百万（公民 + 非公民）。https://www.dosm.gov.my/uploads/release-content/file_20250821151339.pdf
    //   原文 3640 万比官方口径高出约 220 万。核实日 2026-09-07，来源级别 1
    identity:
      "Malaysia is made up of Peninsular Malaysia (West Malaysia) and the states of Sabah and Sarawak in northern Borneo (East Malaysia), covering about 330,000 km² with an estimated population of about 34.2 million in 2025 (Department of Statistics Malaysia); its capital is Kuala Lumpur, the official language is Malay, and its currency is the Malaysian ringgit (MYR).",
    layout:
      "The country divides roughly into: the Centre (Kuala Lumpur, the political and economic hub), the Northern Peninsula (George Town/Penang, Ipoh, Langkawi, Kota Bharu), the Southern Peninsula (Johor Bahru, Malacca, Kuantan), Sabah (Kota Kinabalu, Sandakan — Mount Kinabalu and rainforest reserves) and Sarawak (Kuching, Miri — Gunung Mulu and the Niah Caves).",
    gettingAround:
      "Domestic flights are hubbed at Kuala Lumpur International Airport, reaching major cities across the peninsula and East Malaysia; the peninsula has a well-developed rail network and long-distance bus coverage between towns; interior East Malaysia relies more on roads and river transport, with some reserves reachable only by boat or hired car. Visa-free arrangements for short-term visitors vary by nationality — check Malaysia's official current announcements.",
    culture:
      "The official language is Malay, with high English proficiency; Mandarin, Tamil and other languages are widely used within their respective communities. Malaysia is a multiethnic, multireligious society (Malay, Chinese, Indian and the indigenous peoples of East Malaysia), with Islam as the official religion. Visiting a mosque generally requires modest dress, and women may need to wear a robe (usually provided at the entrance); non-Muslims can typically visit outside prayer times. During Ramadan, avoid eating or drinking in front of Muslims in public. Restaurant bills often already include a service charge, and tipping is not a mandatory tradition. The voltage is 230V, with British-style three-pin plugs.",
    seeAndDo:
      "Natural landforms: Mount Kinabalu, the Pinnacles and caves of Gunung Mulu National Park, Langkawi Geopark, diving at Sipadan Island. History and culture: the UNESCO-listed old towns of Malacca and George Town, Batu Caves. Rainforest ecology: primary rainforest at Danum Valley and Maliau Basin, wildlife-watching on the Kinabatangan River.",
    whenAndTips:
      "Lying near the equator, Malaysia is hot and humid year-round; the peninsula's east coast has its wet season from November to February (some islands close seasonally), while the west coast is comparatively drier; Sabah and Sarawak see rainfall more evenly distributed through the year — check seasonal conditions for your specific destination before travelling.",
  },
  "kuala-lumpur": {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   W.P. Kuala Lumpur 2025 = 约 207.4 万。**原文的「都会区约720万」既不是 DOSM 口径、也与同条目 howItWorks 里的「巴生谷约880万」互相矛盾** —— 一个条目里两个「都会区」数字差 160 万。改用有官方数字的联邦直辖区口径。
    identity:
      "Kuala Lumpur is the capital of Malaysia, with a Federal Territory population of about 2.07 million (2025, Department of Statistics Malaysia), at the confluence of the Klang and Gombak rivers, and the country's political, economic and cultural centre.",
    // howItWorks sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   同上。巴生谷不是 DOSM 的法定统计口径，如实写成「没有官方统计口径 + 非官方估计区间」，而不是挑一个数字装成官方数。
    howItWorks:
      "Kuala Lumpur has been a Federal Territory since 1974, outside Selangor and under the federal government directly; the Kuala Lumpur City Hall (DBKL) that runs it has no elected council, and its mayor is appointed by the minister for the Federal Territories — Malaysia suspended local elections in 1965 and abolished them in 1976, so every council in the country is appointed. The territory covers about 243 km² with about 2.07 million people in 2025, while the Klang Valley around it has no official population series — unofficial estimates range roughly 7 to 9 million, and Petaling Jaya, Shah Alam and Subang Jaya are cities in Selangor with councils of their own; the federal administration moved to Putrajaya to the south in 1999. The city has two centres, the old town around Merdeka Square and Petaling Street and the newer one at the Petronas Towers and Bukit Bintang. LRT, MRT, monorail and commuter rail run on one Touch 'n Go card, yet daily life still depends heavily on the car. Newcomers most often go wrong by taking the Federal Territory for the whole of Kuala Lumpur, when most people live beyond its boundary in Selangor.",
    layout:
      "The city centre is anchored by the Petronas Twin Towers and the Bukit Bintang shopping district; Merdeka Square is ringed by colonial-era buildings, Brickfields is the well-known Indian business district, and Petaling Street is the heart of the Chinese community.",
    gettingAround:
      "Kuala Lumpur International Airport is about 45 km from the city centre; the KLIA Ekspres train takes about 28 minutes direct to downtown. The city's LRT, monorail and MRT network covers major attractions, and Grab ride-hailing is widely used.",
    culture:
      "The official language is Malay; English, Mandarin and Tamil are all widely used within their respective communities. Kuala Lumpur blends Malay, Chinese and Indian cultures, with an extremely diverse food scene. Restaurant bills typically already include service, and tipping is not mandatory.",
    seeAndDo:
      "The Petronas Twin Towers and Skybridge; Merdeka Square and the Sultan Abdul Samad Building; Batu Caves; Petaling Street Chinatown; Brickfields (Little India).",
    whenAndTips:
      "Hot and humid year-round, with temperatures typically 24–33°C; rainfall is somewhat heavier from November to February, so pack a light rain jacket; malls and metro stations are heavily air-conditioned, so a light layer is useful too.",
  },
  "george-town": {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   MBPP 辖区 = 东北区（Timur Laut，56.6 万）+ 西南区（Barat Daya，25.0 万）两县合计 = 2025 年约 81.6 万。
    identity:
      "George Town is the capital of Penang state, with a city population of about 816,000 (2025, Department of Statistics Malaysia, Penang Island City Council area) and a metropolitan area of over 2.84 million, on the northeast tip of Penang Island; its old town was inscribed on the UNESCO World Heritage List in 2008 together with Malacca.",
    // howItWorks sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   同上。
    howItWorks:
      "George Town is the capital of Penang state, and since 2015 the Penang Island City Council (MBPP) has governed the whole island, with Seberang Perai across the strait under a council of its own — Malaysian councils have not been elected since 1976, their mayors and councillors are appointed by the state, and police, schools and trunk roads belong to state and federal government. The city had about 816,000 people in 2025; the George Town Conurbation is not an official statistical geography and the 2.84 million figure dates from 2020. It has three layers: the World Heritage core of 2008, a port town where Chinese, Indian and Malay streets stand side by side; the newer high-rise seafront of Gurney Drive and Tanjung Tokong to the north; and the Bayan Lepas free industrial zone of the electronics industry to the south. Two bridges and a ferry join the mainland, and Rapid Penang buses cover the island. Hokkien is the everyday language of the old town. Newcomers most often go wrong by equating George Town with its old streets, when it is a city covering the entire island.",
    layout:
      "The historic core covers about 109 ha, its streets lined with shophouses from the 19th and early 20th centuries; the Clan Jetties (a Chinese stilt-house settlement), Little India and Mosque Street's multi-faith buildings are interwoven throughout.",
    gettingAround:
      "Penang International Airport is about 18 km from the city centre, with an airport bus taking about an hour into town. George Town's old-town streets are narrow, making walking or cycling ideal for exploring the core area; buses and ride-hailing are also available.",
    culture:
      "The official language is Malay, with high English proficiency. George Town's old town contains 37 religious buildings — mosques, Chinese temples, Hindu temples and churches — making it a representative city for Malaysia's multi-faith coexistence. Restaurant bills often already include service.",
    seeAndDo:
      "George Town's old-town murals and shophouse architecture; the Clan Jetties stilt-house settlement; the Penang Hill funicular; the Cheong Fatt Tze Mansion; Mosque Street's cluster of multi-faith buildings.",
    whenAndTips:
      "December to February is comparatively cool and dry, an ideal season for exploring the old town; the old-town streets are narrow, so comfortable walking shoes are recommended.",
  },
  "johor-bahru": {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   **原文的「约50万」来源不明**：既不等于 MBJB 辖区（2020 年普查 858,118），也不等于新山县（2025 年约 181.4 万）。改用有出处的普查数并写明它不逐年更新。
    identity:
      "Johor Bahru is the capital of Johor state, with a city-council population of about 858,000 (2020 census; DOSM does not update council areas annually), on the north shore of the Johor Strait facing Singapore across the water, and the southernmost city on the Malay Peninsula.",
    // howItWorks sources: RTS Link：截至 2026-09 仍以 2027-01 通车为目标，兀兰北站已完工进入测试（1—2 级）。到期回来确认。
    howItWorks:
      "Johor Bahru is the capital of Johor, governed by the Johor Bahru City Council (MBJB), whose mayor and councillors are appointed by the state — Malaysian councils have not been elected since 1976. The city covers about 373 km² with about 858,000 people at the 2020 census (council area; no annual official update since), the most populous state capital in Malaysia, and its district held about 1.81 million in 2025 (the district also covers the Iskandar Puteri and Pasir Gudang council areas); it is the core of the Iskandar Malaysia economic zone, and Iskandar Puteri to the west is another city with a city council of its own. Daily life is defined by Singapore: the Causeway of 1923 and the Second Link carry heavy commuter traffic each day, and the RTS Link rail line between the two is still targeted to open in January 2027, with the Singapore-side station complete and under testing as of September 2026. The old town lies around Jalan Wong Ah Fook and the Sultan Abu Bakar Mosque, and newer business districts are scattered at Danga Bay, Medini and elsewhere. The city is heavily car-dependent and sprawling. Newcomers most often go wrong by taking Johor Bahru for a suburb of Singapore, when it is a state capital with a centre and rhythm of its own.",
    layout:
      "The city centre runs along the Johor Strait; the Johor–Singapore Causeway is an important land crossing to Singapore, and the downtown commercial area is closely tied to commuter traffic from Singapore.",
    gettingAround:
      "Senai International Airport is about 18 km in a straight line from the city centre; the Causeway and the Second Link bridge connect to Singapore, with cross-border buses and private cars frequent, and the checkpoints often congested during commuter rush hours.",
    culture:
      "The official language is Malay; given its proximity to Singapore, English and Mandarin are widely used in business settings. Johor Bahru is the seat of the Johor royal family, and buildings such as the Istana Besar reflect its royal cultural heritage. Restaurant bills often already include service.",
    seeAndDo:
      "The Sultan Abu Bakar Royal Museum; Johor Bahru's central market; scenery along the Johor Strait; Legoland Malaysia (on the outskirts).",
    whenAndTips:
      "Hot and humid year-round; as a city bordering Singapore, prices are comparatively affordable, and it is a common extension destination for travellers combining a Singapore trip.",
  },
  "malacca-city": {
    // identity sources（2026-09-15 核实，update）: DOSM Current Population Estimates by Administrative District 2025（2025-10-02，1 级）；原「老城核心区约 5 万」查无官方口径；下一期约 2026-10
    identity:
      "Malacca's rise as a leading 15th-century Southeast Asian port came down to a precise piece of geography — in 1402, the exiled Palembang prince Parameswara chose a harbour commanding the narrowest stretch of the Strait of Malacca, the channel that ships had to pass through moving between the Indian Ocean and the South China Sea, and the Malacca Sultanate quickly grew into the transshipment hub linking China, India and the Arab world. Malacca City is the capital of Malacca state, and Melaka Tengah district, which largely overlaps the city council area and is larger than the historic core, had about 633,000 people in 2025 (Department of Statistics Malaysia), on the east shore of the Strait of Malacca, and its old town was inscribed on the UNESCO World Heritage List in 2008 together with George Town.",
    // howItWorks sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   Melaka Tengah 2025 = 约 63.3 万。identity 段的「老城核心区约5万」不是统计口径、查无年度数字，保留原样但不作为城市人口。
    howItWorks:
      "Malacca City is the capital of Malacca state, governed by the Melaka Historic City Council (MBMB), whose mayor and councillors are appointed by the state — Malaysian councils have not been elected since 1976. The city covers about 277 km² with about 633,000 people in 2025 (Melaka Tengah district), and the state is among the smallest in Malaysia, so the city is very nearly its heart. The old town lies at the mouth of the Malacca River: the Dutch Square and St Paul's Hill on the east bank, the Chinese quarter around Jonker Street on the west, with Portuguese, Dutch and British buildings layered in the same streets, inscribed as World Heritage with George Town in 2008. Peranakan and Portuguese-descended communities live alongside Malays and Indians. There is no railway in the city, the nearest station is at Tampin 38 km away, and travel depends on cars and buses. Newcomers most often go wrong by treating Malacca as old streets to be walked in a day, when beyond them lies an expanding modern city.",
    layout:
      "The historic core is centred on Dutch Square, St Paul's Hill and Jonker Street, preserving layered architectural heritage from the Portuguese, Dutch and British colonial periods along with Peranakan (Baba-Nyonya) Chinese culture.",
    gettingAround:
      "Malacca Airport currently has no domestic scheduled flights, only a small number of international routes (such as to Singapore); most travellers arrive by road from Kuala Lumpur, about a 2-hour drive. The historic core is walkable, and trishaws are a local mode of transport.",
    culture:
      "The official language is Malay. Malacca was historically an important port linking East–West trade; long coexistence among diverse communities produced the distinctive Peranakan (Baba-Nyonya) culture, blending Chinese and Malay traditions. Restaurant bills often already include service.",
    seeAndDo:
      "Dutch Square (the Stadthuys); the ruins of St Paul's Hill and the Porta de Santiago; Jonker Street's cultural quarter; the Baba-Nyonya Heritage Museum; a night river cruise on the Malacca River.",
    whenAndTips:
      "Hot and humid year-round; the old town's sights are concentrated, so plan one to two days on foot; Jonker Street's night market and the riverside lights are especially lively after dark.",
  },
  ipoh: {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   Kinta District 2025 = 约 92.7 万。怡保市议会（MBI）辖区本身**无 DOSM 年度更新**，最后可核实是 2020 年普查 759,952。正文写明县 ≠ 市。
    identity:
      "Ipoh is the capital of Perak state, with a Kinta district population of about 927,000 (2025, Department of Statistics Malaysia; the district also covers the separately administered Batu Gajah council area, so it is larger than the city itself), in the Kinta Valley; it grew rapidly from tin mining in the late 19th century and is today known for its colonial architecture and food.",
    // howItWorks sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   同上。
    howItWorks:
      "Ipoh is the capital of Perak, governed by the Ipoh City Council (MBI), whose mayor and councillors are appointed by the state — Malaysian councils have not been elected since 1976. With about 760,000 people at the 2020 census (council area, no annual update since; the wider Kinta district was about 927,000 in 2025) it is among the most populous cities in Malaysia. The Kinta River divides it: the Old Town on the west bank is the colonial-era town built in the tin boom of the 1880s, with Concubine Lane and the railway station, while the New Town on the east bank grew from the 1930s and is today's commercial and residential centre. Limestone hills ring the city, with cave temples such as Sam Poh Tong and Kek Lok Tong on its edge. Cantonese is the everyday language of the Chinese community, and white coffee originated here. The ETS train reaches Kuala Lumpur in about 2.5 hours, and travel within the city depends on cars. Newcomers most often go wrong by picturing Ipoh as a declining mining town, when since the tin industry collapsed in the 1970s it has become a city known for food and caves.",
    layout:
      "The old town preserves extensive British colonial-era buildings and Chinese shophouses, while the new town is a modern commercial and residential district; several limestone caves lie around the Kinta Valley.",
    gettingAround:
      "Sultan Azlan Shah Airport is about 15 km from the city centre with limited flight options; driving or taking a long-distance bus along the North–South Expressway from Kuala Lumpur takes about 2 to 2.5 hours, and trains are also available.",
    culture:
      "The official language is Malay, with Cantonese widely used in the local Chinese community. Ipoh grew prosperous through the tin-mining boom; colonial-era buildings and long-established tea shops are city landmarks, and it is regarded as one of Malaysia's food capitals. Restaurant bills often already include service.",
    seeAndDo:
      "Ipoh old town's mural street; exploring the Gua Tempurung cave system; Ipoh railway station's colonial architecture; the limestone hill scenery of the Kinta Valley; Ipoh white coffee and hor fun noodles.",
    whenAndTips:
      "Hot and humid year-round; a good plan is half a day at Gua Tempurung and half a day strolling the old town sampling local food.",
  },
  "kota-kinabalu": {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   Kota Kinabalu 县 2025 = 约 55.2 万。**原文的 61 万卡在市区（50 万）与「大亚庇」（73 万）中间，两个都对不上**，来源不明。
    identity:
      "Kota Kinabalu is the capital of Sabah, with a population of about 552,000 (2025, Department of Statistics Malaysia, Kota Kinabalu district / DBKK area), on the northwest coast of Borneo, and the core gateway for exploring Mount Kinabalu and Sabah's islands.",
    // howItWorks sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   「大亚庇」不是 DOSM 口径，73.1 万停在 2020 年、无年度续更渠道，如实写明。
    howItWorks:
      "Kota Kinabalu is the capital of Sabah, governed by the Kota Kinabalu City Hall (DBKK), whose mayor is appointed by the state — Malaysian councils have not been elected since 1976. The city had about 552,000 people in 2025; Greater Kota Kinabalu, with Penampang, Putatan and Tuaran, is not an official statistical geography and its 731,000 figure dates from 2020. Almost destroyed in the Second World War, it was rebuilt and renamed from Jesselton in 1967; the centre lies on the waterfront around Gaya Street, the business district stands on reclaimed land, and new development runs north to Likas and Sepanggar. Under the 1963 agreement Sabah keeps its own immigration control, so entry to Sabah is stamped separately, even from Peninsular Malaysia. Kadazan-Dusun, Bajau, Chinese and Malay communities make up the city. There is no rail transit. Newcomers most often go wrong by taking Kota Kinabalu for a staging post for Mount Kinabalu, which lies 90 km away, when the city is the capital of a state with a high degree of autonomy.",
    layout:
      "The city centre runs along the coastline; Tanjung Aru Beach is known for its sunset views, and Gaya Street is home to the city's well-known weekend market.",
    gettingAround:
      "Kota Kinabalu International Airport is about 7 km by road from the city centre, Sabah's main air hub; taxis and Grab within the city reach nearby sights easily, while reaching Mount Kinabalu requires driving or hiring a car, about 2 hours.",
    culture:
      "The official language is Malay; the local Kadazan-Dusun and other indigenous communities retain distinctive traditional culture and festivals. Restaurant bills often already include service, and seafood is a local specialty.",
    seeAndDo:
      "Sunset at Tanjung Aru Beach; Gaya Street weekend market; snorkelling on the islands of Tunku Abdul Rahman Marine Park; a day trip to Kinabalu Park.",
    whenAndTips:
      "March–August sees comparatively less rainfall, a better season for climbing Mount Kinabalu and island activities; climbing Mount Kinabalu requires booking a permit and guide in advance.",
  },
  kuching: {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   Kuching 县（DBKU 北岸 + MBKS 南岸辖区）2025 = 约 62.7 万。
    identity:
      "Kuching is the capital of Sarawak, with a population of about 627,000 (2025, Department of Statistics Malaysia, Kuching district), on the banks of the Sarawak River, and an important gateway for exploring Gunung Mulu National Park and the Niah Caves.",
    // howItWorks sources: 「1988 年封市时分设 DBKU 与 MBKS」与「马来西亚市议会 1976 年起不再民选」**均核实属实**。2026-09-12 核。
    howItWorks:
      "Kuching is the capital of Sarawak, and when it became a city in 1988 the Sarawak River split it between two authorities: Kuching North City Hall (DBKU) on the north bank and Kuching South City Council (MBKS) on the south, both headed by appointees of the state government — Malaysian councils have not been elected since 1976. The city had about 627,000 people in 2025; Greater Kuching is not an official statistical geography and its 789,000 figure is not annually updated. The south bank holds the old bazaar and the waterfront and is where the Chinese quarters lie; the north bank holds the Malay kampungs and the new state administrative centre at Petra Jaya, with the state offices and assembly. The city's form comes from the Brooke family, the 'White Rajahs' who ruled Sarawak from 1841 to 1946. Sarawak keeps its own immigration control, and entry is stamped separately. Chinese, Malay, Iban and Bidayuh communities each form a large share, and intermarriage is common. There is no railway. Newcomers most often go wrong by taking Kuching for an ordinary Malaysian city, when it is the capital of a highly autonomous state, run by two councils on two banks.",
    layout:
      "The Kuching Waterfront runs along the Sarawak River; the Astana on the opposite bank is a historic landmark, and the old town preserves Chinese shophouses and colonial-era buildings.",
    gettingAround:
      "Kuching International Airport is about 11 km by road from the city centre; reaching Gunung Mulu National Park requires a connecting domestic flight via Miri or directly to Mulu Airport, while the Niah Caves require driving toward Miri.",
    culture:
      "The official language is Malay; Sarawak is one of Malaysia's most ethnically diverse states, and the culture of indigenous groups such as the Dayak and Iban is well preserved locally. Restaurant bills often already include service, and Sarawak laksa is a local specialty.",
    seeAndDo:
      "The Kuching Waterfront and the Astana; the Sarawak Museum; hiking to the sea stacks of Bako National Park; the weekend night market at Kuching's old bazaar.",
    whenAndTips:
      "Hot and humid year-round, with rainfall relatively evenly distributed; plan domestic flights and a guide well in advance for interior destinations such as Gunung Mulu and Niah.",
  },
  "kota-bharu": {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   Kota Bharu 县 2025 = 约 59.0 万。
    identity:
      "Kota Bharu is the capital of Kelantan state, with a population of about 590,000 (2025, Department of Statistics Malaysia, Kota Bharu district), at the mouth of the Kelantan River, and one of the cities in northeastern Malaysia where traditional Malay culture is best preserved.",
    // howItWorks sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   同上。
    howItWorks:
      "Kota Bharu is the capital of Kelantan, governed by the Kota Bharu municipal council, whose mayor and councillors are appointed by the state — Malaysian councils have not been elected since 1976; the district had about 590,000 people in 2025, more than nine in ten Malay and overwhelmingly Muslim. The city was founded as the new state capital by the Sultan in 1844, its name meaning 'new city', the centre lies on the east bank of the Kelantan River, Siti Khadijah market is the largest in the country and almost entirely run by women, the Istana Jahar and the state museum stand beside it, and in 2005 the state branded it the 'Islamic City'; the Kelantanese dialect differs sharply from Malay elsewhere on the peninsula, though locals understand one another; the airport lies on the edge of town, the Thai border about 40 km north-west and Pantai Cahaya Bulan beach 10 km north-east. Newcomers most often go wrong by expecting Kuala Lumpur's hours here, when the city's rhythm and rules are set by local religion and custom.",
    layout:
      "The city centre is anchored by the Central Market, surrounded by traditional handicraft workshops and batik textile studios, with fishing villages preserved along the Kelantan riverbank.",
    gettingAround:
      "Sultan Ismail Petra Airport is about 8 km in a straight line from the city centre, with direct domestic flights from Kuala Lumpur; the city is also reachable by road toward Taman Negara.",
    culture:
      "The official language is Malay. Kota Bharu is one of the areas where traditional Malay culture is best preserved, with kite-flying, top-spinning and other traditional folk crafts, along with batik textile-making, widely passed down locally. Kelantan is more socially conservative than much of the rest of Peninsular Malaysia — dress more conservatively in public (avoid shorts and short skirts), and alcohol sales and venues are more restricted than elsewhere in the country. Restaurant bills often already include service.",
    seeAndDo:
      "Kota Bharu Central Market; the Islamic Arts Museum; visiting a batik textile workshop; fishing-village scenery along the Kelantan riverbank.",
    whenAndTips:
      "November to February is the east coast's wet season, with heavier rainfall in some years — check the weather before travelling; March–October is comparatively dry and better suited to outdoor activities.",
  },
  kuantan: {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   Kuantan 县 2025 = 约 57.7 万。原文 61 万来源不明。
    identity:
      "Kuantan is the capital of Pahang state, with a population of about 577,000 (2025, Department of Statistics Malaysia, Kuantan district), at the mouth of the Pahang River, and an important port city on the peninsula's east coast and gateway to the Pahang River basin.",
    // howItWorks sources: ECRL 一期：2026-03 进度 92.62%，目标 2026 年底完工、2027-01 商业运营（2 级）。
    howItWorks:
      "Kuantan is the capital of Pahang, the administrative centre of the largest state in Peninsular Malaysia, granted city status in 2021 and governed by the Kuantan City Council whose mayor and councillors are appointed by the state; the city covers about 324 km² with about 577,000 people in 2025. The state capital moved here from inland Kuala Lipis in 1955, the centre lies at the mouth of the Kuantan River, and the royal town remains Pekan 50 km south, where the Sultan's palace stands; Teluk Cempedak beach lies 5 km east as the city's own, the old tin workings of Sungai Lembing in the hills to the west and Cherating 45 km north; the petrochemical estate at Gebeng, Kuantan port and the East Coast Economic Region are its mainstay, the airport lies on the outskirts and the East Coast Rail Link is targeted to enter commercial service in January 2027, about 93 per cent built as of March 2026. Newcomers most often go wrong by taking Kuantan for Pahang's royal town, when the royal house sits at Pekan and Kuantan is the administrative and commercial centre.",
    layout:
      "The city centre lies on both banks of the Pahang River mouth; Teluk Cempedak Beach is a well-known local leisure beach, and river-mouth fishing villages preserve a traditional way of life.",
    gettingAround:
      "Sultan Ahmad Shah Airport is about 14 km in a straight line from the city centre; Kuantan is reachable from Kuala Lumpur by domestic flight or long-distance bus (about 4 hours), and Tasik Chini is about a 1.5-hour drive away.",
    culture:
      "The official language is Malay. Kuantan is the administrative and commercial centre of Pahang state, its river-mouth fishing villages and coconut-lined beaches reflecting the traditional way of life on the peninsula's east coast. Restaurant bills often already include service.",
    seeAndDo:
      "Teluk Cempedak Beach; scenery at the Pahang River-mouth fishing villages; a day trip to the Tasik Chini biosphere reserve; the Kuantan State Mosque.",
    whenAndTips:
      "November to February is the east coast's wet season, with heavier rainfall in some months; March–October is comparatively dry and better suited to beach outings and a Tasik Chini day trip.",
  },
  sandakan: {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   Sandakan 县 2025 = 约 50.5 万。
    identity:
      "Sandakan is a port city on Sabah's east coast, with a population of about 505,000 (2025, Department of Statistics Malaysia, Sandakan district), the capital of British North Borneo in the early 20th century, and the core gateway for exploring the Kinabatangan River.",
    // howItWorks sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   同上。
    howItWorks:
      "Sandakan is the second city of Sabah, governed by the Sandakan municipal council whose councillors are appointed by the state; the district had about 505,000 people in 2025. From 1884 to 1946 it was the capital of British North Borneo, and Chinese migrants from Hong Kong earned it the name 'Little Hong Kong', until wartime bombing flattened the whole town, the capital moved to Jesselton and Sandakan was rebuilt to a new plan; today it is the export port for palm oil and timber, the town on the bay is small, the Puu Jih Shih temple stands on the hill and the house of the writer Agnes Keith survives from the British years; the Sepilok orangutan centre lies 25 km west, the Kinabatangan River about 100 km south, the Turtle Islands are reached by boat and the airport lies on the outskirts. Newcomers most often go wrong by taking Sandakan for a place to see wildlife, when the animals are in reserves tens to a hundred kilometres away and the town itself is a port.",
    layout:
      "The city centre runs along the bay; Sandakan Central Market is a well-known seafood and produce trading site locally, and several historic sites and nature reserves lie on the city's outskirts.",
    gettingAround:
      "Sandakan Airport is about 9.4 km in a straight line from the city centre; reaching the wildlife reserves on the lower Kinabatangan River requires driving about 2 hours, with part of the trip by boat.",
    culture:
      "The official language is Malay. Sandakan was the capital of British North Borneo in the early 20th century, suffered severe destruction during the Second World War, and is today an important ecotourism and fishing city on Sabah's east coast. Restaurant bills often already include service.",
    seeAndDo:
      "A wildlife river cruise on the Kinabatangan (proboscis monkeys, orangutans); Sandakan Central Market; the floating mosque at Semporna (on the outskirts); the Sepilok Orangutan Rehabilitation Centre (on the outskirts).",
    whenAndTips:
      "March–August sees comparatively less rainfall, a better season for wildlife-watching on the Kinabatangan; book accommodation within the river reserve in advance to catch the morning and evening viewing windows.",
  },
  miri: {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   Miri 县 2025 = 约 25.8 万。**原文的 30 万高于官方县口径**，来源不明。
    identity:
      "Miri is a port city in northeastern Sarawak, with a population of about 258,000 (2025, Department of Statistics Malaysia, Miri district), the core gateway for exploring Gunung Mulu National Park and the Niah Caves, and the birthplace of Malaysia's oil industry.",
    // howItWorks sources: 「2005 年成为马来西亚第一个非州府的城市」与「1910 年壳牌在加拿大山钻出马来西亚第一口油井」**均核实属实**（2 级：砂拉越官方媒体、壳牌官方大事记）。2026-09-12 核，无需改动。
    howItWorks:
      "Miri is the second city of Sarawak and in 2005 became the first city in Malaysia that is not a state capital, governed by the Miri City Council whose mayor and councillors are appointed by the state; it had about 258,000 people in 2025. Shell drilled Malaysia's first oil well on Canada Hill in 1910, and that well still stands on the hilltop as the 'Grand Old Lady'; oil and gas have defined the city ever since, with the offices of Shell and Petronas in town; Mulu National Park is reached by air, the Niah caves lie 110 km south-west, Lambir Hills 30 km south, the Brunei border 30 km north-east and the airport on the outskirts. Chinese, Iban and Malay people make up the city. Newcomers most often go wrong by taking Miri for a staging post for Mulu, when it is Sarawak's oil capital and Mulu can only be flown into.",
    layout:
      "The city centre runs along the coastline; Canada Hill is the site of Malaysia's first oil well, now a memorial park, and several oil-industry heritage sites lie around the city.",
    gettingAround:
      "Miri Airport is about 8.6 km in a straight line from the city centre; reaching Gunung Mulu National Park requires a connecting light-aircraft flight (about 30 minutes), while the Niah Caves are about a 1.5-hour drive.",
    culture:
      "The official language is Malay. Miri grew from the development of the oil industry — Malaysia's first oil well was drilled here in 1910 — and is today an important commercial and tourism hub in northern Sarawak. Restaurant bills often already include service.",
    seeAndDo:
      "The Canada Hill oil-well memorial park; the Pinnacles and cave exploration at Gunung Mulu National Park; the Great Cave archaeological site at Niah National Park; the Miri waterfront promenade.",
    whenAndTips:
      "Hot and humid year-round; flights to Gunung Mulu National Park are limited, so book tickets and a cave guide well in advance.",
  },
  "langkawi-city": {
    // howItWorks sources（2026-09-15 核实，add-year）: 马来西亚 2020 年普查岛级数；下一期约 2030
    identity:
      "Kuah is the main town of the Langkawi archipelago, on the southeast coast of Langkawi Island, and the gateway town for exploring Langkawi UNESCO Global Geopark.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Langkawi (archipelago of 99 islands, Kedah; district/municipal council appointed; ~94,000 2020, ~65,000 on the main island; duty-free since 1987; Kuah town (jetty, district office) vs Pantai Cenang; airport at Padang Matsirat; cable car/Sky Bridge; UNESCO Global Geopark 2007; ferries Kuala Perlis/Kuala Kedah/Penang)
    howItWorks:
      "Langkawi is an archipelago of 99 islands off north-western Kedah, the main island about 25 km from north to south, governed by the Langkawi municipal council whose councillors are appointed by the state; about 94,000 people lived on the islands in 2020, about 65,000 on the main island, nine in ten of them Malay. The whole island has been duty-free since 1987, and that is the base of its economy; Kuah in the south-east corner holds the district offices, the ferry jetty and the shops locals use, while Pantai Cenang in the south-west is the visitors' strip of hotels, the two about 20 km apart; the airport lies at Padang Matsirat in the middle, the cable car at Oriental Village climbs to the Sky Bridge on Gunung Mat Cincang, the archipelago became a UNESCO Global Geopark in 2007, and ferries come from Kuala Perlis, Kuala Kedah and Penang. Newcomers most often go wrong by taking Kuah for the resort area, when the beaches lie at the other end of the island and nothing moves without a car.",
    layout:
      "The Kuah jetty area is the island's main commercial and ferry hub, ringed by duty-free shopping districts, while the island's interior holds the geopark's karst and rainforest scenery.",
    gettingAround:
      "Langkawi International Airport lies on the west of the island, about 13 km from Kuah as the crow flies, with domestic and some international flights; getting around the island mainly relies on car rental, motorbike or a hired driver to visit the various geoforest parks.",
    culture:
      "The official language is Malay. Langkawi is a well-known duty-free shopping and resort island in Malaysia, with local legends about the origin of the island's name; fishing and tourism are the main pillars of the local economy. Restaurant bills often already include service.",
    seeAndDo:
      "The Langkawi Sky Bridge; a Kilim River mangrove cruise and karst scenery; Kuah's duty-free shopping district; sunset at Pantai Cenang.",
    whenAndTips:
      "November to February is comparatively dry, the best season for visiting Langkawi; May–October is the wet season, and some outdoor itineraries may be affected by weather.",
  },

  // ── Malaysia batch 2 (2026-09-05) ──
  putrajaya: {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   布城联邦直辖区 2025 = 约 12.1 万。
    identity:
      "Putrajaya is Malaysia's federal administrative centre, about 25 km south of Kuala Lumpur; planned from 1995, it received the federal government from Kuala Lumpur in 1999 and became a federal territory in 2001, with about 121,000 people (2025, Department of Statistics Malaysia). The whole city is laid out around the artificial Putrajaya Lake, with 38 percent of its area as green space: the pink Putra Mosque and the Prime Minister's office, the bridges of varied design (the Seri Wawasan among them), the 'Iron Mosque' and the wetlands park are its sights. A deliberately planned garden and smart city, it is government offices by day and a place for residents to stroll and cycle by the lake in the evening and at weekends; a hot-air balloon fiesta is held each year.",
    // howItWorks sources: 「2001 年设立的第三个联邦直辖区、约 49 平方公里、2025 年约 12.1 万人」**均核实属实**（人口为马来西亚统计局 2025 年行政区估计，1 级）。2026-09-12 核。
    howItWorks:
      "Putrajaya is Malaysia's third federal territory, created in 2001, about 49 km² with about 121,000 people in 2025, nearly all civil servants and their families. It is not a city that grew but an administrative capital begun in 1995, into which the Prime Minister's Department and the ministries were moved wholesale from Kuala Lumpur from 1999; it is run by the Putrajaya Corporation, not an elected council, and laid out in twenty 'precincts', with the green-domed Perdana Putra on the rise above the artificial lake, the Palace of Justice at the other end, the Putra Mosque and the square between them, and the lake and its bridges as the skeleton of the plan. The constitutional capital remains Kuala Lumpur, where parliament and the King are; the airport express and the MRT join it to Kuala Lumpur and the airport, and Cyberjaya lies next door in Selangor. Newcomers most often go wrong by taking Putrajaya for the capital, when it is only where the government works and parliament sits 25 km away in Kuala Lumpur.",
    layout:
      "The city occupies the hills around Putrajaya Lake, divided into precincts: the core precinct sits on the high ground of the northern shore, with the Putra Mosque, the Prime Minister's office and the main ministries around Putra Square and the Putra boulevard running south; the Iron Mosque and the Palace of Justice lie south of the core, and bridges of various shapes cross the lake between precincts. The wetlands park lies upstream at the north of the city and the botanical garden east of the core. Putrajaya Sentral (KLIA Transit and MRT) is in the south-west, and the airport about 25 km south.",
    gettingAround:
      "Putrajaya has no airport of its own; Kuala Lumpur International (KUL) lies about 25 km south, about 20 minutes to Putrajaya Sentral by KLIA Transit. From KL Sentral take KLIA Transit (about 20 minutes) or the MRT Putrajaya line (fully open since 2023), with buses to the core precinct. The city was designed for cars and walking distances are long — the core is walkable, the rest needs buses, taxis or hire bicycles, and boats cruise the lake. The climate is tropical rainforest, hot and wet all year.",
    culture:
      "Malay and English are universal. Visit mosques outside prayer times; women wear the robes provided, everyone removes shoes and keeps quiet; the Prime Minister's office is not open to the public and is seen from outside. Government precincts rest on Sundays, when the lakeside and parks are busy. Food is mainly Malay, with few restaurants in the core and a food street by the lake. Tipping is not expected.",
    seeAndDo:
      "The Putra Mosque, Putra Square and the exterior of the Prime Minister's office; the Seri Wawasan, Seri Gemilang and other bridges; the Iron Mosque (Tuanku Mizan Zainal Abidin Mosque); a cruise on Putrajaya Lake; the wetlands park (birdwatching, cycling); the botanical garden; the Palace of Justice and the mosque ensemble at night; the hot-air balloon fiesta (usually around March); weekend cycling by the lake.",
    whenAndTips:
      "Any time of year, avoiding the midday heat — the lakeside is most pleasant at dusk; the October–January rains bring afternoon storms. Half a day to a day. A day trip from Kuala Lumpur, or a stop on the way in from the airport.",
  },
  "cameron-highlands": {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   金马仑高原县 2025 = 约 4.5 万。
    identity:
      "The Cameron Highlands lie in the Titiwangsa range of central Malaysia at 800–1,600 m, about 200 km north of Kuala Lumpur — a hill station opened under British rule (surveyed by William Cameron in 1885 and developed from the 1930s), with about 45,000 people in the district (2025, Department of Statistics Malaysia). Temperatures average about 18°C all year, and it is Malaysia's largest tea-growing area — the BOH estates were founded in 1929 — as well as a producer of strawberries, vegetables and flowers; the Mossy Forest near the summit of Gunung Brinchang (2,031 m) is a cloud forest. Tanah Rata and Brinchang are the two main towns, with Tudor-style colonial buildings and the tradition of afternoon tea. The Thai silk magnate Jim Thompson disappeared here in 1967.",
    // howItWorks sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   同上。
    howItWorks:
      "Cameron Highlands is a district of Pahang of about 712 km² with about 45,000 people in 2025, governed by a district council whose councillors are appointed by the state; it is named after William Cameron, the Scot who surveyed the country in 1885, and the British made it a hill station from the 1930s. It is not a town but a string of settlements along the road between 800 and 1,600 m: Tanah Rata holds the district offices and schools, Brinchang is the largest commercial town and Ringlet the gate at the southern end; BOH's tea estates, strawberry farms and vegetable gardens cover the slopes and supply half of Malaysia's highland produce, Orang Asli villages lie in the forest, and about seven-tenths of the district is still wooded; winding roads climb from Tapah and Simpang Pulai, there is no railway and no airport with scheduled flights, and Kuala Lumpur lies about 200 km south. Newcomers most often go wrong by taking Cameron Highlands for one place, when it runs for tens of kilometres along a road and half an hour separates the towns.",
    layout:
      "The highlands follow one mountain road: from Ringlet in the south it climbs to Tanah Rata (the administrative centre, with hotels, restaurants, agencies and trailheads), then about 5 km north to Brinchang (market, strawberry farms); north of Brinchang lie the BOH Sungai Palas estate and the road up Gunung Brinchang (the Mossy Forest near the summit), with Kampung Raja and more farms further north. Another BOH estate lies by the lake near Ringlet.",
    gettingAround:
      "There is no airport with scheduled flights; Kuala Lumpur International is about 3.5–4 hours by road. Buses from KL's TBS terminal reach Tanah Rata in about 4 hours, from Ipoh in about 2.5. Within the highlands use taxis, hired cars or half-day tours (the roads to the Mossy Forest and the estates are narrow, so most people join a tour); the towns are walkable and numbered trails lead from Tanah Rata into the forest. The climate is cool tropical highland, misty, with afternoon showers and more than 2,700 mm of rain a year.",
    culture:
      "Malay and English are universal, with large Chinese and Indian communities. The tea estates have factory tours and view cafés, and traffic jams at weekends and holidays are severe. Keep to the boardwalk in the Mossy Forest and pick nothing; trails sometimes close after landslides — ask your guesthouse. Respect the Orang Asli villages. Strawberry farms charge for picking. Nights are cool — bring a jacket. Tipping is not expected.",
    seeAndDo:
      "The BOH tea estates (the Sungai Palas factory and viewpoint); the Mossy Forest and the summit of Gunung Brinchang; the Tanah Rata trails (Nos 9 and 10 and others) and waterfalls; strawberry, cactus and bee farms; the Brinchang night market (weekends); afternoon tea at the colonial Smokehouse; the Time Tunnel museum at Kampung Raja; the lakeside estate at Ringlet.",
    whenAndTips:
      "Any time of year, with February–April and June–September relatively dry; weekends and Malaysian public holidays are extremely crowded and jammed. Stay two nights. Linked with Ipoh and Penang on a northern route.",
  },
  taiping: {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   太平市议会（MPT）辖区对应 Larut dan Matang 县（不含实兆远县）2025 = 约 27.8 万。原文停在 2013 年，十二年没动过。
    identity:
      "Taiping lies in northern Perak and is the wettest town in Peninsular Malaysia (about 3,200 mm of rain a year), with about 278,000 people (2025, Department of Statistics Malaysia, Larut and Matang district). It grew on the Larut tin mines in the nineteenth century and was Perak's capital after 1874, leaving Malaysia a string of firsts: the Lake Gardens of 1880 were the country's first public garden, the Perak Museum of 1886 its first museum, the Taiping–Port Weld railway of 1885 its first railway, Bukit Larut (Maxwell Hill) its first hill station and Taiping Zoo its first zoo. The rain trees trailing their branches over the water of the Lake Gardens are its signature image.",
    // howItWorks sources: 「三个马来西亚第一」（1880 太平湖公园 / 1886 霹雳博物馆 / 1885 太平—十八丁铁路）与「半岛最多雨、年降水约 3,200 毫米」**均核实属实**（1—2 级）。2026-09-12 核。
    howItWorks:
      "Taiping is a town of Larut district in Perak, governed by the Taiping municipal council whose councillors are appointed by the state; it has about 278,000 people in 2025, some forty-six per cent of them Chinese. From 1876 to 1937 it was the capital of Perak before giving way to Ipoh; the migrants drawn by tin and the Larut wars of the 1860s were its beginning, and the name 'Taiping', great peace, was given when the fighting ended. It keeps a string of Malaysian firsts: the Lake Gardens of 1880 were the first public garden, the Perak Museum of 1886 the first museum and the railway of 1885 to Port Weld the first railway; some 3,200 mm of rain a year make it the wettest place on the peninsula, Maxwell Hill rises behind the town and Ipoh lies about 48 km south. Newcomers most often go wrong by taking Taiping for a tourist town, when it is Perak's former capital and those firsts are what an administrative centre left behind.",
    layout:
      "The old town lies in a regular grid east of the railway, with the old market, the clock tower, the Anglican church and colonial shophouses; the Lake Gardens, made from abandoned tin pits, lie on the east side of the old town with the zoo at their north-east corner, and the road up Bukit Larut (about 1,000 m at the top, reached by four-wheel-drive jeep) starts beside the zoo. The Perak Museum stands north of the old town. Kuala Sepetang (the former Port Weld), about 15 km west on the coast, has mangroves, charcoal kilns and fireflies.",
    gettingAround:
      "Taiping has no airport with scheduled flights; the nearest are Penang (about 96 km) and Ipoh (about 73 km). ETS electric trains take about 3 hours from Kuala Lumpur, about 1 hour from Ipoh and about 1 hour from Butterworth (Penang), and buses are easy. In town use taxis or hire a bicycle, with the old town and the gardens on foot; Bukit Larut is reached by the park's jeeps (book ahead) or a walk of about 3 hours, and Kuala Sepetang by taxi or hired car. The climate is tropical rainforest with heavy afternoon rain.",
    culture:
      "Malay and English are universal, the Chinese community is large, and Hokkien and Cantonese are common. The Lake Gardens are the townspeople's morning and evening promenade — no climbing the rain trees for photos. The Perak Museum is a heritage site. The charcoal kilns of Kuala Sepetang can be visited and the firefly boats go out at night. Taiping's food includes Hakka dishes, Hainanese chicken rice and tea from Bukit Larut. Tipping is not expected.",
    seeAndDo:
      "The Lake Gardens (the rain trees, the lakeside walks); Bukit Larut (Maxwell Hill) for the cloud sea; Taiping Zoo and the night safari; the Perak Museum; the colonial buildings of the old town (the clock tower, the old gaol, All Saints' Church) and the street food; the Kuala Sepetang mangrove walk, charcoal kilns and firefly boats; the Taiping war cemetery; seafood in the fishing village at Kuala Sepetang.",
    whenAndTips:
      "February–April is relatively dry; in other months rain falls in the afternoon, so go out in the morning. A day for the town, half a day for Kuala Sepetang. A stop between Penang and Ipoh.",
  },
  "alor-setar": {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   MBAS 辖区 = Kota Setar（38.3 万）+ Pokok Sena（5.1 万）两县合计 2025 = 约 43.5 万。
    identity:
      "Alor Setar is the capital of the Malaysian state of Kedah, on the rice plains of the north-western peninsula, with about 435,000 people (2025, Department of Statistics Malaysia; the council area covers the Kota Setar and Pokok Sena districts) — the second-oldest state capital in Malaysia. Kedah is the 'rice bowl of Malaysia', with paddy stretching to the horizon outside the city, and the Paddy Museum has a 360-degree mural of the fields; the Zahir Mosque, completed in 1912, is among the most beautiful in Malaysia, the Balai Besar of 1735 is the sultanate's ceremonial hall, and the 165.5 m Alor Setar Tower is the country's third-tallest tower. The former prime minister Mahathir Mohamad was born here, and his birthplace is open to visitors. Ferries to Langkawi leave from Kuala Kedah about 15 km west.",
    // howItWorks sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   同上。
    howItWorks:
      "Alor Setar is the capital of Kedah, granted city status in 2003 and governed by the Alor Setar city council whose mayor and councillors are appointed by the state; the two districts held about 435,000 people in 2025. The city was founded by the Sultan in 1735 and named after a tree by the river, and its centre keeps the plan of a royal town: the Balai Besar, the royal music pavilion and the Zahir Mosque completed in 1915 stand around the square, with the Wednesday market as the old bazaar and the Alor Setar Tower beside it; around it lie the largest paddy plains in Malaysia, the country's rice bowl, and two prime ministers were born in this city; the airport lies on the outskirts, the Thai border about 50 km north, the ferry jetty at Kuala Kedah 12 km west for Langkawi, and Kuala Lumpur about 430 km south. Newcomers most often go wrong by taking Alor Setar for a staging post for Langkawi, when it is a state capital whose paddy fields feed half the country.",
    layout:
      "The centre lies by the Kedah river, with the Zahir Mosque, the Balai Besar, the royal museum and the big clock tower around the royal square and the Alor Setar Tower beside them, and the Pekan Rabu market in the centre; Mahathir's birthplace is on Seberang Perak road south of the centre. The Paddy Museum stands in the fields about 5 km north, and Gunung Jerai rises about 15 km east. The station is on the south side of the centre, the airport about 15 km north and the Kuala Kedah jetty about 15 km west.",
    gettingAround:
      "Sultan Abdul Halim Airport (AOR), about 9 km in a straight line from the city, has scheduled domestic flights. ETS electric trains take about 5–6 hours from Kuala Lumpur and about 1 hour from Butterworth; buses take about 6 hours from Kuala Lumpur and 2 from Penang. In town use taxis or a hire car, with the centre walkable; the Paddy Museum and Kuala Kedah are taxi rides. The climate is tropical monsoon, wet from May to October.",
    culture:
      "Malay is universal and English works in tourism; Kedah is a strongly Malay state. Visit the mosque outside prayer times, covered up, with headscarves for women. The paddy is harvested in December–January and planted in March–April, the prettiest times. The Pekan Rabu market sells Malay traditional foods and crafts. Kedah's food includes laksa Kedah and Malay cakes. Friday is Kedah's rest day (the weekend falls on Friday and Saturday). Tipping is not expected.",
    seeAndDo:
      "The Zahir Mosque; the royal square (the Balai Besar, the royal museum, the clock tower); the Alor Setar Tower view; Mahathir's birthplace; the Paddy Museum and the fields; the Pekan Rabu market; the Kedah State Museum; the forest and falls of Gunung Jerai; the fishing village and mangroves of Kuala Kedah; the Bujang Valley archaeological sites (about 60 km south).",
    whenAndTips:
      "December–April is drier; the paddy is most golden just before harvest, and the exact month shifts with each year's planting schedule. A day for the city. A transit point for Langkawi (about 1.5 hours by ferry) or for the road north into Thailand.",
  },
  semporna: {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   Semporna 县 2025 = 约 20.1 万（2020 年 16.7 万）。**原文两段自相矛盾且都过期**：identity 用 2010 年镇区 3.5 万、howItWorks 用 2020 年县域 14 万，口径与年份都不同、数字差四倍。统一到县口径最新数。
    identity:
      "Semporna lies on the Celebes Sea coast of south-eastern Sabah, with about 201,000 people in the district (2025, Department of Statistics Malaysia), and is the gateway to the world-class dive site of Sipadan (about 36 km from town) and to Mabul and Kapalai; the volcanic crater of Bohey Dulang in Tun Sakaran Marine Park (established 2004) is a famous viewpoint. The Bajau Laut sea people have lived here for generations on boats and stilt houses over the water, and their painted sails are shown at the Regatta Lepa festival each April; Semporna is also home to Malaysia's only Chavacano-speaking community (of Philippine origin). The town is known for seafood and pearl farming.",
    // howItWorks sources: 「马来西亚唯一有查瓦卡诺语社群的地方」**核实属实**。⚠️ 只有 3 级来源（维基 + APiCS 语言学数据库），无官方一手来源；内容是狭窄的族群语言学事实、各方一致，故保留。2026-09-12 核。
    howItWorks:
      "Semporna is a town and district on the east coast of Sabah, governed by a district council whose councillors are appointed by the state; the district had about 201,000 people in 2025, the Bajau the main people alongside Suluk, Filipino and Hakka Chinese communities, and it holds the only Chavacano-speaking community in Malaysia. The town itself is small, one street by the water and villages of stilt houses, with the seafood market as its centre; it is the departure port for diving: Sipadan lies 36 km south-east on a daily quota of permits and day trips only, the water bungalows of Mabul and Kapalai lie nearby, and Bohey Dulang in the Tun Sakaran Marine Park to the north; the nearest airport is at Tawau, about 100 km away. The district lies within Sabah's east coast security zone, and current travel advisories should be checked before going. Newcomers most often go wrong by expecting to stay on Sipadan, when no one may sleep on the island and divers stay at Mabul or in town.",
    layout:
      "The town sits on a small peninsula, with the jetty area as its centre and dive shops, guesthouses and seafood restaurants along the waterfront; stilt-house villages stand over the water at the edge of town. Mabul and Kapalai lie about 40 minutes south by boat, with Sipadan further south beyond Mabul — a marine park with no accommodation; Tun Sakaran Marine Park (Bohey Dulang, Mantabuan) lies 30–45 minutes north-east. Tawau is about 100 km west, with the airport there.",
    gettingAround:
      "Semporna has no airport with scheduled flights; the nearest is Tawau (TWU), with flights to Kota Kinabalu and Kuala Lumpur, and the drive from the airport to Semporna takes about 1.5 hours (shared transfers available). The town is walkable, and dive shops and resorts run speedboats to the islands. The climate is tropical rainforest, hot and wet all year, with the best sea conditions from April to November.",
    culture:
      "Malay and Bajau are spoken, with English and Chinese common in tourism. Sipadan has a daily limit (about 178 divers), with permits allocated through dive shops, booked months ahead, and an advanced certification is required; touch no coral and take no shells within the marine parks. Ask before photographing in Bajau villages and give children nothing. The east coast of Sabah lies within the Eastern Sabah Security Zone (ESSZONE), with night-time sea curfews in some waters — check official travel advice before setting out and go to sea only with licensed operators. Seafood is ordered by weight. Tipping is not expected.",
    seeAndDo:
      "Diving Sipadan (permit required); snorkelling and water villas at Mabul and Kapalai; Tun Sakaran Marine Park (the climb up Bohey Dulang for the lagoon); the Bajau stilt villages (with a tour); seafood at the jetty night market; snorkelling at Mantabuan and Sibuan; the Regatta Lepa festival in April.",
    whenAndTips:
      "April–November has the best seas, with July–August and Malaysian holidays the busiest; book Sipadan permits well ahead. Stay three or four nights. Linked with Tawau, Sandakan and Kota Kinabalu on a Sabah route.",
  },
  sibu: {
    // identity sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   Sibu 县 2025 = 约 25.6 万。原文两段一个用 2010 年 16 万、一个用 2020 年 30 万，互相矛盾且都不是最新。
    identity:
      "Sibu lies in central Sarawak where the Rajang — Malaysia's longest river — meets the Igan, about 60 km from the sea, with about 256,000 people (2025, Department of Statistics Malaysia, Sibu district). In 1901 Wong Nai Siong led Foochow settlers here to farm, and Sibu became the 'New Foochow', marked by the Foochow dialect, kompia bread and kampua noodles; the Tua Pek Kong temple and its seven-storey pagoda, which survived the great fire of 1928, are the landmark, the swan statue is the city's symbol and the Central Market is Sarawak's largest. Express boats run up the Rajang from Sibu to the longhouse country of Kapit and Belaga, and the Borneo Cultural Festival is held in the town square each July.",
    // howItWorks sources: 马来西亚统计局（DOSM）《Current Population Estimates by Administrative District, 2025》（2025-10-02 发布，覆盖 2024/2025 两年估计），子代理直接读官方开放数据 open.dosm.gov.my 的 population_district 表，**级别 1**。
    //   https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-by-administrative-district-2025
    //   发布节奏：**州级估计约 7 月、按行政县（daerah）估计约 10 月**。2026 年这一档截至 2026-09-08 尚未发布，本轮用的是 2025 年那一版，10 月后可回来再刷一次。两档都基于 2020 年普查作队列递推，下一次全国普查预计 2030 年。
    //   **DOSM 不对地方政府辖区（市议会 Majlis）做年度更新** —— 唯一可核实的官方数字来自 2020 年普查按小区的一次性汇总，此后没有续更渠道。「都会区 / conurbation」（Klang Valley、George Town Conurbation、Greater Kota Kinabalu、Greater Kuching）**在 DOSM 官方序列里根本不存在**，是维基百科自定义的地理概念。
    //   同上。
    howItWorks:
      "Sibu is the third city of Sarawak, governed by the Sibu municipal council whose councillors are appointed by the state; it had about 256,000 people in 2025, about half of them Chinese and most of those Christian, unusual among Malaysian cities. In 1901 Wong Nai Siong brought more than a thousand Foochow settlers here to clear land, Foochow speech and Foochow noodles remain daily life, and the swan is the city's emblem. The town lies on the Rajang, about 60 km from the sea, the longest river in Sarawak, express boats running upriver from here to Kapit with Iban longhouses scattered above; the Central Market is the largest indigenous market in Malaysia and the pagoda of the Tua Pek Kong temple stands by the river; timber processing and more than forty shipyards are its industry, and the airport opened in 1994. Newcomers most often go wrong by taking Sibu for a coastal city, when it stands on an inland river and the sea is a day downstream.",
    layout:
      "The town lies on the north bank of the Rajang, with the express-boat wharf, the Tua Pek Kong temple and pagoda and the Central Market on the riverfront, the town square and the swan statue on the main street by the river, and the old shophouses behind the wharf. Sibu Airport is about 23 km south-east. The Iban longhouses of Bawang Assan lie about 40 km downriver, and Kapit about 140 km upriver (about 3 hours by express boat).",
    gettingAround:
      "Sibu Airport (SBW), about 17 km in a straight line from town, has scheduled domestic and international flights. Buses from Kuching take about 7 hours, and the Rajang express boats are the traditional way into the interior. In town use taxis, with the centre on foot; visit longhouses with a local agency. The climate is tropical rainforest, hot and wet all year.",
    culture:
      "Foochow, Malay and Iban are spoken, with English and Mandarin common. The Tua Pek Kong pagoda can be climbed for the river view; longhouse visits are hosted by the residents — bring a small gift, remove shoes indoors and respect the elders. Kampua noodles, kompia and ding bian hu are the local Foochow snacks, with food stalls upstairs in the Central Market. The Borneo Cultural Festival (July) brings the dances of every community. Tipping is not expected.",
    seeAndDo:
      "The Tua Pek Kong temple and seven-storey pagoda; the Central Market; the town square, the swan statue and the Sibu Heritage Centre; the Rajang riverfront and express boats; the Iban longhouses of Bawang Assan (a day or overnight); the fort and market at Kapit (by express boat); a Foochow food crawl; the Chinese memorial park; the Borneo Cultural Festival (July).",
    whenAndTips:
      "Rain falls all year, less from March to September, and the July festival is the liveliest time. A day for the town, one or two for the longhouses. The gateway between Kuching and Miri into the Rajang interior.",
  },
};
