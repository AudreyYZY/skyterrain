import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============================================================
  // Europe / Slovakia
  // ============================================================
  "high-tatras": {
    // 全六段 sources: 同中文侧。Gerlachovský štít 2655 m（部分资料 2654.4 m），斯洛伐克与喀尔巴阡最高点，完全在斯洛伐克境内。跨境只写 "along the Slovak–Polish frontier"，不涉主权。2026-09-13 首写。
    seeing:
      "The High Tatras are the highest and most completely glaciated section of the Tatra range, crowned by Gerlachovský štít at about 2,655 m — the highest point in Slovakia and in the whole Carpathian chain. The range is small — its main crest runs about 26 km east to west and some 17 km across — yet it packs more than twenty rock summits above 2,500 m into that distance, and it is the only stretch of the Carpathians with a genuinely alpine character.",
    formation:
      "The core is granitic crystalline rock, ancient basement lifted by thrust tectonics. The shaping was done by ice: cirques bit into both flanks of the ridge one after another until the once-continuous crest was pared down to knife-edges and horns, while the valley floors kept a staircase of rock basins that filled with water to become a chain of glacial lakes — pleso in Slovak.",
    observation:
      "From the air the High Tatras read as a pale grey rock crest rising abruptly out of low ground on both sides, in sharp contrast with the forested hills around them. The giveaway is the row of round hollows along each flank of the ridge — cirques, many with a small dark lake on the floor. Resort settlements string along the valley mouths on the southern side, while the valleys on the northern side are longer and wider.",
    distinguish:
      "The High and Western Tatras adjoin one another in the same range; the difference is lithology. The High Tatras are almost entirely granite, with sheer walls and sharp edges; the Western Tatras carry thrust sheets of limestone and dolomite over their crystalline core, so their outlines are rounder and locally karstic. The contrast with the Low Tatras is even plainer: those are one long continuous meadow ridge with no cluster of rock peaks.",
    concept:
      "The High Tatras are often called the smallest alpine range in the world, meaning that a complete alpine vertical sequence is compressed into a very small footprint: spruce forest at the foot, dwarf pine and alpine meadow above the treeline, and bare rock and scree at the top. Whether an upland counts as alpine terrain depends not on absolute elevation but on whether it rises past the treeline and carries landforms left by glaciers.",
    history:
      "Mountain grazing and mining in this area are long recorded, and from the late nineteenth century, once the railway reached it, the range developed into one of central Europe's better-known climbing and health-resort districts, a tradition of mineral springs and climate cures that continues today. Tatra National Park, declared in 1949, was Slovakia's first.",
  },
  "western-tatras": {
    // 全六段 sources: 同中文侧。Bystrá 2248 m 为最高点；结晶岩核心上覆石灰岩/白云岩推覆岩片。2026-09-13 首写。
    seeing:
      "The Western Tatras are the western section of the Tatra range, topped by Bystrá at 2,248 m. Compared with the High Tatras to the east, the crest is longer and rounder, the valleys wider, and forest reaches higher up the slopes, so the whole section looks markedly less severe.",
    formation:
      "They share the same crystalline core as the High Tatras, but here a cover of thrust limestone and dolomite is still preserved on top of it. The two rock types fail differently: the crystalline rock holds a rounded main crest, while the limestone belts develop dry valleys, caves and abrupt steps. Ice-age glaciers cut cirques into both flanks here too, only on a smaller scale.",
    observation:
      "From the air the Western Tatras are a broad meadow-covered crest sending out a row of roughly parallel long valleys to the south, streams and forest on their floors. The crest reads green-brown rather than the pale grey of the High Tatras, which is the quickest way to tell the two sections apart.",
    distinguish:
      "The Western and High Tatras are two stretches of one range: judge by colour and outline — sharp pale grey walls mean the High Tatras, broad green-brown ridges the Western. Against Malá Fatra the difference is height and glacial imprint: Malá Fatra tops out below 1,800 m and has no properly formed cirques.",
    concept:
      "The Western Tatras show how a difference in rock type inside one range is written directly into its shape. Given the same uplift and the same glaciers, granite yields sharp horns while limestone and dolomite yield rounded crests and solution features — the difference lies in the material, not the process.",
    history:
      "The alpine meadows here were long used as summer pasture, and the timber building traditions of the mountain villages are widely recorded; valleys on both the northern and southern sides developed into hiking and skiing destinations from the nineteenth century onward. This section also lies within Tatra National Park, declared in 1949.",
  },
  "low-tatras": {
    // 全六段 sources: 同中文侧。Ďumbier 2043 m；位于瓦赫河与赫龙河河谷之间；按面积为斯洛伐克最大国家公园（1978 年设立）。洞穴数量与长度无一手来源，不写数字。2026-09-13 首写。
    seeing:
      "The Low Tatras run between the valleys of the Váh and the Hron as a single long east–west crest, highest at Ďumbier, 2,043 m. The 'low' in the name is relative to the Tatras proper; the range itself already rises past the treeline, and its crest carries open alpine meadow.",
    formation:
      "The range is built of a crystalline core with a sedimentary cover above it, lifted during the Carpathian orogeny. Ice-age glaciers left cirques only in the highest sections, so the rest of the crest keeps a rounded profile; on the limestone of the northern slope, groundwater has dissolved out sets of cave systems instead.",
    observation:
      "From the air the Low Tatras are an almost unbroken green ridge standing well above the river valleys on either side. Bare rock is scarce along the crest, replaced by continuous meadow and a trail that follows the ridgeline; each end carries a higher swell — Ďumbier at the western end, Kráľova hoľa at the eastern.",
    distinguish:
      "The difference from the High Tatras is shape rather than height alone: clusters of sharp rock peaks there, one continuous meadow ridge here. Against the Slovak Ore Mountains, those are not a single crest but a set of scattered massifs and karst plateaus, and much lower.",
    concept:
      "The Low Tatras are a good place to watch the treeline. Its height depends not only on latitude but on exposure, wind and snow cover: within the same upland, forest climbs higher on sheltered valley slopes, while a windward crest can drop to meadow and dwarf scrub within a few tens of metres of altitude.",
    history:
      "Mountain grazing and forestry here are long recorded, and the caves on the northern slope were surveyed and progressively opened to visitors from the nineteenth century. Low Tatras National Park was declared in 1978 and is Slovakia's largest national park by area.",
  },
  "mala-fatra": {
    // 全六段 sources: 同中文侧。Veľký Kriváň 1709 m；以石灰岩/白云岩为主；Jánošíkove diery 在其支谷内；1967 年保护景观区、1988 年国家公园。2026-09-13 首写。
    seeing:
      "Malá Fatra, in north-western Slovakia, is a middle-mountain range built largely of limestone and dolomite, highest at Veľký Kriváň, 1,709 m. Its main crest is short, but the flanks are cut by a dense set of side valleys, which makes the range look more rugged than its height suggests.",
    formation:
      "The sedimentary layers were folded, thrust and uplifted during the Carpathian orogeny, after which running water incised along bedding planes and fractures. Limestone both dissolves readily and stands up in sheer walls, which produces the combination typical here: narrow ravines, vertical faces, and waterfalls and potholes on the valley floors.",
    observation:
      "From the air Malá Fatra is an irregularly outlined forested massif, pale rock walls interleaved with dark forest. The most striking features are the few narrow valleys cutting north from the main crest; from height they appear as no more than thin slots in the forest — the Jánošíkove diery ravines lie in one of them.",
    distinguish:
      "Malá Fatra and Veľká Fatra face each other across the Turiec basin, and the names are easy to reverse: Malá Fatra has the higher summit (1,709 m against 1,592 m), Veľká Fatra the larger area. Against the Western Tatras, the absence of cirques and glacial lakes is decisive — the slots here are the work of water and solution, not ice.",
    concept:
      "Malá Fatra shows that a ravine is not the same thing as a canyon. A ravine of this kind is dissolved and incised little by little along joints and bedding in limestone, and can be only metres wide with walls almost touching; a canyon is usually a river cutting through rock at a much larger scale, with a continuous channel on its floor.",
    history:
      "Grazing and timber floating in the valleys are long recorded, and the villages at the valley mouths retain their timber building traditions. Malá Fatra became a protected landscape area in 1967 and a national park in 1988.",
  },
  "velka-fatra": {
    // 全六段 sources: 同中文侧。Ostredok 1592 m；面积大于小法特拉、最高点更低；1973 年保护景观区、2002 年国家公园。2026-09-13 首写。
    seeing:
      "Veľká Fatra lies east of Malá Fatra on the far side of the Turiec basin, highest at Ostredok, 1,592 m. The 'great' in its name refers to area rather than height — it is far broader than Malá Fatra, yet its summit is lower.",
    formation:
      "It belongs to the same structure as Malá Fatra: a crystalline core overlain by thrust sheets of limestone and dolomite, folded and uplifted, then dissected by running water. Because the massif is broader, its drainage had room to develop a dendritic pattern, with a set of parallel long valleys on each side of the main crest and limestone reaches in several of them narrowed into walled gates.",
    observation:
      "From the air Veľká Fatra is one continuous rolling forested upland; its crest is not a thin line as in Malá Fatra but a set of rounded ridges close together. The Turiec basin to the west is a conspicuous patch of flat low ground, and the boundary between basin and mountain runs almost straight.",
    distinguish:
      "Veľká Fatra against Malá Fatra is broad-and-low against narrow-and-high; against the Low Tatras the difference is lithology and continuity, since the Low Tatras form one continuous crest above the treeline while most of Veľká Fatra's crest is still within the forest belt.",
    concept:
      "The two Fatra ranges are a clear case of names that do not track elevation: the adjective in a place name usually records whatever property people noticed first — area, population or historical standing — rather than height. A descriptive place name is not a measurement.",
    history:
      "The alpine meadows were long used as summer pasture and the valley villages and their timber houses are widely recorded; the Turiec basin on the western side has been a regional farming and transport corridor since the Middle Ages. Veľká Fatra was a protected landscape area from 1973 and became a national park in 2002.",
  },
  "male-karpaty": {
    // 全六段 sources: 同中文侧。Záruby 768 m；长约 100 km；高程自多瑙河边约 132 m 起；布拉迪斯拉发在南端；1976 年保护景观区。2026-09-13 首写。
    seeing:
      "The Little Carpathians are the south-western end of the whole Carpathian chain, running about 100 km north-east from the bank of the Danube. Their range of elevation is wide but their absolute height is modest: about 132 m at the river, 768 m at the summit of Záruby. Bratislava sits at their southern tip.",
    formation:
      "The core is ancient crystalline rock with a sedimentary cover preserved along the margins, raised during the Carpathian orogeny as a long narrow block mountain. At the southern end the Danube has cut a notch through it, and the valley narrows there into a natural gateway between steeply rising slopes.",
    observation:
      "From the air the Little Carpathians are a slender forested band separating the Záhorie lowland to the west from the Danubian lowland to the east. Vineyards cover the lower slopes on both sides of the crest, distinct in colour from both the forest above and the farmland below, so the three-fold banding is easy to read. At the southern end the Danube can be seen passing through the gap in the range.",
    distinguish:
      "What sets the Little Carpathians apart from Slovakia's other ranges is that they are a terminus: the Carpathian arc falls here to a few hundred metres and ends at the Danube. Compared with Malá Fatra to the north, both are largely limestone, but the Little Carpathians are far lower and have no section above the treeline.",
    concept:
      "Where a mountain chain ends is usually settled by structure rather than by height. The Little Carpathians are only a few hundred metres high yet still belong structurally to the Carpathian arc; the gap of the Danube valley separates them from the Alpine system, and that gap is the structural boundary zone between the two.",
    history:
      "Viticulture along the foot of the range is long recorded and the winemaking traditions of the villages continue today; a number of medieval castle sites are spread along the crest. The Little Carpathians Protected Landscape Area was declared in 1976.",
  },
  "slovenske-rudohorie": {
    // 全六段 sources: 同中文侧。Stolica 1476 m 为最高点；该区含 Stolické vrchy / Volovské vrchy / Revúcka vrchovina / Veporské vrchy / Čierna hora + Slovenský kras 与 Spišsko-gemerský kras。矿种与年代无一手来源，只写 "long-recorded metal mining"。2026-09-13 首写。
    seeing:
      "The Slovak Ore Mountains spread east–west across southern Slovakia as an old upland. They are not a single ridge but an assemblage of massifs and karst plateaus, highest at Stolica, 1,476 m. The name comes from the area's long-recorded metal mining.",
    formation:
      "The basement is Palaeozoic crystalline and metamorphic rock, locally overlain by Mesozoic limestone that has been dissolved into a series of tabular karst plateaus. The whole upland has been eroded for a long time, so its summits are generally pared down to gently undulating surfaces, with rivers cutting deep valleys into them.",
    observation:
      "From the air the Slovak Ore Mountains are a large forested upland of modest relief, quite unlike the single clean crest of the Low Tatras to the north. The easiest features to pick out are several plateaus with flat tops and abrupt edges, and the deep valleys cut into those edges.",
    distinguish:
      "The Slovak Ore Mountains against the Low Tatras is an area against a line: an assemblage of massifs and plateaus versus one long crest. The relationship to entries such as the Slovak Karst and Muránska planina is one of containment — those are the parts of this upland where karst is developed most typically.",
    concept:
      "This upland illustrates the idea of an erosion surface: worn down over a long period, an upland's summits tend toward a surface of low relief; later uplift raises that surface as a whole, and rivers then incise into it afresh. The flat summits visible today therefore record an earlier stage of the landscape rather than its present erosional state.",
    history:
      "Metal mining here is long recorded and the mining towns along the belt form part of central European mining history; since mining declined, forest and karst landforms have become the region's principal natural assets.",
  },
  "stiavnicke-vrchy": {
    // 全六段 sources: 同中文侧。Sitno 1009 m；18×22 km caldera + intrusive complex + resurgent horst；Banská Štiavnica 为 UNESCO 世界遗产。2026-09-13 首写。
    seeing:
      "The Štiavnica Mountains, in central Slovakia, are the country's largest volcanic upland. What stands there today is not a cone but the eroded remnant of a Miocene stratovolcano: the summit, Sitno, reaches 1,009 m and is simply the hardest surviving piece of that remnant.",
    formation:
      "Structurally the volcano has three parts: a large caldera roughly 18 by 22 km across, an extensive intrusive complex, and a resurgent horst pushed back up inside the caldera. Once eruptions ceased, the loose pyroclastic material went first, leaving the more resistant lava flows and intrusions, so today's high points generally correspond to the volcano's internal conduits and stocks rather than to its original summit.",
    observation:
      "From the air the range is a roughly circular forested upland with several arcuate scarps around its margin — the surviving trace of the caldera rim. Scattered through it are a string of artificial lakes, reservoirs built in the mining era to drive water-powered machinery, which read from height as a set of small water surfaces linked by channels.",
    distinguish:
      "The Štiavnica Mountains and Poľana are both volcanic uplands of central Slovakia; the difference is preservation. Poľana's caldera is only about 6 km across but its rim is intact and reads instantly as a ring; the Štiavnica caldera is far larger and far more broken, and the ring has to be reassembled from arcuate scarps around the edge.",
    concept:
      "This is a good place to grasp that a volcano's landform outlives its activity by much less than one might think. Once eruptions stop, the cone is the first thing to go; what survives longest is the plumbing — the conduits and intrusions underground — because that rock cooled slowly, crystallised coarsely and resists erosion better. The harder the high point, the deeper it originally lay.",
    history:
      "Banská Štiavnica, within the range, grew from the Middle Ages on precious-metal mining, and the reservoirs and channels built to supply water power were major engineering works of their time; the historic town and the technical monuments around it are inscribed on the UNESCO World Heritage List.",
  },
  polana: {
    // 全六段 sources: 同中文侧。最高点 1458 m；约 13–15 Ma；中央破火山口直径约 6 km；「欧洲最大死火山之一」保留 one of；1981 PLA、1990 UNESCO 生物圈保护区。2026-09-13 首写。
    seeing:
      "Poľana is an extinct volcano whose highest point reaches 1,458 m. What repays attention is not the height but the shape: a caldera about 6 km across occupies the centre of the massif, its ring of rim ridges still complete, so an approach from any direction has to cross that ring first. It is commonly listed among the largest extinct volcanoes in Europe.",
    formation:
      "The massif was built by volcanic activity roughly 13 to 15 million years ago. Prolonged eruption raised a stratovolcanic cone whose centre collapsed late in its history to form the caldera; later erosion lowered the rim ridges and let a river cut a notch through the ring, which is how water now drains out of the caldera floor.",
    observation:
      "From the air Poľana is a nearly complete forested ring enclosing a floor a few hundred metres below the rim, with one conspicuous breach on one side — the drainage valley. That circular outline stands out sharply among the gently rolling uplands of central Slovakia and is one of the most immediately recognisable landforms in the country from altitude.",
    distinguish:
      "Poľana and the Štiavnica Mountains are both remnants of Miocene volcanoes, but Poľana keeps a complete caldera ring while the Štiavnica caldera is much larger and survives only as scattered arcuate scarps. Set against a folded, uplifted crest like the Low Tatras, Poľana's circular plan says at once that its origin was collapse rather than compression.",
    concept:
      "A caldera is not a crater. A crater is the opening at the top of a vent, typically a few hundred metres across; a caldera is a depression formed when the roof above an emptied magma chamber collapses as a whole, and can be kilometres or tens of kilometres wide. Scale and rim form tell them apart — a collapse margin is a ring of cliffs, an eruptive rim is a slope of accumulated ejecta.",
    history:
      "Grassland inside the ring and at the foot of the massif was long used for grazing, and the local timber buildings and shepherding traditions are widely recorded. The area became a protected landscape area in 1981 and was listed as a UNESCO Biosphere Reserve in 1990.",
  },
  vihorlat: {
    // 全六段 sources: 同中文侧。最高点 1076 m；原始山毛榉林为跨国系列世界遗产组成部分；Morské oko 为山崩堰塞湖。2026-09-13 首写。
    seeing:
      "The Vihorlat Mountains in eastern Slovakia are a volcanic upland whose highest point, Vihorlat, reaches 1,076 m. They rise abruptly out of the East Slovak Lowland with plains on every side, so although the summit is only just above a thousand metres, the relief looks substantial from below.",
    formation:
      "The massif is built of lava and pyroclastic material erupted in the late Miocene, later eroded down from its original cones to leave a number of rounded high points. Blocks have crept downslope over long periods, and one larger landslide dammed a valley, ponding the water that became Morské oko.",
    observation:
      "From the air Vihorlat is a dark green island of forest on the plain, its boundary with the surrounding farmland almost a hard edge. There is virtually no settlement inside the massif, only small villages in a few valleys; Morské oko appears as a small, darker patch of water in the forest.",
    distinguish:
      "Vihorlat and Poľana are both remnants of extinct volcanoes, but Poľana is defined by its complete caldera ring and Vihorlat has none. Compared with Poloniny to the north-east, that range is folded sandstone and shale — a wholly different lithology, and its form is a set of parallel long ridges.",
    concept:
      "This is a good place to understand a landslide-dammed lake: its basin was not excavated but created when an existing valley was blocked by a slide mass. Such lakes are usually shallow, take the shape of the former valley, and have limited lifespans — once the dam is cut through by downstream erosion, the water drains away.",
    history:
      "The primeval beech stands here are inscribed as part of the transnational serial World Heritage property 'Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe', and forestry and grazing traditions in the foothill villages are long recorded.",
  },
  poloniny: {
    // 全六段 sources: 同中文侧。1997-10-01 设园；园区最高点约 1208 m，在国土东北端国界交汇处，紧邻 1221 m 的 Kremenec 峰顶；Stužica 原始林为世界遗产组成部分。⚠️ 全篇不写任何邻国国名。2026-09-13 首写。
    seeing:
      "Poloniny lies at the far north-eastern end of Slovak territory, a folded upland of sandstone and shale. The park's highest ground reaches about 1,208 m at the meeting point of frontiers on that north-eastern tip, immediately below the 1,221 m summit of Kremenec. The name comes from the local term for the open meadows found on these summits.",
    formation:
      "The massif is built of thick alternating sandstone and shale, a sequence folded and thrust during the orogeny into a set of roughly parallel long ridges. Sandstone is hard and shale soft, so differential erosion has shaped the ridges into parallel rises with valleys following the softer beds — which is why the ridges and valleys read on a map as almost evenly spaced stripes.",
    observation:
      "From the air Poloniny is a near-continuous forest with its ridges aligned north-west to south-east and occasional patches of open meadow along the crests. Settlement is very sparse, and this is one of the least light-polluted areas in central Europe, which is most obvious from the window of a night flight.",
    distinguish:
      "Poloniny and Vihorlat are both in eastern Slovakia but differ entirely in origin: Vihorlat is a rounded, isolated volcanic remnant, Poloniny a folded sandstone-and-shale upland of parallel ridges. Against the Low Tatras, it has no crystalline core and no genuinely alpine meadow belt above the treeline — the meadows on its crests owe much to long-standing grazing and to soil conditions.",
    concept:
      "Here one can see clearly how differential erosion sets the trend and spacing of ridges: where a sequence alternates hard and soft beds and has been folded into a series of anticlines and synclines, ridges grow on the hard beds and valleys settle on the soft ones, so the grain of the terrain records the strike of the strata rather than the direction of flow.",
    history:
      "The open summit meadows were long used as summer pasture, and the timber church architecture of the foothill villages is widely recorded. The area was declared a national park in October 1997 and is Slovakia's easternmost; the Stužica primeval forest within it forms part of the transnational serial World Heritage property 'Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe'.",
  },
  "slovensky-kras": {
    // 全六段 sources: 同中文侧。约 440 km²，中欧面积最大喀斯特区；洞穴与竖井 1000–1100（写区间）；与阿格泰莱克喀斯特洞穴一并列入 UNESCO；2002-03-01 设园。2026-09-13 首写。
    seeing:
      "The Slovak Karst, in southern Slovakia, is a tabular karst region built of Mesozoic limestone covering about 440 km² — the largest karst area in central Europe. Its surface is not a set of ridges but a group of plateaus with flat tops and abrupt edges, separated from one another by deep valleys.",
    formation:
      "The limestone was laid down in Mesozoic seas, uplifted, and has been dissolving ever since. Surface water sinks quickly along joints, so the plateau tops carry few rivers and instead show sinkholes, dry valleys and limestone pavement, while underground a very dense system of caves and shafts has developed — counts range from about a thousand to eleven hundred depending on the source.",
    observation:
      "From the air the Slovak Karst is a few flat-topped plateaus divided by deep valleys, the tops a mixture of grassland and open woodland with a rim of pale rock walls. Conspicuous among them are the narrow valleys cut into the plateau edges; Zádielska tiesňava, seen from height, is no more than a thin slot at the margin of a plateau.",
    distinguish:
      "The Slovak Karst and Slovak Paradise are both karst plateaus; the difference is dissection. Slovak Paradise is cut to pieces by ravines and waterfalls and has much greater relief; the Slovak Karst keeps broader, more intact plateau surfaces. Across the frontier, the Aggtelek Karst is the other half of the same karst region, continuous with it in landform terms.",
    concept:
      "Plateau karst — planina in Slovak — and the more familiar tower karst are the same solution process under different conditions. Where limestone beds lie near horizontal, uplift is moderate and rainfall not extreme, solution works mainly downward, the surface stays a flat tableland and everything spectacular happens underground. Where the climate is hot and wet and uplift stronger, the surface itself is dissolved into towers and hollows.",
    history:
      "Caves here were surveyed from the nineteenth century onward and some were opened to visitors; the cave system is inscribed on the UNESCO World Heritage List together with the caves of the Aggtelek Karst across the frontier. The area was declared a national park in March 2002.",
  },
  "slovensky-raj": {
    // 全六段 sources: 同中文侧。国家公园约 197.6 km²，1988-01-18 设立；Prielom Hornádu 约 11.7 km 为园内最长；Dobšinská ľadová jaskyňa 2000 年作为世界遗产扩展项列入；「欧洲较大冰洞之一」只写 one of。2026-09-13 首写。
    seeing:
      "Slovak Paradise, in eastern Slovakia, is a karst plateau cut to pieces by deep valleys; the national park covers about 197.6 km². Its defining quality is that three kinds of terrain occur in the same upland: flat plateau surfaces, ravines and waterfalls cut into them, and caves beneath.",
    formation:
      "Once the limestone and dolomite tableland was uplifted, streams incised along its joints. Because limestone both dissolves and stands in vertical walls, what the streams cut was not a broad valley but a succession of narrow gates and waterfalls; some reaches are only metres wide, and the trails through them depend on ladders and walkways bolted to the rock.",
    observation:
      "From the air Slovak Paradise is a forested upland cut by a dense net of valleys, the lines thin and deep, visible from height only as dark seams in the forest. Along the northern margin, the Hornád gorge is the longest in the park at about 11.7 km, its channel swinging repeatedly across the valley floor.",
    distinguish:
      "Slovak Paradise and the Slovak Karst are both karst areas within the Slovak Ore Mountains; the difference is dissection — denser valley networks, greater drops and more waterfalls here, more intact plateau surfaces there. The ravines of Malá Fatra form the same way, but the valley network here is an order of magnitude larger.",
    concept:
      "An ice cave is not simply a cave that happens to hold ice: it needs a descending entrance so that cold winter air sinks in and stays, while summer air, being less dense, cannot get in — a structure known as a cold-air trap. Dobšinská ľadová jaskyňa is one of the larger ice caves in Europe, and its ice body accumulated in exactly this way.",
    history:
      "Caves in the park were surveyed from the nineteenth century, and Dobšinská ľadová jaskyňa has long been open to visitors; in 2000 it was added as an extension to the World Heritage property covering the caves of the Slovak and Aggtelek Karst. The national park was declared in January 1988.",
  },
  "muranska-planina": {
    // 全六段 sources: 同中文侧。属 Spišsko-gemerský kras；最高点 Kľak 1409 m；1997 年 10 月设园、1998-05-27 开园。园区面积各源不一（有把公顷写成平方公里的错值），不写面积。2026-09-13 首写。
    seeing:
      "Muránska planina, in central Slovakia, is a tabular karst plateau belonging to the Spiš–Gemer Karst, set between Brezno, Červená Skala, Muráň and Tisovec. Its highest point, Kľak, reaches 1,409 m, well above the karst tablelands to its south.",
    formation:
      "The plateau is built of Mesozoic limestone and dolomite, uplifted and long subject to solution, which has produced sinkholes, dry valleys and caves; rivers have cut its margins into cliffs, and isolated rock towers stand on several of the clifftops. Because the plateau surface lies higher than the karst tablelands to the south, its solution features are overprinted by the effects of frequent freeze–thaw in a colder climate.",
    observation:
      "From the air Muránska planina is a forested tableland of gentle summit relief ringed by cliffs. The easiest thing to pick out is an isolated limestone tower at the plateau edge, with the ruins of Muráň Castle standing on top of it. There is almost no river to be seen on the plateau surface.",
    distinguish:
      "Muránska planina and the Slovak Karst are both tabular karst, differing in altitude and climatic belt: Muránska planina stands several hundred metres higher, its surface close to the upper limit of forest, with freeze–thaw superimposed on solution; the Slovak Karst is lower, warmer and more open. Compared with Slovak Paradise, the valley network here is far sparser.",
    concept:
      "The same rock yields different landforms at different altitudes: high-lying limestone is not only dissolved by water but also subjected to repeated freezing and thawing, which breaks the rock apart along joints, so solution features are often buried under rockfall debris and hard to read. Deciding whether a landscape is karst therefore cannot rest on surface forms alone — hydrology is the better clue, and the absence of surface rivers is the one to look for.",
    history:
      "Muráň Castle on its rock tower at the plateau edge has long been the local landmark, and forestry and grazing on the plateau are long recorded. The area was declared a national park in October 1997 and formally opened in May the following year.",
  },
  "prielom-hornadu": {
    // 全六段 sources: 同中文侧。约 11.7 km，为斯洛伐克天堂国家公园内最长峡谷；栈道/梯子/铁链。「先成河」按 "generally read as" 表述。2026-09-13 首写。
    seeing:
      "The Hornád gorge was cut where the Hornád river slices across the northern margin of the Slovak Paradise karst plateau; at about 11.7 km it is the longest gorge in the national park. What makes it notable is that the river did not go around the plateau but straight through the middle of it.",
    formation:
      "A river that refuses to detour around an upland is generally read as antecedent: its course was fixed before the ground rose, and as uplift began the river held to that course and kept incising, sawing through the rock as it came up. The resistance of limestone lets the walls stand, so the gorge stays narrow and deep instead of widening as it deepens.",
    observation:
      "From the air the gorge is a dark thin seam along the northern edge of the plateau, the channel swinging repeatedly across its floor, with pale rock walls on the outside of each bend and gravel bars on the inside. The plateau surfaces on either side are flat and continuous, and the drop to the floor makes the seam look as though it had been cut with a blade.",
    distinguish:
      "The Hornád gorge differs from the ravines on the same plateau: those were dissolved and incised by small streams along joints, usually carry no permanent flow, and are only metres wide; here there is a real river with a stable channel and bars on the floor, and the scale is an order of magnitude larger. Against Zádielska tiesňava, that one is narrower and steeper but far shorter.",
    concept:
      "To judge whether a river is antecedent, look at its relation to the terrain: a channel that cuts across a rising ridge when easier routes exist on either side usually means the river came before the ridge. Conversely, a channel that follows structural lines or belts of soft rock is simply conforming to the terrain it found.",
    history:
      "The walkway system along the floor was built up through the twentieth century and remains in use, one of the park's principal visitor routes; the villages at either end of the gorge long depended chiefly on forestry.",
  },
  "zadielska-tiesnava": {
    // 全六段 sources: 同中文侧。谷长约 2200 m、深约 300 m（局部 400 m）、最窄约 10 m；属长约 3.8 km 的 Zádielska dolina；国家自然保护区。2026-09-13 首写。
    seeing:
      "Zádielska tiesňava is a deeply incised limestone ravine at the edge of a Slovak Karst plateau: about 2,200 m long, some 300 m deep and locally as much as 400 m, and at its narrowest only about 10 m wide on the floor. It is the tightest stretch of the roughly 3.8 km Zádielska dolina and one of the most representative ravines in Slovakia.",
    formation:
      "After the tableland was uplifted, a small stream kept dissolving and incising along joints in the limestone. Because limestone both dissolves and holds vertical walls, incision ran far faster than the walls could retreat, so the ravine stayed narrow and deep; the rock towers left standing inside it are the joint work of solution and collapse.",
    observation:
      "From the air Zádielska tiesňava is no more than a fine dark line cutting north into the plateau from its southern edge; beyond the mouth lie open lowland and farmland, clearly different in both elevation and colour. The towers inside are almost invisible from directly overhead and need an oblique angle to pick out.",
    distinguish:
      "Zádielska tiesňava and the Hornád gorge are both deep cuts into karst plateaus; the difference is discharge and scale. Here a small stream carries very little water year-round and can run dry, and the ravine is only a little over two kilometres long; the Hornád gorge has a real river and runs close to twelve.",
    concept:
      "The width of a ravine is set by the ratio of two rates: how fast it cuts down and how fast its walls retreat. Limestone dissolves quickly along joints yet the rock mass as a whole is strong, so incision far outpaces retreat and the cut stays narrow; in a rock that breaks down readily, such as shale, the same amount of incision would yield a wide, gentle valley.",
    history:
      "Settlement and grazing around the mouth of the valley are long recorded, and the ravine has been a well-known local natural feature since the nineteenth century; it is now a national nature reserve.",
  },
  "janosikove-diery": {
    // 全六段 sources: 同中文侧。Dolné diery / Horné diery / Nové diery / Tesná rizňa 四段，约二十处跌水，梯子与栈道。名字来源只写 "named after a figure in local legend"。2026-09-13 首写。
    seeing:
      "Jánošíkove diery, on the northern side of Malá Fatra, are a set of limestone ravines made up of the Lower, Upper and New diery and an extremely tight section called Tesná rizňa. There are about twenty waterfalls along the route, and most reaches can only be passed on ladders and walkways bolted to the rock. The name comes from a figure in local legend.",
    formation:
      "After Malá Fatra's limestone and dolomite beds were folded and uplifted, streams incised along joints and bedding planes. The ravines do not run straight but turn with the direction of the jointing, so the system as a whole is dendritic — the clearest difference between solutional ravines and an ordinary erosional valley.",
    observation:
      "From the air the group appears as several barely visible dark seams in the forest, converging northward on a single valley mouth. What can actually be identified from height is the open meadow at the mouth and the pale rock walls that rise abruptly on either side.",
    distinguish:
      "Jánošíkove diery and Zádielska tiesňava are both limestone ravines; the difference is complexity of form — Zádielska is a single cut, this is a set of interconnected branches. Against the Hornád gorge, there is no permanent river here, and flow varies sharply with rainfall.",
    concept:
      "The fact that ravines occur in groups tells you that solution followed a network of joints: the rock is cut by two or three intersecting sets of fractures, water sinks and dissolves along them, and the ravines inherit their directions, producing the regular zigzags and branchings visible in plan.",
    history:
      "Terchová at the valley mouth developed from the twentieth century as a base for hiking and climbing, and the ladders and walkways in the ravines were built and are maintained by local mountaineering organisations.",
  },
  "prielom-dunajca": {
    // 全六段 sources: 同中文侧。最险一段约 8 km；深切曲流；沿斯洛伐克与波兰交界。⚠️ 跨境只写交界、不涉主权。木筏漂流按客观事实简述。2026-09-13 首写。
    seeing:
      "The Dunajec Gorge was cut where the Dunajec slices through the limestone of the Pieniny, running along the Slovak–Polish frontier; its tightest stretch runs about 8 km. Its signature is the string of large bends the channel swings through inside the gorge, with near-vertical rock walls on either side.",
    formation:
      "The river had already developed a meandering course on gentle ground before the land rose; as uplift began it carried those bends downward with it, cutting them into the rock as what are called incised meanders. The strength of the limestone allows the outside of each bend to keep a sheer wall rather than collapsing to a slope.",
    observation:
      "From the air the gorge is a conspicuously sinuous deep seam through the mountains, and the shape of the bends reads best from altitude — a view hard to get from the ground. The outside of each bend is bare pale rock, the inside a gravel bar built by the river.",
    distinguish:
      "The Dunajec and Hornád gorges formed in much the same way, both rivers cutting across rising rock, but here the meanders are preserved far more completely, bend after bend. Against a solutional ravine like Zádielska, this was cut by a river with ample discharge and has a stable channel on its floor throughout.",
    concept:
      "Incised meanders are direct evidence of uplift: meanders form only where gradients are very low, so finding them carved into hard rock with walls hundreds of metres high means the ground was raised as a whole after the bends had formed, while the river simply kept to its original course and went on cutting down.",
    history:
      "The valley long served as a route between the mountain villages on either side, and raft trips down the river are long recorded and still run as a tourist activity. The limestone massifs flanking the gorge are protected by the national parks on their respective sides.",
  },
  "sulovske-skaly": {
    // 全六段 sources: 同中文侧。古近纪（始新世）Súľov conglomerate；1973 年国家自然保护区、约 5.4 km²；砾岩层局部厚达数百米；Gotická brána 高约 13 m。2026-09-13 首写。
    seeing:
      "The Súľov Rocks, in the Súľov Mountains of north-western Slovakia, are a group of towers, needles, windows and gates weathered out of conglomerate. This is not limestone karst but a Palaeogene conglomerate — older limestone fragments cemented together — and the forms it weathers into are quite unlike ordinary karst.",
    formation:
      "The conglomerate formed in a Palaeogene coastal setting: fragments of older limestone were transported, deposited and cemented into thick beds, locally several hundred metres thick. Cement and clasts resist erosion differently, so weathering works along the boundaries between them and along joints in the beds, breaking the rock into columns and needles with gates and windows hollowed out between them.",
    observation:
      "From the air the Súľov Rocks are a pale patch of stone in the forest, the towers standing in groups with dry slots between them. The easiest features to identify are the natural arches among them; Gotická brána is about 13 m high and reads from the side as a regular arched opening in the wall.",
    distinguish:
      "The difference from the Slovak Karst is lithology: conglomerate here, weathering into columns, needles, gates and windows with no organised cave system below; pure limestone there, with a flat surface and everything of interest underground. Compared with the sandstone rock towns of Czechia, the parent rock here is conglomerate rather than sandstone, and individual pebbles are plainly visible on the surfaces of the columns.",
    concept:
      "Conglomerate landforms show that form depends on a rock's internal structure and not only on its chemistry. The clasts in the Súľov conglomerate are limestone and chemically entirely soluble, but because the mass consists of pebbles of many sizes set in cement, water seeps away along grain boundaries rather than concentrating into conduits — so it develops no cave system and is instead taken apart into towers and columns.",
    history:
      "The ruins of the medieval Súľov castle stand on one of the towers; the area was declared a national nature reserve in 1973, covers about 5.4 km², and is one of the main hiking and climbing destinations in north-western Slovakia.",
  },
  "liptovska-kotlina": {
    // 全六段 sources: 同中文侧。瓦赫河上游山间构造盆地；Liptovská Mara 总库容约 3.605 亿 m³，斯洛伐克库容最大水库，属瓦赫河梯级。⚠️ 蓄水淹没村落只作工程事实简述。2026-09-13 首写。
    seeing:
      "The Liptov Basin lies on the upper Váh, with the Western Tatras and the Chočské vrchy to the north and the Low Tatras to the south. Its floor is flat and open and the ranges on both sides rise abruptly from it, which makes it one of the easiest basins in the country to recognise for what it is from the air.",
    formation:
      "The basin is tectonic in origin: the surrounding blocks were raised during the orogeny while this block subsided relatively, leaving a hollow enclosed by mountains that was then filled with gravel and sand brought down by the Váh and its tributaries. The sedimentary fill on the floor is consequently thick, and groundwater resources are concentrated here.",
    observation:
      "From the air the basin is a pale expanse of flat ground ringed by ridges, with a long narrow water surface across the middle — the Liptovská Mara reservoir. Liptovský Mikuláš lies at its eastern end and Ružomberok to the west, with continuous farmland and pasture between the two towns.",
    distinguish:
      "The Liptov Basin meets the Low Tatras to the south and the Western Tatras to the north along clear breaks of slope. Like the Turiec basin it is an intermontane basin along the Váh; the difference is scale and position — the Liptov Basin is further upstream and the ranges flanking it are higher.",
    concept:
      "An intermontane basin is not excavated by erosion but is a zone of relative subsidence produced by tectonics. Its floor is usually a thick body of river sediment, which is why such basins, rather than the ridges, tend to hold a mountain region's farmland, settlements and roads — population distribution in the mountains is often decided by the basins.",
    history:
      "The basin has been a regional farming and transport corridor since the Middle Ages. The Liptovská Mara reservoir was completed in the 1970s as part of the Váh cascade; filling it flooded a number of villages on the basin floor. Its total volume of about 360.5 million cubic metres makes it Slovakia's largest reservoir by volume.",
  },
  "zahorska-nizina": {
    // 全六段 sources: 同中文侧。小喀尔巴阡以西、摩拉瓦河以东；斯洛伐克唯一大面积内陆风成沙丘区；沙源为末次冰期河流沉积；沙丘高出周围 10–15 m；Šranecké piesky 保护区约 10 km²；欧盟 LIFE 项目。2026-09-13 首写。
    seeing:
      "The Záhorie Lowland lies west of the Little Carpathians and east of the Morava, a low plain barely one or two hundred metres above sea level. What makes it unusual in Slovakia is its inland dunes — continuous fields of sand ridges standing locally as much as 20 m above the surrounding ground, among the larger inland dune complexes in central Europe.",
    formation:
      "The sand did not come from a desert but from rivers: during the last glacial period the bed sediments of the Morava and its tributary the Dyje lay exposed under sparse vegetation, and strong winds lifted the finer sand and piled it downwind into dunes. Vegetation returned after the glacial period and fixed most of the dunes, leaving bare sand exposed in only a few places.",
    observation:
      "From the air the Záhorie Lowland is flat country of pine plantation and farmland, the dunes showing as low pale belts within the forest, aligned in much the same direction — a record of the prevailing wind at the time. The Morava floodplain with its oxbows lies to the west, the forest belt of the Little Carpathians to the east.",
    distinguish:
      "These dunes resemble true desert dunes in outline but differ in origin and present state: the sand here was reworked by wind from glacial-age river deposits and is now essentially fixed by vegetation and no longer moving, whereas desert dunes lie where rainfall is too low for vegetation to hold the surface and the sand keeps migrating.",
    concept:
      "Inland dunes are a clue to past climate. Extensive wind-blown dune fields require three conditions at once: an ample supply of loose sand, winds strong enough to move it, and vegetation too sparse to hold the surface. That the area is now well vegetated and its dunes immobile means these dunes record a climatic phase quite unlike the present one.",
    history:
      "The pine woods here were long used for forestry and resin collection; part of the dune country escaped cultivation because it served for a long period as a military training area, which incidentally preserved bare-sand habitat, later managed for restoration under an EU LIFE project. The Šranecké piesky protected area covers about 10 km².",
  },
  "podunajska-nizina": {
    // 全六段 sources: 同中文侧。由 Podunajská rovina（极平）与 Podunajská pahorkatina（起伏）两部分组成；潘诺尼亚盆地北缘；斯洛伐克主要农业区。未取到面积与产量数字，不写。2026-09-13 首写。
    seeing:
      "The Danubian Lowland occupies south-western Slovakia, the northern edge of the Pannonian Basin reaching into the country. It falls into two halves: the southern half along the Danube is exceptionally flat and is called the Danubian Plain, while the northern half against the mountains is a rolling hill country. It is Slovakia's principal agricultural region.",
    formation:
      "The lowland is a zone of tectonic subsidence: the Carpathian massifs around it were raised during the orogeny while this block sank relatively, and it was then filled layer by layer with gravel, sand and fines brought down by the Danube and its tributaries. The nearer the Danube, the younger and finer the deposits and the flatter the ground.",
    observation:
      "From the air the Danubian Lowland is an unbroken expanse of ground divided into a grid of fields, with no obvious relief and only the lines of channels and irrigation ditches to break it. Its northern margin meets the forest belts of the Little Carpathians and Tribeč along a hard edge; its southern margin is the web of water woven by the Danube and its distributaries.",
    distinguish:
      "The Danubian and East Slovak Lowlands are both lowlands on the northern rim of the Pannonian Basin; the difference is position and drainage. This one is dominated by the Danube system, flatter and larger; the East Slovak Lowland is dominated by the Bodrog and its neighbours and hemmed in more closely by mountains. It continues into the Little Hungarian Plain, geomorphologically one lowland divided by a frontier.",
    concept:
      "'Plain' and 'hill country' belong to two different levels of landform classification, though they are often treated as one. The Danubian Lowland contains both, which shows that within a single subsiding basin the ground nearest the trunk channel is levelled by the youngest deposits while the margins away from it keep the relief of an earlier surface. The test is the age and thickness of the sediment, not just the gradient at the surface.",
    history:
      "Farming here is long recorded and the region is Slovakia's main producer of grain and vegetables; the river ports and ferry crossings along the Danube have long been key points of regional transport.",
  },
  "vychodoslovenska-nizina": {
    // 全六段 sources: 同中文侧。潘诺尼亚盆地北缘；Bodrog/Latorica/Uh/Hornád 下游冲积物；斯洛伐克最低点约 94 m 在其东南角博德罗格河畔（各源多写 94 m，无大地测量一手公告，写「约」）。零争议：不写任何邻国国名。2026-09-13 首写。
    seeing:
      "The East Slovak Lowland lies in the south-east of the country, a low plain half-enclosed by mountains and likewise part of the northern rim of the Pannonian Basin. Slovakia's lowest point is in its south-eastern corner on the bank of the Bodrog, at about 94 m above sea level.",
    formation:
      "The lowland is also the product of tectonic subsidence, filled by alluvium from the Bodrog, the Latorica, the Uh, the Laborec and the Ondava. Because the mountains enclose it fairly tightly and its outlet is narrow, large areas here historically stood under water as marshland, and only long programmes of drainage turned them into the farmland of today.",
    observation:
      "From the air the East Slovak Lowland is flat farmland with sinuous channels and strings of oxbows, and a regular grid of drainage ditches superimposed on the natural drainage — the coexistence of these two systems is the easiest way to recognise it. The forested outlines of volcanic uplands such as Vihorlat stand to the north and east.",
    distinguish:
      "The East Slovak and Danubian Lowlands are both on the northern rim of the Pannonian Basin; the difference is enclosure. This one is hemmed in on three sides with poor drainage and was historically dominated by marsh; the Danubian Lowland is far more open and Danube-dominated. Compared with an intermontane basin such as Liptov, it is on a much larger scale and is not pinched between high ranges.",
    concept:
      "A lowland is not automatically good farmland. Low-lying ground with poor drainage tends, before artificial drainage, to be marsh and seasonal floodland; the neat fields visible today are a product of the drainage system. A map of the drainage shows this: natural channels wander irregularly, artificial ditches run straight and in grids.",
    history:
      "Drainage and embankment works here were carried out progressively from the nineteenth century, converting large tracts of marsh to farmland; viticulture along the hill margins in the south-eastern corner is long recorded.",
  },
  "vah-river": {
    // 全六段 sources: 同中文侧。约 403 km，斯洛伐克最长；两源 Biely Váh（高塔特拉 Kriváň 一带）/ Čierny Váh（低塔特拉 Kráľova hoľa 一带）；科马尔诺入多瑙河；沿河称 Považie；干流梯级水库群（级数与装机无一手来源，不写数字）。2026-09-13 首写。
    seeing:
      "The Váh is Slovakia's longest river, running about 403 km. It has two headstreams: the Biely Váh rises near Kriváň in the High Tatras and the Čierny Váh near Kráľova hoľa in the Low Tatras; once joined, the river runs south-west and finally enters the Danube at Komárno. The country along it has a name of its own, Považie.",
    formation:
      "Its course is set by structure: upstream it threads a string of intermontane basins such as Liptov, in its middle course it follows the longitudinal valleys between ranges, and once it reaches the Danubian Lowland the gradient collapses and deposition takes over. So the same river is erosional upstream and depositional downstream, and the whole transition can be read along four hundred kilometres.",
    observation:
      "From the air the upper Váh is a pale braided channel in intermontane basins, the middle course is cut into a succession of still reservoir surfaces, and the lower course meanders across the plain with wide floodplain tracts. The reservoir reaches have irregular water outlines and conspicuous dam lines, and are immediately distinguishable from the natural stretches.",
    distinguish:
      "The difference between the Váh and the Danube in Slovakia is not only size: the Danube is depositional and anabranching for virtually its whole Slovak course, while the Váh is erosional upstream and depositional downstream and shows both states. Compared with the Hornád, the Váh runs south-west into the Danube while the Hornád flows south out of the country.",
    concept:
      "The upper and lower reaches of a river are really two different geomorphic regimes: upstream the gradient is steep, the flow has capacity to spare for transport and incision, and the valley is excavated; downstream the gradient is low, transport capacity falls short, sediment accumulates, and the channel spends its energy by swinging sideways. To tell which regime a reach is in, look at whether the channel is set into a valley or spread across its own deposits.",
    history:
      "The Váh valley has been the main transport corridor of north-western Slovakia since the Middle Ages, and the towns and castles along it mostly stand where the valley narrows; a cascade of reservoirs was built on the main stem during the twentieth century for power generation and flood control.",
  },
  "danube-slovakia": {
    // 全六段 sources: 同中文侧。经 Devínska brána 进入斯洛伐克，坡度骤减、河道分汊；德文门为阿尔卑斯山系与喀尔巴阡山系之间的构造缺口。境内河长与流量无一手来源，不写数字。零争议：不描述边界线。2026-09-13 首写。
    seeing:
      "The Danube enters Slovakia upstream of Bratislava through the Devín Gate, where the valley narrows into a natural gateway between massifs on either side. Beyond that gate the river's gradient falls away sharply and its channel begins to divide, spreading across the Danubian Lowland as a tract of anabranches and river islands.",
    formation:
      "Structurally the Devín Gate is the gap between the Alpine and the Carpathian systems, and the Danube passes through the mountain belt along exactly that gap. Losing gradient once clear of the mountains, the river loses transport capacity, and the gravel and sand it carries begin to accumulate on the bed, so the channel divides and shifts repeatedly and has built gravel deposits tens of metres thick.",
    observation:
      "From the air the Devín Gate is an unmistakable notch in the mountains, with the water surface markedly different in width inside and outside it. Below the gate the channel splits into a main stem and several anabranches with floodplain forest and sand bars between them; farther downstream, embankments and navigation works have regularised the channel, so artificial straight lines and natural bends run side by side.",
    distinguish:
      "This entry and the library's other Danube entries cover different reaches of one river: the Austrian reach alternates between mountains and basins, the reach around Visegrád in Hungary is a gorge where the river cuts across mountains, and the Hungarian reach is the lower course out on the great plain. What characterises the Slovak reach is the transitional state of a river just out of the mountains and in the act of dividing.",
    concept:
      "The point where a river leaves the mountains is a critical geomorphic threshold: gradient drops within a short distance, transport capacity falls with it, and the coarsest material drops out first. So the coarsest gravel lies near the mountain front, with grain size fining steadily downstream — a gradient that can be read simply by picking up stones along the river.",
    history:
      "The Devín Gate has been a route node since prehistory, and the crag inside it carries long-recorded castle remains; the Danube has long been the principal waterway here, and its river ports and crossings are key points of regional transport.",
  },
  "zitny-ostrov": {
    // 全六段 sources: 同中文侧。约 1900 km²、长约 84 km、宽 15–30 km，布拉迪斯拉发至科马尔诺；夹在多瑙河、小多瑙河与瓦赫河之间；欧洲面积最大的河流岛；岛下砾石层为中欧重要地下水储集体。2026-09-13 首写。
    seeing:
      "Žitný ostrov is the tract of land enclosed between the Danube, its distributary the Little Danube, and the Váh: some 84 km long and 15 to 30 km wide, reaching from Bratislava to Komárno; sources differ on its area, the two figures commonly given being about 1,600 and about 1,900 km². By area it is the largest river island in Europe.",
    formation:
      "Its existence follows directly from the Danube's division below the mountains: main stem and distributary each swung and shifted, and the whole ground caught between them became an island. Beneath it lie thick river gravels and sands, porous and highly permeable, which makes it an important groundwater reservoir for central Europe — the water here is not at the surface but under it.",
    observation:
      "From the air Žitný ostrov looks nothing like an island, simply flat farmland enclosed by watercourses, because it is too large to read as one: only by following the two channels along its edges can it be confirmed as ground surrounded by water. The fields are regular, villages follow the roads, and there is virtually no relief.",
    distinguish:
      "Žitný ostrov and Szigetköz across the Danube are river-island tracts on the two sides of the same reach and share an origin; they differ in scale and internal condition — Žitný ostrov is much larger and its surface largely reworked for agriculture, while Szigetköz keeps a more complete network of anabranches and floodplain forest. The difference from a delta is that an island of this kind is pinched between two channels rather than built out where a river meets the sea.",
    concept:
      "The term 'river island' can mislead: Žitný ostrov is not a bar in midstream but an entire plain caught between a main stem and a distributary. To decide whether a piece of ground is an interfluve island of this kind, look at its boundaries — distributaries of the same river on every side, rather than sea or lake.",
    history:
      "Farming on the island is long recorded, and the 'rye' in its name records exactly its standing as a grain district; the groundwater beneath it is an important regional source of drinking water, which is why agricultural chemicals and industrial siting on the island have long been regulated.",
  },
  "strbske-pleso": {
    // 全六段 sources: 同中文侧。湖面 1346 m、约 19.8 ha、最深约 20 m；高塔特拉斯洛伐克一侧面积第二大的冰蚀湖；湖畔聚落为度假与冬季运动中心。成因按「冰碛堰塞」表述（tarn 一词在来源里泛指山地湖）。2026-09-13 首写。
    seeing:
      "Štrbské pleso lies on the southern slope of the High Tatras at 1,346 m, covering about 19.8 hectares and reaching some 26 m deep — the second largest glacial lake by area on the Slovak side of the High Tatras. The settlement of the same name on its shore is one of the main resort and winter-sports centres of the Tatra region.",
    formation:
      "The basin is not a cirque but a hollow dammed by glacial moraine. An ice-age glacier came down from the range, halted at this altitude and left an arcuate ridge of deposits; after the ice withdrew, the depression behind that ridge filled with water — which is why one side of the lake is a gentle moraine bank and the other a mountainside.",
    observation:
      "From the air it is a nearly circular dark water surface on the southern slope of the Tatras, its northern shore hard against forest and mountain, its southern shore given over to the settlement and the railway. The lake sits right at the upper edge of the forest belt, with the rock walls of the main High Tatras crest visible above it.",
    distinguish:
      "Štrbské pleso differs from the true cirque lakes higher in the Tatras: those lie on the floors of circular cirques enclosed on three sides by cliffs and are generally higher and deeper; this one was dammed by moraine, so it is lower, rounder and shallower. Compared with Morské oko in the Vihorlat, that lake was dammed by a landslide, not by ice.",
    concept:
      "Mountain lakes have several origins, and shape and position hint at which: a lake on the floor of a circular hollow with cliffs on three sides is a cirque lake; one at a valley mouth with an arcuate ridge on one side is moraine-dammed; one below a slope whose outline follows a former valley is landslide-dammed. Working out the origin needs no diving — the surrounding landforms are enough.",
    history:
      "The lakeside settlement developed from the late nineteenth century as a climate-cure and winter-sports resort, and a narrow-gauge electric railway ties it to the towns below the range; it was among the first resorts in the Tatras to be reached by rail.",
  },
  "morske-oko": {
    // 全六段 sources: 同中文侧。湖面 618 m、约 13.8 ha（原约 7 ha，水位抬高约 5 m）、最长约 750 m、最宽约 312 m、最深约 25 m；斯洛伐克面积最大的非喀斯特天然湖、按面积全国第三大天然湖；1984 年保护区、现国家自然保护区。2026-09-13 首写。
    seeing:
      "Morské oko lies deep in the forest of the Vihorlat Mountains at 618 m, covering about 13.8 hectares, some 750 m at its longest and 312 m at its widest, and reaching about 25 m deep. It is the largest natural lake in Slovakia of non-karst origin and, by area, the third largest natural lake in the country.",
    formation:
      "The basin was dammed by a landslide: volcanic rock on the Vihorlat slopes crept downhill, and one larger collapse blocked a valley, holding back the water that became the lake. A dam built at the outlet in the 1880s raised the water level by about 5 m, enlarging the lake to today's roughly 13.8 hectares.",
    observation:
      "From the air it is a darker patch of water in continuous forest, its outline following the former valley, with steep slope at one end and the collapse mass blocking the valley mouth at the other. There is almost no building around it, which is the direct clue from altitude that this is a natural lake and not a reservoir — reservoirs generally show a straight dam line and access roads.",
    distinguish:
      "Morské oko has a wholly different origin from the glacial lakes of the Tatras: those were excavated by ice or dammed by moraine and lie in the alpine belt, while this one was dammed by a landslide and lies within the forest belt. The difference from an artificial reservoir is the shape of the shoreline — a landslide-dammed lake follows the curves of the former valley, a reservoir has one straight stretch where the dam is.",
    concept:
      "The lifespan of a landslide-dammed lake depends on the dam: collapse debris is usually loose, and once downstream flow cuts through it the lake drains. Those that persist generally have a dam thick enough, and an outlet controlled by stable rock, that its very survival testifies to how firm the blocking mass is.",
    history:
      "The lake has been a well-known local natural feature since the nineteenth century; it was declared a protected area in 1984 and is now a national nature reserve, and the primeval beech forest around it falls within the area of the transnational serial World Heritage property.",
  },
};
