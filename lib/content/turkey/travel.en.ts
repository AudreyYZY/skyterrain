import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  // ============ Turkey ============
  "turkey-overview": {
    // 回扫 sources（2026-09-15 核实，非人口六段回扫，content-verifier）: layout / culture：七大地理区域、本指南涉及五个；小费比例只查到 3 级且与原写 10–15% 不符，改为不给比例（规则 ⑪，同改 11 个条目）
    // identity sources: TÜİK《Adrese Dayalı Nüfus Kayıt Sistemi Sonuçları, 2025》：2025-12-31 地址登记人口 86,092,168 人。https://veriportali.tuik.gov.tr/tr/press/53899
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Turkey straddles Europe and Asia, covering about 780,000 km² with a registered population of about 86.09 million at the end of 2025 (Turkish Statistical Institute); its capital is Ankara, its largest city Istanbul, its official language Turkish, and its currency the Turkish lira (TRY).",
    layout:
      "Turkey officially has seven geographical regions, and this guide covers five of them: Marmara (Istanbul/Bursa, straddling the Bosphorus at the Europe-Asia crossing), the Aegean (Izmir/Bodrum/Pamukkale, deeply indented bays and Greco-Roman ruins), the Mediterranean (Antalya, the 'Turkish Riviera'), Central Anatolia (Ankara/Konya/Cappadocia, plateau and volcanic-ash terrain), and the Black Sea (Trabzon, rainy mountainous coast).",
    gettingAround:
      "Domestic flights are the main way to travel between regions, with Turkish Airlines, Pegasus and AJet covering all major cities; Istanbul has an extensive metro, tram and ferry network, and long-distance buses are well developed nationwide. Climate varies sharply north to south: the Mediterranean and Aegean coasts have hot, dry summers and mild winters, the Central Anatolian Plateau has cold winters, hot summers and large day-night swings, and the Black Sea coast is rainy year-round. Citizens of many countries can enter visa-free or with a visa on arrival for a set period — check the latest rules from Turkey's Ministry of Foreign Affairs before travel.",
    culture:
      "Turkey is a secular republic with a Turkic-speaking Muslim majority; the constitution mandates separation of religion and state, most residents follow Sunni Islam, and society is generally moderate and open — alcohol is legal and widely available. Eating or drinking in public during daylight hours in Ramadan is not against the law, but it is polite to be somewhat discreet out of respect for those fasting. Mosques require shoes off, and women should carry a headscarf and wear clothing covering the shoulders and knees; restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "Hagia Sophia and the Blue Mosque in Istanbul; hot-air ballooning over Cappadocia's fairy chimneys; the travertine terraces of Pamukkale; Antalya's Mediterranean coast and ancient ruins; the ancient city of Ephesus; and Konya's Mevlana Museum and whirling dervish ceremony.",
    whenAndTips:
      "April to June and September to October offer the most pleasant weather and are peak travel seasons; July and August bring high heat and crowds along the coasts, while the Central Anatolian Plateau can see large day-night temperature swings, so pack warm layers. Plan flights or long-distance buses ahead for cross-regional travel.",
  },
  istanbul: {
    // 回扫 sources（2026-09-15 核实，非人口六段回扫，content-verifier）: whenAndTips：蓝色清真寺祈祷前后关闭约 1 小时、周五上午至约 14:30（访客须知 2 级）
    // howItWorks sources（2026-09-15 核实，update）: TÜİK ADNKS 2025（2 级）；下一期约 2027-02
    // identity sources（2026-09-15 核实，update）: TÜİK ADNKS 2025（2026-02-09 发布，经媒体转述，2 级）；下一期约 2027-02
    identity:
      "Istanbul is Turkey's largest city and its economic and cultural center, with about 15.75 million people on the address-based register at the end of 2025 (TurkStat); straddling both shores of the Bosphorus, it spans both Asia and Europe, and was successively the capital of the Byzantine and Ottoman empires — though no longer the capital after 1923, it remains Turkey's most internationally influential city.",
    // howItWorks sources: Wikipedia (2026-09): Istanbul (metropolitan municipality coextensive with province; elected mayor + appointed governor; 39 districts with elected mayors; 5,461 km²; ~15.7 million 2024; European side ~65%; Fatih UNESCO 1985; mahalle/muhtar; airport 2018); Metropolitan municipalities in Turkey (Law 6360)
    howItWorks:
      "Istanbul is administratively a metropolitan municipality coextensive with its province: the elected metropolitan mayor runs transport, water and city-wide planning, the centrally appointed governor runs national services such as police and education, and the city is divided into 39 districts, each with its own elected mayor and council; beneath the districts lie the mahalle, the neighbourhoods, each with an elected headman (muhtar), the basic unit for registering an address and doing business. The city covers about 5,461 km² with about 15.75 million people at the end of 2025 (TurkStat). The Bosphorus divides it into a European and an Asian side, with about two-thirds of the population on the European: the Historic Peninsula in Fatih district is the old city inscribed as World Heritage in 1985, Beyoğlu and Taksim are the new town of the nineteenth century onward, and Levent-Maslak is the business district; on the Asian side Kadıköy and Üsküdar each have centres of their own. Three bridges, the Marmaray rail tunnel, the metro and the ferries run on one Istanbulkart. The new airport opened to the north in 2018. Addresses give neighbourhood, street, number and district. Newcomers most often go wrong by taking the Historic Peninsula for the city, when it is one district in a city of 15 million.",
    layout:
      "The city is divided by the Bosphorus into a European side and an Asian side; the European side is further split by the Golden Horn into the old city (Sultanahmet, dense with historic monuments) and the new city (Beyoğlu, home to Taksim Square and modern commerce), while the Asian side (Kadıköy) is known for its lively local atmosphere.",
    gettingAround:
      "Istanbul Airport (IST) is about 35 km from the European-side city center; the city has an extensive metro, tram and ferry network, and crossing the strait by ferry or the Marmaray metro line is a convenient way to experience the city's geography.",
    culture:
      "The official language is Turkish. At religious sites such as Hagia Sophia or the Blue Mosque, women should carry a headscarf and wear clothing covering the shoulders and knees, and both men and women must remove their shoes; visitors may look around outside prayer times but should stay quiet. Restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "Hagia Sophia (a dual witness to Byzantine and Ottoman architectural history); the Blue Mosque; Topkapı Palace (former residence of the Ottoman sultans); the Grand Bazaar (one of the world's oldest and largest covered markets); and Galata Tower for views over the Golden Horn and the Bosphorus.",
    whenAndTips:
      "April to May and September to October offer the most pleasant weather with relatively fewer crowds; the Blue Mosque closes to visitors for roughly an hour around each of its five daily prayers and on Friday mornings until about 14:30, so check the day's prayer schedule when planning your visit.",
  },
  ankara: {
    // howItWorks sources（2026-09-15 核实，update）: TÜİK ADNKS 2025（2 级）；下一期约 2027-02
    // identity sources（2026-09-15 核实，update）: TÜİK ADNKS 2025（2 级）；下一期约 2027-02
    identity:
      "Ankara is the capital of the Republic of Turkey, with about 5.91 million people on the address-based register at the end of 2025 (TurkStat), and is Turkey's second-largest city; chosen as the new capital by Atatürk in 1923, it is the country's political and administrative center.",
    // howItWorks sources: Wikipedia (2026-09): Ankara (capital 1923; metropolitan municipality = province; 25 districts; 25,632 km²; ~5.8 million 2024; Ulus/Kızılay/Çankaya; Jansen plan 1932 for 500,000); Metropolitan municipalities in Turkey
    howItWorks:
      "Ankara has been the capital of Turkey since 1923, and administratively it is a metropolitan municipality coextensive with its province: the elected metropolitan mayor runs transport and city-wide planning, the centrally appointed governor runs national services, and the city is divided into 25 districts, each with its own elected mayor and council, with the mahalle and its elected headman beneath them. The province covers about 25,632 km² with about 5.91 million people at the end of 2025, Turkey's second city. The city grew south along Atatürk Boulevard: Ulus at the northern end is the old town below the citadel, Kızılay the centre of the republican era, Çankaya the presidential and embassy quarter, and Söğütözü and Çayyolu further south-west the new business and residential districts, with Anıtkabir on its hill between. The Jansen plan of 1932 designed the capital for 500,000 people, and migration from the 1950s has swelled it more than tenfold. Metro and light rail serve the city, high-speed rail runs to Istanbul and Konya, and Esenboğa airport lies to the north. Addresses give neighbourhood, street, number and district. Newcomers most often go wrong by taking Ankara for a city of government alone, when it is a university and industrial city of 5.8 million.",
    layout:
      "The old city around Ankara Castle forms the historic core, while the newer districts extending south house government institutions, universities and the embassy district; Anıtkabir (Atatürk's Mausoleum) sits on a hill on the city's west side.",
    gettingAround:
      "Esenboğa Airport (ESB) is about 25 km in a straight line from the city center; the city has a well-developed metro and bus network, providing convenient access to sites such as the Museum of Anatolian Civilizations.",
    culture:
      "The official language is Turkish. As the administrative center, Ankara tends toward more formal dress and etiquette; religious sites still require shoes off and headscarves for women. Restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "Anıtkabir (the solemn memorial complex housing the mausoleum of Atatürk, founder of the Republic of Turkey); Ankara Castle (an old hilltop fortress overlooking the city); and the Museum of Anatolian Civilizations (housing artifacts from the Hittites and other early Anatolian civilizations).",
    whenAndTips:
      "Ankara has a continental climate with hot, dry summers and cold winters; April to June and September to October are the most pleasant travel seasons. Dress appropriately when visiting Anıtkabir, and avoid Turkish national holiday peaks if you prefer smaller crowds.",
  },
  izmir: {
    // identity sources: 人口：**TÜİK 的「伊兹密尔人口」是全省数**（2014 年起省界 = 大都会市界），4,504,185（2025-12-31，2026-02-09 发布）。「第三大城市」按省人口排名成立。2 级转引 TÜİK。2026-09-10 核。
    identity:
      "Izmir is Turkey's third-largest city by province population — İzmir Province has matched the metropolitan municipality's boundary since 2014 — with over 4.5 million people in the province in 2025 (TÜİK), and an important Aegean port known as the 'Pearl of the Aegean' for its seafront Kordon promenade.",
    // howItWorks sources: Wikipedia (2026-09): İzmir (metropolitan municipality = province; 30 districts; ~4.5 million 2024; Gulf of İzmir; Konak/Alsancak/Karşıyaka/Bornova/Bayraklı; İzban/metro/ferries; Ephesus 80 km); Metropolitan municipalities in Turkey
    howItWorks:
      "İzmir is administratively a metropolitan municipality coextensive with its province: the elected metropolitan mayor runs transport and city-wide planning, the centrally appointed governor runs national services, and the city is divided into 30 districts, each with its own elected mayor and council, with the mahalle and its elected headman beneath them. It had about 4.5 million people in the province in 2025 (TÜİK), Turkey's third city. The city wraps around the Gulf of İzmir: Konak and Alsancak are the centre, the Kordon waterfront is where residents walk, the Kemeraltı bazaar and the agora of ancient Smyrna lie in the old town, and Kadifekale looks down from its hill; Karşıyaka across the bay is reached by ferry, Bornova is the university district, and Bayraklı is the new tower business district. The İzban commuter rail, the metro and the ferries run on one card. The port and the free trade zone are the economic mainstay, and Ephesus lies about 80 km south. Addresses give neighbourhood, street, number and district. Newcomers most often go wrong by taking İzmir for a stop on the way to Ephesus, when it is a big city grown around a bay, its two shores stitched together by ferry.",
    layout:
      "The city curves along Izmir Bay, with the Kordon waterfront promenade as its everyday recreational heart; the old town around Kadifekale Castle in the Konak district preserves historic streets, and the Agora of Smyrna lies in the city center.",
    gettingAround:
      "Adnan Menderes Airport (ADB) is about 15 km in a straight line from the city center; the city has metro and light-rail networks, and reaching the ancient city of Ephesus usually means taking a train or bus to the nearby town of Selçuk, about an hour away.",
    // culture sources: ⚠️ 零争议红线（D-redline）：identity 与 culture 两段原本都写了「相对世俗开放 / 世俗化程度较高」——对土耳其国内城市在世俗／宗教轴上做比较评价，2026-09-10 一并删除，换成不带评价的城市事实。
    culture:
      "The official language is Turkish. Izmir has a relaxed coastal resort-and-trade atmosphere and casual everyday dress; mosques still require the basic etiquette of shoes off and headscarves for women. Restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "The Kordon waterfront promenade (a favorite spot for sunset views and dining); Kadifekale Castle; the Agora of Smyrna; and a day trip from Izmir to the ancient city of Ephesus, a major Greco-Roman city-state site.",
    whenAndTips:
      "April to June and September to October offer the most pleasant weather; July and August are hot along the coast and busier with tourists. Plan a full day for Ephesus, and set out in the morning to beat the tour-group crowds.",
  },
  antalya: {
    // identity sources: 人口：TÜİK 2025 安塔利亚省 2,777,677（省界 = 大市界，2014 年起）。「地中海沿岸最大」经与阿达纳 2,283,609、梅尔辛比对成立。2026-09-10 核。
    identity:
      "Antalya is the largest city on Turkey's Mediterranean coast by province population — over 2.77 million in 2025 (TÜİK) — and serves as the hub of the 'Turkish Riviera'; its old town, Kaleiçi, is built right along the waterfront.",
    // howItWorks sources: 人口：省 2,777,677（TÜİK 2025）。**「城区约 140 万」核不到 TÜİK 一手口径**（疑为维基自定义 urban area），已撤下、记 unknown，不用另一个没核到的数替换。2026-09-10 核。
    howItWorks:
      "Antalya has been a metropolitan municipality coextensive with its province since 2014: the elected metropolitan mayor runs transport and city-wide planning, the centrally appointed governor runs national services, and the province is divided into 19 districts, each with its own elected mayor and council; five of them — Muratpaşa, Kepez, Konyaaltı, Döşemealtı and Aksu — make up the city itself, with about 2.78 million people in the province in 2025 (TÜİK); a separate urban-area figure circulates but could not be traced to an official TÜİK series, so it is left out here. Most of what people picture as the 'Antalya resorts' lies in other districts: Belek, Side, Alanya and Kemer are each in districts of their own, tens to more than a hundred kilometres from the city. The city stands on the coastal terrace between the Taurus Mountains and the Mediterranean: Kaleiçi, the old town, sits on the cliffs above the harbour, Konyaaltı beach lies to the west and Lara beach to the east, and the Düden waterfalls drop straight off the terrace into the sea. Antalya Airport is among the busiest in Turkey, mostly with holidaymakers, and the AntRay tram serves the city. Citrus and greenhouse farming are the industry beyond tourism. Addresses give neighbourhood, street, number and district. Newcomers most often go wrong by taking the city of Antalya for a resort, when it is a provincial capital in its own right, with the resorts tens of kilometres away.",
    layout:
      "The old town of Kaleiçi is marked by Hadrian's Gate as its landmark entrance and preserves Ottoman-era lanes and a harbor; well-known beaches such as Konyaaltı and Lara lie around the city, with the Düden Waterfalls to the northeast.",
    gettingAround:
      "Antalya Airport (AYT) is about 7.8 km in a straight line from the city center and one of Turkey's main international air gateways on the Mediterranean coast; the city has a light-rail and bus network, and reaching surrounding ruins such as the Aspendos Theatre usually requires a private car or a local tour.",
    culture:
      "The official language is Turkish. As one of Turkey's most important international tourism cities, Antalya has relatively relaxed dress norms and swimwear is generally acceptable on the beaches; mosques still require shoes off and headscarves for women. Restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "The Kaleiçi old town and Hadrian's Gate; Konyaaltı Beach; the Düden Waterfalls; the Aspendos Theatre (one of the best-preserved Roman theatres); and day trips from Antalya to nearby ancient sites such as Perge.",
    whenAndTips:
      "April to June and September to October bring mild, pleasant weather; July and August can exceed 35°C but remain peak beach season. Winter (December to March) is mild and well suited to visiting ruins during the off-season.",
  },
  cappadocia: {
    // identity sources（2026-09-15 核实，update）: TÜİK ADNKS 2025 内夫谢希尔分乡镇数（地方媒体转述，2 级）；下一期约 2027-02
    identity:
      "Cappadocia is a region in Central Anatolia famed for its volcanic-ash fairy-chimney landscape and hot-air balloon flights; its core town, Göreme, had 2,236 registered residents in 2025 (TurkStat) and is one of Turkey's most recognizable tourist destinations.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Cappadocia and Göreme (Turkey; a historical region of Central Anatolia spanning Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde provinces, the name from Old Persian Katpatuka; the landscape formed by erosion of thick volcanic deposits from eruptions of Erciyes, Hasan Dağ and Göllüdağ, producing the fairy chimneys; ruled in turn by Persian, Greek, Roman, Byzantine and Ottoman powers, an early Christian centre with the Cappadocian Fathers of the 4th century; the Göreme Open Air Museum with more than 30 rock-cut churches and chapels with Byzantine frescoes, Göreme National Park and the Rock Sites of Cappadocia inscribed by UNESCO in 1985; the underground cities of Derinkuyu and Kaymaklı; cave hotels and hot-air ballooning)
    howItWorks:
      "Cappadocia is a historical region of Central Anatolia in Turkey spanning Nevşehir, Kayseri, Aksaray and other provinces, with Göreme, the town most visitors stay in, lying in Nevşehir Province; under Turkey's Law 6360 of 2012 the more populous provinces are run as metropolitan municipalities whose boundaries match the province, with local affairs handled at metropolitan and district level. The landscape comes from volcanoes: repeated eruptions of Erciyes, Hasan Dağ and Göllüdağ laid thick ash over this country, and water and wind since have cut the soft tuff into columns and valleys, harder caps left on top, forming what are called fairy chimneys. Tuff is easy to dig and slow to collapse, so people cut dwellings, churches and whole underground cities directly into the rock — the underground cities at Derinkuyu and Kaymaklı run several levels down and served as refuges, and the Göreme Open Air Museum holds more than thirty rock-cut churches with Byzantine frescoes. Göreme National Park and the Rock Sites of Cappadocia were inscribed as World Heritage in 1985. The hot-air balloons launch before sunrise under the civil aviation authority's control of weather and traffic. Newcomers most often go wrong by treating Cappadocia as a town, when it is a region across several provinces.",
    layout:
      "Small towns including Göreme, Ürgüp, Avanos and Uçhisar are scattered across the volcanic-ash landscape, with Göreme National Park and its open-air museum forming the region's core, and underground cities such as Derinkuyu located to the south.",
    gettingAround:
      "Nevşehir Kapadokya Airport (NAV) is about 40 km from Göreme, and Kayseri Airport (ASR) about 69 km away — either can serve as a gateway; the towns within the region are close together, and most visitors get around by private car, local shuttle bus, or transfers arranged by balloon companies.",
    culture:
      "The official language is Turkish. The region's tourism industry is well developed and most operators are accustomed to international visitors; stay quiet and avoid touching frescoes at rock-cut churches and other religious-historical sites. Before booking a balloon flight, check the operator's credentials and safety record; restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "A sunrise hot-air balloon flight over the fairy-chimney landscape; the Göreme Open Air Museum (Byzantine rock-cut churches and frescoes); Uçhisar Castle for panoramic views; the fairy chimneys of Paşabağı; and the underground city of Derinkuyu.",
    whenAndTips:
      "April to June and September to October offer the highest balloon-flight success rates and the most pleasant weather; flights depend on weather conditions, so build a spare day into your itinerary in case of cancellation. Occasional winter snow adds a distinctive look to the rock formations but raises the chance of cancelled flights.",
  },
  bodrum: {
    // identity sources: 人口：博德鲁姆是穆拉省下的**区（ilçe）**、不是省会，故用区人口而非省人口（穆拉全省 2025 年 1,099,547，不适用）。TÜİK 2025 区人口 207,196，2/3 级转引。2026-09-10 核。
    identity:
      "Bodrum is a resort town on a peninsula on Turkey's southern Aegean coast, with a district population of about 207,000 in 2025 (TÜİK), known for its whitewashed buildings, windmills and Bodrum Castle — a signature town for Turkey's Mediterranean-style way of life.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Bodrum (Turkey; town and district of Muğla Province, the ancient Halicarnassus, whose Mausoleum was one of the Seven Wonders of the Ancient World; Bodrum Castle built by the Knights of St John from 1402 using stone from the Mausoleum, now the Museum of Underwater Archaeology; the district population grew from about 26,000 in 1965 to about 198,000 in 2023 as tourism replaced fishing and sponge diving; white-washed building mandated since 2006; peninsula villages including Yalıkavak, Gümüşlük and Türkbükü; marinas and gulet yachting; Milas-Bodrum Airport; ferries to Kos)
    howItWorks:
      "Bodrum is a district and its town in Muğla Province on an Aegean peninsula in Turkey; Muğla is run as a metropolitan municipality whose boundary matches the province, with local affairs handled at metropolitan and district level. It is the ancient Halicarnassus: the fourth-century BC Mausoleum here was one of the Seven Wonders of the Ancient World and later fell in an earthquake, and from 1402 the Knights of St John built Bodrum Castle on the headland from its stone, the castle now holding the Museum of Underwater Archaeology with ancient wrecks raised from these waters. In the middle of the twentieth century this was a town of fishing and sponge diving with about 26,000 people in the district in 1965, about 198,000 by 2023 and about 207,000 by 2025 (TÜİK), tourism having rewritten it; since 2006 new building has been required to be white, so the whole peninsula looks of a piece. The resorts themselves are scattered through the peninsula villages — Yalıkavak, Gümüşlük and Türkbükü each have their own character — while the town is the port and transport centre. Milas-Bodrum Airport lies north-east and ferries run to Kos in Greece. Newcomers most often go wrong by booking in the town, when the bays most people want are on the other side of the peninsula, half an hour or more by road.",
    layout:
      "The town curves around Bodrum Bay, with Bodrum Castle (Castle of St. Peter) standing on a headland at the center of the harbor, dividing it into east and west bays; the surrounding peninsula holds resort towns such as Turgutreis and Yalıkavak.",
    gettingAround:
      "Milas–Bodrum Airport (BJV) is about 32 km in a straight line from the town center; taxis, rental cars and ferries are the main ways to get around, and reaching other resort towns on the peninsula usually requires driving or a local bus.",
    culture:
      "The official language is Turkish. Bodrum is one of Turkey's more internationally minded resort towns with relatively relaxed dress norms; mosques still require shoes off and headscarves for women. Restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "Bodrum Castle (Castle of St. Peter, former home of the underwater archaeology museum); the Ancient Theatre of Halicarnassus; the Bodrum Windmills (a favorite sunset spot); and a traditional wooden gulet cruise around the surrounding bays.",
    whenAndTips:
      "May to October is Bodrum's peak season; July and August are hot but bring the liveliest beach atmosphere. Book gulet day trips in advance and try to head out before the midday heat.",
  },
  pamukkale: {
    // 回扫 sources（2026-09-15 核实，非人口六段回扫，content-verifier）: howItWorks：台地旅馆与公路拆除年代查不到一手来源，删去「20 世纪 90 年代」
    identity:
      "Pamukkale ('Cotton Castle') is a geothermal landscape in southwestern Turkey renowned for its brilliant white travertine terraces, located in Denizli Province; together with the hilltop ancient city of Hierapolis it forms a UNESCO World Heritage site.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Pamukkale (Turkey; in Denizli Province, the name meaning cotton castle; travertine terraces deposited by mineral water from hot springs, with 17 springs ranging from about 35 °C to 100 °C; the ancient Greek city of Hierapolis built above the terraces as a thermal spa, with theatre and necropolis, important in the Phrygian, Roman and Byzantine periods and an early Christian centre; Hierapolis-Pamukkale inscribed by UNESCO in 1988 for both cultural and natural value; over two million visitors a year, with UNESCO and local authorities regulating water flow and closing sections in turn to let the formations regenerate)
    howItWorks:
      "Pamukkale lies in Denizli Province in Turkey and its name means cotton castle; Denizli is run as a metropolitan municipality whose boundary matches the province, with local affairs handled at metropolitan and district level. The white terraces are made by water: seventeen springs rise on this slope at temperatures from about 35°C to near boiling, carrying dissolved calcium carbonate that precipitates as carbon dioxide escapes at the surface, building travertine terraces layer by layer — so this snow is stone, and still growing. Above the terraces stands the ancient Greek city of Hierapolis, built from the second century BC as a thermal spa, its theatre and vast necropolis still standing, and an important early Christian site. Hierapolis-Pamukkale was inscribed as World Heritage in 1988 for both cultural and natural value. To protect the travertine, the hotels and the road built on the terraces were later removed, visitors now walk barefoot along one marked path, and the authorities close sections in rotation and regulate the flow of water so the deposits can recover. Newcomers most often go wrong by expecting to bathe anywhere, when only one marked line may be walked.",
    layout:
      "The Pamukkale terraces sit about 20 km north of the city of Denizli, with the ruins of Hierapolis atop the terrace and the town of Pamukkale at the foot of the hill providing accommodation and dining for visitors.",
    gettingAround:
      "Denizli Çardak Airport (DNZ) is about 65 km from Pamukkale; taxis and local buses are the main way to get around, and a minibus from central Denizli to Pamukkale takes about 30 to 40 minutes.",
    culture:
      "The official language is Turkish. Visitors must walk barefoot in the travertine pools to protect the geological formations, and some areas get crowded, so arriving early helps avoid tour groups. Restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "The Pamukkale travertine terraces (walking barefoot through the stepped thermal pools); the ruins of ancient Hierapolis (Roman baths, a theatre and necropolis); and Cleopatra's Antique Pool (said to be where Cleopatra once bathed, open for a paid swim).",
    whenAndTips:
      "Sunrise or late afternoon brings fewer crowds and softer light for photos; midday summer heat is intense and the terraces reflect strong sunlight, so bring sun protection and avoid the midday hours if possible.",
  },
  trabzon: {
    // 零改动留痕（2026-09-10）：TZX 机场代码现行有效；前 756 年米利都殖民地特拉佩祖斯、1204 年第四次十字军后的
    //   特拉比松帝国、1461 年入奥斯曼——均为广泛记载的前现代史，未涉现代议题。
    // identity sources: 人口：identity 的「逾 80 万」是**省**人口（TÜİK 2025 823,323），howItWorks 的「约 33.5 万」是**中心区奥尔塔希萨尔**（2025 年 335,116）——两个都对，原来只是都没写口径，并排读像打架。2026-09-10 核。
    identity:
      "Trabzon is a major port city on Turkey's eastern Black Sea coast, with a provincial population of over 820,000 in 2025 (TÜİK; Trabzon Province has matched the metropolitan boundary since 2014); historically a port on a Silk Road branch and the capital of the Byzantine-era Empire of Trebizond, it is the core gateway for exploring the Black Sea mountains.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Trabzon (Turkey; city and capital of Trabzon Province on the north-eastern Black Sea coast, urban population about 335,000; founded in 756 BC as the Greek colony Trapezus, capital of the Empire of Trebizond, a successor state of Byzantium after the Fourth Crusade of 1204, until Ottoman rule began in 1461; the Hagia Sophia of Trabzon; Sumela Monastery about 45 km away at Maçka; steep mountains behind the coast and the wettest region of Turkey; hazelnuts and tea the main exports, anchovies known throughout Turkey as hamsi; Uzungöl; Trabzonspor; Trabzon Airport)
    howItWorks:
      "Trabzon is the capital of Trabzon Province on the south-eastern shore of the Black Sea in Turkey with about 335,000 people in 2025 in Ortahisar, the central district that forms the urban core (TÜİK); Trabzon is run as a metropolitan municipality whose boundary matches the province, with local affairs handled at metropolitan and district level. The ground sets the city's shape: the Pontic mountains rise steeply close to the shore and the only usable flat land is a narrow coastal strip, so the city stretches along the coast and climbs the slope in terraces, with roads and tunnels part of daily life. It was founded in 756 BC as the Greek colony of Trapezus, became the capital of the Empire of Trebizond, a successor state of Byzantium after the Fourth Crusade of 1204, and passed under Ottoman rule in 1461; the thirteenth-century Hagia Sophia survives, and Sumela Monastery is set into a cliff about 45 km south at Maçka. This is the wettest region of Turkey, its slopes planted thickly with tea and hazelnuts, the two main exports; the Black Sea anchovy, called hamsi in Turkish, is the food the city is known for. Uzungöl lies in the mountains to the south. Newcomers most often go wrong by expecting the Mediterranean coast, when the Black Sea shore is wet, cloudy and steep.",
    layout:
      "The city stretches along the Black Sea coast, with its old quarter preserving Byzantine-era landmarks such as the Hagia Sophia of Trabzon; the mountains inland hold sites including the Sümela Monastery and Lake Uzungöl.",
    gettingAround:
      "Trabzon Airport (TZX) is about 6.2 km in a straight line from the city center; taxis and buses are the main way to get around the city, while reaching Sümela Monastery or Uzungöl usually requires a private car or local tour, each about 1 to 2 hours away.",
    culture:
      "The official language is Turkish, and the local Black Sea dialect and customs are distinctive. The Black Sea coast around Trabzon is generally humid and rainy, so pack rain gear; mosques still require shoes off and headscarves for women. Restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "Sümela Monastery (a Byzantine-era Greek Orthodox monastery built into a cliff face); the Hagia Sophia of Trabzon (with surviving Byzantine frescoes); the Atatürk Kiosk; and Lake Uzungöl (a mountain lake in the Black Sea highlands, ringed with trout restaurants).",
    whenAndTips:
      "June to September brings relatively warm, drier weather, well suited to visiting Sümela and Uzungöl; the Black Sea region is rainy year-round, so carry rain gear, and allow extra time on the winding mountain roads.",
  },
  konya: {
    // 零改动留痕（2026-09-10）：KYA 机场代码现行有效。identity 的「因苏菲派诗人鲁米与旋转苦行僧传统闻名，是重要的
    //   宗教文化中心」经专项复核为**客观史实／文旅表述**，与伊兹密尔那句「相对世俗开放」的国内比较评价不同，
    //   ✅ 不在红线之内，不改。
    // identity sources: 人口：TÜİK 2025 科尼亚省 2,343,409。**howItWorks 早就写清了口径、identity 没跟上**——C6-h「注释／另一段写对了，这一段没同步」的又一例。「宗教文化中心」是客观史实表述，与伊兹密尔那句国内比较评价不同，不踩红线、保留。2026-09-10 核。
    identity:
      "Konya is a major city in Central Anatolia with a provincial population of over 2.34 million in 2025 (TÜİK; the province matches the metropolitan boundary); historically the capital of the Seljuk Sultanate in Anatolia, it is renowned for the Sufi poet Rumi and the whirling dervish tradition, and is an important religious and cultural center in Turkey.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Konya (Turkey; city and capital of Konya Province, the largest province of Turkey by area, the metropolitan municipality counting 2,330,024 in 2024 and the sixth most populous city in Turkey; historically Iconium, capital of the Seljuk Sultanate of Rum in the 12th and 13th centuries with its Seljuk architecture; Rumi, called Mevlâna, spent his last years here and his turquoise-domed tomb is the chief visitor site, with authentic sema performances each Saturday at the Mevlana Cultural Centre and the Şeb-i Arûs in December; on the south-western edge of the Central Anatolian Plateau in Turkey's largest plain, a cold semi-arid climate; among the Anatolian Tigers economically; high-speed rail to Ankara, Istanbul and Karaman; Çatalhöyük nearby; etli ekmek)
    howItWorks:
      "Konya is the capital of Konya Province, the largest province of Turkey by area; it is run as a metropolitan municipality whose boundary matches the province, and the 2,343,409 people counted in 2025 are that whole area — the figure includes wide farming country rather than the city alone, of which the urban area is about half, sixth largest in the country. The city stands on the great plain at the south-western edge of the Central Anatolian Plateau in a cold semi-arid climate, cold in winter, hot in summer and dry; this plain is Turkey's largest grain district, wheat and sugar beet its mainstays, and the city's commercial energy places it among the Anatolian Tigers. In the twelfth and thirteenth centuries it was the capital of the Seljuk Sultanate of Rum, and the Seljuk mosques and madrasas in town remain from that time. The thirteenth-century Sufi poet Rumi spent his last years here, and his turquoise-domed tomb is the chief place visitors come to, with formal performances of the whirling sema at the cultural centre each Saturday and the Şeb-i Arûs commemoration in December. High-speed rail runs to Ankara and Istanbul, and Çatalhöyük lies about 40 km south-east. Newcomers most often go wrong by judging the city's size from the metropolitan figure, when that number covers the province.",
    layout:
      "The Mevlana Museum, housing Rumi's tomb, is the old city's central landmark, surrounded by Seljuk-era buildings such as the Alaeddin Mosque and the İnce Minaret Museum, forming the core of Konya's historic quarter.",
    gettingAround:
      "Konya Airport (KYA) is about 18 km by road from the city center; the city has a light-rail and bus network, and reaching surrounding archaeological sites such as Çatalhöyük usually requires a private car or local tour.",
    culture:
      "The official language is Turkish. Konya is one of Turkey's more religiously conservative cities, so relatively modest dress is advisable; shoes must be removed at the Mevlana Museum and mosques, and women should carry a headscarf. Restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "The Mevlana Museum (Rumi's tomb and a collection of Mevlevi Order artifacts); a whirling dervish (Sema) ceremony, held regularly or during Rumi's annual December commemoration week; the Alaeddin Mosque; and the İnce Minaret Museum, a showcase of Seljuk architecture.",
    whenAndTips:
      "A formal whirling dervish ceremony can be seen during Rumi's death-anniversary commemoration week (Şeb-i Arus) in mid-December, though it draws crowds and tickets should be booked ahead; April to June and September to October offer the most pleasant travel weather.",
  },
  bursa: {
    // 回扫 sources（2026-09-15 核实，非人口六段回扫，content-verifier）: identity / whenAndTips：迁都埃迪尔内年份多说，写 1360 年代；渡轮到达港为古泽尔亚勒（近穆丹亚）或班德尔马，耶尼卡帕是伊斯坦布尔一侧出发码头
    // 零改动留痕（2026-09-10）：howItWorks 段全篇没有写人口数字，与其余五城的体例不一致，但**不是错误**，本轮不补——
    //   补数字要连口径一起写，等下一轮连同布尔萨城区口径（三个中心区）一起查清再补。
    //   1326 年攻取、1360 年代迁都埃迪尔内、2014 年「布尔萨与朱马勒克兹克：奥斯曼帝国的诞生」列入 UNESCO：均核实无误。
    // identity sources: 人口：原文 216 万**量级就不对**——TÜİK 2025 布尔萨省 3,263,011。216 万接近三个中心区的城区规模，属把城区数当全市数用（C6-c）。「第四大」按省人口排名成立（伊斯坦布尔、安卡拉、伊兹密尔之后）。2 级转引 TÜİK。2026-09-10 核。
    identity:
      "Bursa is Turkey's fourth-largest city, with a provincial population of over 3.26 million in 2025 (TÜİK; the province matches the metropolitan boundary), and was the first capital of the Ottoman Empire (1326 to the 1360s); known as 'Green Bursa' for its many mosques and its proximity to the Uludağ ski resort.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Bursa (Turkey; city and capital of Bursa Province, the fourth most populous city in Turkey and second in the Marmara Region after Istanbul; captured from the Byzantines in 1326 and the capital of the early Ottoman state until the 1360s, when the capital moved to Edirne; Bursa and Cumalıkızık: the Birth of the Ottoman Empire, UNESCO World Heritage 2014; the Grand Mosque with twenty domes in four rows of five, the Green Mosque and Green Tomb, the Koza Han silk market; Mount Uludağ above the city with skiing and thermal springs used since Roman times; the largest production centre of the Turkish automotive industry with Fiat, Renault and Bosch, plus textiles and food; called Yeşil Bursa, green Bursa)
    howItWorks:
      "Bursa is the capital of Bursa Province, the fourth most populous city in Turkey by population of its metropolitan municipality, and the second in the Marmara Region after Istanbul; Bursa is run as a metropolitan municipality whose boundary matches the province, with local affairs handled at metropolitan and district level. Ottoman forces took the city from the Byzantines in 1326, and until the 1360s it was the first major capital of the Ottoman state before the capital moved to Edirne; in 2014 Bursa and Cumalıkızık: the Birth of the Ottoman Empire was inscribed as World Heritage, covering the Grand Mosque, the Green Mosque and Green Tomb and the old village of Cumalıkızık on the slope. The Grand Mosque is roofed by twenty domes in four rows of five, and the Koza Han was the centre of the silk trade — Bursa was long the silk-weaving town at the western end of the Silk Road. The city presses against the northern slope of Mount Uludağ, which carries a ski area and a cable car, and its hot springs have been used since Roman times, so bathhouses and parks are many and the city calls itself green Bursa. Today it is the largest production centre of the Turkish automotive industry, with Fiat, Renault and Bosch plants. Newcomers most often go wrong by treating it as a day trip from Istanbul, when it is a large city of industry and heritage in its own right.",
    layout:
      "The old town is dense with early Ottoman buildings such as the Grand Mosque and the Green Mosque, with the area around Koza Han serving as the traditional silk-trading market; Uludağ rises just south of the city, its summit home to a ski resort.",
    gettingAround:
      "Bursa Yenişehir Airport (YEI) is about 45 km from the city center, and many visitors instead take a sea ferry from Istanbul followed by a short drive; the city has a light-rail network, and a cable car runs directly to the top of Uludağ.",
    culture:
      "The official language is Turkish. Visiting the Grand Mosque, the Green Mosque and other religious sites requires shoes off, and women should carry a headscarf and wear clothing covering the shoulders and knees. Restaurant tipping is not compulsory: leave a little if the service was good, and check first whether the bill already includes a service charge.",
    seeAndDo:
      "The Grand Mosque (Ulu Cami, with 20 domes and a central fountain); the Green Mosque (an early Ottoman showcase decorated in blue-green tiles); Koza Han (a traditional silk market, and a good spot to try Bursa's İskender kebab); and the Uludağ cable car and ski resort.",
    whenAndTips:
      "December to March is peak ski season on Uludağ; April to June and September to October bring pleasant weather well suited to exploring the old town's mosques. A high-speed ferry from Istanbul's Yenikapı terminal to Güzelyalı (near Mudanya) or Bandırma, followed by a short drive, is usually faster than the full overland route.",
  },
};
