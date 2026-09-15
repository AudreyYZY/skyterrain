import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "akl-wlg": {
    study: {
    "zh-CN":
      "奥克兰飞惠灵顿，是从北岛北端飞到南端，一趟就能看出北岛“中间是火山、两头是平缓丘陵”的结构。起飞时脚下是奥克兰的地峡和散布的死火山锥，随后进入怀卡托的牧场——一条大河在绿色的田野间蜿蜒，那是怀卡托河，新西兰最长的河。" +
      "往南，地面隆起成一片高地，中间出现一大片深蓝色的水，那是陶波湖——它其实是一座巨大的破火山口积水而成，是新西兰最大的湖。湖的南岸立着几座带雪的锥形山峰，最高的是鲁阿佩胡火山——北岛的最高点，一座仍在活动的层状火山，山顶有火口湖，冬季是滑雪场。" +
      "越过火山高原，进入北岛南部的山地。塔拉鲁瓦山脉是一列陡峭、多雨、常年被风吹的山岭，把惠灵顿一带和北岛西部的平原分开。飞机翻过塔拉鲁瓦，沿着一个几乎封闭的海港下降到惠灵顿——首都就挤在海港西岸的陡坡上。",
    "en-US":
      "Auckland to Wellington flies from the north of the North Island to the south, and in one trip shows how the island is built: volcanoes down the middle, gentle hills at each end. On take-off you are over the Auckland isthmus and its scattered extinct cones, then over the Waikato farm country — a big river winding through green fields, the Waikato, the longest river in New Zealand." +
      " Southward the land rises into an upland, and a great sheet of deep-blue water appears: Lake Taupō, which is in fact a huge caldera filled with water, the largest lake in New Zealand. On its southern shore stand several snow-streaked conical peaks, the highest being Mount Ruapehu — the highest point of the North Island, an active stratovolcano with a crater lake at the top and a ski field in winter." +
      " Beyond the volcanic plateau you enter the mountains of the southern North Island. The Tararua Range is a steep, wet, wind-scoured line of hills separating the Wellington area from the western plains. The plane crosses the Tararua and descends along an almost enclosed harbour to Wellington — the capital, squeezed onto the steep western shore.",
    },
    // travel sources: 全四段（study/travel × 中英）: 怀卡托河最长、陶波湖最大、鲁阿佩胡为北岛最高点；库克海峡渡轮三个多小时。核实 2026-09-11
    travel: {
    "zh-CN":
      "奥克兰到惠灵顿飞约一小时，同一时区。两地都属温带海洋性气候：奥克兰更暖更湿，惠灵顿以风大出名，天气变化都很快，随身带防风防水外套。南半球季节相反，12–2月是夏天。" +
      "惠灵顿市区紧凑、步行可达，蒂帕帕国家博物馆（免费）、缆车上山的植物园、古巴街一带的咖啡馆是主要去处；从这里坐渡轮跨库克海峡进入南岛。" +
      "多数国家公民入境新西兰前需在线申请电子旅行许可（NZeTA）并缴游客税，落地不能补办。入境对徒步鞋、帐篷、食品查得极严，务必清洗、如实申报。",
    "en-US":
      "Auckland to Wellington is about an hour, in the same time zone. Both have a temperate maritime climate: Auckland is warmer and wetter, Wellington is famously windy, and the weather changes fast in both — carry a windproof, waterproof jacket. In the southern hemisphere the seasons are reversed; December–February is summer." +
      " Wellington's centre is compact and walkable; Te Papa (the national museum, free), the Botanic Garden at the top of the cable car, and the cafés around Cuba Street are the main draws, and from here the ferry crosses Cook Strait to the South Island." +
      " Citizens of most countries need to apply online for an NZeTA and pay a visitor levy before arriving in New Zealand, which cannot be arranged on arrival. Border checks on hiking boots, tents and food are very strict — clean them and declare honestly.",
    },
  },

  "akl-chc": {
    study: {
    "zh-CN":
      "奥克兰飞基督城，是从北岛飞到南岛，越过分开两岛的库克海峡。起飞后先是怀卡托的牧场和陶波湖的火山高原。" +
      "接近北岛南端，海面出现一片被淹没的山谷形成的锯齿状海湾和半岛，那是马尔堡峡湾，也是库克海峡北岸。越过海峡就到南岛。" +
      "南岛一上岸就是山。凯库拉山脉几乎直接从海里拔起，山脚下是狭窄的海岸公路和铁路，海里常有鲸和海豚。" +
      "过了凯库拉，地面豁然开阔平坦，这就是坎特伯雷平原——南岛最大的平原，由南阿尔卑斯山上冲下来的砾石堆积而成，一条条辫状河从山口散开流向大海。基督城就建在平原东缘、班克斯半岛（两座古老死火山叠合而成）脚下。",
    "en-US":
      "Auckland to Christchurch flies from the North Island to the South Island, across Cook Strait, which separates them. After take-off come the Waikato farm country and the volcanic plateau around Lake Taupō." +
      "Near the southern end of the North Island, a jagged pattern of drowned-valley bays and peninsulas appears on the sea: the Marlborough Sounds, the northern shore of Cook Strait. Across the strait you are on the South Island." +
      " The South Island rises straight into mountains at the coast. The Kaikōura Ranges lift almost directly out of the sea, with a narrow coastal road and railway at their foot, and whales and dolphins often in the water." +
      " Past Kaikōura the land opens out flat: the Canterbury Plains, the largest plain on the South Island, built of gravel washed down from the Southern Alps, with braided rivers spreading from the mountain gaps toward the sea. Christchurch is built on the plains' eastern edge at the foot of Banks Peninsula, built from two old extinct volcanoes.",
    },
    // travel sources: 全四段（study/travel × 中英）: 坎特伯雷平原、凯库拉山脉；班克斯半岛原写一座火山，按本库改为两座叠合。核实 2026-09-11
    travel: {
    "zh-CN":
      "奥克兰到基督城飞约一个半小时，同一时区。基督城比北岛凉、四季分明，夏季（12–2月）干爽，冬季有霜、偶尔焚风又干又热。" +
      "基督城是探索南岛的门户：往西经阿瑟隘口有观光火车到西海岸，往南到蒂卡波看星空、库克山、皇后镇，往北到凯库拉看鲸。市中心平坦、适合骑行，震后有很多用集装箱和街头艺术做的过渡空间。" +
      "入境新西兰对户外装备（徒步鞋、帐篷）和食品查得极严，务必清洗申报。多数国家公民需提前在线办 NZeTA 并缴游客税。",
    "en-US":
      "Auckland to Christchurch is about an hour and a half, in the same time zone. Christchurch is cooler than the North Island, with four clear seasons — dry summers (December–February) and frosty winters, with the occasional dry, hot föhn wind." +
      " Christchurch is the gateway to the South Island: west over Arthur's Pass with the scenic train to the West Coast, south to Tekapo for the night sky, to Aoraki/Mount Cook and Queenstown, north to Kaikōura for whales. The centre is flat and good for cycling, and since the earthquakes it has filled with transitional spaces made of shipping containers and street art." +
      " Border checks on outdoor gear (hiking boots, tents) and food entering New Zealand are very strict — clean them and declare. Citizens of most countries need an NZeTA and the visitor levy arranged online in advance.",
    },
  },

  "wlg-chc": {
    study: {
    "zh-CN":
      "惠灵顿飞基督城，是一趟很短的跨海峡航班，把新西兰的两座大岛连起来。起飞后不久就到库克海峡——把北岛和南岛分开的一段风大浪急的水道，渡轮走这里要三个多小时。" +
      "南岛一侧的海岸是马尔堡峡湾：许多被淹没的山谷伸进内陆，形成一条条细长的海湾和半岛，岸边是森林，湾里是安静的深水。" +
      "峡湾以南，凯库拉山脉几乎从海里直接升起，山顶带雪，山脚是一条贴着海的公路和铁路。" +
      "过了凯库拉，地面变成开阔平坦的坎特伯雷平原，一条条辫状河从南阿尔卑斯的山口散开。基督城就在平原东缘。整条航线虽短，却看全了“海峡—峡湾—海边高山—大平原”这一串。",
    "en-US":
      "Wellington to Christchurch is a short flight across the strait, joining New Zealand's two main islands. Soon after take-off comes Cook Strait — the windy, rough channel that separates the North and South islands, which the ferry takes over three hours to cross." +
      " The South Island shore is the Marlborough Sounds: many drowned valleys reaching inland as long, thin bays and peninsulas, forest at the water's edge and quiet deep water in the arms." +
      " South of the Sounds, the Kaikōura Ranges rise almost straight from the sea, snow on the tops and a road and railway hugging the coast at their foot." +
      " Past Kaikōura the land becomes the open, flat Canterbury Plains, with braided rivers spreading from the gaps in the Southern Alps. Christchurch is on the plains' eastern edge. Short as it is, the flight takes in the whole sequence — strait, sounds, coastal mountains, great plain.",
    },
    // travel sources: 全四段（study/travel × 中英）: 时长约五十分钟与本库航线数据一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "惠灵顿到基督城飞约五十分钟。也可以坐跨海峡渡轮到皮克顿再换火车/自驾，全程大半天但风景很好。两地都属温带海洋性气候，基督城更凉、四季分明。" +
      "基督城是南岛的交通门户，往西、往南、往北都有经典的观光路线（TranzAlpine 观光火车、库克山、凯库拉观鲸）。市中心平坦、适合骑行。" +
      "跨海峡渡轮遇大风大浪会延误或取消，坐飞机更稳。入境对户外装备和食品查得极严。",
    "en-US":
      "Wellington to Christchurch is about 50 minutes. You can also take the Cook Strait ferry to Picton and continue by train or car — most of a day, but very scenic. Both have a temperate maritime climate; Christchurch is cooler, with four clear seasons." +
      " Christchurch is the transport gateway to the South Island, with classic scenic routes west, south and north (the TranzAlpine train, Aoraki/Mount Cook, whale watching at Kaikōura). The centre is flat and good for cycling." +
      " The Cook Strait ferry is delayed or cancelled in high wind and swell, so flying is more reliable. Border checks on outdoor gear and food are very strict.",
    },
  },

  "chc-zqn": {
    study: {
    "zh-CN":
      "基督城飞皇后镇，是从东岸的大平原，横穿南阿尔卑斯山脉，飞到南部的湖山之间。起飞时脚下是坎特伯雷平原，辫状河从西边的山口散开。" +
      "往西南，地面抬高，绿色的牧场变成灰黄的干旱高地，这就是麦肯齐盆地——一片被群山围住的高原盆地，几个冰川融水形成的湖（特卡波、普卡基）是奶蓝色的，因为水里带着冰川磨出的极细岩粉。这一带人烟稀少、光污染小，是暗夜星空保护区。" +
      "再往西是南阿尔卑斯山脉的主脊——一列终年积雪、冰川广布的高山，最高的库克山（Aoraki）就在附近。山的西侧因为迎着来自塔斯曼海的湿气，雨极多、长着雨林；东侧则干燥。" +
      "越过分水岭，地面陷下去，出现一个 Z 形的深色湖，那是瓦卡蒂普湖，皇后镇就在湖湾边，对岸是陡峭的卓越山脉。",
    "en-US":
      "Christchurch to Queenstown flies from the eastern plains across the Southern Alps into the lake-and-mountain country of the south. On take-off you are over the Canterbury Plains, with braided rivers spreading from the mountain gaps to the west." +
      " South-west the land rises, and the green pasture gives way to grey-gold dry uplands: the Mackenzie Basin, a high basin ringed by mountains, where glacier-fed lakes such as Tekapo and Pūkaki are milky blue because the water carries very fine rock flour ground by the ice. This area is thinly peopled with little light pollution — a dark-sky reserve." +
      " Farther west is the main crest of the Southern Alps — a line of high mountains under permanent snow and widespread glaciers, with the highest peak, Aoraki/Mount Cook, close by. The western side, facing the moist air off the Tasman Sea, has extreme rainfall and rainforest; the eastern side is dry." +
      " Over the divide the ground drops away and a dark Z-shaped lake appears: Lake Wakatipu, with Queenstown on a bay and the steep Remarkables on the far shore.",
    },
    // travel sources: 全四段（study/travel × 中英）: 麦肯齐盆地冰川乳蓝湖、奥拉基 / 麦肯齐暗夜星空保护区（2012）。核实 2026-09-11
    travel: {
    "zh-CN":
      "基督城到皇后镇飞约一小时。皇后镇在山的背风侧，属温带半干旱气候：夏季温暖干爽（徒步、水上活动旺季），冬季寒冷有雪（滑雪季，6–8月），昼夜温差大，两个旺季住宿都贵、要早订。" +
      "皇后镇是新西兰的户外运动中心：天际缆车、坐老蒸汽船 TSS 厄恩斯劳号游湖、蹦极跳伞喷射快艇（选正规经营者），往格林诺奇、箭镇、瓦纳卡自驾。去米尔福德峡湾一日游单程约4小时山路。" +
      "冬季山路可能要带防滑链，查路况。入境对户外装备和食品查得极严。",
    "en-US":
      "Christchurch to Queenstown is about an hour. Queenstown is on the lee side of the mountains, with a temperate semi-arid climate: warm, dry summers (the hiking and water-sports high season) and cold, snowy winters (the ski season, June–August), a wide day-to-night range, and expensive, early-booked accommodation in both peaks." +
      " Queenstown is New Zealand's outdoor-sports centre: the Skyline Gondola, a cruise on the historic steamship TSS Earnslaw, bungy, skydiving and jetboating (use licensed operators), and drives to Glenorchy, Arrowtown and Wānaka. The Milford Sound day trip is about a 4-hour mountain drive each way." +
      " In winter, mountain roads may need chains — check road conditions. Border checks on outdoor gear and food are very strict.",
    },
  },

  "akl-rot": {
    study: {
    "zh-CN":
      "奥克兰飞罗托鲁瓦，是一趟很短的航班，从最大的城市飞进北岛的火山地热带。起飞后脚下是奥克兰的地峡和散布的死火山锥，随后是怀卡托的牧场，怀卡托河在绿色田野里蜿蜒。" +
      "很快就到罗托鲁瓦。这里坐落在一个古老的破火山口里，地面能看到冒着白汽的地热区——间歇泉、沸泥塘、颜色鲜艳的热泉，罗托鲁瓦湖占了火口的很大一部分。周边还有十几个火山湖和塔拉威拉山。" +
      "这一带是北岛陶波火山带的一段——地壳下的岩浆把地下水加热，形成这些地热景观；也是毛利蒂阿拉瓦部族的传统聚居地，很多村落就建在温泉旁边。",
    "en-US":
      "Auckland to Rotorua is a short flight from the largest city into the volcanic and geothermal belt of the North Island. On take-off you are over the Auckland isthmus and its scattered extinct cones, then the Waikato farm country with the Waikato River winding through green fields." +
      " Rotorua comes up quickly. It sits in an old caldera, and from the air you can see the steaming geothermal areas — geysers, boiling mud pools, brightly coloured hot springs — with Lake Rotorua filling much of the crater. There are a dozen or so volcanic lakes around, and Mount Tarawera." +
      " This area is part of the Taupō Volcanic Zone of the North Island — magma below the crust heats the groundwater to make these geothermal features — and it is also traditional home of the Te Arawa Māori people, with many villages built beside the hot springs.",
    },
    // travel sources: 全四段（study/travel × 中英）: 罗托鲁瓦湖为破火山口积水、属陶波火山带；Te Arawa。核实 2026-09-11
    travel: {
    "zh-CN":
      "奥克兰到罗托鲁瓦飞约40分钟，多数人从奥克兰自驾（约3小时）。罗托鲁瓦全年可来，12–3月最舒服；地热区附近湿度大、硫磺味重，银饰会变黑，可摘下。" +
      "看点是怀奥塔普、蒂普亚等地热区，红木森林骑行、树顶步道，湖景温泉，以及毛利文化体验（marae 参观、歌舞、hāngī 土窑餐）。" +
      "地热地表薄、烫，务必走在步道上、看好孩子。间歇泉喷发有固定时间。入境对户外装备和食品查得极严。",
    "en-US":
      "Auckland to Rotorua is about 40 minutes, though most people drive from Auckland (about 3 hours). Rotorua is a year-round destination, most comfortable December–March; near the geothermal areas the humidity is high and the sulphur smell strong, and silver jewellery tarnishes, so you can take it off." +
      " The draws are the geothermal areas such as Wai-O-Tapu and Te Puia, cycling and the treewalk in the Redwoods, the lake-view hot pools, and Māori cultural experiences (a marae visit, performance, a hāngī earth-oven meal)." +
      " The geothermal crust is thin and scalding — stay on the paths and mind children. Geysers erupt at set times. Border checks on outdoor gear and food are very strict.",
    },
  },

  "pvg-akl": {
    // study sources: 全四段（study/travel × 中英）: 全程约 9400 km（大圆约 9365 km）；马里亚纳海沟逾一万米。核实 2026-09-11
    study: {
    "zh-CN":
      "上海飞奥克兰，向东南穿越西太平洋，全程约九千四百公里，从北半球一直飞到南半球。起飞后先掠过东海，这是一片平均水深不足两百米的陆架海，海底铺着长江搬运来的泥沙，冬季常有寒潮南下带来的大风。接着进入菲律宾海——西太平洋最大的边缘海，被琉球、菲律宾与马里亚纳诸岛围出一片深水盆地，东缘的马里亚纳海沟是地球表面已知最深处，超过一万米；洋面上常年高温高湿，是台风重要的生成海域。越过赤道后是俾斯麦海，夹在新几内亚岛与新不列颠岛之间的一片小而深的海，海底有活跃的扩张中心与热液喷口，周边岛弧火山活动频繁，海岸多被浓密的热带雨林覆盖。再往南是珊瑚海，海底是一系列深海盆地，西侧的大陆架上发育着世界上规模最大的堡礁系统，礁体由造礁石珊瑚在浅暖水中长期堆积而成。接下来横穿塔斯曼海，这片海域西风强劲、涌浪终年不息。最后飞机进入新西兰北岛上空，降落在奥克兰机场。",
    "en-US":
      "Shanghai to Auckland runs south-east across the western Pacific, about 9,400 km in all, from the northern hemisphere into the southern. After take-off it crosses the East China Sea, a shelf sea less than two hundred metres deep on average, its floor covered by silt carried out by the Yangtze and its surface swept by strong winds when cold air pushes south in winter. The route then enters the Philippine Sea, the largest marginal sea of the western Pacific, a deep basin enclosed by the Ryukyu, Philippine and Mariana island arcs; along its eastern edge the Mariana Trench reaches the deepest known point on the Earth's surface, more than ten thousand metres down, and the warm, humid air above it is a major birthplace of typhoons. Past the equator comes the Bismarck Sea, a small deep sea between New Guinea and New Britain, with active spreading centres and hydrothermal vents on its floor, frequent volcanic activity along the surrounding island arc and dense rainforest running down to its shores. Farther south lies the Coral Sea, floored by a series of deep basins, with the largest barrier reef system in the world built up on the shelf along its western side by reef-building corals in shallow warm water. The flight then crosses the Tasman Sea, where westerly winds are strong and the swell never fully settles. It finally reaches the North Island of New Zealand and lands at Auckland Airport.",
    },
    travel: {
    "zh-CN":
      "上海到奥克兰约11小时40分钟，时差4-5小时（新西兰实行夏令时，9月至次年4月与北京时差5小时，其余时间4小时）。新西兰四季与北半球相反，12-2月为夏季，6-8月为冬季，出行前请按当地季节备衣物，紫外线较强，建议备好防晒。" +
      "奥克兰机场距市中心约21公里，机场快线大巴（SkyBus/AirportLink）约45分钟直达市区。天空塔、怀希基岛酒庄、奥克兰战争纪念博物馆（了解毛利文化）是市内代表性游览项目。" +
      "中国公民赴新西兰须提前在线申请电子旅行许可（NZeTA）或签证，具体要求以新西兰移民局最新公布为准，建议出发前至少提前数天完成申请。",
    "en-US":
      "Shanghai to Auckland takes about 11 hours 40 minutes, with a 4-5 hour time difference (New Zealand observes daylight saving, giving a 5-hour gap from Beijing between September and April, and 4 hours the rest of the year). New Zealand's seasons run opposite the northern hemisphere — summer is December to February, winter June to August — pack accordingly, and note that UV levels are strong, so sun protection is worth packing too." +
      " Auckland Airport is about 21 km from the city centre; the SkyBus/Airport Link express bus takes about 45 minutes into town. The Sky Tower, the Waiheke Island wineries and the Auckland War Memorial Museum (a good introduction to Māori culture) are among the city's signature outings." +
      " Chinese citizens must apply online for a New Zealand Electronic Travel Authority (NZeTA) or visa before travelling; check New Zealand Immigration for the latest requirements and apply at least a few days ahead of departure.",
    },
  },
};
