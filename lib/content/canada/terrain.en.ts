import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ North America · Canada ============
  "canadian-shield": {
    // seeing sources: 加拿大地盾约占国土 **50%**；已知最古老岩石为西北地区**阿卡斯塔片麻岩约 40.3 亿年** ——
    //   加拿大自然资源部（1 级，2026-09-09 核）。
    //   **正文写「有的超过 30 亿年」比实际更保守** —— 方向正确、没有夸大，是可接受的写法；
    //   若日后要写得更具体，可点名阿卡斯塔片麻岩并带年代。
    seeing:
      "The Canadian Shield is a large area of ancient crystalline rock wrapped around Hudson Bay, shaped like a huge shallow saucer, covering about half of Canada and extending into parts of the United States. Its rock is among the oldest on Earth (some more than 3 billion years), but the surface is not high — repeated glaciation has scraped it into a low, hard land dense with lakes and bogs. Most of Canada's forest, mineral wealth and hydropower is on the Shield.",
    formation:
      "The Canadian Shield is North America's \"craton\" — the most stable ancient core of the continent. It was assembled from older blocks of crust billions of years ago, and since then it has had no strong mountain building, only slow wearing down. In the past two or three million years, continental ice sheets repeatedly spread out from its centre and retreated, stripping off the soil and loose material, rounding the rock, and leaving countless ice-scoured hollows and lakes dammed by glacial debris.",
    observation:
      "From the air the Canadian Shield is a surface of dark green (conifer forest) interwoven with countless bright patches (lakes); rock is often bare, worn into smooth rounded backs. The lakes are irregular and randomly oriented, many lined up along cracks in the bedrock and glacial scratches. Relief is very low, with no obvious mountains — only low rock knobs and long glacially moulded ridges. Toward the north near the Arctic Circle, forest gives way to tundra.",
    distinguish:
      "The Canadian Shield and the Brazilian Highlands are both ancient cratons of a continent and geologically similar; but the Brazilian Highlands lie in the tropics, are raised higher, and are marked by red soil and mesas; the Canadian Shield is lower, at high latitude, and marked by glacial scouring and lakes. Versus a true \"plateau\": the Shield was not raised as a block — it is simply a large area of ancient rock long exposed and then planed by glaciers, and is named by its geological region (a shield), not by elevation.",
    concept:
      "A \"shield\" is a geological concept, not a landform one — it means a large area of a continent where Precambrian crystalline rock is exposed and has been stable for a long time, and its elevation can be high or low. A common misconception is to picture it as a shield-shaped highland: most of the Canadian Shield is only a few hundred metres above sea level, and Hudson Bay in its centre is actually sea. It is still slowly rising by \"isostatic rebound\" now that the ice sheets have melted.",
    history:
      "The Canadian Shield has been home for thousands of years to the Cree, Inuit, Anishinaabe, Innu and other Native nations, whose travel network was the rivers and lakes. From the 17th century the fur trade reached inland along the Shield's river and lake systems. In the 20th century the Shield's rich nickel, copper, gold, uranium and iron ores, and hydroelectric stations on its large rivers, became mainstays of the Canadian economy.",
  },

  "canadian-rockies": {
    // seeing sources: 罗布森山 **3,954 m**（BC 省公园管理局，1 级，2026-09-09 核），加拿大落基山最高峰。
    //   1885 年加拿大太平洋铁路穿越山区、同年在班夫温泉周围划出保护地（1887 年扩为落基山公园），
    //   是公认的加拿大第一个国家公园、世界第三个。
    //   哥伦比亚冰原是北美的**水文顶点**，融水分别流向太平洋、大西洋（经哈得孙湾）与北冰洋。
    //   斯托尼·纳科达（Stoney Nakoda）、克里（Cree）、库特奈（Ktunaxa）三个族名与公园管理方现行用法一致。
    //   **formation 段的逆冲年代区间未能证实，已另记 unknown。**
    //   **冰原面积是会退缩的量** —— 正文没写面积，是正确处理；日后要写必须带监测时点。
    seeing:
      "The Canadian Rockies are the stretch of the Rocky Mountain system along the British Columbia–Alberta border. They are closer to the west coast and more heavily glaciated than the U.S. Rockies. They are known for clearly bedded sedimentary rock, jagged peaks, large icefields and a string of glacial lakes; Banff, Jasper, Yoho and Kootenay national parks form a connected block that is a World Heritage site. The highest peak, Mount Robson, is 3,954 m.",
    // formation sources: 逆冲年代：Parks Canada 沃特顿湖地质页（1 级，2026-09-12 核）——逆冲席覆盖在约 7000 万年的白垩纪岩层之上，压缩始于约 80—85 Ma；USGS 收录的断层测年（2 级同行评议）给 Rundle 逆冲 72 Ma、McConnell 逆冲 52 Ma；Britannica 给 Laramide 80—55 Ma。⚠️ 这个区间是三处来源的交集，**没有任何单一官方表述直接写「80—55 Ma」**；原区间「1 亿—6000 万年」起点落在更靠西的 Columbian/Sevier 阶段、不属本条对象，终点也早于文献给出的 52—45 Ma 收尾。Jasper 公园官网只泛说「数百万年」，取不到区间。
    formation:
      "The rock of the Canadian Rockies is mostly limestone, dolomite and shale deposited in shallow seas over hundreds of millions of years. About 80 to 55 million years ago, in the Late Cretaceous to early Paleogene, compression from the west stacked these layers up along a series of near-parallel thrust faults — like pushing a stack of books — forming ranges of consistent trend. Glaciers then carved the upper mountains into horns, arêtes, cirques and U-shaped valleys; the Columbia Icefield is a large surviving alpine icefield whose meltwater flows to the Pacific, the Atlantic and the Arctic oceans.",
    observation:
      "From the air the Canadian Rockies are a set of parallel ranges of consistent trend, with layer upon layer of horizontal or tilted sedimentary rock clearly visible on the mountainsides; many peaks are \"cuesta\" forms, a steep cliff on one side and a gentler dip slope on the other. The valleys are wide and flat (glacial U-shapes), with turquoise glacial lakes on their floors (rock flour in the water scatters the light) such as Lake Louise and Moraine Lake. The Columbia Icefield is a white plateau-like ice surface on the main crest.",
    distinguish:
      "The Canadian Rockies and the U.S. Rockies are different stretches of the same system: the Canadian stretch is at higher latitude, has far more glaciers and icefields, and is mostly unmetamorphosed sedimentary rock with very clear bedding; the U.S. stretch (especially around Colorado) has a core of ancient crystalline rock, more peaks over 4,000 m, and very few modern glaciers. Versus the Coast Mountains: the Coast Mountains are on the Pacific with granite and fjords; the Rockies are inland and are stacked, thrust-faulted sedimentary layers.",
    concept:
      "The Canadian Rockies are a clear example of a \"thrust-and-fold mountain range\" — not simply squeezed into folds, but layers pushed up along faults and stacked on top of one another. A common misconception is to take the blue-green colour of the glacial lakes for pollution or mineral staining: it is very fine \"rock flour\" suspended in the water, scattering the blue-green part of sunlight.",
    history:
      "The Canadian Rockies are the traditional territory and seasonal hunting grounds of the Stoney Nakoda, Cree, Ktunaxa and other Native nations. The Canadian Pacific Railway crossed the mountains in 1885, and in the same year a reserve was set aside around the hot springs at Banff — Canada's first national park. Today this mountain area is one of Canada's most important tourism destinations, and is dealing with visitor numbers, wildlife corridors and glacier retreat.",
  },

  "coast-mountains": {
    // seeing sources: 海岸山脉长约 **1,600 km**（从温哥华附近的弗雷泽低地延伸至育空）；
    //   **沃丁顿山 4,019 m 是「完全位于不列颠哥伦比亚境内」的最高峰** ——
    //   境内更高的费尔韦瑟山、亚当斯山都跨美加边境（3 级，2026-09-09 核）。
    //   **这个限定语下得很准**：换成「BC 最高峰」就错了。
    //   海岸萨利什、夸夸嘉夸、海达、钦西安四个族名与「大熊雨林」的位置表述均与官方用法一致；
    //   跨境处只做地理事实性对比，不描述边界线、不作主权表述。
    seeing:
      "The Coast Mountains run along the Pacific coast of North America, from southern British Columbia to the Alaska border, about 1,600 km. They rise straight out of the sea, their body cut by countless long, deep fjords, and are covered in temperate rainforest and many glaciers. The highest peak entirely within British Columbia is Mount Waddington, 4,019 m. Vancouver and Whistler are on the southern edge.",
    formation:
      "The core of the Coast Mountains is a large body of granite (the Coast Plutonic Complex) that crystallised deep underground from subduction-zone magma in the Mesozoic and Cenozoic. Continued subduction of the Pacific-side plate keeps raising the crust. During the ice ages, glaciers coming off the mountains cut hard down the existing river valleys, right below present sea level; when the ice retreated and the sea rose, seawater flooded these U-shaped valleys to make fjords. The mountains still hold many valley glaciers and small icefields.",
    observation:
      "From the air the Coast Mountains are a belt of snow mountains hugging the coast and broken into pieces — the coastline is extremely intricate, and straight fjords driving far inland cut the range into peninsulas and islands. The lower slopes are dense dark-green rainforest; the upper slopes are bare rock and sheets of glacier and snowfield. There is a lot of cloud and rain; on clear days you can see pale granite cliffs and hanging glaciers.",
    distinguish:
      "The Coast Mountains and the inland Canadian Rockies run parallel but are entirely different: the Coast Mountains are coastal, marked by granite and fjords, wetter, with glaciers reaching the sea; the Rockies are inland, marked by sedimentary bedding and thrust-faulted ranges. Versus Norway's Scandinavian Mountains: both are coastal ranges cut into fjords by glaciers, with different origins (a rising granite batholith versus an ancient mountain belt) and rock types, but a similar fjord landscape.",
    concept:
      "The Coast Mountains are a good example for understanding \"fjords\": a fjord is a U-shaped inlet formed where a glacier cut a coastal river valley below sea level and the sea flooded it after the ice retreated — steep walls, deep water, often deeper inside than at the mouth (a glacial \"sill\" at the entrance). A common misconception is to take a fjord for an ordinary river mouth or bay — a fjord is always tied to glacial action.",
    history:
      "The Coast Mountains and their fjords are home to the Coast Salish, Kwakwaka'wakw, Haida, Tsimshian and other Pacific Northwest Native nations, who built complex societies and art (totem poles and more) around cedar, salmon and travel by sea. The 19th-century fur trade and later logging, fishing and mining spread along the fjords. Today the area holds large protected areas such as the Great Bear Rainforest, and is an important shipping and cruising waterway.",
  },

  "saint-elias-mountains": {
    seeing:
      "The Saint Elias Mountains are in the south-western corner of Yukon on the Alaska border — the highest mountain country in North America. Canada's highest peak, Mount Logan, is here at 5,959 m, and its base has one of the largest circumferences of any mountain on Earth. The range holds the largest non-polar icefield in the world, with glaciers flowing down to the lowlands and the sea. Kluane National Park, together with the adjacent U.S. parks, is a World Heritage site.",
    formation:
      "The Saint Elias Mountains are where the Pacific plate is running obliquely and fast into North America — some far-travelled terranes (accreted blocks of crust) have been \"bulldozed\" onto the continental edge and strongly uplifted, and the range is still rising fast and is very seismically active. High latitude plus high elevation puts the snowline very low, so snow that falls on the mountains cannot melt and is compressed year after year into huge icefields and valley glaciers tens of kilometres long.",
    observation:
      "From the air the Saint Elias Mountains are a vast field of white — almost no bare rock, only black horns and arêtes poking out of a continuous icefield. Wide valley glaciers wind downslope like frozen rivers, striped with dark \"medial moraines\" (debris carried down from where two glaciers merge), breaking into a maze of ice pinnacles and meltwater lakes at their lowland ends.",
    distinguish:
      "The Saint Elias Mountains and the adjacent Alaska Range (with Denali) are both high mountains of north-western North America and both intensely glaciated; the Saint Elias are closer to the sea, rising faster, with a larger icefield, and nearer the coast. Versus the Himalaya: the Himalaya are higher, longer, and formed by two continents meeting head-on; the Saint Elias are an oceanic plate hitting a continent obliquely and shoving accreted terranes up.",
    concept:
      "The Saint Elias Mountains show that huge icefields can form outside the poles — as long as it is high and cold and snowy enough, ice can build up over a large area. A common misconception is that these glaciers are static, unchanging ice: they flow continuously, and some \"surge\" periodically (advancing several kilometres in a few years), making them an important site for the study of glacier dynamics.",
    // history sources: 「Kluane / Wrangell-St Elias / Glacier Bay / Tatshenshini-Alsek」跨境世界遗产：
    //   **1979 年首次列入**（Kluane 与 Wrangell-St Elias）、**1992 年扩展纳入 Glacier Bay**、
    //   **1994 年扩展纳入 Tatshenshini-Alsek**（后者也在加拿大境内）——3 级，多来源交叉确认，2026-09-09 核。
    //   **原文的「1993 年」既不是首次列入、也不是两次扩展中的任何一次** —— 落在两次扩展中间，
    //   像是把 1992 与 1994 折了个中。
    //   **洛根山 5,959 m 是一个会被新测量修正的量**：这是加拿大自然资源部沿用的 1992 年 GPS 标准值，
    //   2007 年 LIDAR 测得略高（约 5,967 m），而且这座山因构造抬升每年仍在增高约 0.35 mm ——
    //   下一轮留意是否有官方重测。
    //   **跨境表述复核通过**：只做地理事实性对比，不描述边界线走向、不作主权表述。
    history:
      "The Saint Elias area is the traditional land of the Southern Tutchone, Tlingit and other Native nations, and the mountain passes were trade routes between the coast and the interior. In the 18th century European navigators saw and named Mount Saint Elias from the sea. In 1979 this mountain area (with the Alaska side) was inscribed as a World Heritage site, later extended in 1992 and 1994, chiefly for its glaciers and ecosystems.",
  },

  "torngat-mountains": {
    // seeing sources: 萨格勒克湾一带的太古代片麻岩（Uivak / Nanok）约 **36—39 亿年**，Saglek Block 部分达 39 亿年，
    //   属北美已知最古老岩石之一 —— 正文「接近 40 亿年」合理（2 级，2026-09-09 核）。
    //   Torngait 源自因纽特语，意为「神灵之地」（另有诠释作「恶灵之地」），正文译作「神灵」核心义准确。
    //   考布维克山（Mont D'Iberville）**1,652 m**，被明确称为「加拿大落基山以东大陆地区最高点」。
    //   **2005-12-01 随拉布拉多因纽特土地权协议生效设立为国家公园保护区，2008 年才转为国家公园** ——
    //   正文写的是「保护区」，与 2005 年正好对应，**没有把两个年份混起来**。
    seeing:
      "The Torngat Mountains are at the far northern tip of the Labrador Peninsula, the boundary range between the provinces of Newfoundland and Labrador and Quebec, and the highest mountain country in mainland eastern Canada. \"Torngait\" means \"spirits\" in Inuktitut. There are no trees, roads or permanent residents; the coast is a series of deep glacier-cut fjords; and in summer there are polar bears and caribou. It became a national park reserve in 2005.",
    formation:
      "The Torngat Mountains are made of very old crystalline rock of the Canadian Shield (some of it close to 4 billion years old, among the oldest known on Earth). This ancient block was raised somewhat as a whole, then strongly scoured in successive ice ages by continental ice sheets and valley glaciers — the summits cut into horns and arêtes, the valleys hollowed into U-shapes, and the coastal valleys cut below sea level to become fjords. The land is still slowly rebounding since the ice left.",
    observation:
      "From the air the Torngat Mountains are a grey-brown, almost entirely bare rock highland rising straight out of the sea and the fjords. The ridges are sharp and the valleys deep and wide, with patches of remnant snow and a few small glaciers on the slopes. The coastline is extremely intricate, with long fjords reaching into the mountains, often ending in braided meltwater rivers. There is no forest, only low tundra plants clinging to sheltered spots.",
    distinguish:
      "The Torngat Mountains and the Canadian Rockies to the west are both Canadian mountains, but the Rockies are relatively young thrust-faulted sedimentary mountains with big icefields and tourist infrastructure; the Torngats are extremely ancient Shield rock, worn low by glaciers, remote and roadless. Compared with the mountains of northern Norway: both are ancient rock plus glacial fjords plus tundra, with a similar look.",
    concept:
      "The Torngat Mountains show that \"ancient does not mean tall\": their rock is among the oldest on Earth, but billions of years of erosion and glacial scouring have left them only a bit over a thousand metres high. A common misconception is to attribute all sharp peaks and steep valleys to \"young uplift\" — here the rugged terrain is mainly glaciers carving into ancient, hard rock.",
    history:
      "The Torngat Mountains are the traditional land of the Labrador Inuit (Nunatsiavut) and the Quebec Inuit (Nunavik), and the fjord mouths along the coast hold camps and sites used for generations. Moravian missionaries built stations along the Labrador coast in the 19th century. Today the national park is co-managed with the Inuit, reached mainly by boat or small plane, and the park base station employs Inuit guides and bear guards.",
  },

  "long-range-mountains": {
    seeing:
      "The Long Range Mountains are a north–south highland on the western side of the island of Newfoundland, the north-easternmost stretch of the Appalachian Mountains in mainland North America. They are essentially a raised, then glacier-cut plateau, flat on top and steep-edged. Gros Morne National Park is here — known especially for \"the Tablelands\", a bare orange-brown mountain whose surface rock should be tens of kilometres down in the mantle.",
    // formation sources: 岛湾（Bay of Islands）蛇绿岩形成于约 **485—489 Ma**、仰冲发生在约 **470 Ma**（中奥陶世 Taconic 造山）——
    //   正文的「约 5 亿年前」是科普取整，与实测差 2—6%，方向与数量级正确（3 级学术文献，2026-09-09 核）；
    //   若要更精确可写「约 4.7 亿年前」。
    //   格罗莫讷国家公园 **1987 年**列入世界遗产。
    //   兰塞奥兹牧草地约公元 1000 年（**较新的树轮定年精确到公元 1021 年**），是已确认的欧洲人在美洲最早据点 ——
    //   正文用的是「已确认的」这个限定，写法稳妥。
    formation:
      "The Long Range Mountains record an ancient continental collision. About 500 million years ago an old ocean closed, and crust and mantle rock from the ocean floor were thrust up onto the edge of the continent — the mantle peridotite of the Tablelands was carried up this way. The range was then eroded into a low, flat plateau. Quaternary glaciers cut cliffs into the plateau edge and deepened the valleys below sea level — Western Brook Pond is a glacier-cut inland \"fjord\" later cut off from the sea.",
    observation:
      "From the air the Long Range Mountains are a flat-topped highland belt along Newfoundland's west coast, its surface bare rock and tundra dotted with countless small ponds, its edges a continuous cliff hundreds of metres high. At the foot of the cliffs, long, straight, steep-walled deep lakes (fjord-form lakes) reach inland, looking almost exactly like Norwegian fjords except that they are closed off from the sea. The Tablelands is one block that is distinctly orange-brown and almost bare of plants.",
    distinguish:
      "The Long Range Mountains and the main body of the U.S. Appalachians are the two ends of the same ancient fold belt: the U.S. stretch is longer, more continuous and heavily forested; the Long Range is its northern end in Newfoundland, more thoroughly reworked by glaciers, with fjord-form lakes and exposed mantle rock. Versus Norwegian fjords: Western Brook Pond and the others are \"fjord lakes\" — the form of a glacial fjord, but now cut off from the sea and freshwater.",
    concept:
      "The Long Range Mountains (Gros Morne) were inscribed as a World Heritage site because they lay the process of \"plate collision\" open to view: mantle rock that normally sits tens of kilometres underground is exposed here at the surface, and the boundary between ocean crust and mantle can be seen. A common misconception is that all surface rock comes from the crust — the Tablelands peridotite is from the mantle, and its chemistry is toxic to most plants, which is why it is bare.",
    history:
      "The west coast of Newfoundland is the land of the Mi'kmaq and, historically, the Beothuk. Around AD 1000, Norse (Viking) people built a short-lived settlement at L'Anse aux Meadows at the northern tip of Newfoundland — the earliest confirmed European foothold in the Americas. From the 18th century, French and English fishermen worked this coast for cod. Gros Morne was inscribed as a World Heritage site in 1987.",
  },

  "interior-plains-ca": {
    // seeing sources: 2026-09-09 核：加拿大内陆平原从北冰洋延伸至美加边境；
    //   温尼伯湖为冰期古阿加西湖（Lake Agassiz）萎缩后的残留水体之一，属地质学共识。全篇 6 板块无误。
    seeing:
      "The Interior Plains of Canada lie between the Rocky Mountains to the west and the Canadian Shield to the east, reaching north all the way to the Arctic Ocean. Their southern part is the Prairies of Alberta, Saskatchewan and Manitoba, Canada's grain belt; further north the grassland gives way to aspen parkland, then boreal forest, and finally the lowlands of the lower Mackenzie. The surface is near-horizontal sedimentary rock, cut into broad shallow valleys by rivers.",
    formation:
      "The sedimentary rock of the Interior Plains was laid down in shallow seas and in rivers and lakes inside the continent over hundreds of millions of years, then hardened; it thins eastward toward the Shield. Quaternary ice sheets covered the region repeatedly, leaving thick till on retreat, lakes dammed by ice (Lake Winnipeg is the remnant of glacial Lake Agassiz), and some deep glacially scoured troughs (today's major valleys). Beneath the plains lie large deposits of oil, natural gas, potash and coal.",
    observation:
      "From the air the southern Interior Plains are a vast area cut into regular squares of wheat and canola, colour changing with the season and crop, with rivers winding through and cutting ribbons of valley woodland. Northward the field grid fades and gives way to patchy woodland, marsh and thousands of round and oval small lakes (\"potholes\"), all left by the glaciers.",
    distinguish:
      "The Canadian Interior Plains and the U.S. Great Plains are the northern and southern halves of the same great plain, continuous in geology and landform; the difference is climate and land use — the Canadian stretch is at higher latitude and colder, its south a short-season spring-wheat area, its north forest and marsh. Versus the Canadian Shield: the Shield is ancient crystalline rock, lake-strewn, with almost no farming; the Interior Plains are younger sedimentary rock with deep soil and are the main farming region.",
    concept:
      "The Canadian Interior Plains remind us that a \"plain\" comes in several kinds by origin: this is a \"cratonic cover plain\" — the stable interior of a continent that received sediment for a long time and was then smoothed by glaciers — different from a piedmont apron (the western Great Plains) or a river-alluvial plain (the North China Plain). The small round lakes all over the southern prairie are a mark of glacial till, not sinkholes or craters.",
    history:
      "The southern Interior Plains were the bison-based territory of the Blackfoot, Cree, Assiniboine, Métis and other peoples. After the bison were nearly exterminated and the Canadian Pacific Railway was completed in the 19th century, the government pushed large-scale settlement and wheat farming, and the grid of fields and towns of the three Prairie provinces dates from then. Today the region is the core of Canadian agriculture and oil and gas.",
  },

  "hudson-bay-lowlands": {
    seeing:
      "The Hudson Bay Lowlands wrap around the southern shores of Hudson Bay and James Bay — an extremely flat lowland of bog and shallow pool, stretching a few hundred kilometres inland where it is widest. It is one of the largest continuous wetlands in the world, and an important area (around Churchill) where polar bears wait on land for the sea ice to form. The ground has almost no perceptible slope, and the rivers are wide, shallow and meandering to the sea.",
    // formation sources: 哈得孙湾南岸均衡回弹速率约**每百年 1—1.3 米**，与正文「约一米」一致（3 级，2026-09-09 核）——
    //   这是一个长期平均值，仍属被持续重新测量修正的地球物理量。
    //   **「世界上最大的连续湿地之一」这个限定用得对**：它是北美最大湿地/泥炭地群、世界第二大连续泥炭地群、
    //   世界第三大湿地（西西伯利亚低地最大）—— 正文没有坐实具体名次，是正确写法。
    //   1670 年英王查理二世授予哈得孙湾公司特许状。
    formation:
      "The Hudson Bay Lowlands were once part of the floor of Hudson Bay. In the last ice age a very thick ice sheet pressed this crust down by hundreds of metres; after the ice melted about 8,000 years ago the unloaded land began to \"rebound\" fast — the area is still rising at roughly a metre per century, the coastline keeps advancing into the bay, and the newly exposed flat seabed becomes new bog. The bedrock is limestone with poor drainage, and with weak evaporation and permafrost blocking the way, the water cannot escape and forms vast peat bog.",
    observation:
      "From the air the Hudson Bay Lowlands are a grey-green, waterlogged flat — countless tiny pools and winding channels woven into a net, and on the seaward side a series of roughly parallel, curved low sand ridges (former shorelines) recording the land rising and the coast retreating. There is no relief, no forest (only scattered black spruce); tundra and bog in summer, all white in winter.",
    distinguish:
      "The Hudson Bay Lowlands and the U.S. Everglades are both very flat, wide wetlands, but the Everglades are on a subtropical limestone platform fed by rainwater sheet flow; the Hudson Bay Lowlands are subarctic, formed by post-glacial crustal rebound turning seabed into land, plus permafrost and peat. Compared with the great bogs of Siberia: both are large peat wetlands in a high-latitude, permafrost setting, by a similar mechanism.",
    concept:
      "The Hudson Bay Lowlands are a good place to see \"post-glacial isostatic rebound\": an ice sheet is a heavy load that presses the crust down; when the ice melts, the crust springs slowly back like an unloaded spring. The curved sand ridges here are the \"footprints\" of the coast retreating step by step as the land rose. A common misconception is that a retreating coastline always means falling sea level — here it is the land that is rising.",
    history:
      "The Hudson Bay Lowlands are the traditional land of the Cree and the Inuit. In 1670 the English Hudson's Bay Company received a charter and built fur-trade posts on the bay shore (York Factory, Prince of Wales Fort and others); for over two centuries this coast was one of the main gateways for Europeans into the Canadian interior. Today Churchill is known as the \"polar bear capital\" and is an important place for ecotourism and Arctic research.",
  },

  "saint-lawrence-lowlands": {
    seeing:
      "The St. Lawrence Lowlands are a comparatively narrow, flat valley between the eastern Great Lakes and the mouth of the St. Lawrence River, hemmed in by the Canadian Shield to the north and the Appalachian uplands to the south. With fertile soil, a relatively mild climate and easy water transport, it is the most densely populated and industrially and agriculturally concentrated belt in Canada — Toronto, Ottawa, Montreal and Quebec City are all on this corridor.",
    // formation sources: 皇家山与蒙泰雷吉安山丘为白垩纪碱性侵入岩体（stock），**从未喷出地表**，后期上覆岩层剥蚀后出露 ——
    //   2026-09-09 核。**正文没有把它们写成火山**，那是关于这组山丘很常见的误解。
    formation:
      "The St. Lawrence Lowlands are a fault-bounded sedimentary trough between the Shield and the Appalachians, filled with Palaeozoic limestone and shale. Ice sheets pushed along this lowland in the ice ages; on retreat, seawater flooded up the ice-depressed valley to form the \"Champlain Sea\", which withdrew to leave a flat, fertile plain of marine clay. The isolated small hills near Montreal (the \"Monteregian Hills\") are old magma bodies that never reached the surface, later exposed by erosion.",
    observation:
      "From the air the St. Lawrence Lowlands are a flat green corridor between two uplands, covered by dense farmland and cities, with the wide, island-studded St. Lawrence River as its main axis. Around Quebec you can see French-style \"long lots\" — each field narrow and long, set at right angles to the riverbank. On both sides of the lowland the land rises abruptly (the rocky hills of the Shield to the north, the long ridges of the Appalachians to the south).",
    distinguish:
      "The St. Lawrence Lowlands and the U.S. Atlantic Coastal Plain are both densely populated eastern lowlands, but the Atlantic Coastal Plain is emerged, loose marine sediment spread along the coast; the St. Lawrence Lowlands are an inland, fault-bounded sedimentary valley along a great river. Versus the Canadian Interior Plains: the Interior Plains are far larger and more given to farming and ranching; the St. Lawrence Lowlands are small, concentrated and highly urbanised.",
    concept:
      "The St. Lawrence Lowlands show how landform shapes where people live: they are a small fraction of Canada's area, yet because they are flat, warm and navigable, they hold a large share of the country's population and economy. A common misconception is to take Montreal's Mount Royal and the other isolated hills for volcanoes — they are intrusive rock bodies that never erupted, exposed after the overlying rock eroded away.",
    history:
      "The St. Lawrence Lowlands are the land of the St. Lawrence Iroquoians and later of the Algonquin, Mohawk and other Native nations, with the St. Lawrence River as their travel artery. In the 17th century the French built Quebec City and Montreal along the river, forming the core of \"New France\"; the region passed to Britain after 1763. This corridor has been the centre of Canada's politics, economy and population ever since, and is the meeting zone of English- and French-speaking Canada.",
  },

  "great-slave-lake": {
    seeing:
      "Great Slave Lake is in the Northwest Territories, the deepest lake in North America, about 614 m at its deepest. It is very irregular in shape: the western half is wide and shallow, sitting on sedimentary rock; the East Arm is deep and narrow, cut into the hard Canadian Shield, its shores bare rock and countless small islands. The territorial capital, Yellowknife, is on the north shore of the East Arm. The lake is frozen for about eight months of the year.",
    formation:
      "The basin of Great Slave Lake straddles the boundary between two kinds of rock. The western half formed where faulting dropped a block of sedimentary rock; the East Arm is a deep trough gouged by glaciers repeatedly scouring along a weak zone in the Shield. After the last ice age the area was part of a much larger ice-margin lake (glacial Lake McConnell); the level later fell, leaving today's Great Slave Lake. The Slave River flows in from the south, and the Mackenzie River flows out from the western end.",
    observation:
      "From the air the western half of Great Slave Lake is an open expanse of water with a straight shoreline, surrounded by forest and marsh; the East Arm is entirely different — the arms of the lake reach like branches into grey bare Shield rock, and the water is full of long thin rocky islands and peninsulas, all of consistent trend (following the structure of the bedrock). In winter the lake ice is thick, and \"ice roads\" are built across it.",
    distinguish:
      "Great Slave Lake and Great Bear Lake to the north are the two largest lakes in the Canadian Northwest, similar in form (both straddling the Shield–sedimentary boundary); Great Bear is larger in area, further north and colder; Great Slave is deeper, with a city and roads on its southern shore. Versus Lake Baikal: Baikal formed by a crustal rift dropping down and is far deeper; Great Slave's depth comes mainly from glacial scouring plus faulting.",
    concept:
      "The depth of Great Slave Lake (about 600 m) shows the power of glacial excavation: a continuous ice sheet advancing repeatedly along a weak zone in the rock can dig a valley floor hundreds of metres below the surrounding ground. A common misconception is that all high-latitude big lakes are shallow — Great Slave and Great Bear are both deep, because part of their basins was deeply excavated by glaciers, not just low ground holding water.",
    // history sources: 大奴湖最深 **614 m（2,015 ft）**，北美最深湖，多来源一致，2026-09-09 核。
    //   **名称那段处理得好**：「Slave（奴）」源自克里人对当地 Dene（Dehcho Dene）的旧称 Slavey，
    //   与部族间冲突与奴役史有关；如今被广泛认为是带贬义的殖民命名，西北地区确有地名去殖民化运动
    //   （如 Trout Lake 改为 Sambaa K'e）—— CBC（2 级）。**正文如实写出了这一层，而不是只当作一个地名。**
    //   1934 年前后东臂/耶洛奈夫湾发现金矿（Burwash、Con Mine），1936—37 年聚落成形。
    //   **结冰期是会随气候变暖变化的量** —— 正文用「大约」留了余地，日后要写具体天数须带监测年份。
    history:
      "The Great Slave Lake area is the home of the Chipewyan, Tłı̨chǫ, Yellowknives and other First Nations and later the Métis. The name \"Slave\" comes from an old term used by a neighbouring people for the local Dene; it is now regarded as derogatory, and some place names are being changed to Dene-language names. Gold was found on the north shore of the East Arm in the 1930s, and Yellowknife was founded because of it. Today the lake area has fishing, tourism and a winter ice road toward the Arctic.",
  },

  "great-bear-lake": {
    // seeing sources: **「完全位于加拿大境内的最大湖」这个限定语正确** —— 大熊湖是世界第 8 大湖，
    //   苏必利尔湖等更大者都跨美加边境，所以不能只写「加拿大最大湖」（3 级，2026-09-09 核）。
    //   横跨北纬 65—67 度、与北极圈（66°33′N）相交；五条湖臂 Dease / McTavish / McVicar / Keith / Smith；
    //   封冻期典型 8—9 个月（**会随气候变暖变化，正文用「大约」留了余地**）。
    //   1930-05-16 Gilbert LaBine 在东岸发现沥青铀矿，Eldorado 矿是当时世界少数几个铀镭产地之一。
    //   Sahtúgot'ı̨nę 自称意为「大熊湖之人」，正文译法准确、非过期称谓。
    seeing:
      "Great Bear Lake is in the Northwest Territories, straddling the Arctic Circle — the largest lake entirely within Canada and one of the largest lakes in the world. It is made of five large arms and shaped like an open hand; the water is extremely clear and cold, frozen for about nine months a year, and the only community on it is the small settlement of Délı̨nę.",
    formation:
      "Great Bear Lake's basin sits half on the ancient Canadian Shield and half on younger sedimentary rock, the boundary running roughly through the lake. It is mainly the work of continental ice sheets scouring and then glacial debris damming: the ice dug several arms along weak zones in the rock, and meltwater filled them after the ice retreated. Because it is at high latitude, deep and very large, the water stays near-freezing almost year round, and its clarity is among the highest of the great lakes.",
    observation:
      "From the air Great Bear Lake is a huge deep-blue sheet of water, its arms reaching in different directions, separated by bare rock peninsulas. The eastern and northern shores are the bare rock and tundra of the Shield, with rocky islands in the lake; the south-western shore is gentler, with scattered conifer forest. The lake only opens up in summer, and its water is exceptionally deep-coloured and clear.",
    distinguish:
      "Great Bear Lake and Great Slave Lake to the south are the two giant lakes of the Canadian Northwest: Great Bear is larger in area, further north (across the Arctic Circle), colder and almost uninhabited; Great Slave is deeper, with a city on its south shore. Versus the Great Lakes: the Great Lakes are in the temperate zone, densely populated and busy shipping lanes; Great Bear Lake is on the edge of the Arctic and close to a natural state.",
    concept:
      "Great Bear Lake shows that a \"large lake\" is not the same as a \"warm lake\" or a \"peopled lake\": it is among the ten largest in the world by area, but being high-latitude and deep it is frozen most of the year with very few people around. Its high water clarity is partly because there is almost no farming or industry in the watershed adding nutrients and silt.",
    history:
      "Great Bear Lake is the home of the Sahtú Dene (the \"Great Bear Lake people\"). In the 1930s a pitchblende deposit was found at Eldorado on the eastern shore, and for a time this was one of the few places in the world producing uranium and radium, the ore hauled out along a long water-and-land route; the associated health and environmental problems have received attention ever since. Today the lake area is mainly wilderness tourism and traditional fishing and hunting.",
  },

  "mackenzie-river": {
    // seeing sources: 马更些河**干流本身约 1,738 km**；**从最上游芬利河算起的整个水系约 4,241 km**，
    //   是加拿大最长河流系统、北美第二长（次于密西西比—密苏里）——3 级交叉《加拿大百科全书》，2026-09-09 核。
    //   **正文写的是「如果从最上游的芬利河算起，整个水系长约 4200 公里」，限定语明确** ——
    //   **没有把水系长度当成干流长度冒用**，与塔里木河（「约 2000 公里」哪套口径都不是）、
    //   达令河（把含支流的合计当成干流长度）正好构成对照，是正确写法的范例。
    //   马更些河三角洲为北美最大北极三角洲（**权威来源写的是 the largest，正文用的「之一」更保守**），
    //   约 25,000 个小湖，与正文「上万个」一致。
    //   1789 年亚历山大·马更些（受雇于西北公司，哈得孙湾公司的竞争对手）沿河而下抵达北冰洋。
    seeing:
      "The Mackenzie River is the longest river in Canada. Measured from its farthest headwater, the Finlay, the whole system is about 4,200 km long. It flows out of Great Slave Lake, north-west through the subarctic forest and lowlands, and into the Beaufort Sea of the Arctic Ocean. Its lower reach is one of the largest Arctic deltas in North America, dense with tens of thousands of small lakes. The whole river is frozen for much of the year and is a winter \"ice road\" for the communities along it.",
    formation:
      "The Mackenzie runs in the structural lowland between the Rocky Mountains and the Canadian Shield, its direction set by that lowland. It strings together a chain of large glacial lakes (Great Bear, Great Slave and others act as its reservoirs). Carrying sediment from upstream, at its mouth — where the current slows sharply and sea ice and permafrost come into play — it has built a wide, extremely broken-up delta: the permafrost stops the channels cutting down, the arms keep shifting, and countless \"thermokarst\" lakes are left ringed by abandoned channels.",
    observation:
      "From the air the Mackenzie is a wide brown band winding through dark green conifer forest, with braided arms and sandbars. At the delta the river splits into a spider-web of channels, between them tens of thousands of round-edged lakes of every size — from above it looks like a waterlogged green sponge. The Beaufort Sea beyond the delta carries sea ice year round.",
    distinguish:
      "The Mackenzie, like Siberia's Ob and Lena, is a great river flowing to the Arctic Ocean: the headwaters thaw first in the warm season while the lower river is still frozen, so ice jams and spring floods form easily. Versus the Mississippi: the Mississippi flows south, its lower river warm, managed mostly for navigation; the Mackenzie flows north, frozen most of the year, and matters mostly as a lifeline for northern communities and an ecological corridor.",
    concept:
      "The Mackenzie shows the character of a \"north-flowing great river\": because the upper river thaws before the lower river, meltwater often runs into ice that has not yet broken up downstream, building ice jams and sudden floods. Its delta full of round lakes is a classic \"thermokarst\" landform on permafrost — local thawing of frozen ground, the surface subsiding and filling with water.",
    history:
      "The Mackenzie and its tributaries have long been the travel and subsistence artery of the Dene and the Inuvialuit. In 1789 Alexander Mackenzie, working for a rival of the Hudson's Bay Company, travelled down the river to the Arctic Ocean, and the river was later named for him (its Dene name means \"big river\"). In the 20th century oil and gas were found along the river, and the debate over whether to build a gas pipeline ran for decades, helping drive negotiations over Indigenous land rights in Canada.",
  },

  "hudson-bay": {
    // 其余字段 sources: 平均水深约 100 米（浅陆表海）；1610 年哈得孙进入湾区、1611 年哗变中被弃；
    //   1670 年哈得孙湾公司特许成立。3 级复核。2026-09-10 核，verdict: ok。
    seeing:
      "Hudson Bay is a huge inland sea reaching deep into Canada — larger than many countries, yet only a little over a hundred metres deep on average, so it is a very shallow sea. It sits in a depression in the centre of the Canadian Shield, connected to the Atlantic through Hudson Strait to the north, and is covered by sea ice for much of the year. It acts as a giant \"cold source\" that strongly affects the climate of the surrounding region.",
    // formation sources: 成因：**原文的撞击年代中英差十倍（3.9 亿 vs 3.9 billion），而且两个数字都查不到出处** —— 1968 年 Beals 提出纳斯塔波卡弧撞击假说时并未给年代。1972 年 Dietz & Barringer 野外调查未发现任何冲击变质证据，主流解释为哈得孙造山运动（约 20—18 亿年前）的构造边界。哈得孙湾整体为陆内沉降盆地（intracratonic sag basin），机制仍有争论。2 级期刊摘要 + 3 级；2026-09-10 核。
    formation:
      "There are several ideas about the origin of the Hudson Bay depression: the curved arc of coastline in the south-east, the Nastapoka Arc, was once suspected to be the remnant of an ancient meteorite impact, but later fieldwork turned up no confirming evidence of shock metamorphism, and geologists now lean towards reading it as a tectonic boundary left by the Trans-Hudson orogeny some 2.0 to 1.8 billion years ago; the Hudson Bay depression itself is more a matter of the Shield sagging slowly and as a whole over a long time, by a mechanism still debated. In the last ice age the centre of the North American ice sheet sat over the Hudson Bay area, pressing the crust down by hundreds of metres; since the ice melted the crust has been rebounding fast, and the bay is slowly shrinking.",
    observation:
      "From the air Hudson Bay is a nearly circular pale expanse of water, covered with broken sea ice in winter and spring and only clearing by late summer. The south-eastern shore is a smooth great arc, and the bay holds some low flat islands (the Belcher Islands and others). All around is the extremely flat marshy lowland (the Hudson Bay Lowlands), with curved former shorelines running from the present coast tens of kilometres inland.",
    distinguish:
      "Hudson Bay and the Baltic Sea are both high-latitude, fairly shallow inland seas that freeze in winter and were pressed down by ice sheets and are now rebounding, by a similar mechanism. Versus the Great Lakes: Hudson Bay is salt water, connected to the ocean, and has tides; the Great Lakes are freshwater lakes. Versus the Caspian Sea: the Caspian is a fully enclosed internally drained salt \"sea\"; Hudson Bay is connected to the Atlantic through a strait.",
    concept:
      "Hudson Bay shows that \"sea\" versus \"bay\" is not simply about size: it is enormous, but because it is enclosed on three sides by land and joined to the ocean only by one strait, it is conventionally a \"bay\". It is also a key area for understanding post-glacial rebound — the thickest part of the North American ice sheet was here, so the land is rising fastest here now, and the bay floor keeps emerging as new land.",
    history:
      "The shores of Hudson Bay are where the Cree and the Inuit have lived for generations. In 1610 Henry Hudson's ship entered these waters (he was cast adrift in the bay by a mutiny the following year), and the bay is named for him. The Hudson's Bay Company, founded in 1670 with the whole drainage basin as its trading territory, ran fur-trade posts on the bay shore for over two centuries and was one of the most far-reaching commercial institutions in Canadian history.",
  },

  "baffin-island": {
    // seeing sources: 巴芬岛面积约 507,205 km²，加拿大最大岛、世界第五大岛
    //   （前四：格陵兰、新几内亚、婆罗洲、马达加斯加）——3 级，2026-09-08 核。
    //   **岛屿排名按面积是唯一读法**，不属于要补口径的那一类。
    //   **零争议红线复核通过**：history 段只写因纽特人的传统土地、多塞特/图勒文化、
    //   17 世纪航海者命名、1999 年努纳武特建制这些客观事实，未评价现代政策。
    seeing:
      "Baffin Island is in the Canadian Arctic Archipelago in the north-east — Canada's largest island and the fifth largest in the world by area. Its eastern edge is a high mountain belt of hard Shield rock, with large ice caps, deep fjords and several granite cliff faces over a kilometre high (Mount Thor, well known to climbers, is here); the western half of the island is low, flat sedimentary platform. The capital, Iqaluit, is in the south-east.",
    formation:
      "The mountain belt of Baffin Island is the eastern edge of the Canadian Shield, raised and then repeatedly scoured by glaciers. Quaternary ice sheets cut hard down the old river valleys, shaping the mountains into horns and arêtes and hollowing the valleys into U-shapes cut below sea level to make fjords. The mountains still hold remnant ice such as the Barnes Ice Cap. The western lowland is unraised platform, covered by near-horizontal Palaeozoic rock.",
    observation:
      "From the air the east coast of Baffin Island is a high mountain belt in white and grey-black — ice caps, snowfields and bare black peaks — its coastline cut to pieces by long deep fjords. Inland and westward the mountains drop quickly to a rolling, lake-strewn brown tundra platform. The whole island is essentially treeless, tundra in summer and snow in winter.",
    distinguish:
      "Baffin Island and Ellesmere Island further north are both large Arctic Archipelago islands characterised by Shield mountains and ice caps; Ellesmere is further north, drier (a polar desert), and more ice-capped; Baffin is a bit lower in latitude with better-developed fjords and cliffs. Versus Greenland: Greenland's centre is a single huge ice sheet covering the whole island; Baffin Island has only scattered ice caps.",
    concept:
      "The big cliff faces of eastern Baffin Island show the power of glaciers to carve hard rock: a face like Mount Thor's — nearly vertical and over a kilometre high — is where a glacier removed one whole side of a rock body along its joints. A common misconception is to picture all Arctic islands as low, flat ice fields — the eastern edge of Baffin Island is genuinely rugged alpine country.",
    history:
      "Baffin Island is the home of the Inuit; the name comes from William Baffin, an English navigator who searched for the Northwest Passage nearby in the early 17th century. The area also has earlier Dorset and Thule culture sites. In 1999 the territory of Nunavut was created out of the Northwest Territories as a majority-Inuit self-governing region, with Iqaluit as its capital. Today the island's economy is traditional fishing and hunting, government, and a growing tourism sector.",
  },

  "ellesmere-island": {
    // seeing sources: 世界第十大岛（约 196,235 km²）；巴伯峰 2616 m 为努纳武特最高峰；
    //   「除格陵兰外全世界离北极点最近的陆地」这个限定成立——更近的 Kaffeklubben 岛在格陵兰行政范围内。3 级复核。
    //   ⚠️ C8 待补：埃尔斯米尔的冰帽／冰架在快速变化（米尔恩冰架 2020-07 崩解、沃德亨特冰架分裂），
    //   正文目前未给冰架面积数字，故无过期数可改；下一轮若要补，必须带监测时点与 Canadian Ice Service 口径。2026-09-10 核，verdict: ok。
    seeing:
      "Ellesmere Island is Canada's northernmost large island and the tenth largest in the world; its northern tip is the closest land to the North Pole apart from Greenland. It has the highest peak in eastern North America, Barbeau Peak (2,616 m), large ice caps, and Quttinirpaaq National Park. Precipitation is extremely low year-round — this is a \"polar desert\" — but it is so cold that the little snow that falls does not melt and builds up into ice over the years.",
    formation:
      "The mountains of northern Ellesmere Island (the Innuitian Mountains) are an ancient fold belt, connected to the mountains of northern Greenland; raised, then heavily reworked by glaciers. The centre and south have sedimentary platform and structural basins. The large ice caps, and the \"fjord glaciers\" that flow through passes right down into the fjords, are ice that has never fully disappeared since the last ice age. In recent years several large \"ice shelves\" (thick ice attached to the shore and floating on the sea) have broken up.",
    observation:
      "From the air Ellesmere Island is white, grey and black: continuous ice caps and snowfields, black bare ridges poking out of the ice, glacier tongues reaching into deep-blue fjords. Because it hardly ever snows, many slopes are dry, shattered bare rock (\"polar desert\"), a grey-brown colour. Sea ice offshore is present year-round. In summer there is 24-hour daylight, in winter 24-hour night.",
    distinguish:
      "Ellesmere Island and Baffin Island to the south are both large Arctic Archipelago islands: Ellesmere is further north, colder, drier, more ice-capped, and almost unpopulated; Baffin is a bit lower in latitude, with better-developed fjords and cliffs, and a capital city. Versus northern Greenland: their mountains are the two halves of the same fold belt, later separated by a strait.",
    concept:
      "Ellesmere Island shows that a \"desert\" is defined by precipitation, not temperature: annual precipitation here is about as low as parts of the Sahara, making it a true desert — just a cold one. A common misconception is that the polar regions are \"all ice everywhere\" — much of a polar desert is dry gravel and bare rock, and ice exists only where it can accumulate.",
    history:
      "Ellesmere Island has seasonal-camp sites of the Inuit and earlier Palaeo-Eskimo cultures; today there are only a very few outposts (Grise Fiord, an Inuit community, and Eureka, a weather and research station). In the early 20th century it was a jumping-off point for expeditions to the North Pole. Quttinirpaaq National Park (\"top of the world\") protects the far north of the island.",
  },

  "vancouver-island": {
    // seeing sources: 约 31,285–31,815 km²，北美西海岸最大岛屿。3 级复核。2026-09-10 核，verdict: ok。
    seeing:
      "Vancouver Island lies off the coast of British Columbia and is the largest island on the west coast of North America. A mountain spine runs the length of it, dividing it in two: the west coast faces the open Pacific, with fjords, heavy rain and tall temperate rainforest; the east coast is in the lee, gentler, drier and where most people live, with the provincial capital, Victoria, at the southern tip. The Strait of Georgia separates the island from the mainland.",
    formation:
      "Vancouver Island is an accreted terrane \"pasted\" onto the western edge of North America — it began as a volcanic island arc and submarine plateau in the ocean and was carried into North America by plate motion and shoved up. The island's mountains are made of volcanic and sedimentary rock, later carved by glaciers into horns, U-shaped valleys and the west-coast fjords. The lower ground on the eastern side is covered by glacial and marine loose sediment.",
    observation:
      "From the air Vancouver Island is a long island trending north-west to south-east, high in the middle and low on both sides. The west coast is extremely intricate, with fjords reaching into forested mountains and many small islands and reefs offshore; the east coast is far straighter, with towns, farmland and harbours visible. There is remnant snow and a few alpine lakes along the spine.",
    distinguish:
      "Vancouver Island faces the mainland Coast Mountains across the strait and looks similar (both have fjords and rainforest), but the Coast Mountains are an uplifted granite batholith, higher and more continuous; Vancouver Island is an accreted terrane and its mountains are lower. Versus the islands of Japan: both are islands near a subduction zone, but Japan's islands are dominated by active volcanoes and earthquakes, while Vancouver Island has no active volcanoes (though it is on a major earthquake zone).",
    concept:
      "Vancouver Island is an example for understanding \"terrane accretion\": the western edge of North America is not original — over the past 200 million years it has grown westward as island arcs and submarine plateaus drifted in from the Pacific and welded on, one after another, and Vancouver Island is one of the later additions. A common misconception is that a continental margin has always been where it is now — it has actually been \"growing\" seaward.",
    history:
      "Vancouver Island is home to the Nuu-chah-nulth, Kwakwaka'wakw and Coast Salish peoples, who built rich carving and seafaring cultures around cedar and marine resources. In the 18th century Spanish and British navigators (including George Vancouver) reached and surveyed the coast. Coal mining and logging grew along the east coast in the 19th century. Today the island's economy is forestry, fishing, tourism and the service sector around Victoria.",
  },

  "prince-edward-island": {
    // formation sources: 红砂岩为二叠纪（约 3 亿—2.52 亿年前）河流与泛滥平原沉积，2 级本国媒体 + 省属描述一致。2026-09-10 核，verdict: ok。
    seeing:
      "Prince Edward Island is a crescent-shaped, low, flat island in the Gulf of St. Lawrence, the smallest and most densely populated province of Canada. Its bedrock is red sandstone, so the soil, the cliffs and even some of the beaches are a distinct rust-red. There are no hills; the highest point is only a few tens of metres, and the surface is covered with farmland (especially potato fields) and small patches of woodland.",
    formation:
      "The red sandstone of Prince Edward Island was deposited about 300 million years ago in rivers and floodplains under a hot, dry climate, stained red by iron oxide, and then hardened. This rock is soft and easily eroded by waves and wind — the north shore has red-clay sea cliffs, and the eroded sand is carried by longshore currents into long spits and dunes that close off some bays into lagoons. Ice-age ice sheets planed the island's surface smooth, and after they retreated rising sea level separated the island from the mainland.",
    observation:
      "From the air Prince Edward Island is a long, thin green land cut into many small bays, its edges rimmed with a striking red — red-clay cliffs and red beaches. The north shore has a nearly continuous white-gold dune belt, with narrow blue lagoons on its inner side. Inland is a neat grid of fields, dark-red tilled ground alternating with green crops.",
    distinguish:
      "Prince Edward Island and its neighbours Nova Scotia and New Brunswick are all in the Appalachian geological region, but those two have hills and hard-rock coasts; Prince Edward Island is all soft red sandstone, extremely low and flat, its coast dominated by erosion and deposition landforms. Compared with the red-clay coasts of the Shandong Peninsula: a similar mechanism (soft rock + wave erosion + spits), but Prince Edward Island's red comes from the ancient red-bed sandstone itself.",
    concept:
      "Prince Edward Island shows how the colour and hardness of rock decide the look of a coast: the soft red sandstone gives both the colour and, because it erodes easily, a north shore that keeps retreating while building spits and dunes downdrift. A common misconception is that the red beaches are pollution or man-made — it is the natural result of iron oxide from the sandstone being ground up and mixed into the sand.",
    history:
      "Prince Edward Island is the traditional land of the Mi'kmaq, who call it \"Epekwitk\". French (Acadian) settlers arrived in the 18th century; it passed to Britain after 1763 and took its present name. In 1864 the conference to discuss uniting the British North American colonies was held at Charlottetown on the island, seen as one of the starting points of Canadian Confederation. Today the island's economy is potato farming, fishing (lobster, mussels) and tourism.",
  },

  "bay-of-fundy": {
    // formation sources: ✅ **两处专项复核都通过**。① 潮差成因写的是**共振**，没有落进「湾口窄把水挤高」
    //   这个常见的简化错误说法。② 「世界之最」的口径：加拿大水文局（CHS）现行口径是芬迪湾米纳斯湾
    //   （Burntcoat Head 约 17 m）与魁北克 Ungava 湾 Leaf Basin（约 16.8 m）**在测量误差范围内基本打平**，
    //   官方处理是两处并列。正文中文写「数一数二」、英文写 among the largest，已是有限定的并列表述，不改。
    //   2 级本国媒体转述 CHS 研究。2026-09-10 核，verdict: ok。
    seeing:
      "The Bay of Fundy, between Nova Scotia and New Brunswick, is a long, narrow, funnel-shaped bay that gets shallower toward its head. It is known for having among the largest tides in the world — at the Minas Basin at the head of the bay, the water level can change by about 16 metres between low and high tide, the height of a five-storey building. At low tide broad red-brown mudflats are exposed; at high tide the same ground is deep water.",
    formation:
      "The funnel shape of the Bay of Fundy, combined with its length, happens to be close to the natural oscillation period of the tide in the North Atlantic, producing \"resonance\" — each tidal pulse is amplified, and rises higher toward the head of the bay. This is a classic case of tidal range magnified by shape. The bay's red cliffs are Triassic red sandstone and basalt; the Hopewell Rocks are stacks left where waves hollowed out the soft rock, leaving isolated pillars capped with vegetation.",
    observation:
      "From the air the same stretch of Fundy coast looks completely different at different times: at low tide, endless water-sheened red-brown mudflat with tidal creeks branching across it; at high tide, the mudflat is drowned and only the cliffs and rock pillars stand above the water. The water in the bay is turbid (strong tidal currents stir up sediment), and a clear scoured intertidal zone is visible on shore.",
    distinguish:
      "The large tides of the Bay of Fundy have the same cause as those of the Severn Estuary in Britain and the Bay of Saint-Malo in France — a funnel-shaped bay plus tidal resonance. Compared with an ordinary bay: most bays have a tidal range of a metre or two; the Bay of Fundy reaches a dozen or more metres, the result of shape \"focusing\" tidal energy. Tidal power generation has been tested here for this reason.",
    concept:
      "The Bay of Fundy shows that tidal range is not fixed: it depends on whether the shape and size of a bay is \"in tune\" with the tidal wave. A common misconception is that tidal range is set directly by the Moon and Sun — the bodies provide the basic tidal force, but the actual range at a given place is set mainly by how the local coast and seafloor amplify or damp the tidal wave.",
    history:
      "The shores of the Bay of Fundy are the traditional territory of the Mi'kmaq and the Wolastoqiyik (Maliseet). In the 17th century French (Acadian) settlers built dykes to reclaim the salt marshes along the bay, creating a distinctive farming landscape; in 1755 the British authorities carried out a mass deportation of the Acadians (the \"Grand Dérangement\"). Today the Bay of Fundy is known for its tides, whale watching, its fossil coast (Joggins Fossil Cliffs, a World Heritage site), and tidal-energy research.",
  },

  "gaspe-peninsula": {
    // formation / history sources: 阿巴拉契亚造山（Taconic / Acadian / Alleghanian 等）跨度约 4.9 亿—2.6 亿年前，
    //   与正文「约 5 亿到 3 亿年前」大致吻合；米瓜沙化石点 1999 年列入 UNESCO（whc.unesco.org/en/list/686，1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The Gaspé Peninsula is a piece of land at the eastern end of Quebec reaching into the Gulf of St. Lawrence, the northernmost stretch of the Appalachian Mountains on the North American mainland. Its interior is the Chic-Choc Mountains (among the highest parts of the Appalachians in Canada), with a rare patch of alpine tundra above the tree line and caribou in summer. At the tip of the peninsula is the landmark Percé Rock — a single block of limestone with a natural arch, standing in the sea.",
    formation:
      "The rock of the Gaspé Peninsula is folded and thrust-faulted layers squeezed up in the Appalachian orogeny (a series of continental collisions between about 500 and 300 million years ago), mostly marine limestone, sandstone and shale, rich in Palaeozoic fossils (the fish fossils of Miguasha are a World Heritage site). The mountains were then long eroded to a middle-height range, and Quaternary glaciers rounded and steepened the valleys and coast. Percé Rock is what is left where waves cut through a limestone ridge section by section along its joints.",
    observation:
      "From the air the Gaspé Peninsula is a forested, valley-cut range of middle height, dropping eastward toward the sea. The north coast is a straight, steep cliff coast, with the highway hugging the base of the cliffs; the south and east coasts are more intricate, with spits (such as the Barachois de Malbaie) and sea-erosion landforms like Percé Rock. The highest summits of the Chic-Chocs are pale, treeless tundra.",
    distinguish:
      "The Gaspé Peninsula, Nova Scotia and Newfoundland's Long Range Mountains are different stretches of the Appalachians in Canada. Gaspé is characterised by folded-and-thrust sedimentary mountains, fossils and Percé Rock; the Long Range by exposed mantle rock and fjord lakes. Compared with the main body of the U.S. Appalachians: Gaspé is further north, more reworked by glaciers, and has alpine tundra.",
    concept:
      "The Gaspé Peninsula (especially Miguasha) is important because its Devonian rock preserves many fossils from the transition \"from fish toward four-limbed animals\" — a key step in vertebrates moving from water onto land. A common misconception is to take the arch of Percé Rock for something carved by people: it was cut naturally by waves along cracks in the rock, and one day the arch will collapse.",
    history:
      "The Gaspé Peninsula is the traditional land of the Mi'kmaq; the word \"Gaspé\" comes from the Mi'kmaq language and means \"land's end\". In 1534 Jacques Cartier raised a cross at Gaspé Bay claiming the land for the King of France, usually taken as the start of French colonisation in North America. From the 18th to the 20th century the peninsula's coast lived by cod fishing and processing. Today its tourism centres on Forillon National Park, Percé, and the scenic road around the peninsula.",
  },

  "niagara-escarpment": {
    // seeing / formation sources: 生物圈保护区官方长度 725 km，自尼亚加拉经安大略南部至布鲁斯半岛，
    //   并在乔治亚湾水下延伸到马尼图林岛；1990 年列为 UNESCO 生物圈保护区（unesco.org/en/mab/niagara-escarpment，1 级）。
    //   硬白云岩帽岩 + 软页岩的差别侵蚀是官方通行解释。2026-09-10 核，verdict: ok。
    seeing:
      "The Niagara Escarpment is a continuous slope about 725 km long, running from around Niagara on the U.S.–Canada border, curving north-west across southern Ontario, out to the Bruce Peninsula and Manitoulin Island in Lake Huron. It has a gentle slope on one side and a cliff tens to over a hundred metres high on the other — a classic \"cuesta\". Niagara Falls is where the Niagara River drops over this escarpment.",
    formation:
      "The Niagara Escarpment is the result of differential erosion of a set of Palaeozoic rock layers that dip gently inland: the top layer is hard dolostone \"cap rock\", underlain by softer shale. The soft rock erodes and retreats faster, the hard cap rock loses support and falls away in blocks, so the cliff stays vertical and slowly retreats inland as a whole. The lip of Niagara Falls is \"eating\" its way upstream at less than a metre a year.",
    observation:
      "From the air the Niagara Escarpment is a clear curved \"step\" in the flat farmland and lake shores of southern Ontario — tableland and woodland on the top side, lowland, orchards (the vineyards of the Niagara Peninsula) and towns on the base side. At the Bruce Peninsula the escarpment forms the peninsula's east coast directly, a white cliff plunging into Georgian Bay, with very pale blue-green water at its foot.",
    distinguish:
      "The Niagara Escarpment has the same origin as many \"cuestas\" in North America — an asymmetric slope eroded out of gently dipping hard rock; the U.S. Midwest has several parallel cuestas. Versus a fault scarp (such as the eastern face of the Sierra Nevada): a fault scarp forms directly from a block moving along a fault; the Niagara Escarpment has no major fault and is purely differential erosion plus cap-rock retreat.",
    concept:
      "The Niagara Escarpment is a living sample of \"cap-rock-controlled cliff retreat\", and Niagara Falls is one point where the process is happening now. A common misconception is that the falls' position is fixed — it is continuously retreating upstream, and in a few thousand years it will reach Lake Erie, at which point the falls will disappear. The escarpment is a UNESCO Biosphere Reserve, because its cliff strip preserves old-growth forest that has vanished from the surrounding plain.",
    history:
      "Along the Niagara Escarpment is the land of the Neutral, Huron, Anishinaabe and other Native nations, and the gaps between the top and base of the escarpment were old travel routes. In the 19th century people used the falls and other drops on the escarpment for mills and early hydroelectric plants — Niagara was one of the first places in North America to develop hydropower on a large scale. Today the roughly 900 km Bruce Trail follows the escarpment, the longest continuous trail in Canada.",
  },

  "alberta-badlands": {
    // formation / history sources: 恐龙省立公园 1979-10-26 列入 UNESCO（whc.unesco.org/en/list/71，1 级）。
    //   岩层年代：园区核心的 Dinosaur Park 组约 7500—7700 万年前，德姆黑勒一带更年轻的 Horseshoe Canyon 组约 7300—6700 万年前；
    //   正文笼统写「约 7000 万年前」覆盖整体跨度，属合理简化。2026-09-10 核，verdict: ok。
    seeing:
      "The Alberta Badlands are a stretch of eroded, gullied, barely vegetated \"bad land\" on the Canadian prairie, mainly along the Red Deer River and its tributaries, with Drumheller and Dinosaur Provincial Park at its core. Where the flat prairie surface is cut open, it exposes banded grey, brown and white rock walls, pointed \"hoodoos\", and bare rounded knolls. This is one of the richest sources of dinosaur fossils in the world.",
    formation:
      "The rock of the Alberta Badlands was laid down about 70 million years ago in Late Cretaceous rivers, deltas and coasts — mudstone, sandstone and coal seams, with the bones of the dinosaurs, turtles and crocodiles of the time buried in it. At the end of the ice age, glacial meltwater cut hard down a few channels, carving deep valleys into the flat prairie; the semi-arid climate and sparse vegetation since then have let rain and snowmelt keep scouring the exposed soft rock into gullies, ridges and hoodoos, and keep exposing fresh fossils.",
    observation:
      "From the air the Alberta Badlands are a set of brown-grey \"scars\" suddenly cut into an endless green-gold plain — on both sides of a winding river valley are dense erosion gullies, striped rock walls and clusters of pointed hoodoos. On the valley floor is a meandering river and a thin oasis-like strip of poplar woodland. Driving across the prairie, you often don't see this hidden world until you reach the edge.",
    distinguish:
      "The Alberta Badlands and the U.S. Badlands National Park (South Dakota), and China's Yuanmou earth forest, form by a similar process — soft sedimentary rock intensely eroded by rain in a semi-arid climate with little plant cover. The main difference is the age and content of the rock: the Alberta Badlands' Cretaceous layers are known for dinosaur fossils; the Yuanmou forest is younger river-and-lake sediment. Versus the Grand Canyon: the Grand Canyon is one big river cutting deep into hard rock; the badlands are large areas of soft rock cut to pieces by sheet and gully erosion.",
    concept:
      "\"Badlands\" is a landform term for dense gully terrain eroded by water in soft sedimentary rock without protective vegetation — the name comes from early travellers finding such ground \"hard to cross and useless\". A common misconception is to take a hoodoo for a carved sculpture: it is a natural pillar left where a harder rock on top protects the soft rock beneath while everything around washes away.",
    history:
      "This area is the territory of the Blackfoot Confederacy and other prairie Native nations. In the late 19th century, geological surveys and railway building turned up large numbers of dinosaur bones, followed by fossil excavation that continues today — many dinosaur skeletons in museums around the world came from here. Coal was also mined around Drumheller in the early 20th century. Today Dinosaur Provincial Park (a World Heritage site) and the Royal Tyrrell Museum of Palaeontology are the focus.",
  },

  "manicouagan-reservoir": {
    // formation / history sources: 撞击约 2.14 亿年前（三叠纪末），原始撞击坑估计约 100 km 宽，
    //   长期侵蚀后地表环形构造现存约 70 km，与今天的水库环径吻合（NASA Earth Observatory，1 级）。
    //   ✅ **专项复核「把两层压成一层」**：正文明确区分了「撞击坑本身」（100 km，大部分已被侵蚀）与
    //   「今日环湖」（70 km，1970 年代大坝蓄水淹没环形低地后才成形），**没有压成一层**——这是本批处理得最好的一条。
    //   2026-09-10 核，verdict: ok。
    seeing:
      "Manicouagan Reservoir is in central Quebec — from the air or from orbit it is a nearly perfect ring-shaped lake, about 70 km across, with a large round island (René-Levasseur Island) in the middle, which is why it is called the \"Eye of Quebec\". It is the structure left by a huge meteorite impact about 214 million years ago; a later reservoir dam raised the water level and flooded the ring of low ground into this circle of lake.",
    formation:
      "About 214 million years ago, an asteroid roughly 5 km across struck here, blasting out a crater about 100 km wide. The heat and pressure of the impact melted rock and made the crater floor \"rebound\" upward into a central high. Hundreds of millions of years of erosion since (especially Quaternary glaciers) have planed the crater down a great deal, leaving only a ring of lower, softer rock in the impact structure. When a dam was built in the 1970s, the water collected in this ring of low ground and the central high became an island.",
    observation:
      "From the air Manicouagan is, among the countless irregular lakes of the Canadian Shield, one abrupt, smooth-edged circle — a ring of blue water in dark forest, with a large dark landmass (the island) in the middle. The ring is so large you have to zoom out to see all of it. The other lakes of the surrounding Shield are chaotic in shape, in sharp contrast with this circle.",
    distinguish:
      "Manicouagan, like other large impact structures on Earth (Vredefort in South Africa, the Chesapeake Bay crater in the U.S.), can only be recognised as a \"ring structure\" and not as an actual crater, because of its great age and heavy erosion. Versus a crater lake: a crater lake is water in a round pit made by a volcanic eruption or collapse; Manicouagan is a ring lake made by impact plus erosion plus an artificial reservoir.",
    concept:
      "Manicouagan shows that ancient meteorite craters mostly do not look like \"craters\" at the surface — hundreds of millions of years of erosion strips away the crater rim and floor, leaving only the deformed rock underneath (an \"impact structure\") and a ring of landform difference. Its perfect circle appears only because the reservoir water happens to flood the ring of low ground and the central uplift stands as an island — a coincidence of natural structure and human engineering.",
    history:
      "The Manicouagan area is the traditional land of the Quebec Innu. The chain of hydroelectric stations on the Manicouagan River (especially Daniel-Johnson Dam, a huge multiple-arch dam) is an important part of Quebec's hydropower system, and building it in the 1970s created today's reservoir. The impact crater itself was confirmed by geologists in the 1960s, and has since been an important site for studying impact structures and dating (it is often used to mark an end-Triassic extinction event).",
  },

  "athabasca-sand-dunes": {
    // seeing sources: 世界最北端的大型活动沙丘（约北纬 59 度）、沿湖岸延伸约 100 km、局部高达 30 m。3 级复核。
    //   ⚠️ C8：沙丘高度与范围随风持续改变，正文用的是「高达」而非固定均值，暂不改；下一轮若要精确化必须带监测时点。2026-09-10 核，verdict: ok。
    seeing:
      "The Athabasca Sand Dunes are on the south shore of Lake Athabasca in northern Saskatchewan — a belt of active dunes about 100 km long, and the highest-latitude large active dune field in the world (about 59°N). All around is boreal conifer forest and Shield rock, and in the middle is a field of moving sand hills, some up to 30 m high, with unusual \"gushing sand\" features and several plant species found nowhere else.",
    formation:
      "The sand comes from the last ice age. A large lake at the front of the ice sheet (glacial Lake Athabasca) accumulated a great deal of fine sand; when the ice retreated and the lake level dropped, the sand was exposed and then carried and piled into dunes by strong winds blowing off the lake. The dunes are still slowly moving south-east under the wind, burying the forest at their edge a little at a time. Being remote and roadless, the dune field is essentially in a natural state.",
    observation:
      "From the air the Athabasca Sand Dunes are a striking pale-yellow band between dark-green forest and blue lake — crescent and transverse dunes lined up along the prevailing wind, a gentle windward slope and a steep lee slope. Between the dunes are half-buried conifers and small streams and wetlands where groundwater emerges. Along the north edge the sand runs straight into Lake Athabasca, forming beaches and spits.",
    distinguish:
      "The dune forms of the Athabasca Sand Dunes are similar to those of most great deserts (the Sahara, the Taklamakan), but the origin and setting are entirely different: those are the product of long wind erosion and deposition in a dry climate; the Athabasca dunes are a \"periglacial aeolian\" landform of glacial-lake sediment reworked by wind, sitting in a humid forest belt, sustained by limited but steady wind plus the fact that no vegetation can take root on moving sand.",
    concept:
      "The Athabasca Sand Dunes show that \"desert landform\" is not the same as \"desert climate\": there is plenty of rain here and forest all around, yet because there is abundant loose sand to move and a steady wind, classic active dunes form. A common misconception is that seeing dunes means the local area is extremely dry — judging a dune means looking at \"sand supply plus wind\", not necessarily at rainfall.",
    history:
      "This area is the traditional land of the Denesuline (Chipewyan), who hunt and fish along Lake Athabasca. Being remote, the dunes were not systematically studied until the 20th century, and in 1992 they were made a provincial park (reached only by floatplane or boat). They are a point of botanical interest for their endemic plants (such as Athabasca campion).",
  },

  "lake-winnipeg": {
    // seeing sources: 全湖平均水深约 12 m（南盆约 9 m、北盆约 13.3 m），曼尼托巴省政府官网（1 级）。
    //   ⚠️ C8 待补：水位受 Jenpeg 控制坝调节、蓝藻水华状况逐年变化，正文未给这类数字，无过期数可改。2026-09-10 核，verdict: ok。
    seeing:
      "Lake Winnipeg is in central Manitoba, a lake that is very large in area but very shallow (average depth only about 12 m). It is long and narrow north–south, pinched in the middle by a narrows into a north and a south basin. It is the remnant of a much larger ice-age lake, glacial Lake Agassiz. Today its water finally reaches Hudson Bay by way of the Nelson River.",
    formation:
      "At the end of the last ice age, meltwater at the south-western edge of the North American ice sheet was dammed by ice and ponded up across what is now Manitoba, Minnesota and North Dakota into \"glacial Lake Agassiz\", larger in area than all today's Great Lakes combined. The ice dam burst and released water many times, and the lake level rose and fell repeatedly. About 8,000 to 9,000 years ago the ice finally retreated and the land rebounded, Lake Agassiz drained, and only a few lowest spots kept remnant lakes — Lake Winnipeg, Lake Manitoba, Lake Winnipegosis. The thick lake clay on the lakebed and the surrounding plain is what Lake Agassiz left behind.",
    observation:
      "From the air Lake Winnipeg is a north–south, relatively straight-edged sheet of pale blue water, with the rock and forest of the Canadian Shield on the east shore (an intricate shoreline with many small islands and rock points) and the flat farming plain on the west shore (a straight shoreline with beaches and lagoons). The lake is so shallow that a strong wind stirs up the bottom sediment, and from the air it is often a turbid yellow-green.",
    distinguish:
      "Lake Winnipeg, Great Slave Lake and Great Bear Lake are all large Canadian lakes, but the latter two are deep and cold and in the Shield; Lake Winnipeg is extremely shallow, warmer, straddling the boundary between the Shield and the plain, surrounded by farmland. Versus the Great Lakes: Lake Winnipeg is the remnant of Lake Agassiz, the Great Lakes are basins gouged directly by glaciers — both connected to glaciation, by different mechanisms; Lake Winnipeg is far shallower.",
    concept:
      "Lake Winnipeg reminds us that many large lakes we see today are just a small remnant of a bigger ice-age water body that \"shrank\". To identify such a remnant lake, look for a wide area of flat lake clay and rings of former shorelines on the surrounding plain — Lake Agassiz's old shorelines are still clearly visible on the Manitoba plain. Lake Winnipeg's shallowness is one reason its water quality is especially sensitive to nutrient input from farming in the watershed.",
    history:
      "The Lake Winnipeg area is home to the Anishinaabe, Cree, Dakota and Métis, and the lake and connecting rivers were a north–south travel artery. In the 18th and 19th centuries the fur trade's \"York boats\" ran this water route between the prairies and Hudson Bay. In the 20th century hydro development on the Nelson River regulated the lake's outflow. Today the lake area has commercial fishing and resorts, and has long faced problems with blue-green algae blooms.",
  },

  nahanni: {
    // seeing / history sources: 弗吉尼亚瀑布落差 96 m；1978 年 UNESCO 首批 12 项遗产中的**四项自然遗产之一**
    //   ——正文用的正是「首批四个世界自然遗产」这个限定，不是笼统的「首批遗产」，成立。
    //   ✅ **族群称谓专项复核**（美国那批犯过「阿纳萨齐」「把派尤特写成犹特」的错）：Nahanni 源自 Dene 的自称 naha；
    //   南纳汉尼流域现属 Dehcho First Nations 下的 Nahɂą Dehé Dene Band，正文「德内族纳哈人」与官方族名相符，
    //   **未发现弃用名问题**（dehcho.org 部落官网，1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The South Nahanni River flows out of the Mackenzie Mountains in the Northwest Territories, cutting straight across several mountain ranges and carving a series of canyons over a kilometre deep. On the river is Virginia Falls (Náįlįcho in the local Dene language), about 96 m high — twice the height of Niagara Falls. The area also has limestone caves, hot springs and nodular \"karst towers\". Nahanni National Park Reserve became one of the first four natural World Heritage sites in the world in 1978.",
    formation:
      "The canyons of the South Nahanni have an unusual feature: the river existed and followed its course before the mountains rose; the ranges then rose slowly along faults, and the river held its line by cutting down hard, sawing straight through the rising mountains to make canyons that cross the ridges (an \"antecedent river\"). The cut layers are visible on the canyon walls. The karst comes from soluble limestone exposed in the area.",
    observation:
      "From the air the South Nahanni is a deeply incised meandering river in forested mountains — the valley is narrow and deep, and the river swings back and forth strongly on its floor (\"incised meanders\", meaning it kept its bends while cutting down through slow uplift). At Virginia Falls the river is split into two streams by a rock pillar as it drops into a deep pool, and immediately downstream enters the deepest canyon (\"Fourth Canyon\").",
    distinguish:
      "The Nahanni canyons and the Grand Canyon in the U.S. are both cut by a big river, but the Grand Canyon is a river cutting into a plateau of little-deformed flat layers; the Nahanni is an antecedent river cutting straight through folded mountains as they rise, so its canyon walls are tilted and folded, and the valley keeps its incised meanders. Compared with the Yangtze Three Gorges: the Three Gorges is also a river cutting across a mountain belt, by a similar mechanism, but wider and with far more water.",
    concept:
      "The South Nahanni is a classic case of an \"antecedent river\": to tell whether a river predates the mountains, see whether it cuts \"unreasonably\" straight through a range rather than going around it — if a river can cut through a ridge that is rising, it usually means its rate of down-cutting kept pace with the uplift, and its course was set before the mountains rose.",
    history:
      "The Nahanni watershed is the traditional land of the Dene Nahʔą people, and \"Nahanni\" comes from their name for themselves. In the early 20th century, several mysterious disappearances and deaths of gold prospectors in the valley gave the area legends like \"Headless Valley\" and drew explorers. In 1976, at the urging of Indigenous people, the national park reserve was created, and it was inscribed as a World Heritage site in 1978; in 2009 the park was greatly enlarged to protect the whole upper South Nahanni watershed.",
  },
};
