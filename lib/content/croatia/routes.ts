import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "zag-spu": {
    // study sources: 全程距离：按两端机场坐标算大圆约 246 km，原写约 370 km（长出 51%，像公路里程）已改为约 250 km —— check:distance 报出。其余断言留待欧洲国内航线批核实。核实 2026-09-11
    study: {
    "zh-CN":
      "萨格勒布飞斯普利特，全程约250公里，飞行时间约50分钟，是克罗地亚最繁忙的国内航线之一，连接首都与达尔马提亚地区最大城市。飞机离开萨格勒布后向西南飞行，先掠过潘诺尼亚平原西缘的丘陵地带，逐渐进入戈尔斯基科塔尔——克罗地亚森林覆盖最茂密的山地，连绵的林海取代了平原的农田景观。" +
      "飞机继续向南穿越第纳里克山系的喀斯特高地，逐渐接近亚得里亚海岸，脚下海岸线呈现出与海岸走向平行排列的狭长岛屿——这正是“达尔马提亚型海岸”的标志性景观，最终降落在斯普利特，一座建于古罗马皇帝退位宫殿之上的海滨古城。",
    "en-US":
      "Flying from Zagreb to Split spans about 250 km and about 50 minutes, one of Croatia's busiest domestic routes, linking the capital with Dalmatia's largest city. After leaving Zagreb the flight heads southwest, first crossing hills on the western edge of the Pannonian Plain before entering Gorski Kotar, Croatia's most densely forested mountain region, its unbroken forest cover replacing the plain's farmland below." +
      " The flight continues south across the karst highlands of the Dinaric range, approaching the Adriatic coast, where the shoreline below shows elongated islands running parallel to the coast — the signature pattern of a 'Dalmatian-type coast' — before landing in Split, a seaside city built atop a Roman emperor's retirement palace.",
    },
    // travel sources: 全四段（study/travel × 中英）: 戈尔斯基科塔尔、达尔马提亚型海岸、戴克里先宫与本库一致；未提邻国。核实 2026-09-11
    travel: {
    "zh-CN":
      "萨格勒布到斯普利特飞约50分钟，同一时区，是克罗地亚航空运营的国内航班之一，是克罗地亚最繁忙的国内航线之一。萨格勒布机场距市区约17公里；斯普利特机场距市区约19公里。",
    "en-US":
      "Zagreb to Split is about 50 minutes, same time zone, operated by Croatia Airlines as one of Croatia's busiest domestic routes. Zagreb Airport is about 17 km from central Zagreb; Split Airport is about 19 km from the city centre.",
    },
  },

  "zag-dbv": {
    study: {
    "zh-CN":
      "萨格勒布飞杜布罗夫尼克，全程约420公里，飞行时间约65分钟，是克罗地亚南北跨度最大的国内航线之一，连接首都与南达尔马提亚沿海古城。飞机离开萨格勒布后向南飞行，先掠过潘诺尼亚平原与戈尔斯基科塔尔山地，随后进入迪纳拉山——克罗地亚最高的山地，锡尼亚尔峰灰白色的石灰岩山脊在脚下清晰可辨。" +
      "飞机继续向东南飞行，逐渐接近内雷特瓦河三角洲，绿色的湿地与规整的灌溉农田在脚下展开，与两侧干燥的喀斯特山地形成鲜明反差，最终沿达尔马提亚海岸南下，降落在杜布罗夫尼克——中世纪拉古萨共和国的古都，1979年老城列入世界遗产名录。",
    "en-US":
      "Flying from Zagreb to Dubrovnik spans about 420 km and about 65 minutes, one of Croatia's longest north–south domestic routes, linking the capital with the historic walled city of southern Dalmatia. After leaving Zagreb the flight heads south, first crossing the Pannonian Plain and the mountains of Gorski Kotar before entering Dinara, Croatia's highest massif, the grey-white limestone ridge of Sinjal peak clearly visible below." +
      " The flight continues southeast, approaching the Neretva Delta, its green wetlands and orderly irrigated farmland spreading out below in sharp contrast with the dry karst mountains on either side, before tracking south along the Dalmatian coast to land in Dubrovnik, the old capital of the medieval Republic of Ragusa, its Old Town inscribed on the World Heritage List in 1979.",
    },
    // travel sources: 全四段（study/travel × 中英）: 迪纳拉 1831 m、内雷特瓦三角洲、杜布罗夫尼克 1979 年列入 UNESCO 与本库一致；未提邻国。核实 2026-09-11
    travel: {
    "zh-CN":
      "萨格勒布到杜布罗夫尼克飞约65分钟，同一时区，是克罗地亚航空运营的国内航班之一，是克罗地亚跨度最大的国内航线之一。萨格勒布机场距市区约17公里；杜布罗夫尼克机场距市区约20公里。",
    "en-US":
      "Zagreb to Dubrovnik is about 65 minutes, same time zone, operated by Croatia Airlines as one of Croatia's longest domestic routes. Zagreb Airport is about 17 km from central Zagreb; Dubrovnik Airport is about 20 km from the city centre.",
    },
  },

  "zag-zad": {
    // study sources: 全程距离：大圆约 190 km，原写约 250 km（长出 31%）已改为约 200 km —— check:distance 报出。其余断言留待欧洲国内航线批核实。核实 2026-09-11
    study: {
    "zh-CN":
      "萨格勒布飞扎达尔，全程约200公里，飞行时间约45分钟，连接首都与北达尔马提亚门户城市。飞机离开萨格勒布后向西南飞行，先掠过戈尔斯基科塔尔的茂密森林，随后进入韦莱比特山——克罗地亚面积最大的山脉，山体如一道灰白色屏障紧贴海岸线延伸。" +
      "飞机继续向南飞行，兹尔曼尼亚河因矿物质呈现的翠绿色河道在喀斯特峡谷中蜿蜒可辨，与两岸白色岩壁形成鲜明对比，最终降落在扎达尔——一座保留丰富古罗马遗迹、以海之风琴闻名的沿海古城。",
    "en-US":
      "Flying from Zagreb to Zadar spans about 200 km and about 45 minutes, linking the capital with the gateway city of northern Dalmatia. After leaving Zagreb the flight heads southwest, first crossing the dense forests of Gorski Kotar before entering Velebit, Croatia's largest mountain range, its massif forming a grey-white wall hugging the coastline." +
      " The flight continues south, the emerald-green channel of the Zrmanja River winding through its karst canyon clearly visible against the white limestone walls on either side, before landing in Zadar, a coastal town rich in Roman remains and famous for its Sea Organ.",
    },
    // travel sources: 全四段（study/travel × 中英）: 韦莱比特、兹尔曼尼亚翠绿河水、扎达尔海之风琴与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "萨格勒布到扎达尔飞约45分钟，同一时区，是克罗地亚航空运营的国内航班之一（Dash 8 Q400机型）。萨格勒布机场距市区约17公里；扎达尔机场距市区约8公里。",
    "en-US":
      "Zagreb to Zadar is about 45 minutes, same time zone, operated by Croatia Airlines (Dash 8 Q400) as one of Croatia's domestic routes. Zagreb Airport is about 17 km from central Zagreb; Zadar Airport is about 8 km from the city centre.",
    },
  },

  "zag-puy": {
    study: {
    "zh-CN":
      "萨格勒布飞普拉，全程约210公里，飞行时间约40分钟，连接首都与伊斯特拉半岛最大城市。飞机离开萨格勒布后向西南飞行，先掠过戈尔斯基科塔尔——阿尔卑斯山系与第纳里克山系的过渡地带，森林覆盖近乎连续。" +
      "飞机继续向西飞行，逐渐接近乌奇卡山——伊斯特拉半岛的最高点，山体呈弧形横亘在半岛与克瓦内尔湾之间，越过山体后，伊斯特拉红土海岸与蔚蓝的亚得里亚海逐渐显现，最终降落在普拉——保留古罗马竞技场的伊斯特拉半岛门户城市。",
    "en-US":
      "Flying from Zagreb to Pula spans about 210 km and about 40 minutes, linking the capital with the largest city on the Istrian peninsula. After leaving Zagreb the flight heads southwest, first crossing Gorski Kotar, the transition zone between the Alpine and Dinaric mountain systems, its forest cover nearly continuous." +
      " The flight continues west, approaching Učka, the highest point on the Istrian peninsula, its massif arcing between the peninsula and the Kvarner Gulf; past the range, Istria's red-soil coast and the deep-blue Adriatic come into view, before landing in Pula, gateway to the Istrian peninsula and home to a well-preserved Roman amphitheater.",
    },
    // travel sources: 全四段（study/travel × 中英）: 戈尔斯基科塔尔为阿尔卑斯—第纳里克过渡带、乌奇卡为伊斯特拉最高点与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "萨格勒布到普拉飞约40分钟，同一时区，是克罗地亚航空运营的国内航班之一（Dash 8 Q400机型）。萨格勒布机场距市区约17公里；普拉机场距市区约6公里。",
    "en-US":
      "Zagreb to Pula is about 40 minutes, same time zone, operated by Croatia Airlines (Dash 8 Q400) as one of Croatia's domestic routes. Zagreb Airport is about 17 km from central Zagreb; Pula Airport is about 6 km from the city centre.",
    },
  },

  "zag-osi": {
    study: {
    "zh-CN":
      "萨格勒布飞奥西耶克，全程约220公里，飞行时间约40分钟，连接首都与斯拉沃尼亚地区最大城市，是克罗地亚一条完全飞越内陆潘诺尼亚平原的国内航线。飞机离开萨格勒布后向东飞行，脚下地势逐渐平坦，麦田、玉米地与向日葵田块交织的农田拼图向东延展，与克罗地亚南部多山的地貌截然不同。" +
      "飞机继续向东飞行，德拉瓦河蜿蜒的河道与两岸的辫状河汊逐渐显现，最终降落在奥西耶克——德拉瓦河畔的斯拉沃尼亚经济文化中心，也是探访科帕齐基里特湿地的门户城市。",
    "en-US":
      "Flying from Zagreb to Osijek spans about 220 km and about 40 minutes, linking the capital with the largest city in Slavonia, a domestic route flown entirely over the inland Pannonian Plain. After leaving Zagreb the flight heads east, the terrain below flattening out into a patchwork of wheat, corn, and sunflower fields, quite different from Croatia's mountainous south." +
      " The flight continues east, the winding channel of the Drava River and its braided side-channels coming into view, before landing in Osijek, Slavonia's economic and cultural center on the Drava and gateway to the Kopački Rit wetland.",
    },
    // travel sources: 全四段（study/travel × 中英）: 潘诺尼亚平原、德拉瓦河与本库一致；承运方已按数据改为 Trade Air 代码共享。核实 2026-09-11
    travel: {
    "zh-CN":
      "萨格勒布到奥西耶克飞约40分钟，同一时区，是Trade Air与克罗地亚航空代码共享运营的国内航班之一。萨格勒布机场距市区约17公里；奥西耶克机场距市区约20公里。",
    "en-US":
      "Zagreb to Osijek is about 40 minutes, same time zone, operated by Trade Air under a Croatia Airlines codeshare as one of Croatia's domestic routes. Zagreb Airport is about 17 km from central Zagreb; Osijek Airport is about 20 km from the city centre.",
    },
  },
};
