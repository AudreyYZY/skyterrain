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
};
