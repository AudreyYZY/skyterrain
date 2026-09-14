import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_EN: Record<string, TravelGuide> = {
  "spain-overview": {
    // identity sources: INE《Estadística Continua de Población (ECP), 1 de enero de 2025, datos provisionales》：49,128,297 人。https://www.ine.es/dyngs/Prensa/ECP4T24.htm
    //   核实日 2026-09-07，来源级别 1
    identity:
      "Spain occupies about four-fifths of the Iberian Peninsula and also includes the Balearic Islands in the Mediterranean and the Canary Islands in the Atlantic; mainland area is about 500,000 km², population about 49.1 million as of January 2025 (INE). The terrain is dominated by plateau and mountains — the Meseta plateau covers nearly half the country in the centre, ringed by younger or older ranges such as the Pyrenees, the Cantabrian Mountains and the Sierra Nevada, with a long coastline that spans both Atlantic and Mediterranean climates.",
    layout:
      "Roughly: the centre (Madrid on the Meseta plateau, the historical and administrative core); north-east Catalonia (Barcelona, a major Mediterranean economic hub); southern Andalusia (Seville, Granada, Málaga — Moorish heritage and the Costa del Sol); the eastern Mediterranean coast (Valencia, rice and citrus country); the north (Bilbao, San Sebastián — Basque Country and the green Cantabrian coast); north-western Galicia (Santiago de Compostela, the end of the pilgrimage route); and two offshore island groups — the Balearics (Palma) and the volcanic Canary Islands in the Atlantic, mild year-round.",
    gettingAround:
      "Spain's AVE high-speed rail network is one of the most developed in Europe; the main lines from Madrid to Barcelona, Seville and elsewhere are fast and comfortable, often more convenient than flying. Domestic flights are used mainly for quick inter-regional connections and for reaching the Balearic and Canary Islands. Big cities have metros; in most cities walking and buses are enough. Driving is on the right. Meals run late (lunch after 2pm, dinner after 9pm are common), and many small shops close for a long midday siesta. Tap water is drinkable in most cities; the electrical standard is 230V with the European two-round-pin plug.",
    culture:
      "The official national language is Spanish (Castilian); Catalonia, the Basque Country, Galicia and other regions also have their own co-official languages, and signs and menus are often bilingual. Spanish life runs late and is highly social; an evening paseo (a stroll after dinner) is a common way of life. Dress modestly when visiting churches, covering shoulders and knees. In many small and mid-sized towns, shops close for a siesta from around 2pm to 5pm; this affects big cities and tourist areas less. Restaurant bills usually include service; tipping is not required, though rounding up is appreciated.",
    seeAndDo:
      "Monuments and art: the Prado in Madrid, Gaudí's buildings in Barcelona, the Alhambra in Granada, the Camino de Santiago pilgrimage route. Nature: the Ordesa Canyon in the Pyrenees, the snow peaks of the Sierra Nevada, Teide and the Timanfaya lava fields in the Canary Islands, the Rías Baixas in Galicia. Beaches and food: distinctive beaches along both the Mediterranean and Atlantic coasts, and tapas and paella that vary widely by region.",
    whenAndTips:
      "Spring and autumn (April–June, September–October) have the most comfortable weather and are the best seasons for the inland cities; midsummer (July–August) is very hot in the south and interior, while the coast and islands are the peak season for European holidaymakers, with more people and higher prices; the Canary Islands stay mild year-round, one of the few good winter-sun destinations nearby. Spain is in the Schengen area; citizens of most countries can visit short-term visa-free or under Schengen rules. Many small shops in various cities close for the whole of August; check opening hours before you go.",
  },

  madrid: {
    // identity sources（2026-09-15 核实，update）: https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/79543 · INE官方JSON API直接取数 · Madrid 2025-01-01定案=3,477,497（2026-01-01初步ECP数=3,481,962，两者四舍五入都是'约348万'）· 1级 · 2026-09-15 核；下一期约 2026-12（2026-01-01定案数按惯例次年12月初以皇家法令公布；2026-01-01初步数已可查）
    identity:
      "Madrid, Spain's capital, has a registered municipal population of about 3.48 million (1 January 2025, INE definitive figure) and is one of Europe's highest-elevation capitals (about 650 m), sitting right in the centre of the Meseta plateau. Capital of the kingdom since the 16th century, the city preserves layers of history from the Habsburg to the Bourbon eras and is Spain's financial and political centre.",
    // howItWorks sources: Wikipedia (2026-09): Madrid (21 districts, 131 barrios; ~606 km²; 3,477,497 2025; Community of Madrid ~7 million; metro area ~6.8 million; M-30; Metro); Municipalities of Spain
    howItWorks:
      "Madrid is both the capital of Spain and of the Community of Madrid, an autonomous community of a single province with about 7 million people that runs health and education, while the city government runs planning, buses, waste and local police. The city is divided into 21 districts and 131 neighbourhoods (barrios), each district's board chaired by a councillor appointed by the mayor. The commune covers about 606 km² with about 3.48 million people in 2025, and the metropolitan area holds about 6.8 million, with satellite cities such as Alcobendas and Getafe as municipalities of their own. The Puerta del Sol is kilometre zero of Spain's roads, the Castellana is the north–south axis, and the M-30 ring road is the edge of the centre in local minds. Addresses give street, number and postcode, and locals place things by barrio. A dozen metro lines and the Cercanías suburban railway cover the metropolitan area. Newcomers most often go wrong by taking the area inside the M-30 for the whole of Madrid, when the city within its boundary is ten times larger.",
    layout:
      "The centre radiates out from the Puerta del Sol; the Habsburg-era old town has narrow streets, while the Bourbon-era area around Gran Vía is broader and more modern. Along the Paseo del Prado sit the Prado Museum, the Thyssen-Bornemisza Museum and the Reina Sofía — together called the \"Golden Triangle of Art\". El Retiro Park is the city centre's largest green space.",
    gettingAround:
      "The airport is about 15 km from the centre, with a metro line running directly there. The city's dense metro network is the main way to get around; walking and cycling also work well. Madrid sits high and has a continental climate: summer (June–August) is unusually hot and dry, often over 35 °C; winter is cold with occasional frost; spring and autumn are most comfortable.",
    culture:
      "Madrid is known for its lively nightlife; dinner often starts after 9pm, and the tapas-bar culture is strong. The El Rastro flea market near Sol on Sundays is a local tradition. Tipping is not required. Dress modestly when visiting the Royal Palace, churches and similar sites.",
    seeAndDo:
      "The Prado (Velázquez, Goya and other masters); the Reina Sofía (Picasso's Guernica); the Royal Palace; boating in El Retiro; the theatres and shopping of Gran Vía; tapas at the Mercado de San Miguel. Day trips can reach Toledo (an old capital on the edge of the Meseta) or Segovia (the Roman aqueduct).",
    whenAndTips:
      "Spring and autumn (April–June, September–October) have the most comfortable weather; midsummer is scorching, so indoor museums and air-conditioned venues are a good way to cool off. Many local restaurants close in August. Book popular museum tickets online in advance. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  barcelona: {
    // howItWorks sources（2026-09-15 核实）：AMB 3.3 million 无带年份官方来源，删去数字。
    // identity sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   巴塞罗那市镇 2025-01-01 定案 1,713,247 人（2026-01-01 临时数 1,713,694，几乎无变化）。**原文 identity 的「约160万」既没有年份、又与同条目 howItWorks 的「2024 年约170万」互相矛盾**。
    identity:
      "Barcelona, capital of Catalonia and Spain's second-largest city, has a registered municipal population of about 1.71 million (1 January 2025), sits on the Mediterranean with Tibidabo hill behind it. It is known for Gaudí's Modernist architecture, a strong Catalan cultural identity and a long port history.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   同上。
    howItWorks:
      "Barcelona is the capital of Catalonia, governed by a mayor and council, with ten districts, each with a district council; the municipality covers about 101 km² with about 1.71 million people as of 1 January 2025, while the Àrea Metropolitana de Barcelona created in 2011 gathers 36 municipalities with roughly twice the population of the city itself, with L'Hospitalet and Badalona pressed against the city line as cities of their own. The city is framed on four sides by the Collserola hills, the Mediterranean, the Llobregat and the Besòs: the Ciutat Vella is a medieval maze, the Eixample planned by Cerdà in 1859 is a grid of chamfered blocks, and Gràcia, Sants and Sarrià were independent towns absorbed later, still keeping village centres of their own. Catalan and Spanish are co-official, with Catalan first on signs and in official use. Addresses give street, number and postcode. The TMB metro and Rodalies suburban trains cover the metropolitan area, and the Rondas ring roads are its expressways. Newcomers most often go wrong by taking the municipality for the whole city, when it is the core of a much larger metropolitan area.",
    layout:
      "The old town's Gothic Quarter has narrow lanes, with La Rambla running through it to the sea; the 19th-century \"Eixample\" district is laid out in a strict grid and holds Gaudí's Sagrada Família and Casa Milà; Montjuïc hill has a castle and the old Olympic facilities; Barceloneta is the seaside beach district.",
    gettingAround:
      "The airport is about 15 km from the centre, with an airport bus and a train. The city's metro network is extensive, and it is also good for walking and cycling (with a public bike-share system). Mediterranean climate: summer (June–August) is hot but more humid than inland Spain, winter mild and fairly dry, spring and autumn most comfortable.",
    culture:
      "Catalan and Spanish are both official here, and signs and menus are often bilingual. Local pride in Catalan identity runs deep, expressed in distinctive festivals such as human-tower building (castells). Tipping is not required. Pickpocketing is a known issue in peak season, so watch your belongings.",
    seeAndDo:
      "Gaudí's buildings — the Sagrada Família, Casa Milà, Casa Batlló; wandering the Gothic Quarter; La Boqueria market; Montjuïc for city and harbour views; Barceloneta beach. Day trips can reach Montserrat (a jagged mountain topped by a monastery) or La Garrotxa Volcanic Zone.",
    whenAndTips:
      "Spring and autumn have the most comfortable weather; summer beach season is crowded. Book Sagrada Família and other popular sites online well in advance, or you often cannot get in same-day. Pickpockets operate around the metro and sights, so keep bags in front. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  seville: {
    // identity sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   **这条排名是错的**：按 INE 市镇人口，2025-01-01 的排序是马德里 > 巴塞罗那 > 瓦伦西亚 > **萨拉戈萨 699,007** > **塞维利亚 688,714**。萨拉戈萨在 2023→2024 就已反超塞维利亚，2026 年临时数差距进一步拉大（708,181 vs 698,469）。塞维利亚现在是**第五**。
    identity:
      "Seville, capital of Andalusia and one of Spain's most populous cities, sits on the Guadalquivir River, historically the only Spanish river port navigable by ocean-going ships all the way inland — Seville was Spain's monopoly port for trade with the Americas during the Age of Discovery.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   塞维利亚市镇 2025-01-01 = 688,714。**西班牙没有为塞维利亚设立法定都会区**，那个 150 万是非官方聚合数字（可能来自欧盟 FUA 或维基），如实标注为非官方。
    howItWorks:
      "Seville is the capital of Andalusia, seat of the regional parliament and government, which run health and education, while the city government runs planning, transport and local affairs. The municipality is divided into eleven districts, covers about 141 km² with about 689,000 people as of 1 January 2025 (the \"metropolitan area of about 1.5 million\" is not an official Spanish statistical geography), and its metropolitan area holds about 1.5 million. The Guadalquivir divides it: the old town on the east bank is among the largest in Europe, with Santa Cruz beside the cathedral; Triana on the west bank is the traditional quarter of craftsmen and flamenco, with an identity of its own; the Isla de la Cartuja is the site of Expo 92, and Nervión is the modern commercial district. One metro line, trams and the Sevici bike scheme cover the city. Addresses give street, number and postcode. Holy Week and the April Fair are the two fixed points of the city's year. Summer temperatures often exceed 40°C, and the streets empty in the afternoon. Newcomers most often go wrong by taking Seville for an old town, when it is the administrative centre of a region of 8 million.",
    layout:
      "The old town centres on Seville Cathedral (one of the largest Gothic cathedrals in the world) and the Real Alcázar palace; the Santa Cruz quarter is the old Jewish quarter with Moorish-style narrow lanes; Triana, across the Guadalquivir, is a traditional home of pottery and one of the birthplaces of flamenco; the Plaza de España was built for the 1929 Ibero-American Exposition.",
    gettingAround:
      "The airport is about 10 km from the centre, with an airport bus. The old town is best explored on foot; the city also has trams and buses. Summer (June–September) makes Seville one of the hottest cities on mainland Spain, often over 40 °C; spring and autumn are the pleasant, best-to-visit seasons; winter is mild.",
    culture:
      "Seville is a major birthplace of flamenco, and locals hold two major annual festivals dear — the April Fair (Feria de Abril) and Holy Week (Semana Santa). Tipping is not required. Summer days are brutally hot, so local life shifts to the evening.",
    seeAndDo:
      "Seville Cathedral and the Giralda tower (a former minaret); the Real Alcázar (a palace and gardens blending Moorish and Christian styles); Plaza de España; flamenco in Triana; strolling along the Guadalquivir.",
    whenAndTips:
      "March–May and October–November have the most comfortable weather and also cover festival season, so book accommodation ahead; July–August is scorching — avoid long stretches outdoors at midday and drink plenty of water. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  valencia: {
    identity:
      "Valencia, Spain's third-largest city by population, sits on the Mediterranean as capital of the Valencian Community, known as the birthplace of paella and for the futuristic City of Arts and Sciences complex. Valencia, Venezuela was named after this city by 16th-century Spanish colonists.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   瓦伦西亚市镇 2025-01-01 = 841,558（2026 临时数 848,662）。**「西班牙第三大城市」这条排名用最新数复核后仍成立**，稳居第三。「城市连绵区约160万」同样不是 INE 官方口径。
    howItWorks:
      "Valencia is the capital of the Valencian Community, governed by a mayor and council, with nineteen districts; the municipality covers about 135 km² with about 842,000 people as of 1 January 2025, Spain's third city, and its built-up area holds about 1.6 million. After the great flood of 1957 the Turia was diverted, and the old riverbed became a park running through the city, with the City of Arts and Sciences at its end; the old town, the Eixample and the riverbed park make up the centre, the Cabanyal is the old fishermen's quarter by the beach, and the Albufera lagoon and its rice fields lie within the municipal boundary. Valencian and Spanish are co-official, and since 2017 the city's official name follows the Valencian spelling. Addresses give street, number and postcode. Metrovalencia's metro and trams cover the metropolitan area. The Fallas festival turns the city into an open-air workshop and fireworks ground each March, inscribed as intangible heritage in 2016. Newcomers most often go wrong by expecting only an old town and a beach, when the municipality also holds a lagoon, rice fields and market gardens.",
    layout:
      "The old centre is the Gothic quarter around the Silk Exchange and the Central Market; the old bed of the Turia River, diverted after a 1957 flood, has been turned into a green ribbon park running across the whole city; at its eastern end is the City of Arts and Sciences, designed by Santiago Calatrava, with an opera house, a science museum and an aquarium.",
    gettingAround:
      "The airport is about 8 km from the centre, with a direct metro line. The city's metro and tram network is convenient, and the flat terrain also makes it great for cycling. Mediterranean climate: hot but not scorching summers, mild winters, plenty of sun year-round.",
    culture:
      "Valencian and Spanish are both official. The Las Fallas festival each March is the city's biggest event, when neighbourhoods build giant papier-mâché figures and burn them on the final night. Tipping is not required.",
    seeAndDo:
      "The City of Arts and Sciences; the Central Market and Silk Exchange (a World Heritage Site); cycling the Turia riverbed park; the old-town cathedral; trying authentic paella (Valencia is its birthplace). Nearby, the Albufera lagoon shows rice paddies and wetland.",
    whenAndTips:
      "Las Fallas in March is exciting but crowded and loud with fireworks; spring and autumn have the most comfortable weather. Summer beach season brings higher prices. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  granada: {
    identity:
      "Granada, in Andalusia at the foot of the Sierra Nevada, is known for the Alhambra — one of the best-preserved Islamic-era palace complexes on the Iberian Peninsula and, in 1492, the last Moorish stronghold in Spain. The Caribbean island nation of Grenada takes its name from \"Granada\", given by Columbus in 1498.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   格拉纳达市镇 2025-01-01 = 235,294（2026 临时数 240,026，+2.0%，增速偏快）。同条的「都会区约57万」非 INE 法定口径。
    howItWorks:
      "Granada is the capital of Granada province in Andalusia, governed by an elected council, about 88 km² with about 235,000 people as of 1 January 2025 and a metropolitan area of about 573,000; the region runs health and education, the city planning and local services. The city stands at the foot of the mountains at 738 m where four rivers meet: the Alhambra on the hill to the east, inscribed as World Heritage in 1984 with the Albaicín facing it, the caves of Sacromonte in the valley, the cathedral and the centre on the flat, and the last Nasrid kingdom ended here in 1492; some 47,000 students make it a university city, the light rail opened in 2017, the airport lies 15 km west, the Sierra Nevada ski station 30 km south-east, and the bars serve tapas free. Newcomers most often go wrong by taking Granada for a palace, when the palace is on the hill and the city below, with a climb between them.",
    layout:
      "The Alhambra sits on a hill on the city's east side, overlooking the whole town; the Albaicín, on the old town's north-west, is a whitewashed quarter of Moorish-style narrow lanes facing the Alhambra across a valley; the area around the cathedral in the centre is the main commercial district.",
    gettingAround:
      "The airport is about 15 km from the centre, with an airport bus. The old town's many slopes make it walkable but tiring, especially in the Albaicín. In winter snow peaks of the nearby Sierra Nevada are visible; the city itself has a mild climate, while summer is hot and dry with a large day-to-night temperature swing.",
    culture:
      "Granada keeps a strong Moorish-Andalusian blended culture; ordering a drink at many small bars comes with a free tapa, a local tradition. Tipping is not required. Visiting the Alhambra requires advance booking, and slots are limited.",
    seeAndDo:
      "The Alhambra and the Generalife gardens (book well ahead); watching the sunset over the Alhambra from the Albaicín; the cathedral and Royal Chapel; driving up into the Sierra Nevada for skiing or hiking (skiing in winter, hiking in summer).",
    whenAndTips:
      "Alhambra tickets must be booked weeks in advance online and often sell out in peak season; spring and autumn have the most comfortable weather, and while the mountains are cold in winter the city itself stays mild. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  malaga: {
    identity:
      "Málaga, a Mediterranean port city in Andalusia, is the gateway to the Costa del Sol and the birthplace of the painter Pablo Picasso. Its history goes back to Phoenician times, making it one of the oldest cities on the Iberian Peninsula.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   马拉加市镇 2025-01-01 = 597,173。**「西班牙第六大城市」这条排名复核后仍成立**（第七名穆尔西亚 477,631，差距很大）。
    howItWorks:
      "Málaga is the capital of Málaga province in Andalusia and Spain's sixth city, governed by an elected council, about 398 km² with about 597,000 people as of 1 January 2025; the region runs health and education, the city planning and local services. The city grew around its port: the old town between the Alcazaba and the cathedral, the Picasso Museum and the Pompidou branch in town, Muelle Uno the remade waterfront and La Malagueta the city beach to the east; the Costa del Sol resorts of Torremolinos and Marbella are municipalities of their own, the airport is Spain's third-busiest, the suburban railway joins the airport and the coast, the high-speed line of 2007 reaches Madrid in about two and a half hours, and nearly 30,000 people work in the technology park founded in 1992. Newcomers most often go wrong by taking Málaga for a Costa del Sol resort, when it is a provincial capital with a university, a technology park and a port, and the resorts lie in other municipalities to the west.",
    layout:
      "The old town centres on the Picasso Museum and the Moorish Alcazaba fortress, with the Gibralfaro castle above overlooking the city and port; Malagueta beach sits right at the edge of the old town, an unusually central city beach; new museums such as the Centre Pompidou Málaga have opened in the port district in recent years.",
    gettingAround:
      "The airport is about 8 km from the centre, with a suburban train straight into town. The old town is walkable, and coastal towns nearby are reachable by the Cercanías suburban rail line. Mediterranean climate, mild year-round — the winter average stays above 15 °C, making it one of Europe's few good winter-sun destinations close by.",
    culture:
      "Málaga's pace is relaxed, with a strong beachside chiringuito (beach-bar) culture; grilled sardines on skewers (espetos) are a local specialty. Tipping is not required.",
    seeAndDo:
      "The Picasso Museum and his birthplace house; the Alcazaba and Gibralfaro castle; Malagueta beach; the Centre Pompidou branch. Nearby, the white hill town of Mihas, or inland to the Caminito del Rey gorge walkway.",
    whenAndTips:
      "Winter's mild weather makes it a sun-seeking high season; midsummer is crowded on the coast with higher prices; spring and autumn are best for touring the old town. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  bilbao: {
    identity:
      "Bilbao, the largest city in the Basque Country in northern Spain, straddles the Nervión River. Historically an industrial and port city, it transformed after the Guggenheim Museum opened in 1997 into a landmark of contemporary architecture and art — the origin of the term \"the Bilbao effect\".",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   毕尔巴鄂市镇 2025-01-01 = 350,975。同条的「大毕尔巴鄂约104万」：Gran Bilbao 是巴斯克统计局（Eustat）划定的统计 comarca（35 个市镇），**不是与巴塞罗那 AMB 同性质的法定都会实体**；其确切最新总人口本轮未能从 Eustat 一手表拿到（二手来源给出 91.5 万—116 万互相矛盾），**该数字保留但已知存疑**。
    howItWorks:
      "Bilbao is the capital of Biscay and the largest city of the Basque Country, governed by an elected council, only about 42 km² with about 351,000 people as of 1 January 2025, while Greater Bilbao along the estuary holds about 1.04 million with Barakaldo and Getxo as municipalities of their own; the Basque government sits at Vitoria-Gasteiz and runs health and education, and Biscay levies taxes of its own. The city runs along the Nervión estuary, the Seven Streets of the old town chartered in 1300 on one side, the commercial district of Abando on the other, the Guggenheim of 1997 turning the derelict docks into a new quarter, and the Foster-designed metro running both banks of the estuary; Basque and Spanish are co-official, and the airport lies 12 km north. Newcomers most often go wrong by taking Bilbao for the Basque capital, when the government sits at Vitoria and Bilbao is its economic centre.",
    layout:
      "The old town (Casco Viejo) sits on the east bank of the Nervión, its seven historic streets the old commercial core; across the river, the Abandoibarra district — a former port and industrial zone — has been redeveloped into a modern riverside area, home to the titanium-clad curves of the Guggenheim; Plaza Circular / Federico Moyúa area is the main commercial district.",
    gettingAround:
      "The airport is about 12 km from the centre, with an airport bus. The city has a metro (designed by Norman Foster) and a tram, and the old town is walkable. Temperate maritime climate — cooler and wetter than most of Spain, with summers that are not especially hot.",
    culture:
      "Basque and Spanish are both official here, and Basque identity runs deep. Local food is known for pintxos — elaborate small bites, the Basque cousin of tapas. Tipping is not required.",
    seeAndDo:
      "The Guggenheim Museum; pintxos-hopping along the old town's seven streets; the Bilbao Fine Arts Museum (a rich collection); the funicular up Mount Artxanda for a city panorama. Nearby, San Sebastián (a bay-front beach city) or the Cantabrian mountains.",
    whenAndTips:
      "Summer (June–September) has the most comfortable weather, though rain is still possible — carry something waterproof; winter is cold and damp. Book Guggenheim tickets online in advance to skip the queue. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  "santiago-de-compostela": {
    identity:
      "Santiago de Compostela, capital of Galicia in north-west Spain, is the endpoint of the Camino de Santiago, one of Catholicism's three great pilgrimage routes, drawing pilgrims from across Europe on foot for hundreds of kilometres since the Middle Ages.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Santiago de Compostela (municipality 220 km²; ~100,000 2025; capital of Galicia (Xunta), though A Coruña and Vigo larger; old town UNESCO 1985; cathedral, end of the Camino, hundreds of thousands of pilgrims/yr; university 1495; Galician/Spanish; airport 12 km; ~1,800 mm rain)
    howItWorks:
      "Santiago de Compostela is the capital of Galicia, seat of the regional government and parliament that run health and education, though not the largest city, A Coruña and Vigo both being bigger; the municipality is governed by an elected council, about 220 km² with about 100,000 people in 2025. The old town was inscribed as World Heritage in 1985, the cathedral and the Praza do Obradoiro are the end of the Camino, where hundreds of thousands of pilgrims arrive each year, and the university founded in 1495 makes a quarter of residents students; Galician and Spanish are co-official, the airport lies 12 km east, the train reaches Madrid in about three hours, and some 1,800 mm of rain a year make rain daily life. Newcomers most often go wrong by taking Santiago for a small pilgrim town, when it is the political centre and university city of a region.",
    layout:
      "The old town centres on Santiago Cathedral, said to hold the remains of the Apostle James; cobbled lanes, monasteries and Romanesque-to-Baroque buildings interlace through it, and the whole old town was World Heritage-listed in 1985; the Praza do Obradoiro in front of the cathedral is the symbolic finish line after hundreds of kilometres on foot.",
    gettingAround:
      "The airport is about 10 km from the centre, with an airport bus. The old town is small and entirely walkable. Temperate maritime climate — Galicia is one of the wettest regions in Spain, so carry rain gear year-round; summer is relatively cool and pleasant.",
    culture:
      "Galician and Spanish are both official here. Pilgrimage culture runs through daily life, and pilgrims who have just finished hundreds of kilometres on foot are a common sight in front of the cathedral. Tipping is not required.",
    seeAndDo:
      "Santiago Cathedral and the Pilgrimage Museum; wandering the old town's cobbled streets; Galician seafood and octopus (pulpo à feira); nearby coastal towns around the Rías Baixas to see the drowned-valley coastline.",
    whenAndTips:
      "Summer (June–September) is relatively dry and pleasant, the high season for walking the Camino and sightseeing; other seasons are rainy, so bring rain gear. Around 25 July, the Feast of St James, is the peak of religious celebration, with more pilgrims and visitors than usual. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  zaragoza: {
    // identity sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   **萨拉戈萨已升到第四**，反超了塞维利亚：2025-01-01 萨拉戈萨 699,007 > 塞维利亚 688,714。
    identity:
      "Zaragoza, capital of Aragon and one of Spain's most populous cities, sits where the Ebro River meets its tributaries. It has been the core city of the Ebro Basin since Roman times and is a transport hub toward the Pyrenees and the northern coast.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   同上，排名一并改。
    howItWorks:
      "Zaragoza is the capital of Aragon, seat of the regional parliament and government that run health and education; the municipality is governed by an elected council, about 974 km² with about 699,000 people as of 1 January 2025, among the five largest cities in Spain and holding half of Aragon. The city lies on the south bank of the Ebro, the Basilica del Pilar and the Roman remains of Caesaraugusta in the old town, the Aljafería palace to the west, the Expo 2008 site in a bend of the river, one tram line crossing the town, the high-speed train about 75 minutes to Madrid and 90 to Barcelona, the Opel plant and the logistics parks its industry, and the Cierzo wind blowing from the north-west in winter. Newcomers most often go wrong by taking Zaragoza for a stop between Madrid and Barcelona, when it is Spain's fifth city and half of Aragon lives here.",
    layout:
      "The old town centres on the Basilica of Our Lady of the Pillar (Baroque, on the banks of the Ebro) and Roman-era wall remains; Mudéjar architecture — Christian buildings that incorporate Islamic decorative techniques — is a local hallmark, World Heritage-listed in 2001.",
    // gettingAround sources: 机场距离：注册表坐标算出直线 12.8 公里；原文短于直线、不可能成立，已改。
    gettingAround:
      "The airport is about 13 km from the centre. The old town is walkable, and the city has a tram. Continental climate — hot and dry summers, occasional hard cold in winter, and windy year-round (the region's north-westerly \"cierzo\" wind, shaped by the Ebro Basin's topography, is well known).",
    culture:
      "Zaragoza's biggest annual event is the October Fiestas del Pilar. Tipping is not required.",
    seeAndDo:
      "The Basilica of Our Lady of the Pillar; the Aljafería Palace (a Mudéjar-style royal palace, World Heritage-listed); the Roman theatre ruins and museum. A day trip can reach the Bardenas Reales badlands.",
    whenAndTips:
      "Spring and autumn have the most comfortable weather; summer is hot and dry, so use sun protection and drink water; the whole city celebrates during the October Pilar festival, so book accommodation ahead. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  palma: {
    identity:
      "Palma is the capital of Mallorca, the largest of the Balearic Islands, on the Bay of Palma with the Serra de Tramuntana behind it — one of the most popular Mediterranean holiday destinations, with a historic old town of real depth.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   帕尔马市镇 2025-01-01 = 443,196（2026 临时数 443,833，几乎无变化）。
    howItWorks:
      "Palma is the capital of the Balearic Islands, seat of the regional parliament and government that run health and education, and of the Consell de Mallorca, the island council that runs roads and social services; the municipality is governed by an elected council, about 209 km² with about 443,000 people as of 1 January 2025, half the island. The cathedral stands at the top of the old town above the bay, Bellver Castle on the hill to the west, the seafront promenade running west along the bay, the resort strip of Playa de Palma to the east within the municipality, and Catalan and Spanish co-official; the airport lies 8 km east with 31 million passengers in 2023, Spain's third-busiest, the cruise pier in the harbour, and the old Sóller train leaves from the centre. Newcomers most often go wrong by taking Palma for a resort, when it is a capital of 438,000 and the resorts ring the island.",
    layout:
      "The old town centres on Palma Cathedral (Gothic, built right on the water), with Bellver Castle overlooking the city; the Bay of Palma is lined with beach resort development; the Serra de Tramuntana in the island's north-west is prime hiking and cycling country, while the east coast has numerous sea caves and small coves.",
    gettingAround:
      "The airport is about 8 km from the centre, with a direct bus. The old town is walkable; getting around the island means renting a car or taking a bus, and there is a scenic vintage train along part of the coast. Mediterranean climate — hot, dry summers, mild winters, a good destination year-round.",
    culture:
      "Catalan (in its Mallorcan dialect) and Spanish are both official. Island life is relaxed, with a strong beachside-restaurant culture. Tipping is not required.",
    seeAndDo:
      "Palma Cathedral; Bellver Castle; wandering the old town; hiking or cycling the Serra de Tramuntana (a famous round-island cycling route); the Caves of Drach and other sea caves on the east coast; a wide range of beaches around the island, each with its own character.",
    whenAndTips:
      "May–June and September are pleasant and relatively uncrowded; July–August is Europe's peak holiday season, with higher prices and more people; winter is mild, good for hiking and cultural sightseeing. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  "santa-cruz-de-tenerife": {
    identity:
      "Santa Cruz de Tenerife is the capital of Tenerife, the largest of the Canary Islands, on the Atlantic and the gateway to Teide. The Canary Islands sit near the north-west African coast but are Spanish territory throughout, with a mild year-round climate that makes them a popular winter destination for Europeans.",
    // howItWorks sources: en.wikipedia (2026-09, Tier B short): Santa Cruz de Tenerife (municipality ~150 km²; ~212,000 2025; urban ~538,000; co-capital of the Canaries alternating with Las Palmas; province capital; Cabildo de Tenerife; port; Auditorio; Anaga biosphere 2015, 82% of municipality natural; Las Teresitas; tram to La Laguna; Tenerife North 10 km, South 60 km; carnival)
    howItWorks:
      "Santa Cruz de Tenerife is one of the two capitals of the Canary Islands, sharing the seat of the regional government by rotation with Las Palmas, and the capital of its province and seat of the Cabildo de Tenerife, the island council that runs roads, water and social services; the municipality is governed by an elected council, about 150 km² with about 212,000 people in 2025 and an urban area of about 538,000. The city grew around its port, the Plaza de España and Calatrava's Auditorio by the sea, a tram running inland to La Laguna, Las Teresitas beach to the north-east, and the Anaga mountains, a biosphere reserve, taking up most of the municipality; the north airport lies 10 km away, the south airport and the resorts 60 km south, and the carnival in February is among the largest in the world. Newcomers most often go wrong by taking Santa Cruz for a resort, when the resorts lie at the island's southern end and this is the islanders' capital and port.",
    layout:
      "The centre runs along the bay, with Plaza de España as the city landmark; about 40 minutes' drive inland reaches the entrance to Teide National Park, elevation climbing quickly, with vegetation changing from coastal subtropical growth to high-altitude volcanic desert along the way; the island's north coast is cloudier and wetter, the south dry and sunny, a marked climate contrast.",
    gettingAround:
      "The island has two airports, north and south; Tenerife North is closer to the city, with an airport bus and taxis. The city has a tram; getting around the island means renting a car or taking a long-distance bus. Mild year-round — coastal daytime temperatures mostly run 18–28 °C, while the high mountain areas can see snow in winter.",
    culture:
      "Tenerife's Carnaval is one of the largest carnival celebrations in the world, second only to Rio de Janeiro's. Tipping is not required.",
    seeAndDo:
      "Teide National Park (a cable car runs close to the summit); the contemporary Auditorio de Tenerife concert hall in central Santa Cruz; hiking in the Anaga mountains nearby; the island's black volcanic-sand beaches and the resort beaches of the south coast.",
    whenAndTips:
      "Good year-round; winter (December–February) is peak season for sun-seeking Europeans. The Teide summit cable car is weather-dependent, so check conditions before heading up; the mountains have a large day-to-night temperature swing and strong UV, so dress warmly and use sun protection. Citizens of most countries follow Schengen-area rules for short visits.",
  },

  // ── Spain batch 2 (2026-09-05) ──
  "san-sebastian": {
    // identity sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   圣塞巴斯蒂安市镇 2025-01-01 = 189,507（2026 临时数 189,668，几乎无变化）。同条的「都会区约44万」（Donostialdea）是 Eustat 的统计 comarca，非法定都会实体。
    identity:
      "San Sebastián (Donostia in Basque) lies on the Bay of Biscay in the Basque Country of northern Spain about 20 km from the French border, with about 190,000 people (1 January 2025). The shell-shaped La Concha beach is considered one of the finest city beaches in Europe, framed by Monte Urgull and Monte Igueldo; the pintxos bars of the old town and one of the world's densest concentrations of Michelin-starred restaurants make it a food capital. The San Sebastián International Film Festival, founded in 1953, is among Europe's major film festivals, the city was European Capital of Culture in 2016, and Chillida's sculpture 'The Comb of the Wind' stands on the rocks at the western end of the bay.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   同上。
    howItWorks:
      "San Sebastián is the capital of Gipuzkoa, officially bilingual as 'Donostia / San Sebastián', governed by an elected council, about 61 km² with about 190,000 people as of 1 January 2025 and a metropolitan area of about 436,000; the Basque region runs health and education, the city planning and local services. The city wraps around the bay of La Concha: the old town at the foot of Monte Urgull with the pintxo bars packed into a few streets, La Concha beach curving along the bay, Monte Igueldo at the far end, and Zurriola surf beach in Gros across the Urumea; the film festival in September and the density of Michelin restaurants are its emblems, the French border lies about 20 km east, the airport at Hondarribia on the border, and Bilbao 100 km west. Newcomers most often go wrong by taking San Sebastián for a beach, when it is a provincial capital and the beach only the side it faces.",
    layout:
      "The city wraps around La Concha bay: the old town sits by the harbour at the foot of Monte Urgull, centred on the Plaza de la Constitución and thick with pintxos bars; the nineteenth-century Centro lies south of the old town, and Gros across the Urumea river has the Zurriola surf beach and the Kursaal congress centre; La Concha and Ondarreta beaches run west round the bay to Monte Igueldo (funicular, old amusement park), with the Comb of the Wind at the far end. The station is on the east bank of the river, and the airport about 20 km east at Hondarribia.",
    gettingAround:
      "San Sebastián Airport (EAS) at Hondarribia, about 20 km from the city, mainly serves Madrid and Barcelona, with a bus of about 35 minutes; Bilbao Airport (about 100 km) has far more routes and a direct coach of about 1 hour 15. Trains take about 5 hours from Madrid and about 5.5 from Barcelona; from Hendaye in France the Euskotren light rail crosses the border in about 35 minutes. City buses and a light rail run, the centre and beaches are walkable, and cycle paths are good. The climate is temperate maritime, mild and wet.",
    culture:
      "Spanish and Basque are both used (bilingual signs), and English works in the tourist areas. Pintxos-bar custom: take cold pintxos from the counter yourself, order hot ones, pay by the plate at the end, and eat one or two before moving to the next bar; peaks are around 2 pm and 8–9 pm. Book Michelin restaurants months ahead. The Semana Grande fireworks in August and the September film festival are the busiest times. Basque cooking means seafood, grilled fish and the burnt Basque cheesecake. Tipping is optional.",
    seeAndDo:
      "La Concha beach and the promenade; a pintxos crawl through the old town (Plaza de la Constitución, Calle 31 de Agosto); Monte Urgull (the castle, the view of the bay); the Monte Igueldo funicular and viewpoint; the Comb of the Wind; the aquarium; the San Telmo Museum (Basque culture); surfing at Gros and the Kursaal; day trips to the old town of Hondarribia, Getaria and the Basque coast, the Guggenheim in Bilbao and Biarritz in France.",
    whenAndTips:
      "June–September is best, though lodging is very expensive in July–August and during the film festival; spring and autumn are wet but the food is unaffected. Two days for the city. Linked with Bilbao and the Basque coast, or across the border into the French Basque Country.",
  },
  toledo: {
    identity:
      "Toledo stands on a rocky outcrop in a tight bend of the Tagus about 70 km south of Madrid, with about 87,000 people (2025), the capital of Castilla–La Mancha. It was the capital of the Visigothic kingdom and, after 1085, a key city of Castile, where Christians, Muslims and Jews coexisted in the Middle Ages — the 'city of three cultures'; the cathedral (1226–1493), the Alcázar, the synagogue of Santa María la Blanca (among the oldest surviving synagogue buildings in Europe) and El Greco's 'Burial of the Count of Orgaz' in Santo Tomé are its treasures, and the whole old town was inscribed as a World Heritage site in 1986. Toledo steel swords and marzipan are the traditional products.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   **又一处年份错标**：INE 的 2024-01-01 是 86,281，**87,074 是 2025-01-01 的数**。identity 段标「2025年」用 8.7 万是**对的**，howItWorks 标「2024年」用同一个数字才是错的 —— 与萨拉戈萨同一类错误。
    howItWorks:
      "Toledo is the capital of Castilla–La Mancha, seat of the regional parliament that runs health and education, and of Toledo province; the municipality is governed by an elected council, about 232 km² with about 87,000 people as of 1 January 2025. The old city stands on a hill in a bend of the Tagus, escalators outside the walls carrying people up, the whole old town inscribed as World Heritage in 1986, the cathedral, the Alcázar and the synagogues packed into steep lanes, the 'city of three cultures' recalling Christians, Muslims and Jews living together in the Middle Ages; after Philip II moved the court to Madrid in 1561 it declined for four centuries, the new town lies across the river by the industrial estate, the high-speed train reaches Madrid in about 30 minutes, and most visitors come and go in a day. Newcomers most often go wrong by taking Toledo for a day trip from Madrid, when it is the capital of a region, with a modern city of 80,000 beyond the old town.",
    layout:
      "The old town crowds a hill enclosed on three sides by the Tagus, its streets narrow and steep: the Plaza de Zocodover is the entrance and centre, the Alcázar stands on the highest point to the east, the cathedral in the centre-south, and Santo Tomé, the Jewish quarter (two synagogues, the El Greco Museum) and San Juan de los Reyes on the south-western slope. Bridges link the old town to the banks — the Alcántara bridge to the east and the San Martín bridge to the west. The Mirador del Valle on the ring road across the river to the south gives the classic panorama. The station is in the new town on the east bank, about 20 minutes' walk from the old town (with escalators up the hill).",
    gettingAround:
      "Toledo has no airport with scheduled flights; the nearest is Madrid (about 88 km). The AVE high-speed train from Madrid Atocha takes about 30 minutes with frequent services; buses take about 1 hour. The old town is entirely on foot (steep, with escalators from the car parks), and a tourist train circles the far bank for the panorama. The climate is continental Mediterranean with extreme summer heat (often above 38°C) and cold winters.",
    culture:
      "Spanish is universal. The cathedral charges admission and requires modest dress; Santo Tomé shows a single painting with long queues; the synagogues and mosque remains are heritage sites — keep quiet. The Corpus Christi procession (May–June) is Toledo's grandest event, with the streets carpeted in greenery. Toledo marzipan, partridge stew and Manchego cheese are the local tastes. Tipping is optional.",
    seeAndDo:
      "The cathedral (the El Grecos in the sacristy, the El Transparente altarpiece); El Greco's 'Burial of the Count of Orgaz' at Santo Tomé; the Alcázar (army museum); the Jewish quarter — Santa María la Blanca, the Tránsito synagogue and the Sephardic Museum, the El Greco Museum; the monastery of San Juan de los Reyes; the Cristo de la Luz mosque; the Mirador del Valle; the San Martín and Alcántara bridges; the Plaza de Zocodover; the sword workshops.",
    whenAndTips:
      "March–May and October–November are most comfortable; summers are scorching, so stay indoors at midday; Corpus Christi is crowded. A day for the old town, most often as a day trip from Madrid; an overnight gives the night views and the empty lanes at dawn.",
  },
  cordoba: {
    // identity sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   科尔多瓦市镇 2025-01-01 = 324,159，**较 2024 年的 324,902 下降约 743 人**；2026 临时数 323,017，**再降 1,142 人**。INE 2026-05-07 新闻稿明确把科尔多瓦列为 2025 年人口降幅最大的城市第二位（仅次于加的斯）。**这是本批两个真实下降案例之一，不要顺手写成又涨了。**
    identity:
      "Córdoba lies on the Guadalquivir in Andalusia, with about 324,000 people (1 January 2025). In the tenth century it was the capital of the Umayyad caliphate, with a population that may have reached several hundred thousand — one of the largest and most prosperous cities in Europe at the time; the Great Mosque begun in 785 is famous for its forest of hundreds of double red-and-white arches, and in the sixteenth century a cathedral was built in its centre, making today's Mosque-Cathedral, inscribed as a World Heritage site in 1984 (extended to the whole old town in 1994). Medina Azahara, the caliphal palace-city about 8 km north-west, was inscribed in 2018. The Patios Festival each May, when residents open their flower-filled courtyards, was added to the intangible heritage list in 2012. In summer Córdoba is among the hottest cities in Europe.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   同上。
    howItWorks:
      "Córdoba is the capital of Córdoba province in Andalusia, governed by an elected council, about 1,254 km², the fourth-largest municipality in Spain and mostly hills and farmland, with about 324,000 people as of 1 January 2025, declining in recent years; the region runs health and education, the city planning and local services. The old town lies on the north bank of the Guadalquivir, the Mosque-Cathedral inscribed as World Heritage in 1984 with the whitewashed lanes of the Judería around it and the Roman bridge across the river; in the tenth century this was the capital of the Caliphate of Córdoba and the second-largest city in Europe, the palace city of Medina Azahara 8 km west joined the listing in 2018, and the patio festival in May opens private courtyards to the public; the high-speed train reaches Madrid in about 1 hour 45 and Seville in about 45 minutes, the airport has only a few scheduled routes, and July and August highs averaging 37°C are the hottest in Europe. Newcomers most often go wrong by taking Córdoba for a mosque, when it is a provincial capital of 325,000 whose streets empty on summer afternoons.",
    layout:
      "The old town lies on the north bank of the Guadalquivir: the Mosque-Cathedral stands by the river, the Roman bridge crosses from its south side to the Calahorra tower, the Alcázar de los Reyes Cristianos lies west of the mosque, and the Judería (the Calleja de las Flores, the synagogue) is a maze of whitewashed lanes to the north-west; the old town extends north to the Plaza de las Tendillas and the Plaza de la Corredera. The festival patios cluster in the San Basilio quarter west of the mosque. The station is about 2 km north of the old town, and Medina Azahara about 8 km north-west.",
    gettingAround:
      "Córdoba's airport has only a few scheduled routes (as of September 2026, the Spanish airport operator Aena lists flights to Barcelona and Gran Canaria); most travellers use Seville (about 140 km) or Málaga (about 160 km). The AVE high-speed train takes about 1 hour 45 from Madrid, about 45 minutes from Seville and about 1 hour from Málaga — the easiest way in. The old town is walkable, with the station about 25 minutes on foot or a bus ride from the mosque; Medina Azahara is reached by a tourist bus (changing at its visitor centre). The climate is Mediterranean with extreme summer heat (average highs of about 37°C in July–August) and mild winters.",
    culture:
      "Spanish is universal. The Mosque-Cathedral is a working Catholic cathedral — dress modestly and keep quiet, with a free early-morning slot; the synagogue (1315) is a heritage site. At the Patios Festival (early to mid-May) queues form at each courtyard and the plants are not to be touched; May also brings the Crosses festival and the flower fair. Andalusian food includes salmorejo cold soup, fried aubergine with honey and oxtail stew. Tipping is optional.",
    seeAndDo:
      "The Mosque-Cathedral (the forest of arches, the mihrab); the Roman bridge and the Calahorra tower; the Alcázar de los Reyes Cristianos and its gardens; the Judería (the Calleja de las Flores, the synagogue, the bullfighting museum); the Plaza de la Corredera; the Palacio de Viana (twelve courtyards); the ruins of Medina Azahara; the May Patios Festival; the Arab baths; sunset on the Guadalquivir.",
    whenAndTips:
      "March–May is best (the May patios and flower fair) along with October–November; avoid the midday heat in summer. A day to a day and a half for the city, half a day for Medina Azahara. On the Madrid–Seville high-speed line, linked with Seville and Granada on an Andalusian route.",
  },
  salamanca: {
    // identity sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   萨拉曼卡市镇 2025-01-01 = 145,583（2026 临时数 146,816）。
    identity:
      "Salamanca lies on the Tormes river on the Castilian plateau of north-western Spain, with about 146,000 people (1 January 2025). The University of Salamanca, founded in 1218, is the oldest in Spain and among the oldest in Europe, and the sixteenth-century School of Salamanca was hugely influential; the whole old town is built of the local golden sandstone that glows at sunset, and it was inscribed as a World Heritage site in 1988. The Baroque Plaza Mayor (1729–1755) is regarded as one of the most beautiful squares in Spain, the old and new cathedrals stand joined together, and the three hundred-odd shells on the Casa de las Conchas and the little frog on the university façade are details every visitor hunts for. Salamanca is a popular city for learning Spanish.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   同上。
    howItWorks:
      "Salamanca is the capital of Salamanca province in Castile and León, governed by an elected council, only about 40 km² with about 146,000 people as of 1 January 2025; the region runs health and education, the city planning and local services. The old city stands on a terrace at 800 m above the north bank of the Tormes, inscribed as World Heritage in 1988, golden sandstone its groundwork: the university founded in 1218 is the oldest in Spain, the old and new cathedrals stand side by side, the Plaza Mayor is a masterpiece of eighteenth-century Baroque, and the House of Shells lies on the university street; some 30,000 students and the many foreigners who come to learn Spanish keep the old town young all year, Madrid lies about 210 km east, the Portuguese border about 80 km west, and there is no regular airport. Newcomers most often go wrong by taking Salamanca for a university and nothing more, when it is a provincial capital with residential districts spread around the old town.",
    layout:
      "The old town rises on the north bank of the Tormes, with the Plaza Mayor at the centre-north; the Rúa Mayor runs south to the Casa de las Conchas, the Clerecía church and the university, and beyond them the two cathedrals, with the Roman bridge just below. The convent of San Esteban lies to the south-east. The station is about 1.5 km north-east of the old town and the bus station to the north-west. A path on the south bank gives the view of the old-town skyline.",
    gettingAround:
      "Salamanca's local airport has very few flights; the nearest major airport is Madrid (about 200 km). Trains from Madrid Chamartín take about 1 hour 40 (Alvia) to 2.5 hours, buses about 2.5 hours; from Porto in Portugal about 4 hours. The old town is walkable. The climate is continental Mediterranean with hot dry summers and cold winters.",
    culture:
      "Spanish is universal, and as a centre of Spanish-language teaching the city has many foreign students. The old university buildings can be visited, and finding the frog on the façade is a tradition; the cathedrals charge admission and the towers can be climbed (the Ieronimus route). Student 'tunas' — troupes in period dress playing and singing — are a common sight in the squares. Local food includes roast suckling pig, chanfaina rice and ham; tapas culture thrives in the bars around the Plaza Mayor. Tipping is optional.",
    seeAndDo:
      "The Plaza Mayor (at night); the university façade and old schools, and the 'Sky of Salamanca' ceiling fresco; the Casa de las Conchas and the Clerecía towers; the new and old cathedrals (tower climb); the Roman bridge and the south-bank view of the old town; the convent of San Esteban; the Casa Lis museum of Art Nouveau and Art Deco; day trips to the walls of Ávila and the village of La Alberca.",
    whenAndTips:
      "April–June and September–October are most comfortable; summers are hot and winters cold. A day for the old town, watching the sandstone turn gold at dusk. A day trip from Madrid works, or link with Ávila and Segovia.",
  },
  girona: {
    // identity sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   赫罗纳市镇 2025-01-01 = 108,352；2026 临时数 108,233，**下降 119 人**。INE 2026-05-07 新闻稿把赫罗纳列入 2025 年人口降幅最大城市第五位。原文的 10.9 万四舍五入偏松。
    identity:
      "Girona lies at the meeting of four rivers in north-eastern Catalonia about 100 km north of Barcelona, with about 108,000 people (1 January 2025). The Gothic nave of its cathedral, about 23 m across, is the widest Gothic nave in the world; the Jewish quarter of the old town, El Call, is one of the best-preserved medieval Jewish quarters in Europe, and the medieval scholar Nahmanides was born here; the coloured houses along the Onyar, the Arab baths and the walkable walls are the old town's landmarks. 'Game of Thrones' was filmed here. In May the Temps de Flors festival decks the old town with flowers. Girona is the gateway to the Costa Brava and to Dalí's Figueres, and a training base for professional cyclists.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   同上。
    howItWorks:
      "Girona is the capital of Girona province in Catalonia, governed by an elected council, about 39 km² with about 108,000 people as of 1 January 2025, roughly flat with a slight decline; the region runs health and education, the city planning and local services. The old town lies on the east bank of the Onyar, the coloured houses along the river its face, the cathedral's nave the widest Gothic stone vault in the world, the Jewish quarter of the Call among the best preserved in Europe, and the walls walkable end to end; the new town lies on the west bank with the station, the high-speed train reaches Barcelona in about 37 minutes, the airport 12 km south is a low-cost base, the Costa Brava resorts of Lloret and Tossa are municipalities of their own, Catalan is the daily language, and professional cyclists use the city as a training base. Newcomers most often go wrong by taking Girona for part of the Costa Brava, when it lies inland and the beaches are 40 km away in other municipalities.",
    layout:
      "The old town climbs the slope on the east bank of the Onyar, linked to the new town by bridges (one an iron bridge by Eiffel's firm); the cathedral crowns the top, the Jewish quarter lies on the slope below it, the Arab baths and the monastery of Sant Pere lie to the north, and the wall walk runs the high eastern edge of the old town from north to south. The new town lies on the west bank, with the Plaça de la Independència as the dining quarter and the station (including the AVE) about 1 km south-west. The airport is about 12 km south-west, Figueres about 40 km north and the Costa Brava beaches about 30–40 km east.",
    gettingAround:
      "Girona–Costa Brava Airport (GRO), about 11 km in a straight line from the city, is dominated by Ryanair and other low-cost airlines, with a bus of about 25 minutes to the city. The AVE takes about 38 minutes from Barcelona and about 5.5 hours from Paris (direct); regional trains from Barcelona take about 1.5 hours. The old town is walkable; Figueres is 15–40 minutes by train, and the Costa Brava by bus or car. The climate is Mediterranean with hot summers and cool winters.",
    culture:
      "Catalan and Spanish are both used, with signs mainly in Catalan. The cathedral charges admission (with the museum) and requires modest dress; the Jewish quarter's museum tells the story of the medieval community. In mid-May the Temps de Flors fills courtyards, churches and stairways with floral displays — very crowded. Legend says kissing the rear of the lioness statue beside Sant Feliu ensures a return to Girona. Catalan food includes surf-and-turf dishes, grilled calçots (winter–spring) and crema catalana. Tipping is optional.",
    seeAndDo:
      "The cathedral (the nave, the cloister, the 'Tapestry of Creation') and its great stairway; the Jewish quarter and the Museum of Jewish History; the coloured houses on the Onyar and the iron bridge; the wall walk; the Arab baths; the monastery of Sant Pere de Galligants and the archaeology museum; the Plaça de la Independència; the May Temps de Flors; day trips to the Dalí Theatre-Museum in Figueres, the medieval bridge of Besalú and the Costa Brava (Cadaqués, Tossa de Mar).",
    whenAndTips:
      "April–June and September–October are most comfortable, and mid-May's Temps de Flors is the peak and the most crowded time; summers are hot but pair with the beaches. A day for the old town, half a day for Figueres. A very easy day trip from Barcelona and a base for the Costa Brava.",
  },
  "las-palmas": {
    // identity sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   拉斯帕尔马斯市镇 2025-01-01 = 384,023（2024 年 383,516，几乎没变）。**「加那利群岛人口最多的城市」这条排名复核后仍成立**（圣克鲁斯-德特内里费 211,498）。
    identity:
      "Las Palmas de Gran Canaria lies at the north-eastern tip of Gran Canaria, founded in 1478, the largest city of the Canary Islands with about 384,000 people (1 January 2025), sharing the islands' capital status in rotation with Santa Cruz de Tenerife. Columbus put in here on his first voyage in 1492 to repair a rudder, and the Casa de Colón and the Cathedral of Santa Ana in the old Vegueta quarter bear witness to that history; the 3 km Las Canteras beach, sheltered from the surf by a natural reef, is among the best city beaches in Europe. The average temperature is about 21°C all year, the Museo Canario preserves the remains of the island's aboriginal Canarians, and the February Carnival is one of the largest in Spain.",
    // howItWorks sources: 西班牙国家统计局（INE）《Cifras oficiales de población de los municipios españoles》（Padrón 户籍登记市镇人口），参考日 **2025-01-01**，由 Real Decreto 1117/2025（2025-12-03）宣布定案、BOE 2025-12-11 公布。子代理直接下载 INE 官方数据表 t=79543 的原始 CSV，**级别 1**。https://www.ine.es/jaxiT3/Tabla.htm?t=79543
    //   发布节奏：**定案数**参考日每年 1 月 1 日、**次年 12 月初**以皇家法令宣布（滞后约 11 个月）；**ECP 季度数据**在每季度后约 5—6 周发布，且**从 2026 年 5 月这期起每年 5 月刊会随附上一个 1 月 1 日的主要城市市镇级临时数**。
    //   西班牙**没有统一的法定都会区口径** —— 只有巴塞罗那的 Àrea Metropolitana de Barcelona（2011 年加泰法律 31/2010 设立）是货真价实的法定实体；毕尔巴鄂「Gran Bilbao」、圣塞巴斯蒂安「Donostialdea」是 Eustat 划定的统计 comarca；塞维利亚/瓦伦西亚/格拉纳达的「都会区/连绵区」找不到对应的官方法定口径。
    //   同上。
    howItWorks:
      "Las Palmas de Gran Canaria is one of the two capitals of the Canary Islands, sharing the seat of the regional government by rotation with Santa Cruz de Tenerife, and is also the capital of Las Palmas province and seat of the Cabildo of Gran Canaria, the island council — a tier of government particular to the islands that runs roads, water and social services. The municipality has five districts, covers about 101 km² with about 384,000 people as of 1 January 2025, the most populous city in the archipelago. It has two parts: Vegueta and Triana to the south are the old town founded in 1478, and the isthmus to the north holds Las Canteras beach and the Puerto de la Luz, a supply port on the Atlantic routes. Guaguas buses cover the city, and the airport lies 18 km south. The Canaries have a tax regime distinct from mainland Spain. Addresses give street, number and postcode. Newcomers most often go wrong by taking Las Palmas for a resort, when the southern beach resorts lie 50 km away in other municipalities and this is the provincial capital where islanders live and do business.",
    layout:
      "The city stretches north–south along a narrow coastal strip: the old Vegueta quarter and the Triana shopping district lie at the southern end, with the cathedral, the Casa de Colón and the Museo Canario in Vegueta and Calle Triana as the pedestrian shopping street; Las Canteras beach and the Isleta peninsula are at the northern end, with the Parque Santa Catalina, the port and the Alfredo Kraus auditorium (at the beach's southern end) nearby; the two ends lie about 6 km apart, linked by bus. The airport is about 19 km south of the city, the Maspalomas dunes about 55 km south, and Roque Nublo about 40 km away in the island's mountainous centre.",
    gettingAround:
      "Gran Canaria Airport (LPA), about 19 km from the city, is one of Spain's major airports with flights across Europe and to the mainland, and the 60 airport bus reaches the city in about 25 minutes. There is no railway on the island; the Global bus network covers it, and the city's Guaguas buses are frequent — the beach district and the old town are each walkable, with about 20 minutes by bus between them. A hire car is best for circling the island. The climate is subtropical and dry, warm all year with very little rain and occasional Saharan dust.",
    culture:
      "Spanish is universal, and English and German work in the tourist areas. Keep quiet in the cathedral and historic buildings of Vegueta; the beach has lifeguards and zones (surfing at La Cícer). The Carnival (February–March), with its queen election and costume parades, is the biggest local event. Canarian food includes wrinkled potatoes with mojo sauce, grilled fish, gofio toasted flour and local rum and wine. Tipping is optional.",
    seeAndDo:
      "Las Canteras beach (the promenade, snorkelling on the reef, sunset); the Vegueta old town — the Cathedral of Santa Ana (tower climb), the Casa de Colón, the Museo Canario, the chapel of San Antonio Abad; Calle Triana; the Parque Santa Catalina and the science museum; the Isleta viewpoint; the Sunday market in Vegueta; day trips to Roque Nublo and the mountain village of Tejeda, the Maspalomas dunes, Agüimes and Arucas on the north coast.",
    whenAndTips:
      "Pleasant all year; October–May is the peak for European visitors and lodging is tight during Carnival; summers are warm with trade winds. One or two days for the city, two for the island. The base for Gran Canaria, kept separate from the resorts in the south.",
  },
};
