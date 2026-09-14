import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "canada-overview": {
    // identity sources: Statistics Canada《The Daily — Canada's population estimates: Age and gender, July 1, 2025》：41,651,653 人。https://www150.statcan.gc.ca/n1/daily-quotidien/250924/dq250924a-eng.htm
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Canada is the world's second-largest country, spanning northern North America from the Atlantic to the Pacific and up to the Arctic Ocean, with a population of about 41.65 million as of July 2025 (Statistics Canada) — most of it in a narrow southern belt not far from the US border. The official languages are English and French (French mainly in Quebec). From east to west the land runs roughly: the old low mountains of the Atlantic coast, the St Lawrence valley, the Canadian Shield covering most of the country, the interior prairies, the Rockies and the western ranges, and the Coast Mountains on the Pacific; to the north are vast tundra and the Arctic islands.",
    layout:
      "It helps to divide Canada into regions: Atlantic Canada (Newfoundland, Nova Scotia and others — fishing and coast); Central Canada (Ontario and Quebec, the population and economic core, with Toronto, Montreal, Ottawa and Quebec City); the Prairie provinces (Manitoba, Saskatchewan, Alberta — wheat and oil, with Calgary, Edmonton and Winnipeg); the West Coast (British Columbia, Vancouver, between mountains and sea); and the thinly peopled northern territories. Distances between cities are huge, and crossing the country is almost always done by air.",
    gettingAround:
      "The domestic air network is extensive, with frequent service between major cities; VIA Rail runs an intercity train in the eastern corridor (Quebec City–Windsor), and other lines are sparse and slow. Big cities have a subway or light rail (Toronto, Montreal, Vancouver, Ottawa); public transport overall is a little better than in the US but driving still dominates (on the right). In winter roads ice over and are ploughed often; check conditions in the north and the mountains. Tipping is close to US practice: 15–20% for table service. Tap water is generally drinkable. Power is 120V with two flat pins.",
    culture:
      "English and French are the official languages, and federal institutions, packaging and road signs are usually bilingual; Quebec is French-first, with signage and service in French first. Canada identifies as a multicultural, immigrant society, with many ethnic communities in the big cities. Indigenous (First Nations, Inuit, Métis) place names and cultures are present everywhere, and many places open events with an acknowledgement of 'unceded Indigenous territory'. People are generally polite and orderly in queues.",
    seeAndDo:
      "Nature: Banff and Jasper national parks in the Rockies, the Icefields Parkway, Lake Louise; the Bay of Fundy tides, the Gaspé Peninsula and Gros Morne in the east; autumn maple colour (Quebec, Ontario); the northern lights. Cities: the CN Tower and diverse neighbourhoods of Toronto, the old town and French culture of Montreal, the walls of Quebec City, Stanley Park and the coastline of Vancouver. Winter brings skiing, ice sports and winter carnivals.",
    whenAndTips:
      "June–September is the travel high season, with the most comfortable weather and long daylight; late September to mid-October is the eastern maple-colour period. Winters are long and cold (often below −20°C inland) but are also the season for skiing and the northern lights — bring proper cold-weather gear. Citizens of most countries need an electronic travel authorisation (eTA) or a visa arranged online before travelling to Canada. The country is vast — don't over-pack the itinerary, and allow flying and connection time between cities.",
  },

  toronto: {
    // identity sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Toronto CMA 2025-07-01 = 7,108,874；Toronto (C) 市 = 3,271,830。
    identity:
      "Toronto is the most populous city in Canada, with a metro area of about 7.11 million (July 2025, Statistics Canada), on the north-western shore of Lake Ontario, and the country's financial, media and immigration centre — about half the city's residents were born abroad, making it one of the most diverse cities in the world. It is not the capital (that is Ottawa), but it is the capital of the province of Ontario. The name comes from a Mohawk word meaning roughly 'where there are trees standing in the water', originally for a spot further north at Lake Simcoe.",
    // howItWorks sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   同上。
    howItWorks:
      "Toronto has been a single-tier city since 1998, formed by merging Metropolitan Toronto with its six municipalities — old Toronto, North York, Scarborough, Etobicoke, York and East York — and is governed by a mayor and 25 ward councillors; Canadian municipalities are 'creatures of the province', so Ontario runs health, education and highways, while the city runs transit, water, roads, planning and police. The city covers about 631 km² with about 3.27 million people in July 2025, while the Greater Toronto Area holds about 7.11 million, with Mississauga, Brampton, Vaughan and Markham as independent cities within the regional municipalities of Peel, York and the rest. Yonge Street is the dividing line for east and west addresses, the Financial District lies downtown by the lake, and Highway 401 and the Gardiner Expressway are the two boundaries in local minds. The old municipalities' names remain the everyday language of address, with 'North York' and 'Scarborough' used more than any ward. Addresses give number, street, neighbourhood and postal code. The TTC's four subway lines and GO regional rail run on one Presto card. About half of residents were born outside Canada. Newcomers most often go wrong by taking downtown for Toronto, when the amalgamated city runs from the lake to beyond the 401.",
    layout:
      "Toronto is built on a plain sloping gently down to the north shore of Lake Ontario, with a regular street grid. Downtown is right on the lake, and the CN Tower and the financial-district towers define the skyline; Yonge Street runs north–south. North of downtown runs a low east–west bluff (along Davenport Road) — the ancient shoreline of glacial Lake Iroquois; the whole of today's downtown once lay on the lake bed. An hour to the south-west along the lake are Niagara Falls.",
    gettingAround:
      "Pearson International Airport (YYZ) is north-west of the city, with the UP Express train about 25 minutes to Union Station downtown; Billy Bishop Airport (YTZ) is on the island, close to downtown. The city has a subway, streetcars and buses, using a Presto card; downtown is walkable. The climate is humid continental with four clear seasons: warm, sometimes muggy summers, cold snowy winters, wind off the lake, and short spring and autumn.",
    culture:
      "English is universal, with sizeable Chinatown, Little Italy, Little Portugal and Little India neighbourhoods. Torontonians identify strongly with local sport and with the CN Tower as one of the world's tallest structures. Tip 15–20% for table service. In winter pavements ice over — dress warm and watch your footing; summer brings many street festivals.",
    seeAndDo:
      "The CN Tower (observation deck / glass floor); the waterfront and the Toronto Islands (a ferry across for the skyline view); the Royal Ontario Museum and the Art Gallery of Ontario; St Lawrence Market; Kensington Market and Chinatown; the Hockey Hall of Fame; an hour out of town, Niagara Falls (the Canadian-side viewpoints and the Niagara City Cruises boat to the foot of the falls; the Maid of the Mist sails from the US side).",
    whenAndTips:
      "May–October has the best weather, with many summer festivals. Winter is cold and windy off the lake, often well below freezing from December to February. The Niagara Falls day trip is well established but crowded in peak season — book the boat ahead. The UP Express from the airport is faster and cheaper than a taxi.",
  },

  ottawa: {
    // identity sources: 加拿大统计局官方 CSV 全表核对（基准 2025-07-01，2026-01-14 由 The Daily 发布）：
    //   CMA 表 17-10-0148-01、CSD 表 17-10-0155-01。**CSD（市镇）与 CMA（人口普查都会区）是两档并存的官方口径**，
    //   差别可以很大。本项目日历「次年 1 月中旬」那一行核对无误。2026-09-09 核。
    //   CMA「Ottawa - Gatineau (Ontario/Quebec)」2025-07-01 **1,700,014**；
    //   渥太华市（CSD）**1,188,114**（1 级，官方 CSV 全表核对，2026-09-09）。
    //   **这个 CMA 跨安大略与魁北克两省** —— 正文的「国家首都区」说法对应的正是它。
    identity:
      "Ottawa is the capital of Canada, in eastern Ontario on the south bank of the Ottawa River, facing the city of Gatineau in Quebec across the water, with a metro area of about 1.7 million as of July 2025. Britain made it the capital in the mid-19th century precisely because it sits on the boundary between English Ontario and French Quebec, is well back from the US border, and was easier to defend. The city and the river are named for the Odawa (Ottawa) Indigenous nation.",
    // howItWorks sources: 加拿大统计局（StatCan）Subprovincial areas 年度系列，REF_DATE 2025（即 2025-07-01），随 The Daily 2026-01-14《Canada's population estimates: Subprovincial areas, 2025》发布。子代理直接下载官方 CSV 全表核对（非网页摘要、非转述），**级别 1**。
    //   有效表号：**17-10-0155-01（CSD 市镇）/ 17-10-0148-01（CMA 都会区）** —— 旧表号 17-10-0142-01 / 17-10-0135-01 是 2016 边界版，**已停用**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：**次年 1 月中旬**（2023 年数那次延迟到 2024-05 是唯一例外）。下一期 2026-07-01 的数预计 2027-01 中旬。2026 年 5 月的普查结果要 2027 年起才陆续发布，与这个年度估计系列是两条并行数据线。
    //   City of Ottawa（CSD）2025-07-01 = 1,188,114。
    howItWorks:
      "Ottawa has been a single-tier city since 2001, formed by merging eleven municipalities and governed by a mayor and 24 ward councillors; it covers about 2,790 km², of which the urban area is only about 549 km², the rest farmland and villages, with about 1.19 million people in July 2025. With Gatineau across the Ottawa River in Quebec it forms the National Capital Region of about 1.7 million as of July 2025, two cities in two provinces with two legal systems and two main languages, and the National Capital Commission created in 1959 manages the federal lands on both sides and the Greenbelt around the urban area. The federal government is the largest employer, with Parliament Hill, the Supreme Court and the ministries downtown; Centretown and the ByWard Market are the old city, Kanata the technology district to the west, and the names of former municipalities such as Orléans and Nepean remain the everyday language of address. The Rideau Canal was inscribed as World Heritage in 2007 and becomes a skating rink when it freezes. The O-Train light rail opened in 2019. Addresses give number, street, neighbourhood and postal code, and city services are bilingual. Newcomers most often go wrong by picturing Ottawa as a small government town, when its territory is four times that of Toronto.",
    layout:
      "The core of Ottawa is Parliament Hill — a group of Gothic parliament buildings on a cliff above the Ottawa River. The Rideau Canal runs from beside Parliament Hill through the city toward the lake system to the south; it was a 19th-century military canal and is now used for boating in summer and, in winter, becomes one of the longest natural skating rinks in the world. Downtown is compact and walkable, and the ByWard Market is the old quarter.",
    gettingAround:
      "Macdonald–Cartier International Airport (YOW) is south of the city, with bus and light-rail connections. The city has the O-Train light rail and buses, using a Presto card; the core is walkable. The climate is humid continental, and this is one of the coldest capital cities in the world: winters are long and hard (the Rideau Canal freezes thick), summers are warm and sometimes muggy, with tulips in May and autumn colour in October.",
    culture:
      "English and French are both used, with bilingual federal institutions and signs; across the river in Gatineau, French dominates. It is a city of civil servants and museums, slower-paced than Toronto or Montreal. Most national museums need a timed-entry ticket booked online. Tip 15–20% for table service. Skating on the canal in winter is a local tradition, with stalls selling hot drinks and 'BeaverTails' pastries.",
    seeAndDo:
      "Parliament Hill (the summer Changing of the Guard, building tours); the National Gallery of Canada, the Canadian Museum of History (across the river in Gatineau, looking back at Parliament), the War Museum, the Museum of Nature; the Rideau Canal (boat in summer, skating in winter); the ByWard Market; the Tulip Festival in May (marking Canada's wartime shelter of the Dutch royal family).",
    whenAndTips:
      "May (tulips), June–September and late September to mid-October (autumn colour) are best. Winter is bitterly cold but distinctive — canal skating usually opens in January–February, depending on the ice notices. The national museums are numerous and often have free periods — planning your route can save a lot.",
  },

  montreal: {
    // identity sources: 加拿大统计局官方 CSV 全表核对（基准 2025-07-01，2026-01-14 由 The Daily 发布）：
    //   CMA 表 17-10-0148-01、CSD 表 17-10-0155-01。**CSD（市镇）与 CMA（人口普查都会区）是两档并存的官方口径**，
    //   差别可以很大。本项目日历「次年 1 月中旬」那一行核对无误。2026-09-09 核。
    //   CMA「Montréal, Quebec」2025-07-01 **4,597,837**；蒙特利尔市（CSD）约 192 万（1 级，2026-09-09 核）。
    //   **howItWorks 本来就是对的，identity 落后**。
    identity:
      "Montreal is the largest city in Quebec and the second-largest in Canada, with a metro area of about 4.6 million as of July 2025, and one of the largest French-speaking cities in North America (French is the dominant everyday language, and most people also speak English). The city is built on a large island in the St Lawrence River, centred on a small hill called Mont Réal ('Mount Royal') — Jacques Cartier climbed it in 1535 and named it, and the name later became Montréal.",
    // howItWorks sources: 加拿大统计局（StatCan）Subprovincial areas 年度系列，REF_DATE 2025（即 2025-07-01），随 The Daily 2026-01-14《Canada's population estimates: Subprovincial areas, 2025》发布。子代理直接下载官方 CSV 全表核对（非网页摘要、非转述），**级别 1**。
    //   有效表号：**17-10-0155-01（CSD 市镇）/ 17-10-0148-01（CMA 都会区）** —— 旧表号 17-10-0142-01 / 17-10-0135-01 是 2016 边界版，**已停用**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：**次年 1 月中旬**（2023 年数那次延迟到 2024-05 是唯一例外）。下一期 2026-07-01 的数预计 2027-01 中旬。2026 年 5 月的普查结果要 2027 年起才陆续发布，与这个年度估计系列是两条并行数据线。
    //   Ville de Montréal（CSD）1,915,366；Montréal CMA 4,597,837，均 2025-07-01。
    howItWorks:
      "The city of Montreal lies on the Island of Montreal and is divided into nineteen boroughs (arrondissements), each with an elected borough mayor and council running local roads, waste, libraries and community affairs; the island's municipalities were merged in 2002, and in 2006 fourteen of them, Westmount and Mount Royal among them, demerged, so that today fifteen municipalities share the island and an agglomeration council that pools police, fire and water. The city covers about 365 km² with about 1.92 million people in July 2025, while the metropolitan area with Laval and Longueuil holds about 4.6 million, and the Montreal Metropolitan Community gathers 82 municipalities. Quebec's language laws make French the public language of the city, with French first on signs and shopfronts, and the West Island is where the anglophone communities cluster. Mount Royal stands at the centre, with downtown and the Old Port below it, and Boulevard Saint-Laurent is the dividing line for east and west addresses and, historically, between the English and French sides of the city. The STM's four metro lines, the REM opened in 2023 and the Underground City knit downtown together. Addresses give number, street, borough and postal code. Newcomers most often go wrong by taking the whole island for the city of Montreal, when more than a dozen municipalities on it have governments of their own.",
    layout:
      "The island of Montreal is wrapped by the St Lawrence, with Mount Royal in the middle and a park on top overlooking the whole city. Old Montreal (Vieux-Montréal) is by the river, with cobbled streets and 17th–19th-century stone houses and the Notre-Dame Basilica. Beneath the downtown towers is a large 'Underground City' pedestrian network that lets you walk a long way without going outside in winter. The streets are broadly a grid, with some French-style diagonals.",
    gettingAround:
      "Trudeau International Airport (YUL) is west of the city, with the 747 express bus straight to downtown (a light-rail line, the REM, is being added). The city has a four-line métro plus buses, using an OPUS card; downtown and the old town are walkable, and BIXI bikeshare is handy in summer. The climate is humid continental: warm, humid summers packed with festivals, and long, cold, snowy winters, with a muddy thaw in spring.",
    culture:
      "French is the dominant language, and shops and restaurants usually greet you in French (bonjour) — a word of French is welcome; most of the service industry also speaks English. Quebec has a distinct French–North American culture — music, comedy, circus (the home of Cirque du Soleil), café life. Tip 15–20% for table service (about 15% of the pre-tax total). In summer there is a free outdoor festival almost every week.",
    seeAndDo:
      "Old Montreal and the Old Port, the Notre-Dame Basilica; the summit of Mount Royal for the city view; the Jean-Talon and Atwater markets; the Museum of Fine Arts; the métro to the Olympic Park and Botanical Garden; poutine (fries with cheese curds and gravy), smoked-meat sandwiches, bagels. In summer the Jazz Festival and the fireworks festival; in winter a light festival.",
    whenAndTips:
      "June–September is the best season, with the most festivals; late September to mid-October for autumn colour. Winters are cold and snowy, but the Underground City and indoor attractions keep winter workable. A word of French smooths interactions. Around 1 July is the traditional Quebec moving day — transport and lodging are tight.",
  },

  "quebec-city": {
    // identity sources: 加拿大统计局官方 CSV 全表核对（基准 2025-07-01，2026-01-14 由 The Daily 发布）：
    //   CMA 表 17-10-0148-01、CSD 表 17-10-0155-01。**CSD（市镇）与 CMA（人口普查都会区）是两档并存的官方口径**，
    //   差别可以很大。本项目日历「次年 1 月中旬」那一行核对无误。2026-09-09 核。
    //   CMA「Québec, Quebec」2025-07-01 **903,607**；魁北克市（CSD）约 59 万（1 级，2026-09-09 核）。
    identity:
      "Quebec City is the capital of the province of Quebec, set on a cliff (Cap Diamant) where the St Lawrence River suddenly narrows, with a metro area of about 900,000 as of July 2025. The name comes from an Algonquin word, 'kébec', meaning exactly 'where the river narrows'. Its old town is the only walled city in North America with its walls intact; it was founded by the French in 1608 and is one of the earliest European settlements in North America.",
    // howItWorks sources: 加拿大统计局（StatCan）Subprovincial areas 年度系列，REF_DATE 2025（即 2025-07-01），随 The Daily 2026-01-14《Canada's population estimates: Subprovincial areas, 2025》发布。子代理直接下载官方 CSV 全表核对（非网页摘要、非转述），**级别 1**。
    //   有效表号：**17-10-0155-01（CSD 市镇）/ 17-10-0148-01（CMA 都会区）** —— 旧表号 17-10-0142-01 / 17-10-0135-01 是 2016 边界版，**已停用**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：**次年 1 月中旬**（2023 年数那次延迟到 2024-05 是唯一例外）。下一期 2026-07-01 的数预计 2027-01 中旬。2026 年 5 月的普查结果要 2027 年起才陆续发布，与这个年度估计系列是两条并行数据线。
    //   Ville de Québec（CSD）592,658；Québec CMA 903,607，均 2025-07-01。
    howItWorks:
      "Quebec City is the capital of Quebec province, seat of the National Assembly, with the province running health and education and the city running transit, water and planning; since the merger of 2002 it has six boroughs, with about 593,000 people in July 2025 and a metropolitan area of about 904,000, Lévis across the river being another city. The old town stands on the headland where the St Lawrence narrows, in Upper and Lower Town, the only walled city north of Mexico, World Heritage since 1985, with the Château Frontenac as its reference point, the Plains of Abraham outside the walls and Sainte-Foy the commercial and university district to the west; about nine in ten residents have French as their mother tongue, a ferry crosses to Lévis and the airport lies west of town. Newcomers most often go wrong by taking the walled town for Quebec City, when it is one corner of a city of 549,000.",
    layout:
      "Quebec City has an Upper Town and a Lower Town: the Upper Town is on top of the cliff, with the walls, the star-shaped Citadelle and the landmark Château Frontenac hotel; the Lower Town is by the river, the earliest settlement, with Place Royale and the stone lanes of Rue du Petit-Champlain. A funicular and steep stairs connect the two.",
    gettingAround:
      "Jean Lesage International Airport (YQB) is west of the city, with buses and taxis. The city is small and the old town is entirely walkable (hilly, with cobbles — wear comfortable shoes). The climate is humid continental, with cold, snowy winters (the season of the Winter Carnival and an ice hotel) and mild summers with long daylight.",
    culture:
      "French is the overwhelmingly dominant language, more so than in Montreal — a French greeting helps; the tourist areas mostly speak English. There is a strong French-Canadian tradition — traditional food (tourtière meat pie, maple), folk music, Catholic churches. Tip 15–20% for table service. The Winter Carnival (January–February) has ice sculptures, parades and the 'Bonhomme' snowman mascot.",
    seeAndDo:
      "Walk the walls and see the Citadelle changing of the guard; the Château Frontenac and Dufferin Terrace; Place Royale, Rue du Petit-Champlain and the murals in the Lower Town; the Museum of Civilisation; the ferry to Lévis for the view back at the old town; Montmorency Falls (higher than Niagara); in autumn, Île d'Orléans for orchards and sugar shacks.",
    whenAndTips:
      "June–October has pleasant weather, with the best maple colour late September to mid-October. Winter is bitterly cold but full of atmosphere (the Carnival, the ice hotel). The old town is steep and cobbled and very slippery in winter — wear grippy shoes. In peak periods (summer, leaf season, Carnival) lodging is tight — book early.",
  },

  halifax: {
    // identity sources: 加拿大统计局官方 CSV 全表核对（基准 2025-07-01，2026-01-14 由 The Daily 发布）：
    //   CMA 表 17-10-0148-01、CSD 表 17-10-0155-01。**CSD（市镇）与 CMA（人口普查都会区）是两档并存的官方口径**，
    //   差别可以很大。本项目日历「次年 1 月中旬」那一行核对无误。2026-09-09 核。
    //   哈利法克斯 **CSD（哈利法克斯区域市）516,822** / **CMA 544,834**（2025-07-01，1 级，2026-09-09 核）。
    //   **原 identity 的「约 50 万」既不是 CSD 也不是 CMA**，是一个游离的旧数；
    //   howItWorks 的「约 52 万」是 CSD 口径但没标明是哪一档，已一并写清。
    identity:
      "Halifax is the capital of Nova Scotia and the largest city in Atlantic Canada, with a metropolitan area (CMA) of about 550,000 as of July 2025 and about 517,000 in the Halifax Regional Municipality itself, a natural-harbour city that was historically a major British naval base in North America. The name comes from an 18th-century British politician, the Earl of Halifax (there is also a town called Halifax in Yorkshire, England).",
    // howItWorks sources: 加拿大统计局（StatCan）Subprovincial areas 年度系列，REF_DATE 2025（即 2025-07-01），随 The Daily 2026-01-14《Canada's population estimates: Subprovincial areas, 2025》发布。子代理直接下载官方 CSV 全表核对（非网页摘要、非转述），**级别 1**。
    //   有效表号：**17-10-0155-01（CSD 市镇）/ 17-10-0148-01（CMA 都会区）** —— 旧表号 17-10-0142-01 / 17-10-0135-01 是 2016 边界版，**已停用**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：**次年 1 月中旬**（2023 年数那次延迟到 2024-05 是唯一例外）。下一期 2026-07-01 的数预计 2027-01 中旬。2026 年 5 月的普查结果要 2027 年起才陆续发布，与这个年度估计系列是两条并行数据线。
    //   Halifax Regional Municipality（CSD）2025-07-01 = 516,822。
    howItWorks:
      "Halifax is the capital of Nova Scotia, whose province runs health and education; today's Halifax Regional Municipality was formed in 1996 by merging the cities of Halifax and Dartmouth, the town of Bedford and Halifax County, covering about 5,500 km², mostly countryside and coast, with about 517,000 people in July 2025 and an urban core of only about 240 km². The centre lies on the Halifax peninsula, Citadel Hill looking down on the harbour, the boardwalk running along the waterfront, Dartmouth across the harbour reached by two bridges and a ferry, the naval base in the harbour, Dalhousie University on the peninsula and the airport 35 km north. Newcomers most often go wrong by taking Dartmouth for another city, when it is part of the same municipality; conversely, most of the municipality's two hundred communities lie tens of kilometres from the urban core.",
    layout:
      "Halifax is built on a hillside on the west side of a long, deep harbour, with the city of Dartmouth on the far side, linked by ferries and bridges. Downtown is right on the water, and on the hilltop is the star-shaped Citadel fort overlooking the whole harbour. A waterfront boardwalk runs from the casino to the pier markets.",
    gettingAround:
      "Stanfield International Airport (YHZ) is well out of town (about 35 km), with an airport bus. City buses and the harbour ferry (one of the oldest ferry routes in North America) use one fare. Downtown is compact and walkable, but steep. The climate is maritime and milder than inland: cool, foggy summers, autumn storms from the remains of hurricanes, and damp winters with a rain–snow mix.",
    culture:
      "English is universal. This is a seafaring and musical city, with Celtic-style live folk music in the pubs. Seafood is a staple (lobster rolls, mussels, Atlantic salmon). Tip 15–20% for table service. The city has deep ties to two disasters: many victims of the 1912 Titanic are buried here; and a 1917 munitions-ship explosion in the harbour was one of the largest human-made explosions before the nuclear age, with a dedicated exhibit at the maritime museum (a sombre subject).",
    seeAndDo:
      "The Citadel fort (noon gun); the Maritime Museum of the Atlantic (Titanic and the 1917 explosion); the waterfront boardwalk and pier markets; the Public Gardens; the ferry to Dartmouth and back; south along the coast to Peggys Cove for the lighthouse and granite shore; the Annapolis Valley for vineyards.",
    whenAndTips:
      "June–October is best, with seafood and music festivals in September. Watch the forecast for hurricane remnants in September–October (they can cause flight delays). The airport is far from town — plan the transfer. Driving the coast for lighthouses is a classic route — the rocky shore is slippery, so keep away from the surf zone.",
  },

  "st-johns": {
    // identity sources: 加拿大统计局表 17-10-0148-01（Subprovincial areas 年度系列，基准 2025-07-01，随 The Daily 2026-01-14《Canada's population estimates: Subprovincial areas, 2025》发布）：St. John's CMA = 243,478。级别 1，2026-09-09 复核，与本条目 howItWorks 已有的数一致。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710014801
    //   下一期预计 2027-01 发布。CMA（普查大都市区）与 CSD（市本身）是两档，不要混用。
    identity:
      "St. John's is the capital of Newfoundland and Labrador, at the far eastern tip of the island of Newfoundland, with a metro area of about 243,000 (July 2025 estimate) — the easternmost city in North America, and one of the earliest European settlements on the continent. The name is traditionally said to come from the feast of St John the Baptist (24 June 1497, the date John Cabot is traditionally said to have arrived).",
    // howItWorks sources: 加拿大统计局（StatCan）Subprovincial areas 年度系列，REF_DATE 2025（即 2025-07-01），随 The Daily 2026-01-14《Canada's population estimates: Subprovincial areas, 2025》发布。子代理直接下载官方 CSV 全表核对（非网页摘要、非转述），**级别 1**。
    //   有效表号：**17-10-0155-01（CSD 市镇）/ 17-10-0148-01（CMA 都会区）** —— 旧表号 17-10-0142-01 / 17-10-0135-01 是 2016 边界版，**已停用**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：**次年 1 月中旬**（2023 年数那次延迟到 2024-05 是唯一例外）。下一期 2026-07-01 的数预计 2027-01 中旬。2026 年 5 月的普查结果要 2027 年起才陆续发布，与这个年度估计系列是两条并行数据线。
    //   City of St. John's（CSD）128,693；St. John's CMA 243,478，均 2025-07-01。
    howItWorks:
      "St. John's is the capital of Newfoundland and Labrador, whose province runs health and education while the city runs transit, water and planning; the city covers about 446 km² with about 129,000 people in July 2025 and a metropolitan area of about 243,000, Mount Pearl and Paradise being municipalities of their own. The city grew around a natural harbour entered through the Narrows, Signal Hill guarding the north side, coloured row houses climbing the slope, Water Street among the oldest commercial streets in North America, and Cape Spear 15 km south-east the easternmost point of the continent; offshore oil has made it the oil centre of eastern Canada, fog falls on more than a hundred days a year, and the clock runs an hour and a half ahead of Eastern time. Newcomers most often go wrong by reckoning the time from other Canadian cities, when Newfoundland keeps a time zone of its own, ninety minutes ahead of Toronto.",
    layout:
      "St. John's hugs a nearly landlocked harbour with a single narrow channel (The Narrows) out to the Atlantic, cliffs on either side, and Signal Hill on the northern headland. Downtown houses climb steep slopes and are painted bright candy colours ('Jellybean Row'). Beyond the city, open rocky barrens and coast begin quickly.",
    gettingAround:
      "St. John's International Airport (YYT) is very close to town (about 10 minutes). The city has buses, but it is steep and attractions are scattered — a rental car is easiest, and is really needed for the coast and lighthouses. The climate is maritime — foggy, windy and very changeable, with cool summers (rarely above 20°C) and damp winters with rain, snow and freezing rain. This is one of the foggiest, windiest and wettest cities in Canada.",
    culture:
      "English is universal, with a distinctive Newfoundland accent and vocabulary (influenced by Ireland and the west of England). The city is known for hospitality, folk music and pub culture, and George Street claims one of the highest densities of bars anywhere. Seafood and traditional food (cod, Jiggs' dinner) are staples. Visitors sometimes take part in a half-joking 'screech-in' welcome ceremony (kiss a cod, take a shot of rum). Tip 15–20% for table service.",
    seeAndDo:
      "Signal Hill (where Marconi received the first transatlantic radio signal) and Cape Spear (the easternmost point of North America, for whales and icebergs); the candy-coloured houses and Water Street downtown; The Rooms (the provincial museum); hiking the East Coast Trail; May–June for drifting icebergs, June–July for humpback whales and one of the world's largest puffin colonies.",
    whenAndTips:
      "June–September is best: May–June is iceberg season on 'Iceberg Alley', June–August for whales and seabirds. The weather changes fast and it is often foggy and windy — carry a windproof, waterproof jacket and keep the itinerary flexible (flights are often fog-delayed). At the coastal cliffs stay well back from the edge — the wind is strong.",
  },

  winnipeg: {
    // identity sources: 加拿大统计局官方 CSV 全表核对（基准 2025-07-01，2026-01-14 由 The Daily 发布）：
    //   CMA 表 17-10-0148-01、CSD 表 17-10-0155-01。**CSD（市镇）与 CMA（人口普查都会区）是两档并存的官方口径**，
    //   差别可以很大。本项目日历「次年 1 月中旬」那一行核对无误。2026-09-09 核。
    //   温尼伯 **CSD 850,260** / **CMA 951,758**（2025-07-01，1 级，2026-09-09 核）。
    //   **identity 把 CSD 的 85 万贴上了「都会区」的标签** —— 两个数字都是真的，错在标签。
    //   howItWorks 本来就把两档分开写对了。
    //   **注意：这类错 `C6i` 抓不到** —— 85 万与 95 万只差约 11%，落在 20% 容差内。
    identity:
      "Winnipeg is the capital of Manitoba, on the eastern edge of the Canadian prairies at the meeting of the Red and Assiniboine rivers, with a metro area of about 950,000 as of July 2025. This has long been a meeting point for Indigenous peoples and the fur trade, and became the 'gateway to the West' with the railway in the late 19th century. The name comes from the Cree 'wīnipēk', meaning 'muddy water', for Lake Winnipeg to the north.",
    // howItWorks sources: 加拿大统计局（StatCan）Subprovincial areas 年度系列，REF_DATE 2025（即 2025-07-01），随 The Daily 2026-01-14《Canada's population estimates: Subprovincial areas, 2025》发布。子代理直接下载官方 CSV 全表核对（非网页摘要、非转述），**级别 1**。
    //   有效表号：**17-10-0155-01（CSD 市镇）/ 17-10-0148-01（CMA 都会区）** —— 旧表号 17-10-0142-01 / 17-10-0135-01 是 2016 边界版，**已停用**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：**次年 1 月中旬**（2023 年数那次延迟到 2024-05 是唯一例外）。下一期 2026-07-01 的数预计 2027-01 中旬。2026 年 5 月的普查结果要 2027 年起才陆续发布，与这个年度估计系列是两条并行数据线。
    //   City of Winnipeg（CSD）850,260；Winnipeg CMA 951,758，均 2025-07-01。
    howItWorks:
      "Winnipeg is the capital of Manitoba, whose province runs health and education; the 'Unicity' reform of 1972 merged the surrounding municipalities into one single-tier city of about 464 km², with about 850,000 people in July 2025 and a metropolitan area of about 952,000, six in ten of the province. The centre lies at The Forks where the Red and Assiniboine rivers meet, the corner of Portage and Main is the city's reference point, the Exchange District the warehouse quarter of around 1900, St. Boniface on the east bank of the Red the largest francophone community in the west, the human rights museum beside The Forks, winter averaging −16°C under the nickname 'Winterpeg', and the airport west of town. Newcomers most often go wrong by taking Winnipeg for a small prairie town, when it holds six in ten of the province's people and has a ballet and a symphony orchestra.",
    layout:
      "Winnipeg is built on an extremely flat lake plain (the bed of glacial Lake Agassiz), with no hills at all. The river junction, The Forks, is the historic and present-day centre, with a market and paths. The streets are a large grid, and downtown's Portage and Main intersection, billed as the \"crossroads of Canada,\" is famous for its wind and cold.",
    gettingAround:
      "Richardson International Airport (YWG) is very close to downtown (about 10 minutes). The city relies on buses, is spread out, and most people drive. The climate is a classic continental prairie one with a huge annual range: warm summers with thunderstorms and mosquitoes, and extreme cold and wind in winter (a January wind-chill often below −30°C), with plenty of sunshine.",
    culture:
      "English is universal, with large Ukrainian, Filipino and Indigenous communities — one of the higher urban Indigenous population shares among Canada's big cities. Locals are proud of their cultural institutions (the Royal Winnipeg Ballet, the human-rights museum). Tip 15–20% for table service. Winter is extremely cold, with a big indoor–outdoor gap — bring full cold-weather gear.",
    seeAndDo:
      "The Canadian Museum for Human Rights (a striking landmark building); The Forks market and riverside paths (the river becomes a long skating trail in winter); the Manitoba Museum; the French quarter of St Boniface and its cathedral ruins; Assiniboine Park and Zoo (with a polar-bear exhibit); the beaches on Lake Winnipeg in summer, and the northern lights in winter.",
    whenAndTips:
      "June–September is the most comfortable (and the festival season). Winter is severe — if you come in winter, prepare for −30°C and exposed skin can get frostbite within minutes. Summer evenings bring mosquitoes — take repellent. Attractions are scattered — rent a car or plan the buses.",
  },

  calgary: {
    // identity sources: 加拿大统计局官方 CSV 全表核对（基准 2025-07-01，2026-01-14 由 The Daily 发布）：
    //   CMA 表 17-10-0148-01、CSD 表 17-10-0155-01。**CSD（市镇）与 CMA（人口普查都会区）是两档并存的官方口径**，
    //   差别可以很大。本项目日历「次年 1 月中旬」那一行核对无误。2026-09-09 核。
    //   卡尔加里 **CSD 1,612,834** / **CMA 1,836,012**（2025-07-01，1 级，2026-09-09 核）。
    //   **与温尼伯同一种错：identity 把市域数当成了都会区数**，差约 14%、同样落在 `C6i` 的 20% 容差内。
    identity:
      "Calgary is the largest city in Alberta, on the eastern foot of the Rockies where the prairies meet the mountains, with a metro area of about 1.84 million as of July 2025. It is Canada's oil-and-gas centre and the gateway to Banff, the Rockies and cowboy culture. The name comes from Calgary on the Isle of Mull in Scotland, given by an early North-West Mounted Police commissioner.",
    // howItWorks sources: 加拿大统计局（StatCan）Subprovincial areas 年度系列，REF_DATE 2025（即 2025-07-01），随 The Daily 2026-01-14《Canada's population estimates: Subprovincial areas, 2025》发布。子代理直接下载官方 CSV 全表核对（非网页摘要、非转述），**级别 1**。
    //   有效表号：**17-10-0155-01（CSD 市镇）/ 17-10-0148-01（CMA 都会区）** —— 旧表号 17-10-0142-01 / 17-10-0135-01 是 2016 边界版，**已停用**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：**次年 1 月中旬**（2023 年数那次延迟到 2024-05 是唯一例外）。下一期 2026-07-01 的数预计 2027-01 中旬。2026 年 5 月的普查结果要 2027 年起才陆续发布，与这个年度估计系列是两条并行数据线。
    //   City of Calgary（CSD）1,612,834；Calgary CMA 1,836,012，均 2025-07-01。四年涨约 30 万，是阿尔伯塔近年净流入强劲的真实反映，不是估算异常。
    howItWorks:
      "Calgary is a single-tier city governed by a mayor and fourteen ward councillors; Alberta runs health and education, and the city runs transit, water, roads, planning and police. It covers about 820 km² with about 1.61 million people in July 2025 and about 1.84 million in the metropolitan area, with Airdrie, Cochrane and Okotoks as municipalities of their own. The city's addresses are a quadrant system: Centre Street and the Bow River with Memorial Drive divide it into NW, NE, SW and SE, every street number carries its quadrant, and without it nothing can be found; some 200 neighbourhoods each have a community association and are the unit in which locals place things. Downtown is the tower cluster of the oil companies, joined at second-floor level by the +15 skywalk network so that winter need never reach the street; the Beltline south of downtown is the dense inner district, and the rest is spreading low-density suburb. The CTrain has two light-rail lines, free through downtown. The Rockies stand about 80 km west, and Chinook winds can lift winter temperatures by twenty degrees in a day. Addresses give number, street, quadrant and postal code. Newcomers most often go wrong by dropping the quadrant from an address, when the same number exists once in each of the four.",
    layout:
      "Calgary is built on the prairie at the junction of two rivers (the Bow and the Elbow), at about 1,045 m, with the jagged Rockies on the western skyline. Downtown has a dense cluster of towers and one of Canada's most complete indoor skywalk systems (the +15 network) for the cold winters. The city sprawls in all directions and depends heavily on its ring road.",
    gettingAround:
      "Calgary International Airport (YYC) is north-east of the city, with buses and an airport coach to downtown and Banff. The city has the CTrain light rail (free in the downtown section) and buses, using a Connect card; outside downtown you basically need to drive. The climate is semi-arid and high: lots of sun, dry air, big day–night swings, and in winter the 'chinook' — a warm wind off the Rockies that can raise the temperature 15–20°C in a day.",
    culture:
      "English is universal. Calgary is proud of its cowboy culture; the Calgary Stampede each July is one of North America's largest rodeos and fairs, and the whole city dresses in western wear. The city is young, with a strong outdoor culture. Tip 15–20% for table service. Chinooks come and go fast in winter — dress in layers you can add or shed.",
    seeAndDo:
      "The Calgary Tower observation deck; the Glenbow Museum and Studio Bell (the National Music Centre); Prince's Island Park and the Bow River paths; Heritage Park historical village; the Stampede in July. Most people use Calgary as a base, driving 1.5 hours west into Banff National Park, Lake Louise and Canmore.",
    whenAndTips:
      "June–September is best; during the Stampede in July the whole city is booked out — reserve early. Driving into the mountains in winter needs winter tyres and a check of the pass conditions. The altitude and strong sun call for hydration and sunscreen. Banff is a full-day trip, and the national park needs a park pass.",
  },

  edmonton: {
    // identity sources: 加拿大统计局官方 CSV 全表核对（基准 2025-07-01，2026-01-14 由 The Daily 发布）：
    //   CMA 表 17-10-0148-01、CSD 表 17-10-0155-01。**CSD（市镇）与 CMA（人口普查都会区）是两档并存的官方口径**，
    //   差别可以很大。本项目日历「次年 1 月中旬」那一行核对无误。2026-09-09 核。
    //   埃德蒙顿 **CSD 1,238,295** / **CMA 1,692,385**（2025-07-01，1 级，2026-09-09 核）。
    //   **原 identity 的「约 150 万」两档都对不上**，是一个游离的旧数字。
    identity:
      "Edmonton is the capital of Alberta, in the centre of the province on both banks of the North Saskatchewan River valley, with a metro area of about 1.69 million as of July 2025 — one of the northernmost large cities in Canada, and the supply base for the northern oil-sands region and the territories. The name comes from Edmonton, a district of London, England, via a Hudson's Bay Company official's home town.",
    // howItWorks sources: 加拿大统计局（StatCan）Subprovincial areas 年度系列，REF_DATE 2025（即 2025-07-01），随 The Daily 2026-01-14《Canada's population estimates: Subprovincial areas, 2025》发布。子代理直接下载官方 CSV 全表核对（非网页摘要、非转述），**级别 1**。
    //   有效表号：**17-10-0155-01（CSD 市镇）/ 17-10-0148-01（CMA 都会区）** —— 旧表号 17-10-0142-01 / 17-10-0135-01 是 2016 边界版，**已停用**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：**次年 1 月中旬**（2023 年数那次延迟到 2024-05 是唯一例外）。下一期 2026-07-01 的数预计 2027-01 中旬。2026 年 5 月的普查结果要 2027 年起才陆续发布，与这个年度估计系列是两条并行数据线。
    //   City of Edmonton（CSD）1,238,295；Edmonton CMA 1,692,385，均 2025-07-01。
    howItWorks:
      "Edmonton is the capital of Alberta, with the legislature on the high ground above the river valley, the province running health and education and the city running transit, water and police; the city covers about 766 km² with about 1.24 million people in July 2025 and a metropolitan area of about 1.69 million, St. Albert and Strathcona County being municipalities of their own. The North Saskatchewan valley runs through the middle as one of the largest urban park systems in North America, downtown and the Ice District on the north bank, Old Strathcona with Whyte Avenue, merged in 1912, on the south; West Edmonton Mall lies in the western suburbs, the LRT joins north and south, the airport lies 30 km south at Leduc, and the city is the gateway to the oil sands. Newcomers most often go wrong by taking Edmonton for a foil to Calgary, when it is the provincial capital and matches Calgary in population.",
    layout:
      "Edmonton straddles the North Saskatchewan River, whose banks hold one of the largest connected urban park systems in North America (the 'river valley'). Downtown is on the plain on the north bank; south across the river are the historic Old Strathcona district and the university. The city is flat, gridded and very spread out.",
    gettingAround:
      "Edmonton International Airport (YEG) is well south of the city, with an airport bus. The city has LRT and buses, using an Arc card; overall it is very car-dependent. The climate is continental, with long, hard winters (colder than Calgary, less affected by chinooks) and warm summers with very long daylight (it gets dark late in June), good for the outdoors.",
    culture:
      "English is universal. Edmonton calls itself the 'Festival City', with a festival almost every week in summer (a folk festival, a Fringe theatre festival that is one of the largest in North America). It is also known for hockey and for big shopping malls. Tip 15–20% for table service. Winter is extremely cold — dress warm.",
    seeAndDo:
      "West Edmonton Mall (once the world's largest, with a water park and an indoor roller coaster); the Alberta Legislature and the river-valley paths and bridges; the Royal Alberta Museum; Elk Island National Park (for bison, very close to the city); summer festivals, and the northern lights in winter. Many people use Edmonton as a starting point for Jasper National Park to the west or the lake country and oil-sands region to the north.",
    whenAndTips:
      "June–August is the most comfortable, with very long daylight and dense festivals. Winter is very cold — prepare for below −25°C. The city is spread out with limited transit — a rental car is easier. For the Rockies, people usually go via Calgary or drive directly, a fair distance.",
  },

  vancouver: {
    // identity sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Vancouver CMA 2025-07-01 = 3,088,036；City of Vancouver = 740,454。
    identity:
      "Vancouver is the largest city in British Columbia, in the south-western corner of Canada between a river delta and an ocean inlet, with a metro area of about 3.09 million (July 2025, Statistics Canada) — backed by the Coast Mountains and facing the sea, and known for its mountains-meet-ocean setting and its mild, rainy climate. The name comes from the 18th-century British naval officer George Vancouver (there is also a city called Vancouver in Washington State, USA).",
    // howItWorks sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Metro Vancouver / Vancouver CMA 2025-07-01 = 3,088,036。
    howItWorks:
      "The Vancouver people speak of is, administratively, only the City of Vancouver of about 115 km² on the Burrard Peninsula, with about 740,000 people in July 2025, governed by a mayor and ten councillors elected at large without wards; the Metro Vancouver Regional District of 21 municipalities, one First Nation and one electoral area holds about 3.09 million (July 2025), and Surrey, Burnaby and Richmond are cities with governments of their own, Surrey's population now approaching Vancouver's. British Columbia runs health and education, the regional district runs water and regional planning, and TransLink runs transport for the whole region — three SkyTrain lines, the SeaBus and buses on one Compass card. Downtown sits at the tip of the peninsula, Main Street is the dividing line for east and west addresses and, in local minds, between the East Side and the West Side, and the North Shore across the Lions Gate and Second Narrows bridges is two other municipalities. About half of residents are of Asian descent. Addresses give number, street, municipality and postal code. Housing cost is the city's daily topic and rain its weather. Newcomers most often go wrong by taking the City of Vancouver for the whole of Metro Vancouver, when it holds only about a quarter of the region's people.",
    layout:
      "The city of Vancouver is mostly on a peninsula: downtown and the towers are at the eastern end, Stanley Park takes up a large tract of original forest at the western tip, and False Creek separates downtown from the south side. South of the city is the flat farmland of the Fraser River delta and the airport; north across the inlet are North and West Vancouver and the steep Coast Mountains (with ski areas).",
    gettingAround:
      "Vancouver International Airport (YVR) is on an island in the delta, with the Canada Line light rail about 25 minutes to downtown. The city has the driverless SkyTrain, buses and a SeaBus, using a Compass card; downtown and Stanley Park are good for walking and cycling. The climate is temperate maritime: mild, rainy winters (rarely snow in the city, snow in the mountains), and dry, warm summers, never extreme.",
    culture:
      "English is universal, and this is one of the most heavily Asian-Canadian big cities in the country, with large Cantonese-, Mandarin- and Punjabi-speaking communities and extremely diverse food. Life revolves around the outdoors — hiking, skiing, kayaking, running. The city is on the traditional territory of the Musqueam, Squamish and Tsleil-Waututh nations. Tip 15–20% for table service. It rains a lot — a waterproof jacket is essential.",
    seeAndDo:
      "Stanley Park (the seawall, totem poles, old-growth forest); Granville Island market; the steam clock in Gastown; the Capilano Suspension Bridge; the gondola up Grouse Mountain for the city view; cycling the seawall around False Creek; an hour north to Whistler (the Winter Olympics venue, a year-round resort), or south to Richmond for Asian food.",
    whenAndTips:
      "June–September is best — dry and mild; the rest of the year is wet, with snow for skiing in the mountains. In summer there is occasional smoke haze from interior wildfires — watch air quality. Housing and prices are high. The Sea-to-Sky Highway to Whistler is spectacular but winding, and needs winter tyres in winter.",
  },

  // ── Canada batch 2 (2026-09-05) ──
  victoria: {
    // howItWorks sources（2026-09-15 核实，add-year）: StatCan 2021 Census（经维基信息框转引，3 级）；2026 年普查结果约 2027-02 起发布；下一期约 2027-02
    identity:
      "Victoria is the capital of British Columbia, at the southern tip of Vancouver Island, with about 92,000 people in the city and about 400,000 in the metro area (2021 census). It began in 1843 as the Hudson's Bay Company's Fort Victoria and became the provincial capital in 1871; the Parliament Buildings (1897) and the Empress Hotel (1908) on the Inner Harbour are its emblems, and the Butchart Gardens, opened in 1904, were made from a quarry. Victoria has one of the mildest climates in Canada and is called the 'Garden City', with ferries to Vancouver and Seattle. The land is the traditional territory of the Lekwungen people, today the Songhees and Esquimalt Nations.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Victoria (City of Victoria ~19.5 km², 91,867 2021; Greater Victoria/Capital Regional District 13 municipalities ~397,000; capital of BC, legislature; Inner Harbour; Empress; Chinatown; Butchart in Central Saanich; ferries Swartz Bay 32 km; airport at Sidney; seaplanes)
    howItWorks:
      "Victoria is the capital of British Columbia, with the legislature on the Inner Harbour and the province running health and education; the City of Victoria itself covers only about 20 km² with about 92,000 people at the 2021 census, while Greater Victoria's thirteen municipalities held about 400,000 at the same census, Saanich, Oak Bay, Esquimalt and Langford each with a council of their own and the Capital Regional District running water and regional planning. The centre wraps three sides of the Inner Harbour, with the Empress Hotel and the legislature as reference points and the oldest Chinatown in Canada; Butchart Gardens lies in Central Saanich, the ferry terminal 32 km north at Swartz Bay, the airport at Sidney, and seaplanes fly from the harbour straight to Vancouver. Newcomers most often go wrong by assuming Victoria is on the mainland, when it is on Vancouver Island, or by taking the City of Victoria for the whole, when it holds a quarter of Greater Victoria.",
    layout:
      "Downtown wraps around the Inner Harbour: the Parliament Buildings stand on the south shore, the Empress Hotel and the Royal BC Museum on the east shore, and Government Street runs north through the shops to Chinatown, one of Canada's oldest. Beacon Hill Park lies on the shore south of downtown, with Dallas Road following the coast east. The Butchart Gardens are about 20 km north at Brentwood Bay, the airport about 25 km north at Sidney, the BC Ferries terminal for Vancouver (Tsawwassen) at Swartz Bay, and the Seattle boats leave from the Inner Harbour.",
    gettingAround:
      "Victoria International Airport (YYJ), about 25 km north of the city, has scheduled domestic and cross-border flights; floatplanes fly from the Inner Harbour to downtown Vancouver in about 35 minutes. BC Ferries from Swartz Bay to Tsawwassen take about 1 hour 35 minutes (plus buses at each end), and the Victoria Clipper fast ferry reaches Seattle in about 2 hours 45 minutes. Local buses run, downtown is walkable, and cycling along the shore and the Galloping Goose trail is easy; the Butchart Gardens are reached by bus or tour coach. The climate is a mild Mediterranean type with wet, nearly snowless winters and dry cool summers.",
    culture:
      "English is universal, with deep British traditions: afternoon tea at the Empress needs a reservation and has a dress code. Indigenous culture is shown at the Royal BC Museum and Thunderbird Park — respect the copyright of Indigenous art and ceremonial objects. Tip 15–20% in restaurants. Buskers, ferries and floatplanes are the daily life of the harbour. Whale-watching boats sail April–October and keep the regulated distance from orcas.",
    seeAndDo:
      "The Inner Harbour and the Parliament Buildings (lit at night); the Royal BC Museum and its totem poles; afternoon tea at the Empress; the Butchart Gardens; Beacon Hill Park and Dallas Road; Chinatown and Fan Tan Alley (Canada's narrowest street); whale watching; Craigdarroch Castle; Hatley Castle; a floatplane from the Inner Harbour.",
    whenAndTips:
      "May–September is most comfortable and the gardens peak in May–June; winters are mild, wet and quiet. A day for the city, half a day for the Butchart Gardens, half a day for whales. Linked with Vancouver — reserve ferry vehicle space in high season.",
  },
  whistler: {
    // identity sources: 加拿大统计局 Table 17-10-0155-01：Resort Municipality of Whistler（DM）2025-07-01 = 15,090。上一处补丁只改到了 howItWorks 的英文，identity 的英文句是另一处写法，单独补。
    identity:
      "Whistler lies in the Coast Mountains of British Columbia about 125 km north of Vancouver at about 670 m, with about 15,000 permanent residents (July 2025, Statistics Canada) and more than two million visitors a year. Whistler Blackcomb is one of the largest ski resorts in North America, and the Peak 2 Peak Gondola spans 4.4 km between the two mountains; the alpine, sliding and Nordic events of the 2010 Vancouver Winter Olympics were held here. Summer brings the mountain-bike park, hiking and the lakes. The land is the shared traditional territory of the Squamish and Lil'wat Nations, whose joint cultural centre stands in the village.",
    // howItWorks sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   同上。
    howItWorks:
      "Whistler is Canada's first 'resort municipality', created by special provincial legislation in 1975, covering about 240 km² with about 15,000 permanent residents in July 2025 and more than 2 million visitors a year; the council runs local services and the rest belongs to the province. Whistler Village is the pedestrian quarter built in 1980 at the foot of the two mountains, the gondolas of Whistler and Blackcomb rise straight from the village, the Peak 2 Peak gondola joins the two, and the alpine events of the 2010 Olympics were held here; the Sea-to-Sky Highway runs about 125 km to Vancouver, there is no airport with scheduled flights, and the Lil'wat and Squamish nations are the peoples of this land. Newcomers most often go wrong by taking Whistler for a ski hill, when it is a year-round resort municipality that lives on mountain biking in summer.",
    layout:
      "Whistler Village is a pedestrian precinct with the hotels, restaurants and gondola bases together; the Whistler and Blackcomb lifts leave from the village and the Upper Village respectively, Olympic Plaza is at the north end of the village, and the Squamish Lil'wat Cultural Centre is in the Upper Village. Lost Lake lies north-east of the village and Alta Lake south-west, with the Valley Trail linking them and Creekside. The Sea-to-Sky Highway (Highway 99) arrives from Vancouver via Squamish and continues north to Pemberton.",
    gettingAround:
      "Whistler has no scheduled flights; from Vancouver International (YVR) the Sea-to-Sky Highway takes about 2 hours, with several airport coach services, and in summer there are helicopter and floatplane sightseeing links. The village is walkable and free buses link Creekside and the other neighbourhoods — a car is unnecessary. Winter tyres are required on the Sea-to-Sky from October to March. The climate is mountain, with snowy winters and warm dry summers.",
    culture:
      "English is universal. The Squamish Lil'wat Cultural Centre presents both nations' cultures — respect the exhibits and ceremonies. Ski within the marked difficulty grades; backcountry skiing needs avalanche gear and knowledge; the bike park requires helmets and protection. Tip 15–20% in restaurants. Bears are common in summer — dispose of rubbish properly and never feed them. Resort prices are high.",
    seeAndDo:
      "Skiing and snowboarding at Whistler Blackcomb in winter; the Peak 2 Peak Gondola (all year); the summer bike park and alpine trails; the Squamish Lil'wat Cultural Centre; the Audain Art Museum and the village restaurants; paddling on Lost Lake and Alta Lake; Scandinave Spa; Shannon Falls and the Sea to Sky Gondola at Squamish on the way.",
    whenAndTips:
      "December–March is ski season (busiest in late December and February), June–September the summer season; April–May and October–November are the shoulder, with some facilities closed. Stay at least two nights. Check DriveBC for winter road conditions and fit winter tyres.",
  },
  banff: {
    // identity sources（2026-09-13 回扫改）：「唯一」→「第一个」—— 贾斯珀 2001 年也在国家公园内设市（Town of Banff 官网，1 级）。核实 2026-09-13
    identity:
      "Banff is a small town in the Canadian Rockies about 126 km west of Calgary in Alberta, at about 1,400 m, with about 8,300 people (2021 census). It lies inside Banff National Park, established in 1885 as Canada's first national park, and in 1990 became the first municipality incorporated inside a Canadian national park. The park was created around the Cave and Basin hot springs discovered in 1883, and in 1985 it was inscribed with Jasper and its neighbours as the 'Canadian Rocky Mountain Parks' World Heritage site. Lake Louise lies about 58 km north-west, and the Icefields Parkway runs from here to Jasper. The land is the traditional territory of the Stoney Nakoda and other nations within Treaty 7.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Banff (Town of Banff, incorporated 1990 within Banff National Park on federal land; need-to-reside rule; 4.08 km²; 8,305 2021; Banff Avenue; Bow River; Sulphur Mountain gondola; Lake Louise 57 km in Improvement District 9; Calgary 126 km; Roam transit; no airport)
    howItWorks:
      "The Town of Banff is the first municipality in Canada created inside a national park, incorporated in 1990 on federal land belonging to Parks Canada, covering only about 4 km² with about 8,300 people in 2021; the council runs local services, but commercial floor space is capped, only those who work in town may live there, and a house cannot simply be bought. The town lies along the Bow River and Banff Avenue, the Sulphur Mountain gondola climbs from its edge with the hot springs at the foot; Lake Louise lies 57 km north-west in another administrative district, Calgary 126 km east, a park pass is needed to enter, Roam buses join the town to its surroundings, and there is no airport with scheduled flights. Newcomers most often go wrong by taking the Town of Banff for Banff National Park, when the park covers 6,600 km² and the town is one point within it.",
    layout:
      "The town sits in the Bow Valley with Banff Avenue as its main street, framed by Cascade Mountain at one end and Sulphur Mountain at the other: Sulphur has the gondola and the Upper Hot Springs, with the Fairmont Banff Springs hotel and Bow Falls at its foot, and the Cave and Basin historic site is on the south bank of the Bow. Lake Minnewanka lies about 10 km north-east and the Vermilion Lakes west of town. Lake Louise and Moraine Lake are north-west, and the Icefields Parkway runs north from Lake Louise to the Columbia Icefield and Jasper. Canmore is about 25 km east, outside the park.",
    gettingAround:
      "Banff has no airport with scheduled flights; from Calgary International (YYC) the Trans-Canada Highway takes 1.5–2 hours, with several airport coaches. A park pass is required (per vehicle or per person-day). The town is walkable, and Roam buses link the town, Sulphur Mountain, Lake Minnewanka and Canmore, with summer services to Lake Louise; Moraine Lake is open only to park shuttles and reserved buses. Winter tyres are required on the highways. The climate is mountain, with cold snowy winters, cool summers and changeable weather.",
    culture:
      "English is universal. Wildlife in the park (elk, bears, bighorn sheep) is never approached or fed — keep at least 30 m away, 100 m from bears; carry bear spray on hikes, stay on open trails, and some trails require group travel in peak season. The hot springs have swimwear rules. Indigenous culture is presented at the Banff Park Museum and the Whyte Museum, and Banff Indigenous Day is held in July. Tip 15–20% in restaurants. Banff is expensive and lodging must be booked early in high season.",
    seeAndDo:
      "The Banff Gondola and the summit boardwalk on Sulphur Mountain; the Upper Hot Springs; the Cave and Basin site; Bow Falls and the Fairmont; the Lake Minnewanka cruise; sunrise at the Vermilion Lakes; the Tunnel Mountain trail; Lake Louise (the shoreline walk, the Lake Agnes teahouse) and Moraine Lake (June–October); Johnston Canyon; the Icefields Parkway to Peyto Lake and Bow Lake; skiing at Sunshine Village, Lake Louise and Mount Norquay in winter.",
    whenAndTips:
      "June–September is the peak (the lakes are bluest in July–August), and the Moraine Lake road opens only June–October; December–April is ski season; May and October–November are quiet but some facilities close. Two days for Banff, a day for Lake Louise, a day for the Icefields Parkway. Reserve parking and shuttles for Moraine Lake and Lake Louise in advance.",
  },
  jasper: {
    identity:
      "Jasper is a small town in the northern Canadian Rockies about 360 km west of Edmonton in Alberta, at about 1,060 m, with about 4,700 people (2021 census), the service centre of Jasper National Park — established in 1907 and the largest of the Rocky Mountain national parks — and part of the 'Canadian Rocky Mountain Parks' World Heritage site and a dark-sky preserve. Maligne Lake, the Athabasca Glacier of the Columbia Icefield and the Jasper SkyTram are all here. A wildfire that began on 22 July 2024 destroyed about a third of the town's buildings; the town has been rebuilding and gradually welcoming visitors again. VIA Rail's transcontinental 'Canadian' and the train to Prince Rupert stop here.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Jasper (Municipality of Jasper, specialized municipality 2001 within Jasper National Park on Parks Canada land; 4,738 2021; Athabasca; Icefields Parkway; VIA Rail; Edmonton ~360 km; July 2024 wildfire destroyed 358 buildings, about a third of structures)
    howItWorks:
      "Jasper is a town inside Jasper National Park, a 'specialized municipality' of Alberta since 2001 on land belonging to Parks Canada, where only those who work in the park may live, with about 4,700 people in 2021; the council and Parks Canada run local affairs together. The town lies beside the railway in the Athabasca valley as the commercial centre of the park, VIA Rail's Canadian stops here, the Icefields Parkway runs south to the Columbia Icefield and Lake Louise, Maligne Lake lies 45 km south-east, the SkyTram outside town and Edmonton about 360 km east. The wildfire of July 2024 destroyed about a third of the town's buildings, and rebuilding continues. Newcomers most often go wrong by taking Jasper for an ordinary mountain town, when it is a regulated townsite inside a park, entered on a park pass.",
    layout:
      "The town sits in the Athabasca valley, with the railway station and the main street, Connaught Drive, at its centre — it is small enough to walk. Pyramid and Patricia lakes lie about 6 km north, the SkyTram about 7 km south on Whistlers Mountain, and Maligne Canyon, Medicine Lake and Maligne Lake to the south-east (Maligne Lake about 48 km), with Miette Hot Springs about 60 km north-east. The Icefields Parkway runs south from town to the Columbia Icefield (about 105 km) and on to Banff, passing Mount Edith Cavell.",
    gettingAround:
      "Jasper has no airport with scheduled flights; the nearest are Edmonton (YEG, about 4 hours by road) and Calgary (about 5 hours via the Icefields Parkway). VIA Rail's 'Canadian' (Vancouver–Toronto) stops a few times a week, about 20 hours from Vancouver, and the Rocky Mountaineer sightseeing train also serves Jasper; buses run from Edmonton and Banff. A park pass is required. The town is walkable; Maligne Lake, the icefield and the hot springs need a car or a tour, and Maligne Lake has boat cruises. The climate is mountain, with cold snowy winters and cool summers.",
    culture:
      "English is universal. Parts of the town are still being rebuilt after the 2024 fire — respect residents and do not enter or photograph construction and fire-affected areas. Keep your distance from wildlife (elk, bears, bighorn sheep, moose) and never feed them; elk are especially dangerous in the autumn rut. It is a dark-sky preserve — keep lights low at night, and a Dark Sky Festival is held in October. Tip 15–20% in restaurants. Walk on the glacier only with the licensed ice explorers or guides.",
    seeAndDo:
      "The Maligne Lake cruise to Spirit Island; the Maligne Canyon trail; the Jasper SkyTram; Pyramid and Patricia lakes; Miette Hot Springs; the Angel Glacier at Mount Edith Cavell; the Athabasca Glacier (the Ice Explorer, the Glacier Skywalk); Athabasca Falls and Sunwapta Falls; stargazing at night; skiing at Marmot Basin in winter.",
    whenAndTips:
      "June–September is the peak, with the Maligne Lake cruise and the Ice Explorer running May–October; winter is quiet, with skiing and stargazing. Two days for the town, a day on the Icefields Parkway to Banff. Lodging capacity is reduced after the fire — book well ahead and check the park's notices.",
  },
  regina: {
    // identity sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Regina（CY）2025-07-01 = 263,419。
    identity:
      "Regina is the capital of Saskatchewan, in the middle of the Canadian prairies, with about 263,000 people (July 2025, Statistics Canada). It was named in 1882 by Princess Louise after Queen Victoria's Latin title (the earlier Cree name Wascana means 'pile of bones'), and became capital of the new province in 1906. Wascana Centre south of downtown is a 9.3 km² city park around an artificial lake, with the Legislative Building of 1912 on its shore; the RCMP's national training academy, 'Depot', has been in Regina since 1885, with the RCMP Heritage Centre beside it. The city lies in Treaty 4 territory, the traditional land of the Cree, Saulteaux, Nakoda and other nations.",
    // howItWorks sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Regina（CY）263,419 / CMA 291,187；Saskatoon（CY）318,067 / CMA 378,475 —— **排名复核后仍成立**，两个口径下萨斯卡通都更大。
    howItWorks:
      "Regina is the capital of Saskatchewan, with the legislative building on Wascana Lake, the province running health and education and the city running transit, water and police; the city covers about 179 km² with about 263,000 people in July 2025 and a metropolitan area of about 291,000, still the province's second city after Saskatoon. The city stands on a flat treeless plain, Wascana Centre among the largest urban parks in North America with the museums and gallery inside it, downtown north of the park, the Cathedral district the old quarter, the RCMP training depot west of town, the Trans-Canada passing its edge and the airport to the south-west. Newcomers most often go wrong by assuming the capital is the largest city, when Saskatchewan's largest lies 260 km north at Saskatoon.",
    layout:
      "Downtown surrounds Victoria Park in a regular grid; Wascana Centre and its lake lie directly south, with the Legislative Building on the south shore and the Royal Saskatchewan Museum and the MacKenzie Art Gallery on the lakeside. The RCMP Depot and Heritage Centre are on the west side of the city. Flat prairie surrounds the city, and the airport is about 7 km south-west. Saskatoon lies about 260 km north and Moose Jaw about 70 km west.",
    gettingAround:
      "Regina International Airport (YQR), about 7 km from downtown, has scheduled flights. There is no intercity passenger rail (VIA runs through Saskatoon); long-distance travel is by bus or car, and the Trans-Canada Highway passes through the city. Local buses run, and downtown and Wascana Centre are walkable or cyclable; elsewhere needs a car. The climate is humid continental with severe dry winters (often below −30°C), warm summers and abundant sunshine.",
    culture:
      "English is universal. The RCMP Depot holds a weekly parade in summer and the Sunset Retreat ceremony, and the Heritage Centre tells the force's history; Indigenous culture is presented in the First Nations gallery of the Royal Saskatchewan Museum, and summer powwows follow their organisers' rules. Saskatchewan is passionate about Canadian football — the Roughriders are Regina's team. Tip 15–20% in restaurants. Equip for extreme cold in winter.",
    seeAndDo:
      "Wascana Centre (the lake loop, boating) and the Legislative Building (tours); the Royal Saskatchewan Museum (dinosaur fossils, the First Nations gallery); the RCMP Heritage Centre and the Depot parade; the MacKenzie Art Gallery; the Saskatchewan Science Centre; Victoria Park and the downtown farmers' market; a Roughriders home game; the surrounding prairie and skating on Wascana Lake in winter.",
    whenAndTips:
      "June–August is most comfortable and the season for the RCMP parades and outdoor events; winters are bitterly cold. A day for the city. A stop on a Trans-Canada drive between Winnipeg and Calgary.",
  },
  charlottetown: {
    // identity sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Charlottetown（CY）2025-07-01 = 48,118。
    identity:
      "Charlottetown is the capital of Prince Edward Island, with about 48,000 people (July 2025, Statistics Canada). In September 1864 delegates from the colonies met at Province House here to discuss union, a meeting that led to Canadian Confederation in 1867 — hence the title 'Birthplace of Confederation'. Lucy Maud Montgomery's 'Anne of Green Gables' is set at Cavendish on the island (about 40 km away), and the Confederation Centre of the Arts stages the Anne musical every summer. The Confederation Bridge, 12.9 km long and opened in 1997, links the island to New Brunswick. The land is the traditional territory of the Mi'kmaq.",
    // howItWorks sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   同上。
    howItWorks:
      "Charlottetown is the capital of Prince Edward Island, with the legislature in Province House, where the Charlottetown Conference of 1864 set Canadian Confederation in motion, the province running health and education and the city running local services; the city covers about 44 km² with about 48,000 people in July 2025 and a census agglomeration of about 97,000, the whole province holding about 183,000. The centre is the Victorian quarter by the harbour with the Confederation Centre of the Arts as its reference point and the waterfront turned into parks; the Confederation Bridge lies about 55 km west, opened in 1997, 13 km long and the only road link to the mainland, the airport lies north of town, Anne of Green Gables at Cavendish 35 km north, and the island has no railway. Newcomers most often go wrong by taking Charlottetown for a big city, when it is the capital of a small province of 183,000 and the island can be driven end to end in two hours.",
    layout:
      "Downtown sits on the harbour at the mouth of the Hillsborough River in a nineteenth-century street grid: Province House and the Confederation Centre of the Arts are in the middle on Grafton Street, Victoria Row is the pedestrian dining street, and the waterfront has the wharves and cruise boats. Victoria Park lies on the point south-west of downtown. Cavendish and Green Gables are about 40 km away on the north shore, the Confederation Bridge about 55 km south-west at Borden-Carleton, and red-sand beaches and lighthouses line the coast. The airport is about 6 km north.",
    gettingAround:
      "Charlottetown Airport (YYG), about 6 km from the city, has scheduled flights. By road over the Confederation Bridge it is about 2 hours from Moncton and 3.5 from Halifax; a summer ferry from Nova Scotia lands at Wood Islands in the south-east. Local buses run and downtown is walkable; the island needs a car, and the Confederation Trail (about 270 km of converted railway) is good for cycling. The climate is humid continental with cold snowy winters, warm summers and sea breezes.",
    culture:
      "English is universal, with Acadian French communities on the island. Province House is a national historic site — keep quiet. Green Gables is a national historic site with plenty of Anne-themed commerce — respect the residents. Lobster, Malpeque oysters and potatoes are the island's produce, with lobster suppers and an oyster festival in summer. Tip 15–20% in restaurants. Island life is friendly and slow.",
    seeAndDo:
      "Province House and the Confederation Centre of the Arts (the Anne musical); Victoria Row and the waterfront; Victoria Park; Green Gables and Cavendish Beach (Prince Edward Island National Park); cycling the Confederation Trail; the red cliffs and lighthouses of the north shore; a lobster supper; the East Point and West Point lighthouses; the island's music and food festivals in September.",
    whenAndTips:
      "June–September is best, with the Anne musical and the beaches busiest in July–August; winter is quiet with some sights closed. A day for the city, a day for Cavendish and the north shore. The island is small — two to three days circle it.",
  },
  "niagara-falls": {
    // identity sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Niagara Falls（CY）2025-07-01 = 113,983。
    identity:
      "Niagara Falls, Ontario, lies on the west bank of the Niagara River opposite its namesake in New York State, with about 114,000 people (July 2025, Statistics Canada). Niagara Falls consists of the Horseshoe Falls (about 57 m high and 790 m wide, mostly on the Canadian side), the American Falls and the Bridal Veil Falls, with an average flow of about 2,400 m³/s — the largest by volume in North America — formed about 10,000 years ago as the glaciers retreated. The Canadian side faces the Horseshoe Falls head-on with the best views, and the boats, the tunnels behind the falls and the observation tower are all here; Niagara-on-the-Lake about 20 km north is a well-preserved nineteenth-century town and wine region.",
    // howItWorks sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   同上。
    howItWorks:
      "Niagara Falls is a lower-tier city within the Regional Municipality of Niagara in Ontario, about 210 km² with about 114,000 people in July 2025; the region runs police, water and regional roads, the city runs local services, and the parkland and viewing works along the falls are run by the Niagara Parks Commission, a provincial agency outside the city's hands. The Horseshoe Falls lie on the Canadian side, Clifton Hill is the amusement strip above them, high-rise hotels and the casino line the cliff top, the Rainbow Bridge crosses to the American city of the same name, the wineries of Niagara-on-the-Lake lie 20 km north, Toronto 130 km away with a seasonal GO train, and WEGO buses join the sights. Newcomers most often go wrong by not knowing that each bank of the river has a city called 'Niagara Falls' in a different country, and that the bridge crosses a customs post.",
    layout:
      "The city runs along the cliff on the west bank: the Table Rock lookout faces the Horseshoe Falls with the entrance to Journey Behind the Falls beside it; north along the river are the boat dock, the Rainbow Bridge to the United States and the Clifton Hill amusement strip, with the Fallsview hotels and casino on the bluff above and the Skylon Tower in between. Queen Victoria Park stretches along the bank. The Niagara Parkway follows the river north past the Whirlpool and the Floral Clock to Niagara-on-the-Lake; upstream are the power stations and the rapids above the falls. The GO station is in the north of the city.",
    gettingAround:
      "Niagara Falls (on the Canadian side) has no airport with scheduled flights; the nearest are Toronto Pearson (YYZ, about 130 km, 1.5 hours by road) and Hamilton, while Buffalo's airport is about 40 km away across the border. From Toronto there are GO trains (daily in summer and at weekends, about 2 hours), VIA Rail and buses. The WEGO bus links the falls, the hotel district and the station, and the falls area is walkable; Niagara-on-the-Lake is reached by sightseeing bus or car. The climate is humid continental with cold winters — the frozen falls are spectacular — and warm summers.",
    culture:
      "English is universal. The falls area is open around the clock, with illuminations at night and summer fireworks; the boats and Journey Behind the Falls get you wet, and ponchos are supplied. The Rainbow Bridge can be crossed on foot into the United States with a passport and visa. Clifton Hill is a commercial amusement strip with high prices. The Niagara-on-the-Lake wineries are known for icewine — mind the drink-driving limit. Tip 15–20% in restaurants.",
    seeAndDo:
      "The Table Rock view of the Horseshoe Falls; Niagara City Cruises (May–November); Journey Behind the Falls; the Skylon Tower; the Niagara Parks Power Station and tunnel; the White Water Walk and the Whirlpool Aero Car; the Floral Clock, the botanical garden and the butterfly conservatory; the old streets and wineries (icewine) of Niagara-on-the-Lake; the frozen falls and the winter festival of lights; the falls illuminated at night.",
    whenAndTips:
      "May–October is when the boats and most attractions run, with July–August the most crowded; the frozen falls in winter are unique but cold. A day for the falls, half a day for Niagara-on-the-Lake. A day trip from Toronto works, but staying a night gives the night lights and the falls at dawn without crowds.",
  },
  fredericton: {
    // identity sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Fredericton（C）2025-07-01 = 74,655。
    identity:
      "Fredericton is the capital of New Brunswick, on the Saint John River (the Wolastoq), with about 75,000 people (July 2025, Statistics Canada). It was founded in 1785 by Loyalist settlers and made the provincial capital; the Garrison District on the south bank keeps nineteenth-century British army barracks, the Beaverbrook Art Gallery is among the most important galleries in Atlantic Canada, and the University of New Brunswick (1785) is one of Canada's oldest English-language universities. The land is the traditional territory of the Wolastoqiyik (Maliseet) people.",
    // howItWorks sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Fredericton（C）74,655 / CMA 125,303；Moncton 102,378 / 196,143；Saint John 79,371 / 144,543 —— **排名复核后仍成立**，两个口径下弗雷德里克顿都最小。
    howItWorks:
      "Fredericton is the capital of New Brunswick, with the legislature downtown on the south bank of the Saint John River, in Canada's only officially bilingual province, the province running health and education and the city running local services; the city covers about 134 km² with about 75,000 people in July 2025 and a metropolitan area of about 125,000, still the province's third city after Moncton and Saint John. The centre lies on the south bank, with the old barracks of the Garrison District and the Beaverbrook Art Gallery, the University of New Brunswick founded in 1785 on the slope above, the residential north side across the river, trails circling the city on old rail lines and the airport to the south-east. Newcomers most often go wrong by assuming the capital is the largest city, when Fredericton is a small city that lives on government and the university.",
    layout:
      "Downtown lies on the south bank of the river, with Queen and King streets parallel to the water and the Garrison District, the Beaverbrook Art Gallery, the Legislative Building and Christ Church Cathedral all within a few blocks of the river. The University of New Brunswick and St Thomas University sit on the hill south of downtown. The north bank is residential with trails, and the old railway bridge is now a footbridge across the river. Odell Park lies to the south-west. The airport is about 15 km south-east. Saint John is about 110 km south and Moncton about 180 km east.",
    gettingAround:
      "Fredericton International Airport (YFC), about 15 km from the city, has scheduled flights. There is no passenger rail; long-distance travel is by bus or car, with the Trans-Canada Highway passing north of the city. Local buses run, downtown is walkable, and more than 100 km of riverside trails suit cycling. The climate is humid continental with cold snowy winters and warm summers.",
    culture:
      "English and French are both used (New Brunswick is Canada's only officially bilingual province). The Garrison District holds changing-of-the-guard ceremonies and free events in summer. Wolastoqiyik culture is shown at the provincial museum and the gallery, and St Mary's First Nation lies on the north bank. The Harvest Jazz and Blues Festival is held in September. Tip 15–20% in restaurants.",
    seeAndDo:
      "The Beaverbrook Art Gallery; the Garrison District (changing of the guard, markets); the Legislative Building; Christ Church Cathedral; the riverside trails and the footbridge; the Boyce Farmers Market (Saturdays); Odell Park; the University of New Brunswick campus; Kings Landing historical village nearby; the Harvest festival in September.",
    whenAndTips:
      "June–September is most comfortable, with the festival in September and foliage in early October. A day for the city. A stop on a New Brunswick route with the Bay of Fundy and Saint John.",
  },
  yellowknife: {
    // identity sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Yellowknife（CY）2025-07-01 = 22,858。
    identity:
      "Yellowknife is the capital of the Northwest Territories, on the Canadian Shield rock of the northern shore of Great Slave Lake about 400 km south of the Arctic Circle, with about 22,900 people (July 2025, Statistics Canada). It grew on gold from the 1930s, became the capital in 1967 and saw its last gold mine close in 2004; the discovery of diamonds 300 km north in 1991 made it the centre of Canada's diamond industry. Lying directly under the auroral oval with many clear winter nights, it is one of the best places in the world to see the northern lights, from mid-August to April. The Old Town keeps the cabins, houseboats and the Pilots' Monument of the early days. The city is named after the Yellowknives Dene, whose traditional territory this is.",
    // howItWorks sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Yellowknife 22,858；西北地区 2025-07-01 = 45,950。**比例复核**：22,858/45,950 ≈ 49.7%，「近一半」成立。
    // howItWorks sources（2026-09-13 回扫改）：「近九成」→「绝大多数」—— 约 2 万居民中 1.9 万多人撤离，接近九成五（Global News，2 级）；不写替代比例。核实 2026-09-13
    howItWorks:
      "Yellowknife is the capital of the Northwest Territories, with about 22,900 people in July 2025, close to half the territory's 46,000; the territorial assembly runs a consensus government without parties and runs health and education, while the city runs local services. The city lies on the north shore of Great Slave Lake, founded on gold in 1934, its last gold mine closed in 2004 and the diamond mines to the north taking over since 1991; the Old Town stands on the rocky peninsula and Latham Island with houseboats on the lake as its emblem, the new town on the slope with a downtown of government blocks and shops, winter aurora drawing many visitors, an ice road crossing the lake and the airport on the outskirts. The wildfire of August 2023 sent the great majority of residents away for about three weeks. Newcomers most often go wrong by taking Yellowknife for a polar village, when it is the capital of a territory larger than France.",
    layout:
      "The city occupies a rocky peninsula on the northern shore of Great Slave Lake; the New Town (downtown, with the Prince of Wales Northern Heritage Centre and the Legislative Assembly) is in the middle of the peninsula, the Old Town on the lakeshore at its northern end, with the Pilots' Monument on the highest rock and houseboats off Latham Island and Jolliffe Island. The airport is about 5 km west. In winter an ice road crosses the lake to Dettah, a Dene community. Beyond the city lie countless small lakes and Shield rock, with aurora camps on the lakeshores.",
    gettingAround:
      "Yellowknife Airport (YZF), about 5 km from the city, has scheduled domestic flights and is the main way in; the highway from Alberta via the Deh Cho Bridge (opened 2012) takes about 15 hours from Edmonton. Local buses run, and downtown and the Old Town are walkable; aurora viewing needs a tour (with pick-up) or a hire car to get outside town. The climate is subarctic with severe winters (below −40°C), about 20 hours of daylight in June and about 5 in December.",
    culture:
      "English is universal and several Dene languages are spoken; about a quarter of residents are Indigenous. Visit Dene communities such as Dettah with a guide and respect residents; the Northern Heritage Centre presents Dene and Inuit culture. Aurora tours wait at camps or in tents at night — equip for below −30°C (tours usually supply parkas) — and keep headlights away from others' cameras. Tip 15–20% in restaurants. Northern prices are high.",
    seeAndDo:
      "The aurora (mid-August to April, steadiest in winter); the Old Town and the Pilots' Monument; the houseboats and Latham Island; the Prince of Wales Northern Heritage Centre; tours of the Legislative Assembly; Great Slave Lake boat trips and fishing (summer); the Dettah ice road and dog sledding (winter); the Cameron Falls trail; the Snowking's Winter Festival in March.",
    whenAndTips:
      "The aurora is best December–March (many clear nights but extreme cold) and late August–September (mild, with reflections on the lakes); summer brings midnight sun, fishing and paddling. Stay at least three nights to improve the odds of seeing the lights. Book aurora tours and lodging early in high season.",
  },
  whitehorse: {
    // identity sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   Whitehorse（CY）2025-07-01 = 34,129；育空地区 = 48,278。**比例复核：34,129/48,278 ≈ 70.7%**。
    //   **这里还查出一处条目内部自相矛盾**：identity 段写「四分之三」（75%）、howItWorks 段写「七成」，同一件事两个数。即便按 2021 年普查数（28,201/40,232 ≈ 70.1%）也是七成，故统一改为七成。
    identity:
      "Whitehorse is the capital of Yukon, in the valley of the upper Yukon River, with about 34,000 people (July 2025, Statistics Canada) — about seven-tenths of the territory's population. It grew with the Klondike Gold Rush that began in 1896, when stampeders crossed the White Pass from Skagway to here and took boats north to Dawson; the White Pass and Yukon Route railway (1900) and the Alaska Highway (1942) made it a transport hub, and in 1953 it replaced Dawson as capital. The sternwheeler SS Klondike on the riverbank recalls that era, and Miles Canyon lies south of town. The land is the traditional territory of the Kwanlin Dün and Ta'an Kwäch'än nations. Summer days exceed 19 hours and the aurora is visible in winter.",
    // howItWorks sources: 加拿大统计局（StatCan）：市镇口径 Table 17-10-0155-01、都会区/人口聚集区口径 Table 17-10-0148-01（均 2021 边界、2025-07-01 时点，2026-01-14 随 The Daily 发布），省/地区口径 Table 17-10-0009-01（季度，最新一期 2026-06-17 发布、覆盖 2026-04-01）。子代理直接下载官方 CSV 全表核对，**级别 1**。
    //   https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710015501
    //   发布节奏：市镇/都会区年度估计每年 1 月中旬（覆盖上一年 7 月 1 日）；省/地区季度估计在季末后约 3 个月。
    //   同上。
    howItWorks:
      "Whitehorse is the capital of Yukon, taking that role from Dawson in 1953, covering about 416 km² with about 34,000 people in July 2025, seven in ten of the territory's 48,000; the territorial assembly runs health and education and the city runs local services. The centre is a grid on the west bank of the Yukon River, the sternwheeler SS Klondike moored on the bank, the White Pass railway of 1900 once carrying gold-seekers up from Skagway, the Alaska Highway passing at kilometre 1,426, the airport on the bench above the valley, 850 km of trails within the city and aurora in winter; this is the land of the Kwanlin Dün and Ta'an Kwäch'än. Newcomers most often go wrong by assuming the Klondike gold rush happened at Whitehorse, when the goldfields lie 530 km north at Dawson and Whitehorse was only the supply stop on the way.",
    layout:
      "Downtown lies on the flat west bank of the Yukon River with Main Street and Second Avenue parallel to the water; the SS Klondike sits in a riverside park, and the MacBride Museum and the Kwanlin Dün Cultural Centre are also on the riverfront. The airport is on the bluff on the west side of town, about 5 minutes' drive from downtown. Miles Canyon and Schwatka Lake lie about 8 km south, with the fish ladder and hydro dam on the edge of town. The Beringia Interpretive Centre and the transportation museum stand beside the airport. Takhini Hot Springs is about 30 km north-west and Kluane National Park about 150 km west.",
    gettingAround:
      "Whitehorse International Airport (YXY) is on the bluff right beside town, about 3 km from downtown, with scheduled domestic flights. The Alaska Highway passes through the city, about 180 km from Skagway, Alaska; the White Pass railway now runs seasonally only between Skagway and Carcross, with a bus connection to Whitehorse. Local buses run, downtown is walkable and the riverside trails suit cycling; the surroundings need a car. The climate is subarctic, cold in winter but milder than the latitude suggests, with cool dry summers.",
    culture:
      "English is universal and several First Nations languages are spoken. The Kwanlin Dün Cultural Centre presents local First Nations culture — respect ceremonies. Bears and moose are common on the outskirts — carry bear spray and make noise on trails. The gold-rush story is told at the MacBride Museum and the SS Klondike. Tip 15–20% in restaurants. The Yukon Quest sled-dog race in February and the winter Rendezvous festival are the big local events.",
    seeAndDo:
      "The SS Klondike (a national historic site); the MacBride Museum; the Kwanlin Dün Cultural Centre; the Yukon River trail and the fish ladder; the Miles Canyon trail; the Beringia Interpretive Centre and the transportation museum; Takhini Hot Springs; the Yukon Wildlife Preserve; the aurora (September–April); south to the Carcross Desert and Emerald Lake, or to Dawson City (about 530 km) on the gold-rush trail.",
    whenAndTips:
      "June–August has the longest days and the fullest programme; September brings autumn colour and the first auroras; winter is cold but offers the aurora and dog sledding. A day for the town, a day for the surroundings, more for Kluane or Dawson. The hub of the Alaska Highway and the Klondike route.",
  },
};
