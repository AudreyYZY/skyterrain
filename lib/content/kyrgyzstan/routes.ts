import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  // pek-bsz sources（2026-09-15 首写；核实 2026-09-15 当批（content-verifier 独立检索，两套解说全部 ok，航班号机型时长两源确认））：阴山东西走向、北侧是蒙古高原（china yinshan 条目）；戈壁以砾漠为主、不是连绵沙丘（mongolia-gobi 条目）；
  // 天山横贯新疆中部、分南疆北疆、山麓冲积扇绿洲（china tianshan 条目）；伊犁河谷是天山中朝西敞开的三角形谷地、比新疆其他地方湿润（china ili-valley 条目）；
  // 楚河谷地海拔约 500–1,200 m、几乎全部开垦灌溉、吉尔吉斯山脉北麓冲积扇（kyrgyzstan chuy-valley / kyrgyz-ala-too 条目）；大圆距离约 3,480 km（按两端机场坐标算）；
  // 国航 CA893 A321、约 5 h 40 min（见 data/routes/pek-bsz.json source）；玛纳斯国际机场代码 BSZ、距比什凯克市中心直线约 23 km；比什凯克市常住人口约 135.9 万（统计委员会 2026-01-01，1 级）；
  // 须随身携带护照或公证复印件、公共场所饮酒违法、Visa 大多可用 MasterCard 有时不收（英国外交部 2026-09-14，1 级）；2026 年起账单不单列服务费（2 级）。
  // 零争议：航线经过的邻国、边界与口岸不写；签证天数、价格不写。
  "pek-bsz": {
    study: {
      "zh-CN":
        "北京飞比什凯克，全程约3500公里，是一条从华北一路向西、先掠过蒙古高原的戈壁，再沿着天山飞进中亚山间谷地的航线。飞机离开华北平原北缘，很快越过一道东西走向的山脉——阴山。阴山以南是河套一带的平原，以北地势抬升，进入辽阔的蒙古高原。" +
        "继续向西，下方是大片的戈壁。这里的地表以砾石和粗砂为主，植被稀疏，偶尔能看到干涸的河床和盐湖洼地；戈壁并不是连绵的沙丘，大部分是被风吹走细沙后留下的砾石平原。飞机在戈壁上空飞行很长一段，景色单调而辽阔，地面的颜色在灰褐、土黄之间变化。" +
        "戈壁的西端，前方出现白色的雪线：天山到了。天山横贯新疆中部，把南疆和北疆分开，山脊上是冰川和雪峰，山麓是一圈黄绿色的冲积扇绿洲，绿洲之外就是沙漠。飞机沿着天山的北侧向西飞，能看到山谷里的河流从雪线下流出，在山前散开成扇形。" +
        "越过天山中段向西，山地之间出现一个朝西敞开的三角形谷地——伊犁河谷。它比周围湿润得多，谷底是农田、果园和草原，伊犁河在谷中弯曲流向西方。" +
        "过了伊犁河谷，北天山的几道山脉一道接一道地排在下方，山顶积雪、山坡上有深色的云杉林。最后一道山脉的北麓，是一片平坦整齐的灌溉农田——楚河谷地。飞机在谷地北侧降落在玛纳斯国际机场，比什凯克就在南面不远，城南的吉尔吉斯山脉雪峰清晰可见。",
      "en-US":
        "Beijing to Bishkek covers about 3,500 km, a route that heads west from northern China, first across the gravel desert of the Mongolian Plateau and then along the Tian Shan into the mountain valleys of Central Asia. Leaving the northern edge of the North China Plain, the flight soon crosses an east–west range, the Yin Mountains. South of the Yinshan lie the plains of the Hetao region; to the north the land rises onto the vast Mongolian Plateau. " +
        "Further west, a great expanse of gobi stretches below. The surface is mostly gravel and coarse sand with sparse vegetation, and here and there dry riverbeds and salt-lake hollows appear; the Gobi is not a sea of dunes but mostly a gravel plain left behind after the wind has blown the fine sand away. The flight spends a long stretch over it, the view vast and monotonous, the ground shifting between grey-brown and ochre. " +
        "At the western end of the Gobi, a white snowline appears ahead: the Tian Shan. It runs across central Xinjiang, dividing the south from the north, with glaciers and snow peaks along its crest and a ring of yellow-green alluvial-fan oases at its foot, beyond which lies desert. Flying west along the northern side of the range, you can see rivers flowing out from below the snowline and fanning out at the mountain front. " +
        "Past the middle of the Tian Shan to the west, a triangular valley opening westwards appears among the mountains — the Ili Valley. It is far wetter than its surroundings, its floor covered with fields, orchards and grassland, with the Ili River winding west through it. " +
        "Beyond the Ili Valley, one mountain range after another passes below, snow on their summits and dark spruce forest on their slopes. At the northern foot of the last range lies a flat, neatly irrigated farmland — the Chüy Valley. The flight lands at Manas International Airport on the valley's northern side, with Bishkek a short distance to the south and the snow peaks of the Kyrgyz Ala-Too clearly visible beyond the city.",
    },
    travel: {
      "zh-CN":
        "北京到比什凯克约5小时40分，这条航线由中国国际航空执飞。吉尔吉斯斯坦的签证与入境要求按国籍不同，以吉尔吉斯斯坦驻当地使领馆最新公布为准，行前确认。" +
        "玛纳斯国际机场的代码是BSZ，机场在比什凯克城北，距市中心直线约23公里，最好用预约出租车进城。" +
        "在吉尔吉斯斯坦要随身带护照或公证复印件，公共场所饮酒违法。货币是索姆，Visa大多数地方能刷，MasterCard有时不收，扫码支付很常见，去乡村要带现金。自2026年起餐厅账单不再单列服务费，小费自愿。" +
        "比什凯克是去伊塞克湖和天山山区的出发地，6–9月是山区和湖区的主要旅行季；冬季寒冷，城里空气质量较差，比什凯克以外的道路常被雪封。",
      "en-US":
        "Beijing to Bishkek takes about 5 hours 40 minutes, and the route is operated by Air China. Visa and entry requirements for Kyrgyzstan vary by nationality and are as most recently published by Kyrgyzstan's embassy or consulate in your country — confirm before travelling. " +
        "Manas International Airport has the code BSZ; it is north of Bishkek, about 23 km from the centre in a straight line, and a booked taxi is the best way into town. " +
        "In Kyrgyzstan carry your passport or a notarised copy, and note that drinking alcohol in public places is illegal. The currency is the som; Visa works in most places, Mastercard is sometimes refused, QR-code payments are common, and you need cash in the countryside. From 2026 restaurant bills no longer carry a separate service charge; tipping is voluntary. " +
        "Bishkek is the starting point for Issyk-Kul and the Tian Shan; June to September is the main season for the mountains and the lake, while winters are cold, the city's air quality is poor, and roads outside Bishkek are often blocked by snow.",
    },
  },
  // can-bsz sources（2026-09-15 首写；核实 2026-09-15 当批（content-verifier 独立检索，两套解说全部 ok，航班号机型时长两源确认））：两广丘陵低山丘陵与喀斯特峰林（china liangguang-hills 条目）；四川盆地四面环山、紫红色砂岩（china sichuan 条目）；
  // 昆仑山是塔里木盆地与青藏高原之间的屏障、北坡陡降到沙漠（china kunlun 条目）；塔里木河沿盆地北缘流动（china tarim-river 条目）；
  // 伊塞克湖面积约 6,236 km²、湖面海拔约 1,600 m、冬季基本不封冻、北岸昆格阿拉套南岸泰尔斯凯阿拉套（kyrgyzstan issyk-kul 条目）；楚河经博姆峡谷进入楚河谷地（kyrgyzstan boom-gorge / chuy-valley 条目）；
  // 大圆距离约 4,170 km（按两端机场坐标算）；南航 CZ8147 波音 737-8、约 6 h 25 min（见 data/routes/can-bsz.json source）；伊塞克湖州府卡拉科尔、湖北岸乔尔蓬阿塔（kyrgyzstan cities 条目）。
  // 零争议：航线经过的邻国、边界与口岸不写；签证天数、价格不写。
  "can-bsz": {
    study: {
      "zh-CN":
        "广州飞比什凯克，全程约4200公里，是一条从华南斜穿中国西部、飞越青藏高原北缘与塔里木盆地，最后进入天山湖盆的航线。飞机离开珠江三角洲，下方是两广丘陵：低山、丘陵和小盆地相间，石灰岩地区能看到平地拔起的峰林。" +
        "继续向西北，下方出现一个被群山四面围住的大盆地——四川盆地。盆地里人口稠密、农田连片，岩石多是紫红色的砂岩和泥岩，所以又叫「红色盆地」。飞过盆地西缘，地势陡然升高，进入青藏高原的东北部。" +
        "高原上空要飞很长一段。地面海拔很高，是开阔的高寒草原、湖泊和雪山，河流在这里还是蜿蜒的浅水。高原的北缘是昆仑山，一道东西向的高大山脉，山脊上是冰川和雪峰；它的北坡陡降到沙漠，是高原与塔里木盆地之间的巨大屏障。" +
        "翻过昆仑山，下方是塔里木盆地的沙漠。飞机斜穿盆地向西北，塔里木河在盆地北缘蜿蜒，两岸是一条细长的绿色胡杨林带，与黄色的沙丘形成鲜明对比。" +
        "盆地北面，天山的雪峰连成一道白墙。越过冰川密布的高山，下方出现一片深蓝色的长条湖面——伊塞克湖，面积约6200平方公里，湖面海拔约1600米，北岸是昆格阿拉套，南岸是泰尔斯凯阿拉套。" +
        "飞机沿湖面向西，经过湖西端，楚河穿过博姆峡谷进入平坦的楚河谷地。最后在谷地北侧降落在玛纳斯国际机场，比什凯克就在南面不远。",
      "en-US":
        "Guangzhou to Bishkek covers about 4,200 km, a route that cuts diagonally across western China, over the northern edge of the Tibetan Plateau and the Tarim Basin, before entering the lake basins of the Tian Shan. Leaving the Pearl River delta, the flight passes over the Guangdong–Guangxi hills: low mountains, hills and small basins in between, with karst peaks rising straight from the plains in the limestone areas. " +
        "Further north-west a great basin ringed by mountains on all sides appears below — the Sichuan Basin. It is densely populated and covered with fields, and its rocks are mostly purplish-red sandstone and mudstone, which is why it is also called the Red Basin. Beyond its western edge the ground rises steeply onto the north-eastern Tibetan Plateau. " +
        "The flight spends a long stretch over the plateau. The ground stands very high, an open expanse of alpine grassland, lakes and snow peaks, where rivers are still shallow, winding streams. The plateau's northern edge is the Kunlun Mountains, a lofty east–west range with glaciers and snow peaks along its crest; its northern slope drops steeply to the desert, a great barrier between the plateau and the Tarim Basin. " +
        "Over the Kunlun, the desert of the Tarim Basin lies below. The flight crosses the basin diagonally to the north-west, with the Tarim River winding along its northern edge, lined by a thin green belt of poplar forest in sharp contrast to the yellow dunes. " +
        "North of the basin, the snow peaks of the Tian Shan form a white wall. Over the heavily glaciated high mountains, a long, deep-blue lake appears below — Issyk-Kul, about 6,200 km² in area with its surface at about 1,600 m, with the Kungey Ala-Too on its northern shore and the Terskey Ala-Too on its southern shore. " +
        "The flight follows the lake west, past its western end, where the Chüy River passes through the Boom Gorge into the flat Chüy Valley. It lands at Manas International Airport on the valley's northern side, with Bishkek a short distance to the south.",
    },
    travel: {
      "zh-CN":
        "广州到比什凯克约6小时25分，这条航线由中国南方航空执飞。吉尔吉斯斯坦的签证与入境要求按国籍不同，以吉尔吉斯斯坦驻当地使领馆最新公布为准，行前确认。" +
        "玛纳斯国际机场（BSZ）在比什凯克城北，距市中心直线约23公里。入境后要随身带护照或公证复印件，公共场所饮酒违法；货币是索姆，扫码支付常见，Visa比MasterCard通用。" +
        "航线最后经过的伊塞克湖是很多人来吉尔吉斯斯坦的目的地：湖东端的卡拉科尔是去天山山谷徒步的出发地，北岸的乔尔蓬阿塔是夏季湖滨度假地。从比什凯克去湖边主要靠公路，夏季还有开往湖西端巴雷克奇的旅游列车。" +
        "6–9月最适合去湖区和山区，高海拔徒步要注意高原反应；冬季寒冷，山路可能被雪封。",
      "en-US":
        "Guangzhou to Bishkek takes about 6 hours 25 minutes, and the route is operated by China Southern Airlines. Visa and entry requirements for Kyrgyzstan vary by nationality and are as most recently published by Kyrgyzstan's embassy or consulate in your country — confirm before travelling. " +
        "Manas International Airport (BSZ) is north of Bishkek, about 23 km from the centre in a straight line. In the country carry your passport or a notarised copy, and note that drinking alcohol in public places is illegal; the currency is the som, QR-code payments are common, and Visa is more widely accepted than Mastercard. " +
        "Issyk-Kul, which the flight passes near the end, is the destination for many visitors: Karakol at its eastern end is the base for hiking in the Tian Shan valleys, and Cholpon-Ata on the north shore is a summer lakeside resort. From Bishkek the lake is reached mainly by road, and in summer a tourist train also runs to Balykchy at the western end. " +
        "June to September is best for the lake and the mountains, and high-altitude hikers should watch for altitude sickness; winters are cold and mountain roads may be closed by snow.",
    },
  },
};
