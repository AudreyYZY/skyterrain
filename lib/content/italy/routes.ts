import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "fco-lin": {
    study: {
    "zh-CN":
      "罗马飞米兰，是意大利最繁忙的国内航线，从中部飞到西北部的金融中心，纵贯整个亚平宁半岛北段。起飞后不久，脚下出现特拉西梅诺湖——意大利中部最大的湖之一，湖面很浅、几乎不结冰，公元前 217 年汉尼拔在湖边伏击过罗马军队（简短史实）。" +
      "继续北飞，地面变成托斯卡纳丘陵：一片被长期农耕塑造的波状缓丘，柏树、葡萄园和赭石色农舍是这一带的典型景观，从空中能看出田块随丘陵起伏排列的纹理。" +
      "越过亚平宁山脉北段的余脉，地面骤然变得极其平坦——波河平原，意大利最大的连片平地，由波河及其支流冲积而成，是全国主要的农业和工业区。米兰就在平原西部，主教座堂的尖塔从远处就能辨认。",
    "en-US":
      "Rome to Milan is Italy's busiest domestic route, from the centre to the north-western financial hub, running the length of the northern Apennine peninsula. Soon after take-off, Lake Trasimeno appears below — one of the largest lakes in central Italy, shallow and rarely freezing, where Hannibal ambushed a Roman army in 217 BC (a brief historical fact)." +
      " Flying on north, the land becomes the Tuscan hills: rolling country long shaped by farming, with cypress trees, vineyards and ochre farmhouses the typical scene, the fields' texture following the curves of the hills visible from the air." +
      " Over the northern tail of the Apennines, the land suddenly becomes extremely flat — the Po Valley, Italy's largest continuous plain, built up by the Po and its tributaries, the country's main agricultural and industrial region. Milan is in the western part of the plain, its cathedral's spires recognisable from a distance.",
    },
    // travel sources: 全四段（study/travel × 中英）: 特拉西梅诺湖、前 217 年汉尼拔伏击战、波河平原与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "罗马到米兰飞约一小时十分，同一时区。高铁约三小时，很多商务旅客会选飞机、观光旅客更常选火车（沿途风景更好）。米兰比罗马更凉更潮湿，冬季易有雾霾。" +
      "靠窗依次能看到特拉西梅诺湖、托斯卡纳丘陵和波河平原。米兰机场用利纳特（近市区）或马尔彭萨（国际枢纽），提前确认航班用哪个。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。历史城区常有限行区（ZTL），自驾进城前查清楚。",
    "en-US":
      "Rome to Milan is about an hour and ten minutes, in the same time zone. High-speed rail is about three hours; many business travellers fly and sightseers more often take the train (better views along the way). Milan is cooler and more humid than Rome, with winter haze common." +
      " From a window you see, in turn, Lake Trasimeno, the Tuscan hills and the Po Valley. Milan's airport is either Linate (near the city) or Malpensa (the international hub) — confirm which one your flight uses ahead of time." +
      " Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. Historic centres often have restricted traffic zones (ZTL) — check before driving in.",
    },
  },

  "fco-vce": {
    study: {
    "zh-CN":
      "罗马飞威尼斯，从意大利中部飞到东北角的潟湖水城。起飞后先经过特拉西梅诺湖，随后越过亚平宁山脉北段的丘陵地带。" +
      "接近北部，地面变成波河平原——意大利最大的连片平地，方格田块和纵横灌渠从空中清晰可见，河道在平坦地面上蜿蜒。" +
      "平原东端，波河和其他几条河流冲积出的泥沙在亚得里亚海边形成了威尼斯潟湖——一片被沙洲和防波堤与外海隔开的浅水区，威尼斯的一百多座小岛就散落在潟湖里，飞机降落前能清楚看到运河纵横的城市轮廓和大运河的反 S 形走向。",
    "en-US":
      "Rome to Venice flies from central Italy to the lagoon city in the north-east corner. After take-off you pass Lake Trasimeno, then cross the hilly northern Apennines." +
      " Approaching the north, the land becomes the Po Valley — Italy's largest continuous plain, its square fields and criss-crossing irrigation channels clearly visible from the air, rivers winding across the flat ground." +
      " At the eastern end of the plain, silt carried down by the Po and other rivers has built the Venetian Lagoon on the Adriatic shore — a shallow-water area separated from the open sea by sandbars and breakwaters. Venice's hundred-plus small islands are scattered through the lagoon, and before landing you can clearly see the canal-laced city outline and the reverse-S curve of the Grand Canal.",
    },
    // travel sources: 全四段（study/travel × 中英）: 波河平原、威尼斯潟湖成因与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "罗马到威尼斯飞约一小时五分，同一时区。高铁约三个半小时。威尼斯机场在潟湖北岸大陆一侧，有机场巴士或水上巴士进城（约一小时），城内没有汽车、全靠步行和水上巴士。" +
      "靠窗能看到特拉西梅诺湖、波河平原的农田和威尼斯潟湖的独特形态。秋冬威尼斯偶有“高水位”，出发前可查潮汐预报。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Rome to Venice is about an hour and five minutes, in the same time zone. High-speed rail is about three and a half hours. Venice's airport is on the mainland side of the lagoon's north shore, with an airport bus or water bus into the city (about an hour); there are no cars in the city, only walking and water buses." +
      " From a window you see Lake Trasimeno, the farmland of the Po Valley and the distinctive shape of the Venetian Lagoon. Venice occasionally has 'acqua alta' (high water) in autumn and winter — check the tide forecast before you go." +
      " Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "fco-nap": {
    study: {
    "zh-CN":
      "罗马飞那不勒斯，是意大利最短的主要航线之一，几乎沿台伯河谷和第勒尼安海岸南下。起飞后不久，脚下就是台伯河——流经罗马市中心的那条河，向西南注入第勒尼安海。" +
      "接近那不勒斯，海岸线一带出现坎皮弗莱格瑞——一片活跃的破火山口地热区，地表能看到冒着硫磺气的火口和温泉，地壳的整体升降（bradyseism）是这里持续被监测的自然现象。" +
      "那不勒斯就在坎皮弗莱格瑞以东的海湾边，飞机下降时湾对岸维苏威火山的完整锥形轮廓清晰可见。",
    "en-US":
      "Rome to Naples is one of Italy's shortest major routes, running almost the whole way down the Tiber valley and the Tyrrhenian coast. Soon after take-off, below is the Tiber — the river running through central Rome, flowing south-west to the Tyrrhenian Sea." +
      " Approaching Naples, the coastal area shows the Campi Flegrei — an active caldera geothermal area, with sulphurous vents and hot springs visible on the surface; the overall rise and fall of the ground (bradyseism) here is a natural phenomenon under continuous monitoring." +
      " Naples is on the bay east of the Campi Flegrei, and as the plane descends, the full cone of Mount Vesuvius across the bay is clearly visible.",
    },
    // travel sources: 全四段（study/travel × 中英）: 坎皮弗莱格瑞 bradyseism 为持续监测现象（INGV 口径），未写死警戒级别。核实 2026-09-11
    travel: {
    "zh-CN":
      "罗马到那不勒斯飞约四十五分钟，同一时区。高铁约一小时到一个半小时，很多人也会选火车（市中心到市中心，往往更省心）。那不勒斯属地中海气候，比罗马略暖。" +
      "靠窗能看到台伯河和坎皮弗莱格瑞的火山地热区。以那不勒斯为基地可坐区域火车去庞贝古城，也可坐船去卡普里岛或阿马尔菲海岸。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。那不勒斯需比其他意大利城市更留意随身财物。",
    "en-US":
      "Rome to Naples is about 45 minutes, in the same time zone. High-speed rail is about an hour to an hour and a half, and many people take the train (city centre to city centre, often more convenient). Naples has a Mediterranean climate, slightly warmer than Rome." +
      " From a window you see the Tiber and the volcanic-geothermal area of the Campi Flegrei. From Naples you can take a regional train to Pompeii, or a boat to Capri or the Amalfi Coast." +
      " Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. Naples needs more care about belongings than most Italian cities.",
    },
  },

  "fco-cta": {
    study: {
    "zh-CN":
      "罗马飞卡塔尼亚，从意大利中部一路飞到西西里岛东岸，是这几条国内航线里跨度较大的一条。起飞后先经过台伯河，随后进入亚平宁山脉：这条像脊椎一样纵贯整个亚平宁半岛的山系，大萨索山（大角峰）是其中最高的一段，海拔近 2912 米。" +
      "越过山脉南段，地面变成波利诺山——意大利南部最大的国家公园所在地，喀斯特地貌和高山牧场交织。" +
      "飞越墨西拿海峡上空进入西西里岛，卡塔尼亚就在岛屿东岸、埃特纳火山脚下——这是欧洲（不计高加索）最高的活火山，晴天从空中能看到山顶的烟柱和黑色的熔岩流痕迹。",
    "en-US":
      "Rome to Catania flies from central Italy all the way to the east coast of Sicily, one of the longer domestic routes here. After take-off you cross the Tiber, then the Apennines: the range running down the whole peninsula like a spine, with Gran Sasso (Corno Grande) its highest point at almost 2,912 m." +
      " Over the southern Apennines, the land becomes the Pollino massif — home to southern Italy's largest national park, karst landforms interwoven with high mountain pasture." +
      " Crossing the Strait of Messina onto Sicily, Catania sits on the island's east coast at the foot of Mount Etna — the highest active volcano in Europe outside the Caucasus — and in clear weather you can see the summit plume and traces of black lava flows from the air.",
    },
    // travel sources: 全四段（study/travel × 中英）: 大角峰 2912 m；埃特纳「不计高加索」、2024-09 约 3403 m（#264 前已修）；波利诺「南部最大」为本库「全国最大」的保守表述。核实 2026-09-11
    travel: {
    "zh-CN":
      "罗马到卡塔尼亚飞约一小时零五分，同一时区。西西里没有高铁直连，跨海需要飞机或渡轮（火车可通过轮渡摆渡过海峡，但耗时很长）。卡塔尼亚比罗马更热、更干。" +
      "靠窗能看到亚平宁山脉、波利诺山和西西里岛的轮廓，接近卡塔尼亚时留意埃特纳火山。以卡塔尼亚为基地可跟正规向导登埃特纳、或去陶尔米纳看希腊剧场遗址。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Rome to Catania is about an hour and five minutes, in the same time zone. Sicily has no direct high-speed rail link — crossing the sea needs a flight or a ferry (trains can be ferried across the strait, but it takes a long time). Catania is hotter and drier than Rome." +
      " From a window you see the Apennines, the Pollino massif and the outline of Sicily, with Mount Etna visible approaching Catania. From Catania you can climb Etna with a licensed guide, or visit Taormina for the Greek theatre ruins." +
      " Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "fco-cag": {
    study: {
    "zh-CN":
      "罗马飞卡利亚里，从意大利本土飞到撒丁岛——地中海最古老的陆块之一。起飞后先经过台伯河，随后一路向西南飞越第勒尼安海的开阔海面。" +
      "撒丁岛没有高大的年轻山脉，岛屿主体是一块古老的花岗岩和片岩基底，被长期侵蚀成低缓的丘陵和高原，与意大利本土年轻的亚平宁山脉在地质上明显不同。" +
      "卡利亚里就在岛屿南岸一个海湾边，飞机降落前能看到城堡区所在的山丘和城市脚下莫尔塔咸水湖的粉色轮廓（湖水因藻类和盐度呈现淡粉色，是火烈鸟的栖息地）。",
    "en-US":
      "Rome to Cagliari flies from mainland Italy to Sardinia — one of the oldest landmasses in the Mediterranean. After take-off you cross the Tiber, then fly south-west over the open water of the Tyrrhenian Sea." +
      " Sardinia has no young high mountains; the island's core is an old granite and schist basement, long eroded into low hills and plateaus, geologically quite different from the young Apennines of mainland Italy." +
      " Cagliari is on a bay on the island's south coast, and before landing you can see the hill of the Castello district and, below the city, the pink outline of the Molentargius saltwater lagoon (tinted pale pink by algae and salinity, a habitat for flamingos).",
    },
    // travel sources: 全四段（study/travel × 中英）: 撒丁岛海西期花岗岩微陆块与本库一致；莫伦塔尔久斯潟湖因盐藻呈粉色、火烈鸟栖息地。核实 2026-09-11
    travel: {
    "zh-CN":
      "罗马到卡利亚里飞约五十五分钟，同一时区。撒丁岛没有高铁连接本土，往返只能靠飞机或渡轮（渡轮约八小时，多为夜渡）。卡利亚里夏季炎热干燥，少雨。" +
      "靠窗大部分时间是第勒尼安海，接近撒丁岛时能看到岛屿轮廓。岛内交通有限，看努拉吉遗址或西南海岸建议自驾。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Rome to Cagliari is about 55 minutes, in the same time zone. Sardinia has no high-speed rail link to the mainland — travel is by air or ferry only (the ferry takes about eight hours, mostly overnight). Cagliari has hot, dry summers with little rain." +
      " From a window it is mostly the Tyrrhenian Sea, with the island's outline appearing as you approach Sardinia. Transport on the island is limited — driving is recommended for the nuraghi sites or the south-west coast." +
      " Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },


  "lin-nap": {
    study: {
    "zh-CN":
      "米兰飞那不勒斯，从意大利工业和金融中心飞到南方最大的城市，纵贯整个亚平宁半岛北中段，是意大利国内航线里飞行距离较长的一条。起飞后先越过波河平原——意大利最大的连片平地，方格田块和纵横灌渠从空中清晰可辨，是全国农业和工业最密集的区域。" +
      "越过平原南缘，地面隆起进入亚平宁山脉：这条像脊椎一样纵贯整个半岛的山系把意大利分成第勒尼安海和亚得里亚海两侧，山间是深谷、梯田式的农业地带和散落的中世纪山城。" +
      "接近那不勒斯，海岸线一带出现坎皮弗莱格瑞的火山地热区——一片活跃的破火山口，地表能看到冒着硫磺气的火口和温泉；那不勒斯湾和湾对岸维苏威火山完整的锥形轮廓在降落前清晰可见。",
    "en-US":
      "Milan to Naples flies from Italy's industrial and financial centre to the largest city of the south, running the length of the northern and central peninsula. After take-off you cross the Po Valley — Italy's largest continuous plain, its grid of fields easy to pick out from the air." +
      " Past the southern edge of the plain, the land rises into the Apennines: the range running the length of the peninsula, dividing Italy into east and west, with deep valleys and terraced farmland between the ridges." +
      " Approaching Naples, the coastal area shows the volcanic-geothermal Campi Flegrei, and the Bay of Naples and the cone of Vesuvius are clearly visible before landing.",
    },
    // travel sources: 全四段（study/travel × 中英）: 与本库意大利各条一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "米兰到那不勒斯飞约一小时二十分，同一时区。高铁约四个半小时，很多人会选飞机。米兰比那不勒斯更凉更潮湿，那不勒斯属典型地中海气候。" +
      "靠窗能看到波河平原、亚平宁山脉和坎皮弗莱格瑞的火山地貌。以那不勒斯为基地可去庞贝古城或坐船去卡普里岛。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。那不勒斯需比米兰更留意随身财物。",
    "en-US":
      "Milan to Naples is about an hour and 20 minutes, in the same time zone. High-speed rail is about four and a half hours, and many people fly instead. Milan is cooler and more humid than Naples, which has a typical Mediterranean climate." +
      " From a window you see the Po Valley, the Apennines and the volcanic landscape of the Campi Flegrei. From Naples you can visit Pompeii or take a boat to Capri." +
      " Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. Naples needs more care about belongings than Milan.",
    },
  },

  "nap-cta": {
    study: {
    "zh-CN":
      "那不勒斯飞卡塔尼亚，沿意大利南部海岸和第勒尼安海南下，是一条以火山为主题的短航线。起飞后不久，维苏威火山的完整锥形出现在右侧机窗——公元 79 年它的喷发掩埋了庞贝古城，如今仍是被密切监测的活火山。" +
      "继续南飞，海面上出现利帕里群岛（又称埃奥利群岛）：一串火山成因的小岛，其中斯特龙博利岛上的火山几乎持续小规模喷发，被称为“地中海灯塔”，几百年来一直如此，是全球观测最久的活火山之一。" +
      "越过一片开阔海面进入西西里岛，卡塔尼亚就在埃特纳火山脚下——欧洲（不计高加索）最高的活火山，2024年9月复测约3403米，山顶终年有烟柱。",
    "en-US":
      "Naples to Catania runs south along the Italian coast and the southern Tyrrhenian Sea, a short flight with a volcanic theme throughout. Soon after take-off the full cone of Mount Vesuvius appears on the right — its eruption in 79 AD buried Pompeii, and it remains a closely monitored active volcano today." +
      " Flying on south, the Aeolian (Lipari) Islands appear over the water: a chain of volcanic islands, including Stromboli, whose volcano has erupted in small bursts almost continuously — called the 'lighthouse of the Mediterranean', a pattern that has held for centuries and one of the longest continuously observed volcanoes in the world." +
      " Over open water onto Sicily, Catania sits at the foot of Mount Etna — the highest active volcano in Europe outside the Caucasus, measured at about 3,403 m in September 2024, with a year-round summit plume.",
    },
    // travel sources: 全四段（study/travel × 中英）: 维苏威 79 年、斯特龙博利「地中海灯塔」、埃特纳约 3403 m 与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "那不勒斯到卡塔尼亚飞约四十五分钟，同一时区。也可坐渡轮（耗时更长）。两地都属地中海气候，卡塔尼亚更靠南、更热更干。" +
      "靠窗依次能看到维苏威火山、利帕里群岛和埃特纳火山，是这几条航线里“火山密度”最高的一条。以卡塔尼亚为基地可跟正规向导登埃特纳，或去陶尔米纳。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Naples to Catania is about 45 minutes, in the same time zone. There is also a ferry (much slower). Both cities have a Mediterranean climate, with Catania further south, hotter and drier." +
      " From a window you see, in turn, Vesuvius, the Aeolian Islands and Mount Etna — the highest 'volcano density' of any of these routes. From Catania you can climb Etna with a licensed guide, or visit Taormina." +
      " Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "fco-bri": {
    study: {
    "zh-CN":
      "罗马飞巴里，从意大利中部飞到东南部的普利亚大区，横穿整个半岛。起飞后先经过台伯河，随后越过亚平宁山脉——这条纵贯半岛的山系在这一带把意大利分成第勒尼安海和亚得里亚海两侧。" +
      "越过山脉东坡，地面渐渐变成加尔加诺半岛一带：一块从平坦海岸线上突出的石灰岩高地，覆盖着意大利南部少见的成片森林，历史上因为地形独立、曾被称为“意大利的马刺”。" +
      "接近巴里，脚下出现阿尔塔穆尔杰——一片喀斯特石灰岩台地，地表干旱多石，地下则有大量溶洞和史前遗迹。巴里就在亚得里亚海边、一个伸入海中的小半岛上。",
    "en-US":
      "Rome to Bari flies from central Italy to Puglia in the south-east, crossing the whole peninsula. After take-off you cross the Tiber, then the Apennines — the range that divides Italy between the Tyrrhenian and Adriatic sides in this stretch." +
      " Over the eastern slope of the mountains, the land gradually becomes the Gargano Promontory: a limestone upland jutting from an otherwise flat coastline, covered in forest rare for southern Italy, historically nicknamed 'the spur of Italy' for its distinct shape." +
      " Approaching Bari, the Alta Murgia appears below — a karst limestone plateau, dry and stony on the surface with extensive caves and prehistoric sites underground. Bari sits on the Adriatic coast, on a small peninsula reaching into the sea.",
    },
    // travel sources: 全四段（study/travel × 中英）: 加尔加诺「意大利的马刺」、阿尔塔穆尔杰（本库译「上穆尔杰」，同一地物）喀斯特台地。核实 2026-09-11
    travel: {
    "zh-CN":
      "罗马到巴里飞约五十五分钟，同一时区。高铁约四小时，多数人会选飞机。巴里比罗马更干燥，夏季炎热。" +
      "靠窗能看到亚平宁山脉、加尔加诺半岛的森林和阿尔塔穆尔杰的喀斯特地貌。以巴里为基地可去“石屋之城”阿尔贝罗贝洛（世界遗产）或加尔加诺半岛的海岸。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。巴里也是前往希腊、阿尔巴尼亚的渡轮港口。",
    "en-US":
      "Rome to Bari is about 55 minutes, in the same time zone. High-speed rail is about four hours, and most people fly. Bari is drier than Rome, with hot summers." +
      " From a window you see the Apennines, the forests of the Gargano Promontory and the karst landscape of the Alta Murgia. From Bari you can visit 'the town of stone houses', Alberobello (a World Heritage Site), or the Gargano coast." +
      " Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. Bari is also a ferry port to Greece and Albania.",
    },
  },

  "pek-fco": {
    // study sources: 全四段（study/travel × 中英）: 亚平宁「纵贯意大利半岛的脊梁」与本库一致；里海水面原写「约 28 m」已改为「28–29 m、近年仍在下降」。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞罗马，向西横跨亚欧大陆，全程约八千五百公里，终点在地中海中部的意大利半岛。起飞后先进入蒙古高原南缘的戈壁，砾石滩延伸到天际线，年降水多在两百毫米以下，河流稀少且多为季节性；地表几乎没有连续植被，风蚀留下坚硬的砾幂，冬季常有强风扬起沙尘，能见度骤降。越往西，砾漠逐渐让位给草原。再往西是萨雷阿尔卡草原——哈萨克丘陵上的干草原，地势和缓；春季融雪在洼地里积成大量季节性湖泊，是候鸟迁徙的重要中继站，夏季蒸发强烈，湖岸留下白色的盐壳。接着飞临里海，地球上面积最大的内陆水体，水面低于海平面约二十八至二十九米（近年仍在下降），北部浅、南部深，沿岸多盐沼与三角洲；由于没有出海口，水位随入流与蒸发逐年变化，近岸能看到一道道被遗弃的旧岸线。越过黑海之后进入巴尔干半岛上空，这里以石灰岩为主，喀斯特地貌发育，落水洞与地下河密布，山脊与谷地大体平行排列，向东南方向延伸。最后飞机跨过亚平宁山脉——纵贯意大利半岛的褶皱山系，是全境的脊梁，随后下降到台伯河下游平原，降落在罗马西南的菲乌米奇诺机场。",
    "en-US":
      "Beijing to Rome runs west across the Eurasian landmass, about 8,500 km in all, to the Italian peninsula in the central Mediterranean. After take-off the flight enters the Gobi Desert on the southern edge of the Mongolian Plateau, gravel flats stretching to the horizon under less than 200 millimetres of rain in most years, with few rivers and those mostly seasonal; almost no continuous vegetation forms, wind erosion has left a hard pavement, and strong winter winds lift dust off the surface sharply enough to cut visibility. The farther west it goes, the more the gravel desert gives way to steppe. Farther west lies the Saryarka steppe on the Kazakh Uplands, dry grassland on gentle relief where spring meltwater gathers into great numbers of seasonal lakes, an important staging ground for migratory birds; evaporation is strong in summer and leaves white salt crusts along their shores. The route then reaches the Caspian Sea, the largest inland body of water on Earth, its surface about 28–29 metres below sea level and still falling in recent years, shallow in the north and deep in the south, with salt marsh and delta along much of its shore; having no outlet to the ocean, its level shifts from year to year with inflow and evaporation, and abandoned former shorelines are visible in steps near the water. Beyond the Black Sea the flight crosses the Balkan Peninsula, largely limestone country with well-developed karst, dense with sinkholes and underground rivers, its ridges and valleys running broadly parallel and trending south-east. The aircraft finally crosses the Apennines, the folded range that forms the spine of the Italian peninsula, then descends over the lower Tiber plain to land at Fiumicino Airport south-west of Rome.",
    },
    travel: {
    "zh-CN":
      "北京到罗马约11小时25分钟，由中国国际航空波音777客机执飞。两地时差6-7小时（意大利夏令时期间6小时）。意大利夏季炎热干燥、冬季温和多雨，春秋最适合游览。" +
      "罗马菲乌米奇诺机场距市中心约30公里，机场快线火车（Leonardo Express）约32分钟直达罗马特米尼车站，也有区域列车和机场大巴可选。斗兽场、梵蒂冈、特雷维喷泉是市内三大代表性景点，热门景点建议提前在线预约门票避开长队。" +
      "意大利属申根区，签证按国籍不同、以意大利外交部/驻华使领馆最新公布为准，行前务必核实并预留办理时间。罗马部分教堂对衣着有要求（不得穿无袖上衣/短裤入内），参观前建议随身备一件薄外套或披肩。",
    "en-US":
      "Beijing to Rome takes about 11 hours 25 minutes on an Air China Boeing 777. The time difference is 6-7 hours (6 hours during Italian summer time). Italy has hot, dry summers and mild, rainy winters, with spring and autumn best for sightseeing." +
      " Rome Fiumicino Airport is about 30 km from the city centre; the Leonardo Express train takes about 32 minutes direct to Roma Termini, and regional trains or airport buses are also options. The Colosseum, the Vatican and the Trevi Fountain are the city's three signature sights — book tickets online in advance for the popular ones to skip the lines." +
      " Italy is in the Schengen area; visa rules vary by nationality — check the latest from the Italian Ministry of Foreign Affairs or its consulate for your location and allow time to arrange one. Some Roman churches enforce a dress code (no sleeveless tops or shorts) — it's worth carrying a light jacket or shawl for visits.",
    },
  },
};
