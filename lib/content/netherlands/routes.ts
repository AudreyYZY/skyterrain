import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "pkx-ams": {
    // study sources: 全四段（study/travel × 中英）: 史基浦跑道低于海平面、圩田与堤坝；签证未写死。核实 2026-09-11
    study: {
    "zh-CN":
      "北京大兴飞阿姆斯特丹，向西北横跨亚欧大陆，全程约八千二百公里，终点在莱茵河三角洲边缘。起飞后进入蒙古高原南缘的戈壁，砾石滩延伸到天际线，干旱少雨、植被稀疏，年降水多在两百毫米以下；风把细沙吹走后留下坚硬的砾幂，河流大多是季节性的，昼夜温差常超过三十度，聚落沿着为数不多的泉水分布。越往西北，荒漠逐渐转为草原，河流开始变多。接着是西西伯利亚平原，地势极为平坦，鄂毕河等大河在这里蜿蜒北流，沼泽面积之大使这一带成为重要的碳汇。翻过乌拉尔山脉后，飞机进入一片开阔低地。这条古老山系南北绵延两千多公里，是亚欧两洲的传统分界，长期剥蚀把山脊磨得浑圆；山中的矿藏支撑起沿线一串工业城市，两侧坡地的森林构成明显不同。再往西是东欧平原，开阔低地上田块规整，冬季常见大范围低云与积雪。飞机在这里转向西南，掠过中欧的河谷与丘陵，越过北海南缘，海面下是冰期留下的浅滩沉积。最后进入荷兰——这个国家有相当一部分国土低于海平面，靠堤坝与排水系统维持，从空中看是被水道切成方格的圩田。飞机降落在阿姆斯特丹西南的史基浦机场，跑道本身就低于海平面。",
    "en-US":
      "Beijing Daxing to Amsterdam runs north-west across the Eurasian landmass, about 8,200 km in all, to the edge of the Rhine delta. After take-off the flight enters the Gobi Desert on the southern edge of the Mongolian Plateau, gravel flats stretching to the horizon under little rain and sparse vegetation, less than 200 millimetres in most years; the wind has carried the fine sand away to leave a hard pavement, the rivers are mostly seasonal, the daily temperature often swings more than thirty degrees, and settlements follow the few springs. The farther north-west it goes, the more the desert turns to steppe and rivers become frequent. Next comes the West Siberian Plain, remarkably flat, where the Ob and other great rivers wind north and the sheer extent of marshland makes this a significant carbon store. Past the Ural Mountains the flight enters an open lowland. The range runs more than two thousand kilometres north to south as the conventional divide between Asia and Europe, long erosion having worn its ridges round; its ore deposits support a string of industrial cities along its length, and the forests on its two flanks differ markedly. Farther west lies the East European Plain, an open lowland of regular fields often under broad winter cloud and snow. The flight turns south-west across it, over the valleys and hills of central Europe and the southern North Sea, whose bed is shallow sediment laid down during the ice ages. It finally reaches the Netherlands, a country with a substantial share of its land below sea level, held by dikes and drainage and reading from the air as polders cut into squares by waterways, and lands at Schiphol south-west of Amsterdam, on runways that themselves lie below sea level.",
    },
    travel: {
    "zh-CN":
      "北京大兴到阿姆斯特丹约10小时25分钟，时差7-8小时（荷兰夏令时期间7小时）。荷兰全年温和多风，夏季凉爽、冬季少雪但湿冷，出行常备一件防风外套。" +
      "史基浦机场距市中心约15公里，火车约15-20分钟直达阿姆斯特丹中央车站，班次密集。市内主要靠自行车和有轨电车，租一辆自行车、办一张OV卡是常见玩法。梵高博物馆、国立博物馆建议提前在线订票。" +
      "荷兰属申根区，签证按国籍不同、以荷兰驻当地使领馆最新公布为准，行前确认并预留办理时间。运河边人行道与自行车道混行，注意避让骑行者。",
    "en-US":
      "Beijing Daxing to Amsterdam takes about 10 hours 25 minutes, with a 7–8 hour time difference (7 hours during Dutch summer time). The Netherlands is mild and windy year-round, with cool summers and damp, low-snow winters — a windproof jacket is worth packing." +
      " Schiphol is about 15 km from the centre, with frequent trains taking 15–20 minutes to Amsterdam Centraal. Getting around the city relies mainly on bicycles and trams; hiring a bike and getting an OV-chipkaart are the common way to explore. Book ahead online for the Van Gogh Museum and the Rijksmuseum." +
      " The Netherlands is in the Schengen area; visa rules vary by nationality — check the latest from the Dutch consulate for your location and allow time to arrange one. Footpaths along the canals often run alongside bike lanes, so watch for cyclists.",
    },
  },
};
