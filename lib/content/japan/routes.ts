import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "hnd-itm": {
    study: {
    "zh-CN":
      "东京飞大阪，虽然只有一个多小时，却是把日本本州人口最密集的“太平洋走廊”从东飞到西。起飞时脚下是关东平原——日本面积最大的平原，由利根川等河流冲积而成，几乎被东京都市圈完全覆盖，看不到什么农田。" +
      "很快，右前方出现一座轮廓极其对称的圆锥形雪山，那就是富士山。它是一座层状火山，孤零零立在平原和丘陵之间，晴天从飞机上能看得很清楚。" +
      "越过富士山所在的丘陵地带，进入名古屋所在的浓尾平原，这是木曾川等河流冲积出来的一片冲积平原，下游近海处发育成三角洲。再往西，一片明亮的水面出现在山间，那是琵琶湖——日本最大的湖，京都、大阪的用水很大程度靠它。" +
      "琵琶湖以南、群山之间的低地就是大阪平原，大阪、京都、神户连成一片。飞机在平原北缘的伊丹机场降落。一趟短途航班，飞过了日本的政治中心、象征性的名山和历史古都。",
    "en-US":
      "Tokyo to Osaka takes only a little over an hour, but it flies the length of Honshu's most densely populated \"Pacific corridor\", east to west. On take-off you are over the Kanto Plain — the largest plain in Japan, built by the Tone and other rivers and almost entirely covered by the Tokyo metropolitan area, with little farmland visible." +
      " Soon an almost perfectly symmetrical snow-capped cone appears ahead to the right: Mount Fuji, a stratovolcano standing alone between plain and hills, clearly seen from the plane on a fine day." +
      " Beyond the hills around Fuji you cross the Nobi Plain around Nagoya, an alluvial plain built by the Kiso and other rivers, with a delta near its mouth. Farther west a bright sheet of water appears among the mountains: Lake Biwa, the largest lake in Japan, which supplies much of the water for Kyoto and Osaka." +
      " South of the lake, the lowland among the mountains is the Osaka Plain, where Osaka, Kyoto and Kobe run together. The plane lands at Itami on the northern edge of the plain. In one short flight you have passed the political centre of Japan, its symbolic mountain and its historic capital.",
    },
    // travel sources: 全四段（study/travel × 中英）: 富士山、琵琶湖日本最大湖、大阪平原与本库一致；浓尾平原原写「三角洲平原」，按本库改为冲积平原（下游近海处为三角洲）。核实 2026-09-11
    travel: {
    "zh-CN":
      "东京到大阪飞行约一小时，但机场到市区都要再花时间，很多人其实坐新干线（约两个半小时、市中心到市中心）。两地都属太平洋侧的温带气候：夏季闷热、6–7月有梅雨，秋季有台风，冬季温和少雪。" +
      "大阪是关西的中心，市井气息浓、以吃闻名（章鱼烧、大阪烧、串炸）。它也是去京都（约30分钟）、奈良、神户、姬路的枢纽。市内地铁和 JR 环状线方便，用一张 IC 卡（ICOCA 等）通用。" +
      "樱花期（3月底到4月初）和红叶期（11月）关西游客最多，京都的热门寺院要趁早去。夏天注意防暑补水，随身带把伞应付雷阵雨。",
    "en-US":
      "Tokyo to Osaka is about an hour in the air, but with airport transfers many people take the Shinkansen instead (about two and a half hours, city centre to city centre). Both cities have a Pacific-side temperate climate: hot, humid summers with a rainy season in June–July, typhoons in autumn, and mild winters with little snow." +
      " Osaka is the centre of the Kansai region, down-to-earth and known for its food (takoyaki, okonomiyaki, kushikatsu). It is also the hub for Kyoto (about 30 minutes), Nara, Kobe and Himeji. The subway and the JR Loop Line are easy, and a single IC card (ICOCA and others) works throughout." +
      " During the cherry-blossom season (late March to early April) and the autumn-leaf season (November) Kansai is busiest, and the popular Kyoto temples are best visited early. In summer take care in the heat and carry an umbrella for thunderstorms.",
    },
  },

  "hnd-cts": {
    study: {
    "zh-CN":
      "东京飞札幌，是从本州最大的平原飞到北海道最大的平原，一路沿着太平洋岸往北。起飞时脚下是关东平原和东京都市圈，随后进入本州东北部的太平洋一侧。" +
      "航线大致贴着三陆海岸走。三陆海岸的南段是典型的里亚式海岸——被淹没的山谷形成一连串深入内陆的锯齿状海湾，港口就藏在湾底；北段则是高耸的海蚀崖。这一带面向开阔的太平洋。" +
      "越过津轻海峡进入北海道。首先看到的是支笏洞爷一带的火山区——支笏湖和洞爷湖都是破火山口积水形成的深湖，旁边有有珠山、樽前山等活火山，地面能看到浅色的火山碎屑和火口。" +
      "再往北是石狩平原，由石狩川冲积而成，是北海道人口和农业的重心，田块比本州大得多、更规整。札幌就建在平原南缘、面向石狩湾的位置。",
    "en-US":
      "Tokyo to Sapporo flies from the largest plain on Honshu to the largest on Hokkaido, north along the Pacific coast. On take-off you are over the Kanto Plain and the Tokyo metropolitan area, then over the Pacific side of north-eastern Honshu." +
      " The route roughly follows the Sanriku Coast. Its southern part is a classic ria coast — drowned river valleys forming a line of jagged bays reaching inland, with the ports tucked at the head of each bay; the northern part is high sea cliffs. This stretch faces the open Pacific." +
      " Across the Tsugaru Strait you reach Hokkaido. First comes the Shikotsu–Toya volcanic area — Lakes Shikotsu and Toya both fill volcanic calderas as deep lakes, with active volcanoes such as Usu and Tarumae beside them, and pale volcanic debris and craters visible on the ground." +
      " Farther north is the Ishikari Plain, built by the Ishikari River, the centre of Hokkaido's population and farming, with fields much larger and more regular than on Honshu. Sapporo is built on its southern edge, facing Ishikari Bay.",
    },
    // travel sources: 全四段（study/travel × 中英）: 三陆海岸南段里亚式、北段海蚀崖；石狩平原北海道最大；支笏 / 洞爷原写「火山口」，按本库改为破火山口。核实 2026-09-11
    travel: {
    "zh-CN":
      "东京到札幌约一个半小时。北海道纬度高、气候明显不同于本州：夏季（7–8月）凉爽干燥、是避暑胜地，冬季漫长严寒、降雪极多，札幌一二月常在零下、路面结冰。" +
      "札幌是北海道的中心城市，街区呈规整的棋盘状。二月的札幌雪祭是主要活动；其它季节多把札幌当作枢纽——往东去富良野、美瑛的花田和大雪山，往西南去小樽、洞爷、函馆，往东去知床、钏路湿原。" +
      "北海道地广、城市间距离大，自驾较方便但冬季雪地驾驶需经验和冬胎。夏季昼夜温差大、要带外套；冬季务必防寒防滑。",
    "en-US":
      "Tokyo to Sapporo is about an hour and a half. Hokkaido is at a higher latitude and its climate is clearly different from Honshu's: cool, dry summers (July–August) make it a place to escape the heat, while winters are long and severe with very heavy snow — Sapporo is often below freezing in January and February, with icy streets." +
      " Sapporo is the main city of Hokkaido, laid out on a regular grid. The Snow Festival in February is the big event; in other seasons Sapporo is mostly a hub — east to the flower fields of Furano and Biei and to Daisetsuzan, south-west to Otaru, Toya and Hakodate, east to Shiretoko and the Kushiro marshes." +
      " Hokkaido is large with long distances between towns; driving is convenient but winter snow driving needs experience and winter tyres. Summers have a wide day-to-night range so bring a jacket; in winter, dress for the cold and for ice underfoot.",
    },
  },

  "hnd-fuk": {
    study: {
    "zh-CN":
      "东京飞福冈，是从本州东端飞到九州北端，几乎横跨整个西日本。起飞后脚下是关东平原和东京都市圈，右前方能看到富士山的圆锥。" +
      "越过富士，进入本州中部的山地，然后是纪伊山地——纪伊半岛上一片起伏很大、森林茂密的山区，降水多，是日本雨量最大的地区之一，也是熊野古道所在。" +
      "过了纪伊半岛，眼前豁然开朗，是濑户内海。这是本州、四国、九州之间一片布满岛屿的内海，水面平静、岛影密集，两岸是狭窄的沿海平原和港口城市，几座跨海大桥把三块陆地连起来。" +
      "濑户内海西端就是关门海峡，过了海峡就是九州。福冈在九州北岸、面向玄界滩，是九州最大的城市，也是日本离亚洲大陆最近的大城市之一。",
    "en-US":
      "Tokyo to Fukuoka flies from the eastern end of Honshu to the northern end of Kyushu, almost the full width of western Japan. After take-off you are over the Kanto Plain and the Tokyo metropolitan area, with the cone of Mount Fuji visible ahead to the right." +
      " Past Fuji you cross the mountains of central Honshu, then the Kii Mountains — a rugged, densely forested range on the Kii Peninsula, one of the wettest areas in Japan and the setting of the Kumano pilgrimage routes." +
      " Beyond the peninsula the view opens onto the Seto Inland Sea, an island-filled sea between Honshu, Shikoku and Kyushu, its water calm and its islands close-packed, with narrow coastal plains and port cities on either shore and several long bridges linking the three landmasses." +
      " At the western end of the Inland Sea is the Kanmon Strait; across it is Kyushu. Fukuoka, on Kyushu's northern coast facing the Genkai Sea, is the largest city on the island and one of the Japanese cities closest to mainland Asia.",
    },
    // travel sources: 全四段（study/travel × 中英）: 纪伊山地、濑户内海、关门海峡与本库一致；东京—福冈「最繁忙之一」带限定。核实 2026-09-11
    travel: {
    "zh-CN":
      "东京到福冈约两小时，是日本国内最繁忙的航线之一。福冈属较温暖的太平洋—对马暖流气候：夏季闷热、6–7月梅雨明显，冬季温和、偶有降雪，比东京暖一些。" +
      "福冈城市紧凑，机场离市中心只有地铁两三站，非常方便。以拉面（豚骨）、屋台（路边摊）和海鲜出名。它是九州旅游的门户：往南去阿苏、由布院、别府的火山与温泉，往西去长崎，往北坐船或高铁去下关。" +
      "台风季（约7–9月）留意预报。樱花和红叶季市内的舞鹤公园、大濠公园人多但不算夸张。",
    "en-US":
      "Tokyo to Fukuoka is about two hours and one of the busiest domestic routes in Japan. Fukuoka has a milder Pacific–Tsushima Current climate: hot, humid summers with a clear rainy season in June–July, and mild winters with occasional snow, a little warmer than Tokyo." +
      " Fukuoka is compact, and the airport is only two or three subway stops from the centre — very convenient. It is known for tonkotsu ramen, yatai (street stalls) and seafood. It is the gateway to Kyushu: south to the volcanoes and hot springs of Aso, Yufuin and Beppu, west to Nagasaki, north by ferry or rail to Shimonoseki." +
      " During the typhoon season (about July to September) watch the forecast. In the cherry-blossom and autumn-leaf seasons Maizuru and Ohori parks in the city are busy but not extreme.",
    },
  },

  "koj-oka": {
    study: {
    "zh-CN":
      "鹿儿岛飞那霸，是沿着南西诸岛这条岛链，从九州南端飞向亚热带的冲绳。起飞时锦江湾里立着一座冒烟的火山岛，那是樱岛——鹿儿岛市对面的活火山，近几十年频繁小规模喷发，山顶常年有烟柱，山坡是灰黑色的火山灰和熔岩。" +
      "往南不久，一座近乎圆形、被浓密森林覆盖的高岛出现在海上，那是屋久岛。它由一整块花岗岩隆起而成，岛中央的山高近两千米，把海上的水汽拦下来，是日本降水最多的地方之一，山上长着上千年的柳杉，被列为世界自然遗产。" +
      "再往南进入南西诸岛的主链——一串平缓的珊瑚礁岛屿，四周是浅蓝色的礁盘和白沙滩，与九州的火山岛完全不同。这些岛屿属亚热带气候。" +
      "那霸在冲绳本岛南部，是这片岛屿地区的中心城市。整趟航线，从温带的活火山，飞到了亚热带的珊瑚礁海。",
    "en-US":
      "Kagoshima to Naha follows the Nansei island chain from the southern tip of Kyushu toward subtropical Okinawa. On take-off a smoking volcanic island stands in Kagoshima Bay: Sakurajima, an active volcano facing the city that has erupted frequently on a small scale in recent decades, with a near-constant plume and slopes of grey-black ash and lava." +
      " A short way south a near-circular, densely forested high island appears in the sea: Yakushima. It is a single uplifted block of granite, with peaks near 2,000 m in its centre that wring the moisture out of the sea air, making it one of the wettest places in Japan; thousand-year-old cedars grow on its slopes, and it is a World Heritage Site." +
      " Farther south you reach the main Nansei chain — a string of low coral islands ringed by pale-blue reef flats and white sand, quite unlike the volcanic islands of Kyushu. These islands have a subtropical climate." +
      " Naha, in the south of Okinawa's main island, is the central city of this island region. The whole flight has gone from a temperate active volcano to a subtropical coral sea.",
    },
    // travel sources: 全四段（study/travel × 中英）: 樱岛 1914 年与大隅半岛陆连、屋久岛花岗岩隆起与本库一致；首里城正殿截至 2026-09 仍在重建（会过期的现状）。核实 2026-09-11
    travel: {
    "zh-CN":
      "鹿儿岛到那霸约一个半小时。冲绳属亚热带海洋性气候，全年温暖：冬季也在15°C以上，夏季炎热潮湿，5–6月梅雨、7–10月是台风季，台风来时航班和轮渡常停。" +
      "那霸是冲绳的门户，国际通商业街、首里城公园（火灾后部分在重建）、周边的海滩和离岛（座间味、渡嘉敷）是主要去处。冲绳有自己的历史和饮食（苦瓜、海葡萄、泡盛酒），与本州差别明显。" +
      "岛上公共交通有限，单轨电车只覆盖那霸市区，去别处多靠租车（靠左行驶）。全年防晒，潜水浮潜选有资质的经营者。",
    "en-US":
      "Kagoshima to Naha is about an hour and a half. Okinawa has a subtropical maritime climate, warm all year: even winter stays above 15°C, summers are hot and humid, with a rainy season in May–June and a typhoon season from July to October, when flights and ferries often stop." +
      " Naha is the gateway to Okinawa; the Kokusai-dori shopping street, Shuri Castle Park (partly being rebuilt after a fire), and the nearby beaches and outer islands (Zamami, Tokashiki) are the main draws. Okinawa has its own history and food (bitter melon, sea grapes, awamori spirit), clearly different from Honshu." +
      " Public transport on the island is limited — the monorail only covers central Naha — so most people hire a car (driving on the left). Use sun protection year-round, and choose licensed operators for diving and snorkelling.",
    },
  },

  "hnd-koj": {
    study: {
    "zh-CN":
      "东京飞鹿儿岛，是从本州东端斜穿西日本，飞到九州南端的火山地带。起飞后是关东平原和东京都市圈，随后富士山的圆锥出现在窗外。" +
      "越过富士和本州中部山地，进入纪伊山地——纪伊半岛上多雨、森林茂密的山区。过了濑户内海西部，进入九州。" +
      "九州中部立着阿苏山：它是一座巨大的破火山口，直径约二十公里，是世界上规模最大的破火山口之一；火口原里有农田和铁路，中央新起的几座火山锥仍在活动，其中中岳常年冒烟。" +
      "再往南是鹿儿岛所在的锦江湾，湾里就是不断喷发的樱岛。鹿儿岛市和樱岛隔着几公里宽的海面相望，市区常常落一层薄薄的火山灰。这条航线把日本两处最有代表性的活火山连在一起看。",
    "en-US":
      "Tokyo to Kagoshima cuts diagonally across western Japan from the eastern end of Honshu to the volcanic country at the southern tip of Kyushu. After take-off comes the Kanto Plain and the Tokyo metropolitan area, then the cone of Mount Fuji in the window." +
      " Past Fuji and the mountains of central Honshu you cross the Kii Mountains — the wet, forested range of the Kii Peninsula. Beyond the western Seto Inland Sea you reach Kyushu." +
      " In central Kyushu stands Mount Aso: a huge caldera about 20 km across, one of the largest in the world, with farmland and a railway on its crater floor and several younger cones in the centre still active, of which Nakadake smokes more or less constantly." +
      " Farther south is Kagoshima Bay, with the continually erupting Sakurajima in it. The city and the volcano face each other across a few kilometres of water, and a thin layer of ash often falls on the city. This flight links two of the most representative active volcanoes in Japan.",
    },
    // travel sources: 全四段（study/travel × 中英）: 阿苏破火山口约 20 km（官方 25×18 km 的取整）；中文原写「数一数二大」，按官方口径降级为「规模最大之一」。核实 2026-09-11
    travel: {
    "zh-CN":
      "东京到鹿儿岛约两小时。鹿儿岛在九州南部，气候温暖湿润：夏季炎热、6–7月梅雨量大，冬季温和，台风季（7–10月）影响明显。因为樱岛，市区偶尔会有降灰，风向不利时要留意。" +
      "鹿儿岛是九州南部的中心，坐轮渡十几分钟就能上樱岛看火山地貌。往南坐船去屋久岛、种子岛，往北去雾岛的温泉和火山、去熊本和阿苏。当地以黑猪肉、烧酒（芋烧酎）和白熊刨冰出名。" +
      "登山季（屋久岛、雾岛）多雨，装备要防水；市区遇降灰日尽量减少户外活动、开车注意路滑。",
    "en-US":
      "Tokyo to Kagoshima is about two hours. Kagoshima, in southern Kyushu, has a warm, humid climate: hot summers with heavy rain in June–July, mild winters, and a clear typhoon season (July–October). Because of Sakurajima, ash occasionally falls on the city, so watch the wind direction on eruptive days." +
      " Kagoshima is the centre of southern Kyushu; a ferry of about 15 minutes reaches Sakurajima and its volcanic landforms. South, ferries run to Yakushima and Tanegashima; north lie the hot springs and volcanoes of Kirishima, and Kumamoto and Aso. Local specialities are black-pork dishes, sweet-potato shochu and shirokuma shaved ice." +
      " The hiking seasons on Yakushima and Kirishima are wet, so bring waterproof gear; on ash-fall days in the city, cut outdoor time and drive carefully on slippery roads.",
    },
  },

  "cts-fuk": {
    study: {
    "zh-CN":
      "札幌飞福冈，是一条把日本从最北飞到最南的国内长航线，几乎斜穿整个日本列岛。起飞时脚下是石狩平原——北海道最大的平原，田块规整、比本州开阔。" +
      "越过津轻海峡进入本州东北，再往西南就进入日本阿尔卑斯山脉的范围：飞驒、木曾、赤石三条山脉并列在本州中部，是日本海拔最高的山群，多座山峰超过三千米，山脊终年积雪，把本州分成日本海一侧和太平洋一侧。" +
      "越过日本阿尔卑斯，一片明亮的水面出现在山间，那是琵琶湖——日本最大的湖。琵琶湖以西、以南的低地是关西的城市带。" +
      "再往西进入濑户内海——本州、四国、九州之间布满岛屿的平静内海。航线沿内海往西，最后越过关门海峡到九州北岸的福冈。一趟航班，飞过了北海道的平原、本州的高山和西日本的内海。",
    "en-US":
      "Sapporo to Fukuoka is a long domestic route from the far north of Japan to the far south, cutting diagonally across almost the whole archipelago. On take-off you are over the Ishikari Plain — the largest plain on Hokkaido, its fields regular and more open than on Honshu." +
      " Across the Tsugaru Strait into north-eastern Honshu, then south-west into the range of the Japanese Alps: the Hida, Kiso and Akaishi ranges lie side by side across central Honshu, the highest mountains in Japan, with many peaks above 3,000 m, permanent snow on the crests, and the divide between the Sea of Japan side and the Pacific side." +
      " Beyond the Alps a bright sheet of water appears among the mountains: Lake Biwa, the largest lake in Japan. The lowland west and south of it is the Kansai city belt." +
      " Farther west you reach the Seto Inland Sea — the calm, island-filled sea between Honshu, Shikoku and Kyushu. The route follows it west and finally crosses the Kanmon Strait to Fukuoka on Kyushu's northern coast. One flight has passed the plains of Hokkaido, the high mountains of Honshu and the inland sea of western Japan.",
    },
    // travel sources: 全四段（study/travel × 中英）: 与本库日本各条一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "札幌到福冈飞行约两个多小时，是日本国内跨度最大的航线之一，等于从冰雪地带飞到温暖的九州。两地气候差别极大：出发地冬季严寒多雪，目的地冬季温和。" +
      "福冈是九州门户，机场离市中心很近；札幌是北海道枢纽。这条线适合把北海道和九州两段行程连起来，中间不必回东京中转。" +
      "从北海道出发，到福冈基本用不上厚羽绒，换季衣物提前准备；夏季两地都可能有雷雨，福冈还要留意台风。",
    "en-US":
      "Sapporo to Fukuoka is a little over two hours and one of the longest domestic routes in Japan — from snow country to the mild south. The climates are very different: severe, snowy winters where you start, mild winters where you land." +
      " Fukuoka is the gateway to Kyushu with the airport close to the centre; Sapporo is the hub for Hokkaido. This route lets you join a Hokkaido leg and a Kyushu leg without backtracking through Tokyo." +
      " Coming from Hokkaido, you will not need a heavy down coat in Fukuoka, so plan a change of clothes; both cities can have thunderstorms in summer, and Fukuoka also has typhoons to watch.",
    },
  },

  "cts-mmb": {
    study: {
    "zh-CN":
      "札幌飞女满别，是一趟很短的北海道内航班，从道央飞到道东。起飞后脚下是石狩平原和周边的丘陵、稻田。" +
      "往东，地面隆起成一片高山，那是大雪山——北海道中央的火山群，主峰旭岳超过两千米，是北海道最高峰。这里比本州同纬度冷得多，高山带很低，山上很早就下雪、很晚才化，火口和熔岩台地清晰可见，是道内面积最大的国立公园。" +
      "越过大雪山进入道东，地势转为和缓的丘陵和台地，森林和牧场交错，人烟稀少。女满别机场在网走附近，是进入知床半岛的门户之一。" +
      "知床半岛从道东伸进鄂霍次克海，是一条几乎没有道路的火山山脊，两侧是陡峭的海蚀崖，冬季有流冰漂到岸边，被列为世界自然遗产。",
    "en-US":
      "Sapporo to Memanbetsu is a short flight within Hokkaido, from the centre of the island to the east. After take-off you are over the Ishikari Plain and the surrounding hills and rice fields." +
      " Eastward the land rises into a mass of high mountains: Daisetsuzan, the volcanic group at the centre of Hokkaido, whose main peak Asahidake exceeds 2,000 m and is the highest in Hokkaido. It is far colder here than at the same latitude on Honshu, the alpine zone starts low, snow comes early and lingers, and craters and lava plateaus are clearly visible; it is the largest national park in Hokkaido." +
      " Beyond Daisetsuzan the land in eastern Hokkaido becomes gentle hills and terraces, forest and pasture interlocking, thinly peopled. Memanbetsu Airport, near Abashiri, is one of the gateways to the Shiretoko Peninsula." +
      " The Shiretoko Peninsula reaches from eastern Hokkaido into the Sea of Okhotsk — an almost roadless volcanic ridge with steep sea cliffs on both sides, drift ice against its shore in winter, and World Heritage status.",
    },
    // travel sources: 全四段（study/travel × 中英）: 知床火山脊 / 流冰 / 世界遗产与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "札幌到女满别约五十分钟。道东（网走、知床一带）气候比札幌更冷更干，冬季严寒，一二月鄂霍次克海会有流冰靠岸，是这一带冬季的特色；夏季凉爽宜人。" +
      "女满别机场服务网走、北见、知床方向。知床的自然中心是知床五湖和沿海的观光船，冬季有流冰浮潜和观鸟。区域内公共交通稀疏，多数人租车。" +
      "知床部分区域为保护棕熊有进入限制和向导要求，遇到野生动物保持距离、不投喂。冬季道路结冰，自驾要有雪地经验和冬胎。",
    "en-US":
      "Sapporo to Memanbetsu is about 50 minutes. Eastern Hokkaido (around Abashiri and Shiretoko) is colder and drier than Sapporo, with severe winters; in January and February drift ice reaches the Sea of Okhotsk shore, the signature sight of the area in winter, while summers are cool and pleasant." +
      " Memanbetsu Airport serves Abashiri, Kitami and the Shiretoko direction. Shiretoko's nature centres on the Shiretoko Five Lakes and coastal sightseeing boats, with drift-ice snorkelling and birdwatching in winter. Public transport in the area is sparse, so most people hire a car." +
      " Parts of Shiretoko have entry restrictions and guide requirements to protect brown bears; keep your distance from wildlife and do not feed it. Winter roads are icy, so driving needs snow experience and winter tyres.",
    },
  },

  "itm-cts": {
    study: {
    "zh-CN":
      "大阪飞札幌，是从西日本的城市带一路往东北，飞到北海道。起飞时脚下是大阪平原——大阪、京都、神户连成一片的关西城市带。往东不久，一片明亮的水面出现在山间，那是琵琶湖，日本最大的湖。" +
      "越过琵琶湖，进入本州中部的高山——日本阿尔卑斯山脉。飞驒、木曾、赤石三条山脉并列，是日本海拔最高的山群，山脊终年积雪。" +
      "航线往东北方向沿本州脊梁飞，进入东北地方。在青森和秋田交界处，群山之间有一个近乎圆形的深蓝色湖，那是十和田湖——一座破火山口积水形成的湖，湖水从奥入濑溪流泻出。" +
      "越过津轻海峡进入北海道，最后是石狩平原和面向石狩湾的札幌。一趟航班，飞过了关西的湖、本州的高山和东北的火口湖。",
    "en-US":
      "Osaka to Sapporo runs north-east from the city belt of western Japan to Hokkaido. On take-off you are over the Osaka Plain — the Kansai city belt where Osaka, Kyoto and Kobe run together. A short way east a bright sheet of water appears among the mountains: Lake Biwa, the largest lake in Japan." +
      " Beyond the lake you enter the high mountains of central Honshu — the Japanese Alps. The Hida, Kiso and Akaishi ranges lie side by side, the highest mountains in Japan, with permanent snow on the crests." +
      " The route follows the spine of Honshu north-east into the Tohoku region. On the border of Aomori and Akita, a near-circular deep-blue lake sits among the mountains: Lake Towada, a lake filling a caldera, whose water drains out through the Oirase stream." +
      " Across the Tsugaru Strait into Hokkaido, and finally the Ishikari Plain and Sapporo facing Ishikari Bay. One flight has passed a Kansai lake, the high mountains of Honshu and a Tohoku crater lake.",
    },
    // travel sources: 全四段（study/travel × 中英）: 十和田湖破火山口、日本阿尔卑斯与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "大阪到札幌约两小时。这条线把关西和北海道直接连起来，不用绕东京。两地气候差别大：大阪夏季闷热、冬季温和；北海道夏季凉爽、冬季严寒多雪。" +
      "从关西出发去北海道，夏季带一件外套应付早晚温差就够；冬季则要按北海道的标准准备防寒防滑装备。北海道城市间距离大，建议先想好是以札幌为枢纽当日往返，还是分段住宿。",
    "en-US":
      "Osaka to Sapporo is about two hours and links Kansai directly with Hokkaido without going via Tokyo. The climates differ a lot: Osaka has muggy summers and mild winters, Hokkaido has cool summers and severe, snowy winters." +
      " Coming from Kansai in summer, a jacket for the morning and evening chill is enough; in winter, prepare for the cold and ice to Hokkaido standards. Distances between Hokkaido towns are large, so decide in advance whether to base in Sapporo for day trips or to stay in stages.",
    },
  },

  "itm-kum": {
    study: {
    "zh-CN":
      "大阪飞屋久岛，是从关西的城市带飞到九州最南端外海的一座森林高岛。起飞时脚下是大阪平原，随后是濑户内海——本州、四国、九州之间布满岛屿的平静内海，两岸是狭窄的沿海平原和港口。" +
      "航线沿濑户内海往西南，穿过九州南部，进入外海。海面上出现一座近乎圆形、几乎全是山的岛，那就是屋久岛。" +
      "屋久岛是一整块花岗岩隆起而成，直径约二十多公里，岛中央的宫之浦岳接近两千米，是九州最高峰。这么高的山把黑潮上空的水汽拦下来，让屋久岛成为日本降水最多的地方之一，“一个月下三十五天雨”是当地的说法。丰沛的雨水养出了上千年树龄的屋久杉，森林从海岸一直爬到高山，被列为世界自然遗产。",
    "en-US":
      "Osaka to Yakushima flies from the Kansai city belt to a forested high island in the open sea off the southern tip of Kyushu. On take-off you are over the Osaka Plain, then the Seto Inland Sea — the calm, island-filled sea between Honshu, Shikoku and Kyushu, with narrow coastal plains and ports on either shore." +
      " The route follows the Inland Sea south-west, crosses southern Kyushu and reaches the open sea. A near-circular island that is almost all mountain appears: Yakushima." +
      " Yakushima is a single uplifted block of granite, a little over 20 km across, whose central peak Miyanoura-dake approaches 2,000 m and is the highest in Kyushu. Mountains this high wring the moisture out of the air above the Kuroshio Current, making Yakushima one of the wettest places in Japan — locally they say it \"rains 35 days a month\". The heavy rain sustains thousand-year-old Yakusugi cedars, with forest running from the coast right up to the high peaks; it is a World Heritage Site.",
    },
    // travel sources: 全四段（study/travel × 中英）: 阿苏与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "大阪到屋久岛航班少、多为小型螺旋桨机，也可经鹿儿岛转船或转机。屋久岛全年多雨、湿度高，山上和海边天气差别很大：海边亚热带温暖，山上可能很冷甚至下雪，务必带全套防水装备。" +
      "岛上主要活动是徒步（白谷云水峡、绳文杉往返约十小时）、看海岸和温泉。环岛公路一圈约百公里，多数人租车。徒步进核心区有人数管理和须知，绳文杉线路当天往返很累、要早出发，雨天步道湿滑。" +
      "台风季（夏秋）航班和渡轮易停，行程要留出机动时间。",
    "en-US":
      "Osaka to Yakushima has few flights, mostly small turboprops; you can also connect via Kagoshima by ferry or plane. Yakushima is wet all year with high humidity, and the weather differs sharply between coast and mountains: the coast is subtropical and warm, while the peaks can be very cold or snowy, so bring full waterproof gear." +
      " The main activities on the island are hiking (the Shiratani Unsuikyo gorge; the Jomon Sugi round trip is about ten hours), the coast and hot springs. The island loop road is about 100 km, and most people hire a car. Hiking into the core area has capacity management and rules; the Jomon Sugi route is a tiring same-day return, so start early, and trails are slippery in rain." +
      " In the typhoon season (summer and autumn) flights and ferries are easily suspended, so leave slack in your plans.",
    },
  },

  "hnd-ttj": {
    study: {
    "zh-CN":
      "东京飞鸟取，是从太平洋一侧飞到日本海一侧，一趟就能看出本州“背脊分两坡”的结构。起飞后脚下是关东平原和东京都市圈。" +
      "往西进入本州中部的高山——日本阿尔卑斯山脉。飞驒、木曾、赤石三条山脉并列，山脊终年积雪，正是这道高山把本州分成气候不同的两半：太平洋一侧冬季干燥少雪，日本海一侧冬季阴云、降雪很多。" +
      "越过山脊下降到日本海一侧，海岸边出现一片明显的黄色，那是鸟取沙丘——日本海的季风和海流把河流带来的沙子堆到岸上，形成一片东西长十几公里、有几十米高沙丘的海岸沙地，是日本规模最大的海岸沙丘。沙丘之外仍是绿色的农田和松林，对比强烈。" +
      "鸟取市就在沙丘附近。短短一个多小时，从太平洋岸的大平原，飞到了日本海岸的沙丘。",
    "en-US":
      "Tokyo to Tottori flies from the Pacific side to the Sea of Japan side, and in one flight shows how the spine of Honshu splits into two slopes. After take-off you are over the Kanto Plain and the Tokyo metropolitan area." +
      " Westward you enter the high mountains of central Honshu — the Japanese Alps. The Hida, Kiso and Akaishi ranges lie side by side with permanent snow on the crests, and it is this barrier that divides Honshu into two climates: the Pacific side has dry, low-snow winters, while the Sea of Japan side has cloudy winters with heavy snow." +
      " Descending to the Sea of Japan side, a distinct patch of yellow appears at the coast: the Tottori Sand Dunes — monsoon winds and currents pile river-borne sand onto the shore, forming a belt of coastal sand more than ten kilometres long with dunes tens of metres high, the largest coastal dune field in Japan. Green fields and pine woods lie right beyond the dunes, a strong contrast." +
      " The city of Tottori is next to the dunes. In a little over an hour you have flown from the Pacific-coast plain to the Sea of Japan dunes.",
    },
    // travel sources: 全四段（study/travel × 中英）: 鸟取沙丘东西十几公里、高差几十米与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "东京到鸟取约一个半小时。鸟取在日本海一侧，冬季阴冷、降雪比太平洋侧多，夏季闷热，春秋较舒适。" +
      "鸟取的核心是鸟取沙丘和旁边的沙之美术馆，可以徒步、骑骆驼或玩滑沙板；砂丘外还有白兔海岸、浦富海岸的海蚀地形。往西是米子、境港（水木茂的妖怪街）和大山方向。" +
      "沙丘上没有遮阴，夏季正午很热、要带水和防晒；起风时会有飞沙，注意护眼和相机。当地公共交通班次少，去周边多靠租车或包车。",
    "en-US":
      "Tokyo to Tottori is about an hour and a half. Tottori is on the Sea of Japan side, with grey, cold winters and more snow than the Pacific side, muggy summers, and comfortable springs and autumns." +
      " Tottori centres on the Sand Dunes and the adjacent Sand Museum, with walking, camel rides and sandboarding; beyond the dunes are the sea-eroded landforms of the Hakuto and Uradome coasts. West lie Yonago, Sakaiminato (the yokai street of Shigeru Mizuki) and Mount Daisen." +
      " There is no shade on the dunes; summer midday is very hot, so carry water and sun protection, and when the wind picks up there is blowing sand — protect your eyes and camera. Local public transport is infrequent, so a hire car or charter is usual for getting around.",
    },
  },

  "pvg-hnd": {
    // study sources: 全四段（study/travel × 中英）: 关东平原「日本最大的平原」与本库 terrain/kanto-plain 一致（国交省口径，1 级）；富士山孤立层状火山。核实 2026-09-11
    study: {
    "zh-CN":
      "上海飞东京，是从中国东部的大平原，越过东海，飞到日本本州的大平原。起飞时脚下是长江三角洲——长江最后一段淤积、加上人工围垦形成的低平原，河网最密、城镇连成一片。" +
      "离开海岸线，下面就是东海，一片开阔的浅海，看不到岸。航程大部分在海上，晴天能看到零星的岛屿和往来的货船。" +
      "接近日本时，海上先出现一座轮廓极其对称的圆锥形雪山，那是富士山——一座孤立的层状火山，从飞机上很远就能认出来。越过富士所在的丘陵，进入关东平原：日本面积最大的平原，几乎被东京都市圈完全覆盖，方格街区一直铺到山脚。飞机沿东京湾下降到羽田。一趟航班，把亚欧大陆边缘的三角洲和岛国的平原连在一起。",
    "en-US":
      "Shanghai to Tokyo flies from the great plain of eastern China, across the East China Sea, to the great plain of Honshu. On take-off you are over the Yangtze Delta — the low plain of the river's final reach, with the densest water network and continuous built-up land." +
      " Past the coast is the East China Sea, an open shallow sea with no land in sight. Most of the flight is over water, with scattered islands and cargo ships visible on a clear day." +
      " Approaching Japan, an almost perfectly symmetrical snow-capped cone appears out of the sea: Mount Fuji, an isolated stratovolcano recognisable from far off. Past the hills around Fuji you cross the Kanto Plain — the largest plain in Japan, almost entirely covered by the Tokyo metropolitan area, its grid of blocks reaching the foot of the mountains. The plane descends along Tokyo Bay to Haneda. One flight has joined a delta on the edge of the Eurasian landmass to the plain of an island country.",
    },
    travel: {
    "zh-CN":
      "上海到东京约三小时。两座城市都在东部平原上，气候接近：夏季闷热多雨，冬季东京更干冷、少雪。" +
      "东京是日本的门户和最大城市，成田机场离市区较远（快线约一小时），羽田近得多。市内地铁和 JR 线密如蛛网，一张 Suica/PASMO 刷遍全城。饮食、购物、博物馆、近郊的镰仓箱根日光都很方便。" +
      "入境日本对肉类、水果、部分药品有限制，如实申报。签证政策按国籍不同，以日本外务省最新公布为准，行前确认并留出办理时间。地震偶发，留意住处的避难指引。",
    "en-US":
      "Shanghai to Tokyo is about three hours. Both cities are on eastern plains with similar climates: hot, humid summers, while Tokyo's winters are drier and colder with little snow." +
      " Tokyo is Japan's gateway and largest city; Narita Airport is far from the centre (about an hour by express) and Haneda is much closer. The subway and JR lines form a web, and a single Suica or PASMO card covers the city. Food, shopping, museums, and day trips to Kamakura, Hakone and Nikko are all easy." +
      " Entry to Japan restricts meat, fruit and some medicines — declare honestly. Visa rules vary by nationality; check the latest from Japan's Ministry of Foreign Affairs and leave time to arrange one. Earthquakes occur occasionally; note the evacuation guidance at your accommodation.",
    },
  },

  "pek-hnd": {
    // study sources: 全四段（study/travel × 中英）: 关东平原「日本面积最大的平原」与本库一致。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞东京，是从华北平原飞过黄海，到日本关东平原。起飞时脚下是华北平原的北缘——由黄河、海河等河流冲积成的大平原，方格农田和城镇密集，地面几乎没有起伏。" +
      "往东南飞，右前方会出现一片明显隆起的丘陵，那是山东丘陵：华北平原中间的一块基岩地块，泰山等山头从平原里凸出来。" +
      "过了山东半岛就是黄海，再往东是开阔的外海，航程中段基本在水上。接近日本时进入关东平原——日本面积最大的平原，几乎被东京都市圈完全覆盖，方格街区一直铺到丘陵脚下。飞机沿东京湾下降到羽田。一趟航班，从中国的首都飞到日本的首都，中间隔着两片相连的浅海。",
    "en-US":
      "Beijing to Tokyo flies from the North China Plain across the Yellow Sea to the Kanto Plain of Japan. On take-off you are over the northern edge of the North China Plain — a lowland built by the Yellow, Hai and other rivers, dense with fields and towns, almost without relief." +
      " Flying south-east, a distinct band of higher hills appears ahead to the right: the Shandong Hills, a block of bedrock rising out of the middle of the plain, with summits such as Tai Shan standing above it." +
      " Past the Shandong Peninsula is the Yellow Sea, and then open sea, with the middle of the flight over water. Approaching Japan you reach the Kanto Plain — the largest plain in Japan, almost entirely covered by the Tokyo metropolitan area, its grid of blocks reaching the foot of the hills. The plane descends along Tokyo Bay to Haneda. One flight has gone from the capital of China to the capital of Japan, across two connected shallow seas.",
    },
    travel: {
    "zh-CN":
      "北京到东京约三个半小时。北京冬季干冷、春季多风沙，东京全年更湿润、冬季少雪。" +
      "东京是日本最大的城市和主要门户。羽田机场离市区近、地铁直达；成田稍远。市内轨道交通极发达，刷 Suica/PASMO 即可。以东京为基地可去横滨、镰仓、箱根（看富士山）、日光。" +
      "入境日本对肉类、水果、部分药品有限制，如实申报。签证按国籍不同，以日本外务省最新公布为准。夏季闷热要防暑，台风季（约7–10月）留意航班。",
    "en-US":
      "Beijing to Tokyo is about three and a half hours. Beijing has dry cold winters and dusty, windy springs; Tokyo is more humid year-round with little winter snow." +
      " Tokyo is Japan's largest city and main gateway. Haneda Airport is close to the centre with a direct metro link; Narita is farther out. Urban rail is extensive — tap in with Suica or PASMO. From Tokyo you can reach Yokohama, Kamakura, Hakone (views of Fuji) and Nikko." +
      " Entry to Japan restricts meat, fruit and some medicines — declare honestly. Visa rules vary by nationality; check the latest from Japan's Ministry of Foreign Affairs. Summer is muggy — take heat precautions — and in the typhoon season (about July to October) watch your flights.",
    },
  },

  "pvg-kix": {
    // study sources: 全四段（study/travel × 中英）: 大阪—京都—神户「日本第二大城市群」与本库 travel/osaka、terrain/osaka-plain 一致。核实 2026-09-11
    study: {
    "zh-CN":
      "上海飞大阪，是从长江三角洲越过东海，到日本关西的城市带。起飞时脚下是长江三角洲的低平原，河网密布、城镇连片。" +
      "离开海岸就是东海，一片开阔的浅海。航程大部分在水上，晴天能看到往来的船只。" +
      "接近日本时，海上出现一片布满岛屿的平静水域，那是濑户内海——本州、四国、九州之间的内海，两岸是狭窄的沿海平原和港口城市，几座跨海大桥把三块陆地连起来。" +
      "濑户内海的东端就是大阪湾，湾岸的低地是大阪平原，大阪、京都、神户连成一片。关西机场建在大阪湾南部的一座人工岛上，飞机从海上进近降落。一趟航班，从中国东部的三角洲，飞到了按人口计日本第二大的城市群。",
    "en-US":
      "Shanghai to Osaka flies from the Yangtze Delta across the East China Sea to the Kansai city belt of Japan. On take-off you are over the low plain of the Yangtze Delta, water-netted and city-covered." +
      " Past the coast is the East China Sea, an open shallow sea, with most of the flight over water and passing ships visible on a clear day." +
      " Approaching Japan, a calm island-filled stretch of water appears: the Seto Inland Sea — the sea between Honshu, Shikoku and Kyushu, with narrow coastal plains and port cities on either shore and long bridges linking the three landmasses." +
      " At its eastern end is Osaka Bay, and the lowland along the bay is the Osaka Plain, where Osaka, Kyoto and Kobe run together. Kansai Airport is built on a man-made island in the southern part of the bay, and the plane makes its approach from the sea. One flight has gone from a delta in eastern China to the second-largest urban region of Japan by population.",
    },
    travel: {
    "zh-CN":
      "上海到大阪约两个多小时。两地夏季都闷热多雨，大阪冬季较温和、少雪。" +
      "关西机场在海上人工岛，特急或普通电车约35–75分钟到大阪、京都市区。大阪是关西的中心，以吃闻名；从这里去京都、奈良、神户、姬路都在一小时内。市内地铁加 JR 环状线，刷 IC 卡通用。" +
      "入境日本对肉类、水果、部分药品有限制，如实申报。签证按国籍不同，以日本外务省最新公布为准。樱花期（4月初）和红叶期（11月）关西最挤，京都热门寺院要趁早。",
    "en-US":
      "Shanghai to Osaka is a little over two hours. Both have hot, humid summers with a lot of rain; Osaka's winters are milder with little snow." +
      " Kansai Airport is on a man-made island in the sea, about 35–75 minutes to central Osaka and Kyoto by express or local train. Osaka is the centre of Kansai and famous for its food; Kyoto, Nara, Kobe and Himeji are all within an hour. The subway and the JR Loop Line take an IC card." +
      " Entry to Japan restricts meat, fruit and some medicines — declare honestly. Visa rules vary by nationality; check the latest from Japan's Ministry of Foreign Affairs. Kansai is busiest during the cherry blossom (early April) and autumn leaves (November) — visit the popular Kyoto temples early.",
    },
  },
};
