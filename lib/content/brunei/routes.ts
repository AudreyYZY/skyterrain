import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  // pkx-bwn sources（2026-09-15 首写；核实 2026-09-15 当批（content-verifier 独立检索，两套解说全部 ok，航班号两源、机型 A320neo 以中国民航网 + 实飞记录两源确认））：华北平原地势低平、多在 50 m 以下、密集的矩形农田（china north-china 条目）；大别山是长江与淮河的分水岭、连绵浑圆的中低山（china dabie 条目）；
  // 鄱阳湖丰水期连成大水面、枯水期退成河道与草洲（china poyang 条目）；文莱河口两岸是城市与红树林、河上是水村（brunei brunei-river-estuary 条目）；文莱湾内湾是全国红树林的主要分布区（brunei brunei-bay-mangroves 条目）；
  // 文莱国土分东西两块、陆地面积约 5,765 km²（统计年鉴 2025，1 级）；大圆距离约 3,850 km（按两端机场坐标算）；BWN 距斯里巴加湾市中心直线约 6 km（按坐标算）。
  // 文莱皇家航空 BI624、A320neo、约 5 h 30 min（见 data/routes/pkx-bwn.json source）。旅游段：电子入境卡、护照 6 个月、不售酒与限量携带须申报、周五 12:00–14:00 关门、文莱元与新加坡元 1:1 互换、Dart 打车（英国外交部 2026-03-19 / 旅游局，1 级）。
  // 零争议：南海只写「飞越南海」，不写任何岛礁、海域与主张；国界、王室、宗教评价不写；签证天数不写。
  "pkx-bwn": {
    study: {
      "zh-CN":
        "北京飞斯里巴加湾，全程约3850公里，是一条从华北一路向南、纵穿中国东部，再飞越南海抵达加里曼丹岛西北岸的航线。飞机从北京大兴国际机场起飞，下方是华北平原：地势极其低平，大多在海拔50米以下，从空中看是一大片密集的矩形农田和城镇，几乎看不到起伏。" +
        "向南飞过黄河与淮河流经的平原，前方出现一片连绵、浑圆的深绿色中低山——大别山。它是长江和淮河的分水岭，北坡的水流入淮河，南坡的水流入长江，山间谷地里是茶园、农田和一座座水库。" +
        "越过大别山，飞机进入长江中游，很快在长江南岸看到一片会「变脸」的大湖——鄱阳湖。夏季汛期它是一整片大水面，冬季枯水期退成弯弯曲曲的河道，河道之间是大片黄绿色的草洲。" +
        "过了鄱阳湖，下方是江西和广东的丘陵与山地，一道道山岭之间是红土的丘陵、河谷里的农田和城镇。山地的尽头就是海岸线，飞机离开大陆，进入南海上空。" +
        "接下来的两千多公里几乎都是海面。天气好的时候，海水从近岸的浑绿逐渐变成深蓝，一团团积云在海面上投下影子；热带海面上常有高耸的积雨云，飞机会绕开它们飞行。这段夜航的大部分时间里，窗外是一片黑暗，偶尔能看到远处船只的灯光。" +
        "天快亮时，前方出现加里曼丹岛西北岸的海岸线：这就是文莱。飞机下降时，下方是覆盖着雨林和沼泽的低地，一条宽阔的褐色河流在城市旁边流过，河面上是成片建在木桩上的高脚屋——这就是文莱河口的水村。河口东北方向是文莱湾，湾里是一块块深绿色的红树林岛屿。飞机降落在文莱国际机场，首都斯里巴加湾市就在南面约6公里。",
      "en-US":
        "Beijing to Bandar Seri Begawan covers about 3,850 km, a route that heads south from northern China, down the length of eastern China and then across the South China Sea to the north-west coast of Borneo. Taking off from Beijing Daxing International Airport, the flight passes over the North China Plain: extremely flat, mostly below 50 m above sea level, a vast grid of rectangular fields and towns with almost no relief. " +
        "Heading south over the plains crossed by the Yellow River and the Huai, a range of rolling, rounded dark green hills appears ahead — the Dabie Mountains. They form the divide between the Yangtze and the Huai: water from the northern slopes flows to the Huai and from the southern slopes to the Yangtze, and the valleys hold tea gardens, fields and reservoir after reservoir. " +
        "Beyond the Dabie Mountains the flight reaches the middle Yangtze and soon, on the south bank of the river, a lake that 'changes its face' — Poyang Lake. In the summer flood season it is one great sheet of water; in the winter dry season it shrinks to winding channels with broad yellow-green grassy flats between them. " +
        "Past Poyang Lake lie the hills and mountains of Jiangxi and Guangdong, red-soil hills between the ridges and fields and towns in the valleys. Where the mountains end is the coastline, and the flight leaves the mainland and heads out over the South China Sea. " +
        "For the next two thousand kilometres and more, there is almost nothing but sea. In good weather the water turns from murky green near the coast to deep blue, with cumulus clouds casting shadows on the surface; tropical seas often breed towering thunderclouds that aircraft steer around. For much of this night flight the window shows only darkness, with the occasional light of a distant ship. " +
        "As dawn approaches, the north-west coast of Borneo appears ahead: this is Brunei. On the descent the land below is low and covered in rainforest and swamp, a broad brown river flows past a city, and on the water stand rows of houses on stilts — the water village of Kampong Ayer on the Brunei River estuary. North-east of the estuary lies Brunei Bay, dotted with dark green mangrove islands. The flight lands at Brunei International Airport, with the capital, Bandar Seri Begawan, about 6 km to the south.",
    },
    travel: {
      "zh-CN":
        "北京到斯里巴加湾约5小时30分，这条航线由文莱皇家航空执飞，出发机场是北京大兴国际机场。入境文莱前须在线填写电子入境卡，护照有效期至少6个月，签证与免签规定以文莱移民局最新公布为准，行前确认。" +
        "文莱国际机场距首都市中心直线约6公里，开车约15分钟；这里没有Grab和Uber，打车用本地应用Dart，出租车打表。" +
        "文莱不售卖酒类，成年非穆斯林可限量携带入境，但必须申报，只能在私人场所饮用。每周五中午12点到下午2点，商店、餐馆和银行都会关门。货币是文莱元，与新加坡元按1比1互换，新加坡元纸币也能直接用。" +
        "文莱全年炎热多雨，首都的清真寺与水村、西块的默林本湖和东块的淡布隆雨林都值得一去；进雨林不要独自徒步。",
      "en-US":
        "Beijing to Bandar Seri Begawan takes about 5 hours 30 minutes; the route is operated by Royal Brunei Airlines and departs from Beijing Daxing International Airport. Before entering Brunei you must fill in the online E-Arrival Card, and your passport must be valid for at least 6 months; for visa rules follow the latest announcements of Brunei's immigration department and confirm before travelling. " +
        "Brunei International Airport is about 6 km from the capital's centre in a straight line, about 15 minutes by car; Grab and Uber don't operate here, so book taxis on the local app Dart, and taxis are metered. " +
        "Alcohol is not sold in Brunei; adult non-Muslims may bring in a limited amount but must declare it and may drink it only in private. Every Friday from 12:00 to 14:00 shops, restaurants and banks close. The currency is the Brunei dollar, interchangeable one-to-one with the Singapore dollar, and Singapore dollar notes can be used directly. " +
        "Brunei is hot and rainy all year; the capital's mosques and Kampong Ayer, Tasek Merimbun in the western part and the Temburong rainforest in the eastern part are all worth a visit — but don't hike the rainforest alone.",
    },
  },
};
