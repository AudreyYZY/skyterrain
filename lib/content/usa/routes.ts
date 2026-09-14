import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "jfk-lax": {
    study: {
    "zh-CN":
      "纽约飞洛杉矶，横穿整个美国本土，是了解北美地形结构最完整的一条线。起飞后先越过阿巴拉契亚山脉——一条平行于大西洋岸的古老褶皱山系，久经侵蚀、山势平缓、林木茂密，是北美东部的分水岭。" +
      "翻过山，地面渐渐展开成北美大平原：从密西西比河谷一直铺到西部群山脚下，是一片微微西高的半干旱草原和农田，方格状的田块和圆形喷灌圈从空中很好认。" +
      "平原尽头，落基山脉突然拔起，一列列南北向的雪岭夹着高山盆地，大陆分水岭就在脊线上。再往西是科罗拉多高原——一块被抬升的厚层水平岩层，被科罗拉多河和支流切出深峡，大峡谷是其中最深的一段。" +
      "最后越过莫哈韦沙漠的荒山和干湖盆，翻过沿海的圣加布里埃尔等山脉，洛杉矶盆地和太平洋就在眼前。",
    "en-US":
      "New York to Los Angeles crosses the entire contiguous United States, and is the most complete way to read the structure of North America from the air. After take-off you cross the Appalachian Mountains — an old folded range running parallel to the Atlantic coast, long eroded to gentle, forested ridges, and the divide of the eastern US." +
      " Beyond the mountains the land opens into the Great Plains: from the Mississippi valley to the foot of the Rockies, a semi-arid grassland and farmland that rises gently westward, its square fields and circular irrigation pivots easy to pick out from above." +
      " At the edge of the plains the Rocky Mountains rise abruptly — lines of snowy north–south ranges enclosing high basins, with the Continental Divide along the crest. West of them is the Colorado Plateau, a block of thick, near-horizontal rock layers lifted up and cut into deep canyons by the Colorado River and its tributaries; the Grand Canyon is the deepest stretch." +
      " Finally you cross the bare hills and dry lake basins of the Mojave Desert, clear the coastal San Gabriel and other ranges, and the Los Angeles basin and the Pacific come into view.",
    },
    // travel sources: 全四段（study/travel × 中英）: 阿巴拉契亚古老褶皱山系、大平原—落基山—科罗拉多高原—大峡谷—莫哈韦序列；跨三个时区；时长与本库航线数据 335 分钟一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "纽约到洛杉矶飞约五个半小时，向西跨三个时区（落地时钟往回拨 3 小时）。两座城市气候差别很大：纽约四季分明、夏闷冬雪；洛杉矶终年温暖干燥、少雨，昼夜和海陆温差明显。" +
      "这是一条经典的“横穿美国”航线，靠窗能依次看到阿巴拉契亚的林山、中部大平原的农田、落基山的雪岭、科罗拉多高原的红色峡谷、西部的沙漠。白天靠右侧（北侧）机窗光线和视野较好。" +
      "两地机场都很大：JFK 有 AirTrain 接地铁，LAX 出租车和网约车分区上客、按牌照颜色分流。多数国家公民入境美国需提前在线办 ESTA 或签证，落地不能补办。",
    "en-US":
      "New York to Los Angeles is about five and a half hours, west across three time zones (set your clock back 3 hours on arrival). The two cities have very different climates: New York has four clear seasons, muggy summers and snowy winters; Los Angeles is warm and dry year-round with little rain and a marked day–night and coast–inland difference." +
      " This is the classic 'cross the country' flight, and from a window seat you see, in turn, the forested Appalachians, the farmland of the Great Plains, the snowy Rockies, the red canyons of the Colorado Plateau and the western deserts. By day the right-hand (north) side has better light and views." +
      " Both airports are large: JFK has the AirTrain to the subway, and LAX has zoned pick-up for taxis and rideshare. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US — this cannot be done on arrival.",
    },
  },

  "jfk-sfo": {
    study: {
    "zh-CN":
      "纽约飞旧金山走的是偏北的航路，看到的是美国北半部的地形。起飞后不久就到五大湖——上一次冰期大陆冰盖挖出的一串巨大淡水湖，湖岸低平，是北美东部工业带的核心。" +
      "过了湖区是大平原北段：内布拉斯加、达科他一带的麦田和草原，河流少、地势开阔，冬季常有积雪。" +
      "越过落基山北段后进入大盆地——一片被山脉切成许多封闭盆地的干旱高原，河流不流入海，只汇进内陆的盐湖和盐滩，大盐湖是其中最大的一个。" +
      "最后翻过内华达山脉北段，脚下豁然是加州中央谷地：一块被两侧山脉夹住的巨大平坦农业盆地，萨克拉门托河与圣华金河在此汇合、经旧金山湾入海。旧金山就在湾口的半岛尖端。",
    "en-US":
      "New York to San Francisco takes a more northerly track and shows the northern half of the country. Soon after take-off come the Great Lakes — a chain of huge freshwater lakes gouged out by the continental ice sheet in the last ice age, with low shores, and the heart of the eastern industrial belt." +
      " Past the lakes is the northern Great Plains: the wheat fields and grassland of Nebraska and the Dakotas, few rivers, wide horizons, and often snow-covered in winter." +
      " Beyond the northern Rockies you enter the Great Basin — an arid upland broken by mountains into many closed basins, where rivers never reach the sea but drain into inland salt lakes and flats; the Great Salt Lake is the largest." +
      " Finally, over the northern Sierra Nevada, the Central Valley of California opens below: a large, flat agricultural basin held between mountain ranges, where the Sacramento and San Joaquin rivers meet and flow out through San Francisco Bay. San Francisco is on the tip of the peninsula at the bay's mouth.",
    },
    // travel sources: 全四段（study/travel × 中英）: 五大湖冰盖刨蚀成因、大盆地内流水系、大盐湖、中央谷地两河入旧金山湾。核实 2026-09-11
    travel: {
    "zh-CN":
      "纽约到旧金山飞约六小时，西行跨三个时区。旧金山夏季常有海雾、体感偏凉，一年四季都要备一件外套；纽约夏热冬冷。" +
      "这条北线上，靠窗依次能看到五大湖的水面、中西部的农田、大盐湖的白色盐滩、内华达山的雪峰，最后是加州中央谷地和旧金山湾。" +
      "SFO 有 BART 城市轨道直接进市区，约半小时。旧金山山多、坡陡，市区停车贵且易被砸车窗，多用公交和缆车。多数国家公民入境美国需提前在线办 ESTA 或签证。",
    "en-US":
      "New York to San Francisco is about six hours, west across three time zones. San Francisco often has sea fog in summer and feels cool — carry a jacket in any season; New York is hot in summer and cold in winter." +
      " On this northern track a window seat shows, in turn, the Great Lakes, the farmland of the Midwest, the white salt flats of the Great Salt Lake, the peaks of the Sierra Nevada, and finally the Central Valley and San Francisco Bay." +
      " SFO has BART rail straight into the city, about 30 minutes. San Francisco is hilly and steep, downtown parking is expensive and car break-ins common, so use transit and the cable cars. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US.",
    },
  },

  "ord-sfo": {
    study: {
    "zh-CN":
      "芝加哥飞旧金山，从五大湖畔的大平原飞到太平洋岸。起飞时脚下是密歇根湖和芝加哥所在的平坦湖积平原，随后是一望无际的中西部农田——玉米和大豆的方格田，是大平原东段最湿润、最肥沃的一段。" +
      "越过落基山后进入大盆地干旱高原。大盐湖是一片没有出口的浅咸水湖，四周是白色的盐滩和平坦的盐碱地，从空中看像一面灰蓝色的镜子。" +
      "翻过内华达山脉，加州中央谷地在山脚展开：南北长约650公里、东西被海岸山脉和内华达山夹住，是全美灌溉农业最集中的地方。谷地北端的河流汇成三角洲，经旧金山湾入海。",
    "en-US":
      "Chicago to San Francisco flies from the plains by the Great Lakes to the Pacific coast. On take-off you are over Lake Michigan and the flat lake-plain that Chicago sits on, then the endless farmland of the Midwest — a grid of corn and soybean fields, the wettest and most fertile part of the eastern Great Plains." +
      " Beyond the Rockies you enter the arid uplands of the Great Basin. The Great Salt Lake is a shallow salt lake with no outlet, ringed by white salt flats and level alkali ground, and from the air it looks like a grey-blue mirror." +
      " Over the Sierra Nevada, the Central Valley of California opens at the foot of the range: about 650 km long, held between the Coast Ranges and the Sierra, and the most concentrated irrigated farmland in the country. At its northern end the rivers join in a delta and flow out through San Francisco Bay.",
    },
    // travel sources: 全四段（study/travel × 中英）: 大盐湖、内华达山脉、两个时区；中央谷地长度原写约 600 km，按本库 terrain/central-valley-ca（USGS 约 644 km）改为约 650 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "芝加哥到旧金山飞约四个半小时，西行跨两个时区。芝加哥冬季严寒多雪、夏季温暖；旧金山终年温和，夏季多雾偏凉。" +
      "靠窗可以看到中西部的农田、落基山、大盐湖的盐滩和内华达山的雪峰。ORD（奥黑尔）是全美最繁忙的机场之一，天气不好时延误多，转机留足时间。" +
      "SFO 有 BART 进城。多数国家公民入境美国需提前在线办 ESTA 或签证，落地不能补办。",
    "en-US":
      "Chicago to San Francisco is about four and a half hours, west across two time zones. Chicago has hard, snowy winters and warm summers; San Francisco is mild all year, foggy and cool in summer." +
      " From a window you can see the Midwest farmland, the Rockies, the salt flats of the Great Salt Lake and the peaks of the Sierra Nevada. O'Hare (ORD) is one of the busiest airports in the country and delays are common in bad weather — leave plenty of time for connections." +
      " SFO has BART into the city. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US — this cannot be done on arrival.",
    },
  },

  "den-las": {
    study: {
    "zh-CN":
      "丹佛飞拉斯维加斯，是一趟短程航班，却几乎横切了美国西部的两大地貌单元。丹佛在落基山东麓、大平原的西缘，海拔约一英里；起飞后立刻爬升越过落基山的前岭——一列列带雪的南北向山脊，山间夹着开阔的高山公园（park）和大陆分水岭。" +
      "翻过山脊，地面变成一片被抬升、切割的红色岩石高原，这就是科罗拉多高原。科罗拉多河和它的支流在厚层水平岩层里切出一道道深峡，河水常年浑浊偏红。" +
      "航线南侧不远就是大峡谷——科罗拉多河切得最深的一段，两壁层层叠叠的岩层记录了很长一段地质历史。最后越过一片荒山和干湖盆，拉斯维加斯所在的莫哈韦沙漠盆地就到了。",
    "en-US":
      "Denver to Las Vegas is a short flight, but it cuts across two of the major landform provinces of the American West. Denver is on the eastern foot of the Rockies at the edge of the Great Plains, about a mile high; after take-off you climb straight over the Front Range of the Rockies — lines of snowy north–south ridges enclosing open high 'parks', with the Continental Divide along the crest." +
      " Beyond the ridges the ground becomes a lifted, dissected plateau of red rock: the Colorado Plateau. The Colorado River and its tributaries have cut deep canyons into the thick horizontal rock layers, and the water runs muddy and reddish most of the year." +
      " A little to the south of the track is the Grand Canyon — the deepest stretch the Colorado River has cut, its layered walls recording a long span of geological time. Finally, over bare hills and dry lake basins, you reach the Mojave Desert basin that Las Vegas sits in.",
    },
    // travel sources: 全四段（study/travel × 中英）: 丹佛约一英里海拔；科罗拉多高原水平岩层、大峡谷；时长 105 分钟一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "丹佛到拉斯维加斯飞约一小时四十分钟，落地把时钟往回拨一小时（丹佛山地时区、拉斯维加斯太平洋时区）。丹佛干爽、日照强、冬季多雪；拉斯维加斯在沙漠里，夏季酷热、极干燥。" +
      "靠窗能看到落基山的雪岭和科罗拉多高原的红色峡谷，天气好时能望见大峡谷方向。两地都是自驾进国家公园的门户：丹佛去落基山国家公园，拉斯维加斯去大峡谷、锡安、死亡谷。" +
      "沙漠和山区手机常没信号，自驾要加满油、带足水。多数国家公民入境美国需提前在线办 ESTA 或签证。",
    "en-US":
      "Denver to Las Vegas is about an hour and forty minutes; set your clock back an hour on arrival (Denver is Mountain time, Las Vegas Pacific). Denver is dry with strong sun and snowy winters; Las Vegas is in the desert, extremely hot and dry in summer." +
      " From a window you see the snowy ridges of the Rockies and the red canyons of the Colorado Plateau, and in clear weather you can look toward the Grand Canyon. Both cities are gateways for driving into the national parks: Denver for Rocky Mountain, Las Vegas for the Grand Canyon, Zion and Death Valley." +
      " Phone signal is often absent in the desert and mountains, so fill the tank and carry plenty of water if you drive. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US.",
    },
  },

  "sfo-las": {
    study: {
    "zh-CN":
      "旧金山飞拉斯维加斯，短短一小时里从太平洋岸的湿润谷地，翻过高山，落进内陆的沙漠。起飞后先越过加州中央谷地南段——一块被两侧山脉夹住的平坦农业盆地，河流稀少、灌溉密集。" +
      "接着是内华达山脉：一条巨大的花岗岩断块山，西坡平缓、东坡陡峻，山顶终年积雪，冰川时期被冰川刨出许多深切的 U 形谷。" +
      "翻过山脊，地面骤然干旱下陷，出现死亡谷——北美最低、最热、最干的地方，谷底的盐滩低于海平面，两侧是陡峭的荒山。最后飞过莫哈韦沙漠的干湖盆，拉斯维加斯就在群山环抱的盆地里。",
    "en-US":
      "San Francisco to Las Vegas crosses, in a single hour, from the moist valley of the Pacific side over high mountains and down into the interior desert. After take-off you cross the southern Central Valley of California — a flat agricultural basin held between mountain ranges, with few rivers and intensive irrigation." +
      " Next is the Sierra Nevada: a huge tilted block of granite, gently sloping on the west and steep on the east, snow-capped all year, with many deep U-shaped valleys carved by glaciers in the ice ages." +
      " Over the crest the land drops suddenly into desert and Death Valley appears — the lowest, hottest and driest place in North America, its floor of salt flats below sea level between steep bare mountains. Finally, over the dry lake basins of the Mojave Desert, Las Vegas lies in its ring of mountains.",
    },
    // travel sources: 全四段（study/travel × 中英）: 内华达山脉花岗岩断块、死亡谷北美最低最热最干（NPS，1 级）。核实 2026-09-11
    travel: {
    "zh-CN":
      "旧金山到拉斯维加斯飞约一个半小时，同一时区。旧金山凉而多雾，拉斯维加斯在沙漠里、夏季酷热，落地温差可能很大。" +
      "这是一条风景航线：靠窗依次是中央谷地的农田、内华达山的雪峰、死亡谷的盐滩和荒山。天气晴朗时非常清楚。" +
      "拉斯维加斯机场就在大道（Strip）南端，离酒店很近。夏季正午不宜长时间户外。多数国家公民入境美国需提前在线办 ESTA 或签证。",
    "en-US":
      "San Francisco to Las Vegas is about an hour and a half, in the same time zone. San Francisco is cool and foggy, Las Vegas is in the desert and very hot in summer — the temperature difference on arrival can be large." +
      " This is a scenic flight: a window seat shows, in turn, the farmland of the Central Valley, the peaks of the Sierra Nevada, and the salt flats and bare mountains of Death Valley — very clear in fine weather." +
      " Las Vegas airport is at the south end of the Strip, close to the hotels. Midday in summer is not the time for long spells outdoors. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US.",
    },
  },

  "mia-jfk": {
    study: {
    "zh-CN":
      "迈阿密飞纽约，沿着美国东海岸一路向北，看到的是大西洋沿岸平原的全貌。起飞后脚下是佛罗里达半岛——一块低平的石灰岩台地，地表布满湖泊、沼泽和喀斯特泉，西侧是大沼泽地，一片缓缓向南流动的浅水草原。" +
      "半岛以北，海岸线一直是低平的沙洲、潟湖和河口湿地，这就是大西洋沿岸平原：从佛罗里达一直延伸到纽约，是海底沉积物抬升出露形成的，地势极缓，多沙质海滩和障壁岛。" +
      "过了切萨皮克湾——一个被淹没的古河口——沿岸平原逐渐收窄，在纽约一带尖灭；哈得孙河的河口和天然良港，正是纽约兴起的地方。",
    "en-US":
      "Miami to New York runs north along the US East Coast and shows the whole sweep of the Atlantic coastal plain. After take-off you are over the Florida peninsula — a low, flat limestone platform dotted with lakes, marshes and karst springs, with the Everglades on its western side, a sheet of shallow water and sawgrass creeping slowly south." +
      " North of the peninsula the coast is a continuous line of low sand bars, lagoons and estuary wetlands: the Atlantic coastal plain, running from Florida to New York, formed of sea-floor sediments lifted and exposed, very gently sloping, with sandy beaches and barrier islands." +
      " Past Chesapeake Bay — a drowned ancient river mouth — the coastal plain narrows and pinches out near New York; the mouth of the Hudson River and its natural harbour are exactly where the city grew.",
    },
    // travel sources: 全四段（study/travel × 中英）: 佛罗里达石灰岩台地、大沼泽地、切萨皮克湾为淹没古河口。核实 2026-09-11
    travel: {
    "zh-CN":
      "迈阿密到纽约飞约三小时，同一时区。两地气候差别大：迈阿密全年温暖、夏季闷热多雨（6–11 月飓风季）；纽约四季分明、冬季寒冷有雪。" +
      "靠东侧（右侧）机窗能一路看海岸线：佛罗里达的沙洲、卡罗来纳的沙滩和障壁岛、切萨皮克湾。" +
      "纽约有三个机场，JFK 有 AirTrain 接地铁进城。多数国家公民入境美国需提前在线办 ESTA 或签证，落地不能补办。",
    "en-US":
      "Miami to New York is about three hours, in the same time zone. The climates are very different: Miami is warm all year and hot, muggy and rainy in summer (hurricane season June–November); New York has four clear seasons and cold, snowy winters." +
      " From a window on the east (right) side you can follow the coast the whole way: the sand bars of Florida, the beaches and barrier islands of the Carolinas, Chesapeake Bay." +
      " New York has three airports; JFK has the AirTrain to the subway into the city. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US — this cannot be done on arrival.",
    },
  },

  "msy-lax": {
    study: {
    "zh-CN":
      "新奥尔良飞洛杉矶，横穿美国南部的干旱地带。起飞时脚下是密西西比河下游的三角洲——一片由河流泥沙淤积、被水网和沼泽切碎的低地，部分低于海平面。" +
      "向西越过得克萨斯，地面渐渐抬高、变干。进入新墨西哥一带是奇瓦瓦沙漠——北美面积最大的沙漠，以灌丛和石膏沙丘为特征，白沙国家保护区就在这里。" +
      "再往西是索诺兰沙漠，气候稍暖湿一点，长着高大的巨柱仙人掌，是北美最“绿”的沙漠。最后穿过更干旱、多干湖盆的莫哈韦沙漠，翻过沿海山脉，洛杉矶盆地就到了。整条线几乎全程在美国西南部的盆地—山岭地形上飞。",
    "en-US":
      "New Orleans to Los Angeles crosses the arid belt of the southern United States. On take-off you are over the lower Mississippi delta — a low land of river silt cut up by channels and swamps, partly below sea level." +
      " West across Texas the ground rises and dries out. Into New Mexico is the Chihuahuan Desert — the largest desert in North America, marked by shrubland and gypsum dunes, with White Sands among them." +
      " Farther west is the Sonoran Desert, a little warmer and wetter, home to the tall saguaro cactus and the 'greenest' desert in North America. Finally you cross the drier, dry-lake-basin country of the Mojave Desert, clear the coastal ranges, and reach the Los Angeles basin. Almost the whole flight is over the basin-and-range country of the American Southwest.",
    },
    // travel sources: 全四段（study/travel × 中英）: 奇瓦瓦沙漠北美最大、白沙在其范围内、索诺兰双季降水。核实 2026-09-11
    travel: {
    "zh-CN":
      "新奥尔良到洛杉矶飞约四小时，西行跨两个时区。新奥尔良低湿、夏季闷热多雨；洛杉矶干燥温暖、少雨。" +
      "这条线大部分时间在沙漠上空，靠窗能看到得州的旱地、新墨西哥的白色石膏沙丘、亚利桑那的仙人掌荒漠。前半程主要是农田和牧场，景观在进入新墨西哥后才变得开阔。" +
      "洛杉矶极度依赖开车，机场出租车和网约车分区上客。多数国家公民入境美国需提前在线办 ESTA 或签证。",
    "en-US":
      "New Orleans to Los Angeles is about four hours, west across two time zones. New Orleans is low, humid and hot in summer; Los Angeles is dry, warm and low on rain." +
      " Most of this flight is over desert, and from a window you see the dry country of Texas, the white gypsum dunes of New Mexico, the cactus desert of Arizona. The first half is mainly farmland and ranching; the landscape opens out once you cross into New Mexico." +
      " Los Angeles depends heavily on driving, and the airport has zoned pick-up for taxis and rideshare. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US.",
    },
  },

  "pek-jfk": {
    // study sources: 全四段（study/travel × 中英）: 贝加尔湖最深 1642 m、约占全球未冻淡水 20%（UNESCO 754，1 级）；哈德逊湾平均水深一百多米；「比沿纬线直飞短两千多公里」按坐标计算实为约 3400 km，已改为「三千多公里」（英文侧无数字）。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞纽约不走太平洋，而是贴着北极飞一条大圆航线：两地经度几乎相差半个地球，走高纬度的弧线比沿纬线直飞短了三千多公里。起飞后向西北爬升，越过燕山。进入蒙古高原南缘的戈壁，砾石滩一直铺到天际线，风把细沙吹走后留下一层黑亮的砾幂；年降水多在两百毫米以下，河流大多是季节性的，聚落之间常隔上百公里。再往北是贝加尔湖，世界上最深的淡水湖，最深处超过一千六百米，蓄水量约占地表未冻淡水的两成。湖体嵌在一条至今仍在扩张的裂谷里，两岸山地陡直入水，湖底沉积厚达数千米，记录着两千多万年的气候变化；冬季湖面完全封冻，冰层厚到可以行车。湖区四周是连片的西伯利亚针叶林，落叶松与云杉一直铺到视野尽头。航线继续深入西伯利亚腹地，飞越勒拿河三角洲——北极圈内一片由永久冻土和辫状水道织成的湿地，面积超过三万平方公里，是北冰洋沿岸最大的三角洲之一。夏季解冻时水网密布，成千上万个热融湖散在苔原上，是候鸟重要的繁殖地；入冬后整片冻实，与周围的冻原连成一色，河道只剩下雪面上一道道浅痕。之后航向转东，掠过白令海。冰期海面下降时这里曾是连接亚洲与北美的陆桥，人类很可能就是从这条通道进入美洲的；如今海底大陆架依然很浅，冷暖水团在此交汇，营养盐上涌，渔业资源丰厚，海面上常年多雾。进入阿拉斯加后，晴天时舷窗一侧能看到阿拉斯加山脉，北美最高峰迪纳利就在这条弧形山链上，山体由板块碰撞抬升而成，至今仍在长高。飞机继续东南，越过育空地区——针叶林与冻原交界的地带，河流深切在冻土之中，地面几乎见不到道路与居民点。这一带冬季漫长、夏季短暂，是北美人烟最稀的区域之一；地下的多年冻土使建筑必须架空，否则热量传下去会让地面融沉。十九世纪末的淘金热曾把数万人引到这里，沿着克朗代克河一带建起成片的营地，热潮退去后又几乎全部散去，如今只剩下少数保留下来的木屋和采金的痕迹。再往前是哈德逊湾，一片深入北美大陆的浅海，平均水深只有一百多米，冬季完全封冻。冰期被冰盖压下去的地壳至今仍在缓慢回弹，湾岸线因此逐年后退，岸上能看到一道道被抬起的古海滩排成阶梯。接着飞临五大湖，冰川挖掘出的这组湖泊是地球上面积最大的淡水湖群，蓄水量约占全球地表淡水的两成，湖岸边是北美主要的工业带。最后越过新英格兰的丘陵——古老山系被侵蚀之后剩下的低缓地形。飞机沿哈德逊河下降，降落在纽约肯尼迪机场。",
    "en-US":
      "Beijing to New York does not cross the Pacific. It flies a great-circle track that hugs the Arctic, because the two cities sit at nearly opposite longitudes. After take-off the aircraft climbs north-west over the Yan Mountains and reaches the Gobi on the southern edge of the Mongolian Plateau, where gravel flats run to the horizon and wind has stripped the fine sand away to leave a dark polished pavement. Farther north lies Lake Baikal, the deepest freshwater lake in the world at more than 1,600 metres, holding roughly a fifth of the planet's unfrozen surface fresh water. The lake sits in a rift that is still pulling apart, dense Siberian taiga runs down to both shores, and in winter the surface freezes solid enough to drive across. The route continues deep into the Siberian interior and crosses the Lena River Delta, an Arctic wetland woven from permafrost and braided channels. When the ground thaws each summer the delta fills with water and becomes a major breeding ground for migratory birds; by winter it freezes hard and merges into the surrounding tundra. The heading then swings east over the Bering Sea. Lower sea levels during the ice ages exposed a land bridge here between Asia and North America, and the continental shelf is still shallow, supporting one of the richest fisheries anywhere. Entering Alaska, a clear day brings the Alaska Range into view on one side of the cabin, the curved chain that carries Denali, the highest peak in North America. The aircraft continues south-east across the Yukon, where boreal forest gives way to tundra, rivers cut deep into frozen ground, and almost no roads or settlements appear below. Winters are long and summers brief, and this is among the most thinly populated country in North America; the gold rush of the late nineteenth century drew tens of thousands here and then emptied out again almost completely. Ahead lies Hudson Bay, a very shallow sea on ground so low that the crust, pressed down by ice-age glaciers, is still rebounding and pushing the shoreline back year by year. The flight then reaches the Great Lakes, glacially excavated and the largest group of freshwater lakes on Earth by surface area. Finally it crosses the hills of New England and descends along the Hudson River into New York's JFK Airport.",
    },
    travel: {
    "zh-CN":
      "北京到纽约约15小时30分钟，由中国国际航空波音747客机执飞。两地时差12-13小时（美国东部夏令时期间12小时，标准时期间13小时），初到建议预留1-2天倒时差。纽约四季分明，夏季闷热、冬季寒冷多雪，春秋气温最为宜人。" +
      "肯尼迪机场距曼哈顿约25公里，可搭乘AirTrain转乘地铁E线或长岛铁路（LIRR）进城，也可乘出租车或网约车，车程视路况约45-60分钟。地铁运营24小时，MetroCard或感应式银行卡均可直接刷卡进站。自由女神像、中央公园、大都会艺术博物馆等地标均可乘地铁到达。" +
      "中国公民赴美须提前办妥B1/B2签证并预约面签，建议出行前至少1-2个月申请，具体以美国驻华使领馆最新公布为准；入境时随身行李与现金如实申报。纽约治安整体良好，但部分地铁站夜间人少，贵重物品建议不外露。",
    "en-US":
      "Beijing to New York takes about 15 hours 30 minutes on an Air China Boeing 747. The time difference is 12–13 hours (12 hours during US Eastern Daylight Time, 13 hours during Standard Time) — allow a day or two to adjust on arrival. New York has distinct seasons: hot, humid summers and cold, snowy winters, with spring and autumn the most pleasant times to visit." +
      " JFK is about 25 km from Manhattan; the AirTrain connects to the subway's E line or the Long Island Rail Road (LIRR) into the city, and taxis or rideshares are also available, taking roughly 45–60 minutes depending on traffic. The subway runs 24 hours a day, and a MetroCard or a contactless bank card both work directly at the turnstiles. The Statue of Liberty, Central Park and the Metropolitan Museum of Art are all reachable by subway." +
      " Chinese citizens need a B1/B2 visa and an in-person interview well in advance — apply at least 1–2 months ahead, and check the latest requirements from the US Embassy or Consulate. Declare belongings and cash honestly on arrival. New York is generally safe, but some subway stations are quiet late at night, so keep valuables out of sight.",
    },
  },
};
