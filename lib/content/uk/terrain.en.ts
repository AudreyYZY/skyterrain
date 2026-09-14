import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  "scottish-highlands": {
    // seeing sources: 本尼维斯山 1345 米（OS，2016 年重测 1344.527 米、官方取整；2 级转述），全英最高点无争议；加里东造山（约 4.9–3.9 亿年）与大峡谷断层为标准地质表述。2026-09-09 核，本轮无需改动。
    seeing:
      "The Scottish Highlands are a large area of ancient mountains in the north of the island of Great Britain, separated from the Lowlands to the south by the Highland Boundary Fault. They are not high overall, but rugged, harsh in climate and sparsely populated — the wildest region in Britain. The highest peak, Ben Nevis, is 1,345 m, the highest point in the whole of the United Kingdom.",
    formation:
      "The skeleton of the Highlands formed in the Caledonian orogeny about 490 to 390 million years ago — an ancient ocean (the Iapetus) closed, two land masses collided, and the rocks were compressed, metamorphosed and pushed up into a great mountain range. Over the following hundreds of millions of years that range was eroded down, and over the last ~2.6 million years it was re-carved by repeated glaciations, leaving today's deep glens, corries and fiord-like sea inlets. A dead-straight fault, the Great Glen Fault, slices the Highlands diagonally into a north-eastern and a south-western half.",
    observation:
      "From the air the Highlands are a dark brown and deep green mountain land cut to pieces by countless lochs and long narrow sea inlets, the summits rounded or sharp-ridged, the glens often holding a long thin loch. The west coast is especially broken, drowned glacial valleys; along the Great Glen an almost perfectly straight valley strings several long lochs, including Loch Ness, in a line. Snow lies on the tops through winter.",
    distinguish:
      "The Scottish Highlands and the Alps have both been reshaped by glaciers, but the Alps are young fold mountains from tens of millions of years ago and are still rising; the Highlands are an old range from 400 million years ago that stopped growing long ago and has been stripped down to its \"roots\". They are higher, more continuous and wilder than the Pennines or the Lake District of England.",
    concept:
      "The Scottish Highlands are a case study in an old range levelled and then \"revived\" by glaciers: a mountain range eroded for hundreds of millions of years would normally become a gentle upland, but the Quaternary glaciers cut deep along the old river valleys, re-carving the smooth plateau into deep glens and steep peaks. To recognise this, look for large gentle \"remnant plateau surfaces\" on the summits while the valleys are deep and steep. A common misconception is that rugged mountains must be young.",
    history:
      "The Highlands were long a Gaelic-speaking society organised by clan. In the Highland Clearances of the 18th and 19th centuries, large numbers of smallholding tenants were moved off the land in favour of sheep, and many emigrated overseas — a major reason the Highlands are so thinly populated today. From the 20th century the Highlands have relied on hydroelectricity, forestry, tourism and whisky distilling.",
  },

  "cairngorms": {
    seeing:
      "The Cairngorms, in the eastern Scottish Highlands, are a granite plateau and the largest area of high ground in Britain — five of the six highest mountains in Britain are here, and Ben Macdui, at 1,309 m, is the second-highest peak in the whole country. The plateau surface is close to an arctic-tundra environment, bitterly cold and windy in winter, an important area for British skiing and mountaineering, and the largest national park in the UK.",
    formation:
      "The Cairngorm granite cooled deep in the crust as a large body of magma about 427 million years ago, and was later exposed as the overlying rock eroded away and the granite mass was uplifted. Granite is fairly uniform and erosion-resistant, so it was worn to a gently rolling plateau surface; during the ice ages, glaciers gouged a ring of steep round corries into the plateau edge, while the plateau centre, protected under a cold-based ice cap, kept much of its ancient gentle surface.",
    observation:
      "From the air the Cairngorms are a broad, pale-brown upland with almost no sharp peaks, the top flat and dotted with boulder fields and small lochs; but the edge of the plateau suddenly drops away into a ring of deep-cut corries and U-shaped valleys holding deep lochs (such as Loch Avon). The lower slopes around them carry large stands of native Scots pine forest.",
    distinguish:
      "The Cairngorms and the western Highlands around Ben Nevis are both part of the Scottish Highlands, but the Cairngorms are a \"plateau type\" — a large gentle granite surface with steep corries at the edge; the western Highlands are more of a \"peak type\", with sharp ridges and deeper glens. Compared with the high Alps, the Cairngorms have no permanent glaciers, but the climate and landforms of the plateau top are near-subarctic.",
    concept:
      "The Cairngorms are a case study in selective glacial erosion: in the same upland, glaciers flowing fast at the edge erode strongly, gouging corries and deep valleys; in the centre, the base of the ice cap is frozen and barely moves, so it \"freezes in\" and preserves the ancient gentle surface. A common misconception is that ice-covered ground must be scoured flat — a cold-based ice cap is in fact the best \"protective cover\".",
    // history sources: 阿伯内西森林是苏格兰现存**面积最大**的原生喀里多尼亚松林，但不是仅存的一片
    //   （罗西缪库斯、格伦阿弗里克、拉诺赫黑林等都还在），
    //   https://treesforlife.org.uk/into-the-forest/visiting/（3 级，苏格兰喀里多尼亚森林保护组织，2026-09-08 核）。
    //   **中文此前写成「仅存」，英文写的是 largest surviving —— 是中文这边把「最大」改写成了「唯一」。**
    //   这是中英分歧的第三种方向：前两轮抓到的是英文凭空多出数字、以及中文注释与正文不同步，
    //   这一次是**中文把一个有限定的说法收紧成了绝对断言**。
    //   凯恩戈姆花岗岩侵入年代约 4.27 亿年前（伦敦地质学会，2 级）；
    //   国家公园 2003 年设立、2010 年扩界后 4,528 km²、为英国最大（3 级）—— 这两条核实属实。
    history:
      "The Cairngorms area has long been a place for hunting (deer, grouse) and grazing, and the old pine forest in the hills is the largest surviving stand of native forest in Scotland. In the 20th century roads and ski tows were built into the mountains. The Cairngorms National Park was established in 2003, and after a boundary extension in 2010 it became the largest national park in the UK, focused on protecting the alpine ecology and the old pinewoods.",
  },

  "southern-uplands": {
    // seeing sources: 梅里克山 843 米（DoBIH / hill-bagging，经转引，3 级）；PeakVisor 的 845 米与主流数据不一致、未采信。**这一条只有 3 级来源**，下一轮若能拿到 Ordnance Survey 的点位数据库应回来复核。2026-09-09 核，本轮无需改动。
    seeing:
      "The Southern Uplands are a belt of hill country in southern Scotland, between the Southern Upland Fault and the border with England, separating the Central Lowlands of Scotland from England. The hills are lower and more rounded than the northern Highlands, covered in grass and pasture, with the highest, the Merrick, at 843 m. Historically this was the country that people and armies had to cross between Scotland and England.",
    formation:
      "The rocks of the Southern Uplands are Ordovician to Silurian greywacke and shale (about 490 to 420 million years old), originally sediment on the floor of the Iapetus Ocean. In the Caledonian orogeny, as the ocean closed, these sea-floor sediments were scraped up layer by layer and stacked, imbricate, onto the continental margin, forming an accretionary wedge, then uplifted and folded. Long erosion and glaciation then wore it to today's gentle hills.",
    observation:
      "From the air the Southern Uplands are a rolling, rounded, largely rock-free green-brown hill country, divided by a few broad valleys (the Tweed, the Nith and others); the slopes carry large conifer plantations and sheep farms, and the valley floors hold towns and roads. It has none of the deep lochs and fiord-like inlets of the northern Highlands.",
    distinguish:
      "The Southern Uplands and the Highlands to the north both come from the Caledonian orogeny, but the Southern Uplands' rocks are \"softer\", the structure is an accretionary wedge, and the hills are worn rounder and lower; the northern Highlands' rocks are older and harder and the mountains are higher and more rugged. Compared with the Pennines of England, the two are similar in height, but the Pennines are an anticline of limestone and sandstone while the Southern Uplands are folded greywacke and shale.",
    concept:
      "The Southern Uplands are a case study in an accretionary wedge: when an ocean is subducting and closing, the sediment on its floor is scraped off in slices and thrust, one over another, onto the edge of the continent, forming a thick stack of beds all dipping the same way. To recognise an accretionary wedge, look at whether the beds repeat in sets, run in the same direction and are cut into strips by faults. A common misconception is to read these parallel rock belts as a single depositional sequence.",
    history:
      "The Southern Uplands were the Anglo-Scottish border country, known in the late medieval period for the feuding families of the Border Reivers. From the 18th century the area became an important region for Scottish sheep (especially coarse-woolled breeds) and woollen textiles. In the 20th century large areas were planted with fast-growing conifers, and in recent years some of Britain's largest onshore wind farms have been built here.",
  },

  "snowdonia": {
    // seeing sources: 官方名：Eryri 国家公园管理局自 2023-11-16 起以威尔士语 Eryri 为对外主用名，主峰正式名 Yr Wyddfa（级别 1，官网，2026-09-09 核）。
    //   https://eryri.gov.wales/
    //   **处理方式是不对称的**：英文正文全篇改用 Eryri / Yr Wyddfa（跟随官方用法），中文保留已通行的译名「斯诺登尼亚」「斯诺登峰」并在首句注明改名 —— 因为 Eryri 没有既成的中文译名，生造一个音译等于自造专名，而在中文正文里直接嵌拉丁串会被 TTS 读成字母。下一轮不要把这条「改回一致」。
    //   主峰 1085 米（OS，2010 年精测 1085.67 米，官方仍取 1085）、1951 年设园为英格兰与威尔士第三个国家公园（Peak District 1951-04-17 → Lake District 1951-05-09 → 此处 1951-10-18 → Dartmoor 1951-10-30）、板岩景观 2021 年列入 UNESCO：均核实无误。
    //   https://whc.unesco.org/en/list/1633
    seeing:
      "Eryri, in north-west Wales — known in English as Snowdonia until the national park authority adopted the Welsh name as its official name in 2023 — is the highest and most rugged mountain area in Wales. Its highest peak, Yr Wyddfa (Snowdon in English), is 1,085 m — the highest mountain in Wales and in England-and-Wales — with a mountain railway to the summit. This is a classic teaching area for glacial landforms in Britain, and a heartland of the Welsh language and culture.",
    formation:
      "Eryri's rocks are Cambrian to Ordovician marine sedimentary and volcanic rocks (about 540 to 440 million years old) — in the Ordovician this was an active volcanic arc, and the erupted tuffs and lavas are interbedded with shale and sandstone. The Caledonian orogeny folded and uplifted them. During the ice ages, glaciers cut deep along the valleys, gouging round corries (Welsh: cwm), knife-edged arêtes and a string of corrie lakes and ribbon lakes.",
    observation:
      "From the air Eryri is a set of dark, bare-rock mountain blocks split by deep valleys, the valley floors strung with inky-blue glacial lakes (such as Llyn Llydaw below Yr Wyddfa). On the slopes you can see the grey, giant stepped workings and spoil heaps of slate quarries. The valley mouths are green farmland and stone villages.",
    distinguish:
      "Eryri and the Lake District of England are both old volcanic-rock uplands strongly reshaped by glaciers, both with corries and ribbon lakes, but Eryri is more compact, its cliffs steeper, and it is slightly higher. Compared with the Scottish Highlands, Eryri is far smaller — an isolated block of high ground.",
    concept:
      "Eryri is a case study in the corrie (cwm / corrie): snow accumulates first in a shaded hollow on the mountainside and turns to ice, and the ice, rotating under its own weight, scoops the hollow out into a round basin with a steep back wall, a deep floor often holding a lake, and a low rock lip. To recognise a corrie, look at whether it faces the shaded side (north-east in the northern hemisphere) and has a steep back wall and a low rock threshold. A common misconception is to take a corrie lake for a volcanic crater lake.",
    history:
      "Eryri was the last stronghold of the medieval Principality of Wales. From the 19th century its slate quarrying roofed buildings around the world and was for a time the mainstay of the Welsh economy; the associated quarry landscape was inscribed as a World Heritage Site in 2021. The national park was established in 1951, the third in England and Wales, and has been called Eryri National Park since 2023.",
  },

  "brecon-beacons": {
    // seeing sources: 官方名：国家公园管理局 2023-04 起以 Bannau Brycheiniog 为对外官方名（级别 1，官方新闻稿）。
    //   https://beacons-npa.gov.uk/the-authority/press-and-news/archive/april-2023/brecon-beacons-national-park-reclaims-its-welsh-name
    //   处理方式与 snowdonia 一致、且同样是不对称的（英文改名、中文保留译名 + 首句注明），理由见 snowdonia 条注释。
    //   彭伊范山 886 米、1957-04-17 设园（1949 年法案下最后一个）均核实无误。
    //   https://beacons-npa.gov.uk/wp-content/uploads/basic-facts-about-the-brecon-beacons-national-park.pdf
    seeing:
      "Bannau Brycheiniog, in south Wales — the Brecon Beacons in English until the park authority adopted the Welsh name in April 2023 — is a line of flat-topped hills of Old Red Sandstone, with a clean escarpment facing north. The highest, Pen y Fan, is 886 m — the highest point in southern Britain. Close to the cities of south Wales, they are a popular walking area, and the sky is very dark: it is an International Dark Sky Reserve.",
    formation:
      "The main body of Bannau Brycheiniog is Devonian Old Red Sandstone — a suite of red sandstone and mudstone laid down on rivers and floodplains about 400 million years ago. The beds are roughly horizontal, the hard sandstone layers forming flat summits that dip gently south. Erosion and glaciation cut a steep \"cuesta\" escarpment on the north side, with several small corries and corrie lakes below it. The southern edge of the range is Carboniferous Limestone, with cave systems.",
    observation:
      "From the air Bannau Brycheiniog are several table-topped, turf-covered hills, gentle on the south slope and with a continuous dark escarpment on the north, a line of small lakes and corries at the foot of the cliff. The summits have almost no bare rock — they are broad acid grassland and peat. On the southern foot you can see the sinkholes and quarries of the limestone country.",
    distinguish:
      "The Bannau Brycheiniog and Eryri are both in Wales, but Eryri is hard volcanic rock, gouged by glaciers into sharp peaks and deep valleys; Bannau Brycheiniog are near-horizontal sandstone, characterised by flat tops and long escarpments, with much weaker glaciation. This kind of hill, steep on one side and gentle on the other, is a cuesta.",
    concept:
      "The Bannau Brycheiniog are a case study in a cuesta: when a suite of gently dipping, alternating hard and soft beds is eroded, the surface of a hard bed becomes the gentle slope (following the dip), and its cut-off end becomes the escarpment, so the hill is gentle on one side and steep on the other. To recognise a cuesta, check whether the gentle slope's angle matches the dip of the beds. A common misconception is to read the escarpment as a fault scarp.",
    history:
      "The Bannau Brycheiniog have long been upland grazing country (sheep, Welsh mountain ponies) and border-fortress country, with Roman roads and medieval castle remains in the hills. In the 19th century the southern edge of the range was the fringe of the south Wales coalfield and iron industry, with canals and railways cut through the hills. The national park was established in 1957.",
  },

  "lake-district": {
    // seeing sources: 斯科费尔峰 978 米（Ordnance Survey GetOutside 官方页，级别 1）；2017-07-09 以「文化景观」列入 UNESCO（国家公园管理局官方新闻稿，级别 1）。三段岩性（Skiddaw 群 / Borrowdale 火山群 / 志留系板岩砂岩）为标准地质表述。2026-09-09 核，本轮无需改动。
    seeing:
      "The Lake District, in north-west England, is a region of mountains and long narrow lakes arranged radially. England's highest peak, Scafell Pike (978 m), and its largest natural lake, Windermere, are both here. Known for its pastoral \"lake and mountain\" scenery and the Romantic poets (Wordsworth and others), it is a World Heritage Site and one of the most-visited national parks in Britain.",
    formation:
      "The Lake District's rocks form three belts from north to south: softer slates in the north (the Skiddaw Group), rugged Ordovician volcanic rocks in the middle (the Borrowdale Volcanic Group, forming the roughest central peaks), and Silurian slates and sandstones in the south. The whole area was uplifted into a dome, and rivers flow radially out from the centre. Quaternary glaciers cut down and deepened these radial valleys, and after the ice retreated they filled with ribbon lakes — from the air they look like the spokes of a wheel.",
    observation:
      "From the air the Lake District is a set of dark, craggy mountains with valleys reaching out in every direction from a central upland, each main valley holding a long thin lake (Windermere, Ullswater, Coniston Water and others), the lake shores green pasture and drystone-walled fields, the valley slopes carrying sheep and small woods. The crags are steepest around Scafell in the centre.",
    distinguish:
      "The Lake District, the Scottish Highlands and Eryri are all old rock reshaped by glaciers, but the Lake District's \"radial drainage plus ribbon lakes\" pattern is especially clear because it is a near-circular dome. Compared with the Scottish Highlands, the Lake District is small and slightly lower, but the relief and density of lakes per unit area is very high.",
    concept:
      "The Lake District is a case study in radial drainage and ribbon lakes: once the surface is uplifted into a dome, rivers flow down the steepest line, out from the centre, in a spoke pattern; ice-age glaciers deepen these valleys and leave transverse moraine dams in them, so after the ice retreats they fill with long, narrow lakes. A common misconception is to take a ribbon lake for a stretch of river.",
    history:
      "The Lake District's \"pastoral landscape\" is in fact shaped by centuries of grazing — the open grassland on the fells, the drystone walls, the sheepfolds are all agricultural heritage. From the late 18th to the 19th century, Wordsworth and the other \"Lake Poets\" made it a symbol of Romanticism and of the early conservation movement, and the National Trust began here. In 2017 it was inscribed as a World Heritage Site as a \"cultural landscape\".",
  },

  "pennines": {
    // seeing sources: 克罗斯费尔 893 米（3 级多来源一致）；奔宁之路 1965-04-24 开通、英国第一条国家步道（National Trails 官方，级别 1）。石炭系背斜与磨石粗砂岩为标准地质表述。2026-09-09 核，本轮无需改动。
    seeing:
      "The Pennines are a north-south upland in the north of England, running from the Scottish border down to the Peak District in the middle of the country, often called the \"backbone of England\". Overall it is an open moorland, mostly 400 to 700 m high, with the highest point, Cross Fell, at 893 m. It is the watershed between the east- and west-flowing rivers of England, and it separates the cities on the two sides.",
    formation:
      "The Pennines are a large north-south anticline (an upfold of the rock), cored by Carboniferous strata: limestone at the base, then sandstone (\"Millstone Grit\") and coal-bearing strata above. After the anticline was uplifted, the top beds were eroded away, exposing older rocks in rings. The hard grit forms flat moorland plateaus, and the limestone areas have cave systems and dry valleys. The coal seams on either side were the fuel base of Britain's Industrial Revolution.",
    observation:
      "From the air the Pennines are a dark-brown, almost treeless open upland covered in peat bog and grass, cut across by glacial broad valleys (\"dales\"); the dales are green pasture, drystone walls and stone villages, and the tops are open moor. The west slope is steep, the east slope gentle. Where the limestone is exposed (the Yorkshire Dales, the White Peak) the ground is pale and bare-rock.",
    distinguish:
      "The Pennines and the Southern Uplands of Scotland are similar in height, but the Pennines are an anticline of Carboniferous limestone and sandstone while the Southern Uplands are an accretionary wedge of older greywacke and shale. The Pennines are lower and gentler than the Lake District or Snowdonia, and their glaciation mainly \"widened the valleys\" without so many sharp peaks and corries.",
    concept:
      "The Pennines are a case study in an anticlinal upland and a watershed: rock folded up into an anticline and then uplifted remains a high ground even after the top is eroded, and that high ground becomes the divide between the drainage on the two sides — rain on one side flows to the North Sea, on the other to the Irish Sea. A common misconception is that a watershed must be a sharp ridge — the Pennine watershed is a broad, gentle expanse of moor.",
    history:
      "The coalfields on either side of the Pennines, and the water power and water supply the range provided, were key to the rise of the Lancashire and Yorkshire cotton and wool textile cities (Manchester, Leeds and others) in the 18th and 19th centuries. The ridge itself was sheep-grazing and quarrying country. In 1965 Britain's first National Trail, the Pennine Way, opened along the ridge.",
  },

  "mourne-mountains": {
    // seeing sources: 多纳德山 850 米（3 级多来源一致）；花岗岩古近纪约 56 Ma 侵位（British Geological Survey Earthwise，级别 1）；莫恩墙 1904–1922 年、约 35 公里、翻越 15 座山头（3 级）；C.S. Lewis 的纳尼亚灵感有其本人书信与散文为据，正文用「据说启发了」这种保留措辞与史实相符。**零争议红线本轮专门复核过一遍：通过。**另确认莫恩不是国家公园而是 AONB / National Landscape，正文未误写。2026-09-09 核，本轮无需改动。
    //   https://earthwise.bgs.ac.uk/index.php/Mourne_Mountains_Complex,_Palaeogene_intrusive_centre,_Northern_Ireland
    seeing:
      "The Mourne Mountains, in the south-east of Northern Ireland in County Down, are a compact group of granite mountains that rise a short distance in from the shore of the Irish Sea. The highest, Slieve Donard, is 850 m — the highest peak in Northern Ireland. The mountains are not high but tightly packed and steep, and the Mourne Wall, about 35 km long, runs over the summits and is the emblem of the range.",
    formation:
      "The Mourne granite was intruded about 56 million years ago (Palaeogene) — at a time when the North Atlantic was rifting and there was widespread igneous activity (the North Atlantic Igneous Province), with volcanoes and intrusions of this age in Iceland, western Scotland and Northern Ireland. After the granite body cooled, the softer overlying rock was stripped away and the hard granite stood out as mountains. Ice-age glaciers then cut it into steep valleys and rock steps.",
    observation:
      "From the air the Mournes are a cluster of grey, round- or cone-topped, sparsely vegetated granite peaks packed into a small area near the coast; the valleys hold reservoirs (such as the Silent Valley), and the grey Mourne Wall winds across the slopes like a contour line. The foot of the mountains passes quickly into green farmland and seaside towns.",
    distinguish:
      "The Mournes and the Cairngorms of Scotland are both granite mountains, but the Cairngorms are much older granite (over 400 million years), worn to a broad plateau; the Mournes are young granite (56 million years), compact and steep, more \"fresh\". Right by the coast, the Mournes go from sea level to 850 m in only a few kilometres, a strong land-sea contrast.",
    concept:
      "The Mournes are a case study in the exhumation of a granite intrusion: granite cools a few kilometres down and does not itself make a mountain; only when the rock above it is eroded away over a long time and the granite body is \"floated\" up to the surface does it stand out as a mountain, because it resists erosion better than the surrounding rock. To recognise this kind of mountain, look at whether the massif is one uniform body of coarse-grained rock with baked older rock around it. A common misconception is to take a granite mountain for a volcano.",
    history:
      "The Mourne Wall is a dry-stone wall built between 1904 and 1922 to enclose the catchment that supplies water to Belfast, running about 35 km over fifteen summits. The granite of this area was quarried extensively for kerbstones and building in Britain and Ireland. The scenery of the Mournes is said to have inspired Narnia in the writing of C.S. Lewis.",
  },

  "peak-district": {
    // seeing sources: 1951-04-17 英国第一个国家公园、1932-04-24 金德斯科特集体擅入及其立法影响：均据公园管理局官方页（级别 1）。白峰 / 暗峰的石炭系岩性对比为标准地质表述。2026-09-09 核，本轮无需改动。
    seeing:
      "The Peak District, in the middle of England at the southern end of the Pennines, is ringed by big cities — Manchester, Sheffield and others. It divides clearly in two: the \"Dark Peak\" of the north and the eastern and western wings is dark sandstone moorland plateau; the \"White Peak\" of the south and centre is pale limestone plateau and deep-cut dales. The Peak District was the first national park in Britain (1951).",
    formation:
      "The Peak District's rocks are all Carboniferous. At the bottom is limestone laid down in a shallow sea (the White Peak); above it is deltaic \"Millstone Grit\" sandstone and coal-bearing strata (the Dark Peak). The whole area was uplifted into a north-south dome, the sandstone and coal on top were eroded away, and the older limestone was exposed in the centre. The hard grit forms flat-topped moors and \"edge\" escarpments, and the limestone areas have dry valleys, sinkholes and caves.",
    observation:
      "From the air the centre of the Peak District is a pale, largely treeless limestone upland divided into small walled pastures, with a few green deep dales (such as Dovedale) cut into it; around it and to the north is dark-brown, flat, peat-covered gritstone moor plateau, often edged by a dark line of gritstone cliff. The cities press right up to the national park boundary.",
    distinguish:
      "The Peak District is simply the southern end of the Pennines — same rocks, same structure — only lower and surrounded by cities. The \"Dark Peak vs White Peak\" contrast within it is exactly the contrast between sandstone moorland and limestone karst: one wet, acidic and dark, the other short of surface water, alkaline and pale.",
    concept:
      "The Peak District is a case study in rock type controlling landform: the same dome, the same uplift and climate, and yet the sandstone areas form flat-topped acid bogs while the limestone areas form dry valleys and caves — the whole difference is in whether the rock can be dissolved by water and whether it lets water through. To tell which you are standing on, look for surface rivers and whether the soil is acid or alkaline. A common misconception is that adjacent areas with different landforms must owe the difference to different climates.",
    history:
      "The Peak District has long been a crossing of the Pennines and an area of quarrying (lime, lead). In 1932 a group of walkers staged a \"mass trespass\" on Kinder Scout in protest at landowners closing off the moors, helping to drive the \"right to roam\" legislation and the national park system in Britain. Today the Peak District is one of the most-visited national parks in Britain.",
  },

  "yorkshire-dales": {
    // seeing sources: 1954 年设园（2 级）；福因斯修道院牧羊庄园与中世纪羊毛贸易史实成立（3 级）；马勒姆湾 70–80 米，正文用「几十米高」的区间表述（2 级公园官方页）。2026-09-09 核，本轮无需改动。
    seeing:
      "The Yorkshire Dales, in the northern Pennines, are a limestone upland cut by broad glacial valleys (\"dales\"). They are known for classic limestone landforms: bare \"limestone pavements\", white cliffs (\"scars\") tens of metres high such as Malham Cove, deep vertical shafts and huge underground cave systems. On the surface there are drystone walls, stone barns and grazing sheep.",
    formation:
      "The main body of the Yorkshire Dales is Carboniferous limestone, built from the calcium carbonate of organisms in a warm shallow sea over 300 million years ago, in near-horizontal beds. After uplift, rainwater carrying carbon dioxide dissolved the limestone strongly along its joints and bedding planes: the surface is etched into grooves (forming \"limestone pavement\"), water quickly goes underground and hollows out shafts and caves, and the surface is left \"short of water\". Ice-age glaciers then widened and flattened the main dales, exposing the white scars.",
    observation:
      "From the air the Yorkshire Dales are a pale grey-green upland, with several flat-floored, steep-sided glacial valleys cutting across, tiers of white limestone scars running along the valley slopes on contour; on the high plateaus you can see gleaming bare limestone pavement and round sinkholes. The valley floors are green pasture, a grid of drystone walls and riverside villages.",
    distinguish:
      "The Yorkshire Dales and the Peak District's White Peak are the same Carboniferous limestone and the same kind of karst, but the Dales have been more thoroughly reworked by glaciers — broad flat valleys, rows of scars, many shafts. Compared with the tower karst of Guilin in China, this is a cold-climate, weakly uplifted, temperate karst of \"plateau plus deep valley plus underground drainage\", with no rock towers rising from the ground.",
    concept:
      "The Yorkshire Dales are a case study in karst being short of surface water: limestone can be dissolved by rain and also lets water through, so water does not gather into rivers on the surface but seeps down the joints to form underground streams, leaving dry valleys, sinkholes and beheaded streams on top. To recognise a karst area, look at whether surface streams often \"flow along and then disappear into the ground\". A common misconception is that a rainy place must have a well-developed surface drainage.",
    history:
      "The Yorkshire Dales' drystone walls, barns and monastic sheep granges (such as the estates of Fountains Abbey) are the legacy of centuries of upland sheep farming. Lead was mined here in the 18th and 19th centuries. The national park was established in 1954. The \"Yorkshire Three Peaks\" walk and caving in the dales are classics of British outdoor recreation.",
  },

  "north-york-moors": {
    // seeing sources: 连片欧石南沼地口径与公园管理局官方页一致（级别 1）；Boulby 崖高约 203 米、英格兰东海岸最高（3 级）；1952 年设园；明矾业已带「之一」限定，符合排名断言要写口径的规矩。2026-09-09 核，本轮无需改动。
    seeing:
      "The North York Moors, in the north-east of England, are a sandstone plateau whose top carries the largest continuous expanse of heather moorland in England and Wales — when it flowers in late summer the whole upland turns purple. The plateau is cut by several deep dales, and its eastern edge drops straight into the North Sea as the highest stretch of sea cliff on England's east coast.",
    formation:
      "The rocks of the North York Moors are Jurassic (about 180 to 150 million years old) sandstones, shales and thin limestones, laid down in shallow-sea and deltaic settings, in near-horizontal beds dipping gently south. After uplift, the hard sandstone beds form the flat plateau surface, and rivers cut deep dales along the weaker zones. The plateau is poorly drained and the climate cool and wet, so over thousands of years thick acid peat has formed, and only heather, cotton-grass and the like can grow.",
    observation:
      "From the air the North York Moors are a dark-brown (or, in late summer, purple) flat open upland cut into finger shapes by several green deep dales (Farndale, Rosedale and others); the dales are farmland and villages, the dale slopes carrying woodland. On the east is a straight line of sea cliff and the coastal towns of Whitby and Robin Hood's Bay. On the plateau you can see the trackbeds of the narrow-gauge railways that once carried ironstone.",
    distinguish:
      "The North York Moors, Dartmoor and Exmoor are all English \"moors\" covered in heather and peat, but the North York Moors' bedrock is Jurassic sandstone and the land form is a dissected plateau; Dartmoor is granite, Exmoor Devonian sandstone. The \"bog\" of all three is acid peat, a product of climate plus poor drainage, not a natural desert.",
    concept:
      "The North York Moors are a case study in blanket bog / moorland: on a cool, wet, poorly drained upland, plant remains decompose more slowly than they build up, so an acid peat layer accumulates year on year, locking up the nutrients, and only plants that tolerate poverty and acidity such as heather can grow — hence the large, monotonous purple-brown moor. A common misconception is to treat moorland as \"barren wasteland\" — it is in fact an important carbon store and a special habitat.",
    history:
      "The North York Moors were historically worked for alum (one of Britain's earliest chemical industries, from the 17th century), ironstone and good building stone. Medieval abbeys such as Rievaulx ran large sheep farms here. Today the moors are managed by private estates, traditionally burnt in patches for grouse shooting. The national park was established in 1952.",
  },

  "dartmoor": {
    // seeing sources: 花岗岩约 280–290 Ma（2 级转述 BGS / 学界），正文中文「约 2.9 亿年」与英文「295 Ma」都落在区间内，**但中英不是同一个数**——下一轮建议直接查 BGS 达特穆尔地质图说明书统一到一个数；南英格兰最大开阔荒野（公园管理局官方，级别 1）与不列颠青铜时代遗迹最密集（English Heritage 官方，级别 1）核实无误。2026-09-09 核。
    seeing:
      "Dartmoor, in Devon in south-west England, is a granite upland and the largest area of open wild country in southern England. Its signature is the \"tor\" — piles of granite weathered into blocks and stacked in layers, standing alone on the bare moor like natural stone castles. Dartmoor also has the densest concentration of Bronze Age remains in Britain.",
    formation:
      "Dartmoor's granite cooled underground as a large body of magma about 295 million years ago, and was later exposed as the overlying rock was stripped away and the granite as a whole was uplifted. The granite weathers along its internal horizontal and vertical joints: where the joints are close-spaced the rock is hollowed into hollows, where they are widely spaced the rock is left, forming the layered tors. The plateau is poorly drained and carries thick peat bog; the slopes are strewn with frost-shattered granite blocks (\"clitter\").",
    observation:
      "From the air Dartmoor is a pale-brown, almost treeless, gently domed upland, ringed by green deep valleys and farmland. Dark tors are dotted across it, along with waterlogged peat bogs and grazing ponies and sheep. Several Devon rivers (the Dart, the Teign and others) run radially out from the centre.",
    distinguish:
      "Dartmoor, the Cairngorms of Scotland and the Mournes of Northern Ireland are all granite uplands, but Dartmoor's \"tor plus peat bog\" combination is the most typical, and glaciation here was very weak (in the ice ages it sat at the ice-sheet margin, with only periglacial frost weathering). Compared with the North York Moors, both are moorland, but Dartmoor's bedrock is granite and it has tors.",
    concept:
      "Dartmoor is a case study in the tor: as granite cools it forms a regular network of joints, groundwater along the close-spaced joints rots the rock into loose debris, and blocks bounded by widely-spaced joints survive relatively intact; when the debris above is stripped away, these intact blocks stand out as tors. To recognise a tor, look at whether it is a pile of blocky rock with horizontal cracks, surrounded by a slope of loose stones. A common misconception is that tors are stacked by people or carried in by glaciers.",
    history:
      "Dartmoor's upland has the densest prehistoric remains in Britain — stone rows, stone circles and the foundations of thousands of Bronze Age round houses. Tin has been mined here since the Middle Ages, leaving extensive workings in the valleys. In the 19th century a prison and quarries were built. Today large parts of the upland are used as military training ground, and it is also a national park.",
  },

  "exmoor": {
    // seeing sources: 红鹿：埃克斯穆尔国家公园管理局官方页面口径为「英格兰最大的野生红鹿群」（级别 1，2026-09-09 核）；昆托克丘陵官方监测页佐证英格兰另有独立野生种群（2023 年冬约 643 头，级别 2）。原文「仅存」不成立，已改。
    //   https://www.exmoor-nationalpark.gov.uk/nature-and-landscape/our-habitats-and-wildlife/red-deer
    //   https://www.quantockhills.com/surveys-and-monitoring/deer
    //   海崖「英格兰最高的一段」与 Great Hangman 318 米一致；1954-10-19 设园核实无误。
    seeing:
      "Exmoor, spanning Devon and Somerset, is a sandstone moorland whose most distinctive feature is its northern edge: the moor does not slope gently to the sea but drops straight into the Bristol Channel as steep sea cliffs hundreds of metres high, among the highest in England. The moor carries the semi-wild Exmoor pony and England's largest herd of wild red deer. It is also an International Dark Sky Reserve.",
    formation:
      "Exmoor's rocks are Devonian (about 400 to 360 million years old) sandstones and slates, folded and uplifted in the Caledonian and Variscan orogenies. The hard sandstone beds form the gently rolling moorland plateau; the plateau is cool and wet and poorly drained, covered in acid peat and heather. Rivers (the Exe, the Lyn and others) cut steep deep combes north from the plateau straight into the sea — it is precisely because the rivers are short and steep and the coast is retreating fast that the moor \"meets the cliff edge\" as high sea cliffs.",
    observation:
      "From the air Exmoor is a gently rolling brown-and-green upland cut by narrow wooded combes; the northern edge is an almost continuous dark line of sea cliff, with open moor right up to the cliff top and a narrow boulder shore below. The south side grades into green farmland and hedgerows.",
    distinguish:
      "Exmoor and Dartmoor are two neighbouring south-west English moors, but Dartmoor is granite, higher, with tors; Exmoor is Devonian sandstone, a little lower, and its defining feature is the high sea cliffs. Compared with the chalk cliffs of Dover, Exmoor's cliffs are dark sandstone, higher and steeper.",
    concept:
      "Exmoor's northern edge is a case study in \"moor meeting sea\": when the edge of an upland is also a coast being eroded and retreating fast, rivers have no time to build gentle flats at their mouths, and the upland is \"sliced\" into a steep cliff standing straight against the sea. To recognise this kind of cliff, look at whether the cliff top runs straight into open upland and there is almost no marine flat at the foot. A common misconception is that a higher sea cliff means stronger waves — here it is mainly because the land was already high.",
    history:
      "Exmoor was a royal hunting \"forest\", with its own management and law in the Middle Ages. In the 19th century there was an attempt to reclaim the moor as farmland and to mine iron ore (with an aerial ropeway to carry the ore down). The national park was established in 1954. R.D. Blackmore's novel Lorna Doone made this moor widely known.",
  },

  "cheviot-hills": {
    // seeing sources: 切维厄特山 815 米（少数来源 816，**1 米级取整差异，判定不改**）；BGS Earthwise 给早泥盆世约 395–400 Ma 的安山质火山中心 + 晚期花岗岩侵入（级别 1），正文「约 3.9 亿年」落在同一取整范围；奔宁之路 1965 年开放、英国第一条国家步道，北端柯克耶特姆；1388 年奥特本之战。2026-09-09 核，本轮无需改动。
    //   https://earthwise.bgs.ac.uk/index.php/Cheviot_%E2%80%94_early_Devonian_volcanic_rocks,_granite_and_basement_-_an_excursion
    seeing:
      "The Cheviot Hills straddle the border between England and Scotland — a range of rounded, turf-covered, thinly populated hills. The highest, The Cheviot, is 815 m. This is the core of Northumberland National Park in England and the northern end of Britain's first National Trail, the Pennine Way.",
    formation:
      "The core of the Cheviot Hills is the andesitic lava and volcanic debris left by a large volcano — the \"Cheviot volcano\" — active about 390 million years ago (early Devonian), with a later granite body intruded at the centre. After the volcanism ended, this hard volcanic rock resisted erosion better than the surrounding sedimentary rock, and was uplifted and long worn down into today's smooth rounded hills. Ice-age ice sheets polished it further.",
    observation:
      "From the air the Cheviot Hills are a run of continuous, dome-topped hills almost entirely covered in grass and bog, with very little bare rock; the broad shallow valleys hold streams and scattered sheep farms and almost no villages. The hilltops are wet and boggy year-round. The border line (England-Scotland) roughly follows the watershed.",
    distinguish:
      "The Cheviot Hills are next to the Southern Uplands and look like them — both rounded border hills — but the Cheviot rock is Devonian volcanic rock and granite, while the Southern Uplands are older Ordovician-Silurian greywacke and shale. The Cheviot is further north and more desolate than the northern end of the Pennines.",
    concept:
      "The Cheviot Hills are a case study in a levelled old volcano: after hundreds of millions of years of erosion a volcano has long lost its cone and crater, and what remains is the hardest rock from its underground and surface parts (lava, volcanic neck, intrusion), which, being erosion-resistant, stands a little above its surroundings as a gentle upland. A common misconception is that a \"volcano\" must be a cone-shaped mountain — most ancient volcanoes are now just an ordinary hill or upland.",
    history:
      "The Cheviot Hills were one of the most fiercely contested stretches of the Anglo-Scottish border, with medieval \"bastle\" border towers and battlefield sites in the hills (such as Otterburn, 1388). This has long been border grazing country, and gave rise to the hardy Cheviot breed of sheep. Today most of it is national park and military training area.",
  },

  "south-downs": {
    // seeing sources: 南唐斯国家公园：指定生效 2010-03-31（2009-11-12 确认修订），管理局 2011-04-01 起全面运作（法定文书，级别 1）—— **正文的「2010/2011」双年份不是含糊，而是准确对应两个节点，判定不改**。至今仍是英格兰最新的国家公园。**注意：南唐斯 2010 年已从 AONB 升格为国家公园，不适用同批奇尔特恩、高尔的「AONB → National Landscape」改名。** 2026-09-09 核，本轮无需改动。
    //   https://www.legislation.gov.uk/uksi/2010/497/note/made
    seeing:
      "The South Downs are a line of chalk hills in south-east England, running from Hampshire to the coast of East Sussex, where at Beachy Head they meet the sea as dazzling white cliffs. They have a steep escarpment on the north side and a gentle slope dipping toward the sea on the south, with open grassland and wheat fields and almost no trees on top. They are the newest national park in England (2010/2011).",
    formation:
      "The rock of the South Downs is chalk — an almost pure calcium carbonate soft rock built from the skeletons of tiny marine organisms (coccoliths), formed in a warm shallow sea about 100 to 66 million years ago. The far ripples of the Alpine orogeny then gently folded and uplifted the strata of south-east England into a large anticline; the top of the anticline was eroded away, and the chalk beds of the two limbs now dip outward, the cut-off face (toward the centre of the anticline) forming the escarpment and the gently dipping bedding surface forming the slope — this is a cuesta.",
    observation:
      "From the air the South Downs are an east-west, smoothly rolling, largely treeless green (or, after harvest, golden) belt of hills; on the north a continuous steep slope with lowland and villages below, on the south a gentle descent to the coastal plain. Several rivers (the Arun, the Ouse and others) cut across the hills, forming gaps. The eastern end at Beachy Head and the Seven Sisters is a wavy line of white cliffs.",
    distinguish:
      "The South Downs, the North Downs to the north and the Chiltern Hills are all chalk cuestas, different limbs of the same eroded anticline. Unlike the Carboniferous limestone of the Pennines, chalk is softer, purer and younger, and the landform is rounded \"dry valleys plus escarpment\", with no caves or rock towers.",
    concept:
      "The South Downs are a case study in cuesta landscape after an anticline is eroded: strata arched into an anticline and uplifted are breached at the top first, leaving the two limbs of hard rock dipping outward, the cut-off side forming an escarpment and the bedding side a gentle slope. To recognise this, look for two lines of hills running parallel with their escarpments facing each other — they are often the two limbs of one anticline. A common misconception is to read the escarpment as a fault.",
    history:
      "The South Downs have been grazed for thousands of years into open \"chalk grassland\", one of the most biodiverse grassland types in Britain. On the hills are Neolithic \"causewayed enclosures\", Bronze Age barrows and Iron Age hillforts. In the Second World War the south slope of the Downs was used for war preparation. In recent decades over-cultivation has greatly shrunk the chalk grassland, and the national park is working to restore it.",
  },

  "chilterns": {
    seeing:
      "The Chiltern Hills, north-west of London, are a line of chalk hills with a clear escarpment on the north-west overlooking the lowland below, and a gentle dip slope toward the London Basin on the south-east. Large beech woods hanging on the escarpment are their signature. The Thames cuts through the range at Goring, leaving a distinct gap (the \"Goring Gap\").",
    formation:
      "The Chilterns' rock is chalk, like the South Downs, and is likewise a limb of a large upfold (the northern edge of the \"London-Hampshire Basin\") created by the far effects of the Alpine orogeny in south-east England. The chalk dips gently south-east, and the cut-off north-west end forms the escarpment. Chalk lets water through, so there are almost no permanent surface rivers, only some seasonal \"winterbourne\" streams; the slopes are covered by a younger layer of clay and flint gravel (\"clay-with-flints\"), which suits beech.",
    observation:
      "From the air the Chilterns are a south-west-to-north-east green wooded belt of hills, with a continuous steep slope on the north-west (the dark green beech woods on the slope contrasting sharply with the pale farmland below) and, on the south-east, a gentle descent broken up by dry valleys, merging into the suburbs of London. At Goring you can see the gap where the Thames passes through the middle of the hills.",
    distinguish:
      "The Chilterns and the South Downs are almost a \"mirror image\" pair of chalk cuestas, belonging to the south and north limbs of the same breached upfold: the Chilterns' escarpment faces north-west, the South Downs' faces north, with the London Basin between them. Because of the clay-with-flints on its slopes, the Chilterns are much more wooded than the grassy South Downs.",
    concept:
      "The Chilterns' \"Goring Gap\" is a case study in an antecedent river: the Thames was already flowing there before the hills were uplifted, or while they rose only slowly, and as the chalk was slowly domed up the river cut down fast enough to keep pace, \"sawing\" through the rising hills and leaving a transverse gorge-gap that does not fit the present landscape. A common misconception is that a river always goes around high ground — some rivers are \"older\" than the high ground.",
    // history sources: AONB → National Landscape：**2023-11-22 起**英格兰与威尔士全部 AONB 统一改用这个对外名，**法定名称仍是 AONB、不是「升级」**（级别 1，管理局官网，2026-09-09 核）。
    //   https://www.chilterns.org.uk/news/tags/aonb/
    //   **这一条漏在了上一批**：高尔半岛那条已经把日期查对了（2023-11），台账里也写下「下一轮要把全库的 AONB 搜一遍」，结果同一个回合里派下一批时没有做 —— 见 known-errors B1-b。本轮已把全库的「杰出自然风景区 / AONB / National Landscape」搜了一遍，只有这两处。
    //   戈灵缺口的「先成河」机制核实成立：泰晤士河至少自早更新世就流经此处、随白垩缓慢抬升持续下切，冰盖从未到达戈灵一带（3 级，与主流一致）。
    history:
      "The Chilterns' beech woods historically supplied timber for the furniture trade of the surrounding towns (especially High Wycombe), where \"bodgers\" turned chair parts on the spot in the woods. The ancient trackway the Icknield Way runs along the hills. From the 19th century the area became a commuter belt for London (\"Metro-land\"). Most of it is an Area of Outstanding Natural Beauty (AONB) — a designation renamed National Landscape for public use in November 2023, with the statutory name unchanged.",
  },

  "white-cliffs-of-dover": {
    // seeing sources: 崖高约 110 米、海峡最窄处约 33–34 公里（两者是不同测量点与取整，**不构成矛盾，本轮明确判定不改**）；国民信托管理东肯特约 1000 英亩、含崖顶约 5 英里（白崖全长约 8 英里），「大部分」成立（级别 1）。1875 年首次泳渡英吉利海峡、两次大战期间的隧道用途属广泛记载史实。2026-09-09 核，本轮无需改动。
    //   https://www.nationaltrust.org.uk/visit/kent/the-white-cliffs-of-dover
    seeing:
      "The White Cliffs of Dover, at the south-eastern corner of England, face the narrowest part of the English Channel — France is only about 34 km away here, and visible on a clear day. The cliff face is a brilliant white, about 110 m high, and because it is the first sight of Britain from a ship or ferry, it has long been one of the country's emblems.",
    formation:
      "The cliffs are chalk: an almost pure calcium carbonate soft rock, formed when countless tiny planktonic algae (coccoliths) in the warm, clear shallow sea of the Cretaceous (about 100 to 66 million years ago) died and their skeletons settled and compacted on the sea floor. The sea floor was later uplifted into land, and waves constantly beat against and undercut the cliff foot, so that the upper rock loses support and falls away in large blocks — which is why the cliff stays steep and white (a fresh fall has not yet grown plants and lichen).",
    observation:
      "From the air the White Cliffs of Dover are a near-vertical white band along the coast, the cliff top a gentle green grassland with a few lighthouses and disused gun batteries, the cliff foot a narrow boulder shore with constantly falling chalk blocks. Dover harbour is set into the cliffs, and the French coast is faintly visible across the Channel.",
    distinguish:
      "The White Cliffs of Dover and the Seven Sisters are the same chalk and the same kind of sea cliff, but the Dover stretch is more continuous and closer to the European mainland; the Seven Sisters undulate. Compared with the dark sandstone cliffs of Exmoor, chalk cliffs are whiter, softer and collapse more often.",
    concept:
      "The White Cliffs of Dover are a case study in cliff retreat: waves can only directly attack the cliff foot, and after cutting a notch there, the rock above collapses for lack of support, so the cliff line as a whole retreats inland, leaving a debris \"wave-cut platform\" in front. To tell whether a cliff is active, look at whether the face is fresh and bare of plants and whether there are freshly fallen blocks at the foot. A common misconception is that a sea cliff is \"carved\" by waves — it is mainly gravity collapse after the foot is undercut.",
    history:
      "Extensive tunnels are dug in the chalk beneath the cliffs, used in both world wars as command posts, hospitals and artillery observation points. Facing the shortest sea crossing, Dover has always been a key point of Britain's coastal defence, and it was the starting point for the first successful swim of the English Channel in 1875. Today most of the cliffs are managed by the National Trust.",
  },

  "jurassic-coast": {
    // seeing sources: UNESCO 正式名称为 Dorset and East Devon Coast（2001 年列入），Jurassic Coast 是通俗名；长度官方约 96 英里（约 154–155 公里）；三叠—侏罗—白垩由西向东逐渐变年轻、约 1.85 亿年连续记录，均核实一致。级别 1/2，2026-09-09 核。
    //   https://unesco.org.uk/our-network/world-heritage-sites/dorset-and-east-devon-coast-the-jurassic-coast
    seeing:
      "The Jurassic Coast is a roughly 155 km stretch of coast in southern England, between Devon and Dorset, inscribed as a World Heritage Site in 2001 under its official name, the Dorset and East Devon Coast. Walking it is like turning the pages of a geology book: from west to east the cliff rocks are in turn Triassic, Jurassic and Cretaceous, recording about 185 million years of Earth history in unbroken sequence, and it is rich in ammonite and other fossils.",
    formation:
      "The strata of this coast were originally laid down roughly horizontally, layer by layer, in the seas, estuaries and deserts of different ages. The whole succession was later tilted gently to the east, so the coastline cuts across progressively younger rock from west to east. Rocks of different hardness erode differently — waves have hollowed the soft mudstones into bays and left the hard limestones as headlands, shaping features such as Lulworth Cove (an almost enclosed round bay), Durdle Door (a limestone sea arch) and Chesil Beach (a shingle barrier 29 km long).",
    observation:
      "From the air the Jurassic Coast is a cliff line whose colour and form keep changing: the western section is red Triassic sandstone, the middle is grey-and-yellow Jurassic mudstone and limestone (much of it landslipped), and the eastern section is white chalk. A round enclosed cove, an isolated sea arch and a long shingle bank separating a lagoon from the sea all stand out along the shore.",
    distinguish:
      "The Jurassic Coast and the White Cliffs of Dover are both cliffs of southern England, but the Dover cliffs are chalk only; the value of the Jurassic Coast is the \"continuous sequence\" of strata — seeing the rocks of three geological periods in one stretch of coast. Compared with a coast of hard ancient rock as in Scotland, the strata here are young, soft, fossil-rich and prone to landslips.",
    concept:
      "The Jurassic Coast is a case study in a tilted succession plus a differential-erosion coast: when a gently dipping set of strata is cut across by the coast, the coastline passes in turn through rock of different ages and hardness, the soft beds retreating into bays and the hard beds standing out as headlands, so the coast becomes indented. To recognise this kind of coast, look at whether adjacent bays and headlands correspond to different strata. A common misconception is to treat all these bays as river mouths.",
    history:
      "In the early 19th century Mary Anning excavated complete marine-reptile fossils — ichthyosaurs, plesiosaurs — from the Jurassic cliffs around Lyme Regis, work that had a deep influence on early palaeontology. The limestones of this coast (Portland stone, Purbeck stone) have been quarried extensively for London landmarks such as St Paul's Cathedral.",
  },

  "giants-causeway": {
    // seeing sources: UNESCO 正式名称 Giant's Causeway and Causeway Coast，1986 年列入（级别 1）。
    //   https://unesco.org.uk/our-network/world-heritage-sites/giants-causeway-and-causeway-coast
    //   约四万根玄武岩柱、约 6000 万年前北大西洋张裂期、1693 年向皇家学会报告、1883 年通电车：均核实一致（3 级交叉印证）。
    //   **零争议红线本轮专门复核过：通过** —— history 段只写地质史与广泛记载的芬恩·麦库尔传说、科学史，未触及任何现代政治 / 族群议题。2026-09-09 核。
    seeing:
      "The Giant's Causeway, on the north coast of Northern Ireland, is about 40,000 tightly packed polygonal basalt columns, most of them six-sided, running from the cliff foot out into the sea like a giant stone staircase. It and the coast around it were inscribed in 1986 as the Giant's Causeway and Causeway Coast, Northern Ireland's first World Heritage Site. Local legend has it that the causeway was built by the giant Finn McCool for a fight across the sea.",
    formation:
      "About 60 million years ago, as the North Atlantic was rifting, there were large fissure eruptions of flood basalt around Antrim (part of the North Atlantic Igneous Province, contemporaneous with Iceland and western Scotland). One thick lava flow cooled and contracted slowly and evenly at the surface, and, like drying mud cracks, produced regular tension fractures inward from the cooling surface, splitting the whole layer into near-vertical columns — the slower and more even the cooling, the more regular the columns.",
    observation:
      "From the air the Giant's Causeway is a honeycomb rock platform of countless polygonal column tops at the foot of the dark Antrim basalt cliffs, sloping gently into the sea. The cliff above shows several horizontal lava flows, with red palaeosols between them (weathered during the pauses between eruptions).",
    distinguish:
      "The Giant's Causeway's columnar jointing is completely different in origin from Punakaiki's limestone \"pancakes\": the Causeway is lava cooling and contracting, splitting vertically; the pancake rocks are horizontally bedded sedimentary rock, differentially weathered. There are many similar columnar-basalt sites in the world (Iceland, the island of Staffa in Scotland), and the Giant's Causeway is especially well known because its columns are so regular and so completely exposed.",
    concept:
      "The Giant's Causeway is a case study in columnar jointing: a thick lava flow (or any evenly cooling rock body), as it cools and contracts, develops a set of regular tension cracks perpendicular to the cooling surface, dividing the rock into polygonal columns; ideally hexagonal (the lowest-energy shape). To recognise columnar jointing, look at whether the columns are roughly perpendicular to the original cooling surface (a horizontal lava flow gives vertical columns). A common misconception is that the columns were chiselled by people or grew as crystals.",
    history:
      "The Giant's Causeway became known to European science after a report to the Royal Society in 1693, and in the 18th and 19th centuries it was a famous example in the geological debate between \"Neptunists\" and \"Plutonists\". This coast was also an early tourist destination from the 1740s, and from 1883 an electric tramway ran to it. It is managed today by the National Trust.",
  },

  "seven-sisters": {
    // seeing sources: 南唐斯 2010 年由 AONB 升格为国家公园，现行官方称谓即 National Park（3 级交叉印证）。**注意：这一条不适用同批高尔半岛的「AONB → National Landscape」改名** —— 南唐斯早已不是 AONB。2026-09-09 核，本轮无需改动。
    seeing:
      "The Seven Sisters, on the south coast of England at the eastern end of the South Downs, are a stretch of undeveloped, undulating chalk sea cliff, one cliff top rising and falling after another (there are more than seven if you count). To the west is the mouth of the Cuckmere — a rare natural river mouth on England's south coast with no engineering and no harbour. This stretch often stands in for the more famous White Cliffs of Dover in films.",
    formation:
      "The rock of the Seven Sisters is also chalk. The South Downs are a chalk cuesta, and originally had many small valleys (dry valleys) running south from the hills toward the sea. The sea cliff has been retreating steadily and has \"cut off\" these dry valleys one by one: where a valley floor meets the cliff, the cliff top is lower; where the high ground between valleys meets the cliff, the cliff top is higher — so the cliff-top line has this wave-like undulation.",
    observation:
      "From the air the Seven Sisters are a white sea cliff with a wave-like rising-and-falling top line, the cliff top open green grassland, a series of shallow dry valleys reaching from inland toward the cliff edge and stopping abruptly at the cliff. At the western end the Cuckmere meanders freely to the sea across a floodplain with no embankments.",
    distinguish:
      "The Seven Sisters and the White Cliffs of Dover are the same chalk and the same kind of sea cliff; the difference is that the Dover stretch has a fairly straight cliff top and a large port, while the Seven Sisters' top clearly undulates because it cuts across a string of dry valleys, and there is almost no built development.",
    concept:
      "The Seven Sisters are a case study in a sea cliff truncating dry valleys: when a piece of land with relief is cut through by a retreating sea cliff, the former valleys and ridges leave a high-low pattern on the cliff face — the cliff is low at the valleys and high at the ridges. To recognise this, check whether the wavelength of the cliff-top undulation matches the spacing of the inland valleys and ridges. A common misconception is that the high-low pattern of the cliff top is caused by differences in rock hardness.",
    history:
      "The mouth of the Cuckmere was historically a landing place for smugglers. In the early 20th century there were plans to develop this stretch of coast as a seaside resort, dropped after local opposition, so the coast kept its natural form. Today the Seven Sisters and neighbouring Beachy Head are part of the South Downs National Park, jointly managed by local government and conservation bodies.",
  },

  "cornwall-coast": {
    // seeing sources: 康沃尼岩基约 2.8 亿年前侵位；UNESCO「Cornwall and West Devon Mining Landscape」2006-07-13 列入，正式名与正文一致（级别 1）。2026-09-09 核，本轮无需改动。
    //   https://whc.unesco.org/en/list/1215/
    seeing:
      "The Cornwall coast, at the south-western tip of the island of Great Britain, has sea on three sides, and is known for its high granite and slate cliffs, hidden sandy coves, and the disused mine chimneys scattered along the cliff tops. Land's End, at the far west, is the westernmost point of mainland Britain. This is also one of the sunniest and earliest-spring parts of Britain.",
    formation:
      "Cornwall's skeleton is a large granite body intruded about 280 million years ago (the \"Cornubian batholith\"), several rises of which reach the surface as granite uplands such as Bodmin Moor and Penwith; between and around them, and along the coast, is older, baked slate and sandstone. Both granite and hard slate resist erosion, and the strong Atlantic swell has cut them into high, steep cliffs; hydrothermal fluids released as the granite cooled concentrated tin, copper and other metals in the fractures.",
    observation:
      "From the air the Cornwall coast is a dark, jagged, almost continuous line of high cliff, with the occasional golden beach tucked into a valley mouth between two headlands. The cliff tops are wind-flattened grass and heather, dotted with stone mine engine houses and tall thin chimneys. Land's End at the western end is a group of granite reefs, with the open Atlantic beyond.",
    distinguish:
      "Cornwall's granite cliffs are different from the chalk cliffs of Dover and the sandstone cliffs of Exmoor: granite is the hardest and most erosion-resistant, the cliff retreats very slowly, and the face is mostly grey massive blocks and vertical fractures. It resembles the rocky coast of western Scotland, but Cornwall's granite body and mining landscape are more prominent.",
    concept:
      "The Cornwall coast is a case study in a granite batholith and its ore: as a large body of granite magma cools in the crust, the last residual fluid, rich in volatiles and metals, rises along the fractures of the body and the country rock and precipitates as ore veins. So granite areas often have associated tin, tungsten and copper. To recognise such an area, look for large areas of uniform coarse-grained granite and ore veins along the fractures. A common misconception is to treat an ore vein as part of the rock itself.",
    history:
      "Tin mining in Cornwall goes back to the Bronze Age, and in the 18th and 19th centuries this was one of the world's main sources of tin and copper, developing deep-shaft mining and steam pumping; the associated \"Cornwall and West Devon Mining Landscape\" was inscribed as a World Heritage Site in 2006. After the mines declined, large numbers of Cornish miners emigrated to mining regions in the Americas, Australia and South Africa.",
  },

  "pembrokeshire-coast": {
    // seeing sources: 「英国唯一以海岸景观为主设立的国家公园」、1952 年设立、海岸步道现行官方长度 186 英里：均核实无误（级别 1）；威尔士语官方并列名 Parc Cenedlaethol Arfordir Penfro 属实。2026-09-09 核，本轮无需改动。
    //   https://www.nationaltrail.co.uk/en_GB/trails/pembrokeshire-coast-path/
    seeing:
      "The Pembrokeshire Coast, at the south-western corner of Wales, is the only national park in Britain designated mainly to protect a coastline. Its coast changes enormously over short distances: steep limestone cliffs, black volcanic-rock headlands, drowned-valley inlets reaching far inland, raised ancient beaches, and a string of offshore islands. St Davids is the smallest \"city\" in Britain.",
    formation:
      "Pembrokeshire's rocks span a huge range of ages, from Precambrian through to Carboniferous, with Ordovician volcanic rocks among them. These strata were strongly folded and faulted in the Variscan orogeny. Milford Haven is a large river valley drowned by the sea (a ria) — deep and sheltered, a natural harbour. In many places along the coast you can see platforms a few metres above the present sea — wave-cut platforms from higher sea levels in past interglacials, left behind as the land rose relatively.",
    observation:
      "From the air the Pembrokeshire Coast is a ring of intricate rocky cliff with a few sandy bays; in the south Milford Haven is a long narrow waterway driven deep inland, with oil refineries and jetties on its banks; off the western end, the St Davids peninsula has several small islands such as Ramsey, with white tide races often visible on the sea.",
    distinguish:
      "The Pembrokeshire Coast and the Cornwall coast are both rocky coasts of south-west Britain, but Cornwall is dominated by a single large granite body and its mining landscape; Pembrokeshire's rock types and ages are far more mixed, and the coastal forms (cliff, bay, ria, island) are more varied. Like western Scotland it has rias, but on a smaller scale.",
    concept:
      "The Pembrokeshire Coast is a case study in a raised wave-cut platform: waves cut a near-horizontal rock platform at a given sea level over a long time; if the land then rises relative to the sea (or sea level falls), that old platform is lifted above the present sea as a step hanging at or partway up the cliff. To recognise a raised platform, look for a flat step on the cliff face, often covered with old beach gravel. A common misconception is to take it for an artificial road embankment.",
    history:
      "St Davids is the burial place of the patron saint of Wales, and its medieval cathedral gave this small place \"city\" status. Southern Pembrokeshire, because of large numbers of English and Flemish settlers in the Middle Ages, is called \"Little England beyond Wales\", with a language and place names different from the north. The national park was established in 1952, and its 186-mile coast path is one of the best-known long-distance walks in Britain.",
  },

  "gower-peninsula": {
    // seeing sources: 现行官方名：**2023 年 11 月起，英格兰与威尔士的 AONB 统一改称 National Landscape**，高尔现为 Gower National Landscape；1956-05-09 是英国第一个 AONB 这一史实不变。级别 1，2026-09-09 核。
    //   https://national-landscapes.org.uk/national-landscapes/gower
    //   **这是本国这一轮的第二类改名**（第一类是 Eryri / Bannau Brycheiniog，见 known-errors B1-b）：一个**分类名**的改名会一次影响多个条目，比单个地名改名更容易漏 —— 下一轮要把全库的「杰出自然风景区 / AONB」搜一遍。
    //   帕维兰洞 1823 年出土「帕维兰红衣女士」（实为约 33,000 年前的男性遗骸，西欧已知最早的仪式性墓葬之一）核实无误（2 级）。
    seeing:
      "The Gower Peninsula (Welsh: Y Gŵyr), reaching into the Bristol Channel west of Swansea, is a small peninsula only about twenty kilometres long, but in 1956 it became the first formally designated Area of Outstanding Natural Beauty in the whole of Britain — a designation renamed National Landscape in November 2023, so it is now the Gower National Landscape. It packs limestone sea cliffs, an Old Red Sandstone ridge, large sandy bays and dunes, and salt marsh into a very small area.",
    formation:
      "Gower's rocks are mostly Carboniferous limestone, folded into a series of east-west anticlines and synclines. The limestone sea cliffs have caves, arches and stacks (such as Worm's Head). The central spine of the peninsula, Cefn Bryn, is made of more erosion-resistant Old Red Sandstone and stands a little above its surroundings. Rhossili Bay at the western end is a continuous sandy beach about five kilometres long, backed by large wind-blown dunes.",
    observation:
      "From the air the south coast of Gower is a run of pale grey limestone cliffs with a few golden sandy bays between them; at the western end Rhossili Bay is a straight long beach, ending in the rocky \"dragon's tail\" of Worm's Head, which can be walked to at low tide. The north coast of the peninsula is large salt marsh and tidal flats. Down the centre runs a low red-brown sandstone ridge.",
    distinguish:
      "Gower and the Pembrokeshire Coast are both in south Wales and both dominated by limestone sea cliffs, but Gower is smaller and more concentrated, walkable in a day, with several coastal landforms packed together; Pembrokeshire is a whole national-park-scale coast.",
    concept:
      "Gower is a case study in the evolutionary sequence of coastal erosion landforms: a sea cave is hollowed at a weakness in a headland first, the cave breaks through the headland to become an arch, the arch roof collapses to leave a stack separated from the shore, and the stack is then worn down to a stump — around Worm's Head you can see the stages of this sequence at once. A common misconception is to treat these as unrelated isolated features.",
    history:
      "Gower's Paviland Cave yielded the \"Red Lady of Paviland\" in 1823 — in fact the remains of a man about 33,000 years old, one of the earliest known formal human burials in western Europe. The peninsula has many prehistoric chambered tombs and Iron Age hillforts. In the 20th century the growth of Swansea threatened the peninsula, and development has been restricted since its AONB designation.",
  },

  "cheddar-gorge": {
    seeing:
      "Cheddar Gorge, in the Mendip Hills of south-west England, is a limestone gorge with sheer walls, its highest cliff about 135 m — the deepest gorge in England. A road runs along the floor, climbers are on the walls, and large caves such as Gough's Cave are hidden in the sides. The town at its mouth is the origin of cheddar cheese — traditionally matured in the caves.",
    formation:
      "The Mendip Hills are an upland of Carboniferous limestone. Cheddar Gorge is generally thought to have formed during the ice ages: the Mendips then lay in a zone of permafrost, the underground fractures were frozen and impermeable, so summer meltwater and heavy rain could only gather into powerful rivers on the surface, which cut down hard along a fault line and carved this deep gorge. After the ice ages ended and the permafrost thawed, the water went back underground (draining away through caves in the gorge floor), and the gorge became the near-riverless \"dry valley\" it is today.",
    observation:
      "From the air Cheddar Gorge is a winding deep notch in the southern edge of the Mendip Hills, its walls bare grey-white limestone with scattered trees, the gorge mouth opening toward the Somerset Levels. The gorge itself has no obvious river; the floor is road and car parks. Upstream is a gentle limestone upland dotted with sinkholes.",
    distinguish:
      "Cheddar Gorge is different from an ordinary gorge cut by a river over a long time: it was carved fast by surface water under the special conditions of the ice ages (permafrost temporarily making the limestone impermeable), and now has no surface river. Compared with the glacially widened valleys of the Yorkshire Dales, Cheddar Gorge is narrow, deep and winding — the form of direct fluvial downcutting.",
    concept:
      "Cheddar Gorge is a case study in a surface river on limestone during a permafrost period: limestone is normally permeable and dry at the surface; but under permafrost the fractures are sealed with ice, water cannot seep away and can only flow and erode strongly on the surface. So a dry valley in some limestone areas is evidence of \"a surface river in the past, none now\". A common misconception is that a limestone dry valley never had a river.",
    // history sources: 切达人年代：英国自然历史博物馆现行口径约 1 万年前（校准年代约 10,564–9,915 cal BP）；原文的「约 9000 年前」是早年未校准放射性碳年代的旧说法，已更新。级别 1，2026-09-09 核。
    //   https://www.nhm.ac.uk/discover/cheddar-man-mesolithic-britain-blue-eyed-boy.html
    //   **这一条是「数字本身没写错、只是背后的方法换了一代」** —— 校准与未校准的放射性碳年代差了一千年，靠年份格式看不出来。
    //   峡谷崖高：文中「约 135 米」与常引的 137 米（449 英尺）落在取整范围内，不构成矛盾，不改。
    history:
      "Cheddar Gorge's Gough's Cave yielded \"Cheddar Man\" in 1903 — a complete human skeleton about 10,000 years old, the oldest near-complete human remains known in Britain, whose mitochondrial DNA has been widely studied. The gorge's caves have been a paid tourist attraction since the 19th century.",
  },

  "great-glen": {
    // seeing sources: 大峡谷断层：**走滑断层**（左行，约 100 公里位移），BGS Earthwise 口径（级别 1）—— 正文没有写成一般裂谷，正确。尼斯湖按体积为英国最大淡水体（苏格兰环境署，级别 1），与洛蒙德湖「按面积最大」是两个口径、并存不矛盾。喀里多尼亚运河 1822 年首航、托马斯·特尔福德设计（级别 1）。2026-09-09 核，本轮无需改动。
    //   https://earthwise.bgs.ac.uk/index.php/Faulting_and_seismicity,_Grampian_Highlands
    seeing:
      "The Great Glen (Scottish Gaelic: Glen Mòr) is a dead-straight valley slicing diagonally across the Scottish Highlands, from Fort William in the south-west to Inverness in the north-east, dividing the Highlands in two. A run of deep, narrow lochs lies end to end along it, including the well-known Loch Ness — by volume it is the largest freshwater body in Britain. The Caledonian Canal links these lochs into a navigable waterway.",
    formation:
      "The Great Glen is so straight because it follows a major strike-slip fault — the Great Glen Fault. Around the end of the Caledonian orogeny, the rock on the two sides of the fault slid horizontally past each other by about 100 km (sinistral). The rock in the fault zone was badly shattered and is especially easy to erode, so rivers and later glaciers cut down along this weakness, and the glaciers gouged the valley floor very deep (the deepest part of Loch Ness's bed is well below sea level).",
    observation:
      "From the air the Great Glen is a near-perfectly straight valley running right through the Scottish Highlands, its floor strung with several deep-blue long lochs; on either side are mountains cut by the valley, with straight fault-controlled gullies visible on the slopes. At the two ends are the towns of Fort William and Inverness, with Ben Nevis near the south-western end.",
    distinguish:
      "The Great Glen is different from an ordinary glacial valley in the Highlands: it is first of all a fault valley — straight, through-going and deep — and the glaciers merely worked along an existing weakness. Its origin is similar to some large strike-slip fault valleys in North America (such as the San Andreas valley in California), only this fault is now barely active.",
    concept:
      "The Great Glen is a case study in fault-controlled topography: a large fault grinds the rock into a belt of weakness, and later rivers and glaciers erode preferentially along that belt, eventually forming a valley that is unusually straight and runs right across a whole mountain area. To recognise a fault valley, look at whether it is unusually straight, ignores the surrounding rock structure and offsets geological units that were once continuous on the two sides. A common misconception is that a valley this straight was dug by people or formed naturally by a river.",
    history:
      "The Caledonian Canal, designed by the engineer Thomas Telford and completed in 1822, uses the natural lochs of the Great Glen, plus dug channels and a series of locks, to let ships cross the Highlands without going round the dangerous seas of northern Scotland. The Loch Ness \"monster\" legend has made this a tourist hotspot since the 1930s.",
  },

  "loch-lomond": {
    // seeing sources: 洛蒙德湖约 71 平方公里、大不列颠岛面积最大的淡水湖（NatureScot，级别 1）。**范围限定是关键**：正文写「大不列颠岛」（不含北爱尔兰），与内伊湖条目的「英国与不列颠群岛面积最大」并存不矛盾 —— 这正是排名断言必须写口径的例子。2002 年成为苏格兰第一个国家公园属实。2026-09-09 核，本轮无需改动。
    seeing:
      "Loch Lomond, not far north-west of Glasgow, is the largest lake by surface area in Great Britain. Its distinctive feature is being \"one loch across two worlds\": the northern half is boxed into the Scottish Highlands, narrow and deep with steep mountains on both sides; the southern half enters the Lowlands, the loch suddenly widening, shallow, dotted with dozens of small islands. \"The bonnie banks of Loch Lomond\" is a famous Scottish song.",
    formation:
      "Loch Lomond straddles the Highland Boundary Fault — the point where the hard ancient metamorphic rock of the Highlands meets the softer sedimentary rock of the Lowlands. During the ice ages a large glacier flowed south along this line of weakness: in the northern Highland section it gouged a narrow valley deep and straight; on reaching the softer rock of the southern section it spread out fan-wise, gouging a broad shallow basin, and the drumlin ridges and erosion-resistant rock knolls it left as it retreated became the islands in the loch.",
    observation:
      "From the air Loch Lomond looks like a long-handled ladle with its bowl to the north — actually the other way: a deep-blue narrow loch to the north, driving straight into the mountains, and to the south an open, island-studded, pale-blue sheet of water with gentle farmland shores. The Highland Boundary Fault runs across the loch roughly through its southern part.",
    distinguish:
      "Loch Lomond is different from the purely glacial narrow lochs of the Scottish Highlands: half of it is in the Highlands and half in the Lowlands, and in the one loch you see two completely different lake forms — \"deep narrow trough\" and \"broad shallow island-studded\". This is precisely because it straddles a major geological boundary.",
    concept:
      "Loch Lomond is a case study in a geological boundary controlling landform: glaciers and rivers often erode along the contact between two rock types (often also a fault), because the contact zone is shattered and there is an abrupt change in hardness. So if a lake or valley \"looks different on each half\", it is probably straddling a geological boundary. A common misconception is to attribute the abrupt change in lake form to later human engineering.",
    history:
      "The fault line Loch Lomond lies on has historically been roughly the divide, in language and social structure, between the Scottish \"Highlands\" and \"Lowlands\". From the 18th century, being close to Glasgow and scenic, it became one of the earliest destinations for mass tourism. In 2002 Loch Lomond and the Trossachs became Scotland's first national park.",
  },

  "lough-neagh": {
    // seeing sources: 面积：DAERA 官方 383 平方公里；平均水深 8.9 米。级别 1，2026-09-09 核。各来源在 383–396 平方公里之间分散（测量口径与水位不同），**有官方一手数时以官方为准**。
    //   https://www.daera-ni.gov.uk/publications/lough-neagh-catchment-map
    //   「英国与不列颠群岛面积最大的湖」这个排名成立，与洛蒙德湖条目的「大不列颠岛面积最大」不冲突 —— 两者范围不同（不列颠群岛含北爱尔兰，大不列颠岛不含），各自成立。
    //   鳗鱼渔业为欧洲最大的野生鳗鱼渔场之一（AFBINI 官方，级别 1）、六郡中五郡汇入、班恩河为唯一出水口：均核实无误。
    seeing:
      "Lough Neagh, in the centre of Northern Ireland, is about 383 km² in area on the Northern Ireland environment department's figure — the largest lake by area in the UK and in the whole of the British Isles. But it is very shallow, only about 9 m deep on average, and you cannot see the far shore from any bank. Rivers from five of Northern Ireland's six counties eventually flow into this lake, which is drained by the River Bann to the north.",
    // formation sources: 盆地成因：**英国地质调查局把内伊湖盆地定性为受断层控制的构造洼地**（沿东北—西南走向的一组断层），学术文献另有「与北大西洋张裂相关的拉分盆地」的定性。原文的「玄武岩重量压弯地壳」不是主流框架。级别 1，2026-09-09 核。
    //   https://earthwise.bgs.ac.uk/index.php/Post-Variscan_deformation_and_basin_formation,_Northern_Ireland
    //   https://www.lyellcollection.org/doi/abs/10.1144/sjg42020101
    //   **这一条是这两轮地形核实里唯一一处「因果解释错了」而不是「数字错了」**：像「这个湖是怎么来的」这类机制性叙述，比数字更容易被简化到失真，而且**没有任何脚本能看出来**。
    formation:
      "Lough Neagh sits in a large structural basin. About 60 million years ago thick flood basalt was erupted around Antrim (the same lavas that form the Giant's Causeway); under regional extension the crust subsided slowly as a whole along a set of north-east–south-west trending faults, forming a saucer-shaped basin (British Geological Survey); the weight of the overlying lava was a contributing factor, not the main cause. Water gathered in the basin to form this large, shallow lake.",
    observation:
      "From the air Lough Neagh is a near-circular large body of water with a smooth outline right in the middle of Northern Ireland, surrounded by low flat farmland and a few small towns, with rivers flowing in from all sides. The shores are mostly reed and wet grassland, with no cliffs. Off the south-western shore you can see large areas of active lake-sand extraction.",
    distinguish:
      "Lough Neagh and Loch Lomond in Scotland are both large, but completely different in origin: Loch Lomond is a deep, long lake gouged by a glacier along a fault; Lough Neagh is a saucer-shaped shallow basin lake formed by large-scale crustal subsidence — round, shallow and flat. It is more like Lake Chad in Africa, a \"structural basin filled with water\".",
    concept:
      "Lough Neagh is a case study in fault-controlled basin subsidence: regional extension lets a whole block of crust sag slowly along a set of faults, and the basin fills with water to form a large, shallow lake; the weight of the overlying volcanic rock is a contributing factor, not the main cause (British Geological Survey). To recognise such a lake, look at whether it is large, round and shallow, sitting in a basin bounded by faults, with no obvious glacial gouging or deep-gorge marks. Two misconceptions are common: that a large lake must have been gouged by a glacier, and that the basin was simply pressed down by the weight of the lava.",
    history:
      "Lough Neagh's eel fishery has continued for centuries and is one of the largest wild-eel fisheries in Europe, long run by a co-operative of local fishers. In Irish legend the lake is the hole left when the giant Finn McCool tore up a lump of earth to throw at a rival (the lump landing in the sea to form the Isle of Man). Large-scale sand extraction from the lake has drawn environmental controversy in recent years.",
  },

  "river-thames": {
    // seeing sources: 全长约 346 公里、源头科茨沃尔德的 Thames Head；泰丁顿闸为潮区上限（3 级交叉印证）。**「塞文最长、泰晤士是完全在英格兰境内最长」这个限定写法与 river-severn 条目互相印证** —— 两条河的排名断言各自带了范围限定，不打架。2026-09-09 核，本轮无需改动。
    seeing:
      "The River Thames is about 346 km long, rising in the Cotswold Hills of south-west England and flowing south-east and then east through Oxford and London, finally reaching the North Sea through a wide funnel-shaped estuary. London is built on this river — specifically at the furthest point ships could reach upstream, which was also the lowest point at which the river could be bridged in early times.",
    formation:
      "The present course of the Thames formed step by step over hundreds of thousands of years. In several Pleistocene ice ages, the ice sheet advancing from the north blocked its earlier, more northerly course and pushed it onto today's more southerly line. On the soft rock it flows over (clay, sand) the river shaped a broad valley and a series of \"river terraces\" — much of the City of London stands on these gravel terraces a few metres above the present river, with drier ground. Below Teddington the river is affected by ocean tides, rising and falling twice a day.",
    observation:
      "From the air the upper Thames is a small river winding quietly through green pasture; on entering London the channel widens, held between stone embankments and swinging in big S-bends, dense city on both banks; below London the estuary opens quickly into a broad expanse of shallow water and mudflats, with large salt marshes and port facilities on either side. The Thames Barrier spanning the river in east London stands out.",
    distinguish:
      "By length, the Severn is the longest river in Britain; the Thames is the longest river entirely within England. Compared with the Severn Estuary, the Thames estuary has a far smaller tidal range and no bore, but its shipping and historical importance are greater.",
    concept:
      "The Thames valley's \"river terraces\" are a case study in a river leaving steps as it cuts down: a river builds a floodplain at a certain level in a certain period; then, because sea level falls or the land rises, the river cuts down again, leaving the old floodplain up high as a terrace; repeated, this makes a flight of steps on each side of the valley. To recognise terraces, look for a few near-horizontal benches on the valley sides, covered with river gravel. A common misconception is to take a terrace for an artificial embankment or road.",
    history:
      "The Thames is the axis of London's two thousand years of history: the Romans built Londinium (the forerunner of London) at the fordable/bridgeable point here. From the Middle Ages into modern times the Port of London was for a while the busiest port in the world. In the 19th century the river was extremely polluted (the \"Great Stink\" of 1858), prompting Bazalgette's large sewer system. The Thames Barrier, completed in 1982, protects London from flooding by storm surge on top of a high tide.",
  },

  "river-severn": {
    // seeing sources: 全长约 354 公里、英国最长的河（环境署口径，2 级）；塞文涌潮与河口大潮差，「约 15 米」属常见引用区间。**铁桥峡的成因机制本轮专门核过：正文写对了** —— 冰坝湖（Lake Lapworth）溢流切穿丘陵、永久改道，地质学会与 BGS 均采此说（另有冰下融水通道作为补充讨论，不否定主线）。2026-09-09 核，本轮无需改动。
    //   https://www.geolsoc.org.uk/science-and-policy/100-great-geosites/industrial-and-economic-importance/ironbridge-gorge/
    seeing:
      "The River Severn (Welsh: Afon Hafren) is about 354 km long — the longest river in the United Kingdom. It rises on Plynlimon in mid-Wales, winds through the Welsh hills, and on entering England passes through Shropshire, Worcester and Gloucester before reaching the Severn Estuary. This estuary has one of the highest tidal ranges in the world, up to about 15 m at spring tides, and a phenomenon called the \"Severn Bore\" — a wall of water travelling upstream on the flood tide.",
    formation:
      "The Severn's original upper course flowed north into the Irish Sea. In the last ice age, the ice sheet coming from the north blocked its way around Shropshire, the water ponded up as a lake against the ice dam, and finally overflowed through a low col and cut down hard to the south — this is today's Ironbridge Gorge, a young, steep gorge out of keeping with the gentle land on either side. After the ice retreated the river did not return to its old course but kept to this newly cut line to the sea. The Severn Estuary is a large funnel narrowing inland, so the incoming tide is squeezed higher and higher, producing the great tidal range and the bore.",
    observation:
      "From the air the upper Severn is a clear stream in the Welsh hills; at Shropshire it suddenly enters a stretch of steep-walled, wooded gorge (Ironbridge Gorge), with a famous iron bridge across it; below the gorge the river meanders broadly across the plains of western England; below Gloucester the channel widens quickly into a funnel-shaped estuary full of sandbanks and mudflats.",
    distinguish:
      "The Severn and the Thames are the two longest rivers in Britain: the Severn is longer, rises in Wales, and its estuary has a huge tidal range and a bore; the Thames is entirely in England, its estuary gentle, but it passes through the capital. The Severn's Ironbridge Gorge and the Great Glen are both unusual valleys, but the Great Glen is a fault valley while Ironbridge Gorge was cut by the overflow of an ice-dammed lake.",
    concept:
      "The Severn's Ironbridge Gorge is a case study in a valley cut by an ice-dammed lake overflow: when an ice sheet blocks a river, the water ponds up as a lake against the ice, and once it overflows at a low point it cuts down fast and hard along the new line, carving a deep, young gorge; after the ice retreats the river often \"sticks with\" the new course. To recognise this kind of valley, look at whether it is young and steep, cuts across high ground it should have gone around, and has old lake sediments upstream. A common misconception is that all gorges were cut slowly by a river over millions of years.",
    history:
      "Ironbridge Gorge is regarded as one of the birthplaces of the Industrial Revolution: in the early 18th century Abraham Darby first smelted iron on a large scale with coke rather than charcoal here; in 1779 the world's first cast-iron bridge crossed the Severn here. The gorge and its industrial remains were inscribed as a World Heritage Site in 1986. Two large bridges were later built across the Severn Estuary linking England and Wales.",
  },

  "the-fens": {
    // seeing sources: 泥炭氧化收缩导致地面持续下沉：与 Holme Fen Post 的实测证据一致（1852 年立桩，霍姆一带地面已低于海平面约 2.75 米，历史速率约每年 1 厘米）。**正文只写机制、不写数字，因此不需要补监测时点** —— 这是处理会过期量的另一条路：不给数字就不会过期。伊利 = 鳗鱼岛（Elge，比德记载）。2026-09-09 核，本轮无需改动。
    //   https://www.greatfen.org.uk/about-great-fen/heritage/holme-fen-posts
    seeing:
      "The Fens, in eastern England around the Wash, are the largest area of low flat land in Britain — much of it only a metre or two above sea level, some of it below. Today it is endless arable fields cut by dead-straight ditches, one of the most fertile farming regions in Britain. But before it was drained, this was a vast reed marsh and seasonally flooded wetland.",
    formation:
      "The Fens are a shallow basin subsiding slowly; when sea level rose after the ice age the sea came in for a time, and river silt and thick accumulations of peat then filled it to a near-horizontal wetland: marine clay on the seaward side, thick freshwater peat inland. From the 17th century people (initially under a Dutch engineer) dug dead-straight main drains, built embankments and pumped the water away with windmills (later steam engines, then diesel and electric pumps). Once the peat is drained and exposed to air it oxidises and shrinks, so the ground sinks further — which is why many fields today are lower than the water in the ditches beside them, kept dry only by the pumps.",
    observation:
      "From the air the Fens are absolutely flat, dark arable land divided into large blocks by geometrically straight ditches and roads, with almost no relief; two near-parallel artificial rivers (the Old and New Bedford Rivers) run dead straight across. Here and there is an isolated low mound — an \"island\" in the former marsh, on which medieval towns (such as Ely, literally \"eel island\") were built.",
    distinguish:
      "The Fens and the polders of the Netherlands are almost the same landform and the same technology: farmland below sea level kept going by artificial drainage and embankment. Unlike a natural delta plain (the Nile, the Yangtze delta), the \"dryness\" of the Fens today is entirely artificial — stop pumping and it would turn back into marsh.",
    concept:
      "The Fens are a case study in subsidence of peatland after drainage: peat is undecomposed plant remains with a very high water content; once drained and aerated, microbes rapidly break it down to carbon dioxide, its volume shrinks sharply and the ground sinks with it, and the more it is drained the lower it goes. To recognise this land, look at whether the fields are lower than the river beside them and whether wooden posts once driven into the peat now \"stand\" above the ground. A common misconception is that low land was always this low.",
    history:
      "The draining of the Fens began with projects funded by the Earl of Bedford and others in the 17th century, and over centuries completely transformed this land and the society of the \"Fen people\" who lived by fishing, fowling and reed-cutting. In the 20th century almost all the natural wetland became farmland; in recent years some areas (such as the Great Fen) are being deliberately restored from farmland to wetland, as carbon stores and nature reserves.",
  },

  "the-broads": {
    seeing:
      "The Broads, in Norfolk and Suffolk in eastern England, are a network of about sixty shallow lakes (locally \"broads\") and the slow rivers that connect them. The land is extremely low and flat, the water open, and it is the largest protected wetland in Britain, managed as the equivalent of a national park, and a popular area for boating holidays.",
    formation:
      "The shallow lakes of the Broads were long taken for natural lakes, until in the 1950s researchers confirmed, from the dead-straight edges and vertical banks of the lake floors and from historical documents, that they are in fact deep pits left by large-scale medieval peat digging (about the 12th to 14th centuries). At that time the area was densely populated and short of firewood, and peat was the main fuel. Later, as the land sank relative to the sea and after several storm surges, the water table rose and these abandoned peat pits were flooded and joined into today's group of shallow lakes.",
    observation:
      "From the air the Broads are an expanse of shallow water, reed bed and wet grassland strung together by countless ditches and a few winding slow rivers, with dozens of squarish, regular-edged shallow lakes scattered through it — it is exactly this \"too regular\" shape that gives away their artificial origin. The water's edge is dotted with windmills (mostly drainage \"wind pumps\") and boat moorings.",
    distinguish:
      "The Broads and the Fens are both low-lying wetlands of eastern England, but the Fens were \"pumped dry\" into farmland, while the Broads were \"flooded\" into a group of lakes and kept as wetland. The shallow lakes of the Broads are flooded man-made pits, clearly different in shape from natural oxbow or glacial lakes.",
    concept:
      "The Broads are a case study in landforms created by human activity: medieval peat digging was a purely economic activity, yet centuries later it left a whole system of lakes and waterways on the surface, which became an important ecosystem and a national park. To recognise this kind of \"man-made lake\", look at whether the edges are unusually straight, the depth uniform, and whether there is a historical record of digging or mining. A common misconception is to treat all lakes as naturally formed.",
    // history sources: Joyce Lambert（1916–2005）是植物学家 / 生态学家，1950 年代以泥炭取芯与植被地层学证实布罗兹湖岸近乎垂直、底部平坦，属中世纪人工泥炭坑被淹没，1960 年出版《The Making of the Broads》并获皇家地理学会 Gill 奖章。原文误作「历史学家」。2 级，2026-09-09 核。
    //   https://norfolkrecordofficeblog.org/2016/05/13/the-norfolk-broads-revealed-as-man-made-features-the-discoveries-of-dr-joyce-m-lambert/
    //   **布罗兹的法定地位本轮专门复核过：正文写对了** —— 它**不是**依 1949 年国家公园法设立的国家公园，而是依《1988 年诺福克与萨福克布罗兹法》于 1989 年设立布罗兹管理局、地位与国家公园相当（2015 年起对外也用 Broads National Park 这个名，但法律地位不变）。中世纪泥炭开采年代约 12–14 世纪核实一致。
    history:
      "The confirmation that the Broads are of artificial origin came mainly from the research of the botanist and ecologist Joyce Lambert and colleagues in the 1950s. In the Middle Ages the area belonged to large estates such as Norwich Cathedral, and peat extraction was on a huge scale. From the 19th century the Broads became a resort for sailing and river holidays. The Broads Authority was established in 1989, giving it status equivalent to a national park.",
  },

  "isle-of-skye": {
    seeing:
      "The Isle of Skye, in north-west Scotland, is the largest island of the Inner Hebrides, known for extremely rugged mountains and changeable weather (the name may relate to \"cloud\" or \"mist\" in Old Norse). The island has two groups of mountains of completely opposite character: the Black Cuillin, a ring of sharp, dark, near-vertical rock peaks; and the Red Cuillin, a set of rounded pink hills.",
    // formation sources: 特罗特尼什滑坡：伦敦地质学会（Geological Society）的口径是「不列颠群岛面积最大的连片滑坡地形」，约 40 平方公里 —— **按面积、范围是不列颠群岛**。原文写的「英国最长」既换了量纲又换了范围，查不到对应口径。级别 1，2026-09-09 核。
    //   https://www.geolsoc.org.uk/science-and-policy/historical-scientific-importance/trotternish/
    //   **核实方对「最长」报的是 unknown（查无支撑、也无反证）**，本轮没有停在 unknown，而是改用一级来源自己的措辞 —— 这与「拿不准就记 unknown」不冲突：unknown 指的是不许自己编一个替代说法，用来源原话不算编。
    //   约 5800 万年前（学界给库林岩浆中心约 60–57 Ma）、黑库林辉长岩 / 红库林花岗岩的岩性区分：均核实无误。
    formation:
      "About 58 million years ago, during the rifting of the North Atlantic, there was a large magma chamber beneath Skye. The gabbro (a dark, coarse-grained, very hard rock) that crystallised earlier and deeper in the chamber was later uplifted and exposed, and glaciers cut it into sharp peaks and deep valleys — the Black Cuillin; the later, more acidic part of the chamber crystallised as granite, which weathers differently and was worn into the rounded Red Cuillin. The north of the island is a large basalt lava plateau, and on the Trotternish peninsula the basalt cap sits on weak Jurassic mudstone and has slid slowly down the dip as a whole, forming the largest continuous area of landslide terrain in the British Isles — about 40 km² on the Geological Society's figure (the Old Man of Storr, the Quiraing and other strange features are on the landslip).",
    observation:
      "From the air the Isle of Skye has an extremely broken outline, with several long deep sea inlets cutting it into peninsulas. In the south-centre is the ring of jagged dark rock walls of the Black Cuillin around a glacial valley, with the rounded Red Cuillin hills beside it. The north is tiered green basalt plateau, and on the east side of the Trotternish ridge in the north-east is an area of collapsed, jumbled rock blocks and isolated pinnacles.",
    distinguish:
      "Skye's Cuillin mountains are different from the gneiss and greywacke mountains of the Scottish Highlands: they are Palaeogene igneous rock (gabbro, granite), young, hard and unusual in composition, cut especially sharp by glaciers. Compared with the Mournes of Northern Ireland (also Palaeogene granite), Skye's gabbro Black Cuillin are more precipitous.",
    concept:
      "Skye's Trotternish ridge is a case study in large landslide (rock-slide) landforms: a hard, heavy rock layer (basalt) sits on a weak, deformable one (Jurassic mudstone), and if the lower one tilts slightly or is undercut by erosion, the hard layer above slides down as a whole, slowly, breaking into blocks, leaving rows of back-tilted rock steps, isolated pinnacles and hollows on the slope. To recognise this, look at whether there is a large area of \"jumbled\", blocky, stepped ground below a cliff. A common misconception is to take a pinnacle left by a landslip for a volcanic neck or an erosion remnant.",
    history:
      "Skye was long the country of the MacLeod and MacDonald clans, with clan strongholds such as Dunvegan Castle on the island. In 1746 the fugitive \"Young Pretender\", Prince Charles, escaped via Skye with the help of Flora MacDonald, a story told in the \"Skye Boat Song\". The 19th-century Highland Clearances greatly reduced the island's population, and the \"Land League\" struggles of the late 19th century helped drive legislation to protect small tenants. Tourism is Skye's mainstay industry today.",
  },

  "outer-hebrides": {
    // seeing sources: 岛链约 210 公里（正文「约 200 公里」落在取整范围，判定不改）；刘易斯片麻岩原岩年龄约 30 亿–17 亿年，公认英国最古老岩石，**正文的「欧洲已知最古老的岩石之一」带了「之一」限定，稳妥**。2026-09-09 核，本轮无需改动。
    seeing:
      "The Outer Hebrides (Gaelic: Na h-Eileanan Siar) are a chain of islands about 200 km long off the north-west of Scotland, from Lewis and Harris in the north, through North Uist, Benbecula and South Uist, to Barra in the south. This is the main area where Scottish Gaelic is spoken in daily life, and one of the places where some of the oldest rocks in Europe come to the surface.",
    formation:
      "The main body of the islands is \"Lewisian gneiss\" — a suite of metamorphic rock formed about 3 billion years ago (Archaean) and repeatedly deeply buried and reworked under heat and pressure, among the oldest known rocks in Europe. It is extremely hard and erosion-resistant. Ice-age ice sheets polished this ancient low rock land and gouged countless shallow hollows, which filled with water — creating the distinctive \"knock and lochan\" surface of bare rock knolls alternating with small lochs, with hardly a tree in sight. On the western Atlantic coast, shell sand blown ashore forms a fertile low grassland called \"machair\".",
    observation:
      "From the air the Outer Hebrides are a low, pitted island land covered in countless small lochs, almost treeless, with an extremely intricate coastline; the east coast is rocky with fiord-like inlets, the west coast a continuous white sand beach, dunes and, behind them, the flat bright-green machair grassland. Southern Harris has a stretch of almost entirely bare rock, a \"lunar surface\".",
    distinguish:
      "The Outer Hebrides and Skye are neighbours but completely different in landform: Skye is a high mountainous island of Palaeogene igneous rock; the Outer Hebrides are a low flat rock land of Archaean gneiss, characterised by \"countless small lochs plus Atlantic beach grassland\". The rock here is far older than anywhere else in Britain.",
    concept:
      "The Outer Hebrides are a case study in ice-scoured rock surface (knock and lochan): when an ice sheet flows over a low-relief hard bedrock, it rounds off the rises (knocks) and gouges the more closely jointed, slightly softer spots into a scatter of shallow disordered hollows, which fill with water after the ice retreats. To recognise this, look for many small lochs with random orientation and no connection between them, separated by bare rounded rock knolls. A common misconception is that so many lakes must be river-cut or man-made.",
    history:
      "The Calanais standing stones on Lewis are one of the most important Neolithic megalithic sites in Britain, older than Stonehenge. In the Middle Ages the Outer Hebrides belonged to the \"Kingdom of the Isles\", closely tied to Norway, and only passed to Scotland in 1266. Harris Tweed, the local hand-woven cloth, is protected by law and must be hand-woven in islanders' homes.",
  },
};
