import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Asia · Japan ============
  "mount-fuji": {
    // seeing / formation sources: 剑ヶ峰三角点 3776 m 为国土地理院现行官方值；1707 年宝永喷发为史载最近一次。
    //   ✅ **专项复核「有没有把三层压成一层」**：富士山是小御岳（约 70 万—20 万年前）／古富士（约 10 万—8 万年前起）／
    //   新富士（约 1.1 万年前起）三层叠置的成层火山，正文写「盖在几座更老的火山之上」，**没有压扁**。1 级 + 3 级交叉。2026-09-10 核，verdict: ok。
    seeing:
      "Mount Fuji is the highest mountain in Japan, 3,776 m, in the centre of Honshu about 100 km from Tokyo. It is a near-perfect cone-shaped active volcano, standing alone above the lowlands and lakes around it and visible from far away. It has a high place in Japanese culture, religion and art, and in 2013 was inscribed as a World Heritage cultural site as an \"object of worship and wellspring of art\".",
    formation:
      "Mount Fuji is a stratovolcano: over roughly the past 100,000 years, successive layers of basalt-to-andesite lava and pyroclastic material have piled up into today's cone, which actually sits on top of several older volcanoes. Its most recent eruption was the Hōei eruption of 1707, which blasted a crater still visible on the south-eastern flank and dropped ash as far as Edo (now Tokyo). The Japan Meteorological Agency lists it as an active volcano under continuous monitoring.",
    observation:
      "From the air Mount Fuji is an isolated, symmetrical cone rising from low ground, with a crater about 700 m across at the summit. For the colder half of the year the upper mountain is snow-covered; below the snowline are dark forest and the brown scar of the 1707 crater. Five lakes (the Fuji Five Lakes) are strung along the northern foot, formed where lava flows dammed river valleys. The mountain sends no ridge in any direction — exactly the difference between a single volcano and a mountain range.",
    distinguish:
      "Mount Fuji, like Kilimanjaro and Mayon, is an isolated, symmetrical stratovolcano cone built by repeated eruptions, and so belongs to no mountain range. It is unlike the Japanese Alps: the Alps are a continuous range raised by crustal compression and carved by glaciers, with many peaks and ridges; Mount Fuji is one mountain and one crater.",
    concept:
      "Mount Fuji shows that the \"highest mountain\" need not be in a range — a well-placed volcano with enough eruptions can stand higher than the squeezed-up ranges around it. A common misconception is that it is extinct: it has simply not erupted for a long time and is still an active volcano in a quiet interval. Its symmetrical cone is well preserved because its main building phase is relatively young and not yet destroyed by erosion.",
    history:
      "Mount Fuji has long been an object of mountain worship, with a shrine at the summit and, historically, large-scale pilgrimage climbs (the \"Fuji-kō\"). It was painted again and again in ukiyo-e prints such as Hokusai's \"Thirty-six Views of Mount Fuji\" and became one of Japan's visual symbols. Today a summer climbing season of about two months draws many climbers, and the foot of the mountain is an important tourism and resort area.",
  },

  "japanese-alps": {
    // seeing sources: 北岳 3,193 m，日本第二高峰（次于富士山 3,776 m），属实。
    //   飞驒山脉（剑岳、立山一带）确有小规模现代冰川，日本雪冰学会 2012 年起陆续确认 ——
    //   条目把冰川限定在飞驒山脉、没有和北岳所在的赤石山脉混为一谈，这一点是对的。
    //   **原文一句话里叠了三个查无口径出处的最高级**（最陡、冰川地貌保存最好、登山运动最发达），
    //   已改成可核实的事实陈述。
    seeing:
      "The Japanese Alps is the collective name for the Hida, Kiso and Akaishi ranges — three roughly parallel ranges in central Honshu that hold most of Japan's peaks over 3,000 m. The highest, Mount Kita, is 3,193 m, the second-highest mountain in Japan. Its slopes are steep and its ridges sharp; it is one of the areas of Japan where glacial landforms are best preserved, and one where mountaineering has long been well established.",
    formation:
      "The uplift of the Japanese Alps is quite young — mainly in the past one to two million years, the result of the Pacific and Philippine Sea plates pressing Honshu from the east and south, strongly shortening and raising the crust; it is still rising fast and is seismically active. During the ice ages, valley glaciers formed on the higher ground, carving the summits into cirques and arêtes; today a few very small modern glaciers survive in shaded spots in the Hida range.",
    observation:
      "From the air the Japanese Alps are a belt of high mountains cut by deep valleys and lined with continuous ridges, standing well above the surrounding hills and plains. The crest line is around 3,000 m and carries deep snow for the colder half of the year. Cirques (semicircular hollows below the summits) and arêtes can be picked out. Kamikōchi in the Northern Alps is a broad valley enclosed by high peaks, with the Azusa River on its floor.",
    distinguish:
      "The Japanese Alps and Mount Fuji are often mentioned together but are entirely different: the Alps are a continuous fold-and-fault range raised by plate compression and carved by glaciers, with dozens of high peaks; Mount Fuji is a single volcanic cone. Versus the European Alps: the name was borrowed by foreigners in the 19th century, and both are rugged with glacial landforms, but the European Alps are far larger with far more modern glaciers.",
    concept:
      "The Japanese Alps show that even at a modest latitude, if mountains are high enough, glaciers form in the ice ages and leave glacial landforms. A common misconception is that Japan has no glaciers: the Northern Alps do have a few confirmed modern glaciers, just very small ones. The \"Alps\" name is an analogy and does not imply a geological connection to the European Alps.",
    history:
      "This mountain country was thinly peopled and regarded as a realm of the gods. In the late 19th century the Englishman William Gowland and the missionary Walter Weston brought European-style mountaineering here and spread the name \"Japanese Alps\"; Weston is called the \"father of modern mountaineering in Japan\". Today the Chūbu-Sangaku National Park covers most of the area, and the Kamikōchi and Tateyama–Kurobe routes are important mountain-tourism destinations.",
  },

  "mount-aso": {
    // seeing / formation sources: 阿苏地质公园官方自述为「世界でも有数の規模」，正文写「世界上规模最大的破火山口**之一**」，
    //   ✅ **没有落进「世界最大的破火山口」这个流传很广但不准确的说法**——这一条是本轮专门去核的。
    //   约 27 万—9 万年前四次巨型喷发；Aso-4（约 9 万年前）火山灰覆盖九州并波及本州（产综研）。
    //   破火山口（先塌陷）与中央火口丘群（后在其中生长、中岳至今活跃）的层次关系未被压成一层。1 级。2026-09-10 核，verdict: ok。
    seeing:
      "Mount Aso is in central Kyushu — one of the largest calderas in the world. A ring of surrounding mountains (the outer rim) encloses a basin about 25 km north–south and 18 km east–west, home to some 50,000 people, planted with rice, and crossed by a railway. In the middle of the basin is a group of still-active volcanoes (Nakadake and others) that steam constantly and erupt on a small scale from time to time.",
    formation:
      "This huge caldera was made by four giant eruptions between about 270,000 and 90,000 years ago: each poured out a great volume of magma, and the ground above the emptied magma chamber collapsed. The largest of the four (about 90,000 years ago) covered all of Kyushu in ash and blew it as far as Honshu and even the Korean Peninsula. After the collapse, a new group of central volcanoes grew inside the caldera, and Nakadake's crater is still active.",
    observation:
      "From the air Mount Aso is a complete ring of mountains, enclosing a large flat lowland covered in fields and roads (the caldera floor), with a group of black volcanic cones rising from its centre, one of them steaming white. The outer rim is cut on its outer side by radiating valleys. There is a gap in the west of the rim, through which the Shira River flows out.",
    distinguish:
      "Mount Aso, like Yellowstone in the U.S. and Toba in Indonesia, is a caldera formed by collapse after a giant eruption, far larger than an ordinary volcanic crater. It is the opposite of a stratovolcano like Mount Fuji: Fuji is \"built up\", Aso \"collapsed into a pit\". To tell whether a volcano is a caldera, see whether it is a ring-shaped depression much larger than the volcano itself.",
    concept:
      "Mount Aso shows the difference between a \"caldera\" and a \"crater\" as directly as anywhere: a crater is the vent of an eruption, usually a few hundred metres across; a caldera is a depression formed when the ground collapses over an emptied magma chamber, and can be tens of kilometres across, with room for people and farms inside. A common misconception is to treat the whole of Mount Aso as one big crater — that is the collapse basin; the actual eruptive vents are on the central volcanoes.",
    history:
      "The Aso area has had volcano worship since ancient times, and Aso Shrine is an important local shrine. The flat land of the caldera floor was cleared for farming early, and the grasslands of the outer rim have a thousand-year tradition of grazing, maintained by regular burning. Today Aso is the core of Aso-Kujū National Park and a UNESCO Global Geopark, and Nakadake's crater can be visited up close during quiet periods.",
  },

  sakurajima: {
    // formation / history sources: 姶良破火山口约 2.9 万年前巨型喷发塌陷形成，樱岛此后约 3000 年在其南缘生长；
    //   1914 年大正喷发的熔岩流填平海峡、与大隅半岛陆连（鹿儿岛市官网，1 级）。
    //   ⚠️ C8 状态类：截至 2026-09 气象厅仍维持噴火警戒レベル 3、持续活动。正文写「几乎全年都在小规模喷发」——
    //   **这个写法不含时点、描述的是机制而非某一年的状态，不会过期**，判定不改。2026-09-10 核，verdict: ok。
    seeing:
      "Sakurajima is in Kagoshima Bay at the southern tip of Kyushu, directly across from the city of Kagoshima — one of the most active volcanoes in Japan. It erupts on a small scale nearly year-round, and ash often falls on the city, where clearing and coping with ash is routine. It was once an island; a large eruption in 1914 poured out lava that joined it to the Ōsumi Peninsula to the east, so it is no longer truly an \"island\".",
    formation:
      "Sakurajima is a stratovolcano that has grown on the southern rim of the Aira caldera. The Aira caldera itself formed by collapse after a giant eruption about 29,000 years ago, and the northern half of Kagoshima Bay today is that caldera. Magma activity then concentrated on the caldera's southern rim and built Sakurajima. It has two main peaks, Kitadake and Minamidake; the currently active one is Minamidake and its crater.",
    observation:
      "From the air Sakurajima is a black volcano reaching into a long narrow bay, with one or two summit craters steaming, and dark tongue-shaped scars of nearly bare rock down its slopes from the 1914 and later lava flows. The 1914 lava completely filled the strait, a few hundred metres wide, between the island and the peninsula, and that stretch is now land. On the far side of the bay is the built-up area of Kagoshima, only a few kilometres away.",
    distinguish:
      "Sakurajima resembles Stromboli in Italy — an active volcano that erupts frequently on a small scale, so eruptions can be watched almost on schedule. It differs from Mount Fuji in its state of activity: Fuji has not erupted for over three hundred years, while Sakurajima erupts almost daily. Sitting on the rim of the Aira caldera, it is also like the central volcanoes of Aso — a new volcano growing on or in a large caldera after it collapsed.",
    concept:
      "Sakurajima shows that an active volcano and a city can coexist for the long term: a volcano erupting constantly right next to a city of several hundred thousand people is managed with dense monitoring, warnings, and everyday preparation (designated shelters, ash helmets for children). A common misconception is that \"active volcano\" means constant disaster — most of the time it is just steady low-level activity, and what has to be guarded against is the occasional large eruption.",
    history:
      "Kagoshima (formerly Satsuma), where Sakurajima sits, was historically the centre of the Satsuma domain. The 1914 eruption (the \"Taishō eruption\") was the largest volcanic eruption in Japan in the 20th century, killing dozens, forcing the whole island to evacuate, and leaving relics such as the \"Kurokami buried torii\", a shrine gate buried in ash to its top. Today Sakurajima is a symbol and main attraction of Kagoshima, and residents live normally with the volcano's routine activity.",
  },

  "mount-unzen": {
    // seeing / history sources: 平成新山 1483 m、长崎县最高点；1991-06-03 火砕流致 43 人死亡／行方不明；
    //   1792 年眉山崩落引发海啸致约 1.5 万人死亡，为日本火山灾害史上死亡最多的一次（内阁府防灾，1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "Mount Unzen is a group of active volcanoes on the Shimabara Peninsula in Kyushu. From 1990 to 1995 it went through a sustained eruption: the vent extruded viscous lava that piled up into a new lava dome, named \"Heisei-shinzan\", now the highest point in Nagasaki Prefecture (1,483 m). The eruption repeatedly produced pyroclastic flows (hot gas carrying debris rushing downslope at high speed); one in 1991 killed 43 people, including several volcanologists and journalists who were observing.",
    formation:
      "Mount Unzen sits in a graben (the Shimabara graben) that is being pulled apart and dropping, and magma rises along the graben's faults. Its magma is highly viscous and does not release its gas easily, so it erupts by slowly \"squeezing out\" lava into a dome rather than by violent jetting. When the dome grows too steep and tall, its edges collapse, and the hot fragments and gas mix into a pyroclastic flow that rushes down the valleys.",
    observation:
      "From the air Mount Unzen is a group of forested mountains in the middle of the Shimabara Peninsula, the most conspicuous being Heisei-shinzan — a grey, jagged, nearly bare new rock mass still giving off a little steam. From Heisei-shinzan a clear channel runs east (toward Shimabara city and the Ariake Sea), swept by the 1991 pyroclastic flows, filled with pyroclastic debris with vegetation still recovering. The peninsula has many hot springs.",
    distinguish:
      "Mount Unzen, like Mont Pelée in the Caribbean and Mount St. Helens in the U.S., is a volcano known for pyroclastic flows — in common, its magma is viscous, tends to build a dome, and dome collapse produces deadly high-speed hot flows. It differs from Sakurajima: Sakurajima has frequent small explosive eruptions (throwing ash and rock), while Unzen has intermittent \"dome-building plus pyroclastic flows\".",
    concept:
      "Mount Unzen (especially the 1991 event) is a key case for understanding the danger of \"pyroclastic flows\": this hot flow moves along the ground at high speed and cannot be outrun, one of the deadliest volcanic phenomena, and it often strikes suddenly during a seemingly quiet \"lava-squeezing\" phase. A common misconception is that standing upstream of a lava flow, or to the side, is safe — a pyroclastic flow can suddenly change direction and top topographic obstacles.",
    history:
      "Unzen has been known for its hot springs since ancient times, and Unzen Onsen was one of the earlier hot-spring resorts developed in Japan; in 1934 the area became one of Japan's first national parks. In 1792 volcanic activity at Unzen triggered a huge landslide of Mount Mayuyama, whose debris rushed into the Ariake Sea and caused a tsunami, killing about 15,000 people — the deadliest volcanic disaster in Japanese history. After the 1990s eruption a dedicated disaster memorial hall and monitoring system were established.",
  },

  "hakone-caldera": {
    // 全六段 sources: 多重破火山口 + 中央火口丘 + 芦之湖（约 3000 年前神山崩塌堵河）成因层次清楚，未压成一层；
    //   2015 年大涌谷活动增强短暂关闭、后确认未达喷发级别——正文无「目前……」式的时点断言，不会过期。2 级。2026-09-10 核，verdict: ok。
    seeing:
      "Hakone is east of Mount Fuji, about 80 km from Tokyo — a multiple-caldera volcano. A ring of outer mountains encloses a central cone and a caldera lake, Lake Ashi. Geothermal activity is still lively, with sulphurous steam venting from the slopes around Ōwakudani. Being close to the capital, and having hot springs, mountains and a lake, Hakone is one of the best-known resort areas in Japan.",
    formation:
      "Volcanic activity at Hakone goes back a few hundred thousand years. It has been through several eruptions and collapses, forming two nested calderas, a larger and a smaller. About 3,000 years ago an explosion caused the central Mount Kamiyama to collapse, and the debris dammed the river draining the caldera, ponding up Lake Ashi. Today's geothermal activity and steam venting are residual magmatic heat warming groundwater.",
    observation:
      "From the air Hakone is a ring of undulating mountains, enclosing forested hills and a central cone, with the long narrow Lake Ashi on the cone's south-west side. On the north slope of Mount Kamiyama is a grey-white, plant-free slope giving off white steam — Ōwakudani. There is a gap in the west of the caldera rim, from which the Haya River flows out east into Sagami Bay.",
    distinguish:
      "Hakone, Mount Fuji to its west, and the Izu Islands to its south-east are all on the same volcanic belt, but Fuji is a single stratovolcano (built up) and Hakone is a caldera volcano (collapse plus a central cone). Versus Aso: both are calderas, but Aso's is far larger, with tens of thousands of people living on its floor; Hakone's is smaller and centred on a lake and hot springs.",
    concept:
      "Hakone shows that a caldera need not be empty wasteland — a moderately sized caldera with stable geothermal activity can be heavily developed because of its hot springs, flat land and scenery. A common misconception is to read the steam venting at Ōwakudani as a sign of an imminent eruption: steady geothermal venting is normal for this kind of volcano; Ōwakudani was briefly closed in 2015 when activity increased, but monitoring showed it did not reach eruptive levels.",
    history:
      "In the Edo period Hakone was an important checkpoint on the Tōkaidō highway (the Hakone Sekisho), controlling traffic in and out of Edo, with strict inspections. After railways and roads were built in the late 19th century, Hakone used its hot springs and closeness to Tokyo to become a resort favoured by the imperial family and writers. Today it has a classic sightseeing loop of mountain railway, cable car and lake boat, and several art museums.",
  },

  daisetsuzan: {
    // seeing / formation / history sources: 旭岳 2291 m、北海道最高峰；御鉢平破火山口直径约 2 km、约 3 万年前普林尼式喷发形成（内阁府防灾，1 级）。
    //   罗马字用 Daisetsuzan（国立公园官方拼法；Taisetsuzan 为并存变体、非主用）。
    //   ✅ **阿伊努表述专项复核**（美国那批犯过「阿纳萨齐」旧称的错）：阿伊努语 Kamuy Mintar「众神游玩的庭院」
    //   只作**地名由来的客观并列**，未涉同化政策／土地权／族群历史评价；族称用现行「アイヌ／Ainu」，无旧称。红线通过。2026-09-10 核，verdict: ok。
    seeing:
      "Daisetsuzan is a group of volcanoes in central Hokkaido, including Hokkaido's highest peak, Asahidake (2,291 m). Although not especially high by Japanese standards, the high latitude and cold climate make its environment equivalent to alpine country above 3,000 m further south — the mountains carry large areas of alpine tundra, permafrost and patterned ground, and snowfields and alpine flower meadows survive into July. It is Japan's largest national park.",
    formation:
      "Daisetsuzan is a volcanic group built by overlapping Quaternary volcanic activity, with a caldera about 2 km across (Ohachidaira) in the centre, ringed by cones such as Asahidake. There are active fumaroles on the western slope of Asahidake. Glaciers formed here during the ice ages, and with present-day freeze–thaw action, the flat summit plateaus have developed \"patterned ground\" such as stone circles and stone stripes — rare elsewhere in Japan.",
    observation:
      "From the air Daisetsuzan is a rounded, open highland in central Hokkaido, with generally gentle summits (a volcanic-plateau trait) and the shallow saucer outline of the central caldera. White fumaroles show on one side of Asahidake. In the warmer half of the year the summits are patchy tundra and snow, the mid-slopes dense conifer forest that turns colour earliest in autumn. In winter this is one of the mountain areas in Japan with the earliest and longest snow.",
    distinguish:
      "Daisetsuzan and the Japanese Alps are both high mountains of Japan, but the Alps are a fold-and-fault range raised by plate compression, dominated by rock peaks and steep valleys; Daisetsuzan is a volcanic group with gentle summits, dominated by volcanic plateau and alpine tundra. Its alpine environment is closer to the mountains of Siberia or northern Europe than to the mountains of central Honshu.",
    concept:
      "Daisetsuzan shows that an \"alpine environment\" is set not only by elevation but also by latitude: in Hokkaido, a height of just over 2,000 m produces the permafrost, patterned ground and tundra that on Honshu require over 3,000 m. A common misconception is that tundra and permafrost occur only in the polar regions and the Himalaya — given enough cold, mid-latitude mountains of modest height have them too.",
    history:
      "The Daisetsuzan area is the traditional land of the Ainu, who call it \"Kamuy Mintar\", the \"playground of the gods\". This mountain country was long little visited, and became a national park in 1934. Today a cable car runs partway up Asahidake, and it is an important destination for alpine ecotourism and skiing in Japan; the core area remains fairly pristine, and winter travel carries avalanche and cold risk.",
  },

  "kii-mountains": {
    // seeing / history sources: 八经岳 1915 m 为纪伊山地最高峰；「紀伊山地の霊場と参詣道」2004 年列入 UNESCO，
    //   范围含高野山／吉野・大峰／熊野三山三条参诣道。3 级（与官方登录年份一致）。2026-09-10 核，verdict: ok。
    seeing:
      "The Kii Mountains occupy the interior of the Kii Peninsula, the large peninsula at the southern end of Honshu — a steep, rainy, densely forested range of middle height, its highest point Hakkyōgatake at 1,915 m. Facing the Pacific, it is one of the wettest parts of Honshu, with local annual rainfall over 4,000 mm. It has long been regarded as a sacred place of religious training, and the Kumano Sanzan, Kōyasan and Yoshino shrines and temples, and the \"Kumano Kodō\" pilgrimage routes linking them, are inscribed as a World Heritage cultural landscape.",
    formation:
      "The rock of the Kii Mountains is mostly uplifted marine sediment plus some granitic rock. It lies south of a major fault (the Median Tectonic Line), in the \"outer zone\" accretionary wedge — built where a subducting oceanic plate scraped seafloor sediment off, layer by layer, onto the continental margin. After uplift, the heavy rainfall let rivers cut hard down, slicing the range into dense deep V-shaped valleys, and vegetation covers almost every slope.",
    observation:
      "From the air the Kii Mountains are a continuous, rolling range covered almost entirely in dark-green forest, with no bare rock peaks — ridge and valley alike are hidden under the canopy. Countless rivers run radially out of the mountains to the coasts all around, cutting deep gorges, the water clear. The heavy rain keeps cloud and mist wrapped around the slopes. The southern coast of the peninsula is a cliff coast.",
    distinguish:
      "The Kii Mountains and the Japanese Alps are both mountains of Honshu, but the Alps are high, with rock peaks and glacial landforms, in the core of plate compression; the Kii Mountains are lower, without bare rock or glaciers, the result of the outer accretionary wedge being uplifted and eroded, characterised by extreme rainfall and dense forest. Compared with Yakushima: both are extremely rainy and densely forested, but Yakushima is a granite-dome island.",
    concept:
      "The Kii Mountains are a display of the \"accretionary wedge\" idea: a subducting oceanic plate acts like a scraper, shaving seafloor sediment off and stacking it onto the continental margin, and many mountains on Japan's Pacific side formed this way. A common misconception is to class all mountains as \"squeezed up by continental collision\" — an accretionary wedge is \"scraped\" off during subduction (one plate sliding under another), a different mechanism.",
    history:
      "The Kii Mountains have been a centre of mountain worship and of Shugendō (a fusion of Buddhist and Shinto training) since the Nara period. Kōyasan is the head temple of the Shingon school, founded by Kūkai in the 9th century; the Kumano Sanzan were pilgrimage destinations for emperors and commoners alike; and the \"Kumano Kodō\" routes linking the sacred sites have been walked by countless pilgrims over a thousand years. In 2004 this whole set of \"Sacred Sites and Pilgrimage Routes in the Kii Mountain Range\" was inscribed as a World Heritage cultural site.",
  },

  "kanto-plain": {
    // formation sources: 缓慢下沉的构造盆地 + 河流冲积 + 台地（武藏野台地等）上覆来自富士山与箱根的风成火山灰（关东壤土），
    //   与日本地学界公认机制一致。2026-09-10 核，verdict: ok。
    // seeing sources: 人口：正文所指是**东京圈（1 都 3 县）** 口径，2020 年国势调查 36,914,000（占全国 29.3%，総務省統計局，1 级）。原文「约四千万」偏高且无年份口径。关东平原面积约 1.7 万 km²、日本第一大平原（第二石狩约 4000、第三十胜约 3600）核实无误。2026-09-10 核。
    seeing:
      "The Kanto Plain is the largest plain in Japan, about 17,000 km², in central Honshu on the Pacific side. Japan's largest metropolitan area — Tokyo, Yokohama, Saitama and Chiba running together — is built on it, home to about 37 million people (2020 census, the Tokyo-ken of Tokyo, Kanagawa, Saitama and Chiba). The plain is enclosed by mountains on three sides (the Kanto Mountains to the west, the Ashio and Echigo ranges to the north) and opens south-east onto Tokyo Bay and the Pacific.",
    formation:
      "The Kanto Plain is a slowly subsiding structural basin that has long received sediment carried down from the surrounding mountains by the Tone, Ara, Tama and other rivers. It is not a single lowland at one level: near the rivers is low alluvial ground, and between them rise several river-cut terraces (such as the Musashino Terrace), capped by a thick layer of wind-blown volcanic ash from Mount Fuji, Hakone and other volcanoes (the \"Kanto loam\").",
    observation:
      "From the air the Kanto Plain is one nearly continuous grey city held in the arms of the mountains — the built-up area covers almost the whole plain, with strips of green and farmland surviving only along the rivers and at the terrace edges. The Tone, Ara and other large rivers wind through the urban grid, their channels held by high levees. On a clear day the isolated cone of Mount Fuji is visible to the south-west from the plain.",
    distinguish:
      "The Kanto Plain and China's North China Plain are both large, densely populated river-alluvial plains, but the North China Plain is far larger and shaped by frequently shifting rivers such as the Yellow River; the Kanto Plain is small, ringed by mountains, built by several rivers that stay in their own sectors, and overlain by volcanic-ash terraces. Versus the Osaka Plain: the Kanto Plain is much larger, while the Osaka Plain is cut to pieces by fault-block mountains.",
    concept:
      "The Kanto Plain shows that a \"plain\" has internal structure: it has both low river-alluvial ground and higher, volcanic-ash-covered terraces, and the two differ in ground conditions, groundwater and hazard risk. A common misconception is that all of a big city sits on solid ground — the Tokyo Bay shore has large areas of modern reclamation and soft alluvium, which amplify shaking and can liquefy in an earthquake.",
    history:
      "The Kanto Plain has long been the agricultural and population centre of the Kanto region. In 1590 Tokugawa Ieyasu moved his base to Edo, then a small town, and Edo (renamed Tokyo after 1868) grew into Japan's largest city. In the 20th century the plain's fields and woodlots were swallowed by rapid urbanisation into today's continuous metropolis; flood control (especially the rerouting and levee works on the Tone River) is what allows the plain to hold so many people.",
  },

  "nobi-plain": {
    // 全六段 sources: 1959 年伊势湾台风官方统计死亡 4,697 + 失踪 401 = 5,098 人，正文「超过 5000 人」准确（名古屋市官网，2 级）；
    //   浓尾平原坐落在养老断层控制的倾动地块上（西沉东升），与内阁府地形地质指南口径一致（1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The Nōbi Plain is in central Honshu on the northern shore of Ise Bay, the alluvial plain of the Nagoya area. Three large rivers — the Kiso, the Nagara and the Ibi — cross the plain almost side by side and empty together into Ise Bay. The south-western part of the plain is very low, with a substantial area of ground below sea level (below high tide), and it has always fought with floods.",
    formation:
      "The Nōbi Plain sits on a tilting block that is sinking on the west and rising on the east — the west keeps dropping along a fault at the foot of the Yōrō Mountains, so all three rivers are pushed to the western side of the plain and crowded together, and the south-western corner keeps getting lower. The rivers' sediment fills this sinking area into a plain, but not as fast as it subsides, so the lowland is kept only by ever-raised levees.",
    observation:
      "From the air the Nōbi Plain is a lowland covered in regular fields and towns, the eye drawn to the three big rivers running in parallel on the west side, separated only by narrow belts of levee. In the south-west you can see ring levees (\"wajū\") enclosing villages and fields one by one, the ground inside clearly lower than the river. Nagoya's built-up area is on slightly higher ground in the east of the plain.",
    distinguish:
      "The Nōbi Plain is like the low country of the Netherlands — a delta below sea level kept habitable by levees and drainage. Versus the Kanto Plain: the Kanto Plain is larger, has volcanic-ash terraces and little subsidence; the Nōbi Plain is small, almost all low alluvium, with the south-western half continuously subsiding and flood pressure more concentrated.",
    concept:
      "The \"wajū\" of the Nōbi Plain are a classic case of \"living with water\": in lowland where floods cannot be fully kept out, each settlement is enclosed by its own ring levee, and inside there is a hierarchy — houses and shrines on the highest spots, plus purpose-built raised platforms (\"mizuya\") as flood refuges. A common misconception is that building levees solves flooding for good — the higher the levee, the greater the head and the damage if it breaks.",
    history:
      "The Nōbi Plain has long been a strategic corridor linking eastern and western Japan, and battles that changed Japanese history — Sekigahara, Okehazama — were fought here. In the Edo period the shogunate organised large flood-control projects (such as the 1750s \"Hōreki\" works carried out by the Satsuma domain) to separate the three rivers and build levees. The Isewan Typhoon of 1959 caused a storm surge here that killed or left missing over 5,000 people, after which Japan greatly strengthened coastal disaster defences.",
  },

  "osaka-plain": {
    // seeing / concept sources: 平原面积约 1600 km²（北摄山地—生驹／金刚山地—和泉山脉—大阪湾之间），多部词典百科一致；
    //   1995 年阪神大地震与六甲—淡路岛断层带活动直接相关，六甲山系本身即由该断层带隆升。2026-09-10 核，verdict: ok。
    seeing:
      "The Osaka Plain is in western Honshu, on the eastern and northern shores of Osaka Bay — the core of the Kansai region. The three big cities of Osaka, Kyoto and Kobe and the continuous urban area between them lie on this plain and in the valleys around it. The plain is not large (about 1,600 km²) and is tightly hemmed in by rows of fault-block mountains such as Ikoma and Rokkō, with a very clear boundary between mountain and plain.",
    formation:
      "The Osaka Plain is a relatively subsiding area \"framed\" by the uplift of the surrounding fault-block mountains, filled by the alluvium of the Yodo, Yamato and other rivers. Thousands of years ago the sea reached deep into what is now central Osaka (\"Kawachi Bay\"), later turned to land by Yodo River sediment and by human reclamation. In modern times the Osaka Bay shore has been extended further by large-scale reclamation, creating ports, an airport (Kansai International Airport is on an artificial island) and industrial zones.",
    observation:
      "From the air the Osaka Plain is a grey urban hollow between rows of steep ranges — the built-up area almost fills the plain, with the Yodo River cutting diagonally across from north-east to south-west and splitting into arms at its mouth. Rokkō stands like a wall behind the city of Kobe, dense housing right at its foot. Squared artificial islands are visible in Osaka Bay. Kyoto sits at the northern end of the plain in a small basin enclosed by hills on three sides.",
    distinguish:
      "The Osaka Plain and the Kanto Plain are both big-city plains of Japan, but the Kanto Plain is open and has volcanic-ash terraces; the Osaka Plain is cut to pieces by fault-block mountains, assembled from a string of small plains and basins, with a closer relationship between mountain and city. Versus the Nōbi Plain: the Osaka Plain does not have the large below-sea-level area that Nōbi does, so its flood problem is less extreme.",
    concept:
      "The Osaka Plain shows how block movement shapes settlement: the surrounding mountains are lifted along faults, the block between drops and is filled flat by rivers, and the cities grow in these dropped lowlands — with the fault often right at the mountain foot. There is an active fault at the base of Rokkō, and the 1995 Great Hanshin earthquake came from it. A common misconception is to take the mountain foot for the safest \"backed-by-mountain\" spot — in fault-block mountain country, the mountain foot often faces an active fault.",
    // history sources: ⚠️ 原文把飞鸟、平城京并进了大阪平原。内阁府地形地质指南的大阪平原四至（北摄山地—生驹／金刚山地—和泉山脉—大阪湾）**不含奈良盆地**，飞鸟与平城京都在奈良盆地内；平安京在京都盆地。难波确在平原上。1 级。2026-09-10 核。
    history:
      "The Osaka Plain was one of the centres of ancient Japanese civilisation: Naniwa stood on the plain itself, while Asuka and Heijō-kyō (Nara) lie in the neighbouring Nara Basin to the east — strictly outside the Osaka Plain — and Heian-kyō (Kyoto) sits in the Kyoto Basin to the north. Osaka became \"the nation's kitchen\" through water transport in the Edo period, a commercial and logistics hub for the whole country. In modern times Osaka grew into an industrial city, Kyoto kept its old-capital character, and Kobe is a major port — together with their surroundings they form Japan's second-largest metropolitan area by population.",
  },

  "ishikari-plain": {
    // 全六段 sources: 北海道最大平原；过去是排水不畅的石狩泥炭地，经排水改造成稻田。
    //   ✅ **专项复核「五大平原有没有被写成同一套成因」**：石狩（泥炭冲积低地）与十胜（火山灰台地）在本库里**写的是两套机制**、distinguish 段也明写了差异，没有混用（内阁府地形地质指南，1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The Ishikari Plain is the largest plain in Hokkaido, in the south-west of the island, on the lower Ishikari River. Sapporo, the capital of Hokkaido, is built on the southern edge of the plain, which also holds cities such as Asahikawa and large areas of rice paddy. It is enclosed by mountains and hills on three sides and opens north-west through Ishikari Bay to the Sea of Japan.",
    formation:
      "The Ishikari Plain formed by long alluvial deposition of the Ishikari River and its tributaries in a relatively subsiding lowland. The Ishikari River was originally extremely sinuous across the plain, leaving many oxbow lakes; the centre of the plain was once a large poorly drained peat bog (the \"Ishikari peatland\"). From the Meiji era, to develop Hokkaido as an agricultural base, the government organised large-scale drainage, channel straightening and \"soil dressing\" (covering the peat with mineral soil) to turn the bog into paddy.",
    observation:
      "From the air the Ishikari Plain is a large area of regular grid fields ringed by mountains, with the Ishikari River winding through it — along the river you can see many crescent oxbow lakes and abandoned old channels left after straightening. Sapporo's built-up area is at the southern end of the plain against the mountains, its streets a neat checkerboard (planned in the Meiji era). In winter the whole plain is under deep snow.",
    distinguish:
      "The Ishikari Plain and the Kanto and Nōbi plains of Honshu are all river-alluvial plains, but the Ishikari Plain is at high latitude, with cold snowy winters, and was originally mostly peat bog — one of the most heavily \"modernly engineered\" plains in Japan. Compared with the Interior Plains of Canada: both are high-latitude, with peat, given to grain or rice farming on a large scale, by a similar mechanism.",
    concept:
      "The Ishikari Plain is a sample of \"peatland reclamation\": peat is plant remains accumulated by incomplete decomposition under waterlogged, oxygen-poor conditions — soft, acidic, with poor bearing strength and unsuited to cropping. Turning it into farmland needs drainage to lower the water table plus a cover of mineral soil — but once drained, the peat oxidises and decomposes and the ground subsides, a long-term problem for such areas.",
    history:
      "The Ishikari Plain is the traditional land of the Ainu, and the Ishikari River was their main artery for salmon fishing and travel. In 1869 the Meiji government set up the \"Colonisation Commission\", chose Sapporo as the centre of Hokkaido's development, laid the city out on a grid, and brought in American-style large-scale agriculture and a militia-settler system. The northern limit of rice growing on the Ishikari Plain is the result of Japanese rice varieties and techniques being pushed steadily into colder country.",
  },

  "tokachi-plain": {
    // 全六段 sources: 内阁府地形地质指南给十胜平原界限「北为然别火山、东为白糠丘陵、南为丰顷丘陵与太平洋、西为日高山脉」——
    //   正文以「大雪山」概称北界山系（然别火山属大雪山火山群）可接受，东西两向精确对应。成因为叠置冲积扇 + 火山灰台地（洪積台地）。1 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Tokachi Plain is in south-eastern Hokkaido, a fan-shaped plain built out from the surrounding mountains by the Tokachi River and its tributaries, enclosed by the Hidaka Mountains to the west, Daisetsuzan to the north and the Shiranuka Hills to the east. With plenty of sunshine and dry summers, it is one of the few areas in Japan given over to large-scale, mechanised dryland farming and dairying — potatoes, sugar beet, beans and wide hayfields. The central city is Obihiro.",
    formation:
      "The Tokachi Plain is made mainly of a set of overlapping alluvial fans and volcanic-ash terraces. The surrounding volcanoes (Daisetsuzan, Mount Tokachi and others) have erupted repeatedly, and the ash blown onto the plain has formed a thick, well-drained terrace soil; the Tokachi River and its tributaries have cut valleys between the terraces and built fan-shaped alluvial ground. This \"mostly volcanic-ash terrace\" foundation, plus low rainfall, makes the area better for dryland crops than for paddy.",
    observation:
      "From the air the Tokachi Plain is a large area of unusually regular, large-parcelled fields in a half-ring of mountains — completely unlike the small fragmented paddies elsewhere in Japan, this is big dryland fields divided into a checkerboard by shelterbelts, with rows of barns and cattle sheds. Rivers run radially out of the Hidaka Mountains to the west, cutting ribbons of riparian woodland.",
    distinguish:
      "The Tokachi Plain and the Ishikari Plain are both in Hokkaido, but the Ishikari Plain was originally peat bog and after reclamation is mostly rice; the Tokachi Plain is volcanic-ash terrace, low-rainfall, given to dryland crops and livestock, with large fields and a high degree of mechanisation, looking more like a North American or European farming region. Versus the plains of Honshu: those are dominated by paddy and dense small-holdings; Tokachi is a different type.",
    concept:
      "The Tokachi Plain shows how foundation (here, volcanic-ash terrace) and climate (low rainfall) together decide the kind of farming: land that drains well but is short of water is hard to grow rice on, but good for dryland crops like potatoes and sugar beet and for grazing. A common misconception is that Japanese farming is all \"small and intensive paddy\" — Tokachi is a large-scale, low-density, mechanised counterexample.",
    history:
      "The Tokachi Plain is the traditional land of the Ainu; the name \"Tokachi\" comes from the Ainu language. In the Meiji era, private settlement groups such as the Banseisha and militia settlers moved into what was then forest and open country. In the 20th century Tokachi built up a farming belt centred on Obihiro and developed processing industries in sugar, dairy and confectionery (\"Tokachi\" is often used as a food brand).",
  },

  "lake-biwa": {
    // seeing / formation sources: 面积约 670 km²、日本最大湖；约 400 万年历史（祖先湖古琵琶湖起算，现湖盆本体约 100 万年以上），
    //   属世界约 20 个古代湖之一、日本唯一；滋贺县官方令和 5 年度末给水人口约 1468 万（正文「约 1400 万」成立，1 级）。
    //   ✅ **专项复核「一直在向北移动」**：构造断陷湖、湖盆随断层活动持续北移，最早的古琵琶湖（大山田古湖）在今三重县伊贺一带
    //   ——与滋贺县立琵琶湖博物馆（1 级）口径一致，正文写的正是这一套。2026-09-10 核，verdict: ok。
    seeing:
      "Lake Biwa is the largest lake in Japan, about 670 km², in central Honshu in Shiga Prefecture, north-east of Kyoto. It is long and narrow, named for its resemblance to a biwa lute. It is more than just a large body of water: at about 4 million years old it is one of the very few \"ancient lakes\" in the world, with over fifty species that live only in Lake Biwa. It also supplies water to about 14 million people downstream in Kyoto, Osaka and Kobe.",
    formation:
      "Lake Biwa is a fault-depression lake: the block its basin sits on keeps dropping along faults, forming an ever-deepening hollow that collects water from the surrounding mountains. Its position has actually been migrating north over the past few million years — the earliest \"proto-Biwa\" was around present-day Mie Prefecture, and with fault activity the basin gradually moved to its current site. Continuous subsidence has kept it from filling with sediment and disappearing like an ordinary lake, and it has instead \"lived\" for millions of years.",
    observation:
      "From the air Lake Biwa is a long, narrow sheet of blue among the mountains of central Honshu, the north end narrow and deep, tightly clasped by mountains, the south end wide and shallow, ringed by plain and cities (Ōtsu and others). The Hira Mountains stand like a screen on the west shore; the east shore is the more open Ōmi Plain and farmland. The lake's water leaves through its one outlet, the Seta River (called the Uji, then the Yodo, downstream), flowing south-west to Osaka Bay.",
    distinguish:
      "Lake Biwa, like Lake Baikal and Lake Tanganyika, is a fault-depression \"ancient lake\" — in common, the basin keeps subsiding, the lifespan is extremely long, and many endemic species evolve. It is far smaller and shallower than those two. Versus China's Lake Taihu: Taihu is a shallow, young hollow holding water; Lake Biwa is a deep, ancient fault-depression lake, entirely different in biological distinctiveness.",
    concept:
      "Lake Biwa is a representative \"ancient lake\": the great majority of lakes live only a few thousand to a few tens of thousands of years before filling with sediment or draining; only a very few (about 20 worldwide) last more than a few million years because their basins keep subsiding, becoming \"islands of life\" that evolve on their own. To identify an ancient lake, look for many locally endemic fish, molluscs and shrimp.",
    history:
      "Lake Biwa has long been a land-and-water hub linking Kyoto with the Hokuriku region and eastern Japan, with very busy lake ports and ferry crossings. Canals were dug several times through history to bring lake water toward Kyoto; the \"Lake Biwa Canal\", completed in 1890, still supplies water to Kyoto and generates power. In the 20th century the lake suffered serious eutrophication (\"freshwater red tide\") from domestic and agricultural pollution, after which Shiga Prefecture enacted relatively strict environmental legislation.",
  },

  "lake-towada": {
    // seeing / formation sources: 最大水深 327 m（中湖）；公元 915 年（延喜 15 年）十和田火山 To-a 喷发 VEI 5，
    //   公认为日本过去两千年记录中规模最大的一次。3 级（引气象厅／产综研数据）。2026-09-10 核，verdict: ok。
    seeing:
      "Lake Towada is in the mountains at the far northern end of Honshu, on the border of Aomori and Akita — a caldera lake. It is a double nested caldera, its shores the cliffs left by the collapse, and it is about 327 m at its deepest. The water is clear and cold year-round, and its one natural outlet is the Oirase Stream on the eastern shore — a valley famous for its continuous waterfalls and rapids.",
    formation:
      "Towada is an active volcano. Two giant eruptions, about 55,000 and 15,000 years ago, in turn emptied the underground magma chamber and collapsed the ground, forming an outer and an inner caldera; the water that collected is today's Lake Towada, and the jutting \"Nakanoumi\" peninsula in the middle is part of a volcanic cone that later grew inside the caldera. Its most recent eruption, around AD 915, was the largest in Japan in the past two thousand years.",
    observation:
      "From the air Lake Towada is a deep-blue sheet of water with a complex outline in dense forest — the edges of the two calderas and the central peninsula make it look as if it has several arms. The shores are almost all steep cliff, with hardly any gentle beach. There is a gap in the east shore where the Oirase Stream comes out, cutting a narrow green valley eastward, waterfall after waterfall.",
    distinguish:
      "Lake Towada, like Lake Ashi at Hakone and Lake Tōya in Hokkaido, is a caldera lake — in common, deep, with steep shores, and often a central island. Versus an ordinary tectonic or glacial lake: a caldera lake's outline is closer to circular or double-ringed, and the lakebed is often the former eruptive centre. China's Tianchi on Changbai Mountain is a caldera lake of the same kind, younger and higher.",
    // concept sources: 与本条目 formation 段统一口径：日本过去两千年里规模最大（非「有史以来」）。2026-09-12 核。
    concept:
      "Lake Towada is a reminder that a scenic, seemingly quiet lake may itself be an active volcano. The AD 915 Towada eruption was the largest in Japan in the past two thousand years, covering the Tōhoku region thickly in ash and changing the local rivers and land. To tell whether a round deep lake is a caldera lake, look for a ring of cliffs (an outer rim) and eruptive deposits around it.",
    history:
      "The Lake Towada area was a hunting ground for the Ainu and later Tōhoku mountain people, long regarded as a sacred realm, with a long-told legend that the lake \"has no fish\" (salmonids came later by stocking). In the early 20th century, promotion of Oirase and Towada by writers and poets, together with new roads and railways, made this a representative sightseeing area of Tōhoku, and it was included in Towada-Hachimantai National Park in 1936.",
  },

  "shikotsu-toya": {
    // formation / history sources: 有珠山 20 世纪四次喷发 1910／1943–45／1977–78／2000 年——正文用「1943 年」作简写，
    //   与内阁府防灾资料的「1943–45 年噴火」统称惯例一致，不算错。
    //   ⚠️ 「昭和新山……整体抬升了约 170 米」**口径没写清、记在这里**：约 170 米接近三松ダイアグラム记录的熔岩穹丘**塔高 175 m**，
    //   而不是从原麦田标高（约 120–150 m）到最终标高 406.9 m 的**总抬升量**（约 260–280 m）。两个口径都有权威出处（产综研，1 级），
    //   正文没说是哪一种。**本轮判定不改**（数字本身对得上塔高），下一轮若要精确化就写明「熔岩穹丘塔高」。2026-09-10 核，verdict: ok（口径待写清）。
    seeing:
      "Shikotsu-Tōya is an area in south-western Hokkaido centred on volcanoes and caldera lakes, named for its two large lakes — Lake Shikotsu and Lake Tōya. Active volcanoes are dense here: Mount Usu has erupted four times in the 20th century, and in 1943–1945 a brand-new volcano (Shōwa-shinzan) \"grew\" out of a wheat field; Mount Tarumae and Mount Eniwa are active too. The Tōya Caldera–Usu Volcano area is a UNESCO Global Geopark.",
    formation:
      "Both Lake Shikotsu and Lake Tōya are caldera lakes: giant eruptions tens of thousands of years ago emptied underground magma chambers and collapsed the ground, and water filled the hollows; the islands in the middle (Nakajima in Lake Tōya, a volcano by Lake Shikotsu) are volcanoes that grew later inside the caldera. Mount Usu is a young active volcano on the southern rim of the Tōya caldera, known for eruptions that \"lift the ground\": the 1910, 1943, 1977 and 2000 eruptions all came with clear ground uplift, and Shōwa-shinzan formed when the eruption that began in 1943 pushed a small patch of farmland up into a new hill, crowned by a lava-dome spine about 170 m tall.",
    observation:
      "From the air Shikotsu-Tōya is a volcanic landscape of interlocking forest and lakes: Lake Tōya is nearly circular with an island in the middle, and Mount Usu's grey-white eruption scars and the red-brown Shōwa-shinzan sit right against its southern shore; Lake Shikotsu has a more irregular outline, enclosed on three sides by Mount Eniwa, Mount Fuppushi and Mount Tarumae, and Mount Tarumae carries a conspicuous lava dome on its summit like an upturned bowl.",
    distinguish:
      "Shikotsu-Tōya, like Aso and Hakone, is a combination of \"caldera plus later volcanoes\". Its distinctive feature is exceptionally frequent activity, and eruptions of the \"ground-uplift\" type — Mount Usu clearly bulges before each eruption, giving warning time; the 2000 eruption was evacuated in advance and no one was hurt, a model case of successful volcanic warning.",
    concept:
      "Shikotsu-Tōya (especially Mount Usu) shows the value of volcano monitoring: Mount Usu always has clear crustal deformation and increased earthquakes before an eruption, and scientists can issue a warning days ahead on that basis. Shōwa-shinzan is a vivid teaching example — it records the whole process of magma rising underground and lifting the surface as a block, documented day by day by a local postmaster (Masao Mimatsu).",
    history:
      "This area is Ainu land. In the 20th century Lake Tōya developed into a resort on its hot springs, and the 2008 G8 summit was held on its shore. With Mount Usu's repeated eruptions, the area has built a whole system for living with an active volcano: detailed volcanic hazard maps, designated evacuation routes, and roads and buildings damaged in the 2000 eruption preserved in place as \"ruins\" for visits and disaster education.",
  },

  "kurobe-gorge": {
    // formation sources: 快速构造抬升 + 河流下切坚硬花岗岩与变质岩，**非冰川主导**——与地质学界对北阿尔卑斯／黑部的解释一致，
    //   正文未夸大冰川作用。黑部水坝坝高 186 m，日本堤高最高。2 级（与国交省数据一致）。2026-09-10 核，verdict: ok。
    seeing:
      "The Kurobe Gorge is a deep V-shaped gorge cut by the Kurobe River through the Northern Alps (the Hida Mountains) — one of the deepest gorges in Japan. Its walls run almost straight up and down, with a height difference of one to two thousand metres between the floor and the ridges, hard to enter on foot; the main way through is a small railway built for hydropower work. Kurobe Dam upstream is the tallest arch dam in Japan.",
    formation:
      "The Northern Alps have been strongly and rapidly uplifted over the past one to two million years, and to keep its gradient the Kurobe River has cut hard down through solid granite and metamorphic rock. The faster the uplift and the harder the down-cutting, and with the rock here being tough and not prone to collapsing sideways, the result is a gorge that is narrow and deep with a V-shaped cross-section. The area has extremely deep winter snow, and the meltwater gives the river strong cutting power.",
    observation:
      "From the air the Kurobe Gorge is a thin, deep slit among continuous snow mountains, its floor barely visible — only at the bends can you glimpse a line of green river and the railway clinging to the cliff. The walls are densely forested and turn colour from bottom to top in autumn. Upstream you can see the arched wall of Kurobe Dam and the reservoir (Lake Kurobe) it holds back.",
    distinguish:
      "The Kurobe Gorge and the Grand Canyon in the U.S. are both river down-cutting, but the Grand Canyon is a river cutting into a plateau of flat layers, wide and pale with stepped walls; the Kurobe Gorge is a river cutting through a range of hard crystalline rock being rapidly uplifted, extremely narrow with near-vertical V-shaped walls. Versus the Yangtze Three Gorges: the Three Gorges are wider and carry far more water; the Kurobe Gorge is deeper and narrower with a small flow.",
    concept:
      "The Kurobe Gorge shows that \"narrow and deep\" depends on rock hardness and uplift rate: hard rock does not retreat sideways easily, the mountains rise fast, and the river can only keep cutting downward into a V-shaped gorge; if the rock were soft or the uplift slow, the gorge would widen faster. A common misconception is that a deeper gorge means a bigger river — the Kurobe is not actually a large river.",
    history:
      "Because it is so rugged, the Kurobe Gorge was uninhabited country for a long time, called one of the \"last unexplored places\" in Japan. In the early 20th century, to use the Kurobe River's great drop for power, work crews cut tunnels and laid rail in a gorge with almost nowhere to stand, extraordinarily dangerous work (Akira Yoshimura's documentary novel \"The High-heat Tunnel\" records one stretch). The small railway built to carry materials is now open to the public as a sightseeing line; Kurobe Dam was completed in 1963.",
  },

  kamikochi: {
    // formation / history sources: 上高地属日本阿尔卑斯第四纪**山岳（谷）冰川**地貌，规模小、非大陆冰盖——
    //   正文表述克制、未夸大。1915 年烧岳喷发泥石流堵塞梓川形成大正池；1891 年沃尔特·威斯顿由此登山并介绍给世界。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "Kamikōchi is a broad, flat stretch of the upper Azusa River valley in the Northern Alps, at about 1,500 m, tightly ringed by peaks over 3,000 m such as the Hotaka range and Mount Yake. The valley floor has the clear Azusa River, wetlands, larch and birch forest, and ponds reflecting the snow peaks. It is one of the birthplaces of modern mountaineering and nature conservation in Japan, and to protect the environment, private cars cannot drive in.",
    formation:
      "The broad flat floor of Kamikōchi was shaped by glaciers and rivers in turn: in the ice ages a valley glacier carved this stretch into a U-shape with a flat bottom; after the ice retreated the Azusa River wandered and deposited across the flat floor. In 1915 the active volcano Mount Yake, on the south side of the valley, erupted, and a mudflow rushed down and dammed the Azusa River, forming Taishō Pond — dead trees drowned then still stand in it. So Kamikōchi's landform is the sum of glacial, river and volcanic action.",
    observation:
      "From the air Kamikōchi is an unusually flat, bright-green valley floor among high mountains, the Azusa River braiding into several strands and rejoining. On the east side of the valley is the row of grey-white rock peaks of the Hotaka range; at the south-western end is Mount Yake, giving off a little smoke, with Taishō Pond below it. The boundary between the flat floor and the steep valley sides is sharp — the classic sign of a glacial U-shaped valley.",
    distinguish:
      "Kamikōchi and Yosemite Valley are both glacial U-shaped valleys ringed by high mountains with flat floors; the difference is that Yosemite's walls are bare granite cliffs, while Kamikōchi's walls are forested and it has an active volcano and a barrier lake the volcano made. Versus an ordinary river valley: a river valley is V-shaped with slopes descending all the way; Kamikōchi is U-shaped, flat-floored, steep-walled.",
    concept:
      "Taishō Pond at Kamikōchi is a vivid case of a \"barrier lake\": a volcanic mudflow (or a landslide or lava flow) suddenly dams a river, and water ponds up upstream. Such lakes are often unstable — the barrier can be worn open gradually or breach suddenly. Taishō Pond has also been silting up since it formed and is kept clear by dredging.",
    history:
      "Kamikōchi was once a place for logging and grazing. In 1891 the English missionary and mountaineer Walter Weston climbed Hotaka, Jōnen and other peaks from here and introduced Kamikōchi to the world; there is a memorial to him in the valley, and a \"Weston Festival\" each year. In the early 20th century the campaign against a dam on the upper Azusa was one of Japan's early nature-conservation movements. Today Kamikōchi is the gateway to Chūbu-Sangaku National Park, with strict management of vehicles and visitor numbers.",
  },

  "seto-inland-sea": {
    // formation sources: 主流解释为末次冰期后（约 7000 年前）海面上升淹没原有山地丘陵形成的**溺谷型内海**（多岛海）。
    //   学界另有「断裂沉降说」与「侵蚀山块沈水说」并存，**正文把两者并列陈述**（先断裂下陷形成洼地骨架、再冰后海面上升淹没成海），
    //   与国交省与濑户内海环境保全协会（均 1 级）口径吻合，**未写反、也未简化成单一构造凹陷**。2026-09-10 核，verdict: ok。
    seeing:
      "The Seto Inland Sea is a semi-enclosed sea framed by the three large islands of Honshu, Shikoku and Kyushu, about 450 km long east–west. It is scattered with roughly 700 islands, and the water is divided by islands and peninsulas into a chain of open \"nada\" (basins) and narrow \"seto\" (channels). With small waves, a mild, dry climate and plenty of sunshine, it has been an important shipping lane and fishing ground since ancient times, and its shores and islands are densely populated.",
    formation:
      "The Seto Inland Sea is essentially a drowned landscape of mountains and valleys. The blocks here dropped relatively along a set of east–west faults, forming several basin-like hollows (today's \"nada\"), while the higher ground between them became islands and the narrow \"seto\" that pinch the channels. When sea level was low in the ice ages most of this was land; when it rose afterward, the sea came in from both ends, drowning the lowlands into a sea and leaving the hilltops as islands.",
    observation:
      "From the air the Seto Inland Sea is a body of water broken to pieces by islands, held within land — islands large and small aligned along a few trends, with channels of varying width between island and island and island and shore, the narrowest spanned by long sea-crossing bridges (the Seto Ōhashi, the Akashi Kaikyō Bridge). The islands are mostly rounded low hills, terraced fields and citrus groves reaching down near the shore. Tidal currents form conspicuous whirlpools in the narrow seto (as at Naruto).",
    distinguish:
      "The Seto Inland Sea is a \"drowned valley\" coast/inland sea — the land subsided or the sea rose, and the sea flooded former valleys and basins, turning ridges into peninsulas and island chains. It is unlike Norwegian fjords: fjords are glacier-deepened valleys that were flooded, deep and narrow with steep walls; the Seto Inland Sea is drowned hill-and-basin country not deepened by glaciers, with rounded islands and shallower water. The mechanism is like that of China's Zhoushan Archipelago.",
    concept:
      "The Seto Inland Sea shows that the same landform takes on a different face as sea level changes: today's islands were hilltops in the ice ages; today's \"nada\" were basins then. To identify this kind of \"drowned\" coast, see whether the islands and peninsulas are rounded, whether their trend matches the ridges on land, and whether the water is shallow — all signs of flooded land, not of a coast built by wave erosion or deposition.",
    history:
      "The Seto Inland Sea has been the main shipping route linking the Kinai (the Kyoto–Osaka area) with Kyushu and the mainland since ancient times, lined with ancient ports, bases of \"suigun\" (sea warriors, such as the Murakami), and Buddhist holy sites. In modern times its shores developed into a heavy-industry belt (the Seto Inland Sea Industrial Zone), badly polluted for a time with frequent red tides, later somewhat recovered. In 1934 it became one of Japan's first national parks; in recent years some islands have drawn visitors again with contemporary art (the Setouchi Triennale).",
  },

  "sanriku-coast": {
    // 全六段 sources: 海岸约 600 km（青森八户至宫城石卷牡鹿半岛）；北山崎断崖高约 200 m。
    //   ✅ **零争议红线专项复核**：通读六段中英全文，**未出现伤亡数字、未提及核事故、无任何评价**；
    //   2011 年海啸只写了波高（「十几米甚至更高的浪高」/ run-up over ten metres）这一地学量，符合「只写地貌机制、不写灾害后果」的要求。
    //   1896／1933 年历史海啸属广泛记载的自然灾害史。2026-09-10 核，verdict: ok。
    seeing:
      "The Sanriku Coast is about 600 km of the Pacific side of north-eastern Honshu (roughly from southern Aomori to northern Miyagi). It has two halves: the north is raised marine terraces, forming flat-topped tablelands and continuous cliffs up to 200 m high (such as Kitayamazaki); the south is a drowned-valley \"ria coast\" — the sea has flooded a set of parallel valleys, forming a jagged line of long narrow bays reaching inland.",
    formation:
      "The Sanriku Coast lies directly above the subduction zone of the Japan Trench and is tectonically active. The north is slowly rising as a whole, lifting former wave-cut platforms out of the sea one level at a time as terraces. The south is the opposite, or has sea-level rise on top of it, and the sea has flooded parallel valleys to make a ria coast. These narrow bays are deep and calm, excellent natural harbours and aquaculture sites — but precisely because they are narrow and taper inland, they sharply raise the water level when a tsunami runs in.",
    observation:
      "From the air the northern Sanriku Coast is a neat green terrace edge dropping straight to the sea as a white cliff, with sea stacks and arches offshore; the southern coast line is jagged, in and out, with long narrow bays cutting deep into the mountains, small patches of flat land and fishing ports at their heads. The whole coast is backed right up against the Kitakami Mountains, with almost no plain as a buffer.",
    distinguish:
      "The southern Sanriku ria coast has the same origin as the Rías Baixas of Galicia in Spain (the source of the word \"ria\") — parallel valleys flooded by the sea. It differs from the Seto Inland Sea: Sanriku's valleys face straight onto the open ocean and its bays are V-shapes pointing inland; the Seto Inland Sea is an inland sea enclosed by three large islands with rounded islands. The raised terraces of the north are like other tectonically raised coasts (such as the east coast of Taiwan).",
    concept:
      "The Sanriku Coast (especially the south) explains why tsunami damage is especially severe on a ria coast: the long, inland-tapering, deep bays act like funnels, concentrating the energy of an incoming tsunami and raising the water very high; and the head of the bay is usually exactly where the fishing port and the settlement are. In the 2011 Tōhoku earthquake tsunami, some bay heads recorded run-up of more than ten metres, in places much higher. In rebuilding, the local area greatly raised the ground and the seawalls, and moved housing to higher land.",
    history:
      "The Sanriku coast has been a fishing coast settled since the Jōmon period, and has suffered many tsunamis in history (the Meiji Sanriku of 1896, the Shōwa Sanriku of 1933 and others), with many tsunami stone markers reading \"do not build houses below this point\". The 2011 tsunami dealt this area a devastating blow. Afterwards the former Rikuchū Kaigan and other national parks were reorganised into the \"Sanriku Fukkō (Reconstruction) National Park\", linking the coastal scenery with disaster-education facilities.",
  },

  "shiretoko-peninsula": {
    // 全六段 sources: 环境省知床罗臼游客中心官方页（1 级）+ UNESCO 2005-07-17 列入年份交叉核对。
    // ✅ **零争议红线专项复核（本批风险最高的一条，紧邻南千岛）**：逐句核对全六段中英全文，
    //   **未出现**国后岛／择捉岛／色丹岛／齿舞群岛任何一个岛名，**未出现**「北方领土／南千岛／争议／归属」等表述；
    //   涉及海峡对岸陆地处一律不点名（写作「半岛几乎未开发」「知床岬没有道路能到」）。**红线守住。**
    //   阿伊努语 sir etok「大地的尽头」与环境省官方设施页英译一致（1 级），只作地名由来的客观陈述，族称用现行「アイヌ／Ainu」。
    //   2005-07-17 列入 UNESCO 世界自然遗产、「知床 100 平方米运动」均属实。2026-09-10 核，verdict: ok。
    seeing:
      "The Shiretoko Peninsula is at the north-eastern tip of Hokkaido, reaching like a finger into the Sea of Okhotsk. Its centre is a ridge of volcanoes (the Shiretoko range), with cliffs plunging straight into the sea on both sides, and almost no roads or residents. In winter, sea ice (drift ice) floats down from the north and piles up against the shore — this is the southernmost place in the Northern Hemisphere where large-scale seasonal sea ice comes to land. The sea has abundant fish, and the shore has a dense population of brown bears.",
    formation:
      "The Shiretoko Peninsula is the south-western extension of the Kuril volcanic arc — the Pacific plate subducts and has built a line of volcanoes here, which joined together and were uplifted to form the peninsula's ridge backbone; Mount Rausu, Mount Iō and others are still active volcanoes. The cliffs on both sides of the peninsula are volcanic rock long eroded by waves, and in many places waterfalls drop straight off the cliff top into the sea (such as the hot-spring falls at Kamuiwakka).",
    observation:
      "From the air the Shiretoko Peninsula is a narrow, elongated land with a ridge down the middle, carrying a few volcanic cones and snow, and continuous dark cliffs plunging into the sea on both sides. There is no road to the peninsula's tip (Cape Shiretoko). In winter and spring the sea on the Okhotsk side is covered with white drift ice right up to the shore. Inland on the western side are the \"Shiretoko Five Lakes\" — small lakes on volcanic-mudflow deposits.",
    distinguish:
      "The Shiretoko Peninsula, like Kamchatka and the Aleutians, is land on a subduction-zone volcanic arc, characterised by active volcanoes, cliff coasts and cold marine ecosystems. It differs from Japan's other peninsulas (Kii, Noto) in being almost undeveloped and known for a complete \"sea-to-mountain\" food chain: plankton brought by the sea ice feeds fish, fish feed salmon, seals and Steller's sea eagles, and on up to the brown bears on shore.",
    concept:
      "Shiretoko was inscribed as a World Heritage site for the tight link between its marine and terrestrial ecosystems: the nutrients brought by winter drift ice are the start of the whole food chain. A common misconception is to see sea ice as a symbol of \"barren, lifeless\" — the edge of seasonal sea ice is in fact a zone of very high productivity, and the nutrients and algae released as the ice melts support a great deal of life.",
    history:
      "Shiretoko is the traditional land of the Ainu; \"Shiretoko\" comes from the Ainu \"sir etok\", meaning \"the end of the earth\". In the mid-20th century settlers tried to farm on the peninsula but mostly gave up because of the harsh environment. In the 1960s–70s the local \"Shiretoko 100 Square Metre Movement\" raised public money to buy land and stop development. In 2005 Shiretoko was inscribed as a World Heritage site, with strict entry management and measures to prevent bear–human conflict.",
  },

  "tottori-sand-dunes": {
    // formation / concept sources: ✅ **成因专项复核**：沙来自千代川从中国山地搬运的花岗岩风化砂，
    //   经「河供砂—浪搬运—风堆积」的循环形成，**不是「沙漠化」的产物**（山阴海岸世界地质公园，2 级）。
    //   正文的「常被当作『日本唯一的沙漠景观』，但从气候上看这里并不干旱」是**把流行说法与事实并列**的正确写法，保留。
    //   ⚠️ C8：沙丘因上游筑坝、护岸与防风林导致供砂与风减少而一度缩小、被杂草侵占，当地靠人工除草维持流动状态——
    //   正文用的是定性表述、没给会过期的年份数字，符合处理惯例。2026-09-10 核，verdict: ok。
    // seeing sources: 尺度：16 km × **2.4 km**（山阴海岸世界地质公园官方，2 级）；**最大高低差约 90 m**，而 47 m 是「马の背」第二砂丘列自身的标高（鸟取县砂丘事务所，1 级；第三砂丘列约 60 m）。原文把一条沙丘列的标高当成了整片的相对高差。2026-09-10 核。
    seeing:
      "The Tottori Sand Dunes are on the Sea of Japan coast in western Honshu — the largest dune field in Japan, about 16 km east–west and 2.4 km north–south, with a maximum relief of about 90 m — the crest of the \"Umanose\" ridge alone standing some 47 m high. In rainy, mountainous, forested Japan, such an open field of moving dunes is unusual, and it is often called \"Japan's only desert landscape\", though the climate here is not actually dry.",
    formation:
      "The sand of the Tottori Dunes comes from the Sendai River. The Sendai River carries large amounts of granite-weathered sand from the Chūgoku Mountains into the Sea of Japan, waves push the sand back to the shore, and the strong winter monsoon winds off the Sea of Japan blow the dry sand onshore and pile it beyond the coast. Since the ice ages this cycle of \"river supply — wave transport — wind deposition\" has continued, forming today's dunes. There are groundwater-fed hollows between the dunes.",
    observation:
      "From the air the Tottori Dunes are a striking pale-yellow band between the dark-green pine shelterbelt and the blue Sea of Japan — transverse dunes lined up parallel to the coast, a gentle slope on the seaward side and a steep slope on the landward side. In strong wind there are clear sand ripples on the surface, and between the big dunes is a larger, seasonally flooded hollow (an \"oasis\"). The inner edge of the dunes is right against farmland and towns.",
    distinguish:
      "The Tottori Dunes look like the dunes of the Sahara or the Taklamakan, but the origin and setting are entirely different: those are the product of long wind erosion and deposition in a dry climate and are enormous; the Tottori Dunes are \"coastal aeolian dunes\" — sustained by continuous river sand supply, wave transport and monsoon deposition, in a humid climate, and far smaller. Other Japanese coasts have similar but smaller dunes.",
    concept:
      "The Tottori Dunes show that a \"dune\" is a product of wind, not the same as a \"desert\": given a steady sand supply and enough wind, active dunes can form on a coast in a humid region. Their existence depends on the Sendai River's sand supply — in the 20th century, dams upstream, shore protection, and planted shelterbelts reduced both the sand and the wind, and the dunes shrank noticeably and were invaded by weeds; the area now weeds by hand to keep the dunes \"moving\".",
    history:
      "The Tottori Dune area was historically poor wasteland, and from the Edo period local people planted shelterbelts on the lee side and tried sand-tolerant crops such as rakkyō (a kind of scallion); the area around the dunes still produces rakkyō and sweet potatoes. In the 20th century the dunes became known as a sightseeing spot and a location for art and film (the imagery of Kōbō Abe's novel \"The Woman in the Dunes\" is associated with them). They are the core attraction of the San'in Kaigan UNESCO Global Geopark.",
  },

  yakushima: {
    // 全六段 sources: 宫之浦岳 1936 m，为整个九州地方最高峰（正文写「九州以南最高峰」偏保守、不算错）；
    //   1993 年与白神山地同为日本首批 UNESCO 世界自然遗产；山区年降水量可超 10,000 mm（气象厅，1 级）。
    //   ✅ **绳文杉树龄专项复核**：测年结果差异极大——1976 年推定 7000 年以上、外圈年轮约 2700 年、学习院大学碳测年最大仅 2170 年、
    //   1996 年约 2600 年、2018 年岐阜大学约 2800 年。**正文用「常被说成……但争议很大」的并列写法、没有坐实单一数字**，判定不改。2026-09-10 核，verdict: ok。
    // seeing sources: 单位归一：原文 3,000 feet（≈914 m）改为 1,000 米。环境省屋久島世界遺産センター记载岛上 1,000 m 以上山峰数十座（各来源在 39–45 座之间，故正文不写具体座数）。2026-09-12 核。
    seeing:
      "Yakushima is off the southern tip of Kyushu — a nearly circular granite island about 25 km across. Its centre is mountain country above 1,000 m, the highest peak Miyanoura-dake at 1,936 m, the highest mountain south of Kyushu. It is known for extreme rainfall (there is a saying that it \"rains 35 days a month\"), a complete vertical sequence of vegetation zones from subtropical to subarctic, and Japanese cedars (\"Yakusugi\") that may be thousands of years old; it was inscribed as a World Heritage site in 1993.",
    formation:
      "Yakushima formed when a large body of granite magma cooled underground about 14 million years ago, was later uplifted rapidly as a block, and emerged from the sea after the overlying rock eroded away. The high granite island stands right in the path of moist air from the Pacific and the East China Sea, forcing the air to rise and drop huge amounts of rain — annual rainfall in the mountains can exceed 8,000 to 10,000 mm. The abundant rain erodes hard along the granite joints, cutting the island into deep valleys, and the rivers are short and steep with many waterfalls.",
    observation:
      "From the air Yakushima is a circular green mountain island rising abruptly from the sea, its centre a ring of high peaks under near-permanent cloud, the summits bare pale granite boulders and low alpine plants, then conifer forest, then broadleaf evergreen forest going down, and subtropical vegetation and coral reef at the coast. Countless short rivers rush radially down from the central mountains, in deep valleys with white water.",
    distinguish:
      "Yakushima and the Kii Mountains are both among the rainiest, most densely forested places in Japan, but the Kii Mountains are an uplifted accretionary-wedge range on the continental margin, large in area; Yakushima is an isolated granite dome island, presenting the full vertical sequence of vegetation zones over a very short horizontal distance — from subtropical at the shore to something like Hokkaido's climate at the summit, in only a dozen or so kilometres.",
    concept:
      "Yakushima is the most compact display of \"vertical vegetation zones\": because the mountain is high and isolated in a warm sea, the climate change from foot to summit is like travelling from Okinawa all the way to Hokkaido. A common misconception is to treat \"Yakusugi\" as a species — it is just the ordinary Japanese cedar, but growing on Yakushima's poor granite it grows extremely slowly, and so has dense wood that resists rot for thousands of years.",
    history:
      "Yakushima has had a distinctive mountain worship since ancient times, with islanders climbing the mountains to pray at set times. In the Edo period the Satsuma domain organised logging of Yakusugi and processed the wood into roofing shingles (\"hiraki\") as tribute; there are still remains of that logging and transport on the island (such as Kosugidani). Campaigns in the 1960s–70s against continued logging of old-growth forest led to the 1993 World Heritage inscription. Today hikers aim for \"Jōmon Sugi\", one especially famous giant Yakusugi.",
  },

  "ryukyu-islands": {
    // seeing / formation / observation / distinguish / concept sources: 「琉球群岛（日本称南西诸岛）」用的是无争议的主链表述。
    //   UNESCO 两项：2000 年「琉球王国のグスク及び関連遺産群」（文化）、2021 年「奄美大島、徳之島、沖縄島北部及び西表島」（自然），年份核实无误（1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The Ryukyu Islands (called the Nansei Islands in Japan) are a chain of islands stretching about 1,000 km south-west from Kyushu, separating the Pacific from the East China Sea. The climate is subtropical maritime, coral reefs are widely developed around the islands, and many islands' surface is \"Ryukyu limestone\" formed from uplifted coral reef, so there are limestone terraces, caves (\"gama\") and karst landforms. Amami-Ōshima, northern Okinawa Island and other islands were inscribed as a World Heritage site in 2021 for their well-preserved subtropical broadleaf evergreen forest.",
    formation:
      "The Ryukyu Islands are an island arc formed at the edge of the Eurasian plate above the Philippine Sea plate subduction zone. The arc itself is rising, and at the same time sea level has changed many times since the Quaternary — during high-sea-level periods thick coral reef accumulated around the islands, and then as the islands rose and the sea fell, these reefs were lifted out of the sea and hardened into Ryukyu limestone overlying the older rock. On the inner side of the arc is the Okinawa Trough, a spreading submarine basin.",
    observation:
      "From the air the Ryukyu Islands are a chain of green islands aligned north-east to south-west in the deep-blue ocean, each ringed by a band of pale green to pale blue coral reef and lagoon, the water dropping abruptly to dark blue outside the reef. Limestone-dominated islands (southern Okinawa, Miyako) are low and flat with white sea cliffs at the edge; islands dominated by volcanic or older rock (Amami, northern Okinawa) have dense forested mountains.",
    distinguish:
      "The Ryukyu Islands are unlike the islands of the Japanese mainland: the mainland islands are dominated by volcanoes and drowned mountains, while the Ryukyus are dominated by coral reef and uplifted limestone, with a subtropical climate and an ecology closer to Taiwan and southern China. Versus pure coral islands like the Maldives: the Ryukyu islands have a rock base and mountains, and are not simple atolls.",
    concept:
      "The \"uplifted coral reef\" landform of the Ryukyus shows how crustal uplift and sea-level change act together: coral reef can only grow in warm shallow seas, and once lifted out of the sea it stops growing and turns to limestone; if reef accumulates and is uplifted repeatedly through different high-sea-level periods, a staircase of coral-reef terraces forms. A common misconception is to treat all tropical islands as volcanic — many Ryukyu islands have a surface of \"petrified coral\".",
    // history sources: ⚠️ 零争议红线：删去「冲绳战役是……规模最大的地面战」一句（中英各一处）。**与意大利「一战山地战（简短事实）」的先例区别在于**：这是一个关于战役的**最高级排名**、不是定位性简短事实，且冲绳战役与至今仍在进行的基地与地方认同讨论直接缠绕，属「仍在持续的对立状态」一侧；它对这条地形条目也无地理价值。
    //   ✅ 其余五段复核通过：未出现尖阁诸岛／钓鱼岛或任何可指向它的表述，未涉施政权移交、1972 年复归；琉球王国只作前现代史、未写「并入日本」的过程与评价。UNESCO 两项（2000 年琉球王国のグスク及び関連遺産群、2021 年奄美大島等自然遗产）年份核实无误（1 级）。
    history:
      "Many of the Ryukyu Islands were long ruled by the Ryukyu Kingdom, which had close tribute and trade ties with China, Japan and South-East Asia; sites such as Shuri Castle (\"Gusuku Sites and Related Properties of the Kingdom of Ryukyu\") are a World Heritage cultural site. The area has a strong local character in language, music, food and religion.",
  },

  "shinano-river": {
    // 全六段 sources: 全长 367 km（长野境内千曲川约 214 km + 新潟境内信浓川约 153 km），日本第一长河
    //   （国交省北陆地方整备局信浓川河川事务所，1 级）；大河津分水路 1909 年动工、1922-08-25 通水（同，1 级）。
    //   ✅ **专项复核「最长 vs 流域最大有没有混」**：distinguish 段正确区分了信浓川（最长 367 km）与利根川（流域最大 16,840 km²）两项不同排名，没有混用。2026-09-10 核，verdict: ok。
    seeing:
      "The Shinano River is the longest river in Japan, about 367 km (called the Chikuma River within Nagano Prefecture, and the Shinano River after it enters Niigata Prefecture). It rises in the Kanto Mountains of central Honshu, passes through the Nagano Basin, cuts through the Echigo Mountains, and finally empties into the Sea of Japan on the Echigo Plain in Niigata. The lower Echigo Plain is one of Japan's important rice-growing areas.",
    formation:
      "The upper Shinano is in the mountains, its valley a deep cut in uplifted mountain country, and the string of intermontane basins (Nagano, Ueda) formed by faulting. The lower Echigo Plain is a subsiding structural basin, filled with sediment brought in by the Shinano and its tributaries into a flat, marshy alluvial plain. Because the basin is sinking and the channel is raised within its own silted-up levees, the Echigo Plain suffered severe flooding through history.",
    observation:
      "From the air the upper Shinano is a deeply cut, strongly meandering river in the mountains; the middle river passes through several field-filled intermontane basins; on the Echigo Plain the river widens, held between high levees, with endless paddy on both sides, and you can see the man-made \"Ōkōzu Diversion Channel\" — a flood channel that leads the Shinano's floodwater straight to the Sea of Japan. The mouth is in the city of Niigata, wrapped in port facilities.",
    distinguish:
      "The Shinano and the Tone are the two longest rivers in Japan, but the Shinano flows to the Sea of Japan side, its basin confined by mountains, so it is \"long and slim\"; the Tone flows to the Pacific side, spreading across the open Kanto Plain, with a far larger basin. Versus a very silt-laden river like the Yellow River: the Shinano does not carry as much sediment, and its main problems are the flood peaks of the snowmelt and plum-rain seasons and the continued subsidence of the lower basin.",
    concept:
      "The \"Ōkōzu Diversion\" on the lower Shinano is a sample of \"flood diversion\": when the lower channel of a river cannot hold the flood no matter how high the levees are raised, a shortcut channel is dug part-way along to carry the excess flood straight out to sea, bypassing the downstream cities and farmland. This diversion, completed in 1922, fundamentally changed the flooding situation on the Echigo Plain.",
    history:
      "The Shinano basin has long been important for farming and travel; Kawanakajima on the upper river was where the great daimyo Takeda and Uesugi fought repeatedly in the 16th century. The Echigo Plain was historically a producer of \"landlord rice\" and a place of frequent floods and heavy peasant burdens, and only the modern diversion works and land improvement made it a stable granary. Today there are several hydroelectric stations on the Shinano.",
  },

  "tone-river": {
    // 全六段 sources: 流域面积 16,840 km²，日本第一（国交省关东地方整备局，1 级）；
    //   利根川东迁为江户时代 17 世纪跨越数十年的改道工程，最终改由铫子入太平洋；1947 年卡斯林台风在栗桥附近决堤，此后大幅提高治水标准（同，1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The Tone River has the largest drainage basin in Japan (about 16,800 km²) and runs right across the Kanto Plain. Historically it was nicknamed \"Bandō Tarō\" (\"Bandō\" is an old name for Kanto, and \"Tarō\" means eldest son, the biggest). It rises in the mountains of northern Kanto, gathers many tributaries on the Kanto Plain, and finally empties into the Pacific at Chōshi in Chiba Prefecture. It supplies a great deal of the domestic and industrial water for the Tokyo metropolitan area.",
    formation:
      "The Tone River originally flowed into Tokyo Bay. The Kanto Plain is a slowly subsiding basin, and the Tone, together with the Ara, the Watarase and others, wandered and flooded across it. In the early Edo period the shogunate, to protect Edo from floods, to open up the marshland downstream, and to open a water route toward the north-east, spent about 60 years (in the 17th century) moving the lower Tone channel eastward section by section, finally making it flow to the Pacific at Chōshi — a project called the \"Tone River eastward diversion\".",
    observation:
      "From the air the Tone is a broad, strongly meandering brown river on the Kanto Plain, held between wide levees, with continuous paddy, dry fields and ever-expanding cities on both sides. Near Chōshi in its lower reach the river becomes very wide, with large shallow lakes and marshes (Lake Kasumigaura, Lake Kitaura) alongside — these are what the old channels and hollows left behind after the eastward diversion. In the upper mountains you can see several reservoir dams.",
    distinguish:
      "The Tone and the Shinano are the two longest rivers in Japan: the Tone is a bit shorter but has a far larger basin and spreads across an open plain; the Shinano is longer, flows to the Sea of Japan, and its basin is confined by mountains. The degree to which the Tone has been \"artificially rerouted\" is notable even among the world's large rivers — its lower channel today is essentially dug by people.",
    concept:
      "The Tone eastward diversion shows that a river's \"channel\" can be changed on a large scale by people, with far-reaching effects: moving a large river from one sea to another protected the downstream city (Edo/Tokyo), but also shifted the \"burden\" of sediment and floods to a new mouth, and incidentally turned the wetlands along the way into farmland. A common misconception is to treat a large river's course as purely natural — the drainage pattern of the Kanto Plain is largely a result of Edo-period planning.",
    history:
      "The \"Tone River eastward diversion\" was one of the largest civil-engineering projects of the Edo shogunate, spanning most of the 17th century. It freed Edo from the direct threat of the Tone, turned the downstream reed marshes into new fields, and established an inland shipping network from Edo via the Tone and Lake Kasumigaura to the north-east. In the 20th century, as Tokyo's water demand surged, a series of reservoirs were built on the upper Tone; in the 1947 Kathleen Typhoon the Tone breached its banks and flooded a large part of the Kanto Plain, after which flood-control standards were greatly raised.",
  },
};
