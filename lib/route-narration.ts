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
