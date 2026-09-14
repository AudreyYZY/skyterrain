import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Denmark ============
  "denmark-overview": {
    // identity sources: Danmarks Statistik《NYT: Befolkningen i Danmark runder 6 mio. indbyggere》：2025-01-01 为 5,992,734 人，2025-05-01 达 6,001,008 人。https://www.dst.dk/nyt/55902
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Denmark sits in Northern Europe, covering about 43,000 km² with a population of about 5.99 million as of 1 January 2025, crossing 6 million that May (Statistics Denmark). It is the smallest and flattest of the three Scandinavian countries (the entire country's highest point is only 170.86 m), made up of the Jutland peninsula and more than 500 islands, known as a \"kingdom of fairy tales\" and a \"kingdom of design.\"",
    layout:
      "Denmark can be divided roughly into: the Capital Region (Copenhagen and its surroundings, the political and economic centre), Region Zealand (Roskilde, a historic former-capital area), the Region of Southern Denmark (Odense on the island of Funen, and southern Jutland), Central Denmark Region (Aarhus, Denmark's second city, and the lake district), North Denmark Region (Aalborg and Skagen, the peninsula's northern tip), and Bornholm (a standalone island in the Baltic Sea).",
    gettingAround:
      "Copenhagen Airport is the main international gateway; the rail and motorway networks are well developed, with journeys between major cities typically taking 2–4 hours. Scheduled domestic flights are hubbed through Copenhagen, connecting to Aarhus, Aalborg, Billund and Bornholm. Driving is on the right, and several bridges (the Great Belt Bridge, the Øresund Bridge) link the main islands and peninsula. The climate is temperate maritime, mild year-round, windy with little snow in winter and cool in summer. Restaurant bills typically already include service, with no extra tip required. The voltage is 230V with EU-style two-round-pin plugs.",
    culture:
      "The official language is Danish, and English proficiency is extremely high — English works in almost any situation. Danes value equality and a simple way of life, and \"hygge\" (a cosy, comfortable aesthetic of everyday life) is one of the core concepts of Danish culture. Cycling culture is strong, and Copenhagen has one of the highest shares of cycling commuters in the world. Restaurant bills typically don't require a tip; rounding up is fine.",
    seeAndDo:
      "Natural landforms: Møns Klint, Stevns Klint (a World Heritage Site), Skagen Odde, Rubjerg Knude dune, the Silkeborg Lake District. Heritage and culture: the Little Mermaid statue and Nyhavn in Copenhagen, Roskilde Cathedral (World Heritage) and the Viking Ship Museum, Kronborg Castle in Helsingør (the setting for Hamlet, a World Heritage Site). Islands: the Bornholm granite coast, the Wadden Sea (World Heritage).",
    whenAndTips:
      "May–September brings the most pleasant weather and longest daylight, making it the peak travel season; around the summer solstice in June, towns across the country hold traditional bonfire celebrations. The network of bridges and ferries makes it easy to plan a driving route across several islands.",
  },
  copenhagen: {
    identity:
      "Copenhagen is Denmark's capital and largest city, with a municipal population of about 672,000 in 2026 (about 1.41 million in the contiguous urban area defined by Statistics Denmark), on the eastern shore of Zealand across the Øresund from Malmö, Sweden. It is an important Nordic centre for design, food and sustainability.",
    // howItWorks sources: 丹麦统计局（Danmarks Statistik）只发布两档并存的口径，**没有「都会区」这一级**：
    //   ① kommune（市镇）：哥本哈根市镇 671,714 人（FOLK1A，2026-01-01，1 级）；
    //   ② byområde（城区/建成区）：Hovedstadsområdet（含腓特烈堡等 13 个市镇/部分市镇）
    //      1,408,575 人 —— DST《Byopgørelsen 1. januar 2026》
    //      https://www.dst.dk/Site/Dst/Udgivelser/nyt/GetPdf.aspx?cid=54337（1 级，2026-09-08 核）。
    //   **原文的「都会区约 210 万」是编出来的口径**：最接近的行政单位首都大区（Region Hovedstaden，
    //   29 市镇 + 博恩霍尔姆岛）2026 年三季度 1,949,336 人，也够不到 210 万。
    //   **⚠️ 下一轮注意**：DST 在这一期里写明「der er ikke planlagt yderligere opgørelser」——
    //   byområde 系列因底层地名数据库停更而暂无后续发布计划，下次核实要先确认它是否恢复。
    //   发布节奏：kommune 按季（季末后约 40 天，如 2026Q3 于 2026-08-10）；byområde 年度、
    //   1 月 1 日基准、往年 5 月发布（本期 2026-05-13，5-21 更正）。
    howItWorks:
      "The Copenhagen people speak of is, administratively, only the Municipality of Copenhagen of about 90 km², with about 672,000 people in 2026; it is governed by a city council under a 'magistrate' system, a Lord Mayor and six mayors each responsible for one portfolio. The city is divided into ten districts (bydele), and Frederiksberg is a separate municipality entirely surrounded by Copenhagen. Danish municipalities run schools, elder care, social services and local roads, the five regions run hospitals, and the state runs police and universities. The contiguous urban area defined by Statistics Denmark (Hovedstadsområdet) held about 1.41 million in 2026, and the Øresund Bridge opened in 2000 joins it to Malmö in Sweden in a cross-border metropolitan region. The Finger Plan of 1947 made the city grow along five railway lines with green land between the fingers; Indre By and Christianshavn are the old town, Nørrebro, Vesterbro and Østerbro the three quarters around it, and Amager holds the airport and the new town of Ørestad. Four driverless metro lines and the S-tog suburban railway serve the urban area, about half of commutes are by bicycle, and the harbour is clean enough to swim in. Addresses give street, number and four-digit postcode. Newcomers most often go wrong by taking the Municipality of Copenhagen for the whole city, when it holds under half of the contiguous urban area's population.",
    layout:
      "The city centre is compact; the canal-lined Christianshavn and Nyhavn districts are the iconic waterfront areas, with Tivoli Gardens and City Hall Square forming the traditional centre, and the suburbs connected to Sweden via the Øresund Bridge.",
    gettingAround:
      "Copenhagen Airport is about 8 km from the centre, with a direct metro link. The city has an extensive network of cycle lanes; the metro, buses and walking are also good options. The climate is temperate maritime, mild year-round and windy in winter.",
    culture:
      "The official language is Danish, and English proficiency is extremely high. Copenhagen is the birthplace of \"New Nordic Cuisine\" and has one of the highest shares of cycling commuters in the world. The \"hygge\" way of life is especially visible here. Restaurant bills typically already include service.",
    seeAndDo:
      "The Little Mermaid statue; the colourful waterfront buildings of Nyhavn; Tivoli Gardens (one of the world's oldest amusement parks); Christiansborg Palace; the Freetown of Christiania; the National Gallery of Denmark (SMK). Day trips to Roskilde and Helsingør.",
    whenAndTips:
      "May–September is the most pleasant season and peak time for outdoor cafés and canal boat tours; the main sights are concentrated in the centre, easily covered by bicycle and on foot.",
  },
  helsingoer: {
    identity:
      "Helsingør is a small port town on the north-eastern coast of Zealand, with an urban-area population of about 48,000 in 2026 (about 64,000 in the municipality), facing Helsingborg, Sweden across the Øresund, famous for Kronborg Castle, the setting of Shakespeare's Hamlet.",
    // howItWorks sources: 赫尔辛格：**市镇（kommune）64,460 人**（DST FOLK1A，2026 年三季度，1 级）；
    //   **城区（byområde）48,450 人**（DST《Byopgørelsen 1. januar 2026》，1 级，2026-09-08 核）。
    //   原文把城区的数标成了市镇人口 —— **数字对、标签错**，差约 1.6 万。
    //   丹麦这两档并存且差别很大，写的时候必须逐个说明是哪一档。
    howItWorks:
      "Helsingør, Elsinore in English, is a municipality at the northern tip of Zealand in Denmark with about 64,000 people in the municipality in 2026 and about 48,000 in the built-up urban area, governed by an elected council and mayor; Danish municipalities run schools, elder care and local roads, the regions run hospitals and the state runs police. Its position is its history: this is the narrowest point of the Øresund, only 4 km from Helsingborg in Sweden, and the ferries have never stopped. King Eric of Pomerania founded the town in the 1420s and began levying the Sound Dues, so that every ship passing the strait paid here, and on that money it had grown by 1672 into Denmark's third-largest town, declining when the dues were abolished in 1857. Kronborg Castle guards the headland as World Heritage and as the setting of Hamlet, performed in the castle each summer; the maritime museum is sunk into an old dry dock beside it. Trains run to Copenhagen every twenty minutes. Newcomers most often go wrong by taking Helsingør for a castle, when the castle was the town's instrument for taxing and watching the strait, and the town rose and fell with that toll.",
    layout:
      "The old town is built along the harbour, with Kronborg Castle guarding the narrowest point of the Øresund — historically a strategic point for controlling Baltic shipping — and frequent ferries running across to Sweden.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Copenhagen Airport (about 60 km). Since December 2022 Kystbanen coast-line trains no longer run through to the airport, so the rail journey involves a change. The old town is walkable, and frequent ferries run to and from Helsingborg, Sweden. The climate is temperate maritime.",
    culture:
      "The official language is Danish, with high English proficiency. Helsingør is known worldwide for its literary connection to Kronborg Castle and Hamlet, and a Hamlet theatre festival is held at the castle each summer. Restaurant bills typically already include service.",
    seeAndDo:
      "Kronborg Castle (a World Heritage Site, the setting for Hamlet); St Mary's Church in the old town; the M/S Maritime Museum of Denmark cluster; a ferry day trip to Helsingborg, Sweden.",
    whenAndTips:
      "May–September is the most pleasant season, with the castle busiest during the summer Hamlet festival. It's an easy day trip from Copenhagen, and the ferry also makes for a convenient side trip to Sweden.",
  },
  roskilde: {
    identity:
      "Roskilde is a historic town in northern Zealand, with an urban-area population of about 54,000 in 2026 (about 93,000 in the municipality), Denmark's religious and political centre for centuries starting in the 10th century, now known for Roskilde Cathedral and the Viking Ship Museum, and host of a well-known European music festival.",
    // howItWorks sources: 罗斯基勒：**市镇（kommune）93,142 人**（DST FOLK1A，2026 年三季度，1 级）；
    //   **城区（byområde）53,897 人**，在 DST 城区人口表中列第 10（《Byopgørelsen 1. januar 2026》，
    //   1 级，2026-09-08 核）。原文把城区数标成了市镇人口，差约 4 万。
    //   「丹麦第十大城市」这个排名本来就是从城区表来的 —— 排名与数字都对，缺的是那句「按城区人口计」。
    howItWorks:
      "Roskilde is a municipality on Zealand in Denmark with about 93,000 people in the municipality in 2026 and about 54,000 in the urban area, the tenth-largest city by urban-area population, 30 km west of Copenhagen, governed by an elected council and mayor; the municipality runs schools and elder care, the region hospitals and the state police. Harald Bluetooth founded the town in the 980s, and from the eleventh century until 1443 it was the capital of Denmark before giving way to Copenhagen; the cathedral completed in 1275 was the first Gothic brick cathedral in Scandinavia, inscribed as World Heritage in 1995, and holds thirty-nine royal tombs, still in use today. Five eleventh-century Viking ships raised from the fjord in the 1960s stand in the Viking Ship Museum by the water, having been scuttled to block the channel and defend this capital. The Roskilde Festival, held since 1971, draws about eighty thousand people a year as one of the largest in the Nordic countries, and Roskilde University was founded in 1972. Newcomers most often go wrong by taking Roskilde for a satellite of Copenhagen, when it was the capital for four hundred years before Copenhagen was.",
    layout:
      "The old town is built at the southern end of Roskilde Fjord, with the cathedral standing on the city's high point and the Viking Ship Museum right on the waterfront — together forming the two ends of the town's historic axis.",
    gettingAround:
      "Roskilde's own airport has no scheduled passenger service; the nearest with scheduled flights is Copenhagen Airport (about 35 km, about 25 minutes by train). The old town is walkable. The climate is temperate maritime.",
    culture:
      "The official language is Danish, with high English proficiency. Roskilde Festival is one of the largest open-air music festivals in Northern Europe, drawing tens of thousands of visitors each June–July. Restaurant bills typically already include service.",
    seeAndDo:
      "Roskilde Cathedral (a World Heritage Site, the burial place of Danish monarchs); the Viking Ship Museum (displaying five recovered and restored Viking ships); a walk along the fjord; the medieval streets of the old town.",
    whenAndTips:
      "May–September is the most pleasant season; accommodation is tight during the Roskilde Festival in June–July, while outside festival time is an ideal window for visiting the cathedral and museum.",
  },
  odense: {
    identity:
      "Odense is Denmark's third-largest city by urban-area population, with about 188,000 people in the urban area in 2026, sitting at the centre of the island of Funen. It is the birthplace of Hans Christian Andersen and the core city of the Region of Southern Denmark.",
    // howItWorks sources: 欧登塞：市镇 213,140 人（DST FOLK1A，2026 年三季度，1 级）；
    //   城区 187,558 人，在 DST 城区人口表中列第 3（《Byopgørelsen 1. januar 2026》，1 级，2026-09-08 核）。
    //   **「丹麦第三大城市」按城区人口计成立**，已在正文写明口径。
    //   本条目原本两档口径就标对了，只是年份落后两期。
    howItWorks:
      "Odense is Denmark's third city, on the island of Funen in the Region of Southern Denmark; the municipality covers about 305 km² with about 213,000 people in 2026, about 188,000 in the urban area, governed by a mayor and council. The municipality runs schools, elder care and social services, the region runs hospitals, and the state runs police and universities. Hans Christian Andersen was born here, and in 2021 the museum designed by Kengo Kuma was built around the house of his birth, with the Odense River running through the centre; the old town has lately closed and remade the through road that cut across it, and the light rail opened in 2022 runs through the centre. The University of Southern Denmark lies to the south, and around it some 300 robotics and automation firms have grown, Universal Robots among them. The Great Belt Bridge, opened in 1997 and 1998, ties Funen to Zealand, with Copenhagen about an hour and a quarter away. The bicycle is daily life. Addresses give street, number and four-digit postcode beginning with 5000. Newcomers most often go wrong by taking Odense for a fairy-tale town, when it is the capital of Denmark's robotics industry.",
    layout:
      "The old town extends outward from the Hans Christian Andersen House museum, with a canal running through the city and medieval streets interwoven with 19th-century buildings — one of Denmark's better-preserved historic town centres.",
    // gettingAround sources: 机场距离：注册表坐标算出直线 87.1 公里，原文短于直线、不可能成立，已改为略高于直线的值（实际公路里程可能更长）。
    gettingAround:
      "Odense's own airport has no scheduled passenger service; the nearest with scheduled flights is Billund Airport (about 90 km); from Copenhagen a direct train takes about 1.5 hours. The old town is walkable. The climate is temperate maritime.",
    culture:
      "The official language is Danish, with high English proficiency. Odense is known worldwide for Hans Christian Andersen, and the city's cultural life is closely tied to fairy-tale themes. Restaurant bills typically already include service.",
    seeAndDo:
      "The Hans Christian Andersen Museum; Odense Cathedral; the Møntergården Museum of natural history and archaeology; a walk through the medieval streets of the old town. Day trips to the Funen rolling farmland and the South Funen Archipelago.",
    whenAndTips:
      "May–September is the most pleasant season; as the core city of Funen, it's a convenient base for exploring the island's rolling farmland and the archipelago to the south.",
  },
  esbjerg: {
    // identity sources: 人口：**城区（byområde）口径** 71,371 —— 丹麦统计局《Byopgørelsen 1. januar 2026》，1 级（2026-09-08 核，与 howItWorks 段同源）。⚠️ 与 kommune（市镇，约 11.5 万）是两档，正文已写明是城区。该表年度、1 月 1 日基准、往年 5 月发布，但 2026 年那期声明「暂无后续发布计划」（见 data-refresh-calendar）。
    identity:
      "Esbjerg is Denmark's largest port city on the west coast, with an urban-area population of about 72,000 as of 1 January 2026 (Statistics Denmark), which grew up from harbour construction in the late 19th century and is now an important base for the Danish North Sea oil industry and a gateway for Wadden Sea ecotourism.",
    // howItWorks sources: 埃斯比约城区 71,371 人，DST 城区人口表第 5（《Byopgørelsen 1. januar 2026》，1 级，2026-09-08 核）。
    //   数字、年份、口径、排名四项全对，本轮无需改动 —— 这是正确写法的范例。
    howItWorks:
      "Esbjerg is a port city on the west coast of Jutland in Denmark with an urban population of about 71,400 in January 2026, the country's fifth city and the largest in West Jutland, governed by an elected council and mayor; the municipality runs schools and elder care, the region hospitals and the state police. The city did not grow slowly: after Denmark lost the port of Altona in the Second Schleswig War of 1864, the state decided in 1868 to build a new harbour on this coast of farms, the town rose with the harbour and by 1901 held thirteen thousand people. It was a fishing port first, then an exporter of butter and meat, and is now the base of Denmark's oil and offshore industry, sixty-five per cent of the country's wind turbines shipping out from its quays. The four white giants of 'Man Meets the Sea' sit on the shore looking out to water, the ferry to Fanø leaves from the harbour, and Ribe, the oldest town in Denmark, lies in the same municipality. Newcomers most often go wrong by looking for an old town in Esbjerg, when it was begun in 1868 and its oldest houses are barely a hundred and fifty years old.",
    layout:
      "The city is built along its North Sea harbour, laid out in a neat grid plan drawn up in the late 19th century — an unusual example of a \"young, planned city\" in Denmark, with the port district still the economic core of the city.",
    // gettingAround sources: 机场距离：注册表坐标算出直线 52.5 公里，原文短于直线、不可能成立，已改为略高于直线的值（实际公路里程可能更长）。
    gettingAround:
      "Esbjerg's own airport mainly serves helicopter traffic to offshore oil platforms, with very few scheduled passenger flights; the nearest with scheduled passenger service is Billund Airport (about 60 km). The old town is walkable; reaching the Wadden Sea requires a car or a tour. The climate is temperate maritime, with fairly strong coastal winds.",
    culture:
      "The official language is Danish, with high English proficiency. Esbjerg is an important base for Denmark's North Sea oil industry and a gateway city for exploring the Wadden Sea World Heritage Site. Restaurant bills typically already include service.",
    seeAndDo:
      "The Men at Sea sculptures on the beach; the Fisheries and Maritime Museum; the Wadden Sea Centre (learn about intertidal ecology); a boat trip or guided walk out onto the Wadden Sea's mudflats and barrier islands.",
    whenAndTips:
      "May–September is the most pleasant season and peak time for birdwatching and mudflat walking on the Wadden Sea; check tide tables before any Wadden Sea outing, and it's best to go with a professional guide for safety.",
  },
  ribe: {
    identity:
      "Ribe is Denmark's oldest surviving town, its founding traceable to around AD 704, with a population of about 8,000, preserving the most complete medieval street layout in Denmark.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Ribe (Denmark; town ~8,403 2026; the oldest town in Denmark, a trading centre from the early 8th century; part of Esbjerg Municipality since 2007; seat of the Diocese of Ribe, cathedral begun 1150 on an earlier church; marks of the Burchardi flood of 1634 on the cathedral wall; cathedral school from at least 1145; Viking Centre and Museum; Wadden Sea)
    howItWorks:
      "Ribe is a small town of southern Jutland in Denmark with about 8,400 people in 2026, part of Esbjerg Municipality since the mergers of 2007 and no longer a municipality of its own; the municipality runs schools and elder care, the region hospitals and the state police. It is the oldest town in Denmark: by the early eighth century this was already a busy market place, Viking-age ships loaded at the river mouth and Christians are recorded here from the ninth century. Ribe Cathedral, begun in 1150 on the site of an earlier church, is still the seat of the Diocese of Ribe, and the marks of the Burchardi flood of 1634 are cut into its wall from the storm surge that drowned this whole Wadden coast; the cathedral school is recorded from at least 1145. The low houses and cobbled streets of the old town stand complete with storks nesting on the roofs, the Wadden Sea National Park lies west and the Viking Centre outside town. Esbjerg is about 30 km north. Newcomers most often go wrong by taking Ribe for a reconstructed tourist village, when it is a town that has lived thirteen hundred years and simply never grew.",
    layout:
      "The old town is built along the Ribe River, with the cathedral standing on the town's high point; the medieval stone and half-timbered streets survive largely intact, with almost no modern redevelopment.",
    // gettingAround sources: 机场距离：注册表坐标算出直线 51.7 公里，原文短于直线、不可能成立，已改为略高于直线的值（实际公路里程可能更长）。
    gettingAround:
      "There is no commercial airport locally; the nearest is Billund Airport (about 55 km). The old town is walkable. The climate is temperate maritime.",
    culture:
      "The official language is Danish, with high English proficiency. Ribe is known for its tradition of the night watchman, and this medieval-style evening patrol still takes place in summer. Restaurant bills typically already include service.",
    seeAndDo:
      "Ribe Cathedral (one of Denmark's oldest churches); the Ribe Viking Centre; the night watchman's evening tour. Day trips to Wadden Sea National Park nearby.",
    whenAndTips:
      "May–September is the most pleasant season; as a gateway town to the southern Wadden Sea, it suits a half- to full-day deep dive into its historic quarter.",
  },
  aarhus: {
    identity:
      "Aarhus is Denmark's second-largest city by urban-area population, with a municipal population of about 378,000 in 2026 (about 305,000 in the urban area), on the eastern coast of Jutland. It is the core city of Central Denmark Region and an important Danish university town and centre for culture and the arts.",
    // howItWorks sources: 奥胡斯：市镇 378,270 人（DST FOLK1A，2026 年三季度，1 级）；
    //   城区 305,227 人，在 DST 城区人口表中列第 2（《Byopgørelsen 1. januar 2026》，1 级，2026-09-08 核）。
    //   **「丹麦第二大城市」按城区人口计成立**，已在正文写明口径。
    //   **未核**：本段末尾「东日德兰的都会区约 140 万人」—— 丹麦统计局不发布「都会区」这一档，
    //   该数字追不到官方口径，已另记 unknown（见 travel/aarhus/east-jutland-metro）。
    howItWorks:
      "Aarhus is Denmark's second city and the seat of the Central Denmark Region; Aarhus Municipality covers about 468 km² with about 378,000 people in 2026, about 305,000 in the urban area, governed by a mayor and a council of 31. The municipality runs schools, elder care and social services, the region runs hospitals, and the state runs police and universities. The city grew around the Bay of Aarhus and the Aarhus River, which runs through the centre; the Latin Quarter is the heart of the old town, Aarhus Ø is the new district built on the old docks since 2008, the Old Town museum and the ARoS art museum are two points of reference, and Dokk1 is the new library by the water. Aarhus University, with about 40,000 students, is among the largest in the Nordic countries and makes this the youngest city in Denmark, which calls itself the 'City of Smiles'. The light rail opened in 2017 joins the city to its surroundings. Addresses give street, number and four-digit postcode beginning with 8000. Newcomers most often go wrong by taking Aarhus for a foil to Copenhagen, when it is the centre of the Jutland peninsula and a university city.",
    layout:
      "The old town is built along the Aarhus River, with the Latin Quarter preserving a medieval street layout; the circular rainbow walkway atop the ARoS Aarhus Art Museum is a new city landmark, and the suburbs extend out along Aarhus Bay.",
    gettingAround:
      "Aarhus Airport is about 35 km from the centre, reached by bus; from Copenhagen the train takes about 3 hours. Getting around the city relies mainly on walking, cycling and light rail. The climate is temperate maritime.",
    culture:
      "The official language is Danish, with high English proficiency, especially in the lively university-town atmosphere of the centre. Aarhus is an important Danish centre for contemporary art and design. Restaurant bills typically already include service.",
    seeAndDo:
      "The ARoS Aarhus Art Museum (with its circular rainbow panorama walkway); Den Gamle By, an open-air historic town museum; the old streets of the Latin Quarter; Aarhus Cathedral. Day trips to Mols Bjerge and the Silkeborg Lake District.",
    whenAndTips:
      "May–September is the most pleasant season; Aarhus is a convenient gateway for day trips to Mols Bjerge and the Silkeborg Lake District, either self-drive or with a tour.",
  },
  silkeborg: {
    // identity sources: 锡尔克堡：城区 53,058 人（DST《Byopgørelsen 1. januar 2026》，1 级）；
    //   市镇 103,293 人（DST FOLK1A，2026 年三季度，1 级，2026-09-08 核）。
    //   howItWorks 的两档数字原本就对，是 identity 的「约 4.6 万」比本条目自己给的城区数还低。
    identity:
      "Silkeborg is the core town of Denmark's lake district, with about 53,000 people in the town and about 103,000 across the municipality in 2026, set among the lakes strung along the Gudenå, and a gateway for exploring central Jutland's hill country and river cruising.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Silkeborg (Denmark; town ~53,000, municipality 102,753 in 2026, eleventh-largest urban area; on the Gudenå among the Søhøjlandet lakes and forests, "Denmark's outdoor capital"; grew from a paper mill of 1844, 30 people in 1844 to 556 in 1850; Museum Silkeborg with the Tollund Man; Museum Jorn; Hjejlen the world's oldest steamboat; Jyske Bank; Aarhus ~45 km)
    howItWorks:
      "Silkeborg is a municipality of central Jutland in Denmark, about 53,000 people in the town and 102,753 in the municipality in 2026, governed by an elected council and mayor; the municipality runs schools and elder care, the region hospitals and the state police. The town began only in 1844 with a paper mill: thirty people lived here that year and 556 by 1850, and the workers the mill drew built the streets. It lies on the Gudenå among a chain of lakes and forests, which is why it calls itself Denmark's outdoor capital, with the Himmelbjerget hill by the water and the Hjejlen, launched in 1861 and the oldest steamboat still in service in the world, running on the lakes in summer. Museum Silkeborg holds the Tollund Man, a bog body of the fourth century BC among the best preserved in Europe; Museum Jorn holds the work of Asger Jorn of the COBRA movement, who was born here. Jyske Bank has its headquarters in town and Aarhus lies about 45 km east. Newcomers most often go wrong by assuming Denmark has no hills or lakes, when this district holds the densest cluster of both in the country.",
    layout:
      "The small town is spread along the Gudenå and the lakes it links; 19th-century paper-mill buildings line the river, some now converted into cultural venues, with lakeside paths running through the town.",
    // gettingAround sources: 机场距离：注册表坐标算出直线 67.9 公里，原文短于直线、不可能成立，已改为略高于直线的值（实际公路里程可能更长）。
    gettingAround:
      "There is no commercial airport locally; the nearest is Aarhus Airport (about 70 km). The town is walkable, and the lakes can be explored by vintage steamboat or rented canoe. The climate is temperate maritime.",
    culture:
      "The official language is Danish, with high English proficiency. Silkeborg is an important centre for river-based outdoor recreation in Denmark, with a strong canoeing and hiking culture. Restaurant bills typically already include service.",
    seeAndDo:
      "A boat trip on Julsø (the vintage 1861 steamboat Hjejlen is still in service); hiking the Central Jutland Highlands (Møllehøj, mainland Denmark's highest point); the Silkeborg Museum (home to the preserved Tollund Man).",
    whenAndTips:
      "May–September is the most pleasant season and peak time for lake cruises and outdoor activities; as one of Denmark's few hilly lake districts, it suits a one- to two-day itinerary combining hiking and boating.",
  },
  aalborg: {
    // identity sources: 奥尔堡：**市镇 226,404 人**（DST FOLK1A，2026 年三季度，1 级）；
    //   **城区 122,550 人**，在 DST 城区人口表中列第 4（《Byopgørelsen 1. januar 2026》，1 级，2026-09-08 核）。
    //   **原 identity 的「约 14 万」两个官方口径都够不着** —— 是 `npm run check:claims` 的 C6i
    //   （同条目 identity 与 howItWorks 人口打架）报出来的那一条，本轮核实确认属实。
    //   「丹麦第四大城市」按城区人口计成立。
    identity:
      "Aalborg is Denmark's fourth-largest city by urban-area population, with a municipal population of about 226,000 in 2026 (about 123,000 in the urban area), on the south bank of the Limfjord. It is the core city of North Denmark Region and a gateway for exploring the northern tip of the Jutland peninsula.",
    // howItWorks sources: Wikipedia (2026-09): Aalborg (municipality ~1,140 km²; ~225,000, city ~120,000; North Denmark Region seat; Limfjord/Nørresundby bridge 1933 + tunnel; AAU 1974; Aalborg Portland; airport 6 km; Plusbus 2023); Municipalities of Denmark
    howItWorks:
      "Aalborg is Denmark's fourth city and the seat of the North Denmark Region; the municipality covers about 1,140 km², much of it countryside, with about 226,000 people in 2026 and about 123,000 in the urban area, governed by a mayor and council. The municipality runs schools, elder care and social services, the region runs hospitals, and the state runs police and universities. The Limfjord divides the city: Aalborg on the south bank, Nørresundby on the north, joined by the bridge of 1933 and a tunnel. The old town lies on the south bank, with Jens Bang's stone house as its emblem and Jomfru Ane Gade as a street of cafés by day and bars by night; the old industrial waterfront has become the Utzon Center and the House of Music. Aalborg University, founded in 1974, is known for problem-based learning, the Aalborg Portland cement works is the remnant of old industry, and green energy is the new direction. The airport lies 6 km north-west, and the Plusbus rapid transit opened in 2023 runs through the city. The Viking burial ground of Lindholm Høje lies on the north bank. Addresses give street, number and four-digit postcode beginning with 9000. Newcomers most often go wrong by taking Aalborg for an industrial town, when it is the university and cultural centre of North Jutland.",
    layout:
      "The old town is built along the Limfjord, with medieval streets interwoven with industrial heritage; the waterfront has been redeveloped in recent years into a cultural and leisure district, and it's a good starting point for trips to Rebild Bakker and Skagen.",
    gettingAround:
      "Aalborg Airport is about 6 km from the centre, reached by bus; from Copenhagen the train takes about 4.5 hours. Getting around the city relies mainly on walking, cycling and buses. The climate is temperate maritime.",
    culture:
      "The official language is Danish, with high English proficiency. Aalborg was historically known for industry and shipping, and its waterfront district has since transformed into a hub for cultural and creative industries. Restaurant bills typically already include service.",
    seeAndDo:
      "The Limfjord waterfront promenade; the Aalborg Historical Museum; hiking at Rebild Bakker nearby; a convenient staging point for a trip on to Skagen.",
    whenAndTips:
      "May–September is the most pleasant season; Aalborg is a convenient gateway for exploring both Rebild Bakker and Skagen Odde, and a self-drive day trip can cover both.",
  },
  skagen: {
    identity:
      "Skagen is a small town at the very northern tip of the Jutland peninsula, with a population of about 7,700; its distinctive Nordic light drew a colony of painters in the late 19th century, forming the well-known \"Skagen Painters\" movement, and it is now a well-known Danish holiday town.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Skagen (Denmark; town ~7,250 January 2026, down from a peak of 14,050 in 1980; in Frederikshavn Municipality; northernmost town in Denmark; Grenen where the North Sea and the Baltic meet; the Skagen Painters from the late 1870s; the Sand-Covered Church closed 1795, replaced 1841; the Port of Skagen is Denmark's main fishing port; Skagensbanen railway, most northerly station; ~2 million visitors)
    howItWorks:
      "Skagen is the northernmost town in Denmark, at the tip of Jutland, with about 7,250 people in January 2026, down from a peak of 14,050 in 1980; it belongs to Frederikshavn Municipality and is no longer a municipality of its own, the municipality running schools and elder care, the region hospitals and the state police. The town lies on a spit running north-east, and at its end Grenen is the northernmost point of Denmark, where the waves of the Skagerrak and the Kattegat meet head on and the line between two seas can be seen from the sand. From the late 1870s a group of Nordic painters came each summer to paint the fishermen and the light, forming the Skagen Painters, and their work and houses are the museums of today; the fourteenth-century church was buried by drifting sand and closed in 1795 with only its tower left above the dunes, a new church being built in 1841. The Port of Skagen is Denmark's largest fishing port by value, the Skagensbanen ends at the country's most northerly station, and about two million visitors come each year. Newcomers most often go wrong by expecting the town to sit on the point, when Grenen lies a few kilometres out and the last stretch is walked over sand.",
    layout:
      "The town is characterised by traditional fishing-village buildings with yellow-plastered walls and red tile roofs; the Grenen sand spit extends north beyond the town and is its signature natural landmark.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Aalborg Airport (about 100 km). The town is walkable; reaching the tip of the Grenen spit requires walking or a shuttle (private cars are not allowed at the very end of the spit). The climate is temperate maritime, with fairly strong coastal winds.",
    culture:
      "The official language is Danish, with high English proficiency. The artistic legacy of the Skagen Painters remains central to the town's cultural identity today, and the local yellow-walled building style has become a distinctive regional landmark. Restaurant bills typically already include service.",
    seeAndDo:
      "The Grenen sand spit (where the North Sea and the Kattegat meet — you can stand with a foot in each sea); the Skagens Museum (a collection of Skagen Painters' works); the ruins of the old church buried by sand; the seafood market at Skagen harbour.",
    whenAndTips:
      "May–September is the most pleasant season and the best time to see the meeting of the two seas; the round-trip walk to the tip of Grenen takes about 1–1.5 hours, with the best views at low tide.",
  },
  roenne: {
    // identity sources（2026-09-15 核实，add-year）: DST StatBank BY1，byområde Rønne = 13,589（2026-01-01），1 级；下一期约 2027-05
    identity:
      "Rønne is the main town on the island of Bornholm, with an urban population of about 13,600 as of 1 January 2026 (Statistics Denmark), the island's largest port and administrative centre, and a gateway for exploring the island's granite landforms and historic castle.",
    // howItWorks sources: 伦讷城区 13,589 人、博恩霍尔姆市镇（全岛单一市镇）38,677 人
    //   （DST BY1 / Byopgørelsen 2026-01-01，1 级；FOLK1A 2026 年三季度核对 38,651，2026-09-08 核）。
    //   两档口径标注清楚、数字准确，本轮无需改动 —— 小岛条目最容易犯的「把全岛的数写成镇的」这里没有发生。
    howItWorks:
      "Rønne is the largest town on the Baltic island of Bornholm with an urban population of about 13,600 in 2026, the Bornholm Regional Municipality covering the whole island holding about 38,700 — the island is a single municipality, administratively part of the Capital Region, running schools, elder care and local affairs while the state runs police. The town was founded about 1327, its natural harbour and Baltic position building it on the herring fishery, and cobbled streets and half-timbered houses are the shape of the old town. Soviet aircraft bombed it on 7 and 8 May 1945, destroying 212 houses, and it was rebuilt after the war. Today ferries run from Rønne to Køge in Denmark, Ystad in Sweden, Sassnitz in Germany and Świnoujście in Poland, and the quickest way to Copenhagen goes through Sweden; Bornholm Airport lies south of town, ceramics is the island's old craft, and the round churches and Hammershus castle stand elsewhere on the island. Newcomers most often go wrong by taking Rønne for Bornholm, when it is only the gateway on the west coast and the island's sights are scattered around it.",
    layout:
      "The old town is built along the harbour, with well-preserved cobblestone streets and traditional smoke-yellow houses — one of Denmark's best-preserved historic towns, and the hub from which the rest of the island's sights radiate outward.",
    gettingAround:
      "Bornholm Airport is about 5 km from town, reached by bus; ferries also run from Copenhagen or southern Sweden. The old town is walkable; exploring the rest of the island is best done by car or rented bicycle. The climate is temperate maritime, with the surrounding sea moderating the temperature swing between winter and summer compared with mainland Denmark.",
    culture:
      "The official language is Danish, with high English proficiency. Thanks to its abundant sunshine and lively arts-and-crafts scene, Bornholm is known as \"Denmark's sunshine island,\" with ceramics and glasswork a local speciality. Restaurant bills typically already include service.",
    seeAndDo:
      "The cobblestone streets of the old town; the ruins of Hammershus Castle (one of the largest castle ruins in Northern Europe); hiking the Almindingen forest highland; the Hammeren granite coast; the sea caves at Helligdomsklipperne.",
    whenAndTips:
      "May–September is the most pleasant season with the most sunshine; plan at least two to three days for a self-drive loop of the island to cover the scattered sights of the granite coast, the Almindingen highland and the historic castle.",
  },
  billund: {
    identity:
      "Billund is a small town in the southern part of Central Denmark Region, with a population of about 6,600, home to the world's first Legoland theme park and the global headquarters of the LEGO Group.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Billund (town in Billund Municipality, Denmark; 7,446 in January 2026; 13 km east of Grindsted, 27 km west of Vejle; The Lego Group founded here in 1932 and still headquartered here, from about 200 workers in 1960 to 20,000 in 2022 with over a quarter in Billund; Legoland opened 7 June 1968, about 2 million visitors a year; Lego House, Lalandia; Billund Airport built by Lego as a private airfield in 1962, opened publicly 1964, Denmark's second-busiest with 3.7 million passengers in 2022)
    howItWorks:
      "Billund is a small town in central Jutland, Denmark, with about 7,450 people in January 2026, part of Billund Municipality and governed by an elected council and mayor; the municipality runs schools and elder care, the region hospitals and the state police. It is a town grown by one company: the Lego Group was founded here in 1932 and is still headquartered here, growing from about two hundred workers in 1960 to twenty thousand in 2022, more than a quarter of them working in Billund, so that the town has risen and fallen with the firm. Legoland opened on 7 June 1968 with three thousand visitors on its first day and 625,000 in its first year, and now draws about two million; Lego House, the Lalandia water park and several hotels stand around the same industry. The airport too was the company's: Lego built it as a private airfield in 1962 and it opened to the public in 1964, and it is now Denmark's second-busiest, carrying 3.7 million passengers in 2022. Vejle lies 27 km east. Newcomers most often go wrong by taking Billund for an ordinary Danish town, when its airport, its park and its jobs all come from one enterprise.",
    layout:
      "The town itself is small; Legoland and the LEGO House museum form the main landmarks at its centre, and Billund Airport, Denmark's second-busiest by passengers, brings the town international visitor numbers far beyond what its population would suggest.",
    gettingAround:
      "Billund Airport sits right at the edge of town and is an important hub for domestic flights within Denmark. The town is walkable; reaching surrounding sights such as Randbøl Hede requires a car. The climate is temperate maritime.",
    culture:
      "The official language is Danish, with high English proficiency. Billund is known worldwide as the birthplace of the LEGO brick, and the town's identity is closely tied to the LEGO brand. Restaurant bills typically already include service.",
    seeAndDo:
      "Legoland (the world's first LEGO-themed park); LEGO House (an interactive LEGO experience centre). Day trips to Randbøl Hede nearby to see a stretch of classic Jutland heather heath.",
    whenAndTips:
      "April–September is peak season for Legoland (some areas close in winter); as a family-travel gateway town, plan one to two days focused on the park experience.",
  },
};
