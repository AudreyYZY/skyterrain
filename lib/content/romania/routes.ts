import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  // pek-otp sources（2026-09-15 首写；核实 2026-09-15 当批（content-verifier 独立检索，航班号 / 机型 / 时长与两套解说全部 ok））：戈壁以砾石与基岩为主（gobi / mongolia-gobi 条目）；巴尔喀什湖湖心乌津阿拉尔海峡分隔东西两半、西半伊犁河注入淡水含盐低、东半偏咸（lake-balkhash 条目）；
  // 北咸海 20 世纪中叶以来因上游引水灌溉萎缩，2005 年建成科克阿拉尔坝后逐步蓄水扩大（north-aral-sea 条目）；里海无出海口（caspian-sea-coast-kazakhstan 条目）；
  // 黑海经海峡与地中海相连、深层海水长期缺氧（通识，核实时确认）；多布罗加高原为长期剥蚀的古老低缓台地、年降水低于 450 mm（INS 年鉴，1 级，dobrogea-plateau 条目）；罗马尼亚平原为多瑙河下游北岸沉积平原（romanian-plain 条目）；
  // 国航 2026-09-04 开航、每周三班（北京市政府网转新华社，1 级）；PEK—OTP 大圆约 7,050 km（按坐标算）；OTP 在伊尔福夫县奥托佩尼、北站直达火车约 20–25 分钟（CFR Călători，1 级）；
  // 2024-03-31 取消申根内部空中与海上边界管控、2025-01-01 取消陆地边界检查（欧委会 / 欧盟理事会，1 级）；2023-01-01 起小费单列在收银小票上（ANAF，1 级）。
  "pek-otp": {
    study: {
      "zh-CN":
        "北京飞布加勒斯特，是一条横跨欧亚大陆中部、一路向西的航线，两地的大圆距离约7000公里。飞机离开华北平原北缘，越过内蒙古高原的边缘之后，下方很快变成蒙古戈壁：戈壁的地表以砾石和裸露的基岩为主，沙丘并不多，那是风把细颗粒吹走、留下粗颗粒的结果；这里夏季炎热、冬季严寒，降水稀少。" +
        "继续向西进入中亚，地面是连绵的干旱荒漠与草原。巴尔喀什湖在下方像一条弯曲的长带：湖心有一道狭窄的海峡，把湖分成东西两半——西半部有伊犁河注入的淡水，含盐量低；东半部河流补给少、蒸发强，湖水偏咸。同一个湖里咸淡两种水并存，靠的就是那道海峡阻碍了两边的湖水混合。巴尔喀什湖以西更加空旷，地表几乎没有树，只有干河道与零星的盐沼。" +
        "再往西是北咸海。二十世纪中叶以来，流入咸海的河水被大量引去灌溉，湖面急剧萎缩；2005年，科克阿拉尔坝建成，把北咸海与南边的水域隔开蓄水，此后北咸海的水面逐步扩大。从空中看，湖岸外围是大片裸露的旧湖床，颜色发白。" +
        "越过这片低地，前方是里海。里海没有出海口，是一片被陆地完全包围的水体，东岸一带气候干燥，岸边是荒漠与台地。" +
        "飞过里海，再经过里海与黑海之间的陆地，飞机来到黑海上空。黑海几乎是封闭的，只通过狭窄的海峡与地中海相连；表层有大量河水注入，深层海水则长期缺氧——上下两层海水很少交换。" +
        "航线最后越过黑海西岸，进入罗马尼亚。海岸后面是多布罗加高原，一片长期被剥蚀的古老低缓台地，年降水不足450毫米；过了多瑙河，就是罗马尼亚平原——多瑙河下游北岸的大沉积平原，地面平坦、河谷宽阔、田块整齐。终点布加勒斯特就在这片平原上。",
      "en-US":
        "Beijing to Bucharest is a westbound route right across the middle of Eurasia, the great-circle distance between the two cities being about 7,000 km. Leaving the northern edge of the North China Plain and crossing the rim of the Inner Mongolian Plateau, the flight soon has the Mongolian Gobi below: a gobi's surface is mainly gravel and bare bedrock, with few dunes — the wind has carried the fine particles away and left the coarse ones behind — and summers here are hot, winters severe and rainfall scarce. " +
        "Further west, into Central Asia, the ground is an unbroken spread of dry desert and steppe. Lake Balkhash lies below like a long, curving band: a narrow strait in the middle divides it into eastern and western halves — the west receives fresh water from the Ili River and is low in salt, while the east, with little river inflow and strong evaporation, is brackish. Fresh and salty water coexist in one lake because that strait keeps the two halves from mixing. West of Balkhash the land is emptier still, almost treeless, with only dry riverbeds and scattered salt marshes. " +
        "Further west again is the North Aral Sea. Since the mid-20th century, the rivers feeding the Aral have been heavily drawn off for irrigation and the lake shrank dramatically; in 2005 the Kokaral Dam was completed, separating the North Aral from the waters to the south so it could refill, and the North Aral's surface has gradually grown since. From the air, wide stretches of exposed former lakebed, pale white, surround its shores. " +
        "Beyond these lowlands lies the Caspian Sea. The Caspian has no outlet to the ocean — a body of water entirely enclosed by land — and its eastern shores are dry, lined with desert and tableland. " +
        "Across the Caspian and the land between it and the Black Sea, the flight reaches the Black Sea itself. The Black Sea is almost enclosed, connected to the Mediterranean only through narrow straits; rivers pour large volumes of water into its surface layer, while its deep water has long been starved of oxygen — the upper and lower layers rarely exchange water. " +
        "At the end the route crosses the western shore of the Black Sea into Romania. Behind the coast is the Dobrogea Plateau, an ancient, low tableland worn down over a very long time, with less than 450 mm of rain a year; beyond the Danube is the Romanian Plain — the great sedimentary plain on the north bank of the lower Danube, flat, with broad valleys and neat fields. Bucharest, the destination, stands on this plain.",
    },
    travel: {
      "zh-CN":
        "北京到布加勒斯特约十一小时。这条航线由中国国际航空执飞，2026年9月开通，每周三班；航班在布加勒斯特落地之后还会续飞萨格勒布，下机时留意广播，不要错过布加勒斯特这一站。" +
        "罗马尼亚是欧盟成员，2024年3月31日起取消申根内部的空中与海上边界管控，2025年1月1日起取消陆地边界检查；但罗马尼亚使用的是本国货币列伊，不是欧元。签证按国籍不同、以罗马尼亚驻当地使领馆最新公布为准，行前确认并预留办理时间。" +
        "亨利·科安德国际机场不在布加勒斯特市内，而在伊尔福夫县的奥托佩尼，离老城直线约15.5公里；从机场坐直达火车到布加勒斯特北站约20到25分钟，也有机场公交。" +
        "餐厅小费出于自愿；2023年起，餐厅收到的小费会作为单独一行打在收银小票上。5–6月与9–10月最舒适，7–8月平原炎热，冬季寒冷。去布拉索夫、锡比乌等特兰西瓦尼亚城市可以从北站坐火车。",
      "en-US":
        "Beijing to Bucharest takes about eleven hours. The route is operated by Air China, launched in September 2026 with three flights a week; after landing in Bucharest the aircraft continues to Zagreb, so listen to the announcements and make sure you get off at Bucharest. " +
        "Romania is in the EU; internal Schengen air and sea border controls were lifted on 31 March 2024 and land border checks on 1 January 2025, but Romania uses its own currency, the leu, not the euro. Visa requirements vary by nationality and are as most recently published by the Romanian embassy or consulate in your country — confirm before travelling and allow time. " +
        "Henri Coandă International Airport is not in Bucharest itself but in Otopeni, Ilfov County, about 15.5 km in a straight line from the old town; a direct train to Bucharest North station takes about 20 to 25 minutes, and there is also an airport bus. " +
        "Tipping in restaurants is voluntary; since 2023, tips left in restaurants have been printed as a separate line on the receipt. May–June and September–October are the most comfortable, July–August is hot on the plains and winters are cold. For Transylvanian cities such as Brașov and Sibiu, take the train from Bucharest North.",
    },
  },
};
