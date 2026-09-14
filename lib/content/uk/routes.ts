import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "lhr-edi": {
    // study sources: 全四段（study/travel × 中英）: 奇尔特恩白垩丘陵、奔宁「英格兰的脊梁」、峰区为英格兰第一座国家公园、爱丁堡城堡立于火山岩颈，与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "伦敦飞爱丁堡，是一趟很短的航班，几乎把英格兰从南到北纵切了一遍。起飞后先掠过泰晤士河谷北缘的奇尔特恩丘陵——一道白垩岩的缓坡，是伦敦盆地的边。" +
      "往北是英格兰中部的平原和城市带，然后地面隆起成峰区——奔宁山脉最南的一段，是石灰岩和砂岩的高地荒原，也是英格兰第一座国家公园。" +
      "峰区往北接上奔宁山脉的主脊，被称作“英格兰的脊梁”——一列南北向的低山，把英格兰的东西两侧分开，河流分别流向北海和爱尔兰海。" +
      "越过英格兰-苏格兰边界，是南部高地：一片平缓的绿色牧羊丘陵。再往北，地面陷成苏格兰的中央地带，爱丁堡就在福斯湾南岸，城堡立在一块火山岩上。",
    "en-US":
      "London to Edinburgh is a short flight that cuts almost straight up England from south to north. After take-off you skim the Chilterns on the northern rim of the Thames valley — a gentle chalk slope that marks the edge of the London basin." +
      " North are the plains and city belt of the Midlands, and then the ground rises into the Peak District — the southernmost stretch of the Pennines, an upland of limestone and gritstone moor, and England's first national park." +
      " The Peak District joins the main spine of the Pennines, called 'the backbone of England' — a line of low north–south mountains that divides eastern from western England, its rivers draining to the North Sea and the Irish Sea." +
      " Over the England–Scotland border are the Southern Uplands: gentle green sheep-farming hills. Farther north the land drops into the Central Belt of Scotland, and Edinburgh is on the south shore of the Firth of Forth, its castle on a plug of volcanic rock.",
    },
    travel: {
    "zh-CN":
      "伦敦到爱丁堡飞约一小时十五分钟，同一时区。也可以坐东海岸干线火车，约 4.5 小时、市中心直达、沿途看东英格兰海岸和北海。" +
      "两地都属温带海洋性气候，爱丁堡更凉、更多风。8 月爱丁堡艺术节期间全城人满、住宿翻几倍，要么专程、要么避开。" +
      "英国国内航线安检照做、但不查护照（同属英国）。多数国家公民短期旅游免签或需 ETA，以英国官方最新公布为准。",
    "en-US":
      "London to Edinburgh is about an hour and fifteen minutes, in the same time zone. You can also take the East Coast Main Line train, about 4.5 hours, city centre to city centre, past the coast of eastern England and the North Sea." +
      " Both have a temperate maritime climate; Edinburgh is cooler and windier. In August the city is packed for the festivals and lodging prices multiply — come specifically for it or avoid it." +
      " UK domestic flights still have security but no passport check (both are in the UK). Most foreign visitors travel visa-free for short tourism or need an ETA — check the latest UK guidance.",
    },
  },

  "lhr-gla": {
    // study sources: 全四段（study/travel × 中英）: 湖区冰川刨蚀、斯科费尔峰英格兰最高（978 m）与本库一致；格拉斯哥「曾经的造船中心」为过去时。核实 2026-09-11
    study: {
    "zh-CN":
      "伦敦飞格拉斯哥，走的航路比飞爱丁堡略偏西。起飞后先是泰晤士河谷北缘的奇尔特恩白垩丘陵，然后是英格兰中部的城市带和峰区的荒原高地。" +
      "往北，航线经过湖区——英格兰最高的一片山地，是冰川把古老的火山岩和板岩刨蚀出的深谷、山脊和一串狭长的湖，英格兰最高峰斯科费尔峰就在这里。" +
      "越过英格兰-苏格兰边界，是南部高地的绵延牧羊丘陵。再往北地面陷下去，就是克莱德河所在的苏格兰中央地带，格拉斯哥是这里最大的城市，曾经的造船中心。",
    "en-US":
      "London to Glasgow takes a slightly more westerly track than the flight to Edinburgh. After take-off come the Chiltern chalk hills on the rim of the Thames valley, then the Midlands city belt and the moorland uplands of the Peak District." +
      " North the route passes the Lake District — the highest ground in England, where glaciers carved deep valleys, ridges and a set of long, narrow lakes out of old volcanic rock and slate, with England's highest peak, Scafell Pike, among them." +
      " Over the England–Scotland border are the rolling sheep hills of the Southern Uplands. Farther north the land drops into the Central Belt of Scotland on the River Clyde, and Glasgow, once the shipbuilding centre, is its largest city.",
    },
    travel: {
    "zh-CN":
      "伦敦到格拉斯哥飞约一小时二十分钟，同一时区。火车走西海岸干线约 4.5 小时。格拉斯哥比伦敦凉、多雨，是英国大城市里最多雨的之一。" +
      "格拉斯哥的市立博物馆多数免费（凯尔文格罗夫、交通博物馆等）。往北一小时到洛蒙德湖和高地南缘。" +
      "英国国内航线不查护照。多数国家公民短期旅游免签或需 ETA。",
    "en-US":
      "London to Glasgow is about an hour and twenty minutes, in the same time zone. The train on the West Coast Main Line is about 4.5 hours. Glasgow is cooler and wetter than London — one of the rainiest big cities in the UK." +
      " Glasgow's municipal museums are mostly free (Kelvingrove, the Riverside Museum and others). An hour north are Loch Lomond and the southern edge of the Highlands." +
      " UK domestic flights have no passport check. Most foreign visitors travel visa-free for short tourism or need an ETA.",
    },
  },

  "lhr-inv": {
    // study sources: 全四段（study/travel × 中英）: 凯恩戈姆为不列颠面积最大高山高原、五座超 1200 m 峰；大峡谷断层谷串起尼斯湖，与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "伦敦飞因弗内斯，从英格兰东南一直飞到苏格兰高地的北端。起飞后先是奇尔特恩白垩丘陵和英格兰中部平原，接着是奔宁山脉——纵贯英格兰北部的低山脊。" +
      "越过苏格兰后，地面明显变高、变荒。航线经过凯恩戈姆山——不列颠面积最大的一片高山高原，五座超过 1200 米的山峰围着几片起伏的秃顶苔原，是英国最接近北极环境的地方，冬季有雪、有真正的雪崩。" +
      "凯恩戈姆以北，地面沿一条笔直的谷地——大峡谷（Great Glen）——被断层切开，尼斯湖等几个深湖串在里面。因弗内斯就在尼斯河入海口、大峡谷的东北端。",
    "en-US":
      "London to Inverness flies from south-east England all the way to the northern end of the Scottish Highlands. After take-off come the Chiltern chalk hills and the Midlands plain, then the Pennines — the low spine running up northern England." +
      " Once over Scotland the land grows noticeably higher and wilder. The route passes the Cairngorms — the largest area of high mountain plateau in Britain, where five peaks over 1,200 m ring a rolling bare tundra of blunt summits, the most Arctic-like environment in the UK, with winter snow and real avalanches." +
      " North of the Cairngorms the land is sliced along a straight valley — the Great Glen — by a fault, with deep lochs including Loch Ness strung along it. Inverness is at the mouth of the River Ness at the north-eastern end of the Great Glen.",
    },
    travel: {
    "zh-CN":
      "伦敦到因弗内斯飞约一小时四十分钟，同一时区。也有卧铺火车（Caledonian Sleeper）夜里从伦敦直达。因弗内斯是高地的门户，比想象中温和（受暖流影响）但多变多风。" +
      "以因弗内斯为基地可自驾去天空岛、尼斯湖、北部 500 号公路。5–9 月低地有小咬人的蠓虫，带驱虫液。" +
      "高地公路多是单车道加会车点，要熟悉会车规则、备足油。英国国内航线不查护照。",
    "en-US":
      "London to Inverness is about an hour and forty minutes, in the same time zone. There is also a sleeper train (the Caledonian Sleeper) overnight from London. Inverness is the gateway to the Highlands, milder than you might expect (warmed by the Gulf Stream) but changeable and windy." +
      " From Inverness you can drive to the Isle of Skye, Loch Ness and the North Coast 500. From May to September the lowlands have biting midges — take repellent." +
      " Highland roads are often single-track with passing places — learn the etiquette and keep the tank topped up. UK domestic flights have no passport check.",
    },
  },

  "lhr-bfs": {
    // study sources: 全四段（study/travel × 中英）: 塞文河不列颠最长；Eryri / 斯诺登 1085 m 与本库一致；莫恩山花岗岩圆顶；北爱尔兰用中性地理名。核实 2026-09-11
    study: {
    "zh-CN":
      "伦敦飞贝尔法斯特，从英格兰东南横穿到爱尔兰岛东北。起飞后先是奇尔特恩白垩丘陵，然后地面是英格兰中西部的平原，塞文河——不列颠最长的河——在这里蜿蜒，河口有巨大的潮差。" +
      "接着进入威尔士，脚下是斯诺登尼亚：威尔士北部的一片冰川刨蚀过的老山，最高峰斯诺登（威尔士语 Yr Wyddfa）1085 米，山间是深谷和冰蚀湖。" +
      "飞过爱尔兰海，北爱尔兰一侧最先出现的是莫恩山——一片花岗岩的圆顶山，几乎从海边直接拔起。贝尔法斯特就在莫恩山以北、拉甘河汇入贝尔法斯特湾处。",
    "en-US":
      "London to Belfast crosses from south-east England to the north-east of the island of Ireland. After take-off come the Chiltern chalk hills, then the plains of the west Midlands, where the Severn — the longest river in Britain — winds, with a huge tidal range at its mouth." +
      " Then into Wales and, below, Eryri, the range known in English as Snowdonia: an old glacier-carved range in north Wales, its highest peak Yr Wyddfa at 1,085 m, with deep valleys and glacial lakes between the summits." +
      " Across the Irish Sea, the first thing to appear on the Northern Ireland side is the Mourne Mountains — a cluster of rounded granite domes that rise almost straight from the sea. Belfast is north of the Mournes, where the River Lagan meets Belfast Lough.",
    },
    travel: {
    "zh-CN":
      "伦敦到贝尔法斯特飞约一小时二十分钟，同一时区。北爱尔兰属英国，国内航线不查护照。贝尔法斯特温和多雨多风。" +
      "泰坦尼克号博物馆、市政厅、往北一小时的巨人堤道是主要看点。涉及历史、政治、宗教、社区归属的话题较敏感，交谈中不主动评论为好。" +
      "7 月中旬前后有传统游行季，个别地区当天可能有管制或紧张气氛，提前了解、避开相关路线。",
    "en-US":
      "London to Belfast is about an hour and twenty minutes, in the same time zone. Northern Ireland is part of the UK, and the domestic flight has no passport check. Belfast is mild, wet and windy." +
      " Titanic Belfast, the City Hall, and the Giant's Causeway an hour north are the main draws. Topics touching on history, politics, religion and community belonging are sensitive — it is best not to volunteer opinions." +
      " Around mid-July there is a traditional marching season, and on the day some areas may have controls or a tense atmosphere — read up in advance and avoid the relevant routes.",
    },
  },

  "brs-edi": {
    // study sources: 全四段（study/travel × 中英）: 塞文河口涌潮；奔宁分水岭。核实 2026-09-11
    study: {
    "zh-CN":
      "布里斯托尔飞爱丁堡，从英格兰西南飞到苏格兰。起飞时脚下是塞文河的宽阔河口——不列颠最长的河在这里入海，落潮时露出大片泥滩，河口偶尔能看到一道涌潮（Severn Bore）。" +
      "往北是英格兰中西部的平原和城市，然后地面隆起成奔宁山脉——纵贯英格兰北部的低山脊，把河流分向北海和爱尔兰海两侧，山顶是泥炭荒原。" +
      "越过英格兰-苏格兰边界，是南部高地平缓的牧羊丘陵。再往北地面陷成苏格兰中央地带，爱丁堡在福斯湾南岸，城堡立在火山岩上。",
    "en-US":
      "Bristol to Edinburgh flies from south-west England to Scotland. On take-off you are over the wide estuary of the Severn — Britain's longest river reaching the sea here, exposing broad mud flats at low tide, with the occasional tidal wave (the Severn Bore) running up it." +
      " North are the plains and cities of the west Midlands, then the ground rises into the Pennines — the low spine of northern England, dividing the rivers between the North Sea and the Irish Sea, with peat moor on the tops." +
      " Over the England–Scotland border are the gentle sheep hills of the Southern Uplands. Farther north the land drops into the Central Belt, and Edinburgh is on the south shore of the Firth of Forth, its castle on volcanic rock.",
    },
    travel: {
    "zh-CN":
      "布里斯托尔到爱丁堡飞约一小时二十分钟，同一时区。也可坐火车但需换乘、约 6.5 小时。布里斯托尔偏暖湿、爱丁堡更凉更多风。" +
      "布里斯托尔可看克利夫顿悬索桥、大不列颠号，往东一小时到巴斯。爱丁堡看老城和城堡。8 月爱丁堡艺术节人多价高。" +
      "英国国内航线不查护照。多数国家公民短期旅游免签或需 ETA。",
    "en-US":
      "Bristol to Edinburgh is about an hour and twenty minutes, in the same time zone. The train needs a change and takes about 6.5 hours. Bristol is warmer and wetter; Edinburgh is cooler and windier." +
      " In Bristol see the Clifton Suspension Bridge and the SS Great Britain, with Bath an hour east. In Edinburgh see the Old Town and the castle. In August the festivals make the city crowded and expensive." +
      " UK domestic flights have no passport check. Most foreign visitors travel visa-free for short tourism or need an ETA.",
    },
  },

  "edi-bfs": {
    // study sources: 全四段（study/travel × 中英）: 北海峡最窄约 20 km；斯利夫多纳德 850 m 为北爱尔兰最高峰。核实 2026-09-11
    study: {
    "zh-CN":
      "爱丁堡飞贝尔法斯特，是一趟很短的跨海航班，把苏格兰和北爱尔兰连起来。起飞后不久就到南部高地——苏格兰与英格兰之间那片平缓的绿色牧羊丘陵，这里也是苏格兰西南向爱尔兰海倾斜的一侧。" +
      "越过北海峡（苏格兰与爱尔兰之间最窄处只有约 20 公里），北爱尔兰一侧先出现的是莫恩山：一片花岗岩的圆顶山，几乎从海边直接升起，是这一带最高的山。" +
      "莫恩山以北是贝尔法斯特所在的低地，被丘陵环抱，拉甘河从这里汇入贝尔法斯特湾。整条航线虽短，却看全了“丘陵—海峡—花岗岩山—河口城市”。",
    "en-US":
      "Edinburgh to Belfast is a short flight across the sea, joining Scotland and Northern Ireland. Soon after take-off come the Southern Uplands — the gentle green sheep hills between Scotland and England, and the side of south-west Scotland that tilts toward the Irish Sea." +
      " Across the North Channel (at its narrowest, only about 20 km between Scotland and Ireland), the first thing on the Northern Ireland side is the Mourne Mountains: a cluster of rounded granite domes rising almost straight from the sea, the highest hills in this area." +
      " North of the Mournes is the lowland where Belfast sits, ringed by hills, with the River Lagan flowing into Belfast Lough. Short as it is, the flight takes in the whole sequence — hills, channel, granite mountains, estuary city.",
    },
    travel: {
    "zh-CN":
      "爱丁堡到贝尔法斯特飞约五十分钟，同一时区，同属英国、不查护照。也可以经渡轮（凯恩莱恩—贝尔法斯特）。两地都温和多雨多风。" +
      "贝尔法斯特看泰坦尼克号博物馆、市政厅，往北一小时到巨人堤道。历史、政治、宗教相关话题较敏感，不主动评论。" +
      "7 月中旬前后有传统游行季，个别地区当天可能有管制。",
    "en-US":
      "Edinburgh to Belfast is about 50 minutes, in the same time zone, both in the UK, with no passport check. There is also a ferry (Cairnryan–Belfast). Both are mild, wet and windy." +
      " In Belfast see Titanic Belfast and the City Hall, with the Giant's Causeway an hour north. Topics touching on history, politics and religion are sensitive — don't volunteer opinions." +
      " Around mid-July there is a traditional marching season, and some areas may have controls on the day.",
    },
  },

  "lhr-abz": {
    // study sources: 全四段（study/travel × 中英）: 沼泽地排干后部分低于海平面、切维厄特火山岩丘陵、阿伯丁「花岗岩之城」与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "伦敦飞阿伯丁，沿着英格兰和苏格兰的东海岸一路北上。起飞后先是奇尔特恩白垩丘陵，然后进入英格兰东部——一片极其平坦的低地，其中沼泽地（The Fens）曾是浅海和沼泽，被人工排干成海拔接近零、甚至低于海平面的农田，河渠笔直。" +
      "往北，约克郡东侧的海岸抬起一片石楠荒原——北约克沼原，紧挨着北海的悬崖。" +
      "越过英格兰-苏格兰边界处是切维厄特山——边界上一片浑圆的火山岩丘陵。再往北沿苏格兰东海岸飞，阿伯丁就在迪河与顿河入海处，一座用本地灰花岗岩盖起来的港口城市。",
    "en-US":
      "London to Aberdeen runs north up the east coast of England and Scotland. After take-off come the Chiltern chalk hills, then eastern England — an extremely flat lowland including The Fens, once shallow sea and marsh, drained into farmland near or below sea level, with dead-straight drains and channels." +
      " North, on the eastern side of Yorkshire, the coast lifts into a heather moor — the North York Moors — right against the cliffs of the North Sea." +
      " On the England–Scotland border are the Cheviot Hills — rounded hills of volcanic rock along the boundary. Flying on up the east coast of Scotland, Aberdeen sits where the Dee and the Don reach the sea, a port city built of local grey granite.",
    },
    travel: {
    "zh-CN":
      "伦敦到阿伯丁飞约一小时半，同一时区。火车走东海岸干线约 7 小时。阿伯丁比英格兰冷、风大，冬季有海雾（本地叫 haar），可能影响航班。" +
      "阿伯丁是北海石油之城，机场也是繁忙的直升机基地。往郊外皇家迪赛德看城堡和巴尔莫勒尔一带，通常需自驾或跟团。" +
      "石油行业会展期间酒店紧张。英国国内航线不查护照。",
    "en-US":
      "London to Aberdeen is about an hour and a half, in the same time zone. The train on the East Coast Main Line is about 7 hours. Aberdeen is colder and windier than England, with winter sea fog (locally, 'haar') that can affect flights." +
      " Aberdeen is the North Sea oil city, and its airport is a busy heliport too. Seeing the castles and Balmoral area of Royal Deeside out of town usually needs a car or a tour." +
      " Hotels are tight during oil-industry conferences. UK domestic flights have no passport check.",
    },
  },

  // ============================================================
  // 国际 · 中国国际航线 Phase 3 批D（西欧：英国/法国/德国/荷兰/比利时）
  // ============================================================

  "pek-lhr": {
    // study sources: 全四段（study/travel × 中英）: 乌拉尔南北两千多公里、亚欧分界与本库一致；多格兰（北海古陆桥）为科学共识；签证表述未写死。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞伦敦，向西北横跨亚欧大陆，全程约八千四百公里，终点在不列颠岛东南的泰晤士河下游。起飞后进入蒙古高原南缘的戈壁，砾石滩铺到天际线，年降水多在两百毫米以下，地表几乎没有连续植被；河流大多是季节性的，雨后短暂过水随即干涸，风蚀留下坚硬的砾幂，冬季强风把地表的尘土卷上高空，能见度骤降，聚落之间常隔上百公里。越往西北，草原的比例越高，牧群重新出现在河谷两侧。接着是西西伯利亚平原，地势极其平坦，河网与沼泽密布，春季融雪时大范围积水。翻过乌拉尔山脉之后，飞机进入一片开阔低地。这条南北绵延两千多公里的古老山系海拔不高，却是地理学上划分亚洲与欧洲的界线；长期剥蚀把山脊磨得浑圆，东西两坡的森林构成明显不同，山间盆地里分布着一串以冶金为主的工业城市。再往西是东欧平原，古老地台之上起伏极小，田块与河流的图案从空中看格外规整。飞机继续向西横穿中欧，越过北海南缘——海面下是冰期留下的浅滩沉积，海底至今还能找到当时的河道和陆生动物遗骸。最后跨过英吉利海峡北口，进入泰晤士河下游的低地，降落在伦敦西面的希思罗机场。",
    "en-US":
      "Beijing to London runs north-west across the Eurasian landmass, about 8,400 km in all, ending on the lower Thames in the south-east of Great Britain. After take-off the flight enters the Gobi Desert on the southern edge of the Mongolian Plateau, gravel flats reaching the horizon under less than 200 millimetres of rain in most years, with no continuous vegetation; the rivers are mostly seasonal, running briefly after rain and then drying out, wind erosion has left a hard pavement, strong winter winds lift dust high enough to cut visibility sharply, and settlements are often a hundred kilometres apart. The farther north-west it goes, the more steppe replaces desert and herds reappear along the valleys. Next comes the West Siberian Plain, remarkably flat and dense with rivers and marshes, flooding widely when the snow melts in spring. Past the Ural Mountains the flight enters an open lowland. The range runs more than two thousand kilometres north to south and is not high, but it is the conventional divide between Asia and Europe; long erosion has worn its ridges round, the forests on its eastern and western slopes differ markedly, and the basins between them hold a string of cities built on metallurgy. Farther west lies the East European Plain, an ancient platform with almost no relief where fields and rivers read from the air as a strikingly regular pattern. The aircraft continues west across central Europe and over the southern North Sea, whose bed is shallow sediment laid down during the ice ages, still yielding old river channels and the bones of land animals. It finally crosses the northern mouth of the English Channel into the lowlands of the lower Thames and lands at Heathrow, west of London.",
    },
    travel: {
    "zh-CN":
      "北京到伦敦约11小时，两地时差7-8小时（英国夏令时期间7小时）。北京冬季干冷，伦敦全年温和多雨，四季都建议带一件防水外套。" +
      "希思罗机场距市中心约25公里，地铁Piccadilly线或希思罗快线均可进城；市内公共交通发达，牡蛎卡（Oyster Card）或带NFC的银行卡均可直接刷卡乘车。大英博物馆、国家美术馆等主要国立博物馆常年免费开放。" +
      "英国签证需提前在线申请，部分国家/地区护照持有人可能适用电子旅行许可（ETA）政策，具体以英国内政部最新公布为准，行前务必核实并预留办理时间；入境时随身物品与现金如实申报。",
    "en-US":
      "Beijing to London takes about 11 hours, with a 7–8 hour time difference (7 hours during UK summer time). Beijing has dry, cold winters, while London is mild and rainy year-round — a waterproof jacket is worth packing in any season." +
      " Heathrow is about 25 km from central London; the Piccadilly line or the Heathrow Express both run into town. Public transport is extensive — an Oyster Card or a contactless bank card both work directly on buses and the Underground. Major national museums such as the British Museum and the National Gallery are free year-round." +
      " A UK visa must be applied for online in advance; some nationalities may qualify for the Electronic Travel Authorisation (ETA) scheme — check the UK Home Office's latest rules and allow time to arrange one before you travel. Declare belongings and cash honestly on arrival.",
    },
  },
};
