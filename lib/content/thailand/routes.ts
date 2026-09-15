import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "bkk-cnx": {
    study: {
    "zh-CN":
      "曼谷飞清迈，是泰国国内客流量最大的航线之一，连接首都与北部文化古都。飞机离开曼谷后向北飞行，逐渐掠过泰国中北部彭世洛府与碧差汶府交界处的通萨兰銮草原——一片海拔300至1028米的高原草甸，被称为“泰国的稀树草原”，开阔的金黄色草地与稀疏松林交错分布，是泰国境内少见的非森林高地地貌。" +
      "越过草原后，飞机继续向西北飞行，逐渐接近清迈盆地，临近降落前脚下展开素贴山——清迈城西侧一座海拔1676米的山峰，山腰始建于14世纪的素贴寺是泰国北部最重要的佛教朝圣地之一，飞机最终降落在清迈——泰国北部最大城市与兰纳王国古都。",
    "en-US":
      "Flying from Bangkok to Chiang Mai is one of Thailand's busiest domestic routes, linking the capital with the ancient cultural capital of the north. After leaving Bangkok the flight heads north, passing over Thung Salaeng Luang midway — a highland meadow at 300–1,028 m elevation on the border of Phitsanulok and Phetchabun provinces, known as \"Thailand's savanna,\" its open golden grassland interspersed with sparse pine forest, a rare non-forested highland landform in Thailand." +
      " Past the grassland, the flight continues north-west, gradually approaching the Chiang Mai basin; just before landing, Doi Suthep unfolds below — a 1,676 m peak west of Chiang Mai, where Wat Phra That Doi Suthep, founded on its slope in the 14th century, is one of northern Thailand's most important Buddhist pilgrimage sites — before the flight lands in Chiang Mai, the largest city in northern Thailand and the ancient capital of the Lanna kingdom.",
    },
    // travel sources: 全四段（study/travel × 中英）: 通萨兰銮草原、素贴山 1676 m 与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "曼谷到清迈飞约80分钟，同一时区，是泰国国际航空运营的国内航班之一，也可选择长途大巴或火车。曼谷素万那普机场距市区约30公里；清迈国际机场距市区约3公里。清迈是探索泰国北部山地与手工艺文化的理想门户。",
    "en-US":
      "Bangkok to Chiang Mai takes about 80 minutes, same time zone, operated by Thai Airways as one of Thailand's domestic routes; buses and trains are other options. Suvarnabhumi Airport is about 30 km from central Bangkok; Chiang Mai International Airport is about 3 km from the city centre. Chiang Mai is an ideal gateway for exploring northern Thailand's mountains and craft culture.",
    },
  },

  "bkk-usm": {
    study: {
    "zh-CN":
      "曼谷飞苏梅岛，是连接首都与泰国湾度假海岛的热门航线。飞机离开曼谷后向东南飞行，脚下展开湄南河三角洲——湄南河入海口处发育的冲积三角洲低地，泰国首都曼谷即建于三角洲之上，部分区域海拔不足2米，长期面临地面沉降与海平面上升的双重压力，运河网络至今仍是三角洲城区部分区域重要的交通方式。" +
      "越过三角洲后，飞机继续向东南飞越泰国湾开阔海面，苏梅岛逐渐出现在视野中，飞机最终降落在苏梅岛——按面积计是泰国第二大岛，以查汶、拉迈两大海滩度假区与椰子种植传统闻名，岛屿内陆至今仍保留大片传统椰林。",
    "en-US":
      "Flying from Bangkok to Koh Samui links the capital with a popular resort island in the Gulf of Thailand. After leaving Bangkok the flight heads south-east, the Chao Phraya Delta unfolding below — the low-lying alluvial delta at the Chao Phraya's mouth, on which Bangkok itself is built, with parts of the city under 2 m in elevation and facing the combined pressures of land subsidence and sea-level rise." +
      " Past the delta, the flight continues south-east across the open waters of the Gulf of Thailand; Koh Samui gradually comes into view, before the flight lands on Koh Samui, Thailand's second-largest island by area, known for the Chaweng and Lamai beach resort areas and its traditional coconut-growing heritage.",
    },
    // travel sources: 全四段（study/travel × 中英）: 湄南河三角洲地面沉降与本库一致；苏梅岛「按面积计泰国第二大岛」已是修正后说法。核实 2026-09-11
    travel: {
    "zh-CN":
      "曼谷到苏梅岛飞约95分钟，同一时区，是曼谷航空运营的国内航班之一（空客A319机型），苏梅机场由曼谷航空私有运营。曼谷素万那普机场距市区约30公里；苏梅机场就在岛屿东北角。苏梅岛是探索安通国家海洋公园跳岛游的理想门户。",
    "en-US":
      "Bangkok to Koh Samui takes about 95 minutes, same time zone, operated by Bangkok Airways (Airbus A319) as one of Thailand's domestic routes; Samui Airport is privately operated by Bangkok Airways. Suvarnabhumi Airport is about 30 km from central Bangkok; Samui Airport sits at the island's north-eastern tip. Koh Samui is an ideal gateway for island-hopping in Ang Thong National Marine Park.",
    },
  },

  "dmk-uth": {
    study: {
    "zh-CN":
      "曼谷廊曼飞乌隆他尼，是连接首都与东北部依善地区的航线。飞机离开廊曼后向北偏东飞行，逐渐掠过呵叻高原——泰国东北部一片广袤的砂岩台地，面积约占泰国国土三分之一，是泰国传统“依善”地区的地理主体，高原地势开阔平坦，大片旱作农田与稀疏林地交错分布，与泰国中部平原的水田景观形成鲜明对比，高原边缘的碧差汶山脉与丹辇拉扎山脉将其与中部平原分隔。" +
      "飞机继续向东北飞行，最终降落在乌隆他尼——依善地区重要城市，也是探索班清史前遗址的门户城市，府境内的班清遗址出土了公元前2000年左右的彩陶与青铜器。",
    "en-US":
      "Flying from Bangkok Don Mueang to Udon Thani links the capital with Thailand's north-eastern Isan region. After leaving Don Mueang the flight heads north-north-east, passing over the Khorat Plateau midway — a vast sandstone tableland covering roughly a third of Thailand's land area, the geographic core of the traditional Isan region, its broad, flat surface interspersed with extensive rain-fed farmland and sparse woodland, a sharp contrast to the paddy-field landscape of central Thailand's plain." +
      " The flight continues north-east, before landing in Udon Thani, an important city in the Isan region and the gateway to the Ban Chiang prehistoric site.",
    },
    // travel sources: 全四段（study/travel × 中英）: 呵叻高原约占国土三分之一；「碧差汶山脉与丹辇拉扎山脉」已是修正后说法；班清遗址约公元前 2000 年。核实 2026-09-11
    travel: {
    "zh-CN":
      "曼谷廊曼到乌隆他尼飞约65分钟，同一时区，是泰国亚洲航空运营的国内航班之一，也可选择乘火车经廊开线前往。廊曼机场距曼谷市区约25公里；乌隆他尼国际机场距市区约5公里。乌隆他尼是探索班清世界遗产考古遗址的理想门户。",
    "en-US":
      "Bangkok Don Mueang to Udon Thani takes about 65 minutes, same time zone, operated by Thai AirAsia as one of Thailand's domestic routes; a train via the Nong Khai line is another option. Don Mueang Airport is about 25 km from central Bangkok; Udon Thani International Airport is about 5 km from the city centre. Udon Thani is an ideal gateway for exploring the Ban Chiang World Heritage archaeological site.",
    },
  },

  "dmk-cei": {
    study: {
    "zh-CN":
      "曼谷廊曼飞清莱，是连接首都与泰国最北端府份的航线。飞机离开廊曼后向北飞行，中途掠过通萨兰銮草原——泰国中北部一片海拔300至1028米的高原草甸，被称为“泰国的稀树草原”，开阔草地与稀疏松林交错分布。" +
      "越过草原后，飞机继续向北飞行，逐渐接近清道山——泰国第三高峰，海拔在2175至2275米之间，山体为石灰岩喀斯特地貌，发育有泰国境内规模最大的溶洞系统之一，飞机最终降落在清莱——紧邻缅甸与老挝边境“金三角”地区的府份首府，以白庙、蓝庙等当代宗教艺术建筑闻名。",
    "en-US":
      "Flying from Bangkok Don Mueang to Chiang Rai links the capital with Thailand's northernmost province. After leaving Don Mueang the flight heads north, passing over Thung Salaeng Luang midway — a highland meadow at 300–1,028 m elevation in north-central Thailand known as \"Thailand's savanna,\" its open grassland interspersed with sparse pine forest." +
      " Past the grassland, the flight continues north, gradually approaching Doi Luang Chiang Dao — Thailand's third-highest peak, put at between 2,175 and 2,275 m depending on the source, a limestone karst massif riddled with one of the country's largest cave systems — before the flight lands in Chiang Rai, the capital of Thailand's northernmost province near the \"Golden Triangle\" area bordering Myanmar and Laos, known for contemporary religious-art buildings such as the White Temple and Blue Temple.",
    },
    // travel sources: 全四段（study/travel × 中英）: 清道山泰国第三高峰 2175–2275 m 与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "曼谷廊曼到清莱飞约80分钟，同一时区，是皇雀航空运营的国内航班之一。廊曼机场距曼谷市区约25公里；清莱国际机场距市区约8公里。清莱是探索金三角景观区与白庙等当代宗教艺术建筑的理想门户。",
    "en-US":
      "Bangkok Don Mueang to Chiang Rai takes about 80 minutes, same time zone, operated by Nok Air as one of Thailand's domestic routes. Don Mueang Airport is about 25 km from central Bangkok; Chiang Rai International Airport is about 8 km from the city centre. Chiang Rai is an ideal gateway for the Golden Triangle viewpoint and contemporary religious-art buildings such as the White Temple.",
    },
  },

  "dmk-hkt": {
    study: {
    "zh-CN":
      "曼谷廊曼飞普吉岛，是连接首都与泰国最负盛名海岛度假地的热门航线。飞机离开廊曼后向南飞行，脚下持续展开泰国湾沿岸的地貌，逐渐掠过三百峰山——泰国湾沿岸一列由约300座石灰岩山峰组成的山地，“三百峰”由此得名，最高峰海拔605米，山地西北角的通三百峰淡水沼泽是泰国境内面积最大的湿地之一，1966年设为泰国首座海洋型国家公园。" +
      "越过三百峰山后，飞机继续向南飞越泰国南部半岛，最终降落在普吉岛——泰国最大的岛屿，坐落于安达曼海，是泰国最负盛名的海岛度假目的地，西海岸分布着巴东、卡伦、卡塔等主要海滩度假区。",
    "en-US":
      "Flying from Bangkok Don Mueang to Phuket links the capital with a major Thai island resort destination. After leaving Don Mueang the flight heads south, the landform along the Gulf of Thailand coast continuing below, passing over Khao Sam Roi Yot midway — a range of some 300 limestone peaks along the Gulf of Thailand coast, the source of its name (\"the mountain with three hundred peaks\"), with the freshwater marsh of Thung Sam Roi Yot at its north-western corner among the largest wetlands in Thailand." +
      " Past Khao Sam Roi Yot, the flight continues south over the southern Thai peninsula, before landing on Phuket, Thailand's largest island in the Andaman Sea and a major island resort destination.",
    },
    // travel sources: 全四段（study/travel × 中英）: 三百峰山约 300 座石灰岩峰、1966 年泰国首座海洋型国家公园与本库一致；普吉为泰国最大岛。核实 2026-09-11
    travel: {
    "zh-CN":
      "曼谷廊曼到普吉岛飞约85分钟，同一时区，是泰国亚洲航空运营的国内航班之一。廊曼机场距曼谷市区约25公里；普吉国际机场距普吉镇约32公里。普吉岛是探索攀牙湾喀斯特岛群的理想门户。",
    "en-US":
      "Bangkok Don Mueang to Phuket takes about 85 minutes, same time zone, operated by Thai AirAsia as one of Thailand's domestic routes. Don Mueang Airport is about 25 km from central Bangkok; Phuket International Airport is about 32 km from Phuket Town. Phuket is an ideal gateway for exploring the karst islands of Ao Phang Nga.",
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
    // travel sources: 全四段（study/travel × 中英）: 攀牙湾约 400 km²、二叠纪石灰岩与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "曼谷廊曼到甲米飞约85分钟，同一时区，是泰国狮航运营的国内航班之一。廊曼机场距曼谷市区约25公里；甲米国际机场距甲米镇约18公里。甲米是探索莱利岬角攀岩与皮皮群岛跳岛游的理想门户。",
    "en-US":
      "Bangkok Don Mueang to Krabi takes about 85 minutes, same time zone, operated by Thai Lion Air as one of Thailand's domestic routes. Don Mueang Airport is about 25 km from central Bangkok; Krabi International Airport is about 18 km from Krabi Town. Krabi is an ideal gateway for rock climbing at Railay Peninsula and island-hopping to the Phi Phi Islands.",
    },
  },

  "can-bkk": {
    // study sources: 全四段（study/travel × 中英）: 呵叻高原约占泰国国土三分之一（Britannica，2 级）；曼谷部分区域海拔不足 2 m。核实 2026-09-11
    study: {
    "zh-CN":
      "广州飞曼谷，从华南越过中南半岛北部山地，抵达湄南河三角洲。起飞后向西南飞越南岭以南的丘陵地带，随后进入中南半岛北部——山岭连绵、河谷深切，是东南亚地形最破碎的区域之一。跨过这片山地后，地势逐渐平缓，飞机进入呵叻高原：泰国东北部一片占国土面积近三分之一的广袤砂岩台地，传统上称为“依善”地区，高原边缘的山脉把它与泰国中部平原分隔开来。越过呵叻高原西缘，飞机开始下降，进入湄南河三角洲——湄南河入海口长期淤积形成的低平原，泰国首都曼谷即建于三角洲之上，部分区域海拔不足两米。三个多小时的航程，把中国南方的丘陵地带与东南亚大河三角洲连在了一起。",
    "en-US":
      "Guangzhou to Bangkok crosses the mountains of the northern Indochinese Peninsula on the way from southern China to the Chao Phraya Delta. After take-off the flight crosses the hills south of the Nanling range, then enters the northern Indochinese Peninsula, a belt of continuous ridges and deeply cut valleys, one of the most rugged parts of mainland Southeast Asia. Beyond these mountains the land flattens out onto the Khorat Plateau, a broad sandstone tableland covering nearly a third of Thailand's land area in the country's north-east, traditionally known as the Isan region; ranges along its rim separate it from the central plain of Thailand. Past the western edge of the Khorat Plateau the plane begins its descent into the Chao Phraya Delta, a low plain built up by long-term silting at the mouth of the Chao Phraya River. Bangkok, Thailand's capital, is built on this delta, with parts of the city less than two metres above sea level. In a little over three hours, the flight links the hill country of southern China to a great river delta in Southeast Asia.",
    },
    travel: {
    "zh-CN":
      "广州到曼谷约三小时。曼谷终年高温，3–5月最热，6–10月为雨季，11–2月相对凉爽干燥，是较适宜出游的季节。市内交通以BTS空铁、MRT地铁和嘟嘟车为主，机场快线连接素万那普机场与市区。大皇宫、玉佛寺、卧佛寺是热门景点，进入寺庙需着装得体（不可穿短裤短裙、须遮肩）、脱鞋入内；佛像是宗教圣物，不可攀爬拍照或以不敬姿势合影。街头小吃丰富，冬阴功、青咖喱、芒果糯米饭是代表菜式。持中国护照可享落地签或免签政策，具体以泰国外交部最新公布为准，出发前建议确认。",
    "en-US":
      "Guangzhou to Bangkok takes about three hours. Bangkok is hot year-round, hottest from March to May, with a rainy season from June to October and cooler, drier weather from November to February — the most comfortable time to visit. City transport runs on the BTS Skytrain, MRT subway and tuk-tuks, and an airport rail link connects Suvarnabhumi Airport to downtown. The Grand Palace, Wat Phra Kaew and Wat Pho are popular sights; temple visits require modest dress (no shorts or short skirts, shoulders covered) and shoes off before entering. Buddha images are religious objects — do not climb on them or pose disrespectfully for photos. Street food is abundant, with tom yum soup, green curry and mango sticky rice as signature dishes. Visa-on-arrival or visa-free entry may apply for Chinese passport holders; check the latest notices from Thailand's Ministry of Foreign Affairs before you travel.",
    },
  },
};
