import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Belgium ============
  "hautes-fagnes": {
    // seeing sources: 地名：**Signal de Botrange** —— Botrange 是地名，与「植物园」无关，原中文「植物园峰」是望文生义的误译。694 m、比利时最高点属实。**英文侧一直写的是 Signal de Botrange**，只有中文错。2026-09-10 核。
    seeing:
      "The Hautes Fagnes (High Fens) is a peat-bog plateau in the eastern Ardennes; its highest point, the Signal de Botrange, reaches 694 m — the highest point in all of Belgium.",
    // formation sources: ⚠️ 成因**漏掉了定义性的一步**：泥炭增厚后根系脱离地下水与径流、转为完全靠降水补给（ombrotrophe），才是高位沼泽区别于一般泥炭地的判据（列日大学高地沼泽科考站，2 级）。
    //   **这与爱尔兰 `central-lowlands-bog-of-allen` 是同一个漏法、同一个判据，第二次了** —— 同类地貌在不同国家各漏一次，说明写的时候没有一份共用的判据清单。2026-09-10 核。
    formation:
      "The plateau surface is covered in a thick layer of peat that built up on poorly drained quartzite; as the peat thickened, plant roots lost contact with groundwater and runoff until rainfall alone fed the bog — the defining step that makes it an ombrotrophic raised bog. The cold climate since the last ice age has also left distinctive periglacial landforms, including polygonal ground and freeze-thaw structures.",
    observation:
      "From the air, the Hautes Fagnes shows a broad, gently rolling plateau outline, its surface covered in dark-brown peat bog and sparse scrub vegetation, in sharp contrast with the densely forested Ardennes around it.",
    distinguish:
      "Both the Hautes Fagnes and the Ardennes Forest Uplands belong to the Ardennes system, but the Hautes Fagnes is the highest point, an open peat-bog plateau, while the Ardennes Forest Uplands are the far more extensively forested hilly terrain around it.",
    concept:
      "The periglacial landforms preserved in the Hautes Fagnes are an important reference site for studying north-west Europe's last-ice-age palaeoclimate; the peat layers record thousands of years of climate and vegetation change.",
    history:
      "Cold, wet and exposed, the Hautes Fagnes was historically sparsely visited; today it is an important Belgian nature reserve, with boardwalk trails helping protect its fragile peat ecosystem.",
  },

  condroz: {
    // 全六段 sources: 砂岩山脊（tiges）与石灰岩谷地（chavées）相间——山脊为晚泥盆纪砂岩、谷地为迪南期石灰岩；
    //   阿登孔德罗兹段平均海拔约 260 m，北邻黑斯拜、东邻阿登。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Condroz is a gently undulating plateau in Wallonia, lying between the Ardennes and the Sambre-Meuse valley, generally 200–300 m in elevation.",
    formation:
      "The plateau's surface is made up of alternating sandstone and limestone ridges, shaped by long-term differential erosion of Paleozoic rock — harder sandstone layers form the ridges, while softer layers are worn into valleys.",
    observation:
      "From the air, the Condroz shows a regular pattern of alternating ridges and valleys, with farmland and hedgerows running along the ridge lines — a clear marker for identifying this plateau.",
    distinguish:
      "The Condroz neighbours the Fagne-Famenne depression, but the Condroz sits higher and is defined by its ridged terrain, while the Fagne-Famenne is a low depression squeezed between two higher plateaus.",
    concept:
      "The Condroz's ridge-and-valley terrain is a textbook case of differential erosion — harder rock resists erosion and gradually stands out as ridged high ground.",
    history:
      "The Condroz has long been an important agricultural area, its gentle relief well suited to farming; it remains an important agricultural and wine-growing region of Wallonia today.",
  },

  "ardennes-forest": {
    // history sources: ✅ **判定不改，记在这里免得下一轮反复。** 核实方报「阿登战役（突出部之役）」踩红线，
    //   但它给的依据是「任务指令本身」——那是我在派工 prompt 里写的黑名单，不是查出来的。
    //   按仓库自己的判据：CLAUDE.md 对意大利明文允许「一战山地战（简短事实）」，越南那两处也判过保留，
    //   判据是「是否涉及一个仍在持续的对立状态、有没有评价性表述」。阿登这一句两条都不沾，**保留**。
    //   （对照上一轮删掉的琉球那句：那是关于战役的**最高级排名**、且与至今仍在进行的讨论缠绕，才删。）2026-09-10 核。
    // 其余 sources: 平均海拔 350—400 m；基岩为经加里东与海西造山变形的古生代变质岩（3 级）。verdict: ok。
    seeing:
      "The Ardennes is the extensive forested upland spanning south-eastern Belgium and the borders of Luxembourg, France and Germany; within Belgium it averages 350–400 m elevation, its highest point being the Hautes Fagnes peat plateau.",
    formation:
      "The upland's bedrock is mainly Paleozoic metamorphic rock, deformed by the Caledonian and Variscan orogenies; after long-term uplift it was subsequently cut into steep valleys by rivers.",
    observation:
      "From the air, the Ardennes Forest Uplands show a rolling, deep-green, densely forested landscape, in sharp contrast with the flat, open farmland of northern Belgium; rivers have carved deep valleys through the upland.",
    distinguish:
      "Both the Ardennes Forest Uplands and the Hautes Fagnes belong to the Ardennes system, but the Ardennes Forest Uplands are broadly forested rolling hills, while the Hautes Fagnes is the highest point, an open peat-bog plateau.",
    concept:
      "The landform evolution of the Ardennes Forest Uplands reflects an old orogenic belt that, after long uplift, was subsequently re-incised by rivers — a case study in the \"rejuvenation\" of ancient mountain landscapes in north-west Europe.",
    history:
      "The rugged, densely forested Ardennes was historically relatively isolated; the Battle of the Bulge in the closing stages of the Second World War was fought in this forested terrain. Today it is an important forest and outdoor-recreation resource for Belgium.",
  },

  "pays-de-herve": {
    // 全六段 sources: 位于韦斯德河与默兹河之间、近比荷德三国交界的低缓丘陵；树篱果园牧场与埃尔沃奶酪属实。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Pays de Herve, lying between the Vesdre and Meuse rivers, is a low, gentle hill country known for its hedgerow-lined orchards and pastures.",
    formation:
      "The hills are gently sloped with fertile soil; long-term agricultural use has shaped a pastoral landscape of hedge-divided meadows interspersed with orchards.",
    observation:
      "From the air, the Pays de Herve shows classic pastoral hill country — broad meadows divided into irregular plots by hedgerows, orchards scattered throughout, in contrast with the densely forested Ardennes.",
    distinguish:
      "Both the Pays de Herve and the Hageland are low Belgian hill regions, but the Pays de Herve is known for its orchard-pasture landscape and cheesemaking, while the Hageland is defined by its regularly aligned ironstone ridges.",
    concept:
      "The hedgerow-lined pastoral landscape of the Pays de Herve is a representative example of traditional European agricultural land use, this style of field division helping with windbreak, soil retention and biodiversity.",
    history:
      "The Pays de Herve is the source of Belgium's traditional Herve cheese, its pastoral and cheesemaking traditions continuing for centuries.",
  },

  hageland: {
    // seeing/observation sources: 山脊走向 —— 法兰德斯不动产遗产局两篇官方文本互相矛盾（2016 西北—东南 / 2021 西南—东北），均非东西走向；正文改为不写具体走向，待查 DOV Vlaanderen 第四纪地层图。狄斯特砂层为晚中新世海相沉积、含海绿石铁质砂岩抗蚀成脊（同机构，1 级）。核实 2026-09-10
    seeing:
      "The Hageland, in the eastern part of Flemish Brabant, is made up of a series of parallel, consistently aligned ironstone-sandstone ridges — not high, but regularly spaced.",
    formation:
      "These ridges are landform remnants left by differential erosion of Miocene Diest Sands; the iron-bearing sandstone layers resist erosion better than the surrounding rock, gradually standing out as ridged high ground.",
    observation:
      "From the air, the Hageland shows several parallel ridges, running in a consistent direction, alternating with valleys — the most recognisable landform feature of this area.",
    distinguish:
      "Both the Hageland and the Condroz are defined by ridge-and-valley terrain, but the Hageland's ridges are built of smaller-scale Miocene iron-bearing sandstone, while the Condroz's ridges are older sandstone and limestone spread over a wider area.",
    concept:
      "The Hageland's parallel ridges are a textbook case of differential erosion of Miocene sediment, illustrating how iron-bearing minerals can increase a rock layer's resistance to erosion.",
    history:
      "The Hageland has historically been known for viticulture and hill farming, with old towns such as Diest and Aarschot sited in the valleys between the ridges.",
  },

  campine: {
    // formation / history sources: 历史上大片荒原／湿地景观（至 1960 年代前）；战后坎皮讷煤田开采带动工业；多处军事基地与空军基地。
    //   ⚠️ distinguish 的「是默兹—莱茵三角洲的一部分」**记 unknown**：这是常见的第四纪地质学表述，但找不到 1/2 级来源直接印证。
    //   下一轮核佛兰德／比利时地质调查局的第四纪地层分类。3 级。2026-09-10 核。
    // seeing sources: 成因归属：佛兰德地质数据库 DOV（1 级）与 Springer《The Campine Plateau》专章（2 级同行评议）都写「默兹河与莱茵河的第四纪辫状河／河流阶地沉积」（Lommel 砂 / Winterslag 砂 / Zutendaal 砾石），不是「三角洲」——delta 在地质学里特指河流入海或入湖处的沉积体。原文「是默兹—莱茵三角洲的一部分」查无官方出处，已改。2026-09-12 核。⚠️ 上一轮注释把这句记在 distinguish 段，实际一直在 seeing 段（中英都是）——字段记错会让下一轮误判「正文已无此表述」。
    seeing:
      "The Campine (Kempen) is a low, flat sandy upland straddling north-eastern Belgium and southern Netherlands, built from Quaternary braided-river deposits of the Meuse and Rhine.",
    formation:
      "The upland surface is covered in Quaternary wind-blown and river-deposited sandy soil; historically poor drainage produced extensive heathland, dunes and wetlands.",
    observation:
      "From the air, the Campine shows flat terrain with widespread sandy soil; the historical heath and wetland has largely been replaced by forest, farmland and plantation, though scattered patches of dune and heath remain.",
    distinguish:
      "Both the Campine and the Plain of Flanders are low-lying Belgian regions, but the Campine is an inland sandy upland sitting slightly above its surroundings, while the Plain of Flanders is a coastal, clay-based alluvial plain lying even lower.",
    concept:
      "The Campine's sandy soil and heathland landscape is a textbook example of wind-blown deposition on the periphery of the Quaternary ice sheets, reflecting the depositional environment at the margin of the last ice age.",
    history:
      "The Campine's poor soil and late development preserved extensive heathland; from the 20th century, coal mining and the establishment of military training grounds changed some of the area's land use.",
  },

  "flanders-coastal-plain": {
    // formation sources: 围垦历史、粘质海相沉积、圩田景观与常见地理文献一致。
    //   ⚠️ 「向内陆延伸约 8 至 16 公里」**记 unknown**：查不到 1/2 级来源核实这个具体区间（VLIZ 的 PDF 体积过大未能读取）。
    //   下一轮核 Agentschap voor Natuur en Bos 或 VLIZ；核不到就改成不带具体公里数的表述。2026-09-10 核。
    // seeing sources: 宽 10–20 km（Kustportaal，2 级）。核实 2026-09-12
    seeing:
      "The Plain of Flanders is an extremely flat coastal plain in north-western Belgium, extending inland for roughly 10–20 km.",
    formation:
      "The plain's soil is mostly clay-based marine sediment, historically reclaimed from the sea through diking and drainage — producing the polder landscape seen today, much of it at or below sea level.",
    observation:
      "From the air, the Plain of Flanders shows a regular grid of farmland crossed by a network of drainage canals, flat and open, in sharp contrast with the sandy upland of the inland Campine.",
    distinguish:
      "Both the Plain of Flanders and the Campine are low-lying Belgian regions, but the Plain of Flanders is reclaimed clay polder land bordering the coast, while the Campine is an inland sandy upland.",
    concept:
      "The polder drainage system of the Plain of Flanders illustrates the classic engineering practice of the Low Countries: reclaiming land from the sea and maintaining it as farmland through dikes and drainage.",
    history:
      "Reclamation of the Plain of Flanders dates back to the medieval period; centuries of dike-building and drainage works gradually transformed the original mudflats and wetlands into today's farmland.",
  },

  "fagne-famenne": {
    // 全六段 sources: 南缘为卡雷斯蒂耶讷（Calestienne）石灰岩条带，北邻孔德罗兹、西邻阿登边缘；主体为较软的泥盆纪页岩经差异侵蚀而成。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Fagne-Famenne is a long, narrow depression squeezed between the Condroz plateau and the Ardennes.",
    formation:
      "The depression was carved by differential erosion of softer Devonian shale; its southern edge is the Calestienne limestone belt — the most concentrated karst landscape in Belgium.",
    observation:
      "From the air, the Fagne-Famenne shows a comparatively gentle, open valley landscape, with bands of forest and pasture interspersed; along its southern edge, patches of exposed limestone cliff and cave entrances appear.",
    distinguish:
      "The Fagne-Famenne sits right beside the Condroz but has the opposite relief — the Fagne-Famenne is a low depression, while the Condroz is a comparatively raised ridged plateau.",
    concept:
      "The Fagne-Famenne is a textbook example of differential erosion preferentially stripping softer rock to form a valley; its southern Calestienne limestone belt illustrates how differing rock types within the same region shape landform differently.",
    history:
      "With its gentle relief and well-developed drainage, the Fagne-Famenne has long suited farming and pastoralism; towns such as Rochefort are sited along the depression, and the cave systems along its southern edge have been used by humans since ancient times.",
  },

  "meuse-valley-be": {
    // 其余 sources: 迪南、那慕尔、于伊、列日沿河而建，两岸石灰岩崖壁——与已核的孔德罗兹／阿登石灰岩边缘位置关系一致。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Meuse Valley is the stretch of the Meuse River flowing through Belgium, cutting through the limestone at the edge of the Condroz and Ardennes plateaus, with steep cliffs on both banks.",
    formation:
      "The valley was carved by long-term erosion of the surrounding highlands by the Meuse; the steep limestone cliffs along the river result from the combined effect of river downcutting and the rock's resistance to erosion.",
    observation:
      "From the air, the Meuse Valley shows a winding river hemmed in by steep cliffs on both sides — a gorge-like valley landform; historic towns including Dinant, Namur, Huy and Liège are built along the river, their urban outlines closely following the channel.",
    distinguish:
      "Both the Meuse Valley and the Lesse Valley are limestone valleys in Belgium, but the Meuse Valley is much larger, running through multiple plateau regions, while the Lesse Valley is a smaller karst valley cut by a Meuse tributary.",
    // concept sources: 流域占比：比利时约 40%—41%（份额最大的一国），法国约 26%—28%、荷兰约 19%—23%、德国约 6%—12%。原文「绝大部分」/ the great majority 夸大。3 级。2026-09-10 核。
    concept:
      "Belgium holds the largest single share of the Meuse's drainage basin — roughly 40 per cent; the Meuse Valley is a textbook case study of a river cutting through multiple rock types to form a composite landform.",
    history:
      "Towns along the Meuse Valley such as Dinant and Namur have been important trading and defensive strongholds since medieval times, and the valley still preserves numerous castles and fortress ruins along its banks.",
  },

  "semois-valley": {
    seeing:
      "The Semois runs about 210 km, rising near Arlon and flowing north through the Ardennes before turning west; its channel winds through shale bedrock in a series of extremely deep meanders.",
    formation:
      "The river's long-term erosion of shale bedrock has carved deep incised meanders; its slopes are covered in beech and oak forest, the most striking example of meander development among Ardennes river landforms.",
    observation:
      "From the air, the Semois Valley shows an extraordinarily winding channel, a succession of deeply incised meanders cradling terraces and villages within the valley — the forested slopes and looping river form an especially distinctive scene.",
    distinguish:
      "Both the Semois Valley and the Ourthe Valley are important Ardennes river valleys, but the Semois Valley is known for its extreme, deeply incised meanders, while the Ourthe Valley's channel is comparatively less winding.",
    concept:
      "The deeply incised meanders of the Semois Valley are a textbook case study in \"entrenched meander\" landforms, formed by the combined effect of lateral and downward river erosion.",
    // history sources: 塞穆瓦河谷国家公园与桑布尔—默兹之间国家公园同为瓦隆大区 2023-01-01 生效的首批国家公园，无先后；核实 2026-09-10
    history:
      "Historic towns such as Bouillon line the Semois Valley; in 2023 most of the valley was designated one of Wallonia's first two national parks, strengthening protection of this landscape.",
  },

  "ourthe-valley": {
    // 全六段 sources: 阿登基岩为早古生代加里东轻变质板岩/千枚岩/石英岩；乌尔特河全长约 165 km、流域约 1884 km²，韦斯德河与昂布利沃河都是它的支流（在 Chênée 汇入），故「主干河谷、规模更大」的比较成立且只针对韦斯德河谷、不是全库排他性断言；拉罗什昂阿登 844 年建首座城堡、11–12 世纪重建（connaitrelawallonie.wallonie.be，1 级）。核实 2026-09-10，未改动
    seeing:
      "The Ourthe Valley is one of the principal river valleys of the Ardennes; the Ourthe cuts through the plateau's ancient metamorphic bedrock, with steep, densely forested slopes.",
    formation:
      "The valley was carved by long-term downcutting of the Ardennes' ancient metamorphic bedrock by the Ourthe; its slopes are steep, and old towns sit on terraces cradled within the river's meanders.",
    observation:
      "From the air, the Ourthe Valley shows a deeply cut valley outline, its forested, steep slopes set off against the winding river channel; La Roche-en-Ardenne and other old towns are built on terraces embraced by the river's meanders.",
    distinguish:
      "Both the Ourthe Valley and the Vesdre Valley are important Ardennes valleys, but the Ourthe Valley is the Ardennes' principal trunk valley, larger in scale, while the Vesdre Valley is a comparatively narrow tributary valley along the Ardennes' northern edge.",
    concept:
      "The Ourthe Valley illustrates how the Ardennes' ancient metamorphic bedrock has been re-incised by a modern river to form a deep valley — a landform evolution case study.",
    history:
      "Old towns such as La Roche-en-Ardenne, sited on naturally defensible terraces within the river's meanders, have been important castle strongholds since medieval times, and ruins remain today.",
  },

  "vesdre-valley": {
    // 全六段 sources: 韦斯德河源出比德边境一带高原沼泽，经厄本、韦尔维耶在 Chênée 汇入乌尔特河（crvesdre.be，2 级）；韦尔维耶呢绒业可溯至 15 世纪，18 世纪飞梭之后成核心产业带，河水酸性适合洗毛脱脂是选址关键 —— 正文「发源地之一」带了限定语，不构成排他性断言。核实 2026-09-10，未改动
    seeing:
      "The Vesdre Valley is a narrow valley cut by the Vesdre River through the ancient metamorphic bedrock at the northern edge of the Ardennes, historically one of the birthplaces of Belgium's woollen textile industry.",
    formation:
      "The valley was carved by long-term downcutting of the ancient metamorphic bedrock at the northern edge of the Ardennes by the Vesdre; the valley is comparatively narrow, with steep terrain on both sides.",
    observation:
      "From the air, the Vesdre Valley shows a narrow, steep-sided valley outline; industrial towns such as Verviers are built along the river, their buildings densely packed into the limited valley floor.",
    distinguish:
      "Both the Vesdre Valley and the Ourthe Valley are valleys along the northern edge of the Ardennes, but the Vesdre Valley is narrower and historically known for its textile industry, while the Ourthe Valley is comparatively broad and known for its scenery and old towns.",
    concept:
      "The narrow valley space of the Vesdre Valley shaped a distinctive urban form of densely packed riverside factories in the industrial era — a case study in the relationship between valley terrain and early industrial location.",
    history:
      "The Vesdre Valley has been the core of Belgium's woollen textile industry since the 18th century; Verviers grew into an important industrial city as a result, the river's water power and supply being the key factor in the industry's location there.",
  },

  "lesse-valley": {
    // 全六段 sources: 与本库已核的 han-sur-lesse-caves（莱斯河约 50 万年前改道穿入布万山体、2 km 外重新出露）及 fagne-famenne（卡雷斯蒂耶讷石灰岩条带位置）并排读一致；与 viroin-valley 的对比（后者以地表裸露崖壁为主）也与该条目自身描述互相印证。核实 2026-09-10，未改动
    seeing:
      "Along the stretch where it crosses the Calestienne limestone belt, the Lesse has carved a classic karst valley landform, its channel flanked by limestone cliffs and underground streams.",
    formation:
      "The valley was carved by long-term dissolution and erosion of limestone by the Lesse; part of the river's course runs underground before resurfacing some distance further on.",
    observation:
      "From the air, the Lesse Valley shows classic karst-valley form — exposed limestone cliffs, dissolution hollows and surface channel alternating along its length, a clear marker for identifying this karst area.",
    distinguish:
      "Both the Lesse Valley and the Viroin Valley are karst valleys on the Calestienne limestone belt, but the Lesse Valley is better known for its underground streams and cave system (the Caves of Han-sur-Lesse), while the Viroin Valley is defined mainly by its exposed cliffs and surface gorge scenery.",
    concept:
      "The Lesse Valley illustrates the complete karst hydrological process by which a limestone river's surface flow diverts underground and later resurfaces.",
    history:
      "The Caves of Han-sur-Lesse near the Lesse Valley have been used by humans since ancient times, with Bronze Age and Stone Age remains found there attesting to a long history of human activity in this area.",
  },

  "ambleve-gorge": {
    seeing:
      "The Amblève Gorge is a stretch of valley cut by the Amblève River through the eastern Ardennes; the Coo Waterfall within the gorge is one of Belgium's better-known falls.",
    // formation/concept/history sources: 截弯改道为史实，目的在法语来源中分为「供磨坊」与「防洪保村」两说，本库不再择一断言；核实 2026-09-10
    formation:
      "The gorge was carved by long-term erosion of the eastern Ardennes bedrock by the Amblève; the Coo Waterfall within it is not natural but was created artificially in the 18th century, when local monks cut through a river bend, producing a drop of about 15 m; accounts differ as to why, some saying it fed an abbey watermill, others that it protected the village inside the bend from flooding.",
    observation:
      "From the air, the Amblève Gorge shows a deeply cut, forest-ringed valley outline; the Coo Waterfall's vertical white curtain of water stands out sharply against the green slopes, marking this stretch of gorge unmistakably.",
    distinguish:
      "Unlike Alpine gorges such as Liechtensteinklamm in Austria, the Amblève Gorge's Coo Waterfall is not purely natural but the product of a historical artificial diversion, and its drop is far smaller than the large falls of the Alps.",
    concept:
      "The Coo Waterfall is a case study in how humans have historically modified river terrain, illustrating pre-industrial artificial cut-through of a natural river meander.",
    history:
      "The Coo Waterfall takes its name from an 18th-century channel diversion built by local monks; today it is an important tourist attraction in the Belgian Ardennes, and a pumped-storage power station nearby makes use of the local elevation drop.",
  },

  "han-sur-lesse-caves": {
    // 全六段 sources: 主厅「穹顶大厅」宽约 150 m、拱顶高约 127 m；约 50 万年前莱斯河改道形成；洞内常温约 13 ℃；
    //   至少自公元前 5 世纪起被人类利用；现代系统探索始于 1771 年——**逐项与来源逐字一致**。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Caves of Han-sur-Lesse formed roughly 500,000 years ago when the Lesse diverted its course into the limestone of Mont Boine; the main chamber, the \"Salle du Dôme,\" is about 150 m across with a vault reaching 127 m high.",
    formation:
      "The caves were carved by long-term dissolution of the limestone massif by the Lesse; the river first cut an underground passage, resurfacing about 2 km further on; the caves hold a constant temperature of about 13°C and high humidity.",
    observation:
      "From the air, the surface entrance to the Caves of Han-sur-Lesse sits on one side of the limestone massif, with traces of the Lesse's now-dry former surface channel visible nearby — a marker for identifying the surface features of this karst system.",
    distinguish:
      "Both the Caves of Han-sur-Lesse and the Dachstein cave system in Austria are karst caves, but the Caves of Han-sur-Lesse were carved directly by a surface river diverting underground and still carry flowing water today, while the Dachstein's cave system is defined mainly by ice caves and fossil caves.",
    concept:
      "The Caves of Han-sur-Lesse illustrate river \"capture\" — a river that once flowed on the surface diverts underground through erosion, producing a hydrological pattern where underground and surface channels coexist.",
    history:
      "Archaeological finds confirm the caves have been used by humans since at least the 5th century BCE; modern systematic exploration began in 1771, and today it is one of Belgium's most-visited cave attractions, reached by a preserved narrow-gauge tourist tramway.",
  },

  "viroin-valley": {
    seeing:
      "The Viroin Valley is a gorge-like valley cut by the Viroin River through the Calestienne limestone belt, its banks lined with exposed Middle Devonian limestone cliffs.",
    formation:
      "The valley was carved by long-term erosion of Middle Devonian limestone by the Viroin, one of the most concentrated stretches of karst landform and cave density along the Calestienne belt.",
    observation:
      "From the air, the Viroin Valley shows a gorge-like outline, its exposed grey-white limestone cliffs on both banks contrasting sharply with the forest and grassland on the valley floor.",
    distinguish:
      "Both the Viroin Valley and the Lesse Valley lie on the Calestienne limestone belt, but the Viroin Valley is defined mainly by exposed surface cliffs and gorge scenery, while the Lesse Valley is better known for its underground streams and large cave system.",
    // concept/history sources: Parc naturel Viroin-Hermeton 设立于 1998；Famenne-Ardenne UNESCO Global Geopark 的 8 个市镇不含 Viroinval（geoparcfamenneardenne.be，1 级，核实 2026-09-10）
    concept:
      "The Viroin Valley is an important case study in Middle Devonian marine limestone deposition and subsequent karstification, its limestone cliffs and incised river together forming a classic karst gorge landscape.",
    history:
      "Owing to its outstanding geological and ecological value, the Viroin Valley area was brought under protection in 1998 as part of the Viroin-Hermeton Nature Park.",
  },

  "scheldt-river-be": {
    // seeing sources: 2022 年安特卫普港与泽布吕赫港合并为 Port of Antwerp-Bruges（portofantwerpbruges.com，1 级，核实 2026-09-10）；条目其余段落提到的「安特卫普港」是地理指代，未改
    seeing:
      "The Scheldt runs about 435 km in total, with roughly 200 km flowing through Belgium; the Antwerp docks sit on its lower course and merged with Zeebrugge in 2022 to form Port of Antwerp-Bruges, Europe's second-largest port by throughput.",
    formation:
      "The Scheldt has been an important waterway since Roman times; its estuary (the Westerschelde) flows out to sea through the Netherlands, and Belgium and the Netherlands maintain a long-standing agreement on the passage and maintenance of this waterway.",
    observation:
      "From the air, the Scheldt widens noticeably as it passes Antwerp, its banks dense with port terminals, container yards and industrial facilities — one of Europe's busiest inland-river-to-seaport transshipment hubs.",
    distinguish:
      "Both the Scheldt and the Meuse are important navigable rivers in Belgium, but the Scheldt's shipping and port function is more prominent (Antwerp), while the Meuse is known for its larger drainage basin and the many historic towns along it.",
    concept:
      "Cross-border management of the Scheldt's estuary is a textbook case study in cooperative management of an international river; Belgium and the Netherlands maintain access to this waterway for the port of Antwerp through a long-standing agreement.",
    history:
      "The Scheldt has been an important waterway since Roman times; Antwerp, leveraging the river's shipping advantages, gradually grew from the medieval period into an important European trading and port city.",
  },

  "sambre-river": {
    // 全六段 sources: 全长约 193 km（法国境内约 54 km 至 Jeumont 边境；另一来源给瓦隆境内 105 km，各来源在 190–193 km 区间内），源出法国埃纳省勒努维翁昂蒂耶拉什附近，经埃诺省（沙勒罗瓦）与那慕尔省在那慕尔汇入默兹河；沙勒罗瓦 19 世纪煤铁工业化（crsambre.be 2 级 + 3 级交叉印证）。核实 2026-09-10，未改动
    seeing:
      "The Sambre runs about 193 km, a left-bank tributary of the Meuse, joining it at Namur, the capital of Wallonia.",
    formation:
      "The Sambre rises in northern France and flows through Belgium's Hainaut and Namur provinces; its valley has historically been the core of Belgium's coal and iron industry.",
    observation:
      "From the air, industrial cities including Charleroi are visible densely clustered along the Sambre; the valley retains surface traces left by the coal-mining and steel-industry era, in contrast with the surrounding agricultural landscape.",
    distinguish:
      "Both the Sambre and the Meuse are important rivers in Wallonia, but the Sambre is a tributary of the Meuse with a smaller drainage basin, historically known for coal and iron industry, while the Meuse is the main trunk river running through eastern Belgium.",
    concept:
      "The industrial landform evolution along the Sambre is a textbook case study in how the rise and fall of Europe's traditional coal-and-iron industrial belt shaped a river valley's landscape in the 19th and 20th centuries.",
    history:
      "Charleroi grew into an important Belgian industrial city from the 19th century onward, drawing on the abundant coal and iron resources along the Sambre — an important coal-and-iron region during Europe's Industrial Revolution.",
  },

  "meuse-river-be": {
    // seeing sources: 默兹河流域约 3.3 万 km²，按国分布：**比利时约 41%、法国约 28%、荷兰约 19%、德国约 12%**
    //   （另有卢森堡一小部分）—— IHE Delft 跨境水资源合作研究（3 级，2026-09-08 核）。
    //   **「占比最高」不等于「占大多数」**：原文两处（seeing 与 concept）都写成了「大部分/绝大部分位于比利时」，
    //   四成远不到 majority；concept 段那句「集中在单一国家境内的特殊案例」的论点本身也就不成立了。
    //   列日作为默兹河沿岸中世纪以来的工商业中心属公认史实。
    seeing:
      "The Meuse is one of Belgium's main navigable rivers; of the four countries the basin touches, Belgium holds the largest share of it (roughly 40 per cent), and Liège is Belgium's largest river port on the Meuse.",
    formation:
      "Below Liège the Meuse turns north, eventually joining the Rhine delta in the Netherlands before reaching the sea; along the way its course crosses several landform units, including the Ardennes and Condroz plateaus.",
    observation:
      "From the air, the Meuse widens noticeably around Liège, its banks heavily urbanised, with industrial facilities and residential areas densely packed along the river — a main shipping and industrial corridor in eastern Belgium.",
    distinguish:
      "The Meuse River (Belgian stretch, as the river overall) and the Meuse Valley (the specific gorge-like landform stretch) share the same source, but the former emphasises the river's overall hydrology and shipping function, while the latter focuses on the gorge-like landform between Dinant and Namur.",
    concept:
      "The Meuse's catchment is split unevenly among four countries — roughly 40 per cent in Belgium, 28 per cent in France, 19 per cent in the Netherlands and 12 per cent in Germany — a useful case study in how an international river's drainage area can be divided.",
    history:
      "Liège has grown into an important commercial, industrial and cultural centre of eastern Belgium since medieval times thanks to the Meuse's shipping advantages, and the riverbanks still preserve rich industrial heritage today.",
  },

  "ijzer-river": {
    // 全六段 sources: 源出法国诺尔省 Buysscheure 附近，全长约 78 km，约 30 km 后入比利时西弗兰德沿海平原，在纽波特入北海（Britannica，2 级）；1914-10 伊瑟河战役期间在纽波特开闸放潮水淹没圩田阻德军推进，属已结束、无持续对立的军事—地理史实，按判据保留；伊瑟塔 1930 年落成、1950 年代重建，条目只写它是纪念建筑，未涉其后续象征意义。核实 2026-09-10，未改动
    seeing:
      "The Yser (IJzer) rises in northern France and flows through the coastal plain of Belgium's West Flanders province, entering the North Sea near Nieuwpoort.",
    formation:
      "The river's lower course runs through the flat Plain of Flanders, its channel largely regulated by artificial drainage canals to maintain drainage balance for the surrounding farmland.",
    observation:
      "From the air, the Yser shows the classic form of a gently flowing, comparatively straight lowland-plain river; its banks are lined with regular farmland and a network of drainage canals, and the Yser Tower at Diksmuide is a clear landmark for identifying this river.",
    distinguish:
      "The Yser and the other waterways of the Plain of Flanders all belong to the same lowland drainage system, but the Yser is the main trunk channel of the area, carrying the core function of draining the surrounding polders.",
    concept:
      "The artificial drainage regulation of the lower Yser embodies the engineering practice, common to the Low Countries, of balancing flood control and drainage in river management.",
    history:
      "During the First World War, the low-lying terrain of the lower Yser was used for defensive flooding — a history recorded at the Yser Tower memorial in Diksmuide.",
  },

  "belgian-coast-dunes": {
    // seeing sources: 海岸线约 65 km（比利时官方海岸门户 kustportaal.be，2 级；荷语维基给 67 km，系不同测量口径）。
    //   ⚠️ concept 的「现存面积已不足历史峰值的三分之二」**存疑**：VLIZ 相关出版物的表述是沙丘因道路与地产开发「被拦腰砍半」，
    //   比「不足三分之二」更严重；且正文没给监测时点（C6-j）。下一轮找 VLIZ 或佛兰德海岸管理局的官方数据补年份，
    //   核不到就改成「已大幅破碎化、多处不再连续」这类不带分数的表述。
    //   ⚠️ history 的「一战末期这一带曾是重要的军事前线」**存疑**：德帕纳实为比利时境内唯一未被占领的区域、国王与政府战时驻地，
    //   更接近后方据点而非前线本身（伊瑟河前线在其东南）。未违红线，下一轮可精确化。2026-09-10 核。
    seeing:
      "The Belgian coast dunes run along about 65 km of North Sea coastline, part of the wider European North Sea dune system stretching from Dunkirk in France to Denmark.",
    formation:
      "The dunes formed through long-term wind transport and deposition along the North Sea coast, standing about 10 m above the plain behind them — a natural barrier against wave erosion protecting the low-lying land inland.",
    observation:
      "From the air, the Belgian coast dunes show a pale sand ridge running along the coastline, set off against the farmland of the inland Plain of Flanders and the densely urbanised seaside resorts along the coast.",
    distinguish:
      "Both the Belgian coast dunes and the Zwin are coastal landforms in Belgium, but the dunes are a sandy barrier landform built by wind deposition, while the Zwin is a tidally influenced salt marsh.",
    // concept sources: 约一半沙丘在 150 年间被城市化（VLIZ，1–2 级）。核实 2026-09-12
    concept:
      "Coastal urbanisation has sharply reduced the Belgian coast dunes — the Flanders Marine Institute reports that roughly half of the dune area has been urbanised over the past 150 years — a textbook case study in how human activity has compressed Europe's coastal dune ecosystems.",
    history:
      "The area around De Panne preserves one of the wider dune belts along the Belgian coast; in the final stages of the First World War this area was an important military front, and today it is an important seaside resort area.",
  },

  zwin: {
    // seeing sources: 2016–2019 扩大 120 ha（ANB，1 级），未分比荷两侧。核实 2026-09-12
    seeing:
      "The Zwin, on the Belgium-Netherlands border, is a tidal salt-marsh wetland regularly flooded by the sea at high tide; an expansion project in 2016–2019 added roughly 120 ha of tidal area.",
    formation:
      "The wetland was shaped over time by North Sea tidal currents; its distinctive salinity gradient supports salt-tolerant plant communities including sea lavender, a classic intertidal salt-marsh ecosystem.",
    observation:
      "From the air, the Zwin shows winding tidal creeks interlaced with alternating open water and mudflat — the landscape changes markedly between high and low tide, a clear marker for identifying this tidal wetland.",
    distinguish:
      "Both the Zwin and the Belgian coast dunes are Belgian coastal landform types, but the Zwin is a low-lying salt marsh periodically flooded by the tide, while the coast dunes are a wind-built sand ridge standing above the plain.",
    concept:
      "More than half of all bird species recorded in Belgium have been observed at the Zwin — a textbook case study in the importance of intertidal salt-marsh wetlands for migratory bird habitat.",
    history:
      "The Zwin was historically an important bay channel leading to Bruges, gradually silting up into today's wetland landscape; Belgium and the Netherlands have jointly carried out wetland restoration projects to maintain this cross-border ecosystem.",
  },

  "sonian-forest": {
    // seeing / history sources: 面积约 4421 公顷；2017 年作为跨国系列遗产「喀尔巴阡山脉及欧洲其他地区的古老与原始山毛榉林」扩展项列入 UNESCO。
    //   ⚠️ concept 的「近 600 种甲虫」**记 unknown**：哺乳动物「约 40 种」有 3 级佐证（原 46 种、7 种已消失），
    //   但甲虫物种数找不到 1/2 级来源（Leefmilieu Brussel／Natuurpunt）。下一轮核不到就改成不带具体数字的表述。
    //   ✅ 红线：索尼安森林横跨三个大区，正文未写语言边界或社群政治；「滑铁卢」若出现只作地名。2026-09-10 核。
    seeing:
      "The Sonian Forest is an ancient beech forest of about 4,421 hectares on the south-eastern edge of Brussels, one of the largest and oldest beech forests remaining in Europe.",
    formation:
      "The forest grows on a gently sloping upland south of Brussels; long-term forest succession and protection have allowed some trees to exceed 200 years old, producing a structurally complex old-growth ecosystem.",
    observation:
      "From the air, the Sonian Forest shows an extensive, dense, deep-green forest canopy, its tall, straight beech crowns a clear marker distinguishing it from the surrounding farmland and urbanised areas.",
    distinguish:
      "Both the Sonian Forest and the Ardennes Forest Uplands are important forested areas in Belgium, but the Sonian Forest is a single, concentrated ancient beech forest right next to the capital, Brussels, while the Ardennes Forest Uplands are the extensive mixed forest of south-eastern Belgium.",
    // concept sources: 「近600种甲虫」查无出处，删去。核实 2026-09-12
    concept:
      "The Sonian Forest is home to many beetle species and about 40 mammal species, including rare species typical of primeval forest — an important case study in the biodiversity of temperate old-growth beech forest.",
    history:
      "In 2017 the Sonian Forest was inscribed as part of the transnational World Heritage site \"Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe.\"",
  },

  "stavelot-massif": {
    // formation sources: 岩性为晚寒武纪至奥陶纪石英岩 + 千枚岩，经加里东与海西两期造山变形——这部分已确认。
    //   ⚠️ 「约 2500 米厚」与「比利时境内出露年代最古老的岩石」**两项都记 unknown**：
    //   在可及的 1/2/3 级来源（KBIN-IRSNB、比利时地质公报）里都查不到这个厚度数字与这条排他性断言的出处。
    //   下一轮找比利时地质调查局官方出版物；核不到就把厚度与「最古老」都去掉，只留已确认的岩性与造山史。2026-09-10 核。
    // seeing sources: 去掉「比利时最古老」排他断言；下古生界总厚约 3000 m（2700–3500 m）（Herbosch et al. 2020, ESR，1 级）。核实 2026-09-12
    seeing:
      "The Stavelot Massif is an outcrop of early Paleozoic bedrock in the eastern Ardennes, one of the Cambrian-to-Ordovician basement inliers of the Ardennes.",
    formation:
      "The massif is built of about 3,000 m (estimates range from 2,700 to 3,500 m) of alternating Cambrian-to-Ordovician quartzite and phyllite, deformed successively by the Caledonian and Variscan orogenies into its present complex folded structure.",
    observation:
      "From the air, the Stavelot Massif shows rolling, forested terrain similar to the surrounding Ardennes, but the exposed ancient quartzite and phyllite produce comparatively harder, more prominent local relief in places.",
    distinguish:
      "The Stavelot Massif looks similar to the Ardennes Forest Uplands at the surface, but the Stavelot Massif specifically refers to the exposed early Paleozoic bedrock itself — the geologically oldest core of the Ardennes' overall structure.",
    concept:
      "The Stavelot Massif is an important geological case study in the superimposed deformation of the Caledonian and Variscan orogenies, its ancient Cambrian-to-Ordovician strata providing key evidence for understanding early Paleozoic tectonic evolution in north-west Europe.",
    history:
      "The ancient bedrock around the town of Stavelot has been a focus of European geological research into the Ardennes orogenic belt since the 19th century, accumulating a rich body of scientific study.",
  },

  hesbaye: {
    // 全六段 sources: 黄土（limon）覆盖石灰岩基底；新石器时代（距今约七千年）已开垦；
    //   「比利时粮仓」（grenier à blé de la Belgique）别称有文献支持。3 级。
    //   ✅ **专项复核「三条会不会被写成同一套成因」**：孔德罗兹（砂岩背斜 + 石灰岩向斜相间）、法涅-法门（页岩低地）、
    //   黑斯拜（黄土台地）在本库里**写的是三套不同的成因**，没有混用。2026-09-10 核，verdict: ok。
    seeing:
      "The Hesbaye is an open loess plateau between the Meuse and Scheldt drainage basins, an agricultural region under cultivation since before Roman times.",
    formation:
      "The plateau surface is covered in Quaternary wind-blown loess; long-term weathering and leaching have produced fertile loamy soil, an ideal basis for agriculture.",
    observation:
      "From the air, the Hesbaye shows open, flat terrain with extensive, regular farmland stretching continuously, in sharp contrast with the densely forested southern Ardennes.",
    distinguish:
      "Both the Hesbaye and the Campine are plateau-type landforms in Belgium, but the Hesbaye is a fertile, loess-covered agricultural plateau, while the Campine is a sandy, comparatively poor heathland upland.",
    concept:
      "The loamy soil developed on the Hesbaye's loess parent material is a textbook example of the agricultural value of north-west Europe's loess belt, this kind of soil having supported dense agricultural populations since prehistoric times.",
    history:
      "The Hesbaye was under cultivation before Roman times, and thanks to its fertile loess soil remains one of Belgium's most important grain-producing regions today, sometimes called \"Belgium's granary.\"",
  },

  gaume: {
    // 全六段 sources: 「比利时的普罗旺斯」（la Provence belge）为比利时主流媒体通用说法；气候比阿登更温暖干燥、南邻法国洛林。2 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Gaume is a hilly area at Belgium's southernmost tip, lower in elevation than the Ardennes, bordering the Lorraine region of France.",
    formation:
      "The area's terrain is comparatively low and gentle; its climate, shaped by its geographic position, is warmer and drier than the Ardennes, with a distinctive microclimate well suited to fruit trees and vineyards.",
    observation:
      "From the air, the Gaume shows more open, gentler hill terrain than the Ardennes, with orchards and vineyards scattered throughout, in contrast with the densely forested, higher Ardennes to the north.",
    distinguish:
      "Both the Gaume and the Ardennes Forest Uplands lie at Belgium's southernmost tip, but the Gaume sits at lower elevation with a warmer, drier climate, while the Ardennes Forest Uplands are higher with a colder, wetter climate.",
    concept:
      "The Gaume's distinctive agricultural landscape, shaped by its comparatively warm, dry climate, is a textbook case study in how latitude and local microclimate together influence the distribution of crop-growing zones.",
    history:
      "Known for its warm climate and abundant orchards and vineyards, the Gaume is sometimes called \"Belgium's Provence,\" an agricultural tradition that continues today.",
  },
};
