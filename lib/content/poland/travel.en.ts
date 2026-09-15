import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Poland ============
  "poland-overview": {
    // identity sources: 人口：GUS 数据，2025 年末 37,332,000 人（较上年少 15.7 万）——只找到波兰通讯社 PAP Biznes 对 GUS 公报的转述，未能直取 GUS 官网原页，**来源级别 2**。https://biznes.pap.pl/wiadomosci/gospodarka/liczba-ludnosci-polski-na-koniec-2025-spadla-o-157-tys-rdr-do-37332-mln-gus
    //   排名：Eurostat《Demography of Europe, 2025 edition》按 2024-01-01 常住人口口径，波兰约 3660 万列欧盟第五（德法意西之后），领先第六名罗马尼亚约 1700 万，排名稳固——**排名断言本身属实**，缺的只是年份与口径。https://ec.europa.eu/eurostat/web/interactive-publications/demography-2025（级别 1）
    //   核实日 2026-09-07
    identity:
      "Poland sits in Central Europe, covering about 313,000 km² with a population of about 37.33 million at the end of 2025 (Statistics Poland), the fifth-largest in the EU per Eurostat's 2024 figures; it borders the Baltic Sea to the north and the Carpathians to the south, its terrain gradually rising from north to south, and is an important economic and cultural hub of Eastern Europe.",
    layout:
      "Poland can be divided roughly into: Mazovia (Warsaw and its surroundings, the political centre), Lesser Poland/Małopolska (Kraków and Zakopane, the gateway to the Carpathians), Greater Poland and Silesia (Poznań and Wrocław, the western plains and industrial belt), Pomerania (Gdańsk, Szczecin and Toruń, along the Baltic coast), and Warmia-Masuria and Podlasie (Olsztyn and Białystok, the north-eastern lake district and forests).",
    gettingAround:
      "Warsaw Chopin Airport is the main international gateway; domestic flights are hubbed through Warsaw across about 30 routes nationwide, and the rail network covers the main cities. Driving is on the right. The climate is temperate continental; the southern mountains have cold, snowy winters, while the northern coast is comparatively mild. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more. The voltage is 230V with EU-style two-round-pin plugs.",
    culture:
      "The official language is Polish, with higher English proficiency among younger people and in tourist areas. Poles place strong value on Catholic tradition and family, and the pace of society is comparatively measured and reserved. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "Natural landforms: the Tatra Mountains and Zakopane, rafting the Dunajec River Gorge, the Masurian Lake District, the Słowiński Moving Dunes, Białowieża primeval forest (a World Heritage Site). Heritage and culture: Kraków's old town and Wawel Castle (a World Heritage Site), Warsaw's old town (a World Heritage Site), the Wieliczka Salt Mine (a World Heritage Site), the Auschwitz-Birkenau Memorial and Museum.",
    whenAndTips:
      "May–September is the most pleasant season and also peak time for exploring the Tatras and the Masurian Lake District; domestic flights cover the country well and are worth using for cross-regional trips, while north-south and east-west rail journeys typically take 3–6 hours.",
  },
  warsaw: {
    // identity sources: 波兰中央统计局（GUS）最新一期：基准日 **2025-12-31**，**2026-04-29 发布**，华沙 1,866,729。
    //   https://poland.gg/population/masovian/warszawa（3 级，转引 GUS Bank Danych Lokalnych，2026-09-08 核）。
    //   **GUS 是半年度**：基准日 6-30 与 12-31 各一期。
    //   **波兰全境人口普遍在缓慢下降，但华沙、克拉科夫、格但斯克这三座是少数还在增长的** ——
    //   写方向之前要分清是哪一类，别一概写成「下降」。
    identity:
      "Warsaw is Poland's capital and largest city, with a population of about 1.87 million (end of 2025, GUS), on the Vistula. Severely damaged during the Second World War, the old town was rebuilt to its original appearance and inscribed on the World Heritage List in 1980.",
    // howItWorks sources: Wikipedia (2026-09): Warsaw (city with powiat status; 18 dzielnice with elected councils; 517 km²; ~1.86 million 2024; metro ~3.1 million; Warsaw Act 2002; 2 metro lines; SKM); Administrative divisions of Poland
    howItWorks:
      "Warsaw is a city with county (powiat) status, governed by an elected mayor and council, with eighteen districts (dzielnice), each with its own elected council and board; the Warsaw Act of 2002 merged what had been separate communes into a single city. It covers about 517 km² with about 1.87 million people at the end of 2025, and its metropolitan area holds about 3.1 million. The Vistula divides it: the left bank holds Śródmieście, the political and commercial centre, with the Old Town rebuilt to its old form after being razed in 1944 and the Palace of Culture, while Wola is growing a new cluster of skyscrapers; the right bank is Praga, the old district that kept its pre-war streets. Two metro lines, trams and the SKM suburban railway serve the city. Addresses give street, number and postcode, and locals place things by district. Newcomers most often go wrong by taking the rebuilt Old Town for Warsaw's true face, when most of the city was built from nothing after the war.",
    layout:
      "The old town sits on high ground on the Vistula's west bank, its rebuilt medieval street layout and colourful terraced houses well preserved; the newer districts extend outward from the old town, while the Praga district on the east bank retains more original pre-war buildings.",
    gettingAround:
      "Chopin Airport is about 8 km in a straight line from the centre, with train and metro links; the city has an extensive metro and tram network. The climate is temperate continental, cold in winter and mild in summer.",
    culture:
      "The official language is Polish, with higher English proficiency among younger people. Warsaw was rebuilt to its pre-war appearance after being almost entirely levelled during the Second World War — the reconstruction itself is a symbol of Polish national resilience. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "The Old Town Market Square and Royal Castle (rebuilt to its original appearance after the war, a World Heritage Site); Łazienki Park (the Chopin Monument); the Warsaw Rising Museum; a walk along the Vistula riverside.",
    whenAndTips:
      "May–September is the most pleasant season; the old-town core is walkable, and it's worth setting aside half a day specifically for the Warsaw Rising Museum to understand the city's wartime history in depth.",
  },
  krakow: {
    // identity sources: 克拉科夫 2025 年 816,614（GUS，经 poland.gg 转引，3 级，2026-09-08 核）。克拉科夫仍在增长。
    identity:
      "Kraków is Poland's historic former capital and second-largest city, with a population of about 817,000 (2025, GUS); it served as the capital of the Kingdom of Poland from 1038 to 1596, and Wawel Castle and the old town were among the first sites inscribed on the World Heritage List in 1978.",
    // howItWorks sources: Wikipedia (2026-09): Kraków (18 dzielnice with councils; 327 km²; 816,614 2025; metro ~1.5 million; UNESCO 1978; Nowa Huta annexed 1951; trams, no metro); Administrative divisions of Poland
    howItWorks:
      "Kraków is the capital of Lesser Poland, a city with county status governed by an elected mayor and council, with eighteen districts (dzielnice), each with its own council; it covers about 327 km² with about 817,000 people in 2025, Poland's second city, and its metropolitan area holds about 1.5 million. The Old Town is ringed by the Planty park on the line of the medieval walls, with the Main Market Square at its centre and Wawel Castle on the hill at its southern end, inscribed among the first World Heritage sites in 1978; Kazimierz is the old Jewish quarter to the south, Podgórze lies across the Vistula, and Nowa Huta to the east is the socialist industrial new town planned from 1949 and annexed in 1951. Trams are the backbone of the city, and there is no metro. Addresses give street, number and postcode. The Wieliczka salt mine lies 15 km south-east in another town. Newcomers most often go wrong by taking the Old Town for the whole city, when most of Kraków's residents live in the post-war districts beyond it.",
    layout:
      "The old town is centred on the Main Market Square, with Wawel Castle standing on high ground beside the Vistula overlooking the whole city; the Kazimierz district preserves a historic Jewish quarter.",
    gettingAround:
      "Kraków Airport is about 12 km in a straight line from the centre, with a train link; the old town is walkable, and the city has an extensive tram network. The climate is temperate continental.",
    culture:
      "The official language is Polish, with higher English proficiency given the city's importance for tourism and its universities. Kraków escaped major destruction in the Second World War and so retains an intact medieval city layout, making it one of the culturally and historically richest cities in Poland. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "Wawel Castle and Cathedral (the coronation and burial site of Polish monarchs); the Main Market Square and St Mary's Basilica; the historic Kazimierz district. Day trips to the Wieliczka Salt Mine (a World Heritage Site) and the Auschwitz-Birkenau Memorial nearby.",
    whenAndTips:
      "May–September is the most pleasant season; Kraków is an ideal gateway for exploring Lesser Poland (Zakopane, Wieliczka) — plan at least two to three days for a deep dive into the old town and nearby sights.",
  },
  zakopane: {
    // 零改动留痕（2026-09-10）：Górale（高地人）文化写作客观的地方文化事实、无族群评价，✅ 红线通过。
    //   无民用机场，最近为克拉科夫机场——正文表述无误。
    // identity sources: 人口：原文对应 2017 年的 27,266，**落后九年**。GUS BDL 2025 年约 24,921，持续下降（PAP 报道市政府警示人口流失，2 级）。2026-09-10 核。
    identity:
      "Zakopane is a mountain town at the foot of the northern Tatras in southern Poland, with a population of about 24,900 in 2025 (GUS; still falling), known as Poland's \"winter capital\" and the traditional gateway to Tatra National Park.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Zakopane (Poland; town in Lesser Poland Voivodeship at the foot of the Tatra Mountains near the Slovak border, 27,266 residents in 2017, at 800–1,100 m; called the winter capital of Poland with more than 2.5 million visitors a year; the centre at the crossing of Krupówki and Kościuszko streets; the Zakopane Style of Stanisław Witkiewicz joining Carpathian vernacular with modern design, as in Villa Koliba of 1892–93 and the Tatra Museum of 1913–24; a centre of Góral highlander culture, costume, music and oscypek cheese; the Kasprowy Wierch cable car completed 1936, Gubałówka, and the Wielka Krokiew ski jump opened 1925; Nordic World Ski Championships in 1929, 1939 and 1962)
    howItWorks:
      "Zakopane is a town of Lesser Poland Voivodeship at the northern foot of the Tatra Mountains near the Slovak border, with about 24,900 residents in 2025 and still falling, at between 800 and 1,100 m; Polish local government has three tiers, voivodeship, county and commune, and this town lies in Tatra County, the commune running local affairs and the voivodeship regional planning. It calls itself Poland's winter capital and receives more than 2.5 million visitors a year, nearly all the country's skiing, mountaineering and summer hill-going converging on this one place, with the crossing of Krupówki and Kościuszko streets as its centre. This is the heart of Góral highlander culture, from which the costume, music, timber houses and smoked sheep's cheese called oscypek come; at the end of the nineteenth century the painter Stanisław Witkiewicz joined local carpentry with modern design into the Zakopane Style, of which Villa Koliba of 1892 and the Tatra Museum of 1913 to 1924 are the chief works, later taken as a Polish national architectural language. The Kasprowy Wierch cable car of 1936 and the Wielka Krokiew ski jump of 1925 are still in use, and the Nordic World Ski Championships were held here in 1929, 1939 and 1962. Newcomers most often go wrong by taking it for a ski resort alone, when it is also where a school of design began.",
    layout:
      "The town is built along a valley at the foot of the Tatras, with Krupówki Street the liveliest pedestrian shopping street, and several cable-car stations linking the town to surrounding peaks.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Kraków Airport (about 100 km); from Kraków the train or bus takes about 2 hours. The town itself is walkable; reaching the mountains requires a car or shuttle bus. The climate is temperate mountain, cold and snowy in winter, cool in summer.",
    culture:
      "The official language is Polish. The Gorals of Zakopane and the surrounding area preserve a distinctive highland folk costume, timber architecture and folk-music tradition known as Goral culture. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "The Kasprowy Wierch cable car (overlooking the Tatra peaks); Krupówki pedestrian street; the Goral timber-architecture quarter; hiking in Tatra National Park (Rysy, Morskie Oko lake).",
    whenAndTips:
      "December–March is peak ski season, June–September is peak hiking season; the cable car and popular trails get busy in peak season, so an early start is recommended.",
  },
  rzeszow: {
    // 零改动留痕（2026-09-10）：howItWorks 的「2026 年 1 月约 19.9 万」与 GUS 官方 199,436（2025-12-31，1 级）接近，属实。
    //   「F-16 发动机世界仅两家制造商之一」经核基本属实（F-16 只有普惠 F100 与通用电气 F110 两家供应商，普惠在热舒夫设厂产 F100 零部件）；「航空谷」产业集群属实。
    //   机场专名「热舒夫—亚西翁卡机场」为现行官方名。
    // identity sources: 人口：GUS 热舒夫统计局 2025-12-31 为 199,436（1 级）。原 identity 的 19.6 万缺年份、且与同条目 howItWorks 的 19.9 万打架。「波兰第 15 大城市」排名成立。2026-09-10 核。
    identity:
      "Rzeszów is a city in Lesser Poland in south-eastern Poland, with a population of about 199,000 at the end of 2025 (GUS), the gateway for exploring the Bieszczady Mountains and an important Polish aerospace-industry centre.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Rzeszów (Poland; capital of Subcarpathian Voivodeship and the largest city in south-eastern Poland, about 198,540 inhabitants in January 2026, the 15th largest Polish city, on both banks of the Wisłok in the Sandomierz Basin; unusually among Polish cities of its size the population is growing, with municipal boundaries extended between 2017 and 2021; town rights from Casimir III the Great in 1354; historically on the east-west trade route; Asseco Poland and G2A.COM, and aerospace manufacturing including one of the world's two makers of F-16 engines; the Renaissance town hall, Rzeszów Castle and preserved synagogues; the underground tourist route; Rzeszów-Jasionka Airport; the A4 motorway)
    howItWorks:
      "Rzeszów is the capital of Subcarpathian Voivodeship and the largest city in south-eastern Poland with about 198,500 inhabitants in January 2026, the fifteenth largest Polish city; Polish local government has three tiers, voivodeship, county and commune, and the capital holds both the regional government and the regional assembly. It lies on both banks of the Wisłok in the Sandomierz Basin, received town rights from Casimir III the Great in 1354 and stood historically on the trade route running east and west. Unlike Polish cities of comparable size, which are generally shrinking, Rzeszów is growing, and it repeatedly extended its boundaries over neighbouring communes between 2017 and 2021. Two industries carry it: software and information technology, with Asseco Poland and G2A headquartered here, and aerospace manufacturing, where the local Aviation Valley cluster and the Rzeszów University of Technology support each other and one of the world's only two makers of F-16 engines has a plant. The Renaissance town hall and the old castle stand in the centre, an underground route runs through the cellars beneath the old town, and surviving synagogue buildings remain in the old quarter. Jasionka airport lies north and the A4 motorway passes by. Newcomers most often go wrong by taking south-eastern Poland for farming country, when this is a concentration of the aerospace industry.",
    layout:
      "The old-town centre preserves a Renaissance-style market square, while the outskirts have developed in recent years into an important Polish aerospace-industry cluster, earning the nickname \"Aviation Valley.\"",
    gettingAround:
      "Rzeszów-Jasionka Airport is about 8 km in a straight line from the centre, reached by bus; from Warsaw the train takes about 3 hours. The old town is walkable. The climate is temperate continental.",
    culture:
      "The official language is Polish. Rzeszów is an important regional centre in south-eastern Poland, and its growing aerospace industry has drawn many young technical professionals. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "Rzeszów Market Square and the underground tourist route (16th-century cellar remains); the Podkarpackie Aviation Museum near the airport. Hiking the Bieszczady Mountains nearby.",
    whenAndTips:
      "May–September is the most pleasant season; Rzeszów is a convenient gateway for the połoniny meadows of the Bieszczady Mountains — plan at least one to two days for mountain hiking.",
  },
  wroclaw: {
    // 零改动留痕（2026-09-10）：机场专名「弗罗茨瓦夫机场」为现行官方名。前现代史与建筑史（大教堂岛、集市广场、
    //   1913 年百年厅、2006 年列入世界遗产）照留，只删了 1945 年前后人口更替那一句。
    // identity sources: 人口：GUS 2025-06-30 为 672,545。**⚠️ 不要用「89.3 万」或「超 110 万」**——那是弗罗茨瓦夫大学的「生活痕迹」实验性估算，不是 GUS 登记人口口径。「波兰第三大城市」成立（2021 年普查后超越罗兹，与其差距很小）。2026-09-10 核。
    identity:
      "Wrocław is the core city of Silesia in south-western Poland, with a population of about 672,000 (2025, GUS), on the Oder, known for its hundred-plus bridges and the small bronze \"Wrocław dwarf\" statues found throughout the city.",
    // howItWorks sources: ⚠️ 零争议红线：原 howItWorks 有一句陈述 1945 年前后人口与语言整体更替，2026-09-10 整句删除（比照 CLAUDE.md 对捷克「1938/1945 年人口迁移一律不写」的既有规定）。前现代史与建筑史照留。
    howItWorks:
      "Wrocław is the capital of Lower Silesia, a city with county status governed by an elected mayor and council, whose basic units are 48 osiedla, each with a residents' council — the district tier was abolished here in 1990. It covers about 293 km² with about 673,000 people in 2025, Poland's third city. The Oder and its arms cut the city into a dozen islands joined by more than a hundred bridges: Cathedral Island is where the city began, the Market Square is the medieval centre, and the Centennial Hall of 1913 in the eastern park district was inscribed as World Heritage in 2006. Trams are the backbone of the city, and some 130,000 students make it a university town. Addresses give street, number and postcode. Newcomers most often go wrong by taking Wrocław for an ordinary Polish city, when its street plan and buildings remember another history.",
    layout:
      "The old town is built on several islands formed by the Oder and its tributaries, with the Market Square at its core and Ostrów Tumski (Cathedral Island) preserving a cluster of medieval religious buildings.",
    gettingAround:
      "Wrocław Airport is about 11 km in a straight line from the centre, reached by bus; from Warsaw the train takes about 4.5 hours. The old town is walkable, with numerous bridges over the river. The climate is temperate continental.",
    culture:
      "The official language is Polish. Wrocław has historically been governed by several different states, and this blended history has given the city a distinctive architectural character. Hundreds of small bronze dwarf statues scattered through the streets have become an iconic city symbol. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "The Market Square and Old Town Hall; Ostrów Tumski (Cathedral Island); the Centennial Hall (a World Heritage Site, an early-20th-century reinforced-concrete landmark); dwarf-statue hunting through the streets; a boat trip on the Oder.",
    whenAndTips:
      "May–September is the most pleasant season; Wrocław's extensive waterways make a river boat trip a classic way to take in the cityscape.",
  },
  poznan: {
    // identity sources: 波兹南市《2025 年市情报告》人口部分（转引 GUS 2025 年末）：534,239。
    //   https://badam.poznan.pl/i_my-i-nasze-zycie/01_mieszkancy/demografia-2025/（2 级，市政府官方页，2026-09-08 核）。
    //   **方向是降的** —— 波兰全境人口普遍缓降，波兹南、托伦、奥尔什丁都在跌，
    //   而华沙、克拉科夫、格但斯克还在涨，不要一概而论。
    identity:
      "Poznań is the core city of the Greater Poland region in western Poland, with a population of about 534,000 (end of 2025, slightly down on the year before), one of Poland's oldest cities and historically one of the political centres of the early Polish state.",
    // howItWorks sources: Wikipedia (2026-09): Poznań (42 osiedla with councils since 2011, 5 historic dzielnice; 262 km²; ~540,000 2024; metro >1 million; Ostrów Tumski 966; PST 1997; International Fair); Administrative divisions of Poland
    howItWorks:
      "Poznań is the capital of Greater Poland, a city with county status governed by an elected mayor and council, with 42 osiedla, each with an elected council and a budget of its own, elected together since 2011; the names of the five old districts — Stare Miasto, Nowe Miasto, Grunwald, Jeżyce, Wilda — remain in everyday speech. It covers about 262 km² with about 534,000 people at the end of 2025, and its metropolitan area exceeds a million. The Warta runs through the city, and Cathedral Island between its arms is one of the birthplaces of the Polish state, where the baptism of 966 is believed to have taken place; the Old Market Square is the medieval centre, and the Poznań International Fair is the largest trade fair in Poland. The fast tram opened in 1997 is the backbone of the city. The Poznań dialect, St Martin's croissants and a practical business temper are the city's marks. Addresses give street, number and postcode. Newcomers most often go wrong by taking Poznań for a stop between Warsaw and Berlin, when it is the centre of one of Poland's most active economic regions.",
    layout:
      "The old town is centred on the Old Market Square, with the Renaissance-style town hall standing at its heart, and Cathedral Island preserving the remains of Poland's earliest church.",
    gettingAround:
      "Poznań-Ławica Airport is about 6.9 km in a straight line from the centre, reached by bus; from Warsaw the train takes about 2.5 hours. The old town is walkable. The climate is temperate continental.",
    culture:
      "The official language is Polish. Poznań is an important Polish trade-fair and commercial city, and locals are known for their practical, efficient work ethic. A mechanical goat display at the Old Market town hall performs daily at noon. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "The Old Market Square and Renaissance town hall (the noontime mechanical goat display); Cathedral Island (the remains of Poland's earliest church); the ruins of Poznań's fortress defences.",
    whenAndTips:
      "May–September is the most pleasant season; Poznań is an ideal gateway for exploring the Great Polish Lowland region, with the old-town core walkable to cover the main sights.",
  },
  gdansk: {
    // identity sources: 格但斯克 GUS 2025-06-30 为 489,160。
    //   https://www.zawszepomorze.pl/artykul/23429,rosnie-liczba-mieszkancow-gdanska-miasto-ma-ich-obecnie-prawie-pol-miliona
    //   （3 级，转引 GUS，2026-09-08 核）。另有报道称 2025-12-31 已达约 489,328，但那出自市长社交媒体转述，
    //   没找到 GUS 官方页面直接确认，**只采信中期数字**。格但斯克在增长。
    identity:
      "Gdańsk is the core port city of Poland's Baltic coast, with a population of about 490,000 (mid-2025, GUS), forming the \"Tri-City\" together with Sopot and Gdynia; it was historically an important Hanseatic League trading city.",
    // howItWorks sources: Wikipedia (2026-09): Gdańsk (city with powiat status; dzielnice with councils; 487,371 2023; Tricity ~1.1 million; Main Town rebuilt; Free City 1920–39; shipyard 1980; SKM); Administrative divisions of Poland
    howItWorks:
      "Gdańsk is the capital of Pomerania, a city with county status governed by an elected mayor and council, with more than thirty districts (dzielnice), each with its own council; it had about 489,000 people in mid-2025, while the 'Tricity' it forms with Gdynia and Sopot holds about 1.1 million, three cities each with its own government, strung together by the SKM suburban railway like a spine. The Main Town on the Motława is the historic centre rebuilt to its old form after 1945, with the Long Market as its point of reference; from 1920 to 1939 this was the Free City under the League of Nations, and the shipyard strike of 1980 gave birth to Solidarity. The port is Poland's largest, and amber is the city's traditional trade. Addresses give street, number and postcode. The Kashubian homeland lies in the hills and lakes to the west. Newcomers most often go wrong by confusing Gdańsk with the Tricity, when the beach is in Sopot and the modern port in Gdynia, each another city.",
    layout:
      "The old town is built along the Motława River, with Long Street and Long Market forming its historic axis; historic city gates such as the Green Gate and Golden Gate survive intact, and the port district preserves historic harbour cranes.",
    gettingAround:
      "Gdańsk Lech Wałęsa Airport is about 12 km in a straight line from the centre, with bus and train links; from Warsaw the train takes about 2.5 hours. The old town is walkable; reaching the Hel Peninsula requires a car or train. The climate is temperate maritime, comparatively mild along the coast.",
    culture:
      "The official language is Polish. Gdańsk was the birthplace of the 1980 Solidarity trade-union movement, an event widely regarded as one of the important beginnings of the political transformations across Eastern Europe. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "The Long Street and Long Market historic district; St Mary's Church (one of the largest brick churches in Europe); the European Solidarity Centre museum; the historic harbour cranes. Day trips to the Hel Peninsula or the Słowiński Moving Dunes nearby.",
    whenAndTips:
      "May–September is the most pleasant season and also peak time for Baltic seaside holidays; Gdańsk is a convenient gateway for exploring the Hel Peninsula and the Słowiński dunes.",
  },
  szczecin: {
    // identity sources: 人口：什切青统计局 2025-12-31 约 38.4 万（1 级）。「波兰第七大城市」按最新 GUS 排序成立。2026-09-10 核。
    identity:
      "Szczecin is a port city at the mouth of the Oder in north-western Poland, with a population of about 384,000 at the end of 2025 (GUS), right on the German border and an important Polish seaport and industrial city.",
    // howItWorks sources: ⚠️ 零争议红线：删去「二战后依波茨坦协定划归波兰」这半句（1945 年边界变动陈述）。1630 瑞典 / 1720 普鲁士属前现代史，照留。
    //   **核实方另建议把 culture 段「历史上曾长期属德国管辖，建筑风貌融合德国与波兰印记」也一并软化，未采纳** —— 那一句与克罗地亚条目写「哈布斯堡 / 威尼斯建筑遗产」是同一种处理，本身是建筑史事实、无评价成分；它之所以看着敏感，是因为**紧挨着上面那句波茨坦协定**。上面那句删掉之后，这一句就回到了与克罗地亚一致的尺度。**删一句和删一段是两件事**，2026-09-10 判定。
    howItWorks:
      "Szczecin is the capital of West Pomeranian Voivodeship, the seventh-largest Polish city and the largest in the north-west; Polish local government has three tiers, voivodeship, county and commune, and the capital holds both the regional government and the regional assembly. The city lies on the lower Oder south of the Szczecin Lagoon, separated from the open sea by an inland waterway, and its port together with Świnoujście nearer the coast forms one of Poland's largest port complexes, with Berlin about 130 km west. It is recorded from the eighth century, became an important Baltic trading town under the House of Griffin, passed to the Swedish Empire in 1630 and to Prussia in 1720. What shows its history best today is the street plan: the nineteenth-century rebuilding followed Haussmann's Paris, and radiating star-shaped junctions and broad avenues run through the whole city, whose share of parkland and water is among the highest of large Polish cities. The Ducal Castle of the Griffins and the Wały Chrobrego terraces above the river are the chief landmarks, and NATO's Multinational Corps Northeast has been headquartered here since 1999. Newcomers most often go wrong by assuming this port city stands on the sea, when it stands on a river some 65 km from open water.",
    layout:
      "The old town is built along a tributary of the Oder, with Ducal Castle of Pomerania standing on high ground; the port district extends along the Oder, and the city holds one of the largest urban green-space systems in Poland.",
    gettingAround:
      "Szczecin-Goleniów Airport is about 45 km by road from the centre, reached by bus; from Warsaw the train takes about 6.5 hours, or about 1.5 hours from Berlin. The old town is walkable. The climate is temperate maritime.",
    culture:
      "The official language is Polish; given its proximity to the German border, German is also usable in some commercial settings. Szczecin was historically under German administration for a long period, and its architecture blends German and Polish cultural influences. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "Ducal Castle of Pomerania; the Hakenterrasse (Chrobry Embankment, overlooking the Oder port); the old town hall. Day trips to Wolin National Park nearby to see the sea cliffs and bison reserve.",
    whenAndTips:
      "May–September is the most pleasant season; sitting right on the Poland-Germany border, Szczecin is a convenient starting point for a cross-border day trip and an ideal gateway to Wolin Island.",
  },
  torun: {
    // howItWorks sources（2026-09-15 核实，update）: 同上 · GUS Tabl.20 · Toruń=192,784, 2026-01-01口径 · 1级 · 2026-09-15 核；下一期约 2027-04
    // identity sources（2026-09-15 核实，update）: https://stat.gov.pl/download/gfx/portalinformacyjny/pl/defaultaktualnosci/5468/7/23/1/powierzchnia_i_ludnosc_w_przekroju_terytorialnym_2026_2.xlsx · GUS《Powierzchnia i ludność w przekroju terytorialnym w 2026 r.》(发布2026-04-29), Tabl.20 miasta · 直接下载xlsx解析: Toruń=192,784 · 1级 · 2026-09-15 核；下一期约 2027-04
    // identity sources: 托伦 GUS 常住人口：2021-12-31 = 197,112 → 2022 = 195,690 → **2023-12-31 = 194,771**
    //   （波兰语维基逐年列出 GUS 序列，3 级，2026-09-08 核）https://pl.wikipedia.org/wiki/Ludność_Torunia 。
    //   原注释里的 196,935 是英文维基旧版引的 2021 年 12 月数字。
    //   **两套口径不能互换**：市政府自己的「已登记居民」2024 年末 170,327、2025 年中 167,450，
    //   与 GUS 的常住人口长期差两万多。2024/2025 的 GUS 数未查到，下一轮补。
    identity:
      "Toruń is a historic town on the Vistula in north-central Poland, with a population of about 193,000 (January 2026, GUS, still declining), the birthplace of astronomer Nicolaus Copernicus; its intact medieval old town was inscribed on the World Heritage List in 1997.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Toruń (Poland; city in Kuyavian-Pomeranian Voivodeship, one of two regional capitals alongside Bydgoszcz, about 196,935 residents, on the Vistula; founded by the Teutonic Knights in 1233, joined the Hanseatic League in 1264 and remained a significant trading centre, a royal city from 1506 with voting rights in Polish royal elections; the city avoided damage in both world wars and retained its Gothic to Baroque architecture, the Medieval Town of Toruń inscribed by UNESCO in 1997 for its intact layout and brick Gothic buildings; Nicolaus Copernicus born here in 1473, his birthplace now a museum; gingerbread made here for nearly a millennium; the Camerimage film festival)
    howItWorks:
      "Toruń is a city of Kuyavian-Pomeranian Voivodeship with about 193,000 residents as of January 2026, on the Vistula; this region has an arrangement found nowhere else in Poland — its capital is split in two, the regional assembly and the elected marshal sitting in Toruń and the centrally appointed voivode in Bydgoszcz, so the two cities hold half each, unique among the sixteen voivodeships. The Teutonic Knights founded the town in 1233, it joined the Hanseatic League in 1264 and long remained a major trading town on the Vistula, and from 1506 it was a royal city with a voice in the election of kings. Its most unusual quality is that it is whole: neither world war touched the centre, its buildings stand in an unbroken run from Gothic to Baroque, and in 1997 the Medieval Town of Toruń was inscribed as World Heritage for its intact layout and brick Gothic. Nicolaus Copernicus was born here in 1473 and his birthplace is a museum; gingerbread has been made in the town for close to a thousand years as its old trade. The university carries Copernicus's name. Newcomers most often go wrong by assuming a region has one capital, when this one divides its offices between two cities.",
    layout:
      "The old town is built along the Vistula's northern bank, densely packed with Gothic brick buildings, with the Copernicus House museum and the old town hall as its core landmarks.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Bydgoszcz Airport (about 50 km); from Warsaw the train takes about 2.5 hours. The old town is walkable. The climate is temperate continental.",
    culture:
      "The official language is Polish. Toruń is famous for its gingerbread-making tradition, and the local Gingerbread Museum showcases this centuries-old craft. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "The Copernicus House museum; the old town hall and market square; the ruins of Toruń Castle; a hands-on gingerbread-making experience at the Gingerbread Museum.",
    whenAndTips:
      "May–September is the most pleasant season; Toruń's old town is well preserved and compact, suited to a half- to full-day deep-dive stroll.",
  },
  olsztyn: {
    // howItWorks sources（2026-09-15 核实，update）: 同上 · GUS Tabl.20 · Olsztyn=165,393 · 1级 · 2026-09-15 核；下一期约 2027-04
    // identity sources（2026-09-15 核实，update）: 同上 · GUS Tabl.20 · Olsztyn(省会市本身，非琴斯托霍瓦县同名村)=165,393, 2026-01-01口径 · 1级 · 2026-09-15 核；下一期约 2027-04
    // identity sources: 奥尔什丁 GUS：2024-12-31 = 166,392，2025-06-30 = 165,855（又降 537 人）；2021 年为 169,793。
    //   https://tko.pl/316169,2025,10,22,co-sie-dzieje-z-olsztynem-gus-podal-zadziwiajace-dane-o-liczbie-mieszkancow
    //   （3 级，转引 GUS，2026-09-08 核）。奥尔什丁在下降。
    identity:
      "Olsztyn is the core city of the Warmia-Masuria region in north-eastern Poland, with a population of about 165,000 (January 2026, GUS, declining slightly year by year), the traditional gateway to the Masurian Lake District.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Olsztyn (Poland; capital of Warmian-Masurian Voivodeship, about 169,793 residents in 2021, on the Łyna; a watchtower from 1334 and municipal rights in 1353 granted by the cathedral chapter of the Bishopric of Warmia; Nicolaus Copernicus lived in the town castle as administrator from 1516 to 1521 and directed its defence; 15 lakes within the administrative boundary covering about 725 ha and forest over 21 per cent of the city area, part of the Land of a Thousand Lakes; the Gothic co-cathedral of St James; the University of Warmia and Mazury founded 1999; the Michelin plant the largest employer)
    howItWorks:
      "Olsztyn is the capital of Warmian-Masurian Voivodeship with about 165,400 residents as of January 2026, on the Łyna; Polish local government has three tiers, voivodeship, county and commune, and the capital holds both the regional government and the regional assembly. It began as a watchtower in 1334 and received municipal rights in 1353 from the cathedral chapter of the Bishopric of Warmia — this country was long governed in the Middle Ages by the bishopric rather than by secular lords, which is why castle and church stand at the town's core. Copernicus lived in that castle as administrator of Warmia from 1516 to 1521 and directed the town's defence in 1520 and 1521. Its plainest feature is water and woodland: fifteen lakes lie inside the city boundary covering about 725 hectares and forest takes more than a fifth of the municipal area, so the city is taken as the gateway to the Masurian lakes, the region's signature asset. The Gothic co-cathedral of St James stands in the old town, the University of Warmia and Mazury founded in 1999 is the largest school, and the Michelin tyre plant is the largest employer. Newcomers most often go wrong by picturing the lake district as somewhere out of town, when the city itself holds a dozen and more.",
    layout:
      "The old town is built on high ground beside the Łyna River, with a Gothic brick castle at its centre — one of the castles Copernicus himself once administered.",
    gettingAround:
      "Olsztyn-Mazury Airport is about 58 km by road from the centre, reached by bus; from Warsaw the train takes about 2.5 hours. The old town is walkable; exploring the lake district requires a car or a tour. The climate is temperate continental.",
    culture:
      "The official language is Polish. Olsztyn and the surrounding region have historically blended multiple cultural traditions, with Prussian, Polish and Lithuanian influences interwoven. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "Olsztyn Castle (once administered by Copernicus); the old town market square. Boat trips exploring the Masurian Lake District nearby, or sailing on Lake Śniardwy.",
    whenAndTips:
      "May–September is the most pleasant season and also peak time for sailing in the Masurian Lake District; Olsztyn is an ideal base for exploring the lakes — plan at least a day for a boat trip or sailing experience.",
  },
  bialystok: {
    // 零改动留痕（2026-09-10）：✅ 零争议红线通过——「族群与信仰混杂」「东正教堂」「犹太教堂遗址」均作客观历史／建筑事实呈现，
    //   未触及二战、族群冲突或现代政治；柴门霍夫创制世界语的动机写作「混杂的语言环境」，无冲突性措辞。
    //   机场：比亚韦斯托克—克雷夫拉尼（EPBK）是通用航空机场、**无定期商业客运**，在建的萨尼基机场尚未投运——正文「客运航班有限」准确、留有余地。
    // identity sources: 人口：GUS 2025-12-31 约 28.92 万。原 identity 的 29.7 万偏高且与同条目 howItWorks 的 28.9 万打架（C6i）——**howItWorks 是对的一侧**。2026-09-10 核。
    identity:
      "Białystok is the core city of the Podlasie region in north-eastern Poland, with a population of about 289,000 at the end of 2025 (GUS), the gateway for exploring Białowieża primeval forest and the Biebrza Marshes.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Białystok (Poland; capital of Podlaskie Voivodeship and the largest city in north-eastern Poland, about 289,000 residents, tenth nationally, with the second-highest population density among Polish cities; about 200 km north-east of Warsaw on the Białystok Uplands along the Biała; recorded from about 1437 when a member of the Raczków family received a wilderness area along the river; flourished in the 18th century under the Branicki family, the Branicki Palace compared to Versailles; a major textile centre in the 19th century, called the Manchester of the North; L. L. Zamenhof, creator of Esperanto, born here in 1859; a historically multi-ethnic and multi-faith city with Orthodox churches; the fifth most forested Polish municipality, about 1,846 ha or 18 per cent)
    howItWorks:
      "Białystok is the capital of Podlaskie Voivodeship and the largest city in north-eastern Poland with about 289,000 residents at the end of 2025, tenth in the country and second among large Polish cities in population density; Polish local government has three tiers, voivodeship, county and commune, and the capital holds both the regional government and the regional assembly. Warsaw lies about 200 km south-west. The town is recorded from about 1437 and took shape in the eighteenth century under the Branicki family, who built it as a court city; the Baroque Branicki Palace and its French gardens are still the core of the centre, which is why it is called the Versailles of Podlachia. In the nineteenth century it became a textile centre, known for a time as the Manchester of the North. This country has long been mixed in people and faith, Catholic and Orthodox churches standing side by side to this day and a substantial share of Poland's Orthodox believers living in this region; L. L. Zamenhof, who devised Esperanto, was born here in 1859 and said that this mixture of languages prompted his idea. Woodland covers about 1,846 hectares, eighteen per cent of the municipality, and the Białowieża Forest lies south-east. Newcomers most often go wrong by assuming Poland is only Catholic, when this city has long held several faiths together.",
    layout:
      "The old town is centred on the Branicki Palace and its Baroque gardens, known as the \"Versailles of Podlasie\"; a mix of religious buildings (Catholic, Orthodox, and the remains of a synagogue) bears witness to the region's historically diverse cultural makeup.",
    gettingAround:
      "The local airport has limited passenger service; the nearest airport with stable scheduled flights is Warsaw Chopin (about 180 km); from Warsaw the train takes about 2 hours. The old town is walkable; reaching Białowieża Forest requires a car or bus. The climate is temperate continental.",
    culture:
      "The official language is Polish. Białystok was the birthplace of L. L. Zamenhof, the creator of the international language Esperanto, and a memorial exhibition to him is on display in the city. Restaurant bills usually do not include a service charge; a tip of about 10%, or rounding up, is customary — if a service charge is itemised on the bill there is no need to add more.",
    seeAndDo:
      "The Branicki Palace and its Baroque gardens; the Zamenhof memorial centre. Day trips to Białowieża National Park (a World Heritage Site, home to the European bison) or birdwatching at Biebrza National Park nearby.",
    whenAndTips:
      "May–September is the most pleasant season and also the best time for birdwatching and exploring the primeval forest; Białowieża Forest is about a 1.5-hour drive from the city — plan at least a full day specifically to visit.",
  },

  lodz: {
    // 全七段 sources: 同中文侧（GUS area and population yearbook 2026, Table 20, tier 1; Sejm ISAP on direct mayoral elections, tier 1; UML Łódź on the 1821 settlement and 36 osiedla, tier 1; WUOZ Łódź on the 2015 Historic Monument decree, tier 1; Cities of Film / culture.pl, tier 2; manufaktura.com and lodz.travel, tier 1; timetable aggregator, tier 3; UOKiK, tier 1; distances computed）。 核实 2026-09-16 当批（content-verifier 独立检索，本条全部 ok）。
    identity:
      "Łódź is the capital of Łódź Voivodeship in central Poland, with a population of about 640,000 at the end of 2025 (GUS), fourth among Polish cities by population in the same statistical table. It is a textile-industry city built to a plan in the 19th century: \"Łódź – multicultural landscape of an industrial city\" was declared a Monument of History in 2015, and in 2017 Łódź joined the UNESCO Creative Cities Network as a City of Film.",
    howItWorks:
      "Łódź's mayor is directly elected by residents, serving five-year terms alongside the city council; Łódź is a city with county rights and the capital of Łódź Voivodeship. The city's five traditional districts stopped being administrative units in 1993, though their names are still in everyday use, and since 2000 the city has been divided into 36 neighbourhood units, each with its own council, as auxiliary bodies. The city's backbone is a single north–south street: in 1821 Łódź was designated an industrial settlement and a new town was laid out along Piotrkowska Street, its octagonal New Market becoming today's Plac Wolności; industrialists then built their factories, workers' housing and their own palaces side by side, and the complexes of Poznański, Scheibler and others remain the city's landmarks. After the textile industry declined in the late 20th century, the mills were turned into shopping centres, museums and cultural venues — Poznański's cotton mill became Manufaktura in 2006, and the city's first power station became EC1. The mistake newcomers most often make is to look for a medieval old town square, which Łódź does not have; its main street is an avenue about 4.2 km long, and its landmarks are factories.",
    layout:
      "Plac Wolności is at the northern end of Piotrkowska Street, which runs south from here; Poznański Palace is a short way north-west of the square, and Manufaktura lies less than 1 km west of it. Łódź Fabryczna station and EC1 are south-east of the square, about 1.3–1.4 km away in a straight line, and Księży Młyn is further south-east, about 3 km from the square in a straight line.",
    gettingAround:
      "Łódź Władysław Reymont Airport is about 7 km from the centre in a straight line and has scheduled flights; more international flights are available via Warsaw. Trains from Warsaw to Łódź Fabryczna take between about an hour and an hour and a half. Trams and buses are the main way around the city, and Piotrkowska Street is best on foot. The climate is temperate continental, with cold winters.",
    culture:
      "The official language is Polish. Łódź has close ties to film, and the pavement of Piotrkowska Street has a Walk of Fame for film. Restaurant bills usually do not include a service charge, and it is customary to round up or tip around 10%; if a restaurant does add a service charge, it must tell you before you order.",
    seeAndDo:
      "Piotrkowska Street and the OFF Piotrkowska courtyard; Manufaktura, including its factory museum and the ms² modern art gallery; Poznański Palace (Museum of the City of Łódź); the Księży Młyn industrial housing complex; and the science and technology centre and planetarium at EC1.",
    whenAndTips:
      "May–September is the time for outdoor tables on Piotrkowska Street; winters are cold. The industrial heritage is spread across the city, and Księży Młyn is about 3 km from Plac Wolności in a straight line, so allow time for getting between sites.",
  },

  lublin: {
    // 全七段 sources: 同中文侧（GUS area and population yearbook 2026, Table 20, tier 1; Sejm ISAP, tier 1; lublin.eu / BIP on the council and 27 districts, tier 1; National Heritage Board zabytek.pl, tier 1; PKP Intercity 2025/2026 timetable release, tier 1; UOKiK, tier 1; distances computed）。 核实 2026-09-16 当批（content-verifier 独立检索，正文全部 ok；注释里主教座堂年份改为两说）。
    identity:
      "Lublin is the capital of Lublin Voivodeship in eastern Poland, with a population of about 327,000 at the end of 2025 (GUS). It received its town charter in 1317, and in 1569 Poland and Lithuania signed the Union of Lublin at its castle; Lublin's historic architectural and urban complex was declared a Monument of History in 2007.",
    howItWorks:
      "Lublin's mayor is directly elected by residents, serving five-year terms alongside the 31-member city council; the city's 27 districts are auxiliary units, each set up over the years on residents' initiative and each with its own district council, not separate governments. The old town and the castle stand on two neighbouring hills: in the middle of the old town's market square is the former Crown Tribunal, which from 1578 housed the highest court of appeal for the nobility of the kingdom; the castle is on the hill north-east of the old town, its present look the result of a neo-Gothic rebuilding in 1823–1826, and inside, the Holy Trinity Chapel preserves Byzantine–Ruthenian-style frescoes completed in 1418. From the 16th century the city spread beyond its walls along Krakowskie Przedmieście, west of the Kraków Gate, which is still the main shopping street. The mistake newcomers most often make is to treat the old town as the whole city centre, when the main street is outside the Kraków Gate and the railway station is nearly 2 km south of the old town; many also assume each of the 27 districts has its own government.",
    layout:
      "The market square and the former Crown Tribunal are the centre of the old town; the Kraków Gate is west of the square, with Krakowskie Przedmieście beyond it; the cathedral is a short way south of the square; and the castle is on a separate hill less than 400 m north-east of the square. Lublin Główny station is about 1.8 km south of the old town in a straight line, and the open-air village museum is on the west side of the city, about 4.5 km from the old town in a straight line.",
    gettingAround:
      "Lublin Airport is about 10 km from the old town in a straight line and has scheduled flights. Between Warsaw and Lublin the PKP Intercity 2025/2026 timetable has 16 pairs of trains a day, taking about two hours (as of 2026). The old town and castle are walkable, and buses serve the station and the open-air museum. The climate is temperate continental, with cold winters.",
    culture:
      "The official language is Polish. Lublin has several universities. Restaurant bills usually do not include a service charge, and it is customary to round up or tip around 10%; if a restaurant does add a service charge, it must tell you before you order.",
    seeAndDo:
      "The market square and the Kraków Gate; Lublin Castle and the frescoes of the Holy Trinity Chapel (part of the National Museum in Lublin); the cathedral; the underground cellar route beneath the old town; and the Museum of the Lublin Village.",
    whenAndTips:
      "May–September is pleasant, and winters are cold. The old town and castle sit on two hills with slopes and steps between them, so wear comfortable shoes.",
  },
};
