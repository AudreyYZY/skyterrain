import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "mnl-ceb": {
    study: {
    "zh-CN":
      "马尼拉飞宿务，是菲律宾国内客流量最大的航线，全程约570公里，是连接吕宋岛与米沙鄄群岛核心城市的空中通道，全天有多个航班往返两地。飞机离开马尼拉后向东南飞行，越过吕宋岛南部丘陵地带后进入米沙鄄海域，飞越锡布延海开阔水面，脚下星罗棋布分布着大小岛屿。" +
      "飞机继续向东南飞行，逐渐接近宿务岛，最终降落在宿务——菲律宾历史最悠久的城市，坐落于宿务岛东岸，是米沙鄄群岛的经济与旅游枢纽，1521年麦哲伦船队曾登陆于此。",
    "en-US":
      "Flying from Manila to Cebu is the Philippines' busiest domestic route, spanning about 570 km, an air corridor linking Luzon with the core city of the Visayas. After leaving Manila the flight heads southeast, crossing the hilly terrain of southern Luzon before entering Visayan waters and flying over the open Sibuyan Sea." +
      " The flight continues southeast, approaching Cebu Island, before landing in Cebu — the oldest city in the Philippines, on the east coast of Cebu Island, an economic and tourism hub for the Visayas, where Magellan's expedition first landed in 1521.",
    },
    // travel sources: 全四段（study/travel × 中英）: 1521 年麦哲伦船队抵达宿务；马尼拉—宿务为菲律宾最繁忙国内线。核实 2026-09-11
    travel: {
    "zh-CN":
      "马尼拉到宿务飞约95分钟，同一时区，是宿务太平洋航空运营的国内航班之一（全天多班），是菲律宾客流量最高的国内航线。尼诺伊·阿基诺国际机场距马尼拉市区约7公里；麦克坦—宿务国际机场距宿务市区约16公里。",
    "en-US":
      "Manila to Cebu is about 95 minutes, same time zone, operated by Cebu Pacific (multiple flights daily) as one of the Philippines' domestic routes, and the country's busiest domestic route by passenger volume. Ninoy Aquino International Airport is about 7 km from central Manila; Mactan-Cebu International Airport is about 16 km from central Cebu City.",
    },
  },


  "mnl-pps": {
    study: {
    "zh-CN":
      "马尼拉飞普林塞萨港，是连接吕宋岛与巴拉望岛的主要航线，全程约590公里，是菲律宾生态旅游客流量增长最快的国内航线之一。飞机离开马尼拉后向西南飞行，越过民都洛海峡开阔水域，脚下先掠过民都洛岛山地轮廓。" +
      "飞机继续向西南飞行，跨越苏禄海北部海域后接近巴拉望岛，蜿蜒海岸线与茂密热带雨林逐渐显现，最终降落在普林塞萨港——巴拉望省首府，是探索普林塞萨港地下河与巴拉望岛喀斯特地貌的核心门户，也是菲律宾知名的“生态之都”。",
    "en-US":
      "Flying from Manila to Puerto Princesa is the main route linking Luzon with Palawan, spanning about 590 km. After leaving Manila the flight heads southwest, crossing the open waters of the Mindoro Strait, the mountainous outline of Mindoro Island passing below." +
      " The flight continues southwest across the northern Sulu Sea, approaching Palawan, before landing in Puerto Princesa, capital of Palawan Province and the core gateway to the Puerto Princesa Underground River and Palawan's karst landscapes.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程约 590 km 与大圆一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "马尼拉到普林塞萨港飞约90分钟，同一时区，是宿务太平洋航空运营的国内航班之一。尼诺伊·阿基诺国际机场距马尼拉市区约7公里；普林塞萨港国际机场距市区约4公里。",
    "en-US":
      "Manila to Puerto Princesa is about 90 minutes, same time zone, operated by Cebu Pacific as one of the Philippines' domestic routes. Ninoy Aquino International Airport is about 7 km from central Manila; Puerto Princesa International Airport is about 4 km from the city centre.",
    },
  },

  "mnl-mph": {
    study: {
    "zh-CN":
      "马尼拉飞长滩岛，是马尼拉都会区通往菲律宾知名海岛度假地的热门航线，全程约315公里，节假日期间航班尤为密集。飞机离开马尼拉后向西南飞行，越过民都洛岛北部山地后进入锡布延海开阔水域，脚下海水由浅蓝逐渐过渡为深蓝。" +
      "飞机继续向南飞行，逐渐接近阿克兰省海岸，白沙海岸线的轮廓在降落前隐约可见，最终降落在卡蒂克兰——长滩岛对岸的门户机场，游客需转乘渡船约10分钟抵达长滩岛，是菲律宾最受欢迎的海岛度假目的地之一。",
    "en-US":
      "Flying from Manila to Boracay is a popular route linking Metro Manila with one of the Philippines' best-known island resorts, spanning about 315 km. After leaving Manila the flight heads southwest, crossing the mountainous terrain of northern Mindoro before entering the open waters of the Sibuyan Sea." +
      " The flight continues south, approaching the coast of Aklan Province, before landing at Caticlan, the gateway airport opposite Boracay Island, from where visitors take a roughly 10-minute ferry to reach Boracay, one of the Philippines' most popular island resort destinations.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程约 315 km 与大圆一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "马尼拉到长滩岛飞约75分钟，同一时区，是宿务太平洋航空运营的国内航班之一。尼诺伊·阿基诺国际机场距马尼拉市区约7公里；卡蒂克兰机场距长滩岛需转乘渡船约10分钟。",
    "en-US":
      "Manila to Boracay is about 75 minutes, same time zone, operated by Cebu Pacific as one of the Philippines' domestic routes. Ninoy Aquino International Airport is about 7 km from central Manila; from Caticlan Airport, a roughly 10-minute ferry ride is needed to reach Boracay Island.",
    },
  },

  "mnl-usu": {
    study: {
    "zh-CN":
      "马尼拉飞科隆，是连接吕宋岛与巴拉望岛北部卡拉棉群岛的航线，全程约285公里，是探索科隆石灰岩岛礁地貌最便捷的空中通道，也是布桑加机场客流量最大的航线。飞机离开马尼拉后向西南飞行，越过民都洛海峡开阔水域，脚下岛屿轮廓逐渐稀疏。" +
      "飞机继续向西南飞行，逐渐接近卡拉棉群岛，星罗棋布的石灰岩小岛点缀在碧蓝海面之上，最终降落在布桑加岛——科隆—卡拉棉群岛的核心岛屿，岛屿周边分布众多石灰岩崖壁地貌与二战沉船潜水点。",
    "en-US":
      "Flying from Manila to Coron links Luzon with the Calamian Islands in northern Palawan, spanning about 285 km. After leaving Manila the flight heads southwest, crossing the open waters of the Mindoro Strait." +
      " The flight continues southwest, approaching the Calamian Islands, before landing on Busuanga Island, the core island of the Coron/Calamian group, ringed by numerous limestone cliff landforms and WWII shipwreck dive sites.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程距离原写约 315 km，按大圆改为约 285 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "马尼拉到科隆飞约65分钟，同一时区，是菲律宾航空快线（PAL Express）运营的国内航班之一。尼诺伊·阿基诺国际机场距马尼拉市区约7公里；布桑加机场距科隆镇区约30公里，需转乘公路前往。",
    "en-US":
      "Manila to Coron is about 65 minutes, same time zone, operated by PAL Express as one of the Philippines' domestic routes. Ninoy Aquino International Airport is about 7 km from central Manila; Busuanga Airport is about 30 km from Coron town, requiring a road transfer.",
    },
  },

  "mnl-tag": {
    study: {
    "zh-CN":
      "马尼拉飞塔比拉兰，是连接吕宋岛与米沙鄄群岛保和岛的航线，全程约630公里，是探索巧克力山最直接的空中通道之一，也是保和岛旅游业发展的重要空中支撑。飞机离开马尼拉后向东南飞行，越过米沙鄄群岛北部海域，接近保和岛前，密集分布的巧克力山锥形丘陵在脚下渐次显现。" +
      "飞机继续向南飞行，保和岛海岸线与近岸浅水珊瑚礁逐渐清晰可辨，最终降落在邦劳岛——保和—邦劳国际机场所在地，是探索巧克力山与保和岛自然景观的核心门户。",
    "en-US":
      "Flying from Manila to Tagbilaran links Luzon with Bohol Island in the Visayas, spanning about 630 km. After leaving Manila the flight heads southeast, crossing the northern waters of the Visayas; approaching Bohol, the densely packed conical mounds of the Chocolate Hills gradually come into view below." +
      " The flight continues south, landing on Panglao Island, home to Bohol-Panglao International Airport and the core gateway to the Chocolate Hills and Bohol's natural landscapes.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程约 630 km 与大圆一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "马尼拉到塔比拉兰飞约100分钟，同一时区，是宿务太平洋航空运营的国内航班之一。尼诺伊·阿基诺国际机场距马尼拉市区约7公里；保和—邦劳国际机场距塔比拉兰市区约18公里。",
    "en-US":
      "Manila to Tagbilaran is about 100 minutes, same time zone, operated by Cebu Pacific as one of the Philippines' domestic routes. Ninoy Aquino International Airport is about 7 km from central Manila; Bohol-Panglao International Airport is about 18 km from central Tagbilaran.",
    },
  },

  "mnl-drp": {
    study: {
    "zh-CN":
      "马尼拉飞黎牙实比，是连接马尼拉都会区与比科尔半岛的航线，全程约320公里，是眺望马荣火山对称锥形最便捷的空中通道。飞机离开马尼拉后向东南飞行，越过吕宋岛南部比科尔半岛狭长的地形，脚下丘陵与稻田交织分布。" +
      "接近黎牙实比前，马荣火山近乎完美的对称锥体逐渐显现在窗外——这座菲律宾最活跃的火山椭圆度指数全球层状火山中最低、400年间记录喷发逾49次，飞机最终降落在黎牙实比——阿尔拜省首府，眺望马荣火山的核心门户城市。",
    "en-US":
      "Flying from Manila to Legazpi links Metro Manila with the Bicol Peninsula, spanning about 320 km. After leaving Manila the flight heads southeast, crossing the narrow terrain of the Bicol Peninsula in southern Luzon, hills and rice paddies interweaving below." +
      " Approaching Legazpi, the near-perfectly symmetrical cone of Mayon Volcano gradually comes into view — the Philippines' most active volcano, with the lowest ellipticity index of any stratovolcano globally — before the flight lands in Legazpi, capital of Albay Province and the core gateway for viewing Mayon.",
    },
    // travel sources: 全四段（study/travel × 中英）: 马荣火山椭圆度最低、400 年喷发逾 49 次与本库一致（未沿用已删的「首座国家公园」）。核实 2026-09-11
    travel: {
    "zh-CN":
      "马尼拉到黎牙实比飞约60分钟，同一时区，是宿务太平洋航空运营的国内航班之一。尼诺伊·阿基诺国际机场距马尼拉市区约7公里；比科尔国际机场距黎牙实比市区约8公里。",
    "en-US":
      "Manila to Legazpi is about 60 minutes, same time zone, operated by Cebu Pacific as one of the Philippines' domestic routes. Ninoy Aquino International Airport is about 7 km from central Manila; Bicol International Airport is about 8 km from central Legazpi.",
    },
  },


  "can-mnl": {
    // study sources: 全四段（study/travel × 中英）: 皮纳图博 1991 年喷发为 20 世纪第二大（仅次于 1912 年诺瓦鲁普塔，USGS 转述），与本库 terrain/mount-pinatubo 一致。核实 2026-09-11
    study: {
    "zh-CN":
      "广州飞马尼拉，向东南横跨南海，直抵吕宋岛。起飞后不久即进入南海——飞机全程大部分时间都在这片海域上空，海面上零星可见渔船与岛礁。" +
      "临近菲律宾时，飞机掠过吕宋岛西部的皮纳图博火山：1991年的喷发是20世纪全球第二大火山喷发，喷出的大量火山灰一度使全球平均气温短暂下降；如今火山口积水形成了一座宁静的火口湖。" +
      "越过皮纳图博火山后不久，飞机便转向东南方向进近，降落在吕宋岛中西部的马尼拉。从中国大陆到菲律宾群岛，一趟航班穿越了南海最繁忙的空中航线之一。",
    "en-US":
      "Guangzhou to Manila flies south-east across the South China Sea, straight to Luzon Island. Soon after take-off the plane enters the South China Sea, spending most of the flight over open water dotted with fishing boats and reefs and islets." +
      " As it nears the Philippines the flight passes Mount Pinatubo on western Luzon: its 1991 eruption was the second-largest volcanic eruption of the 20th century, and the huge amount of ash it threw into the atmosphere briefly cooled the global average temperature; the crater now holds a calm caldera lake." +
      " Shortly after passing Pinatubo the plane turns south-east on approach and lands at Manila in west-central Luzon. From mainland China to the Philippine archipelago, this flight crosses one of the busiest air corridors over the South China Sea.",
    },
    travel: {
    "zh-CN":
      "广州到马尼拉约2小时35分钟，两地无时差（均为UTC+8）。马尼拉全年高温多湿，属热带气候，5-10月为雨季，台风频发，出行前建议留意天气预警。" +
      "尼诺伊·阿基诺国际机场距市中心约7公里，但马尼拉市区交通常年拥堵，机场到市区车程视路况可能长达1小时以上；网约车和机场出租车是常见选择。市内标志性景点包括西班牙殖民时期的王城区（Intramuros）、黎刹公园，吉普尼（jeepney）是当地特色公共交通。" +
      "菲律宾近年对中国公民实行短期免签政策，具体天数与条件以菲律宾移民局最新公布为准，出行前建议再次核实。",
    "en-US":
      "Guangzhou to Manila takes about 2 hours 35 minutes, with no time difference (both are UTC+8). Manila is hot and humid year-round under a tropical climate, with a rainy season from May to October that brings frequent typhoons — check weather warnings before you travel." +
      " Ninoy Aquino International Airport is only about 7 km from the city centre, but Manila traffic is chronically congested, so the ride into town can take over an hour depending on conditions; ride-hailing apps and airport taxis are common choices. Landmark sights include the Spanish colonial-era Intramuros and Rizal Park, and jeepneys are the city's distinctive form of public transport." +
      " The Philippines has in recent years offered short-term visa-free entry for Chinese citizens — check the Philippine Bureau of Immigration's latest rules on the exact duration and conditions before you travel.",
    },
  },
};
