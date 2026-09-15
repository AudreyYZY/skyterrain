import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "osl-bgo": {
    study: {
    "zh-CN":
      "奥斯陆飞卑尔根，是挪威最繁忙的国内航线，把东部的首都和西部峡湾区连起来，同时也是这条铁路（卑尔根铁路）走的路线。起飞后先越过东部的森林和农田，然后地面骤然抬升，进入哈当厄高原——欧洲最大的高山高原之一，平均海拔超过 1100 米，几乎没有树、只有苔原、湖泊和驯鹿，冬季常年积雪。" +
      "翻过高原西缘，地面陷成一条深深的峡湾——哈当厄峡湾，挪威第二长的峡湾，两岸是果园和瀑布，峡湾深处能看到佛尔格冰帽的白色边缘。" +
      "越过最后一道山地，卑尔根出现在七座山环抱的一个小海湾里，背后就是通往外海的峡湾口。",
    "en-US":
      "Oslo to Bergen is Norway's busiest domestic route, linking the eastern capital with the western fjord region, and follows much the same line as the Bergen Railway. After take-off you cross the eastern forests and farmland, then the ground rises sharply into the Hardangervidda — one of the largest high mountain plateaus in Europe, averaging over 1,100 m, almost treeless, just tundra, lakes and reindeer, snow-covered most of the year." +
      " Over the western edge of the plateau the land drops into a deep fjord, the Hardangerfjord — Norway's second-longest — its shores lined with orchards and waterfalls, and the white edge of the Folgefonna ice cap visible deep in the fjord." +
      " Over one last stretch of mountains, Bergen appears in a small bay ringed by seven mountains, with the fjord mouth to the open sea behind it.",
    },
    // travel sources: 全四段（study/travel × 中英）: 哈当厄高原约 1100 m、约 6500 km²「欧洲最大高山高原之一」；哈当厄峡湾挪威第二长，与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "奥斯陆到卑尔根飞约 55 分钟，同一时区。也可以坐卑尔根铁路（约 6.5 小时，世界知名的风景线，经米达尔可换弗洛姆铁路），很多人飞去坐火车回、或反过来。" +
      "奥斯陆四季分明、冬雪不算极端；卑尔根非常多雨，一年约 240 天下雨，随身带防水外套。" +
      "卑尔根常作为峡湾游轮和西海岸自驾的起点，往 Hardangerfjord 方向可顺路看瀑布和果园。挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Oslo to Bergen is about 55 minutes, in the same time zone. You can also take the Bergen Railway (about 6.5 hours, a world-famous scenic line, with a change at Myrdal for the Flåm Railway) — many people fly one way and take the train the other." +
      " Oslo has four clear seasons with not-extreme winter snow; Bergen is very wet, with about 240 rainy days a year — carry a waterproof jacket." +
      " Bergen is often the starting point for fjord cruises and west-coast road trips, and the Hardangerfjord road passes waterfalls and orchards. Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "osl-trd": {
    study: {
    "zh-CN":
      "奥斯陆飞特隆赫姆，沿着挪威中部一条历史悠久的南北通道飞行，古德布兰河谷铁路和 E6 公路都走这条线。起飞后先经过姆约萨湖——挪威最大的湖，然后进入古德布兰河谷：一条沿地质断裂带发育的狭长大河谷，两侧是农庄和森林。" +
      "河谷东侧能看到龙达讷——一片浑圆的古老山峰群，是挪威最早的国家公园之一。继续北飞，河谷收窄、抬升，最终没入多夫勒山：一片开阔的高山高原，麝牛就生活在这里（1930年代从格陵兰引入，是欧洲大陆仅存的野生麝牛种群之一）。" +
      "翻过多夫勒山，地面下降进入特伦德拉格的低地，特隆赫姆就在尼德河汇入特隆赫姆峡湾处。",
    "en-US":
      "Oslo to Trondheim flies along a historic north–south corridor through central Norway, the same line followed by the Gudbrandsdalen railway and the E6 road. After take-off you pass Mjøsa, Norway's largest lake, then enter Gudbrandsdalen: a long, narrow valley along a geological fault, farms and forest on either side." +
      " To the east of the valley is Rondane — a cluster of rounded old peaks, one of Norway's first national parks. Flying on north, the valley narrows and rises, finally merging into Dovrefjell: an open high mountain plateau, home to musk oxen (introduced from Greenland in the 1930s, one of the last wild populations on mainland Europe)." +
      " Over Dovrefjell the land drops into the Trøndelag lowlands, and Trondheim is where the Nidelva meets the Trondheimsfjord.",
    },
    // travel sources: 全四段（study/travel × 中英）: 米约萨湖挪威最大、隆达讷 1962 年国家公园；多夫勒山麝牛原写「19 世纪末引入」，按本库改为 1930 年代。核实 2026-09-11
    travel: {
    "zh-CN":
      "奥斯陆到特隆赫姆飞约 55 分钟，同一时区。也可坐多夫勒线火车（约 7 小时，沿途正是这条航线看到的河谷和高原）。" +
      "特隆赫姆比奥斯陆偏北，但受峡湾调节，冬夏都不算极端。以特隆赫姆为基地可继续坐诺尔兰线火车北上博德、跨北极圈。" +
      "多夫勒山一带看到麝牛要保持距离（它们体型大、可能有攻击性），别靠近拍照。挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Oslo to Trondheim is about 55 minutes, in the same time zone. You can also take the Dovre Line train (about 7 hours, through exactly the valleys and plateau seen from the air)." +
      " Trondheim is further north than Oslo but moderated by the fjord, so neither winter nor summer is extreme. From Trondheim you can continue north on the Nordland Line train to Bodø, crossing the Arctic Circle." +
      " If you see musk oxen around Dovrefjell, keep your distance — they are large and can be aggressive, so don't approach for photos. Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "osl-svg": {
    study: {
    "zh-CN":
      "奥斯陆飞斯塔万格，从首都飞到石油之都，也是一条穿山又贴海的线。起飞后先越过东部低地，然后进入哈当厄高原的南缘——同一片高山高原，这里更靠近它的南端。" +
      "接近终点，地面出现吕瑟峡湾——一条又窄又直的峡湾，两侧是近乎垂直的花岗岩壁，峡湾上方悬着两块著名的岩石：一块是几乎水平的巨型岩台“布道石”，另一块是卡在裂缝里的巨石“奇迹石”。" +
      "斯塔万格就在峡湾外侧、一片被岛屿和浅海包围的半岛上，城外是南部典型的低缓耶伦农业平原。",
    "en-US":
      "Oslo to Stavanger flies from the capital to the oil capital, a route that crosses mountains and hugs the coast. After take-off you cross the eastern lowlands, then the southern edge of the Hardangervidda — the same high plateau, here nearer its southern end." +
      " Near the end, the Lysefjord appears below — a narrow, straight fjord with near-vertical granite walls, above which hang two famous rocks: the almost-horizontal ledge known as Preikestolen (Pulpit Rock), and Kjeragbolten, a boulder wedged in a crack." +
      " Stavanger sits outside the fjord, on a peninsula surrounded by islands and shallow sea, with the low, flat farmland of Jæren beyond the city.",
    },
    // travel sources: 全四段（study/travel × 中英）: 吕瑟峡湾布道石 / 奇迹石与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "奥斯陆到斯塔万格飞约 50 分钟，同一时区。也可坐南部线火车（约 8 小时，绕得较远）。" +
      "斯塔万格是石油产业中心，物价和薪资在挪威也偏高。到斯塔万格后坐船去吕瑟峡湾徒步布道石很受欢迎，旺季一早出发人少一些，注意鞋和体力。" +
      "挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Oslo to Stavanger is about 50 minutes, in the same time zone. You can also take the Sørland Line train (about 8 hours, a roundabout route)." +
      " Stavanger is the oil-industry centre, with prices and wages on the high side even for Norway. From Stavanger, a boat to the Lysefjord to hike Preikestolen is popular — going early in peak season means fewer people; mind your footwear and fitness." +
      " Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "osl-tos": {
    study: {
    "zh-CN":
      "奥斯陆飞特罗姆瑟，几乎飞完了挪威的全部长度，从首都一直飞到北极圈以北。起飞后先经过多夫勒山的高山高原——挪威地势的一道大分水岭。" +
      "继续向北，进入诺尔兰的海岸山地：一列列尖锐的花岗岩峰几乎直接从海里拔起，斯瓦蒂森冰帽——按面积计大陆挪威第二大的冰原——就压在这一带的山顶上，几条冰川舌一直伸到接近海平面的地方。" +
      "越过北极圈，海面上出现罗弗敦群岛——一道由尖峭山峰组成的“墙”，从海里陡然升起，是挪威最上镜的风景之一。特罗姆瑟就在再往北的一座峡湾中的小岛上。",
    "en-US":
      "Oslo to Tromsø flies nearly the full length of Norway, from the capital to well north of the Arctic Circle. After take-off you cross the high plateau of Dovrefjell — a major watershed of the country." +
      " Flying on north, you reach the coastal mountains of Nordland: rows of sharp granite peaks rising almost straight from the sea, with the Svartisen ice cap — the second-largest on mainland Norway by area — capping the summits here, its glacier tongues reaching down almost to sea level." +
      " Over the Arctic Circle the Lofoten Islands appear on the sea — a 'wall' of jagged peaks rising sheer from the water, one of Norway's most photographed landscapes. Tromsø is farther north still, on a small island in a fjord.",
    },
    // travel sources: 全四段（study/travel × 中英）: 斯瓦蒂森大陆挪威第二大冰原、林根阿尔卑斯、芬马克高原萨米驯鹿放牧（只写土地利用）与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "奥斯陆到特罗姆瑟飞约 1 小时 50 分，同一时区。这段距离陆路要跨越大半个挪威，飞机是最实际的选择。" +
      "特罗姆瑟冬季比同纬度温和很多（暖流调节），但仍多风多雪；9 月底到 3 月是极光季，5 月中到 7 月中是午夜阳光。" +
      "看极光建议留 3–4 晚以上、跟机动向导追晴天。挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Oslo to Tromsø is about 1 hour 50 minutes, in the same time zone. This distance crosses most of Norway by land, so flying is the practical choice." +
      " Tromsø's winter is far milder than the latitude suggests (moderated by the warm current) but still windy and snowy; late September to March is aurora season, mid-May to mid-July the midnight sun." +
      " For the aurora, allow at least 3–4 nights and go with a mobile guide chasing clear skies. Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "trd-boo": {
    study: {
    "zh-CN":
      "特隆赫姆飞博德，沿诺尔兰海岸继续北飞，跨过北极圈，是诺尔兰铁路走的同一条路线（只是飞机快得多）。起飞后沿海岸线飞行，右侧是斯堪的纳维亚山脉的余脉，左侧是挪威海。" +
      "航线中段经过斯瓦蒂森冰帽——按面积计大陆挪威第二大的冰原，从空中能看到几条冰川舌从主体冰帽向峡湾方向流下，末端已经很接近海平面。这一带正好在北极圈附近，是夏天午夜阳光和冬天极光都能看到的过渡地带。" +
      "接近博德，海面出现群岛，博德本身建在一个伸进海里的半岛上，城南就是萨尔特海峡的大漩涡。",
    "en-US":
      "Trondheim to Bodø continues north along the Nordland coast, crossing the Arctic Circle, on the same route as the Nordland railway (just much faster by air). After take-off you follow the coastline, the tail of the Scandinavian Mountains to the right, the Norwegian Sea to the left." +
      " Mid-flight the route passes Svartisen — the second-largest ice cap on mainland Norway by area — and from the air you can see several glacier tongues flowing from the main ice cap toward the fjords, their ends already close to sea level. This area is right around the Arctic Circle, a transition zone where both the summer midnight sun and the winter aurora can be seen." +
      " Approaching Bodø, islands appear on the sea, and Bodø itself is built on a peninsula reaching into the water, with the Saltstraumen maelstrom just south of the city.",
    },
    // travel sources: 全四段（study/travel × 中英）: 斯瓦蒂森同上。核实 2026-09-11
    travel: {
    "zh-CN":
      "特隆赫姆到博德飞约 55 分钟，同一时区。坐诺尔兰线火车要约 10 小时（跨北极圈那一刻列车上通常会广播）。" +
      "博德是去罗弗敦群岛的门户，有车渡（约 3.5 小时到莫斯克内斯）。看萨尔特海峡大漩涡要查潮汐表，挑大潮前后流速最快的时段。" +
      "挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Trondheim to Bodø is about 55 minutes, in the same time zone. The Nordland Line train takes about 10 hours (there is usually an announcement at the moment of crossing the Arctic Circle)." +
      " Bodø is the gateway to the Lofoten Islands, with a car ferry (about 3.5 hours to Moskenes). To see the Saltstraumen maelstrom, check the tide table and go around the spring tides for the fastest flow." +
      " Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "tos-alf": {
    study: {
    "zh-CN":
      "特罗姆瑟飞阿尔塔，是北极挪威内部的一条短航线，从沿海飞到芬马克郡的内陆一侧。起飞后不久，脚下出现林根阿尔卑斯——一列陡峭的花岗岩尖峰，几乎直接从林根峡湾里拔起，是挪威山形最锋利的山脉之一，登山者称它“挪威的小阿尔卑斯”。" +
      "越过山脉，地面渐渐变得开阔平缓，进入芬马克高原——一片起伏的内陆苔原，长满矮桦和地衣，自古是萨米人放牧驯鹿的地方，至今仍有驯鹿群在这里季节性迁徙。" +
      "阿尔塔就在高原边缘、一条峡湾的尽头，阿尔塔河在这里入海。",
    "en-US":
      "Tromsø to Alta is a short flight within Arctic Norway, from the coast to the inland side of Finnmark county. Soon after take-off, below appear the Lyngen Alps — a row of steep granite spires rising almost straight out of the Lyngenfjord, among the sharpest mountain shapes in Norway, sometimes called 'Norway's little Alps' by climbers." +
      " Over the mountains the land gradually opens and flattens into the Finnmarksvidda — a rolling inland tundra plateau covered in dwarf birch and lichen, long used by the Sámi for reindeer herding, with herds still making seasonal migrations across it today." +
      " Alta is at the edge of the plateau, at the end of a fjord, where the Alta river reaches the sea.",
    },
    // travel sources: 全四段（study/travel × 中英）: 芬马克高原与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "特罗姆瑟到阿尔塔飞约 40 分钟，同一时区。这一带公路远、开车要好几小时，飞机是北极挪威城镇间常用的交通方式。" +
      "阿尔塔内陆气候更干、晴天更多，常被认为是挪威看极光成功率较高的地方之一。冬季很冷，装备要按极寒准备。" +
      "阿尔塔有世界遗产岩画，往内陆去卡拉绍克、考托凯诺能了解萨米文化。挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Tromsø to Alta is about 40 minutes, in the same time zone. Roads here are long, taking several hours by car, so flying is a common way to travel between towns in Arctic Norway." +
      " Inland Alta has a drier, sunnier climate and is often reckoned one of the more reliable places in Norway to see the aurora. Winters are very cold — prepare for extreme cold." +
      " Alta has World Heritage rock art, and inland at Karasjok and Kautokeino you can learn about Sámi culture. Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "bgo-trd": {
    study: {
    "zh-CN":
      "卑尔根飞特隆赫姆，沿挪威西海岸北飞，是这几条航线里峡湾和冰川最密集的一条。起飞后先经过松恩峡湾——挪威最长、最深的峡湾，从海岸一直伸进内陆约 200 公里，两岸雪山陡立。" +
      "紧接着是约斯特达尔冰原——欧洲大陆最大的冰原，几十条冰川舌从主体向四面延伸，其中几条能开车或徒步靠近。" +
      "继续北飞，出现盖朗厄尔峡湾——一条以陡崖瀑布著称的窄峡湾（“七姊妹”瀑布是其中最有名的一段），随后是龙斯达尔谷——一条被冰川刨出的笔直深谷，谷壁上有挪威最高的垂直崖面之一。" +
      "最后越过特罗尔海门山地，地面平缓下来，特隆赫姆出现在峡湾尽头。",
    "en-US":
      "Bergen to Trondheim flies up Norway's west coast, the densest of these routes in fjords and glaciers. After take-off you first pass the Sognefjord — Norway's longest and deepest fjord, reaching about 200 km inland from the coast, with steep snow mountains on both sides." +
      " Right after it is Jostedalsbreen — the largest ice cap on mainland Europe, with dozens of glacier tongues reaching out from the main body in every direction, several of them reachable by road or on foot." +
      " Flying on north, the Geirangerfjord appears — a narrow fjord known for its sheer cliffs and waterfalls (the 'Seven Sisters' is its most famous stretch), followed by Romsdalen — a straight, deep valley carved by ice, its walls including one of Norway's highest vertical rock faces." +
      " Finally, over the Trollheimen mountains, the land eases and Trondheim appears at the head of its fjord.",
    },
    // travel sources: 全四段（study/travel × 中英）: 松恩峡湾约 200 km、约斯特达尔冰川欧洲大陆最大、盖朗厄尔七姊妹瀑布与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "卑尔根到特隆赫姆飞约 55 分钟，同一时区。这条线陆路要绕很远（渡轮加公路），飞机是最实际的方式，也是看西海岸峡湾全景最省时间的方法。" +
      "西海岸多雨多风，天气一年四季都可能变化很快。以卑尔根或特隆赫姆为两端，很多人分别安排峡湾游船和自驾串起沿线景点。" +
      "挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Bergen to Trondheim is about 55 minutes, in the same time zone. By land this route is a long detour of ferries and roads, so flying is the practical way, and also the fastest way to see the whole panorama of west-coast fjords." +
      " The west coast is wet and windy, with weather that can change fast in any season. Using Bergen and Trondheim as the two ends, many people arrange a fjord cruise and a road trip to link up the sights along the way." +
      " Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "svg-bgo": {
    study: {
    "zh-CN":
      "斯塔万格飞卑尔根，是挪威西海岸最短的航段之一，飞机低空贴着海岸和峡湾飞，把两座峡湾区大城市连起来。斯塔万格所在的这一带海岸相对低平，机场周边是耶伦农业平原，起飞后很快就能看到田块和沙质海岸线。" +
      "不久脚下出现佛尔格冰帽——一座相对孤立的冰原，坐落在一个半岛的山脊上，两侧山坡陡降进峡湾，几条冰舌能开车靠近，是挪威少数几个“开车就能摸到冰川”的地方之一。" +
      "接着进入哈当厄峡湾——挪威第二长的峡湾，以两岸密集的果园闻名（苹果、梨、樱桃，春天开花时是挪威人自己的赏花季），峡湾深处能望见通往内陆哈当厄高原的方向。" +
      "最后越过一段海岸山地，卑尔根出现在峡湾群和外海之间、被七座山围住的一个小海湾里。",
    "en-US":
      "Stavanger to Bergen is one of the shortest hops on the Norwegian west coast, flown low along the coast and fjords. Soon after take-off, below is the Folgefonna — a relatively isolated ice cap sitting on a peninsula ridge, its slopes dropping steeply into fjords on either side, with glacier tongues reachable by road." +
      " Then comes the Hardangerfjord — Norway's second-longest fjord, known for its dense orchards on both shores (a famous blossom season in spring), with the route inland toward the Hardangervidda visible deep in the fjord." +
      " Bergen sits between this cluster of fjords and the open sea, in a small bay ringed by seven mountains.",
    },
    // travel sources: 全四段（study/travel × 中英）: 福尔格冰川、哈当厄峡湾与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "斯塔万格到卑尔根飞约 40 分钟，同一时区。沿海公路也能到，但要经过多段渡轮和世界最长的海底公路隧道，开车耗时更长。" +
      "春天（4–5 月）哈当厄峡湾沿岸果树开花，是挪威人自己也爱去的赏花季。两地都属西海岸海洋性气候，多雨多风，随身带防水外套。" +
      "挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Stavanger to Bergen is about 40 minutes, in the same time zone. The coastal road also connects them, but with several ferries and the world's longest subsea road tunnel, driving takes much longer." +
      " In spring (April–May) the orchards along the Hardangerfjord blossom, a season Norwegians themselves travel to see. Both cities have a west-coast maritime climate — wet and windy — so carry a waterproof jacket." +
      " Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "pek-osl": {
    // study sources: 全四段（study/travel × 中英）: 格洛马河「挪威最长的河流」（约 620 km）与本库 terrain/glomma-river 一致；西西伯利亚平原东西约 1500 km。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞奥斯陆，向西北横跨亚欧大陆北部，全程约七千五百公里，终点在斯堪的纳维亚半岛南端。起飞后向西北爬升，进入蒙古高原南缘的戈壁，砾石滩铺到天际线；这片荒漠年降水多在两百毫米以下，风把细沙吹走后留下一层坚硬的砾幂，地表看上去像被打磨过，被搬走的沙在下风处堆成沙丘带。河流大多是季节性的，昼夜温差常超过三十度，聚落之间往往相隔上百公里。再往北是西西伯利亚平原——世界上面积最大的平原之一，东西宽约一千五百公里，地表落差极小。鄂毕河与叶尼塞河在这里蜿蜒北流，春汛时河水漫出河道，大片针叶林泡在水里数周之久；地下是连续或断续的冻土，水下渗不下去，于是在地表积成无数浅湖与沼泽，沼泽面积之大，使这一带成为地球上重要的碳汇之一。再往西，针叶林逐渐掺进阔叶树，田块与村镇重新出现。越过乌拉尔以西之后，飞机接近波罗的海沿岸，海岸线低平、多沙洲与潟湖，冬季部分海湾结冰。最后跨过格洛马河——挪威最长的河流，从山地南流注入海峡，两岸是连片的针叶林与湖泊，飞机降落在奥斯陆以北的加勒穆恩机场。",
    "en-US":
      "Beijing to Oslo runs north-west across the northern half of Eurasia, about 7,500 km in all, to the southern end of the Scandinavian Peninsula. After take-off the aircraft climbs north-west into the Gobi Desert on the southern edge of the Mongolian Plateau, gravel flats reaching the horizon; this desert takes under 200 millimetres of rain in most years, and wind has carried off the fine sand to leave a hard pavement that looks polished from above and piled it downwind into belts of dune. The rivers are mostly seasonal, the daily temperature often swings more than thirty degrees, and settlements can be a hundred kilometres apart. Farther north lies the West Siberian Plain, one of the largest plains on Earth, roughly fifteen hundred kilometres across with almost no change in elevation. The Ob and the Yenisei wind north through it, and at the spring flood the rivers spill their channels and leave wide stands of conifer forest standing in water for weeks; beneath the surface lies continuous or patchy permafrost, so water cannot drain away and collects into countless shallow lakes and bogs, and the sheer extent of that marshland makes this one of the significant carbon stores on the planet. Farther west broadleaf trees begin to mix into the conifers and fields and villages reappear. West of the Urals the flight approaches the Baltic coast, a low shoreline of sandbars and lagoons where some of the bays freeze in winter. It finally crosses the Glomma, the longest river in Norway, running south out of the highlands between forest and lakes, and lands at Gardermoen Airport north of Oslo.",
    },
    travel: {
    "zh-CN":
      "北京到奥斯陆约9小时，时差6-7小时（挪威夏令时期间6小时）。挪威夏季日照极长（北部有极昼），冬季寒冷多雪、北部可观测极光，出行建议按季节备好保暖或防晒装备。" +
      "加勒穆恩机场距市中心约50公里，机场快线（Flytoget）约20分钟直达奥斯陆中央车站，也有普通火车和大巴，票价更低。市内维格兰雕塑公园、奥斯陆歌剧院、卡尔约翰大街是热门去处，公共交通票价较高，建议购买一日票。" +
      "挪威属申根区但非欧盟成员，签证按国籍不同、以挪威驻当地使领馆最新公布为准，行前确认并预留办理时间。挪威物价水平在欧洲居于前列，出行预算需留有余量。",
    "en-US":
      "Beijing to Oslo takes about 9 hours, with a 6–7 hour time difference (6 hours during Norwegian summer time). Norway has very long summer daylight (with midnight sun in the north) and cold, snowy winters, when the aurora can be seen in the north — pack for the season." +
      " Gardermoen Airport is about 50 km from the city centre; the Flytoget airport express train takes about 20 minutes direct to Oslo Central Station, and regular trains and buses also run at lower fares. The Vigeland sculpture park, the Oslo Opera House and Karl Johans gate are popular spots; public transport is pricey, so a day pass is worth buying." +
      " Norway is in the Schengen area but not an EU member; visa rules vary by nationality — check the latest from the Norwegian consulate for your location and allow time to arrange one. Prices in Norway are among the highest in Europe, so budget accordingly.",
    },
  },
};
