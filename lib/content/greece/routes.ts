import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "ath-skg": {
    study: {
    "zh-CN":
      "雅典飞塞萨洛尼基是希腊国内最繁忙的航线，从阿提卡一路向北飞越希腊本土中部，抵达马其顿地区。起飞后不久，脚下展开一片开阔的农田——色萨利平原，希腊面积最大的农业区，由皮尼奥斯河冲积而成，四周被品都斯山脉、奥特里斯山、皮利翁山与奥林匹斯山环绕。" +
      "飞机继续向北，一座临海耸立的雪峰渐渐出现在右侧——奥林匹斯山，希腊全境最高点，主峰米蒂卡斯海拔2917米，古希腊神话中被认为是众神的居所。越过奥林匹斯山，飞机沿爱琴海西岸继续北上，降落在塞萨洛尼基的萨洛尼卡湾畔。",
    "en-US":
      "Athens to Thessaloniki is Greece's busiest domestic route, flying north across the centre of the Greek mainland from Attica into Macedonia. Soon after take-off, open farmland unfolds below — the Thessalian Plain, Greece's largest agricultural region, built by the Pineios River and ringed by the Pindus range, Mount Othrys, Mount Pelion and Mount Olympus." +
      " Continuing north, a snow-capped peak rising straight from the sea appears to the right — Mount Olympus, the highest point in Greece, its summit Mytikas reaching 2,917 m and widely held in Greek mythology to be the home of the gods. Past Olympus the flight continues north along the Aegean coast, descending into Thessaloniki on the Thermaic Gulf.",
    },
    // travel sources: 全四段（study/travel × 中英）: 奥林匹斯米蒂卡斯峰 2917 m（2023 年 GPS 精测）与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅典到塞萨洛尼基飞约50分钟，两地同一时区，也可选择约4小时的城际列车。这是爱琴海航空最繁忙的国内航线之一，旺季班次密集，建议提前订票。塞萨洛尼基机场离市区约16公里，有公交连接市中心。塞萨洛尼基是希腊北部的门户，适合作为探索迈泰奥拉、哈尔基季基半岛及色萨利地区的中转站。希腊属申根区，多数国家公民短期旅游按申根区规定执行，货币为欧元，电压230V欧标两圆脚插头。",
    "en-US":
      "Athens to Thessaloniki is about 50 minutes, same time zone, or about 4 hours by intercity train. This is one of Aegean Airlines's busiest domestic routes, with frequent flights in peak season — book ahead. Thessaloniki Airport is about 16 km from the centre, linked by bus. Thessaloniki is the gateway to northern Greece, a good base for onward trips to Meteora, the Halkidiki Peninsula and Thessaly. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits. The currency is the euro, power is 230V with the European two-round-pin plug.",
    },
  },

  "ath-her": {
    study: {
    "zh-CN":
      "雅典飞伊拉克利翁，是一趟穿越爱琴海南部、抵达希腊最大岛屿克里特的航线。起飞后飞机向南跨越基克拉泽斯群岛所在的海域，先经过米洛斯岛——一座因多彩火山岩层与新石器时代黑曜岩贸易而闻名的火山岛，岛上的萨拉基尼科海岸由白色浮岩经海蚀风蚀成月球表面般的地貌；" +
      "随后是圣托里尼火山口——公元前约1600年一次青铜时代晚期的大规模喷发造成岛屿中央塌陷形成的破火山口，费拉、伊亚等城镇建在高约300米的火口崖顶上。飞机继续向南穿过克里特海，抵达克里特岛北岸的伊拉克利翁。",
    "en-US":
      "Athens to Heraklion crosses the southern Aegean to reach Crete, Greece's largest island. After take-off the flight heads south over the Cyclades, first passing Milos — a volcanic island known for its colourful rock layers and Neolithic obsidian trade, its Sarakiniko coast carved by wave and wind into a moon-like landscape of white pumice." +
      " Next comes the Santorini caldera, formed when a massive Late Bronze Age eruption around 1600 BCE collapsed the island's centre; towns such as Fira and Oia sit on cliffs about 300 m above the caldera. The flight continues south across the Cretan Sea to land at Heraklion on Crete's north coast.",
    },
    // travel sources: 全四段（study/travel × 中英）: 米洛斯火山成因与黑曜岩贸易、圣托里尼约公元前 1600 年喷发与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅典到伊拉克利翁飞约50分钟，两地同一时区，夏季旺季每天有多班航班，也可选择约9-10小时的夜间渡轮。伊拉克利翁机场离市区约5公里，有公交与出租车连接。克里特岛面积较大，从伊拉克利翁前往哈尼亚、拉西提高原等地建议租车或参加当地一日游。希腊属申根区，多数国家公民短期旅游按申根区规定执行，货币为欧元。",
    "en-US":
      "Athens to Heraklion is about 50 minutes, same time zone, with several daily flights in summer; an overnight ferry (about 9–10 hours) is another option. Heraklion Airport is about 5 km from the centre, linked by bus and taxi. Crete is a large island, so a rental car or organised day trip is recommended for reaching Chania or the Lasithi Plateau from Heraklion. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits, and the currency is the euro.",
    },
  },

  "ath-chq": {
    study: {
    "zh-CN":
      "雅典飞哈尼亚，是一趟横跨克里特海、直抵克里特岛西部的航线。起飞后飞机很快离开阿提卡海岸，进入开阔的克里特海——爱琴海南部的一片海域，介于基克拉泽斯群岛与克里特岛之间，是南爱琴海中面积较大的一片开阔水域。这段航程大部分时间只能看到蔚蓝的海面，偶尔可见远处星罗棋布的小岛，天气晴朗时能见度极佳。" +
      "接近克里特岛北岸时，哈尼亚湾逐渐显现，飞机沿海岸线下降；机场西侧不远就是威尼斯时期修筑的哈尼亚老港，环绕港口的彩色建筑与灯塔清晰可辨，也是克里特岛西部白山地区的门户，白山南坡的萨马利亚峡谷是欧洲最长的峡谷之一。",
    "en-US":
      "Athens to Chania crosses the Cretan Sea to reach western Crete. Soon after take-off the flight leaves the Attica coast and heads out over the open Cretan Sea, the stretch of the southern Aegean between the Cyclades and Crete. For most of the crossing there is little but blue water below, with occasional small islands scattered in the distance." +
      " As Crete's north coast approaches, the Bay of Chania comes into view and the plane descends along the coastline; just west of the airport lies the Venetian-era old harbour of Chania, gateway to the White Mountains of western Crete.",
    },
    // travel sources: 全四段（study/travel × 中英）: 萨马利亚峡谷「欧洲最长的峡谷之一」带限定。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅典到哈尼亚飞约45分钟，两地同一时区，夏季旺季航班密集。哈尼亚机场离老城约14公里，有公交与出租车连接。哈尼亚是探索克里特岛西部与白山地区的门户，也是徒步萨马利亚峡谷的理想落脚点，峡谷通常5月至10月开放，具体以国家公园当年公告为准。希腊属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Athens to Chania is about 45 minutes, same time zone, with frequent flights in the summer peak season. Chania Airport is about 14 km from the old town, linked by bus and taxi. Chania is the gateway to western Crete and the White Mountains, and a good base for hiking the Samaria Gorge, typically open May–October, subject to the national park's yearly announcement. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "ath-rho": {
    study: {
    "zh-CN":
      "雅典飞罗德城，是一趟横贯爱琴海南部、串起南爱琴火山弧的航线。起飞后飞机向东南穿越基克拉泽斯群岛所在海域，先经过米洛斯岛——一座多彩的火山岛，以黑曜岩贸易与萨拉基尼科海岸的浮岩地貌闻名；" +
      "继续向东，脚下出现一座近乎圆形的小岛——尼西罗斯，一座休眠层状火山，中央的斯特凡诺斯火山口至今仍有活跃的喷气孔与地热活动。飞机继续向东南飞越多德卡尼斯群岛海域，降落在罗德岛——欧洲保存最完好的中世纪城防城市之一所在的岛屿。",
    "en-US":
      "Athens to Rhodes Town crosses the southern Aegean along the South Aegean Volcanic Arc. After take-off the flight heads south-east over the Cyclades, first passing Milos, a colourful volcanic island known for its obsidian trade and the pumice landscape of the Sarakiniko coast." +
      " Continuing east, a near-circular islet appears below — Nisyros, a dormant stratovolcano whose central Stefanos crater still hosts active fumaroles and geothermal activity. The flight carries on south-east over the Dodecanese to land at Rhodes, home to one of Europe's best-preserved medieval walled towns.",
    },
    // travel sources: 全四段（study/travel × 中英）: 尼西罗斯斯特凡诺斯火山口喷气孔（地质公园官网，1 级）；罗德城中世纪城防「之一」带限定。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅典到罗德城飞约55分钟，两地同一时区，夏季旺季每天有多班航班。罗德城机场离古城约14公里，有公交与出租车连接。罗德岛是希腊阳光最充足的地区之一，中世纪古城内街巷狭窄，不通行车辆，建议以步行方式游览，穿舒适的鞋。希腊属申根区，多数国家公民短期旅游按申根区规定执行，货币为欧元。",
    "en-US":
      "Athens to Rhodes Town is about 55 minutes, same time zone, with several daily flights in summer. Rhodes Airport is about 14 km from the old town, linked by bus and taxi. Rhodes is one of the sunniest parts of Greece; the medieval old town's narrow streets are closed to vehicles, so wear comfortable shoes for walking. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits, and the currency is the euro.",
    },
  },

  "ath-cfu": {
    study: {
    "zh-CN":
      "雅典飞科孚城，是一趟从爱琴海一侧横跨希腊本土、抵达伊奥尼亚海的航线。起飞后不久，脚下出现一条狭长的海湾——科林斯湾，本质是一条活动地堑，两岸持续拉张，最窄处的里翁—安蒂里翁海峡架有斜拉桥连接两岸。" +
      "飞机继续向西北，一条连绵起伏的石灰岩山脊出现在下方——品都斯山脉，纵贯希腊大陆西部，有“希腊脊梁”之称，是希腊本土重要的气候与水系分水岭。越过品都斯山脉，飞机进入伊奥尼亚海上空，降落在科孚岛——一座因降水充沛而植被终年葱郁的岛屿。",
    "en-US":
      "Athens to Corfu Town crosses mainland Greece from the Aegean side to the Ionian Sea. Soon after take-off a long, narrow inlet appears below — the Gulf of Corinth, essentially an active rift graben whose two shores continue to pull apart, spanned at its narrowest point by the cable-stayed bridge at Rio-Antirrio." +
      " Continuing north-west, an undulating limestone ridge appears below — the Pindus range, running the length of western mainland Greece and known as the country's spine, a key climatic and hydrological divide. Past the Pindus the flight crosses onto the Ionian Sea, landing on Corfu, an island kept lushly green by abundant rainfall.",
    },
    // travel sources: 全四段（study/travel × 中英）: 科林斯湾活动地堑、里翁—安蒂里翁大桥、品都斯与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅典到科孚城飞约65分钟，两地同一时区。科孚城机场离老城约3公里，有公交与出租车连接。科孚岛降水明显多于爱琴海诸岛，植被终年葱郁，气候相对湿润，游览老城建议带一把折叠伞。科孚城也是前往意大利、阿尔巴尼亚渡轮航线的港口城市。希腊属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Athens to Corfu Town is about 65 minutes, same time zone. Corfu Airport is about 3 km from the old town, linked by bus and taxi. Corfu receives markedly more rainfall than the Aegean islands, keeping its vegetation green year-round and the climate comparatively humid — pack a compact umbrella for the old town. Corfu Town is also a port for ferry routes to Italy and Albania. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "ath-ioa": {
    study: {
    "zh-CN":
      "雅典飞约阿尼纳，是一趟从阿提卡飞向希腊西北部伊庇鲁斯地区的航线。起飞后不久，脚下出现科林斯湾——一条因地壳拉张形成的狭长海湾。飞机继续向西北，色萨利平原西北缘出现一群陡峭孤立的砂岩岩柱——迈泰奥拉，" +
      "约6000万年前由古河流三角洲沉积后经区域隆升与差异侵蚀塑造而成，14世纪起东正教隐修士陆续在岩顶建起修道院。越过迈泰奥拉，飞机进入品都斯山区，降落在帕姆沃蒂斯湖畔的约阿尼纳——希腊西北部山区的门户城市。",
    "en-US":
      "Athens to Ioannina flies from Attica into Epirus in north-western Greece. Soon after take-off the Gulf of Corinth appears below, a long, narrow inlet formed by crustal extension. Continuing north-west, a cluster of steep, isolated sandstone pinnacles appears at the edge of the Thessalian Plain — Meteora, shaped roughly 60 million years ago from ancient river-delta sediment by regional uplift and differential erosion, its summits crowned with Orthodox monasteries built from the 14th century onward." +
      " Past Meteora the flight enters the Pindus mountains, landing at Ioannina on the shore of Lake Pamvotis, gateway to north-western Greece's mountain country.",
    },
    // travel sources: 全四段（study/travel × 中英）: 迈泰奥拉约 6000 万年前三角洲沉积、14 世纪起修道院与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅典到约阿尼纳飞约50分钟，两地同一时区，也可选择约6小时的长途巴士。约阿尼纳机场离市区约5公里，有出租车连接市中心。约阿尼纳是探索维科斯峡谷等品都斯山区的理想基地，山区冬季寒冷多雪，部分道路可能因积雪受影响，出行前建议查询路况与天气预报。希腊属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Athens to Ioannina is about 50 minutes, same time zone, or about 6 hours by long-distance coach. Ioannina Airport is about 5 km from the centre, with taxis to the city. Ioannina is an ideal base for exploring the Vikos Gorge and the wider Pindus mountains; winters there are cold and snowy, and some mountain roads may be affected, so check road and weather conditions before setting out. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "ath-jtr": {
    study: {
    "zh-CN":
      "雅典飞圣托里尼，是希腊最受欢迎的岛屿航线之一。起飞后飞机向东南跨越基克拉泽斯群岛所在的爱琴海海域，途经米洛斯岛——一座火山成因的岛屿，岛内多种颜色的火山岩层与萨拉基尼科海岸的月球表面般地貌是其鲜明标志。" +
      "飞机继续向东南，一座新月形轮廓的岛屿逐渐显现——圣托里尼，公元前约1600年一次青铜时代晚期的大规模喷发造成岛屿中央塌陷，形成如今的破火山口，费拉、伊亚等城镇建在高约300米的火口崖顶上，飞机降落在岛屿东侧的机场。",
    "en-US":
      "Athens to Santorini is one of Greece's most popular island routes. After take-off the flight heads south-east across the Aegean over the Cyclades, passing Milos, a volcanic island whose colourful rock layers and moon-like Sarakiniko coast are its clearest markers." +
      " Continuing south-east, a crescent-shaped island gradually comes into view — Santorini, its centre collapsed by a massive Late Bronze Age eruption around 1600 BCE into the caldera seen today, with towns such as Fira and Oia perched on cliffs about 300 m above it; the plane lands at the airport on the island's eastern side.",
    },
    // travel sources: 全四段（study/travel × 中英）: 圣托里尼同 ath-her。核实 2026-09-11
    travel: {
    "zh-CN":
      "雅典到圣托里尼飞约45分钟，两地同一时区，夏季旺季每天有多班航班，也可选择约7-8小时的渡轮。圣托里尼机场离费拉约7公里，岛内交通主要靠公交、出租车或租车。旺季住宿价格较高，建议提前预订；冬季部分旅游设施季节性歇业，渡轮班次也相应减少。希腊属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Athens to Santorini is about 45 minutes, same time zone, with several daily flights in summer; a ferry (about 7–8 hours) is another option. Santorini Airport is about 7 km from Fira; getting around relies mainly on buses, taxis or rental cars. Accommodation prices rise sharply in peak season, so book ahead; in winter many tourist facilities close seasonally and ferry schedules are reduced. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "pvg-ath": {
    // study sources: 全四段（study/travel × 中英）: 塔克拉玛干「常被称为世界第二大流动沙漠」与本库 terrain/taklamakan 一致；中安纳托利亚高原 600–1200 m 与本库一致；里海水面原写「约 28 m」，按 2025 年哈萨克斯坦官方数据改为「28–29 m、近年仍在下降」—— 会变的量，下轮复核。核实 2026-09-11
    study: {
    "zh-CN":
      "上海飞雅典，从中国东部沿海一路向西，穿过中国西部干旱区、中亚腹地与小亚细亚半岛，终点是爱琴海西岸的希腊首都。起飞后先越过长江三角洲密集的水网与城镇，再往西是华北平原与黄土高原——黄土层厚达上百米，被流水切成一道道深沟，塬、梁、峁交错，是地球上黄土分布最集中的地区。继续向西进入河西走廊：祁连山的冰雪融水在山前形成一串绿洲，绿洲之间是砾石戈壁，聚落与道路被迫挤在这条狭长的通道里。接着是塔里木盆地——中国面积最大的内陆盆地，四周被天山、昆仑山与帕米尔高原围死，水汽进不来，盆地中心是塔克拉玛干沙漠，常被称为世界第二大流动沙漠。继续向西，飞机翻越帕米尔高原，号称“世界屋脊”的山结，慕士塔格峰等雪峰在此汇聚，是天山、昆仑山、喀喇昆仑山等多条山系的交汇点；冰川从峰顶一直伸到谷底，谷地里的河流全年浑浊，带着大量磨蚀下来的岩粉。再往西跨过中亚腹地的干草原与内流盆地，抵达里海上空——世界上面积最大的内陆水体，水面低于海平面约二十八至二十九米（近年仍在下降），没有出海口，水位随入流与蒸发逐年变化。飞越里海后进入土耳其的中安纳托利亚高原：一片被托罗斯山脉与本都山脉环绕的干旱高原，平均海拔六百到一千二百米，年降水仅两三百毫米，地表分布着盐湖与火山地貌。最后飞机跨过散布着上千座岛屿的爱琴海，降落在雅典以南的埃莱夫塞里奥斯·韦尼泽洛斯国际机场。",
    "en-US":
      "Shanghai to Athens flies west out of coastal eastern China, crossing China's arid west, the heart of Central Asia and the Anatolian peninsula to reach the Greek capital on the western shore of the Aegean. After take-off it passes over the dense waterways and towns of the Yangtze Delta, then the North China Plain and the Loess Plateau, where wind-blown silt lies more than a hundred metres deep and running water has cut it into a maze of deep gullies, tablelands and ridges — the most concentrated loess country on Earth. Farther west comes the Hexi Corridor: meltwater from the Qilian Mountains feeds a string of oases along the range front, gravel desert lies between them, and settlements and roads are forced into that narrow passage. Next is the Tarim Basin, the largest inland basin in China, sealed off by the Tian Shan, the Kunlun and the Pamirs so that moisture cannot reach it, with the Taklamakan — often called the world's second-largest shifting-sand desert — at its centre. Continuing west the flight crosses the Pamir Plateau, the mountain knot often called the Roof of the World, where snow peaks such as Muztagh Ata rise and the Tian Shan, Kunlun and Karakoram ranges converge; glaciers run from the summits down to the valley floors, and the rivers below stay milky all year with the rock flour they carry. Farther west, past the dry steppe and closed basins of Central Asia, the route reaches the Caspian Sea, the largest inland body of water on Earth, its surface about 28–29 metres below sea level and still falling in recent years, with no outlet to the ocean, so its level shifts from year to year with inflow and evaporation. Beyond it the flight enters Turkey's Central Anatolian Plateau, an arid tableland ringed by the Taurus and Pontic mountains, sitting 600 to 1,200 metres above sea level with only 200 to 300 millimetres of rain a year, its surface dotted with salt lakes and volcanic terrain. Finally the plane crosses the Aegean Sea, scattered with more than a thousand islands, and lands at Eleftherios Venizelos International Airport south of Athens.",
    },
    travel: {
    "zh-CN":
      "上海到雅典约11小时25分钟，由吉祥航空波音787客机执飞，是中希两国间的洲际直飞航线，目前每周多个班次。两地时差5-6小时（希腊夏令时期间5小时）。雅典夏季炎热干燥、冬季温和多雨，春秋最适合游览古迹。" +
      "埃莱夫塞里奥斯·韦尼泽洛斯机场距市中心约27公里，地铁3号线蓝线直达市区约40分钟，也有机场大巴和郊区铁路。卫城、普拉卡老城、国家考古博物馆是市内代表性景点，多可步行或搭地铁到达；橄榄油、羊乳酪、烤肉串（souvlaki）是当地代表美食。" +
      "希腊属申根区，签证按国籍不同、以希腊驻当地使领馆最新公布为准，行前确认并预留办理时间。夏季正午气温常超35℃，游览卫城等露天古迹建议避开正午时段。",
    "en-US":
      "Shanghai to Athens takes about 11 hours 25 minutes on a Juneyao Airlines Boeing 787, an intercontinental nonstop route between China and Greece currently operating several times a week. The time difference is 5–6 hours (5 hours during Greek summer time). Athens has hot, dry summers and mild, rainy winters, with spring and autumn best for exploring ancient sites." +
      " Eleftherios Venizelos Airport is about 27 km from the centre; Metro Line 3 (blue) runs directly into the city in about 40 minutes, and airport buses and suburban rail also operate. The Acropolis, the Plaka old town and the National Archaeological Museum are the city's signature sights, mostly reachable on foot or by metro; olive oil, feta cheese and souvlaki are local staples." +
      " Greece is in the Schengen area; visa rules vary by nationality — check the latest from the Greek consulate for your location and allow time to arrange one. Midday summer temperatures often top 35°C, so it's worth avoiding the early afternoon when visiting open-air sites like the Acropolis.",
    },
  },
};
