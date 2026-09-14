import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  krkonose: {
    // 全六段 sources: 斯涅日卡峰 1603 m 为捷克全境最高点；KRNAP 1963-05-17 设立。**与波兰侧 sudetes-karkonosze 并排核过**：高度一致，捷 KRNAP 1963 / 波 KPN 1959 两个年份各自属实、不冲突。跨境表述中性、不描述边界线。核实 2026-09-11，未改动
    seeing:
      "The Krkonoše (Giant Mountains) form the highest part of the Sudetes, straddling the Czech-Polish border; Sněžka, at 1,603 m, is the highest point in the Czech Republic.",
    formation:
      "The range is built of ancient metamorphic rock and granite. Intense glacial erosion during the last ice age carved classic cirques and glacial valleys into the north face, while the ridgeline itself remains broad and gently rounded, unlike an Alpine-style jagged crest.",
    observation:
      "From the air, Sněžka's rounded conical outline stands out clearly, its summit weather station and lookout tower easily visible; above the treeline on both flanks lie broad alpine meadows dotted with glacial cirque hollows.",
    distinguish:
      "Krkonoše and Jeseníky are both part of the Sudetes, but Krkonoše is higher and shows more classic glacial landforms, while Jeseníky is somewhat lower with extensive alpine tundra near its summit.",
    concept:
      "Sněžka's summit straddling the Czech-Polish border, with observation facilities maintained by both countries, is a classic case for studying how national boundaries can overlap in complex ways with a single landform unit.",
    history:
      "The summit weather station has operated continuously since the 19th century, one of Central Europe's oldest mountain weather stations; the region developed into a hiking and skiing destination from the late 19th century, and Krkonoše National Park was established in 1963.",
  },
  sumava: {
    // 全六段 sources: 普莱希峰 1378 m 为捷克一侧最高点（Boubín 1362 m 只因瞭望塔虚高 21 m 才「超过」，正文未混淆两者）；舒马瓦国家公园 1991 年设立、为捷克最大国家公园。**与德国侧 bavarian-forest 并排读**：该条写的「森林区整体最高的大阿尔伯山在境外一侧」与本条「Plechý 为捷克侧最高」不矛盾。核实 2026-09-11，未改动
    seeing:
      "Šumava (the Bohemian Forest) is a range of low mountains running along the German and Austrian borders in southwestern Czechia, and is the source of the Vltava River; Plechý, at 1,378 m, is the highest point on the Czech side.",
    formation:
      "The range is built of ancient granite and gneiss, long since worn down into low, rounded relief; several glacially formed mountain lakes and extensive peat bogs are found throughout.",
    observation:
      "From the air, Šumava is blanketed by one of Central Europe's largest continuous stretches of old-growth spruce forest; above the canopy there are no jagged bare peaks, only low rounded ridgelines and patches of open bog wetland.",
    distinguish:
      "Šumava and Krkonoše are both important Czech border ranges, but Šumava is lower and more rounded, known for its extensive old-growth forest and peat bogs, while Krkonoše is higher with more pronounced glacial landforms.",
    concept:
      "Šumava is one of the few areas in Central Europe to preserve large stretches of unlogged coniferous forest, making it an important sample for studying temperate mountain forest succession and peat-bog ecosystems.",
    history:
      "Šumava National Park, established in 1991, is the largest national park in Czechia; the region was historically sparsely populated and undeveloped, and its long stint as a Cold War border-control zone incidentally helped keep its old-growth forest intact.",
  },
  "krusne-hory": {
    // 全六段 sources: 克利诺韦茨峰 1244 m 为捷克侧最高点。**与德国侧 erzgebirge 并排核过**：德方 Fichtelberg 1214.6 m（本库德国条目作 1215 m），两侧最高点归属一致、互不矛盾。南缓北陡的地垒描述经查与地质文献一致。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "The Krušné hory (Ore Mountains) run about 130 km along the Czech-German (Saxony) border, named historically for their silver, tin and lead mining; Klínovec, at 1,244 m, is the highest point on the Czech side.",
    formation:
      "Built of granite and metamorphic rock, the range is a horst formed by long-term uplift and block faulting — steep on the German (north) side and gentler on the Czech (south) side, a textbook example of asymmetric fault-block topography.",
    observation:
      "From the air, the Krušné hory ridgeline runs roughly east-west in a continuous rolling chain; the gentler south slope descends gradually toward the spa basin of the Ohře valley, and the summit plateau and mild slopes are largely given over to pasture and wind farms.",
    distinguish:
      "Krušné hory and Krkonoše are both important Czech border ranges, but Krušné hory is a granite horst known for its mining history, while Krkonoše is known for its glacial landforms and the country's highest peak.",
    concept:
      "The pronounced north-south asymmetry of the Krušné hory is a textbook case for studying horst (fault-block) uplift mechanics; its mining history is also key to understanding resource-driven mountain economies in Central Europe.",
    history:
      "The range was a major European silver-mining center from the Middle Ages, with mining wealth once sustaining the prosperity of surrounding towns; after 20th-century ore depletion, the region shifted toward forestry and tourism.",
  },
  jeseniky: {
    seeing:
      "Jeseníky (Hrubý Jeseník) is the eastern section of the Sudetes located in the Moravian-Silesian region of Czechia; Praděd, at 1,491 m, is the highest point in Moravia and Czech Silesia.",
    formation:
      "Built mainly of metamorphic rock, the summit and gentle slopes escaped intense glacial carving during the last ice age; instead they preserve extensive alpine tundra and block-field (felsenmeer) landforms shaped by strong wind and cold, among the best-preserved examples of their kind in Central Europe.",
    observation:
      "From the air, Praděd's summit is broad and gently sloping, covered in grey-white block fields and tundra vegetation, its television tower clearly visible — a sharp contrast to the steep glacial peaks of Krkonoše.",
    distinguish:
      "Jeseníky and Krkonoše are both part of the Sudetes, but Jeseníky's summit is broader and gentler, known for its alpine tundra and block fields, while Krkonoše shows steeper, more classic glacial landforms.",
    concept:
      "The extensive alpine tundra preserved at the summit of Jeseníky is an important sample for studying how strong wind and cold together can abnormally lower the vegetation treeline on mid-elevation Central European mountains.",
    // history sources: 普拉迭德峰 1491 m 为摩拉维亚与捷克西里西亚最高点；PLA 1969 年设立；山顶电视塔 1968 年动工、1980 年投入使用、1983 年全部工程（含山顶餐厅）竣工 —— 原文把动工年当成了建成年。核实 2026-09-11
    history:
      "The television tower atop Praděd, begun in 1968 and in service since 1980, remains in continuous use; the Jeseníky Protected Landscape Area was established in 1969, and the region was historically also an important center of Central European linen weaving.",
  },
  "moravskoslezske-beskydy": {
    // 全六段 sources: 利萨山 1323 m 为该山系最高峰；年均降水约 1500 mm，为捷克降水最丰沛地区之一；喀尔巴阡砂岩（flysch）成因描述准确。核实 2026-09-11，未改动
    seeing:
      "The Moravian-Silesian Beskids are the easternmost part of Czechia's Carpathian mountains, bordering Slovakia; Lysá hora, at 1,323 m, is the highest peak.",
    formation:
      "The range is built of sedimentary rock — mainly interbedded sandstone and shale known as \"Carpathian flysch\" — long weathered and eroded into rounded relief, with pronounced vegetation zonation on its slopes.",
    observation:
      "From the air, Lysá hora's rounded summit appears slightly bald, a legacy of once-sparse tree cover, surrounded by densely forested slopes cut by numerous streams — one of Czechia's wettest and most stream-rich mountain areas.",
    distinguish:
      "The Moravian-Silesian Beskids and Poland's Beskids both belong to the outer Carpathian arc, but the Moravian-Silesian Beskids lie at Czechia's easternmost edge and are known for their especially heavy rainfall.",
    concept:
      "Lysá hora's roughly 1,500 mm annual rainfall is a classic sample for studying orographic (uplift-driven) precipitation on a Carpathian windward slope.",
    history:
      "The range historically formed part of the Wallachian shepherds' transhumance route along the Carpathians, and traditional mountain pastures and timber-frame buildings survive here to this day.",
  },
  "luzicke-hory": {
    // seeing sources: 境内最高点为佩恩卡夫奇丘 792 m（捷克两县间的界峰、不在国际边界上）；耶德洛瓦峰 776 m 为山系第三高、最具辨识度的火山锥；山系整体最高的劳舍峰 793 m 压在捷德边境上（concept 段原本就写对了 —— 原错在 seeing 段把「境内最高点」挂给了耶德洛瓦峰）。PLA 1976 年设立。跨境表述中性。核实 2026-09-11
    seeing:
      "The Lužické hory (Lusatian Mountains) are a range of sandstone hills of the western Sudetes along the Czech-German (Saxony) border; Pěnkavčí vrch, at 792 m, is the highest point entirely within Czech territory; Jedlová, at 776 m, is the range's third-highest peak and its most recognisable volcanic cone.",
    formation:
      "The range is built mainly of Cretaceous marine sandstone, interspersed with conical volcanic-rock hills from Cenozoic volcanic activity — two quite different rock types and landforms coexisting within one range, making it a useful sample of a mixed sedimentary-volcanic mountain system.",
    observation:
      "From the air, Jedlová shows a classic conical profile with a lookout tower on its summit, surrounded by dense forest; the range as a whole is not high, but its outline varies considerably.",
    distinguish:
      "Lužické hory and Bohemian Switzerland both belong to the Elbe sandstone landscape, but Lužické hory is higher with more prominent volcanic cone remnants, while Bohemian Switzerland is more typically defined by deep gorges and rock towers.",
    concept:
      "The fact that the range's highest peak, Lausche, sits right on the Czech-German border shows that a mountain range's name and the location of its highest point don't always align neatly with a single national boundary.",
    history:
      "The Lužické hory Protected Landscape Area was established in 1976; the region's rich forest resources historically supported local forestry and glassmaking industries.",
  },
  "novohradske-hory": {
    // 全六段 sources: 卡梅内茨峰 1072 m 为捷克一侧最高峰，距奥地利边境约 400–500 m。跨境表述中性、不涉主权。核实 2026-09-11，未改动
    seeing:
      "The Novohradské hory (Gratzen Mountains) are an ancient range along the southern edge of the Bohemian Massif on the Czech-Austrian border; Kamenec, at 1,072 m, is the highest peak on the Czech side, only about 400 m from the Austrian border.",
    formation:
      "Built of ancient granite and gneiss, the range has been worn low and rounded by long erosion; forest cover is high and population density low, making it one of the better-preserved ancient-basement border ranges of the Bohemian Massif.",
    observation:
      "From the air, the Novohradské hory show gentle, continuous relief, almost entirely forested, dotted with small alpine wetlands and peat bogs, with no steep bare summits.",
    distinguish:
      "Novohradské hory and Šumava are both low, ancient ranges along Czechia's southern border with Austria, but Novohradské hory is smaller and forms the southward extension of the Bohemian-Moravian Highlands, while Šumava is a larger, independent range that extends to the German border.",
    concept:
      "The Novohradské hory's long stretch as an off-limits Cold War border-control zone with almost no human presence is a good sample for studying how restricted human activity can indirectly preserve mountain ecological authenticity.",
    history:
      "The region was historically sparsely populated, with small-scale glassmaking and forestry in the 19th and early 20th centuries; strictly controlled as an \"Iron Curtain\" border zone during the Cold War, it has more recently shifted toward ecotourism.",
  },
  "ceskomoravska-vrchovina": {
    // 全六段 sources: 亚沃日采峰 837 m 为捷克—摩拉维亚高地及维索基纳州最高点。核实 2026-09-11，未改动
    seeing:
      "The Bohemian-Moravian Highlands are an ancient, low upland formed by exposed basement of the Bohemian Massif, running across south-central Czechia and marking the boundary between the historic regions of Bohemia and Moravia; Javořice, at 837 m, is the highest point.",
    formation:
      "The highlands are built of Precambrian to Paleozoic crystalline rock, among the oldest exposed rock in the Bohemian Massif; hundreds of millions of years of repeated weathering and peneplanation have produced today's gently undulating upland relief rather than a rugged mountain range.",
    observation:
      "From the air, the Bohemian-Moravian Highlands show broad, gently rolling hill-like relief, forest interspersed with farmland and pasture, with no clear dominant peak or escarpment — a textbook ancient peneplain landform.",
    distinguish:
      "The Bohemian-Moravian Highlands and Poland's Świętokrzyskie Mountains both feature exposed ancient crystalline basement, but the Bohemian-Moravian Highlands are far larger, crossing all of south-central Czechia, while the Świętokrzyskie is a comparatively isolated old range within Poland.",
    concept:
      "The fact that Europe's main watershed (dividing the Elbe and Danube drainage basins) runs through the Bohemian-Moravian Highlands shows that a continental watershed need not follow a towering mountain range — an old, low upland can serve the same function.",
    history:
      "The highlands historically formed a border zone between the Kingdom of Bohemia and Moravia, with numerous medieval castle ruins along the divide; the gentle terrain and poor soils have long kept population density lower than in the surrounding lowlands.",
  },
  brdy: {
    // 全六段 sources: 托克峰 865 m。⚠️ 两个年份都对、不是矛盾：1926-02-19 政府决议设立炮兵靶场（正文「1926年起辟为」），1927 年靶场建成、区域开始对公众封闭（正文「1927至2016」）；1950 年起正式定为军事禁区，2016-01-01 撤销。冷战期间的活动限制按不点名的中性事实句式表述，符合红线判据。核实 2026-09-11，未改动
    seeing:
      "Brdy is a forested range of hills running roughly 60 km southwest to northeast through central Czechia; Tok, at 865 m, is its highest point.",
    formation:
      "The hills are built of ancient Precambrian to Paleozoic rock, long weathered and eroded into today's low, rolling relief, with extremely high forest cover.",
    observation:
      "From the air, Brdy appears as an unbroken band of dark forest, with almost no exposed rock or visible settlement — a sharp contrast to the more developed farmland surrounding it.",
    distinguish:
      "Brdy and the Bohemian-Moravian Highlands are both low, ancient hill regions in central Czechia, but Brdy's forest is far better preserved and less disturbed thanks to its long history as a restricted military zone, while the Bohemian-Moravian Highlands are larger and mostly given over to farming and pasture.",
    concept:
      "Brdy's closure to the public as a military training area from 1927 to 2016 is a classic case for studying how restrictions on land use for military purposes can incidentally serve conservation.",
    history:
      "Established as a military training ground in 1926, it was formally designated a restricted military zone from 1950 to 2016 — nearly 90 years of closure; it was redesignated a protected landscape area in 2016 and opened to the public, and some military installations remain today.",
  },
  "ceske-stredohori": {
    // 全六段 sources: 米莱绍夫卡峰 837 m 为该高地最高峰；约 73.6% 岩石为玄武岩（stredohori.cz，2 级）。核实 2026-09-11，未改动
    seeing:
      "The Central Bohemian Uplands (České středohoří) are the most prominent evidence of Cenozoic volcanic activity in Czechia, with numerous conical basalt and trachyte hills rising along the Ohře valley; Milešovka, at 837 m, is the highest point.",
    formation:
      "About 73.6% of the uplands' rock is basalt, with the remainder trachyte and a small amount of andesite — volcanic landforms produced when magma rose along the Cenozoic Ohře rift and erupted at the surface; long erosion has since worn most of the volcanic cones down into isolated conical remnants.",
    observation:
      "From the air, the Central Bohemian Uplands present a classic \"field of peaks\" landscape — dozens of similarly shaped conical hills scattered across open lowland; Milešovka's outline is especially crisp thanks to its year-round winds and sparse summit vegetation.",
    distinguish:
      "Both the Central Bohemian Uplands and Lužické hory contain volcanic conical remnants, but the Central Bohemian Uplands' volcanic landforms are larger in scale and far denser, the most concentrated area of Cenozoic volcanic activity in Czechia, while Lužické hory's volcanic remnants are limited and the range is mainly sandstone.",
    concept:
      "The dense scattering of dozens of conical hills across the Central Bohemian Uplands is a textbook sample for studying how volcanic activity along a Cenozoic rift, once eroded, can leave behind clusters of isolated conical remnants.",
    history:
      "The uplands along the Ohře valley have long been an important farming and viticulture region, with fertile soils weathered from volcanic rock; numerous medieval castle ruins are also scattered throughout.",
  },
  "pavlovske-vrchy": {
    // 全六段 sources: 杰温峰 550 m 为帕拉瓦最高点；1986 年经 UNESCO 纳入生物圈保护区（2003 年扩展并更名为「下摩拉瓦」）—— 本条对应的是 1986 这一期，未借用 2003（unesco.org/en/mab/lower-morava，1 级）。核实 2026-09-11，未改动
    seeing:
      "Pavlovské vrchy (Pálava) is a narrow, isolated ridge of Jurassic chalky limestone in South Moravia; Děvín, at 550 m, is the highest point.",
    formation:
      "The ridge is built of Jurassic shallow-marine chalky limestone, weathered locally into steep cliffs; it lies in the driest part of Moravia, with a climate closest to the Pannonian type found anywhere in the country.",
    observation:
      "From the air, Pavlovské vrchy appears as a narrow, raised white limestone ridge surrounded by extensive vineyards and farmland, forming a stark contrast with the flat Lower Morava Valley below.",
    distinguish:
      "Pavlovské vrchy and the Bohemian-Moravian Highlands are both in Moravia, but Pavlovské vrchy is a small, isolated limestone ridge, while the Bohemian-Moravian Highlands is a much larger ancient crystalline upland.",
    concept:
      "The rare steppe and forest-steppe ecological communities preserved on Pavlovské vrchy are a classic sample for studying how a Pannonian-type dry climate can shape a distinctive ecosystem within one small pocket of Czechia.",
    history:
      "UNESCO incorporated the area into the Lower Morava Biosphere Reserve in 1986; the nearby Lednice-Valtice landscaped estate and the surrounding wine-growing tradition have a long history and make this one of Czechia's most important wine-culture regions.",
  },
  "cesky-raj": {
    // 全六段 sources: 1955 年设立，为捷克斯洛伐克首个受保护景观区（182 km²）；2015 年成为 UNESCO 世界地质公园；砂岩塔高可达 40 m。核实 2026-09-11，未改动
    seeing:
      "Český ráj (Bohemian Paradise) was one of the first nature reserves established in Czechia (1955), formed from thick Late Cretaceous marine sandstone eroded into clusters of rock towers and \"rock labyrinths\"; Prachov Rocks is the most representative area within the park.",
    formation:
      "The sandstone here was deposited on the seabed roughly 80–90 million years ago in the Late Cretaceous; weathering along vertical joints has fractured it into isolated towers, pillars and narrow crevices, with towers reaching up to 40 m in height.",
    observation:
      "From the air, Prachov Rocks shows a dense cluster of rock towers rising among thick forest, their tops rising and falling irregularly against the canopy, with narrow crevice paths between them forming a maze-like ground network.",
    distinguish:
      "Both Český ráj and the Adršpach-Teplice Rocks are Late Cretaceous sandstone \"rock city\" landforms, but Český ráj's towers are more densely clustered over a smaller area, while Adršpach-Teplice is one of the largest continuous sandstone rock cities in Central Europe.",
    concept:
      "The maze-like landform formed by narrow crevices between the towers of Český ráj is a classic sample for studying how thick sandstone, weathering differentially along vertical joints, gradually breaks apart into isolated rock bodies.",
    history:
      "The entire area joined the UNESCO Global Geoparks Network in 2015; several rock summits have carried miniature castles since the Middle Ages (such as Trosky Castle), a rare tradition of castle-building atop rock towers in Europe.",
  },
  "adrspach-teplice-rocks": {
    // 全六段 sources: 1933 年列为国家级自然保护区、1991 年布鲁莫夫斯科划为 PLA；岩塔高可达 40 m。核实 2026-09-11，未改动
    seeing:
      "The Adršpach-Teplice Rocks are a maze of rock towers and canyons carved by weathering and fracturing from a single sandstone massif in the Broumovsko region of northeastern Czechia — one of the largest continuous sandstone \"rock cities\" in Central Europe.",
    formation:
      "The rock city was originally a single continuous mass of Late Cretaceous marine sandstone; long weathering along vertical and horizontal joints fractured it into numerous isolated towers, pillars and chimney-like formations, some reaching up to 40 m in height.",
    observation:
      "From the air, the Adršpach-Teplice Rocks appear as a dense forest of grey-white towers criss-crossed by narrow canyons, far larger in scale than surrounding sandstone landscapes — the most easily recognized rock-tower landform in Czechia from the air.",
    distinguish:
      "Both Adršpach-Teplice and Český ráj are Late Cretaceous sandstone \"rock city\" landforms, but Adršpach-Teplice is continuous and among the largest of its kind in Central Europe, while Český ráj's towers are more scattered and smaller in extent.",
    concept:
      "The tradition of giving the rock city's many towers anthropomorphic names such as \"The Lovers\" and \"The Mayor and His Wife\" is a good sample for studying how folk tradition builds collective imagination and local identity around the shapes of natural landforms.",
    history:
      "Protected as a national nature reserve since 1933, with the wider Broumovsko region designated a protected landscape area in 1991; the rock city's striking scenery has also made it a filming location for several European and American films.",
  },
  "polabi-lowland": {
    // 全六段 sources: 海拔多在 150–300 m 之间 —— 与捷克语维基对波拉比的定义原句（nadmořské výšce mezi 150 a 300 metry）逐字对应。核实 2026-09-11，未改动
    seeing:
      "Polabí (the Elbe Lowland) extends along the middle Elbe roughly between Pardubice and Mělník, at elevations mostly between 150 and 300 m, and is an important grain and produce-growing region of Czechia.",
    formation:
      "The lowland is built of alluvium deposited by rivers since the last ice age, flat and open with fertile soil, forming one of Czechia's lowest-lying, most agriculturally central regions.",
    observation:
      "From the air, Polabí presents a neat patchwork of farmland, with the Elbe and Vltava rivers winding through it; the confluence of the two great rivers near Mělník is clearly visible, and historic towns dot the river terraces.",
    distinguish:
      "Polabí and the Lower Morava Valley are both important flat agricultural lowlands in Czechia, but Polabí lies along the middle Elbe with a temperate continental climate, while the Lower Morava Valley lies at Czechia's southern tip with a drier, more Pannonian-type climate.",
    concept:
      "As one of Czechia's lowest-lying and most agriculturally valuable regions, Polabí is a classic sample of the \"lowland\" end of the country's overall \"ringed by mountains, low in the middle\" landform pattern.",
    history:
      "Mělník has been an important river-trade hub and wine-growing center since the Middle Ages, and the town still preserves a historic castle and vineyards overlooking the confluence of the two rivers.",
  },
  "dolnomoravsky-uval": {
    // 全六段 sources: 潘诺尼亚气候型农业景观、葡萄种植、莱德尼采庄园描述与地理资料一致。⚠️ 年降水量「550至650毫米」各口径互相矛盾且**没有一处支持 650 这个上限**（有资料称不足 500 mm、也有站点给 587–597 mm），「是捷克最干旱的地区」这一排名也需一并确认口径 —— 见 issue，正文暂不动。核实 2026-09-11
    // seeing sources: 降水区间无出处、「最干旱」另有所指，改为「之一」。核实 2026-09-12
    seeing:
      "The Lower Morava Valley is a lowland along the lower Morava River spanning Czechia's borders with Austria and Slovakia; its climate leans Pannonian, with low rainfall, making it one of the driest regions in Czechia.",
    formation:
      "The lowland is built of alluvium deposited by the Morava River and its tributaries, together with calcium-rich loess-like parent material, forming Czechia's warmest and driest farming region.",
    observation:
      "From the air, the Lower Morava Valley presents an extensive patchwork of vineyards and farmland, dotted with the landscaped gardens and ponds of the Lednice-Valtice estate — a sharp contrast in both landform and climate with the more mountainous north.",
    distinguish:
      "The Lower Morava Valley and Polabí are both important flat farming lowlands in Czechia, but the Lower Morava Valley has a drier, Pannonian-leaning climate known for viticulture, while Polabí has a temperate continental climate focused on grain and produce.",
    concept:
      "The combination of abundant sunshine and calcium-rich loess parent material in the Lower Morava Valley is the key geographic condition behind why viticulture is so concentrated in this small corner of Czechia.",
    history:
      "The Lednice-Valtice landscaped estate, developed over centuries by the House of Liechtenstein, was inscribed as a UNESCO World Heritage Site in 1996 and is one of Europe's largest deliberately landscaped estates; the surrounding wine-growing tradition dates back to the Middle Ages.",
  },
  "labe-river": {
    // seeing sources: 总长约 1094 km（FGG Elbe 捷德跨国流域委员会，1 级：捷克境内约 364.52 km + 德国境内约 726.95 km）—— 原写的 1165 km 与本库德国侧 elbe-river 已核实的 1094 km 打架，本轮统一。「约三分之一在捷克境内」比例正确。赫热恩斯科出境处约 115 m 为捷克全境最低点。核实 2026-09-11
    seeing:
      "The Labe (Elbe) runs about 1,094 km in total, roughly a third of it through Czechia; it rises on the southern slope of Krkonoše and finally cuts through the Krušné hory near Hřensko before entering Germany.",
    formation:
      "The upper Elbe rises in the alpine peat bogs of Krkonoše, flowing southwest then turning north across the Bohemian Basin; downstream, in the Bohemian Switzerland region, it cuts through a Cretaceous sandstone plateau to form a deep gorge — a classic sample for studying how a river shapes very different landforms as it crosses different rock types.",
    observation:
      "From the air, the upper Elbe valley is broad and gentle; entering Bohemian Switzerland the channel narrows with steep cliffs on both banks, and near Hřensko, where the river leaves Czechia, the elevation is only about 115 m — the lowest point in the country.",
    distinguish:
      "Both the Elbe and Vltava are major Czech rivers, but the Elbe rises in northeastern Czechia and carries only about a third of its total flow through the country before leaving it, while the Vltava runs entirely through southern and central Czechia and joins the Elbe at Mělník.",
    concept:
      "The point where the Elbe leaves Czechia near Hřensko (elevation about 115 m) and the summit of Krkonoše (Sněžka, 1,603 m) are respectively the lowest and highest points in the country — the elevation difference between them encapsulates Czechia's overall \"ringed by mountains, low in the middle\" landform pattern.",
    history:
      "The Elbe was historically an important international shipping route in Central Europe, and the stretch below Mělník still carries some inland freight traffic today; several historic towns along its banks grew up around river trade.",
  },
  "vltava-river": {
    // 全六段 sources: 全长 430.2 km，捷克第一长河、「国家河流」，于梅尔尼克与易北河汇合。核实 2026-09-11，未改动
    seeing:
      "The Vltava is Czechia's longest river at 430 km, and the Elbe's largest tributary by volume; it rises in Šumava and joins the Elbe at Mělník.",
    formation:
      "The upper Vltava rises at the source of the Black Vltava in Šumava; the river has long eroded the bedrock of the Bohemian Basin, cutting deep meanders at stretches such as Český Krumlov, while the middle and lower course was reshaped by 20th-century hydroelectric works, linking a chain of reservoirs including Lipno.",
    observation:
      "From the air, the upper Vltava valley is narrow and winding; in the middle course, regulated by reservoirs such as Lipno and Slapy, the river widens, and the stretch through central Prague forms a gentle meander around the city — one of Czechia's most recognizable urban river landscapes.",
    distinguish:
      "The Vltava and Morava are the backbone rivers of Bohemia and Moravia respectively, but the Vltava ultimately joins the Elbe and flows to the North Sea, while the Morava joins the Danube and flows to the Black Sea — the two belong to entirely different European drainage systems.",
    concept:
      "Although the Vltava is longer and carries more water than the Elbe, it nominally \"joins\" the Elbe rather than the reverse — a useful case for studying how hydrological naming conventions for a \"main stem\" don't always strictly follow flow volume or length.",
    history:
      "Prague has developed along both banks of the Vltava since the 10th century, with landmarks such as Charles Bridge built directly over the river; the 20th-century cascade of reservoirs on the Vltava greatly altered the river's natural hydrological rhythm while adding flood control, power generation and tourism functions.",
  },
  "ohre-river": {
    // 全六段 sources: 总长 304.6 km、境内约 256 km、捷克第四长河 —— 三项逐字匹配。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "The Ohře (Eger) runs about 305 km in total, about 256 km of it through Czechia, making it the country's fourth-longest river; it rises in Germany, enters Czechia at Cheb, and joins the Elbe near Litoměřice.",
    formation:
      "The Ohře follows a Cenozoic tectonic rift (the Ohře graben), passing through several sedimentary basins including the Sokolov and Karlovy Vary basins; fault activity along the rift has brought numerous mineral and thermal springs to the surface along its course.",
    observation:
      "From the air, the upper Ohře valley is broad and gentle; passing through Karlovy Vary, its banks are lined with historic spa colonnades — one of Czechia's most recognizable river-valley townscapes.",
    distinguish:
      "Both the Ohře and Elbe flow through northwestern Czechia, but the Ohře is a tributary of the Elbe known for its riverside spa towns, while the Elbe is the country's backbone river, known downstream for its sandstone gorge landforms.",
    concept:
      "The dense cluster of mineral and thermal springs along the Ohře is a classic geographic case for studying how a Cenozoic tectonic rift graben can provide upward pathways for groundwater, giving rise to a spa-town industry.",
    history:
      "Karlovy Vary has been famous across Europe for its hot springs since the 16th century, historically drawing European royalty and cultural figures for treatment; in 2021 the transnational \"Great Spa Towns of Europe\" listing inscribed Karlovy Vary along with Mariánské Lázně and other Czech spa towns as a UNESCO World Heritage Site.",
  },
  "morava-river": {
    // seeing sources: 全长 353–354 km（Povodí Moravy 官方，1 级），境内段约 284 km —— 原写的 365 km 无捷克官方口径支撑。源出克拉利茨基山南坡属实。跨境表述中性、不涉主权。核实 2026-09-11
    seeing:
      "The Morava runs about 354 km, rising on the southern slope of Králický Sněžník and flowing south the length of Moravia; downstream it forms the border between Czechia and Slovakia, and then Slovakia and Austria, before joining the Danube.",
    formation:
      "The upper Morava flows through the valley between Jeseníky and the Bohemian-Moravian Highlands; entering the Lower Morava Valley, the channel becomes gentle and wide, with a long history of active meandering that has produced numerous oxbow lakes and side channels.",
    observation:
      "From the air, around Litovel the Morava splits into six branches threading through the town, forming a web-like waterway landscape known as \"Moravian Venice\"; downstream, the meander belt preserves extensive natural floodplain wetlands.",
    distinguish:
      "The Morava and Vltava are the backbone rivers of Moravia and Bohemia respectively, but the Morava joins the Danube and flows to the Black Sea, while the Vltava joins the Elbe and flows to the North Sea.",
    concept:
      "The historic region name \"Moravia\" itself derives from the Morava River — a classic case for studying the common European pattern of naming historic-geographic regions after their backbone river.",
    history:
      "Litovel developed into a milling and textile center from the Middle Ages thanks to the river's branching channels; the downstream floodplain wetlands were historically important for fishing, hunting and grazing, and parts of the river are now designated nature reserves.",
  },
  "ceske-svycarsko": {
    // 全六段 sources: 普拉夫齐茨卡石拱跨度 26.5 m、内部净高 16 m，为欧洲最大天然砂岩拱门；国家公园 2000-01-01 设立，是捷克最年轻的国家公园。**与德国侧 saxon-switzerland 并排读**：两条各写各自园区的地标数字，无重叠冲突。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "Bohemian Switzerland (the Elbe Sandstone Mountains) is a landscape of deep gorges and rock towers where the Elbe cuts through a Late Cretaceous marine sandstone plateau; the park's Pravčická brána is the largest natural sandstone arch in Europe.",
    formation:
      "The region's bedrock is thick Late Cretaceous marine sandstone; the Elbe and its tributaries have long eroded through the sandstone plateau, forming deep gorges with steep cliffs on both banks, while tributary erosion has carved many narrow crevice canyons, another signature landform here.",
    observation:
      "From the air, Bohemian Switzerland shows a landscape of deep, forest-covered gorges interwoven with isolated rock towers; Pravčická brána spans between two rock masses with a 26.5 m span and 16 m interior clearance, the park's most recognizable landmark.",
    distinguish:
      "Both Bohemian Switzerland and Český ráj are landforms produced by weathering of Late Cretaceous sandstone, but Bohemian Switzerland is defined mainly by the Elbe's deep gorge and its isolated giant rock arch, while Český ráj is defined mainly by its dense cluster of rock towers and \"rock labyrinth.\"",
    concept:
      "The formation of large natural sandstone arches like Pravčická brána is a classic sample for studying how sandstone, weathering differentially along weak joint planes over a long period, can end up leaving only a hard arch-shaped rock body standing.",
    history:
      "Bohemian Switzerland National Park was established in 2000; the region's rugged terrain historically kept development low, and from the 19th century it became a favored landscape for Romantic-era painters and travelers — the name \"Bohemian Switzerland\" itself originated from 19th-century visitors comparing it to the mountain scenery of Switzerland.",
  },
  "podyji-gorge": {
    // 全六段 sources: 峡谷深可达 220 m；国家公园 1991 年设立，为捷克最小的国家公园；2000 年与奥地利塔亚河谷国家公园构成跨境保护区。表述未涉主权、未描述边界线。核实 2026-09-11，未改动
    seeing:
      "Podyjí (the Thaya/Dyje Gorge) is a canyon-like river valley carved by the Dyje River along the Czech-Austrian border, cutting through the southeastern edge of the Bohemian-Moravian Highlands over about 40 km, with the valley reaching up to 220 m deep.",
    formation:
      "The Dyje has long incised into the ancient crystalline basement of the highlands' southeastern edge, forming a canyon-like valley with steep walls and well-developed meanders; the valley features rocky domes, cliffs and river bends throughout.",
    observation:
      "From the air, Podyjí appears as a narrow green gorge cut deep into an otherwise gentle upland, the Dyje winding along its floor, with slopes alternating between dense forest, exposed rock faces and patches of warm, dry grassland.",
    distinguish:
      "Both Podyjí and the Moravian Karst are important gorge-type landforms in Moravia, but Podyjí is a surface gorge formed by the Dyje's long incision into crystalline basement rock, while the Moravian Karst is a karst landform formed by limestone dissolution — entirely different origins.",
    concept:
      "Podyjí's nearly 40-year history as an off-limits border-control zone after 1951 — during which its ecology was inadvertently preserved intact — is another classic sample (alongside Czechia's Brdy) for studying how restricted human activity can incidentally preserve ecological authenticity.",
    history:
      "Podyjí National Park, established in 1991, is Czechia's smallest national park; since 2000 it has formed a cross-border protected area together with Thayatal National Park on the Austrian side, with the two countries' park authorities maintaining long-running joint conservation cooperation.",
  },
  "moravsky-kras": {
    seeing:
      "The Moravian Karst is one of Central Europe's most important karst landscapes, built of Devonian limestone, with more than 1,100 caves and gorges mapped within about 100 km²; the Macocha Abyss is the park's most representative landmark.",
    formation:
      "The bedrock is Devonian limestone, dissolved over millions of years by groundwater into a dense cave system; the Macocha Abyss formed when the roof of a huge cave collapsed, reaching a vertical depth of 138.5 m to the surface of the lower lake, with the surveyed space beneath extending to a total depth of 187.5 m.",
    observation:
      "From the air, the Macocha Abyss appears as a huge shaft plunging abruptly into the ground, ringed by dense forest; the two lakes at its base take on a deep, dark green hue in certain light, standing in stark contrast to the gently rolling karst plateau around it.",
    distinguish:
      "Both the Moravian Karst and Podyjí are important gorge/incised landforms in Moravia, but the Moravian Karst is an underground karst system formed by limestone dissolution, characterized by caves and abysses, while Podyjí is a surface gorge cut by a river, with no cave system.",
    concept:
      "The fact that the Macocha Abyss formed from the collapse of a cave roof, rather than direct surface-water erosion, is a classic teaching case for distinguishing \"karst-collapse abysses\" from \"river-erosion gorges\" — two landforms with different origins.",
    // history sources: 已探明洞穴逾 1100 处；马措哈深渊至下湖水面 138.5 m、含水下探测总深 187.5 m；洞穴 1909 年首次照明开放、游船 1921-03-30 开通局部、1933-07-01 开通完整航线（捷克洞穴管理局，1 级）—— 原文的「19 世纪末」整体前移了一代；1956 年划设保护景观区属实。核实 2026-09-11
    history:
      "Boat trips on the underground Punkva River began on a short section in 1921 and were extended in 1933 to today's full route from the base of the Macocha Abyss to the river's outflow, one of Europe's oldest karst-cave tourism operations; the entire area was designated a protected landscape region in 1956.",
  },
  "chebsko-sokolovska-panev": {
    // 全六段 sources: 卡罗维发利间歇泉出水约 2000 L/分 ≈ 288 万 L/日（正文「约300万升」为同量级）；西波希米亚—福格特兰为持续活跃的地震群发区（Nový Kostel 震源区，1 级学术）；「欧洲大温泉城镇」2021 年列入 UNESCO（1 级）。核实 2026-09-11，未改动
    seeing:
      "The Cheb-Sokolov Basin (the Karlovy Vary spa basin) is a series of Cenozoic sedimentary basins formed along the Ohře tectonic rift in western Czechia; Karlovy Vary grew into a famous European spa town thanks to the mineral springs found here.",
    formation:
      "The basin formed through Cenozoic tectonic extension and subsidence, and crustal fault activity continues today, occasionally producing seismic activity; the rift has provided upward pathways for groundwater, giving rise to dozens of mineral springs of varying temperature and mineral content, with a combined output of about 3 million liters a day.",
    observation:
      "From the air, central Karlovy Vary shows historic spa colonnades lining both banks of the Teplá River, in stark land-use contrast with the extensive brown-coal mining areas of the nearby Sokolov Basin — within a single tectonic basin, one end is a spa resort, the other an industrial coal-mining district.",
    distinguish:
      "Both the Cheb-Sokolov Basin and the Central Bohemian Uplands relate to Cenozoic tectonic activity, but the Cheb-Sokolov Basin is a subsided basin known for its hot springs and brown-coal deposits, while the Central Bohemian Uplands is an uplifted landscape of volcanic cones formed by eruption.",
    concept:
      "Along the same Cenozoic tectonic rift (the Ohře graben), the Karlovy Vary segment produces mineral springs while the Sokolov segment holds brown-coal deposits — a classic case for studying how the same tectonic setting can give rise to entirely different regional economies depending on which geological product it yields.",
    history:
      "Karlovy Vary has been famous for its hot springs since the era of Charles IV in the 14th century, developing from the 16th century into a spa destination for European royalty and cultural figures; in 2021, the transnational \"Great Spa Towns of Europe\" listing inscribed Karlovy Vary together with Mariánské Lázně, Františkovy Lázně and other Czech spa towns as a UNESCO World Heritage Site.",
  },
  "lipno-reservoir": {
    // 全六段 sources: ⚠️ 长宽以**运营方 ČEZ 官网**为准（44 km 长、最宽约 14 km，1 级），英文维基 infobox 给的 42/5 km 与之不符，本轮采信运营方；面积 48.7 km²（正文「近50平方公里」准确）；正常蓄水位 725.6 m；1952 年动工、1958 年合龙蓄水、1959-06-15 正式发电，正文「1952至1959年」与施工历程吻合。核实 2026-09-11，未改动
    seeing:
      "The Lipno Reservoir is a hydraulic works built between 1952 and 1959 on the upper Vltava in the Šumava mountains, with a surface area of nearly 50 km² — the largest body of water in Czechia.",
    formation:
      "The reservoir formed by damming the upper Vltava valley; its normal operating level is 725.6 m above sea level, the reservoir is about 44 km long and up to 14 km wide, and its filling submerged several villages and farmland in the original valley.",
    observation:
      "From the air, Lipno appears as a long, narrow band of water set within Šumava's forested hills, its surface shifting between shades of blue and green in the sunlight, with a winding shoreline of peninsulas and coves standing out against the surrounding low forested hills.",
    distinguish:
      "Both Lipno and Lake Mácha are important lake-type bodies of water in Czechia, but Lipno is a 20th-century hydroelectric reservoir and the largest by surface area in the country, while Lake Mácha is a much smaller historic pond dating to the 14th century.",
    concept:
      "Lipno's combined role in flow regulation, hydroelectric power and summer tourism is a classic case for studying how a large 20th-century Central European hydraulic project can, alongside meeting infrastructure needs, gradually develop a tourism economy of its own.",
    history:
      "Some residents of the original valley were resettled when the reservoir was built; from the later 20th century it developed into one of southern Czechia's most important inland vacation and watersports destinations, with the lakeside town of Lipno nad Vltavou as its main gateway.",
  },
  "machovo-jezero": {
    // 全六段 sources: 面积 2.84 km²（284 ha）；14 世纪（1366 年）查理四世下令建塘；1961 年正式改名「马哈湖」，此前俗称「大鱼塘」（Velký rybník）。核实 2026-09-11，未改动
    seeing:
      "Lake Mácha (Máchovo jezero) is an artificial pond in northern Czechia covering 2.84 km², the largest body of water in the Liberec Region, popularly called a \"lake\" owing to its size.",
    formation:
      "The lake is essentially an artificial pond, created on the orders of Charles IV in the 14th century to regulate regional water supply and support fish farming — not a natural lake — and was gradually converted into a summer resort after beach improvements in the 1930s.",
    observation:
      "From the air, Lake Mácha shows an irregular polygonal outline with a winding shoreline of small peninsulas and inlets, its shores densely lined with artificial beaches and resort facilities — one of northern Czechia's most recognizable recreational waters.",
    distinguish:
      "Both Lake Mácha and Lipno are artificial impounded bodies of water in Czechia, but Lake Mácha dates to the 14th century and is very small, while Lipno was built in the mid-20th century and is the largest in the country.",
    concept:
      "The fact that Lake Mácha, though technically an artificial pond, is universally called a \"lake\" is a classic case for studying how everyday geographic naming doesn't always align strictly with formal landform classification (natural lake vs. artificial pond).",
    history:
      "The lake takes its name from the 19th-century Czech Romantic poet Karel Hynek Mácha, who visited repeatedly and used it as the setting for his celebrated long poem \"Máj\" (May); it was formally named after him in 1961, having previously been known simply as the \"Great Pond.\"",
  },
  "vltava-valley-cesky-krumlov": {
    // 全六段 sources: 古城 1992-12-04 列入 UNESCO；克鲁姆洛夫城堡始建于 13 世纪。核实 2026-09-11，未改动
    seeing:
      "The Vltava meander at Český Krumlov is a deep meander cut by the river at the northern foot of Šumava, its channel forming a double horseshoe that nearly encircles the historic town center; the entire old town was inscribed as a UNESCO World Heritage Site in 1992.",
    formation:
      "The river has long eroded the bedrock of the Bohemian Basin here, forming two tightly linked horseshoe bends; Krumlov Castle, founded in the 13th century, stands on the rocky bluff inside the meander, taking full advantage of the natural defensive terrain the bend provides.",
    observation:
      "From the air, the Vltava traces a double \"S\" shape almost completely encircling the old town center, with the red-roofed medieval town and castle complex arrayed along the riverside bluffs; the distinct urban fabric on either side of the meander is clearly visible — one of Czechia's tightest integrations of river landform and historic townscape.",
    distinguish:
      "Both the Český Krumlov meander and the Vltava's stretch through central Prague are urban river landscapes along the same river, but the Český Krumlov meander is far more pronounced, nearly encircling the old town entirely, while the Prague stretch is straighter, wider, and set within a much larger city.",
    concept:
      "The town's name, \"Krumlov,\" derives from the German \"Krumme Aue\" (meaning \"crooked meadow\"), referring directly to the river's meander — a classic case for studying how European historic place names can derive directly from local landform features.",
    history:
      "The castle was founded in the 13th century and passed through several noble families including the Vítkovci and the Rosenbergs; the historic town center was inscribed as a UNESCO World Heritage Site in 1992, and it remains one of the best-preserved small medieval towns in Central Europe.",
  },
};
