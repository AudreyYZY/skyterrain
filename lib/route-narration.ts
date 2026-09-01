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

  "rkv-aey": {
    study: {
    "zh-CN":
      "雷克雅未克飞阿克雷里，是冰岛最主要的一条国内航线，从西南的首都地区飞到北方的“北都”，横穿冰岛中央那片人无法居住的高地。起飞后不久，脚下出现一条明显的裂缝地带——辛格维利尔，北美板块和欧亚板块在这里被拉开，地面裂成一道道平行的沟壑，中间是冰岛最大的天然湖。" +
      "往北进入中央高地：一片灰黑色的火山荒漠，几乎没有植被，几座平缓的冰帽像白色的盾牌铺在上面——先是朗格冰原，再是正在冰岛正中心的霍夫斯冰原。冰帽之间是熔岩、火山砾和冰川融水冲出的辫状河。" +
      "越过高地北缘，地面陷成一条条南北向的深谷，其中最长的埃亚峡湾一直伸向北冰洋方向，阿克雷里就在峡湾尽头、三面雪山环抱处。",
    "en-US":
      "Reykjavík to Akureyri is Iceland's main domestic route, from the south-western capital area to the 'capital of the north', crossing the uninhabitable central highland. Soon after take-off a clear zone of fissures appears below — Þingvellir, where the North American and Eurasian plates are pulled apart, the ground split into parallel rifts around Iceland's largest natural lake." +
      "North you enter the central highland: a grey-black volcanic desert with almost no vegetation, where a few gentle ice caps lie like white shields — first Langjökull, then Hofsjökull at the very centre of Iceland. Between the ice caps are lava, volcanic gravel and braided rivers of meltwater." +
      "Over the northern edge of the highland the land drops into deep north–south valleys, the longest of which, Eyjafjörður, reaches toward the Arctic. Akureyri is at its head, ringed on three sides by snow mountains.",
    },
    travel: {
    "zh-CN":
      "雷克雅未克到阿克雷里飞约 45 分钟，同一时区。国内航班从市区的 RKV 机场起降（不是国际的凯夫拉维克 KEF）。也可以自驾环岛公路约 5 小时。" +
      "阿克雷里是北方的中心，比想象中温和（在长峡湾尽头），冬季雪多、是滑雪地。以它为基地一小时内可到米湖地热区、上帝瀑布、黛提瀑布，胡萨维克观鲸也在附近。" +
      "冰岛属申根区，多数国家公民短期旅游免签或按申根规定办理。冬季山口自驾要冬胎、查 road.is。",
    "en-US":
      "Reykjavík to Akureyri is about 45 minutes, in the same time zone. Domestic flights use the city's RKV airport (not the international Keflavík, KEF). You can also drive the Ring Road, about 5 hours." +
      "Akureyri is the centre of the north, milder than you might expect (at the head of a long fjord), snowy in winter and a ski area. From it you can reach the Mývatn geothermal area, Goðafoss and Dettifoss within an hour, and whale watching at Húsavík is nearby." +
      "Iceland is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. Driving mountain passes in winter needs winter tyres and a check of road.is.",
    },
  },

  "rkv-egs": {
    study: {
    "zh-CN":
      "雷克雅未克飞埃伊尔斯塔济，从西南首都区一直飞到东部峡湾，几乎是冰岛最长的一条国内航线。起飞后先越过辛格维利尔的板块裂谷，然后进入中央高地的火山荒漠。" +
      "航线中段掠过冰岛正中心的霍夫斯冰原——一座圆盾形的冰帽，下面压着火山。再往东南，脚下是欧洲最大的冰川瓦特纳冰原的北缘：一片望不到边的白色高原，几条冰川舌从边缘伸进黑色的山谷，冰下还有活火山（格里姆火山等）。" +
      "越过冰原，地面陷成东部的峡湾和河谷，埃伊尔斯塔济在一条细长的湖边、冰岛少有的大片林地旁。",
    "en-US":
      "Reykjavík to Egilsstaðir flies from the south-western capital area to the eastern fjords, one of the longest domestic routes in Iceland. After take-off you cross the plate rift at Þingvellir, then enter the volcanic desert of the central highland." +
      "Mid-flight the route passes Hofsjökull at the very centre of Iceland — a round, shield-shaped ice cap over a volcano. Farther south-east, below, is the northern edge of Vatnajökull, the largest glacier in Europe: an endless white plateau, with glacier tongues reaching into black valleys from its edge, and active volcanoes (such as Grímsvötn) under the ice." +
      "Over the ice cap the land drops into the eastern fjords and valleys, and Egilsstaðir is by a long, thin lake beside one of Iceland's rare large areas of woodland.",
    },
    travel: {
    "zh-CN":
      "雷克雅未克到埃伊尔斯塔济飞约一小时，同一时区，用市区 RKV 机场。自驾环岛到东部要 8–9 小时，所以飞机很受欢迎。" +
      "东部是冰岛人口最稀、最“边远”的一角。以埃伊尔斯塔济为基地可翻山去彩虹街的塞济斯菲厄泽、去东部峡湾自驾，北上两小时到黛提瀑布和米湖。" +
      "东部景点车程长、加油站少，随时留意油量。93 号公路冬季多雪多雾。",
    "en-US":
      "Reykjavík to Egilsstaðir is about an hour, in the same time zone, using the city's RKV airport. Driving the Ring Road to the east takes 8–9 hours, so flying is popular." +
      "The east is the most sparsely populated and 'remote'-feeling corner of Iceland. From Egilsstaðir you can go over the mountains to Seyðisfjörður with its rainbow street, drive the eastern fjords, or head two hours north to Dettifoss and Mývatn." +
      "Distances between eastern sights are long and petrol stations few — watch the fuel gauge. Route 93 has snow and fog in winter.",
    },
  },

  "rkv-ifj": {
    study: {
    "zh-CN":
      "雷克雅未克飞伊萨菲厄泽，从首都飞到冰岛最偏远的西北角——“西部峡湾”。起飞后向西北跨过法赫萨湾。" +
      "湾北岸伸出一条细长的半岛，尽头是斯奈山冰川——一座近乎完美的圆锥形火山，山顶覆着冰帽，天气好时从很远就能看到。这座山在儒勒·凡尔纳的小说里是“地心之旅”的入口。" +
      "过了半岛，就是西部峡湾：冰岛最古老的一块陆地，被无数深峡湾和陡峭的平顶山切碎，山几乎从海里垂直升起。伊萨菲厄泽藏在一条峡湾里、一个 L 形的沙嘴上，机场的进近以“难”著称，只有一条路进出。",
    "en-US":
      "Reykjavík to Ísafjörður flies from the capital to the most remote corner of Iceland — the Westfjords in the north-west. After take-off you head north-west across Faxaflói bay." +
      "From the bay's north shore a long, thin peninsula reaches out, ending in Snæfellsjökull — a near-perfect cone of a volcano with an ice cap on top, visible from far away in good weather. This is the mountain Jules Verne used as the entrance in 'Journey to the Centre of the Earth'." +
      "Past the peninsula are the Westfjords: the oldest land in Iceland, cut into pieces by countless deep fjords and steep flat-topped mountains that rise almost vertically from the sea. Ísafjörður hides in a fjord on an L-shaped spit, its airport approach notoriously difficult, with a single road in and out.",
    },
    travel: {
    "zh-CN":
      "雷克雅未克到伊萨菲厄泽飞约 40 分钟，同一时区，用市区 RKV 机场。陆路走西部峡湾的盘山公路要 5–6 小时。" +
      "西部峡湾是冰岛最原始、游客最少的地方，公路少、隧道多，冬季常被大雪封住。伊萨菲厄泽机场天气一差就取消航班，行程要留弹性。" +
      "看拉特拉尔角的海鹦、进霍恩斯特兰迪无人区都只在夏季。丁坚地瀑布是这一带的标志。",
    "en-US":
      "Reykjavík to Ísafjörður is about 40 minutes, in the same time zone, using the city's RKV airport. By road on the winding Westfjords roads it is 5–6 hours." +
      "The Westfjords are the wildest, least-visited part of Iceland, with few roads, many tunnels, and often snowed in during winter. Ísafjörður's airport cancels flights in bad weather, so keep the itinerary flexible." +
      "Puffins at Látrabjarg and the uninhabited Hornstrandir reserve are summer only. The Dynjandi waterfall is the emblem of this area.",
    },
  },

  "rkv-hfn": {
    study: {
    "zh-CN":
      "雷克雅未克飞赫本，几乎全程沿冰岛南岸，是一条“瀑布—火山—冰川”的风景线。起飞后向东，先经过海克拉火山——冰岛历史上喷发最频繁的火山之一，中世纪的欧洲人叫它“地狱之门”，山体是一道长长的火山脊。" +
      "往东南，脚下越来越白：那是欧洲最大的冰川瓦特纳冰原，占了冰岛约八分之一的面积，几条冰川舌从边缘伸进冰水冲积平原（sandur）。" +
      "接近赫本，冰原边缘出现一个连着海的泻湖，里面漂满淡蓝色的浮冰——杰古沙龙冰河湖，冰是从冰川舌上崩落、顺水流向大海的。赫本就在冰原对面、一处潟湖口的沙嘴上。",
    "en-US":
      "Reykjavík to Höfn runs almost entirely along Iceland's south coast, a 'waterfalls–volcanoes–glaciers' scenic line. After take-off you head east, first past Hekla — one of the most frequently erupting volcanoes in Iceland's history, which medieval Europeans called the 'gateway to Hell', its body a long volcanic ridge." +
      "South-east the ground grows whiter: Vatnajökull, the largest glacier in Europe, covering about an eighth of Iceland, with glacier tongues reaching into the outwash plains (sandur) from its edge." +
      "Approaching Höfn, a lagoon connected to the sea appears at the ice edge, full of pale blue floes — Jökulsárlón, where ice breaks off the glacier tongue and drifts to the sea. Höfn is opposite the ice cap, on a spit at the mouth of a lagoon.",
    },
    travel: {
    "zh-CN":
      "雷克雅未克到赫本飞约 50 分钟，同一时区，用市区 RKV 机场。自驾南岸环岛到赫本约 6 小时（沿途瀑布、黑沙滩、冰川很多，很多人分两天开）。" +
      "赫本是看杰古沙龙冰河湖、钻石沙滩、瓦特纳冰川国家公园的门户。冰川徒步和冬季蓝冰洞务必跟持证向导，不要自行上冰。冰河湖的浮冰和潮汐有危险。" +
      "冬季东南段公路遇大风会封，查 road.is 和 vedur.is。",
    "en-US":
      "Reykjavík to Höfn is about 50 minutes, in the same time zone, using the city's RKV airport. Driving the south coast to Höfn is about 6 hours (with many waterfalls, black beaches and glaciers on the way — many people take two days)." +
      "Höfn is the gateway to Jökulsárlón, Diamond Beach and Vatnajökull National Park. For glacier hikes and winter blue ice caves always go with a certified guide and never go onto the ice alone. The floes and tides at the lagoon are dangerous." +
      "In winter the south-east road closes for strong wind — check road.is and vedur.is.",
    },
  },

  "aey-egs": {
    study: {
    "zh-CN":
      "阿克雷里飞埃伊尔斯塔济，是一趟很短的北方支线，用小型螺旋桨飞机，低空飞过冰岛最活跃的火山区之一。起飞后往东，很快就到米湖——一个浅浅的湖，湖里和湖边全是各种形状的火山地貌：假火山口、熔岩柱林、还在冒汽的地热田。" +
      "米湖东边紧挨着克拉夫拉火山：一片破火山口和裂隙喷发区，20 世纪 70–80 年代这里连续喷发了近十年，地面至今能看到还没长草的新黑熔岩和一个亮绿色的火口湖。" +
      "过了这一带，地面转为东部的高地和河谷，埃伊尔斯塔济就在拉加尔湖畔。",
    "en-US":
      "Akureyri to Egilsstaðir is a short northern regional hop on a small propeller aircraft, flying low over one of the most active volcanic areas in Iceland. After take-off you head east and soon reach Mývatn — a shallow lake full of volcanic features of every shape: pseudocraters, lava pillars, and still-steaming geothermal fields around it." +
      "Just east of Mývatn is the Krafla volcano: an area of caldera and fissure eruptions that erupted almost continuously for a decade in the 1970s–80s, and where you can still see fresh black lava with no grass yet and a bright green crater lake." +
      "Past this area the land becomes the eastern highland and valleys, and Egilsstaðir is on Lagarfljót.",
    },
    travel: {
    "zh-CN":
      "阿克雷里到埃伊尔斯塔济飞约 30 分钟，由 Norlandair 用小飞机执飞、班次少。自驾走环岛北段约 2.5 小时（沿途上帝瀑布、米湖、黛提瀑布，值得慢慢开）。" +
      "米湖一带夏季有大量小咬人的蠓虫，带头网和驱虫液。地热区严格走步道，地表薄、烫。" +
      "冬季这条线路况差、航班少，多数人夏季来、自驾串米湖和黛提瀑布。",
    "en-US":
      "Akureyri to Egilsstaðir is about 30 minutes, flown by Norlandair on a small aircraft with infrequent service. Driving the northern Ring Road is about 2.5 hours (with Goðafoss, Mývatn and Dettifoss on the way — worth taking slowly)." +
      "The Mývatn area has swarms of biting midges in summer — take a head net and repellent. In geothermal areas stay strictly on the paths; the crust is thin and scalding." +
      "In winter this route has poor road conditions and few flights, and most people come in summer and drive the Mývatn–Dettifoss stretch.",
    },
  },

  "rkv-hzk": {
    study: {
    "zh-CN":
      "雷克雅未克飞胡萨维克，从首都飞到北方的观鲸小镇，航路和飞阿克雷里的差不多，横穿冰岛中央那片人无法居住的高地。起飞后不久，脚下出现辛格维利尔的板块裂谷——北美与欧亚板块在这里被拉开，地面裂成一道道平行的沟壑，中间是冰岛最大的天然湖。" +
      "往北进入中央高地：一片灰黑色的火山荒漠，几乎没有植被。航线掠过朗格冰原和位于冰岛正中心的霍夫斯冰原——两座圆盾形的冰帽，之间是熔岩、火山砾和冰川融水冲出的辫状河。这片高地夏季才有碎石路（F 公路）穿过，冬季完全封闭、无人居住。" +
      "越过高地北缘，地面陷成一条条南北向的深谷和峡湾。胡萨维克就在斯基亚尔万迪湾东岸，一个背靠低山的小渔港，外海食物丰富，夏季常有座头鲸。",
    "en-US":
      "Reykjavík to Húsavík flies from the capital to the northern whale-watching town, on a track much like the one to Akureyri, crossing the central highland. After take-off you pass the plate rift at Þingvellir, then enter the volcanic desert." +
      "The route passes Langjökull and Hofsjökull at the very centre of Iceland — two round, shield-shaped ice caps, with grey-black lava and volcanic gravel between them, almost lifeless. This highland has gravel roads (F-roads) only in summer and is completely closed in winter." +
      "Over the northern edge of the highland the land drops into fjords, and Húsavík is on the eastern shore of Skjálfandi Bay, a small fishing town backed by low hills.",
    },
    travel: {
    "zh-CN":
      "雷克雅未克到胡萨维克飞约 45 分钟，由 Norlandair 执飞、班次少；多数人先飞或开车到阿克雷里，再开一小时到胡萨维克。" +
      "胡萨维克被称作“欧洲观鲸之都”，6–8 月能稳定看到座头鲸。船上冷，带防风防水外套，晕船提前吃药。" +
      "镇上还有 GeoSea 海崖温泉。往南可跑“钻石环线”：上帝瀑布、米湖、黛提瀑布、Ásbyrgi 峡谷。",
    "en-US":
      "Reykjavík to Húsavík is about 45 minutes, flown by Norlandair with infrequent service; most people fly or drive to Akureyri first and then drive an hour to Húsavík." +
      "Húsavík is called the 'whale-watching capital of Europe', with reliable humpback sightings June–August. It is cold on the boat — bring a windproof, waterproof jacket, and take seasickness medication in advance." +
      "The town also has the GeoSea cliff baths. South you can drive the 'Diamond Circle': Goðafoss, Mývatn, Dettifoss and the Ásbyrgi canyon.",
    },
  },

  "zrh-lug": {
    study: {
    "zh-CN":
      "苏黎世飞卢加诺，是一趟很短的航班，却把整条阿尔卑斯山脉从北到南横切了一遍，从德语区飞到意大利语区。起飞后先掠过苏黎世湖——一条冰川挖出、细长弯曲的湖，湖两岸是富裕的“黄金海岸”。" +
      "往南很快到卢塞恩湖：一个形状极不规则、被陡峭山壁夹住的湖，瑞士联邦最早的几个州就在它周围。" +
      "接着地面猛然升高，进入阿尔卑斯主脊：圣哥达山块是这里的关键——它是欧洲的一处分水岭，罗讷河、莱茵河、提契诺河都从这一带发源，历史上翻越圣哥达山口是连接南北欧的要道，如今山下有世界最长的铁路隧道（戈特哈德基线隧道，约 57 公里）。" +
      "翻过主脊，气候和植被立刻变了：南坡是温暖湿润的提契诺，出现栗树和棕榈。马焦雷湖和卢加诺湖是几条伸进意大利的狭长湖，卢加诺就在湖湾里、两座锥形山之间。",
    "en-US":
      "Zürich to Lugano is a short flight that cuts across the whole Alpine chain from north to south, from the German-speaking region to the Italian-speaking one. After take-off you skim Lake Zürich — a long, curving lake gouged by a glacier, its shores the wealthy 'Gold Coast'." +
      "South you soon reach Lake Lucerne: a very irregular lake hemmed in by steep walls, around which the first cantons of the Swiss confederation lay." +
      "Then the ground rises sharply into the main Alpine crest, where the Gotthard Massif is key — a watershed of Europe, where the Rhône, the Rhine and the Ticino all rise, historically a vital pass between northern and southern Europe, and now with the world's longest rail tunnel (the Gotthard Base Tunnel, about 57 km) beneath it." +
      "Over the crest the climate and vegetation change at once: the southern slope is warm, humid Ticino, with chestnut trees and palms. Lake Maggiore and Lake Lugano are long lakes reaching into Italy, and Lugano is in a bend of its lake between two conical mountains.",
    },
    travel: {
    "zh-CN":
      "苏黎世到卢加诺飞约 40 分钟，同一时区、同一国家。其实瑞士几乎没有国内定期航班——火车太方便了：经戈特哈德基线隧道约 2 小时，票价通常比飞机划算，而且风景（走老山线的 Gotthard Panorama Express）好得多。" +
      "卢加诺说意大利语、气候温和，是瑞士难得能晒太阳吃意面看棕榈的地方，常作为翻越阿尔卑斯的南端落脚点。" +
      "瑞士属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Zürich to Lugano is about 40 minutes, same time zone, same country. In fact Switzerland has almost no scheduled domestic flights — the train is so convenient: about 2 hours through the Gotthard Base Tunnel, usually cheaper than flying, and with far better scenery on the old mountain line (the Gotthard Panorama Express)." +
      "Lugano is Italian-speaking and mild, the rare place in Switzerland to sit in the sun, eat pasta and see palm trees, and a good southern base after crossing the Alps." +
      "Switzerland is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "zrh-gva": {
    study: {
    "zh-CN":
      "苏黎世飞日内瓦，是瑞士两大城市之间的连线，几乎全程在阿尔卑斯山以北的“中部高原”上飞——瑞士的人口、城市和农田都集中在这条从东北到西南的丘陵湖泊带里。" +
      "起飞后先经过卢塞恩湖一带的湖山交界，然后是典型的高原景观：一片片牧场和麦田、散落的村镇、几个中等大小的湖（比尔湖、纳沙泰尔湖），背景是南面阿尔卑斯的雪墙。" +
      "接近终点，出现一个巨大的新月形湖——日内瓦湖（法语 Lac Léman），是阿尔卑斯北缘最大的湖，罗讷河从东端流入、西端的日内瓦流出。城市几乎被法国领土包住，湖对岸远处是勃朗峰。",
    "en-US":
      "Zürich to Geneva links Switzerland's two largest cities, flown almost entirely over the 'Swiss Plateau' north of the Alps — where the country's population, cities and farmland are concentrated, in this belt of hills and lakes running north-east to south-west." +
      "After take-off you pass the lake-and-mountain junction around Lake Lucerne, then the typical plateau landscape: patchwork pasture and wheat fields, scattered towns, a few medium lakes (Biel, Neuchâtel), with the wall of the Alps to the south." +
      "Near the end a huge crescent lake appears — Lake Geneva (Lac Léman), the largest lake on the northern edge of the Alps, with the Rhône flowing in at the east end and out at Geneva in the west. The city is almost surrounded by French territory, and Mont Blanc is visible in the distance across the lake.",
    },
    travel: {
    "zh-CN":
      "苏黎世到日内瓦飞约 45 分钟，同一时区。瑞士国内基本靠火车（约 2 小时 45 分、直达、市中心到市中心），SWISS 飞这条线主要是为转机旅客。" +
      "苏黎世是德语区、日内瓦是法语区，两地生活方式略不同、都英语通用。日内瓦国际组织多、物价在瑞士也偏高，很多博物馆每月第一个周日免费。" +
      "机场取行李处可领 80 分钟市内交通票，住宿通常送交通卡。",
    "en-US":
      "Zürich to Geneva is about 45 minutes, in the same time zone. Domestic travel in Switzerland is essentially by train (about 2 hours 45 minutes, direct, city centre to city centre), and SWISS flies this route mainly for connecting passengers." +
      "Zürich is German-speaking and Geneva French-speaking, with slightly different lifestyles, and English works in both. Geneva has many international organisations and high prices even for Switzerland, and many museums are free on the first Sunday of the month." +
      "At baggage claim you can collect an 80-minute transit ticket, and accommodation usually includes a transport card.",
    },
  },

  "gva-lug": {
    study: {
    "zh-CN":
      "日内瓦飞卢加诺，从瑞士最西南飞到最东南，几乎全程贴着阿尔卑斯主脊飞，是这几条线里景观最壮的一条。起飞后沿日内瓦湖北岸——湖边是拉沃的梯田葡萄园，一层层石墙从水边爬到山上。" +
      "往东进山，脚下是伯尔尼阿尔卑斯：少女峰、僧侣峰、艾格峰一列雪峰，山谷里挂满瀑布（劳特布龙嫩谷）。" +
      "再往东是阿莱奇冰川——阿尔卑斯最长的冰川，约 20 公里长，三条粒雪流在“康科迪亚广场”汇成一条宽阔的冰河，缓缓向南流。" +
      "越过圣哥达山块（欧洲的分水岭、戈特哈德基线隧道所在），气候突然转暖，进入说意大利语的提契诺，栗树和棕榈出现，卢加诺就在一个伸向意大利的狭长湖畔。",
    "en-US":
      "Geneva to Lugano flies from the far south-west of Switzerland to the far south-east, almost entirely along the main Alpine crest — the most spectacular of these routes. After take-off you follow the north shore of Lake Geneva, lined by the terraced Lavaux vineyards, their stone walls climbing from the water up the hillside." +
      "East into the mountains, below are the Bernese Alps: the Jungfrau, the Mönch and the Eiger in a row of snow peaks, with waterfalls hanging in the valleys (the Lauterbrunnen valley)." +
      "Farther east is the Aletsch Glacier — the longest glacier in the Alps, about 20 km, where three firn streams meet at 'Konkordiaplatz' to form one broad river of ice flowing slowly south." +
      "Over the Gotthard Massif (a watershed of Europe, and the site of the Gotthard Base Tunnel) the climate suddenly warms into Italian-speaking Ticino, with chestnut trees and palms, and Lugano lies on a long lake reaching toward Italy.",
    },
    travel: {
    "zh-CN":
      "日内瓦到卢加诺飞约 50 分钟，同一时区。火车走这条线要换乘、约 5 小时，所以这条是瑞士少数有点意义的国内航线。" +
      "从法语区飞到意大利语区，气候和气质都变了：卢加诺温和、松弛、更“意式”。以它为基地可去贝林佐纳看三座世界遗产城堡、坐船游卢加诺湖。" +
      "瑞士属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Geneva to Lugano is about 50 minutes, in the same time zone. The train on this route needs changes and takes about 5 hours, so this is one of the few Swiss domestic flights that makes some sense." +
      "Flying from the French-speaking region to the Italian-speaking one, the climate and feel change: Lugano is mild, relaxed and more 'Italian'. From it you can visit Bellinzona and its three World Heritage castles, or take a boat on Lake Lugano." +
      "Switzerland is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "osl-bgo": {
    study: {
    "zh-CN":
      "奥斯陆飞卑尔根，是挪威最繁忙的国内航线，把东部的首都和西部峡湾区连起来，同时也是这条铁路（卑尔根铁路）走的路线。起飞后先越过东部的森林和农田，然后地面骤然抬升，进入哈当厄高原——欧洲最大的高山高原之一，平均海拔超过 1100 米，几乎没有树、只有苔原、湖泊和驯鹿，冬季常年积雪。" +
      "翻过高原西缘，地面陷成一条深深的峡湾——哈当厄峡湾，挪威第二长的峡湾，两岸是果园和瀑布，峡湾深处能看到佛尔格冰帽的白色边缘。" +
      "越过最后一道山地，卑尔根出现在七座山环抱的一个小海湾里，背后就是通往外海的峡湾口。",
    "en-US":
      "Oslo to Bergen is Norway's busiest domestic route, linking the eastern capital with the western fjord region, and follows much the same line as the Bergen Railway. After take-off you cross the eastern forests and farmland, then the ground rises sharply into the Hardangervidda — one of the largest high mountain plateaus in Europe, averaging over 1,100 m, almost treeless, just tundra, lakes and reindeer, snow-covered most of the year." +
      "Over the western edge of the plateau the land drops into a deep fjord, the Hardangerfjord — Norway's second-longest — its shores lined with orchards and waterfalls, and the white edge of the Folgefonna ice cap visible deep in the fjord." +
      "Over one last stretch of mountains, Bergen appears in a small bay ringed by seven mountains, with the fjord mouth to the open sea behind it.",
    },
    travel: {
    "zh-CN":
      "奥斯陆到卑尔根飞约 55 分钟，同一时区。也可以坐卑尔根铁路（约 6.5 小时，世界知名的风景线，经米达尔可换弗洛姆铁路），很多人飞去坐火车回、或反过来。" +
      "奥斯陆四季分明、冬雪不算极端；卑尔根非常多雨，一年约 240 天下雨，随身带防水外套。" +
      "卑尔根常作为峡湾游轮和西海岸自驾的起点，往 Hardangerfjord 方向可顺路看瀑布和果园。挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Oslo to Bergen is about 55 minutes, in the same time zone. You can also take the Bergen Railway (about 6.5 hours, a world-famous scenic line, with a change at Myrdal for the Flåm Railway) — many people fly one way and take the train the other." +
      "Oslo has four clear seasons with not-extreme winter snow; Bergen is very wet, with about 240 rainy days a year — carry a waterproof jacket." +
      "Bergen is often the starting point for fjord cruises and west-coast road trips, and the Hardangerfjord road passes waterfalls and orchards. Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "osl-trd": {
    study: {
    "zh-CN":
      "奥斯陆飞特隆赫姆，沿着挪威中部一条历史悠久的南北通道飞行，古德布兰河谷铁路和 E6 公路都走这条线。起飞后先经过姆约萨湖——挪威最大的湖，然后进入古德布兰河谷：一条沿地质断裂带发育的狭长大河谷，两侧是农庄和森林。" +
      "河谷东侧能看到龙达讷——一片浑圆的古老山峰群，是挪威最早的国家公园之一。继续北飞，河谷收窄、抬升，最终没入多夫勒山：一片开阔的高山高原，麝牛就生活在这里（19 世纪末从格陵兰引入，是欧洲大陆仅存的野生麝牛种群之一）。" +
      "翻过多夫勒山，地面下降进入特伦德拉格的低地，特隆赫姆就在尼德河汇入特隆赫姆峡湾处。",
    "en-US":
      "Oslo to Trondheim flies along a historic north–south corridor through central Norway, the same line followed by the Gudbrandsdalen railway and the E6 road. After take-off you pass Mjøsa, Norway's largest lake, then enter Gudbrandsdalen: a long, narrow valley along a geological fault, farms and forest on either side." +
      "To the east of the valley is Rondane — a cluster of rounded old peaks, one of Norway's first national parks. Flying on north, the valley narrows and rises, finally merging into Dovrefjell: an open high mountain plateau, home to musk oxen (introduced from Greenland in the late 19th century, one of the last wild populations on mainland Europe)." +
      "Over Dovrefjell the land drops into the Trøndelag lowlands, and Trondheim is where the Nidelva meets the Trondheimsfjord.",
    },
    travel: {
    "zh-CN":
      "奥斯陆到特隆赫姆飞约 55 分钟，同一时区。也可坐多夫勒线火车（约 7 小时，沿途正是这条航线看到的河谷和高原）。" +
      "特隆赫姆比奥斯陆偏北，但受峡湾调节，冬夏都不算极端。以特隆赫姆为基地可继续坐诺尔兰线火车北上博德、跨北极圈。" +
      "多夫勒山一带看到麝牛要保持距离（它们体型大、可能有攻击性），别靠近拍照。挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Oslo to Trondheim is about 55 minutes, in the same time zone. You can also take the Dovre Line train (about 7 hours, through exactly the valleys and plateau seen from the air)." +
      "Trondheim is further north than Oslo but moderated by the fjord, so neither winter nor summer is extreme. From Trondheim you can continue north on the Nordland Line train to Bodø, crossing the Arctic Circle." +
      "If you see musk oxen around Dovrefjell, keep your distance — they are large and can be aggressive, so don't approach for photos. Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "osl-svg": {
    study: {
    "zh-CN":
      "奥斯陆飞斯塔万格，从首都飞到石油之都，也是一条穿山又贴海的线。起飞后先越过东部低地，然后进入哈当厄高原的南缘——同一片高山高原，这里更靠近它的南端。" +
      "接近终点，地面出现吕瑟峡湾——一条又窄又直的峡湾，两侧是近乎垂直的花岗岩壁，峡湾上方悬着两块著名的岩石：一块是几乎水平的巨型岩台“布道石”，另一块是卡在裂缝里的巨石“奇迹石”。" +
      "斯塔万格就在峡湾外侧、一片被岛屿和浅海包围的半岛上，城外是南部典型的低缓耶伦农业平原。",
    "en-US":
      "Oslo to Stavanger flies from the capital to the oil capital, a route that crosses mountains and hugs the coast. After take-off you cross the eastern lowlands, then the southern edge of the Hardangervidda — the same high plateau, here nearer its southern end." +
      "Near the end, the Lysefjord appears below — a narrow, straight fjord with near-vertical granite walls, above which hang two famous rocks: the almost-horizontal ledge known as Preikestolen (Pulpit Rock), and Kjeragbolten, a boulder wedged in a crack." +
      "Stavanger sits outside the fjord, on a peninsula surrounded by islands and shallow sea, with the low, flat farmland of Jæren beyond the city.",
    },
    travel: {
    "zh-CN":
      "奥斯陆到斯塔万格飞约 50 分钟，同一时区。也可坐南部线火车（约 8 小时，绕得较远）。" +
      "斯塔万格是石油产业中心，物价和薪资在挪威也偏高。到斯塔万格后坐船去吕瑟峡湾徒步布道石很受欢迎，旺季一早出发人少一些，注意鞋和体力。" +
      "挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Oslo to Stavanger is about 50 minutes, in the same time zone. You can also take the Sørland Line train (about 8 hours, a roundabout route)." +
      "Stavanger is the oil-industry centre, with prices and wages on the high side even for Norway. From Stavanger, a boat to the Lysefjord to hike Preikestolen is popular — going early in peak season means fewer people; mind your footwear and fitness." +
      "Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "osl-tos": {
    study: {
    "zh-CN":
      "奥斯陆飞特罗姆瑟，几乎飞完了挪威的全部长度，从首都一直飞到北极圈以北。起飞后先经过多夫勒山的高山高原——挪威地势的一道大分水岭。" +
      "继续向北，进入诺尔兰的海岸山地：一列列尖锐的花岗岩峰几乎直接从海里拔起，斯瓦蒂森冰帽——大陆挪威第二大的冰原——就压在这一带的山顶上，几条冰川舌一直伸到接近海平面的地方。" +
      "越过北极圈，海面上出现罗弗敦群岛——一道由尖峭山峰组成的“墙”，从海里陡然升起，是挪威最上镜的风景之一。特罗姆瑟就在再往北的一座峡湾中的小岛上。",
    "en-US":
      "Oslo to Tromsø flies nearly the full length of Norway, from the capital to well north of the Arctic Circle. After take-off you cross the high plateau of Dovrefjell — a major watershed of the country." +
      "Flying on north, you reach the coastal mountains of Nordland: rows of sharp granite peaks rising almost straight from the sea, with the Svartisen ice cap — the second-largest on mainland Norway — capping the summits here, its glacier tongues reaching down almost to sea level." +
      "Over the Arctic Circle the Lofoten Islands appear on the sea — a 'wall' of jagged peaks rising sheer from the water, one of Norway's most photographed landscapes. Tromsø is farther north still, on a small island in a fjord.",
    },
    travel: {
    "zh-CN":
      "奥斯陆到特罗姆瑟飞约 1 小时 50 分，同一时区。这段距离陆路要跨越大半个挪威，飞机是最实际的选择。" +
      "特罗姆瑟冬季比同纬度温和很多（暖流调节），但仍多风多雪；9 月底到 3 月是极光季，5 月中到 7 月中是午夜阳光。" +
      "看极光建议留 3–4 晚以上、跟机动向导追晴天。挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Oslo to Tromsø is about 1 hour 50 minutes, in the same time zone. This distance crosses most of Norway by land, so flying is the practical choice." +
      "Tromsø's winter is far milder than the latitude suggests (moderated by the warm current) but still windy and snowy; late September to March is aurora season, mid-May to mid-July the midnight sun." +
      "For the aurora, allow at least 3–4 nights and go with a mobile guide chasing clear skies. Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "trd-boo": {
    study: {
    "zh-CN":
      "特隆赫姆飞博德，沿诺尔兰海岸继续北飞，跨过北极圈，是诺尔兰铁路走的同一条路线（只是飞机快得多）。起飞后沿海岸线飞行，右侧是斯堪的纳维亚山脉的余脉，左侧是挪威海。" +
      "航线中段经过斯瓦蒂森冰帽——大陆挪威第二大的冰原，从空中能看到几条冰川舌从主体冰帽向峡湾方向流下，末端已经很接近海平面。这一带正好在北极圈附近，是夏天午夜阳光和冬天极光都能看到的过渡地带。" +
      "接近博德，海面出现群岛，博德本身建在一个伸进海里的半岛上，城南就是萨尔特海峡的大漩涡。",
    "en-US":
      "Trondheim to Bodø continues north along the Nordland coast, crossing the Arctic Circle, on the same route as the Nordland railway (just much faster by air). After take-off you follow the coastline, the tail of the Scandinavian Mountains to the right, the Norwegian Sea to the left." +
      "Mid-flight the route passes Svartisen — the second-largest ice cap on mainland Norway — and from the air you can see several glacier tongues flowing from the main ice cap toward the fjords, their ends already close to sea level. This area is right around the Arctic Circle, a transition zone where both the summer midnight sun and the winter aurora can be seen." +
      "Approaching Bodø, islands appear on the sea, and Bodø itself is built on a peninsula reaching into the water, with the Saltstraumen maelstrom just south of the city.",
    },
    travel: {
    "zh-CN":
      "特隆赫姆到博德飞约 55 分钟，同一时区。坐诺尔兰线火车要约 10 小时（跨北极圈那一刻列车上通常会广播）。" +
      "博德是去罗弗敦群岛的门户，有车渡（约 3.5 小时到莫斯克内斯）。看萨尔特海峡大漩涡要查潮汐表，挑大潮前后流速最快的时段。" +
      "挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Trondheim to Bodø is about 55 minutes, in the same time zone. The Nordland Line train takes about 10 hours (there is usually an announcement at the moment of crossing the Arctic Circle)." +
      "Bodø is the gateway to the Lofoten Islands, with a car ferry (about 3.5 hours to Moskenes). To see the Saltstraumen maelstrom, check the tide table and go around the spring tides for the fastest flow." +
      "Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "tos-alf": {
    study: {
    "zh-CN":
      "特罗姆瑟飞阿尔塔，是北极挪威内部的一条短航线，从沿海飞到芬马克郡的内陆一侧。起飞后不久，脚下出现林根阿尔卑斯——一列陡峭的花岗岩尖峰，几乎直接从林根峡湾里拔起，是挪威山形最锋利的山脉之一，登山者称它“挪威的小阿尔卑斯”。" +
      "越过山脉，地面渐渐变得开阔平缓，进入芬马克高原——一片起伏的内陆苔原，长满矮桦和地衣，自古是萨米人放牧驯鹿的地方，至今仍有驯鹿群在这里季节性迁徙。" +
      "阿尔塔就在高原边缘、一条峡湾的尽头，阿尔塔河在这里入海。",
    "en-US":
      "Tromsø to Alta is a short flight within Arctic Norway, from the coast to the inland side of Finnmark county. Soon after take-off, below appear the Lyngen Alps — a row of steep granite spires rising almost straight out of the Lyngenfjord, among the sharpest mountain shapes in Norway, sometimes called 'Norway's little Alps' by climbers." +
      "Over the mountains the land gradually opens and flattens into the Finnmarksvidda — a rolling inland tundra plateau covered in dwarf birch and lichen, long used by the Sámi for reindeer herding, with herds still making seasonal migrations across it today." +
      "Alta is at the edge of the plateau, at the end of a fjord, where the Alta river reaches the sea.",
    },
    travel: {
    "zh-CN":
      "特罗姆瑟到阿尔塔飞约 40 分钟，同一时区。这一带公路远、开车要好几小时，飞机是北极挪威城镇间常用的交通方式。" +
      "阿尔塔内陆气候更干、晴天更多，常被认为是挪威看极光成功率较高的地方之一。冬季很冷，装备要按极寒准备。" +
      "阿尔塔有世界遗产岩画，往内陆去卡拉绍克、考托凯诺能了解萨米文化。挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Tromsø to Alta is about 40 minutes, in the same time zone. Roads here are long, taking several hours by car, so flying is a common way to travel between towns in Arctic Norway." +
      "Inland Alta has a drier, sunnier climate and is often reckoned one of the more reliable places in Norway to see the aurora. Winters are very cold — prepare for extreme cold." +
      "Alta has World Heritage rock art, and inland at Karasjok and Kautokeino you can learn about Sámi culture. Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "bgo-trd": {
    study: {
    "zh-CN":
      "卑尔根飞特隆赫姆，沿挪威西海岸北飞，是这几条航线里峡湾和冰川最密集的一条。起飞后先经过松恩峡湾——挪威最长、最深的峡湾，从海岸一直伸进内陆约 200 公里，两岸雪山陡立。" +
      "紧接着是约斯特达尔冰原——欧洲大陆最大的冰原，几十条冰川舌从主体向四面延伸，其中几条能开车或徒步靠近。" +
      "继续北飞，出现盖朗厄尔峡湾——一条以陡崖瀑布著称的窄峡湾（“七姊妹”瀑布是其中最有名的一段），随后是龙斯达尔谷——一条被冰川刨出的笔直深谷，谷壁上有挪威最高的垂直崖面之一。" +
      "最后越过特罗尔海门山地，地面平缓下来，特隆赫姆出现在峡湾尽头。",
    "en-US":
      "Bergen to Trondheim flies up Norway's west coast, the densest of these routes in fjords and glaciers. After take-off you first pass the Sognefjord — Norway's longest and deepest fjord, reaching about 200 km inland from the coast, with steep snow mountains on both sides." +
      "Right after it is Jostedalsbreen — the largest ice cap on mainland Europe, with dozens of glacier tongues reaching out from the main body in every direction, several of them reachable by road or on foot." +
      "Flying on north, the Geirangerfjord appears — a narrow fjord known for its sheer cliffs and waterfalls (the 'Seven Sisters' is its most famous stretch), followed by Romsdalen — a straight, deep valley carved by ice, its walls including one of Norway's highest vertical rock faces." +
      "Finally, over the Trollheimen mountains, the land eases and Trondheim appears at the head of its fjord.",
    },
    travel: {
    "zh-CN":
      "卑尔根到特隆赫姆飞约 55 分钟，同一时区。这条线陆路要绕很远（渡轮加公路），飞机是最实际的方式，也是看西海岸峡湾全景最省时间的方法。" +
      "西海岸多雨多风，天气一年四季都可能变化很快。以卑尔根或特隆赫姆为两端，很多人分别安排峡湾游船和自驾串起沿线景点。" +
      "挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Bergen to Trondheim is about 55 minutes, in the same time zone. By land this route is a long detour of ferries and roads, so flying is the practical way, and also the fastest way to see the whole panorama of west-coast fjords." +
      "The west coast is wet and windy, with weather that can change fast in any season. Using Bergen and Trondheim as the two ends, many people arrange a fjord cruise and a road trip to link up the sights along the way." +
      "Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "svg-bgo": {
    study: {
    "zh-CN":
      "斯塔万格飞卑尔根，是挪威西海岸最短的航段之一，飞机低空贴着海岸和峡湾飞，把两座峡湾区大城市连起来。斯塔万格所在的这一带海岸相对低平，机场周边是耶伦农业平原，起飞后很快就能看到田块和沙质海岸线。" +
      "不久脚下出现佛尔格冰帽——一座相对孤立的冰原，坐落在一个半岛的山脊上，两侧山坡陡降进峡湾，几条冰舌能开车靠近，是挪威少数几个“开车就能摸到冰川”的地方之一。" +
      "接着进入哈当厄峡湾——挪威第二长的峡湾，以两岸密集的果园闻名（苹果、梨、樱桃，春天开花时是挪威人自己的赏花季），峡湾深处能望见通往内陆哈当厄高原的方向。" +
      "最后越过一段海岸山地，卑尔根出现在峡湾群和外海之间、被七座山围住的一个小海湾里。",
    "en-US":
      "Stavanger to Bergen is one of the shortest hops on the Norwegian west coast, flown low along the coast and fjords. Soon after take-off, below is the Folgefonna — a relatively isolated ice cap sitting on a peninsula ridge, its slopes dropping steeply into fjords on either side, with glacier tongues reachable by road." +
      "Then comes the Hardangerfjord — Norway's second-longest fjord, known for its dense orchards on both shores (a famous blossom season in spring), with the route inland toward the Hardangervidda visible deep in the fjord." +
      "Bergen sits between this cluster of fjords and the open sea, in a small bay ringed by seven mountains.",
    },
    travel: {
    "zh-CN":
      "斯塔万格到卑尔根飞约 40 分钟，同一时区。沿海公路也能到，但要经过多段渡轮和世界最长的海底公路隧道，开车耗时更长。" +
      "春天（4–5 月）哈当厄峡湾沿岸果树开花，是挪威人自己也爱去的赏花季。两地都属西海岸海洋性气候，多雨多风，随身带防水外套。" +
      "挪威属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Stavanger to Bergen is about 40 minutes, in the same time zone. The coastal road also connects them, but with several ferries and the world's longest subsea road tunnel, driving takes much longer." +
      "In spring (April–May) the orchards along the Hardangerfjord blossom, a season Norwegians themselves travel to see. Both cities have a west-coast maritime climate — wet and windy — so carry a waterproof jacket." +
      "Norway is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "cdg-nce": {
    study: {
    "zh-CN":
      "巴黎飞尼斯，从法国北部一路飞到地中海岸，横穿这个国家的几个主要地形单元。起飞后先越过巴黎盆地——一个巨大的沉积盆地，塞纳河及其支流在这里冲出层层叠叠的低丘和田野，法国近一半人口住在这一带。" +
      "往南地面渐渐隆起，进入中央高原：一大片以死火山为主的老高原，多姆山链一带的熔岩穹丘和火口湖清晰可辨，是欧洲少见的、地表还能读出火山轮廓的地区之一。" +
      "越过高原东南缘，罗讷河河谷出现在脚下——这条从阿尔卑斯冰川发源、一路收纳支流南下的大河，是连接法国北部与地中海的历史通道。" +
      "接近尼斯，地面变成普罗旺斯阿尔卑斯的山地，凡尔登峡谷——欧洲最大的峡谷之一，由绿松石色的河水切出——就在这一带，最后飞机沿海岸线降落，蔚蓝海岸的弧形海湾展开在眼前。",
    "en-US":
      "Paris to Nice flies from the north of France to the Mediterranean coast, crossing several of the country's major landform provinces. After take-off you cross the Paris Basin — a huge sedimentary basin where the Seine and its tributaries have carved layered low hills and fields, home to nearly half of France's population." +
      "South the land gradually rises into the Massif Central: a large old plateau of mostly extinct volcanoes, with the lava domes and crater lakes of the Chaîne des Puys clearly visible — one of the few places in Europe where volcanic shapes are still readable on the surface." +
      "Over the south-eastern edge of the plateau, the Rhône valley appears below — the great river that rises from Alpine glaciers and gathers tributaries flowing south, historically the corridor linking northern France to the Mediterranean." +
      "Approaching Nice, the land becomes the mountains of the Provençal Alps, with the Gorges du Verdon — one of the largest canyons in Europe, cut by turquoise water — in this area, and finally the plane follows the coastline down to the curved bay of the Côte d'Azur.",
    },
    travel: {
    "zh-CN":
      "巴黎到尼斯飞约一小时半，同一时区。也可坐高铁（约 5.5 小时），但多数人选择飞。巴黎四季分明，尼斯是地中海气候、冬季温和、夏季炎热干燥。" +
      "靠窗依次能看到巴黎盆地的农田、中央高原的死火山、罗讷河谷、普罗旺斯的山地和最后的蔚蓝海岸。尼斯机场紧邻海岸、电车直达市区。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Nice is about an hour and a half, in the same time zone. You can also take high-speed rail (about 5.5 hours), but most people fly. Paris has four clear seasons; Nice has a Mediterranean climate, mild in winter and hot and dry in summer." +
      "From a window you see, in turn, the farmland of the Paris Basin, the extinct volcanoes of the Massif Central, the Rhône valley, the mountains of Provence and finally the Côte d'Azur. Nice airport is right on the coast, with a tram straight into the city." +
      "France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "cdg-mrs": {
    study: {
    "zh-CN":
      "巴黎飞马赛，是法国最经典的南北纵贯航线之一，走的路线和高铁东南线大致平行。起飞后先越过巴黎盆地的农田和低丘，然后进入中央高原——法国最大的死火山群所在地，多姆山链的熔岩穹丘从空中很好辨认。" +
      "越过高原南缘，罗讷河谷出现在脚下：这条大河把中央高原和阿尔卑斯山分开，河谷两岸是葡萄园（罗讷河谷是法国重要的葡萄酒产区之一）。" +
      "接近马赛，罗讷河在一片低平的三角洲——卡马尔格——散开入海，这里是大片湿地、盐沼和野生白马、火烈鸟的栖息地。马赛就在卡马尔格以东的一片石灰岩海岸边。",
    "en-US":
      "Paris to Marseille is one of France's classic north–south routes, roughly parallel to the high-speed rail line to the south-east. After take-off you cross the farmland and low hills of the Paris Basin, then the Massif Central — France's largest cluster of extinct volcanoes, the lava domes of the Chaîne des Puys easily picked out from the air." +
      "Over the southern edge of the plateau, the Rhône valley appears below: the great river separating the Massif Central from the Alps, its banks lined with vineyards (the Rhône valley is an important French wine region)." +
      "Approaching Marseille, the Rhône spreads into the sea across a flat delta, the Camargue — a wetland of marshes, salt flats, wild white horses and flamingos. Marseille is on a limestone coast just east of the Camargue.",
    },
    travel: {
    "zh-CN":
      "巴黎到马赛飞约一小时二十分，同一时区。高铁约 3.2 小时，很多人也会选火车。马赛属地中海气候，夏季炎热干燥，常有干冷的密史脱拉风。" +
      "靠窗能看到中央高原的火山地貌和罗讷河三角洲的卡马尔格湿地。马赛机场进城有机场大巴。以马赛为起点可去卡朗格峡湾岸徒步、坐船去伊夫堡。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Marseille is about an hour and twenty minutes, in the same time zone. High-speed rail is about 3.2 hours, and many people choose the train. Marseille has a Mediterranean climate, hot and dry in summer, often with the dry, cold Mistral wind." +
      "From a window you see the volcanic landscape of the Massif Central and the Camargue wetland at the Rhône delta. There's an airport bus into Marseille. From Marseille you can hike the Calanques coast or take a boat to the Château d'If." +
      "France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "cdg-tls": {
    study: {
    "zh-CN":
      "巴黎飞图卢兹，从法国北部飞到西南部的“玫瑰之城”，也是空客总部所在地。起飞后先越过巴黎盆地——塞纳河冲出的层叠丘陵和田野。" +
      "航线中段掠过中央高原西南缘：这一带没有多姆山链那样密集的火山锥，而是被河流切出的深峡谷（塔恩峡谷等就在附近），高原边缘陡然跌落到阿基坦盆地。" +
      "越过高原，地面变成阿基坦盆地——加龙河及其支流冲积出的一片开阔平原，图卢兹就在盆地东缘、加龙河畔，因大量使用当地烧制的粉红砖瓦而得名“玫瑰之城”。",
    "en-US":
      "Paris to Toulouse flies from the north of France to the 'Pink City' of the south-west, also home to Airbus's headquarters. After take-off you cross the Paris Basin — the layered hills and fields cut by the Seine." +
      "Mid-flight the route skirts the south-western edge of the Massif Central: this stretch lacks the dense volcanic cones of the Chaîne des Puys, instead cut by deep river gorges (the Gorges du Tarn and others are nearby), with the plateau edge dropping sharply to the Aquitaine Basin." +
      "Beyond the plateau the land becomes the Aquitaine Basin — a broad plain built by the Garonne and its tributaries — and Toulouse is on the eastern edge of the basin, on the Garonne, named 'the Pink City' for its widespread use of locally fired pink brick.",
    },
    travel: {
    "zh-CN":
      "巴黎到图卢兹飞约一小时十五分，同一时区。高铁约 4.5 小时，多数商务和长途旅客会选飞机。图卢兹夏季炎热干燥、冬季温和，受大西洋和地中海双重影响。" +
      "靠窗能看到中央高原西南缘的地形和阿基坦盆地的农田。图卢兹机场有轨道接驳市区。空客工厂参观需提前很久在线预约。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Toulouse is about an hour and fifteen minutes, in the same time zone. High-speed rail is about 4.5 hours, and most business and long-distance travellers fly. Toulouse has hot, dry summers and mild winters, influenced by both the Atlantic and the Mediterranean." +
      "From a window you see the terrain of the south-western Massif Central and the farmland of the Aquitaine Basin. Toulouse airport has a rail link into the city. Airbus factory tours need booking well ahead online." +
      "France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "cdg-bod": {
    study: {
    "zh-CN":
      "巴黎飞波尔多，是法国两大沉积盆地之间的一条短航线。起飞后先越过巴黎盆地——一片被塞纳河及支流冲积、层层叠叠的低丘农田，法国近一半人口住在这个盆地里。" +
      "航线大部分时间在盆地之间的过渡地带飞行，越往南地势越低平、越接近海平面，森林和牧场渐渐取代了密集的农田。接近波尔多，地面完全变成阿基坦盆地：加龙河及其支流冲积出的开阔平原，两岸是世界知名的葡萄园——梅多克在左岸、圣埃美隆在右岸，从空中能看到成排的葡萄藤纹理。" +
      "波尔多城就建在加龙河一个新月形的河湾里，因此被称为“新月之城”，18 世纪的石造联排建筑沿河岸连成一片。",
    "en-US":
      "Paris to Bordeaux is a short flight between France's two great sedimentary basins. After take-off you cross the Paris Basin — layered low hills and farmland built by the Seine and its tributaries." +
      "Most of the flight is over the transition zone between the two basins, the land growing flatter and closer to sea level heading south. Approaching Bordeaux, the land is entirely the Aquitaine Basin: a broad plain built by the Garonne and its tributaries, with world-famous vineyards on both banks — the Médoc on the left, Saint-Émilion on the right." +
      "The city of Bordeaux is built in a crescent-shaped bend of the Garonne, hence its name 'the Port of the Moon'.",
    },
    travel: {
    "zh-CN":
      "巴黎到波尔多飞约一小时十分，同一时区。高铁约 2 小时（大西洋线通车后大幅缩短），很多人会坐火车。波尔多受大西洋调节，温和湿润。" +
      "靠窗能看到两大盆地之间的地形过渡、以及波尔多周边的葡萄园。以波尔多为基地可去圣埃美隆或梅多克酒庄参观品鉴（多数需预约），也可以去皮拉大沙丘（欧洲最高沙丘）。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Bordeaux is about an hour and ten minutes, in the same time zone. High-speed rail is about 2 hours (much shorter since the Atlantic line opened), and many people take the train. Bordeaux is moderated by the Atlantic, mild and humid." +
      "From a window you see the transition between the two basins and the vineyards around Bordeaux. From Bordeaux you can visit Saint-Émilion or a Médoc estate for a tasting (mostly by appointment), or the Dune du Pilat, Europe's tallest sand dune." +
      "France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "cdg-str": {
    study: {
    "zh-CN":
      "巴黎飞斯特拉斯堡，是一条很短的东西向航线，从巴黎盆地飞到莱茵河边的阿尔萨斯。起飞后先越过巴黎盆地东缘——塞纳河支流马恩河一带的农田和台地。" +
      "接近终点，地面隆起成孚日山脉：一列不算太高、被侵蚀得比较圆润的古老山脉，是阿尔萨斯平原和洛林高原之间的分界，山的东坡因为阻挡西风带来的水汽，比西坡更干燥。" +
      "翻过孚日山，脚下豁然开阔，出现莱茵河谷北段的阿尔萨斯平原：一条南北向的沉积地堑，斯特拉斯堡就在这片平原上、莱茵河支流伊尔河畔，紧邻德国边境。",
    "en-US":
      "Paris to Strasbourg is a short east–west flight from the Paris Basin to Alsace on the Rhine. After take-off you cross the eastern edge of the Paris Basin — farmland and terraces around the Marne, a tributary of the Seine." +
      "Near the end the land rises into the Vosges: a not-very-high, well-rounded old mountain range dividing the Alsace plain from the Lorraine plateau, its eastern slope drier than the western because it blocks moisture carried by westerly winds." +
      "Over the Vosges the ground opens out below into the Alsace plain, the northern stretch of the Rhine valley: a north–south sedimentary rift, and Strasbourg sits on this plain on the Ill, a Rhine tributary, right on the German border.",
    },
    travel: {
    "zh-CN":
      "巴黎到斯特拉斯堡飞约五十五分钟，同一时区。高铁约 1.8 小时，很多人会选火车（市中心到市中心更方便）。斯特拉斯堡属大陆性气候，冬冷夏热。" +
      "靠窗能看到孚日山和阿尔萨斯平原。12 月圣诞市集期间是斯特拉斯堡全年最热闹的时候，也最挤，住宿要早订。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Strasbourg is about 55 minutes, in the same time zone. High-speed rail is about 1.8 hours, and many people choose the train (more convenient city centre to city centre). Strasbourg has a continental climate, cold winters and hot summers." +
      "From a window you see the Vosges and the Alsace plain. Strasbourg's December Christmas market is the busiest and most crowded time of year — book lodging early." +
      "France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "cdg-nte": {
    study: {
    "zh-CN":
      "巴黎飞南特，沿着塞纳河流域和卢瓦尔河流域之间的分水岭往西南飞。起飞后先越过巴黎盆地西缘——农田和低丘缓缓向大西洋倾斜，田块比盆地中心更疏朗。" +
      "航线后半段贴近卢瓦尔河：法国最长的河流，从中央高原发源，一路向西北流经图尔、昂热，沿岸是著名的城堡带（卢瓦尔河谷因为这些王室和贵族城堡被列为世界遗产），河道宽阔、常年多沙洲。" +
      "南特就在卢瓦尔河即将入海前的河口一带，历史上是重要的大西洋港口，也曾是造船中心，卢瓦尔河的宽阔和缓慢从空中很好辨认，往西不远就是大西洋。",
    "en-US":
      "Paris to Nantes flies south-west along the watershed between the Seine and Loire basins. After take-off you cross the western edge of the Paris Basin — farmland and low hills sloping gently toward the Atlantic." +
      "The second half of the flight follows the Loire: France's longest river, rising in the Massif Central and flowing north-west past Tours and Angers, its banks lined with the famous château belt (the Loire valley is a World Heritage Site for these royal and noble castles)." +
      "Nantes is near the mouth of the Loire, not far from where it reaches the sea, historically an important Atlantic port, and the river's width and slow flow are easy to pick out from the air.",
    },
    travel: {
    "zh-CN":
      "巴黎到南特飞约五十五分钟，同一时区。高铁约 2 小时，很多人会选火车。南特受大西洋调节，气候温和湿润，很少极端天气。" +
      "靠窗能看到巴黎盆地和卢瓦尔河。南特机场有机场大巴。城市本身有机械岛的巨型机械大象，往东可安排卢瓦尔河谷城堡一日游（图尔或布卢瓦作为基地更近）。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Paris to Nantes is about 55 minutes, in the same time zone. High-speed rail is about 2 hours, and many people choose the train. Nantes is moderated by the Atlantic, mild and humid, rarely extreme." +
      "From a window you see the Paris Basin and the Loire. Nantes airport has an airport bus. The city itself has the giant mechanical elephant on the Île de Nantes, and a day trip east to the Loire château cluster is possible (Tours or Blois make a closer base)." +
      "France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "lys-mrs": {
    study: {
    "zh-CN":
      "里昂飞马赛，沿罗讷河谷南下，是一条很短却地貌丰富的线。起飞后不久，右侧（西侧）能看到韦科尔高原——一块被陡崖围住的石灰岩台地，二战期间是抵抗运动的据点之一（简短史实）。" +
      "继续南飞，脚下出现阿尔代什峡谷：一条河流在石灰岩高原上切出的深峡谷，谷中的阿尔克桥是一座跨度约 59 米的天然石桥。" +
      "接近马赛，罗讷河在卡马尔格散开入海——一片大面积的湿地、盐沼三角洲，是野生白马、黑牛和火烈鸟的栖息地。马赛就在卡马尔格以东的石灰岩海岸边。",
    "en-US":
      "Lyon to Marseille runs south down the Rhône valley, a short flight but rich in landforms. Soon after take-off, to the right (west) is the Vercors plateau — a limestone tableland ringed by cliffs, a stronghold of the French Resistance during the Second World War (a brief historical fact)." +
      "Flying on south, the Gorges de l'Ardèche appears below: a deep canyon a river has cut into a limestone plateau, with the Pont d'Arc, a natural stone bridge about 59 m across, inside it." +
      "Approaching Marseille, the Rhône spreads into the sea at the Camargue — a large wetland and salt-marsh delta, home to wild white horses, black cattle and flamingos. Marseille is on the limestone coast just east of the Camargue.",
    },
    travel: {
    "zh-CN":
      "里昂到马赛飞约四十分钟，同一时区。高铁约 1.7 小时，很多人会选火车。两地都属地中海/温带过渡气候，马赛更暖更干。" +
      "靠窗能看到韦科尔高原、阿尔代什峡谷和卡马尔格湿地。以马赛为终点可继续去卡朗格峡湾岸徒步。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Lyon to Marseille is about 40 minutes, in the same time zone. High-speed rail is about 1.7 hours, and many people choose the train. Both cities have a Mediterranean/temperate transitional climate, Marseille warmer and drier." +
      "From a window you see the Vercors plateau, the Gorges de l'Ardèche and the Camargue wetland. From Marseille you can continue on to hike the Calanques coast." +
      "France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "mrs-aja": {
    study: {
    "zh-CN":
      "马赛飞阿雅克肖，从法国本土飞到地中海上的科西嘉岛。起飞后不久就能看到卡朗格——马赛和卡西斯之间一段石灰岩峡湾海岸，陡峭的白色崖壁直插进湛蓝的海水，是法国最上镜的海岸线之一。" +
      "接着是一段开阔的地中海海面，飞行约一小时后，科西嘉岛的轮廓出现：一座多山的岛屿，中央脊由一系列 2000 米以上的花岗岩峰组成，海岸线曲折，兼有沙滩、峡湾式港湾和悬崖。" +
      "阿雅克肖就在岛屿西岸一个宽阔的海湾里，是拿破仑·波拿巴的出生地。",
    "en-US":
      "Marseille to Ajaccio flies from mainland France to the island of Corsica in the Mediterranean. Soon after take-off comes the Calanques — a limestone fjord coastline between Marseille and Cassis, steep white cliffs dropping straight into deep blue water, one of France's most photographed coastlines." +
      "Then a stretch of open Mediterranean, and after about an hour the outline of Corsica appears: a mountainous island whose central spine is a series of granite peaks over 2,000 m, with a very indented coastline combining beaches, fjord-like inlets and cliffs." +
      "Ajaccio is on the island's west coast, in a broad bay, the birthplace of Napoleon Bonaparte.",
    },
    travel: {
    "zh-CN":
      "马赛到阿雅克肖飞约五十分钟，同一时区。也可坐渡轮（约 6–10 小时，视航线而定）。科西嘉属地中海气候，夏季炎热干燥、冬季温和多雨，内陆山区冬季有雪。" +
      "靠窗能看到卡朗格峡湾岸和地中海，接近科西嘉时能看到岛屿多山的轮廓。岛内交通以自驾为主，山路多弯。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Marseille to Ajaccio is about 50 minutes, in the same time zone. There is also a ferry (about 6–10 hours, depending on the route). Corsica has a Mediterranean climate, hot and dry in summer, mild and rainy in winter, with snow in the inland mountains in winter." +
      "From a window you see the Calanques coast and the Mediterranean, and as you approach Corsica the mountainous outline of the island. Getting around the island is mostly by car, with many bends in the mountain roads." +
      "France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "nce-aja": {
    study: {
    "zh-CN":
      "尼斯飞阿雅克肖，是蔚蓝海岸和科西嘉岛之间最短的航线，几乎全程在地中海上空飞行。起飞后很快离开法国本土海岸，飞越一片开阔的蓝色海面——这段海域是利古里亚海的一部分，法国、意大利和科西嘉之间的三角海域。" +
      "飞行约四十分钟后，科西嘉岛北端的山影出现在海面上：岛屿中央是一条由花岗岩组成的高峻山脊，最高峰钦托山超过 2700 米，山顶常年有积雪。" +
      "阿雅克肖在岛屿西岸，飞机沿海岸线下降时能看到曲折的海湾、白色沙滩和陡峭的岬角。",
    "en-US":
      "Nice to Ajaccio is the shortest route between the Côte d'Azur and Corsica, flown almost entirely over the Mediterranean. After take-off you soon leave the mainland French coast, crossing open blue water — part of the Ligurian Sea, the triangular sea between France, Italy and Corsica." +
      "After about 40 minutes the mountain silhouette of northern Corsica appears over the water: the island's centre is a high granite ridge, its highest peak, Monte Cinto, over 2,700 m and often snow-capped." +
      "Ajaccio is on the island's west coast, and as the plane descends along the coastline you can see the winding bays, white beaches and steep headlands.",
    },
    travel: {
    "zh-CN":
      "尼斯到阿雅克肖飞约四十五分钟，同一时区。也有渡轮但耗时更长。科西嘉夏季炎热干燥、是法国人自己也爱去的海岛度假地，7–8 月航班和渡轮都很紧张。" +
      "靠窗全程基本是地中海海面，接近科西嘉时能看到多山的岛屿轮廓。岛内自驾山路多弯，晕车者备药。" +
      "法国属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Nice to Ajaccio is about 45 minutes, in the same time zone. There is also a ferry but it takes much longer. Corsica has hot, dry summers and is a beloved holiday island for the French themselves, so flights and ferries are tight in July–August." +
      "From a window it is mostly Mediterranean sea the whole way, with the mountainous outline of Corsica appearing near the end. Driving on the island means many bends in the mountain roads — bring motion-sickness medication if needed." +
      "France is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "fco-lin": {
    study: {
    "zh-CN":
      "罗马飞米兰，是意大利最繁忙的国内航线，从中部飞到西北部的金融中心，纵贯整个亚平宁半岛北段。起飞后不久，脚下出现特拉西梅诺湖——意大利中部最大的湖之一，湖面很浅、几乎不结冰，公元前 217 年汉尼拔在湖边伏击过罗马军队（简短史实）。" +
      "继续北飞，地面变成托斯卡纳丘陵：一片被长期农耕塑造的波状缓丘，柏树、葡萄园和赭石色农舍是这一带的典型景观，从空中能看出田块随丘陵起伏排列的纹理。" +
      "越过亚平宁山脉北段的余脉，地面骤然变得极其平坦——波河平原，意大利最大的连片平地，由波河及其支流冲积而成，是全国最重要的农业和工业区。米兰就在平原西部，主教座堂的尖塔从远处就能辨认。",
    "en-US":
      "Rome to Milan is Italy's busiest domestic route, from the centre to the north-western financial hub, running the length of the northern Apennine peninsula. Soon after take-off, Lake Trasimeno appears below — one of the largest lakes in central Italy, shallow and rarely freezing, where Hannibal ambushed a Roman army in 217 BC (a brief historical fact)." +
      "Flying on north, the land becomes the Tuscan hills: rolling country long shaped by farming, with cypress trees, vineyards and ochre farmhouses the typical scene, the fields' texture following the curves of the hills visible from the air." +
      "Over the northern tail of the Apennines, the land suddenly becomes extremely flat — the Po Valley, Italy's largest continuous plain, built up by the Po and its tributaries, the country's most important agricultural and industrial region. Milan is in the western part of the plain, its cathedral's spires recognisable from a distance.",
    },
    travel: {
    "zh-CN":
      "罗马到米兰飞约一小时十分，同一时区。高铁约三小时，很多商务旅客会选飞机、观光旅客更常选火车（沿途风景更好）。米兰比罗马更凉更潮湿，冬季易有雾霾。" +
      "靠窗依次能看到特拉西梅诺湖、托斯卡纳丘陵和波河平原。米兰机场用利纳特（近市区）或马尔彭萨（国际枢纽），提前确认航班用哪个。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。历史城区常有限行区（ZTL），自驾进城前查清楚。",
    "en-US":
      "Rome to Milan is about an hour and ten minutes, in the same time zone. High-speed rail is about three hours; many business travellers fly and sightseers more often take the train (better views along the way). Milan is cooler and more humid than Rome, with winter haze common." +
      "From a window you see, in turn, Lake Trasimeno, the Tuscan hills and the Po Valley. Milan's airport is either Linate (near the city) or Malpensa (the international hub) — confirm which one your flight uses ahead of time." +
      "Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. Historic centres often have restricted traffic zones (ZTL) — check before driving in.",
    },
  },

  "fco-vce": {
    study: {
    "zh-CN":
      "罗马飞威尼斯，从意大利中部飞到东北角的潟湖水城。起飞后先经过特拉西梅诺湖，随后越过亚平宁山脉北段的丘陵地带。" +
      "接近北部，地面变成波河平原——意大利最大的连片平地，方格田块和纵横灌渠从空中清晰可见，河道在平坦地面上蜿蜒。" +
      "平原东端，波河和其他几条河流冲积出的泥沙在亚得里亚海边形成了威尼斯潟湖——一片被沙洲和防波堤与外海隔开的浅水区，威尼斯的一百多座小岛就散落在潟湖里，飞机降落前能清楚看到运河纵横的城市轮廓和大运河的反 S 形走向。",
    "en-US":
      "Rome to Venice flies from central Italy to the lagoon city in the north-east corner. After take-off you pass Lake Trasimeno, then cross the hilly northern Apennines." +
      "Approaching the north, the land becomes the Po Valley — Italy's largest continuous plain, its square fields and criss-crossing irrigation channels clearly visible from the air, rivers winding across the flat ground." +
      "At the eastern end of the plain, silt carried down by the Po and other rivers has built the Venetian Lagoon on the Adriatic shore — a shallow-water area separated from the open sea by sandbars and breakwaters. Venice's hundred-plus small islands are scattered through the lagoon, and before landing you can clearly see the canal-laced city outline and the reverse-S curve of the Grand Canal.",
    },
    travel: {
    "zh-CN":
      "罗马到威尼斯飞约一小时五分，同一时区。高铁约三个半小时。威尼斯机场在潟湖北岸大陆一侧，有机场巴士或水上巴士进城（约一小时），城内没有汽车、全靠步行和水上巴士。" +
      "靠窗能看到特拉西梅诺湖、波河平原的农田和威尼斯潟湖的独特形态。秋冬威尼斯偶有“高水位”，出发前可查潮汐预报。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Rome to Venice is about an hour and five minutes, in the same time zone. High-speed rail is about three and a half hours. Venice's airport is on the mainland side of the lagoon's north shore, with an airport bus or water bus into the city (about an hour); there are no cars in the city, only walking and water buses." +
      "From a window you see Lake Trasimeno, the farmland of the Po Valley and the distinctive shape of the Venetian Lagoon. Venice occasionally has 'acqua alta' (high water) in autumn and winter — check the tide forecast before you go." +
      "Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "fco-nap": {
    study: {
    "zh-CN":
      "罗马飞那不勒斯，是意大利最短的主要航线之一，几乎沿台伯河谷和第勒尼安海岸南下。起飞后不久，脚下就是台伯河——流经罗马市中心的那条河，向西南注入第勒尼安海。" +
      "接近那不勒斯，海岸线一带出现坎皮弗莱格瑞——一片活跃的破火山口地热区，地表能看到冒着硫磺气的火口和温泉，地壳的整体升降（bradyseism）是这里持续被监测的自然现象。" +
      "那不勒斯就在坎皮弗莱格瑞以东的海湾边，飞机下降时湾对岸维苏威火山的完整锥形轮廓清晰可见。",
    "en-US":
      "Rome to Naples is one of Italy's shortest major routes, running almost the whole way down the Tiber valley and the Tyrrhenian coast. Soon after take-off, below is the Tiber — the river running through central Rome, flowing south-west to the Tyrrhenian Sea." +
      "Approaching Naples, the coastal area shows the Campi Flegrei — an active caldera geothermal area, with sulphurous vents and hot springs visible on the surface; the overall rise and fall of the ground (bradyseism) here is a natural phenomenon under continuous monitoring." +
      "Naples is on the bay east of the Campi Flegrei, and as the plane descends, the full cone of Mount Vesuvius across the bay is clearly visible.",
    },
    travel: {
    "zh-CN":
      "罗马到那不勒斯飞约四十五分钟，同一时区。高铁约一小时到一个半小时，很多人也会选火车（市中心到市中心，往往更省心）。那不勒斯属地中海气候，比罗马略暖。" +
      "靠窗能看到台伯河和坎皮弗莱格瑞的火山地热区。以那不勒斯为基地可坐区域火车去庞贝古城，也可坐船去卡普里岛或阿马尔菲海岸。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。那不勒斯需比其他意大利城市更留意随身财物。",
    "en-US":
      "Rome to Naples is about 45 minutes, in the same time zone. High-speed rail is about an hour to an hour and a half, and many people take the train (city centre to city centre, often more convenient). Naples has a Mediterranean climate, slightly warmer than Rome." +
      "From a window you see the Tiber and the volcanic-geothermal area of the Campi Flegrei. From Naples you can take a regional train to Pompeii, or a boat to Capri or the Amalfi Coast." +
      "Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. Naples needs more care about belongings than most Italian cities.",
    },
  },

  "fco-cta": {
    study: {
    "zh-CN":
      "罗马飞卡塔尼亚，从意大利中部一路飞到西西里岛东岸，是这几条国内航线里跨度较大的一条。起飞后先经过台伯河，随后进入亚平宁山脉：这条像脊椎一样纵贯整个亚平宁半岛的山系，大萨索山（大角峰）是其中最高的一段，海拔近 2912 米。" +
      "越过山脉南段，地面变成波利诺山——意大利南部最大的国家公园所在地，喀斯特地貌和高山牧场交织。" +
      "飞越墨西拿海峡上空进入西西里岛，卡塔尼亚就在岛屿东岸、埃特纳火山脚下——这是欧洲最高的活火山，晴天从空中能看到山顶的烟柱和黑色的熔岩流痕迹。",
    "en-US":
      "Rome to Catania flies from central Italy all the way to the east coast of Sicily, one of the longer domestic routes here. After take-off you cross the Tiber, then the Apennines: the range running down the whole peninsula like a spine, with Gran Sasso (Corno Grande) its highest point at almost 2,912 m." +
      "Over the southern Apennines, the land becomes the Pollino massif — home to southern Italy's largest national park, karst landforms interwoven with high mountain pasture." +
      "Crossing the Strait of Messina onto Sicily, Catania sits on the island's east coast at the foot of Mount Etna — Europe's highest active volcano — and in clear weather you can see the summit plume and traces of black lava flows from the air.",
    },
    travel: {
    "zh-CN":
      "罗马到卡塔尼亚飞约一小时零五分，同一时区。西西里没有高铁直连，跨海需要飞机或渡轮（火车可通过轮渡摆渡过海峡，但耗时很长）。卡塔尼亚比罗马更热、更干。" +
      "靠窗能看到亚平宁山脉、波利诺山和西西里岛的轮廓，接近卡塔尼亚时留意埃特纳火山。以卡塔尼亚为基地可跟正规向导登埃特纳、或去陶尔米纳看希腊剧场遗址。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Rome to Catania is about an hour and five minutes, in the same time zone. Sicily has no direct high-speed rail link — crossing the sea needs a flight or a ferry (trains can be ferried across the strait, but it takes a long time). Catania is hotter and drier than Rome." +
      "From a window you see the Apennines, the Pollino massif and the outline of Sicily, with Mount Etna visible approaching Catania. From Catania you can climb Etna with a licensed guide, or visit Taormina for the Greek theatre ruins." +
      "Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "fco-cag": {
    study: {
    "zh-CN":
      "罗马飞卡利亚里，从意大利本土飞到撒丁岛——地中海最古老的陆块之一。起飞后先经过台伯河，随后一路向西南飞越第勒尼安海的开阔海面。" +
      "撒丁岛没有高大的年轻山脉，岛屿主体是一块古老的花岗岩和片岩基底，被长期侵蚀成低缓的丘陵和高原，与意大利本土年轻的亚平宁山脉在地质上明显不同。" +
      "卡利亚里就在岛屿南岸一个海湾边，飞机降落前能看到城堡区所在的山丘和城市脚下莫尔塔咸水湖的粉色轮廓（湖水因藻类和盐度呈现淡粉色，是火烈鸟的栖息地）。",
    "en-US":
      "Rome to Cagliari flies from mainland Italy to Sardinia — one of the oldest landmasses in the Mediterranean. After take-off you cross the Tiber, then fly south-west over the open water of the Tyrrhenian Sea." +
      "Sardinia has no young high mountains; the island's core is an old granite and schist basement, long eroded into low hills and plateaus, geologically quite different from the young Apennines of mainland Italy." +
      "Cagliari is on a bay on the island's south coast, and before landing you can see the hill of the Castello district and, below the city, the pink outline of the Molentargius saltwater lagoon (tinted pale pink by algae and salinity, a habitat for flamingos).",
    },
    travel: {
    "zh-CN":
      "罗马到卡利亚里飞约五十五分钟，同一时区。撒丁岛没有高铁连接本土，往返只能靠飞机或渡轮（渡轮约八小时，多为夜渡）。卡利亚里夏季炎热干燥，少雨。" +
      "靠窗大部分时间是第勒尼安海，接近撒丁岛时能看到岛屿轮廓。岛内交通有限，看努拉吉遗址或西南海岸建议自驾。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Rome to Cagliari is about 55 minutes, in the same time zone. Sardinia has no high-speed rail link to the mainland — travel is by air or ferry only (the ferry takes about eight hours, mostly overnight). Cagliari has hot, dry summers with little rain." +
      "From a window it is mostly the Tyrrhenian Sea, with the island's outline appearing as you approach Sardinia. Transport on the island is limited — driving is recommended for the nuraghi sites or the south-west coast." +
      "Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "lin-vce": {
    study: {
    "zh-CN":
      "米兰飞威尼斯，是一条很短的东西向航线，全程在波河平原上飞，连接意大利西北和东北两个经济重心。起飞后脚下就是典型的波河平原景观：方格状的农田、纵横的灌渠和密集的村镇，这是意大利人口和农业最密集的一片平地，波河本身及其众多支流在平坦地面上缓缓蜿蜒。" +
      "接近终点，地面渐渐变得湿润，出现威尼斯潟湖——波河与其他几条河流的泥沙在亚得里亚海边堆积形成的浅水区，被一连串狭长的沙洲和防波堤与外海分隔，潟湖里星罗棋布着上百座小岛。飞机降落前能看到威尼斯运河纵横的城市轮廓从水面上浮现，大运河呈反 S 形贯穿其中。",
    "en-US":
      "Milan to Venice is a short east–west flight, entirely over the Po Valley. After take-off, below is the typical Po Valley landscape: a grid of farmland, criss-crossing irrigation channels and dense towns — Italy's most densely populated and farmed plain." +
      "Near the end the ground gradually grows wetter, and the Venetian Lagoon appears — a shallow-water area built by silt from the Po and other rivers along the Adriatic shore, separated from the open sea by sandbars and breakwaters. Before landing you can see Venice's canal-laced outline rising out of the water.",
    },
    travel: {
    "zh-CN":
      "米兰到威尼斯飞约三十五分钟，同一时区。高铁约两个半小时，很多人会选火车（更方便、也更环保）。两地气候相近，都属波河平原的温带大陆性气候。" +
      "靠窗全程是波河平原的农田，接近威尼斯时能看到潟湖的独特形态。威尼斯城内没有汽车，全靠步行和水上巴士。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Milan to Venice is about 35 minutes, in the same time zone. High-speed rail is about two and a half hours, and many people choose the train (more convenient and greener). Both cities share a similar temperate continental Po Valley climate." +
      "From a window it is Po Valley farmland the whole way, with the distinctive shape of the lagoon appearing near Venice. There are no cars in Venice — only walking and water buses." +
      "Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "lin-nap": {
    study: {
    "zh-CN":
      "米兰飞那不勒斯，从意大利工业和金融中心飞到南方最大的城市，纵贯整个亚平宁半岛北中段，是意大利国内航线里飞行距离较长的一条。起飞后先越过波河平原——意大利最大的连片平地，方格田块和纵横灌渠从空中清晰可辨，是全国农业和工业最密集的区域。" +
      "越过平原南缘，地面隆起进入亚平宁山脉：这条像脊椎一样纵贯整个半岛的山系把意大利分成第勒尼安海和亚得里亚海两侧，山间是深谷、梯田式的农业地带和散落的中世纪山城。" +
      "接近那不勒斯，海岸线一带出现坎皮弗莱格瑞的火山地热区——一片活跃的破火山口，地表能看到冒着硫磺气的火口和温泉；那不勒斯湾和湾对岸维苏威火山完整的锥形轮廓在降落前清晰可见。",
    "en-US":
      "Milan to Naples flies from Italy's industrial and financial centre to the largest city of the south, running the length of the northern and central peninsula. After take-off you cross the Po Valley — Italy's largest continuous plain, its grid of fields easy to pick out from the air." +
      "Past the southern edge of the plain, the land rises into the Apennines: the range running the length of the peninsula, dividing Italy into east and west, with deep valleys and terraced farmland between the ridges." +
      "Approaching Naples, the coastal area shows the volcanic-geothermal Campi Flegrei, and the Bay of Naples and the cone of Vesuvius are clearly visible before landing.",
    },
    travel: {
    "zh-CN":
      "米兰到那不勒斯飞约一小时二十分，同一时区。高铁约四个半小时，很多人会选飞机。米兰比那不勒斯更凉更潮湿，那不勒斯属典型地中海气候。" +
      "靠窗能看到波河平原、亚平宁山脉和坎皮弗莱格瑞的火山地貌。以那不勒斯为基地可去庞贝古城或坐船去卡普里岛。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。那不勒斯需比米兰更留意随身财物。",
    "en-US":
      "Milan to Naples is about an hour and 20 minutes, in the same time zone. High-speed rail is about four and a half hours, and many people fly instead. Milan is cooler and more humid than Naples, which has a typical Mediterranean climate." +
      "From a window you see the Po Valley, the Apennines and the volcanic landscape of the Campi Flegrei. From Naples you can visit Pompeii or take a boat to Capri." +
      "Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. Naples needs more care about belongings than Milan.",
    },
  },

  "nap-cta": {
    study: {
    "zh-CN":
      "那不勒斯飞卡塔尼亚，沿意大利南部海岸和第勒尼安海南下，是一条以火山为主题的短航线。起飞后不久，维苏威火山的完整锥形出现在右侧机窗——公元 79 年它的喷发掩埋了庞贝古城，如今仍是被密切监测的活火山。" +
      "继续南飞，海面上出现利帕里群岛（又称埃奥利群岛）：一串火山成因的小岛，其中斯特龙博利岛上的火山几乎持续小规模喷发，被称为“地中海灯塔”，几百年来一直如此，是全球观测最久的活火山之一。" +
      "越过一片开阔海面进入西西里岛，卡塔尼亚就在埃特纳火山脚下——欧洲最高的活火山，海拔约 3350 米，山顶终年有烟柱。",
    "en-US":
      "Naples to Catania runs south along the Italian coast and the southern Tyrrhenian Sea, a short flight with a volcanic theme throughout. Soon after take-off the full cone of Mount Vesuvius appears on the right — its eruption in 79 AD buried Pompeii, and it remains a closely monitored active volcano today." +
      "Flying on south, the Aeolian (Lipari) Islands appear over the water: a chain of volcanic islands, including Stromboli, whose volcano has erupted in small bursts almost continuously — called the 'lighthouse of the Mediterranean', a pattern that has held for centuries and one of the longest continuously observed volcanoes in the world." +
      "Over open water onto Sicily, Catania sits at the foot of Mount Etna — Europe's highest active volcano, about 3,350 m, with a year-round summit plume.",
    },
    travel: {
    "zh-CN":
      "那不勒斯到卡塔尼亚飞约四十五分钟，同一时区。也可坐渡轮（耗时更长）。两地都属地中海气候，卡塔尼亚更靠南、更热更干。" +
      "靠窗依次能看到维苏威火山、利帕里群岛和埃特纳火山，是这几条航线里“火山密度”最高的一条。以卡塔尼亚为基地可跟正规向导登埃特纳，或去陶尔米纳。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Naples to Catania is about 45 minutes, in the same time zone. There is also a ferry (much slower). Both cities have a Mediterranean climate, with Catania further south, hotter and drier." +
      "From a window you see, in turn, Vesuvius, the Aeolian Islands and Mount Etna — the highest 'volcano density' of any of these routes. From Catania you can climb Etna with a licensed guide, or visit Taormina." +
      "Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "fco-bri": {
    study: {
    "zh-CN":
      "罗马飞巴里，从意大利中部飞到东南部的普利亚大区，横穿整个半岛。起飞后先经过台伯河，随后越过亚平宁山脉——这条纵贯半岛的山系在这一带把意大利分成第勒尼安海和亚得里亚海两侧。" +
      "越过山脉东坡，地面渐渐变成加尔加诺半岛一带：一块从平坦海岸线上突出的石灰岩高地，覆盖着意大利南部少见的成片森林，历史上因为地形独立、曾被称为“意大利的马刺”。" +
      "接近巴里，脚下出现阿尔塔穆尔杰——一片喀斯特石灰岩台地，地表干旱多石，地下则有大量溶洞和史前遗迹。巴里就在亚得里亚海边、一个伸入海中的小半岛上。",
    "en-US":
      "Rome to Bari flies from central Italy to Puglia in the south-east, crossing the whole peninsula. After take-off you cross the Tiber, then the Apennines — the range that divides Italy between the Tyrrhenian and Adriatic sides in this stretch." +
      "Over the eastern slope of the mountains, the land gradually becomes the Gargano Promontory: a limestone upland jutting from an otherwise flat coastline, covered in forest rare for southern Italy, historically nicknamed 'the spur of Italy' for its distinct shape." +
      "Approaching Bari, the Alta Murgia appears below — a karst limestone plateau, dry and stony on the surface with extensive caves and prehistoric sites underground. Bari sits on the Adriatic coast, on a small peninsula reaching into the sea.",
    },
    travel: {
    "zh-CN":
      "罗马到巴里飞约五十五分钟，同一时区。高铁约四小时，多数人会选飞机。巴里比罗马更干燥，夏季炎热。" +
      "靠窗能看到亚平宁山脉、加尔加诺半岛的森林和阿尔塔穆尔杰的喀斯特地貌。以巴里为基地可去“石屋之城”阿尔贝罗贝洛（世界遗产）或加尔加诺半岛的海岸。" +
      "意大利属申根区，多数国家公民短期旅游免签或按申根规定。巴里也是前往希腊、阿尔巴尼亚的渡轮港口。",
    "en-US":
      "Rome to Bari is about 55 minutes, in the same time zone. High-speed rail is about four hours, and most people fly. Bari is drier than Rome, with hot summers." +
      "From a window you see the Apennines, the forests of the Gargano Promontory and the karst landscape of the Alta Murgia. From Bari you can visit 'the town of stone houses', Alberobello (a World Heritage Site), or the Gargano coast." +
      "Italy is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules. Bari is also a ferry port to Greece and Albania.",
    },
  },

  "mad-bcn": {
    study: {
    "zh-CN":
      "马德里飞巴塞罗那，是从伊比利亚半岛正中央飞向东北海岸，一路能看出这条大陆分水岭山系如何把半岛劈成不同水系。起飞后不久，地面开始起伏破碎，那是伊比利亚山系——一条并不连续的高地带，最高的乌尔比昂峰不到2300米，却是杜罗河的发源地，也是整个半岛大西洋水系和地中海水系的分界。" +
      "越过伊比利亚山系，地面豁然低平，进入埃布罗盆地——这里在新生代曾是一个完全封闭的内陆咸水湖，直到河流切穿东侧山地才连通地中海，如今是灌溉农田与干燥badland台地相间的低地。快到巴塞罗那时，比利牛斯山的余脉渐渐没入海岸，飞机沿着加泰罗尼亚海岸下降，降落前能看到地中海和城市天际线。",
    "en-US":
      "Madrid to Barcelona flies from the very centre of the Iberian Peninsula to its north-east coast, and along the way shows how this continental watershed range splits the peninsula's drainage. Soon after take-off the ground grows broken and hilly: the Sistema Ibérico, a discontinuous upland whose highest point, Pico de Urbión, is under 2,300 m yet is the source of the Duero — and the divide between the peninsula's Atlantic and Mediterranean drainage." +
      "Beyond the Sistema Ibérico the land opens out flat: the Ebro Basin, once a fully enclosed inland salt-lake basin in the Cenozoic until a river cut through the mountains to its east and connected it to the Mediterranean — today a lowland of irrigated farmland alternating with dry badland tablelands. Nearing Barcelona the tail of the Pyrenees sinks gradually into the coast, and the plane descends along the Catalan shoreline, the Mediterranean and the city skyline visible before landing.",
    },
    travel: {
    "zh-CN":
      "马德里到巴塞罗那飞约1小时25分钟，同一时区，是西班牙最繁忙的国内航线之一，也可以选择约2小时半的高铁（AVE）。两座城市气质迥异：马德里是内陆的政治与艺术中心，巴塞罗那是地中海边的港口与设计之都。巴塞罗那机场离市区约15公里，有机场大巴和火车。加泰罗尼亚语和西班牙语在巴塞罗那都是官方语言，路牌菜单常双语。圣家堂等高迪建筑门票务必提前网上订。多数国家公民短期旅游按申根区规定，入境不需另外签证。",
    "en-US":
      "Madrid to Barcelona is about 1 hour 25 minutes, same time zone, one of Spain's busiest domestic routes — the AVE high-speed train (about 2.5 hours) is another option. The two cities feel very different: Madrid is the inland political and art capital, Barcelona a Mediterranean port and design city. Barcelona's airport is about 15 km from the centre, with an airport bus and train. Catalan and Spanish are both official in Barcelona, and signs and menus are often bilingual. Book tickets for the Sagrada Família and other Gaudí buildings online well ahead. Citizens of most countries follow Schengen-area rules for short visits, with no separate visa needed.",
    },
  },

  "mad-svq": {
    study: {
    "zh-CN":
      "马德里飞塞维利亚，是从梅塞塔高原南下安达卢西亚的经典航线。起飞后不久，地面隆起成一道东西向的低山，那是莫雷纳山——一道由古老变质岩构成的断层崖，北坡缓缓过渡到梅塞塔，南坡则陡然跌落数百米，是历史上分隔卡斯蒂利亚与安达卢西亚的天然屏障，山间橡树疏林牧场是伊比利亚黑猪放养的传统景观。" +
      "越过莫雷纳山，地面豁然开阔平坦，进入瓜达尔基维尔谷地——伊比利亚半岛唯一可供远洋船只溯河直达内陆港口的大河谷地，橄榄园按几何网格铺满丘陵，瓜达尔基维尔河本身宽阔平缓地流向塞维利亚。",
    "en-US":
      "Madrid to Seville flies south from the Meseta plateau into Andalusia, a classic route. Soon after take-off the land rises into a low, east–west range: the Sierra Morena, a fault scarp of old metamorphic rock — its north slope grading gently into the Meseta, its south slope dropping hundreds of metres abruptly, historically the natural barrier between Castile and Andalusia, its oak savanna the traditional landscape for free-range Iberian pigs." +
      "Past the Sierra Morena the land opens out flat: the Guadalquivir Valley, the only Iberian river valley navigable by ocean-going ships all the way inland, olive groves laid out in geometric grids across the hills, the Guadalquivir itself flowing broad and gentle toward Seville.",
    },
    travel: {
    "zh-CN":
      "马德里到塞维利亚飞约1小时5分钟，同一时区，也可以选择约2小时半的高铁。塞维利亚夏季（6–9月）是西班牙大陆最炎热的地区之一，常超40°C，春秋气候最宜人。机场离市区约10公里，有机场大巴，老城本身适合步行。塞维利亚是弗拉明戈的重要发源地，四月春会和圣周是全年最重要的节庆，届时住宿需提前很久订。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Madrid to Seville is about 1 hour 5 minutes, same time zone; the AVE high-speed train (about 2.5 hours) is another option. Seville summer (June–September) makes it one of the hottest places on mainland Spain, often over 40 °C; spring and autumn are the most pleasant. The airport is about 10 km from the centre with an airport bus, and the old town itself is walkable. Seville is a major birthplace of flamenco, and the April Fair and Holy Week are the year's biggest festivals — book accommodation well ahead for those. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "mad-grx": {
    study: {
    "zh-CN":
      "马德里飞格拉纳达，是一趟横穿梅塞塔南半部、翻过两道山再抵达安达卢西亚的航线。起飞后先经过拉曼恰平原——一片极度平坦的石灰岩台地，传统白色风车至今矗立在台地边缘，因塞万提斯的《堂吉诃德》闻名于世。接着翻过莫雷纳山这道分隔梅塞塔与安达卢西亚的断层崖。" +
      "进入安达卢西亚后，地面再次隆起，内华达山脉的雪峰出现在前方——穆拉森峰3479米，是伊比利亚半岛的最高点，却离地中海海岸只有约40公里；飞机沿山脚下降，格拉纳达就坐落在雪峰脚下的河谷平原上。",
    "en-US":
      "Madrid to Granada crosses the southern half of the Meseta and two ranges before reaching Andalusia. After take-off comes the La Mancha Plain — an extremely flat limestone tableland where traditional white windmills still stand along the edges, made famous by Cervantes's Don Quixote. Then the flight crosses the Sierra Morena, the fault scarp dividing the Meseta from Andalusia." +
      "Once over Andalusia the land rises again, and the snow peaks of the Sierra Nevada appear ahead — Mulhacén at 3,479 m, the highest point on the Iberian Peninsula, yet only about 40 km from the Mediterranean coast; the plane descends along the foot of the range, with Granada sitting in the river valley plain right below the snow peaks.",
    },
    travel: {
    "zh-CN":
      "马德里到格拉纳达飞约1小时10分钟，同一时区。格拉纳达以阿尔罕布拉宫闻名，门票必须提前数周在官网预订，旺季常常售罄。机场离市区约15公里，有机场大巴，老城坡道多、适合步行但需体力。冬季市区气候温和，但可看到内华达山脉的雪峰；夏季干热、昼夜温差大。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Madrid to Granada is about 1 hour 10 minutes, same time zone. Granada is famous for the Alhambra — tickets must be booked weeks ahead online and often sell out in peak season. The airport is about 15 km from the centre with an airport bus; the old town's many slopes make it walkable but tiring. Winter is mild in the city itself while the Sierra Nevada snow peaks are visible nearby; summer is hot and dry with a wide day-to-night swing. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "mad-bio": {
    study: {
    "zh-CN":
      "马德里飞毕尔巴鄂，是从梅塞塔高原正中心一路向北，飞进坎塔布连山区的航线。起飞后脚下是梅塞塔中央高原——伊比利亚半岛最大的古老台地，占国土近五分之二，麦田和牧场铺展到天际线。" +
      "越往北，地面逐渐抬升变得破碎，进入欧罗巴峰一带——坎塔布连山脉最陡峭的一段，石炭纪石灰岩被造山运动抬升至2600米以上，再被冰川和喀斯特作用雕琢出尖峭的峰群和遍布的溶洞。翻过山区后，飞机沿着一段绿意盎然的北部海岸下降，毕尔巴鄂就在内维隆河口的谷地里。",
    "en-US":
      "Madrid to Bilbao flies due north from the very centre of the Meseta plateau into the Cantabrian mountains. After take-off the land below is the Meseta Central, the largest ancient tableland on the Iberian Peninsula, covering nearly two-fifths of the country, wheat fields and pasture stretching to the horizon." +
      "Further north the land rises and grows broken, entering the Picos de Europa — the steepest stretch of the Cantabrian range, Carboniferous limestone uplifted above 2,600 m by mountain building and then carved by glaciers and karst dissolution into sharp peaks and countless caves. Past the mountains the plane descends along a lush green stretch of the northern coast, with Bilbao sitting in the valley at the mouth of the Nervión.",
    },
    travel: {
    "zh-CN":
      "马德里到毕尔巴鄂飞约1小时5分钟，同一时区。毕尔巴鄂属温带海洋性气候，比西班牙其他地区凉爽多雨，即使夏季也不算炎热，随身带雨具。机场离市区约12公里，有机场大巴。1997年古根海姆博物馆落成后，这座老工业城市转型为当代建筑地标，门票建议提前网上订。巴斯克语和西班牙语在本地都是官方语言，pintxos（巴斯克风味小吃）文化浓厚。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Madrid to Bilbao is about 1 hour 5 minutes, same time zone. Bilbao has a temperate maritime climate, cooler and wetter than most of Spain, not especially hot even in summer — carry rain gear. The airport is about 12 km from the centre with an airport bus. Since the Guggenheim Museum opened in 1997, this old industrial city has become a landmark of contemporary architecture; book tickets online ahead. Basque and Spanish are both official here, and the pintxos (Basque-style small bites) culture is strong. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "mad-scq": {
    study: {
    "zh-CN":
      "马德里飞圣地亚哥-德孔波斯特拉，是横穿整个梅塞塔高原、飞向西北角加利西亚的航线。起飞后脚下是梅塞塔中央高原的北子高原——地势平缓、由杜罗河流域覆盖。接近西班牙与葡萄牙交界处，地面被杜罗河切出一道深邃的峡谷——阿里维斯-杜罗峡谷，崖壁近乎垂直，与上游平缓的高原景象形成强烈对比，如今这段峡谷大部分被系列水坝蓄成了狭长的水库。" +
      "越过峡谷继续向西北，地形逐渐变得湿润多绿，飞机降落前能看到加利西亚典型的丘陵和农田，圣地亚哥的主教座堂塔楼是朝圣之路的终点标志。",
    "en-US":
      "Madrid to Santiago de Compostela crosses the entire Meseta plateau on its way to Galicia in the north-west corner. After take-off the land below is the Meseta's northern sub-plateau, gently sloping and drained by the Duero. Near the Spain–Portugal border the Duero has cut a deep canyon — the Arribes del Duero, its walls near-vertical, a stark contrast with the gentle plateau upstream; most of this stretch is now dammed into a chain of long, narrow reservoirs." +
      "Beyond the canyon, heading further north-west, the land grows increasingly green and wet; before landing you can see Galicia's typical hills and farmland, with the towers of Santiago's cathedral marking the end of the pilgrimage route.",
    },
    travel: {
    "zh-CN":
      "马德里到圣地亚哥飞约1小时15分钟，同一时区。圣地亚哥是天主教朝圣地“圣雅各之路”的终点，主教座堂前常能看到刚完成数百公里徒步的朝圣者。加利西亚是西班牙最多雨的地区之一，常年需备雨具，夏季相对凉爽舒适。机场离市区约10公里，有机场大巴，老城很小、完全可步行。7月25日圣雅各节前后是宗教庆典高峰。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Madrid to Santiago is about 1 hour 15 minutes, same time zone. Santiago is the endpoint of the Camino de Santiago pilgrimage route, and pilgrims who have just finished hundreds of kilometres on foot are a common sight in front of the cathedral. Galicia is one of the rainiest regions in Spain, so carry rain gear year-round; summer is relatively cool and pleasant. The airport is about 10 km from the centre with an airport bus, and the old town is small and entirely walkable. Around 25 July, the Feast of St James, is the peak of religious celebration. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "bcn-pmi": {
    study: {
    "zh-CN":
      "巴塞罗那飞帕尔马，是一趟很短的跨海航班，把西班牙大陆和巴利阿里群岛连起来。起飞后不久就飞越地中海——蓝色的海面上偶有货轮驶过，看不到陆地。接近马略卡岛时，岛屿西北岸一道陡峭的灰白色山脊出现在海面上，那是特拉蒙塔纳山脉——中生代石灰岩被造山运动抬升、又被千百年雨水溶蚀出发达的喀斯特系统，山与海之间几乎没有过渡的平地，梯田顺着陡坡层层砌筑。飞机沿山脚转向东南，降落在帕尔马湾畔——湾内绵延的沙滩和帕尔马哥特式主教座堂清晰可辨。",
    "en-US":
      "Barcelona to Palma is a short hop across the sea, linking mainland Spain with the Balearic Islands. Soon after take-off the flight crosses the Mediterranean — blue water with the occasional cargo ship, no land in sight. Approaching Mallorca, a steep grey-white ridge appears on the horizon along the island's north-west coast: the Serra de Tramuntana, Mesozoic limestone uplifted by mountain building and then carved by centuries of rain into an extensive karst system, with almost no flat land between mountain and sea, terraces built tier upon tier up the steep slopes. The plane turns south-east along the foot of the range and descends over the Bay of Palma, its long beaches and the Gothic Palma Cathedral clearly visible.",
    },
    travel: {
    "zh-CN":
      "巴塞罗那到帕尔马飞约50分钟，同一时区，是西班牙最繁忙的短途航线之一。马略卡岛地中海气候，夏季炎热干燥、是欧洲度假旺季，价格高、人多；5–6月和9月相对舒适清净；冬季温和，适合徒步和文化旅游。机场离市区约8公里，有公交直达。加泰罗尼亚语（马略卡方言）和西班牙语都是官方语言。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Barcelona to Palma is about 50 minutes, same time zone, one of Spain's busiest short-haul routes. Mallorca has a Mediterranean climate: summer is hot and dry and Europe's peak holiday season, with higher prices and more people; May–June and September are more comfortable and quieter; winter is mild, good for hiking and cultural sightseeing. The airport is about 8 km from the centre with a direct bus. Catalan (in its Mallorcan dialect) and Spanish are both official. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "mad-tfn": {
    study: {
    "zh-CN":
      "马德里飞特内里费，是西班牙国内最长的一条航线，从伊比利亚半岛中部一路向西南飞越大西洋，抵达非洲西北沿海的加那利群岛。起飞后先经过瓜达尔基维尔谷地——安达卢西亚最大片的农田，橄榄园铺满丘陵；随后是瓜达尔基维尔河入海口的多尼亚纳湿地，季节性沼泽与流动沙丘交织，是欧洲重要的候鸟栖息地。" +
      "越过西班牙海岸线后，飞机长时间飞越开阔的大西洋，看不到陆地。接近特内里费岛时，一座近乎完美对称的锥形火山出现在海面中央——泰德峰，海拔3715米，是西班牙全境最高点，若从大西洋海底基座算起，是仅次于夏威夷两座火山的世界第三高火山体，飞机绕山而下降落。",
    "en-US":
      "Madrid to Tenerife is Spain's longest domestic route, flying south-west from the centre of the Iberian Peninsula across the Atlantic to the Canary Islands off north-west Africa. After take-off comes the Guadalquivir Valley, Andalusia's largest expanse of farmland, olive groves covering the hills; then the Doñana wetland at the Guadalquivir's mouth, a patchwork of seasonal marsh and shifting dunes, an important European bird habitat." +
      "Past the Spanish coast the flight crosses open Atlantic for a long stretch with no land in sight. Approaching Tenerife, an almost perfectly symmetrical volcanic cone appears in the middle of the sea: Teide, 3,715 m, the highest point in all of Spain — measured from its base on the Atlantic sea floor, the third-tallest volcanic structure on Earth after Hawaii's two giants — and the plane descends around the mountain to land.",
    },
    travel: {
    "zh-CN":
      "马德里到特内里费飞约2小时50分钟，两地同一时区。加那利群岛虽靠近非洲西北沿海，但整体属西班牙领土、通用欧元，气候常年温和，是欧洲人的冬季度假热门地。岛上有南北两座机场，特内里费北机场离圣克鲁斯市区较近。泰德国家公园缆车受天气影响，出发前查运营状态；山区昼夜温差大、紫外线强。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Madrid to Tenerife is about 2 hours 50 minutes, same time zone at both ends. The Canary Islands sit near north-west Africa but are Spanish territory throughout, using the euro, with a mild year-round climate that makes them a popular winter destination for Europeans. The island has two airports, north and south; Tenerife North is closer to Santa Cruz. The Teide summit cable car is weather-dependent, so check its status before heading up; the mountains have a large day-to-night swing and strong UV. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "bcn-agp": {
    study: {
    "zh-CN":
      "巴塞罗那飞马拉加，是一趟沿地中海海岸大幅南下的航线，从加泰罗尼亚一直飞到安达卢西亚的太阳海岸。起飞后大部分航程沿海岸线南下，飞越瓦伦西亚和穆尔西亚的地中海沿岸平原。" +
      "接近安达卢西亚东部时，海岸线突然变得陡峭崎岖——那是加塔角，伊比利亚半岛唯一一段完全由火山岩构成的海岸，约1300万年前海底火山喷发堆积而成，如今能看到的陆上部分只占整个火山体的约5%，其余仍淹没在阿尔沃兰海海面之下，柱状节理和熔岩崖清晰可辨。越过加塔角继续向西，飞机沿太阳海岸下降，抵达马拉加。",
    "en-US":
      "Barcelona to Málaga runs far south along the Mediterranean coast, from Catalonia all the way to the Costa del Sol in Andalusia. Most of the flight follows the coastline south, over the Mediterranean coastal plains of Valencia and Murcia." +
      "Nearing eastern Andalusia the coast suddenly turns steep and rugged: Cabo de Gata, the only stretch of coast on the Iberian Peninsula made entirely of volcanic rock, built up by submarine eruptions about 13 million years ago — only about 5% of the whole volcanic body is above water today, the rest still submerged beneath the Alboran Sea, its columnar joints and lava cliffs clearly visible. Past Cabo de Gata the plane continues west and descends along the Costa del Sol into Málaga.",
    },
    travel: {
    "zh-CN":
      "巴塞罗那到马拉加飞约1小时35分钟，同一时区。马拉加地中海气候，全年温和，冬季平均气温仍在15°C以上，是欧洲少有的冬季晒太阳目的地；盛夏沿海拥挤、价格上涨。机场离市区约8公里，有近郊火车直达市中心。马拉加是毕加索的出生地，毕加索博物馆和故居值得一看。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Barcelona to Málaga is about 1 hour 35 minutes, same time zone. Málaga has a Mediterranean climate, mild year-round — the winter average stays above 15 °C, one of Europe's few good winter-sun destinations close by; midsummer is crowded on the coast with higher prices. The airport is about 8 km from the centre with a suburban train straight into town. Málaga is Picasso's birthplace, and the Picasso Museum and his birthplace house are worth a visit. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "ber-muc": {
    study: {
    "zh-CN":
      "柏林飞慕尼黑，是从北德平原一路南下、飞进巴伐利亚腹地的航线。起飞后不久，脚下还是柏林周边平坦的湖泊与农田；越往南，地面渐渐隆起，进入图林根盆地南缘一条连绵的深绿色山脊——图林根森林，一条走向西北—东南、由海西造山运动形成的古老山地，长约70公里，山脊浑圆、轮廓清晰，与北边平缓的盆地农田形成鲜明对比。越过图林根森林，飞机继续南下，进入巴伐利亚的丘陵和农田，慕尼黑就坐落在伊萨尔河畔、巴伐利亚阿尔卑斯山北麓。",
    "en-US":
      "Berlin to Munich flies south from the North German Plain into the heart of Bavaria. Soon after take-off the land below is still flat lakes and farmland around Berlin; further south the ground begins to rise into a continuous, deep-green ridge along the southern edge of the Thuringian Basin — the Thuringian Forest, an old range trending north-west to south-east, formed by the Hercynian orogeny, its ridge rounded and clearly defined against the gentle basin farmland to the north. Past the Thuringian Forest the plane continues south over Bavaria's hills and farmland, with Munich sitting on the Isar at the northern foot of the Bavarian Alps.",
    },
    travel: {
    "zh-CN":
      "柏林到慕尼黑飞约1小时5分钟，同一时区，是德国最繁忙的国内航线之一，也可以选择约4小时的城际快车（ICE）。两座城市气质迥异：柏林是充满当代艺术气息的首都，慕尼黑则保留着传统巴伐利亚风情。慕尼黑机场离市区约30公里，有高铁直达。十月啤酒节期间（9月中旬至10月初）往返两地的航班和住宿都很紧张，建议提前订。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Berlin to Munich is about 1 hour 5 minutes, same time zone, one of Germany's busiest domestic routes — the ICE high-speed train (about 4 hours) is another option. The two cities feel very different: Berlin is the capital with a strong contemporary-art scene, Munich keeps a traditional Bavarian character. Munich Airport is about 30 km from the centre with a rail line running directly there. During Oktoberfest (mid-September to early October) flights and accommodation between the two cities get tight — book ahead. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "ber-ham": {
    study: {
    "zh-CN":
      "柏林飞汉堡，是一趟很短的航班，全程几乎都在北德平原上空。起飞后脚下是柏林周边平坦的农田与湖泊，很快就进入了典型的北德平原景观——第四纪多次冰期由斯堪的纳维亚冰盖反复塑造留下的低平地形，能看到断续分布的终碛垄和星罗棋布的小湖泊，麦田、牧场和森林大片相间。飞机全程几乎没有明显的地形起伏，一路平缓飞抵汉堡——德国最大的海港城市，坐落在易北河畔，历史上是汉萨同盟的核心城市之一，至今保留着浓厚的港口贸易传统。",
    "en-US":
      "Berlin to Hamburg is a short flight, almost entirely over the North German Plain. After take-off the land below is flat farmland and lakes around Berlin, quickly giving way to the classic North German Plain landscape — a low, level terrain repeatedly reshaped by Quaternary glaciation, with discontinuous terminal moraine ridges and scattered small glacial lakes, wheat fields, pasture and forest alternating in broad patches. The flight shows almost no noticeable relief the whole way, gliding gently into Hamburg — Germany's largest seaport, on the Elbe.",
    },
    travel: {
    "zh-CN":
      "柏林到汉堡飞约50分钟，同一时区，德国铁路网络发达（ICE约1小时40分钟），两地往返飞机和火车都很方便。汉堡属温带海洋性气候，全年温和多雨，随身备雨具。机场离市区约10公里，有地铁直达市中心。汉堡的仓库城和易北爱乐音乐厅是热门景点，旺季建议提前预约参观时段。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Berlin to Hamburg is about 50 minutes, same time zone; Germany's rail network is extensive (ICE about 1 hour 40 minutes), so both flying and the train are convenient between the two cities. Hamburg has a temperate maritime climate, mild and rainy year-round — carry rain gear. The airport is about 10 km from the centre with a metro line running directly there. The Speicherstadt and Elbphilharmonie are popular sights — book visiting slots ahead in peak season. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "ber-cgn": {
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
    study: {
    "zh-CN":
      "慕尼黑飞汉堡，是一趟纵贯德国南北的航线，从巴伐利亚阿尔卑斯山脚下一路飞到北海之滨。起飞后先经过图林根森林的连绵山脊——一条由海西造山运动留下的古老山地，随后是孤立耸立在平原上的哈茨山，布罗肯峰终年云雾缭绕，年均起雾天数近300天。越过哈茨山，地面逐渐变得平坦开阔，进入北德平原——第四纪冰川反复塑造留下的低地，终碛垄和冰蚀小湖星罗棋布。飞机全程几乎看遍了德国从南到北的地形变化，最终降落在易北河畔的汉堡。",
    "en-US":
      "Munich to Hamburg runs the length of Germany, from the foot of the Bavarian Alps to the North Sea coast. After take-off comes the continuous ridge of the Thuringian Forest, then the Harz standing alone on the plain, its Brocken summit shrouded in cloud nearly year-round. Past the Harz the land grows flatter and more open, entering the North German Plain — a lowland repeatedly reshaped by Quaternary glaciation, dotted with terminal moraine ridges and glacial lakes. The flight takes in almost the full range of German terrain from south to north, finally landing at Hamburg on the Elbe.",
    },
    travel: {
    "zh-CN":
      "慕尼黑到汉堡飞约1小时15分钟，同一时区，是德国南北向最长的国内航线之一，也可以选择约6小时的城际快车。两地气候和文化都有明显差异：慕尼黑属大陆性气候、巴伐利亚传统浓厚，汉堡属温带海洋性气候、港口贸易气息浓厚。汉堡机场离市区约10公里，有地铁直达市中心。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Munich to Hamburg is about 1 hour 15 minutes, same time zone, one of Germany's longest north–south domestic routes — the ICE high-speed train (about 6 hours) is another option. The climate and culture differ noticeably between the two: Munich has a continental climate and strong Bavarian traditions, while Hamburg has a temperate maritime climate and a strong port-trade character. Hamburg Airport is about 10 km from the centre with a metro line running directly there. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "fra-muc": {
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
    study: {
    "zh-CN":
      "法兰克福飞汉堡，是一趟从德国中部飞向北海之滨的航线。起飞后不久，脚下出现一片宽缓起伏的高地——福格尔斯山，中欧面积最大的连片火山岩地貌，覆盖约2500平方公里，约1900万年前由无数次温和的玄武岩喷发层层堆叠而成，是德国唯一的盾状火山地貌，山体从中心高原向外呈阶梯状台地下降。越过福格尔斯山，地面逐渐变得平坦，进入北德平原——第四纪冰川反复塑造留下的低地，终碛垄和冰蚀小湖星罗棋布。飞机沿着这片平原一路向北，降落在易北河畔的汉堡。",
    "en-US":
      "Frankfurt to Hamburg flies from central Germany to the North Sea coast. Soon after take-off a broad, gently undulating upland appears below — the Vogelsberg, the largest continuous volcanic-rock landform in Central Europe, built up about 19 million years ago from countless mild basalt eruptions, Germany's only shield-volcano landform. Past the Vogelsberg the land grows flatter, entering the North German Plain — a lowland repeatedly reshaped by Quaternary glaciation, dotted with terminal moraine ridges and glacial lakes. The plane follows this plain north all the way to Hamburg on the Elbe.",
    },
    travel: {
    "zh-CN":
      "法兰克福到汉堡飞约1小时5分钟，同一时区，也可以选择约3小时40分钟的城际快车。法兰克福机场是德国最大的国际枢纽，很多国际旅客会经这里转机。汉堡属温带海洋性气候，全年温和多雨，随身备雨具。机场离市区约10公里，有地铁直达市中心。多数国家公民短期旅游按申根区规定。",
    "en-US":
      "Frankfurt to Hamburg is about 1 hour 5 minutes, same time zone; the ICE high-speed train (about 3 hours 40 minutes) is another option. Frankfurt Airport is Germany's largest international hub, and many international travellers connect through here. Hamburg has a temperate maritime climate, mild and rainy year-round — carry rain gear. The airport is about 10 km from the centre with a metro line running directly there. Citizens of most countries follow Schengen-area rules for short visits.",
    },
  },

  "ath-skg": {
    study: {
    "zh-CN":
      "雅典飞塞萨洛尼基是希腊国内最繁忙的航线，从阿提卡一路向北飞越希腊本土中部，抵达马其顿地区。起飞后不久，脚下展开一片开阔的农田——色萨利平原，希腊面积最大、最重要的农业区，由皮尼奥斯河冲积而成，四周被品都斯山脉、奥特里斯山、皮利翁山与奥林匹斯山环绕。" +
      "飞机继续向北，一座临海耸立的雪峰渐渐出现在右侧——奥林匹斯山，希腊全境最高点，主峰米蒂卡斯海拔2917米，古希腊神话中被认为是众神的居所。越过奥林匹斯山，飞机沿爱琴海西岸继续北上，降落在塞萨洛尼基的萨洛尼卡湾畔。",
    "en-US":
      "Athens to Thessaloniki is Greece's busiest domestic route, flying north across the centre of the Greek mainland from Attica into Macedonia. Soon after take-off, open farmland unfolds below — the Thessalian Plain, Greece's largest and most important agricultural region, built by the Pineios River and ringed by the Pindus range, Mount Othrys, Mount Pelion and Mount Olympus." +
      " Continuing north, a snow-capped peak rising straight from the sea appears to the right — Mount Olympus, the highest point in Greece, its summit Mytikas reaching 2,917 m and widely held in Greek mythology to be the home of the gods. Past Olympus the flight continues north along the Aegean coast, descending into Thessaloniki on the Thermaic Gulf.",
    },
    travel: {
    "zh-CN":
      "雅典到塞萨洛尼基飞约50分钟，两地同一时区，也可选择约4小时的城际列车。这是爱琴海航空最繁忙的国内航线之一，旺季班次密集，建议提前订票。塞萨洛尼基机场离市区约16公里，有公交连接市中心。塞萨洛尼基是希腊北部的门户，适合作为探索迈泰奥拉、哈尔基季基半岛及色萨利地区的中转站。希腊属申根区，多数国家公民短期旅游按申根区规定执行，货币为欧元，电压230V欧标两圆脚插头。",
    "en-US":
      "Athens to Thessaloniki is about 50 minutes, same time zone, or about 4 hours by intercity train. This is one of Aegean Airlines's busiest domestic routes, with frequent flights in peak season — book ahead. Thessaloniki Airport is about 16 km from the centre, linked by bus. Thessaloniki is the gateway to northern Greece, a good base for onward trips to Meteora, the Halkidiki Peninsula and Thessaly. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits. The currency is the euro, power is 230V with the European two-round-pin plug.",
    },
  },

  "ath-her": {
    study: {
    "zh-CN":
      "雅典飞伊拉克利翁，是一趟穿越爱琴海南部、抵达希腊最大岛屿克里特的航线。起飞后飞机向南跨越基克拉泽斯群岛所在的海域，先经过米洛斯岛——一座因多彩火山岩层与新石器时代黑曜岩贸易而闻名的火山岛，岛上的萨拉基尼科海岸由白色浮岩经海蚀风蚀成月球表面般的地貌；" +
      "随后是圣托里尼火山口——公元前约1600年一次青铜时代晚期的大规模喷发造成岛屿中央塌陷形成的破火山口，费拉、伊亚等城镇建在高约300米的火口崖顶上。飞机继续向南穿过克里特海，抵达克里特岛北岸的伊拉克利翁。",
    "en-US":
      "Athens to Heraklion crosses the southern Aegean to reach Crete, Greece's largest island. After take-off the flight heads south over the Cyclades, first passing Milos — a volcanic island known for its colourful rock layers and Neolithic obsidian trade, its Sarakiniko coast carved by wave and wind into a moon-like landscape of white pumice." +
      " Next comes the Santorini caldera, formed when a massive Late Bronze Age eruption around 1600 BCE collapsed the island's centre; towns such as Fira and Oia sit on cliffs about 300 m above the caldera. The flight continues south across the Cretan Sea to land at Heraklion on Crete's north coast.",
    },
    travel: {
    "zh-CN":
      "雅典到伊拉克利翁飞约50分钟，两地同一时区，夏季旺季每天有多班航班，也可选择约9-10小时的夜间渡轮。伊拉克利翁机场离市区约5公里，有公交与出租车连接。克里特岛面积较大，从伊拉克利翁前往哈尼亚、拉西提高原等地建议租车或参加当地一日游。希腊属申根区，多数国家公民短期旅游按申根区规定执行，货币为欧元。",
    "en-US":
      "Athens to Heraklion is about 50 minutes, same time zone, with several daily flights in summer; an overnight ferry (about 9–10 hours) is another option. Heraklion Airport is about 5 km from the centre, linked by bus and taxi. Crete is a large island, so a rental car or organised day trip is recommended for reaching Chania or the Lasithi Plateau from Heraklion. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits, and the currency is the euro.",
    },
  },

  "ath-chq": {
    study: {
    "zh-CN":
      "雅典飞哈尼亚，是一趟横跨克里特海、直抵克里特岛西部的航线。起飞后飞机很快离开阿提卡海岸，进入开阔的克里特海——爱琴海南部的一片海域，介于基克拉泽斯群岛与克里特岛之间，是南爱琴海中面积较大的一片开阔水域。这段航程大部分时间只能看到蔚蓝的海面，偶尔可见远处星罗棋布的小岛，天气晴朗时能见度极佳。" +
      "接近克里特岛北岸时，哈尼亚湾逐渐显现，飞机沿海岸线下降；机场西侧不远就是威尼斯时期修筑的哈尼亚老港，环绕港口的彩色建筑与灯塔清晰可辨，也是克里特岛西部白山地区的门户，白山南坡的萨马利亚峡谷是欧洲最长的峡谷之一。",
    "en-US":
      "Athens to Chania crosses the Cretan Sea to reach western Crete. Soon after take-off the flight leaves the Attica coast and heads out over the open Cretan Sea, the stretch of the southern Aegean between the Cyclades and Crete. For most of the crossing there is little but blue water below, with occasional small islands scattered in the distance." +
      " As Crete's north coast approaches, the Bay of Chania comes into view and the plane descends along the coastline; just west of the airport lies the Venetian-era old harbour of Chania, gateway to the White Mountains of western Crete.",
    },
    travel: {
    "zh-CN":
      "雅典到哈尼亚飞约45分钟，两地同一时区，夏季旺季航班密集。哈尼亚机场离老城约14公里，有公交与出租车连接。哈尼亚是探索克里特岛西部与白山地区的门户，也是徒步萨马利亚峡谷的理想落脚点，峡谷通常5月至10月开放，具体以国家公园当年公告为准。希腊属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Athens to Chania is about 45 minutes, same time zone, with frequent flights in the summer peak season. Chania Airport is about 14 km from the old town, linked by bus and taxi. Chania is the gateway to western Crete and the White Mountains, and a good base for hiking the Samaria Gorge, typically open May–October, subject to the national park's yearly announcement. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "ath-rho": {
    study: {
    "zh-CN":
      "雅典飞罗德城，是一趟横贯爱琴海南部、串起南爱琴火山弧的航线。起飞后飞机向东南穿越基克拉泽斯群岛所在海域，先经过米洛斯岛——一座多彩的火山岛，以黑曜岩贸易与萨拉基尼科海岸的浮岩地貌闻名；" +
      "继续向东，脚下出现一座近乎圆形的小岛——尼西罗斯，一座休眠层状火山，中央的斯特凡诺斯火山口至今仍有活跃的喷气孔与地热活动。飞机继续向东南飞越多德卡尼斯群岛海域，降落在罗德岛——欧洲保存最完好的中世纪城防城市之一所在的岛屿。",
    "en-US":
      "Athens to Rhodes Town crosses the southern Aegean along the South Aegean Volcanic Arc. After take-off the flight heads south-east over the Cyclades, first passing Milos, a colourful volcanic island known for its obsidian trade and the pumice landscape of the Sarakiniko coast." +
      " Continuing east, a near-circular islet appears below — Nisyros, a dormant stratovolcano whose central Stefanos crater still hosts active fumaroles and geothermal activity. The flight carries on south-east over the Dodecanese to land at Rhodes, home to one of Europe's best-preserved medieval walled towns.",
    },
    travel: {
    "zh-CN":
      "雅典到罗德城飞约55分钟，两地同一时区，夏季旺季每天有多班航班。罗德城机场离古城约14公里，有公交与出租车连接。罗德岛是希腊阳光最充足的地区之一，中世纪古城内街巷狭窄，不通行车辆，建议以步行方式游览，穿舒适的鞋。希腊属申根区，多数国家公民短期旅游按申根区规定执行，货币为欧元。",
    "en-US":
      "Athens to Rhodes Town is about 55 minutes, same time zone, with several daily flights in summer. Rhodes Airport is about 14 km from the old town, linked by bus and taxi. Rhodes is one of the sunniest parts of Greece; the medieval old town's narrow streets are closed to vehicles, so wear comfortable shoes for walking. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits, and the currency is the euro.",
    },
  },

  "ath-cfu": {
    study: {
    "zh-CN":
      "雅典飞科孚城，是一趟从爱琴海一侧横跨希腊本土、抵达伊奥尼亚海的航线。起飞后不久，脚下出现一条狭长的海湾——科林斯湾，本质是一条活动地堑，两岸持续拉张，最窄处的里翁—安蒂里翁海峡架有斜拉桥连接两岸。" +
      "飞机继续向西北，一条连绵起伏的石灰岩山脊出现在下方——品都斯山脉，纵贯希腊大陆西部，有“希腊脊梁”之称，是希腊本土重要的气候与水系分水岭。越过品都斯山脉，飞机进入伊奥尼亚海上空，降落在科孚岛——一座因降水充沛而植被终年葱郁的岛屿。",
    "en-US":
      "Athens to Corfu Town crosses mainland Greece from the Aegean side to the Ionian Sea. Soon after take-off a long, narrow inlet appears below — the Gulf of Corinth, essentially an active rift graben whose two shores continue to pull apart, spanned at its narrowest point by the cable-stayed bridge at Rio-Antirrio." +
      " Continuing north-west, an undulating limestone ridge appears below — the Pindus range, running the length of western mainland Greece and known as the country's spine, a key climatic and hydrological divide. Past the Pindus the flight crosses onto the Ionian Sea, landing on Corfu, an island kept lushly green by abundant rainfall.",
    },
    travel: {
    "zh-CN":
      "雅典到科孚城飞约65分钟，两地同一时区。科孚城机场离老城约3公里，有公交与出租车连接。科孚岛降水明显多于爱琴海诸岛，植被终年葱郁，气候相对湿润，游览老城建议带一把折叠伞。科孚城也是前往意大利、阿尔巴尼亚渡轮航线的港口城市。希腊属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Athens to Corfu Town is about 65 minutes, same time zone. Corfu Airport is about 3 km from the old town, linked by bus and taxi. Corfu receives markedly more rainfall than the Aegean islands, keeping its vegetation green year-round and the climate comparatively humid — pack a compact umbrella for the old town. Corfu Town is also a port for ferry routes to Italy and Albania. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "ath-ioa": {
    study: {
    "zh-CN":
      "雅典飞约阿尼纳，是一趟从阿提卡飞向希腊西北部伊庇鲁斯地区的航线。起飞后不久，脚下出现科林斯湾——一条因地壳拉张形成的狭长海湾。飞机继续向西北，色萨利平原西北缘出现一群陡峭孤立的砂岩岩柱——迈泰奥拉，" +
      "约6000万年前由古河流三角洲沉积后经区域隆升与差异侵蚀塑造而成，14世纪起东正教隐修士陆续在岩顶建起修道院。越过迈泰奥拉，飞机进入品都斯山区，降落在帕姆沃蒂斯湖畔的约阿尼纳——希腊西北部山区的门户城市。",
    "en-US":
      "Athens to Ioannina flies from Attica into Epirus in north-western Greece. Soon after take-off the Gulf of Corinth appears below, a long, narrow inlet formed by crustal extension. Continuing north-west, a cluster of steep, isolated sandstone pinnacles appears at the edge of the Thessalian Plain — Meteora, shaped roughly 60 million years ago from ancient river-delta sediment by regional uplift and differential erosion, its summits crowned with Orthodox monasteries built from the 14th century onward." +
      " Past Meteora the flight enters the Pindus mountains, landing at Ioannina on the shore of Lake Pamvotis, gateway to north-western Greece's mountain country.",
    },
    travel: {
    "zh-CN":
      "雅典到约阿尼纳飞约50分钟，两地同一时区，也可选择约6小时的长途巴士。约阿尼纳机场离市区约5公里，有出租车连接市中心。约阿尼纳是探索维科斯峡谷等品都斯山区的理想基地，山区冬季寒冷多雪，部分道路可能因积雪受影响，出行前建议查询路况与天气预报。希腊属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Athens to Ioannina is about 50 minutes, same time zone, or about 6 hours by long-distance coach. Ioannina Airport is about 5 km from the centre, with taxis to the city. Ioannina is an ideal base for exploring the Vikos Gorge and the wider Pindus mountains; winters there are cold and snowy, and some mountain roads may be affected, so check road and weather conditions before setting out. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "ath-jtr": {
    study: {
    "zh-CN":
      "雅典飞圣托里尼，是希腊最受欢迎的岛屿航线之一。起飞后飞机向东南跨越基克拉泽斯群岛所在的爱琴海海域，途经米洛斯岛——一座火山成因的岛屿，岛内多种颜色的火山岩层与萨拉基尼科海岸的月球表面般地貌是其鲜明标志。" +
      "飞机继续向东南，一座新月形轮廓的岛屿逐渐显现——圣托里尼，公元前约1600年一次青铜时代晚期的大规模喷发造成岛屿中央塌陷，形成如今的破火山口，费拉、伊亚等城镇建在高约300米的火口崖顶上，飞机降落在岛屿东侧的机场。",
    "en-US":
      "Athens to Santorini is one of Greece's most popular island routes. After take-off the flight heads south-east across the Aegean over the Cyclades, passing Milos, a volcanic island whose colourful rock layers and moon-like Sarakiniko coast are its clearest markers." +
      " Continuing south-east, a crescent-shaped island gradually comes into view — Santorini, its centre collapsed by a massive Late Bronze Age eruption around 1600 BCE into the caldera seen today, with towns such as Fira and Oia perched on cliffs about 300 m above it; the plane lands at the airport on the island's eastern side.",
    },
    travel: {
    "zh-CN":
      "雅典到圣托里尼飞约45分钟，两地同一时区，夏季旺季每天有多班航班，也可选择约7-8小时的渡轮。圣托里尼机场离费拉约7公里，岛内交通主要靠公交、出租车或租车。旺季住宿价格较高，建议提前预订；冬季部分旅游设施季节性歇业，渡轮班次也相应减少。希腊属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Athens to Santorini is about 45 minutes, same time zone, with several daily flights in summer; a ferry (about 7–8 hours) is another option. Santorini Airport is about 7 km from Fira; getting around relies mainly on buses, taxis or rental cars. Accommodation prices rise sharply in peak season, so book ahead; in winter many tourist facilities close seasonally and ferry schedules are reduced. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "ath-klx": {
    study: {
    "zh-CN":
      "雅典飞卡拉马塔，是一趟深入伯罗奔尼撒半岛南部的航线。起飞后不久，脚下出现科林斯湾——一条因地壳持续拉张形成的狭长海湾，分隔伯罗奔尼撒半岛与希腊大陆，两岸持续拉张的速率在全球大陆裂谷中也较为突出。飞机继续向西南，一座陡然从海边隆起的山脊出现在下方——泰格特斯山，" +
      "主峰先知伊利亚斯海拔2407米，是希腊本土地势最陡峻的山地之一，山体几乎直接从海边隆起，几乎没有过渡地带，南端逐渐收窄延伸为崎岖的马尼半岛。越过泰格特斯山，飞机降落在迈锡尼湾畔的卡拉马塔——以同名橄榄与橄榄油闻名的城市。",
    "en-US":
      "Athens to Kalamata flies deep into the southern Peloponnese. Soon after take-off the Gulf of Corinth appears below, a long, narrow inlet formed by ongoing crustal extension, separating the Peloponnese from mainland Greece. Continuing south-west, a ridge rising abruptly from the sea appears below — Taygetus, its highest peak, Profitis Ilias, reaching 2,407 m, among the steepest terrain on the Greek mainland, its southern end extending into the rugged Mani Peninsula." +
      " Past Taygetus the flight lands at Kalamata on the Messenian Gulf, a city famous for the olives and olive oil that share its name.",
    },
    travel: {
    "zh-CN":
      "雅典到卡拉马塔飞约40分钟，两地同一时区，也可选择约3小时的长途巴士。卡拉马塔机场离市区约8公里，有出租车连接市中心。卡拉马塔是探索马尼半岛、迪罗斯洞穴与泰格特斯山区的理想基地，当地出产的卡拉马塔橄榄与橄榄油值得一试。希腊属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Athens to Kalamata is about 40 minutes, same time zone, or about 3 hours by long-distance coach. Kalamata Airport is about 8 km from the centre, with taxis to the city. Kalamata is an ideal base for exploring the Mani Peninsula, the Diros Caves and the Taygetus mountains, and its namesake olives and olive oil are worth trying. Greece is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "lis-fao": {
    study: {
    "zh-CN":
      "里斯本飞法鲁，从首都飞到南部阿尔加维海岸，横穿整个葡萄牙本土南部。起飞后不久，脚下出现阿拉比达海岸——塞图巴尔半岛一段石灰岩山地直插大西洋形成的陡峭海岸，山海高差极大。" +
      "继续南飞，进入阿连特茹平原：一片一望无际、微微起伏的开阔地形，占葡萄牙国土约三分之一，大片间距均匀的橡树点缀其间，这种稀树草原式的农林系统已被联合国粮农组织列为全球重要农业文化遗产。" +
      "平原南端，一片宽阔的蓝色水面出现——阿尔克瓦水库，西欧最大的人工湖，由拦截瓜迪亚纳河而成。" +
      "越过水库，地面骤然变化，进入阿尔加维海岸：金黄色的石灰岩崖壁被海浪侵蚀出连串的海蚀拱和海蚀柱，法鲁就在这段海岸旁、紧邻福尔摩沙潟湖国家公园。",
    "en-US":
      "Lisbon to Faro flies from the capital to the southern Algarve coast, crossing the whole southern half of mainland Portugal. Soon after take-off, the Arrábida Coast appears below — a stretch of limestone mountain on the Setúbal Peninsula dropping steeply into the Atlantic, with an extreme land-to-sea elevation change." +
      "Flying on south, you enter the Alentejo Plain: a vast, gently rolling open landscape covering about a third of Portugal, dotted with evenly spaced oaks in a savanna-style agroforestry system that the UN Food and Agriculture Organization has designated a Globally Important Agricultural Heritage System." +
      "At the plain's southern end, a broad blue expanse of water appears — the Alqueva Reservoir, the largest artificial lake in Western Europe, formed by damming the Guadiana River." +
      "Past the reservoir the land changes abruptly into the Algarve Coast: golden limestone cliffs carved by the waves into a chain of sea arches and stacks, with Faro right beside this stretch of coast, next to Ria Formosa Natural Park.",
    },
    travel: {
    "zh-CN":
      "里斯本到法鲁飞约55分钟，同一时区。也可坐火车（约3小时）或长途巴士。法鲁属地中海气候，是葡萄牙日照最多的地区之一，夏季炎热干燥。" +
      "靠窗依次能看到阿拉比达海岸、阿连特茹的橡树稀树草原、阿尔克瓦水库和阿尔加维的金色海岸。以法鲁为基地租车游阿尔加维沿海度假小镇很方便。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Lisbon to Faro is about 55 minutes, in the same time zone. You can also take the train (about 3 hours) or a long-distance coach. Faro has a Mediterranean climate and is one of Portugal's sunniest regions, hot and dry in summer." +
      "From a window you see, in turn, the Arrábida Coast, the oak savanna of the Alentejo, the Alqueva Reservoir and the golden Algarve coast. Renting a car from Faro is convenient for touring the Algarve's coastal resort towns." +
      "Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "lis-fnc": {
    study: {
    "zh-CN":
      "里斯本飞丰沙尔，从欧洲大陆飞到大西洋中的马德拉群岛，是一趟大半程在开阔海面上飞行的航线。起飞后不久经过阿拉比达海岸的陡峭崖壁，随后是维森特角海岸——葡萄牙西南端一段面朝大西洋的原生崖壁，古生代变质岩构成的陡崖笔直延伸，几乎没有开发。" +
      "越过大陆架，飞机进入开阔的大西洋海面，飞行约一个多小时后，马德拉岛的轮廓才从海面上浮现——一列由多次火山喷发堆积形成的高山脊，最高点皮库鲁伊武海拔1862米，山坡覆盖着深绿色的原始月桂林。" +
      "丰沙尔就在马德拉岛南岸的一处海湾，城市依山而建，从海边一直延伸到山腰。",
    "en-US":
      "Lisbon to Funchal flies from mainland Europe to the Madeira archipelago in the Atlantic, most of it over open sea. Soon after take-off you pass the steep cliffs of the Arrábida Coast, then Costa Vicentina — a wild, largely undeveloped cliff coastline facing the Atlantic at Portugal's south-western tip, its Palaeozoic metamorphic-rock cliffs running straight and steep." +
      "Over the continental shelf the plane crosses open Atlantic water, and after a little over an hour the outline of Madeira Island rises from the sea — a high ridge built up by repeated volcanic eruptions, its highest point, Pico Ruivo, at 1,862 m, its slopes covered in dark-green primeval laurel forest." +
      "Funchal sits in a bay on Madeira's south coast, the city climbing the hillside from the sea.",
    },
    travel: {
    "zh-CN":
      "里斯本到丰沙尔飞约1小时50分，同一时区。马德拉机场跑道建在悬崖边、进近有一定挑战性，是经验丰富的机组执飞。马德拉气候常年温和，被称为“大西洋的花园”。" +
      "靠窗前段能看到本土西南海岸，后段大部分时间是开阔的大西洋海面，接近马德拉时能看到岛屿多山的轮廓。丰沙尔的传统雪橇滑道和马德拉酒庄品鉴是热门体验。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Lisbon to Funchal is about 1 hour 50 minutes, in the same time zone. Madeira's airport runway is built out over a cliff and the approach is somewhat challenging, flown by experienced crews. Madeira's climate is mild year-round, earning it the name 'Garden of the Atlantic'." +
      "From a window the early part shows the mainland's south-western coast, then mostly open Atlantic water, with Madeira's mountainous outline appearing near the end. Funchal's traditional toboggan run and Madeira wine tastings are popular experiences." +
      "Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "lis-pdl": {
    study: {
    "zh-CN":
      "里斯本飞蓬塔德尔加达，从欧洲大陆一路飞到大西洋中脊上的亚速尔群岛，全程约1500公里，绝大部分时间在开阔的大西洋海面上飞行，是葡萄牙国内最长的航线之一，也是唯一一条完全跨越大洋的国内航线。" +
      "起飞后很快就看不到陆地，飞机沿北大西洋暖流经过的开阔洋面向西飞行，脚下长时间只有深蓝色的海水，偶尔可见货轮的航迹。" +
      "飞行约两个半小时后，圣米格尔岛的轮廓才出现在海面上，岛屿西端一座直径约5公里的火山破火山口清晰可见——七城破火山口，口底一大一小两个相连的湖泊因光线折射常呈现一蓝一绿的对比色，是亚速尔群岛最容易辨认的地貌之一。" +
      "蓬塔德尔加达就在圣米格尔岛南岸，是探索这座活跃火山岛屿的门户，城市不大，海滨广场的三座黑白拱门是标志性地标。",
    "en-US":
      "Lisbon to Ponta Delgada flies from mainland Europe all the way to the Azores on the Mid-Atlantic Ridge, about 1,500 km, almost entirely over open Atlantic water — one of Portugal's longest domestic routes." +
      "After about two and a half hours, the outline of São Miguel Island appears over the water, and a volcanic caldera about 5 km across at the island's western end comes into clear view — Sete Cidades, whose two connected lakes on the floor, one large and one small, often show a striking blue-and-green colour contrast from light refraction." +
      "Ponta Delgada is on the south coast of São Miguel, the gateway to exploring this active volcanic island.",
    },
    travel: {
    "zh-CN":
      "里斯本到蓬塔德尔加达飞约2小时40分，落地把时钟往回拨1小时（亚速尔比本土晚一个时区）。亚速尔群岛常年温和多雨，天气变化快。" +
      "靠窗几乎全程是大西洋海面，接近圣米格尔岛时能看到火山地貌轮廓。以蓬塔德尔加达为基地可自驾环岛看七城破火山口和富尔纳斯地热区，也是热门的观鲸出发点。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定，冬季部分航班易受天气影响、建议预留缓冲时间。",
    "en-US":
      "Lisbon to Ponta Delgada is about 2 hours 40 minutes; set your clock back 1 hour on arrival (the Azores are an hour behind the mainland). The Azores are mild and rainy year-round, with fast-changing weather." +
      "From a window it is almost entirely Atlantic water, with the volcanic landscape of São Miguel appearing near the end. From Ponta Delgada you can drive around the island to see the Sete Cidades caldera and the Furnas geothermal area, and it's a popular starting point for whale watching." +
      "Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules; some winter flights are weather-sensitive, so build in buffer time.",
    },
  },

  "opo-fnc": {
    study: {
    "zh-CN":
      "波尔图飞丰沙尔，从葡萄牙北部飞到大西洋中的马德拉群岛，是几条飞马德拉航线里距离最远的一条。起飞后不久，脚下出现杜罗河谷——葡萄牙北部杜罗河中游两岸的梯田葡萄园区，人工修建的石砌梯田已有约2000年历史，波特酒即产自此地，从空中能看到随等高线弯曲排列的梯田纹理。" +
      "越过葡萄牙本土海岸后，飞机进入开阔的大西洋海面，脚下长时间只有深蓝色的海水，航线大致沿海岸线向南偏西飞行，之后折向西南穿越大洋。" +
      "长时间飞行后马德拉岛才出现在视野中——一座由多次火山喷发堆积形成的高山脊岛屿，最高点皮库鲁伊武海拔1862米，山坡覆盖着深绿色的原始月桂林。丰沙尔就在岛屿南岸的一处海湾，城市依山而建，从海边一直延伸到山腰。",
    "en-US":
      "Porto to Funchal flies from northern Portugal to the Madeira archipelago in the Atlantic, the longest of the routes to Madeira. Soon after take-off, the Douro Valley appears below — the terraced vineyard region on both banks of the middle Douro in northern Portugal, its hand-built stone terraces about 2,000 years old, the source of Port wine." +
      "Past the coast the plane crosses open Atlantic water, and only after a long stretch does Madeira come into view — an island built up by volcanic eruptions into a high ridge, its slopes covered in dark-green primeval laurel forest. Funchal sits in a bay on the island's south coast.",
    },
    travel: {
    "zh-CN":
      "波尔图到丰沙尔飞约2小时10分，同一时区。这是较长的一条岛际航线，建议带些机上娱乐或读物。波尔图凉爽多雨，马德拉常年温和，落地后气候会有明显变化。" +
      "靠窗前段能看到杜罗河谷的梯田葡萄园，随后大部分时间是开阔海面。丰沙尔的酒窖品鉴和悬崖步道是热门体验。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Porto to Funchal is about 2 hours 10 minutes, in the same time zone. This is one of the longer island routes — bring something to read or watch. Porto is cool and rainy while Madeira is mild year-round, so expect a noticeable climate change on arrival." +
      "From a window the early part shows the terraced vineyards of the Douro Valley, then mostly open water. Funchal's wine-cellar tastings and cliff-edge trails are popular experiences." +
      "Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "opo-pdl": {
    study: {
    "zh-CN":
      "波尔图飞蓬塔德尔加达，从葡萄牙北部一路飞到亚速尔群岛，是葡萄牙国内飞行距离最长的航线，全程超过1700公里。起飞后先经过杜罗河谷的梯田葡萄园，随后越过大陆架，进入开阔的大西洋海面。" +
      "航线大致向西南方向穿越大洋，脚下长时间只有深蓝色的海水和偶尔可见的云影，是葡萄牙国内几条航线里飞越海洋时间最长的一条。" +
      "长时间飞越大西洋后，圣米格尔岛的轮廓才出现，岛屿西端的七城破火山口清晰可见——口底两个相连的湖泊因光线折射呈现蓝绿对比色，是辨认这座岛屿最直观的标志。蓬塔德尔加达就在岛屿南岸，海滨广场的三座黑白拱门是城市地标。",
    "en-US":
      "Porto to Ponta Delgada flies from northern Portugal all the way to the Azores, one of the longest domestic routes in Portugal. After take-off you pass the terraced vineyards of the Douro Valley, then cross the continental shelf into open Atlantic water." +
      "After a long stretch over the ocean, the outline of São Miguel Island appears, with the Sete Cidades caldera at its western end clearly visible — its two connected lakes showing a blue-green colour contrast from light refraction. Ponta Delgada is on the island's south coast.",
    },
    travel: {
    "zh-CN":
      "波尔图到蓬塔德尔加达飞约2小时55分，落地把时钟往回拨1小时。这是较长的一条航线，建议提前查好登机口和转机信息。亚速尔群岛常年温和多雨，天气变化快。" +
      "靠窗前段能看到杜罗河谷，随后大部分时间是大西洋海面。以蓬塔德尔加达为基地可自驾环圣米格尔岛。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定，冬季部分航班易受天气影响。",
    "en-US":
      "Porto to Ponta Delgada is about 2 hours 55 minutes; set your clock back 1 hour on arrival. This is a longer route — check gate and connection details ahead. The Azores are mild and rainy year-round, with fast-changing weather." +
      "From a window the early part shows the Douro Valley, then mostly Atlantic water. From Ponta Delgada you can drive around São Miguel Island." +
      "Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules; some winter flights are weather-sensitive.",
    },
  },

  "opo-fao": {
    study: {
    "zh-CN":
      "波尔图飞法鲁，纵贯整个葡萄牙本土，从北部飞到最南端的阿尔加维海岸，是葡萄牙本土内部飞行距离最长的一条线。起飞后不久，脚下出现蒙德古河——葡萄牙全境在国内发源、全程流经本国的最长河流，科英布拉一带河道宽阔平缓。" +
      "继续南飞，地面变成艾雷-坎迪埃罗斯山：一片灰白色的侏罗纪石灰岩喀斯特高地，地表布满石芽和落水洞，地下发育大量溶洞。" +
      "越过高地，进入阿连特茹平原——一望无际的橡树稀树草原，占葡萄牙国土约三分之一。接近终点，地面骤然变化，金黄色的阿尔加维海岸出现在眼前，法鲁就在这段海岸旁。",
    "en-US":
      "Porto to Faro runs the length of mainland Portugal, from the north to the southernmost Algarve coast — the longest flight entirely within mainland Portugal. Soon after take-off, the Mondego River appears below — the longest river to both rise and flow entirely within Portugal, wide and gentle around Coimbra." +
      "Flying on south, the land becomes Serra de Aire e Candeeiros: a pale grey Jurassic limestone karst upland, its surface dense with pinnacles and sinkholes, with an extensive cave system underground." +
      "Beyond the upland you enter the Alentejo Plain — an endless expanse of oak savanna covering about a third of Portugal. Near the end the land changes abruptly, and the golden Algarve coast comes into view, with Faro right beside it.",
    },
    travel: {
    "zh-CN":
      "波尔图到法鲁飞约1小时15分，同一时区。这条南北纵贯线是葡萄牙本土最长的国内航段，比坐火车（约6-7小时、需换乘）快得多。波尔图凉爽多雨，法鲁炎热干燥，两地气候差异明显。" +
      "靠窗依次能看到蒙德古河、艾雷-坎迪埃罗斯山的喀斯特高地、阿连特茹的橡树稀树草原和阿尔加维的金色海岸，是了解葡萄牙本土地形最完整的一条线。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Porto to Faro is about 1 hour 15 minutes, in the same time zone. This north–south route is the longest domestic mainland flight in Portugal, much faster than the train (about 6–7 hours with a change). Porto is cool and rainy while Faro is hot and dry — the climate contrast is significant." +
      "From a window you see, in turn, the Mondego River, the karst upland of Serra de Aire e Candeeiros, the oak savanna of the Alentejo and the golden Algarve coast — the most complete way to read mainland Portugal's landforms in one flight." +
      "Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "ams-mst": {
    study: {
    "zh-CN":
      "阿姆斯特丹飞马斯特里赫特，是荷兰境内为数不多的定期国内航班之一——荷兰国土狭小、铁路发达，国内飞行本身就很罕见，这条航线主要服务于两地之间快速通勤和转机需求。起飞后不久，脚下出现乌得勒支丘陵脊：一条末次冰期冰川推挤堆积形成的狭长森林带，在地势平坦的荷兰中部格外醒目。" +
      "继续南飞，地面逐渐从荷兰典型的低洼围垦地转变为略有起伏的地形，进入马斯河荷兰段：这条发源于法国、流经比利时的河流在荷兰南部林堡省一带切出相对明显的河谷，两岸有低丘。马斯特里赫特就坐落在马斯河两岸，是荷兰地势起伏最明显的地区。",
    "en-US":
      "Amsterdam to Maastricht is one of the very few scheduled domestic flights in the Netherlands — the country is small with an extensive rail network, so domestic flying itself is unusual, and this route mainly serves fast commuting and connections between the two cities. Soon after take-off, the Utrechtse Heuvelrug appears below: a narrow band of forest on a moraine ridge from the last ice age, standing out sharply against the otherwise flat central Netherlands." +
      "Flying on south, the land gradually shifts from the Netherlands' typical low-lying reclaimed polder into slightly rolling terrain, entering the Meuse in the Netherlands: this river, rising in France and flowing through Belgium, cuts a relatively distinct valley through the southern province of Limburg, with low hills on either side. Maastricht sits on both banks of the Meuse, in the region with the most pronounced relief in the country.",
    },
    travel: {
    "zh-CN":
      "阿姆斯特丹到马斯特里赫特飞约50分钟，同一时区。也可坐火车（约2.5小时），因为国内飞行罕见，这条航线更多是史基浦机场的国际中转旅客用于衔接南部行程。马斯特里赫特气候比荷兰北部略温和。" +
      "靠窗能看到乌得勒支丘陵脊的森林带和马斯河谷地起伏的地形——这是在荷兰国内航班上难得能看出真实地势变化的一段。马斯特里赫特靠近比利时和德国边境，生活方式偏向悠闲享乐。" +
      "荷兰属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Amsterdam to Maastricht is about 50 minutes, in the same time zone. The train takes about 2.5 hours; because domestic flights are rare, this route is used more by international transfer passengers at Schiphol connecting onward to the south. Maastricht's climate is slightly milder than the north of the Netherlands." +
      "From a window you see the forested Utrechtse Heuvelrug and the rolling terrain of the Meuse valley — a rare stretch on a Dutch domestic flight where you can actually see real changes in relief. Maastricht is close to the Belgian and German borders and has a more relaxed, food-and-wine-focused way of life." +
      "The Netherlands is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "ams-grq": {
    study: {
    "zh-CN":
      "阿姆斯特丹飞格罗宁根，是荷兰境内另一条为数不多的定期国内航班，连接首都与荷兰北部最大的城市。起飞后不久，脚下出现艾瑟尔湖——荷兰最大的湖泊，1932年阿夫鲁戴克大坝建成后由原本的咸水湾须德海逐渐淡化而成，湖岸线曲折、多处已被围垦为陆地。" +
      "继续北飞，一条相对狭窄的河道出现在视野中——艾瑟尔河，莱茵河在阿纳姆附近分出的支流，向北注入艾瑟尔湖，沿岸的代芬特尔、坎彭等古镇历史上曾是汉萨同盟的贸易城市。" +
      "接近格罗宁根，脚下出现劳沃斯湖：1969年一条拦海坝将原本与瓦登海相通的海湾封闭后逐渐淡化形成的湖泊与湿地，开阔水面与大片芦苇沼泽交错分布。格罗宁根就在这片湿地以南不远处。",
    "en-US":
      "Amsterdam to Groningen is another of the Netherlands' few scheduled domestic flights, linking the capital with the largest city in the north. Soon after take-off, the IJsselmeer appears below — the largest lake in the Netherlands, gradually freshened from the former saline Zuiderzee bay after the Afsluitdijk was completed in 1932, its shoreline irregular with several stretches now reclaimed as land." +
      "Flying on north, a relatively narrow channel comes into view — the IJssel, a branch the Rhine splits off near Arnhem, flowing north into the IJsselmeer, with historic Hanseatic trading towns such as Deventer and Kampen along its banks." +
      "Approaching Groningen, the Lauwersmeer appears below: a lake and wetland formed after a 1969 barrier dam sealed off a bay once connected to the Wadden Sea, open water interspersed with extensive reed marsh. Groningen is not far south of this wetland.",
    },
    travel: {
    "zh-CN":
      "阿姆斯特丹到格罗宁根飞约40分钟，同一时区。也可坐火车（约2小时10分），因国内飞行罕见，这条航线主要服务国际转机旅客和商务出行。格罗宁根是大学城，年轻人口比例高、自行车文化发达。" +
      "靠窗能看到艾瑟尔湖开阔的淡水湖面、艾瑟尔河沿岸的汉萨古城和劳沃斯湖的湿地景观。以格罗宁根为基地可探索瓦登海沿岸和弗里斯兰地区。" +
      "荷兰属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Amsterdam to Groningen is about 40 minutes, in the same time zone. The train takes about 2 hours 10 minutes; because domestic flights are rare, this route mainly serves international transfer passengers and business travel. Groningen is a university city with a young population and a strong cycling culture." +
      "From a window you see the open freshwater expanse of the IJsselmeer, the Hanseatic old towns along the IJssel, and the wetland landscape of the Lauwersmeer. From Groningen you can explore the Wadden Sea coast and the Friesland region." +
      "The Netherlands is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "vie-inn": {
    study: {
    "zh-CN":
      "维也纳飞因斯布鲁克，是一趟自东向西横贯奥地利全境的航线，从维也纳盆地一路飞越阿尔卑斯山脉，抵达蒂罗尔州的山间城市因斯布鲁克。起飞后不久，脚下展开维也纳盆地开阔平坦的地势——这是阿尔卑斯山与喀尔巴阡山之间一处年轻的构造沉降盆地。" +
      "飞机继续向西，进入维也纳森林——阿尔卑斯山脉向东延伸的最后一段石灰岩丘陵，森林覆盖率极高。越过维也纳森林后，飞机跨越奥地利中部大片山地，抵达达赫斯坦山上空——山顶终年积雪的哈尔施塔特冰川清晰可见，喀斯特地貌发育的灰白色山体格外醒目。飞机继续向西，最后掠过卡尔文德尔山陡峭的石灰岩崖壁，沿因河谷下降，降落在四周被阿尔卑斯山环绕的因斯布鲁克。",
    "en-US":
      "Flying from Vienna to Innsbruck crosses the whole of Austria from east to west, from the Vienna Basin over the Alps to the mountain city of Innsbruck in Tyrol. Soon after take-off, the broad, flat expanse of the Vienna Basin unfolds below — a young tectonic subsidence basin between the Alps and the Carpathians." +
      " The flight continues west into the Wienerwald, the easternmost limestone hill range where the Alps taper off, densely forested throughout. Beyond the Wienerwald the plane crosses a wide swath of central Austrian mountains and passes over the Dachstein, where the year-round snow of the Hallstatt Glacier is clearly visible against the pale grey karst massif below. Continuing west, the flight skirts the steep limestone cliffs of the Karwendel before descending along the Inn Valley into Innsbruck, ringed on all sides by the Alps.",
    },
    travel: {
    "zh-CN":
      "维也纳到因斯布鲁克飞约55分钟，两地同一时区，也可选择约4-5小时的城际列车（奥地利铁路 ÖBB 网络便捷，很多本地人更倾向于坐火车）。因斯布鲁克机场离市区约4公里。因斯布鲁克是蒂罗尔州首府，也是探索厄茨塔尔阿尔卑斯山、齐勒河谷滑雪区的理想基地。奥地利属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Vienna to Innsbruck is about 55 minutes, same time zone; an intercity train (about 4-5 hours on the ÖBB rail network) is another option many locals prefer. Innsbruck Airport is about 4 km from the centre. Innsbruck is the capital of Tyrol and an ideal base for exploring the Ötztal Alps and the Zillertal ski areas. Austria is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "vie-grz": {
    study: {
    "zh-CN":
      "维也纳飞格拉茨，是一趟深入奥地利东南部施泰尔马克州的短途航线。起飞后不久，脚下出现维也纳盆地开阔平坦的地势，随后飞机进入维也纳森林——阿尔卑斯山脉向东延伸的最后一段石灰岩丘陵地带，森林覆盖率极高。" +
      "飞机继续向西南，一片相对平缓的喀斯特高原出现在下方——拉克斯—施内山，海拔2076米的施内山是阿尔卑斯山脉向东延伸中最后一座超过2000米的山峰，也是维也纳市民熟悉的“后山”。越过这片山地后，飞机降落在穆尔河畔的格拉茨——奥地利第二大城市。",
    "en-US":
      "Flying from Vienna to Graz is a short hop deep into Styria in south-eastern Austria. Soon after take-off, the broad, flat Vienna Basin appears below, and the flight then enters the Wienerwald, the easternmost, densely forested stretch of limestone hills where the Alps taper off." +
      " Continuing south-west, a comparatively gentle karst highland comes into view — the Rax-Schneeberg Group, whose Schneeberg, at 2,076 m, is the easternmost peak in the Alps to exceed 2,000 m and a familiar \"local mountain\" for Vienna's residents. Past this highland, the flight descends into Graz on the Mur River, Austria's second-largest city.",
    },
    travel: {
    "zh-CN":
      "维也纳到格拉茨飞约40分钟，两地同一时区，也可选择约2.5小时的城际列车。格拉茨机场离市区约10公里。格拉茨是施泰尔马克州首府，老城2000年列入联合国教科文组织世界遗产名录，也是探索穆尔河上游河漫滩森林的理想基地。奥地利属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Vienna to Graz is about 40 minutes, same time zone; an intercity train (about 2.5 hours) is another option. Graz Airport is about 10 km from the centre. Graz is the capital of Styria, its old town a UNESCO World Heritage site since 2000, and an ideal base for exploring the floodplain forests of the upper Mur. Austria is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "vie-klu": {
    study: {
    "zh-CN":
      "维也纳飞克拉根福，是一趟从维也纳盆地飞向奥地利南部克恩顿州湖区的航线。起飞后不久，脚下展开维也纳盆地开阔平坦的地势，随后飞机跨越拉克斯—施内山——阿尔卑斯山脉最东端的喀斯特高原，海拔2076米的施内山是这一带的最高点。" +
      "飞机继续向西南，一片面积广阔的喀斯特高原出现在下方——陶滕山，中欧面积最大的喀斯特高原，山体崖壁陡峭、顶部相对平坦，散布着大量圆形溶蚀洼地。越过陶滕山后，飞机降落在沃尔特湖东端的克拉根福——奥地利南部重要的湖区旅游城市。",
    "en-US":
      "Flying from Vienna to Klagenfurt heads from the Vienna Basin toward the lake district of Carinthia in southern Austria. Soon after take-off, the broad, flat Vienna Basin unfolds below, and the flight then crosses the Rax-Schneeberg Group, the karst highland at the easternmost tip of the Alps, whose Schneeberg (2,076 m) is the area's highest point." +
      " Continuing south-west, an extensive karst plateau comes into view — the Totes Gebirge, Central Europe's largest karst plateau, its cliffs steep and its summit comparatively flat, scattered with numerous circular dissolution hollows. Past the Totes Gebirge, the flight descends into Klagenfurt at the eastern end of Wörthersee, an important lake-resort city in southern Austria.",
    },
    travel: {
    "zh-CN":
      "维也纳到克拉根福飞约50分钟，两地同一时区，也可选择约4小时的城际列车。克拉根福机场离市区约3公里。克拉根福是克恩顿州首府，坐落在沃尔特湖东端，是探索克恩顿州湖区（沃尔特湖、米尔施塔特湖）的理想基地。奥地利属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Vienna to Klagenfurt is about 50 minutes, same time zone; an intercity train (about 4 hours) is another option. Klagenfurt Airport is about 3 km from the centre. Klagenfurt, the capital of Carinthia, sits at the eastern end of Wörthersee and is an ideal base for exploring Carinthia's lake district (Wörthersee, Millstätter See). Austria is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "dub-kir": {
    study: {
    "zh-CN":
      "都柏林飞凯里，是一趟自东向西横贯爱尔兰全境的航线，从东岸的都柏林平原一路飞越中部低地，抵达西南部凯里郡的高山地带。起飞后不久，脚下展开爱尔兰中部低地开阔平坦的地势——大片农牧用地间点缀着深褐色的隆起泥炭沼泽，艾伦沼泽是其中最具代表性的一片。" +
      "飞机继续向西南，地势逐渐抬升，加尔提山脉连绵的山脊出现在下方——这是爱尔兰内陆地区最高的山脉，古红砂岩构成的山体北坡散布着数个冰蚀湖。越过加尔提山脉后，飞机进入爱尔兰最高的山地——麦吉利卡迪山脉，尖锐的冰蚀峰群与深切冰斗湖清晰可见，卡朗图希尔峰是爱尔兰全境最高点，飞机随后降落在山脚不远处的凯里机场。",
    "en-US":
      "Flying from Dublin to Kerry crosses the whole of Ireland from east to west, from the Dublin plain on the east coast, over the central lowlands, to the mountainous terrain of County Kerry in the south-west. Soon after take-off, the broad, flat expanse of Ireland's central lowlands unfolds below — farmland interspersed with dark-brown raised peat bog, of which the Bog of Allen is the most representative example." +
      " The flight continues south-west as the land gradually rises, and the continuous ridge of the Galtee Mountains comes into view below — Ireland's highest inland range, its Old Red Sandstone slopes dotted with several glacial lakes on the north side. Past the Galtees, the flight enters Ireland's highest terrain, MacGillycuddy's Reeks, where sharp glacially carved peaks and deep corrie lakes are clearly visible; Carrauntoohil, the highest point in all of Ireland, stands out below before the flight descends into Kerry Airport just beyond the range's foot.",
    },
    travel: {
    "zh-CN":
      "都柏林到凯里飞约55分钟，同一时区，是爱尔兰目前少数几条定期国内航班之一（目前由瑞安航空运营）。凯里机场离基拉尼市区约15公里，是探索凯里之环与麦吉利卡迪山脉的便捷门户。" +
      "靠窗能看到中部低地的泥炭沼泽景观、加尔提山脉的冰蚀湖，以及降落前麦吉利卡迪山脉的尖峰与基拉尼湖群交相辉映的景色。以凯里为基地可探索凯里之环、丁格尔半岛等西南海岸胜景。" +
      "爱尔兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Dublin to Kerry is about 55 minutes, same time zone, and one of only a small number of scheduled domestic flights in Ireland today (currently operated by Ryanair). Kerry Airport is about 15 km from Killarney and a convenient gateway for exploring the Ring of Kerry and MacGillycuddy's Reeks." +
      " From a window you see the peat-bog landscape of the central lowlands, the glacial lakes of the Galtee Mountains, and, just before landing, the sharp peaks of MacGillycuddy's Reeks set against the Lakes of Killarney. From Kerry you can explore the Ring of Kerry, the Dingle Peninsula and other south-western coastal highlights." +
      " Ireland is in the Schengen area; most foreign visitors follow Schengen rules for short visits.",
    },
  },

  "dub-cfn": {
    study: {
    "zh-CN":
      "都柏林飞多尼戈尔，是一趟连接爱尔兰首都与西北部偏远地区的政府补贴航线，起飞后不久飞机即转向西北，飞越爱尔兰中北部的乡村地带。抵达多尼戈尔郡上空后，脚下出现格伦维谷——一条深切的冰川槽谷，谷中狭长的格伦维湖两岸悬崖陡峭，谷地深处的格伦维城堡与四周荒野地貌形成鲜明对比，是爱尔兰面积最大的国家公园的核心景观。" +
      "飞机随后降落在多尼戈尔湾畔的卡里克芬机场，这条航线是连接爱尔兰西北部与首都的重要生命线，也是俯瞰爱尔兰荒野山地地貌的难得视角。",
    "en-US":
      "Flying from Dublin to Donegal is a government-subsidised route linking Ireland's capital with a remote part of the north-west; soon after take-off the flight turns north-west, crossing the rural countryside of north-central Ireland. Approaching County Donegal, Glenveagh comes into view below — a deeply cut glacial trough valley whose narrow Lough Veagh is flanked by steep cliffs, with Glenveagh Castle set deep in the valley against a backdrop of wilderness, the centrepiece of Ireland's largest national park." +
      " The flight then descends into Carrickfinn Airport on Donegal Bay; this route is an important lifeline connecting north-west Ireland with the capital, and offers a rare aerial view of Ireland's wilderness upland terrain.",
    },
    travel: {
    "zh-CN":
      "都柏林到多尼戈尔飞约50分钟，同一时区，是政府补贴的重要航线，目前由爱尔兰航空支线（爱美拉德航空运营）每日往返两班。卡里克芬机场离多尼戈尔镇约65公里。" +
      "靠窗能看到爱尔兰中北部的乡村景观，以及接近降落前格伦维国家公园的荒野山地与冰蚀湖。以多尼戈尔为基地可探索斯利夫利格悬崖等西北海岸胜景。" +
      "爱尔兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Dublin to Donegal is about 50 minutes, same time zone, and an important government-subsidised route currently operated twice daily each way by Aer Lingus Regional (Emerald Airlines). Carrickfinn Airport is about 65 km from Donegal Town." +
      " From a window you see the countryside of north-central Ireland, and, just before landing, the wilderness uplands and glacial lake of Glenveagh National Park. From Donegal you can explore Slieve League and other north-western coastal highlights." +
      " Ireland is in the Schengen area; most foreign visitors follow Schengen rules for short visits.",
    },
  },

  "cph-aar": {
    study: {
    "zh-CN":
      "哥本哈根飞奥胡斯，是一趟从西兰岛跨海飞向日德兰半岛东部的航线。起飞后不久，脚下是哥本哈根都会区与厄勒海峡，飞机随即跨越卡特加特海峡南部海域，进入日德兰半岛东侧的迪厄斯兰半岛。" +
      "临近奥胡斯前，脚下出现莫尔斯山地——丹麦少有的明显冰碛丘陵地貌，末次冰期终碛垄留下的起伏丘陵间散布着草地与小型湖泊，海岸线曲折延伸入卡特加特海峡，与丹麦其他地区一望无际的平坦地势形成鲜明对比。飞机随后降落在莫尔斯山地西侧不远处的奥胡斯机场。",
    "en-US":
      "Flying from Copenhagen to Aarhus crosses from Zealand over the sea to the eastern side of the Jutland peninsula. Soon after take-off, the Copenhagen metro area and the Øresund lie below, and the flight then crosses the southern Kattegat to reach the Djursland peninsula on Jutland's eastern flank." +
      " Approaching Aarhus, Mols Bjerge comes into view below — one of the few areas of pronounced moraine hill relief in Denmark, its rolling terminal-moraine ridges dotted with grassland and small lakes, its coastline winding out into the Kattegat, standing in sharp contrast to the flat terrain typical elsewhere in the country. The flight then descends into Aarhus Airport, just west of Mols Bjerge.",
    },
    travel: {
    "zh-CN":
      "哥本哈根到奥胡斯飞约40分钟，同一时区，是北欧航空运营的国内航班之一（ATR 72机型），也可选择约3小时的城际火车。奥胡斯机场离市区约35公里。奥胡斯是丹麦第二大城市，是探索莫尔斯山地与锡尔克堡湖区的理想基地。丹麦属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Copenhagen to Aarhus is about 40 minutes, same time zone, operated by SAS (ATR 72) as one of Denmark's domestic routes; an intercity train (about 3 hours) is another option. Aarhus Airport is about 35 km from the centre. Aarhus is Denmark's second city and an ideal base for exploring Mols Bjerge and the Silkeborg Lake District. Denmark is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "cph-aal": {
    study: {
    "zh-CN":
      "哥本哈根飞奥尔堡，是一趟纵贯丹麦全境、从西兰岛飞向日德兰半岛最北端的航线。飞机跨越大贝尔特海峡进入日德兰半岛后持续向北飞行，临近奥尔堡前，脚下出现雷比尔丘陵——一片覆盖石楠荒原的冰碛丘陵，紫色花丛与深绿色的罗尔森林（丹麦面积最大的森林）相映成趣。" +
      "越过雷比尔丘陵后，飞机降落前脚下展开利姆海峡——横贯日德兰半岛北部的狭长水道，将文茨赛尔—提半岛与半岛主体分隔，奥尔堡正坐落在海峡南岸，飞机沿海峡下降进入机场。",
    "en-US":
      "Flying from Copenhagen to Aalborg crosses the length of Denmark, from Zealand to the very northern tip of the Jutland peninsula. After crossing the Great Belt onto Jutland the flight continues north; approaching Aalborg, Rebild Bakker comes into view below — a moraine hill area covered in heather moorland, its purple blooms set off against the dark green of Rold Skov, Denmark's largest forest." +
      " Past Rebild Bakker, the Limfjord unfolds below before landing — the long, narrow waterway crossing northern Jutland that separates the Vendsyssel-Thy peninsula from the mainland; Aalborg sits on its southern bank, and the flight descends along the fjord into the airport.",
    },
    travel: {
    "zh-CN":
      "哥本哈根到奥尔堡飞约45分钟，同一时区，是北欧航空运营的国内航班之一（ATR 72机型），也可选择约4.5小时的城际火车。奥尔堡机场离市区约6公里。奥尔堡是北日德兰大区的核心城市，是探索雷比尔丘陵与斯卡恩岬角的理想门户。丹麦属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Copenhagen to Aalborg is about 45 minutes, same time zone, operated by SAS (ATR 72) as one of Denmark's domestic routes; an intercity train (about 4.5 hours) is another option. Aalborg Airport is about 6 km from the centre. Aalborg is the core city of North Denmark Region and an ideal gateway for exploring Rebild Bakker and Skagen Odde. Denmark is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "cph-bll": {
    study: {
    "zh-CN":
      "哥本哈根飞比隆，是一趟从西兰岛横跨菲英岛、抵达日德兰半岛中南部的航线。飞机离开西兰岛后不久，脚下展开菲英岛缓丘农田——素有“丹麦花园”之称的农业景观，规整的田块与果园覆盖着轻微起伏的年轻冰碛地貌。" +
      "跨越小贝尔特海峡进入日德兰半岛后，飞机临近比隆前，脚下出现日德兰石楠荒原——兰伯尔荒原是丹麦现存面积最大的连片石楠荒原残余，紫红色花丛覆盖着贫瘠的沙质冰水沉积平原，与周边经改造的农田形成鲜明对比，飞机随后降落在紧邻荒原的比隆机场。",
    "en-US":
      "Flying from Copenhagen to Billund crosses Zealand and the island of Funen to reach south-central Jutland. Soon after leaving Zealand, the Funen Rolling Farmland unfolds below — the agricultural landscape long known as the \"Garden of Denmark,\" regular fields and orchards covering gently rolling young moraine terrain." +
      " After crossing the Little Belt onto Jutland, approaching Billund, Jutland Heath comes into view below — Randbøl Hede is the largest surviving continuous remnant of Danish heather moorland, its purple-red bloom covering poor sandy outwash-plain soil, contrasting sharply with the reclaimed farmland around it, before the flight descends into Billund Airport right next to the heath.",
    },
    travel: {
    "zh-CN":
      "哥本哈根到比隆飞约45分钟，同一时区，是北欧航空运营的国内航班之一（ATR 72机型）。比隆机场是丹麦国内航班的重要节点，就在乐高乐园所在的比隆镇边。以比隆为基地可探索兰伯尔荒原等日德兰半岛中部景观。丹麦属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Copenhagen to Billund is about 45 minutes, same time zone, operated by SAS (ATR 72) as one of Denmark's domestic routes. Billund Airport is an important hub for domestic flights within Denmark, right at the edge of the town that is home to Legoland. From Billund you can explore Randbøl Hede and other central-Jutland landscapes. Denmark is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "cph-rnn": {
    study: {
    "zh-CN":
      "哥本哈根飞博恩霍尔姆，是一趟跨越波罗的海、抵达丹麦最东端孤悬海岛的航线。起飞后飞机向东南方向飞越开阔的波罗的海海域，脚下先是西兰岛与丹麦本土渐渐远去的海岸线，随后进入一片看不见陆地的开阔海域，约半小时后抵达博恩霍尔姆岛上空。" +
      "降落前脚下展开阿尔明丁根森林高地——岛屿中部的花岗岩高地，骑士峰海拔162米，是丹麦全境唯一大面积可见花岗岩基岩的地区，前寒武纪花岗岩基岩是波罗的地盾向南延伸出露的一部分，茂密森林与裸露岩体交织，与丹麦本土常见的平坦冰碛地貌截然不同，飞机随后降落在岛屿西岸的龙讷，博恩霍尔姆岛也因阳光充足而被称为“丹麦的阳光岛”。",
    "en-US":
      "Flying from Copenhagen to Bornholm crosses the open Baltic Sea to reach Denmark's easternmost, isolated island. After take-off the flight heads south-east across open Baltic waters, arriving over Bornholm after about half an hour." +
      " Before landing, the Almindingen forest highland comes into view below — a granite highland at the island's centre; its peak, Rytterknægten, reaches 162 m, and the area is one of the only places in Denmark where granite bedrock is exposed over a wide area, dense forest interwoven with bare rock, quite unlike the flat moraine landforms typical of mainland Denmark. The flight then descends into Rønne on the island's western shore.",
    },
    travel: {
    "zh-CN":
      "哥本哈根到博恩霍尔姆飞约35分钟，同一时区，是北欧航空运营的季节性航班之一（空客A320neo机型），也可选择乘渡轮往返。博恩霍尔姆机场离龙讷市区约5公里。博恩霍尔姆岛因阳光充足被称为“丹麦的阳光岛”，是探索花岗岩海岸与历史城堡的理想目的地。丹麦属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Copenhagen to Bornholm is about 35 minutes, same time zone, operated by SAS (Airbus A320neo) as a seasonal domestic route; a ferry is another option. Bornholm Airport is about 5 km from Rønne. Known as \"Denmark's sunshine island\" for its abundant sunshine, Bornholm is an ideal destination for exploring the granite coast and its historic castle. Denmark is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-krn": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞基律纳，是一趟纵贯瑞典全境、从斯韦阿兰飞往北极圈内拉普兰的航线。飞机离开斯德哥尔摩后持续向北飞行，脚下的地貌逐渐从南部的农田与湖泊过渡为诺尔兰广袤的针叶林带，气候也逐渐由温带大陆性转为亚北极气候。" +
      "临近基律纳降落前，飞机西侧远处可以望见凯布讷山——瑞典全境最高峰，北峰海拔固定为2096.8米，南峰覆盖冰川、海拔随年份变化，近年因气候变暖南峰已连续多年低于北峰，是瑞典拉普兰地区最具辨识度的山地地标。",
    "en-US":
      "Flying from Stockholm to Kiruna spans the length of Sweden, from Svealand to Arctic Lapland. After leaving Stockholm the flight continues north, the landscape below gradually shifting from the farmland and lakes of the south to the vast conifer forest of Norrland, the climate transitioning from temperate continental to subarctic." +
      " Approaching Kiruna, Kebnekaise comes into view far to the west — Sweden's highest mountain, its North Peak fixed at 2,096.8 m while the glacier-capped South Peak's elevation varies year to year, having fallen below the North Peak for several years running as the climate warms — the most recognisable mountain landmark in Swedish Lapland.",
    },
    travel: {
    "zh-CN":
      "斯德哥尔摩到基律纳飞约95分钟，同一时区，是北欧航空运营的国内航班之一（空客A320neo机型），也可选择约17小时的夜间火车。基律纳机场离市区约8公里。基律纳是探索凯布讷山、萨雷克国家公园与阿比斯库极光的理想门户。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Kiruna is about 95 minutes, same time zone, operated by SAS (Airbus A320neo) as one of Sweden's domestic routes; an overnight train (about 17 hours) is another option. Kiruna Airport is about 8 km from the centre. Kiruna is an ideal gateway for exploring Kebnekaise, Sarek National Park and the northern lights at Abisko. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-got": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞哥德堡，是一趟横跨瑞典中南部、连接两大城市的航线。起飞后不久，脚下展开瑞典中部典型的森林与湖泊交织地貌，飞机中途掠过蒂韦登——历史上曾长期是瑞典南北两大传统区域之间天然屏障的古老松林地带，地表散布着末次冰期冰川搬运遗留的大量花岗岩巨砾，古老松林与沼泽小湖交织，是研究冰川漂砾地貌的典型野外样本。" +
      "越过蒂韦登后，飞机继续向西南飞行，逐渐进入瑞典西海岸地区，脚下的森林景观渐渐让位于沿海平原与近岸礁岛，最终降落在哥德堡——瑞典第二大城市与重要的港口门户，也是探索布胡斯兰海岸花岗岩礁岛地貌的出发地。",
    "en-US":
      "Flying from Stockholm to Gothenburg crosses south-central Sweden, linking the country's two largest cities. Soon after take-off, the landscape below shows the forest and lake terrain typical of central Sweden, and the flight passes over Tiveden midway — an old pine-forest area that historically served as a natural barrier between Sweden's traditional northern and southern regions, its ground scattered with granite boulders left by last-glacial transport." +
      " Past Tiveden, the flight continues south-west, gradually approaching Sweden's west coast before landing in Gothenburg, the country's second city and an important port gateway.",
    },
    travel: {
    "zh-CN":
      "斯德哥尔摩到哥德堡飞约43分钟，同一时区，是北欧航空运营的国内航班之一（空客A320neo机型），也可选择约3小时的城际火车。哥德堡兰德维特机场离市区约25公里。哥德堡是探索布胡斯兰海岸礁岛地貌的理想门户。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Gothenburg is about 43 minutes, same time zone, operated by SAS (Airbus A320neo) as one of Sweden's domestic routes; an intercity train (about 3 hours) is another option. Göteborg Landvetter Airport is about 25 km from the centre. Gothenburg is an ideal gateway for exploring the skerry landforms of the Bohuslän Coast. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-mmx": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞马尔默，是一趟纵贯瑞典南部、直抵最南端的航线。飞机离开斯德哥尔摩后向南飞行，沿途掠过瑞典中南部典型的森林与农田交织地貌，中途掠过斯托雷莫瑟沼泽——瑞典拉普兰以南面积最大的隆起泥炭沼泽，大片深褐色的湿地与周边森林形成鲜明对比，是瑞典南部重要的候鸟栖息与泥炭湿地保护区。" +
      "临近马尔默前，脚下的森林景观逐渐让位于开阔平坦的斯科讷平原——瑞典最重要的谷物与油菜种植区，规整的农田一望无际，春季油菜花盛开时更呈现出大片金黄色的独特景观，飞机随后降落在瑞典最南端的门户城市马尔默，隔厄勒海峡与丹麦哥本哈根相望。",
    "en-US":
      "Flying from Stockholm to Malmö crosses the length of southern Sweden to reach the country's southern tip. After leaving Stockholm the flight heads south, passing over Store Mosse midway — the largest raised peat bog south of Swedish Lapland, its expanse of dark brown wetland contrasting sharply with the forest around it." +
      " Approaching Malmö, the forested landscape gradually gives way to the open, flat Skåne Plain — Sweden's most important grain- and rapeseed-growing region, its regular farmland stretching to the horizon — before the flight descends into Malmö, the gateway city at Sweden's southern tip, facing Copenhagen, Denmark across the Øresund.",
    },
    travel: {
    "zh-CN":
      "斯德哥尔摩到马尔默飞约55分钟，同一时区，是北欧航空运营的国内航班之一（空客A320neo机型），也可选择约4.5小时的城际火车。马尔默机场离市区约28公里。马尔默是探索斯科讷平原、并经厄勒海峡大桥连接丹麦的便捷门户。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Malmö is about 55 minutes, same time zone, operated by SAS (Airbus A320neo) as one of Sweden's domestic routes; an intercity train (about 4.5 hours) is another option. Malmö Airport is about 28 km from the centre. Malmö is a convenient gateway for exploring the Skåne Plain and for a cross-border trip to Denmark via the Øresund Bridge. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-vby": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞维斯比，是一趟从瑞典本土飞往波罗的海最大岛屿哥得兰岛的短途航线。起飞后不久，脚下即展开斯德哥尔摩群岛开阔的景象——约三万座岛屿、礁石组成的群岛，是世界上岛屿密度最高的群岛之一，群岛基岩为末次冰期冰川刮蚀的花岗岩，经地壳均衡抬升逐渐出露海面，从内群岛到外群岛岛屿逐渐稀疏、面积渐大，呈现出层次分明的地貌梯度。" +
      "越过外群岛后，飞机飞越开阔的波罗的海海域，约半小时后抵达哥得兰岛，降落在维斯比——完整保留中世纪城墙的汉萨同盟古城，也是探索岛上大阿尔瓦荒原与法罗岛海蚀柱群的门户。",
    "en-US":
      "Flying from Stockholm to Visby is a short hop from mainland Sweden to Gotland, the largest island in the Baltic Sea. Soon after take-off, the broad expanse of the Stockholm Archipelago unfolds below — some thirty thousand islands and skerries, one of the densest island clusters in the world, thinning out and growing larger in size from the inner to the outer archipelago." +
      " Past the outer archipelago, the flight crosses open Baltic waters, arriving over Gotland after about half an hour and descending into Visby, the Hanseatic-era walled town whose medieval fortifications survive intact.",
    },
    travel: {
    "zh-CN":
      "斯德哥尔摩到维斯比飞约35分钟，同一时区，是北欧航空运营的国内航班之一（空客A320neo机型），也可选择乘渡轮往返。维斯比机场离市区约4公里。维斯比是探索哥得兰岛中世纪古城与大阿尔瓦荒原的理想起点。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Visby is about 35 minutes, same time zone, operated by SAS (Airbus A320neo) as one of Sweden's domestic routes; a ferry is another option. Visby Airport is about 4 km from the centre. Visby is an ideal starting point for exploring Gotland's medieval old town and Stora Alvaret. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-klr": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞卡尔马，是一趟飞往瑞典东南部、探索厄兰岛的门户航线。飞机离开斯德哥尔摩后向南飞行，沿途掠过瑞典东南部沿海典型的森林与农田交织地貌，逐渐进入小科鲁德省沿海低地。" +
      "临近卡尔马降落前，飞机东侧海峡对岸可以望见厄兰岛大阿尔瓦石灰岩荒原——一片长约40公里的裸露石灰岩台地，占岛屿面积约四分之一，是欧洲现存面积最大的同类石灰岩荒原，2000年因独特的农业景观列入联合国教科文组织世界遗产名录，飞机随后降落在卡尔马——一座跨海大桥连接厄兰岛的历史城堡城市。",
    "en-US":
      "Flying from Stockholm to Kalmar is a gateway route to the island of Öland in south-eastern Sweden. After leaving Stockholm the flight heads south, passing over the forested farmland typical of Sweden's south-eastern coast." +
      " Approaching Kalmar, Stora Alvaret on Öland comes into view across the strait to the east — a roughly 40-km stretch of bare limestone plateau, the largest surviving example of this type of limestone barren in Europe — before the flight descends into Kalmar, the historic castle city linked to Öland by a bridge across the strait.",
    },
    travel: {
    "zh-CN":
      "斯德哥尔摩到卡尔马飞约45分钟，同一时区，是北欧航空运营的国内航班之一（空客A320neo机型），也可选择约4.5小时的城际火车。卡尔马机场离市区约6公里。卡尔马是探索厄兰岛大阿尔瓦石灰岩荒原最便捷的门户。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Kalmar is about 45 minutes, same time zone, operated by SAS (Airbus A320neo) as one of Sweden's domestic routes; an intercity train (about 4.5 hours) is another option. Kalmar Airport is about 6 km from the centre. Kalmar is the most convenient gateway for exploring Öland's Stora Alvaret limestone plateau. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "arn-osd": {
    study: {
    "zh-CN":
      "斯德哥尔摩飞奥勒—厄斯特松德，是一趟飞往瑞典中西部耶姆特兰山地滑雪度假区的航线。飞机离开斯德哥尔摩后向西北飞行，中途掠过希尔扬陨石坑——约3.77亿年前一颗天体撞击形成的环形构造，直径约52公里，是欧洲已知最大的陨石撞击构造，希尔扬湖及周边多座小湖沿环形边缘分布。" +
      "越过希尔扬陨石坑后，飞机继续向西北飞行，地势逐渐抬升进入耶姆特兰山地，最终降落在奥勒—厄斯特松德机场，是北欧最大高山滑雪度假地奥勒的门户机场。",
    "en-US":
      "Flying from Stockholm to Åre Östersund heads to the alpine ski resort region of Jämtland in west-central Sweden. After leaving Stockholm the flight heads north-west, passing over the Siljan Ring midway — a ring structure about 52 km in diameter formed when an asteroid struck around 377 million years ago, the largest known impact structure in Europe, with Lake Siljan and several smaller lakes arranged along its margin." +
      " Past the Siljan Ring, the flight continues north-west as the terrain gradually rises into the mountains of Jämtland, before landing at Åre Östersund Airport, the gateway airport for Åre, Northern Europe's largest alpine ski resort.",
    },
    travel: {
    "zh-CN":
      "斯德哥尔摩到奥勒—厄斯特松德飞约60分钟，同一时区，是北欧航空运营的国内航班之一（空客A320neo机型），也可选择约6.5小时的城际火车。机场离奥勒镇区约65公里。奥勒是北欧规模最大的高山滑雪度假地。瑞典属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Stockholm to Åre Östersund is about 60 minutes, same time zone, operated by SAS (Airbus A320neo) as one of Sweden's domestic routes; an intercity train (about 6.5 hours) is another option. The airport is about 65 km from Åre. Åre is Northern Europe's largest alpine ski resort. Sweden is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-rvn": {
    study: {
    "zh-CN":
      "赫尔辛基飞罗瓦涅米，是一趟纵贯芬兰全境、从南部湖区飞往北极圈拉普兰的航线。起飞后不久，脚下展开派耶内湖狭长笔直的湖面——芬兰第二大湖，也是芬兰水深最深的湖泊之一，最大水深约95米，与南部错综复杂的塞马湖形成鲜明对比。" +
      "飞机继续向北飞行，脚下的湖区逐渐让位于芬兰中北部广袤的针叶林带，临近罗瓦涅米降落前，凯米约基河蜿蜒的河道清晰可辨——芬兰最长的河流，沿岸建有多座水电站，飞机沿河而下，降落在跨越北极圈线的罗瓦涅米。",
    "en-US":
      "Flying from Helsinki to Rovaniemi spans the length of Finland, from the southern lake district to Arctic Lapland. Soon after take-off, the long, straight surface of Lake Päijänne unfolds below — Finland's second-largest lake and one of its deepest, with a maximum depth of about 95 m, a sharp contrast with the intricate, fragmented Saimaa further south." +
      " The flight continues north as the lake district below gradually gives way to the vast conifer forest of north-central Finland; approaching Rovaniemi, the winding channel of the Kemijoki comes into clear view — Finland's longest river, lined with hydroelectric dams — and the flight follows the river down to land at Rovaniemi, straddling the Arctic Circle line.",
    },
    travel: {
    "zh-CN":
      "赫尔辛基到罗瓦涅米飞约85分钟，同一时区，是芬兰航空运营的国内航班之一（空客A321机型），也可选择约12小时的夜间火车。罗瓦涅米机场离市区约10公里。罗瓦涅米是圣诞老人村所在地，也是探索拉普兰荒原的理想门户。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Rovaniemi is about 85 minutes, same time zone, operated by Finnair (Airbus A321) as one of Finland's domestic routes; an overnight train (about 12 hours) is another option. Rovaniemi Airport is about 10 km from the centre. Rovaniemi is home to Santa Claus Village and an ideal gateway for exploring the Lapland wilderness. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-oul": {
    study: {
    "zh-CN":
      "赫尔辛基飞奥卢，是一趟沿波的尼亚湾海岸北上的航线。飞机离开赫尔辛基后向北飞行，沿途掠过芬兰中西部典型的森林与湖泊交织地貌，中途掠过奥斯特罗博特尼亚平原——芬兰西海岸一片因地壳均衡抬升而持续扩大的低平沿海农业区，大片规整的农田覆盖着开阔的地表，沿海地区仍能观测到明显的陆地抬升现象。" +
      "越过平原后，飞机继续沿波的尼亚湾海岸北上，最终降落在奥卢——芬兰重要的科技与大学城市，被称为“北方硅谷”，也是探索北芬兰与拉普兰的门户。",
    "en-US":
      "Flying from Helsinki to Oulu heads north along the Gulf of Bothnia coast. After leaving Helsinki the flight heads north, passing over the Ostrobothnia Plain midway — a low-lying coastal agricultural region on Finland's west coast that continues to expand through isostatic rebound, its broad, open surface covered in regular farmland." +
      " Past the plain, the flight continues north along the Gulf of Bothnia coast before landing in Oulu, an important Finnish technology and university city and a gateway for exploring northern Finland and Lapland.",
    },
    travel: {
    "zh-CN":
      "赫尔辛基到奥卢飞约70分钟，同一时区，是芬兰航空运营的国内航班之一（安波190机型），也可选择约6.5小时的城际火车。奥卢机场离市区约15公里。奥卢是探索波的尼亚湾北岸与拉普兰的便捷门户。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Oulu is about 70 minutes, same time zone, operated by Finnair (Embraer 190) as one of Finland's domestic routes; an intercity train (about 6.5 hours) is another option. Oulu Airport is about 15 km from the centre. Oulu is a convenient gateway for exploring the Bothnian Bay coast and Lapland. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-kao": {
    study: {
    "zh-CN":
      "赫尔辛基飞库萨莫，是一趟飞往芬兰东北部、探索“熊之路”徒步路线的门户航线。飞机离开赫尔辛基后持续向东北飞行，穿越芬兰中部广袤的湖区与针叶林地带，逐渐进入芬兰—俄罗斯边境附近人烟稀少的森林荒野。" +
      "临近库萨莫降落前，脚下出现奥兰卡峡谷——奥兰卡河切穿古老基岩形成的峡谷，两岸松林与局部石灰质地表交替出现，是芬兰著名长距离徒步路线“熊之路”沿线最具代表性的地貌之一，飞机随后降落在库萨莫，紧邻鲁卡滑雪度假区。",
    "en-US":
      "Flying from Helsinki to Kuusamo is a gateway route to north-eastern Finland, home to the Karhunkierros hiking trail. After leaving Helsinki the flight continues north-east, crossing the vast lake district and conifer forest of central Finland." +
      " Approaching Kuusamo, the Oulanka Canyon comes into view below — a canyon cut by the Oulanka River through ancient bedrock, pine forest and patches of lime-rich ground alternating along its banks, one of the most representative landforms along Finland's famous Karhunkierros long-distance trail — before the flight lands in Kuusamo, right next to the Ruka ski resort.",
    },
    travel: {
    "zh-CN":
      "赫尔辛基到库萨莫飞约75分钟，同一时区，是芬兰航空运营的国内航班之一（ATR 72-500机型）。库萨莫机场离市区约5公里。库萨莫是探索奥兰卡国家公园与鲁卡滑雪度假区的理想门户。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Kuusamo is about 75 minutes, same time zone, operated by Finnair (ATR 72-500) as one of Finland's domestic routes. Kuusamo Airport is about 5 km from the centre. Kuusamo is an ideal gateway for exploring Oulanka National Park and the Ruka ski resort. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-ivl": {
    study: {
    "zh-CN":
      "赫尔辛基飞伊瓦洛，是一趟纵贯芬兰全境、抵达北极圈深处拉普兰腹地的航线，全程距离接近1000公里，是芬兰国内最长的定期航班之一。飞机离开赫尔辛基后持续向北飞行，脚下的地貌依次经过南部湖区、中部针叶林带，逐渐过渡为北部图恩图里荒原，气候也由温带大陆性转为亚北极气候。" +
      "临近伊瓦洛降落前，脚下展开伊纳里湖开阔的水面——芬兰第三大湖，也是北极圈内芬兰面积最大的湖泊，湖中散布约3300座岛屿，是萨米人传统聚居区伊纳里地区的地理核心，飞机随后降落在伊瓦洛，是探索伊纳里地区萨米文化的门户机场。",
    "en-US":
      "Flying from Helsinki to Ivalo spans the length of Finland to reach deep into Arctic Lapland. After leaving Helsinki the flight continues north, the landscape below passing in turn through the southern lake district, the conifer forest of central Finland, and finally the tunturi wilderness of the north." +
      " Approaching Ivalo, the broad waters of Lake Inari come into view below — Finland's third-largest lake and the largest lake within the Finnish Arctic Circle, dotted with about 3,300 islands, the geographic core of the traditional Sámi Inari region — before the flight lands at Ivalo, the gateway airport for exploring Sámi culture in the Inari region.",
    },
    travel: {
    "zh-CN":
      "赫尔辛基到伊瓦洛飞约100分钟，同一时区，是芬兰航空运营的国内航班之一（空客A320机型）。伊瓦洛机场离伊纳里村约40公里。伊瓦洛是探索伊纳里湖与萨米文化的门户机场，也是观测极光条件最佳的地区之一。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Ivalo is about 100 minutes, same time zone, operated by Finnair (Airbus A320) as one of Finland's domestic routes. Ivalo Airport is about 40 km from the village of Inari. Ivalo is the gateway airport for exploring Lake Inari and Sámi culture, and one of the best regions in Finland for viewing the northern lights. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-kuo": {
    study: {
    "zh-CN":
      "赫尔辛基飞库奥皮奥，是一趟飞往芬兰中东部湖区核心城市的航线。飞机离开赫尔辛基后向北飞行，穿越芬兰中部典型的森林与湖泊交织地貌，沿途湖泊星罗棋布，是芬兰“千湖之国”景观最集中的区域之一。" +
      "临近库奥皮奥降落前，脚下展开卡拉韦西湖开阔的水面，湖畔的普宜奥山海拔306米，是芬兰湖区少有的地势制高点，山体基岩长期风化侵蚀后在平缓的湖区地貌中格外突出，山顶观景塔可俯瞰整片湖区群岛景观，飞机随后降落在库奥皮奥，坐落于湖畔的芬兰中东部湖区核心城市。",
    "en-US":
      "Flying from Helsinki to Kuopio heads to the core city of Finland's central-eastern lake district. After leaving Helsinki the flight heads north, crossing the forest and lake terrain typical of central Finland." +
      " Approaching Kuopio, the open waters of Lake Kallavesi come into view below; lakeside Puijo hill, at 306 m, is one of the few high points of relief in the Finnish lake district, its summit viewing tower overlooking the entire lake and archipelago landscape, before the flight lands in Kuopio, the core city of Finland's central-eastern lake district, built on the lake's shore.",
    },
    travel: {
    "zh-CN":
      "赫尔辛基到库奥皮奥飞约55分钟，同一时区，是芬兰航空运营的国内航班之一（ATR 72-500机型），也可选择约4.5小时的城际火车。库奥皮奥机场离市区约15公里。库奥皮奥是俯瞰芬兰湖区地貌的理想目的地。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Kuopio is about 55 minutes, same time zone, operated by Finnair (ATR 72-500) as one of Finland's domestic routes; an intercity train (about 4.5 hours) is another option. Kuopio Airport is about 15 km from the centre. Kuopio is an ideal destination for overlooking Finland's lake-district landforms. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "hel-mhq": {
    study: {
    "zh-CN":
      "赫尔辛基飞玛丽港，是一趟从芬兰本土飞往波罗的海入口处奥兰群岛的短途航线。起飞后不久，脚下即展开群岛海开阔的景象——芬兰西南沿海由约四万座岛屿与礁石组成的水域，是世界上按岛屿数量计最密集的群岛之一，末次冰期冰川刮蚀的花岗岩基岩经地壳均衡抬升逐渐出露海面而成。" +
      "越过群岛海后，飞机继续向西飞行，最终降落在玛丽港——奥兰群岛的首府，芬兰唯一的瑞典语单一官方语言自治区的行政与文化中心，1921年国际联盟裁决确立其在芬兰主权下享有高度自治与非军事化地位，这一安排延续至今。",
    "en-US":
      "Flying from Helsinki to Mariehamn is a short hop from mainland Finland to the Åland Islands at the entrance to the Baltic Sea. Soon after take-off, the broad expanse of the Archipelago Sea unfolds below — a body of water off south-western Finland made up of about forty thousand islands and skerries, one of the densest island clusters anywhere in the world by count." +
      " Past the Archipelago Sea, the flight continues west before landing in Mariehamn, the capital of the Åland Islands and the administrative and cultural centre of Finland's only autonomous region with Swedish as its sole official language.",
    },
    travel: {
    "zh-CN":
      "赫尔辛基到玛丽港飞约55分钟，同一时区，是芬兰航空运营的国内航班之一（ATR 72-500机型），也可选择乘渡轮往返。玛丽港机场离市区约3公里。玛丽港是探索奥兰群岛的理想起点。芬兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Helsinki to Mariehamn is about 55 minutes, same time zone, operated by Finnair (ATR 72-500) as one of Finland's domestic routes; a ferry is another option. Mariehamn Airport is about 3 km from the centre. Mariehamn is an ideal starting point for exploring the Åland Islands. Finland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "bkk-cnx": {
    study: {
    "zh-CN":
      "曼谷飞清迈，是泰国国内客流量最大的航线之一，连接首都与北部文化古都。飞机离开曼谷后向北飞行，逐渐掠过泰国中北部彭世洛府与碧差汶府交界处的通萨兰銮草原——一片海拔300至1028米的高原草甸，被称为“泰国的稀树草原”，开阔的金黄色草地与稀疏松林交错分布，是泰国境内少见的非森林高地地貌。" +
      "越过草原后，飞机继续向西北飞行，逐渐接近清迈盆地，临近降落前脚下展开素贴山——清迈城西侧一座海拔1676米的山峰，山腰始建于14世纪的素贴寺是泰国北部最重要的佛教朝圣地之一，飞机最终降落在清迈——泰国北部最大城市与兰纳王国古都。",
    "en-US":
      "Flying from Bangkok to Chiang Mai is one of Thailand's busiest domestic routes, linking the capital with the ancient cultural capital of the north. After leaving Bangkok the flight heads north, passing over Thung Salaeng Luang midway — a highland meadow at 300–1,028 m elevation on the border of Phitsanulok and Phetchabun provinces, known as \"Thailand's savanna,\" its open golden grassland interspersed with sparse pine forest, a rare non-forested highland landform in Thailand." +
      " Past the grassland, the flight continues north-west, gradually approaching the Chiang Mai basin; just before landing, Doi Suthep unfolds below — a 1,676 m peak west of Chiang Mai, where Wat Phra That Doi Suthep, founded on its slope in the 14th century, is one of northern Thailand's most important Buddhist pilgrimage sites — before the flight lands in Chiang Mai, the largest city in northern Thailand and the ancient capital of the Lanna kingdom.",
    },
    travel: {
    "zh-CN":
      "曼谷到清迈飞约80分钟，同一时区，是泰国国际航空运营的国内航班之一（空客A320机型），也可选择长途大巴或火车。曼谷素万那普机场距市区约30公里；清迈国际机场距市区约3公里。清迈是探索泰国北部山地与手工艺文化的理想门户。",
    "en-US":
      "Bangkok to Chiang Mai takes about 80 minutes, same time zone, operated by Thai Airways (Airbus A320) as one of Thailand's domestic routes; buses and trains are other options. Suvarnabhumi Airport is about 30 km from central Bangkok; Chiang Mai International Airport is about 3 km from the city centre. Chiang Mai is an ideal gateway for exploring northern Thailand's mountains and craft culture.",
    },
  },

  "bkk-usm": {
    study: {
    "zh-CN":
      "曼谷飞苏梅岛，是连接首都与泰国湾度假海岛的热门航线。飞机离开曼谷后向东南飞行，脚下展开湄南河三角洲——湄南河入海口处发育的冲积三角洲低地，泰国首都曼谷即建于三角洲之上，部分区域海拔不足2米，长期面临地面沉降与海平面上升的双重压力，运河网络至今仍是三角洲城区部分区域重要的交通方式。" +
      "越过三角洲后，飞机继续向东南飞越泰国湾开阔海面，苏梅岛逐渐出现在视野中，飞机最终降落在苏梅岛——泰国湾第二大岛屿，以查汶、拉迈两大海滩度假区与椰子种植传统闻名，岛屿内陆至今仍保留大片传统椰林。",
    "en-US":
      "Flying from Bangkok to Koh Samui links the capital with a popular resort island in the Gulf of Thailand. After leaving Bangkok the flight heads south-east, the Chao Phraya Delta unfolding below — the low-lying alluvial delta at the Chao Phraya's mouth, on which Bangkok itself is built, with parts of the city under 2 m in elevation and facing the combined pressures of land subsidence and sea-level rise." +
      " Past the delta, the flight continues south-east across the open waters of the Gulf of Thailand; Koh Samui gradually comes into view, before the flight lands on Koh Samui, the second-largest island in the Gulf of Thailand, known for the Chaweng and Lamai beach resort areas and its traditional coconut-growing heritage.",
    },
    travel: {
    "zh-CN":
      "曼谷到苏梅岛飞约95分钟，同一时区，是曼谷航空运营的国内航班之一（ATR72-600机型），苏梅机场由曼谷航空私有运营。曼谷素万那普机场距市区约30公里；苏梅机场就在岛屿东北角。苏梅岛是探索安通国家海洋公园跳岛游的理想门户。",
    "en-US":
      "Bangkok to Koh Samui takes about 95 minutes, same time zone, operated by Bangkok Airways (ATR 72-600) as one of Thailand's domestic routes; Samui Airport is privately operated by Bangkok Airways. Suvarnabhumi Airport is about 30 km from central Bangkok; Samui Airport sits at the island's north-eastern tip. Koh Samui is an ideal gateway for island-hopping in Ang Thong National Marine Park.",
    },
  },

  "dmk-uth": {
    study: {
    "zh-CN":
      "曼谷廊曼飞乌隆他尼，是连接首都与东北部依善地区的航线。飞机离开廊曼后向北偏东飞行，逐渐掠过呵叻高原——泰国东北部一片广袤的砂岩台地，面积约占泰国国土三分之一，是泰国传统“依善”地区的地理主体，高原地势开阔平坦，大片旱作农田与稀疏林地交错分布，与泰国中部平原的水田景观形成鲜明对比，高原边缘的碧差汶山脉与佩差邦山脉将其与中部平原分隔。" +
      "飞机继续向东北飞行，最终降落在乌隆他尼——依善地区重要城市，也是探索班清史前遗址的门户城市，府境内的班清遗址出土了公元前2000年左右的彩陶与青铜器。",
    "en-US":
      "Flying from Bangkok Don Mueang to Udon Thani links the capital with Thailand's north-eastern Isan region. After leaving Don Mueang the flight heads north-north-east, passing over the Khorat Plateau midway — a vast sandstone tableland covering roughly a third of Thailand's land area, the geographic core of the traditional Isan region, its broad, flat surface interspersed with extensive rain-fed farmland and sparse woodland, a sharp contrast to the paddy-field landscape of central Thailand's plain." +
      " The flight continues north-east, before landing in Udon Thani, an important city in the Isan region and the gateway to the Ban Chiang prehistoric site.",
    },
    travel: {
    "zh-CN":
      "曼谷廊曼到乌隆他尼飞约65分钟，同一时区，是泰国亚洲航空运营的国内航班之一（空客A320机型），也可选择乘火车经廊开线前往。廊曼机场距曼谷市区约25公里；乌隆他尼国际机场距市区约5公里。乌隆他尼是探索班清世界遗产考古遗址的理想门户。",
    "en-US":
      "Bangkok Don Mueang to Udon Thani takes about 65 minutes, same time zone, operated by Thai AirAsia (Airbus A320) as one of Thailand's domestic routes; a train via the Nong Khai line is another option. Don Mueang Airport is about 25 km from central Bangkok; Udon Thani International Airport is about 5 km from the city centre. Udon Thani is an ideal gateway for exploring the Ban Chiang World Heritage archaeological site.",
    },
  },

  "dmk-cei": {
    study: {
    "zh-CN":
      "曼谷廊曼飞清莱，是连接首都与泰国最北端府份的航线。飞机离开廊曼后向北飞行，中途掠过通萨兰銮草原——泰国中北部一片海拔300至1028米的高原草甸，被称为“泰国的稀树草原”，开阔草地与稀疏松林交错分布。" +
      "越过草原后，飞机继续向北飞行，逐渐接近清道山——泰国第三高峰，海拔2138米，山体为石灰岩喀斯特地貌，发育有泰国境内规模最大的溶洞系统之一，飞机最终降落在清莱——紧邻缅甸与老挝边境“金三角”地区的府份首府，以白庙、蓝庙等当代宗教艺术建筑闻名。",
    "en-US":
      "Flying from Bangkok Don Mueang to Chiang Rai links the capital with Thailand's northernmost province. After leaving Don Mueang the flight heads north, passing over Thung Salaeng Luang midway — a highland meadow at 300–1,028 m elevation in north-central Thailand known as \"Thailand's savanna,\" its open grassland interspersed with sparse pine forest." +
      " Past the grassland, the flight continues north, gradually approaching Doi Luang Chiang Dao — Thailand's third-highest peak at 2,138 m, a limestone karst massif riddled with one of the country's largest cave systems — before the flight lands in Chiang Rai, the capital of Thailand's northernmost province near the \"Golden Triangle\" area bordering Myanmar and Laos, known for contemporary religious-art buildings such as the White Temple and Blue Temple.",
    },
    travel: {
    "zh-CN":
      "曼谷廊曼到清莱飞约80分钟，同一时区，是皇雀航空运营的国内航班之一（波音737-800机型）。廊曼机场距曼谷市区约25公里；清莱国际机场距市区约8公里。清莱是探索金三角景观区与白庙等当代宗教艺术建筑的理想门户。",
    "en-US":
      "Bangkok Don Mueang to Chiang Rai takes about 80 minutes, same time zone, operated by Nok Air (Boeing 737-800) as one of Thailand's domestic routes. Don Mueang Airport is about 25 km from central Bangkok; Chiang Rai International Airport is about 8 km from the city centre. Chiang Rai is an ideal gateway for the Golden Triangle viewpoint and contemporary religious-art buildings such as the White Temple.",
    },
  },

  "dmk-hkt": {
    study: {
    "zh-CN":
      "曼谷廊曼飞普吉岛，是连接首都与泰国最负盛名海岛度假地的热门航线。飞机离开廊曼后向南飞行，脚下持续展开泰国湾沿岸的地貌，逐渐掠过三百峰山——泰国湾沿岸一列由约300座石灰岩山峰组成的山地，“三百峰”由此得名，最高峰海拔605米，山地西北角的通三百峰淡水沼泽是泰国境内面积最大的湿地之一，1966年设为泰国首座海洋型国家公园。" +
      "越过三百峰山后，飞机继续向南飞越泰国南部半岛，最终降落在普吉岛——泰国最大的岛屿，坐落于安达曼海，是泰国最负盛名的海岛度假目的地，西海岸分布着巴东、卡伦、卡塔等主要海滩度假区。",
    "en-US":
      "Flying from Bangkok Don Mueang to Phuket links the capital with Thailand's most famous island resort destination. After leaving Don Mueang the flight heads south, the landform along the Gulf of Thailand coast continuing below, passing over Khao Sam Roi Yot midway — a range of some 300 limestone peaks along the Gulf of Thailand coast, the source of its name (\"the mountain with three hundred peaks\"), with the freshwater marsh of Thung Sam Roi Yot at its north-western corner among the largest wetlands in Thailand." +
      " Past Khao Sam Roi Yot, the flight continues south over the southern Thai peninsula, before landing on Phuket, Thailand's largest island in the Andaman Sea and the country's most famous island resort destination.",
    },
    travel: {
    "zh-CN":
      "曼谷廊曼到普吉岛飞约85分钟，同一时区，是泰国亚洲航空运营的国内航班之一（空客A320机型）。廊曼机场距曼谷市区约25公里；普吉国际机场距普吉镇约32公里。普吉岛是探索攀牙湾喀斯特岛群的理想门户。",
    "en-US":
      "Bangkok Don Mueang to Phuket takes about 85 minutes, same time zone, operated by Thai AirAsia (Airbus A320) as one of Thailand's domestic routes. Don Mueang Airport is about 25 km from central Bangkok; Phuket International Airport is about 32 km from Phuket Town. Phuket is an ideal gateway for exploring the karst islands of Ao Phang Nga.",
    },
  },

  "dmk-kbv": {
    study: {
    "zh-CN":
      "曼谷廊曼飞甲米，是连接首都与安达曼海喀斯特海岸的航线。飞机离开廊曼后向南飞行，逐渐飞越泰国南部半岛，临近降落前脚下展开攀牙湾——泰国南部安达曼海一处约400平方公里的淹没型喀斯特海湾，二叠纪拉查布里石灰岩地层在末次冰期后海平面上升过程中被淹没，露出海面的部分形成陡峭孤立的塔状岩岛，宾坎岩（“007岛”）是湾内最具代表性的地标之一。" +
      "飞机最终降落在甲米——泰国南部安达曼海沿岸的府份，以陡峭的石灰岩喀斯特海岸与莱利岬角攀岩胜地闻名。",
    "en-US":
      "Flying from Bangkok Don Mueang to Krabi links the capital with the karst coastline of the Andaman Sea. After leaving Don Mueang the flight heads south, gradually crossing the southern Thai peninsula; just before landing, Ao Phang Nga unfolds below — a roughly 400 km² drowned karst bay in the Andaman Sea, where Permian Ratburi limestone was drowned as sea level rose after the last glacial period, leaving its emergent tops as today's steep, isolated rock islands, with Khao Phing Kan (\"James Bond Island\") among the bay's most iconic landmarks" +
      " — before the flight lands in Krabi, a province on Thailand's southern Andaman coast known for its steep limestone karst coastline and the rock-climbing destination of Railay Peninsula.",
    },
    travel: {
    "zh-CN":
      "曼谷廊曼到甲米飞约85分钟，同一时区，是泰国狮航运营的国内航班之一（波音737-900机型）。廊曼机场距曼谷市区约25公里；甲米国际机场距甲米镇约18公里。甲米是探索莱利岬角攀岩与皮皮群岛跳岛游的理想门户。",
    "en-US":
      "Bangkok Don Mueang to Krabi takes about 85 minutes, same time zone, operated by Thai Lion Air (Boeing 737-900) as one of Thailand's domestic routes. Don Mueang Airport is about 25 km from central Bangkok; Krabi International Airport is about 18 km from Krabi Town. Krabi is an ideal gateway for rock climbing at Railay Peninsula and island-hopping to the Phi Phi Islands.",
    },
  },

  "gmp-cju": {
    study: {
    "zh-CN":
      "首尔金浦飞济州，是全球客流量最大的国内航线之一，每日往返多达70余班，多家航空公司共同运营。飞机离开金浦后向南飞行，逐渐掠过湖南平原——朝鲜半岛面积最大的平原，面积约3500平方公里，古代碧骨堤水利工程记录了这一区域悠久的稻作传统。" +
      "越过陆地后，飞机继续向南飞越朝鲜海峡的开阔海面，济州岛逐渐出现在视野中，岛屿中心汉拿山盾状火山轮廓清晰可辨，山麓散布着数百座俗称“오름”的寄生火山锥，飞机最终降落在济州——韩国最大的岛屿与最高峰所在地。",
    "en-US":
      "Flying from Seoul Gimpo to Jeju is one of the busiest domestic routes in the world, with more than 70 round trips daily. After leaving Gimpo the flight heads south, passing over the Honam Plain — the largest plain on the Korean Peninsula, where the ancient Byeokgolje irrigation works record this region's long rice-farming tradition." +
      " Past the mainland, the flight continues south across the open waters of the Korea Strait; Jeju Island gradually comes into view, with the shield-volcano profile of Hallasan clearly visible at its centre, before the flight lands in Jeju, South Korea's largest island and home to its highest peak.",
    },
    travel: {
    "zh-CN":
      "首尔金浦到济州飞约75分钟，同一时区，是大韩航空运营的国内航班之一（空客A220-300机型），这条航线因客流密集常被称为全球最繁忙的国内航线。金浦机场位于首尔市区西部；济州国际机场就在济州市区西侧。韩国境内多国公民短期旅游的电子旅行许可豁免安排以官方最新公布为准。",
    "en-US":
      "Seoul Gimpo to Jeju takes about 75 minutes, same time zone, operated by Korean Air (Airbus A220-300) as one of Korea's domestic routes; this route is often cited as the busiest domestic air route in the world by passenger volume. Gimpo Airport sits on the western side of Seoul; Jeju International Airport is right on the west side of Jeju City. South Korea's electronic travel-authorisation exemption arrangements for short-term visitors follow the latest official announcements.",
    },
  },

  "gmp-pus": {
    study: {
    "zh-CN":
      "首尔金浦飞釜山，是连接韩国两大城市的传统航线，也是首尔通往东南沿海最便捷的空中通道。飞机离开金浦后向东南飞行，中途掠过俗离山——韩国中部一座相对孤立的花岗岩与片麻岩山体，1970年设为韩国第六座国家公园，山麓法住寺记录了这一区域悠久的佛教文化传统。" +
      "越过俗离山后，飞机继续向东南飞行，临近降落前脚下展开洛东江河口三角洲——洛东江注入沿海处发育的辫状三角洲，乙淑岛沙洲是候鸟迁徙的重要中途停歇地，飞机随后降落在釜山——韩国第二大城市与最大港口，也是釜山国际电影节每年秋季的举办地。",
    "en-US":
      "Flying from Seoul Gimpo to Busan links Korea's two largest cities. After leaving Gimpo the flight heads south-east, passing over Songnisan midway — a relatively isolated granite-and-gneiss massif in central Korea, its Beopjusa Temple recording this area's long Buddhist tradition." +
      " Past Songnisan, the flight continues south-east, and just before landing the Nakdong River Estuary unfolds below — a braided delta formed where the Nakdong River meets the coast, with the Eulsukdo sandbar an important stopover for migratory birds — before the flight lands in Busan, South Korea's second-largest city and largest port.",
    },
    travel: {
    "zh-CN":
      "首尔金浦到釜山飞约55分钟，同一时区，是大韩航空运营的国内航班之一（空客A220-300机型），也可选择约2.5小时的KTX高铁。金浦机场位于首尔市区西部；金海国际机场距釜山市区约20公里。釜山是探索海云台与甘川文化村的理想门户。",
    "en-US":
      "Seoul Gimpo to Busan takes about 55 minutes, same time zone, operated by Korean Air (Airbus A220-300) as one of Korea's domestic routes; the KTX high-speed rail (about 2.5 hours) is another option. Gimpo Airport sits on the western side of Seoul; Gimhae International Airport is about 20 km from central Busan. Busan is an ideal gateway for Haeundae Beach and Gamcheon Culture Village.",
    },
  },

  "gmp-usn": {
    study: {
    "zh-CN":
      "首尔金浦飞蔚山，是连接首都与东南部重工业城市的航线。飞机离开金浦后向东南飞行，中途掠过俗离山——韩国中部一座相对孤立的花岗岩与片麻岩山体，1970年设为韩国第六座国家公园，山麓法住寺始建于新罗时期。" +
      "越过俗离山后，飞机继续向东南飞行，逐渐接近朝鲜半岛东南沿海，飞机最终降落在蔚山——韩国重要的造船、汽车与石化工业城市，太和江十里竹林是市区内难得的开阔自然空间，蔚山近海也是韩国鲸鱼观测活动的举办地之一。",
    "en-US":
      "Flying from Seoul Gimpo to Ulsan links the capital with a major heavy-industry city in the south-east. After leaving Gimpo the flight heads south-east, passing over Songnisan midway — a relatively isolated granite-and-gneiss massif in central Korea, designated Korea's sixth national park in 1970." +
      " Past Songnisan, the flight continues south-east, gradually approaching Korea's south-eastern coast, before landing in Ulsan — a major centre for shipbuilding, automobiles, and petrochemicals, home to the rare open green space of the Taehwa River's bamboo grove.",
    },
    travel: {
    "zh-CN":
      "首尔金浦到蔚山飞约60分钟，同一时区，是大韩航空运营的国内航班之一，每日往返约2班，也可选择约2小时的KTX高铁。金浦机场位于首尔市区西部；蔚山机场距市区约15公里。蔚山是探索岭南阿尔卑斯山地与长生浦鲸鱼文化村的门户。",
    "en-US":
      "Seoul Gimpo to Ulsan takes about 60 minutes, same time zone, operated by Korean Air as one of Korea's domestic routes, with roughly two round trips daily; the KTX (about 2 hours) is another option. Gimpo Airport sits on the western side of Seoul; Ulsan Airport is about 15 km from the city centre. Ulsan is a gateway to the Yeongnam Alps and Jangsaengpo Whale Culture Village.",
    },
  },

  "gmp-rsu": {
    study: {
    "zh-CN":
      "首尔金浦飞丽水，是连接首都与南部沿海港口城市的航线。飞机离开金浦后向南飞行，脚下持续展开湖南平原开阔平坦的地貌——朝鲜半岛面积最大的平原，面积约3500平方公里，纵横的灌溉水渠将平原分割成棋盘状的地块，是韩国最重要的稻米产区。" +
      "飞机继续向南飞行，逐渐接近朝鲜半岛南部沿海，飞机最终降落在丽水——2012年世界博览会举办地，以跨海缆车夜景与音乐喷泉闻名的港口城市，突山岛与丽水本岛由大桥相连，梧桐岛海岸步道是市区内探索海岸地貌的经典去处。",
    "en-US":
      "Flying from Seoul Gimpo to Yeosu links the capital with a southern coastal port city. After leaving Gimpo the flight heads south, the open, flat landform of the Honam Plain continuing below — the largest plain on the Korean Peninsula, its irrigation channels dividing the land into a checkerboard of fields." +
      " The flight continues south, gradually approaching Korea's southern coast, before landing in Yeosu — host of the 2012 World Expo and a port city known for its cross-sea cable car night views.",
    },
    travel: {
    "zh-CN":
      "首尔金浦到丽水飞约60分钟，同一时区，是真航空运营的国内航班之一（波音737-800机型），也可选择约3小时的KTX高铁。金浦机场位于首尔市区西部；丽水机场距市区约20公里。丽水是探索梧桐岛与突山大桥的理想门户。",
    "en-US":
      "Seoul Gimpo to Yeosu takes about 60 minutes, same time zone, operated by Jin Air (Boeing 737-800) as one of Korea's domestic routes; the KTX (about 3 hours) is another option. Gimpo Airport sits on the western side of Seoul; Yeosu Airport is about 20 km from the city centre. Yeosu is an ideal gateway for Odongdo Island and Dolsan Bridge.",
    },
  },

  "gmp-kpo": {
    study: {
    "zh-CN":
      "首尔金浦飞浦项庆州，是连接首都与东南沿海钢铁工业城市及新罗古都的航线。飞机离开金浦后向东南飞行，中途掠过洛东江——韩国境内最长的河流，全长约510公里，安东一带河流下切花岗岩基岩形成的河回村曲流是沿线最具代表性的河流地貌。" +
      "越过洛东江后，飞机继续向东南飞行，逐渐接近朝鲜半岛东南沿海，飞机最终降落在浦项庆州机场——韩国钢铁工业城市浦项与新罗古都庆州共用的机场，浦项因浦项制铁的建立而在20世纪后期迅速发展为工业城市。",
    "en-US":
      "Flying from Seoul Gimpo to Pohang Gyeongju links the capital with a south-eastern coastal steel city and the ancient Silla capital nearby. After leaving Gimpo the flight heads south-east, passing over the Nakdong River midway — the longest river in South Korea, with the Hahoe meander near Andong, cut by the river into granite bedrock, the most distinctive stretch along its course." +
      " Past the Nakdong River, the flight continues south-east, gradually approaching Korea's south-eastern coast, before landing at Pohang Gyeongju Airport, shared by the steel city of Pohang and the ancient Silla capital of Gyeongju.",
    },
    travel: {
    "zh-CN":
      "首尔金浦到浦项庆州飞约55分钟，同一时区，是真航空运营的国内航班之一（波音737-800机型），也可选择约2小时的KTX高铁。金浦机场位于首尔市区西部；浦项庆州机场距浦项市区约10公里、距庆州市区约35公里。这座机场是探索新罗古都庆州历史遗址群的理想门户。",
    "en-US":
      "Seoul Gimpo to Pohang Gyeongju takes about 55 minutes, same time zone, operated by Jin Air (Boeing 737-800) as one of Korea's domestic routes; the KTX (about 2 hours) is another option. Gimpo Airport sits on the western side of Seoul; Pohang Gyeongju Airport is about 10 km from central Pohang and about 35 km from central Gyeongju. This airport is an ideal gateway for exploring the Silla-era heritage sites of Gyeongju.",
    },
  },

  "pus-cju": {
    study: {
    "zh-CN":
      "釜山飞济州，是连接韩国东南部港口城市与南部岛屿的航线，也是济州航空与大韩航空共同运营的热门航段。飞机离开釜山后向西南飞行，脚下展开闲丽海上国立公园的多岛海——韩国南部沿海一片散布数百座岛屿的海域，是末次冰期后海平面上升淹没沿海山地丘陵形成的典型溺谷型多岛海地貌，1968年设为韩国首座海上国家公园。" +
      "越过多岛海后，飞机继续向西南飞行穿越开阔海面，济州岛逐渐出现在视野中，岛屿中心汉拿山轮廓清晰可辨，飞机最终降落在济州——韩国最大的岛屿。",
    "en-US":
      "Flying from Busan to Jeju links a south-eastern port city with Korea's southern island. After leaving Busan the flight heads south-west, the archipelago of Hallyeohaesang Marine National Park unfolding below — a stretch of Korea's southern coastal waters scattered with hundreds of islands, a classic ria-type archipelago formed as sea level rose after the last glacial period and drowned the coastal hills, designated Korea's first marine national park in 1968." +
      " Past the archipelago, the flight continues south-west across open water; Jeju Island gradually comes into view, before the flight lands in Jeju, South Korea's largest island.",
    },
    travel: {
    "zh-CN":
      "釜山到济州飞约60分钟，同一时区，是济州航空运营的国内航班之一（波音737-800机型），大韩航空也运营同一航线。金海国际机场距釜山市区约20公里；济州国际机场就在济州市区西侧。",
    "en-US":
      "Busan to Jeju takes about 60 minutes, same time zone, operated by Jeju Air (Boeing 737-800) as one of Korea's domestic routes, with Korean Air also operating the same sector. Gimhae International Airport is about 20 km from central Busan; Jeju International Airport is right on the west side of Jeju City.",
    },
  },

  "waw-krk": {
    study: {
    "zh-CN":
      "华沙飞克拉科夫，是波兰国内客流量最大的航线，每日往返多达6班，连接首都与历史古都。飞机离开华沙后向南飞行，中途掠过圣十字山——波兰境内地质年代最古老的山脉之一，基岩可追溯至约5亿年前的古生代，历经数亿年反复的构造运动与风化夷平已成为低矮浑圆的丘状山地，山坡上散布着侵蚀残留的石英岩碎块堆（当地称“戈乌博尔基”），与波兰其他年轻山脉的陡峭轮廓形成鲜明对比。" +
      "越过圣十字山后，飞机继续向南飞行，逐渐进入小波兰地区、地势开始向喀尔巴阡山脉过渡，最终降落在克拉科夫——1038至1596年间波兰王国的首都，也是瓦维尔城堡所在地，1978年老城与城堡列入首批联合国教科文组织世界遗产名录。",
    "en-US":
      "Flying from Warsaw to Kraków is Poland's busiest domestic route, linking the capital with the historic former capital. After leaving Warsaw the flight heads south, passing over the Świętokrzyskie Mountains midway — one of the geologically oldest ranges in Poland, its bedrock dating to the Palaeozoic around 500 million years ago, worn by hundreds of millions of years of weathering into today's low, rounded hill form, its slopes scattered with eroded quartzite debris." +
      " Past the Świętokrzyskie range, the flight continues south into Lesser Poland, landing in Kraków, the historic former capital and home to Wawel Castle.",
    },
    travel: {
    "zh-CN":
      "华沙到克拉科夫飞约55分钟，同一时区，是波兰航空运营的国内航班之一（安波190机型，每日6班往返），也可选择约2.5小时的城际火车。克拉科夫机场离市区约11公里。克拉科夫是探索小波兰地区（扎科帕内、维利奇卡盐矿）的理想门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Kraków is about 55 minutes, same time zone, operated by LOT Polish Airlines (Embraer 190, six round trips daily) as one of Poland's domestic routes; an intercity train (about 2.5 hours) is another option. Kraków Airport is about 11 km from the centre. Kraków is an ideal gateway for exploring Lesser Poland (Zakopane, the Wieliczka Salt Mine). Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "waw-gdn": {
    study: {
    "zh-CN":
      "华沙飞格但斯克，是一趟连接波兰首都与波罗的海沿岸港口城市的航线。飞机离开华沙后向北飞行，脚下的地貌逐渐从中部平原过渡为维斯瓦河下游流域，维斯瓦河是波兰境内最长的河流，发源于西南部喀尔巴阡山脉北麓，全程贯穿波兰、最终在格但斯克附近注入波罗的海。" +
      "临近格但斯克降落前，脚下展开维斯瓦三角洲低地——维斯瓦河入海口处的冲积三角洲平原，部分区域海拔低于海平面，历史上经中世纪荷兰移民带来的堤坝排水技术围垦而成，是波兰境内地势最低的区域，河网密布、以纵横的排水渠道著称，飞机随后降落在格但斯克——历史上汉萨同盟重要的贸易城市，也是二战爆发的第一枪打响之地。",
    "en-US":
      "Flying from Warsaw to Gdańsk links Poland's capital with its Baltic coast port city. After leaving Warsaw the flight heads north, the landscape below gradually shifting from the central plain into the lower Vistula river basin." +
      " Approaching Gdańsk, Żuławy Wiślane comes into view below — the alluvial delta plain at the Vistula's mouth, part of it lying below sea level, historically reclaimed using dike-and-drainage technology introduced by medieval settlers from the Low Countries, the lowest-lying region in Poland — before the flight lands in Gdańsk, a historically important Hanseatic League trading city.",
    },
    travel: {
    "zh-CN":
      "华沙到格但斯克飞约50分钟，同一时区，是波兰航空运营的国内航班之一（安波190机型，每周约40班），也可选择约2.5小时的城际火车。格但斯克机场离市区约12公里。格但斯克是探索波罗的海沿岸海尔半岛与斯沃文斯基沙丘的理想门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Gdańsk is about 50 minutes, same time zone, operated by LOT Polish Airlines (Embraer 190, about 40 flights weekly) as one of Poland's domestic routes; an intercity train (about 2.5 hours) is another option. Gdańsk Airport is about 12 km from the centre. Gdańsk is an ideal gateway for exploring the Hel Peninsula and the Słowiński dunes along the Baltic coast. Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "waw-wro": {
    study: {
    "zh-CN":
      "华沙飞弗罗茨瓦夫，是一趟横跨波兰中西部、连接首都与西里西亚核心城市的航线。飞机离开华沙后向西飞行，脚下展开大波兰低地开阔平坦的地貌——中欧平原位于波兰境内的主体部分，由末次冰期冰川堆积物构成，地表覆盖厚层冰碛物与冰水沉积物，大片规整的农田一望无际，是波兰面积最大的农业区，也是波兰主要的小麦与甜菜产区。" +
      "越过大波兰低地后，飞机继续向西南飞行，逐渐进入奥得河谷地，最终降落在弗罗茨瓦夫——奥得河畔以百余座桥梁与街头小矮人雕塑闻名的西里西亚核心城市，历史上曾多次易主，如今是波兰重要的工业与学术中心之一。",
    "en-US":
      "Flying from Warsaw to Wrocław crosses west-central Poland, linking the capital with the core city of Silesia. After leaving Warsaw the flight heads west, the open, flat landform of the Great Polish Lowland unfolding below — the main portion of the Central European Plain lying within Poland, built of last-glacial ice-sheet deposits, its extensive, regular farmland stretching to the horizon as Poland's largest agricultural region." +
      " Past the Great Polish Lowland, the flight continues south-west, landing in Wrocław, the core city of Silesia on the Oder, known for its hundred-plus bridges and its street-side dwarf statues.",
    },
    travel: {
    "zh-CN":
      "华沙到弗罗茨瓦夫飞约50分钟，同一时区，是波兰航空运营的国内航班之一（安波190机型，每日6班往返），也可选择约4.5小时的城际火车。弗罗茨瓦夫机场离市区约10公里。弗罗茨瓦夫是探索西里西亚地区的理想门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Wrocław is about 50 minutes, same time zone, operated by LOT Polish Airlines (Embraer 190, six round trips daily) as one of Poland's domestic routes; an intercity train (about 4.5 hours) is another option. Wrocław Airport is about 10 km from the centre. Wrocław is an ideal gateway for exploring the Silesia region. Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "waw-poz": {
    study: {
    "zh-CN":
      "华沙飞波兹南，是一趟连接波兰首都与最古老城市之一的短途航线。起飞后不久，脚下即展开大波兰低地开阔平坦的地貌——由末次冰期冰川堆积物构成的平原，地表保留有大量冰川作用形成的锅状凹地小湖，大片农田与零星分布的森林、湖泊交织，是波兰境内地势最为平坦开阔的区域。" +
      "飞机继续向西飞行，最终降落在波兹南——瓦尔塔河畔的古老城市，波兰最早的行政与宗教中心之一，坐落于这片开阔低地之上，如今是波兰重要的会展与工业城市。",
    "en-US":
      "Flying from Warsaw to Poznań is a short hop linking the capital with one of Poland's oldest cities. Soon after take-off, the open, flat landform of the Great Polish Lowland unfolds below — a plain built of last-glacial ice-sheet deposits, extensive farmland interwoven with scattered forest and lakes, the flattest, most open region within Poland." +
      " The flight continues west, landing in Poznań, an ancient city that was historically one of the political centres of the early Polish state, built on this open lowland.",
    },
    travel: {
    "zh-CN":
      "华沙到波兹南飞约39分钟，同一时区，是波兰航空运营的国内航班之一（安波175机型），也可选择约2.5小时的城际火车。波兹南机场离市区约6公里。波兹南是探索大波兰低地地区的理想门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Poznań is about 39 minutes, same time zone, operated by LOT Polish Airlines (Embraer 175) as one of Poland's domestic routes; an intercity train (about 2.5 hours) is another option. Poznań Airport is about 6 km from the centre. Poznań is an ideal gateway for exploring the Great Polish Lowland region. Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "waw-rze": {
    study: {
    "zh-CN":
      "华沙飞热舒夫，是一趟飞往波兰东南部、探索别什恰迪山脉的门户航线。飞机离开华沙后向南飞行，中途掠过圣十字山——波兰境内地质年代最古老的山脉，基岩可追溯至古生代，历经数亿年风化夷平已成为低矮浑圆的丘状山地，是欧洲少数保留有古生代原始地貌痕迹的山地之一。" +
      "越过圣十字山后，飞机继续向东南飞行，逐渐进入小波兰东部地区、地势向喀尔巴阡山前地带过渡，最终降落在热舒夫——波兰重要的航空工业中心，因此得名“波兰航空谷”，机场附近设有航空博物馆记录当地航空制造历史。",
    "en-US":
      "Flying from Warsaw to Rzeszów is a gateway route to south-eastern Poland and the Bieszczady Mountains. After leaving Warsaw the flight heads south, passing over the Świętokrzyskie Mountains midway — the geologically oldest range in Poland, its bedrock dating to the Palaeozoic, worn by hundreds of millions of years of weathering into today's low, rounded hill form." +
      " Past the Świętokrzyskie range, the flight continues south-east into the eastern part of Lesser Poland, landing in Rzeszów, an important Polish aerospace-industry centre nicknamed \"Aviation Valley.\"",
    },
    travel: {
    "zh-CN":
      "华沙到热舒夫飞约55分钟，同一时区，是波兰航空运营的国内航班之一（安波190机型），也可选择约3小时的城际火车。热舒夫—亚西翁卡机场离市区约10公里。热舒夫是探索别什恰迪山脉波沃尼纳草甸的便捷门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Rzeszów is about 55 minutes, same time zone, operated by LOT Polish Airlines (Embraer 190) as one of Poland's domestic routes; an intercity train (about 3 hours) is another option. Rzeszów-Jasionka Airport is about 10 km from the centre. Rzeszów is a convenient gateway for the połoniny meadows of the Bieszczady Mountains. Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "waw-szz": {
    study: {
    "zh-CN":
      "华沙飞什切青，是一趟横跨波兰全境、抵达西北部奥得河口港口城市的航线，也是波兰境内飞行距离最长的国内航线之一。飞机离开华沙后向西北飞行，脚下持续展开大波兰低地开阔平坦的地貌，大片农田与零星分布的湖泊、森林一望无际。" +
      "飞机继续向西北飞行，逐渐接近波兰与德国边境，什切青潟湖与奥得河口的水网在地平线上依稀可见，最终降落在什切青——紧邻德国边境、坐落于奥得河口的重要港口与工业城市，波兰海军主要基地之一，也是波兰通往波罗的海的重要出海口。",
    "en-US":
      "Flying from Warsaw to Szczecin spans the length of Poland to reach the port city at the mouth of the Oder in the north-west. After leaving Warsaw the flight heads north-west, the open, flat landform of the Great Polish Lowland continuing below it, extensive farmland stretching to the horizon." +
      " The flight continues north-west, gradually approaching the Poland-Germany border, before landing in Szczecin, an important port and industrial city at the mouth of the Oder, right on the German border.",
    },
    travel: {
    "zh-CN":
      "华沙到什切青飞约50分钟，同一时区，是波兰航空运营的国内航班之一（安波175机型），也可选择约6.5小时的城际火车。什切青—戈萊尼乌夫机场离市区约45公里。什切青是探索沃林岛国家公园的理想门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Szczecin is about 50 minutes, same time zone, operated by LOT Polish Airlines (Embraer 175) as one of Poland's domestic routes; an intercity train (about 6.5 hours) is another option. Szczecin-Goleniów Airport is about 45 km from the centre. Szczecin is an ideal gateway for exploring Wolin National Park. Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "han-sgn": {
    study: {
    "zh-CN":
      "河内飞胡志明市，是越南客流量最大的国内航线之一，全程约1000公里，被业内称为越南的“黄金航线”。飞机离开河内后向南飞行，脚下展开红河三角洲——红河及其支流泥沙长期沉积形成的三角形冲积平原，面积约1.5万平方公里，是越南两大农业核心区之一，河内城区即建于三角洲之上。" +
      "飞机继续向南飞行，逐渐掠过西原高原——越南中南部一系列连绵高原的统称，海拔大致在500至1500米之间，玄武岩风化形成的红土广泛覆盖高原表面，大片咖啡种植园清晰可见，飞机最终降落在胡志明市——越南最大城市与经济中心。",
    "en-US":
      "Flying from Hanoi to Ho Chi Minh City is one of Vietnam's busiest domestic routes, spanning about 1,000 km and known in the industry as Vietnam's \"golden route.\" After leaving Hanoi the flight heads south, the Red River Delta unfolding below — a triangular alluvial plain built by long-term sediment deposition from the Red River and its tributaries, covering about 15,000 km² and one of Vietnam's two main agricultural core regions, with Hanoi itself built on the delta." +
      " The flight continues south, passing over the Central Highlands midway — a collective name for a series of connected plateaus in south-central Vietnam at roughly 500–1,500 m elevation, its basalt-weathered red laterite soil widely visible beneath extensive coffee plantations, before the flight lands in Ho Chi Minh City, Vietnam's largest city and economic centre.",
    },
    travel: {
    "zh-CN":
      "河内到胡志明市飞约120分钟，同一时区，是越南航空运营的国内航班之一（空客A321机型），这条航线是全球客流量最高的国内航线之一。内排机场距河内市区约35公里；新山一机场距胡志明市中心约8公里。这条航线连接越南南北两大门户城市。",
    "en-US":
      "Hanoi to Ho Chi Minh City takes about 120 minutes, same time zone, operated by Vietnam Airlines (Airbus A321) as one of Vietnam's domestic routes; this route is among the busiest domestic air routes in the world by passenger volume. Noi Bai Airport is about 35 km from central Hanoi; Tan Son Nhat Airport is about 8 km from central Ho Chi Minh City. This route links Vietnam's two great gateway cities in the north and south.",
    },
  },

  "han-dad": {
    study: {
    "zh-CN":
      "河内飞岘港，是连接越南首都与中部最大城市的航线。飞机离开河内后向南飞行，中途掠过长安名胜群——宁平省境内一片喀斯特塔峰与地下水道交织的谷地，面积约6226公顷，谷内密布可乘小舟穿行的水下溶洞，2014年作为越南首个文化与自然混合遗产列入联合国教科文组织世界遗产名录。" +
      "飞机继续向南飞行，临近降落前脚下展开五行山——岘港以南沿海一组由五座大理岩丘体组成的低矮山丘，分别以金木水火土五行命名，飞机最终降落在岘港——越南中部最大城市，是探索会安、顺化的理想门户。",
    "en-US":
      "Flying from Hanoi to Da Nang links Vietnam's capital with the largest city in the centre of the country. After leaving Hanoi the flight heads south, passing over the Trang An Landscape Complex midway — a valley in Ninh Binh Province where karst towers interweave with underground waterways, covering about 6,226 ha, its valleys threaded with submerged caves navigable by small boat, inscribed on the UNESCO World Heritage List in 2014 as Vietnam's first mixed cultural and natural heritage site." +
      " The flight continues south, and just before landing Ngu Hanh Son (the Marble Mountains) unfolds below — a cluster of five low marble hills on the coast south of Da Nang, each named after one of the five classical elements — before the flight lands in Da Nang, the largest city in central Vietnam and an ideal gateway for Hoi An and Hue.",
    },
    travel: {
    "zh-CN":
      "河内到岘港飞约83分钟，同一时区，是越捷航空运营的国内航班之一（空客A321机型）。内排机场距河内市区约35公里；岘港国际机场距市中心约3公里。岘港是探索会安古镇与顺化皇城的理想门户。",
    "en-US":
      "Hanoi to Da Nang takes about 83 minutes, same time zone, operated by VietJet Air (Airbus A321) as one of Vietnam's domestic routes. Noi Bai Airport is about 35 km from central Hanoi; Da Nang International Airport is about 3 km from the city centre. Da Nang is an ideal gateway for the ancient town of Hoi An and the imperial citadel of Hue.",
    },
  },

  "sgn-pqc": {
    study: {
    "zh-CN":
      "胡志明市飞富国岛，是连接越南南部经济中心与最大岛屿度假地的热门航线。飞机离开胡志明市后向西南飞行，脚下展开湄公河三角洲——湄公河入海前在越南南部形成的巨大冲积平原，面积约3.9万平方公里，是世界最大的河流三角洲之一，密布的河汊与人工运河网络构成独特的水乡地貌，大片稻田与果园覆盖平原表面。" +
      "越过三角洲后，飞机继续向西南飞越开阔海域，富国岛逐渐出现在视野中，飞机最终降落在富国岛——越南最大的岛屿，超过一半面积为国家公园森林覆盖，岛屿西海岸绵延的沙滩是越南南部知名的海岛度假地。",
    "en-US":
      "Flying from Ho Chi Minh City to Phu Quoc links southern Vietnam's economic centre with the country's largest resort island. After leaving Ho Chi Minh City the flight heads south-west, the Mekong Delta unfolding below — the vast alluvial plain the Mekong builds in southern Vietnam before reaching the sea, covering about 39,000 km² and one of the largest river deltas in the world, its dense network of channels and man-made canals forming a distinctive water-town landform." +
      " Past the delta, the flight continues south-west across open water; Phu Quoc gradually comes into view, before the flight lands on Phu Quoc, Vietnam's largest island, more than half of it forested within a national park.",
    },
    travel: {
    "zh-CN":
      "胡志明市到富国岛飞约65分钟，同一时区，是越捷航空运营的国内航班之一（空客A320机型）。新山一机场距胡志明市中心约8公里；富国国际机场距阳东镇约15公里。富国岛是越南南部重要的海岛度假目的地。",
    "en-US":
      "Ho Chi Minh City to Phu Quoc takes about 65 minutes, same time zone, operated by VietJet Air (Airbus A320) as one of Vietnam's domestic routes. Tan Son Nhat Airport is about 8 km from central Ho Chi Minh City; Phu Quoc International Airport is about 15 km from Duong Dong town. Phu Quoc is an important island resort destination in southern Vietnam.",
    },
  },

  "han-vca": {
    study: {
    "zh-CN":
      "河内飞芹苴，是贯穿越南南北全境、连接首都与湄公河三角洲核心城市的航线。飞机离开河内后向南飞行，脚下展开红河三角洲——红河及其支流泥沙长期沉积形成的三角形冲积平原，河内城区即建于三角洲之上。" +
      "飞机继续向南飞行贯穿越南全境，临近降落前脚下展开湄公河三角洲——湄公河入海前在越南南部形成的巨大冲积平原，河汊纵横、水上市场沿河道分布，飞机最终降落在芹苴——湄公河三角洲最大城市，是探索水上市场与水乡风情的核心门户。",
    "en-US":
      "Flying from Hanoi to Can Tho spans the full length of Vietnam, linking the capital with the core city of the Mekong Delta. After leaving Hanoi the flight heads south, the Red River Delta unfolding below — the triangular alluvial plain built by the Red River and its tributaries, on which Hanoi itself is built." +
      " The flight continues south the length of the country, and just before landing the Mekong Delta unfolds below — the vast alluvial plain the Mekong builds in southern Vietnam, its channels branching everywhere and floating markets lining the waterways — before the flight lands in Can Tho, the largest city in the Mekong Delta and the core gateway for exploring its floating markets and river-town culture.",
    },
    travel: {
    "zh-CN":
      "河内到芹苴飞约135分钟，同一时区，是越南航空运营的国内航班之一（空客A321机型）。内排机场距河内市区约35公里；芹苴国际机场距市区约10公里。芹苴是探索凤凰水上市场的理想门户。",
    "en-US":
      "Hanoi to Can Tho takes about 135 minutes, same time zone, operated by Vietnam Airlines (Airbus A321) as one of Vietnam's domestic routes. Noi Bai Airport is about 35 km from central Hanoi; Can Tho International Airport is about 10 km from the city centre. Can Tho is an ideal gateway for the Cai Rang floating market.",
    },
  },

  "han-hui": {
    study: {
    "zh-CN":
      "河内飞顺化，是连接越南首都与中部古都的航线。飞机离开河内后向南飞行，中途掠过长安名胜群——宁平省境内一片喀斯特塔峰与地下水道交织的谷地，面积约6226公顷，谷内密布可乘小舟穿行的水下溶洞，常被称为“陆上下龙湾”。" +
      "越过长安名胜群后，飞机继续向南飞行，逐渐接近越南中部沿海地带，飞机最终降落在顺化——1802年至1945年间阮朝的都城，香江贯穿城区，皇城与多座皇陵沿江分布，1993年顺化古迹群列入联合国教科文组织世界遗产名录。",
    "en-US":
      "Flying from Hanoi to Hue links Vietnam's capital with the ancient imperial capital of the centre. After leaving Hanoi the flight heads south, passing over the Trang An Landscape Complex midway — a valley in Ninh Binh Province where karst towers interweave with underground waterways navigable by small boat, often called \"Ha Long Bay on land.\"" +
      " Past Trang An, the flight continues south, gradually approaching Vietnam's central coast, before landing in Hue, the Nguyen dynasty's capital from 1802 to 1945, with the Complex of Hue Monuments inscribed on the UNESCO World Heritage List in 1993.",
    },
    travel: {
    "zh-CN":
      "河内到顺化飞约70分钟，同一时区，是越南航空运营的国内航班之一（空客A321机型），每日往返约3班。内排机场距河内市区约35公里；富牌国际机场距顺化市中心约15公里。顺化是探索阮朝皇城与皇陵的理想门户。",
    "en-US":
      "Hanoi to Hue takes about 70 minutes, same time zone, operated by Vietnam Airlines (Airbus A321) as one of Vietnam's domestic routes, with about 3 round trips daily. Noi Bai Airport is about 35 km from central Hanoi; Phu Bai International Airport is about 15 km from central Hue. Hue is an ideal gateway for the Nguyen dynasty's imperial citadel and royal tombs.",
    },
  },

  "dad-sgn": {
    study: {
    "zh-CN":
      "岘港飞胡志明市，是连接越南中部与南部经济中心的航线。飞机离开岘港后向南飞行，逐渐掠过西原高原——越南中南部一系列连绵高原的统称，海拔大致在500至1500米之间，玄武岩风化形成的红土广泛覆盖高原表面，大片咖啡与橡胶种植园清晰可见，大叻所在的林园高原海拔约1500米、气候常年温和，法国殖民时期即被开发为避暑胜地。" +
      "飞机继续向南飞行，逐渐接近越南南部平原，飞机最终降落在胡志明市——越南最大城市与经济中心，商业与文化氛围与中部沿海城市形成鲜明对比，第一郡法式建筑与摩天楼交错分布。",
    "en-US":
      "Flying from Da Nang to Ho Chi Minh City links central Vietnam with the country's southern economic centre. After leaving Da Nang the flight heads south, passing over the Central Highlands midway — a collective name for a series of connected plateaus in south-central Vietnam at roughly 500–1,500 m elevation, its basalt-weathered red laterite soil widely visible beneath extensive coffee and rubber plantations, with Da Lat's Lam Vien Plateau enjoying a mild climate year-round." +
      " The flight continues south, gradually approaching the plains of southern Vietnam, before landing in Ho Chi Minh City, Vietnam's largest city and economic centre, its commercial and cultural atmosphere a sharp contrast with the coastal cities of the centre.",
    },
    travel: {
    "zh-CN":
      "岘港到胡志明市飞约90分钟，同一时区，是竹子航空运营的国内航班之一（空客A321机型）。岘港国际机场距市中心约3公里；新山一机场距胡志明市中心约8公里。这条航线是连接越南中部与南部的重要空中通道之一。",
    "en-US":
      "Da Nang to Ho Chi Minh City takes about 90 minutes, same time zone, operated by Bamboo Airways (Airbus A321) as one of Vietnam's domestic routes. Da Nang International Airport is about 3 km from the city centre; Tan Son Nhat Airport is about 8 km from central Ho Chi Minh City. This route is an important air link between central and southern Vietnam.",
    },
  },

  "kul-pen": {
    study: {
    "zh-CN":
      "吉隆坡飞槟城，是马来半岛西海岸最繁忙的国内航线之一，全程约300公里，是马来西亚航空客流量最高的航线之一。飞机离开吉隆坡后向西北飞行，脚下先掠过巴生河谷的城市化平原，随后进入马来半岛西海岸相对平坦的沿海低地地带，大片棕榈油种植园从空中清晰可辨。" +
      "飞机继续向西北飞行，沿途可见蒂蒂旺沙山脉西侧余脉在内陆隐约可见，海岸线一侧棕榈种植园与红树林交替分布，最终降落在槟城——马来半岛西北岸外一座花岗岩岛屿，2008年老城区乔治市列入UNESCO世界遗产名录。",
    "en-US":
      "Flying from Kuala Lumpur to Penang is one of the busiest domestic routes on the peninsula's west coast, spanning about 300 km. After leaving Kuala Lumpur the flight heads northwest, first passing over the urbanised plain of the Klang Valley before entering the comparatively flat coastal lowland of the peninsula's west coast." +
      " The flight continues northwest, the western foothills of the Titiwangsa Mountains faintly visible inland, palm plantations and mangroves alternating along the coastline, before landing on Penang, a granite island off the peninsula's northwest coast whose old town of George Town was inscribed on the UNESCO World Heritage List in 2008.",
    },
    travel: {
    "zh-CN":
      "吉隆坡到槟城飞约55分钟，同一时区，是亚洲航空运营的国内航班之一（空客A320机型，每日约9班）。吉隆坡国际机场距市区约45公里；槟城国际机场距乔治市约18公里。这是马来西亚客流量最高的国内航线之一。",
    "en-US":
      "Kuala Lumpur to Penang is about 55 minutes, same time zone, operated by AirAsia (Airbus A320, about 9 flights daily) as one of Malaysia's domestic routes. Kuala Lumpur International Airport is about 45 km from the city centre; Penang International Airport is about 18 km from George Town. This is one of Malaysia's highest-volume domestic air routes.",
    },
  },

  "kul-bki": {
    study: {
    "zh-CN":
      "吉隆坡飞亚庇，是连接马来半岛与婆罗洲的核心航线，全程约1630公里，是马来西亚客流量最大的国内航线，日均航班多达十余班，飞行时长约两个半小时。飞机离开吉隆坡后向东飞行，很快越过马来半岛东海岸线，进入南海开阔水域。" +
      "飞机持续在南海上空飞行逾两小时，接近婆罗洲海岸时，京那巴鲁山裸露的花岗岩峰体从云海中显露，海拔4095米的山体是马来西亚与马来群岛最高峰，最终降落在亚庇——沙巴州首府，是探索京那巴鲁公园与沙巴海岛的核心门户。",
    "en-US":
      "Flying from Kuala Lumpur to Kota Kinabalu is the core route linking the Malay Peninsula with Borneo, spanning about 1,630 km — Malaysia's highest-volume domestic route. After leaving Kuala Lumpur the flight heads east, soon crossing the peninsula's east coast into the open waters of the South China Sea." +
      " The flight continues over the South China Sea for more than two hours; as it nears the Bornean coast, the bare granite summit of Mount Kinabalu emerges from the sea of cloud — at 4,095 m, the highest peak in Malaysia and the Malay Archipelago — before landing in Kota Kinabalu, capital of Sabah and the core gateway to Kinabalu Park.",
    },
    travel: {
    "zh-CN":
      "吉隆坡到亚庇飞约150分钟，同一时区，是亚洲航空运营的国内航班之一（空客A320机型），是马来西亚境内客流量最大的单一航线（每日多达14至16班）。吉隆坡国际机场距市区约45公里；亚庇国际机场距市区约7公里。",
    "en-US":
      "Kuala Lumpur to Kota Kinabalu is about 150 minutes, same time zone, operated by AirAsia (Airbus A320) as one of Malaysia's domestic routes, and the single busiest air route within the country (up to 14–16 daily flights). Kuala Lumpur International Airport is about 45 km from the city centre; Kota Kinabalu International Airport is about 7 km from the city centre.",
    },
  },

  "kul-kch": {
    study: {
    "zh-CN":
      "吉隆坡飞古晋，是连接马来半岛与砂拉越的主要航线，全程约1110公里，是马来西亚境内客流量位居前列的国内航线之一，全天多个班次往返两地。飞机离开吉隆坡后向东南飞行，越过马来半岛南部后进入南海，飞越加里曼丹岛与马来半岛之间的开阔海域。" +
      "飞机继续向东南飞行，接近砂拉越海岸时，巴哥国家公园沿岸砂岩地貌与海蚀柱景观隐约可见，最终降落在古晋——砂拉越州首府，坐落于砂拉越河畔，是探索姆鲁山国家公园与尼亚洞穴的重要门户。",
    "en-US":
      "Flying from Kuala Lumpur to Kuching is the main route linking the Malay Peninsula with Sarawak, spanning about 1,110 km. After leaving Kuala Lumpur the flight heads southeast, crossing the southern peninsula before entering the South China Sea and flying over the open water between Borneo and the peninsula." +
      " The flight continues southeast; as it nears the Sarawak coast, the sandstone coastal landform and sea stacks of Bako National Park become faintly visible, before landing in Kuching, capital of Sarawak on the banks of the Sarawak River and an important gateway to Gunung Mulu National Park and the Niah Caves.",
    },
    travel: {
    "zh-CN":
      "吉隆坡到古晋飞约110分钟，同一时区，是亚洲航空运营的国内航班之一（空客A320机型，全天多班）。吉隆坡国际机场距市区约45公里；古晋国际机场距市区约11公里。",
    "en-US":
      "Kuala Lumpur to Kuching is about 110 minutes, same time zone, operated by AirAsia (Airbus A320, multiple flights daily) as one of Malaysia's domestic routes. Kuala Lumpur International Airport is about 45 km from the city centre; Kuching International Airport is about 11 km from the city centre.",
    },
  },

  "kul-lgk": {
    study: {
    "zh-CN":
      "吉隆坡飞浮罗交怡，是马来半岛西海岸北向的热门航线，全程约370公里，是马来西亚知名的度假岛屿航线之一，尤其在节假日期间班次密集。飞机离开吉隆坡后向西北飞行，沿途经过槟城以北海域，逐渐接近马来半岛与泰国交界的安达曼海海域。" +
      "飞机继续向西北飞行，浮罗交怡群岛错落分布的岛屿与基林河口红树林、喀斯特尖峰地貌逐渐显现，最终降落在浮罗交怡——2007年获认定为东南亚首个UNESCO世界地质公园，地质记录跨越逾5.5亿年。",
    "en-US":
      "Flying from Kuala Lumpur to Langkawi is a popular route heading north along the peninsula's west coast, spanning about 370 km. After leaving Kuala Lumpur the flight heads northwest, passing waters north of Penang and approaching the Andaman Sea near the Malaysia-Thailand border." +
      " The flight continues northwest, the scattered islands of the Langkawi archipelago and the mangroves and karst pinnacles of the Kilim estuary gradually coming into view, before landing on Langkawi, recognised in 2007 as the first UNESCO Global Geopark in Southeast Asia, its geological record spanning more than 550 million years.",
    },
    travel: {
    "zh-CN":
      "吉隆坡到浮罗交怡飞约65分钟，同一时区，是亚洲航空运营的国内航班之一（空客A320机型）。吉隆坡国际机场距市区约45公里；浮罗交怡国际机场距瓜镇约11公里。浮罗交怡是马来西亚知名的免税购物与度假岛屿。",
    "en-US":
      "Kuala Lumpur to Langkawi is about 65 minutes, same time zone, operated by AirAsia (Airbus A320) as one of Malaysia's domestic routes. Kuala Lumpur International Airport is about 45 km from the city centre; Langkawi International Airport is about 11 km from Kuah town. Langkawi is a well-known duty-free shopping and resort island in Malaysia.",
    },
  },

  "kul-kbr": {
    study: {
    "zh-CN":
      "吉隆坡飞哥打巴鲁，是横贯马来半岛、连接西海岸与东海岸的航线，全程约420公里，飞行方向大致垂直于蒂蒂旺沙山脉走向，是往返东海岸最便捷的空中通道之一。飞机离开吉隆坡后向东北飞行，脚下先掠过蒂蒂旺沙山脉——马来半岛的脊梁山系，连绵的绿色山脊贯穿半岛中轴。" +
      "越过蒂蒂旺沙山脉后，飞机继续向东北飞行，掠过大汉山国家公园大片原始热带雨林，最终降落在哥打巴鲁——吉兰丹州首府，坐落于吉兰丹河口，是马来传统文化保存最完整的城市之一。",
    "en-US":
      "Flying from Kuala Lumpur to Kota Bharu crosses the Malay Peninsula, linking its west and east coasts, spanning about 420 km. After leaving Kuala Lumpur the flight heads northeast, first passing over the Titiwangsa Mountains — the peninsula's backbone range, a continuous green ridge running down its centre." +
      " Past the Titiwangsa range, the flight continues northeast over the extensive primary rainforest of Taman Negara, before landing in Kota Bharu, capital of Kelantan at the mouth of the Kelantan River, one of the cities where traditional Malay culture is best preserved.",
    },
    travel: {
    "zh-CN":
      "吉隆坡到哥打巴鲁飞约60分钟，同一时区，是亚洲航空运营的国内航班之一（空客A320机型）。吉隆坡国际机场距市区约45公里；苏丹依斯迈布特拉机场距市区约8公里。",
    "en-US":
      "Kuala Lumpur to Kota Bharu is about 60 minutes, same time zone, operated by AirAsia (Airbus A320) as one of Malaysia's domestic routes. Kuala Lumpur International Airport is about 45 km from the city centre; Sultan Ismail Petra Airport is about 8 km from the city centre.",
    },
  },

  "sdk-bki": {
    study: {
    "zh-CN":
      "山打根飞亚庇，是沙巴内陆的区域航线，全程约230公里，由婆罗洲航空（前身马仕运航空，2026年初完成品牌重组）运营，是沙巴境内客流量最大的支线航班之一，也是连接沙巴东西海岸的重要空中通道。飞机离开山打根后向西飞行，脚下逐渐展开克罗克山脉连绵起伏的山脊地貌。" +
      "克罗克山脉呈南北走向、长约120公里，无突出的单一主峰，是京那巴鲁山所在花岗岩体的组成部分；飞机继续向西飞行，越过克罗克山脉后进入沿海平原，最终降落在亚庇——沙巴州首府。",
    "en-US":
      "Flying from Sandakan to Kota Kinabalu is a regional route within Sabah, spanning about 230 km, operated by AirBorneo (formerly MASwings, which completed its rebrand in early 2026). After leaving Sandakan the flight heads west, the rolling ridgeline of the Crocker Range gradually unfolding below." +
      " The Crocker Range runs north-south for about 120 km with no single dominant peak, forming part of the same granite massif as Mount Kinabalu; the flight continues west, crossing the range before descending over the coastal plain and landing in Kota Kinabalu, capital of Sabah.",
    },
    travel: {
    "zh-CN":
      "山打根到亚庇飞约55分钟，同一时区，是婆罗洲航空运营的沙巴内陆航班之一（ATR 72-500机型），该航司2026年初由马仕运航空重组而来，由砂拉越州政府接管运营。山打根机场距市区约11公里；亚庇国际机场距市区约7公里。",
    "en-US":
      "Sandakan to Kota Kinabalu is about 55 minutes, same time zone, operated by AirBorneo (ATR 72-500) as one of Sabah's regional routes; the airline was formed in early 2026 through the rebranding of MASwings under Sarawak state government ownership. Sandakan Airport is about 11 km from the city centre; Kota Kinabalu International Airport is about 7 km from the city centre.",
    },
  },

  "kch-myy": {
    study: {
    "zh-CN":
      "古晋飞美里，是砂拉越境内连接两大城市的区域航线，全程约420公里，由婆罗洲航空运营，是前往姆鲁山国家公园与尼亚洞穴的常用中转航段。飞机离开古晋后向东北飞行，沿婆罗洲海岸平原上空前行，脚下砂拉越沿海地带的河网与红树林交织分布。" +
      "飞机继续向东北飞行，接近美里前掠过尼亚国家公园——苏比斯山石灰岩地块北缘的洞穴群，大洞洞口高逾60米，2024年列入UNESCO世界遗产名录，最终降落在美里——砂拉越东北部港口城市，是探索姆鲁山国家公园的重要中转枢纽。",
    "en-US":
      "Flying from Kuching to Miri is a regional route linking Sarawak's two major cities, spanning about 420 km, operated by AirBorneo. After leaving Kuching the flight heads northeast along Borneo's coastal plain, rivers and mangroves of Sarawak's coastal belt interweaving below." +
      " The flight continues northeast, passing near Niah National Park before reaching Miri — a cave complex on the northern edge of the Gunong Subis limestone massif, its Great Cave mouth more than 60 m high, inscribed on the UNESCO World Heritage List in 2024 — before landing in Miri, a port city in northeastern Sarawak and an important transit hub for exploring Gunung Mulu National Park.",
    },
    travel: {
    "zh-CN":
      "古晋到美里飞约75分钟，同一时区，是婆罗洲航空运营的砂拉越内陆航班之一（ATR 72-500机型）。古晋国际机场距市区约11公里；美里机场距市区约8公里。美里是转乘小型飞机前往姆鲁山国家公园的重要枢纽。",
    "en-US":
      "Kuching to Miri is about 75 minutes, same time zone, operated by AirBorneo (ATR 72-500) as one of Sarawak's regional routes. Kuching International Airport is about 11 km from the city centre; Miri Airport is about 8 km from the city centre. Miri is an important hub for connecting flights to Gunung Mulu National Park.",
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
