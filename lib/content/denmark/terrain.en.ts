import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Denmark ============
  "central-jutland-highlands": {
    seeing:
      "The Central Jutland Highlands are the area of most pronounced relief in mainland Denmark; Møllehøj, at 170.86 m, was confirmed by a new survey in 2005 as the highest point in mainland Denmark.",
    formation:
      "The highlands are built of terminal moraine ridges pushed up during last-glacial advances; repeated glacial advance and retreat left several parallel hill ridges here, a classic moraine landscape.",
    // observation sources: 默勒霍伊 170.86 m 为 2005 年测量确认的本土最高点；观景塔（1924 年建、12.5 m、可望五湖）在 270 m 外的埃耶尔巴内霍伊上，**不在最高点**。三峰高差：默勒霍伊 170.86 / 伊丁森林高地去除人工墓丘后 170.77 / 埃耶尔巴内霍伊 170.35 —— 正文「相差数十厘米」成立。核实 2026-09-11
    observation:
      "From the air, the hills show gentle undulation, with forest and pasture interspersed, standing out against the otherwise flat terrain typical of the rest of Denmark; an observation tower on the neighbouring hill of Ejer Bavnehøj, 270 m away, overlooks the surrounding lake district.",
    distinguish:
      "Both the Central Jutland Highlands and Mols Bjerge are Danish moraine hill country, but the Central Highlands are slightly higher and hold mainland Denmark's highest point, while Mols Bjerge lies on the eastern peninsula with more tightly clustered hills.",
    concept:
      "Møllehøj and the neighbouring Ejer Bavnehøj and Yding Skovhøj differ in elevation by only tens of centimetres — the precise 2005 remeasurement dispute is an interesting case study in how survey precision affects the designation of a \"highest point.\"",
    history:
      "The summit of Møllehøj holds a millstone, a remnant of the Ejer windmill that stood from 1838 to 1917; the 2005 remeasurement formally established it as mainland Denmark's highest point.",
  },
  "mols-bjerge": {
    // 全六段 sources: 阿格里巴内霍伊 137 m 为莫尔斯山地最高点（国家公园官网，2 级）；国家公园 2009-08-29 揭幕，是丹麦第二座（首座为提 Thy，2008-08；随后瓦登海 2010-10）—— 正文「首批之一」成立。核实 2026-09-11，未改动
    seeing:
      "Mols Bjerge lies on the Djursland peninsula in eastern Jutland and is one of Denmark's few areas of pronounced hill terrain; its highest point, Agri Bavnehøj, reaches 137 m.",
    formation:
      "The landscape is built of terminal moraine ridges from last-glacial advances; after the ice retreated it left undulating hills interspersed with small kettle-hole lakes.",
    observation:
      "From the air, the hills show clear relief, with grassland, heather moor and forest interwoven, and a winding coastline reaching into the Kattegat — one of the few areas in Denmark where pronounced relief is visible from above.",
    distinguish:
      "Both Mols Bjerge and the Central Jutland Highlands are Danish moraine hill country, but Mols Bjerge sits on the eastern peninsula close to the coast, while the Central Highlands are further inland and slightly higher.",
    concept:
      "The well-preserved terminal moraine ridges of Mols Bjerge are a classic case for studying how last-glacial advance-and-retreat processes leave landform evidence in otherwise low-lying terrain.",
    history:
      "The area has been gradually designated as protected nature since the 1960s, and Mols Bjerge National Park, established in 2009, is one of Denmark's first national parks.",
  },
  "rebild-bakker": {
    seeing:
      "Rebild Bakker lies in northern Jutland, a moraine hill area covered in heather moorland next to Rold Skov, Denmark's largest forest.",
    formation:
      "The hills are built of a mix of meltwater deposits and moraine material from the retreat of the last glaciation; poor soil has long preserved large areas of unfarmed heather moorland here.",
    observation:
      "From the air, the undulating hills are covered in purple heather (especially striking at late-summer bloom), forming a sharp contrast of colour and landform with the dark green of Rold Skov nearby.",
    distinguish:
      "Both Rebild Bakker and Jutland Heath preserve classic heather vegetation, but Rebild Bakker shows clear moraine-hill relief next to extensive forest, while Jutland Heath is flatter, a remnant of heath on an outwash plain.",
    concept:
      "The combination of heather moor and forest at Rebild Bakker is a classic case for studying how vegetation naturally succeeds on poor moraine soil alongside deliberate human conservation.",
    // history sources: 1911 年集资购地、1912 年献地契给国王，两步两年（发起人 Max Henius）。核实 2026-09-11
    history:
      "Danish emigrants living in the United States raised funds to buy this land in 1911 and formally donated it to the Danish state in 1912, creating Denmark's first large protected nature area; a US Independence Day commemoration has been held here annually ever since.",
  },
  "bornholm-almindingen": {
    // 全六段 sources: 骑士峰 162 m 为全岛最高自然点（Trap Danmark / lex.dk，2 级）；Britannica 确认岛屿北部三分之二为花岗岩，属波罗的地盾南缘出露，与正文「约三分之二」一致；「丹麦境内波罗的地盾唯一出露区」未见反例。⚠️ 本库航线解说 cph-rnn 曾把「……的地区之一」写成「唯一」，已于 2026-09-11 同步补回限定。核实 2026-09-11，未改动
    seeing:
      "The Almindingen forest highland at the centre of Bornholm is the island's highest ground; its peak, Rytterknægten, reaches 162 m and the area is one of the only places in Denmark where granite bedrock is exposed over a wide area.",
    formation:
      "About two-thirds of the island's bedrock is Precambrian granite, an exposed extension of the Baltic Shield; long weathering has produced a low, rounded highland, standing in sharp contrast to the young moraine landforms typical of the rest of Denmark.",
    observation:
      "From the air, the highland is densely forested, with bare granite outcrops dotting the woodland, forming — together with the island's farmland and granite coast — Bornholm's distinctive geological landscape.",
    distinguish:
      "Both the Almindingen highland and the Bornholm Granite Coast display the island's distinctive granite geology, but Almindingen is the forested inland highland, while the granite coast is the steep cliff line along the north shore.",
    concept:
      "Bornholm's Precambrian granite bedrock is the only exposure of the Baltic Shield within Denmark, providing a uniquely Danish sample for studying the shield's southern-margin geological evolution.",
    history:
      "The Almindingen forest was historically a royal hunting ground; it is now an important outdoor-recreation area for the island.",
  },
  "mons-klint": {
    // 全六段 sources: 崖顶最高处约 128 m（Dronningestolen）是崖体本身的高度 —— **未与附近独立山丘 Aborrebjerg（142/143 m）混淆**；白垩为马斯特里赫特期约 70 Ma 颗石藻钙质残骸堆积，末次冰期冰川挤压致褶皱变形。核实 2026-09-11，未改动
    seeing:
      "Møns Klint is Denmark's tallest sea cliff, reaching about 128 m at its highest point, built of Late Cretaceous chalk; in July 2025 the glaciotectonic landscape here was inscribed on the World Heritage List under criterion (viii), with a property of 4,123 hectares.",
    formation:
      "The chalk was deposited in a shallow sea around 70 million years ago during the Late Cretaceous, made up mainly of the calcareous remains of tiny marine organisms (coccolithophores); last-glacial ice pressure folded the originally horizontal chalk beds, producing today's steep, structured cliff face.",
    observation:
      "From the air, the pure white cliff face runs along the coastline, its top covered in beech forest, with the folded bedding of the chalk clearly visible, forming a striking colour contrast with the blue-green Baltic Sea below.",
    distinguish:
      "Both Møns Klint and Stevns Klint are built of Late Cretaceous chalk, but Møns Klint is taller with more pronounced folding, while Stevns Klint is lower and known chiefly for the layer recording the Cretaceous-Paleogene extinction event.",
    concept:
      "The folding at Møns Klint is a classic case for studying how last-glacial ice pressure deformed originally horizontal sedimentary beds, illustrating the effect of glacial tectonics on soft sedimentary rock.",
    history:
      "The chalk cliffs have been an important natural tourist attraction in Denmark since the 19th century, and a geology centre at the clifftop explains the chalk's formation and its fossil discoveries.",
  },
  "stevns-klint": {
    // 全六段 sources: 「鱼粘土」层记录 66 Ma 白垩纪—古近纪灭绝事件、富含铱；崖长按 UNESCO 官方口径 15 km（部分二手来源作 17 km，正文取官方口径）；2014-06-23 列入 UNESCO。赫耶鲁普老教堂约 1250 年建、1928-03-16 圣坛坍塌入海 —— 正文「13 世纪建、20 世纪坍塌」两个世纪都对。核实 2026-09-11，未改动
    seeing:
      "Stevns Klint is a chalk cliff on the south-eastern coast of Zealand; a dark clay layer within the cliff face records geological evidence of the Cretaceous-Paleogene extinction event 66 million years ago.",
    formation:
      "The lower cliff is Late Cretaceous chalk, the upper part Paleogene limestone; between the two lies a several-centimetre-thick dark clay layer (locally called \"fish clay\"), rich in iridium — a globally recognised geological marker of the asteroid impact linked to the extinction of the dinosaurs and other species.",
    observation:
      "From the air, the cliff runs along the coast for about 15 km; the ruined Højerup Old Church at the clifftop has partly collapsed into the sea due to coastal erosion, a visible record of the cliff's ongoing retreat.",
    distinguish:
      "Both Stevns Klint and Møns Klint are chalk cliffs on and near Zealand, but Stevns Klint is known for its \"fish clay\" layer recording the Cretaceous-Paleogene extinction, while Møns Klint is taller and shows more pronounced folding.",
    concept:
      "The \"fish clay\" layer at Stevns Klint is one of the most important field pieces of geological evidence worldwide for the Cretaceous-Paleogene extinction event (the asteroid-impact hypothesis), which is why it was inscribed on the UNESCO World Heritage List in 2014.",
    history:
      "Højerup Old Church was built in the 13th century; as the cliff has continued to erode and retreat, part of the church collapsed into the sea in the 20th century, and it remains a well-known landmark of the cliff's ongoing geological change.",
  },
  "skagen-odde": {
    // 全六段 sources: ⚠️ 正文「约一万年来持续延伸」用的是「末次冰期以来」这一**通俗口径**；较新研究认为沙嘴主体约 7150 年前才开始发育、5500 年内成今状。两种口径在二手资料中并存，正文非错但精度可再收紧，下轮若查到 GEUS 一手结论再改。19 世纪末斯卡恩画派属广泛记载的艺术史。核实 2026-09-11
    seeing:
      "Skagen Odde is a sand spit extending continuously into the sea from the northern tip of Jutland; its point, Grenen, is where the currents of the North Sea and the Kattegat meet.",
    formation:
      "The spit was built up by longshore currents carrying sand over roughly ten thousand years, continuing to extend north-eastward — one of the most actively developing sand-spit landforms on the Danish coast.",
    observation:
      "From the air, the waters on either side of the narrow spit's tip show distinct colouring, with rougher waves on the North Sea side and calmer water on the Kattegat side; the two currents meet at the tip to form a clearly visible dividing line — a distinctive marine landform in Denmark.",
    distinguish:
      "Both Skagen Odde and Rubjerg Knude are sandy coastal landforms in northern Jutland, but Skagen Odde is an actively extending sand spit reaching out to sea, while Rubjerg Knude is a wind-eroded dune migrating inland.",
    concept:
      "The visible dividing line where currents meet on either side of Skagen Odde's tip is a direct landform illustration of the physical mixing process where waters of different salinity and density converge along a coast.",
    history:
      "The town of Skagen was historically an important Danish fishing port; in the late 19th century its distinctive Nordic light drew a group of painters who settled and worked there, forming the well-known \"Skagen Painters\" movement.",
  },
  "rubjerg-knude": {
    // 全六段 sources: 灯塔 1900-12-27 首次点亮（1899 年动工）、1968-08-01 停用、2019-10 整体向内陆迁移 70 m —— 三个年份均核实无误。沙丘仍在移动，是会变的量。核实 2026-09-11，未改动
    seeing:
      "Rubjerg Knude is an active dune on Jutland's North Sea coast; its lighthouse, built in 1900, was buried by the advancing dune until it went dark in 1968, then moved bodily inland in 2019 once sea erosion had cut the cliff back to its foundations.",
    formation:
      "The dune was built up by strong North Sea westerly winds carrying beach sand over a long period; since the late 19th century the dune has continued to migrate inland, making this one of the most actively eroding wind-blown dune landforms in Denmark.",
    observation:
      "From the air, the bare dune surface shows wave-like undulation, with the lighthouse standing isolated atop it, its once-surrounding vegetation now buried by drifting sand — a direct illustration of wind-driven landform change.",
    distinguish:
      "Both Rubjerg Knude and Skagen Odde are sandy landforms in northern Jutland, but Rubjerg Knude is a wind-eroded dune migrating inland with pronounced relief, while Skagen Odde is a flat sand spit extending along the coast.",
    concept:
      "The advancing dune buried the lighthouse and put it out of service in 1968, while the 2019 move was forced by a separate process — North Sea erosion cutting the cliff back to the building's foundations — which makes the site a classic case for telling wind-driven dune migration and coastal erosion apart.",
    history:
      "The lighthouse was built in 1900 and taken out of service in 1968 as the dune advanced; in 2019, as coastal erosion brought it dangerously close to the cliff edge, the whole structure was moved about 70 m inland to avoid falling into the sea.",
  },
  limfjord: {
    // 全六段 sources: 1825 年 2 月风暴潮（「二月洪灾」）冲开阿格尔堤，形成利姆海峡西端与北海的永久通道。核实 2026-09-11，未改动
    seeing:
      "The Limfjord is a long, narrow waterway crossing northern Jutland, separating the Vendsyssel-Thy peninsula from the rest of the mainland; a storm surge in 1825 permanently opened its western connection to the North Sea.",
    formation:
      "The channel follows an old structurally weak zone; historically it has repeatedly been closed off from the North Sea by sediment build-up and then reopened by storm surges, making it an unusually dynamic land-sea boundary landform for Denmark.",
    observation:
      "From the air, the waterway is long, narrow and winding, dotted with small islands and peninsulas along its banks; towns such as Aalborg are built along the channel, and it forms an important geographic dividing line in northern Jutland.",
    distinguish:
      "Both the Limfjord and Isefjord/Roskilde Fjord are important inland waterways in Denmark, but the Limfjord crosses the entire peninsula and is open to the sea at both ends, while Isefjord is a single deeply incised fjord reaching into Zealand.",
    concept:
      "The Limfjord's history of repeated closure by sediment and reopening by storm surge is a classic case for studying the relationship between dynamic shallow-sea coastline change and human settlement adaptation.",
    history:
      "A powerful storm surge in February 1825 permanently opened the western channel to the North Sea, reshaping the geography of northern Jutland; before that, the waterway had long been semi-enclosed.",
  },
  "isefjord-roskilde-fjord": {
    // 全六段 sources: 罗斯基勒峡湾本身深入内陆约 40 km（伊瑟峡湾主体约 35 km），正文以「约40公里」笼统描述整个水系，在合理近似内；罗斯基勒大教堂 1995 年列入 UNESCO；哈拉尔蓝牙王（卒 986 年）葬于此，与「自10世纪起」一致。核实 2026-09-11，未改动
    seeing:
      "Isefjord and Roskilde Fjord form a fjord system reaching about 40 km inland into northern Zealand, with Roskilde Fjord as its eastern branch.",
    formation:
      "The fjord's outline was shaped by last-glacial erosion; after the ice retreated, the sea flooded the original trough to form today's long, winding waterway.",
    observation:
      "From the air, the fjord branches in a tree-like pattern deep into Zealand, its banks mostly farmland and forest, with the historic town of Roskilde at the fjord's southern end.",
    distinguish:
      "Both Isefjord/Roskilde Fjord and the Limfjord are important Danish fjord waterways, but Isefjord reaches deep into Zealand with a branching, tree-like form, while the Limfjord crosses the whole of Jutland and is open to the sea at both ends.",
    concept:
      "The branching, tree-like form of Isefjord is a classic case for studying how a last-glacial erosional trough, once flooded by the sea, develops a branched fjord drainage pattern.",
    history:
      "Roskilde was Denmark's religious and political centre for centuries starting in the 10th century; Roskilde Cathedral is the traditional burial site of Danish monarchs and was inscribed on the UNESCO World Heritage List in 1995.",
  },
  "wadden-sea-dk": {
    // 全六段 sources: 与本库已核的德国侧 wadden-sea、荷兰侧 wadden-sea-nl **三方并排读一致** —— 2009 年德荷段列入、丹麦段因等待国家公园设立延后到 2014 年并入（丹麦瓦登海国家公园官网，2 级；whc.unesco.org/en/list/1314，1 级）。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "The Danish section of the Wadden Sea is the northernmost part of the North Sea's intertidal mudflat and barrier-island system, which together with the German and Dutch sections forms the world's largest continuous intertidal ecosystem.",
    formation:
      "The intertidal flats were built up by repeated tidal deposition of fine sediment, while the barrier-island chain formed from sand carried by longshore currents, long resisting North Sea wave erosion — together forming a distinctive lagoon–mudflat–barrier-island sequence.",
    observation:
      "From the air, at low tide broad mudflats are exposed, showing a winding network of tidal channels; at high tide the flats are submerged, with barrier islands such as Rømø sheltering the lagoon waters behind them.",
    distinguish:
      "Both the Danish Wadden Sea and the Limfjord are important Danish coastal-water landforms, but the Wadden Sea is an open intertidal mudflat–barrier-island system facing the North Sea directly, while the Limfjord is a comparatively enclosed channel crossing the peninsula.",
    concept:
      "The Wadden Sea is the world's largest surviving continuous intertidal ecosystem, an internationally significant case for studying the coupled evolution of mudflat and barrier-island landforms under tidal action.",
    history:
      "The area has historically been an important Danish fishing and shipping region; in 2014 the Danish section joined the existing German and Dutch sections on the UNESCO World Heritage Wadden Sea listing, forming a single protected area spanning all three countries.",
  },
  "bornholm-granite-coast": {
    // 全六段 sources: 哈默伦岬角前寒武纪花岗岩崖壁与 bornholm-almindingen 的波罗的地盾出露事实一致；哈默斯胡斯城堡多个来源直接称「北欧最大的城堡遗址」（不带之一），正文用「之一」更保守，不与更强信源冲突。核实 2026-09-11，未改动
    seeing:
      "The Bornholm Granite Coast lies at the island's northern tip; the Hammeren headland's steep cliffs are built of Precambrian granite, the only large area of exposed granite bedrock anywhere on the Danish coast.",
    formation:
      "The granite bedrock is an exposed extension of the Baltic Shield; long exposure to Baltic Sea wave erosion has produced steep cliffs and rugged rock formations on the comparatively hard granite, far more erosion-resistant than the soft moraine deposits typical elsewhere in Denmark.",
    observation:
      "From the air, the dark granite cliffs contrast sharply with the blue water of the Baltic Sea; the cliff forms are rugged and irregular, quite unlike the gentle sandy coastlines typical elsewhere in Denmark.",
    distinguish:
      "Both the Bornholm Granite Coast and Møns Klint are well-known Danish sea cliffs, but the granite coast is built of hard Precambrian granite with a rugged form, while Møns Klint is built of softer chalk, comparatively even in profile and pure white in colour.",
    concept:
      "The erosion resistance of the Bornholm Granite Coast is a classic case for studying how differing rock types (hard crystalline rock versus soft sediment) produce different coastal erosion rates around Denmark.",
    history:
      "Granite on the island has been quarried for building stone since the Middle Ages; the Hammeren area also holds the medieval fortress of Hammershus, one of the largest castle ruins in Northern Europe.",
  },
  "silkeborg-lake-district": {
    // 全六段 sources: ⚠️「丹麦本土唯一的湖区式地貌集群」是较强的排他断言 —— 官方区域旅游局称 Søhøjlandet 为丹麦最高地区、坐拥 50 余座湖泊，未查到可与之相提并论的第二个集群，现有资料范围内未见反例，暂留但下轮留意。锡尔克堡镇 1844 年 Michael Drewsen 建造纸厂而兴起，「19 世纪」属实。核实 2026-09-11，未改动
    seeing:
      "The Silkeborg Lake District is a chain of glacially carved lakes along the middle course of the Gudenå, Denmark's longest river — the only lake-district-style landform cluster in mainland Denmark.",
    formation:
      "The lakes occupy depressions carved by last-glacial erosion, later linked by the river; they belong to the same moraine landscape zone as the neighbouring Central Jutland Highlands, one of the areas of most pronounced relief in Denmark.",
    observation:
      "From the air, several lakes line up along the course of the Gudenå, their shores densely forested, standing out sharply against the flat, far-reaching farmland typical of the rest of Denmark.",
    distinguish:
      "The Silkeborg Lake District, Arresø and Furesø are all important Danish lake landforms, but the Silkeborg district comprises several lakes linked by a river next to hill country, while Arresø and Furesø are each single, standalone lakes.",
    concept:
      "The combination of the Silkeborg Lake District with the neighbouring Central Jutland Highlands is a classic case for studying how last-glacial moraine landforms and river-lake systems co-develop in Denmark.",
    history:
      "The town of Silkeborg grew up along the Gudenå from the 19th century around its paper industry; the lake district is now an important destination for river cruising and outdoor recreation in Denmark.",
  },
  arresoe: {
    // 全六段 sources: 面积 40.72 km²，丹麦最大湖泊；平均水深 3.1 m，与正文「约3米」一致；与 furesoe（最深 37.7 m）互为 distinguish 对照，「更大更浅 vs 更小更深」两条并读自洽。history 段的 19 世纪围垦尝试见 issue。核实 2026-09-11
    seeing:
      "Arresø is Denmark's largest lake, covering about 40 km², draining via a river channel into Isefjord.",
    formation:
      "The lake basin occupies a shallow depression carved by last-glacial erosion; the lake is comparatively shallow, averaging only about 3 m in depth.",
    observation:
      "From the air, the lake surface is broad and flat with a fairly regular shoreline, surrounded mainly by farmland and wetland, blending seamlessly into the surrounding Danish landscape.",
    distinguish:
      "Both Arresø and Furesø are important lakes on Zealand, but Arresø is larger and shallower, while Furesø is smaller and is Denmark's deepest lake.",
    concept:
      "The shallow, broad basin form of Arresø is a classic case for studying how areas of weaker last-glacial erosion produce shallow lake basins, in contrast to deep-basin lakes elsewhere.",
    // history sources: 「19世纪围垦尝试」查无 1–2 级来源，删去。核实 2026-09-12
    history:
      "The lake has historically been an important fishery for northern Zealand; the surrounding area is now an important nature reserve.",
  },
  furesoe: {
    // seeing sources: 最深 37.7 m（菲于瑟市官网，2 级；丹麦语维基与自然署页面一致），非 37.8。与 arresoe（40.72 km²、均深 3.1 m，丹麦最大湖）互为 distinguish 对照，两条并读自洽。核实 2026-09-11
    seeing:
      "Furesø is Denmark's deepest lake, with a maximum depth of about 37.7 m, located in the northern suburbs of Copenhagen.",
    formation:
      "The lake basin occupies a deep trough gouged by last-glacial ice, where erosion was more intense than in the surrounding area, producing a deep-basin lake landform rare in Denmark.",
    observation:
      "From the air, the lake is long and narrow, its shores a mix of forest and villa development — an important near-suburban natural water body for the greater Copenhagen area.",
    distinguish:
      "Both Furesø and Arresø are important lakes on Zealand, but Furesø is deeper, its basin carved by a glacial trough, while Arresø is larger in area and shallower.",
    concept:
      "The deep basin of Furesø is a classic case for studying how local variation in last-glacial erosion intensity can produce both deep- and shallow-basin lakes in otherwise low-relief terrain.",
    history:
      "The lake area has been a favoured villa retreat for Copenhagen's wealthy since the 19th century and remains an important near-suburban recreational water body for greater Copenhagen today.",
  },
  "gudenaa-river": {
    // 全六段 sources: 全长约 158 km、丹麦最长水道、注入兰讷斯峡湾（锡尔克堡市官方古德诺河信息站，2 级）；与 west-jutland-outwash-plain 的斯克恩河（丹麦流量最大）分属长度与流量两个口径，两条并读不冲突。核实 2026-09-11，未改动
    seeing:
      "The Gudenå is Denmark's longest river, running about 158 km from its source near the Central Jutland Highlands to meet Randers Fjord near the town of Randers.",
    formation:
      "The river runs along the transition zone between central Jutland's moraine hills and outwash plain; its middle course flows through the Silkeborg Lake District, linking several glacially carved lakes, making it the Danish river with the most pronounced relief along its course.",
    observation:
      "From the air, the channel winds between hills and lakes, opening into broader water in its middle reaches, and widening into a river-mouth delta near Randers at its lower end.",
    distinguish:
      "Both the Gudenå and the Skjern Å on the West Jutland Outwash Plain are important Jutland rivers, but the Gudenå develops through hill and lake country with a more varied course, while the Skjern Å crosses the flat outwash plain with a comparatively gentle course.",
    concept:
      "The way the Gudenå links several glacially carved lakes in the Silkeborg Lake District is a classic case for studying how a river strings lakes together within a moraine landscape, shaping a region's drainage network.",
    history:
      "The river has historically been an important inland shipping route in Denmark; the industrial development of towns such as Silkeborg once relied heavily on river transport, and today it is an important canoeing and cruising river in Denmark.",
  },
  "sydfynske-oehav-aeroe": {
    // 全六段 sources: 埃勒斯考宾为丹麦保存最完好的 18 世纪小镇，2002 年获欧罗巴诺斯特拉奖；淹没冰碛丘陵成群岛的机制与 lolland-falster-lowland 对比无冲突。核实 2026-09-11，未改动
    seeing:
      "The South Funen Archipelago is a cluster of dozens of small islands south of Funen; Ærøskøbing on the island of Ærø preserves the most complete 18th-century half-timbered town quarter in Denmark.",
    formation:
      "The archipelago formed when last-glacial moraine hill country was partly flooded by the sea; only the higher parts of the original continuous hill terrain remained above water as islands, while the low ground became the shallow water between them.",
    observation:
      "From the air, numerous small islands are scattered across shallow water, criss-crossed by channels — a classic fragmented island landscape in Denmark, where sailing remains an important traditional means of transport and recreation.",
    distinguish:
      "Both the South Funen Archipelago and the Lolland-Falster Lowland lie in southern Denmark, but the archipelago is a fragmented multi-island landform formed by partial flooding of hill country, while Lolland-Falster is a single, continuous low-lying island landform.",
    concept:
      "The fragmented island landscape of the South Funen Archipelago is a classic case for studying how last-glacial moraine hill country becomes a scattered archipelago when partly submerged by rising sea level.",
    history:
      "The town of Ærøskøbing was historically an important sailing-trade port; its well-preserved 18th–19th-century half-timbered streets make it one of Denmark's best-preserved historic towns.",
  },
  laesoe: {
    seeing:
      "Læsø is the largest island in the Kattegat belonging to Denmark, its surface dominated by low, sandy moraine flats.",
    formation:
      "The island's foundation is last-glacial moraine deposit; long exposure to wave and wind action has produced a low, sandy landform, and historically, heavy deforestation for salt-boiling fuel — driven by the island's productive coastal brine springs — accelerated wind erosion and sand mobilisation.",
    observation:
      "From the air, the island's terrain is low and flat, its traditional houses roofed in thick seaweed thatch that blends into the low sandy landscape around them — a combination of building tradition and landform unique to Denmark.",
    distinguish:
      "Both Læsø and Anholt are Danish islands in the Kattegat, but Læsø is larger, known for its historic salt production and seaweed-thatched houses, while Anholt is known for the lichen-heath \"desert\" landscape on its eastern side.",
    concept:
      "The wind erosion and sand mobilisation on Læsø, driven by historic overlogging for the salt-boiling industry, is a classic case for studying how human economic activity can accelerate coastal sandy-landform change.",
    // history sources: GEUS 2010 年基于约 1700 处中世纪制盐遗址的研究 —— 1585 年后快速衰退、1652 年停止，主因是小冰期变冷使可形成高盐地下水的海岸带降至不足原来 15%，燃料短缺为次因（1 级）。砍伐导致 17 世纪王室禁伐令属实。formation 段只讲「砍伐→风蚀沙化」的地貌机制，不涉产业衰退因果，不改。核实 2026-09-11
    history:
      "Salt production on the island dates to the Middle Ages, at its peak supplying large quantities of salt to the Danish crown; deforestation for fuel led to a 17th-century royal ban on wood-fired salt-boiling, but a 2010 study by the Geological Survey of Denmark and Greenland found the industry's rapid decline after 1585 and its end in 1652 owed more to Little Ice Age cooling, which sharply shortened the stretches of coast able to form hypersaline groundwater; the tradition of seaweed-thatched roofing survives to this day.",
  },
  "jutland-heath": {
    // 全六段 sources: 兰伯尔荒原 750 ha，为丹麦最大内陆荒原残余；1700 年代至 19 世纪初中/西日德兰荒原覆盖率约 50%，正文「近半」属实；丹麦石楠荒原协会由 Enrico Dalgas 于 1866 年创立、主导排水植树（丹麦国家历史百科，2 级）。核实 2026-09-11，未改动
    seeing:
      "Jutland Heath once covered a large expanse of poor, sandy glacial-outwash land in western Jutland; Randbøl Hede is the largest surviving continuous remnant of this heather moorland in Denmark.",
    formation:
      "The heath's surface is poor sandy soil laid down by last-glacial meltwater, extremely low in nutrients, able to sustain only hardy heather shrub communities and unsuited to conventional farming.",
    observation:
      "From the air, low heather shrubs blanket the flat sandy ground, turning a striking purple-red in the late-summer bloom, in sharp contrast with the reclaimed farmland surrounding it.",
    distinguish:
      "Both Jutland Heath and Rebild Bakker preserve heather vegetation, but Jutland Heath is flat, a remnant of heath on an outwash plain, while Rebild Bakker shows clear moraine-hill relief.",
    concept:
      "The large-scale loss and partial survival of Jutland Heath is a classic case for studying the long-running tension between human agricultural reclamation and natural-vegetation conservation on poor sandy soil.",
    history:
      "Before the 19th century, heather moorland covered nearly half of western Jutland; from the 19th century the Danish Heath Society led a large-scale programme of drainage and tree-planting that converted most of it to farm and forest land, leaving Randbøl Hede as one of the few continuous remnants surviving today.",
  },
  "anholt-oerkenen": {
    // 全六段 sources: Ørkenen 为北欧最大同类地衣荒原景观；学术研究确认风成沙丘与地衣群落的发育与历史性砍伐直接相关，砍伐高峰在 16—17 世纪，与正文「16 世纪森林砍伐后」方向一致；正文明写它「非真正沙漠」，与学界口径（地衣荒原而非气候学沙漠）一致。核实 2026-09-11，未改动
    seeing:
      "About three-quarters of the eastern side of Anholt is covered in a lichen-heath landscape locally called \"Ørkenen\" (the Desert), the largest lichen heath in Northern Europe.",
    formation:
      "The landscape formed after heavy deforestation on the island in the 16th century; the sandy ground, no longer held by vegetation, developed wind-blown dunes under the prevailing westerly winds, later gradually covered by drought-tolerant lichen communities — it is not a true desert in the climatic sense.",
    observation:
      "From the air, the eastern side of the island shows a grey-white barren landscape, contrasting sharply with the vegetated moraine hills to the west, with the undulating outline of relict dunes still faintly visible.",
    distinguish:
      "Both Anholt's \"Desert\" and Jutland Heath are barren landscapes on poor sandy Danish ground, but Anholt is dominated by lichen communities on wind-blown dunes shaped by historic deforestation, while Jutland Heath is dominated by heather shrubs on a meltwater outwash plain.",
    concept:
      "Anholt's \"Desert,\" essentially a lichen heath rather than a true desert, is a classic case for studying how historic human activity (deforestation) can trigger wind-blown dunes and drought-tolerant vegetation communities even in a temperate maritime climate.",
    history:
      "After the island's forests disappeared due to overlogging in the 16th century, wind-blown dunes gradually expanded and buried part of the farmland and settlements, forcing islanders to adapt their livelihoods; the \"Desert\" landscape has since become Anholt's most recognisable natural feature.",
  },
  "store-vildmose": {
    // 全六段 sources: 1917 年潜艇战危机促成 1918 年立法，1920—1945 年国家主导垦荒（1920 年代征地建 57 座农场）；二战期间因棉花等进口中断确有亚麻、大麻种植记录。正文「20 世纪初」与实际启动（1917–1920s）基本吻合。核实 2026-09-11，未改动
    seeing:
      "Store Vildmose is a former large raised peat bog basin in northern Jutland, converted to farmland through drainage works in the early 20th century.",
    formation:
      "The basin occupies a shallow depression; poor drainage after the last ice age allowed wetland plant matter to accumulate over a long period into a thick peat layer, making it one of the largest peat bogs in northern Jutland.",
    observation:
      "From the air, large regular fields show the traces of artificial drainage, while surviving patches of natural wetland retain the dark brown colouring of peat bog — a sharp contrast between the two.",
    distinguish:
      "Both Store Vildmose and the Danish Wadden Sea involve Danish wetland landforms, but Store Vildmose is an inland raised-bog basin, mostly drained and converted to farmland, while the Wadden Sea is a coastal intertidal system that remains in its natural state.",
    concept:
      "The transformation of Store Vildmose from natural peat bog to farmland is a classic case for studying large-scale 20th-century European wetland drainage projects and their impact on the original landform.",
    history:
      "In the early 20th century, the Danish government led a large-scale drainage project that converted most of the bog to farmland; during the Second World War the area was briefly used to grow strategic crops such as flax, and part of it has since been restored as a wetland nature reserve.",
  },
  "west-jutland-outwash-plain": {
    seeing:
      "The West Jutland Outwash Plain is a broad, low, sandy plain built up by last-glacial meltwater carrying sand and gravel; the Skjern Å, Denmark's highest-volume river, forms a delta here.",
    formation:
      "The plain was built up over a long period by sand and gravel carried by meltwater at the margin of the last-glacial ice sheet — a classic glacial outwash plain, extremely flat with poor, sandy soil.",
    observation:
      "From the air, the plain is broad and flat, with the Skjern Å winding through it and forming a delta as it enters Ringkøbing Fjord, its banks lined by wetland farmland reclaimed through drainage.",
    distinguish:
      "Both the West Jutland Outwash Plain and Jutland Heath lie in the poor, sandy area of western Jutland, but the outwash plain is defined by the Skjern Å delta landform, while Jutland Heath is defined by the surviving heather shrub vegetation on poor soil.",
    concept:
      "The West Jutland Outwash Plain is a classic case for studying how meltwater at the margin of a last-glacial ice sheet builds up a broad, flat sandy plain over time, and a key area for understanding the origins of western Denmark's landforms.",
    // history sources: 渠化 1962–1968（4000 ha 湿地转耕地）；复原工程 1999-06 开工、2002 年秋基本完工（议会决议 1987），2003 年已是收尾监测期 —— 原文的「20世纪初」与「2003年起启动」两个年份都错、顺序也反了。斯克恩河为丹麦流量最大的河流（平均约 30 m³/s）。核实 2026-09-11
    history:
      "Between 1962 and 1968 Denmark carried out a large-scale project to reroute and drain the Skjern Å to expand farmland; this was later judged to have damaged the ecosystem, and the Danish government ran a restoration project from 1999 to its substantial completion in 2002, returning the river to something closer to its original course and wetlands.",
  },
  "lolland-falster-lowland": {
    seeing:
      "The Lolland-Falster Lowland comprises Denmark's two southernmost islands, a low-lying agricultural region mostly only a few metres above sea level and an important Danish sugar-beet and grain-growing area.",
    formation:
      "The surface of both islands is mainly last-glacial moraine deposit, extremely low-lying; some coastal low ground was historically reclaimed behind dikes, and the soil is fertile and well-suited to intensive farming.",
    observation:
      "From the air, regular farmland covers almost the entire island, its field boundaries neat and clear — similar to farming landscapes on other Danish islands but flatter and more open.",
    distinguish:
      "Both the Lolland-Falster Lowland and the Funen Rolling Farmland are important Danish farming regions, but Lolland-Falster is extremely flat, with land partly reclaimed behind dikes, while Funen retains more noticeable rolling-hill relief.",
    concept:
      "The parts of the Lolland-Falster Lowland reclaimed behind dikes are a classic case for studying the history of artificial land reclamation and land-use change in Denmark's low-lying coastal areas.",
    // history sources: 洛兰大堤 1873–1878 年修建、全长 63 km，起因为 1872 年风暴潮（80 人死亡），是丹麦史上最大的海岸防护工程。原文的「17世纪荷兰移民围垦」实为 **1521 年荷兰农民定居阿马厄岛**的史实 —— 真事挪错了岛、也挪错了世纪。核实 2026-09-11
    history:
      "The region has been an important farming area since the Middle Ages; after a storm surge flooded large parts of Lolland in 1872 and killed 80 people, Denmark built the 63 km Lolland Dike between 1873 and 1878, converting drained coastal low ground behind it into arable farmland.",
  },
  "funen-rolling-farmland": {
    // 全六段 sources: 「丹麦花园」称号据传出自安徒生本人（1805–1875），欧登塞为其出生地（1805），「19 世纪起」属实。核实 2026-09-11，未改动
    seeing:
      "The Funen Rolling Farmland is a landscape of gently rolling fields on young last-glacial moraine, long known as the \"Garden of Denmark.\"",
    formation:
      "The underlying landform is comparatively young last-glacial moraine deposit, retaining slight hill relief; centuries of farming have shaped it into today's regular, gently rolling patchwork of fields.",
    observation:
      "From the air, regular fields and orchards cover the gently rolling terrain, their colours forming a rich patchwork by crop type, with towns such as Odense dotted throughout — a representative Danish farming landscape.",
    distinguish:
      "Both the Funen Rolling Farmland and the Lolland-Falster Lowland are important Danish farming regions, but Funen retains noticeable gentle-hill relief, while Lolland-Falster is extremely flat, with land partly reclaimed behind dikes.",
    concept:
      "The Funen Rolling Farmland is a classic case for studying how young last-glacial moraine landforms, shaped by centuries of farming, evolve into a regular field landscape — illustrating the long interaction between a natural landform base and human land use.",
    history:
      "Funen has been an important farming region since the Middle Ages; from the 19th century, its fertile soil and abundant produce earned it the nickname \"Garden of Denmark,\" and Odense is the birthplace of the famous Danish fairy-tale author Hans Christian Andersen.",
  },
  grejsdalen: {
    // 全六段 sources: ⚠️ 河谷南段（格赖斯湖至格赖斯镇）确为冰下融水侵蚀的隧道谷，但**北段（南北走向部分）实为地表融水（Bøgager 冰湖溃决）侵蚀的 V 形谷** —— 正文把整条河谷统一描述为隧道谷，是对两段不同成因的简化，非错但有精度损失，下轮考虑分段表述（Ökolariet 地区自然中心，2 级）。history 段的磨坊见 issue。核实 2026-09-11
    seeing:
      "Grejsdalen is a representative example of a tunnel valley in Jutland, with comparatively steep valley walls and dense forest on its floor.",
    formation:
      "The valley was carved by last-glacial subglacial meltwater flowing under pressure at the margin of the ice sheet — a classic subglacial tunnel valley; after the ice retreated, a narrow river and forest remained on the valley floor.",
    observation:
      "From the air, the valley walls rise comparatively steeply on both sides, contrasting with the flatter terrain typical elsewhere in Denmark, and the valley floor is densely forested — one of the few clearly gorge-like landforms in Jutland.",
    distinguish:
      "Both Grejsdalen and the valley landforms along the Gudenå illustrate river-valley landforms in Jutland, but Grejsdalen is a classic, tightly confined subglacial tunnel valley with steep walls, while the Gudenå valley is broader and gentler, linking several lakes along its course.",
    concept:
      "Grejsdalen is a classic case for studying how subglacial meltwater erosion produces the distinctive tunnel-valley landform, fundamentally different from a broad valley carved directly by surface glacial ice.",
    // history sources: 15 座水力磨坊（瓦埃勒市政府，1 级）。核实 2026-09-12
    history:
      "Thanks to its strong current, the Grejs Å has driven 15 water-powered mills over the years, busiest in the late 19th and early 20th centuries; the forest trails preserved in the valley today are an important hiking area in Denmark.",
  },
};
