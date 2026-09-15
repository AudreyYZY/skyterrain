import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "arn-krn": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞基律纳，是一趟纵贯瑞典全境、从斯韦阿兰飞往北极圈内拉普兰的航线。飞机离开斯德哥尔摩后持续向北飞行，脚下的地貌逐渐从南部的农田与湖泊过渡为诺尔兰广袤的针叶林带，气候也逐渐由温带大陆性转为亚北极气候。" +
      "临近基律纳降落前，飞机西侧远处可以望见凯布讷山——瑞典全境最高峰，北峰海拔固定为2096.8米，南峰覆盖冰川、海拔随年份变化，近年因气候变暖南峰已连续多年低于北峰，是瑞典拉普兰地区最具辨识度的山地地标。",
    "en-US":
      "Flying from Stockholm to Kiruna spans the length of Sweden, from Svealand to Arctic Lapland. After leaving Stockholm the flight continues north, the landscape below gradually shifting from the farmland and lakes of the south to the vast conifer forest of Norrland, the climate transitioning from temperate continental to subarctic." +
      " Approaching Kiruna, Kebnekaise comes into view far to the west — Sweden's highest mountain, its North Peak fixed at 2,096.8 m while the glacier-capped South Peak's elevation varies year to year, having fallen below the North Peak for several years running as the climate warms — the most recognisable mountain landmark in Swedish Lapland.",
    },
    // travel sources: 全四段（study/travel × 中英）: 凯布讷山北峰 2096.8 m 固定、南峰冰川顶逐年变低，与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "斯德哥尔摩到基律纳飞约95分钟，同一时区，是北欧航空运营的国内航班之一，也可选择约17小时的夜间火车。基律纳机场离市区约8公里。基律纳是探索凯布讷山、萨雷克国家公园与阿比斯库极光的理想门户。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Kiruna is about 95 minutes, same time zone, operated by SAS as one of Sweden's domestic routes; an overnight train (about 17 hours) is another option. Kiruna Airport is about 8 km from the centre. Kiruna is an ideal gateway for exploring Kebnekaise, Sarek National Park and the northern lights at Abisko. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-got": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞哥德堡，是一趟横跨瑞典中南部、连接两大城市的航线。起飞后不久，脚下展开瑞典中部典型的森林与湖泊交织地貌，飞机中途掠过蒂韦登——历史上曾长期是瑞典南北两大传统区域之间天然屏障的古老松林地带，地表散布着末次冰期冰川搬运遗留的大量花岗岩巨砾，古老松林与沼泽小湖交织，是研究冰川漂砾地貌的典型野外样本。" +
      "越过蒂韦登后，飞机继续向西南飞行，逐渐进入瑞典西海岸地区，脚下的森林景观渐渐让位于沿海平原与近岸礁岛，最终降落在哥德堡——按人口计瑞典第二大城市与重要的港口门户，也是探索布胡斯兰海岸花岗岩礁岛地貌的出发地。",
    "en-US":
      "Flying from Stockholm to Gothenburg crosses south-central Sweden, linking the country's two largest cities. Soon after take-off, the landscape below shows the forest and lake terrain typical of central Sweden, and the flight passes over Tiveden midway — an old pine-forest area that historically served as a natural barrier between Sweden's traditional northern and southern regions, its ground scattered with granite boulders left by last-glacial transport." +
      " Past Tiveden, the flight continues south-west, gradually approaching Sweden's west coast before landing in Gothenburg, the country's second city and an important port gateway.",
    },
    // travel sources: 全四段（study/travel × 中英）: 蒂夫登冰川漂砾与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "斯德哥尔摩到哥德堡飞约43分钟，同一时区，是北欧航空运营的国内航班之一，也可选择约3小时的城际火车。哥德堡兰德维特机场离市区约25公里。哥德堡是探索布胡斯兰海岸礁岛地貌的理想门户。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Gothenburg is about 43 minutes, same time zone, operated by SAS as one of Sweden's domestic routes; an intercity train (about 3 hours) is another option. Göteborg Landvetter Airport is about 25 km from the centre. Gothenburg is an ideal gateway for exploring the skerry landforms of the Bohuslän Coast. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-mmx": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞马尔默，是一趟纵贯瑞典南部、直抵最南端的航线。飞机离开斯德哥尔摩后向南飞行，沿途掠过瑞典中南部典型的森林与农田交织地貌，中途掠过斯托雷莫瑟沼泽——瑞典拉普兰以南面积最大的隆起泥炭沼泽，大片深褐色的湿地与周边森林形成鲜明对比，是瑞典南部重要的候鸟栖息与泥炭湿地保护区。" +
      "临近马尔默前，脚下的森林景观逐渐让位于开阔平坦的斯科讷平原——瑞典主要的谷物与油菜种植区，规整的农田一望无际，春季油菜花盛开时更呈现出大片金黄色的独特景观，飞机随后降落在瑞典最南端的门户城市马尔默，隔厄勒海峡与丹麦哥本哈根相望。",
    "en-US":
      "Flying from Stockholm to Malmö crosses the length of southern Sweden to reach the country's southern tip. After leaving Stockholm the flight heads south, passing over Store Mosse midway — the largest raised peat bog south of Swedish Lapland, its expanse of dark brown wetland contrasting sharply with the forest around it." +
      " Approaching Malmö, the forested landscape gradually gives way to the open, flat Skåne Plain — Sweden's main grain- and rapeseed-growing region, its regular farmland stretching to the horizon — before the flight descends into Malmö, the gateway city at Sweden's southern tip, facing Copenhagen, Denmark across the Øresund.",
    },
    // travel sources: 全四段（study/travel × 中英）: 斯托雷莫瑟「拉普兰以南最大的隆起泥炭沼泽」与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "斯德哥尔摩到马尔默飞约55分钟，同一时区，是北欧航空运营的国内航班之一，也可选择约4.5小时的城际火车。马尔默机场离市区约28公里。马尔默是探索斯科讷平原、并经厄勒海峡大桥连接丹麦的便捷门户。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Malmö is about 55 minutes, same time zone, operated by SAS as one of Sweden's domestic routes; an intercity train (about 4.5 hours) is another option. Malmö Airport is about 28 km from the centre. Malmö is a convenient gateway for exploring the Skåne Plain and for a cross-border trip to Denmark via the Øresund Bridge. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-vby": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞维斯比，是一趟从瑞典本土飞往波罗的海最大岛屿哥得兰岛的短途航线。起飞后不久，脚下即展开斯德哥尔摩群岛开阔的景象——约三万座岛屿、礁石组成的群岛，是世界上岛屿密度最高的群岛之一，群岛基岩为末次冰期冰川刮蚀的花岗岩，经地壳均衡抬升逐渐出露海面，从内群岛到外群岛岛屿逐渐稀疏、面积渐大，呈现出层次分明的地貌梯度。" +
      "越过外群岛后，飞机飞越开阔的波罗的海海域，约半小时后抵达哥得兰岛，降落在维斯比——完整保留中世纪城墙的汉萨同盟古城，也是探索法罗岛海蚀柱群的门户。",
    "en-US":
      "Flying from Stockholm to Visby is a short hop from mainland Sweden to Gotland, the largest island in the Baltic Sea. Soon after take-off, the broad expanse of the Stockholm Archipelago unfolds below — some thirty thousand islands and skerries, one of the densest island clusters in the world, thinning out and growing larger in size from the inner to the outer archipelago." +
      " Past the outer archipelago, the flight crosses open Baltic waters, arriving over Gotland after about half an hour and descending into Visby, the Hanseatic-era walled town whose medieval fortifications survive intact.",
    },
    // travel sources: 全四段（study/travel × 中英）: 斯德哥尔摩群岛约三万座岛与本库一致；「大阿尔瓦荒原」原被挂到哥得兰岛（实属厄兰岛），已改。核实 2026-09-11
    travel: {
    "zh-CN":
      "斯德哥尔摩到维斯比飞约35分钟，同一时区，是北欧航空运营的国内航班之一，也可选择乘渡轮往返。维斯比机场离市区约4公里。维斯比是探索哥得兰岛中世纪古城与法罗岛海蚀柱群的理想起点。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Visby is about 35 minutes, same time zone, operated by SAS as one of Sweden's domestic routes; a ferry is another option. Visby Airport is about 4 km from the centre. Visby is an ideal starting point for exploring Gotland's medieval old town and the sea stacks of Fårö. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-klr": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞卡尔马，是一趟飞往瑞典东南部、探索厄兰岛的门户航线。飞机离开斯德哥尔摩后向南飞行，沿途掠过瑞典东南部沿海典型的森林与农田交织地貌，逐渐进入小科鲁德省沿海低地。" +
      "临近卡尔马降落前，飞机东侧海峡对岸可以望见厄兰岛大阿尔瓦石灰岩荒原——一片长约40公里的裸露石灰岩台地，占岛屿面积约四分之一，是欧洲现存面积最大的同类石灰岩荒原，2000年因独特的农业景观列入联合国教科文组织世界遗产名录，飞机随后降落在卡尔马——一座跨海大桥连接厄兰岛的历史城堡城市。",
    "en-US":
      "Flying from Stockholm to Kalmar is a gateway route to the island of Öland in south-eastern Sweden. After leaving Stockholm the flight heads south, passing over the forested farmland typical of Sweden's south-eastern coast." +
      " Approaching Kalmar, Stora Alvaret on Öland comes into view across the strait to the east — a roughly 40-km stretch of bare limestone plateau, the largest surviving example of this type of limestone barren in Europe — before the flight descends into Kalmar, the historic castle city linked to Öland by a bridge across the strait.",
    },
    // travel sources: 全四段（study/travel × 中英）: 厄兰岛大阿尔瓦约 40 km、2000 年列入 UNESCO 与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "斯德哥尔摩到卡尔马飞约45分钟，同一时区，是北欧航空运营的国内航班之一，也可选择约4.5小时的城际火车。卡尔马机场离市区约6公里。卡尔马是探索厄兰岛大阿尔瓦石灰岩荒原最便捷的门户。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Kalmar is about 45 minutes, same time zone, operated by SAS as one of Sweden's domestic routes; an intercity train (about 4.5 hours) is another option. Kalmar Airport is about 6 km from the centre. Kalmar is the most convenient gateway for exploring Öland's Stora Alvaret limestone plateau. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-osd": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞奥勒—厄斯特松德，是一趟飞往瑞典中西部耶姆特兰山地滑雪度假区的航线。飞机离开斯德哥尔摩后向西北飞行，中途掠过希尔扬陨石坑——约3.77亿年前一颗天体撞击形成的环形构造，直径约52公里，是欧洲已知最大的陨石撞击构造，希尔扬湖及周边多座小湖沿环形边缘分布。" +
      "越过希尔扬陨石坑后，飞机继续向西北飞行，地势逐渐抬升进入耶姆特兰山地，最终降落在奥勒—厄斯特松德机场，是北欧最大高山滑雪度假地奥勒的门户机场。",
    "en-US":
      "Flying from Stockholm to Åre Östersund heads to the alpine ski resort region of Jämtland in west-central Sweden. After leaving Stockholm the flight heads north-west, passing over the Siljan Ring midway — a ring structure about 52 km in diameter formed when an asteroid struck around 377 million years ago, the largest known impact structure in Europe, with Lake Siljan and several smaller lakes arranged along its margin." +
      " Past the Siljan Ring, the flight continues north-west as the terrain gradually rises into the mountains of Jämtland, before landing at Åre Östersund Airport, the gateway airport for Åre, Northern Europe's largest alpine ski resort.",
    },
    // travel sources: 全四段（study/travel × 中英）: 希尔扬约 3.77 亿年、直径约 52 km、欧洲已知最大撞击构造与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "斯德哥尔摩到奥勒—厄斯特松德飞约60分钟，同一时区，是北欧航空运营的国内航班之一，也可选择约6.5小时的城际火车。机场离奥勒镇区约65公里。奥勒是北欧规模最大的高山滑雪度假地。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Åre Östersund is about 60 minutes, same time zone, operated by SAS as one of Sweden's domestic routes; an intercity train (about 6.5 hours) is another option. The airport is about 65 km from Åre. Åre is Northern Europe's largest alpine ski resort. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "pvg-arn": {
    // study sources: 全四段（study/travel × 中英）: 东航浦东—斯德哥尔摩 2026-06-22 复航、停飞六年、约 11 小时 10 分（官方转述，2 级）。核实 2026-09-11
    study: {
    "zh-CN":
      "上海飞斯德哥尔摩，2026年6月复航，是停飞六年后重开的直飞航线，全程约八千公里。起飞后先经过华北平原——黄河与海河冲积出的低平耕地，地势自西向东缓缓降低，河渠纵横，是中国人口最密集的区域之一。接着进入蒙古高原南缘的戈壁，地表以砾石为主，植被稀疏，聚落之间相隔很远；这里年降水稀少，风把细沙吹走后留下坚硬的砾幂，昼夜温差极大，冬季常有强风扬起沙尘，能见度骤降。越往西北，砾漠逐渐让位给草原，河流开始变多，地面重新出现连片的绿色。再往西北是西西伯利亚平原，世界上面积最大的平原之一，东西宽约一千五百公里，地表落差极小；鄂毕河与叶尼塞河在这里蜿蜒北流，春汛时河水漫出河道，大片针叶林泡在水里数周之久。地下是连续或断续的冻土，水下渗不下去，于是在地表积成无数浅湖与沼泽。再往西平原让位给东欧的农田与城镇，地面重新变得规整。越过波罗的海沿岸后，飞机进入斯德哥尔摩群岛上空——冰后回弹把海底基岩抬出水面，形成两万多座岛屿与礁石。飞机降落在城市以北的阿兰达机场。",
    "en-US":
      "Shanghai to Stockholm resumed in June 2026, reopening a nonstop link after six years, about 8,000 km in all. After take-off the flight crosses the North China Plain, low farmland built by the silt of the Yellow and Hai rivers, sloping so gently from west to east that the fall is invisible, threaded with canals and among the most densely settled parts of China. It then enters the Gobi Desert on the southern edge of the Mongolian Plateau, a surface mostly of gravel with sparse vegetation and long distances between settlements; rain is scarce, the wind has carried the fine sand away to leave a hard pavement, the daily temperature swing is extreme, and strong winter winds lift dust sharply enough to cut visibility. The farther north-west it goes, the more the gravel desert gives way to steppe, rivers become frequent and continuous green returns to the ground. Farther north-west lies the West Siberian Plain, one of the largest plains on Earth, roughly fifteen hundred kilometres across with almost no change in elevation; the Ob and the Yenisei wind north through it, and at the spring flood the rivers spill their channels and leave stands of conifer forest standing in water for weeks. Beneath it lies continuous or patchy permafrost, so water cannot drain away and collects into countless shallow lakes and bogs. Farther west the plain gives way to the farmland and towns of eastern Europe and the ground turns regular again. Past the Baltic coast the aircraft reaches the Stockholm archipelago, where post-glacial rebound has lifted the seabed bedrock into more than twenty thousand islands and skerries. The flight lands at Arlanda Airport north of the city.",
    },
    travel: {
    "zh-CN":
      "上海到斯德哥尔摩约11小时10分钟，时差6-7小时（瑞典夏令时期间6小时）。瑞典夏季凉爽、日照长，冬季寒冷、日照短，北部可观测极光，出行建议按季节备好衣物。" +
      "阿兰达机场距市中心约40公里，机场快线（Arlanda Express）约20分钟直达市中心，也有较便宜的通勤火车和大巴。老城区（加姆拉斯坦）、瓦萨沉船博物馆、市政厅是热门景点，市内步行和骑行都很方便。" +
      "瑞典属申根区，签证按国籍不同、以瑞典驻当地使领馆最新公布为准，行前确认并预留办理时间。这条航线曾因疫情中断六年，2026年6月才恢复直飞，出行前建议再次核实航班班期。",
    "en-US":
      "Shanghai to Stockholm takes about 11 hours 10 minutes, with a 6–7 hour time difference (6 hours during Swedish summer time). Stockholm has cool summers with long daylight hours and cold, dark winters, with the aurora visible in the north — pack for the season." +
      " Arlanda Airport is about 40 km from the city centre; the Arlanda Express takes about 20 minutes direct into town, and cheaper commuter trains and buses also run. Gamla Stan (the Old Town), the Vasa Museum and City Hall are popular sights, and the city centre is easy to explore on foot or by bike." +
      " Sweden is in the Schengen area; visa rules vary by nationality — check the latest from the Swedish consulate for your location and allow time to arrange one. This route was suspended for six years during the pandemic and only resumed nonstop service in June 2026, so it's worth reconfirming the schedule before you travel.",
    },
  },
};
