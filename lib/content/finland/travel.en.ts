import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Finland ============
  "finland-overview": {
    // identity sources: Statistics Finland《Population growth slowed down in 2025》：2025 年末初步数 5,652,881 人。https://stat.fi/en/publication/cmg6f46k91y0e07w0qtdt6yl7
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Finland sits in Northern Europe, covering about 340,000 km² with a preliminary population of about 5.65 million at the end of 2025 (Statistics Finland). Known as the \"Land of a Thousand Lakes,\" it actually has more than 188,000 lakes, and forest covers about 73% of the country, ranging from the archipelago coast in the south to the Arctic wilderness of Lapland in the north — a dramatic span of latitude and landform.",
    layout:
      "Finland can be divided roughly into: Uusimaa (Helsinki and its surroundings, the political and economic centre), Southwest Finland (Turku and Mariehamn, the archipelago and the autonomous region), Finnish Lakeland (Tampere, Savonlinna and Kuopio, the core of Finland's inland lake district), and Northern Finland including Lapland (Oulu, Rovaniemi and Inari, the Arctic wilderness and tunturi fell country).",
    gettingAround:
      "Helsinki-Vantaa Airport is the main international gateway; domestic flights are hubbed through Helsinki to the main cities nationwide, and the rail network covers the south and centre, though reaching Lapland usually requires a flight or an overnight train. Driving is on the right. The climate transitions from temperate continental in the south to subarctic in the north; northern Lapland has long, severe winters with polar night and the northern lights, and midnight sun in summer. Restaurant bills typically already include service, with no extra tip required. The voltage is 230V with EU-style two-round-pin plugs.",
    culture:
      "The official languages are Finnish and Swedish (Swedish is spoken in the southwest and the Åland Islands), and English proficiency is extremely high. Finns tend to be reserved and value quiet and personal space; sauna culture is central to Finnish life — the country has more saunas than one for every three people. Sauna is traditionally taken nude after a shower, with public saunas usually separated by gender; locals sit on a small towel rather than directly on the bench. Northern Lapland is the traditional homeland of the Indigenous Sámi people. Restaurant bills typically don't require a tip; rounding up is fine.",
    seeAndDo:
      "Natural landforms: Saimaa's islands and the Punkaharju esker, the Koli \"national landscape\" hills, the Salpausselkä UNESCO Global Geopark, the Kvarken Archipelago (a World Heritage Site), and the Lapland wilderness and Halti. Heritage and culture: Senate Square in Helsinki, Turku Castle and Cathedral, Olavinlinna Castle in Savonlinna. Polar experiences: Santa Claus Village and northern-lights viewing at Rovaniemi.",
    whenAndTips:
      "June–August is peak season in the south with the longest daylight; in Lapland the northern lights can be seen December–March, and the midnight sun June–July. For a trip spanning north and south, domestic flights are the practical way to connect the two, while rail suits deeper regional exploration.",
  },
  helsinki: {
    // identity sources: **芬兰的官方人口口径**（2026-09-10 核）：`kunta`（市镇年末人口，芬兰统计局 Tilastokeskus，**逐月初步数、市镇年末数通常次年 1 月随年度汇总公布**）· `taajama`（聚居区/建成区，用于村落级的小地方，**不是每年更新、间隔可达数年**）· `seutukunta`（次区域）· `maakunta`（大区）。**`pääkaupunkiseutu`（首都圈，四个市镇）没有独立的法定统计口径，就是四市之和**；**`Helsingin seutu`（大赫尔辛基）是区域规划与通勤圈意义上的约定俗成范围，发布方不是统计局本身，而是赫尔辛基地区的官方区域统计门户 Helsingin Seudun Suunnat** —— 按本库既定做法**写明发布方与年份，不禁用这个词**（同瑞士巴塞尔三国区、瑞典 Göteborgsregionen、捷克 Eurostat FUA、德国 MKRO 都市区）。
    //   赫尔辛基市 694,392、首都圈四市 1,283,382、大赫尔辛基 1,630,200，**均为 2025-12-31**（3 级但四市数字可交叉验证 + 2 级区域官方统计门户），2026-09-10 核 —— 比原注释引的 2024-12-31 新一期。
    //   https://www.helsinginseudunsuunnat.fi/fi/vakiluvun-muutos
    identity:
      "Helsinki is Finland's capital and largest city, with a population of about 694,000 at the end of 2025 (about 1.28 million across the four capital-region municipalities and about 1.63 million in Greater Helsinki, both at the end of 2025), built on a peninsula and archipelago on the northern shore of the Gulf of Finland, and an important Nordic centre for design, technology and shipping.",
    // howItWorks sources: 给人口数补年份（2025 年末，与同条目 identity 一致）。
    //   **顺带记一条脚本行为**：`C6d` 取句中最大年份当统计时点，所以「人口没写年份 + 同句提到某个更早的年份（这里是 2017 年起采用市长制）」会被误判成「用了 2017 年的人口数」。**这不是规则写错了 —— 它指出的问题是真的（那个人口数确实缺年份），补上年份两个问题一起消失。**
    howItWorks:
      "The Helsinki people speak of is, administratively, only the City of Helsinki of about 214 km² of land, with about 694,000 people at the end of 2025; since 2017 it has been governed by a full-time mayor chosen by the city council, the first Finnish municipality to adopt the mayoral model. Finnish municipalities run schools, planning and local transport, health and social care passed to the wellbeing services counties in 2023 with Helsinki alone keeping its own health system, and the state runs police and universities. The capital region is four independent municipalities — Helsinki, Espoo, Vantaa and Kauniainen — of about 1.28 million at the end of 2025, Greater Helsinki about 1.63 million at the end of 2025, a quarter of Finland, and the airport lies in Vantaa. The HSL authority runs the metro, trams, commuter trains and ferries of the whole region in fare zones A to D, and the branches of the single metro line reached Espoo in 2017 and 2022. Senate Square and Kruununhaka are the old town, Kamppi the commercial centre, Kallio the old workers' quarter, Töölö the district of the early twentieth century, Kalasatama and Jätkäsaari the new districts on the old docks, Suomenlinna was inscribed as World Heritage in 1991, and more than three hundred islands belong to the city. The city is officially bilingual, signs Finnish first then Swedish, with about 5 per cent Swedish speakers. Addresses give street, number and five-digit postcode. Newcomers most often go wrong by taking the City of Helsinki for the whole capital region, when Espoo and Vantaa are cities with governments of their own.",
    layout:
      "The city centre is anchored by Senate Square and Helsinki Cathedral, extending south to the harbour and Market Square; landmarks such as the Rock Church and Sibelius Park are scattered through the districts, and the suburbs are ringed by an archipelago of hundreds of islands.",
    gettingAround:
      "Vantaa Airport is about 17 km from the centre, with a direct train link. The city has an extensive tram and metro network, and buses and walking are also good options. The climate is temperate continental, cold and snowy in winter, pleasantly cool in summer.",
    culture:
      "The official languages are Finnish and Swedish, and English proficiency is extremely high. Helsinki is a showcase for Finnish design and architecture and consistently ranks among the world's most liveable cities. Sauna culture is especially strong here. Restaurant bills typically already include service.",
    seeAndDo:
      "Senate Square and Helsinki Cathedral; the Rock Church (carved directly into natural bedrock); the Suomenlinna sea fortress (a World Heritage Site); Market Square. A boat trip out into the Helsinki archipelago nearby.",
    whenAndTips:
      "June–August is the most pleasant season with the longest daylight; Suomenlinna is about a 15-minute ferry ride away — worth setting aside half a day. The main sights are concentrated in the centre, easily covered on foot and by tram.",
  },
  turku: {
    // identity sources: 芬兰统计中心（Tilastokeskus）市镇（kunta）年末人口，基准日 2025-12-31：图尔库市镇 209,633（2025-12-31）。
    //   https://fi.wikipedia.org/wiki/Luettelo_Suomen_kunnista_väkiluvun_mukaan（3 级，转引 Tilastokeskus，2026-09-08 核）。
    //   **发布节奏**：人口初步统计逐月发布，市镇年末数通常在次年 1 月随年度汇总可查。
    //   **口径要分清**：kunta（市镇）与 seutukunta / 都市区是两档 —— 本条写的是市镇本身。
    identity:
      "Turku is Finland's oldest city and former capital, with a population of about 210,000 (end of 2025), at the mouth of the Aura River, a gateway for exploring the Archipelago Sea and an important centre of Finnish Swedish-speaking culture.",
    // howItWorks sources: 人口：芬兰统计局 kunta（市镇）口径，Turku（KU853）2025-12-31 = 209,633；月度初步数 2026-07-31 = 210,333（2026-08-25 更新）。原文一个年份都没有。月度初步数滞后约 1 个月，年末定案数通常次年 1 月随年度汇总。
    howItWorks:
      "Turku is the oldest city in Finland and was its capital until 1812; it is the seat of the Southwest Finland region, with about 245 km² of land and about 210,000 people at the end of 2025 (Statistics Finland), governed since 2021 by a full-time mayor chosen by the council. The municipality runs schools, planning and local transport, the wellbeing services county runs health care, and the state runs police and universities; the Turku region holds about 330,000, with Kaarina, Raisio and Naantali as municipalities of their own. The Aura river is the city's axis: the cathedral and the old town on the east bank, the castle and the new development on the west, the little ferry and the river boats part of daily life, and the Market Square on the east bank. The great fire of 1827 destroyed the old town, and Engel's grid plan made it one of the most unified neoclassical quarters in Europe. The city is officially bilingual, Åbo in Swedish, with about 5 per cent Swedish speakers, and the University of Turku and Åbo Akademi together have about 40,000 students. Ferries sail to Stockholm and Åland, the Turku Archipelago lies to the west, and the Meyer shipyard builds cruise ships. There is no tram, and Föli buses carry the traffic. Addresses give street, number and five-digit postcode. Newcomers most often go wrong by taking Turku for a retired old capital, when it is Finland's gateway to Sweden and a shipbuilding city.",
    layout:
      "The old town is built along both banks of the Aura River, with Turku Castle guarding the river mouth and Turku Cathedral standing further upstream; historic ship museums dot both banks.",
    gettingAround:
      "Turku Airport is about 8 km from the centre, reached by bus; from Helsinki the train takes about 2 hours. The city centre is walkable; reaching the archipelago requires a car or ferry. The climate is temperate maritime, comparatively mild along the coast.",
    culture:
      "The official languages are Finnish and Swedish, and the Turku region has a comparatively high share of Swedish speakers. Turku was Finland's capital during the period of Swedish rule and served as European Capital of Culture in 2011. Restaurant bills typically already include service.",
    seeAndDo:
      "Turku Castle (Finland's largest surviving medieval castle); Turku Cathedral; the cluster of historic ship museums along the Aura River. A boat trip through the Archipelago Sea nearby.",
    whenAndTips:
      "June–August is the most pleasant season and the best time for sailing the Archipelago Sea; plan a day trip by boat to the nearby archipelago to experience one of the world's densest island clusters.",
  },
  mariehamn: {
    // identity sources: **芬兰的官方人口口径**（2026-09-10 核）：`kunta`（市镇年末人口，芬兰统计局 Tilastokeskus，**逐月初步数、市镇年末数通常次年 1 月随年度汇总公布**）· `taajama`（聚居区/建成区，用于村落级的小地方，**不是每年更新、间隔可达数年**）· `seutukunta`（次区域）· `maakunta`（大区）。**`pääkaupunkiseutu`（首都圈，四个市镇）没有独立的法定统计口径，就是四市之和**；**`Helsingin seutu`（大赫尔辛基）是区域规划与通勤圈意义上的约定俗成范围，发布方不是统计局本身，而是赫尔辛基地区的官方区域统计门户 Helsingin Seudun Suunnat** —— 按本库既定做法**写明发布方与年份，不禁用这个词**（同瑞士巴塞尔三国区、瑞典 Göteborgsregionen、捷克 Eurostat FUA、德国 MKRO 都市区）。
    //   玛丽港 **11,957（2025-12-31）**，奥兰统计与研究局（ÅSUB）官方页，级别 1，2026-09-10 核。
    //   https://www.asub.ax/sv/statistik/invanarantalet-31122025
    identity:
      "Mariehamn is the capital of the Åland Islands, with a population of about 12,000 at the end of 2025, the administrative and cultural centre of Finland's only autonomous region with Swedish as its sole official language.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Mariehamn (capital of Åland, an autonomous Swedish-speaking region of Finland and the seat of its government and parliament; ~11,957 in late 2025, about 40 per cent of Åland's population; founded 21 February 1861 and named after Empress Maria Alexandrovna; Western Harbour with daily ferries to Sweden, Estonia and mainland Finland, Eastern Harbour a large marina; the four-masted Pommern as a museum ship; Mariehamn Airport; about 1.5 million visitors a year)
    howItWorks:
      "Mariehamn is the capital of Åland with about 11,950 people at the end of 2025, roughly forty per cent of Åland's population. Åland is an autonomous, Swedish-speaking region of Finland with its own parliament and government and its own right of domicile; both parliament and government sit in this city, so that small as it is, it is the administrative centre of a whole autonomous region, where schools, health care and local legislation are decided. The city was founded on 21 February 1861 and named after the Russian Empress Maria Alexandrovna, its name meaning Marie's port. It has two harbours: the Western Harbour is the international port with daily ferries to Sweden, Estonia and mainland Finland, where the four-masted Pommern lies as a museum ship, and the Eastern Harbour is one of the largest marinas in the Nordic countries. The airport lies outside town and about 1.5 million visitors come each year. Newcomers most often go wrong by taking Mariehamn for a small mainland Finnish town, when it is the capital of a Swedish-speaking autonomous region whose rules differ from the mainland's.",
    layout:
      "The small town is split into the West Harbour, mainly modern yacht marinas, and the East Harbour, which preserves the character of a traditional fishing port; the town centre is built mainly in Swedish architectural style.",
    gettingAround:
      "Mariehamn Airport is about 3 km from the centre; ferries also run to and from Stockholm, Sweden or Turku, Finland (the ferry crossing itself is a popular \"Baltic cruise\" experience). The town is walkable. The climate is temperate maritime.",
    culture:
      "The official language is Swedish (Åland is the only region in Finland with Swedish as the sole official language); locals identify primarily as Ålanders, blending Finnish and Swedish cultural traits. Restaurant bills typically already include service.",
    seeAndDo:
      "The Åland Maritime Museum; the West Harbour yacht marina; the Åland Museum (to learn about the region's autonomous history). Self-drive or cycling day trips through the Åland countryside nearby.",
    whenAndTips:
      "June–August is the most pleasant season; the ferry crossing to Stockholm or Turku is a classic way to experience Baltic sailing, with duty-free shopping typically on board.",
  },
  tampere: {
    // identity sources: 芬兰统计中心（Tilastokeskus）市镇（kunta）年末人口，基准日 2025-12-31：坦佩雷市镇 263,337（2025-12-31），**按市镇人口排全国第三**（赫尔辛基、埃斯波 325,716 在前）——
    //   原来 identity 写「第二大城市、24 万」，**名次和数字都不对**，而同条目 howItWorks 写的第三、26 万是对的。
    //   https://fi.wikipedia.org/wiki/Luettelo_Suomen_kunnista_väkiluvun_mukaan（3 级，转引 Tilastokeskus，2026-09-08 核）。
    //   **发布节奏**：人口初步统计逐月发布，市镇年末数通常在次年 1 月随年度汇总可查。
    //   **口径要分清**：kunta（市镇）与 seutukunta / 都市区是两档 —— 本条写的是市镇本身。
    identity:
      "Tampere is Finland's third-largest municipality, with a population of about 263,000 (end of 2025), built on the isthmus between Näsijärvi and Pyhäjärvi lakes, developed from the 19th century into an important Finnish industrial city thanks to the water-power drop between the two lakes.",
    // howItWorks sources: 人口：芬兰统计局 kunta 口径，Tampere（KU837）2025-12-31 = 263,337，全国第三（赫尔辛基 694,392、埃斯波 325,716 在前）——同段「芬兰第三大市镇」由此成立。原文缺年份。
    howItWorks:
      "Tampere is Finland's third-largest municipality and the seat of the Pirkanmaa region, with about 525 km² of land and about 263,000 people at the end of 2025 (Statistics Finland); since 2007 it has been governed by a full-time mayor chosen by the council. The municipality runs schools, planning and local transport, the wellbeing services county runs health care, and the state runs police and universities; the Tampere region holds about 400,000, with the town of Nokia, Ylöjärvi and Kangasala as municipalities of their own. The city stands on the isthmus between lakes Näsijärvi and Pyhäjärvi, whose 18-metre difference in level makes the Tammerkoski rapids; the Finlayson and Tampella textile mills of the nineteenth century ran on them, the name 'Manchester of the North' came from them, and their red-brick mills remain the skeleton of the centre. Hämeenkatu is the east–west main street, the Central Square lies by the rapids, the Pyynikki ridge is the forest in the city, and Pispala the old workers' quarter on the slope. The tramway opened in 2021 serves the city, and the Nokia Arena of the same year is the new landmark. Tampere University has about 30,000 students. The city calls itself the 'sauna capital of the world', and public saunas are daily life. Addresses give street, number and five-digit postcode. Newcomers most often go wrong by taking Tampere for an inland mill town, when it is the largest urban region in southern Finland outside the capital.",
    layout:
      "The city centre is built on the narrow isthmus between the two lakes, with the Tammerkoski rapids running through it; 19th-century red-brick factory buildings survive along its banks, some now converted into museums and cultural spaces.",
    gettingAround:
      "Tampere-Pirkkala Airport is about 17 km from the centre, reached by bus; from Helsinki the train takes about 1.5 hours. The city has a light-rail and bus network, and walking is also an option. The climate is temperate continental.",
    culture:
      "The official language is Finnish, with high English proficiency. Tampere is nicknamed \"the Manchester of Finland\" for its 19th-century industrial history, and is now an important Finnish technology and university city. Restaurant bills typically already include service.",
    seeAndDo:
      "The industrial heritage sites along the Tammerkoski rapids; the Finlayson district's converted red-brick factory cultural spaces; Tampere Cathedral. A boat trip on Näsijärvi or Pyhäjärvi nearby.",
    whenAndTips:
      "June–August is the most pleasant season; Tampere is a convenient gateway for exploring west-central Finland's lake district, with the industrial heritage sites walkable in the city itself.",
  },
  jyvaskyla: {
    // identity sources: 芬兰统计中心（Tilastokeskus）市镇（kunta）年末人口，基准日 2025-12-31：于韦斯屈莱市镇 149,895（2025-12-31），全国第七。
    //   https://fi.wikipedia.org/wiki/Luettelo_Suomen_kunnista_väkiluvun_mukaan（3 级，转引 Tilastokeskus，2026-09-08 核）。
    //   **发布节奏**：人口初步统计逐月发布，市镇年末数通常在次年 1 月随年度汇总可查。
    //   **口径要分清**：kunta（市镇）与 seutukunta / 都市区是两档 —— 本条写的是市镇本身。
    identity:
      "Jyväskylä is a university town in central Finland, with a population of about 150,000 (end of 2025), at the northern end of Lake Päijänne, and a gateway for exploring the northern part of Finland's lake district.",
    // howItWorks sources: 人口：芬兰统计局 kunta 口径，Jyväskylä（KU179）2025-12-31 = 149,895。**「第七大」核实成立**：按 2025-12-31 市镇人口排序（赫尔辛基 / 埃斯波 / 坦佩雷 / 万塔 / 奥卢 / 图尔库 / 于韦斯屈莱），口径即市镇常住人口。原文缺年份与排名口径。
    howItWorks:
      "Jyväskylä is the regional capital of Central Finland with about 150,000 people at the end of 2025 (Statistics Finland), the country's seventh-largest municipality, about 270 km north of Helsinki on the northern shore of Lake Päijänne; Finnish municipalities run schools, planning and local services, health and social care passed to the new wellbeing services counties in 2023, and the state runs police and universities. It is called the Athens of Finland because education began here: the world's first junior secondary school taught in Finnish opened in 1858, Finland's first teacher-training college in 1863 and its first girls' school in 1864, and to this day more than thirty per cent of the population are students, about forty-five thousand enrolled at all levels. It is also the city with the greatest concentration of Alvar Aalto buildings anywhere in the world — Aalto grew up here and compared the slope above the lake to an Italian vineyard. Rally Finland in August is the largest annual event in the Nordic countries with more than half a million spectators. Newcomers most often go wrong by judging it a provincial town by population, when its rhythm is set by the university and the academic term.",
    layout:
      "The city is built along the northern shore of Päijänne; several buildings by the renowned Finnish architect Alvar Aalto are scattered through the city, and the university campus blends with the lakeside scenery.",
    gettingAround:
      "Jyväskylä Airport is about 20 km from the centre, reached by bus; from Helsinki the train takes about 3 hours. The city is easy to explore on foot or by bicycle. The climate is temperate continental.",
    culture:
      "The official language is Finnish, with high English proficiency and a lively university-town atmosphere. Jyväskylä is an important showcase for Finnish modern architecture and design, with many of Alvar Aalto's early works concentrated here. Restaurant bills typically already include service.",
    seeAndDo:
      "The Alvar Aalto Museum and cluster of Aalto buildings; a walk along the shore of Lake Päijänne; the Central Finland Museum. A boat trip to explore the long, narrow waters of Päijänne nearby.",
    whenAndTips:
      "June–August is the most pleasant season; Jyväskylä is an ideal base for exploring Päijänne and the northern part of Finland's lake district.",
  },
  savonlinna: {
    // identity sources: 芬兰统计中心（Tilastokeskus）市镇（kunta）年末人口，基准日 2025-12-31：萨翁林纳市镇 31,008（2025-12-31）——原来 identity 的 3.3 万偏高，**与同条目「1990 年曾有 41,359 人、持续下降」的叙述自相矛盾**。
    //   https://fi.wikipedia.org/wiki/Luettelo_Suomen_kunnista_väkiluvun_mukaan（3 级，转引 Tilastokeskus，2026-09-08 核）。
    //   **发布节奏**：人口初步统计逐月发布，市镇年末数通常在次年 1 月随年度汇总可查。
    //   **口径要分清**：kunta（市镇）与 seutukunta / 都市区是两档 —— 本条写的是市镇本身。
    identity:
      "Savonlinna is a small town in eastern Finland's lake district, with a population of about 31,000 (end of 2025), set within the Saimaa lake system; Olavinlinna Castle is Finland's most iconic lakeside castle.",
    // howItWorks sources: 人口：芬兰统计局 kunta 口径，Savonlinna（KU740）2025-12-31 = 31,008（月度初步数 2026-07-31 = 30,697，仍在减少）；1990 年的 41,359 核对无误。原文当前数缺年份。
    howItWorks:
      "Savonlinna is a municipality of South Savo in Finland with about 31,000 people at the end of 2025 (Statistics Finland), down from 41,359 in 1990 and still falling; the municipality runs schools and planning, health and social care belong to the wellbeing services county, and the state runs police. It lies at the heart of the Saimaa lakeland and calls itself the capital of Saimaa — the town is scattered across the channels between lakes, with more bridges than streets. Erik Axelsson Tott founded Olavinlinna castle on an island in 1475, among the best-preserved medieval stone castles in the Nordic countries; since 1912 its courtyard has served as an opera stage, and the Savonlinna Opera Festival in July fills this town of thirty thousand as one of Finland's best-known festivals. Kerimäki Church nearby is the largest wooden church in the world, the forest museum stands on the Punkaharju esker, and the Saimaa ringed seal lives in these lakes and nowhere else. Helsinki is 335 km south-west, about four hours by train. Newcomers most often go wrong by taking the festival for the whole year, when outside it this is a quiet lake town that is growing smaller.",
    layout:
      "The old town is built on several small islands and peninsulas within the Saimaa lake system, with Olavinlinna Castle standing at a key waterway junction — a historic fortress that once controlled shipping through the lake district.",
    gettingAround:
      "Savonlinna Airport is about 15 km from the centre, reached by bus; from Helsinki the train takes about 3.5 hours. The town centre is walkable; reaching Punkaharju requires a car or bus. The climate is temperate continental.",
    culture:
      "The official language is Finnish, with high English proficiency. The Savonlinna Opera Festival, held each July inside Olavinlinna Castle, is one of Finland's most celebrated cultural events. Restaurant bills typically already include service.",
    seeAndDo:
      "Olavinlinna Castle (a medieval castle on a lake island); a boat cruise on Saimaa. A day trip to Punkaharju esker nearby.",
    whenAndTips:
      "June–August is the most pleasant season, with accommodation tight during the July opera festival — book ahead. Punkaharju is about 30 km from town, the classic day-trip destination around Savonlinna.",
  },
  kuopio: {
    // howItWorks sources（2026-09-15 核实，add-year）: Statistics Finland PxWeb 11re，kunta 297 = 126,572（2025-12-31），1 级；下一期约 2027-04
    // identity sources: **芬兰的官方人口口径**（2026-09-10 核）：`kunta`（市镇年末人口，芬兰统计局 Tilastokeskus，**逐月初步数、市镇年末数通常次年 1 月随年度汇总公布**）· `taajama`（聚居区/建成区，用于村落级的小地方，**不是每年更新、间隔可达数年**）· `seutukunta`（次区域）· `maakunta`（大区）。**`pääkaupunkiseutu`（首都圈，四个市镇）没有独立的法定统计口径，就是四市之和**；**`Helsingin seutu`（大赫尔辛基）是区域规划与通勤圈意义上的约定俗成范围，发布方不是统计局本身，而是赫尔辛基地区的官方区域统计门户 Helsingin Seudun Suunnat** —— 按本库既定做法**写明发布方与年份，不禁用这个词**（同瑞士巴塞尔三国区、瑞典 Göteborgsregionen、捷克 Eurostat FUA、德国 MKRO 都市区）。
    //   库奥皮奥 126,626（2025 年末，市政府官方新闻稿，2 级）vs 仓库的 126,572（统计局初步数，3 级转引）—— **差 54 人是市自身登记与统计局初步数的口径微差，判定不改**。2026-09-10 复核，维持 2026-09-08 的结论。
    identity:
      "Kuopio is the core city of Finland's central-eastern lake district, with a population of about 127,000 (end of 2025), on the shore of Lake Kallavesi; the viewing tower atop Puijo hill is a classic spot for overlooking the lake and archipelago.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kuopio (Finland; regional capital of North Savo, about 126,572 residents, the eighth-most populous municipality, the region about 148,000; nearly surrounded by Lake Kallavesi, Finland's tenth-largest lake at 472.76 km²; Puijo tower and ski jumps with annual World Cup ski jumping; kalakukko, the Savonian fish pastry; the market square and market hall; until 2018 the seat of the primate of the Finnish Orthodox Church; University of Eastern Finland; Kuopio Airport in Siilinjärvi, the fifth busiest in Finland)
    howItWorks:
      "Kuopio is the regional capital of North Savo in Finland with about 126,600 people at the end of 2025 (Statistics Finland), the country's eighth-most populous municipality, its surrounding region about 148,000; the municipality runs schools and planning, health and social care belong to the wellbeing services county, and the state runs police. The city is nearly encircled by Lake Kallavesi, Finland's tenth-largest at about 473 km², so that a few hundred metres downhill from any main street is water. The Puijo tower and ski jumps stand on the height north of town and host a World Cup ski jumping round each year; the market square and market hall are the centre of local life, selling kalakukko, the old Savonian dish of fish baked inside a rye crust that earned the city its nickname as the promised land of kalakukko. The University of Eastern Finland has a campus here, strong in pharmacy and public health, and until 2018 the primate of the Finnish Orthodox Church resided here, the church museum remaining in town. The airport lies in neighbouring Siilinjärvi. Newcomers most often go wrong by assuming Orthodoxy in Finland is a small minority affair, when it is one of the country's two national churches.",
    layout:
      "The compact city centre is built along the western shore of Kallavesi, with Puijo hill on the city's north side serving as an important landmark high point.",
    gettingAround:
      "Kuopio Airport is about 15 km from the centre, reached by bus; from Helsinki the train takes about 4.5 hours. The city is easy to explore on foot and by bus. The climate is temperate continental.",
    culture:
      "The official language is Finnish, with high English proficiency. Kuopio is known for its authentic Finnish smoked-fish pie (kalakukko) and sauna culture, and the market square is the centre of local daily life. Restaurant bills typically already include service.",
    seeAndDo:
      "The Puijo viewing tower (a panoramic overlook of the lake and archipelago); Kuopio Market Square; the Orthodox Church Museum (an important collection of Finnish Orthodox culture). A boat trip on Kallavesi nearby.",
    whenAndTips:
      "June–August is the most pleasant season; the Puijo viewing tower is one of the best high points for overlooking Finland's lake-district landforms — an evening visit for sunset is recommended.",
  },
  oulu: {
    // identity sources: 芬兰统计中心（Tilastokeskus）市镇（kunta）年末人口，基准日 2025-12-31：奥卢市镇 217,469（2025-12-31），全国第五 —— 名次对，数字四舍五入应是 22 万。
    //   https://fi.wikipedia.org/wiki/Luettelo_Suomen_kunnista_väkiluvun_mukaan（3 级，转引 Tilastokeskus，2026-09-08 核）。
    //   **发布节奏**：人口初步统计逐月发布，市镇年末数通常在次年 1 月随年度汇总可查。
    //   **口径要分清**：kunta（市镇）与 seutukunta / 都市区是两档 —— 本条写的是市镇本身。
    identity:
      "Oulu is Finland's fifth-largest city, with a population of about 217,000 (end of 2025), on the northern shore of the Gulf of Bothnia, an important Finnish technology and university city and a gateway for exploring northern Finland and Lapland.",
    // howItWorks sources: Wikipedia (2026-09): Oulu (land ~2,972 km² after 2013 mergers; 217,469 2025; city manager model; North Ostrobothnia seat; Toripolliisi; tar trade; university ~15,000; Nokia; ~20% cycling year-round; ECoC 2026; airport in Oulunsalo); Municipalities of Finland
    howItWorks:
      "Oulu is the largest city in northern Finland and the seat of the North Ostrobothnia region; since merging with Haukipudas, Kiiminki, Oulunsalo and Yli-Ii in 2013 it covers about 3,000 km² of land, with about 217,000 people in 2025, Finland's fifth-largest municipality, governed by a council and an appointed city manager. The municipality runs schools, planning and local transport, the wellbeing services county runs health care, and the state runs police and universities. The city lies at the mouth of the Oulujoki on the Gulf of Bothnia: the Market Square and the 'Toripolliisi' policeman statue are the centre's point of reference, Pikisaari island and the tar warehouses recall the tar exports of the nineteenth century, and Nallikari beach lies to the west. The University of Oulu's Linnanmaa campus has about 15,000 students, and Nokia's wireless research made it the technology city of the north. Snow and ice do not stop the bicycle: about a fifth of journeys are by bicycle all year round, the city calls itself the 'winter cycling capital', and its paths for walking and cycling run more than 950 km. In 2026 it is European Capital of Culture. The airport lies in Oulunsalo, public transport is buses only, and Rovaniemi lies about 220 km north. Addresses give street, number and five-digit postcode. Newcomers most often go wrong by taking Oulu for a small Arctic town, when it is the technology and university centre of northern Finland.",
    layout:
      "The city centre is built along the mouth of the Oulu River, with the market square right by the harbour, the hub of local daily life and tourist activity, while the university campus sits on the outskirts.",
    gettingAround:
      "Oulu Airport is about 15 km from the centre, reached by bus; from Helsinki the train takes about 6.5 hours, or about 1.5 hours by air. The city has an extensive network of cycle lanes. The climate is subarctic, with severe winters and a frozen bay.",
    culture:
      "The official language is Finnish, with high English proficiency. Oulu is an important Finnish information-technology centre, sometimes called \"the Silicon Valley of the North.\" Restaurant bills typically already include service.",
    seeAndDo:
      "Oulu Market Square and the old customs warehouses; Oulu Cathedral. Exploring the Bothnian Bay coastline nearby, with ice-walking possible in winter.",
    whenAndTips:
      "June–August suits exploring the coast; February–March, when the sea ice is stable, offers a distinctive icebreaker and ice-walking experience. Oulu is also a convenient staging point on the way to Rovaniemi.",
  },
  rovaniemi: {
    // howItWorks sources（2026-09-15 核实，add-year）: Statistics Finland PxWeb 11re，kunta 698 = 66,191（2025-12-31），1 级；下一期约 2027-04
    // identity sources: **芬兰的官方人口口径**（2026-09-10 核）：`kunta`（市镇年末人口，芬兰统计局 Tilastokeskus，**逐月初步数、市镇年末数通常次年 1 月随年度汇总公布**）· `taajama`（聚居区/建成区，用于村落级的小地方，**不是每年更新、间隔可达数年**）· `seutukunta`（次区域）· `maakunta`（大区）。**`pääkaupunkiseutu`（首都圈，四个市镇）没有独立的法定统计口径，就是四市之和**；**`Helsingin seutu`（大赫尔辛基）是区域规划与通勤圈意义上的约定俗成范围，发布方不是统计局本身，而是赫尔辛基地区的官方区域统计门户 Helsingin Seudun Suunnat** —— 按本库既定做法**写明发布方与年份，不禁用这个词**（同瑞士巴塞尔三国区、瑞典 Göteborgsregionen、捷克 Eurostat FUA、德国 MKRO 都市区）。
    //   罗瓦涅米 66,191（2025-12-31，芬兰统计局，3 级转引），与仓库完全一致、是最新一期。2026-09-10 复核，维持既有结论，本轮无需改动。
    identity:
      "Rovaniemi is the capital of Finnish Lapland, with a population of about 66,000 (end of 2025), sitting right on the Arctic Circle, home to Santa Claus Village and the traditional gateway for exploring the Lapland wilderness.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Rovaniemi (Finland; regional capital of Lapland, about 66,191 residents, the 17th largest city, one of the largest municipalities in Europe by area; about 6 km south of the Arctic Circle at the confluence of the Kemijoki and Ounasjoki; about 90 per cent of buildings destroyed by German forces in 1944, rebuilt to Alvar Aalto's plan in the shape of a reindeer's head with the roads as antlers; Santa Claus Village at the Arctic Circle, the slogan trademarked in 2009; midnight sun 7 June–6 July, December under six minutes of sunshine a day; auroras up to 200 nights a year; University of Lapland)
    howItWorks:
      "Rovaniemi is the regional capital of Lapland in Finland with about 66,200 people at the end of 2025 (Statistics Finland), the country's seventeenth-largest city and among the largest local authorities in Europe by area; the municipality runs schools and planning, health and social care belong to the wellbeing services county, and the state runs police. The town stands where the Kemijoki meets the Ounasjoki, about 6 km south of the Arctic Circle. German forces destroyed roughly ninety per cent of its buildings in 1944, and it was rebuilt to Alvar Aalto's plan, which drew the street network in the shape of a reindeer's head with the main roads as antlers — a shape still visible on a map, and the reason there is almost no old town. Santa Claus Village on the Arctic Circle lies 8 km north and has received visitors since 1985, the city trademarking its slogan in 2009, and winter tourism is among the largest local industries. The sun does not set from 7 June to 6 July, December gives under six minutes of sunshine a day, and auroras appear on as many as two hundred nights a year; the University of Lapland is in town. Newcomers most often go wrong by looking for an old Arctic town, when this city was rebuilt to a drawing after 1945.",
    layout:
      "The town sits where the Kemijoki meets one of its tributaries; rebuilt after the Second World War to a plan by architect Alvar Aalto (the city is laid out in the shape of a reindeer's head), with the Arctic Circle line running through Santa Claus Village on the outskirts.",
    gettingAround:
      "Rovaniemi Airport is about 10 km from the centre, reached by bus; from Helsinki flights take about 1.5 hours, or about 12 hours by overnight train. The town is easy to explore on foot and by bus; reaching the wilderness requires a car or a tour. The climate is subarctic, with long, severe winters, polar night and the northern lights, and midnight sun in summer.",
    culture:
      "The official language is Finnish, with high English proficiency. Rovaniemi is a globally known Christmas-themed destination thanks to its \"official\" Santa Claus Village, and also an important window onto Lapland's Sámi culture. Restaurant bills typically already include service.",
    seeAndDo:
      "Santa Claus Village (straddling the Arctic Circle line, where you can get an Arctic Circle crossing certificate); the Arktikum Arctic museum; northern-lights viewing in winter; midnight-sun experiences and canoeing on the Kemijoki in summer.",
    whenAndTips:
      "December–March is peak season for the northern lights and Christmas-themed tourism, and also the busiest time of year overall; June–July brings the midnight sun and suits outdoor activity — bring proper polar cold-weather gear in winter.",
  },
  kuusamo: {
    // howItWorks sources（2026-09-15 核实，add-year）: Statistics Finland PxWeb 11re，kunta 305 = 14,800（2025-12-31），1 级；下一期约 2027-04
    // identity sources: **芬兰的官方人口口径**（2026-09-10 核）：`kunta`（市镇年末人口，芬兰统计局 Tilastokeskus，**逐月初步数、市镇年末数通常次年 1 月随年度汇总公布**）· `taajama`（聚居区/建成区，用于村落级的小地方，**不是每年更新、间隔可达数年**）· `seutukunta`（次区域）· `maakunta`（大区）。**`pääkaupunkiseutu`（首都圈，四个市镇）没有独立的法定统计口径，就是四市之和**；**`Helsingin seutu`（大赫尔辛基）是区域规划与通勤圈意义上的约定俗成范围，发布方不是统计局本身，而是赫尔辛基地区的官方区域统计门户 Helsingin Seudun Suunnat** —— 按本库既定做法**写明发布方与年份，不禁用这个词**（同瑞士巴塞尔三国区、瑞典 Göteborgsregionen、捷克 Eurostat FUA、德国 MKRO 都市区）。
    //   库萨莫 14,792（2025-12-31，芬兰统计局初步数，3 级转引），与同条目 howItWorks 已引的 1.48 万一致。2026-09-10 核。
    identity:
      "Kuusamo is a small town in north-eastern Finland, with a population of about 14,800 at the end of 2025, the traditional gateway for exploring Oulanka National Park and the Karhunkierros trail, and home to the well-known Ruka ski resort.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kuusamo (Finland; town and municipality in North Ostrobothnia near the eastern border; population 14,800 over 5,809 km², the eleventh largest municipality by area; about 60 km south of the Arctic Circle; Ruka ski resort on the 492 m Rukatunturi; about a million tourists a year, tourism 149 million euros in 2024, 18 per cent of output; Oulanka National Park and the 80 km Karhunkierros trail; snow cover about 200 days a year, late October to mid-May; 166 lakes, forests 90 per cent of the land; Kuusamo Airport 6 km from town, 129,373 passengers in 2024)
    howItWorks:
      "Kuusamo is a town and municipality of North Ostrobothnia in Finland with about 14,800 people at the end of 2025 (Statistics Finland) over 5,809 km², the eleventh largest municipality by area, about 60 km south of the Arctic Circle; the municipality runs schools and planning, health and social care belong to the wellbeing services county, and the state runs police. Few people on much land is the norm here: forest covers ninety per cent of the ground, 166 lakes lie within it, and its rivers run to the White Sea and to the Gulf of Bothnia. The economy rests almost entirely on tourism — 149 million euros in 2024, about eighteen per cent of local output, with roughly a million visitors a year, most of them bound for the Ruka resort on the 492 m Rukatunturi 25 km north of town; Oulanka National Park and the 80 km Karhunkierros trail lie east towards the border. Snow covers the ground about two hundred days a year, from late October to mid-May, and the air here rates among the cleanest measured anywhere. The airport is 6 km out and carried about 129,000 passengers in 2024, with direct flights from Helsinki. Newcomers most often go wrong by taking Ruka for the centre of Kuusamo, when it is a resort on the fell and the town lies elsewhere below it.",
    layout:
      "The town itself is small; the Ruka ski resort lies about 25 km to the north, and Oulanka National Park lies further north still, near the Finland-Russia border.",
    gettingAround:
      "Kuusamo Airport is about 5 km from the centre, reached by bus; from Helsinki flights take about 1.5 hours. Reaching Oulanka National Park and Ruka requires a car or a tour. The climate is subarctic, with cold, snowy winters.",
    culture:
      "The official language is Finnish, with high English proficiency. Kuusamo and its surroundings are known for the Karhunkierros hiking-trail culture and the Ruka ski industry, making it an important outdoor tourism destination in Finland. Restaurant bills typically already include service.",
    seeAndDo:
      "Hiking in Oulanka National Park (the northern starting point of the Karhunkierros trail, and the Kiutaköngäs rapids); the Ruka ski resort. White-water rafting nearby.",
    whenAndTips:
      "June–September is peak hiking season, and December–April is peak ski season; Oulanka National Park is about 30 km from Kuusamo — plan at least a full day for hiking there.",
  },
  inari: {
    // identity sources: **芬兰的官方人口口径**（2026-09-10 核）：`kunta`（市镇年末人口，芬兰统计局 Tilastokeskus，**逐月初步数、市镇年末数通常次年 1 月随年度汇总公布**）· `taajama`（聚居区/建成区，用于村落级的小地方，**不是每年更新、间隔可达数年**）· `seutukunta`（次区域）· `maakunta`（大区）。**`pääkaupunkiseutu`（首都圈，四个市镇）没有独立的法定统计口径，就是四市之和**；**`Helsingin seutu`（大赫尔辛基）是区域规划与通勤圈意义上的约定俗成范围，发布方不是统计局本身，而是赫尔辛基地区的官方区域统计门户 Helsingin Seudun Suunnat** —— 按本库既定做法**写明发布方与年份，不禁用这个词**（同瑞士巴塞尔三国区、瑞典 Göteborgsregionen、捷克 Eurostat FUA、德国 MKRO 都市区）。
    //   伊纳里村：芬兰统计局 `taajama`（聚居区）口径 **632（2022-12-31）**，本轮未找到更新一期（**taajama 不是每年更新**）。原注释引的 en.wikipedia 信息框「581（2014）」已 12 年旧，而正文写成了 550 且无年份。3 级转引统计局表，2026-09-10 核。
    //   **与同条目 howItWorks 的市镇口径 7,244（2025-12-31）是两个不同的地理单元，不是数字打架** —— 这一点写在这里，免得下一轮有人把它们「统一」掉。
    identity:
      "Inari is a village in Finnish Lapland within the Arctic Circle, with a built-up-area population of about 630 at the end of 2022 on Statistics Finland's figures (no later figure found), on the shore of Lake Inari, and the core settlement of Finnish Sámi Indigenous culture.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Inari (Finland; the largest municipality in Finland by area at 17,333.65 km² and among the most sparsely populated, 7,244 residents in December 2025, density 0.48 per km²; four official languages — Finnish (86.4 per cent), Northern Sámi, Inari Sámi and Skolt Sámi; widely called the capital of Sámi culture; the Sámi Parliament of Finland and the Siida museum at Inari village; registered Sámi about 31 per cent of residents; Lake Inari 1,043 km², Finland's third-largest; Ivalo Airport and European route E75; tourism, services and cold-climate testing)
    howItWorks:
      "Inari is the largest municipality in Finland by area at about 17,334 km² with 7,244 residents at the end of 2025, fewer than half a person per square kilometre and among the most sparsely populated places in the country; the municipality runs schools and planning, health and social care belong to the wellbeing services county, and the state runs police. What sets it apart is language: it has four official languages — Finnish and the three Sámi languages Northern, Inari and Skolt — and Inari Sámi is spoken in this municipality alone, so signs and documents must carry them side by side. The Sámi Parliament of Finland sits at the Sajos centre in Inari village beside the Siida museum of Sámi culture and northern nature, which is why this is often called the centre of Sámi culture in Finland, registered Sámi making up about thirty per cent of residents. Lake Inari covers 1,043 km² as Finland's third-largest by area, and the largest village and the airport are both at Ivalo, with the E75 running through towards Norway. Newcomers most often go wrong by treating Sámi culture as a performance, when here it is the working language and livelihood.",
    layout:
      "The village is small, built along the southern shore of Lake Inari; the Sámi Parliament and the Siida Sámi museum are located here, making it the administrative and cultural showcase centre for Sámi culture in Finland.",
    gettingAround:
      "Ivalo Airport is about 40 km from the village, reached by bus; from Helsinki flights take about 1.5 hours to Ivalo, connecting onward by bus. The village is walkable; exploring the lake requires a car or a tour. The climate is subarctic, with long, severe winters and some of the best conditions in Finland for viewing the northern lights.",
    culture:
      "The official language is Finnish, and the local Sámi languages (including Northern Sámi, Inari Sámi and Skolt Sámi) also hold official status in this region. Traditional Sámi reindeer-herding culture continues today. Restaurant bills typically already include service.",
    seeAndDo:
      "The Siida Sámi Museum and Nature Centre; a boat trip on Lake Inari (summer) or snowmobiling (winter). Reindeer-farm visits and traditional Sámi lifestyle experiences nearby.",
    whenAndTips:
      "December–March is the best window for the northern lights, and the village's remote location means extremely low light pollution; June–July brings the midnight sun, an ideal season for exploring Lake Inari and experiencing Sámi culture.",
  },
};
