import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Greece ============
  "mount-olympus": {
    // seeing sources: 米蒂卡斯峰——2023 年亚里士多德大学 GPS 精测 2917.727 m，官方与媒体取整为 2917／2918，正文取 2917 属主流。
    //   history 的古希腊神话表述止于广泛记载的古代宗教史，无对现代宗教的评价，✅ 零争议红线通过。2026-09-10 核，verdict: ok。
    seeing:
      "Mount Olympus rises near the Aegean coast of eastern Greece; its highest peak, Mytikas, reaches 2,917 m — the highest point in Greece. Seen from the air the massif seems to rise almost straight out of the sea, its summit snow-capped year-round in sharp contrast to the olive groves and villages below.",
    formation:
      "Olympus is built mainly of limestone and marble, a folded range raised by mountain-building forces; well-developed karst features — caves and steep cliffs — mark its slopes, and Quaternary ice-age glacial traces survive near the summit.",
    observation:
      "From the air, identify Olympus by its coastal, isolated bulk — unlike the Pindus range's continuous chain, Olympus stands as a single massive block above the Aegean; a cluster of peaks above 2,500 m crowds the summit, with Mytikas the sharpest.",
    distinguish:
      "Both Olympus and the Pindus range are limestone-dominated, but Olympus is a relatively isolated massif standing alone by the sea, while the Pindus is a continuous chain running for hundreds of kilometres; the two face each other across the northern edge of the Thessalian Plain.",
    // concept sources: UNESCO 世界遗产：2026-07 第 48 届会议（釜山）列入，正式名「The wider area of Mount Olympus」，标准 (vi)(x)，当届 25 项新增里唯一的混合遗产（whc.unesco.org/en/list/1719/，1 级）。1938 年首座国家公园、1981 年生物圈保护区、1700+ 种植物均属实（园区管理局官网，1 级）。米蒂卡斯峰 2023 年 GPS 精测 2917.727 m，正文取整 2917 属主流。2026-09-10 核。
    concept:
      "Olympus became Greece's first national park in 1938 and was designated a UNESCO Biosphere Reserve in 1981, and in July 2026 was inscribed on the World Heritage List as \"The wider area of Mount Olympus\" — the only mixed site in that year's intake; its slopes carry vegetation zones from Mediterranean scrub to alpine meadow, recording over 1,700 plant species.",
    history:
      "In Greek mythology Olympus was held to be the home of the gods, a widely recorded tradition that has profoundly shaped how the mountain is understood in Western culture; the range still carries several long-established climbing routes.",
  },

  "pindus-mountains": {
    // seeing sources: 长度：正文原写 200 km，Britannica 与 Columbia 独立给约 160 km（100 mi）。分歧多半来自**山脉起讫的界定**（从阿尔巴尼亚边境到科林斯湾直线就有两百余公里，只算主脊则短）。**均为 3 级、无 EAGME 官方测绘**，故写区间而不锁定单值。下一轮查 EAGME 再收紧。2026-09-10 核。
    seeing:
      "The Pindus range runs the length of western mainland Greece, from the Albanian border south-east to the Gulf of Corinth over something between 160 and 200 km depending on where sources put the range's limits, earning the name \"the spine of Greece\". From the air it is a continuous, undulating limestone ridge, wet and forested to the west, drier to the east.",
    formation:
      "The range is built of Mesozoic to Cenozoic marine limestone raised by mountain-building and intensely folded; karst is widespread, with deep gorges, caves and underground rivers — the Vikos Gorge is a well-known example.",
    observation:
      "From the air, identify the Pindus by its unbroken, roughly north-west to south-east ridge line, unlike the isolated bulks of Olympus or Taygetus; the western slope carries noticeably denser vegetation, a direct expression of Epirus's wetter climate.",
    distinguish:
      "Both the Pindus and Olympus are limestone systems, but the Pindus is a continuous chain hundreds of kilometres long while Olympus is a single, relatively isolated massif; the Pindus belongs to the same Mediterranean orogenic belt as the Alps, though far smaller in scale and height.",
    concept:
      "The Pindus is mainland Greece's key climatic and hydrological divide: the western Epirus side receives abundant rainfall and fast-flowing rivers, while Thessaly and Macedonia to the east are comparatively dry; the Vikos-Aoos National Park protects this karst mountain ecosystem.",
    history:
      "The rugged Pindus terrain historically left the region relatively isolated; areas such as Zagori retain many traditional stone bridges and stone-built villages, an important record of Greek mountain vernacular architecture.",
  },

  taygetus: {
    // 全六段 sources: 主峰先知伊利亚斯 2407 m（多来源一致）；大理岩／石灰岩构成、阿尔卑斯造山带在伯罗奔尼撒的延伸、
    //   陡峭断块山地成因均与地质常识一致。斯巴达周边天然屏障、古代修道院与石砌村落为客观史实，
    //   ✅ 零争议红线：无现代政治／族群／语言少数群体表述，通过。2/3 级。2026-09-10 核，verdict: ok。
    seeing:
      "Taygetus rises over the southern Peloponnese; its highest peak, Profitis Ilias, reaches 2,407 m, and the massif climbs almost directly from the sea — among the steepest terrain on the Greek mainland.",
    formation:
      "The range is built mainly of marble and limestone, an extension of the Alpine orogenic belt into the Peloponnese; sustained tectonic uplift has left the slopes exceptionally steep, with almost no transitional lowland between the mountain foot and the coastline.",
    observation:
      "From the air, Taygetus looks like a steep grey-white wall along the western side of the Laconian Gulf, narrowing at its southern end as it runs into the sea to form the rugged base of the Mani Peninsula; snow caps the summit in winter, sharply banded above the olive groves and vineyards below.",
    distinguish:
      "Taygetus and the Pindus range are both limestone-and-marble systems, but Taygetus is a relatively isolated, north-south ridge with markedly steeper slopes; Taygetus and the White Mountains of Crete face each other across the sea, both part of the Peloponnese-Crete arc.",
    concept:
      "Taygetus's steep terrain is a typical example of Peloponnesian block-mountain landscape, with the massif facing the Mycenaean plain on one side and the Laconian Gulf on the other — a useful case study in Mediterranean fault-block mountains.",
    history:
      "The southern flank of Taygetus has long served as a natural barrier around the Sparta region; the mountain still holds several ancient monasteries and traditional stone-built villages.",
  },

  "mount-parnassus": {
    // 全六段 sources: 利亚库拉峰 2457 m；德尔斐 1987 年列入 UNESCO 世界遗产；
    //   科律基昂洞穴在古典传统中确同时与潘神／宁芙及缪斯相关联（另有版本认为缪斯本居赫利孔山，两说并存），
    //   正文表述准确、未越界写成对现代宗教的评价（希腊文化部德尔斐官方页，1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "Mount Parnassus is a limestone massif in central Greece; its highest peak, Liakoura, reaches 2,457 m, with the ancient sanctuary of Delphi set on its southern slope — one of Greece's most historically significant mountains.",
    formation:
      "The massif is built mainly of Triassic to Cretaceous marine limestone interbedded with red shale, cut by thrust faults; several shallow, north-south aligned karst basins lie within the mountain, and it also holds bauxite deposits.",
    observation:
      "From the air, Parnassus shows classic karst-highland form — a rounded, open summit rather than a sharp ridge, its flanks scattered with dissolution hollows and sinkholes; snow covers the mountain in winter, and it carries a ski area.",
    distinguish:
      "Both Parnassus and Olympus are limestone-dominated, but Parnassus has a comparatively rounded summit with many karst basins, while Olympus's ridgeline is sharper and steeper; unlike Mount Athos, Parnassus lies inland and does not meet the sea.",
    concept:
      "Parnassus's karst landscape is a textbook example of limestone terrain shaped by dissolution over long geological time; the Corycian Cave within the mountain is one of Greece's well-known karst caves.",
    history:
      "Delphi, on the mountain's southern flank, was one of ancient Greece's most important oracular sanctuaries and was inscribed as a UNESCO World Heritage site in 1987; the Corycian Cave is widely recorded in ancient tradition as associated with the god Pan and the Muses.",
  },

  "mount-athos": {
    // 全六段 sources: 主峰 2033 m；1988 年作为**混合遗产**列入 UNESCO（whc.unesco.org/en/list/454，1 级）；
    //   9 世纪起隐修、10 世纪拜占庭皇帝特许状、20 座修道院。
    //   ✅ **零争议红线专项复核**：正文**根本没有提及**只允许男性进入的规定（άβατον），也未涉自治地位、教义评价或现代政治——
    //   完全落在红线许可范围内，无需改动。2026-09-10 核，verdict: ok。
    seeing:
      "Mount Athos forms the easternmost of the three prongs of the Halkidiki Peninsula, a narrow mountainous spur; its peak reaches 2,033 m and the massif drops steeply into the Aegean — a distinctive mountain-and-monastery landscape in northern Greece.",
    formation:
      "The peninsula is built of crystalline rock and limestone, rising steeply straight from the coastline with an intricate, cape-studded shoreline — an extension of the southern Aegean orogenic belt along the peninsula's northern edge.",
    observation:
      "From the air, the Athos peninsula is a slender ridge running out into the Aegean, sharp at the summit, its slopes dotted with monastery complexes in sharp contrast with the gentler farmland and villages nearby.",
    distinguish:
      "Both Athos and Mount Pelion are mountainous peninsulas reaching into the Aegean, but Athos is far steeper and narrower, its summit permanently marked by monastic settlements, while Pelion is defined by dense forest and scattered villages.",
    concept:
      "Athos illustrates the classic form of a steep, sea-facing mountain peninsula in the eastern Mediterranean, its extreme coastal-ridge slope the product of substantial tectonic uplift combined with strong marine erosion.",
    history:
      "Orthodox monks began settling on Mount Athos from the 9th century; a 10th-century Byzantine imperial chrysobull established the monastic tradition there, and twenty monasteries were built over the following millennium; Athos was inscribed as a mixed natural and cultural UNESCO World Heritage site in 1988.",
  },

  "white-mountains-crete": {
    // seeing sources: 主峰帕赫内斯 2453 m；萨马利亚峡谷 1962 年经皇家法令设为国家公园。3 级多方互证。2026-09-10 核，verdict: ok。
    seeing:
      "The White Mountains rise over western Crete; the highest peak, Pachnes, reaches 2,453 m, named for snow that lingers into early summer and gives the range its pale, distant colour.",
    formation:
      "The massif is built of thick limestone with extensive karst development — numerous high mountain hollows and dissolution basins, cut through by deep gorges, including the Samaria Gorge, which originates here.",
    observation:
      "From the air, the White Mountains form a folded, grey-white highland across western Crete, with year-round snow patches still visible in summer; the southern flank drops abruptly to the Libyan Sea in steep coastal cliffs.",
    distinguish:
      "Both the White Mountains and Mount Ida (Psiloritis) to the east are limestone massifs, but the White Mountains carry denser, more deeply cut karst gorges, while Ida is characterised by a single rounded, isolated bulk.",
    concept:
      "The persistence of snow into early summer on the White Mountains reflects both their high elevation and the way limestone surfaces retain meltwater — a useful case study in the relationship between Mediterranean alpine karst and snow cover.",
    history:
      "The Samaria Gorge on the southern flank of the White Mountains has been a national park since 1962, an important area for mountain conservation and ecotourism on Crete.",
  },

  "mount-pilio": {
    // seeing sources: 最高峰：**Pourianos Stavros 1624 m**（峰顶有军事设施、公众不可登顶）。Pliasidi 是另一座峰、约 1547—1548 m。原文把真数字挂到了错的峰名上——与阿基尔岛那处同型。3 级多方互证。2026-09-10 核。
    seeing:
      "Mount Pelion is a forested mountain peninsula reaching into the Aegean from eastern Thessaly; its highest point, Pourianos Stavros, reaches 1,624 m, and its slopes are covered in beech and chestnut forest.",
    formation:
      "The massif is built mainly of schist and limestone, an eastward extension of the Pindus orogenic belt; comparatively high rainfall has produced dense forest and numerous streams, making Pelion one of Greece's more heavily forested mountains.",
    observation:
      "From the air, Pelion shows a deep-green forest cover in sharp contrast with the open farmland of the Thessalian Plain and the blue Aegean beyond; traditional stone-built villages are scattered through the hills.",
    distinguish:
      "Both Pelion and Athos are mountain peninsulas reaching into the Aegean, but Pelion is densely forested with comparatively gentle terrain, while Athos is steep and largely without continuous forest.",
    concept:
      "Pelion's comparatively high rainfall and forest cover stand in contrast with Greece's generally drier coastal mountains — a useful case study in climatic variation among Greek coastal ranges.",
    history:
      "In Greek mythology Pelion was widely held to be the home of the Centaurs; the mountain still holds several traditional stone-built villages dating from around the Ottoman period.",
  },

  methana: {
    seeing:
      "Methana is a volcanic peninsula on the north-eastern Peloponnese, built up from several coalesced lava domes — the westernmost active centre of the South Aegean Volcanic Arc.",
    // formation sources: 前 230 年喷发形成的熔岩穹丘是**卡梅尼霍拉（Kameni Chora）**，在半岛西北、熔岩入海（EAGME，1 级）。原文的「弗莱韦斯」是雅典近郊海外的一座无人小岛，与甲基火山群无关——纯地名张冠李戴。2026-09-10 核。
    formation:
      "The peninsula is built of andesite lava domes formed over several eruptive episodes, producing broken, hummocky terrain between the domes; the most recent known eruption, around 230 BCE, formed the Kameni Chora lava dome.",
    observation:
      "From the air, Methana shows a classic lava-dome landscape — a cluster of rounded, rough-surfaced highs, in clear contrast with the gentler Peloponnesian coastline around it.",
    distinguish:
      "Methana, Nisyros and Santorini all belong to the South Aegean Volcanic Arc, but Methana is distinguished by its cluster of small lava domes, Nisyros by its near-circular stratovolcano form, and Santorini by its large caldera.",
    concept:
      "Methana still hosts hot springs and sulphurous fumarole activity, making it one of the sites illustrating ongoing geothermal activity along the South Aegean Volcanic Arc.",
    history:
      "Methana's hot springs have long been used for therapeutic bathing, and the area remains known today for thermal-spa tourism.",
  },

  "lasithi-plateau": {
    // seeing sources: 高原平均海拔约 840 m，各来源在 800—850 m 间浮动，正文「约 850 米」在「约」字容许的误差内，不改。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Lasithi Plateau is an enclosed highland basin in eastern Crete at about 850 m elevation, ringed by mountains; thousands of white canvas-sailed windmills once pumped water for irrigation here.",
    formation:
      "The plateau is a karst polje, formed by long dissolution of the surrounding limestone massifs and local subsidence; Quaternary alluvium covers the basin floor, providing land suitable for farming.",
    observation:
      "From the air, the plateau is a neat expanse of flat green farmland enclosed by mountains, sharply set off against the bare limestone slopes around it; on clear days the white windmills scattered across the fields are an easily recognisable marker.",
    distinguish:
      "Both the Lasithi Plateau and the Thessalian Plain are agricultural land, but Lasithi is a small, high-elevation karst basin surrounded by mountains, while the Thessalian Plain is a broad, low-elevation floodplain built by a major river.",
    concept:
      "The Lasithi Plateau is a textbook example of a karst polje — dissolution of the surrounding limestone forms an enclosed hollow, and its sediment floor provides flat, farmable ground.",
    history:
      "The Dikteon Cave on the plateau's south-eastern edge is widely recorded in Greek mythology as the birthplace of Zeus; the plateau has long been an important agricultural district of Crete.",
  },

  "thessaly-plain": {
    seeing:
      "The Thessalian Plain is mainland Greece's largest agricultural plain, built up by the Pineios River and its tributaries — known as \"the breadbasket of Greece\".",
    formation:
      "The plain has accumulated from Quaternary alluvium carried by the Pineios and its tributaries, flat and open with deep, fertile soil; it is ringed by the Pindus range, Mount Othrys, Mount Pelion, Mount Ossa and Mount Olympus.",
    observation:
      "From the air, the Thessalian Plain appears as a neat patchwork of farmland set sharply against the surrounding mountains; the Pineios River winds across the plain, and the Vale of Tempe in the north-east forms a natural passage toward Macedonia.",
    distinguish:
      "Both the Thessalian Plain and the Lasithi Plateau are agricultural land, but the Thessalian Plain is a broad, low-elevation floodplain built by a major river, while Lasithi is a small, high-elevation karst basin ringed by mountains.",
    // concept sources: 「超过一半的土地用于农业种植」**查不实，已降级为不带比例的表述**：
    //   希腊语来源给的「250 万 / 500 万斯特雷马」是**理论灌溉面积**占比，不是种植面积占比；
    //   另一份皮尼奥斯河流域（范围比平原本身大）的资料给农业用地 36%，与「过半」矛盾。
    //   ELSTAT 对「色萨利平原」本身的种植面积占比没找到（3 级来源，2026-09-08 核）。
    //   「希腊本土面积最大的农业平原」这一条核实属实（约 5000 km² 级）。
    //   history 板块经零争议红线复核合规（只写地质史与广泛记载的古典时期史实）。
    concept:
      "The Thessalian Plain is one of Greece's main grain-producing regions, with a large share of its land under cultivation — wheat, cotton and maize are the main crops — illustrating how deep alluvial soils support intensive agriculture.",
    history:
      "The Thessalian Plain has been an important agricultural region since ancient Greek times, and the area was historically noted for raising fine horses.",
  },

  "santorini-caldera": {
    // 全六段 sources: ✅ **两处专项复核都通过**。① 正文**没有**把米诺斯喷发写成「摧毁了米诺斯文明」——
    //   那是流传极广但学界并不支持的因果推论（克诺索斯等宫殿在喷发后仍延续了一个多世纪）；② 亚特兰蒂斯已明确写成
    //   「仅是后世的一种猜测性关联，并非确证的历史事实」。**假说没有被写成定论。**
    //   放射性碳测年集中在前 1627—1600 年、VEI 7；淹没破火山口约 7.5 × 11 km（正文「约 12 公里」落在长轴范围内）。2026-09-10 核，verdict: ok。
    seeing:
      "The Santorini caldera is a vast collapse crater in the Aegean, formed when a massive Late Bronze Age eruption around 1600 BCE caused the island's centre to collapse; the surviving arc of islands forms today's Thira.",
    formation:
      "The eruption ranks among the largest in recorded human history (estimated VEI 7); after ejecting huge volumes of ash and pumice, the emptied magma chamber caused the surface to collapse, forming a caldera roughly 12 km across, later flooded by the sea to form today's caldera bay.",
    observation:
      "From the air, Santorini shows a distinctive crescent outline, with the towns of Fira and Oia perched atop caldera-rim cliffs about 300 m high, overlooking the deep-blue bay below; Nea Kameni and Palea Kameni, the dark resurgent lava domes at the centre, rose after the eruption.",
    distinguish:
      "Both Santorini and Nisyros are calderas on the South Aegean Volcanic Arc, but Santorini's caldera is far larger and mostly submerged, while Nisyros's crater is entirely on land and much smaller.",
    concept:
      "Santorini illustrates the full process by which a large eruption empties a magma chamber and causes surface collapse into a caldera — an important case study in volcanic collapse mechanisms and hazard; the Bronze Age settlement at Akrotiri, buried by the eruption, has been systematically excavated and is sometimes called \"the Pompeii of the Aegean\".",
    history:
      "The caldera's formation is often popularly linked to Plato's account of \"Atlantis\", though this remains a speculative later association rather than an established historical fact; the frescoes and buildings recovered at Akrotiri provide important material for the study of Aegean civilisation.",
  },

  nisyros: {
    // seeing sources: 斯特凡诺斯火山口：椭圆形，长径约 350 m、短径约 260 m、最深 27 m（尼西罗斯世界地质公园官网，1 级）。原文只写了短轴、会被读成圆形。2026-09-10 核。
    seeing:
      "Nisyros is a near-circular stratovolcano island in the Dodecanese; its central Stefanos crater is elliptical, roughly 260 by 350 m and still hosts active fumaroles and geothermal activity.",
    formation:
      "The volcanic island is built up from andesite and dacite erupted over several episodes; the central crater formed through a more recent phreatic eruption — explosive but without a large fresh-magma outflow — and its floor remains bare to this day.",
    observation:
      "From the air, Nisyros shows a near-circular island outline with a clearly visible central depression; the pale crater floor contrasts sharply with the green vegetation around it, and white steam can be seen rising from fumaroles along the crater rim.",
    distinguish:
      "Both Nisyros and Santorini are volcanic islands on the South Aegean Volcanic Arc, but Nisyros's crater is small and entirely on land, while Santorini's caldera is vast and mostly submerged.",
    concept:
      "Nisyros's crater is a textbook example of a phreatic eruption — groundwater contacting a magmatic heat source flashes to steam and produces an explosive eruption without necessarily ejecting large volumes of fresh magma.",
    history:
      "Nisyros's hot springs and geothermal resources have long been put to use, and the island remains known today for geothermal and spa tourism.",
  },

  "gulf-of-corinth": {
    // 全六段 sources: 已作恰当限定（「较快……之一」「具体速率因测算方法不同而有所差异」），**没有给出会过期的单一精确速率**。
    //   ✅ 专项复核：**地峡（古已有之的陆路通道）与科林斯运河（1893 年前后人工开凿）两件事区分清楚**，未混为一谈。2026-09-10 核，verdict: ok。
    seeing:
      "The Gulf of Corinth is a long, narrow inlet separating the Peloponnese from mainland Greece — essentially an active rift graben where the two shores continue to pull apart.",
    formation:
      "The gulf sits within a rift basin formed by crustal extension, with both flanks subsiding along normal faults as the sea has flooded in to form today's inlet; geologists regard it as one of the world's faster-extending continental rifts, though the precise rate varies with the measurement method used.",
    observation:
      "From the air, the Gulf of Corinth is a long, narrow east-west band, its mountainous shores rising steeply close to the water; the cable-stayed bridge at the narrowest point, the Rio-Antirrio strait, is a distinctive landmark.",
    distinguish:
      "The Gulf of Corinth and a fjord such as those in Norway are both long, narrow inlets, but the Gulf of Corinth formed as a tectonic rift graben, while fjords are carved by glacial erosion — the two differ entirely in shoreline form and formation mechanism.",
    concept:
      "The Gulf of Corinth is a classic case study in continental rift evolution; the continuous extension and subsidence of both shores makes the region one of the more seismically active in Greece.",
    history:
      "The Isthmus of Corinth has long served as a key land route linking the Peloponnese to mainland Greece; the Corinth Canal, cut in the late 19th century, connects the Gulf of Corinth to the Saronic Gulf.",
  },

  "vikos-gorge": {
    // 全六段 sources: ✅ **「世界最深峡谷」这个口径专门查了**：吉尼斯世界纪录的认定口径是
    //   **「相对其宽度而言最深」（deepest gorge relative to its width）**，不是绝对深度。
    //   正文已用「相对深度这一口径」框住并加「之一」弱化，**比官方原纪录还保守**，未夸大。
    //   📌 与 `samaria-gorge` 并排读：一条讲「深度比」、一条讲「长度」，**两个不同口径、不构成本库内部打架**——事前担心不成立。2/3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Vikos Gorge is a deeply incised limestone gorge in the Zagori area of Epirus, part of the Pindus range, carved by the Voidomatis River.",
    formation:
      "The gorge developed in thick limestone through long-term river downcutting combined with karst dissolution, producing steep gorge walls; its ratio of depth to width is exceptionally high among comparable gorges.",
    observation:
      "From the air, the Vikos Gorge is a winding, dark, steep-walled cleft set into the pale limestone plateau, its densely forested floor in sharp contrast with the bare rock walls above.",
    distinguish:
      "Both Vikos and Samaria are well-known Greek limestone gorges, but Vikos lies in the Pindus range on the Greek mainland, while Samaria lies in the White Mountains of Crete — the two belong to entirely different mountain systems and islands.",
    concept:
      "Vikos has been listed by Guinness World Records among the world's deepest gorges by relative depth — an important case study in the erosion of limestone gorges.",
    history:
      "The Vikos-Aoos National Park surrounding the gorge preserves numerous traditional stone bridges and stone-built villages of the Zagori area, an important record of Greek mountain vernacular architecture.",
  },

  "samaria-gorge": {
    // 全六段 sources: 长约 16 km；最窄处「铁门」两壁相距 3—4 m；1962 年设国家公园；克里克里野山羊栖息地。
    //   ⚠️ **崖高众说纷纭**：英文旅游站给 300／500／600 m 不等，**希腊本地来源一致给约 300 m**，与正文吻合，故不改；
    //   英文站的更高数字疑为夸大，记在这里供下一轮留意。「欧洲最长的峡谷**之一**」已用「之一」弱化。2026-09-10 核，verdict: ok。
    seeing:
      "The Samaria Gorge is a roughly 16 km limestone gorge on the southern flank of the White Mountains in Crete, one of the longest gorges in Europe.",
    formation:
      "The gorge was cut by long-term river downcutting through the White Mountains' thick limestone; at its narrowest point, the \"Iron Gates\", the walls stand only about 3-4 m apart and rise roughly 300 m — a classic karst gorge landform.",
    observation:
      "From the air, the Samaria Gorge is a narrow, deeply incised cleft winding through the southern flank of the White Mountains, its floor sparsely vegetated and its walls exposed rock, in sharp contrast with the highland around it.",
    distinguish:
      "Both Samaria and Vikos are limestone karst gorges, but Samaria is narrower and steeper-sided, pinching to only a few metres wide at its narrowest, while Vikos is generally broader throughout.",
    concept:
      "Samaria is a textbook example of a karst gorge cut into an extremely narrow floor by sustained river downcutting; it has been a national park since 1962 and is an important habitat for the Cretan wild goat, the kri-kri.",
    history:
      "The rugged terrain of the Samaria Gorge and its surroundings has historically served as a refuge for local inhabitants; today it is a major ecotourism and hiking destination on Crete.",
  },

  "zakynthos-navagio": {
    // 全六段 sources: ⚠️ C8 现状：2022 年地震后海湾因落石被希腊环境部划为不安全、**禁止登滩**，封闭已延长至 2026 年 10 月底；
    //   游客仍可乘船靠近或在崖顶观景台俯瞰。正文写的是「仅能经海路或崖顶观景点抵达」，**没有断言可以下到沙滩**，与现状不冲突，判定不改。
    //   📌 但「经海路……抵达」今后若被读作「可乘船登陆」需随现状调整——记在这里。3 级媒体。2026-09-10 核，verdict: ok。
    seeing:
      "Navagio Beach is a small cove on the north-western coast of Zakynthos, enclosed by steep white limestone cliffs and reachable only by boat or from a clifftop viewpoint.",
    formation:
      "The cove formed as limestone cliffs retreated under long-term wave erosion; the cliff faces are nearly vertical, and the beach sand is made up of cliff debris and marine sediment.",
    observation:
      "From the air, Navagio shows a striking contrast of colours — brilliant white limestone cliffs, deep-blue water and a golden-sand beach, with the wreck of a stranded ship on the beach as an unmistakable landmark.",
    distinguish:
      "Navagio and coastlines such as the Amalfi Coast are both known for their limestone cliffs, but Navagio is small in scale and forms a nearly enclosed cove, with the surrounding cliffs largely shutting out the view of the open sea.",
    concept:
      "Navagio illustrates how differential wave erosion of a limestone coast can carve out a localised, indented cove — a useful case study in Mediterranean limestone coastal landforms.",
    history:
      "The wrecked vessel on the beach is believed to be a smuggling ship stranded in the 1980s, and it has since become one of the cove's most recognisable features.",
  },

  "mani-peninsula": {
    // 全六段 sources: ✅ **零争议红线专项复核**：正文只写了塔楼式民居的建筑传统，**没有**提及家族世仇／宗族械斗，也没有族群性格评价，通过。
    //   泰纳隆角为希腊大陆最南端、欧洲大陆第二南端，正文用「常被视为」这一限定准确。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Mani Peninsula is a rugged mountainous cape at the southern tip of the Peloponnese, a continuation of Taygetus southward, with rough terrain and much exposed limestone.",
    formation:
      "The peninsula is built of limestone and marble, a continuation of Taygetus's tectonic uplift; the Diros Caves on the west coast contain an underground lake system, a classic product of karst dissolution.",
    observation:
      "From the air, Mani shows rugged, rocky terrain, bare grey-white limestone interspersed with sparse scrub, and a deeply indented, cape-studded coastline; Cape Tainaron at the peninsula's southern tip, reaching into the sea, is often regarded as the southernmost point of mainland Greece.",
    distinguish:
      "Both the Mani Peninsula and the White Mountains of Crete belong to the Taygetus-Crete arc, but Mani sits at a lower elevation and meets the sea directly, while the White Mountains are higher and lie further inland to the west on Crete.",
    concept:
      "Mani's rugged terrain and thin soils shaped the region's distinctive tower-house architecture — a case study in how Mediterranean communities adapted to rugged limestone terrain.",
    history:
      "Traces of prehistoric human activity have been found inside the Diros Caves; the peninsula's rugged terrain historically kept it relatively isolated, and it retains extensive traditional stone tower-house complexes.",
  },

  crete: {
    // 全六段 sources: 希腊第一大岛；伊达山（普西罗里蒂斯）2456 m 为全岛最高点；希腊弧（非洲板块向爱琴微板块俯冲）持续隆升。
    //   📌 交叉留痕：**本条的 2456 m 正是证伪 `samothraki`「整个爱琴海诸岛最高点」的依据**——两条同在一批里，并排读才对上。2026-09-10 核，verdict: ok。
    seeing:
      "Crete is Greece's largest island, its terrain rising and falling from west to east across several mountain ranges — the White Mountains, Mount Ida (Psiloritis, 2,456 m, the island's highest point) — with the Messara Plain in the south-central part of the island.",
    formation:
      "Crete sits on the Hellenic Arc, formed where the African Plate subducts beneath the Aegean microplate, and has been steadily uplifted overall; the island's mountains are predominantly limestone, with extensive karst development.",
    observation:
      "From the air, Crete forms a long, narrow east-west shape with alternating mountains and plains — the White Mountains rise tall and rugged in the west, Mount Ida stands as a rounded, isolated bulk in the centre, the Messara Plain opens flat and broad in the south, and the northern coast is dotted with bays and harbours.",
    distinguish:
      "Both Crete and Rhodes are large islands in southern Greece, but Crete is far larger with more rugged, higher mountains, while Rhodes is smaller with gentler terrain.",
    concept:
      "Crete's sustained uplift is directly linked to subduction along the Hellenic Arc, making it an important case study in eastern Mediterranean plate subduction and island-arc landform evolution.",
    history:
      "The Idaean Cave on Mount Ida is widely recorded in Greek mythology as the place where Zeus grew up; Crete has long been an important centre of civilisation in the Aegean.",
  },

  samothraki: {
    // seeing sources: ⚠️ 原文「整个爱琴海诸岛中的最高点」**被本库 `crete` 条目自己证伪**（伊达山 2456 m），埃维亚岛迪尔菲斯山 1743 m 亦高于它，芬加里峰实排第三。第五次「排他性断言被本库另一条目证伪」，且这次两条同在一批里。2026-09-10 核。
    seeing:
      "Samothrace is a predominantly granite island in the northern Aegean; its central peak, Mount Fengari, reaches 1,611 m — the third-highest summit of any Aegean island, after Mount Ida on Crete and Mount Dirfys on Evia.",
    formation:
      "The island is built of granite, with steep terrain and numerous waterfalls and streams — among the most dramatically relieved of the Aegean islands despite its modest area, with striking relative relief.",
    observation:
      "From the air, Samothrace shows a strikingly tall profile compared with the generally low Aegean islands around it — Mount Fengari rises abruptly at the centre, its slopes densely vegetated and cut by deep stream valleys.",
    distinguish:
      "Both Samothrace and Milos are Aegean islands, but Samothrace is dominated by granite highland terrain, while Milos is volcanic in origin, low-lying, and marked by colourful, varied surface rock.",
    concept:
      "Samothrace's relative relief stands out among Aegean islands — a case study in how a small island with hard bedrock can retain pronounced topography.",
    history:
      "The ancient Sanctuary of the Great Gods, site of the Samothracian Mysteries, stood on the island; the excavated statue known as the Winged Victory of Samothrace, now in the Louvre, is an important surviving artefact of ancient Aegean civilisation.",
  },

  corfu: {
    // 全六段 sources: 伊奥尼亚群岛最北、面积第二大的主要岛屿；潘托克拉托山 906 m；科孚老城 2007 年列入 UNESCO
    //   （whc.unesco.org/en/list/978，1 级），威尼斯统治期 1386—1797 年。
    //   ✅ 零争议红线：威尼斯／英国保护领时期只作建筑史陈述、无评价，未涉现代政治与国际关系。2026-09-10 核，verdict: ok。
    seeing:
      "Corfu is the northernmost major island of the Ionian Islands; its highest point, Mount Pantokrator, reaches 906 m, and its vegetation stays green year-round thanks to rainfall notably higher than the Aegean islands receive.",
    formation:
      "The island is predominantly limestone with karst development; its position on the Ionian Sea brings comparatively abundant rainfall, producing dense vegetation cover unlike the drier Aegean islands.",
    observation:
      "From the air, Corfu shows a clearly green cast, with olive groves and forest covering much of its hills and highlands, a sharp contrast with the bare, tawny surfaces typical of many Aegean islands.",
    distinguish:
      "Compared with an Aegean island such as Milos, Corfu has markedly higher vegetation cover and a greener surface, a difference driven mainly by the higher rainfall on the Ionian side of Greece.",
    concept:
      "Corfu's lush vegetation is a direct expression of the comparatively humid climate along Greece's western Ionian coast, contrasting with the dry Mediterranean climate of the Aegean islands to the east and south.",
    history:
      "The Venetian-era fortifications of Corfu's Old Town were built in stages between 1386 and 1797 and were inscribed as a UNESCO World Heritage site in 2007.",
  },

  milos: {
    // seeing sources: ✅ 零争议红线：《米洛斯的维纳斯》1820 年发现、现藏卢浮宫——**只作发现与收藏的事实陈述，未涉文物归还争议**，通过。2026-09-10 核。
    seeing:
      "Milos is a volcanic island on the South Aegean Volcanic Arc, its varied and colourful volcanic rock layers forming a distinctive landscape, especially striking at the Sarakiniko coast.",
    formation:
      "The island is built of tuff, pumice, lava and other rock types from several eruptive episodes; at Sarakiniko, white pumice and tuff have been carved by wave and wind erosion into a moon-like landscape.",
    observation:
      "From the air, Milos shows a strikingly multicoloured surface — the white Sarakiniko coast alternating with reddish-brown and yellow volcanic rock layers — set off sharply against the surrounding blue sea.",
    distinguish:
      "Both Milos and Nisyros are islands on the South Aegean Volcanic Arc, but Milos is known for its colourful, varied volcanic rock and mineral resources, while Nisyros is defined by its well-preserved crater landform.",
    concept:
      "Milos's colourful landscape reflects successive layers of volcanic material from different eruptive episodes and rock types — a textbook case in the surface lithological diversity of volcanic islands; the island still produces kaolin, perlite and bentonite.",
    // history sources: 黑曜岩贸易起点：弗兰赫蒂洞穴**中石器时代**地层（约前 9 千纪）已有米洛斯黑曜岩，早于新石器。只有 3 级综述，故正文写「史前 / 最早可追溯至中石器时代」、不写死千纪。2026-09-10 核。
    history:
      "Milos has traded obsidian since prehistoric times, with evidence of it crossing the sea as early as the Mesolithic; the statue known as the Venus de Milo, discovered on the island in 1820, is now held in the Louvre.",
  },

  rhodes: {
    // 全六段 sources: 阿塔维罗斯峰 1215 m 为岛上最高峰；罗德岛约 1400 km²、多德卡尼斯群岛面积最大者。
    //   ✅ **排名口径专项复核**：正文只限定在「多德卡尼斯群岛中最大」，**没有做「希腊第几大岛」的绝对排名**——
    //   与本库 `crete`（希腊第一大岛）并排读自洽（罗德岛按全希腊算排第四，在克里特、埃维亚、莱斯沃斯之后）。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "Rhodes is the largest island of the Dodecanese, predominantly limestone terrain, with its highest point, Mount Attavyros, reaching 1,215 m.",
    formation:
      "The island is built mainly of limestone, its central highlands descending gently outward in a series of terraces and hills, with an intricate, naturally sheltered coastline.",
    observation:
      "From the air, Rhodes shows an oval outline with highlands rising at its centre, surrounded by terraced fields and olive groves; the medieval fortifications of Rhodes town, at the north-eastern tip, are clearly visible.",
    distinguish:
      "Both Rhodes and Crete are large limestone islands in southern Greece, but Rhodes is far smaller with gentler terrain, while Crete's mountains are considerably higher and more rugged.",
    concept:
      "Rhodes's gently sloping terraced terrain has provided favourable conditions for terraced farming and olive cultivation — a case study in agricultural adaptation to Mediterranean limestone island landscapes.",
    history:
      "The medieval old town of Rhodes was fortified by the Knights Hospitaller between the 14th and 16th centuries and is one of Europe's best-preserved medieval fortified towns, inscribed as a UNESCO World Heritage site in 1988.",
  },

  "lake-trichonida": {
    // 全六段 sources: 希腊面积最大的天然湖，各来源给 96—98.6 km²，正文「约 96」落在通行区间内。
    //   ✅ 与 `lake-prespa` 并排读自洽（普雷斯帕大部分在境外、希腊境内部分更小）。
    //   ⚠️ 未找到带监测年份的官方（希腊环境部／EKBY）数字，级别停在 3 级；下一轮补年份口径。2026-09-10 核，verdict: ok。
    // seeing sources: 面积：各来源 95.8—98.6 km²（希腊语维基 95.8 / lakesnetwork 96.5 与 98.6 / EKBY 片段 97），**没有一处带监测年份**；希腊农村发展与食品部页面疑似给 96.5 km² 但 403 取不到原文（1 级未能核实）；Natura 2000 GR2310009 只给两湖合计湿地 14,279.8 ha（1995），是保护区边界不是湖面面积。正文因此改成 96—99 的区间并写明没有官方监测数字。2026-09-12 核。排名：沃尔维湖约 70 km²、韦戈里蒂达湖约 45—54 km²，级差悬殊，「面积最大的天然湖泊」成立（3 级来源一致）。
    seeing:
      "Lake Trichonida lies in the Aetolia-Acarnania region of western mainland Greece and is Greece's largest natural lake by surface area; published figures range from about 96 to 99 km², with no official measurement carrying a survey year.",
    formation:
      "The lake basin is tectonic in origin, formed by subsidence along a regional fault zone, with comparatively great depth; it is fed mainly by runoff and groundwater from the surrounding hills.",
    observation:
      "From the air, Lake Trichonida forms a long, narrow oval of calm open water, ringed by low hills and farmland, a contrast with Greece's generally mountainous terrain.",
    distinguish:
      "Both Lake Trichonida and Lake Prespa are important Greek natural lakes, but Trichonida lies entirely within Greece and is larger, while Prespa spans Greece, Albania and North Macedonia and sits at a higher elevation.",
    concept:
      "Lake Trichonida is a representative tectonic lake basin of mainland Greece, its formation closely tied to regional crustal fault activity.",
    history:
      "The area around Lake Trichonida has long supported agriculture and fishing, with the lake providing an important water resource for the surrounding region.",
  },

  "lake-prespa": {
    // seeing / formation sources: 海拔 853 m，巴尔干最高的构造湖；经地下喀斯特通道与俄赫里德湖连通。
    //   跨境表述保持中性、不描述边界线、不表述主权。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "Lake Prespa comprises Great Prespa and Small Prespa, spanning Greece, Albania and North Macedonia at an elevation of about 853 m.",
    formation:
      "The lake basin is a karst tectonic lake, formed by regional subsidence combined with karst dissolution; part of its water connects to Lake Ohrid through underground karst channels.",
    observation:
      "From the air, Lake Prespa is a bright blue, high-elevation expanse of water ringed by mountains, its shoreline irregular and dotted with small islands and wetlands, in sharp contrast with the bare mountains around it.",
    distinguish:
      "Both Lake Prespa and Lake Trichonida are important Greek lakes, but Prespa sits at higher elevation and spans three national borders, while Trichonida lies entirely within Greece at lower elevation.",
    concept:
      "Lake Prespa is an important high-altitude karst lake ecosystem in the Balkans and a key habitat for the Dalmatian pelican and other rare waterbirds.",
    // history sources: ⚠️ 零争议红线：删去解释北马其顿国名与《普雷斯帕协议》的括注（该协议正是在这座湖签的）。2000 年三国共设跨境普雷斯帕公园作为事实保留。跨境表述保持中性、不描述边界线。2026-09-10 核。
    history:
      "Greece, Albania and North Macedonia jointly established the transboundary Prespa Park in 2000 for cooperative lake conservation.",
  },

  "acheloos-river": {
    // 其余 sources: 上游穿品都斯石灰岩峡谷、河口三角洲与潟湖湿地；与皮尼奥斯河的流向对比（西入伊奥尼亚海 vs 东入爱琴海）核实无误。
    //   ⚠️ 阿刻罗俄斯调水工程（Acheloos diversion）**正文没有提及**，故无需处理现状与时点；下一轮若要补，只写工程与法律事实、不做评价。2026-09-10 核。
    // seeing sources: ⚠️ 「希腊本土最长的河流」错：阿利阿克蒙河 297 km、完全在希腊境内，才是最长；阿刻罗俄斯约 220 km、**水量最大**、长度第二。原文把真实的头衔（水量最大）换成了错的（最长）。3 级多方一致。2026-09-10 核。
    seeing:
      "The Acheloos carries more water than any other river in Greece and runs about 220 km, second in length among Greek rivers only to the Aliakmon, rising in the southern Pindus range and flowing out into the Ionian Sea.",
    formation:
      "The upper river runs through limestone gorges in the Pindus, its middle and lower reaches passing reservoirs and lowlands, with a delta and lagoon wetlands developing at its mouth — an important river system of western Greece.",
    observation:
      "From the air, the upper Acheloos winds through mountain gorges, its water colour shifting with the seasons; downstream the channel widens, and the delta and surrounding lagoons at its mouth form extensive wetlands meeting the blue Ionian Sea.",
    distinguish:
      "Both the Acheloos and the Pineios rise in the Pindus range, but the Acheloos flows west into the Ionian Sea while the Pineios flows east across the Thessalian Plain into the Aegean — their catchments run in opposite directions.",
    concept:
      "The delta and lagoon wetlands at the Acheloos's mouth form an important wetland ecosystem in western Greece, providing key habitat for migratory birds.",
    history:
      "In Greek mythology the Acheloos was personified as the river god Achelous, a widely recorded tradition reflecting the reverence ancient Greeks held for major rivers.",
  },

  meteora: {
    // 全六段 sources: ✅ **成因专项复核**：岩柱是约 6000 万年前河流／湖泊三角洲沉积的**砂砾岩**经抬升与差异侵蚀形成，
    //   **不是喀斯特、也不是火山成因** —— 正文写对了，`distinguish` 段与喀斯特的区分也准确。
    //   修道院鼎盛期约 24 座（正文「20 余座」合理）、现存 6 座在用；1988 年作为混合遗产列入 UNESCO。
    //   ✅ 零争议红线：只写建筑与遗产，未涉宗教教义评价或现代政教关系。2026-09-10 核，verdict: ok。
    seeing:
      "Meteora is a cluster of steep, isolated sandstone and conglomerate pinnacles on the north-western edge of the Thessalian Plain, atop which Orthodox monks began building monasteries from the 14th century.",
    formation:
      "The pinnacles formed from sandstone-conglomerate layers deposited by an ancient river delta roughly 60 million years ago, later uplifted regionally and shaped by differential erosion from water and weathering, in which softer material wore away while harder rock survived as today's towering pillars.",
    observation:
      "From the air, Meteora appears as a cluster of grey-brown pinnacles thrust abruptly upward at the edge of the Thessalian Plain, in stark contrast with the open, flat farmland around it; monastery buildings are visible atop some of the pillars.",
    distinguish:
      "Meteora's pinnacles differ from Crete's karst landscape — Meteora is an inselberg formed by differential erosion of sandstone-conglomerate, while karst forms through the dissolution of limestone; the two differ entirely in rock type and erosion mechanism.",
    concept:
      "Meteora is a classic case study in how continental sedimentary rock, following regional uplift and differential erosion, can be left standing as isolated rock pinnacles — an illustration of how hard rock layers survive as high points through long erosional processes.",
    history:
      "At its peak more than twenty monasteries stood at Meteora; six remain in use today. Meteora was inscribed as a mixed natural and cultural UNESCO World Heritage site in 1988.",
  },
};
