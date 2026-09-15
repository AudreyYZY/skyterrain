import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "scl-cjc": {
    study: {
    "zh-CN":
      "圣地亚哥飞卡拉马，是智利境内一条典型的南北纵向航线，沿途正好穿越智利中部与北部截然不同的两种气候带。飞机从中央谷地北段起飞，脚下先是方格状的农田与葡萄园，两侧被海岸山脉与安第斯山脉夹峙——这正是智利“三段式”地貌骨架的典型样子。" +
      "往北飞行约一个多小时后，绿色逐渐消失，地表转为大片赭红色的荒漠——这就是阿塔卡马沙漠，地球上除极地干燥谷地外最干旱的地区。它的极端干旱由两个因素叠加造成：东侧安第斯山脉挡住了来自亚马逊的湿润气流，形成雨影；西侧沿岸寒冷的洪堡洋流又抑制了海面蒸发。两种效应叠加，使这里部分气象站数十年都没有有效降水记录。" +
      "飞机最终降落在卡拉马——一座因毗邻丘基卡马塔铜矿而发展起来的矿业城市，也是通往圣佩德罗德阿塔卡马、月亮谷、塔蒂奥间歇泉等阿塔卡马腹地景观的主要空中门户。从翠绿农田到赤色荒漠，这条航线浓缩了智利地貌最鲜明的一次转折。",
    "en-US":
      "Santiago to Calama is one of the classic north–south routes within Chile, crossing two starkly different climate zones along the way. The flight departs from the northern Central Valley, with a checkerboard of farmland and vineyards below, hemmed in by the Coastal Range and the Andes — the textbook picture of Chile's three-part landscape structure." +
      " About an hour north, the green gives way to vast expanses of reddish-brown desert — the Atacama, one of the driest places on Earth outside polar desert valleys. Its extreme aridity comes from two compounding effects: the Andes to the east block moist air from the Amazon, producing a rain shadow, while the cold Humboldt Current offshore suppresses evaporation from the sea. Together they leave some weather stations here with no measurable rainfall for decades." +
      " The flight lands in Calama, a mining city that grew up beside the Chuquicamata copper mine and now serves as the main air gateway to San Pedro de Atacama, Valle de la Luna, and the El Tatio geysers. From green farmland to red desert, this route condenses one of Chile's sharpest landscape transitions into a single flight.",
    },
    // travel sources: 全四段（study/travel × 中英）: 阿塔卡马极端干旱成因（雨影 + 洪堡寒流）；丘基卡马塔铜矿。核实 2026-09-11
    travel: {
    "zh-CN":
      "圣地亚哥到卡拉马约2小时10分钟，智利南美航空执飞。卡拉马埃尔洛阿机场是前往圣佩德罗德阿塔卡马的主要中转站，机场有出租车与酒店接驳车，转陆路约1.5小时可达。" +
      "阿塔卡马地区海拔较高、气候极度干燥，紫外线强烈，建议随身携带防晒霜、墨镜与保暖衣物应对昼夜温差；月亮谷、塔蒂奥间歇泉等景点均需报名当地旅行团或包车前往。",
    "en-US":
      "Santiago to Calama takes about 2 hours 10 minutes on LATAM Airlines Chile. Calama's El Loa Airport is the main transfer point for San Pedro de Atacama, with taxis and hotel shuttles available and about a 1.5-hour drive overland." +
      " The Atacama region sits at higher elevation with an extremely dry climate and intense UV exposure — pack sunscreen, sunglasses, and warm layers for the temperature swing between day and night; sights like Valle de la Luna and the El Tatio geysers require a local tour or private transfer.",
    },
  },
  "scl-anf": {
    study: {
    "zh-CN":
      "圣地亚哥飞安托法加斯塔，同样是一条向北穿越阿塔卡马沙漠的航线，但终点直接落在太平洋沿岸。飞机离开中央谷地后不久，地表便被一望无际的荒漠取代，直到降落前才重新看到海岸线与蔚蓝的太平洋。" +
      "安托法加斯塔是智利北部最大的港口城市，铜矿出口是当地经济支柱，城市历史上一度属于玻利维亚。飞机降落前，舷窗下方常能看到拉波塔达海蚀拱——一处高约43米的天然岩拱，由太平洋海浪长期侵蚀第三纪沉积岩层形成，是阿塔卡马沙漠直抵海洋这一“沙漠—海岸”交界地貌的代表性景观。" +
      "这条航线展示了阿塔卡马沙漠西端另一种收尾方式：不是像卡拉马那样深入内陆矿业城市，而是径直扑向太平洋，让荒漠与海洋在一条海岸线上直接相遇。",
    "en-US":
      "Santiago to Antofagasta likewise flies north across the Atacama Desert, but ends right on the Pacific coast. Not long after leaving the Central Valley, the ground below gives way to unbroken desert, with the coastline and blue Pacific only reappearing shortly before landing." +
      " Antofagasta is northern Chile's largest port city, with copper exports as the backbone of its economy; the city was historically part of Bolivia. Just before touchdown, passengers can often spot La Portada from the window — a sea arch about 43 m high, carved from Tertiary sedimentary rock by long-term wave erosion, a representative landmark of the boundary where the Atacama Desert meets the ocean directly." +
      " This route shows a different ending for the Atacama's western edge: rather than reaching an inland mining city like Calama, it heads straight for the Pacific, letting desert and ocean meet directly along a single coastline.",
    },
    // travel sources: 全四段（study/travel × 中英）: 拉波塔达海蚀拱约 43 m；安托法加斯塔 1879 年前属玻利维亚为史实、无评价。核实 2026-09-11
    travel: {
    "zh-CN":
      "圣地亚哥到安托法加斯塔约2小时，智利南美航空执飞。安德烈斯·萨贝利亚机场（旧称塞罗莫雷诺）距市区约22公里，出租车约20多分钟到市中心。" +
      "当地气候极度干燥、几乎全年无雨，紫外线强烈，需做好防晒；拉波塔达海蚀拱是市郊的标志性自然景点，可包车或参加当地半日游前往。",
    "en-US":
      "Santiago to Antofagasta takes about 2 hours on LATAM Airlines Chile. Andrés Sabella Airport (formerly Cerro Moreno) is about 22 km from downtown, with a taxi ride of just over 20 minutes to the city center." +
      " The local climate is extremely dry with almost no rain year-round and strong UV exposure, so sun protection is essential; La Portada is the signature natural sight on the city's outskirts, reachable by private transfer or a local half-day tour.",
    },
  },
  "scl-lsc": {
    study: {
    "zh-CN":
      "圣地亚哥飞拉塞雷纳，是一条飞越智利“小北区”科金博大区的短程航线。离开中央谷地后，飞机沿着逐渐干燥的海岸带向北，右侧舷窗下方能看到埃尔基河切开安第斯山麓形成的狭长绿洲——埃尔基谷，谷底层叠的葡萄园与皮斯科酒庄在干燥棕黄色山地中格外醒目。" +
      "埃尔基谷因海拔适中、空气洁净、几乎全年无云，是全球公认的观星胜地，谷地上游建有托洛洛山美洲天文台等多座国际天文台。飞机随后沿海岸线下降，降落在智利第二古老的城市拉塞雷纳，这座城市保留着智利少见的大规模西班牙殖民风格建筑群。" +
      "这条航线是智利“干旱北部”向“地中海式中部”过渡的缩影——从这里再往北，降水会越来越稀少，直至进入阿塔卡马沙漠的核心地带。",
    "en-US":
      "Santiago to La Serena is a short flight across Chile's Norte Chico — the Coquimbo Region. After leaving the Central Valley, the plane heads north along an increasingly dry coastal belt; below on the right, Elqui Valley comes into view — a narrow oasis carved by the Elqui River through the Andean foothills, its terraced vineyards and pisco distilleries standing out sharply against the dry, tan-colored mountains." +
      " Because of its moderate elevation, clean air, and near-total lack of cloud cover, Elqui Valley is a globally recognized stargazing destination, with several international observatories including Cerro Tololo Inter-American Observatory built upstream. The flight then descends along the coast to land at La Serena, Chile's second-oldest city, which preserves an unusually large collection of Spanish colonial architecture." +
      " This route is a snapshot of Chile's transition from an arid north to a Mediterranean-climate center — heading north from here, rainfall grows scarcer and scarcer until the heart of the Atacama Desert.",
    },
    // travel sources: 全四段（study/travel × 中英）: 拉塞雷纳 1544 年建城、智利第二古老城市；埃尔基谷、托洛洛山天文台。核实 2026-09-11
    travel: {
    "zh-CN":
      "圣地亚哥到拉塞雷纳约1小时10分钟，智利南美航空执飞。拉弗洛里达机场距市区约5公里，出租车很快可到市中心。" +
      "拉塞雷纳本身有绵延的海滩与殖民风格老城区，若想探访埃尔基谷或预约天文台观星，建议报名当地旅行团或自驾，天文台参观多需提前预约。",
    "en-US":
      "Santiago to La Serena takes about 1 hour 10 minutes on LATAM Airlines Chile. La Florida Airport is about 5 km from downtown, a short taxi ride to the city center." +
      " La Serena itself has long stretches of beach and a colonial-era old town; to visit Elqui Valley or book an observatory stargazing session, a local tour or rental car is recommended, and most observatories require advance reservations.",
    },
  },
  "scl-ccp": {
    study: {
    "zh-CN":
      "圣地亚哥飞康塞普西翁，向南穿越智利中央谷地最富庶的一段。舷窗下方的智利中央谷地是整齐的方格状农田与成片的葡萄园，两侧分别是低矮的海岸山脉与终年积雪的安第斯山脉，这是理解智利“海岸山脉—中央谷地—安第斯山脉”三段式地貌骨架的经典剖面。" +
      "越往南飞，田野逐渐被更为潮湿的绿色植被取代，降水也明显增多——这是地中海式气候向温带海洋性气候过渡的信号。飞机降落在比奥比奥河河口附近的康塞普西翁，这里是智利最大的都会区之一，也是重要的工业与港口城市。2010年智利大地震及随后引发的海啸曾对这一带造成严重影响，此后完成了大规模重建。" +
      "这条航线展示了中央谷地由北向南逐渐“变绿变湿”的渐变过程，也把乘客带到智利多雨地带的门户。",
    "en-US":
      "Santiago to Concepción heads south across the richest stretch of Chile's Central Valley. Below, the Chilean Central Valley is a neat grid of farmland and vineyards, flanked by the low Coastal Range on one side and the permanently snow-capped Andes on the other — a classic cross-section of Chile's three-part landscape structure." +
      " Further south, the fields give way to greener, more humid vegetation as rainfall increases noticeably — a sign of the transition from Mediterranean to temperate maritime climate. The flight lands at Concepción, near the mouth of the Biobío River, one of Chile's largest metro areas and an important industrial and port city. The 2010 Chilean earthquake and the tsunami it triggered caused severe damage here, followed by extensive rebuilding." +
      " This route traces the Central Valley's gradual shift from dry to green and wet moving south, delivering passengers to the doorstep of Chile's rainier belt.",
    },
    // travel sources: 全四段（study/travel × 中英）: 大康塞普西翁为智利第二大都会区；2010 年大地震为已了结的自然灾害史。核实 2026-09-11
    travel: {
    "zh-CN":
      "圣地亚哥到康塞普西翁约55分钟，智利南美航空执飞。卡列尔苏尔机场距市区约15公里，有公交与出租车往返市区。" +
      "康塞普西翁是重要的大学城，比奥比奥大学校园及周边是年轻人聚集的活力街区；当地冬季多雨，出行建议携带雨具，沿海区域入住时可留意酒店的海啸疏散指示。",
    "en-US":
      "Santiago to Concepción takes about 55 minutes on LATAM Airlines Chile. Carriel Sur Airport is about 15 km from downtown, with buses and taxis into the city." +
      " Concepción is an important university city, with the University of Concepción campus and surrounding streets forming a lively student district; winters here are rainy, so pack rain gear, and it's worth noting hotel tsunami-evacuation signage in coastal areas.",
    },
  },
  "scl-zco": {
    study: {
    "zh-CN":
      "圣地亚哥飞特木科，是一条从中央谷地一路飞入智利南部湖区北缘的航线。起飞后，舷窗下方先是熟悉的方格状农田，随着航程推进，田野间开始出现连绵的低矮森林与散布的湖泊——这是湖区特有的地貌开始显现。" +
      "临近降落前，飞机会靠近利亚伊马火山——智利中南部海拔最高、喷发最频繁的活火山之一，历史记载喷发约50次。它由两个叠合的火山锥组成，山顶常年积雪，山麓保存着智利“活化石”南洋杉的原始林。" +
      "飞机最终降落在特木科，这是通往维亚里卡火山、普孔等湖区热门目的地的门户城市，也是智利马普切原住民文化最集中的城市之一。这条航线让乘客在一次飞行里，从中央谷地的农业景观直接过渡到湖区特有的“火山—森林—湖泊”组合地貌。",
    "en-US":
      "Santiago to Temuco flies from the Central Valley into the northern edge of Chile's southern Lake District. After takeoff the familiar grid of farmland lies below; as the flight continues, patches of low forest and scattered lakes begin to appear — the Lake District's distinctive landscape coming into view." +
      " Shortly before landing, the flight passes near Llaima Volcano, one of south-central Chile's highest and most frequently erupting active volcanoes, with about 50 recorded eruptions historically. Built from two overlapping cones, its summit stays permanently snow-capped, with old-growth araucaria forest — sometimes called a 'living fossil' — preserved at its base." +
      " The flight lands at Temuco, the gateway city to Villarrica Volcano, Pucón, and other Lake District highlights, and one of the cities with the largest concentration of Mapuche Indigenous culture in Chile. In a single flight, passengers move from the Central Valley's farmland straight into the Lake District's signature combination of volcano, forest, and lake.",
    },
    // travel sources: 全四段（study/travel × 中英）: 利亚伊马喷发约 50 次与本库 terrain/llaima-volcano 一致（#264 前已修）；特木科马普切文化只写事实。核实 2026-09-11
    travel: {
    "zh-CN":
      "圣地亚哥到特木科约1小时25分钟，智利南美航空执飞。拉阿劳卡尼亚机场距市区约6公里，有出租车与公交往返市区。" +
      "特木科本身是湖区门户城市，多数游客会在此换乘长途大巴或包车前往普孔、维亚里卡等热门小镇（车程约1小时）；埃斯特角农贸集市是体验马普切传统手工艺的重要窗口。",
    "en-US":
      "Santiago to Temuco takes about 1 hour 25 minutes on LATAM Airlines Chile. La Araucanía Airport is about 6 km from downtown, with taxis and buses into the city." +
      " Temuco itself is the Lake District's gateway city, and most visitors transfer here by long-distance bus or private transfer to reach popular towns like Pucón and Villarrica (about an hour's drive); the Feria Pinto market is an important place to experience Mapuche traditional crafts.",
    },
  },
  "scl-pmc": {
    study: {
    "zh-CN":
      "圣地亚哥飞普埃托蒙特，是智利南部最经典的湖区航线之一，也是通往巴塔哥尼亚的传统门户。飞机离开中央谷地后一路向南，田野逐渐被湖泊与森林取代，湿润程度明显增加。" +
      "临近降落时，舷窗下方会出现奥索尔诺火山——一座形态极为对称的成层火山，因外形酷似日本富士山常被称作“智利富士山”，矗立在延基韦湖与托多斯洛斯桑托斯湖之间。19世纪起，这一带吸引了大批德国移民定居，普埃托瓦拉斯等湖畔小镇至今保留着浓厚的德式建筑风格。" +
      "飞机最终降落在普埃托蒙特——智利南部通往巴塔哥尼亚与奇洛埃群岛的主要海空交通枢纽，也是重要的三文鱼养殖产业中心。这条航线浓缩了智利从“干燥中部”到“多雨南部”的完整过渡。",
    "en-US":
      "Santiago to Puerto Montt is one of southern Chile's classic Lake District routes and the traditional gateway to Patagonia. After leaving the Central Valley, the flight heads steadily south as farmland gives way to lakes and forest, with humidity rising noticeably along the way." +
      " Just before landing, Osorno Volcano comes into view — an exceptionally symmetrical stratovolcano often called 'Chile's Mount Fuji' for its resemblance to Japan's iconic peak, standing between Lake Llanquihue and Lake Todos los Santos. Beginning in the 19th century, this area drew large numbers of German immigrants, and lakeside towns such as Puerto Varas still retain a strong German architectural character today." +
      " The flight lands at Puerto Montt, the main sea-and-air gateway from southern Chile to Patagonia and the Chiloé Archipelago, and an important center of the salmon-farming industry. This route condenses Chile's full transition from a dry center to a rainy south into a single flight.",
    },
    // travel sources: 全四段（study/travel × 中英）: 奥索尔诺火山对称锥形；「普恩塔斯港」为误译，已统一为「普埃托瓦拉斯」；湖名「延基韦湖 / 托多斯洛斯桑托斯湖」译名待查，已开 issue。核实 2026-09-11
    travel: {
    "zh-CN":
      "圣地亚哥到普埃托蒙特约1小时45分钟，智利南美航空执飞。埃尔特帕尔机场距市区约16公里，有出租车与酒店接驳车往返市区。" +
      "普埃托蒙特是探访湖区南段（普埃托瓦拉斯、奥索尔诺）与奇洛埃群岛的重要基地，安赫尔莫渔人码头的海鲜市场是体验当地饮食文化的核心场所；当地全年降水较多，建议随身携带雨具。",
    "en-US":
      "Santiago to Puerto Montt takes about 1 hour 45 minutes on LATAM Airlines Chile. El Tepual Airport is about 16 km from downtown, with taxis and hotel shuttles into the city." +
      " Puerto Montt is an important base for exploring the southern Lake District (Puerto Varas, Osorno) and the Chiloé Archipelago; the seafood market at the Angelmó wharf is the best place to experience local food culture. Rainfall is heavy year-round, so pack rain gear.",
    },
  },
  "scl-puq": {
    study: {
    "zh-CN":
      "圣地亚哥飞蓬塔阿雷纳斯，是一条纵贯智利南北的长途国内航线，全程约3.5小时，一路飞越智利最荒凉、最少人烟的巴塔哥尼亚地带。飞机离开湖区后，森林与湖泊逐渐被开阔的荒野取代，地貌变得越来越破碎复杂。" +
      "航程后段，舷窗下方会出现南巴塔哥尼亚冰原——南半球除南极洲外最大的连续冰体，边缘裂开无数冰川舌，其中智利一侧的皮奥十一冰川宽阔壮观。飞机随后掠过智利峡湾——冰川深度侵蚀海岸线后、海水倒灌形成的复杂峡湾与水道群，陡峭的山壁直插海面，是世界上最复杂的峡湾海岸之一。" +
      "临近降落时，飞机沿麦哲伦海峡北岸下降——这条全长约570公里的天然海峡因葡萄牙航海家麦哲伦1520年经此完成人类首次环球航行的关键航段而得名。飞机最终降落在蓬塔阿雷纳斯，世界最靠南的重要城市之一，也是前往百内国家公园、火地岛与南极的主要门户。",
    "en-US":
      "Santiago to Punta Arenas is a long north–south domestic route in Chile, taking about 3.5 hours across the country's most remote and sparsely populated stretch of Patagonia. Beyond the Lake District, forest and lake give way to open wilderness, and the landscape below grows increasingly fragmented and complex." +
      " Later in the flight, the Southern Patagonian Ice Field comes into view — the largest continuous body of ice in the Southern Hemisphere outside Antarctica, its edges splitting into countless glacial tongues, with Pío XI Glacier broad and dramatic on the Chilean side. The flight then passes over the Chilean Fjords — a maze of fjords and channels formed as glaciers deeply carved the coastline and the sea flooded in, with steep cliffs plunging straight into the water, one of the most complex fjord coastlines in the world." +
      " Approaching landing, the flight descends along the northern shore of the Strait of Magellan — a roughly 570 km natural passage named for Portuguese navigator Ferdinand Magellan, whose expedition passed through it in 1520 during humanity's first circumnavigation of the globe. The flight lands at Punta Arenas, one of the world's most important far-southern cities and the main gateway to Torres del Paine National Park, Tierra del Fuego, and Antarctica.",
    },
    // travel sources: 全四段（study/travel × 中英）: 麦哲伦海峡约 570 km；1520 年「关键航段」措辞谨慎（环球由埃尔卡诺 1522 年完成）；南巴塔哥尼亚冰原。核实 2026-09-11
    travel: {
    "zh-CN":
      "圣地亚哥到蓬塔阿雷纳斯约3小时35分钟，智利南美航空执飞，是智利国内最长的航线之一。卡洛斯·伊瓦涅斯·德尔坎波总统机场距市区约20公里，有出租车与巴士往返市区。" +
      "蓬塔阿雷纳斯是前往百内国家公园（经普埃托纳塔莱斯转乘，车程约3小时）的主要门户，全年风力强劲，即使夏季也建议携带厚外套；前往南极的邮轮多从这里出发，旺季船票需提前数月预订。",
    "en-US":
      "Santiago to Punta Arenas takes about 3 hours 35 minutes on LATAM Airlines Chile, one of the longest domestic routes in Chile. Presidente Carlos Ibáñez del Campo Airport is about 20 km from downtown, with taxis and buses into the city." +
      " Punta Arenas is the main gateway to Torres del Paine National Park (via a roughly 3-hour transfer through Puerto Natales), with strong winds year-round — pack a heavy jacket even in summer; most Antarctic cruises depart from here, and tickets should be booked months ahead during peak season.",
    },
  },
  "scl-ipc": {
    study: {
    "zh-CN":
      "圣地亚哥飞复活节岛，是智利国内航线中最特殊的一条：全程约5小时35分钟，绝大部分航程都飞越空无一物的南太平洋，是世界上最孤立的定期航班航线之一。飞机离开南美大陆海岸线后，脚下便只剩下一望无际的蓝色海洋，直到航程末段才重新看到陆地。这一段飞越的是南太平洋东部：海底是纳斯卡板块，东侧的东太平洋海隆是全球扩张最快的洋中脊之一，海面之下散布着一列列由地幔热点造出的海山，绝大多数从未露出水面。洋面上常年吹东南信风，云带一条条平行排开，航路上数千公里内没有任何陆地或岛屿可供备降。" +
      "复活节岛距智利大陆约3700公里，是一座由三座盾状火山拼合而成的三角形火山岛，因这种极端的地理孤立，演化出了独一无二的玻里尼西亚文化——约公元1200至1250年间，玻里尼西亚人抵达并定居此岛，逐步发展出雕刻近900尊摩艾石像的独特传统。飞机降落前，舷窗下方能看到拉诺拉拉库火山口，这是绝大多数摩艾石像的采石场，至今仍有数百尊未完成的石像散落其中。" +
      "飞机最终降落在汉加罗阿——全岛唯一的城镇，也是探访这座“世界最孤立岛屿”的唯一基地。这条航线本身就是复活节岛极端孤立性的最好证明：从大陆最近的机场出发，也需要飞越大半个太平洋。",
    "en-US":
      "Santiago to Easter Island is the most unusual domestic route in Chile: the roughly 5-hour-35-minute flight spends most of its time over open South Pacific water, making it one of the most isolated scheduled air routes in the world. After leaving the South American coastline, nothing but blue ocean remains below until land reappears near the end of the flight. This stretch crosses the eastern South Pacific: the sea floor here is the Nazca Plate, and the East Pacific Rise along its eastern side is one of the fastest-spreading mid-ocean ridges on Earth, with chains of seamounts built by mantle hotspots below the surface, most of which never break it. The south-east trade winds blow across it year round, drawing cloud out into parallel bands, and for thousands of kilometres along the track there is no land or island to divert to." +
      " Easter Island lies about 3,700 km from mainland Chile, a triangular volcanic island formed from three merged shield volcanoes. This extreme geographic isolation gave rise to a unique Polynesian culture — Polynesians arrived and settled the island around 1200–1250 CE, gradually developing the distinctive tradition of carving nearly 900 moai statues. Just before landing, Rano Raraku crater comes into view from the window, the quarry where most of the moai were carved, still scattered with hundreds of unfinished statues today." +
      " The flight lands at Hanga Roa, the island's only town and the sole base for exploring the world's most isolated inhabited island. The route itself is the best proof of that isolation: even from the nearest mainland airport, reaching the island means crossing most of the Pacific.",
    },
    // travel sources: 全四段（study/travel × 中英）: 复活节岛距大陆约 3700 km（大圆约 3752 km）、摩艾近 900 尊、定居约 1200–1250 年，均与本库 terrain/easter-island 一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "圣地亚哥到复活节岛约5小时35分钟，智利南美航空执飞，是全球最孤立的航线之一。马塔维里机场就在汉加罗阿镇边缘，是全岛唯一的机场。" +
      "岛上物资依赖空运，物价普遍高于智利大陆，建议提前预订住宿与门票（拉帕努伊国家公园门票需在机场或岛上指定地点购买）；岛上无公共交通，租车或报名当地旅行团是探访分散遗址的主要方式，摩艾石像严禁攀爬或触摸。",
    "en-US":
      "Santiago to Easter Island takes about 5 hours 35 minutes on LATAM Airlines Chile, one of the most isolated air routes in the world. Mataveri Airport sits right at the edge of Hanga Roa town, the island's only airport." +
      " Since supplies are flown in, prices are generally higher than on mainland Chile, so book accommodation and tickets ahead (Rapa Nui National Park entry tickets must be purchased at the airport or designated points on the island); there's no public transit on the island, so renting a car or joining a local tour is the main way to reach the scattered archaeological sites, and climbing or touching the moai is strictly forbidden.",
    },
  },
};
