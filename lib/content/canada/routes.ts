import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "yyz-yvr": {
    study: {
    "zh-CN":
      "多伦多飞温哥华，横穿加拿大，是理解这个国家地形结构最完整的一条线。起飞后先是安大略湖和五大湖区，随后进入加拿大地盾——一大片被冰川反复刨蚀过的古老结晶岩台地，表面布满数不清的湖泊、沼泽和裸露的浑圆岩丘，森林深处几乎没有道路，覆盖了加拿大近一半的国土。" +
      "地盾在曼尼托巴一带渐渐没入平原，温尼伯湖是史前冰川湖阿加西残留的大湖之一。往西地面越来越平、越来越干，进入中部内陆平原——加拿大的麦仓和油田，方格田块一直铺到落基山脚。" +
      "平原尽头，加拿大落基山猛然升起：一列列近乎平行的南北向山岭，是厚层沉积岩被逆冲断层推挤、层层叠瓦堆起来的，山间有冰原、绿松石色的冰川湖和 U 形谷。翻过最后一道海岸山脉，就是温哥华所在的弗雷泽河三角洲和太平洋。",
    "en-US":
      "Toronto to Vancouver crosses the whole of Canada, and is the most complete way to read the country's structure from the air. After take-off come Lake Ontario and the Great Lakes, then the Canadian Shield — a vast old platform of crystalline rock scraped again and again by ice, its surface covered with countless lakes, bogs and bare rounded rock knobs, roadless in the forested interior, covering nearly half of Canada." +
      " Around Manitoba the Shield sinks under the plains, and Lake Winnipeg is one of the large lakes left from glacial Lake Agassiz. West the land grows flatter and drier — the Interior Plains, Canada's granary and oil country, its square fields running to the foot of the Rockies." +
      " At the edge of the plains the Canadian Rockies rise abruptly: lines of near-parallel north–south ranges, thick sedimentary layers stacked like shingles by thrust faults, with icefields, turquoise glacial lakes and U-shaped valleys between them. Over a last coastal range is the Fraser River delta and the Pacific, where Vancouver sits.",
    },
    // travel sources: 全四段（study/travel × 中英）: 加拿大地盾约占国土一半、温尼伯湖为阿加西冰川湖残留、落基山逆冲叠瓦构造。核实 2026-09-11
    travel: {
    "zh-CN":
      "多伦多到温哥华飞约五小时，向西跨三个时区（落地把时钟往回拨 3 小时）。两地气候差别大：多伦多四季分明、冬冷夏闷；温哥华冬季温和多雨、夏季干爽，很少下雪。" +
      "这是加拿大版“横穿大陆”航线，靠窗依次能看到五大湖、地盾的万点湖泊、大草原的麦田、落基山的雪岭和冰川湖。白天右侧（北侧）机窗视野略好。" +
      "两地机场都有城市轨道进城：YYZ 有 UP Express 到联合车站，YVR 有 Canada Line 到市中心。多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Toronto to Vancouver is about five hours, west across three time zones (set your clock back 3 hours on arrival). The climates are very different: Toronto has four clear seasons, cold winters and muggy summers; Vancouver has mild, rainy winters and dry summers, and rarely snows." +
      " This is the Canadian 'cross the continent' flight, and from a window you see, in turn, the Great Lakes, the myriad lakes of the Shield, the wheat fields of the prairies, and the snowy ranges and glacial lakes of the Rockies. By day the right-hand (north) side has slightly better views." +
      " Both airports have rail into the city: the UP Express from YYZ to Union Station, and the Canada Line from YVR to downtown. Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yul-yvr": {
    study: {
    "zh-CN":
      "蒙特利尔飞温哥华，是从法语的圣劳伦斯河谷横穿加拿大到太平洋岸。起飞后不久就飞上加拿大地盾——一片古老的结晶岩台地，被冰川磨圆、刨出无数湖泊，安大略和魁北克北部大半是这种无路的湖泊森林。" +
      "地盾在草原三省一侧沉入平原，温尼伯湖是冰川消融时留下的大湖。往西是中部内陆平原：微微西高的半干旱麦田和牧场，河流把松软的沉积层切出浅谷。" +
      "平原尽头，加拿大落基山拔地而起——沉积岩被逆冲推挤成一列列瓦叠的山岭，夹着冰原和冰川湖。最后越过海岸山脉，温哥华、弗雷泽河三角洲和大海就在眼前。",
    "en-US":
      "Montreal to Vancouver crosses Canada from the French-speaking St Lawrence valley to the Pacific coast. Soon after take-off you are over the Canadian Shield — an old platform of crystalline rock, rounded by ice and pitted with countless lakes, covering most of northern Ontario and Quebec as roadless lake-and-forest country." +
      " On the prairie side the Shield sinks under the plains, and Lake Winnipeg is a large lake left by the melting ice. West are the Interior Plains: semi-arid wheat fields and ranchland tilting gently up to the west, with rivers cutting shallow valleys into the soft layers." +
      " At the edge of the plains the Canadian Rockies rise straight up — sedimentary rock pushed by thrust faults into lines of shingled ranges, with icefields and glacial lakes between. Finally, over the Coast Mountains, Vancouver, the Fraser delta and the sea come into view.",
    },
    // travel sources: 全四段（study/travel × 中英）: 同 yyz-yvr 地貌链；时长 330 分钟一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "蒙特利尔到温哥华飞约五个半小时，西行跨三个时区。蒙特利尔冬季严寒多雪、夏季炎热多节庆；温哥华终年温和、冬季多雨。" +
      "靠窗依次能看到地盾的湖泊、大草原、落基山的雪峰和冰川湖。YUL 有 747 快线公交进城，YVR 有 Canada Line 轻轨。" +
      "多数国家公民入境加拿大需提前在线办 eTA 或签证，落地不能补办。魁北克讲法语，出发前会一句 bonjour 很有帮助。",
    "en-US":
      "Montreal to Vancouver is about five and a half hours, west across three time zones. Montreal has cold, snowy winters and hot, festival-filled summers; Vancouver is mild all year and rainy in winter." +
      " From a window you see, in turn, the lakes of the Shield, the prairies, and the snowy peaks and glacial lakes of the Rockies. YUL has the 747 express bus into the city, YVR the Canada Line." +
      " Citizens of most countries need an eTA or a visa arranged online before travelling to Canada. Quebec is French-speaking, and a word of 'bonjour' helps.",
    },
  },

  "yyz-yul": {
    study: {
    "zh-CN":
      "多伦多飞蒙特利尔，是加拿大最繁忙的航线，很短，主要在圣劳伦斯河的低地里飞。起飞后先掠过安大略湖北岸；城市北缘那道低矮的长陡坡，是尼亚加拉断崖——一层坚硬的白云岩盖在软岩上，被侵蚀成一条从纽约州经安大略一直弯到休伦湖的悬崖线，尼亚加拉瀑布就是河水从这道崖上跌落形成的。" +
      "接着地面是平坦的圣劳伦斯低地：安大略湖和圣劳伦斯河之间一条肥沃的沉积平原，是安大略和魁北克人口最密的地带，田块、村镇和高速公路排得很规整。蒙特利尔就在圣劳伦斯河中的一座大岛上，岛中央的皇家山从空中很好认。",
    "en-US":
      "Toronto to Montreal is the busiest air route in Canada, short, and flown mostly over the lowlands of the St Lawrence. After take-off you skim the north shore of Lake Ontario; the low ridge along the city's northern edge is the Niagara Escarpment — a hard cap of dolomite over softer rock, eroded into a line of cliff that curves from New York State through Ontario to Lake Huron, and Niagara Falls is where the river drops over it." +
      " Then the ground is the flat St Lawrence Lowlands: a fertile sedimentary plain between Lake Ontario and the St Lawrence River, the most densely settled belt of Ontario and Quebec, with neatly ordered fields, towns and highways. Montreal sits on a large island in the St Lawrence, and Mount Royal in the middle of the island is easy to pick out from the air.",
    },
    // travel sources: 全四段（study/travel × 中英）: 尼亚加拉断崖白云岩盖层；VIA 约五小时（官网，1 级）；7 月 1 日魁北克搬家日。核实 2026-09-11
    travel: {
    "zh-CN":
      "多伦多到蒙特利尔飞约一小时十五分钟，同一时区。两地都属温带大陆性气候、四季分明，蒙特利尔冬天更冷更长。也可以坐 VIA Rail 火车，约五小时、市中心到市中心。" +
      "多伦多讲英语，蒙特利尔以法语为主——进店先说 bonjour 很受欢迎，服务业多能讲英语。7 月 1 日前后是魁北克传统搬家日，交通住宿都紧张。" +
      "多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Toronto to Montreal is about an hour and fifteen minutes, in the same time zone. Both have a humid continental climate with four clear seasons; Montreal's winter is colder and longer. You can also take the VIA Rail train, about five hours, city centre to city centre." +
      " Toronto is English-speaking; Montreal is French-first — a 'bonjour' on entering a shop is welcome, and the service industry mostly speaks English. Around 1 July is the traditional Quebec moving day, when transport and lodging are tight." +
      " Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yyz-yhz": {
    study: {
    "zh-CN":
      "多伦多飞哈利法克斯，从五大湖一路飞到大西洋岸。起飞后先是安大略湖北岸和尼亚加拉断崖那道白云岩悬崖线，然后是平坦的圣劳伦斯低地——安大略与魁北克之间的肥沃农业带。" +
      "越过圣劳伦斯河，地面渐渐起伏，进入阿巴拉契亚山系的北端余脉——久经侵蚀的低山和丘陵，森林密布。" +
      "接近终点，海面出现芬迪湾——一条深入陆地的漏斗形海湾，因为形状和长度和大西洋潮汐产生共振，这里的潮差是世界最大的，落潮时露出大片红色泥滩和被冲刷成蘑菇状的礁石。哈利法克斯就在芬迪湾以东、一条狭长深水港湾的岸边。",
    "en-US":
      "Toronto to Halifax flies from the Great Lakes to the Atlantic coast. After take-off come the north shore of Lake Ontario and the dolomite cliff-line of the Niagara Escarpment, then the flat St Lawrence Lowlands — the fertile farm belt between Ontario and Quebec." +
      " Across the St Lawrence the land begins to roll, into the northern tail of the Appalachian system — long-eroded low mountains and hills, heavily forested." +
      " Near the end the Bay of Fundy appears on the sea — a funnel-shaped bay reaching inland, whose shape and length resonate with the Atlantic tide, giving it the largest tidal range in the world; at low tide it exposes broad red mud flats and rocks scoured into mushroom shapes. Halifax is east of the bay, on the shore of a long, deep harbour.",
    },
    // travel sources: 全四段（study/travel × 中英）: 芬迪湾世界最大潮差；航程时长原写约一小时四十分，按本库航线数据（140 分钟）改为约两小时二十分。核实 2026-09-11
    travel: {
    "zh-CN":
      "多伦多到哈利法克斯飞约两小时二十分钟，落地把时钟往前拨一小时（哈利法克斯是大西洋时区）。哈利法克斯比内陆温和：夏季凉爽多雾，9–10 月可能有飓风残余带来的大风大雨。" +
      "靠窗后段能看到圣劳伦斯河、阿巴拉契亚低山和芬迪湾。YHZ 机场离市区约 35 公里、有机场大巴，安排好接驳时间。" +
      "哈利法克斯适合作为大西洋省份自驾的起点，往南看佩吉湾灯塔和花岗岩海岸。多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Toronto to Halifax is about two hours and twenty minutes; set your clock forward an hour on arrival (Halifax is on Atlantic time). Halifax is milder than inland: cool, foggy summers, with strong wind and rain possible from hurricane remnants in September–October." +
      " From a window in the later part of the flight you can see the St Lawrence, the low Appalachians and the Bay of Fundy. YHZ airport is about 35 km from the city with an airport bus — plan the transfer time." +
      " Halifax makes a good start for a drive around Atlantic Canada, south to Peggys Cove for the lighthouse and granite shore. Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yhz-yyt": {
    study: {
    "zh-CN":
      "哈利法克斯飞圣约翰斯，是一趟短程航班，从新斯科舍飞到纽芬兰岛最东端——北美大陆最靠东的城市。起飞后不久经过爱德华王子岛：圣劳伦斯湾里一座低平的岛，土是鲜明的铁红色，岸边是红砂岩崖和沙丘。" +
      "越过卡伯特海峡，纽芬兰岛西岸升起长岭山脉——阿巴拉契亚山系最北的一段，是一块古老岩层被抬升、又被冰川刨出峡湾和陡壁的高原（格罗莫讷国家公园就在这里，能看到地球地幔的岩石直接出露在地表）。" +
      "岛的内陆是空旷的岩石荒原和无数小湖。圣约翰斯抱着一个几乎被陆地围死的小港湾，只有一条两侧是陡崖的窄水道通向大西洋。",
    "en-US":
      "Halifax to St. John's is a short flight, from Nova Scotia to the far eastern tip of Newfoundland — the easternmost city in North America. Soon after take-off you pass Prince Edward Island: a low, flat island in the Gulf of St Lawrence, its soil a vivid iron-red, its shores red sandstone cliffs and dunes." +
      " Across the Cabot Strait, the Long Range Mountains rise on the west coast of Newfoundland — the northernmost stretch of the Appalachian system, a plateau of old rock uplifted and then carved by ice into fjords and cliffs (Gros Morne National Park is here, where rock from the Earth's mantle is exposed at the surface)." +
      " The island's interior is open rocky barrens with countless small lakes. St. John's hugs a nearly landlocked harbour, with only a narrow, cliff-walled channel out to the Atlantic.",
    },
    // travel sources: 全四段（study/travel × 中英）: 爱德华王子岛红土、长岭山脉与格罗莫讷地幔岩（UNESCO）；纽芬兰半小时时区；时长 95 分钟一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "哈利法克斯到圣约翰斯飞约一小时四十分钟，落地把时钟再往前拨一个半小时（纽芬兰是特殊的半小时时区）。圣约翰斯多雾多风、天气变化极快，是加拿大最湿、最多雾的城市之一，随身带防风防水外套。" +
      "5–6 月能看到从北方漂来的冰山，6–7 月看座头鲸和海鹦。看海岸悬崖务必远离边缘、风很大。航班常因雾延误，行程留弹性。" +
      "岛上景点分散、公交少，租车最方便。多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Halifax to St. John's is about an hour and forty minutes; set your clock forward another hour and a half on arrival (Newfoundland has an unusual half-hour time zone). St. John's is foggy, windy and very changeable — one of the wettest and foggiest cities in Canada — so carry a windproof, waterproof jacket." +
      " May–June you can see icebergs drifting down from the north, June–July humpback whales and puffins. At the coastal cliffs stay well back from the edge — the wind is strong. Flights are often fog-delayed, so keep the itinerary flexible." +
      " Attractions on the island are scattered with little transit — a rental car is easiest. Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yvr-yyc": {
    study: {
    "zh-CN":
      "温哥华飞卡尔加里，短短一小时里从太平洋岸翻过整条加拿大落基山，落到山另一侧的草原上。起飞后先越过弗雷泽河谷和海岸山脉，随后是不列颠哥伦比亚起伏的内陆山地和干燥河谷。" +
      "航线中段进入加拿大落基山的主脊：这里的山不是火山、也不是花岗岩块，而是厚层的石灰岩和砂岩被逆冲断层一层层往东推、叠瓦式堆起来的，所以山坡常能看到清楚的水平岩层线。山间散布着冰原、绿松石色的冰川湖和 U 形谷，班夫、路易斯湖就在这一带。" +
      "翻过最东边一道山岭（弓河谷的山口），地面骤然下降、展开成开阔的草原，卡尔加里就在落基山脚下、两条河交汇处。",
    "en-US":
      "Vancouver to Calgary crosses the entire Canadian Rockies in a single hour, from the Pacific coast down onto the prairie on the far side. After take-off you cross the Fraser valley and the Coast Mountains, then the rolling interior mountains and dry valleys of British Columbia." +
      " Mid-flight you reach the main crest of the Canadian Rockies: these mountains are not volcanoes or blocks of granite, but thick layers of limestone and sandstone pushed east and stacked like shingles by thrust faults, so the slopes often show clear horizontal rock lines. Icefields, turquoise glacial lakes and U-shaped valleys are scattered between them, and Banff and Lake Louise are here." +
      " Over the easternmost ridge (the pass at the head of the Bow valley) the land drops away suddenly into open prairie, and Calgary sits at the foot of the Rockies where two rivers meet.",
    },
    // travel sources: 全四段（study/travel × 中英）: 卡尔加里约 1000 m、焚风。核实 2026-09-11
    travel: {
    "zh-CN":
      "温哥华到卡尔加里飞约一小时二十分钟，落地把时钟往前拨一小时（卡尔加里是山地时区）。温哥华温和多雨、卡尔加里干爽日照强、海拔约一千米、冬季有焚风。" +
      "这是一条风景航线，靠窗能俯瞰整条落基山的雪岭和冰川湖。卡尔加里是进班夫国家公园的门户，机场有大巴直接去班夫。" +
      "冬季山区自驾要冬胎、查山口路况。多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Vancouver to Calgary is about an hour and twenty minutes; set your clock forward an hour on arrival (Calgary is on Mountain time). Vancouver is mild and rainy; Calgary is dry with strong sun, at about a thousand metres, with a warm chinook wind in winter." +
      " This is a scenic flight, and from a window you look down on the whole line of the Rockies, its snowy ridges and glacial lakes. Calgary is the gateway to Banff National Park, and the airport has a coach straight to Banff." +
      " Driving in the mountains in winter needs winter tyres and a check of pass conditions. Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yyc-ywg": {
    study: {
    "zh-CN":
      "卡尔加里飞温尼伯，几乎全程在加拿大中部大草原上飞。起飞后不久，往东南方向能看到红鹿河在草原上切出的一片沟壑荒地——艾伯塔荒地，河水把松软的岩层冲刷成光秃的土林和台地，是北美出土恐龙化石最多的地方之一。" +
      "接着地面就是一望无际的中部内陆平原：微微起伏的麦田、油菜田和牧场，方格田块和圆形喷灌圈从空中很规整；这里是史前浅海的海底，岩层近乎水平。" +
      "接近温尼伯，地面变得极其平坦——那是史前冰川湖阿加西的湖底，比周围还平。温尼伯湖是这个大湖残留的一部分，就在城市北面。温尼伯建在红河与阿西尼博因河交汇处。",
    "en-US":
      "Calgary to Winnipeg is flown almost entirely over the Canadian prairies. Soon after take-off, to the south-east, you can see the badlands the Red Deer River has cut into the plain — the Alberta Badlands, where the river has scoured the soft rock layers into bare earth pillars and mesas, and one of the richest places in North America for dinosaur fossils." +
      " Then the ground is the endless Interior Plains: gently rolling wheat, canola and ranchland, with square fields and circular irrigation pivots neatly laid out from above; this was the floor of a prehistoric shallow sea, and the rock layers are nearly horizontal." +
      " Approaching Winnipeg the land becomes extremely flat — the bed of glacial Lake Agassiz, flatter than its surroundings. Lake Winnipeg, north of the city, is a remnant of that lake. Winnipeg sits where the Red and Assiniboine rivers meet.",
    },
    // travel sources: 全四段（study/travel × 中英）: 艾伯塔荒地恐龙化石「最丰富之一」带限定；温尼伯为阿加西湖底。核实 2026-09-11
    travel: {
    "zh-CN":
      "卡尔加里到温尼伯飞约两个多小时，落地把时钟往前拨一小时（温尼伯是中部时区）。两地都属大陆性草原气候、一年温差极大：夏季温暖、冬季酷寒（1 月体感常低于 -30°C）。" +
      "靠窗几乎全程是大草原的方格田。温尼伯的 The Forks 和人权博物馆值得一看，夏季可去温尼伯湖边沙滩、冬季看极光。" +
      "若冬天来，防寒装备按 -30°C 准备。多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Calgary to Winnipeg is a bit over two hours; set your clock forward an hour on arrival (Winnipeg is on Central time). Both have a continental prairie climate with a huge annual range: warm summers, and severe cold in winter (a January wind-chill often below −30°C)." +
      " From a window it is prairie fields almost the whole way. Winnipeg's The Forks and the human-rights museum are worth seeing; in summer there are beaches on Lake Winnipeg, and in winter the northern lights." +
      " If you come in winter, prepare for −30°C. Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yeg-yyz": {
    study: {
    "zh-CN":
      "埃德蒙顿飞多伦多，向东南横穿加拿大的草原和地盾。起飞时脚下是北萨斯喀彻温河谷和中部内陆平原——微微起伏的麦田和牧场，这里是加拿大最北的大片农业区。" +
      "往东地面越来越平，进入曼尼托巴的湖积平原，温尼伯湖是史前冰川湖阿加西的残留。" +
      "过了温尼伯，绿色的农田戛然而止，换成加拿大地盾：一片被冰川刨光的古老结晶岩台地，湖泊、沼泽和裸岩交错，森林里几乎没有路，从安大略北部一直延伸到魁北克。地盾在安大略湖以北渐渐没入低地，多伦多就在安大略湖北岸的平原上。",
    "en-US":
      "Edmonton to Toronto crosses the prairies and the Shield of Canada to the south-east. On take-off you are over the North Saskatchewan River valley and the Interior Plains — gently rolling wheat and ranchland, the northernmost large farming region in Canada." +
      " East the land flattens further, into the lake plain of Manitoba, where Lake Winnipeg is a remnant of glacial Lake Agassiz." +
      " Past Winnipeg the green farmland stops abruptly and gives way to the Canadian Shield: an old platform of crystalline rock planed by ice, a mosaic of lakes, bogs and bare rock, roadless in the forest, running from northern Ontario into Quebec. North of Lake Ontario the Shield sinks under the lowlands, and Toronto is on the plain along the lake's north shore.",
    },
    // travel sources: 全四段（study/travel × 中英）: 时长约三个半小时（实测 3 小时 40 分左右，在容差内）。核实 2026-09-11
    travel: {
    "zh-CN":
      "埃德蒙顿到多伦多飞约三个半小时，向东跨两个时区（落地把时钟往前拨 2 小时）。埃德蒙顿冬季漫长严寒、夏季白昼极长；多伦多四季分明、夏季闷热。" +
      "靠窗依次是大草原、曼尼托巴的湖泊、地盾的万点湖泊和森林。埃德蒙顿常作为往南去落基山或往北去自然区的中转。" +
      "多数国家公民入境加拿大需提前在线办 eTA 或签证，落地不能补办。",
    "en-US":
      "Edmonton to Toronto is about three and a half hours, east across two time zones (set your clock forward 2 hours on arrival). Edmonton has long, hard winters and very long summer daylight; Toronto has four clear seasons and muggy summers." +
      " From a window come, in turn, the prairies, the lakes of Manitoba, and the myriad lakes and forest of the Shield. Edmonton is often used as a hub for going south to the Rockies or north to nature areas." +
      " Citizens of most countries need an eTA or a visa arranged online before travelling to Canada — this cannot be done on arrival.",
    },
  },

  "pek-yyz": {
    // study sources: 距离改为按机场坐标算的大圆距离（10,561 km）；航司里程仍未公开可查。核实 2026-09-12
    study: {
    "zh-CN":
      "北京飞多伦多，走的是跨越北极圈的大圆航路，两地的大圆距离约一万零六百公里，是中国直飞北美东部最长的航线之一。起飞后越过燕山，进入蒙古高原南缘的戈壁——砾石铺地、植被稀疏的干旱带，年降水多在两百毫米以下，聚落之间常隔上百公里。再往北是贝加尔湖，地球上最深的湖泊，最深处超过一千六百米，蓄水量约占全球未冻结淡水的五分之一；它坐落在一条仍在缓慢张开的大陆裂谷上，两岸山地陡直入水，冬季湖面完全封冻，冰层厚到可以行车。越过湖区之后是连绵的西伯利亚针叶林，落叶松与云杉一直铺到视野尽头，河流全部向北流。接着抵达西伯利亚北冰洋沿岸——一片被冻土支配的低平苔原，夏季只有表层解冻，水下渗不下去，于是在地表积成无数热融湖，从空中看像撒了一地的碎镜片；海岸线破碎，河口宽阔，浮冰在夏季退向更高纬度。跨过北冰洋后进入加拿大北极群岛，由几十座大岛和上千座小岛组成，岛屿之间是常年结冰或半年结冰的海峡；地表以裸岩、砾石和薄薄一层苔原植被为主，几乎看不到树。再往南是哈德逊湾，一片深入北美大陆的巨大内海，冬季完全封冻；它所在的地壳曾被厚达数公里的冰盖压低，冰盖消融后至今仍在缓慢回弹，海岸线因此持续抬升，湖岸上能看到一道道被抬起的古海滩。飞机最后飞越安大略的森林与湖群，降落在多伦多皮尔逊机场。",
    "en-US":
      "Beijing to Toronto follows a great-circle track over the Arctic, some 10,600 km between the two cities as the crow flies, one of the longest nonstop routes from China to eastern North America. After take-off the flight crosses the Yan Mountains into the Gobi Desert on the southern edge of the Mongolian Plateau, an arid belt of gravel and sparse vegetation under less than 200 millimetres of rain in most years, with settlements often a hundred kilometres apart. Farther north lies Lake Baikal, the deepest lake on Earth at more than sixteen hundred metres, holding roughly a fifth of the world's unfrozen fresh water; it sits in a continental rift that is still slowly pulling apart, the mountains on both shores drop straight into the water, and in winter the surface freezes solid enough to drive on. Beyond the lake the Siberian taiga runs unbroken to the horizon, larch and spruce all the way, and every river flows north. The route then reaches the Siberian Arctic Coast, low tundra governed by permafrost: only the surface layer thaws in summer, water cannot drain away, and it collects into countless thaw lakes that read from the air like shards of scattered mirror; the coastline is broken, the river mouths are wide, and the pack ice retreats to higher latitudes through the summer. Across the Arctic Ocean comes the Canadian Arctic Archipelago, dozens of large islands and more than a thousand small ones separated by channels that are frozen year-round or for half the year; the ground is bare rock, gravel and a thin skin of tundra vegetation, with scarcely a tree in sight. Farther south is Hudson Bay, a vast inland sea driven deep into the North American continent and frozen over in winter; the crust beneath it was pressed down by an ice sheet kilometres thick, and it is still rebounding today, so the shoreline keeps rising and raised ancient beaches step back from the water in visible ridges. The flight finally crosses the forests and lakes of Ontario and lands at Toronto Pearson Airport.",
    },
    // travel sources: 全四段（study/travel × 中英）: 贝加尔湖数据同 pek-jfk（UNESCO，1 级）；「全程约一万一千五百公里」大圆约 10,560 km，航司公布里程未查到，已开 issue 待核。核实 2026-09-11
    travel: {
    "zh-CN":
      "北京到多伦多约12小时40分钟，由中国国际航空波音777客机执飞。两地时差12-13小时（加拿大东部夏令时期间12小时，标准时期间13小时）。多伦多夏季温暖湿润，冬季寒冷多雪，春秋最适合出行。" +
      "皮尔逊机场距市中心约25公里，可搭乘UP Express快线约半小时直达联合车站，也可乘公交或出租车。市内公共交通（TTC地铁、有轨电车、巴士）票制通用，感应式银行卡可直接刷卡乘车。CN塔、安大略湖畔、旧市政厅等地标多可步行或搭轻轨到达。" +
      "中国公民赴加拿大须提前办妥访客签证（中国护照通常不适用电子旅行授权eTA，需申请正式签证），建议出行前至少1个月申请，具体以加拿大移民、难民及公民部（IRCC）最新公布为准；入境时随身行李与现金如实申报。",
    "en-US":
      "Beijing to Toronto takes about 12 hours 40 minutes on an Air China Boeing 777. The time difference is 12–13 hours (12 hours during Canadian Eastern Daylight Time, 13 hours during Standard Time). Toronto has warm, humid summers and cold, snowy winters, with spring and autumn the best times to visit." +
      " Pearson Airport is about 25 km from downtown; the UP Express train takes about half an hour direct to Union Station, and buses or taxis are also available. Toronto's public transit (TTC subway, streetcars and buses) runs on one shared fare system, and a contactless bank card works directly on board. The CN Tower, the Lake Ontario waterfront and Old City Hall are mostly reachable on foot or by streetcar." +
      " Chinese citizens need a visitor visa for Canada well in advance — Chinese passports generally don't qualify for the eTA and require a full temporary resident visa — apply at least a month ahead, and check the latest requirements from Immigration, Refugees and Citizenship Canada (IRCC). Declare belongings and cash honestly on arrival.",
    },
  },
};
