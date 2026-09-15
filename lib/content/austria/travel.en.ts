import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Austria ============
  "austria-overview": {
    // identity sources: Statistik Austria《Bevölkerungsstand 1. Jänner 2025》：9,198,214 人。https://www.statistik.at/fileadmin/announcement/2025/02/20250211Bevoelkerung1.1.2025.pdf
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Austria sits in Central Europe, covering about 84,000 km² with a population of about 9.2 million as of January 2025 (Statistics Austria). It is a landlocked country, with about 62% of its territory covered by the Alps. The capital, Vienna, was once the seat of the Austro-Hungarian Empire under the Habsburg dynasty and still carries a deep classical-music and coffeehouse tradition.",
    layout:
      "Broadly divided into: Vienna (the capital, in the Vienna Basin in the north-east), Tyrol (Innsbruck, an Alpine ski hub), Salzburg state (Salzburg, Mozart's birthplace and gateway to the Salzkammergut lake district), Upper Austria (Linz, an industrial and cultural city on the Danube), Carinthia (Klagenfurt and Villach, the southern lake district), Styria (Graz, Austria's second city), and Vorarlberg (Bregenz, the western exclave on Lake Constance).",
    gettingAround:
      "Austria's federal railway (ÖBB) network is dense, with intercity express trains linking the major cities — often more convenient than flying between them. Vienna has an extensive metro and tram network. Driving is on the right; a toll sticker (Vignette) is required on motorways. The climate transitions from temperate continental to Alpine — the mountains are cold and snowy in winter, making Austria an important European ski destination, while summers are mild and good for hiking and lake holidays. Power is 230V, European two-round-pin plug.",
    culture:
      "The official language is German; English is widely spoken in tourist areas. Austrians value courtesy and punctuality; restaurants usually include a service charge, and an additional 5–10% tip or rounding up is customary. Coffeehouse culture runs especially deep in Vienna — \"Viennese Coffee House Culture\" was inscribed on the UNESCO Intangible Cultural Heritage list in 2011. Austria has a rich classical-music tradition, with composers such as Mozart, Haydn and Schubert all leaving major marks here.",
    seeAndDo:
      "Classical music and historic architecture: Vienna's Schönbrunn Palace, St. Stephen's Cathedral, Salzburg's old town. Alpine landforms: Grossglockner in the Hohe Tauern, the Dachstein glacier, the Krimml Waterfalls. Lake scenery: the Salzkammergut lake district (including Hallstatt), Carinthia's lakes (Wörthersee, Millstätter See).",
    whenAndTips:
      "May–September is best for outdoor activities and the lake district; December's Christmas markets are a winter highlight; December–March is peak Alpine ski season. Austria is a Schengen-area member; citizens of most countries follow Schengen rules for short visits — check the Austrian Ministry of Foreign Affairs and current Schengen regulations for specifics.",
  },

  vienna: {
    // identity sources: Statistik Austria 官方新闻稿《Bevölkerung Österreichs 2025 nur leicht gewachsen》（2026-02-09 发布）：
    //   2026-01-01 维也纳（既是市也是联邦州）人口**初步数** 2,042,036。
    //   https://www.statistik.at/fileadmin/announcement/2026/02/20260209Bevoelkerung1.1.2026.pdf（1 级，2026-09-08 核）。
    //   **发布节奏**：基准日每年 1 月 1 日；**初步数次年 2 月**发布，**终版同年 7 月底**发布 ——
    //   本条用的是初步数，下一轮应改用终版并留意有无细微修订。
    //   **「都会区约 290 万」是欧盟统计局功能城市区（FUA）口径**（2023 年 2,971,752）——
    //   奥地利国内统计没有与美国 MSA 对等的官方「都会区」类别，正文已注明是欧盟口径。
    identity:
      "Vienna is Austria's capital and largest city, with a population of about 2.04 million (Statistik Austria's preliminary 1 January 2026 figure). It was once the capital of the Austro-Hungarian Empire under the Habsburg dynasty and still carries deep classical-music, coffeehouse and imperial-architecture traditions.",
    // howItWorks sources: 维也纳交通公司（Wiener Linien）2026 年新资费：年票 467 欧元（数字版 461，分期 506.40），2026-01-01 生效；此前自 2012 年起一直是 365 欧元，此次是十四年来首次调整，并宣布今后逐年调价。https://www.derstandard.at/story/3000000285746/wiener-oeffi-jahreskarte-wird-ab-2026-teurer-und-kostet-467-euro （级别 2，主流媒体转述；官方资费页 https://www.wienerlinien.at 亦可核）
    //   **这条是 C6-e 的原型**：写入时正确、十几年没变，于是没人怀疑它会过期——恰恰在今年变了。核实日 2026-09-07
    howItWorks:
      "Vienna is both a city and one of Austria's nine federal states: the mayor is also the state governor, and the city council is also the state parliament. It is divided into 23 districts (Bezirke), each with an elected district assembly and head, numbered in a spiral from the centre: the 1st, Innere Stadt, lies inside the Ringstrasse, the 2nd to 9th between the Ring and the Gürtel, and the 10th to 23rd beyond the Gürtel. The city covers about 415 km² with about 2.0 million people at the start of 2026, and the commuting zone on the EU definition with surrounding Lower Austria about 2.9 million. The Danube flows through the north-east, with the Donauinsel and Donaucity as the new districts by the river, the Vienna Woods on the western edge, and vineyards still within the city boundary. About six in ten residents live in municipal or subsidised housing, the city's housing policy for a century. Addresses give district number, street and house number, and the middle two digits of the postcode are the district — 1010 is the 1st, 1230 the 23rd. Wiener Linien's five U-Bahn lines, trams and buses run on a single annual pass, held at 365 euros from 2012 and raised to 467 euros in January 2026. Newcomers most often go wrong by taking the area inside the Ring for Vienna, when it is the smallest of the 23 districts.",
    layout:
      "The Ringstrasse encircles the old-town core, lined with landmarks including the State Opera and the Kunsthistorisches Museum; Schönbrunn Palace, the Habsburgs' summer residence, sits in the south-west of the city; St. Stephen's Cathedral is the geographic and spiritual centre of the old town.",
    gettingAround:
      "The airport lies about 18 km south-east of the centre, linked by the City Airport Train (CAT) and metro. Vienna's metro, tram and bus network covers the whole city and is among the most developed public transport systems in Europe. The climate is temperate continental, with mild summers (June–August) and cold winters, often snowy in December. Power is 230V, European two-round-pin plug.",
    culture:
      "The official language is German; English is widely spoken in tourist areas. Vienna's coffeehouse culture runs deep — sitting in a café to read, write or socialise is part of the traditional way of life, inscribed on the UNESCO Intangible Cultural Heritage list in 2011. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "Schönbrunn Palace and the Hofburg; St. Stephen's Cathedral; the Vienna State Opera (book a classical concert or opera performance); the Kunsthistorisches Museum; a day trip to the Wienerwald.",
    whenAndTips:
      "May–September brings the most pleasant weather; December's Christmas markets are atmospheric but cold. Vienna is the main transport hub for exploring the whole of Austria and an ideal destination for classical concerts — book tickets in advance.",
  },

  salzburg: {
    // identity sources: Statistik Austria 2026-01-01：萨尔茨堡市 157,834（经 citypopulation.de 转引，3 级，2026-09-08 核）。
    //   市自己的居民登记 2026-09-01 为 158,535，差异极小。
    //   **发布节奏**：基准日每年 1 月 1 日，初步数次年 2 月、终版同年 7 月底。
    identity:
      "Salzburg is the capital of Salzburg state, with a population of about 158,000 (start of 2026). It is the birthplace of the composer Mozart, and its well-preserved Baroque old town was inscribed as a UNESCO World Heritage site in 1996.",
    // howItWorks sources: Wikipedia (2026-09): Salzburg (statutory city, state capital; 65.65 km²; ~158,000 2026; Altstadt UNESCO 1996; Salzach; buses/trolleybuses + S-Bahn; Freilassing 5 km; ~2 million visitors)
    howItWorks:
      "Salzburg is the capital of the state of Salzburg, a 'statutory city' whose government also performs district functions, with the state parliament and government in the city; it covers about 66 km² with about 158,000 people in 2026. The Salzach divides it: the left bank holds the old town inscribed as World Heritage in 1996, with the Getreidegasse, the cathedral and the Hohensalzburg fortress above, pressed between the river and the rock of the Mönchsberg; the right bank is the new town around Mirabell Palace and Linzer Gasse, with the Kapuzinerberg behind. Until 1803 the city was ruled by prince-archbishops, and the Baroque churches and squares are their legacy. Mozart's birthplace and the summer festival bring some 2 million visitors a year to a city of 158,000. There is no rail transit; buses and trolleybuses serve the city and the S-Bahn its surroundings. The German border lies 5 km away at Freilassing, and Munich about 145 km. Addresses give street, number and four-digit postcode beginning with 50. Newcomers most often go wrong by taking Salzburg for a festival stage, when it is the administrative centre of a state, with the old town one corner by the river.",
    layout:
      "The Salzach River divides the city into the old town and the new town; Hohensalzburg Fortress stands on a hill above the old town overlooking the city; Mozart's birthplace and his residence are important landmarks in the old town.",
    gettingAround:
      "The airport lies about 4 km west of the centre. The old town is walkable, and a funicular climbs to Hohensalzburg Fortress. The climate is temperate continental, with mild summers and cold, snowy winters — rainfall is comparatively abundant owing to its proximity to the Alps.",
    culture:
      "The official language is German. As Mozart's birthplace, Salzburg is renowned for its classical music festivals — the Salzburg Festival is one of Europe's oldest and most prestigious classical-music festivals. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "Hohensalzburg Fortress; Mozart's birthplace and residence; the Cathedral Square; day trips to the Salzkammergut lake district (including Hallstatt) or Liechtensteinklamm.",
    whenAndTips:
      "May–September brings the most pleasant weather; during the Salzburg Festival in July–August, visitor numbers and accommodation prices rise noticeably. Salzburg is an ideal gateway to the Salzkammergut lake district and the Alps.",
  },

  innsbruck: {
    // identity sources: 人口：奥地利统计局 2026-01-01 = 132,820（⚠️ 经 citypopulation.de 转引，**3 级**，一手 STATcube 本轮未取到）；蒂罗尔州政府统计部门 Regionsprofil（2 级，2026-03-12 发布）给 2025-01-01 = 132,499，差 0.2%，互相印证。口径是市镇（Gemeinde）常住人口。全国数约次年 2 月，市镇细分 3—5 月陆续出。下一轮直接拉 STATcube 升到 1 级。
    identity:
      "Innsbruck is the capital of Tyrol, with a population of about 133,000 as of early 2026 (Statistics Austria), set in the middle of the Inn Valley and ringed by the Alps. It has hosted the Winter Olympics twice (1964 and 1976).",
    // howItWorks sources: Statistik Austria 2026-01-01：因斯布鲁克 132,820（经 citypopulation.de 转引，3 级，2026-09-08 核）。
    //   原文的「约13万」本来就对，只是年份旧了一期。
    howItWorks:
      "Innsbruck is the capital of Tyrol, a 'statutory city' with the state parliament and government in town; it covers about 105 km² with about 133,000 people at the start of 2026, divided into nine boroughs. The city lies on the floor of the Inn valley at about 574 m, with the Nordkette of the Karwendel to the north and the Patscherkofel to the south, the two walls pressing it between them: the Golden Roof and Maria-Theresien-Strasse are the centre, the Hungerburgbahn and Nordkette cableways carry people from the centre to 2,300 m within half an hour, and the Bergisel ski jump stands on the southern slope. The Winter Olympics were held here in 1964 and 1976. The University of Innsbruck has about 35,000 students, a quarter of the city's people. IVB trams and buses serve the city, and the Brenner Pass about 30 km south is the rail and road route into Italy. Tyrolean identity runs strong, with dialect and dress part of daily life. Addresses give street, number and four-digit postcode beginning with 60. Newcomers most often go wrong by taking Innsbruck for a ski village, when it is a state capital and university city in the Alps.",
    layout:
      "The Golden Roof in the old-town centre is Innsbruck's landmark building; the Karwendel range rises directly north of the old town, with a cable car running straight from the city centre into the mountains; Maria-Theresien-Straße is the old town's main street.",
    gettingAround:
      "The airport lies about 4 km west of the centre. The old town is walkable, and several cable car lines connect the city to surrounding ski areas. The climate is Alpine, with cold, snowy winters (peak ski season) and comparatively mild summers good for hiking.",
    culture:
      "The official language is German. The Tyrol region preserves a strong Alpine traditional culture, including folk costume, folk music and Alpine pasture traditions. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "The Golden Roof and old-town streets; the Innsbruck Court Church; the Nordkette cable car (straight up to a Karwendel viewpoint); day trips to the Ötztal Alps or the Zillertal ski areas.",
    whenAndTips:
      "December–March is peak ski season; May–September brings mild weather good for hiking and outdoor activities. Innsbruck is an ideal base for exploring the Alps of Tyrol.",
  },

  graz: {
    // identity sources: Statistik Austria 2026-01-01：格拉茨 306,971（经 citypopulation.de 转引，3 级，2026-09-08 核）。
    identity:
      "Graz is the capital of Styria and Austria's second-largest city, with a population of about 308,000 (start of 2026), set on the Mur River; its old town was inscribed as a UNESCO World Heritage site in 1999.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Graz (statutory city, Styria capital; 127.6 km²; ~308,000 2026; 17 districts; Mur; Schlossberg; old town UNESCO 1999 + Eggenberg 2010; Kunsthaus/Murinsel; 4 universities ~60,000 students; trams; airport; ECoC 2003)
    howItWorks:
      "Graz is the capital of Styria and Austria's second city, a 'statutory city' whose government also performs district functions, divided into seventeen districts over about 128 km² with about 308,000 people in 2026; the state parliament and government sit in town, and police and schools belong to the state. The Mur divides the old town: the east bank holds the old town inscribed as World Heritage in 1999 with the Schlossberg clock tower looking down, the west bank the Kunsthaus and the Murinsel in the river, and Eggenberg Palace to the west joined the listing in 2010; four universities with about 60,000 students make it a university city, trams cross the town, the airport lies to the south and Vienna about 200 km north-east. Newcomers most often go wrong by taking Graz for a copy of Vienna, when it is the self-contained capital of Austria's south, sunnier than Vienna and slower.",
    layout:
      "Schlossberg (Castle Hill) is the city's central high point, its clock tower a Graz landmark; the old town preserves Renaissance and Baroque architecture; the Kunsthaus Graz sits on the banks of the Mur, known for its futuristic architecture.",
    gettingAround:
      "The airport lies about 10 km south of the centre. The city's tram and bus network is well developed, and the old town is walkable. The climate is temperate continental, with mild summers and cold winters — rainfall is more evenly distributed than in Tyrol.",
    culture:
      "The official language is German. Graz is an important university city in Austria with a lively youth culture. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "Schlossberg and its clock tower; the old-town streets of Graz; the Kunsthaus Graz; a walk along the Mur; day trips to Styria's wine-growing region.",
    whenAndTips:
      "May–September brings the most pleasant weather. Graz is an ideal base for exploring Styria and the floodplain forests of the upper Mur.",
  },

  linz: {
    // 零改动留痕（2026-09-10）：2009 年欧洲文化之都、2014-12-01 入选 UNESCO 媒体艺术之都，均核实属实。
    //   ✅ 零争议红线：正文只写现代的钢铁与港口经济、文化之都与电子艺术节，**未涉及纳粹时期的城市规划与工业史**，通过。
    // identity sources: 人口：林茨市政府公报 2026-01-01 为 215,040（1 级）。**howItWorks 早已写对、identity 没跟上**（C6-h）。2026-09-10 核。
    identity:
      "Linz is the capital of Upper Austria and Austria's third-largest city, with a population of about 215,000 at the start of 2026, set on the Danube — an important industrial and cultural city.",
    // howItWorks sources: 林茨市政府官方新闻稿（2026 年 1 月）：2026-01-01 市人口 215,040，
    //   https://www.linz.at/medienservice/2026/202601_133824.php（1 级，2026-09-08 核）。
    //   **原文的「都会区约 82 万」已删**：林茨市政府自己的「Ballungsraum」口径（含 13 个直接相邻市镇）
    //   约「接近 30 万」，82.3 万来自英文维基引用的一个更宽泛的统计区域，出处不明、相差近三倍。
    //   **奥地利没有与美国 MSA 对等的官方都会区口径**，写「都会区」会被读成官方数字。
    howItWorks:
      "Linz is the capital of Upper Austria and Austria's third city, a 'statutory city' of about 96 km² with about 215,000 people at the start of 2026 and, with its immediately adjoining municipalities, a built-up area approaching 300,000 on the city's own definition; the state parliament and government sit in town, and police and schools belong to the state. The city lies on both banks of the Danube, the Hauptplatz and old town on the south bank as its centre, the Ars Electronica Center and the pilgrimage church on the Pöstlingberg facing them across the river, and the voestalpine steelworks on the river to the east as the city's industrial root; it was European Capital of Culture in 2009 and a UNESCO City of Media Arts from 2014, trams cross the town, the airport lies west at Hörsching, and the train reaches Vienna in about an hour and a quarter. Newcomers most often go wrong by taking Linz for a steel town, when it was the first Austrian city to turn to digital art, and each bank of the river wears a different face.",
    layout:
      "The Hauptplatz (main square) is Linz's historic centre, ringed by Baroque buildings; Linz Cathedral (Neuer Dom) is one of Austria's largest churches; the Ars Electronica Center sits on the Danube, a landmark of Linz's identity as a \"city of media arts.\"",
    gettingAround:
      "The airport lies about 12 km south-west of the centre. The city's tram and bus network is well developed, and the old town is walkable. The climate is temperate continental, with mild summers and cold winters — typical of the Danube corridor.",
    culture:
      "The official language is German. Linz is an important centre for electronic and media art in Austria, and its annual Ars Electronica Festival is internationally known. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "The Hauptplatz and Linz Castle; the Ars Electronica Center; Linz Cathedral; a Danube river cruise; day trips to the Wachau or Hallstatt.",
    whenAndTips:
      "May–September brings the most pleasant weather. Linz is an important stop for exploring the Wachau and the Salzkammergut lake district.",
  },

  klagenfurt: {
    identity:
      "Klagenfurt is the capital of Carinthia, with a population of about 106,000 (2025), set at the eastern end of Wörthersee — an important lake-resort city in southern Austria.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Klagenfurt am Wörthersee (statutory city, Carinthia capital; ~120 km²; ~105,800 2025; Lindwurm/Neuer Platz; Renaissance old town; Wörthersee 4 km west; cultural centre of the Carinthian Slovenes; airport; Ljubljana 88 km)
    howItWorks:
      "Klagenfurt am Wörthersee is the capital of Carinthia, a 'statutory city' of about 120 km² with about 106,000 people in 2025; the state parliament and government sit in town, and police and schools belong to the state. The old town was rebuilt on a Renaissance grid in the sixteenth century, the Lindwurm fountain on the Neuer Platz is the city's emblem and arcaded courtyards are scattered through the blocks; the Wörthersee lies 4 km west, a canal brings its water to the edge of the old town, the lakeside lido is the centre of summer and the Minimundus miniature park stands by the lake; this is the cultural centre of the Carinthian Slovenes, with schools and media of their own, the airport lies north of town and Ljubljana 88 km south. Newcomers most often go wrong by expecting Klagenfurt on the lake, when the lake lies 4 km outside and the old town itself is an inland Renaissance city.",
    layout:
      "The Neuer Platz in the old-town centre is marked by the Lindwurm dragon fountain; the old town preserves Renaissance-era architecture; the Europapark stretches along the eastern shore of Wörthersee, the city's main recreational area.",
    gettingAround:
      "The airport lies about 3 km north-west of the centre. The old town is walkable; buses or bicycles are recommended for reaching the Wörthersee shoreline. The climate is temperate continental, with Carinthia's comparatively warm microclimate giving it higher summer temperatures than much of the rest of Austria.",
    culture:
      "The official language is German. Carinthia's comparatively warm summer climate has made it a favoured summer and lake-resort destination for Austrians. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "The Lindwurm fountain and Neuer Platz; the Europapark; the Wörthersee lakeside resort area; day trips to the Millstätter See or Villach.",
    whenAndTips:
      "May–September brings the most pleasant weather and is peak season for swimming and water activities on Wörthersee. Klagenfurt is an ideal base for exploring Carinthia's lake district.",
  },

  villach: {
    identity:
      "Villach is Carinthia's second-largest city, with a population of about 66,000 (2025), set on the Drava River near the borders with Italy and Slovenia — an important transport hub in southern Austria.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Villach (statutory city, Carinthia; ~135 km²; ~65,700 2025, second in Carinthia; Drau/Gail; Hauptplatz; Warmbad thermal spa; Dobratsch; Lake Ossiach; Infineon; rail hub Tauern/Karawanken; Italy/Slovenia borders ~15–20 km; Fasching)
    howItWorks:
      "Villach is the second city of Carinthia, a 'statutory city' of about 135 km² running from the slopes of the Dobratsch to Lake Ossiach, with about 66,000 people in 2025; the city runs local services, and police and schools belong to the state. The old town lies on the south bank where the Drau meets the Gail, the Hauptplatz its centre, the thermal spa of Warmbad to the south, the Infineon chip plant the largest employer, Villach station the junction of the Tauern and Karawanken lines, the Italian and Slovenian borders each fifteen or twenty kilometres away, and the Fasching carnival the high point of the year. Newcomers most often go wrong by taking Villach for a satellite of Klagenfurt, when it is the rail gateway to Italy and Slovenia, where the daily life of three countries meets.",
    layout:
      "The Hauptplatz in the old-town centre preserves its traditional architectural character; the Drava flows through the city, its banks a recreational area; several lakes on the southern flank of the Alps ring the surrounding area.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Klagenfurt Airport (about 40 km). The old town is walkable. The climate is temperate continental, comparatively mild owing to its position on the southern flank of the Alps.",
    culture:
      "The official language is German. Villach's proximity to the Italian and Slovenian borders gives it a somewhat multicultural character. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "The old-town Hauptplatz; a walk along the Drava; day trips to the Warmbad Villach thermal spa resort, the Carnic Alps, or the Plöcken Pass on the Italian border.",
    whenAndTips:
      "May–September brings the most pleasant weather. Villach is an ideal base for exploring southern Carinthia and the Carnic Alps.",
  },

  hallstatt: {
    // identity sources: Statistik Austria《Ein Blick auf die Gemeinde Hallstatt》官方统计表 2026-01-01：741 人
    //   https://www.statistik.at/blickgem/G0101/g40709.pdf（1 级，2026-09-08 核）。
    //   **这是个几百人的村（Gemeinde）**，不要把哈尔施塔特湖区或整个萨尔茨卡默古特的人口写成村的人口。
    identity:
      "Hallstatt is a lakeside village in the Salzkammergut region of Upper Austria, with a population of only about 740 (start of 2026), built against the foot of the Dachstein; it was inscribed as a UNESCO World Heritage cultural landscape in 1997.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Hallstatt (municipality in Gmunden district, Upper Austria; ~740 2026; Hallstätter See under the Dachstein; UNESCO 1997 Hallstatt-Dachstein/Salzkammergut; oldest salt mine; up to 10,000–30,000 visitors/day 2020; station across the lake by boat; Salzburg ~75 km)
    howItWorks:
      "Hallstatt is a municipality of Gmunden district in Upper Austria with about 740 permanent residents in 2026, its own elected council and mayor, and police and schools belonging to the state. The village is squeezed between the west shore of the Hallstätter See and the steep slopes of the Dachstein, one lakeside street and a few tiers of houses up the hill, the salt mine in the mountain above the oldest still worked in the world, reached by funicular, the ossuary beside the church, and the whole lake-and-mountain landscape inscribed as World Heritage in 1997; the railway station lies across the lake and is reached by boat, cars are restricted in the village, in season more than ten thousand visitors a day pour in, a dozen times the residents, and Salzburg lies about 75 km north-west. Newcomers most often go wrong by taking Hallstatt for a town, when it is a village of a few hundred where, most of the day, visitors outnumber residents.",
    layout:
      "The village is built along the narrow, sloping eastern shore of the Hallstättersee, its coloured houses stacked in tiers; the Marktplatz is the village centre; a funicular runs from the village up to the salt-mine visitor area on the mountain above.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Salzburg Airport (about 70 km). The village is small and best explored on foot; in peak season it gets very crowded, so plan your visit timing carefully. The climate is Alpine, with mild summers, cold winters and consistently high humidity around the lake.",
    culture:
      "The official language is German. Hallstatt has become an extremely popular photo destination in recent years thanks to its lake-and-mountain scenery, and the community is working out how to balance visitor management with residents' daily life. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "The Marktplatz and lakeside promenade; the salt-mine funicular and tour (one of Europe's oldest salt-mining sites); the Bone House (Beinhaus); the viewpoint across the lake for the classic Hallstatt panorama.",
    whenAndTips:
      "May–September brings the most pleasant weather; peak season (especially July–August) is extremely crowded — visit early morning or evening to avoid the busiest times. Some tourist facilities scale back in winter.",
  },

  "kitzbuhel-city": {
    identity:
      "Kitzbühel is a well-known Alpine ski town in Tyrol, with a population of about 8,000, set among the Kitzbühel Alps and internationally famous for the Hahnenkamm alpine skiing World Cup race held each January.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kitzbühel (town in Tyrol, district seat; 58 km²; ~8,300; 762 m; walled centre; Hahnenkamm/Streif race January; Kitzbüheler Horn; rail Salzburg–Innsbruck; Innsbruck ~100 km)
    howItWorks:
      "Kitzbühel is a town of Tyrol and the seat of Kitzbühel district, about 58 km² with about 8,300 people, an elected council and mayor, and police and schools belonging to the state. The town lies on the valley floor at 762 m, its old core chartered in 1271 and ringed by walls, painted houses, luxury shops and restaurants packed along two main streets without cars; the Hahnenkamm rises to the west, its Streif downhill each January a famous stop on the World Cup, the Kitzbüheler Horn to the east, the ski area linked to Kirchberg, golf and a tennis tournament in summer, the railway station on the Salzburg–Innsbruck line and Innsbruck about 100 km west. Newcomers most often go wrong by taking Kitzbühel for a ski hill, when it is a walled town seven hundred years old, and skiing only its January fame.",
    layout:
      "The old-town centre preserves a medieval street layout and colourful houses, one of the better-preserved Alpine towns in Europe; cable car stations around the town connect directly to the ski areas.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Innsbruck Airport (about 80 km). The town is best explored on foot, with cable cars and shuttle buses linking the ski areas. The climate is Alpine, with cold, snowy winters (peak ski season) and comparatively mild summers good for hiking and mountain biking.",
    culture:
      "The official language is German. Kitzbühel has a long ski history and was one of the first Alpine regions to develop modern skiing. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "The historic old-town streets; the Hahnenkamm race course (open to visitors outside race periods); cable car rides for mountain views; day hikes in the Kitzbühel Alps.",
    whenAndTips:
      "December–March is peak ski season, with visitor numbers and accommodation prices rising sharply during the Hahnenkamm World Cup in January; June–September is peak season for summer hiking and mountain biking.",
  },

  bregenz: {
    // 零改动留痕（2026-09-10）：「比州内最大的城市多恩比恩还小」经核属实（多恩比恩 52,252 > 布雷根茨 29,270）；
    //   水上舞台约 7,000 座、「世界最大湖上舞台」的说法有多方来源支撑。
    // identity sources: 人口：2026-01-01 为 29,270（Statistik Austria 终版，经 3 级转引）。同条目 howItWorks 的「多恩比恩比布雷根茨大」经核属实（多恩比恩 52,252）。2026-09-10 核。
    identity:
      "Bregenz is the capital of Vorarlberg, with a population of about 29,000 at the start of 2026, set on the eastern shore of Lake Constance — Austria's westernmost city, facing Switzerland and Germany across the lake.",
    // howItWorks sources: Statistik Austria 2026-01-01 终版：布雷根茨 29,270（2023 年约 29,600，略降）。
    //   https://www.citypopulation.de/de/austria/vorarlberg/bregenz/80207__bregenz/
    //   （3 级，标注「Die Einwohnerzahlen für 2026 sind endgültig」转引官方终版，2026-09-08 核）。
    howItWorks:
      "Bregenz is the capital of Vorarlberg, about 30 km² with about 29,000 people at the start of 2026, smaller than Dornbirn, the state's largest city; the state parliament and government sit in town, the city runs local services, and police and schools belong to the state. The city lies on the east shore of Lake Constance, the floating stage by the lake playing opera each July and August to 7,000 seats, the largest lake stage in the world, the Pfänder cable car climbing from the shore, the Oberstadt the medieval old town, and Germany and Switzerland just across the water; the Alemannic dialect makes the accent closer to Switzerland's, and the nearest big airport is Zurich, about 120 km. Newcomers most often go wrong by assuming the capital is the largest city, when Vorarlberg's economic and population weight lies south at Dornbirn.",
    layout:
      "The old town sits on a hill and preserves medieval walls and streets; the newer town extends along the lakeshore, where the floating stage on the lake is the iconic venue of the Bregenz Festival; a cable car up the Pfänder offers a panoramic view of Lake Constance.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Friedrichshafen Airport in Germany (about 25 km). City buses cover the main districts, and the old town is walkable. The climate is temperate maritime, moderated by Lake Constance — milder winters and cooler summers than Austria's interior.",
    culture:
      "The official language is German. Vorarlberg's location bordering Switzerland and Germany gives its dialect and culture some Alemannic influence. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "The lake stage (the main venue of the Bregenz Festival, held each July–August); the old-town walls and streets; the Pfänder cable car for views; a Lake Constance cruise (with views of the Swiss and German shores).",
    whenAndTips:
      "July–August, during the Bregenz Festival, is the liveliest time — book accommodation well ahead. May–September is best for activities along Lake Constance.",
  },

  "zell-am-see": {
    // 零改动留痕（2026-09-10）：市域 55.2 km² 与正文「约 55 平方公里」一致；当地无民用商业机场，正文表述无误。
    // identity sources: 人口：2026-01-01 为 10,217（Statistik Austria 终版）；萨尔茨堡州政府 2025-01-01 为 10,227（1 级）。原文「约 9,900」是未标年的旧值。2026-09-10 核。
    identity:
      "Zell am See is a lakeside town in the Pinzgau region of Salzburg state, with a population of about 10,200 at the start of 2026, set on the shore of the Zeller See at the foot of the Kitzsteinhorn — an Alpine resort offering both lake and glacier scenery.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Zell am See (town in Salzburg state, district seat; 55 km²; ~9,900; Lake Zell; Schmittenhöhe 138 km pistes; Kaprun/Kitzsteinhorn 10 km separate municipality; Grossglockner ~30 km; rail 1875; Salzburg ~80 km)
    howItWorks:
      "Zell am See is a town of Salzburg state and the seat of Zell am See district, about 55 km² with about 10,200 people at the start of 2026, an elected council and mayor, and police and schools belonging to the state. The town lies on the west shore of Lake Zell, a resort of the aristocracy since the railway of 1875, the Schmittenhöhe cable car climbing from the edge of town to 138 km of pistes, Kaprun 10 km south another municipality with the glacier ski area of the Kitzsteinhorn, the two marketed as one resort, the Grossglockner about 30 km south, visitors from the Gulf filling the town in summer, and Salzburg about 80 km north. Newcomers most often go wrong by taking 'Zell am See-Kaprun' for one town, when they are two municipalities, the glacier at Kaprun and the lake at Zell.",
    layout:
      "The old-town centre preserves a medieval street layout along the western shore of the Zeller See; cable car stations connect the town to the Kitzsteinhorn ski area, where the summit holds snow year-round for skiing in every season.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Salzburg Airport (about 80 km). The town is best explored on foot, with bicycles available for a loop around the lake. The climate is Alpine, with cold, snowy winters and mild summers when the lake is warm enough for swimming.",
    culture:
      "The official language is German. Zell am See is one of the few Austrian resorts offering both lakeside summer holidays and high-Alpine skiing in one place. Restaurants usually include a service charge, with an additional 5–10% tip customary.",
    seeAndDo:
      "The lakeside path around the Zeller See and swimming; the Kitzsteinhorn cable car (year-round snow at the summit, with views over the Hohe Tauern peaks); day trips to the Krimml Waterfalls or Hohe Tauern National Park.",
    whenAndTips:
      "December–April is peak ski season (the Kitzsteinhorn's year-round snow extends the season); June–September is peak season for lakeside summer activities and hiking — one of Austria's rare destinations with both a winter ski season and a summer lake season.",
  },

  // ── Austria batch 2 (2026-09-05) ──
  "sankt-polten": {
    identity:
      "Sankt Pölten is the capital of Lower Austria, on the Traisen river about 60 km in a straight line west of Vienna, with about 60,000 people (2025). Built on the site of the Roman town of Aelium Cetium, it was among the first Austrian towns to receive a charter (1159); in 1986 the Lower Austrian parliament resolved to move the state capital here from Vienna, and the government arrived in 1997, so beside the Baroque old town stands a government quarter built in the 1990s, with the Klangturm sound tower and the Festspielhaus as its landmarks. It is the midway stop between Vienna and the Wachau valley.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Sankt Pölten (statutory city, Lower Austria capital since 1986, government moved 1997; 108 km²; ~59,800 2025; Traisen; Roman Aelium Cetium; Baroque old town; Landhaus/Klangturm; Westbahn Vienna ~25 min; charter 1159)
    howItWorks:
      "Sankt Pölten is the capital of Lower Austria, chosen by the state parliament in 1986 to replace Vienna, with the state government moving into a newly built government quarter in 1997; it is a 'statutory city' of about 108 km² with about 60,000 people in 2025. The old town lies on the west bank of the Traisen, the Baroque Rathausplatz its centre, its charter of 1159 letting it call itself the oldest city in Austria, with Roman remains beneath the old town; the government quarter lies on the east bank with the Klangturm as its landmark, and the station on the Western Railway is about 25 minutes from Vienna. Newcomers most often go wrong by assuming Lower Austria's capital is Vienna, when Vienna has been a state of its own since 1922 and Lower Austria's government sits in this small city of 60,000.",
    layout:
      "The Baroque old town is compact: the Rathausplatz (the Franciscan church, the town hall) is the centre, the cathedral lies to its north-east and pedestrian streets join the two; the government quarter (the state parliament, the Klangturm, the Festspielhaus, the state museum) lies south-east of the old town by the Traisen. The station is about 10 minutes' walk north of the old town. Melk and Krems in the Wachau are both about 30 km north, and Lilienfeld Abbey about 25 km south.",
    gettingAround:
      "St. Pölten has no airport with scheduled flights; the nearest is Vienna International (about 85 km, about 1 hour by direct Railjet). Railjet trains on the Western line take about 25 minutes from Vienna's Westbahnhof, about 50 from Linz and about 1.5 hours from Salzburg. The town is walkable, with buses; regional trains or buses reach the Wachau. The climate is temperate continental with warm summers and cold winters.",
    culture:
      "German is universal. The cathedral and the Franciscan church are working churches — no visits during services. The state museum is free or cheap and the Klangturm can be climbed. Markets are held in the old town on Thursdays and Saturdays. Lower Austrian food includes Most (pear cider), roasts and Wachau apricot desserts. Tip about 10% in restaurants.",
    seeAndDo:
      "The Rathausplatz and the Franciscan church; the cathedral; the government quarter and the Klangturm; the state museum (Museum Niederösterreich); a performance at the Festspielhaus; the Traisen riverside path; day trips to the Wachau (Melk Abbey, Krems, Dürnstein) and Lilienfeld Abbey.",
    whenAndTips:
      "May–September is most comfortable, with apricot blossom in early April (in the Wachau). Half a day for the town, a full day with the Wachau. An easy day trip from Vienna.",
  },
  krems: {
    // 零改动留痕（2026-09-10）：正文已带年份与数字（约 2.6 万，2026 年初），是本批 10 城里唯一一开始就写全的。
    //   📌 来源可升级：克雷姆斯市政府官网「Krems in Zahlen」给 2026 年 1 月主住所 **25,840**（1 级），
    //   比注释原引的 citypopulation.de（3 级，25,581）级别更高，两者都落在「约 2.6 万」内。「特许市（Statutarstadt）」身份属实。
    // identity sources: Statistik Austria 2026-01-01 终版：克雷姆斯（官方全名 Krems an der Donau，法定市）25,581。
    //   https://citypopulation.de/de/austria/niederosterreich/krems_an_der_donau_stadt/30101__krems_an_der_donau/
    //   （3 级，标注官方终版，2026-09-08 核）。
    identity:
      "Krems lies at the eastern end of the Wachau valley of the Danube about 70 km west of Vienna, with about 25,600 people (start of 2026) — one of Austria's oldest towns (first recorded in 995, with a child's grave 27,000 years old found in the town). The Wachau — the roughly 35 km stretch of the Danube from Melk to Krems — is known for its terraced vineyards, apricot trees, abbeys and old towns and was inscribed as a World Heritage site in 2000; Krems is a major producer of Grüner Veltliner and Riesling, the Steiner Tor of 1480 is the old town's emblem, and the 'Kunstmeile' art mile holds the caricature museum and the state gallery. Göttweig Abbey crowns the hill across the river, and Dürnstein, where Richard the Lionheart was held captive, lies about 8 km upstream.",
    // howItWorks sources: 人口：克雷姆斯市政府「Krems in Zahlen」2026 年 1 月**主住所**（Hauptwohnsitz）25,840，1 级 —— 比原先引的 citypopulation.de（3 级，25,581）级别更高。与 identity 段统一。
    howItWorks:
      "Krems an der Donau is a 'statutory city' of Lower Austria with about 26,000 people in early 2026 (City of Krems), its government also performing district functions, and police and schools belonging to the state. The city lies where the Krems enters the Danube as the eastern gate of the Wachau, inscribed as World Heritage in 2000: the Steiner Tor of the old town dates from 1480, the Stein district runs along the north bank of the Danube, the Kunsthalle and the Danube University stand between the two, vineyards climb the slopes behind the town, Grüner Veltliner and apricot brandy are its products, Göttweig abbey stands on the hill across the river, Dürnstein and Melk lie upstream, boats leave from the quay, and the train reaches Vienna in about an hour. Newcomers most often go wrong by taking Krems for a village of the Wachau, when it is a city with a university and a port at the valley's eastern end.",
    layout:
      "The old town of Krems climbs the slope on the north bank of the Danube, with the Steiner Tor at its western end, the pedestrian street and the Rathausplatz inside, and the Kunstmeile (the state gallery, the caricature museum) on the south-west edge by the river. Stein is a second old quarter joined to Krems on the west. The station lies on the south side of the old town by the river. Göttweig Abbey stands on the hill on the south bank (about 6 km), Dürnstein about 8 km upstream, and the Danube cycle path runs through.",
    gettingAround:
      "Krems has no airport with scheduled flights; the nearest is Vienna (about 90 km). Trains from Vienna's Franz-Josefs-Bahnhof take about 1 hour; from April to October Danube boats run from Vienna to Krems, Dürnstein and Melk. The old town is walkable; Dürnstein is a train ride (about 10 minutes), a boat or a bicycle ride away, and Göttweig a bus or a walk uphill. The climate is temperate, with warm summers in the valley that suit the vines.",
    culture:
      "German is universal. The Wachau's wineries and 'Heuriger' taverns (marked by a hung bundle of pine) open seasonally — mind the drink-driving limit; apricot season (July) brings an apricot festival and apricot brandy. Göttweig is a Benedictine abbey — keep quiet. The Danube cycle path (Passau–Vienna) passes through and bicycles are easy to hire. Tip about 10% in restaurants.",
    seeAndDo:
      "The Steiner Tor and the old town; the Kunstmeile (the state gallery, the caricature museum); the old streets of Stein; Göttweig Abbey (the terrace over the valley); Dürnstein (the blue church tower, the castle ruin); cycling or a boat through the Wachau to Melk; winery tastings (Grüner Veltliner); farm stalls in apricot season.",
    whenAndTips:
      "Early April for blossom, July for apricots and September–October for the harvest are best; boats stop and taverns close in winter. Half a day for Krems, a day for the Wachau. An easy day trip from Vienna, or a night in Dürnstein.",
  },
  "bad-ischl": {
    // 抽样 seed=17（2026-09-16）：howItWorks「城北的皇帝别墅」改为镇中心以西、河对岸（salzkammergut.at，并按坐标算方位约 238°；本条 layout 本来就写河西岸，两段自相矛盾）。
    // 零改动留痕（2026-09-10）：市域 162.85 km² 与正文「约 163 平方公里」一致；当地无民用商业机场，正文表述无误。
    //   哈布斯堡避暑史（1854 年皇帝别墅、1914-07-28 宣战书在此签署）为广泛记载史实、无评价性表述。
    // identity sources: 人口：2026-01-01 主住所 14,116（Statistik Austria 终版）；市政府官网 2025-01-01 为 14,129（1 级）。**只取主住所口径**——另有约 3,140 副住所，合计约 1.73 万，不要混用。2026-09-10 核。
    identity:
      "Bad Ischl lies in the Salzkammergut of Upper Austria where the Ischl meets the Traun, with about 14,000 people at the start of 2026. Brine cures made it a fashionable spa in the nineteenth century; in 1854 the mother of Emperor Franz Joseph I gave him the Kaiservilla as a wedding present, and for nearly sixty years he spent every summer here — on 28 July 1914 he signed the declaration of war on Serbia in the villa. The composer Lehár lived here, Brahms and Bruckner visited, and the Zauner pastry shop founded in 1832 served the court. In 2024 Bad Ischl and the Salzkammergut were European Capital of Culture, with Hallstatt and the Wolfgangsee close by.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Bad Ischl (town in Gmunden district, Upper Austria; 163 km²; ~14,000; Salzkammergut centre; Kaiservilla 1854; Zauner 1832; Lehár villa; ECoC 2024 with Salzkammergut; Traun; Salzburg ~55 km; Hallstatt ~20 km)
    howItWorks:
      "Bad Ischl is a town of Gmunden district in Upper Austria, about 163 km² with about 14,000 people at the start of 2026, an elected council and mayor, and police and schools belonging to the state. It is the centre of the Salzkammergut: a fashionable spa for brine cures from the early nineteenth century, from 1854 Emperor Franz Joseph spent every summer at the Kaiservilla west of the town centre, across the river, the court and the composers followed, Lehár's villa stands by the river and the Zauner café opened in 1832 still trades on the main street; the town lies where the Ischl meets the Traun, in 2024 it was European Capital of Culture together with the whole region, Salzburg lies about 55 km west and Hallstatt about 20 km south. Newcomers most often go wrong by taking Bad Ischl for a stop on the way to Hallstatt, when it is the historic centre and transport hub of the lake district.",
    layout:
      "The town sits in the valley where the two rivers meet, with the pedestrian Pfarrgasse, the Zauner café and the parish church at the centre on the east bank of the Traun, the Kaiservilla and its park at the foot of the hill on the west bank, and the Lehár Villa on the Traun. The station lies south of the centre. The salt mine is in the hills to the south-east. Hallstatt is about 20 km south, the Wolfgangsee about 10 km west, and Gmunden and the Traunsee about 30 km north.",
    gettingAround:
      "Bad Ischl has no airport with scheduled flights; the nearest is Salzburg (about 55 km, about 1 hour by road). Trains take about 2 hours from Salzburg via Attnang-Puchheim and about 2 from Linz; the 150 bus from Salzburg is more direct at about 1.5 hours. The town is walkable; Hallstatt is about 25 minutes by train and the Wolfgangsee a bus ride. The climate is temperate mountain, with cool wet summers and snowy winters.",
    culture:
      "German is universal. The Kaiservilla still belongs to the imperial descendants and is seen by guided tour without interior photography; the Lehár Villa opens in summer. Zauner's Zaunerstollen and the Kaiser coffee are the tradition. Commemorations are held on 18 August, the emperor's birthday, and the Lehár Festival runs in summer. The EurothermenResort offers brine baths. Tip about 10% in restaurants.",
    seeAndDo:
      "The Kaiservilla and its park (the Marble Palace); the Lehár Villa; the Zauner pastry shop; the pedestrian street and the town museum; the salt-mine tour; the Katrin cable car; the brine spa; day trips to Hallstatt, the Wolfgangsee (St. Wolfgang, the Schafberg rack railway), the Gosau lakes and the Traunsee.",
    whenAndTips:
      "June–September is most comfortable, with the imperial commemoration and the festival in August; winter is quiet and snowy. Half a day to a day for the town, and two or three nights as a base for the Salzkammergut lakes.",
  },
  eisenstadt: {
    identity:
      "Eisenstadt is the capital of Burgenland, Austria's easternmost state, at the southern foot of the Leitha hills about 50 km south-east of Vienna, with about 16,000 people (2025) — the smallest state capital in Austria. The Esterházy palace is the heart of the town; Joseph Haydn served the Esterházy princes here from 1761 for nearly thirty years, his house is a museum and his remains lie in the Bergkirche; the Jewish quarter established in 1732 was one of the historic 'Seven Communities', and the Austrian Jewish Museum stands within it. Eisenstadt became the capital after Burgenland joined Austria in 1925. About 10 km east lies the Neusiedler See, a World Heritage cultural landscape since 2001, surrounded by vineyards.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Eisenstadt (statutory city, Burgenland capital since 1925; 42.9 km²; ~16,100 2025; smallest state capital; Esterházy Palace; Haydn, Bergkirche tomb; Leitha hills; wine; Hungarian border ~12 km; Vienna ~50 km)
    howItWorks:
      "Eisenstadt is the capital of Burgenland and the smallest state capital in Austria, a 'statutory city' of about 43 km² with about 16,000 people in 2025; the state parliament and government sit in town, and police and schools belong to the state. This land passed from Hungary to Austria only in 1921, and the city became capital in 1925; the Esterházy Palace stands at the top of the old town, Haydn served here for decades as court musician and lies in the Bergkirche, vineyards climb the slopes of the Leitha hills, the Hungarian border lies about 12 km east, Vienna about 50 km north-west, and Croats and Hungarians are the state's minorities. Newcomers most often go wrong by taking Eisenstadt for a suburb of Vienna, when it is the capital of a state with a court, a parliament and wine of its own.",
    layout:
      "The old town is tiny: the Esterházy palace stands at its western end, with the main square and the pedestrian Hauptstraße in front, Haydn's house on the Hauptstraße, the Bergkirche on the hill west of the palace and the Jewish quarter north of it. The station lies south-east of the old town. Rust on the Neusiedler See (storks' nests and wine village) is about 13 km in a straight line south-east, and Mörbisch on the lake stages a summer operetta festival on the water.",
    gettingAround:
      "Eisenstadt has no airport with scheduled flights; Vienna International is about 45 km away. Trains from Vienna take about 1 hour 15 (changing at Neusiedl or Wiener Neustadt), buses about 1 hour. The old town is walkable; buses or bicycles (a cycle path rings the lake) reach the Neusiedler See. The climate is continental, with hot dry summers — one of the sunniest parts of Austria.",
    culture:
      "German is universal, with Croatian and Hungarian minority communities. The Haydn Hall of the palace is famed for its acoustics, and the Haydn Festival is held in September; the Bergkirche is a working church, with Haydn's mausoleum in a side chapel. Keep quiet in the Jewish museum and cemetery. Burgenland wines (Blaufränkisch, sweet wines) are tasted in the taverns of Rust. Tip about 10% in restaurants.",
    seeAndDo:
      "The Esterházy palace (the Haydn Hall, the palace gardens); Haydn's house; the Bergkirche, Haydn's mausoleum and the Calvary; the Jewish quarter and the Austrian Jewish Museum; the state museum; the Neusiedler See (the storks of Rust, the lake stage at Mörbisch, cycling round the lake); the vineyard trails of the Leitha hills; the Haydn Festival in September.",
    whenAndTips:
      "May–September is most comfortable, with the Mörbisch lake festival in July–August and the Haydn Festival in September; winter is quiet. Half a day for the town, half a day to a day for the lake. An easy day trip from Vienna.",
  },
  "st-anton": {
    identity:
      "St. Anton lies below the Arlberg pass at the western end of Tyrol at about 1,300 m, with about 2,400 permanent residents, and is one of the cradles of Alpine skiing: the Arlberg Ski Club founded in 1901 and Hannes Schneider's ski school of 1921 laid the foundations of modern ski teaching, and in the 1930s instructors from here carried skiing to America. The Arlberg ski area (St. Anton, Lech, Zürs and others, fully linked by lift in 2016) has 94 lifts and 340 km of pistes, the largest in Austria, with the Valluga at 2,811 m; the Alpine World Ski Championships were held here in 2001. In summer it is a base for hiking and climbing, and the Arlberg railway and tunnel put it on the Vienna–Zurich main line.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): St. Anton am Arlberg (municipality in Landeck district, Tyrol; 166 km²; ~2,400 2021; 1,304 m; Arlberg ski area 94 lifts, 340 km pistes; cradle of alpine skiing, instructors emigrated 1930s; Arlberg railway Zurich–Innsbruck; 2001 World Championships; Innsbruck ~100 km)
    howItWorks:
      "St. Anton am Arlberg is a municipality of Landeck district in Tyrol, about 166 km² with about 2,400 permanent residents in 2021, an elected council and mayor, and police and schools belonging to the state. The village lies at 1,304 m below the Arlberg pass as the core of the Arlberg ski area, which shares one pass with Lech, Zürs and St. Christoph, 94 lifts and 340 km of pistes, the largest in Austria; the ski school of the 1920s taught alpine skiing to the world from here, instructors emigrating to America in the 1930s carried the sport with them, the World Championships were held here in 2001, the station lies on the Arlberg line from Zurich to Innsbruck, and Innsbruck about 100 km east. Newcomers most often go wrong by expecting a village, when St. Anton is a ski town packed in winter and nearly empty in summer.",
    layout:
      "The village stretches east–west along the Rosanna valley, with the pedestrian street as its centre, the Galzigbahn cable car at the western end and the station on the south side; St. Christoph lies about 5 km up below the Arlberg pass, and Lech and Zürs across the pass in Vorarlberg. The pistes run straight up from the village lifts to the Galzig, the Valluga and the Rendl. Summer trails start from the top lift stations.",
    gettingAround:
      "St. Anton has no airport with scheduled flights; the nearest are Innsbruck (about 100 km, about 1 hour 15 by train) and Zurich (about 200 km, about 2.5 hours by train). Railjets reach the village station directly in about 5.5 hours from Vienna, 1 hour 15 from Innsbruck and 2.5 hours from Zurich. The village is walkable, free ski buses link the lifts and St. Christoph, and Lech is about 30 minutes by bus. The climate is alpine, snowy in winter and cool in summer.",
    culture:
      "German is universal and English is widespread in winter. Ski within the marked pistes; off-piste and deep snow need a guide and avalanche gear; the lift pass covers the whole Arlberg. St. Anton is famous for après-ski, with bars such as the MooserWirt in full swing from mid-afternoon. The ski museum is in the village. Mountain weather changes fast in summer. Tip about 10% in restaurants.",
    seeAndDo:
      "Winter skiing (the Galzig, the Valluga, the Rendl, the 'White Ring' circuit to Lech); the Valluga viewing platform; après-ski; the Arlberg ski museum; summer hiking (the Verwall hut, the Verwallsee) and mountain biking; the Arlberg WellCom pool; the villages of Lech and Zürs.",
    whenAndTips:
      "December–April is ski season (best snow in January–February; Christmas and February the busiest and dearest), July–September the summer hiking season; most facilities close in May–June and October–November. Book winter lodging months ahead. The direct train is the easiest way in.",
  },
};
