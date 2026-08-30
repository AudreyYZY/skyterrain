/**
 * 航线解说 —— 每条航线一段连贯口播稿，专为这条飞行路线写：
 * 依次飞越哪些地貌、彼此的地理关系、关键知识点。
 *
 * 面向不了解这些地形的乘客，帮助在一次 ~3 分钟的飞行里建立整片区域的框架。
 * 依据中学 / 大学《中国地理》教材中公认的区域地理事实与航拍观察，
 * 不写会产生争议的判断，尽量少用需要逐一核实的精确数字。
 *
 * 双语，随界面语言切换。
 */

import type { Language } from "@/lib/i18n";

export const ROUTE_NARRATION: Record<
  string,
  { study: Record<Language, string>; travel: Record<Language, string> }
> = {
  "pek-urc": {
    study: {
    "zh-CN":
      "从北京往西飞乌鲁木齐，是看中国地形变化最完整的一条线。飞机离开首都机场，脚下先是华北平原——由黄河、海河冲积出来的大平原，一望无际的方格农田和密集的城镇，地面几乎看不出起伏。" +
      "很快，西边出现一道近乎笔直的山墙，那是太行山。它的东坡是断崖，直接立在平原边上；翻过山脊，地面明显抬高，进入黄土高原。往下看，黄土被流水切得千沟万壑，一道道树枝状的深沟里，是含沙量很高的黄色河流。" +
      "再往西北，地势转为平缓开阔的内蒙古高原和阿拉善的戈壁——大片灰褐色的砾石滩，人烟稀少。接着，一条狭长的通道从两山之间穿过，这就是河西走廊：南边是终年积雪的祁连山，山脚下一串绿洲城市——武威、张掖、酒泉——像绿色的珠子串在一起，绿洲之外就是荒漠。祁连山的冰雪融水，是这些绿洲的命脉，也是古丝绸之路走这条路线的原因。" +
      "越过祁连山和阿尔金山之间的地带，就进入新疆。最后映入眼帘的是天山——一条连续的东西向雪山，把新疆分成南北两半。飞机沿着天山北麓下降，那里同样是一排冲积扇绿洲，乌鲁木齐就建在其中一片上。短短几个小时，我们从湿润的东部平原，飞到了距离海洋最远的内陆山城。",
    "en-US":
      "Flying west from Beijing to Ürümqi is the most complete cross-section of China's terrain there is. Leaving the capital, you are first over the North China Plain — a vast lowland built by the silt of the Yellow and Hai rivers, an endless grid of fields and dense towns, with almost no relief on the ground." +
      "Soon a near-straight wall of mountains rises to the west: the Taihang. Its eastern face is a line of cliffs standing right at the edge of the plain. Cross the crest and the land steps up onto the Loess Plateau, where you can see the loess shredded by water into a maze of branching gullies, with silt-laden yellow rivers threading through them." +
      "Farther north-west the land opens out into the smoother Inner Mongolian Plateau and the gravel gobi of Alxa — grey-brown, thinly peopled. Then a long narrow corridor threads between two ranges: the Hexi Corridor. To its south is the snow-capped Qilian range; at its foot runs a string of oasis cities — Wuwei, Zhangye, Jiuquan — green beads on a thread, with desert on either side. Meltwater from the Qilian is the lifeline of those oases, and the reason the Silk Road ran this way." +
      "Past the gap between the Qilian and Altun ranges you enter Xinjiang. The last thing to fill the window is the Tianshan — a continuous east–west line of snow mountains that splits Xinjiang into a northern and a southern half. The plane descends along the northern foot of the Tianshan, another belt of alluvial-fan oases, and Ürümqi is built on one of them. In a few hours you have flown from the humid eastern plains to the inland city that sits farther from the sea than anywhere else on Earth.",
  },
    travel: {
    "zh-CN":
      "北京到乌鲁木齐约四个多小时，是从中国的政治中心飞到最深处的内陆。乌鲁木齐是新疆的首府，海拔约800米，气候干燥，昼夜和四季温差都很大，夏天热、冬天很冷。这里是多民族聚居的城市，饮食以面食、牛羊肉、抓饭、烤包子和各种瓜果为主；新疆各地通用北京时间，但生活节奏顺应日照，办事和用餐都比内地晚约两小时。" +
      "乌鲁木齐更多是进入新疆的门户和中转站：往北去喀纳斯、阿勒泰的山地湖泊，往西去伊犁的草原，往南穿过天山到吐鲁番的火焰山和坎儿井、再到南疆的绿洲。新疆地域辽阔，城市之间动辄几百上千公里，行程要按天规划，跨区域多坐飞机或长途火车。" +
      "部分靠近边境的地区对外国人有额外的登记或边境通行证要求，出发前向组织方或住宿确认最新规定并留出办证时间。最舒服的季节大致是初夏到中秋（约5月到10月上旬），也是瓜果最好的时候。",
    "en-US":
      "Beijing to Ürümqi is a little over four hours, from the political centre of China to its deepest interior. Ürümqi is the capital of Xinjiang, at about 800 m, with a dry climate and large swings between day and night and between seasons — hot summers, very cold winters. It is a city of many ethnic groups, and the food centres on wheat noodles, beef and mutton, pilaf, baked buns and a wide range of melons and fruit. Xinjiang runs on Beijing time, but daily life follows the daylight — business and meals happen about two hours later than in eastern China." +
      "Ürümqi is mainly a gateway and transfer point for the rest of Xinjiang: north to the mountain lakes of Kanas and Altay, west to the grasslands of the Ili valley, south across the Tianshan to the Flaming Mountains and karez of Turpan and on to the southern oases. Xinjiang is vast — cities are often hundreds or over a thousand kilometres apart, so plan in days and cover the long distances by air or long-distance train." +
      "Some areas near the borders have extra registration or border-permit requirements for foreign visitors; confirm the current rules with your organiser or accommodation before you go and leave time to arrange them. The most comfortable season is roughly early summer to mid-autumn (about May to early October), which is also when the fruit is best.",
    },
  },

  "ctu-lxa": {
    study: {
    "zh-CN":
      "成都飞拉萨，是一趟从盆地爬上世界屋脊的旅程。起飞时，脚下是四川盆地西部的成都平原——都江堰两千多年来引岷江水灌溉出来的一片沃野，田块整齐，常年被云雾笼罩，很少能看清太阳。" +
      "飞机迅速爬升，翻过盆地西缘的龙门山，地形骤然变得险峻。进入横断山脉——这是中国唯一一片南北走向的高大山群，一条雪山、一条深谷，再一条雪山，像搓衣板一样排列。金沙江、澜沧江、怒江在这里被挤在一起并行南流。晴天时，右前方可能看到一座特别高、特别陡的独峰，那是贡嘎山，横断山脉的最高峰。" +
      "越过横断山脉，地面不再是尖峰深谷，而是变得相对平坦、开阔、色调偏黄褐——飞机已经飞到了青藏高原面上。这里平均海拔在四千米以上，是地球上最高最大的高原。窗外是大片起伏和缓的高地，点缀着深蓝色的湖泊和远处的雪山，空气稀薄，能见度极高。" +
      "最后，飞机沿着一条宽阔的河谷下降，这就是雅鲁藏布江。拉萨就在它的一条支流——拉萨河的谷地里。短短两小时，我们从四川盆地湿润的农田，直接飞上了高寒的青藏高原。",
    "en-US":
      "Chengdu to Lhasa is a journey that climbs from a basin onto the roof of the world. On take-off you are over the Chengdu Plain in the western Sichuan Basin — farmland that the Dujiangyan works have irrigated from the Min River for more than two thousand years, neat fields under near-constant cloud, so that the sun is rarely clearly seen." +
      "The plane climbs fast, over the Longmen Mountains at the basin's western rim, and the land suddenly turns rugged. This is the Hengduan Mountains — the only belt of high ranges in China that runs north–south: a snow range, then a deep gorge, then another snow range, lined up like a washboard, with the Jinsha, Lancang and Nu rivers squeezed together in parallel southward courses. On a clear day a especially high, steep isolated peak may show ahead to the right — Gongga Shan, the highest summit of the Hengduan system." +
      "Beyond the Hengduan the ground stops being spiky peaks and deep gorges and becomes comparatively flat, open and yellow-brown: the plane is now over the surface of the Tibetan Plateau, which averages above 4,000 m and is the highest and largest plateau on Earth. The window shows broad, gently rolling high country, dotted with deep-blue lakes and distant snow ranges, the air thin and the visibility extreme." +
      "Finally the plane descends along a broad river valley — the Yarlung Tsangpo. Lhasa sits in the valley of one of its tributaries, the Lhasa River. In about two hours you have flown straight from the humid fields of the Sichuan Basin up onto the cold, high Tibetan Plateau.",
  },
    travel: {
    "zh-CN":
      "成都到拉萨约两个多小时，落地就是海拔约3650米的拉萨——这是这趟行程最需要认真对待的一点。多数人到高原后会有不同程度的高原反应（头痛、气短、睡不好），到达头一两天要放慢节奏、少剧烈活动、多喝水、避免饮酒，必要时提前向医生咨询备药；有严重心肺疾病的人应先做医学评估。" +
      "拉萨气候干燥、日照极强，一年中大部分时间白天温暖、夜里冷，紫外线全年都要认真防护。城市不大，核心是大昭寺和八廓街一带、布达拉宫、罗布林卡；参观寺院注意着装和礼仪、按顺时针方向绕行。" +
      "重要提示：外国游客进入西藏，除中国签证外还需办理西藏旅行许可，并且通常必须随有资质的旅行社、按报备行程结伴出行，不接受散客自由行——务必提前通过旅行社安排。合适的季节大致是4—5月和9—10月；冬季寒冷但天空更清澈、游客也少。",
    "en-US":
      "Chengdu to Lhasa is a little over two hours, landing you straight at about 3,650 m — the one part of this trip to take seriously. Most people feel some degree of altitude sickness on arrival (headache, breathlessness, poor sleep); for the first day or two, slow down, avoid hard exertion, drink plenty of water, skip alcohol, and consider asking a doctor about medication beforehand. Anyone with a serious heart or lung condition should get medical advice on whether to go at all." +
      "Lhasa is dry with very strong sun — daytime is mild for much of the year and nights are cold, and UV needs real protection year-round. The city is small; the core is the Jokhang and the Barkhor, the Potala Palace and the Norbulingka. Dress modestly at monasteries, follow the etiquette, and walk clockwise." +
      "Important: to enter Tibet, foreign visitors need a Tibet Travel Permit in addition to their Chinese visa, and normally must travel with a licensed tour operator on a pre-declared itinerary in a group — independent travel is not permitted, so arrange this through an agency well in advance. The better windows are roughly April–May and September–October; winter is cold but the skies are clearer and there are fewer people.",
    },
  },

  "can-lxa": {
    study: {
    "zh-CN":
      "广州飞拉萨，跨越的是中国从最湿热到最高寒的完整梯度。飞机从珠江三角洲起飞——这是珠江在入海口冲积、加上人工围垦形成的平原，水网密布、城市连片，是中国最发达的地区之一。" +
      "往西北飞，先遇到南岭。它不像北方的大山那样高大连续，而是一列低矮、破碎的丘陵山地，被一道道宽阔的谷地隔开。南岭是长江水系和珠江水系的分水岭，翻过它，河流就开始流向长江。" +
      "再往前，地面整体抬高，进入云贵高原。这里最典型的是喀斯特地貌——石灰岩被水溶蚀出无数圆锥形、馒头形的小山头，山间是封闭的小盆地，当地叫“坝子”，村镇和农田都挤在坝子里。地表的河流常常钻进地下又冒出来。" +
      "云贵高原以西，地形再次变得险峻，进入横断山脉南段——南北向排列的雪山和深谷。越过它，就上了青藏高原东南缘。这一带因为有印度洋的水汽顺着河谷灌进来，是高原上最湿润、最绿的角落，森林一直长到很高的地方。飞机最后沿雅鲁藏布江水系下降到拉萨。一趟航班，走完了从亚热带季风区到高寒高原的全部气候带。",
    "en-US":
      "Guangzhou to Lhasa crosses China's full gradient from its most hot and humid to its coldest and highest. The plane leaves the Pearl River Delta — a plain built by the river's silt at its mouth plus centuries of reclamation, water-netted and city-covered, one of the most developed regions in China." +
      "Flying north-west it first meets the Nanling. Unlike the big ranges of the north, this is a low, broken belt of hills separated by wide valleys. The Nanling is the drainage divide between the Yangtze and the Pearl river systems; cross it and rivers begin to flow toward the Yangtze." +
      "Beyond it the land rises as a whole onto the Yunnan–Guizhou Plateau. Its signature is karst — limestone dissolved by water into countless cone- and dome-shaped hills, with enclosed pockets of flat land between them, called bazi, where the towns and fields crowd in. Surface rivers here often dive underground and re-emerge." +
      "West of the plateau the terrain turns rugged again in the southern Hengduan Mountains — north–south snow ranges and deep gorges. Past them you are on the south-eastern edge of the Tibetan Plateau. Because Indian Ocean moisture travels up the river valleys here, this is the wettest, greenest corner of the plateau, with forest reaching high up the slopes. The plane descends along the Yarlung Tsangpo system into Lhasa. One flight has passed through every climate zone from the subtropical monsoon to the cold high plateau.",
  },
    travel: {
    "zh-CN":
      "广州到拉萨要飞约四个半小时，是从接近海平面的珠三角一路爬到海拔约3650米的拉萨，落差比大多数航线都大，高原反应更要重视：头一两天务必放慢节奏、多休息、多喝水、不饮酒，有心肺基础病的人先咨询医生。" +
      "和成都航线一样，外国游客进藏除中国签证外还需办西藏旅行许可，并通常须随有资质的旅行社结伴、按报备行程出行，出发前通过旅行社安排好。广州是华南的航空枢纽，不少来自东南亚的旅客在这里中转进藏。" +
      "拉萨城市不大，核心是布达拉宫、大昭寺和八廓街；气候干燥、日照强、昼夜温差大，全年都要防晒并备保暖衣物。合适的季节大致是4—5月和9—10月；雨季（约6—8月）部分道路易受泥石流影响，但高原东南缘的林芝一带这时最绿。",
    "en-US":
      "Guangzhou to Lhasa is about four and a half hours, climbing from the near-sea-level Pearl River Delta all the way to Lhasa at about 3,650 m — a bigger jump than on most routes, so treat altitude sickness with extra care: for the first day or two, slow right down, rest, drink plenty of water and avoid alcohol, and get medical advice first if you have a heart or lung condition." +
      "As on the Chengdu route, foreign visitors need a Tibet Travel Permit on top of their Chinese visa and normally must travel with a licensed operator in a group on a declared itinerary — arrange it through an agency before you leave. Guangzhou is southern China's aviation hub, and many travellers from Southeast Asia connect here for Tibet." +
      "Lhasa is a small city; its core is the Potala Palace, the Jokhang and the Barkhor. It is dry, with strong sun and a wide day-night temperature range, so bring sun protection and warm layers year-round. The better seasons are roughly April–May and September–October; the rainy season (about June–August) can bring landslides onto roads, though the Nyingchi area on the south-eastern edge of the plateau is at its greenest then.",
    },
  },

  "urc-khg": {
    study: {
    "zh-CN":
      "乌鲁木齐飞喀什，是沿着塔里木盆地的边缘，从北疆飞到南疆最西端。起飞后，脚下是天山北麓的绿洲带——乌鲁木齐、昌吉、石河子，一片片靠天山雪水灌溉的农田和城镇，绿洲之外是古尔班通古特沙漠。" +
      "飞机向西南飞，翻越天山西段。天山是世界上距离海洋最远的大山系之一，山顶终年积雪、冰川广布。翻过山脊，眼前豁然是一个巨大的黄色椭圆——塔里木盆地，四周被天山、昆仑山、帕米尔高原围住，中间是中国最大的沙漠塔克拉玛干。晴天时能看到一道道规则排列的新月形沙垄，像凝固的波浪。" +
      "航线一直沿着盆地的西北缘走。盆地里所有的城市和农田，都必须建在山口冲积扇的边缘——那里有从山上流下来的水，离开这条“生命线”就是不毛之地。塔里木河在盆地北缘绕着沙漠流。" +
      "接近喀什时，西边天际线上出现极高的雪峰，那是帕米尔高原和昆仑山、天山交汇的“山结”。喀什就建在群山脚下的一片大绿洲上，自古是丝绸之路南、中两道的交汇点。",
    "en-US":
      "Ürümqi to Kashgar runs along the rim of the Tarim Basin, from northern Xinjiang to its far south-western corner. After take-off you are over the oasis belt on the northern foot of the Tianshan — Ürümqi, Changji, Shihezi — patches of farmland and towns watered by Tianshan snowmelt, with the Gurbantunggut Desert beyond." +
      "The plane flies south-west, crossing the western Tianshan. This is one of the mountain systems farthest from any ocean on Earth, its summits under permanent snow and widespread glaciers. Cross the crest and a huge yellow oval opens up ahead — the Tarim Basin, walled in by the Tianshan, Kunlun and Pamirs, with China's largest desert, the Taklamakan, in its centre. On a clear day you can see regular rows of crescent dunes, like frozen waves." +
      "The route follows the basin's north-western rim the whole way. Every city and field in the basin must sit at the edge of a piedmont alluvial fan, where water comes down from the mountains; off that lifeline it is barren. The Tarim River skirts the desert along the northern edge." +
      "Approaching Kashgar, very high snow peaks appear on the western skyline — the \"knot\" where the Pamirs meet the Kunlun and the Tianshan. Kashgar is built on a large oasis at the foot of these mountains, and has been the meeting point of the southern and middle Silk Roads since ancient times.",
  },
    travel: {
    "zh-CN":
      "乌鲁木齐到喀什约一个半小时，是从北疆飞到南疆最西端。喀什海拔约1300米，是新疆历史最悠久的城市之一，老城的土坯民居、巴扎和清真寺保存较完整，维吾尔文化气息浓。逛老城、赶巴扎、尝烤包子和馕、看手工艺作坊是这里的主要体验。" +
      "往东是莎车、和田一线的南疆绿洲，往西、往南是通往帕米尔高原（塔什库尔干、慕士塔格峰）和红其拉甫口岸的公路。南疆夏季白天很热、日照强，昼夜温差大，春秋相对舒服，瓜果在夏末最好。" +
      "这一带靠近边境：外国人在部分区域（尤其去帕米尔、口岸方向）需要办边境通行证，个别路段可能临时管制，务必提前通过当地旅行社或住宿确认最新规定并留出办证时间。作息同样比内地晚约两小时。",
    "en-US":
      "Ürümqi to Kashgar is about an hour and a half, from northern Xinjiang to its far south-western corner. Kashgar, at about 1,300 m, is one of the oldest cities in Xinjiang; its old town of mud-brick houses, bazaars and mosques is relatively intact and the Uyghur cultural presence is strong. Wandering the old town, the bazaar, sampling baked buns and naan, and visiting craft workshops are the main things to do." +
      "East lie the southern oases toward Yarkand and Hotan; west and south are the roads up to the Pamirs (Tashkurgan, Muztagh Ata) and the Khunjerab pass. Southern Xinjiang summers are hot by day with strong sun and a wide day-night swing; spring and autumn are more comfortable, and the fruit is best in late summer." +
      "This is border country: in some areas — especially toward the Pamirs and the passes — foreign visitors need a border permit, and individual stretches of road can be temporarily closed, so confirm the current rules through a local agency or your accommodation in advance and leave time to arrange permits. Daily life again runs about two hours later than in eastern China.",
    },
  },

  "sha-kmg": {
    study: {
    "zh-CN":
      "从上海往西南飞昆明，是从长江入海口的大平原，一路飞到西南的高原。飞机从虹桥起飞，脚下是长江三角洲——长江长期淤积、加上人工围垦形成的低平原，河网纵横、城镇连片，是中国人口和产业最密集的地区之一。" +
      "往西不久，地面出现成片起伏的低矮丘陵，那是江南丘陵：红色砂岩和花岗岩的小山与小盆地相间，茶园、竹林和稻田顺着坡地铺开。中途经过鄱阳湖，它是长江中游的一个通江湖泊，丰水期是一大片明水，枯水期退成蜿蜒河道和大片草洲，季节反差很大。" +
      "再往西，山势渐高，进入雪峰山一带——它是江南丘陵和云贵高原之间的过渡山地。越过雪峰山，地面整体抬升到一两千米，进入云贵高原。这里广泛分布石灰岩，被水溶蚀成一个个圆锥形、馒头形的小山，山间是封闭的小盆地，当地叫坝子，村镇和农田都集中在坝子里，地表河常常潜入地下。" +
      "昆明就坐落在滇中的一片高原湖盆里，旁边是滇池。一趟航班，从接近海平面的三角洲，飞到了海拔约一千九百米的高原城市。",
    "en-US":
      "Flying south-west from Shanghai to Kunming takes you from the plain at the mouth of the Yangtze all the way up onto the plateau country of the south-west. Leaving Hongqiao, you are over the Yangtze Delta — a low plain built by the river's silt and centuries of reclamation, water-netted and city-covered, one of the most densely settled regions in China." +
      "Soon a belt of low rolling hills appears to the west: the Jiangnan Hills, small summits of red sandstone and granite alternating with little basins, with tea gardens, bamboo and rice terraces following the slopes. Midway the route passes Poyang Lake, a lake connected to the Yangtze whose open water spreads wide in the flood season and shrinks to winding channels and broad meadows in the dry season." +
      "Farther west the land rises into the Xuefeng Mountains, the transitional range between the Jiangnan Hills and the Yunnan–Guizhou Plateau. Beyond them the ground steps up to one or two thousand metres onto the plateau itself, where limestone has been dissolved into countless cone- and dome-shaped hills with enclosed pockets of flat land between them, called bazi, where the towns and fields gather; surface rivers here often sink underground." +
      "Kunming sits in a plateau lake basin in central Yunnan, beside Lake Dian. In one flight you have gone from a near-sea-level delta to a plateau city at about 1,900 m.",
    },
    travel: {
    "zh-CN":
      "上海到昆明约三个多小时。昆明海拔约一千九百米，四季温差小、全年气候温和，因此叫“春城”，但日照强、紫外线高，昼夜温差比东部大，早晚要加件外套。多数人对这个海拔适应良好。" +
      "昆明是云南旅游的枢纽：往西北去大理、丽江、香格里拉，往南去西双版纳，往东去石林和贵州方向。城里可看滇池、翠湖和老街区，饮食以米线、菌子和口味偏酸辣的滇菜为主。" +
      "云南多山，城市间车程往往较长，雨季（约六到十月）山区道路易受塌方、泥石流影响，出行留出机动时间。菌子季野生菌一定要在正规餐厅食用、彻底做熟。",
    "en-US":
      "Shanghai to Kunming is a little over three hours. Kunming sits at about 1,900 m with mild weather year-round and small seasonal swings — hence its nickname, the \"Spring City\" — but the sun is strong, UV is high, and the day-to-night range is wider than in eastern China, so bring a layer for mornings and evenings. Most people adjust to this altitude easily." +
      "Kunming is the hub for travel in Yunnan: north-west to Dali, Lijiang and Shangri-La, south to Xishuangbanna, east to the Stone Forest and on toward Guizhou. In the city itself there is Lake Dian, Green Lake and the old quarters, and the food centres on rice noodles, wild mushrooms and the sour-and-spicy Yunnan style." +
      "Yunnan is mountainous and drives between towns are often long; in the rainy season (about June to October) mountain roads are prone to landslides and mudflows, so leave slack in your plans. In mushroom season only eat wild mushrooms at established restaurants and thoroughly cooked.",
    },
  },

  "ctu-sha": {
    study: {
    "zh-CN":
      "成都飞上海，几乎是沿着长江自西向东飞完它的中下游。起飞时脚下是四川盆地——四周被山环抱的红层盆地，底部是密集的方格农田和城镇，常年云雾多、日照少。" +
      "飞机向东，很快进入长江三峡一带：长江在这里横切巫山等一系列山岭，切出瞿塘峡、巫峡、西陵峡三段深谷，两岸是陡直的石灰岩崖壁，三峡水库蓄水后江面变宽。" +
      "出了三峡，地形豁然开阔，进入长江中下游平原。这是长江及其支流冲积、并接纳众多湖泊的低平原，江湖相连，圩田、水塘和城镇交错，看不出什么起伏。沿途会经过洞庭湖、鄱阳湖这样的通江湖泊。" +
      "接近上海时，进入长江三角洲——长江最后一段淤积形成的低平原，河网最密、城镇连成一片。飞机在这里下降，长江在前方入海。一趟航班，把长江从盆地到入海口的下半程连了起来。",
    "en-US":
      "Chengdu to Shanghai follows the Yangtze almost the whole way, west to east, down its middle and lower course. On take-off you are over the Sichuan Basin — a red-bed basin ringed by mountains, its floor a dense grid of fields and towns, often cloudy with little sun." +
      "Flying east, the plane soon reaches the Yangtze Gorges, where the river cuts straight across the Wu Shan and neighbouring ridges in three deep sections — the Qutang, Wu and Xiling gorges — between steep limestone walls; since the Three Gorges reservoir filled, the channel here is wider." +
      "Past the gorges the land opens out into the Middle–Lower Yangtze Plain, a low plain built by the river and its tributaries and threaded with lakes, where diked fields, ponds and towns interlock with almost no relief. The route passes lakes linked to the Yangtze such as Dongting and Poyang." +
      "Approaching Shanghai you cross the Yangtze Delta, the low plain of the river's final reach, with the densest water network and continuous built-up land. The plane descends here, with the Yangtze entering the sea ahead. One flight has joined up the lower half of the river, from basin to river mouth.",
    },
    travel: {
    "zh-CN":
      "成都到上海约两个半小时，是从内陆盆地飞到长江口的海港城市。上海地势低平，属亚热带季风气候：夏季闷热多雨，冬季湿冷，春秋较短。" +
      "上海是华东的交通枢纽，地铁网密集，外滩、老城厢、法租界的梧桐街区和黄浦江两岸是主要看点。饮食偏甜鲜，本帮菜、点心和江浙一带的菜系都很方便吃到。" +
      "这里是去江南水乡（苏州、杭州、周庄、乌镇一带）和沿海的门户，高铁一两小时可达。梅雨季（约六月）和夏秋之交的台风期多雨，安排行程时留意天气预报。",
    "en-US":
      "Chengdu to Shanghai is about two and a half hours, from an inland basin to a port city at the mouth of the Yangtze. Shanghai is low-lying and flat, with a subtropical monsoon climate: hot, humid summers with a lot of rain, damp cold winters, and short springs and autumns." +
      "Shanghai is the transport hub of eastern China, with a dense metro network. The Bund, the old town, the plane-tree streets of the former French Concession and both banks of the Huangpu are the main things to see. The local food leans sweet and savoury, and Shanghainese dishes, dim sum and the wider Jiangnan cuisines are all easy to find." +
      "It is the gateway to the Jiangnan water towns (around Suzhou, Hangzhou, Zhouzhuang and Wuzhen) and the coast, one or two hours away by high-speed rail. The plum-rain season (around June) and the typhoon period in late summer and autumn are wet, so check the forecast when planning your days.",
    },
  },

  "can-pek": {
    study: {
    "zh-CN":
      "广州飞北京，是一条把中国东部从南到北串起来的线。飞机从珠江三角洲起飞——珠江在入海口淤积、加上人工围垦形成的平原，水网密布、城市连片。" +
      "往北不久是南岭。它不像北方大山那样连续高大，而是一列低矮、破碎的东西向丘陵山地，被一道道宽谷隔开，历史上是岭南和内地之间的天然门槛。南岭大致是珠江水系和长江水系的分水岭，翻过它，河流开始流向长江。" +
      "再往北，地面转为长江中下游平原：江河湖泊相连的低平原，圩田和城镇交错。接着出现一列不高但明显的山地，那是大别山，横在武汉和中原之间，也是淮河和长江的分水岭。" +
      "越过大别山，进入华北平原——由黄河、淮河、海河冲积出来的大平原，一望无际的方格农田和密集城镇，地面几乎看不出起伏。飞机在平原北缘、燕山脚下的北京降落。",
    "en-US":
      "Guangzhou to Beijing strings together the eastern half of China from south to north. The plane leaves the Pearl River Delta — a plain built by the river's silt at its mouth plus reclamation, water-netted and city-covered." +
      "Just to the north is the Nanling. Unlike the big continuous ranges of the north, this is a low, broken east–west belt of hills separated by wide valleys, historically the natural threshold between the far south and the interior. The Nanling is roughly the drainage divide between the Pearl and Yangtze systems; cross it and rivers flow toward the Yangtze." +
      "Farther north the ground becomes the Middle–Lower Yangtze Plain, a low plain of interconnected rivers and lakes where diked fields and towns interlock. Then a modest but distinct range appears — the Dabie Mountains, set between Wuhan and the Central Plain, and the divide between the Huai and the Yangtze." +
      "Beyond the Dabie you are over the North China Plain, built by the silt of the Yellow, Huai and Hai rivers — an endless grid of fields and dense towns with almost no relief. The plane lands at Beijing on the northern edge of the plain, at the foot of the Yan Mountains.",
    },
    travel: {
    "zh-CN":
      "广州到北京约三个小时，是从湿热的岭南飞到干燥的华北。北京地处华北平原北缘，属温带季风气候，四季分明：春秋短、多风，夏季热而多雷雨，冬季干冷。" +
      "北京是首都和文化中心，故宫、天坛、颐和园、长城和胡同街区是主要看点，地铁网发达。饮食以面食和北方菜为主，涮羊肉、烤鸭、炸酱面较有代表性。" +
      "春季偶有沙尘或大风天，夏季午后雷阵雨较多，冬季注意保暖。热门景点和长城旺季人多，很多需要提前实名预约，出发前查清当日规定。",
    "en-US":
      "Guangzhou to Beijing is about three hours, from the hot, humid far south to the dry north. Beijing lies on the northern edge of the North China Plain, with a temperate monsoon climate and four clear seasons: short, windy springs and autumns, hot summers with thunderstorms, and dry cold winters." +
      "Beijing is the capital and a cultural centre. The Forbidden City, the Temple of Heaven, the Summer Palace, the Great Wall and the hutong quarters are the main sights, and the metro network is extensive. The food is wheat-based northern cooking — hotpot, roast duck and zhajiang noodles are typical." +
      "Spring can bring dust or high winds, summer afternoons often bring thunderstorms, and winters are cold. Popular sites and the Great Wall are crowded in high season and many now require advance ID-based booking, so check the day's rules before you go.",
    },
  },

  "xiy-urc": {
    study: {
    "zh-CN":
      "西安飞乌鲁木齐，走的是河西走廊这条古老通道，从关中一直到天山脚下。起飞时脚下是关中平原——渭河冲积出来的一条东西向平原，两侧是黄土台塬，农田和城镇密集，是黄河中游的老农业区。" +
      "往西北，地形收窄，先掠过六盘山这道南北向的山梁，然后进入河西走廊：南边是终年积雪的祁连山，北边是龙首山、合黎山和更远的沙漠戈壁，中间夹着一条几百公里长的狭长平地。祁连山的冰雪融水在山前汇成一串绿洲——武威、金昌、张掖、酒泉——像绿色的珠子串在走廊里，绿洲之外就是荒漠。这条水带是古丝绸之路走这里的原因。" +
      "过了走廊西端，越过祁连山和阿尔金山之间的缺口进入新疆，正前方是天山——一条连续的东西向雪山，把新疆分成南北两半。飞机沿天山北麓下降，那里同样是一排冲积扇绿洲，乌鲁木齐就建在其中一片上。",
    "en-US":
      "Xi'an to Ürümqi runs along the Hexi Corridor, the old through-route, from the Guanzhong plain all the way to the foot of the Tianshan. On take-off you are over the Guanzhong Plain — an east–west plain built by the Wei River, edged by loess terraces, dense with fields and towns, one of the old farming regions of the middle Yellow River." +
      "To the north-west the land narrows. The route clips the north–south ridge of the Liupan Mountains, then enters the Hexi Corridor: the snow-capped Qilian range to the south, lower ranges and desert gobi to the north, and a strip of flat land a few hundred kilometres long between them. Meltwater from the Qilian gathers into a string of oases at the mountain foot — Wuwei, Jinchang, Zhangye, Jiuquan — green beads along the corridor, with desert beyond. That belt of water is why the Silk Road ran this way." +
      "Past the western end of the corridor, through the gap between the Qilian and Altun ranges, you enter Xinjiang, with the Tianshan filling the view ahead — a continuous east–west line of snow mountains that splits Xinjiang into a northern and a southern half. The plane descends along the northern foot of the Tianshan, another belt of alluvial-fan oases, with Ürümqi built on one of them.",
    },
    travel: {
    "zh-CN":
      "西安到乌鲁木齐约三个半小时。乌鲁木齐是新疆的首府，海拔约八百米，气候干燥，昼夜和四季温差都大，夏热冬冷。新疆各地通用北京时间，但生活节奏顺应日照，办事和用餐都比内地晚约两小时。" +
      "乌鲁木齐主要是进入新疆的门户：往北去喀纳斯、阿勒泰，往西去伊犁草原，往南穿天山到吐鲁番、再到南疆绿洲。新疆地域辽阔，城市间动辄几百上千公里，行程按天规划，多坐飞机或长途火车。" +
      "部分靠近边境的地区对外国人有额外登记或边境通行证要求，出发前向组织方或住宿确认最新规定并留出办证时间。最舒服的季节大致是初夏到中秋。",
    "en-US":
      "Xi'an to Ürümqi is about three and a half hours. Ürümqi is the capital of Xinjiang, at about 800 m, with a dry climate and large swings between day and night and between seasons — hot summers, cold winters. Xinjiang runs on Beijing time, but daily life follows the daylight, so business and meals happen about two hours later than in eastern China." +
      "Ürümqi is mainly a gateway to the rest of Xinjiang: north to Kanas and Altay, west to the Ili grasslands, south across the Tianshan to Turpan and on to the southern oases. Xinjiang is vast — cities are often hundreds or over a thousand kilometres apart, so plan in days and travel by air or long-distance train." +
      "Some areas near the borders have extra registration or border-permit requirements for foreign visitors; confirm the current rules with your organiser or accommodation before you go and leave time to arrange them. The most comfortable season is roughly early summer to mid-autumn.",
    },
  },

  "xnn-lxa": {
    study: {
    "zh-CN":
      "西宁飞拉萨，是从青藏高原的东北角，一路飞到高原腹地。起飞时西宁在湟水谷地里，海拔已经两千多米。往西不远是青海湖——中国面积最大的咸水湖，四周是草原和沙丘，湖面是很深的蓝色。" +
      "过了青海湖，地面整体抬高、变得开阔平坦，这就是青藏高原面。飞机大致沿着昆仑山的走向往西南飞：昆仑山是青藏高原的北界，一道东西向的雪山。再往前是可可西里和藏北高原，几乎没有人烟，地面是一片浅黄褐色的高地，散布着大大小小的湖泊，很多是没有出口的咸水湖。" +
      "接近拉萨时，右侧出现一列更高、更陡的雪山，那是念青唐古拉山，它旁边就是纳木错——一个高原大湖。飞机翻过念青唐古拉，沿拉萨河谷下降到拉萨。全程几乎都在四千米以上的高原上飞，落地就是海拔约三千六百米的拉萨。",
    "en-US":
      "Xining to Lhasa flies from the north-eastern corner of the Tibetan Plateau into its interior. On take-off Xining lies in the Huangshui valley, already above 2,000 m. A short way west is Qinghai Lake, the largest saline lake in China, ringed by grassland and dunes, its water a deep blue." +
      "Past the lake the land rises and opens out into the plateau surface itself. The route runs south-west roughly along the line of the Kunlun Mountains, the east–west snow range that forms the plateau's northern edge. Beyond lie the Hoh Xil and the northern Tibetan plateau, almost uninhabited — pale yellow-brown high country scattered with lakes, many of them closed saline basins with no outlet." +
      "Approaching Lhasa, a higher, steeper snow range appears to the right: the Nyainqêntanglha, and beside it Namtso, a large plateau lake. The plane crosses the range and descends along the Lhasa River valley. Almost the whole flight is above 4,000 m, and it lands at Lhasa at about 3,600 m.",
    },
    travel: {
    "zh-CN":
      "西宁到拉萨约两个半小时。西宁本身海拔两千二百米左右，常被当作进藏前适应海拔的一站。拉萨海拔约三千六百米，落地头一两天要放慢节奏、少剧烈活动、多喝水、避免饮酒，有严重心肺疾病的人应先做医学评估。" +
      "重要提示：外国游客进入西藏，除中国签证外还需办理西藏旅行许可，并且通常必须随有资质的旅行社、按报备行程结伴出行，不接受散客自由行，务必提前通过旅行社安排。" +
      "高原日照极强、气候干燥，全年都要认真防晒并备保暖衣物。合适的季节大致是四五月和九十月；沿途的青海湖在夏季环湖草原最绿。",
    "en-US":
      "Xining to Lhasa is about two and a half hours. Xining itself sits at around 2,200 m and is often used as a stop to acclimatise before Tibet. Lhasa is at about 3,600 m; for the first day or two slow down, avoid hard exertion, drink plenty of water and skip alcohol, and anyone with a serious heart or lung condition should seek medical advice first." +
      "Important: to enter Tibet, foreign visitors need a Tibet Travel Permit in addition to their Chinese visa, and normally must travel with a licensed tour operator on a pre-declared itinerary in a group — independent travel is not permitted, so arrange this through an agency well in advance." +
      "The plateau sun is very strong and the air dry, so sun protection and warm layers are needed year-round. The better windows are roughly April–May and September–October; Qinghai Lake, on the way, has its greenest lakeshore grassland in summer.",
    },
  },

  "ckg-lxa": {
    study: {
    "zh-CN":
      "重庆飞拉萨，从长江边的山城，一路爬上青藏高原的东南缘。起飞时脚下是四川盆地——四周被山环抱的红层丘陵盆地，云雾多，重庆的房子顺着山坡和江岸层层叠叠。" +
      "飞机向西爬升，很快进入横断山脉：这是中国唯一一片南北走向的高大山群，一条雪山、一条深谷，再一条雪山，像搓衣板一样排列，金沙江、澜沧江、怒江在这里被挤在一起并行南流。" +
      "越过横断山脉，进入藏东南。这一带因为有印度洋的水汽顺着河谷灌进来，是青藏高原上最湿润、最绿的角落，森林一直长到很高的地方。雅鲁藏布江在这里绕着南迦巴瓦峰拐了一个大弯，切出很深的峡谷。飞机再往西，地面转为相对平坦开阔的高原面，沿拉萨河谷下降到拉萨。",
    "en-US":
      "Chongqing to Lhasa climbs from a river city among hills up onto the south-eastern edge of the Tibetan Plateau. On take-off you are over the Sichuan Basin — a red-bed basin of hills ringed by mountains, often cloudy, with Chongqing's buildings stacked up the slopes and river banks." +
      "Climbing west, the plane soon enters the Hengduan Mountains, the only belt of high ranges in China that runs north–south: a snow range, then a deep gorge, then another, lined up like a washboard, with the Jinsha, Lancang and Nu rivers squeezed together in parallel southward courses." +
      "Beyond the Hengduan is south-eastern Tibet. Because Indian Ocean moisture travels up the river valleys here, this is the wettest, greenest corner of the plateau, with forest reaching high up the slopes. The Yarlung Tsangpo makes a great bend around Namcha Barwa here, cutting a very deep gorge. Farther west the ground becomes the comparatively flat, open plateau surface, and the plane descends along the Lhasa River valley into Lhasa.",
    },
    travel: {
    "zh-CN":
      "重庆到拉萨约两个多小时，落地就是海拔约三千六百米的拉萨，落差很大，高原反应要认真对待：头一两天放慢节奏、多休息、多喝水、不饮酒，有心肺基础病的人先咨询医生。" +
      "重要提示：外国游客进藏，除中国签证外还需办理西藏旅行许可，并通常须随有资质的旅行社结伴、按报备行程出行，出发前通过旅行社安排好。" +
      "拉萨气候干燥、日照强、昼夜温差大，全年防晒并备保暖衣物。合适的季节大致是四五月和九十月；雨季（约六到八月）藏东南的林芝一带最绿，但山区道路易受泥石流影响。",
    "en-US":
      "Chongqing to Lhasa is a little over two hours, landing you at about 3,600 m — a big jump, so take altitude sickness seriously: for the first day or two slow down, rest, drink plenty of water and avoid alcohol, and get medical advice first if you have a heart or lung condition." +
      "Important: to enter Tibet, foreign visitors need a Tibet Travel Permit in addition to their Chinese visa and normally must travel with a licensed operator in a group on a declared itinerary — arrange it through an agency before you leave." +
      "Lhasa is dry, with strong sun and a wide day-to-night temperature range, so bring sun protection and warm layers year-round. The better windows are roughly April–May and September–October; in the rainy season (about June to August) the Nyingchi area of south-eastern Tibet is at its greenest, but mountain roads are prone to mudflows.",
    },
  },

  "pek-inc": {
    study: {
    "zh-CN":
      "北京飞银川，是从华北平原翻过太行山，进入黄土高原和西北的干旱区。飞机从首都机场起飞，脚下先是华北平原北缘——由多条河流冲积成的大平原，方格农田和城镇密集，地面几乎没有起伏。" +
      "很快，西边出现一道近乎笔直的山墙，那是太行山。它的东坡是断崖，直接立在平原边上；翻过山脊，地面明显抬高，进入黄土高原。往下看，黄土被流水切得千沟万壑，一道道树枝状的深沟。" +
      "再往西，降水减少，进入毛乌素沙地——一片半固定沙丘和草滩相间的地带，历史上是农牧交错的边缘。接近银川时，正前方立起一道孤零零的南北向石头山，那是贺兰山。它挡住了西北方腾格里沙漠的风沙，山脚下是黄河冲积出来的银川平原，一片方整的绿色灌区，当地把这里叫“塞上江南”。",
    "en-US":
      "Beijing to Yinchuan crosses the North China Plain, climbs over the Taihang Mountains, and enters the Loess Plateau and the dry north-west. Leaving the capital, you are first over the northern edge of the North China Plain — a lowland built by several rivers, dense with fields and towns, almost without relief." +
      "Soon a near-straight wall of mountains rises to the west: the Taihang, its eastern face a line of cliffs standing right at the edge of the plain. Cross the crest and the land steps up onto the Loess Plateau, where the loess is shredded by water into a maze of branching gullies." +
      "Farther west, with less rain, the route crosses the Mu Us Sandy Land — a belt of half-fixed dunes alternating with grassy flats, historically the margin between farming and herding. Approaching Yinchuan, a single north–south rock range stands up ahead: the Helan Mountains, which shelter the area from the sand and wind of the Tengger Desert to the west. At their foot lies the Yinchuan Plain, a neat green irrigation district watered by the Yellow River.",
    },
    travel: {
    "zh-CN":
      "北京到银川约两个多小时。银川是宁夏的首府，地处黄河冲积的银川平原，海拔约一千一百米，属温带干旱气候：全年少雨、日照强、昼夜温差大，冬冷夏热，春季多风沙。" +
      "银川周边的看点集中在自然和历史：贺兰山的岩画和苏峪口、镇北堡一带，黄河与沙湖、沙坡头方向的沙漠，以及市内的历史遗迹。饮食以面食和牛羊肉为主，手抓、烩菜、酿皮较常见。" +
      "夏秋（约五到十月）较舒适，也是黄河灌区瓜果和稻田最好的时候；进沙漠地带注意防晒、补水，昼夜温差大要带外套。",
    "en-US":
      "Beijing to Yinchuan is a little over two hours. Yinchuan is the capital of Ningxia, on the Yellow River's Yinchuan Plain at about 1,100 m, with a temperate arid climate: little rain year-round, strong sun, a wide day-to-night range, cold winters, hot summers and windy, dusty springs." +
      "The main sights around Yinchuan are natural and historical: the rock art and canyons of the Helan Mountains, the desert toward Shapotou and the lakes along the Yellow River, and historic sites in and near the city. The food is wheat-based with beef and mutton — hand-pulled lamb, stews and liangpi are common." +
      "Summer and autumn (about May to October) are the more comfortable months and the best time for the irrigated fields and fruit; in the desert areas take sun protection and water, and pack a jacket for the cold nights.",
    },
  },

  "pek-hrb": {
    study: {
    "zh-CN":
      "北京飞哈尔滨，是从华北平原一路往东北，飞到东北平原。起飞时脚下是华北平原的北缘，很快出现一列不高的山地，那是燕山和内蒙古高原的东南边缘——地面开始起伏，森林和草原增多，这里是农区和牧区之间的过渡带。" +
      "越过这道山地，地形又变得开阔平坦，进入东北平原。东北平原是由松花江、辽河、嫩江等河流冲积成的大平原，中间被一些低矮的丘陵和台地分开，习惯上分成松嫩平原、辽河平原和三江平原几部分。这里纬度高、冬季长，地表是大片规整的旱地和水田，村镇沿铁路和公路排列。" +
      "接近哈尔滨时，能看到松花江在平原上蜿蜒。哈尔滨就建在松花江边，是东北北部的中心城市。短短两小时，从暖温带的华北平原，飞到了中温带的东北平原。",
    "en-US":
      "Beijing to Harbin runs north-east from the North China Plain onto the Northeast China Plain. On take-off you are over the northern edge of the North China Plain; soon a belt of low mountains appears — the Yan Mountains and the south-eastern edge of the Inner Mongolian Plateau, where the land begins to roll, with more forest and grassland, the transition zone between farming and herding country." +
      "Beyond that belt the land opens out flat again onto the Northeast Plain, built by the Songhua, Liao and Nen rivers and divided by low hills and terraces into the Song–Nen, Liao and Sanjiang plains. This is high-latitude country with long winters; the surface is broad, regular dry fields and paddies, with towns strung along the railways and roads." +
      "Approaching Harbin you can see the Songhua River winding across the plain. Harbin is built on its bank and is the main city of the northern north-east. In about two hours you have flown from the warm-temperate North China Plain to the cold-temperate Northeast Plain.",
    },
    travel: {
    "zh-CN":
      "北京到哈尔滨约两个多小时。哈尔滨地处东北平原北部，属中温带季风气候，四季分明：夏季短而凉爽，冬季长而严寒，一月常在零下二十度上下，防寒装备要充分。" +
      "哈尔滨的看点集中在中央大街和老城区的欧式建筑、松花江两岸，以及冬季的冰雪活动（冰雪大世界、亚布力、雪乡方向）。饮食受多方影响，红肠、锅包肉、俄式面包和炖菜较有代表性。" +
      "冬季（约十二月到次年二月）是冰雪旺季，但要注意保暖和路面结冰；夏季凉爽，适合作为去东北其它地方的中转。",
    "en-US":
      "Beijing to Harbin is a little over two hours. Harbin lies in the northern part of the Northeast Plain, with a cold-temperate monsoon climate and four clear seasons: short cool summers and long, severe winters, often around -20°C in January, so full cold-weather gear is needed." +
      "Harbin's sights centre on the European-style architecture of Central Street and the old town, both banks of the Songhua River, and winter ice and snow attractions (the Ice and Snow World, and toward Yabuli and the \"Snow Town\"). The food reflects mixed influences — sausage, guo bao rou, Russian-style bread and stews are typical." +
      "Winter (about December to February) is the ice-and-snow high season, but dress warmly and watch for icy pavements; summers are cool and make Harbin a good base for reaching other parts of the north-east.",
    },
  },

  "hrb-can": {
    study: {
    "zh-CN":
      "哈尔滨飞广州，是把中国东部从最北飞到最南，走完从寒温带到南亚热带的一整条梯度。起飞时脚下是东北平原——由松花江、辽河、嫩江冲积成的大平原，方格旱地和水田一望无际，村镇沿铁路排列。" +
      "越过辽河一带，进入华北平原：黄河、淮河、海河冲积出来的大平原，人口和城镇更密。接着地面转为长江中下游平原，江河湖泊相连，圩田水塘交错。" +
      "再往南是南岭——一列低矮、破碎的东西向丘陵山地，被宽谷隔开，历史上是岭南和内地之间的门槛，也大致是长江水系和珠江水系的分水岭。翻过南岭，很快就是珠江三角洲：珠江在入海口淤积、加上人工围垦形成的平原，水网密布、城市连成一片。一趟航班，走完了东部季风区从北到南的全部。",
    "en-US":
      "Harbin to Guangzhou flies the eastern half of China from its far north to its far south, down the full gradient from the cold-temperate zone to the southern subtropics. On take-off you are over the Northeast Plain — built by the Songhua, Liao and Nen rivers, an endless grid of dry fields and paddies with towns strung along the railways." +
      "Past the Liao River country you cross the North China Plain, built by the Yellow, Huai and Hai rivers, with denser population and towns. The land then becomes the Middle–Lower Yangtze Plain, a low plain of interconnected rivers and lakes with diked fields and ponds." +
      "Farther south is the Nanling — a low, broken east–west belt of hills separated by wide valleys, historically the threshold between the far south and the interior, and roughly the divide between the Yangtze and Pearl river systems. Cross it and you are soon over the Pearl River Delta, a plain built by silt and reclamation, water-netted and city-covered. One flight has crossed the whole eastern monsoon zone, north to south.",
    },
    travel: {
    "zh-CN":
      "哈尔滨到广州约四个小时，跨越很大的气候差：出发地冬季严寒，目的地一年多数时候温暖潮湿。广州属南亚热带季风气候，夏长冬短，五到九月闷热多雨、多台风，冬季温和。" +
      "广州是华南的门户和交通枢纽，粤菜、早茶和老城骑楼街区是主要体验，往南往西可到珠三角各城市和港澳方向。" +
      "从东北出发要注意到广州后的换季：厚衣物基本用不上，改带轻薄透气和雨具。夏季注意防暑、留意台风预报。",
    "en-US":
      "Harbin to Guangzhou is about four hours across a big climate difference: severe winters where you start, warm and humid most of the year where you land. Guangzhou has a southern subtropical monsoon climate — long summers, short winters, hot and wet with typhoons from May to September, mild winters." +
      "Guangzhou is the gateway and transport hub of southern China; Cantonese food, morning yum cha and the old arcade-street quarters are the main experiences, with the Pearl River Delta cities and Hong Kong and Macau to the south and west." +
      "Coming from the north-east, plan for the change of season on arrival: heavy clothing is not needed; bring light, breathable clothes and rain gear instead. In summer take care in the heat and watch typhoon forecasts.",
    },
  },

  "pek-sha": {
    study: {
    "zh-CN":
      "北京飞上海，是沿着中国东部沿海地带，从华北平原飞到长江三角洲。起飞时脚下是华北平原——黄河、淮河、海河冲积出来的大平原，方格农田和城镇密集，地面几乎看不出起伏。" +
      "往东南飞，右侧会出现一片明显隆起的丘陵，那是山东丘陵：华北平原中间的一块基岩地块，泰山、鲁山等山头从平原里凸出来，四周仍是平原。" +
      "过了山东，进入淮河以南、长江以北的苏北平原，河渠纵横。接近上海时进入长江三角洲——长江最后一段淤积形成的低平原，河网最密、城镇连成一片，太湖等湖泊点缀其间。飞机在这里下降。全程都在中国地势最低、最平的第三级阶梯上飞。",
    "en-US":
      "Beijing to Shanghai runs down the eastern coastal belt of China, from the North China Plain to the Yangtze Delta. On take-off you are over the North China Plain — built by the Yellow, Huai and Hai rivers, dense with fields and towns, almost without relief." +
      "Flying south-east, a distinct band of higher hills appears to the right: the Shandong Hills, a block of bedrock rising out of the middle of the plain, with summits such as Tai Shan standing above otherwise flat surroundings." +
      "Past Shandong the route crosses the northern Jiangsu plain between the Huai and the Yangtze, threaded with canals. Approaching Shanghai you reach the Yangtze Delta, the low plain of the river's final reach, with the densest water network and continuous built-up land, dotted with lakes such as Tai Hu. The whole flight stays on the lowest, flattest step of China's terrain.",
    },
    travel: {
    "zh-CN":
      "北京到上海约两小时。两座城市都在东部平原上，但气候有差别：北京干燥、四季分明、冬冷；上海湿润、冬季湿冷、夏季闷热，梅雨季（约六月）和夏秋台风期多雨。" +
      "这条线是中国最繁忙的商务航线之一，京沪高铁也只要四五个小时，行程灵活。上海是去江南水乡和华东沿海的门户。" +
      "从北京到上海，注意湿度变化：上海体感更闷，夏季带轻便透气衣物和雨具；冬季虽然气温不算很低，但湿冷，室内外都要注意保暖。",
    "en-US":
      "Beijing to Shanghai is about two hours. Both cities are on the eastern plain but the climates differ: Beijing is dry, with four clear seasons and cold winters; Shanghai is humid, with damp cold winters and hot, muggy summers, plus the plum rains around June and typhoons in late summer and autumn." +
      "This is one of the busiest business routes in China, and the Beijing–Shanghai high-speed train takes only about four to five hours, so plans are flexible. Shanghai is the gateway to the Jiangnan water towns and the eastern coast." +
      "Coming from Beijing, note the change in humidity: Shanghai feels muggier, so bring light breathable clothes and rain gear in summer; winters are not very cold but the damp makes them feel raw, indoors and out.",
    },
  },

  "can-hak": {
    study: {
    "zh-CN":
      "广州飞海口，是一趟很短的跨海航班，从大陆最南端飞到海南岛。起飞后脚下是珠江三角洲，很快到粤西沿海，海岸线上是大片红树林、盐田和养殖塘。" +
      "接着地面收窄成一条伸向西南的半岛，那是雷州半岛——中国大陆最南的一块，地表是玄武岩台地，散布着一些低平的死火山口和火山湖。" +
      "半岛尽头是琼州海峡，一条几十公里宽的水道，把海南岛和大陆隔开。越过海峡就是海南岛：岛的中南部是山地，五指山、鹦哥岭等主峰在中间隆起，四周是环岛的沿海平原和台地，海口就在岛北缘的一片这样的平原上。海南岛是中国纬度最低的省级陆地，属热带气候。",
    "en-US":
      "Guangzhou to Haikou is a short over-water flight from the southern edge of the mainland to Hainan Island. After take-off you are over the Pearl River Delta, then quickly the coast of western Guangdong, its shoreline lined with mangroves, salt pans and aquaculture ponds." +
      "The land then narrows into a peninsula reaching south-west: the Leizhou Peninsula, the southernmost part of the Chinese mainland, a basalt plateau dotted with low extinct craters and crater lakes." +
      "At its tip is the Qiongzhou Strait, a channel a few tens of kilometres wide separating Hainan from the mainland. Across it lies Hainan Island: mountains in the centre-south, with peaks such as Wuzhi Shan rising in the middle, ringed by coastal plains and terraces. Haikou sits on one of these plains at the island's northern edge. Hainan is the lowest-latitude provincial-level land in China, with a tropical climate.",
    },
    travel: {
    "zh-CN":
      "广州到海口约一个半小时。海口在海南岛北缘，属热带季风气候：全年温暖，冬季是旅游旺季，夏秋（约五到十月）炎热、多雨、是台风季，出行要留意台风预报。" +
      "海口本身有骑楼老街、火山群地质公园和海边，多数游客把它当作进入海南的门户：往东是文昌、往南沿东线到琼海、万宁、三亚，中部是热带雨林山区。" +
      "全年防晒和补水都很重要；台风期航班和轮渡可能延误或取消，行程安排留出机动时间。",
    "en-US":
      "Guangzhou to Haikou is about an hour and a half. Haikou is on the northern edge of Hainan, with a tropical monsoon climate: warm year-round, with winter as the tourist high season and a hot, wet typhoon season in late spring to autumn (about May to October), so watch typhoon forecasts." +
      "Haikou itself has its arcade old streets, a volcanic geopark and the seafront, but most visitors treat it as the gateway to Hainan: east to Wenchang, south down the east coast to Qionghai, Wanning and Sanya, with tropical rainforest mountains in the interior." +
      "Sun protection and hydration matter all year; during the typhoon season flights and ferries can be delayed or cancelled, so leave slack in your plans.",
    },
  },

  "pek-kwl": {
    study: {
    "zh-CN":
      "北京飞桂林，是从华北平原一路往南，飞到南方的喀斯特山水。起飞时脚下是华北平原，方格农田和城镇密集，看不出起伏。" +
      "往南飞，中途经过洞庭湖——长江中游的一个通江湖泊，丰水期是一大片明水，枯水期退成河道和洲滩，四周是湖南的稻田平原。" +
      "再往南是南岭，一列低矮破碎的东西向丘陵山地，翻过它就进入两广。桂林一带是典型的喀斯特峰林：厚层石灰岩被长期溶蚀，留下一座座陡立的、彼此分开的石峰，漓江在峰林之间蜿蜒。这种“平地拔起一片石峰”的地貌，是湿热气候下石灰岩长期溶蚀的结果。",
    "en-US":
      "Beijing to Guilin runs south from the North China Plain to the karst landscape of the south. On take-off you are over the North China Plain, dense with fields and towns and almost without relief." +
      "Flying south, the route passes Dongting Lake, a lake connected to the Yangtze whose open water spreads wide in the flood season and shrinks to channels and bars in the dry season, surrounded by the paddy plains of Hunan." +
      "Farther south is the Nanling, a low, broken east–west belt of hills; cross it and you are in Guangxi. The Guilin area is classic peak-forest karst: thick limestone dissolved over a long time into rows of steep, separate stone towers, with the Li River winding between them. This landscape of towers rising straight from flat ground is the result of long dissolution of limestone in a hot, wet climate.",
    },
    travel: {
    "zh-CN":
      "北京到桂林约三个小时。桂林属亚热带季风气候，温暖湿润，春季多阴雨，夏季是主汛期、漓江水量大，秋季相对干爽舒适，冬季温和但偶有阴冷。" +
      "主要体验是漓江（桂林到阳朔一段）、周边的溶洞和峰林田园，以及龙脊梯田方向。阳朔是背包和骑行的集散地。" +
      "雨季（约五到八月）漓江可能因涨水调整游船航段，山路湿滑；枯水期个别河段水浅。出行前查漓江当日通航情况。",
    "en-US":
      "Beijing to Guilin is about three hours. Guilin has a subtropical monsoon climate, warm and humid: cloudy, drizzly springs; a summer flood season when the Li River runs high; drier, comfortable autumns; and mild winters that can occasionally turn raw." +
      "The main experiences are the Li River (the Guilin–Yangshuo stretch), the caves and peak-forest countryside around it, and the Longji terraces. Yangshuo is the base for backpackers and cycling." +
      "In the rainy season (about May to August) Li River cruises may change which section they run because of high water, and mountain paths are slippery; in the dry season some reaches are shallow. Check the day's river conditions before you go.",
    },
  },

  "xiy-ctu": {
    study: {
    "zh-CN":
      "西安飞成都，虽然只有一个多小时，却是翻越秦岭、从黄河流域进入长江流域的一趟。起飞时脚下是关中平原——渭河冲积成的东西向平原，是黄河中游的老农业区。" +
      "很快，南边立起一道又高又宽、东西横亘的山墙，那就是秦岭。秦岭是中国一条重要的自然地理分界：它大致把暖温带和亚热带、把小麦区和水稻区分开，也是黄河水系和长江水系的分水岭。山北是黄土和麦田，山南很快变成绿色的稻田和常绿林。" +
      "翻过秦岭主脊，还有一道大巴山，之间夹着汉中盆地。再越过大巴山，地面陷下去、变成红色，进入四川盆地——四周被山环抱的红层盆地，云雾多、日照少，成都平原就在盆地西部，是都江堰两千多年引岷江水灌溉出来的一片沃野。",
    "en-US":
      "Xi'an to Chengdu takes only a little over an hour, but it crosses the Qinling and passes from the Yellow River basin into the Yangtze basin. On take-off you are over the Guanzhong Plain, built by the Wei River, an old farming region of the middle Yellow River." +
      "Soon a high, broad east–west wall of mountains stands up to the south: the Qinling. It is one of China's important natural dividing lines — roughly separating the warm-temperate zone from the subtropics, wheat country from rice country, and the Yellow River system from the Yangtze. North of it is loess and wheat; south of it the land quickly turns to green paddies and evergreen forest." +
      "Beyond the main Qinling crest is a second range, the Daba Mountains, with the Hanzhong basin between them. Past the Daba the ground drops and turns red, into the Sichuan Basin — a red-bed basin ringed by mountains, often cloudy with little sun. The Chengdu Plain lies in its west, farmland the Dujiangyan works have irrigated from the Min River for more than two thousand years.",
    },
    travel: {
    "zh-CN":
      "西安到成都约一个半小时，两地都在内陆，但气候不同：西安干燥、四季分明、冬冷；成都在盆地里，湿度大，云多日照少，冬季阴冷、夏季闷热，很少有强烈日晒。" +
      "成都是四川旅游的枢纽：市内有宽窄巷子、武侯祠、大熊猫基地，往西北去九寨沟、四姑娘山，往西进藏，往南去乐山、峨眉。饮食以川菜和火锅为主，口味偏麻辣。" +
      "成都的“阴天感”是常态，带件薄外套即可；如果不习惯辣，点餐时可要求微辣或不辣。京昆、西成高铁也很方便，行程可灵活组合。",
    "en-US":
      "Xi'an to Chengdu is about an hour and a half. Both are inland, but the climates differ: Xi'an is dry, with four clear seasons and cold winters; Chengdu, in its basin, is humid and cloudy with little sun, raw in winter and muggy in summer, and rarely bright." +
      "Chengdu is the hub for travel in Sichuan: in the city there is the Kuanzhai Alley, the Wuhou Shrine and the panda base; north-west lie Jiuzhaigou and Siguniang Shan; west is the route into Tibet; south are Leshan and Emei. The food is Sichuanese and hotpot, leaning hot and numbing." +
      "Chengdu's overcast feel is normal — a light jacket is enough. If you are not used to chilli, you can ask for mild or none. The high-speed rail links are good, so plans can be mixed and matched.",
    },
  },

  "urc-htn": {
    study: {
    "zh-CN":
      "乌鲁木齐飞和田，是一趟直接飞越塔克拉玛干沙漠的航班，从天山北麓到昆仑山北麓。起飞后脚下是天山北麓的绿洲带，很快开始爬升，翻越天山——山顶终年积雪、冰川广布。" +
      "翻过天山，眼前是一个巨大的黄色椭圆——塔里木盆地，四周被天山、昆仑山、帕米尔高原围住。飞机不再沿盆地边缘走，而是直接切进中间的塔克拉玛干沙漠。晴天时能看到一道道规则排列的新月形沙垄和格状沙丘，几乎没有植被，也没有道路和居民点。" +
      "沙漠南缘，昆仑山的雪峰从地平线上升起。昆仑山是青藏高原的北界。山前的融水汇成几条河，冲出一小片一小片绿洲，和田就在其中一片上——它是塔里木盆地南缘的古老绿洲，自古以玉和丝绸闻名。",
    "en-US":
      "Ürümqi to Hotan flies straight across the Taklamakan Desert, from the northern foot of the Tianshan to the northern foot of the Kunlun. After take-off you are over the oasis belt on the north side of the Tianshan, then climb over the range, whose summits are under permanent snow with widespread glaciers." +
      "Beyond the Tianshan a huge yellow oval opens up — the Tarim Basin, walled in by the Tianshan, Kunlun and Pamirs. Instead of following the basin rim, the plane cuts straight into the Taklamakan Desert in its centre. On a clear day you can see regular rows of crescent and grid dunes, almost no vegetation, and no roads or settlements." +
      "At the desert's southern edge the snow peaks of the Kunlun rise from the horizon; the Kunlun forms the northern edge of the Tibetan Plateau. Meltwater from it feeds a few rivers that build small oases, and Hotan sits on one of them — an old oasis on the southern rim of the Tarim Basin, long known for jade and silk.",
    },
    travel: {
    "zh-CN":
      "乌鲁木齐到和田约两小时。和田在塔里木盆地南缘、昆仑山下，海拔约一千四百米，气候极干燥，春夏多浮尘和沙尘天，夏季炎热，昼夜温差大。" +
      "和田是南疆的古老绿洲，以玉石、地毯、艾德莱斯绸和大巴扎闻名，周边有约特干等古代遗址。饮食以馕、拌面、烤肉和瓜果为主。" +
      "这一带靠近边境和沙漠：部分区域外国人需办边境通行证，风沙天能见度低、航班易延误，行程要留机动时间。作息比内地晚约两小时。",
    "en-US":
      "Ürümqi to Hotan is about two hours. Hotan is on the southern rim of the Tarim Basin at the foot of the Kunlun, at about 1,400 m, with an extremely dry climate, frequent dust and sandstorms in spring and summer, hot summers and a wide day-to-night range." +
      "Hotan is an old oasis of southern Xinjiang, known for jade, carpets, atlas silk and its grand bazaar, with ancient sites such as Yotkan nearby. The food centres on naan, laghman, grilled meat and fruit." +
      "This area is close to the border and the desert: some parts require a border permit for foreign visitors, dust days cut visibility and delay flights, so leave slack in your plans. Daily life runs about two hours later than in eastern China.",
    },
  },

  "kmg-lxa": {
    study: {
    "zh-CN":
      "昆明飞拉萨，是从云贵高原横穿横断山脉，飞到青藏高原东南缘。起飞时脚下是滇中的高原面，昆明在一片高原湖盆里，旁边是滇池。" +
      "往西北飞，地面被切得越来越破碎，进入横断山脉：南北向排列的雪山和深谷，金沙江、澜沧江、怒江在这里并行南流。金沙江在石鼓一带拐了个急弯，在玉龙雪山和哈巴雪山之间切出很深的虎跳峡。" +
      "继续往西北，进入藏东南。这一带有印度洋水汽顺河谷灌入，是青藏高原上最湿润、最绿的角落，森林长得很高。雅鲁藏布江绕南迦巴瓦峰拐了一个大弯，切出很深的峡谷。再往西，地面转为相对平坦开阔的青藏高原面，飞机沿拉萨河谷下降到拉萨。",
    "en-US":
      "Kunming to Lhasa crosses the Yunnan–Guizhou Plateau, cuts through the Hengduan Mountains, and reaches the south-eastern edge of the Tibetan Plateau. On take-off you are over the plateau surface of central Yunnan, with Kunming in a lake basin beside Lake Dian." +
      "Flying north-west, the land becomes ever more broken as you enter the Hengduan Mountains: north–south snow ranges and deep gorges, with the Jinsha, Lancang and Nu rivers running south in parallel. Near Shigu the Jinsha makes a sharp bend, and between the Yulong and Haba snow massifs it cuts the deep Tiger Leaping Gorge." +
      "Continuing north-west you enter south-eastern Tibet, where Indian Ocean moisture up the valleys makes this the wettest, greenest corner of the plateau, with tall forest. The Yarlung Tsangpo makes a great bend around Namcha Barwa, cutting a very deep gorge. Farther west the ground becomes the comparatively flat, open plateau surface, and the plane descends along the Lhasa River valley into Lhasa.",
    },
    travel: {
    "zh-CN":
      "昆明到拉萨约两个多小时。昆明本身海拔约一千九百米，可作适应海拔的一站；拉萨约三千六百米，落地头一两天放慢节奏、多喝水、不饮酒，有心肺基础病的人先咨询医生。" +
      "重要提示：外国游客进入西藏，除中国签证外还需办理西藏旅行许可，并且通常必须随有资质的旅行社、按报备行程结伴出行，出发前通过旅行社安排好。" +
      "高原日照极强、气候干燥，全年防晒并备保暖衣物。合适的季节大致是四五月和九十月；雨季（约六到八月）藏东南最绿，但横断山区道路易受泥石流影响。",
    "en-US":
      "Kunming to Lhasa is a little over two hours. Kunming itself is at about 1,900 m and can serve as a step to acclimatise; Lhasa is at about 3,600 m, so for the first day or two slow down, drink plenty of water and avoid alcohol, and get medical advice first if you have a heart or lung condition." +
      "Important: to enter Tibet, foreign visitors need a Tibet Travel Permit in addition to their Chinese visa, and normally must travel with a licensed tour operator on a pre-declared itinerary in a group — arrange this through an agency before you leave." +
      "The plateau sun is very strong and the air dry, so sun protection and warm layers are needed year-round. The better windows are roughly April–May and September–October; in the rainy season (about June to August) south-eastern Tibet is greenest, but roads in the Hengduan ranges are prone to mudflows.",
    },
  },

  "sha-hrb": {
    study: {
    "zh-CN":
      "上海飞哈尔滨，是沿着中国的海岸往东北飞，从长江三角洲飞到东北平原。起飞后脚下很快是黄海，海面上有货船和养殖区。" +
      "航线大致沿海岸线走。右前方是山东半岛，之后掠过辽东半岛——辽东丘陵是一片不高的低山丘陵，海岸曲折、多岛屿和港湾。" +
      "越过辽东湾，进入东北平原。东北平原由松花江、辽河、嫩江冲积成，中间被一些低丘和台地分开，习惯上分为辽河平原、松嫩平原和三江平原。这里纬度高、黑土广布，是大片规整的旱地和水田。接近哈尔滨时能看到松花江在平原上蜿蜒，哈尔滨就建在江边。",
    "en-US":
      "Shanghai to Harbin flies up the coast of China to the north-east, from the Yangtze Delta to the Northeast Plain. After take-off you are soon over the Yellow Sea, with cargo ships and aquaculture areas below." +
      "The route roughly follows the coastline. The Shandong Peninsula lies ahead to the right, and then the plane passes the Liaodong Peninsula — the Liaodong Hills are a belt of low hills, with an indented coast and many islands and bays." +
      "Across the Liaodong Gulf you reach the Northeast Plain, built by the Songhua, Liao and Nen rivers and divided by low hills and terraces into the Liao, Song–Nen and Sanjiang plains. This is high-latitude country with widespread black soil, in broad, regular dry fields and paddies. Approaching Harbin you can see the Songhua River winding across the plain, with the city on its bank.",
    },
    travel: {
    "zh-CN":
      "上海到哈尔滨约三小时，从湿润的江南飞到冬季严寒的东北。哈尔滨属中温带季风气候：夏季短而凉爽，冬季长而严寒，一月常在零下二十度上下。" +
      "哈尔滨的看点是中央大街和老城的欧式建筑、松花江两岸，以及冬季的冰雪活动。往南是长春、沈阳，往北往东可到东北的森林和湿地。" +
      "冬季（约十二月到次年二月）从上海出发要备足防寒装备，注意室内外温差和路面结冰；夏季凉爽，是避暑和中转的好时候。",
    "en-US":
      "Shanghai to Harbin is about three hours, from the humid Jiangnan to the north-east with its severe winters. Harbin has a cold-temperate monsoon climate: short cool summers and long, severe winters, often around -20°C in January." +
      "Harbin's sights are the European-style architecture of Central Street and the old town, both banks of the Songhua River, and winter ice and snow activities. South are Changchun and Shenyang; north and east are the forests and wetlands of the north-east." +
      "In winter (about December to February), leaving from Shanghai, bring full cold-weather gear and watch the indoor–outdoor temperature difference and icy pavements; summers are cool and good for escaping the heat or for transfers.",
    },
  },

  "hnd-itm": {
    study: {
    "zh-CN":
      "东京飞大阪，虽然只有一个多小时，却是把日本本州人口最密集的“太平洋走廊”从东飞到西。起飞时脚下是关东平原——日本面积最大的平原，由利根川等河流冲积而成，几乎被东京都市圈完全覆盖，看不到什么农田。" +
      "很快，右前方出现一座轮廓极其对称的圆锥形雪山，那就是富士山。它是一座层状火山，孤零零立在平原和丘陵之间，晴天从飞机上能看得很清楚。" +
      "越过富士山所在的丘陵地带，进入名古屋所在的浓尾平原，这是木曾川等河流冲积出来的一片三角洲平原。再往西，一片明亮的水面出现在山间，那是琵琶湖——日本最大的湖，京都、大阪的用水很大程度靠它。" +
      "琵琶湖以南、群山之间的低地就是大阪平原，大阪、京都、神户连成一片。飞机在平原北缘的伊丹机场降落。一趟短途航班，飞过了日本的政治中心、象征性的名山和历史古都。",
    "en-US":
      "Tokyo to Osaka takes only a little over an hour, but it flies the length of Honshu's most densely populated \"Pacific corridor\", east to west. On take-off you are over the Kanto Plain — the largest plain in Japan, built by the Tone and other rivers and almost entirely covered by the Tokyo metropolitan area, with little farmland visible." +
      "Soon an almost perfectly symmetrical snow-capped cone appears ahead to the right: Mount Fuji, a stratovolcano standing alone between plain and hills, clearly seen from the plane on a fine day." +
      "Beyond the hills around Fuji you cross the Nobi Plain around Nagoya, a delta plain built by the Kiso and other rivers. Farther west a bright sheet of water appears among the mountains: Lake Biwa, the largest lake in Japan, which supplies much of the water for Kyoto and Osaka." +
      "South of the lake, the lowland among the mountains is the Osaka Plain, where Osaka, Kyoto and Kobe run together. The plane lands at Itami on the northern edge of the plain. In one short flight you have passed the political centre of Japan, its symbolic mountain and its historic capital.",
    },
    travel: {
    "zh-CN":
      "东京到大阪飞行约一小时，但机场到市区都要再花时间，很多人其实坐新干线（约两个半小时、市中心到市中心）。两地都属太平洋侧的温带气候：夏季闷热、6–7月有梅雨，秋季有台风，冬季温和少雪。" +
      "大阪是关西的中心，市井气息浓、以吃闻名（章鱼烧、大阪烧、串炸）。它也是去京都（约30分钟）、奈良、神户、姬路的枢纽。市内地铁和 JR 环状线方便，用一张 IC 卡（ICOCA 等）通用。" +
      "樱花期（3月底到4月初）和红叶期（11月）关西游客最多，京都的热门寺院要趁早去。夏天注意防暑补水，随身带把伞应付雷阵雨。",
    "en-US":
      "Tokyo to Osaka is about an hour in the air, but with airport transfers many people take the Shinkansen instead (about two and a half hours, city centre to city centre). Both cities have a Pacific-side temperate climate: hot, humid summers with a rainy season in June–July, typhoons in autumn, and mild winters with little snow." +
      "Osaka is the centre of the Kansai region, down-to-earth and known for its food (takoyaki, okonomiyaki, kushikatsu). It is also the hub for Kyoto (about 30 minutes), Nara, Kobe and Himeji. The subway and the JR Loop Line are easy, and a single IC card (ICOCA and others) works throughout." +
      "During the cherry-blossom season (late March to early April) and the autumn-leaf season (November) Kansai is busiest, and the popular Kyoto temples are best visited early. In summer take care in the heat and carry an umbrella for thunderstorms.",
    },
  },

  "hnd-cts": {
    study: {
    "zh-CN":
      "东京飞札幌，是从本州最大的平原飞到北海道最大的平原，一路沿着太平洋岸往北。起飞时脚下是关东平原和东京都市圈，随后进入本州东北部的太平洋一侧。" +
      "航线大致贴着三陆海岸走。三陆海岸的南段是典型的里亚式海岸——被淹没的山谷形成一连串深入内陆的锯齿状海湾，港口就藏在湾底；北段则是高耸的海蚀崖。这一带面向开阔的太平洋。" +
      "越过津轻海峡进入北海道。首先看到的是支笏洞爷一带的火山区——支笏湖和洞爷湖都是火山口积水形成的深湖，旁边有有珠山、樽前山等活火山，地面能看到浅色的火山碎屑和火口。" +
      "再往北是石狩平原，由石狩川冲积而成，是北海道人口和农业的重心，田块比本州大得多、更规整。札幌就建在平原南缘、面向石狩湾的位置。",
    "en-US":
      "Tokyo to Sapporo flies from the largest plain on Honshu to the largest on Hokkaido, north along the Pacific coast. On take-off you are over the Kanto Plain and the Tokyo metropolitan area, then over the Pacific side of north-eastern Honshu." +
      "The route roughly follows the Sanriku Coast. Its southern part is a classic ria coast — drowned river valleys forming a line of jagged bays reaching inland, with the ports tucked at the head of each bay; the northern part is high sea cliffs. This stretch faces the open Pacific." +
      "Across the Tsugaru Strait you reach Hokkaido. First comes the Shikotsu–Toya volcanic area — Lakes Shikotsu and Toya both fill volcanic craters as deep lakes, with active volcanoes such as Usu and Tarumae beside them, and pale volcanic debris and craters visible on the ground." +
      "Farther north is the Ishikari Plain, built by the Ishikari River, the centre of Hokkaido's population and farming, with fields much larger and more regular than on Honshu. Sapporo is built on its southern edge, facing Ishikari Bay.",
    },
    travel: {
    "zh-CN":
      "东京到札幌约一个半小时。北海道纬度高、气候明显不同于本州：夏季（7–8月）凉爽干燥、是避暑胜地，冬季漫长严寒、降雪极多，札幌一二月常在零下、路面结冰。" +
      "札幌是北海道的中心城市，街区呈规整的棋盘状。二月的札幌雪祭是主要活动；其它季节多把札幌当作枢纽——往东去富良野、美瑛的花田和大雪山，往西南去小樽、洞爷、函馆，往东去知床、钏路湿原。" +
      "北海道地广、城市间距离大，自驾较方便但冬季雪地驾驶需经验和冬胎。夏季昼夜温差大、要带外套；冬季务必防寒防滑。",
    "en-US":
      "Tokyo to Sapporo is about an hour and a half. Hokkaido is at a higher latitude and its climate is clearly different from Honshu's: cool, dry summers (July–August) make it a place to escape the heat, while winters are long and severe with very heavy snow — Sapporo is often below freezing in January and February, with icy streets." +
      "Sapporo is the main city of Hokkaido, laid out on a regular grid. The Snow Festival in February is the big event; in other seasons Sapporo is mostly a hub — east to the flower fields of Furano and Biei and to Daisetsuzan, south-west to Otaru, Toya and Hakodate, east to Shiretoko and the Kushiro marshes." +
      "Hokkaido is large with long distances between towns; driving is convenient but winter snow driving needs experience and winter tyres. Summers have a wide day-to-night range so bring a jacket; in winter, dress for the cold and for ice underfoot.",
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
      "Past Fuji you cross the mountains of central Honshu, then the Kii Mountains — a rugged, densely forested range on the Kii Peninsula, one of the wettest areas in Japan and the setting of the Kumano pilgrimage routes." +
      "Beyond the peninsula the view opens onto the Seto Inland Sea, an island-filled sea between Honshu, Shikoku and Kyushu, its water calm and its islands close-packed, with narrow coastal plains and port cities on either shore and several long bridges linking the three landmasses." +
      "At the western end of the Inland Sea is the Kanmon Strait; across it is Kyushu. Fukuoka, on Kyushu's northern coast facing the Genkai Sea, is the largest city on the island and one of the Japanese cities closest to mainland Asia.",
    },
    travel: {
    "zh-CN":
      "东京到福冈约两小时，是日本国内最繁忙的航线之一。福冈属较温暖的太平洋—对马暖流气候：夏季闷热、6–7月梅雨明显，冬季温和、偶有降雪，比东京暖一些。" +
      "福冈城市紧凑，机场离市中心只有地铁两三站，非常方便。以拉面（豚骨）、屋台（路边摊）和海鲜出名。它是九州旅游的门户：往南去阿苏、由布院、别府的火山与温泉，往西去长崎，往北坐船或高铁去下关。" +
      "台风季（约7–9月）留意预报。樱花和红叶季市内的舞鹤公园、大濠公园人多但不算夸张。",
    "en-US":
      "Tokyo to Fukuoka is about two hours and one of the busiest domestic routes in Japan. Fukuoka has a milder Pacific–Tsushima Current climate: hot, humid summers with a clear rainy season in June–July, and mild winters with occasional snow, a little warmer than Tokyo." +
      "Fukuoka is compact, and the airport is only two or three subway stops from the centre — very convenient. It is known for tonkotsu ramen, yatai (street stalls) and seafood. It is the gateway to Kyushu: south to the volcanoes and hot springs of Aso, Yufuin and Beppu, west to Nagasaki, north by ferry or rail to Shimonoseki." +
      "During the typhoon season (about July to September) watch the forecast. In the cherry-blossom and autumn-leaf seasons Maizuru and Ohori parks in the city are busy but not extreme.",
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
      "A short way south a near-circular, densely forested high island appears in the sea: Yakushima. It is a single uplifted block of granite, with peaks near 2,000 m in its centre that wring the moisture out of the sea air, making it one of the wettest places in Japan; thousand-year-old cedars grow on its slopes, and it is a World Heritage Site." +
      "Farther south you reach the main Nansei chain — a string of low coral islands ringed by pale-blue reef flats and white sand, quite unlike the volcanic islands of Kyushu. These islands have a subtropical climate." +
      "Naha, in the south of Okinawa's main island, is the central city of this island region. The whole flight has gone from a temperate active volcano to a subtropical coral sea.",
    },
    travel: {
    "zh-CN":
      "鹿儿岛到那霸约一个半小时。冲绳属亚热带海洋性气候，全年温暖：冬季也在15°C以上，夏季炎热潮湿，5–6月梅雨、7–10月是台风季，台风来时航班和轮渡常停。" +
      "那霸是冲绳的门户，国际通商业街、首里城公园（火灾后部分在重建）、周边的海滩和离岛（座间味、渡嘉敷）是主要去处。冲绳有自己的历史和饮食（苦瓜、海葡萄、泡盛酒），与本州差别明显。" +
      "岛上公共交通有限，单轨电车只覆盖那霸市区，去别处多靠租车（靠左行驶）。全年防晒，潜水浮潜选有资质的经营者。",
    "en-US":
      "Kagoshima to Naha is about an hour and a half. Okinawa has a subtropical maritime climate, warm all year: even winter stays above 15°C, summers are hot and humid, with a rainy season in May–June and a typhoon season from July to October, when flights and ferries often stop." +
      "Naha is the gateway to Okinawa; the Kokusai-dori shopping street, Shuri Castle Park (partly being rebuilt after a fire), and the nearby beaches and outer islands (Zamami, Tokashiki) are the main draws. Okinawa has its own history and food (bitter melon, sea grapes, awamori spirit), clearly different from Honshu." +
      "Public transport on the island is limited — the monorail only covers central Naha — so most people hire a car (driving on the left). Use sun protection year-round, and choose licensed operators for diving and snorkelling.",
    },
  },

  "hnd-koj": {
    study: {
    "zh-CN":
      "东京飞鹿儿岛，是从本州东端斜穿西日本，飞到九州南端的火山地带。起飞后是关东平原和东京都市圈，随后富士山的圆锥出现在窗外。" +
      "越过富士和本州中部山地，进入纪伊山地——纪伊半岛上多雨、森林茂密的山区。过了濑户内海西部，进入九州。" +
      "九州中部立着阿苏山：它是一座巨大的破火山口，直径约二十公里，是世界上数一数二大的破火山口之一；火口原里有农田和铁路，中央新起的几座火山锥仍在活动，其中中岳常年冒烟。" +
      "再往南是鹿儿岛所在的锦江湾，湾里就是不断喷发的樱岛。鹿儿岛市和樱岛隔着几公里宽的海面相望，市区常常落一层薄薄的火山灰。这条航线把日本两处最有代表性的活火山连在一起看。",
    "en-US":
      "Tokyo to Kagoshima cuts diagonally across western Japan from the eastern end of Honshu to the volcanic country at the southern tip of Kyushu. After take-off comes the Kanto Plain and the Tokyo metropolitan area, then the cone of Mount Fuji in the window." +
      "Past Fuji and the mountains of central Honshu you cross the Kii Mountains — the wet, forested range of the Kii Peninsula. Beyond the western Seto Inland Sea you reach Kyushu." +
      "In central Kyushu stands Mount Aso: a huge caldera about 20 km across, one of the largest in the world, with farmland and a railway on its crater floor and several younger cones in the centre still active, of which Nakadake smokes more or less constantly." +
      "Farther south is Kagoshima Bay, with the continually erupting Sakurajima in it. The city and the volcano face each other across a few kilometres of water, and a thin layer of ash often falls on the city. This flight links two of the most representative active volcanoes in Japan.",
    },
    travel: {
    "zh-CN":
      "东京到鹿儿岛约两小时。鹿儿岛在九州南部，气候温暖湿润：夏季炎热、6–7月梅雨量大，冬季温和，台风季（7–10月）影响明显。因为樱岛，市区偶尔会有降灰，风向不利时要留意。" +
      "鹿儿岛是九州南部的中心，坐轮渡十几分钟就能上樱岛看火山地貌。往南坐船去屋久岛、种子岛，往北去雾岛的温泉和火山、去熊本和阿苏。当地以黑猪肉、烧酒（芋烧酎）和白熊刨冰出名。" +
      "登山季（屋久岛、雾岛）多雨，装备要防水；市区遇降灰日尽量减少户外活动、开车注意路滑。",
    "en-US":
      "Tokyo to Kagoshima is about two hours. Kagoshima, in southern Kyushu, has a warm, humid climate: hot summers with heavy rain in June–July, mild winters, and a clear typhoon season (July–October). Because of Sakurajima, ash occasionally falls on the city, so watch the wind direction on eruptive days." +
      "Kagoshima is the centre of southern Kyushu; a ferry of about 15 minutes reaches Sakurajima and its volcanic landforms. South, ferries run to Yakushima and Tanegashima; north lie the hot springs and volcanoes of Kirishima, and Kumamoto and Aso. Local specialities are black-pork dishes, sweet-potato shochu and shirokuma shaved ice." +
      "The hiking seasons on Yakushima and Kirishima are wet, so bring waterproof gear; on ash-fall days in the city, cut outdoor time and drive carefully on slippery roads.",
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
      "Across the Tsugaru Strait into north-eastern Honshu, then south-west into the range of the Japanese Alps: the Hida, Kiso and Akaishi ranges lie side by side across central Honshu, the highest mountains in Japan, with many peaks above 3,000 m, permanent snow on the crests, and the divide between the Sea of Japan side and the Pacific side." +
      "Beyond the Alps a bright sheet of water appears among the mountains: Lake Biwa, the largest lake in Japan. The lowland west and south of it is the Kansai city belt." +
      "Farther west you reach the Seto Inland Sea — the calm, island-filled sea between Honshu, Shikoku and Kyushu. The route follows it west and finally crosses the Kanmon Strait to Fukuoka on Kyushu's northern coast. One flight has passed the plains of Hokkaido, the high mountains of Honshu and the inland sea of western Japan.",
    },
    travel: {
    "zh-CN":
      "札幌到福冈飞行约两个多小时，是日本国内跨度最大的航线之一，等于从冰雪地带飞到温暖的九州。两地气候差别极大：出发地冬季严寒多雪，目的地冬季温和。" +
      "福冈是九州门户，机场离市中心很近；札幌是北海道枢纽。这条线适合把北海道和九州两段行程连起来，中间不必回东京中转。" +
      "从北海道出发，到福冈基本用不上厚羽绒，换季衣物提前准备；夏季两地都可能有雷雨，福冈还要留意台风。",
    "en-US":
      "Sapporo to Fukuoka is a little over two hours and one of the longest domestic routes in Japan — from snow country to the mild south. The climates are very different: severe, snowy winters where you start, mild winters where you land." +
      "Fukuoka is the gateway to Kyushu with the airport close to the centre; Sapporo is the hub for Hokkaido. This route lets you join a Hokkaido leg and a Kyushu leg without backtracking through Tokyo." +
      "Coming from Hokkaido, you will not need a heavy down coat in Fukuoka, so plan a change of clothes; both cities can have thunderstorms in summer, and Fukuoka also has typhoons to watch.",
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
      "Eastward the land rises into a mass of high mountains: Daisetsuzan, the volcanic group at the centre of Hokkaido, whose main peak Asahidake exceeds 2,000 m and is the highest in Hokkaido. It is far colder here than at the same latitude on Honshu, the alpine zone starts low, snow comes early and lingers, and craters and lava plateaus are clearly visible; it is the largest national park in Hokkaido." +
      "Beyond Daisetsuzan the land in eastern Hokkaido becomes gentle hills and terraces, forest and pasture interlocking, thinly peopled. Memanbetsu Airport, near Abashiri, is one of the gateways to the Shiretoko Peninsula." +
      "The Shiretoko Peninsula reaches from eastern Hokkaido into the Sea of Okhotsk — an almost roadless volcanic ridge with steep sea cliffs on both sides, drift ice against its shore in winter, and World Heritage status.",
    },
    travel: {
    "zh-CN":
      "札幌到女满别约五十分钟。道东（网走、知床一带）气候比札幌更冷更干，冬季严寒，一二月鄂霍次克海会有流冰靠岸，是这一带冬季的特色；夏季凉爽宜人。" +
      "女满别机场服务网走、北见、知床方向。知床的自然中心是知床五湖和沿海的观光船，冬季有流冰浮潜和观鸟。区域内公共交通稀疏，多数人租车。" +
      "知床部分区域为保护棕熊有进入限制和向导要求，遇到野生动物保持距离、不投喂。冬季道路结冰，自驾要有雪地经验和冬胎。",
    "en-US":
      "Sapporo to Memanbetsu is about 50 minutes. Eastern Hokkaido (around Abashiri and Shiretoko) is colder and drier than Sapporo, with severe winters; in January and February drift ice reaches the Sea of Okhotsk shore, the signature sight of the area in winter, while summers are cool and pleasant." +
      "Memanbetsu Airport serves Abashiri, Kitami and the Shiretoko direction. Shiretoko's nature centres on the Shiretoko Five Lakes and coastal sightseeing boats, with drift-ice snorkelling and birdwatching in winter. Public transport in the area is sparse, so most people hire a car." +
      "Parts of Shiretoko have entry restrictions and guide requirements to protect brown bears; keep your distance from wildlife and do not feed it. Winter roads are icy, so driving needs snow experience and winter tyres.",
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
      "Beyond the lake you enter the high mountains of central Honshu — the Japanese Alps. The Hida, Kiso and Akaishi ranges lie side by side, the highest mountains in Japan, with permanent snow on the crests." +
      "The route follows the spine of Honshu north-east into the Tohoku region. On the border of Aomori and Akita, a near-circular deep-blue lake sits among the mountains: Lake Towada, a lake filling a caldera, whose water drains out through the Oirase stream." +
      "Across the Tsugaru Strait into Hokkaido, and finally the Ishikari Plain and Sapporo facing Ishikari Bay. One flight has passed a Kansai lake, the high mountains of Honshu and a Tohoku crater lake.",
    },
    travel: {
    "zh-CN":
      "大阪到札幌约两小时。这条线把关西和北海道直接连起来，不用绕东京。两地气候差别大：大阪夏季闷热、冬季温和；北海道夏季凉爽、冬季严寒多雪。" +
      "从关西出发去北海道，夏季带一件外套应付早晚温差就够；冬季则要按北海道的标准准备防寒防滑装备。北海道城市间距离大，建议先想好是以札幌为枢纽当日往返，还是分段住宿。",
    "en-US":
      "Osaka to Sapporo is about two hours and links Kansai directly with Hokkaido without going via Tokyo. The climates differ a lot: Osaka has muggy summers and mild winters, Hokkaido has cool summers and severe, snowy winters." +
      "Coming from Kansai in summer, a jacket for the morning and evening chill is enough; in winter, prepare for the cold and ice to Hokkaido standards. Distances between Hokkaido towns are large, so decide in advance whether to base in Sapporo for day trips or to stay in stages.",
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
      "The route follows the Inland Sea south-west, crosses southern Kyushu and reaches the open sea. A near-circular island that is almost all mountain appears: Yakushima." +
      "Yakushima is a single uplifted block of granite, a little over 20 km across, whose central peak Miyanoura-dake approaches 2,000 m and is the highest in Kyushu. Mountains this high wring the moisture out of the air above the Kuroshio Current, making Yakushima one of the wettest places in Japan — locally they say it \"rains 35 days a month\". The heavy rain sustains thousand-year-old Yakusugi cedars, with forest running from the coast right up to the high peaks; it is a World Heritage Site.",
    },
    travel: {
    "zh-CN":
      "大阪到屋久岛航班少、多为小型螺旋桨机，也可经鹿儿岛转船或转机。屋久岛全年多雨、湿度高，山上和海边天气差别很大：海边亚热带温暖，山上可能很冷甚至下雪，务必带全套防水装备。" +
      "岛上主要活动是徒步（白谷云水峡、绳文杉往返约十小时）、看海岸和温泉。环岛公路一圈约百公里，多数人租车。徒步进核心区有人数管理和须知，绳文杉线路当天往返很累、要早出发，雨天步道湿滑。" +
      "台风季（夏秋）航班和渡轮易停，行程要留出机动时间。",
    "en-US":
      "Osaka to Yakushima has few flights, mostly small turboprops; you can also connect via Kagoshima by ferry or plane. Yakushima is wet all year with high humidity, and the weather differs sharply between coast and mountains: the coast is subtropical and warm, while the peaks can be very cold or snowy, so bring full waterproof gear." +
      "The main activities on the island are hiking (the Shiratani Unsuikyo gorge; the Jomon Sugi round trip is about ten hours), the coast and hot springs. The island loop road is about 100 km, and most people hire a car. Hiking into the core area has capacity management and rules; the Jomon Sugi route is a tiring same-day return, so start early, and trails are slippery in rain." +
      "In the typhoon season (summer and autumn) flights and ferries are easily suspended, so leave slack in your plans.",
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
      "Westward you enter the high mountains of central Honshu — the Japanese Alps. The Hida, Kiso and Akaishi ranges lie side by side with permanent snow on the crests, and it is this barrier that divides Honshu into two climates: the Pacific side has dry, low-snow winters, while the Sea of Japan side has cloudy winters with heavy snow." +
      "Descending to the Sea of Japan side, a distinct patch of yellow appears at the coast: the Tottori Sand Dunes — monsoon winds and currents pile river-borne sand onto the shore, forming a belt of coastal sand more than ten kilometres long with dunes tens of metres high, the largest coastal dune field in Japan. Green fields and pine woods lie right beyond the dunes, a strong contrast." +
      "The city of Tottori is next to the dunes. In a little over an hour you have flown from the Pacific-coast plain to the Sea of Japan dunes.",
    },
    travel: {
    "zh-CN":
      "东京到鸟取约一个半小时。鸟取在日本海一侧，冬季阴冷、降雪比太平洋侧多，夏季闷热，春秋较舒适。" +
      "鸟取的核心是鸟取沙丘和旁边的沙之美术馆，可以徒步、骑骆驼或玩滑沙板；砂丘外还有白兔海岸、浦富海岸的海蚀地形。往西是米子、境港（水木茂的妖怪街）和大山方向。" +
      "沙丘上没有遮阴，夏季正午很热、要带水和防晒；起风时会有飞沙，注意护眼和相机。当地公共交通班次少，去周边多靠租车或包车。",
    "en-US":
      "Tokyo to Tottori is about an hour and a half. Tottori is on the Sea of Japan side, with grey, cold winters and more snow than the Pacific side, muggy summers, and comfortable springs and autumns." +
      "Tottori centres on the Sand Dunes and the adjacent Sand Museum, with walking, camel rides and sandboarding; beyond the dunes are the sea-eroded landforms of the Hakuto and Uradome coasts. West lie Yonago, Sakaiminato (the yokai street of Shigeru Mizuki) and Mount Daisen." +
      "There is no shade on the dunes; summer midday is very hot, so carry water and sun protection, and when the wind picks up there is blowing sand — protect your eyes and camera. Local public transport is infrequent, so a hire car or charter is usual for getting around.",
    },
  },

  "pvg-hnd": {
    study: {
    "zh-CN":
      "上海飞东京，是从中国东部的大平原，越过东海，飞到日本本州的大平原。起飞时脚下是长江三角洲——长江最后一段淤积、加上人工围垦形成的低平原，河网最密、城镇连成一片。" +
      "离开海岸线，下面就是东海，一片开阔的浅海，看不到岸。航程大部分在海上，晴天能看到零星的岛屿和往来的货船。" +
      "接近日本时，海上先出现一座轮廓极其对称的圆锥形雪山，那是富士山——一座孤立的层状火山，从飞机上很远就能认出来。越过富士所在的丘陵，进入关东平原：日本面积最大的平原，几乎被东京都市圈完全覆盖，方格街区一直铺到山脚。飞机沿东京湾下降到羽田。一趟航班，把亚欧大陆边缘的三角洲和岛国的平原连在一起。",
    "en-US":
      "Shanghai to Tokyo flies from the great plain of eastern China, across the East China Sea, to the great plain of Honshu. On take-off you are over the Yangtze Delta — the low plain of the river's final reach, with the densest water network and continuous built-up land." +
      "Past the coast is the East China Sea, an open shallow sea with no land in sight. Most of the flight is over water, with scattered islands and cargo ships visible on a clear day." +
      "Approaching Japan, an almost perfectly symmetrical snow-capped cone appears out of the sea: Mount Fuji, an isolated stratovolcano recognisable from far off. Past the hills around Fuji you cross the Kanto Plain — the largest plain in Japan, almost entirely covered by the Tokyo metropolitan area, its grid of blocks reaching the foot of the mountains. The plane descends along Tokyo Bay to Haneda. One flight has joined a delta on the edge of the Eurasian landmass to the plain of an island country.",
    },
    travel: {
    "zh-CN":
      "上海到东京约三小时。两座城市都在东部平原上，气候接近：夏季闷热多雨，冬季东京更干冷、少雪。" +
      "东京是日本的门户和最大城市，成田机场离市区较远（快线约一小时），羽田近得多。市内地铁和 JR 线密如蛛网，一张 Suica/PASMO 刷遍全城。饮食、购物、博物馆、近郊的镰仓箱根日光都很方便。" +
      "入境日本对肉类、水果、部分药品有限制，如实申报。签证政策按国籍不同，以日本外务省最新公布为准，行前确认并留出办理时间。地震偶发，留意住处的避难指引。",
    "en-US":
      "Shanghai to Tokyo is about three hours. Both cities are on eastern plains with similar climates: hot, humid summers, while Tokyo's winters are drier and colder with little snow." +
      "Tokyo is Japan's gateway and largest city; Narita Airport is far from the centre (about an hour by express) and Haneda is much closer. The subway and JR lines form a web, and a single Suica or PASMO card covers the city. Food, shopping, museums, and day trips to Kamakura, Hakone and Nikko are all easy." +
      "Entry to Japan restricts meat, fruit and some medicines — declare honestly. Visa rules vary by nationality; check the latest from Japan's Ministry of Foreign Affairs and leave time to arrange one. Earthquakes occur occasionally; note the evacuation guidance at your accommodation.",
    },
  },

  "pek-hnd": {
    study: {
    "zh-CN":
      "北京飞东京，是从华北平原飞过黄海，到日本关东平原。起飞时脚下是华北平原的北缘——由黄河、海河等河流冲积成的大平原，方格农田和城镇密集，地面几乎没有起伏。" +
      "往东南飞，右前方会出现一片明显隆起的丘陵，那是山东丘陵：华北平原中间的一块基岩地块，泰山等山头从平原里凸出来。" +
      "过了山东半岛就是黄海，再往东是开阔的外海，航程中段基本在水上。接近日本时进入关东平原——日本面积最大的平原，几乎被东京都市圈完全覆盖，方格街区一直铺到丘陵脚下。飞机沿东京湾下降到羽田。一趟航班，从中国的首都飞到日本的首都，中间隔着两片相连的浅海。",
    "en-US":
      "Beijing to Tokyo flies from the North China Plain across the Yellow Sea to the Kanto Plain of Japan. On take-off you are over the northern edge of the North China Plain — a lowland built by the Yellow, Hai and other rivers, dense with fields and towns, almost without relief." +
      "Flying south-east, a distinct band of higher hills appears ahead to the right: the Shandong Hills, a block of bedrock rising out of the middle of the plain, with summits such as Tai Shan standing above it." +
      "Past the Shandong Peninsula is the Yellow Sea, and then open sea, with the middle of the flight over water. Approaching Japan you reach the Kanto Plain — the largest plain in Japan, almost entirely covered by the Tokyo metropolitan area, its grid of blocks reaching the foot of the hills. The plane descends along Tokyo Bay to Haneda. One flight has gone from the capital of China to the capital of Japan, across two connected shallow seas.",
    },
    travel: {
    "zh-CN":
      "北京到东京约三个半小时。北京冬季干冷、春季多风沙，东京全年更湿润、冬季少雪。" +
      "东京是日本最大的城市和主要门户。羽田机场离市区近、地铁直达；成田稍远。市内轨道交通极发达，刷 Suica/PASMO 即可。以东京为基地可去横滨、镰仓、箱根（看富士山）、日光。" +
      "入境日本对肉类、水果、部分药品有限制，如实申报。签证按国籍不同，以日本外务省最新公布为准。夏季闷热要防暑，台风季（约7–10月）留意航班。",
    "en-US":
      "Beijing to Tokyo is about three and a half hours. Beijing has dry cold winters and dusty, windy springs; Tokyo is more humid year-round with little winter snow." +
      "Tokyo is Japan's largest city and main gateway. Haneda Airport is close to the centre with a direct metro link; Narita is farther out. Urban rail is extensive — tap in with Suica or PASMO. From Tokyo you can reach Yokohama, Kamakura, Hakone (views of Fuji) and Nikko." +
      "Entry to Japan restricts meat, fruit and some medicines — declare honestly. Visa rules vary by nationality; check the latest from Japan's Ministry of Foreign Affairs. Summer is muggy — take heat precautions — and in the typhoon season (about July to October) watch your flights.",
    },
  },

  "pvg-kix": {
    study: {
    "zh-CN":
      "上海飞大阪，是从长江三角洲越过东海，到日本关西的城市带。起飞时脚下是长江三角洲的低平原，河网密布、城镇连片。" +
      "离开海岸就是东海，一片开阔的浅海。航程大部分在水上，晴天能看到往来的船只。" +
      "接近日本时，海上出现一片布满岛屿的平静水域，那是濑户内海——本州、四国、九州之间的内海，两岸是狭窄的沿海平原和港口城市，几座跨海大桥把三块陆地连起来。" +
      "濑户内海的东端就是大阪湾，湾岸的低地是大阪平原，大阪、京都、神户连成一片。关西机场建在大阪湾南部的一座人工岛上，飞机从海上进近降落。一趟航班，从中国东部的三角洲，飞到了日本的第二大城市群。",
    "en-US":
      "Shanghai to Osaka flies from the Yangtze Delta across the East China Sea to the Kansai city belt of Japan. On take-off you are over the low plain of the Yangtze Delta, water-netted and city-covered." +
      "Past the coast is the East China Sea, an open shallow sea, with most of the flight over water and passing ships visible on a clear day." +
      "Approaching Japan, a calm island-filled stretch of water appears: the Seto Inland Sea — the sea between Honshu, Shikoku and Kyushu, with narrow coastal plains and port cities on either shore and long bridges linking the three landmasses." +
      "At its eastern end is Osaka Bay, and the lowland along the bay is the Osaka Plain, where Osaka, Kyoto and Kobe run together. Kansai Airport is built on a man-made island in the southern part of the bay, and the plane makes its approach from the sea. One flight has gone from a delta in eastern China to the second-largest urban region of Japan.",
    },
    travel: {
    "zh-CN":
      "上海到大阪约两个多小时。两地夏季都闷热多雨，大阪冬季较温和、少雪。" +
      "关西机场在海上人工岛，特急或普通电车约35–75分钟到大阪、京都市区。大阪是关西的中心，以吃闻名；从这里去京都、奈良、神户、姬路都在一小时内。市内地铁加 JR 环状线，刷 IC 卡通用。" +
      "入境日本对肉类、水果、部分药品有限制，如实申报。签证按国籍不同，以日本外务省最新公布为准。樱花期（4月初）和红叶期（11月）关西最挤，京都热门寺院要趁早。",
    "en-US":
      "Shanghai to Osaka is a little over two hours. Both have hot, humid summers with a lot of rain; Osaka's winters are milder with little snow." +
      "Kansai Airport is on a man-made island in the sea, about 35–75 minutes to central Osaka and Kyoto by express or local train. Osaka is the centre of Kansai and famous for its food; Kyoto, Nara, Kobe and Himeji are all within an hour. The subway and the JR Loop Line take an IC card." +
      "Entry to Japan restricts meat, fruit and some medicines — declare honestly. Visa rules vary by nationality; check the latest from Japan's Ministry of Foreign Affairs. Kansai is busiest during the cherry blossom (early April) and autumn leaves (November) — visit the popular Kyoto temples early.",
    },
  },

  "syd-per": {
    study: {
    "zh-CN":
      "悉尼飞珀斯，是横穿整个澳大利亚大陆，从东海岸飞到西海岸，是世界上最长的国内航线之一。起飞后不久，西边出现一道被深谷切开的砂岩台地，那是蓝山——大分水岭的一段，尤加利树林在阳光下泛出蓝色的雾气。" +
      "翻过大分水岭，地面转为开阔平缓的内陆平原。飞机会飞越墨累-达令河的水系——澳大利亚最大的河流系统，在干旱的平原上蜿蜒，河边是一串灌溉农田和小镇。" +
      "再往西，绿色渐渐消失，进入大维多利亚沙漠：红褐色的沙垄和大片低矮灌丛，几乎没有道路和居民点。接着地面变得异常平坦，这就是纳拉伯平原——一整块石灰岩台地，几乎不长树，南缘是笔直的悬崖直插南大洋，横贯大陆的铁路和公路在这里走一条几百公里的直线。" +
      "越过纳拉伯，重新出现农田和小麦带，飞机在印度洋边的珀斯降落。珀斯是世界上最孤立的大城市之一，离最近的大城市有几千公里。",
    "en-US":
      "Sydney to Perth crosses the whole Australian continent, east coast to west, and is one of the longest domestic flights in the world. Soon after take-off, a sandstone plateau cut by deep valleys appears to the west: the Blue Mountains, part of the Great Dividing Range, where the eucalypt forest gives off a blue haze in the sun." +
      "Over the range, the land opens out into flat inland plains. The route crosses the Murray–Darling system — the largest river system in Australia — winding across the dry plains, with a string of irrigated farms and small towns along the water." +
      "Farther west the green fades into the Great Victoria Desert: red-brown sand ridges and low scrub, with almost no roads or settlements. Then the ground becomes remarkably flat — the Nullarbor Plain, a single slab of limestone that grows almost no trees, its southern edge a straight line of cliffs dropping into the Southern Ocean, where the trans-continental railway and highway run dead straight for hundreds of kilometres." +
      "Past the Nullarbor, farmland and the wheatbelt return, and the plane lands at Perth on the Indian Ocean — one of the most isolated large cities in the world, thousands of kilometres from the next.",
    },
    travel: {
    "zh-CN":
      "悉尼到珀斯飞约五小时，加上2–3小时时差（珀斯比悉尼晚），实际是大半天。澳大利亚是南半球国家，季节与北半球相反——12月至2月是夏天。" +
      "珀斯是西澳的首府，气候是地中海式：夏季干热、冬季温和多雨。城市沿天鹅河展开，国王公园、弗里曼特尔的港口老城、往北的尖峰石阵、往南玛格丽特河的酒庄和海岸是主要去处。" +
      "跨州基本靠飞机，城市之间距离极大。全澳紫外线都很强，防晒是常识。入境对食品、木制品、动植物制品检查极严，务必如实申报；多数国家公民需提前在线申请电子旅行许可（ETA），落地不能补办。",
    "en-US":
      "Sydney to Perth is about five hours, plus a 2–3 hour time difference (Perth is behind), so it takes most of a day. Australia is in the southern hemisphere, so the seasons are reversed — December to February is summer." +
      "Perth is the capital of Western Australia, with a Mediterranean climate: dry, hot summers and mild, wet winters. The city runs along the Swan River; Kings Park, the port old town of Fremantle, the Pinnacles to the north, and the wineries and coast of Margaret River to the south are the main draws." +
      "Travel between states is essentially by air, and the distances are huge. UV is strong everywhere in Australia — sun protection is basic sense. Border checks on food, wood and plant and animal products are strict, so declare honestly; citizens of most countries need to apply online for an ETA before departure, which cannot be arranged on arrival.",
    },
  },

  "syd-cns": {
    study: {
    "zh-CN":
      "悉尼飞凯恩斯，是沿着澳大利亚东海岸往北，从温带飞到热带。起飞后一直有一道山脉在飞机左侧相伴，那是大分水岭——澳大利亚最长的山系，从东南一直延伸到约克角半岛，把湿润的沿海和干旱的内陆分开，也是众多河流的分水岭。" +
      "沿途海岸线外有一座巨大的沙岛，那是弗雷泽岛（K'gari）——世界上最大的沙岛，整座岛由沙构成，上面却长着雨林、有淡水湖，是原住民布奇拉·布奇拉人的传统土地。" +
      "越往北，海水越蓝，珊瑚礁越密。快到凯恩斯时，右侧海面上出现深浅斑驳的一大片浅蓝，那是大堡礁——世界上最大的珊瑚礁系统，由几千个独立的礁体和岛屿组成，沿昆士兰海岸延伸两千多公里，从飞机上能清楚看到礁盘、潟湖和深水航道的分界。凯恩斯就是进入大堡礁的主要门户。",
    "en-US":
      "Sydney to Cairns runs north up the east coast of Australia, from the temperate zone into the tropics. Soon after take-off a range of mountains keeps pace on the left: the Great Dividing Range, the longest mountain system in Australia, running from the south-east all the way to Cape York, separating the humid coast from the dry interior and forming the divide for many rivers." +
      "Off the coast along the way is a huge sand island: K'gari (Fraser Island), the largest sand island in the world — the whole island is made of sand, yet it carries rainforest and freshwater lakes, and it is the traditional Country of the Butchulla people." +
      "The farther north, the bluer the sea and the denser the reefs. Near Cairns, a mottled expanse of pale blue appears on the sea to the right: the Great Barrier Reef, the largest coral reef system in the world, made up of thousands of separate reefs and islands, running more than 2,000 km along the Queensland coast; from the plane you can clearly see the line between reef flats, lagoons and the deep-water channels. Cairns is the main gateway to the reef.",
    },
    travel: {
    "zh-CN":
      "悉尼到凯恩斯飞约三小时。凯恩斯在热带，全年炎热潮湿、分旱季雨季：5–10月旱季天气最稳定、也是旺季；11–4月湿季闷热多雨，还有热带气旋和刺水母（海黄蜂），海滩游泳要看季节和防护网。" +
      "凯恩斯是进入大堡礁和昆士兰热带雨林的门户：坐船或飞机上礁看珊瑚，往北去道格拉斯港和戴恩树雨林，往西上高原（库兰达、阿瑟顿）。城市本身不大，海滨有一个人工泻湖泳池。" +
      "上礁浮潜、潜水选有资质的经营者，检查装备和保险。全年强防晒，雨林里注意防蚊、别碰不认识的植物（有会蜇人的刺树）。",
    "en-US":
      "Sydney to Cairns is about three hours. Cairns is in the tropics, hot and humid all year with a dry and a wet season: the dry season (May–October) has the most settled weather and is high season; the wet (November–April) is muggy and rainy, with tropical cyclones and marine stingers (box jellyfish), so beach swimming depends on the season and the stinger nets." +
      "Cairns is the gateway to the Great Barrier Reef and the Queensland tropical rainforest: out to the reef by boat or plane for the coral, north to Port Douglas and the Daintree, west up to the Tablelands (Kuranda, Atherton). The city itself is small, with an artificial lagoon pool on the esplanade." +
      "For snorkelling and diving on the reef, choose licensed operators and check equipment and insurance. Use strong sun protection year-round, and in the rainforest guard against mosquitoes and do not touch unfamiliar plants (there is a stinging tree).",
    },
  },

  "mel-syd": {
    study: {
    "zh-CN":
      "墨尔本飞悉尼，是澳大利亚最繁忙的航线，也是世界上客运量最大的航线之一。虽然只有一个多小时，却飞越了澳大利亚东南部最高的山地。" +
      "起飞后向东北，很快看到一片带雪的高地，那是澳大利亚阿尔卑斯山脉——大分水岭的最高一段，主峰科修斯科山是澳大利亚大陆的最高点。这里冬季积雪，是澳大利亚少有的滑雪区；雪水汇成墨累河等大河，从这里流向内陆。" +
      "沿着大分水岭的走向继续往北，山势不高但连续，把东边狭窄的沿海平原和西边的内陆分开。接近悉尼时，右前方出现被深谷切开的砂岩台地，那是蓝山，尤加利林在阳光下泛蓝。飞机越过蓝山，沿海岸下降到悉尼——这座城市建在一个巨大的天然深水港周围。",
    "en-US":
      "Melbourne to Sydney is the busiest route in Australia and one of the busiest in the world by passenger numbers. It takes only a little over an hour, but it flies over the highest mountains in south-eastern Australia." +
      "Heading north-east after take-off, a snow-streaked upland soon appears: the Australian Alps, the highest part of the Great Dividing Range, whose main peak, Mount Kosciuszko, is the highest point on the Australian mainland. Snow lies here in winter, in one of the few skiing areas in Australia; the meltwater feeds the Murray and other big rivers that flow inland from here." +
      "Following the line of the Great Dividing Range north, the mountains are not high but continuous, separating the narrow coastal plain in the east from the interior in the west. Approaching Sydney, a sandstone plateau cut by deep valleys shows ahead to the right: the Blue Mountains, the eucalypt forest hazed blue in the sun. The plane crosses them and descends along the coast to Sydney, a city built around a huge natural deep-water harbour.",
    },
    travel: {
    "zh-CN":
      "墨尔本到悉尼飞约一个半小时，两地在同一时区。两座城市气质不同：墨尔本文艺、以咖啡和小巷闻名，天气“一天有四季”、变化快；悉尼外向、以港湾和海滩为中心。" +
      "悉尼的看点集中在港湾：歌剧院、海港大桥、坐渡轮去曼利或塔龙加动物园；邦迪到库吉的海崖步道；往西约90分钟到蓝山。海滩游泳只在插着红黄旗的区域、听从救生员，注意离岸流。" +
      "南半球季节相反，12–2月是盛夏、海滩旺季，价格最高；春秋（9–11月、3–5月）气候最舒服。入境海关对食品和动植物制品查得严，如实申报。",
    "en-US":
      "Melbourne to Sydney is about an hour and a half, and the two cities are in the same time zone. They have different characters: Melbourne is arty, known for coffee and laneways, with \"four seasons in one day\" and fast-changing weather; Sydney is outgoing and centred on its harbour and beaches." +
      "Sydney's sights cluster around the harbour: the Opera House, the Harbour Bridge, ferries to Manly or Taronga Zoo; the Bondi-to-Coogee clifftop walk; and about 90 minutes west, the Blue Mountains. Swim only between the red and yellow flags, follow the lifeguards, and watch for rip currents." +
      "In the southern hemisphere the seasons are reversed — December to February is high summer and beach high season, the most expensive; spring and autumn (September–November, March–May) have the most comfortable weather. Customs checks on food and plant and animal products are strict — declare honestly.",
    },
  },

  "mel-per": {
    study: {
    "zh-CN":
      "墨尔本飞珀斯，是从澳大利亚东南角飞到西南角，跨越大陆南部的干旱地带。起飞后向西，很快看到一列孤立的砂岩山脊从平原上凸起，那是格兰坪山（Gariwerd）——大分水岭西端的一段，陡直的岩壁和岩画使它成为原住民的重要文化地。" +
      "过了格兰坪，地面转为开阔的麦田和牧场，再往西绿色消失，进入纳拉伯平原：一整块几乎不长树的石灰岩台地，异常平坦，南缘是笔直的悬崖对着南大洋。飞机沿海岸线以内飞过这段。" +
      "纳拉伯以北是大维多利亚沙漠，红褐色的沙垄和低矮灌丛一直铺到地平线，几乎没有人烟。越过沙漠西缘，重新出现小麦带和农田，飞机在印度洋边的珀斯降落。整条航线，大部分时间脚下是澳大利亚人口最稀、最干旱的地带。",
    "en-US":
      "Melbourne to Perth flies from the south-eastern corner of Australia to the south-western, across the dry country of the continent's south. Heading west after take-off, an isolated line of sandstone ridges soon rises from the plain: the Grampians (Gariwerd), part of the western end of the Great Dividing Range, whose steep rock walls and rock art make it an important cultural place for Aboriginal people." +
      "Past the Grampians the land becomes open wheat fields and grazing country, then the green fades into the Nullarbor Plain: a single slab of limestone that grows almost no trees, remarkably flat, its southern edge a straight line of cliffs facing the Southern Ocean. The route flies over this stretch just inland of the coast." +
      "North of the Nullarbor is the Great Victoria Desert, red-brown sand ridges and low scrub to the horizon, almost unpeopled. Over the desert's western edge, the wheatbelt and farmland return, and the plane lands at Perth on the Indian Ocean. For most of the flight, the ground below is the driest, least-peopled belt of Australia.",
    },
    travel: {
    "zh-CN":
      "墨尔本到珀斯飞约四小时，加上2–3小时时差（珀斯晚），实际是大半天。珀斯气候是地中海式：夏季干热、冬季温和多雨；墨尔本天气多变。" +
      "珀斯沿天鹅河展开，国王公园、弗里曼特尔、罗特尼斯岛（看短尾矮袋鼠）、往北的尖峰石阵、往南玛格丽特河是主要去处。西澳幅员极广，跨区域动辄几百上千公里，多坐飞机。" +
      "全澳紫外线强，防晒是常识。入境对食品、木制品、动植物制品查得严，如实申报；西澳州内跨境（如去往北部）有时也有农产品检查。",
    "en-US":
      "Melbourne to Perth is about four hours, plus a 2–3 hour time difference (Perth is behind), so it takes most of a day. Perth has a Mediterranean climate — dry hot summers, mild wet winters — while Melbourne's weather is changeable." +
      "Perth runs along the Swan River; Kings Park, Fremantle, Rottnest Island (for the quokkas), the Pinnacles to the north and Margaret River to the south are the main draws. Western Australia is vast, with hundreds or thousands of kilometres between regions, mostly covered by air." +
      "UV is strong everywhere in Australia — sun protection is basic sense. Border checks on food, wood and plant and animal products are strict, so declare honestly; there are sometimes produce checks within WA too (for example heading north).",
    },
  },

  "mel-adl": {
    study: {
    "zh-CN":
      "墨尔本飞阿德莱德，是沿着澳大利亚南岸往西的一段短程航线。起飞后向西南到达海岸，右下方是维多利亚州的大洋路一带——海浪把石灰岩海崖侵蚀成一根根孤立的石柱，站在海里，这就是十二门徒岩。石柱会因为海蚀不断倒塌、也会有新的形成。" +
      "转向西，内陆出现那列孤立的砂岩山脊——格兰坪山（Gariwerd），陡壁和岩画。" +
      "再往西是墨累河的下游河段：这条澳大利亚最大的河在这里已经流了很远，在平原上绕出大弯，最后穿过一串潟湖（库容湖）注入南大洋，河口是一片沙洲和湿地。飞机越过墨累河口一带，沿海岸下降到阿德莱德——一座三面被丘陵和葡萄园环抱、朝向海湾的规划城市。",
    "en-US":
      "Melbourne to Adelaide is a short flight west along the southern coast of Australia. Heading south-west after take-off to the coast, below to the right is the Great Ocean Road area of Victoria — waves have eroded the limestone sea cliffs into a line of isolated stacks standing in the sea, the Twelve Apostles. The stacks keep collapsing to erosion, and new ones form." +
      "Turning west, the isolated line of sandstone ridges appears inland: the Grampians (Gariwerd), with their steep walls and rock art." +
      "Farther west is the lower Murray River: Australia's largest river has already run a long way by here, looping across the plain in big bends and finally passing through a chain of lagoons (the Coorong) into the Southern Ocean, its mouth a spread of sandbars and wetland. The plane crosses the Murray mouth area and descends along the coast to Adelaide — a planned city ringed on three sides by hills and vineyards and facing a gulf.",
    },
    travel: {
    "zh-CN":
      "墨尔本到阿德莱德飞约一个多小时，阿德莱德比墨尔本晚半小时。阿德莱德生活节奏舒缓，被叫作“20分钟城市”。周边是澳大利亚重要的葡萄酒产区（巴罗萨谷、麦克拉伦谷、阿德莱德山）。" +
      "城里有中央市场、植物园、北阶文化区；往南是袋鼠岛（另安排两天，坐轮渡或小飞机），往东是墨累河与库容湖。" +
      "南半球季节相反，夏季（12–2月）干热、有热浪，注意补水防晒。入境和跨州对农产品有检查，如实申报。",
    "en-US":
      "Melbourne to Adelaide is a little over an hour, and Adelaide is half an hour behind Melbourne. Adelaide has an unhurried pace and is called a \"20-minute city\". Around it are important Australian wine regions (the Barossa Valley, McLaren Vale, the Adelaide Hills)." +
      "In the city there is the Central Market, the Botanic Garden and the North Terrace cultural precinct; south is Kangaroo Island (a separate two days, by ferry or light plane), and east are the Murray River and the Coorong lagoons." +
      "In the southern hemisphere the seasons are reversed; summer (December–February) is dry and hot with heatwaves, so drink plenty of water and use sun protection. There are produce checks on entry and between states — declare honestly.",
    },
  },

  "adl-ayq": {
    study: {
    "zh-CN":
      "阿德莱德飞乌鲁鲁，是从南岸的葡萄酒乡，一路往北飞进澳大利亚的“红色中心”。起飞后不久，右侧出现一列锯齿状的红色山脊，那是弗林德斯山脉——一片被强烈褶皱和侵蚀的古老山地，威尔潘那凹地是一个环形的天然山谷。" +
      "再往北，地面越来越干，出现一大片白色的盐壳，那是埃尔湖（卡蒂坦达）——澳大利亚最大的湖，也是大陆的最低点，多数年份是干的盐滩，只有大雨后才短暂积水成湖、引来大批水鸟。" +
      "继续往北进入沙漠腹地。快到目的地时，两组孤立的红色岩体从平坦的沙原上拔起：先是卡塔丘塔（奥尔加山）一簇圆丘状的巨岩，然后是乌鲁鲁——一整块砂岩，周长约十公里，边坡陡直，随日光变换颜色。它们是当地阿南古人的圣地，按传统不攀爬。飞机在旁边的尤拉拉降落。",
    "en-US":
      "Adelaide to Uluṟu flies from the wine country of the south coast straight north into the \"Red Centre\" of Australia. Soon after take-off, a jagged line of red ridges appears to the right: the Flinders Ranges, ancient mountains strongly folded and eroded, with Wilpena Pound a ring-shaped natural basin." +
      "Farther north the land dries out and a great white salt crust appears: Kati Thanda–Lake Eyre, the largest lake in Australia and the lowest point of the continent — a dry salt flat in most years, filling with water only briefly after heavy rain, when it draws great numbers of waterbirds." +
      "Continuing north into the desert interior, near the destination two isolated groups of red rock rise from the flat sand plain: first Kata Tjuta (the Olgas), a cluster of dome-shaped monoliths, then Uluṟu — a single block of sandstone about ten kilometres round, steep-sided, changing colour with the light. They are sacred places to the Aṉangu traditional owners and, by their wishes, are not climbed. The plane lands at Yulara beside them.",
    },
    travel: {
    "zh-CN":
      "阿德莱德到乌鲁鲁飞约两个多小时。这里是沙漠气候：白天极热（夏季常超40°C）、夜里凉甚至冷，昼夜温差大，几乎不下雨，苍蝇多（可备防蝇头网）。" +
      "游客住在尤拉拉的度假村，看日出日落时乌鲁鲁的颜色变化、沿岩石基部步行、去卡塔丘塔的风之谷徒步。乌鲁鲁是阿南古人的圣地，请遵守园区规定：不攀爬、部分区域不拍照。" +
      "带足水（每人每天数升）、防晒、遮阳帽和结实的鞋。夏季正午不宜户外活动，多数徒步要一早出发。",
    "en-US":
      "Adelaide to Uluṟu is a little over two hours. This is desert climate: extremely hot by day (often above 40°C in summer), cool or cold at night, a wide day-to-night range, almost no rain, and many flies (a fly net helps)." +
      "Visitors stay at the Yulara resort, watch Uluṟu change colour at sunrise and sunset, walk around the base of the rock, and hike the Valley of the Winds at Kata Tjuta. Uluṟu is a sacred place to the Aṉangu — follow the park's rules: no climbing, and no photography in some areas." +
      "Carry plenty of water (several litres per person per day), sun protection, a sun hat and sturdy shoes. Midday in summer is not for outdoor activity, and most walks should start early.",
    },
  },

  "bne-drw": {
    study: {
    "zh-CN":
      "布里斯班飞达尔文，是从东海岸的亚热带城市，斜穿昆士兰的内陆，飞到大陆最北端的“顶端地区”。起飞后往西北，很快离开沿海的山地和农田，进入大自流盆地上方——这是世界上最大的地下水盆地之一，地表是大片平坦的干旱牧场，靠钻井取深层地下水维持牧业，地面上能看到一个个圆形的蓄水池和放射状的畜道。" +
      "越往北越接近热带，草原上散布着白蚁丘和成片的桉树疏林。飞机掠过卡奔塔利亚湾一带，海岸线是大片红树林和潮滩。" +
      "接近达尔文时，右下方是卡卡杜——一大片季节性泛滥的湿地和石头高地。旱季是一条条干河道和水潭，湿季整片被水淹没；石壁上有数万年的原住民岩画。卡卡杜由传统所有者与国家公园共同管理。达尔文就在它西边的海岸上。",
    "en-US":
      "Brisbane to Darwin flies from a subtropical east-coast city diagonally across the Queensland interior to the \"Top End\" at the northern tip of the continent. Heading north-west after take-off, the route soon leaves the coastal hills and farmland and passes over the Great Artesian Basin — one of the largest groundwater basins in the world, its surface flat, dry grazing country kept in use for stock by bores tapping deep groundwater, with round tanks and radiating stock tracks visible on the ground." +
      "The farther north, the more tropical: termite mounds and open eucalypt woodland dot the plains. The route clips the Gulf of Carpentaria area, its coast broad mangrove and tidal flats." +
      "Approaching Darwin, below to the right is Kakadu — a large area of seasonally flooded wetland and stone country. In the dry season it is strings of dry channels and pools; in the wet the whole area floods. There is Aboriginal rock art on the escarpments going back tens of thousands of years. Kakadu is jointly managed by its traditional owners and the national park. Darwin is on the coast just to its west.",
    },
    travel: {
    "zh-CN":
      "布里斯班到达尔文飞约四小时，达尔文比布里斯班晚半小时。达尔文在热带，全年炎热，分旱季（约5–10月，天气稳定、是旺季）和湿季（约11–4月，闷热、雷暴、可能有热带气旋）。" +
      "达尔文是进入卡卡杜、利奇菲尔德国家公园和阿纳姆地方向的门户。北领地的水域（河口、部分水潭）有咸水鳄，只在标示安全的地方下水、听从当地指示。" +
      "全年强防晒、多补水，湿季注意防蚊（有蚊媒疾病）。进国家公园按传统所有者和园方的规定，部分区域不能进入或不能拍照。",
    "en-US":
      "Brisbane to Darwin is about four hours, and Darwin is half an hour behind Brisbane. Darwin is in the tropics, hot all year, with a dry season (about May–October, settled weather, high season) and a wet season (about November–April, muggy, thunderstorms, possible tropical cyclones)." +
      "Darwin is the gateway to Kakadu, Litchfield National Park and the Arnhem Land direction. Waters in the Northern Territory (estuaries, some pools) have saltwater crocodiles — only enter the water where it is signed safe and follow local advice." +
      "Use strong sun protection and drink plenty of water year-round, and in the wet season guard against mosquitoes (there are mosquito-borne diseases). In the national parks follow the rules of the traditional owners and the park; some areas cannot be entered or photographed.",
    },
  },

  "mel-hba": {
    study: {
    "zh-CN":
      "墨尔本飞霍巴特，是越过巴斯海峡，到隔海的岛屿州塔斯马尼亚。起飞后向南到达维多利亚海岸，下面是巴斯海峡——把塔斯马尼亚和澳大利亚大陆分开的一片浅海，历史上曾是连接两地的陆桥，海面上有金岛、弗林德斯岛等散落的小岛。" +
      "很快看到塔斯马尼亚岛的北岸。这座岛地形起伏、森林茂密，中西部是几乎无路的荒野和高原湖泊，被列为世界自然遗产；纬度更高、气候凉湿，冬季山上有雪。岛上很多地方保留着温带雨林和古老的树种。" +
      "飞机沿岛的东侧南下，越过中部的山地，在德文特河口的霍巴特降落。霍巴特背靠威灵顿山（kunanyi），是澳大利亚第二古老的首府城市。",
    "en-US":
      "Melbourne to Hobart crosses Bass Strait to Tasmania, the island state across the water. Heading south after take-off to the Victorian coast, below is Bass Strait — a shallow sea separating Tasmania from the mainland that was once a land bridge between them, with scattered islands such as King Island and Flinders Island on it." +
      "The north coast of Tasmania soon comes into view. The island is hilly and densely forested, and its central-west is almost roadless wilderness and highland lakes, listed as a World Heritage Area; it is at a higher latitude, cool and wet, with snow on the mountains in winter. Temperate rainforest and ancient tree species survive in many places." +
      "The plane runs south down the eastern side of the island, crosses the central mountains, and lands at Hobart on the mouth of the Derwent. Hobart sits below Mount Wellington (kunanyi) and is the second-oldest capital city in Australia.",
    },
    travel: {
    "zh-CN":
      "墨尔本到霍巴特飞约一个多小时，同一时区。塔斯马尼亚纬度高、气候凉：夏季（12–2月）温和宜人，是旺季；冬季冷、山上有雪，昼夜和天气变化快，四季都要带保暖和防水衣物。" +
      "霍巴特的看点有萨拉曼卡集市（周六）、威灵顿山看城市与河口、MONA 美术馆（坐船去）。往北是酒杯湾、摇篮山，往南是塔斯曼半岛和亚瑟港历史遗址。" +
      "岛上自驾方便但距离比看地图远、路多弯，注意夜间和黄昏的野生动物。徒步进荒野区要看天气、留行程给管理部门。入境和从大陆过来对农产品有严格检查。",
    "en-US":
      "Melbourne to Hobart is a little over an hour, in the same time zone. Tasmania is at a higher latitude and cool: summers (December–February) are mild and pleasant and are high season; winters are cold with snow on the mountains, and the weather and the day-to-night range change fast, so bring warm and waterproof clothing in every season." +
      "Hobart's draws include the Salamanca Market (Saturdays), Mount Wellington for the view over the city and river mouth, and MONA (reached by boat). North are Wineglass Bay and Cradle Mountain; south are the Tasman Peninsula and the Port Arthur historic site." +
      "Driving on the island is easy but distances are longer than they look and roads are winding — watch for wildlife at dusk and at night. Hiking into the wilderness needs weather checks and leaving your plans with the authorities. Produce checks on entry and from the mainland are strict.",
    },
  },

  "akl-wlg": {
    study: {
    "zh-CN":
      "奥克兰飞惠灵顿，是从北岛北端飞到南端，一趟就能看出北岛“中间是火山、两头是平缓丘陵”的结构。起飞时脚下是奥克兰的地峡和散布的死火山锥，随后进入怀卡托的牧场——一条大河在绿色的田野间蜿蜒，那是怀卡托河，新西兰最长的河。" +
      "往南，地面隆起成一片高地，中间出现一大片深蓝色的水，那是陶波湖——它其实是一座巨大的破火山口积水而成，是新西兰最大的湖。湖的南岸立着几座带雪的锥形山峰，最高的是鲁阿佩胡火山——北岛的最高点，一座仍在活动的层状火山，山顶有火口湖，冬季是滑雪场。" +
      "越过火山高原，进入北岛南部的山地。塔拉鲁瓦山脉是一列陡峭、多雨、常年被风吹的山岭，把惠灵顿一带和北岛西部的平原分开。飞机翻过塔拉鲁瓦，沿着一个几乎封闭的海港下降到惠灵顿——首都就挤在海港西岸的陡坡上。",
    "en-US":
      "Auckland to Wellington flies from the north of the North Island to the south, and in one trip shows how the island is built: volcanoes down the middle, gentle hills at each end. On take-off you are over the Auckland isthmus and its scattered extinct cones, then over the Waikato farm country — a big river winding through green fields, the Waikato, the longest river in New Zealand." +
      "Southward the land rises into an upland, and a great sheet of deep-blue water appears: Lake Taupō, which is in fact a huge caldera filled with water, the largest lake in New Zealand. On its southern shore stand several snow-streaked conical peaks, the highest being Mount Ruapehu — the highest point of the North Island, an active stratovolcano with a crater lake at the top and a ski field in winter." +
      "Beyond the volcanic plateau you enter the mountains of the southern North Island. The Tararua Range is a steep, wet, wind-scoured line of hills separating the Wellington area from the western plains. The plane crosses the Tararua and descends along an almost enclosed harbour to Wellington — the capital, squeezed onto the steep western shore.",
    },
    travel: {
    "zh-CN":
      "奥克兰到惠灵顿飞约一小时，同一时区。两地都属温带海洋性气候：奥克兰更暖更湿，惠灵顿以风大出名，天气变化都很快，随身带防风防水外套。南半球季节相反，12–2月是夏天。" +
      "惠灵顿市区紧凑、步行可达，蒂帕帕国家博物馆（免费）、缆车上山的植物园、古巴街一带的咖啡馆是主要去处；从这里坐渡轮跨库克海峡进入南岛。" +
      "多数国家公民入境新西兰前需在线申请电子旅行许可（NZeTA）并缴游客税，落地不能补办。入境对徒步鞋、帐篷、食品查得极严，务必清洗、如实申报。",
    "en-US":
      "Auckland to Wellington is about an hour, in the same time zone. Both have a temperate maritime climate: Auckland is warmer and wetter, Wellington is famously windy, and the weather changes fast in both — carry a windproof, waterproof jacket. In the southern hemisphere the seasons are reversed; December–February is summer." +
      "Wellington's centre is compact and walkable; Te Papa (the national museum, free), the Botanic Garden at the top of the cable car, and the cafés around Cuba Street are the main draws, and from here the ferry crosses Cook Strait to the South Island." +
      "Citizens of most countries need to apply online for an NZeTA and pay a visitor levy before arriving in New Zealand, which cannot be arranged on arrival. Border checks on hiking boots, tents and food are very strict — clean them and declare honestly.",
    },
  },

  "akl-chc": {
    study: {
    "zh-CN":
      "奥克兰飞基督城，是从北岛飞到南岛，越过分开两岛的库克海峡。起飞后先是怀卡托的牧场和陶波湖的火山高原。" +
      "接近北岛南端，海面出现一片被淹没的山谷形成的锯齿状海湾和半岛，那是马尔堡峡湾，也是库克海峡北岸。越过海峡就到南岛。" +
      "南岛一上岸就是山。凯库拉山脉几乎直接从海里拔起，山脚下是狭窄的海岸公路和铁路，海里常有鲸和海豚。" +
      "过了凯库拉，地面豁然开阔平坦，这就是坎特伯雷平原——南岛最大的平原，由南阿尔卑斯山上冲下来的砾石堆积而成，一条条辫状河从山口散开流向大海。基督城就建在平原东缘、班克斯半岛（一座古老的死火山）脚下。",
    "en-US":
      "Auckland to Christchurch flies from the North Island to the South Island, across Cook Strait, which separates them. After take-off come the Waikato farm country and the volcanic plateau around Lake Taupō." +
      "Near the southern end of the North Island, a jagged pattern of drowned-valley bays and peninsulas appears on the sea: the Marlborough Sounds, the northern shore of Cook Strait. Across the strait you are on the South Island." +
      "The South Island rises straight into mountains at the coast. The Kaikōura Ranges lift almost directly out of the sea, with a narrow coastal road and railway at their foot, and whales and dolphins often in the water." +
      "Past Kaikōura the land opens out flat: the Canterbury Plains, the largest plain on the South Island, built of gravel washed down from the Southern Alps, with braided rivers spreading from the mountain gaps toward the sea. Christchurch is built on the plains' eastern edge at the foot of Banks Peninsula, an old extinct volcano.",
    },
    travel: {
    "zh-CN":
      "奥克兰到基督城飞约一个半小时，同一时区。基督城比北岛凉、四季分明，夏季（12–2月）干爽，冬季有霜、偶尔焚风又干又热。" +
      "基督城是探索南岛的门户：往西经阿瑟隘口有观光火车到西海岸，往南到蒂卡波看星空、库克山、皇后镇，往北到凯库拉看鲸。市中心平坦、适合骑行，震后有很多用集装箱和街头艺术做的过渡空间。" +
      "入境新西兰对户外装备（徒步鞋、帐篷）和食品查得极严，务必清洗申报。多数国家公民需提前在线办 NZeTA 并缴游客税。",
    "en-US":
      "Auckland to Christchurch is about an hour and a half, in the same time zone. Christchurch is cooler than the North Island, with four clear seasons — dry summers (December–February) and frosty winters, with the occasional dry, hot föhn wind." +
      "Christchurch is the gateway to the South Island: west over Arthur's Pass with the scenic train to the West Coast, south to Tekapo for the night sky, to Aoraki/Mount Cook and Queenstown, north to Kaikōura for whales. The centre is flat and good for cycling, and since the earthquakes it has filled with transitional spaces made of shipping containers and street art." +
      "Border checks on outdoor gear (hiking boots, tents) and food entering New Zealand are very strict — clean them and declare. Citizens of most countries need an NZeTA and the visitor levy arranged online in advance.",
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
      "The South Island shore is the Marlborough Sounds: many drowned valleys reaching inland as long, thin bays and peninsulas, forest at the water's edge and quiet deep water in the arms." +
      "South of the Sounds, the Kaikōura Ranges rise almost straight from the sea, snow on the tops and a road and railway hugging the coast at their foot." +
      "Past Kaikōura the land becomes the open, flat Canterbury Plains, with braided rivers spreading from the gaps in the Southern Alps. Christchurch is on the plains' eastern edge. Short as it is, the flight takes in the whole sequence — strait, sounds, coastal mountains, great plain.",
    },
    travel: {
    "zh-CN":
      "惠灵顿到基督城飞约五十分钟。也可以坐跨海峡渡轮到皮克顿再换火车/自驾，全程大半天但风景很好。两地都属温带海洋性气候，基督城更凉、四季分明。" +
      "基督城是南岛的交通门户，往西、往南、往北都有经典的观光路线（TranzAlpine 观光火车、库克山、凯库拉观鲸）。市中心平坦、适合骑行。" +
      "跨海峡渡轮遇大风大浪会延误或取消，坐飞机更稳。入境对户外装备和食品查得极严。",
    "en-US":
      "Wellington to Christchurch is about 50 minutes. You can also take the Cook Strait ferry to Picton and continue by train or car — most of a day, but very scenic. Both have a temperate maritime climate; Christchurch is cooler, with four clear seasons." +
      "Christchurch is the transport gateway to the South Island, with classic scenic routes west, south and north (the TranzAlpine train, Aoraki/Mount Cook, whale watching at Kaikōura). The centre is flat and good for cycling." +
      "The Cook Strait ferry is delayed or cancelled in high wind and swell, so flying is more reliable. Border checks on outdoor gear and food are very strict.",
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
      "South-west the land rises, and the green pasture gives way to grey-gold dry uplands: the Mackenzie Basin, a high basin ringed by mountains, where glacier-fed lakes such as Tekapo and Pūkaki are milky blue because the water carries very fine rock flour ground by the ice. This area is thinly peopled with little light pollution — a dark-sky reserve." +
      "Farther west is the main crest of the Southern Alps — a line of high mountains under permanent snow and widespread glaciers, with the highest peak, Aoraki/Mount Cook, close by. The western side, facing the moist air off the Tasman Sea, has extreme rainfall and rainforest; the eastern side is dry." +
      "Over the divide the ground drops away and a dark Z-shaped lake appears: Lake Wakatipu, with Queenstown on a bay and the steep Remarkables on the far shore.",
    },
    travel: {
    "zh-CN":
      "基督城到皇后镇飞约一小时。皇后镇在山的背风侧，属温带半干旱气候：夏季温暖干爽（徒步、水上活动旺季），冬季寒冷有雪（滑雪季，6–8月），昼夜温差大，两个旺季住宿都贵、要早订。" +
      "皇后镇是新西兰的户外运动中心：天际缆车、坐老蒸汽船 TSS 厄恩斯劳号游湖、蹦极跳伞喷射快艇（选正规经营者），往格林诺奇、箭镇、瓦纳卡自驾。去米尔福德峡湾一日游单程约4小时山路。" +
      "冬季山路可能要带防滑链，查路况。入境对户外装备和食品查得极严。",
    "en-US":
      "Christchurch to Queenstown is about an hour. Queenstown is on the lee side of the mountains, with a temperate semi-arid climate: warm, dry summers (the hiking and water-sports high season) and cold, snowy winters (the ski season, June–August), a wide day-to-night range, and expensive, early-booked accommodation in both peaks." +
      "Queenstown is New Zealand's outdoor-sports centre: the Skyline Gondola, a cruise on the historic steamship TSS Earnslaw, bungy, skydiving and jetboating (use licensed operators), and drives to Glenorchy, Arrowtown and Wānaka. The Milford Sound day trip is about a 4-hour mountain drive each way." +
      "In winter, mountain roads may need chains — check road conditions. Border checks on outdoor gear and food are very strict.",
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
      "Rotorua comes up quickly. It sits in an old caldera, and from the air you can see the steaming geothermal areas — geysers, boiling mud pools, brightly coloured hot springs — with Lake Rotorua filling much of the crater. There are a dozen or so volcanic lakes around, and Mount Tarawera." +
      "This area is part of the Taupō Volcanic Zone of the North Island — magma below the crust heats the groundwater to make these geothermal features — and it is also traditional home of the Te Arawa Māori people, with many villages built beside the hot springs.",
    },
    travel: {
    "zh-CN":
      "奥克兰到罗托鲁瓦飞约40分钟，多数人从奥克兰自驾（约3小时）。罗托鲁瓦全年可来，12–3月最舒服；地热区附近湿度大、硫磺味重，银饰会变黑，可摘下。" +
      "看点是怀奥塔普、蒂普亚等地热区，红木森林骑行、树顶步道，湖景温泉，以及毛利文化体验（marae 参观、歌舞、hāngī 土窑餐）。" +
      "地热地表薄、烫，务必走在步道上、看好孩子。间歇泉喷发有固定时间。入境对户外装备和食品查得极严。",
    "en-US":
      "Auckland to Rotorua is about 40 minutes, though most people drive from Auckland (about 3 hours). Rotorua is a year-round destination, most comfortable December–March; near the geothermal areas the humidity is high and the sulphur smell strong, and silver jewellery tarnishes, so you can take it off." +
      "The draws are the geothermal areas such as Wai-O-Tapu and Te Puia, cycling and the treewalk in the Redwoods, the lake-view hot pools, and Māori cultural experiences (a marae visit, performance, a hāngī earth-oven meal)." +
      "The geothermal crust is thin and scalding — stay on the paths and mind children. Geysers erupt at set times. Border checks on outdoor gear and food are very strict.",
    },
  },

  "jfk-lax": {
    study: {
    "zh-CN":
      "纽约飞洛杉矶，横穿整个美国本土，是了解北美地形结构最完整的一条线。起飞后先越过阿巴拉契亚山脉——一条平行于大西洋岸的古老褶皱山系，久经侵蚀、山势平缓、林木茂密，是北美东部的分水岭。" +
      "翻过山，地面渐渐展开成大平原：从密西西比河谷一直铺到落基山脚，是一片微微西高的半干旱草原和农田，方格状的田块和圆形喷灌圈从空中很好认。" +
      "平原尽头，落基山脉突然拔起，一列列南北向的雪岭夹着高山盆地，大陆分水岭就在脊线上。再往西是科罗拉多高原——一块被抬升的厚层水平岩层，被科罗拉多河和支流切出深峡，大峡谷是其中最深的一段。" +
      "最后越过莫哈韦沙漠的荒山和干湖盆，翻过沿海的圣加布里埃尔等山脉，洛杉矶盆地和太平洋就在眼前。",
    "en-US":
      "New York to Los Angeles crosses the entire contiguous United States, and is the most complete way to read the structure of North America from the air. After take-off you cross the Appalachian Mountains — an old folded range running parallel to the Atlantic coast, long eroded to gentle, forested ridges, and the divide of the eastern US." +
      "Beyond the mountains the land opens into the Great Plains: from the Mississippi valley to the foot of the Rockies, a semi-arid grassland and farmland that rises gently westward, its square fields and circular irrigation pivots easy to pick out from above." +
      "At the edge of the plains the Rocky Mountains rise abruptly — lines of snowy north–south ranges enclosing high basins, with the Continental Divide along the crest. West of them is the Colorado Plateau, a block of thick, near-horizontal rock layers lifted up and cut into deep canyons by the Colorado River and its tributaries; the Grand Canyon is the deepest stretch." +
      "Finally you cross the bare hills and dry lake basins of the Mojave Desert, clear the coastal San Gabriel and other ranges, and the Los Angeles basin and the Pacific come into view.",
    },
    travel: {
    "zh-CN":
      "纽约到洛杉矶飞约五个半小时，向西跨三个时区（落地时钟往回拨 3 小时）。两座城市气候差别很大：纽约四季分明、夏闷冬雪；洛杉矶终年温暖干燥、少雨，昼夜和海陆温差明显。" +
      "这是一条经典的“横穿美国”航线，靠窗能依次看到阿巴拉契亚的林山、中部大平原的农田、落基山的雪岭、科罗拉多高原的红色峡谷、西部的沙漠。白天靠右侧（北侧）机窗光线和视野较好。" +
      "两地机场都很大：JFK 有 AirTrain 接地铁，LAX 出租车和网约车分区上客、按牌照颜色分流。多数国家公民入境美国需提前在线办 ESTA 或签证，落地不能补办。",
    "en-US":
      "New York to Los Angeles is about five and a half hours, west across three time zones (set your clock back 3 hours on arrival). The two cities have very different climates: New York has four clear seasons, muggy summers and snowy winters; Los Angeles is warm and dry year-round with little rain and a marked day–night and coast–inland difference." +
      "This is the classic 'cross the country' flight, and from a window seat you see, in turn, the forested Appalachians, the farmland of the Great Plains, the snowy Rockies, the red canyons of the Colorado Plateau and the western deserts. By day the right-hand (north) side has better light and views." +
      "Both airports are large: JFK has the AirTrain to the subway, and LAX has zoned pick-up for taxis and rideshare. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US — this cannot be done on arrival.",
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
      "Past the lakes is the northern Great Plains: the wheat fields and grassland of Nebraska and the Dakotas, few rivers, wide horizons, and often snow-covered in winter." +
      "Beyond the northern Rockies you enter the Great Basin — an arid upland broken by mountains into many closed basins, where rivers never reach the sea but drain into inland salt lakes and flats; the Great Salt Lake is the largest." +
      "Finally, over the northern Sierra Nevada, the Central Valley of California opens below: a large, flat agricultural basin held between mountain ranges, where the Sacramento and San Joaquin rivers meet and flow out through San Francisco Bay. San Francisco is on the tip of the peninsula at the bay's mouth.",
    },
    travel: {
    "zh-CN":
      "纽约到旧金山飞约六小时，西行跨三个时区。旧金山夏季常有海雾、体感偏凉，一年四季都要备一件外套；纽约夏热冬冷。" +
      "这条北线上，靠窗依次能看到五大湖的水面、中西部的农田、大盐湖的白色盐滩、内华达山的雪峰，最后是加州中央谷地和旧金山湾。" +
      "SFO 有 BART 城市轨道直接进市区，约半小时。旧金山山多、坡陡，市区停车贵且易被砸车窗，多用公交和缆车。多数国家公民入境美国需提前在线办 ESTA 或签证。",
    "en-US":
      "New York to San Francisco is about six hours, west across three time zones. San Francisco often has sea fog in summer and feels cool — carry a jacket in any season; New York is hot in summer and cold in winter." +
      "On this northern track a window seat shows, in turn, the Great Lakes, the farmland of the Midwest, the white salt flats of the Great Salt Lake, the peaks of the Sierra Nevada, and finally the Central Valley and San Francisco Bay." +
      "SFO has BART rail straight into the city, about 30 minutes. San Francisco is hilly and steep, downtown parking is expensive and car break-ins common, so use transit and the cable cars. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US.",
    },
  },

  "ord-sfo": {
    study: {
    "zh-CN":
      "芝加哥飞旧金山，从五大湖畔的大平原飞到太平洋岸。起飞时脚下是密歇根湖和芝加哥所在的平坦湖积平原，随后是一望无际的中西部农田——玉米和大豆的方格田，是大平原东段最湿润、最肥沃的一段。" +
      "越过落基山后进入大盆地干旱高原。大盐湖是一片没有出口的浅咸水湖，四周是白色的盐滩和平坦的盐碱地，从空中看像一面灰蓝色的镜子。" +
      "翻过内华达山脉，加州中央谷地在山脚展开：南北长约六百公里、东西被海岸山脉和内华达山夹住，是全美灌溉农业最集中的地方。谷地北端的河流汇成三角洲，经旧金山湾入海。",
    "en-US":
      "Chicago to San Francisco flies from the plains by the Great Lakes to the Pacific coast. On take-off you are over Lake Michigan and the flat lake-plain that Chicago sits on, then the endless farmland of the Midwest — a grid of corn and soybean fields, the wettest and most fertile part of the eastern Great Plains." +
      "Beyond the Rockies you enter the arid uplands of the Great Basin. The Great Salt Lake is a shallow salt lake with no outlet, ringed by white salt flats and level alkali ground, and from the air it looks like a grey-blue mirror." +
      "Over the Sierra Nevada, the Central Valley of California opens at the foot of the range: about 600 km long, held between the Coast Ranges and the Sierra, and the most concentrated irrigated farmland in the country. At its northern end the rivers join in a delta and flow out through San Francisco Bay.",
    },
    travel: {
    "zh-CN":
      "芝加哥到旧金山飞约四个半小时，西行跨两个时区。芝加哥冬季严寒多雪、夏季温暖；旧金山终年温和，夏季多雾偏凉。" +
      "靠窗可以看到中西部的农田、落基山、大盐湖的盐滩和内华达山的雪峰。ORD（奥黑尔）是全美最繁忙的机场之一，天气不好时延误多，转机留足时间。" +
      "SFO 有 BART 进城。多数国家公民入境美国需提前在线办 ESTA 或签证，落地不能补办。",
    "en-US":
      "Chicago to San Francisco is about four and a half hours, west across two time zones. Chicago has hard, snowy winters and warm summers; San Francisco is mild all year, foggy and cool in summer." +
      "From a window you can see the Midwest farmland, the Rockies, the salt flats of the Great Salt Lake and the peaks of the Sierra Nevada. O'Hare (ORD) is one of the busiest airports in the country and delays are common in bad weather — leave plenty of time for connections." +
      "SFO has BART into the city. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US — this cannot be done on arrival.",
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
      "Beyond the ridges the ground becomes a lifted, dissected plateau of red rock: the Colorado Plateau. The Colorado River and its tributaries have cut deep canyons into the thick horizontal rock layers, and the water runs muddy and reddish most of the year." +
      "A little to the south of the track is the Grand Canyon — the deepest stretch the Colorado River has cut, its layered walls recording a long span of geological time. Finally, over bare hills and dry lake basins, you reach the Mojave Desert basin that Las Vegas sits in.",
    },
    travel: {
    "zh-CN":
      "丹佛到拉斯维加斯飞约一小时四十分钟，落地把时钟往回拨一小时（丹佛山地时区、拉斯维加斯太平洋时区）。丹佛干爽、日照强、冬季多雪；拉斯维加斯在沙漠里，夏季酷热、极干燥。" +
      "靠窗能看到落基山的雪岭和科罗拉多高原的红色峡谷，天气好时能望见大峡谷方向。两地都是自驾进国家公园的门户：丹佛去落基山国家公园，拉斯维加斯去大峡谷、锡安、死亡谷。" +
      "沙漠和山区手机常没信号，自驾要加满油、带足水。多数国家公民入境美国需提前在线办 ESTA 或签证。",
    "en-US":
      "Denver to Las Vegas is about an hour and forty minutes; set your clock back an hour on arrival (Denver is Mountain time, Las Vegas Pacific). Denver is dry with strong sun and snowy winters; Las Vegas is in the desert, extremely hot and dry in summer." +
      "From a window you see the snowy ridges of the Rockies and the red canyons of the Colorado Plateau, and in clear weather you can look toward the Grand Canyon. Both cities are gateways for driving into the national parks: Denver for Rocky Mountain, Las Vegas for the Grand Canyon, Zion and Death Valley." +
      "Phone signal is often absent in the desert and mountains, so fill the tank and carry plenty of water if you drive. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US.",
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
      "Next is the Sierra Nevada: a huge tilted block of granite, gently sloping on the west and steep on the east, snow-capped all year, with many deep U-shaped valleys carved by glaciers in the ice ages." +
      "Over the crest the land drops suddenly into desert and Death Valley appears — the lowest, hottest and driest place in North America, its floor of salt flats below sea level between steep bare mountains. Finally, over the dry lake basins of the Mojave Desert, Las Vegas lies in its ring of mountains.",
    },
    travel: {
    "zh-CN":
      "旧金山到拉斯维加斯飞约一个半小时，同一时区。旧金山凉而多雾，拉斯维加斯在沙漠里、夏季酷热，落地温差可能很大。" +
      "这是一条风景航线：靠窗依次是中央谷地的农田、内华达山的雪峰、死亡谷的盐滩和荒山。天气晴朗时非常清楚。" +
      "拉斯维加斯机场就在大道（Strip）南端，离酒店很近。夏季正午不宜长时间户外。多数国家公民入境美国需提前在线办 ESTA 或签证。",
    "en-US":
      "San Francisco to Las Vegas is about an hour and a half, in the same time zone. San Francisco is cool and foggy, Las Vegas is in the desert and very hot in summer — the temperature difference on arrival can be large." +
      "This is a scenic flight: a window seat shows, in turn, the farmland of the Central Valley, the peaks of the Sierra Nevada, and the salt flats and bare mountains of Death Valley — very clear in fine weather." +
      "Las Vegas airport is at the south end of the Strip, close to the hotels. Midday in summer is not the time for long spells outdoors. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US.",
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
      "North of the peninsula the coast is a continuous line of low sand bars, lagoons and estuary wetlands: the Atlantic coastal plain, running from Florida to New York, formed of sea-floor sediments lifted and exposed, very gently sloping, with sandy beaches and barrier islands." +
      "Past Chesapeake Bay — a drowned ancient river mouth — the coastal plain narrows and pinches out near New York; the mouth of the Hudson River and its natural harbour are exactly where the city grew.",
    },
    travel: {
    "zh-CN":
      "迈阿密到纽约飞约三小时，同一时区。两地气候差别大：迈阿密全年温暖、夏季闷热多雨（6–11 月飓风季）；纽约四季分明、冬季寒冷有雪。" +
      "靠东侧（右侧）机窗能一路看海岸线：佛罗里达的沙洲、卡罗来纳的沙滩和障壁岛、切萨皮克湾。" +
      "纽约有三个机场，JFK 有 AirTrain 接地铁进城。多数国家公民入境美国需提前在线办 ESTA 或签证，落地不能补办。",
    "en-US":
      "Miami to New York is about three hours, in the same time zone. The climates are very different: Miami is warm all year and hot, muggy and rainy in summer (hurricane season June–November); New York has four clear seasons and cold, snowy winters." +
      "From a window on the east (right) side you can follow the coast the whole way: the sand bars of Florida, the beaches and barrier islands of the Carolinas, Chesapeake Bay." +
      "New York has three airports; JFK has the AirTrain to the subway into the city. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US — this cannot be done on arrival.",
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
      "West across Texas the ground rises and dries out. Into New Mexico is the Chihuahuan Desert — the largest desert in North America, marked by shrubland and gypsum dunes, with White Sands among them." +
      "Farther west is the Sonoran Desert, a little warmer and wetter, home to the tall saguaro cactus and the 'greenest' desert in North America. Finally you cross the drier, dry-lake-basin country of the Mojave Desert, clear the coastal ranges, and reach the Los Angeles basin. Almost the whole flight is over the basin-and-range country of the American Southwest.",
    },
    travel: {
    "zh-CN":
      "新奥尔良到洛杉矶飞约四小时，西行跨两个时区。新奥尔良低湿、夏季闷热多雨；洛杉矶干燥温暖、少雨。" +
      "这条线大部分时间在沙漠上空，靠窗能看到得州的旱地、新墨西哥的白色石膏沙丘、亚利桑那的仙人掌荒漠。前半程主要是农田和牧场，景观在进入新墨西哥后才变得开阔。" +
      "洛杉矶极度依赖开车，机场出租车和网约车分区上客。多数国家公民入境美国需提前在线办 ESTA 或签证。",
    "en-US":
      "New Orleans to Los Angeles is about four hours, west across two time zones. New Orleans is low, humid and hot in summer; Los Angeles is dry, warm and low on rain." +
      "Most of this flight is over desert, and from a window you see the dry country of Texas, the white gypsum dunes of New Mexico, the cactus desert of Arizona. The first half is mainly farmland and ranching; the landscape opens out once you cross into New Mexico." +
      "Los Angeles depends heavily on driving, and the airport has zoned pick-up for taxis and rideshare. Citizens of most countries need an ESTA or a visa arranged online before travelling to the US.",
    },
  },

  "yyz-yvr": {
    study: {
    "zh-CN":
      "多伦多飞温哥华，横穿加拿大，是理解这个国家地形结构最完整的一条线。起飞后先是安大略湖和五大湖区，随后进入加拿大地盾——一大片被冰川反复刨蚀过的古老结晶岩台地，表面布满数不清的湖泊、沼泽和裸露的浑圆岩丘，森林深处几乎没有道路，覆盖了加拿大近一半的国土。" +
      "地盾在曼尼托巴一带渐渐没入平原，温尼伯湖是史前冰川湖阿加西残留的大湖之一。往西地面越来越平、越来越干，进入中部内陆平原——加拿大的麦仓和油田，方格田块一直铺到落基山脚。" +
      "平原尽头，加拿大落基山猛然升起：一列列近乎平行的南北向山岭，是厚层沉积岩被逆冲断层推挤、层层叠瓦堆起来的，山间有冰原、绿松石色的冰川湖和 U 形谷。翻过最后一道海岸山脉，就是温哥华所在的弗雷泽河三角洲和太平洋。",
    "en-US":
      "Toronto to Vancouver crosses the whole of Canada, and is the most complete way to read the country's structure from the air. After take-off come Lake Ontario and the Great Lakes, then the Canadian Shield — a vast old platform of crystalline rock scraped again and again by ice, its surface covered with countless lakes, bogs and bare rounded rock knobs, roadless in the forested interior, covering nearly half of Canada." +
      "Around Manitoba the Shield sinks under the plains, and Lake Winnipeg is one of the large lakes left from glacial Lake Agassiz. West the land grows flatter and drier — the Interior Plains, Canada's granary and oil country, its square fields running to the foot of the Rockies." +
      "At the edge of the plains the Canadian Rockies rise abruptly: lines of near-parallel north–south ranges, thick sedimentary layers stacked like shingles by thrust faults, with icefields, turquoise glacial lakes and U-shaped valleys between them. Over a last coastal range is the Fraser River delta and the Pacific, where Vancouver sits.",
    },
    travel: {
    "zh-CN":
      "多伦多到温哥华飞约五小时，向西跨三个时区（落地把时钟往回拨 3 小时）。两地气候差别大：多伦多四季分明、冬冷夏闷；温哥华冬季温和多雨、夏季干爽，很少下雪。" +
      "这是加拿大版“横穿大陆”航线，靠窗依次能看到五大湖、地盾的万点湖泊、大草原的麦田、落基山的雪岭和冰川湖。白天右侧（北侧）机窗视野略好。" +
      "两地机场都有城市轨道进城：YYZ 有 UP Express 到联合车站，YVR 有 Canada Line 到市中心。多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Toronto to Vancouver is about five hours, west across three time zones (set your clock back 3 hours on arrival). The climates are very different: Toronto has four clear seasons, cold winters and muggy summers; Vancouver has mild, rainy winters and dry summers, and rarely snows." +
      "This is the Canadian 'cross the continent' flight, and from a window you see, in turn, the Great Lakes, the myriad lakes of the Shield, the wheat fields of the prairies, and the snowy ranges and glacial lakes of the Rockies. By day the right-hand (north) side has slightly better views." +
      "Both airports have rail into the city: the UP Express from YYZ to Union Station, and the Canada Line from YVR to downtown. Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yul-yvr": {
    study: {
    "zh-CN":
      "蒙特利尔飞温哥华，是从法语的圣劳伦斯河谷横穿加拿大到太平洋岸。起飞后不久就飞上加拿大地盾——一片古老的结晶岩台地，被冰川磨圆、刨出无数湖泊，安大略和魁北克北部大半是这种无路的湖泊森林。" +
      "地盾在草原三省一侧沉入平原，温尼伯湖是冰川消融时留下的大湖。往西是中部内陆平原：微微西高的半干旱麦田和牧场，河流把松软的沉积层切出浅谷。" +
      "平原尽头，加拿大落基山拔地而起——沉积岩被逆冲推挤成一列列瓦叠的山岭，夹着冰原和冰川湖。最后越过海岸山脉，温哥华、弗雷泽河三角洲和大海就在眼前。",
    "en-US":
      "Montreal to Vancouver crosses Canada from the French-speaking St Lawrence valley to the Pacific coast. Soon after take-off you are over the Canadian Shield — an old platform of crystalline rock, rounded by ice and pitted with countless lakes, covering most of northern Ontario and Quebec as roadless lake-and-forest country." +
      "On the prairie side the Shield sinks under the plains, and Lake Winnipeg is a large lake left by the melting ice. West are the Interior Plains: semi-arid wheat fields and ranchland tilting gently up to the west, with rivers cutting shallow valleys into the soft layers." +
      "At the edge of the plains the Canadian Rockies rise straight up — sedimentary rock pushed by thrust faults into lines of shingled ranges, with icefields and glacial lakes between. Finally, over the Coast Mountains, Vancouver, the Fraser delta and the sea come into view.",
    },
    travel: {
    "zh-CN":
      "蒙特利尔到温哥华飞约五个半小时，西行跨三个时区。蒙特利尔冬季严寒多雪、夏季炎热多节庆；温哥华终年温和、冬季多雨。" +
      "靠窗依次能看到地盾的湖泊、大草原、落基山的雪峰和冰川湖。YUL 有 747 快线公交进城，YVR 有 Canada Line 轻轨。" +
      "多数国家公民入境加拿大需提前在线办 eTA 或签证，落地不能补办。魁北克讲法语，出发前会一句 bonjour 很有帮助。",
    "en-US":
      "Montreal to Vancouver is about five and a half hours, west across three time zones. Montreal has cold, snowy winters and hot, festival-filled summers; Vancouver is mild all year and rainy in winter." +
      "From a window you see, in turn, the lakes of the Shield, the prairies, and the snowy peaks and glacial lakes of the Rockies. YUL has the 747 express bus into the city, YVR the Canada Line." +
      "Citizens of most countries need an eTA or a visa arranged online before travelling to Canada. Quebec is French-speaking, and a word of 'bonjour' helps.",
    },
  },

  "yyz-yul": {
    study: {
    "zh-CN":
      "多伦多飞蒙特利尔，是加拿大最繁忙的航线，很短，主要在圣劳伦斯河的低地里飞。起飞后先掠过安大略湖北岸；城市北缘那道低矮的长陡坡，是尼亚加拉断崖——一层坚硬的白云岩盖在软岩上，被侵蚀成一条从纽约州经安大略一直弯到休伦湖的悬崖线，尼亚加拉瀑布就是河水从这道崖上跌落形成的。" +
      "接着地面是平坦的圣劳伦斯低地：安大略湖和圣劳伦斯河之间一条肥沃的沉积平原，是安大略和魁北克人口最密的地带，田块、村镇和高速公路排得很规整。蒙特利尔就在圣劳伦斯河中的一座大岛上，岛中央的皇家山从空中很好认。",
    "en-US":
      "Toronto to Montreal is the busiest air route in Canada, short, and flown mostly over the lowlands of the St Lawrence. After take-off you skim the north shore of Lake Ontario; the low ridge along the city's northern edge is the Niagara Escarpment — a hard cap of dolomite over softer rock, eroded into a line of cliff that curves from New York State through Ontario to Lake Huron, and Niagara Falls is where the river drops over it." +
      "Then the ground is the flat St Lawrence Lowlands: a fertile sedimentary plain between Lake Ontario and the St Lawrence River, the most densely settled belt of Ontario and Quebec, with neatly ordered fields, towns and highways. Montreal sits on a large island in the St Lawrence, and Mount Royal in the middle of the island is easy to pick out from the air.",
    },
    travel: {
    "zh-CN":
      "多伦多到蒙特利尔飞约一小时十五分钟，同一时区。两地都属温带大陆性气候、四季分明，蒙特利尔冬天更冷更长。也可以坐 VIA Rail 火车，约五小时、市中心到市中心。" +
      "多伦多讲英语，蒙特利尔以法语为主——进店先说 bonjour 很受欢迎，服务业多能讲英语。7 月 1 日前后是魁北克传统搬家日，交通住宿都紧张。" +
      "多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Toronto to Montreal is about an hour and fifteen minutes, in the same time zone. Both have a humid continental climate with four clear seasons; Montreal's winter is colder and longer. You can also take the VIA Rail train, about five hours, city centre to city centre." +
      "Toronto is English-speaking; Montreal is French-first — a 'bonjour' on entering a shop is welcome, and the service industry mostly speaks English. Around 1 July is the traditional Quebec moving day, when transport and lodging are tight." +
      "Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yyz-yhz": {
    study: {
    "zh-CN":
      "多伦多飞哈利法克斯，从五大湖一路飞到大西洋岸。起飞后先是安大略湖北岸和尼亚加拉断崖那道白云岩悬崖线，然后是平坦的圣劳伦斯低地——安大略与魁北克之间的肥沃农业带。" +
      "越过圣劳伦斯河，地面渐渐起伏，进入阿巴拉契亚山系的北端余脉——久经侵蚀的低山和丘陵，森林密布。" +
      "接近终点，海面出现芬迪湾——一条深入陆地的漏斗形海湾，因为形状和长度和大西洋潮汐产生共振，这里的潮差是世界最大的，落潮时露出大片红色泥滩和被冲刷成蘑菇状的礁石。哈利法克斯就在芬迪湾以东、一条狭长深水港湾的岸边。",
    "en-US":
      "Toronto to Halifax flies from the Great Lakes to the Atlantic coast. After take-off come the north shore of Lake Ontario and the dolomite cliff-line of the Niagara Escarpment, then the flat St Lawrence Lowlands — the fertile farm belt between Ontario and Quebec." +
      "Across the St Lawrence the land begins to roll, into the northern tail of the Appalachian system — long-eroded low mountains and hills, heavily forested." +
      "Near the end the Bay of Fundy appears on the sea — a funnel-shaped bay reaching inland, whose shape and length resonate with the Atlantic tide, giving it the largest tidal range in the world; at low tide it exposes broad red mud flats and rocks scoured into mushroom shapes. Halifax is east of the bay, on the shore of a long, deep harbour.",
    },
    travel: {
    "zh-CN":
      "多伦多到哈利法克斯飞约一小时四十分钟，落地把时钟往前拨一小时（哈利法克斯是大西洋时区）。哈利法克斯比内陆温和：夏季凉爽多雾，9–10 月可能有飓风残余带来的大风大雨。" +
      "靠窗后段能看到圣劳伦斯河、阿巴拉契亚低山和芬迪湾。YHZ 机场离市区约 35 公里、有机场大巴，安排好接驳时间。" +
      "哈利法克斯适合作为大西洋省份自驾的起点，往南看佩吉湾灯塔和花岗岩海岸。多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Toronto to Halifax is about an hour and forty minutes; set your clock forward an hour on arrival (Halifax is on Atlantic time). Halifax is milder than inland: cool, foggy summers, with strong wind and rain possible from hurricane remnants in September–October." +
      "From a window in the later part of the flight you can see the St Lawrence, the low Appalachians and the Bay of Fundy. YHZ airport is about 35 km from the city with an airport bus — plan the transfer time." +
      "Halifax makes a good start for a drive around Atlantic Canada, south to Peggys Cove for the lighthouse and granite shore. Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yhz-yyt": {
    study: {
    "zh-CN":
      "哈利法克斯飞圣约翰斯，是一趟短程航班，从新斯科舍飞到纽芬兰岛最东端——北美大陆最靠东的城市。起飞后不久经过爱德华王子岛：圣劳伦斯湾里一座低平的岛，土是鲜明的铁红色，岸边是红砂岩崖和沙丘。" +
      "越过卡伯特海峡，纽芬兰岛西岸升起长岭山脉——阿巴拉契亚山系最北的一段，是一块古老岩层被抬升、又被冰川刨出峡湾和陡壁的高原（格罗莫讷国家公园就在这里，能看到地球地幔的岩石直接出露在地表）。" +
      "岛的内陆是空旷的岩石荒原和无数小湖。圣约翰斯抱着一个几乎被陆地围死的小港湾，只有一条两侧是陡崖的窄水道通向大西洋。",
    "en-US":
      "Halifax to St. John's is a short flight, from Nova Scotia to the far eastern tip of Newfoundland — the easternmost city in North America. Soon after take-off you pass Prince Edward Island: a low, flat island in the Gulf of St Lawrence, its soil a vivid iron-red, its shores red sandstone cliffs and dunes." +
      "Across the Cabot Strait, the Long Range Mountains rise on the west coast of Newfoundland — the northernmost stretch of the Appalachian system, a plateau of old rock uplifted and then carved by ice into fjords and cliffs (Gros Morne National Park is here, where rock from the Earth's mantle is exposed at the surface)." +
      "The island's interior is open rocky barrens with countless small lakes. St. John's hugs a nearly landlocked harbour, with only a narrow, cliff-walled channel out to the Atlantic.",
    },
    travel: {
    "zh-CN":
      "哈利法克斯到圣约翰斯飞约一小时四十分钟，落地把时钟再往前拨一个半小时（纽芬兰是特殊的半小时时区）。圣约翰斯多雾多风、天气变化极快，是加拿大最湿、最多雾的城市之一，随身带防风防水外套。" +
      "5–6 月能看到从北方漂来的冰山，6–7 月看座头鲸和海鹦。看海岸悬崖务必远离边缘、风很大。航班常因雾延误，行程留弹性。" +
      "岛上景点分散、公交少，租车最方便。多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Halifax to St. John's is about an hour and forty minutes; set your clock forward another hour and a half on arrival (Newfoundland has an unusual half-hour time zone). St. John's is foggy, windy and very changeable — one of the wettest and foggiest cities in Canada — so carry a windproof, waterproof jacket." +
      "May–June you can see icebergs drifting down from the north, June–July humpback whales and puffins. At the coastal cliffs stay well back from the edge — the wind is strong. Flights are often fog-delayed, so keep the itinerary flexible." +
      "Attractions on the island are scattered with little transit — a rental car is easiest. Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yvr-yyc": {
    study: {
    "zh-CN":
      "温哥华飞卡尔加里，短短一小时里从太平洋岸翻过整条加拿大落基山，落到山另一侧的草原上。起飞后先越过弗雷泽河谷和海岸山脉，随后是不列颠哥伦比亚起伏的内陆山地和干燥河谷。" +
      "航线中段进入加拿大落基山的主脊：这里的山不是火山、也不是花岗岩块，而是厚层的石灰岩和砂岩被逆冲断层一层层往东推、叠瓦式堆起来的，所以山坡常能看到清楚的水平岩层线。山间散布着冰原、绿松石色的冰川湖和 U 形谷，班夫、路易斯湖就在这一带。" +
      "翻过最东边一道山岭（弓河谷的山口），地面骤然下降、展开成开阔的草原，卡尔加里就在落基山脚下、两条河交汇处。",
    "en-US":
      "Vancouver to Calgary crosses the entire Canadian Rockies in a single hour, from the Pacific coast down onto the prairie on the far side. After take-off you cross the Fraser valley and the Coast Mountains, then the rolling interior mountains and dry valleys of British Columbia." +
      "Mid-flight you reach the main crest of the Canadian Rockies: these mountains are not volcanoes or blocks of granite, but thick layers of limestone and sandstone pushed east and stacked like shingles by thrust faults, so the slopes often show clear horizontal rock lines. Icefields, turquoise glacial lakes and U-shaped valleys are scattered between them, and Banff and Lake Louise are here." +
      "Over the easternmost ridge (the pass at the head of the Bow valley) the land drops away suddenly into open prairie, and Calgary sits at the foot of the Rockies where two rivers meet.",
    },
    travel: {
    "zh-CN":
      "温哥华到卡尔加里飞约一小时二十分钟，落地把时钟往前拨一小时（卡尔加里是山地时区）。温哥华温和多雨、卡尔加里干爽日照强、海拔约一千米、冬季有焚风。" +
      "这是一条风景航线，靠窗能俯瞰整条落基山的雪岭和冰川湖。卡尔加里是进班夫国家公园的门户，机场有大巴直接去班夫。" +
      "冬季山区自驾要冬胎、查山口路况。多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Vancouver to Calgary is about an hour and twenty minutes; set your clock forward an hour on arrival (Calgary is on Mountain time). Vancouver is mild and rainy; Calgary is dry with strong sun, at about a thousand metres, with a warm chinook wind in winter." +
      "This is a scenic flight, and from a window you look down on the whole line of the Rockies, its snowy ridges and glacial lakes. Calgary is the gateway to Banff National Park, and the airport has a coach straight to Banff." +
      "Driving in the mountains in winter needs winter tyres and a check of pass conditions. Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yyc-ywg": {
    study: {
    "zh-CN":
      "卡尔加里飞温尼伯，几乎全程在加拿大中部大草原上飞。起飞后不久，往东南方向能看到红鹿河在草原上切出的一片沟壑荒地——艾伯塔荒地，河水把松软的岩层冲刷成光秃的土林和台地，是北美出土恐龙化石最多的地方之一。" +
      "接着地面就是一望无际的中部内陆平原：微微起伏的麦田、油菜田和牧场，方格田块和圆形喷灌圈从空中很规整；这里是史前浅海的海底，岩层近乎水平。" +
      "接近温尼伯，地面变得极其平坦——那是史前冰川湖阿加西的湖底，比周围还平。温尼伯湖是这个大湖残留的一部分，就在城市北面。温尼伯建在红河与阿西尼博因河交汇处。",
    "en-US":
      "Calgary to Winnipeg is flown almost entirely over the Canadian prairies. Soon after take-off, to the south-east, you can see the badlands the Red Deer River has cut into the plain — the Alberta Badlands, where the river has scoured the soft rock layers into bare earth pillars and mesas, and one of the richest places in North America for dinosaur fossils." +
      "Then the ground is the endless Interior Plains: gently rolling wheat, canola and ranchland, with square fields and circular irrigation pivots neatly laid out from above; this was the floor of a prehistoric shallow sea, and the rock layers are nearly horizontal." +
      "Approaching Winnipeg the land becomes extremely flat — the bed of glacial Lake Agassiz, flatter than its surroundings. Lake Winnipeg, north of the city, is a remnant of that lake. Winnipeg sits where the Red and Assiniboine rivers meet.",
    },
    travel: {
    "zh-CN":
      "卡尔加里到温尼伯飞约两个多小时，落地把时钟往前拨一小时（温尼伯是中部时区）。两地都属大陆性草原气候、一年温差极大：夏季温暖、冬季酷寒（1 月体感常低于 -30°C）。" +
      "靠窗几乎全程是大草原的方格田。温尼伯的 The Forks 和人权博物馆值得一看，夏季可去温尼伯湖边沙滩、冬季看极光。" +
      "若冬天来，防寒装备按 -30°C 准备。多数国家公民入境加拿大需提前在线办 eTA 或签证。",
    "en-US":
      "Calgary to Winnipeg is a bit over two hours; set your clock forward an hour on arrival (Winnipeg is on Central time). Both have a continental prairie climate with a huge annual range: warm summers, and severe cold in winter (a January wind-chill often below −30°C)." +
      "From a window it is prairie fields almost the whole way. Winnipeg's The Forks and the human-rights museum are worth seeing; in summer there are beaches on Lake Winnipeg, and in winter the northern lights." +
      "If you come in winter, prepare for −30°C. Citizens of most countries need an eTA or a visa arranged online before travelling to Canada.",
    },
  },

  "yeg-yyz": {
    study: {
    "zh-CN":
      "埃德蒙顿飞多伦多，向东南横穿加拿大的草原和地盾。起飞时脚下是北萨斯喀彻温河谷和中部内陆平原——微微起伏的麦田和牧场，这里是加拿大最北的大片农业区。" +
      "往东地面越来越平，进入曼尼托巴的湖积平原，温尼伯湖是史前冰川湖阿加西的残留。" +
      "过了温尼伯，绿色的农田戛然而止，换成加拿大地盾：一片被冰川刨光的古老结晶岩台地，湖泊、沼泽和裸岩交错，森林里几乎没有路，从安大略北部一直延伸到魁北克。地盾在安大略湖以北渐渐没入低地，多伦多就在安大略湖北岸的平原上。",
    "en-US":
      "Edmonton to Toronto crosses the prairies and the Shield of Canada to the south-east. On take-off you are over the North Saskatchewan River valley and the Interior Plains — gently rolling wheat and ranchland, the northernmost large farming region in Canada." +
      "East the land flattens further, into the lake plain of Manitoba, where Lake Winnipeg is a remnant of glacial Lake Agassiz." +
      "Past Winnipeg the green farmland stops abruptly and gives way to the Canadian Shield: an old platform of crystalline rock planed by ice, a mosaic of lakes, bogs and bare rock, roadless in the forest, running from northern Ontario into Quebec. North of Lake Ontario the Shield sinks under the lowlands, and Toronto is on the plain along the lake's north shore.",
    },
    travel: {
    "zh-CN":
      "埃德蒙顿到多伦多飞约三个半小时，向东跨两个时区（落地把时钟往前拨 2 小时）。埃德蒙顿冬季漫长严寒、夏季白昼极长；多伦多四季分明、夏季闷热。" +
      "靠窗依次是大草原、曼尼托巴的湖泊、地盾的万点湖泊和森林。埃德蒙顿常作为往南去落基山或往北去自然区的中转。" +
      "多数国家公民入境加拿大需提前在线办 eTA 或签证，落地不能补办。",
    "en-US":
      "Edmonton to Toronto is about three and a half hours, east across two time zones (set your clock forward 2 hours on arrival). Edmonton has long, hard winters and very long summer daylight; Toronto has four clear seasons and muggy summers." +
      "From a window come, in turn, the prairies, the lakes of Manitoba, and the myriad lakes and forest of the Shield. Edmonton is often used as a hub for going south to the Rockies or north to nature areas." +
      "Citizens of most countries need an eTA or a visa arranged online before travelling to Canada — this cannot be done on arrival.",
    },
  },

  "lhr-edi": {
    study: {
    "zh-CN":
      "伦敦飞爱丁堡，是一趟很短的航班，几乎把英格兰从南到北纵切了一遍。起飞后先掠过泰晤士河谷北缘的奇尔特恩丘陵——一道白垩岩的缓坡，是伦敦盆地的边。" +
      "往北是英格兰中部的平原和城市带，然后地面隆起成峰区——奔宁山脉最南的一段，是石灰岩和砂岩的高地荒原，也是英格兰第一座国家公园。" +
      "峰区往北接上奔宁山脉的主脊，被称作“英格兰的脊梁”——一列南北向的低山，把英格兰的东西两侧分开，河流分别流向北海和爱尔兰海。" +
      "越过英格兰-苏格兰边界，是南部高地：一片平缓的绿色牧羊丘陵。再往北，地面陷成苏格兰的中央地带，爱丁堡就在福斯湾南岸，城堡立在一块火山岩上。",
    "en-US":
      "London to Edinburgh is a short flight that cuts almost straight up England from south to north. After take-off you skim the Chilterns on the northern rim of the Thames valley — a gentle chalk slope that marks the edge of the London basin." +
      "North are the plains and city belt of the Midlands, and then the ground rises into the Peak District — the southernmost stretch of the Pennines, an upland of limestone and gritstone moor, and England's first national park." +
      "The Peak District joins the main spine of the Pennines, called 'the backbone of England' — a line of low north–south mountains that divides eastern from western England, its rivers draining to the North Sea and the Irish Sea." +
      "Over the England–Scotland border are the Southern Uplands: gentle green sheep-farming hills. Farther north the land drops into the Central Belt of Scotland, and Edinburgh is on the south shore of the Firth of Forth, its castle on a plug of volcanic rock.",
    },
    travel: {
    "zh-CN":
      "伦敦到爱丁堡飞约一小时十五分钟，同一时区。也可以坐东海岸干线火车，约 4.5 小时、市中心直达、沿途看东英格兰海岸和北海。" +
      "两地都属温带海洋性气候，爱丁堡更凉、更多风。8 月爱丁堡艺术节期间全城人满、住宿翻几倍，要么专程、要么避开。" +
      "英国国内航线安检照做、但不查护照（同属英国）。多数国家公民短期旅游免签或需 ETA，以英国官方最新公布为准。",
    "en-US":
      "London to Edinburgh is about an hour and fifteen minutes, in the same time zone. You can also take the East Coast Main Line train, about 4.5 hours, city centre to city centre, past the coast of eastern England and the North Sea." +
      "Both have a temperate maritime climate; Edinburgh is cooler and windier. In August the city is packed for the festivals and lodging prices multiply — come specifically for it or avoid it." +
      "UK domestic flights still have security but no passport check (both are in the UK). Most foreign visitors travel visa-free for short tourism or need an ETA — check the latest UK guidance.",
    },
  },

  "lhr-gla": {
    study: {
    "zh-CN":
      "伦敦飞格拉斯哥，走的航路比飞爱丁堡略偏西。起飞后先是泰晤士河谷北缘的奇尔特恩白垩丘陵，然后是英格兰中部的城市带和峰区的荒原高地。" +
      "往北，航线经过湖区——英格兰最高的一片山地，是冰川把古老的火山岩和板岩刨蚀出的深谷、山脊和一串狭长的湖，英格兰最高峰斯科费尔峰就在这里。" +
      "越过英格兰-苏格兰边界，是南部高地的绵延牧羊丘陵。再往北地面陷下去，就是克莱德河所在的苏格兰中央地带，格拉斯哥是这里最大的城市，曾经的造船中心。",
    "en-US":
      "London to Glasgow takes a slightly more westerly track than the flight to Edinburgh. After take-off come the Chiltern chalk hills on the rim of the Thames valley, then the Midlands city belt and the moorland uplands of the Peak District." +
      "North the route passes the Lake District — the highest ground in England, where glaciers carved deep valleys, ridges and a set of long, narrow lakes out of old volcanic rock and slate, with England's highest peak, Scafell Pike, among them." +
      "Over the England–Scotland border are the rolling sheep hills of the Southern Uplands. Farther north the land drops into the Central Belt of Scotland on the River Clyde, and Glasgow, once the shipbuilding centre, is its largest city.",
    },
    travel: {
    "zh-CN":
      "伦敦到格拉斯哥飞约一小时二十分钟，同一时区。火车走西海岸干线约 4.5 小时。格拉斯哥比伦敦凉、多雨，是英国大城市里最多雨的之一。" +
      "格拉斯哥的市立博物馆多数免费（凯尔文格罗夫、交通博物馆等）。往北一小时到洛蒙德湖和高地南缘。" +
      "英国国内航线不查护照。多数国家公民短期旅游免签或需 ETA。",
    "en-US":
      "London to Glasgow is about an hour and twenty minutes, in the same time zone. The train on the West Coast Main Line is about 4.5 hours. Glasgow is cooler and wetter than London — one of the rainiest big cities in the UK." +
      "Glasgow's municipal museums are mostly free (Kelvingrove, the Riverside Museum and others). An hour north are Loch Lomond and the southern edge of the Highlands." +
      "UK domestic flights have no passport check. Most foreign visitors travel visa-free for short tourism or need an ETA.",
    },
  },

  "lhr-inv": {
    study: {
    "zh-CN":
      "伦敦飞因弗内斯，从英格兰东南一直飞到苏格兰高地的北端。起飞后先是奇尔特恩白垩丘陵和英格兰中部平原，接着是奔宁山脉——纵贯英格兰北部的低山脊。" +
      "越过苏格兰后，地面明显变高、变荒。航线经过凯恩戈姆山——不列颠面积最大的一片高山高原，五座超过 1200 米的山峰围着几片起伏的秃顶苔原，是英国最接近北极环境的地方，冬季有雪、有真正的雪崩。" +
      "凯恩戈姆以北，地面沿一条笔直的谷地——大峡谷（Great Glen）——被断层切开，尼斯湖等几个深湖串在里面。因弗内斯就在尼斯河入海口、大峡谷的东北端。",
    "en-US":
      "London to Inverness flies from south-east England all the way to the northern end of the Scottish Highlands. After take-off come the Chiltern chalk hills and the Midlands plain, then the Pennines — the low spine running up northern England." +
      "Once over Scotland the land grows noticeably higher and wilder. The route passes the Cairngorms — the largest area of high mountain plateau in Britain, where five peaks over 1,200 m ring a rolling bare tundra of blunt summits, the most Arctic-like environment in the UK, with winter snow and real avalanches." +
      "North of the Cairngorms the land is sliced along a straight valley — the Great Glen — by a fault, with deep lochs including Loch Ness strung along it. Inverness is at the mouth of the River Ness at the north-eastern end of the Great Glen.",
    },
    travel: {
    "zh-CN":
      "伦敦到因弗内斯飞约一小时四十分钟，同一时区。也有卧铺火车（Caledonian Sleeper）夜里从伦敦直达。因弗内斯是高地的门户，比想象中温和（受暖流影响）但多变多风。" +
      "以因弗内斯为基地可自驾去天空岛、尼斯湖、北部 500 号公路。5–9 月低地有小咬人的蠓虫，带驱虫液。" +
      "高地公路多是单车道加会车点，要熟悉会车规则、备足油。英国国内航线不查护照。",
    "en-US":
      "London to Inverness is about an hour and forty minutes, in the same time zone. There is also a sleeper train (the Caledonian Sleeper) overnight from London. Inverness is the gateway to the Highlands, milder than you might expect (warmed by the Gulf Stream) but changeable and windy." +
      "From Inverness you can drive to the Isle of Skye, Loch Ness and the North Coast 500. From May to September the lowlands have biting midges — take repellent." +
      "Highland roads are often single-track with passing places — learn the etiquette and keep the tank topped up. UK domestic flights have no passport check.",
    },
  },

  "lhr-bfs": {
    study: {
    "zh-CN":
      "伦敦飞贝尔法斯特，从英格兰东南横穿到爱尔兰岛东北。起飞后先是奇尔特恩白垩丘陵，然后地面是英格兰中西部的平原，塞文河——不列颠最长的河——在这里蜿蜒，河口有巨大的潮差。" +
      "接着进入威尔士，脚下是斯诺登尼亚：威尔士北部的一片冰川刨蚀过的老山，最高峰斯诺登（威尔士语 Yr Wyddfa）1085 米，山间是深谷和冰蚀湖。" +
      "飞过爱尔兰海，北爱尔兰一侧最先出现的是莫恩山——一片花岗岩的圆顶山，几乎从海边直接拔起。贝尔法斯特就在莫恩山以北、拉甘河汇入贝尔法斯特湾处。",
    "en-US":
      "London to Belfast crosses from south-east England to the north-east of the island of Ireland. After take-off come the Chiltern chalk hills, then the plains of the west Midlands, where the Severn — the longest river in Britain — winds, with a huge tidal range at its mouth." +
      "Then into Wales and, below, Snowdonia: an old glacier-carved range in north Wales, its highest peak Snowdon (in Welsh, Yr Wyddfa) at 1,085 m, with deep valleys and glacial lakes between the summits." +
      "Across the Irish Sea, the first thing to appear on the Northern Ireland side is the Mourne Mountains — a cluster of rounded granite domes that rise almost straight from the sea. Belfast is north of the Mournes, where the River Lagan meets Belfast Lough.",
    },
    travel: {
    "zh-CN":
      "伦敦到贝尔法斯特飞约一小时二十分钟，同一时区。北爱尔兰属英国，国内航线不查护照。贝尔法斯特温和多雨多风。" +
      "泰坦尼克号博物馆、市政厅、往北一小时的巨人堤道是主要看点。涉及历史、政治、宗教、社区归属的话题较敏感，交谈中不主动评论为好。" +
      "7 月中旬前后有传统游行季，个别地区当天可能有管制或紧张气氛，提前了解、避开相关路线。",
    "en-US":
      "London to Belfast is about an hour and twenty minutes, in the same time zone. Northern Ireland is part of the UK, and the domestic flight has no passport check. Belfast is mild, wet and windy." +
      "Titanic Belfast, the City Hall, and the Giant's Causeway an hour north are the main draws. Topics touching on history, politics, religion and community belonging are sensitive — it is best not to volunteer opinions." +
      "Around mid-July there is a traditional marching season, and on the day some areas may have controls or a tense atmosphere — read up in advance and avoid the relevant routes.",
    },
  },

  "brs-edi": {
    study: {
    "zh-CN":
      "布里斯托尔飞爱丁堡，从英格兰西南飞到苏格兰。起飞时脚下是塞文河的宽阔河口——不列颠最长的河在这里入海，落潮时露出大片泥滩，河口偶尔能看到一道涌潮（Severn Bore）。" +
      "往北是英格兰中西部的平原和城市，然后地面隆起成奔宁山脉——纵贯英格兰北部的低山脊，把河流分向北海和爱尔兰海两侧，山顶是泥炭荒原。" +
      "越过英格兰-苏格兰边界，是南部高地平缓的牧羊丘陵。再往北地面陷成苏格兰中央地带，爱丁堡在福斯湾南岸，城堡立在火山岩上。",
    "en-US":
      "Bristol to Edinburgh flies from south-west England to Scotland. On take-off you are over the wide estuary of the Severn — Britain's longest river reaching the sea here, exposing broad mud flats at low tide, with the occasional tidal wave (the Severn Bore) running up it." +
      "North are the plains and cities of the west Midlands, then the ground rises into the Pennines — the low spine of northern England, dividing the rivers between the North Sea and the Irish Sea, with peat moor on the tops." +
      "Over the England–Scotland border are the gentle sheep hills of the Southern Uplands. Farther north the land drops into the Central Belt, and Edinburgh is on the south shore of the Firth of Forth, its castle on volcanic rock.",
    },
    travel: {
    "zh-CN":
      "布里斯托尔到爱丁堡飞约一小时二十分钟，同一时区。也可坐火车但需换乘、约 6.5 小时。布里斯托尔偏暖湿、爱丁堡更凉更多风。" +
      "布里斯托尔可看克利夫顿悬索桥、大不列颠号，往东一小时到巴斯。爱丁堡看老城和城堡。8 月爱丁堡艺术节人多价高。" +
      "英国国内航线不查护照。多数国家公民短期旅游免签或需 ETA。",
    "en-US":
      "Bristol to Edinburgh is about an hour and twenty minutes, in the same time zone. The train needs a change and takes about 6.5 hours. Bristol is warmer and wetter; Edinburgh is cooler and windier." +
      "In Bristol see the Clifton Suspension Bridge and the SS Great Britain, with Bath an hour east. In Edinburgh see the Old Town and the castle. In August the festivals make the city crowded and expensive." +
      "UK domestic flights have no passport check. Most foreign visitors travel visa-free for short tourism or need an ETA.",
    },
  },

  "edi-bfs": {
    study: {
    "zh-CN":
      "爱丁堡飞贝尔法斯特，是一趟很短的跨海航班，把苏格兰和北爱尔兰连起来。起飞后不久就到南部高地——苏格兰与英格兰之间那片平缓的绿色牧羊丘陵，这里也是苏格兰西南向爱尔兰海倾斜的一侧。" +
      "越过北海峡（苏格兰与爱尔兰之间最窄处只有约 20 公里），北爱尔兰一侧先出现的是莫恩山：一片花岗岩的圆顶山，几乎从海边直接升起，是这一带最高的山。" +
      "莫恩山以北是贝尔法斯特所在的低地，被丘陵环抱，拉甘河从这里汇入贝尔法斯特湾。整条航线虽短，却看全了“丘陵—海峡—花岗岩山—河口城市”。",
    "en-US":
      "Edinburgh to Belfast is a short flight across the sea, joining Scotland and Northern Ireland. Soon after take-off come the Southern Uplands — the gentle green sheep hills between Scotland and England, and the side of south-west Scotland that tilts toward the Irish Sea." +
      "Across the North Channel (at its narrowest, only about 20 km between Scotland and Ireland), the first thing on the Northern Ireland side is the Mourne Mountains: a cluster of rounded granite domes rising almost straight from the sea, the highest hills in this area." +
      "North of the Mournes is the lowland where Belfast sits, ringed by hills, with the River Lagan flowing into Belfast Lough. Short as it is, the flight takes in the whole sequence — hills, channel, granite mountains, estuary city.",
    },
    travel: {
    "zh-CN":
      "爱丁堡到贝尔法斯特飞约五十分钟，同一时区，同属英国、不查护照。也可以经渡轮（凯恩莱恩—贝尔法斯特）。两地都温和多雨多风。" +
      "贝尔法斯特看泰坦尼克号博物馆、市政厅，往北一小时到巨人堤道。历史、政治、宗教相关话题较敏感，不主动评论。" +
      "7 月中旬前后有传统游行季，个别地区当天可能有管制。",
    "en-US":
      "Edinburgh to Belfast is about 50 minutes, in the same time zone, both in the UK, with no passport check. There is also a ferry (Cairnryan–Belfast). Both are mild, wet and windy." +
      "In Belfast see Titanic Belfast and the City Hall, with the Giant's Causeway an hour north. Topics touching on history, politics and religion are sensitive — don't volunteer opinions." +
      "Around mid-July there is a traditional marching season, and some areas may have controls on the day.",
    },
  },

  "lhr-abz": {
    study: {
    "zh-CN":
      "伦敦飞阿伯丁，沿着英格兰和苏格兰的东海岸一路北上。起飞后先是奇尔特恩白垩丘陵，然后进入英格兰东部——一片极其平坦的低地，其中沼泽地（The Fens）曾是浅海和沼泽，被人工排干成海拔接近零、甚至低于海平面的农田，河渠笔直。" +
      "往北，约克郡东侧的海岸抬起一片石楠荒原——北约克沼原，紧挨着北海的悬崖。" +
      "越过英格兰-苏格兰边界处是切维厄特山——边界上一片浑圆的火山岩丘陵。再往北沿苏格兰东海岸飞，阿伯丁就在迪河与顿河入海处，一座用本地灰花岗岩盖起来的港口城市。",
    "en-US":
      "London to Aberdeen runs north up the east coast of England and Scotland. After take-off come the Chiltern chalk hills, then eastern England — an extremely flat lowland including The Fens, once shallow sea and marsh, drained into farmland near or below sea level, with dead-straight drains and channels." +
      "North, on the eastern side of Yorkshire, the coast lifts into a heather moor — the North York Moors — right against the cliffs of the North Sea." +
      "On the England–Scotland border are the Cheviot Hills — rounded hills of volcanic rock along the boundary. Flying on up the east coast of Scotland, Aberdeen sits where the Dee and the Don reach the sea, a port city built of local grey granite.",
    },
    travel: {
    "zh-CN":
      "伦敦到阿伯丁飞约一小时半，同一时区。火车走东海岸干线约 7 小时。阿伯丁比英格兰冷、风大，冬季有海雾（本地叫 haar），可能影响航班。" +
      "阿伯丁是北海石油之城，机场也是繁忙的直升机基地。往郊外皇家迪赛德看城堡和巴尔莫勒尔一带，通常需自驾或跟团。" +
      "石油行业会展期间酒店紧张。英国国内航线不查护照。",
    "en-US":
      "London to Aberdeen is about an hour and a half, in the same time zone. The train on the East Coast Main Line is about 7 hours. Aberdeen is colder and windier than England, with winter sea fog (locally, 'haar') that can affect flights." +
      "Aberdeen is the North Sea oil city, and its airport is a busy heliport too. Seeing the castles and Balmoral area of Royal Deeside out of town usually needs a car or a tour." +
      "Hotels are tight during oil-industry conferences. UK domestic flights have no passport check.",
    },
  },
};

/** 取某航线某语言的解说稿 */
export function getRouteNarration(
  routeId: string,
  lang: Language,
  mode: "study" | "travel",
): string | null {
  const text = ROUTE_NARRATION[routeId]?.[mode]?.[lang];
  return text && text.trim() ? text : null;
}
