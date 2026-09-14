import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "ubn-hvd": {
    study: {
    "zh-CN":
      "乌兰巴托飞科布多，是一条横贯蒙古中西部的航线，全程约1100公里。飞机离开乌兰巴托后向西飞行，脚下逐渐展开杭爱山连绵起伏的山地地貌——蒙古中部主要山系，森林与高山草甸交错分布，鄂尔浑河、色楞格河等蒙古主要河流均发源于此。" +
      "越过杭爱山后，飞机继续向西飞行，逐渐进入大湖盆地——由蒙古阿尔泰山、戈壁阿尔泰山与杭爱山三面环绕的内流干旱盆地，脚下可见多个咸淡水湖泊星罗棋布，最终降落在科布多——蒙古西部多民族聚居区域的历史中心城市，坐落在阿尔泰山脉东麓，东面不远就是哈尔乌苏湖。",
    "en-US":
      "Flying from Ulaanbaatar to Khovd crosses central-western Mongolia, spanning about 1,100 km. After leaving Ulaanbaatar the flight heads west, the rolling terrain of the Khangai Mountains unfolding below — the main range of central Mongolia, forest and alpine meadow interwoven, source of the Orkhon, Selenge and other major Mongolian rivers." +
      " Past the Khangai, the flight continues west into the Great Lakes Depression — an endorheic arid basin ringed on three sides by the Mongol Altai, the Gobi Altai and the Khangai, multiple saline and freshwater lakes scattered below, before landing in Khovd, the historic centre of western Mongolia's multi-ethnic communities, at the eastern foot of the Altai, with Khar-Us Lake a short way to the east.",
    },
    // travel sources: 全四段（study/travel × 中英）: 蒙古阿尔泰、呼依滕峰 4374 m 与本库一致；「科布多河畔」因本库城市条目前后矛盾、只有 3 级来源，改为不点河名；航司原写航蒙航空（无国内航班），按航线数据改为 MIAT、约 70 分钟。核实 2026-09-11
    travel: {
    "zh-CN":
      "乌兰巴托到科布多飞约70分钟，同一时区，是蒙古国际航空（MIAT）运营的国内航班之一。成吉思汗国际机场距市区约52公里；科布多机场距市区很近。科布多是探索蒙古西部多民族聚居区与蒙古阿尔泰山的重要门户。",
    "en-US":
      "Ulaanbaatar to Khovd is about 70 minutes, same time zone, operated by MIAT Mongolian Airlines as one of Mongolia's domestic routes. Chinggis Khaan International Airport is about 52 km from Ulaanbaatar; Khovd Airport is close to the city centre. Khovd is an important gateway for western Mongolia's multi-ethnic communities and the Mongol Altai.",
    },
  },

  "ubn-ulg": {
    study: {
    "zh-CN":
      "乌兰巴托飞乌力吉，是蒙古国内航程最长的定期航线之一，全程约1250公里，直抵蒙古最西端。飞机离开乌兰巴托后向西飞行，先后掠过杭爱山连绵的森林草甸山地与大湖盆地内星罗棋布的咸淡水湖泊。" +
      "飞机继续向西飞行，逐渐进入蒙古阿尔泰山空域——沿蒙古西部边境延伸约900公里的高山雪峰带，塔王博格达山群的现代冰川在机翼下清晰可辨，最终降落在乌力吉——蒙古境内哈萨克族的主要聚居区，也是探索蒙古最高峰呼依滕峰的核心门户。",
    "en-US":
      "Flying from Ulaanbaatar to Ölgii is one of Mongolia's longest scheduled domestic routes, spanning about 1,250 km to the country's westernmost point. After leaving Ulaanbaatar the flight heads west, passing successively over the forested, meadow-covered terrain of the Khangai and the scattered saline and freshwater lakes of the Great Lakes Depression." +
      " The flight continues west into the airspace of the Mongol Altai — a belt of high snow peaks running about 900 km along Mongolia's western border — the modern glaciers of the Tavan Bogd massif visible below, before landing in Ölgii, the main home of Mongolia's Kazakh community and the core gateway to Khüiten Peak, the country's highest point.",
    },
    // travel sources: 全四段（study/travel × 中英）: 阿尔泰山、哈萨克族驯鹰文化；航司原写航蒙航空，按航线数据改为 MIAT、约 80 分钟，删去未核实的「4 至 10 月运营」。核实 2026-09-11
    travel: {
    "zh-CN":
      "乌兰巴托到乌力吉飞约80分钟，同一时区，是蒙古国际航空（MIAT）运营的国内航班之一。成吉思汗国际机场距市区约52公里；乌力吉国际机场距市区很近。乌力吉是探索塔王博格达山群与哈萨克族传统文化的重要门户。",
    "en-US":
      "Ulaanbaatar to Ölgii is about 80 minutes, same time zone, operated by MIAT Mongolian Airlines as one of Mongolia's domestic routes. Chinggis Khaan International Airport is about 52 km from Ulaanbaatar; Ölgii International Airport is close to the city centre. Ölgii is an important gateway to the Tavan Bogd massif and traditional Kazakh culture.",
    },
  },

  "ubn-mxv": {
    study: {
    "zh-CN":
      "乌兰巴托飞木伦，是一条连接蒙古首都与库苏古尔湖门户城市的航线，全程约540公里。飞机离开乌兰巴托后向西北飞行，脚下展开杭爱山北麓渐次收窄的山地地貌，森林覆盖率逐渐升高，草原景观向针叶林过渡的界线清晰可辨；这一带是典型的蒙古北部森林—草原生态过渡带，河流水系呈放射状向四周发散。" +
      "飞机继续向西北飞行，山地地貌逐渐让位于更开阔的河谷盆地，最终降落在木伦——库苏古尔省首府，坐落于德勒格尔河谷平地，四周被森林覆盖的山地环绕，是探索蒙古最大淡水湖库苏古尔湖的核心门户城市，也是当地图瓦人、达尔哈德人等游牧族群的传统活动区域。",
    "en-US":
      "Flying from Ulaanbaatar to Mörön links the Mongolian capital with the gateway city to Lake Khövsgöl, spanning about 540 km. After leaving Ulaanbaatar the flight heads northwest, the terrain of the northern Khangai foothills narrowing below, forest cover gradually increasing, with a clear transition line visible from steppe to coniferous forest — a classic stretch of Mongolia's northern forest-steppe ecotone, its rivers radiating outward in all directions." +
      " The flight continues northwest, the mountainous terrain giving way to a broader river-valley basin, before landing in Mörön, capital of Khövsgöl Province, on the flat valley floor of the Delgermörön River ringed by forested mountains — the core gateway to Lake Khövsgöl, Mongolia's largest freshwater lake, and the traditional territory of local Tuvan and Darkhad nomadic communities.",
    },
    // travel sources: 全四段（study/travel × 中英）: 杭爱山、库苏古尔湖门户；航司原写航蒙航空，按航线数据改为 MIAT。核实 2026-09-11
    travel: {
    "zh-CN":
      "乌兰巴托到木伦飞约70分钟，同一时区，是蒙古国际航空（MIAT）运营的国内航班之一。成吉思汗国际机场距市区约52公里；木伦机场距市区很近。木伦是探索库苏古尔湖的理想门户，从市区到湖南岸的哈特嘎尔村约需1至1.5小时车程。",
    "en-US":
      "Ulaanbaatar to Mörön is about 70 minutes, same time zone, operated by MIAT Mongolian Airlines as one of Mongolia's domestic routes. Chinggis Khaan International Airport is about 52 km from Ulaanbaatar; Mörön Airport is close to the city centre. Mörön is an ideal gateway for exploring Lake Khövsgöl; the drive from town to Khatgal village on the south shore takes about 1 to 1.5 hours.",
    },
  },

  "ubn-dlz": {
    study: {
    "zh-CN":
      "乌兰巴托飞达兰扎德嘎德，是通往蒙古南戈壁的核心航线，全程约490公里。飞机离开乌兰巴托后向南飞行，脚下的草原景观逐渐被灰褐色的戈壁荒漠取代，地表由连绵的砾漠构成而非沙丘，与蒙古中部的森林草原形成鲜明的南北反差，局部可见零星分布的季节性绿洲与孤立山地。" +
      "飞机继续向南飞行，逐渐接近古尔班赛罕山——由西赛罕、中赛罕、东赛罕三条平行山脉组成的山系，最高峰海拔2825米，是戈壁荒漠中一处山地生态孤岛，最终降落在达兰扎德嘎德——南戈壁省首府，是探索戈壁古尔班赛罕国家公园（洪戈林额勒斯沙丘、约林音峡谷、巴彦扎格）的核心门户城市。",
    "en-US":
      "Flying from Ulaanbaatar to Dalanzadgad is the core route into Mongolia's South Gobi, spanning about 490 km. After leaving Ulaanbaatar the flight heads south, the steppe landscape below gradually giving way to grey-brown Gobi desert, its surface a continuous expanse of gravel rather than dunes — a sharp north-south contrast with the forest-steppe of central Mongolia, with scattered seasonal oases and isolated massifs occasionally visible." +
      " The flight continues south, approaching the Gurvan Saikhan Mountains — a range of three parallel ridges whose highest peak reaches 2,825 m, a montane ecological island within the Gobi desert — before landing in Dalanzadgad, capital of South Gobi Province and the core gateway to Gobi Gurvansaikhan National Park (Khongoryn Els, Yolyn Am, Bayanzag).",
    },
    // travel sources: 全四段（study/travel × 中英）: 古尔班赛罕山 2825 m、戈壁以砾漠为主与本库一致；航司原写航蒙航空，按航线数据改为 MIAT。核实 2026-09-11
    travel: {
    "zh-CN":
      "乌兰巴托到达兰扎德嘎德飞约60分钟，同一时区，是蒙古国际航空（MIAT）运营的国内航班之一。成吉思汗国际机场距市区约52公里；达兰扎德嘎德机场距市区很近。达兰扎德嘎德是探索洪戈林额勒斯沙丘、约林音峡谷与巴彦扎格的理想门户。",
    "en-US":
      "Ulaanbaatar to Dalanzadgad is about 60 minutes, same time zone, operated by MIAT Mongolian Airlines as one of Mongolia's domestic routes. Chinggis Khaan International Airport is about 52 km from Ulaanbaatar; Dalanzadgad Airport is close to the city centre. Dalanzadgad is an ideal gateway for exploring Khongoryn Els, Yolyn Am and Bayanzag.",
    },
  },

  "ubn-coq": {
    study: {
    "zh-CN":
      "乌兰巴托飞乔巴山，是一条连接蒙古首都与东部草原核心城市的航线，全程约580公里。飞机离开乌兰巴托后向东飞行，脚下先是掠过克鲁伦河蜿蜒的河道——这条发源于肯特山的河流长期为沿岸游牧聚落提供水源，河谷绿带与开阔草原形成鲜明的色带对比。" +
      "飞机继续向东飞行，逐渐进入东部草原——达乌尔草原生态系统的蒙古境内部分，一望无际的开阔草原地貌向地平线延伸，最终降落在乔巴山——道尔诺德省首府，坐落于克鲁伦河畔，是探索蒙古东部草原的核心门户城市。",
    "en-US":
      "Flying from Ulaanbaatar to Choibalsan links the Mongolian capital with the core city of the eastern steppe, spanning about 580 km. After leaving Ulaanbaatar the flight heads east, first passing over the winding course of the Kherlen River — rising in the Khentii Mountains, it has long supplied water to nomadic settlements along its banks, its green riverside band standing out against the open grassland." +
      " The flight continues east into the Eastern Steppe — the Mongolian portion of the Daurian steppe ecosystem — boundless open grassland stretching to the horizon, before landing in Choibalsan, capital of Dornod Province, on the Kherlen River and the core gateway to Mongolia's eastern steppe.",
    },
    // travel sources: 全四段（study/travel × 中英）: 克鲁伦河源于肯特山、东部草原为达乌尔草原蒙古境内部分与本库一致；航司原写航蒙航空，航线数据 status 为 wrong，改为不具名。核实 2026-09-11
    travel: {
    "zh-CN":
      "乌兰巴托到乔巴山飞约75分钟，同一时区，是蒙古国内定期航班之一。成吉思汗国际机场距市区约52公里；乔巴山机场距市区很近。乔巴山是探索蒙古达乌尔严格保护区与东部草原游牧生活的理想门户。",
    "en-US":
      "Ulaanbaatar to Choibalsan is about 75 minutes, same time zone, one of Mongolia's domestic routes. Chinggis Khaan International Airport is about 52 km from Ulaanbaatar; Choibalsan Airport is close to the city centre. Choibalsan is an ideal gateway for exploring the Mongol Daguur Strictly Protected Area and nomadic life on the eastern steppe.",
    },
  },

  "pek-ubn": {
    // study sources: 全四段（study/travel × 中英）: 关东以外：图拉河源于肯特山、乌兰巴托约 1300 m 为常识；中文「戈壁」未与「沙漠」混用（#264 已修）；英文原写「world's sixth-largest desert」无来源，已降级为「among the largest」。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞乌兰巴托，是国产大飞机C919投入国际航线运营的首条常态化航班，也是一条从华北平原直抵蒙古高原腹地的航线。起飞后，飞机很快越过内蒙古高原——地势开阔平缓的草原台地，锡林郭勒一带的草场和浑善达克沙地由此向北延展。继续向西北飞行，草原逐渐让位于戈壁——一片以砾石荒漠为主、植被稀疏的干旱地带，横跨中国北部与蒙古南部，是世界上面积最大的荒漠之一。越过戈壁后，地势重新起伏，图拉河谷出现在眼前：图拉河发源于肯特山，向西南流经这片河谷，蒙古首都乌兰巴托就坐落在河谷之中，四面被低山环抱。一个多小时的航程，从平坦的华北平原，飞到了海拔约1300米的高原河谷城市。",
    "en-US":
      "Beijing to Ulaanbaatar is the first route on which China's domestically built C919 entered scheduled international service, and it flies straight from the North China Plain into the heart of the Mongolian Plateau. Soon after take-off the flight crosses the Inner Mongolian Plateau, an open, gently rolling grassland tableland where the pastures around Xilingol and the Hunshandake sands stretch away to the north. Continuing north-west, the grassland gives way to the Gobi, an arid belt of gravel desert with sparse vegetation that spans northern China and southern Mongolia and ranks among the world's largest deserts. Beyond the Gobi the land rises again into the Tuul River valley: the Tuul rises in the Khentii Mountains and flows south-west through this valley, where Mongolia's capital, Ulaanbaatar, sits ringed by low hills. In a little over an hour, the flight goes from the flat North China Plain to a plateau river-valley city at about 1,300 metres.",
    },
    travel: {
    "zh-CN":
      "北京到乌兰巴托约两小时十五分钟，由国产C919执飞，是这款国产客机的首条国际定期航线。乌兰巴托海拔约1300米，属典型大陆性气候，冬季严寒漫长（可低至零下30摄氏度以下），夏季短暂凉爽，6–8月是较适宜前往的季节，需注意昼夜温差大。市区景点包括甘丹寺（藏传佛教寺院）、成吉思汗广场、纳赖罕历史文化公园；进入寺庙须顺时针绕行、不可用手触摸法器或佛像。多数游客的行程会延伸到市郊草原，体验蒙古包住宿与骑马；敬酒时按传统习俗用无名指蘸酒弹向天地，接受哈达和奶食时宜双手接过。签证政策以中蒙双边协定及蒙古外交部最新公布为准。",
    "en-US":
      "Beijing to Ulaanbaatar takes about two hours fifteen minutes, flown by the domestically built C919 — the aircraft's first scheduled international route. At about 1,300 metres, Ulaanbaatar has a sharply continental climate: long, severe winters (temperatures can drop below minus 30°C) and short, cool summers, with June–August the more comfortable season to visit; expect a large swing between day and night temperatures. In-town sights include Gandantegchinlen Monastery (a Tibetan Buddhist monastery), Chinggis Khaan Square and Nairamdal Historical and Cultural Park; visiting a monastery calls for walking clockwise and not touching ritual objects or images by hand. Most itineraries extend out to the steppe around the city for a ger stay and horseback riding; in the traditional toast, a drop of drink is flicked skyward and earthward with the ring finger, and a khadag scarf or dairy offering is received with both hands. Visa rules follow the China–Mongolia bilateral agreement and the latest notices from Mongolia's Ministry of Foreign Affairs.",
    },
  },
};
