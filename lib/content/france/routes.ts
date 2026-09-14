import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "cdg-nce": {
    // study sources: 全四段（study/travel × 中英）: 凡尔登「常被称作欧洲最深的峡谷之一」（#264 前已修）；多姆山链与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "巴黎飞尼斯，从法国北部一路飞到地中海岸，横穿这个国家的几个主要地形单元。起飞后先越过巴黎盆地——一个巨大的沉积盆地，塞纳河及其支流在这里冲出层层叠叠的低丘和田野，法国近一半人口住在这一带。" +
      "往南地面渐渐隆起，进入中央高原：一大片以死火山为主的老高原，多姆山链一带的熔岩穹丘和火口湖清晰可辨，是欧洲少见的、地表还能读出火山轮廓的地区之一。" +
      "越过高原东南缘，罗讷河河谷出现在脚下——这条从阿尔卑斯冰川发源、一路收纳支流南下的大河，是连接法国北部与地中海的历史通道。" +
      "接近尼斯，地面变成普罗旺斯阿尔卑斯的山地，凡尔登峡谷——常被称作欧洲最深的峡谷之一，由绿松石色的河水切出——就在这一带，最后飞机沿海岸线降落，蔚蓝海岸的弧形海湾展开在眼前。",
    "en-US":
      "Paris to Nice flies from the north of France to the Mediterranean coast, crossing several of the country's major landform provinces. After take-off you cross the Paris Basin — a huge sedimentary basin where the Seine and its tributaries have carved layered low hills and fields, home to nearly half of France's population." +
      " South the land gradually rises into the Massif Central: a large old plateau of mostly extinct volcanoes, with the lava domes and crater lakes of the Chaîne des Puys clearly visible — one of the few places in Europe where volcanic shapes are still readable on the surface." +
      " Over the south-eastern edge of the plateau, the Rhône valley appears below — the great river that rises from Alpine glaciers and gathers tributaries flowing south, historically the corridor linking northern France to the Mediterranean." +
      " Approaching Nice, the land becomes the mountains of the Provençal Alps, with the Gorges du Verdon — often called one of Europe's deepest canyons, cut by turquoise water — in this area, and finally the plane follows the coastline down to the curved bay of the Côte d'Azur.",
    },
    travel: {
    "zh-CN":
      "巴黎到尼斯飞约一小时半，同一时区。也可坐高铁（约 5.5 小时），但多数人选择飞。巴黎四季分明，尼斯是地中海气候、冬季温和、夏季炎热干燥。" +
      "靠窗依次能看到巴黎盆地的农田、中央高原的死火山、罗讷河谷、普罗旺斯的山地和最后的蔚蓝海岸。尼斯机场紧邻海岸、电车直达市区。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Nice is about an hour and a half, in the same time zone. You can also take high-speed rail (about 5.5 hours), but most people fly. Paris has four clear seasons; Nice has a Mediterranean climate, mild in winter and hot and dry in summer." +
      " From a window you see, in turn, the farmland of the Paris Basin, the extinct volcanoes of the Massif Central, the Rhône valley, the mountains of Provence and finally the Côte d'Azur. Nice airport is right on the coast, with a tram straight into the city." +
      " France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "cdg-mrs": {
    // study sources: 全四段（study/travel × 中英）: 罗讷河谷、卡马格三角洲与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "巴黎飞马赛，是法国最经典的南北纵贯航线之一，走的路线和高铁东南线大致平行。起飞后先越过巴黎盆地的农田和低丘，然后进入中央高原——法国最大的死火山群所在地，多姆山链的熔岩穹丘从空中很好辨认。" +
      "越过高原南缘，罗讷河谷出现在脚下：这条大河把中央高原和阿尔卑斯山分开，河谷两岸是葡萄园（罗讷河谷是法国重要的葡萄酒产区之一）。" +
      "接近马赛，罗讷河在一片低平的三角洲——卡马尔格——散开入海，这里是大片湿地、盐沼和野生白马、火烈鸟的栖息地。马赛就在卡马尔格以东的一片石灰岩海岸边。",
    "en-US":
      "Paris to Marseille is one of France's classic north–south routes, roughly parallel to the high-speed rail line to the south-east. After take-off you cross the farmland and low hills of the Paris Basin, then the Massif Central — France's largest cluster of extinct volcanoes, the lava domes of the Chaîne des Puys easily picked out from the air." +
      " Over the southern edge of the plateau, the Rhône valley appears below: the great river separating the Massif Central from the Alps, its banks lined with vineyards (the Rhône valley is an important French wine region)." +
      " Approaching Marseille, the Rhône spreads into the sea across a flat delta, the Camargue — a wetland of marshes, salt flats, wild white horses and flamingos. Marseille is on a limestone coast just east of the Camargue.",
    },
    travel: {
    "zh-CN":
      "巴黎到马赛飞约一小时二十分，同一时区。高铁约 3.2 小时，很多人也会选火车。马赛属地中海气候，夏季炎热干燥，常有干冷的密史脱拉风。" +
      "靠窗能看到中央高原的火山地貌和罗讷河三角洲的卡马尔格湿地。马赛机场进城有机场大巴。以马赛为起点可去卡朗格峡湾岸徒步、坐船去伊夫堡。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Marseille is about an hour and twenty minutes, in the same time zone. High-speed rail is about 3.2 hours, and many people choose the train. Marseille has a Mediterranean climate, hot and dry in summer, often with the dry, cold Mistral wind." +
      " From a window you see the volcanic landscape of the Massif Central and the Camargue wetland at the Rhône delta. There's an airport bus into Marseille. From Marseille you can hike the Calanques coast or take a boat to the Château d'If." +
      " France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "cdg-tls": {
    // study sources: 全四段（study/travel × 中英）: 塔恩峡谷、图卢兹「玫瑰之城」与空客总部与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "巴黎飞图卢兹，从法国北部飞到西南部的“玫瑰之城”，也是空客总部所在地。起飞后先越过巴黎盆地——塞纳河冲出的层叠丘陵和田野。" +
      "航线中段掠过中央高原西南缘：这一带没有多姆山链那样密集的火山锥，而是被河流切出的深峡谷（塔恩峡谷等就在附近），高原边缘陡然跌落到阿基坦盆地。" +
      "越过高原，地面变成阿基坦盆地——加龙河及其支流冲积出的一片开阔平原，图卢兹就在盆地东缘、加龙河畔，因大量使用当地烧制的粉红砖瓦而得名“玫瑰之城”。",
    "en-US":
      "Paris to Toulouse flies from the north of France to the 'Pink City' of the south-west, also home to Airbus's headquarters. After take-off you cross the Paris Basin — the layered hills and fields cut by the Seine." +
      " Mid-flight the route skirts the south-western edge of the Massif Central: this stretch lacks the dense volcanic cones of the Chaîne des Puys, instead cut by deep river gorges (the Gorges du Tarn and others are nearby), with the plateau edge dropping sharply to the Aquitaine Basin." +
      " Beyond the plateau the land becomes the Aquitaine Basin — a broad plain built by the Garonne and its tributaries — and Toulouse is on the eastern edge of the basin, on the Garonne, named 'the Pink City' for its widespread use of locally fired pink brick.",
    },
    travel: {
    "zh-CN":
      "巴黎到图卢兹飞约一小时十五分，同一时区。高铁约 4.5 小时，多数商务和长途旅客会选飞机。图卢兹夏季炎热干燥、冬季温和，受大西洋和地中海双重影响。" +
      "靠窗能看到中央高原西南缘的地形和阿基坦盆地的农田。图卢兹机场有轨道接驳市区。空客工厂参观需提前很久在线预约。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Toulouse is about an hour and fifteen minutes, in the same time zone. High-speed rail is about 4.5 hours, and most business and long-distance travellers fly. Toulouse has hot, dry summers and mild winters, influenced by both the Atlantic and the Mediterranean." +
      " From a window you see the terrain of the south-western Massif Central and the farmland of the Aquitaine Basin. Toulouse airport has a rail link into the city. Airbus factory tours need booking well ahead online." +
      " France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "cdg-bod": {
    // study sources: 全四段（study/travel × 中英）: 波尔多「月亮港」、皮拉沙丘「欧洲最高沙丘」（未写会过期的高度）与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "巴黎飞波尔多，是法国两大沉积盆地之间的一条短航线。起飞后先越过巴黎盆地——一片被塞纳河及支流冲积、层层叠叠的低丘农田，法国近一半人口住在这个盆地里。" +
      "航线大部分时间在盆地之间的过渡地带飞行，越往南地势越低平、越接近海平面，森林和牧场渐渐取代了密集的农田。接近波尔多，地面完全变成阿基坦盆地：加龙河及其支流冲积出的开阔平原，两岸是世界知名的葡萄园——梅多克在左岸、圣埃美隆在右岸，从空中能看到成排的葡萄藤纹理。" +
      "波尔多城就建在加龙河一个新月形的河湾里，因此被称为“新月之城”，18 世纪的石造联排建筑沿河岸连成一片。",
    "en-US":
      "Paris to Bordeaux is a short flight between France's two great sedimentary basins. After take-off you cross the Paris Basin — layered low hills and farmland built by the Seine and its tributaries." +
      " Most of the flight is over the transition zone between the two basins, the land growing flatter and closer to sea level heading south. Approaching Bordeaux, the land is entirely the Aquitaine Basin: a broad plain built by the Garonne and its tributaries, with world-famous vineyards on both banks — the Médoc on the left, Saint-Émilion on the right." +
      " The city of Bordeaux is built in a crescent-shaped bend of the Garonne, hence its name 'the Port of the Moon'.",
    },
    travel: {
    "zh-CN":
      "巴黎到波尔多飞约一小时十分，同一时区。高铁约 2 小时（大西洋线通车后大幅缩短），很多人会坐火车。波尔多受大西洋调节，温和湿润。" +
      "靠窗能看到两大盆地之间的地形过渡、以及波尔多周边的葡萄园。以波尔多为基地可去圣埃美隆或梅多克酒庄参观品鉴（多数需预约），也可以去皮拉大沙丘（欧洲最高沙丘）。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Bordeaux is about an hour and ten minutes, in the same time zone. High-speed rail is about 2 hours (much shorter since the Atlantic line opened), and many people take the train. Bordeaux is moderated by the Atlantic, mild and humid." +
      " From a window you see the transition between the two basins and the vineyards around Bordeaux. From Bordeaux you can visit Saint-Émilion or a Médoc estate for a tasting (mostly by appointment), or the Dune du Pilat, Europe's tallest sand dune." +
      " France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },


  "cdg-nte": {
    // study sources: 全四段（study/travel × 中英）: 卢瓦尔河法国最长（约 1006 km）、卢瓦尔河谷列入 UNESCO 与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "巴黎飞南特，沿着塞纳河流域和卢瓦尔河流域之间的分水岭往西南飞。起飞后先越过巴黎盆地西缘——农田和低丘缓缓向大西洋倾斜，田块比盆地中心更疏朗。" +
      "航线后半段贴近卢瓦尔河：法国最长的河流，从中央高原发源，一路向西北流经图尔、昂热，沿岸是著名的城堡带（卢瓦尔河谷因为这些王室和贵族城堡被列为世界遗产），河道宽阔、常年多沙洲。" +
      "南特就在卢瓦尔河即将入海前的河口一带，历史上是重要的大西洋港口，也曾是造船中心，卢瓦尔河的宽阔和缓慢从空中很好辨认，往西不远就是大西洋。",
    "en-US":
      "Paris to Nantes flies south-west along the watershed between the Seine and Loire basins. After take-off you cross the western edge of the Paris Basin — farmland and low hills sloping gently toward the Atlantic." +
      " The second half of the flight follows the Loire: France's longest river, rising in the Massif Central and flowing north-west past Tours and Angers, its banks lined with the famous château belt (the Loire valley is a World Heritage Site for these royal and noble castles)." +
      " Nantes is near the mouth of the Loire, not far from where it reaches the sea, historically an important Atlantic port, and the river's width and slow flow are easy to pick out from the air.",
    },
    travel: {
    "zh-CN":
      "巴黎到南特飞约五十五分钟，同一时区。高铁约 2 小时，很多人会选火车。南特受大西洋调节，气候温和湿润，很少极端天气。" +
      "靠窗能看到巴黎盆地和卢瓦尔河。南特机场有机场大巴。城市本身有机械岛的巨型机械大象，往东可安排卢瓦尔河谷城堡一日游（图尔或布卢瓦作为基地更近）。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Nantes is about 55 minutes, in the same time zone. High-speed rail is about 2 hours, and many people choose the train. Nantes is moderated by the Atlantic, mild and humid, rarely extreme." +
      " From a window you see the Paris Basin and the Loire. Nantes airport has an airport bus. The city itself has the giant mechanical elephant on the Île de Nantes, and a day trip east to the Loire château cluster is possible (Tours or Blois make a closer base)." +
      " France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "lys-mrs": {
    // study sources: 全四段（study/travel × 中英）: 韦科尔二战抵抗据点（简短史实）、阿尔克桥跨度约 59 m 与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "里昂飞马赛，沿罗讷河谷南下，是一条很短却地貌丰富的线。起飞后不久，右侧（西侧）能看到韦科尔高原——一块被陡崖围住的石灰岩台地，二战期间是抵抗运动的据点之一（简短史实）。" +
      "继续南飞，脚下出现阿尔代什峡谷：一条河流在石灰岩高原上切出的深峡谷，谷中的阿尔克桥是一座跨度约 59 米的天然石桥。" +
      "接近马赛，罗讷河在卡马尔格散开入海——一片大面积的湿地、盐沼三角洲，是野生白马、黑牛和火烈鸟的栖息地。马赛就在卡马尔格以东的石灰岩海岸边。",
    "en-US":
      "Lyon to Marseille runs south down the Rhône valley, a short flight but rich in landforms. Soon after take-off, to the right (west) is the Vercors plateau — a limestone tableland ringed by cliffs, a stronghold of the French Resistance during the Second World War (a brief historical fact)." +
      " Flying on south, the Gorges de l'Ardèche appears below: a deep canyon a river has cut into a limestone plateau, with the Pont d'Arc, a natural stone bridge about 59 m across, inside it." +
      " Approaching Marseille, the Rhône spreads into the sea at the Camargue — a large wetland and salt-marsh delta, home to wild white horses, black cattle and flamingos. Marseille is on the limestone coast just east of the Camargue.",
    },
    travel: {
    "zh-CN":
      "里昂到马赛飞约四十分钟，同一时区。高铁约 1.7 小时，很多人会选火车。两地都属地中海/温带过渡气候，马赛更暖更干。" +
      "靠窗能看到韦科尔高原、阿尔代什峡谷和卡马尔格湿地。以马赛为终点可继续去卡朗格峡湾岸徒步。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Lyon to Marseille is about 40 minutes, in the same time zone. High-speed rail is about 1.7 hours, and many people choose the train. Both cities have a Mediterranean/temperate transitional climate, Marseille warmer and drier." +
      " From a window you see the Vercors plateau, the Gorges de l'Ardèche and the Camargue wetland. From Marseille you can continue on to hike the Calanques coast." +
      " France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "mrs-aja": {
    // study sources: 全四段（study/travel × 中英）: 卡朗格、科西嘉二十多座峰超 2000 m、阿雅克肖为拿破仑出生地；未涉科西嘉现代政治。核实 2026-09-11
    study: {
    "zh-CN":
      "马赛飞阿雅克肖，从法国本土飞到地中海上的科西嘉岛。起飞后不久就能看到卡朗格——马赛和卡西斯之间一段石灰岩峡湾海岸，陡峭的白色崖壁直插进湛蓝的海水，是法国最上镜的海岸线之一。" +
      "接着是一段开阔的地中海海面，飞行约一小时后，科西嘉岛的轮廓出现：一座多山的岛屿，中央脊由一系列 2000 米以上的花岗岩峰组成，海岸线曲折，兼有沙滩、峡湾式港湾和悬崖。" +
      "阿雅克肖就在岛屿西岸一个宽阔的海湾里，是拿破仑·波拿巴的出生地。",
    "en-US":
      "Marseille to Ajaccio flies from mainland France to the island of Corsica in the Mediterranean. Soon after take-off comes the Calanques — a limestone fjord coastline between Marseille and Cassis, steep white cliffs dropping straight into deep blue water, one of France's most photographed coastlines." +
      " Then a stretch of open Mediterranean, and after about an hour the outline of Corsica appears: a mountainous island whose central spine is a series of granite peaks over 2,000 m, with a very indented coastline combining beaches, fjord-like inlets and cliffs." +
      " Ajaccio is on the island's west coast, in a broad bay, the birthplace of Napoleon Bonaparte.",
    },
    travel: {
    "zh-CN":
      "马赛到阿雅克肖飞约五十分钟，同一时区。也可坐渡轮（约 6–10 小时，视航线而定）。科西嘉属地中海气候，夏季炎热干燥、冬季温和多雨，内陆山区冬季有雪。" +
      "靠窗能看到卡朗格峡湾岸和地中海，接近科西嘉时能看到岛屿多山的轮廓。岛内交通以自驾为主，山路多弯。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Marseille to Ajaccio is about 50 minutes, in the same time zone. There is also a ferry (about 6–10 hours, depending on the route). Corsica has a Mediterranean climate, hot and dry in summer, mild and rainy in winter, with snow in the inland mountains in winter." +
      " From a window you see the Calanques coast and the Mediterranean, and as you approach Corsica the mountainous outline of the island. Getting around the island is mostly by car, with many bends in the mountain roads." +
      " France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "nce-aja": {
    // study sources: 全四段（study/travel × 中英）: 钦托山 2706 m 与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "尼斯飞阿雅克肖，是蔚蓝海岸和科西嘉岛之间最短的航线，几乎全程在地中海上空飞行。起飞后很快离开法国本土海岸，飞越一片开阔的蓝色海面——这段海域是利古里亚海的一部分，法国、意大利和科西嘉之间的三角海域。" +
      "飞行约四十分钟后，科西嘉岛北端的山影出现在海面上：岛屿中央是一条由花岗岩组成的高峻山脊，最高峰钦托山超过 2700 米，山顶常年有积雪。" +
      "阿雅克肖在岛屿西岸，飞机沿海岸线下降时能看到曲折的海湾、白色沙滩和陡峭的岬角。",
    "en-US":
      "Nice to Ajaccio is the shortest route between the Côte d'Azur and Corsica, flown almost entirely over the Mediterranean. After take-off you soon leave the mainland French coast, crossing open blue water — part of the Ligurian Sea, the triangular sea between France, Italy and Corsica." +
      " After about 40 minutes the mountain silhouette of northern Corsica appears over the water: the island's centre is a high granite ridge, its highest peak, Monte Cinto, over 2,700 m and often snow-capped." +
      " Ajaccio is on the island's west coast, and as the plane descends along the coastline you can see the winding bays, white beaches and steep headlands.",
    },
    travel: {
    "zh-CN":
      "尼斯到阿雅克肖飞约四十五分钟，同一时区。也有渡轮但耗时更长。科西嘉夏季炎热干燥、是法国人自己也爱去的海岛度假地，7–8 月航班和渡轮都很紧张。" +
      "靠窗全程基本是地中海海面，接近科西嘉时能看到多山的岛屿轮廓。岛内自驾山路多弯，晕车者备药。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Nice to Ajaccio is about 45 minutes, in the same time zone. There is also a ferry but it takes much longer. Corsica has hot, dry summers and is a beloved holiday island for the French themselves, so flights and ferries are tight in July–August." +
      " From a window it is mostly Mediterranean sea the whole way, with the mountainous outline of Corsica appearing near the end. Driving on the island means many bends in the mountain roads — bring motion-sickness medication if needed." +
      " France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "pek-cdg": {
    // study sources: 全四段（study/travel × 中英）: 「中国直飞西欧最繁忙的航线之一」带限定；乌拉尔约三亿年前碰撞造山；签证未写死。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞巴黎，向西北横跨亚欧大陆，全程约八千四百公里，终点在西欧的塞纳河盆地，是中国直飞西欧最繁忙的航线之一。起飞后爬升越过燕山，进入蒙古高原南缘的戈壁——砾石铺地、河流稀少的干旱带，年降水多在两百毫米以下，风把细沙吹走后留下坚硬的砾幂，被搬走的沙在下风处堆成沙丘带；昼夜温差可达三十度以上，聚落沿着为数不多的泉水和井分布。越往西北，荒漠逐渐让位给稀树草原。接着是西西伯利亚平原，世界上面积最大的平原之一，东西宽约一千五百公里，地表落差极小，河流蜿蜒，沼泽与湖泊连成大片。翻过乌拉尔山脉这道亚欧分界后，山势很快落回平地。这条古老山系南北绵延两千多公里，形成于约三亿年前的一次大陆碰撞，此后长期剥蚀，如今山脊平缓；两侧坡地的森林构成明显不同，山中的铁与铜矿支撑起沿线一串工业城市。再往西是东欧平原：由古老地台构成的开阔低地，起伏很小，河流舒缓，冬季常见大范围积雪。飞机在这里转向西南，掠过中欧的丘陵与河谷，地块与城镇的密度肉眼可见地上升，田野被公路和运河切成整齐的格子。最后进入巴黎盆地——一圈圈同心的沉积岩层构成的浅碟形凹地，塞纳河从中蜿蜒穿过，飞机降落在城市东北的戴高乐机场。",
    "en-US":
      "Beijing to Paris runs north-west across the Eurasian landmass, about 8,400 km in all, ending in the Seine basin of western Europe, and is one of the busiest nonstop routes from China to western Europe. After take-off the aircraft climbs over the Yan Mountains into the Gobi Desert on the southern edge of the Mongolian Plateau, an arid belt of gravel with few rivers where most years bring less than 200 millimetres of rain, the wind has stripped the fine sand away to leave a hard pavement and piled it downwind into belts of dune; the daily temperature can swing more than thirty degrees, and settlements follow the few springs and wells. The farther north-west the route goes, the more the desert gives way to open steppe. Next comes the West Siberian Plain, one of the largest plains on Earth, roughly fifteen hundred kilometres across, with almost no change in elevation, winding rivers and unbroken tracts of marsh and lake. Past the Ural Mountains, the conventional divide between Asia and Europe, the land drops back to the flat almost at once. This old range runs more than two thousand kilometres north to south; it rose in a continental collision some three hundred million years ago and has been eroded ever since, so its ridges are gentle, the forests on its two flanks differ markedly, and its iron and copper support a string of industrial cities along its length. Farther west lies the East European Plain, an open lowland on an ancient platform with very little relief, slow rivers and wide winter snow cover. The flight turns south-west across it and on over the hills and valleys of central Europe, where the density of fields and towns visibly rises and roads and canals cut the ground into neat blocks. It finally reaches the Paris Basin, a shallow dish of concentric sedimentary layers with the Seine winding through it, and lands at Charles de Gaulle Airport north-east of the city.",
    },
    travel: {
    "zh-CN":
      "北京到巴黎约10小时45分钟，时差7-8小时（法国夏令时期间7小时）。巴黎四季分明，夏季干爽、冬季湿冷多雨，春秋适合游览。" +
      "戴高乐机场距市中心约30公里，RER B线火车约35-50分钟到市区，也有机场大巴。地铁线路密集，一张Navigo周票或单程票即可通行。卢浮宫、奥赛博物馆等热门场馆建议提前在线订票，避开排队。" +
      "法国属申根区，签证按国籍不同、以法国驻当地使领馆最新公布为准，行前确认并预留办理时间。留意扒手多发的旅游区，随身财物妥善保管。",
    "en-US":
      "Beijing to Paris takes about 10 hours 45 minutes, with a 7–8 hour time difference (7 hours during French summer time). Paris has distinct seasons — dry summers, cold and wet winters, with spring and autumn best for sightseeing." +
      " Charles de Gaulle is about 30 km from the city centre; the RER B train takes roughly 35–50 minutes into town, and airport buses also run. The metro network is dense, and a Navigo weekly pass or single tickets cover it. Book ahead online for popular sites such as the Louvre and the Musée d'Orsay to skip the queues." +
      " France is in the Schengen area; visa rules vary by nationality — check the latest from the French consulate for your location and allow time to arrange one. Watch for pickpockets in busy tourist areas and keep valuables secure.",
    },
  },
};
