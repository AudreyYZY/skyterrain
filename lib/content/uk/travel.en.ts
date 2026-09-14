import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "uk-overview": {
    // identity sources: ONS《Provisional population estimate for the UK: mid-2025》：2025-06-30 临时估计 69,487,000 人。https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/bulletins/provisionalpopulationestimatefortheuk/mid2025
    //   核实日 2026-09-07，来源级别 1
    identity:
      "The United Kingdom — in full, the United Kingdom of Great Britain and Northern Ireland — is made up of England, Scotland, Wales and Northern Ireland, with a provisional mid-2025 population estimate of about 69.5 million (Office for National Statistics). The main body is the island of Great Britain, plus Northern Ireland in the north-east of the island of Ireland. The land is broadly high in the north-west and low in the south-east: the mountains and uplands are in Scotland, Wales, northern England and the south-west, all long-eroded old hills; the south-east is low, gentle hills and plains. It is surrounded by sea, and nowhere is more than about 120 km from the coast.",
    layout:
      "It helps to divide the UK into: Southern England (London, the southern hills, the south-west peninsula); the Midlands (the industrial cities around Birmingham); Northern England (Manchester, Liverpool, York, and the Lake District and the Pennines); Scotland (Edinburgh and Glasgow in the Central Belt, the Highlands to the north); Wales (Cardiff in the south, mountains in the mid and north); and Northern Ireland (Belfast). The country is small, and trains are often more convenient than flights between cities — flying is mainly for northern Scotland, Northern Ireland and some islands.",
    gettingAround:
      "Intercity travel is mostly by train — a dense network, but fares vary a lot and are cheaper booked early; long-distance coaches are cheaper and slower. Domestic flights mainly link London with Scotland, Northern Ireland and the islands. Big cities have a metro or tram (the London Underground is the most developed), and public transport is generally usable. Drive on the left. Restaurant tipping is usually 10–12.5% (many bills already include a service charge — check before adding more). Tap water is drinkable. Power is 230V with a three-pin British plug (bring an adapter).",
    culture:
      "English is universal; Welsh is co-official in Wales (bilingual signs), Scottish Gaelic is used in parts of Scotland, and Irish has some use in Northern Ireland. The four parts each have a strong local identity and different symbols, teams and holidays. Queuing is a deeply held social norm. The weather is changeable and generally cool and wet — carrying an umbrella or a waterproof is common sense.",
    seeAndDo:
      "Cities: the museums of London (the British Museum, Tate, National Gallery are mostly free), the old town and castle of Edinburgh, the walls of York, the Roman baths of Bath. Nature: the Scottish Highlands and the Isle of Skye, the English Lake District, Snowdonia in Wales, the white cliffs and the Jurassic Coast in the south, the Giant's Causeway in Northern Ireland. The network of public footpaths across the countryside is extensive.",
    whenAndTips:
      "May–September is the most comfortable, with long daylight (it gets dark very late in June in Scotland); winter is not extremely cold but is damp and dark, with short days. It can rain in any season — dress in layers and carry a waterproof. Most foreign visitors travel visa-free for short tourism or need an Electronic Travel Authorisation (ETA) — check the latest UK government guidance. Train tickets booked early save a lot; public transport in the Highlands and the islands is sparse, so driving is easier (on the left, narrow roads).",
  },

  london: {
    // 其余 sources: 「伦敦金融城（一平方英里）+ 周围 32 个自治市、没有单一市政厅式中心」这一层核实无误。
    //   五座机场 LHR／LGW／STN／LTN／LCY 代码现行有效、无更名。2026-09-10 核。
    // identity sources: 人口：大伦敦（E12000007，32 个自治市 + 伦敦金融城）mid-2025 = 9,122,909 —— 英国国家统计局 MYE2 数据集（mye25tablesew.xlsx，1 级，2026-07-29 发布，2026-09-12 下载核对）。口径是 region 级年中估计，不是 built-up area、也不是通勤区／FUA（本库在伦敦这一条上栽过混用三档的错）。下一期 mid-2026 预计 2027 年 7 月发布。
    identity:
      "London is the capital of the United Kingdom and of England, with a Greater London population of about 9.12 million at mid-2025 (ONS), and one of the world's centres of finance, culture and transport. The city straddles the River Thames and has grown from the Roman 'Londinium' over two thousand years as the centre of this region. It is made up of the City of London (the square-mile old core) and 32 surrounding boroughs, with no single town-hall-style centre.",
    // howItWorks sources: Wikipedia: Greater London (2024 pop, 1,572 km²); London boroughs (responsibilities, Inner/Outer); Greater London Authority. See docs/city-depth-redesign-2026-09-06.md §4
    howItWorks:
      "The London people speak of is officially Greater London, made up of 32 London boroughs and the City of London. The Greater London Authority, created in 2000, has an elected Mayor and Assembly in charge of transport, policing, fire and strategic planning, with Transport for London running the network; schools, housing, social services, waste, local roads, planning applications and council tax are the business of the borough councils. The City of London covers barely 2.9 km², yet has its own corporation and its own Lord Mayor. London is polycentric: the City and Westminster are the traditional centres, and Canary Wharf is a financial district built since the 1980s. Londoners give a location by postcode district — SW1, E14 — rather than by borough, and Transport for London's fare zones 1 to 9 shape the cost of commuting and the choice of where to live. Newcomers most often go wrong by taking the City of London for 'the city of London', or by assuming the Mayor of London also runs local services such as waste and schools.",
    layout:
      "London is built in the broad valley of the Thames and is fairly flat. The river runs broadly west to east, dividing the city into north and south; the historic core (the City, Westminster) is on the north bank, and the river winds east through the city to the North Sea. The central royal parks form a green belt. The Underground map is the key to finding your way, and many place names correspond to a station.",
    gettingAround:
      "Five airports: Heathrow (LHR, the largest, on the Underground and the Elizabeth line), Gatwick (LGW, by train), Stansted (STN), Luton (LTN) and London City (LCY). The Tube, buses, Overground and Elizabeth line all take a contactless bank card or phone directly (with a daily cap). Walking plus the Tube is the most efficient way around the centre. The climate is temperate maritime: mild all year, with occasional summer heatwaves, and winters that rarely see snow but are grey, cold and wet, with changeable weather within a day.",
    culture:
      "English is universal, and this is one of the most linguistically diverse cities in the world, with very different neighbourhoods. Stand on the right on escalators and leave the left for people walking; queuing is strict. Restaurant tipping is about 12.5% (often already included). The British Museum, the National Gallery, Tate Modern and other national museums are mostly free (special exhibitions charge).",
    seeAndDo:
      "Westminster (the Houses of Parliament, Big Ben, Westminster Abbey) and the Changing of the Guard at Buckingham Palace; the London Eye, Tower Bridge and the Tower of London; the British Museum, the Natural History Museum, the V&A, the National Gallery, Tate Modern; a West End musical; the South Bank walk, Borough Market, Greenwich (the Prime Meridian); Hyde Park and Regent's Park.",
    whenAndTips:
      "May–September is the most comfortable; Christmas to New Year has lovely lights but is crowded and expensive. Carry an umbrella any time. Book popular attractions and theatre performances online in advance. The Tube is very crowded in the peaks (8–9 am, 5–6 pm). Tap one contactless bank card for all public transport — it has a daily cap and beats paper tickets.",
  },

  bristol: {
    // identity sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   City of Bristol（单一制议会辖区，E06000023）mid-2025 = 495,260。原文既没有年份也没有口径。
    identity:
      "Bristol is in south-west England on the lower River Avon, with a mid-2025 population of about 495,000 (Office for National Statistics), historically an important port and shipbuilding city, now known for creative industries, street art (the home of the artist Banksy) and independent culture. Several cities in the USA are named after it. Bristol is right by the Welsh border and is a gateway to south Wales and the south-west peninsula.",
    // howItWorks sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   City of Bristol mid-2025 = 495,260。
    howItWorks:
      "Bristol is the largest city of south-west England, both a city and a county since 1373 and today a unitary authority of about 110 km² with about 495,000 people at mid-2025; the council runs education, housing and waste, the West of England Combined Authority with South Gloucestershire and Bath and North East Somerset has had an elected mayor for transport and planning since 2017, and police and hospitals belong to national bodies. The centre wraps around the old docks of the Floating Harbour, the Clifton Suspension Bridge spans the Avon Gorge, Temple Meads is the station, the airport lies 13 km south, and there is no rail transit. Newcomers most often go wrong by taking the council area for the whole city, when the northern half of the built-up area lies in South Gloucestershire and the boundary fits like a coat a size too small.",
    layout:
      "Bristol is built on the gorge the Avon has cut and the surrounding hills, so the ground is steep. The old harbour (Harbourside) has been redeveloped into a museum and dining area; the Georgian terraces of Clifton stand on the edge of the gorge, and the famous Clifton Suspension Bridge spans the Avon Gorge. The centre is compact but hilly.",
    gettingAround:
      "Bristol Airport (BRS) is about 13 km south of the city, with an airport bus. The city relies on buses; the train to London is about 1.5 hours. The centre is walkable, but hilly and hard work to cycle. The climate is temperate maritime, slightly warmer and wetter than eastern England, and wet all year.",
    culture:
      "English is universal, with a distinctive local accent. The city's culture leans independent, green and artistic — independent cafés, second-hand shops, live music. Restaurant tipping is about 10–12.5%. The city's history is deeply tied to Atlantic trade (including the slave trade), and in recent years there has been open reflection and related exhibits (a sombre subject).",
    seeAndDo:
      "The Clifton Suspension Bridge and gorge viewpoints; the SS Great Britain (a 19th-century iron-hulled ocean liner); the M Shed city museum; the old harbour and Wapping Wharf; street-art walks (Stokes Croft, Bedminster); the Balloon Fiesta in early August. An hour north is Bath and its Roman baths.",
    whenAndTips:
      "May–September is best; the Balloon Fiesta in early August is crowded and lodging is expensive, so book early. It rains all year — carry an umbrella. Getting to town from the airport is by bus — allow time. The city is hilly — wear comfortable shoes.",
  },

  birmingham: {
    // identity sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   West Midlands Met County（E11000005，与 WMCA 七个自治市边界一致）mid-2025 = 3,027,190。
    identity:
      "Birmingham is the second-largest city in England, on a low ridge in the Midlands, with about 3.03 million across the West Midlands Combined Authority (mid-2025, Office for National Statistics). It grew fast during the Industrial Revolution on metalworking and manufacturing, and once had more miles of canal than Venice. Today it is the commercial, exhibition and transport centre of the Midlands. Birmingham, Alabama, in the USA is named after this 'city of iron'.",
    // howItWorks sources: 2018 年划界后为 101 席。随机抽样审计（seed=2）抽中。2026-09-13 核。
    howItWorks:
      "Birmingham is a metropolitan borough with city status, and Birmingham City Council, with 101 councillors, is among the largest local authorities in Europe, running education, housing, social services, waste and local roads; the city covers about 268 km² with about 1.18 million people at mid-2025, the most populous local authority area in England. Since 2016 it has formed the West Midlands Combined Authority with Wolverhampton, Coventry, Solihull and three other boroughs, about 3.03 million people (mid-2025), under a directly elected regional mayor since 2017 responsible for transport, planning and economic development; police and hospitals belong to national bodies. The centre revolves around the Bullring and New Street station, the Jewellery Quarter lies to the north-west, Digbeth is an old industrial quarter turned creative district, and the canal network is longer than Venice's; the Middle Ring Road and Outer Ring Road are the two boundaries in local minds. There is no underground; the Cross-City rail line and the West Midlands Metro tram serve the city, and the HS2 terminus at Curzon Street is under construction. Addresses give number, street, district and postcode, beginning with B. About half of residents are under 35, and the population is among the most diverse of any British city. Newcomers most often go wrong by picturing Birmingham as a city of industrial decline, when it is among the youngest big cities in Britain.",
    layout:
      "Birmingham is not on a large river but on the watershed between several small streams, connected by a dense canal network. The centre is a rebuilt commercial and cultural district (the Bullring shopping centre, the library, Symphony Hall), and the canal area (Brindleyplace, Gas Street Basin) is a dining and bar belt. The city sprawls in all directions and is the hub of the UK motorway network.",
    gettingAround:
      "Birmingham Airport (BHX) is south-east of the city, next to a railway station (with a monorail link). The city has trams, buses and local trains, taken with a contactless card. The train to London is about 1 hour 20 minutes (faster once new lines open). The centre is compact and walkable, with flat towpaths along the canals. The climate is temperate maritime, and this is one of the cities furthest from the sea in the UK, with a slightly larger seasonal range than the coast.",
    culture:
      "English is universal, with a very recognisable local accent ('Brummie'). The city is very ethnically diverse, with a large South Asian community, and is regarded as the birthplace of the British 'Balti' curry. Restaurant tipping is about 10–12.5%. The city identifies with its canals, its Jewellery Quarter of craftspeople, and its music (one of the birthplaces of heavy metal).",
    seeAndDo:
      "A walk around the canal area (Gas Street Basin, Brindleyplace); the Birmingham Museum and Art Gallery (with a large Pre-Raphaelite collection); the Jewellery Quarter and its museum; the Barber Institute; the Bullring and markets; Cadbury World (a chocolate factory, in suburban Bournville).",
    whenAndTips:
      "May–September is the most comfortable. The city is business- and exhibition-focused, and hotels are tight during major trade shows. The canal area is lively at night but mind your belongings. The train is the easiest way to and from London and Manchester.",
  },

  manchester: {
    // howItWorks sources（2026-09-15 核实，fix）: https://www.manchesterairport.co.uk/about-us/manchester-airport-and-mag/ (机场运营方官网，级别2；交叉核对 https://en.wikipedia.org/wiki/Manchester_Airports_Group ；曼彻斯特市议会与另九个大曼彻斯特自治市合计持股约64.5%，IFM Investors（澳大利亚基金）持股约35.5%，2026-09-15 查证)
    // identity sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   Greater Manchester Met County（E11000001）mid-2025 = 3,017,590。
    identity:
      "Manchester is in north-west England, on the plain at the western foot of the Pennines, with about 3.02 million across the Greater Manchester metropolitan county (mid-2025, Office for National Statistics) — the emblematic city of the Industrial Revolution, the world's first industrial city, and the 19th-century centre of cotton manufacturing ('Cottonopolis'). Today it is the economic, media, music and sporting centre of northern England. There are several cities of the same name in the USA, such as Manchester, New Hampshire.",
    // howItWorks sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   Manchester（E08000003）mid-2025 = 588,256；Greater Manchester = 3,017,590。**曼彻斯特市本身略降**（2024 年约 58.9 万 → 2025 年 58.8 万）。
    howItWorks:
      "The Manchester people speak of is, administratively, only one of the ten metropolitan boroughs of Greater Manchester: the City of Manchester covers about 116 km² with about 588,000 people at mid-2025, while Greater Manchester holds about 3.02 million, and Salford, Trafford and Stockport are boroughs with councils of their own. Since 2017 the Greater Manchester Combined Authority has had a directly elected mayor responsible for transport and police, and the Bee Network brings the Metrolink trams and the re-franchised buses under one fare system. The River Irwell separates Manchester from Salford, MediaCityUK and Salford Quays lie across it, and Old Trafford stands in the borough of Trafford — of those three well-known landmarks, two are not in the City of Manchester. The centre revolves around Piccadilly station, Deansgate, the Northern Quarter and Spinningfields, Oxford Road is the university corridor of some 100,000 students, and the M60 ring is the boundary of the conurbation in local minds. Manchester Airport is jointly owned by the ten boroughs, which together hold about 64.5%, and the Australian investor IFM Investors, which holds the remaining 35.5%. Addresses give number, street, district and postcode, beginning with M. Newcomers most often go wrong by taking the City of Manchester for the whole, when it is the core of a conurbation of ten boroughs.",
    layout:
      "Manchester is built on the plain where several small rivers meet, with the Cheshire plain to the west and, to the east, ground that soon rises into the hills and moors of the Pennines. The centre is made of former warehouses and factories converted into districts; Salford Quays (MediaCityUK) to the west is a new media and culture area. The city extends outward along a tram network.",
    gettingAround:
      "Manchester Airport (MAN) is south of the city, the largest airport in northern England, with a rail station straight to the centre and other cities. The city has the Metrolink tram plus buses, taken with a contactless card or app. The train to London is about 2 hours, to Edinburgh about 3 hours. The centre is walkable. The climate is temperate maritime and famously rainy (the Pennines block moist air from the west), mild all year.",
    culture:
      "English is universal, with a distinctive local accent ('Manc'). The city identifies strongly with football (two major clubs) and pop music (several hugely influential bands came from here). It is ethnically diverse, with a well-known Chinatown and 'curry mile' (Rusholme). Restaurant tipping is about 10–12.5%.",
    seeAndDo:
      "The Science and Industry Museum (on the site of the world's oldest passenger railway station); the Manchester Museum and Art Gallery; the independent shops and murals of the Northern Quarter; the two football clubs' stadiums and museums; Salford Quays and the Imperial War Museum North; Castlefield (the old industrial canal area). East is the Peak District National Park.",
    whenAndTips:
      "May–September is the most comfortable, but it can rain at any time — carry a waterproof. On match days the centre and transport are crowded and hotels expensive. The airport rail station connects directly to major cities, making transfers easy. An hour east you can walk in the Peak District.",
  },

  liverpool: {
    // identity sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   Liverpool（E08000012）mid-2025 = 507,915。
    identity:
      "Liverpool is in north-west England on the north bank of the Mersey estuary, with a mid-2025 population of about 508,000 (Office for National Statistics), historically a great Atlantic shipping port (migrants, goods, and also the slave trade), with docks running for miles along the river. Today it is known for music (a world-famous band came from here), two football clubs, and a waterfront that was made a World Heritage Site and later delisted.",
    // howItWorks sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   Liverpool mid-2025 = 507,915。利物浦城市区域六个自治市合计约 161.1 万（ONS 各自治市 mid-2025 数字**加总**得出，加总本身非 ONS 原文，故正文不写这个合计数）。
    howItWorks:
      "Liverpool is a metropolitan borough of Merseyside with about 508,000 people at mid-2025; it is the core of the Liverpool City Region, whose combined authority of six boroughs including Wirral, Sefton and Knowsley has had an elected regional mayor for transport and the economy since 2017, while the city council runs education, housing and waste and police and hospitals belong to national bodies. The centre lies on the east bank of the Mersey, with the Three Graces at the Pier Head and the Albert Dock as its face, the Georgian quarter on the slope, Anfield and Goodison to the north, Merseyrail knitting both banks together, ferries to Wirral opposite and the airport south of town. Newcomers most often go wrong by counting Birkenhead across the river as part of Liverpool, when Wirral is another borough and crossing the water changes the council.",
    layout:
      "Liverpool spreads along a gentle slope on the east bank of the Mersey, which is wide, with a ferry across to Birkenhead. The 'Three Graces' buildings and the Albert Dock are on the waterfront and are the city's face; the commercial centre and the two cathedrals (one modern, one Gothic Revival) are up the slope. Tunnels run under the Mersey to the far side.",
    gettingAround:
      "Liverpool John Lennon Airport (LPL) is south of the city on the Mersey, with a bus into town. The city has local trains (Merseyrail, including a line under the river) and buses, taken with a contactless card. The train to Manchester is about 50 minutes, to London about 2 hours 10 minutes. The centre and dock area are walkable. The climate is temperate maritime, windy and wet, with especially strong wind at the estuary.",
    culture:
      "English is universal, with a very recognisable local accent ('Scouse') — locals call themselves Scousers. The city identifies strongly with music and football, and its humour is well known. It is ethnically diverse and has one of the oldest Chinese communities in the UK. Restaurant tipping is about 10–12.5%.",
    seeAndDo:
      "The Albert Dock (Tate Liverpool, The Beatles Story, the Merseyside Maritime Museum and the International Slavery Museum — a sombre subject); the Three Graces and the Royal Liver Building; the two cathedrals; Beatles sites (the Cavern Club, childhood homes); the Mersey ferry for the skyline; the two football stadiums.",
    whenAndTips:
      "May–September is the most comfortable. Lodging is tight on match days or during big concerts. The waterfront is windy — bring a windproof jacket. There are many paid Beatles and football tours — choose by interest.",
  },

  york: {
    // identity sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   City of York（E06000014）mid-2025 = 209,118。
    identity:
      "York is in northern England, where the River Ouse meets the Foss, with a mid-2025 population of about 209,000 (Office for National Statistics) — one of the best-preserved medieval cities in England, with nearly complete medieval walls, narrow old streets and a huge Gothic minster. It was founded by the Romans ('Eboracum') and called 'Jorvik' in the Viking age. After the English took the North American colony from the Dutch in 1664, they renamed New Amsterdam 'New York' — today's New York — for the then Duke of York.",
    // howItWorks sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   同上。
    howItWorks:
      "York is the cathedral city of North Yorkshire, its City of York Council a unitary authority over about 272 km² with about 209,000 people at mid-2025, and since 2024 the combined authority with North Yorkshire has an elected mayor; the council runs education, housing and waste, and police and hospitals belong to national bodies. The old town lies within the walls where the Ouse and the Foss meet, with the Minster, the Shambles and Clifford's Tower inside, the station and the National Railway Museum just outside the walls to the west and the university in the south-eastern suburbs; flooding from the Ouse is a thing the city goes through again and again. Newcomers most often go wrong by taking the walled town for the City of York, when the council area takes in dozens of villages outside the walls and most residents live beyond them.",
    layout:
      "York's old town is enclosed by the walls on both banks of the Ouse, and you can walk the full circuit (about 3.4 km). York Minster is the high point and landmark of the old town; 'The Shambles' is a famous example of its narrow medieval lanes. The low ground by the river has historically flooded. Outside the walls are the districts that grew with the Victorian railway.",
    gettingAround:
      "York has no airport of its own; the nearest is Leeds Bradford (about 45 minutes by road), or about 1.5 hours by direct train from Manchester Airport. York station is a major stop on the East Coast Main Line — about 2 hours to London, about 2.5 hours to Edinburgh. The old town is entirely walkable (small, and largely pedestrianised). The climate is temperate maritime, drier than the west.",
    culture:
      "English is universal, with a Yorkshire accent. The city is heavily geared to heritage tourism, with railway, Viking and chocolate museums. Yorkshire people are proud of their identity. Restaurant tipping is about 10–12.5%. There are many 'ghost walk' tours in the old town at night.",
    seeAndDo:
      "Walking the full circuit of the medieval walls; York Minster (you can climb the tower); the Shambles and the old town's narrow lanes; the Jorvik Viking Centre; the National Railway Museum (free, with many iconic steam locomotives); the Yorkshire Museum and Gardens; a boat trip on the Ouse.",
    whenAndTips:
      "May–September and the Christmas market period are the busiest; in peak season the old town is very crowded and lodging is expensive. The old town is small and walkable — if you have luggage, stay near the station. The low ground by the river can flood and close roads in the wet season — watch the weather.",
  },

  edinburgh: {
    // 零改动留痕（2026-09-10）：EDI 机场代码现行有效。
    //   ✅ **零争议红线判定（判据：涉及仍在持续的对立状态、或带评价性表述 → 删；定位性简短事实 → 留）**：
    //   全文**未出现**苏格兰独立公投或相关政治议题；老城与新城的世界遗产、城堡、8 月艺术节与军乐节、启蒙运动史
    //   都是定位性事实、无评价 —— **留，不改**。
    // identity sources: 人口：City of Edinburgh 议会区 **531,370（2025 年年中，NRS，1 级，2026-07-14 发布）**。原文「约 55 万」偏高且无年份，而 howItWorks 早已写对（C6-h）。
    //   📌 苏格兰的普查与统计**独立于英格兰与威尔士**：苏格兰普查 2022 年（因疫情比英威晚一年），下一次 2031 年。
    identity:
      "Edinburgh is the capital of Scotland, with a City of Edinburgh council-area population of about 531,000 at mid-2025 (National Records of Scotland), built on several plugs of volcanic rock and glacier-carved terrain, with the Old Town and New Town together a World Heritage Site. The city is known for its castle, the August festivals (the International Festival and the Military Tattoo), and its Enlightenment history. It is not the UK capital, but it has its own parliament.",
    // howItWorks sources: 苏格兰国家档案局（NRS）《Mid-2025 population estimates》官方时间序列表（Table 1），时点 2025-06-30，2026-07-14 发布。子代理下载原表逐行解析，**级别 1**。
    //   https://www.nrscotland.gov.uk/publications/mid-2025-population-estimates/
    //   发布节奏：**周期不固定**（mid-2025 滞后约 13 个月于 2026-07 发布，历史上也有 4 月发布的年份）。下一期按「参考日 + 12–14 个月」估算，并到 NRS publications 页看该年是否已标 (outdated)。
    //   聚落/城镇（settlement / locality）口径 NRS 已停止年度滚动估计，最新只能到 2022 年人口普查，下一次要等 2031 年普查。
    //   City of Edinburgh council area mid-2025 = 531,370（mid-2024 为 532,070，**略降**）。
    howItWorks:
      "Edinburgh is the capital of Scotland, seat of the Scottish Parliament and Government, which run health, education and police; the City of Edinburgh Council is a unitary authority over about 263 km² with about 531,000 people at mid-2025, running education, housing and waste. The city is in two parts: the Old Town below the castle rock is medieval lanes, with the Royal Mile running from the castle to Holyrood, and the New Town across Princes Street is the eighteenth-century grid, the two inscribed together as World Heritage in 1995; Leith is the port district merged in 1920, Arthur's Seat lies to the east, trams run to the airport, and the festival in August doubles the population. Newcomers most often go wrong by taking the Old and New Towns for the whole of Edinburgh, when the city runs a dozen kilometres south and west and the port at Leith is another life.",
    layout:
      "Edinburgh's terrain is distinctive: the castle sits on a volcanic plug, and from the plug a slope of glacial debris trails east, along which the medieval Old Town is laid out on the 'Royal Mile', ending at the Palace of Holyroodhouse and an extinct volcano called Arthur's Seat. North, across a filled-in valley, is the planned Georgian New Town of the 18th century — a grid of wide streets.",
    gettingAround:
      "Edinburgh Airport (EDI) is west of the city, with a tram and airport buses about 30 minutes to the centre. The city has buses and a tram, taken with a contactless card. The Old Town and New Town are walkable, but hilly with many steps. The train to Glasgow is about 50 minutes, to London about 4.5 hours. The climate is temperate maritime, windy and changeable, with cool summers and winters that are not extreme but damp.",
    culture:
      "English is universal, with a Scottish accent; Scottish Gaelic appears on signs. In August the whole city is taken over by the festivals (the Fringe is the largest arts festival in the world) — crowded, with lodging prices several times higher. Restaurant tipping is about 10–12.5%. It is windy — don't bring a big umbrella.",
    seeAndDo:
      "Edinburgh Castle and the Royal Mile; the Palace of Holyroodhouse, and a climb up Arthur's Seat for the city view; the National Museum of Scotland (free) and the National Gallery; the Georgian New Town and Princes Street Gardens; Calton Hill for the skyline; the August festivals and the Tattoo. Day trips into the Highlands are possible.",
    whenAndTips:
      "May–September is best. During the August festivals the city is thrilling but crowded and expensive — either come specifically for it or avoid it. It is windy and changeable all year — dress in layers. The Old Town has many steps and cobbles — wear grippy shoes. Highland day trips involve long drives — choose a well-reviewed tour.",
  },

  glasgow: {
    // identity sources: 苏格兰国家档案局（NRS）《Mid-2025 population estimates》官方时间序列表（Table 1），时点 2025-06-30，2026-07-14 发布。子代理下载原表逐行解析，**级别 1**。
    //   https://www.nrscotland.gov.uk/publications/mid-2025-population-estimates/
    //   发布节奏：**周期不固定**（mid-2025 滞后约 13 个月于 2026-07 发布，历史上也有 4 月发布的年份）。下一期按「参考日 + 12–14 个月」估算，并到 NRS publications 页看该年是否已标 (outdated)。
    //   聚落/城镇（settlement / locality）口径 NRS 已停止年度滚动估计，最新只能到 2022 年人口普查，下一次要等 2031 年普查。
    //   大格拉斯哥城区 Census 2022 ≈ 1,023,879（这一档只能到普查年，**级别 2**，未取到 NRS 一手表格）。原文「都会区约 120 万」与城区、与城市区域都对不上，已按城区口径改写。
    identity:
      "Glasgow is the largest city in Scotland, on the River Clyde in the Central Belt, with a Greater Glasgow urban area of about 1.02 million (2022 census). It was once the shipbuilding and heavy-industry centre of the British Empire ('the workshop of the world'), and is now known for its Victorian architecture, the Art Nouveau design of Charles Rennie Mackintosh, its live-music scene and its museums; the UN climate conference was held here in 2021.",
    // howItWorks sources: 苏格兰国家档案局（NRS）《Mid-2025 population estimates》官方时间序列表（Table 1），时点 2025-06-30，2026-07-14 发布。子代理下载原表逐行解析，**级别 1**。
    //   https://www.nrscotland.gov.uk/publications/mid-2025-population-estimates/
    //   发布节奏：**周期不固定**（mid-2025 滞后约 13 个月于 2026-07 发布，历史上也有 4 月发布的年份）。下一期按「参考日 + 12–14 个月」估算，并到 NRS publications 页看该年是否已标 (outdated)。
    //   聚落/城镇（settlement / locality）口径 NRS 已停止年度滚动估计，最新只能到 2022 年人口普查，下一次要等 2031 年普查。
    //   Glasgow City council area mid-2025 = 654,330；八个议会合计 = 1,898,140；苏格兰全国 mid-2025 = 5,545,500，占 **34.2%**。**「接近三分之一」用最新数复核后仍成立**（甚至略超）。
    howItWorks:
      "Glasgow is Scotland's largest city and, since 1996, a unitary council area, with Glasgow City Council elected from 23 wards running education, housing, social services, waste and local roads; it covers about 175 km² with about 654,000 people at mid-2025, the Greater Glasgow urban area about 1.02 million at the 2022 census, and the Glasgow City Region of eight councils about 1.90 million at mid-2025 — 34% of Scotland, still close to a third. Health, policing through Police Scotland and university policy belong to the Scottish Government in Edinburgh. The Clyde runs through the city: the centre on the north bank is a Victorian grid, with the Merchant City, Buchanan Street and the City Chambers on George Square; the West End is the wealthy quarter of the university and Kelvingrove, the East End and the Southside are the traditional working-class quarters, and the sandstone tenement is the building block of the whole city. The circular Subway opened in 1896 is among the oldest in the world, and the suburban rail network is second in Britain only to London's. Clydeside shipbuilding is the city's past. Addresses give number, street and postcode, beginning with G. The Glaswegian accent and Scots vocabulary are daily speech. Newcomers most often go wrong by taking Glasgow for Scotland's capital, when that is Edinburgh, 75 km away.",
    layout:
      "Glasgow straddles the Clyde, with the centre on the north bank in a regular grid (influenced by American planning), full of sandstone Victorian buildings. The West End is the university, museum and park district; the East End has the old town and the cathedral. The former shipyards along the river have been redeveloped into exhibition and cultural venues.",
    gettingAround:
      "Glasgow Airport (GLA) is about 13 km west of the city, with an airport bus about 25 minutes to the centre; Prestwick (PIK) is a budget airport further out. The city has one of the oldest metros in the world (a single loop), local trains and buses, taken with a contactless card. The train to Edinburgh is about 50 minutes. The centre is walkable. The climate is temperate maritime, and this is one of the rainiest big cities in the UK.",
    culture:
      "English is universal, with a strong, fast Glasgow accent; locals are known for being friendly and talkative. The city identifies with football (two rival major clubs), live music and civic culture. Most municipal museums are free. Restaurant tipping is about 10–12.5%.",
    seeAndDo:
      "Kelvingrove Art Gallery and Museum (free, a city landmark); the Riverside Museum of transport (ships, trains, cars) and the tall ship Glenlee moored outside; Mackintosh buildings (the Art School, his house, the Willow Tea Rooms); the cathedral and the adjacent Necropolis; Byres Road and the Botanic Gardens in the West End; the live-music venues (King Tut's and others).",
    whenAndTips:
      "May–September is the most comfortable, but Glasgow is rainy — carry a waterproof. On match days the centre is lively but avoid crowd flashpoints. The metro is small and handy, covering the centre and the West End. An hour north are Loch Lomond and the southern edge of the Highlands.",
  },

  aberdeen: {
    // identity sources: 苏格兰国家档案局（NRS）《Mid-2025 population estimates》官方时间序列表（Table 1），时点 2025-06-30，2026-07-14 发布。子代理下载原表逐行解析，**级别 1**。
    //   https://www.nrscotland.gov.uk/publications/mid-2025-population-estimates/
    //   发布节奏：**周期不固定**（mid-2025 滞后约 13 个月于 2026-07 发布，历史上也有 4 月发布的年份）。下一期按「参考日 + 12–14 个月」估算，并到 NRS publications 页看该年是否已标 (outdated)。
    //   聚落/城镇（settlement / locality）口径 NRS 已停止年度滚动估计，最新只能到 2022 年人口普查，下一次要等 2031 年普查。
    //   Aberdeen City council area mid-2025 = 230,180。原文的「都会区」不是 NRS 口径，改为议会辖区。
    identity:
      "Aberdeen is a port city in north-east Scotland, where the Rivers Dee and Don reach the sea, with a council area population of about 230,000 (mid-2025). Because so many local buildings use the local grey granite, it is called the 'Granite City', and on a sunny day the mica sparkles. After the North Sea oil fields were developed in the 1970s, it became Europe's 'oil capital' and a supply and helicopter base for offshore work.",
    // howItWorks sources: 苏格兰国家档案局（NRS）《Mid-2025 population estimates》官方时间序列表（Table 1），时点 2025-06-30，2026-07-14 发布。子代理下载原表逐行解析，**级别 1**。
    //   https://www.nrscotland.gov.uk/publications/mid-2025-population-estimates/
    //   发布节奏：**周期不固定**（mid-2025 滞后约 13 个月于 2026-07 发布，历史上也有 4 月发布的年份）。下一期按「参考日 + 12–14 个月」估算，并到 NRS publications 页看该年是否已标 (outdated)。
    //   聚落/城镇（settlement / locality）口径 NRS 已停止年度滚动估计，最新只能到 2022 年人口普查，下一次要等 2031 年普查。
    //   同上。**「苏格兰第三大城市」用最新数复核后仍成立**：按议会辖区 mid-2025 阿伯丁 230,180 > 邓迪 148,390；按城区口径（NRS mid-2020 settlement）阿伯丁 ≈220,690 > 邓迪 ≈158,820 —— 两个口径下都是第三。
    howItWorks:
      "Aberdeen is Scotland's third city, its council a unitary authority over about 186 km² with about 230,000 people at mid-2025, a separate government from the Aberdeenshire council around it; the council runs education, housing and waste, and health and police belong to the Scottish Government. The city lies between the mouths of the Dee and the Don, Union Street is the main street of the centre, grey granite gives it the name 'Granite City', and the university founded in 1495 stands in Old Aberdeen to the north; since oil was found in the North Sea in the 1970s the harbour and the heliport have been the base of Europe's offshore industry, and the airport lies at Dyce. Newcomers most often go wrong by taking Aberdeen for a small fishing port, when it is one of the onshore headquarters of Europe's oil industry.",
    layout:
      "Aberdeen is built on a granite terrace between two rivers, and the main street, Union Street, is a long, straight run of granite. The city has a long beach right on its edge, and a busy harbour dominated by offshore-supply vessels and fishing boats. The Old Town (Old Aberdeen) is to the north by the Don, keeping its medieval university and cathedral.",
    gettingAround:
      "Aberdeen Airport (ABZ) is to the north-west, and is also one of the busiest civilian heliports in the world (to and from the offshore platforms), with a bus into town. The city relies on buses. The train along the East Coast line is about 2.5 hours to Edinburgh, about 2 hours 15 minutes to Inverness. The centre is walkable. The climate is temperate maritime, drier, colder and windier than the west coast, with sea fog in winter (locally, 'haar').",
    culture:
      "English is universal, and north-east Scotland has its own dialect (Doric). The city is closely tied to oil, fishing and farming, with a practical pace. Restaurant tipping is about 10–12.5%. The granite architecture looks grey and cold on an overcast day and sparkles on a sunny one — the city's distinctive impression.",
    seeAndDo:
      "Union Street and the granite centre; Aberdeen Art Gallery; the Maritime Museum (North Sea oil and seafaring history); the beachfront and the harbour for boat-watching; King's College and St Machar's Cathedral in Old Aberdeen; out of town, Royal Deeside (around Balmoral) and its many castles.",
    whenAndTips:
      "May–September is best, with very long daylight. Winter is cold and windy, and sea fog can affect flights. Hotels are tight and expensive during oil-industry conferences. Seeing the castles and scenery of Deeside usually needs a car or a tour.",
  },

  inverness: {
    // 零改动留痕（2026-09-10）：INV 机场代码现行有效。盖尔语「尼斯河口」的地名释义属实。
    //   ✅ **零争议红线判定**：卡洛登战场用的是「庄重的历史遗址」这类中性词，**「高地清洗」（Highland Clearances）这个词组根本没有出现在正文里** ——
    //   按判据（定位性简短事实 → 留），**不改**。
    // identity sources: 人口：城镇（settlement）**48,248（2022 年普查）**，原文「约 6 万」高了约四分之一。⚠️ **因弗内斯没有独立的 council**，归高地议会（Highland Council，约 2.57 万 km²、2025 年中约 23.7 万人）辖——「市区人口」这个说法容易与整个议会区混淆，已改为写明「城镇」这一档。
    //   📌 NRS 的聚落／城镇口径**已停止年度滚动更新**，只能用普查年份（上次 2022、下次 2031）——所以这个数不算过期。
    //   ✅ 「英国最北的城市之一」带「之一」限定，符合规范，不改。
    identity:
      "Inverness is the capital of the Scottish Highlands, where the River Ness meets the Moray Firth at the north-eastern end of the Great Glen, with a settlement population of about 48,000 at the 2022 census (National Records of Scotland) — one of the northernmost cities in the UK, and the gateway to the Highlands, the Isle of Skye and the northern coast. The name means 'mouth of the Ness' in Gaelic.",
    // howItWorks sources: 苏格兰国家档案局（NRS）《Mid-2025 population estimates》官方时间序列表（Table 1），时点 2025-06-30，2026-07-14 发布。子代理下载原表逐行解析，**级别 1**。
    //   https://www.nrscotland.gov.uk/publications/mid-2025-population-estimates/
    //   发布节奏：**周期不固定**（mid-2025 滞后约 13 个月于 2026-07 发布，历史上也有 4 月发布的年份）。下一期按「参考日 + 12–14 个月」估算，并到 NRS publications 页看该年是否已标 (outdated)。
    //   聚落/城镇（settlement / locality）口径 NRS 已停止年度滚动估计，最新只能到 2022 年人口普查，下一次要等 2031 年普查。
    //   Highland council area mid-2025 = 237,260；面积约 25,659 km²（高地议会官方数字）。
    howItWorks:
      "Inverness is the capital of the Scottish Highlands, with about 48,000 people at the 2022 census and city status since 2000; it is the seat of the Highland Council, which governs the largest council area in the United Kingdom, about 25,700 km² and 237,000 people at mid-2025 reaching to the north coast, running education, housing and roads while health and police belong to the Scottish Government. The city lies where the River Ness enters the Moray Firth, its centre on the east bank, the Kessock Bridge crossing north to the Black Isle, the Culloden battlefield to the east, Loch Ness about 10 km south-west and the airport to the north-east. Gaelic place names are everywhere. Newcomers most often go wrong by expecting Loch Ness in town, when it lies outside, and 'Highland' is a council area larger than Belgium of which Inverness is one corner.",
    layout:
      "Inverness is small, with the River Ness running through it and a set of linked wooded islands in the river. A red-sandstone castle (now a courthouse) stands on high ground by the river. South-west of the city is the Great Glen — a valley slicing straight across Scotland along a fault line, stringing together long, deep lochs including Loch Ness, which the Caledonian Canal connects for navigation.",
    gettingAround:
      "Inverness Airport (INV) is about 13 km east of the city, with a bus into town. This is the hub of Highland rail and road, with scenic trains about 3.5 hours to Edinburgh and Glasgow. Seeing the Highlands and the coast essentially needs a car (narrow roads, often single-track with passing places) or a local tour. The climate is temperate maritime, milder than you might expect (warmed by the Gulf Stream), but changeable and windy.",
    culture:
      "English is universal, and Gaelic has a cultural presence here (bilingual signs, a Gaelic school and media). The city is the administrative and shopping centre of the Highlands, with a slower pace than the south. Restaurant tipping is about 10–12.5%. Summer daylight is very long (near midnight in June), and winter days are very short.",
    seeAndDo:
      "Walks along the River Ness and the islands; the market and the Victorian Market arcade; out of town, Loch Ness (the ruins of Urquhart Castle, boat trips); the locks of the Caledonian Canal; Culloden Battlefield and the Clava Cairns (sombre historic sites); using Inverness as a base to drive to Skye, the North Coast 500 (NC500) and the north-east coast.",
    whenAndTips:
      "May–September is best, with very long daylight. From May to September the lowlands and woods have biting midges — take repellent, worst at dusk. Driving in the Highlands means learning the single-track road etiquette and keeping the tank topped up. In winter road conditions and daylight are both limited, and passes may close.",
  },

  cardiff: {
    // identity sources: 英国国家统计局（ONS）mid-2025 地方政府辖区估计，时点 2025-06-30，2026-07-29 发布；经 Nomis（ONS 官方门户）数据集 NM_2002_1 直接查询，**级别 1**。发布节奏：每年 7 月下旬，是三家里最稳定的。
    //   City and County of Cardiff（W06000015）mid-2025 = 381,516。原文的「都会区约 48 万」不是 ONS 口径，改为单一制议会辖区。
    identity:
      "Cardiff is the capital of Wales, in south Wales where the River Taff reaches the sea, with a unitary authority population of about 381,500 (mid-2025). In the 19th century it was one of the largest coal-exporting ports in the world; today it is the political, media and sporting centre of Wales, with the Welsh parliament (the Senedd) and a stadium that often hosts major events in the centre of the city. The name Wales has also travelled the world — for example New South Wales in Australia, named by James Cook in 1770.",
    // howItWorks sources: 英国国家统计局（ONS）mid-2025 地方政府辖区估计，时点 2025-06-30，2026-07-29 发布；经 Nomis（ONS 官方门户）数据集 NM_2002_1 直接查询，**级别 1**。发布节奏：每年 7 月下旬，是三家里最稳定的。
    //   同上。**方向值得记**：2021→2025 从 36.0 万涨到 38.2 万，但 2024→2025 反而小幅下降。
    howItWorks:
      "Cardiff is the capital of Wales, so since 1955, with the Senedd at Cardiff Bay and the Welsh Government at Cathays Park running health and education; the City and County of Cardiff is a unitary council over about 141 km² with about 381,500 people at mid-2025, running education, housing and waste, while police belong to national bodies. The centre lies around the castle and the arcades, the Principality Stadium by the river in the middle of town, Cardiff Bay the old docks remade after the barrage of the 1990s, Cathays the university quarter, signs in Welsh and English side by side, and the airport at Rhoose 20 km south-west. Newcomers most often go wrong by taking Penarth across the bay for Cardiff, when it lies in the Vale of Glamorgan council and is another town.",
    layout:
      "Cardiff is built on low ground where several rivers meet Bristol Bay, and is fairly flat, rising to the north into the Valleys (the historic coal-mining valleys). The centre is compact, with the castle right in the middle; to the south is the redeveloped Cardiff Bay (the former docklands), with the Wales Millennium Centre and the Senedd. The city has many parks.",
    gettingAround:
      "Cardiff Airport (CWL) is about 19 km south-west, with bus and train connections; many people also come by train from Bristol or the London airports. The city has local trains (linking the Valleys) and buses, taken with a contactless card. The train to London is about 2 hours. The centre and Cardiff Bay are walkable, with a water bus between them. The climate is temperate maritime, and it is one of the rainier cities in the UK.",
    culture:
      "English is universal, and Welsh is co-official — signs and public information are bilingual, schools teach Welsh, and there is a Welsh-language TV channel. The city identifies strongly with rugby (the national sport of Wales), and match days fill the whole city. Restaurant tipping is about 10–12.5%.",
    seeAndDo:
      "Cardiff Castle (with Roman wall footings and Victorian Gothic Revival interiors); the National Museum (free, with Impressionist works and Welsh natural history); Cardiff Bay, the Wales Millennium Centre and the Senedd; St Fagans National Museum of History (an open-air museum of Welsh buildings and life, free); a match at the Principality Stadium; north into the Brecon Beacons.",
    whenAndTips:
      "May–September is the most comfortable. On rugby match days or big concert days the centre is packed and trains and hotels are very tight — check the fixture list ahead. It rains all year — carry an umbrella. A day trip to the Brecon Beacons needs a car or a tour.",
  },

  belfast: {
    // identity sources: 北爱尔兰统计与研究署（NISRA）2024 年年中人口估计（MYE24-POP_TOTALS.xlsx），时点 2024-06-30，2025-09-11 发布，子代理下载原表解析，**级别 1**。
    //   **mid-2025 截至 2026-09-08 尚未发布**，仍在正常节奏内 —— NISRA 是三家里最慢的，通常滞后 14–15 个月、落在 8—9 月。
    //   都会区那一档是 Census 2021 六个旧 1993 年边界地方政府区加总（NISRA 官方建表工具查得 704,406），不是年度估计，下一次只能等 2031 年普查。
    //   Belfast Metropolitan Area = Census 2021 六区加总 704,406（NISRA 官方建表工具查得）。这一档是**普查口径**，不是年度估计。
    identity:
      "Belfast is the capital of Northern Ireland, in the north-east of the island of Ireland where the River Lagan meets Belfast Lough, with a metropolitan area of about 704,000 (2021 census). From the late 19th to the early 20th century it was a world-class centre of shipbuilding, linen and tobacco, and the Titanic was built here. After decades of conflict, the city's fabric and economy have changed a great deal over the last two or three decades.",
    // howItWorks sources: 北爱尔兰统计与研究署（NISRA）2024 年年中人口估计（MYE24-POP_TOTALS.xlsx），时点 2024-06-30，2025-09-11 发布，子代理下载原表解析，**级别 1**。
    //   **mid-2025 截至 2026-09-08 尚未发布**，仍在正常节奏内 —— NISRA 是三家里最慢的，通常滞后 14–15 个月、落在 8—9 月。
    //   都会区那一档是 Census 2021 六个旧 1993 年边界地方政府区加总（NISRA 官方建表工具查得 704,406），不是年度估计，下一次只能等 2031 年普查。
    //   Belfast LGD mid-2024 = 352,390 —— **NISRA 最新一期就是 mid-2024**，mid-2025 截至 2026-09-08 尚未发布，这不是我们偷懒，是该机构节奏最慢（滞后 14–15 个月）。
    howItWorks:
      "Belfast is the capital of Northern Ireland, with the Assembly at Stormont in the east of the city and health, education and police run by Northern Ireland's executive bodies; Belfast City Council covers about 133 km² with about 352,000 people at mid-2024 and a metropolitan area of about 704,000 at the 2021 census, running waste, parks and planning with narrower duties than English councils. The centre lies at City Hall and Donegall Square on the west bank of the Lagan, the Titanic Quarter is the old shipyard turned new district with the two yellow Harland and Wolff cranes on the skyline, the Cathedral Quarter is the street of bars and galleries, Queen's University lies to the south and Cave Hill looks down from the north; the City Airport lies by the river and the International Airport about 25 km west. Newcomers most often go wrong by taking Belfast for a small city, when it is the core of a metropolitan area of 700,000 with two airports in two directions.",
    layout:
      "Belfast is built on estuary lowland ringed by hills, with the centre focused on the Victorian City Hall. The east bank of the Lagan is the redeveloped 'Titanic Quarter' (the former shipyards). Parts of west and north Belfast have neighbourhoods distinguished by signs, murals and peace walls, where the history is a sensitive subject. The surrounding hills (such as Cave Hill) are visible from the city.",
    gettingAround:
      "Two airports: Belfast International (BFS, about 24 km north-west, mostly budget and long-haul) and George Best Belfast City (BHD, close to the centre, mostly UK domestic). Airport buses run into town. The city has the Glider rapid-transit bus and ordinary buses, taken with a contactless card. There are also ferries to Scotland and England. The climate is temperate maritime — mild, wet and windy.",
    culture:
      "English is universal; Irish and Ulster Scots are used in some communities and on signs. Most of the city is very welcoming to visitors, but topics touching on history, politics, religion and community belonging are sensitive, and it is best not to volunteer opinions in conversation. Restaurant tipping is about 10–12.5%.",
    seeAndDo:
      "Titanic Belfast (built beside the original slipways, a sombre subject) and the SS Nomadic; the Victorian City Hall (free tours); the Ulster Museum and the Botanic Gardens; St George's Market (weekends); a 'murals and history' tour by taxi or bus (choose a licensed operator that gives a balanced account); an hour north to the Giant's Causeway and the coast road.",
    whenAndTips:
      "May–September is best. Around mid-July Northern Ireland has a traditional marching season, and on the day some areas may have traffic controls or a tense atmosphere — read up in advance and simply avoid the relevant routes. It rains all year — carry an umbrella. Popular sites like the Giant's Causeway and the Dark Hedges are best visited early or on a tour.",
  },

  // ── United Kingdom batch 2 (2026-09-05) ──
  bath: {
    // identity sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   Bath built-up area 2021 年普查 = 94,080。**这一档不需要更新**：建成区（BUA）只在十年一次的人口普查时重新划定与统计，不属于 ONS 年度年中估计覆盖的口径，下一次要等 2031 年普查。
    identity:
      "Bath lies in the valley of the River Avon in south-west England, with about 94,000 people (2021 census; built-up area figures update only with each census), and is the only city in Britain with natural hot springs. The Romans built baths and a temple over the springs around AD 60 and called the place Aquae Sulis; in the eighteenth century it became a fashionable spa, and the Royal Crescent (1774), the Circus and Pulteney Bridge were built in honey-coloured limestone in the Georgian style. The whole city was inscribed as a World Heritage site in 1987 and again in 2021 as one of the 'Great Spa Towns of Europe'. Jane Austen lived here, and Thermae Bath Spa, opened in 2006, lets visitors bathe in the spring water once more.",
    // howItWorks sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   Bath and North East Somerset（E06000022）mid-2025 = 200,898。同条的建成区 9.4 万是普查口径、不逐年更新，两档并存。
    howItWorks:
      "Bath is a city of Somerset with about 94,000 people in its built-up area in 2021, but it has no council of its own: it is governed by Bath and North East Somerset Council, an area of about 201,000 people at mid-2025 with its seat in Bath, running education, housing and waste while police and hospitals belong to national bodies. The whole city was inscribed as World Heritage in 1987 and again in 2021 as one of the Great Spa Towns of Europe: the Roman Baths and the Abbey lie in the old centre in a bend of the Avon, the Royal Crescent and the Circus on the slope to the north, Bath Spa station to the south, Bristol 20 km west, and some 6 million visitors a year pour in. Newcomers most often go wrong by looking for a 'Bath City Council', when the city is run by a larger council of which Bath is only the seat.",
    layout:
      "The centre sits in a bend of the Avon on its north bank, with the Roman Baths, Bath Abbey and the Pump Room in the middle on Abbey Churchyard; Pulteney Bridge crosses the river on the east side, lined with shops, with the horseshoe weir below. The Georgian quarter climbs the slope north of the centre: the Circus, the Royal Crescent and Royal Victoria Park, with the Jane Austen Centre on Gay Street. Bath Spa station lies south of the centre by the river. Hills surround the city, with Prior Park landscape garden to the south and Bathampton Down to the north-east looking over it all.",
    gettingAround:
      "Bath has no airport with scheduled flights; the nearest is Bristol (BRS, about 25 km, with an airport bus). Trains from London Paddington reach Bath Spa in about 1.5 hours, from Bristol in about 15 minutes. The centre is entirely walkable, with the main sights within 1 km; sightseeing buses and day tours run to Stonehenge and the Cotswolds. The climate is temperate maritime, mild and wet.",
    culture:
      "English is universal. The water in the Roman Baths must not be touched or drunk (filtered spa water can be tasted in the Pump Room); bathe at Thermae Bath Spa in swimwear, with a rooftop pool over the city. The Abbey is a working church — no visits during services. Tip 10–12.5% in restaurants (service is often already added). The Jane Austen Festival in September has a Regency-costume promenade. The Sally Lunn bun is the local traditional bake.",
    seeAndDo:
      "The Roman Baths and the Pump Room; Bath Abbey (climb the tower); the Royal Crescent (No. 1 is a museum) and the Circus; Pulteney Bridge and the riverside walk; Thermae Bath Spa; the Jane Austen Centre and the Fashion Museum; the Holburne Museum; Prior Park landscape garden; the Bath Skyline walk over Bathampton Down; day trips to Stonehenge and Lacock.",
    whenAndTips:
      "May–September is most comfortable, and the Christmas market (late November–December) is crowded; winter is quiet. A day to a day and a half for the city; visit the Roman Baths early or with a timed online ticket in high season. An easy day trip from London and a base for the Cotswolds and Stonehenge.",
  },
  oxford: {
    // identity sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   Oxford（E07000178）mid-2025 = 165,940。
    identity:
      "Oxford lies where the Thames (called the Isis here) meets the Cherwell in south-central England, with about 166,000 people (mid-2025, Office for National Statistics). The University of Oxford has taught since the late eleventh century and is the oldest university in the English-speaking world; more than thirty colleges are scattered through the centre beneath a skyline of spires — the 'city of dreaming spires' — with the Bodleian Library (1602), the dome of the Radcliffe Camera, the great hall of Christ Church and the Ashmolean Museum (1683, Britain's oldest public museum) as its landmarks. Blenheim Palace about 13 km north is Churchill's birthplace and a World Heritage site.",
    // howItWorks sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   同上。
    howItWorks:
      "Oxford is a city of Oxfordshire with about 166,000 people at mid-2025 under two-tier local government: Oxford City Council runs housing, waste and planning approvals, Oxfordshire County Council runs schools, roads and social services, and police and hospitals belong to national bodies. The university has no campus, its 39 colleges scattered through the lanes of the centre with the Bodleian and the Radcliffe Camera in the middle, the car plant at Cowley to the south-east, and the Thames called the Isis here; cars are restricted in the centre, five park-and-ride sites sit on the ring road, the station lies west of the centre, and there is no airport with scheduled flights, Heathrow being 65 km south-east. Newcomers most often go wrong by asking where the university is, when it has no gate and the whole old town is the university.",
    layout:
      "The centre is compact: Carfax Tower marks the old crossroads, the High Street runs east to Magdalen Bridge, Broad Street holds the Bodleian, the Sheldonian Theatre and Blackwell's bookshop, and Radcliffe Square lies between them; Christ Church stands on the south end of St Aldate's with its meadow running down to the river. The Ashmolean is on Beaumont Street and the railway station in the west. The Cherwell flows past the University Parks and Magdalen College, and punts leave from Magdalen Bridge or the Cherwell Boathouse. Jericho to the north is the dining quarter and Cowley Road lies east.",
    gettingAround:
      "Oxford has no airport with scheduled flights; direct coaches run from London Heathrow (about 1.5 hours) and Gatwick (about 2). Trains from London Paddington or Marylebone take about 1 hour, and the Oxford Tube coach runs to London around the clock. The centre is best on foot or by bicycle (Oxford is a cycling city); cars are restricted in the centre and parking is scarce, so use Park & Ride. The S3 bus reaches Blenheim Palace in about 40 minutes. The climate is temperate maritime, mild and wet.",
    culture:
      "English is universal. Most colleges charge admission and keep opening hours, and may close in exam season (May–June) and for events; they are working communities — stay quiet, keep out of areas marked private, and only fellows may walk on the lawns. The Bodleian is visited by guided tour. Tip 10–12.5% in restaurants. May Morning (the Magdalen Tower choir at dawn on 1 May) is a tradition, and pubs such as the Eagle and Child carry literary history.",
    seeAndDo:
      "Radcliffe Square, the Bodleian Library and the Sheldonian; Christ Church (the great hall, the cathedral, the meadow); Magdalen College and its deer park; the Ashmolean Museum; the Pitt Rivers and Natural History museums; the tower of the University Church for the spires; punting from Magdalen Bridge; the Covered Market; a day at Blenheim Palace; Oxford Castle.",
    whenAndTips:
      "May–September is most comfortable, and colleges open longer in the vacations (July–September); some close during graduation and exams. A day to a day and a half for the city, half a day for Blenheim. An easy day trip from London, linked with the Cotswolds.",
  },
  cambridge: {
    // identity sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   Cambridge（E07000008）mid-2025 = 149,872。
    identity:
      "Cambridge lies on the River Cam in eastern England, with about 150,000 people (mid-2025, Office for National Statistics). The University of Cambridge was founded in 1209 by scholars who left Oxford, and its thirty-one colleges line the Cam: the fan vault of King's College Chapel (begun 1446) is a masterpiece of English Gothic, and Trinity's Great Court, the Mathematical Bridge at Queens' and the Bridge of Sighs at St John's stand by the river; 'the Backs' are the lawns and gardens behind the colleges along the water, and punting is the classic way to see them. The Fitzwilliam Museum holds rich collections. Around the city lies the technology belt known as 'Silicon Fen'.",
    // howItWorks sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   同上。
    howItWorks:
      "Cambridge is a city of Cambridgeshire with about 150,000 people at mid-2025 under two-tier local government: Cambridge City Council runs housing, waste and planning approvals, Cambridgeshire County Council runs schools and roads, and since 2017 the Cambridgeshire and Peterborough Combined Authority has an elected mayor for transport and the economy. The university's 31 colleges line the Cam and the Backs with no campus, King's College Chapel the point of reference; the Science Park to the north is the birthplace of the 'Silicon Fen' cluster, the biomedical campus around Addenbrooke's Hospital lies to the south, the guided busway joins them, the train reaches London in about 50 minutes, and the bicycle carries the city. Newcomers most often go wrong by taking Cambridge for a university town, when it is also one of the largest technology clusters in Europe and students are a minority of residents.",
    layout:
      "The old town and colleges cluster within about a square kilometre on the east bank of the Cam: King's, Trinity and St John's line King's Parade and Trinity Street, Queens' is at the south end, the Backs lie on the west bank, and Market Square is in the middle. The Fitzwilliam Museum stands on the southern stretch of Trumpington Street. Punts leave from Mill Lane and from Quayside by Magdalene Bridge, with a second route north to Grantchester Meadows. The railway station is about 2 km south-east of the centre.",
    gettingAround:
      "Cambridge has no airport with scheduled flights; the nearest is London Stansted (about 48 km, about 30 minutes by train). Trains from London King's Cross or Liverpool Street take about 50 minutes to 1 hour 15. The centre is best on foot or by bicycle (Cambridge has one of the highest cycling rates in Britain); cars are restricted, so use Park & Ride. Punts can be self-hired or chauffeured with commentary. The climate is temperate maritime and one of the drier parts of Britain.",
    culture:
      "English is universal. Most colleges charge admission and keep opening hours, closing during exams (late April to mid-June) and ceremonies; keep quiet inside, off the lawns and out of staircases marked private. Evensong at King's College Chapel is free and open to the public — enter quietly. The river is crowded with punts in high season — mind the bridges. Tip 10–12.5% in restaurants. The May Balls and the June Bumps races are student traditions.",
    seeAndDo:
      "King's College and its chapel (evensong); Trinity's Great Court and the Wren Library; St John's and the Bridge of Sighs; the Mathematical Bridge at Queens'; punting along the Backs; the Fitzwilliam Museum; the University Botanic Garden; the tower of Great St Mary's; Market Square; Grantchester Meadows (on foot or by punt, the Orchard tea garden); the Imperial War Museum at Duxford (aircraft, about 15 km south).",
    whenAndTips:
      "May–September is most comfortable, with punting in summer; many colleges close in exam season. A day for the city. An easy day trip from London, linked with Ely Cathedral.",
  },
  brighton: {
    // identity sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   Brighton and Hove（E06000043）mid-2025 = 284,170 —— 数值几乎没变，但时点该刷新。
    identity:
      "Brighton lies on the English Channel coast about 80 km south of London and forms the city of Brighton and Hove with its neighbour, with about 284,000 people (mid-2025, Office for National Statistics). A seaside resort for Londoners since the eighteenth century, it gained the Indo-Islamic Royal Pavilion built for the Prince Regent, later George IV (1787–1823); Brighton Palace Pier, opened in 1899, is Britain's best-known pleasure pier, and the i360 observation tower of 2016 rises 162 m. The Lanes are the narrow alleys of the old fishing town, now independent shops and restaurants. Brighton is known for its openness and diversity, with one of Britain's largest Pride festivals in August; the Seven Sisters chalk cliffs lie about 13 km east.",
    // howItWorks sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   同上。
    howItWorks:
      "Brighton is administratively 'Brighton and Hove', a unitary authority formed by merging the two towns in 1997 and made a city in 2001, about 83 km² with about 284,000 people at mid-2025; the council runs education, housing and waste, and police and hospitals belong to national bodies. Brighton is the seaside resort of the eastern half, with the Palace Pier, the Royal Pavilion and The Lanes; Hove is the residential western half with a seafront and identity of its own, and 'Hove, actually' is the local catchphrase; the South Downs rise to the north, the train reaches London in about an hour, and two universities lie on the outskirts. Newcomers most often go wrong by taking Brighton for the name of the whole city, when it is only half, and the other half will correct you.",
    layout:
      "The city runs east–west along the shore: the Royal Pavilion and its gardens are in the centre, beside the Lanes and the North Laine of independent shops; below the seafront road are the beach, the pier and the bars and restaurants of the arches, with the Palace Pier directly south of the centre, the i360 on the western seafront and the wreck of the West Pier beside it. Hove to the west is a quiet residential district with lawns on the front; Kemptown to the east has the racecourse and the Volk's electric railway. The station sits on the slope north of the centre. The Seven Sisters and Beachy Head lie east.",
    gettingAround:
      "Brighton has no airport with scheduled flights; the nearest is Gatwick (about 45 km, about 30 minutes by train). Trains from London Victoria or St Pancras take about 1 hour. The centre and seafront are walkable and buses are frequent; a cycle path runs along the coast, and coastal buses reach the Seven Sisters. The climate is temperate maritime, windy on the front and among the sunniest in Britain in summer.",
    culture:
      "English is universal. No photography inside the Royal Pavilion. The beach is shingle and the sea cool — swim only in lifeguarded areas. Brighton is a centre of LGBTQ+ culture, and the city is packed and lodging tight over Pride weekend. The Brighton Festival in May is one of Britain's largest arts festivals. The Lanes and North Laine are full of independent, vintage and vegetarian places. Tip 10–12.5% in restaurants. Seagulls steal food.",
    seeAndDo:
      "The Royal Pavilion and gardens; Brighton Palace Pier (rides, fish and chips); the Lanes and North Laine; the i360; the seafront and shingle beach, and Volk's Electric Railway (1883, the world's oldest electric railway); the Brighton Museum and Art Gallery; the beach huts of Hove; the Seven Sisters walk (Seaford to Birling Gap); the South Downs; the Sea Life centre (1872, one of the world's oldest aquariums).",
    whenAndTips:
      "May–September is best, with Pride in August and summer weekends the busiest; winter is windy but quiet. A day for the city, half a day to a day for the Seven Sisters. A very easy day trip from London.",
  },
  "newcastle-upon-tyne": {
    // identity sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   Newcastle upon Tyne（E08000021）mid-2025 = 320,838。
    identity:
      "Newcastle upon Tyne is the hub city of north-east England, on the north bank of the Tyne, with about 321,000 people (mid-2025, Office for National Statistics), facing Gateshead across the river. It grew from the Roman bridge-fort on the Tyne, took its name from the castle of 1080 and prospered on coal and shipbuilding in the nineteenth century; the Tyne Bridge of 1928 is the city's emblem, and the quaysides on both banks are now bars, restaurants and arts venues (the BALTIC Centre for Contemporary Art, Sage Gateshead), joined by the tilting Millennium Bridge of 2001. Grey Street is called one of the finest streets in England and Grainger Town is a planned neoclassical quarter of the 1830s; remains of Hadrian's Wall run west from the city, and the Angel of the North south of Gateshead stands 20 m tall.",
    // howItWorks sources: 英国国家统计局（ONS）《Population estimates for England and Wales: mid-2025》地方政府辖区明细表（MYE2），时点 2025-06-30，2026-07-29 发布。子代理直接取 ONS 官网数据集，**级别 1**。
    //   https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/estimatesofthepopulationforenglandandwales
    //   发布节奏：**每年 7 月下旬**发布上一年年中（6 月 30 日）的数（mid-2024 于 2025-07-30、mid-2025 于 2026-07-29）；下一期 mid-2026 预计 2027-07 下旬。
    //   **建成区（Built-up Area）是另一条线**：只随十年一次人口普查更新，当前最新是 2021 年普查，下一期要等 2031 年普查后（约 2032–2033）。
    //   **这条不是「数字过期」，是这个统计单元已经不存在了**：ONS 2011 年普查曾把纽卡斯尔、盖茨黑德、桑德兰等连成一个「Tyneside」建成区（约 77–83 万），但 **2021 年普查改版建成区分类后「Tyneside」不再存在**，纽卡斯尔（286,445）、盖茨黑德（115,280）、桑德兰（168,315）、泰恩茅斯（60,605）各自独立。原文八成来自维基上沿用旧口径的说法。
    //   **没有拿一个近似值顶替**——把几个 BUA 相加凑到旧口径的 80 万，等于自造一个 ONS 从未发布过的合成口径。改成并列写两个独立建成区，并说明二者相连但统计上分列。
    howItWorks:
      "Newcastle is a metropolitan borough on the north bank of the Tyne, about 114 km² with about 321,000 people at mid-2025; at the 2021 census the Newcastle upon Tyne built-up area held about 286,000 and the adjoining Gateshead built-up area about 115,000 — physically joined but counted separately — with Gateshead a separate borough on the south bank a separate borough; since 2024 the North East Combined Authority has an elected mayor for transport, the city council runs education, housing and waste, and police and hospitals belong to national bodies. The centre stands on the high ground above the river, Grey Street and Grainger Town the neoclassical quarter of the 1830s, seven bridges joining the banks at the Quayside with the Tyne Bridge of 1928, St James' Park in the middle of town, the Tyne and Wear Metro crossing both banks to the airport, and two universities on the north side of the centre. Newcomers most often go wrong by taking Gateshead across the river for Newcastle, when crossing a bridge changes the council and the Sage and the Baltic both stand in Gateshead.",
    layout:
      "The centre climbs the slope from the north bank: the Quayside lies by the river, the Tyne Bridge, the Millennium Bridge and the medieval castle stand above the bank, Grey Street runs south from the Monument to the river, Grainger Town and the area around Grey's Monument form the commercial centre, and Central Station lies south-west. Jesmond to the north is the student and dining district, with the bars of Osborne Road. Gateshead Quays across the river hold BALTIC and the Sage. The Angel of the North stands by the A1 south of Gateshead; the Hadrian's Wall museum and Segedunum fort are at Wallsend to the east, with the wall itself in the countryside to the west. The airport is about 12 km north-west.",
    gettingAround:
      "Newcastle International Airport (NCL), about 9 km in a straight line from the centre, is linked directly by the Tyne and Wear Metro (about 25 minutes), with scheduled flights. Trains from London King's Cross take about 3 hours and from Edinburgh about 1.5. The city has the Metro and buses; the centre is walkable and the Quayside is a riverside stroll; take a bus to the Angel of the North and a train to Hexham or the summer AD122 bus for Hadrian's Wall. The climate is temperate maritime, cool and breezy.",
    culture:
      "English is universal, with the distinctive Geordie accent. Newcastle is famous for nightlife — the Quayside and Grey Street are lively at weekends and the Bigg Market is bar country; football (Newcastle United) is the city's faith, and the streets around St James' Park are packed on match days. Tip 10–12.5% in restaurants. The Great North Run in September is one of the world's largest half marathons. Local bites include the stottie loaf and Greggs, which began here.",
    seeAndDo:
      "The Quayside with the Tyne and Millennium bridges (at night); the BALTIC and Sage Gateshead; Newcastle Castle (climb the keep); Grey Street and Grey's Monument; the Laing Art Gallery; the Great North Museum; the Angel of the North; Hadrian's Wall (Segedunum, the forts towards Hexham); the St James' Park stadium tour; the coast at Tynemouth and Whitley Bay (by Metro); Jesmond Dene park.",
    whenAndTips:
      "May–September is most comfortable, and the Christmas market runs in December. A day for the city, a day for Hadrian's Wall, half a day for the coast. A halfway stop on the East Coast line between London and Edinburgh.",
  },
  stirling: {
    // identity sources: 苏格兰国家档案局（NRS）《Mid-2025 population estimates》官方时间序列表（Table 1），时点 2025-06-30，2026-07-14 发布。子代理下载原表逐行解析，**级别 1**。
    //   https://www.nrscotland.gov.uk/publications/mid-2025-population-estimates/
    //   发布节奏：**周期不固定**（mid-2025 滞后约 13 个月于 2026-07 发布，历史上也有 4 月发布的年份）。下一期按「参考日 + 12–14 个月」估算，并到 NRS publications 页看该年是否已标 (outdated)。
    //   聚落/城镇（settlement / locality）口径 NRS 已停止年度滚动估计，最新只能到 2022 年人口普查，下一次要等 2031 年普查。
    //   斯特灵 locality Census 2022 = 38,587。**数字没错、年份标错了**：这是 2022 年人口普查的数，不是 2021 年。
    //   另注意斯特灵还有一个更大的 settlement 口径（含布里奇奥夫艾伦等）Census 2022 = 49,928，比 locality 高近 30%，不要混用。
    identity:
      "Stirling lies at the crossing of the River Forth in central Scotland, the gateway between the Highlands and the Lowlands, with about 39,000 people (2022 census; city status granted in 2002). Stirling Castle stands on a volcanic crag and was one of the royal castles of Scotland (Mary, Queen of Scots was crowned here); the Battle of Stirling Bridge (1297, William Wallace) and the Battle of Bannockburn (1314, Robert the Bruce) were fought on the town's edge, and the Wallace Monument of 1869 stands on the Abbey Craig across the river. The stone streets of the Old Town run down the ridge from the castle, and the Church of the Holy Rude is where James VI was crowned in 1567. Loch Lomond and the Trossachs National Park lies about 30 km north-west.",
    // howItWorks sources: 苏格兰国家档案局（NRS）《Mid-2025 population estimates》官方时间序列表（Table 1），时点 2025-06-30，2026-07-14 发布。子代理下载原表逐行解析，**级别 1**。
    //   https://www.nrscotland.gov.uk/publications/mid-2025-population-estimates/
    //   发布节奏：**周期不固定**（mid-2025 滞后约 13 个月于 2026-07 发布，历史上也有 4 月发布的年份）。下一期按「参考日 + 12–14 个月」估算，并到 NRS publications 页看该年是否已标 (outdated)。
    //   聚落/城镇（settlement / locality）口径 NRS 已停止年度滚动估计，最新只能到 2022 年人口普查，下一次要等 2031 年普查。
    //   Stirling council area mid-2025 = 94,040；面积约 2,186 km²。
    howItWorks:
      "Stirling is a small city of central Scotland with about 39,000 people at the 2022 census and city status since 2002; it is the seat of Stirling Council, whose area of about 2,186 km² and 94,000 people at mid-2025 reaches north into the Highlands of the Trossachs, running education, housing and roads while health and police belong to the Scottish Government. The castle stands on a volcanic crag with the old town running down the slope, the Wallace Monument on the hill across the river, the Bannockburn battlefield south of town and the Highland Boundary Fault passing its edge, 'like a brooch clasping Highlands and Lowlands together'; the university lies at Bridge of Allan to the north, and the train reaches Edinburgh and Glasgow in about 45 minutes each. Newcomers most often go wrong by taking Stirling for a castle town, when it was once Scotland's capital and its council area holds lochs and mountains.",
    layout:
      "The castle crowns the crag at the top of the Old Town, which runs down the ridge: Argyll's Lodging, the Church of the Holy Rude, the Old Town Jail and the Mercat Cross lie along Castle Wynd and Broad Street; the new town and the station occupy the flat below, with the shops around Murray Place. The Forth flows north of the town, crossed by the fifteenth-century Old Bridge, and the Wallace Monument stands on the Abbey Craig across the river (about 3 km); the Bannockburn battlefield is about 3 km south. The University of Stirling lies north at Bridge of Allan.",
    gettingAround:
      "Stirling has no airport with scheduled flights; Glasgow Airport is about 42 km away and Edinburgh about 60. Trains take about 50 minutes from Edinburgh and about 30 from Glasgow, with direct services from Perth and Inverness too. The centre is walkable, with the castle about 20 minutes uphill from the station; buses and the sightseeing bus reach the Wallace Monument and Bannockburn. The climate is temperate maritime, cool and wet.",
    culture:
      "English is universal, with traces of Gaelic and Scots. The castle is run by Historic Environment Scotland — book ahead in high season; the Church of the Holy Rude is a working church, closed to visitors during services. The Wallace Monument means climbing 246 spiral steps. Bannockburn is a memorial site — respect the many sides of its history. Tip 10–12.5% in restaurants. The Bruce Festival and the Stirling Highland Games in August are local events.",
    seeAndDo:
      "Stirling Castle (the palace, the Great Hall, the tapestries); a walk through the Old Town (Argyll's Lodging, the Church of the Holy Rude, the Old Town Jail); the Wallace Monument; the Bannockburn battlefield and visitor centre; the Old Bridge and the riverside; the Stirling Smith Art Gallery and Museum; Doune Castle (about 13 km north-west); a day in Loch Lomond and the Trossachs (Callander, Loch Katrine); the Kelpies horse-head sculptures at Falkirk (about 20 km east).",
    whenAndTips:
      "May–September is most comfortable; the castle opens in winter but dark falls early. A day for the town, a day for the Trossachs. An easy day trip from Edinburgh or Glasgow and the starting point for the Highlands.",
  },
  portree: {
    // identity / howItWorks sources（2026-09-15 核实，非人口六段回扫）: 「约四成居民说盖尔语」对不上一个明确口径（普查「会说」2001 年 35.5%、「任何盖尔语技能」与「能听懂」口径差异很大），删去比例
    identity:
      "Portree is the capital and largest town of the Isle of Skye in Scotland's Inner Hebrides, with about 2,300 people (2022 census); its Gaelic name, Port Rìgh, means 'king's port'. The town wraps around a natural harbour framed by cliffs, and the row of coloured houses on the harbour and the pier designed by Thomas Telford are its emblems. It is the hub for touring Skye: the Old Man of Storr and the Quiraing to the north, the Fairy Pools and the Cuillin to the south-west, and Dunvegan Castle (seat of the MacLeods, among the longest continuously inhabited castles in Scotland) and the Talisker distillery to the west all start from here. Gaelic is still spoken by a good number of islanders.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Portree (2,281 2022; largest settlement of Skye; within Highland Council area, no island council; harbour; Skye Bridge via A87; ~74 miles from Inverness; Gaelic ~38%)
    howItWorks:
      "Portree is the largest settlement on Skye, with about 2,300 people in 2022, the only place on the island that can be called a town, but it has no council of its own: Skye belongs to the Highland Council based in Inverness, whose local office stands in town, while health and police belong to the Scottish Government. The town wraps around a small harbour with painted houses along the quay and is the island's centre for shops, hospital and buses; the Skye Bridge lies 55 km south-east at Kyleakin, the Old Man of Storr, the Quiraing and the Fairy Pools are scattered across the island, which runs about 80 km long, buses are sparse and Gaelic is still in use on the island. Newcomers most often go wrong by taking Portree for Skye, when the island's sights lie tens of kilometres away and nothing moves without a car.",
    layout:
      "The town sits on the slope above the western shore of the harbour, with Somerled Square at its centre, the harbour below and the coloured houses and pier on the east side. The Old Man of Storr lies about 10 km north on the Trotternish peninsula, with Kilt Rock, the Quiraing and Staffin beyond; the Fairy Pools are about 30 km south-west at Glen Brittle beneath the Cuillin; Dunvegan Castle is about 35 km west and the Talisker distillery about 25 km south-west at Carbost; the Sleat peninsula and the Armadale ferry lie in the south. The Skye Bridge at Kyle, in the south-east, links the island to Kyle of Lochalsh on the mainland.",
    gettingAround:
      "Skye has no airport with scheduled flights; the nearest is Inverness (about 119 km, 2.5 hours by road), and Glasgow or Edinburgh are about 5 hours away. Trains reach Kyle of Lochalsh (a scenic 2.5 hours from Inverness) with a bus of about 1 hour on to Portree; the ferry from Mallaig to Armadale takes about 30 minutes. Island buses are limited (routes from Portree to the Storr and Dunvegan), so driving is easiest — many roads are single-track, and vehicles pass at the passing places. The climate is temperate maritime, wet and windy, with weather that changes several times a day.",
    culture:
      "English is universal and Gaelic appears on road signs. Skye is crowded in summer and parking at the popular sites is tight — start early; the Storr and Quiraing paths are muddy and windswept, so wear waterproof boots and layers. Dunvegan Castle is a family home — keep to the open areas. Talisker tours must be booked. Tip 10–12.5% in restaurants. Island lodging is limited and books out months ahead in summer.",
    seeAndDo:
      "Portree harbour and the coloured houses; the Old Man of Storr walk; Kilt Rock and the Mealt Falls; the Quiraing loop; the Skye Museum of Island Life; the Fairy Pools; the Cuillin (the Sligachan paths); Dunvegan Castle and its seal boats; the Talisker distillery; sunset at Neist Point lighthouse; Clan Donald at Armadale on Sleat.",
    whenAndTips:
      "May–June and September are best (fewer people, long days, fewer midges); July–August are the busiest; winter is wet and windy with some facilities closed. At least two nights. Midges swarm on still days in June–August — bring repellent.",
  },
  windermere: {
    identity:
      "Windermere is the gateway town of the Lake District National Park in Cumbria, with about 4,800 people (2021); it runs into Bowness on the lakeshore and together they form the busiest spot in the Lakes. Lake Windermere, about 17 km long, is England's largest natural lake; the national park was created in 1951 and inscribed as a World Heritage site in 2017 as 'The English Lake District', a landscape shaped by the Romantic poets and a pastoral culture — Wordsworth's Dove Cottage at Grasmere and Beatrix Potter's Hill Top at nearby Sawrey are both reached from here. The Windermere branch railway of 1847 made it the easiest Lakeland town to reach by train.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Windermere (town ~8,000 with Bowness 2021; Westmorland and Furness unitary council 2023; Lake District National Park Authority for planning; the town lies 1.5 km from the lake, Bowness on the shore; railway 1847; lake is the largest in England; UNESCO Lake District 2017)
    howItWorks:
      "Windermere is the name both of the largest lake in England and of a town beside it, about 8,000 people with Bowness in 2021; it belongs to the Westmorland and Furness unitary council created in 2023, while building and planning are approved by the Lake District National Park Authority, and police and hospitals belong to national bodies. Windermere town grew around the railway terminus of 1847 and lies 1.5 km from the water; the town on the shore is Bowness, where the piers, boats and restaurants are, Ambleside lies at the northern end of the lake, and the Lake District was inscribed as World Heritage in 2017. Newcomers most often go wrong by looking for the lake on stepping off the train at Windermere, when the lake is at Bowness, or by calling it 'Lake Windermere', when locals say only 'Windermere'.",
    layout:
      "Windermere town climbs the slope around the station, and Bowness lies about 2 km south-west on the lakeshore with the piers, cruise boats and shops; Orrest Head, about 1 km north of the station, gives a view over the whole lake after a 20-minute walk. Hill Top at Sawrey and Grizedale Forest lie on the western shore, reached by the ferry from Bowness; Ambleside is at the northern end of the lake (about 8 km), with Rydal and Grasmere beyond (about 15 km); Langdale lies to the north-west, and Keswick and Derwentwater about 35 km north.",
    gettingAround:
      "The Lakes have no airport with scheduled flights; the nearest is Manchester (about 130 km, about 2 hours by train via Oxenholme). Trains from London Euston reach Oxenholme Lake District in about 2.5 hours, with the branch line taking about 20 minutes on to Windermere. The town is walkable, Bowness is about 25 minutes on foot or a bus ride away, and the 555/599 buses run along the lake to Ambleside, Grasmere and Keswick; cruises and ferries ply the lake. Parking is very difficult in summer. The climate is temperate maritime — the wettest region in England — and changeable.",
    culture:
      "English is universal. Follow public footpaths in the park, close farm gates and leave the sheep alone; the weather turns fast on the fells, so carry a map and waterproofs. The Wordsworth and Potter houses are heritage sites, and Hill Top needs timed tickets. Fell-walking has its own tradition — the 214 'Wainwright' fells. Tip 10–12.5% in restaurants. Summer and bank holidays are extremely crowded.",
    seeAndDo:
      "The view from Orrest Head; lake cruises from Bowness pier (to Ambleside or Lakeside); Hill Top and the village of Hawkshead; Dove Cottage and the Wordsworth museum at Grasmere, and Rydal Mount; Ambleside and Stock Ghyll Force; walking in Langdale; Brantwood (Ruskin's home, across Coniston Water); the Windermere Jetty museum; a day at Keswick and Derwentwater; the Lakeside and Haverthwaite steam railway.",
    whenAndTips:
      "May–June and September–October are best; July–August and Easter are the most crowded; winter is quiet with snow on the fells. At least two nights, relying on buses and walking rather than a car. Rain gear is common sense.",
  },
};
