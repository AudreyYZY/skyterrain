import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  "bavarian-alps": {
    seeing:
      "The Bavarian Alps, at the very south of Germany, are the northernmost stretch of the Northern Limestone Alps within the country; the highest peak, the Zugspitze, is 2,962 m — the highest point in all of Germany. Its summit sits right on the Germany–Austria border, and snow on top is visible from the town of Garmisch-Partenkirchen for most of the year.",
    // formation sources: 楚格峰 2962 m 为 LDBV 官方高程（阿姆斯特丹基准）；德国现存冰川四片（楚格峰的北施内费尔纳、赫伦塔尔 + 贝希特斯加登的 Blaueis、Watzmanngletscher），南施内费尔纳 2022 年经巴伐利亚科学院测量归类为死冰而除名 —— 这是会变的量，下轮回来复核。核实 2026-09-10
    formation:
      "The range belongs to the Wetterstein Mountains, built mainly of thick Wetterstein limestone laid down on a Triassic (over 200-million-year-old) shallow-sea platform and later folded and uplifted to near 3,000 m by the Alpine orogeny. The Zugspitze still carries two small glaciers, the Nördlicher Schneeferner and the Höllentalferner — two of the four left in Germany, after the Südlicher Schneeferner lost its glacier status in 2022 when its ice grew too thin. All four keep shrinking.",
    observation:
      "From the air the Bavarian Alps are a grey-white wall of steep limestone peaks rising abruptly above Bavaria's gentler hills and lakes, snow lingering on the summits for much or all of the year in sharp contrast with the green pastures below. The cable-car station and weather observatory buildings on the Zugspitze summit are clearly visible.",
    distinguish:
      "The Bavarian Alps, the Black Forest and the Harz are all German mountain areas, but the Bavarian Alps belong to the young Alpine orogenic belt and reach the greatest elevation, while the Black Forest and the Harz are far older Hercynian massifs, long weathered down into gentler, lower relief.",
    concept:
      "The Zugspitze is a complete demonstration of the Alpine orogeny's chain of events — shallow-sea deposition, folding and uplift, glacial carving: the limestone was first laid down horizontally on the sea floor, mountain building then pushed it up thousands of metres, and Quaternary Ice Age glaciers carved sharp horns and cirques into the summit and slopes — the small glacier remnant on top today is living evidence of that process.",
    history:
      "The Garmisch-Partenkirchen area hosted the 1936 Winter Olympics, and the Zugspitze and its surroundings remain Germany's most important base for alpine skiing and mountaineering. Cog railways and cable cars have run to the summit since the late 19th century, making it one of Germany's earliest developed high-mountain tourist areas.",
  },

  "black-forest": {
    // 全六段 sources: 费尔德山 1493 m（部分测量给 1494.2 m，同峰不同基准，在测量误差内）；基底片麻岩的变质事件为海西造山期约 300 Ma，与「约10亿年前原岩」的科普口径相容。核实 2026-09-10，未改动
    seeing:
      "The Black Forest, in Germany's south-west corner, is an old massif stretching about 160 km north–south, named for its dense, perpetually shaded woods; its highest point, the Feldberg, is 1,493 m, the tallest mountain in Germany outside the Alps.",
    formation:
      "The massif's core is ancient gneiss that first formed about a billion years ago and was re-consolidated and metamorphosed during the Hercynian orogeny (about 300 million years ago), covered around the edges by younger red sandstone. Long weathering rounded this old block down to gentle relief, and part of it was later re-uplifted along faults during the Cenozoic Alpine orogeny.",
    observation:
      "From the air the Black Forest is a rolling, deep-green forested range east of the Rhine valley, its summits rounded and gentle, with traditional farmhouses and spa towns scattered through its valleys; the west side facing the Rhine valley is steeper, the east side grading more gently into the interior.",
    distinguish:
      "The Black Forest and the Harz are both old Hercynian massifs in Germany, but the Black Forest is mostly gneiss and sandstone while the Harz is built of even older sedimentary and igneous rock; the Black Forest runs north–south as a fairly continuous range, while the Harz stands as an isolated block rising out of the North German Plain.",
    concept:
      "The Black Forest shows that \"old\" does not mean \"tall\": even a massif whose core rock is nearly a billion years old will lose most of its original height given enough time to weather and erode — the roughly 1,000 m of relief seen today is only the latest chapter in this ancient block's long history.",
    history:
      "The Black Forest is one of Germany's key sources of traditional craft (cuckoo clocks, wood carving) and spa tourism (Baden-Baden), and many of the folk tales collected by the Brothers Grimm are set in its forests.",
  },

  "harz-mountains": {
    seeing:
      "The Harz, in north-central Germany, is an old massif rising in isolation from the North German Plain; its highest peak, the Brocken, is 1,141 m — the tallest mountain in northern Germany and the only place on the north German plain with a genuinely alpine microclimate.",
    // formation sources: 布罗肯峰 1141 m；花岗岩侵入 293 Ma（森肯贝格 2020 锆石铀铅测年），比海西造山主体挤压期晚约 40 Myr，与泛大陆早期裂解有关 —— 年份原本就对，改的是因果暗示；最古老岩层（埃克岩系）560+ Ma。核实 2026-09-10
    formation:
      "The massif was strongly uplifted during the Hercynian orogeny (about 300 million years ago); its oldest rock dates back 560 million years. The Brocken summit itself is a granite body intruded about 290 million years ago — some forty million years after the orogenic compression ended, linked to the early break-up of Pangaea rather than being a direct product of that compression — harder than the surrounding rock and left standing as the highest point after long erosion wore down what was around it.",
    observation:
      "From the air the Harz is a dark, forested massif rising abruptly from the flat farmland of the North German Plain, its boundary sharply defined; the Brocken summit is shrouded in cloud almost year-round — nearly 300 foggy days a year on average, among the foggiest spots in Germany.",
    distinguish:
      "The Harz and the Black Forest are both old Hercynian massifs, but the Harz stands isolated in the middle of a plain with no transitional hill country around it, while the Black Forest connects into a continuous mountain belt running through the Rhine valley, the Swabian Jura and the Alpine foreland.",
    concept:
      "The Brocken's near-constant fog is a classic \"isolated peak effect\": a mountain rising alone from a plain forces the moist air around it to rise and condense into cloud far more readily than a peak of the same height set within a continuous range — which is also why the vegetation and microclimate on such summits often look \"disproportionately\" alpine for their actual elevation.",
    history:
      "In German folklore the Brocken has long been associated with witches' gatherings, and the \"Walpurgis Night\" scene in Goethe's Faust is set here. During the Cold War the Brocken sat astride the inner German border and carried a listening station on its summit; it reopened to the public after reunification.",
  },

  erzgebirge: {
    // 全六段 sources: 菲希特尔山（Fichtelberg，勿与费希特尔山脉 Fichtelgebirge 混）1215 m 为萨克森州及厄尔士山脉德国一侧最高点，捷克一侧 Klínovec 1243.7 m 更高——正文的「德国一侧」限定成立；矿业文化景观 2019-07 跨德捷列入 UNESCO，官方表述为「近 800 年持续技术革新」（德国 UNESCO 委员会，1 级）。银矿繁荣期官方口径约 1450–1620，正文「1460—1560」落在其中。核实 2026-09-10，未改动
    seeing:
      "The Erzgebirge (Ore Mountains), along the border between Saxony and the Czech Republic, is an old range trending south-west to north-east; the highest point on the German side, the Fichtelberg, is 1,215 m. The name means \"ore mountains\", from nearly 800 years of almost continuous mining in the region.",
    formation:
      "The range was uplifted by compression during the Hercynian orogeny, its rock mostly gneiss and slate with granite bodies intruded through it carrying rich veins of tin, silver and cobalt. Long uplift and erosion left an asymmetric profile — the German side sloping gently down toward the plain, the Czech side notably steeper.",
    observation:
      "From the air the Erzgebirge is a low, rounded, forested range, dotted with traditional mining settlements and carefully engineered water-management systems (channels built to drain mine shafts and power mining machinery) — traces of the old mining districts are still visible on some slopes.",
    distinguish:
      "The Erzgebirge and the Thuringian Forest are both old Hercynian ranges in eastern Germany, but the Erzgebirge is known for a cultural landscape shaped by mining, while the Thuringian Forest is comparatively more untouched with fewer mining traces; the Erzgebirge runs along the German–Czech border, while the Thuringian Forest lies entirely within Germany.",
    concept:
      "The Erzgebirge is a textbook case of how mineral resources can shape an entire region's cultural landscape: from the 12th to the 20th century, mining silver, tin and cobalt left not just the mine shafts themselves but supporting water-management systems, purpose-built mining towns, and craft traditions (such as carved wooden toys) that survive today — mining history and natural geology are tightly interwoven here.",
    history:
      "Between 1460 and 1560 the Erzgebirge was for a time one of Europe's leading silver-mining regions. In 2019 the Erzgebirge/Krušnohoří Mining Region was jointly inscribed as a UNESCO World Heritage Site by Germany and the Czech Republic, honouring nearly 800 years of continuous advancement in mining technology.",
  },

  "bavarian-forest": {
    // 全六段 sources: 大拉黑尔峰 1453 m 为国家公园范围内最高峰（森林区整体最高为境外一侧的大阿尔伯山 1456 m，正文限定在公园/巴伐利亚森林范围内，不冲突）；1970 年设立，为德国第一个国家公园。核实 2026-09-10，未改动
    seeing:
      "The Bavarian Forest, on the border between Germany and the Czech Republic, is an old low range that continues the Bohemian Massif onto German soil; its highest point, the Großer Rachel, is 1,453 m. Germany's first national park was established here in 1970.",
    formation:
      "The massif's base is granite and gneiss from the Hercynian orogeny, long since worn down to a plain and then partly re-uplifted during the Cenozoic Alpine orogeny. Weathered granite has left large fields of exposed boulders — a \"sea of rock\" — at high points such as the Großer Rachel.",
    observation:
      "From the air the Bavarian Forest is a rounded massif covered in dense conifer forest, with occasional patches of grey granite boulder \"rock seas\" bare at the summits; the national park preserves large stands of untouched primeval spruce forest, and some areas show extensive standing deadwood from a 1990s bark-beetle outbreak, now kept as a record of natural succession.",
    distinguish:
      "The Bavarian Forest and the Black Forest are both mostly granite and gneiss, but the Bavarian Forest is part of the Bohemian Massif on Germany's south-eastern border, while the Black Forest sits in the south-west along the Rhine valley; the Bavarian Forest is Germany's first national park, and its management philosophy places particular emphasis on \"letting nature take its own course.\"",
    concept:
      "A \"sea of rock\" is a classic sign of granite terrain: a granite body deep underground is cut into blocks along three sets of joints, and once uplifted to the surface, repeated freeze-thaw and chemical weathering strip the corners first and round them off, until a whole hillside is covered in rounded boulders — the same process behind Australia's Karlu Karlu, just producing a larger field here given the local climate and rock scale.",
    history:
      "When Bavarian Forest National Park was created in 1970, its philosophy of \"letting nature take its own course with minimal human intervention\" was pioneering for Europe at the time and later became a model followed by many other European national parks.",
  },

  "rhon-mountains": {
    // 全六段 sources: 瓦塞尔库佩峰 950 m 为黑森州最高点；玄武质火山活动约 18–22 Ma 起、约 10 Ma 止，正文「2000万至700万年前」的下限略早于常见口径但同数量级；1991-03-06 跨黑森/巴伐利亚/图林根三州列入 UNESCO 生物圈保护区（保护区官方，1 级）。核实 2026-09-10，未改动
    seeing:
      "The Rhön Mountains sit where Hesse, Bavaria and Thuringia meet; the highest point of the core \"High Rhön\" area, the Wasserkuppe, is 950 m — the remnant of a long-extinct volcano. Thanks to its open views and steady air currents it became the birthplace of German gliding in the early 20th century.",
    formation:
      "The Rhön is the remnant of Cenozoic (roughly 20- to 7-million-year-old) basaltic volcanic activity; the surrounding Triassic sandstone belt (the \"Kuppenrhön\") is dotted with many isolated volcanic necks — old magma-filled conduits left standing after the softer sandstone around them eroded away. The core \"High Rhön\" is one continuous, larger basalt plateau from bigger eruptions.",
    observation:
      "From the air the Rhön is a stretch of open, gentle upland meadow and forest, sparser in vegetation and more open in view than most other German ranges; the Wasserkuppe summit is nearly treeless, and gliders can often be seen circling overhead; the isolated cone-shaped hills scattered nearby are classic volcanic-neck landforms.",
    distinguish:
      "The Rhön, the Eifel and the Vogelsberg are all Cenozoic volcanic remnants in central Germany, but the Rhön's eruptions were smaller and older than the Vogelsberg's, leaving mostly isolated volcanic necks; the Eifel's volcanism continued into the last few hundred thousand years and still shows clear cinder cones and maar lakes.",
    concept:
      "The Rhön's open meadow landscape is tied to its volcanic origin: soil weathered from basalt holds water and nutrients differently from the surrounding Triassic sandstone, and combined with a long history of grazing, this has produced the sparse-forest, open-meadow highland typical here, rather than the dense forest cover common on central Germany's other low ranges.",
    history:
      "The Wasserkuppe has been a mecca for German gliding since the 1920s, and several early gliding records were set here. The Rhön was designated a UNESCO Biosphere Reserve in 1991, jointly managed across Hesse, Bavaria and Thuringia.",
  },

  eifel: {
    // 全六段 sources: 西艾费尔火山场起始约 70 万年前（东艾费尔约 46 万年更晚，正文以整体最早起始概述）；拉赫湖东南岸持续有岩浆源 CO₂ 渗出、深部低频地震群在监测中，研究者明确「近期不预期喷发」—— 正文写「尚未完全停止」而非「即将喷发」，措辞与监测结论一致。核实 2026-09-10，未改动
    seeing:
      "The Eifel, in western Germany near the Belgian border, is an upland dense with Quaternary volcanic remnants — more than 100 low cinder cones, maar craters and domes packed into a few thousand square kilometres, one of continental Europe's most typical maar volcanic fields.",
    formation:
      "Eifel volcanism began about 700,000 years ago, part of magmatic activity linked to a continental rift setting — magma rose along old crustal fractures, and where it met groundwater, explosive eruptions blasted out broad, shallow craters (maars). After the eruptions most of these craters filled with water, alongside a number of ordinary cinder cones.",
    observation:
      "From the air the Eifel is a landscape of farmland and forest dotted with near-perfectly circular hollows — some dry former craters, others filled with deep-blue \"maar lakes\" — standing out sharply against the gentle terrain around them; some cinder cones still keep a complete conical outline.",
    distinguish:
      "The Eifel, the Rhön and the Vogelsberg are all Cenozoic volcanic remnants in central-western Germany, but Eifel volcanism continued into the last few hundred thousand years, leaving the freshest, most complete landforms and the most maar lakes; the Rhön's and Vogelsberg's volcanism is much older and has been eroded much smoother.",
    concept:
      "A maar volcano is the classic product of magma meeting water explosively: when rising magma reaches groundwater, the water flashes to steam and drives a violent explosion that blasts out a crater wider and shallower than the magma alone could produce — this flatter, broader shape is the key sign that distinguishes a maar from an ordinary cinder cone.",
    history:
      "Though eruptions have stopped, magmatic activity beneath the Eifel has not fully ceased (CO2 still seeps from the south-eastern shore of the Laacher See). Since the 1980s the region has developed into the \"Volcanic Eifel\" Geopark, an important field site for studying continental rift-related volcanism.",
  },

  vogelsberg: {
    // seeing sources: HLNUG 地质概述原文「ein Schildvulkan ist der Vogelsberg allerdings nicht」—— 外观呈盾状但非单一盾体，是多喷发中心叠加的火山区（1 级）。主活动期 18.2–16.3 Ma（宽泛 19–15 Ma），正文「约1900万年前起」落在区间内。面积约 2500 km² 远大于艾费尔西场约 600 km²，该比较成立。核实 2026-09-10
    seeing:
      "The Vogelsberg, in the state of Hesse, is the largest continuous volcanic-rock landform in Central Europe, covering about 2,500 km²; its highest point, the Taufstein, is 773 m. Its overall profile is broad and shield-like, but Hesse's state geological survey is explicit that it is not a shield volcano: it is a volcanic field built from hundreds of overlapping eruption centres.",
    formation:
      "From about 19 million years ago, hundreds of separate eruption centres repeatedly released relatively mild basalt lava that stacked up into a broad highland — each flow working much as Hawaii's shield-volcano flows do, though the Vogelsberg as a whole is a multi-vent volcanic field rather than a single shield. Its eruptions ended long ago. Long weathering has left the mountain descending in stepped, ring-shaped terraces from the central \"Oberwald\" plateau outward.",
    observation:
      "From the air the Vogelsberg is a broad upland made of concentric ring-shaped terraces, the central \"Oberwald\" plateau at the highest elevation and each outer ring stepping down slightly, gradually merging into the surrounding lowland; the whole area is covered in forest and pasture, with a gentle shape that gives no hint of a typical conical volcano.",
    distinguish:
      "The Vogelsberg and the Eifel are both basaltic volcanic remnants in Germany, but the Vogelsberg is a continuous, broadly shield-shaped volcanic field built from many overlapping eruption centres, far larger in area than the Eifel's scattered field of cinder cones and maars; the Vogelsberg's eruptions were also earlier and ended sooner than the Eifel's.",
    concept:
      "The Vogelsberg shows how mild eruptions build broad, gentle terrain: when magma has low viscosity and erupts without much violence, lava spreads out layer by layer into a gently sloping shield, as at the Vogelsberg and in Hawaii; more explosive eruptions instead leave entirely different landforms, like the Eifel's maars or the Rhön's volcanic necks.",
    history:
      "Basalt from the Vogelsberg has long been quarried for building material and paving stone, and many traditional quarries survive in the area. The fertile soil and cool climate of the \"Oberwald\" plateau have historically made it an important pasture and forestry region for Hesse.",
  },

  "thuringian-forest": {
    // 全六段 sources: 大贝尔山 982.9 m 为图林根森林及图林根州最高点，未与相邻施内科普夫峰（978 m）混淆；劳沙玻璃业为广泛记载的传统产业，属客观经济地理史。核实 2026-09-10，未改动
    seeing:
      "The Thuringian Forest, in southern Thuringia, is an old range about 70 km long trending north-west to south-east, its ridge rounded and continuous, its highest point the Großer Beerberg at 983 m.",
    formation:
      "The range formed during the Hercynian orogeny (about 300 million years ago) and the subsequent Saxonian tectonic phase, its rock a mix of sedimentary, metamorphic and igneous types. Long weathering has rounded the ridge into gentle relief, though both flanks still keep fairly steep slopes, giving a clearly defined, continuous ridgeline.",
    observation:
      "From the air the Thuringian Forest is a continuous deep-green forested band along the southern edge of the Thuringian Basin, its ridgeline straight and clearly defined against the gentle farmland of the basin to the north; the summit of the Großer Beerberg holds one of the Thuringian Forest's few high-altitude moors, visible from the air as a pale wetland patch among the surrounding dense forest.",
    distinguish:
      "The Thuringian Forest and the Harz are both old Hercynian massifs in central Germany, but the Thuringian Forest is a single continuous linear ridge, while the Harz is a comparatively isolated, block-shaped upland; the Thuringian Forest lies entirely within Thuringia, while the Harz spans Lower Saxony, Saxony-Anhalt and Thuringia.",
    concept:
      "The Thuringian Forest's rounded ridge shows the typical look of an \"old\" mountain range after long weathering: it no longer has the sharp edges of its original mountain-building episode, replaced instead by a continuous ridge smoothed round over hundreds of millions of years of erosion — a clear contrast with the sharp, young profile of the Bavarian Alps, and one of the most direct visual clues to whether a range is \"old\" or \"young.\"",
    history:
      "The Thuringian Forest has historically been an important forestry and glassmaking centre for the Thuringia region, and traditional forestry villages survive in its valleys. The ridge was also historically home to important mountain-pass routes linking the Thuringian Basin with Franconia.",
  },

  "swabian-jura": {
    // seeing sources: 阿尔布陡崖长约 200 km、高 300–400 m（geopark-alb.de，1/2 级）；洞穴数按巴登-符腾堡州名录截至 2026 年已逾 2800 个（会增长的量，下轮复核）；2015 年列入 UNESCO 世界地质公园（unesco.org/en/iggp，1 级）。核实 2026-09-10
    seeing:
      "The Swabian Jura, in south-west Germany, is a karst tableland about 220 km long, 500–1,000 m in elevation; its north-western edge is a continuous cliff line about 200 km long and 300-400 m high (the Albtrauf), overlooking the Neckar valley, while the south-east side slopes gently down to the Danube valley.",
    formation:
      "The tableland is built of Jurassic limestone laid down in a shallow sea about 145–200 million years ago; the hardest uppermost \"White Jura\" layer has long resisted erosion, forming the Albtrauf as a continuous cuesta scarp. Because the limestone is porous and easily dissolved by groundwater, the tableland's interior has developed many dry valleys and, as of 2026, more than 2,800 caves on the state cave register.",
    observation:
      "From the air the Swabian Jura is a sharp topographic boundary — the land on the north-west side drops several hundred metres toward the Neckar valley, while the tableland surface itself is relatively flat and open, covered in farmland and pasture; the dry valleys (with flow only occasionally in the wet season) and cave entrances typical of karst terrain mark this tableland out.",
    distinguish:
      "The Swabian Jura and the Franconian Jura belong to the same Jurassic limestone tableland — the former in the south-west, the latter in the north-east — formed by the same depositional event and geologically continuous; the main difference is that the Franconian Jura preserves the special fossil-bearing environment at Solnhofen. The Swabian Jura and France's Causses are both classic European limestone karst tablelands, but the Swabian Jura's cliff-and-gentle-slope cuesta landform is more pronounced.",
    concept:
      "The Albtrauf is a classic case of differential erosion shaping a cuesta: the limestone beds are roughly horizontal but slightly tilted, the hardest top layer resisting erosion like a cap, while the softer rock beneath is gradually hollowed out until the hard layer loses support and collapses backward — the whole cliff line's gently changing course is essentially the surface projection of this hardest layer's outcrop boundary.",
    history:
      "The Swabian Jura has long been the transport route linking the Neckar valley to the Danube valley, and castles in the area (such as Hohenzollern Castle) are mostly built on high points along the cliff edge. In 2015 the Swabian Jura was designated a UNESCO Global Geopark.",
  },

  "franconian-jura": {
    // 全六段 sources: 索伦霍芬-艾希施泰特始祖鸟系列产地 2022-10 由 IUGS 列入首批「百大地质遗产」（iugs-geoheritage.org，1 级）；潟湖高盐缺氧少扰动保存精细化石的成因解释与 IUGS 口径一致；与 swabian-jura 的 distinguish 段并排核对，两条对分界（多瑙河谷）与侧重的表述互相一致、无矛盾。核实 2026-09-10，未改动
    seeing:
      "The Franconian Jura is the same Jurassic limestone tableland continuing north-east from the Swabian Jura, known for the fine-grained limestone quarried around Solnhofen — which preserves a wealth of exquisite fossils, including Archaeopteryx, and is considered one of the key sites for studying the origin of birds.",
    formation:
      "The tableland's rock is the same Jurassic shallow-sea deposit, about 145–200 million years old, as the Swabian Jura's, but the Solnhofen area was at the time a series of lagoons in a tropical shallow sea, cut off from the open ocean; the water there was too saline to support much life or bottom-disturbing organisms, so the limestone that settled is extremely fine-grained and evenly bedded, capable of preserving the remains of animals that fell to the lagoon floor in exceptional detail — the famous \"lithographic limestone.\"",
    observation:
      "From the air the Franconian Jura, like the Swabian Jura, is a karst tableland riddled with caves and dry valleys, with rivers such as the Altmühl carving broad, gentle valleys; around Solnhofen you can still see the neat, stepped faces left by traditional limestone quarries.",
    distinguish:
      "The Franconian Jura and the Swabian Jura are geologically the same continuous limestone tableland, conventionally divided at the Danube valley into a north-eastern Franconian section and a south-western Swabian section; the Franconian Jura is especially significant palaeontologically for the Solnhofen fossil site, while the Swabian Jura is more notable for the scale of the Albtrauf landform.",
    concept:
      "The Solnhofen Limestone shows how the details of a depositional environment determine fossil preservation quality: ordinary open-sea limestone rarely preserves soft tissue or fine structure, but a cut-off, largely undisturbed lagoon environment like Solnhofen's can seal in fine details — including feathers — intact, which is precisely the geological reason Archaeopteryx fossils are so remarkably complete.",
    history:
      "Solnhofen Limestone has been quarried on a large scale since the 18th century for its suitability as lithographic printing stone, and several Archaeopteryx specimens unearthed through the 19th century shook the palaeontological world of the time. In 2022 the Solnhofen–Eichstätt fossil site was named among the International Union of Geological Sciences' first 100 Geological Heritage Sites.",
  },

  "saxon-switzerland": {
    // 全六段 sources: 巴斯泰观景台海拔 305.4 m、高出易北河 194 m；砂岩为白垩纪约 100 Ma 浅海沉积；1824 年建首座木桥、1851 年改建石桥。跨境的砂岩区表述保持中性、未描述边界线。核实 2026-09-10，未改动
    seeing:
      "Saxon Switzerland, along the Elbe in eastern Germany, is a landscape of table mountains and deep gorges cut into sandstone, named after 18th-century Swiss painters who felt the scenery reminded them of their Alpine homeland. The Bastei is a famous group of sandstone towers, rising about 194 m above the Elbe.",
    formation:
      "This area was a shallow sea floor about 100 million years ago, where several hundred metres of sandstone accumulated before being uplifted above water. The Elbe and its tributaries have long cut down along a crisscrossing network of joints in the rock, dividing what was once a continuous sandstone tableland into isolated table mountains, deep gorges and rock towers — this deeply dissected sandstone landform is rare in Central Europe.",
    observation:
      "From the air Saxon Switzerland is a forested upland on both banks of the Elbe, cut into fragments by dense, deep gorges, with flat-topped table mountains separated by narrow, steep canyons; isolated tower groups like the Bastei rise abruptly from the valley floor, in sharp contrast with the gentle Saxon hills around them.",
    distinguish:
      "Saxon Switzerland and the Swabian Jura are both karst tablelands in Germany, but Saxon Switzerland's parent rock is sandstone, shaped mainly by joint-controlled cutting and mechanical erosion, while the Swabian Jura's is limestone, shaped mainly by chemical dissolution; Saxon Switzerland's landscape is closer to the dissected sandstone tablelands of Utah than to typical solution karst.",
    concept:
      "Saxon Switzerland shows how a sandstone tableland can be shaped by water \"cutting\" along joints rather than \"dissolving\": sandstone, unlike limestone, does not dissolve readily in water, so rivers mainly cut down mechanically along pre-existing vertical joints in the rock, over time carving a once-continuous tableland into disconnected table mountains and towers — a process entirely different from the caves and sinkholes typical of limestone country.",
    history:
      "Wooden bridges have connected the Bastei's rock towers for visitors since 1824, making it one of Germany's earliest developed natural tourist sites. The area was also historically an important quarry, and the building stone for the Königstein Fortress and other historic structures was largely sourced locally.",
  },

  "teutoburg-forest": {
    // 全六段 sources: 奥斯宁砂岩约 120 Ma（早白垩世）浅海沉积、约 70 Ma 经构造掀斜成单面山脊；公元 9 年瓦鲁斯战役为可核实的历史事件（判据：已结束、无持续对立的定位性史实 → 留），正文明写「具体交战地点学界仍有讨论」，与卡尔克里泽是否为战场的现存争议相符，未擅自定论；正文未涉赫尔曼纪念碑的民族主义诠释。核实 2026-09-10，未改动
    seeing:
      "The Teutoburg Forest, in north-western Germany, is a band of parallel cuesta ridges; a famous landmark is the Externsteine, a group of tall rock pillars left standing by the weathering of sandstone.",
    formation:
      "This area was Cretaceous shallow-sea floor about 120 million years ago, where a silica-cemented, erosion-resistant sandstone accumulated. Mountain building tilted this rock layer, and the hardest part of the tilted bed stood proud of the surface as a series of cuesta ridges; particularly hard bodies within it weathered out into isolated pillars like the Externsteine.",
    observation:
      "From the air the Teutoburg Forest is a clearly visible band of forested ridges across the north German plain, made up of several roughly parallel ranges in sharp contrast with the flat farmland around them; the Externsteine's rock pillars rise abruptly from the forest, a striking landmark in this range.",
    distinguish:
      "The Teutoburg Forest and Saxon Switzerland are both sandstone landforms in Germany, but the Teutoburg Forest is a cuesta ridge formed by mountain-building tilting, while Saxon Switzerland is a horizontal sandstone tableland cut apart by joints — the two differ entirely in origin and appearance.",
    concept:
      "The Teutoburg Forest's cuesta ridges show how a tilted hard rock layer leaves its mark on the surface: even when an originally horizontal rock bed is tilted wholesale by mountain building, the especially hard layer within it still resists erosion and stands relatively proud, forming a continuous ridge that follows the bed's strike — the ridge's direction is essentially the surface projection of that hard layer's outcrop belt.",
    history:
      "In AD 9, a battle between Roman legions and Germanic tribes took place in the general area of the Teutoburg Forest, a famous event in ancient European history, though scholars still discuss the exact battle site. The Externsteine's rock pillars preserve caves and carvings cut at various points in history.",
  },

  "north-german-plain": {
    // 全六段 sources: 吕讷堡石楠草原 1921-12-29 设保护区（下萨克森最古老、德国第二古老），正文「最早……之一」的限定成立；distinguish 段引用的梅塞塔「600米以上」与本库 meseta-central 的「平均600—800米」一致，跨条目口径未冲突。核实 2026-09-10，未改动
    seeing:
      "The North German Plain lies between Germany's central uplands and the North Sea and Baltic coasts, a vast lowland repeatedly reshaped by Quaternary glaciation; the Lüneburg Heath is a classic heather-shrub landscape on this glacial sandy ground.",
    formation:
      "Through repeated Pleistocene ice ages, the Scandinavian ice sheet advanced south and retreated again and again, pushing up debris into discontinuous terminal moraine ridges trending roughly north-west to south-east; meltwater sand and gravel settled between the ridges into broad outwash plains, and countless hollows left by buried ice blocks melting away filled with water to form the plain's scattered small lakes.",
    observation:
      "From the air the North German Plain is an endless flat lowland of wheat fields, pasture and forest in broad alternating patches; a closer look reveals low, undulating terminal moraine ridges and glacial lakes of every size between them; the Lüneburg Heath area shows a distinctive purple (in bloom) or brown heather-shrub tone, clearly different from the surrounding farmland and forest.",
    distinguish:
      "The North German Plain and Spain's Meseta are both extensive flat landforms, but the North German Plain is a young, glacially shaped landscape at low elevation (mostly under 200 m), while the Meseta is a high plateau (mostly above 600 m) formed when an old, planed-down continental block was uplifted as a whole.",
    concept:
      "The North German Plain is a textbook case of how a continental ice sheet reshapes a landscape: as the glacier advances it bulldozes loose material into ridges; debris carried within and beneath the ice settles in place as it retreats; and buried ice blocks that later melt leave behind hollows that fill with water as lakes — the relief and drainage seen today are almost entirely the product of this \"glacial depositional system\" since the last ice age.",
    history:
      "The Lüneburg Heath was once reduced to barren ground by overgrazing and clearing; conscious protection of this heather landscape began in the 19th century, and one of Germany's earliest nature reserves was established here in 1921. The North German Plain has long been an important overland route linking Western and Eastern Europe.",
  },

  "nordlinger-ries": {
    // 全六段 sources: 撞击约 14.8 Ma（近年高精度测年集中在 14.75–14.92 Ma，正文落在区间内）；1960 年代经 Shoemaker 等以冲击石英确认撞击成因（此前曾被误判为火山口）；1970 年 NASA 阿波罗宇航员在此做月球地质训练。与本库 siljan-ring 并排读，未出现「把撞击瞬间和今日地貌压成一件事」的问题。核实 2026-09-10，未改动
    seeing:
      "The Nördlinger Ries, in western Bavaria, is a circular depression about 24 km across, formed when an asteroid more than a kilometre wide struck Earth about 14.8 million years ago — one of the best-preserved, best-studied impact craters in Europe. The medieval town of Nördlingen's walls sit entirely within the flat basin at the crater's floor.",
    formation:
      "The asteroid struck the surface at enormous speed, and the energy released instantly melted and shattered the rock around the impact point, throwing debris outward and leaving a ring-shaped basin, low in the centre with a slightly raised rim. The extreme pressure of the impact left \"shocked\" deformation features in quartz grains that only meteorite impacts produce — evidence that finally confirmed the Ries crater's impact origin in the 1960s (it had earlier been thought to be a volcanic crater).",
    observation:
      "From the air the Nördlinger Ries is an almost perfectly circular low area amid Bavarian farmland, a faint, slightly raised ring visible at its edge; the town of Nördlingen shows a classic medieval radial street pattern, sitting entirely at the basin's centre; many buildings in town are built directly from suevite, the distinctive impact-shocked rock.",
    distinguish:
      "The Nördlinger Ries and Germany's volcanic landforms (the Eifel, the Rhön, and others) can both look like circular hollows, but their origins are entirely different — the Ries is a crater blasted out in an instant by an asteroid impact, involving no magmatic activity at all, while a volcanic crater forms from rising or erupting magma followed by collapse; the evidence each leaves in the rock (shocked quartz versus volcanic rock) is completely distinct.",
    concept:
      "The Nördlinger Ries shows how rock evidence distinguishes an impact crater from a volcanic crater: the circular-hollow appearance alone is not enough to determine origin — the decisive evidence is whether shocked quartz grains and diaplectic feldspar glass can be found under the microscope, minerals that only form under the extreme, instantaneous pressure of an asteroid impact, the \"fingerprint\" of an impact origin.",
    history:
      "The Ries crater's impact origin was only confirmed in the 1960s through the work of American geologist Eugene Shoemaker and others; before that, locals had long assumed it was an old volcanic feature. NASA Apollo astronauts came here in 1970 for lunar-geology field training, because the suevite in the crater resembles material from lunar impact craters.",
  },

  "rhine-gorge": {
    // 全六段 sources: UNESCO「上中莱茵河谷」范围即科布伦茨—宾根/吕德斯海姆约 65 km，2002 年列入（whc.unesco.org/en/list/1066，1 级）；罗蕾莱河段收窄至约 130 m（另有 113 m 一说，130 m 为较常引用口径）。核实 2026-09-10，未改动
    seeing:
      "The Rhine Gorge is the roughly 65 km stretch of the Rhine between Koblenz and Bingen, lined with castles and terraced vineyards; the Loreley reach is the narrowest, deepest section of the whole gorge and one of Germany's best-known natural and cultural landmarks.",
    formation:
      "The Rhine here cuts through the Rhenish Slate Mountains, folded about 400 million years ago in the Devonian, and has been downcutting through this stretch for millions of years. At the Loreley, the rock on both sides of the river is especially resistant quartzite and slate, harder than the surrounding rock, so it has stayed relatively proud as the valley has widened elsewhere over time — the channel is squeezed to about 130 m wide here, and the current is also the deepest and fastest along the whole reach.",
    observation:
      "From the air the Rhine Gorge is a winding river channel cut deep into a highland of slate, terraced vineyards stacked tier upon tier on the steep banks, and medieval castle ruins dotting the hilltops and cliff edges; the channel narrows visibly at the Loreley reach, the most direct way to spot that section of the gorge.",
    distinguish:
      "The Rhine Gorge and Germany's Danube Gorge are both deep valleys cut by large rivers through old highlands, but the Rhine Gorge cuts through Devonian schist and is longer and broader, while the Danube Gorge (the Weltenburg Narrows) cuts through Jurassic limestone and is much smaller in scale but narrower and steeper.",
    concept:
      "The Loreley is a direct example of local hard rock controlling channel width: how fast a river widens its valley depends on how resistant the rock on either bank is; where it meets especially hard rock like quartzite or slate, the channel is forced to narrow and the flow correspondingly deepens and speeds up — the changing width of a river along its course essentially records the pattern of rock hardness along its banks.",
    history:
      "The Loreley's treacherous channel and its record of past shipwrecks gave rise to the German legend of the siren Loreley luring boatmen to their deaths with her song, immortalised in Heine's widely known poem. This stretch of valley was World Heritage-listed in 2002 for its unique blend of two thousand years of human activity and natural landscape.",
  },

  "danube-gorge": {
    seeing:
      "The Danube Gorge, on the southern edge of the Franconian Jura, is a canyon the Danube has cut through a stretch of Jurassic limestone, about 5 km long with cliffs up to 70 m high; Weltenburg Abbey, within the gorge, is said to be one of Bavaria's oldest monasteries.",
    // formation sources: 峡谷由另一条支流（因戈尔施塔特阿尔布缘河）历经数百万年溯源侵蚀切穿，多瑙河约 8 万年前被施特河袭夺才改道入谷（LfU 官方展板，1 级）—— 原文的「约20万年前」在两个节点之间，查无出处。崖高见 issue（40/70/80 三个数并存）。魏尔滕堡修道院 1978-03-05 获欧洲保护地文凭（2 级）。核实 2026-09-10
    formation:
      "The rock the gorge cuts through is limestone laid down by a shallow-sea coral reef about 150 million years ago in the Jurassic, harder and denser than the surrounding rock. The gorge was not cut by the Danube at all. A separate tributary carved it, working headward along joints in this limestone over several million years, while the Danube itself ran through the Altmühl valley. Only about 80,000 years ago was the Danube captured here by the Schutter and diverted into the gorge that was already there.",
    observation:
      "From the air the Danube Gorge is a deep green slot that appears suddenly in the otherwise gentle tableland surface of the Franconian Jura, its grey-white walls on both sides near-vertical, a stark contrast with the open farmland tableland around it; Weltenburg Abbey at the gorge's entrance sits on an open terrace at a bend in the river.",
    distinguish:
      "The Danube Gorge and the Rhine Gorge are both deep valleys cut by large rivers through old rock, but the Danube Gorge cuts Jurassic limestone and is far smaller in scale (about 5 km long versus roughly 65 km for the Rhine Gorge), and its origin leans more toward karst-country river downcutting than the broad, long-term mountain-cutting process behind the Rhine Gorge.",
    concept:
      "The Danube Gorge shows that even a small tributary can cut a deep gorge: a gorge's scale does not depend entirely on the river's size but on the rock's resistance to erosion and how long it has had to cut down — even a relatively small tributary can carve a gorge more spectacular than its own size would suggest, given a joint in hard rock and enough time.",
    history:
      "Weltenburg Abbey, by Benedictine tradition, dates back to the 7th century, one of Bavaria's oldest monasteries, and still brews beer today. In 1978 the Danube Gorge became the first nature reserve in Bavaria to receive the European Diploma of Protected Areas.",
  },

  "moselle-valley": {
    // 全六段 sources: 摩泽尔板岩为泥盆纪（约 400 Ma）沉积；摩泽尔为公认的德国最古老葡萄种植区（罗马时期已有专业酿酒记录），本库其余德国条目无与之冲突的「最古老」断言。核实 2026-09-10，未改动
    seeing:
      "The Moselle Valley is a deep valley the Moselle has cut into Devonian slate, its course extremely winding — steep slopes along its banks are covered in vineyards, making it Germany's oldest wine region and one of the world's most concentrated areas of extremely steep vineyard slopes.",
    formation:
      "The slate the valley cuts through was deposited on the sea floor about 400 million years ago, later folded and uplifted by mountain building. The Moselle has cut down continuously through this slate, and because the rock varies in hardness and old structural lines control its path, the channel winds extremely tightly — some stretches cover barely half the straight-line distance, doubling the actual river length through repeated bends.",
    observation:
      "From the air the Moselle Valley is a blue river looping repeatedly through deep-green hill country, terraced vineyards lining the insides of bends and the steep slopes, in places approaching 70 degrees; the slate's characteristic dark-grey soil is clearly visible along both banks.",
    distinguish:
      "The Moselle Valley and the Rhine Gorge are both German valleys cut into old rock, but the Moselle Valley is known for its extreme meandering, while the Rhine Gorge is comparatively straight and known instead for its sudden channel narrowing; the Moselle's slate is softer than the Rhine Gorge's schist and better suited to vineyard terracing.",
    concept:
      "The Moselle Valley's slate soil shows how rock type directly shapes agriculture: the dark slate absorbs sunlight and warms by day, releasing heat slowly to the vines overnight, making up for insufficient sunshine at this latitude; the broken, fractured slate also lets vine roots dig down easily with good drainage — the geological foundation of Moselle Riesling's quality.",
    history:
      "The tradition of growing grapes in the Moselle Valley dates back to Roman times, making it Germany's oldest wine-growing region. Towns along the river such as Bernkastel-Kues and Trier preserve a wealth of Roman and medieval historic buildings.",
  },

  "elbe-river": {
    // 全六段 sources: 全长 1094 km 为通行口径，约三分之二（≈729 km）在德国境内，正文「约727公里」属合理取整。核实 2026-09-10，未改动
    seeing:
      "The Elbe rises in the Krkonoše Mountains in the Czech Republic and runs about 1,094 km, of which about 727 km flows through Germany, north-west through Dresden and Magdeburg before becoming a broad, tide-influenced estuary near Hamburg and emptying into the North Sea.",
    formation:
      "In its upper reaches the Elbe crosses the mountains on the Czech–German border carrying relatively little sediment; around Dresden the valley opens out, and its banks show the Baroque city skylines and terraced vineyards typical of eastern Germany; further downstream, crossing the North German Plain, the channel widens and slows, and near Hamburg the estuary comes under the influence of Atlantic tides, its water level rising and falling with the tide.",
    observation:
      "From the air the Elbe at Dresden shows a broad, gentle meander, city buildings and valley vineyards arranged along both banks; further downstream, having entered the North German Plain, the channel becomes wider and straighter, and near the Hamburg estuary you can see large tide-influenced mudflats and port facilities.",
    distinguish:
      "The Elbe and the Rhine are both major international rivers of Germany, but the Elbe rises in the Czech Republic and flows north into the North Sea, while the Rhine rises in the Swiss Alps and flows north-west through Germany, also emptying into the North Sea — the two cross entirely different geological terrain: the Elbe's banks feature the sandstone landforms around Dresden and the North German Plain, while the Rhine cuts through the Rhenish Slate Mountains.",
    concept:
      "The Elbe's lower estuary shows how tides can influence a river upstream against its flow: although the Elbe is fundamentally a freshwater river flowing to the sea, for tens of kilometres near its mouth the rise and fall of ocean tides periodically changes the water level and even local current direction — this tide-affected stretch is called a \"tidal reach,\" and marking its extent is an important way of defining a river's estuary.",
    history:
      "The Elbe has historically been one of Central Europe's most important inland shipping routes, and the Port of Hamburg grew into a major European port precisely because of the Elbe's navigability. The stretch through Dresden is known for its wealth of surviving Baroque architecture and valley vineyard scenery.",
  },

  spreewald: {
    // 全六段 sources: 水道网由 200 多条自然与人工水道构成、总长逾 1500 km，与生物圈保护区官方口径一致。核实 2026-09-10，未改动
    seeing:
      "The Spreewald, south-east of Berlin, is an inland delta of the Spree River, where it splits into more than 200 natural and artificial channels totalling about 1,500 km, winding through alder forest and wet meadow; traditional transport and farming here rely on flat-bottomed wooden boats moving along the channels.",
    formation:
      "After the last ice age retreated, this area was left an exceptionally flat hollow; once the Spree entered it, the near-zero gradient meant the river could not hold a single channel and gradually split into a dense, braided network of waterways; over the centuries local people have also dug a great many artificial canals alongside the natural channels, further thickening this water network.",
    observation:
      "From the air the Spreewald is a wetland forest cut into fragments by a web-like network of channels — countless narrow waterways threading through deep-green alder groves, their surfaces reflecting the sky; compared with the orderly farmland around it, this area's surface pattern is noticeably more fragmented and natural.",
    distinguish:
      "The Spreewald and the Elbe are both German inland water systems, but the Spreewald is a special wetland with no single main channel, entirely split into a network of branching waterways, while the Elbe is a clear, continuous single channel; this kind of \"inland delta\" structure is rare on the Central European plain.",
    concept:
      "The Spreewald shows how a river can \"lose itself\" on extremely flat terrain: when the gradient is too shallow for a river to hold enough energy to maintain a single channel, the flow naturally splits and shifts repeatedly, forming a branching network rather than one main course — normally seen only at a true river-mouth delta; the Spreewald is a rare inland-lowland example of the same phenomenon.",
    history:
      "The Spreewald's inhabitants, the Sorbs, are a West Slavic minority within Germany who still preserve the Sorbian language, distinctive traditional dress and Easter-egg craft; flat-bottomed wooden boats remain an important means of transport for local tourism and some farming today.",
  },

  chiemsee: {
    // 全六段 sources: 湖面约 79.9 km²，巴伐利亚最大、德国第三大湖；原湖面积约 240 km²（约今 3 倍），末次冰期末段约 1 万年前冰舌退却积水成湖；与 muritz 互为 distinguish 比较对象，两条数字双向自洽。核实 2026-09-10，未改动
    seeing:
      "The Chiemsee is Bavaria's largest lake and Germany's third-largest by area, its surface covering about 80 km²; for its open scenery and the fine Alpine backdrop it is often called the \"Bavarian Sea.\"",
    formation:
      "About 10,000 years ago, at the end of the last ice age, a large glacial tongue extended north from the Alps, scouring out a broad trough valley along its path; after the glacier retreated, the valley filled with water. The Chiemsee was once about three times its current size, and sediment carried in by surrounding rivers has since gradually filled the lake basin, shrinking it to today's extent.",
    observation:
      "From the air the Chiemsee is an open blue expanse of water at the foot of the Bavarian Alps, the islands of Herreninsel and Fraueninsel clearly visible; the shoreline, shaped by glacial scouring, is relatively gentle and open, in contrast with the steep Alpine backdrop to the south.",
    distinguish:
      "The Chiemsee and Germany's Müritz are both glacially formed lakes, but the Chiemsee was scoured by an Alpine glacial tongue, has clear water, and has a mountainous backdrop, while the Müritz is one of many lakes left on the North German Plain by the retreat of the continental ice sheet, its surroundings flat.",
    concept:
      "The Chiemsee's history of \"once bigger, now smaller\" shows how a lake is naturally filled by sediment over time: even a very slow rate of sediment deposition from inflowing rivers can, over tens of thousands of years, significantly change a lake's shape and size — nearly every glacial lake undergoes this process, only at different speeds and stages.",
    history:
      "Herrenchiemsee Palace, on the lake's Herreninsel, was built in the 19th century by Bavarian King Ludwig II in imitation of France's Palace of Versailles, one of three famous castles built by Bavaria's \"fairy-tale king.\"",
  },

  muritz: {
    // 全六段 sources: 米里茨湖 117.8 km²，为完全在德国境内的最大湖泊（博登湖 536 km² 更大但跨三国，正文已写明这一限定）；国家公园由 1990-09-12 东德部长会议末次会议批准的首批 5 个之一、10-01 正式成立。核实 2026-09-10，未改动
    seeing:
      "The Müritz covers about 117 km², the largest lake entirely within German territory (after the cross-border Lake Constance); the surrounding Mecklenburg Lake District carries thousands of lakes left by Quaternary glaciation, and Müritz National Park is one of the largest national parks on mainland Germany.",
    formation:
      "During the last ice age, an arm of the Scandinavian ice sheet covered and scoured this area; debris carried by the glacier settled as it retreated into a series of terminal moraine ridges, damming meltwater and later rainfall to form the Müritz and hundreds upon hundreds of lakes of every size around it.",
    observation:
      "From the air the Müritz and its surroundings form a flat lowland dotted densely with lakes of every size, forest, wetland and farmland scattered between them, the whole area looking almost like a patchwork mosaic of land and water from high above — one of the most typical showcases of glacial landforms on the North German Plain.",
    distinguish:
      "The Müritz and the Chiemsee are both glacially formed lakes, but the Müritz is one of many flat-country lakes formed by the retreat of the continental ice sheet on the North German Plain, its shores gentle and its surroundings low-lying; the Chiemsee formed in a trough valley scoured by an Alpine glacial tongue, with an obvious mountainous backdrop.",
    concept:
      "The dense \"thousand lakes\" landscape around the Müritz shows how a continental ice sheet shapes terrain differently from a mountain glacier: a mountain glacier usually scours a single deep valley along one course, forming one large lake, while a continental ice sheet leaves hundreds or thousands of disconnected hollows across a broad plain — this \"thousand-lakes\" pattern is a direct sign that a region was once covered by a continental ice sheet rather than mountain glaciers.",
    history:
      "Müritz National Park was created in 1990, one of the first national parks established in the former East Germany, protecting large areas of undisturbed lake, marsh and forest ecosystems and serving as an important habitat for white-tailed eagles and other large raptors.",
  },

  "laacher-see": {
    // 全六段 sources: 严格分类上是岩浆房排空后塌陷的破火山口湖而非玛珥（俗称玛珥湖），正文已把「严格意义/俗称」两层写清；喷发约 12,900 年前（2023 年树轮研究修订为 12,880，同量级）、VEI 6，与 1991 年皮纳图博同级；2026 年监测显示深部地震群与氦同位素上升，结论是「活跃岩浆系统但近期无喷发风险」，正文「休眠而非死亡」与之吻合。核实 2026-09-10，未改动
    seeing:
      "The Laacher See, in the eastern Eifel volcanic field, formed from the crater of the youngest major eruption in the Eifel's volcanic history (about 12,900 years ago), an eruption on a scale comparable to Mount Pinatubo's in the Philippines in 1991.",
    formation:
      "In this eruption, magma emptied out of an underground chamber and the surface above it collapsed, forming a caldera larger and deeper than an ordinary maar — strictly speaking, the Laacher See is a caldera lake formed by collapse after the magma chamber emptied, not a maar blasted out directly by an explosion (though it is often loosely called one). Ash from the eruption travelled as far as about 400 km to the east, and traces of this ash layer can still be found in the geology of many parts of Central Europe today.",
    observation:
      "From the air the Laacher See is a near-circular, deep-blue lake amid Eifel forest, the low rim of the caldera wall visible around its edge; on the south-eastern shore, bubbles can still be seen rising from the water and the shoreline — carbon dioxide released by residual magmatic activity underground.",
    distinguish:
      "The Laacher See formed differently from the Eifel's other maar lakes — an ordinary maar is a crater blasted out directly when magma meets groundwater, while the Laacher See is a caldera formed by surface collapse after an eruption, and is noticeably larger; this is the key distinction when telling apart these two similar-looking volcanic landforms, \"maar\" and \"caldera.\"",
    concept:
      "The steady seep of carbon dioxide from the Laacher See's south-eastern shore is direct evidence bearing on whether a volcano is truly \"dead\": seismic monitoring shows magmatic activity deep below has not fully ceased, and while the timing of any future eruption cannot be predicted, the ongoing gas seepage shows the Eifel volcanic field remains geologically \"dormant\" rather than \"extinct.\"",
    history:
      "Maria Laach Abbey on the lakeshore is an important German Benedictine monastery founded in the 12th century, sited to take advantage of the flat, open terrain around the caldera. The eruption 12,900 years ago is thought to have affected the climate and human activity in Central Europe at the time, an important case study of volcano–climate interaction at the close of the last ice age.",
  },

  "wadden-sea": {
    // 全六段 sources: UNESCO 官方描述即「the largest unbroken system of intertidal sand and mud flats in the world」；2009 年德国（下萨克森+石荷）与荷兰段列入、2014 年丹麦段并入（whc.unesco.org/en/list/1314，1 级）。2011 年另有一次技术性扩边（汉堡瓦登海国家公园并入既有德国部分，面积增约 1.4%），不涉新增国家，正文主线不受影响。核实 2026-09-10，未改动
    seeing:
      "The Wadden Sea is the largest continuous system of intertidal flats in the world, on the south-eastern shore of the North Sea, running along the coasts of the Netherlands, Germany and Denmark; the German stretch is fronted by two chains of barrier islands, the East Frisian and North Frisian islands.",
    formation:
      "The Wadden Sea landscape is made up of tidal channels, sandbars, seagrass meadows, salt marshes and barrier islands together — the barrier islands offshore act as a natural barrier blocking most of the wave energy, and the relatively calm water between the islands and the mainland lets sediment settle, forming broad intertidal flats; this system continually adjusts itself with sea-level change, a dynamic coastal process that has continued for thousands of years.",
    observation:
      "From the air the Wadden Sea at low tide exposes broad, pale-brown mudflats, tidal channels branching across them like tree limbs; at high tide these areas are submerged again. The chain of barrier islands offshore runs in a shallow-sea arc, with a relatively calm, lagoon-like body of water between the islands and the mainland.",
    distinguish:
      "The Wadden Sea and Germany's Rhine Gorge are both landforms shaped by water, but the Wadden Sea is shaped by tides and waves, mainly through deposition, while the Rhine Gorge is shaped by a river, mainly through downcutting erosion; the Wadden Sea and Spain's Doñana are both important bird habitats, but the Wadden Sea is far larger and a purely tidal-flat system, while Doñana is mainly a seasonal estuarine marsh.",
    concept:
      "The Wadden Sea is a classic case for understanding how barrier islands protect a coast: the islands block most wind and wave energy offshore, so the water behind them stays relatively calm and sediment can keep settling, building broad intertidal flats — without this natural barrier, the same stretch of coast, directly exposed to wind and waves, would show an entirely different, erosional landform instead.",
    history:
      "Dike-building and land reclamation along the Wadden Sea coast date back to the Middle Ages, with generations of local residents reclaiming land from the sea by building extensive sea dikes and drainage systems. The German and Dutch sections of the Wadden Sea were World Heritage-listed in 2009, and the Danish section joined in 2014, a site jointly protected across three countries.",
  },

  "rugen-chalk-cliffs": {
    // 全六段 sources: 王座崖（Königsstuhl）118 m 是这一处地标的实测值，未与全岛最高点 Piekberg 161 m 混淆——正文指代明确，不属「区域值挂到局部对象」；崖岸长度各来源 11–15 km，正文「约12公里」落在区间内；白垩为晚白垩世约 70 Ma 颗石藻钙质骨骼沉积。核实 2026-09-10，未改动
    seeing:
      "Rügen is the largest island in the Baltic Sea, and a stretch of chalk cliff about 12 km long and up to 118 m high on its north-eastern coast is one of Germany's most recognisable coastal landscapes; the Königsstuhl (\"King's Chair\") is its best-known viewpoint.",
    formation:
      "This cliff is built of chalk formed from the calcareous skeletons of microscopic marine algae (coccolithophores) deposited about 70 million years ago in the Late Cretaceous, when this area was still a warm shallow sea. The Baltic Sea's waves continually erode the soft chalk, and the cliff face keeps collapsing and retreating; flint nodules embedded within the chalk, more resistant than the chalk itself, are washed out and cover the beach below.",
    observation:
      "From the air Rügen's chalk cliffs form a striking white wall at the edge of the deep-blue Baltic Sea, their tops covered in deep-green beech forest, the cliff faces showing fresh, jagged breaks from ongoing collapse; the beach below is scattered with dark grey flint pebbles, a strong colour contrast with the white of the cliff.",
    distinguish:
      "Rügen's chalk cliffs and Spain's Cabo de Gata are each their own country's most distinctive sea cliff landscape, but Rügen's cliffs are sedimentary rock built from the calcareous skeletons of Cretaceous marine organisms, soft and prone to collapse, while Cabo de Gata is hard igneous rock built up by volcanic eruption.",
    concept:
      "Rügen's chalk cliffs show how a soft-rock coast can retreat quickly: chalk may look like a solid cliff to the eye, but it is actually loosely bound and weak against erosion, and Baltic wave action can wear it back at a relatively fast pace — which is why, spectacular as chalk-cliff scenery is, it is also one of the most actively eroding, fastest-changing coastal landform types.",
    history:
      "The Königsstuhl area has been a famous subject for Romantic painter Caspar David Friedrich since the 19th century, and his paintings made this cliff landscape known across Europe. The core area of Rügen's chalk cliffs forms Jasmund National Park, Germany's smallest national park by area but one of its most visited.",
  },

  helgoland: {
    // seeing sources: 原文「56 米」实为该岛西南侧砂岩在海面以下继续延伸的深度，被误作崖高；海面以上崖壁普遍约 50 m、最高处上城约 61 m —— 可查来源仅 3 级，故正文只写指代明确的 61 m，不对「一圈崖壁平均高度」下断言，见 issue。砂岩为早三叠世（Buntsandstein）；1890 年黑尔戈兰—桑给巴尔条约划归德国（2 级）。核实 2026-09-10
    seeing:
      "Helgoland is Germany's only offshore island far from the mainland, about 50 km from the nearest coast; the main island is ringed by red sandstone cliffs rising to about 61 m at their highest, on the Oberland — extremely rare along Germany's mostly sandy, muddy North Sea coast.",
    formation:
      "The island's red cliffs are Early Triassic sandstone, coloured a bright red by iron oxide; this sandstone tableland has stood isolated for a long time on a raised structure on the North Sea floor, while the rock layers that once connected to it elsewhere have been eroded away and submerged over long geological history — only this block, relatively raised by tectonic uplift, has survived to the present as the only rocky island exposed above the surface in the southern North Sea.",
    observation:
      "From the air Helgoland is a vivid red rock tableland in the deep-blue North Sea, ringed by steep cliffs; just to its south-west lies a low, flat sandbar island, the Düne, which can be reached on foot across the shallows at low tide; the red cliffs form a sharp colour contrast with the grey-blue sea around them.",
    distinguish:
      "Helgoland and the barrier islands of the Wadden Sea are both German North Sea islands, but Helgoland is a hard red sandstone tableland standing alone far out at sea, while the Wadden Sea's barrier islands are loose sand and mud accumulations hugging the mainland's edge — the two are entirely different in rock composition and formation.",
    concept:
      "Helgoland shows how an isolated geological structure can survive amid an otherwise levelled sea floor: across most of Germany's North Sea coast, old rock layers have long since eroded away and been buried under later loose sediment, but the structure beneath Helgoland was uplifted to a greater degree, letting the hard Triassic sandstone below stay exposed and resist ongoing marine erosion, an isolated exception in an otherwise flat seabed.",
    history:
      "Helgoland's history has passed between Danish, British and German control several times; an 1890 treaty placed it under German administration. The Düne sandbar is one of the North Sea's most important breeding grounds for grey and harbour seals.",
  },
};
