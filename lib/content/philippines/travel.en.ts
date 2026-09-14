import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Philippines ============
  "philippines-overview": {
    // identity sources: PSA《2024 Census of Population (POPCEN) Population Counts Declared Official by the President》：2024-07-01 普查人口 112,729,484 人。https://psa.gov.ph/content/2024-census-population-popcen-population-counts-declared-official-president
    //   原文「逾 1.14 亿」方向就是错的——实际不到 1.14 亿。核实日 2026-09-07，来源级别 1
    identity:
      "The Republic of the Philippines is a Southeast Asian archipelago of about 7,107 islands, covering roughly 299,800 km² with a population of 112.7 million in the 2024 census (Philippine Statistics Authority); its capital is Manila, the official languages are Filipino (based on Tagalog) and English, and its currency is the Philippine peso (PHP).",
    layout:
      "The country divides roughly into three major island groups: Luzon (Manila, Baguio, Legazpi and others — the population and economic core), the Visayas (Cebu, Bohol, Boracay and others — the central island cluster) and Mindanao (Davao and others — the southern islands); Palawan lies to the west and forms a relatively self-contained tourism region of its own.",
    gettingAround:
      "Domestic flights are hubbed at Ninoy Aquino International Airport in Manila, reaching major cities and islands nationwide; inter-island travel can also be done by ferry, with some outlying islands requiring multiple legs of transport. Taxis, jeepneys (converted mini-buses) and Grab ride-hailing are common ways to get around within cities. Visa-free arrangements for short-term visitors vary by nationality — check the Philippines' official current announcements.",
    culture:
      "The official languages are Filipino and English, with high English proficiency widely used in business and education. The Philippines has the highest proportion of Catholics of any Southeast Asian country, and society places strong value on family and hospitality. Dress modestly when visiting Catholic churches, avoiding very short shorts or sleeveless tops. Restaurant bills often already include service, with an additional 10% tip customary. The voltage is 220V, with mostly American-style two-flat-pin or European two-round-pin outlets.",
    seeAndDo:
      "Natural landforms: Mayon Volcano's symmetrical cone, the nested caldera landscape of Taal Lake, the Chocolate Hills, the Puerto Princesa Underground River. Island getaways: Boracay's white-sand beach, island-hopping among the karst islets of El Nido and Coron. History and culture: the Spanish colonial old town of Vigan, the Ifugao rice terraces.",
    whenAndTips:
      "Lying in the tropics, the Philippines is hot and humid year-round; December to May is the dry season (March–May especially hot), while June to November is the wet season and also the active typhoon season — check typhoon warnings before coastal and island itineraries in that window.",
  },
  manila: {
    // howItWorks sources（2026-09-15 核实，update）: PSA 2024 POPCEN：City of Manila 1,902,590、Quezon City 约 308 万（2020 年为 1,846,513 / 2,960,048，旧文正是 2020 年数；经转引核实，2 级）；下一期约 2030
    // identity sources（2026-09-15 核实，update）: PSA 2024 POPCEN NCR 14,001,751，总统第 973 号公告 2025-07-11 宣布为官方数（经 Manila Standard / PNA 转引，2 级）；下一期约 2030
    identity:
      "Manila is the capital of the Philippines, with a National Capital Region population of about 14 million at the 2024 census (Philippine Statistics Authority), on the east shore of Manila Bay on Luzon, and the country's political, economic and cultural centre.",
    // howItWorks sources: Wikipedia (2026-09): Metro Manila (NCR 16 cities + Pateros, each elected mayor/council; MMDA; ~636 km²; ~14 million 2024; Greater Manila >26 million; City of Manila ~1.85 million; Quezon City ~2.96 million; Makati/BGC/Ortigas; EDSA; LRT/MRT); Local government in the Philippines
    howItWorks:
      "The Manila people speak of is the National Capital Region, assembled from sixteen cities and one municipality and officially called Metro Manila: each city has its own elected mayor and council, and below the cities lie the barangays, neighbourhoods with elected captains; there is no metropolitan government, only the Metropolitan Manila Development Authority coordinating traffic, flood control and waste. The region covers about 636 km² with about 14 million people at the 2024 census, and the wider built-up area exceeds 26 million. The nominal capital, the City of Manila, is only one of them, with about 1.9 million people at the 2024 census, the site of the Spanish walled city and the old port; Quezon City is the most populous at about 3.08 million at the 2024 census; and the business districts are Makati, Bonifacio Global City in Taguig and Ortigas between Pasig and Mandaluyong, each in a different city. EDSA is the spine of the region, LRT and MRT lines follow a few main roads, and jeepneys carry much of the load. Addresses give number, street, barangay and city. Newcomers most often go wrong by taking the City of Manila for the whole, when it is one city among more than a dozen.",
    layout:
      "Intramuros (the old walled city) preserves Spanish colonial-era walls and churches; Makati and Bonifacio Global City are modern commercial and financial districts, and the Manila Bay waterfront is known for its sunset views.",
    gettingAround:
      "Ninoy Aquino International Airport is about 11 km in a straight line from the city centre; the LRT and MRT light-rail lines cover the main commercial districts, with taxis, jeepneys and Grab common for getting around; rush-hour traffic in the city can be heavy.",
    culture:
      "The official languages are Filipino and English, with high English proficiency. Manila carries layered historical influences from Spanish colonial rule, American administration and local culture, and Catholic faith has broad influence on daily life. Restaurant bills often already include service, with an additional 10% tip customary.",
    seeAndDo:
      "Fort Santiago and Manila Cathedral in Intramuros; Rizal Park; the modern commercial district of Makati; sunset over Manila Bay; the National Museum complex.",
    whenAndTips:
      "Hot and humid year-round; December to February is comparatively cool and dry, a good season for exploring the city; June to November is the wet and typhoon season — check the weather before travelling.",
  },
  "cebu-city": {
    // identity sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   宿务市（高度城市化市，独立于宿务省）2024 年普查 **965,332** 人，是中米沙鄢大区人口最多的高度城市化市。原文 identity 的「逾92万」既没年份、又与同条目 howItWorks 的 96 万对不上。
    identity:
      "Cebu City is the core city of the Visayas, with a population of about 965,000 at the 2024 census, on the east coast of Cebu Island; it is the oldest city in the Philippines and an important economic and tourism hub for the central islands.",
    // howItWorks sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   「宿务都会区」不是 PSA 法定区划，只是本地惯用的非官方组合，已如实标注。
    howItWorks:
      "Cebu City is a 'highly urbanized city', administratively independent of Cebu province and outside the provincial government's authority, yet still the provincial capital, with the provincial capitol inside the city; it is divided into 80 barangays, each with an elected captain and council. It had about 965,000 people at the 2024 census, while Metro Cebu, with Mandaue, Lapu-Lapu, Talisay and ten other local governments, holds about 3.2 million (an informal aggregate, not an official PSA-defined metropolitan area), and the airport lies on Mactan Island in the city of Lapu-Lapu. The city has two parts: downtown by the port to the south, where the Spanish founded the first city in the Philippines in 1565, with Magellan's Cross, Fort San Pedro and Colon Street; and uptown to the north, with Cebu IT Park and Ayala Center as the new business and living centre; the mountain barangays take up most of the city's area. Cebuano is the everyday language. There is no rail, and jeepneys and cars carry the traffic. Addresses give number, street, barangay and city. Newcomers most often go wrong by confusing Cebu City with Cebu island and Cebu province, when the airport and the resorts are in other cities.",
    layout:
      "The old town preserves Spanish colonial-era churches and forts; Mactan Island (linked by a causeway bridge) is home to the international airport and beach resorts, and the downtown IT business park is a modern industry cluster.",
    gettingAround:
      "Mactan-Cebu International Airport is on Mactan Island, about 16 km by road from the city centre, reachable via the causeway bridge; taxis and Grab are readily available within the city, with ferries or fast boats needed to reach nearby islands.",
    culture:
      "The official languages are Filipino and English, with the local Cebuano (Visayan) language widely used in daily life. In 1521, Magellan's expedition baptised the rulers of Cebu here and gave them the Santo Niño image as a baptismal gift; that same image has been venerated ever since and is the oldest Christian relic in the Philippines (the country's actual first Mass was held a few days earlier on Limasawa Island in Southern Leyte, with Cebu as the site of the baptism that followed). Restaurant bills often already include service.",
    seeAndDo:
      "Magellan's Cross and the Basilica del Santo Niño; Fort San Pedro; beach resorts on Mactan Island; local specialties such as Cebu lechon (roast pig); island-hopping to nearby islands (on the outskirts).",
    whenAndTips:
      "December to May is the dry season, a good time to explore Cebu and its surrounding islands; June to November is the wet and typhoon season — check the weather before travelling.",
  },
  "davao-city": {
    // identity sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   达沃市 2024 年普查 **1,848,947** 人（2020 年 1,776,949）。**原文的「逾190万」比任何一期普查都高** —— 2024 年实际数比它还低，方向就是错的。
    //   同条目「按行政区划面积计菲律宾陆地面积最大」复核后**仍成立**（2,443.61 km²，第二名普林塞萨港 2,381.02 km²）。
    identity:
      "Davao City is the largest city on Mindanao and, by land area, the largest city in the Philippines, with a population of about 1.85 million at the 2024 census; it is Mindanao's political and economic centre and the core gateway to Mount Apo.",
    // howItWorks sources: 「按面积计菲律宾最大的城市（2,443.61 km²）」与「2024 年普查 1,848,947、大马尼拉之外人口最多」**均核实属实**；面积第二是普林塞萨港 2,381.02 km²，与该条目的「第二大」互相自洽。2026-09-12 核。
    howItWorks:
      "Davao City is a 'highly urbanized city' and the centre of the Davao Region, covering about 2,444 km², the largest city in the Philippines by area, though most of it is mountain and farmland and the urban area is a small corner; it is divided into three congressional districts, eleven administrative districts and 182 barangays, each barangay with an elected captain and council. It had about 1.85 million people at the 2024 census, the most populous city outside Metro Manila. The centre is the Poblacion district, with San Pedro Cathedral and the Roxas night market, while Lanang, Matina and Ecoland are the newer commercial and residential districts. Mount Apo, the highest peak in the Philippines, stands in the city's south-west, and Samal Island lies across the Davao Gulf to the east. Cebuano is the everyday language. The city is known for strict local ordinances — a smoking ban, a firecracker ban, speed limits — and durian is its emblem. There is no rail, and jeepneys, tricycles and cars carry the traffic. Addresses give number, street, barangay and city. Newcomers most often go wrong by picturing Davao as one big city, when most of its territory is mountain.",
    layout:
      "The city centre runs along Davao Gulf, with commercial and residential areas spread across a broad administrative territory; the silhouette of Mount Apo is clearly visible to the northeast of the city.",
    gettingAround:
      "Francisco Bangoy International Airport is about 6.9 km in a straight line from the city centre; taxis, jeepneys and Grab are the main ways to get around, with a drive or hired car of about 1.5–2 hours needed to reach Mount Apo.",
    culture:
      "The official languages are Filipino and English, with local indigenous communities and migrant populations together shaping Davao's diverse culture. Davao is known for orderly city governance and abundant tropical fruit, especially durian. Restaurant bills often already include service.",
    seeAndDo:
      "Hiking in Mount Apo National Park; the Davao Crocodile Park; People's Park; sampling durian and other tropical fruit; Eden Nature Park (on the outskirts).",
    whenAndTips:
      "Mindanao lies south of the main typhoon belt and has a relatively stable climate year-round; December to May sees less rainfall, a better season for climbing Mount Apo — book a permit and guide in advance.",
  },
  baguio: {
    // identity sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   碧瑶市 2024 年普查 **368,426** 人（2020 年 366,358，四年只增 2,068 人，年均 0.14%）。
    //   **「逾37万」这个措辞无论哪一期都站不住** —— 2020 与 2024 两期都不到 37 万。这不只是过期，是量级表述本身就错了。
    identity:
      "Baguio is the capital of Benguet Province, with a population of about 368,000 at the 2024 census, on a plateau in the Cordillera Central at about 1,500 m elevation, known as the Philippines' \"summer capital\" for its cool climate.",
    // howItWorks sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   同上。
    howItWorks:
      "Baguio is a 'highly urbanized city', administratively independent of Benguet province — whose capital is La Trinidad next door — and at the same time the seat of the Cordillera Administrative Region; it is divided into 129 barangays, each with an elected captain and council. It covers only about 58 km² with about 368,000 people at the 2024 census, built on the mountains at about 1,500 m, where the cool climate made it the 'Summer Capital' of the Philippines from 1903. The city was laid out on Burnham's plan when it was chartered in 1909: Session Road is the commercial centre and Burnham Park the green heart, but the plan was for 25,000 to 30,000 people, and more than ten times that now crowd the same slopes, with congestion as daily life. The Ibaloi are the original inhabitants, joined over time by other Igorot peoples, Ilocanos and Chinese. Several universities make it a college town. Kennon Road and Marcos Highway climb to the city, and jeepneys and taxis serve it. Addresses give number, street, barangay and city. Newcomers most often go wrong by taking Baguio for a hill resort, when it is the administrative and commercial centre of the whole Cordillera.",
    layout:
      "The city centre is anchored by Baguio Cathedral and Burnham Park, with a ring road following the contours of the surrounding hills; it is an important gateway for exploring the Cordillera Central and Mount Pulag.",
    gettingAround:
      "The local Loakan Airport no longer handles commercial passenger flights; the city is mainly reached from Manila by road, a mountain drive of about 5–6 hours; taxis and jeepneys are the main ways to get around within the city.",
    culture:
      "The official languages are Filipino and English, and the traditional culture of the Igorot indigenous peoples of Benguet Province is well preserved locally. Thanks to its cool plateau climate, Baguio was developed as a hill-station resort by the American colonial administration in the early 20th century. Restaurant bills often already include service.",
    seeAndDo:
      "Baguio Cathedral and Burnham Park; handicrafts at Baguio's public market; hiking in Mount Pulag National Park (on the outskirts); horseback riding at Wright Park.",
    whenAndTips:
      "Cool year-round, with temperatures dropping to around 10°C from December to February — pack warm clothing; leave early in the morning if heading to Mount Pulag to catch the sea of clouds.",
  },
  "puerto-princesa": {
    // identity sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   普林塞萨港 2024 年普查 **316,384** 人（较 2020 年 307,079 增 0.72%）。同条目「按行政区划面积计菲律宾第二大城市」复核后**仍成立**（2,381.02 km²）。
    identity:
      "Puerto Princesa is the capital of Palawan Province, with a population of about 316,000 at the 2024 census, in the centre of Palawan Island, and the core gateway for exploring the Puerto Princesa Underground River and Palawan's natural landscapes.",
    // howItWorks sources: 「菲律宾面积第二大的城市」与「地下河 1999 年列入世界遗产、在市区以北约 80 公里」**均核实属实**（UNESCO 官方给 76 公里，同一量级）。2026-09-12 核。
    howItWorks:
      "Puerto Princesa has been a 'highly urbanized city' since 2007, administratively independent of Palawan province yet still its capital; it covers about 2,381 km², the second-largest city in the Philippines by area, most of it forest and coastline, and is divided into 66 barangays, each with an elected captain and council. It had about 316,000 people at the 2024 census, concentrated in the town on Puerto Princesa Bay, with the airport in the city centre. The Underground River, inscribed as World Heritage in 1999, lies within the city's territory but about 80 km north of town; the island-hopping of Honda Bay is close to town; and El Nido lies about 230 km north in another municipality. The city is known for environmental governance, and rules on cleanliness and logging are part of local life. Tricycles are the main transport in town. Addresses give number, street, barangay and city. Newcomers most often go wrong by taking Puerto Princesa for a transit point for the Underground River or El Nido, when its own territory is large enough to need hours of driving.",
    layout:
      "The city centre runs along Honda Bay, serving as the administrative and supply centre of Palawan Island, with limestone karst landforms and tropical rainforest scenery in the surrounding area.",
    gettingAround:
      "Puerto Princesa International Airport is about 2.2 km in a straight line from the city centre; tricycles and taxis are the main ways to get around within the city, with a drive or hired car of about 1.5–2 hours needed to reach the Underground River National Park.",
    culture:
      "The official languages are Filipino and English, and the traditional culture of the local Palawan indigenous people is preserved in the area. Puerto Princesa is known for ecotourism and nature conservation, earning it the nickname the Philippines' \"eco-capital.\" Restaurant bills often already include service.",
    seeAndDo:
      "The Puerto Princesa Underground River National Park (cave boat tour); firefly-watching at night on Honda Bay; the Palawan Wildlife Rescue and Conservation Center; snorkelling on beaches near the Underground River.",
    whenAndTips:
      "December to May is the dry season, a good time to visit the Underground River National Park; boat-tour permits for the Underground River must be arranged in the city in advance — book at least a day ahead.",
  },
  legazpi: {
    // howItWorks sources（2026-09-15 核实，add-year）: PSA 2024 POPCEN 210,616（2 级）；下一期约 2030
    // identity sources（2026-09-15 核实，add-year）: PSA 2024 POPCEN 210,616（2 级）；下一期约 2030
    identity:
      "Legazpi is the capital of Albay Province, with a population of more than 210,000, on the shore of Albay Gulf at the southern foot of Mayon Volcano, and the core gateway for viewing Mayon's symmetrical cone.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Legazpi (Philippines; component city and capital of Albay province and the regional centre of Bicol, 153.70 km² with 210,616 residents in the 2024 census, about 560 km south-east of Manila on Albay Gulf; south of Mayon Volcano, an active stratovolcano of near-symmetrical cone; originally the coastal settlement of Sawangan, a Spanish mission town from 1587, renamed in 1856 after Miguel López de Legazpi; served by Bicol International Airport in neighbouring Daraga; topped the National Competitiveness Council index for component cities in 2018)
    howItWorks:
      "Legazpi is the capital of Albay province in the Philippines and the administrative centre of the Bicol Region, a component city under provincial jurisdiction governed by an elected mayor and council, about 154 km² with roughly 210,600 people in the 2024 census, some 560 km south-east of Manila on Albay Gulf. Everything here is laid out at the foot of Mayon Volcano: this active volcano is known for its near-perfect symmetrical cone, visible from the streets, and it sets the local risk — the paths of lava and lahar and the drawing of evacuation zones all follow it, and the church at Cagsawa, buried by the eruption of 1814, still shows only its bell tower above ground in what is now a park. The town began as the coastal settlement of Sawangan, became a Spanish mission in 1587 and was renamed in 1856 after Miguel López de Legazpi, who led the first Spanish expedition. The airport is not in the city but in neighbouring Daraga, opened in 2021. This coast takes the first blow of the typhoon season. Newcomers most often go wrong by planning around photographs of clear days, when Mayon is hidden by cloud more often than not.",
    layout:
      "The city centre runs along Albay Gulf, with historic landmarks such as the Cagsawa ruins on its outskirts; several viewpoints around the city offer different angles on Mayon's complete cone.",
    gettingAround:
      "Bicol International Airport is about 7.9 km in a straight line from the city centre; taxis, tricycles and jeepneys are the main ways to get around, with a drive or hired car needed to reach sites around Mayon Volcano.",
    culture:
      "The official languages are Filipino and English, with the local Bicol language widely used in daily life. Legazpi and the surrounding Bicol region are known for spicy, coconut-milk-based cuisine, an important culinary region in the Philippines. Restaurant bills often already include service.",
    seeAndDo:
      "The Cagsawa Church ruins (witness to past eruptions); viewpoints around Mayon Volcano National Park; Cagsawa Ruins Park; the Daraga lava-fountain park.",
    whenAndTips:
      "December to May is the dry season, a good time for viewing Mayon and outdoor activities; June to November is typhoon season, and Albay Gulf's coastal areas are relatively exposed — check warnings before travelling.",
  },
  tagaytay: {
    // howItWorks sources（2026-09-15 核实，add-year）: PSA 2024 POPCEN 87,811；下一期约 2030
    // identity sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   塔加泰 2024 年普查 **87,811** 人。**原文的「逾10万」不是过期，是与同条目 howItWorks 已有的 2024 年数直接矛盾** —— 8.8 万离 10 万差得远。
    identity:
      "Tagaytay is a highland town in Cavite Province, with a population of about 87,800 at the 2024 census, at about 640 m elevation, a well-known viewpoint town for the nested volcanic landscape of Taal Lake.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Tagaytay (Philippines; component city in Cavite province about 59 km from Manila via Aguinaldo Highway, at roughly 634 m on the Tagaytay Ridge; 87,811 residents in the 2024 census; the ridge looks across the caldera to Taal Volcano and Taal Lake, which lie in Batangas province, not in Tagaytay; average temperature about 22 °C, rarely above 31 °C; chartered as a city in 1938; called the second summer capital of the Philippines after Baguio; bulalo and tilapia from Taal Lake; Sky Ranch, People's Park in the Sky; agriculture in pineapples, coffee and cut flowers)
    howItWorks:
      "Tagaytay is a component city of Cavite province in the Philippines, under provincial jurisdiction and governed by an elected mayor and council, with about 87,800 people in the 2024 census, some 59 km by road south of Manila. It sits on a ridge at about 634 m where temperatures hold around 22°C and rarely pass 31°C, which is why it is called the country's second summer capital after Baguio, and why Manila drives up at weekends and the highway jams. On the far side of the ridge is a great caldera holding Taal Lake, and within the lake stands Taal Volcano — its signature view, though both lake and volcano lie in Batangas province to the south and not within this city, which provides the place to look from. In January 2020 Taal erupted, ash fell on Manila and the lakeside villages were evacuated. The local table is known for bulalo, a beef shank soup, and tilapia from Taal Lake, while the farms grow pineapples, coffee and cut flowers. Newcomers most often go wrong by assuming the volcano lies within Tagaytay, when the city is only the balcony opposite it.",
    layout:
      "The town runs along a ridge on the north shore of Taal Lake, with numerous viewpoints and restaurants facing the lake, and is a popular weekend getaway for residents of Metro Manila.",
    gettingAround:
      "There is no commercial airport locally; the town is reached from Manila by road, a drive of about 1.5–2 hours; walking combined with taxis is the main way to get around within town.",
    culture:
      "The official languages are Filipino and English. Thanks to its cool plateau climate and Taal Lake views, Tagaytay has been a favoured near-Manila getaway for Metro Manila residents since the 20th century. Restaurant bills often already include service.",
    seeAndDo:
      "The cluster of Taal Lake viewpoints; People's Park in the Sky; Sky Ranch's zipline; visiting local pineapple and coffee plantations.",
    whenAndTips:
      "Cooler than Manila year-round; weekends and holidays draw larger crowds, so consider avoiding peak times; Taal Volcano occasionally issues activity advisories — check the latest bulletins from the Philippine Institute of Volcanology and Seismology before travelling.",
  },
  boracay: {
    // identity sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   **这条只能部分更新**：长滩岛不是一级行政区，是马来镇下辖的 3 个 barangay。2024 年普查已知 Manoc-Manoc **22,207**、Balabag **11,275**（两村合计 33,482），但 **Yapak 村的 2024 年数查不到**，全岛官方合计无法给出。
    //   按红线**不编一个合计数**：如实写明 2020 年基准 + 已知两村的 2024 年数 + 总数待公布。**也没有拿马来镇全镇 64,723 冒充全岛人口。**
    identity:
      "Boracay is a well-known resort island under the jurisdiction of Malay, Aklan Province, with a resident population of about 38,000 (2020 census; at the 2024 census the island's two largest barangays alone totalled about 33,500, but an updated island-wide total is not yet available), famous for its White Beach, and one of the Philippines' best-known island getaways.",
    // howItWorks sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   同上。
    howItWorks:
      "Boracay is an island of about 10.3 km² in Aklan province in the Philippines with some 37,800 residents at the 2020 census (the two largest barangays alone totalled about 33,500 at the 2024 census; an island-wide total is not yet available); the island is not a unit of government but three barangays under the municipality of Malay on Panay, so its permits, taxes and municipal services are handled across the water. It was originally inhabited by the Panay Bukidnon and Ati peoples. White Beach runs about four kilometres and is divided into Stations One, Two and Three, the axis along which the hotels and restaurants are strung. In April 2018 the government closed the whole island for six months to deal with sewage discharge and environmental damage, an inter-agency task force taking over, and it reopened that October under a thirty-metre building setback from the waterline and a cap on visitor numbers — rules still enforced and the key to understanding the island today. No large vehicles run here, only e-trikes and bicycles; the way in is by the Caticlan jetty, with airports at Caticlan and Kalibo. Newcomers most often go wrong by expecting an airport on the island, when the flights land on the far shore.",
    layout:
      "The island has a narrow, dumbbell-like shape; White Beach runs about 4 km along the west coast, divided into Stations 1, 2 and 3, while the east coast is comparatively less developed and retains a more natural coastline.",
    gettingAround:
      "Godofredo P. Ramos Airport (popularly called Caticlan Airport) is on the mainland opposite Boracay in Malay; a roughly 10-minute ferry ride is needed to reach the island; electric tricycles (e-trikes) and walking are the main ways to get around on the island.",
    culture:
      "The official languages are Filipino and English. Boracay closed for six months in 2018 for ecological rehabilitation due to environmental strain, after which development density along the shore was restricted — a representative case of sustainable management for Philippine island tourism. Restaurant bills often already include service.",
    seeAndDo:
      "Sunset at White Beach; kitesurfing at Bulabog Beach; island-hopping and snorkelling; the D'Mall shopping and dining area; diving around the island.",
    whenAndTips:
      "November to April is the dry season, the best time for beach activities; June to October brings the southwest monsoon, with rougher waves on the east coast — kitesurfers in fact prefer this season at Bulabog Beach.",
  },
  "el-nido-town": {
    // howItWorks sources（2026-09-15 核实，add-year）: PSA 2024 POPCEN 51,367；下一期约 2030
    // identity sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   艾尔尼多市镇 2024 年普查 **51,367** 人（全镇口径，该镇本身就是一级市镇建制）。**identity 停在旧数、howItWorks 已经是 2024 年普查数**，两段矛盾。
    identity:
      "El Nido is a small town at the northern tip of Palawan, with a population of about 51,400 at the 2024 census, the core gateway town for exploring the karst islets of the Bacuit Archipelago.",
    // howItWorks sources: 「保护区 903 平方公里、菲律宾最大的海洋保护区」**核实属实**（903.21 km²）。2026-09-12 核。
    howItWorks:
      "El Nido is a municipality at the northern end of Palawan in the Philippines, governed by an elected mayor and council under provincial jurisdiction, with about 51,400 people in the 2024 census. The town is squeezed onto a narrow strip between a wall of limestone cliffs and the sea, facing Bacuit Bay and its forty-five islands and islets, the highest of them Cadlao at 640 m — this karst is the whole of its appeal and also the way a visit is organised, since the island-hopping trips leaving town run on four fixed routes, A, B, C and D, regulated by the municipality. The name is Spanish for the nest: the edible swiftlet nests on those cliffs have long been harvested, and on 17 June 1954 the town changed its name from Bacuit to El Nido. The whole sea area falls within the El Nido-Taytay Managed Resource Protected Area of 903 km², the largest marine protected area in the Philippines, entered on payment of an environmental fee. Puerto Princesa lies about 269 km south, five or six hours by road, and there is a small airport. Newcomers most often go wrong by expecting a beach in town, when the good sand is all a boat ride away.",
    layout:
      "The town centre runs along El Nido Bay, with dive shops and island-hopping tour operators clustered along the seafront main street, backed by steep karst massifs.",
    gettingAround:
      "El Nido Airport is a small private airport with limited flight options; most travellers arrive via Puerto Princesa and then travel by road (about 5–6 hours); within town, island-hopping trips are mostly arranged by chartered or shared boat.",
    culture:
      "The official languages are Filipino and English. El Nido is known for its ecotourism development, with ongoing marine conservation and visitor-limiting measures to protect the ecological balance of the Bacuit Archipelago. Restaurant bills often already include service.",
    seeAndDo:
      "Island-hopping around the Bacuit Archipelago (the classic A, B, C and D tour routes); kayaking in the Big and Small Lagoons; hiking to Nacpan Beach; El Nido's night market.",
    whenAndTips:
      "November to May is the dry season, the best time for island-hopping; from June to October, monsoon conditions may cancel some routes — confirm with local tour operators before travelling.",
  },
  "coron-town": {
    // howItWorks sources（2026-09-15 核实，add-year）: PSA 2024 POPCEN 69,439；下一期约 2030
    // identity sources: 菲律宾统计局（PSA）**2024 年人口普查（POPCEN，基准日 2024-07-01）**，已由总统第 973 号公告（2025-07-11）宣布为官方数 —— **这就是当前最新一期**。
    //   菲律宾人口只随普查更新：自 1970 年起每 5 年一次，2020 年是完整的人口与住房普查（CPH），2024 年是依第 87 号行政令做的期中人口普查；下一次完整普查目前指向 **2030 年**。
    //   口径提醒：**长滩岛不是一级行政区**，是马来镇下辖的 3 个 barangay，不能用马来镇全镇数（2024 年 64,723）代替；艾尔尼多、科隆本身就是一级市镇建制，用全镇数没问题。
    //   「宿务都会区」**不是 PSA 的法定区划**（不像国家首都区 NCR 有法律地位），只是本地惯用的非官方地理组合。
    //   科隆市镇 2024 年普查 **69,439** 人（16,483 户）。同上，两段矛盾。
    identity:
      "Coron is a small town on Busuanga Island in northeastern Palawan, with a population of about 69,400 at the 2024 census, the core gateway town for exploring the limestone landforms of the Coron/Calamian Islands and diving on WWII shipwrecks.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Coron (Philippines; municipality covering the eastern part of Busuanga Island, Coron Island and about 50 islets in northern Palawan, 689.10 km² with about 69,439 residents in 2024; the town proper is on Busuanga while Coron Island lies opposite; originally Bancuang, renamed by the Spanish, a municipality from 2 June 1902; Japanese occupation May 1942 to March 1945; about a dozen sunken Japanese warships from the aerial raid of September 1944 lie at 10–40 m and are the main dive sites; Siete Pecados Marine Park, 2024 Blue Park Award; Francisco B. Reyes Airport with flights to Manila, Cebu and Angeles City)
    howItWorks:
      "Coron is a municipality of northern Palawan in the Philippines, governed by an elected mayor and council, covering the eastern half of Busuanga Island, Coron Island and about fifty islets, some 689 km² with about 69,400 people in 2024. One relation is constantly confused here: the town stands on Busuanga, while the cliff-walled island opposite that holds Kayangan and Barracuda lakes is a separate island, ancestral domain of the Tagbanwa people, entered under their management along set routes and hours. The town was originally Bancuang, given its present spelling by the Spanish, and became a municipality on 2 June 1902. In September 1944 an American air raid sank the Japanese ships anchored in these waters, and a dozen or more wrecks lie at ten to forty metres as dive sites known worldwide, carrying the local tourism along with the hot springs outside town; the Siete Pecados Marine Park won a Blue Park Award in 2024. The airport is on Busuanga with flights to Manila and Cebu. Newcomers most often go wrong by treating Coron town and Coron Island as one place, when a stretch of sea lies between them.",
    layout:
      "The town centre runs along Coron Bay, serving as the administrative and supply hub for Busuanga Island and the wider Calamian Islands; reaching sites such as Kayangan Lake requires a road or boat transfer.",
    gettingAround:
      "Francisco B. Reyes Airport is about 30 km from town, requiring a road or boat transfer; within town, island-hopping trips are mostly arranged by chartered or shared boat.",
    culture:
      "The official languages are Filipino and English, and the local indigenous Tagbanua people hold traditional stewardship over several natural sites in the Coron area, including Kayangan Lake. Restaurant bills often already include service.",
    seeAndDo:
      "Visiting Kayangan Lake; diving on Japanese WWII shipwrecks; Twin Lagoon; island-hopping to Kayangan Island and Barracuda Lake; Coron hot springs.",
    whenAndTips:
      "November to May is the dry season, the best time for island-hopping and wreck diving; sites such as Kayangan Lake are managed by the Tagbanua community, and an environmental fee applies on entry.",
  },
  tagbilaran: {
    // howItWorks sources（2026-09-15 核实，add-year）: PSA 2024 POPCEN 106,120；下一期约 2030
    // identity sources: 人口：菲律宾统计局 2024 年人口普查 106,120。口径是**普查人口**，菲律宾市级人口只随普查更新，停在 2024 年不算过期。
    identity:
      "Tagbilaran is the capital of Bohol Province, with a census population of about 106,000 in 2024 (Philippine Statistics Authority), on the southwest coast of Bohol Island, and the core gateway for exploring the Chocolate Hills and Bohol's natural landscapes.",
    // howItWorks sources: 「组成型城市、民选市长与市议会」与「全省人口最多」**均核实属实**（2024 年普查 106,120，第二为乌拜 82,179）。2026-09-12 核。
    howItWorks:
      "Tagbilaran is the capital of Bohol province in the Philippines, a component city under provincial jurisdiction governed by an elected mayor and council, about 36.5 km² with roughly 106,100 people in the 2024 census, the most populous place in the province. Its role is gateway rather than destination: the Chocolate Hills lie inland at Carmen and the tarsier sanctuary at Corella, each an hour or two out from here, while Panglao island lies south across a causeway, carrying the Bohol-Panglao International Airport opened in 2018 along with the beaches and dive sites. The town was established in 1742 and chartered as a city in 1966; in 1565 Miguel López de Legazpi and the local chief Datu Sikatuna sealed a blood compact in this district, a scene often cited in Philippine history and marked by a monument outside town. Cebu lies north, about two hours by ferry. The magnitude 7.2 earthquake of 2013 damaged several Spanish-era stone churches across Bohol and their repair has taken years. Newcomers most often go wrong by assuming the airport is in the city, when it stands on Panglao across the causeway.",
    layout:
      "The city centre runs along the Bohol Strait, serving as the administrative and transport hub of Bohol Island; reaching the Chocolate Hills and the inland tarsier sanctuary requires travelling toward the island's interior.",
    gettingAround:
      "Bohol-Panglao International Airport opened in 2018 on Panglao Island, about 18 km from the city centre, replacing the former Tagbolaran airport; taxis, tricycles and Grab are the main ways to get around within the city.",
    culture:
      "The official languages are Filipino and English, with the local Boholano (Visayan) language widely used in daily life. Bohol is known for tarsier conservation and the geological landscape of the Chocolate Hills, an important ecotourism destination in the Visayas. Restaurant bills often already include service.",
    seeAndDo:
      "The Chocolate Hills viewpoint; the Tarsier Conservation Area; a boat cruise on the Loboc River; the Baclayon Church ruins; beaches on Panglao Island (on the outskirts).",
    whenAndTips:
      "December to May is the dry season, a good time to explore the Chocolate Hills and the island's other sights; morning light at the Chocolate Hills viewpoint is softer, making it a good time for an early visit.",
  },
  vigan: {
    // howItWorks sources（2026-09-15 核实，add-year）: PSA 2024 POPCEN 约 5.4 万；下一期约 2030
    // identity sources（2026-09-15 核实，add-year）: PSA 2024 POPCEN 约 5.4 万；下一期约 2030
    identity:
      "Vigan is the capital of Ilocos Sur Province, with a population of more than 54,000, on Luzon's northwest coast, and the best-preserved Spanish colonial-era old town in the Philippines, inscribed on the UNESCO World Heritage List in 1999.",
    // howItWorks sources: 「1999 年列入世界遗产」与「2015 年入选新七大奇迹城市」**均核实属实**（UNESCO 官方案例页 + New7Wonders 官网，1 级）。2026-09-12 核。
    howItWorks:
      "Vigan is the capital of Ilocos Sur in the Philippines, a component city under provincial jurisdiction governed by an elected mayor and council, with about 54,500 people in the 2024 census, on the west coast of Luzon some 404 km by road north of Manila. In 1999 the Historic Town of Vigan was inscribed as World Heritage as the best-preserved example of a Spanish colonial town in Asia, and in 2015 it was named one of the New7Wonders Cities. What preserved it is its structure: the old town centres on Plaza Salcedo and Plaza Burgos, ringed by the Mestizo District where the merchant families of mixed Chinese and Spanish descent lived, their houses the bahay na bato — stone below, timber above, windows glazed with capiz shell, joining Fujianese, Spanish and tropical practice in one form. Calle Crisologo with its sett paving and unbroken row of old houses is the heart of that quarter, and horse-drawn kalesas still carry passengers along it. The Pagburnayan kilns and the hand looms still work, and the Vigan longganisa is the local food. The airport is at Laoag, 80 km north. Newcomers most often go wrong by taking the old town for a reconstructed set, when most of these houses are original and still lived in.",
    layout:
      "The historic core follows a grid layout, its streets lined with Spanish colonial-era stone buildings and arcaded shophouses; Calle Crisologo is the old town's most representative historic street.",
    gettingAround:
      "The local Vigan Airport does not currently offer reliable passenger service; most travellers arrive from Manila by road, a journey of about 7–8 hours; the historic core is walkable, and the kalesa (horse-drawn carriage) is a distinctive local mode of transport.",
    culture:
      "The official languages are Filipino and English, with the local Ilocano language widely used in daily life. Vigan is a historical testament to the long-term blending of Philippine, Chinese and Spanish cultures, its old-town architecture combining European and southern Chinese shophouse elements. Restaurant bills often already include service.",
    seeAndDo:
      "The cobblestone streets of Calle Crisologo; Vigan Cathedral; the Syquia Mansion heritage house; a kalesa sightseeing tour; sampling Vigan longganisa (local specialty sausage).",
    whenAndTips:
      "November to February is comparatively cool and dry, a good season for exploring the old town; plan a full day combining walking with a kalesa tour of the historic core.",
  },
};
