import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Poland ============
  "tatra-mountains": {
    // 全六段 sources: 雷西峰西北峰 2499 m 为**波兰境内**最高点（中央峰 2503 m 传统值 / 最新高精度约 2500.9 m 在斯洛伐克一侧）—— 两个对象分列清楚，未挂错；塔特拉国家公园 1954 年设立。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "The Tatra Mountains are the highest part of the Carpathians, straddling the Poland-Slovakia border; the north-western summit of Rysy, at 2,499 m, is the highest point in Poland.",
    formation:
      "The massif is built of granite and crystalline rock, a comparatively old, sharply uplifted stretch of the Carpathians; intense last-glacial erosion carved sharp peaks, corries and clusters of glacial lakes, making it the only range in Poland with classic high-alpine glacial landforms.",
    observation:
      "From the air, sharp granite peaks interweave with deeply cut corrie lakes; the three adjacent summits of Rysy are clearly distinguishable, in sharp contrast with the comparatively rounded profiles of Poland's other Carpathian sub-ranges.",
    distinguish:
      "Both the Tatras and the Beskids are parts of the Carpathians within Poland, but the Tatras are granite with classic glacial landforms and greater elevation, while the Beskids are mainly sedimentary rock with comparatively rounded relief.",
    concept:
      "The fact that Rysy's three adjacent summits belong to Poland and Slovakia respectively is a classic case for studying the sometimes complicated relationship between an international border and the fine detail of a mountain massif's terrain.",
    history:
      "The Tatra region has been an important Polish mountaineering and skiing destination since the 19th century; Tatra National Park was established in 1954, and the foothill town of Zakopane is known as Poland's \"winter capital.\"",
  },
  "sudetes-karkonosze": {
    // 全六段 sources: 希尼耶日卡峰 1603.30 m（2014 年后官方值，此前长期用 1602 m）；山顶气象观测 1824 年起不定期、1889 年设二级站、1900 年建首座常设天文台 —— 正文「自19世纪起」准确。**与捷克侧 krkonose 并排核过**：高度一致，波兰 KPN 1959 / 捷克 KRNAP 1963 两个年份各自属实、不冲突。核实 2026-09-11，未改动
    seeing:
      "The Sudetes form an ancient mountain system along Poland's south-western border with the Czech Republic; the Karkonosze is its highest section, with Śnieżka, at 1,603 m, the highest peak in the Sudetes.",
    formation:
      "The bedrock formed during the Palaeozoic Variscan orogeny; long geological time has brought repeated uplift and weathering, leaving comparatively rounded relief, in sharp contrast with the younger, steeper Carpathians.",
    observation:
      "From the air, Śnieżka's summit shows a distinctive conical profile, with a weather station at the top and glacially carved \"kettle\" hollows clearly visible on its flanks — the most recognisable landmark of the Sudetes.",
    distinguish:
      "Both the Sudetes/Karkonosze and the Tatras are important Polish mountain ranges, but the Sudetes' bedrock is geologically older with rounder relief, while the Tatras are granite with more classically steep glacial landforms.",
    concept:
      "The fact that Śnieżka's summit straddles the Poland-Czech border and hosts a weather station is a classic case for studying how an ancient mountain range's distinctive high-altitude climate has made it a favoured site for cross-border scientific observation.",
    history:
      "A weather observation facility has stood atop Śnieżka since the 19th century, one of the oldest mountain weather stations in Central Europe, and the summit building continues to record meteorological data today.",
  },
  "bieszczady-mountains": {
    // 全六段 sources: 塔尔尼察峰 1346 m —— 正文只声称「**波兰境内**最高峰」而非「别什恰迪山脉最高峰」（整体最高的 Pikui 1405 m 在乌克兰），限定准确、未挂错对象。20 世纪的行政区划调整与人口变动采用不点名的中性事实句式，符合红线判据。核实 2026-09-11，未改动
    seeing:
      "The Bieszczady Mountains are the section of the eastern Carpathians at Poland's south-eastern tip, bordering Slovakia and Ukraine; Tarnica, at 1,346 m, is the highest peak within Poland.",
    formation:
      "The massif is built of sedimentary rock; long weathering has produced rounded relief, and the summit ridges, exposed to strong wind and thin soil, have failed to develop forest, instead supporting open subalpine meadows known locally as \"połoniny.\"",
    observation:
      "From the air, open meadow covers the rounded ridgelines, forming a clear vertical zonation against the dense forest on the slopes below — one of the most sparsely populated, wildest areas remaining in Poland.",
    distinguish:
      "Both the Bieszczady and the Beskids are parts of the Carpathians within Poland, but the Bieszczady lie at the extreme south-eastern tip and are known for their open połoniny meadows, while the Beskids lie further west with more complete forest cover.",
    concept:
      "The formation of the połoniny meadows atop the Bieszczady is a classic case for studying how strong wind and thin soil together lower the treeline in the Carpathians.",
    history:
      "The area's population declined sharply following post-Second-World-War administrative border changes and has remained sparsely settled ever since; it is now an important wilderness conservation area and hiking destination in Poland.",
  },
  "beskidy-mountains": {
    seeing:
      "The Beskids form the outer arc of the Carpathians in southern Poland; Babia Góra, at 1,725 m, is the highest peak in the range.",
    formation:
      "The massif is built of sedimentary rock, long weathered into rounded, undulating relief; Babia Góra's comparative isolation and prominence give it an especially clear vertical vegetation zonation.",
    observation:
      "From the air, Babia Góra shows a complete vertical vegetation sequence from foothill forest to summit tundra, set against the continuous rolling relief of the wider Beskid range around it.",
    distinguish:
      "Both the Beskids and the Tatras are parts of the Carpathians within Poland, but the Beskids are mainly sedimentary rock with comparatively rounded relief, while the Tatras are granite with steeper, more classic glacial landforms.",
    // concept sources: 巴比亚古拉 1725 m 为贝斯基德山脉最高峰、1954 年设国家公园；UNESCO MAB 生物圈保护区 **1976** 年（官方页 Year of nomination，1 级）—— 旅游站点普遍讹传 1977。核实 2026-09-11
    concept:
      "Babia Góra's complete vertical vegetation zonation is a classic case for studying how a Central European mid-elevation mountain ecosystem changes along an elevation gradient, which is why it was designated a UNESCO Biosphere Reserve in 1976.",
    history:
      "Babia Góra's comparatively remote location has historically preserved its original vegetation; Babia Góra National Park, established in 1954, is one of Poland's earliest national parks.",
  },
  "pieniny-mountains": {
    seeing:
      "Pieniny is a comparatively isolated limestone and dolomite massif within the Carpathians; Trzy Korony (\"Three Crowns\"), at 982 m, is well known for the gorge the Dunajec River has cut through the massif.",
    formation:
      "The massif is built of Mesozoic limestone and dolomite, distinct from the sedimentary and crystalline bedrock of the neighbouring Carpathian sub-ranges; long karst dissolution combined with river erosion has together shaped today's rugged terrain.",
    observation:
      "From the air, the steep limestone cliffs of Trzy Korony overlook the Dunajec Gorge, the river winding between the peaks with traditional raft boats dotted along it — one of the most recognisable mountain-gorge landscapes in southern Poland.",
    distinguish:
      "Both Pieniny and the Tatras are parts of the Carpathians, but Pieniny is built of limestone and dolomite and is a comparatively isolated massif, while the Tatras are granite and form the highest, most continuous core of the range.",
    concept:
      "Pieniny's distinctive limestone-and-dolomite bedrock, geologically distinct from the surrounding Carpathians, is an important sample for studying how different geological units are assembled within the Carpathian orogenic belt.",
    // history sources: 三王冠峰 982 m；国家公园 1932 年设立，为波兰最早的国家公园之一、也是欧洲首个跨境自然公园。漂流史见 dunajec-gorge 条目留痕（原写的「18 世纪」两条目各错一次，同批一并改）。核实 2026-09-11
    history:
      "Pieniny National Park was established in 1932, one of Poland's earliest national parks; rafts have long worked the Dunajec, and from the early 19th century the descent turned into a tourist trip; it remains a classic cross-border Poland-Slovakia experience today.",
  },
  "swietokrzyskie-mountains": {
    // seeing sources: 维希查峰 **614 m**（2019 年国家公园 + 理工大学 GPS/水准复测，2 级），612 / 611.8 为旧值；Skała Agaty 不是独立山峰、只是该峰体的东侧峰顶，最高点归属未变。C8「海拔也会过期」。核实 2026-09-11
    seeing:
      "The Świętokrzyskie Mountains are an ancient folded range in south-central Poland, their bedrock dating to the Palaeozoic — one of the geologically oldest ranges in the country; Łysica is the highest point, 614 m according to the Świętokrzyski National Park's 2019 re-survey.",
    formation:
      "The bedrock formed around 500 million years ago in the Palaeozoic; hundreds of millions of years of repeated tectonic movement and weathering have worn the range down to today's comparatively low, rounded hill form — an important sample for studying the long evolution of an ancient orogenic belt.",
    observation:
      "From the air, the low ridges are covered in dense old-growth forest, with scattered piles of eroded quartzite debris (locally called \"gołoborza\") on the slopes, in sharp contrast with the steeper profiles of Poland's younger mountain ranges.",
    distinguish:
      "Both the Świętokrzyskie Mountains and the Tatras are important Polish mountain ranges, but the Świętokrzyskie range is geologically extremely ancient and long since worn down, while the Tatras are the young core of the Carpathians with steep, classic glacial landforms.",
    concept:
      "As the geologically oldest mountain range in Poland, the Świętokrzyskie Mountains are a classic case for studying how a Palaeozoic orogenic belt is worn down to low hill relief over hundreds of millions of years of weathering.",
    history:
      "Rich in iron ore and limestone, the region has been an important Polish mining and smelting centre since the Middle Ages; the Holy Cross Monastery has been an important Polish pilgrimage site since the 11th century.",
  },
  "krakow-czestochowa-upland": {
    // 全六段 sources: 「波兰侏罗」俗称与侏罗纪石灰岩台地属实；「鹰巢之路」沿线约 25 座城堡多为 14 世纪卡齐米日大帝时期为防御西里西亚方向边境而建。核实 2026-09-11，未改动
    seeing:
      "The Kraków-Częstochowa Upland, informally known as the \"Polish Jura,\" is a long, narrow plateau built of Jurassic limestone, its length strung with medieval castle ruins along the \"Trail of the Eagles' Nests.\"",
    formation:
      "The plateau's bedrock is Jurassic sedimentary limestone; long karst dissolution has produced numerous isolated limestone towers, caves and underground water systems — a classic karst plateau landform in Poland.",
    observation:
      "From the air, isolated limestone towers of varying forms are scattered across the narrow plateau, many topped with medieval castle ruins, creating a sharp elevation contrast with the flat farmland around them.",
    distinguish:
      "Both the Kraków-Częstochowa Upland and the Table Mountains are important plateau landforms in Poland, but the former is built of Jurassic limestone and defined by karst towers and caves, while the latter is built of sandstone and defined by its flat-topped \"table\" cliff profile.",
    concept:
      "The combination of the Kraków-Częstochowa Upland's isolated limestone towers with medieval castle siting is a classic case for studying how a karst plateau landform was exploited for historic defensive architecture.",
    history:
      "The \"Trail of the Eagles' Nests\" takes its name from the way the castles along it, perched on steep towers, resemble eagles' nests; these castles were first built in the 14th century under King Casimir the Great to defend Poland's southern border.",
  },
  "gory-stolowe": {
    // 全六段 sources: 什切利涅茨维尔基峰 919 m；白垩纪砂岩；国家公园 1993 年设立。核实 2026-09-11，未改动
    seeing:
      "The Table Mountains (Góry Stołowe) are a flat-topped sandstone plateau at the eastern end of the Sudetes; Szczeliniec Wielki, at 919 m, is the most representative example of table-mountain landform in Poland.",
    formation:
      "The plateau's bedrock is horizontally bedded Cretaceous sandstone; long differential weathering has stripped away the softer layers while the harder layers survive, producing today's steep-walled, flat-topped \"table\" profile.",
    observation:
      "From the air, the flat plateau top and the steep cliffs around it form a sharp geometric outline, with narrow, maze-like passages developed between the rock walls — a distinctive \"table mountain\" landscape unique in Poland.",
    distinguish:
      "Both the Table Mountains and the Kraków-Częstochowa Upland are important plateau landforms in Poland, but the Table Mountains are built of Cretaceous sandstone and defined by their flat-topped cliffs, while the Kraków-Częstochowa Upland is built of Jurassic limestone and defined by its karst towers.",
    concept:
      "The table-like profile produced by differential weathering of the Table Mountains' horizontal sandstone beds is a classic case for studying how horizontally bedded sedimentary rock can preserve a distinctive flat-topped landform through long weathering.",
    history:
      "Table Mountains National Park was established in 1993; rock-passage place names such as \"Hell's Gorge\" and \"Devil's Kitchen\" record long-standing local folklore.",
  },
  "masurian-lakes": {
    // 全六段 sources: 希尼亚尔德维湖 113.8 km² 为波兰最大湖泊，核实无误。⚠️ 湖泊数量「超过2500座」**没有单一权威口径**：旅游/区域来源给约 2600 座（>1 ha），省级空间规划文件给全省 1081 座（>1 ha，2015 版），差异来自统计范围与面积阈值 —— 见 issue，正文暂不动。核实 2026-09-11
    // seeing sources: 湖泊数取决于面积阈值（RDOŚ 3000+ / 省规划 >1 ha 1081），改为数以千计。核实 2026-09-12
    seeing:
      "The Masurian Lake District is a densely lake-studded region of north-eastern Poland carved by last-glacial erosion, with lakes numbering in the thousands; Lake Śniardwy is the largest lake in Poland.",
    formation:
      "The district's foundation is a multitude of depressions carved by last-glacial erosion, now filled with water; historically, extensive canals were cut to link the lakes, forming a distinctive densely channelled waterway network.",
    observation:
      "From the air, lakes large and small are scattered everywhere, criss-crossed by waterways, with forest and farmland dotted throughout — the most representative waterscape landform in north-eastern Poland.",
    distinguish:
      "Both the Masurian Lake District and Lake Hańcza are important lake landforms in north-eastern Poland, but the Masurian district comprises thousands of lakes defined by its dense canal network, while Lake Hańcza is a single deep lake known for its depth.",
    concept:
      "The dense canal system linking the Masurian lakes is a classic case for studying how hydraulic engineering can connect a cluster of natural glacial lakes into a unified navigation network, and the region is also an important area for inland sailing in Europe.",
    history:
      "The lake district's canal system dates to the 19th century, historically used for timber transport; it is now an important area for water tourism and sailing in Poland.",
  },
  "lake-hancza": {
    // 全六段 sources: 最大水深 108/108.5 m，波兰最深湖；「中欧最深湖之一」带了限定语，不是排他断言。核实 2026-09-11，未改动
    seeing:
      "Lake Hańcza, in the Suwałki region of north-eastern Poland, has a maximum depth of about 108 m — the deepest lake in Poland and one of the deepest in Central Europe.",
    formation:
      "The lake basin occupies a deep trough gouged by last-glacial erosion, where erosion intensity was markedly greater than in the surrounding area, producing this locally rare deep-basin lake.",
    observation:
      "From the air, the lake surface is comparatively small but sharply defined, its shoreline intricate, set against the undulating terrain of the surrounding Suwałki hills — an important waterscape landmark in north-eastern Poland.",
    distinguish:
      "Both Lake Hańcza and the Masurian Lake District are important lake landforms in north-eastern Poland, but Lake Hańcza is a single deep lake known for its depth, while the Masurian district comprises thousands of lakes defined by its dense canal network.",
    concept:
      "Lake Hańcza's exceptional depth is a classic case for studying how local variation in last-glacial erosion intensity can produce a markedly deeper basin within an otherwise comparable region.",
    history:
      "Thanks to its deep, clear water, the lake has long been an important Polish diving-training and scientific-research site, and is now an important ecotourism area in the Suwałki region.",
  },
  "vistula-river": {
    // 全六段 sources: 全长 1047 km、源出西里西亚贝斯基德山 Barania Góra 西坡（1106 m）、逾 85% 流域在波兰境内、于格但斯克湾附近成三角洲入海 —— 与 zulawy-wislane、oder-river 两条并排读一致（odrapcu.pl，2 级）。核实 2026-09-11，未改动
    seeing:
      "The Vistula is the longest river in Poland, running about 1,047 km from its source in the Beskids, spanning the length of the country before entering the Baltic Sea near Gdańsk.",
    formation:
      "The river's upper course rises at the margin of the Carpathians; its middle and lower course crosses central Poland's lowlands, running broadly north-south — the country's main water system, linking the southern mountains with the northern coast.",
    observation:
      "From the air, the channel winds north from south across the whole of Poland, passing through major cities such as Kraków and Warsaw; its lower course branches into a delta near Gdańsk before entering the Baltic Sea.",
    distinguish:
      "Both the Vistula and the Oder are important Polish rivers, but the Vistula is the longer river, running entirely within Poland and regarded as the country's national river, while the Oder's lower course forms the Poland-Germany border.",
    concept:
      "The Vistula's course spanning the length of Poland, linking the southern mountains with the northern coast, is a classic case for studying how a country's main river links different landform units to support regional economic and cultural development.",
    history:
      "Since the Middle Ages the Vistula has been an important Polish shipping route and cultural symbol; historic Polish cities such as Warsaw and Kraków are built along it, and the river holds significant symbolic importance in Polish national culture.",
  },
  "oder-river": {
    // 全六段 sources: 波兰第二长河，源出捷克赫鲁比耶塞尼克山（属苏台德），下游约 179 km 为界河，经什切青潟湖入海；与 vistula-river 的对比表述一致。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "The Oder is Poland's second-longest river, rising in the Czech Republic; its lower course forms the border between Poland and Germany before entering the Baltic Sea near Szczecin.",
    formation:
      "The river's upper course crosses the mountainous border region between the Czech Republic and Poland; its middle and lower course enters comparatively flat lowland, with the lower stretch running along the Poland-Germany border — an important cross-border water system.",
    observation:
      "From the air, the middle and lower channel is comparatively broad and gentle, widening into a lagoon near its mouth at Szczecin before entering the Baltic Sea, its banks mostly farmland and forest.",
    distinguish:
      "Both the Oder and the Vistula are important Polish rivers, but the Oder's lower course forms the Poland-Germany border, while the Vistula runs entirely within Poland and is the country's longest river.",
    concept:
      "As a border river, the Oder is a classic case for studying how a river has served a border-marking function at different points in history while still maintaining regional shipping links.",
    history:
      "The Oder has historically been an important Central European shipping route; Szczecin has developed as a major port city since the Middle Ages thanks to its position guarding the Oder's mouth.",
  },
  "bug-river": {
    // 全六段 sources: 源出乌克兰沃利尼亚—波多利亚高地，分别与白俄罗斯约 178 km、与乌克兰约 185 km 构成界河；是欧洲少数未受大坝/护岸大规模改造的大型河流之一。跨境表述中性、不涉主权。核实 2026-09-11，未改动
    seeing:
      "The Bug rises in Ukraine; its lower course forms the border between Poland and Belarus and Ukraine, and it is one of the few large European rivers to retain a natural, largely unregulated channel.",
    formation:
      "Because the river runs through a tri-national border zone that historically lacked unified water-management planning, its channel has retained natural seasonal flow variation and riverbed form, without large-scale damming or embankment.",
    observation:
      "From the air, the channel winds naturally, its banks preserving extensive natural wetland and floodplain — a sharp contrast with most other large European rivers, which have been extensively engineered.",
    distinguish:
      "Both the Bug and the Oder are important border rivers for Poland, but the Bug retains a natural channel due to the lack of large-scale hydraulic regulation, while the Oder has historically undergone more extensive engineering.",
    concept:
      "As one of the few large European rivers to retain a natural channel, the Bug is an important sample for studying the natural hydrology and riparian ecosystem of an unregulated Central European lowland river.",
    history:
      "The Bug's banks have historically been an important natural barrier and trade route along Poland's eastern border region; the riverside wetlands are now an important protected ecological area in Poland.",
  },
  "narew-river": {
    // 全六段 sources: 纳雷夫国家公园河段为辫状水系、俗称「波兰的亚马逊」；国家公园 1996 年设立。核实 2026-09-11，未改动
    seeing:
      "The stretch of the Narew flowing through Narew National Park shows a rare braided river form, its channel splitting into dozens of parallel branches winding through wetland marsh — locally nicknamed \"Poland's Amazon.\"",
    formation:
      "Along this stretch the terrain is extremely gentle and the riverbed heavily silted, so the main channel cannot maintain a single stable course and is instead forced to split into multiple parallel braided branches.",
    observation:
      "From the air, dozens of narrow channels criss-cross the broad wetland, forming an extremely complex net-like pattern quite unlike the typical single-channel river landscape — a rare sample of European lowland river landform.",
    distinguish:
      "Compared with Poland's other major rivers (such as the Vistula and Oder), the Narew's channel form is quite different — it shows a rare natural braided drainage pattern, while the other rivers run in a single main channel.",
    concept:
      "The Narew's braided drainage pattern is a classic case for studying how a lowland river naturally splits into multiple channels under conditions of gentle terrain and heavy siltation, and it is one of the best-preserved examples of this landform type in lowland Europe.",
    history:
      "The stretch has retained its original braided form because its remote location largely escaped large-scale agricultural reclamation and hydraulic engineering; Narew National Park was established in 1996 to protect this distinctive landform.",
  },
  "dunajec-gorge": {
    seeing:
      "The Dunajec River Gorge was cut by the Dunajec through the limestone and dolomite of the Pieniny massif, its banks rising in tall cliffs — a famous cross-border Poland-Slovakia rafting stretch.",
    formation:
      "The river has long eroded the comparatively soft limestone and dolomite bedrock of the Pieniny massif, cutting a narrow, deep gorge with steep cliff walls preserved on both sides.",
    observation:
      "From the air, the gorge winds between peaks such as Trzy Korony, its channel narrow and twisting, with traditional raft boats drifting along the water and dense forest set against bare cliff faces — one of the most recognisable gorge landscapes in southern Poland.",
    distinguish:
      "Both the Dunajec Gorge and the Ojców Valley are important karst gorge landforms in Poland, but the Dunajec Gorge cuts through the high peaks of the Pieniny massif and is known for rafting, while the Ojców Valley lies in a comparatively gentle upland area and is known for its isolated rock towers and caves.",
    concept:
      "The Dunajec Gorge is a classic case for studying how a river can carve a deep gorge over the long term by eroding comparatively soft limestone and dolomite bedrock, and it is also an example of cross-border Poland-Slovakia landform conservation cooperation.",
    // history sources: 筏运起源 16 世纪（NID 国家非遗名录公告，1–2 级）。核实 2026-09-12
    history:
      "Rafting on the Dunajec goes back to the 16th century, originally to move timber and other goods; from the early 19th century the spa town of Szczawnica promoted the descent as a tourist trip, and a raftsmen's guild was founded locally in 1832. It is now one of the most iconic tourist experiences in southern Poland.",
  },
  "ojcow-valley": {
    // 全六段 sources: 克拉科夫门为天然岩拱；国家公园 1956 年设立，现园区 21.46 km²（初建 14.40 km²），为波兰面积最小的国家公园。核实 2026-09-11，未改动
    seeing:
      "The Ojców Valley is a karst gorge cut by the Prądnik River through the limestone of the Kraków-Częstochowa Upland; the Kraków Gate is the valley's most representative natural rock arch.",
    formation:
      "The river has long dissolved the plateau's limestone bedrock, forming a narrow karst gorge scattered with isolated rock towers, caves and natural rock arches — a classic karst gorge landform.",
    observation:
      "From the air, the narrow valley's flanks rise steeply, with the natural rock arch of the Kraków Gate spanning one side of the valley, caves and rock towers dense throughout — a concentrated showcase of plateau karst landforms.",
    distinguish:
      "Both the Ojców Valley and the Dunajec Gorge are important karst gorge landforms in Poland, but the Ojców Valley lies in a comparatively gentle upland area and is known for its isolated rock towers and caves, while the Dunajec Gorge cuts through the high peaks of the Pieniny massif and is known for rafting.",
    concept:
      "The Ojców Valley is a classic case for studying how river dissolution on a karst plateau can produce the coexistence of multiple karst landform types — gorges, rock towers and caves.",
    history:
      "Several caves in the valley have yielded Palaeolithic-era human artefacts; Ojców National Park, established in 1956, is Poland's smallest national park and one of its earliest.",
  },
  "slowinski-dunes": {
    // 全六段 sources: 最高的翁茨卡沙丘 42 m；移动速率因沙丘类型而异 —— 抛物线状约 3 m/年、新月形可达 10 m/年，正文「3 至 10 米」正好覆盖两类；国家公园 1967 年设立。**沙丘位置是持续变化量**，下轮复核。核实 2026-09-11，未改动
    seeing:
      "The Słowiński Moving Dunes are the largest active dune field in Europe along the Baltic coast, reaching heights of up to 42 m and migrating inland by about 3 to 10 m each year under the prevailing wind.",
    formation:
      "The dunes were built up from Baltic coastal sand carried by long-term wind transport; lacking stabilising vegetation, the whole dune field continues to migrate slowly inland under the prevailing wind, burying the forest and ground vegetation in its path.",
    observation:
      "From the air, the bare dunes show a wave-like undulation, forming a sharp colour and landform contrast with the dense pine forest around them; in some areas the skeletal remains of trees buried and later re-exposed by the moving dunes are visible.",
    distinguish:
      "Both the Słowiński Moving Dunes and the Hel Peninsula are sandy landforms on Poland's Baltic coast, but the Słowiński dunes are defined by their continuous migration, while the Hel Peninsula is a comparatively stable, long, narrow sand spit.",
    concept:
      "The Słowiński Moving Dunes are a classic case for studying how wind-transported sand can shape an active dune landform over the long term and bury pre-existing vegetation, and they are the largest example of this landform type in Europe.",
    history:
      "Historical records of the dunes burying nearby villages and forests date to the 19th century; Słowiński National Park was established in 1967 to protect and study this distinctive active dune landform.",
  },
  "hel-peninsula": {
    // 全六段 sources: 长约 35 km；最窄处各来源给 100 m 或 175 m，正文「不足200米」留了余量；1939-09-09 至 10-02 海尔要塞区坚守，是九月战役中最后投降的据点之一（定位性军事地理史实，已结束、无持续对立，按判据保留）。核实 2026-09-11，未改动
    seeing:
      "The Hel Peninsula is a sand spit about 35 km long and less than 200 m wide at its narrowest point, separating the Baltic Sea from the Gulf of Gdańsk; the town of Hel at its tip is an important Polish seaside resort.",
    formation:
      "The spit was built up over a long period by longshore currents carrying Baltic sand, forming a long, narrow, curving sandy landform that separates the open Baltic from the comparatively enclosed Gulf of Gdańsk.",
    observation:
      "From the air, the narrow spit curves hook-like out into the Baltic; the waters on either side show different colouring and wave characteristics due to the peninsula's sheltering effect, with the settlement of Hel clearly visible at its tip.",
    distinguish:
      "Both the Hel Peninsula and the Słowiński Moving Dunes are sandy landforms on Poland's Baltic coast, but the Hel Peninsula is a comparatively stable, long, narrow spit that separates a bay from the open sea, while the Słowiński dunes are defined by their continuous migration and vegetation burial.",
    concept:
      "The long, curving form of the Hel Peninsula is a classic case for studying how longshore-current sand transport can build a spit landform that separates a bay from open water.",
    history:
      "The Hel Peninsula has historically been an important Polish fishing base; during the Second World War it was one of the last strongholds of Polish naval resistance, and it is now an important seaside-resort and watersports destination in Poland.",
  },
  "wolin-island": {
    // 全六段 sources: 冰碛海崖；国家公园 1960 年设立；10 世纪为波罗的海重要贸易枢纽（Jumne / 传说中的 Jomsborg）。⚠️ 崖壁长度存在 15 km 与 11.7 km 两个版本，正文取的 15 km 能找到来源支撑，但未能确定哪个是当前更权威口径，下轮复核。核实 2026-09-11，未改动
    seeing:
      "Wolin Island is a Baltic coastal island in north-western Poland; a roughly 15-km stretch of sea cliff within Wolin National Park is a rare high-cliff coastline on the southern Baltic shore.",
    formation:
      "The island's bedrock is last-glacial moraine deposit; long exposure to Baltic wave erosion has carved a comparatively steep cliff landform in the soft moraine material, rare along the southern Baltic coast.",
    observation:
      "From the air, steep sea cliffs run along the island's northern shore, their tops densely forested, in sharp contrast with the typically gentle, sandy coastline elsewhere on the southern Baltic — a distinctive landform along the Polish coast.",
    distinguish:
      "Wolin Island, the Hel Peninsula and the Słowiński Moving Dunes are all important landforms on Poland's Baltic coast, but Wolin Island is defined by its steep moraine sea cliffs, while the other two are sandy landforms (a spit and a moving dune field respectively).",
    concept:
      "The formation of Wolin's moraine cliffs is a classic case for studying how soft moraine deposits along the southern Baltic coast can be shaped into steep sea cliffs by long-term wave erosion, distinct from the granite or chalk cliff origins seen in Denmark or Sweden.",
    history:
      "Wolin National Park was established in 1960 and includes a small European bison reserve; the island also holds the archaeological remains of Wolin, an important Viking-era trading settlement.",
  },
  "great-polish-lowland": {
    // 全六段 sources: 10 世纪波兹南与格涅兹诺同为皮亚斯特王朝早期政治中心，梅什科一世在此设主要据点并安葬于波兹南大教堂；11 世纪后政治中心移至克拉科夫。正文用「之一」限定，未夸大为唯一或永久首都。核实 2026-09-11，未改动
    seeing:
      "The Great Polish Lowland is the main portion of the Central European Plain lying within Poland, flat and open, and Poland's largest agricultural region.",
    formation:
      "The lowland's surface is made up of last-glacial ice-sheet deposits; after the ice retreated it left an extensive flat plain of moraine and glaciofluvial sediment — the flattest, most open region within Poland.",
    observation:
      "From the air, extensive, regular farmland stretches to the horizon, with scattered forest and lakes dotted throughout; major cities such as Poznań are built on this open lowland.",
    distinguish:
      "Both the Great Polish Lowland and the Vistula Delta Lowland are important plain landforms in Poland, but the Great Polish Lowland is extensive and defined by moraine and glaciofluvial plain, while the Vistula Delta Lowland is smaller, with parts lying below sea level.",
    concept:
      "The Great Polish Lowland is a classic case for studying how the melting of the last-glacial continental ice sheet left an extensive flat moraine plain across Central Europe, and it is the geographic foundation of Polish agriculture.",
    history:
      "The region has been an important Polish farming area since the Middle Ages; Poznań is one of Poland's oldest cities and was historically one of the political centres of the early Polish state.",
  },
  "zulawy-wislane": {
    seeing:
      "Żuławy Wiślane is the alluvial delta plain at the mouth of the Vistula, part of it lying below sea level — the lowest-lying region in Poland.",
    formation:
      "The delta was built up over a long period by sediment carried by the Vistula; some low-lying areas were historically converted into arable land using dike-and-drainage technology, producing a low-lying landform with artificially controlled water levels.",
    observation:
      "From the air, regular farmland interwoven with a crisscrossing network of drainage canals forms a classic reclaimed-lowland landscape; in places the water level in the canals sits noticeably higher than the surrounding farmland surface, a direct visual illustration of land lying below sea level.",
    distinguish:
      "Both Żuławy Wiślane and the Great Polish Lowland are important plain landforms in Poland, but Żuławy Wiślane is smaller, with parts below sea level and dependent on artificial drainage, while the Great Polish Lowland is naturally flat and considerably more extensive.",
    concept:
      "The below-sea-level terrain of parts of Żuławy Wiślane is a classic case for studying how a river-mouth delta can be transformed by artificial dike-and-drainage technology into liveable, farmable low-lying land — sharing common origins with Dutch polder-reclamation techniques.",
    // history sources: 门诺派移民 16 世纪起迁入维斯瓦河三角洲（门诺派得名于 Menno Simons 1496–1561，**定义上不可能早于 16 世纪**，故「中世纪起」必错，不依赖来源级别）；16–18 世纪为排水系统开发高峰，17 世纪末门诺派占地约 3.8 万 ha。核实 2026-09-11
    history:
      "From the 16th century, Mennonite settlers from the Low Countries fleeing religious persecution introduced dike-and-drainage technology to the region, gradually converting the original marsh wetland into fertile farmland — a reclamation tradition that continues today.",
  },
  "bialowieza-forest": {
    // 全六段 sources: UNESCO 分三期 —— **1979 年首次列入（正是波兰侧的比亚沃维耶扎国家公园部分）**、1992 年扩展纳入白俄罗斯侧、2014 年再扩展。本条对应的就是 1979 这一期，**没有借用后续扩展年份**（whc.unesco.org/en/list/33，1 级）。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "Białowieża Forest is one of the best-preserved primeval forests remaining on the European Plain, straddling the Poland-Belarus border, and an important habitat for the European bison.",
    formation:
      "The forest grows on a gentle moraine and glaciofluvial plain formed after the last ice age; long protection as a royal and state hunting reserve spared it from large-scale logging, allowing it to retain a near-original forest ecosystem.",
    observation:
      "From the air, extensive old-growth forest covers the gently undulating ground, with fallen deadwood and dense understorey vegetation scattered throughout — a clear contrast with the surrounding managed commercial forestry land.",
    distinguish:
      "Compared with other forested areas in Poland, Białowieża Forest is known for its well-preserved primeval forest ecosystem and European bison population, the only large-scale example of this type of old-growth forest remaining on the European Plain.",
    concept:
      "As an important habitat for the European bison, Białowieża Forest is a classic case for studying how a primeval forest ecosystem can provide a last refuge for large mammals, which is why it was inscribed on the UNESCO World Heritage List in 1979.",
    history:
      "The forest has been a royal hunting reserve for successive Polish monarchs since the Middle Ages, a protection tradition that spared it from large-scale logging; European bison conservation efforts here have continued for more than a century.",
  },
  roztocze: {
    // 全六段 sources: 白垩纪与第三纪石灰岩基岩；**2019 年**列为波兰/乌克兰跨境生物圈保护区 —— 乌克兰侧 Roztochya 早在 2011 年已单独列入，本条对应的是 2019 年两侧整合为跨境保护区的年份，**没有借用 2011**（unesco.org/en/mab/roztocze，1 级）。核实 2026-09-11，未改动
    seeing:
      "Roztocze is a long, narrow, ridge-like band of limestone hills in south-eastern Poland, densely forested.",
    formation:
      "The hills' bedrock is Cretaceous and Tertiary limestone; long weathering and erosion have produced today's long, narrow uplifted ridge form — a representative area in south-eastern Poland where karst landform and forest ecosystem intertwine.",
    observation:
      "From the air, dense forest covers the long, narrow ridge, forming a clear contrast in relief and vegetation with the comparatively flat farmland on either side, with small towns such as Zwierzyniec dotted along the hills' margin.",
    distinguish:
      "Both Roztocze and Białowieża Forest are important forested regions in Poland, but Roztocze rises as a long, narrow ridge with pronounced limestone karst characteristics, while Białowieża Forest lies on gentle lowland and is known for its primeval forest ecosystem.",
    concept:
      "Roztocze's long, narrow ridge form combined with its rich forest ecosystem is a classic case for studying the relationship between limestone hill landforms and ecological diversity in south-eastern Poland, which is why a cross-border Biosphere Reserve was established here in 2019.",
    history:
      "The region's uplifted terrain and comparatively poor soil have historically limited agricultural development, allowing the forest to survive well; it is now an important ecotourism and hiking destination in south-eastern Poland.",
  },
  "kashubian-switzerland": {
    // 全六段 sources: 维耶日察峰 329 m；末次冰期终碛丘陵。部分来源称其为「整个波兰低地地区最高点」，正文写「波兰北部地势最高点」更保守，不构成夸大。核实 2026-09-11，未改动
    seeing:
      "Kashubian Switzerland is a last-glacial terminal moraine hill area in the Pomerania region of northern Poland, densely dotted with lakes and forest; Wieżyca, at 329 m, is the highest point in northern Poland.",
    formation:
      "The hills are built of terminal moraine ridges pushed up during last-glacial advances; after the ice retreated it left undulating hills interspersed with numerous small lakes — a classic moraine-hill landform.",
    observation:
      "From the air, lakes of varying sizes are scattered among the undulating hills, with forest and farmland interwoven, forming a sharp contrast with the flat, open terrain typical of Poland's northern coastal area.",
    distinguish:
      "Both Kashubian Switzerland and the Masurian Lake District are important moraine-and-lake landforms in northern Poland, but Kashubian Switzerland shows more pronounced relief and takes its name from the interweaving of hills and lakes, while the Masurian district is defined by its vast number of lakes and dense network of gently sloping waterways.",
    concept:
      "The name \"Kashubian Switzerland,\" drawn from the resemblance of its undulating relief to the mountains of Switzerland, is an interesting human-geography case for studying how terminal-moraine hill landforms are sometimes named by analogy to a distant, famous landscape.",
    history:
      "The region has historically been the traditional homeland of the Kashubians, a West Slavic minority group in Poland, and Kashubian language and cultural traditions are still preserved and continued locally today.",
  },
  "biebrza-marshes": {
    // 全六段 sources: 别布扎国家公园 1993-09-09 设立，为波兰面积最大的国家公园；奥索维茨要塞由俄军建于 19 世纪 80–90 年代，一战期间周边沼泽地形多次阻滞进攻（定位性军事地理史实，按判据保留）。核实 2026-09-11，未改动
    seeing:
      "The Biebrza Marshes are Poland's largest area of low-lying fen wetland, spread along the Biebrza river valley, and one of the best-preserved lowland river-valley marshes remaining in Europe.",
    formation:
      "After the last ice age, poor drainage in the low-lying Biebrza valley allowed wetland plant matter to accumulate faster than it decomposed, producing an extensive low-fen wetland ecosystem.",
    observation:
      "From the air, broad, open marsh interweaves with the winding channel of the Biebrza, reed marsh and wet meadow spread widely — an important bird-habitat landscape in Poland.",
    distinguish:
      "Both the Biebrza Marshes and the Narew are important wetland river-valley landforms in north-eastern Poland, but the Biebrza Marshes are defined by their extensive low-fen wetland ecosystem, while the Narew is defined by its rare braided drainage pattern.",
    concept:
      "As one of the best-preserved lowland river-valley marshes remaining in Europe, the Biebrza Marshes are a classic case for studying the relationship between long-term wetland preservation and its function as a bird habitat.",
    history:
      "The Osowiec Fortress within the marshes was built in the late 19th century; during the First World War its surrounding marshland's difficult terrain repeatedly helped repel attacks, a classic case of marsh landform shaping military history. Biebrza National Park was established in 1993.",
  },
};
