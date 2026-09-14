import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "gmp-cju": {
    study: {
    "zh-CN":
      "首尔金浦飞济州，是全球客流量最大的国内航线之一，每日往返多达70余班，多家航空公司共同运营。飞机离开金浦后向南飞行，逐渐掠过湖南平原——朝鲜半岛面积最大的平原，面积约3500平方公里，古代碧骨堤水利工程记录了这一区域悠久的稻作传统。" +
      "越过陆地后，飞机继续向南飞越朝鲜海峡的开阔海面，济州岛逐渐出现在视野中，岛屿中心汉拿山盾状火山轮廓清晰可辨，山麓散布着数百座俗称“오름”的寄生火山锥，飞机最终降落在济州——韩国最大的岛屿与最高峰所在地。",
    "en-US":
      "Flying from Seoul Gimpo to Jeju is one of the busiest domestic routes in the world, with more than 70 round trips daily. After leaving Gimpo the flight heads south, passing over the Honam Plain — the largest plain on the Korean Peninsula, where the ancient Byeokgolje irrigation works record this region's long rice-farming tradition." +
      " Past the mainland, the flight continues south across the open waters of the Korea Strait; Jeju Island gradually comes into view, with the shield-volcano profile of Hallasan clearly visible at its centre, before the flight lands in Jeju, South Korea's largest island and home to its highest peak.",
    },
    // travel sources: 全四段（study/travel × 中英）: 金浦—济州 2024、2025 连续两年全球客运量最大国内航线（2 级）；湖南平原约 3500 km²、汉拿山盾状火山与数百座寄生火山锥。核实 2026-09-11
    travel: {
    "zh-CN":
      "首尔金浦到济州飞约75分钟，同一时区，是大韩航空运营的国内航班之一，这条航线因客流密集常被称为全球最繁忙的国内航线。金浦机场位于首尔市区西部；济州国际机场就在济州市区西侧。韩国境内多国公民短期旅游的电子旅行许可豁免安排以官方最新公布为准。",
    "en-US":
      "Seoul Gimpo to Jeju takes about 75 minutes, same time zone, operated by Korean Air as one of Korea's domestic routes; this route is often cited as the busiest domestic air route in the world by passenger volume. Gimpo Airport sits on the western side of Seoul; Jeju International Airport is right on the west side of Jeju City. South Korea's electronic travel-authorisation exemption arrangements for short-term visitors follow the latest official announcements.",
    },
  },

  "gmp-pus": {
    study: {
    "zh-CN":
      "首尔金浦飞釜山，是连接韩国两大城市的传统航线，也是首尔通往东南沿海最便捷的空中通道。飞机离开金浦后向东南飞行，中途掠过俗离山——韩国中部一座相对孤立的花岗岩与片麻岩山体，1970年设为韩国第六座国家公园，山麓法住寺记录了这一区域悠久的佛教文化传统。" +
      "越过俗离山后，飞机继续向东南飞行，临近降落前脚下展开洛东江河口三角洲——洛东江注入沿海处发育的辫状三角洲，乙淑岛沙洲是候鸟迁徙的重要中途停歇地，飞机随后降落在釜山——按人口计韩国第二大城市与最大港口，也是釜山国际电影节每年秋季的举办地。",
    "en-US":
      "Flying from Seoul Gimpo to Busan links Korea's two largest cities. After leaving Gimpo the flight heads south-east, passing over Songnisan midway — a relatively isolated granite-and-gneiss massif in central Korea, its Beopjusa Temple recording this area's long Buddhist tradition." +
      " Past Songnisan, the flight continues south-east, and just before landing the Nakdong River Estuary unfolds below — a braided delta formed where the Nakdong River meets the coast, with the Eulsukdo sandbar an important stopover for migratory birds — before the flight lands in Busan, South Korea's second-largest city by population and largest port.",
    },
    // travel sources: 全四段（study/travel × 中英）: 俗离山 1970 年韩国第六座国家公园；釜山第二大城市、最大港口。核实 2026-09-11
    travel: {
    "zh-CN":
      "首尔金浦到釜山飞约55分钟，同一时区，是大韩航空运营的国内航班之一，也可选择约2.5小时的KTX高铁。金浦机场位于首尔市区西部；金海国际机场距釜山市区约20公里。釜山是探索海云台与甘川文化村的理想门户。",
    "en-US":
      "Seoul Gimpo to Busan takes about 55 minutes, same time zone, operated by Korean Air as one of Korea's domestic routes; the KTX high-speed rail (about 2.5 hours) is another option. Gimpo Airport sits on the western side of Seoul; Gimhae International Airport is about 20 km from central Busan. Busan is an ideal gateway for Haeundae Beach and Gamcheon Culture Village.",
    },
  },

  "gmp-usn": {
    study: {
    "zh-CN":
      "首尔金浦飞蔚山，是连接首都与东南部重工业城市的航线。飞机离开金浦后向东南飞行，中途掠过俗离山——韩国中部一座相对孤立的花岗岩与片麻岩山体，1970年设为韩国第六座国家公园，山麓法住寺始建于新罗时期。" +
      "越过俗离山后，飞机继续向东南飞行，逐渐接近朝鲜半岛东南沿海，飞机最终降落在蔚山——韩国重要的造船、汽车与石化工业城市，太和江十里竹林是市区内难得的开阔自然空间，蔚山近海也是韩国鲸鱼观测活动的举办地之一。",
    "en-US":
      "Flying from Seoul Gimpo to Ulsan links the capital with a major heavy-industry city in the south-east. After leaving Gimpo the flight heads south-east, passing over Songnisan midway — a relatively isolated granite-and-gneiss massif in central Korea, designated Korea's sixth national park in 1970." +
      " Past Songnisan, the flight continues south-east, gradually approaching Korea's south-eastern coast, before landing in Ulsan — a major centre for shipbuilding, automobiles, and petrochemicals, home to the rare open green space of the Taehwa River's bamboo grove.",
    },
    // travel sources: 全四段（study/travel × 中英）: 蔚山工业、太和江十里竹林、长生浦鲸鱼文化；每日班次未逐一核。核实 2026-09-11
    travel: {
    "zh-CN":
      "首尔金浦到蔚山飞约60分钟，同一时区，是大韩航空运营的国内航班之一，每日往返约2班，也可选择约2小时的KTX高铁。金浦机场位于首尔市区西部；蔚山机场距市区约15公里。蔚山是探索岭南阿尔卑斯山地与长生浦鲸鱼文化村的门户。",
    "en-US":
      "Seoul Gimpo to Ulsan takes about 60 minutes, same time zone, operated by Korean Air as one of Korea's domestic routes, with roughly two round trips daily; the KTX (about 2 hours) is another option. Gimpo Airport sits on the western side of Seoul; Ulsan Airport is about 15 km from the city centre. Ulsan is a gateway to the Yeongnam Alps and Jangsaengpo Whale Culture Village.",
    },
  },

  "gmp-rsu": {
    study: {
    "zh-CN":
      "首尔金浦飞丽水，是连接首都与南部沿海港口城市的航线。飞机离开金浦后向南飞行，脚下持续展开湖南平原开阔平坦的地貌——朝鲜半岛面积最大的平原，面积约3500平方公里，纵横的灌溉水渠将平原分割成棋盘状的地块，是韩国主要的稻米产区。" +
      "飞机继续向南飞行，逐渐接近朝鲜半岛南部沿海，飞机最终降落在丽水——2012年世界博览会举办地，以跨海缆车夜景与音乐喷泉闻名的港口城市，突山岛与丽水本岛由大桥相连，梧桐岛海岸步道是市区内探索海岸地貌的经典去处。",
    "en-US":
      "Flying from Seoul Gimpo to Yeosu links the capital with a southern coastal port city. After leaving Gimpo the flight heads south, the open, flat landform of the Honam Plain continuing below — the largest plain on the Korean Peninsula, its irrigation channels dividing the land into a checkerboard of fields." +
      " The flight continues south, gradually approaching Korea's southern coast, before landing in Yeosu — host of the 2012 World Expo and a port city known for its cross-sea cable car night views.",
    },
    // travel sources: 全四段（study/travel × 中英）: 丽水 2012 年世博会；真航空 2020 年起执飞。核实 2026-09-11
    travel: {
    "zh-CN":
      "首尔金浦到丽水飞约60分钟，同一时区，是真航空运营的国内航班之一，也可选择约3小时的KTX高铁。金浦机场位于首尔市区西部；丽水机场距市区约20公里。丽水是探索梧桐岛与突山大桥的理想门户。",
    "en-US":
      "Seoul Gimpo to Yeosu takes about 60 minutes, same time zone, operated by Jin Air as one of Korea's domestic routes; the KTX (about 3 hours) is another option. Gimpo Airport sits on the western side of Seoul; Yeosu Airport is about 20 km from the city centre. Yeosu is an ideal gateway for Odongdo Island and Dolsan Bridge.",
    },
  },

  "gmp-kpo": {
    study: {
    "zh-CN":
      "首尔金浦飞浦项庆州，是连接首都与东南沿海钢铁工业城市及新罗古都的航线。飞机离开金浦后向东南飞行，中途掠过洛东江——韩国境内最长的河流，全长约510公里，安东一带河流下切花岗岩基岩形成的河回村曲流是沿线最具代表性的河流地貌。" +
      "越过洛东江后，飞机继续向东南飞行，逐渐接近朝鲜半岛东南沿海，飞机最终降落在浦项庆州机场——韩国钢铁工业城市浦项与新罗古都庆州共用的机场，浦项因浦项制铁的建立而在20世纪后期迅速发展为工业城市。",
    "en-US":
      "Flying from Seoul Gimpo to Pohang Gyeongju links the capital with a south-eastern coastal steel city and the ancient Silla capital nearby. After leaving Gimpo the flight heads south-east, passing over the Nakdong River midway — the longest river in South Korea, with the Hahoe meander near Andong, cut by the river into granite bedrock, the most distinctive stretch along its course." +
      " Past the Nakdong River, the flight continues south-east, gradually approaching Korea's south-eastern coast, before landing at Pohang Gyeongju Airport, shared by the steel city of Pohang and the ancient Silla capital of Gyeongju.",
    },
    // travel sources: 全四段（study/travel × 中英）: 洛东江约 510 km、韩国境内最长；浦项庆州机场 2022-07-14 更名（韩国政府，1 级）。核实 2026-09-11
    travel: {
    "zh-CN":
      "首尔金浦到浦项庆州飞约55分钟，同一时区，是真航空运营的国内航班之一，也可选择约2小时的KTX高铁。金浦机场位于首尔市区西部；浦项庆州机场距浦项市区约10公里、距庆州市区约35公里。这座机场是探索新罗古都庆州历史遗址群的理想门户。",
    "en-US":
      "Seoul Gimpo to Pohang Gyeongju takes about 55 minutes, same time zone, operated by Jin Air as one of Korea's domestic routes; the KTX (about 2 hours) is another option. Gimpo Airport sits on the western side of Seoul; Pohang Gyeongju Airport is about 10 km from central Pohang and about 35 km from central Gyeongju. This airport is an ideal gateway for exploring the Silla-era heritage sites of Gyeongju.",
    },
  },

  "pus-cju": {
    study: {
    "zh-CN":
      "釜山飞济州，是连接韩国东南部港口城市与南部岛屿的航线，也是济州航空与大韩航空共同运营的热门航段。飞机离开釜山后向西南飞行，脚下展开闲丽海上国立公园的多岛海——韩国南部沿海一片散布数百座岛屿的海域，是末次冰期后海平面上升淹没沿海山地丘陵形成的典型溺谷型多岛海地貌，1968年设为韩国首座海上国家公园。" +
      "越过多岛海后，飞机继续向西南飞行穿越开阔海面，济州岛逐渐出现在视野中，岛屿中心汉拿山轮廓清晰可辨，飞机最终降落在济州——韩国最大的岛屿。",
    "en-US":
      "Flying from Busan to Jeju links a south-eastern port city with Korea's southern island. After leaving Busan the flight heads south-west, the archipelago of Hallyeohaesang Marine National Park unfolding below — a stretch of Korea's southern coastal waters scattered with hundreds of islands, a classic ria-type archipelago formed as sea level rose after the last glacial period and drowned the coastal hills, designated Korea's first marine national park in 1968." +
      " Past the archipelago, the flight continues south-west across open water; Jeju Island gradually comes into view, before the flight lands in Jeju, South Korea's largest island.",
    },
    // travel sources: 全四段（study/travel × 中英）: 闲丽海上国立公园 1968 年、韩国首座海上国家公园；溺谷型多岛海。核实 2026-09-11
    travel: {
    "zh-CN":
      "釜山到济州飞约60分钟，同一时区，是济州航空运营的国内航班之一，大韩航空也运营同一航线。金海国际机场距釜山市区约20公里；济州国际机场就在济州市区西侧。",
    "en-US":
      "Busan to Jeju takes about 60 minutes, same time zone, operated by Jeju Air as one of Korea's domestic routes, with Korean Air also operating the same sector. Gimhae International Airport is about 20 km from central Busan; Jeju International Airport is right on the west side of Jeju City.",
    },
  },


  // ============================================================
  // 国际 · 中国国际航线 Phase 3 批A（东亚/东南亚：韩国/蒙古/越南/泰国/马来西亚/新加坡）
  // ============================================================

  "pek-icn": {
    // study sources: 全四段（study/travel × 中英）: 黄海平均水深约 44 m（中科院地理所，1 级）；渤海为近乎被陆地环绕的内海。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞首尔，是从华北平原东端越过渤海与黄海，抵达朝鲜半岛西海岸的一段短程航线。起飞后不久，脚下的陆地让位给渤海——中国唯一近乎被陆地完全环绕的内海，海面上常能看到往来的货轮与近海养殖区的浮标带。渤海东端与黄海相连，黄海是一片平均水深仅约44米的浅海，因含沙量高、海水常年浑黄而得名。越过黄海，飞机开始下降，进入朝鲜半岛西海岸——这一带潮差大、滩涂宽阔，是东亚规模较大的淤泥质海岸带之一。仁川国际机场建在西海岸外的永宗岛上，四周仍能看到成片滩涂与围海造陆留下的痕迹。不到两小时，一趟航班把华北的大平原与朝鲜半岛西海岸的浅海滩涂连在了一起。",
    "en-US":
      "Beijing to Seoul is a short hop from the eastern edge of the North China Plain, across the Bohai and Yellow Seas, to the west coast of the Korean Peninsula. Soon after take-off the land gives way to the Bohai Sea — the one inland sea in China almost fully enclosed by land, its surface dotted with cargo ships and the buoys of coastal aquaculture. The eastern end of the Bohai opens into the Yellow Sea, a shallow sea with an average depth of only about 44 metres, named for the silt-laden, permanently yellow-brown colour of its water. Past the Yellow Sea the plane begins its descent onto the west coast of the Korean Peninsula, a stretch of coastline with a large tidal range and wide mudflats, one of East Asia's more extensive muddy tidal coasts. Incheon International Airport is built on Yeongjong Island off that coast, still ringed by mudflats and the traces of land reclaimed from the sea. In under two hours, one flight links the great plain of North China to the shallow tidal coast of the Korean Peninsula.",
    },
    travel: {
    "zh-CN":
      "北京到首尔约两小时，时差1小时（首尔快1小时）。首尔是韩国首都和最大城市，仁川机场有机场快线（AREX）直达市区，也可乘出租车或大巴，车程约1小时。市内地铁网络发达，交通卡（T-money）通用。景福宫、北村韩屋村、明洞、汉江公园是常见的游览点；饮食以米饭、泡菜、烤肉、部队汤为代表，多数正餐店提供小菜免费续加。入境免签政策以韩国法务部最新公布为准，出发前建议确认。首尔四季分明，冬季干冷，春秋温和，是较适宜出行的季节；夏季多雨闷热。",
    "en-US":
      "Beijing to Seoul takes about two hours, with a one-hour time difference (Seoul is one hour ahead). Seoul is South Korea's capital and largest city; Incheon Airport has the AREX express train straight into downtown, or you can take a taxi or airport bus, about an hour either way. The city's subway network is extensive, and a T-money card works across it. Gyeongbokgung Palace, the Bukchon Hanok Village, Myeongdong and the Han River parks are common stops; the food centres on rice, kimchi, grilled meat and stews, and most set meals come with free refills of side dishes. Visa-free entry rules should be checked against the latest notices from Korea's Ministry of Justice before you travel. Seoul has four distinct seasons — dry, cold winters and mild spring and autumn are the most comfortable times to visit, while summer is rainy and humid.",
    },
  },
};
