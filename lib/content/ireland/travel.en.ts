import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Ireland ============
  "ireland-overview": {
    // identity sources: CSO Ireland《Population and Migration Estimates, April 2025》（2025-08-26 发布）：常住人口估计 5,458,600 人。https://www.cso.ie/en/releasesandpublications/ep/p-pme/populationandmigrationestimatesapril2025/
    //   核实日 2026-09-07，来源级别 1
    identity:
      "The Republic of Ireland sits on the Atlantic edge of north-western Europe, covering about 70,000 km² with a population of about 5.46 million as of April 2025 (Central Statistics Office). It is known for green pastoral countryside, Atlantic sea cliffs and a long Celtic-Gaelic cultural tradition; the official languages are Irish and English.",
    layout:
      "Ireland can be divided roughly into: Leinster (Dublin, the eastern plain and capital region), Munster (Cork, Limerick and Kerry, the southern and south-western coast and mountains), Connacht (Galway, the western coast and Gaeltacht areas), and the Republic's portion of Ulster (Donegal, the north-west coast). The centre of the country is dominated by low-lying land and peat bog, with most upland concentrated around the coastal margins.",
    gettingAround:
      "Dublin Airport is the main international gateway; rail and long-distance coach networks cover the main towns, with intercity journeys typically taking 1–3 hours. Scheduled domestic flights are very limited — essentially just Dublin–Donegal (a government-subsidised PSO route) and Dublin–Kerry (a commercial Ryanair route, unsubsidised since 2021). Driving is on the left, and rural roads are often narrow. The climate is temperate maritime, mild and rainy year-round with changeable weather, so it's worth carrying rain gear. Restaurant bills typically don't include a tip; around 10% or rounding up is customary. The voltage is 230V with UK-style three-pin plugs.",
    culture:
      "The official languages are Irish (Gaelic) and English; English is used in daily life throughout most of the country, while parts of the western coast (the Gaeltacht) still use Irish as the primary spoken language. The Irish are known for their conversational warmth, humour and hospitality, and pub culture is a central part of social life. Traditional music, dance and Celtic festivals such as St Patrick's Day are widely celebrated across the country.",
    seeAndDo:
      "Natural landforms: the Cliffs of Moher, the Burren, MacGillycuddy's Reeks and the Ring of Kerry, the Twelve Bens of Connemara, Slieve League. Heritage and culture: Trinity College Dublin and the Book of Kells, the early Christian site at Glendalough, the prehistoric passage tomb at Newgrange. Islands and coast: the Aran Islands, Skellig Michael, Killary Harbour.",
    whenAndTips:
      "May–September brings relatively stable weather and longer daylight, making it the peak travel season; a drive along the Wild Atlantic Way is the classic way to explore the west coast, and hiking in the mountains or along the sea cliffs calls for wind- and rain-proof gear given how quickly weather can change.",
  },
  dublin: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   都柏林：2022 年普查，NUTS3「Dublin」区（四个地方政府）合计 1,458,154；都柏林市议会辖区约 59 万。CSO 官方新闻稿，级别 1，2026-09-09 核。
    //   https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsdublin
    //   **原文的「都会区约 120 万」是自造口径**（CSO 没有 metro area 这一档），而同条目 howItWorks 早就写着约 146 万 —— 又一次「一个条目里两段各写各的」。
    //   另有一个数量级接近的官方档：CSO 2022 年起启用的「都柏林市及郊区」建成区约 126 万，但本轮**没能回到 CSO 一手表格逐字核对**，只有 3 级转引，因此正文未采用。
    identity:
      "Dublin is the capital and largest city of Ireland, with about 590,000 people in the Dublin City Council area and about 1.46 million across the four Dublin local authorities together (2022 census), sitting on Dublin Bay at the mouth of the River Liffey. It is Ireland's political, economic and cultural centre and one of Europe's major tech and finance hubs.",
    // howItWorks sources: Wikipedia (2026-09): Dublin (Dublin City Council 117.8 km², 592,713 2022, 63 councillors, ceremonial Lord Mayor, chief executive; 4 councils in County Dublin; County Dublin ~1.46 million; GDA ~2.1 million; postal districts odd north/even south; Luas/DART/Leap); Local government in the Republic of Ireland
    howItWorks:
      "The Dublin people speak of is, administratively, in four parts: Dublin City Council governs about 118 km² with about 593,000 people in 2022, while Fingal, South Dublin and Dún Laoghaire-Rathdown each have councils of their own, the four together making up County Dublin of about 1.46 million, and the Greater Dublin Area holds about 2 million, four in ten of the Irish population. Irish councils have elected councillors, but administration rests with an appointed chief executive, and the Lord Mayor is a ceremonial office rotating each year; councils run housing, planning, roads, libraries and fire, while police, schools and health belong to the state. The Liffey divides the city into Northside and Southside, and the postal districts run odd to the north and even to the south — 'Dublin 4' and 'Dublin 8' are the local language of address, with the Eircode added since 2015. The Georgian squares lie on the south side, Temple Bar by the river, the Docklands hold the finance and technology companies, and Phoenix Park lies to the west. Addresses give number, street, postal district and Eircode. Two Luas tram lines, the DART coastal railway and buses run on one Leap card, and there is no metro. Newcomers most often go wrong by taking the City Council's area for the whole city, when it holds only four in ten of the county's people.",
    layout:
      "The Liffey runs through the city centre, dividing it into the Southside — historically home to Trinity College and Grafton Street's shopping district — and the Northside, centred on O'Connell Street and the docklands; the suburbs extend out along Dublin Bay.",
    gettingAround:
      "Dublin Airport is about 10 km by road from the centre, reached by bus or taxi; there is no direct metro link yet. Getting around the city relies mainly on walking, the Luas tram and buses, with the historic Southside walkable on foot. The climate is temperate maritime, mild and rainy year-round with changeable weather.",
    culture:
      "The official languages are Irish and English, with English used in daily life. Dublin has a strong pub culture, with the Temple Bar district a hub of nightlife, and the city hosts the main St Patrick's Day parade. Restaurant bills typically don't include a tip; around 10% is customary.",
    seeAndDo:
      "Trinity College and the Book of Kells; Dublin Castle; the Guinness Storehouse; St Patrick's Cathedral; the Temple Bar district; Phoenix Park, one of Europe's largest city parks. Day trips to the Wicklow Mountains and Glendalough.",
    whenAndTips:
      "May–September is mild and has longer daylight hours; around St Patrick's Day (17 March) the city gets busy and accommodation tightens up, so book ahead. The main sights are concentrated in the centre, easily covered on foot and by bus.",
  },
  kilkenny: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "Kilkenny is a well-preserved medieval town in Leinster in south-east Ireland, with a population of about 27,000 (2022 census), known for its Norman castle and medieval streets and often called Ireland's \"medieval capital.\"",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kilkenny (Ireland; city in County Kilkenny in Leinster with 27,184 residents in 2022, the thirteenth-largest urban centre in the country; a 6th-century ecclesiastical settlement of Saint Canice, a town charter from William Marshall in 1207 and city status by royal charter of James I in 1609; the Confederation of Kilkenny operated here from 1642 to 1649; Kilkenny Castle, formerly the Butler seat; St Canice's Cathedral with its 9th-century round tower; nicknamed the Marble City for the local black limestone with white fossils; the Kilkenny Arts Festival, the Cat Laughs comedy festival and the Roots Festival; Cartoon Saloon and a craft and design scene; rail to Dublin and Waterford)
    howItWorks:
      "Kilkenny is a city in the south-east of Ireland with 27,184 residents in 2022, the thirteenth-largest urban centre in the country. It is a city in law: James I granted a city charter in 1609, but Ireland abolished town-level councils in 2014, so it is now administered by Kilkenny County Council and the title is a historic status rather than a tier of government. The frame of the place is a Medieval Mile: Kilkenny Castle of the Butler family at the south end, St Canice's Cathedral and its ninth-century round tower at the north, a few narrow lanes joining them, and the town charter granted by William Marshall in 1207 covering roughly that stretch. It is called the Marble City because the local black limestone holds white fossils and polishes like marble, and the old buildings are largely built of it. The Confederation of Kilkenny operated here from 1642 to 1649, a passage often cited in Irish history. Arts and comedy festivals fill the city in summer, and the railway runs to Dublin and Waterford. Newcomers most often go wrong by expecting the scale the word city implies, when this one can be walked end to end in half an hour.",
    layout:
      "The old town is built along the River Nore, with the castle and cathedral standing on high ground on opposite banks; the medieval street layout survives largely intact, making it one of Ireland's best-preserved medieval towns.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Dublin Airport (about 120 km, roughly 1.5 hours by train). The old town is walkable. The climate is temperate maritime; its inland position means slightly less rainfall than coastal areas.",
    culture:
      "The official languages are Irish and English, with English used day to day. Kilkenny is an important centre for crafts and design in Ireland and is also known nationally as a craft-beer town. Restaurant bills typically don't include a tip; around 10% is customary.",
    seeAndDo:
      "Kilkenny Castle; St Canice's Cathedral and round tower; the Medieval Mile walking route; the ruins of the Black Abbey (St Francis Abbey). Day trips to Jerpoint Abbey nearby.",
    whenAndTips:
      "May–September is the most pleasant season; the Kilkenny Arts Festival (August) draws more visitors. As an inland town, it makes a good one- or two-day base for exploring the south-eastern Leinster countryside.",
  },
  cork: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "Cork is Ireland's second-largest city by the 2022 census city-and-suburbs count, with a population of about 220,000 (2022 census), sitting at the mouth of the River Lee. It is the economic and cultural centre of Munster in southern Ireland, and locals often jokingly call Cork the \"real capital\" of Ireland.",
    // howItWorks sources: Wikipedia (2026-09): Cork (Cork City Council ~187 km² after 2019 extension; 224,004 2022; separate from Cork County Council; island in the Lee; UCC; Apple; buses; suburban rail to Cobh/Midleton); Local government in the Republic of Ireland
    howItWorks:
      "Cork is Ireland's second city, and Cork City Council, since its boundary extension of 2019, governs about 187 km² with about 224,000 people in 2022, a separate local authority from Cork County Council; the council has elected councillors with an appointed chief executive in charge of administration and a Lord Mayor rotating each year, and police, schools and health belong to the state. The centre lies on an island between two channels of the River Lee, with St Patrick's Street and the English Market, the main street built over a former channel; Shandon rises on the hills of the north side, and the south side runs down to Cork Harbour, among the largest natural harbours in the world, with Cobh and the pharmaceutical plants of Ringaskiddy on its shores. University College Cork and Apple's European headquarters are the two largest employers. Public transport is buses only, with suburban rail to Cobh and Midleton. Cork people call their city 'the real capital', and the rise and fall of the accent is its badge. Addresses give number, street and Eircode. Newcomers most often go wrong by taking Cork for a small city, when its council area grew nearly fivefold in 2019 and the industry around the harbour rivals Dublin's.",
    layout:
      "The city centre is built on an island formed where the Lee splits into two channels, its street layout shaped by the old canal system; the suburbs extend out along the river mouth, with Cobh harbour historically an important transatlantic shipping port nearby.",
    gettingAround:
      "Cork Airport is about 6.4 km in a straight line from the centre, reached by bus. Getting around the city centre relies mainly on walking, as the old town is compact. The climate is temperate maritime, mild and rainy year-round.",
    culture:
      "The official languages are Irish and English, with English used day to day. Cork is known for its local food culture, and the English Market is central to daily food life in the city. Restaurant bills typically don't include a tip; around 10% is customary.",
    seeAndDo:
      "The English Market; St Fin Barre's Cathedral; University College Cork. Day trips to nearby Cobh (the Titanic's last port of call) and Blarney Castle (home of the \"Blarney Stone\").",
    whenAndTips:
      "May–September is the most pleasant season; Cork is an ideal gateway for exploring the south Munster coast and County Kerry, with a direct train to Dublin (about 2.5 hours).",
  },
  killarney: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "Killarney is a small town in County Kerry in south-west Ireland, with a population of about 14,000 (2022 census), set beside MacGillycuddy's Reeks and the Lakes of Killarney — the traditional gateway to the Ring of Kerry and Ireland's highest peak.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Killarney (Ireland; town in County Kerry with 14,412 residents in 2022, the second largest in the county; a monastery founded on Innisfallen Island in 640; tourism has underpinned the town's economy for more than two and a half centuries, with Queen Victoria's visit of 1861 raising its profile; the Lakes of Killarney, Ross Castle, Muckross House and Abbey, MacGillycuddy's Reeks and the Gap of Dunloe; the Muckross estate presented to the Irish state in 1932 to create the country's first national park; tourism worth about 410 million euros a year with about 1.1 million visitors; the Liebherr plant of 1958 a major employer; the N22, rail to Dublin, Cork and Tralee, and Kerry Airport at Farranfore)
    howItWorks:
      "Killarney is a town in County Kerry, Ireland, with 14,412 residents in 2022, the second largest in the county; Ireland abolished town-level councils in 2014 and local affairs are handled by Kerry County Council. Its economy has rested on tourism for more than two and a half centuries, Queen Victoria's visit in 1861 making its name in the English-speaking world, and it now receives about 1.1 million visitors a year worth some 410 million euros. Its capital is the mountains and lakes behind it: Killarney National Park was Ireland's first, created when the Muckross estate was given to the state in 1932 and enlarged since, and it holds the Lakes of Killarney, Ross Castle, Muckross House and Abbey; MacGillycuddy's Reeks beyond are the highest mountains in Ireland with the Gap of Dunloe among them, and the Ring of Kerry road begins in the town. Jaunting cars still carry passengers through the park. The Liebherr plant opened in 1958 is the other large employer, the railway runs to Dublin, Cork and Tralee, and Kerry Airport is at Farranfore. Newcomers most often go wrong by taking the Ring of Kerry for an easy day's drive, when it is about 180 km of narrow road.",
    layout:
      "The compact town centre sits right beside Killarney National Park and its lakes to the south-west, with MacGillycuddy's Reeks rising as a backdrop on the park's western side, forming a classic mountain-and-lake setting.",
    gettingAround:
      "Kerry Airport is about 14 km in a straight line from town, reached by taxi; there's also a train from Dublin (about 3.5 hours, most services with one change at Mallow). The town centre is walkable, and bicycles or jaunting cars are available for touring the lakes and national park. The climate is temperate maritime and rainy.",
    culture:
      "The official languages are Irish and English, with English used day to day. Killarney has been a fashionable European resort destination since the 18th century, and tourism remains central to the local economy. Restaurant bills typically don't include a tip; around 10% is customary.",
    seeAndDo:
      "Killarney National Park and its three lakes; Muckross House and Estate; a jaunting-car tour through the Gap of Dunloe; hiking in MacGillycuddy's Reeks (Carrauntoohil); the classic starting point for a Ring of Kerry drive.",
    whenAndTips:
      "May–September is the most pleasant season and peak time for hiking and touring the lakes; driving the Ring of Kerry counter-clockwise is recommended to avoid tour-bus traffic. Mountain weather is changeable, so bring wind- and rain-proof gear for hiking.",
  },
  dingle: {
    identity:
      "Dingle is a small fishing town on the Dingle Peninsula, with a population of about 2,000, one of Ireland's better-preserved Irish-speaking (Gaeltacht) areas and the gateway for exploring the peninsula's sea cliffs and prehistoric remains.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Dingle (Ireland; town in County Kerry on the Dingle Peninsula, the only town on the peninsula, about 50 km south-west of Tralee; 1,671 residents in the 2022 census, down from 2016, with the oldest average age of any town in Ireland at 44.4 years; within a Gaeltacht region, about 13.7 per cent speaking Irish daily in 2016; more goods exported through Dingle than Limerick by the 13th century; tourism, fishing and agriculture the principal industries, with Dingle Mart serving the region; Fungie, a bottlenose dolphin, sought human contact in Dingle Bay from 1983 and disappeared in 2020; a 2005 order on Gaeltacht place names, and after a 2006 plebiscite in which about 90 per cent supported bilingual signage, legislation designates Dingle as the English name and Daingean Uí Chúis as the Irish)
    howItWorks:
      "Dingle is the only town on the Dingle Peninsula in County Kerry, Ireland, about 50 km south-west of Tralee, with 1,671 residents in 2022; Ireland abolished town-level councils in 2014 and local affairs are handled by Kerry County Council. It lies within a Gaeltacht, a district designated by the state as an Irish-speaking community where signage, schools and local administration use Irish, and about 13.7 per cent of residents spoke Irish daily in 2016. The name itself shows how that works: an order of 2005 briefly recognised only the Irish form, about ninety per cent of residents supported bilingual signage in a plebiscite of 2006, and legislation since designates Dingle as the English name and Daingean Uí Chúis as the Irish. By the thirteenth century more goods were exported through Dingle than through Limerick; today fishing, farming and tourism are its industries and the livestock mart serves the whole peninsula. The Slea Head drive runs the coast past beehive stone huts and the Blasket Islands lie offshore to the west. Its average age of 44.4 years is the oldest of any town in Ireland. Newcomers most often go wrong by treating Irish as decoration, when here it is the working language of the community.",
    layout:
      "The town is built along Dingle Harbour with a compact street layout, and Slea Head and Mount Brandon along the peninsula's coast form the main landform backdrop around the town.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Kerry Airport (about 50 km). The town itself is walkable, but exploring the peninsula's coastal scenic route requires a car or a tour. The climate is temperate maritime, with fairly strong Atlantic coastal winds.",
    culture:
      "The official languages are Irish and English; Dingle sits in the Gaeltacht, and many local signs and place names appear in Irish. The town is known for its seafood and traditional-music pubs. Restaurant bills typically don't include a tip; around 10% is customary.",
    seeAndDo:
      "The Slea Head viewpoint; early Christian remains such as the Gallarus Oratory beehive huts; whale- and dolphin-watching boat trips from Dingle Harbour (Fungie, the bottlenose dolphin resident in the harbour since 1983, has not been seen since October 2020, and a bronze statue of him stands on the pier); the Slea Head loop drive along the peninsula's coast.",
    whenAndTips:
      "May–September is the most pleasant season; the peninsula's coastal roads are narrow with many tight bends, so drive carefully. The town's traditional-music pubs in the evening are a great way to experience local culture.",
  },
  waterford: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "Waterford is Ireland's oldest city, founded by Vikings in 914, with a population of about 60,000 (2022 census), sitting at the mouth of the River Suir in south-east Ireland and known for its crystal craftsmanship.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Waterford (Ireland; city in the south-east in Munster, the oldest city in the state, founded by Vikings in 914, with 60,079 residents in 2022, the fifth most populous city in the state; the Viking Triangle is the tenth-century settlement, with Reginald's Tower of the 13th to 14th century as its landmark; the motto Urbs Intacta Manet Waterfordia earned after repelling sieges in the 15th century; Waterford Crystal made here from 1783 until early 2009 and resumed in 2010; the port handles about 12 per cent of Ireland's external trade by value, on the River Suir; South East Technological University established 2022; the M9 to Dublin and rail from Plunkett station; the airport currently without scheduled flights)
    howItWorks:
      "Waterford is a city in the south-east of Ireland with 60,079 residents in 2022, the fifth most populous in the state and the oldest — founded by Vikings in 914, earlier than Dublin. It is governed by Waterford City and County Council: the local government reform of 2014 merged the former city and county councils, so one council now covers both. The core of the old town is the Viking Triangle, the tenth-century settlement itself, with Reginald's Tower of the thirteenth and fourteenth centuries on the quay, among the oldest urban buildings in the country; the city twice held off sieges in the fifteenth century and took from it the motto that Waterford remains the untaken city. Waterford Crystal was made here from 1783 until production ended in early 2009, resuming on a smaller scale with a visitor works in 2010. The port on the River Suir handles about twelve per cent of Ireland's external trade by value; South East Technological University was established in 2022, the M9 and the railway run to Dublin, and the local airport has no scheduled flights at present. Newcomers most often go wrong by assuming Dublin is the oldest, when this city is nearly half a century older.",
    layout:
      "The old town is built along the north bank of the Suir, with the Viking Triangle preserving a medieval street layout; the suburbs extend out along the river mouth toward Waterford Harbour.",
    gettingAround:
      "Waterford Airport currently has no scheduled passenger flights; most travellers connect via Cork Airport (about 110 km) or Dublin Airport (about 165 km), or take the train to and from Dublin (about 2.5 hours). The old town is walkable. The climate is temperate maritime.",
    culture:
      "The official languages are Irish and English, with English used day to day. Waterford Crystal is one of Ireland's signature craft brands, and the city's history is closely tied to its Viking and Norman settlement traditions. Restaurant bills typically don't include a tip; around 10% is customary.",
    seeAndDo:
      "A tour of the Waterford Crystal workshop; Reginald's Tower (Ireland's oldest surviving urban building); the medieval museum cluster in the Viking Triangle. Day trips to the Comeragh Mountains nearby.",
    whenAndTips:
      "May–September is the most pleasant season; as Ireland's oldest city, Waterford is well suited to a half- to full-day deep dive into its Viking-Norman historic quarter.",
  },
  limerick: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "Limerick is Ireland's third-largest city by the 2022 census city-and-suburbs count, with a population of about 100,000 (2022 census), sitting at the mouth of the River Shannon and serving as an important city and gateway in Munster, west-central Ireland.",
    // howItWorks sources: 利默里克城市及郊区约 102,000（2022 年普查，CSO）。**「都会区约 16 万」是自造口径** —— CSO 没有 metro area 这一档，与 dublin 条目同型，本轮一并清掉。2026-09-09 核。
    //   https://www.cso.ie/
    //   2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市一级没有官方更新数。
    howItWorks:
      "Limerick is Ireland's third city; in 2014 city and county merged into Limerick City and County Council, and in June 2024 it elected the first directly elected mayor in Ireland, where every other council's mayor remains a ceremonial office rotating each year. The city-and-suburbs count was about 102,000 at the 2022 census; Ireland's statistics office publishes no metropolitan-area tier, so any wider figure has to be given by county. The council runs housing, planning and roads, while police, schools and health belong to the state. The city lies at the head of the Shannon estuary: the medieval town on King's Island holds King John's Castle of 1210, and Newtown Pery on the south bank is the eighteenth-century Georgian grid with O'Connell Street as its main street, a grid unique among Irish cities; the University of Limerick lies at Castletroy in the eastern suburbs, and Shannon Airport about 25 km west. Rugby is the city's religion, and Munster's ground at Thomond Park stands beside King's Island. The 'Limerick 2030' regeneration plan is remaking the centre. Public transport is buses only, with rail to Dublin. Addresses give number, street and Eircode. Newcomers most often go wrong by taking Limerick for a stop on the way to County Clare, when it is the administrative and university centre of the mid-west.",
    layout:
      "The old town is built along the Shannon, with King John's Castle guarding a key crossing point; the city is divided into historic quarters including Irishtown, Englishtown and Newtown Pery.",
    gettingAround:
      "Shannon Airport is about 21 km in a straight line from the centre, reached by bus. Getting around the city relies mainly on walking and buses. The climate is temperate maritime; the flat land at the Shannon estuary tends to be quite windy.",
    culture:
      "The official languages are Irish and English, with English used day to day. Limerick is a stronghold of Irish rugby culture and is generally taken to be the namesake of the five-line comic verse form, the \"limerick,\" though the exact origin of the name remains unsettled. Restaurant bills typically don't include a tip; around 10% is customary.",
    seeAndDo:
      "King John's Castle; St Mary's Cathedral, Limerick; a walk along the Shannon. Day trips to medieval sites along the Shannon such as Bunratty Castle.",
    whenAndTips:
      "May–September is the most pleasant season; Limerick is a convenient gateway for exploring the Shannon and County Clare (the Burren, Cliffs of Moher), about a 1.5-hour drive from the Cliffs of Moher.",
  },
  galway: {
    // identity sources: **爱尔兰的官方人口口径**（CSO，2026-09-09 核）：普查总人口（全国 / 各郡）· 城市法定辖区（City Council administrative area，2014 年地方政府改革后全国仅 5 座法定「城市」）· **「城市及郊区」建成区（City and suburbs / Built-Up Area，2022 年普查起正式启用）** · 年度人口估计（Population and Migration Estimates，**只到全国与 8 个 NUTS3 区域，不下探到郡或城市**，每年 4 月基准、8 月下旬发布）。**官方没有「都会区 / metro area」这一档。** 普查每 5 年一次，上次 2022-04、下次 **2027-05-09**；因此 2023–2026 年间城市与郡一级本来就没有官方更新数，沿用 2022 普查数字不算过期。
    //   本条目数字取自 CSO 2022 年普查（与同条目 howItWorks 一致），3 级转引 CSO 建成区排名表复核，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_Republic_of_Ireland_by_population
    //   ⚠️ **2022 普查之后到 2027-05-09 下次普查之间，爱尔兰城市/郡一级没有官方更新数** —— 沿用 2022 不算过期（CSO 的年度估计只到全国与 8 个 NUTS3 区域）。
    identity:
      "Galway is the core city of Connacht in western Ireland, with a population of about 86,000 (2022 census), sitting on Galway Bay at the mouth of the River Corrib. It is the gateway for exploring Connemara and the Aran Islands, and an important centre of Gaelic culture.",
    // howItWorks sources: Wikipedia (2026-09): Galway (Galway City Council 57.3 km²; 85,910 2022; separate from County Galway; Corrib/Galway Bay; University of Galway ~19,000; Gaeltacht neighbourhoods; medtech; buses only); Local government in the Republic of Ireland
    howItWorks:
      "Galway is the largest city of the west of Ireland; Galway City Council governs about 57 km² with about 86,000 people in 2022, a separate local authority from Galway County Council, running housing, planning and roads, while police, schools and health belong to the state. The city lies where the Corrib meets Galway Bay: the medieval Latin Quarter runs along Shop Street to the Spanish Arch, Eyre Square is the centre, the Claddagh lies on the west bank of the river, and the Salthill promenade stretches west along the shore. The University of Galway has about 19,000 students, a quarter of the city's people; several neighbourhoods of the city are designated Irish-speaking, the Connemara Gaeltacht lies just west, and signs and theatre run in both languages. Medical devices are the largest industry, with the plants of Medtronic and Boston Scientific in the city. The Arts Festival and Race Week are the two peaks of the year. Public transport is buses only, with rail to Dublin and ferries to the Aran Islands. Addresses give number, street and Eircode. Newcomers most often go wrong by taking Galway for a tourist town, when it is the university and medical-technology city of the west.",
    layout:
      "The compact city centre is built at the mouth of the Corrib, with the Latin Quarter preserving a medieval street layout, and the Salthill promenade extending out along Galway Bay.",
    gettingAround:
      "Galway Airport no longer operates scheduled services; the nearest airport is Shannon (about 100 km). The city centre is walkable; reaching Connemara and the Aran Islands requires a car, a tour, or a ferry. The climate is temperate maritime, rainy and windy.",
    culture:
      "The official languages are Irish and English; Galway and its surrounding area form an important Gaeltacht region, with a lively atmosphere of street performers and traditional-music pubs. The Galway International Arts Festival (July) is a major cultural event in Ireland. Restaurant bills typically don't include a tip; around 10% is customary.",
    seeAndDo:
      "The Latin Quarter streets and St Nicholas' Church; the Salthill promenade; the Corrib weir and its salmon-run viewing point; the classic starting point for day trips to the Twelve Bens of Connemara and the Aran Islands.",
    whenAndTips:
      "May–September is the most pleasant season and also peak time for the Galway International Arts Festival; check ferry schedules ahead for the Aran Islands, as winter sailings are prone to weather disruption.",
  },
  westport: {
    identity:
      "Westport is a small town in County Mayo in western Ireland, with a population of about 6,000, the traditional gateway to Croagh Patrick and Achill Island, and often considered one of Ireland's most liveable small towns.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Westport (Ireland; town in County Mayo at the south-east corner of Clew Bay, 6,872 residents in 2022; one of only a few planned towns in Ireland, laid out in the 18th century around Westport House, with the Carrowbeg river channelled into the design to make the tree-lined Mall and its stone bridges; Croagh Patrick, locally the Reek, about 10 km west, with the Reek Sunday pilgrimage; the Great Western Greenway, a 42 km cycling route on the former railway; winner of the Irish Tidy Towns Competition in 2001, 2006 and 2008 and named Best Place to Live in Ireland in 2012; AbbVie employs about 1,400, roughly a quarter of the workforce; rail to Dublin Heuston 250 km away)
    howItWorks:
      "Westport is a town in County Mayo at the south-eastern corner of Clew Bay with 6,872 residents in 2022; Ireland abolished town-level councils in 2014 and local affairs are handled by Mayo County Council. It is one of the few planned towns in Ireland: laid out in the eighteenth century around Westport House, with the Carrowbeg river drawn into the design, walled in stone and lined with trees to make the axis called the Mall, crossed by several stone bridges — the shape of the streets today is still that plan. Croagh Patrick, called the Reek locally, stands about 10 km west, and large numbers climb it on pilgrimage on the last Sunday of July. The Great Western Greenway, 42 km on the former railway, runs from here towards Achill as one of Ireland's first long-distance cycle routes. The AbbVie plant employs about 1,400 people, roughly a quarter of the local workforce. The town has won the national Tidy Towns competition three times. The railway runs 250 km to Dublin. Newcomers most often go wrong by taking it for an old town grown by itself, when its streets were drawn at one stroke.",
    layout:
      "The town was built to an 18th-century plan (generally attributed to the English architect James Wyatt, around 1780), with a canal and tree-lined boulevard running through the centre — one of the few planned towns in Ireland.",
    gettingAround:
      "Ireland West Airport Knock is about 47 km in a straight line from town, reached by bus. The town itself is walkable; reaching Achill Island and Croagh Patrick requires a car. The climate is temperate maritime, with fairly strong Atlantic coastal winds.",
    culture:
      "The official languages are Irish and English, with English used day to day. Westport is known for its neatly planned town centre and lively music-pub culture, and is an important hub for outdoor tourism in western Ireland. Restaurant bills typically don't include a tip; around 10% is customary.",
    seeAndDo:
      "Hiking Croagh Patrick, an important pilgrimage mountain in Ireland; the cliffs at Keem Bay on Achill Island; the ferry to Clare Island; the Westport House estate and Mall.",
    whenAndTips:
      "May–September is the most pleasant season; on Reek Sunday, the last Sunday of July each year, large numbers of pilgrims climb Croagh Patrick and the trail gets busy.",
  },
  "donegal-town": {
    identity:
      "Donegal Town is a small town in County Donegal in north-west Ireland, with a population of about 2,800, the traditional gateway to Slieve League and Glenveagh National Park.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Donegal Town (Ireland; town in County Donegal with an urban population of 2,749 in 2022; although it gave the county its name, Lifford is the county town; from the 15th to the early 17th century the capital of Tyrconnell under the O'Donnell dynasty, rebuilt by Captain Basil Brooke around 1611 after the Flight of the Earls of 1607, who laid out the square known as the Diamond; Donegal Castle, the former O'Donnell stronghold, restored by the Office of Public Works; Donegal Abbey, a 15th-century Franciscan friary; the Annals of the Four Masters compiled nearby between 1632 and 1636; at the mouth of the River Eske on Donegal Bay below the Blue Stack Mountains)
    howItWorks:
      "Donegal Town is a town in County Donegal, Ireland, with an urban population of 2,749 in 2022; Ireland abolished town-level councils in 2014 and local affairs are handled by Donegal County Council. One relation is often mistaken here: the county is named after this town, but the county town is not this place — it is Lifford, up on the eastern border. From the fifteenth century to the early seventeenth this was the capital of Tyrconnell under the O'Donnell dynasty, and after the Flight of the Earls in 1607 Captain Basil Brooke rebuilt the town around 1611 and laid out the triangular square at its centre known as the Diamond, from which all the roads run. Donegal Castle, the O'Donnell stronghold, has been restored by the Office of Public Works and is open, and the ruins of a fifteenth-century Franciscan friary stand at the river mouth; the Annals of the Four Masters were compiled nearby between 1632 and 1636. The town lies where the River Eske meets Donegal Bay below the Blue Stack Mountains, tweed is the old local craft, and the Wild Atlantic Way passes along the coast. Newcomers most often go wrong by assuming this is the county seat, when the county council sits at Lifford.",
    layout:
      "The town is centred on a triangular market square known as the Diamond, with Donegal Castle standing beside the river mouth — a historic trading post on Donegal Bay.",
    gettingAround:
      "Donegal Airport (Carrickfinn) is about 46 km in a straight line from town and has a government-subsidised route to Dublin. The town itself is walkable; reaching Slieve League and Glenveagh National Park requires a car. The climate is temperate maritime and among the windier parts of Ireland.",
    culture:
      "The official languages are Irish and English; County Donegal is an important Gaeltacht region. The area is known for the traditional craft of hand-woven Donegal tweed. Restaurant bills typically don't include a tip; around 10% is customary.",
    seeAndDo:
      "Donegal Castle; the Diamond market square. Slieve League nearby (one of Europe's highest sea cliffs) and Glenveagh National Park; the scenery along Donegal Bay.",
    whenAndTips:
      "May–September is the most pleasant season; as a comparatively remote part of north-west Ireland, driving is the most convenient way to explore Slieve League and Glenveagh National Park — mountain weather is changeable, so bring wind- and rain-proof gear.",
  },
  ennis: {
    // 全七段 sources: 同中文侧（CSO 2022 census F1015 and F1004A, tier 1; clarecoco.ie and gov.ie, tier 1; OPW heritageireland.ie, tier 1; NTA GTFS sample 2026-09-22, tier 1; Payment of Wages (Tips and Gratuities) Act 2022, tier 1; distances computed）。 核实 2026-09-16 当批（content-verifier 独立检索，本条全部 ok）。
    identity:
      "Ennis is the county town of County Clare in the west of Ireland, on the River Fergus, with an urban population of about 27,900 in the 2022 census (Central Statistics Office). It is the gateway to the Cliffs of Moher and the Burren: both are in County Clare and together make up the Burren and Cliffs of Moher UNESCO Global Geopark, and the ruined medieval Franciscan friary in town keeps its 15th- and 16th-century limestone carvings.",
    howItWorks:
      "Ennis has no town government of its own: after the 2014 local government reform abolished town councils, local affairs are handled by Clare County Council, which has 28 elected councillors and its headquarters in Ennis, with day-to-day administration led by a chief executive. The councillors of the Ennis municipal district choose a 'Mayor of Ennis' each year, a yearly title rather than an executive post. The centre of town is around O'Connell Square with narrow streets wrapped round it, the friary ruins by the river to the north and the railway station a short way south-east; local addresses use Eircodes, with the routing key V95 around Ennis. Daily life is shaped by rail and road: about 40 minutes by train south to Limerick and just over an hour north to Galway. Newcomers often assume the Cliffs of Moher are just outside town, when the cliffs visitor centre is about 33 km away in a straight line and about an hour by bus; they also take Shannon Airport for Limerick's airport, when it is in County Clare and closer to Ennis than to central Limerick.",
    layout:
      "The town centre runs along the River Fergus, with O'Connell Square in the middle surrounded by winding narrow streets; the Ennis Friary ruins are by the river north of the square, the Clare Museum is in the centre, and the railway station is to the south-east. North lies the Burren, north-west are the Cliffs of Moher on the Atlantic coast, and south are Shannon Airport and Limerick.",
    gettingAround:
      "Shannon Airport (SNN) is about 16 km from Ennis in a straight line, about 30 to 50 minutes on the 330 bus or about half an hour on the 51 coach. Trains run south to Limerick in about 40 minutes and north to Galway in about 1 hour 15 to 1 hour 30 minutes; for Dublin you change around Limerick. The 350 bus reaches the Cliffs of Moher in about an hour and continues to Doolin and Galway, with timetables varying by season; the Burren is easier by car.",
    culture:
      "English is spoken everywhere, and Irish is also an official language. Ennis Friary opens seasonally, with dates as announced by the site managers. If a service charge is already on the bill there is no need to add more; otherwise tipping is discretionary, not an obligation.",
    seeAndDo:
      "The medieval carvings of Ennis Friary; the Clare Museum; O'Connell Square and the old streets in the centre; the 350 bus to the Cliffs of Moher; the limestone landscape of the Burren and Burren National Park; and Bunratty Castle near Shannon Airport.",
    whenAndTips:
      "May–September has long days and most sights open; it rains all year and the Cliffs of Moher area is windy, so bring a waterproof, windproof jacket. Bus timetables to the Cliffs of Moher and the Burren change with the seasons, so check the operator's schedule before setting off.",
  },
  sligo: {
    // 全七段 sources: 同中文侧（CSO 2022 census F1015 and F1004A, tier 1; sligococo.ie, tier 1; Sligo Airport website, tier 1; NTA GTFS sample 2026-09-22, tier 1; OPW heritageireland.ie, tier 1; Fáilte Ireland on Yeats's grave, tier 1 search summary; distances computed）。 核实 2026-09-16 当批（content-verifier 独立检索，本条 ok；诺克机场—斯莱戈巴士时长两源不一，改为「约 1 小时」）。
    identity:
      "Sligo is the county town of County Sligo in the north-west of Ireland, on the Garavogue River between Lough Gill to the east and the bay to the west, with an urban population of about 20,600 in the 2022 census (Central Statistics Office). Outside town, the Neolithic tombs of Carrowmore date back nearly 6,000 years and are part of the Sligo passage tomb landscape on Ireland's World Heritage tentative list; the poet W. B. Yeats spent much of his childhood here, and his grave is at Drumcliffe north of town.",
    howItWorks:
      "Sligo has no separate town government either: local affairs are handled by Sligo County Council, with 18 councillors and its headquarters by the river in town; the councillors of the Borough District of Sligo choose a 'Mayor of Sligo' each year, a yearly title, while administration is run by the council's chief executive. The centre straddles the river, the Dominican friary ruins have stood in the east of town since it was founded in the mid-13th century, and the railway station is on the west side of the centre; local Eircodes use the routing key F91. Daily life is shaped by the railway, the lake and the sea: just over three hours by train to Dublin, and about half an hour by bus to the seaside at Strandhill. Newcomers often assume that an airport near town means they can fly in — Sligo Airport is about 8 km away in a straight line but has no scheduled flights, handling only charters and search-and-rescue helicopters, and the nearest scheduled flights are at Knock, about 46 km away; they also often take Yeats for a Sligo native, when he was born in Dublin and his grave is at Drumcliffe, about 6 km north in a straight line, not in town.",
    layout:
      "The town centre lies on both banks of the Garavogue River, with Sligo Abbey in the east of town and the county council offices and the Yeats Memorial Building by the river; the railway station is on the west side of the centre. About 4 km south-west in a straight line are the Carrowmore tombs, with Knocknarea and the seaside village of Strandhill further west; Lough Gill is to the east, and Drumcliffe and Benbulbin are to the north.",
    gettingAround:
      "The nearest airport with scheduled flights is Ireland West Airport Knock (NOC), about 46 km away in a straight line, with the 64 bus to Sligo taking about an hour. Direct trains from Dublin Connolly take about 3 hours 5 to 3 hours 20 minutes, and the 23 coach runs from Dublin Airport. The S2 bus goes to Strandhill and northbound buses to Drumcliffe; Carrowmore and Knocknarea are easiest by car or taxi.",
    culture:
      "English is spoken everywhere, and Irish is also an official language. Yeats and his poetry are an important part of local culture, and the town has a Yeats Memorial Building. Sligo Abbey and the Carrowmore tombs are managed by the state heritage service and open seasonally. If a service charge is already on the bill there is no need to add more; otherwise tipping is discretionary, not an obligation.",
    seeAndDo:
      "The cloister and carvings of Sligo Abbey; the Carrowmore Neolithic tombs and their new visitor centre; the climb up Knocknarea to the cairn on its summit; Yeats's grave at Drumcliffe beneath Benbulbin; Strandhill beach; and Lough Gill.",
    whenAndTips:
      "May–September has long days and the heritage sites open; it is wet and windy all year, so bring a waterproof, windproof jacket for hill walks. Opening periods for the heritage sites and bus timetables are as announced by the site managers and operators.",
  },
};
