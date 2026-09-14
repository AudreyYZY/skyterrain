import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ================= AUSTRALIA =================
  "great-dividing-range": {
    // seeing sources: 长度 3,500+ km、从昆士兰北部经新南威尔士到维多利亚、是澳大利亚的主分水岭 —— 多方一致，2026-09-08 核。
    //   **「世界第三长的陆地山系」已删**：这个名次在来源之间自相矛盾（科普站点说第三、英文维基正文写
    //   fifth-longest），Geoscience Australia 官网没有这一表述，**而且没有任何一方交代按什么口径**
    //   （「land-based range」含不含分支山系、怎么算起讫）。给不出限定语就不写名次。
    //   海拔大部 300–1500 m、最高处在南端的澳洲阿尔卑斯、1813 年翻越蓝山，均核实无误。
    seeing:
      "The Great Dividing Range runs more than 3,500 km down the eastern edge of Australia, from far north Queensland through New South Wales and Victoria — among the longest mountain chains lying entirely within a single country. It is Australia's main watershed: rivers on the east flow a short way to the Pacific, rivers on the west drain inland toward the Murray–Darling. From the air it reads as a long, low, forested rampart set back from the coast.",
    formation:
      "Despite the name, it is not a single alpine chain but a broad belt of plateaus, escarpments and low ranges — the uplifted and dissected eastern margin of the continent, worn down over more than 100 million years. Most of it is 300–1,500 m; the highest ground is in the Australian Alps at its southern end. Eastward-flowing rivers have cut deep gorges into its seaward side.",
    observation:
      "The clearest feature is the eastern escarpment: a step where the tableland breaks away toward the coastal plain, often with waterfalls where rivers pour over the edge. West of the crest the land tilts gently down into dry inland plains; east of it, a narrow green coastal strip holds most of Australia's people. There is no line of snow peaks — it is a rolling, eucalypt-covered upland.",
    distinguish:
      "Unlike the Andes or the Himalaya, the Great Dividing Range is old, low and passive — no active mountain-building, few earthquakes. Compared with the Australian Alps (its highest section): the Alps hold snow in winter and true alpine country; the rest of the range does not. It is a divide by drainage, not by climate.",
    concept:
      "\"Range\" here means a continental drainage divide, not a wall of peaks. Its importance is hydrological: it separates the well-watered east coast from the arid interior, and its western slopes feed the Murray–Darling, the basin that grows much of Australia's food. Early colonists were penned to the coast for 25 years until a route through the Blue Mountains escarpment was found in 1813.",
    history:
      "For tens of thousands of years the range's passes and river valleys were travel and trade routes for Aboriginal nations. The 1813 crossing of the Blue Mountains opened the inland to European settlement. Today the range carries most of eastern Australia's national parks, catchments and hill towns.",
  },

  "australian-alps": {
    // seeing sources: 科修斯科峰 2,228 m。**正文已正确限定为「澳大利亚大陆最高峰」** ——
    //   赫德岛的莫森峰 2,745 m 更高但属海外领地，原文规避了这个坑，是正确写法的范例。
    //   蓝湖等四个冰斗湖（Blue / Cootapatamba / Albina / Club）是**澳大利亚大陆上仅有的冰川湖** ——
    //   DCCEEW https://www.dcceew.gov.au/water/wetlands/australian-ramsar-wetlands/blue-lake（2 级）。
    //   雪山工程 1949-10-17 动工、1974 年竣工 —— DCCEEW 国家遗产名录（2 级）。2026-09-08 核，全篇无误。
    seeing:
      "The Australian Alps are the highest part of the continent, straddling the New South Wales–Victoria border at the southern end of the Great Dividing Range. Mount Kosciuszko, at 2,228 m, is the highest point in mainland Australia. It is the only substantial area of the Australian mainland that holds a reliable winter snowpack.",
    formation:
      "The Alps are an uplifted block of very old rock, planed nearly flat and then raised — which is why the summit area is a broad, gently rounded plateau rather than jagged peaks. Ice-age glaciers were small here, but they left cirques and moraine-dammed lakes near Kosciuszko, the only glacial lakes on the Australian mainland.",
    observation:
      "From the air the high country looks like a rolling, treeless upland — alpine herbfield and snow gum woodland — not a spiky range. In winter it is white; in summer, tawny gold with dark bands of forest in the valleys. The Snowy, Murray and Murrumbidgee rivers all rise here.",
    distinguish:
      "Against the European Alps or New Zealand's Southern Alps, the Australian Alps are far lower, older and more subdued — rounded summits, no permanent ice, no sharp relief. Against the rest of the Great Dividing Range, this is the one section with genuine alpine climate and vegetation.",
    concept:
      "\"Alps\" here is about climate and vegetation zones, not altitude in the Swiss sense: above roughly 1,800 m the trees stop and true alpine plant communities take over — a rare environment on a hot, flat continent. The snowpack also matters economically: meltwater feeds the Snowy Mountains Scheme, a major hydro-electric and irrigation system.",
    history:
      "The high country is the land of the Ngarigo, Walgalu and other peoples, who travelled up in summer to feast on Bogong moths. Cattle grazing ran from the 1830s until it was largely ended to protect the fragile catchments. The Snowy Mountains Scheme (1949–1974) reshaped the region's rivers.",
  },

  "macdonnell-ranges": {
    // seeing sources: 长约 644 km（正文「约 640 公里」相符）；齐尔山 1,531 m 确为北领地最高峰；
    //   褶皱年代与 Alice Springs 造山运动约 300–350 Ma 的地质学口径一致；
    //   陆上电报线 1870–1872 年建成、爱丽斯泉电报站 1871 年选址于 Heavitree Gap —— 2026-09-08 核，全篇无误。
    seeing:
      "The MacDonnell Ranges run east–west across the centre of Australia for about 640 km, with Alice Springs sitting in a gap near their middle. They are a set of sharp parallel ridges rising a few hundred metres above the surrounding desert plain, cut through by dramatic gorges. Mount Zeil (1,531 m) is the highest peak in the Northern Territory.",
    formation:
      "The ridges are the upturned edges of hard quartzite beds, folded about 300–400 million years ago and then exposed as the softer rock around them eroded away. Ancient rivers, older than the ranges' present relief, kept cutting down as the land rose, slicing the narrow chasms of Standley Chasm, Ormiston and Glen Helen.",
    observation:
      "From the air the MacDonnells are unmistakable: long, straight, parallel red ridgelines running east–west across an otherwise flat landscape, like the grain in a plank. The gorges show as thin dark notches; permanent waterholes in them are green dots. The colour is deep rust-red rock against pale spinifex.",
    distinguish:
      "Unlike a folded belt such as the Appalachians, the MacDonnells are a single narrow ridge system in the middle of a continent, with no coast or plain beyond — desert on both sides. Compared with the Flinders Ranges to the south, the MacDonnells are straighter, more strictly east–west, and drier.",
    concept:
      "This is a textbook \"ridge-and-valley\" landscape produced by differential erosion: hard quartzite stands up as ridges, soft rock is stripped to valleys. The gorges are \"antecedent\" — the rivers were there first and cut down as the ridges rose. Their permanent waterholes made the ranges a lifeline across the desert.",
    history:
      "The ranges are Arrernte country, rich in sacred sites and Dreaming tracks. Alice Springs grew at a gap where the Overland Telegraph Line crossed in the 1870s. The Larapinta Trail now follows the range's spine for walkers.",
  },

  "flinders-ranges": {
    // seeing sources: 长约 430 km，圣玛丽峰（Ngarri Mudlanha）1,171 m 为该山脉最高峰。
    //   **埃迪卡拉丘陵是埃迪卡拉纪（Ediacaran）的命名地**，其 GSSP 于 2004 年获国际地层委员会批准 ——
    //   正文「已知最早的复杂动物化石之一」用了「之一」，措辞克制。2026-09-08 核，全篇无误。
    seeing:
      "The Flinders Ranges are South Australia's largest mountain range, running about 430 km north from near Adelaide into the arid outback. Their signature is Wilpena Pound (Ikara), a huge natural amphitheatre of rock ringed by cliffs. St Mary Peak, on its rim, reaches 1,171 m.",
    formation:
      "The rock was laid down in a sinking basin around 800–500 million years ago, then folded into a great arch. Erosion has stripped the soft core, leaving the hard, upturned rims standing as ridges — Wilpena Pound is simply the eroded centre of one such fold, enclosed by its own resistant edges. The rocks here hold some of the earliest known complex-animal fossils (the Ediacaran biota).",
    observation:
      "From the air Wilpena Pound looks like a footprint or a cupped hand: an oval basin walled by a continuous ridge, with a single narrow gap where a creek escapes. The ridges elsewhere run in long curved lines, following the folds. Red rock, blue-grey native pine and cypress, and the dry ochre plains around.",
    distinguish:
      "Compared with the strictly east–west MacDonnell Ranges, the Flinders curve and swing, following folded structure, and are somewhat wetter and more vegetated. Wilpena Pound is often mistaken for a crater or a meteorite scar; it is neither — it is an erosional basin inside a fold.",
    concept:
      "The Pound shows how folding plus erosion can build an enclosed basin ringed by high ground — \"high all around, low in the middle\" produced without any impact or volcano. The Flinders are also a key site for understanding the dawn of complex life: the Ediacara Hills nearby give their name to a whole geological period.",
    history:
      "The ranges are Adnyamathanha country; Ikara means \"meeting place.\" Pastoralists pushed in from the 1850s, and the ruins of failed wheat farms north of Goyder's Line record where farming hit the limits of the dry.",
  },

  "blue-mountains": {
    // seeing sources: 大蓝山地区 **2000-11-29 列入世界遗产**，认定标准聚焦桉树在冈瓦纳分离后的演化多样性 ——
    //   DCCEEW https://www.dcceew.gov.au/parks-heritage/heritage/places/world/blue-mountains（1 级，2026-09-08 核）。
    //   卡通巴一带台地海拔约 1000–1050 m、山地内局部制高点约 1100–1200 m，正文「约 1100 米」相符。全篇无误。
    seeing:
      "The Blue Mountains rise just west of Sydney — not really mountains but a deeply dissected sandstone plateau, standing about 1,100 m and slashed by sheer-walled valleys. The famous view is of the Three Sisters and the Jamison Valley from the escarpment at Katoomba. The blue haze that names them is generally attributed to fine oil droplets from the eucalypts, together with the air itself, scattering sunlight.",
    formation:
      "The plateau is a thick, flat-lying layer of quartz sandstone laid down by ancient rivers, later uplifted with the Great Dividing Range. Streams have since cut down through it along joints, carving canyons with vertical walls and leaving flat-topped ridges and isolated pillars like the Three Sisters where harder caps protect the rock beneath.",
    observation:
      "From the air the Blue Mountains are a green tableland split by a maze of cliff-lined gorges — the plateau surface stays roughly level while the valleys drop hundreds of metres straight down. Waterfalls hang off the escarpment edges. The forest is unbroken eucalypt, hazed blue in the distance.",
    distinguish:
      "It is a plateau, not a fold or volcanic range: the skyline is flat, and the drama is in the canyons cut into it. Compared with the Loess Plateau's soft, yellow, gullied slopes, the Blue Mountains are hard sandstone with vertical cliffs. The Grand Canyon (USA) is a closer analogue in process, at smaller scale.",
    concept:
      "\"Mountains\" here really means \"dissected plateau\": relief comes from downcutting into a raised flat layer, not from anything pushed up into peaks. The escarpment was also a 25-year barrier to the early Sydney colony — the ridge-and-canyon maze had no easy through route until 1813.",
    history:
      "The area is the country of the Gundungurra and Darug peoples. The 1813 crossing by Blaxland, Lawson and Wentworth opened the western plains to settlement. The Greater Blue Mountains was inscribed as World Heritage in 2000 for its eucalypt diversity.",
  },

  pilbara: {
    // seeing sources: 梅哈里山 1,249 m 为西澳最高峰（Karijini 国家公园哈默斯利岭内）；
    //   皮尔巴拉克拉通基底逾 30 亿年（部分逾 35 亿年）；哈默斯利群主要条带状铁建造约 2.48–2.5 Ga ——
    //   与正文「25 亿年前」相符。穆鲁久加（布鲁普半岛）约 100 万—200 万幅岩刻，
    //   正文「世界上岩画最密集的遗址之一」用了「之一」，成立。2026-09-08 核，全篇无误。
    //   **下一轮可补**：穆鲁久加已于 2025 年列入 UNESCO 世界遗产，正文未提 —— 不是错误，是可以加的一句。
    seeing:
      "The Pilbara is a vast, ancient, iron-rich region of north-western Australia. Its heart is the Hamersley Range, whose banded rocks are cut by the deep red gorges of Karijini National Park; Mount Meharry (1,249 m) is the highest point in Western Australia. This is one of the oldest, most stable pieces of land on the planet — and the source of most of Australia's iron ore.",
    formation:
      "The Pilbara craton is over 3 billion years old. Its famous banded iron formations formed on an early sea floor 2.5 billion years ago, when the first photosynthetic microbes released oxygen that reacted with dissolved iron and settled out in layers. Later uplift and river erosion sliced the Karijini gorges into these iron-hard beds.",
    observation:
      "From the air the Pilbara is deep rust-red rock and spinifex, with the Hamersley Range as a broad dark upland. The gorges are narrow slots of red-and-blue banded rock hundreds of metres deep, with permanent green pools. Enormous open-cut iron mines and dead-straight ore railways stand out as pale scars.",
    distinguish:
      "Unlike a young alpine range, the Pilbara has almost no tectonic relief — it is an eroded plateau on ancient crust. Its gorges resemble those of the MacDonnell Ranges but are cut into iron formation rather than quartzite, giving the striking layered red-and-blue walls.",
    concept:
      "The Pilbara is a window into the early Earth: its stromatolite fossils are among the oldest evidence of life (about 3.5 billion years), and its banded iron formations record the \"Great Oxidation\" of the atmosphere. It also shows how the oldest, most stable continental cores (\"cratons\") survive as low, worn-down land, not high mountains.",
    history:
      "The Pilbara is home to many Aboriginal groups; Murujuga (the Burrup Peninsula) holds over a million petroglyphs, one of the world's densest rock-art sites. Large-scale iron mining began in the 1960s and now drives much of Australia's export economy.",
  },

  kimberley: {
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块，未发现事实性错误，本轮无需改动。
    seeing:
      "The Kimberley is a remote sandstone plateau in Australia's far north-west, about 420,000 km² — larger than Germany — with a deeply indented coast of tidal gorges and a monsoon climate. Its signature feature is the Bungle Bungle Range in Purnululu — a maze of orange-and-grey banded beehive domes. The tides here are among the largest in the world, over 10 m.",
    formation:
      "The plateau is very old, flat-lying sandstone, dissected by rivers into gorges and mesas. The Bungle Bungles' domes are what remains after weathering along a grid of vertical cracks in the sandstone; the grey bands are a thin skin of cyanobacteria protecting the softer, orange, iron-stained layers between more clay-rich grey bands. The huge tides drown the river mouths, making \"horizontal waterfalls\" where water is forced through narrow gaps.",
    observation:
      "From the air the Kimberley is red-and-black rock, savanna woodland, and a coast that looks bitten out — long fjord-like inlets, reefs and islands. Purnululu's beehive domes cluster like a hive; Mitchell Falls steps down a tiered gorge. In the wet season the rivers flood brown and huge.",
    distinguish:
      "Compared with the Blue Mountains (also a sandstone plateau), the Kimberley is tropical, monsoonal, and coastal, with tidal gorges the Blue Mountains lack. The Bungle Bungles are sometimes taken for wind-sculpted dunes; they are solid rock, shaped by water and biology along joints.",
    concept:
      "The banded domes are a rare case of biology shaping a landform: the dark stripes are living cyanobacterial crust that armours the rock. The plateau also shows \"antecedent drainage\" — rivers older than the present relief, cutting gorges as the land rose. The giant tides come from the shape of the continental shelf funnelling and amplifying the tidal wave.",
    history:
      "The Kimberley holds Gwion Gwion (Bradshaw) and Wandjina rock art, among the world's very old figurative rock art. It was one of the last parts of the continent settled by Europeans, from the 1880s, and remains sparsely populated, with large Aboriginal-owned lands.",
  },

  "simpson-desert": {
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块，未发现事实性错误，本轮无需改动。
    seeing:
      "The Simpson Desert covers about 176,000 km² of central Australia, spanning three states. It is famous for its dunes: more than 1,100 parallel sand ridges running NNW–SSE, some over 200 km long without a break — among the longest parallel dunes on Earth. \"Big Red,\" near Birdsville, is a well-known example.",
    formation:
      "The sand was carried in by rivers from the surrounding ranges and then reworked by the prevailing south-easterly winds into long, straight ridges that all line up with the wind. The dune crests still shift, but the flanks are held by spinifex and other plants, so the pattern is stable. Clay pans and salt lakes lie in the swales between ridges.",
    observation:
      "From the air the Simpson is one of the most orderly landscapes on the planet: endless parallel red lines, evenly spaced, all pointing the same way, to the horizon. After rare rain the swales turn green and the claypans fill silver. The dunes are red where iron-stained, paler where fresh sand is exposed on the crests.",
    distinguish:
      "Against the Taklamakan's shifting crescent dunes, the Simpson's dunes are mostly fixed linear ridges, vegetated on their flanks, set by a steady wind. Against the Great Victoria Desert to the west, the Simpson has far more regular, longer, more continuous dunes.",
    concept:
      "Linear (longitudinal) dunes form where sand is limited and the wind blows from a consistent direction — the ridges grow parallel to the net wind, not across it. The Simpson is the classic example. Its very regularity is the point: it records thousands of years of one prevailing wind.",
    history:
      "The desert is Wangkangurru and other peoples' country; they survived here using \"mikiri,\" hand-dug wells in the swales. It was the last major Australian desert crossed by Europeans (1936, then by vehicle in 1962). Today it is a national park and a four-wheel-drive destination.",
  },

  "great-victoria-desert": {
    // seeing sources: 大维多利亚沙漠约 **348,750 km²**，澳大利亚面积最大的沙漠，正文「约 35 万」属合理取整，2026-09-08 核。
    //   马拉林加核试验 1950—60 年代、对原住民社区造成长期伤害 —— 官方认定的史实，
    //   正文作客观陈述、未涉现代政治评价，红线复核通过。
    seeing:
      "The Great Victoria Desert is the largest desert in Australia, about 350,000 km², sprawling across Western Australia and South Australia. It is a mix of long sand dunes, gravel plains and dry salt lakes, sparsely covered with spinifex, mulga and desert oak. It is one of the least-populated regions on Earth.",
    formation:
      "The desert sits on very old, flat, weathered crust, blanketed by wind-blown sand and ancient river deposits. Its linear dunes, like the Simpson's, were built and aligned by prevailing winds, but they are lower, more broken and more vegetated. Chains of salt lakes mark the courses of rivers that no longer flow.",
    observation:
      "From the air it is a subtle, mottled landscape rather than a sea of dunes — patchy scrub, reddish sand, pale salt pans, low ridges — stretching unbroken to the horizon in every direction. There are almost no roads, towns or landmarks.",
    distinguish:
      "Unlike the Simpson (dominated by very regular, long dunes) or the Nullarbor (flat, treeless limestone), the Great Victoria is a varied, scrubby desert with irregular dunes and no single strong pattern. It is bigger than any of them.",
    concept:
      "\"Desert\" here is defined by aridity, not by sand seas: much of the Great Victoria is vegetated. It illustrates that Australia's deserts are mostly old, stable, and only partly sandy — the continent is dry because it sits under the subtropical high-pressure belt, far from moist air.",
    history:
      "It is the country of the Anangu, Pila Nguru (\"Spinifex People\") and others, some of whom lived a traditional desert life into the 1980s. Part of it was used for British nuclear tests at Maralinga in the 1950s and 1960s, with lasting harm to Aboriginal communities.",
  },

  "nullarbor-plain": {
    // seeing sources: 纳拉伯平原约 **200,000 km²**，「世界上最大的一整块石灰岩」为广泛认可的表述，未查到有力反例或竞争说法；
    //   横贯澳大利亚铁路 **478 km（297 英里）直线段**为世界最长完全无弯曲的铁路直线段；
    //   艾尔与同伴 Wylie 1840—41 年完成有记录的首次欧洲人穿越。2026-09-08 核，全篇无误。
    seeing:
      "The Nullarbor is a vast, flat, treeless plain on the southern edge of Australia — its name is Latin-derived for \"no trees.\" It is the world's largest single slab of limestone, about 200,000 km², and it ends abruptly at the Bunda Cliffs, which drop straight into the Great Australian Bight for hundreds of kilometres.",
    formation:
      "The limestone formed on a shallow sea floor 15–40 million years ago and was lifted, almost perfectly flat, above the sea. Rain sinks straight into it, so there are no surface rivers — instead the rock is riddled with caves, sinkholes and blowholes. The southern edge has been trimmed back by the ocean into the sheer Bunda Cliffs.",
    observation:
      "From the air the Nullarbor is astonishingly featureless — a pale, level plain with saltbush and bluebush but no trees, running dead flat to the horizon. The one dramatic line is the coastal cliff, where the plain simply stops and the Southern Ocean begins. The Trans-Australian Railway crosses it in a 478 km dead-straight stretch, the longest in the world.",
    distinguish:
      "Unlike a sandy desert, the Nullarbor is bare rock and thin soil, not dunes. Compared with the Yunnan–Guizhou Plateau (also limestone karst), the Nullarbor is flat and dry with underground caves but no peak forest — arid karst rather than humid karst.",
    concept:
      "This is karst — limestone dissolved by water — but arid karst: the drainage is all underground, so the surface stays a featureless plain while huge caves develop below. The flatness records how gently and evenly the sea floor was lifted. \"Nullarbor\" also disproves a common assumption that deserts must be sandy.",
    history:
      "The plain is Mirning and Wangai country, with songlines running along the coast. Edward John Eyre made the first recorded European crossing in 1841, nearly dying of thirst. The railway (1917) and later the Eyre Highway made it a crossing point rather than a barrier.",
  },

  "great-artesian-basin": {
    // seeing sources: 大自流盆地逾 **170 万 km²** —— Geoscience Australia
    //   https://www.ga.gov.au/scientific-topics/water/groundwater/gab（1 级，2026-09-08 核）。
    //   **正文没有写「世界最大自流盆地」这类排名断言**，只客观陈述面积，因此不需要补限定语 ——
    //   这是「不写名次」这条规矩的正面例子。
    //   首口自流井 1878 年钻于 Bourke 附近的 Kallara 站，正文用「约」字留了余地。
    seeing:
      "The Great Artesian Basin is not a landform you can see as a shape — it is a vast underground reservoir of water beneath about one-fifth of Australia, roughly 1.7 million km². Rain that fell on the eastern highlands hundreds of thousands to a million years ago slowly seeps through porous rock and emerges, sometimes hot, at natural springs and bores far out in the dry inland.",
    formation:
      "Layers of water-bearing sandstone were laid down in a shallow sea and swamps 100–250 million years ago, then buried and tilted, with the porous layers sandwiched between impermeable clays. Water enters where the sandstone outcrops along the Great Dividing Range, is trapped under pressure, and rises on its own wherever a bore or fault reaches the aquifer — hence \"artesian.\"",
    observation:
      "On the surface you see the basin only indirectly: mound springs — low cones of minerals and green wetland built by water pushing up in the middle of gibber desert — and the old free-flowing bores that turned the country around them into channels of reeds. From the air these are bright anomalies in a bare landscape.",
    distinguish:
      "Unlike the Tarim or Sichuan basins, which are topographic hollows ringed by mountains, the Great Artesian Basin is defined by geology and groundwater, not by shape — the ground above it is mostly flat plain. Its \"low point\" is underground.",
    concept:
      "\"Basin\" here is a geological structure: a downwarp holding tilted, layered rock, where a porous aquifer is confined between seals so the water is under pressure. It made pastoral settlement of arid inland Australia possible after the 1870s. Over-tapping dropped the pressure, and capping wild bores is now a major conservation effort.",
    history:
      "For Aboriginal peoples the mound springs were reliable water and important sites on trade routes across the desert. The first flowing bore was drilled about 1878; within decades thousands of uncontrolled bores were wasting water, and the artesian pressure has been falling ever since.",
  },

  "lake-eyre": {
    // seeing sources: 卡蒂坦达—埃尔湖湖底约 **−15 m**，澳大利亚陆地最低点；满水时约 9,500 km²，全澳最大湖泊；
    //   唐纳德·坎贝尔 1964-07-17 驾 Bluebird-Proteus CN7 在干涸湖床创下 648.7 km/h 的陆上极速世界纪录。
    //   2026-09-08 核，全篇无误。
    //   **注意**：这个湖大部分时间是干的、满水期面积差别极大，正文没有把「满水面积」当成常态面积来写 ——
    //   与青海湖那条（写了一个不带时点的裸数）正好构成对照，见 known-errors C6-j。
    seeing:
      "Kati Thanda–Lake Eyre, in the South Australian outback, is the lowest point in Australia — its floor lies about 15 m below sea level. It is the country's largest lake, but it is usually a blinding white salt pan; it fills completely only a few times a century, when monsoon rains far to the north drain down into it.",
    formation:
      "The lake sits in a large, low, closed basin with no outlet to the sea. Rivers from Queensland — Cooper Creek, the Diamantina — carry occasional floods hundreds of kilometres across the desert into it. The water then evaporates entirely, leaving its dissolved salt behind, so a thick salt crust has built up over tens of thousands of years.",
    observation:
      "From the air, dry, it is a dead-flat, glaring white sheet ringed by red dunes and gibber plain. When it floods it becomes a huge inland sea, pink and green with algae and brine shrimp, drawing enormous flocks of waterbirds within weeks — one of the great boom-and-bust spectacles on Earth.",
    distinguish:
      "Like Qinghai Lake it is an internal-drainage salt lake, but Lake Eyre is far more extreme: it is below sea level, and it is dry most of the time rather than permanently full. The Turpan Basin's Lake Aydingkol is a close analogue — both are the salt floor of a below-sea-level basin.",
    concept:
      "Lake Eyre is the endpoint of an entire internal-drainage system: whatever water reaches it cannot leave except by evaporation, so salt accumulates and the lake is normally a playa (dry salt pan). Its rare fillings depend on rain a thousand kilometres away, which is why it is a barometer of the northern monsoon.",
    history:
      "The lake is central to the traditions of the Arabana people, who hold native title over it; \"Kati Thanda\" is their name. Donald Campbell set a world land-speed record on the dry lakebed in 1964. Its floods are now closely tracked for the birdlife they trigger.",
  },

  uluru: {
    seeing:
      "Uluṟu is a single massive block of sandstone rising 348 m out of the flat desert of central Australia, about 9 km around the base. It is one of the largest exposed rocks in the world and the best-known natural landmark in Australia. To its Anangu traditional owners it is a living cultural landscape, dense with law and story.",
    formation:
      "Uluṟu is the tilted, upturned edge of a thick bed of hard sandstone (arkose), laid down by rivers about 550 million years ago, then folded almost vertical and buried. As the softer surrounding rock eroded away over hundreds of millions of years, this resistant slab was left standing — most of it is still underground. Its surface is grey; the famous red is a thin skin of iron oxide.",
    observation:
      "From the air Uluṟu is an isolated, smooth, elongated dome with steep sides and parallel grooves running down its flanks, marking the near-vertical rock layers. It glows deep red at sunrise and sunset because low-angle light passes through more dust and air. Waterholes and shady gorges hide at its base.",
    // distinguish sources: 乌鲁鲁高 348 m、底部周长 9.4 km；岩石为 **arkose，粗粒长石砂岩**（course-grained sandstone
    //   rich in the mineral feldspar）—— Parks Australia《Geology Fact sheet》(uluru.gov.au, 2023-09 版，1 级)
    //   与 https://uluru.gov.au/discover/highlights/amazing-facts/（1 级），2026-09-08 核。
    //   **原 distinguish 段写「细砂岩」是错的**，而同条目 formation 段写的「坚硬砂岩（长石砂岩）」是对的 ——
    //   **同一篇里一处对一处错**；同样的错还被抄到了 kata-tjuta 的 distinguish 段。
    //   约 5.5 亿年前由河流沉积、之后在 Alice Springs 造山运动中被掀转近 90°（正文只说「之后」、
    //   没坐实褶皱年代，写法克制、可接受）。
    //   **「世界上最大的裸露岩石之一」已用「之一」限定** —— 与西澳 Mount Augustus 常被称更大这一点不冲突，
    //   Parks Australia 官网自己也不做「世界最大」的断言。
    //   **攀爬于 2019-10-26（归还 34 周年）永久关闭**，正文写的正是这一条，没有过期。
    //   **原住民文化表述复核通过**：「传统主人」「阿南古」「法与故事」（对应 Tjukurpa）均为管理局公开材料
    //   里明确使用的词，未转述二手渠道对圣地含义的解释。
    distinguish:
      "Uluṟu is an inselberg — an \"island mountain\" — not a plateau or a volcano. Nearby Kata Tjuṯa is made of coarse conglomerate and forms many separate domes, whereas Uluṟu is one continuous block of coarse-grained sandstone (arkose). It is not a meteorite and not hollow.",
    concept:
      "An inselberg is what is left when erosion strips a plain but a body of especially hard rock resists and stands proud. Uluṟu's near-vertical layering — you can see the bedding running up its sides — shows how far the rock has been tilted from its original flat-lying position.",
    history:
      "Uluṟu has been a focus of Anangu life and ceremony for tens of thousands of years. It was returned to its traditional owners in 1985 and is jointly managed as a national park. Climbing the rock was permanently closed in 2019 at the owners' request.",
  },

  "kata-tjuta": {
    seeing:
      "Kata Tjuṯa (\"many heads\"), also called the Olgas, is a cluster of 36 steep-sided rock domes rising from the desert about 30 km west of Uluṟu. The tallest, Mount Olga, stands about 546 m above the plain — higher than Uluṟu. Deep, sheer-walled gorges run between the domes.",
    // formation sources: 卡塔丘塔 36 座圆丘，最高的奥尔加山高出平原约 546 m（比乌鲁鲁高 198 m）——
    //   https://uluru.gov.au/discover/highlights/kata-tjuta/（1 级，2026-09-08 核）。
    //   砾岩的**胶结基质是沙与泥**（cemented by sand and mud），Parks Australia《Geology Fact sheet》
    //   （1 级）—— 原文写「胶结在砂岩里」不对。砾石成分（花岗岩、玄武岩）、约 5.5 亿年前、
    //   源自当时耸立在南方的山脉，均核实无误。
    //   **掀转角度**：乌鲁鲁被掀转近 90°，卡塔丘塔仅约 15—20°，已写进 distinguish 段。
    //   **「男性圣址、详细故事受限」的表述复核通过**：与管理局官网「the stories and cultural knowledge
    //   associated with these rock formations are not shared with visitors」完全对应，
    //   没有僭越去描述管理局未公开的具体含义。
    formation:
      "Kata Tjuṯa is made of conglomerate — pebbles and boulders of granite and basalt cemented in a matrix of sand and mud — deposited by fast rivers pouring off a mountain range that once stood to the south, around 550 million years ago. Weathering has since worked along cracks in this coarse rock, rounding it into separate domes rather than one block.",
    observation:
      "From the air Kata Tjuṯa looks like a group of giant red loaves or knuckles set close together, with dark chasms between them — the Valley of the Winds threading through the middle. The rock surface is knobbly with embedded cobbles, unlike Uluṟu's smoother sandstone.",
    distinguish:
      "Uluṟu and Kata Tjuṯa share an origin — both are the eroded remains of sediment shed off the same vanished mountains — but Uluṟu is coarse-grained sandstone (arkose) tilted almost vertical and eroded into one mass, while Kata Tjuṯa is coarse conglomerate, tilted only about 15 to 20 degrees, broken into many domes.",
    concept:
      "The pair is a lesson in how rock type controls landform: same age, same setting, different sediment — and one becomes a single monolith, the other a field of domes. The pebbles in Kata Tjuṯa's rock are direct evidence of the ancient mountains that supplied them.",
    history:
      "Kata Tjuṯa is a men's sacred site of deep importance to Anangu, and much of its detailed story is restricted. It lies within Uluṟu-Kata Tjuṯa National Park, World Heritage-listed for both its geology and its living Aboriginal culture.",
  },

  "great-barrier-reef": {
    // seeing sources: 长约 2300 km、约 2900—3000 座礁体、约 900 座岛屿 —— GBRMPA 官方口径，2026-09-08 核；
    //   1975 年设海洋公园、1981 年列入世界遗产、1770 年库克「奋进号」在此搁浅，均无误。
    //   **白化的写法要特别注意**：`concept` 段没有把某一年钉死为「最近一次白化」，因此不会过期 ——
    //   这是正确写法。**如果以后要补一句具体年份，必须知道 AIMS 每年 8 月发布长期监测年报**
    //   （最近一次 2025-26 年报于 2026 年 8 月发布，显示 2024 年大规模白化后覆盖率正在回升；
    //   2025 年 3 月又发生一次大规模白化，与宁格罗礁同步，是两处世界遗产礁首次同时白化）。
    //   **珊瑚覆盖率与白化次数属 known-errors C6-j 那一类会变的量。**
    seeing:
      "The Great Barrier Reef stretches about 2,300 km along the north-east coast of Australia — the largest coral reef system in the world and the largest structure built by living organisms. It is made of roughly 3,000 individual reefs and 900 islands, and is visible from space.",
    formation:
      "The reef is built by tiny coral animals that grow their skeletons on the remains of earlier corals, over thousands of years, in warm, clear, shallow water. The present reef has grown since the last ice age, as rising seas flooded a former coastal plain; it sits on the foundations of much older reefs. It runs parallel to the coast along the edge of the continental shelf.",
    observation:
      "From the air the reef is a broken ribbon of turquoise and jade set in deep blue, following the coast far offshore — individual reefs show as pale patches, some ring-shaped around lagoons, with sand cays as bright dots. Between the reef and the mainland lies a calmer, shallower lagoon.",
    distinguish:
      "This is a barrier reef — separated from the shore by a wide lagoon and following the shelf edge — as opposed to a fringing reef attached to the coast, or an atoll ringing a sunken island. It is a biological structure, not rock uplifted by earth movements.",
    concept:
      "A reef is a landform made by life: the coral framework is the accumulated skeleton of colonial animals, and it can only build where the water is warm, clear and shallow enough for the corals' symbiotic algae to photosynthesise. That makes reefs acutely sensitive to warming and murky water — mass \"bleaching\" events have hit the reef repeatedly since the 1990s.",
    history:
      "Sea Country here has been central to the lives of Aboriginal and Torres Strait Islander peoples for millennia. James Cook's Endeavour ran aground on the reef in 1770. It became a marine park in 1975 and World Heritage in 1981, and is now a focus of global concern over climate change.",
  },

  "twelve-apostles": {
    seeing:
      "The Twelve Apostles are a group of tall limestone stacks standing in the Southern Ocean just off the Great Ocean Road in Victoria. They rise up to about 45 m out of the surf, a short way from sheer coastal cliffs. Despite the name there were never twelve; today only seven or eight remain standing.",
    // formation sources: **岩石年代约 860 万—1400 万年前** —— 墨尔本大学 Gallagher 团队，《Australian Journal of
    //   Earth Sciences》2026-04-24 发表；ABC News（2 级）
    //   https://www.abc.net.au/news/science/2026-04-24/how-victorias-twelve-apostles-formed-over-millions-of-years/106594348
    //   与 The Conversation（3 级）报道，2026-09-08 核。
    //   **这是一项刚发表几个月的单一同行评审研究**，已标注研究年份 —— 下一轮要确认它是否被学界广泛
    //   采纳、或已有后续修正。（与盖帕奇冰川、罗布泊干涸年代同属「会被新研究修正的量」。）
    //   **现存岩柱数是会变的量**：2005 年倒了一座、2009 年又倒一座，Parks Victoria 口径现存七座
    //   （截至 2026-09 核实）—— 下一轮要重新确认是否又有崩塌。
    //   45 米高度、约 2 cm/年的侵蚀速率、「从未有过十二座」、旧名「母猪与小猪」与 1920 年代改名、
    //   大洋路由一战归国士兵修建，均核实无误。
    formation:
      "The cliffs are soft limestone, most of it laid down between roughly 8.6 and 14 million years ago — the 2026 dating by a University of Melbourne team; older accounts gave a vaguer 10–20 million years. The Southern Ocean's waves attack the base of the cliff, cutting caves, then arches, then — when an arch collapses — leaving an isolated pillar, or stack. The stacks are slowly undercut in turn and fall: one dropped in 2005 and another in 2009, leaving seven standing on Parks Victoria's count as of 2026. New ones are being cut from the retreating cliff.",
    observation:
      "From the air the coast is a straight line of yellow cliffs with the stacks standing just offshore, wave trains wrapping around them, and the flat green farmland running right to the cliff edge. Gorges, blowholes and half-collapsed arches (London Bridge, the Grotto) punctuate the cliff line.",
    // distinguish sources: 「霍伊老人」是**老红砂岩**（Old Red Sandstone，泥盆纪，约 3.7—3.8 亿年前）——
    //   英国地质学会 https://www.geolsoc.org.uk/GeositesHoy 与英国地质调查局（均 1 级，2026-09-08 核）。
    //   **原文写成「白垩海蚀柱」是错的**；英国真正的白垩海蚀柱是怀特岛的「针石」或多塞特的「老哈利岩」。
    //   **拿别处的地貌作类比时，类比的那一头也要核** —— 侵蚀过程写对了，举的例子岩性错了。
    distinguish:
      "These are sea stacks — erosional remnants of a retreating cliff — not reefs, not volcanic plugs, not deposited features. The process is the same one that made Old Red Sandstone stacks like the Old Man of Hoy in Orkney, in softer and younger rock here.",
    concept:
      "Sea stacks record coastal erosion in progress: cliff → cave → arch → stack → stump. The \"Twelve Apostles\" are a snapshot of a coastline eating landward at roughly 2 cm a year. The number will keep changing as old stacks fall and new ones are isolated.",
    history:
      "This is the Sea Country of the Eastern Maar people. The stacks were long known as the \"Sow and Piglets\"; the grander name was adopted for tourism in the 1920s. The Great Ocean Road, built by returned WWI soldiers, made the coast accessible.",
  },

  tasmania: {
    seeing:
      "Tasmania is Australia's island state, about 240 km south of the mainland across Bass Strait. It is small but mountainous and wet, with a rugged, glacier-carved western wilderness, cool temperate rainforest, and a jagged coastline. Nearly half the island is national park or reserve.",
    formation:
      "Tasmania is a piece of continental crust that was joined to the mainland until rising seas flooded Bass Strait about 12,000 years ago. Much of its high country is capped by dolerite, a hard dark igneous rock that forms columned cliffs and boulder fields. Ice-age glaciers scoured the west, gouging U-shaped valleys, cirques and hundreds of lakes.",
    observation:
      "From the air western Tasmania is a tangle of sharp quartzite ridges, dark rainforest, buttongrass moorland and lakes, often under cloud. The centre has the dolerite plateau and peaks like Cradle Mountain; the east is drier, gentler farmland. The coast is deeply indented with bays and islands.",
    distinguish:
      "Like Hainan and Taiwan, Tasmania is a continental island cut off by rising sea level — its rocks and (former) wildlife are mainland stock. Unlike them it is cool, wet and heavily glaciated, with landforms closer to New Zealand's South Island than to tropical China.",
    concept:
      "Tasmania shows what glaciation does to a landscape even at modest altitude: at these latitudes ice-age glaciers reached low, leaving lake-filled cirques and troughs across the highlands. Its isolation also preserved species lost on the mainland — it was the last stronghold of the thylacine.",
    // history sources: 塔斯马尼亚荒野世界遗产区面积约 **158.4 万公顷**，**覆盖全岛近四分之一**（UNESCO 与澳大利亚
    //   联邦环境部原文均为 almost a quarter）—— https://www.dcceew.gov.au/parks-heritage/heritage/places/world/tasmanian-wilderness
    //   （1 级，2026-09-08 核）。全岛约 6.84 万 km²，158,400 ÷ 68,400 ≈ 23%，原文的「五分之一」偏低。
    //   与大陆分离约 1.2 万年前（巴斯海峡陆桥沉没）、全岛近一半是国家公园/保护区（塔州 DNRE 口径约 40%—50.4%）、
    //   袋狼最后据点、富兰克林大坝运动史实，均核实无误。
    history:
      "Tasmanian Aboriginal people lived on the island for tens of thousands of years, cut off after the land bridge drowned; colonisation from 1803 was catastrophic for them. The Tasmanian Wilderness World Heritage Area, secured after the Franklin Dam campaign of the early 1980s, covers almost a quarter of the state.",
  },

  "murray-darling": {
    // seeing sources: 澳大利亚测绘局（Geoscience Australia）：墨累河干流 **2,508 km**；**达令河干流 1,545 km**；
    //   达令河 + 最长源头支流（库尔戈阿—巴隆—康达明）合计约 **2,740 km**，是澳大利亚最长水道。
    //   https://www.ga.gov.au/scientific-topics/national-location-information/landforms/longest-rivers（1 级，2026-09-08 核）。
    //   **原文把含支流的合计数字当成了达令河本身的长度** —— 河流长度有「干流」与「含最长源头支流」
    //   两套口径，差了将近一倍，写的时候必须说明是哪一套。
    //   「跨四个州」是常见简化（实际是四个州 + 首都领地），温特沃斯汇合点、库隆潟湖出海口经复核准确。
    seeing:
      "The Murray–Darling is Australia's largest river system, draining about one-seventh of the continent across four states. The Murray runs about 2,500 km; the Darling proper is about 1,500 km, reaching roughly 2,700 km once its longest headwater tributaries are counted — Australia's longest waterway on that reckoning; they meet at Wentworth in far western New South Wales and reach the sea in South Australia. It is one of the country's key farming regions — and its water is fiercely contested.",
    formation:
      "The rivers flow across the Murray Basin, a very large, very flat lowland floored by river sediments. Because the gradient is so gentle, the Murray winds in tight meanders, cutting off billabongs (oxbow lakes), and the Darling can take weeks to move a flood pulse downstream. The system ends in the Coorong lagoon and a set of barrages at the Murray Mouth.",
    observation:
      "From the air the rivers are dark, hugely sinuous green lines — river red gum forest tracing every bend — winding across pale, dead-flat plains, with old cut-off loops as crescent lakes alongside. In dry years the channels shrink to strings of pools; in floods the water spreads for tens of kilometres.",
    distinguish:
      "Unlike the Yangtze or the Yellow River, the Murray–Darling carries little water for its size — much of its catchment is arid, and a lot of the flow never reaches the sea. Its rhythm is boom-and-bust, driven by episodic inland rain, more like an outback creek scaled up than a monsoon river.",
    concept:
      "The system shows what a very low gradient does to a river: extreme meandering, slow flood travel, and heavy reliance on floodplain wetlands. It also illustrates over-allocation — more water was licensed for irrigation than the rivers reliably carry, and balancing farms, towns and the environment is the point of the Murray–Darling Basin Plan.",
    history:
      "The rivers were travel routes and rich food sources for dozens of Aboriginal nations, whose fish traps and scarred canoe trees line the banks. Paddle steamers carried wool and supplies from the 1850s. Water sharing between the states has been disputed since Federation and remains so.",
  },

  kgari: {
    // seeing sources: **K'gari 是 2023-06-07 昆士兰州政府公告正式恢复的原住民名**（原 Fraser Island），
    //   正文用的正是现行官方名 —— 这一条本轮特意核过，没有停在旧名。
    //   世界最大沙岛、约 122—123 km 长、1992 年列入世界遗产、逾 40 km 彩色沙崖、
    //   博曼金湖为世界最大悬湖、约半数世界悬湖在此、1991 年停止伐木次年列世遗，均核实无误。
    //   布查拉人（Butchulla）作为传统所有者的表述与官方用法一致。2026-09-08 核。
    seeing:
      "K'gari (Fraser Island), off the south-east coast of Queensland, is about 123 km long and the largest sand island in the world. It is made almost entirely of quartz sand, yet grows rainforest over 30 m tall — the only place on Earth where rainforest grows on pure sand. World Heritage-listed in 1992; \"K'gari\" means \"paradise\" in the local language.",
    formation:
      "The island is a set of parallel dune ridges built over hundreds of thousands of years, as currents and wind carried continental-shelf sand northward and piled it up. Some of the dune sequences are among the oldest known on Earth. Wind keeps blowing fresh sand up onto older dunes, generation over generation, and the dunes are still creeping inland and north.",
    observation:
      "From the air K'gari is a long green island running north–south: an almost unbroken beach over 100 km long on the east, deep-green rainforest and a string of lakes (some tea-brown, some bright green) through the centre and west, and more than 40 km of coloured sand cliffs on the west. White \"sand blowouts\" show where moving dunes are pushing through the forest.",
    distinguish:
      "Unlike a coral cay (the sand islets of the Great Barrier Reef) or a volcanic island, K'gari is a \"sand island\" built of pure sand. Most of its lakes are \"perched\": organic matter in the dune hollows cements the sand into an impermeable pan, so rainwater pools partway up the dune, not connected to the water table. About half the world's perched lakes are here, and Lake Boomanjin is the largest perched lake on Earth.",
    concept:
      "K'gari is the counter-intuitive case of \"rainforest on sand\": pure sand holds almost no nutrients, but over hundreds of thousands of years leaf litter and a fungal mycorrhizal network recycle nutrients again and again, supporting tall rainforest. It also shows that dune landforms are not static — the whole island is slowly moving and growing.",
    history:
      "K'gari is the home of the Butchulla people, who have lived here for thousands of years. After the wreck of the Stirling Castle in 1836, the ordeal of the captain's wife Eliza Fraser led Europeans to call it \"Fraser Island.\" It was logged for prized timbers such as kauri pine until 1991, then World Heritage-listed the next year; the Aboriginal name K'gari was officially restored in 2023.",
  },

  kakadu: {
    // seeing sources: 约 2 万 km²（官方精确值 19,804 km²）、断崖长约 500 km 高 30—330 m、约 1.4 亿年前浅海、
    //   退蚀速率每千年约 1 m、旱季末水鸟可达约 200 万只、玛杰贝贝岩棚约 6.5 万年 ——
    //   均为 Parks Australia / DCCEEW 一手口径（1 级，2026-09-08 核）。
    //   比尼／蒙古伊人作为传统所有者的表述与官方用法一致，未转述管理局未公开的内容。
    seeing:
      "Kakadu, in Australia's Northern Territory, covers about 20,000 km² — Australia's largest terrestrial national park, and one of the few places listed as World Heritage for both natural and cultural value. Its frame is the Arnhem Land sandstone plateau and, along its western edge, an escarpment running about 500 km and 30–330 m high, with vast seasonally flooded wetlands below it.",
    formation:
      "About 140 million years ago this area was a shallow sea: the sandstone plateau was the sea floor and the escarpment was the coastline. The plateau is mostly hard Kombolgie sandstone. Since then the escarpment has retreated eastward by roughly a metre every thousand years, its debris building the lowland plains, and wet-season floods have laid down the wetlands.",
    observation:
      "From the air Kakadu is layered: red, broken, gorge-cut sandstone \"stone country\" on the east; sloping woodland in the middle; floodplains on the west that merge into a sheet of water in the wet and shrink to chains of billabongs in the dry; and tidal mudflats and mangroves at the outer edge. Jim Jim and Twin Falls drop straight off the escarpment.",
    distinguish:
      "Kakadu's sandstone plateau and escarpment form much as the Blue Mountains and the Kimberley do (flat-lying sandstone uplifted and dissected), but Kakadu has a tropical monsoon climate, and the huge dry-season/wet-season swing drives everything. Its floodplains resemble the Murray–Darling's, but Kakadu's water is entirely monsoon-controlled, going from cracked mud to inland sea within a year.",
    concept:
      "Kakadu shows how a \"monsoon switch\" shapes landform and life: the November–April monsoon sends rivers into flood, turns the wetlands into a sea and concentrates waterbirds (up to about 2 million by the late dry); May–October brings almost no rain and the wetlands shrink to pools. The steady backward retreat of the escarpment is a living lesson in scarp-retreat landscape evolution.",
    history:
      "Aboriginal people have lived in the Kakadu region for tens of thousands of years; the Madjedbebe rock shelter has been dated by some studies to about 65,000 years. The rock art at Ubirr and Nourlangie records a long history from prehistoric animals to European sailing ships. The land is owned by Bininj/Mungguy traditional owners and leased back for joint management. Uranium found nearby in the 1970s brought years of controversy over mining.",
  },

  grampians: {
    seeing:
      "The Grampians (Aboriginal name Gariwerd), in western Victoria, are a set of sandstone cuestas tilted up out of the plain, made of several roughly parallel ranges; the highest, Mount William, is about 1,167 m. They are known for their cliffs, rock lookouts and the richest concentration of Aboriginal rock art in Victoria.",
    formation:
      "About 400 million years ago (the Devonian) an inland basin filled with several kilometres of sandstone and siltstone, which was later folded and tilted as a whole toward the west. Because the beds dip west, every range is a cuesta — a steep cliff facing east, a gentle slope running west. Granite intruded the pile about 395 million years ago.",
    observation:
      "From the air the Grampians are several dark, parallel ridge lines standing above pale farmland: each range has a sheer sandstone cliff on its east side and a gentle wooded slope on the west. The ridge tops are bare sandstone benches with lookouts such as the Pinnacles and Boroka. Long narrow valleys and reservoirs lie between the ranges.",
    distinguish:
      "The Grampians' cuestas are different from the body of the Great Dividing Range (a low, gentle upwarp) — they are clear \"cliff-plus-slope\" asymmetric ridges. Their sandstone is older than the Blue Mountains' and much more folded: the Blue Mountains beds are still roughly horizontal, the Grampians beds are visibly tilted.",
    concept:
      "A cuesta is the textbook landform of \"differential erosion on tilted beds\": soft layers are stripped to a gentle slope, the cut edge of a hard sandstone layer stands as a cliff, and the cliff faces the up-dip direction. A whole set of parallel cuestas like the Grampians is the best outcrop for reading the dip of the rock in the field.",
    // history sources: 1991 年曾一度改名为 Grampians (Gariwerd) National Park，1992 年州政府换届后撤回；
    //   **1998 年维多利亚州《地名法》确立双名制度后，Gariwerd 作为官方双名被重新确立并沿用至今**
    //   （3 级，澳大利亚国立大学出版社专著章节，2026-09-08 核）。
    //   **原文写「近年被恢复」已经过期近三十年** —— 「近年」「最近」「新近」这类相对时间词本身就是
    //   会过期的写法，写的时候一律换成年份。
    //   主峰威廉山约 1167 m、约 4 亿年前泥盆纪沉积、约 3.95 亿年前花岗岩侵入、维多利亚州约八成原住民
    //   岩画在此，均核实无误；雅德瓦贾利与贾布伍隆两族名的拼写与官方用法一致。
    history:
      "Gariwerd is deeply significant to the Jardwadjali and Djab Wurrung peoples, and holds about 80% of Victoria's known Aboriginal rock art sites. The explorer Thomas Mitchell named the range in 1836 after the Grampian Mountains of Scotland. \"Gariwerd\" became the official dual name under Victoria's Geographic Place Names Act 1998 and remains so today.",
  },

  ningaloo: {
    // seeing sources: 长约 300 km（UNESCO 原文 almost 300 km）、澳大利亚最大裾礁、2011 年与凯普山脉一同列入
    //   世界遗产、3—8 月鲸鲨聚集季 —— https://whc.unesco.org/en/list/1369/（1 级，2026-09-08 核）。
    //   伊尼古杜拉人作为传统所有者的表述与官方用法一致。
    //   **注意**：2025 年 3 月宁格罗与大堡礁同步发生大规模白化（两处世界遗产礁首次同时白化），
    //   正文未写死白化年份，暂时合规；日后要写必须带年份。
    seeing:
      "Ningaloo Reef, on the north-west coast of Western Australia, is about 300 km long and Australia's largest fringing reef — a coral reef growing right against the shore, in places only a hundred metres or two out. It is World Heritage-listed together with the inland Cape Range (2011). Between March and August one of the world's largest aggregations of whale sharks gathers here.",
    formation:
      "A fringing reef grows directly on the rocky shallows at the edge of the land, without the wide lagoon of a barrier reef. The coast at Ningaloo is slowly rising, and the neighbouring Cape Range is a limestone anticline that has been lifted and then cut into gorges by old rivers. The present reef is coral growing upward on older reef foundations since sea level rose after the last ice age.",
    observation:
      "From the air Ningaloo is a pale reef line hugging the coast: only a narrow band of turquoise shallow water lies between reef and shore, and deep-blue Indian Ocean starts immediately outside. Onshore is the red-brown Cape Range, with dry gorges (such as Yardie Creek) cut right down to the sea.",
    distinguish:
      "Ningaloo is a fringing reef; the Great Barrier Reef is a barrier reef — the key difference is how far the reef sits from shore: a fringing reef is against the land with almost no lagoon; a barrier reef lies tens of kilometres offshore behind a wide lagoon, along the shelf edge. At Ningaloo you can swim to the coral straight from the beach; the Great Barrier Reef needs a boat.",
    concept:
      "A fringing reef is the \"youngest\" and simplest of the three basic reef types (fringing–barrier–atoll): coral starts in place in the shallows at the edge of the land. Darwin's classic model holds that if the land keeps subsiding a fringing reef grades into a barrier reef and finally an atoll; Ningaloo stays at the fringing stage because its coast is rising.",
    history:
      "The Ningaloo coast is the traditional sea country of the Yinigudura and other Aboriginal groups, with shell middens and rock art thousands of years old. There was a whaling station here in the 19th century (Norwegian Bay). A marine park was declared in 1987 and the area was World Heritage-listed in 2011.",
  },

  "shark-bay": {
    seeing:
      "Shark Bay is a large embayment on the mid-west coast of Western Australia, at the westernmost point of the Australian mainland, where north–south peninsulas and islands divide the water into a series of shallow gulfs. It is World Heritage-listed for three things: its vast seagrass beds, its dugong population, and the living stromatolites of Hamelin Pool.",
    // formation sources: 厚度 **up to 10 metres** 核实无误 —— 西澳 DBCA 官方公园页
    //   https://exploreparks.dbca.wa.gov.au/park/shell-beach-conservation-park（1 级，2026-09-08 核）。
    //   **长度没有统一口径**：DBCA 自己的页面正文一处写 over 70km、另一处写 60km；维基约 60 km；
    //   鲨鱼湾世界遗产游客中心约 120 km。**原文的「100 公里」在所有来源里都没出现过** ——
    //   它像是在几个互相矛盾的数字之间取了个中间值。**遇到官方页面自相矛盾，正确做法是写明分歧、
    //   不写死数字**，而不是每一轮再猜一个中间值。
    //   哈梅林池盐度约为普通海水两倍、1616 年德克·哈托格登陆并留下锡盘、1991 年列入世界遗产，均核实无误。
    formation:
      "The parallel peninsulas (Peron and others) are drowned former coastal sand dunes now standing as ridges. Hamelin Pool lies behind a shallow underwater bar at the south of the bay, so seawater exchange is slow; with strong evaporation the water is about twice as saline as normal seawater. Shell Beach is built from the shells of a small cockle that thrives in the low-diversity water, washed ashore over a stretch several tens of kilometres long — the WA park authority's own page gives both 60 km and over 70 km, and other accounts cite more than 100 km, with no settled figure — and up to about 10 m deep.",
    observation:
      "From the air Shark Bay looks like an open hand: red-brown peninsulas reach into pale-green shallows, with channels of varying depth between them. The water around Hamelin Pool is whitish-green, and dark bands of stromatolite reef show close to shore. Shell Beach is a glaring line of pure white.",
    distinguish:
      "The Shark Bay stromatolites are not a coral reef. Coral reefs are built from animal skeletons; stromatolites are rock mounds built up layer by layer as cyanobacteria trap sediment — among the structures left by Earth's earliest life. Like the Great Barrier Reef it is World Heritage-listed, but one is about \"the oldest life\" and the other about \"the largest living structure.\"",
    concept:
      "Living stromatolites are very rare, because in normal seawater grazing animals eat them away. The extreme salinity of Hamelin Pool keeps those animals out, so its stromatolites can grow as they did in the distant past — a living analogue for studying early life on Earth.",
    history:
      "Shark Bay is the traditional sea country of the Malgana people; \"Gathaagudu\" means \"two waters.\" In 1616 the Dutch navigator Dirk Hartog landed on an island at the bay's mouth and left an inscribed pewter plate — the first recorded European landing on the Western Australian coast. It was World Heritage-listed in 1991.",
  },

  purnululu: {
    // seeing sources: 邦格尔邦格尔山高约 200—300 m、约 3.5 亿年前泥盆纪砂岩、约 2000 万年侵蚀成塔、
    //   1987 年设立国家公园、2003 年列入世界遗产、UNESCO「砂岩喀斯特」表述，均核实无误，2026-09-08。
    //   **`history` 段写的是 1983 年纪录片使其「进入公众视野」，不是「被发现」** ——
    //   这个措辞差别很重要：那片地方的传统所有者一直知道它在哪。本批 4 篇（普努鲁鲁、卡尔卢卡尔卢、
    //   波浪岩、国王峡谷）都用了这种写法，是正确范例。
    seeing:
      "Purnululu National Park is in the Kimberley region of north-eastern Western Australia. Its centrepiece is the Bungle Bungle Range — a mass of orange-and-grey, beehive-shaped sandstone cones rising about 200–300 m above flat surrounding grassland. It came to wide public notice only in the 1980s.",
    formation:
      "The cones are Devonian (about 350-million-year-old) quartz sandstone and conglomerate laid down by rivers, later uplifted and cut by a grid of joints. Over roughly 20 million years rainwater eroded down along the joints, carving the rock into rounded towers. The orange bands are iron- and manganese-rich clay crusts on the more porous, water-absorbing layers; the grey bands are a crust of cyanobacteria on layers that hold moisture.",
    observation:
      "From the air the southern half of the range is a dense field of round-topped towers, like a swarm of beehives or upturned egg cartons separated by deep gorges; the northern half is dissected sandstone plateau and canyon. The dead-flat dark grassland all around makes the orange-grey rock stand out sharply.",
    distinguish:
      "Purnululu's cones, Uluṟu and Kata Tjuṯa are all sandstone remnants, but Uluṟu is one near-vertical tilted slab, Kata Tjuṯa is a few dozen big conglomerate domes, and Purnululu is hundreds of small towers cut into flat-lying sandstone — UNESCO calls it \"cone karst in sandstone.\"",
    concept:
      "\"Karst\" usually means landforms dissolved by water in limestone, but Purnululu develops in sandstone: the sandstone here is weakly cemented, so long-term rainwater scouring along joints can also produce pinnacle- and cone-like forms. The surface crust of cyanobacteria and clay is fragile; once it is broken and washed away, the towers decay faster.",
    history:
      "Purnululu is the home of the Jaru and Gija peoples; \"Purnululu\" means \"sandstone\" in the Gija language. Local people have always known it; a 1983 documentary brought the Bungle Bungle Range to wider attention. The national park was declared in 1987 and World Heritage-listed in 2003.",
  },

  "wave-rock": {
    // seeing sources: 高约 15 m、长约 110 m；岩体属伊尔冈克拉通、约 26 亿年花岗岩；1928 年在岩顶砌截水墙引流蓄水。
    //   2026-09-08 核，全篇无误。巴拉东·努恩加人的相关表述与官方用法一致。
    seeing:
      "Wave Rock, beside the town of Hyden in the Western Australian wheatbelt, is a granite slope about 15 m high and 110 m long shaped like a breaking ocean wave \"frozen\" in place. It is in fact just a small part of the north side of a large inselberg called Hyden Rock.",
    formation:
      "This granite belongs to the Yilgarn Craton and is about 2.6 billion years old. It was once deep underground, covered by a thick, deeply weathered mantle of rock. Groundwater seeping along the base of the rock body slowly weathered the contact surface into a concave curve. Later the soft cover was stripped by erosion, exposing this underground-formed hollow as the \"wave.\"",
    observation:
      "You cannot see the \"wave\" from the air — that needs a ground-level view from the foot of the cliff. From above you see Hyden Rock: a grey-white, rounded dome of bare granite set among red-earth farmland, with a low wall along its top built to collect rainwater. Wave Rock is the north edge of this dome.",
    distinguish:
      "This kind of hollowed-out base is called a flared slope, a common foot form on inselbergs — not made by waves, rivers or wind. Like Uluṟu it is an inselberg, but Uluṟu is tilted sandstone while Hyden Rock is granite, an old flat-lying body being exhumed.",
    concept:
      "Granite forms underground and, once exposed, weathers along pre-existing joints and contacts. The strongest weathering is often below the soil, at the base of the rock where moisture lingers — which is why many inselbergs have a concave arc around their foot. The dark vertical streaks on Wave Rock are from mineral-rich rainwater running down the slope, plus algae and lichen.",
    history:
      "The Hyden Rock area is the country of the Ballardong Noongar people. A retaining wall was built along the top in 1928 to supply water to Hyden. A photograph of Wave Rock won an international photography award in the 1960s, and it has been a Western Australian landmark ever since.",
  },

  "karlu-karlu": {
    // seeing sources: 花岗岩约 16 亿年前（落在业界常见区间内）；**1953 年一块巨石被移走用作约翰·弗林的墓碑，
    //   2008 年归还** —— 2026-09-08 核。
    //   瓦鲁蒙古／凯特泰／阿利亚瓦拉／瓦尔皮里四族与官方双名 Karlu Karlu / Devils Marbles 的用法
    //   与北领地公园管理机构一致，未转述圣地的具体含义。
    seeing:
      "Karlu Karlu, south of Tennant Creek in the Northern Territory, is a field of huge rounded granite boulders scattered across pale-red flat ground — some sitting alone, some balanced two-high as if about to roll — ranging from half a metre to six metres across. It is an important sacred site to the Warumungu and other peoples.",
    formation:
      "The boulders come from a large body of granite that solidified underground about 1.6 billion years ago. During uplift the rock split along three near-vertical sets of joints into rectangular blocks. Once raised to the surface, the corners weathered faster than the flat faces (attacked from three sides) and peeled away layer by layer, like an onion, rounding the blocks into spheres.",
    observation:
      "From the air Karlu Karlu is a small patch of dark specks on a pale-red shrub plain, gathered in a shallow valley. The rock is grey with rusty tints, a three-colour contrast against the red soil and green shrubs. The area is small; only up close can you see it is made of separate giant boulders.",
    distinguish:
      "The \"marbles\" in the common name Devils Marbles is only a figure of speech — this is granite, not marble. Like Wave Rock it is a granite inselberg landform, but Wave Rock is a single dome while Karlu Karlu is a field of boulders thoroughly cut by joints and then rounded one by one.",
    concept:
      "This is a textbook example of spheroidal weathering: once hard rock with regular joints is cut into blocks, the corners — where heat loss, water uptake and stress are all more severe than on flat faces — break down first, turning cubes into spheres. The same process occurs in many granite areas worldwide; it is just unusually well preserved and concentrated here.",
    history:
      "Karlu Karlu is significant to the Warumungu, Kaytetye, Alyawarre and Warlpiri peoples and is linked to several traditional routes. In 1953 one boulder was removed for use as a headstone; it was returned to its place in 2008. The reserve is now jointly managed by the traditional owners and the NT parks agency.",
  },

  "kings-canyon": {
    // seeing sources: 崖高约 100 m、梅里尼（Mereenie）砂岩约 4 亿年前、1989 年设立瓦塔卡国家公园、
    //   Watarrka 是当地对一种金合欢的称呼 —— 2026-09-08 核，全篇无误。
    //   卢里恰人（Luritja）的相关表述与官方用法一致。
    seeing:
      "Kings Canyon, in Watarrka National Park in the Northern Territory, is a deep valley cut by a creek through the George Gill Range, walled by near-vertical red-and-white sandstone cliffs about 100 m high. A permanent waterhole on the canyon floor is known as the \"Garden of Eden.\"",
    formation:
      "The canyon cuts into the roughly 400-million-year-old Mereenie Sandstone — then a field of wind-blown dunes, whose sand was compacted and cemented with silica into a hard, brittle quartz sandstone; the old dune cross-bedding is still visible on the cliff faces. Below it is the softer Carmichael Sandstone, with an impermeable shale layer between. The creek cut down along two vertical joint sets in the sandstone, deepening on one side and shedding large blocks along the joints on the other, producing the squared-off gorge.",
    observation:
      "From the air Kings Canyon is a straight deep slot in a red plateau, with a flat clifftop on one side and, on the other, a field of round-topped sandstone domes — where two joint sets cross, the surface is divided into blocks that weather into domes, known as the \"Lost City.\" The canyon floor bends along the joint directions.",
    distinguish:
      "Kings Canyon is a joint-controlled sandstone gorge, unlike the Yangtze's Three Gorges where a river cuts across folded mountains: here the beds are essentially flat and the trend of the valley and the squareness of the cliffs are set by the joint network in the rock. It is far smaller than the Yarlung Tsangpo Grand Canyon but its walls are more regular.",
    concept:
      "The shale aquiclude is the key here: rainwater soaks into the upper sandstone, is stopped by the shale, flows sideways along the bedding and seeps out halfway up the canyon wall, sustaining the \"Garden of Eden\" waterhole and a small stand of cycads and ferns — a moist island in the desert. It shows how differences in a rock unit's permeability can create local oases in dry country.",
    history:
      "Watarrka is significant to the local Luritja people, a refuge for many plants and animals, and a place of traditional stories. \"Watarrka\" is the local name for a species of acacia. The national park was declared in 1989.",
  },

  nitmiluk: {
    // seeing sources: 孔博尔吉砂岩 **1,650 Ma（约 16.5 亿年）** —— 北领地政府官方考察指南（2 级，2026-09-09 核）。
    //   旱季水位低时峡谷断成 **13 段**独立深潭，多来源一致。
    //   **1989-09-10 土地正式归还 Jawoyn 人**，此后在 99 年租约下与北领地公园部门联合管理（ABC News，2 级）。
    //   地名 Nitmiluk 意为「蝉之地」（Cicada Place / place of the cicada dreaming）——
    //   Jawoyn 官方旅游资料（2 级）。
    //   **这是官方双名（Nitmiluk / Katherine Gorge）用法正确的范例**：现行官方名在前、旧名并列，不作主次断言。
    seeing:
      "Nitmiluk, north-east of the town of Katherine in the Northern Territory, is a chain of gorges where the Katherine River cuts through a sandstone plateau — at low water in the dry season it breaks into 13 separate deep pools divided by rock bars; when the wet season raises the river it joins back into one continuous flow.",
    formation:
      "The gorges cut the roughly 1.65-billion-year-old Kombolgie Sandstone, a very hard quartz sandstone. This sandstone is cut by two sets of joints and faults, and the Katherine River eroded down along those lines of weakness — so the gorge is not a straight line but a series of straight reaches meeting at sharp angles.",
    observation:
      "From the air Nitmiluk is a zig-zag green slot cut into a deep-red sandstone plateau: the water is dark green, the walls are vertical orange-red sandstone, and sparse eucalypt woodland on the plateau surface runs right to the cliff edge. Every bend of the gorge follows the direction of a joint in the rock.",
    distinguish:
      "Nitmiluk and Kings Canyon are both gorges cut into flat-lying hard sandstone under joint control, and form in similar ways; but Nitmiluk is a large, permanently watered valley you can travel by boat, while Kings Canyon is a short, dry side gorge. It is the same Arnhem Land sandstone as Kakadu's \"stone country,\" expressed here as a river valley.",
    concept:
      "When a river meets a large body of hard, sparsely jointed rock, it cannot meander freely and must follow the joints and faults already in the rock — the result is this \"angular\" gorge made of straight segments with abrupt turns. The plan of the gorge is almost a map of the joint system in the sandstone.",
    history:
      "Nitmiluk is the country of the Jawoyn people; the name means \"Cicada Place.\" The land was returned to the Jawoyn in 1989, and the national park is jointly managed by them and the NT parks agency. Edith Falls (Leliyn in Jawoyn) upstream is also within the park.",
  },

  "glasshouse-mountains": {
    // seeing sources: 比尔瓦山（Mount Beerwah）**556 m**；火山颈年代学界普遍给 **26—27 Ma**（渐新世早期），
    //   正文的「约 2500—2700 万年前」吻合（3 级交叉，2026-09-09 核）。
    //   库克 **1770-05-17** 的日记原话即以约克郡的玻璃窑（glass houses）作比，命名沿用至今（2 级，昆州档案馆）。
    //   **联邦环境部（DCCEEW）国家名录页确认此地是 Jinibara（及 Kabi Kabi）传统土地，多座山峰为圣址，
    //   传统主人建议不要攀爬**（1 级）—— 正文的「多座山峰是圣址」与官方表述一致。
    seeing:
      "The Glass House Mountains, in south-east Queensland about 70 km north of Brisbane, are a group of steep peaks rising abruptly and alone from a flat coastal plain, the highest being Mount Beerwah at about 556 m. Their shapes are striking — some like round towers, some like knife-backs — and they do not connect to each other.",
    formation:
      "Each peak is a volcanic plug: about 25–27 million years ago, viscous magma such as trachyte and rhyolite rose to near the surface and solidified in its vent. Since then the softer surrounding sandstone has been eroded away by hundreds of metres, leaving only the especially hard volcanic plugs standing as today's isolated peaks.",
    observation:
      "From the air the Glass House Mountains are a dozen or so dark rock peaks rising suddenly among green plantations and towns, each separate and a few kilometres apart. Their walls are near-vertical, often with bare pale rock faces, and the lower slopes are gentle woodland. Seen from the sea or the plain they look like a row of towers on the horizon.",
    distinguish:
      "The Glass House Mountains are volcanic plugs (the remains of magma conduits), not complete volcanic cones and not sandstone remnants. Compared with Uluṟu: Uluṟu is sedimentary sandstone, the Glass House Mountains are igneous rock; Uluṟu is one mass, the Glass House Mountains are a dozen scattered plugs.",
    concept:
      "A volcanic plug is the clearest display of differential erosion: on one piece of land, hard volcanic rock and soft sedimentary rock are eroded together, and after millions of years the soft rock is lowered by hundreds of metres while the hard plugs stand almost in place. It records not how the volcano looked when it erupted, but how the conduit looks after being \"washed out.\"",
    history:
      "The Glass House Mountains are an important cultural landscape for the Jinibara and other peoples, with several peaks being sacred sites. James Cook sailed past in 1770 and named them because their shapes reminded him of glass furnaces in England. Several peaks are now national park, with strict rules on climbing.",
  },

  "great-sandy-desert": {
    // seeing sources: 2026-09-08 逐句核实全篇 6 板块，未发现事实性错误，本轮无需改动。
    seeing:
      "The Great Sandy Desert is in north-eastern Western Australia, straddling the Pilbara and southern Kimberley and extending east into the Northern Territory — the second-largest desert in Australia by area. It is mostly not tall dunes but endless low sand plains, crossed by long, near-parallel sand ridges trending roughly east–west.",
    formation:
      "The ridges are longitudinal dunes — their long axis parallel to the prevailing wind, which moves sand along the ridge and shapes it long and straight, some running unbroken for over 40 km and mostly 10–25 m high. Between the ridges are flat interdune corridors, often with claypans and seasonal salt lakes (such as the Percival Lakes). The red colour of the sand comes from a thin coating of iron oxide on the grains.",
    observation:
      "From the air the Great Sandy Desert is an orange-red \"comb\": countless parallel dark sand ridges, evenly spaced, running to the horizon; white salt lakes and pale claypans dot the corridors. Near its northern edge you can see a circular pit — Wolfe Creek Crater (Kandimalal), a well-preserved meteorite impact crater.",
    distinguish:
      "The Great Sandy Desert is dominated by longitudinal dunes, similar to the Simpson Desert (whose parallel ridges are more regular and redder); the tall pyramidal sand mountains in the centre of the Badain Jaran or Taklamakan are a different type. It is slightly smaller than the Great Victoria Desert, sits further north, and gets a little rain from the edge of the monsoon in summer.",
    concept:
      "Longitudinal dunes tell you the prevailing wind direction of a sand sea: whichever way the ridges point, that is the direction the main wind blows year-round. Once fixed by sparse vegetation, such dunes can stay essentially still for thousands of years — so the set of parallel ridges seen from the air is a fairly stable \"record of ancient wind direction.\"",
    history:
      "The Great Sandy Desert is the traditional land of the Martu and other Aboriginal peoples, who for generations moved through it between water sources and seasonal foods. In the mid-20th century many families moved to settlements on the desert's edge; in recent decades parts have been declared Indigenous Protected Areas managed by traditional owners.",
  },

  "great-australian-bight": {
    seeing:
      "The Great Australian Bight is a huge, open, curved gulf on the central southern coast of Australia, facing the Southern Ocean. A well-known stretch of its coast is the Bunda Cliffs: a straight limestone cliff line running about 210 km, some 60–120 m high, with the edge of the Nullarbor Plain at the top and deep sea directly below.",
    // formation sources: **「澳大利亚与南极分离」不是一个可以钉在某一年的事件**：裂解始于白垩纪晚期（约 85—99 Ma），
    //   深水通道完全打通（洋流意义上的分离）多篇地球物理文献定在约 **30—35 Ma**；
    //   科普材料常用「约 5000 万年前」甚至「约 6500 万年前」，**找不到可作定论的一手（GA / 澳南极局）口径**
    //   （3 级学术论文 + 2 级澳大利亚南极局，2026-09-09 核）。已改成过程性表述，不写单一年代。
    //   邦达崖连续约 210 km、高约 60—120 m；岩石为中—晚始新世的威尔逊崖石灰岩（欧克拉盆地最老最厚的
    //   石灰岩单元），均核实无误。南露脊鲸 5—10 月带幼崽近岸，与 Head of Bight 官方及海洋公园的季节限制一致。
    //   1840—41 年艾尔与向导 Wylie 完成有记录的首次陆路穿越。
    formation:
      "The Bunda Cliffs are Eocene Wilson Bluff Limestone, then a shallow sea floor. Since the Late Cretaceous, Australia has been slowly separating from Antarctica and drifting north; this continental margin was uplifted and then cut back by the constant pounding of the Southern Ocean's swell into this near-vertical cliff line. The clifftop is almost featureless because the Nullarbor itself is one uncut slab of limestone.",
    observation:
      "From the air there are three parallel bands — plain, cliff, sea: inland is the pale-yellow, treeless Nullarbor Plain, then abruptly a white cliff wall, and immediately below it the deep-blue Southern Ocean, with almost no beach in between. The cliff line is extremely straight, notched only here and there by small bays. Around the Head of Bight, southern right whales with calves appear close inshore from about May to October.",
    distinguish:
      "The Bunda Cliffs are a vertical cliff formed by marine cliff retreat, unlike the broken \"cliff–cave–arch–stack\" coast of the Twelve Apostles — here the beds are horizontal and uniform, so the whole cliff retreats evenly and leaves no stacks. It is also not a fault scarp: the cliff's position is set by wave erosion, not by a break in the crust.",
    concept:
      "This cliff is a direct exposure of a continental margin: the rupture surface left when Australia and Antarctica split, now trimmed by waves into a cross-section. Looking into the cliff you can read a stack of Eocene shallow-sea limestone full of the marine fossils of the time — an ancient sea floor lifted out of the water and sliced open for display.",
    history:
      "This area is a boundary zone between several Aboriginal peoples of the south coast, and travel across the Nullarbor depended heavily on a few limited water holes. In 1841 Edward Eyre walked across this coast, the first recorded overland crossing. The later transcontinental telegraph line, railway and highway all skirt the northern edge of the plain, because the cliff coast is impassable.",
  },

  "nambung-pinnacles": {
    seeing:
      "The Pinnacles, in Nambung National Park north of Perth in Western Australia, are dense fields of limestone pillars standing in yellow sand — from a few tens of centimetres to about 3.5 m tall, numbering in the thousands. Around them is drifting yellow sand and low heath, with the Indian Ocean a few kilometres to the west.",
    formation:
      "The pillars' parent rock is the Tamala Limestone — formed from shell-fragment beach sand blown inland into dunes and gradually cemented. Rainwater soaking down along plant-root channels and cracks in the dunes dissolved vertical \"solution pipes\" in the limestone, whose walls became re-cemented and harder. Later the soft sand on top was blown away, leaving these erosion-resistant hard pillars. The exact process is still debated among researchers.",
    observation:
      "From the air the Pinnacles are a darker, rougher-textured patch within the coastal dune belt; only close up can you resolve the shadows of countless pillars. The pillar field contrasts with the smooth yellow drifting dunes around it and the bright white coastline further out. As the dunes move in the windy season, one set of pillars is buried and another exposed.",
    distinguish:
      "The Pinnacles are residual bodies left by dissolution plus differential erosion — not stalagmites (they do not grow by dripping water) and not fossil tree trunks. They are similar in form and related in origin to Purnululu's sandstone cones (both shaped by water eroding along cracks), but the Pinnacles are far smaller individually and develop in young coastal limestone.",
    concept:
      "This pillar field shows that a coastal dune is not just an inert pile of sand: given enough rainfall, seeping water can, over tens of thousands of years, rework the interior of a calcareous dune into alternating hard pillars and soft sand — and once the wind removes the soft part, the underground form is turned up to the surface.",
    // history sources: **1658 年荷兰航海图标的是海岸沙丘状导航地标（South / North Hummocks），不是尖峰石阵** ——
    //   石柱群在内陆、从海上根本看不见；它直到 **1934 年**地质调查才首次被记录，
    //   1967 年先划为保护区、1994 年三块保护区合并设立南邦国家公园（3 级，2026-09-09 核）。
    //   **原文把「荷兰航图标了这段海岸的地标」和「荷兰航图标了尖峰石阵」混成了一件事** ——
    //   与「霍伊老人被写成白垩海蚀柱」「湄功河被写成湄公河」同一形状。
    //   母岩确为塔马拉石灰岩；**成因至今没有定论**（溶蚀管模型 vs 钙结层/根管模型，2024 年仍有新研究
    //   在修正认知）—— **正文写的是「学界还有不同看法」，是正确写法**。
    //   Yued（努恩加语言群）作为传统主人的表述与官方一致。
    history:
      "The Nambung area is the country of the Yued Noongar people. A 17th-century Dutch chart already marked the coastal dunes here as navigation landmarks (the \"Hummocks\"), but the pillars themselves lie inland and are invisible from the sea. The pillar field was long covered by drifting sand, was first recorded by a geological survey in 1934, and only came to wide notice in the 1960s; it was added to the national park in 1994.",
  },

  "willandra-lakes": {
    seeing:
      "The Willandra Lakes Region, in the dry interior of south-western New South Wales, is a chain of 19 long-dry Pleistocene lake beds — five larger interconnected basins and fourteen smaller ones. Today there is no water — only flat lake floors and, on the eastern shore of each, a crescent-shaped ridge of sand and clay. Lake Mungo is the most thoroughly studied of them.",
    formation:
      "The lakes were once fed by Willandra Creek, formerly a branch of the Lachlan River. In wetter glacial times the lakes joined into one sheet of water; about 18,500 years ago the river shifted course and the climate dried, and the lakes dried out for good. While the lakes existed, prevailing westerly winds carried sand and clay from the lake shores to the eastern side and piled them into crescent-shaped \"lunettes\"; the one at Lake Mungo is known as the \"Walls of China.\"",
    observation:
      "From the air Willandra is a set of pale round and oval basins on a dry red-earth plain, each with a crescent of pale sand ridge hugging its eastern side. The Lake Mungo lunette is eroded by rain into a stretch of white gullied badlands. The whole region has no rivers and no open water — a \"fossil drainage map.\"",
    distinguish:
      "Willandra's basins are dry lakes left behind after the climate dried, unlike Lake Eyre, an \"active salt lake that fills only occasionally\": Lake Eyre still fills in big flood years, whereas the Willandra lakes have held no water for more than ten thousand years. Its lunettes are the key evidence for \"there was once a lake here, and this is the wind that blew then.\"",
    concept:
      "A lunette is the \"fingerprint\" of an ancient lake: it always sits on the downwind shore, and within it a layer of quartz sand marks a time when the lake held water, a layer of clay a time when the lake shrank to a salt flat. Reading a section through a lunette reconstructs the wet–dry history of that lake over tens of thousands of years.",
    // history sources: **「归还」与「重新安葬」是分属不同年份的两件事**：
    //   **芒戈女士 1992 年归还传统所有者保管、芒戈先生 2017 年归还；2022 年是正式重新安葬（reburial）**，
    //   连同其他遗骸共 108 具 —— ABC News（2 级，2026-09-09 核）。原文把三个年份压成了「2022 年归还并重新安葬」。
    //   **遗骸年代约 4 万年前（40,000 ± 2,000 BP）是 Bowler 等 2003 年在《Nature》重新测年的结果**，
    //   取代了此前 6.2 万年的旧说 —— 正文用的是现行共识，没有停在旧说。
    //   发现年份 1968（芒戈女士火化遗迹）与 1974（芒戈先生）、约 460 处化石脚印（2003 年发现，
    //   已知世界最大规模更新世人类脚印遗迹群）、1981 年列入世界遗产，均核实无误。
    //   族名 Mutthi Mutthi / Ngiyampaa / Paakantyi(Barkindji) 与 NSW NPWS、UNESCO 的官方表述一致。
    //   **干涸时间「约 1.85 万年前」是会被新研究修正的量**：NSW 环境局给「约 1.9 万年前开始干涸」，
    //   另有研究给约 1.4 万年前完全断流 —— 干涸是渐进过程，下一轮留意区间是否收窄。
    history:
      "Willandra is the country of the Mutthi Mutthi, Ngiyampaa and Paakantyi (Barkindji) peoples, continuously occupied for at least tens of thousands of years. In 1968 and 1974, geologists found in the Lake Mungo lunette two sets of human remains about 40,000 years old (known as \"Mungo Lady\" and \"Mungo Man\"), and later about 460 fossil footprints; these findings are all scientifically published and are central to the area's 1981 World Heritage listing. Mungo Lady's remains were returned to the custody of the traditional owners in 1992 and Mungo Man's in 2017; in 2022 the two were formally reburied along with other remains, 108 sets in all.",
  },

  "mount-gambier": {
    seeing:
      "Mount Gambier, in the far south-east corner of South Australia near the Victorian border, is a city built on a volcano. The town sits on several overlapping shallow craters, the largest of which holds the Blue Lake — a near-circular deep lake that turns vivid cobalt blue in the warmer half of the year and grey in the cooler half.",
    formation:
      "These craters are called maars: rising magma met groundwater, the water flashed to steam and drove a series of explosions that blasted broad shallow pits into the ground, ringed by low rims of debris. The crater floors lie below the water table, so they hold lakes. It belongs to a young volcanic province in south-eastern Australia.",
    observation:
      "From the air Mount Gambier is a set of nested circular hollows among farmland and town, each holding a lake: the Blue Lake is the deepest and most evenly coloured; nearby Valley Lake and Brownes Lake are shallower and partly wetland. The city streets run right around the crater rims.",
    distinguish:
      "The Blue Lake is a crater lake, entirely different in origin from a glacially scoured lake like Kanas or a fault-subsidence lake like Qinghai Lake. It also differs from a Hawaiian-style shield volcano that pours out sheets of lava — this was an explosive eruption where magma met groundwater, and the product is a pit, not a lava flow.",
    concept:
      "The Blue Lake's summer colour is generally attributed to warming of the surface water and the crystallisation of tiny calcium carbonate crystals in the lake, which scatter the blue light in sunlight so the water looks blue; when it cools the crystals dissolve and the blue fades. The exact mechanism is still under study. It is a reminder that a lake's colour can be a physical phenomenon that changes with the season, not a dye.",
    // history sources: **这一篇是「把不确定性如实写出来」的正面范例**：
    //   最近一次喷发年代的估计范围极宽（**4,300—28,000 年前**不等，最新放射性碳测年给约 6,000 年前），
    //   正文用了「不同方法」「若……成立」「可能」**三重限定**，与文献的不确定程度相符 —— 不需要改。
    //   蓝湖变蓝写的是「确切机制仍在研究」：学术研究确认色变与钙华（calcite）析出、光散射有关，
    //   但具体驱动（脱气 / 腐殖质共沉淀等）仍有不同表述 —— 同样没把有争议的机制写成定论。
    //   maar（低平火山口）的岩浆遇地下水爆炸成因与标准地质学一致；
    //   布安迪克（Boandik）人为传统主人，蓝湖的 Boandik 语名为 WarWar（1 级，甘比尔山市政府双名页）；
    //   1884 年建成抽水站取水供应市镇，沿用至今（2 级，南澳水务）。
    //   **火山测年会随新方法持续修正，下一轮回来复核这个区间。**
    history:
      "This area is the country of the Boandik people. Different methods give ages for the last eruption ranging from about 28,000 to about 6,000 years ago; if the most recent figure of about 6,000 years is correct, this may be the most recent volcanic eruption known on the Australian mainland. The Blue Lake has been Mount Gambier's drinking-water supply since 1884.",
  },
};
