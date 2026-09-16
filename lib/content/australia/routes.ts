import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "syd-per": {
    study: {
    "zh-CN":
      "悉尼飞珀斯，是横穿整个澳大利亚大陆，从东海岸飞到西海岸，是世界上最长的国内航线之一。起飞后不久，西边出现一道被深谷切开的砂岩台地，那是蓝山——大分水岭的一段，尤加利树林在阳光下泛出蓝色的雾气。" +
      "翻过大分水岭，地面转为开阔平缓的内陆平原。飞机会飞越墨累-达令河的水系——澳大利亚最大的河流系统，在干旱的平原上蜿蜒，河边是一串灌溉农田和小镇。" +
      "再往西，绿色渐渐消失，进入大维多利亚沙漠：红褐色的沙垄和大片低矮灌丛，几乎没有道路和居民点。接着地面变得异常平坦，这就是纳拉伯平原——一整块石灰岩台地，几乎不长树，南缘是笔直的悬崖直插南大洋，横贯大陆的铁路和公路在这里走一条几百公里的直线。" +
      "越过纳拉伯，重新出现农田和小麦带，飞机在印度洋边的珀斯降落。珀斯是世界上最孤立的大城市之一，离最近的大城市有几千公里。",
    "en-US":
      "Sydney to Perth crosses the whole Australian continent, east coast to west, and is one of the longest domestic flights in the world. Soon after take-off, a sandstone plateau cut by deep valleys appears to the west: the Blue Mountains, part of the Great Dividing Range, where the eucalypt forest gives off a blue haze in the sun." +
      " Over the range, the land opens out into flat inland plains. The route crosses the Murray–Darling system — the largest river system in Australia — winding across the dry plains, with a string of irrigated farms and small towns along the water." +
      " Farther west the green fades into the Great Victoria Desert: red-brown sand ridges and low scrub, with almost no roads or settlements. Then the ground becomes remarkably flat — the Nullarbor Plain, a single slab of limestone that grows almost no trees, its southern edge a straight line of cliffs dropping into the Southern Ocean, where the trans-continental railway and highway run dead straight for hundreds of kilometres." +
      " Past the Nullarbor, farmland and the wheatbelt return, and the plane lands at Perth on the Indian Ocean — one of the most isolated large cities in the world, thousands of kilometres from the next.",
    },
    // travel sources: 全四段（study/travel × 中英）: 悉尼—珀斯约 3290 km「世界最长国内航线之一」带限定；珀斯「最孤立的大城市之一」带限定；纳拉伯平原。核实 2026-09-11
    travel: {
    "zh-CN":
      "悉尼到珀斯飞约五小时，加上2–3小时时差（珀斯比悉尼晚），实际是大半天。澳大利亚是南半球国家，季节与北半球相反——12月至2月是夏天。" +
      "珀斯是西澳的首府，气候是地中海式：夏季干热、冬季温和多雨。城市沿天鹅河展开，国王公园、弗里曼特尔的港口老城、往北的尖峰石阵、往南玛格丽特河的酒庄和海岸是主要去处。" +
      "跨州基本靠飞机，城市之间距离极大。全澳紫外线都很强，防晒是常识。入境对食品、木制品、动植物制品检查极严，务必如实申报；多数国家公民需提前在线申请电子旅行许可（ETA），落地不能补办。",
    "en-US":
      "Sydney to Perth is about five hours, plus a 2–3 hour time difference (Perth is behind), so it takes most of a day. Australia is in the southern hemisphere, so the seasons are reversed — December to February is summer." +
      " Perth is the capital of Western Australia, with a Mediterranean climate: dry, hot summers and mild, wet winters. The city runs along the Swan River; Kings Park, the port old town of Fremantle, the Pinnacles to the north, and the wineries and coast of Margaret River to the south are the main draws." +
      " Travel between states is essentially by air, and the distances are huge. UV is strong everywhere in Australia — sun protection is basic sense. Border checks on food, wood and plant and animal products are strict, so declare honestly; citizens of most countries need to apply online for an ETA before departure, which cannot be arranged on arrival.",
    },
  },

  "syd-cns": {
    study: {
    "zh-CN":
      "悉尼飞凯恩斯，是沿着澳大利亚东海岸往北，从温带飞到热带。起飞后一直有一道山脉在飞机左侧相伴，那是大分水岭——澳大利亚最长的山系，从东南一直延伸到约克角半岛，把湿润的沿海和干旱的内陆分开，也是众多河流的分水岭。" +
      "沿途海岸线外有一座巨大的沙岛，那是弗雷泽岛（K'gari）——世界上最大的沙岛，整座岛由沙构成，上面却长着雨林、有淡水湖，是原住民布查拉人的传统土地。" +
      "越往北，海水越蓝，珊瑚礁越密。快到凯恩斯时，右侧海面上出现深浅斑驳的一大片浅蓝，那是大堡礁——世界上最大的珊瑚礁系统，由几千个独立的礁体和岛屿组成，沿昆士兰海岸延伸两千多公里，从飞机上能清楚看到礁盘、潟湖和深水航道的分界。凯恩斯就是进入大堡礁的主要门户。",
    "en-US":
      "Sydney to Cairns runs north up the east coast of Australia, from the temperate zone into the tropics. Soon after take-off a range of mountains keeps pace on the left: the Great Dividing Range, the longest mountain system in Australia, running from the south-east all the way to Cape York, separating the humid coast from the dry interior and forming the divide for many rivers." +
      " Off the coast along the way is a huge sand island: K'gari (Fraser Island), the largest sand island in the world — the whole island is made of sand, yet it carries rainforest and freshwater lakes, and it is the traditional Country of the Butchulla people." +
      " The farther north, the bluer the sea and the denser the reefs. Near Cairns, a mottled expanse of pale blue appears on the sea to the right: the Great Barrier Reef, the largest coral reef system in the world, made up of thousands of separate reefs and islands, running more than 2,000 km along the Queensland coast; from the plane you can clearly see the line between reef flats, lagoons and the deep-water channels. Cairns is the main gateway to the reef.",
    },
    // travel sources: 全四段（study/travel × 中英）: 大分水岭、K'gari 世界最大沙岛、大堡礁约 2300 km 与本库一致；「布奇拉·布奇拉人」已统一为「布查拉人」。核实 2026-09-11
    travel: {
    "zh-CN":
      "悉尼到凯恩斯飞约三小时。凯恩斯在热带，全年炎热潮湿、分旱季雨季：5–10月旱季天气最稳定、也是旺季；11–4月湿季闷热多雨，还有热带气旋和刺水母（海黄蜂），海滩游泳要看季节和防护网。" +
      "凯恩斯是进入大堡礁和昆士兰热带雨林的门户：坐船或飞机上礁看珊瑚，往北去道格拉斯港和戴恩树雨林，往西上高原（库兰达、阿瑟顿）。城市本身不大，海滨有一个人工泻湖泳池。" +
      "上礁浮潜、潜水选有资质的经营者，检查装备和保险。全年强防晒，雨林里注意防蚊、别碰不认识的植物（有会蜇人的刺树）。",
    "en-US":
      "Sydney to Cairns is about three hours. Cairns is in the tropics, hot and humid all year with a dry and a wet season: the dry season (May–October) has the most settled weather and is high season; the wet (November–April) is muggy and rainy, with tropical cyclones and marine stingers (box jellyfish), so beach swimming depends on the season and the stinger nets." +
      " Cairns is the gateway to the Great Barrier Reef and the Queensland tropical rainforest: out to the reef by boat or plane for the coral, north to Port Douglas and the Daintree, west up to the Tablelands (Kuranda, Atherton). The city itself is small, with an artificial lagoon pool on the esplanade." +
      " For snorkelling and diving on the reef, choose licensed operators and check equipment and insurance. Use strong sun protection year-round, and in the rainforest guard against mosquitoes and do not touch unfamiliar plants (there is a stinging tree).",
    },
  },

  "mel-syd": {
    study: {
    "zh-CN":
      "墨尔本飞悉尼，是澳大利亚最繁忙的航线，也是世界上客运量最大的航线之一。虽然只有一个多小时，却飞越了澳大利亚东南部最高的山地。" +
      "起飞后向东北，很快看到一片带雪的高地，那是澳大利亚阿尔卑斯山脉——大分水岭的最高一段，主峰科修斯科山是澳大利亚大陆的最高点。这里冬季积雪，是澳大利亚少有的滑雪区；雪水汇成墨累河等大河，从这里流向内陆。" +
      "沿着大分水岭的走向继续往北，山势不高但连续，把东边狭窄的沿海平原和西边的内陆分开。接近悉尼时，右前方出现被深谷切开的砂岩台地，那是蓝山，尤加利林在阳光下泛蓝。飞机越过蓝山，沿海岸下降到悉尼——这座城市建在一个巨大的天然深水港周围。",
    "en-US":
      "Melbourne to Sydney is the busiest route in Australia and one of the busiest in the world by passenger numbers. It takes only a little over an hour, but it flies over the highest mountains in south-eastern Australia." +
      " Heading north-east after take-off, a snow-streaked upland soon appears: the Australian Alps, the highest part of the Great Dividing Range, whose main peak, Mount Kosciuszko, is the highest point on the Australian mainland. Snow lies here in winter, in one of the few skiing areas in Australia; the meltwater feeds the Murray and other big rivers that flow inland from here." +
      " Following the line of the Great Dividing Range north, the mountains are not high but continuous, separating the narrow coastal plain in the east from the interior in the west. Approaching Sydney, a sandstone plateau cut by deep valleys shows ahead to the right: the Blue Mountains, the eucalypt forest hazed blue in the sun. The plane crosses them and descends along the coast to Sydney, a city built around a huge natural deep-water harbour.",
    },
    // travel sources: 全四段（study/travel × 中英）: 墨尔本—悉尼为澳大利亚最繁忙航线（OAG 2025 全球第 6）；科修斯科山为澳大利亚大陆最高点（「大陆」限定已到位）。核实 2026-09-11
    travel: {
    "zh-CN":
      "墨尔本到悉尼飞约一个半小时，两地在同一时区。两座城市气质不同：墨尔本文艺、以咖啡和小巷闻名，天气“一天有四季”、变化快；悉尼外向、以港湾和海滩为中心。" +
      "悉尼的看点集中在港湾：歌剧院、海港大桥、坐渡轮去曼利或塔龙加动物园；邦迪到库吉的海崖步道；往西约90分钟到蓝山。海滩游泳只在插着红黄旗的区域、听从救生员，注意离岸流。" +
      "南半球季节相反，12–2月是盛夏、海滩旺季，价格最高；春秋（9–11月、3–5月）气候最舒服。入境海关对食品和动植物制品查得严，如实申报。",
    "en-US":
      "Melbourne to Sydney is about an hour and a half, and the two cities are in the same time zone. They have different characters: Melbourne is arty, known for coffee and laneways, with \"four seasons in one day\" and fast-changing weather; Sydney is outgoing and centred on its harbour and beaches." +
      " Sydney's sights cluster around the harbour: the Opera House, the Harbour Bridge, ferries to Manly or Taronga Zoo; the Bondi-to-Coogee clifftop walk; and about 90 minutes west, the Blue Mountains. Swim only between the red and yellow flags, follow the lifeguards, and watch for rip currents." +
      " In the southern hemisphere the seasons are reversed — December to February is high summer and beach high season, the most expensive; spring and autumn (September–November, March–May) have the most comfortable weather. Customs checks on food and plant and animal products are strict — declare honestly.",
    },
  },

  "mel-per": {
    study: {
    "zh-CN":
      "墨尔本飞珀斯，是从澳大利亚东南角飞到西南角，跨越大陆南部的干旱地带。起飞后向西，很快看到一列孤立的砂岩山脊从平原上凸起，那是格兰坪山（Gariwerd）——大分水岭西端的一段，陡直的岩壁和岩画使它成为原住民的重要文化地。" +
      "过了格兰坪，地面转为开阔的麦田和牧场，再往西绿色消失，进入纳拉伯平原：一整块几乎不长树的石灰岩台地，异常平坦，南缘是笔直的悬崖对着南大洋。飞机沿海岸线以内飞过这段。" +
      "纳拉伯以北是大维多利亚沙漠，红褐色的沙垄和低矮灌丛一直铺到地平线，几乎没有人烟。越过沙漠西缘，重新出现小麦带和农田，飞机在印度洋边的珀斯降落。整条航线，大部分时间脚下是澳大利亚人口最稀、最干旱的地带。",
    "en-US":
      "Melbourne to Perth flies from the south-eastern corner of Australia to the south-western, across the dry country of the continent's south. Heading west after take-off, an isolated line of sandstone ridges soon rises from the plain: the Grampians (Gariwerd), part of the western end of the Great Dividing Range, whose steep rock walls and rock art make it an important cultural place for Aboriginal people." +
      " Past the Grampians the land becomes open wheat fields and grazing country, then the green fades into the Nullarbor Plain: a single slab of limestone that grows almost no trees, remarkably flat, its southern edge a straight line of cliffs facing the Southern Ocean. The route flies over this stretch just inland of the coast." +
      " North of the Nullarbor is the Great Victoria Desert, red-brown sand ridges and low scrub to the horizon, almost unpeopled. Over the desert's western edge, the wheatbelt and farmland return, and the plane lands at Perth on the Indian Ocean. For most of the flight, the ground below is the driest, least-peopled belt of Australia.",
    },
    // travel sources: 全四段（study/travel × 中英）: 格兰坪山为大分水岭西端一支（维多利亚州规划部，2 级）。核实 2026-09-11
    travel: {
    "zh-CN":
      "墨尔本到珀斯飞约四小时，加上2–3小时时差（珀斯晚），实际是大半天。珀斯气候是地中海式：夏季干热、冬季温和多雨；墨尔本天气多变。" +
      "珀斯沿天鹅河展开，国王公园、弗里曼特尔、罗特尼斯岛（看短尾矮袋鼠）、往北的尖峰石阵、往南玛格丽特河是主要去处。西澳幅员极广，跨区域动辄几百上千公里，多坐飞机。" +
      "全澳紫外线强，防晒是常识。入境对食品、木制品、动植物制品查得严，如实申报；西澳州内跨境（如去往北部）有时也有农产品检查。",
    "en-US":
      "Melbourne to Perth is about four hours, plus a 2–3 hour time difference (Perth is behind), so it takes most of a day. Perth has a Mediterranean climate — dry hot summers, mild wet winters — while Melbourne's weather is changeable." +
      " Perth runs along the Swan River; Kings Park, Fremantle, Rottnest Island (for the quokkas), the Pinnacles to the north and Margaret River to the south are the main draws. Western Australia is vast, with hundreds or thousands of kilometres between regions, mostly covered by air." +
      " UV is strong everywhere in Australia — sun protection is basic sense. Border checks on food, wood and plant and animal products are strict, so declare honestly; there are sometimes produce checks within WA too (for example heading north).",
    },
  },

  "mel-adl": {
    study: {
    "zh-CN":
      "墨尔本飞阿德莱德，是沿着澳大利亚南岸往西的一段短程航线。起飞后向西南到达海岸，右下方是维多利亚州的大洋路一带——海浪把石灰岩海崖侵蚀成一根根孤立的石柱，站在海里，这就是十二门徒岩。石柱会因为海蚀不断倒塌、也会有新的形成。" +
      "转向西，内陆出现那列孤立的砂岩山脊——格兰坪山（Gariwerd），陡壁和岩画。" +
      "再往西是墨累河的下游河段：这条澳大利亚最大的河在这里已经流了很远，在平原上绕出大弯，最后穿过一串潟湖（库容湖）注入南大洋，河口是一片沙洲和湿地。飞机越过墨累河口一带，沿海岸下降到阿德莱德——一座三面被丘陵和葡萄园环抱、朝向海湾的规划城市。",
    "en-US":
      "Melbourne to Adelaide is a short flight west along the southern coast of Australia. Heading south-west after take-off to the coast, below to the right is the Great Ocean Road area of Victoria — waves have eroded the limestone sea cliffs into a line of isolated stacks standing in the sea, the Twelve Apostles. The stacks keep collapsing to erosion, and new ones form." +
      " Turning west, the isolated line of sandstone ridges appears inland: the Grampians (Gariwerd), with their steep walls and rock art." +
      " Farther west is the lower Murray River: Australia's largest river has already run a long way by here, looping across the plain in big bends and finally passing through a chain of lagoons (the Coorong) into the Southern Ocean, its mouth a spread of sandbars and wetland. The plane crosses the Murray mouth area and descends along the coast to Adelaide — a planned city ringed on three sides by hills and vineyards and facing a gulf.",
    },
    // travel sources: 全四段（study/travel × 中英）: 十二门徒岩未写死数量、只写海蚀机制，与本库 terrain/twelve-apostles 一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "墨尔本到阿德莱德飞约一个多小时，阿德莱德比墨尔本晚半小时。阿德莱德生活节奏舒缓，被叫作“20分钟城市”。周边是澳大利亚重要的葡萄酒产区（巴罗萨谷、麦克拉伦谷、阿德莱德山）。" +
      "城里有中央市场、植物园、北阶文化区；往南是袋鼠岛（另安排两天，坐轮渡或小飞机），往东是墨累河与库容湖。" +
      "南半球季节相反，夏季（12–2月）干热、有热浪，注意补水防晒。入境和跨州对农产品有检查，如实申报。",
    "en-US":
      "Melbourne to Adelaide is a little over an hour, and Adelaide is half an hour behind Melbourne. Adelaide has an unhurried pace and is called a \"20-minute city\". Around it are important Australian wine regions (the Barossa Valley, McLaren Vale, the Adelaide Hills)." +
      " In the city there is the Central Market, the Botanic Garden and the North Terrace cultural precinct; south is Kangaroo Island (a separate two days, by ferry or light plane), and east are the Murray River and the Coorong lagoons." +
      " In the southern hemisphere the seasons are reversed; summer (December–February) is dry and hot with heatwaves, so drink plenty of water and use sun protection. There are produce checks on entry and between states — declare honestly.",
    },
  },


  "bne-drw": {
    study: {
    "zh-CN":
      "布里斯班飞达尔文，是从东海岸的亚热带城市，斜穿昆士兰的内陆，飞到大陆最北端的“顶端地区”。起飞后往西北，很快离开沿海的山地和农田，进入大自流盆地上方——这是澳大利亚最大的地下水盆地，地表是大片平坦的干旱牧场，靠钻井取深层地下水维持牧业，地面上能看到一个个圆形的蓄水池和放射状的畜道。" +
      "越往北越接近热带，草原上散布着白蚁丘和成片的桉树疏林。飞机掠过卡奔塔利亚湾一带，海岸线是大片红树林和潮滩。" +
      "接近达尔文时，右下方是卡卡杜——一大片季节性泛滥的湿地和石头高地。旱季是一条条干河道和水潭，湿季整片被水淹没；石壁上有数万年的原住民岩画。卡卡杜由传统所有者与国家公园共同管理。达尔文就在它西边的海岸上。",
    "en-US":
      "Brisbane to Darwin flies from a subtropical east-coast city diagonally across the Queensland interior to the \"Top End\" at the northern tip of the continent. Heading north-west after take-off, the route soon leaves the coastal hills and farmland and passes over the Great Artesian Basin — the largest groundwater basin in Australia, its surface flat, dry grazing country kept in use for stock by bores tapping deep groundwater, with round tanks and radiating stock tracks visible on the ground." +
      " The farther north, the more tropical: termite mounds and open eucalypt woodland dot the plains. The route clips the Gulf of Carpentaria area, its coast broad mangrove and tidal flats." +
      " Approaching Darwin, below to the right is Kakadu — a large area of seasonally flooded wetland and stone country. In the dry season it is strings of dry channels and pools; in the wet the whole area floods. There is Aboriginal rock art on the escarpments going back tens of thousands of years. Kakadu is jointly managed by its traditional owners and the national park. Darwin is on the coast just to its west.",
    },
    // travel sources: 全四段（study/travel × 中英）: 卡卡杜与本库一致；大自流盆地原写「世界最大之一」，按 Geoscience Australia 口径改为「澳大利亚最大」。核实 2026-09-11
    travel: {
    "zh-CN":
      "布里斯班到达尔文飞约四小时，达尔文比布里斯班晚半小时。达尔文在热带，全年炎热，分旱季（约5–10月，天气稳定、是旺季）和湿季（约11–4月，闷热、雷暴、可能有热带气旋）。" +
      "达尔文是进入卡卡杜、利奇菲尔德国家公园和阿纳姆地方向的门户。北领地的水域（河口、部分水潭）有咸水鳄，只在标示安全的地方下水、听从当地指示。" +
      "全年强防晒、多补水，湿季注意防蚊（有蚊媒疾病）。进国家公园按传统所有者和园方的规定，部分区域不能进入或不能拍照。",
    "en-US":
      "Brisbane to Darwin is about four hours, and Darwin is half an hour behind Brisbane. Darwin is in the tropics, hot all year, with a dry season (about May–October, settled weather, high season) and a wet season (about November–April, muggy, thunderstorms, possible tropical cyclones)." +
      " Darwin is the gateway to Kakadu, Litchfield National Park and the Arnhem Land direction. Waters in the Northern Territory (estuaries, some pools) have saltwater crocodiles — only enter the water where it is signed safe and follow local advice." +
      " Use strong sun protection and drink plenty of water year-round, and in the wet season guard against mosquitoes (there are mosquito-borne diseases). In the national parks follow the rules of the traditional owners and the park; some areas cannot be entered or photographed.",
    },
  },

  "mel-hba": {
    study: {
    "zh-CN":
      "墨尔本飞霍巴特，是越过巴斯海峡，到隔海的岛屿州塔斯马尼亚。起飞后向南到达维多利亚海岸，下面是巴斯海峡——把塔斯马尼亚和澳大利亚大陆分开的一片浅海，历史上曾是连接两地的陆桥，海面上有金岛、弗林德斯岛等散落的小岛。" +
      "很快看到塔斯马尼亚岛的北岸。这座岛地形起伏、森林茂密，中西部是几乎无路的荒野和高原湖泊，被列为世界自然遗产；纬度更高、气候凉湿，冬季山上有雪。岛上很多地方保留着温带雨林和古老的树种。" +
      "飞机沿岛的东侧南下，越过中部的山地，在德文特河口的霍巴特降落。霍巴特背靠威灵顿山（kunanyi），是澳大利亚第二古老的首府城市。",
    "en-US":
      "Melbourne to Hobart crosses Bass Strait to Tasmania, the island state across the water. Heading south after take-off to the Victorian coast, below is Bass Strait — a shallow sea separating Tasmania from the mainland that was once a land bridge between them, with scattered islands such as King Island and Flinders Island on it." +
      " The north coast of Tasmania soon comes into view. The island is hilly and densely forested, and its central-west is almost roadless wilderness and highland lakes, listed as a World Heritage Area; it is at a higher latitude, cool and wet, with snow on the mountains in winter. Temperate rainforest and ancient tree species survive in many places." +
      " The plane runs south down the eastern side of the island, crosses the central mountains, and lands at Hobart on the mouth of the Derwent. Hobart sits below Mount Wellington (kunanyi) and is the second-oldest capital city in Australia.",
    },
    // travel sources: 全四段（study/travel × 中英）: 霍巴特澳大利亚第二古老首府（1804）；巴斯陆桥；kunanyi / 威灵顿山双名。核实 2026-09-11
    travel: {
    "zh-CN":
      "墨尔本到霍巴特飞约一个多小时，同一时区。塔斯马尼亚纬度高、气候凉：夏季（12–2月）温和宜人，是旺季；冬季冷、山上有雪，昼夜和天气变化快，四季都要带保暖和防水衣物。" +
      "霍巴特的看点有萨拉曼卡集市（周六）、威灵顿山看城市与河口、MONA 美术馆（坐船去）。往北是酒杯湾、摇篮山，往南是塔斯曼半岛和亚瑟港历史遗址。" +
      "岛上自驾方便但距离比看地图远、路多弯，注意夜间和黄昏的野生动物。徒步进荒野区要看天气、留行程给管理部门。入境和从大陆过来对农产品有严格检查。",
    "en-US":
      "Melbourne to Hobart is a little over an hour, in the same time zone. Tasmania is at a higher latitude and cool: summers (December–February) are mild and pleasant and are high season; winters are cold with snow on the mountains, and the weather and the day-to-night range change fast, so bring warm and waterproof clothing in every season." +
      " Hobart's draws include the Salamanca Market (Saturdays), Mount Wellington for the view over the city and river mouth, and MONA (reached by boat). North are Wineglass Bay and Cradle Mountain; south are the Tasman Peninsula and the Port Arthur historic site." +
      " Driving on the island is easy but distances are longer than they look and roads are winding — watch for wildlife at dusk and at night. Hiking into the wilderness needs weather checks and leaving your plans with the authorities. Produce checks on entry and from the mainland are strict.",
    },
  },

  "syd-avv": {
    study: {
    "zh-CN":
      "悉尼飞阿瓦隆，落地的不是墨尔本市区机场，而是吉朗东北面的阿瓦隆机场——这条航线飞的其实是悉尼到吉朗、大洋路门户城市的路线，途中飞越的地形和悉尼—墨尔本航线大体相同。" +
      "起飞后向西南，右前方出现被深谷切开的砂岩台地，那是蓝山——尤加利林在阳光下泛蓝，大分水岭在悉尼背后隆起成这片高原。越过蓝山，沿大分水岭的走向继续往西南，山势不高但连续。" +
      "接近维多利亚境内，地面又抬高，出现一片带雪的高地——澳大利亚阿尔卑斯山脉，大分水岭在这里最高，主峰科修斯科山是澳大利亚大陆的最高点，冬季积雪、是少有的滑雪区。过了阿尔卑斯山脉，地势转为开阔的牧场和农田，飞机沿科里奥湾东岸下降，在阿瓦隆降落——湾对岸就是吉朗，往西南不远即是大洋路的起点。",
    "en-US":
      "Sydney to Avalon does not land at central Melbourne, but at Avalon Airport north-east of Geelong — this route effectively flies Sydney to Geelong, the gateway city to the Great Ocean Road, and crosses much the same terrain as the Sydney–Melbourne route." +
      " Heading south-west after take-off, a sandstone plateau cut by deep valleys appears ahead to the right: the Blue Mountains, their eucalypt forest hazed blue in the sun, part of the Great Dividing Range rising into a plateau behind Sydney. Past the Blue Mountains the route keeps following the Great Dividing Range south-west, the mountains not high but continuous." +
      " Approaching Victoria the land rises again into a snow-streaked upland: the Australian Alps, the highest part of the Great Dividing Range, whose main peak, Mount Kosciuszko, is the highest point on the Australian mainland, with snow in winter and one of the few skiing areas in Australia. Past the Alps the land opens into grazing country and farmland, and the plane descends along the eastern shore of Corio Bay to land at Avalon — Geelong sits across the bay, and the start of the Great Ocean Road is a short drive south-west.",
    },
    // travel sources: 全四段（study/travel × 中英）: 阿瓦隆机场距吉朗约 20 km；SkyBus 到墨尔本原写约 45 分钟，按运营方口径改为约 1–1.5 小时。核实 2026-09-11
    travel: {
    "zh-CN":
      "悉尼到阿瓦隆飞约一个半小时，两地同一时区。阿瓦隆机场在吉朗东北约20公里，靠机场大巴或网约车进城，没有直达火车；如果落地后想直接去墨尔本，机场大巴也能到，车程约1小时到1个半小时（视路况）。" +
      "吉朗本身值得留半天到一天：滨海步道、系船柱、国家羊毛博物馆；很多人把它当大洋路自驾的起点，从这里往西南到托尔坎正式上路，去十二门徒岩单程还要数小时。往东是贝拉林半岛的昆斯克利夫古镇和酒庄。" +
      "南半球季节相反，12–2月是夏天，可能有热浪；入境对食品和动植物制品检查严格，如实申报。",
    "en-US":
      "Sydney to Avalon is about an hour and a half, and the two cities are in the same time zone. Avalon Airport is about 20 km north-east of Geelong; getting into town needs the airport bus or a rideshare, as there is no direct train — the airport bus can also take you straight into Melbourne, about 60–90 minutes away depending on traffic." +
      " Geelong itself is worth half a day to a full day: the waterfront promenade, the Baywalk Bollards, the National Wool Museum. Many travellers use it as the starting point for the Great Ocean Road — Torquay, south-west of the city, is where the drive officially begins, with the Twelve Apostles still several hours further on. East is the Bellarine Peninsula, with the historic town of Queenscliff and its wineries." +
      " In the southern hemisphere the seasons are reversed — December to February is summer and can bring heatwaves. Border checks on food and plant and animal material are strict — declare honestly.",
    },
  },

  "can-syd": {
    // study sources: 全四段（study/travel × 中英）: 全程约 7500 km（两端机场大圆 7529 km；曾写 9000 km、后一度改 8200 km——8200 是绕经棉兰老/新几内亚的实飞航迹里程，而正文「全程约」读者会拿距离计算器复核，故统一到大圆值。抽样审计 seed=5 命中，2026-09-13）；原航点阿波山 2026-09-15 按发布门槛移除（英国外交部对棉兰老岛该区域有旅行建议），解说改为不点名的菲律宾群岛南部；玻璃屋山火山颈约 2500–2700 万年（昆士兰公园局，1 级）。核实 2026-09-11
    study: {
    "zh-CN":
      "广州飞悉尼，向东南跨过整个西太平洋，全程约七千五百公里，是中澳之间最繁忙的航线之一。起飞后不久便离开陆地进入南海——一片半封闭的边缘海，北部是宽阔的大陆架，中部下陷成四千多米深的海盆，海面上散布着成串的岛礁与浅滩；这一带终年高温，是台风频繁经过的海域，海面上常年可见密集的货轮航迹。继续南下，飞机越过菲律宾群岛南部，下方是岛屿、海峡与火山岛交错的海面。此后是漫长的越洋段：航线穿过赤道，越过印度尼西亚东部与新几内亚一带的岛链，下方大多是深蓝的开阔洋面，偶尔露出环礁一圈白亮的浪线和火山岛陡直的锥形轮廓。这一带正处在太平洋板块与澳大利亚板块碰撞的前沿，海底地形起伏剧烈，深海沟与海底山脉交替出现，岛上火山活动频繁。新几内亚岛中部横亘着一条东西走向的高大山脉，山脊超过四千米，终年留有零星积雪，两侧被浓密的热带雨林覆盖，云层往往从上午就开始堆积。夜航时这一程几乎看不到灯光，是全程最安静的一段。再往南进入珊瑚海，海底是一系列深达三四千米的盆地，西缘的大陆架上发育着世界上最大的堡礁系统；晴天从高空能看到浅水区特有的青绿色，礁体之间是颜色更深的水道。接近澳大利亚东岸时，玻璃屋山的一组火山颈从平地上突兀立起，那是两千多万年前的火山通道被侵蚀之后剩下的坚硬岩芯，周围较软的岩层早已被剥去。飞机沿海岸南下，降落在悉尼机场。",
    "en-US":
      "Guangzhou to Sydney runs south-east across the whole western Pacific, about 7,500 km in all, and is one of the busiest routes between China and Australia. Soon after take-off the flight leaves land over the South China Sea, a semi-enclosed marginal sea with a wide continental shelf in the north dropping to a basin more than four thousand metres deep in the middle, its surface broken by long chains of reefs and shoals; the water stays warm all year, typhoons cross it frequently, and the wakes of cargo ships are visible on it almost continuously. Continuing south the aircraft crosses the southern Philippine islands, a sea broken by islands, straits and volcanic islands. Then comes the long oceanic stretch: the route crosses the equator and the island chains of eastern Indonesia and New Guinea, with mostly deep blue open water below and only the occasional bright rim of surf around an atoll or the steep cone of a volcanic island. This is the front line where the Pacific and Australian plates collide, so the sea floor is violently uneven, deep trenches alternating with submarine ranges, and volcanic activity on the islands is frequent. Down the middle of New Guinea runs a high east-west range whose ridges pass four thousand metres and hold patches of snow year round, flanked by dense rainforest with cloud that often starts building by mid-morning. On a night flight almost no lights appear along this stretch, the quietest part of the journey. Farther south comes the Coral Sea, floored by a series of basins three to four thousand metres deep, with the largest barrier reef system in the world built up on the shelf along its western edge; on a clear day the distinctive green of the shallows is visible from altitude, cut by darker channels between the reefs. Approaching the Australian east coast, the volcanic plugs of the Glass House Mountains rise abruptly from flat ground — the hard cores of vents left standing after more than twenty million years stripped the softer rock from around them. The flight then runs south along the coast and lands at Sydney Airport.",
    },
    travel: {
    "zh-CN":
      "广州到悉尼约10小时，时差2-3小时（澳大利亚东部实行夏令时，10月至次年4月与北京时差3小时，其余时间2小时）。悉尼四季与北半球相反，12-2月为夏季，6-8月为冬季，出行前请按当地季节备衣物。" +
      "悉尼机场距市中心约8公里，机场火车线（Airport Link）约13分钟直达市中心。歌剧院、海港大桥、邦迪海滩是市内三大代表性景点，公共交通推荐使用Opal交通卡。" +
      "中国公民赴澳大利亚须提前在线申请电子签证（600类旅游签证等），具体材料与审批时长以澳大利亚内政部最新公布为准，建议预留至少数周办理时间。",
    "en-US":
      "Guangzhou to Sydney takes about 10 hours, with a 2-3 hour time difference (eastern Australia observes daylight saving, giving a 3-hour gap from Beijing between October and April, and 2 hours the rest of the year). Sydney's seasons run opposite the northern hemisphere — summer is December to February, winter June to August — so pack accordingly." +
      " Sydney Airport is about 8 km from the city centre; the Airport Link train takes about 13 minutes into town. The Opera House, the Harbour Bridge and Bondi Beach are the city's three signature sights, and the Opal card is the standard way to pay for public transport." +
      " Chinese citizens must apply online for a visa (such as the Subclass 600 tourist visa) before travelling to Australia; check Australia's Department of Home Affairs for the latest requirements and processing times, and allow at least a few weeks to arrange one.",
    },
  },
};
