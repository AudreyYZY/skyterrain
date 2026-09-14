import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Luxembourg ============
  "oesling-plateau": {
    // 全六段 sources: 克奈夫峰 560 m 为卢森堡最高点 —— 1952 年起长期认为邻近的布尔格普拉茨峰（约 558–559 m）更高，**1997 年 GPS 复测纠正**；ACT 2003 年地图标注 Kneiff 560 / Buurgplaatz 559。正文把这段更正史写进去了，是正确处理。核实 2026-09-11，未改动
    seeing:
      "The Oesling covers about a third of northern Luxembourg's territory, an eastward extension of the Ardennes; its highest point, the Kneiff, reaches 560 m, the highest point in the country.",
    formation:
      "The plateau is built of ancient Precambrian-to-Palaeozoic rock; long weathering and erosion have produced today's comparatively gentle, undulating plateau landform, part of the same geological zone as the Ardennes extensions in neighbouring Belgium and Germany.",
    observation:
      "From the air, the plateau shows gentle relief, with forest and pasture alternating; narrow valleys cut by rivers into the plateau are scattered throughout, forming a marked landform contrast with the flat Gutland to the south.",
    distinguish:
      "Both the Oesling and Minett are important uplifted landforms in Luxembourg, but the Oesling lies in the north as an extension of the Ardennes, while Minett lies at the very southern tip, named for its exposed iron-ore layers.",
    concept:
      "As an eastward extension of the Ardennes, the Oesling is a classic case for studying the geological continuity of an ancient plateau spanning Belgium, Luxembourg and Germany.",
    history:
      "The Kneiff was confirmed as Luxembourg's highest point after a 1997 remeasurement (the nearby Buurgplaatz was long thought to be higher); the plateau has historically been sparsely populated, relying on traditional farming, herding and forestry.",
  },
  "minett-red-lands": {
    seeing:
      "Minett is a hill district at Luxembourg's southernmost tip, named for its exposed Jurassic oolitic iron-ore layers, and the birthplace of Luxembourg's steel industry from the 19th century.",
    formation:
      "The surface rock is rich in oolitic iron ore (locally called \"minette\") formed in the Jurassic period; where the ore layer is exposed, the high iron-oxide content gives the soil a reddish-brown colour, the origin of the region's name.",
    observation:
      "From the air, traces of historic mining are visible across the hills; some abandoned mining areas have been converted into industrial-heritage parks and nature reserves, forming a sharp contrast with the farming and forest landscapes of the rest of Luxembourg.",
    distinguish:
      "Both Minett and the Oesling are important uplifted landforms in Luxembourg, but Minett is known for its iron-mining history and reddish-brown soil, while the Oesling is known for its ancient plateau landform extending from the Ardennes.",
    concept:
      "Minett's oolitic iron-ore layer is a classic geological sample for studying how a Jurassic shallow-sea sedimentary environment can produce economically valuable iron-ore resources, and it forms the geological foundation of Luxembourg's industrial history.",
    // history sources: 米内特生物圈保护区 2020-10-28 设立，为**卢森堡单一国家**保护区（11 个市镇、约 200 km²），是该国首个也是唯一一个（unesco.org/en/mab/minett，1 级）。法国 Pays Haut Val d'Alzette 正另行申请、尚未获批；比利时未参与 —— 原文把「未来或可整合」写成了「已经共同列入」。核实 2026-09-11
    history:
      "From the late 19th through the 20th century, Minett's iron-ore mining made Luxembourg one of Europe's important steel producers; in 2020 the region was designated the UNESCO Minett Biosphere Reserve, Luxembourg's first and so far only biosphere reserve; a neighbouring part of France is separately seeking its own designation, with cross-border integration a possibility for the future rather than something that already exists.",
  },
  "our-valley": {
    // 全六段 sources: 维安登城堡 275 年为罗马哨所、约公元 1000 年建首座中世纪石堡、11–13 世纪历次扩建，正文「始建于10世纪」与官方时间线吻合；雨果 1871-06-08 至 08-22 在此避难约三个半月并作《恐怖的年代》。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "The Our Valley is a deeply cut valley where the Our River cuts through the Oesling plateau, forming the border between Luxembourg and Germany; Vianden Castle stands on a cliff above the valley.",
    formation:
      "The river has long eroded the ancient rock of the Oesling plateau, cutting a narrow, deep valley with steep flanks on both sides — a classic river-incision landform in the plateau region.",
    observation:
      "From the air, the valley winds narrowly, its banks densely forested, with Vianden Castle standing atop a cliff on the eastern bank, overlooking the entire valley — one of Luxembourg's most iconic valley-and-castle landscapes.",
    distinguish:
      "Both the Our Valley and the Clerve Valley are important river-incision landforms on the Oesling plateau, but the Our Valley is a border river with Germany and is more deeply and steeply incised, while the Clerve Valley lies entirely within Luxembourg with a comparatively open valley floor.",
    concept:
      "As a border-river valley, the Our Valley is a classic case for studying how river incision shapes a border landform on an ancient plateau.",
    history:
      "Vianden Castle was first built in the 10th century and expanded many times since, one of the largest surviving feudal castles in Luxembourg; the 19th-century French writer Victor Hugo lived in exile here and wrote about the area.",
  },
  "clerve-valley": {
    // 全六段 sources: 克莱尔沃城堡始建于 12 世纪（最古老的西翼可溯至 Gerhard of Sponheim 伯爵）；1944-12-16 至 18 的克莱尔沃战役是突出部战役开场战斗之一，城堡在此役被毁、战后由政府修复。按判据这是已结束、无持续对立的军事地理史实，保留。核实 2026-09-11，未改动
    seeing:
      "The Clerve Valley is a narrow valley where the Clerve River (a tributary of the Our) cuts through the Oesling plateau; the town of Clervaux is built along both banks of the valley.",
    formation:
      "The river has eroded the ancient rock of the Oesling plateau to form a narrow valley, its floor comparatively open and gentle, somewhat different from the steep, deep incision of the Our Valley.",
    observation:
      "From the air, the buildings of Clervaux town line both banks of the valley, with a medieval castle standing on high ground at the centre of the valley floor, overlooking the whole area — a classic valley-settlement landscape of the Oesling region.",
    distinguish:
      "Both the Clerve Valley and the Our Valley are important river valleys on the Oesling plateau, but the Clerve Valley lies entirely within Luxembourg with a comparatively open floor, while the Our Valley is a border river with a more deeply incised valley.",
    concept:
      "The spatial pattern of Clervaux's settlement lining both banks of the valley, with its castle dominating high ground at the centre, is a classic case for studying the siting logic of valley settlements in the Oesling region.",
    history:
      "Clervaux Castle was first built in the 12th century; the area was an important battlefield during the Battle of the Bulge in the Second World War, and the castle and valley still bear traces of this history.",
  },
  "eisch-valley": {
    // 全六段 sources: 七堡多建于 11–13 世纪（安森堡老堡 1135 年首见文献、霍伦费尔斯堡 11 世纪起源、舍恩费尔斯堡 13 世纪主楼）；谷地自罗马—中世纪起有冲积铁矿与木炭熔炼、1564 年已有小型高炉，正文只称「繁荣」未夸大为工业化；七堡步道 37 km。核实 2026-09-11，未改动
    seeing:
      "The Eisch Valley is informally known as the \"Valley of the Seven Castles\" for the seven medieval castles found along it; most of the valley forms one of the largest nature reserves in Luxembourg.",
    formation:
      "The Eisch River has cut a valley through the comparatively gentle Gutland region of west-central Luxembourg, its flanks showing mild relief, in contrast with the steep valley landforms of the Oesling.",
    observation:
      "From the air, dense forest covers the valley, with seven castles scattered along its length; Ansembourg Castle is one of the most representative, set against the natural scenery of the valley.",
    distinguish:
      "Both the Eisch Valley and the Moselle Valley are important valley landforms in south-central Luxembourg, but the Eisch Valley is known for its dense cluster of medieval castles and nature reserve, while the Moselle Valley is known for its wine region and mild climate.",
    concept:
      "The dense clustering of seven castles along the Eisch Valley is a classic human-geography case for studying how medieval European feudal lords used valley terrain for defensive siting.",
    history:
      "Most of the valley's seven castles were built between the 11th and 13th centuries; the region once thrived on steel production, but nature has since reclaimed the area, and a roughly 37-km footpath now links the castles along the valley.",
  },
  "moselle-valley-lu": {
    // 全六段 sources: 葡萄种植可溯至罗马时期 —— **与本库德国侧 moselle-valley 条目并排读一致**（同一条河、同一段种植传统史，两侧无冲突）。核实 2026-09-11，未改动
    seeing:
      "The Luxembourg section of the Moselle Valley: the Moselle forms the border between Luxembourg and Germany, and the gentle slopes along its banks make up Luxembourg's only wine-growing region.",
    formation:
      "The valley's banks form gentle slopes whose soil and aspect suit viticulture; it is the lowest-lying, mildest-climate part of Luxembourg, a sharp contrast with the cold climate of the Oesling to the north.",
    observation:
      "From the air, vineyards line the gentle slopes on both banks in orderly rows, with riverside towns such as Remich dotted throughout; the Moselle's broad, gentle channel runs through the valley — one of Luxembourg's most pastoral landscapes.",
    distinguish:
      "Both the Moselle Valley and the Our Valley are border-river valleys shared with Germany, but the Moselle Valley is low-lying with a mild climate and defined by viticulture, while the Our Valley lies in the northern plateau with a more deeply incised course.",
    concept:
      "The mild valley microclimate of Luxembourg's Moselle Valley is a classic case for studying how river-valley topography can provide favourable microclimate conditions for temperate viticulture.",
    history:
      "Winegrowing in the Moselle Valley traces back to Roman times, one of Luxembourg's oldest agricultural traditions; riverside towns such as Remich still rely on the wine industry as a key economic pillar today.",
  },
  "upper-sure-lake": {
    // seeing sources: 大坝 1956 动工 / 1957 建成 / 1959 首次蓄满；湖面约 3.8 km²（380 ha）；供应约 70% **人口**（非「家庭」）的饮用水 —— 均为 SEBES 与公共工程部官方口径（1 级）。原写的「1961 年」不对应任何一个官方节点；「3.08 km²」疑为小数点错位。核实 2026-09-11
    seeing:
      "The Upper Sûre Lake is an artificial reservoir created by damming the Sûre in the late 1950s — the dam was begun in 1956, built in 1957 and first filled in 1959 — covering about 3.8 km² and supplying drinking water to about 70% of Luxembourg's population.",
    formation:
      "The lake was created artificially by a dam across the Sûre's channel, flooding the original valley; the shoreline follows the original valley's winding contours.",
    observation:
      "From the air, the water winds along the original valley course, its shores densely forested; the old castle and town of Esch-sur-Sûre sit on a peninsula-like landform at the lake's edge — one of Luxembourg's most recognisable bodies of water.",
    distinguish:
      "The Upper Sûre Lake is Luxembourg's only large artificial lake, in contrast with the natural downstream stretch of the Sûre, illustrating a classic case of how a hydraulic engineering project can transform an original valley landform.",
    concept:
      "As Luxembourg's main drinking-water source, the Upper Sûre Lake is a classic case for studying how a small landlocked country secures its water supply through an artificial reservoir project.",
    history:
      "The dam was begun in 1956 and built in 1957, an important piece of post-war Luxembourg water infrastructure; the surrounding Upper Sûre Nature Park is now an important area for ecotourism and recreation in Luxembourg.",
  },
  "sure-river": {
    // 全六段 sources: 全长约 206 km、境内约 136 km —— 采**卢森堡本国官方口径**（政府环境门户 environnement.public.lu 1 级 + 官方旅游局 2 级，境内另有 135 km 的四舍五入版本）。⚠️ 英文维基给总长 173 km，与本国官方及法语维基（206 km）冲突，若日后查明换算方式不同需回来复核。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "The Sûre rises in Belgium and flows through northern and central Luxembourg, running about 206 km in total (about 136 km within Luxembourg) — the longest river in the country.",
    formation:
      "The river's upper course runs along the margin of the Oesling plateau, its middle and lower course entering the comparatively gentle Gutland, before ultimately joining the Moselle near Wasserbillig — an important water system linking Luxembourg's northern plateau and southern lowlands.",
    observation:
      "From the air, the upper channel is comparatively narrow; after passing through the Upper Sûre Lake, the channel widens and slows, with historic towns such as Diekirch along its middle and lower banks, its floodplain mostly farmland and forest.",
    distinguish:
      "Both the Sûre and the Alzette are important rivers in Luxembourg, but the Sûre is the country's longest river, running through the north and centre, while the Alzette flows mainly through the capital and the southern industrial region.",
    concept:
      "The way the Sûre links the Oesling plateau, the Upper Sûre reservoir and the Gutland lowlands is a classic case for studying how a river in a small landlocked country crosses different landform units to support a regional water network.",
    history:
      "Riverside towns such as Diekirch historically grew up around navigation and trade on the Sûre; today the river's banks are an important area for history, culture and outdoor recreation in Luxembourg.",
  },
  "alzette-river": {
    // 全六段 sources: 源出法国默尔特—摩泽尔省 Villerupt 附近的 Thil，向北流经卢森堡市；深切砂岩台地成峡谷、塑造老城防御地形，与 luxembourg-plateau 条目并读一致。核实 2026-09-11，未改动
    seeing:
      "The Alzette rises in France and flows north through Luxembourg City, the capital, and the southern Minett industrial region — the main river running through Luxembourg's most densely populated area.",
    formation:
      "The river flows from south to north; near the capital it cuts deeply into the Luxembourg Plateau's sandstone, forming a gorge landform that gave the old city its natural defensive siting.",
    observation:
      "From the air, the river's southern stretch runs through the Minett industrial region, with historic mining traces visible along its banks; its middle stretch cuts a gorge through Luxembourg City's old town, and its northern stretch joins the Sûre — showing a shift in landform and human geography from industrial region to capital gorge.",
    distinguish:
      "Both the Alzette and the Sûre are important rivers in Luxembourg, but the Alzette flows mainly through the capital and the southern industrial region with higher population density, while the Sûre runs through the northern plateau and central lowlands and is known for its historic towns.",
    concept:
      "The process by which the Alzette cut a gorge through the Luxembourg Plateau's sandstone, in turn shaping the siting and defensive layout of the capital, is a classic case for studying how a river landform can influence the siting of a historic city.",
    history:
      "The Minett industrial region along the river's southern stretch historically thrived on iron-ore mining, the birthplace of Luxembourg's industrialisation; Luxembourg City's old town, along the river's middle stretch, has been a strategic site since the 10th century thanks to the natural defensive advantage of the gorge.",
  },
  "mullerthal-berdorf": {
    // 全六段 sources: 米勒达尔的「卢森堡小瑞士」别称、砂岩迷宫地貌、贝多夫石柱岩缝均为公认事实；Mullerthal Trail 以该区域为核心路段。核实 2026-09-11，未改动
    seeing:
      "The Mullerthal region is known as Luxembourg's \"Little Switzerland\" for its heavily eroded sandstone landforms; the area around Berdorf is densely packed with honeycomb-like sandstone pillars and narrow rock passages.",
    formation:
      "The surface rock is Jurassic sandstone; long erosion by running water and freeze-thaw weathering has carved dense pillars, crevices and caves out of the comparatively soft rock, producing today's rugged, maze-like sandstone landscape.",
    observation:
      "From the air, dense forest covers the sandstone landform, its complex honeycomb-like texture interwoven with narrow rock crevices and isolated pillars — a striking contrast with the gentle terrain typical elsewhere in Luxembourg.",
    distinguish:
      "Both the Mullerthal/Berdorf sandstone region and the Schiessentümpel are representative landforms of the Mullerthal area, but Berdorf is defined by its dense maze of sandstone pillars and crevices, while the Schiessentümpel is defined by its small cascading waterfall scene.",
    concept:
      "The honeycomb-like sandstone landform of the Mullerthal region is a classic case for studying how Jurassic sandstone develops complex microlandforms through differential erosion by running water and freeze-thaw weathering; its resemblance to the landscape of the Swiss Alps is the origin of the \"Little Switzerland\" name.",
    history:
      "Local place names such as \"Wollefsschlucht\" (Wolf's Gorge) record long-standing local folklore; the Mullerthal region has been an important Luxembourg nature-tourism destination since the 19th century, and is now the core area of the long-distance Mullerthal Trail.",
  },
  schiessentumpel: {
    // 全六段 sources: 砂岩拱桥由石匠 Jean-Pierre Prommenschenkel 于 1879-03-20 至 07-27 建成（仅四个月），桥上有鳄鱼头、蜗牛等雕刻。核实 2026-09-11，未改动
    seeing:
      "The Schiessentümpel is a small, three-tiered cascading waterfall in the Mullerthal region; a sandstone arch bridge built in front of it in 1879 has become an iconic sight of the area.",
    formation:
      "The waterfall formed as the Black Ernz (a tributary of the Eisch) flows over sandstone layers of differing hardness; the softer layers are preferentially eroded, producing today's three-step cascading form.",
    observation:
      "From the air, the three-tiered waterfall drops in sequence within a narrow valley, with the historic sandstone arch bridge spanning the water downstream, set against the dense forest around it — one of the most iconic sights of the Mullerthal region.",
    distinguish:
      "Both the Schiessentümpel and the Mullerthal/Berdorf sandstone region are representative landforms of the Mullerthal area, but the Schiessentümpel is known for its small cascading waterfall and historic bridge, while Berdorf is known for its dense maze of sandstone pillars.",
    concept:
      "The three-tiered form of the Schiessentümpel is a classic case for studying how a river erodes sandstone layers of differing hardness to produce a stepped waterfall landform.",
    history:
      "The sandstone arch bridge in front of the waterfall was built in 1879 and remains in use more than a century later, now an iconic sight and popular photo spot in Luxembourg's \"Little Switzerland.\"",
  },
  "luxembourg-plateau": {
    // 全六段 sources: 963 年西格弗里德伯爵在博克岩建 Lucilinburhuc 城堡，为卢森堡建城起点（卢森堡政府官网，1 级）；老城与要塞 1994-12-17 列入 UNESCO（whc.unesco.org/en/list/699，1 级）。核实 2026-09-11，未改动
    seeing:
      "The Luxembourg Plateau is a sandstone plateau in south-central Gutland where the capital, Luxembourg City, is built; gorges cut by the Alzette and Pétrusse rivers surround the old town.",
    formation:
      "The plateau's bedrock is sandstone; the Alzette and its tributary the Pétrusse have long eroded the plateau's margins, cutting deep gorges that leave the core of the plateau, where the old town sits, as a naturally defensible promontory.",
    observation:
      "From the air, the old town's buildings are densely packed atop the plateau, with deep, densely forested gorges on either side; the Bock promontory juts out above the gorge, a classic viewpoint for overlooking the whole plateau-and-gorge landform.",
    distinguish:
      "Both the Luxembourg Plateau and the Mullerthal/Berdorf sandstone region are sandstone landforms within Luxembourg, but the Luxembourg Plateau is a promontory shaped by river-cut gorges that hosts the capital city, while the Berdorf sandstone region is defined by its dense maze of pillars and crevices, mainly used for nature hiking.",
    concept:
      "The natural defensive promontory shaped by river incision on the Luxembourg Plateau is a classic case for studying how European historic cities exploited river-erosion landforms for defensive siting.",
    history:
      "Since Count Siegfried built a castle on the Bock promontory in the 10th century, Luxembourg City has grown around this naturally defensible landform; fortifications carved into the sandstone from the 17th century, including the Pétrusse Casemates, earned the old city the nickname \"Gibraltar of the North,\" and the old town and fortifications were inscribed on the UNESCO World Heritage List in 1994.",
  },
};
