import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "greece-overview": {
    // identity sources: ΕΛΣΤΑΤ《Στοιχεία Εκτιμώμενου Πληθυσμού (1.1.2025)》：10,372,335 人。https://www.statistics.gr/documents/20181/3cdc6530-6451-1ed1-d866-bbfb5eeb3e1f
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Greece occupies the southern tip of the Balkan Peninsula in south-eastern Europe, covering about 132,000 km² with an estimated resident population of about 10.37 million as of January 2025 (ELSTAT). About 80% of the country is mountainous, with the Pindus range running the length of the western mainland; the coast is scattered with some 6,000 islands and islets, of which about 227 are inhabited, giving Greece an unusually long and intricate coastline.",
    layout:
      "Broadly divided into: Attica (Athens, the capital and largest city), Macedonia (Thessaloniki, Greece's second city), Thessaly (Volos, home to Meteora), Epirus (Ioannina, gateway to the Pindus mountains), the Peloponnese (Nafplio and Kalamata, dense with classical sites), Crete (Heraklion and Chania, Greece's largest island), the Ionian Islands (Corfu), and the Aegean Islands (Rhodes, Santorini and others).",
    gettingAround:
      "A dense domestic flight network links Athens and Thessaloniki with the main islands and is a common way to cover long distances quickly; Piraeus is the country's largest ferry hub, connecting the Aegean and Ionian islands. Intercity travel on the mainland relies mainly on long-distance coaches (KTEL); the rail network is comparatively limited, covering mainly the Athens–Thessaloniki line. Driving is on the right. The climate is Mediterranean — hot, dry summers and mild, wetter winters, with cold, snowy winters in the mountains. Power is 230V, with the European two-round-pin plug.",
    culture:
      "The official language is Greek; English is widely spoken in tourist areas. Meal times run late, with dinner often starting after 9pm; tipping around 5–10% of the bill, or rounding up, is customary. Most residents are Greek Orthodox, and major festivals follow the Orthodox calendar; Orthodox Easter often falls on a different date from the Catholic/Protestant Easter. Dress modestly when visiting Orthodox churches and monasteries, covering shoulders and knees; some monasteries (such as those at Meteora) keep wraps or long skirts at the entrance for visitors in shorts or short skirts.",
    seeAndDo:
      "Classical sites: the Acropolis of Athens, Delphi, Mycenae, Olympia. Natural landforms: the Santorini caldera, the Meteora pinnacles, the Samaria and Vikos gorges. Islands: Crete, the medieval old town of Rhodes, Corfu's old town. Ferry island-hopping is a classic way to experience the Aegean islands.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather and fewer crowds, the best season for touring the mainland and islands; July–August is hot and the peak tourist season, with accommodation prices rising sharply on popular islands. In winter (November–March), tourist facilities on many islands close seasonally and ferry schedules are reduced, so check current flight and ferry timetables before travelling. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits — check the Greek Ministry of Foreign Affairs and current Schengen regulations for specifics.",
  },

  athens: {
    // identity sources: 希腊统计局（ΕΛΣΤΑΤ / ELSTAT）**2021 年人口普查**常住人口（μόνιμος πληθυσμός），基准日 2021-10-22，最终结果 2023-03-17 公布、政府公报 ΦΕΚ 2802/Β'（2023-04-26）确认。
    //   **希腊市镇（δήμος）人口只随十年一次的人口普查更新**（欧盟 763/2008 条例），ELSTAT 的年度估计只做到大区（Περιφέρεια）一级、**不下探到市镇** —— 所以 2021 年的数在 **2031 年**之前就是最新一期，不要因为「隔了几年」就当成过期。
    //   口径分三档，正文各处要写明是哪一档：**城市本身/聚落（οικισμός）< 市镇（δήμος，2011 年 Kallikratis 改革后扩大）< 城区（πολεοδομικό συγκρότημα）/ 地区单位（περιφερειακή ενότητα）**。
    //   本批除雅典大区那条取自 ELSTAT 官方普查结果页（census2021results.statistics.gr，**级别 1**）外，其余数字多经希腊语维基对 ELSTAT / ΦΕΚ 的转述核对，**级别 2**。
    //   雅典—比雷埃夫斯城区（Πολεοδομικό Συγκρότημα Αθηνών–Πειραιώς）2021 年普查 3,059,764，占阿提卡大区的 80.2%。原文数值合理但既没年份也没写明是哪一档口径。
    identity:
      "Athens is Greece's capital and largest city, the centre of the Attica region, with an urban-area population of about 3.06 million (2021 census, Athens–Piraeus urban area). It is one of Europe's oldest cities and an important birthplace of classical democracy, philosophy and drama.",
    // howItWorks sources: 希腊统计局（ΕΛΣΤΑΤ / ELSTAT）**2021 年人口普查**常住人口（μόνιμος πληθυσμός），基准日 2021-10-22，最终结果 2023-03-17 公布、政府公报 ΦΕΚ 2802/Β'（2023-04-26）确认。
    //   **希腊市镇（δήμος）人口只随十年一次的人口普查更新**（欧盟 763/2008 条例），ELSTAT 的年度估计只做到大区（Περιφέρεια）一级、**不下探到市镇** —— 所以 2021 年的数在 **2031 年**之前就是最新一期，不要因为「隔了几年」就当成过期。
    //   口径分三档，正文各处要写明是哪一档：**城市本身/聚落（οικισμός）< 市镇（δήμος，2011 年 Kallikratis 改革后扩大）< 城区（πολεοδομικό συγκρότημα）/ 地区单位（περιφερειακή ενότητα）**。
    //   本批除雅典大区那条取自 ELSTAT 官方普查结果页（census2021results.statistics.gr，**级别 1**）外，其余数字多经希腊语维基对 ELSTAT / ΦΕΚ 的转述核对，**级别 2**。
    //   **这条数字是错的**：阿提卡大区 2021 年普查常住人口官方数为 **3,814,064**（约 381 万），不是 364 万。已由 ELSTAT 官方普查结果页直接确认（https://census2021results.statistics.gr/perifereies/attiki ，**级别 1**）。
    howItWorks:
      "The Athens people speak of is, administratively, only the Municipality of Athens of about 39 km², with about 643,000 people in 2021 and seven municipal districts; the urban area holds about 3.06 million and the Attica region, Piraeus included, about 3.81 million at the 2021 census, assembled from some 58 municipalities each with its own mayor and council. Since the Kallikratis reform of 2011 the region has had an elected governor responsible for transport planning and regional affairs, the municipalities run waste, local roads and social services, and police and schools belong to the state. The city fills the Attica basin ringed by four mountains: Syntagma, Plaka and Monastiraki are the centre, the Acropolis and Lycabettus the two points of reference, Kifisia to the north the wealthy suburb, and the west and the port districts the working-class side. The six- or seven-storey post-war apartment block, the polykatoikia, is the building block of the whole city. Addresses give street, number and postcode, and locals place things by neighbourhood name. Three metro lines, trams and the suburban railway to the airport serve the urban area. Newcomers most often go wrong by taking the Municipality of Athens for the city, when it holds only a fifth of the urban population.",
    layout:
      "The Acropolis hill is the city's geographic and historic centre, with the Parthenon crowning it above the city; below lies the old Plaka quarter, dense with narrow streets and neoclassical buildings. Syntagma Square anchors the modern city centre, home to the Greek Parliament and the Tomb of the Unknown Soldier. Piraeus is Athens's gateway port, from which most ferries to the mainland and Aegean islands depart.",
    gettingAround:
      "The airport lies about 20 km south-east of the centre, linked by metro and suburban rail. Athens's metro, tram and bus network covers the main districts, and the old town around the Acropolis is walkable. The climate is Mediterranean — hot, dry summers (June–August) and mild, wetter winters, with occasional brief snowfall. Power is 230V, European two-round-pin plug.",
    culture:
      "The official language is Greek; English is widely spoken in tourist areas. Meal times run late, with dinner often starting after 9pm; tipping around 5–10% of the bill, or rounding up, is customary. Most residents are Greek Orthodox, and major festivals follow the Orthodox calendar.",
    seeAndDo:
      "The Acropolis, the Parthenon and the Acropolis Museum; the Plaka old quarter; Syntagma Square and the changing of the guard; the National Archaeological Museum; day trips from Piraeus to Aegean islands such as Hydra and Poros.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather and fewer crowds; July–August is hot and the peak season — visit sites like the Acropolis early in the morning to avoid the heat and crowds. Athens is the main transport hub for exploring mainland Greece and for onward travel to the Aegean islands and Crete.",
  },

  thessaloniki: {
    // identity sources: 希腊统计局（ΕΛΣΤΑΤ / ELSTAT）**2021 年人口普查**常住人口（μόνιμος πληθυσμός），基准日 2021-10-22，最终结果 2023-03-17 公布、政府公报 ΦΕΚ 2802/Β'（2023-04-26）确认。
    //   **希腊市镇（δήμος）人口只随十年一次的人口普查更新**（欧盟 763/2008 条例），ELSTAT 的年度估计只做到大区（Περιφέρεια）一级、**不下探到市镇** —— 所以 2021 年的数在 **2031 年**之前就是最新一期，不要因为「隔了几年」就当成过期。
    //   口径分三档，正文各处要写明是哪一档：**城市本身/聚落（οικισμός）< 市镇（δήμος，2011 年 Kallikratis 改革后扩大）< 城区（πολεοδομικό συγκρότημα）/ 地区单位（περιφερειακή ενότητα）**。
    //   本批除雅典大区那条取自 ELSTAT 官方普查结果页（census2021results.statistics.gr，**级别 1**）外，其余数字多经希腊语维基对 ELSTAT / ΦΕΚ 的转述核对，**级别 2**。
    //   **这是标签贴错**：80 万对应的是塞萨洛尼基**城区**（Πολεοδομικό συγκρότημα，2021 年 802,392），不是「都会区」；更大一档的塞萨洛尼基地区单位（Περιφερειακή Ενότητα）2021 年是 1,091,424。**同条目 howItWorks 段自己就写着「城区约80万、都会区约110万」**，两段互相矛盾。
    identity:
      "Thessaloniki is Greece's second-largest city and the centre of the Macedonia region, with an urban-area population of about 800,000 (2021 census; the wider regional unit holds about 1.09 million). Set on the Thermaic Gulf, it is an important port and cultural centre in northern Greece and was, for much of the Byzantine period, the empire's second city after Constantinople.",
    // howItWorks sources: 希腊统计局（ΕΛΣΤΑΤ）2021 年人口普查常住人口（μόνιμος πληθυσμός），基准日 2021-10-22，
    //   最终结果 2023-03-17 公布、政府公报 ΦΕΚ 2802/Β'（2023-04-26）确认。
    //   **希腊市镇人口只随十年一次的普查更新**（欧盟 763/2008 条例），ELSTAT 的年度估计只做到大区一级、
    //   不下探到市镇 —— 所以 2021 年的数在 **2031 年**之前就是最新一期。
    //   口径分档：聚落 < 市镇（δήμος）< 城区（πολεοδομικό συγκρότημα）< 地区单位（περιφερειακή ενότητα）。
    //   **希腊官方口径里没有「都会区」这一档** —— identity 段此前已改对，howItWorks 段漏改，2026-09-08 补上。
    howItWorks:
      "Thessaloniki is the capital of the Central Macedonia region and Greece's second city; the Municipality of Thessaloniki itself covers only about 19 km² with about 320,000 people in the 2021 census, while the urban area with Kalamaria, Pylaia and other municipalities holds about 800,000 and the wider Thessaloniki regional unit about 1.09 million, each municipality with its own mayor and council, the region with an elected governor, and police and schools under the state. The city spreads along its bay: after the fire of 1917, Hébrard's plan remade the centre as a grid on the axis of Aristotelous Square, the waterfront and the White Tower are the point of reference, and Ladadika is an old warehouse quarter turned dining district; the Upper Town on the slope keeps its Byzantine walls and old lanes, a group of early Christian and Byzantine buildings was inscribed as World Heritage in 1988, and Ottoman mosques, synagogues and churches stand in the same city. Aristotle University is the largest in Greece, and its students make the city younger than Athens. The first metro line opened in November 2024; before that there were only buses. Addresses give street, number and postcode. Newcomers most often go wrong by taking Thessaloniki for a smaller Athens, when it has a plan, an accent and a rhythm of its own.",
    layout:
      "The White Tower is the city's seafront landmark, and the waterfront promenade running along the coast is the main gathering place for locals. Aristotelous Square anchors the commercial centre; Roman-era remains such as the Roman Forum and the Arch of Galerius are scattered through the old town. The upper town (Ano Poli) preserves traditional stone houses and stretches of Byzantine walls.",
    gettingAround:
      "The airport lies about 16 km south-east of the centre, linked by bus and taxi. The city bus network covers the main districts, and the seafront area is good for walking and cycling. The climate is Mediterranean, with hot summers and winters slightly cooler than Athens, with occasional snow.",
    culture:
      "The official language is Greek. As a major university city, Thessaloniki has a lively youth and café culture. Meal times run late, with dinner often after 9pm; tipping around 5–10% of the bill is customary. The city has long been a crossroads of cultures, still visible in its Byzantine- and Ottoman-era architecture.",
    seeAndDo:
      "The White Tower and the seafront promenade; the Arch of Galerius and the Rotunda; the Paleochristian and Byzantine Monuments of Thessaloniki, including the Church of Saint Demetrius (a UNESCO World Heritage site); the traditional streets of the upper town; day trips to the beaches of the Halkidiki Peninsula.",
    whenAndTips:
      "May–September is best for outdoor and waterfront activities. As the hub of northern Greece, Thessaloniki is an important stop en route to Meteora, the Halkidiki Peninsula, and the wider Macedonia and Thessaly regions.",
  },

  heraklion: {
    // identity sources: 希腊统计局（ΕΛΣΤΑΤ / ELSTAT）**2021 年人口普查**常住人口（μόνιμος πληθυσμός），基准日 2021-10-22，最终结果 2023-03-17 公布、政府公报 ΦΕΚ 2802/Β'（2023-04-26）确认。
    //   **希腊市镇（δήμος）人口只随十年一次的人口普查更新**（欧盟 763/2008 条例），ELSTAT 的年度估计只做到大区（Περιφέρεια）一级、**不下探到市镇** —— 所以 2021 年的数在 **2031 年**之前就是最新一期，不要因为「隔了几年」就当成过期。
    //   口径分三档，正文各处要写明是哪一档：**城市本身/聚落（οικισμός）< 市镇（δήμος，2011 年 Kallikratis 改革后扩大）< 城区（πολεοδομικό συγκρότημα）/ 地区单位（περιφερειακή ενότητα）**。
    //   本批除雅典大区那条取自 ELSTAT 官方普查结果页（census2021results.statistics.gr，**级别 1**）外，其余数字多经希腊语维基对 ELSTAT / ΦΕΚ 的转述核对，**级别 2**。
    //   伊拉克利翁**城市本身/聚落**口径 2021 年普查 145,440。同条目 howItWorks 的「约18万」是**市镇**口径（245 km²，179,302）—— **两个数字都对，只是口径不同**，不是矛盾；缺的是年份与口径标注。
    identity:
      "Heraklion is Crete's largest city and capital, with a city population of about 145,000 (2021 census). It is the island's transport and economic hub, and was an important Mediterranean trading port under Venetian rule.",
    // howItWorks sources: Wikipedia (2026-09): Heraklion (municipality ~245 km², 179,302 2021; Crete regional capital; Venetian walls; airport 5 km east, second busiest; Kastelli under construction; Knossos 5 km)
    howItWorks:
      "Heraklion is the capital of the Crete region and the largest city on the island; the region has an elected governor, and the municipality its own mayor and council, covering about 245 km² with about 179,000 people in the 2021 census. The old town lies within the Venetian walls, with the Koules fortress guarding the old harbour and the Morosini fountain and the Loggia at the centre, and the post-war quarters beyond the walls. The port is the ferry hub for Piraeus and the Aegean islands; Nikos Kazantzakis Airport, 5 km east, is Greece's second-busiest by passengers, and a new airport at Kastelli is under construction to replace it. Knossos lies about 5 km south of the city, and a campus of the University of Crete is in town. Olives and grapes are the industry beyond tourism. There is no rail transit, and buses and cars carry the traffic. Addresses give street, number and postcode. Newcomers most often go wrong by taking Heraklion for a staging post for Knossos, when it is an island capital with an old town and a harbour life of its own.",
    layout:
      "The Venetian harbour and the Koules Fortress are the seafront landmarks; 1866 Street in the old town is the main shopping street. The Palace of Knossos, a major archaeological site on Crete, lies about 5 km south of the city.",
    gettingAround:
      "The airport lies about 5 km east of the city. City buses connect the main sights, and the old town is walkable. The climate is Mediterranean, with hot, dry summers and mild, wetter winters — among the warmer regions of Greece.",
    culture:
      "The official language is Greek. Cretans take particular pride in the island's traditional food (olive oil, dakos salad) and customs. Meal times run late; tipping around 5–10% of the bill is customary.",
    seeAndDo:
      "The Palace of Knossos; the Heraklion Archaeological Museum, home to major Minoan artefacts; the Venetian harbour and Koules Fortress; day trips to the Lasithi Plateau, the White Mountains and the Samaria Gorge.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather; July–August is hot but the peak island season. Heraklion is the main gateway for exploring the rest of Crete, including Chania and the Lasithi Plateau.",
  },

  chania: {
    // identity sources: 希腊统计局（ΕΛΣΤΑΤ / ELSTAT）**2021 年人口普查**常住人口（μόνιμος πληθυσμός），基准日 2021-10-22，最终结果 2023-03-17 公布、政府公报 ΦΕΚ 2802/Β'（2023-04-26）确认。
    //   **希腊市镇（δήμος）人口只随十年一次的人口普查更新**（欧盟 763/2008 条例），ELSTAT 的年度估计只做到大区（Περιφέρεια）一级、**不下探到市镇** —— 所以 2021 年的数在 **2031 年**之前就是最新一期，不要因为「隔了几年」就当成过期。
    //   口径分三档，正文各处要写明是哪一档：**城市本身/聚落（οικισμός）< 市镇（δήμος，2011 年 Kallikratis 改革后扩大）< 城区（πολεοδομικό συγκρότημα）/ 地区单位（περιφερειακή ενότητα）**。
    //   本批除雅典大区那条取自 ELSTAT 官方普查结果页（census2021results.statistics.gr，**级别 1**）外，其余数字多经希腊语维基对 ELSTAT / ΦΕΚ 的转述核对，**级别 2**。
    //   哈尼亚**城市本身**口径 2021 年普查 54,559。同条目 howItWorks 的「约11万」是**市镇**口径（351 km²，111,375），两档都对。原文「约5万」略低估且没有年份。
    identity:
      "Chania is the main city of western Crete, with a city population of about 55,000 (2021 census). Its Venetian-era harbour and buildings are well preserved, and it is often considered one of Crete's most atmospheric cities.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Chania (municipality 351 km² after Kallikratis 2011; 111,375 2021; Chania regional unit capital, Crete; Venetian harbour, lighthouse 1864; Kastelli/Splantzia/Topanas; capital of Crete until 1971; airport 14 km Akrotiri; ferry from Souda to Piraeus; Samaria ~45 km)
    howItWorks:
      "Chania is the capital of the Chania regional unit of Crete, its municipality enlarged to about 351 km² by the Kallikratis reform of 2011, with about 111,000 people in the 2021 census; the municipality is governed by an elected mayor, the region of Crete by an elected governor, and police and schools belong to the state. The old town wraps around the Venetian harbour, the lighthouse of 1864 at the end of the mole, Kastelli, Splantzia and Topanas its quarters, and until 1971 this was the capital of Crete; the new town lies on the flat south of the old, the airport 14 km east on the Akrotiri peninsula, the port at Souda Bay has the night ferry to Piraeus, the Samaria Gorge lies about 45 km south and the beaches of Balos and Elafonisi sixty or seventy kilometres west. Newcomers most often go wrong by taking the Venetian harbour for Chania, when it is one corner of the old town and the municipality reaches to the foot of the White Mountains.",
    layout:
      "The Venetian harbour is the heart of the city, its ring of coloured buildings, lighthouse and mosque forming an iconic view. The old town's narrow, winding lanes preserve a mix of Venetian and Ottoman architecture; the area west of the old town is a mainly residential quarter.",
    gettingAround:
      "The airport lies about 14 km north-east of the centre. The old town is best explored on foot, with bus and taxi links to the airport and harbour. The climate is Mediterranean, with hot, dry summers and mild, wetter winters.",
    culture:
      "The official language is Greek. Chania preserves Crete's traditional market culture — the central market hall near the old harbour, built in 1913, is still in use today. Meal times run late; tipping around 5–10% of the bill is customary.",
    seeAndDo:
      "The Venetian harbour and lighthouse; Chania's central market; the old town lanes and the remains of the old synagogue; day trips for hiking the Samaria Gorge, or to the White Mountains and Balos Beach.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather, and are also good months for hiking the Samaria Gorge (typically open May–October, subject to the national park's yearly announcement). Chania is the gateway to western Crete and the White Mountains.",
  },

  "rhodes-town": {
    // 零改动留痕（2026-09-10）：ZTH 不适用；罗德机场 RHO 代码现行有效、无更名。
    //   ✅ 零争议红线：奥斯曼／威尼斯／拜占庭统治史按「这段历史在城里留下了痕迹」这类定位性事实表述，无评价、
    //   未牵涉现存的希土／爱琴海／北马其顿争议 —— 留。与本库地形条目 `rhodes` 并排读一致。
    // identity sources: 人口：罗德市镇单元（即罗德城）**56,440（2021 年普查，ELSTAT）**。⚠️ 口径分层：2011 年起**整个罗德岛是一个市镇**（约 1400 km²、约 12.5 万人），罗德城只是其中的市镇单元。**专项核过「城 vs 岛」有没有混——没有混。** 与本库地形条目 `rhodes` 并排读无矛盾（那一条不含人口数字）。
    identity:
      "Rhodes Town is the capital of Rhodes, with a municipal-unit population of about 56,400 at the 2021 census (ELSTAT). Its medieval old town was fortified by the Knights Hospitaller between the 14th and 16th centuries and is one of Europe's best-preserved medieval walled towns.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Rhodes city (seat of the municipality of Rhodes covering the whole island since 2011, ~1,400 km², ~125,000; city ~56,000 2021; capital of the South Aegean region and Dodecanese; Old Town UNESCO 1988, Knights 1309–1523; Mandraki; airport 14 km Paradisi; ferries Piraeus; Lindos ~50 km; Turkey ~18 km)
    howItWorks:
      "Rhodes city is the main town of the island of Rhodes, which since 2011 has been one municipality of about 1,400 km² and 125,000 people governed by an elected mayor, the city itself about 56,000; it is also the capital of the South Aegean region and the Dodecanese, the region under an elected governor, and police and schools belonging to the state. Medieval walls enclose the Old Town, where the Knights of St John built the Street of the Knights and the Grand Master's Palace between 1309 and 1523, World Heritage since 1988, Mandraki harbour lies north of the walls where the Colossus is said to have stood; the new town and Elli beach lie north of the old, the airport 14 km south-west at Paradisi, Lindos about 50 km south, the Turkish coast about 18 km across the water, and the ferry to Piraeus takes a dozen hours. Newcomers most often go wrong by taking the Old Town for Rhodes, when the municipality is the whole island 80 km long and the Old Town one corner at its northern tip.",
    layout:
      "The medieval old town is fully enclosed by walls, with the Street of the Knights running through it, lined with buildings from the era of the Knights; the Palace of the Grand Master stands at the town's highest point. The new town, around Mandraki Harbour, is the modern commercial and port district.",
    gettingAround:
      "The airport lies about 14 km south-west of the centre. The old town is pedestrian, its narrow streets closed to vehicles; buses connect the new town. The climate is Mediterranean, one of the sunniest regions of Greece, with hot, dry summers and mild winters.",
    culture:
      "The official language is Greek. Rhodes was ruled successively by the Byzantines, the Knights Hospitaller, the Ottomans and Italy, and this layered history is visible throughout the town's architecture. Meal times run late; tipping around 5–10% of the bill is customary.",
    seeAndDo:
      "The medieval old town and the Palace of the Grand Master; the Street of the Knights; Mandraki Harbour, traditionally associated with the site of the Colossus of Rhodes; day trips to the Acropolis of Lindos and Mount Attavyros.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather; July–August is hot but the peak beach season. Rhodes Town is an important gateway to the Dodecanese islands.",
  },

  santorini: {
    identity:
      "Santorini (Thira) is one of the most iconic islands of the Cyclades, famous for the crescent-shaped caldera formed by a massive eruption around 1600 BCE; towns such as Fira and Oia sit atop caldera-rim cliffs about 300 m high.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Santorini/Thira (municipality ~90 km²; 15,480 2021; ~2 million visitors/yr; caldera from Minoan eruption ~1600 BC; Fira capital on the rim, Oia north, Kamari/Perissa black beaches east, Akrotiri; airport; Athinios port; cable car/donkeys from old port; wine)
    howItWorks:
      "Santorini is administratively one municipality, officially Thira, covering the whole island group of about 90 km² under an elected mayor, with about 15,000 permanent residents in the 2021 census and about 2 million visitors a year; the South Aegean region has an elected governor, and police and schools belong to the state. The island is the rim of a caldera left by the Minoan eruption some 3,600 years ago: Fira, the municipal seat, sits on the cliff top of the caldera, Oia at the northern tip, the black beaches of Kamari and Perissa on the other side along the east coast, and the Bronze Age site of Akrotiri at the southern end; the airport lies on the east coast, the ferry port of Athinios below the cliffs, the old port climbs to Fira by cable car or donkey, water comes from desalination and wine is the old industry. Newcomers most often go wrong by taking the white houses on the caldera side for the whole island, when the other side is flat black beach and vineyard, where most residents live.",
    layout:
      "Fira is the island's main town and administrative centre, its white-walled, blue-domed traditional Cycladic buildings strung along the caldera rim; Oia, at the island's north-western tip, is famed for its sunset views. The island's eastern coast is comparatively gentle, lined with black and red volcanic-sand beaches.",
    gettingAround:
      "The airport sits on the island's eastern side, about 7 km from Fira. Getting around relies mainly on buses, taxis or rental cars; the road between Fira and Oia winds along the caldera cliffs. The climate is Mediterranean, with hot, dry, windy summers and mild, wetter winters, when visitor numbers drop sharply and some facilities close seasonally.",
    culture:
      "The official language is Greek; tourism is highly developed on the island, and English is widely spoken. In peak season, crowds are dense, and the sunset viewpoints in Fira and Oia can get very busy. Tipping around 5–10% of the bill is customary.",
    seeAndDo:
      "The caldera-rim footpath from Fira to Oia (about 10 km); sunset viewing at Oia; the Bronze Age site at Akrotiri; the Red Beach and Black Beach; boat trips to the resurgent volcanic islet of Nea Kameni in the centre of the caldera.",
    whenAndTips:
      "April–June and September–October bring pleasant weather and comparatively fewer crowds; July–August is peak season, with high accommodation prices requiring advance booking. In winter (November–March) many tourist facilities close seasonally and ferry schedules are reduced accordingly.",
  },

  "corfu-town": {
    // identity sources: 希腊统计局（ΕΛΣΤΑΤ / ELSTAT）**2021 年人口普查**常住人口（μόνιμος πληθυσμός），基准日 2021-10-22，最终结果 2023-03-17 公布、政府公报 ΦΕΚ 2802/Β'（2023-04-26）确认。
    //   **希腊市镇（δήμος）人口只随十年一次的人口普查更新**（欧盟 763/2008 条例），ELSTAT 的年度估计只做到大区（Περιφέρεια）一级、**不下探到市镇** —— 所以 2021 年的数在 **2031 年**之前就是最新一期，不要因为「隔了几年」就当成过期。
    //   口径分三档，正文各处要写明是哪一档：**城市本身/聚落（οικισμός）< 市镇（δήμος，2011 年 Kallikratis 改革后扩大）< 城区（πολεοδομικό συγκρότημα）/ 地区单位（περιφερειακή ενότητα）**。
    //   本批除雅典大区那条取自 ELSTAT 官方普查结果页（census2021results.statistics.gr，**级别 1**）外，其余数字多经希腊语维基对 ELSTAT / ΦΕΚ 的转述核对，**级别 2**。
    //   科孚镇本身（Δημοτική Ενότητα Κερκυραίων，即 2019 年科孚岛一分为三前的老科孚市）2021 年普查 34,607。原文「约3万」偏低且没有年份。注意正文**没有**误用 2019 年后的「中央科孚市镇」（67,112）——口径本身是清晰的。
    identity:
      "Corfu Town is the capital of Corfu, with a town population of about 35,000 (2021 census). Its Venetian-era fortifications were built in stages between 1386 and 1797 and were inscribed as a UNESCO World Heritage site in 2007.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Corfu city/Kerkyra (seat of Central Corfu municipality since 2019; island ~610 km², ~99,000; city ~24,000–32,000 2021; capital of the Ionian Islands region; Old Town UNESCO 2007, Venetian fortresses, Liston, Spianada; never Ottoman; cricket; airport 3 km; Achilleion ~10 km; ferries Igoumenitsa)
    howItWorks:
      "Corfu city, Kerkyra, is the main town of Corfu, and since the island was split into three municipalities in 2019 it is the seat of Central Corfu municipality under an elected mayor, the city itself about 30,000 people and the island about 100,000; it is also the capital of the Ionian Islands region, which has an elected governor, while police and schools belong to the state. The Old Town lies on a peninsula between two Venetian fortresses, World Heritage since 2007, the Liston arcade and the Spianada its centre, the marks of Venetian, French and British rule laid over one another, cricket still played on the square, and Corfu the only part of Greece never under Ottoman rule; the airport lies 3 km south, the Achilleion about 10 km south, ferries sail to Igoumenitsa and Italy, and the Albanian coast lies a few kilometres across the water. Newcomers most often go wrong by taking Corfu city for Corfu, when the island runs 60 km and the resorts are scattered at its northern and southern ends.",
    layout:
      "The old town sits between two Venetian fortresses, the Old Fortress and the New Fortress, with a dense network of old-town streets in between. The Liston promenade, built in the style of Paris's Rue de Rivoli, is a city landmark; the Spianada is one of the largest squares in Europe, bordering the old town to the east.",
    gettingAround:
      "The airport lies about 3 km south of the centre. The old town is best explored on foot, with buses or rental cars covering the rest of the island. The climate is Mediterranean; being on the Ionian side, Corfu receives markedly more rainfall than the Aegean islands, keeping its vegetation green year-round.",
    culture:
      "The official language is Greek. Corfu was under Venetian rule for centuries, a history still visible in the town's architectural style and in some Italian loanwords. Meal times run late; tipping around 5–10% of the bill is customary.",
    seeAndDo:
      "The old town and its two Venetian fortresses; the Liston promenade and the Spianada; the Achilleion Palace; day trips to Paleokastritsa Bay and Mount Pantokrator.",
    whenAndTips:
      "May–September brings the most pleasant weather, when Corfu's lush greenery is especially appealing. Corfu Town is an important gateway to the Ionian Islands and a port for ferry routes to Italy and Albania.",
  },

  nafplio: {
    // identity sources: 希腊统计局（ΕΛΣΤΑΤ / ELSTAT）**2021 年人口普查**常住人口（μόνιμος πληθυσμός），基准日 2021-10-22，最终结果 2023-03-17 公布、政府公报 ΦΕΚ 2802/Β'（2023-04-26）确认。
    //   **希腊市镇（δήμος）人口只随十年一次的人口普查更新**（欧盟 763/2008 条例），ELSTAT 的年度估计只做到大区（Περιφέρεια）一级、**不下探到市镇** —— 所以 2021 年的数在 **2031 年**之前就是最新一期，不要因为「隔了几年」就当成过期。
    //   口径分三档，正文各处要写明是哪一档：**城市本身/聚落（οικισμός）< 市镇（δήμος，2011 年 Kallikratis 改革后扩大）< 城区（πολεοδομικό συγκρότημα）/ 地区单位（περιφερειακή ενότητα）**。
    //   本批除雅典大区那条取自 ELSTAT 官方普查结果页（census2021results.statistics.gr，**级别 1**）外，其余数字多经希腊语维基对 ELSTAT / ΦΕΚ 的转述核对，**级别 2**。
    //   纳夫普利翁镇本身 2021 年普查 14,532。原文数值吻合，缺的是年份与口径。
    identity:
      "Nafplio lies in the north-eastern Peloponnese, with a town population of about 14,500 (2021 census). It served as the first capital of the modern Greek state from 1829 to 1834 and is one of Greece's best-preserved neoclassical towns.",
    // howItWorks sources: 希腊统计局（ΕΛΣΤΑΤ / ELSTAT）**2021 年人口普查**常住人口（μόνιμος πληθυσμός），基准日 2021-10-22，最终结果 2023-03-17 公布、政府公报 ΦΕΚ 2802/Β'（2023-04-26）确认。
    //   **希腊市镇（δήμος）人口只随十年一次的人口普查更新**（欧盟 763/2008 条例），ELSTAT 的年度估计只做到大区（Περιφέρεια）一级、**不下探到市镇** —— 所以 2021 年的数在 **2031 年**之前就是最新一期，不要因为「隔了几年」就当成过期。
    //   口径分三档，正文各处要写明是哪一档：**城市本身/聚落（οικισμός）< 市镇（δήμος，2011 年 Kallikratis 改革后扩大）< 城区（πολεοδομικό συγκρότημα）/ 地区单位（περιφερειακή ενότητα）**。
    //   本批除雅典大区那条取自 ELSTAT 官方普查结果页（census2021results.statistics.gr，**级别 1**）外，其余数字多经希腊语维基对 ELSTAT / ΦΕΚ 的转述核对，**级别 2**。
    //   **数字错了**：纳夫普利翁市镇 2021 年普查常住人口为 **32,586**（约 3.3 万），不是 3.4 万；33,356 是 **2011 年**的数 —— 疑似把两次普查的数字搞混了。
    howItWorks:
      "Nafplio is the capital of the Argolis regional unit of the Peloponnese, a municipality of about 390 km² with about 32,600 people in 2021 under an elected mayor, the town itself about 15,000; the region has an elected governor, and police and schools belong to the state. From 1829 to 1834 it was the first capital of modern Greece, the first head of state, Kapodistrias, was assassinated here, and the capital then moved to Athens. The old town lies at the foot of the Acronauplia peninsula, its Venetian lanes and Syntagma square the centre, the Palamidi fortress on the hill above reached by 999 steps, and the Bourtzi castle on an islet in the harbour; Mycenae lies 25 km north, Epidaurus 30 km east, Athens 140 km away at about two hours, there is no airport with scheduled flights, and Athenians pour in at weekends. Newcomers most often go wrong by taking Nafplio for a resort, when it was Greece's first capital and remains the administrative centre of the district.",
    layout:
      "The old town sits between hill and sea, with the Palamidi Fortress towering on the hill above, reached by several hundred steps; the Bourtzi Fortress, a Venetian stronghold, sits on a small island in the bay. The old town's streets preserve a mix of Venetian and neoclassical architecture.",
    gettingAround:
      "There is no commercial airport locally; visitors usually connect via Athens airport and travel overland (about a 2-hour drive). The old town is walkable. The climate is Mediterranean, with hot summers and mild, wetter winters.",
    culture:
      "The official language is Greek. Nafplio is a popular weekend getaway for mainland Greeks. Meal times run late; tipping around 5–10% of the bill is customary.",
    seeAndDo:
      "The Palamidi Fortress; the Bourtzi Fortress (reachable by small boat); the old town streets and Syntagma Square; day trips to the archaeological site of Mycenae and the ancient theatre of Epidaurus.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather. Nafplio is an ideal base for exploring the eastern Peloponnese, including Mycenae, Epidaurus and Taygetus.",
  },

  ioannina: {
    // 零改动留痕（2026-09-10）：IOA 机场代码现行有效。✅ 零争议红线通过。
    // identity sources: 人口：城区（settlement）**64,896（2021 年普查）**；市镇单元 81,627、整个市镇 113,978——三档差很远，正文写明用的是城区档。该数**早已在本条目 howItWorks 的注释里**，只是没进 identity（C6-h）。
    identity:
      "Ioannina is the centre of the Epirus region, with a town population of about 65,000 at the 2021 census (ELSTAT), set on the shore of Lake Pamvotis — the gateway city to Greece's north-western Pindus mountains.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Ioannina (municipality ~403 km²; 113,978 2021, city 64,896; Epirus capital; 500 m; Lake Pamvotis with island; castle with mosques; silversmithing; university ~25,000; Ottoman 1430–1913; Zagori/Vikos ~40 km; Egnatia; airport)
    howItWorks:
      "Ioannina is the capital of the Epirus region, a municipality of about 403 km² with about 114,000 people in 2021 under an elected mayor, the city itself about 65,000; the region has an elected governor, and police and schools belong to the state. The city lies at 500 m on the west shore of Lake Pamvotis, the castle on a peninsula by the lake holding Byzantine and Ottoman buildings, the island in the lake with six monasteries reached by ferry, from 1430 to 1913 a major administrative centre of the Ottoman Empire, and silverwork its old craft; the university founded in 1970 has about 25,000 students, the stone villages of Zagori and the Vikos gorge lie about 40 km north, the Egnatia motorway joins it to Thessaloniki, and the airport lies north of town. Newcomers most often go wrong by taking Ioannina for a staging post for Zagori, when it is the university town and administrative centre of north-western Greece.",
    layout:
      "The old town sits on a promontory by the lake and preserves an Ottoman-era castle and mosques. A small island in the lake holds several monasteries. The newer town extends along the lakeshore and forms the administrative and commercial centre.",
    gettingAround:
      "The airport lies about 5 km south-east of the centre. City buses cover the main districts, the old town is walkable, and the lake island is reached by boat. The climate is continental, unlike coastal Greek cities — winters are cold, influenced by the surrounding mountains, while summers are comparatively mild.",
    culture:
      "The official language is Greek. Ioannina was long the administrative centre of the Ottoman-era Pashalik of Yanina, and traces of this period remain in the town's architecture. Meal times run late; tipping around 5–10% of the bill is customary.",
    seeAndDo:
      "Ioannina Castle and the Aslan Pasha Mosque; Lake Pamvotis and its island monasteries; day trips to the Vikos Gorge and the ancient oracle site of Dodona.",
    whenAndTips:
      "May–September brings comparatively mild weather, a good season for hiking the Vikos Gorge and other Pindus mountain activities; winters in the mountains are cold and snowy, and some mountain roads may be affected by snow.",
  },

  kalamata: {
    // identity sources: 希腊统计局（ΕΛΣΤΑΤ / ELSTAT）**2021 年人口普查**常住人口（μόνιμος πληθυσμός），基准日 2021-10-22，最终结果 2023-03-17 公布、政府公报 ΦΕΚ 2802/Β'（2023-04-26）确认。
    //   **希腊市镇（δήμος）人口只随十年一次的人口普查更新**（欧盟 763/2008 条例），ELSTAT 的年度估计只做到大区（Περιφέρεια）一级、**不下探到市镇** —— 所以 2021 年的数在 **2031 年**之前就是最新一期，不要因为「隔了几年」就当成过期。
    //   口径分三档，正文各处要写明是哪一档：**城市本身/聚落（οικισμός）< 市镇（δήμος，2011 年 Kallikratis 改革后扩大）< 城区（πολεοδομικό συγκρότημα）/ 地区单位（περιφερειακή ενότητα）**。
    //   本批除雅典大区那条取自 ELSTAT 官方普查结果页（census2021results.statistics.gr，**级别 1**）外，其余数字多经希腊语维基对 ELSTAT / ΦΕΚ 的转述核对，**级别 2**。
    //   卡拉马塔**城市本身**口径 2021 年普查 57,706。同条目 howItWorks 的「约7.3万」是**市镇**口径（440 km²，72,906），两档都对。
    identity:
      "Kalamata is the main city of the southern Peloponnese, with a city population of about 58,000 (2021 census), set on the Messenian Gulf at the foot of Taygetus — famous for the olives and olive oil that share its name.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kalamata (municipality ~440 km²; 72,906 2021; Messenia capital, second city of the Peloponnese; Messenian Gulf; castle; 1986 earthquake rebuild; olives PDO; dance festival July; airport 10 km; Athens ~240 km motorway; Ancient Messene ~30 km; Mani gateway)
    howItWorks:
      "Kalamata is the capital of the Messenia regional unit and the second city of the Peloponnese, a municipality of about 440 km² with about 73,000 people in the 2021 census under an elected mayor; the region has an elected governor, and police and schools belong to the state. The city lies at the head of the Messenian Gulf, the old town and castle at the foot of the hills inland, the Navarinou waterfront running east along the bay, and the earthquake of 1986 destroyed much of the town, since rebuilt; Kalamata olives carry a protected designation of origin, the international dance festival in July is its cultural emblem, the airport lies 10 km west, the motorway to Athens runs about 240 km, Ancient Messene lies 30 km north-west, and the Mani peninsula runs south from here. Newcomers most often go wrong by taking Kalamata for a brand of olive, when it is a regional capital with a port, a university campus and an airport.",
    layout:
      "The castle district occupies the highest point of the old town, overlooking the city and the gulf; the waterfront promenade runs along the Messenian Gulf and is the city's main leisure area. The old town centre preserves Byzantine churches and neoclassical buildings.",
    gettingAround:
      "The airport lies about 8 km west of the centre. City buses cover the main districts, and the old town is walkable. The climate is Mediterranean, with hot, dry summers and mild, wetter winters — among the warmer regions of Greece.",
    culture:
      "The official language is Greek. Kalamata olives and olive oil are an important local product and a source of local identity. Meal times run late; tipping around 5–10% of the bill is customary.",
    seeAndDo:
      "Kalamata Castle; the waterfront promenade; the archaeological and Byzantine museums; day trips to the Mani Peninsula, the Diros Caves, and hiking on Taygetus.",
    whenAndTips:
      "April–June and September–October bring the most pleasant weather. Kalamata is an ideal base for exploring the Mani Peninsula and the Taygetus mountains.",
  },

  volos: {
    // 零改动留痕（2026-09-10）：✅ 零争议红线通过；本批未出现价格与签证天数（C6e／C6f 不适用）。
    // identity sources: 人口：市镇单元 **85,803（2021 年普查）**，数字本身对，补上年份与口径。⚠️ 沃洛斯**市镇** 139,670 与**市镇单元** 85,803 是两个差很多的数，不写口径会被读成全市。
    identity:
      "Volos is the main port city of Thessaly, with a municipal-unit population of about 85,800 at the 2021 census (ELSTAT), set on the Pagasetic Gulf at the foot of Mount Pelion — the gateway city for exploring the Pelion peninsula.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Volos (municipality ~387 km², ~140,000; municipal unit 85,803 2021; Magnesia capital, Thessaly; Pagasetic Gulf, third port of mainland Greece; Argonauts waterfront; tsipouradika; Pelion villages 20–40 km; ferries to Sporades; University of Thessaly; steel; 2023 storm Daniel)
    howItWorks:
      "Volos is the capital of the Magnesia regional unit of Thessaly, a municipality of about 387 km² with about 140,000 people under an elected mayor, the urban core about 86,000; the region has an elected governor, and police and schools belong to the state. The city lies at the head of the Pagasetic Gulf below Mount Pelion, the third port of mainland Greece, the Argonauts avenue running along the waterfront, the tsipouro taverns its daily life, the University of Thessaly in town and steel and cement its industry; the villages of Pelion lie on the slopes 20 to 40 km east with the little train climbing from the edge of town, ferries sail from the port to Skiathos and Skopelos, and the storm Daniel of 2023 flooded the town. Newcomers most often go wrong by taking Volos for the pier to the Sporades, when it is a regional capital with a port, a university and industry, and the Pelion villages lie up the mountain.",
    layout:
      "The waterfront promenade runs along the gulf and is the city's main leisure area; the old town centre preserves neoclassical buildings, and the traditional stone-built villages of Mount Pelion lie on the hillsides east of the city.",
    gettingAround:
      "The airport lies about 25 km south-west of the centre. City buses cover the main districts; a rental car or local transport is recommended for reaching the villages of Mount Pelion. The climate is Mediterranean along the coast, while the higher, wetter Pelion mountains are comparatively cool and humid.",
    culture:
      "The official language is Greek. Volos and the surrounding Pelion region preserve much of traditional Greek rural life. Meal times run late; tipping around 5–10% of the bill is customary.",
    seeAndDo:
      "The waterfront promenade and the archaeological museum; the traditional villages of Mount Pelion, such as Makrinitsa and Portaria; day trips to Meteora and the Thessalian Plain.",
    whenAndTips:
      "May–September brings the most pleasant weather. Volos is an important gateway to Meteora and the Pelion mountains, and also serves as a ferry port for the Sporades islands in the Aegean.",
  },

  // ── Greece batch 2 (2026-09-05) ──
  mykonos: {
    // identity sources: 米科诺斯市镇 2021 年普查常住人口 10,704（ΕΛΣΤΑΤ，基准日 2021-10-22，
    //   ΦΕΚ 2802/Β' 2023-04-26 确认）。**希腊市镇人口只随十年一次的普查更新**，
    //   2021 年的数在 2031 年之前就是最新一期，正文已写明「普查」二字，不要当成过期去改。
    identity:
      "Mykonos is among the most famous islands of the Cyclades, with about 11,000 people (2021 census), most of them in Mykonos town (Chora) on the west coast. The maze of whitewashed lanes with blue shutters, the sixteenth-century Venetian windmills of Kato Mili on the hill, the houses of 'Little Venice' hanging over the sea and the white church of Panagia Paraportiani are its emblems; Petros the pelican, who arrived in 1954, was the island's mascot for decades. Mykonos is known for beach clubs and nightlife, and is the departure point for Delos (birthplace of Apollo, a World Heritage site) about 2 km to the south-west. The summer meltemi wind keeps the hot dry summers cool.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Mykonos (island municipality 85.5 km²; 10,704 2021; Cyclades, South Aegean; Chora with windmills, Little Venice; south beaches; Delos 2 km UNESCO; airport 4 km; new port Tourlos; ~1.5 million visitors; Island of the Winds)
    howItWorks:
      "Mykonos is administratively one municipality covering the whole island of about 86 km² under an elected mayor, with about 11,000 permanent residents in the 2021 census and about 1.5 million visitors a year; the South Aegean region has an elected governor, and police and schools belong to the state. Chora is the main town on the west coast, the windmills and the waterside houses of Little Venice its face, its white lanes a maze laid out against the wind that blows all year and gives the 'Island of the Winds' its name; the beaches of Paradise, Super Paradise and the rest lie on the south coast reached by bus and boat, the new port lies 2 km north at Tourlos, the airport 4 km south of town, and the ruins of Delos 2 km offshore to the west are World Heritage. Newcomers most often go wrong by taking Chora for the whole island, when the beaches lie on the south coast, the nightlife is scattered across the island, and nothing is reached without a car or a boat.",
    layout:
      "Mykonos town lies in a bay on the west coast: the old port is to the north, the windmills on the slope south of town with Little Venice on the shore just below them, Paraportiani in the Kastro quarter west of the old port, and the lanes of the centre (Matogianni Street) full of shops and restaurants. The new port for large ferries is about 2 km north at Tourlos. The beaches line the south coast — Ornos, Psarou, Platys Gialos, Paradise, Super Paradise — with Elia to the south-east. The airport is about 4 km south-east of town, and the Delos boats leave from the old port.",
    gettingAround:
      "Mykonos Airport (JMK), about 4 km from town, is about 25 minutes from Athens, with direct flights from other European cities in summer. Ferries take about 5 hours from Piraeus (fast boats 2.5–3) and about 2.5 from Rafina, with fast boats to Santorini, Naxos and Paros. The town is walked (no cars); beaches are reached by bus, by small boats from Platys Gialos, or by hire car or quad; taxis are scarce. The climate is Mediterranean, hot, dry and windy in summer.",
    culture:
      "Greek is universal and English widespread. The lanes are narrow and closed to vehicles — luggage goes by trolley. Dress modestly in churches; Delos is an archaeological site visited only on day trips (no overnight stays) — bring water and a hat. Beach clubs are expensive, some with minimum spends. Nightlife runs until dawn. High-season prices are among the highest in Greece. Tipping is optional, 5–10%.",
    seeAndDo:
      "The lanes of Mykonos town, sunset at Little Venice, the Kato Mili windmills, Paraportiani; the ruins of Delos (half a day); the south-coast beaches (Ornos, Platys Gialos, Paradise, Elia); the pelicans and fishing boats of the old port; the archaeological and folklore museums; the monastery and traditional life of Ano Mera; sunset at the Armenistis lighthouse.",
    whenAndTips:
      "May–June and September–October are best; July–August are packed, very expensive and windy; most places close in winter. Stay three nights. Fly or sail from Athens, and link with Santorini and Naxos on a Cyclades route.",
  },
  naxos: {
    // identity sources: 「纳克索斯与小基克拉泽斯」市镇 2021 年普查常住人口约 2.1 万、霍拉约 8,900（ΕΛΣΤΑΤ）。
    //   **希腊市镇人口只随十年一次的普查更新**，2021 年的数在 2031 年之前就是最新一期。
    identity:
      "Naxos is the largest and most fertile island of the Cyclades, about 430 km², with about 21,000 people (2021 census), of whom about 9,000 live in Naxos town (Chora). The Portara — the unfinished gateway of a sixth-century BC temple of Apollo on the islet by the harbour — is the island's emblem, and the Kastro on the hill above the town is the thirteenth-century Venetian citadel; inland, Mount Zas (1,001 m) is the highest peak in the Cyclades, mountain villages such as Halki and Apeiranthos keep marble streets and Byzantine churches, and ancient quarries hold unfinished kouros statues. Naxos is known for potatoes, graviera cheese, kitron citrus liqueur and the long beaches of its west coast, far cheaper and quieter than Mykonos or Santorini.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Naxos (largest Cycladic island ~430 km²; 20,578 2021; Chora 8,897; municipality of Naxos and Lesser Cyclades; Portara; Venetian Kastro; Mount Zas 1,001 m; farming island — potatoes, cheese, marble; beaches Agios Prokopios/Plaka; ferries Piraeus 5+ h; small airport)
    howItWorks:
      "Naxos is the largest island of the Cyclades, about 430 km², administratively the municipality of Naxos and the Lesser Cyclades under an elected mayor, with about 21,000 people in the 2021 census and about 8,900 in Chora; the South Aegean region has an elected governor, and police and schools belong to the state. Chora lies by the harbour on the west coast, the Portara temple gate standing on the islet in the harbour, the Venetian Kastro on the high ground of the town; Mount Zas at 1,001 m is the highest in the Cyclades and gives the island water enough, potatoes, cheese, citron liqueur and marble let it live without tourism, the mountain villages of Halki and Apeiranthos lie inland, the beaches at Agios Prokopios and Plaka on the west coast, the ferry to Piraeus takes over five hours and the airport is small. Newcomers most often go wrong by taking Naxos for another Mykonos, when it is an island of farms, mountain villages and marble quarries, and tourists hold only a corner.",
    layout:
      "Naxos town lies by the harbour on the west coast: the Portara stands on the islet north of the port (joined by a causeway), the old market quarter and the Kastro climb the hill behind the harbour, and the harbour front holds the restaurants and the ferry quay. The beaches run south along the west coast: Agios Georgios beside the town, then Agios Prokopios, Agia Anna and Plaka. Halki lies about 16 km inland in the centre, Apeiranthos about 28 km away in the north-eastern hills, and the Mount Zas trailhead near the village of Filoti. The airport is about 3 km south of town.",
    gettingAround:
      "Naxos Airport (JNX), about 3 km from town, has Athens flights (about 45 minutes) and seasonal routes, with a short runway and mostly small aircraft. Ferries take about 4–6 hours from Piraeus (fast boats about 3.5), with links to Mykonos, Paros and Santorini. The town is walkable; buses reach the beaches (frequent in summer) and the villages, but the island is large and a hire car is easiest. The climate is Mediterranean, hot, dry and windy in summer.",
    culture:
      "Greek is universal and English widespread. The Kastro holds the Catholic cathedral and the archaeological museum, and descendants of the Venetian families still live there. Dress modestly in the village churches and monasteries; the people of Apeiranthos have Cretan roots and a distinct dialect. Kitron is tasted at the Vallindras distillery in Halki. Kitesurfing takes over the beaches when the wind blows. Tipping is optional.",
    seeAndDo:
      "Sunset at the Portara; the Kastro and the lanes of the old market; Agios Prokopios and Plaka beaches; Halki (the distillery, Byzantine churches) and Apeiranthos (the marble village); the Mount Zas hike (about 3 hours); the temple of Demeter at Sangri; the ancient kouroi (Melanes, Apollonas); the fishing village of Apollonas; the archaeological museum.",
    whenAndTips:
      "May–June and September–October are best; July–August is hot but easier than Mykonos; winter is quiet. Stay three or four nights, with a day's drive round the island. Linked with Paros, Mykonos and Santorini.",
  },
  kalabaka: {
    identity:
      "Kalabaka lies on the western edge of the Thessalian plain at the foot of the Pindus mountains, with about 8,600 people in the town, and is the gateway to Meteora. Meteora is a forest of sandstone pillars rising more than 300 m, on whose summits Orthodox monks built monasteries from the fourteenth century — more than twenty at the height, six of them still open today: the Great Meteoron (founded in the fourteenth century), Varlaam, Roussanou, St Nicholas, St Stephen and Holy Trinity; in 1988 Meteora was inscribed as a World Heritage site for both nature and culture. The monasteries were once reached by rope ladders and baskets, and steps were cut only in the 1920s. The village of Kastraki nestles at the foot of the pillars as a second base.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Kalabaka (seat of the municipality of Meteora; town 8,573 2021; Trikala regional unit, Thessaly; Meteora monasteries UNESCO 1988 on rock pillars directly above town, six active; Kastraki at the base; railway terminus from Athens ~4.5 h; Trikala ~20 km)
    howItWorks:
      "Kalabaka is a town of the Trikala regional unit of Thessaly with about 8,600 people in 2021, the seat of the municipality named Meteora, governed by an elected mayor, with police and schools belonging to the state. The town presses against the foot of the sandstone pillars of Meteora, six monasteries still in use standing on the pillar tops, World Heritage since 1988, visible by looking up from the streets, the village of Kastraki closer under the rocks, and a loop road joining the monasteries, climbed on foot or by car; the railway from Athens ends here after about four and a half hours, Trikala lies about 20 km east and the Pindus to the west. Newcomers most often go wrong by taking Kalabaka for Meteora, when the town is the town and the pillars the pillars, each monastery keeps its own opening days, and one day is not enough.",
    layout:
      "Kalabaka lies on the flat south of the pillars, with the railway and bus stations in the south of town and the main street running north towards the rocks; Kastraki lies about 2 km north-west, right beneath the pillars. The monasteries crown the pillars north of town: St Stephen and Holy Trinity on the east (nearest the town; St Stephen is entered across a bridge), Roussanou in the middle, Varlaam and the Great Meteoron highest to the north-west, and St Nicholas above Kastraki; a loop road of about 15 km links them.",
    gettingAround:
      "Kalabaka has no airport with scheduled flights; the nearest are Thessaloniki (about 200 km) and Athens (about 350 km). Trains take about 4–5 hours from Athens (direct or changing at Palaiofarsalos) and about 3 from Thessaloniki; KTEL coaches take about 5 hours from Athens and about 30 minutes from Trikala. The town is walkable; the monasteries are reached by a few daily buses, taxis, tours or on foot (old paths climb from Kastraki in about 1 hour). The climate is continental, with hot summers and cold winters with occasional snow on the pillars.",
    culture:
      "Greek is universal and English widespread in tourism. The monasteries are living Orthodox communities: women wear skirts below the knee (wraps are provided at the gates), men long trousers, no bare shoulders; no photography inside and quiet throughout; each monastery closes on a different day of the week, so check before going. Each charges a small entry fee. Do not disturb the monks' routines and services. Tipping is optional.",
    seeAndDo:
      "The Great Meteoron (museum, wine cellar); Varlaam; St Stephen (a convent, no steps); Roussanou and St Nicholas; Holy Trinity (the Bond film location); the sunset viewpoints (around Psaropetra); the old paths up from Kastraki; rock climbing (Meteora is a European climbing destination); the old town of Trikala.",
    whenAndTips:
      "April–June and September–October are most comfortable; summers are hot, so avoid midday; winter brings fog and snow but great quiet. Stay at least a night and allow a full day for the monasteries (three or four a day at most). A day trip from Athens or Thessaloniki is too rushed.",
  },
  patras: {
    // identity sources: 帕特雷市镇 2021 年普查常住人口 215,922（ΕΛΣΤΑΤ，市镇约 335 km²）。
    //   **希腊市镇人口只随十年一次的普查更新**，2021 年的数在 2031 年之前就是最新一期。
    //   「第三大城市」按**市镇人口**计成立（次于雅典市镇与塞萨洛尼基市镇）——
    //   换成城区或地区单位口径名次会变，所以正文写明了口径。
    identity:
      "Patras lies on the Gulf of Patras at the north-western corner of the Peloponnese, Greece's third-largest city the third-largest by municipal population, with about 216,000 (2021 census), and the main ferry port for Italy (Ancona, Bari). The Rio–Antirrio Bridge of 2004 (about 2.9 km, one of the longest multi-span cable-stayed bridges in the world) links the Peloponnese to the mainland. The Patras Carnival (January–February) is the largest in Greece and among the largest in Europe; the cathedral of St Andrew (1908–1974), holding the relics of the apostle, is one of the largest churches in Greece; the Roman odeon of about AD 160 and the Byzantine castle stand in the upper town. The Achaia Clauss winery founded in 1861 is known for Mavrodaphne, and Patras was European Capital of Culture in 2006.",
    // howItWorks sources: Wikipedia (2026-09): Patras (municipality ~335 km², 215,922 2021; Western Greece capital; upper/lower town, grid 1858; Rio–Antirrio 2004; ferries to Italy; Athens ~210 km)
    howItWorks:
      "Patras is the capital of the Western Greece region and Greece's third city; the region has an elected governor and the municipality its own mayor and council, covering about 335 km² with about 216,000 people in the 2021 census. The city lies in two tiers: the Upper Town on the slopes below Mount Panachaikon holds the medieval castle and the Roman odeon, the Lower Town is the grid laid out in 1858 with Georgiou I Square at its centre, the stairs of Agiou Nikolaou join the two, and the cathedral of St Andrew stands by the sea. The port is Greece's gateway to Italy, with ferries to Ancona, Bari and Venice, and the Rio–Antirrio Bridge opened in 2004 joins the Peloponnese to the mainland at the city's eastern edge. Three public universities make it a university town, and the Carnival is the largest festival of the year. Rail is limited to a suburban line, and buses and cars carry the traffic. Athens lies about 210 km east. Addresses give street, number and postcode. Newcomers most often go wrong by taking Patras for a ferry terminal, when it is the administrative and commercial centre of the Peloponnese.",
    layout:
      "The city has an upper and a lower town: the lower town lies on the flat by the sea, with Georgiou Square at its centre and the port and ferry terminals along the shore; the upper town climbs the hill with the castle and the Roman odeon, and a great stairway joins the two. St Andrew's cathedral stands by the sea in the south-west of the lower town. The Rio–Antirrio Bridge is about 10 km north-east at Rio, and the Achaia Clauss winery about 8 km south-east in the hills. The suburban railway station is by the port.",
    gettingAround:
      "Patras has no airport with scheduled flights; the nearest are the joint-use Araxos (about 45 km, seasonal charters) and Athens (about 215 km, 2.5–3 hours by KTEL coach, hourly). The suburban railway from Athens involves a change at Kiato, about 3.5 hours. The city is mostly walked, with buses; the Rio bridge is about 30 minutes by bus. Ferries take about 20 hours to Ancona and about 16 to Bari. The climate is Mediterranean with hot summers and wet winters.",
    culture:
      "Greek is universal and, in this student city, English is widespread. During the carnival (from mid-January to the start of Lent) there are parades, costumes and the 'chocolate war', and lodging is tight. The cathedral is an Orthodox shrine — dress modestly and keep quiet; St Andrew's day on 30 November is the local feast. The stairways and the castle of the upper town are the evening promenade. Tipping is optional.",
    seeAndDo:
      "St Andrew's cathedral; the Roman odeon and the castle of the upper town; Georgiou Square and the pedestrian streets of the centre; the Rio–Antirrio Bridge (walk or drive across, the castle of Rio); the Achaia Clauss winery; the archaeological museum; the carnival (January–February); day trips to ancient Olympia (about 115 km) and the Kalavryta rack railway.",
    whenAndTips:
      "April–June and September–October are most comfortable, with the carnival in January–February; summers are hot. A day for the city. The port for the Italy ferries or a stepping stone to Olympia and Kefalonia.",
  },
  zakynthos: {
    // 零改动留痕（2026-09-10）：ZTH 机场代码现行有效、无更名。
    // identity sources: 沉船湾封闭：2022 年地震后因落石风险封闭，希腊当局把封闭期延长至 2026-10-31；2026 年 7 月公布向海延伸约 30 米、碎石加固以保护「帕纳约蒂斯」号残骸的方案，安全评估后再定开放（2 级，2026-09-12 核）。下一轮（2026 年 11 月之后）回来看是否重新开放。
    identity:
      "Zakynthos (Zante in Italian) is the southern island of the Ionian group; its capital, Zakynthos town, has a town population of about 10,000 and the island — a single municipality — about 40,000, both at the 2021 census (ELSTAT). The great earthquake of 1953 all but destroyed the town, rebuilt afterwards in Venetian style; Solomos Square is named after Dionysios Solomos, author of the Greek national anthem, and the church of St Dionysios is that of the island's patron saint. Navagio (Shipwreck) Bay on the north-west coast — where the smuggling ship Panagiotis ran aground in 1980 beneath white cliffs — is one of the most famous views in Greece; since the 2022 earthquake the beach itself has been closed for rockfall risk — Greek authorities have extended the closure to the end of October 2026 while planning to extend the beach seaward to protect the wreck — and it is seen only from the clifftop platform or from boats. Laganas Bay on the south coast is a national marine park established in 1999 where loggerhead turtles nest, and the airport bans night flights in summer to protect them.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Zakynthos town (seat of the island municipality; island ~406 km², ~40,000; municipal unit ~17,000, town ~9,800 2021; Ionian Islands region; rebuilt after 1953 earthquake; Solomos square; Bochali castle; Navagio ~30 km; Laganas turtles/marine park 8 km; airport 4 km; ferry Kyllini 1 h)
    howItWorks:
      "Zakynthos town is the main town of the island of Zakynthos, the whole island of about 406 km² and 40,000 people forming one municipality under an elected mayor, the town itself about 10,000; the Ionian Islands region has an elected governor, and police and schools belong to the state. The earthquake of 1953 all but flattened the Venetian town, and today's town was rebuilt to earthquake standards, Solomos square and the waterfront its centre, the castle of Bochali on the hill above; Navagio, the Shipwreck beach, lies about 30 km north-west below the cliffs and can be seen only from the sea, Laganas 8 km south is both a turtle reserve and a party beach, the Blue Caves lie at the northern tip, the airport 4 km south of town and the ferry to Kyllini about an hour. Newcomers most often go wrong by taking Navagio for Zakynthos, when it lies at the far end of the island and life in town has nothing to do with the cliffs on the postcard.",
    layout:
      "Zakynthos town lies in a bay on the east coast, with Solomos Square by the sea, St Dionysios south of the port and the Bochali castle on the hill north-west of town looking over it. The airport is about 4 km south. Laganas Bay and the turtle beaches lie in the south, with Laganas the busiest resort; Navagio is on the north-west coast (the viewpoint is reached from the north via Volimes, and boats leave from the port of Agios Nikolaos in the north or from town); the Blue Caves are at Cape Skinari at the northern tip. The Keri caves and the west-coast cliffs lie to the south-west.",
    gettingAround:
      "Zakynthos International Airport (ZTH), about 4 km from town, has Athens flights and summer direct flights from across Europe, with a summer ban on flights between 22:00 and 05:00 for the turtles. Ferries from Kyllini in the Peloponnese take about 1 hour, with buses from Kyllini to Patras and Athens. Island buses are limited, so a hire car or quad is easiest; the Navagio viewpoint is about 1 hour's drive, and the Blue Caves are seen by boat. The climate is Mediterranean with hot dry summers and wet winters.",
    culture:
      "Greek is universal, English widespread in the resorts, and the Venetian legacy lives on in the architecture and the kantades serenades. Dress modestly in St Dionysios; the saint's processions are on 24 August and 17 December. In the turtle nesting season (May–October) the Laganas beaches close at night with limits on umbrellas and speedboats, and turtle boats keep their distance. The Navagio viewpoint has no railing beyond the fence — don't cross it. Tipping is optional.",
    seeAndDo:
      "The Navagio viewpoint and a boat trip to see the wreck; the Blue Caves (by boat); the Bochali castle and its view; Solomos Square and St Dionysios; turtle spotting in Laganas Bay (licensed boats) and the islet of Marathonisi; the Keri caves and sunset on the west-coast cliffs; the beaches of the south-east coast (Gerakas, Banana); the crafts of Volimes; the seafront promenade of Zakynthos town.",
    whenAndTips:
      "May–June and September–October are best; July–August is packed; most places close in winter. Stay three nights, with a day's drive round the island. Linked with Kefalonia (boats in summer).",
  },
};
