import type { RouteNarrationEntry } from "@/lib/route-narration";

export const ROUTES: Record<string, RouteNarrationEntry> = {
  "lis-fao": {
    study: {
    "zh-CN":
      "里斯本飞法鲁，从首都飞到南部阿尔加维海岸，横穿整个葡萄牙本土南部。起飞后不久，脚下出现阿拉比达海岸——塞图巴尔半岛一段石灰岩山地直插大西洋形成的陡峭海岸，山海高差极大。" +
      "继续南飞，进入阿连特茹平原：一片一望无际、微微起伏的开阔地形，占葡萄牙国土约三分之一，大片间距均匀的橡树点缀其间，其中塞尔帕丘陵一带的蒙塔多农林系统已于2025年被联合国粮农组织列为全球重要农业文化遗产。" +
      "平原南端，一片宽阔的蓝色水面出现——阿尔克瓦水库，西欧最大的人工湖，由拦截瓜迪亚纳河而成。" +
      "越过水库，地面骤然变化，进入阿尔加维海岸：金黄色的石灰岩崖壁被海浪侵蚀出连串的海蚀拱和海蚀柱，法鲁就在这段海岸旁、紧邻福尔摩沙潟湖国家公园。",
    "en-US":
      "Lisbon to Faro flies from the capital to the southern Algarve coast, crossing the whole southern half of mainland Portugal. Soon after take-off, the Arrábida Coast appears below — a stretch of limestone mountain on the Setúbal Peninsula dropping steeply into the Atlantic, with an extreme land-to-sea elevation change." +
      " Flying on south, you enter the Alentejo Plain: a vast, gently rolling open landscape covering about a third of Portugal, dotted with evenly spaced oaks in a savanna-style agroforestry system, part of which — the montado of the Serpa hills — the UN Food and Agriculture Organization designated a Globally Important Agricultural Heritage System in 2025." +
      " At the plain's southern end, a broad blue expanse of water appears — the Alqueva Reservoir, the largest artificial lake in Western Europe, formed by damming the Guadiana River." +
      " Past the reservoir the land changes abruptly into the Algarve Coast: golden limestone cliffs carved by the waves into a chain of sea arches and stacks, with Faro right beside this stretch of coast, next to Ria Formosa Natural Park.",
    },
    // travel sources: 全四段（study/travel × 中英）: 阿连特茹约占国土三分之一；GIAHS 原被泛化到整片平原，按本库改为塞尔帕丘陵蒙塔多（2025）。核实 2026-09-11
    travel: {
    "zh-CN":
      "里斯本到法鲁飞约55分钟，同一时区。也可坐火车（约3小时）或长途巴士。法鲁属地中海气候，是葡萄牙日照最多的地区之一，夏季炎热干燥。" +
      "靠窗依次能看到阿拉比达海岸、阿连特茹的橡树稀树草原、阿尔克瓦水库和阿尔加维的金色海岸。以法鲁为基地租车游阿尔加维沿海度假小镇很方便。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Lisbon to Faro is about 55 minutes, in the same time zone. You can also take the train (about 3 hours) or a long-distance coach. Faro has a Mediterranean climate and is one of Portugal's sunniest regions, hot and dry in summer." +
      " From a window you see, in turn, the Arrábida Coast, the oak savanna of the Alentejo, the Alqueva Reservoir and the golden Algarve coast. Renting a car from Faro is convenient for touring the Algarve's coastal resort towns." +
      " Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "lis-fnc": {
    study: {
    "zh-CN":
      "里斯本飞丰沙尔，从欧洲大陆飞到大西洋中的马德拉群岛，是一趟大半程在开阔海面上飞行的航线。起飞后不久经过阿拉比达海岸的陡峭崖壁，随后是维森特角海岸——葡萄牙西南端一段面朝大西洋的原生崖壁，古生代变质岩构成的陡崖笔直延伸，几乎没有开发。" +
      "越过大陆架，飞机进入开阔的大西洋海面，飞行约一个多小时后，马德拉岛的轮廓才从海面上浮现——一列由多次火山喷发堆积形成的高山脊，最高点皮库鲁伊武海拔1862米，山坡覆盖着深绿色的原始月桂林。" +
      "丰沙尔就在马德拉岛南岸的一处海湾，城市依山而建，从海边一直延伸到山腰。",
    "en-US":
      "Lisbon to Funchal flies from mainland Europe to the Madeira archipelago in the Atlantic, most of it over open sea. Soon after take-off you pass the steep cliffs of the Arrábida Coast, then Costa Vicentina — a wild, largely undeveloped cliff coastline facing the Atlantic at Portugal's south-western tip, its Palaeozoic metamorphic-rock cliffs running straight and steep." +
      " Over the continental shelf the plane crosses open Atlantic water, and after a little over an hour the outline of Madeira Island rises from the sea — a high ridge built up by repeated volcanic eruptions, its highest point, Pico Ruivo, at 1,862 m, its slopes covered in dark-green primeval laurel forest." +
      " Funchal sits in a bay on Madeira's south coast, the city climbing the hillside from the sea.",
    },
    // travel sources: 全四段（study/travel × 中英）: 阿拉比达、维森特角、皮库鲁伊武峰 1862 m 与本库一致；马德拉与本土同时区。核实 2026-09-11
    travel: {
    "zh-CN":
      "里斯本到丰沙尔飞约1小时50分，同一时区。马德拉机场跑道建在悬崖边、进近有一定挑战性，是经验丰富的机组执飞。马德拉气候常年温和，被称为“大西洋的花园”。" +
      "靠窗前段能看到本土西南海岸，后段大部分时间是开阔的大西洋海面，接近马德拉时能看到岛屿多山的轮廓。丰沙尔的传统雪橇滑道和马德拉酒庄品鉴是热门体验。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Lisbon to Funchal is about 1 hour 50 minutes, in the same time zone. Madeira's airport runway is built out over a cliff and the approach is somewhat challenging, flown by experienced crews. Madeira's climate is mild year-round, earning it the name 'Garden of the Atlantic'." +
      " From a window the early part shows the mainland's south-western coast, then mostly open Atlantic water, with Madeira's mountainous outline appearing near the end. Funchal's traditional toboggan run and Madeira wine tastings are popular experiences." +
      " Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "lis-pdl": {
    study: {
    "zh-CN":
      "里斯本飞蓬塔德尔加达，从欧洲大陆一路飞到大西洋中脊上的亚速尔群岛，全程约1500公里，绝大部分时间在开阔的大西洋海面上飞行，是葡萄牙国内最长的航线之一。" +
      "起飞后很快就看不到陆地，飞机沿北大西洋暖流经过的开阔洋面向西飞行，脚下长时间只有深蓝色的海水，偶尔可见货轮的航迹。" +
      "飞行约两个半小时后，圣米格尔岛的轮廓才出现在海面上，岛屿西端一座直径约5公里的火山破火山口清晰可见——七城破火山口，口底一大一小两个相连的湖泊因光线折射常呈现一蓝一绿的对比色，是亚速尔群岛最容易辨认的地貌之一。" +
      "蓬塔德尔加达就在圣米格尔岛南岸，是探索这座活跃火山岛屿的门户，城市不大，海滨广场的三座黑白拱门是标志性地标。",
    "en-US":
      "Lisbon to Ponta Delgada flies from mainland Europe all the way to the Azores on the Mid-Atlantic Ridge, about 1,500 km, almost entirely over open Atlantic water — one of Portugal's longest domestic routes." +
      " After about two and a half hours, the outline of São Miguel Island appears over the water, and a volcanic caldera about 5 km across at the island's western end comes into clear view — Sete Cidades, whose two connected lakes on the floor, one large and one small, often show a striking blue-and-green colour contrast from light refraction." +
      " Ponta Delgada is on the south coast of São Miguel, the gateway to exploring this active volcanic island.",
    },
    // travel sources: 全四段（study/travel × 中英）: 七城破火山口与本库一致；亚速尔比本土晚 1 小时；删去站不住的「唯一一条完全跨越大洋的国内航线」。核实 2026-09-11
    travel: {
    "zh-CN":
      "里斯本到蓬塔德尔加达飞约2小时40分，落地把时钟往回拨1小时（亚速尔比本土晚一个时区）。亚速尔群岛常年温和多雨，天气变化快。" +
      "靠窗几乎全程是大西洋海面，接近圣米格尔岛时能看到火山地貌轮廓。以蓬塔德尔加达为基地可自驾环岛看七城破火山口和富尔纳斯地热区，也是热门的观鲸出发点。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定，冬季部分航班易受天气影响、建议预留缓冲时间。",
    "en-US":
      "Lisbon to Ponta Delgada is about 2 hours 40 minutes; set your clock back 1 hour on arrival (the Azores are an hour behind the mainland). The Azores are mild and rainy year-round, with fast-changing weather." +
      " From a window it is almost entirely Atlantic water, with the volcanic landscape of São Miguel appearing near the end. From Ponta Delgada you can drive around the island to see the Sete Cidades caldera and the Furnas geothermal area, and it's a popular starting point for whale watching." +
      " Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules; some winter flights are weather-sensitive, so build in buffer time.",
    },
  },

  "opo-fnc": {
    study: {
    "zh-CN":
      "波尔图飞丰沙尔，从葡萄牙北部飞到大西洋中的马德拉群岛，是几条飞马德拉航线里距离最远的一条。起飞后不久，脚下出现杜罗河谷——葡萄牙北部杜罗河中游两岸的梯田葡萄园区，人工修建的石砌梯田已有约2000年历史，波特酒即产自此地，从空中能看到随等高线弯曲排列的梯田纹理。" +
      "越过葡萄牙本土海岸后，飞机进入开阔的大西洋海面，脚下长时间只有深蓝色的海水，航线大致沿海岸线向南偏西飞行，之后折向西南穿越大洋。" +
      "长时间飞行后马德拉岛才出现在视野中——一座由多次火山喷发堆积形成的高山脊岛屿，最高点皮库鲁伊武海拔1862米，山坡覆盖着深绿色的原始月桂林。丰沙尔就在岛屿南岸的一处海湾，城市依山而建，从海边一直延伸到山腰。",
    "en-US":
      "Porto to Funchal flies from northern Portugal to the Madeira archipelago in the Atlantic, the longest of the routes to Madeira. Soon after take-off, the Douro Valley appears below — the terraced vineyard region on both banks of the middle Douro in northern Portugal, its hand-built stone terraces about 2,000 years old, the source of Port wine." +
      " Past the coast the plane crosses open Atlantic water, and only after a long stretch does Madeira come into view — an island built up by volcanic eruptions into a high ridge, its slopes covered in dark-green primeval laurel forest. Funchal sits in a bay on the island's south coast.",
    },
    // travel sources: 全四段（study/travel × 中英）: 杜罗河谷梯田（UNESCO，1 级）与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "波尔图到丰沙尔飞约2小时10分，同一时区。这是较长的一条岛际航线，建议带些机上娱乐或读物。波尔图凉爽多雨，马德拉常年温和，落地后气候会有明显变化。" +
      "靠窗前段能看到杜罗河谷的梯田葡萄园，随后大部分时间是开阔海面。丰沙尔的酒窖品鉴和悬崖步道是热门体验。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Porto to Funchal is about 2 hours 10 minutes, in the same time zone. This is one of the longer island routes — bring something to read or watch. Porto is cool and rainy while Madeira is mild year-round, so expect a noticeable climate change on arrival." +
      " From a window the early part shows the terraced vineyards of the Douro Valley, then mostly open water. Funchal's wine-cellar tastings and cliff-edge trails are popular experiences." +
      " Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "opo-pdl": {
    study: {
    "zh-CN":
      "波尔图飞蓬塔德尔加达，从葡萄牙北部一路飞到亚速尔群岛，是葡萄牙国内飞行距离最长的航线，全程超过1700公里。起飞后先经过杜罗河谷的梯田葡萄园，随后越过大陆架，进入开阔的大西洋海面。" +
      "航线大致向西南方向穿越大洋，脚下长时间只有深蓝色的海水和偶尔可见的云影，是葡萄牙国内几条航线里飞越海洋时间最长的一条。" +
      "长时间飞越大西洋后，圣米格尔岛的轮廓才出现，岛屿西端的七城破火山口清晰可见——口底两个相连的湖泊因光线折射呈现蓝绿对比色，是辨认这座岛屿最直观的标志。蓬塔德尔加达就在岛屿南岸，海滨广场的三座黑白拱门是城市地标。",
    "en-US":
      "Porto to Ponta Delgada flies from northern Portugal all the way to the Azores, one of the longest domestic routes in Portugal. After take-off you pass the terraced vineyards of the Douro Valley, then cross the continental shelf into open Atlantic water." +
      " After a long stretch over the ocean, the outline of São Miguel Island appears, with the Sete Cidades caldera at its western end clearly visible — its two connected lakes showing a blue-green colour contrast from light refraction. Ponta Delgada is on the island's south coast.",
    },
    // travel sources: 全四段（study/travel × 中英）: 「全程超过 1700 公里、飞越海洋时间最长」与同批自洽。核实 2026-09-11
    travel: {
    "zh-CN":
      "波尔图到蓬塔德尔加达飞约2小时55分，落地把时钟往回拨1小时。这是较长的一条航线，建议提前查好登机口和转机信息。亚速尔群岛常年温和多雨，天气变化快。" +
      "靠窗前段能看到杜罗河谷，随后大部分时间是大西洋海面。以蓬塔德尔加达为基地可自驾环圣米格尔岛。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定，冬季部分航班易受天气影响。",
    "en-US":
      "Porto to Ponta Delgada is about 2 hours 55 minutes; set your clock back 1 hour on arrival. This is a longer route — check gate and connection details ahead. The Azores are mild and rainy year-round, with fast-changing weather." +
      " From a window the early part shows the Douro Valley, then mostly Atlantic water. From Ponta Delgada you can drive around São Miguel Island." +
      " Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules; some winter flights are weather-sensitive.",
    },
  },

  "opo-fao": {
    study: {
    "zh-CN":
      "波尔图飞法鲁，纵贯整个葡萄牙本土，从北部飞到最南端的阿尔加维海岸，是葡萄牙本土内部飞行距离最长的一条线。起飞后不久，脚下出现蒙德古河——葡萄牙全境在国内发源、全程流经本国的最长河流，科英布拉一带河道宽阔平缓。" +
      "继续南飞，地面变成艾雷-坎迪埃罗斯山：一片灰白色的侏罗纪石灰岩喀斯特高地，地表布满石芽和落水洞，地下发育大量溶洞。" +
      "越过高地，进入阿连特茹平原——一望无际的橡树稀树草原，占葡萄牙国土约三分之一。接近终点，地面骤然变化，金黄色的阿尔加维海岸出现在眼前，法鲁就在这段海岸旁。",
    "en-US":
      "Porto to Faro runs the length of mainland Portugal, from the north to the southernmost Algarve coast — the longest flight entirely within mainland Portugal. Soon after take-off, the Mondego River appears below — the longest river to both rise and flow entirely within Portugal, wide and gentle around Coimbra." +
      " Flying on south, the land becomes Serra de Aire e Candeeiros: a pale grey Jurassic limestone karst upland, its surface dense with pinnacles and sinkholes, with an extensive cave system underground." +
      " Beyond the upland you enter the Alentejo Plain — an endless expanse of oak savanna covering about a third of Portugal. Near the end the land changes abruptly, and the golden Algarve coast comes into view, with Faro right beside it.",
    },
    // travel sources: 全四段（study/travel × 中英）: 蒙德古河、艾雷—坎迪埃罗斯侏罗纪灰岩、阿连特茹约三分之一与本库一致。核实 2026-09-11
    travel: {
    "zh-CN":
      "波尔图到法鲁飞约1小时15分，同一时区。这条南北纵贯线是葡萄牙本土最长的国内航段，比坐火车（约6-7小时、需换乘）快得多。波尔图凉爽多雨，法鲁炎热干燥，两地气候差异明显。" +
      "靠窗依次能看到蒙德古河、艾雷-坎迪埃罗斯山的喀斯特高地、阿连特茹的橡树稀树草原和阿尔加维的金色海岸，是了解葡萄牙本土地形最完整的一条线。" +
      "葡萄牙属申根区，多数国家公民短期旅游免签或按申根规定。",
    "en-US":
      "Porto to Faro is about 1 hour 15 minutes, in the same time zone. This north–south route is the longest domestic mainland flight in Portugal, much faster than the train (about 6–7 hours with a change). Porto is cool and rainy while Faro is hot and dry — the climate contrast is significant." +
      " From a window you see, in turn, the Mondego River, the karst upland of Serra de Aire e Candeeiros, the oak savanna of the Alentejo and the golden Algarve coast — the most complete way to read mainland Portugal's landforms in one flight." +
      " Portugal is in the Schengen area; most foreign visitors travel visa-free for short tourism or follow Schengen rules.",
    },
  },

  "pkx-lis": {
    // study sources: 全四段（study/travel × 中英）: 梅塞塔平均海拔 600–800 m（中文原写「六七百米」已统一）；季节性航班已带「出行前核实当季是否执飞」。核实 2026-09-11
    study: {
    "zh-CN":
      "北京大兴飞里斯本，同样向西北横跨亚欧大陆，但终点更靠西——里斯本在伊比利亚半岛最西端，直面大西洋。起飞后掠过蒙古高原南缘的戈壁，大片砾石滩延伸到天际线，年降水多在两百毫米以下，风把细沙吹走后留下坚硬的砾幂；河流多为季节性，昼夜温差极大，聚落沿着为数不多的泉水分布。越往西北，荒漠逐渐转为草原，河流开始变多，地面重新出现连片的绿色。接着进入西西伯利亚平原，地势极其平坦，河网与沼泽密布，春季融雪时大范围积水。翻过乌拉尔山脉这道亚欧分界后，山势很快落回平地。这条山脉海拔不高，南北却绵延两千多公里，形成于约三亿年前的一次大陆碰撞，此后长期剥蚀；东坡与西坡的森林构成明显不同，山中的矿藏支撑起沿线一串工业城市。再往前是东欧平原——由古老地台构成的一片开阔低地，起伏极小，河流舒缓，是欧洲面积最大的平原。飞机在这里一路向西南，穿过中欧的河谷与法国南部的丘陵，地块和村镇的密度肉眼可见地增加，田野被公路和运河切成整齐的格子。临近伊比利亚半岛，飞机掠过梅塞塔中央高原的东北角，这片台地由古生代的花岗岩与沉积岩构成，平均海拔六百到八百米。再往西地势逐级下降，抵达葡萄牙的大西洋海岸，海岸线曲折、多河口三角湾。飞机最后降落在特茹河口北岸的里斯本机场。",
    "en-US":
      "Beijing Daxing to Lisbon also heads north-west across the Eurasian landmass, but ends further west still, since Lisbon lies at the western tip of the Iberian Peninsula facing the Atlantic. After take-off the flight crosses the Gobi Desert on the southern edge of the Mongolian Plateau, gravel flats reaching the horizon under less than 200 millimetres of rain in most years, the fine sand long since carried off by wind to leave a hard pavement; the rivers are mostly seasonal, the daily temperature swing is extreme, and settlements follow the few springs. The farther north-west the route goes, the more the desert gives way to steppe, rivers become frequent, and continuous green returns to the ground. It then enters the West Siberian Plain, remarkably flat and dense with rivers and marshes, flooding across wide areas when the snow melts in spring. Past the Ural Mountains, the conventional divide between Asia and Europe, the land drops back to the flat almost at once. The range is not high, but it runs more than two thousand kilometres north to south; it rose in a continental collision some three hundred million years ago and has been eroded ever since, the forests on its eastern and western slopes differ markedly, and its ore deposits support a string of industrial cities along its length. Ahead lies the East European Plain, an open lowland built on an ancient platform with very little relief and slow rivers, the largest plain in Europe. The aircraft runs south-west across it and on through the valleys of central Europe and the hills of southern France, where the density of fields and towns visibly increases and roads and canals cut the ground into neat blocks. Approaching Iberia the flight crosses the north-eastern corner of the Meseta Central, a plateau of Palaeozoic granite and sedimentary rock at an average elevation of 600 to 800 metres. The land then steps down westward to the Atlantic coast of Portugal, a deeply indented shoreline cut by river-mouth estuaries. The flight lands at Lisbon Airport on the north bank of the Tagus estuary.",
    },
    travel: {
    "zh-CN":
      "北京到里斯本约13小时20分钟，由首都航空空客A330客机执飞。这条航线目前为季节性航班（每年约6月末至9月末、每周一班），出行前务必核实当季是否仍在执飞。两地时差7-8小时（葡萄牙夏令时期间7小时）。里斯本夏季干燥炎热、冬季温和多雨，春秋最宜出行。" +
      "里斯本机场距市中心约7公里，地铁红线直达市区约20分钟，也有机场大巴。贝伦塔、热罗尼莫斯修道院、阿尔法玛老城区的28路老式电车是市内代表性体验；葡式蛋挞（pastel de nata）、马介休（bacalhau，鳕鱼干）是当地代表美食。" +
      "葡萄牙属申根区，签证按国籍不同、以葡萄牙驻当地使领馆最新公布为准，行前确认并预留办理时间。阿尔法玛等老城区坡道多、石板路不平，建议穿舒适防滑的鞋。",
    "en-US":
      "Beijing to Lisbon takes about 13 hours 20 minutes on a Beijing Capital Airlines Airbus A330. This route currently runs seasonally — roughly late June to late September each year, once a week — so it's worth confirming it's still operating before you book. The time difference is 7–8 hours (7 hours during Portuguese summer time). Lisbon has dry, hot summers and mild, rainy winters, with spring and autumn the best seasons to visit." +
      " Lisbon Airport is about 7 km from the centre; the red metro line runs directly into the city in about 20 minutes, and airport buses also operate. The Belém Tower, the Jerónimos Monastery and a ride on the vintage Tram 28 through the Alfama district are signature experiences; pastéis de nata and bacalhau (dried salt cod) are local specialties." +
      " Portugal is in the Schengen area; visa rules vary by nationality — check the latest from the Portuguese consulate for your location and allow time to arrange one. The Alfama and other old quarters have steep, uneven cobblestone streets, so comfortable, non-slip shoes are worth packing.",
    },
  },
};
