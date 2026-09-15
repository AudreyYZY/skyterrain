import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Thailand ============
  "doi-inthanon": {
    // 全六段 sources: 茵他侬山 2565 m 为泰国最高峰；国家公园 1972-10-02 设立；山名取自关注森林保护的清迈王 Inthawichayanon。核实 2026-09-11，未改动
    seeing:
      "Doi Inthanon is Thailand's highest peak at 2,565 m, a granite batholith and the high point of the Thanon Thongchai Range in northern Thailand.",
    formation:
      "The massif is a granite batholith intruded during the Cretaceous to Palaeogene; long weathering and erosion have left a rounded, dome-like summit with a striking elevation drop to the surrounding lowlands.",
    observation:
      "From the air, Doi Inthanon's summit is wreathed in cloud year-round; the noticeably cooler temperature at this elevation preserves a montane moss-forest ecosystem found nowhere else in Thailand.",
    distinguish:
      "Doi Inthanon and Doi Luang Chiang Dao are both iconic peaks of northern Thailand, but Doi Inthanon is a rounded granite batholith, while Doi Luang Chiang Dao is limestone karst riddled with a large cave system.",
    concept:
      "As the high point of the Thanon Thongchai Range — the southward extension of Myanmar's Shan Hills into Thailand — Doi Inthanon is a key reference for understanding how mainland Southeast Asia's mountain spine extends south.",
    history:
      "Named for the late Chiang Mai ruler Inthawichayanon, who was concerned about deforestation in the north during his lifetime; designated a national park in 1972.",
  },
  "doi-luang-chiang-dao": {
    // seeing sources: 「泰国第三高峰」属实（次于因通山 2565 m、帕黑山 2296 m）；海拔各来源分歧达 100 m（2175 / 2225 / 2275），**没有一个支持原写的 2138**，故写区间不择一；清道山生物圈保护区 2021-09-15 列入 UNESCO MAB，为泰国第五个（1 级）。核实 2026-09-11
    seeing:
      "Doi Luang Chiang Dao is Thailand's third-highest peak, put at between 2,175 and 2,275 m depending on the source, a limestone karst massif riddled with one of the country's largest cave systems.",
    formation:
      "The massif's bedrock is Palaeozoic limestone; long dissolution by groundwater has carved an extensive cave network, leaving a steep, jagged outline that contrasts sharply with the rounded granite peaks nearby.",
    observation:
      "From the air, Doi Luang Chiang Dao's limestone cliffs rise almost vertically, a sharp contrast with the gentle valley floor around it; the entrance to Chiang Dao Cave at its foot is clearly visible.",
    distinguish:
      "Doi Luang Chiang Dao and Doi Inthanon are both northern Thai peaks, but Doi Luang Chiang Dao is jagged limestone karst riddled with caves, while Doi Inthanon is a rounded granite batholith.",
    concept:
      "Doi Luang Chiang Dao's steep karst topography and its extensive internal cave system are an important case for studying how long-term dissolution shapes underground cave networks in tropical limestone mountains.",
    history:
      "In 2021 the Doi Luang Chiang Dao Biosphere Reserve was added to UNESCO's Man and the Biosphere Programme, an important conservation area in northern Thailand.",
  },
  "doi-suthep-pui": {
    // 全六段 sources: 素贴山 1676 m；素贴寺始建于 14 世纪兰纳王国；国家公园 1981-04-14 设立（泰国第 24 座）。核实 2026-09-11，未改动
    seeing:
      "Doi Suthep is a 1,676 m peak west of Chiang Mai; Wat Phra That Doi Suthep, founded on its slope in the 14th century, is one of northern Thailand's most important Buddhist pilgrimage sites.",
    formation:
      "The massif is mainly granite, forming a comparatively isolated mountain barrier on the west side of the Chiang Mai basin; long erosion has kept its overall conical shape largely intact.",
    observation:
      "From the air, Doi Suthep's slopes are covered in dense forest, with the golden roofs of Wat Phra That Doi Suthep standing out against the green mountainside; the old walled city of Chiang Mai and its moat are visible below.",
    distinguish:
      "Doi Suthep and Doi Inthanon both belong to northern Thailand's Thanon Thongchai Range, but Doi Suthep is lower and known for its hillside temple, while Doi Inthanon is the range's highest point.",
    concept:
      "As a natural barrier to the Chiang Mai basin, Doi Suthep is a sample for studying the relationship between northern Thailand's intermontane basin landforms and mountain settlement patterns.",
    history:
      "Wat Phra That Doi Suthep is traditionally said to have been founded in the 14th century during the Lanna kingdom; the mountain and neighbouring Doi Pui were jointly designated a national park in 1981.",
  },
  "khao-luang": {
    seeing:
      "Khao Luang is the highest peak on the southern Thai peninsula at 1,780 m, located in Nakhon Si Thammarat Province, built of granite.",
    formation:
      "The massif is a granite batholith; long weathering under a wet tropical climate has produced dense vegetation and a well-developed drainage network, with numerous rivers radiating outward from the mountain.",
    observation:
      "From the air, Khao Luang rises high above the narrow southern Thai peninsula, wreathed in cloud year-round; its wet mountain climate sustains dense rainforest and extensive orchards.",
    // distinguish sources: 考銮山 1780 m 为泰国南部半岛最高点，1974-12-18 设为泰国第 9 座国家公园；与茵他侬山（全境最高 2565 m）直线距离约 1138 km。核实 2026-09-11
    distinguish:
      "Khao Luang and Doi Inthanon are both among Thailand's highest peaks, but Khao Luang is the high point of the southern peninsula, while Doi Inthanon is the highest point in the country as a whole, over 1,100 km apart in a straight line.",
    concept:
      "As the highest peak on Thailand's narrow southern peninsula, Khao Luang is an important reference for understanding the north-south climate and vegetation contrasts along this elongated landform.",
    history:
      "Designated a national park in 1974; its wet mountain climate has long made it an important fruit-growing region in southern Thailand, with a long history of hillside orchards.",
  },
  "khao-yai": {
    // 全六段 sources: 1962 年设立，**泰国第一座国家公园**；「丹辇拉扎—考艾森林群」2005 年列入 UNESCO（whc.unesco.org/en/list/590，1 级）。注：此处的丹辇拉扎山脉即 khorat-plateau 条目本轮改正后引用的那条。核实 2026-09-11，未改动
    seeing:
      "Khao Yai is a mountain forest spanning the south-western edge of the Khorat Plateau; designated in 1962, it was Thailand's first national park.",
    formation:
      "The massif is the uplifted south-western margin of the Khorat Plateau, its bedrock mainly sandstone and volcanic rock; long erosion has produced rolling, forested mountain terrain.",
    observation:
      "From the air, Khao Yai is covered in extensive evergreen and deciduous forest, with numerous waterfalls dropping along its valleys — a sharp landform contrast with the broad, flat plateau surface of the Khorat Plateau nearby.",
    distinguish:
      "Khao Yai and the Khorat Plateau share the same geological structure, but Khao Yai specifically refers to the uplifted, densely forested south-western margin, while the Khorat Plateau refers to the vast, flat plateau body to its north-east.",
    concept:
      "The Dong Phayayen–Khao Yai Forest Complex, of which Khao Yai is part, is one of the largest remaining evergreen forests in mainland Southeast Asia, an important sample for studying lowland evergreen forest ecosystems on the peninsula.",
    history:
      "Designated Thailand's first national park in 1962; in 2005 the \"Dong Phayayen–Khao Yai Forest Complex\" was inscribed on the UNESCO World Heritage List.",
  },
  "thung-yai-huai-kha-khaeng": {
    // 全六段 sources: 面积 622,200 ha、1991 年列入 UNESCO、栖息泰国约 77% 的大型哺乳动物种群 —— 三项均由 UNESCO 官方数据表确认（whc.unesco.org/en/list/591，1 级）。正文只写自然地貌与保护区制度，未涉边境管控或族群，符合红线。核实 2026-09-11，未改动
    seeing:
      "The Thung Yai–Huai Kha Khaeng Wildlife Sanctuaries form a mountain forest along Thailand's border with Myanmar, covering about 622,200 hectares — the largest conservation area remaining in mainland Southeast Asia.",
    formation:
      "The sanctuaries lie along the southern Thanon Thongchai Range in western Thailand, terrain dominated by rolling low mountains and river valleys; long-limited human disturbance has preserved a relatively pristine landform and vegetation pattern.",
    observation:
      "From the air, the sanctuaries are covered in vast, continuous primary forest interlaced with mountains and valleys, one of the few areas in Thailand preserving a largely intact ecosystem at this scale.",
    distinguish:
      "Thung Yai–Huai Kha Khaeng and Khao Yai are both UNESCO World Heritage forest areas in Thailand, but Thung Yai–Huai Kha Khaeng lies in western Thailand along the Myanmar border, while Khao Yai lies on the edge of the central Khorat Plateau.",
    concept:
      "Home to roughly 77% of Thailand's large mammal populations, Thung Yai–Huai Kha Khaeng is an important sample for studying biodiversity conservation on the Southeast Asian mainland.",
    history:
      "Inscribed on the UNESCO World Heritage List in 1991, it remains one of the least human-disturbed forest areas remaining on the Southeast Asian mainland.",
  },
  "khorat-plateau": {
    seeing:
      "The Khorat Plateau is a vast sandstone tableland in north-eastern Thailand, covering roughly a third of the country's land area and the geographic core of the traditional Isan region.",
    formation:
      "The plateau's bedrock is mainly Mesozoic Khorat Group sandstone; long uplift and erosion have shaped today's comparatively flat surface, slightly higher at the rim than at the centre.",
    observation:
      "From the air, the Khorat Plateau is broad and flat, with extensive rain-fed farmland interspersed with sparse woodland, a sharp contrast to the paddy-field landscape of central Thailand's plain; the mountains along the plateau's rim are faintly visible.",
    distinguish:
      "The Khorat Plateau and Phu Kradueng share the same geological unit, but the Khorat Plateau refers to the vast tableland as a whole, while Phu Kradueng is a single, sharply outlined sandstone mesa on the plateau's eastern side.",
    concept:
      "As one of Thailand's largest landform units, the Khorat Plateau is an important sample for studying the relationship between inland tableland topography and rain-fed agriculture on the Southeast Asian mainland.",
    // history sources: 高原面积约 155,000 km²、约占泰国国土三成，正文「三分之一」成立；西缘的两条天然分界是碧差汶山脉与丹辇拉扎山脉（Dong Phaya Yen，即本库 khao-yai 条目「丹辇拉扎—考艾森林群」所属那条）——原文把 Phetchabun 的两种转写（碧差汶/佩差邦、Phetchabun/Petchabun）并列成了两条山脉。核实 2026-09-11
    history:
      "The Phetchabun and Dong Phaya Yen ranges along the plateau's rim have long formed a natural boundary between central and north-eastern Thailand; the formation of the Isan cultural region is closely tied to this geographic unit.",
  },
  "phu-kradueng": {
    // 全六段 sources: 山顶台地约 60 km²、平均海拔约 1200–1250 m；1962-11-23 设立，为泰国第二座国家公园。核实 2026-09-11，未改动
    seeing:
      "Phu Kradueng is a heart-shaped sandstone mesa in Loei Province, north-eastern Thailand, with a summit plateau covering about 60 km² at an average elevation of roughly 1,250 m.",
    formation:
      "The massif's bedrock is Jurassic Khorat Group sandstone; long differential weathering has stripped away the softer layers, leaving only the more resistant summit layer standing as a table-shaped plateau ringed by steep cliffs.",
    observation:
      "From the air, Phu Kradueng's outline is heart-shaped, ringed by near-vertical cliffs that contrast sharply with the low valley terrain around it; the summit plateau itself is comparatively flat and open.",
    distinguish:
      "Phu Kradueng and the Khorat Plateau share the same geological unit, but Phu Kradueng is a single, sharply outlined mesa standing on the plateau, while the Khorat Plateau is the vast tableland it rises from.",
    concept:
      "Phu Kradueng's cliff-ringed, table-shaped plateau form is a classic case for studying how differential weathering shapes an isolated mesa within sandstone strata.",
    history:
      "Designated Thailand's second national park in 1962, one of the country's earliest national parks.",
  },
  "similan-islands": {
    // 全六段 sources: 11 座岛屿（1998 年由 9 座扩至 11 座）、离岸约 70 km、陆地约 26 km²、1982 年设立（DNP 官方，1 级）。核实 2026-09-11，未改动
    seeing:
      "The Similan Islands are a granite archipelago of 11 islands in the Andaman Sea, about 70 km offshore, with a land area of roughly 26 km².",
    formation:
      "The islands' bedrock is granite; the huge granite boulders and underwater pinnacles on the seabed are thought to be a remnant landform of a Mesozoic subduction event between the Burma and Sunda Plates.",
    observation:
      "From the air, the Similan Islands' broken, fragmented outlines are scattered across a turquoise sea, with shallow waters between the islands showing finely graded colour bands — among the clearest waters in the Andaman Sea.",
    distinguish:
      "The Similan and Surin Islands are both granite archipelagos in the Andaman Sea, but the Similans comprise 11 islands and cover a larger area, while the Surin Islands comprise 5 islands and lie closer to the Myanmar border.",
    concept:
      "The huge granite boulder landforms on the Similan Islands' seabed are an important sample for studying granite landforms left behind by Mesozoic plate subduction.",
    history:
      "Designated a national park in 1982, the Similan Islands are a well-known diving and snorkelling destination in the Andaman Sea.",
  },
  "surin-islands": {
    // 全六段 sources: 5 座主要岛屿；1981-07-09 设立（泰国第 29 座国家公园）；莫肯人传统聚居于此。核实 2026-09-11，未改动
    seeing:
      "The Surin Islands are a group of 5 granite islands in the Andaman Sea near the Myanmar border, designated a national marine park in 1981.",
    formation:
      "The islands' bedrock is also granite, part of the same geological unit as the Similan Islands; long marine erosion has shaped coral reefs and shallows around the islands.",
    observation:
      "From the air, the waters between the Surin Islands are broad and calm, with coral reefs distributed around the islands — waters traditionally used by the seafaring Moken people for fishing.",
    distinguish:
      "The Surin and Similan Islands are both granite archipelagos in the Andaman Sea, but the Surin Islands lie closer to the Myanmar border and comprise 5 islands, while the Similans comprise 11 islands and cover a larger area.",
    concept:
      "The coral reefs that have developed around the Surin Islands are an important sample for studying coral ecosystems around tropical granite islands.",
    history:
      "One of the traditional settlement areas of Thailand's seafaring Moken people, who have long lived aboard boats and subsisted on marine fishing.",
  },
  "ko-tarutao": {
    // seeing sources: 达鲁涛 1974-04-19 为泰国**第二座**海洋型国家公园；首座是 1966 年的三百峰山（khao-sam-roi-yot，本库该条目写对了，航线解说 dmk-hkt 也写对了）。原文三段都写成「首座」，与本库自己的条目直接互相证伪。核实 2026-09-11
    seeing:
      "Ko Tarutao is a limestone-and-sandstone island off Thailand's southernmost coast, the main island of the country's second national marine park, established in 1974 — the first was Khao Sam Roi Yot, designated in 1966.",
    formation:
      "The island's bedrock combines limestone and sandstone; long dissolution and erosion have shaped several limestone caves and steep cliffs across the island.",
    observation:
      "From the air, Ko Tarutao preserves extensive primary rainforest with a winding, deeply indented coastline — a sharp contrast to the bare granite boulder landforms of the Similan Islands.",
    distinguish:
      "Ko Tarutao and the Similan Islands are both Thai national marine parks, but Ko Tarutao's bedrock combines limestone and sandstone and preserves extensive primary rainforest, while the Similans are defined by granite boulder landforms.",
    concept:
      "As the main island of Thailand's second national marine park, Ko Tarutao is a sample for studying landform evolution on islands with mixed limestone-sandstone bedrock.",
    history:
      "Designated Thailand's second national marine park in 1974, an early landmark in the country's marine protected-area system, after Khao Sam Roi Yot in 1966.",
  },
  "phi-phi-islands": {
    // 全六段 sources: 二叠纪石灰岩基岩；玛雅湾 2018-06 起封闭、延长至 2022 年，此后每年 8–9 月季节性封闭 —— 正文「自2018年起阶段性封闭」准确。核实 2026-09-11，未改动
    seeing:
      "The Phi Phi Islands are a group of Permian limestone islands in the Andaman Sea; a narrow sandbar connects Phi Phi Don and Phi Phi Leh.",
    formation:
      "The islands' bedrock is Permian limestone; long marine erosion and dissolution have carved steep limestone cliffs, with the connecting sandbar producing the islands' distinctive bow-tie outline.",
    observation:
      "From the air, the narrow sandbar between Phi Phi Don and Phi Phi Leh is clearly visible; Maya Bay is enclosed on three sides by steep limestone cliffs, forming an almost fully closed cove.",
    distinguish:
      "The Phi Phi Islands and Ao Phang Nga are both limestone karst landforms along the Andaman coast, but the Phi Phi Islands are a standalone island group offshore, while Ao Phang Nga is a drowned karst bay along the coast.",
    concept:
      "The bow-tie sandbar landform connecting the Phi Phi Islands is a sample for studying how marine erosion and sediment deposition together shape a connecting sandbar between islands.",
    history:
      "Maya Bay saw a sharp rise in visitors after becoming a famous film location; since 2018 the Thai government has periodically closed the bay to allow ecological recovery, a representative case of balancing tropical island tourism with ecological protection.",
  },
  "ao-phang-nga": {
    // 全六段 sources: 约 400 km² 淹没型喀斯特海湾；二叠纪拉查布里（Ratburi）石灰岩；1981 年设立国家公园；宾坎岩因 1974 年《金枪人》取景而知名。核实 2026-09-11，未改动
    seeing:
      "Ao Phang Nga is a roughly 400 km² drowned karst bay in the Andaman Sea off southern Thailand; Khao Phing Kan (\"James Bond Island\") is one of its most iconic landmarks.",
    formation:
      "The bay's bedrock is Permian Ratburi limestone; when sea level was lower during the last glacial period, the area formed a landscape of terrestrial karst towers, which were later drowned as sea level rose, leaving only their tops emergent as today's steep, isolated rock islands.",
    observation:
      "From the air, dozens of steep, isolated limestone towers are scattered across Ao Phang Nga, with dense mangroves growing along the bay's intertidal zone — a classic drowned karst bay landscape.",
    distinguish:
      "Ao Phang Nga and the Krabi Karst Coast are both limestone karst landforms along the Andaman coast, but Ao Phang Nga is a comparatively enclosed drowned bay, while the Krabi Karst Coast is a stretch of steep cliffs along an open shoreline.",
    concept:
      "The drowned karst landform of Ao Phang Nga is a classic case for studying how sea-level change transforms a terrestrial karst-tower landscape into an offshore island group.",
    history:
      "Designated a national park in 1981, Khao Phing Kan became widely known after featuring in a 1974 James Bond film and has since become the bay's most recognisable landmark.",
  },
  "krabi-karst-coast": {
    // 全六段 sources: 与攀牙湾同属二叠纪拉查布里群石灰岩；莱利岬角为国际知名攀岩与深水抱石地。核实 2026-09-11，未改动
    seeing:
      "The Krabi Karst Coast is a stretch of Andaman coastline defined by steep limestone tower cliffs, with Railay Peninsula among its most representative sites.",
    formation:
      "The coastal bedrock is also Permian limestone; long marine erosion has carved deep notches at the base of the cliffs, and in some areas erosion has produced isolated sea stacks and caves.",
    observation:
      "From the air, Railay Peninsula is ringed on three sides by vertical limestone cliffs, reachable only by sea; climbers on the cliff faces make a striking visual contrast against the turquoise water below.",
    distinguish:
      "The Krabi Karst Coast and Ao Phang Nga are both limestone karst landforms along the Andaman coast, but the Krabi Karst Coast is a stretch of steep cliffs along an open shoreline, while Ao Phang Nga is a comparatively enclosed drowned bay island group.",
    concept:
      "The steep cliff landforms of the Krabi Karst Coast are a sample for studying how long-term marine erosion shapes cliff scenery in tropical coastal limestone.",
    history:
      "Railay Peninsula's enclosed terrain has kept it largely undeveloped by land access, preserving a comparatively pristine coastal landscape, and it is now a world-renowned destination for rock climbing and deep-water soloing.",
  },
  "khao-sam-roi-yot": {
    seeing:
      "Khao Sam Roi Yot (\"the mountain with three hundred peaks\") is a range of some 300 limestone peaks along the Gulf of Thailand coast, its highest point reaching 605 m.",
    formation:
      "The massif's bedrock is limestone; long dissolution has carved numerous caves within it, of which Phraya Nakhon Cave is the largest and most notable.",
    observation:
      "From the air, three hundred low limestone peaks are scattered along the Gulf of Thailand coast, while the freshwater marsh of Thung Sam Roi Yot at the range's north-western corner presents a strikingly different open wetland landscape.",
    distinguish:
      "Khao Sam Roi Yot and Ao Phang Nga are both limestone karst landforms on the Thai coast, but Khao Sam Roi Yot is a cluster of low peaks on land, while Ao Phang Nga is a drowned karst tower island group.",
    concept:
      "The combination of karst mountains and freshwater marsh at Khao Sam Roi Yot is a sample for studying the symbiotic relationship between karst mountains and coastal wetlands.",
    // history sources: 最高峰 605 m；**1966 年设为泰国首座海洋型国家公园 —— 这一条是对的**（同批 ko-tarutao 误称自己是首座，已改）；帕耶那空岩洞皇家凉亭因拉玛五世 1890 年到访而建、1896 年建成（19 世纪只此一次王室到访，英文原写复数 kings 已改）。核实 2026-09-11
    history:
      "Designated Thailand's first marine-type national park in 1966; the royal pavilion inside Phraya Nakhon Cave is well known for having been built after a visit by King Chulalongkorn (Rama V) in 1890; later monarchs visited too.",
  },
  "thung-salaeng-luang": {
    // 全六段 sources: 海拔 300–1028 m，位于彭世洛府与碧差汶府交界。核实 2026-09-11，未改动
    seeing:
      "Thung Salaeng Luang is a highland meadow at 300–1,028 m elevation on the border of Phitsanulok and Phetchabun provinces in north-central Thailand, known as \"Thailand's savanna.\"",
    formation:
      "The grassland's bedrock is mainly limestone and slate; a long seasonal alternation between wet and dry conditions, combined with frequent natural fires, has together suppressed tree growth, producing a landscape of open grassland interspersed with sparse pine forest.",
    observation:
      "From the air, Thung Salaeng Luang presents an open, golden grassland landscape strikingly different from the surrounding evergreen forest, dotted with scattered pines — a rare non-forested highland landform in Thailand.",
    distinguish:
      "Thung Salaeng Luang and the Khorat Plateau are both inland highland landforms in Thailand, but Thung Salaeng Luang is defined by open meadow and sparse pine forest, while the Khorat Plateau is a flat tableland covered mainly in rain-fed farmland.",
    concept:
      "As a rare large-scale highland meadow in Thailand, Thung Salaeng Luang is a sample for studying how seasonal wet-dry alternation and fire together produce non-forest vegetation cover in a tropical monsoon climate.",
    history:
      "Nicknamed \"Thailand's savanna\" for its resemblance to African savanna landscapes, it is an important wildlife habitat within the country.",
  },
  "cheow-larn-lake": {
    seeing:
      "Cheow Larn Lake is an artificial reservoir created in 1987 by damming the Klong Saeng River at Ratchaprapha Dam, its waters lying along the southern edge of Khao Sok National Park.",
    formation:
      "After the reservoir filled, most of the base of the terrestrial limestone karst towers that once stood exposed was submerged, leaving only their tops above the water — producing today's landscape of hundreds of limestone towers scattered across the lake.",
    observation:
      "From the air, Cheow Larn Lake's water is a deep green, with hundreds of limestone towers rising vertically from its surface — a landform comparison often drawn across the region with the karst towers of Angkor in Cambodia or the Li River in Guilin, China.",
    distinguish:
      "Cheow Larn Lake and Bueng Boraphet are both important lakes in Thailand, but Cheow Larn is a dammed reservoir studded with karst towers, while Bueng Boraphet is a natural freshwater marsh turned into open water by a dam.",
    concept:
      "The drowned karst-tower landscape of Cheow Larn Lake is a sample for studying how a water-impoundment project transforms a terrestrial karst landform into an island-studded reservoir landscape.",
    // history sources: 大坝 1982 年动工、1987 年竣工蓄水，正文把「建成/蓄水」统一写作 1987 属可接受简化（**没有把动工年当成建成年**）；「叻差巴帕」由国王普密蓬 1987-09-30 竣工典礼上赐名、意为「王国之光」，与王后诗丽吉无关。核实 2026-09-11
    history:
      "Ratchaprapha Dam, completed in 1987, was named by Thailand's late King Bhumibol Adulyadej at its opening ceremony — the name means Light of the Kingdom — and serves both irrigation and hydropower functions.",
  },
  "bueng-boraphet": {
    // 全六段 sources: 面积约 224 km²，泰国中部最大淡水沼泽/湖；1926–1930 年筑坝、1930 年完工形成今日开阔水面。核实 2026-09-11，未改动
    seeing:
      "Bueng Boraphet is a natural freshwater marsh lake near the confluence of the Nan and Ping rivers in central Thailand, covering about 224 km² and the largest freshwater wetland in central Thailand.",
    formation:
      "The lake was originally a natural low-lying marsh; a dam built in 1930 impounded water to form today's open water surface, while the lakebed still preserves extensive natural marsh and aquatic plant communities.",
    observation:
      "From the air, Bueng Boraphet's water is broad and calm, with expanses of pink lotus covering the surface in certain seasons, interwoven with the surrounding farmland and villages into a classic central-Thai wetland landscape.",
    distinguish:
      "Bueng Boraphet and Cheow Larn Lake are both lakes in Thailand shaped by human intervention, but Bueng Boraphet is a natural marsh turned into open water by a dam, known for its migratory bird habitat, while Cheow Larn is a dammed reservoir known for its drowned karst-tower landscape.",
    concept:
      "As central Thailand's largest freshwater wetland, Bueng Boraphet is a sample for studying the relationship between a natural marsh ecosystem at a river confluence and migratory bird patterns.",
    history:
      "After being dammed in 1930, it gradually developed into an important fishery and wintering site for migratory birds in central Thailand, now managed by the wildlife conservation authorities.",
  },
  "chao-phraya-river": {
    // 全六段 sources: 宾河与难河在那空沙旺（Pak Nam Pho）汇流后始称干流，全长约 372 km。核实 2026-09-11，未改动
    seeing:
      "The Chao Phraya River begins where the Ping and Nan rivers meet in Nakhon Sawan Province and runs about 372 km, the main river system of the central Thai plain.",
    formation:
      "The upstream Ping and Nan rivers each rise in the mountains of northern Thailand; sediment they carry has long deposited across the central plain, shaping the broad, flat alluvial plain of the lower Chao Phraya.",
    observation:
      "From the air, the Ping and Nan rivers meet in a Y-shaped confluence near Nakhon Sawan, the water broad at the junction; the main Chao Phraya then winds south past Bangkok to the Gulf of Thailand.",
    distinguish:
      "The Chao Phraya River and the Thai stretch of the Mekong are both important rivers in Thailand, but the Chao Phraya runs entirely through inland central Thailand to the Gulf of Thailand, while the Mekong's Thai stretch forms the Thailand–Laos border along the north-east.",
    concept:
      "As the main artery of the central Thai plain, the Chao Phraya is a classic case for studying how river deposition shapes an inland plain on the Southeast Asian mainland.",
    history:
      "The Chao Phraya's banks have been the political and economic heart of Thailand since the Ayutthaya period, and the capital, Bangkok, remains built around this river today.",
  },
  "mekong-river-th": {
    // 全六段 sources: ⚠️ 泰老界河段长度「约976公里」**没有一个来源支持**，各口径 850/920/955/1520 km 不等，未找到 MRC 或泰国官方的单一权威数字 —— 见 issue，正文暂不动。核实 2026-09-11
    // seeing sources: 界河段长度各来源在 966–976 km 之间，改为量级表述。核实 2026-09-12
    seeing:
      "The Thai stretch of the Mekong forms nearly 1,000 km of the Thailand–Laos border along Thailand's north-east; the section near Chiang Khan is known for its dense scattering of rapids.",
    formation:
      "The Mekong rises on the Qinghai-Tibet Plateau in China and flows through Myanmar and Laos before entering Thailand; long erosion along Thailand's north-eastern border has shaped a broad valley and a riverbed landform that shifts markedly with the seasons.",
    observation:
      "From the air, the Thai stretch of the Mekong is broad, with farmland and villages densely lined along its banks; near Chiang Khan, scattered rocky rapids in the riverbed become clearly visible when water levels drop in the dry season.",
    distinguish:
      "The Thai stretch of the Mekong and the Chao Phraya River are both important rivers in Thailand, but the Mekong's Thai stretch forms the Thailand–Laos border along the north-east, while the Chao Phraya runs entirely through inland central Thailand.",
    concept:
      "As a river crossing six countries, the Mekong's Thai stretch is an important case for studying how a transboundary river forms a national border and shapes the landforms and settlements along it.",
    history:
      "Towns along the Mekong such as Chiang Khan have long served as important centres of trade and cultural exchange between north-eastern Thailand and Laos.",
  },
  "mun-river": {
    // seeing sources: 源出讪甘烹山脉（Sankamphaeng Range，考艾国家公园一带，高原西南）—— 佩差邦/碧差汶山脉在高原西北缘，是另一条；在乌汶叻差他尼 Khong Chiam 汇入湄公河、接纳希河后水量显著增大。核实 2026-09-11
    seeing:
      "The Mun River rises in the Sankamphaeng Range in the south-western Khorat Plateau and flows east across the plateau's southern portion, the main river of Thailand's Isan region.",
    formation:
      "The Mun's upper course rises in the hills along the plateau's rim and flows east across the open tableland, gaining significant volume after receiving the Chi River as a tributary, before joining the Mekong near Ubon Ratchathani.",
    observation:
      "From the air, the Mun River winds through the open rain-fed farmland of the southern Khorat Plateau, the water opening out broadly where it meets the Mekong near Ubon Ratchathani.",
    distinguish:
      "The Mun River and the Thai stretch of the Mekong both flow through north-eastern Thailand, but the Mun runs entirely through the inland Khorat Plateau before joining the Mekong, while the Mekong's Thai stretch forms the national border along the north-east.",
    concept:
      "As the Khorat Plateau's main drainage river, the Mun is a classic case for studying how an inland tableland's river system feeds into a transboundary river.",
    history:
      "The Mun River basin has long been the core area of population and agricultural activity in Thailand's Isan region, with cities such as Ubon Ratchathani along its banks continuing to develop around the river to this day.",
  },
  "kwai-river-valley": {
    // 全六段 sources: 泰缅铁路木桥 1943-02 建成、钢混桥同年 4 月建成，正文「1943年建成」落在范围内。⚠️ 红线自查：正文只写工程与地形事实（谷地走向、桥梁年份），**未涉伤亡数字或战争责任评价**，按判据保留。核实 2026-09-11，未改动
    seeing:
      "The Kwai River Valley is cut by the Khwae Noi River through the southern Thanon Thongchai Range in western Thailand; the Bridge on the River Kwai is the widely known witness to this history.",
    formation:
      "The valley was shaped by long erosion of the mountain bedrock by the Khwae Noi River, with stepped river terraces developed along both banks; the valley floor is comparatively gentle, making it well suited to transport routes.",
    observation:
      "From the air, mountains flank both sides of the Kwai River Valley, with the river winding along its floor; the Bridge on the River Kwai spans the water, and a railway winds along the valley wall — a classic mountain-valley transport corridor landform.",
    distinguish:
      "The Kwai River Valley and Erawan Waterfall both lie within the same mountain region of western Thailand, but the Kwai River Valley is a complete mountain-valley transport corridor, while Erawan Waterfall is a stepped waterfall landform on an upstream tributary within the valley.",
    concept:
      "As a natural corridor linking the central Thai plain with the Myanmar border, the Kwai River Valley is a sample for studying the relationship between mountain-valley landforms and transport-route siting.",
    history:
      "During World War II, Japanese forces used forced prisoner-of-war and civilian labour to build the Thailand–Burma Railway through this valley; the Bridge on the River Kwai, completed in 1943, is the widely known witness to this history, recorded in Thai national archives and multiple war memorial sites.",
  },
  "erawan-waterfall": {
    // 全六段 sources: 1975-06-19 设立（泰国第 12 座国家公园）；瀑布顶层因形似三头象神伊拉旺（Erawan/Airavata）得名。核实 2026-09-11，未改动
    seeing:
      "Erawan Waterfall is a seven-tiered cascade formed as a tributary of the Khwae Noi River drops down a series of limestone terraces, with natural emerald-green travertine pools formed between the tiers.",
    formation:
      "The waterfall follows a sequence of limestone terraces; dissolved calcium carbonate in the stream water continuously precipitates along the terrace edges to form travertine dams, impounding the stream tier by tier into stacked pools and cascades.",
    observation:
      "From the air, the seven tiers cascade down the hillside in sequence, each pool showing the distinctive emerald-green colour produced by mineral deposition, set against the dense tropical rainforest around it.",
    distinguish:
      "Erawan Waterfall and Sam Phan Bok are both representative landforms in Thailand shaped by flowing water, but Erawan Waterfall is a stepped cascade formed by travertine deposition, while Sam Phan Bok is a field of potholes carved by the Mekong's seasonal water-level changes eroding a sandstone riverbed.",
    concept:
      "The formation of Erawan Waterfall's travertine stepped pools is a classic case for studying how calcium carbonate deposition in tropical limestone-region streams shapes a stepped waterfall landform.",
    history:
      "Designated a national park in 1975; \"Erawan\" is named for a rock formation near the waterfall's top resembling Erawan, the three-headed elephant of Hindu mythology.",
  },
  "sam-phan-bok": {
    // 全六段 sources: 湄公河河床上规模最大的砂岩壶穴群；可见期为旱季（各来源作 12 月至次年 4–5 月，正文取 12–4 月）。核实 2026-09-11，未改动
    seeing:
      "Sam Phan Bok (\"three thousand shallow lakes\" or potholes) is the largest sandstone erosional remnant landform in the Mekong's main riverbed, visible only during the dry season from December to April.",
    formation:
      "The riverbed's bedrock is sandstone; the Mekong's seasonal water-level changes repeatedly submerge and expose the riverbed, and sand and gravel carried by the current swirl and abrade the rock in depressions, carving numerous circular potholes and groove-like landforms.",
    observation:
      "From the air, once dry-season water levels drop, the riverbed's dense circular potholes and winding grooves emerge above the water, the varied sandstone shapes showing shades of orange-red in the sunlight.",
    distinguish:
      "Sam Phan Bok and Erawan Waterfall are both representative landforms in Thailand shaped by flowing water, but Sam Phan Bok is a field of potholes carved by the Mekong's seasonal water-level changes eroding a sandstone riverbed, while Erawan Waterfall is a stepped cascade formed by deposition along limestone terraces.",
    concept:
      "The formation of Sam Phan Bok's potholes is an important case for studying how a great river's seasonal water-level changes long abrade a sandstone riverbed into pothole landforms.",
    history:
      "Local communities have long linked Sam Phan Bok's seasonal emergence to the traditional timing of Mekong fishing activities, reflecting generations of accumulated experience observing the river's hydrological changes.",
  },
  "chao-phraya-delta": {
    // 全六段 sources: 曼谷 1782 年由拉玛一世建都；平均海拔约 1.5 m、部分城区仅 0.5–1.5 m，正文「不足2米」准确；地面沉降属实。核实 2026-09-11，未改动
    seeing:
      "The Chao Phraya Delta is the low-lying alluvial delta at the Chao Phraya's mouth; Bangkok, Thailand's capital, is built on the delta, with parts of the city under 2 m in elevation.",
    formation:
      "The delta formed from sediment long carried by the Chao Phraya and deposited near its mouth; the terrain is extremely flat and low-lying, historically a coastal lowland of tidal marsh interlaced with mangroves.",
    observation:
      "From the air, the Chao Phraya Delta is broad and flat, with Bangkok's dense urban fabric interwoven with remaining rice paddies and a network of canals, the river winding through the city.",
    distinguish:
      "The Chao Phraya Delta and the Chao Phraya River are different stretches of the same river system: the Chao Phraya River specifically refers to the main channel from Nakhon Sawan to the river mouth, while the Chao Phraya Delta refers to the low-plain landform built by sediment deposition near that mouth.",
    concept:
      "Facing the combined pressures of land subsidence and sea-level rise, the Chao Phraya Delta is an important case for studying how a tropical river-delta city confronts the challenges of climate change and geological subsidence.",
    history:
      "Since becoming Thailand's capital in 1782, Bangkok has developed around the Chao Phraya Delta's waterway network; canals were once the city's primary mode of transport, and some remain in use today.",
  },
};
