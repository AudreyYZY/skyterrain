import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Croatia ============
  dinara: {
    // 全六段 sources: 主峰锡尼亚尔（迪纳拉峰）1831 m、克罗地亚最高点；第纳里克阿尔卑斯山系得名于此山。⚠️ 红线自查：山体跨境，正文只作纯境内地貌表述、**不提邻国名称**，符合本国判据。核实 2026-09-11，未改动
    seeing:
      "Dinara is Croatia's highest massif; its summit, Sinjal, rises to 1,831 m and is the country's highest point, with the range trending roughly northwest–southeast.",
    formation:
      "The massif is built mainly of Mesozoic limestone and dolomite, uplifted by Alpine-orogeny compression as the type locality of the Dinaric Alps, with extensively developed karst.",
    observation:
      "From the air, Dinara appears as an unbroken grey-white ridge with sparse vegetation and exposed rock at the summit, while the Cetina River valley winds visibly below.",
    distinguish:
      "Dinara and Velebit both belong to the Dinaric range, but Dinara sits inland with a higher summit, while Velebit stretches along the Adriatic coast.",
    concept:
      "As the type locality of the Dinaric Alps, Dinara is key to understanding the mountain backbone within Croatia's three-tier landscape of coast, mountains, and inland plain.",
    history:
      "The foothill communities have long relied on mountain sheep-herding and small-scale farming; medieval fortress remains survive near Knin at the mountain's base.",
  },
  velebit: {
    // 全六段 sources: 全长约 145 km、最高峰瓦干斯基峰 1757 m（源间 1757–1758）、1978 年整体设自然公园（np-sjeverni-velebit.hr，1 级）。核实 2026-09-11，未改动
    seeing:
      "Velebit is Croatia's largest mountain range, stretching about 145 km along the Adriatic coast, with its highest peak, Vaganski Vrh, reaching 1,757 m.",
    formation:
      "Composed mainly of limestone and long subject to karstification, the range is riddled with sinkholes, caves, and deep pits, making it one of Europe's most classic karst landscapes.",
    observation:
      "From the air, Velebit forms a massive grey-white wall hugging the coastline, its western slope dropping sharply to the sea while the eastern slope descends gently into the inland Lika basin.",
    distinguish:
      "Velebit and Učka on the Istrian peninsula are both coastal ranges, but Velebit is far larger, making it Croatia's single largest mountain range.",
    concept:
      "Velebit's steep west face and gentle east face form a classic sample of the rain-shadow effect in Mediterranean-climate mountains: wet on the windward west, dry on the leeward east.",
    history:
      "Designated a nature park in its entirety in 1978, it contains the Northern Velebit and Paklenica national parks; local villages historically relied on grazing and forestry.",
  },
  biokovo: {
    // 全六段 sources: 圣尤雷峰 1762 m、克罗地亚第三高峰；1981 年设自然公园（parksdinarides.org，2 级）。核实 2026-09-11，未改动
    seeing:
      "Biokovo is a steep limestone massif on the Dalmatian coast, its highest peak, Sveti Jure, reaching 1,762 m, Croatia's third-highest summit.",
    formation:
      "Built of Mesozoic limestone and strongly uplifted by Dinaric orogeny, the massif rises nearly 1,800 m within a horizontal distance of only about 12 km from the Makarska shoreline.",
    observation:
      "From the air, Biokovo rises almost vertically from the deep-blue Adriatic, its bare rocky summit contrasting sharply with the narrow coastal plain below.",
    distinguish:
      "Biokovo and Velebit are both karst ranges, but Biokovo is steeper and closer to the sea with almost no transition zone, making it the steepest coastal massif in Croatia.",
    concept:
      "Biokovo's enormous elevation gain over a very short horizontal distance is a classic sample for understanding fault-block karst uplift and Mediterranean vertical climate zonation.",
    history:
      "Designated a nature park in 1981, its summit chapel of Sveti Jure has a long history; the Makarska shoreline below has long been an important Dalmatian fishing and shipping hub.",
  },
  ucka: {
    // 全六段 sources: 沃亚克峰 1401 m、伊斯特拉半岛最高点；山顶观景塔 1911 年建成（pp-ucka.hr，1 级）。核实 2026-09-11，未改动
    seeing:
      "Učka is a limestone massif on the eastern Istrian peninsula, its highest peak, Vojak, reaching 1,401 m — the highest point on the entire peninsula.",
    formation:
      "Built of Mesozoic limestone with developed karst, the massif separates the peninsula from the moist air flows along the Kvarner Gulf coast and is itself an important groundwater catchment.",
    observation:
      "From the air, Učka forms an arcing ridge between the Istrian peninsula and the Kvarner Gulf, its summit viewing tower clearly visible, with sightlines to the Kvarner islands on clear days.",
    distinguish:
      "Učka is smaller than other coastal ranges in Croatia, but it is Istria's only high mountain landform, forming the peninsula's skeletal divide.",
    concept:
      "Učka marks the boundary between the karst plateau of Istria and the Kvarner Gulf coastal landscape, a key reference for understanding the peninsula's overall landform pattern.",
    history:
      "The summit's Vojak observation tower was built in 1911; the range hosts Učka Nature Park, and its trails historically linked the interior with the coast.",
  },
  "gorski-kotar": {
    seeing:
      "Gorski Kotar is Croatia's most mountainous and densely forested region, sitting in the transition zone between the Alps and the Dinaric range, with Risnjak peak reaching 1,528 m.",
    formation:
      "Built of limestone with some siliceous rock, the region is heavily forested and well-watered; the Kupa River rises here from a deep, pool-like karst spring.",
    observation:
      "From the air, Gorski Kotar shows rolling, nearly continuous forest cover, in sharp vegetative contrast with Croatia's other bare-rock karst mountains.",
    distinguish:
      "Gorski Kotar and Velebit are both mountainous, but Gorski Kotar's forest cover is far denser and its rainfall much higher, making it Croatia's wettest mountain region.",
    concept:
      "Sitting at the junction of the Alpine and Dinaric mountain systems, Gorski Kotar is an important sample for understanding the geological relationship where two major orogenic belts meet.",
    // history sources: 里斯尼亚克峰 1528 m；国家公园 1953-09-15 设立、1997 年扩园纳入斯涅日尼克山与库帕河源头（np-risnjak.hr，1 级）—— 原写「1997 年设立」是把扩园年当成了设园年。核实 2026-09-11
    history:
      "Risnjak National Park was established in 1953 and expanded to its present extent in 1997 to take in Snježnik and the source of the Kupa; the region has historically relied on forestry and mountain livestock, with population density long lower than along the coast.",
  },
  papuk: {
    // 全六段 sources: 主峰约 953 m；中新世—上新世为古潘诺尼亚海中的孤岛（正文「上新世」为可接受的概括）；2007 年成为克罗地亚首个、欧洲地质公园网络第 30 个成员（pp-papuk.hr，1 级）—— 本库无其他条目争这个「首个」。核实 2026-09-11，未改动
    seeing:
      "Papuk is the highest massif in the Slavonia region, its summit reaching 953 m, standing isolated above the Pannonian Plain as the region's landmark mountain.",
    formation:
      "Built of an ancient crystalline basement remnant, it was long surrounded by the ancient Pannonian Sea during the Pliocene, standing like an island in the lake before the water receded to reveal today's isolated massif.",
    observation:
      "From the air, Papuk appears as a forested island surrounded by the flat farmland and lowlands of Slavonia, its outline sharply contrasting with the surrounding terrain.",
    distinguish:
      "Unlike Croatia's coastal and inland karst mountains, Papuk is an isolated crystalline-basement remnant within the Pannonian Plain, with a far older geological origin.",
    concept:
      "Papuk's geological history as a former lake island is key to understanding how the Pannonian Basin evolved from ancient lake sediment into today's plain.",
    history:
      "Papuk Geopark was established in 2007, Croatia's first and Europe's thirtieth member of the European Geoparks Network; it preserves geological features such as Late Cretaceous columnar basalt.",
  },
  medvednica: {
    // 全六段 sources: 全长约 42 km、什列梅峰 1035 m；韦特尔尼察洞穴出土穆斯特文化石器（尼安德特人）。核实 2026-09-11，未改动
    seeing:
      "Medvednica lies just north of Zagreb, stretching about 42 km, its highest peak, Sljeme, reaching 1,035 m — the mountain Zagreb residents visit most for hiking and recreation.",
    formation:
      "Built of limestone with developed karst, the mountain contains numerous caves; Veternica Cave has yielded evidence of Paleolithic human activity.",
    observation:
      "From the air, Medvednica forms an east–west forested ridge hugging the northern edge of Zagreb, the capital's most distinctive natural backdrop.",
    distinguish:
      "Medvednica and Papuk are both isolated massifs rising from the Pannonian Plain, but Medvednica sits right next to the capital and receives far more visitors than Papuk.",
    concept:
      "Medvednica is an important watershed for the Sutla and Kupa tributaries of the Sava, and a key landform for understanding Zagreb's siting pattern of mountain behind, river in front.",
    history:
      "Veternica Cave on the mountain preserves evidence of Paleolithic human activity; the name derives from the Croatian word for bear, after the many brown bears once found here.",
  },
  "pannonian-plain-croatia": {
    // 全六段 sources: 约 53% 国土海拔低于 200 m（croatia.eu，2 级）；奥西耶克位于德拉瓦河畔。⚠️ 红线自查：纯境内表述、不提邻国。核实 2026-09-11，未改动
    seeing:
      "The Pannonian Plain is Croatia's flattest region, centered in the Slavonia area between the Sava and Drava rivers, with about 53% of the country's territory below 200 m elevation.",
    formation:
      "The plain is a sedimentary basin left by the gradual silting-up and retreat of the ancient Pannonian Sea in the Pliocene, its thick lacustrine and fluvial deposits forming today's fertile loess and alluvial soils.",
    observation:
      "From the air, the plain presents an endless patchwork of farmland — wheat, corn, and sunflower fields interlacing — in sharp contrast with Croatia's mountainous south.",
    distinguish:
      "The Pannonian Plain differs sharply from Croatia's coastal landscape: flat with deep soils, versus the limestone karst mountains and broken coastline of the coast.",
    concept:
      "The Pannonian Plain is key to understanding the northern lowland backbone within Croatia's three major landform regions — Pannonian lowland, Dinaric mountains, and Adriatic coast.",
    history:
      "The plain has hosted farming settlements since the Neolithic; Slavonia has long been an important granary region, and the largest city, Osijek, sits on the Drava.",
  },
  "neretva-delta": {
    // 全六段 sources: 克罗地亚境内唯一河流三角洲；地中海继尼罗河、波河之后第三大三角洲（Ramsar RIS 585，1 级）。⚠️ 红线自查：未提三角洲上游所在的邻国。核实 2026-09-11，未改动
    seeing:
      "The Neretva Delta is formed by the final roughly 22-km stretch of the Neretva River within Croatian territory, Croatia's only river delta.",
    formation:
      "The delta was built by long-term sediment deposition from the Neretva, its mouth developing reedbeds, lakes, wet meadows, lagoons, and sandbanks.",
    observation:
      "From the air, the delta shows a green wetland landscape threaded with waterways, winding river channels interlacing with regular irrigation canals, in strong contrast with the dry karst mountains nearby.",
    distinguish:
      "Unlike Croatia's inland wetlands of Lonjsko Polje and Kopački Rit further north, the Neretva Delta is a coastal river-mouth delta directly connected to the Adriatic.",
    concept:
      "The Neretva Delta is one of the larger deltas on the Mediterranean coast, an important sample for studying Mediterranean coastal estuarine wetland ecology.",
    history:
      "The delta plain has been cultivated since Roman times; after modern drainage improvements it became an important citrus and vegetable-growing region for Croatia.",
  },
  "lonjsko-polje": {
    // 全六段 sources: 面积 505.6–506.5 km²（源间微差）；1990 年设自然公园、1993 年列入拉姆萨尔（Ramsar RIS 584，1 级）。⚠️ 红线判据：1990 年代的**保护区制度事实**属定位性事实，保留；未涉战争 / 民族 / 政治。核实 2026-09-11，未改动
    seeing:
      "Lonjsko Polje is a floodplain wetland stretching along the middle Sava River, covering 506.5 km², one of the largest protected wetlands in the Danube basin.",
    formation:
      "The wetland landform is shaped by seasonal flooding from the Sava and its tributaries such as the Lonja and Pakra, with river water regularly spilling over the floodplain to form a dynamic mosaic of wet meadows and channels.",
    observation:
      "From the air, Lonjsko Polje shows broad flat green meadows and winding waterways, dotted with traditional Posavina timber-house villages blending softly into the surrounding farmland.",
    distinguish:
      "Lonjsko Polje and Kopački Rit are both Sava–Drava wetlands in northern Croatia, but Lonjsko Polje is known for its traditional timber villages and stork habitat, while Kopački Rit is known for the biodiversity at a river confluence.",
    concept:
      "Lonjsko Polje demonstrates how seasonal river flooding shapes and sustains an entire wetland ecosystem, a classic sample for studying human-land relations on Central European floodplains.",
    history:
      "Declared a nature park in 1990 and listed under the Ramsar Convention in 1993, the village of Čigoč is known as Europe's 'Stork Village' for its resident white storks, and traditional timber houses remain in use today.",
  },
  "kopacki-rit": {
    // 全六段 sources: 总面积 231 km²（含 71 km² 特别动物保护区）；1967 年起受保护、1993 年列入拉姆萨尔（pp-kopacki-rit.hr，1 级）。⚠️ 红线自查：未涉巴拉尼亚地区近代归属议题。核实 2026-09-11，未改动
    seeing:
      "Kopački Rit is an inland-delta-style wetland at the confluence of the Drava and Danube rivers in the Baranja region, covering about 231 km², one of Europe's best-preserved large wetlands.",
    formation:
      "The wetland is shaped by seasonal flooding at the Drava–Danube confluence, forming a dynamic landscape of lakes, marshes, wet meadows, reedbeds, and oxbow lakes.",
    observation:
      "From the air, Kopački Rit shows an intricate network of waterways and mudflats, with sediment deposition at the river confluence clearly visible — a classic sample of river-wetland ecology from above.",
    distinguish:
      "Kopački Rit and Lonjsko Polje are both northern Croatian wetlands, but Kopački Rit sits at the confluence of two major rivers, giving it more dynamic hydrology and higher biodiversity.",
    concept:
      "Kopački Rit is one of the most important fish-spawning grounds in the mid-to-upper Danube, a key sample for studying the ecological function of wetlands at major river confluences.",
    history:
      "Protected since 1967 and Ramsar-listed in 1993, the local population historically relied on fishing and seasonal grazing.",
  },
  "dalmatian-coast": {
    // 全六段 sources: 沿岸 1244 个岛屿、岛礁与礁石（78 岛 + 524 小岛 + 642 礁石的官方口径，2 级转述）；「达尔马提亚型海岸」为地学命名范例。核实 2026-09-11，未改动
    seeing:
      "The Dalmatian coast is Croatia's most distinctive stretch of Adriatic coastline, with numerous elongated islands and channels arranged in neat bands parallel to the shore.",
    formation:
      "This coastline formed when post-glacial sea-level rise drowned Dinaric fold ridges running nearly parallel to the shore, the ridge crests emerging as elongated islands while the valleys between them became channels.",
    observation:
      "From the air, the Dalmatian coast shows row after row of elongated islands running parallel to the shoreline, like a drowned array of ridges — a highly distinctive landform pattern.",
    distinguish:
      "A Dalmatian-type coast differs from the more common ria coast: rias form from drowned valleys running perpendicular to the shore, while Dalmatian coasts form from drowned fold ridges running parallel to it.",
    concept:
      "This coastal landform type is known in geomorphology as a 'Dalmatian coast,' the global type example for the category; Croatia's coastline has 1,244 islands, islets, and rocks.",
    history:
      "Coastal towns have been important Mediterranean shipping nodes since Roman and Byzantine times; under Venetian rule this coast was long an important trade and shipbuilding center.",
  },
  "istria-coast": {
    // 全六段 sources: 伊斯特拉海岸线约 430 km（Britannica，2 级）；terra rossa 红土成因为地学常识。核实 2026-09-11，未改动
    seeing:
      "The Istrian coast is the western shore of the Adriatic's largest peninsula, stretching about 430 km, lined with historic port towns including Rovinj, Poreč, and Pula.",
    formation:
      "The shore is covered in a red-tinted, iron-oxide-weathered limestone soil known locally as 'Red Istria'; the peninsula as a whole is a karst limestone plateau with gently sloping coastal terrain.",
    observation:
      "From the air, Istria's west coast shows a striking contrast of reddish-brown fields against blue sea, with olive groves and vineyards spread across the gentle slopes — a classic Mediterranean agricultural landscape.",
    distinguish:
      "The Istrian coast and the Dalmatian coast are both part of Croatia's Adriatic shoreline, but Istria's west coast has gentle slopes and is known for its red-soil farmland, while the Dalmatian coast is defined by steep mountains and parallel island chains.",
    concept:
      "Istria's red-soil coast is a classic sample for studying terra rossa weathering on Mediterranean karst plateaus; the fertile red soil underlies the region's wine and olive-oil production.",
    history:
      "The port towns of Rovinj, Poreč, and Pula were successively ruled by Rome and Venice, and preserve extensive Roman and Venetian architectural heritage.",
  },
  "kvarner-gulf": {
    // 全六段 sources: 湾内水深逾 100 m；里耶卡为克罗地亚最大货运港（均为 3 级来源，定性表述，未作为数字唯一依据）。核实 2026-09-11，未改动
    seeing:
      "The Kvarner Gulf is a bay in the northern Adriatic between the Istrian peninsula and the Croatian mainland, ringed by islands including Cres, Krk, Pag, Rab, and Lošinj.",
    formation:
      "The gulf formed when a tectonic depression between Istria and the mainland was flooded by the sea; its waters exceed 100 m in depth, and the surrounding islands share the same karst limestone character.",
    observation:
      "From the air, the Kvarner Gulf shows an open expanse of water ringed by islands, with the port district of Rijeka at the gulf's head clearly visible — a transitional sea between Istria and Dalmatia.",
    distinguish:
      "Unlike the narrow, parallel island chains of the Dalmatian coast, the Kvarner Gulf's islands are more loosely arranged and larger, forming an open bay rather than a string of narrow channels.",
    concept:
      "The Kvarner Gulf's depth, sufficient for large cargo ships, is a classic sample for understanding how deep-water bays determine port siting; this is why Rijeka became Croatia's largest port.",
    history:
      "Rijeka has been an important port since Austro-Hungarian times, historically one of Central Europe's main outlets to the Mediterranean.",
  },
  "plitvice-lakes": {
    // 全六段 sources: 16 湖、园区总落差 912 m（1279 → 367 m）、钙华堤坝年增 1–3 cm（公园官网引 Srdoč/Horvatinčić 研究，1 级）；1979 年列入 UNESCO、2000 年扩界，面积 296.85 km²（whc.unesco.org/en/list/98，1 级）；distinguish 段与 krka 并排读无互证伪。核实 2026-09-11，未改动
    seeing:
      "Plitvice Lakes National Park is a system of 16 lakes linked by travertine barriers along a valley with 912 m of relief, one of Croatia's best-known natural landscapes.",
    formation:
      "The lakes are connected by travertine (tufa) barriers and waterfalls, built up as calcium carbonate in the water is deposited through the action of algae and moss at about 1–3 cm per year, forming natural dams over thousands of years.",
    observation:
      "From the air, Plitvice Lakes appear as a string of lakes in varying shades of green and blue, stepping down the valley in terraces, waterfalls and forest interlacing — a highly distinctive travertine-lake landscape.",
    distinguish:
      "Plitvice Lakes and Krka National Park are both Croatian travertine-karst landscapes, but Plitvice is known for its cascading chain of lakes, while Krka is known for its travertine waterfalls on a single river.",
    concept:
      "Plitvice Lakes is a classic sample for studying how travertine barriers in karst regions continuously grow to shape a stepped chain of lakes.",
    history:
      "In 1979 it became Croatia's first natural site inscribed on the World Heritage List; the park covers 296.85 km² and is Croatia's most-visited national park.",
  },
  "vransko-lake": {
    // 全六段 sources: 面积 30.2 km²、长 13.6 km、宽 1.4–3.4 km、湖面低于海平面约 4 m；鸟类逾 260 种；1999 年设自然公园（pp-vransko-jezero.hr，1 级）。核实 2026-09-11，未改动
    seeing:
      "Lake Vrana is Croatia's largest natural freshwater lake, covering 30.2 km², 13.6 km long and 1.4–3.4 km wide, its surface about 4 m below sea level.",
    formation:
      "The lake is a flooded karst field, a geological 'cryptodepression'; shallow (2–6 m) and nutrient-rich, it is a classic example of a water-filled karst plain lake.",
    observation:
      "From the air, Lake Vrana appears as a long, narrow ellipse ringed by reeds and wetland vegetation, its green-blue tones contrasting sharply with the dry karst mountains of surrounding Dalmatia.",
    distinguish:
      "Lake Vrana and Plitvice Lakes are both Croatian karst lakes, but Lake Vrana is a single large plain lake, while Plitvice is a cascading chain of travertine-terraced lakes.",
    concept:
      "Lake Vrana is a classic sample for studying how karst fields (poljes) fill with water to form lakes; it hosts over 260 recorded bird species and is an important wintering ground for migratory birds in Croatia.",
    history:
      "Declared a nature park in 1999, the lake area has historically been a traditional source of local fishing and reed harvesting.",
  },
  krka: {
    seeing:
      "The Krka River is a limestone karst river in northern Dalmatia with seven travertine barriers along its course; the lowermost, Skradinski Buk, is the longest.",
    formation:
      "Skradinski Buk consists of 17 travertine steps with a total drop of 45.7 m and a width of up to 400 m, a natural stepped barrier formed by long-term calcium carbonate deposition.",
    observation:
      "From the air, the Krka shows alternating lakes and waterfalls along its course; at Skradinski Buk, water spills over layered travertine steps forming a broad white curtain, set against the surrounding karst canyon.",
    // distinguish sources: 7 道钙华堤坝；斯克拉丁瀑布 17 级台阶、落差 45.7 m、宽可达 400 m（npkrka.hr，1 级）；1985-01-24 设国家公园。**2021-01-01 起园区内禁止游客游泳**（croatiaweek.com，2 级）—— distinguish 段原写「允许游客游泳」、zrmanja-canyon 原写克尔卡「以游泳区闻名」，都是 2020 年以前的状态，已改。游泳规定是会变的量。核实 2026-09-11
    distinguish:
      "Krka and Plitvice Lakes are both travertine-karst landscapes, but Krka is a complete river system with a series of travertine barriers along its course, while Plitvice is a closed lake chain; neither is open to visitor swimming today (Krka banned visitor swimming within the park from 2021).",
    concept:
      "Skradinski Buk is one of Europe's largest travertine waterfall systems, an important sample for studying how travertine barriers form on karst rivers.",
    history:
      "Krka National Park was established in 1985; 19th-century watermill buildings survive along the falls, where visitors can see traditional milling and folk exhibits.",
  },
  "sava-river-croatia": {
    // seeing sources: 全长 945 km、计入萨瓦多林卡源头 990 km（国际萨瓦河流域委员会 savacommission.org，1 级）；多瑙河**水量最大**的支流、年均流量约 1564 m³/s、流域第二大（ICPDR，1 级）—— 原写「最长支流、992 km」，长度排名口径不一、992 无来源。⚠️ 红线（克罗地亚跨境地形不提邻国名）：formation 段原写「发源于斯洛文尼亚阿尔卑斯山区」，已改为「发源于阿尔卑斯山区」。锡萨克以下可通航。核实 2026-09-11
    seeing:
      "The Sava is the Danube's largest tributary by discharge, 945 km long (990 km including its longer headwater, the Sava Dolinka), flowing through Zagreb before crossing central Croatia toward the southeast; it is Croatia's largest river by discharge.",
    formation:
      "The Sava rises in the Alps and, after entering Croatia, is joined by tributaries such as the Kupa and Lonja, its valley depositing a broad alluvial plain along its course.",
    observation:
      "From the air, the Sava's channel through Zagreb is relatively regular, widening and meandering more as it flows southeast, with farmland and towns lining the valley on both banks.",
    distinguish:
      "The Sava and Drava are both Danube tributaries flowing through northern Croatia, but the Sava carries more water and passes through the capital, Zagreb, while the Drava lies further north and passes through Osijek.",
    concept:
      "The Sava valley is one of Croatia's most densely populated agricultural and urban corridors, a key river for understanding the riverside-settlement pattern of human-land relations in northern Croatia.",
    history:
      "Historically an important inland shipping route in Central Europe, the Sava is navigable below Sisak, and towns along its valley have long been key transport and trade nodes.",
  },
  "drava-river-croatia": {
    // 全六段 sources: 境内约 323 km、在阿良姆什附近汇入多瑙河；穆拉—德拉瓦—多瑙跨国生物圈保护区 2021 年 UNESCO 认定（IUCN 转述，1 级机构）。⚠️ 红线自查：只写「跨国」、**未点名任何邻国**。核实 2026-09-11，未改动
    seeing:
      "The Drava is a major Danube tributary, flowing about 323 km through Croatian territory and forming part of Croatia's northern border before joining the Danube near Aljmaš.",
    formation:
      "The Drava's lower course has built an alluvial plain with numerous channels, oxbow lakes, and sandbars, a classic braided-river landform formed by long-term lateral shifting and repeated course changes.",
    observation:
      "From the air, the Drava's lower channel winds through interlacing side-channels and sandbars, merging with the Kopački Rit wetland at its confluence with the Danube into a broad network of waterways.",
    distinguish:
      "The Drava and Sava are both northern Croatian Danube tributaries, but the Drava flows through northern Slavonia and the Baranja region and forms the backbone river of the transboundary Mura–Drava–Danube Biosphere Reserve.",
    concept:
      "The Drava's lower braided-river and wetland landforms are a classic sample for studying the natural evolution of a plains river that has not been channelized, and form the core hydrology of one of Europe's largest river protected areas.",
    history:
      "Historically an important waterway linking the Alpine region to the Pannonian Plain, the riverside city of Osijek has been Slavonia's economic and cultural center since Habsburg times.",
  },
  "cetina-canyon": {
    // 全六段 sources: 谷壁最高约 300 m；切蒂纳河全长 101–105 km（测量口径差异，正文取约 105）、发源于迪纳拉山西北坡 385 m 处、达尔马提亚最长河流（长于克尔卡 73 km、兹尔曼尼亚 69 km）；古比察瀑布 48 m（visittrilj.com，2 级）。核实 2026-09-11，未改动
    seeing:
      "The Cetina River Canyon is cut by the final roughly 8-km stretch of the Cetina before it enters the Adriatic, its walls rising up to 300 m.",
    formation:
      "The Cetina flows about 105 km, rising at 385 m elevation on the northwestern slope of Dinara, the longest river in Dalmatia; its lower course cuts a deep canyon through the limestone block between Mosor and Dinara.",
    observation:
      "From the air, the Cetina Canyon shows emerald-green water winding through grey-white limestone walls, with the Gubavica Waterfall dropping 48 m along the way.",
    distinguish:
      "The Cetina and Zrmanja canyons are both karst river canyons in Dalmatia, but the Cetina Canyon lies closer to the coast, entering the Adriatic directly at Omiš, while the Zrmanja Canyon lies further inland.",
    concept:
      "The Cetina Canyon demonstrates how karst rivers cut deep canyons through limestone blocks, a classic sample for studying Dalmatian karst river landforms.",
    history:
      "The canyon has been protected since 1963; the river-mouth town of Omiš was historically an important Dalmatian coastal port.",
  },
  "zrmanja-canyon": {
    // 全六段 sources: 兹尔曼尼亚河全长 69 km、流域约 907 km²（3 级，与 cetina-canyon 比较方向一致）。核实 2026-09-11，未改动
    seeing:
      "The Zrmanja River Canyon is cut by the Zrmanja as it winds through the karst terrain of southern Lika and northern Dalmatia, forming a deep canyon and waterfall system through the limestone.",
    formation:
      "The Zrmanja runs 69 km; after post-glacial sea-level rise, continued erosion of the limestone riverbed carved deep canyons and stepped waterfalls along its course.",
    observation:
      "From the air, the Zrmanja shows a distinctive emerald-green color from dissolved minerals, contrasting sharply with the white limestone canyon walls as the river winds through the karst gorge.",
    distinguish:
      "Compared with the Krka, the Zrmanja Canyon is deeper and its river swifter, known for rafting and kayaking, while the Krka is known for its gentle travertine waterfalls.",
    concept:
      "The Zrmanja Canyon is a classic sample for studying how long-term erosion by a karst river cuts a deep canyon into a limestone riverbed.",
    history:
      "Historically remote and sparsely visited, the canyon has become an important outdoor-sports destination in Croatia with the rise of kayaking and rafting.",
  },
  paklenica: {
    // 全六段 sources: 大帕克莱尼察长约 14 km、宽 500–800 m；小帕克莱尼察长约 12 km、最窄约 10 m；崖壁大帕克莱尼察一侧逾 700 m（安尼奇库克 712 m）；1949-10-19 设国家公园（np-paklenica.hr，1 级）。核实 2026-09-11，未改动
    seeing:
      "Paklenica comprises two adjacent limestone canyons on Velebit's southwestern slope — Velika (Big) and Mala (Small) Paklenica — with walls over 700 m high.",
    formation:
      "Both canyons were carved by long-term erosion from seasonal streams cutting into the limestone massif; Velika Paklenica runs about 14 km and is 500–800 m wide, Mala Paklenica about 12 km with a narrowest point of just about 10 m.",
    observation:
      "From the air, Paklenica shows two narrow canyons cut deep into the Velebit massif, their walls steep and bare against the dense forest crowning the mountain above — a sharp vertical zonation.",
    distinguish:
      "Compared with Croatia's other karst canyons, Paklenica has the steepest walls and greatest vertical relief, making it the core venue for rock climbing in Croatia.",
    concept:
      "Paklenica demonstrates how intermittent water erosion carves deep canyons into limestone massifs, an important sample for understanding the internal landform differentiation of Velebit.",
    history:
      "Paklenica National Park was established in 1949; the Anića Kuk cliff face has long been a landmark venue for local rock climbing.",
  },
  kornati: {
    // 全六段 sources: 约 140 座岛屿与礁石、其中 89 座 1980 年划入国家公园；主岛科尔纳特长约 25 km、宽约 2.5 km（3 级来源，与多方一致）。核实 2026-09-11，未改动
    seeing:
      "The Kornati Islands comprise about 140 islands and rocks, one of the most densely packed archipelagos in the Adriatic, with 89 islands included in Kornati National Park in 1980.",
    formation:
      "The archipelago is part of a drowned ridge of the Dalmatian coast; the largest island, Kornat, is about 25 km long and only 2.5 km wide, its karst terrain riddled with fissures, caves, and cliffs.",
    observation:
      "From the air, the Kornati Islands appear as a dense scatter of grey-white islands set in deep blue sea, their fragmented outlines nearly bare of vegetation — a highly distinctive karst archipelago.",
    distinguish:
      "Compared with Croatia's other islands, Kornati has the highest island density and smallest individual island sizes, permanently uninhabited, representing the most thoroughly drowned stretch of the Dalmatian coast.",
    concept:
      "Kornati is an extreme sample for studying how a Dalmatian-type coast's drowned ridges form a densely packed island chain.",
    history:
      "Historically home only to seasonal fishermen and shepherds, the islands are now an important marine protected area and sailing destination in Croatia.",
  },
  "hvar-island": {
    // 全六段 sources: 亚得里亚海最长岛屿（长 68–69 km）、面积约 297–300 km²、圣尼古拉峰约 626 m（源间 626–629）；年日照「逾 2700 小时」为保守下限；斯塔里格拉德平原 2008 年列入 UNESCO（whc.unesco.org/en/list/1240，1 级）。核实 2026-09-11，未改动
    seeing:
      "Hvar is the longest island in the Adriatic at about 69 km, covering roughly 300 km², its ridge formed by an east–west limestone and dolomite spine, with the highest point, Sveti Nikola, reaching 626 m.",
    formation:
      "The island is part of a drowned ridge of the Dalmatian coast, separated from neighboring Brač by a narrow channel; it retains a rare fertile coastal plain and freshwater springs.",
    observation:
      "From the air, Hvar shows a long east–west outline, its forested ridge overlooking coastal plains planted with vineyards and lavender, the purple fields especially striking in summer.",
    distinguish:
      "Hvar and Brač are both drowned-ridge islands of the Dalmatian coast, but Hvar is longer with a larger coastal plain, while Brač holds the highest point among all Adriatic islands.",
    concept:
      "With over 2,700 hours of sunshine a year, Hvar is a classic sample for studying how Mediterranean rain-shadow and sunlight conditions support drought-tolerant cash crops like lavender.",
    history:
      "The Stari Grad Plain on the island preserves an ancient field-division pattern laid out by Greek colonists in the 4th century BC, one of Europe's few intact examples of ancient land measurement, and is inscribed on the World Heritage List.",
  },
  mljet: {
    // 全六段 sources: 1960-11-11 设国家公园、地中海最早的海洋保护区；大湖与小湖为与海相通的咸水湖（np-mljet.hr，1 级）。核实 2026-09-11，未改动
    seeing:
      "Mljet is a long, narrow island in southern Dalmatia, nicknamed the 'Green Island' for its dense Aleppo pine forest; about 30% of its western end forms Mljet National Park.",
    formation:
      "The park's core is a pair of saltwater lakes, Veliko and Malo Jezero, connected to the sea — a distinctive saltwater lake system formed by seawater seeping through a narrow channel into an inland karst depression.",
    observation:
      "From the air, Mljet shows a long, dark-green forested outline, with the two oval saltwater lakes at its western end clearly visible, their color close to the deep blue of the surrounding sea.",
    distinguish:
      "Mljet's saltwater lakes differ from Croatia's other lakes in that they connect directly to the Adriatic, their salinity affected by tides — a distinctive lake type formed by seawater intrusion into a karst coastal depression.",
    concept:
      "Mljet's saltwater lakes are a classic sample for studying how seawater intrusion into a karst coastal depression forms a land-locked saline lake.",
    history:
      "Mljet National Park was established in 1960, the oldest marine protected area in the Mediterranean; a 12th-century Benedictine monastery survives on St. Mary's Islet at the center of the Great Lake.",
  },
  "brac-island": {
    // 全六段 sources: 面积 396 km²、达尔马提亚最大岛；维多瓦戈拉峰 778 m（源间 778–780）、亚得里亚海诸岛最高点 —— 与 hvar-island「最长岛屿」不同属性，不冲突。核实 2026-09-11，未改动
    seeing:
      "Brač is the largest island in Dalmatia at 396 km², its highest point, Vidova Gora, reaching 778 m — the highest point of any Adriatic island.",
    formation:
      "The island is part of a drowned ridge of the Dalmatian coast, built mainly of white limestone; near Bol on the south coast, the Zlatni Rat beach is a shifting gravel spit that changes shape seasonally with wind and waves.",
    observation:
      "From the air, Brač shows a grey-white ridge outline, with the Zlatni Rat beach on its south coast extending into the blue sea like a slender white tongue — the island's most distinctive landform feature.",
    distinguish:
      "Brač and Hvar are both drowned-ridge islands of the Dalmatian coast, but Brač is higher and holds the highest point among Adriatic islands, while Hvar is known for its long coastal plain.",
    concept:
      "The fine-quality white limestone quarried on Brač is a classic sample for studying the link between island geological resources and human architectural history.",
    history:
      "White limestone quarried on the island was historically used to build monuments such as Diocletian's Palace; the Zlatni Rat beach is today one of Croatia's iconic tourism landmarks.",
  },
};
