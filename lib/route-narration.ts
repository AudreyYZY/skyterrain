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
