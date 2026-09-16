import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  // can-tas sources（2026-09-15 首写；核实 2026-09-15 当批（content-verifier 独立检索，两套解说全部 ok））：云贵高原喀斯特地貌、横断山脉南北向平行山岭与深谷、昆仑山、塔克拉玛干沙漠（china 各地形条目）；
  // 费尔干纳盆地三面环山只向西敞开、边缘绿洲带与中部沙地（gov.uz 1 级 + BSE 2 级，见 fergana-valley 条目）；锡尔河在盆地东部汇成（BSE 2 级）；
  // 南航 CZ3053 A330-300、约 7 h 15 min（见 data/routes/can-tas.json source）；塔什干机场距市中心直线约 5.9 km（按坐标算）；抵达 3 天内须登记居留、住酒店由酒店代办（英国外交部，1 级）；
  // 塔什干市与塔什干州分开（宪法 + 普查，1 级）；塔什干—撒马尔罕高速列车最快约 2 h 13（铁路官方接口，1 级）；苏姆、主要城市以外刷卡难（英国外交部，1 级）。
  // 零争议：航线经过的邻国、边界、飞地不写；签证天数、价格不写。
  "can-tas": {
    study: {
      "zh-CN":
        "广州飞塔什干，是一条从华南一路向西北、斜穿中国西部高原与沙漠、最后进入中亚河谷绿洲的航线。飞机离开珠江三角洲，向西越过两广丘陵，下方很快出现云贵高原：这里是大片的石灰岩地区，雨水沿着岩石裂隙溶蚀，留下峰丛、洼地和地下河，地面起伏破碎，河流深切在高原里。" +
        "继续向西北，地势陡然升高，横断山脉出现在下方。这里的山脉与河谷大致南北走向，一道道高山和一条条深谷平行排列，几条大河在谷底并排向南奔流——它们「横断」了东西向的交通，山名由此而来。" +
        "越过横断山，飞机进入青藏高原的上空。高原面平均海拔很高，地表是开阔的高寒草原、湖泊和雪山，河流在这里还只是蜿蜒的浅水。高原北缘是昆仑山，一道东西向的高大山脉，山脊上是冰川和雪峰，把高原与北面的盆地截然分开。" +
        "翻过昆仑山，地面骤然降低，塔里木盆地里的塔克拉玛干沙漠铺满视野：这是一片流动沙丘占主体的大沙漠，沙丘层层叠叠，盆地边缘的山麓有一串绿洲，靠高山冰雪融水生存。" +
        "飞过沙漠西部，前方是连绵的高山。越过这些山地之后，下方出现一个被群山三面环抱、只向西敞开的大盆地——费尔干纳盆地。盆地边缘沿山脚是一圈连续的绿洲，冲积扇上的河道呈扇形分汊；锡尔河就在盆地东部汇合而成，沿着盆地中线向西流去。" +
        "飞机出盆地向西，越过最后一道山岭，降落在塔什干。这座城市建在奇尔奇克河的冲积平原上，是中亚河谷绿洲里的一座大城。",
      "en-US":
        "Guangzhou to Tashkent runs north-west from southern China, cutting diagonally across the plateaus and deserts of western China before entering the river oases of Central Asia. Leaving the Pearl River delta and crossing the hills of Guangdong and Guangxi westwards, the flight soon has the Yunnan–Guizhou Plateau below: a vast limestone region where rainwater dissolving along cracks in the rock has left clusters of peaks, sinkholes and underground rivers, a broken, rugged surface with rivers cut deep into the plateau. " +
        "Further north-west the ground rises steeply and the Hengduan Mountains appear. Here ranges and valleys run roughly north to south, high ridges and deep valleys lined up in parallel, with several great rivers flowing south side by side in the valley floors — they cut across east–west travel, which is where the name, meaning transverse barrier, comes from. " +
        "Beyond the Hengduan the flight enters the skies over the Tibetan Plateau. The plateau surface stands very high, an open expanse of alpine grassland, lakes and snow peaks, where rivers are still shallow, winding streams. On the plateau's northern edge rise the Kunlun Mountains, a lofty east–west range with glaciers and snow peaks along its crest, sharply dividing the plateau from the basin to the north. " +
        "Over the Kunlun the ground drops abruptly and the Taklamakan Desert in the Tarim Basin fills the view: a great desert dominated by shifting dunes, ridge after ridge of sand, with a chain of oases along the mountain foot at the basin's edge, living on meltwater from high-mountain snow and ice. " +
        "Past the western desert, high mountains stretch ahead. Beyond them a great basin appears below, ringed by mountains on three sides and open only to the west — the Fergana Valley. Along the foot of the mountains runs a continuous ring of oases, with river channels branching like fans across the alluvial fans; the Syr Darya forms in the east of the valley and flows west along its centre. " +
        "Leaving the valley westwards and crossing a last ridge, the flight lands at Tashkent, built on the alluvial plain of the Chirchiq River, a large city among the river oases of Central Asia.",
    },
    travel: {
      "zh-CN":
        "广州到塔什干约七个多小时，这条航线由中国南方航空执飞。乌兹别克斯坦的签证与入境要求按国籍不同，以乌兹别克斯坦驻当地使领馆最新公布为准，行前确认。" +
        "抵达后3天内须办理居留登记，住酒店由酒店代办，住私宅要由房东办理。塔什干国际机场离市中心直线约5.9公里，打车进城很方便。" +
        "塔什干市与周围的塔什干州是两个不同的行政单位，找住处和看地址时要留意。货币是苏姆，主要城市里刷卡较方便，出了大城市要备好现金。" +
        "去撒马尔罕、布哈拉等古城坐高速列车最方便，塔什干到撒马尔罕最快约2小时13分，热门车次最好提前买票。4–5月与9–10月最舒适，7–8月非常炎热。",
      "en-US":
        "Guangzhou to Tashkent takes a little over seven hours, and the route is operated by China Southern Airlines. Visa and entry requirements for Uzbekistan vary by nationality and are as most recently published by Uzbekistan's embassy or consulate in your country — confirm before travelling. " +
        "Your stay must be registered within 3 days of arrival; hotels do this for you, while in a private home the host must do it. Tashkent International Airport is about 5.9 km in a straight line from the centre and easy to reach by taxi. " +
        "Tashkent City and the surrounding Tashkent Region are two separate administrative units, worth bearing in mind when looking for accommodation and reading addresses. The currency is the sum; cards are fairly easy to use in the main cities, but carry cash once you leave them. " +
        "High-speed trains are the easiest way to the historic cities such as Samarkand and Bukhara, with Tashkent to Samarkand taking as little as about 2 hours 13 minutes; popular trains are best booked ahead. April–May and September–October are the most comfortable, and July–August is extremely hot.",
    },
  },
  // pek-tas sources（2026-09-16 首写；核实 2026-09-16 当批（content-verifier 独立检索，航班号机型时长与两套解说无 wrong；地貌描述沿用已核实的地形条目））：阴山东西向山墙、南为河套灌溉平原北为草原戈壁（china yinshan 条目）；戈壁是砾质荒漠、与沙漠不同（china gobi 条目）；
  // 天山横贯新疆中部、平行山脊与冰川、山前冲积扇与绿洲城市（china tianshan 条目）；伊犁河谷朝西敞开的三角形谷地、曲流与农田、云杉林与高山草甸（china ili-valley 条目）；
  // 伊塞克湖湖面海拔约 1,600 m、东西长约 180 km、最深约 670 m、冬季基本不封冻（kyrgyzstan issyk-kul 条目）；吉尔吉斯山脉是楚河谷地南壁（kyrgyzstan kyrgyz-ala-too 条目）；
  // 恰特卡尔山为天山西段伸入乌兹别克斯坦东北部的褶皱山岭、向西南降到塔什干周边山麓平原（uzbekistan chatkal-range 条目）；塔什干建在奇尔奇克河冲积平原上（同 can-tas）；
  // 大圆距离约 3,940 km（按两端机场坐标算）；国航 CA777、波音 737、约 6 h 55 min（见 data/routes/pek-tas.json source，首都机场官网 + 塔什干机场屏，1 级）。旅游段口径同 can-tas。
  // 零争议：航线经过的邻国、边界不写；签证天数、价格不写。
  "pek-tas": {
    study: {
      "zh-CN":
        "北京飞塔什干，全程约3900公里，是一条大致沿着北纬四十度一线向西、横穿中国北方干旱带与天山，最后抵达中亚河谷绿洲的航线。飞机从北京首都国际机场起飞，向西越过华北平原北缘的山地，很快进入内蒙古高原。下方出现一道东西走向、颜色偏灰褐的山墙，这是阴山：南边是引黄河水灌溉的绿色河套平原，北边是干旱的草原和戈壁，反差强烈。" +
        "继续向西，地面越来越干。内蒙古西部是大片灰褐色、深浅斑驳的砾质荒漠，这就是戈壁。戈壁和沙漠不同：沙漠的地表是沙，戈壁的地表是砾石和粗砂，只有沿着季节性河道和地下水浅的地方才有稀疏的植被。" +
        "再往西，前方出现白色的雪峰，这是天山。它横贯新疆中部，把新疆分成南北两半；从空中能看到连续平行的东西向山脊、山顶的冰川与积雪，山前是一排巨大的冲积扇，扇缘上是一串绿洲城市。" +
        "沿着天山继续向西，群山之间出现一片朝西敞开的三角形谷地，谷底是伊犁河的曲流和大片方格农田，两侧山坡是深色的云杉林和高山草甸，这就是伊犁河谷。" +
        "飞过谷地西端，下方是一片深蓝色的长条湖面，两岸被雪山夹住，这是伊塞克湖。它的湖面海拔约1600米，东西长约180公里，最深处约670米，冬天湖面基本不封冻；北岸是黄绿色的向阳坡，南岸是积雪的高山。" +
        "湖的西面，一道东西向的长墙横在北部低地的南缘，这是吉尔吉斯山脉：北侧山脚是棋盘般的灌溉农田，山坡被峡谷切成一条条，脊线上是积雪和冰川。" +
        "飞机向西南开始下降，越过层层叠叠的恰特卡尔山脉，这是天山西段伸出的褶皱山岭，高处是裸岩与草甸，山坡上有针叶林和圆柏，越往西南山岭越低，最后降到塔什干周边的山麓平原。飞机在塔什干降落，这座城市建在奇尔奇克河的冲积平原上。",
      "en-US":
        "Beijing to Tashkent covers about 3,900 km, a route that runs west roughly along the 40th parallel, across the dry belt of northern China and the Tian Shan, to the river oases of Central Asia. Taking off from Beijing Capital International Airport and crossing the hills on the northern edge of the North China Plain, the flight soon reaches the Inner Mongolian Plateau. Below appears an east–west wall of greyish-brown mountains — the Yin Mountains — with the green, Yellow River-irrigated Hetao Plain to the south and dry grassland and gobi to the north, a sharp contrast. " +
        "Further west the ground grows ever drier. Western Inner Mongolia is a vast mottled grey-brown gravel desert — the Gobi. Gobi is not the same as sand desert: a sand desert is covered in sand, while gobi is surfaced with gravel and coarse sand, with sparse vegetation only along seasonal channels and where groundwater lies shallow. " +
        "Further west white snow peaks appear ahead — the Tian Shan. The range runs across the middle of Xinjiang, dividing it into north and south; from the air you see continuous parallel east–west ridges, glaciers and snow on the summits, and a line of huge alluvial fans at the mountain foot with a string of oasis cities along their edges. " +
        "Following the Tian Shan west, a triangular valley opening to the west appears among the mountains, with the meanders of the Ili River and broad chequerboard fields on its floor and dark spruce forest and alpine meadows on the slopes — the Ili Valley. " +
        "Past the western end of the valley lies a long, deep blue lake squeezed between snow mountains — Issyk-Kul. Its surface is about 1,600 m above sea level, it is about 180 km long from east to west and about 670 m at its deepest, and it largely stays unfrozen in winter; the north shore is a yellow-green sunny slope, the south shore a wall of snowy mountains. " +
        "West of the lake, an east–west wall runs along the southern edge of the northern lowlands — the Kyrgyz Range — with chequerboard irrigated fields at its northern foot, slopes cut into strips by gorges, and snow and glaciers along the crest. " +
        "The flight begins its descent to the south-west over the tiered Chatkal Range, folded ridges thrown out by the western Tian Shan, bare rock and meadow on the heights and conifers and juniper on the slopes, the ridges growing lower to the south-west until they fall to the foothill plains around Tashkent. The flight lands at Tashkent, a city built on the alluvial plain of the Chirchiq River.",
    },
    travel: {
      "zh-CN":
        "北京到塔什干约6小时55分，这条航线由中国国际航空执飞。乌兹别克斯坦的签证与入境要求按国籍不同，以乌兹别克斯坦驻当地使领馆最新公布为准，行前确认。" +
        "抵达后3天内须办理居留登记，住酒店由酒店代办，住私宅要由房东办理。塔什干国际机场离市中心直线约5.9公里，打车进城很方便。" +
        "塔什干市与周围的塔什干州是两个不同的行政单位，找住处和看地址时要留意。货币是苏姆，主要城市里刷卡较方便，出了大城市要备好现金。" +
        "去撒马尔罕、布哈拉等古城坐高速列车最方便，塔什干到撒马尔罕最快约2小时13分，热门车次最好提前买票。4–5月与9–10月最舒适，7–8月非常炎热。",
      "en-US":
        "Beijing to Tashkent takes about 6 hours 55 minutes, and the route is operated by Air China. Visa and entry requirements for Uzbekistan vary by nationality and are as most recently published by Uzbekistan's embassy or consulate in your country — confirm before travelling. " +
        "Your stay must be registered within 3 days of arrival; hotels do this for you, while in a private home the host must do it. Tashkent International Airport is about 5.9 km in a straight line from the centre and easy to reach by taxi. " +
        "Tashkent City and the surrounding Tashkent Region are two separate administrative units, worth bearing in mind when looking for accommodation and reading addresses. The currency is the sum; cards are fairly easy to use in the main cities, but carry cash once you leave them. " +
        "High-speed trains are the easiest way to the historic cities such as Samarkand and Bukhara, with Tashkent to Samarkand taking as little as about 2 hours 13 minutes; popular trains are best booked ahead. April–May and September–October are the most comfortable, and July–August is extremely hot.",
    },
  },
};
