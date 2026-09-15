import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Sweden ============
  "kebnekaise-massif": {
    seeing:
      "Kebnekaise is Sweden's highest mountain, in Swedish Lapland, part of the Scandinavian Mountains; its North Peak reaches 2,096.8 m.",
    formation:
      "The massif is built of ancient Caledonian orogeny rock; the North Peak is bare rock with a fixed elevation, while the South Peak is capped by a glacier whose elevation varies year to year — in recent years, as the climate has warmed, the South Peak has been lower than the North Peak for several years running.",
    observation:
      "From the air, the massif's outline is steep, the South Peak's glacier gleaming white in the sun in sharp contrast with the dark, bare rock of the North Peak — a rare high-mountain glacial landform within Sweden.",
    distinguish:
      "Both Kebnekaise and Sarek are high-mountain landforms in Swedish Lapland, but Kebnekaise is Sweden's single highest peak with a striking north-south contrast between its twin summits, while Sarek is a continuous massif holding six peaks above 2,000 m.",
    concept:
      "The reversal in elevation between Kebnekaise's north and south peaks is a classic — and continually updating — case for studying how mountain glacier melt under a warming climate can directly change which point holds a country's highest-point title.",
    // history sources: 首登 1883 Charles Rabot；Tarfala 研究站 1946 由斯德哥尔摩大学设立；南峰高度逐年实测（2025-09-10 为 2088.4m），正文只作趋势表述不写死数字。核实 2026-09-10
    history:
      "French geographer Charles Rabot made the mountain's first recorded ascent in 1883; Stockholm University's Tarfala Research Station, established nearby in 1946, remains one of the most important sites for long-term monitoring of Nordic mountain glaciers.",
  },
  "sarek-mountains": {
    // 全六段 sources: 6 座 2000m 以上山峰、逾 100 条活动冰川、1909 年设立（瑞典 1909 年《国家公园法》一次设立 9 座，为欧洲最早一批，「最早的国家公园之一」限定成立）—— sverigesnationalparker.se（1/2 级）；核实 2026-09-10，未改动
    seeing:
      "Sarek forms the core of Sarek National Park, established in 1909 and one of Sweden's earliest national parks; the park holds six peaks above 2,000 m.",
    formation:
      "The massif is built of Caledonian orogeny rock; intense last-glacial erosion carved sharp peaks, corries and deeply incised valleys, and the park still holds around 100 active glaciers today.",
    observation:
      "From the air, continuous sharp peaks interweave with deeply cut valleys; the park has no permanent trails or accommodation, with almost no trace of human activity, presenting a landscape of near-pristine wilderness.",
    distinguish:
      "Both Sarek and Kebnekaise are high-mountain landforms in Swedish Lapland, but Sarek holds six peaks above 2,000 m and is more thoroughly wild, while Kebnekaise is Sweden's single highest peak with comparatively developed mountaineering infrastructure.",
    concept:
      "Sarek is a classic case for studying the relationship between Nordic mountain glacial erosion landforms and a pristine wilderness ecosystem, valued as an important area for studying natural processes with minimal human interference precisely because it lacks infrastructure.",
    history:
      "Since the park's establishment in 1909 it has been kept at an extremely low level of development, making it one of the few large European wilderness areas almost untouched by modern infrastructure.",
  },
  "oland-alvar": {
    seeing:
      "Stora Alvaret is a roughly 40-km stretch of bare limestone plateau on the southern half of Öland, covering about a quarter of the island — the largest surviving example of this type of limestone barren in Europe.",
    // formation sources: 大阿尔瓦基岩为奥陶纪石灰岩（约4.5亿年前）；核实 2026-09-10
    formation:
      "The plateau's foundation is Ordovician limestone; last-glacial ice scouring stripped away the soil cover over a wide area, leaving an extremely thin, high-pH soil that supports a distinctive, poor limestone-barren ecosystem.",
    observation:
      "From the air, the plateau surface shows a distinctive texture of grey bare rock interwoven with sparse vegetation, in sharp contrast with the farmland landscape elsewhere on the island.",
    distinguish:
      "Both Stora Alvaret and Ireland's Burren are classic European limestone barrens, but Stora Alvaret is flatter and more open, a long narrow plateau, while the Burren shows more pronounced relief.",
    concept:
      "The distinctive plant community that Stora Alvaret's thin, high-pH soil supports — including many rare species — is a classic case for studying vegetation adaptation on a poor limestone substrate.",
    history:
      "The area has some five thousand years of human settlement history, with residents long adapting their land use to the natural constraints of the limestone plateau; the Agricultural Landscape of Southern Öland was inscribed on the UNESCO World Heritage List in 2000 as a result.",
  },
  vindelfjallen: {
    // seeing sources: Länsstyrelsen Västerbotten 现行面积 564,918 ha（2017 扩界后）；1 级，核实 2026-09-10
    seeing:
      "Vindelfjällen Nature Reserve is Sweden's largest protected area, covering about 565,000 hectares after its 2017 expansion, dominated by a mountain plateau landform transitioning between birch forest and alpine tundra.",
    formation:
      "The reserve sits on the eastern slope of the Scandinavian Mountains; last-glacial erosion shaped its undulating mountain plateau terrain, with conifer forest, birch forest and alpine tundra vegetation zones arranged in sequence up the elevation gradient.",
    observation:
      "From the air, extensive birch forest interweaves with open alpine tundra, with almost no built structures visible — one of the most intact natural ecosystems remaining in Swedish Lapland.",
    distinguish:
      "Both Vindelfjällen and Kebnekaise are mountain landforms in Swedish Lapland, but Vindelfjällen is characterised by undulating plateau and forest-transition terrain over a much larger area, while Kebnekaise is characterised by a single steep, high summit.",
    concept:
      "The transition zone between birch forest and alpine tundra at Vindelfjällen is a classic case for studying how vertical vegetation zones in Nordic mountains shift with elevation gradient.",
    history:
      "The reserve has historically been an important reindeer-herding area for the Sámi, and traditional reindeer nomadism remains an important part of local land use today.",
  },
  "siljan-ring": {
    seeing:
      "The Siljan Ring formed around 377 million years ago in the Devonian period when a roughly 5-km-diameter body struck the Earth; the resulting ring structure is about 52 km in diameter, the largest known impact structure in Europe.",
    // formation sources: 今日环形洼地由末次冰期冰川融水侵蚀构造内较软沉积岩形成，非撞击瞬间产物（Lantmäteriet Geoskolan，1 级，核实 2026-09-10）
    formation:
      "The impact violently deformed the originally flat Precambrian granite basement and left sedimentary rock layers from the Lower Cambrian through the Devonian; at the end of the last ice age, glacial meltwater preferentially eroded the softer sedimentary rock inside the structure, carving out the ring-shaped depression seen today, along which Lake Siljan and its neighbours lie — the lake itself along the ring's south-western margin.",
    observation:
      "From the air, the ring structure's outline is faintly traceable in the terrain and drainage pattern; Lake Siljan and several smaller lakes are arranged along the ring's margin — a distinctive impact landform in Sweden.",
    distinguish:
      "Both the Siljan Ring and Store Mosse are depression-type landforms in this category, but the Siljan Ring originated from an asteroid impact with a ring-shaped structure, while Store Mosse is a wetland depression formed by peat accumulation — entirely different origins.",
    concept:
      "The Siljan Ring is one of Europe's most important samples for studying how an asteroid impact can produce a large ring structure in an ancient crystalline basement, one that has survived largely intact to the present day.",
    history:
      "The structure drew scientific attention from the 19th century onward because of unusual geological phenomena in the area; its impact origin was confirmed in the 20th century, and today the Siljan Geopark is Sweden's first national geopark.",
  },
  "store-mosse": {
    // 全六段 sources: 「瑞典拉普兰以南最大隆起泥炭沼泽」与 1982 年建园经 Naturvårdsverket 转述来源确认；与 siljan-ring 的成因对比（泥炭堆积 vs 撞击构造）两条并读无矛盾。核实 2026-09-10，未改动
    seeing:
      "Store Mosse is the largest raised peat bog south of Swedish Lapland; a national park was established here in 1982.",
    formation:
      "Poor drainage after the last ice age allowed wetland plant matter to accumulate faster than it decomposed, forming a large raised peat layer — a classic peat-bog landform in southern Sweden.",
    observation:
      "From the air, a broad expanse of dark brown peat bog is dotted with scattered small pools, forming a clear colour and landform contrast with the surrounding forest.",
    distinguish:
      "Both Store Mosse and the Siljan Ring are depression-type landforms, but Store Mosse is a wetland formed by peat accumulation while the Siljan Ring is a ring structure formed by an asteroid impact — entirely different origins.",
    concept:
      "Store Mosse is a classic case for studying how a raised peat bog forms in southern Sweden and its ecological function as a bird habitat.",
    history:
      "The area historically remained in a natural state because the peat bog was difficult to farm; a national park was formally established in 1982, making it an important wetland conservation area in southern Sweden.",
  },
  vanern: {
    // 全六段 sources: 5650 km²、欧盟境内最大湖（欧洲最大的拉多加/奥涅加在俄罗斯、不在欧盟，口径区分正确）、经约塔河注入卡特加特；与 vattern「瑞典第二大」、malaren「第三大」三条并排核对不冲突。核实 2026-09-10，未改动
    seeing:
      "Vänern is the largest lake in the European Union, covering about 5,650 km²; its water drains via the Göta River into the Kattegat.",
    formation:
      "The lake basin was carved by last-glacial erosion, the largest tectonic-glacial composite basin in south-central Sweden, with an intricate shoreline dotted with islands.",
    observation:
      "From the air, the lake surface is extremely broad, with the far shore often out of sight; historic buildings such as Läckö Castle dot the shoreline — Sweden's most expansive body of water.",
    distinguish:
      "Both Vänern and Vättern are important large Swedish lakes, but Vänern is larger and the largest lake in the EU, while Vättern is smaller but has clearer water and greater depth.",
    concept:
      "Vänern's vast surface area combined with its role in the Göta Canal shipping route is a classic case for studying how a large lake becomes a key node in a regional water-transport network.",
    history:
      "Since the Göta Canal opened to navigation in the 19th century, Vänern has been an important link in the inland waterway connecting Sweden's east and west coasts; historic buildings such as Läckö Castle along its shore bear witness to the lake region's long history of development.",
  },
  vattern: {
    // 全六段 sources: 面积 1912 km² 为瑞典第二大湖、最大水深 128m、Vättern graben 构造成因，多来源交叉印证一致。核实 2026-09-10，未改动
    seeing:
      "Vättern is Sweden's second-largest lake and one of the clearest large lakes in Europe, with a maximum depth of about 128 m.",
    formation:
      "The lake basin developed along an ancient tectonic fault, whose orientation determined the lake's long, narrow north-south shape; last-glacial erosion further deepened the basin.",
    observation:
      "From the air, the lake runs in a long north-south line, its water strikingly clear; the island of Visingsö gives the lake surface a distinctive island landform, and the historic town of Vadstena sits on its shore.",
    distinguish:
      "Both Vättern and Vänern are important large Swedish lakes, but Vättern developed along a tectonic fault with clearer water and greater depth, while Vänern is larger with a more intricate shoreline.",
    concept:
      "Vättern's long, narrow basin developed along a tectonic fault is a classic case for studying how geological structure controls a lake's shape and depth; its clear water is also an important Swedish drinking-water source.",
    history:
      "The island of Visingsö in the lake has been an important site for religious and royal activity since the Middle Ages; Vadstena Abbey on the shore was founded by the Swedish saint Bridget and is an important medieval religious heritage site in Sweden.",
  },
  malaren: {
    // 全六段 sources: 瑞典四大湖序为维纳恩>韦特恩>梅拉伦>耶尔马伦，「第三大」成立；冰后地壳均衡抬升致其约 12–13 世纪与波罗的海分离。核实 2026-09-10，未改动
    seeing:
      "Mälaren is Sweden's third-largest lake by area, with an extremely intricate, many-branched shoreline; Stockholm sits at its eastern outlet to the sea.",
    formation:
      "The lake basin was carved by last-glacial erosion; post-glacial isostatic rebound gradually narrowed and shallowed the channel connecting the lake area to the Baltic Sea, eventually forming today's comparatively independent lake system.",
    observation:
      "From the air, the lake shows a complex, branching, tree-like shape, dotted with many small islands and peninsulas; historic buildings such as Drottningholm Palace sit on islands within it — one of Sweden's most historically and culturally rich bodies of water.",
    distinguish:
      "Both Mälaren and Vänern are important large Swedish lakes, but Mälaren has an extremely intricate shoreline with deep historical and cultural roots, while Vänern has a more open surface valued chiefly for shipping.",
    concept:
      "Mälaren's gradual separation from the Baltic Sea due to isostatic rebound is a classic case for studying how post-glacial land uplift along the Baltic coast alters water-system connectivity.",
    history:
      "The shores of Mälaren have been an important political and trading centre for Sweden since Viking times; Stockholm was founded as a city in the 13th century, and Drottningholm Palace was inscribed on the UNESCO World Heritage List in 1991.",
  },
  tornetrask: {
    // 全六段 sources: 最大水深 168m（SMHI，1 级）；该湖属受保护的「国家河流」流域、实际未经水电调节，正文未作水位调节声称，无矛盾；阿比斯科科学站 1935 年设立。核实 2026-09-10，未改动
    seeing:
      "Torneträsk is a long, narrow tectonic lake in Swedish Lapland, with a maximum depth of about 168 m; the lakeside village of Abisko is a well-known spot for observing the northern lights.",
    formation:
      "The lake basin developed along an ancient tectonic fault, further deepened by last-glacial erosion, flanked on both sides by branches of the Scandinavian Mountains.",
    observation:
      "From the air, the lake runs long and narrow east to west, with steep mountains on both banks; lakeside Abisko, sitting in a mountain rain shadow, receives little precipitation, giving it some of the clearest skies anywhere in Sweden.",
    distinguish:
      "Both Torneträsk and Vättern are long, narrow lakes developed along tectonic faults, but Torneträsk lies in the mountains of Arctic Lapland, while Vättern lies in the lowlands of south-central Sweden.",
    concept:
      "The dry, clear-sky climate at Abisko on Torneträsk's shore, produced by a rain-shadow effect, is a classic case for studying how terrain shapes local microclimate and, in turn, astronomical observing conditions.",
    history:
      "Abisko has been an important Swedish alpine ecology and climate research station since the early 20th century; the Abisko Scientific Research Station, established in 1935, is one of the oldest polar research stations in Northern Europe.",
  },
  taakern: {
    // seeing sources: 均深约 0.8m、最深约 2.5m（takern.se 2 级 + Länsstyrelsen Östergötland 1 级）；核实 2026-09-10
    seeing:
      "Tåkern is a shallow lake in southern Sweden with an average depth of about 0.8 m and a maximum of no more than 2.5 m, with extensive reed marsh, and an important bird habitat in the country.",
    formation:
      "The lake basin occupies a shallow depression carved by last-glacial erosion; the extremely shallow water and nutrient-rich bottom sediment provide favourable conditions for reeds and other aquatic plants.",
    observation:
      "From the air, extensive reed marsh surrounds the open water; during the spring and autumn migration seasons, flocks of migratory birds gather across the lake and marsh in spectacular numbers.",
    distinguish:
      "Compared with Sweden's other large lakes (such as Vänern and Vättern), Tåkern is extremely shallow and much smaller, but its shallow, nutrient-rich character makes it a classic case as a bird habitat.",
    concept:
      "Tåkern's shallow, nutrient-rich lake ecosystem is a classic case for studying how a shallow lake provides a critical stopover habitat for migratory birds.",
    history:
      "The lake area has drawn the attention of the Royal Swedish Academy of Sciences since the early 20th century and was designated a bird reserve, making it one of Sweden's oldest bird reserves.",
  },
  "torne-river": {
    seeing:
      "The Torne River is one of Sweden's longest rivers without hydroelectric development, running about 520 km; its lower course forms the border between Sweden and Finland.",
    formation:
      "The river rises in the mountains of Swedish Lapland and flows south-east along a structurally weak zone; because it has never been dammed for hydropower, its channel retains natural seasonal flow variation and riverbed form.",
    // observation/history sources: 汇流点在 Pello 附近（约67°10′N），河口在 Haparanda/Tornio（约65.85°N）；Struve 测地弧 2005 年列入 UNESCO（whc.unesco.org/en/list/1187）。核实 2026-09-10
    observation:
      "From the air, the channel winds through Arctic Circle forest and tundra; well upstream of its mouth it meets the Könkämäeno-Muonio river system flowing down from near the Norwegian border, marking the start of the border reach and forming a cross-border river-valley ecosystem.",
    distinguish:
      "The Torne River and southern Swedish rivers such as the Dalälven and Klarälven are all important Swedish waterways, but the Torne lies within the Arctic Circle and retains a natural, undammed channel, while the Dalälven and Klarälven flow through south-central Sweden and have sections used for hydropower.",
    concept:
      "As one of Sweden's few large rivers without hydroelectric development, the Torne is an important sample for studying the natural hydrology of an Arctic river unaffected by human regulation.",
    history:
      "The river's lower course has historically been an important channel for cross-border trade and movement between Sweden and Finland; survey points along this border reach were inscribed on the UNESCO World Heritage List in 2005 as part of the ten-country Struve Geodetic Arc.",
  },
  dalalven: {
    seeing:
      "The Dalälven is an important river flowing through Dalarna, its headwater system encircling the Siljan Ring impact structure, forming a delta near Älvkarleby before entering the Gulf of Bothnia.",
    formation:
      "The river's upper drainage develops around the ring structure of the Siljan impact site; its middle and lower course flows south-east across central Sweden's lowlands, with sediment deposition at its mouth forming a classic delta landform.",
    observation:
      "From the air, several upper tributaries fan out radially around the Siljan lake district; the lower channel broadens, and the sandbars and channels of the river-mouth delta interweave into a net-like pattern.",
    distinguish:
      "Both the Dalälven and Klarälven are important central Swedish rivers, but the Dalälven's headwaters are closely tied to the Siljan Ring structure with a well-developed river-mouth delta, while the Klarälven is characterised by well-developed free meanders in its upper and middle course.",
    concept:
      "The distinctive pattern of the Dalälven's headwater system developing around an ancient asteroid-impact structure is a classic case for studying how a river system adapts to an ancient geological structural boundary.",
    // history sources: 1865 年起有组织流放，Dalälvarnas Flottningsförening 1880–1970，1950 年代峰值（dalaflottning.se，2 级）。核实 2026-09-10
    history:
      "The Dalälven's banks have historically been an important base for Sweden's water-powered sawmill industry; from the mid-19th century until log driving ended in 1970, large quantities of timber were floated down the river to be processed at Älvkarleby near its mouth, shaping the area's industrial history.",
  },
  klaralven: {
    // seeing sources: 源头在瑞典海尔耶达伦省（罗根湖一带），中游经挪威后折回瑞典（NE.se，2 级）；中上游沿断裂谷发育约 90 km 河曲段。核实 2026-09-10
    seeing:
      "The Klarälven rises in Härjedalen in Sweden, loops through a stretch of Norway, flows through Värmland in Sweden and enters Vänern; its upper and middle course winds freely, forming numerous classic free meanders.",
    formation:
      "The river's upper and middle course flows through a broad, low-lying valley unconstrained by bedrock, allowing the channel to migrate freely from side to side; over time this has produced numerous winding, snake-like meanders.",
    observation:
      "From the air, the channel shows a textbook meandering form, a series of symmetrical bends following one after another; some meanders have been cut off, leaving isolated oxbow lakes — one of the most classic free-meander landforms in Northern Europe.",
    distinguish:
      "Both the Klarälven and Dalälven are important central Swedish rivers, but the Klarälven is characterised by well-developed free meanders in its upper and middle course, while the Dalälven's headwaters encircle the Siljan impact structure and form a delta at its mouth.",
    concept:
      "The Klarälven's free meanders are a classic Nordic case, long cited in geography textbooks, for studying the mechanism behind meander formation (the alternation of lateral erosion and deposition along a river channel).",
    history:
      "The river has historically been an important timber-floating route in Sweden, and towns such as Ekshärad along its banks grew up around the timber-processing industry; today the meander landform is an important natural tourist attraction.",
  },
  lapporten: {
    seeing:
      "Lapporten is an iconic U-shaped glacial trough valley between the mountains of Tjuonatjåkka and Nissuntjårro, its name meaning \"the gate\" for its resemblance to one.",
    formation:
      "The trough was carved by last-glacial ice moving continuously along a structurally weak zone between the two mountains, producing a classic U-shaped valley profile — one of the most textbook forms of glacial erosion landform.",
    observation:
      "From the air, the U-shaped gap between the two mountains is remarkably regular and symmetrical, its floor sparsely vegetated; viewed from the Björkliden viewpoint it presents a textbook glacial-trough silhouette, one of the most recognisable landforms in Swedish Lapland.",
    distinguish:
      "Both Lapporten and the Abisko Canyon are glacially related landforms in Lapland, but Lapporten is a broad, symmetrical U-shaped glacial trough, while the Abisko Canyon is a narrower canyon cut by a river along a structural fault.",
    concept:
      "Lapporten is a frequently cited textbook example of a U-shaped glacial trough worldwide, directly illustrating the fundamental difference in valley cross-section between glacial and river erosion.",
    // history sources: Lapporten 为瑞典语名；北萨米语 Čuonjávággi =「鹅谷」；核实 2026-09-10
    history:
      "\"Lapporten\" is the Swedish name, meaning \"the gate of Lapland\"; in Northern Sámi the valley is called Čuonjávággi, \"Goose Valley.\" It has historically been an important landmark on Sámi reindeer migration routes and is now a well-known viewpoint along the Kungsleden trail.",
  },
  "abisko-canyon": {
    seeing:
      "The Abisko Canyon was cut by the Abiskojåkka river through an ancient structural fault, and is the starting point of the northern section of Sweden's famous Kungsleden (\"King's Trail\").",
    // formation/history sources: 断裂带属加里东造山（约 400 Ma，古生代），非前寒武纪（NRM，1 级）；阿比斯科研究站 1903 年设立、孔斯莱登北段 1926–27 年标记完成（3 级，未找到一手佐证）。核实 2026-09-10
    formation:
      "The canyon developed along a structural fault formed during the Caledonian orogeny (around 400 million years ago); the river has long eroded the comparatively weaker fault rock, producing a relatively narrow, steep-sided canyon whose sheltered topography also gives it a distinct local microclimate from the surrounding open terrain.",
    observation:
      "From the air, the canyon winds narrowly, its banks rising steeply, forming a sharp landform contrast with the open water of neighbouring Torneträsk and the broad U-shaped profile of Lapporten.",
    distinguish:
      "Both the Abisko Canyon and Lapporten are iconic glacially related landforms in Lapland, but the Abisko Canyon is a narrow canyon cut by a river along a fault, while Lapporten is a broad U-shaped trough carved directly by glacial ice.",
    concept:
      "The distinct microclimate sheltered within the Abisko Canyon's walls supports a unique plant community, making it a classic case for studying how canyon topography shapes local ecological conditions.",
    history:
      "Abisko, where the canyon is located, has been an important Swedish Arctic ecology research base since 1903; the Kungsleden trail opened in 1926, one of the oldest long-distance hiking routes in Northern Europe.",
  },
  "hoga-kusten": {
    seeing:
      "The High Coast (Höga Kusten) is a stretch of the Gulf of Bothnia shoreline that has continued to rebound isostatically since the last ice age; the ancient shoreline here has been lifted to about 286 m above sea level.",
    formation:
      "The heavy last-glacial ice sheet long depressed the crust here; since the ice retreated, the land has continued to rebound isostatically, still rising at about 8 mm per year today — one of the areas of greatest post-glacial land uplift anywhere on Earth.",
    observation:
      "From the air, the coastline is steep and winding, studded with islands and bays; the High Coast Bridge spans a narrow bay along the shore, making it an excellent landmark for observing this uplifting coastal landform.",
    distinguish:
      "The High Coast, the Bohuslän Coast and the Stockholm Archipelago all display Sweden's granite coastal landforms, but the High Coast is uniquely known for its ongoing isostatic rebound, and is the only one of the three inscribed as a World Heritage Site.",
    // concept sources: 2000 列入、2006 扩展为 High Coast / Kvarken Archipelago 跨国遗产（whc.unesco.org/en/list/898，1 级）；distinguish 段「三者中唯一列入世界遗产」在补入 2006 信息后仍成立。核实 2026-09-10
    concept:
      "The High Coast's ongoing isostatic rebound is one of the world's most important field laboratories for studying post-glacial crustal rebound after ice-sheet melting, which is why it was inscribed on the UNESCO World Heritage List in 2000 and extended in 2006 to take in Finland's geologically complementary Kvarken Archipelago, becoming a transboundary site.",
    history:
      "Local fishing villages have historically had to periodically move their docks and buildings seaward as the coastline continued to rise — a living human record of the ongoing land-uplift process.",
  },
  "bohuslan-coast": {
    // 全六段 sources: 科斯特海国家公园 2009-09-09 揭幕，为瑞典首座海洋国家公园（SGU，1 级）。核实 2026-09-10，未改动
    seeing:
      "The Bohuslän Coast is a stretch of Sweden's west coast studded with bare granite skerries; the waters around the Koster Islands hold Sweden's first marine national park.",
    formation:
      "The coastal bedrock is Precambrian granite; last-glacial ice scouring stripped away the soil cover over a wide area, and long exposure to North Sea wave erosion has since produced numerous smooth granite skerries and fjord-like bays.",
    observation:
      "From the air, dense granite skerries are scattered across the nearshore waters, their surfaces smoothly rounded from glacial scouring, echoing the Stockholm Archipelago on Sweden's east coast.",
    distinguish:
      "Both the Bohuslän Coast and the Stockholm Archipelago are classic Swedish granite skerry coastlines, but the Bohuslän Coast faces the North Sea and is known for the marine conservation of Kosterhavet National Park, while the Stockholm Archipelago faces the Baltic Sea with a much denser scatter of islands.",
    concept:
      "The bare granite skerries of the Bohuslän Coast are a classic case for studying how a Precambrian crystalline basement, scoured by glacial ice and long shaped by wave erosion, produces a coastal skerry landscape.",
    history:
      "The coast has historically been an important Swedish fishing and shipping area; Kosterhavet National Park, established in 2009, is Sweden's first marine national park, protecting important marine biodiversity along the North Sea coast.",
  },
  "blekinge-archipelago": {
    // 全六段 sources: 卡尔斯克鲁纳 1680 年由卡尔十一世建为海军基地；海军城 1998-12-03 列入 UNESCO（whc.unesco.org/en/list/871，1 级）。核实 2026-09-10，未改动
    seeing:
      "The Blekinge Archipelago is a granite archipelago along Sweden's south-eastern Baltic coast; Karlskrona has been a Swedish royal naval base since the 17th century.",
    formation:
      "The archipelago's bedrock is Precambrian granite; last-glacial ice scouring produced numerous low, rounded skerries, sharing the same glacial-scouring origin as Sweden's other granite coastal landforms.",
    observation:
      "From the air, numerous low granite islets are scattered across the nearshore waters, with the naval dockyards and fortress buildings of historic Karlskrona dotted among them — a distinctive combination of military history and natural landform.",
    distinguish:
      "Both the Blekinge Archipelago and the Stockholm Archipelago are granite archipelagos on Sweden's Baltic coast, but the Blekinge Archipelago is known for the naval history of Karlskrona, while the Stockholm Archipelago has far more islands and serves mainly a recreational function.",
    concept:
      "As the site of a historic Swedish royal naval base, the Blekinge Archipelago is a classic case for studying how granite skerry landforms provided natural cover exploited by historical military strategic siting.",
    history:
      "Karlskrona was founded by King Charles XI of Sweden in 1680 and is one of the most completely planned naval port cities from the era before Sweden's capital moved there; its naval city plan was inscribed on the UNESCO World Heritage List in 1998.",
  },
  "stockholm-archipelago": {
    // 全六段 sources: 约 3 万座岛屿为斯德哥尔摩省政府《Skärgårdsfakta》历年口径（1 级）；「瑞典最大群岛」与 gotland 的「瑞典最大岛屿」分属不同类别、并排核对不冲突（波罗的海范围内群岛规模次于芬兰的 Archipelago Sea）；瓦克斯霍尔姆要塞 1548 年由古斯塔夫一世下令建造。核实 2026-09-10，未改动
    seeing:
      "The Stockholm Archipelago is a Baltic archipelago made up of about thirty thousand islands and skerries, one of the densest island clusters anywhere in the world.",
    formation:
      "The archipelago's bedrock is granite scoured by last-glacial ice; after the ice retreated, isostatic rebound gradually raised much of the once-submerged rock above sea level, producing today's densely islanded landscape.",
    observation:
      "From the air, moving outward from central Stockholm toward the open Baltic, island density gradually decreases while individual island size increases, forming a clearly graded landform from inner to outer archipelago.",
    distinguish:
      "Both the Stockholm Archipelago and the Blekinge Archipelago are granite archipelagos on Sweden's Baltic coast, but the Stockholm Archipelago has far more islands and a more complete inner-to-outer gradient, making it Sweden's largest archipelago.",
    concept:
      "The gradient in island density and size from inner to outer Stockholm Archipelago is a classic case for studying how isostatic rebound produces differing degrees of emergence at different original water depths.",
    history:
      "The archipelago has been an important shipping route for Sweden since Viking times; Vaxholm has guarded Stockholm's sea approach with a fortress since the 16th century, and the archipelago is now an important area for summer holidays and sailing.",
  },
  gotland: {
    seeing:
      "Gotland is the largest island belonging to Sweden in the Baltic Sea, built mainly of Silurian limestone; the walled medieval town of Visby survives largely intact.",
    formation:
      "The island's bedrock is limestone deposited around 400 million years ago in the Silurian period; long exposure to Baltic Sea wave and surface-water erosion has produced classic limestone coastal landforms around the shore, while the interior retains a comparatively flat limestone plateau.",
    observation:
      "From the air, the island's terrain is low and open; the medieval walls and bell towers of Visby's old town are clearly recognisable, forming a well-layered combination of landform and heritage against the farmland and limestone plateau of the rest of the island.",
    // distinguish sources: 大阿尔瓦基岩为奥陶纪（485–443 Ma），早于哥得兰的志留纪（443–419 Ma）—— 是更老不是更年轻。与 oland-alvar/formation 同批改（r16b 只改了那一处，本轮补上）。核实 2026-09-10
    distinguish:
      "Both Gotland and Öland's Stora Alvaret are built of limestone, but Gotland is Sweden's largest standalone island and Silurian in age, while Stora Alvaret is an older Ordovician limestone plateau.",
    concept:
      "Gotland's Silurian limestone bedrock records the sedimentary history of a shallow-sea reef environment around 400 million years ago, an important geological sample for studying the evolution of Palaeozoic marine sedimentary environments in the Baltic region.",
    history:
      "Visby was an important Hanseatic League trading town from the 12th century; its intact medieval walls run about 3.4 km, and it was inscribed on the UNESCO World Heritage List in 1995.",
  },
  faro: {
    // 全六段 sources: rauk 海蚀柱由志留纪石灰岩差异侵蚀而成，朗哈马斯为代表性密集分布区；伯格曼长期居于法罗岛并在此取景（ingmarbergman.se，2 级）。核实 2026-09-10，未改动
    seeing:
      "Fårö is a small island north of Gotland, its coast lined with sea stacks (rauk in Swedish) carved from Silurian limestone by long wave erosion; the Langhammars stack cluster is the densest of its kind in Sweden.",
    formation:
      "The island's bedrock is the same Silurian limestone as Gotland's; long differential erosion by Baltic Sea waves has worn away the weaker rock layers along the shore, leaving isolated pillar-like formations of harder rock standing.",
    observation:
      "From the air, densely spaced pillar-like rock formations of varying shapes line the coast, some rising several metres — a sharp visual contrast with the flat, open limestone beach around them, a distinctive wave-erosion landform on the Baltic coast.",
    distinguish:
      "Both Fårö and Gotland lie within the same Silurian limestone geological zone, but Fårö is defined by its dense coastal sea-stack landforms, while Gotland is defined by its intact inland medieval town heritage.",
    concept:
      "Fårö's sea stacks are a classic case for studying how a limestone coast, shaped by differential wave erosion, produces isolated pillar landforms — the most representative concentration of this landform type in the Baltic region.",
    history:
      "Thanks to its raw natural scenery, Fårö was the long-time home of Swedish film director Ingmar Bergman and the setting for several of his films; the island now holds an exhibition space named in his honour.",
  },
  soderasen: {
    // seeing sources: 长度：**查无 1/2 级来源**。Länsstyrelsen Skåne 官方页（1 级，2026-09-12 核）详述地质与峡谷但不给岭脊长度；Naturvårdsverket riksintresse 文档取不到。网上流传的 22/30/40/90 公里都是徒步路线里程（Skåneleden），不是岭脊本身。原文的「长约22公里」已删除 —— 两轮核实都找不到出处，删比保留一个无出处的数好。若将来 SGU 或国家公园官网给出长度再补。
    seeing:
      "Söderåsen is a fault-block ridge in north-central Skåne with steep escarpments on both sides.",
    formation:
      "The ridge is a fault block uplifted by tectonic movement, with steep cliff faces along the fault planes on both sides — a sharp contrast with the flat farming plain typical of the rest of Skåne.",
    observation:
      "From the air, the uplifted ridge's escarpments on both sides are clearly visible, its crest covered in dense old broadleaf forest, forming a marked colour and elevation contrast with the open farmland of the surrounding Skåne Plain.",
    distinguish:
      "Both Söderåsen and Tiveden are uplifted hill landforms in southern Sweden, but Söderåsen is a fault-block ridge with steep escarpments on both sides, while Tiveden is defined by its glacially transported boulder landform.",
    concept:
      "The steep escarpments produced by fault-block uplift at Söderåsen are a classic case for studying how local tectonic faulting can produce pronounced relief within southern Sweden's otherwise comparatively flat geological setting.",
    // seeing/history sources: 国家公园 2001-05-10 设立（1988/89 仅为规划候选）；岭体为西北—东南走向断块，最高点 212 m（斯科讷最高点）。正文「长约22公里」未找到来源，见 issue。核实 2026-09-10
    history:
      "The old broadleaf forest on the ridge is one of the best-preserved of its kind in southern Sweden; a national park was established in 2001 to protect this centuries-unlogged native woodland.",
  },
  tiveden: {
    // 全六段 sources: 蒂韦登与 Tylöskog、Kolmården 同为斯韦阿兰与约塔兰之间的历史天然屏障；国家公园 1983 年设立、2017 年扩至 2030 ha（3 级交叉印证）。核实 2026-09-10，未改动
    seeing:
      "Tiveden was historically a natural barrier between two of Sweden's traditional northern and southern regions for a long period; the ground is scattered with large granite boulders left behind by last-glacial transport.",
    formation:
      "The bedrock is Precambrian granite; last-glacial ice transported large granite boulders here and left them scattered in disarray, and after the ice retreated these boulders, together with dense pine forest, gave the terrain its rugged, hard-to-traverse character.",
    observation:
      "From the air, granite boulders of varying sizes and small marsh lakes are scattered among the dense old pine forest, the terrain broken and uneven — historically difficult enough to cross that it long separated Sweden's northern and southern regions.",
    distinguish:
      "Both Tiveden and Söderåsen are uplifted hill landforms in southern Sweden, but Tiveden is defined by its glacially transported granite boulder landform and history as a natural transport barrier, while Söderåsen is a fault-block ridge with steep escarpments on both sides.",
    concept:
      "The scattered granite boulders at Tiveden are a classic field example for studying how last-glacial ice transported and deposited enormous rock blocks (glacial erratics) over long distances.",
    history:
      "The area's rugged, hard-to-traverse terrain historically made it a natural barrier and refuge between Sweden's two traditional northern and southern regions; a national park was established in 1983 to protect this old, native pine-forest landscape.",
  },
  hallandsasen: {
    // 全六段 sources: 铁路隧道 1992 年动工，1997 年密封剂环境事故后停工至 2005 年，2015-12-08 通车，历时 23 年（Skanska 官方新闻稿，2 级）。核实 2026-09-10，未改动
    seeing:
      "Hallandsåsen is an east-west trending fault-block ridge on the border of Skåne and Halland.",
    formation:
      "The ridge is a fault block uplifted by tectonic movement, with complex internal geology holding multiple rock layers of differing character and groundwater systems.",
    observation:
      "From the air, the east-west ridge separates the Skåne Plain from the coastal lowlands of Halland, with a clear elevation difference on either side.",
    distinguish:
      "Both Hallandsåsen and Söderåsen are east-west trending fault-block ridges in southern Sweden, but Hallandsåsen became famous as a major modern railway engineering challenge due to its complex geology, while Söderåsen is known for its well-preserved old broadleaf forest ecosystem.",
    concept:
      "The repeatedly delayed Hallandsåsen railway tunnel project is a classic engineering-geology case for studying how complex geological conditions (variable rock layers and groundwater systems) can significantly increase the difficulty of major infrastructure projects.",
    history:
      "A railway tunnel through the ridge broke ground in 1992; complex geological conditions caused repeated delays and major cost overruns, and it finally opened in 2015 — a well-known case of geological challenge in modern Swedish railway engineering history.",
  },
  "skane-plain": {
    seeing:
      "The Skåne Plain is a low-lying agricultural region at Sweden's southern tip, built of last-glacial moraine and loess-like sediment, and Sweden's main grain- and rapeseed-growing area.",
    formation:
      "The plain's surface is made up of last-glacial moraine deposits together with wind-blown, loess-like sediment; the soil is deep and fertile and the terrain flat and open, making it one of Sweden's best agricultural regions.",
    observation:
      "From the air, extensive, regular farmland covers almost the entire plain; when rapeseed blooms in spring the landscape turns a striking, wide expanse of gold, in sharp contrast with the forested hill country of northern Sweden.",
    distinguish:
      "Compared with other parts of Sweden (such as the forested hill country of the centre), the Skåne Plain is flatter, more open and far more intensively farmed — the most representative agricultural-plain landform in the country.",
    concept:
      "The fertile moraine and loess-like soil of the Skåne Plain is a classic case for studying how last-glacial sediment can provide an excellent soil foundation for temperate agriculture.",
    // history sources: 斯科讷在中世纪及之后很长时间是**丹麦领土**（丹麦本土核心区之一），
    //   **1658 年《罗斯基勒条约》**后割让给瑞典 —— Britannica《Treaty of Roskilde》（3 级，2026-09-08 核）。
    //   **原文把「这块地方」和「这块地方现在属于哪个国家」混为一谈**，
    //   写成「自中世纪起即为瑞典重要的农业区」，等于把它几百年的丹麦属性抹掉了。
    //   **写一片土地的前现代史时，要先确认它当时属于谁** —— 这类错误在边境地带的条目里最容易出现。
    //   末次冰期冰碛 + 黄土状沉积、瑞典最主要谷物与油菜产区等表述经复核准确。
    history:
      "The region has been an important agricultural and population centre since the Middle Ages, though it was Danish territory for most of that time; its fertile land made it a strategic prize long contested between Denmark and Sweden, and it passed to Sweden under the 1658 Treaty of Roskilde, and it is now one of Sweden's mildest-climate and most agriculturally developed regions.",
  },
};
