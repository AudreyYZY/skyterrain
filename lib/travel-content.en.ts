import type { TravelGuide } from "@/lib/travel-lesson";

/**
 * Travel mode: city / country-overview guides (English). 6-section template — see lib/travel-lesson.ts.
 * Sources (Australia): Tourism Australia / state tourism boards / Australian Bureau of Meteorology
 *   climate data / Dept. of Home Affairs entry rules / established guidebook consensus.
 * Sources (China): city culture-and-tourism bureaus / China Meteorological Administration climate
 *   normals / National Immigration Administration entry policy / 12306 rail ticketing rules /
 *   established guidebook consensus.
 * Facts stated plainly; judgments (best season, worth seeing) written as general guidance, not
 * absolutes. Visa / visa-free-day policy is described only as "relaxed in recent years, check the
 * latest official announcement" — no hard day counts.
 */
export const TRAVEL_CONTENT_EN: Record<string, TravelGuide> = {
  "australia-overview": {
    identity:
      "Australia is almost the size of the whole of Europe with a population of only about 27 million, most of whom live in a handful of cities on the east and south-west coasts; the vast interior is nearly empty. It is its own continent, and much of its wildlife and plant life is found nowhere else. As a Southern Hemisphere country its seasons are reversed — December to February is summer, June to August is winter.",
    layout:
      "Australia divides roughly into four parts: the eastern city belt (Sydney, Melbourne, Brisbane — the demographic and economic core); the arid interior (red desert, Uluru, a scatter of mining and pastoral outposts); the west (the single big city of Perth plus large mining regions); and the island state of Tasmania across the strait. The capital, Canberra, is a mid-sized planned city inland — not the largest city.",
    gettingAround:
      "Distances between cities are huge and interstate travel is essentially by plane (Sydney to Perth is about 5 hours, with a 2–3 hour time difference). Big cities have trains, trams, buses and ferries, paid with a transit card or contactless bank card, but public transport is less dense than in East Asia and a car is easier in many places; Australians drive on the left. Climate-wise: the north (Cairns, Darwin) is hot and humid year-round with a dry and a wet season; the south (Sydney, Melbourne, Adelaide) has four distinct seasons, hot summers and cool winters; the interior has large day–night temperature swings. UV is strong everywhere — sun protection is a given. Food is very multicultural, coffee culture is strong, and tap water is safe to drink.",
    culture:
      "Australia is a country of immigrants; the official language is English, with local accent and slang (afternoon becomes \"arvo\"). Life is relatively relaxed, with a strong focus on the outdoors and the weekend, and shops and many attractions close early or don't open on Sundays and public holidays. Aboriginal peoples are the continent's first inhabitants, with tens of thousands of years of continuous culture; many natural sacred sites and place names are Aboriginal, and visitors follow local guidance. Tipping in restaurants and taxis is not obligatory.",
    seeAndDo:
      "The coastline is Australia's best feature: Sydney Harbour and its beaches, Victoria's Great Ocean Road, the Great Barrier Reef in Queensland, the coral coast of Western Australia. The red desert interior and Uluru are a different kind of experience entirely. The cities each have their own character — Sydney outgoing, Melbourne arty, Brisbane easy-going, Perth isolated. Kangaroos, koalas, dolphins and whales can be seen close up in many places.",
    whenAndTips:
      "The southern cities are most comfortable in spring and autumn (September–November, March–May); the north is best avoided in the November–April wet season and heat, with May–October the dry season. Border controls on food, wood products and plant and animal material are strict — declare everything, and declare if unsure. Citizens of most countries need to apply online for an electronic visa or an Electronic Travel Authority (ETA) before departure; you cannot get one on arrival. Carry plenty of sun protection and water, and for interior driving check road conditions and carry extra fuel and drinking water in advance.",
  },

  sydney: {
    identity:
      "Sydney is Australia's largest city and the capital of New South Wales, with a metropolitan population of about 5.3 million. It is an outgoing city built around a harbour and its beaches, and it is where many people first enter Australia. Finance, tourism and culture are all strong, and the cost of living is the highest in the country. It is not the national capital — that is Canberra.",
    layout:
      "Sydney is built around a huge natural deep-water harbour (Port Jackson), whose inlets cut the city into many peninsulas and bay suburbs. The city centre (CBD) is on the south shore of the harbour, with the Opera House and the Harbour Bridge; to the east are beach areas such as Bondi, and to the west the suburbs run continuously to the foot of the Blue Mountains. The city has no significant high ground — it is a gently rolling sandstone plateau cut by river valleys.",
    gettingAround:
      "There is an airport train from the airport to Central station in about 15–20 minutes (the airport stations charge a separate, fairly high station access fee). Around the city you mostly use trains, light rail, buses and ferries, tapped with an Opal card or a contactless bank card, with a lower daily cap on Sundays. The ferry is the best way to see the harbour. The climate is mild and subtropical-leaning: summer (December–February) is around 26 °C with occasional spells above 35 °C and afternoon thunderstorms; winter (June–August) is about 9–17 °C and rarely cold. UV is strong all year — use sun protection. Food is very diverse, with a Chinatown in the centre and sizeable Korean, Vietnamese and Lebanese communities in the suburbs.",
    culture:
      "Sydney is a classic immigrant city; English is the main language and you hear many others on the street. Life centres on the outdoors — the beach, parks, weekend barbecues. The pace is faster and more business-minded than Melbourne. The New Year's Eve fireworks over Sydney Harbour are one of the first major New Year celebrations in the world. Tipping in restaurants is not required (a service charge is usually included or not charged). Many small shops close on Sundays and public holidays, while supermarkets and big malls stay open.",
    seeAndDo:
      "The signature is the harbour: the Opera House, the Harbour Bridge (bridge climbs by booking), and a ferry from Circular Quay to Manly Beach or Taronga Zoo. The Bondi-to-Coogee coast walk is a classic half-day hike. In the city there are also the Royal Botanic Garden, The Rocks (colonial-era lanes) and Darling Harbour. About 90 minutes west are the sandstone canyons of the Blue Mountains and the Three Sisters.",
    whenAndTips:
      "The most comfortable weather is in spring and autumn (September–November, March–May), and it is not the busiest time either. High summer is peak season — the beaches are liveliest but accommodation is most expensive and hardest to book. Australia Day in late January, Easter, and Christmas to New Year are all high-price periods that need booking ahead. Swim only between the red-and-yellow flags and follow the lifeguards; watch for rip currents. Customs checks on food and plant and animal material are strict — declare honestly.",
  },

  melbourne: {
    identity:
      "Melbourne is the capital of Victoria, with a metropolitan population of about 5 million — Australia's second city, and often compared with Sydney. Its reputation is for the arts, coffee and sport: laneway cafes and street art, a strong live-music and theatre scene, and the yearly Australian Open and Spring Racing Carnival. The weather is famously changeable — locals say it has \"four seasons in one day.\"",
    layout:
      "Melbourne sits at the head of Port Phillip Bay, with the Yarra River running through the centre. The CBD is a regular grid, ringed by inner suburbs each with its own character (Fitzroy, Carlton, St Kilda), and then wide outer suburbs. The land is flat — no sea cliffs or hills; an hour to the north-east is the Yarra Valley wine country, and the Great Ocean Road begins along the coast to the south-west.",
    gettingAround:
      "There is no train from the airport to the city — you use the airport bus or a taxi/rideshare, about 30–45 minutes. The tram network is one of the largest in the world; trams are free inside the CBD (the Free Tram Zone), and there are also trains and buses, paid with a Myki card. Four distinct seasons: summer (December–February) is about 14–26 °C with occasional heatwaves above 40 °C; winter (June–August) is about 7–14 °C, grey and wet but very rarely snowing. Sharp weather changes within a day are common — carry a jacket. The food scene is known for coffee and its many immigrant cuisines; Chinatown is one of the oldest in the Southern Hemisphere.",
    culture:
      "Melbourne is an immigrant city; English is the main language, with large Greek, Italian, Vietnamese and Chinese communities. Life leans toward culture and sport — the weekend is for the football (Australian Rules is close to a religion here), markets and cafes. The pace is a touch slower and more reserved than Sydney. The city is busy and accommodation tight during the Spring Racing Carnival (with a public holiday) in October–November and the Australian Open in January. Tipping is not required.",
    seeAndDo:
      "In the city: Federation Square, the State Library of Victoria, the Royal Botanic Gardens, wandering the CBD laneways for cafes and street art, the Queen Victoria Market. Little penguins come ashore at St Kilda. Out of town: the Great Ocean Road (the Twelve Apostles), the wineries of the Yarra Valley and Mornington Peninsula, the penguin parade on Phillip Island, the gold-rush town of Sovereign Hill.",
    whenAndTips:
      "Spring and autumn (especially March–May and September–November) have relatively settled, comfortable weather; summer brings heatwaves and winter is grey and cold. In any season the temperature can swing sharply within a day — dress in layers. Driving the Great Ocean Road one way takes a full day; don't expect to do it in half a day. Border checks on food and plant and animal material are strict — declare honestly. Citizens of most countries need to apply online for an electronic visa or ETA before departure.",
  },

  brisbane: {
    identity:
      "Brisbane is the capital of Queensland, with a metropolitan population of about 2.6 million — Australia's third-largest city. It is warmer, slower and more casual than Sydney and Melbourne to the south, with sunshine year-round and mild winters. It is the gateway to the Sunshine Coast, the Gold Coast and the southern Great Barrier Reef, and it will host the Summer Olympics in 2032.",
    layout:
      "The city spreads along the winding Brisbane River, which separates the CBD from the South Bank cultural precinct, linked by bridges and ferries. The centre is flat, with a few small hills around it (Mount Coot-tha, with a lookout over the whole city). It is about an hour to the coast to the east, the Sunshine Coast to the north and the Gold Coast to the south.",
    gettingAround:
      "There is an airport train straight to the city, about 20 minutes (with a separate airport station fee). Around the city you mostly use trains, buses and the CityCat river ferries, paid with a go card or a contactless bank card. The climate is subtropical: summer (December–February) is hot and humid, about 21–30 °C, with frequent afternoon thunderstorms, and it is the season when tropical cyclones can have an effect; winter (June–August) is dry and pleasant, about 10–21 °C. UV is strong all year. Dining is casual, concentrated along the river and at South Bank.",
    culture:
      "Brisbane people have a reputation for being relaxed and friendly, and life revolves around the outdoors and the river — South Bank has a man-made beach and pool, and there are many weekend markets. The pace is noticeably slower than Sydney. The mild winter makes it a place other Australians go to escape the cold. Tipping is not required.",
    seeAndDo:
      "The man-made beach and cultural precinct at South Bank, Lone Pine Koala Sanctuary (koalas up close), the Mount Coot-tha lookout, a CityCat ferry along the river. Out of town: north to the Sunshine Coast and Noosa, south to the Gold Coast theme parks and Surfers Paradise, a boat to Moreton Island to see dolphins, or a short flight to the southern Great Barrier Reef.",
    whenAndTips:
      "Winter (May–September) has the most comfortable weather — dry and clear — and is the peak season. Summer is hot, humid and stormy, and November–April is the cyclone season, so check the forecast before travelling. Sun protection matters all year. On beaches watch for marine stingers (especially in the warm season) and rip currents. Quarantine checks on entry are strict — declare honestly. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  perth: {
    identity:
      "Perth is the capital of Western Australia, with a metropolitan population of about 2.2 million, and is called one of the most isolated big cities in the world — thousands of kilometres from the eastern cities, about 5 hours' flight to Sydney with a 2–3 hour time difference. It grew rich on mining and energy, has a Mediterranean climate, and gets the most sunshine of any Australian capital.",
    layout:
      "Perth is on the Swan River, about fifteen kilometres from the Indian Ocean coast. The CBD is right by the river, and the city has large green spaces (Kings Park is one of the biggest inner-city parks in the world, with a view over the whole city). To the west are Fremantle (the old port town) and the Indian Ocean beaches, and Rottnest Island lies off the river mouth. The land is flat.",
    gettingAround:
      "There is an airport train into the city, about 20 minutes. Trains and buses are decent, and there are free buses (CAT) within the CBD. The Mediterranean climate: summer (December–February) is hot and dry, about 18–31 °C, often above 35 °C, with an afternoon sea breeze (the \"Fremantle Doctor\"); winter (June–August) is mild and wet, about 8–18 °C. UV is very strong. The food scene has local seafood and the wines of the Margaret River region.",
    culture:
      "Perth life is relaxed and outdoor-focused — the beach, river sports, barbecues. Because of the isolation there is a strong local identity. The Noongar people are the traditional owners of this area, and the Swan River (Derbarl Yerrigan) is significant in their culture. Tipping is not required.",
    seeAndDo:
      "Kings Park and Botanic Garden, Fremantle's old prison and weekend markets, a boat or ferry to Rottnest Island (to see quokkas and cycle around), sunset at Indian Ocean beaches such as Cottesloe. Out of town: south to the Margaret River wineries, forests and coast; further north, the Pinnacles and the coral coast.",
    whenAndTips:
      "Spring and autumn (September–November, March–May) have the most comfortable weather, and spring is also wildflower season. Summer is hot but dry, with an evening sea breeze. Note the time difference with the east coast when planning interstate travel. Use sun protection and carry water for the outdoors and beaches. Trips further afield are mostly long drives — plan ahead. Quarantine checks on entry are strict. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  adelaide: {
    identity:
      "Adelaide is the capital of South Australia, with a metropolitan population of about 1.4 million. It is a planned city — a square grid in the centre, wrapped by a continuous ring of parkland (the Park Lands). It is known for wine, festivals and a relatively unhurried life, and prices are usually a little lower than in Sydney or Melbourne.",
    layout:
      "Adelaide sits on the plain between Gulf St Vincent and the Mount Lofty Ranges, with the Torrens River through the centre. The CBD is neatly enclosed by the Park Lands, with North Adelaide across the river to the north. East and uphill are the Adelaide Hills; north is the Barossa Valley; south are McLaren Vale and the Fleurieu Peninsula coast, and further south, by ferry, Kangaroo Island.",
    gettingAround:
      "The airport is close to the city (about 15 minutes' drive), with an airport bus and no airport train. Around the city there are buses, trams and trains, and the tram is free within the CBD. The Mediterranean climate: summer (December–February) is dry and hot, about 17–29 °C, with heatwaves above 40 °C; winter (June–August) is cool and wet, about 8–16 °C. It is one of the driest of Australia's big cities. Famous wine regions are right on the doorstep, and the food and produce are very good.",
    culture:
      "Adelaide life is unhurried, and it is called a \"20-minute city\" (nothing is far). February and March are festival season (the Adelaide Festival and Fringe), when the city is at its busiest. It has no convict past in its history, something locals often mention. Tipping is not required.",
    seeAndDo:
      "The Central Market, the Botanic Garden and the museums and galleries along North Terrace, Glenelg beach. Out of town: wine tasting in the Barossa Valley and McLaren Vale, the towns and wildlife parks of the Adelaide Hills, Hahndorf (a German settlement village), and south to Kangaroo Island for sea lions and wildlife.",
    whenAndTips:
      "Spring and autumn (March–May, September–November) have the most comfortable weather; summer brings heatwaves and winter is wet and cold. Accommodation is tight and needs booking ahead during the February–March festival season. If you drive on a wine tour, mind the drink-driving limits, or take a tour with a driver. Quarantine checks on entry are strict — declare honestly. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  cairns: {
    identity:
      "Cairns is in the tropical far north of Queensland — a small city (metropolitan population about 150,000) that runs almost entirely on tourism. It is the base for visiting the northern Great Barrier Reef and the Daintree rainforest — one of the few places on Earth where rainforest meets coral reef. It is hot year-round, with a dry and a wet season.",
    layout:
      "Cairns is wedged between the Coral Sea and steep, rainforest-covered mountains, with only a narrow strip of flat land. The centre runs along an Esplanade (the city itself has no beach — there is a man-made lagoon pool); to the north are a string of beach suburbs and Port Douglas, inland and uphill are the Atherton Tablelands, and out to sea is the reef.",
    gettingAround:
      "The airport is about 10 minutes' drive from the city, with no airport train — you use a taxi/rideshare or a hotel transfer. The city is small and walkable; getting to the sights is mostly by tour bus, rental car or organised tour. The tropical climate: the dry season (May–October) is about 18–29 °C, sunny and less humid, and is the peak season; the wet season (November–April) is hot and sticky, about 23–32 °C, with heavy rain, and is also the season for tropical cyclones and dangerous marine stingers in the sea. Sun protection and insect repellent all year.",
    culture:
      "Cairns is a small tourist city — slow-paced, multicultural and geared to international visitors. There are Aboriginal communities in the surrounding area, and some rainforest and reef tours are run by Aboriginal operators who explain their relationship with the land and sea. Tipping is not required.",
    seeAndDo:
      "A trip out to the Great Barrier Reef to snorkel or dive (day tours or multi-day liveaboard trips); the rainforest village of Kuranda (scenic railway up, cable car down); the Daintree rainforest and Cape Tribulation (where rainforest runs straight to the beach); the waterfalls and volcanic lakes of the Atherton Tablelands. In the city, the lagoon pool and night markets.",
    whenAndTips:
      "The dry season (May–October, especially June–September) has the best weather and is the peak season — reef and rainforest trips need booking ahead. The wet season is hot and rainy, and from November to May the sea has deadly box jellyfish and Irukandji; swim only in netted areas or wear a stinger suit, and follow local advice. Strong sun protection and insect repellent all year. Quarantine checks on entry are strict. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  darwin: {
    identity:
      "Darwin is the capital of the Northern Territory, with a metropolitan population of about 140,000 — the smallest of Australia's capitals and the closest to Asia (Bali is a shorter flight than Sydney). It is in the tropics, with only a dry and a wet season, and is hot year-round. It is the gateway to Kakadu and Litchfield national parks, and has a World War II and multicultural history.",
    layout:
      "Darwin is on a peninsula reaching into the Timor Sea, with water on three sides. The centre is small, with dining and sights concentrated near the waterfront. The land is flat. Kakadu is about 2–3 hours' drive to the east, Litchfield about 1.5 hours to the south, and the \"Red Centre\" is much further south (a long drive or a flight).",
    gettingAround:
      "The airport is about 15 minutes' drive from the city, with no airport train — you use an airport bus or a taxi/rideshare. The city is small and walkable; reaching the national parks needs a rental car or a tour (in the wet season some roads close due to flooding). The tropical climate: the dry season (May–October) is about 21–32 °C, sunny, low humidity and almost no rain, and is the peak season; the wet season (November–April) is hot, about 25–33 °C, with very high humidity, strong thunderstorms, monsoon rain and tropical cyclones. Food is multicultural with a strong South-East Asian influence, and the open-air markets (such as the Mindil Beach sunset market) are well known.",
    culture:
      "Darwin's population is very mixed, with high proportions of Aboriginal people and Asian migrants; life is slow-paced, with a strong outdoor and market culture. The Northern Territory has large areas of Aboriginal-owned land (including Arnhem Land), which need a permit to enter. Follow guidance when visiting Aboriginal sacred sites and rock art at Kakadu and elsewhere. Tipping is not required.",
    seeAndDo:
      "The waterfront precinct, the WWII oil storage tunnels, and the Mindil Beach sunset market (dry season). Out of town: the rock art (Ubirr, Nourlangie), wetlands and waterfalls of Kakadu; the waterfalls and termite mounds of Litchfield; a boat trip to see leaping saltwater crocodiles.",
    whenAndTips:
      "The dry season (May–October, especially June–August) is the only comfortable time and the only good time for the national parks; accommodation in peak season needs booking ahead. The wet season is hot, stormy and floods some roads, and while the waterfalls are full some sites close. Never swim in water that may hold saltwater crocodiles (many calm-looking rivers and pools do) — swim only where it is clearly signed safe. Sun protection, insect repellent, and drink plenty of water. Quarantine checks on entry are strict. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  "china-overview": {
    identity:
      "China covers about as much land as the whole of Europe and has a population of roughly 1.4 billion, one of the largest in the world. The land is broadly high in the west and low in the east: the west is the Tibetan Plateau plus large mountain and desert country, thinly populated; the east is plains, hills and great rivers, where most of the people and big cities are. It has thousands of years of continuous written history; dialects vary widely, but Mandarin is the common language.",
    layout:
      "China divides roughly into a few blocks: the eastern coastal city belt (the Beijing–Shanghai–Guangzhou–Shenzhen line, the centre of the economy and population); the North China Plain and Yellow River basin (the heartland of early Chinese civilisation); the Yangtze basin (from the Sichuan Basin down to the lower Yangtze — dense population, rich land); the mountainous southwest (the Yunnan–Guizhou Plateau and Hengduan ranges, many ethnic groups and mountain landscapes); and the vast west (the Tibetan Plateau, and the basins and deserts of Xinjiang). The capital is Beijing; the largest economic centre is Shanghai.",
    gettingAround:
      "The high-speed rail network between cities is excellent — most neighbouring big cities are a few hours apart. You need photo ID to buy tickets and to enter stations; foreign passports usually go through a staffed verification lane. Within big cities the metro is dense and cheap, with buses and ride-hailing widely available. Everyday payment is mostly by phone QR code (Alipay, WeChat Pay); both now let overseas visitors link a foreign bank card. Cash is still legal but awkward in some places — carry a little. Note that many non-mainland-China apps and sites (some search, social, maps and email services) are not directly reachable inside China; arrange alternatives before you travel. Tap water is generally not drunk unboiled; restaurants and hotels provide hot water or bottled water.",
    culture:
      "The common language is Mandarin, with widely varying local dialects on top. In big cities and among younger people, English signage and simple English are usually fine, but don't count on it everywhere. Tipping is not expected in restaurants or taxis. You need your actual passport to check into hotels, buy train tickets and enter many sights; if you stay somewhere that isn't a hotel (a guesthouse, a friend's home) you generally must register with the local police station within 24 hours. Public places and transport have a lot of surveillance; general public safety is good. Regional cuisines differ enormously — one of the pleasures of travelling here.",
    seeAndDo:
      "The classic itineraries pair history with landscape: Beijing for the Forbidden City and the Great Wall; Xi'an for the Terracotta Army and a Tang-era city plan; the east for the cities and gardens of Shanghai, Suzhou and Hangzhou; the southwest for Sichuan's mountains and pandas and Yunnan's ethnic-minority towns; Guilin and Zhangjiajie for karst and sandstone pinnacles; and further west, the extreme landscapes of the Tibetan Plateau and Xinjiang. The modern skylines, night markets and the high-speed trains themselves are part of the experience.",
    whenAndTips:
      "North and south differ sharply: the north has cold winters and hot summers, and North China's winter air quality is sometimes poor; the south is humid, with hot muggy rainy summers and coastal typhoons (roughly July–September). Spring (April–May) and autumn (September to mid-October) are the most comfortable overall. Avoid the two nationwide holidays: Spring Festival (Lunar New Year, in January or February) and the National Day golden week (about a week from 1 October) — sights, transport and hotels are at their most crowded and expensive and need booking far ahead. Entry rules have been relaxed considerably in recent years (citizens of some countries get a number of visa-free or transit-visa-free days); check the National Immigration Administration's latest announcement for specifics.",
  },

  beijing: {
    identity:
      "Beijing is China's capital and its political and cultural centre, with a metropolitan population of about 20 million. It has over three thousand years of settlement and more than eight hundred as a capital; the Ming–Qing imperial city plan is still legible today. The city is large in scale — the main sights are spread between the central axis and a set of ring roads, so expect distances.",
    layout:
      "Beijing sits at the northwest corner of the North China Plain; the Yan and Western Hills rise to the north and west, and the Great Wall runs along those ridgelines. The built-up area itself is flat. The city radiates in rings (2nd Ring to 6th Ring) from the Forbidden City; the 2nd Ring roughly traces the old city wall, and the traditional hutong alleys and courtyard houses are concentrated inside it.",
    gettingAround:
      "Capital Airport has an express rail link into the metro network; Daxing Airport has its own dedicated line. The metro is extensive and the fastest way around, but jammed at peak hours. Metro and buses take a phone QR code or a transit card; ride-hailing is easy. The city is big and traffic is common, so allow time when crossing districts. Shared bikes work well for short hops around the hutongs and near sights.",
    culture:
      "The Beijing accent has a strong rhotic 'er' ending, and locals have a reputation for being direct and talkative. City life is fast-paced but sets store by courtesy and personal ties. No tipping. In winter, interiors have central heating while it's dry and cold outside — a big temperature gap. Don't photograph government buildings or the embassy district freely. Parts of the city can be temporarily restricted during major events.",
    seeAndDo:
      "The core is the group of imperial buildings and gardens — the Forbidden City, Tiananmen Square, the Temple of Heaven, the Summer Palace. The Mutianyu and Jinshanling stretches of the Great Wall are less crowded and scenic. The hutong districts (around Nanluoguxiang and Shichahai) are good on foot or by bike. The 798 art district, the National Museum of China and various modern venues are the other side of the city. Roast duck, zhajiang noodles and instant-boiled mutton are the local dishes.",
    whenAndTips:
      "Spring (April–May) and autumn (September to mid-October) are the most comfortable; the crisp clear autumn is the traditional travel season. Summer (June–August) is hot, with frequent thunderstorms in July–August; winter (December–February) is cold and dry, and air quality during the heating season is sometimes poor — watch the daily air-quality index and carry a mask. The Forbidden City and the Great Wall are extremely crowded in peak season and at weekends; the Forbidden City needs an advance ID-based booking and is closed on Mondays. Avoid the National Day and Spring Festival golden weeks.",
  },

  shanghai: {
    identity:
      "Shanghai is China's largest city and its economic and financial centre, with a metropolitan population of about 25 million, and the entry point for many international flights. It is a port and commercial city that rose in the modern era, with Chinese and Western architecture and ways of life intertwined — fast-paced, with a mature service sector and a relatively international feel.",
    layout:
      "Shanghai is on the south bank of the Yangtze estuary at the eastern edge of the Yangtze Delta, and it is very flat. The Huangpu River splits the city into Puxi and Pudong: Puxi has the Bund, the plane-tree streets of the old concessions and the city centre; Pudong has the Lujiazui skyscraper cluster, and Pudong Airport (one of the city's two) is on this side. Suzhou Creek crosses the northern part of the city. There are no hills; beyond the city is continuous plain and canal towns.",
    gettingAround:
      "Pudong Airport has a maglev train and a metro line into town; Hongqiao Airport adjoins Hongqiao railway station with a direct metro link. The metro network is one of the largest in the world — well-covered, punctual, and the first choice. Pay by phone QR code or transit card; taxis and ride-hailing are plentiful. The city is flat and its blocks are walkable, the old concession area especially so.",
    culture:
      "Mandarin is universal; the local Shanghainese dialect is still common among older residents. The urban service sector is developed, rule-bound and efficient. No tipping. The plane-tree streets of the old concessions are strong on cafes, boutiques and Western food; local Shanghai cuisine is rich, soy-braised and a little sweet. Summers are hot and humid, and interiors are heavily air-conditioned.",
    seeAndDo:
      "See the skyline across the river from the Bund, and go up one or two observation towers in Pudong for the overview; walk the old concessions (around Wukang Road, Hengshan Road, Tianzifang) for the historic architecture; Yu Garden and the City God Temple are the old town's garden and market. An hour by high-speed rail reaches Suzhou, Hangzhou and canal towns like Wuzhen. The city's museums, galleries and performances are among the best in the country.",
    whenAndTips:
      "Spring (late March–May) and autumn (October–November) have the best weather. Summer (June–August) is hot and humid; the plum-rain season (roughly mid-June to mid-July) brings persistent drizzle, and July–September can be affected by typhoons; winter (December–February) is damp and cold — usually 0–10 °C but feeling colder, with snow rare. Golden-week holidays leave the sights and the surrounding canal towns extremely crowded. Book ahead for popular exhibitions and shows.",
  },

  guangzhou: {
    identity:
      "Guangzhou is the capital of Guangdong province and the hub of southern China, with a metropolitan population of about 18 million. It has more than two thousand years as a trading port, was one of the main starting points of the Maritime Silk Road, and hosts the twice-yearly Canton Fair. It is practical, commercial and full of daily life, with a strong culture of morning tea and late-night eating.",
    layout:
      "Guangzhou is at the northern edge of the Pearl River Delta, with the Pearl River running through it; the land is gentle, with the low hills of Baiyun Mountain to the north. The city stretches east–west along the river: the old districts (Yuexiu, Liwan) keep their arcaded shophouse streets and the Xiguan character; Zhujiang New Town is the new CBD. South, down the Pearl River estuary, is the Greater Bay Area conurbation running through Foshan, Dongguan, Shenzhen, Hong Kong and Macau.",
    gettingAround:
      "Baiyun Airport has a metro line straight into the city; Guangzhou South is the southern China high-speed rail hub, quick to Shenzhen, Hong Kong, Guilin and more. The city metro is dense and cheap, with buses and ride-hailing throughout; pay by phone QR code or transit card. The city is flat and summers are hot, so people often take the metro even for short trips rather than walking.",
    culture:
      "The local language is Cantonese, with Mandarin also fully usable. One centre of life is eating — morning tea (yum cha) from early to midday, late-night meals until the small hours; sweet soups, roast meats and long-simmered soups are everyday food. No tipping. The climate is hot and humid, and local food thinking includes ideas about 'clearing damp' and 'reducing heat'. Watch typhoon warnings in summer and autumn.",
    seeAndDo:
      "The European buildings of Shamian Island, the arcaded old streets of Shangxiajiu and Yongqingfang, the Lingnan wood and stone carving of the Chen Clan Ancestral Hall, the Five Rams statue in Yuexiu Park; a night cruise on the Pearl River for the lit-up banks. A proper morning tea is the best way to understand local life. Nearby: Foshan for the Ancestral Temple and martial-arts culture, and Shunde, known for its food.",
    whenAndTips:
      "Autumn and winter (November–February) are cool, dry and the most comfortable, and the peak season. Spring (March–April) brings the 'return of the south wind' — humid, with walls and floors sweating; summer (May–September) is hot, wet and muggy and the main typhoon season, so check warnings before travelling. Hotels are tight and expensive during the Canton Fair (spring and autumn).",
  },

  shenzhen: {
    identity:
      "Shenzhen, in southern Guangdong right next to Hong Kong, grew from a border town into a major city after China's reform and opening, with a metropolitan population of about 17 million and a very young average age. It is known for tech manufacturing, startups and modern urban planning; there are few historic sites and the cityscape is new.",
    layout:
      "Shenzhen is long and narrow east–west, wedged between the Pearl River estuary and hills. It has several centres: Futian is the administrative and financial core, Luohu adjoins the Hong Kong border crossings and is the old town, Nanshan is where tech companies cluster, and Qianhai is a new development zone. The city is green, with country parks such as Wutong Mountain and a stretch of coast in the east.",
    gettingAround:
      "Bao'an Airport has a metro line into the city; Shenzhen North and Futian are high-speed rail hubs. The metro is new, clean and well-covered, and the main way to get around; pay by phone QR code or transit card. For Hong Kong, cross at Futian, Luohu, Shenzhen Bay and other checkpoints — bring a valid Mainland Travel Permit or passport with the right endorsement/visa, and allow time to queue.",
    culture:
      "An immigrant city with residents from all over China; Mandarin is universal and Cantonese is less prevalent than in Guangzhou. The pace is fast with a visible overtime culture; retail and dining choices are wide and turn over quickly. No tipping. The city is well run, with good public transport and a walkable environment.",
    seeAndDo:
      "Shenzhen's appeal leans contemporary: the galleries and creative parks of OCT, the coastline and harbour development in Nanshan, the skyline view from Lianhuashan Park, and the beaches and old fort town of the Dapeng Peninsula. The electronics markets (Huaqiangbei) are a draw. Many people use Shenzhen as a stopover to and from Hong Kong.",
    whenAndTips:
      "Autumn and winter (November–February) are cool and comfortable, the best season. Summer (May–September) is hot with heavy rain and frequent typhoons. Going to and from Hong Kong, allow time for the border crossing (long queues at peak times) and check that your documents and endorsements are valid.",
  },

  chengdu: {
    identity:
      "Chengdu is the capital of Sichuan and one of the hubs of southwest China, with a metropolitan population of about 20 million. It sits on the fertile Chengdu Plain, historically called the 'land of abundance', and is known for its unhurried pace of life, numbingly spicy food and giant pandas. It is also the gateway to the western Sichuan plateau and Tibetan areas.",
    layout:
      "Chengdu is on the Chengdu Plain in the western Sichuan Basin and is very flat; the Dujiangyan irrigation works have watered this plain for over two thousand years. The city expands by ring roads, with Tianfu Square the traditional centre and the Tianfu New Area to the south. An hour or two west, the land rises quickly into the Hengduan ranges and the eastern edge of the Tibetan Plateau.",
    gettingAround:
      "Chengdu has two airports: Shuangliu, close to the city with a direct metro line, and the more distant Tianfu, with an airport express and intercity rail. The metro network has grown fast and covers the city well, with easy buses and shared bikes; pay by phone QR code or transit card. The city is flat and good for cycling. Western Sichuan sights like Jiuzhaigou and Daocheng Yading are a long way off on mountain roads at altitude — allow plenty of time and be ready for altitude sickness.",
    culture:
      "The Sichuan dialect is spoken, with Mandarin also fully usable. Local life is famously relaxed — teahouses, hotpot and mahjong are everyday. No tipping. The food is numbing, spicy and aromatic; you can ask for 'no chilli' or 'mild' in advance, but a number of classic dishes are inherently hot.",
    seeAndDo:
      "The Giant Panda Breeding Research Base (pandas are most active in the morning); in town, the Kuanzhai Alleys, Jinli and the old teahouses of People's Park; Wuhou Shrine and Du Fu's Thatched Cottage for Three Kingdoms and Tang history. Out of town: Dujiangyan and Mount Qingcheng (a day), the Leshan Giant Buddha and Mount Emei (1–2 days); further west, alpine landscapes at Mount Siguniang and Daocheng Yading. Hotpot and skewers are worth trying.",
    whenAndTips:
      "Spring (March–April) and autumn (September–October) are the most comfortable. The basin is cloudy year-round with little sun and high humidity; summer (June–August) is muggy and wet; winter (December–February) is grey and cold, mostly 3–10 °C, with snow rare. For the western Sichuan plateau, in any season bring sun protection and warm clothing and be prepared for altitude sickness above 3,000 m. Roads in western Sichuan jam badly during golden weeks.",
  },

  chongqing: {
    identity:
      "Chongqing is a directly-administered municipality in southwest China; its core urban area holds about 10 million people, with more across the wider municipality. It is built on hilly ground where the Yangtze and Jialing rivers meet, and is known as the 'mountain city' — the three-dimensional terrain stacks roads, rail and buildings on top of each other, and the night views are distinctive. It is also the traditional start of Yangtze Three Gorges cruises.",
    layout:
      "Central Chongqing sits on the peninsula between the Yangtze and the Jialing and on the hillsides of both banks, with almost no flat ground. The Yuzhong Peninsula is the old centre (Jiefangbei, Hongyadong). The city is cut by rivers and hills into many clusters, linked by bridges and tunnels. East is the Yangtze cutting the Three Gorges; southeast is the Wuling mountain region.",
    gettingAround:
      "Jiangbei Airport has a rail link into the city. Getting around is mostly by rail transit; lines 2 and 3 have famous riverside and through-building stretches. Because of the terrain, different exits of the same station can be several floors apart — watch exit numbers when navigating. Pay by phone QR code or transit card. Walking involves a lot of slopes and stairs, tiring in summer. The cross-river cable car is a preserved piece of old transport, now mostly for sightseeing.",
    culture:
      "The Chongqing dialect, close to Sichuanese, is spoken, with Mandarin usable. Locals have a reputation for being blunt and forthright, and life revolves around hotpot and the riverside. No tipping. Chongqing hotpot is known for beef tallow, numbing chilli and strong flavour — say so in advance if you're sensitive to spice, and you can order a split pot. Summers are extremely hot; the city is one of China's noted 'furnaces'.",
    seeAndDo:
      "Hongyadong, the Yangtze cable car and the 'monorail through a building' at Liziba are popular photo spots; Jiefangbei and the Mountain City Trail give a feel for the vertical city; the One Tree lookout on Nanshan for the night view over both rivers. Out of town: a cruise through the Yangtze Three Gorges (Chongqing to Yichang, about 2–4 days), the Dazu Rock Carvings (Tang–Song cliff sculpture, a day), and the karst sinkholes at Wulong (a day).",
    whenAndTips:
      "Spring (March–April) and autumn (October–November) are more comfortable. Summer (July–August) is fiercely hot, often above 38 °C in the day — avoid midday outdoors; winter (December–February) is grey, damp, foggy and short on sun. The city is full of slopes and steps, so wear comfortable shoes and pack light. Book Three Gorges cruises ahead in peak season (spring, autumn, golden weeks).",
  },

  xian: {
    identity:
      "Xi'an is the capital of Shaanxi province, with a metropolitan population of about 13 million. It was the capital under several Chinese dynasties — the Zhou, Qin, Han and Tang most importantly — and the eastern end of the Silk Road. Its intact Ming-era city wall, the Terracotta Army and a large number of imperial tombs make it one of the most concentrated places to understand ancient Chinese history.",
    layout:
      "Xi'an is on the Guanzhong Plain south of the Wei River, ringed by the Qinling Mountains (to the south) and loess terraces, with a flat city centre. The old city is enclosed by a complete Ming-era wall, the Bell Tower at its centre, with four avenues running out symmetrically north, south, east and west; the modern city is outside the wall. The Terracotta Army and the mausoleum of the First Emperor are at Lintong, about 40 km east.",
    gettingAround:
      "Xianyang Airport has an airport intercity rail line and buses into town. The city has a metro and buses; pay by phone QR code or transit card. The old city's grid makes it easy to navigate and good for cycling or walking, and you can rent a bike to ride the full circuit of the wall (about 14 km). For the Terracotta Army, take the metro then a bus or the intercity line, or a tourist coach.",
    culture:
      "The Guanzhong dialect is spoken, with Mandarin usable. The food centres on wheat and beef and mutton — roujiamo, cold liangpi noodles, yangrou paomo, various wide noodles — and the Muslim Quarter is the concentration of halal street food. No tipping. The city has a heavy sense of history and locals are proud of it.",
    seeAndDo:
      "The Terracotta Army and the First Emperor's mausoleum are the core (a guide or audio guide helps); in the old city, the wall, the Bell and Drum Towers, the Forest of Steles; the Big Wild Goose Pagoda and the Daming Palace site for the Tang era; the Shaanxi History Museum needs an advance booking. Eat in the Muslim Quarter. Out of town: Mount Hua (a steep granite mountain, a day — mind your stamina and the queues), Famen Temple, the Han Yang Ling.",
    whenAndTips:
      "Spring (April–May) and autumn (September–October) are the most comfortable. Summer (June–August) is hot, with rain in July–August; winter (December–February) is cold and dry with central heating, and air quality is sometimes poor. The Terracotta Army and the museums are crowded in peak season and at weekends — arrive early; several venues close on Mondays and need an ID booking. Queues at Mount Hua can be very long on public holidays.",
  },

  hangzhou: {
    identity:
      "Hangzhou is the capital of Zhejiang province, with a metropolitan population of about 12 million, known for West Lake. It was the capital of the Southern Song and the southern end of the Grand Canal. It combines lake-and-hill gardens with a modern digital economy, and is a major tourism and tech city in the Yangtze Delta.",
    layout:
      "Hangzhou is at the southern edge of the Yangtze Delta on the lower Qiantang River. West Lake — hills on three sides, the city on the fourth — is the heart of the city. The old town and commercial area are east of the lake; the new city centre (Qianjiang New City) is on both banks of the Qiantang River. West and south of the city are hills, tea slopes and stream valleys (Longjing, the Xixi wetland).",
    gettingAround:
      "Xiaoshan Airport has a metro line and buses into town. The metro network is expanding fast, with easy buses and shared bikes; pay by phone QR code or transit card. Around West Lake there are buses, sightseeing carts and boats; a full circuit of the lake on foot or by bike takes most of a day.",
    culture:
      "The Hangzhou dialect (a branch of Wu) is spoken, with Mandarin fully usable. Life is relatively unhurried — tea, gardens and lakeside walks are everyday. No tipping. Hangzhou cuisine is light and slightly sweet; Longjing shrimp, West Lake vinegar fish and Dongpo pork are the signatures.",
    seeAndDo:
      "West Lake is the core: the Su and Bai causeways, the Broken Bridge, Leifeng Pagoda, the Three Pools Mirroring the Moon — best at dusk and early morning. Lingyin Temple and the Feilai Peak carvings are in the hills west of the lake; see the tea terraces at Longjing village and take a boat in the Xixi wetland. The Gongchen Bridge historic district by the Grand Canal is good on foot. Nearby: canal towns like Wuzhen and Xitang, or high-speed rail to Shanghai and Suzhou.",
    whenAndTips:
      "Spring (March–April, West Lake in the drizzle especially) and autumn (October–November, the osmanthus season) have the most character. Summer (June–August) is hot and humid with a long plum-rain spell; winter (December–February) is damp and cold. West Lake is very crowded on holidays and weekends — nearly impassable during golden weeks — so visit on a weekday or at dawn.",
  },

  kunming: {
    identity:
      "Kunming is the capital of Yunnan province, with a metropolitan population of about 8.5 million, at an elevation of roughly 1,900 m. Its mild, weakly-seasonal climate has earned it the name 'spring city'. It is the transport hub and staging point for the rest of Yunnan — Dali, Lijiang, Xishuangbanna, Shangri-La — and a gateway city toward Southeast Asia.",
    layout:
      "Kunming lies in a fault basin on the Yunnan–Guizhou Plateau, with Dianchi (Yunnan's largest lake) to the south and low hills all around. The city centre is fairly flat, with the old core near the middle of town and the newer administrative and convention area to the south. The most classic Yunnan route runs northwest via Chuxiong to Dali and Lijiang.",
    gettingAround:
      "Changshui Airport has a metro line and buses into town and is the main hub for flights within Yunnan and to Southeast Asia. The city has a metro and buses; pay by phone QR code or transit card. The centre is compact and the main sights are reachable by taxi. For other cities in the province, take high-speed rail (Kunming–Dali and Kunming–Lijiang are now connected) or fly.",
    culture:
      "Southwestern Mandarin (the Kunming dialect) is spoken, with Mandarin usable. Yunnan is an ethnically diverse province; Kunming itself is majority Han but you can encounter the food and crafts of many groups. No tipping. Local specialities include crossing-the-bridge rice noodles, wild mushrooms (in season roughly June–September — eat them only at proper restaurants, thoroughly cooked) and flowers used in cooking.",
    seeAndDo:
      "In town: Green Lake (black-headed gulls in winter), the Jinma-Biji archways, Yunnan Nationalities Village; just outside, the Dragon Gate on Western Hill overlooking Dianchi, the Stone Forest (karst, a day) and the Jiuxiang caves. Kunming is mostly a starting point for deeper Yunnan travel — most people transit here on the way to Dali, Lijiang, Shangri-La and Xishuangbanna.",
    whenAndTips:
      "Kunming's seasons vary little — daytime is mostly 15–25 °C — but UV is strong and the day-night swing is large, so carry a jacket year-round and mind the sun. The dry season (November–April) is sunnier and more comfortable; the wet season (May–October) brings afternoon showers. At about 1,900 m a few people feel mild altitude effects; going on to Shangri-La (about 3,300 m) needs preparation for altitude sickness.",
  },

  guilin: {
    identity:
      "Guilin, in northeastern Guangxi, is a tourism city famous for its karst scenery, with an urban population of about 1.3 million. The limestone pinnacle clusters rising from the banks of the Li River are one of China's most iconic natural landscapes. The city itself is small and largely built around tourism.",
    layout:
      "The city straddles the Li River, dotted with isolated peaks, and the compact centre is walkable. The most classic Li River scenery is on the roughly 80 km between Guilin and Yangshuo; Yangshuo is a smaller tourist town with denser countryside and pinnacles, and many people base themselves there. The Longji rice terraces are in the mountains north of Guilin.",
    gettingAround:
      "Liangjiang Airport has buses into the city; Guilin has high-speed rail to Guangzhou, Guiyang, Nanning and more. Between Guilin and Yangshuo you can take a Li River cruise (about 4–5 hours, lunch included), a bamboo raft (only part of the river), or high-speed rail or bus (about 1–1.5 hours). Yangshuo and the countryside are good by e-bike or bicycle. City buses and taxis are easy; pay by phone QR code.",
    culture:
      "Southwestern Mandarin (the Guiliu dialect) is spoken, with Mandarin usable; there are Zhuang, Yao and other ethnic-minority villages around. Tourism services are well developed, but choose official boat tickets and day tours and avoid touts. No tipping. Guilin rice noodles are the everyday breakfast.",
    seeAndDo:
      "A Li River cruise or bamboo raft for the reflected pinnacles; in Yangshuo, West Street, the Yulong River, Moon Hill, and cycling the countryside; the Longji terraces (Jinkeng, Ping'an — most photogenic at spring flooding and autumn harvest, usually a separate 1–2 days); in the city, Elephant Trunk Hill, the Two Rivers and Four Lakes night cruise, and the Jingjiang Princes' residence. The Impression Sanjie Liu outdoor show is at Yangshuo.",
    whenAndTips:
      "April–October has good water levels and scenery on the Li River, but is also the rainy season, with common showers and short downpours; July–August is hottest. Winter (December–February) is chilly with lower water, and fog when cold air arrives. Qingming, May Day, National Day and the summer holiday are peak periods — book boat tickets and Yangshuo accommodation ahead. During floods, river sections are occasionally rerouted at short notice.",
  },

  nanjing: {
    identity:
      "Nanjing is the capital of Jiangsu and one of the main cities of the lower Yangtze, with a metropolitan population of about 9 million. It served as the capital under several dynasties, and long stretches of Ming-era city wall, several imperial tombs and Republican-era buildings give it a deep historical layering. It is an industrial and academic centre and an important transport hub for eastern China.",
    layout:
      "Nanjing sits on the east bank of the Yangtze among the Ningzhen hills, broken up by Purple Mountain, a string of smaller hills, Xuanwu Lake and the Qinhuai River. The old city centres on Xinjiekou; east is the wooded belt of Purple Mountain with Sun Yat-sen's Mausoleum and the Ming tombs, south is the old southern city around the Confucius Temple and the Qinhuai, and across the river is the Jiangbei new district. Low hills surround the city — it is not a plains city.",
    gettingAround:
      "Lukou Airport is linked to the city by metro line S1; Nanjing is a hub on the Beijing–Shanghai and other high-speed lines, about 1.5 hours to Shanghai and 3.5 hours to Beijing. The city metro network is extensive; pay by QR code. The climate is subtropical monsoon with four clear seasons: hot, muggy summers (often above 35°C in July–August — one of the famous \"furnace\" cities), damp cold winters with occasional snow, and short, comfortable springs and autumns. The food is Huaiyang style, with many duck dishes (salted duck, duck-blood vermicelli soup) and refined dim sum.",
    culture:
      "The local speech is the Nanjing variety of Jianghuai Mandarin, with Mandarin widely used. The city has a relatively gentle temperament and an unhurried pace. The plane-tree-lined streets were planted in the Republican era. Around Qingming there is a custom of hillside tomb-sweeping. Tipping is not customary. Many museums and memorial halls close some galleries on Mondays and require advance ID-based booking.",
    seeAndDo:
      "Sun Yat-sen's Mausoleum and the Ming Xiaoling tomb (Purple Mountain, half a day to a day); the Ming city wall and the Zhonghua Gate barbican; the Confucius Temple and Qinhuai River (night views and snacks); Xuanwu Lake; the Memorial Hall of the Victims of the Nanjing Massacre (a solemn site — be respectful); the Nanjing Museum; the Presidential Palace. Niushou Shan and Qixia Shan (autumn leaves) are on the outskirts.",
    whenAndTips:
      "Spring and autumn (March–May, September–November) are the most comfortable and the best for the plane trees and autumn colour. High summer is very hot and needs heat precautions; the plum-rain season (about mid-June to mid-July) is wet. May Day, National Day and the summer holiday are busy — book the Mausoleum and the museum early. High-speed rail links to Shanghai, Hangzhou, Yangzhou and Zhenjiang make combined trips easy.",
  },

  sanya: {
    identity:
      "Sanya is at the southern tip of Hainan Island and is China's main tropical beach resort city, with a resident population of about 1 million and a large influx of visitors in winter. Its draw is the year-round warm climate, the bay beaches and the cluster of resort hotels, and the city functions almost entirely around tourism and holidays.",
    layout:
      "The city centre is at the mouth of the Sanya River, flanked by several bays each with its own character: Dadonghai is close to the centre and convenient; Yalong Bay, about 25 km east, has good sand and mostly upmarket resorts; Haitang Bay, farther east, is the newer hotel and duty-free shopping area; while Tianya Haijiao and the Nanshan area to the west are more sightseeing. Low tropical hills rise behind the city.",
    gettingAround:
      "Phoenix Airport is about 15 km from the centre, with an airport express and taxis. The Hainan island-loop high-speed railway connects Sanya with Haikou, Bo'ao and Lingshui, with the station on the west side of the city. City buses and taxis are easy; getting to the bays is mostly by taxi or hotel shuttle. The climate is tropical maritime, hot all year, with a rainy and typhoon season from May to October and dry, warm, peak-season winters (December–February). Sun and UV are strong year-round.",
    culture:
      "Locals speak Hainanese (a Min language) and Mandarin, and many tourism workers come from off the island. The pace is slow and open-air seafood stalls are part of daily life. When buying seafood or fruit, use proper markets with clear pricing and re-weighing. For diving, speedboats and other water activities, choose licensed operators and check equipment and insurance. Tipping is not customary.",
    seeAndDo:
      "The beaches and water activities of Yalong, Haitang and Dadonghai bays; Wuzhizhou Island (snorkelling and diving); the Nanshan cultural park and Tianya Haijiao; the Yalong Bay tropical forest park overlooking the bay; the No. 1 Market for seafood and Luhuitou for night views. Haitang Bay has a large duty-free mall.",
    whenAndTips:
      "November to April has the most settled, comfortable weather and is also the most expensive and hardest to book, with New Year and Spring Festival especially tight — book well ahead. May–October is much cheaper but hot and humid with afternoon thunderstorms, and from July to October watch typhoon forecasts closely, as flights and water activities stop around storms. Use sun protection throughout, and swim only where there are lifeguards, watching for rip currents.",
  },

  lhasa: {
    identity:
      "Lhasa is the capital of the Tibet Autonomous Region, set in the valley of the Lhasa River, a tributary of the Yarlung Tsangpo, at about 3,650 m — the destination on this network where altitude sickness most needs to be taken seriously. The city is not large; it is Tibet's administrative, transport and cultural centre and the starting point for most Tibet itineraries.",
    layout:
      "Lhasa is built on a relatively flat stretch of valley on the north bank of the Lhasa River, ringed by bare high mountains. The old town centres on the Jokhang and the Barkhor circuit around it; the Potala Palace stands on Red Hill to the north-west of the old town, with the administrative and new districts to the west and the Norbulingka in the western suburbs. The city runs east–west along the valley, with farmland and higher snow ranges close outside town.",
    gettingAround:
      "Gonggar Airport is about 60 km south-west of the city, roughly an hour by airport bus or taxi. The Qinghai–Tibet railway station is on the south side of the city. City buses and taxis are adequate, and the old town is walkable. The climate is cold, high and dry with very strong sun: mild for much of the day, cold at night, a wide day-to-night range, and cold but often clear winters. Sun protection, warm layers and plenty of water are needed year-round.",
    culture:
      "Tibetan and Mandarin are spoken. Tibetan Buddhism is the main religious tradition, and monasteries and pilgrim circuits are part of daily life: at monasteries dress modestly, remove hats, keep quiet, walk clockwise, ask before photographing images, monks or ceremonies, and note that photography is usually forbidden inside the halls. The food centres on tsampa, butter tea, beef and wheat noodles.",
    seeAndDo:
      "The Potala Palace (advance booking, timed entry, strict security); the Jokhang and the Barkhor (the early-morning pilgrim circuit has the most atmosphere); the Norbulingka; Drepung and Sera monasteries on the hillslopes, with debating at Sera. Farther out are Yamdrok Lake and Namtso (a same-day return is tiring — an overnight is better).",
    whenAndTips:
      "Important: to enter Tibet, foreign visitors need a Tibet Travel Permit in addition to their Chinese visa, and normally must travel with a licensed tour operator on a pre-declared itinerary in a group — independent travel is not permitted, so arrange this through an agency well in advance. For the first day or two, slow down, avoid hard exertion, drink plenty of water and skip alcohol, and anyone with a serious heart or lung condition should get medical advice first. The better windows are roughly April–May and September–October; winter is cold but the skies are bluer and there are fewer people.",
  },

  harbin: {
    identity:
      "Harbin is the capital of Heilongjiang and the main city of the northern north-east, with a metropolitan population of about 5.5 million. It grew up around the railway and had a large foreign, mostly Russian, community in its early decades, which left blocks of European-style architecture and the nickname \"the Oriental Moscow\". Winters are severe, and it is the leading city for ice-and-snow tourism in China.",
    layout:
      "Harbin is built on the flat Northeast Plain on the south bank of the Songhua River. The core runs from Central Street (a cobbled pedestrian street) to the flood-control monument, the \"Chinese Baroque\" quarter of Laodaowai, and the area around St Sophia Cathedral; across the river are Sun Island and, in winter, the Ice and Snow World. The city stretches east–west along the river.",
    gettingAround:
      "Taiping Airport is about 35 km south-west of the city, with airport buses and an intercity rail link. Harbin is the northern hub of the Harbin–Dalian and Beijing–Harbin high-speed lines. The city has a metro and buses; pay by QR code. The climate is cold-temperate monsoon: short cool summers (about 23°C in July) and long, severe winters (often around -19°C in January, and able to fall below -30°C), with snow on the ground from November to March. In winter bring a heavy down coat, thick boots, a hat and gloves, and note that cameras and phones lose charge fast in the cold.",
    culture:
      "Northeastern Mandarin is spoken, with no barrier to standard Mandarin. The food shows Russian and mixed influences — sausage, big \"dalieba\" bread, guo bao rou, \"kill-the-pig\" stew and frozen pears are typical. The pace is unhurried, indoor heating is strong in winter, and the indoor–outdoor temperature difference is large. Tipping is not customary.",
    seeAndDo:
      "Central Street and St Sophia Cathedral; in winter, the Ice and Snow World, the Sun Island snow sculpture expo, and ice activities on the frozen Songhua; skiing at Yabuli, and the more distant \"Snow Town\" (in Mudanjiang, usually a separate 1–2 days — choose a reputable route). In summer, the Songhua River waterfront and Sun Island. Laodaowai for the Chinese Baroque buildings.",
    whenAndTips:
      "Late December to February is the ice-and-snow high season and also the coldest and most expensive time, with New Year and Spring Festival needing early booking. The Ice and Snow World usually opens in late December and closes once temperatures rise — check that year's announcement. Summer (June–August) is cool and pleasant and a good time to transfer to other parts of the north-east. Keep outdoor spells short in winter and watch for frostbite.",
  },

  qingdao: {
    identity:
      "Qingdao, on the southern coast of the Shandong Peninsula, is an important port and seaside city with a metropolitan population of about 7 million. It has a history of German and Japanese occupation, which left blocks of red-roofed European-style buildings in the old town; together with the bays, the beer and the seafood, this gives the city a distinct character.",
    layout:
      "The old town is on the hills on the east side of Jiaozhou Bay, where the streets around Zhanqiao Pier, Badaguan and Signal Hill run steeply between hill and sea; eastward along the coast are the May Fourth Square, the Olympic Sailing Centre and successive newer districts and swimming beaches; behind the city rises Mount Lao. There is no large plain — it is essentially hills and coastline.",
    gettingAround:
      "Jiaodong Airport is north-west of the city, linked by metro line 8 (about 50 minutes to the centre). Qingdao has high-speed rail toward Jinan, Beijing and Shanghai. The city metro and buses are convenient; the old town is hilly and walkable but tiring on the legs. The climate is temperate monsoon, moderated by the sea: summers are not too hot but humid, with sea fog (especially June–July), winters are slightly milder than inland Shandong but windy, and spring and autumn are comfortable.",
    culture:
      "The local speech is the Qingdao variety of Jiao–Liao Mandarin, with Mandarin widely used. Locals are fond of beer, and in summer there is a habit of carrying draught beer in plastic bags; clams (locally \"gala\") and other seafood are everyday food. The Qingdao International Beer Festival in August is a citywide event. As elsewhere, buy seafood only where prices are posted and re-weighing is possible. Tipping is not customary.",
    seeAndDo:
      "Zhanqiao Pier and Little Qingdao islet; the old villa districts of Badaguan and the No. 2 Bathing Beach; Signal Hill or Xiaoyu Hill for the view over red roofs and green trees; the former German governor's residence and the Tsingtao Beer Museum in the old brewery; the waterfront promenade at May Fourth Square and the Sailing Centre; Mount Lao (a Taoist mountain and coastline, usually a day).",
    whenAndTips:
      "The best months are early summer to early autumn (May, September–October), with good sun and moderate humidity. July–August is the beach high season — crowded and expensive, and often foggy with showers. The beer festival period (usually late July into August) is livelier but more crowded. At the swimming beaches follow the lifeguards and watch for rip currents and jellyfish.",
  },

  zhangjiajie: {
    identity:
      "Zhangjiajie, in north-western Hunan, has become a popular nature destination because of the quartz-sandstone pinnacle forest of Wulingyuan. The city itself is small and almost entirely serves the scenic areas. The landform is a mass of tree-topped stone columns rising straight from the ground, appearing and disappearing in the mist.",
    layout:
      "It helps to separate the names: Zhangjiajie city (with the airport and high-speed rail station); Wulingyuan district (the gateway and accommodation hub for most of the pinnacle areas, about 30 km from the city); and the core scenic areas, which include Zhangjiajie National Forest Park (Yuanjiajie, the Golden Whip Stream, Tianzi Mountain) and Yangjiajie. Tianmen Mountain stands on its own right next to the city. Both the city and the parks are in mountainous terrain with large changes in elevation.",
    gettingAround:
      "Hehua Airport is very close to the city; the high-speed rail Zhangjiajie West station is about 1.5 hours from Changsha. Within the parks, shuttle buses, cable cars and lifts (such as the Bailong elevator) connect the areas, which are large and involve a lot of walking — usually 2–3 days. The climate is subtropical monsoon; the mountains are often wet and foggy, summers are cool with frequent afternoon showers, and in winter parts of the walkways and cable cars may close temporarily for ice.",
    culture:
      "The area has Tujia, Miao and other communities, and tourist villages stage ethnic song and dance. Southwestern Mandarin and local dialects are spoken, with no barrier to Mandarin. Touting by guides and forced-shopping tours have been a problem in peak season — travelling independently or choosing reputable products is advisable, and buy tickets through official channels with ID. Tipping is not customary.",
    seeAndDo:
      "Zhangjiajie National Forest Park: the Golden Whip Stream walk, the Bailong elevator up to Yuanjiajie (the \"Avatar Hallelujah Mountain\" viewpoint), and Tianzi Mountain for the pinnacle sea of cloud; the \"natural Great Wall\" at Yangjiajie. At Tianmen Mountain, the cable car, the glass walkway and the switchback road to Tianmen Cave. Beyond Wulingyuan are Furong Town and the old town of Fenghuang (in the Xiangxi prefecture, usually separate).",
    whenAndTips:
      "April–June and September–November have relatively settled weather and a better chance of cloud seas. July–August is the hottest and most crowded; during the summer holiday and the National Day week the parks cap numbers and queues are long, so book tickets and rooms ahead. Rain and mist make the pinnacles come and go, which has its own appeal, but the glass walkway and cable cars close in high wind, thick fog or ice, so keep the itinerary flexible. The trails have many steps — bring non-slip shoes.",
  },

  lijiang: {
    identity:
      "Lijiang, in north-western Yunnan, is known for its Naxi old town and for Yulong (Jade Dragon) Snow Mountain, and is one of the hubs for travel in the north-west of the province. It sits at about 2,400 m, and most people adjust well. The old town is a World Heritage Site and also a heavily commercialised tourist area — quiet by day, lively at night.",
    layout:
      "The Lijiang basin is a relatively flat upland basin within the Hengduan ranges. Dayan old town (usually just called \"Lijiang old town\") is at its centre; Shuhe old town to the north-west is quieter, and Baisha, smaller still, is closest to the snow mountain. Yulong Snow Mountain is about 25 km north of the town and is a sacred mountain to the Naxi. North lie Tiger Leaping Gorge and the road to Shangri-La; south is Dali.",
    gettingAround:
      "Sanyi Airport is about 25 km from the town; Lijiang has high-speed rail to Dali and Kunming. The old town is flagstone lanes with no vehicles, so it is walked. For Yulong Snow Mountain, Shuhe and Lashi Lake, people usually hire a car or take a day tour (choose a proper one with no shopping stops). The climate is highland monsoon with strong UV and a wide day-to-night range: mild days, cool mornings and evenings, a rainy season June–September, and clear, dry winters and springs with snow on the peak.",
    culture:
      "The Naxi are the main local people, with their own language and the Dongba script; Mandarin is usable in the old town. Respect local customs and follow signs when entering homes and temples. Touting, forced shopping and cut-price tours have been prominent problems here, so travel independently or use well-reviewed products. Tipping is not customary. Altitude effects are mild, but going up Yulong Snow Mountain (the cable car reaches above 4,500 m) still calls for taking it slowly.",
    seeAndDo:
      "In Dayan old town, Sifang Street, the Mu Mansion and the Wangu Tower on Lion Hill; Shuhe and Baisha old towns; Yulong Snow Mountain (the glacier-park cable car, Blue Moon Valley); horse-riding and boating at Lashi Lake (use licensed operators); the Impression Lijiang outdoor show. From Lijiang you can reach Tiger Leaping Gorge and Lugu Lake (farther, a separate 2 days).",
    whenAndTips:
      "March–May and September–November have the best weather, with rhododendrons in spring and autumn colour later. The rainy season (June–September) brings afternoon showers and possible landslides on mountain roads; winter is clear and cold, best for seeing the snow mountain but very cold morning and night. During May Day, National Day and the school holidays the old town is very crowded and prices rise. The Yulong Snow Mountain cable car is capped and usually needs advance booking, and stops in high wind.",
  },

  dunhuang: {
    identity:
      "Dunhuang is in the far west of Gansu, at the end of the Hexi Corridor, a key town on the old Silk Road, world-famous for the murals and statues of the Mogao Caves. It is a small desert-oasis town of a little over 100,000 people, sustained by the water of the Dang River, with gobi and desert all around.",
    layout:
      "The town is the centre of the oasis, compact and walkable. The Mogao Caves are about 25 km south-east of town at the edge of the gravel gobi; the Singing Sand Dunes and Crescent Lake are right on the southern edge of town; the Yumen Pass, the Han-dynasty Great Wall ruins and the yardang landforms (the \"devil city\") are 80–180 km west of town in the gobi and take half a day to a day. Beyond the town it is almost all desert.",
    gettingAround:
      "Mogao Airport is about 13 km from town; Dunhuang has trains toward Lanzhou, Xining and Jiayuguan, and the Lanzhou–Xinjiang high-speed line passes through Liuyuan (about 130 km, with a shuttle). Taxis in town are easy; reaching the distant passes and yardang needs a hired car or a tour. The climate is warm-temperate arid, extremely dry, with a very wide day-to-night range: hot summer days (often above 35°C) and cool nights, cold winters, and dust and high winds in spring (April–May).",
    culture:
      "Lanyin Mandarin is spoken, with no barrier to standard Mandarin. The food is wheat-based, with donkey-meat \"yellow noodles\", huyang baked flatbread and apricot-skin drink as local specialities. To protect the murals, the Mogao Caves run strict capacity limits and advance booking, often sold out a month ahead in peak season, so buy tickets early on the official platform; photography is forbidden inside the caves, flash is not allowed, and which caves you see is assigned per guide. Tipping is not customary.",
    seeAndDo:
      "The Mogao Caves (the digital centre dome films plus the caves themselves, about half a day); the Singing Sand Dunes and Crescent Lake (climb the dunes for sunset, camel rides); the Dunhuang night market; a west-line day trip: Yumen Pass, the Han Great Wall, the Hecang granary ruins and the Yardang National Geopark (best at sunset, a late return); the Yulin Caves (in Guazhou, farther out).",
    whenAndTips:
      "May–October is the tourist season, with May–June and September–October more comfortable in temperature and July–August hot but cool at night. In peak season Mogao tickets are tight — reserve tickets before fixing the itinerary. Spring dust days cut visibility and delay flights. Use strong sun protection throughout, carry water and lip balm, and for the gobi and yardang bring a windproof jacket and a sun hat, as temperatures drop sharply after sunset.",
  },
};
