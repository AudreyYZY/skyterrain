import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "hel-rvn": {
    study: {
    "zh-CN":
      "赫尔辛基飞罗瓦涅米，是一趟纵贯芬兰全境、从南部湖区飞往北极圈拉普兰的航线。起飞后不久，脚下展开派耶内湖狭长笔直的湖面——芬兰第二大湖，也是芬兰水深最深的湖泊之一，最大水深约95米，与南部错综复杂的塞马湖形成鲜明对比。" +
      "飞机继续向北飞行，脚下的湖区逐渐让位于芬兰中北部广袤的针叶林带，临近罗瓦涅米降落前，凯米约基河蜿蜒的河道清晰可辨——芬兰最长的河流，沿岸建有多座水电站，飞机沿河而下，降落在跨越北极圈线的罗瓦涅米。",
    "en-US":
      "Flying from Helsinki to Rovaniemi spans the length of Finland, from the southern lake district to Arctic Lapland. Soon after take-off, the long, straight surface of Lake Päijänne unfolds below — Finland's second-largest lake and one of its deepest, with a maximum depth of about 95 m, a sharp contrast with the intricate, fragmented Saimaa further south." +
      " The flight continues north as the lake district below gradually gives way to the vast conifer forest of north-central Finland; approaching Rovaniemi, the winding channel of the Kemijoki comes into clear view — Finland's longest river, lined with hydroelectric dams — and the flight follows the river down to land at Rovaniemi, straddling the Arctic Circle line.",
    },
    // travel sources: 全四段（study/travel × 中英）: 派耶内湖芬兰第二大、最深约 95 m 与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "赫尔辛基到罗瓦涅米飞约85分钟，同一时区，是芬兰航空运营的国内航班之一，也可选择约12小时的夜间火车。罗瓦涅米机场离市区约10公里。罗瓦涅米是圣诞老人村所在地，也是探索拉普兰荒原的理想门户。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Rovaniemi is about 85 minutes, same time zone, operated by Finnair as one of Finland's domestic routes; an overnight train (about 12 hours) is another option. Rovaniemi Airport is about 10 km from the centre. Rovaniemi is home to Santa Claus Village and an ideal gateway for exploring the Lapland wilderness. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-oul": {
    study: {
    "zh-CN":
      "赫尔辛基飞奥卢，是一趟沿波的尼亚湾海岸北上的航线。飞机离开赫尔辛基后向北飞行，沿途掠过芬兰中西部典型的森林与湖泊交织地貌，中途掠过奥斯特罗博特尼亚平原——芬兰西海岸一片因地壳均衡抬升而持续扩大的低平沿海农业区，大片规整的农田覆盖着开阔的地表，沿海地区仍能观测到明显的陆地抬升现象。" +
      "越过平原后，飞机继续沿波的尼亚湾海岸北上，最终降落在奥卢——芬兰重要的科技与大学城市，被称为“北方硅谷”，也是探索北芬兰与拉普兰的门户。",
    "en-US":
      "Flying from Helsinki to Oulu heads north along the Gulf of Bothnia coast. After leaving Helsinki the flight heads north, passing over the Ostrobothnia Plain midway — a low-lying coastal agricultural region on Finland's west coast that continues to expand through isostatic rebound, its broad, open surface covered in regular farmland." +
      " Past the plain, the flight continues north along the Gulf of Bothnia coast before landing in Oulu, an important Finnish technology and university city and a gateway for exploring northern Finland and Lapland.",
    },
    // travel sources: 全四段（study/travel × 中英）: 东博滕平原地壳均衡抬升与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "赫尔辛基到奥卢飞约70分钟，同一时区，是芬兰航空运营的国内航班之一（安波190机型），也可选择约6.5小时的城际火车。奥卢机场离市区约15公里。奥卢是探索波的尼亚湾北岸与拉普兰的便捷门户。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Oulu is about 70 minutes, same time zone, operated by Finnair (Embraer 190) as one of Finland's domestic routes; an intercity train (about 6.5 hours) is another option. Oulu Airport is about 15 km from the centre. Oulu is a convenient gateway for exploring the Bothnian Bay coast and Lapland. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-kao": {
    study: {
    "zh-CN":
      "赫尔辛基飞库萨莫，是一趟飞往芬兰东北部、探索“熊之路”徒步路线的门户航线。飞机离开赫尔辛基后持续向东北飞行，穿越芬兰中部广袤的湖区与针叶林地带，逐渐进入芬兰—俄罗斯边境附近人烟稀少的森林荒野。" +
      "临近库萨莫降落前，脚下出现奥兰卡峡谷——奥兰卡河切穿古老基岩形成的峡谷，两岸松林与局部石灰质地表交替出现，是芬兰著名长距离徒步路线“熊之路”沿线最具代表性的地貌之一，飞机随后降落在库萨莫，紧邻鲁卡滑雪度假区。",
    "en-US":
      "Flying from Helsinki to Kuusamo is a gateway route to north-eastern Finland, home to the Karhunkierros hiking trail. After leaving Helsinki the flight continues north-east, crossing the vast lake district and conifer forest of central Finland." +
      " Approaching Kuusamo, the Oulanka Canyon comes into view below — a canyon cut by the Oulanka River through ancient bedrock, pine forest and patches of lime-rich ground alternating along its banks, one of the most representative landforms along Finland's famous Karhunkierros long-distance trail — before the flight lands in Kuusamo, right next to the Ruka ski resort.",
    },
    // travel sources: 全四段（study/travel × 中英）: 奥兰卡峡谷「熊之路」与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "赫尔辛基到库萨莫飞约75分钟，同一时区，是芬兰航空运营的国内航班之一（ATR 72-500机型）。库萨莫机场离市区约5公里。库萨莫是探索奥兰卡国家公园与鲁卡滑雪度假区的理想门户。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Kuusamo is about 75 minutes, same time zone, operated by Finnair (ATR 72-500) as one of Finland's domestic routes. Kuusamo Airport is about 5 km from the centre. Kuusamo is an ideal gateway for exploring Oulanka National Park and the Ruka ski resort. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-ivl": {
    study: {
    "zh-CN":
      "赫尔辛基飞伊瓦洛，是一趟纵贯芬兰全境、抵达北极圈深处拉普兰腹地的航线，全程距离接近1000公里，是芬兰国内最长的定期航班之一。飞机离开赫尔辛基后持续向北飞行，脚下的地貌依次经过南部湖区、中部针叶林带，逐渐过渡为北部图恩图里荒原，气候也由温带大陆性转为亚北极气候。" +
      "临近伊瓦洛降落前，脚下展开伊纳里湖开阔的水面——按面积计芬兰第三大湖，也是北极圈内芬兰面积最大的湖泊，湖中散布约3300座岛屿，是萨米人传统聚居区伊纳里地区的地理核心，飞机随后降落在伊瓦洛，是探索伊纳里地区萨米文化的门户机场。",
    "en-US":
      "Flying from Helsinki to Ivalo spans the length of Finland to reach deep into Arctic Lapland. After leaving Helsinki the flight continues north, the landscape below passing in turn through the southern lake district, the conifer forest of central Finland, and finally the tunturi wilderness of the north." +
      " Approaching Ivalo, the broad waters of Lake Inari come into view below — Finland's third-largest lake by area and the largest lake within the Finnish Arctic Circle, dotted with about 3,300 islands, the geographic core of the traditional Sámi Inari region — before the flight lands at Ivalo, the gateway airport for exploring Sámi culture in the Inari region.",
    },
    // travel sources: 全四段（study/travel × 中英）: 伊纳里湖约 3300 座岛与本库一致；赫尔辛基—伊瓦洛「接近 1000 公里」（大圆约 927 km）。核实 2026-09-11
    travel: {
    "zh-CN":
      "赫尔辛基到伊瓦洛飞约100分钟，同一时区，是芬兰航空运营的国内航班之一。伊瓦洛机场离伊纳里村约40公里。伊瓦洛是探索伊纳里湖与萨米文化的门户机场，也是观测极光条件最佳的地区之一。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Ivalo is about 100 minutes, same time zone, operated by Finnair as one of Finland's domestic routes. Ivalo Airport is about 40 km from the village of Inari. Ivalo is the gateway airport for exploring Lake Inari and Sámi culture, and one of the best regions in Finland for viewing the northern lights. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-kuo": {
    study: {
    "zh-CN":
      "赫尔辛基飞库奥皮奥，是一趟飞往芬兰中东部湖区核心城市的航线。飞机离开赫尔辛基后向北飞行，穿越芬兰中部典型的森林与湖泊交织地貌，沿途湖泊星罗棋布，是芬兰“千湖之国”景观最集中的区域之一。" +
      "临近库奥皮奥降落前，脚下展开卡拉韦西湖开阔的水面，湖畔的普宜奥山海拔232米、山顶观景塔塔顶达306米，是芬兰湖区少有的地势制高点，山体基岩长期风化侵蚀后在平缓的湖区地貌中格外突出，山顶观景塔可俯瞰整片湖区群岛景观，飞机随后降落在库奥皮奥，坐落于湖畔的芬兰中东部湖区核心城市。",
    "en-US":
      "Flying from Helsinki to Kuopio heads to the core city of Finland's central-eastern lake district. After leaving Helsinki the flight heads north, crossing the forest and lake terrain typical of central Finland." +
      " Approaching Kuopio, the open waters of Lake Kallavesi come into view below; lakeside Puijo hill, at 232 m with its summit viewing tower reaching 306 m, is one of the few high points of relief in the Finnish lake district, its summit viewing tower overlooking the entire lake and archipelago landscape, before the flight lands in Kuopio, the core city of Finland's central-eastern lake district, built on the lake's shore.",
    },
    // travel sources: 全四段（study/travel × 中英）: 普宜奥山原写海拔 306 m（实为塔顶），按本库改为山体 232 m、塔顶 306 m。核实 2026-09-11
    travel: {
    "zh-CN":
      "赫尔辛基到库奥皮奥飞约55分钟，同一时区，是芬兰航空运营的国内航班之一（ATR 72-500机型），也可选择约4.5小时的城际火车。库奥皮奥机场离市区约15公里。库奥皮奥是俯瞰芬兰湖区地貌的理想目的地。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Kuopio is about 55 minutes, same time zone, operated by Finnair (ATR 72-500) as one of Finland's domestic routes; an intercity train (about 4.5 hours) is another option. Kuopio Airport is about 15 km from the centre. Kuopio is an ideal destination for overlooking Finland's lake-district landforms. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-mhq": {
    study: {
    "zh-CN":
      "赫尔辛基飞玛丽港，是一趟从芬兰本土飞往波罗的海入口处奥兰群岛的短途航线。起飞后不久，脚下即展开群岛海开阔的景象——芬兰西南沿海由约四万座岛屿与礁石组成的水域，是世界上按岛屿数量计最密集的群岛之一，末次冰期冰川刮蚀的花岗岩基岩经地壳均衡抬升逐渐出露海面而成。" +
      "越过群岛海后，飞机继续向西飞行，最终降落在玛丽港——奥兰群岛的首府，芬兰唯一的瑞典语单一官方语言自治区的行政与文化中心，1921年国际联盟裁决确立其在芬兰主权下享有高度自治与非军事化地位，这一安排延续至今。",
    "en-US":
      "Flying from Helsinki to Mariehamn is a short hop from mainland Finland to the Åland Islands at the entrance to the Baltic Sea. Soon after take-off, the broad expanse of the Archipelago Sea unfolds below — a body of water off south-western Finland made up of about forty thousand islands and skerries, one of the densest island clusters anywhere in the world by count." +
      " Past the Archipelago Sea, the flight continues west before landing in Mariehamn, the capital of the Åland Islands and the administrative and cultural centre of Finland's only autonomous region with Swedish as its sole official language.",
    },
    // travel sources: 全四段（study/travel × 中英）: 奥兰群岛 1921 年国联裁决自治与非军事化（已了结的国际法史实）；群岛海约四万座岛与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "赫尔辛基到玛丽港飞约55分钟，同一时区，是芬兰航空运营的国内航班之一（ATR 72-500机型），也可选择乘渡轮往返。玛丽港机场离市区约3公里。玛丽港是探索奥兰群岛的理想起点。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Mariehamn is about 55 minutes, same time zone, operated by Finnair (ATR 72-500) as one of Finland's domestic routes; a ferry is another option. Mariehamn Airport is about 3 km from the centre. Mariehamn is an ideal starting point for exploring the Åland Islands. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "pkx-hel": {
    // study sources: 全四段（study/travel × 中英）: 南航大兴—赫尔辛基 2026-03-29 首航（2 级）；塞马湖「芬兰最大湖泊」与本库 terrain/saimaa 一致；原写「中国到北欧最北的直飞航路」说不出口径，已删。核实 2026-09-11
    study: {
    "zh-CN":
      "北京大兴飞赫尔辛基，向西北横跨亚欧大陆，全程约六千五百公里。起飞后越过燕山，进入蒙古高原南缘的戈壁——这片干旱带以砾石和裸岩为主，年降水多在两百毫米以下，风蚀之后留下坚硬的砾幂，被吹走的细沙在边缘堆成沙丘；河流多为季节性，昼夜温差常超过三十度，冬季强风把地表尘土卷上高空，能见度骤降。越往西北，砾漠逐渐让位给草原，牧群和零星的定居点重新出现在河谷两侧。接着深入西西伯利亚平原，世界上最大的平原之一，地势极其平坦，森林、沼泽与湖泊交错成片。继续向西北，飞越乌拉尔山脉北段——地理学上常以这条山系划分亚洲与欧洲，越往北山势越平缓，山地被苔原和针叶林覆盖；这里的冻土夏季只融化表层很薄的一段，水下渗不下去，于是在地表积成大片浅水和沼泽。越过山脉后进入芬兰东南部的湖区，塞马湖是芬兰最大的湖泊，由冰川刻蚀出的复杂水系和数千座岛屿组成。飞机最后穿过芬兰湾北岸，降落在赫尔辛基万塔机场。",
    "en-US":
      "Beijing Daxing to Helsinki runs north-west across the Eurasian landmass, about 6,500 km in all. After take-off the flight crosses the Yan Mountains into the Gobi Desert on the southern edge of the Mongolian Plateau, an arid belt mostly of gravel and bare rock where most years bring less than 200 millimetres of rain, wind erosion has left a hard pavement and the fine sand it carried off has piled into dunes along the margins; the rivers are mostly seasonal, the daily temperature can swing more than thirty degrees, and strong winter winds lift dust high enough to cut visibility sharply. The farther north-west the route goes, the more the gravel desert gives way to steppe, with herds and scattered settlements reappearing along the valleys. The flight then heads deep into the West Siberian Plain, one of the largest plains on Earth, remarkably flat, with forest, marsh and lake interlocking across it. Continuing north-west it crosses the northern Ural Mountains — the range geographers commonly use to divide Asia from Europe — where the relief grows gentler with latitude and tundra and conifer forest cover the slopes; the permafrost thaws only a thin layer each summer, so water cannot drain away and collects on the surface as wide shallow pools and bog. Beyond the range the route enters the lake district of south-east Finland, where Lake Saimaa, the country's largest lake, is a maze of glacially carved waterways and thousands of islands. The flight finally crosses the northern shore of the Gulf of Finland and lands at Helsinki-Vantaa Airport.",
    },
    travel: {
    "zh-CN":
      "北京到赫尔辛基约9小时15分钟，由中国南方航空波音787客机执飞，从北京大兴机场出发。两地时差5-6小时（芬兰夏令时期间5小时）。芬兰夏季日照极长（北部仲夏可见午夜太阳），冬季则昼短夜长，北部有机会观赏极光。" +
      "赫尔辛基万塔机场距市中心约19公里，可乘坐环线火车（I/P线）约30分钟直达中央车站。市内公共交通（地铁、有轨电车、公交）票制通用，HSL交通卡或银行卡均可直接刷卡乘车。岩石教堂、赫尔辛基大教堂、芬兰堡是市内三大代表性景点，芬兰堡需搭渡轮前往。" +
      "芬兰属申根区，签证按国籍不同、以芬兰外交部/驻华使领馆最新公布为准，行前务必核实并预留办理时间。这条北京大兴—赫尔辛基航线2026年3月才开通，出行前建议再次核实班期是否有变动。",
    "en-US":
      "Beijing to Helsinki takes about 9 hours 15 minutes on a China Southern Airlines Boeing 787, departing from Beijing Daxing Airport. The time difference is 5-6 hours (5 hours during Finnish summer time). Finnish summers bring very long daylight hours (the midnight sun is visible in the north around midsummer), while winters have short days and offer a chance to see the northern lights in the north." +
      " Helsinki-Vantaa Airport is about 19 km from the city centre; the ring rail line (I/P trains) takes about 30 minutes to Central Station. Public transport (metro, trams and buses) runs on one shared fare system, and an HSL card or a bank card both work directly on board. Temppeliaukio Church, Helsinki Cathedral and the Suomenlinna sea fortress are the city's three signature sights — Suomenlinna requires a short ferry ride." +
      " Finland is in the Schengen area; visa rules vary by nationality — check the latest from the Finnish Ministry for Foreign Affairs or its consulate for your location and allow time to arrange one. This Beijing Daxing–Helsinki route only launched in March 2026, so it's worth reconfirming the schedule before you travel.",
    },
  },
};
