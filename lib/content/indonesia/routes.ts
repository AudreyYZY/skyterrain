import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "cgk-dps": {
    study: {
    "zh-CN":
      "雅加达飞登巴萨，是印度尼西亚客流量最大的国内航线，全程约990公里，连接首都与巴厘岛。飞机离开雅加达后向东南飞行，脚下先掠过爪哇岛西部的沿海平原与稻田，随后进入中爪哇火山带上空。" +
      "飞机继续向东南飞行，可见默拉皮火山标志性的圆锥形轮廓——这是印度尼西亚最活跃的火山，山顶常年蒸汽缭绕；越过默拉皮后，飞机进入东爪哇空域，布罗莫—腾格尔破火山口的灰白色沙海在云隙间隐约可辨，四座次生火山锥点缀其中。最终飞机跨越巴厘海峡，降落在登巴萨——巴厘岛唯一的商业机场所在地。",
    "en-US":
      "Flying from Jakarta to Denpasar is Indonesia's busiest domestic route, spanning about 990 km and connecting the capital to Bali. After leaving Jakarta the flight heads southeast, first passing over the coastal plains and rice paddies of western Java before entering the volcanic belt of central Java." +
      " The flight continues southeast, Mount Merapi's iconic conical outline visible below — Indonesia's most active volcano, its summit perpetually wreathed in steam; past Merapi, the flight enters East Javanese airspace, the grey-white sand sea of the Bromo Tengger caldera faintly visible through the clouds, dotted with four secondary cones. The flight then crosses the Bali Strait, landing in Denpasar, home to Bali's only commercial airport.",
    },
    // travel sources: 全四段（study/travel × 中英）: 默拉皮「印尼最活跃的火山」、布罗莫—腾格尔次生火山锥与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅加达到登巴萨飞约100分钟，同一时区，是鹰航印尼运营的国内航班之一，是印尼客流量最大的单一航线。苏加诺—哈达国际机场距雅加达市区约20公里；伍拉赖国际机场距登巴萨市区约13公里。",
    "en-US":
      "Jakarta to Denpasar is about 100 minutes, same time zone, operated by Garuda Indonesia as Indonesia's single busiest domestic route. Soekarno-Hatta International Airport is about 20 km from central Jakarta; Ngurah Rai International Airport is about 13 km from central Denpasar.",
    },
  },

  "cgk-sub": {
    study: {
    "zh-CN":
      "雅加达飞泗水，是贯穿爪哇岛的核心航线，全程约690公里，连接岛屿西端与东端两座最大城市。飞机离开雅加达后向东飞行，脚下是爪哇岛北部沿海密集的城镇与稻田，逐渐过渡为中爪哇的火山地带。" +
      "飞机继续向东飞行，默拉皮火山标志性的圆锥形轮廓从云层间显露，这座活火山山顶常年冒出蒸汽，是日惹以北最醒目的地标；越过默拉皮后，飞机沿爪哇岛北岸继续向东，最终降落在泗水——爪哇岛东部最大的港口城市，也是前往布罗莫火山的门户。",
    "en-US":
      "Flying from Jakarta to Surabaya is the core route running the length of Java, spanning about 690 km and connecting the island's two largest cities at its western and eastern ends. After leaving Jakarta the flight heads east, over the densely settled towns and rice paddies of Java's north coast, gradually giving way to the volcanic terrain of central Java." +
      " The flight continues east, Mount Merapi's conical outline emerging through the clouds — this active volcano, perpetually steaming at its summit, is the most prominent landmark north of Yogyakarta; past Merapi, the flight continues east along Java's north coast, landing in Surabaya, the largest port city in eastern Java and the gateway to Mount Bromo.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程约 690 km 与大圆一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅加达到泗水飞约100分钟，同一时区，是鹰航印尼运营的国内航班之一，全天多个班次往返。苏加诺—哈达国际机场距雅加达市区约20公里；朱安达国际机场距泗水市区约20公里。",
    "en-US":
      "Jakarta to Surabaya is about 100 minutes, same time zone, operated by Garuda Indonesia as one of Indonesia's domestic routes, with multiple daily flights. Soekarno-Hatta International Airport is about 20 km from central Jakarta; Juanda International Airport is about 20 km from central Surabaya.",
    },
  },

  "cgk-kno": {
    study: {
    "zh-CN":
      "雅加达飞棉兰，是连接爪哇岛与苏门答腊岛的核心航线，全程约1390公里，飞行方向大致向西北跨越爪哇海。飞机离开雅加达后向西北飞行，脚下先掠过爪哇海开阔水域，逐渐接近苏门答腊岛东南海岸。" +
      "飞机继续向西北飞行，逾两小时后接近北苏门答腊上空，多巴湖——世界最大的火山破火山口湖之一——的轮廓在云隙间隐约可辨，湖心的萨莫西岛清晰可见；越过多巴湖后，飞机继续向西北飞行，最终降落在棉兰——苏门答腊岛最大城市，也是探索多巴湖与武吉拉旺猩猩保护区的门户。",
    "en-US":
      "Flying from Jakarta to Medan is the core route linking Java with Sumatra, spanning about 1,390 km and heading broadly northwest across the Java Sea. After leaving Jakarta the flight heads northwest, first crossing the open waters of the Java Sea before approaching Sumatra's southeastern coast." +
      " The flight continues northwest; after more than two hours it approaches North Sumatran airspace, the outline of Lake Toba — one of the world's largest volcanic caldera lakes — faintly visible through the clouds, Samosir Island clearly distinguishable at its centre. Past Lake Toba, the flight continues northwest, landing in Medan, Sumatra's largest city and the gateway to Lake Toba and the Bukit Lawang orangutan sanctuary.",
    },
    // travel sources: 全四段（study/travel × 中英）: 多巴湖「世界最大的火山破火山口湖之一」带限定。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅加达到棉兰飞约145分钟，同一时区，是鹰航印尼运营的国内航线之一（每周7班）。苏加诺—哈达国际机场距雅加达市区约20公里；瓜拉纳姆国际机场距棉兰市区约39公里。",
    "en-US":
      "Jakarta to Medan is about 145 minutes, same time zone, operated by Garuda Indonesia (7 flights weekly) as one of Indonesia's domestic routes. Soekarno-Hatta International Airport is about 20 km from central Jakarta; Kualanamu International Airport is about 39 km from central Medan.",
    },
  },

  "cgk-upg": {
    study: {
    "zh-CN":
      "雅加达飞望加锡，是连接爪哇岛与苏拉威西岛的核心航线，全程约1430公里，飞行方向大致向东跨越爪哇海与弗洛雷斯海。飞机离开雅加达后向东飞行，脚下先掠过爪哇海开阔水域，此后大半程飞越印尼群岛间的海域。" +
      "飞机继续向东飞行，逾两小时后跨越望加锡海峡，抵近苏拉威西岛西南海岸，最终降落在望加锡——苏拉威西岛最大城市与主要港口，历史上是布吉族传统木造帆船（皮尼西船）航海文化的发源地，也是前往塔纳托拉查高地的门户。",
    "en-US":
      "Flying from Jakarta to Makassar is the core route linking Java with Sulawesi, spanning about 1,430 km and heading broadly east across the Java Sea and the Flores Sea. After leaving Jakarta the flight heads east, first crossing the open waters of the Java Sea, with most of the route flying over the waters between Indonesia's islands." +
      " The flight continues east; after more than two hours it crosses the Makassar Strait and approaches Sulawesi's southwestern coast, landing in Makassar, Sulawesi's largest city and main port, historically the birthplace of the Bugis people's traditional wooden pinisi schooner seafaring culture, and the gateway to the Tana Toraja highlands.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程约 1430 km 与大圆一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅加达到望加锡飞约150分钟，同一时区，是鹰航印尼运营的国内航线之一。苏加诺—哈达国际机场距雅加达市区约20公里；苏丹哈桑努丁国际机场距望加锡市区约21公里。",
    "en-US":
      "Jakarta to Makassar is about 150 minutes, same time zone, operated by Garuda Indonesia as one of Indonesia's domestic routes. Soekarno-Hatta International Airport is about 20 km from central Jakarta; Sultan Hasanuddin International Airport is about 21 km from central Makassar.",
    },
  },

  "cgk-bpn": {
    study: {
    "zh-CN":
      "雅加达飞巴厘巴板，是连接爪哇岛与加里曼丹岛（婆罗洲印尼部分）的核心航线，全程约1260公里，飞行方向大致向东北跨越爪哇海与望加锡海峡，是印尼三大主岛之间空中联系的重要一环。飞机离开雅加达后向东北飞行，脚下先掠过爪哇海开阔水域，此后大部分航程飞越海域、少见陆地地貌。" +
      "飞机继续向东北飞行，逾两小时后跨越望加锡海峡，抵近加里曼丹岛东南海岸，最终降落在巴厘巴板——东加里曼丹省的石油工业城市，也是通往印尼正在建设中的新首都努桑塔拉的主要空中门户，近年因迁都项目建设持续升温，是观察印尼国家发展进程的一处窗口。",
    "en-US":
      "Flying from Jakarta to Balikpapan is the core route linking Java with Kalimantan (Indonesia's portion of Borneo), spanning about 1,260 km and heading broadly northeast across the Java Sea and the Makassar Strait. After leaving Jakarta the flight heads northeast, first crossing the open waters of the Java Sea, with most of the route flown over open water." +
      " The flight continues northeast; after more than two hours it crosses the Makassar Strait and approaches Kalimantan's southeastern coast, landing in Balikpapan, East Kalimantan's oil-industry city and the main air gateway to Nusantara, Indonesia's new capital currently under construction.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程距离原写约 1170 km（比大圆 1258 km 还短），改为约 1260 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅加达到巴厘巴板飞约135分钟，同一时区，是鹰航印尼运营的国内航班之一。苏加诺—哈达国际机场距雅加达市区约20公里；苏丹阿吉穆罕默德苏莱曼机场距巴厘巴板市区约11公里。",
    "en-US":
      "Jakarta to Balikpapan is about 135 minutes, same time zone, operated by Garuda Indonesia as one of Indonesia's domestic routes. Soekarno-Hatta International Airport is about 20 km from central Jakarta; Sultan Aji Muhammad Sulaiman Airport is about 11 km from central Balikpapan.",
    },
  },

  "cgk-pkn": {
    study: {
    "zh-CN":
      "雅加达飞邦卡兰文，是通往加里曼丹岛热带雨林与红毛猩猩保育区的重要航线，全程约670公里。飞机离开雅加达后向东北飞行，脚下先掠过爪哇海开阔水域，随后逐渐接近加里曼丹岛南部海岸。" +
      "飞机继续向东北飞行，可见加里曼丹岛南部低地大片墨绿色的泥炭沼泽林与热带雨林，塞孔耶尔河蜿蜒的河道在林间隐约可辨，这里是丹绒普丁国家公园的核心区域；最终飞机降落在邦卡兰文——中加里曼丹省一座沿河小城，是前往国家公园观察野生红毛猩猩的主要门户。",
    "en-US":
      "Flying from Jakarta to Pangkalan Bun is an important route into Kalimantan's tropical rainforest and orangutan conservation area, spanning about 670 km. After leaving Jakarta the flight heads northeast, first crossing the open waters of the Java Sea before gradually approaching Kalimantan's southern coast." +
      " The flight continues northeast, extensive deep-green peat swamp forest and tropical rainforest visible across Kalimantan's southern lowlands, the winding course of the Sekonyer River faintly traceable through the trees — the core area of Tanjung Puting National Park. The flight then lands in Pangkalan Bun, a riverside town in Central Kalimantan and the main gateway for visiting the park to observe wild orangutans.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程约 670 km 与大圆一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅加达到邦卡兰文飞约85分钟，同一时区，是巴迪克航空运营的国内航班之一。苏加诺—哈达国际机场距雅加达市区约20公里；伊斯坎达尔机场距邦卡兰文市区约3公里。",
    "en-US":
      "Jakarta to Pangkalan Bun is about 85 minutes, same time zone, operated by Batik Air as one of Indonesia's domestic routes. Soekarno-Hatta International Airport is about 20 km from central Jakarta; Iskandar Airport is about 3 km from central Pangkalan Bun.",
    },
  },

  "dps-lbj": {
    study: {
    "zh-CN":
      "登巴萨飞拉布安巴焦，是巴厘岛通往科莫多国家公园的热门旅游航线，全程约520公里，飞行方向大致向东跨越龙目海峡与松巴哇岛上空。飞机离开登巴萨后向东飞行，脚下先掠过龙目岛，林贾尼火山高耸的锥形轮廓与山体内的塞加拉阿纳克火山口湖清晰可辨。" +
      "越过林贾尼后，飞机继续向东飞行，掠过松巴哇岛与松巴岛之间的海域，逐渐接近弗洛雷斯海西端；科莫多国家公园干旱的稀树草原岛群在云隙间显现，最终降落在拉布安巴焦——弗洛雷斯岛西端的港口小镇，是探索科莫多巨蜥栖息地的核心门户。",
    "en-US":
      "Flying from Denpasar to Labuan Bajo is a popular tourist route from Bali to Komodo National Park, spanning about 520 km and heading broadly east across the Lombok Strait and over Sumbawa. After leaving Denpasar the flight heads east, passing over Lombok, the towering conical outline of Mount Rinjani and the Segara Anak crater lake within it clearly visible below." +
      " Past Rinjani, the flight continues east over the waters between Sumbawa and Sumba, gradually approaching the western Flores Sea; the dry savanna islands of Komodo National Park come into view through the clouds, before landing in Labuan Bajo, a small port town at the western tip of Flores and the core gateway to the Komodo dragon's habitat.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程距离原写约 470 km（比大圆 520 km 还短），改为约 520 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "登巴萨到拉布安巴焦飞约80分钟，同一时区，是巴迪克航空运营的国内航班之一（每周28班）。伍拉赖国际机场距登巴萨市区约13公里；科莫多机场距拉布安巴焦市区约2公里。",
    "en-US":
      "Denpasar to Labuan Bajo is about 80 minutes, same time zone, operated by Batik Air as one of Indonesia's domestic routes. Ngurah Rai International Airport is about 13 km from central Denpasar; Komodo Airport is about 2 km from central Labuan Bajo.",
    },
  },

  "upg-mdc": {
    study: {
    "zh-CN":
      "望加锡飞万鸦老，是贯穿苏拉威西岛的核心航线，全程约950公里，连接岛屿西南与东北两端的主要城市。飞机离开望加锡后向东北飞行，脚下先掠过苏拉威西岛西南半岛山地，塔纳托拉查高地层叠的梯田与灰白色喀斯特山地在云隙间隐约可辨。" +
      "越过塔纳托拉查后，飞机继续向东北飞行，沿苏拉威西岛中部山地上空前行，逐渐接近岛屿东北端的米纳哈萨半岛；最终降落在万鸦老——北苏拉威西省首府，是探索布纳肯国家公园珊瑚礁潜点的核心门户。",
    "en-US":
      "Flying from Makassar to Manado is the core route running the length of Sulawesi, spanning about 950 km and connecting the island's major cities at its southwestern and northeastern ends. After leaving Makassar the flight heads northeast, first passing over the mountainous terrain of Sulawesi's southwestern peninsula, the tiered rice terraces and grey-white karst mountains of the Tana Toraja highlands faintly visible through the clouds." +
      " Past Tana Toraja, the flight continues northeast over Sulawesi's central highlands, gradually approaching the Minahasa Peninsula at the island's northeastern tip, before landing in Manado, capital of North Sulawesi province and the core gateway to the coral reef dive sites of Bunaken National Park.",
    },
    // travel sources: 全四段（study/travel × 中英）: 塔纳托拉查未涉族群 / 宗教评价。核实 2026-09-11
    travel: {
    "zh-CN":
      "望加锡到万鸦老飞约115分钟，同一时区，是鹰航印尼运营的国内航班之一。苏丹哈桑努丁国际机场距望加锡市区约21公里；萨姆拉图兰吉国际机场距万鸦老市区约13公里。",
    "en-US":
      "Makassar to Manado is about 115 minutes, same time zone, operated by Garuda Indonesia as one of Indonesia's domestic routes. Sultan Hasanuddin International Airport is about 21 km from central Makassar; Sam Ratulangi International Airport is about 13 km from central Manado.",
    },
  },

  "cgk-yia": {
    study: {
    "zh-CN":
      "雅加达飞日惹，是爪哇岛内连接首都与文化古城的重要航线，全程约424公里，飞行时间不足一个半小时，是印尼国内最繁忙的短途航线之一。飞机离开雅加达后向东南飞行，脚下先掠过爪哇岛西部的稻田与丘陵，逐渐接近中爪哇火山高原地带。" +
      "飞机继续向东南飞行，迪昂高原地热活跃的火山口群与硫磺喷气孔在云隙间隐约可辨，高原上保留有7至8世纪印度教神庙群遗址；越过迪昂高原后，飞机降落在日惹——爪哇宫廷文化中心，也是探索婆罗浮屠、普兰巴南神庙与默拉皮火山的门户城市。",
    "en-US":
      "Flying from Jakarta to Yogyakarta is an important intra-Java route linking the capital with a historic cultural city, spanning about 424 km. After leaving Jakarta the flight heads southeast, first passing over the rice paddies and hills of western Java before approaching the volcanic highlands of central Java." +
      " The flight continues southeast, the geothermally active crater cluster and sulphur fumaroles of the Dieng Plateau faintly visible through the clouds, the highland preserving 7th–8th century Hindu temple ruins; past Dieng, the flight lands in Yogyakarta, the centre of Javanese court culture and the gateway to Borobudur, Prambanan and Mount Merapi.",
    },
    // travel sources: 全四段（study/travel × 中英）: 迪昂高原 7–8 世纪神庙群与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅加达到日惹飞约75分钟，同一时区，是鹰航印尼运营的国内航线之一（每日运营）。苏加诺—哈达国际机场距雅加达市区约20公里；日惹国际机场（YIA）距日惹市区约45公里，有机场铁路直达。",
    "en-US":
      "Jakarta to Yogyakarta is about 75 minutes, same time zone, operated by Garuda Indonesia as one of Indonesia's domestic routes. Soekarno-Hatta International Airport is about 20 km from central Jakarta; Yogyakarta International Airport (YIA) is about 45 km from central Yogyakarta, with a direct airport rail link.",
    },
  },

  "pek-cgk": {
    // study sources: 全四段（study/travel × 中英）: 全程约 5300 km（大圆约 5238 km）；纳土纳「印尼最北端岛群」有误（最北点为伦多岛），已删修饰语、不补新定位。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞雅加达，从东亚大陆一路向南，全程约五千三百公里，终点是赤道附近的爪哇岛。起飞后先飞越华北平原——黄河与海河冲积出来的低平耕地，河渠纵横；再往南是长江中下游平原，湖泊密布、水网交织，夏季的云层常常连成一片。过了长江之后地形抬起，进入江南丘陵与南岭一带，红色砂岩和花岗岩风化出圆缓的山头，梯田顺着坡面层层排布。再往南，珠江三角洲的城市群沿着河口铺开，海岸线在这里向内凹成一个大湾。越过海岸线后进入南海，西太平洋最大的边缘海之一，北部是宽阔的大陆架，中部急剧下陷成四千多米深的海盆，海底散布着大量珊瑚礁和暗沙；这一带终年高温，是台风频繁经过的海域，海面上常年可见密集的航运船只。继续向南掠过纳土纳群岛，群岛坐落在通往马六甲海峡的航道要冲上，岛上以低矮丘陵和椰林为主，周围浅海遍布礁盘。往南则过渡为爪哇海，被苏门答腊、爪哇与加里曼丹环抱的浅海，水深大多不足百米，属于巽他陆架，末次冰期海面较低时这里曾是连片的陆地。飞机降落在爪哇岛西北岸的雅加达。",
    "en-US":
      "Beijing to Jakarta runs almost due south from mainland East Asia, about 5,300 km in all, ending on the island of Java near the equator. After take-off the flight crosses the North China Plain, low farmland built by the silt of the Yellow and Hai rivers and threaded with canals; farther south lie the plains of the middle and lower Yangtze, dense with lakes and waterways and often under an unbroken sheet of summer cloud. Past the Yangtze the ground rises into the hills of Jiangnan and the Nanling ranges, where red sandstone and granite weather into rounded summits and terraces step up the slopes. Farther south again the cities of the Pearl River delta spread out around the estuary, where the coastline curves inward into a broad bay. Beyond the coast the route enters the South China Sea, one of the largest marginal seas of the western Pacific: a wide continental shelf in the north drops abruptly to a basin more than four thousand metres deep in the middle, its floor scattered with coral reefs and shoals; the water stays warm all year, typhoons cross it frequently, and shipping traffic is visible on it almost continuously. Continuing south the flight passes the Natuna Islands, sitting astride the shipping lane toward the Strait of Malacca, low hills and coconut palm above, reef platforms in the shallows around. Southward the water becomes the Java Sea, a shallow sea enclosed by Sumatra, Java and Borneo, mostly less than a hundred metres deep and part of the Sunda Shelf, which was continuous dry land when sea level was lower during the last ice age. The flight lands at Jakarta on the north-west coast of Java.",
    },
    travel: {
    "zh-CN":
      "北京到雅加达约6小时45分钟，时差1小时（印尼西部时间比北京晚1小时，印尼不实行夏令时）。雅加达全年高温潮湿，属热带季风气候，出行建议轻便速干衣物，雨季（11月至次年3月）常有短时强降雨。" +
      "苏加诺哈达机场距市中心约20公里，机场铁路（Kereta Bandara）约1小时直达市区，也有Damri机场大巴。市内交通拥堵明显，网约车和快速公交（TransJakarta）是常用出行方式。国家纪念塔、老城区、伊斯蒂克拉尔清真寺是市内代表性景点。" +
      "中国公民赴印尼的入境政策近年多次调整，出行前请以印尼移民局最新公布为准；随身携带充足现金和常用药品，饮用瓶装水。",
    "en-US":
      "Beijing to Jakarta takes about 6 hours 45 minutes, with a 1-hour time difference (Western Indonesia Time is 1 hour behind Beijing; Indonesia does not observe daylight saving). Jakarta is hot and humid year-round under a tropical monsoon climate — pack light, quick-dry clothing, and expect sudden heavy downpours during the rainy season (November to March)." +
      " Soekarno-Hatta Airport is about 20 km from the city centre; the airport railway (Kereta Bandara) takes about an hour into town, and Damri airport buses also run. Traffic congestion is significant, so ride-hailing apps and the TransJakarta bus rapid transit system are commonly used. The National Monument, the Old Town (Kota Tua) and Istiqlal Mosque are among the city's landmark sights." +
      " Entry requirements for Chinese citizens visiting Indonesia have changed several times in recent years — check Indonesia's immigration authority for the latest rules before you travel, carry enough cash and any regular medication, and stick to bottled water.",
    },
  },
};
