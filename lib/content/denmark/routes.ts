import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "cph-aar": {
    study: {
    "zh-CN":
      "哥本哈根飞奥胡斯，是一趟从西兰岛跨海飞向日德兰半岛东部的航线。起飞后不久，脚下是哥本哈根都会区与厄勒海峡，飞机随即跨越卡特加特海峡南部海域，进入日德兰半岛东侧的迪厄斯兰半岛。" +
      "临近奥胡斯前，脚下出现莫尔斯山地——丹麦少有的明显冰碛丘陵地貌，末次冰期终碛垄留下的起伏丘陵间散布着草地与小型湖泊，海岸线曲折延伸入卡特加特海峡，与丹麦其他地区一望无际的平坦地势形成鲜明对比。飞机随后降落在莫尔斯山地西侧不远处的奥胡斯机场。",
    "en-US":
      "Flying from Copenhagen to Aarhus crosses from Zealand over the sea to the eastern side of the Jutland peninsula. Soon after take-off, the Copenhagen metro area and the Øresund lie below, and the flight then crosses the southern Kattegat to reach the Djursland peninsula on Jutland's eastern flank." +
      " Approaching Aarhus, Mols Bjerge comes into view below — one of the few areas of pronounced moraine hill relief in Denmark, its rolling terminal-moraine ridges dotted with grassland and small lakes, its coastline winding out into the Kattegat, standing in sharp contrast to the flat terrain typical elsewhere in the country. The flight then descends into Aarhus Airport, just west of Mols Bjerge.",
    },
    // travel sources: 全四段（study/travel × 中英）: 莫尔斯山终碛丘陵与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "哥本哈根到奥胡斯飞约40分钟，同一时区，是北欧航空运营的国内航班之一（ATR 72机型），也可选择约3小时的城际火车。奥胡斯机场离市区约35公里。奥胡斯是按人口计丹麦第二大城市，是探索莫尔斯山地与锡尔克堡湖区的理想基地。丹麦属申根区，多数国家公民短期旅游按申根区规定执行。",
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
    // travel sources: 全四段（study/travel × 中英）: 雷比尔荒原、利姆峡湾与本库一致。核实 2026-09-11
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
    // travel sources: 全四段（study/travel × 中英）: 菲英岛「丹麦花园」、日德兰荒原与本库一致。核实 2026-09-11
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
      "降落前脚下展开阿尔明丁根森林高地——岛屿中部的花岗岩高地，骑士峰海拔162米，是丹麦全境少数大面积可见花岗岩基岩的地区之一，前寒武纪花岗岩基岩是波罗的地盾向南延伸出露的一部分，茂密森林与裸露岩体交织，与丹麦本土常见的平坦冰碛地貌截然不同，飞机随后降落在岛屿西岸的龙讷，博恩霍尔姆岛也因阳光充足而被称为“丹麦的阳光岛”。",
    "en-US":
      "Flying from Copenhagen to Bornholm crosses the open Baltic Sea to reach Denmark's easternmost, isolated island. After take-off the flight heads south-east across open Baltic waters, arriving over Bornholm after about half an hour." +
      " Before landing, the Almindingen forest highland comes into view below — a granite highland at the island's centre; its peak, Rytterknægten, reaches 162 m, and the area is one of the only places in Denmark where granite bedrock is exposed over a wide area, dense forest interwoven with bare rock, quite unlike the flat moraine landforms typical of mainland Denmark. The flight then descends into Rønne on the island's western shore.",
    },
    // travel sources: 全四段（study/travel × 中英）: 阿尔明丁根「少数大面积可见花岗岩基岩的地区之一」（#264 已修）、骑士峰 162 m 与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "哥本哈根到博恩霍尔姆飞约35分钟，同一时区，由丹麦航空运输（Bornholmerflyet 品牌）以政府招标的公共服务义务航线形式运营，也可选择乘渡轮往返。博恩霍尔姆机场离龙讷市区约5公里。博恩霍尔姆岛因阳光充足被称为“丹麦的阳光岛”，是探索花岗岩海岸与历史城堡的理想目的地。丹麦属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Copenhagen to Bornholm is about 35 minutes, same time zone, operated by Danish Air Transport under the Bornholmerflyet brand as a state-tendered public service obligation route; a ferry is another option. Bornholm Airport is about 5 km from Rønne. Known as \"Denmark's sunshine island\" for its abundant sunshine, Bornholm is an ideal destination for exploring the granite coast and its historic castle. Denmark is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "pek-cph": {
    // study sources: 全四段（study/travel × 中英）: 凯斯楚普机场在阿迈厄岛；丹麦服务费含在账单。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞哥本哈根，向西北横跨亚欧大陆，全程约七千五百公里，终点在波罗的海入口的厄勒海峡边。起飞后爬升越过燕山，进入蒙古高原南缘的戈壁——这里年降水多在两百毫米以下，地表以砾石和裸岩为主，风把细沙吹走后留下坚硬的砾幂；河流大多是季节性的，雨后短暂过水随即干涸，昼夜温差常超过三十度，越往西北，砾漠越多地让位给草原与稀树草地。接着是西西伯利亚平原，地势极其平坦，河网与沼泽密布，春季融雪时大范围积水。翻过乌拉尔山脉之后，飞机进入一片开阔低地——这条南北绵延两千多公里的古老山系海拔不高，却被公认为划分亚洲与欧洲的界线；它形成于约三亿年前的一次大陆碰撞，此后长期剥蚀，如今山脊平缓，两侧的植被与土壤类型截然不同。再往西是东欧平原，开阔低地上田块规整，河流舒缓。最后跨过波罗的海西口，降落在哥本哈根近旁阿迈厄岛上的卡斯特鲁普机场。",
    "en-US":
      "Beijing to Copenhagen runs north-west across the Eurasian landmass, about 7,500 km in all, ending beside the Øresund at the mouth of the Baltic. After take-off the aircraft climbs over the Yan Mountains into the Gobi Desert on the southern edge of the Mongolian Plateau, where most years bring less than 200 millimetres of rain and the surface is gravel and bare rock, the fine sand long since stripped away by wind to leave a hard pavement; the rivers are mostly seasonal, running briefly after rain and then drying out, the daily temperature can swing more than thirty degrees, and the farther north-west the flight goes the more the gravel gives way to steppe. Next comes the West Siberian Plain, remarkably flat and dense with rivers and marshes, flooding widely when the snow melts in spring. Past the Ural Mountains the flight enters an open lowland: the range runs more than two thousand kilometres north to south and is not high, yet it is the accepted divide between Asia and Europe; it rose in a continental collision some three hundred million years ago and has been eroded ever since, so its ridges are gentle and the vegetation and soils on its two sides are quite different. Farther west lies the East European Plain, an open lowland of regular fields and slow rivers. The route finally crosses the western mouth of the Baltic and lands at Kastrup Airport on the island of Amager beside Copenhagen.",
    },
    travel: {
    "zh-CN":
      "北京到哥本哈根约10小时，时差6-7小时（丹麦夏令时期间6小时）。丹麦全年温和多雨，四季都建议带一件防水外套，自行车是当地最常见的出行方式之一。" +
      "哥本哈根机场距市中心约8公里，地铁M2线约15分钟直达市区。市内公共交通发达，Rejsekort交通卡或带NFC的银行卡均可直接刷卡乘车。小美人鱼像、新港、蒂沃利公园是市内三大代表性景点，步行或骑行均可到达。" +
      "丹麦属申根区，签证按国籍不同、以丹麦外交部/驻华使领馆最新公布为准，行前务必核实并预留办理时间。哥本哈根餐厅普遍不设小费文化（服务费通常已含在账单中），无需额外支付。",
    "en-US":
      "Beijing to Copenhagen takes about 10 hours, with a 6-7 hour time difference (6 hours during Danish summer time). Denmark is mild and rainy year-round — a waterproof jacket is worth packing in any season, and cycling is one of the most common ways to get around." +
      " Copenhagen Airport is about 8 km from the city centre; the M2 metro line takes about 15 minutes into town. Public transport is extensive — a Rejsekort card or a contactless bank card both work directly on buses, trains and the metro. The Little Mermaid statue, Nyhavn and Tivoli Gardens are the city's three signature sights, all reachable on foot or by bike." +
      " Denmark is in the Schengen area; visa rules vary by nationality — check the latest from the Danish Ministry of Foreign Affairs or its consulate for your location and allow time to arrange one. Tipping is not customary at Copenhagen restaurants (service is generally included in the bill), so no extra payment is expected.",
    },
  },
};
