import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "ber-muc": {
    // study sources: 全四段（study/travel × 中英）: 图林根森林约 70 km、海西造山与本库一致；慕尼黑机场原写「有高铁直达」，改为 S-Bahn 直达、高铁需总站换乘。核实 2026-09-11
    study: {
    "zh-CN":
      "柏林飞慕尼黑，是从北德平原一路南下、飞进巴伐利亚腹地的航线。起飞后不久，脚下还是柏林周边平坦的湖泊与农田；越往南，地面渐渐隆起，进入图林根盆地南缘一条连绵的深绿色山脊——图林根森林，一条走向西北—东南、由海西造山运动形成的古老山地，长约70公里，山脊浑圆、轮廓清晰，与北边平缓的盆地农田形成鲜明对比。越过图林根森林，飞机继续南下，进入巴伐利亚的丘陵和农田，慕尼黑就坐落在伊萨尔河畔、巴伐利亚阿尔卑斯山北麓。",
    "en-US":
      "Berlin to Munich flies south from the North German Plain into the heart of Bavaria. Soon after take-off the land below is still flat lakes and farmland around Berlin; further south the ground begins to rise into a continuous, deep-green ridge along the southern edge of the Thuringian Basin — the Thuringian Forest, an old range trending north-west to south-east, formed by the Hercynian orogeny, its ridge rounded and clearly defined against the gentle basin farmland to the north. Past the Thuringian Forest the plane continues south over Bavaria's hills and farmland, with Munich sitting on the Isar at the northern foot of the Bavarian Alps.",
    },
    travel: {
    "zh-CN":
      "柏林到慕尼黑飞约1小时5分钟，同一时区，是德国最繁忙的国内航线之一，也可以选择约4小时的城际快车（ICE）。两座城市气质迥异：柏林是充满当代艺术气息的首都，慕尼黑则保留着传统巴伐利亚风情。慕尼黑机场离市区约30公里，有城铁（S-Bahn）直达市区，换乘长途高铁需到慕尼黑火车总站。十月啤酒节期间（9月中旬至10月初）往返两地的航班和住宿都很紧张，建议提前订。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Berlin to Munich is about 1 hour 5 minutes, same time zone, one of Germany's busiest domestic routes — the ICE high-speed train (about 4 hours) is another option. The two cities feel very different: Berlin is the capital with a strong contemporary-art scene, Munich keeps a traditional Bavarian character. Munich Airport is about 30 km from the centre with a rail line running directly there. During Oktoberfest (mid-September to early October) flights and accommodation between the two cities get tight — book ahead. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },


  "ber-cgn": {
    // study sources: 全四段（study/travel × 中英）: 布罗肯峰年均起雾近 300 天、女巫传说以「民间传说」限定、条顿堡战役地点「据信」与本库一致；科隆 / 波恩机场有 ICE 与 S-Bahn。核实 2026-09-11
    study: {
    "zh-CN":
      "柏林飞科隆，是一趟横穿德国中部、飞越两片古老山地的航线。起飞后不久，地面隆起成一片孤立耸立在平原上的深色森林山地——哈茨山，主峰布罗肯峰终年云雾缭绕，是德国北部平原上唯一能看到高山气候的地方，古老的花岗岩山顶在民间传说中长期被认为是女巫聚会之地。越过哈茨山，飞机继续西行，进入条顿堡森林——一条由多列平行山脊组成的单面山地带，公元9年古罗马与日耳曼部落的著名战役据信就发生在这一带。翻过条顿堡森林后，飞机沿莱茵河下降，抵达以哥特式大教堂闻名的科隆。",
    "en-US":
      "Berlin to Cologne crosses central Germany and two old massifs. Soon after take-off the land rises into a dark, forested massif standing alone on the plain — the Harz, its summit the Brocken shrouded in cloud nearly year-round, the only place on the North German Plain with a genuinely alpine microclimate. Past the Harz the plane continues west into the Teutoburg Forest, a band of parallel cuesta ridges — a famous battle between Roman legions and Germanic tribes in AD 9 is believed to have taken place in this general area. Beyond the Teutoburg Forest the plane descends along the Rhine into Cologne, known for its Gothic cathedral.",
    },
    travel: {
    "zh-CN":
      "柏林到科隆飞约1小时10分钟，同一时区，也可以选择约4个半小时的城际快车。科隆以科隆大教堂和2—3月的狂欢节闻名，狂欢节期间住宿会很紧张。机场离市区约15公里，有高铁和城铁直达市中心。科隆老城适合步行游览。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Berlin to Cologne is about 1 hour 10 minutes, same time zone; the ICE high-speed train (about 4.5 hours) is another option. Cologne is known for its cathedral and its February–March Carnival, when accommodation gets tight. The airport is about 15 km from the centre with a rail line and S-Bahn running directly there. Cologne's old town is easy to explore on foot. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "muc-ham": {
    // study sources: 全四段（study/travel × 中英）: 北德平原第四纪冰川地貌与本库一致；汉堡机场原写「地铁直达」，改为 S-Bahn。核实 2026-09-11
    study: {
    "zh-CN":
      "慕尼黑飞汉堡，是一趟纵贯德国南北的航线，从巴伐利亚阿尔卑斯山脚下一路飞到北海之滨。起飞后先经过图林根森林的连绵山脊——一条由海西造山运动留下的古老山地，随后是孤立耸立在平原上的哈茨山，布罗肯峰终年云雾缭绕，年均起雾天数近300天。越过哈茨山，地面逐渐变得平坦开阔，进入北德平原——第四纪冰川反复塑造留下的低地，终碛垄和冰蚀小湖星罗棋布。飞机全程几乎看遍了德国从南到北的地形变化，最终降落在易北河畔的汉堡。",
    "en-US":
      "Munich to Hamburg runs the length of Germany, from the foot of the Bavarian Alps to the North Sea coast. After take-off comes the continuous ridge of the Thuringian Forest, then the Harz standing alone on the plain, its Brocken summit shrouded in cloud nearly year-round. Past the Harz the land grows flatter and more open, entering the North German Plain — a lowland repeatedly reshaped by Quaternary glaciation, dotted with terminal moraine ridges and glacial lakes. The flight takes in almost the full range of German terrain from south to north, finally landing at Hamburg on the Elbe.",
    },
    travel: {
    "zh-CN":
      "慕尼黑到汉堡飞约1小时15分钟，同一时区，是德国南北向最长的国内航线之一，也可以选择约6小时的城际快车。两地气候和文化都有明显差异：慕尼黑属大陆性气候、巴伐利亚传统浓厚，汉堡属温带海洋性气候、港口贸易气息浓厚。汉堡机场离市区约10公里，有城铁（S-Bahn）直达市中心。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Munich to Hamburg is about 1 hour 15 minutes, same time zone, one of Germany's longest north–south domestic routes — the ICE high-speed train (about 6 hours) is another option. The climate and culture differ noticeably between the two: Munich has a continental climate and strong Bavarian traditions, while Hamburg has a temperate maritime climate and a strong port-trade character. Hamburg Airport is about 10 km from the centre with an S-Bahn line running directly there. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "fra-muc": {
    // study sources: 全四段（study/travel × 中英）: 施瓦本汝拉阿尔布陡崖近 180 km、索伦霍芬始祖鸟化石与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "法兰克福飞慕尼黑，是一趟横穿德国西南部两片侏罗纪石灰岩台地的航线。起飞后不久，地面出现一片明显的地形分界——施瓦本汝拉山，西北边缘一道连续近180公里的陡崖（阿尔布陡崖）俯瞰内卡河谷，台地内部喀斯特溶洞密布。越过施瓦本汝拉山，飞机进入弗兰肯汝拉山——同一套侏罗纪石灰岩台地向东北的延续，索伦霍芬一带出产的精细石灰岩因保存了包括始祖鸟在内的大量化石而闻名。翻过弗兰肯汝拉山后，飞机继续南下，抵达巴伐利亚阿尔卑斯山北麓的慕尼黑。",
    "en-US":
      "Frankfurt to Munich crosses two Jurassic limestone tablelands in south-west Germany. Soon after take-off a sharp topographic boundary appears below — the Swabian Jura, its north-western edge a continuous cliff line nearly 180 km long (the Albtrauf) overlooking the Neckar valley, its interior riddled with karst caves. Past the Swabian Jura the plane enters the Franconian Jura, the same Jurassic limestone tableland continuing north-east, known for the fine-grained limestone quarried around Solnhofen that preserves a wealth of fossils, including Archaeopteryx. Beyond the Franconian Jura the plane continues south into Munich, at the northern foot of the Bavarian Alps.",
    },
    travel: {
    "zh-CN":
      "法兰克福到慕尼黑飞约1小时，同一时区，也可以选择约3小时15分钟的城际快车。法兰克福机场是德国最大的国际枢纽，很多国际旅客会经这里转机。慕尼黑以传统啤酒文化和阿尔卑斯山景闻名，十月啤酒节期间机票和酒店都很紧张。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Frankfurt to Munich is about 1 hour, same time zone; the ICE high-speed train (about 3 hours 15 minutes) is another option. Frankfurt Airport is Germany's largest international hub, and many international travellers connect through here. Munich is known for traditional beer culture and Alpine scenery, and flights and hotels get tight during Oktoberfest. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "fra-drs": {
    // study sources: 全四段（study/travel × 中英）: 瓦塞尔库佩 950 m、德国滑翔运动发源地与本库一致；德累斯顿机场 S-Bahn 直达。核实 2026-09-11
    study: {
    "zh-CN":
      "法兰克福飞德累斯顿，是一趟穿越德国中部几片古老山地的航线。起飞后先经过罗恩山——一座早已停止活动的死火山遗迹，玄武质喷发留下的高地边缘散布着许多孤立火山颈，核心区域“高罗恩”最高点瓦塞尔库佩峰海拔950米，因视野开阔、气流稳定，是德国滑翔机运动的发源地。越过罗恩山，飞机进入图林根森林——一条走向西北—东南、山脊浑圆的古老山地，是海西造山运动留下的痕迹。翻过图林根森林后，飞机继续东行，降落在易北河畔、以巴洛克老城闻名的德累斯顿。",
    "en-US":
      "Frankfurt to Dresden crosses several old massifs in central Germany. After take-off comes the Rhön, the remnant of a long-extinct volcano, its core \"High Rhön\" area open and windswept — the birthplace of German gliding. Past the Rhön the plane enters the Thuringian Forest, an old range trending north-west to south-east with a rounded ridge, a legacy of the Hercynian orogeny. Beyond the Thuringian Forest the plane continues east and lands at Dresden on the Elbe, known for its Baroque old town.",
    },
    travel: {
    "zh-CN":
      "法兰克福到德累斯顿飞约1小时5分钟，同一时区，也可以选择约4个半小时的城际快车（多需换乘）。德累斯顿以保存完好的巴洛克老城和艺术收藏闻名，也是探访萨克森瑞士砂岩地貌的门户。机场离市区约9公里，有城铁直达市中心。12月的圣诞市场是德累斯顿的一大特色。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Frankfurt to Dresden is about 1 hour 5 minutes, same time zone; the ICE high-speed train (about 4.5 hours, usually with a change) is another option. Dresden is known for its well-preserved Baroque old town and art collections, and it's the gateway to the sandstone landforms of Saxon Switzerland. The airport is about 9 km from the centre with an S-Bahn line running directly there. Dresden's December Christmas market is a highlight. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "muc-drs": {
    // study sources: 全四段（study/travel × 中英）: 厄尔士山近 800 年采矿、2019 年跨德捷列入 UNESCO 与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "慕尼黑飞德累斯顿，是一趟穿越厄尔士山脉的短途航线。起飞后不久，脚下出现一片浑圆低矮的森林山地——厄尔士山脉，德国萨克森州与捷克交界一带的古老山脉，因近800年几乎不间断的银、锡、钴矿开采史而得名“矿石山”，山间至今保留着传统采矿聚落和精心规划的水利系统，2019年这片矿业文化景观跨德国、捷克两国列入世界遗产。越过厄尔士山脉，飞机继续北飞，降落在易北河畔的德累斯顿——厄尔士山脉正是这座巴洛克名城通往南方的天然屏障。",
    "en-US":
      "Munich to Dresden is a short flight crossing the Erzgebirge. Soon after take-off a low, rounded, forested range appears below — the Erzgebirge, an old range along the Saxony–Czech border, named \"ore mountains\" for nearly 800 years of almost continuous silver, tin and cobalt mining, with traditional mining settlements and carefully engineered water-management systems still found in its valleys. Past the Erzgebirge the plane continues north and lands at Dresden on the Elbe — the Erzgebirge is this Baroque city's natural barrier to the south.",
    },
    travel: {
    "zh-CN":
      "慕尼黑到德累斯顿飞约55分钟，同一时区，是两地之间较快捷的连接方式，火车约需5–6小时且多需换乘。德累斯顿机场离市区约9公里，有城铁直达市中心。德累斯顿以巴洛克老城和艺术收藏闻名，也是探访萨克森瑞士国家公园的门户。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Munich to Dresden is about 55 minutes, same time zone, a faster connection than the train (about 5–6 hours, usually with a change). Dresden Airport is about 9 km from the centre with an S-Bahn line running directly there. Dresden is known for its Baroque old town and art collections, and is the gateway to Saxon Switzerland National Park. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "fra-ham": {
    // study sources: 全四段（study/travel × 中英）: 福格尔斯山与本库一致；汉堡机场原写「地铁直达」，改为 S-Bahn。核实 2026-09-11
    study: {
    "zh-CN":
      "法兰克福飞汉堡，是一趟从德国中部飞向北海之滨的航线。起飞后不久，脚下出现一片宽缓起伏的高地——福格尔斯山，中欧面积最大的连片火山岩地貌，覆盖约2500平方公里，约1900万年前由无数次温和的玄武岩喷发层层堆叠而成，是德国唯一的盾状火山地貌，山体从中心高原向外呈阶梯状台地下降。越过福格尔斯山，地面逐渐变得平坦，进入北德平原——第四纪冰川反复塑造留下的低地，终碛垄和冰蚀小湖星罗棋布。飞机沿着这片平原一路向北，降落在易北河畔的汉堡。",
    "en-US":
      "Frankfurt to Hamburg flies from central Germany to the North Sea coast. Soon after take-off a broad, gently undulating upland appears below — the Vogelsberg, the largest continuous volcanic-rock landform in Central Europe, built up about 19 million years ago from countless mild basalt eruptions, Germany's only shield-volcano landform. Past the Vogelsberg the land grows flatter, entering the North German Plain — a lowland repeatedly reshaped by Quaternary glaciation, dotted with terminal moraine ridges and glacial lakes. The plane follows this plain north all the way to Hamburg on the Elbe.",
    },
    travel: {
    "zh-CN":
      "法兰克福到汉堡飞约1小时5分钟，同一时区，也可以选择约3小时40分钟的城际快车。法兰克福机场是德国最大的国际枢纽，很多国际旅客会经这里转机。汉堡属温带海洋性气候，全年温和多雨，随身备雨具。机场离市区约10公里，有城铁（S-Bahn）直达市中心。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Frankfurt to Hamburg is about 1 hour 5 minutes, same time zone; the ICE high-speed train (about 3 hours 40 minutes) is another option. Frankfurt Airport is Germany's largest international hub, and many international travellers connect through here. Hamburg has a temperate maritime climate, mild and rainy year-round — carry rain gear. The airport is about 10 km from the centre with an S-Bahn line running directly there. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "pek-ber": {
    // study sources: 全四段（study/travel × 中英）: 勃兰登堡机场为柏林现行机场（泰格尔 2020 年关闭）。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞柏林，向西北横跨亚欧大陆，全程约七千六百公里，终点在中欧的北德平原。起飞后越过燕山，进入蒙古高原南缘的戈壁——砾石铺地、植被稀疏的干旱带，年降水多在两百毫米以下，聚落之间常隔上百公里；冬季强风把地表的尘土卷上高空，再往西北，荒漠逐渐转为草原。接着是西西伯利亚平原，世界上面积最大的平原之一，东西宽约一千五百公里，鄂毕河等大河在这里蜿蜒北流，春汛时河水漫出河道，大片针叶林泡在水里数周。翻过乌拉尔山脉后，飞机进入一片开阔低地——这条古老山系是亚欧两洲的传统分界，山脊多在一千米上下，长期剥蚀把它磨得浑圆，山间盆地里分布着一串以冶金与机械制造为主的工业城市。再往西是东欧平原，起伏极小的开阔农田，冬季常见大范围积雪。最后掠过中欧的河谷与湖泊，降落在柏林东南的勃兰登堡机场。",
    "en-US":
      "Beijing to Berlin runs north-west across the Eurasian landmass, about 7,600 km in all, ending on the North German Plain in central Europe. After take-off the flight crosses the Yan Mountains into the Gobi Desert on the southern edge of the Mongolian Plateau, an arid belt of gravel and sparse vegetation under less than 200 millimetres of rain in most years, with settlements often a hundred kilometres apart; strong winter winds lift dust off the surface, and farther north-west the desert turns to steppe. Next comes the West Siberian Plain, one of the largest plains on Earth, roughly fifteen hundred kilometres across, where the Ob and other great rivers wind north and the spring flood spills the channels and leaves stands of conifer forest standing in water for weeks. Past the Ural Mountains the flight enters an open lowland: this old range is the conventional divide between Asia and Europe, its ridges mostly around a thousand metres, worn round by long erosion, and the basins between them hold a string of cities built on metallurgy and machine building. Farther west lies the East European Plain, open farmland with very little relief and wide winter snow cover. The route finally crosses the valleys and lakes of central Europe and lands at Brandenburg Airport south-east of Berlin.",
    },
    travel: {
    "zh-CN":
      "北京到柏林约10小时15分钟，时差7-8小时（德国夏令时期间7小时）。柏林夏季温和、冬季寒冷少雪，春秋气候宜人。" +
      "勃兰登堡机场距市中心约20公里，有机场快线和地铁直达。柏林公共交通网络（地铁U-Bahn、轻轨S-Bahn、有轨电车）票制通用，博物馆岛、勃兰登堡门、柏林墙遗迹都是市内热门景点，多可步行或搭轻轨到达。" +
      "德国属申根区，签证按国籍不同、以德国驻当地使领馆最新公布为准，行前确认并预留办理时间。乘坐公共交通需自行提前打卡验票，查票时无票会被罚款。",
    "en-US":
      "Beijing to Berlin takes about 10 hours 15 minutes, with a 7–8 hour time difference (7 hours during German summer time). Berlin has mild summers and cold, relatively snow-light winters, with pleasant spring and autumn weather." +
      " Brandenburg Airport is about 20 km from the city centre, with an airport express train and metro connections. Berlin's public transport (U-Bahn, S-Bahn and trams) runs on a shared ticketing system, and Museum Island, the Brandenburg Gate and the Berlin Wall memorial sites are popular, mostly reachable on foot or by rail." +
      " Germany is in the Schengen area; visa rules vary by nationality — check the latest from the German consulate for your location and allow time to arrange one. Validate your ticket yourself before boarding public transport, as travelling without one risks a fine if checked.",
    },
  },
};
