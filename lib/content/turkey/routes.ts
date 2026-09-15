import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "ist-esb": {
    study: {
    "zh-CN":
      "伊斯坦布尔飞安卡拉，是土耳其两大城市之间的核心干线航线，全程约380公里，飞行时间约55分钟，连接土耳其最大城市与首都。飞机离开伊斯坦布尔后，脚下先掠过博斯普鲁斯海峡两岸密集的城市建筑，海峡将亚洲与欧洲两大洲分隔开、又被城市连成一体。" +
      "飞机继续向东南飞行，逐渐越过马尔马拉地区丘陵，进入开阔的中安纳托利亚高原，脚下农田与草原交织的高原地表向东延展，最终降落在安卡拉——土耳其共和国首都，1923年由凯末尔选定为新都、坐落于高原腹地。",
    "en-US":
      "Flying from Istanbul to Ankara is the core trunk route between Turkey's two largest cities, spanning about 380 km and about 55 minutes, linking Turkey's largest city with its capital. After leaving Istanbul, the flight first passes over the dense urban fabric on both banks of the Bosphorus, the strait that both separates and, through the city built across it, connects Asia and Europe." +
      " The flight continues southeast, gradually crossing the hills of the Marmara region into the open Central Anatolian Plateau, its patchwork of farmland and steppe stretching eastward below, before landing in Ankara — capital of the Republic of Turkey, chosen by Atatürk in 1923 and set in the heart of the plateau.",
    },
    // travel sources: 全四段（study/travel × 中英）: 1923 年安卡拉定都；博斯普鲁斯与本库一致；全程距离原写约 350 km（比大圆 380 km 还短），改为约 380 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "伊斯坦布尔到安卡拉飞约55分钟，同一时区，是土耳其航空运营的国内航班之一，是土耳其两大城市间客流量最大的航线之一。伊斯坦布尔机场距欧洲区市中心约35公里；埃森博阿机场距安卡拉市区约28公里。",
    "en-US":
      "Istanbul to Ankara is about 55 minutes, same time zone, operated by Turkish Airlines as one of the busiest domestic routes between Turkey's two largest cities. Istanbul Airport is about 35 km from the European-side city centre; Esenboğa Airport is about 28 km from central Ankara.",
    },
  },

  "ist-adb": {
    study: {
    "zh-CN":
      "伊斯坦布尔飞伊兹密尔，全程约360公里，飞行时间约70分钟，连接马尔马拉地区与爱琴海地区两大门户城市，是土耳其西部客流量较大的一条国内航线。飞机离开伊斯坦布尔后向西南飞行，先掠过马尔马拉海沿岸低地，逐渐进入西安纳托利亚丘陵与河谷交织的地带。" +
      "飞机继续向西南飞行，土耳其爱琴海岸深切破碎的海湾与半岛在脚下逐渐显现，博德鲁姆等度假半岛的轮廓依稀可辨，最终降落在伊兹密尔——爱琴海沿岸重要港口，素有“爱琴海明珠”之称。",
    "en-US":
      "Flying from Istanbul to Izmir spans about 360 km and about 70 minutes, linking the Marmara and Aegean regions' gateway cities. After leaving Istanbul the flight heads southwest, first crossing the lowlands along the Sea of Marmara before entering a belt of western Anatolian hills and river valleys." +
      " The flight continues southwest, the deeply indented bays and peninsulas of Turkey's Aegean coast gradually coming into view, with resort peninsulas such as Bodrum faintly discernible, before landing in Izmir, an important Aegean port known as the 'Pearl of the Aegean'.",
    },
    // travel sources: 全四段（study/travel × 中英）: 「爱琴海明珠」原被编成「因世俗开放得名」，成因与城市宗教氛围的比较一并删去；全程距离原写约 340 km，改为约 360 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "伊斯坦布尔到伊兹密尔飞约70分钟，同一时区，是土耳其航空运营的国内航班之一。伊斯坦布尔机场距欧洲区市中心约35公里；阿德南·门德雷斯机场距伊兹密尔市区约18公里。",
    "en-US":
      "Istanbul to Izmir is about 70 minutes, same time zone, operated by Turkish Airlines as one of Turkey's domestic routes. Istanbul Airport is about 35 km from the European-side city centre; Adnan Menderes Airport is about 18 km from central Izmir.",
    },
  },

  "ist-ayt": {
    study: {
    "zh-CN":
      "伊斯坦布尔飞安塔利亚，全程约520公里，飞行时间约85分钟，连接马尔马拉地区与土耳其地中海沿岸旅游核心枢纽。飞机离开伊斯坦布尔后向东南飞行，先掠过马尔马拉低地，逐渐进入中安纳托利亚高原边缘开阔的农田与草原地带。" +
      "飞机继续向南飞行，托罗斯山脉一道弧形山墙横亘在高原与地中海之间，脚下地势陡然抬升又骤然下降，越过山脉后，蔚蓝色的地中海海岸线与安塔利亚老城卡莱伊奇渐次显现，飞机最终降落在安塔利亚——土耳其里维埃拉的门户城市。",
    "en-US":
      "Flying from Istanbul to Antalya spans about 520 km and about 85 minutes, linking the Marmara region with the hub of Turkey's Mediterranean coast. After leaving Istanbul the flight heads southeast, first crossing the Marmara lowlands before entering the open farmland and steppe along the edge of the Central Anatolian Plateau." +
      " The flight continues south, the Taurus Mountains forming an arcing wall between plateau and sea, the terrain below rising sharply then dropping away; past the range, the deep blue Mediterranean coastline and Antalya's old town of Kaleiçi come into view, and the flight lands in Antalya, gateway to the Turkish Riviera.",
    },
    // travel sources: 全四段（study/travel × 中英）: 托罗斯山脉与本库一致；全程距离原写约 480 km，改为约 520 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "伊斯坦布尔到安塔利亚飞约85分钟，同一时区，是土耳其航空运营的国内航班之一，是土耳其客流量最大的国内航线之一。伊斯坦布尔机场距欧洲区市中心约35公里；安塔利亚机场距市区约13公里。",
    "en-US":
      "Istanbul to Antalya is about 85 minutes, same time zone, operated by Turkish Airlines as one of Turkey's busiest domestic routes. Istanbul Airport is about 35 km from the European-side city centre; Antalya Airport is about 13 km from the city centre.",
    },
  },

  "ist-nav": {
    study: {
    "zh-CN":
      "伊斯坦布尔飞卡帕多奇亚，全程约570公里，飞行时间约80分钟，飞往土耳其最具辨识度的火山灰地貌区。飞机离开伊斯坦布尔后向东南飞行，先掠过马尔马拉低地，随后进入中安纳托利亚高原开阔的农牧地带，克孜勒河蜿蜒的红褐色河道在脚下若隐若现。" +
      "飞机继续向东南飞行，逐渐接近埃尔吉耶斯与哈桑两座古火山之间的卡帕多奇亚地区，密布的精灵烟囱锥状岩柱与蜂窝状洞穴逐渐显现，最终降落在内夫谢希尔——通往格雷梅国家公园的门户机场。",
    "en-US":
      "Flying from Istanbul to Cappadocia spans about 570 km and about 80 minutes, heading to Turkey's most distinctive volcanic-ash landscape. After leaving Istanbul the flight heads southeast, first crossing the Marmara lowlands before entering the open farm-and-pasture land of the Central Anatolian Plateau, the reddish-brown winding channel of the Kızılırmak River faintly visible below." +
      " The flight continues southeast, approaching the Cappadocia region between the extinct volcanoes of Erciyes and Hasan, its dense field of conical fairy chimneys and honeycombed caves gradually coming into view, before landing at Nevşehir, gateway to Göreme National Park.",
    },
    // travel sources: 全四段（study/travel × 中英）: 克孜勒河、埃尔吉耶斯与哈桑火山、精灵烟囱与本库一致；全程距离原写约 630 km，改为约 570 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "伊斯坦布尔到卡帕多奇亚飞约80分钟，同一时区，是土耳其航空运营的国内航班之一。伊斯坦布尔机场距欧洲区市中心约35公里；内夫谢希尔卡帕多奇亚机场距格雷梅约40公里，需再转乘约35至40分钟车程。",
    "en-US":
      "Istanbul to Cappadocia is about 80 minutes, same time zone, operated by Turkish Airlines as one of Turkey's domestic routes. Istanbul Airport is about 35 km from the European-side city centre; Nevşehir Kapadokya Airport is about 40 km from Göreme, requiring a further 35–40 minute transfer.",
    },
  },

  "ist-tzx": {
    study: {
    "zh-CN":
      "伊斯坦布尔飞特拉布宗，全程约920公里，飞行时间约105分钟，连接马尔马拉地区与黑海东岸重要港口城市，是土耳其东西向距离较长的国内航线之一。飞机离开伊斯坦布尔后向东飞行，先掠过马尔马拉与安纳托利亚北部丘陵地带，逐渐接近本都山脉。" +
      "飞机继续向东飞行逾一个半小时，本都山脉紧贴海岸陡然抬升的轮廓在脚下延展，山地迎风坡覆盖茂密森林，深绿色山体与黑海深蓝色水面形成鲜明对比，最终降落在特拉布宗——历史上丝绸之路支线港口与拜占庭特拉比松帝国都城。",
    "en-US":
      "Flying from Istanbul to Trabzon spans about 920 km and about 105 minutes, linking the Marmara region with a major port city on the eastern Black Sea coast. After leaving Istanbul the flight heads east, first crossing the hills of Marmara and northern Anatolia before approaching the Pontic Mountains." +
      " The flight continues east for over an hour and a half, the outline of the Pontic range rising abruptly right at the coast stretching out below, its windward slopes covered in dense forest, dark green against the deep blue of the Black Sea, before landing in Trabzon, historically a port on a Silk Road branch and capital of the Byzantine-era Empire of Trebizond.",
    },
    // travel sources: 全四段（study/travel × 中英）: 本都山脉、特拉比松帝国 1204–1461 与本库一致；承运航司原写飞马航空，按本库航线数据改为土耳其航空；全程距离原写约 870 km，改为约 920 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "伊斯坦布尔到特拉布宗飞约105分钟，同一时区，是土耳其航空运营的国内航班之一。伊斯坦布尔机场距欧洲区市中心约35公里；特拉布宗机场距市区约6公里。",
    "en-US":
      "Istanbul to Trabzon is about 105 minutes, same time zone, operated by Turkish Airlines as one of Turkey's domestic routes. Istanbul Airport is about 35 km from the European-side city centre; Trabzon Airport is about 6 km from the city centre.",
    },
  },

  "ist-dnz": {
    study: {
    "zh-CN":
      "伊斯坦布尔飞代尼兹利，全程约400公里，飞行时间约80分钟，飞往土耳其西南部以棉花堡钙化梯田闻名的门户城市，沿途穿越马尔马拉低地与爱琴海地区起伏的丘陵与河谷地带。飞机离开伊斯坦布尔后向西南飞行，先掠过马尔马拉沿岸城镇，逐渐进入内陆丘陵地带。" +
      "飞机继续向东南飞行，逐渐接近代尼兹利地堑，棉花堡沿山坡分布的洁白阶梯状钙化台地在脚下清晰可辨，与周边灰绿色丘陵形成强烈的色彩反差，最终降落在代尼兹利恰尔达克机场——通往棉花堡与希拉波利斯古城的门户。",
    "en-US":
      "Flying from Istanbul to Denizli spans about 400 km and about 80 minutes, heading to the gateway city in southwestern Turkey famed for the Pamukkale travertine terraces. After leaving Istanbul the flight heads southwest, first crossing the Marmara lowlands before entering the undulating hills and river valleys of the Aegean region." +
      " The flight continues southeast, approaching the Denizli graben, the brilliant white, stepped travertine terraces of Pamukkale clearly visible cascading down the hillside below, in sharp color contrast with the grey-green hills around it, before landing at Denizli Çardak Airport, gateway to Pamukkale and the ancient city of Hierapolis.",
    },
    // travel sources: 全四段（study/travel × 中英）: 棉花堡 1988 年列入 UNESCO、成因表述正确；全程距离原写约 460 km，改为约 400 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "伊斯坦布尔到代尼兹利飞约80分钟，同一时区，是土耳其航空运营的国内航班之一。伊斯坦布尔机场距欧洲区市中心约35公里；代尼兹利恰尔达克机场距棉花堡约65公里。",
    "en-US":
      "Istanbul to Denizli is about 80 minutes, same time zone, operated by Turkish Airlines as one of Turkey's domestic routes. Istanbul Airport is about 35 km from the European-side city centre; Denizli Çardak Airport is about 65 km from Pamukkale.",
    },
  },

  "ist-bjv": {
    study: {
    "zh-CN":
      "伊斯坦布尔飞博德鲁姆，全程约460公里，飞行时间约75分钟，连接马尔马拉地区与爱琴海南岸度假半岛，是夏季旅游旺季客流量极高的国内航线之一。飞机离开伊斯坦布尔后向西南飞行，先掠过马尔马拉海沿岸低地，逐渐进入西安纳托利亚丘陵与爱琴海深切破碎的海岸地带。" +
      "飞机继续向西南飞行，博德鲁姆半岛曲折的海岸线与散布的白色度假小镇逐渐显现，圣彼得城堡矗立港湾中央的岬角上清晰可辨，港湾东西两侧游艇与古式帆船密布，最终降落在米拉斯—博德鲁姆机场。",
    "en-US":
      "Flying from Istanbul to Bodrum spans about 460 km and about 75 minutes, linking the Marmara region with a resort peninsula on the southern Aegean coast. After leaving Istanbul the flight heads southwest, first crossing the lowlands along the Sea of Marmara before entering the fragmented, deeply indented Aegean coastline of western Anatolia." +
      " The flight continues southwest, the winding shoreline of the Bodrum Peninsula and its scattered whitewashed resort towns gradually coming into view, with Bodrum Castle clearly visible standing on the headland at the center of the harbor, before landing at Milas–Bodrum Airport.",
    },
    // travel sources: 全四段（study/travel × 中英）: 圣彼得城堡；全程距离原写约 400 km，改为约 460 km。核实 2026-09-11
    travel: {
    "zh-CN":
      "伊斯坦布尔到博德鲁姆飞约75分钟，同一时区，是土耳其航空运营的国内航班之一。伊斯坦布尔机场距欧洲区市中心约35公里；米拉斯—博德鲁姆机场距博德鲁姆市区约36公里。",
    "en-US":
      "Istanbul to Bodrum is about 75 minutes, same time zone, operated by Turkish Airlines as one of Turkey's domestic routes. Istanbul Airport is about 35 km from the European-side city centre; Milas–Bodrum Airport is about 36 km from central Bodrum.",
    },
  },

  "esb-ayt": {
    study: {
    "zh-CN":
      "安卡拉飞安塔利亚，全程约420公里，飞行时间约75分钟，连接土耳其首都与地中海沿岸旅游核心枢纽，是安卡拉往南出行最主要的度假航线之一。飞机离开安卡拉后向南飞行，先掠过中安纳托利亚高原开阔的农田与草原地带。" +
      "飞机继续向南飞行，托罗斯山脉一道弧形山墙横亘在高原与地中海之间，山地陡峭的南坡直抵海边，越过山脉后蔚蓝色地中海海岸线在脚下展开，古城卡莱伊奇临海而建的轮廓依稀可辨，最终降落在安塔利亚——土耳其里维埃拉的门户城市。",
    "en-US":
      "Flying from Ankara to Antalya spans about 420 km and about 75 minutes, linking Turkey's capital with the hub of its Mediterranean coast. After leaving Ankara the flight heads south, first crossing the open farmland and steppe of the Central Anatolian Plateau." +
      " The flight continues south, the Taurus Mountains forming an arcing wall between plateau and sea, their steep southern slopes dropping straight to the water; past the range, the deep blue Mediterranean coastline unfolds below, and the flight lands in Antalya, gateway to the Turkish Riviera.",
    },
    // travel sources: 全四段（study/travel × 中英）: 全程约 420 km（大圆约 407 km）；AJet 为 2024 年更名后的现行名称。核实 2026-09-11
    travel: {
    "zh-CN":
      "安卡拉到安塔利亚飞约75分钟，同一时区，是AJet运营的国内航班之一。埃森博阿机场距安卡拉市区约28公里；安塔利亚机场距市区约13公里。",
    "en-US":
      "Ankara to Antalya is about 75 minutes, same time zone, operated by AJet as one of Turkey's domestic routes. Esenboğa Airport is about 28 km from central Ankara; Antalya Airport is about 13 km from the city centre.",
    },
  },

  "pek-ist": {
    // study sources: 全四段（study/travel × 中英）: 阿拉拉特山约 5100 m（本库 5137 m）为土耳其最高峰，未涉边界；全程约 7400 km（大圆约 7080 km，偏差 4–5%）。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞伊斯坦布尔，向西横穿亚欧大陆腹地，全程约七千四百公里，是中国直飞欧洲最长的航线之一，终点是一座地跨亚欧两洲的城市。起飞后越过燕山与阴山，进入蒙古高原南缘的戈壁——一条以砾石和裸岩为主的干旱带，年降水多在两百毫米以下，风把细沙吹走后留下坚硬的砾幂，地表因此呈现出深浅不一的褐色斑块；河流大多是季节性的，雨后短暂过水随即干涸，昼夜温差常超过三十度，聚落沿着为数不多的泉水和水井分布，彼此往往相隔上百公里。再往西进入中亚腹地的萨雷阿尔卡草原，哈萨克丘陵之上一片起伏平缓的干草原，是横贯欧亚的大草原带的一段；这里降水稀少而蒸发强烈，地表水多汇入没有出海口的内流湖，湖岸常留下白色的盐壳，草场在春季短暂返青后迅速转黄，长期以来是游牧放牧的核心地带，如今也是重要的矿产开采区。越过里海与外高加索的山地后，飞机掠过阿拉拉特山——土耳其最高峰，海拔约五千一百米的层状火山，山顶终年积雪，从空中很远就能认出来。再往西转为中安纳托利亚高原，山系环抱的内陆高原，盐湖与火山地貌交错。飞机降落在博斯普鲁斯海峡西侧的伊斯坦布尔机场。",
    "en-US":
      "Beijing to Istanbul flies west through the interior of the Eurasian landmass, about 7,400 km in all, one of the longest nonstop routes from China to Europe, ending in a city that stands on two continents at once. After take-off the aircraft crosses the Yan and Yin mountains into the Gobi Desert on the southern edge of the Mongolian Plateau, an arid belt of gravel and bare rock where most years bring less than 200 millimetres of rain and the wind has stripped the fine sand away to leave a hard pavement, so the ground reads from the air as patches of brown in many shades; the rivers are mostly seasonal, running briefly after rain and then drying out, the daily temperature can swing more than thirty degrees, and settlements follow the few springs and wells, often a hundred kilometres apart. Farther west the route enters the Saryarka Steppe in the heart of Central Asia, a gently rolling dry grassland on the Kazakh Uplands and part of the great steppe belt that runs across Eurasia; rain is scarce and evaporation strong, so surface water collects in lakes with no outlet to the sea and leaves white salt crusts along their shores, the grass greens briefly in spring and turns quickly to straw, and this has long been core grazing country and is now an important mining region as well. Past the Caspian and the mountains of the Caucasus the flight passes Mount Ararat, the highest peak in Turkey, a stratovolcano about 5,100 metres high, snow-capped year round and recognisable from a long way off. Farther west the ground becomes the Central Anatolian Plateau, an inland plateau ringed by mountains where salt lakes and volcanic terrain alternate. The flight lands at Istanbul Airport, on the western side of the Bosphorus.",
    },
    travel: {
    "zh-CN":
      "北京到伊斯坦布尔约10小时20分钟，时差5小时（土耳其自2016年起全年使用东三区时间，不再切换夏令时）。伊斯坦布尔四季分明，夏季干热、冬季湿冷，春秋最适合游览。" +
      "伊斯坦布尔机场距市中心约35公里，M11地铁线可直达市区并换乘其他线路，也有机场大巴（HAVAIST）。圣索菲亚大教堂、蓝色清真寺、大巴扎是市内三大必访地标，均集中在老城区，步行可达。" +
      "土耳其对多国公民提供在线电子签证（e-Visa），中国公民具体签证政策以土耳其外交部/驻华使领馆最新公布为准，建议提前在线申请。随身留意人多拥挤区域的财物安全。",
    "en-US":
      "Beijing to Istanbul takes about 10 hours 20 minutes, with a 5-hour time difference (Turkey has used a fixed UTC+3 year-round since 2016 and no longer switches for daylight saving). Istanbul has distinct seasons — hot, dry summers and cool, wet winters — with spring and autumn best for sightseeing." +
      " Istanbul Airport is about 35 km from the city centre; the M11 metro line runs directly into town with connections to other lines, and HAVAIST airport buses also operate. The Hagia Sophia, the Blue Mosque and the Grand Bazaar are the city's three must-see landmarks, all clustered in the old town within walking distance of each other." +
      " Turkey offers an online e-Visa for citizens of many countries; check Turkey's Ministry of Foreign Affairs or its consulates for the latest rules for Chinese citizens and apply online in advance. Keep an eye on your belongings in crowded tourist areas.",
    },
  },
};
