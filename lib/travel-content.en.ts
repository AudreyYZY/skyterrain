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

  canberra: {
    identity:
      "Canberra is Australia's capital, in a purpose-set-aside \"Australian Capital Territory\" within New South Wales, inland between Sydney and Melbourne, with about 470,000 people. It is not an organically grown city but a planned one built from 1913 onward to settle the rivalry between Sydney and Melbourne over which should be capital. Its streets are laid out around the artificial Lake Burley Griffin and several radiating axes.",
    layout:
      "The city centres on the lake: the south shore holds the Parliamentary Triangle (Parliament House and several national museums and memorials), the north shore the Civic centre and commercial district. Around them is a ring of satellite residential districts with a great deal of green space, and the encircling hills are visible from town. The scale is designed for driving, with walkable areas concentrated inside a few precincts.",
    gettingAround:
      "The airport is about 10 minutes from the centre, with a bus into town, though most people use a taxi or rideshare. There is one north–south light rail line plus buses, but service is not dense, so a rental car or bike is more flexible. At about 580 m elevation Canberra has the coldest winters of Australia's larger cities: July nights are often around 0 °C with frost, while summer days are about 28 °C and dry. Spring and autumn (March–April, September–October) are the most comfortable.",
    culture:
      "Public servants, diplomats and university staff and students make up a large share of the population; the pace is quieter than Sydney or Melbourne, and many places are quiet on evenings and weekends. It has the country's greatest concentration of national cultural institutions, most of them free. The city is friendly to cycling and the outdoors. Tipping is not required.",
    seeAndDo:
      "The Australian War Memorial, National Gallery, National Museum, Parliament House (open to visitors) and National Portrait Gallery; walking and cycling around the lake; the Floriade flower festival in September–October; climbing Red Hill or Mount Ainslie for a city panorama; the mountains of nearby Namadgi National Park.",
    whenAndTips:
      "Spring and autumn have the best weather and cover Floriade and several major events. Winter is cold, so bring warm clothing; use sun protection in summer. The city is spread out, so without a car keep to the Parliamentary Triangle and Civic. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  newcastle: {
    identity:
      "Newcastle is about 160 km north of Sydney, the second-largest city in New South Wales (metropolitan population about 500,000), at the mouth of the Hunter River. It was historically a coal-export port — its name comes from the English coal city of Newcastle upon Tyne, and the Australian city was formally named in 1804. Today it has shifted from heavy industry toward its university, beaches and culture.",
    layout:
      "The centre sits on a peninsula between the Hunter River and the beaches, compact and walkable. A string of east-facing city beaches (Newcastle, Nobbys, Merewether) runs along the coast, linked by a shoreline walk. Inland is the Hunter Valley, one of Australia's oldest wine regions.",
    gettingAround:
      "The airport is about 25 km north at Williamtown (shared with an air force base), with a bus into town; you can also take a train from Sydney (about 2.5–3 hours). The centre is walkable, with light rail and buses (use a transport card or contactless bank card). Reaching the Hunter Valley wineries needs a rental car or tour. The climate is mild: summer about 19–27 °C with fairly high humidity, winter about 9–18 °C and sunny. The sea is swimmable year-round; swim only in flagged patrolled areas.",
    culture:
      "Newcastle is more relaxed than Sydney and cheaper to live in, with a strong surf and beach culture and a lively independent music and arts scene. The surrounding area is the country of the Awabakal and Worimi peoples. Tipping is not required.",
    seeAndDo:
      "The lighthouse, fort and coastal walk at Nobbys Head and Fort Scratchley; Nobbys Beach and the ocean baths (rock sea pools); Newcastle Museum and Art Gallery; a day trip to the Hunter Valley wineries; the large sand dunes around Stockton to the north.",
    whenAndTips:
      "Autumn (March–May) is usually the most settled and comfortable; summer has more thunderstorms but warm water. Swim only between the red and yellow flags. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  "gold-coast": {
    identity:
      "The Gold Coast is in south-east Queensland, about an hour's drive south of Brisbane — a continuous belt of beachside resort city with about 700,000 people. It is known for a long run of east-facing beaches, a dense high-rise apartment skyline, and a cluster of theme parks inland. It is warm year-round.",
    layout:
      "The city stretches a long way north–south along the coast, with \"Surfers Paradise\" the central, tallest section. Behind the beaches are canal-estate suburbs, and further inland the land rises quickly into rainforest mountains (Springbrook, the Border Ranges). The airport is at the far south, near the New South Wales border.",
    gettingAround:
      "Gold Coast Airport (Coolangatta) is about 25 minutes from Surfers Paradise; Brisbane Airport is also used, with a train plus light rail between them. There is a coastal light rail line plus buses (use a transport card or contactless bank card). Reaching the inland national parks needs a rental car or tour. The subtropical climate: summer (December–February) about 21–29 °C, humid with thunderstorms; winter (June–August) about 12–21 °C, sunny and dry, and very pleasant. The sea is swimmable year-round; watch for rip currents and swim only in flagged patrolled areas.",
    culture:
      "The Gold Coast is one of Australia's most typical holiday and retirement cities, with a relaxed, visitor-facing atmosphere and nightlife concentrated around Surfers Paradise and Broadbeach. Tipping is not required.",
    seeAndDo:
      "A string of beaches (Surfers Paradise, Broadbeach, Coolangatta, Burleigh Heads); theme parks (Warner Bros. Movie World, Sea World, Dreamworld, Wet'n'Wild); rainforest and waterfalls in Lamington and Springbrook national parks inland; the glow-worms at Springbrook. A popular place to learn to surf.",
    whenAndTips:
      "Winter (June–August) has the most settled, comfortable weather; summer is hotter and wetter but the water is warm. Late September to early October is Australian school holidays and crowded. Swim only between the red and yellow flags and follow the lifeguards. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  hobart: {
    identity:
      "Hobart is the capital of Tasmania and, founded in 1804, Australia's second-oldest capital city after Sydney, with about 250,000 people. It sits at the mouth of the Derwent River below Mount Wellington (kunanyi) and keeps a great deal of early stone architecture. The city is named after Robert Hobart, then the British colonial secretary.",
    layout:
      "The centre is compact, along the west bank of the Derwent, with the old sandstone warehouses around Salamanca now a dining and market district. Mount Wellington (about 1,270 m) is visible behind the city and occasionally holds snow. Across the river to the north is the MONA art museum. The city gives way quickly to mountains and coast.",
    gettingAround:
      "The airport is about 20 minutes from the city with no airport rail — use an airport bus or a taxi/rideshare. The centre is walkable; a dedicated ferry runs to MONA; reaching the surroundings (Mount Wellington, wineries, Bruny Island, Port Arthur) needs a rental car or tour. Tasmania's climate is cool and changeable: summer (December–February) about 12–22 °C with long daylight; winter about 4–12 °C, cold, wet and rainy; the weather can change several times in a day, so carry a windproof, waterproof jacket in any season.",
    culture:
      "Tasmania is slow-paced with a strong sense of community and a focus on local produce (oysters, salmon, cheese, whisky, cider). Tasmanian Aboriginal people (palawa) have lived on the island for tens of thousands of years, and some place names have been restored to Aboriginal forms (such as kunanyi for Mount Wellington). Tipping is not required.",
    seeAndDo:
      "Salamanca Market (Saturdays), the surrounding historic buildings, and the MONA art museum; driving up Mount Wellington for the panorama; south to the Port Arthur Historic Site (a solemn former penal site) and Bruny Island; the Dark Mofo winter arts festival in June. Hobart is also a resupply port for Antarctic research ships.",
    whenAndTips:
      "Summer (December–February) has the longest daylight and the most events and is the peak season, so book accommodation ahead; winter is cold and wet but has Dark Mofo. The weather is very changeable, so dress in layers. The island has many mountain roads and abundant wildlife, so drive slowly after dusk. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  launceston: {
    identity:
      "Launceston is in northern Tasmania, the state's second-largest city (about 87,000 people) and one of Australia's earlier inland cities. It sits at the junction of three rivers, right beside a rocky gorge called Cataract Gorge. The city is named after Launceston in Cornwall, England.",
    layout:
      "The centre keeps a great deal of Victorian and Edwardian architecture, arranged around several squares and easy to walk. The Tamar River runs past the edge of town, and to the north is the Tamar Valley wine region. Cataract Gorge is within walking distance of the centre.",
    gettingAround:
      "The airport is about 15 minutes from the city — use an airport bus or a taxi/rideshare. The centre is walkable, and the gorge is a short walk or drive; reaching the Tamar Valley wineries or Cradle Mountain needs a rental car or tour. The climate is like Hobart's but more inland: summer days can exceed 25 °C, winter nights often bring frost, and the daily temperature range is large.",
    culture:
      "Launceston is the farming and food centre of northern Tasmania, driven in recent years by dining, wine and a regional university campus, and is slower-paced than Hobart. Tipping is not required.",
    seeAndDo:
      "Cataract Gorge (trails, a suspension bridge, a long single-span chairlift); the historic buildings and parks of the centre; the Queen Victoria Museum and Art Gallery; a day of Tamar Valley wineries; about 2.5 hours west is Cradle Mountain–Lake St Clair National Park (part of the Tasmanian Wilderness).",
    whenAndTips:
      "Summer and autumn (December–April) are best for the outdoors and wineries; winter is cold with short days. Cradle Mountain's weather is very changeable and snow is possible any time of year, so check road and weather conditions before going. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  "alice-springs": {
    identity:
      "Alice Springs (Mparntwe in the Arrernte language) is at the very centre of Australia, among the MacDonnell Ranges, with about 25,000 people — the largest settlement and supply base of the \"Red Centre,\" roughly 1,500 km from the nearest large city. It is the base for visiting Uluṟu, Kata Tjuṯa, Kings Canyon and the MacDonnell Ranges.",
    layout:
      "The small town is hemmed in by a gap in the MacDonnell Ranges (Heavitree Gap), with the Todd River (a dry bed most of the time) running through it; the centre is a few blocks. Red ranges and desert begin immediately around it. Uluṟu is in fact about 450 km away, roughly a 5-hour drive — not a nearby suburb.",
    gettingAround:
      "The airport is about 15 minutes from town — use a taxi/rideshare or an accommodation transfer. The town is small and walkable; the West and East MacDonnell gorges are day trips, while Uluṟu and Kings Canyon need an overnight stay or a flight. The inland desert climate: summer (December–February) days often exceed 38 °C, winter (June–August) days about 20 °C with nights that can fall below 0 °C; the daily range is extreme, so carry plenty of water in any season.",
    culture:
      "Alice Springs is a centre of Central Australian Aboriginal art, with several Aboriginal-run galleries; large areas of surrounding land are Aboriginal-owned, and entering some areas or leaving the main roads needs a permit. Follow local guidance when visiting sacred sites and taking photos — some places may not be photographed. Tipping is not required.",
    seeAndDo:
      "The West MacDonnell gorges (Simpsons Gap, Standley Chasm, Ormiston Gorge, Glen Helen) and the East MacDonnell (Trephina Gorge); the Telegraph Station Historical Reserve, the Royal Flying Doctor Service base, and the Desert Park; a starting point for Uluṟu–Kata Tjuṯa and Kings Canyon. The Larapinta Trail is a long-distance ridge walk.",
    whenAndTips:
      "May–September (winter) is the only season comfortable for daytime outdoors and is the peak season, so book Uluṟu-area accommodation far ahead. Summer is extremely hot and midday is no time to hike. Driving into the desert means carrying plenty of fuel and water, logging your route, and watching for livestock and wild camels on the road. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  katherine: {
    identity:
      "Katherine is in the Northern Territory, about a 3-hour drive south of Darwin, with about 6,000 people — the largest settlement in the Territory's \"Top End\" after Darwin, and the crossroads of the north–south Stuart Highway and east–west routes. It is right beside Nitmiluk (Katherine Gorge) National Park; the local Jawoyn people call the area Nitmiluk.",
    layout:
      "The town runs along the Katherine River and the highway and is only a few streets. The Nitmiluk gorges are about 30 km east, Edith Falls is to the north, and open wilderness and, further on, Western Australia lie to the south-west.",
    gettingAround:
      "Katherine's civilian flights use nearby Tindal (also an air force base), with few services; most people drive from Darwin or take a coach. The town is walkable; reaching the gorge and falls needs a rental car or tour. The tropical climate has only a dry and a wet season: the dry (May–October) is sunny, about 14–32 °C, and is the tourist season; the wet (November–April) is hot and stormy, the river rises sharply, and some trails and roads close.",
    culture:
      "There are large areas of Jawoyn and other Aboriginal land around Katherine, and Nitmiluk National Park is jointly managed by the traditional owners and the NT parks agency. Entering Aboriginal land or leaving the main roads needs a permit. Tipping is not required.",
    seeAndDo:
      "Nitmiluk Gorge — by boat, kayak or the gorge walking tracks; swimming at Edith Falls (Leliyn); Katherine Hot Springs; the Cutta Cutta caves. Further south are the Mataranka thermal pools and the Roper River area.",
    whenAndTips:
      "The dry season (especially June–August) is the only comfortable time and the only time for water activities. In the wet the river runs too fast and crocodile range expands, so most water activities stop. Do not enter any water that may hold saltwater crocodiles — swim only where it is clearly signed safe. Sun protection and insect repellent. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  broome: {
    identity:
      "Broome is on the Kimberley coast of north-western Western Australia, with about 15,000 people — a remote seaside town known for its red rock coast, long beaches and pearling history, about 2,200 km from Perth. It is the gateway to the Kimberley region by sea.",
    layout:
      "Broome is on a peninsula: the west side is the roughly 22-km Cable Beach (facing the Indian Ocean, for sunsets), the east side the mangroves and big tidal mudflats of Roebuck Bay. The Chinatown area is the old town centre, now a dining and shopping district. The town is small in scale.",
    gettingAround:
      "The airport is almost within the town — use a taxi/rideshare or an accommodation transfer. In town you can rent a car or cycle, and Cable Beach has a bus. Kimberley inland roads (such as the Gibb River Road) are mostly unsealed and close in the wet, so driving them needs a 4WD and full preparation, or a tour. The tropical climate: the dry (May–October) is sunny, about 20–30 °C, and is the peak season; the wet (November–April) is hot and stormy with frequent tropical cyclones, and many trips stop running.",
    culture:
      "Broome historically drew Aboriginal people and pearling workers from across Asia, so its population is very mixed. The surrounding area is the country of the Yawuru and other Aboriginal peoples, and places like Cable Beach are jointly managed. The tidal range is huge (up to about 9 m), so tide-pooling and viewing the dinosaur footprints go by the tide table. Tipping is not required.",
    seeAndDo:
      "Sunset and camel rides on Cable Beach; the \"Staircase to the Moon\" (a band of light the moon makes on the mudflats at low tide on certain dates); the dinosaur footprints at Gantheaume Point (visible at low tide); the pearling history and the Japanese cemetery (a solemn historic site); a starting point for the Kimberley by land or by sea.",
    whenAndTips:
      "The dry season (May–September) has the best weather and is the peak season, with expensive accommodation that needs booking ahead. The wet is hot, roads often close, and cyclone risk is high. The tidal range is huge, so check the tide before going in the sea, tide-pooling or walking the mudflats; northern waters have dangerous jellyfish in the wet season. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  exmouth: {
    identity:
      "Exmouth is on a peninsula in north-western Western Australia, with about 2,800 people — the gateway town to Ningaloo Reef, one of the few places in the world where you can swim to a coral reef straight from the beach. The town is named after Viscount Exmouth, a British admiral (there is also a town of Exmouth in Devon, England). Cape Range National Park is alongside it.",
    layout:
      "The town is on the east side of the peninsula, on Exmouth Gulf, and is only a few streets. Ningaloo Reef and Cape Range National Park are on the west side — Coral Bay, Turquoise Bay and Yardie Creek gorge are all over there, about 40 minutes to an hour's drive from town. Learmonth Airport is at the southern tip.",
    gettingAround:
      "Flights use Learmonth Airport about 35 km south of town, with few services; you can also drive from Perth (about two days). Getting around town and to the park needs your own car, and some park areas require pre-booking parking or snorkelling slots online. The peninsula is hot and dry: summer (December–March) often exceeds 38 °C with cyclone risk; winter (June–August) is about 10–25 °C and the most comfortable. The water is swimmable year-round.",
    culture:
      "The small town revolves around ocean activities and is very slow-paced. The Ningaloo coast is the traditional sea country of the Yinigudura and other Aboriginal groups. Tides and currents strongly affect snorkelling safety, so follow local and park guidance. Tipping is not required.",
    seeAndDo:
      "Snorkelling on Ningaloo Reef (the \"drift snorkel\" at Turquoise Bay and Coral Bay); swimming with whale sharks from March to August (licensed, tightly regulated trips), with humpback whales visible in late winter and early spring; a boat trip up Yardie Creek gorge to see black-footed rock wallabies; driving up Cape Range for views of the peninsula and the Coral Sea.",
    whenAndTips:
      "April–October has the best weather and sea conditions; the whale shark season (about March–August) is the peak and trips need booking ahead. Summer is extremely hot and November–April has cyclones. When snorkelling, watch for rips and tides, and never stand on or touch the coral. Citizens of most countries need an electronic visa or ETA arranged in advance.",
  },

  "coober-pedy": {
    identity:
      "Coober Pedy is in the desert of northern South Australia, halfway along the road and rail line between Adelaide and Alice Springs, with about 1,800 people — one of the world's main sources of opal. Because the surface is so hot, many homes, hotels and churches here are dug underground. The name comes from the Aboriginal Kokatha term kupa piti.",
    layout:
      "On the surface it is a brown plain covered with mining spoil heaps (like small cones), with fuel stations, shops and mine entrances along a few main streets. A good part of the real \"town\" is underground — the temperature-stable dugout hotels and homes are cool in summer and warm in winter. The surrounding desert is often used as a film location for science fiction.",
    gettingAround:
      "There is a small airport with very few flights; most people drive the Stuart Highway or take a coach. The town is small and walkable; reaching the surroundings (the Moon Plain, the Dog Fence, the Painted Desert) needs a rental car or tour, and some roads are unsealed. The climate is extreme desert: summer days often exceed 40 °C, winter days about 20 °C with nights near 0 °C, and almost no rain.",
    culture:
      "Coober Pedy's residents come from dozens of countries (many descended from migrants who came to mine), and it is a practical, rough-edged mining town. There is Aboriginal land around it, and areas off the main roads need a permit to enter. The mine fields are full of unfenced vertical shafts — never walk backwards or wander at night outside marked areas. Tipping is not required.",
    seeAndDo:
      "Touring the underground homes, underground churches and an opal mine museum; \"noodling\" through mine tailings to try your luck; the \"Moon Plain\" and a section of the Dog Fence (the wild-dog barrier fence); the Painted Desert mesa country to the north-east.",
    whenAndTips:
      "April–September (winter) is the only season for daytime outdoors. Summer is extremely hot and no time for outdoor activity. Driving unsealed roads means carrying a spare tyre, water and a communication device, and logging your route. Never go near an unfenced old shaft. Citizens of most countries need an electronic visa or ETA arranged in advance.",
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

  "japan-overview": {
    identity:
      "Japan is an island country on the western edge of the Pacific, made up of the four large islands of Honshu, Hokkaido, Kyushu and Shikoku and thousands of smaller ones, with a population of about 125 million, most of it concentrated in a few metropolitan areas on the Pacific side of Honshu. The archipelago sits on a plate boundary and is mountainous, with many volcanoes, earthquakes and hot springs, and a very high forest cover.",
    layout:
      "Japan can be divided roughly into sections: Hokkaido (high-latitude, sparsely settled, cool summers and snowy winters); Honshu (the largest island, with the Tokyo, Nagoya and Kyoto–Osaka–Kobe metropolitan areas along the Pacific side, and the 3,000 m Japanese Alps down the centre dividing the climate into a Pacific side and a Sea of Japan side); Shikoku (smaller, mostly the Inland Sea and mountains); Kyushu (concentrated volcanoes and hot springs, with Fukuoka as the gateway); and the southernmost Nansei Islands (subtropical, coral reefs, with Naha as the centre).",
    gettingAround:
      "Travel between cities is mostly by Shinkansen and intercity rail — dense and punctual — with flights only for long distances and island hops; the rail system is complex but a single IC card (Suica, ICOCA and others) works throughout, and a JR Pass can be worth it for wide travel. Big-city subways are extensive; stand and walk on the left (Kansai is the reverse). The climate is temperate monsoon overall: hot, humid summers with a rainy season in June–July and typhoons from July to October; winters are dry on the Pacific side and snowy on the Sea of Japan side and in Hokkaido. Tap water is drinkable and convenience stores are everywhere.",
    culture:
      "The language is Japanese; English signage is fairly complete in big cities and major sights and limited in the countryside. Society values order and not troubling others: queue, keep quiet in public, take your rubbish with you, and do not talk on the phone on trains. Remove shoes for tatami rooms and some temples and inns; before a hot-spring bath, wash thoroughly, and note that swimwear is usually not worn and large tattoos may be turned away. Tipping is not customary.",
    seeAndDo:
      "The old capitals and gardens of Kyoto, Nara and Kanazawa; the cities and food of Tokyo and Osaka; the nature and skiing of Hokkaido and Tohoku; the volcanoes and hot springs of Kyushu; the islands and art of the Inland Sea; the mountains and forests of Mount Fuji, the Japanese Alps and Yakushima. The seasons are distinct, and the cherry blossom (late March to April) and autumn leaves (around November) are two viewing peaks.",
    whenAndTips:
      "Spring (March–May) and autumn (October–November) have the most comfortable weather and are also peak season; in the cherry-blossom and autumn-leaf periods, book accommodation in popular places early. Golden Week (late April to early May), Obon (mid-August) and the new-year holidays are nationwide travel peaks with high prices. In summer take heat precautions and carry an umbrella; flights and trains stop when typhoons hit. Entry has restrictions on meat, fruit and some medicines — declare honestly. Visa rules vary by nationality; check the latest from Japan's Ministry of Foreign Affairs before you travel.",
  },

  tokyo: {
    identity:
      "Tokyo is the capital and largest city of Japan, and one of the most populous metropolitan areas in the world (about 37 million). It is the undisputed centre of politics, economy, culture and transport, made up of many districts with strong individual characters — skyscrapers and round-the-clock commercial quarters as well as quiet old neighbourhoods and large areas of greenery.",
    layout:
      "Tokyo is built on the Kanto Plain, cut up by the Sumida and Ara rivers and Tokyo Bay. The \"city centre\" is conventionally the loop of the JR Yamanote line, which strings together the main hubs — Tokyo Station, Shinjuku, Shibuya, Ikebukuro, Ueno — with the Imperial Palace near its centre-east. West are continuous residential districts reaching the Tama Hills and the Okutama mountains; east are the low-lying old town and reclaimed waterfront.",
    gettingAround:
      "Narita Airport is far from the centre (about an hour by express train); Haneda is much closer (about 20–30 minutes). The subway (Tokyo Metro plus Toei) and JR lines form a web; a single Suica or PASMO card covers the whole city, last trains run past midnight, and after that it is taxis. Walking and transfer distances are often long. The climate is Pacific-side temperate: hot, muggy summers (July–September) often above 35°C with afternoon thunderstorms and typhoons, and clear, cold, dry winters with little snow in the city; cherry blossom opens around late March.",
    culture:
      "Standard Japanese is spoken, with Chinese, English and Korean signage at major stations and sights. The city is fast, punctual and orderly: stand on the left on escalators (the right is for people in a hurry), keep quiet on trains, carry your rubbish. Restaurants generally do not take tips, and many small places are cash-only or take Japanese e-payment. Shrines and temples have their own etiquette (bow, purify your hands, do not stand in the exact centre of the path).",
    seeAndDo:
      "Asakusa with the Kaminarimon and Nakamise; the museums and park of Ueno; Meiji Shrine and Yoyogi Park; the Shibuya crossing; the East Gardens of the Imperial Palace; the Skytree or the Metropolitan Government observatory for a city panorama; Tsukiji Outer Market and Toyosu for seafood; a walk through the old streets of Nezu and Yanaka. Day trips: Kamakura, Nikko, Hakone (views of Fuji), Mount Takao.",
    whenAndTips:
      "Late March to early April (blossom) and November (autumn leaves) are the best scenery but the most crowded, with expensive rooms; late April to early May (Golden Week) and the new year are nationwide travel peaks. The rainy season (June) is wet, and high summer is very hot — take heat precautions. Book popular exhibitions and restaurants ahead. Earthquakes occur occasionally; note the evacuation guidance at your accommodation — in most cases \"drop, cover, hold on\" is the response.",
  },

  kyoto: {
    identity:
      "Kyoto was the capital of Japan for over a thousand years, and is famous for its well-preserved temples, shrines, gardens and machiya townhouse streets — the core city for experiencing traditional Japan. The urban population is about 1.4 million; the city is not large in scale, but its historic heritage is extremely dense and visitor numbers are high year-round.",
    layout:
      "The Kyoto basin is enclosed by mountains on three sides, and the city is laid out on an ancient Tang-inspired grid, with streets running true north–south and east–west — easy to navigate. The centre is the Shijo–Kawaramachi shopping area and the Gion entertainment district; a line of famous temples runs along the eastern foothills from Kiyomizu-dera and Yasaka through Nanzen-ji to Ginkaku-ji (the Philosopher's Path); Kinkaku-ji and Arashiyama are to the north-west, and Fushimi Inari is to the south.",
    gettingAround:
      "Kyoto has no airport; people usually arrive from Kansai Airport on the Haruka express (about 75 minutes) or by transfer at Osaka. The bus network is dense but very crowded at peak times, there are only two subway lines, and cycling is good for short distances. The sights lie around the edge of the basin, so planning by area saves backtracking. The climate is that of an inland basin: hot, muggy summers (\"the Kyoto summer\" is notoriously hard), damp cold winters with occasional snow, and short, beautiful springs and autumns.",
    culture:
      "Kansai-dialect Japanese is spoken, with multilingual signage at the sights. Gion is a working geisha district — geiko and maiko are people at work, so do not chase them for photos or block their way, and some lanes now ban visitor photography. Most temples and shrines require removing shoes, forbid photography indoors, and expect quiet in the gardens. Machiya guesthouses and ryotei have their own rules. No tipping.",
    seeAndDo:
      "Kiyomizu-dera with Ninen-zaka and Sannen-zaka; the thousand torii of Fushimi Inari (fewer people early); Kinkaku-ji and the Ryoan-ji rock garden; the bamboo grove and Togetsukyo bridge at Arashiyama; Gion and Pontocho in the evening; Nanzen-ji, Eikan-do and Tofuku-ji for autumn leaves. Nishijin and Uji (tea and the Byodo-in) are each a half-day.",
    whenAndTips:
      "The blossom (early April) and autumn leaves (mid-to-late November) are Kyoto's most beautiful and most crowded two weeks — visit popular temples first thing and book rooms months ahead. High summer and the rainy season are uncomfortable; January–February is cold but quiet, with occasionally lovely snow scenes. Many temples have fixed opening hours and last-entry times and close early in the evening, so leave a margin in your plans.",
  },

  "osaka-city": {
    identity:
      "Osaka is the central city of the Kansai region and the core of Japan's second-largest metropolitan area (about 19 million). Historically a centre of commerce and wholesale trade, the city has a direct, down-to-earth character and is famous for its food — a contrast with the restraint of Kyoto.",
    layout:
      "Osaka straddles the Yodo River on the Osaka Plain. The city has roughly two centres — \"Kita\" (around Umeda and Osaka Station, offices and department stores) and \"Minami\" (Namba, Shinsaibashi and Dotonbori, shopping, food and entertainment) — with Osaka Castle between them to the east. West are the waterfront districts and Osaka Bay, where Universal Studios is.",
    gettingAround:
      "Kansai Airport is on a reclaimed island off the south coast, about 35–50 minutes to the city on the Haruka or Rapi:t express; Itami Airport, to the north, handles domestic flights. The Osaka Metro plus the JR Loop Line cover the city; pay by IC card. Osaka is the Kansai hub: about 30 minutes to Kyoto and Kobe, around an hour to Nara and Himeji. The climate is similar to Tokyo's but a bit muggier — a hard summer, and a mild winter with little snow.",
    culture:
      "Osaka-dialect Japanese is spoken — lively and fond of jokes. On escalators, Osaka stands on the right (the opposite of Tokyo). The food culture is strong and values good value; there are many street stalls and stand-and-eat places, and many shops are cash-only or take Japanese e-payment. Tipping is not customary.",
    seeAndDo:
      "The signs and food of Dotonbori (takoyaki, okonomiyaki, kushikatsu — where the rule is \"no double-dipping the sauce\"); Osaka Castle Park; Shinsekai and Tsutenkaku; the Kuromon Market; the floating garden observatory of the Umeda Sky Building for night views; Universal Studios Japan. Osaka is a convenient base for Kyoto, Nara, Kobe and Himeji.",
    whenAndTips:
      "Spring and autumn (late March to May, October–November) are the most comfortable. High summer (July–August) is very muggy — take heat precautions — and the rainy season is wet. Golden Week and the new year are busy and pricey. Book popular restaurants ahead and buy express passes for Universal Studios. Shinsaibashi and Dotonbori are very crowded at night — watch your belongings.",
  },

  sapporo: {
    identity:
      "Sapporo is the central city of Hokkaido, with a population of about 1.9 million — a relatively young large Japanese city, planned and built only from the latter half of the 19th century, with a regular grid where addresses are given as \"North n, West n\". Winters are severe and snowy; it is a city of skiing and the Snow Festival.",
    layout:
      "Sapporo is built on the southern edge of the Ishikari Plain facing Ishikari Bay, with hills such as Mount Teine behind it. The city is divided true north–south and east–west, with the east–west green strip of Odori Park as its axis: Sapporo Station is to the north, and Susukino (the Tanukikoji arcade and the Susukino food-and-entertainment district) to the south. South-west into the mountains are the Jozankei hot springs and the ski areas.",
    gettingAround:
      "New Chitose Airport to Sapporo Station is about 40 minutes on the JR rapid. The city has three subway lines plus a streetcar and buses, and in winter the underground arcades and skywalks are very useful. Distances between Hokkaido towns are large; Furano, Biei, Asahikawa, Otaru and Toya are reached by JR or hire car. The climate is northern: cool, dry, low-humidity summers (July–August) and a long winter with snow cover from December to March and January–February usually below freezing.",
    culture:
      "Standard Japanese with a slight Hokkaido accent is spoken, and tourist facilities have full multilingual signage. Winter life revolves around snow clearing and traction; indoor heating is strong, and you shake the snow off at the door. The food is seafood, soup curry, Genghis Khan grilled lamb, miso ramen, dairy and beer. No tipping.",
    seeAndDo:
      "Odori Park, the Sapporo TV Tower, the Clock Tower and the red-brick former government building; the Snow Festival in February (the Odori, Susukino and Tsudome sites); the Mount Moiwa ropeway for night views; Tanukikoji and the Nijo Market for seafood; the suburban Jozankei hot springs and the Shiroi Koibito Park. Use Sapporo as a hub for Otaru, the Asahikawa zoo and the Furano flower fields.",
    whenAndTips:
      "The Snow Festival in February is the busiest, coldest and most expensive time — book rooms months ahead. Summer (June–August) is cool and pleasant, good for escaping the heat and for the flower fields; during the lavender season (about July) the Furano area is crowded. In winter bring waterproof, non-slip shoes, a heavy coat, a hat and gloves, and take short steps on ice.",
  },

  fukuoka: {
    identity:
      "Fukuoka is the largest city on Kyushu, with a metropolitan population of about 2.5 million, and one of the Japanese cities closest to mainland Asia. It is compact and convenient with relatively low prices, the airport is very close to the centre, and in recent years it has drawn attention as a liveable and start-up city.",
    layout:
      "Fukuoka was formed by merging the old merchant town of Hakata (by Hakata Station) and the old castle town of Fukuoka (around Tenjin), separated by the Naka River, with both centres on flat land on the south side of the bay. North are Hakata Bay and the reclaimed Momochi and Uminonakamichi; south, the land soon becomes hills.",
    gettingAround:
      "Fukuoka Airport is just two subway stops (about 5 minutes) from Hakata Station — one of the closest airport-to-centre links among big Japanese cities. The city has three subway lines plus buses; pay by IC card, and the Nishitetsu railway runs to Dazaifu and Yanagawa. Fukuoka is Kyushu's rail hub: Shinkansen about 40 minutes to Kumamoto and about 1.5 hours to Kagoshima, limited express to Nagasaki and Yufuin. The climate is a bit warmer than Honshu — muggy summers, a clear rainy season in June–July, typhoons to watch from July to September, and mild winters with occasional light snow.",
    culture:
      "Hakata-dialect Japanese is spoken, with multilingual signage in tourist areas. Fukuoka is famous for its yatai (night street stalls, concentrated around Nakasu and Tenjin), as well as tonkotsu ramen, mentaiko, mizutaki and sesame mackerel. Yatai are small, usually cash-only, and have basic etiquette (order a dish or two, do not linger to hold a seat). No tipping.",
    seeAndDo:
      "The yatai of Nakasu and the Naka River night view; Kushida Shrine and the old town of Hakata (home of the Hakata Gion Yamakasa festival); the Tenjin shopping district and underground arcade; Ohori Park and the Fukuoka Castle ruins; Uminonakamichi and Nokonoshima for the sea. Day trips: Dazaifu Tenmangu, a boat ride in Yanagawa, the Yufuin and Beppu hot springs, Kumamoto Castle and Aso.",
    whenAndTips:
      "Spring and autumn (late March to May, October–November) are the most comfortable; Maizuru and Nishi parks are busy at blossom time. During the Yamakasa festival in July the city is lively but rooms are tight. In the typhoon season (July–September) watch flights and ferries. In the yatai high season (especially weekend nights) go early or queue, and mind your belongings.",
  },

  naha: {
    identity:
      "Naha is the capital of Okinawa Prefecture and the central city of the subtropical Nansei island region, with a population of about 310,000. It is the gateway to Okinawa, and centres on the Kokusai-dori shopping street, its markets, and historic sites from the Second World War and the Ryukyu Kingdom era; the beaches are mostly around the fringes and on the outer islands.",
    layout:
      "Naha is in the south of Okinawa's main island, facing the East China Sea. The centre is Kokusai-dori and its surrounding shopping streets and markets (the Makishi Public Market), with Shuri Castle Park on higher ground to the east (the main hall and others are being restored after a 2019 fire). The port connects to the outer islands, and the airport is south-west of the centre.",
    gettingAround:
      "From Naha Airport, the Yui Rail monorail reaches the centre (Kencho-mae, Kokusai-dori) in a little over ten minutes. The monorail is a single line covering only central Naha; for the rest of the main island (the Churaumi Aquarium, the Onna coast, the southern war sites) you almost always need a hire car (driving on the left) or a tour. High-speed boats and ferries serve outer islands such as Zamami and Tokashiki. The climate is subtropical and warm all year, with a rainy season in May–June and a typhoon season from July to October; even winter has mild days around 20°C, though the sea wind is cool.",
    culture:
      "Japanese is spoken, and some older people still speak Okinawan. Okinawa has a history (the Ryukyu Kingdom) and culture separate from Honshu, with its own food (goya chanpuru, sea grapes, Okinawa soba, awamori), music (the sanshin) and architecture (red tiles, stone lion-dogs). Life is slower than on Honshu. No tipping.",
    seeAndDo:
      "Kokusai-dori and the Makishi Market, and the Tsuboya pottery street; Shuri Castle Park and nearby Ryukyu Kingdom sites (Shikinaen, the Tamaudun mausoleum); Naminoue Shrine and Naminoue Beach; the Prefectural Museum and Art Museum for Okinawan history. Farther out: the Peace Memorial Park and war sites in the south (solemn places), the Churaumi Aquarium in the north, the Onna coast, and boat trips to the outer islands for snorkelling.",
    whenAndTips:
      "March–May and October–November have the most settled weather for the outdoors. July–September brings frequent typhoons, which stop flights, ferries and some facilities when they hit, so leave slack in your plans. The summer sun is very strong — use sun protection year-round. Choose licensed operators for water activities and check equipment and insurance; outer-island boat schedules depend heavily on sea conditions.",
  },

  tianjin: {
    identity:
      "Tianjin is a municipality in North China, a port city on the western shore of Bohai Bay, with an urban population of about 11 million. It grew up on the Grand Canal and the Hai River as a major industrial and port hub for the north, and blocks of Western architecture survive from the concession era; the local street culture is strong in xiangsheng (crosstalk) and clapper-talk.",
    layout:
      "Tianjin is built on the alluvial plain of the lower Hai River, which runs through the city with the core districts on both banks. South-east down the river to Bohai are the Binhai new area and the port of Tianjin; north are the mountains of Jizhou (Pan Shan, the Huangyaguan Great Wall). The land is extremely flat, organised by rivers and interchanges.",
    gettingAround:
      "Binhai Airport is on the east side of the city, linked by metro line 2. Tianjin is the terminus of the Beijing–Tianjin intercity line, about 30 minutes to Beijing, and many people day-trip. The city has several metro lines plus buses; pay by QR code. The climate is temperate monsoon with four clear seasons: dry, windy springs; hot, wet summers; short, crisp autumns; and cold, dry winters. The food is known for baozi, mahua fried dough, jianbing guozi and Hai River snacks.",
    culture:
      "The Tianjin dialect, with its distinctive intonation, is spoken, with Mandarin widely used. People here enjoy crosstalk and morning food stalls, and the pace is more relaxed than Beijing's. The Italian- and British-style old quarters along the Hai River are walkable. Tipping is not customary.",
    seeAndDo:
      "A Hai River night cruise, the Italian-style quarter, the small mansions of the Five Great Avenues; the Ancient Culture Street and the Tianhou Temple; the Tianjin Eye ferris wheel; the Porcelain House and Xikai Church; on the outskirts, Pan Shan, the Dule Temple (Jizhou) and the Huangyaguan Great Wall. Crosstalk teahouses (around Mingliu and Qianxiangyi) for northern folk performance.",
    whenAndTips:
      "Spring and autumn (April–May, September–October) are the most comfortable. High summer is muggy with thunderstorms; winters are dry and cold, so dress warmly. Crosstalk shows and popular restaurants fill up on weekends — book ahead. High-speed trains between Beijing and Tianjin are frequent, so plans are flexible.",
  },

  shijiazhuang: {
    identity:
      "Shijiazhuang is the capital of Hebei, a transport-hub city on the North China Plain, with an urban population of about 5 million. It rose quickly where the Beijing–Hankou and Zhengtai railways crossed, so its history is not long, but it sits where the Taihang Mountains meet the plain and is the gateway to Hebei's mountain scenery.",
    layout:
      "Shijiazhuang is built on the plain at the eastern foot of the Taihang, a regular, flat city. West into the Taihang are the mountain areas of Jingxing, Zanhuang and Pingshan (Cangyan Shan, Zhangshiyan, Tuoliang); north is the old town of Zhengding; farther north are Baoding and Beijing. The city itself is organised by railways and a few main avenues.",
    gettingAround:
      "Zhengding Airport is north-east of the city, linked by intercity rail. Shijiazhuang is an important stop on the Beijing–Guangzhou high-speed line, about an hour to Beijing. The city has two metro lines plus buses; pay by QR code. The climate is temperate monsoon with four clear seasons: dry, dusty springs; hot summers with rain concentrated in July–August; clear autumns; and cold winters with some hazy days.",
    culture:
      "The Shijiazhuang variety of Ji–Lu Mandarin is spoken, with no barrier to standard Mandarin. The food is wheat-based northern cooking — Anhui beef banmian noodles, Zhengding beng gan and Jinfeng smoked chicken are typical. The pace is unhurried. No tipping.",
    seeAndDo:
      "The old town of Zhengding (the Longxing Temple, the Kaiyuan Temple's Sumeru pagoda, the \"four pagodas\"); the gorges and red cliffs of Cangyan Shan, Zhangshiyan and Tuoliang in the western Taihang; Xibaipo; the Zhaozhou Bridge (in Zhao county, one of the oldest surviving open-spandrel stone arch bridges in China). Use Shijiazhuang as a base for the Taihang scenic areas over one or two days.",
    whenAndTips:
      "Spring and autumn (April–May, September–October) are the most comfortable, and autumn is best for the Taihang leaves. In summer, watch for thunderstorms and flash floods in the mountains; in winter, mountain roads can ice up. Zhengding and the Zhaozhou Bridge are both within an hour of the city and make half- to full-day trips.",
  },

  taiyuan: {
    identity:
      "Taiyuan is the capital of Shanxi, an old industrial city in the Fen River valley, with an urban population of about 4 million. It has more than two thousand years of history as a northern military town, and with the Jinci temple complex nearby and Pingyao, Datong and Mount Wutai not far off, Taiyuan is the base for a tour of Shanxi's historic architecture and relics.",
    layout:
      "Taiyuan lies in the narrow Fen River valley, hemmed in by the East and West mountains. The Fen River and its riverside road form the north–south axis; Jinci is at the foot of Xuanweng Shan in the south-western suburbs. North is Xinzhou and Mount Wutai; south are Pingyao and Jinzhong; north-east is Datong.",
    gettingAround:
      "Wusu Airport is south-east of the city, with buses and intercity trains. Taiyuan is a hub on the Datong–Xi'an and Shijiazhuang–Taiyuan high-speed lines: about 30 minutes to Pingyao, 1.5 hours to Datong, 3 hours to Beijing. The city has one metro line plus buses; pay by QR code. The climate is temperate continental monsoon at about 800 m: dusty springs, summers that are not too hot with rain in July–August, clear autumns, and cold, dry winters.",
    culture:
      "The Taiyuan variety of Jin Chinese is spoken, with Mandarin widely used. Shanxi has a huge range of wheat dishes (knife-cut noodles, tijian, cat's-ear pasta, oat flour) and a strong preference for aged vinegar. The pace is easy. No tipping.",
    seeAndDo:
      "Jinci (the Zhou-dynasty cypress, the Nanlao Spring, the Song-dynasty painted figures in the Sacred Mother Hall); the Shanxi Museum; the Twin Pagoda Temple and Chunyang Palace; the Tianlong Shan grottoes and the Mengshan Buddha. From Taiyuan: the old town of Pingyao, the Qiao family compound (Jinzhong), the Yungang grottoes and the Hanging Temple (Datong), and Mount Wutai, each a day or two.",
    whenAndTips:
      "May–June and September–October have the best weather and are the seasons for the architecture and autumn colour. Winter is cold, and some roads on Mount Wutai close then. Pingyao and Wutai fill up in high season (summer holiday, National Day) — book ahead. Shanxi is about historic buildings and relics, so leave time for visits and guiding.",
  },

  hohhot: {
    identity:
      "Hohhot is the capital of the Inner Mongolia Autonomous Region, a city on the Tumochuan plain at the southern foot of the Yin Mountains, with an urban population of about 3.5 million. It is the gateway from North China to the Mongolian Plateau; the name means \"blue-green city\" in Mongolian, the city has clusters of Tibetan Buddhist temples, and grassland begins not far outside it.",
    layout:
      "Hohhot is built on the plain at the foot of the Daqing Shan, with mountains to the north and the farmland of the Tumochuan to the south. The old town centres on the temples and market streets around the Dazhao and Xilituzhao; the new town is the administrative and commercial area. North over the Daqing Shan are the Xilamuren and Huitengxile grasslands; west are Baotou and the Hetao.",
    gettingAround:
      "Shengle International Airport (the relocated Baita airport, south-west of the city in Horinger county, entering service in 2026) has an airport bus into town; Hohhot has high-speed rail to Beijing (about 2.5 hours), Datong and Baotou. Getting around the city is mostly by bus, with one metro line. Reaching the grasslands (about 1.5 hours to Xilamuren, 2 hours to Huitengxile) is mostly by hired car or tour. The climate is temperate continental — dry, with strong sun and a wide day-to-night range: cool summers (a place to escape the heat), severe winters, and dusty, windy springs.",
    culture:
      "Mandarin is spoken, with Mongolian used in some settings and bilingual signage. There is a long tradition of Mongol herding here, and the Nadam fair (around summer) has wrestling, horse racing and archery. The food is beef and mutton, dairy (milk tea, dried curd, milk skin), oat flour and shaomai. No tipping.",
    seeAndDo:
      "The Dazhao, Xilituzhao and the Five-Pagoda Temple (the Vajra-throne stupa); the General's Government Office; the Inner Mongolia Museum; the Zhaojun Tomb. Outside the city, the Xilamuren and Huitengxile grasslands (horse riding, staying in a yurt, stargazing — best in summer); farther out, the Kubuqi Desert and Xiangshawan.",
    whenAndTips:
      "June to September is the grassland season, with July–August the greenest and most comfortable — also the time of the Nadam and the busiest, so book grassland accommodation ahead. The day-to-night range is wide; even summer nights on the grassland are cold, so bring a jacket. Choose licensed operators for horse riding and desert activities. Winters are severe and most grassland sites are closed.",
  },

  shenyang: {
    identity:
      "Shenyang is the capital of Liaoning and one of the largest cities in the north-east, with an urban population of about 7 million. It sits in the southern part of the Northeast Plain, was the capital of the Qing dynasty before it moved south of the Great Wall, and has since been a centre of heavy industry, so a palace, imperial tombs and a large industrial heritage exist side by side.",
    layout:
      "Shenyang is built on the Northeast Plain on the north bank of the Hun River, on flat ground. The old town centres on the Mukden Palace and the Marshal Zhang Mansion, within the trace of a square old wall; the Northern Tomb (Zhaoling) is to the north and the Eastern Tomb (Fuling) to the east. Tiexi is the old industrial district, now home to an industrial museum.",
    gettingAround:
      "Taoxian Airport is south of the city, linked by metro line 2. Shenyang is a hub on the Harbin–Dalian and Beijing–Harbin high-speed lines: about 2.5 hours to Beijing, 2 hours to Dalian, an hour to Changchun. The city has several metro lines plus buses; pay by QR code. The climate is mid-temperate monsoon: warm summers with rain in July–August, and long, severe winters (often around -15°C in January), with short springs and autumns.",
    culture:
      "Northeastern Mandarin is spoken, with no barrier to standard Mandarin. The food shows Manchu and mixed influences — pickled-cabbage-and-pork stew, guo bao rou, Laobian dumplings and grilled chicken frames are typical. The north-eastern errenzhuan and comedy-sketch traditions are influential. The pace is unhurried. No tipping.",
    seeAndDo:
      "The Mukden Palace (a relatively complete pre-1644 Qing palace), the Northern Tomb park (Zhaoling), the Eastern Tomb (Fuling), the Marshal Zhang Mansion; the China Industrial Museum and the 1905 Cultural and Creative Park in Tiexi; Qipan Shan (skiing in winter). From Shenyang: the Benxi Water Cave, Liaoyang, and Anshan (Qian Shan).",
    whenAndTips:
      "May–June and September–October are the most comfortable, and autumn colour is good at the imperial tombs. Winters are severe and pavements icy, so bring full cold-weather gear. The summer holiday and National Day are peak season. The palace, the mansion and other sites close some galleries on Mondays and require advance ID-based booking.",
  },

  changchun: {
    identity:
      "Changchun is the capital of Jilin, a city on the Song–Liao plain in the centre of the north-east, with an urban population of about 4.5 million. It is known for its car industry and film studio, is green with wide streets and many roundabouts, keeps a number of early-20th-century buildings, and is one of the transfer cities on the way to Changbai Shan.",
    layout:
      "Changchun is built on the plain along the Yitong River, on flat ground. The city is laid out on a radial-and-ring plan, with People's Square and Culture Square at the centre; the Jingyuetan forest park, the FAW works and the film city are in the south; the former Manchukuo palace is in the north-east. South-east lie Jilin city and Changbai Shan.",
    gettingAround:
      "Longjia Airport is east of the city, with intercity rail and a metro link. Changchun is an important stop on the Beijing–Harbin high-speed line: about an hour to Shenyang, an hour to Harbin, 30 minutes to Jilin city. The city has metro and light rail plus buses; pay by QR code. The climate is mid-temperate monsoon: cool, pleasant summers (a place to escape the heat) and long, severe, snowy winters, often around -20°C in January and February.",
    culture:
      "Northeastern Mandarin is spoken, with no barrier to standard Mandarin. The food is close to that of the rest of the north-east, with sauced bones, \"kill-the-pig\" stew, and the Korean-Chinese cold noodles and rice cakes also common. The pace is easy. No tipping.",
    seeAndDo:
      "The Jingyuetan National Forest Park (cycling in summer, the Vasa ski festival in winter); the Museum of the former Manchukuo palace (for this period of history, a solemn place); the former Changchun Film Studio museum and Changying Century City; Nanhu Park; the car culture of Hongqi Street. In winter, ski areas nearby, and east to Jilin city for the rime frost and on to Changbai Shan.",
    whenAndTips:
      "June to September is cool and pleasant, good for escaping the heat and for Changbai Shan. Winters are severe but the snow is good; the ice-and-snow season runs December to February, so bring full cold-weather and anti-slip gear. Parts of Changbai Shan close in winter and Heaven Lake is often not visible, so check conditions before going.",
  },

  nanchang: {
    identity:
      "Nanchang is the capital of Jiangxi, a city on the lower Gan River and the Poyang Lake plain, with an urban population of about 4 million. It is a historic city — home to the Tengwang Pavilion — and the hub for Lushan, Wuyuan, Jinggangshan and Jingdezhen.",
    layout:
      "Nanchang straddles the Gan River; the east bank holds the old town and commercial district (around the Tengwang Pavilion and Bayi Square) and the west bank the Honggutan new area. The land is low and flat, cut by the Gan and several city lakes. North down the Gan lie Poyang Lake and Lushan; north-east are Jingdezhen and Wuyuan; south-west is Jinggangshan.",
    gettingAround:
      "Changbei Airport is north-west of the city, with intercity trains and buses. Nanchang is where the Shanghai–Kunming and Beijing–Kowloon high-speed lines cross: about 40 minutes to Lushan station, 1.5 hours to Jingdezhen, 2 hours to Wuhan. The city has several metro lines plus buses; pay by QR code. The climate is subtropical monsoon: wet, grey springs; hot summers (one of the \"furnace\" cities); clear autumns; and damp cold winters.",
    culture:
      "The Nanchang variety of Gan Chinese is spoken, with Mandarin widely used. The food is spicy and strongly flavoured — clay-pot soup, tossed rice noodles, and cured pork with artemisia are everyday dishes. The pace is easy. No tipping.",
    seeAndDo:
      "The Tengwang Pavilion (climb for the Gan River view, lit at night); the August 1st Uprising Memorial Hall and Bayi Square; the Shengjin Pagoda and the Wanshou Palace heritage quarter; the Star of Nanchang ferris wheel; the fountains at Qiushui Square. From Nanchang: Lushan (Hankou, the Five Old Men Peaks, Guling town), the Hui-style villages and rape flowers of Wuyuan, the porcelain of Jingdezhen, and Jinggangshan, each a day or two.",
    whenAndTips:
      "March–April (rape flowers in Wuyuan) and October–November have the best weather. The plum-rain season (about June) and high summer are muggy — take heat precautions. Lushan is cool in summer as a hill retreat, with pricey rooms in high season, often foggy, so bring a light jacket. Wuyuan and Lushan are very crowded at Qingming, May Day and National Day.",
  },

  hefei: {
    identity:
      "Hefei is the capital of Anhui, a city between the Yangtze and Huai rivers on the northern shore of Lake Chao, with an urban population of about 5 million. Once a small town, it has grown fast in recent decades and is known for science, education and manufacturing; it is also the transfer point for Huangshan, Jiuhuashan and the villages of Hongcun.",
    layout:
      "Hefei sits on gently rolling ground between the Jianghuai hills and Lake Chao. The old town is ringed by the Huancheng Park (a green belt on the former moat); the government district is to the south-west and the Binhu new area is on the lake. South is Lake Chao and then Huangshan (Huangshan, Hongcun, Xidi, Tunxi old street); south-west are Lu'an and the Dabie Mountains; east is Nanjing.",
    gettingAround:
      "Xinqiao Airport is west of the city, with buses. Hefei is a hub on the Beijing–Fuzhou and Shanghai–Chengdu high-speed lines: about an hour to Huangshan North, an hour to Nanjing, 1.5 hours to Wuhan, 2.5 hours to Shanghai. The city has several metro lines plus buses; pay by QR code. The climate is monsoon, transitional between subtropical and warm-temperate: four clear seasons, hot muggy summers with plum rains in June–July, and damp cold winters.",
    culture:
      "The Hefei variety of Jianghuai Mandarin is spoken, with Mandarin widely used. Anhui cuisine (stinky mandarin fish, mao tofu, ham-stewed soft-shell turtle) and Jianghuai snacks are all available here. The pace is average. No tipping.",
    seeAndDo:
      "Baogong Park (the Bao River, the Bao Zheng shrine, the Qingfeng Pavilion); the former residence of Li Hongzhang and the Xiaoyaojin park; the Anhui Museum; the wetlands and Zhongmiao on Lake Chao. Hefei itself has few sights, so most people use it as a hub: Huangshan (with Hongcun, Xidi and the Tunxi old street), Jiuhuashan, and Tiantangzhai in the Dabie Mountains, each a day or two.",
    whenAndTips:
      "Spring and autumn (March–May, September–November) are the most comfortable and the best seasons for Huangshan. The plum rains and high summer are muggy; Huangshan is cool in summer but thundery, and seeing the sunrise is a matter of luck. Huangshan tickets and mountain-top rooms are tight in high season (summer holiday, National Day) — book ahead. Climbing Huangshan involves a lot of walking and steps.",
  },

  xiamen: {
    identity:
      "Xiamen is a city on the south-east coast of Fujian, made up of Xiamen Island and several mainland districts, with a resident population of about 5 million. It is known for its islands, the old villas of Gulangyu, its tidy streets and its relaxed pace, and is the gateway to travel in Fujian, near the tulou earth buildings and Wuyishan.",
    layout:
      "The core of Xiamen is Xiamen Island; the old town and the ferry pier (facing Gulangyu) are in the south-west, and the scenic Round-the-Island Road follows the coast. Bridges and tunnels connect to Jimei, Haicang and Tong'an on the mainland. West toward Longyan are the Hakka tulou of Yongding and Nanjing; north is Wuyishan.",
    gettingAround:
      "Gaoqi Airport is on the island itself, close to the centre. Xiamen has high-speed rail to Fuzhou (about 1.5 hours), Longyan (about 2 hours, for the tulou) and Wuyishan (about 3 hours). The city has a metro, BRT and buses; pay by QR code. Gulangyu is reached only by ferry (book online with ID in advance); there are no cars on the island, so it is walked. The climate is a southern subtropical maritime monsoon: warm and humid all year, muggy summers, a typhoon season July–September, and mild winters.",
    culture:
      "Southern Min (Hokkien) is spoken, with Mandarin widely used. Gongfu tea, seafood and snacks (satay noodles, oyster omelette, ginger duck, misua soup) are everyday food. Xiamen life is slow, with a lot of tea-drinking and conversation. No tipping.",
    seeAndDo:
      "Gulangyu (old villas, Sunlight Rock, the Shuzhuang Garden, the piano museum — book the ferry and an island slot in advance); cycling and sea views on the Round-the-Island Road; the Nanputuo Temple and the Xiamen University area; the everyday life of Shapowei and the Eighth Market; the Tan Kah Kee architecture of the Jimei school village. Farther out: the Hakka tulou of Yongding and Nanjing, a day or two.",
    whenAndTips:
      "October to April has the most comfortable weather and is high season. In the typhoon season (July–September) ferries stop and flights are delayed when storms hit, so leave slack in your plans. Gulangyu slots are tight in high season — book several days ahead. UV is strong all year, so use sun protection.",
  },

  zhengzhou: {
    identity:
      "Zhengzhou is the capital of Henan, a railway-hub city on the North China Plain south of the Yellow River, with an urban population of about 7 million. It grew up where the Beijing–Hankou and Longhai railways crossed and is young in itself, but the area around it is the heartland of early Chinese civilisation — Songshan and the Shaolin Temple, Kaifeng and Luoyang are all within an hour by high-speed rail.",
    layout:
      "Zhengzhou is built on the plain south of the Yellow River, on flat ground. The old town centres on Erqi Square and the Erqi (February 7th) Memorial Tower; the Zhengdong new area to the east has a CBD and several artificial lakes. South-west toward Dengfeng are Songshan and the Shaolin Temple; east is Kaifeng (about 30 minutes by high-speed rail); west is Luoyang. The Yellow River scenic area is north of the city.",
    gettingAround:
      "Xinzheng Airport is south-east of the city, linked by intercity rail. Zhengzhou is one of the \"hearts\" of the Chinese rail network: about 30 minutes to Kaifeng, 40 minutes to Luoyang, an hour to the Shaolin Temple (Dengfeng), 2 hours to Xi'an, 2.5 hours to Beijing. The city has several metro lines plus buses; pay by QR code. The climate is temperate monsoon: four clear seasons, dry dusty springs, hot summers with rain in July–August, and dry cold winters with some hazy days.",
    culture:
      "The Zhengzhou variety of Central Plains Mandarin is spoken, with no barrier to standard Mandarin. The food is wheat-based — huimian noodles, spicy hulatang soup and soup dumplings are typical. The pace is average. No tipping.",
    seeAndDo:
      "The Henan Museum (fine bronzes and ceramics, a solemn place); the Yellow River scenic area and the Yellow River Museum; the Erqi Memorial Tower; the Shang city ruins. From Zhengzhou: the Shaolin Temple and the Zhongyue Temple on Songshan (Dengfeng); Kaifeng (the Qingming Riverside Park, the Iron Pagoda, the Xiangguo Temple, the night markets); and Luoyang (the Longmen Grottoes, the White Horse Temple), each a day.",
    whenAndTips:
      "Spring and autumn (April–May, September–October) are the most comfortable; autumn colour on Songshan is good, and the Luoyang peony season is in April. High summer is muggy — take heat precautions; Zhengzhou saw extreme rainfall in 2021, so watch the weather in the flood season. Henan is about history and relics, so leave time for visits, and book popular museums in advance with ID.",
  },

  wuhan: {
    identity:
      "Wuhan is the capital of Hubei, a very large city where the Yangtze meets the Han River, with an urban population of about 9 million. It is made up of the \"three towns\" of Wuchang, Hankou and Hanyang across the water, and is the transport, industrial and educational centre of central China and the hub of the middle Yangtze.",
    layout:
      "The Yangtze and the Han meet here and split the city into three: Hankou (the old concession area, the riverfront, commerce), Hanyang (industry, Guishan, the ancient Guqin Terrace) and Wuchang (the Yellow Crane Tower, East Lake, many universities, the provincial government). Bridges, tunnels and ferries cross the rivers. East Lake is one of the largest urban lakes in China, with a long greenway.",
    gettingAround:
      "Tianhe Airport is north of the city, linked by metro line 2. Wuhan is a crossroads hub on the Beijing–Guangzhou and Shanghai–Chengdu high-speed lines: about 4–5 hours to Beijing, Guangzhou or Shanghai, 1.5 hours to Changsha, 2 hours to Yichang (the Three Gorges). The city has several metro lines plus buses and ferries (the Wuhan Guan to Zhonghua Lu ferry is a classic way to see the two rivers). The climate is subtropical monsoon: fierce summer heat (a famous \"furnace\"), with July–August the worst, damp cold winters, and short springs and autumns.",
    culture:
      "The Wuhan variety of Southwestern Mandarin is spoken — fast and loud — with Mandarin widely used. The \"early food\" breakfast culture is strong, with hot-dry noodles, doupi, mianwo and hutang fen the signatures. Wuhan people are direct. No tipping.",
    seeAndDo:
      "The Yellow Crane Tower and She Shan and the Simenkou area; the East Lake greenway (cycling, cherry blossom in March) and the Hubei Provincial Museum (the Zeng Hou Yi bells and the sword of Goujian, a solemn place); the Hankou riverfront and old concession buildings and the Jianghan Road pedestrian street; the snacks of Hubu Alley and Jiqing Street; the old streets of Tanhualin. Take the ferry to see the confluence.",
    whenAndTips:
      "March–April (East Lake and university-campus cherry blossom) and October–November have the best weather. High summer is fiercely hot — avoid midday outdoor activity and drink plenty of water. The plum-rain season is wet. The Provincial Museum is free but needs advance ID-based booking, and slots are tight in high season.",
  },

  guiyang: {
    identity:
      "Guiyang is the capital of Guizhou, a basin city ringed by mountains in the eastern part of the Yunnan–Guizhou Plateau, with an urban population of about 4 million. At about 1,100 m, it has cool summers and is nicknamed the \"summer capital\"; it is also the transfer centre for Guizhou's karst scenery (Huangguoshu, Libo, Fanjingshan) and ethnic-minority villages.",
    layout:
      "Guiyang is built in a pocket of flat land among several mountains, with the Nanming River through the centre; the city is hilly, with winding, bridge-heavy roads. The old town centres on the Jiaxiu Pavilion and the Dashizi area; Guanshanhu is the new district. South-west are Anshun and Huangguoshu; south are Libo and the Small Seven Arches; north-east are Kaili, the Xijiang Miao village and Fanjingshan.",
    gettingAround:
      "Longdongbao Airport is south-east of the city, with metro and buses. Guiyang is a hub on the Shanghai–Kunming and Guiyang–Guangzhou high-speed lines: about 30 minutes to Anshun, 40 minutes to Kaili, 1.5 hours to Libo, 2 hours to Chongqing, 4 hours to Guangzhou. The city has two metro lines plus buses (routes wind around the hills); pay by QR code. The climate is subtropical highland monsoon: cool summers (about 24°C in July), raw winters, and a lot of cloud, rain and fog year-round with little sun.",
    culture:
      "The Guiyang variety of Southwestern Mandarin is spoken, with Mandarin widely used. The area around is home to Miao, Buyi and Dong communities. The food is sour-and-spicy (sour-soup fish, siwawa, changwang noodles, tofu balls), with fermented chilli and houttuynia (\"fish-mint\") as local features. The pace is slow. No tipping.",
    seeAndDo:
      "The Jiaxiu Pavilion and the Nanming River, and the Cuiwei Garden; Qianling Shan Park (wild macaques — do not feed or provoke them); the Guizhou Provincial Museum; the Colourful Guizhou City. From Guiyang: Huangguoshu Falls and Tianxingqiao (Anshun), the clear-water gorges of the Small Seven Arches at Libo, the Xijiang Miao village (Kaili), and Fanjingshan, each a day or two.",
    whenAndTips:
      "June to September is cool and pleasant, the best time for escaping the heat and for the highest water at the falls — also the busiest and most expensive. Other seasons are grey and wet, so bring an umbrella. Mountain roads are winding and prone to landslides in the rainy season, so a tour or hired car is safer. The Fanjingshan cable car is capacity-limited and usually needs booking.",
  },

  xining: {
    identity:
      "Xining is the capital of Qinghai, a city in the Huangshui valley at about 2,260 m, with an urban population of about 1.5 million. It is the gateway to the north-eastern edge of the Tibetan Plateau — cool in summer as a hill retreat, the base for Qinghai Lake, the Kumbum Monastery, the Qilian range and Hoh Xil, and a stop to acclimatise before Tibet.",
    layout:
      "Xining lies in the narrow Huangshui valley, ringed by hills of loess and rock. The city runs east–west along the valley, with the centre around the Dashizi and Shuijing Alley; the Kumbum (Ta'er) Monastery is about 25 km south-west at Huangzhong. West are Qinghai Lake and the Qilian; south over the Sun-and-Moon Mountain is herding country; east is Lanzhou.",
    gettingAround:
      "Caojiabao Airport is east of the city, with intercity trains and buses. Xining is where the Lanzhou–Xinjiang high-speed line meets the Qinghai–Tibet railway: about an hour to Lanzhou, about three hours by road to the Heimahe area of Qinghai Lake, and trains toward Golmud and Lhasa. Getting around the city is mostly by bus. The climate is highland continental: cool all year, with summer days in the low-to-mid 20s and cool nights, cold but often clear winters, strong sun and dry air — sun protection is needed year-round.",
    culture:
      "The Xining variety of Lanyin Mandarin is spoken, with Mandarin widely used. This is a multi-ethnic area, and the food is wheat noodles, beef and mutton, liangpi, tianpei and thick set yoghurt. The Kumbum is an important Gelug monastery of Tibetan Buddhism; when visiting, dress modestly, remove hats, keep quiet, walk clockwise, and note that photography is usually forbidden inside the halls. No tipping.",
    seeAndDo:
      "The Kumbum Monastery (its \"three arts\": yak-butter sculpture, murals and appliqué); the Dongguan Grand Mosque; the Qinghai Provincial Museum; Nanshan Park for a city panorama; snacks on Mojia Street and Shuijing Alley. From Xining: Qinghai Lake (the loop road, Erlangjian, Bird Island, summer rape flowers), the rape fields of Menyuan (July), the Qilian grasslands, Kanbula, and the Yellow River at Guide, each a day or two.",
    whenAndTips:
      "June to September is high season; in mid-to-late July the rape flowers at Menyuan and Qinghai Lake are at their peak and rooms are tightest, so book well ahead. At just over 2,000 m most people have only mild effects — for the first day or two avoid hard exertion and drink plenty of water. If you continue toward Golmud or Lhasa, use Xining as an acclimatisation stop. Strong sun protection and warm layers are needed year-round.",
  },

  yinchuan: {
    identity:
      "Yinchuan is the capital of the Ningxia Hui Autonomous Region, a city on the Yinchuan Plain of the Yellow River at about 1,100 m, with an urban population of about 1.8 million. Hemmed in by the Helan Mountains, the Yellow River and desert, it is an oasis fed by Yellow River irrigation; it was the capital of the Western Xia, and locals call the area \"the Jiangnan beyond the passes\".",
    layout:
      "Yinchuan is built on the plain at the eastern foot of the Helan Mountains, west of the Yellow River, flat and netted with irrigation canals. The old town (Xingqing) is the core; Jinfeng and Xixia are newer districts. West at the Helan Mountains are the rock art, Suyukou and Zhenbeibu; east across the Yellow River is Shuidonggou; south are Zhongwei and Shapotou, where desert meets the river.",
    gettingAround:
      "Hedong Airport is east of the city across the Yellow River, with buses into town. Yinchuan has high-speed rail toward Lanzhou and Xi'an, about 1.5 hours to Zhongwei. Getting around the city is by bus and BRT. Reaching the Helan Mountains, Shuidonggou and Shapotou is mostly by hired car or tour. The climate is temperate continental arid: little rain year-round, very strong sun, a wide day-to-night range, comfortable late spring to autumn (May–October), cold winters, hot summers, and dusty windy springs.",
    culture:
      "The Yinchuan variety of Lanyin Mandarin is spoken, with no barrier to standard Mandarin. This is a Hui area, and the food is halal — hand-grabbed lamb, offal stew, lamb-mince noodles, liangpi and youxiang are common, and most restaurants are halal. The pace is easy. No tipping.",
    seeAndDo:
      "The Western Xia Tombs (rammed-earth mausoleum mounds below the Helan Mountains, called \"the Oriental pyramids\"); the Helan Mountain rock art and the Suyukou National Forest Park; the Zhenbeibu Western Film Studios (many films were shot here); Shuidonggou (a Palaeolithic site plus Ming Great Wall); the Ningxia Museum. South: Shapotou, where the Yellow River meets the Tengger Desert, with sandboarding.",
    whenAndTips:
      "May to October is the more comfortable window and the best time for the irrigated fields and fruit. In summer use strong sun protection and drink plenty of water, and for the desert and the Helan Mountains bring a windproof jacket and a sun hat. Spring dust days cut visibility and delay flights. The sights are spread out, so a hired car or tour is easier.",
  },

  urumqi: {
    identity:
      "Ürümqi is the capital of the Xinjiang Uygur Autonomous Region, a city on the northern foot of the Tianshan at the southern edge of the Junggar Basin, at about 800 m, with an urban population of about 3.5 million. It is one of the cities farthest from any ocean, and the gateway and transfer point for the rest of Xinjiang — north to Altay and Kanas, west to the Ili valley, south across the Tianshan to Turpan and the southern oases.",
    layout:
      "Ürümqi is built on an alluvial fan at the foot of the Tianshan, higher in the south and lower in the north, cut by ravines and hills (Hong Shan, Yamalike Shan). The Erdaoqiao and Grand Bazaar area is the core of Uyghur life and commerce; the newer districts are to the north. South over the Tianshan lie Dabancheng and Turpan; north-east are the Junggar Basin and the Gurbantunggut Desert.",
    gettingAround:
      "Tianshan International Airport (formerly Diwopu, renamed in 2025) is north-west of the city, with an airport bus and metro line 1. Ürümqi is the western hub of the Lanzhou–Xinjiang high-speed line: about an hour to Turpan, 2.5 hours to Hami; for Ili, Altay and Kashgar, most people fly or take long-distance trains and buses. Xinjiang runs on Beijing time, but daily life follows the daylight, so business and meals happen about two hours later than in eastern China. The climate is temperate continental, extremely dry, with wide day-to-night and seasonal swings: hot summers and severe, snowy winters.",
    culture:
      "This is a multi-ethnic city; Mandarin is spoken, with Uyghur used in some settings and bilingual signage. The food is wheat noodles, beef and mutton, pilaf, baked buns, laghman and a wide range of fruit. At Islamic sites, mind your dress and the etiquette. No tipping.",
    seeAndDo:
      "The Xinjiang International Grand Bazaar (food, crafts, song and dance); the Xinjiang Uygur Autonomous Region Museum (mummies and Silk Road relics, a solemn place); Hong Shan Park for a city panorama; Shuimogou and Nanshan (Juhuatai, the Tianshan Grand Canyon) for a cool summer retreat; Tianchi (Heavenly Lake) of the Tianshan, about two hours away. Ürümqi is mostly a transfer point for reaching the rest of Xinjiang.",
    whenAndTips:
      "The most comfortable season is roughly early summer to mid-autumn (May to early October), which is also when the fruit is best. Xinjiang is vast — cities are often hundreds or over a thousand kilometres apart, so plan in days. Some areas near the borders have extra registration or border-permit requirements for foreign visitors; confirm the current rules with your organiser or accommodation before you go and leave time to arrange them. Winters are severe, so bring full cold-weather gear.",
  },

  hongkong: {
    identity:
      "Hong Kong is a Special Administrative Region of China on the eastern side of the Pearl River estuary, made up of Hong Kong Island, the Kowloon Peninsula, the New Territories and more than 200 outlying islands, with a population of about 7.5 million — one of the most densely populated places in the world. It is a major international centre for finance, trade and shipping, with skyscrapers, a harbour and country parks packed into a small area.",
    layout:
      "Victoria Harbour divides Hong Kong into a north side and a south side: the north shore of Hong Kong Island holds the business and financial districts of Central, Admiralty, Wan Chai and Causeway Bay, with Victoria Peak behind them; across the water, Kowloon (Tsim Sha Tsui, Mong Kok, Yau Ma Tei) is more densely peopled. North of Kowloon are the New Territories with new towns and large country parks and hills. Lantau, Lamma and other islands are reached by ferry.",
    gettingAround:
      "Hong Kong International Airport is at Chek Lap Kok on Lantau, about 24 minutes to Central on the Airport Express. In the city, the MTR (metro) is the backbone, with buses, trams (the \"ding ding\", on Hong Kong Island only), the Star Ferry and taxis; a single Octopus card covers all of them. Drive and walk on the left. The climate is subtropical monsoon: hot, humid, rainy summers (May–September) that are also the typhoon season, and mild, dry winters (December–February) that can occasionally turn raw.",
    culture:
      "Cantonese is spoken, with English used in business and public settings and Mandarin also common. The pace is fast and efficient; sharing tables (\"daap toi\") is common in restaurants, and cha chaan teng and yum cha (dim sum) are central to the local food culture. Pay by Octopus, credit card or e-payment; restaurants usually add a 10% service charge and no further tip is expected. Mainland residents need an Exit-Entry Permit and endorsement for Hong Kong; arrangements for visitors from other countries and regions follow the latest rules published by the Hong Kong SAR government, so check before you travel.",
    seeAndDo:
      "Victoria Peak (the Peak Tram up, harbour night views); the Star Ferry across the harbour, the Central–Mid-Levels escalator, the old streets and temples of Sheung Wan; the Tsim Sha Tsui waterfront promenade, the Avenue of Stars, the Hong Kong Museum of History; the markets of Mong Kok and Sham Shui Po; the outlying islands (the Big Buddha and cable car on Lantau, Lamma, Cheung Chau); country-park hikes such as the MacLehose Trail and the Dragon's Back.",
    whenAndTips:
      "October to December has the most comfortable weather and is best for the outdoors. March–April is foggy and humid; May–September is hot and wet, and June–October is the typhoon season — when a Signal No. 8 or above is up, transport and most shops shut down, so leave slack in your plans. On hikes take water and sun protection; indoor air-conditioning is strong, so carry a light layer.",
  },

  macao: {
    identity:
      "Macao is a Special Administrative Region of China on the western side of the Pearl River estuary, about 60 km west of Hong Kong, made up of the Macao Peninsula, Taipa, Cotai and Coloane, with a population of about 680,000 in a very small area. It was long a Portuguese-administered port and mixes Chinese and Portuguese architecture, food and customs; its historic centre is a World Heritage Site.",
    layout:
      "The Macao Peninsula holds the old town and historic centre (around the Ruins of St Paul's, Senado Square and the A-Ma Temple) and is the most densely peopled part; Taipa, across the water, has the old street of Rua do Cunha and many newer resort complexes (along the Cotai Strip); Coloane, farthest south, still keeps a fishing village and natural coast. Several bridges link the peninsula and Taipa.",
    gettingAround:
      "Macao International Airport is on Taipa. From Hong Kong you can take a shuttle bus over the Hong Kong–Zhuhai–Macao Bridge or a ferry from Hong Kong's piers (about an hour). Macao is small and mostly walked, plus buses, and the big resorts run free shuttle buses. The climate is subtropical monsoon, close to Hong Kong's: hot, humid, typhoon-prone summers and mild winters.",
    culture:
      "The official languages are Chinese and Portuguese; Cantonese is spoken, with Mandarin and English usable in the tourist areas. Macao blends Chinese and Portuguese culture naturally: Macanese food (Portuguese chicken, bacalhau, African chicken), Portuguese egg tarts and pork-chop buns are signatures, and temples and churches often stand a street apart. The gaming industry is an important part of Macao's economy; minors are not allowed in casino areas. Mainland residents need an Exit-Entry Permit and endorsement for Macao.",
    seeAndDo:
      "The historic-centre walking route: the Ruins of St Paul's, the Mount Fortress and the Macao Museum, Senado Square and the Leal Senado, St Dominic's Church, the Dom Pedro V Theatre, the A-Ma Temple, the Mandarin's House; Rua do Cunha and the Taipa Houses on Taipa; St Francis Xavier's Church, Hac Sa Beach and Lord Stow's on Coloane. The shows and shopping inside the resort complexes are another kind of experience.",
    whenAndTips:
      "October to December is the most comfortable. Summers are muggy, and in the typhoon season (about July–September) transport and border crossings close temporarily when storms hit. Macao's sights are concentrated and mostly walked, with slopes and cobbled lanes in the old town, so wear comfortable shoes. The historic centre is very crowded in high season (weekends, holidays), especially around the Ruins of St Paul's.",
  },

  taipei: {
    identity:
      "Taipei is the largest city of China's Taiwan Province, set in the Taipei Basin in the north of the island of Taiwan, with a metropolitan population of about seven million. The city is ringed by mountains on three sides and open to a river on the fourth; it is warm and rainy, and night markets, hot springs, museums and convenient public transport are the first impressions it gives.",
    layout:
      "The Taipei Basin is enclosed by the Datun volcano group, the Nangang hills and other ranges, with the Tamsui River and its tributaries the Keelung and Xindian rivers running through it. The centre is in the middle of the basin; the Xinyi district has Taipei 101 and its shopping area, while Dadaocheng and Wanhua to the west are the old town. North is the volcanic terrain of Yangmingshan and the Beitou hot springs; the river mouth is at Tamsui; south-east over the mountains is Yilan.",
    gettingAround:
      "Taoyuan International Airport is about 40 km south-west of the city, about 40 minutes to Taipei Main Station on the Airport MRT; Songshan Airport, within the city, mainly serves flights within the island and to nearby areas. In the city the MRT (metro) is the backbone, with buses and YouBike public bicycles; a single EasyCard covers them. A high-speed rail line runs down the western corridor of the island linking the main cities. The climate is subtropical monsoon: hot, humid summers with plum rains in May–June and a typhoon season July–September, and mild but damp, grey winters.",
    culture:
      "Mandarin (called \"Guoyu\" locally) and Southern Min are spoken, with Hakka and several indigenous languages also in use. The night-market culture is strong (Shilin, Raohe Street, Ningxia Road), with snacks such as braised pork rice, beef noodle soup, oyster omelette and bubble tea. The pace is fairly relaxed, and there is a no-eating rule inside MRT cars. Pay by EasyCard, credit card or e-payment. Restaurants generally do not expect an extra tip.",
    seeAndDo:
      "The Palace Museum (a large collection of Chinese painting, calligraphy, ceramics and bronzes across the dynasties — a solemn place, half a day to a day); the Taipei 101 observatory for a basin panorama; the old streets and dried-goods shops of Dadaocheng and Dihua Street; the Longshan Temple; the sulphur fumaroles and flower seasons of Yangmingshan and the Beitou hot springs; the river mouth and old street at Tamsui; the Shilin and Raohe Street night markets.",
    whenAndTips:
      "October to December and March–April have relatively settled weather, good for the outdoors. May–June brings plum rains and July–September is the typhoon season with a lot of rain, so have a backup for outdoor plans when a typhoon is coming. Winters are damp and cool, and the mountains (Yangmingshan) are colder, so bring a waterproof jacket. Popular museums such as the Palace Museum are crowded in high season — buy tickets ahead and avoid the peak tour-group hours.",
  },

  sendai: {
    identity:
      "Sendai is the largest city of the Tohoku region and the capital of Miyagi Prefecture, with a metropolitan population of about 1.5 million. Ringed by mountains on three sides and facing the Pacific, its tree-lined centre earns it the name \"City of Trees\"; it is also the hub for Matsushima, Yamadera, the Naruko hot springs and the rest of Tohoku.",
    layout:
      "Sendai is built on the valley plain cut by the Hirose River, backed by the Ou Mountains and facing the Sendai plain and the Pacific. The centre is west of Sendai Station, and the ruins of Aoba Castle (Sendai Castle) stand on high ground to the west. North-east along the coast is Matsushima Bay; south-west into the hills are the Sakunami and Akiu hot springs; north is Naruko. The 2011 earthquake and tsunami hit the coast hard, and some rebuilt areas now have memorial facilities.",
    gettingAround:
      "Sendai Airport is south-east of the city, about 25 minutes to Sendai Station on the airport line. Sendai is a main stop on the Tohoku Shinkansen: about 1.5 hours to Tokyo, 40 minutes to Morioka. The city has two subway lines plus buses and the Loople Sendai sightseeing bus. The climate is Pacific-side temperate: summers that are not too hot and fairly humid, cold winters with little snow in the city, and comfortable springs and autumns.",
    culture:
      "Standard Japanese with a slight Tohoku accent is spoken, and tourist facilities have full multilingual signage. Local specialities include grilled beef tongue, sasa-kamaboko fish cake and zunda (sweet edamame paste) desserts. The Sendai Tanabata Festival in summer is one of the three great festivals of Tohoku. The pace is easier than Tokyo's. No tipping.",
    seeAndDo:
      "The Aoba Castle site with the equestrian statue of Date Masamune and a city panorama; the Zuihoden (the Date family mausoleum); the Osaki Hachimangu shrine; the trees of Jozenji-dori and the Pageant of Starlight (December). Nearby: the islands of Matsushima Bay and the Zuiganji temple (by sightseeing boat), Yamadera (the Risshakuji, up stone steps) in Yamagata, and the Akiu and Sakunami hot springs. The tsunami memorial sites and museums along the coast (solemn places).",
    whenAndTips:
      "May–June and September–October have the most comfortable weather; the Tanabata Festival in early August is the liveliest but rooms are tight. Winters are cold and mountain roads can ice up. Matsushima boat trips and the Yamadera climb depend on the weather — watch for slippery paths in rain or snow. Be quiet and respectful at the disaster memorial sites.",
  },

  yokohama: {
    identity:
      "Yokohama is the capital of Kanagawa Prefecture, a port city on Tokyo Bay just south of Tokyo, and the second most populous city in Japan (about 3.7 million). It opened as a port in the mid-19th century, one of Japan's first cities for foreign trade, and now mixes a Chinatown, Western-era buildings and a modernised port district; many people visit it as a day trip from Tokyo.",
    layout:
      "Yokohama runs along the western shore of Tokyo Bay. The core is the towers and ferris wheel of Minato Mirai 21 and the waterfront around the Red Brick Warehouses; south are the Western-style old houses of Yamate and the Harbour View Park, with Japan's largest Chinatown below; farther south are Honmoku and Kanazawa Ward. North it quickly joins the Tokyo metropolitan area.",
    gettingAround:
      "From Haneda Airport, an airport bus or train reaches Yokohama Station in about 30 minutes. Trains between Yokohama and Tokyo are frequent (JR, Tokyu, Keikyu), about 30 minutes, with a single Suica or PASMO card. The city has a subway and the Minatomirai Line, and the waterfront is walkable. The climate is almost the same as Tokyo's: muggy summers, clear cold winters with little snow, and plum rains in June.",
    culture:
      "Standard Japanese is spoken, with multilingual signage in the tourist areas. Chinatown is a Chinese community and Yokohama's liveliest dining district. The port area has many museums and galleries. The pace is like Tokyo's but with a more relaxed seaside feel. Restaurants do not expect an extra tip.",
    seeAndDo:
      "Minato Mirai 21: the Landmark Tower observatory, the Cosmo Clock 21 ferris wheel, the Red Brick Warehouses and the waterfront promenade past the car museum; dim sum in Yokohama Chinatown; the Western houses and foreigners' cemetery of Yamate and the Harbour View Park; the Japanese garden of Sankeien; the Sea Paradise amusement park on Hakkeijima (for families).",
    whenAndTips:
      "Spring and autumn (April–May, October–November) are the most comfortable, and the Minato Mirai night view is good all year. The plum rains and high summer are muggy. Chinatown and the Red Brick Warehouses are crowded on weekends and holidays. Yokohama works as a half-day to full-day part of a Tokyo trip, with an easy train ride each way.",
  },

  nagoya: {
    identity:
      "Nagoya is the capital of Aichi Prefecture and the central city of Japan's Chubu region, with a metropolitan population of about 9 million. It is a manufacturing centre, especially for cars; the city is regular with wide roads, known in itself for Nagoya Castle and its miso-based \"Nagoya food\", and it is also the hub for Shirakawa-go, Takayama, the Tateyama–Kurobe route and Ise.",
    layout:
      "Nagoya is built on the Nobi Plain, flat, with streets on a regular grid. The centre has two hubs, Nagoya Station (\"Meieki\") and Sakae; Nagoya Castle is to the north and the Atsuta Shrine to the south. North lie Gifu, Takayama and Shirakawa-go; east are the Central Alps and the Kiso valley; south is the Chita Peninsula; west are Ise and Toba.",
    gettingAround:
      "Chubu Centrair International Airport is on a man-made island, about 30 minutes to Nagoya Station on the Meitetsu express. Nagoya is a main stop on the Tokaido Shinkansen: about 1.5 hours to Tokyo and to Osaka. The city has several subway lines plus buses; use a manaca or other IC card. The climate is Pacific-side temperate — muggy summers (often hotter than Tokyo) and clear cold winters with little snow in the city.",
    culture:
      "The Nagoya dialect is spoken, with standard Japanese used. Nagoya's food is its own school: miso katsu, miso-simmered udon, hitsumabushi (eel rice three ways), tenmusu, and grilled chicken wings (tebasaki). Locals have a strong sense of local identity. No tipping.",
    seeAndDo:
      "Nagoya Castle (the golden shachihoko, the reconstructed Honmaru Palace); the Atsuta Shrine; the Tokugawa Art Museum and Tokugawa Garden; the arcades and secondhand shops of Osu; the Port of Nagoya Public Aquarium and the JR Central Maglev and Railway Park. From Nagoya: the old streets and Hida beef of Takayama, the gassho-zukuri villages of Shirakawa-go, the Tateyama–Kurobe Alpine Route (open April–November), and the Ise Grand Shrine.",
    whenAndTips:
      "Spring and autumn (March–May, October–November) are the most comfortable. High summer is hot — take heat precautions — and the plum rains are wet. The Shirakawa-go winter light-up (January–February, booking required) is very popular. The Tateyama–Kurobe route runs from mid-April to late November, with the snow corridor most impressive in April–May; book transport ahead in high season.",
  },

  kanazawa: {
    identity:
      "Kanazawa is the capital of Ishikawa Prefecture, the central city of the Kaga area on the Sea of Japan side, with an urban population of about 450,000. It was the castle town of the Kaga domain in the Edo period — long wealthy and devoted to crafts (gold leaf, lacquer, Kaga yuzen dyeing, Kutani ware) — and, spared major war damage, it keeps large old quarters and a famous garden, earning it the nickname \"Little Kyoto\".",
    layout:
      "Kanazawa is built on hills and flat ground between the Sai and Asano rivers. The centre is around Kanazawa Castle and Kenrokuen; north across the Asano is the Higashi Chaya district (an old geisha quarter); south-west across the Sai are the Nishi Chaya district and the temples of Teramachi; the Nagamachi area still has samurai residences behind earthen walls. Kanazawa Station is the modern gateway, with a large wooden Tsuzumi Gate.",
    gettingAround:
      "Komatsu Airport is about 30 km south-west of the city, about 40 minutes to Kanazawa Station by airport bus; you can also take the Hokuriku Shinkansen from Tokyo (about 2.5 hours). Kanazawa's sights are compact, walked plus the castle-town loop bus. The climate is Sea-of-Japan side: cloudy, snowy, humid winters (locals say you can forget your lunch but not your umbrella), muggy summers, and comfortable springs and autumns.",
    culture:
      "The Kanazawa dialect is spoken, with standard Japanese used. Kanazawa is known for traditional crafts and for tea-ceremony and wagashi culture, and gold leaf is used on buildings, objects and even food. The food is Kaga cuisine, jibuni, and seafood at the Omicho Market. The pace is unhurried. No tipping.",
    seeAndDo:
      "Kenrokuen (one of the three great gardens of Japan, different in each season, with \"yukitsuri\" snow ropes in winter); Kanazawa Castle Park; the 21st Century Museum of Contemporary Art (the \"swimming pool\" work); the tea-house buildings and gold-leaf shops of the Higashi Chaya district; the samurai residences of Nagamachi; seafood at the Omicho Market; the D.T. Suzuki Museum. From Kanazawa: Shirakawa-go, Gokayama, the Noto Peninsula and the Kaga hot-spring resorts.",
    whenAndTips:
      "April–May and September–November have the best weather. Winters are grey and snowy, so bring an umbrella and waterproof shoes for outdoor plans, though the snow scenery at Kenrokuen is lovely. The plum rains and high summer are muggy. The Omicho Market and Kenrokuen are crowded on weekends — go in the morning.",
  },

  nara: {
    identity:
      "Nara is the capital of Nara Prefecture, about 40 km south of Kyoto, and was the capital of Japan (as Heijo-kyo) in the 8th century — earlier than Kyoto. The city is small; several huge old temples and shrines and a large park where wild deer roam are all close together, making Nara the place to feel the Nara period and early Buddhist art.",
    layout:
      "The core of Nara is Nara Park — a broad expanse of grass and woodland holding Todaiji, Kasuga Taisha, Kofukuji, the National Museum and several hundred wild deer, walkable from Kintetsu Nara Station. West of the centre are the Heijo Palace site and the Toshodaiji and Yakushiji temples (Nishi-no-kyo); farther south-west is Horyuji (Ikaruga). The rest of the city is quiet residential streets.",
    gettingAround:
      "Nara has no airport; people usually arrive from Kansai Airport by limousine bus or train (via Osaka or Kyoto), or from Kyoto or Osaka on the Kintetsu line (about 40 minutes to Kintetsu Nara Station). The central sights are compact, on foot plus buses, and Nishi-no-kyo and Ikaruga are reached by train and a short walk. The climate is that of an inland basin: muggy summers, damp cold winters, and short springs and autumns.",
    culture:
      "Kansai-dialect Japanese is spoken, with multilingual signage at the sights. The deer of Nara Park are treated as protected wild animals: you may feed them the special \"deer crackers\", but do not tease them or give other food, and note that they will butt people for food. Most temples require removing shoes and forbid photography indoors. The pace is even slower than Kyoto's. No tipping.",
    seeAndDo:
      "Todaiji (the Great Buddha Hall and the Vairocana Buddha, the guardian figures at the Nandaimon); Kasuga Taisha (stone lanterns, vermilion corridors); the five-storey pagoda of Kofukuji and the Ashura figure in its treasure hall; the Nara National Museum (the annual autumn Shosoin exhibition); Wakakusayama for sunset; Toshodaiji and Yakushiji at Nishi-no-kyo; Horyuji at Ikaruga (one of the oldest groups of wooden buildings anywhere).",
    whenAndTips:
      "Cherry blossom (early April), fresh green (May) and autumn leaves (late November) are the most beautiful. High summer and the plum rains are uncomfortable. Most people day-trip from Kyoto or Osaka, but an overnight lets you catch Nara Park before the crowds. Take care feeding the deer, and keep valuables and paper bags away (the deer will grab them).",
  },

  hiroshima: {
    identity:
      "Hiroshima is the capital of Hiroshima Prefecture and the largest city of the Chugoku region, with a metropolitan population of about 1.4 million. It sits on the delta of the Ota River on the Seto Inland Sea; it was destroyed by an atomic bomb in August 1945 and rebuilt, and is now known for its peace memorial sites, the Itsukushima Shrine on Miyajima and the scenery of the Inland Sea.",
    layout:
      "Hiroshima is built on the delta split by the many channels of the Ota River, cut into blocks by water. The centre is around Kamiyacho and Hatchobori; the Peace Memorial Park and the Atomic Bomb Dome are on the Motoyasu River just west of the centre, with Hiroshima Castle to the north. South-west by boat or train is Miyajima (Itsukushima); east along the Inland Sea are Kure, Onomichi and the islands.",
    gettingAround:
      "Hiroshima Airport is about 50 km east of the city, about 45 minutes to Hiroshima Station by limousine bus. Hiroshima is a main stop on the Sanyo Shinkansen: about 1.5 hours to Osaka, an hour to Fukuoka. The city has trams (\"Hiroden\") plus buses and water buses. The climate is Seto Inland Sea style: mild all year with relatively little rain and many clear days, muggy summers and winters that are not very cold.",
    culture:
      "The Hiroshima dialect is spoken, with standard Japanese used. The local speciality is Hiroshima-style okonomiyaki (batter, cabbage and noodles cooked in layers, different from the Osaka style), plus oysters and small Inland Sea fish. Baseball (the Hiroshima Toyo Carp) is very popular locally. The pace is easy. No tipping.",
    seeAndDo:
      "The Peace Memorial Park, the Atomic Bomb Dome (a World Heritage Site) and the Hiroshima Peace Memorial Museum — a solemn place; be quiet and follow the museum's rules. Miyajima: the Itsukushima Shrine (the great torii that \"floats\" at high tide) and Mount Misen, with wild deer on the island; Hiroshima Castle and the Shukkeien garden; farther out, the Yamato Museum at Kure, the hillside old streets of Onomichi, and the Shimanami Kaido island-hopping cycle route.",
    whenAndTips:
      "Spring and autumn (March–May, October–November) are the most comfortable, and the Momijidani valley on Miyajima is lovely in November. The plum rains (June–July) and high summer are muggy. To see the torii, match the tide (walk close at low tide, photograph the \"floating\" effect at high tide) — check that day's tide times before going. Be respectful in word and manner at the peace memorial sites.",
  },

  takamatsu: {
    identity:
      "Takamatsu is the capital of Kagawa Prefecture, a city on the north coast of Shikoku on the Seto Inland Sea, with an urban population of about 420,000. It is the sea gateway to Shikoku, known for Ritsurin Garden, Sanuki udon and the Inland Sea islands (the contemporary art of Naoshima and Teshima).",
    layout:
      "Takamatsu is built on a narrow strip of flat land by the Inland Sea, backed by Yashima, the plateau-topped hill that is the city's symbol. The centre is around Takamatsu Station and the Marugamemachi arcade, with Ritsurin Garden to the south. Takamatsu Port has ferries to Naoshima, Shodoshima, Megijima and other islands. West are Marugame and Kotohira (the Kotohiragu shrine); east is Tokushima.",
    gettingAround:
      "Takamatsu Airport is about 15 km south of the city, about 40 minutes to the centre by airport bus. Takamatsu is linked to Honshu by the Seto Ohashi bridge — about an hour to Okayama by JR, then the Shinkansen. The city has buses and the Kotoden (Kotohira Electric Railway). The climate is Seto Inland Sea style: mild all year with little rain and many clear days, muggy summers and mild winters.",
    culture:
      "The Sanuki dialect is spoken, with standard Japanese used. Sanuki udon is the local pride, with many self-service \"noodle workshops\" where you serve your own noodles, add toppings and pay — cheap and quick. Bone-in grilled chicken thigh is a Marugame speciality. The pace is slow. No tipping.",
    seeAndDo:
      "Ritsurin Garden (a large stroll garden of the daimyo, highly rated among Japanese gardens); Yashima for a panorama of the Inland Sea and the Yashimaji temple; the Takamatsu Castle site (Tamamo Park, with a seawater moat); ferries to Naoshima (the Chichu Art Museum, the pumpkin, Benesse House), the Teshima Art Museum and Shodoshima (olives, the Kankakei gorge). The Setouchi Triennale art festival is held around here.",
    whenAndTips:
      "Spring and autumn (March–May, October–November) are the most comfortable. The art-island museums mostly need advance booking and often close on Mondays, and ferry sailings are limited, so check schedules and opening days before planning. Summer is muggy and there is little shade on the islands, so carry water and sun protection.",
  },

  nagasaki: {
    identity:
      "Nagasaki is the capital of Nagasaki Prefecture, a port city at the western end of Kyushu facing the East China Sea, with an urban population of about 400,000. In the Edo period it was Japan's only port open to the outside world (to the Dutch and the Chinese), leaving Dejima, the Chinese quarter and blocks of Western and Chinese architecture built up the hillsides; it was struck by an atomic bomb in August 1945 and also has peace memorial facilities.",
    layout:
      "Nagasaki is a classic harbour city, its districts running up the hillsides on both sides of a bay that reaches inland, with stacked houses and many slopes and stone steps. The centre runs from Nagasaki Station to the Hamamachi arcade; Dejima is to its south; the Glover Garden and Oura Church are on the Minamiyamate side on the east of the bay; Mount Inasa is on the west. North is the hypocentre and Peace Park.",
    gettingAround:
      "Nagasaki Airport is built on a man-made island in Omura Bay, about 45 minutes to the city by airport bus. The West Kyushu Shinkansen runs to Nagasaki, changing at Takeo-Onsen, about 1.5 hours to Hakata. In the city, trams are the main transport (a one-day pass is good value), and the hillside neighbourhoods use inclined lifts and a ropeway. The climate is western-Kyushu maritime: mild and rainy all year, muggy summers with typhoons to watch July–September, and winters that are not very cold.",
    culture:
      "The Nagasaki dialect is spoken, with standard Japanese used. Nagasaki's food mixes Chinese, Dutch and Portuguese influences: champon, sara-udon, shippoku cuisine, castella sponge cake and kakuni-manju. The Nagasaki Lantern Festival, a Chinese-style lantern event, is held around the Spring Festival. The pace is easy. No tipping.",
    seeAndDo:
      "The Glover Garden and Oura Church (Western residences of the late Edo period, with harbour views); Dejima (the reconstructed Dutch trading post); the Shinchi Chinatown; the Spectacles Bridge; Mount Inasa for the night view (by ropeway); the Hypocentre Park, the Nagasaki Atomic Bomb Museum and the Peace Park — solemn places; be quiet and follow the rules. Farther out: Gunkanjima (Hashima, by boat, weather-dependent), Unzen and Shimabara.",
    whenAndTips:
      "Spring and autumn (March–May, October–November) are the most comfortable. The plum rains (June–July) are heavy — Nagasaki is one of the wetter cities in Japan, so carry an umbrella. Boats to Gunkanjima are often cancelled at short notice for wind and swell, so have a backup. Be respectful in word and manner at the atomic-bomb sites.",
  },

  "new-zealand-overview": {
    identity:
      "New Zealand lies in the south-west Pacific, made up of the North Island, the South Island and some smaller islands, with a population of about 5.2 million, most of it on the North Island. In Māori the country is called Aotearoa (\"land of the long white cloud\"). The official languages are English, Māori and New Zealand Sign Language. It sits on a plate boundary — mountainous, with volcanoes, geothermal areas and earthquakes — and faces Australia across the Tasman Sea.",
    layout:
      "The North Island is comparatively gentle, with large areas of pasture, the central volcanic plateau (Ruapehu, Lake Taupō) and the geothermal country around Rotorua; the largest city, Auckland, and the capital, Wellington, are both here. The South Island is split lengthwise by the Southern Alps, with fiords and glaciers on the west, the Canterbury Plains on the east, the largest city being Christchurch, and Queenstown as the tourism centre of the south. Cook Strait separates the islands, with a car ferry across it.",
    gettingAround:
      "Distances between towns are not huge but the roads are winding; travel is mainly by air (Air New Zealand, Jetstar and others) and by car. Self-drive is common — drive on the left, expect winding roads and many one-lane bridges, and in winter parts of the South Island need care for ice and snow. Intercity coaches and scenic trains are limited. The climate is temperate maritime; in the southern hemisphere the seasons are reversed (December–February is summer); the weather changes fast, you can get \"four seasons in one day\", and windproof, waterproof clothing is worth carrying year-round. UV is strong — sun protection is basic sense.",
    culture:
      "English is universal; Māori language and culture (the marae meeting house, the haka, the hāngī earth-oven meal) are part of the national identity, and many place names are Māori or dual English–Māori (per the New Zealand Geographic Board, NZGB). The pace is relaxed, with a strong value on the outdoors and on conservation. Border checks on food, soil, and camping and hiking gear are very strict (to keep out biosecurity threats), so declare honestly and clean your boot soles. Tipping is not customary.",
    seeAndDo:
      "On the South Island, the Southern Alps, the fiords, the glaciers and the night sky (the Tekapo area is a dark-sky reserve); adventure sports at Queenstown; on the North Island, the volcanoes and geothermal areas, the Waitomo glow-worm caves and the Bay of Islands. Hiking (the \"Great Walks\"), whale watching, penguins and albatross, and Lord of the Rings locations are common themes. The seasons are distinct, and skiing is July–September.",
    whenAndTips:
      "December–March is the summer high season with the best weather and long daylight; June–August is winter, with skiing on the South Island and a milder North Island. Citizens of most countries need to apply online for an NZeTA and pay a visitor levy before arrival, which cannot be arranged on arrival. Popular tracks (such as the Milford Track) need booking far ahead in peak season. The weather is changeable — check forecasts for mountain hikes and leave your plans with the authorities.",
  },

  auckland: {
    identity:
      "Auckland is the largest city in New Zealand, with a metropolitan population of about 1.7 million — a third of the country. It is built on a narrow isthmus with a harbour on each side and dozens of low extinct volcanic cones scattered through it, hence \"City of Sails\". It is not the capital — that is Wellington. The city is named after the Earl of Auckland, a 19th-century British politician.",
    layout:
      "Auckland straddles the isthmus between the Waitematā Harbour (east) and the Manukau Harbour (west); the city centre and the Sky Tower are on the eastern harbour. The whole city sits on the Auckland Volcanic Field — about 50 extinct cones through the suburbs, and Maungawhau (Mt Eden) and Maungakiekie (One Tree Hill) can both be climbed for a panorama. North over the Harbour Bridge is the North Shore and the way to the Bay of Islands; east are the Hauraki Gulf islands such as Waiheke; south is the Waikato farm country.",
    gettingAround:
      "Auckland Airport is south of the city, with airport buses (SkyDrive/SkyBus) and public buses into town; a rail link is under construction. The city has buses, trains and ferries with a single AT HOP card; ferries go to Devonport and Waiheke. The city is spread out and many people hire a car (drive on the left). The climate is temperate maritime, mild and humid all year — about 23°C in summer (December–February), about 14°C in winter — with rain possible in any season and often windy.",
    culture:
      "English is universal. Auckland has one of the largest Pacific Islander populations of any city (sometimes called the largest Polynesian city in the world), with big Māori, Samoan, Tongan and Asian communities and very diverse food and markets. The pace is slower than a European or American big city, and weekends centre on the coast and the outdoors. Tipping is not expected.",
    seeAndDo:
      "The Sky Tower for the city and harbour; Mt Eden and One Tree Hill for the volcanic landforms; the Viaduct waterfront and the old streets of Parnell; the Auckland War Memorial Museum (Māori and Pacific taonga, war remembrance — a solemn place) and the Maritime Museum; ferries to Devonport for the coastal forts, and to Waiheke for the wineries and beaches. An hour west are the black-sand beaches such as Piha and the Waitākere rainforest (parts are managed to slow kauri dieback disease).",
    whenAndTips:
      "November–April has the best weather. Auckland is known for \"four seasons in one day\", so carry a windproof, waterproof layer. The black-sand beaches (Piha, Bethells) have big surf and rip currents — swim only between the flags where there are lifeguards. Border checks on hiking boots, tents and food are very strict, so clean and declare.",
  },

  wellington: {
    identity:
      "Wellington is the capital of New Zealand, at the southern tip of the North Island on Cook Strait, with a metropolitan population of about 420,000. Hills on three sides and the sea on the fourth make the centre compact — it is called one of the smallest capitals in the world — and it is famously windy (\"Windy Wellington\"). The city is named after the Duke of Wellington, who defeated Napoleon; there is also a Wellington in Somerset, England, and one in New South Wales, Australia.",
    layout:
      "Wellington is built on the steep western shore of an almost enclosed harbour (Lambton Harbour), with little flat land — houses climb the slopes in layers, linked by a cable car and steep steps. The centre and Parliament (the \"Beehive\") are by the harbour; south are the Botanic Garden at the top of the cable car and the Zealandia sanctuary; at the harbour mouth to the north is the ferry terminal (the South Island ferries leave from here).",
    gettingAround:
      "Wellington Airport is just south of the city, close to the centre, with an airport bus. The city has buses and a commuter rail network, paid with a Snapper card or bank card. The Cable Car links the centre with the Botanic Garden on the hill. For the South Island, take the inter-island ferry (about 3–3.5 hours to Picton). The climate is temperate maritime, mild all year but very windy, especially in spring, and the weather changes fast — always carry a windproof jacket.",
    culture:
      "Wellington is New Zealand's political, cultural and film centre (Wētā Workshop, and the post-production for the Lord of the Rings and Avatar films is done here), with a high density of cafés and small theatres — it is called the \"coffee capital\". The pace is unhurried and the centre is walkable. Tipping is not expected.",
    seeAndDo:
      "Te Papa, the national museum (free, Māori and natural history — a solemn place); the cable car up to the Botanic Garden; Zealandia, an urban ecosanctuary for native birds; the independent shops and restaurants of Cuba Street and the surrounding quarter; the harbour waterfront walk; the Mount Victoria lookout by cable car or car. The ferry across Cook Strait into the Marlborough Sounds is a classic piece of scenery.",
    whenAndTips:
      "December–March has the most settled weather. Wind is normal in Wellington, especially in spring, and stronger by the sea and up high — hats and light items blow away easily. The Cook Strait ferry is delayed or cancelled in high wind and swell, so leave flexibility if you have a South Island connection. Border checks on outdoor gear and food are strict.",
  },

  rotorua: {
    identity:
      "Rotorua is in the volcanic country of the central North Island, on the shore of Lake Rotorua, with an urban population of about 60,000. It sits in an old caldera with strong geothermal activity — geysers, boiling mud pools and coloured hot springs are everywhere, and the air often smells of sulphur. It is also one of the centres of Māori culture, especially that of the Te Arawa people.",
    layout:
      "The town is on the southern shore of Lake Rotorua, around the Government Gardens. Geothermal areas are in and around it: Kuirau Park is in town, while Wai-O-Tapu (\"thermal wonderland\"), Te Puia and Waimangu are to the south; the Whakarewarewa Forest (the Redwoods) to the south-east is for cycling and running. There are a dozen or so volcanic lakes around.",
    gettingAround:
      "Rotorua Airport is on the eastern shore of the lake, with flights to Auckland, Wellington and Christchurch. Most people drive from Auckland (about 3 hours). The town is small and walkable; the surrounding geothermal areas and the Redwoods need a car or a tour. The climate is temperate maritime — mild summers, cool winters, rain year-round, and high humidity near the geothermal areas.",
    culture:
      "English is universal, and Māori culture is part of daily life here: you can visit a marae, see kapa haka performance, and try hāngī (an earth-oven meal). At geothermal areas and Māori villages, stay on the paths and follow instructions — the ground crust is thin and scalding, and leaving the path is dangerous. Tipping is not customary.",
    seeAndDo:
      "The Wai-O-Tapu geothermal area (the Champagne Pool, the Artist's Palette, the Lady Knox Geyser, which erupts at a set time each day); Te Puia for geysers and the Māori arts institute; walking or cycling the Redwoods and the treewalk (lit at night); the lake-view hot pools of the Polynesian Spa; the mud baths of Hell's Gate; nearby Mount Tarawera and the Blue and Green lakes.",
    whenAndTips:
      "It is a year-round destination, most comfortable December–March. The sulphur smell tarnishes silver jewellery, so sensitive people can take it off. The geothermal crust is dangerous — stay on the paths and mind children. Geysers erupt at set times, so plan around them. It is rainy, so bring an umbrella and waterproof shoes.",
  },

  christchurch: {
    identity:
      "Christchurch is the largest city on the South Island and the centre of the Canterbury region, with a metropolitan population of about 400,000. It is built on the eastern edge of the Canterbury Plains at the foot of Banks Peninsula; it began as a planned Church of England settlement, laid out on a grid around a cathedral, and is named after Christ Church, a college of Oxford — there is also a Christchurch in Dorset, England. The 2010–2011 earthquakes badly damaged the centre, which has been rebuilding since.",
    layout:
      "Christchurch is built on the flat Canterbury Plains, with the Avon River winding through the grid of the centre and Cathedral Square at the heart. South-east are the port of Lyttelton and Banks Peninsula (an old extinct volcano with a broken coast of small bays); the Port Hills on the peninsula's edge give views over Lyttelton Harbour. West are the plains and the foot of the Southern Alps.",
    gettingAround:
      "Christchurch Airport is north-west of the city, with an airport bus and public buses into town. Christchurch is the main gateway to the South Island: west over Arthur's Pass to the West Coast (with the TranzAlpine scenic train), south to Tekapo, Aoraki/Mount Cook and Queenstown, north to Kaikōura for whales. The city has buses (Metrocard); the centre is flat and good for cycling (there are public bikes). The climate is temperate maritime, with dry summers, frosty winters, and occasional hot, dry föhn winds (\"norwesters\").",
    culture:
      "English is universal; Christchurch is called the most English of New Zealand's cities, with large parks, cricket grounds and Edwardian buildings. Since the earthquakes, the centre has filled with transitional spaces made of shipping containers and street art, and feels younger than before. The pace is slow. Tipping is not expected.",
    seeAndDo:
      "Punting on the Avon, the Botanic Gardens and Hagley Park; the rebuilding Cathedral Square, the Cardboard Cathedral and the earthquake memorial wall (a solemn place); the Canterbury Museum and the Bridge of Remembrance; the gondola up the Port Hills for the view over Lyttelton Harbour; the International Antarctic Centre. Drive out to Akaroa (a French-flavoured town on Banks Peninsula), Tekapo for the night sky, and Aoraki/Mount Cook.",
    whenAndTips:
      "December–March has the best weather. On norwester days (dry, hot north-west wind) the temperature jumps and fire risk is high. The TranzAlpine train and the routes to Aoraki/Mount Cook and Tekapo need booking in high season. The inland South Island has snow in winter — check road conditions and carry chains. Border checks on outdoor gear and food are very strict.",
  },

  queenstown: {
    identity:
      "Queenstown is in the south of the South Island on the shore of Lake Wakatipu, ringed by mountains including The Remarkables, with a resident population of only about 50,000 but as the tourism and outdoor-sports centre of New Zealand. It is known as the \"adventure capital\" — bungy jumping (the first commercial bungy site is nearby), skydiving, jetboating and skiing are all here. The origin of the name is uncertain, with several accounts.",
    layout:
      "Queenstown is built on a bay at a Z-shaped bend in Lake Wakatipu; the centre is compact and walkable, and the Skyline Gondola runs straight from town to a hilltop lookout. Across the lake are The Remarkables; the lake's north-west arm leads to Glenorchy and the valleys used for Lord of the Rings. North-east over the hills are Arrowtown (an old gold-rush town) and Wānaka; south are Te Anau and the fiords.",
    gettingAround:
      "Queenstown Airport is at Frankton, east of town, about 10 minutes from the centre, with flights to Auckland, Christchurch, Wellington and some Australian cities. There are buses in town and to the airport, but most sights, tracks and ski fields need a car or a tour. In winter, mountain roads need care for ice and snow and may require chains. The climate is temperate semi-arid (in the mountains' rain shadow): warm, dry summers, cold, snowy winters, and a wide day-to-night range.",
    culture:
      "English is universal; Queenstown has one of the highest shares of international visitors in New Zealand, with a well-developed service industry and high prices. Life revolves around the outdoors and the lake and mountains. Tipping is not expected.",
    seeAndDo:
      "The Skyline Gondola for the view over Lake Wakatipu and The Remarkables, plus the summit luge; a cruise on the historic steamship TSS Earnslaw; bungy, skydiving and jetboating (choose licensed operators); drives to Glenorchy, Arrowtown and Wānaka; a long day trip or overnight to Milford Sound (a long, winding drive, mostly done by tour or with a stay). Skiing in winter at Coronet Peak and The Remarkables.",
    whenAndTips:
      "December–February is the summer high season (hiking, water activities); June–August is the ski season; both are expensive for accommodation and need early booking. The Milford Sound day trip is about a 4-hour drive each way, on a winding road with changeable weather. For adventure activities, use licensed operators and read the insurance and safety briefings.",
  },

  dunedin: {
    identity:
      "Dunedin is on the south-eastern coast of the South Island at the base of the Otago Peninsula, with a metropolitan population of about 130,000 — the fourth-largest city in New Zealand. It was founded by Scottish Presbyterian settlers in the mid-19th century, and the name Dunedin is the old Scots Gaelic name for Edinburgh (Dùn Èideann); the street names, churches and university carry a strong Scottish stamp. The wildlife nearby — albatross, yellow-eyed penguins, sea lions — is a major draw.",
    layout:
      "Dunedin is built in a valley and on steep slopes at the head of a long harbour (Otago Harbour), with The Octagon as the centre. The University of Otago (the oldest in New Zealand) is just north of the centre. East along the harbour is the Otago Peninsula — a hilly peninsula whose tip, Taiaroa Head, has the only mainland breeding colony of royal albatross in the world. Baldwin Street, in the suburbs, was long considered one of the steepest streets in the world.",
    gettingAround:
      "Dunedin Airport is about 30 km south-west of the city, with an airport bus. Intercity travel is by car or coach. The city has buses; the centre is walkable but hilly. Seeing the Otago Peninsula wildlife needs a car or a tour (the peninsula road is narrow and winding). The climate is temperate maritime — cooler than the North Island, with four clear seasons, frosts and occasional snow in winter, and fast-changing weather.",
    culture:
      "English is universal, with a strong Scottish heritage (a Scottish festival, bagpipes, a statue of Robert Burns). It is a university city, young and lively in term time. The pace is slow. Tipping is not expected.",
    seeAndDo:
      "The Octagon and the surrounding Edwardian buildings, and the Dunedin Railway Station (one of the most-photographed buildings in New Zealand); the Otago Museum and the Toitū Otago Settlers Museum; Taiaroa Head on the Otago Peninsula for the royal albatross, and a penguin reserve for yellow-eyed penguins (they come ashore in the evening — go with a licensed guide and keep quiet); Larnach Castle; Baldwin Street. North are the Moeraki Boulders.",
    whenAndTips:
      "December–March has the best weather and is a good time to see albatross chicks and penguins. To watch wildlife, always go with a licensed guide, keep your distance and do not use flash. The Otago Peninsula road is narrow and winding — drive slowly and watch for oncoming traffic. Inland and the passes have snow in winter — check road conditions.",
  },

  "usa-overview": {
    identity:
      "The United States is a federal republic across central North America — 48 contiguous states plus Alaska and Hawaii, with a population of about 330 million. From east to west the land runs roughly: the Appalachian mountains, the interior Great Plains, the Rocky Mountains, the intermontane plateaus and basins, and the Pacific coast ranges. The climate spans subtropical to subarctic, rainforest to desert. English is used almost everywhere; Spanish is widespread in the Southwest.",
    layout:
      "It helps to think of the country in regions: the Northeast (the dense city belt from New York to Washington); the South (Florida and the Gulf coast, warm and humid); the Midwest (the farm and industrial belt around the Great Lakes and the plains, with Chicago as the hub); the Mountain West (the Rockies, Denver, Utah); the Southwest (arid, Las Vegas, the Grand Canyon); and the West Coast (California and the Pacific Northwest). Crossing the country by car takes several days; long trips are almost always flown.",
    gettingAround:
      "Cities are linked mainly by air, with a dense domestic network and many airports; intercity rail (Amtrak) is limited and slow. Big cities have a subway or light rail, but public transport overall is weaker than in East Asia or Europe, and most places need a rental car (drive on the right). Tipping is customary: 15–20% for table service, plus tips for taxis, bags and guides. Tap water is generally drinkable. Power is 120V with two flat pins.",
    culture:
      "There is no official national language; English is the de facto common tongue. Regions differ a lot — food, accent and pace of life vary north to south and east to west. Tipping is a real part of service-industry pay, and not tipping for table service is seen as rude. Mind personal space in public. Many museums and national parks need tickets or reservations booked online in advance.",
    seeAndDo:
      "Nature: the Grand Canyon, Yellowstone, Yosemite, Zion, Death Valley and other national parks; the high country of the Rockies and the Sierra Nevada; the Everglades in Florida. Cities: the museums and skyline of New York, the bay at San Francisco, the jazz and French Quarter of New Orleans, the entertainment of Las Vegas. Route 66 and the Pacific Coast Highway are classic road trips.",
    whenAndTips:
      "Spring and autumn (April–June, September–October) are the most comfortable in most regions; the South is hot and humid in summer with a hurricane season (roughly June–November), and the North and the mountains have hard, snowy winters. Most foreign visitors must apply online in advance for an electronic travel authorisation (ESTA) or a visa — this cannot be done on arrival. In peak season (school summer holidays) park entry, lodging and popular trail permits must be booked early.",
  },

  "new-york": {
    identity:
      "New York is the most populous city in the United States, with a metropolitan area of about 20 million, and one of the world's centres of finance, media and culture. The name comes from Yorkshire in England: in the 17th century the English took the colony (then New Amsterdam) from the Dutch and renamed it for the Duke of York. It is not the capital — that is Washington.",
    layout:
      "New York has five boroughs; the core is Manhattan, a long narrow rocky island between the Hudson and East rivers, with the financial district at its southern tip, Central Park and the skyscraper cluster in the middle, and an easy grid of numbered streets. Around it are Brooklyn, Queens, the Bronx and, across the water, Staten Island. The whole city sits at the northern end of the Atlantic coastal plain; its natural harbour is why it grew.",
    gettingAround:
      "Three airports: JFK, LaGuardia (LGA) and Newark (EWR, in New Jersey). From JFK the AirTrain connects to the subway. The subway runs 24 hours and is dense — tap a phone or bank card with OMNY; most of Manhattan is walkable. The climate is humid continental: summers are hot and muggy (often above 32°C in July–August), winters are cold with snow, and spring and autumn are short and pleasant.",
    culture:
      "English is universal, and this is one of the most linguistically diverse cities in the world. Life moves fast, and people walk fast; the subway and queues have unspoken rules. Tip 18–20% for table service, USD 1–2 a drink at a bar. Many museums open on Sundays and holidays, but check the day's hours. In any big city, watch your belongings and avoid empty stations late at night.",
    seeAndDo:
      "The Statue of Liberty and Ellis Island (by ferry); an observation deck at the Empire State Building, Rockefeller Center or the World Trade Center; Central Park; the Metropolitan Museum, MoMA and the American Museum of Natural History; Times Square and a Broadway show; the High Line and a walk over the Brooklyn Bridge; the 9/11 Memorial (a place to be respectful).",
    whenAndTips:
      "April–June and September–November have the best weather. High summer is muggy and winter is cold and snowy; from Christmas to New Year midtown is very crowded and hotels are expensive. Book tickets online in advance for the Statue of Liberty, the 9/11 Memorial and Broadway. The subway has occasional delays — leave margin.",
  },

  "washington-dc": {
    identity:
      "Washington is the capital of the United States, formally the District of Columbia (D.C.), which is not part of any state, with a population of about 700,000 and a metro area of about 6.3 million. The city is planned around the Capitol on a radial-plus-grid layout, with federal institutions, monuments and national museums gathered along an open lawn (the National Mall) running east–west. The city is named for the first president.",
    layout:
      "Washington is built beside the Potomac River on the Atlantic coastal plain, and is flat. The National Mall runs from the Capitol to the Lincoln Memorial, lined with the Smithsonian museums; the White House is just north of it. The city is divided into quadrants (NW/NE/SW/SE), with lettered and numbered streets that make it easy to navigate. Beyond are the Virginia and Maryland suburbs.",
    gettingAround:
      "Three airports: Reagan (DCA, closest, on the Metro), Dulles (IAD, on the Silver Line) and Baltimore (BWI). The Metro and buses use a SmarTrip card; the Mall is large and a long walk end to end, so consider a bikeshare. The climate is temperate: summers are hot and humid, winters are cold with occasional heavy snow, and there are cherry blossoms in spring and colour in autumn.",
    culture:
      "English is universal; this is a city of international institutions and embassies, with people from everywhere. Most Smithsonian museums are free but need a timed-entry ticket booked online. Metro escalators have a 'stand right, walk left' rule. Tip 18–20% for table service. Political events and marches are common — follow on-site directions if a route is closed.",
    seeAndDo:
      "The National Mall: the Capitol, the Washington Monument, the Lincoln Memorial, the WWII and Vietnam memorials (places to be respectful); the Smithsonian's National Air and Space Museum, Natural History Museum and National Museum of African American History and Culture; the White House (viewable only from outside — interior tours must be requested far ahead); Arlington National Cemetery; the Cherry Blossom Festival in March–April.",
    whenAndTips:
      "Late March–April (cherry blossom) and October–November (autumn colour) are the most beautiful and the most crowded; hotels are expensive during blossom season, so book early. High summer is muggy — take care in the heat; heavy snow can disrupt the Metro and attractions in winter. The Smithsonian museums are free, but the popular ones (Air and Space, African American History) need timed tickets booked ahead.",
  },

  chicago: {
    identity:
      "Chicago is the third-largest city in the United States, on the south-western shore of Lake Michigan, with a metro area of about 9.5 million. It is the Midwest's transport and financial hub, one of the birthplaces of the modern skyscraper (which took off in the rebuilding after the 1871 fire), and is known for blues, jazz and deep-dish pizza. The name comes from a local Indigenous word, roughly meaning 'wild garlic (place)'.",
    layout:
      "Chicago is built on the plain along Lake Michigan; the Chicago River runs through downtown (the Loop) and was engineered to flow inland, away from the lake. The lakefront is a continuous ribbon of parks and beaches, with the downtown towers right at the water's edge. The streets are a regular grid centred on the Loop. South along the lake is Indiana; west are the Great Plains.",
    gettingAround:
      "Two airports: O'Hare (ORD, on the Blue Line, about 45 minutes to downtown) and Midway (MDW, on the Orange Line). The 'L' elevated trains plus buses use a Ventra card; downtown is flat and good for walking and cycling (the lakefront path is long). The climate is humid continental with four clear seasons: warm summers with thunderstorms, hard winters with lake-effect snow, strong wind ('the Windy City'), and short spring and autumn.",
    culture:
      "English is universal; historically a city of many immigrant communities, with strongly ethnic neighbourhoods. Chicagoans identify strongly with local sport and architecture. Tip 18–20% for table service. In winter the indoor–outdoor temperature gap is large and pavements ice over — dress warm and watch your footing.",
    seeAndDo:
      "'Cloud Gate' (the Bean) in Millennium Park; an observation deck at Willis Tower or 360 Chicago; a Chicago Architecture Center river cruise (the classic way to see both banks); the Art Institute, the Field Museum and the Shedd Aquarium; Navy Pier; a ride along the lakefront path. Deep-dish pizza and an Italian beef sandwich are the local musts.",
    whenAndTips:
      "May–October has the best weather, with festivals and lakefront events in summer. Winter is cold and windy, often well below freezing from December to February — limit time outdoors. Book the architecture cruise and popular restaurants ahead in peak season. O'Hare is one of the busiest airports in the country and delays are common in bad weather — leave plenty of time for connections.",
  },

  "new-orleans": {
    identity:
      "New Orleans is on the lower Mississippi River near the Gulf of Mexico, with a city population of about 370,000. It was founded by the French in the early 18th century, then ruled by Spain, returned to France, and passed to the United States in 1803 with the Louisiana Purchase — so it blends French, Spanish, African and Caribbean architecture, food and music, and is the birthplace of jazz. The name comes from Orléans in France (la Nouvelle-Orléans); the name Louisiana comes from King Louis XIV.",
    layout:
      "New Orleans is built inside a large bend of the Mississippi (the 'Crescent City'), very low-lying and partly below sea level, protected by levees and pumps. The oldest part, the French Quarter, is by the river, with a grid of streets, iron balconies and courtyards; upriver are the mansions and streetcar lines of the Garden District; to the north is Lake Pontchartrain.",
    gettingAround:
      "Louis Armstrong Airport (MSY) is west of the city, with an airport bus and rideshare. The city has streetcars (the St Charles line is living history) and buses, using a Le Pass; the French Quarter is best on foot. The climate is humid subtropical: summers are very hot and muggy with an almost daily afternoon thunderstorm, June–November is hurricane season, and winters are mild.",
    culture:
      "English is universal, with traces of French and Creole culture (Mardi Gras, second-line parades, gumbo and jambalaya, beignets). Music is part of daily life, with live bands on the street and in bars. Tip 18–20% for table service, and something for street performers. Mardi Gras and the Jazz Fest draw huge crowds.",
    seeAndDo:
      "The French Quarter: Jackson Square, St Louis Cathedral, Royal Street and Bourbon Street (loud at night); the St Charles streetcar past the Garden District mansions; live jazz on Frenchmen Street; a paddle-steamer cruise on the Mississippi; the National WWII Museum (a place to be respectful); City Park and its sculpture garden. Out of town: plantation history and the swamps (a boat tour with a guide — watch for alligators).",
    whenAndTips:
      "February–May (including Mardi Gras and Jazz Fest) and October–December are comfortable and full of events — and the most crowded and expensive. Summer is muggy with daily rain — carry an umbrella. Watch forecasts in hurricane season (June–November). Late at night the Bourbon Street area is crowded and mixed — mind your belongings and stay with your group.",
  },

  miami: {
    identity:
      "Miami is at the south-eastern tip of the Florida peninsula, with a metro area of about 6.2 million. It is the United States' gateway to Latin America and the Caribbean; Spanish is nearly as common as English, and the Cuban, Haitian and Venezuelan communities are large. The city is known for its beaches, its Art Deco architecture, its nightlife and the edge of the Everglades. The name comes from a local Indigenous word.",
    layout:
      "The city of Miami is on the west shore of Biscayne Bay; across the bay is Miami Beach (a separate city on a barrier island), where South Beach and the Art Deco district are. Downtown and Brickell are the financial towers; Little Havana is west of downtown. The whole city is built on low, flat limestone at very low elevation, with the Everglades to the west.",
    gettingAround:
      "Miami International Airport (MIA) is west of the city, with the MIA Mover to the Metrorail. Public transport is limited (Metrorail, Metromover, buses), and most people rent a car or use rideshare. Buses and causeways link Miami Beach and downtown. The climate is tropical: warm all year, hot and humid from May to October with an almost daily thunderstorm and hurricane season; dry and pleasant from November to April, which is the high season.",
    culture:
      "English and Spanish are both used, with a strong Latin American feel (Cuban coffee, café con leche, pastelito). The pace is relaxed but nightlife runs late. Beaches and pools are the social centre. Restaurant bills often already include a service charge (especially near the beach) — check before adding more. Sun protection is needed year-round.",
    seeAndDo:
      "The Art Deco district of South Beach (the old buildings along Ocean Drive) and the beach; the Vizcaya Museum and Gardens; Calle Ocho in Little Havana (Cuban restaurants, cigars, the domino park); the Wynwood street-art district; a boat trip on Biscayne Bay. West, an hour away, is Everglades National Park (an airboat to see alligators — choose a licensed operator); south are the Florida Keys and Key West.",
    whenAndTips:
      "December–April has the best weather and is the high season (including spring break, when the beaches are packed). May–October is hot and rainy, and June–November is hurricane season — watch the forecast. Restaurant tips and service charges near the beach can stack — check the bill. Driving to the Everglades or the Keys is a fair distance — fill the tank and carry water.",
  },

  denver: {
    identity:
      "Denver is the capital of Colorado, on the eastern foot of the Rocky Mountains at the western edge of the Great Plains, at an elevation of almost exactly one mile — hence the 'Mile High City'. The metro area is about 3 million, and it is the commercial and transport hub of the Mountain West and the gateway to Rocky Mountain National Park and the ski resorts.",
    layout:
      "Denver is built on the plain; a few dozen kilometres west is the Rocky Mountain 'Front Range', and on a clear day you can see a whole wall of snowy peaks from the city. Downtown centres on Union Station and the 16th Street pedestrian strip; the tech parks are to the south; west, past Boulder, the mountains begin. The city is flat and gridded, with one older district set on the diagonal.",
    gettingAround:
      "Denver International Airport (DEN) is well east of the city, with the A Line commuter train (about 37 minutes to Union Station). The city has light rail and buses, and downtown is walkable; the mountains and ski resorts essentially need a rental car, and in winter mountain passes require chains or all-wheel drive. The climate is semi-arid and high: lots of sun, dry air, big day–night temperature swings; winters are snowy but not extreme, and summer afternoons often bring thunderstorms.",
    culture:
      "English is universal. Denverites take the outdoors seriously — hiking, cycling, skiing and running are a way of life. Because of the altitude, new arrivals may feel mild altitude effects (shortness of breath, headache) — drink plenty of water and go easy on alcohol for a day or two. Cannabis and alcohol are legal in Colorado with age and place limits. Tip 18–20% at restaurants.",
    seeAndDo:
      "Union Station and the LoDo district, and 16th Street; the Denver Art Museum and the Museum of Nature and Science; Red Rocks Amphitheatre (for a show, or just for the rocks); Boulder and Flatirons an hour west; Rocky Mountain National Park (Trail Ridge Road is open in summer, for alpine tundra); skiing at the resorts in winter.",
    whenAndTips:
      "September–October (autumn colour) and May–June are the most pleasant. Winter is ski season, and mountain roads close in blizzards — check conditions before setting out. The altitude and strong sun call for hydration and sunscreen; mountain temperatures are much lower than in the city and the weather changes fast, so carry warm and waterproof layers. Rocky Mountain National Park needs a timed-entry reservation in peak season.",
  },

  "las-vegas": {
    identity:
      "Las Vegas is in southern Nevada, in the Mojave Desert, in an arid basin ringed by mountains, with a metro area of about 2.3 million. The city itself is young and grew on entertainment, conventions and resorts; its best-known feature is the Strip, a stretch of large resort hotels and casinos. The name is Spanish for 'the meadows' — there were desert springs and grassland here.",
    layout:
      "Las Vegas Boulevard (the Strip) runs north–south, lined with themed resort hotels; the older downtown (Fremont Street) is further north and was the early casino core. The whole city sits in a desert basin ringed by bare mountains; about half an hour south-east are Lake Mead and the Hoover Dam, west is Red Rock Canyon, and east lies the way to the Grand Canyon.",
    gettingAround:
      "Harry Reid Airport (LAS) is right at the south end of the Strip, close to the hotels. The Strip has a monorail and buses, but hotels that look close are a long, hot walk apart. Seeing the surrounding nature (Red Rock, the Grand Canyon, Zion, Death Valley) essentially needs a rental car or a tour. The climate is desert: summers are extremely hot (often above 40°C) and very dry, winters are mild by day and cold at night, and it almost never rains.",
    culture:
      "English is universal, visitors come from all over, and the service industry is built around entertainment and spending. Gambling and drinking have an age limit (21); minors cannot enter casino areas. Dealers, servers and bellhops are all tipped. The city runs 24 hours. Midday in summer is not the time for long spells outdoors.",
    seeAndDo:
      "Free shows along the Strip (the fountains, the volcano, the water show) and the themed architecture; the Fremont Street light show downtown; the High Roller observation wheel. Nature: Red Rock Canyon (half an hour away), the Hoover Dam and Lake Mead, three to four hours east to the Grand Canyon's South or West Rim, north-east to Zion, north-west to Death Valley.",
    whenAndTips:
      "March–May and October–November are the most comfortable. In high summer the heat is severe — do outdoor activities early or late and drink plenty. Hotel rates rise sharply on weekends and during big conventions and holidays. Trips to the Grand Canyon or Death Valley are full-day outings — fill the tank, carry water, and expect no phone signal in the mountains and desert.",
  },

  "san-francisco": {
    identity:
      "San Francisco is in northern California, at the tip of a peninsula surrounded by water on three sides, with a city population of about 810,000 and a Bay Area metro of about 4.7 million. It is known for its steep hills, Victorian houses, the Golden Gate Bridge and its summer fog, and is a centre of the tech industry (Silicon Valley is at the southern end of the bay) and of diverse cultures. The name is Spanish for 'Saint Francis', from an 18th-century Spanish mission.",
    layout:
      "San Francisco is built on dozens of steep hills, with streets that run straight up and over them. Downtown and the Financial District are in the north-east, with Chinatown and North Beach beside them; Fisherman's Wharf and the Golden Gate Bridge are on the north shore; Golden Gate Park is a green band running west to the ocean. To the south the city joins the peninsula; across the bay to the east are Oakland and Berkeley, linked by the Bay Bridge and BART.",
    gettingAround:
      "San Francisco International Airport (SFO) is south of the city, with BART directly to downtown in about 30 minutes; Oakland Airport (OAK) also works. The city has Muni (metro, buses and cable cars) and BART, using a Clipper card; the hills make walking hard work. Downtown parking is expensive and scarce, so most people use transit or rideshare. The climate is Mediterranean but strongly moderated by the ocean: summers are cool and foggy (the city may be only in the teens Celsius in July–August), winters are mild and wet, and day–night and district-to-district temperature differences are large year-round.",
    culture:
      "English is universal; this is one of the most ethnically and culturally diverse cities in the country, and Chinatown is one of the oldest in North America. The pace is more relaxed than the East Coast. Tip 18–20% for table service; bills sometimes already add an 'SF employee health' surcharge. Parts of downtown (around the Tenderloin) have visible street and safety problems — avoid them at night. A windproof jacket is useful in any season.",
    seeAndDo:
      "The Golden Gate Bridge (walk or cycle across); Fisherman's Wharf and Pier 39 for the sea lions, and a boat to Alcatraz (book ahead); the cable cars and Lombard Street; Chinatown and North Beach; the California Academy of Sciences, the de Young Museum and the Japanese Tea Garden in Golden Gate Park; Twin Peaks or Dolores Park for city views. North across the bridge are the redwoods of Muir Woods and Sausalito.",
    whenAndTips:
      "September–October is the warmest and clearest time in the city (the local 'summer'). July–August often bring heavy fog and wind and feel cold — bring a jacket. Book the Golden Gate Bridge, Alcatraz and the cable cars ahead in peak season. Parking is expensive and car break-ins are common — leave nothing in the car.",
  },

  "los-angeles": {
    identity:
      "Los Angeles is the second-largest city in the United States, a wide basin in southern California hemmed in by mountains and the sea, with a metro area of about 13 million. It has no single centre; it is dozens of distinct districts and satellite cities strung together by a freeway network, and it is the centre of the film and television industry. The name is Spanish for 'the angels', a short form of the full name of the 18th-century Spanish settlement.",
    layout:
      "The Los Angeles basin is backed to the north and east by the San Gabriel and other mountains, snow-capped on a clear day; to the west are the Pacific and a string of beaches (Santa Monica, Venice, Malibu). Downtown is in the centre-east of the basin; Hollywood, Beverly Hills and West Hollywood are to the north-west; south are the port and Long Beach; east is Pasadena. The city is very spread out — an hour or two by car from one side to the other.",
    gettingAround:
      "Los Angeles International Airport (LAX) is on the coast to the south-west; Burbank (BUR) is closer to Hollywood. The city has a metro and light rail (currently being expanded) with limited coverage, and the vast majority of people drive (on the right), with heavy congestion at peak times. Use a TAP card for transit. The climate is Mediterranean: warm and dry year-round with lots of sun, heatwaves and a wildfire season in summer and autumn, occasional heavy rain in winter, and a big coast-to-inland temperature difference.",
    culture:
      "English and Spanish are both used; this is a city of immigrants, with distinct communities (Koreatown, Little Tokyo, Little Ethiopia and more). Life revolves around cars and the outdoors, and people arrange to meet in a particular district rather than 'downtown'. Tip 18–20% for table service. In wildfire season (roughly late summer into autumn) watch air-quality and evacuation information.",
    seeAndDo:
      "The Hollywood Walk of Fame, the Dolby Theatre and the Griffith Observatory (for the Hollywood Sign and the city at night); the Getty Center and the Getty Villa (free, book parking) and LACMA; the Santa Monica Pier and Venice Beach; Universal Studios; the Huntington Library and Gardens in Pasadena. Beyond: Joshua Tree, Santa Barbara, and San Diego to the south.",
    whenAndTips:
      "March–May and September–November are the most pleasant. Late summer into autumn is wildfire season — adjust plans to official information and watch air quality. Traffic is heavy — plan by district and avoid the morning and evening peaks. The coast is cool morning and evening while inland is hot by day — carry a jacket. Attractions are far apart — allow travel time.",
  },

  "canada-overview": {
    identity:
      "Canada is the world's second-largest country, spanning northern North America from the Atlantic to the Pacific and up to the Arctic Ocean, with a population of about 40 million — most of it in a narrow southern belt not far from the US border. The official languages are English and French (French mainly in Quebec). From east to west the land runs roughly: the old low mountains of the Atlantic coast, the St Lawrence valley, the Canadian Shield covering most of the country, the interior prairies, the Rockies and the western ranges, and the Coast Mountains on the Pacific; to the north are vast tundra and the Arctic islands.",
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
    identity:
      "Toronto is the most populous city in Canada, with a metro area of about 6.6 million, on the north-western shore of Lake Ontario, and the country's financial, media and immigration centre — about half the city's residents were born abroad, making it one of the most diverse cities in the world. It is not the capital (that is Ottawa), but it is the capital of the province of Ontario. The name comes from a Mohawk word meaning roughly 'where there are trees standing in the water', originally for a spot further north at Lake Simcoe.",
    layout:
      "Toronto is built on a plain sloping gently down to the north shore of Lake Ontario, with a regular street grid. Downtown is right on the lake, and the CN Tower and the financial-district towers define the skyline; Yonge Street runs north–south. Along the city's northern edge is a low wooded slope — a stretch of the Niagara Escarpment. An hour to the south-west along the lake are Niagara Falls.",
    gettingAround:
      "Pearson International Airport (YYZ) is north-west of the city, with the UP Express train about 25 minutes to Union Station downtown; Billy Bishop Airport (YTZ) is on the island, close to downtown. The city has a subway, streetcars and buses, using a Presto card; downtown is walkable. The climate is humid continental with four clear seasons: warm, sometimes muggy summers, cold snowy winters, wind off the lake, and short spring and autumn.",
    culture:
      "English is universal, with sizeable Chinatown, Little Italy, Little Portugal and Little India neighbourhoods. Torontonians identify strongly with local sport and with the CN Tower as one of the world's tallest structures. Tip 15–20% for table service. In winter pavements ice over — dress warm and watch your footing; summer brings many street festivals.",
    seeAndDo:
      "The CN Tower (observation deck / glass floor); the waterfront and the Toronto Islands (a ferry across for the skyline view); the Royal Ontario Museum and the Art Gallery of Ontario; St Lawrence Market; Kensington Market and Chinatown; the Hockey Hall of Fame; an hour out of town, Niagara Falls (the Canadian-side viewpoints and the Maid of the Mist boat).",
    whenAndTips:
      "May–October has the best weather, with many summer festivals. Winter is cold and windy off the lake, often well below freezing from December to February. The Niagara Falls day trip is well established but crowded in peak season — book the boat ahead. The UP Express from the airport is faster and cheaper than a taxi.",
  },

  ottawa: {
    identity:
      "Ottawa is the capital of Canada, in eastern Ontario on the south bank of the Ottawa River, facing the city of Gatineau in Quebec across the water, with a metro area of about 1.5 million. Britain made it the capital in the mid-19th century precisely because it sits on the boundary between English Ontario and French Quebec, is well back from the US border, and was easier to defend. The city and the river are named for the Odawa (Ottawa) Indigenous nation.",
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
    identity:
      "Montreal is the largest city in Quebec and the second-largest in Canada, with a metro area of about 4.3 million, and one of the largest French-speaking cities in North America (French is the dominant everyday language, and most people also speak English). The city is built on a large island in the St Lawrence River, centred on a small hill called Mont Réal ('Mount Royal') — Jacques Cartier climbed it in 1535 and named it, and the name later became Montréal.",
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
    identity:
      "Quebec City is the capital of the province of Quebec, set on a cliff (Cap Diamant) where the St Lawrence River suddenly narrows, with a metro area of about 850,000. The name comes from an Algonquin word, 'kébec', meaning exactly 'where the river narrows'. Its old town is the only walled city in North America with its walls intact; it was founded by the French in 1608 and is one of the earliest European settlements in North America.",
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
    identity:
      "Halifax is the capital of Nova Scotia and the largest city in Atlantic Canada, with a metro area of about 500,000, a natural-harbour city that was historically a major British naval base in North America. The name comes from an 18th-century British politician, the Earl of Halifax (there is also a town called Halifax in Yorkshire, England).",
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
    identity:
      "St. John's is the capital of Newfoundland and Labrador, at the far eastern tip of the island of Newfoundland, with a metro area of a bit over 200,000 — the easternmost city in North America, and one of the earliest European settlements on the continent. The name is traditionally said to come from the feast of St John the Baptist (24 June 1497, the date John Cabot is traditionally said to have arrived).",
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
    identity:
      "Winnipeg is the capital of Manitoba, on the eastern edge of the Canadian prairies at the meeting of the Red and Assiniboine rivers, with a metro area of about 850,000. This has long been a meeting point for Indigenous peoples and the fur trade, and became the 'gateway to the West' with the railway in the late 19th century. The name comes from the Cree 'wīnipēk', meaning 'muddy water', for Lake Winnipeg to the north.",
    layout:
      "Winnipeg is built on an extremely flat lake plain (the bed of glacial Lake Agassiz), with no hills at all. The river junction, The Forks, is the historic and present-day centre, with a market and paths. The streets are a large grid, and downtown has one of the widest intersections in Canada (Portage and Main).",
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
    identity:
      "Calgary is the largest city in Alberta, on the eastern foot of the Rockies where the prairies meet the mountains, with a metro area of about 1.6 million. It is Canada's oil-and-gas centre and the gateway to Banff, the Rockies and cowboy culture. The name comes from Calgary on the Isle of Mull in Scotland, given by an early North-West Mounted Police commissioner.",
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
    identity:
      "Edmonton is the capital of Alberta, in the centre of the province on both banks of the North Saskatchewan River valley, with a metro area of about 1.5 million — one of the northernmost large cities in Canada, and the supply base for the northern oil-sands region and the territories. The name comes from Edmonton, a district of London, England, via a Hudson's Bay Company official's home town.",
    layout:
      "Edmonton straddles the North Saskatchewan River, whose banks hold one of the largest connected urban park systems in North America (the 'river valley'). Downtown is on the plain on the north bank; south across the river are the historic Old Strathcona district and the university. The city is flat, gridded and very spread out.",
    gettingAround:
      "Edmonton International Airport (YEG) is well south of the city, with an airport bus. The city has LRT and buses, using an Arc card; overall it is very car-dependent. The climate is continental, with long, hard winters (colder than Calgary, less affected by chinooks) and warm summers with very long daylight (it gets dark late in June), good for the outdoors.",
    culture:
      "English is universal. Edmonton calls itself the 'Festival City', with a festival almost every week in summer (a folk festival, a Fringe theatre festival that is one of the largest in North America). It is also known for hockey and for big shopping malls. Tip 15–20% for table service. Winter is extremely cold — dress warm.",
    seeAndDo:
      "West Edmonton Mall (once the world's largest, with a water park and an indoor roller coaster); the Alberta Legislature and the river-valley paths and bridges; the Royal Alberta Museum; Elk Island National Park (for bison, very close to the city); summer festivals, and the northern lights in winter. Many people use Edmonton as a starting point for the Rockies to the south or nature areas beyond Calgary.",
    whenAndTips:
      "June–August is the most comfortable, with very long daylight and dense festivals. Winter is very cold — prepare for below −25°C. The city is spread out with limited transit — a rental car is easier. For the Rockies, people usually go via Calgary or drive directly, a fair distance.",
  },

  vancouver: {
    identity:
      "Vancouver is the largest city in British Columbia, in the south-western corner of Canada between a river delta and an ocean inlet, with a metro area of about 2.7 million — backed by the Coast Mountains and facing the sea, and known for its mountains-meet-ocean setting and its mild, rainy climate. The name comes from the 18th-century British naval officer George Vancouver (there is also a city called Vancouver in Washington State, USA).",
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
};
