import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "han-sgn": {
    study: {
    "zh-CN":
      "河内飞胡志明市，是越南客流量最大的国内航线之一，全程约1160公里，被业内称为越南的“黄金航线”。飞机离开河内后向南飞行，脚下展开红河三角洲——红河及其支流泥沙长期沉积形成的三角形冲积平原，面积约1.5万平方公里，是越南两大农业核心区之一，河内城区即建于三角洲之上。" +
      "飞机继续向南飞行，逐渐掠过西原高原——越南中南部一系列连绵高原的统称，海拔大致在500至1500米之间，玄武岩风化形成的红土广泛覆盖高原表面，大片咖啡种植园清晰可见，飞机最终降落在胡志明市——越南最大城市与经济中心。",
    "en-US":
      "Flying from Hanoi to Ho Chi Minh City is one of Vietnam's busiest domestic routes, spanning about 1,160 km and known in the industry as Vietnam's \"golden route.\" After leaving Hanoi the flight heads south, the Red River Delta unfolding below — a triangular alluvial plain built by long-term sediment deposition from the Red River and its tributaries, covering about 15,000 km² and one of Vietnam's two main agricultural core regions, with Hanoi itself built on the delta." +
      " The flight continues south, passing over the Central Highlands midway — a collective name for a series of connected plateaus in south-central Vietnam at roughly 500–1,500 m elevation, its basalt-weathered red laterite soil widely visible beneath extensive coffee plantations, before the flight lands in Ho Chi Minh City, Vietnam's largest city and economic centre.",
    },
    // travel sources: 全四段（study/travel × 中英）: 红河三角洲约 1.5 万 km²、西原 500–1500 m；全程距离原写约 1000 km，按大圆改为约 1160 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "河内到胡志明市飞约120分钟，同一时区，是越南航空运营的国内航班之一，这条航线是全球客流量最高的国内航线之一。内排机场距河内市区约35公里；新山一机场距胡志明市中心约8公里。这条航线连接越南南北两大门户城市。",
    "en-US":
      "Hanoi to Ho Chi Minh City takes about 120 minutes, same time zone, operated by Vietnam Airlines as one of Vietnam's domestic routes; this route is among the busiest domestic air routes in the world by passenger volume. Noi Bai Airport is about 35 km from central Hanoi; Tan Son Nhat Airport is about 8 km from central Ho Chi Minh City. This route links Vietnam's two great gateway cities in the north and south.",
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
    // travel sources: 全四段（study/travel × 中英）: 长安名胜群 2014 年越南首个混合遗产与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "河内到岘港飞约83分钟，同一时区，是越捷航空运营的国内航班之一。内排机场距河内市区约35公里；岘港国际机场距市中心约3公里。岘港是探索会安古镇与顺化皇城的理想门户。",
    "en-US":
      "Hanoi to Da Nang takes about 83 minutes, same time zone, operated by VietJet Air as one of Vietnam's domestic routes. Noi Bai Airport is about 35 km from central Hanoi; Da Nang International Airport is about 3 km from the city centre. Da Nang is an ideal gateway for the ancient town of Hoi An and the imperial citadel of Hue.",
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
    // travel sources: 全四段（study/travel × 中英）: 湄公河三角洲约 3.9 万 km²「世界最大河流三角洲之一」、富国岛过半为国家公园与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "胡志明市到富国岛飞约65分钟，同一时区，是越捷航空运营的国内航班之一。新山一机场距胡志明市中心约8公里；富国国际机场距阳东镇约15公里。富国岛是越南南部重要的海岛度假目的地。",
    "en-US":
      "Ho Chi Minh City to Phu Quoc takes about 65 minutes, same time zone, operated by VietJet Air as one of Vietnam's domestic routes. Tan Son Nhat Airport is about 8 km from central Ho Chi Minh City; Phu Quoc International Airport is about 15 km from Duong Dong town. Phu Quoc is an important island resort destination in southern Vietnam.",
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
    // travel sources: 全四段（study/travel × 中英）: 无可核数字或排名。核实 2026-09-11
    travel: {
    "zh-CN":
      "河内到芹苴飞约135分钟，同一时区，是越南航空运营的国内航班之一。内排机场距河内市区约35公里；芹苴国际机场距市区约10公里。芹苴是探索凤凰水上市场的理想门户。",
    "en-US":
      "Hanoi to Can Tho takes about 135 minutes, same time zone, operated by Vietnam Airlines as one of Vietnam's domestic routes. Noi Bai Airport is about 35 km from central Hanoi; Can Tho International Airport is about 10 km from the city centre. Can Tho is an ideal gateway for the Cai Rang floating market.",
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
    // travel sources: 全四段（study/travel × 中英）: 顺化 1802–1945 阮朝都城、1993 年列入 UNESCO。核实 2026-09-11
    travel: {
    "zh-CN":
      "河内到顺化飞约70分钟，同一时区，是越南航空运营的国内航班之一，每日往返约3班。内排机场距河内市区约35公里；富牌国际机场距顺化市中心约15公里。顺化是探索阮朝皇城与皇陵的理想门户。",
    "en-US":
      "Hanoi to Hue takes about 70 minutes, same time zone, operated by Vietnam Airlines as one of Vietnam's domestic routes, with about 3 round trips daily. Noi Bai Airport is about 35 km from central Hanoi; Phu Bai International Airport is about 15 km from central Hue. Hue is an ideal gateway for the Nguyen dynasty's imperial citadel and royal tombs.",
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
    // travel sources: 全四段（study/travel × 中英）: 竹子航空 2026-08-01 起停止定期航班属实 —— 会过期的现状，下轮复核。核实 2026-09-11
    travel: {
    "zh-CN":
      "岘港到胡志明市飞约90分钟，同一时区，是越捷航空运营的国内航班之一（原竹子航空已于2026年8月停止全部定期航班）。岘港国际机场距市中心约3公里；新山一机场距胡志明市中心约8公里。这条航线是连接越南中部与南部的重要空中通道之一。",
    "en-US":
      "Da Nang to Ho Chi Minh City takes about 90 minutes, same time zone, operated by VietJet Air as one of Vietnam's domestic routes (Bamboo Airways, which used to fly it, stopped all scheduled service in August 2026). Da Nang International Airport is about 3 km from the city centre; Tan Son Nhat Airport is about 8 km from central Ho Chi Minh City. This route is an important air link between central and southern Vietnam.",
    },
  },

  "pvg-han": {
    // study sources: 全四段（study/travel × 中英）: 南岭为长江 / 珠江分水岭，与本库 terrain/nanling 一致；红河三角洲。核实 2026-09-11
    study: {
    "zh-CN":
      "上海飞河内，从长江以南的丘陵地带一路向西南，跨过南岭抵达红河三角洲。起飞后，飞机进入江南丘陵——长江以南、南岭以北的低山丘陵地带，黄山、庐山等断块山地零散分布其间。继续向西南，飞机翻越南岭——一条大致东西走向的山脉，是长江水系与珠江水系的分水岭，也是中国地理上华中与华南的传统分界。越过南岭后，地势逐渐降低，进入中南半岛北部山地，河流深切、地形起伏明显。最后，飞机下降进入红河三角洲——红河及其支流长期携带泥沙淤积而成的三角形平原，越南首都河内就坐落在三角洲西北部边缘。三个多小时的航程，把长江以南的丘陵与东南亚大河三角洲连接了起来。",
    "en-US":
      "Shanghai to Hanoi flies south-west from the hill country south of the Yangtze, across the Nanling range, to the Red River Delta. After take-off the flight crosses the Jiangnan Hills, the low hill country south of the Yangtze and north of the Nanling, dotted with fault-block mountains such as Huangshan and Lushan. Continuing south-west, the flight crosses the Nanling, a roughly east–west range that forms the watershed between the Yangtze and Pearl River systems and traditionally marks the boundary between central and southern China. Beyond the Nanling the land descends into the mountains of northern mainland Southeast Asia, cut by deep river valleys with pronounced relief. Finally the plane descends into the Red River Delta, a triangular plain built up by long-term silting from the Red River and its tributaries; Vietnam's capital, Hanoi, sits at the delta's north-western edge. In a little over three hours, the flight links the hill country south of the Yangtze to a great river delta in Southeast Asia.",
    },
    travel: {
    "zh-CN":
      "上海到河内约三小时十五分钟。河内属热带季风气候，11月至次年3月较凉爽干燥，是较适宜的旅游季节；4–10月闷热多雨。市内交通以出租车、网约车（Grab）和摩托车为主，老城区街道狭窄、摩托车流量大，过马路建议匀速直行，让车流自行避让。还剑湖、老城36行街、文庙（越南首座国子监）是常见的游览点；进入寺庙须脱鞋、着装得体。越南盾现金在小商铺、路边摊仍是主要支付方式，随身备一些零钞较为方便。当地咖啡文化发达，滴漏咖啡（含蛋咖啡等衍生品种）是特色饮品。签证政策以越南外交部/公安部最新公布为准，出发前建议确认。",
    "en-US":
      "Shanghai to Hanoi takes about three hours fifteen minutes. Hanoi has a tropical monsoon climate, cooler and drier from November to March — the more comfortable season for visiting — and hot and rainy from April to October. City transport runs mainly on taxis, ride-hailing apps (Grab) and motorbikes; in the narrow streets of the Old Quarter, with heavy motorbike traffic, the usual advice for crossing is to walk at a steady pace and let the traffic flow around you. Hoan Kiem Lake, the 36 streets of the Old Quarter, and the Temple of Literature (Vietnam's first national academy) are common stops; temples require shoes off and modest dress. Vietnamese dong cash is still the main way to pay at small shops and street stalls, so carrying some small bills helps. The local coffee culture is strong, with drip coffee — including variants such as egg coffee — a signature drink. Visa rules follow the latest notices from Vietnam's Ministry of Foreign Affairs / Ministry of Public Security; check before you travel.",
    },
  },
};
