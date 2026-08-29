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
    travel: { "zh-CN": "", "en-US": "" },
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
    travel: { "zh-CN": "", "en-US": "" },
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
    travel: { "zh-CN": "", "en-US": "" },
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
    travel: { "zh-CN": "", "en-US": "" },
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
