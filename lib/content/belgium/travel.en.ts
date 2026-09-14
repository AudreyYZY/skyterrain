import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Belgium ============
  "belgium-overview": {
    // identity sources: Statbel《België telde 11.825.551 inwoners op 1 januari 2025》：11,825,551 人。https://statbel.fgov.be/nl/nieuws/belgie-telde-11825551-inwoners-op-1-januari-2025
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Belgium sits in Western Europe, covering about 30,500 km² with a population of about 11.83 million as of January 2025 (Statbel). It hosts the headquarters of both the EU and NATO. The terrain rises gradually from the north-western coastal plain to the south-eastern Ardennes uplands; the country has three official languages — Dutch (Flemish), French and German — and three regions: Flanders, Wallonia and the Brussels-Capital Region.",
    layout:
      "Broadly divided into: Brussels-Capital Region (the capital, home to the EU institutions), Antwerp Province (Antwerp, a port and diamond-trading centre), West Flanders (Bruges and Ostend, historic towns and seaside resorts), East Flanders (Ghent), Flemish Brabant (Leuven, a university town), Liège Province (Liège and Spa), Namur Province (Namur and Dinant, in the Meuse Valley), and Hainaut (Mons).",
    gettingAround:
      "Belgium is small and its cities are generally within one or two hundred kilometres of each other — there are no scheduled domestic flights at all. Its five international airports (Brussels, Brussels South Charleroi, Antwerp, Ostend-Bruges and Liège) all handle international routes only; getting around within the country relies entirely on the dense rail network (SNCB/NMBS) and roads, and the train is usually more convenient than flying would be anyway. Brussels and Antwerp also have metro and tram networks. Driving is on the right. The climate is temperate maritime — mild and humid year-round, with summers not too hot, winters not too cold, and fairly even rainfall, so carry rain gear. Power is 230V, European two-round-pin plug.",
    culture:
      "The three official languages are Dutch (Flemish), French and German — Flanders in the north speaks Dutch, Wallonia in the south speaks French, and English is widely spoken in tourist areas too. Belgian beer culture is world-renowned, with abbey beers and fruit beers in great variety — Belgian beer culture was inscribed on the UNESCO Intangible Cultural Heritage list in 2016; chocolate and fries are also important culinary symbols. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "Historic towns: the canals and belfry of Bruges, Ghent's medieval old town, Brussels's Grand Place. Natural landforms: the forests and valleys of the Ardennes (the Semois and Ourthe valleys), the Caves of Han-sur-Lesse, the Hautes Fagnes peat plateau. Coast and port: the Belgian coast dunes, the Port of Antwerp.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather; July–August is warmer but still mild, peak season for the seaside and outdoor activities; December's Christmas markets are a winter highlight. Belgium is a Schengen-area member; citizens of most countries follow Schengen rules for short visits — check the Belgian Ministry of Foreign Affairs and current Schengen regulations for specifics.",
  },

  brussels: {
    // identity sources: 比利时国家登记处（Rijksregister / IBZ，与 Statbel 同源）2026-01-01 基准：
    //   **布鲁塞尔首都大区 1,251,715 人；布鲁塞尔市（Ville de Bruxelles，大区内一个市镇）198,005 人**。
    //   https://www.ibz.rrn.fgov.be/sites/default/files/documents/fr/population/statistiques/population-bevolking-20260101.pdf
    //   （1 级，2026-09-08 核）。**这两档差六倍以上，正文必须写明是哪一级。**
    //   发布节奏：市镇人口以每年 1 月 1 日为基准，登记处初版约在当年 1 月末公布，
    //   Statbel 正式版约 3 月。
    identity:
      "Brussels is Belgium's capital; the Brussels-Capital Region had a population of about 1.25 million in 2026. It is also home to the headquarters of the European Union and NATO — genuinely the \"capital of Europe.\"",
    // howItWorks sources: Wikipedia (2026-09): Brussels (Brussels-Capital Region 162 km², ~1.25 million 2024, 19 municipalities, formed 1989; City of Brussels ~190,000; bilingual FR/NL; STIB 4 metro lines; postcodes 1000–1210; Grand-Place UNESCO 1998)
    howItWorks:
      "The Brussels people speak of is, administratively, the Brussels-Capital Region, one of Belgium's three regions: about 162 km² with about 1.25 million people in 2026, created in 1989 with a government and parliament of its own, and assembled from nineteen municipalities, each with an elected mayor and council responsible for local policing, roads and the civil register. The nominal 'City of Brussels' is only one of them, with about 198,000 people, taking in the pentagon of the old centre, Laeken to the north and the north-eastern quarter of the EU institutions; Ixelles, Schaerbeek, Anderlecht and Uccle are municipalities in their own right, and locals write the municipality, not 'Brussels', in their address. The region is officially bilingual, French and Dutch side by side, French in practice the majority language, and it is entirely surrounded by the Dutch-speaking province of Flemish Brabant. The EU quarter around Schuman makes it at once the capital of Belgium, of Flanders and of the European Union. Addresses give street, number and postcode, with 1000 to 1210 matching the municipalities. STIB's four metro lines and trams serve the region, and the R0 ring is its boundary. The Grand-Place was inscribed as World Heritage in 1998. Newcomers most often go wrong by taking the 'City of Brussels' for the whole city, when it is one municipality among nineteen.",
    layout:
      "The Grand Place is the heart of the old town, ringed by the Gothic town hall and Baroque guild houses, inscribed as a UNESCO World Heritage site in 1998; the European Quarter lies east of the city centre, home to the European Commission and other EU institutions; St. Michael's Cathedral sits on high ground north of the old town.",
    gettingAround:
      "The airport lies about 12 km north-east of the centre, linked by direct express rail. Brussels's metro, tram and bus network covers the whole city, and the old town is walkable. The climate is temperate maritime, mild and humid year-round, with summers (June–August) not too hot and occasional winter snow. Power is 230V, European two-round-pin plug.",
    culture:
      "The official languages are French and Dutch, used bilingually; English is widely spoken in tourist areas. Belgium's beer and chocolate culture is especially concentrated in Brussels, with numerous beer bars and chocolate shops across the city. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "The Grand Place and town hall; the Manneken Pis statue; the European Quarter and European Parliament; the Belgian Comic Strip Center (birthplace of Belgian comics including Tintin); day trips to Bruges or Ghent.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather; December's Christmas markets are atmospheric. Brussels is the main transport hub for exploring the whole of Belgium — the train is usually more convenient than driving.",
  },

  antwerp: {
    // identity sources: 安特卫普市镇 564,561 人（比利时国家登记处 IBZ，2026-01-01 基准，1 级，2026-09-08 核）——
    //   全比利时人口最多的市镇。
    //   「比利时第二大城市」按「布鲁塞尔首都大区整体第一、安特卫普第二」这一常见排法成立，
    //   与本批根特「第三」、鲁汶「第八」用的是同一口径。
    identity:
      "Antwerp is Belgium's second-largest city, with a municipal population of about 565,000 in 2026, set on the Scheldt River — Europe's second-largest port city and a major world centre of diamond trading.",
    // howItWorks sources: Wikipedia (2026-09): Antwerp (~208 km²; ~565,000 2024; 10 districts with elected councils since 2001, Borsbeek added 2025; Port of Antwerp-Bruges second in Europe; De Lijn premetro; postcodes 2000–2660)
    howItWorks:
      "Antwerp is the capital of Antwerp province in Flanders and the most populous municipality in Belgium, about 208 km² with about 565,000 people in 2026, with Dutch as the official language; it is divided into ten districts, each with an elected district council since 2001, Borsbeek becoming the tenth on joining in 2025. The Scheldt flows along the west of the city, with the Left Bank new district joined to the old town by tunnels; the Grote Markt and the cathedral are the heart of the old town, Het Eilandje is the old docks turned new quarter, Het Zuid is the quarter of museums and galleries, and the diamond district lies beside Central Station. The Port of Antwerp-Bruges, merged in 2022, is Europe's second-largest, and the port area runs tens of kilometres north of the old town. De Lijn's trams run underground through the centre as the 'premetro', and the R1 ring encloses the city. The Jewish community and the fashion academy are two of the city's marks. Addresses give street, number and postcode, with 2000 to 2660 matching the districts. Newcomers most often go wrong by picturing Antwerp as a port-industrial city, when the port lies tens of kilometres away and the city itself is old town, fashion and diamonds.",
    layout:
      "The Grote Markt and town hall form the old-town centre; the Gothic spire of Our Lady's Cathedral marks the city skyline; the Diamond District sits near Central Station, home to numerous diamond-cutting and trading businesses.",
    gettingAround:
      "The airport lies about 5 km south-east of the centre. The city's tram and bus network is well developed, and the old town is walkable. The climate is temperate maritime, mild and humid year-round.",
    culture:
      "The official language is Dutch (Flemish). Antwerp is an important centre of Belgian fashion design and the birthplace of the painter Rubens. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "Our Lady's Cathedral (housing works by Rubens); the Grote Markt; the Diamond District; a cruise on the Scheldt through the port; Central Station (a neo-Baroque building often called the \"railway cathedral\").",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather. Antwerp is an important gateway for exploring the Scheldt and the Flanders region.",
  },

  bruges: {
    // identity sources: 人口：比利时国家登记处 2026-01-01 全国市镇表，Brugge = 120,393（1 级）。口径是市镇（gemeente）常住人口。比利时每年年初公布当年 1 月 1 日数，通常一季度内。identity 与 howItWorks 两段已统一到同一基准日。
    identity:
      "Bruges is the capital of West Flanders, with a population of about 120,000 as of 1 January 2026 (Statbel), famous for its well-preserved medieval canals and old-town architecture; its old town was inscribed as a UNESCO World Heritage site in 2000.",
    // howItWorks sources: 人口：与 identity 段同一来源与基准日（IBZ 2026-01-01 = 120,393）。原文停在 2023 年、且与 identity 段不同步。
    howItWorks:
      "Bruges is the capital of West Flanders in Flanders, a municipality of about 141 km² with about 120,000 people as of 1 January 2026 (Statbel), with Dutch as the official language and West Flemish as the local dialect. The Bruges people picture is the oval medieval centre inside the ring canal — about 430 hectares, inscribed as World Heritage in 2000, with the Markt, the Belfry and the Burg inside — but the municipality is made up of eight sub-municipalities, Sint-Andries, Sint-Michiels and Assebroek are the suburbs where locals live, and the port of Zeebrugge 15 km north lies within the city boundary, merged with the port of Antwerp in 2022. Some 8 million visitors a year pour into a city of little more than a hundred thousand, and the residents of the old centre are a small fraction of them. Cars are restricted in the centre, De Lijn buses join the station and the districts, and Ghent and Ostend are within half an hour. Addresses give street, number and postcode. Newcomers most often go wrong by taking the old centre for the whole of Bruges, when most residents live in the sub-municipalities beyond the canal and the port lies on the coast.",
    layout:
      "The old town is ringed by a circular canal, with the Markt and belfry at its historic centre; the Lake of Love park and the Beguinage are quiet spots within the old town, and the medieval buildings along the canals are exceptionally well preserved.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Ostend-Bruges International Airport (about 25 km). The old town is best explored on foot or by canal boat, and bicycles are also available. The climate is temperate maritime, mild and humid year-round.",
    culture:
      "The official language is Dutch (Flemish). Bruges is a traditional centre of lace-making and chocolate craft. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "The Markt and belfry; a canal boat tour; the Basilica of the Holy Blood; the Beguinage; the Lake of Love park.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather with comparatively fewer crowds; July–August is peak season, and the old town gets crowded. Bruges's old town is compact — best explored slowly on foot.",
  },

  ghent: {
    identity:
      "Ghent is the capital of East Flanders, with a municipal population of about 274,000 in 2026, preserving an extensive medieval old town; historically it was an important European textile centre.",
    // howItWorks sources: 根特市镇 273,665 人（比利时国家登记处 IBZ，2026-01-01，1 级，2026-09-08 核）。
    //   **「都会区约 56 万」已删**：那个数出自比利时旧的 grootstedelijk gebied（大都市区）口径，
    //   **末次数据 2008 年（594,582 人）**，此后近二十年未再发布 —— 停更的口径不能当现行数字用。
    //   **中文原写「佛兰德大区第三大城市」是错的**：佛兰德大区里根特第二（安特卫普 > 根特 > 布鲁日），
    //   英文那句「比利时第三」才对，已把中文对齐过来。
    //   如仓库里其它比利时城市条目也引用了 grootstedelijk gebied 的具体数字，需要一并排查。
    howItWorks:
      "Ghent is the capital of East Flanders province and the third city of Belgium, governed by an elected mayor and council, the municipality covering about 158 km² including thirteen absorbed suburbs, with about 274,000 people in 2026; the Flemish Region runs education and transport, and policing is shared between city and federal levels. The old town lies where the Scheldt meets the Leie: by about 1300 it held some fifty thousand people and was among the richest cities of northern Europe, and the centuries of decline that followed left the medieval city standing as it was — the Gravensteen, the Ghent Altarpiece in St Bavo's Cathedral and the guild houses of the Graslei all stand in that quarter. Cars are largely banned from the centre, the city has more than four hundred kilometres of cycle paths, the students of Ghent University are a large share of its people, the Gentse Feesten in July draw more than a million, and the port lies north of town. Newcomers most often go wrong by taking Ghent for a museum city like Bruges, when it is a working city with a university and a port.",
    layout:
      "The three towers of St. Bavo's Cathedral, the belfry and St. Nicholas' Church stand together, marking the old-town skyline; Gravensteen Castle is a well-preserved medieval fortress; the old town is laid out around the confluence of the Leie and Scheldt rivers.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Brussels Airport (about 55 km). The old town is walkable, with a tram network across the city. The climate is temperate maritime, mild and humid year-round.",
    culture:
      "The official language is Dutch (Flemish). Ghent is an important university city with a lively youth culture. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "St. Bavo's Cathedral (housing the Van Eyck brothers' famous Ghent Altarpiece); Gravensteen Castle; the old town's canal views; day trips to Bruges or Antwerp.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather. Ghent draws comparatively fewer visitors than Bruges, offering another way to experience Belgium's medieval old towns.",
  },

  liege: {
    // identity sources: 列日市镇 198,044 人、**沙勒罗瓦市镇 206,585 人**（比利时国家登记处 IBZ，2026-01-01，
    //   1 级，2026-09-08 核，两个数在同一份表里）—— 所以「瓦隆大区最大的城市」按市镇口径是错的，
    //   已改为「第二多（次于沙勒罗瓦）」。
    //   **「都会区约 75 万、52 个市镇」也已删**：那出自比利时旧的 grootstedelijk gebied 口径，
    //   末次数据 2008-01-01（749,110 人），近二十年未更新。
    identity:
      "Liège is the capital of Liège Province, with a municipal population of about 198,000 in 2026, set on the Meuse River — the second-largest city in Wallonia by municipal population, after Charleroi and an important commercial and industrial centre in eastern Belgium.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Liège (capital of Liège Province, Wallonia; ~195,000, metro ~750,000 over 52 municipalities; Meuse near the Dutch and German borders; Prince-Bishopric 985–1794 with wide independence; Montagne de Bueren 374 steps; Guillemins station by Calatrava; steel decline and diversification; La Batte Sunday market; airport cargo; French-speaking)
    howItWorks:
      "Liège is the capital of Liège Province in Wallonia, governed by an elected mayor and council, with about 198,000 people in the municipality in 2026; the Walloon Region and the French Community share economic and educational powers, and French is the language here. The city lies in the Meuse valley, close to both the Dutch and German borders. From 985 to 1794 it was the capital of the Prince-Bishopric of Liège, an ecclesiastical state nominally within the Holy Roman Empire but largely independent, and its seven medieval collegiate churches and the prince-bishops' palace remain from that time; in the nineteenth century it became one of continental Europe's first steel centres, and the decline of steel and coal put the city through a long adjustment, turning now to aerospace parts, biotechnology and logistics, with the airport a major European cargo hub. The 374 steps of the Montagne de Bueren climb from the old town to the citadel, Calatrava's Guillemins station is the new landmark, and the La Batte market spreads along the river on Sundays. Newcomers most often go wrong by taking Liège for a faded industrial city, when it has a university, theatres and a thousand years as a bishops' capital.",
    layout:
      "Place Saint-Lambert and Liège Cathedral form the old-town core; the old town is laid out along both banks of the Meuse, and the Montagne de Bueren steps (374 of them) connect the old town to a hilltop viewpoint; Liège-Guillemins station is a well-known piece of modern architecture.",
    // gettingAround sources: LGG：2026-01 起无定期客运（机场官网，1 级），注册表改为经布鲁塞尔转乘。会变的现状（曾有复航计划），下轮复核。核实 2026-09-11
    gettingAround:
      "Liège Airport, about 6 km south-west of the centre, now handles cargo only — it has had no scheduled passenger flights since January 2026 — so air travellers usually go via Brussels Airport. City buses and trams cover the main districts. The climate is temperate maritime, mild and humid year-round.",
    culture:
      "The official language is French. Liège has historically been known for its steel and coal industries. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "Liège-Guillemins station; the Montagne de Bueren steps and hilltop view; the old town along the Meuse; day trips to Spa or the Vesdre Valley.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather. Liège is the gateway city for exploring the northern Ardennes and the Vesdre Valley.",
  },

  namur: {
    // identity sources: 那慕尔市镇 115,330 人（比利时国家登记处 IBZ，2026-01-01，1 级，2026-09-08 核）——
    //   howItWorks 原本就是最新一期，identity 的「约 11 万」是同条目内的不一致，已对齐。
    identity:
      "Namur is the capital of Wallonia, with a municipal population of about 115,000 in 2026, set at the confluence of the Meuse and Sambre rivers; the citadel on the hill above is the city's landmark.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Namur (capital of Wallonia — the Walloon Parliament and government sit here, so designated in 1986 — and of Namur Province; 175.93 km²; ~115,330 2026; 24 sub-municipalities; confluence of the Sambre and Meuse; citadel; stilt jousting UNESCO intangible 2021; French-speaking; rail to Brussels, Luxembourg, Lille, Liège)
    howItWorks:
      "Namur is the capital of Wallonia — the Walloon Parliament and government have sat here since 1986 — and also the capital of Namur Province, governed by an elected mayor and council, the municipality covering about 176 km² and taking in 24 absorbed communes, with about 115,000 people in 2026. The city stands on the spit where the Sambre joins the Meuse, the citadel on the rock between the two rivers now demilitarised, the old town at its foot and the eighteenth-century cathedral of Saint-Aubain as its landmark; stilt jousting has been practised here since 1411 and was added to the intangible heritage list in 2021. Railways join it to Brussels, Luxembourg, Lille and Liège, and machinery, leather and porcelain are the old industries. Newcomers most often go wrong by assuming Wallonia's capital is a larger city such as Liège or Charleroi, when the parliament and government sit in this city of 115,000.",
    layout:
      "The Citadel of Namur stands on the hill at the confluence of the Meuse and Sambre, overlooking the city; the old town sits at the citadel's foot, laid out along both riverbanks.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Brussels South Charleroi Airport (about 35 km). The old town is walkable, and a cable car climbs to the citadel for a view over the confluence. The climate is temperate maritime, mild and humid year-round.",
    culture:
      "The official language is French. Namur is the political centre of Wallonia. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "The Citadel of Namur and its cable car; views over the Meuse-Sambre confluence; the old-town streets; day trips to Dinant or the Condroz.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather. Namur is an ideal base for exploring the Meuse Valley and the Condroz plateau.",
  },

  leuven: {
    // howItWorks sources（2026-09-15 核实，add-year）: IBZ/RRN population-bevolking-20260101.pdf，Leuven = 105,233，1 级；下一期约 2027-01
    // identity sources（2026-09-15 核实，add-year）: IBZ/RRN population-bevolking-20260101.pdf，Leuven = 105,233，1 级；下一期约 2027-01
    // identity sources: 鲁汶市镇 105,233 人（比利时国家登记处 IBZ，2026-01-01，1 级，2026-09-08 核）。
    //   「比利时第八大城市」按布鲁塞尔（大区）> 安特卫普 > 根特 > 沙勒罗瓦 > 列日 > 布鲁日 >
    //   那慕尔 > 鲁汶 这一排法成立。本轮核实无需改动。
    identity:
      "Leuven is the capital of Flemish Brabant, with a population of about 105,000 as of 1 January 2026 (Belgian National Register, IBZ). Founded in 1425, KU Leuven is the oldest university in the Low Countries, giving the city its youthful energy.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Leuven (capital of Flemish Brabant; over 100,000, eighth-largest in Belgium; ~25 km east of Brussels; a university city since 1425, the oldest in the Low Countries; KU Leuven the largest Dutch-speaking university in the world, over 50,000 students; Brabantine Gothic town hall 1439–63; St Peter's; AB InBev headquarters and Stella Artois; imec; ECoC 2030)
    howItWorks:
      "Leuven is the capital of Flemish Brabant, governed by an elected mayor and council, with about 105,000 people as of 1 January 2026 (IBZ), Belgium's eighth city, about 25 km east of Brussels; the Flemish Region runs education and Dutch is the language here. It has been a university city since 1425, the oldest in the Low Countries — today's KU Leuven is the largest Dutch-speaking university in the world, and its more than fifty thousand students in a city of a hundred thousand set the city's rhythm by term and vacation. The Brabantine Gothic town hall built between 1439 and 1463 is its landmark, St Peter's stands opposite and the Oude Markt is a square of bars end to end; AB InBev has its headquarters here, Stella Artois is brewed here, and the nanoelectronics institute imec makes it a European centre of chip research as well. In 2030 it will be European Capital of Culture. Newcomers most often go wrong by taking Leuven for a suburb of Brussels, when it is a university city of its own, half emptied in the summer vacation.",
    layout:
      "The Gothic town hall is the old town's landmark; the Groot Begijnhof is a well-preserved historic quarter within the old town; the buildings of KU Leuven's various faculties are scattered throughout the old town, woven into the fabric of the city.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Brussels Airport (about 25 km). The old town is walkable and bike-friendly, and a direct train reaches Brussels in about 25 minutes. The climate is temperate maritime, mild and humid year-round.",
    culture:
      "The official language is Dutch (Flemish). As a university city, Leuven has a strong student culture and a lively bar street (the Oude Markt, sometimes called \"the longest bar in Europe\"). Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "The town hall; the Groot Begijnhof; the Oude Markt; KU Leuven's university library; a visit to the Stella Artois brewery.",
    whenAndTips:
      "The city's student atmosphere is liveliest during term time (September–June). Leuven is very close to Brussels, making it a good day-trip destination or an alternative base to Brussels.",
  },

  mons: {
    // identity sources: 人口：比利时国家登记处 2026-01-01 全国市镇表，Mons/Bergen = 97,337（1 级）。口径是市镇（commune）常住人口，含 19 个并入的旧市镇 —— ⚠️ 不要拿「Deelgemeente Mons」（旧市镇边界，约 2.9 万）当全市数。比利时每年年初发布当年 1 月 1 日数。identity 与 howItWorks 已统一。
    identity:
      "Mons is the capital of Hainaut, with a population of about 97,000 as of 1 January 2026 (Statbel), and was European Capital of Culture in 2015 — an important cultural city in western Wallonia.",
    // howItWorks sources: 人口：与 identity 段同一来源与基准日（IBZ 2026-01-01 = 97,337）。
    howItWorks:
      "Mons is the capital of Hainaut Province in Wallonia, governed by an elected mayor and council, the municipality covering about 148 km² and taking in nineteen absorbed communes, with about 97,300 people as of 1 January 2026 (Statbel); the Walloon Region and the French Community share economic and educational powers, and French is the language here. The old town sits on a low hill, and the belfry completed in the seventeenth century rises 87 m as the only Baroque belfry in Belgium, inscribed in 1999 among the Belfries of Belgium and France, with the collegiate church of Saint Waltrude at its foot. Each Trinity Sunday the Ducasse de Mons pulls the saint's reliquary car through the streets and stages a fight between Saint George and a dragon, a custom on the intangible heritage list. British and German forces first clashed here in August 1914 and Canadian troops liberated the city on 11 November 1918, the day of the armistice, which is why cemeteries and memorials stand around it; NATO's Supreme Headquarters Allied Powers Europe sits outside town at Casteau, and in 2015 the city was European Capital of Culture. Newcomers most often go wrong by taking Mons for an industrial town, when it is a provincial capital and a university city with a military headquarters for a neighbour.",
    layout:
      "The Grand Place and town hall form the old-town centre; the belfry (part of the Belfries of Belgium and France UNESCO World Heritage listing) overlooks the city; the Collegiate Church of St. Waltrude is an important Gothic building in the old town.",
    // gettingAround sources: 机场距离：注册表坐标算出直线 35.5 公里；原文短于直线、不可能成立，已改。
    gettingAround:
      "There is no commercial airport locally; the nearest is Brussels South Charleroi Airport (about 40 km). The old town is walkable. The climate is temperate maritime, mild and humid year-round.",
    culture:
      "The official language is French. Mons's annual Doudou folk procession (inscribed on the UNESCO Intangible Cultural Heritage list) is an important local tradition. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "The Grand Place and belfry; the Collegiate Church of St. Waltrude; the Mons Memorial Museum; day trips to the industrial heritage sites along the Sambre.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather. The Doudou procession in late May/early June is the best time to experience local folk culture.",
  },

  dinant: {
    // identity sources（2026-09-15 核实，update）: IBZ/RRN population-bevolking-20260101.pdf，Dinant = 13,405，1 级；下一期约 2027-01
    identity:
      "Dinant is a small town in Namur Province on the Meuse, with a population of about 13,400 as of 1 January 2026 (Belgian National Register, IBZ), known for its clifftop citadel and as the birthplace of Adolphe Sax, inventor of the saxophone.",
    // howItWorks sources: 迪南市镇 13,405 人（比利时国家登记处 IBZ，2026-01-01，1 级，2026-09-08 核）。
    //   原文引的是 2018 年的 13,544，**落后八期** —— 数字几乎没变，但年份不刷新就无从判断它是不是还成立。
    howItWorks:
      "Dinant is a small city of Namur Province in Wallonia, governed by an elected mayor and council, about 100 km² with about 13,400 people in 2026. The ground set its shape: only a narrow strip lies between the Meuse and the steep limestone cliffs, so the town runs long and thin north to south along the river; the onion-domed collegiate church presses against the foot of the cliff and the eleventh-century citadel stands on top, reached by cable car or more than four hundred steps. Adolphe Sax, inventor of the saxophone, was born here in 1814, and the bridge railings carry saxophones painted in the colours of many countries; the couque de Dinant is the old local biscuit, and kayaks come down the Lesse from upstream. On 23 August 1914 German troops executed 674 inhabitants here, one of the earliest massacres of the First World War. Brussels lies about 90 km north-east. Newcomers most often go wrong by expecting an old town that can be walked in a circle, when Dinant is one long street with its sights spread over kilometres of riverbank.",
    layout:
      "The Citadel of Dinant stands on the steep cliff along the eastern bank of the Meuse, overlooking the town; the old town lies along the western bank, its onion-domed collegiate church spire marking the skyline.",
    gettingAround:
      "There is no commercial airport locally; the nearest is Brussels South Charleroi Airport (about 50 km). The old town is walkable, and a cable car climbs to the citadel. The climate is temperate maritime, mild and humid year-round.",
    culture:
      "The official language is French. Dinant is the birthplace of Adolphe Sax, inventor of the saxophone, and saxophone-themed decorations and statues are visible throughout the town. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "The Citadel of Dinant and its cable car; the collegiate church; a Meuse river cruise; day trips to the Caves of Han-sur-Lesse or the Ourthe Valley.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather. Dinant is an ideal gateway to the Meuse Valley and the western Ardennes.",
  },

  ostend: {
    identity:
      "Ostend is a North Sea seaside city in West Flanders, with a municipal population of about 72,900 in 2026 — the largest seaside resort and port city on the Belgian coast.",
    // howItWorks sources: 奥斯坦德市镇 72,942 人（比利时国家登记处 IBZ，2026-01-01，1 级，2026-09-08 核）。
    howItWorks:
      "Ostend is a city of West Flanders and the largest on the Belgian coast, governed by an elected mayor and council, with about 72,900 people in 2026 and taking in the boroughs of Mariakerke, Raversijde, Stene and Zandvoorde. In the nineteenth century it was the seaside resort of the Belgian royal house, Leopold II built its galleries and colonnades, the casino and the promenade date from then, and the painter James Ensor was born here; in the Second World War it was the most heavily bombed city in Belgium, and its seafront is a rebuilding. The ferry to England ended in 2013, the port now lives on fishing and offshore wind, and the airport is mainly freight; the Coastal Tram runs from De Panne to Knokke as the longest tram line in the world and passes through the city. Bruges lies about 25 km south-east. Newcomers most often go wrong by taking Ostend for a stretch of sand, when it is a city with a fishing port, a casino and a year-round life, and the beach only one of its edges.",
    layout:
      "The seafront promenade and beach are the city's main recreational area; the old fishing harbour retains the character of a traditional fishing town; Maria Hendrika Park is an important green space in the city.",
    gettingAround:
      "The airport lies about 3 km south-west of the centre, shared with Bruges. City buses cover the main districts, and the seafront promenade is good for walking and cycling. The climate is temperate maritime, shaped by the North Sea, with cool summers and mild, windy winters.",
    culture:
      "The official language is Dutch (Flemish). Ostend is an important Belgian port for seafood and fish trading, with numerous seafood restaurants. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "The seafront promenade and beach; the seafood market at the old fishing harbour; Maria Hendrika Park; day trips to the Belgian coast dunes or De Panne.",
    whenAndTips:
      "June–August is peak seaside season, with the most comfortable temperatures. Ostend is an ideal base for exploring the Belgian coast dunes.",
  },

  spa: {
    // identity sources: 斯帕市镇 9,905 人（比利时国家登记处 IBZ，2026-01-01，1 级，2026-09-08 核）。
    //   原 identity 写「约 1.1 万」，比同条目 howItWorks 的「约 1 万」还高 —— 两段一开始就不一致，
    //   而最新数比两者都低。小镇条目尤其要防「把省或 arrondissement 的数写成镇的」。
    identity:
      "Spa is a thermal-spring town in the Ardennes in Liège Province, with a population of about 9,900 in 2026 — the very origin of the word \"spa,\" and one of Europe's oldest thermal-spa resorts.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Spa (municipality in Liège Province, Wallonia; 39.85 km²; 10,378 2018; more than 300 cold mineral springs, locally "pouhons"; the name gave English its word "spa"; Great Spa Towns of Europe UNESCO 2021; Circuit de Spa-Francorchamps actually at Stavelot; Spa Monopole water; casino; Thermes 2005; Ardennes; Liège ~35 km)
    howItWorks:
      "Spa is a municipality of Liège Province in Wallonia, governed by an elected mayor and council, about 40 km² with about 9,900 people in 2026, in a wooded valley of the Ardennes. Its name passed into English: because of the more than three hundred cold mineral springs here, 'spa' became the common word for mineral baths everywhere, while locals call the springs 'pouhons'. In the eighteenth and nineteenth centuries the princes of Europe came to drink the waters, and the casino, the galleries and the hotels are of that time; in 2021 it was inscribed as World Heritage among the Great Spa Towns of Europe, a new thermal centre opened on the hill in 2005 with a funicular up from the town, and Spa mineral water is bottled here. The Circuit de Spa-Francorchamps that carries its name in fact lies in Stavelot and Malmedy to the east, not in this municipality. Liège is about 35 km north-west. Newcomers most often go wrong by expecting the Formula One circuit in the town of Spa, when it lies a dozen kilometres away in another municipality.",
    layout:
      "The thermal baths and casino are the town's central facilities; the old-town streets are laid out around the mineral springs; the Circuit de Spa-Francorchamps (host of the Belgian Grand Prix) lies in the Ardennes forest around the town.",
    gettingAround:
      "There is no commercial airport locally; nearby Liège Airport now handles cargo only, so air travellers usually go via Brussels Airport. The town is best explored on foot. The climate follows the Ardennes upland pattern, cooler and wetter than the rest of Belgium.",
    culture:
      "The official language is French. Spa has been famous across Europe since the 17th century for the therapeutic properties of its mineral waters, drawing European royalty and celebrities. Restaurant bills usually already include service; rounding up is customary.",
    seeAndDo:
      "The thermal baths (modern spa facilities available); the mineral spring sources; the Circuit de Spa-Francorchamps (open to visitors outside race periods); day trips to the Amblève Gorge and the Coo Waterfall.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather. Spa is an ideal base for exploring the forests and valleys of the eastern Ardennes.",
  },
};
