import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "tll-ure": {
    // 全四段 sources: 大圆约 188 km（TLL/URE 坐标 OurAirports），正文写「全程约一百九十公里」；
    // 西爱沙尼亚低地 6035 km²、大多不超过 10 m、西北部抬升约 3 mm/年；马察卢湾最大一片芦苇荡约 2000 ha（kaitsealad.ee 与 Ramsar，1 级；初稿写 3000 ha，当批核实改正）、卡萨里河三角洲；
    // 萨列马岛 2673 km²、奥陶纪与志留纪石灰岩；库雷萨雷主教城堡 14 世纪 —— 均与本库地形条目一致（该批 2026-09-13 当批核实）。
    // travel：航程约 40 分钟、全年每天 1–2 班（airport.ee 库雷萨雷机场页，1 级）；NyxAir 按国家合同执飞（ERR 2024-02-07，2 级）；
    // 维尔楚—奎瓦斯图约 27 分钟（praamid.ee，1 级）；机场距镇中心直线约 3 km（按坐标算）。
    // ⚠️ route.source.status = "flight-unknown"：两套解说都**不点名航班号与机型**。2026-09-13 首写。 核实 2026-09-13 当批（content-verifier 独立检索；马察卢湾芦苇荡 3000→2000 ha，其余 ok）。
    study: {
    "zh-CN":
      "塔林飞库雷萨雷，全程约一百九十公里，是一条从爱沙尼亚本土北岸飞往萨列马岛的短途航线，沿途几乎全是海拔很低的平地、浅海湾与岛屿。" +
      "起飞后飞机向西南飞，脚下很快进入西爱沙尼亚低地——一片从芬兰湾延伸到里加湾的低平地带，面积约6035平方公里，地面大多不超过海拔10米，松林、沼泽、海岸草甸与浅海湾交错成一片马赛克。" +
      "这里的地形由陆地抬升决定：冰盖融化后地壳慢慢回弹，今天西北部仍以每年约3毫米的速度上升，在这样低平的海岸，几毫米就足以让海湾变成湖泊、小岛连成半岛。" +
      "航程中段飞过马察卢湾，一个伸入陆地的浅海湾，湾顶是卡萨里河的三角洲和约2000公顷的芦苇荡，从空中看是浅棕与银灰交错的水域，春秋两季这里是候鸟的停歇地。" +
      "越过本土与穆胡岛之间的浅海，前方就是萨列马岛——爱沙尼亚最大的岛屿，面积约2673平方公里，基岩是奥陶纪与志留纪的石灰岩，岛上是深绿的松林、浅色的杜松草地和石墙分隔的农田。" +
      "最后飞机在岛的南岸降落，库雷萨雷机场离镇中心只有约3公里，镇边海湾旁是14世纪的主教城堡。",
    "en-US":
      "Tallinn to Kuressaare is about 190 km in all, a short flight from the north coast of mainland Estonia to the island of Saaremaa, over land that is almost entirely low plains, shallow bays and islands." +
      " After take-off the aircraft heads south-west and is soon over the West Estonian Lowland, a low, flat belt stretching from the Gulf of Finland to the Gulf of Riga, about 6,035 km² in area, mostly no more than 10 m above sea level, where pine forest, bog, coastal meadow and shallow bays form a mosaic." +
      " The landscape here is shaped by land uplift: since the ice sheet melted, the crust has been slowly rebounding, and the north-west is still rising by about 3 mm a year; on a coast this flat, a few millimetres are enough to turn bays into lakes and join islets into peninsulas." +
      " Midway the flight crosses Matsalu Bay, a shallow inlet reaching into the land, with the delta of the Kasari River and about 2,000 hectares of reed beds at its head; from the air it is water streaked light brown and silver-grey, and in spring and autumn it is a stopover for migrating birds." +
      " Beyond the shallow sea between the mainland and Muhu lies Saaremaa, Estonia's largest island, about 2,673 km² in area, on a bedrock of Ordovician and Silurian limestone, covered with dark green pine forest, pale juniper meadows and fields divided by stone walls." +
      " Finally the aircraft lands on the island's south coast; Kuressaare Airport is only about 3 km from the town centre, where a 14th-century episcopal castle stands beside the bay.",
    },
    travel: {
    "zh-CN":
      "塔林飞库雷萨雷约40分钟，全年每天有一到两班，按国家合同运营，班期以机场公布为准。" +
      "不坐飞机的话，也可以从本土的维尔楚坐渡轮到穆胡岛的奎瓦斯图，约27分钟，再沿公路进入萨列马岛；夏季周末自驾上船最好提前预订船位。" +
      "库雷萨雷机场离镇中心约3公里。镇上的主教城堡是萨列马博物馆，岛上的卡利陨石坑、潘加陡崖与风车群分散各处，自驾或骑车最方便。" +
      "全程在爱沙尼亚境内，同用欧元、不过边检；冬季风大时，航班与渡轮都可能延误。",
    "en-US":
      "Tallinn to Kuressaare takes about 40 minutes, with one or two flights a day all year, run under a state contract; check the airport for current schedules." +
      " Instead of flying, you can take the ferry from Virtsu on the mainland to Kuivastu on Muhu, about 27 minutes, and then drive onto Saaremaa; on summer weekends drivers should book a place on the ferry in advance." +
      " Kuressaare Airport is about 3 km from the town centre. The episcopal castle in town houses the Saaremaa Museum, while Kaali crater, Panga Cliff and the windmills are spread across the island, so a car or a bicycle is the easiest way to get around." +
      " The whole trip is within Estonia, with the euro at both ends and no border checks; in strong winter winds both flights and ferries can be delayed.",
    },
  },
  "tll-kdl": {
    // 全四段 sources: 大圆约 123 km（TLL/KDL 坐标 OurAirports），正文写「全程约一百二十公里」；
    // 西爱沙尼亚低地大多不超过 10 m、北部冰期以来抬升近 90 m、西北部约 3 mm/年；希乌马岛按面积计第二大岛 989 km²、
    // 科普半岛最早露出海面 —— 均与本库地形条目一致（该批 2026-09-13 当批核实）。凯尔德拉为希乌马岛北岸主要城镇，机场距镇中心直线约 5 km（维基坐标按坐标算）。
    // travel：航程约 30 分钟、每天 1–2 班（airport.ee 凯尔德拉机场页，1 级）；NyxAir 按国家合同执飞（ERR 2024-02-07，2 级）；
    // 罗胡屈拉—赫尔特马约 1 小时 15 分钟（praamid.ee，1 级）。
    // ⚠️ route.source.status = "flight-unknown"：两套解说都**不点名航班号与机型**。2026-09-13 首写。 核实 2026-09-13 当批（content-verifier 独立检索；「北部冰期以来抬升近 90 m」本条核实者未找到，但同批地形核实已对照爱沙尼亚百科原文确认；其余 ok）。
    study: {
    "zh-CN":
      "塔林飞凯尔德拉，全程约一百二十公里，是一条从爱沙尼亚本土飞往希乌马岛的短途航线，半个小时左右就从首都飞到了波罗的海里的一座大岛。" +
      "起飞后飞机向西飞，脚下是西爱沙尼亚低地：地面大多不超过海拔10米，松林、沼泽与海岸草甸交错，海岸线曲曲折折，浅海湾里散布着低矮的小岛。" +
      "这片低地仍在抬升，冰期以来北部已抬升近90米，今天西北部每年仍上升约3毫米，海湾一步步变浅，变成湖泊与湿地。" +
      "越过哈普萨卢以北的海岸，飞机穿过本土与希乌马岛之间的海峡，罗胡屈拉与赫尔特马之间的渡轮就在这片水面上往返。" +
      "前方的希乌马岛按面积计是爱沙尼亚第二大岛，面积约989平方公里，大部分被深绿色的森林覆盖；岛的东南部是浅海湾与小岛交错的湿地，西北部的科普半岛是最早露出海面的高地。" +
      "飞机最后在岛的北部降落，凯尔德拉机场离镇中心直线约5公里，凯尔德拉是希乌马岛北岸的主要城镇。",
    "en-US":
      "Tallinn to Kärdla is about 120 km in all, a short flight from mainland Estonia to the island of Hiiumaa that takes you from the capital to a large Baltic island in around half an hour." +
      " After take-off the aircraft heads west over the West Estonian Lowland, where the ground is mostly no more than 10 m above sea level, pine forest, bog and coastal meadow are interwoven, the coastline twists and turns, and low islets are scattered across shallow bays." +
      " This lowland is still rising: the north has risen by nearly 90 m since the Ice Age, and the north-west is still rising by about 3 mm a year, so bays grow shallower step by step and turn into lakes and wetlands." +
      " Past the coast north of Haapsalu, the aircraft crosses the strait between the mainland and Hiiumaa, where the ferry shuttles back and forth between Rohuküla and Heltermaa." +
      " Ahead, Hiiumaa is Estonia's second-largest island by area, about 989 km², mostly covered in dark green forest; the south-east is a wetland of shallow bays and islets, and the Kõpu peninsula in the north-west is the high ground that emerged from the sea first." +
      " The aircraft finally lands in the north of the island; Kärdla Airport is about 5 km in a straight line from the town centre, and Kärdla is the main town on Hiiumaa's north coast.",
    },
    travel: {
    "zh-CN":
      "塔林飞凯尔德拉约30分钟，每天有一到两班，按国家合同运营，班期以机场公布为准。" +
      "也可以从本土的罗胡屈拉坐渡轮到希乌马岛的赫尔特马，约1小时15分钟；罗胡屈拉在哈普萨卢附近，夏季周末自驾上船最好提前预订船位。" +
      "凯尔德拉机场离镇中心直线约5公里。岛上班车不多，去科普灯塔和岛上各处的海岸，自驾或骑车更方便。" +
      "全程在爱沙尼亚境内，同用欧元、不过边检；冬季风大时，航班与渡轮都可能受影响。",
    "en-US":
      "Tallinn to Kärdla takes about 30 minutes, with one or two flights a day, run under a state contract; check the airport for current schedules." +
      " You can also take the ferry from Rohuküla on the mainland to Heltermaa on Hiiumaa, about 1 hour 15 minutes; Rohuküla is near Haapsalu, and on summer weekends drivers should book a place on the ferry in advance." +
      " Kärdla Airport is about 5 km in a straight line from the town centre. Buses on the island are infrequent, so a car or a bicycle is the easiest way to reach the Kõpu lighthouse and the island's coasts." +
      " The whole trip is within Estonia, with the euro at both ends and no border checks; in strong winter winds both flights and ferries can be affected.",
    },
  },
};
