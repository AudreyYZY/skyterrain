import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  "aoraki-southern-alps": {
    // seeing sources: 奥拉基/库克山现行高程 **3,724 m（2013 年 AORAKI2013 重测）**：
    //   1991 年岩崩后官方值先降到约 3,754 m，此后侵蚀继续降低，2013 年奥塔哥大学与 GNS 联合重测定为 3,724 m。
    //   https://www.otago.ac.nz/surveying/research/geodetic/aoraki2013-surveying-the-height-of-aoraki-mt-cook（1 级，2026-09-08 核）。
    //   **山峰高程也是会变的量** —— 岩崩、侵蚀、重测都会改它，和冰川面积一样要问「这是哪一年测的」。
    //   毛利语并列地名「Aoraki / Mount Cook」的用法与新西兰官方地名机构 NZGB 一致；
    //   1998 年和解立法段落只陈述事实经过，未作评价，零争议红线复核通过。
    seeing:
      "The Southern Alps (Māori: Kā Tiritiri o te Moana) run for about 500 km along the western side of New Zealand's South Island, separating the wet West Coast from the drier eastern interior. The highest peak, Aoraki / Mount Cook, is 3,724 m — the highest mountain in New Zealand — and the range holds almost all of the country's 3,000 m peaks and glaciers. Its south-western part lies within the Te Wāhipounamu World Heritage Area.",
    formation:
      "The Southern Alps are being pushed up by the oblique collision of the Pacific and Australian plates along the Alpine Fault, which runs along the western foot of the range. Uplift reaches around 10 mm a year in places, among the fastest of any mountain belt, and is roughly balanced by equally rapid erosion driven by heavy rain from the westerlies. The rock is mostly greywacke and schist.",
    observation:
      "From the air the Southern Alps are a continuous, jagged white wall: the western side is cloudy and steep, with glaciers reaching down into coastal temperate rainforest; the eastern side is in rain shadow, dry, with pale tussock grassland and braided rivers at its foot. The Aoraki area concentrates the highest, sharpest peaks and large glaciers such as the Tasman; the crest is the island's main divide.",
    distinguish:
      "The Southern Alps look like the European Alps but formed differently: the European Alps are fold mountains from continent-continent compression, while the Southern Alps are a young range shoved up along one large strike-slip fault. Compared with the Andes they have no volcanoes, and the contrast between their two sides is more extreme — metres of rain a year on the west, only a few hundred millimetres on the east.",
    concept:
      "The Southern Alps are a textbook case of tectonic uplift and erosion in balance: the mountains are not getting steadily higher — as fast as they rise, they are worn down, holding a roughly steady height over the long term. A common misconception is that Aoraki has a fixed height — a 1991 rock avalanche removed part of the summit, the official figure was lowered, and it was later re-surveyed.",
    history:
      "For Ngāi Tahu, the main South Island iwi, Aoraki is a deeply revered ancestral mountain. Settlement legislation in 1998 gave the peak the dual name \"Aoraki / Mount Cook\" and returned Aoraki / Mount Cook to the iwi, who then gifted it back to the nation. The area is also the birthplace of New Zealand mountaineering; Edmund Hillary, who first climbed Everest in 1953, trained here.",
  },

  "kaikoura-ranges": {
    seeing:
      "The Kaikōura Ranges, in the north-east of the South Island, are two parallel greywacke ranges that rise very steeply a short distance inland from the Pacific. Tapuae-o-Uenuku, in the Inland Kaikōura Range, is 2,885 m — the highest mountain in New Zealand outside the main Southern Alps. The town of Kaikōura and its small peninsula are known for sperm whales that can be seen year-round because deep water lies close to shore.",
    // formation sources: 2016-11-14 凯库拉地震（M7.8）：GeoNet / GNS Science 官方报告的最大抬升实测值为**韦帕帕湾约 5.5 米**，官方原话强调**该数不代表整段海岸**（哈夫穆恩湾附近仅 2.1–2.4 米）。级别 1，2026-09-10 核。
    //   https://www.geonet.org.nz/news/3kTum4hHVCEI2YwMoUWmEm
    //   **这是「一个真数字用在了比它大得多的对象上」的又一形状** —— 只是这次连数字本身也偏大了。「一次撕裂了十几条断层」与 GNS 主导的《Science》论文「至少 12 条」一致，不改。
    //   **Kaikōura 现行官方拼写带长音符，正文中英两侧都已一致使用。** 塔普埃奥韦努库峰 2885 米、地名释义「吃小龙虾的地方」、19 世纪捕鲸站转生态旅游：均核实无误。
    formation:
      "The Kaikōura Ranges sit on a belt of active faults where the Pacific and Australian plates meet, and are being uplifted and offset continuously. The November 2016 Kaikōura earthquake (magnitude 7.8) ruptured more than a dozen faults at once and lifted parts of the coast — a localised maximum of about 5.5 m at Waipapa Bay, with most of the coastline rising far less — raising broad areas of former seabed permanently above the water.",
    observation:
      "From the air the Kaikōura Ranges are a steep wall hard against the coastline: wide inland valleys on the west, and on the east the mountains drop almost straight into the Pacific, with snow on the tops in winter and green pasture, road and rail squeezed onto a narrow coastal terrace below. Offshore the sea colour deepens quickly over the Kaikōura Canyon.",
    distinguish:
      "The Kaikōura Ranges and the main Southern Alps are both greywacke and both rising fast, but the Kaikōura ranges sit further east and closer to the sea — a branch thrown off to the east of the main mountain belt. Because they are so near the coast, they go from sea level to nearly 3,000 m in only a few tens of kilometres, an even more abrupt land-sea contrast than the main divide.",
    concept:
      "Kaikōura is a case study in coseismic uplift: normally the fault belt raises the coast a few millimetres a year, but a single large earthquake can lift it several metres in seconds. The flights of raised shore platforms along the coast are a record of many such past earthquakes. A common misconception is that shoreline height is set only by sea level — here, the land itself is moving.",
    history:
      "Kaikōura means \"the place to eat crayfish (kōura)\" in Māori and has long been a place of fishing and settlement. In the 19th century it was a shore-based whaling station; by the late 20th century it had shifted to ecotourism built around watching whales, dolphins and albatrosses. After the 2016 earthquake the road and rail links to Kaikōura were cut for a long time and extensively rebuilt.",
  },

  "the-remarkables": {
    // seeing sources: Double Cone 2319 米（ClimbNZ 引 LINZ Topo50，3 级）—— **英文维基自身正文与信息框互相矛盾，未采用**。「Kawarau」是传统称呼、**未见 NZGB 正式并名的公报证据**，正文用「（毛利语 X）」框架、没有声称官方并名，处理正确。2026-09-10 核，本轮无需改动。
    seeing:
      "The Remarkables (Māori: Kawarau) rise on the eastern shore of Lake Wakatipu, south-east of Queenstown, as a fault-block range that climbs almost sheer from the lake. The highest point, Double Cone, is 2,319 m. Their sharp saw-toothed skyline above Queenstown is one of the most photographed mountain views in New Zealand, and there is a ski field on the range.",
    formation:
      "The Remarkables are a schist fault-block: compression of the crust lifted a block along faults and tilted it, giving a steep face (west, above the lake) and a gentler back slope (east). Schist is South Island greywacke recrystallised deep in the crust under heat and pressure; it splits readily along its foliation, which gives the range its ribbed, angular profile.",
    observation:
      "From the air the Remarkables are a north-south rock wall with a sheer western face plunging into the deep blue of Lake Wakatipu, and an eastern side that steps down more gently to alpine tussock and a few small cirque tarns. The shaded western face holds deep snow in winter and shows grey-blue schist in summer.",
    distinguish:
      "The Remarkables and the main Southern Alps are both schist, but the Remarkables are one especially high block within the basin-and-range country of Central Otago — a fairly self-contained massif ringed by down-faulted basins and lakes — whereas the main divide is a continuous watershed. Their steep west face comes from fault tilting, not glacial plucking.",
    concept:
      "The Remarkables show how a fault block produces an asymmetric mountain: one side is an uplifted fault scarp, very steep, and the other is the gently back-tilted former land surface. Central Otago has a series of these parallel schist blocks with basins between them. A common misconception is to read every steep rock face as glacial — here the steepness is tectonic.",
    history:
      "The Wakatipu basin below the Remarkables was one of the routes Māori used to gather pounamu (greenstone) and to travel. The Otago gold rush of the 1860s brought many miners to Queenstown and the Kawarau River. Today the area, centred on Queenstown, is New Zealand's most concentrated outdoor and adventure tourism region, and the Remarkables have appeared as a film location several times.",
  },

  "tararua-range": {
    // seeing sources: 米特雷峰 1571 米；马纳瓦图峡谷为经典先成河案例，**因果方向与正文一致**；塔拉鲁瓦为纯挤压褶皱山脉、不含火山。2026-09-10 核，本轮无需改动。
    seeing:
      "The Tararua Range is part of the North Island's axial mountain chain, north of Wellington, dividing the Kāpiti Coast on the west from the Wairarapa on the east. The mountains are not very high — Mitre, the highest, is 1,571 m — but because they face straight into the wind funnel of Cook Strait and the weather changes fast, they have long been a proving ground for New Zealand tramping and mountain training.",
    formation:
      "The Tararua Range is made of hard greywacke and is the strongly folded, faulted axial belt of the North Island, uplifted along faults under oblique plate compression. Dense faulting shatters the rock, and rivers cutting down the shatter zones have carved deep, steep gorges; the Manawatū Gorge is a river that was there before the mountains rose and has sawn straight through the rising range.",
    observation:
      "From the air the Tararua Range is a north-south ridge cloaked in dense native forest, its tops usually wrapped in cloud with only a short stretch of alpine herbfield showing above the bushline. The western slope faces the prevailing westerlies and is heavy with cloud and rain; the Wairarapa on the east is visibly drier, given over to pasture and vineyards.",
    distinguish:
      "The Tararua Range and the South Island's Southern Alps are both greywacke axial divides, but the Tararua has no glaciers and is far lower; it is \"known\" mainly for its dense forest and its severe weather. Unlike the volcanic Ruapehu and Taranaki, it is an entirely non-volcanic range built by compression and folding.",
    concept:
      "The Tararua Range is a case study in how terrain amplifies weather: a modest mountain range, if it sits square across a strong wind gap and faces a moist airstream, has its ridge-top wind, rainfall and cooling all magnified far beyond what the same altitude would see on flat ground. A common misconception is that a low range is not dangerous — the wind chill here can cause hypothermia even in summer.",
    history:
      "The Tararua Range and its passes were long a route for Māori travelling between the east and west coasts of the North Island. In the 19th century settlers drove road and rail through the Manawatū Gorge to link the two sides. Today most of the range is forest park — the back-country hills for the people of Wellington and Manawatū to tramp and hunt in, and a stronghold for North Island native birds.",
  },

  "mount-ruapehu": {
    // seeing sources: 海拔 2797 米（LINZ Topo50，峰名 Tahurangi）；汤加里罗 1887 年赠地设立、新西兰第一个国家公园、自然与文化双重世界遗产；1953-12-24 坦吉瓦伊事故（火口湖堤坝溃决 → 约 34 万立方米泥流 → 铁路桥冲毁 → 151 人遇难，新西兰史上最严重铁路事故，2 级 NZ History）。**「Mount Ruapehu」未见 NZGB 更名或加长音符记录，沿用现行拼写。** **正文没有写死火山警戒级别 —— 这是对的**，那是随时会变的量。2026-09-09 核，本轮无需改动。
    seeing:
      "Mount Ruapehu stands on the volcanic plateau of the central North Island at 2,797 m — the highest peak in the North Island and an active volcano, with a summit Crater Lake that heats up and changes colour with volcanic activity. Together with the young cone of Ngāuruhoe and the older, multi-craered Tongariro alongside it, it makes up Tongariro National Park — New Zealand's first national park (established 1887) and a dual natural and cultural World Heritage Site.",
    formation:
      "Ruapehu is an andesitic stratovolcano at the southern end of the Taupō Volcanic Zone, built by magma rising where the Pacific plate subducts beneath the North Island. Repeated eruptions and collapses have given it several overlapping cones. Its Crater Lake is the key to its behaviour: the water connects to the hot volcanic conduit, and an eruption or a collapse of the lake rim can send a volcanic mudflow (lahar) racing down the valleys.",
    observation:
      "From the air Ruapehu is a broad, ragged, permanently snow-capped volcano on the plateau, with a grey-green Crater Lake in the summit hollow and deep channels cut radially by lahars and snowmelt. Immediately to the north is the near-perfect cone of Ngāuruhoe, and beyond it the low, multi-craered Tongariro. The three mountains are surrounded by dark lava flows and alpine desert.",
    distinguish:
      "Ruapehu and Taranaki are both North Island andesitic stratovolcanoes, but Ruapehu is a cluster of overlapping cones with a summit crater lake and year-round skiable snow, while Taranaki is an isolated, symmetrical single cone. Compared with the collapsed rhyolitic calderas of Taupō and Rotorua, Ruapehu is a volcano built up rather than dropped down.",
    concept:
      "Ruapehu is a classic place to understand lahars: a volcano need not erupt to be deadly — once the summit lake water and snow are disturbed, they mix with volcanic debris and pour down fixed valleys at speed, reaching the lower slopes in tens of minutes. The national park has a lahar warning system for this reason. A common misconception is to treat a snow-covered volcano as an ordinary snow mountain.",
    history:
      "In 1887 the paramount chief of Ngāti Tūwharetoa, Horonuku Te Heuheu Tūkino IV, placed these sacred mountains in the care of the nation on condition that a national park protect them — making this one of the earliest national parks in New Zealand and the world. On Christmas Eve 1953 a lahar from Ruapehu's Crater Lake destroyed a rail bridge, causing the Tangiwai disaster. Today there are ski fields on the mountain, and the Tongariro Alpine Crossing below it is New Zealand's most popular day walk.",
  },

  "mount-taranaki": {
    seeing:
      "Mount Taranaki (official name Taranaki Maunga; formerly Mount Taranaki or Mount Egmont) stands alone on the Taranaki peninsula of the western North Island at 2,518 m — a near-perfectly symmetrical volcanic cone, visible in full from the streets of New Plymouth on a clear day. Its resemblance to Mount Fuji has made it a filming location for several productions.",
    formation:
      "Taranaki is an andesitic stratovolcano, built up by successive eruptions of lava and volcanic debris, and is the youngest of a chain of volcanoes in the district that get progressively younger from north to south. It has undergone several large collapses whose debris blankets the lower slopes as a gently sloping ring plain; geologists generally regard it as capable of erupting again.",
    observation:
      "From the air the most striking thing about Taranaki is the near-circular line at its foot: a forest boundary drawn in 1881 at a radius of about 9.6 km from the summit, with dark native forest inside and neat dairy pasture outside, the edge as sharp as if drawn with a compass. The summit usually carries a small patch of snow and a shallow crater, with rivers running evenly off the slopes in a radial pattern.",
    distinguish:
      "Taranaki and Ruapehu are both North Island andesitic volcanoes, but Taranaki is an isolated, symmetrical single cone well away from the main axis of the Taupō Volcanic Zone, whereas Ruapehu sits near the axis and is a cluster of overlapping cones with a summit crater lake. Taranaki's symmetry reflects its youth — it has not yet been deeply eroded.",
    concept:
      "The circular forest boundary at Taranaki's foot is an extreme example of a hard land-use edge: a line drawn purely for administrative reasons that, decades later, shows up on the ground — and from satellites — as an abrupt change in vegetation. A common misconception is to read that circle as a natural treeline; it is the park boundary set in 1881.",
    // history sources: 公园官方名：**2025-04-01 起由 Egmont National Park 改为 Te Papa-Kura-o-Taranaki**（自然保护部官网，级别 1）；山的官方名 2025-04-03 由 NZGB 公告定为 **Taranaki Maunga**（无英文对应名，是新西兰首例仅以毛利语命名的国家公园/山峰）。2026-09-09 核。
    //   https://www.doc.govt.nz/parks-and-recreation/places-to-go/taranaki/places/te-papa-kura-o-taranaki/
    //   **这一条的形状：同一轮立法改了两个名字，正文只跟进了其中一个** —— 上一句刚写完山改名，下一句还用着公园的旧名。与英国 AONB → National Landscape 那次（写下待办却没执行）不同，这次是**同一段文字里的两个名字，改了一个漏了一个**。
    //   2025 年立法赋予山法人地位（由 Te Kāhui Tupua 实体代表）—— 作为制度事实客观陈述、不展开评价，**零争议红线复核通过**。1881 年以峰顶为圆心、半径约 9.6 公里划定的森林保留地边界核实无误。
    history:
      "Mount Taranaki is a revered ancestor and a core of identity for the local iwi (such as Taranaki and Te Āti Awa). In 2025 New Zealand passed legislation making Taranaki Maunga the mountain's official name and granting it legal personhood, represented by an entity called Te Kāhui Tupua, with iwi and the Crown jointly speaking for its interests. Established in 1900, the park is New Zealand's second-oldest; the same 2025 legislation renamed it from Egmont National Park to Te Papa-Kura-o-Taranaki.",
  },

  "tasman-glacier": {
    // seeing sources: 长约 23.5 公里（20 世纪长期约 28 公里，1990 年代起加速退缩），新西兰最长冰川；塔斯曼湖 1970 年代形成，1990 年约 1.7 平方公里 → 2020 年约 7.1 平方公里（3 级，NASA Earth Observatory 等交叉）。**正文写的是「从 1970 年代开始出现、现在还在扩大」而不是一个面积数 —— 这正是处理会过期量的第三条路（只写趋势、不写数字），判定不改。** 2026-09-09 核。
    seeing:
      "The Tasman Glacier is the largest glacier in New Zealand, about 23 km long, flowing down from the high snowfields on the eastern side of Aoraki / Mount Cook, within Aoraki / Mount Cook National Park. Its lower part is buried under thick rock debris and looks like a grey-black river of rubble; at its end is a terminal lake that appeared in the 1970s and is still growing, with icebergs calved from the glacier floating in it.",
    formation:
      "The Tasman Glacier forms from snow that piles up high in the Southern Alps, compacts into ice, and flows slowly down the valley under gravity. As it moves it scrapes the valley walls and floor and carries rock from the slopes onto its surface; in its lower, warmer reach the ice melts out and the debris is left behind and thickens into a debris-covered tongue. In recent decades warming has meant more melt at the end than input, opening the terminal lake.",
    observation:
      "From the air the upper Tasman Glacier is a broad, crevassed white ice stream fed by tributary glaciers from both sides; the middle and lower reaches turn grey, the ice hidden under lengthwise medial-moraine stripes and a full cover of rubble, so it is easily mistaken for an ordinary scree valley; at the very end is a grey-green glacial lake ringed by high moraine ridges.",
    distinguish:
      "The Tasman and the Franz Josef and Fox glaciers are all in the Southern Alps, but the Tasman is on the drier eastern side, low-gradient, its lower part smothered in surface debris, ending in a lake; Franz Josef is on the wet western side, steep, its ice clean blue-white, pushing into rainforest. Debris-covered ice melts more slowly, which is why the Tasman's tongue can stretch so far.",
    concept:
      "The Tasman is a case study in debris cover and glacial lakes: a thick enough layer of rock on the ice acts like a blanket, slowing the melt of the ice beneath and letting the tongue stretch further and dirtier; but once the terminus thins past a point, meltwater ponds behind the moraine as a lake, and the lake then undercuts the tongue and speeds its break-up. A common misconception is to read a rubble-covered glacier terminus as having no ice left.",
    history:
      "The high country the Tasman Glacier lies in is the traditional area of the South Island iwi Ngāi Tahu. From the late 19th century the Mount Cook village became the centre of New Zealand mountaineering and alpine guiding. In the 20th century the flat upper Tasman was used for a time as a landing ground for ski-planes; today there are boat trips on the terminal lake to see the icebergs up close.",
  },

  "franz-josef-glacier": {
    // seeing sources: 官方并名 Franz Josef Glacier / Kā Roimata o Hine Hukatere：《1998 年恩加伊塔胡索赔和解法》Schedule 96 法定条目（级别 1）。
    //   https://www.legislation.govt.nz/act/public/1998/97/en/2022-07-01.pdf
    //   1983–2008 年前进、2008 年后快速退缩（NIWA / 现 Earth Sciences New Zealand，级别 1）——**正文没写死退缩量，判定不改**。2026-09-09 核。
    //   https://niwa.co.nz/news/explaining-new-zealands-unusual-growing-glaciers
    seeing:
      "Franz Josef Glacier (Māori: Kā Roimata o Hine Hukatere, \"the tears of Hine Hukatere\") is on the western slope of the Southern Alps, dropping steeply from its high snowfield to only a few hundred metres above sea level, near the temperate rainforest of the West Coast. Like the neighbouring Fox Glacier, it is one of the few glaciers in the world that reaches down into rainforest. It has retreated markedly since the late 2000s.",
    formation:
      "The westerlies drive large amounts of moisture up the western slope of the Southern Alps, and tens of metres of snow can accumulate high up in a year, quickly compacting into ice. The ice flows fast down the steep valley, delivering a large volume of ice to low elevations — so low that it only fully melts at rainforest level. Because its input and flow are so vigorous, the glacier responds very sensitively to temperature and precipitation, advancing or retreating a kilometre in just a few years.",
    observation:
      "From the air Franz Josef Glacier is a blue-white, heavily crevassed icefall wedged in a dark green rainforest valley, a striking contrast; the end of the tongue is a spread of grey rubble and a milky meltwater river that soon joins the braided rivers of the West Coast and flows into the Tasman Sea. Upstream is a broad snowfield ringed by snowy peaks.",
    distinguish:
      "The difference between Franz Josef and the Tasman Glacier is textbook: Franz Josef is on the windward western slope — steep, fast, clean ice, plunging into rainforest, advancing and retreating dramatically; the Tasman is on the leeward eastern side — low-angle, slow, its lower part buried in rubble, its end retreated into a lake. Compared with the high-altitude glaciers of the Alps or Himalaya, this glacier's terminus is remarkably low.",
    concept:
      "Franz Josef Glacier is a case study in a glacier as a climate amplifier: its input and flow speed are both large, so a few years of snowfall or temperature change can move the tongue a kilometre, far faster than most glaciers respond. A common misconception is that glaciers only ever retreat — in the 20th century Franz Josef made several clear re-advances before shifting to rapid retreat.",
    history:
      "The glacier's Māori name comes from a legend: the lover of the maiden Hine Hukatere died in the mountains, and her tears froze into the glacier as they ran down the valley. In 1865 the geologist Julius von Haast named it after the Austrian emperor. Hotels and tourism developed here from the early 20th century; today most visitors reach the ice by helicopter, because the terminus has retreated beyond easy walking distance.",
  },

  "fiordland": {
    // seeing sources: Te Wāhipounamu（南西新西兰）1990 年列入 UNESCO 世界自然遗产，DOC 官网用此名（级别 1）；峡湾国家公园约 12,607 平方公里，新西兰面积最大。
    //   https://www.doc.govt.nz/te-wahipounamu
    //   **「Te Rua-o-te-Moko」是旅游业惯用名、未经 NZGB 官方地名程序确认，正文没有采用 —— 本轮专门核过这一点，处理得当。** 14 条峡湾（另有「15 个已命名海洋峡湾」的口径，差异在计入方式，不构成矛盾）。2026-09-09 核，本轮无需改动。
    seeing:
      "Fiordland, in the south-western corner of the South Island, is the largest national park in New Zealand and part of the Te Wāhipounamu World Heritage Area. It is almost roadless and unpopulated — a block of high mountains cut to pieces by glaciers, where 14 long, deep fiords run inland from the Tasman Sea, the mountains are densely forested, waterfalls are everywhere, and it is one of the wettest places on Earth.",
    formation:
      "Fiordland's bedrock is hard granite and gneiss. During the ice ages huge glaciers flowed down pre-existing river valleys toward the sea, gouging the valley floors below sea level and grinding the walls to sheer U-shapes. After the ice melted and sea level rose, the sea flooded these over-deepened glacial valleys to make the fiords — often with a shallower \"sill\" at the mouth where glacial deposition or weaker erosion left a rise.",
    observation:
      "From the air Fiordland is a near-black expanse of green mountains sliced by straight, narrow, deep-blue fiords; the fiord walls are nearly vertical, hung with countless waterfalls, especially after rain. The tops are bare pale granite with small remnant glaciers, and the forest clings thinly to the rock — heavy rain often strips whole sheets of it away, leaving pale \"tree avalanche\" scars.",
    distinguish:
      "A fiord is not an ordinary bay: it is a drowned glacial valley — deep, straight, steep-walled, with a sill at the mouth. The origin is the same as Norway's fiords, but this southern block is far more remote and almost uninhabited. Compared with a single fiord like Milford, \"Fiordland\" refers to the whole mountain block that holds all 14 fiords.",
    concept:
      "Fiordland is a case study in what a fiord is: not carved by a river or by waves, but a river valley deepened by a glacier below sea level and then flooded by the sea after the ice went. To tell whether a waterway is a fiord, look at whether it is deep and straight with steep walls and a mouth that actually shallows. A common misconception is to call any long narrow inlet a fiord.",
    history:
      "Fiordland's fiords were long a seasonal destination for South Island Māori gathering pounamu (greenstone), sealing and taking birds, and Dusky Sound has a rich oral history. Cook's ship anchored for a long resupply in Dusky Sound in the 1770s. The 19th century saw brief attempts at settlement and whaling here, all defeated by the remoteness and the rain. Today places like Doubtful Sound can only be reached by crossing Lake Te Anau and transferring.",
  },

  "milford-sound": {
    // seeing sources: 官方并名 Milford Sound / Piopiotahi（恩加伊塔胡法 Schedule 96，级别 1）；最大长度约 15.1 公里；教冠峰（Mitre Peak / Rahotu）**LINZ Topo 官方高程 1683 米** —— 旅游站流传的 1692 米是非权威数据，**以 LINZ 为准，正文写对了**；年降雨约 200 天（另有 182 天/年的精确统计，同一量级）。2026-09-09 核，本轮无需改动。
    seeing:
      "Milford Sound (Māori: Piopiotahi), in the north of Fiordland, is the only fiord in the region reachable by road, and so one of the best-known natural attractions in New Zealand. The fiord is about 15 km long, walled by near-vertical cliffs; the most prominent feature, Mitre Peak / Rahotu, rises straight from the water to about 1,683 m. It rains here on more than 200 days a year, and after rain the cliffs run with rows of waterfalls.",
    formation:
      "Milford Sound is a glacial valley flooded by the sea. During the ice ages a glacier flowed north-west down this valley toward the Tasman Sea, gouging the hard-granite floor below sea level and grinding the walls to cliffs. After the ice retreated and the sea rose it became a fiord. Large amounts of fresh water (rain and waterfalls) float on top of the salt water, forming a dark, tannin-stained surface layer that gives the deep water an unusual \"deep sea in shallow water\" ecology.",
    observation:
      "From the air Milford Sound is a deep-blue waterway running straight from the inland mountains to the open sea, flanked by knife-edge cliffs and hanging valleys pouring waterfalls, with Mitre Peak standing like an isolated fang on the south side. The mouth faces the Tasman Sea, open and often swell-washed; the inner end has the boat wharf and a small patch of flat ground.",
    distinguish:
      "Milford Sound and Doubtful Sound are both in Fiordland and both drowned glacial valleys, but Milford is narrow, short, steeper-walled and road-accessible, with the most visitors; Doubtful is longer, more branched and quieter. Unlike an ordinary river-mouth bay, Milford has no sediment or delta from a large river — the water is deep right at the entrance.",
    concept:
      "Milford Sound shows the freshwater cap that is characteristic of fiords: high mountains, heavy rain and fast runoff put so much fresh water in that it floats on the seawater before it can mix, forming a layer a few metres thick that is dark and dimly lit, letting some animals that normally live in the deep sea appear in very shallow water. A common misconception is that the water in a fiord is as salty and clear as the open sea.",
    history:
      "The Māori name Piopiotahi (\"a single piopio bird\") comes from local tradition. The fiord was long a place Māori came to gather pounamu, and because of its narrow entrance early European navigators passed it repeatedly without noticing it. In the late 19th century a walking track over the Mackinnon Pass linked it to the Te Anau side (today's Milford Track); after the Homer Tunnel opened in 1954 the road reached the fiord and tourism grew quickly.",
  },

  "lake-taupo": {
    // seeing sources: **英文正文已带长音符 Lake Taupō，符合 2019-06 NZGB 核准 824 个毛利地名（含长音符）的现行拼写**（2 级）；面积 616 平方公里、新西兰最大湖。欧鲁阿努伊超级喷发约 2.55–2.7 万年前（不同研究测年略有差异）；Hatepe 喷发**公元 232±10 年**（树轮碳十四 wiggle-matching，Hogg et al. 2019 / Lowe & Pittari 2021 综述，为当前共识）。**层级复核：陶波湖是陶波火山带里的一个独立破火山口，与火山带本身、与罗托鲁瓦破火山口都没有混淆** —— 这一批专门查了嵌套压层问题，未发现。2026-09-09 核，本轮无需改动。
    seeing:
      "Lake Taupō sits at the centre of the North Island, about 616 km² in area — the largest lake in New Zealand. Its shape and its lake-bed topography still carry the marks of a volcano — because it fills a large volcanic caldera. The Waikato River, New Zealand's longest, flows out of the lake's north-eastern corner. The lake district is an important place for recreation and trout fishing.",
    formation:
      "Lake Taupō formed when the Taupō volcano erupted enormously and repeatedly, emptied its underground magma chamber, and the ground surface collapsed over a wide area to make a caldera that then filled with water. The Oruanui eruption about 25,500 years ago was one of the largest volcanic events on Earth in the last 100,000 years, blanketing the central North Island; an eruption around 232 CE was also among the most violent anywhere in the last few thousand years, destroying the surrounding forest in one event. The lake bed still has geothermal activity and slow ground movement.",
    observation:
      "From the air Lake Taupō is a nearly circular large lake on the volcanic plateau, with several straight-edged sections of shore controlled by faults, and shores that are mostly pale pumice cliffs and beaches. To the south, across a stretch of plateau, are the snow-capped volcanoes Ruapehu and its neighbours; at the north-eastern outlet is the town of Taupō and the first rapids of the Waikato River.",
    distinguish:
      "Lake Taupō is completely unlike the glacial ribbon lakes of the South Island (Wakatipu, Wānaka): the South Island lakes are gouged by glaciers — deep and narrow, boxed in by high mountains; Lake Taupō is a volcanic collapse — round and wide, ringed by fairly gentle volcanic plateau. Compared with an ordinary volcanic crater lake, Taupō's caldera is far larger — it is what a \"super-eruption\" leaves behind.",
    concept:
      "Lake Taupō is a case study in a caldera: when an eruption drains the magma chamber below, the overlying surface loses its support and subsides as a whole, dropping a basin far larger than any crater, which fills with water. To tell whether a lake is a caldera lake, look for a large round shape ringed by arc-shaped faults and volcanic-debris terraces. A common misconception is to treat Lake Taupō as a \"dead crater\" — the magma system beneath it is still active.",
    history:
      "The lake's full Māori name, Taupō-nui-a-Tia, means \"the great cloak of Tia\", Tia being the ancestor of the Ngāti Tūwharetoa people said to have discovered the lake. The lake district has long been the heartland of that iwi, and rights to the lake bed and water are held by the iwi under agreement. Trout introduced in the 19th century made this a world-famous fishing destination; today the shores have geothermal power stations and many holiday homes.",
  },

  "lake-wakatipu": {
    // seeing sources: **官方现行地名仍是单一 Lake Wakatipu**：「Whakatipu Waimāori」不在恩加伊塔胡法 Schedule 96 的地名变更表内（级别 1），只见于同法的「法定确认」条文与 LAWA 资料页（2 级）——**尚未成为 NZGB 官方并名，正文没有误加**。长度约 75.2–80 公里（测量基准差异）、深度约 377.5–380 米（LAWA 与 Te Ara/Britannica 一致；维基单出的 420 米未见区域机构佐证，未采信）。定振周期约 27 分钟、振幅约 20 厘米，是新西兰最著名的湖泊定振案例。2026-09-09 核，本轮无需改动。
    seeing:
      "Lake Wakatipu is a Z-shaped (or \"lightning-bolt\") glacial ribbon lake in the South Island, about 80 km long, with Queenstown on one of its bends. It is up to about 380 m deep, and its floor lies below sea level. The water is clear and cold, and it is ringed by steep schist mountains such as the Remarkables.",
    formation:
      "Lake Wakatipu was gouged out by a huge valley glacier during the ice ages. The glacier followed structural weaknesses between the schist mountains, gouging the floor deep and irregular — the bends are where ice streams merged and cut down hardest — and after the ice retreated the hollow filled with water. Because it was gouged below sea level, it is a classic over-deepened glacial lake.",
    observation:
      "From the air Lake Wakatipu is a deep-blue, sharply double-bending ribbon of water between mountains, its shores brown-grey schist slopes dropping almost straight to the water, with flat land and deltas only at a few places such as Queenstown and Glenorchy. The north-western end opens into the broad gravel valleys of the Dart and Rees rivers, leading up toward the Southern Alps.",
    distinguish:
      "Lake Wakatipu and the North Island's Lake Taupō are both large lakes, but Wakatipu was gouged by a glacier — narrow, deep, bent, boxed in by high mountains; Taupō is a volcanic collapse — round, wide, gently surrounded. Wakatipu is of the same kind as Wānaka and Te Anau, only its Z-shaped bends are especially pronounced.",
    concept:
      "Lake Wakatipu is a case study in an over-deepened glacial lake: unlike a river, which can only flow downhill, a glacier can gouge its valley floor below sea level under its own weight, making a closed deep hollow; once the ice melts the hollow becomes a lake, and the floor being below sea level does not let the sea in, because it is ringed by mountains and not connected to the ocean. A common misconception is that a lake floor must be higher than the nearby sea.",
    history:
      "In Māori tradition the Z-shaped hollow of Lake Wakatipu is the curled body of the giant Matau, burned to death, and the lake's periodic rise and fall is his heart still beating — this is in fact a seiche, a whole-lake oscillation with a period of about 27 minutes. Gold was found by the lake in 1862, and Queenstown grew from that; today it is the centre of adventure tourism in New Zealand.",
  },

  "lake-tekapo": {
    // seeing sources: **Lake Tekapo 仍是 NZGB 唯一现行官方名**：2019 年 NZGB 曾拟把「Takapō」作为非官方收录名加入地名典，麦肯齐区议会 2021 年起本地宣传用双名，**但都不是 NZGB 的正式地名变更程序**（Takapo 在恩加伊塔胡法里只出现在「法定确认」条文，不在 Schedule 96 的地名变更表）。**正文保持单名是更保守也更准确的做法，判定不改。**
    //   ⚠️ **这是一个正在推进中的更名议题，下一轮回来复核 NZGB 是否已正式公告** —— 与塔拉纳基那条（2025 年真的落地了）是同一类，只是还没走完程序。岩粉散射致色为标准解释。2 级，2026-09-09 核。
    seeing:
      "Lake Tekapo, in the Mackenzie Basin of the South Island interior, is a lake dammed by a glacier and its moraine. It is widely known for its colour — an opaque milky blue-turquoise. The Church of the Good Shepherd on its southern shore is one of the most photographed buildings in New Zealand. The area is the Aoraki Mackenzie International Dark Sky Reserve, with very dark, clear night skies.",
    formation:
      "The valley Lake Tekapo lies in was once occupied by a large glacier from the Southern Alps. The glacier ground the bedrock into extremely fine \"rock flour\"; after the ice retreated this rock flour was carried into the lake by meltwater, and it stays suspended for a long time without settling, scattering the blue-green light of sunlight back out, so the lake looks milky blue. The glacier also left a moraine ridge across the valley mouth, acting as a natural dam.",
    observation:
      "From the air Lake Tekapo is a vivid blue-green sheet of water in a tawny tussock-grass basin, in strong contrast with its surroundings; the northern end connects to braided rivers and snow mountains higher up, the southern end to the moraine ridge and the town. The neighbouring Lake Pukaki is larger and even more vividly coloured, with Aoraki / Mount Cook at the head of the lake.",
    distinguish:
      "Lake Tekapo and Queenstown's Lake Wakatipu are both South Island glacial lakes, but Tekapo is in an open, dry high basin — shallow, its colour especially vivid from rock flour; Wakatipu is boxed between steep high mountains, extremely deep, its water a darker blue. Tekapo's milky blue is only pronounced in lakes that have an active glacier still supplying the \"flour\".",
    concept:
      "Lake Tekapo is a case study in glacial rock flour: a glacier grinds bedrock like sandpaper, producing particles fine enough (micron-scale) to stay suspended for months once in the water, selectively scattering blue-green light, so the lake seems to \"glow\". To tell whether a lake's colour is from rock flour, look at whether there is an active glacier upstream and whether the colour has that opaque, milky quality. A common misconception is that the colour is from dissolved minerals or algae.",
    history:
      "The Mackenzie Basin is named after James Mackenzie, a shepherd who in the 1850s grazed stolen sheep here. It is dry, with large day-night temperature swings, and has been high-country sheep-station land since the 19th century. In the 20th century Tekapo, Pukaki and other lakes were incorporated into the Waitaki hydro scheme and their levels are regulated. In 2012 the area was designated a Dark Sky Reserve and astro-tourism grew.",
  },

  "lake-wanaka": {
    // seeing sources: 第四大湖；瓦纳卡湖面 300 米 vs 哈威亚湖面 348 米，**水位差约 48 米**，正文的「几十米」成立（3 级）。**英文侧长音符 Wānaka 与注册表 nameEn 一致 —— 本轮专门核过。** 「Clutha River / Mata-Au」这个并名沿用上一批已核实的法定写法。2026-09-10 核，本轮无需改动。
    seeing:
      "Lake Wānaka, in Central Otago in the South Island, is a glacier-carved ribbon lake — the fourth-largest lake in New Zealand by area — with the resort town of Wānaka on its shore, second only to Queenstown as a holiday base. Its water drains south via the Clutha River / Mata-Au. It is separated from Lake Hāwea to the east by a very narrow isthmus (locally \"the Neck\"), yet the two lake surfaces differ by tens of metres in height.",
    formation:
      "Lake Wānaka and Lake Hāwea are two parallel troughs gouged by separate glaciers under the same icefield, each filling with water after the ice retreated. The narrow isthmus between them is a ridge of moraine and bedrock that was never cut through between the two glaciers. Gravel brought in by the Matukituki and other rivers at the north end is building deltas into the lake.",
    observation:
      "From the air Lake Wānaka is a deep-blue, several-armed ribbon lake between brown schist mountains, its shoreline irregular with several peninsulas and small islands (the \"lone willow tree\" standing in the lake is a popular photo spot). To the north the lake arms reach up into the high mountains toward Mount Aspiring / Tititea; to the south, the lake outlet is the head of the Clutha River and the town of Wānaka.",
    distinguish:
      "Lake Wānaka and Queenstown's Lake Wakatipu are neighbours and both glacial ribbon lakes, but Wānaka has more arms, slightly gentler surrounding mountains and feels more open; Wakatipu is a single Z-shaped deep trough. Wānaka and Hāwea being \"one isthmus apart but at different levels\" is a good example of glacial valley division.",
    concept:
      "The \"twin lakes\" Wānaka and Hāwea show that glaciers work along separate individual troughs: two neighbouring glaciers each gouge their own valley to different depths, and the narrow ridge left between them separates the two lakes, so two large lakes at different levels can lie within a few hundred metres of each other. A common misconception is that neighbouring lakes must be at the same level and connected underground.",
    history:
      "The Wānaka area was a node on the Māori routes to and from the interior for gathering pounamu. The 1860s gold rush and the large sheep stations that followed brought European settlers. From the mid-20th century Wānaka grew from a quiet farming town into a resort town for skiing, climbing and skydiving; a hydro station was later built on the upper Clutha.",
  },

  "canterbury-plains": {
    // seeing sources: 尺寸：长约 180 公里（新西兰官方百科 Te Ara，级别 1，仅确认长度）、最宽处约 70 公里（多方 3 级收敛）。原文的「宽约 50 公里」比实际窄约 30–40%、且查不到权威支撑。2026-09-10 核。
    //   https://teara.govt.nz/en/canterbury-region/page-3
    //   ⚠️ **Te Ara 没有给出精确宽度值**，70 公里来自 3 级来源的收敛，下一轮若能拿到更高级别来源应回来复核。
    //   **「冲积扇群叠合而成」这个成因本轮专门核过：正文写对了** —— 是拉凯亚 / 怀马卡里里 / 朗伊塔塔等河的冲积扇并合，不是普通的曲流冲积平原（学术文献，级别 1）。2010–2011 年地震序列的液化与河口软土地基的关联也核实无误。
    seeing:
      "The Canterbury Plains, on the east coast of the South Island, are the largest continuous area of flat land in New Zealand, running from the foothills of the Southern Alps to the Pacific, about 180 km long and up to about 70 km wide. They are an important farming region and the site of Christchurch, one of the country's largest cities. Several braided rivers rising in the mountains cut straight across the plains to the sea.",
    formation:
      "The Canterbury Plains are built of gravel carried down by several rivers from the Southern Alps (the Rakaia, Waimakariri, Rangitata and others): each river spreads a huge alluvial fan at its mountain mouth, and the neighbouring fans coalesce into one broad gravel plain sloping gently to the sea. The ice ages produced especially large amounts of glacially ground debris, the main source of the plains' gravel.",
    observation:
      "From the air the Canterbury Plains are a large, flat, gridded patchwork of farmland, split by several wide, pale, braided river channels — rivers that divide into many strands over the gravel and constantly shift course. The western edge rises abruptly into the Southern Alps, the eastern edge is a straight coastline; the Christchurch area, once swamp and lagoon, has soft ground.",
    distinguish:
      "The Canterbury Plains are unlike the great silt plains of the Yellow River or Ganges: they are a gravel alluvial-fan plain — coarse-grained, highly permeable, with braided rather than meandering rivers; groundwater is abundant but the surface dries out easily. Compared with New Zealand's other small coastal plains, they are far larger — a true \"great plain\".",
    concept:
      "The Canterbury Plains are a case study in a coalesced alluvial-fan plain: each river spreads its own gravel fan at the mountain front, the fans join sideways, and together they form one seaward-sloping plain. To recognise this kind of plain, look at whether it slopes evenly from the foothills to the sea, whether the rivers are braided, and whether digging in turns up all gravel. A common misconception is to assume every large plain is built of fine silt.",
    history:
      "The Canterbury Plains were a place where South Island Māori hunted moa and gathered, and there was extensive dry, flammable grassland. In 1850 the Canterbury Association organised a large planned settlement of British migrants here for sheep and wheat farming. From the 20th century large-scale irrigation turned the dry grassland into dairy pasture. The 2010–2011 Christchurch earthquake sequence caused severe damage, linked to the soft, liquefaction-prone estuarine sediments there.",
  },

  "mackenzie-basin": {
    // seeing sources: 海拔：麦肯齐地区议会官方海拔清单 —— 普卡基湖区/特威泽尔约 470–532 米、特卡波湖面约 700–710 米，盆地跨度接近 450–720 米。级别 2（地方政府官方文件），2026-09-10 核。
    //   https://www.mackenzie.govt.nz/__data/assets/pdf_file/0010/742078/Elevations-of-the-Mackenzie-District-1.pdf
    //   **这是「中英两侧各写各的」在数字上的又一例**：英文写 500–700 米（贴近实况），中文写「约五六百米」（低估上限）—— 两侧各自都通顺，只有并排看才发现不一致。已把中文改成与英文一致。
    //   **「Te Manahuna」是常用毛利语名，正文只作「（毛利语 X）」平行标注、未声称官方并名 —— 本轮核实：NZGB 没有正式并名的公报证据，正文的处理是对的。** 2012 年 6 月获国际暗夜协会认定、James Mackenzie 1855-03-04 在此被抓获（「1850 年代」这个更宽表述成立）：均核实无误。
    seeing:
      "The Mackenzie Basin (Māori: Te Manahuna), on the eastern side of the Southern Alps, is a high basin ringed by mountains, at about 500–700 m elevation. It lies in the rain shadow of the mountains — dry and open, its floor covered in tawny tussock grassland dotted with the milky-blue glacial lakes Tekapo, Pukaki and Ōhau. Its night sky is very dark: it is the Aoraki Mackenzie International Dark Sky Reserve.",
    formation:
      "The Mackenzie Basin is a structural basin where the crust has dropped relatively along faults around its edges, and it was then repeatedly occupied and reworked by large glaciers from the Southern Alps during the ice ages. The glaciers gouged the lake basins, left large moraine ridges and outwash gravels across the floor, and after the ice retreated meltwater ponded in the hollows as a string of lakes. Ringed by high mountains, the basin gets only a few hundred millimetres of rain a year.",
    observation:
      "From the air the Mackenzie Basin is a pale-yellow open expanse ringed by snow mountains, with braided rivers and milky-blue lakes forming vivid blocks of colour; the ground shows parallel moraine ridges and dry former channels. The western side faces Aoraki / Mount Cook directly, with the head of Lake Pukaki looking straight up the highest part of the Southern Alps.",
    distinguish:
      "The Mackenzie Basin and Central Otago are both dry interior basins of the South Island, but the Mackenzie has been heavily reworked by glaciers — it has large lakes and moraine landforms and is higher and colder; Central Otago is a series of basins between schist fault blocks, with a more mature \"basin-and-range\" structure. The Mackenzie's lakes are milky blue because active glaciers upstream still supply rock flour.",
    concept:
      "The Mackenzie Basin is a case study in a rain-shadow basin: a moist airstream is lifted over the surrounding mountains and rained out on the windward slope, and by the time it crosses into the basin it is dry and warming as it descends — so within one country, annual rainfall can differ several-fold over a few tens of kilometres. A common misconception is that it must rain a lot near high mountains — the leeward side can be semi-desert.",
    history:
      "The Mackenzie is named after James Mackenzie, a shepherd who in the 1850s drove stolen sheep across the basin. It has long been high-country station land grazed with merino sheep. In the 20th century Tekapo, Pukaki and other lakes were incorporated into the Waitaki hydro scheme, with regulated levels and some water diverted between catchments. In 2012 the basin was designated a Dark Sky Reserve.",
  },

  "central-otago": {
    seeing:
      "Central Otago, in the interior of the South Island, is a dry region made of parallel schist mountain blocks and the down-faulted basins between them. It is known for the most \"continental\" climate in New Zealand — it can be very hot in summer and very cold in winter, and it has the country's lowest rainfall. Historically a goldfield, it is known today for stone fruit (apricots, cherries) and Pinot Noir wine.",
    formation:
      "Central Otago's bedrock is schist. Under crustal compression the schist broke along a series of parallel faults; some blocks were lifted into long, narrow ranges (the Dunstan, Pisa, Old Man and others), and the blocks between them dropped relatively into basins (the Manuherikia, Maniototo and others) — a range, then a basin, then a range: this alternating structure is called basin-and-range. The range tops still carry remnants of an ancient, gently rolling plateau surface.",
    observation:
      "From the air Central Otago is a set of long parallel ridges and wide valleys running north-east to south-west, the ranges pale-brown dry grass slopes often topped by bare schist tors, the valleys green with irrigated orchards and vineyards and a few winding rivers. The Clutha River and its tributaries string together several reservoirs.",
    // distinguish sources: 成因对比：美国盆岭省是**伸展构造**（地壳拉张、正断层塌陷，Geosphere/GSA，级别 1）；中奥塔哥是**挤压构造**（沿逆断层抬升，NZ Journal of Geology and Geophysics，级别 1）。2026-09-10 核。
    //   https://pubs.geoscienceworld.org/gsa/geosphere/article/20/5/1247/646605
    //   https://www.tandfonline.com/doi/abs/10.1080/00288306.2023.2176892
    //   **C7 的又一例，而且是「把外形相似当成机制相同」这一种** —— 更糟的是**同一条目的 `formation` 段自己就写着「地壳受挤压」**，两段互相打架而没人发现。这与奥克兰火山场那条（formation 给的判据被 observation 举的例子推翻）是同一形状：**条目内部的自相矛盾，逐段读不出来，要把六段并排读。**
    distinguish:
      "Central Otago's basin-and-range looks like the Basin and Range province of the western United States — alternating ranges and basins — but the mechanism is the opposite: the American province formed by crustal extension along normal faults, while Central Otago was pushed up by compression along reverse faults, at a much smaller scale and in schist. Compared with the Mackenzie Basin, Central Otago is more of a \"mature fault-block landscape\" with a whole series of ranges and basins; the Mackenzie is a single large basin deeply reworked by glaciers.",
    concept:
      "Central Otago is a case study in basin-and-range: when the crust is stretched or compressed it breaks into parallel blocks along faults, one rising into a range and the next dropping into a basin, giving alternating ranges and basins. To recognise this landscape, look at whether the ridges and basins are long, parallel and aligned in the same direction. A common misconception is to read these parallel valleys as river-cut — they are mainly fault-controlled.",
    history:
      "Central Otago was a route area for Māori travelling inland to gather pounamu and take birds. Gold found at Gabriels Gully in 1861 set off New Zealand's largest gold rush, with tens of thousands arriving within a few years and leaving many stone buildings and water-race remains. After the gold it became sheep-station country; by the late 20th century irrigation and the climate made it an important stone-fruit and wine region.",
  },

  "rotorua-caldera": {
    // seeing sources: 直径约 22 公里、陶波火山带最西北端唯一的单事件破火山口；喷出 340+ 立方公里 Mamaku 浮岩流纹质岩浆；年代 240,000±11,000 年（Gravley et al. 2007 —— 早期研究的约 22 万年已被这份数据取代）；莫科亚岛为喷发后隆起的流纹岩穹丘（<5 万年）。3 级转引，2026-09-09 核，本轮无需改动。
    seeing:
      "The Rotorua Caldera, on the North Island's volcanic plateau, is a circular basin formed by the collapse that followed a large eruption, about 22 km across, with Lake Rotorua occupying part of it. Around it is one of the most active geothermal areas in New Zealand — geysers, boiling mud pools, coloured silica terraces and steaming ground, which you can see and smell (the rotten-egg smell of hydrogen sulphide) right in the city.",
    formation:
      "The Rotorua Caldera is a rhyolitic volcanic centre within the Taupō Volcanic Zone. About 240,000 years ago a large eruption of pumice and ash emptied the magma chamber below and the surface collapsed into a caldera; the hollow later filled with water, and Mokoia Island in the middle of the lake is a rhyolite dome pushed up after the eruption ended. Hot rock still lies beneath the caldera, and groundwater heated by it rises along fractures to make the surface geothermal features.",
    observation:
      "From the air Rotorua is a near-circular shallow basin on the volcanic plateau, with Lake Rotorua and Mokoia Island in the centre and white steam columns rising from the southern shore and several bays. The city spreads along the southern shore, with the geothermal areas (Whakarewarewa and others) at and within its edge, showing bare pale silica ground and steam vents.",
    distinguish:
      "Rotorua and Taupō are both rhyolitic calderas of the Taupō Volcanic Zone, but Taupō is larger, younger and erupted more violently, and its lake is far bigger; Rotorua is smaller with an especially concentrated geothermal display. Compared with a built-up andesitic cone like Ruapehu, Rotorua is a rhyolitic caldera that dropped down rather than built up.",
    concept:
      "Rotorua is a case study in a geothermal system: the un-cooled rock body beneath the caldera is the heat source, rainwater seeps down and is heated, becomes less dense and rises, dissolving minerals on the way and depositing them as silica at the surface, forming a geyser where the channel is open and a mud pool where it meets a shallow pond. A common misconception is to read geothermal activity as a sign of imminent eruption — it is the normal, slow way a volcanic system sheds heat.",
    history:
      "Rotorua is the heartland of the Te Arawa confederation of iwi, whose people have used the geothermal heat for cooking, warmth and bathing for centuries. Mokoia Island is the setting of the well-known love story of Hinemoa and Tūtānekai. In the late 19th century the nearby Pink and White Terraces were a famous attraction in the southern hemisphere, destroyed by the 1886 Tarawera eruption. In the 20th century Rotorua became one of New Zealand's earliest spa and geothermal tourism towns.",
  },

  "waikato-river": {
    seeing:
      "The Waikato River is the longest river in New Zealand, about 425 km. It flows out of Lake Taupō in the central North Island, passes first through a chain of hydro stations and reservoirs, then across the lowland basin around Hamilton, and finally reaches the Tasman Sea at Port Waikato, south of Auckland. The name Waikato means \"flowing water\" in Māori. It is an important source of water and electricity for the North Island.",
    // formation sources: 改道机制：约 2 万年前的大改道由陶波火山带**欧鲁阿努伊喷发（约 2.65 万年前）的火山碎屑沉积物逐步淤高堵塞原河道**所致（Hinuera 组研究），**不是熔岩流**。2 级，2026-09-09 核。
    //   https://www.nzgeo.com/stories/4664/
    //   **C7（因果解释错了）的又一例** —— 与内伊湖「熔岩压弯地壳」、阿摩里卡「没有被重新抬升」同类：都是把一个真实的地质过程换成了另一个听起来更直观的过程。
    //   长 425 公里、新西兰最长（Te Ara，2 级）；「八座水电站」与运营方的「八座水坝、九座电站」是坝/站计数口径不同，**不构成实质矛盾、判定不改**。
    formation:
      "The upper Waikato runs over the volcanic rock of the Taupō Volcanic Zone, and where hard rock narrows the channel it forms rapids and falls (Huka Falls is the river squeezing through a hard, pale volcanic-rock trough). The middle and lower river enter softer sedimentary rock and ash-covered lowland, where the channel broadens and meanders between fertile farmland. The Waikato has changed course in the past — volcanic sediment from Taupō's Ōruanui eruption gradually buried and blocked the old channel, switching it from flowing north-east (through what is now the Hauraki Plains) to its present north-westerly course to the sea.",
    observation:
      "From the air the upper Waikato is a string of long narrow blue reservoirs held between dams, set in the volcanic plateau; below Huka Falls is a stretch of white rapids; entering the Hamilton basin it becomes a strongly meandering brown river between green pasture; at its mouth it splits into several channels crossing black ironsand beaches to the sea.",
    distinguish:
      "The Waikato and the South Island's Clutha are the two longest rivers in New Zealand: the Waikato is longer, on the North Island, with a volcanic lake and volcanic rock upstream, and heavily dammed; the Clutha has a greater flow, on the South Island, with glacial lakes upstream. Compared with a sediment-laden river like the Yellow River, the Waikato does not carry much silt — its main \"resource\" is a steady flow and fall (for power).",
    concept:
      "The Waikato is a case study in river diversion: the direction a large river reaches the sea is not permanent — volcanic mudflows, lava and tectonic uplift can all block the old channel and force a new one. To tell whether a river has been diverted, look for a broad former valley that does not match the present drainage. A common misconception is to assume a large river has always followed its current course.",
    history:
      "The Waikato is the ancestral river of the Waikato-Tainui confederation of iwi, held in the highest regard and seen as a living whole (\"Te Awa o Waikato\"). In the 19th century the river was a front line of the colonial wars, with gunboats on it. A 2010 settlement established the Waikato River Authority, jointly involving iwi and local government, responsible for the river's health. Today there are eight hydro stations on the river, supplying power to the North Island.",
  },

  "clutha-river": {
    // seeing sources: 克卢萨 338 公里（全国第二长）、平均流量 614 立方米每秒（全国最大），新西兰官方百科 Te Ara（级别 1）。**「水量最大」与「长度第二」两个排名各自带了口径，正文写对了。** 上游三个大冰蚀湖的削峰填谷调节作用为标准水文学表述、因果方向正确。2026-09-10 核，本轮无需改动。
    //   https://teara.govt.nz/en/otago-places/page-12
    seeing:
      "The Clutha River (Māori: Mata-Au) has the greatest flow of any river in New Zealand and is the second longest (about 338 km). It flows out of Lake Wānaka, runs south through the dry schist gorges and several large reservoirs of Central Otago, and finally splits into two branches with a small delta to reach the Pacific near Balclutha in the south-east of the South Island.",
    formation:
      "The Clutha's water comes mainly from three large glacial lakes — Wānaka, Hāwea and Wakatipu — which act like reservoirs, smoothing out snowmelt and rain and releasing it steadily, so the Clutha's flow is large and steady. In Central Otago the river has to cut through a series of uplifted schist fault blocks, carving narrow deep rock reaches such as the Cromwell and Roxburgh gorges; only after leaving the hills for the coastal lowland does it widen and branch.",
    observation:
      "From the air the upper Clutha is a clear fast stream flowing out of Lake Wānaka, soon entering Lake Dunstan, held back by the Clyde Dam around Cromwell; then the Roxburgh reservoir; below the gorges the river widens to a blue-grey colour and near Balclutha splits into a north and a south branch enclosing a delta of farmland called Inch Clutha.",
    distinguish:
      "The Clutha and the Waikato are the two largest rivers in New Zealand: the Clutha has the greater flow (because three large glacial lakes regulate it), a shorter course, and more gorge sections; the Waikato is longer, on the North Island, with a volcanic lake upstream. The Clutha's delta is one of the few true branching river mouths in New Zealand.",
    concept:
      "The Clutha is a case study in lake regulation of a river: when there are large lakes upstream, snowmelt and storms enter the lake first and are \"flattened out\", then released steadily from the outlet, so the downstream flow varies much less within and between years than a river without lakes. A common misconception is that a high-flow river must also have big swings in level — a lake-regulated river is in fact very steady.",
    history:
      "The Mata-Au was an important route for South Island Māori travelling inland for pounamu, with a chain of seasonal camps along the valley. During the Central Otago gold rush of the 1860s the Clutha and its tributaries were the centre of gold mining and, later, large gold dredges, which turned over the riverbed and left broad gravel tailings. In the 20th century large hydro stations were built at Clyde and Roxburgh.",
  },

  "bay-of-islands": {
    // seeing sources: 144 座岛（新西兰旅游局官网，2 级；另有约 150 的计数口径）。《怀唐伊条约》1840-02-06 在此首次签署（新西兰政府官方历史网站，级别 1）。
    //   https://nzhistory.govt.nz/politics/treaty/location/waitangi/6-february-1840
    //   **零争议红线本轮逐句复核：通过** —— 正文只写「1840 年 2 月在此签署」这一史实本身，不评价条约内容、不涉及后续索赔与争议。「这份文件至今是新西兰宪制关系的基础」是客观陈述、无评价色彩，保留。
    //   **毛利语名的处理也正确**：Bay of Islands 常见的毛利语名有 Te Pēwhairangi / Ipipiri / Tokerau 三个并用，**未见 NZGB 把其中之一定为唯一官方并名**，正文没有做这个断言。
    seeing:
      "The Bay of Islands, in the north of the North Island, is a subtropical coast with about 140-odd small islands scattered through the bay. The climate is warm and the water clear, and this was one of the earliest areas of European settlement in New Zealand; the Treaty of Waitangi was signed here in 1840. Today it is known for sailing, dolphins and the historic towns of Paihia and Russell.",
    formation:
      "The Bay of Islands is a drowned-valley (ria) coast: this was once a set of river valleys running to the sea, and when sea level rose after the last ice age the sea flooded the valleys, so the hills and ridge tops between them became islands and peninsulas, giving an unusually intricate, branching coastline. The bedrock is mostly older sandstone and volcanic rock, fairly erosion-resistant, so many islands survive.",
    observation:
      "From the air the Bay of Islands is a scatter of green islands over deep-blue water, with winding channels and sheltered coves between them; on the land side, river mouths reach inland and mangroves line the mudflats. There are no large beaches or plains along this coast — it is \"half-drowned hill country\".",
    distinguish:
      "The Bay of Islands and the Marlborough Sounds are both drowned-valley coasts, but the Bay of Islands is subtropical, with more and smaller islands and lower relief; the Marlborough Sounds, at the top of the South Island, have deeper, longer waterways. Unlike the glacier-carved fiords of Fiordland, the Bay of Islands is drowned river valleys, with no sheer glacial cliffs.",
    concept:
      "The Bay of Islands is a case study in a ria coast: when sea level rises and floods a hilly area, the valley floors become inlets and the high ground between becomes islands and headlands, greatly increasing the length and intricacy of the coastline. To recognise this kind of coast, check whether the islands and peninsulas line up with the direction of the inland valleys. A common misconception is to see the islands as having \"risen\" from the sea, when in fact the land \"sank\" and was surrounded by water.",
    history:
      "The Bay of Islands area is the heartland of the Ngāpuhi people. From the late 18th century it was a base for whaling ships and missionaries, and Russell (formerly Kororāreka) was a rowdy port. In February 1840 representatives of the British Crown and many Māori chiefs signed the Treaty of Waitangi here, a document that remains the basis of New Zealand's constitutional relationship.",
  },

  "abel-tasman-coast": {
    // seeing sources: 阿贝尔塔斯曼国家公园 1942 年设立、22,530 公顷、新西兰面积最小的国家公园（3 级，与 DOC 资料一致）。花岗岩差异风化机制正确。**1642 年金湾冲突：正文只写冲突本身、未作评价，红线通过。** 2026-09-10 核，本轮无需改动。
    seeing:
      "The Abel Tasman Coast, at the top of the South Island, is the smallest national park in New Zealand. Its characteristic scene is weathered golden granite headlands, curving soft golden beaches, tidal estuary flats that look completely different at high and low water, and evergreen native forest behind. The coast track and sea kayaking are its signature.",
    formation:
      "The bedrock of this coast is mostly granite and marble. In the warm, wet climate the granite weathers along its joints — the feldspar breaks down to clay and the quartz grains are left, forming that warm gold-orange coarse sand; hard, unweathered granite stands out as rounded headlands and reefs. The coastline is the drowned edge of hill country, and the small rivers form broad tidal flats at their mouths.",
    observation:
      "From the air the Abel Tasman Coast is a string of north-east-facing arc-shaped coves, each with a golden beach, dark rock headlands between them; at low tide several river mouths expose large pale-yellow sand-and-mud flats with winding channels, and at high tide they become water again. The land is dense green low hills.",
    distinguish:
      "The Abel Tasman Coast's golden sand comes from weathered granite and is warmer in colour than ordinary quartz sand; this is different from both the black volcanic ironsand of New Zealand's West Coast and the grey gravel beaches of the east coast. Its scale is small — it is a \"delicate\" rather than a \"grand\" coast.",
    concept:
      "The Abel Tasman Coast is a case study in granite coastal weathering: in the same body of granite, the weathered-through parts crumble to golden sand that waves pile into beaches, and the unweathered parts remain as headlands and reefs, so the coast has a \"beach – rock headland – beach\" rhythm. A common misconception is that sand colour just reflects how \"clean\" it is, when it mainly reflects the parent rock.",
    history:
      "This coast is named after the Dutch navigator Abel Tasman — in 1642 he led the first known European expedition to reach New Zealand, and a clash with local Māori occurred in nearby waters. Along the coast there were Māori settlements, and in the 19th century granite quarrying and logging. The national park was established in 1942.",
  },

  "coromandel-peninsula": {
    // seeing sources: 科罗曼德火山带中新世至上新世（约 18–1.95 Ma），Coromandel Group（18–3.8 Ma，安山岩/英安岩）+ Whitianga Group（11–1.5 Ma，流纹岩）叠置（学术文献，级别 1）。1820 年 HMS Coromandel 号采购贝壳杉桅材。**与 banks-peninsula 条目的对比表述互相吻合 —— 本轮专门对照过两条目。** 2026-09-10 核，本轮无需改动。
    seeing:
      "The Coromandel Peninsula extends north from the north-east of the North Island as a narrow, rugged, mountainous peninsula. Down its centre runs a forest-covered volcanic-rock ridge, and both coasts are intricate, with rocky bays, arches and hot-water beaches. It is close to Auckland and a popular holiday and tramping area.",
    formation:
      "The Coromandel's mountains are left by Miocene-to-Pliocene volcanic activity: there was then a chain of andesitic, dacitic and rhyolitic volcanoes here, whose lavas and volcanic rocks were later uplifted and long eroded, leaving the hard volcanic skeleton that forms today's ridge. The volcanism also concentrated gold and silver veins in the rock, and there is still geothermal heat beneath parts of some beaches (dig a hole in the sand and hot water wells up).",
    observation:
      "From the air the Coromandel Peninsula is a dark-green ridge with a sharp crest and almost no flat land; the east coast faces the Pacific, with beaches, rock stacks and arches alternating; the west coast faces the Hauraki Gulf, with muddy shallows and mangroves. A string of small islands lies off the peninsula's tip.",
    distinguish:
      "The Coromandel Peninsula and Banks Peninsula are both eroded old volcanoes, but the Coromandel is a long, narrow \"ridge\" from a whole chain of uplifted, eroded volcanoes; Banks Peninsula is a round \"block\" of two overlapping shield volcanoes with drowned craters for harbours. The Coromandel's volcanoes are far older than the currently active Taupō Volcanic Zone and are completely extinct.",
    concept:
      "The Coromandel Peninsula is a case study in differential erosion of volcanic rock: in the same volcanic area, hard lava flows and plugs resist erosion and are left as peaks and sea arches, while soft volcanic debris and hydrothermally altered zones erode easily and are hollowed into bays and gullies. A common misconception is to read this rugged country as always having been mountains — it is in fact the interior of volcanoes \"stripped\" out.",
    history:
      "The name Coromandel comes from a Royal Navy ship that came here in 1820 to buy kauri spars. In the 19th century the area went through large-scale kauri logging and gold rushes in turn, and the hills still hold mine adits, dams and timber chutes. In the 20th century much of the forest land was returned to reserves and the peninsula turned to tourism.",
  },

  "punakaiki": {
    seeing:
      "Punakaiki, on the West Coast of the South Island, is part of Paparoa National Park, and is known for the \"Pancake Rocks\" — a stretch of sea cliff where the limestone has weathered into stacked thin layers, like piles of pancakes. At high tide with the right swell, several blowholes in the rock send seawater spouting high into the air.",
    // formation sources: 千层成因：**stylobedding 不是原始沉积层理**，而是石灰岩埋藏后经压溶作用沿一组大致平行的面重新分异出的次生构造；**为何按这样的间距周期性成带，学界至今仍有讨论**。新西兰地质学会 GeoTrips 专业资源（2 级）+ 3 级交叉，2026-09-09 核。
    //   https://www.geotrips.org.nz/trip.html?id=436
    //   **C7 的又一例，而且是「把成因说反了」这一种**：原文写「交替沉积」，实际是埋藏之后才分异出来的。正文现在保留了「至今没有定论」这句留白 —— 与英国阿勒峡「学界至今仍在讨论细节」是同一种处理。
    //   1987 年帕帕罗瓦国家公园设立、威斯特兰黑鹱（tāiko）全球唯一已知繁殖地：核实无误。
    formation:
      "The Pancake Rocks limestone formed on the sea floor about 30 million years ago. The stacked \"pancake\" banding is not original sedimentary bedding: it is a secondary structure formed after burial, when pressure-solution along a set of roughly parallel planes segregated the rock into alternating harder and softer bands — a feature geologists call stylobedding, and exactly why it forms at the spacing it does is still debated. Once the rock was uplifted above the sea, waves and rain eroded these bands differentially — the weaker ones hollowed out and cut back, the harder ones left standing proud, giving the \"pancake\" look. Waves have cut caves and vertical fissures at the cliff base, and seawater forced in spouts out of the openings above.",
    observation:
      "From the air Punakaiki is a small stretch of grey-white, heavily cut limestone sea cliff between the green rainforest of the West Coast and the blue of the Tasman Sea, with a platform walkway on top and wave-cut caves, blowholes and surging white water below. To the north are the limestone hills running down from the Paparoa Range.",
    distinguish:
      "Punakaiki's \"pancakes\" are differential layered weathering of limestone, quite different in origin from the columnar jointing of basalt (as at the Giant's Causeway) or the bedding of shale. Compared with the underground limestone caves of Waitomo, Punakaiki is a surface feature where coastal limestone has been \"cross-cut\" by the sea.",
    concept:
      "Punakaiki is a case study in differential weathering: a stack of alternating hard and soft layers erodes so that the soft layers retreat faster and the hard layers hold, and after tens of thousands of years this carves regular ridges and grooves into the cliff face. To check the origin, look at whether the ridges follow the rock's bedding planes exactly rather than following fractures. A common misconception is that the \"pancakes\" are separate slabs of stone stacked on top of each other.",
    history:
      "Punakaiki in Māori relates to a local river and spring. During the West Coast gold and coal era of the 19th century there were small settlements along this coast. Paparoa National Park was established in 1987, protecting the Pancake Rocks, the limestone gorges and the inland native forest together; this is also the only breeding ground of the rare Westland petrel.",
  },

  "marlborough-sounds": {
    seeing:
      "The Marlborough Sounds, at the very top of the South Island, are a maze-like coast of many inlets, waterways and peninsulas reaching far inland. They are not glacial fiords but a whole network of river valleys flooded by the sea. The waterways are so intricate and roads so difficult that many places can only be reached by boat; it is an area for green-lipped mussel farming and holidays.",
    formation:
      "The Marlborough Sounds are a drowned-valley coast: this block of land at the top of the South Island has slowly tilted and subsided toward the north through long tectonic movement, and at the same time sea level rose after the last ice age; the two together let the sea flood a whole dendritic system of river valleys, so the valley floors became long narrow inlets (locally \"sounds\") and the ridges between them became peninsulas and islands.",
    observation:
      "From the air the Marlborough Sounds are an extremely intricate set of deep-blue waterways in green hill country, like water-filled branches or blood vessels, with almost no straight coastline; the hillsides drop straight into the water and there is very little flat land. Queen Charlotte Sound and Pelorus Sound are the two longest main waterways.",
    distinguish:
      "Although \"Sound\" is in the English name, the Marlborough Sounds differ in origin from the glacial fiords of Fiordland: they are drowned river valleys, V-shaped in cross-section and branching like a tree; glacial fiords are U-shaped, deep and straight, with a sill at the mouth. They are of the same kind as the North Island's Bay of Islands, only with higher hills and longer, deeper waterways.",
    concept:
      "The Marlborough Sounds are a case study in a drowned dendritic drainage: a system of tributaries feeding into a main stem, once flooded by the sea, becomes a system of side-arms feeding into a main waterway — the plan shape is still that \"tree\". A common misconception is to see a \"Sound\" and assume it was carved by a glacier.",
    // history sources: Te Tau Ihu 全称 **Te Tau Ihu o Te Waka a Māui**，官方与地方机构一致释义为「毛伊独木舟的船头」（南岛在毛利传统里被视为一艘独木舟）。级别 2（区域发展政府机构），2026-09-10 核。
    //   https://www.growregions.govt.nz/regions/in-your-region/top-south-te-tau-ihu
    //   **层级处理本轮专门核过：正文是对的** —— Te Tau Ihu 指的是尼尔森 / 马尔堡 / 塔斯曼整个「南岛之北」，正文用「马尔堡峡湾**一带**」把它框成区域而不是峡湾的官方名，没有把两层压成一层。峡湾内部分水道另有各自的 NZGB 并名（Queen Charlotte Sound/Tōtaranui、Ship Cove/Meretoto），与「Marlborough Sounds」整体无关，不要混为一层。
    //   **下沉机制本轮专门核过：正文写对了** —— 学术文献确认下沉速率与倾斜方向确实向北北东增大，与冰后期海侵叠加，**是被淹没的河谷（ria）不是冰蚀峡湾**（Nicol et al. 2011，级别 1）。
    //   https://rsnz.onlinelibrary.wiley.com/doi/10.1080/00288306.2010.523079
    history:
      "The area (Māori: Te Tau Ihu, \"the prow of Māui's canoe\") is the traditional territory of several Māori iwi, and the waterways were important canoe routes. In 1770 Cook anchored repeatedly at Ship Cove in Queen Charlotte Sound to repair and resupply his ship. From the 19th century there was scattered logging, whaling and farming; today large areas of water are green-lipped mussel and salmon farms.",
  },

  "whakaari-white-island": {
    // seeing sources: 官方并名 **Whakaari/White Island**（1997 年 NZGB 核准，级别 1，GeoNet 页面确认）；最高点 321 米（约占火山总体量 30%）；2019-12-09 喷发 22 人遇难、此后登岛严格受限。**正文表述克制、未渲染，判定不改。**
    //   https://www.geonet.org.nz/about/volcano/whiteisland
    //   ⚠️ **时效提醒：2026 年 3 月再度出现小规模喷发**（警戒级别一度升至 3 级、后回落至 2 级）—— 与正文「新西兰最活跃的活火山」的定性一致，**正文没有写死警戒级别，所以这次活动不影响它的准确性**。这正是「警戒级别一律不写死」这条规矩的价值。2026-09-09 核。
    seeing:
      "Whakaari / White Island lies about 48 km offshore in the Bay of Plenty, off the North Island, and is an active volcano that rises above the sea. It is the most active volcano in New Zealand — steam and volcanic gas rise from it constantly, and its crater holds a strongly acidic hot lake. Because of the continuing volcanic hazard, access to the island has been strictly limited since an eruption in 2019 caused loss of life.",
    formation:
      "Whakaari is the part of the Taupō Volcanic Zone that extends north-east out to sea: the Pacific plate subducts beneath New Zealand here, driving magma up to build an andesitic-to-dacitic stratovolcano. The volcano is actually large — most of it is below sea level, and what shows above is only the crater area, about 320 m high. The crater wall has collapsed several times.",
    observation:
      "From the air Whakaari is a near-circular small island on deep-blue water, with a horseshoe-shaped crater open to the sea in the middle, its floor yellow-white sulphurous ground, a grey-green hot lake and a constantly rising plume of steam; the island's outer slopes are steep volcanic debris with almost no vegetation.",
    distinguish:
      "Whakaari and Ruapehu are both andesitic volcanoes of the Taupō Volcanic Zone, but Whakaari is almost entirely under the sea with only its crater showing, and has no snow; Ruapehu is a high mountain volcano on land, with both a crater lake and snow. Whakaari's \"island\" is nothing like the granite continental island of Stewart Island — it is a volcano itself.",
    concept:
      "Whakaari shows that many volcanoes are really \"seamounts\": measured from the sea floor, a volcano may be over a kilometre high and huge in volume, and the \"island\" we see is only the tip above the water. To judge the true size of a volcanic island, you have to look at the sea-floor topography, not the coastline. A common misconception is to estimate a volcano's size from the part above the water.",
    history:
      "The full Māori name Te Puia o Whakaari means \"the dramatic volcano\". In the early 20th century sulphur was mined on the island; in 1914 a lahar from a crater-wall collapse killed miners, and the mining camp was later abandoned. Whakaari has since long been a privately owned nature reserve, with only guided short visits allowed; the December 2019 eruption occurred while visitors were on the island, causing major loss of life, after which access was tightened further.",
  },

  "stewart-island": {
    // seeing sources: 新西兰第三大岛；拉基乌拉国家公园约 1400 平方公里、占全岛约 85%；2023 年人口约 450。**「Stewart Island/Rakiura」是法定并名**（恩加伊塔胡法 Schedule 96），正文与注册表一致。**零争议红线复核：羊鸟习俗采集权只写「这项传统至今保留」这一客观事实，通过。** 2026-09-10 核，本轮无需改动。
    seeing:
      "Stewart Island (Māori: Rakiura, \"glowing skies\", for the aurora australis often seen here) lies off the southern end of the South Island across Foveaux Strait, and is the third-largest island in New Zealand by area. About 85% of it is Rakiura National Park, and its population of only a few hundred is concentrated in the small town of Oban at Halfmoon Bay. It is cool and wet, densely forested, and one of the easiest places to see kiwi in the wild.",
    formation:
      "Stewart Island is made mostly of granite and old metamorphosed sedimentary rock, part of the southward continuation of the New Zealand continental block, and was once joined to the South Island — during low sea level in the ice ages you could walk across, and it was only cut off by Foveaux Strait when sea level rose. The island's relief is low and gentle, and the coast has many granite headlands and drowned valley inlets (such as Paterson Inlet).",
    observation:
      "From the air Stewart Island is a low island almost entirely covered in dark-green forest, with an intricate coastline and several large bays such as Paterson Inlet cutting deep inland; only a few dune areas and bare granite hilltops show above the forest. The surrounding sea is often swell-washed, and open water leading to the Southern Ocean lies to the south.",
    distinguish:
      "Stewart Island is a \"continental island\" — originally part of the mainland, separated by rising sea level, with rock, plants and animals shared with the South Island; this is completely different from a volcanic island like Whakaari, or a coral island. It is closer to the pole than any of the islands to the north, with a climate and ecology closer to subantarctic.",
    concept:
      "Stewart Island is a case study in a continental island: to judge whether an island is continental, look at whether its rock and biology are continuous with the nearby mainland and whether the strait between is shallow (perhaps exposed during ice ages). A continental island's species are \"left behind\"; a volcanic or coral island's species arrived later by \"drifting across\". A common misconception is to treat all near-shore islands as having the same origin.",
    history:
      "Rakiura has long been a place where South Island Māori (Ngāi Tahu) seasonally take muttonbird chicks (tītī), a customary harvesting right still held today, with some nearby islands still managed by custom. In the 19th century there was whaling, boatbuilding, logging and tin mining on the island. From the late 20th century, through sustained conservation work such as rat eradication, Stewart Island and its satellite islands have become an important refuge for New Zealand's native birds.",
  },

  "waitomo": {
    // seeing sources: **「Waitomo」无长音符**：2019-06 新西兰公报正式公告（2019-ln2814）里 Waitomo Cave / Caves / Stream / Valley 均无长音符，正文拼写正确（级别 1）。
    //   https://gazette.govt.nz/notice/id/2019-ln2814
    //   萤火虫为发光蕈蚊（Arachnocampa luminosa）**幼虫**，不是甲虫 —— **正文已准确避开这个常见误区**。1887-12-28 首探（Tāne Tinorau 与 Fred Mace）、1889 年开放、长期由当地毛利家族共管（2 级）。2026-09-09 核，本轮无需改动。
    seeing:
      "Waitomo, in a belt of limestone hill country in the western North Island, is known for its underground cave system. Besides stalactites and stalagmites, the caves are famous for tens of thousands of blue-green points of light — \"glowworms\", actually the larvae of a fungus gnat found only in New Zealand, which hang sticky threads from the cave roof and glow to lure insects.",
    formation:
      "The Waitomo limestone formed in a warm shallow sea about 20–30 million years ago, from the accumulated calcium-carbonate remains of marine organisms. After it was uplifted into land, rainwater carrying carbon dioxide seeped down through the rock's fractures and slowly dissolved the limestone, over millions of years hollowing out tiers of cave passages, underground rivers, shafts (sinkholes) and natural bridges — this is karst.",
    observation:
      "From the air Waitomo is gently rolling green pasture hill country, its surface dotted with round hollows (sinkholes) and streams that suddenly disappear and reappear, with bare grey-white limestone \"pavements\" and natural arches in places. The cave system underground is invisible from the surface, showing only at cave entrances and collapses.",
    distinguish:
      "Waitomo and Punakaiki are both limestone landscapes in New Zealand, but Waitomo is cave karst formed by rainwater dissolving downward; Punakaiki is a \"pancake\" sea cliff where coastal limestone has been cross-cut and differentially weathered by the sea. Compared with the large-scale tower karst of Guilin in China, Waitomo is small and cave-dominated.",
    concept:
      "Waitomo is a case study in karst: limestone can be dissolved by mildly acidic water, so the water does not flow at the surface but goes underground, hollowing the rock into caves and underground rivers, while the surface collapses into hollows and beheaded streams. To recognise a karst area, look at whether the surface is \"waterless\", with many round hollows and streams that come and go. A common misconception is that all caves are \"cut\" by underground rivers — limestone caves are mainly \"dissolved\" out.",
    history:
      "Waitomo means \"the hole (tomo) where the water (wai) enters\" in Māori. In 1887 the local Māori chief Tāne Tinorau, together with the English surveyor Fred Mace, first systematically explored the glowworm cave on a raft of flax stems. The cave opened to the public in 1889, becoming one of New Zealand's earliest nature tourism attractions, long co-managed by and sharing revenue with the local Māori family.",
  },

  "auckland-volcanic-field": {
    seeing:
      "Auckland is built on a \"volcanic field\" — more than fifty small volcanoes scattered across the city area, with scoria cones, crater lakes and lava plateaus. Individually they are small, but the whole field is still considered active: the youngest, Rangitoto Island, formed in an eruption about 600 years ago, when Māori were already living nearby and witnessed the whole event.",
    // formation sources: 单成因框架保留，但补上已知例外：**朗伊托托岛至少两期喷发**（约距今 553±7 年与 504±5 年，相隔近 50 年，岩浆成分不同），Needham, Lindsay, Smith et al., GSA Bulletin（2 级同行评议）—— 是「单成因」定义公认的疑难案例。53 个喷发中心、面积约 360 平方公里（GNS Science 数据，3 级转引）。2026-09-09 核。
    //   https://pubs.geoscienceworld.org/gsa/gsabulletin/article-abstract/128/7-8/1160/185376/
    //   **为什么必须补**：正文的 observation 段把朗伊托托当作这个火山场最完整的范例来写，如果 formation 段把「各喷一次」讲成铁律，读者拿这条判据去看的第一座山恰好就是那个例外。
    formation:
      "The Auckland Volcanic Field is a \"monogenetic volcanic field\": basaltic magma from deep in the mantle comes up at a new location every so often, erupts once (weeks to years) and stops permanently, with the next one somewhere else. So this is not one large volcano erupting repeatedly, but dozens of small volcanoes each erupting once, spread over about 360 km² (Rangitoto Island is a known exception: sediment dating shows at least two eruptive phases about fifty years apart with different magma chemistry, a recognised puzzle for the \"monogenetic\" label). Where magma meets groundwater there are violent steam explosions that blast out round shallow craters (maars), such as Lake Pupuke.",
    observation:
      "From the air the Auckland Volcanic Field is a set of green conical hills rising within the city (many with a bowl-shaped crater on top, some still showing the terraces of Māori ring settlements), plus several round crater lakes and parks. Rangitoto Island in the harbour is a near-perfectly symmetrical low shield cone, more complete in shape than any of the volcanoes on land.",
    distinguish:
      "The Auckland Volcanic Field is completely different from the large rhyolitic calderas of Taupō and Rotorua: Auckland is basaltic, monogenetic, many small volcanoes; Taupō is rhyolitic, repeated giant eruptions, one large caldera. The Auckland volcanoes are also not subduction-zone magma like Ruapehu — their magma comes from deeper, \"cleaner\" mantle melting.",
    concept:
      "The Auckland Volcanic Field is a case study in a monogenetic volcanic field: to judge whether a volcanic area is a monogenetic field, look at whether it consists of many small volcanoes of different ages that each erupted once, with no repeatedly active main volcano. The risk in such a field is not that one mountain will erupt again, but that the next eruption will appear at a new site where there was no volcano before. A common misconception is to ask \"which Auckland volcano will erupt again\" — the question is \"where will the next volcano appear\".",
    history:
      "The Auckland isthmus (Māori: Tāmaki Makaurau) — with fertile soil, sea on two sides and easily defended volcanic cones — was long a densely populated core area contested by several Māori iwi, and many cones still show the terraces and ditches of large defended settlements (pā). In the colonial 19th century many cones were quarried away in large part; those that remain are mostly protected parks and memorial sites today.",
  },

  "banks-peninsula": {
    // seeing sources: 火山年代：**GNS Science 官方地质图**（Forsyth et al. 2008《Geology of the Christchurch area》1:250,000）—— 利特尔顿 11–9.7 Ma、阿卡罗阿 9–8 Ma，合并区间与正文的「1100 万到 800 万年前」**精确吻合**（级别 1，经转引）。
    //   https://en.wikipedia.org/wiki/Banks_Peninsula_Volcano
    //   **本批点名的高风险项，结果是正文写对了**：班克斯半岛被写成两座**侵蚀火山**的残体、港湾是淹没的火山中心，**不是「隆起的陆块」**；「陆连岛」成因（先有岛、后被坎特伯雷平原的砾石接上大陆）方向也正确。2026-09-10 核，本轮无需改动。
    seeing:
      "Banks Peninsula, on the east coast of the South Island next to Christchurch, is a hilly block jutting out into the sea, with two large deep harbours in its middle — Lyttelton Harbour and Akaroa Harbour. It was originally an island, later joined to the mainland by the gravels of the Canterbury Plains on its western side. The peninsula is pasture, remnant native forest and an intricate volcanic coast.",
    formation:
      "Banks Peninsula is the eroded remains of two overlapping Miocene shield volcanoes (about 11 to 8 million years old). After the volcanoes died, waves and rivers stripped away the softer parts, leaving the hard lava-flow layers as radiating ridges; the central collapse of each volcano and the eroded valleys were later flooded by the sea, becoming the two near-circular deep harbours of Lyttelton and Akaroa.",
    observation:
      "From the air Banks Peninsula is a dark-green, roughly circular hill block at the end of the great Canterbury Plains, with the two large harbours cutting deep into it as if two bites had been taken out, their shores a ring of steep slopes; radiating ridges and valleys spread from the centre outward, with cliffs and small bays around the rim. The contact with the plains on the west is a straight coastline.",
    distinguish:
      "Banks Peninsula and the Coromandel Peninsula are both products of eroded old volcanoes, but Banks is a round \"block\" of two overlapping shield volcanoes with drowned volcanic centres for harbours; the Coromandel is a long, narrow \"ridge\" from a chain of uplifted, eroded volcanoes. Banks Peninsula is joined to the mainland by the build-up of plains gravel, a \"land-tied island\" structure that is uncommon in New Zealand.",
    concept:
      "Banks Peninsula is a case study in a land-tied island and a drowned volcanic crater: a near-shore island, if a large river keeps depositing sediment beside it, can be joined to the mainland by that sediment; and after a shield volcano dies, its central hollow is deepened by erosion and then flooded by the sea, forming a near-circular harbour. A common misconception is to read such a round deep harbour as an impact crater or an artificial port.",
    history:
      "Banks Peninsula (Māori: Horomaka) was an important area of settlement and resources for Ngāi Tahu, with several settlements around the two harbours. In the 1830s Akaroa Harbour was the target of French and British settlement schemes, and the town of Akaroa still keeps French place names and buildings. In the 19th century the peninsula's native forest was extensively felled for timber and pasture, and from the 20th century there has been sustained replanting.",
  },
};
