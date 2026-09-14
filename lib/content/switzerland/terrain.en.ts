import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  "bernese-alps": {
    // seeing sources: 芬斯特拉尔峰 4274 米、少女峰车站 3454 米（1912 年通车）、艾格峰北壁 1938 年首登（Heckmair / Harrer / Kasparek / Vörg）、少女峰-阿莱奇 2001 年列入 UNESCO 并于 2007 年扩界（官方名 Swiss Alps Jungfrau-Aletsch，阿尔卑斯第一处世界自然遗产）：均核实无误，2026-09-09 核，本轮无需改动。
    //   https://jungfrauregion.swiss/en/destination/sustainability/unesco-world-heritage-site/unesco-world-heritage-declared.html
    seeing:
      "The Bernese Alps, in west-central Switzerland, are the most heavily glaciated part of the whole Alps. On the north side the Eiger, Mönch and Jungfrau stand in a row directly above the green valleys below; further in are the Finsteraarhorn (4,274 m, the highest peak of the range) and a set of large glaciers. The Jungfrau–Aletsch region was the first natural World Heritage Site in the Alps.",
    formation:
      "The Alps were squeezed up by the collision of the African and European plates: from about 35 to 5 million years ago, the sedimentary rock between the two land masses was scraped off in slices and thrust northward, one lying flat on top of another, forming \"nappes\" (recumbent folds). The Bernese Alps' framework is a stack of such nappes, plus older crystalline rock exposed beneath. In the Quaternary ice ages, huge glaciers cut deep along the valleys, sharpening the peaks and gouging the valleys into U-shapes, leaving stepped hanging valleys and waterfalls after the ice retreated.",
    observation:
      "From the air the Bernese Alps are an east-west, permanently snow-capped high wall: the northern edge is steep, a row of grey-black rock faces (the Eiger north face especially prominent) topped by white peaks; inside the range are large snowfields and glaciers reaching out in all directions, the Aletsch to the south the longest. The green deep valleys at the foot hold villages and stepped meadows.",
    distinguish:
      "The Bernese Alps and the Pennine Alps to the south are both part of the high Swiss Alps, but the Bernese range is known for \"big snowfields plus long glaciers\" and has relatively few 4,000 m peaks; the Pennine Alps hold most of the Alps' 4,000 m summits. Compared with the Himalaya, the Alps are far lower and far younger, but the marks of glaciation are just as textbook.",
    concept:
      "The Bernese Alps are a case study in nappe tectonics: in mountain-building, rock layers are not simply crumpled — they are scraped off along near-horizontal faults in whole sheets, pushed flat tens of kilometres, and stacked on top of other layers. Many of the mountains you see were \"carried in\" this way. To recognise a nappe, look at whether the rock layers in the massif are inverted over a wide area, or old rock lies on young. A common misconception is that mountain-building just means squeezing rock into upright folds.",
    history:
      "Jungfraujoch station (3,454 m) below the Jungfrau is the highest railway station in Europe, opened in 1912 and marketed as the \"Top of Europe\". The Eiger north face was first climbed in 1938, after several fatal attempts, and remains a famous problem in mountaineering history. The whole Jungfrau–Aletsch region was inscribed as a World Heritage Site in 2001 and extended in 2007.",
  },

  "pennine-alps": {
    // seeing sources: UIAA 官方 4000 米峰名录为 82 座（级别 2，https://www.theuiaa.org/4000-alps/），正文「约 80 座」可接受；杜富尔峰 4634 米 / 瑞士最高点 / 阿尔卑斯第二高峰、戈尔内格拉特铁路 1898 年通车均核实无误（3 级交叉印证）。2026-09-09 核，本轮无需改动。跨境按「瑞士与意大利交界」中性表述。
    seeing:
      "The Pennine Alps run along the border between Switzerland and Italy and are the stretch of the Alps with the densest concentration of 4,000 m peaks — most of the Alps' roughly 80 summits over 4,000 m are here. Among them, the Dufourspitze, the main peak of the Monte Rosa massif, is 4,634 m — the highest point in Switzerland and the second-highest in the Alps after Mont Blanc. The Matterhorn is also on this range (given its own entry).",
    formation:
      "The rock of the Pennine Alps belongs to the \"Penninic nappes\" — the slices of rock pushed furthest north during Alpine mountain-building, mostly metamorphosed marine sediments and fragments of oceanic crust (which represent an ocean that once existed between the plates and later closed). After these slices were stacked and uplifted, glaciers strongly carved them into a set of sharp rock peaks, deep cirques and long glaciers. The northern valley (the Rhône valley) is one of the driest places in the Alps, shut off from moisture by the high mountains.",
    observation:
      "From the air the Pennine Alps are a high mountain region packed with sharp peaks, glaciers and deep valleys, the crest running roughly east-west as the Swiss-Italian border. The northern side drops abruptly to the dead-straight Rhône valley (towns, vineyards and industry on the floor); the southern side descends toward Italy. Valley villages such as Zermatt and Saas-Fee sit at the heads of the deep valleys.",
    distinguish:
      "The Pennine Alps versus the Bernese Alps: the Pennine range has many 4,000 m peaks with sharp rock summits and glaciers \"hanging\" on steep faces; the Bernese range has big snowfields and long glaciers. Between them lies the Rhône valley, a great fault-like structural trough.",
    concept:
      "The Pennine Alps are a case study in evidence of a closed ocean: some of the rock here (ophiolite, deep-sea sediment) formed on an ocean floor, yet now sits on 4,000 m peaks — showing that an ocean once lay between the two continents, and its crust was scraped off and jammed into the mountains during the collision. To recognise such a \"suture zone\", look for marine rock and oceanic-crust fragments caught in a continent-continent collision belt. A common misconception is that all rock on high mountains is continental rock.",
    history:
      "The high peaks of the Pennine Alps were climbed one by one in the mid-19th-century \"golden age of alpinism\". Zermatt is a car-free mountain resort, and the Gornergrat railway, opened in 1898, was one of the first electrified rack railways in Europe. Vineyards in the Rhône valley go back to Roman times.",
  },

  "matterhorn": {
    seeing:
      "The Matterhorn (Italian: Cervino; French: Cervin) is 4,478 m high, standing on the border between Switzerland and Italy — the most recognisable mountain in the Alps, a near-isolated rock pyramid steep on all four faces. Its outline is printed on Swiss chocolate wrappers and countless postcards, and has become almost a symbol of the Alps.",
    // formation sources: 峰顶岩石归属：当特布朗什岩席（Dent Blanche nappe），属奥地利阿尔卑斯推覆体，源自阿普利亚（亚德里亚）微板块 —— 该微板块在阿尔卑斯造山之前已从非洲大陆边缘裂离。3 级来源交叉印证（英文维基自身亦注明「非洲之峰」是流行化说法），2026-09-09 核。**「峰顶是非洲板块」这个说法流传极广，是典型的「听起来很有画面感所以没人去查」**。
    //   https://en.wikipedia.org/wiki/Matterhorn
    //   https://en.wikipedia.org/wiki/Austroalpine
    //   高度 4478 米、意大利语 Cervino / 法语 Cervin、1865 年 Whymper 首登（七人四死）均核实无误；跨境按「瑞士与意大利交界」中性表述，不涉主权。
    formation:
      "The Matterhorn is a \"horn\": an originally rounded mountain into which glaciers gouged cirques on the shaded sides from three or four directions, the cirque back walls retreating inward until they met in the centre, whittling the mountain into a sharp pyramid whose faces are the cirque walls. Its rock is also unusual — the summit block belongs to the Dent Blanche nappe and comes from the Apulian (or Adriatic) microplate, a separate block that had already rifted away from the African continental margin before Alpine mountain-building began. Nappe thrusting lifted it and set it on rock from the European plate below, with a clear boundary between them.",
    observation:
      "From the air the Matterhorn is a dark four-sided rock pyramid at the head of the Zermatt valley, its four ridges (edges) pointing roughly north-east, south-east, south-west and north-west, the four faces between them; the north and east faces are permanently shaded and iced. Around its foot is a ring of glaciers and scree, and below that the town of Zermatt.",
    distinguish:
      "The Matterhorn and Mount Fuji are both highly recognisable isolated peaks, but Fuji is a symmetrical cone built by volcanic accumulation; the Matterhorn is a horn of hard rock \"gnawed\" out from four sides by glaciers — asymmetrical, with sheer faces. The Alps have several famous horns (the Grossglockner, for one), and the Matterhorn is the most photogenic because it is so isolated and steep on every side.",
    concept:
      "The Matterhorn is a case study in a horn: to tell whether a mountain is a horn, look at whether it is made of several back-to-back cirque walls meeting at a point, with sharp ridges and each face corresponding to a cirque. It is a member of the same family of glacial erosion landforms as the arête (the narrow ridge between two cirques) and the tarn (cirque lake). A common misconception is to take a horn for a volcano or a fault block.",
    history:
      "The Matterhorn was first climbed in 1865 by a party led by Edward Whymper (from the Swiss side); on the descent the rope broke and four of the seven fell to their deaths, a tragedy that made the Matterhorn and this first ascent known worldwide. Today it is the heart of Zermatt's tourism and a classic goal for mountaineers.",
  },

  "rhaetian-alps": {
    // seeing sources: 伯尔尼纳峰高程：瑞士国家地图（swisstopo Landeskarte 1:25,000 图幅 1277）标 4048 米，精测 4048.6 米；瑞士国家旅游局写 4049 米。**两者是同一测量值的不同取整，不是矛盾**，正文保留 4049 米。2026-09-09 核。
    //   https://www.myswitzerland.com/en-ca/destinations/piz-bernina-4049m-asl/
    //   圣莫里茨 1928 / 1948 两届冬奥会、雷蒂亚铁路阿尔布拉线与伯尔尼纳线 2008 年列入 UNESCO（官方名 Rhaetian Railway in the Albula / Bernina Landscapes）均核实无误（1 级 https://whc.unesco.org/en/list/1276/ ）。
    seeing:
      "The Rhaetian Alps (also called the Bernina range), in the canton of Graubünden in south-eastern Switzerland near Italy, contain Piz Bernina — 4,049 m, the only 4,000 m peak in the whole Eastern Alps and the easternmost 4,000er in the Alps. East of here the Alps have no mountains this high. The range holds several glaciers, and below it are the Engadine valley and high resorts such as St Moritz.",
    formation:
      "The rock of the Rhaetian Alps belongs to the \"Austroalpine nappes\" — the slices pushed to the very top of the stack during mountain-building, lying over the Penninic nappes, mostly crystalline and metamorphic rock. The rock around Piz Bernina is fairly hard and erosion-resistant, and its south-easterly position makes it relatively dry with less snow, so it can keep this height and sharp form. Quaternary glaciers carved it too, into cirques, arêtes and horns.",
    observation:
      "From the air the Rhaetian Alps are a small patch of the Eastern Alps that is unusually high and white, with glaciers hanging between Piz Bernina and the snow peaks beside it; on the north side of the range is the broad, open, pine-forested Engadine valley (an inner-alpine climate, dry and sunny). A railway (the Rhaetian Railway) spirals up out of the valley and crosses the Bernina Pass.",
    distinguish:
      "The Rhaetian Alps, like the Pennine and Bernese Alps, are part of the high Swiss Alps, but they stand alone in the Eastern Alps (where most mountains are only two or three thousand metres), so they stand out sharply; and they belong to the \"Austroalpine nappes\", a higher structural level than the high mountains to the west.",
    concept:
      "The Rhaetian Alps are a case study in the nappe stacking of the Alps: the Alpine rock slices are like a stack of upturned plates, from bottom to top roughly \"external crystalline — Penninic — Austroalpine\", the higher ones pushed the furthest. Piz Bernina is in the top set. To read the structural level, look at the rock type and what it lies on. A common misconception is that the Alpine strata are simply arranged old-to-young upward.",
    history:
      "St Moritz is one of the birthplaces of modern alpine winter tourism, host of the 1928 and 1948 Winter Olympics. The Albula and Bernina lines of the Rhaetian Railway crossing the Rhaetian Alps — with their spiral tunnels, viaducts and the way they cross high mountains without a rack — were inscribed as a World Heritage Site in 2008.",
  },

  "gotthard-massif": {
    // seeing sources: 圣哥达基线隧道 57 公里、2016 年通车属广泛公认的工程地理事实，多方独立信源一致；圣哥达作为莱茵河 / 罗讷河 / 罗伊斯河 / 提契诺河分水枢纽的描述核实一致。2026-09-09 核，本轮无需改动。
    seeing:
      "The Gotthard Massif, right in the centre of Switzerland, is the \"water-parting hub\" of Europe: the Rhine, the Rhône, the Reuss and the Ticino all rise around it and then flow to the North Sea, the Mediterranean and the Adriatic. It is not the highest of mountains, but because it sits at the throat of north-south travel, the Gotthard Pass has been one of the most important routes across the Alps since the Middle Ages.",
    formation:
      "The Gotthard Massif is a \"crystalline massif\" — a block of ancient granite and gneiss lifted and pushed up as a whole during Alpine mountain-building. Such blocks of old hard rock are strung out along the \"external\" belt of the Alps (also Mont Blanc, the Aar Massif and others). It happens to lie where the main crest of the Alps meets the boundaries of several major river basins, so it forms a watershed. In the ice ages glaciers flowed out from here in different directions.",
    observation:
      "From the air the Gotthard Massif is a rolling stretch of high mountains in the middle of the Alps, with no especially prominent peaks, but with valleys radiating out from it in several directions — north the Reuss valley (with the famous Schöllenen Gorge and \"Devil's Bridge\"), south-west the head of the Rhône valley, east one headwater of the Rhine, south the Ticino valley. The pass area is a place dense with roads, railways and tunnel portals.",
    distinguish:
      "The Gotthard Massif differs from other stretches of the high Alps not in altitude or form but in its role as a \"water-parting hub\" — where a raindrop falls decides which sea it ends up in. Such a \"three-seas divide point\" is rare in Europe.",
    concept:
      "The Gotthard Massif is a case study in watersheds and routes: the main crest of a mountain range is both the divide between river systems and a barrier to travel; and a low col (pass) on the divide becomes a natural route across the mountains, fought over by armies and used by trade routes through history. To judge a pass's importance, look at whether the valleys on both sides lead to prosperous regions and whether there is a lower alternative route. A common misconception is that the highest mountain must be the key geographic node.",
    history:
      "The Gotthard Pass was opened around the early 13th century when the Schöllenen Gorge was bridged, and thereafter became a key north-south route within the Holy Roman Empire, with a bearing on the early alliances of the Swiss cantons. From the 19th century road and rail tunnels were built here; the Gotthard Base Tunnel, opened in 2016, is 57 km long and one of the longest rail tunnels in the world.",
  },

  "jura-mountains": {
    // seeing sources: 滕德山 1679 米（3 级）；「侏罗纪」得名于汝拉山为地学界公认典故；拉绍德封 / 力洛克钟表城市规划 2009 年列入 UNESCO。2026-09-09 核，本轮无需改动。
    seeing:
      "The Jura Mountains run in an arc along Switzerland's north-western border (and into France) — a set of parallel ridges of moderate height, covered in forest and pasture, the highest (Mont Tendre, on the Swiss side) only 1,679 m. They are far lower and gentler than the Alps, the \"local mountains\" where the Swiss go walking and skiing at weekends. The geological period \"Jurassic\" is named after the limestone here.",
    formation:
      "The Jura Mountains were made by the \"aftershock\" of Alpine mountain-building: as the Alpine slices pushed north-west, a wedge of sedimentary rock ahead of them (mainly Jurassic limestone) was pushed along and slid as a whole over a slippery layer of Triassic salt and marl at its base, being folded into a set of parallel anticlines and synclines — the anticlines rising as ridges (locally crêts), the synclines dropping as valleys (combes, vals). Limestone is permeable and soluble, so the Jura has many caves, dry valleys and karst springs.",
    observation:
      "From the air the Jura Mountains are a set of north-east-to-south-west, parallel elongated ridges and valleys, like a stack of cloth pushed from the south-west and rucked up into folds. The ridges carry pasture and fir forest, the valleys hold villages, small towns and a few long narrow lakes. In places the top of an anticline has been eroded open to expose older rock beneath, giving \"relief inversion\" (a valley where a mountain should be).",
    distinguish:
      "The Jura Mountains and the Alps are \"parent and child\" — the same episode of mountain-building, with the Alps the main body (large-scale slice-stacking) and the Jura the fold belt \"kneaded\" out of the sedimentary cover pushed ahead — smaller in scale, shallower in structure, lower in altitude. Compared with an anticlinal upland like the Pennines, the Jura's folds are younger, more regular and clearly show the \"sliding over a detachment\" character.",
    concept:
      "The Jura Mountains are a case study in a thin-skinned fold-and-thrust belt: when a stack of sedimentary rock has a very slippery layer beneath it (salt, gypsum, marl), the rock above can slide as a whole over that \"lubricating layer\" and be squeezed into a set of regular folds ahead, while the basement below takes no part. To recognise this structure, look at whether the folds are in a row, regular and traceable to a basal detachment. A common misconception is that a range's folds must reach deep into the crust.",
    history:
      "The Jura has long been known for watchmaking — in winter, when farm work was slack, households made watch parts at home, and this grew into \"watch towns\" such as La Chaux-de-Fonds and Le Locle, whose town planning was inscribed as a World Heritage Site in 2009 for reflecting the division of labour in watch manufacture. The high pastures graze cattle in summer and produce cheeses such as Gruyère.",
  },

  "glarus-thrust": {
    // seeing sources: 位移量约 35 公里、Verrucano 二叠纪（2.5–3 亿年）、2008 年列入（官方名 Swiss Tectonic Arena Sardona）：与 IUCN 提交 UNESCO 的官方技术评估文件数字精确吻合（级别 1）。其他学术田野报告对同一断层面给出 35–50 公里不等的估算，35 公里落在常见范围内且与官方评估一致。「格拉鲁斯双重褶皱」是 Escher 1866 年的历史性错误解释、1884 年由 Bertrand 纠正为逆冲构造 —— 这段认识史核实无误。2026-09-09 核，本轮无需改动。
    //   https://whc.unesco.org/en/list/1179/
    seeing:
      "The Glarus Thrust (the mountains around it are called the \"Tectonic Arena Sardona\", a World Heritage Site), in eastern Switzerland around the canton of Glarus. Its defining feature: on the mid-slopes of several mountains there is a near-horizontal, sharp line running right across the hillside — above the line, dark red old rock; below it, grey young rock. This line is the thrust fault itself — the surface along which a large slice of crust was pushed — cut open and displayed on the mountainside.",
    formation:
      "During Alpine mountain-building, a large sheet of rock about 250–300 million years old (the Permian \"Verrucano\") was pushed about 35 km northward along a near-horizontal thrust fault, over rock only about 35 to 50 million years old (flysch). The fault surface itself was ground into a thin layer of ductilely deformed carbonate rock (the \"Lochseiten line\"). The result is the counter-intuitive \"old rock on top, young rock below\", with a line so straight it can be traced continuously across many mountains.",
    observation:
      "From the air the Sardona area is a stretch of the Eastern Alps whose most conspicuous feature is that horizontal line of colour change on the slopes — especially on the Tschingelhörner, where an eroded natural hole (\"Martin's Hole\") pierces the rock wall near the line. The reddish old rock above tends to form steep summits; the grey young rock below is softer and gentler in slope.",
    distinguish:
      "The Glarus Thrust works on the same principle as any thrust fault (old rock pushed over young), but its scale, displacement and clarity of exposure are world-class — the fault surface is near-horizontal, exposed continuously for tens of kilometres, with a rock-age difference of over 100 million years across it. It was the key example through which 19th-century geologists (Escher, Heim and others) gradually understood, and finally accepted, mountain-building by thrust nappes.",
    concept:
      "The Glarus Thrust is a case study in thrusting old rock over young: normally rock gets younger upward; if on a hillside you see a line with rock above much older than rock below, it is almost certainly a thrust (or nappe) fault — old rock pushed horizontally from elsewhere and laid on top of younger rock. To recognise a thrust, look for an \"upside-down\" rock-age sequence and a near-horizontal line that runs on and on. A common misconception is that \"the rock on top must be younger\".",
    history:
      "In the 19th century geologists were puzzled for decades by this \"old on young\" — some proposed it was two giant folds facing each other (the \"Glarus double fold\"). The puzzle was only solved once it was accepted that rock can be pushed tens of kilometres along a near-horizontal fault. This history of understanding made Sardona a \"holy site\" of structural geology, inscribed as a World Heritage Site in 2008.",
  },

  "monte-san-giorgio": {
    seeing:
      "Monte San Giorgio, in the canton of Ticino in southern Switzerland on Lake Lugano, is a small, densely wooded, pyramid-shaped mountain only about 1,097 m high. It looks unremarkable, but it is a World Heritage Site — because the rock inside it preserves the world's most complete record of Middle Triassic (about 240 million years ago) marine life.",
    formation:
      "About 240 million years ago this was a warm shallow sea on the edge of the Tethys Ocean, with a closed, anoxic lagoon on the sea floor. Marine animals that died and sank to the lagoon bed, in the absence of oxygen and scavengers, were completely covered and preserved by very fine black mud (later bituminous shale). The rock was then uplifted and folded by Alpine mountain-building into today's Monte San Giorgio; slope erosion and over a century of scientific excavation have kept exposing the fossils.",
    observation:
      "From the air Monte San Giorgio is an isolated conical forested hill between two arms of Lake Lugano, water on three sides; it is not high but steep-sided and fully vegetated. Quarries and excavation sites on its northern slope and on the Italian side are where the fossils come from. Around it is the classic Ticino scenery of lake and mountain with hillside villages.",
    distinguish:
      "Monte San Giorgio is unlike an ordinary mountain — its value is not in its landform (an unremarkable hill) but in the \"time capsule\" in its rock. Like other famous fossil sites (Chengjiang in China, the Burgess Shale in Canada), a special anoxic setting allowed soft parts to be preserved; Monte San Giorgio's distinction is a complete record of one Triassic marine ecosystem.",
    concept:
      "Monte San Giorgio is a case study in a Lagerstätte (a site of exceptional preservation): most organisms are decomposed after death and leave only hard shells; only in special settings — anoxic, rapidly buried, undisturbed — can skin, muscle and fin outlines be preserved, opening a \"window\" onto an ancient ecosystem. To recognise such a site, look at whether the fossils are numerous, diverse and include soft-bodied forms. A common misconception is that fossils form everywhere.",
    // history sources: 化石分类：提契诺鳄（Ticinosuchus）是陆生镶嵌踝类主龙，属贝萨诺组里少见的陆生标本；贝萨诺龙（Besanosaurus）是鱼龙类、海生。原文把两者并称「海生爬行动物」是分类错误，已分开。3 级交叉印证，2026-09-09 核。
    //   https://en.wikipedia.org/wiki/Ticinosuchus
    //   海拔 1097 米、化石层为中三叠世（UNESCO 口径 2.45–2.30 亿年前）、2003 年瑞士一侧列入、2010 年扩展到意大利一侧均核实无误（1 级 https://whc.unesco.org/en/list/1090/ ）。
    history:
      "Fossil excavation at Monte San Giorgio began in the 1850s, and over more than a century tens of thousands of specimens have been recovered, including the land-living archosaur Ticinosuchus and marine reptiles such as the ichthyosaur Besanosaurus, now in museums in Zurich, Milan and elsewhere. The Swiss side was inscribed as a World Heritage Site in 2003, extended to the Italian side in 2010.",
  },

  "saentis": {
    // seeing sources: 森蒂斯峰 2502 米、山顶气象站 1882 年建成：多个独立信源一致（3 级），2026-09-09 核，本轮无需改动。
    seeing:
      "Säntis, in north-eastern Switzerland, is the highest peak of the Alpstein limestone massif, 2,502 m. It is not very high, but because it stands isolated between the Swiss Plateau and the main Alps with no higher mountains around it, it is very prominent — on an exceptionally clear day the summit is said to give views into six countries (Switzerland, Germany, Austria, Liechtenstein, France, Italy). A weather station has stood on the summit since 1882.",
    formation:
      "The Alpstein, which Säntis belongs to, is a piece of the \"Helvetic nappes\" pushed to the northern edge of the Alps during mountain-building — made of Mesozoic shallow-marine limestone. These beds were strongly folded into several near-parallel rock ridges (such as the famous Kreuzberge), the bending of the strata plain to see on the slopes. Limestone is soluble, so the massif has karst — solution grooves, shafts, an underground drainage system — and the summit barely holds any surface water.",
    observation:
      "From the air Säntis is a relatively isolated pale-grey limestone massif in north-eastern Switzerland, its slopes clearly showing folded, then erosion-cut, rock ridges; the summit has a prominent weather radar tower and a cable-car station. Its northern side drops abruptly to the rolling Swiss Plateau, and its southern side connects to the more interior Alps. Among the ridges are a few green lakes (such as the Seealpsee).",
    distinguish:
      "Säntis differs from the interior high Alps (the Bernese and Pennine Alps): it is a small massif of limestone pushed out on its own to the northern edge, much lower and smaller, but because it is isolated and next to lowland, it has an outsized visual \"presence\". Like the Jura it is limestone with karst, but the Jura is a fold belt while Säntis is a fragment of a nappe.",
    concept:
      "Säntis is a case study in topographic prominence: how \"big\" a mountain looks depends not only on its altitude but on how far it rises above the surrounding saddle and whether higher mountains block the view. Säntis's altitude is unremarkable for the Alps, but its prominence and its views are among the best in Switzerland. A common misconception is to judge a mountain's \"standing\" by altitude alone.",
    history:
      "The weather station on the Säntis summit is one of the oldest high-mountain observatories in Switzerland; when it was built in 1882 all its supplies were carried up by hand. A cable car was built in the early 20th century. It is also an important site for lightning research — the tall tower on the summit is struck by lightning throughout the year and is used to study it.",
  },

  "aletsch-glacier": {
    // seeing sources: 冰川长度 / 面积 / 厚度：瑞士冰川监测网 GLAMOS 官方长度变化数据集（level 1，直接下载核对）显示 2013–2023 年逐年退缩（2016–17 年度 80.4 米、2022–23 年度 36.5 米），2000–2023 年年均约 40 米；面积约 76 平方公里（GLAMOS，2023 年测量，经德文维基转引）；康科迪亚广场冰厚各来源 800–940 米，正文取 800–900 米区间。2026-09-09 核。
    //   https://doi.glamos.ch/data/lengthchange/lengthchange_2024_r2024.zip
    //   https://www.swissinfo.ch/eng/glaciers-permafrost/the-aletsch-glacier-will-disappear-by-2100-according-to-an-italian-study/89865724
    //   ⚠️ 会过期（C6-j）：**GLAMOS 年度冰川公报通常在每年秋季（10 月前后）发布上一测量年度（10 月至次年 9 月）的数据** —— 下一轮回来刷新。2001 年列入 UNESCO 世界遗产核实无误。
    seeing:
      "The Great Aletsch Glacier, in the Bernese Alps, is the largest glacier in the whole Alps — about 20 km long and around 76 km² in area as measured in 2023, and still retreating — Swiss glacier monitoring puts the average retreat between 2000 and 2023 at about 40 m a year. It flows from the high snowfields around the Jungfrau, three ice streams merging at \"Konkordiaplatz\" into one broad ice river, where the ice is about 800 to 900 m thick. Dark \"medial moraine\" stripes run along its surface, especially clear from the air. It is the heart of the Jungfrau–Aletsch World Heritage Site.",
    formation:
      "The Aletsch Glacier forms from snow high in the mountains that accumulates faster than it melts, compacting into ice year by year and flowing down the valley under its own weight. Its accumulation area (firn basin) is large and high, which is why it can form such a long tongue. As it flows it scrapes the valley walls and floor, and lines the debris from its tributary glaciers into lengthwise \"medial moraine\" bands. In recent decades warming has clearly retreated its terminus and thinned its surface.",
    observation:
      "From the air the Aletsch Glacier is a broad, white ice river with several parallel dark stripes (medial moraines), winding south from the snow peaks in the north; on either side are steep rock walls and hanging tributary glaciers; the terminus is grey rubble, a meltwater river and \"fresh\" bare rock only exposed from under the ice in recent decades. The Aletsch Forest on the glacier's eastern side is a study site for how vegetation colonises ground after glacier retreat.",
    distinguish:
      "The Aletsch Glacier differs from Iceland's Vatnajökull: Vatnajökull is an \"ice cap\" lying on a plateau and flowing outward from the centre; the Aletsch is a \"valley glacier\" flowing along one mountain valley, elongated in form. It is longer and \"cleaner\" (less surface debris) than the Tasman Glacier in New Zealand.",
    concept:
      "The Aletsch Glacier is a case study in a valley glacier and medial moraine: when two glaciers merge, the inner \"lateral moraine\" (the debris band along each bank) of each combines and is carried in the middle of the merged glacier, moving downstream with the ice as a dark stripe. Count the medial moraines on a glacier and you roughly know how many tributaries formed it. A common misconception is to take a medial moraine for a crevasse or a path on the ice.",
    history:
      "In the 19th century the Aletsch Glacier was much longer than it is now; comparing old photographs, old maps and the present position shows the extent of over a century of retreat at a glance. The Jungfrau–Aletsch region was inscribed as a World Heritage Site in 2001. Viewpoints beside the glacier (such as the Aletsch Arena and the Eggishorn) are popular Swiss hiking and glacier-watching spots.",
  },

  "rhone-glacier": {
    seeing:
      "The Rhône Glacier, in central Switzerland near the Furka Pass, is the source of the Rhône — the meltwater that flows from its terminus runs south-west through the canton of Valais, into Lake Geneva, then via Lyon in France and finally to the Mediterranean. It is famous for a blue ice grotto carved into it each summer for visitors, and it is one of the most vivid \"showcase windows\" of Alpine glacier retreat.",
    // formation sources: 末端退缩：GLAMOS 官方长度变化数据集（级别 1，直接下载核对）—— 自 1874 年有系统记录以来年均约 8.5 米、累计逾 1 公里；2022–23 测量年度单年退缩 95.5 米，是 2003–2016 年间任何一年的两三倍。2026-09-09 核。原文「近一个多世纪后退约 1300 米」数值不错，但没有起算年与截止年。
    //   https://doi.glamos.ch/data/lengthchange/lengthchange_2024_r2024.zip
    //   https://de.wikipedia.org/wiki/Rhonegletscher
    //   ⚠️ 会过期（C6-j）：随 GLAMOS 年度公报（每年秋季）刷新。
    formation:
      "The Rhône Glacier, like other valley glaciers, forms from mountain snow compacting and flowing down the valley. In the ice ages it was much larger — during the last ice age the Rhône Glacier reached as far as present-day Lyon in France, gouging the whole Rhône valley into a deep trough. After the ice retreated, the glacier drew back all the way up to its present high position. Since systematic records began in 1874 its terminus has retreated an average of about 8.5 m a year, more than a kilometre in total, and its body has thinned dramatically; the pace has clearly picked up in recent years — nearly 100 m in the 2022–23 measurement year alone; in recent years white insulating blankets are laid over part of the ice in summer to slow the melt.",
    observation:
      "From the air the Rhône Glacier is a body of ice hanging on the mountainside at the head of the Goms valley, its terminus grey rubble and a small proglacial lake of ponded meltwater, from which the water flows out as the first stretch of the Rhône. Between the terminus and the valley road (the Furka Pass road) is a large expanse of smooth, near-vegetation-free rock exposed from under the ice only in recent decades — still carrying the scratches ground by the glacier.",
    distinguish:
      "The Rhône Glacier and the Aletsch Glacier are both in the Swiss high Alps, but the Aletsch is the largest glacier in the Alps and still relatively \"healthy\"; the Rhône Glacier is much smaller and has retreated more completely, its terminus now drawn back onto a very steep slope. Its value is more in being \"comparable\" — from 18th-century engravings to today's photographs, its change of position is unmistakable.",
    concept:
      "The smooth bare rock in front of the Rhône Glacier is a case study in glacial polishing: the debris carried at the base of the glacier acts like sandpaper, polishing the bedrock it flows over and cutting scratches and grooves aligned with the ice flow (a \"roche moutonnée\"). A smooth rock surface with parallel scratches and little soil or vegetation is almost certainly ground that was under the ice not long ago. A common misconception is to take a glacially polished surface for artificial polishing or water erosion.",
    history:
      "The Rhône Glacier's changes of position have nearly three centuries of record — 18th- and 19th-century painters and early photographers left many images, an important resource for studying how Alpine glaciers respond to climate. The ice grotto has been a paid attraction since the late 19th century, run by one local family for generations.",
  },

  "gorner-glacier": {
    // seeing sources: 面积与排名：GLAMOS 2023 年测得戈尔纳冰川系统约 35 平方公里，为阿尔卑斯继阿莱奇之后第二大的连片冰川区；这个排名是在 2019 年夏主体与格伦茨冰川分离之后重新测量仍成立的。3 级转引 GLAMOS 数据，2026-09-09 核。
    //   https://de.wikipedia.org/wiki/Gornergletscher
    //   ⚠️ 会过期（C6-j）：随 GLAMOS 年度公报（每年秋季）刷新。戈尔内格拉特铁路 1898 年通车、19 世纪戈尔纳湖冰坝周期性溃决均核实无误。
    seeing:
      "The Gorner Glacier, south-east of Zermatt between the Matterhorn and Monte Rosa, is a whole system of several glaciers merged together — by area the second-largest contiguous glacier area in the Alps after the Aletsch — about 35 km² as measured by Swiss glacier monitoring in 2023. The Gornergrat railway (3,089 m) faces it directly and is a classic spot for viewing this glacier and the ring of 4,000 m peaks around it. In recent decades the Gorner Glacier has retreated fast: in the summer of 2019 its main body parted from the larger Grenzgletscher, and the confluence has stayed apart since.",
    formation:
      "The ice of the Gorner Glacier comes from the firn basins of a ring of 4,000 m peaks — Monte Rosa, the Lyskamm, the Breithorn and others — several ice streams converging to the north-west and flowing down. The high mountains here have hard rock, high altitude and heavy snow, so a large glacier area can persist. Like other glaciers it scrapes the valley and carries debris as it flows; several medial moraines run between the merged ice streams.",
    // observation sources: 分离时点：2019 年夏，戈尔纳冰川主体与格伦茨冰川分离。3 级转引 GLAMOS，2026-09-09 核。
    //   https://de.wikipedia.org/wiki/Gornergletscher
    observation:
      "From the air the Gorner Glacier is a white network of ice with several \"tributaries\" at the head of the Zermatt valley, ringed by the dark rock peaks of the Matterhorn, Monte Rosa and others; several parallel dark medial-moraine stripes run along the ice, and the terminus is grey rubble and a steadily growing proglacial lake. The little red rack-railway train and viewing platform on the Gornergrat ridge face this ice directly.",
    distinguish:
      "The Gorner Glacier and the Aletsch Glacier are both large Alpine glaciers, but the Aletsch is a long tongue dominated by one main ice stream; the Gorner is a \"tree-branch\" system of several ice streams merging, ringed by 4,000 m peaks. Being able to see the glacier and its headwater peaks at the same time from a railway is rare in the Alps.",
    concept:
      "The Gorner Glacier is a case study in a glacier system / dendritic glacier: the several glaciers of a mountain area merge stage by stage into one main tongue, like the tributaries of a river forming a main stem, the whole thing shaped like an upside-down tree. Count the medial moraines on the main tongue and each roughly corresponds to one tributary joining. A common misconception is to take a merged system for one single glacier.",
    history:
      "The Gornergrat railway, opened in 1898, was one of the first electrified rack railways in Europe and for over a century has been a fixed vantage point for watching the Gorner Glacier change. In the 19th century the Gorner Glacier repeatedly dammed a side valley, ponding \"Lake Gorner\" behind the ice, which drained periodically and swept down toward Zermatt — an early subject of glacial-flood research.",
  },

  "lauterbrunnen-valley": {
    // seeing sources: 72 条瀑布、施陶河瀑布落差、托尔金 1911 年游历均核实无误；「写进瑞文戴尔」是广泛复述但本人未证实的推断，**正文的「据说」是必要的留白，本轮判定不改**。2026-09-09 核。
    seeing:
      "The Lauterbrunnen Valley, south of Interlaken on the northern edge of the Bernese Alps, is a deep, straight valley walled by near-vertical grey rock hundreds of metres high. It is best known for its waterfalls — about 72 of them, large and small, plunge from the hanging valleys on either side, among them the Staubbach Fall (about 300 m, one of the highest free-falling waterfalls in Europe) and the Trümmelbach Falls, hidden inside the mountain, draining the meltwater of the Eiger, Mönch and Jungfrau glaciers down through a series of falls.",
    formation:
      "The Lauterbrunnen Valley is a classic glacial U-shaped trough: in the ice ages a thick main glacier cut down hard along this valley, gouging the floor deep and flat and grinding the walls into sheer cliffs. The tributary glaciers on either side were small and cut down weakly, so after the ice retreated their valley mouths were left \"hanging\" high on the main-valley wall (\"hanging valleys\"), and their streams can only enter the main valley as waterfalls — which is why there are so many here.",
    observation:
      "From the air the Lauterbrunnen Valley is a north-south, dead-straight, flat-floored deep trough (villages, fields and a railway on the floor), its walls a continuous grey vertical cliff topped by green alpine pasture and higher snow peaks. The white water lines down the cliff are the waterfalls from the hanging valleys; there are most of them after rain and in the snowmelt season.",
    distinguish:
      "The Lauterbrunnen Valley differs from Skógafoss in Iceland (an old sea cliff): Skógar's cliff is a former coastline from sea-level change; Lauterbrunnen's cliffs and hanging valleys come from a main glacier cutting down hard while the tributaries fell behind. It is the same kind of U-shaped glacial trough as Milford Sound in New Zealand, only not flooded by the sea.",
    concept:
      "The Lauterbrunnen Valley is a case study in hanging valleys and waterfalls: the main glacier is thicker, higher-volume and cuts down harder than its tributaries, so the main valley is gouged much deeper than the side valleys; after the ice retreats the tributary valley mouths hang high on the main-valley wall and the tributaries drop in as waterfalls. To recognise a hanging valley, look at whether the waterfall is fed from above by a gentle small valley, with the fall right at the junction of that valley and the main one. A common misconception is that a waterfall is just a step in the riverbed.",
    history:
      "The name Lauterbrunnen means \"many springs (waterfalls)\". In the 19th century writers such as Byron and Goethe came here, and the Staubbach Fall appears in a poem of Goethe's. Tolkien is said to have visited this area in 1911 and to have based the elf-valley Rivendell in The Lord of the Rings on the Lauterbrunnen Valley. Today the valley floor is the gateway to the Jungfrau region (Mürren, the Schilthorn, Jungfraujoch).",
  },

  "rhone-valley": {
    // seeing sources: 雨影气候与 bisses / Suonen 灌溉渠核实无误。第三次罗讷河治理（3e correction du Rhône）**仍处在重新规划阶段**（2024-05 启动修订、计划 2026 年底提交更新方案，联邦审计署对资金保障提出过警示），正文只写「最近一期在扩宽河道、恢复部分自然河滩」这类概括性描述、没有断言完工年份，本轮无需改动。⚠️ **下一轮若要补细节，不能写成「已完成」或给具体完工年份**。2026-09-09 核。
    seeing:
      "The Rhône Valley (in Switzerland this mainly means the stretch within the canton of Valais) is a deep trough the Rhône has cut west from its glacier source, walled by the high Alps on both sides. It is narrow in the upper Goms, then opens into a broad flat floor past Brig, Visp, Sierre and Sion to Martigny, where it turns sharply north (\"the elbow of the Rhône\") and flows into Lake Geneva. The valley slopes are terraced with vineyards — this is Switzerland's largest wine region.",
    formation:
      "The Rhône Valley was gouged by a glacier: in the last ice age the Rhône Glacier reached as far as Lyon in France, deepening and widening this valley into a huge U-shaped trough. After the ice retreated, the Rhône braided across the broad valley floor as marshland; from the 19th century people straightened the channel and confined it between embankments (the \"Rhône corrections\"), turning the floor into farmland and towns. Because the high mountains on both sides shut out moisture from north and south, the valley floor is in a rain shadow — one of the driest and sunniest places in Switzerland — and the slopes are irrigated by old water channels (locally bisses or Suonen).",
    observation:
      "From the air the Rhône Valley is a broad, flat, dead-straight valley between the high Alps, its floor holding the embanked Rhône, a grid of farmland, several towns and the motorway and railway; the south-facing slope (a north-facing hillside faces south — plenty of sun) is covered in terraced vineyards, the north-facing slope more forested. Near Martigny you can see the valley turn 90 degrees.",
    distinguish:
      "The Rhône Valley and the Lauterbrunnen Valley are both U-shaped glacial troughs, but Lauterbrunnen is narrow and deep and known for its hanging-valley waterfalls; the Rhône Valley is a large trunk valley running the length of Valais — broad, straight, dry, with a large river and towns. It is a dead-straight large valley like the Great Glen in Scotland, but the Great Glen is fault-controlled while the Rhône Valley was mainly a glacier working along a pre-existing structural valley.",
    concept:
      "The Rhône Valley is a case study in an inner-alpine dry valley (rain shadow): moist air is lifted over the surrounding high mountains and rained out on the windward slopes, and by the time it crosses into a large interior valley ringed by high mountains it is dry and warming as it descends — so within rainy Switzerland this valley is dry enough to need artificial irrigation. To recognise this kind of valley, look at whether it is ringed by high mountains, has clearly lower rainfall than its surroundings, and has irrigation works on the slopes. A common misconception is that the Alps are wet and rainy everywhere.",
    history:
      "The Rhône Valley has been a route across the Alps since ancient times (several passes to Italy branch off it). The Valais irrigation-channel system is centuries old, an ingenious way of bringing high-mountain snowmelt to dry slopes, partly still in use. The Rhône corrections of the 19th and 20th centuries were carried out in phases; the most recent (the \"Third Rhône Correction\") is widening the channel and restoring some natural riverbank.",
  },

  "swiss-plateau": {
    // seeing sources: 长约 300 公里、宽 30–50 公里、海拔 400–600 米、占国土约 30%、人口超三分之二：与瑞士联邦外交部官方页完全一致（级别 1）。2026-09-09 核，本轮无需改动。
    //   https://www.eda.admin.ch/aboutswitzerland/en/home/umwelt/geografie/mittelland.html
    seeing:
      "The Swiss Plateau (German: Mittelland; French: Plateau suisse — \"midland / central plateau\") is a belt of lowland between the Jura Mountains to the north-west and the Alps to the south-east, running from Lake Geneva to Lake Constance, about 300 km long and 30–40 km wide, mostly 400–600 m in altitude. It is only about 30% of Switzerland's area but holds about two-thirds of its population — Zurich, Bern, Lausanne, Geneva and most of the farmland and industry are here.",
    formation:
      "The bedrock of the Swiss Plateau is \"Molasse\" — sand and gravel eroded from the rising Alps, carried to a foreland basin at the mountain front and deposited and cemented, recording the \"growth history\" of the Alps. During the Quaternary ice ages, glaciers from the Alps spread again and again across the whole plateau, leaving moraine ridges, drumlins (streamlined hills shaped under the ice), gravel plains, and huge \"erratic\" boulders carried from the Alps and dropped on the plateau. The large lakes around its margins sit in basins overdeepened by the glaciers.",
    observation:
      "From the air the Swiss Plateau is a gently rolling green belt of hill farmland between the parallel ridges of the Jura and the snow peaks of the Alps, broken up by forest, rivers and several large lakes; look closely and you can pick out many streamlined hills (drumlins) all aligned the same way — their blunt ends pointing toward the direction the glacier came from. Cities, roads and railways form a dense network.",
    distinguish:
      "The Swiss Plateau is called a \"plateau\", but it is not an uplifted high land like Tibet — it is the \"midland lowland\" relative to the higher Jura and Alps on either side; its surface is glacially reworked hill country, not a flat table. It is part of the same foreland basin as the \"Molasse Basin\" of southern Germany.",
    concept:
      "The Swiss Plateau is a case study in a foreland basin: when a large mountain range rises, its weight bends the crust beside it down into a long trough; the debris eroded from the range fills that trough, building a thick pile of molasse. To recognise a foreland basin, look at whether it runs right along an orogenic belt, is filled with the debris eroded from that range, and subsided as the range rose. A common misconception is to take this kind of hill country for an ancient stable craton.",
    history:
      "The \"erratic boulders\" of the Swiss Plateau — huge isolated rocks lying far from the Alps but made of Alpine rock — helped scientists such as Agassiz in the 19th century propose and prove the \"ice age\" theory: only huge glaciers could have carried such large rocks so far. Today the plateau is the economic, demographic and transport core of Switzerland, and also where the conflict between farmland and urban growth is most concentrated.",
  },

  "lake-geneva": {
    // seeing sources: 面积 580.03 平方公里、最深 309.7 米（3 级）。**跨境表述本轮专门复核：通过** —— 只写两岸各属哪国，不描述边界线走向、不表述主权，符合仓库既定做法。湖泊面积与深度属长期稳定的地形量，不像冰川那样需要逐年监测时点。2026-09-09 核，本轮无需改动。
    seeing:
      "Lake Geneva (French: Lac Léman), in south-western Switzerland, is one of the largest lakes in Western Europe, shaped like a crescent moon, about 580 km² in area and up to about 310 m deep. Its southern shore is in France, its northern shore in Switzerland, with Lausanne, Montreux and Geneva strung along the north. The Rhône enters at the east end (carrying grey glacial silt) and leaves at Geneva already clear and green — the lake acts as a huge settling basin.",
    formation:
      "Lake Geneva was gouged by a glacier. In the last ice age the Rhône Glacier reached from Valais as far as Lyon in France, flowing back and forth between the mountains and the Swiss Plateau and carving here a deep, long basin whose floor is below sea level. After the ice retreated the basin filled with water. The crescent shape roughly reflects the glacier flowing around a hard block of Jurassic limestone along softer rock. At the east end the Rhône is building a delta into the lake.",
    observation:
      "From the air Lake Geneva is a long narrow blue sheet of water between the Alps and the Jura; the north shore has vineyards on gentle slopes (the Lavaux terraces are a World Heritage Site), cities and railways, and the south shore rises abruptly into the Savoy Alps on the French side. At the east end you can see the grey turbid water of the Rhône entering the clear lake water, with a sharp line between the two colours.",
    distinguish:
      "Lake Geneva, Lake Zurich and Lake Lucerne are all Swiss glacial lakes, but Lake Geneva is far larger, sits further out (between the foot of the Alps and the Jura), and straddles Switzerland and France. Like Lake Garda and Lake Maggiore in northern Italy, it is a deep large lake gouged by a glacier at the mountain front.",
    concept:
      "Lake Geneva is a case study in a lake settling and clearing a river: when a turbid river enters a lake the flow suddenly slows and the sediment it carries settles to the lake bed, so years and decades later the water leaving the lake outlet is clear. A river regulated by a large lake tends to have clear, steady water downstream. To recognise this effect, look at the colour and sediment load of the water entering and leaving the lake. A common misconception is that a river's clarity is set only by its upstream reach.",
    history:
      "The shores of Lake Geneva have had towns and vineyards since Roman times. In the 18th century Rousseau, Voltaire, Byron and Shelley lived and wrote by the lake, making it a landmark on the literary map of Europe. From the 19th century the north shore developed as a spa and tourist region. Today the lake area is the economic centre of French-speaking Switzerland and a hub of international organisations.",
  },

  "lake-constance": {
    // seeing sources: 面积约 536 平方公里（含上湖 + 下湖）。**「主湖区没有正式划定的国界」这句本身就是最中性的写法，本轮专门复核：通过** —— 上湖三国三种理论并存、从未达成一致，正文如实陈述这一状态，既不描述边界线也不表述主权。2 级，2026-09-09 核。
    //   https://www.tagblatt.ch/ostschweiz/bodensee-sommer-wo-verlaeuft-eigentlich-die-grenze-im-bodensee-es-gibt-drei-theorien-aber-keine-klaren-regeln-ld.2171909
    seeing:
      "Lake Constance (German: Bodensee), in the north-eastern corner of Switzerland, is one of the large lakes of Central Europe, about 536 km² in area. Its shores belong to Switzerland, Germany and Austria, and the main basin (the Obersee) has no formally agreed border on the water — the three countries use the lake according to their own practices. The Rhine enters at the east end and leaves at the west, and along this stretch it barely mixes with the lake water, keeping its upstream green colour.",
    formation:
      "Lake Constance was gouged by the Rhine Glacier. In the ice ages the Rhine Glacier from the Alps spread out here into a large lobe, scooping the ground into a broad shallow basin; after the ice retreated it filled with water. Because it was formed by ice \"spreading out\" rather than \"cutting deep\", Lake Constance is shallower and more open than Lake Geneva. Sediment brought down by the Rhine is building a large delta at the east end (which splits the eastern end of the lake in two).",
    observation:
      "From the air Lake Constance is a broad open blue sheet of water at the northern foot of the Alps and the eastern end of the Swiss Plateau, its shores gentle, with orchards and towns (Konstanz, Bregenz, Romanshorn and others). At the east end you can see the grey-green turbid water of the Rhine fanning in, and the growing Rhine delta; at the west end the lake narrows and drains through a river reach (the Untersee) toward the Rhine Falls.",
    distinguish:
      "Lake Constance versus Lake Geneva: Lake Geneva is narrow, deep and curved (a glacier cutting deep); Lake Constance is broad, shallow and gentle (a glacier spreading out). Lake Constance being \"used by three countries with no border on the main basin\" is unusual among the large lakes of Europe.",
    concept:
      "Lake Constance is a case study in a through-flowing river not mixing with a lake: when a large river crosses a lake, if its temperature, density and flow differ enough from the lake water, the river water threads through the lake like a ribbon and exchanges little with the lake on either side. The Rhine crossing Lake Constance does roughly this. To recognise it, look at whether the water entering and leaving the lake is nearly the same in colour and temperature. A common misconception is that a river merges completely with a lake the moment it enters.",
    history:
      "The prehistoric pile-dwelling sites (Neolithic to Bronze Age) on the shores of Lake Constance are part of the World Heritage Site of prehistoric pile dwellings around the Alps. The lake area was historically a transport and trade hub for southern Germany, and the Council of Constance (1414–1418) met here. Today there are frequent ferries between the towns of the three countries around the lake.",
  },

  "lake-lucerne": {
    seeing:
      "Lake Lucerne (German: Vierwaldstättersee, \"lake of the four forest cantons\"), in central Switzerland, is a lake of extremely intricate shape — several fjord-like arms and basins joined by narrow straits, looking from the air like a sprawling monster. The Rigi, Pilatus, Bürgenstock and other mountains rise straight from its shores. The Rütli meadow at its south-eastern corner is the traditional site where representatives of a few cantons are said to have sworn an alliance in 1291.",
    formation:
      "Lake Lucerne formed as glaciers cut down along several structural valleys running in different directions, and the resulting basins were separated by narrow rock sills (harder rock or moraine). In the ice ages glaciers from the Gotthard, Engelberg and other directions met here, each gouging a deep trough; after the ice retreated these troughs filled with water and joined at the sills, making today's multi-armed complex lake. The Urnersee (the southernmost arm) has sheer walls and looks especially like a Norwegian fjord.",
    observation:
      "From the air Lake Lucerne is a broken-shaped, deep-blue body of water at the front of the central Alps, with several \"arms\" reaching in different directions; each arm is boxed in by steep mountains, and only the north-western corner where the city of Lucerne sits has much flat land. Old paddle-steamers ply the lake; the Rigi and Pilatus each have a mountain railway to the summit.",
    distinguish:
      "Lake Lucerne and Lake Zurich are both on the edge of the Swiss Plateau, but Lake Zurich is a smooth banana shape; Lake Lucerne reaches deep into the Alps and is cut into a maze by several steep valleys — wilder. Its Urnersee arm, like Norwegian fjords and Milford Sound in New Zealand, is a flooded (here lake-flooded) deep glacial trough.",
    concept:
      "Lake Lucerne is a case study in a multi-basin compound lake: when a mountain area has several glacial valleys of different orientation meeting at one place, each is gouged into a deep basin, with shallower rock sills left between them; once the water level rises, the basins connect through the sills into one large lake, but the lake bed is really a string of separate deep pits. To recognise such a lake, look at whether it is highly irregular in shape, with several deep arms and clear shallow stretches between them. A common misconception is to take a compound lake for one single basin.",
    // history sources: 湖名 Vierwaldstättersee =「四林州湖」：乌里、施维茨、下瓦尔登（今分上/下瓦尔登两个半州）+ **琉森**（1332 年加入盟约，15 世纪起湖名扩展为「四」）。瑞士历史词典 HLS，级别 1，2026-09-09 核。
    //   https://hls-dhs-dss.ch/textes/d/D7465.php
    //   **这一条是同一条目两段之间的完整性缺口，不是事实错误**：seeing 段写「四个林州的湖」、history 段只列了三个，两段各自都对，合起来读却像对不上 —— 与 C6i（两段数字打架）是同一形状，只是这次打架的不是数字而是枚举。
    //   面积 88.66 平方公里（3 级）；轴心路与圣哥达通道、19 世纪里吉山「山峦皇后」均核实无误。
    history:
      "The Lake Lucerne area is the \"founding heartland\" of Switzerland — Uri, Schwyz and Unterwalden — the three \"forest cantons\" of the 1291 founding story — lie around the lake, and the country's name \"Schweiz\" comes from Schwyz; Lucerne joined the confederation in 1332, completing the four forest cantons of the lake's German name. The Axenstrasse road along the lake and the Gotthard route head south from here over the Alps. From the 19th century Lucerne and the lake became one of the earliest international tourist destinations, and the Rigi was nicknamed the \"Queen of the Mountains\".",
  },

  "lake-zurich": {
    // seeing sources: 面积 88.66 平方公里（3 级）；黄金海岸 / 银海岸命名法属实。2026-09-09 核，本轮无需改动。
    seeing:
      "Lake Zurich (German: Zürichsee), on the Swiss Plateau, is a long, slightly curved, banana-shaped glacial lake about 88 km² in area. The city of Zurich is at its north-western end. Its shores are prosperous towns, vineyards and orchards on gentle slopes — the sunny north-eastern shore is nicknamed the \"Gold Coast\", the other the \"Silver Coast\". Near Rapperswil a causeway called the \"Seedamm\" crosses the lake.",
    formation:
      "Lake Zurich was gouged by the Linth Glacier. In the ice ages the Linth Glacier from the Glarus Alps flowed north-west along this valley, cutting the floor into a deep, straight trough; after the ice retreated it filled with water. The glacier also left a transverse moraine ridge around Rapperswil, splitting the lake into the larger Lower Lake and the smaller, shallower Upper Lake — the \"Seedamm\" is built on this natural shoal.",
    observation:
      "From the air Lake Zurich is a smooth south-east-to-north-west blue band of water on the Swiss Plateau, both shores lined with dense towns, villas and railways, with vineyards on the slopes. The Seedamm causeway and railway bridge at Rapperswil \"pinch\" the lake into a narrow waist; the Upper Lake east of the waist is shallow, with reeds and wetland.",
    distinguish:
      "Lake Zurich versus Lake Lucerne: Lake Zurich is a single, straight glacial trough filled with water, simple in form; Lake Lucerne reaches into the mountains and is cut into several arms. Lake Zurich is similar in form to Lake Geneva (both crescent/banana-shaped large glacial lakes), only smaller and further into the plateau.",
    concept:
      "Lake Zurich's \"Seedamm shoal\" is a case study in a moraine dam splitting a lake: as a glacier flows it drops a transverse moraine ridge somewhere (often where the slope changes); after the ice retreats, if this ridge stands above the later water level it splits one lake into two, and if it is only an underwater shoal it forms a narrow \"waist\" in the middle of the lake. To recognise a moraine dam, look at whether the lake's narrow waist has a transverse rise or shoal made of gravel. A common misconception is to take it for an artificial embankment.",
    history:
      "The prehistoric pile-dwelling sites on the shores of Lake Zurich are part of the World Heritage Site of prehistoric pile dwellings. From the Middle Ages Zurich controlled the trade of the lake area. After 19th-century industrialisation the sunny, well-connected north-eastern shore grew into one of the wealthiest residential belts in Switzerland. The lake is the main drinking-water source for the city of Zurich and its quality is strictly protected.",
  },

  "lake-maggiore": {
    // seeing sources: 瑞士最低点 193 米（2 级官方来源确认）、最深约 370–372 米；因苏布里克线为阿尔卑斯造山带主要缝合带之一，马焦雷 / 卢加诺 / 科莫合称「因苏布里克湖」，冰期前已有深切河谷、冰川再深挖成 U 形槽 —— 与正文机制描述吻合。**跨境表述（大部分在意大利、最北端约五分之一在瑞士）为中性事实陈述，复核通过。** 2026-09-09 核，本轮无需改动。
    seeing:
      "Lake Maggiore is a deep, long lake at the southern foot of the Alps, mostly in Italy, with about the northernmost fifth in the Swiss canton of Ticino, where the towns of Locarno and Ascona sit on the shore. The shore around Ascona is only 193 m above sea level — the lowest point in the whole of Switzerland. Being south of the Alps and moderated by the deep lake, the climate here is mild, and the shores grow palms, camellias and citrus.",
    formation:
      "Lake Maggiore, like the neighbouring Lake Lugano and Lake Como, is a deep trough gouged by large glaciers coming down the southern slope of the Alps in the ice ages. These glaciers flowed south along a belt of weak rock near an important geological line at the southern edge of the Alps (the \"Insubric Line\", one of the sutures between two plates), cutting the valley very deep — Lake Maggiore is up to about 370 m deep, its floor well below sea level. After the ice retreated it filled with water, forming this string of \"Insubric lakes\".",
    observation:
      "From the air Lake Maggiore is a north-south, deep-blue, long narrow body of water in southern Ticino, its shores steep slopes covered in broadleaf forest and towns and villages; at the Swiss end in the north are the city of Locarno and a flat delta (the Magadino plain) built where the Maggia and the Ticino enter the lake. There are a few small islands (the Brissago Islands on the Swiss side).",
    distinguish:
      "Lake Maggiore and the Swiss Plateau glacial lakes (Geneva, Zurich, Lucerne) are all deep lakes gouged by glaciers, but Lake Maggiore is on the southern side of the Alps, with a clearly warmer climate and Mediterranean-type vegetation; the northern lakes are Central-European. It is a \"sister lake\" of Lake Lugano and Lake Como.",
    concept:
      "Lake Maggiore is a case study in terrain and local climate: at the same latitude, the climate on the north and south sides of the Alps can differ greatly — the south side is sheltered from northern cold air by the mountains, faces toward the Mediterranean, and has a deep lake storing heat and moderating temperature, so winters are mild and subtropical plants grow. To recognise this kind of warm microclimate on a leeward shore, look at whether it is on the south (leeward) side of high mountains, next to a large deep body of water. A common misconception is that climate is similar everywhere at the same latitude.",
    history:
      "Locarno, on the Swiss side of Lake Maggiore, is where the Locarno Treaties were signed in 1925. From the late 19th century the lake area (especially Monte Verità near Ascona) drew many artists, reformers and followers of alternative lifestyles. Today it is Switzerland's \"sunny corner\" and a transport node between Switzerland and Italy.",
  },

  "creux-du-van": {
    // seeing sources: 崖高约 160 米、马蹄形弧长约 1.4 公里；1972 年设「凡岩谷与阿勒兹峡谷」自然保护区（更早有 1870 年私人购地、1876 年汝拉俱乐部扩大购地的民间保护，与 1972 年正式建区不矛盾）；1965 年起重引入羱羊（1965–1970 年首批放归 8 雄 6 雌）。2026-09-09 核。
    //   ⚠️ **成因表述留 unknown、本轮不改**：法语资料提到末次冰期末凹地末端曾有小型冰川、以冻融的机械作用参与塑造崖壁 —— 即冰川参与过，但不是经典的冰斗旋转刨挖。正文「不是冰川冰斗」完全排除冰川角色，与此存在张力；但可查到的都是 3 级转述，**没有一锤定音的一手地质文献，按「拿不准就记 unknown、不要改成另一个没核实的说法」处理**。下一轮找到瑞士地质调查局或大学论文原文后回来复核。
    //   https://fr-academic.com/dic.nsf/frwiki/466716
    seeing:
      "The Creux du Van (French, roughly \"the hollow of the rock\"), in the Jura Mountains of western Switzerland, is a natural rock amphitheatre: a horseshoe of limestone cliff about 160 m high and 1.4 km long, wrapping around a forested hollow below. The view down from the cliff edge is dramatic, and wild ibex and chamois are often seen on the cliffs and in the hollow.",
    formation:
      "The Creux du Van was \"gnawed\" into an anticline (an upfold) of the Jura Mountains. After the crest of this limestone anticline was eroded open, the floor of the hollow has softer rock and abundant groundwater; through the ice ages and after, repeated freeze-thaw broke the cliff rock away block by block, and springs at the cliff foot kept carrying the debris away and undercutting the base, so the cliff collapsed and retreated inward (toward the core of the anticline), gradually enclosing today's semicircular hollow.",
    observation:
      "From the air the Creux du Van is a big bite taken out of the southern end of a Jura ridge — an arc of pale-grey cliff, gentle pasture and woodland on the clifftop, dense forest and scree at the foot, and a small stream flowing out of the hollow. The whole hollow opens toward the south-west.",
    distinguish:
      "The Creux du Van's horseshoe is not a glacial cirque (though it looks a little like one): a cirque is scooped by a glacier rotating in a shaded hollow on a mountainside; the Creux du Van is an erosional hollow (French reculée or cirque) formed by running water, freeze-thaw and spring undercutting acting on a fold anticline over a long time. Its origin is also different from Ásbyrgi in Iceland (a horseshoe valley cut by a flood).",
    concept:
      "The Creux du Van is a case study in spring sapping: when groundwater emerges as springs at the base of a cliff, the spring water keeps dissolving and hollowing out the rock at the cliff foot and carrying away the debris, so the cliff loses support, collapses and retreats toward the water source, eventually carving a semicircular hollow into the cliff. To recognise this landform, look at whether the hollow wraps around a spring, opens downstream, and has sheer cliffs. A common misconception is to take it for a cirque or an impact crater.",
    history:
      "The Creux du Van became a Swiss nature reserve in 1972. Ibex were reintroduced here in 1965 (having once died out in Switzerland), and the cliffs now hold a stable population. Place names on the clifftop such as \"Le Purgatoire\" (Purgatory), and local legends, reflect how much this hazardous place has weighed on the local imagination.",
  },

  "emmental-hills": {
    // seeing sources: 纳普夫峰 1408 米（瑞士历史词典 HLS，级别 1）；淘金传统见伯尔尼州官方「活态传统」名录（级别 1）—— 可追溯至罗马时代、14–19 世纪有职业淘金者、今天作为传统延续，与正文完全吻合。2026-09-09 核，本轮无需改动。
    //   https://hls-dhs-dss.ch/de/articles/008781/
    //   https://www.lt.bkd.be.ch/de/start/traditionen/goldwaschen.html
    seeing:
      "The Emmental Hills, on the southern edge of the Swiss Plateau east of Bern, are a stretch of green hill country deeply cut by countless small streams, with pasture and big-roofed timber farmhouses on the ridges and streams and villages in the valleys. Its high point, the Napf, is 1,408 m. The Emmental (\"valley of the Emme\") is also the home of the large-holed cheese known abroad as \"Swiss cheese\".",
    formation:
      "The Emmental Hills and the Napf are the part of the Swiss Plateau's \"Molasse\" that lies closest to the Alps and is the coarsest and hardest — the \"Napf conglomerate\" (locally Nagelfluh, naturally cemented gravel). Millions of years ago a large river from the Alps built a huge gravel fan here; the fan was later uplifted, and the hard conglomerate, more erosion-resistant than the softer rock around it, stood out as high ground — then it was deeply cut by the many small streams that rise radially from the Napf, forming today's dense \"comb-tooth\" pattern of hills and deep valleys.",
    observation:
      "From the air the Emmental is a dark-green, very finely textured hill country between the Swiss Plateau and the Alps — a set of parallel deep valleys radiating from the Napf, cutting the upland into finger-like ridges. The ridges carry open pasture and isolated large farmhouses, the valley floors streams, roads and strings of villages. There is almost no large flat land.",
    distinguish:
      "The Emmental Hills differ from the rest of the Swiss Plateau: most of the plateau is gentle, glacially reworked hill country, while the Emmental is \"youthful\" hill country of hard conglomerate strongly and deeply cut by running water, with far more relief and deeper valleys. Neither the Emmental nor the Jura is high, but the Jura is folded limestone ridges while the Emmental is radial hills cut from conglomerate.",
    concept:
      "The Emmental Hills are a case study in radial drainage: when an upland slopes away from one centre (here the Napf), rivers flow down the steepest line, out from the centre, cutting the upland into ridges and valleys radiating from that centre, like the spokes of a wheel. To recognise radial drainage, look at whether all the main valleys point toward or away from one high point. A common misconception is to take this kind of terrain for fault-controlled.",
    history:
      "The Emmental was historically the land of independent freehold farmers, the deep valleys keeping villages apart and producing a scattered, self-contained settlement pattern and dialect. In the 19th century people panned for gold (flakes of gold in the Alpine gravel) in the streams of the Napf valleys, and a few still do it as a tradition. Emmental cheese has been made since the Middle Ages and is now a protected designation-of-origin product.",
  },

  "aare-river": {
    // seeing sources: 「完全在瑞士境内最长的河」这个限定语准确。长度：正文 288 公里，联邦环境局（BAFU）数据 292 公里，差约 1.4% —— **属不同测量方法与取点的差异，不构成矛盾，本轮判定不改**（同批伯尔尼纳峰 4048 vs 4049 的处理方式）。汇合处阿勒河约 557 立方米每秒 > 莱茵河约 439，「支流大于干流」核实属实。第一次朱拉水域治理 1868–1891（哈格内克运河改道、布罗耶河与齐尔河渠化、尼道-比伦运河），伯尔尼州官方页（级别 1）。2026-09-09 核，本轮无需改动。
    //   https://www.bvd.be.ch/de/start/themen/wasser/gewaesserregulierung/juragewaesserkorrektion.html
    seeing:
      "The Aare is the longest river entirely within Switzerland, about 288 km (the Rhine and Rhône are longer but leave the country). It starts at the Aar glaciers in the Bernese Alps, passes through Lake Brienz and Lake Thun, loops almost all the way around the old city of Bern in a meander, then flows past Solothurn and Aarau and finally joins the Rhine. Notably, at the confluence the Aare actually carries more water than the Rhine.",
    formation:
      "The upper Aare is in the high Alps, its valley a glacially deepened trough; Lake Brienz and Lake Thun are two glacial lakes in that trough separated by a moraine dam, with Interlaken a patch of alluvial flat between them. Beyond the mountains, on the Swiss Plateau, the Aare meanders over soft molasse and glacial deposits, shaping a broad valley, meanders and river terraces — the old city of Bern is built on a terrace inside a meander loop, wrapped by the river on three sides and raised above it, easy to defend.",
    observation:
      "From the air the upper Aare is a grey-green (glacially silty) river in a mountain valley, threading two large turquoise lakes; the middle and lower reaches are a strongly meandering river on the Swiss Plateau, between farmland, towns and forest, with Bern's almost complete meander loop especially striking. Where it joins the Rhine, the two rivers differ visibly in colour and volume.",
    distinguish:
      "The Aare differs from the Rhône and the Rhine in \"whether it leaves the country\": the Aare is Swiss from source to mouth, one of Switzerland's \"mother rivers\"; the other two only flow through Switzerland for a stretch. The case of \"the tributary being bigger than the main river\" (Aare vs Rhine) is not uncommon among the world's rivers, depending on which has the larger, wetter basin.",
    concept:
      "Bern's meander loop is a case study in meanders and defended town sites: a river on a gentle valley floor swings freely, the bends growing larger, sometimes almost closing into a loop with only a narrow \"neck\" left. People often choose such a place — wrapped by the river on three sides and raised above it — to build a town: a natural moat plus high ground, easy to defend. To recognise this kind of site, look at whether the old town sits on high ground inside a meander loop. A common misconception is that a meander loop is dug by people.",
    history:
      "Bern was founded (1191) taking advantage of the natural defence of the Aare meander loop. In the Middle Ages the Aare and its canals were an important route for water transport and water power on the Swiss Plateau. The 19th-century \"Jura water correction\" diverted part of the Aare's water into Lake Biel and other lakes for storage, greatly reducing flooding on the Seeland plain — one of the earlier large-scale river-basin regulation schemes in Europe.",
  },

  "alpine-rhine": {
    // seeing sources: 1868-09-28 大洪水、1892 年瑞奥第一份跨国治理条约、Rhesi 为第四份国家条约（约 10 亿瑞郎、约 20 年工期、核心是拓宽河道）：联邦环境局公告（级别 1）+ 2 级报道。另有资料提及 1888/1890 年洪水也是促成因素，与 1868 年的记载不矛盾。**跨境「界河」表述复核通过**：只陈述客观地理事实，不涉边界线走向与主权。2026-09-09 核，本轮无需改动。
    //   https://www.bafu.admin.ch/bafu/de/home/themen/wasser/mitteilungen.msg-id-101064.html
    seeing:
      "The Alpine Rhine is the upper course of the Rhine within Switzerland. It forms from the meeting of the \"Vorderrhein\" and the \"Hinterrhein\" at Reichenau near Chur, then flows north through a straight, broad valley (this reach is the border between Switzerland and Liechtenstein and Austria) and into Lake Constance. The river you see today is dead straight, held between high embankments — the result of large-scale engineering since the 19th century.",
    formation:
      "The Alpine Rhine valley is a large U-shaped trough gouged by a glacier; after the ice retreated the river braided across the broad flat floor and flooded frequently, the floor a wide expanse of marsh and gravel bar. From the late 19th into the 20th century Switzerland and Austria together straightened the channel, embanked it, reinforced the bed (including cutting an artificial new mouth into Lake Constance), turning the valley floor into farmland and towns. The upstream Vorderrhein, meanwhile, cut a deep gorge at the Ruinaulta (given its own entry).",
    observation:
      "From the air the lower Alpine Rhine is an unusually straight grey river between the Alps, held between two parallel embankments, with a grid of farmland, industrial areas and towns on either side, the valley floor as flat as if it were engineered. The high mountains on the two sides of the valley belong to three countries. At the mouth into Lake Constance you can see a growing delta. Around Reichenau upstream you can see the two source rivers (one turbid, one clear) meeting.",
    distinguish:
      "The Alpine Rhine and the Aare are both large Swiss rivers, but the Aare is entirely in Switzerland and known for its natural big meanders; the Alpine Rhine is a border river whose lower reach is almost completely straightened and embanked. It belongs to the same category as the engineering of the Po in Italy and the Rhône in Switzerland — \"taming\" a braided, flooding mountain-front river into a single fixed channel.",
    concept:
      "The Alpine Rhine is a case study in river channelisation (straightening and embanking): a river braiding across a broad valley can be compressed by people into a straight, deep single channel by cutting off bends, building embankments and fixing the bed — the benefits are flood control, freed-up farmland and easier navigation; the costs are the river losing contact with its floodplain, ecological decline, and sediment possibly building up downstream or at the mouth. To recognise a channelised river, look at whether it is unusually straight, with continuous artificial embankments and a uniform width. A common misconception is to take such a straight river for a natural one.",
    history:
      "The engineering of the Alpine Rhine has been a long-running joint project between Switzerland and Austria, beginning with the first state treaty in 1892. The valley was historically severely flood-prone, and a great flood in 1868 prompted the transnational works. In recent years projects such as \"Rhesi\" (Rhine – Future) are discussing widening the channel to give floods more space.",
  },

  "rhine-falls": {
    // seeing sources: 宽约 150 米、落差约 23 米、平均流量 370–373 立方米每秒（夏季峰值约 600、冬季约 250）。**「按水量和宽度的组合算，欧洲最大的瀑布之一」这个限定本轮专门查过：准确且必要** —— 与冰岛黛提瀑布是两个口径（那边落差更大、单点流量峰值更强），本批冰岛 dettifoss 条目的写法与此互相印证、不打架。两岸城堡 Schloss Laufen / Schlössli Wörth 的存在、位置与功能描述均对（中文「沃尔特城堡」是 Wörth 的转写风格问题，不是事实错误）。2026-09-09 核，本轮无需改动。
    seeing:
      "The Rhine Falls, near Schaffhausen in northern Switzerland, are about 150 m wide with a drop of about 23 m and an average flow of about 370 m³/s. By the combination of flow and width, they are one of the largest waterfalls in Europe. In the middle of the falls stands a rock worn down to a single stack, which visitors can reach by boat and climb. The flow is greatest in the snowmelt season (early summer), and the roar and spray can be felt from far off.",
    formation:
      "The Rhine Falls are a \"young\" waterfall. In the ice ages the Rhine Glacier from the Alps pushed the Rhine off its earlier, more southerly course, and after the ice retreated the river flowed along a new line that happens to cut straight across a bar of hard Jurassic limestone. The soft riverbed was undercut and retreated, the hard limestone bar was left as a step, and a waterfall formed. All of this happened over the last ten or twenty thousand years — very recent in geological time.",
    observation:
      "From the air the Rhine Falls are where the Rhine suddenly narrows from a gentle broad channel and drops over a white curtain of water spanning the whole river; above the falls is green water and the outskirts of Schaffhausen, below them the water churns in a deep pool ringed by rock walls and then broadens again to flow east. The isolated rock stack in the middle of the falls and the castles on both banks (Laufen and Schloss Wörth) stand out.",
    distinguish:
      "The Rhine Falls and Dettifoss in Iceland are both often called \"Europe's largest / most powerful waterfall\" — by different measures: Dettifoss has a bigger drop, is on a glacial river, and is desolate; the Rhine Falls have a smaller drop but are very wide, high-flow, and in a densely populated area with many visitors. Like Niagara Falls, both are young waterfalls formed where an ice-age-diverted river cuts across hard rock, and both are slowly retreating upstream.",
    concept:
      "The Rhine Falls are a case study in \"ice-age diversion plus cutting across hard rock equals a young waterfall\": a glacier pushes a river off its old course, and where the new course cuts straight across a layer of hard rock, a step and a fall form at the hard rock. To recognise this kind of waterfall, look at whether it sits on a \"new\" stretch of channel out of keeping with the surrounding terrain, right where a hard rock outcrop crosses it. A common misconception is that big waterfalls are all ancient.",
    history:
      "The Rhine Falls have been an obstacle since the Middle Ages — goods had to be unloaded here, carried past the falls by land, and reloaded. In the 19th century the falls became a must-see of Romantic travel, visited by Goethe, Byron and others. The water power was harnessed early (mills, later a hydro station). Today they are one of the most-visited natural attractions in Switzerland.",
  },

  "aareschlucht": {
    // seeing sources: 长约 1400 米、最深约 200 米、最窄处约 1 米；1888-04-05 取得开凿特许权、同年开放，1912 年加装夜间照明（官方站，2 级）。**「学界至今仍在讨论细节」这句留白是对的**：实际形成史比正文描述更复杂（基尔谢特岩坎在多个间冰期反复被切出新峡谷又被冰碛填埋，另有 5 条更古老的旧峡谷），正文用免责措辞简化处理是恰当的，不需要展开。2026-09-09 核，本轮无需改动。
    //   https://aareschlucht.ch/de/Info/aareschlucht/geschichte
    seeing:
      "The Aare Gorge (Aareschlucht), near Meiringen in central Switzerland, is an extremely narrow, deep limestone gorge the Aare cut through a bar of hard rock called the \"Kirchet\" — about 1.4 km long, up to about 200 m deep, and at its narrowest only about 1 m between the walls. A boardwalk hung against the rock wall was built here in 1888, making it one of the first gorges in Switzerland opened to visitors.",
    formation:
      "The Aare Gorge formed in a slightly unusual way, and the details are still debated. The basic picture: where the Aare comes out of the Hasli valley upstream, the Kirchet — a bar of hard limestone — lay across its path, and the river (very likely during or after the last ice age, helped by glaciers and large volumes of meltwater) cut down hard along a fracture in this bar, sawing straight through it and carving this narrow, deep slot. There are potholes and water-carved rounded hollows in the gorge, marks of fast-flowing erosion.",
    observation:
      "From the air the Aare Gorge is almost invisible — it is too narrow, showing from above only as a thin black seam in the valley, flanked by the forest-covered Kirchet knoll. Only inside the gorge can you see the Aare churning in a dark, sunless cleft of limestone, the boardwalk winding along the wet rock. Upstream is the broad Hasli valley; downstream the river opens out again.",
    distinguish:
      "The Aare Gorge and the Lauterbrunnen Valley are both in the Bernese Alps, but Lauterbrunnen is a broad U-shaped glacial trough known for its hanging-valley waterfalls; the Aare Gorge is a V-shaped (almost I-shaped) slot cut down by a river into hard rock — an extreme form of fluvial erosion. It is similar to Cheddar Gorge — both are water cutting fast through hard rock under special conditions.",
    concept:
      "The Aare Gorge is a case study in the vertical versus lateral cutting of a river: when a river cuts down concentratedly along a fracture and the rock on both sides is hard enough that there is almost no lateral erosion, the valley grows deep and narrow — depth far greater than width, forming a slot gorge. To recognise this kind of valley, look at whether the ratio of valley depth to width is extreme and whether the walls are hard solid rock. A common misconception is that all river valleys widen over time.",
    history:
      "The Hasli valley on the two sides of the Kirchet bar was historically the route toward the Grimsel Pass and into Valais. The Aare Gorge was opened by locals with a boardwalk in 1888, a walking route of a little over a kilometre of planks and iron bridges hung against the rock wall, maintained for over a century. The \"Reichenbach Falls\" of the Sherlock Holmes stories are near Meiringen, close by.",
  },

  "ruinaulta": {
    // seeing sources: 长 13–14 公里、深 350–400 米（正文取区间下端）；弗利姆斯滑坡体积学界引用 8–12 立方公里，正文覆盖该范围。年代：**最新地表暴露测年约 9300–9500 年前**，比正文的「大约一万年前」略新，但瑞士旅游局等官方页仍用「10,000 years ago」这个约数 —— 属科普与学术两个精度层级的落差，本轮判定不构成矛盾、不改；**下一轮若要提高精度，可改成「约 9500 年前」**。「瑞士大峡谷」是通俗别称（瑞士旅游局自己也这么用），正式名是罗曼什语 Ruinaulta / 德语 Rheinschlucht，正文没有把它当正式名。2026-09-09 核。
    //   https://www.myswitzerland.com/en-us/experiences/ruinaulta-switzerlands-grand-canyon/
    seeing:
      "The Ruinaulta (Romansh, roughly \"the high landslide\"), also called the \"Rhine Gorge\" or the \"Swiss Grand Canyon\", is in eastern Switzerland west of Chur. The Vorderrhein has cut a gorge about 13 km long and up to about 350 m deep here, its walls bright white limestone and dolomite, the floor a turquoise river and white gravel bars. The Rhaetian Railway and a footpath run through the gorge; there is no road.",
    formation:
      "The \"raw material\" of the Ruinaulta is a huge landslide. About 10,000 years ago the mountainside around Flims collapsed, and about 8 to 12 cubic kilometres of rock slid down the valley — one of the largest known landslides in the Alps. The debris dammed the Vorderrhein, forming a lake upstream. Since then the river has overtopped the debris dam and cut down through the debris, over roughly 10,000 years carving today's deep gorge — its walls are actually landslide debris (compacted, partly cemented breccia), not bedrock in place.",
    observation:
      "From the air the Ruinaulta is a winding white slash cut deep into a forest-covered upland in Graubünden, the Vorderrhein meandering strongly along the gorge floor with white gravel bars of varying width beside it. Around Flims and Laax upstream, the terrain is visibly \"jumbled\" — chaotic hills, closed hollows and a few small lakes — the surface of the landslide body.",
    distinguish:
      "The Ruinaulta and the Aare Gorge are both deep Swiss gorges, but the Aare Gorge is a narrow slot cut by a river into hard bedrock; the Ruinaulta is a valley cut by a river into a huge mass of landslide debris, its walls \"rubble\" rather than solid rock, so it collapses more easily and the gorge is wider. Like Jökulsárgljúfur in Iceland, it is a river cutting fast down through \"not-in-place\" loose material (a debris dam / lava).",
    concept:
      "The Ruinaulta is a case study in a landslide dam and post-breach downcutting: a large landslide blocks a valley, water ponds upstream as a lake; once the dam is overtopped or fails by seepage, the river cuts down hard through the dam body, often carving a deep gorge over a few thousand to ten thousand years, with the gorge walls made of landslide debris. To recognise this kind of gorge, look at whether the walls are chaotic breccia, whether there are old lake sediments upstream, and whether the surrounding terrain is a large \"jumbled\" area. A common misconception is to take the debris in the gorge walls for in-place sedimentary rock.",
    history:
      "The debris of the Flims landslide still forms the local ground — resorts such as Flims and Laax are built on the landslide body, and springs such as Caumasee's emerge from the debris. Because the Ruinaulta has no road and can only be entered by train, boat or on foot, it has stayed relatively pristine, and has been a nationally protected landscape since the 2000s.",
  },
};
