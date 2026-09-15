import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  // tfu-cmb sources（2026-09-15 首写）；核实 2026-09-15 当批（content-verifier 独立检索，两套解说全部 ok，航班号机型时长经 AASL 周时刻表与第二来源确认））：四川盆地四周高山、西部成都平原、紫红色砂岩「红色盆地」、常年多云雾（china sichuan 条目）；横断山脉南北排列的山脊与峡谷、金沙江澜沧江怒江并行南流（china hengduan 条目）；
  // 虎跳峡是金沙江在玉龙雪山与哈巴雪山之间切出的深窄峡谷（china tiger-leaping-gorge 条目；「最深之一」不写）；北中部平原平坦、散落水库（sri-lanka sri-lanka-dry-zone-plain 条目）；
  // 锡吉里耶岩从丛林中升起约 180 m、岩顶有 5 世纪王宫遗址（sri-lanka sigiriya-rock 条目，UNESCO 202）；康提高原被群山围住、马哈韦利河绕出大弯（sri-lanka kandy-plateau 条目）；
  // 尼甘布潟湖经狭窄口门入海、东侧不远是机场跑道（sri-lanka negombo-lagoon 条目）；大圆距离约 3,630 km（按两端机场坐标算）；CMB 距科伦坡市中心直线约 28 km、距尼甘布约 6 km（按坐标算）。
  // 国航 CA425、A320 系列、约 5 h 45 min（见 data/routes/tfu-cmb.json source）。旅游段：ETA、G 型插座、卢比与 ATM、入寺礼仪、波耶日禁酒、季风（英国外交部 2026-05-26 / PUCSL / 统计局，1 级；消费税局禁酒日 2 级）。
  // 零争议：航线经过的其他国家不点名；签证天数与收费、价格不写。
  "tfu-cmb": {
    study: {
      "zh-CN":
        "成都飞科伦坡，全程约3600公里，是一条从中国西南一路向南、翻过横断山区，再飞越孟加拉湾抵达印度洋岛国的航线。飞机从成都天府国际机场起飞，下方是四川盆地：四周高山围着一块相对平坦的绿色低地，西部是田块整齐的成都平原；盆地里的岩石多是紫红色的砂岩和泥岩，所以又叫「红色盆地」，这里常年多云雾，能见度不高。" +
        "飞过盆地西南缘，地势陡然升高，进入横断山脉。这里的山脊和峡谷南北排列，一条雪山、一条深谷，再一条雪山，金沙江、澜沧江、怒江挤在一起向南流去，和秦岭、大巴山这些东西走向的山脉很不一样。" +
        "再往南，金沙江在玉龙雪山和哈巴雪山之间切出一道又深又窄的峡谷——虎跳峡。从空中看，它是两座雪山之间一道笔直的深缝，浑黄的江水在谷底像一条细线，两壁近乎垂直。" +
        "过了滇西北的高山峡谷，山地向南逐渐降低，一道道南北走向的山岭和河谷继续向南延伸，谷地里的河流越来越宽。飞机越过中南半岛西北部的山地，前方出现海岸线，随后进入孟加拉湾上空。" +
        "接下来的两千多公里几乎都是海面。孟加拉湾是印度洋东北部的大海湾，季风在这里一年两次转向：夏季刮西南季风，冬季刮东北季风，风向不同，云和雨的分布也跟着变化。天气好时，下方是一片深蓝，积云在海面上投下一块块影子；雨季时云层很厚，海面若隐若现。" +
        "海面尽头，斯里兰卡岛从东北方向进入视野。飞机从岛的东北部斜穿而过，下方是北中部的干旱平原，平坦的绿褐色大地上散落着大大小小的水库。平原上有一块巨大的灰褐色方墩从丛林里陡然升起约180米，这就是锡吉里耶岩，岩顶保存着5世纪的王宫遗址。" +
        "再往西南，地势抬升，出现一片被群山围住的丘陵盆地，马哈韦利河在其间绕出大弯，这是康提高原，城市康提就在这里，四周山坡上是茶园和森林。" +
        "飞过山地西侧，平原一直延伸到西海岸。飞机下降时能看到一片浅绿色的水面通过狭窄的口门与大海相连，这是尼甘布潟湖，东侧不远就是班达拉奈克国际机场的跑道。飞机在这里降落，科伦坡在南面直线约28公里。",
      "en-US":
        "Chengdu to Colombo covers about 3,600 km, a route that heads south from south-west China, over the Hengduan mountain country and then across the Bay of Bengal to an island nation in the Indian Ocean. Taking off from Chengdu Tianfu International Airport, the flight passes over the Sichuan Basin: a relatively flat green lowland ringed by high mountains, with the neatly divided fields of the Chengdu Plain in the west; its rocks are mostly purplish-red sandstone and mudstone, which is why it is also called the Red Basin, and it is often under cloud and haze, with poor visibility. " +
        "Beyond the south-western edge of the basin the ground rises steeply into the Hengduan Mountains. Here ridges and gorges run north to south — a snow range, a deep valley, then another snow range — and the Jinsha, Lancang and Nu rivers flow south side by side, quite unlike east–west ranges such as the Qinling and Daba mountains. " +
        "Further south, the Jinsha River has cut a deep, narrow gorge between Jade Dragon Snow Mountain and Haba Snow Mountain — Tiger Leaping Gorge. From the air it is a straight, deep slit between the two snow mountains, with the muddy river a thin line at the bottom and near-vertical walls. " +
        "Past the high mountains and gorges of north-western Yunnan, the mountains gradually drop to the south, ridges and valleys running north–south continue southwards, and the rivers in the valleys grow wider. The flight crosses the mountains of the north-western Indochinese Peninsula, a coastline appears ahead, and then it is out over the Bay of Bengal. " +
        "For the next two thousand kilometres and more, there is almost nothing but sea. The Bay of Bengal is a great bay in the north-eastern Indian Ocean where the monsoon reverses twice a year: the south-west monsoon in summer and the north-east monsoon in winter, with cloud and rain shifting as the wind changes. In good weather the sea below is deep blue, with cumulus clouds casting patches of shadow on the water; in the rainy season thick cloud hides the sea for long stretches. " +
        "At the far side of the sea, the island of Sri Lanka comes into view from the north-east. The flight crosses the north-east of the island diagonally, over the dry plain of the North Central region, a flat green-brown land dotted with reservoirs large and small. From the jungle on the plain a huge grey-brown block rises abruptly about 180 m — Sigiriya Rock, with the ruins of a 5th-century palace on its summit. " +
        "Further south-west the ground rises into a basin of hills ringed by mountains, where the Mahaweli River swings in a great bend: this is the Kandy Plateau, home to the city of Kandy, with tea estates and forest on the surrounding slopes. " +
        "Past the western side of the hills, the plain runs all the way to the west coast. As the flight descends, a pale green sheet of water appears, joined to the sea by a narrow inlet — Negombo Lagoon — with the runway of Bandaranaike International Airport a short distance to the east. The flight lands here, with Colombo about 28 km to the south in a straight line.",
    },
    travel: {
      "zh-CN":
        "成都到科伦坡约5小时45分，这条航线由中国国际航空执飞。入境斯里兰卡前须在线申请电子旅行许可（ETA），具体规定以斯里兰卡移民与出入境局最新公布为准，行前确认。" +
        "班达拉奈克国际机场在科伦坡北面，距市中心直线约28公里，离尼甘布只有约6公里，赶早晚航班可以住在尼甘布。" +
        "斯里兰卡的标准插座是英式三方脚（G型），老建筑里可能还是圆脚插座。货币是斯里兰卡卢比，主要城镇有ATM，但并非都接受外国卡。进寺庙要遮住肩膀和腿、脱鞋脱帽，不要背对佛像合影；每月月圆的波耶日全国停售酒类。" +
        "西南季风在5–9月，雨主要落在西南部；10–11月是全岛雨最多的时期；东北季风在12–2月，主要影响东半部。从机场出发，西南海岸的加勒、山地里的康提和北中部的古城都可以坐车前往。",
      "en-US":
        "Chengdu to Colombo takes about 5 hours 45 minutes, and the route is operated by Air China. Before entering Sri Lanka you must apply online for an Electronic Travel Authorisation (ETA); follow the latest announcements of Sri Lanka's Department of Immigration and Emigration and confirm before travelling. " +
        "Bandaranaike International Airport is north of Colombo, about 28 km from the centre in a straight line and only about 6 km from Negombo, so for early or late flights you can stay in Negombo. " +
        "Sri Lanka's standard socket is the British three-square-pin type (Type G), though older buildings may still have round-pin sockets. The currency is the Sri Lankan rupee; main towns have ATMs, but not all accept foreign cards. In temples cover shoulders and legs, take off shoes and hats, and don't pose with your back to a Buddha statue; alcohol sales stop nationwide on the monthly full-moon Poya day. " +
        "The south-west monsoon from May to September brings rain mainly to the south-west; October–November is the wettest period island-wide; the north-east monsoon from December to February mainly affects the eastern half. From the airport, Galle on the south-west coast, Kandy in the hills and the ancient cities of the North Central region can all be reached by road.",
    },
  },
  // ckg-cmb sources（2026-09-15 首写）；核实 2026-09-15 当批（content-verifier 独立检索，两套解说全部 ok，航班号机型时长经 AASL 周时刻表与第二来源确认））：四川盆地东部平行岭谷（china sichuan 条目）；云贵高原海拔 1000–2000 m、喀斯特峰林峰丛、坝子（china yunnan-guizhou 条目）；斯里兰卡段同 tfu-cmb；
  // 大圆距离约 3,750 km（按两端机场坐标算）；重庆航空 OQ2393、A320neo、约 5 h 40 min，同号在科伦坡之后续飞马累（见 data/routes/ckg-cmb.json source，重庆市政府网 + AASL 周时刻表，1 级）。
  // 零争议：航线经过的其他国家不点名；马尔代夫一段不展开；签证天数与收费、价格不写。
  "ckg-cmb": {
    study: {
      "zh-CN":
        "重庆飞科伦坡，全程约3750公里，是一条从四川盆地东部出发、斜穿云贵高原，再飞越孟加拉湾抵达斯里兰卡的航线。飞机从重庆江北国际机场起飞，下方是四川盆地的东部：一排排平行的低山和谷地像搓衣板一样排列，山岭之间是农田和城镇，盆地的岩石多是紫红色的砂岩和泥岩。" +
        "飞机向西南越过盆地南缘，地势抬升，进入云贵高原。高原海拔一千到两千米，石灰岩被水溶蚀，地面上密密麻麻分布着圆锥形、馒头形的小山头，山间是封闭的洼地和小盆地，当地叫「坝子」，耕地和城镇都挤在坝子里；地表的河流常常钻进地下，又在别处冒出来。" +
        "高原的西南部被一条条南北走向的深谷切开，河流向南流去，地势逐渐降低，谷地越来越宽。飞机越过中南半岛西北部的山地，前方出现海岸线，随后进入孟加拉湾上空。" +
        "接下来的两千多公里几乎都是海面。孟加拉湾是印度洋东北部的大海湾，季风在这里一年两次转向：夏季刮西南季风，冬季刮东北季风，云和雨的分布也跟着变化。天气好时海面一片深蓝，积云在海上投下一块块影子；雨季时云层很厚，海面若隐若现。" +
        "海面尽头，斯里兰卡岛从东北方向进入视野。飞机斜穿岛的东北部，下方是北中部的干旱平原，平坦的绿褐色大地上散落着大大小小的水库，干季偏黄、雨季转绿。平原上一块巨大的灰褐色岩墩从丛林里陡然升起约180米，这是锡吉里耶岩，岩顶保存着5世纪的王宫遗址，岩脚下是规则排列的古代园林和水池。" +
        "再往西南，地势抬升成群山围住的丘陵盆地，马哈韦利河在其间绕出大弯，这是康提高原，城镇、湖泊和稻田分布在河谷与缓坡上。" +
        "越过山地，平原一直铺到西海岸。飞机下降时，一片浅绿色的水面通过狭窄的口门与大海相连，湖中有渔船和捕鱼用的木桩，这是尼甘布潟湖；潟湖东侧不远就是班达拉奈克国际机场，飞机在这里降落，科伦坡在南面直线约28公里。",
      "en-US":
        "Chongqing to Colombo covers about 3,750 km, a route that sets out from the eastern Sichuan Basin, cuts diagonally across the Yunnan–Guizhou Plateau and then crosses the Bay of Bengal to Sri Lanka. Taking off from Chongqing Jiangbei International Airport, the flight passes over the eastern Sichuan Basin: rows of parallel low ridges and valleys lie like a washboard, with farmland and towns between the ridges, and the basin's rocks are mostly purplish-red sandstone and mudstone. " +
        "Heading south-west over the southern rim of the basin, the ground rises onto the Yunnan–Guizhou Plateau. The plateau stands 1,000 to 2,000 m high, and its limestone has been dissolved by water into a dense scatter of conical and dome-shaped hills, with enclosed hollows and small basins between them, known locally as bazi, where farmland and towns crowd together; rivers often vanish underground and reappear elsewhere. " +
        "The south-west of the plateau is cut by deep valleys running north to south, the rivers flow south, the land gradually drops and the valleys widen. The flight crosses the mountains of the north-western Indochinese Peninsula, a coastline appears ahead, and then it is out over the Bay of Bengal. " +
        "For the next two thousand kilometres and more, there is almost nothing but sea. The Bay of Bengal is a great bay in the north-eastern Indian Ocean where the monsoon reverses twice a year: the south-west monsoon in summer and the north-east monsoon in winter, with cloud and rain shifting as it does. In good weather the sea is deep blue, with cumulus clouds casting patches of shadow on the water; in the rainy season thick cloud hides the sea for long stretches. " +
        "At the far side of the sea, the island of Sri Lanka comes into view from the north-east. The flight crosses the north-east of the island diagonally, over the dry plain of the North Central region, a flat green-brown land dotted with reservoirs large and small, yellowish in the dry season and green in the wet. From the jungle on the plain a huge grey-brown block rises abruptly about 180 m — Sigiriya Rock, with the ruins of a 5th-century palace on its summit and ancient gardens and pools laid out in regular lines at its foot. " +
        "Further south-west the ground rises into a basin of hills ringed by mountains, where the Mahaweli River swings in a great bend: this is the Kandy Plateau, with towns, lakes and rice fields spread along its valleys and gentle slopes. " +
        "Beyond the hills, the plain spreads all the way to the west coast. As the flight descends, a pale green sheet of water appears, joined to the sea by a narrow inlet and dotted with fishing boats and fishing stakes — Negombo Lagoon; Bandaranaike International Airport lies a short distance east of it, and the flight lands there, with Colombo about 28 km to the south in a straight line.",
    },
    travel: {
      "zh-CN":
        "重庆到科伦坡约5小时40分，这条航线由重庆航空执飞；同一班飞机在科伦坡之后继续飞往马尔代夫的马累，去斯里兰卡的旅客在科伦坡下机。入境斯里兰卡前须在线申请电子旅行许可（ETA），具体规定以斯里兰卡移民与出入境局最新公布为准，行前确认。" +
        "班达拉奈克国际机场在科伦坡北面，距市中心直线约28公里，离尼甘布只有约6公里。" +
        "斯里兰卡的标准插座是英式三方脚（G型）；货币是斯里兰卡卢比，主要城镇有ATM，但并非都接受外国卡。餐厅和酒店账单通常已加收服务费，小费自愿；不建议直接喝自来水。进寺庙要遮住肩膀和腿、脱鞋脱帽，不要背对佛像合影，每月月圆的波耶日全国停售酒类。" +
        "10–11月是全岛雨最多的时期，山区雨季要留意滑坡和道路中断；许多海滩在某些月份有危险的浪涌和离岸流，下水前看清警示。",
      "en-US":
        "Chongqing to Colombo takes about 5 hours 40 minutes, and the route is operated by Chongqing Airlines; the same aircraft continues from Colombo to Malé in the Maldives, and passengers for Sri Lanka leave the flight in Colombo. Before entering Sri Lanka you must apply online for an Electronic Travel Authorisation (ETA); follow the latest announcements of Sri Lanka's Department of Immigration and Emigration and confirm before travelling. " +
        "Bandaranaike International Airport is north of Colombo, about 28 km from the centre in a straight line and only about 6 km from Negombo. " +
        "Sri Lanka's standard socket is the British three-square-pin type (Type G); the currency is the Sri Lankan rupee, and main towns have ATMs, but not all accept foreign cards. Restaurant and hotel bills usually include a service charge and tipping is voluntary; don't drink tap water straight. In temples cover shoulders and legs, take off shoes and hats, and don't pose with your back to a Buddha statue; alcohol sales stop nationwide on the monthly full-moon Poya day. " +
        "October–November is the wettest period island-wide, so watch for landslides and road closures in the hills in the rainy season; many beaches have dangerous swells and rip currents in some months, so check the warnings before swimming.",
    },
  },
};
