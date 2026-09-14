import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Luxembourg ============
  "luxembourg-overview": {
    // identity sources: STATEC《Lower migration, low fertility: the demographic slowdown continues》：2025-01-01 总人口 681,973 人。https://statistiques.public.lu/en/actualites/2025/stn16-population-2025.html
    //   核实日 2026-09-07，来源级别 1
    identity:
      "The Grand Duchy of Luxembourg sits in Western Europe, covering about 2,586 km² — one of the smallest sovereign states in Europe — with a population of about 682,000 as of 1 January 2025 (STATEC). It borders France, Germany and Belgium, and is a founding EU member state and an important financial centre.",
    layout:
      "The country divides roughly into two regions: the Oesling in the north (an extension of the Ardennes, valleys interwoven with plateau) and the Gutland in the south (gentler terrain, home to the capital, Luxembourg City, plus the sandstone \"Little Switzerland\" of Mullerthal in the east, the Moselle Valley wine region in the south-east, and the Minett red-lands district at the southern tip).",
    gettingAround:
      "Luxembourg Findel Airport is the country's only airport, so there are no scheduled domestic flights; the rail and bus network is dense, and since 2020 public transport has been free for all passengers nationwide — the first country in Europe to make its entire public-transport network free. Driving is on the right; the country is small, and intercity journeys are usually under an hour. The climate is temperate maritime, mild and rainy year-round. Restaurant bills typically already include service, with no extra tip required. The voltage is 230V with EU-style two-round-pin plugs.",
    culture:
      "Luxembourgish, French and German are all official languages, with French commonly used in business and government documents and English proficiency also high. Close to half of Luxembourg's population are foreign residents, making it one of the most culturally diverse countries in Europe. Restaurant bills typically don't require a tip; rounding up is fine.",
    seeAndDo:
      "Natural landforms: the Mullerthal/Berdorf sandstone region (\"Little Switzerland\"), the Schiessentümpel waterfall, Vianden Castle in the Our Valley, the Upper Sûre Lake. Heritage and culture: the old town and fortifications of Luxembourg City (a World Heritage Site), the Pétrusse Casemates, Clervaux Castle (Battle of the Bulge memorial site), the Benedictine Abbey of Echternach. Food experience: a Moselle Valley wine tour.",
    whenAndTips:
      "May–September is the most pleasant season and the best time for hiking the Mullerthal Trail; the country is small enough that a day's car rental can cover several towns, and free public transport is also a convenient way to explore the whole country.",
  },
  "luxembourg-city": {
    // identity sources: 人口：卢森堡市政府「La ville en chiffres」2025-12-31 = 137,696（1 级；英文维基引同一页 2026-01-21 抓到 137,678，差 18 人，属不同抓取时点）。口径是市镇（commune de Luxembourg）常住人口，不是全国、也不是跨境通勤圈。卢森堡统计局 STATEC 的全国 1 月 1 日数通常当年 1—2 月发布。identity 与 howItWorks 两段已统一。
    identity:
      "Luxembourg City is the capital of the Grand Duchy, with a population of about 138,000 at the end of 2025 (City of Luxembourg), built on the Luxembourg Plateau's sandstone. It is a major seat of EU institutions and a leading global financial centre; its old town and fortifications were inscribed on the World Heritage List in 1994.",
    // howItWorks sources: 人口：与 identity 段同一来源与基准日（卢森堡市政府 2025-12-31 = 137,696）。
    howItWorks:
      "Luxembourg City is the capital of the Grand Duchy and a commune of about 51 km², with about 138,000 people at the end of 2025, governed by an elected council and mayor; about 70 per cent of residents are foreign nationals from some 160 countries, and the city is divided into 24 quarters. The country has about 680,000 people, some two hundred thousand commute in daily from France, Belgium and Germany, and public transport has been free nationwide since 2020. The city stands above the gorges 70 m deep cut by the Alzette and the Pétrusse: the Ville Haute on the plateau is the old town and fortress remains inscribed as World Heritage in 1994, with the Bock casemates at the cliff's edge; the Grund and Pfaffenthal lie on the valley floor, reached by lifts and bridges; the Kirchberg plateau holds the EU institutions — the Court of Justice, the European Investment Bank — and the banks, and the station quarter lies to the south. The tram opened in 2017 joins the station, the centre and Kirchberg. Luxembourgish, French and German are all official, and signs and documents run in three languages. Findel airport lies 6 km east. Addresses give street, number and four-digit postcode prefixed L-. Newcomers most often go wrong by taking Luxembourg City for a small country's small capital, when it is one of Europe's financial centres and most of its residents are not Luxembourgers.",
    layout:
      "The old town is built on a promontory surrounded by gorges cut by the Alzette and Pétrusse rivers into the plateau, with the Bock promontory guarding one corner; the newer district — home to the EU institutions and the financial centre — lies on the Kirchberg plateau to the north-east, across the Alzette valley.",
    gettingAround:
      "Findel Airport is about 6 km from the centre, reached by bus; public transport (bus and light rail) is free nationwide. The old town is walkable, with several bridges linking the different districts across the gorges. The climate is temperate maritime, mild and rainy year-round.",
    culture:
      "Luxembourgish, French and German are all official languages, and English proficiency is also high. As an international financial centre, the city has a high share of foreign residents and a diverse, international atmosphere. Restaurant bills typically already include service.",
    seeAndDo:
      "The Pétrusse Casemates (underground fortifications carved into the sandstone); the Bock promontory and the ruins of Bock Fortress; Place de la Constitution (the \"Gëlle Fra\" war memorial); the Grand Ducal Palace. The gorge-side walking circuit nearby (\"the Corniche,\" often called \"Europe's most beautiful balcony\").",
    whenAndTips:
      "May–September is the most pleasant season; the old town is compact, and walking plus the gorge-side walking circuit covers the main sights — worth setting aside half a day specifically for the casemates and the gorge walk.",
  },
  "esch-sur-alzette": {
    // identity sources（2026-09-15 核实，update）: STATEC SDMX LU1:DF_X021，commune 0204 = 38,275（2026-01-01），1 级；下一期约 2027-01
    identity:
      "Esch-sur-Alzette is Luxembourg's second-largest city by population, with a population of about 38,300 as of 1 January 2026 (STATEC), at the heart of the Minett industrial region on the Alzette, which grew up from the 19th century around iron-ore mining and the steel industry.",
    // howItWorks sources: Wikipedia (2026-09): Esch-sur-Alzette (commune 14.35 km²; ~37,900 2025; second-largest; Minett/French border; ARBED 1911; last furnace 1997; Belval university campus; Rockhal; ECoC 2022)
    howItWorks:
      "Esch-sur-Alzette is Luxembourg's second commune, about 14 km² with about 38,300 people on 1 January 2026 (STATEC), governed by an elected council and mayor; it lies in the southern iron-ore country known as the Minett, with the French border at the edge of town and Audun-le-Tiche on the other side. After iron ore was found in the 1850s the village grew into a steel town: ARBED, founded in 1911, was its employer, and the descendants of Portuguese and Italian immigrants remain a large part of its people; after the steel crisis of the 1970s the mines closed, and the last blast furnace at Belval stopped in 1997. Belval is today the campus of the University of Luxembourg, with the furnaces preserved in the middle of it and the Rockhal concert hall beside, and in 2022 Esch was European Capital of Culture. The Rue de l'Alzette is the pedestrian street of the centre. Public transport is free nationwide, and the train reaches Luxembourg City in about 20 minutes. Addresses give street, number and four-digit postcode. Newcomers most often go wrong by taking Esch for a declining mining town, when it is Luxembourg's university town and a cultural centre.",
    layout:
      "The town is built along the Alzette, right on the French border; numerous historic mining sites surround it, some now converted into industrial-heritage parks, such as the Belval blast-furnace site.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Luxembourg Findel Airport (about 20 km); public transport is free nationwide, with a bus network in the city (a fast tram line from Luxembourg City to Esch is planned to open in stages during the 2030s). The climate is temperate maritime.",
    culture:
      "All three official languages are in use; the city's historic draw of Italian and Portuguese immigrants for mining and steelwork has given it a culturally blended immigrant heritage. Restaurant bills typically already include service.",
    seeAndDo:
      "The Belval blast-furnace industrial-heritage site (preserving blast furnaces A and B, built in 1965 and 1970, shut down in 1997 and open to visitors since 2014); the National Museum of Mining, Minett; a nearby mining-heritage trail through the Minett Biosphere Reserve.",
    whenAndTips:
      "May–September is the most pleasant season; as the gateway to industrial-heritage tourism, plan half a day specifically to visit the Belval site and the mining museum.",
  },
  echternach: {
    identity:
      "Echternach is Luxembourg's oldest surviving town, its founding traceable to the Benedictine abbey established by St Willibrord in AD 698, with a population of about 6,000, and the traditional gateway to Mullerthal's \"Little Switzerland.\"",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Echternach (Luxembourg; commune with city status in the east near the German border on the Sûre; 5,936 residents in 2025 over 20.49 km²; the oldest town in Luxembourg, grown around the abbey founded in 698 by St Willibrord, an English monk from Ripon, who was abbot until his death in 739 and became the first bishop of Utrecht; the dancing procession on Whit Tuesday, UNESCO intangible heritage 2010; Basilica of St Willibrord with his tomb in the crypt; gateway to the Mullerthal hiking region)
    howItWorks:
      "Echternach is a commune with city status in eastern Luxembourg near the German border, with about 5,900 residents in 2025 over 20.5 km², governed by an elected mayor and council; Luxembourg has only communes and the state, with no provincial layer between, so even a small town deals directly with national departments. It is the oldest town in Luxembourg: in 698 the monk Willibrord, from Ripon in England, founded a Benedictine abbey here, serving as abbot until his death in 739 and becoming the first bishop of Utrecht, and the town grew around that abbey. Each Whit Tuesday the dancing procession moves to the Basilica of St Willibrord in a set stepping rhythm, his tomb lying in the crypt, a custom added to the intangible heritage list in 2010. The Sûre is the border river with Germany, joined here by a bridge, and west of town lies the sandstone hiking country of the Mullerthal, called Little Switzerland. Newcomers most often go wrong by treating a town of five thousand as a village, when it is the first city of Luxembourg.",
    layout:
      "The old town is built along the Sûre, with the Benedictine abbey and the old market square forming its historic core; it sits right on the German border, with the Mullerthal sandstone region unfolding to the south-west.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Luxembourg Findel Airport (about 30 km); public transport is free nationwide. The old town is walkable; reaching the Mullerthal hiking area requires a car or bus. The climate is temperate maritime.",
    culture:
      "All three official languages are in use. Echternach's annual \"Hopping Procession,\" held the day after Whit Monday — a dancing pilgrimage tracing back to the Middle Ages — is inscribed on the UNESCO Intangible Cultural Heritage list. Restaurant bills typically already include service.",
    seeAndDo:
      "The Benedictine abbey and the crypt of St Willibrord's basilica; the old market square. Hiking the Mullerthal Trail nearby (the Berdorf sandstone area, the Schiessentümpel waterfall).",
    whenAndTips:
      "May–September is the most pleasant season and also peak time for hiking the Mullerthal; the Hopping Procession the day after Whit Monday is a unique chance to experience the local tradition.",
  },
  remich: {
    identity:
      "Remich is the core town of the Luxembourg section of the Moselle Valley, with a population of about 3,500, the centre of Luxembourg's only wine-growing region, known as the \"Pearl of the Moselle.\"",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Remich (Luxembourg; commune with city status on the left bank of the Moselle, which forms the border with Germany; the smallest commune in Luxembourg by area at 5.29 km², 4,149 residents in 2025, 46th largest commune; from the Roman Remacum; the St Nicolas gate of 952 a protected monument; one of the most prominent wine towns of the Moselle valley; the three-day Fuesend Karneval with the Stréimännchen burned from the Moselle bridge)
    howItWorks:
      "Remich is a commune with city status in south-eastern Luxembourg, at 5.29 km² the smallest commune in the country by area, with about 4,150 residents in 2025, governed by an elected mayor and council; Luxembourg has only communes and the state, with no provincial layer between. It stands on the left bank of the Moselle, Germany lying across the water, so the river is at once the view and the national border, and the riverside road and the pleasure boats are the ordinary business of the town. The name comes from the Roman Remacum, worn into its present spelling after Rome withdrew, and the St Nicolas gate of 952 is a protected monument left from the old wall. This is the heart of Luxembourg's Moselle wine country, where white wine and the sparkling crémant are the local industry, the estates strung along the river and the esplanade crowded all summer. The carnival runs three days and ends with a straw figure set alight and dropped from the Moselle bridge, a custom of this town alone. Newcomers most often go wrong by taking the Moselle for an ordinary river, when it is the border and the far bank is another country.",
    layout:
      "The town is built along the Moselle, with Germany directly across the river; the riverside promenade and wine estates form the core of the town's landscape.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Luxembourg Findel Airport (about 20 km); public transport is free nationwide. The town itself is walkable; exploring the riverside vineyards requires a car or bicycle. The climate is temperate maritime, the mildest in Luxembourg.",
    culture:
      "All three official languages are in use. Remich and the surrounding villages are the core production area for Luxembourg's Crémant sparkling wine and Riesling and other white wines, and winery tastings are a key local tourist experience. Restaurant bills typically already include service.",
    seeAndDo:
      "The Moselle riverside promenade; winery tastings (local Riesling and Crémant sparkling wine); a Moselle river cruise. Cycling the wine route through nearby villages.",
    whenAndTips:
      "May–September is the most pleasant season, with harvest-related festivals in September–October; the riverside cycle path is the classic way to explore the Moselle Valley.",
  },
  diekirch: {
    identity:
      "Diekirch is a historic town on the Sûre in northern Luxembourg, with a population of about 7,000, well known for its National Museum of Military History, and a gateway for exploring the Sûre Valley and the Oesling.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Diekirch (Luxembourg; commune with city status on the Sûre in the north-east, 7,336 residents in 2025 over 12.42 km², 21st of 100 communes; the name from Diet-Kirch, people's church; St Laurence church a Roman building and remains of a large Roman villa; fortified in the 14th century by John the Blind; National Museum of Military History and the Battle of the Bulge, headquarters of the Luxembourg Army's operational command at the Haerebierg centre; the donkey as town mascot; International March of Diekirch since 1968; Paul Eyschen born here)
    howItWorks:
      "Diekirch is a commune with city status in north-eastern Luxembourg on the Sûre, with about 7,340 residents in 2025 over 12.4 km², twenty-first among the country's hundred communes, governed by an elected mayor and council; Luxembourg has only communes and the state, with no provincial layer between. The town lies in a valley of the Oesling hills, its name from Diet-Kirch, the people's church. A large Roman estate stood here, the lower fabric of St Laurence church is Roman work, and John the Blind walled the town in the fourteenth century. The Battle of the Bulge was fought across this country through the winter of 1944 and 1945, which is why the National Museum of Military History is in town and the operational command of the Luxembourg Army is based at the nearby Haerebierg centre. The donkey is the town mascot and its fountains are cast in that shape; the International March of Diekirch has drawn walkers from many countries since 1968. Ettelbruck lies 5 km west with the railway to Luxembourg City. Newcomers most often go wrong by taking a town of seven thousand for a tourist village, when it is one of the administrative and garrison centres of northern Luxembourg.",
    layout:
      "The old town is built along the Sûre, its historic quarter preserving a medieval layout, with the National Museum of Military History as the town's main landmark.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Luxembourg Findel Airport (about 35 km); public transport is free nationwide. The old town is walkable. The climate is temperate maritime.",
    culture:
      "All three official languages are in use. Diekirch's historic role during the Battle of the Bulge in 1944–45 makes it an important Second World War memorial site in Luxembourg. Restaurant bills typically already include service.",
    seeAndDo:
      "The National Museum of Military History (detailed exhibits on the Battle of the Bulge); the archaeological crypt beneath St Laurent's Church; the Sûre riverside promenade. Onward trips to the Upper Sûre Lake or Vianden nearby.",
    whenAndTips:
      "May–September is the most pleasant season; as the southern gateway to the Oesling, it suits a half-day museum visit followed by an onward trip to Vianden or the Upper Sûre Lake.",
  },
  ettelbruck: {
    // howItWorks sources（2026-09-15 核实，add-year）: STATEC SDMX LU1:DF_X021，commune 0605 = 10,212（2026-01-01），1 级；下一期约 2027-01
    identity:
      "Ettelbruck is a town at the confluence of the Alzette and Sûre in northern Luxembourg, with a population of about 9,000, an important transport hub for the Oesling region.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Ettelbruck (Luxembourg; commune with city status at the confluence of the Sûre, Alzette and Wark, about 10,149 residents; a major transport hub second only to Luxembourg City, the railway junction where the Diekirch line branches from the Luxembourg–Liège main line, with the A7 reached via trunk road B7; occupied 10 May 1940, liberated 11 September 1944, retaken 16 December, liberated again by Patton's forces on Christmas Day 1944; General Patton Memorial Museum opened July 1995; the national anthem first performed publicly here in 1864)
    howItWorks:
      "Ettelbruck is a commune with city status in northern Luxembourg with about 10,200 residents as of 1 January 2026 (STATEC), governed by an elected mayor and council; Luxembourg has only communes and the state, with no provincial layer between. Its weight comes from its position: the Sûre, the Alzette and the Wark meet here, the branch line to Diekirch leaves the Luxembourg–Liège main line at this station, and the B7 trunk road reaches the A7 motorway, making it the country's transport hub second only to the capital, where the northern towns change trains. German forces occupied it on 10 May 1940, American troops liberated it on 11 September 1944, it was retaken on 16 December during the Battle of the Bulge, and Patton's forces freed it again on Christmas Day and halted the German advance in the Alzette valley; the General Patton Memorial Museum opened in 1995 and Patton Square mark that history. The Luxembourgish national anthem was first sung in public here in 1864. Newcomers most often go wrong by confusing it with neighbouring Diekirch, when the two stand 5 km apart as separate communes.",
    layout:
      "The town sits on the flat valley floor where the two rivers meet, a rail and road hub connecting Luxembourg City with the towns of the northern Oesling.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Luxembourg Findel Airport (about 35 km); public transport is free nationwide, and the train station is an important interchange for the north of the country. The climate is temperate maritime.",
    culture:
      "All three official languages are in use. Ettelbruck's Patton Square, commemorating the American general who directed operations from here during the Second World War, is an important witness to Luxembourg's wartime history. Restaurant bills typically already include service.",
    seeAndDo:
      "Patton Square and the General Patton memorial; the Ettelbruck Military Museum. Onward connections to Vianden, Clervaux or Diekirch nearby.",
    whenAndTips:
      "Suitable year-round; as the northern transport hub, it works best as a base for reaching several Oesling towns rather than a destination in itself.",
  },
  vianden: {
    identity:
      "Vianden is a small town on the Our in northern Luxembourg, with a population of about 2,000; Vianden Castle is the largest surviving feudal castle in Luxembourg and one of the country's most iconic valley-and-castle landscapes.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Vianden (Luxembourg; commune in the north-east on the Our near the German border, 2,221 residents in 2025; Vianden Castle built between the 11th and 14th centuries, one of the largest fortified castles west of the Rhine, sold in 1820 and left to decay until Grand Duke Jean ceded it to the State in 1977, since restored as a museum; Victor Hugo stayed here several times between 1862 and 1871, his house now a museum; seasonal chairlift; the Vianden pumped-storage hydro plant; about 47 km from Luxembourg City, buses from Diekirch and Ettelbruck)
    howItWorks:
      "Vianden is a commune in north-eastern Luxembourg with about 2,220 residents in 2025, in the valley of the Our with Germany across the water; Luxembourg has only communes and the state, with no provincial layer between, and an elected mayor and council govern it. Vianden Castle was built between the eleventh and fourteenth centuries as one of the largest fortified castles west of the Rhine, sold in 1820 and left to decay until Grand Duke Jean ceded it to the State in 1977, restored since and open as a museum, with the town spread along the river directly below it. Victor Hugo stayed here several times between 1862 and 1871 and wrote of the district, and his house is a museum too. A chairlift runs in season from the valley to the ridge opposite for the view of the castle. Inside the mountain is a pumped-storage hydroelectric plant, among the earlier ones in Europe, which supports the town alongside tourism. Luxembourg City lies about 47 km south, reached by changing to a bus at Diekirch or Ettelbruck. Newcomers most often go wrong by expecting a train, when the only way in is by road.",
    layout:
      "The town is built along the floor of the Our Valley, with the castle standing atop a cliff on the eastern bank; a cable car connects the valley-floor town to the high ground where the castle sits.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Luxembourg Findel Airport (about 45 km); public transport is free nationwide. The town itself is walkable; reaching the castle is possible on foot or by cable car. The climate is temperate maritime, comparatively cool due to the valley setting.",
    culture:
      "All three official languages are in use. The 19th-century French writer Victor Hugo lived here in exile, and his former residence is now a memorial museum, an important local cultural landmark. Restaurant bills typically already include service.",
    seeAndDo:
      "Vianden Castle (Luxembourg's largest surviving feudal castle); the Victor Hugo House museum; a cable-car ride to the summit for the view; hiking trails through the Our Valley.",
    whenAndTips:
      "May–September is the most pleasant season; the castle and town are especially striking during autumn foliage — worth setting aside half a day specifically to tour the castle interior.",
  },
  clervaux: {
    identity:
      "Clervaux is a small town in the Clerve Valley in northern Luxembourg, with a population of about 1,600; its medieval castle dominates high ground at the centre of the valley, and the town is an important historical witness to the Battle of the Bulge.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Clervaux (Luxembourg; commune in the north, town population 1,609 in 2025 and commune 6,289 over 85.05 km² after mergers; Clervaux Castle, its oldest parts from the 12th century built by Gerard, Count of Sponheim, damaged in the Battle of the Bulge in December 1944 and rebuilt; the castle houses Edward Steichen's The Family of Man exhibition and a Battle of the Bulge museum; French Benedictine monks founded Clervaux Abbey in 1910; railway station with trains to Luxembourg City and Liège)
    howItWorks:
      "Clervaux is a commune in northern Luxembourg with about 1,600 people in the town and 6,290 in the commune over 85 km² after mergers, governed by an elected mayor and council; Luxembourg has only communes and the state, with no provincial layer between. The town is squeezed into a deep valley of the Clerve, the castle standing on a rock spur within it, its oldest parts built in the twelfth century by Gerard, Count of Sponheim, damaged in the Battle of the Bulge in December 1944 and rebuilt afterwards. Two exhibitions now fill the castle: the permanent installation of Edward Steichen's 1955 photographic exhibition The Family of Man, added to the Memory of the World register in 2003, and a museum of the Battle of the Bulge. French Benedictine monks founded Clervaux Abbey in 1910 and its church stands on the opposite slope looking down on the town. The railway runs here from Luxembourg City and on to Liège in Belgium as the main line north out of the country. Newcomers most often go wrong by taking the town for a single sight, when it is a rare railway town in a gorge, pressed by its slopes into one long strip.",
    layout:
      "The town is built along both banks of the Clerve Valley, with the castle on high ground at the valley's centre and a Benedictine abbey on a nearby hill overlooking the whole valley.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Luxembourg Findel Airport (about 55 km); public transport is free nationwide. The town itself is walkable. The climate is temperate maritime.",
    culture:
      "All three official languages are in use. Clervaux Castle permanently houses \"The Family of Man,\" the classic photography exhibition curated by Edward Steichen, inscribed on the UNESCO Memory of the World Register. Restaurant bills typically already include service.",
    seeAndDo:
      "Clervaux Castle (the permanent \"Family of Man\" photography exhibition); the Benedictine Abbey of Saint Maurice and Maur; historic sites related to the Battle of the Bulge; hiking the Clerve Valley.",
    whenAndTips:
      "May–September is the most pleasant season; plan half a day for the castle's photography exhibition and the abbey, and it can easily be combined with a visit to nearby Vianden.",
  },
  "esch-sur-sure": {
    identity:
      "Esch-sur-Sûre is a small town on the shore of the Upper Sûre Lake, with a population of about 300; its old castle and old town are built on a bend of the Sûre, and it is the core gateway to the Upper Sûre Nature Park and the lake district.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Esch-sur-Sûre (Luxembourg; commune in the Wiltz canton in the north-west, 3,279 residents in 2025 over 51.26 km² after Neunhausen and Heiderscheid were merged in 2011; the town proper about 415 people, set on a spur within a sharp meander of the Sûre, entered through a tunnel; 10th-century castle ruins above; the Upper Sûre Lake, an artificial reservoir built in the 1960s and extending about 10 km up the valley, supplying drinking water; Upper Sûre Natural Park)
    howItWorks:
      "Esch-sur-Sûre is a commune of Wiltz canton in north-western Luxembourg with about 3,280 residents over 51 km² after Neunhausen and Heiderscheid were merged into it in 2011, governed by an elected mayor and council; Luxembourg has only communes and the state, with no provincial layer between. The town proper holds only about 415 people, and the ground explains everything about it: the Sûre loops here into a nearly closed meander that all but islands a rock spur, the houses crowd onto that spur, the way in runs through a tunnel cut in the hillside, and the ruins of a tenth-century castle press down on the summit. In the 1960s the state dammed the river upstream to form the Upper Sûre Lake, about ten kilometres long — the reservoir is the country's main source of drinking water, so activity on it is regulated and the Upper Sûre Natural Park was created around it. Luxembourg City lies about 45 km south-east. Newcomers most often go wrong by taking the reservoir for an ordinary swimming lake, when it is the national water supply and the rules say which stretches may be entered.",
    layout:
      "The town is built on a near-closed river-bend peninsula of the Sûre, with the castle ruins overlooking the whole old town and river bend; the Upper Sûre reservoir lies right beside the town to the west.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Luxembourg Findel Airport (about 45 km); public transport is free nationwide, though exploring the lake district is best done by car or bicycle. The climate is temperate maritime.",
    culture:
      "All three official languages are in use. Though small, the town has long prioritised ecological protection given the Upper Sûre Lake's role as an important drinking-water source for Luxembourg, making it an important model area for ecotourism in the country. Restaurant bills typically already include service.",
    seeAndDo:
      "The ruins of Esch-sur-Sûre Castle; a walk around the old town's river-bend peninsula; water activities on the Upper Sûre Lake (canoeing, sailing); hiking and cycling trails through the Upper Sûre Nature Park.",
    whenAndTips:
      "May–September is the most pleasant season and also peak time for water activities on the lake; plan a day's cycling or hiking loop around the lake to fully experience the scenery of the Upper Sûre Nature Park.",
  },
};
