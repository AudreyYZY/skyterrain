import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "waw-krk": {
    study: {
    "zh-CN":
      "华沙飞克拉科夫，是波兰国内客流量最大的航线，每日往返多达6班，连接首都与历史古都。飞机离开华沙后向南飞行，中途掠过圣十字山——波兰境内地质年代最古老的山脉之一，基岩可追溯至约5亿年前的古生代，历经数亿年反复的构造运动与风化夷平已成为低矮浑圆的丘状山地，山坡上散布着侵蚀残留的石英岩碎块堆（当地称“戈乌博尔基”），与波兰其他年轻山脉的陡峭轮廓形成鲜明对比。" +
      "越过圣十字山后，飞机继续向南飞行，逐渐进入小波兰地区、地势开始向喀尔巴阡山脉过渡，最终降落在克拉科夫——1038至1596年间波兰王国的首都，也是瓦维尔城堡所在地，1978年老城与城堡列入首批联合国教科文组织世界遗产名录。",
    "en-US":
      "Flying from Warsaw to Kraków is Poland's busiest domestic route, linking the capital with the historic former capital. After leaving Warsaw the flight heads south, passing over the Świętokrzyskie Mountains midway — one of the geologically oldest ranges in Poland, its bedrock dating to the Palaeozoic around 500 million years ago, worn by hundreds of millions of years of weathering into today's low, rounded hill form, its slopes scattered with eroded quartzite debris." +
      " Past the Świętokrzyskie range, the flight continues south into Lesser Poland, landing in Kraków, the historic former capital and home to Wawel Castle.",
    },
    // travel sources: 全四段（study/travel × 中英）: 圣十字山约 5 亿年基岩、戈乌博尔基；克拉科夫 1978 年首批 UNESCO 与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "华沙到克拉科夫飞约55分钟，同一时区，是波兰航空运营的国内航班之一（安波190机型，每日6班往返），也可选择约2.5小时的城际火车。克拉科夫机场离市区约11公里。克拉科夫是探索小波兰地区（扎科帕内、维利奇卡盐矿）的理想门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Kraków is about 55 minutes, same time zone, operated by LOT Polish Airlines (Embraer 190, six round trips daily) as one of Poland's domestic routes; an intercity train (about 2.5 hours) is another option. Kraków Airport is about 11 km from the centre. Kraków is an ideal gateway for exploring Lesser Poland (Zakopane, the Wieliczka Salt Mine). Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "waw-gdn": {
    study: {
    "zh-CN":
      "华沙飞格但斯克，是一趟连接波兰首都与波罗的海沿岸港口城市的航线。飞机离开华沙后向北飞行，脚下的地貌逐渐从中部平原过渡为维斯瓦河下游流域，维斯瓦河是波兰境内最长的河流，发源于西南部喀尔巴阡山脉北麓，全程贯穿波兰、最终在格但斯克附近注入波罗的海。" +
      "临近格但斯克降落前，脚下展开维斯瓦三角洲低地——维斯瓦河入海口处的冲积三角洲平原，部分区域海拔低于海平面，历史上经16世纪起荷兰移民带来的堤坝排水技术围垦而成，是波兰境内地势最低的区域，河网密布、以纵横的排水渠道著称，飞机随后降落在格但斯克——历史上汉萨同盟重要的贸易城市，也是二战爆发的第一枪打响之地。",
    "en-US":
      "Flying from Warsaw to Gdańsk links Poland's capital with its Baltic coast port city. After leaving Warsaw the flight heads north, the landscape below gradually shifting from the central plain into the lower Vistula river basin." +
      " Approaching Gdańsk, Żuławy Wiślane comes into view below — the alluvial delta plain at the Vistula's mouth, part of it lying below sea level, historically reclaimed using dike-and-drainage technology introduced by Mennonite settlers from the Low Countries from the 16th century onward, the lowest-lying region in Poland — before the flight lands in Gdańsk, a historically important Hanseatic League trading city.",
    },
    // travel sources: 全四段（study/travel × 中英）: 维斯瓦河波兰最长、三角洲为全国最低处；围垦原写「中世纪荷兰移民」，按本库改为 16 世纪起门诺派。核实 2026-09-11
    travel: {
    "zh-CN":
      "华沙到格但斯克飞约50分钟，同一时区，是波兰航空运营的国内航班之一（安波190机型，每周约40班），也可选择约2.5小时的城际火车。格但斯克机场离市区约12公里。格但斯克是探索波罗的海沿岸海尔半岛与斯沃文斯基沙丘的理想门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Gdańsk is about 50 minutes, same time zone, operated by LOT Polish Airlines (Embraer 190, about 40 flights weekly) as one of Poland's domestic routes; an intercity train (about 2.5 hours) is another option. Gdańsk Airport is about 12 km from the centre. Gdańsk is an ideal gateway for exploring the Hel Peninsula and the Słowiński dunes along the Baltic coast. Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "waw-wro": {
    study: {
    "zh-CN":
      "华沙飞弗罗茨瓦夫，是一趟横跨波兰中西部、连接首都与西里西亚核心城市的航线。飞机离开华沙后向西飞行，脚下展开大波兰低地开阔平坦的地貌——中欧平原位于波兰境内的主体部分，由末次冰期冰川堆积物构成，地表覆盖厚层冰碛物与冰水沉积物，大片规整的农田一望无际，是波兰面积最大的农业区，也是波兰主要的小麦与甜菜产区。" +
      "越过大波兰低地后，飞机继续向西南飞行，逐渐进入奥得河谷地，最终降落在弗罗茨瓦夫——奥得河畔以百余座桥梁与街头小矮人雕塑闻名的西里西亚核心城市，历史上曾多次易主，如今是波兰重要的工业与学术中心之一。",
    "en-US":
      "Flying from Warsaw to Wrocław crosses west-central Poland, linking the capital with the core city of Silesia. After leaving Warsaw the flight heads west, the open, flat landform of the Great Polish Lowland unfolding below — the main portion of the Central European Plain lying within Poland, built of last-glacial ice-sheet deposits, its extensive, regular farmland stretching to the horizon as Poland's largest agricultural region." +
      " Past the Great Polish Lowland, the flight continues south-west, landing in Wrocław, the core city of Silesia on the Oder, known for its hundred-plus bridges and its street-side dwarf statues.",
    },
    // travel sources: 全四段（study/travel × 中英）: 大波兰低地；弗罗茨瓦夫约 130 座桥；「历史上曾多次易主」为史实、无评价。核实 2026-09-11
    travel: {
    "zh-CN":
      "华沙到弗罗茨瓦夫飞约50分钟，同一时区，是波兰航空运营的国内航班之一（安波190机型，每日6班往返），也可选择约4.5小时的城际火车。弗罗茨瓦夫机场离市区约10公里。弗罗茨瓦夫是探索西里西亚地区的理想门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Wrocław is about 50 minutes, same time zone, operated by LOT Polish Airlines (Embraer 190, six round trips daily) as one of Poland's domestic routes; an intercity train (about 4.5 hours) is another option. Wrocław Airport is about 10 km from the centre. Wrocław is an ideal gateway for exploring the Silesia region. Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "waw-poz": {
    study: {
    "zh-CN":
      "华沙飞波兹南，是一趟连接波兰首都与最古老城市之一的短途航线。起飞后不久，脚下即展开大波兰低地开阔平坦的地貌——由末次冰期冰川堆积物构成的平原，地表保留有大量冰川作用形成的锅状凹地小湖，大片农田与零星分布的森林、湖泊交织，是波兰境内地势最为平坦开阔的区域。" +
      "飞机继续向西飞行，最终降落在波兹南——瓦尔塔河畔的古老城市，波兰最早的行政与宗教中心之一，坐落于这片开阔低地之上，如今是波兰重要的会展与工业城市。",
    "en-US":
      "Flying from Warsaw to Poznań is a short hop linking the capital with one of Poland's oldest cities. Soon after take-off, the open, flat landform of the Great Polish Lowland unfolds below — a plain built of last-glacial ice-sheet deposits, extensive farmland interwoven with scattered forest and lakes, the flattest, most open region within Poland." +
      " The flight continues west, landing in Poznań, an ancient city that was historically one of the political centres of the early Polish state, built on this open lowland.",
    },
    // travel sources: 全四段（study/travel × 中英）: 大波兰低地；波兹南「最早的行政与宗教中心之一」带限定。核实 2026-09-11
    travel: {
    "zh-CN":
      "华沙到波兹南飞约39分钟，同一时区，是波兰航空运营的国内航班之一（安波175机型），也可选择约2.5小时的城际火车。波兹南机场离市区约6公里。波兹南是探索大波兰低地地区的理想门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Poznań is about 39 minutes, same time zone, operated by LOT Polish Airlines (Embraer 175) as one of Poland's domestic routes; an intercity train (about 2.5 hours) is another option. Poznań Airport is about 6 km from the centre. Poznań is an ideal gateway for exploring the Great Polish Lowland region. Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "waw-rze": {
    study: {
    "zh-CN":
      "华沙飞热舒夫，是一趟飞往波兰东南部、探索别什恰迪山脉的门户航线。飞机离开华沙后向南飞行，中途掠过圣十字山——波兰境内地质年代最古老的山脉，基岩可追溯至古生代，历经数亿年风化夷平已成为低矮浑圆的丘状山地，是欧洲少数保留有古生代原始地貌痕迹的山地之一。" +
      "越过圣十字山后，飞机继续向东南飞行，逐渐进入小波兰东部地区、地势向喀尔巴阡山前地带过渡，最终降落在热舒夫——波兰重要的航空工业中心，因此得名“波兰航空谷”。",
    "en-US":
      "Flying from Warsaw to Rzeszów is a gateway route to south-eastern Poland and the Bieszczady Mountains. After leaving Warsaw the flight heads south, passing over the Świętokrzyskie Mountains midway — the geologically oldest range in Poland, its bedrock dating to the Palaeozoic, worn by hundreds of millions of years of weathering into today's low, rounded hill form." +
      " Past the Świętokrzyskie range, the flight continues south-east into the eastern part of Lesser Poland, landing in Rzeszów, an important Polish aerospace-industry centre nicknamed \"Aviation Valley.\"",
    },
    // travel sources: 全四段（study/travel × 中英）: 「波兰航空谷」属实；删去查无来源的「机场附近航空博物馆」。核实 2026-09-11
    travel: {
    "zh-CN":
      "华沙到热舒夫飞约55分钟，同一时区，是波兰航空运营的国内航班之一（安波190机型），也可选择约3小时的城际火车。热舒夫—亚西翁卡机场离市区约10公里。热舒夫是探索别什恰迪山脉波沃尼纳草甸的便捷门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Rzeszów is about 55 minutes, same time zone, operated by LOT Polish Airlines (Embraer 190) as one of Poland's domestic routes; an intercity train (about 3 hours) is another option. Rzeszów-Jasionka Airport is about 10 km from the centre. Rzeszów is a convenient gateway for the połoniny meadows of the Bieszczady Mountains. Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "waw-szz": {
    study: {
    "zh-CN":
      "华沙飞什切青，是一趟横跨波兰全境、抵达西北部奥得河口港口城市的航线，也是波兰境内飞行距离最长的国内航线之一。飞机离开华沙后向西北飞行，脚下持续展开大波兰低地开阔平坦的地貌，大片农田与零星分布的湖泊、森林一望无际。" +
      "飞机继续向西北飞行，逐渐接近波兰与德国边境，什切青潟湖与奥得河口的水网在地平线上依稀可见，最终降落在什切青——紧邻德国边境、坐落于奥得河口的重要港口与工业城市，也是波兰通往波罗的海的重要出海口。",
    "en-US":
      "Flying from Warsaw to Szczecin spans the length of Poland to reach the port city at the mouth of the Oder in the north-west. After leaving Warsaw the flight heads north-west, the open, flat landform of the Great Polish Lowland continuing below it, extensive farmland stretching to the horizon." +
      " The flight continues north-west, gradually approaching the Poland-Germany border, before landing in Szczecin, an important port and industrial city at the mouth of the Oder, right on the German border.",
    },
    // travel sources: 全四段（study/travel × 中英）: 奥得河口港口与工业城市；删去只有 3 级来源且站不住的「海军主要基地之一」。核实 2026-09-11
    travel: {
    "zh-CN":
      "华沙到什切青飞约50分钟，同一时区，是波兰航空运营的国内航班之一（安波175机型），也可选择约6.5小时的城际火车。什切青—戈萊尼乌夫机场离市区约45公里。什切青是探索沃林岛国家公园的理想门户。波兰属申根区，多数国家公民短期旅游按申根区规定执行。",
    "en-US":
      "Warsaw to Szczecin is about 50 minutes, same time zone, operated by LOT Polish Airlines (Embraer 175) as one of Poland's domestic routes; an intercity train (about 6.5 hours) is another option. Szczecin-Goleniów Airport is about 45 km from the centre. Szczecin is an ideal gateway for exploring Wolin National Park. Poland is a Schengen-area member; citizens of most countries follow Schengen rules for short visits.",
    },
  },

  "pek-waw": {
    // study sources: 全四段（study/travel × 中英）: 肖邦机场；华沙老城战后按原貌重建、1980 年列入 UNESCO。核实 2026-09-11
    study: {
    "zh-CN":
      "北京飞华沙，向西北横跨亚欧大陆，全程约七千一百公里，终点在中欧的维斯瓦河畔。起飞后爬升越过燕山，进入蒙古高原南缘的戈壁——这里年降水多在两百毫米以下，地表以砾石和裸岩为主，风把细沙吹走后留下坚硬的砾幂；河流大多是季节性的，雨后短暂过水随即干涸，昼夜温差常超过三十度，越往西北，砾漠越多地让位给草原与稀树草地。接着是西西伯利亚平原，地势极其平坦，河流蜿蜒北流，沼泽面积之大在全球都少有。翻过乌拉尔山脉后，飞机进入一片开阔低地——这条古老山系南北绵延两千多公里，是亚欧两洲的传统分界，海拔不高但地质年代久远，铁、铜、宝石等矿产丰富，沿线因此形成了成片的工业城市。再往西进入东欧平原，冰期留下的低缓丘陵与沙质平原交替出现，河流在其间宽缓地绕行。飞机降落在华沙市区西南的肖邦机场。",
    "en-US":
      "Beijing to Warsaw runs north-west across the Eurasian landmass, about 7,100 km in all, ending on the Vistula in central Europe. After take-off the aircraft climbs over the Yan Mountains into the Gobi Desert on the southern edge of the Mongolian Plateau, where most years bring less than 200 millimetres of rain and the surface is gravel and bare rock, the fine sand long since stripped away by wind to leave a hard pavement; the rivers are mostly seasonal, running briefly after rain and then drying out, the daily temperature can swing more than thirty degrees, and the farther north-west the flight goes the more the gravel gives way to steppe. Next comes the West Siberian Plain, remarkably flat, its rivers winding north through marshes of a size found almost nowhere else on Earth. Past the Ural Mountains the flight enters an open lowland: the range runs more than two thousand kilometres north to south as the conventional divide between Asia and Europe, and although it is not high it is geologically very old and rich in iron, copper and gemstones, which is why industrial cities line its length. Farther west the route enters the East European Plain, where low hills left by the ice ages alternate with sandy flats and the rivers wander broadly between them. The flight lands at Chopin Airport south-west of central Warsaw.",
    },
    travel: {
    "zh-CN":
      "北京到华沙约8小时30分钟，由中国国际航空空客A330客机执飞。两地时差6-7小时（波兰夏令时期间6小时）。波兰冬季寒冷多雪，夏季温和，春秋最适合游览。" +
      "华沙肖邦机场距市中心约10公里，地铁M1线或城市快铁（SKM/KM）均可进城，车程约20-30分钟。华沙老城（二战后按原貌重建，UNESCO世界遗产）、瓦津基公园、华沙起义博物馆是市内代表性景点。" +
      "波兰属申根区，签证按国籍不同、以波兰外交部/驻华使领馆最新公布为准，行前务必核实并预留办理时间。华沙老城石板路较多，建议穿舒适的鞋子。",
    "en-US":
      "Beijing to Warsaw takes about 8 hours 30 minutes on an Air China Airbus A330. The time difference is 6-7 hours (6 hours during Polish summer time). Poland has cold, snowy winters and mild summers, with spring and autumn best for sightseeing." +
      " Warsaw Chopin Airport is about 10 km from the city centre; the M1 metro line or the SKM/KM city rail both run into town in about 20-30 minutes. Warsaw's Old Town (rebuilt after WWII to its original appearance, a UNESCO World Heritage Site), Łazienki Park and the Warsaw Uprising Museum are among the city's landmark sights." +
      " Poland is in the Schengen area; visa rules vary by nationality — check the latest from the Polish Ministry of Foreign Affairs or its consulate for your location and allow time to arrange one. The Old Town has a lot of cobblestone streets, so comfortable shoes are worth packing.",
    },
  },
};
