import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Netherlands ============
  vaalserberg: {
    // 全六段 sources: 322.7 m（NAP 基准；另有 322.4 的小幅测量差）为荷兰**欧洲部分**最高点 —— 正文限定准确，未与加勒比荷兰萨巴岛 Mount Scenery 887 m 混淆；「超过四分之一国土低于海平面」与官方环境评估机构 PBL 的 26% 口径相符（1 级）。核实 2026-09-11，未改动
    seeing:
      "Vaalserberg is the highest point in the Netherlands, at 322.7 m, on a forested plateau where the Netherlands, Germany and Belgium meet. From the air it is just a gently raised patch of green hill, only slightly higher than the almost level land around it.",
    formation:
      "Vaalserberg is the northern tail of the Ardennes plateau, built of old sedimentary rock; long erosion has left only a modestly rolling upland, very low by the standards of hill country elsewhere in western Europe.",
    observation:
      "From the air it is hard to make out any real peak shape — Vaalserberg looks more like a forested gentle slope, with the summit viewing tower the main clue to its location; only against the near-total flatness of the rest of the Netherlands does 'highest point' carry any meaning here.",
    distinguish:
      "Vaalserberg, the Veluwe and the Utrechtse Heuvelrug are all relatively elevated spots in the Netherlands, but Vaalserberg is an old outlier of the Ardennes plateau, while the Veluwe and Utrechtse Heuvelrug are younger moraine hills pushed up by glaciers in the last ice age — different origins entirely.",
    concept:
      "The Netherlands is extremely low and flat overall, with more than a quarter of the country below sea level; that a hill only 322.7 m high counts as the national high point directly illustrates the country's identity as a 'low country'.",
    history:
      "Sitting where three countries meet, the summit area has long been an important border landmark; today it is a popular hiking and sightseeing spot, and the summit tower overlooks the forested tri-border landscape.",
  },

  veluwe: {
    // 全六段 sources: 最高点 Signal Imbosch 约 110 m；萨勒冰期（约 15 万年前）冰川推挤成脊；高费吕沃国家公园 1935 年设立。核实 2026-09-11，未改动
    seeing:
      "The Veluwe is a sandy upland in the central Netherlands built up by glacial push during the last ice age, its highest point about 110 m — the country's largest continuous forest and heathland reserve. From the air, dense dark-green conifer forest is interspersed with open purple heather moor and patches of drifting yellow sand.",
    formation:
      "As the ice sheet advanced during the last glaciation (the Saalian, roughly 150,000 years ago), it bulldozed surface sediment ahead of it into ridges; when the ice retreated it left this relatively undulating moraine upland, its sandy soil poor and free-draining — ideal for heath and dune to form.",
    observation:
      "From the air, identify the Veluwe by its broad, continuous dark-green forest dotted with open purple heath patches and bare yellow sand — this mottled forest-heath-sand mosaic is rare elsewhere in the flat Netherlands.",
    distinguish:
      "The Veluwe and the Utrechtse Heuvelrug are both moraine ridges from the same glaciation, but the Veluwe is larger and keeps more original heath and sand, while the Utrechtse Heuvelrug is a narrower, longer ridge with more continuous forest cover.",
    concept:
      "The Hoge Veluwe National Park, established in 1935, is one of the Netherlands' most important nature reserves; its heath and sand need continuous active management (such as controlling scrub encroachment) to keep the open post-glacial landscape — a case study in human intervention sustaining a semi-natural ecosystem.",
    history:
      "There is evidence of human activity on the Veluwe since prehistoric times; it was a noble hunting ground in the Middle Ages, and in the early 20th century a Dutch couple bought a large tract of land, built a private estate, and donated it to the state, leading to the national park's creation.",
  },

  "utrechtse-heuvelrug": {
    // 全六段 sources: 长约 30 km、国家公园 2003 年设立均获多来源确认；最高点约 69 m 未找到独立反证，与费吕沃 110 m 的高低关系自洽，暂不改。核实 2026-09-11
    seeing:
      "The Utrechtse Heuvelrug is a narrow moraine ridge in the central Netherlands from the last ice age, about 30 km long, its highest point about 69 m. From the air a long, thin band of forest stands out sharply against the otherwise flat terrain of Utrecht province, open farmland and towns on either side.",
    formation:
      "This ridge, like the Veluwe, is a product of glacial push during the last ice age — one of two parallel push ridges the ice left on either side; its sandy soil supports one of the Netherlands' larger continuous stretches of forest.",
    observation:
      "From the air, identify the Utrechtse Heuvelrug by its narrow, continuous band of forest running north-west to south-east, quite unlike the Veluwe's broad, patchy mosaic of forest and heath — this ridge looks more like a straight green corridor.",
    distinguish:
      "Both the Utrechtse Heuvelrug and the Veluwe are moraine hills from the same glaciation, but the Utrechtse Heuvelrug is a narrow, elongated band with more uniform, continuous forest cover, while the Veluwe is larger with richer patches of heath and sand.",
    concept:
      "Utrechtse Heuvelrug National Park, established in 2003, protects this important forest ecological corridor in the central Netherlands; the ridge is also an important groundwater recharge area, supplying drinking water to surrounding towns.",
    history:
      "Since the 17th century the ridge has been a popular place for wealthy merchants from Amsterdam and Utrecht to build country villas and estates, and many historic estates survive today, evidence of the rural leisure tradition of the Dutch Golden Age.",
  },

  "drenthe-hondsrug": {
    seeing:
      "The Drenthe Hondsrug is a moraine sand ridge in the north-eastern province of Drenthe, one of the oldest continuously settled areas known in the Netherlands. From the air, a narrow sandy upland extends through the surrounding low marsh and farmland, dotted along its length with the outlines of megalithic tombs.",
    formation:
      "This ridge is likewise a product of glacial deposition in the last ice age; because it stood relatively high and drained well, it was one of the first places Neolithic settlers chose to live amid the surrounding marshy wetland.",
    observation:
      "From the air, identify the Drenthe Hondsrug by its narrow sandy upland outline and the villages strung along the ridge line; the hunebedden (megalithic tombs) along it — dolmen-like structures built of large granite boulders — are the most distinctive human-landscape feature for identifying this area.",
    distinguish:
      "The Drenthe Hondsrug, the Veluwe and the Utrechtse Heuvelrug are all moraine hills, but the Hondsrug is older and directly tied to the earliest prehistoric settlement in the Netherlands, while the Veluwe and Utrechtse Heuvelrug are defined mainly by natural ecology and noble estate history.",
    // concept sources: UNESCO 认定 2015（unesco.org/en/iggp，1 级）；全国在册巨石墓 53 座（德伦特 52 + 格罗宁根 1），其中约 47 座在本脊（dehondsrug.nl，2 级）；建造年代 3400–3000 BC。原文的「约54座 / 3400–3200 / 2023」三处全错。核实 2026-09-11
    concept:
      "About 47 of the Netherlands' 53 registered Neolithic megalithic tombs (3400-3000 BC) line the ridge, built by people of the Funnelbeaker culture using granite boulders carried by the glaciers; in 2015 the whole area was inscribed as a UNESCO Global Geopark, and it is a core site for studying Dutch prehistory.",
    history:
      "This upland has been continuously inhabited since the Neolithic, from prehistoric megalithic tombs through medieval villages to modern farming settlements — a record of thousands of years of continuous human use on a single geographic ridge.",
  },

  "flevoland-polder": {
    // 全六段 sources: 东弗莱福兰 1950 合龙 / 1957 排干，南弗莱福兰 1959 合龙 / 1968 排干 —— 正文「1950–1968」准确覆盖本条 bbox 对应的两块圩田，**未把 1942 年单独排干的东北圩田混进来**；1986 年设为第 12 省。吉尼斯认定 Flevopolder 为世界最大人工岛，正文用「之一」更保守。核实 2026-09-11，未改动
    seeing:
      "The Flevoland Polder is land drained and reclaimed from the former Zuiderzee between 1950 and 1968, most of it below sea level — one of the largest artificial land reclamations in the world. From the air, endless grid-pattern farmland stretches to the horizon, straight drainage canals and windbreak tree lines dividing it neatly.",
    formation:
      "This land was once part of the Zuiderzee (now the IJsselmeer); it was enclosed with dikes and continuously pumped dry to create dry land. Since reclamation, the surface has kept slowly subsiding (partly from peat-layer compaction), and the lowest points are now about 4 m below sea level, kept dry entirely by pumping.",
    observation:
      "From the air, identify the Flevoland Polder by its extremely regular grid of farm fields and dead-straight drainage-canal network — this planned, geometric pattern contrasts sharply with the more organically evolved farmland elsewhere in the Netherlands, the clearest sign of a reclaimed polder.",
    distinguish:
      "Both the Flevoland Polder and the Zuidplaspolder are artificial Dutch reclamations, but Flevoland is far larger, more regularly planned, and became an independent province in 1986, while the Zuidplaspolder is smaller and holds the country's lowest point.",
    concept:
      "The Flevoland Polder is the archetype of modern large-scale land reclamation, showing how systematic hydraulic engineering can turn seabed or lakebed into habitable, farmable land — a 'land from the sea' tradition running through centuries of Dutch history.",
    history:
      "Reclamation began in the 1950s, and Flevoland was formally established as the Netherlands' 12th province in 1986, its youngest — planned from the outset with modern town-design ideas, in contrast to the country's older provinces.",
  },

  zuidplaspolder: {
    // 全六段 sources: 最低点 −6.76 m（2005 年校准值）、1840 年完成排干；正文写的是「荷兰全境最低点」，**未误用为「欧盟最低点」**（那是与丹麦 Lammefjord 并列的另一层级表述，正文未提）。核实 2026-09-11，未改动
    seeing:
      "The Zuidplaspolder is a former lake basin drained in 1840, its lowest point about −6.76 m — the lowest point in the entire Netherlands. From the air the area shows almost no visible height difference from its surroundings; only precise survey data confirms it as the country's low point.",
    formation:
      "This was originally a natural lake; medieval peat digging caused the ground to subside and the lake to expand, and in the 19th century the Dutch used windmills to pump it dry and reclaim land; the drained peat soil has continued to compact and sink ever since, producing today's lowest elevation in the country.",
    observation:
      "From the air it is nearly impossible to tell by eye that this is the national low point — the surface is the same regular pattern of farmland and drainage canals as neighbouring polders, indistinguishable without elevation data.",
    distinguish:
      "Both the Zuidplaspolder and the Flevoland Polder are Dutch reclamations, but the Zuidplaspolder is much smaller and was reclaimed earlier (early 19th century), while Flevoland is a much larger mid-20th-century modern engineering project.",
    concept:
      "The ongoing subsidence at the Zuidplaspolder is a classic case study of surface settlement after peatland drainage — once drained and exposed to air, peat oxidises and compacts, a process still continuing today and one of the long-term water-management challenges facing the low-lying Netherlands.",
    history:
      "Drainage of this basin began with wind-driven pumps, later replaced by steam pumping stations and then modern electric pumps — the three stages of drainage technology are themselves a microcosm of the history of Dutch land reclamation engineering.",
  },

  "loonse-en-drunense-duinen": {
    seeing:
      "The Loonse en Drunense Duinen is an inland drifting-sand dune area of about 35 sq km in the southern province of North Brabant, often nicknamed 'the Brabant Sahara' for its desert-like appearance. From the air, expanses of bare yellowish-white dune stand out sharply amid the surrounding green forest and farmland.",
    formation:
      "Medieval overgrazing and deforestation stripped away the topsoil here, exposing an underlying layer of ice-age wind-blown sand that was then reworked by the wind into this inland drifting dune field, which is still slowly moving today.",
    observation:
      "From the air, identify the Loonse en Drunense Duinen by its large stretches of continuous bare sand and rolling dune relief — such desert-like ground is very rare in the temperate, humid Netherlands, and the sharp contrast with the dense forest around it is the easiest way to spot it.",
    distinguish:
      "Both the Loonse en Drunense Duinen and the Holland Dunes are dune landscapes, but the Loonse en Drunense Duinen is a deep-inland exposure of an old wind-blown sand layer uncovered by human overuse, while the Holland Dunes are young, active coastal dunes continuously replenished by waves and wind.",
    // concept sources: 国家公园 2002 年设立（2024 年并入梵高国家公园），非 1971（nationaleparken.nl，2 级）；面积约 35 km²、中世纪过度放牧暴露冰期风成沙层的成因叙述核实无误。核实 2026-09-11
    concept:
      "The national park established here in 2002 protects the dunes rather than fully greening and fixing them, because the drifting dunes are themselves a distinctive semi-natural landscape with real geological-education and ecological-research value; management aims to control excessive spread while preserving the dunes' natural mobility.",
    history:
      "From a product of medieval overuse, to an area once treated as 'wasteland' and afforested to fix the sand in the early 20th century, to being recognised today as a distinctive natural heritage worth protecting, the site reflects a changing understanding of the value of such human-caused landscapes.",
  },

  "wadden-sea-nl": {
    // 全六段 sources: 与本库已核的德国侧 wadden-sea **并排读一致** —— 2009 年荷德段列入、2014 年丹麦段并入（whc.unesco.org/en/list/1314，1 级）；本条只陈述 2009 年荷德段列入，不涉后续扩边，属实。正文用「全球最大潮间带生态系统之一」，比 UNESCO 官方的 the largest 更保守。核实 2026-09-11，未改动
    seeing:
      "The Wadden Sea is the world's largest continuous system of intertidal mudflats, running along the south-eastern North Sea coast; the Dutch stretch lies inside the West Frisian Islands. From the air, broad brown mud and sand flats are exposed at low tide and submerged again at high tide, with tidal channels branching like tree limbs across the flats.",
    formation:
      "The Wadden Sea is a tide-dominated shallow-sea zone where sediment carried by the tides slowly accumulates near shore; the outer chain of barrier islands (the West Frisian Islands) blocks the larger waves of the open sea, keeping the inner waters relatively calm and allowing this vast intertidal mudflat and tidal-channel system to form.",
    observation:
      "From the air, identify the Wadden Sea by its mudflat area changing with the tide and the tree-branch pattern of tidal channels across the flats; the exposed area at low tide is enormous, and the three-layer structure of inner reclaimed farmland, mudflats, and outer barrier islands is clearly visible.",
    distinguish:
      "The Wadden Sea and the West Frisian Islands are two parts of the same ecosystem — the Wadden Sea refers to the intertidal shallow sea and mudflats inside the island chain, and the West Frisian Islands are the outer dune-built barrier chain; together they form a complete barrier-island lagoon system.",
    concept:
      "The Wadden Sea is a critical stopover and wintering site on the migration routes of millions of birds, its mudflats rich in benthic organisms that provide abundant food; the Dutch and German sections were jointly inscribed as a UNESCO World Heritage Site in 2009, one of the largest intertidal ecosystems on Earth.",
    history:
      "Coastal communities have depended on the Wadden Sea's fisheries and shellfish since ancient times; historically the area shrank repeatedly through land reclamation, but since the second half of the 20th century the Netherlands, Germany and other coastal states have strengthened protection, reversing the long trend of shrinkage.",
  },

  "zeeland-delta": {
    // 全六段 sources: 1953 年北海风暴潮荷兰官方死亡数 1836 人，正文「约1800人」为合理近似；东斯海尔德风暴潮屏障长约 9 km、65 座墩柱，「平时开放、风暴时关闭」与 Rijkswaterstaat 官方描述一致（1 级）。核实 2026-09-11，未改动
    seeing:
      "The Zeeland Delta is the complex delta where the Rhine, Meuse and Scheldt rivers together reach the sea, and the Eastern Scheldt storm surge barrier is the largest of its flood defences. From the air, a chain of enormous concrete gates spans the bay, dividing what was once open water into a series of controllable channels.",
    formation:
      "This area was once a natural delta where several branches of the Rhine, Meuse and Scheldt split before reaching the sea, with tangled channels and many islands; after a severe storm surge in 1953 caused heavy loss of life, the Netherlands launched the 'Delta Works' to systematically build flood barriers.",
    observation:
      "From the air, identify the Zeeland Delta by the chain of small islands linked by numerous bridges, dams and storm barriers; the Eastern Scheldt barrier — a roughly 9 km straight line of dozens of huge gates spanning the mouth of the open bay — is a conspicuous man-made landmark across the whole area.",
    distinguish:
      "The Zeeland Delta and the Westerschelde are both in Zeeland province, but the Zeeland Delta refers to the complex delta formed jointly by the Rhine, Meuse and Scheldt and its flood-defence system, while the Westerschelde specifically refers to the Scheldt's own separate river mouth, which keeps a natural tidal channel and is not sealed by a barrier.",
    concept:
      "The Eastern Scheldt barrier uses an 'open' design — the gates stay open in normal conditions to let the sea tide flow naturally and maintain the existing ecology, closing only when a severe storm is forecast — a design philosophy balancing flood protection and ecology that is representative among the Delta Works' many barriers.",
    history:
      "The 1953 North Sea storm surge killed about 1,800 people in the Netherlands, one of the worst natural disasters in modern Dutch history, and directly led to the decades-long Delta Works project that reshaped the entire coastline of Zeeland province (a sombre historical fact).",
  },

  westerschelde: {
    // 全六段 sources: ⚠️ 「安特卫普港」这处**不需要**改成 2022 年合并后的「安特卫普—布鲁日港」—— 判据与同批 scheldt-river-be 一致：这句描述的是「通往这座港口城市的唯一航道」这一地理/功能事实，是**地理指代**而非港口正式机构名。漏斗状河口未被闸坝封闭、荷比疏浚费用分摊协议均核实无误。核实 2026-09-11，未改动
    seeing:
      "The Westerschelde is the broad tidal estuary the Scheldt forms in Zeeland province before reaching the North Sea. From the air the water is wide and the tide range clearly visible, with extensive salt marsh and mudflat on both banks, and large cargo ships passing near Vlissingen.",
    formation:
      "The Scheldt rises in France and flows through Belgium into the Netherlands, where tidal backing near the mouth forms a broad, funnel-shaped estuary; the periodic tidal flooding on either side has produced extensive salt marsh wetland.",
    observation:
      "From the air, identify the Westerschelde by its funnel-shaped water body, visibly widening and clearly rising and falling with the tide, and by the wakes of large ocean-going cargo ships moving along it — this channel remains naturally navigable, unlike other Delta Works channels that have been sealed by barriers.",
    distinguish:
      "The Westerschelde and the Eastern Scheldt of the Zeeland Delta have similar names, but the Westerschelde is the Scheldt's own natural, unbarriered river mouth, while the Eastern Scheldt is a water body within the Rhine–Meuse delta system, semi-enclosed and managed by a storm surge barrier — different river systems and different management.",
    concept:
      "The Westerschelde is the only waterway to the Belgian port of Antwerp (one of Europe's major ports); the Netherlands and Belgium have a long-standing agreement on dredging depth and maintenance cost-sharing for this channel — an example of cross-border river-shipping cooperation (a neutral, factual description).",
    history:
      "This channel has carried important international shipping traffic since Antwerp's rise as a trading port in the Middle Ages, and the scale of dredging works has grown continuously with ship tonnage — an important link between Europe's inland rivers and sea shipping.",
  },

  "holland-dunes": {
    // 全六段 sources: 「沙引擎」（Zandmotor）2011 年建成于代尔夫兰海岸，为全球首例此类沙滩补给工程；正文写「近几十年发展出」未给死年份，不触发缺年份判据。核实 2026-09-11，未改动
    seeing:
      "The Holland Dunes are a continuous dune belt along the North Sea coast running from Zeeland to the Wadden Islands — the Netherlands' natural coastal defence line. From the air, an undulating yellow-green dune band runs along the coastline, with the densely populated Randstad conurbation just inland.",
    formation:
      "This dune belt has built up over thousands of years from sand carried by the North Sea and driven by wind; marram grass roots on the dune surface fix the drifting sand, gradually stabilising the dunes and letting them spread inland to form a natural coastal barrier.",
    observation:
      "From the air, identify the Holland Dunes by the sharp contrast between the undulating, low-vegetation dune belt and the flat reclaimed land just inland — this is one of the few places in the Netherlands where you can see real natural relief, and the dunes around Zuid-Kennemerland are especially continuous and open.",
    distinguish:
      "Both the Holland Dunes and the Loonse en Drunense Duinen are dune landscapes, but the Holland Dunes are active coastal dunes continuously fed by waves and wind, forming a band along the shore, while the Loonse en Drunense Duinen are a deep-inland, ancient wind-blown sand layer no longer replenished by new sand.",
    concept:
      "The dune belt is not only a natural flood barrier — the sand itself is an important groundwater aquifer, supplying drinking water to nearby cities — and it is a core part of the Dutch 'soft' coastal defence philosophy, relying on natural dunes rather than hard dikes alone.",
    history:
      "Stabilising and maintaining the dune belt is an ongoing engineering effort; since the 19th century the Dutch have reinforced dunes by planting marram grass and other means, and in recent decades have developed innovations such as the 'Sand Engine' (adding sand to the coast and letting currents distribute it naturally).",
  },

  biesbosch: {
    seeing:
      "The Biesbosch is a freshwater tidal wetland where the Meuse meets a branch of the Rhine, formed after a 1421 dike breach flooded the original land. From the air, crisscrossing channels cut the area into countless small islands and reed beds — a rare, densely water-networked stretch of the Netherlands.",
    // formation sources: 公园官方历史页专门辟谣「一夜之间由风暴潮造出比斯博斯」的说法 —— 堤坝溃决前已因泥炭开采削弱，此后数十年逐步演变；「以淡水为主」是 1970 年前后三角洲工程封闭哈灵水道之后才稳定下来的（此前潮差可达 2 m、咸淡水混合）。国家公园 1994 年设立、二战期间约 300 名潜伏者在此活动均核实无误。核实 2026-09-11
    formation:
      "The 1421 St Elizabeth's Flood broke through dikes already hollowed out and weakened by peat digging, and the land behind them went under; over the following decades river sediment kept accumulating and the basin turned into a tide-dominated wetland of interlocking land and water. Only when the Delta Works closed off the Haringvliet around 1970 was its tidal link to the open sea largely severed, settling it into the predominantly freshwater tidal wetland it is today.",
    observation:
      "From the air, identify the Biesbosch by its dense, web-like network of channels and the extensive reed beds and willow stands between them — a sharp contrast to the neat, planned reclaimed farmland around it, and the most direct sign of its unplanned, naturally evolved water network.",
    distinguish:
      "Both the Biesbosch and the Wadden Sea are tide-driven wetlands, but the Biesbosch is an inland freshwater tidal wetland that formed accidentally from a historic flood disaster, while the Wadden Sea is a coastal saltwater intertidal mudflat that formed through long-term natural sediment deposition — different salinity and different origin.",
    concept:
      "The Biesbosch is a rare European example of a freshwater tidal wetland — most tidal wetlands are saline or brackish, but here, inland and fed mainly by river freshwater, a distinctive freshwater tidal ecosystem has formed; a national park was established in 1994 to protect it.",
    history:
      "After forming, this wetland was for centuries a hideout for Dutch smugglers and outlaws (its tangled channels made it hard to search); during the Second World War the resistance also used the terrain, and it has since become a popular ecotourism and canoeing destination.",
  },

  maasvlakte: {
    // 全六段 sources: Maasvlakte 2 于 2013-05-22 启用（鹿特丹港务局，1 级）；「欧洲最大港口」按货物总吨位口径仍成立（2025 Q3 鹿特丹 99.0 Mt vs 安特卫普—布鲁日 56.5 Mt，Eurostat 1 级；后者仅在 2025 Q1 集装箱 TEU 单项上短暂反超）。填海面积是会变的量，下轮复核。核实 2026-09-11，未改动
    seeing:
      "The Maasvlakte is artificial land the Port of Rotterdam has been building since the 1970s in the North Sea west of the Meuse estuary, with the second phase, completed in 2013, extending it about 2 km further out to sea. From the air, a perfectly straight man-made coastline, dense container terminals and rows of wind turbines form a highly industrialised landscape.",
    formation:
      "This land is entirely man-made: engineers dredge sand from the North Sea floor, process it, and deposit it to build new land — a continuation of the long Dutch tradition of land reclamation applied to port industry, and one of the largest artificial port-land expansion projects in the world.",
    observation:
      "From the air, identify the Maasvlakte by its dead-straight geometric man-made coastline, dense rows of container yards, and arrays of large wind turbines — this highly planned, entirely artificial port-industrial landscape stands in sharp contrast to the Netherlands' more natural or semi-natural landforms.",
    distinguish:
      "Both the Maasvlakte and the Afsluitdijk are important Dutch hydraulic-engineering landmarks, but the Maasvlakte is newly created land from reclamation, mainly for port-industrial use, while the Afsluitdijk is a barrier dam enclosing a bay to make a freshwater lake, adding no new land area.",
    concept:
      "The Maasvlakte is a core operating area of the Port of Rotterdam, Europe's largest port, and its second phase also serves as a practical exercise in Dutch adaptation to sea-level rise — the new reclaimed land was designed with future climate-change flood risk in mind.",
    history:
      "The Port of Rotterdam has continually expanded seaward since the early 20th century to accommodate ever-larger container ships, and the Maasvlakte is the latest and largest engineering step in this more-than-century-long history of 'land from the sea' port expansion.",
  },

  afsluitdijk: {
    // 全六段 sources: 长约 32 km、1927 动工 1932 完工、方案由 Cornelis Lely 提出（Rijkswaterstaat 官方，1 级）。核实 2026-09-11，未改动
    seeing:
      "The Afsluitdijk is a roughly 32 km barrier dam completed in 1932, enclosing the once-open Zuiderzee to form today's freshwater IJsselmeer. From the air, a dead-straight grey dike spans the open water, separating two bodies of water with slightly different colours.",
    formation:
      "The dam is entirely man-made, built up in layers of clay and sand by engineers, with sluices at each end to regulate water level and, when needed, discharge excess fresh water; once complete, the Zuiderzee lost its direct connection to the North Sea and its water was gradually replaced by inflowing fresh water.",
    observation:
      "From the air, identify the Afsluitdijk by its ruler-straight line spanning the entire mouth of the bay — the most regular and instantly recognisable shape among all the Netherlands' hydraulic landmarks; a road and a commemorative monument can also be seen on the dam.",
    distinguish:
      "Both the Afsluitdijk and the Eastern Scheldt storm surge barrier are major Dutch water-control structures, but the Afsluitdijk is a completely closed, non-opening solid dam, while the Eastern Scheldt barrier is a gate system normally open and closed only during storms — different engineering philosophies.",
    concept:
      "Completing the Afsluitdijk was a turning point in Dutch land-reclamation history — it shortened the Dutch coastline and greatly reduced flood risk, and the freshwater IJsselmeer it created later provided the hydrological basis for the freshwater reclamation of the Flevoland Polder.",
    history:
      "The dam's construction grew out of calls for flood control after a severe flood in the late 19th century; engineer Cornelis Lely's plan to close off the Zuiderzee, after decades of debate, broke ground in 1927 and finished in 1932 — a showcase of early-20th-century Dutch hydraulic engineering capability.",
  },

  ijsselmeer: {
    // 全六段 sources: 面积约 1100 km²、荷兰最大湖泊；与 markermeer（约 700 km²）、afsluitdijk（1932）、flevoland-polder（1950–1968）四条工程链上的面积与年份**并排核对彼此一致**，未打架。核实 2026-09-11，未改动
    seeing:
      "The IJsselmeer is the largest lake in the Netherlands, about 1,100 sq km, gradually freshened from the former saline Zuiderzee bay after the Afsluitdijk was completed in 1932. From the air, an open, pale freshwater lake sits near the centre of the north-central Netherlands, its shoreline irregular with several stretches now reclaimed as land.",
    formation:
      "After the Afsluitdijk sealed the Zuiderzee off from the North Sea, the original salt water was gradually replaced by fresh water flowing in from the Rhine, IJssel and other rivers, freshening fully over several years into today's lake; water is discharged to the North Sea through sluices in the dam to maintain water-level balance.",
    observation:
      "From the air, identify the IJsselmeer by its calm, pale, open water surface and the boundaries of several reclaimed areas along its shore — on the south-west and east edges you can clearly see regular grid-pattern farmland 'growing' out of the lake, the most direct sign of the lake-to-land transition.",
    distinguish:
      "Both the IJsselmeer and the Markermeer are bodies of water freshened after the Zuiderzee's enclosure, but the IJsselmeer keeps the original name and is the larger main lake, while the Markermeer is a separate water body cut off from the IJsselmeer's southern part by a second barrier dam in 1976, its water murkier due to poor circulation.",
    concept:
      "The IJsselmeer's transformation — from saline bay to freshwater lake — is a classic case study of how engineering can completely transform a water body's ecosystem over decades, and the ongoing reclamation around its shores shows the long-running interaction between the Dutch and the land they've claimed.",
    history:
      "After the lake formed, the Dutch carried out several rounds of reclamation along its south-western and eastern edges, and most of Flevoland province's land comes from this — a main source of Dutch land-area expansion in the 20th century.",
  },

  markermeer: {
    // 全六段 sources: 面积约 700 km²；1976 年 Houtribdijk 建成使其与艾瑟尔湖分离；原围垦计划 Markerwaard 因环保意识增强而搁置；Marker Wadden 生态修复工程真实存在（Natuurmonumenten 官方项目页，2 级）。核实 2026-09-11，未改动
    seeing:
      "The Markermeer is a separate freshwater lake, about 700 sq km, cut off from the southern IJsselmeer by a barrier dam built in 1976. From the air its water looks noticeably murkier and greener than the IJsselmeer, and the dead-straight dam separating the two lakes is clearly visible.",
    formation:
      "The Houtribdijk, built in 1976, split the once-continuous freshened Zuiderzee waters into two, the separated southern portion becoming the Markermeer; because water circulation is restricted, fine sediment on the lake bed stays continuously suspended, keeping the water chronically murky.",
    observation:
      "From the air, identify the Markermeer by its water — noticeably murkier and greener than the IJsselmeer — and the dead-straight barrier dam on its northern edge separating the two; colour difference is the most direct way to tell these two neighbouring lakes apart.",
    distinguish:
      "The Markermeer and the IJsselmeer were originally the same freshened water body after the Afsluitdijk enclosure, split into two only after the 1976 barrier dam; the Markermeer's murkier water and poorer ecological condition are the main differences between them.",
    concept:
      "The Markermeer's water-quality problems have driven the recent 'Marker Wadden' ecological restoration project — artificially built wetland islands change the flow pattern, promoting sediment settling and the recovery of aquatic plants — a representative project of the Netherlands shifting from traditional hydraulic engineering toward ecological restoration.",
    history:
      "The barrier dam was originally planned as the first step in reclaiming the Markermeer as land (the original scheme was called the 'Markerwaard' polder), but growing environmental awareness in the Netherlands from the late 1970s ultimately shelved the reclamation plan, leaving the lake intact — a turning point in Dutch reclamation policy from 'land from the sea' toward ecological protection.",
  },

  grevelingen: {
    // 全六段 sources: 1971 年布劳沃斯坝完工封闭成咸水湖；官方/媒体称其为西欧最大咸水湖（约 11,000 ha），正文用「之一」更保守；近年经 Getij Grevelingen 项目开凿限流通道恢复潮汐交换以解决湖底缺氧（Zuidwestelijke Delta，2 级）。核实 2026-09-11，未改动
    seeing:
      "The Grevelingen is a saltwater lake formed when a former river-mouth bay was sealed during the Delta Works — one of the largest saltwater lakes in Western Europe. From the air the water is clear and blue, a sharp contrast to the mostly murky freshwater lakes elsewhere in the Netherlands, with several small islands scattered across it.",
    formation:
      "This was once a bay connected to the North Sea between the Scheldt and Meuse rivers; a barrier dam built in 1971 as part of the Delta Works cut it off from the open sea, but unlike the IJsselmeer its water kept its original salinity and was never replaced by fresh water.",
    observation:
      "From the air, identify the Grevelingen by its unusually clear blue-green water — no longer stirred by tides or fed by new sediment, its clarity has increased markedly, giving a striking colour contrast with the murkier estuaries and freshwater lakes around it, the easiest way to recognise it.",
    distinguish:
      "Both the Grevelingen and the IJsselmeer are lakes formed by sealing off Delta/Zuiderzee waters, but the Grevelingen kept its saline character and clear water, while the IJsselmeer was gradually freshened and is relatively murky — completely different water quality and ecosystem type.",
    concept:
      "Having lost tidal flushing and with slow water exchange, the Grevelingen once faced deep-water oxygen depletion; Dutch water authorities have recently cut a flow-limited channel through the barrier dam to reintroduce limited tidal exchange and improve water quality — an example of fine-tuning the ecological impact of hydraulic engineering.",
    history:
      "Before enclosure this was an active fishing estuary; afterwards fishing declined sharply, but the clear water and calm, tide-free surface have made it an important Dutch diving and sailing base.",
  },

  lauwersmeer: {
    seeing:
      "The Lauwersmeer is a lake and wetland formed after a 1969 barrier dam sealed off the former Lauwers Bay, once connected to the Wadden Sea. From the air, open shallow lake water is interspersed with extensive reed marsh and mudflat — an important wetland reserve in the northern Netherlands.",
    formation:
      "This was originally a Wadden Sea inlet; a barrier dam built in 1969 for flood protection cut it off from the open sea, and the salt water was gradually replaced by fresh water draining in from the surroundings, together with managed water levels, to form today's mixed lake-marsh-mudflat wetland ecosystem.",
    observation:
      "From the air, identify the Lauwersmeer by the interlocking pattern of open water and extensive reed beds and shallows — this half-lake, half-marsh transitional landscape, together with its position on the edge of the Wadden Sea, is the main way to recognise this area.",
    distinguish:
      "Both the Lauwersmeer and the IJsselmeer are water bodies freshened after a bay was sealed by a barrier dam, but the Lauwersmeer is much smaller and dominated by wetland and marsh ecology, while the IJsselmeer is the Netherlands' largest open freshwater lake, used mainly for shipping and reclamation.",
    // concept sources: 国家公园 2003-11-12 设立（此前为自然保护区、2000 年列为拉姆萨尔湿地，都不是国家公园）；1969-05-25 拦海坝封闭 Lauwerszee 核实无误。核实 2026-09-11
    concept:
      "Since Lauwersmeer National Park was established in 2003, managers have experimented with restoring some areas to saline ecology (reintroducing seawater), contrasting with the other fully freshened former Zuiderzee waters — an example of the Netherlands' diversified approach to wetland ecological restoration.",
    history:
      "Before the barrier dam was built, residents here long depended on the Wadden Sea's fisheries and farming; after enclosure, land and water use gradually shifted toward nature conservation, and the area is now a popular spot for observing migratory birds.",
  },

  "weerribben-wieden": {
    // 全六段 sources: 国家公园 1992-06-24 设立；泥炭开采实际自 16 世纪中叶起延续至二战前后，正文笼统写「18-19世纪」属范围收窄、仍在开采活跃期内，且未作排他性时间断言，不改。核实 2026-09-11，未改动
    seeing:
      "Weerribben-Wieden is a lake-and-marsh wetland in the north-western Netherlands formed by historic large-scale peat digging — one of the largest surviving lowland peat bogs in Western Europe. From the air, criss-crossing narrow channels and reed beds divide the area into neat strips, a regular geometric pattern that betrays its history of manual excavation.",
    formation:
      "This wetland was originally a natural peat bog; in the 18th and 19th centuries locals dug peat on a large scale for fuel, and the resulting trenches gradually filled with water and expanded into today's interlocking channel-and-lake system, with new reed and peat-moss communities later regrowing in parts.",
    observation:
      "From the air, identify Weerribben-Wieden by its extremely regular strip pattern of channels and plots — this orderly geometric layout directly reflects the historical practice of digging peat in strips, a sharp contrast to the irregular water network of the naturally formed Biesbosch.",
    distinguish:
      "Both Weerribben-Wieden and the Biesbosch are important Dutch wetlands, but Weerribben-Wieden is an inland freshwater peat marsh with regularly strip-shaped channels (from manual peat digging) and almost no tidal influence, while the Biesbosch is a tide-dominated freshwater wetland with an irregular water network, formed accidentally by a flood disaster.",
    concept:
      "The national park consolidated here in 1992 turned this former peat-digging area into a wetland nature reserve; traditional uses such as reed cutting have been preserved and folded into routine management — an example of combining traditional production activity with nature conservation.",
    history:
      "Peat digging was the main livelihood of local residents for centuries; after peat's economic value as fuel declined in the 20th century, the area gradually shifted toward ecotourism and traditional reed-thatching craft, continuing the traditional connection with this wetland.",
  },

  "rhine-delta-nl": {
    // 全六段 sources: 实际分流是两级 —— 莱茵河先在 Pannerdensche Kop 分出瓦尔河（约 2/3 水量）与潘纳尔登运河，运河再在阿纳姆一带的 IJsselkop 分出艾瑟尔河，余下才是下莱茵河/莱克河。正文把二级分流略去，属面向空中概览的合理简化；艾瑟尔河在本库另有独立条目（ijssel-river，其「阿纳姆附近分出」方向未错），并排读不冲突。核实 2026-09-11，未改动
    seeing:
      "The Rhine Delta in the Netherlands is the stretch where the Rhine splits into the Nederrijn/Lek and the Waal near the Pannerden Canal after entering the country — one of Europe's most important inland shipping corridors. From the air, broad channels carry a constant stream of barges and cargo ships, with the Netherlands' densely populated cities and port facilities lining the banks.",
    formation:
      "The Rhine rises in the Swiss Alps and flows through Germany into the Netherlands, where the flat terrain causes a sharp drop in gradient, splitting the river into multiple branches — a typical feature of a delta river approaching the sea.",
    observation:
      "From the air, identify the Rhine Delta in the Netherlands by the obvious branching point near the Pannerden Canal, where a great river splits into two channels of unequal flow, with the dense wakes of ships on the water a direct sign that this is a major shipping artery.",
    distinguish:
      "Both the Rhine Delta and the Meuse in the Netherlands are major Dutch rivers, but the Rhine Delta is the lower delta reach of one of Europe's longest rivers with extremely heavy shipping traffic, while the Meuse in the Netherlands is relatively less important for shipping and flows more through agricultural and natural areas.",
    concept:
      "The Rhine is an international shipping artery linking Switzerland, Germany and the Netherlands; the prosperity of the Port of Rotterdam depends heavily on the Rhine's inland waterway network carrying goods deep into Europe's interior — an important example of cross-border river economic cooperation in Europe.",
    history:
      "The Rhine Delta in the Netherlands has been a major transport route since Roman times, and riverside towns prospered on river trade through the Middle Ages; the modern dikes and river-splitting works are the result of systematic 19th- and 20th-century Dutch flood management of the Rhine.",
  },

  "meuse-river-nl": {
    // 全六段 sources: 1993、1995 年莱茵/马斯河严重洪灾（疏散约 25 万人）→ 2006 年批准「还地于河」计划、2007–2018 实施 34 个项目。正文写的是因果（洪灾促成计划），未断言计划在 1990 年代即启动，与时间线不矛盾。核实 2026-09-11，未改动
    seeing:
      "The Meuse in the Netherlands rises in France and flows through Belgium into the southern Dutch province of Limburg, where around Maastricht the valley narrows with low hills on either side. From the air, the river shows a stretch of valley relief rare elsewhere in the Netherlands as it crosses Limburg, then widens and slows as it enters North Brabant province further north.",
    formation:
      "Upstream, the Meuse crosses hill country in France and Belgium, cutting a fairly distinct valley; entering Limburg in southern Netherlands the land still has some relief, with low terraces along the valley sides, before the river enters the flat plains of the south-central Netherlands further north and its channel widens sharply.",
    observation:
      "From the air, identify the Meuse in the Netherlands by its relatively narrow valley with visible relief around Maastricht, a contrast to the mostly flat, featureless river landscape found across most of the Netherlands — an important clue to locating this stretch of the river.",
    distinguish:
      "Both the Meuse and the Rhine Delta are international rivers in the Netherlands, but the Meuse has a smaller catchment and more variable flow (prone to flood peaks after heavy rain), while the Rhine Delta in the Netherlands has steadier flow and a more prominent shipping role.",
    concept:
      "Because its catchment sees highly variable rainfall, the Meuse has historically flooded often; after several severe floods in the 1990s the Netherlands launched the 'Room for the River' programme, deliberately widening the flood channel on some stretches rather than simply raising dikes — representative of the shift in modern flood-management philosophy from 'resistance' to 'adaptation'.",
    history:
      "Maastricht is one of the oldest cities in the Netherlands, rising since Roman times because it commanded a crossing of the Meuse, and the riverbanks still preserve extensive medieval fortifications and trading remains.",
  },

  "ijssel-river": {
    // 全六段 sources: 长度各来源 116–125 km，正文「约120公里」落在区间内；代芬特尔、坎彭、聚特芬历史上均为汉萨同盟城市。核实 2026-09-11，未改动
    seeing:
      "The IJssel is a branch the Rhine (Nederrijn) splits off near Arnhem, flowing north about 120 km to the IJsselmeer. From the air a relatively narrow channel winds northward, past the historic towns of Deventer and Kampen, with open pasture lining most of its banks.",
    formation:
      "The IJssel branches from the Rhine near Arnhem through a combination of natural and human intervention; since the Middle Ages the channel has been dredged and adjusted repeatedly to maintain navigability, finally flowing north into the IJsselmeer, from which it takes its name.",
    observation:
      "From the air, identify the IJssel by its relatively narrow, northward-winding course — compared with the broad, busy main Rhine channel in the Netherlands, the IJssel's water is narrower with fewer ships, and the towns along it are correspondingly smaller.",
    distinguish:
      "Both the IJssel and the Rhine Delta in the Netherlands belong to the Rhine river system, but the IJssel is a smaller-flow branch running north into the IJsselmeer, while the Rhine Delta (the Nederrijn/Lek and Waal) is the main channel, flowing west past Rotterdam to the sea — their directions and final destinations are entirely different.",
    concept:
      "The towns along the IJssel — Deventer, Kampen, Zutphen and others — were historically members of the Hanseatic League (the medieval Northern European trading-city alliance); this river is a good case study of how a medieval inland trade network shaped the layout of the towns along it.",
    history:
      "These 'Hanseatic towns' traded across regions along the IJssel from the League's 13th–15th-century heyday, and today still preserve extensive medieval town walls, warehouses and guild buildings — one of the better-preserved clusters of medieval trading towns in the Netherlands.",
  },

  "vecht-river": {
    // 全六段 sources: 17–18 世纪阿姆斯特丹商人沿河修建避暑庄园属荷兰黄金时代广泛记载的史实，无可核数字/年代类断言。核实 2026-09-11，未改动
    seeing:
      "The Vecht is a slow-flowing small river in the central Netherlands, along which 17th–18th-century Amsterdam merchants built numerous country estates. From the air, the winding river is lined on both banks with historic manor houses and gardens, giving a village landscape of pleasant density amid the open pasture around it.",
    formation:
      "The Vecht is a natural small river crossing the low central Dutch plain, narrow and slow-flowing, with flat land on both banks; historically prized for its clear water and pleasant scenery, it became an ideal area for wealthy merchants to build country residences.",
    observation:
      "From the air, identify the Vecht by the dense cluster of manor buildings and regularly shaped gardens along its narrow, winding banks — this string of historic estates along the river is uncommon elsewhere along Dutch rivers, and is the most direct way to recognise it.",
    distinguish:
      "Both the Vecht and the IJssel are slow-flowing small-to-medium rivers in the central Netherlands, but the Vecht is known for the dense historic-estate landscape on its banks and has a shorter, narrower course, while the IJssel is known for its Hanseatic trading towns, is a major Rhine branch, and carries more water.",
    concept:
      "The estates along the Vecht are a direct product of the prosperity of the Dutch Golden Age (17th century) — Amsterdam merchants, having made fortunes through maritime trade, built summer residences along this river, convenient for travel to and from Amsterdam, making it an important case study in the material culture of the Dutch Golden Age.",
    history:
      "These estates flourished in the 17th–18th centuries; after the 19th century some fell into decline or were demolished as families' fortunes waned, and from the 20th century Dutch heritage authorities have systematically restored and protected the surviving estates and gardens.",
  },

  "wadden-islands": {
    // 全六段 sources: 特塞尔岛为西弗里西亚群岛中面积最大、人口最多者（约 1.36 万人；弗利兰 1194 / 特斯海灵 4870 / 阿默兰 3746 / 斯希蒙尼克 931）。核实 2026-09-11，未改动
    seeing:
      "The West Frisian Islands are a chain of dune-built barrier islands outside the Wadden Sea in the northern Netherlands, running west to east through Texel, Vlieland, Terschelling, Ameland, Schiermonnikoog and others. From the air, a string of narrow sandy islands lies roughly parallel to the mainland coast, with broad beaches on the outer (North Sea) side and mudflats on the inner (Wadden Sea) side.",
    formation:
      "These islands built up from sand carried by longshore currents — a natural product of the Wadden Sea's tidal system; sand is continually moved and deposited by tide and wind, gradually forming this chain of narrow barrier islands, whose position and shape are still slowly changing.",
    observation:
      "From the air, identify the West Frisian Islands by their narrow shape, roughly parallel to the mainland coastline, and by the sharply different landscape on each side — beach and dune facing the North Sea to the north, intertidal mudflat facing the Wadden Sea to the south — the classic 'two faces of one island' signature of barrier islands.",
    distinguish:
      "The West Frisian Islands and the Wadden Sea are two parts of the same ecosystem — the islands are the outer chain itself, and the Wadden Sea is the shallow intertidal sea protected between the islands and the mainland; together they form a complete, inseparable barrier-island lagoon system.",
    concept:
      "These islands form a natural coastal defence line, giving the Wadden Sea behind them a relatively calm hydrological environment that lets the intertidal ecosystem develop stably; Texel is the largest and most populous island and an important Dutch ecotourism destination.",
    history:
      "Fishermen and shepherds have lived on these islands since the Middle Ages; storm surges have repeatedly reshaped their form over history, and in modern times the islands have shifted from traditional fishing communities toward ecotourism and popular sites for observing migratory birds.",
  },
};
