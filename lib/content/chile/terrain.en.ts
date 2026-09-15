import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  "andes-chile": {
    // seeing sources: 「约4300公里」无出处（疑为国土跨度），删去。核实 2026-09-12
    seeing:
      "The Andes are the world's longest mountain range, running the length of South America's west coast; the Chilean stretch runs along the Chile–Argentina border, spanning almost the country's entire north–south length. Its anchor, Ojos del Salado, at 6,893 m, is the world's highest active volcano and South America's second-highest peak after Aconcagua.",
    formation:
      "The Andes formed as the Nazca Plate subducts eastward beneath the South American Plate, a textbook case of subduction-zone mountain building; the Chilean stretch is dotted with dozens of active volcanoes, and volcanic and seismic activity remains among the most frequent along the entire Pacific Ring of Fire.",
    observation:
      "From the air, the Andes form a near-continuous natural barrier along Chile's border: the northern section is a plateau studded with salt flats and volcanic cones, the central section a chain of permanently snow-capped peaks, and the southern section dissolves into Patagonia's ice fields and fjords — the range's character shifts dramatically with latitude.",
    distinguish:
      "Unlike Paine Massif, Villarrica, or the other individually listed peaks, this entry covers the overall spine of the Chilean Andes as a whole; those peaks are distinctive landmarks along this main ridge, each with its own story.",
    concept:
      "The Andes are not a single ridge but a composite system of parallel ranges, plateaus, and volcanic belts; Chile's classic three-part landscape structure — coastal range, central valley, Andes — is built around this range as its eastern spine.",
    history:
      "The Andes have long formed the backdrop for the lives and migrations of Indigenous peoples such as the Atacameño and Mapuche; at its height the Inca Empire's territory extended along the Andes into north-central Chile. The mountains today still combine traditional herding and mining with modern industry.",
  },
  "cordillera-de-la-costa": {
    // seeing / history sources: 拉坎帕纳峰 1880 m；达尔文 1834-08-17 登顶考察；国家公园 1985-02-15 列为 UNESCO 生物圈保护区。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Chilean Coastal Range is an ancient, low range running parallel to the Andes along the Pacific coast, forming the western wall of Chile's three-part landscape structure. Its central section, near Santiago and Valparaíso, rises to 1,880 m at La Campana National Park.",
    formation:
      "This range is an older geological unit at the continent's edge, predating the Andes; prolonged weathering has left it relatively low and rounded, in sharp contrast to the younger, steeper Andes to the east.",
    observation:
      "From the air, the Coastal Range appears as a green screen hugging the Pacific, separating the inland Central Valley from the ocean; it is narrower and lower in the north-center, while in the south it gradually converges with — and even merges into — the Andes, producing the complex coastline around Chiloé.",
    distinguish:
      "Both the Coastal Range and the Andes run roughly north–south, but the Coastal Range is older, lower, and closer to the sea, with the Central Valley between them; the Andes are younger and steeper, forming the Chile–Argentina border.",
    concept:
      "The coastal range–central valley–Andes structure is the most basic framework for understanding Chile's landscape as a whole, running continuously from the northern desert to the south-central lake district, with the relative width and relief of each band shifting with latitude.",
    history:
      "In 1834, naturalist Charles Darwin climbed La Campana during the voyage of the Beagle, and his notes became an important early record of Chilean geology; the peak left its mark on the history of natural science, and La Campana National Park was designated a UNESCO Biosphere Reserve in 1985.",
  },
  "villarrica-volcano": {
    // seeing / history sources: 海拔 2847 m（SERNAGEOMIN RNVV，1 级）；2015 年喷发史实无误。
    //   ⚠️ C8 状态类：截至 2026-09 SERNAGEOMIN 已上调至黄色警戒（amarilla），岩浆湖持续存在并向浅表移动。
    //   正文写「常年能观测到发光的岩浆湖」（长期特征）与「2015 年**曾**发生喷发」（历史事实），**两处都不含时点断言、不会过期**，判定不改。2026-09-10 核，verdict: ok。
    seeing:
      "Villarrica is one of the most iconic active volcanoes in Chile's Lake District, at 2,847 m and permanently snow-capped; its crater regularly hosts a visible glowing lava lake, making it one of the few volcanoes in South America where active lava can be observed on a near-continuous basis.",
    formation:
      "Villarrica is part of the volcanic chain along the southern Andes, a stratovolcano built up from repeated basaltic-andesitic eruptions; a persistent lava lake sits within its crater, and its eruptions are typically Strombolian in style.",
    observation:
      "From the air, Villarrica is a strikingly symmetrical conical volcano, its snow-white summit mirrored in Lake Villarrica below; on night flights, the crater occasionally shows a faint red glow.",
    distinguish:
      "Villarrica and Osorno, both in the Lake District, share a nearly symmetrical cone shape, but Villarrica's crater regularly hosts an active lava lake — a key marker of eruptive activity — while Osorno has not erupted since 1869 and is markedly less active.",
    concept:
      "Villarrica is a classic case study of a 'persistently active volcano' — one that sustains lava lake activity without major eruptions, giving volcanologists a natural laboratory for observing magma dynamics up close.",
    history:
      "The town of Pucón, at Villarrica's foot, has become one of the most popular outdoor destinations in Chile's Lake District, with a summit crater hike a classic local excursion; the volcano erupted in 2015, with nearby residents evacuated in time and no major casualties.",
  },
  "osorno-volcano": {
    // seeing / history sources: 海拔 2652 m、末次喷发 1869 年（SERNAGEOMIN RNVV，1 级）；
    //   19 世纪起的德国移民与普埃尔托瓦拉斯、弗鲁蒂利亚的德式风貌属广泛记载的地方史，非争议性表述。2026-09-10 核，verdict: ok。
    seeing:
      "Osorno is an exceptionally symmetrical stratovolcano at 2,652 m, often called 'Chile's Mount Fuji' for its resemblance to Japan's iconic peak; it stands between Lake Llanquihue and Lake Todos los Santos, one of the Lake District's most photographed landmarks.",
    formation:
      "Osorno was built up from repeated basaltic-andesitic lava flows, producing an unusually well-preserved, evenly sloped cone that serves as a textbook example of stratovolcano form; its summit remains permanently glaciated.",
    observation:
      "From the air, Osorno is an almost perfect cone, its snow-covered form mirrored in Lake Llanquihue, and together with distant Calbuco Volcano it makes for the classic postcard view of Chile's Lake District.",
    distinguish:
      "Unlike the frequently erupting Villarrica and Llaima, Osorno has recorded more than 10 eruptions over the past two centuries, but its most recent was in 1869; it is now in a relatively quiet phase — the Lake District's 'beautiful, dormant volcano.'",
    concept:
      "Osorno is an entry-level case study of the classic stratovolcano form: a symmetrical cone, even slopes, built from alternating layers of lava and pyroclastic material from repeated eruptions — a contrast to the irregular forms of shield volcanoes or calderas.",
    history:
      "Beginning in the 19th century, the area around Osorno drew large numbers of German immigrants, and lakeside towns such as Puerto Varas and Frutillar still retain a strong German architectural character today — a core landmark of southern Chile's 'German settlement belt.'",
  },
  "llaima-volcano": {
    // history sources: 孔吉列奥国家公园 1950-05-26 经第 1117 号最高法令设立（CONAF 官网，1 级）。
    //   沿革上它经历 1940 年（洛斯帕拉瓜斯国家公园）→ 1950 年（森林保护区）→ 1987 年（重整为现名）三步，
    //   但主管机构 CONAF 自己对外用 1950 年，正文照此。「智利最早建立的国家公园**之一**」是宽泛限定语，
    //   不构成排他性断言（智利首座国家公园为 1926 年的比森特·佩雷斯·罗萨莱斯）。2026-09-10 核，verdict: ok。
    // seeing sources: 喷发次数：SERNAGEOMIN RNVV（1 级）记约 48 次，另有学术统计「1640 年至今 50 次」——**两者都不支持「超过 50」**。改为「约 50 次（48—50）」。2026-09-10 核。
    seeing:
      "Llaima is one of south-central Chile's highest and most frequently erupting active volcanoes, at 3,125 m, with roughly 50 recorded eruptions historically — counts range from 48 to 50 depending on the source; it sits within Conguillío National Park.",
    formation:
      "Llaima is built from two overlapping cones and has a varied eruptive style, producing both basaltic lava flows and more explosive eruptions — one of the most volcanically active points along the southern Andes.",
    observation:
      "From the air, Llaima's permanently snow-capped summit contrasts sharply with dark, fresh lava flows on its slopes and the surrounding old-growth araucaria forest, making it the dominant landmark of Conguillío National Park.",
    distinguish:
      "Unlike the symmetrical, unbroken cones of Osorno and Villarrica, Llaima's repeated eruptions have produced a double-peaked, slightly irregular cone — a visual clue to a volcano's complex eruptive history.",
    concept:
      "Llaima's eruption frequency ranks among the highest of Chile's active volcanoes, making it a textbook case for studying the evolution of a 'high-frequency' stratovolcano; the surviving araucaria forest at its base also makes it a sample site for studying the relationship between volcanic hazard and ecosystems.",
    history:
      "Conguillío National Park was established in 1950, one of Chile's earliest national parks; the araucaria trees at the volcano's base, sometimes called 'living fossils,' can live over a thousand years and have long been regarded as sacred by the local Mapuche people.",
  },
  "paine-massif": {
    // formation / history sources: 百内格兰德峰 3050 m；花岗岩侵入体约 1200 万年前（中新世）侵位，
    //   后经冰川反复刨蚀剥离周围较软的沉积／变质围岩、留下坚硬花岗岩核心。
    //   ✅ **专项复核「成因有没有说反」**（本仓库刚在薄饼岩犯过）：正文**没有**把围岩说成侵入体、也没把侵入体说成围岩，通过。
    //   1978-04-28 列为 UNESCO 生物圈保护区（unesco.org，1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The Paine Massif is a standalone granite massif rising on the eastern edge of the Patagonian Andes, its highest peak Paine Grande at 3,050 m; it is famed for the three steep granite spires of the Torres del Paine and the horned peaks of the Cuernos del Paine, forming the core scenery of Torres del Paine National Park.",
    formation:
      "The massif's core is a granite intrusion from the Miocene epoch; once exposed, it was repeatedly carved by glaciers over millions of years, stripping away the softer surrounding sedimentary rock and leaving only the hard granite core, which sculpted the steep spires and horned peaks.",
    observation:
      "From the air, the Torres del Paine rise like three stone pillars pointing straight into the sky, with a chain of blue-green glacial lakes at their base, set against grassland and glacial escarpments — one of South America's most recognizable mountain skylines.",
    distinguish:
      "The Paine Massif is entirely different from the stratovolcanoes further north like Villarrica and Osorno — it is not a volcano at all, but a granite intrusion sculpted by glaciers, differing completely in composition and formation process.",
    concept:
      "The Paine Massif is a classic case study of glacially carved horn peaks: a hard granite core resists erosion while the surrounding softer rock is ground away by glaciers, ultimately leaving sharp, upright horns and knife-edge ridges.",
    history:
      "Torres del Paine National Park was established in 1959 and designated a UNESCO Biosphere Reserve in 1978; it is one of South America's most famous trekking destinations, with the classic 'W' and full-circuit (O) routes drawing hikers and climbers from around the world each year.",
  },
  "altiplano-chile": {
    // seeing / history sources: 拉乌卡国家公园 1965 年设为森林保护区、1970 年升格国家公园、1981 年列入 UNESCO 生物圈保护区。
    //   ⚠️ **琼加拉湖海拔记 unknown**：不同来源给 4517 / 4540 / 4570 m 三个值，CONAF 官方页只笼统写「4000 米以上」、未给精确值。
    //   正文暂留 4517 并在此记明冲突；下一轮若仍核不到官方基准，改写成「海拔 4500 米以上」这类不精确到个位的表述。
    //   ✅ 零争议红线：未提及智利—玻利维亚—秘鲁边界或出海口争议；艾马拉人只写放牧等传统土地利用的客观事实，无评价性表述。通过。2026-09-10 核。
    // seeing sources: 湖面海拔三说并存、均 3 级，删去。核实 2026-09-12
    seeing:
      "The Chilean Altiplano is a high plateau on the western flank of the Andes averaging over 4,000 m in elevation — the Chilean stretch of South America's broader Andean Altiplano. Its anchor, Lake Chungará, is among the highest lakes in the world.",
    formation:
      "The plateau consists of structural basins uplifted by Andean orogeny; sustained volcanic activity and closed drainage systems together shaped today's landscape, with symmetrical volcanic cones and saline lakes scattered across the highland.",
    observation:
      "From the air, the plateau is a vast, austere expanse: reddish-brown ground, brilliant blue high-altitude lakes, and flocks of flamingos gathered in shallow lake margins, with symmetrical cones like Parinacota Volcano rising against the skyline — a striking contrast to lower-elevation green landscapes.",
    distinguish:
      "The Chilean Altiplano and the Atacama Desert both occupy Chile's northern highlands, but the Altiplano sits much higher (generally above 4,000 m), is colder, and has extensive saline lakes and wetlands, while the Atacama Desert is lower in elevation and extremely arid.",
    // concept sources: ⚠️ 原文写「**南美洲**面积第二大的高原（仅次于青藏高原）」——青藏高原不在南美洲，范围与比较对象对不上。通行表述是「**世界**第二大高原」。属「限定语用错范围」（同苏梅岛「泰国湾第二大岛」拿普吉比那一例）：裸写排名会被 C1b 报出来，写错范围的反而放行。2026-09-10 核。
    concept:
      "The Andean Altiplano is the world's second-largest plateau after the Tibetan Plateau, and one of the largest high-elevation plateaus in the world; its distinctive high-altitude wetland ecosystems support species adapted to extreme elevation, including flamingos and vicuñas.",
    history:
      "The plateau has long been traditional grazing territory for Andean Indigenous peoples such as the Aymara, and llama and alpaca herding traditions continue today; Lauca National Park was established in 1970 and designated a UNESCO Biosphere Reserve in 1981, protecting the plateau's distinctive ecosystem.",
  },
  "campo-de-hielo-sur": {
    // 其余 sources: 「南半球除南极洲外最大的连续冰体」这个排名**不受面积数字新旧影响**（北巴塔哥尼亚冰原约 4200 km²），成立。
    //   ⚠️ C8 待复核：皮奥十一冰川「仍在前进」经 2024-11 智利多校联合科考确认仍处净前进（1945 年以来前进约 11 km、增加约 126 km²），
    //   机制（galloping／surging glacier 假说）仍在研究 —— 与正文一致、未过期。2 级。2026-09-10 核，verdict: ok。
    // seeing sources: ⚠️ 面积 1.3 万 km² 是 **1986 年 Landsat 测绘基准**，不是现状；此后持续退缩（DGA：2002—2015 减少约 220 km²；麦哲伦大区 2022 年清单约 10,427 km²）。「南半球除南极洲外最大连续冰体」这个排名不受面积新旧影响（北巴塔哥尼亚冰原约 4,200 km²），成立。2026-09-10 核。
    seeing:
      "The Southern Patagonian Ice Field stretches roughly 350 km north–south and covered about 13,000 km² when mapped by satellite in 1986; it has been retreating ever since — Chile's water authority (DGA) recorded a loss of some 220 km² between 2002 and 2015 alone, making it the largest continuous body of ice in the Southern Hemisphere outside Antarctica; it feeds dozens of glaciers and spans both Chile and Argentina.",
    formation:
      "The ice field is a remnant of continental glaciation from the last ice age, sustained by heavy precipitation over the high-elevation Patagonian Andes that accumulates as permanent snow and ice; glaciers branch out from the field in all directions, some extending down to low-elevation lakes or fjords.",
    observation:
      "From the air, the ice field appears as a vast, gently undulating white plateau, its edges splitting into countless glacial tongues; on the Chilean side, Pío XI Glacier is broad and dramatic, its surface crisscrossed with crevasses and dotted with blue meltwater pools.",
    distinguish:
      "The Southern Patagonian Ice Field is a separate body from the Northern Patagonian Ice Field further north, divided by roads and river valleys; the southern field is larger and holds Patagonia's primary reserve of freshwater ice.",
    concept:
      "The ice field is an important sample for studying how modern continental glaciers respond to climate change: most of its outlet glaciers have been retreating steadily for decades, but Pío XI Glacier on the Chilean side is one of the few glaciers in South America still advancing — a phenomenon still under study.",
    history:
      "The ice field and its surroundings have long been sparsely populated, remaining one of the last-developed and best-preserved wilderness areas in South America; Bernardo O'Higgins National Park, named for the leader of Chile's independence movement, covers most of the ice field's Chilean side.",
  },
  "salar-de-atacama": {
    // seeing sources: 约 3000 km²（盐壳核心约 1100 km² + 周边约 2000 km² 含盐粉砂带），可溯至 SERNAGEOMIN 年鉴口径。
    //   该面积是**构造盆地的地质边界**，不像湖泊水位、冰川面积那样逐年显著变化，故不强制标注监测年份。
    //   ⚠️ **待补（C8）**：智利大学 2023—2024 研究显示因卤水持续抽采，盐沼地表以每年 1—2 厘米下沉、过去 15 年地下水位下降超 10 米。
    //   正文只笼统写「锂矿开发使它进入全球新能源产业链的视野」、**没有给出会过期的数字断言**，故不算错；
    //   下一轮补一句带监测时点的表述（1 级，智利大学地质系）。2026-09-10 核，verdict: ok（有待补项）。
    seeing:
      "The Salar de Atacama is Chile's largest salt flat, covering about 3,000 km², sitting in a closed basin between the Andes and the Coastal Range; Laguna Chaxa, at the salt crust's edge, is a well-known site for observing flamingos.",
    formation:
      "The basin containing the salt flat has long been an internally drained system, with snowmelt and rainfall carrying salts from the surrounding highlands that have no outlet; millions of years of continuous evaporation and concentration have deposited a thick salt crust and brine layer at the basin floor.",
    observation:
      "From the air, the salt flat shows a mosaic of white crystalline salt crust and dark brine pools, with pink flamingo colonies scattered along its margins, set against a backdrop of distant Andean volcanoes for a striking color contrast.",
    distinguish:
      "The Salar de Atacama and the Atacama Desert are not parallel entries but a part-to-whole relationship — the salar is a specific closed basin of salt accumulation deep within the desert, while the desert is the broader arid climate zone covering the entire region.",
    concept:
      "The salt flat is a classic case study of how salt accumulates through evaporative concentration in a closed drainage basin; its brine is rich in lithium, making the salar one of the most concentrated lithium resource areas on Earth, and a hotspot for cross-disciplinary study between geology and resource economics.",
    // history sources: 卤水抽采致沉降 1–2 cm/年（智利大学 2024，1 级）；会变的量，下轮复核。核实 2026-09-12
    history:
      "Indigenous peoples such as the Atacameño have long lived in oasis settlements around the salt flat, drawing on its resources and highland pastures; lithium mining that began in the late 20th century has drawn this ancient salt flat into the global supply chain for new-energy industries; satellite radar monitoring published by the University of Chile in 2024 shows that continued brine pumping is making parts of the salt flat subside by about 1–2 cm a year.",
  },
  "el-tatio-geysers": {
    // seeing sources: 海拔约 4320 m、活跃间歇泉约 80 处（约占全球总数 8%）。
    //   正文只写「南半球间歇泉数量最多的地热区」这个较保守的限定，**没有去声称「世界第三」**（它确在黄石、克罗诺茨基之后），成立。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "El Tatio sits at about 4,320 m, one of the highest-elevation geyser fields in the world and the largest geothermal field by geyser count in the Southern Hemisphere, with more than 80 active geysers.",
    formation:
      "Geysers form when an underground magma chamber continuously heats groundwater; once pressure builds to a critical point, superheated steam and water erupt violently through surface fissures. El Tatio's active Andean volcanism provides the sustained geothermal energy driving this process.",
    observation:
      "From the air, as temperatures plunge below freezing around sunrise, scalding geothermal steam condenses into columns of white vapor standing across the open plateau — one of the most visually striking geothermal scenes at dawn.",
    distinguish:
      "El Tatio and the Salar de Atacama both belong to the Atacama region's geothermal and saline landscapes, but the geysers are an active surface eruption phenomenon with near-boiling water temperatures, while the salt flat is a relatively static, evaporative depositional landform.",
    concept:
      "Geyser formation requires three conditions simultaneously: sustained geothermal energy, an ample groundwater supply, and a special underground plumbing structure capable of building pressure. El Tatio meets all three, producing the Southern Hemisphere's largest geyser field.",
    history:
      "El Tatio is the classic early-morning excursion from San Pedro de Atacama; visitors typically depart before dawn to arrive as temperatures reach their lowest and the steam is at its thickest.",
  },
  "central-valley-chile": {
    // history sources: 圣地亚哥 1541-02-12 由瓦尔迪维亚建城，属广泛记载史实。
    //   ⚠️ 「南北延伸约 1000 公里」记 unknown：不同资料从阿空加瓜河到普埃尔托蒙特一带，给 700—1000 km 不等，
    //   取决于谷地起讫点如何界定，查不到官方统一测绘值。「约 1000 公里」属偏上限的估算，未见明确反证，本轮不改。2026-09-10 核。
    // seeing sources: 中央谷地两种界定（Memoria Chilena，1 级）；400 km 按查卡布科坡—比奥比奥河纬差估算。核实 2026-09-12
    seeing:
      "Chile's Central Valley is a long, narrow depositional plain squeezed between the Coastal Range and the Andes, stretching roughly 400 to 1,000 km north–south depending on the definition (traditionally the stretch from the Chacabuco slope to the Biobío River; broader physiographic usage carries it south to around Puerto Montt); it is Chile's most densely populated and agriculturally developed belt, home to Santiago, Curicó, and other major cities.",
    formation:
      "The valley formed as sediment carried by Andean glaciers and rivers filled an ancient structural depression; its flat surface and deep soils provide ideal conditions for large-scale agriculture.",
    observation:
      "From the air, the Central Valley appears as a neat grid of farmland and vineyards, in sharp contrast to the rugged ranges on either side; in autumn the vineyards turn shades of gold and deep red, making this Chile's quintessential 'settled landscape.'",
    distinguish:
      "The Central Valley shares the same north–south 'lowland belt' as the Atacama Desert further north and the lake-district plains further south, but its Mediterranean climate is mild and humid — a sharp contrast to the arid north.",
    concept:
      "The Central Valley is the key sample for understanding the middle segment of Chile's three-part landscape structure (coastal range–central valley–Andes), and it is also one of the few Mediterranean-climate zones in the Southern Hemisphere suited to viticulture.",
    history:
      "The Central Valley has been Chile's agricultural and demographic core since the Spanish colonial era; Santiago, founded in 1541, gradually became the nation's political and economic center. Today the valley is also the birthplace and heartland of Chile's wine industry.",
  },
  "atacama-desert": {
    // 其余 sources: 「除极地干燥谷地外最干旱的地区**之一**」已带双重限定，未做无条件最高级断言，符合仓库对排名限定语的要求，不改。2026-09-10 核，verdict: ok。
    seeing:
      "The Atacama Desert lies on the highland between the Coastal Range and the Andes, one of the driest places on Earth outside polar desert valleys — some weather stations have recorded no measurable rainfall for decades.",
    // formation sources: ⚠️ 成因**原本只写了两重**（雨影 + 洪堡流），漏掉第三重：南太平洋副热带高压的下沉气流（纬度层面的主控因素）。学界公认为三重叠加（latitudinal + elevation + oceanic forcing）。属「把多层压成一层」在成因上的版本。2026-09-10 核。
    formation:
      "The desert's extreme aridity results from three compounding factors: the Andes to the east block moist air from the Amazon Basin, producing a rain-shadow effect; the cold Humboldt Current offshore caps the air with an inversion that stops moisture rising; and persistent subsidence beneath the South Pacific subtropical high suppresses rainfall from above. Remove any one of the three and this would not be the driest non-polar region on Earth.",
    observation:
      "From the air, the Atacama Desert shows vast expanses of reddish-brown, nearly barren terrain, occasionally broken by the white patches of salt flats and scattered oases; because the air is extraordinarily dry, visibility is exceptional and surface textures are sharply defined.",
    distinguish:
      "Unlike wind-formed deserts such as the Sahara, the Atacama's extreme aridity comes primarily from combined rain-shadow and cold-current effects; its surface is dominated by gravel plains and salt crusts rather than continuous dune fields — only localized areas like Valle de la Luna show classic sandy erosion landforms.",
    concept:
      "The Atacama Desert is the classic case study of a 'coastal desert' climate type, illustrating how a cold current combined with a mountain rain-shadow effect can produce conditions drier than many high-latitude polar regions, despite its low latitude.",
    history:
      "Because the air is extraordinarily dry and light pollution minimal, the Atacama plateau hosts world-class observatories including the European Southern Observatory's Very Large Telescope, making it one of the best astronomical observation sites on Earth; oasis settlements at the desert's edges have long served as important waypoints for Indigenous peoples and caravans.",
  },
  "valle-de-la-luna": {
    // formation / history sources: ✅ **专项复核成因**：正文写的是「古盐湖沉积层 + 地壳抬升 + 风力侵蚀」，
    //   **没有**误归因为「河流侵蚀」——与权威资料一致（月亮谷地表主要由风蚀与盐／石膏沉积共同塑造）。
    //   1982 年被宣布为自然保护区（Santuario de la Naturaleza），属洛斯弗拉门科斯国家保护区的一部分。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "Valle de la Luna (Moon Valley) is a landform in the Atacama Desert shaped jointly by wind erosion and ancient salt deposits, its surface covered in undulating dunes, salt crust, and eroded rock ridges — named for its resemblance to the lunar surface.",
    formation:
      "This area was once a depositional basin for an ancient salt lake; over millions of years, tectonic uplift and continuous wind erosion have carved the soft salt and sedimentary layers into deeply gullied, strangely shaped terrain.",
    observation:
      "From the air, the cliffs glow in gradients of reddish-brown to pink-purple as the sun sets, and the rippled dunes and jagged rock ridges cast long shadows in the twilight — the Atacama region's classic sunset viewpoint.",
    distinguish:
      "Valle de la Luna and the Atacama Desert are a part-to-whole relationship rather than parallel entries — it is the desert's most representative, most dramatically shaped local sample of wind-eroded terrain, not a separate landform unit outside the desert.",
    concept:
      "Valle de la Luna is a classic sample for studying wind-eroded salt-layer landforms in arid regions, illustrating how wind becomes the dominant force shaping the surface in an environment with almost no rainfall.",
    history:
      "Valle de la Luna was designated a national reserve in 1982 and is the best-known viewpoint near San Pedro de Atacama; because its terrain closely resembles the lunar surface, it has historically also been used as an analogue site for planetary geology research.",
  },
  "lake-llanquihue": {
    // seeing sources: ⚠️ Chinese-name fix (2026-09-12), zh side only: the Chinese text used two unsourced names for
    //   Lago Llanquihue and Lago Todos los Santos; one of them ("耶尔科湖") is in fact a different real Chilean lake
    //   (Lago Yelcho). Renamed library-wide; see the zh file's note. The English text was already correct.
    // seeing / history sources: 面积主流口径 870.5 km²（另有 860／877 km²，同一量级），智利第二大湖（次于赫内拉尔卡雷拉湖）；
    //   湖区德国移民始于 1850 年代（维森特·佩雷斯·罗萨莱斯移民法案），属广泛记载史实。3 级多方一致。2026-09-10 核，verdict: ok。
    seeing:
      "Lake Llanquihue covers about 860 km², making it Chile's second-largest lake; its shores are famed for reflecting Osorno and Calbuco volcanoes, one of the iconic scenes of Chile's Lake District.",
    formation:
      "The lake basin is a glacial depression carved by repeated Pleistocene glaciation; after the glaciers retreated, meltwater and precipitation filled the basin. Several active volcanoes lie close to the lake's northern shore, and volcanic activity combined with glacial carving has shaped this region's landscape.",
    observation:
      "From the air, Lake Llanquihue's broad, calm surface clearly mirrors Osorno's symmetrical snow-white cone on clear days, and its shores are dotted with distinctive German-style towns such as Puerto Varas and Frutillar.",
    distinguish:
      "Lake Llanquihue and Lake Villarrica to the south are both glacial lakes in Chile's Lake District, but Llanquihue is larger and its lakeside towns show a stronger German-immigrant architectural character, while Villarrica is known for its direct 'volcano-and-lake' pairing with an active volcano.",
    concept:
      "Lake Llanquihue is a textbook example of glacial lake formation: a glacier repeatedly carves a deep depression in a valley, and after it retreats, meltwater and precipitation collect to form a lake — the shared origin story of dozens of lakes across Chile's Lake District.",
    history:
      "Beginning in the mid-19th century, large numbers of German immigrants settled around Lake Llanquihue, bringing a distinctive architectural style and way of life; lakeside towns such as Puerto Varas retain a strong German character today, the heart of the Lake District's 'German settlement belt.'",
  },
  "lake-villarrica": {
    // 全六段 sources: 面积约 176 km²，学术论文与市政资料一致，无冲突。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "Lake Villarrica covers about 176 km²; it is a glacial lake, and the town of Pucón on its shore faces the permanently steaming Villarrica Volcano, one of the Lake District's most representative 'volcano-and-lake' pairings.",
    formation:
      "The lake basin was carved by repeated Pleistocene glaciation, filling with meltwater after the ice retreated; the lake sits directly beside the active Villarrica Volcano, whose eruptive material has also helped shape the surrounding landscape.",
    observation:
      "From the air, Lake Villarrica's surface is calm and broad, and Villarrica Volcano on its northern shore is permanently snow-capped, its summit often trailing a faint plume of steam — together forming a symmetrical, striking composition with the lake below.",
    distinguish:
      "Lake Villarrica and Lake Llanquihue are both glacial lakes in Chile's Lake District, but Villarrica sits directly beside the actively erupting Villarrica Volcano, giving it a stronger volcanic presence; Lake Llanquihue's surroundings are known instead for their tranquil German-style towns.",
    concept:
      "Lake Villarrica is a sample for understanding the 'active volcano and glacial lake' coexistence landform: active volcanism and a Pleistocene-era glacial basin overlap here, offering a direct case for studying how volcanic and glacial landforms interact.",
    history:
      "The combination of lake and volcano has made Pucón the Lake District's most popular outdoor tourism hub, with hot springs, kayaking, and crater climbs drawing visitors year-round — a key pillar of southern Chile's tourism industry.",
  },
  "lake-general-carrera": {
    // seeing sources: ⚠️ 两处：① 删掉「南美洲第二大湖」——的的喀喀湖 8,372 km²，本湖全湖仅 1,850 km²（智利侧 970），够不上；英文维基只作「智利最大、阿根廷第四大」。属「限定语用错范围」第三例（前两例：苏梅岛、altiplano-chile，后者同为智利）。② 绿松石色是**冰川乳（rock flour）**、不是碳酸钙——**本条目 concept 段写的就是冰川乳**，seeing/formation 却写成碳酸钙，条目内部自相矛盾。2026-09-10 核。
    seeing:
      "Lake General Carrera is Chile's largest lake, its water taking on a rare turquoise colour from the fine rock flour carried in by glacial meltwater; the lake spans both Chile and Argentina.",
    formation:
      "The lake basin is a glacial depression left behind as the Patagonian Ice Field retreated; glaciers upstream continuously carry fine rock flour, ground off the bedrock by glacial abrasion, into the lake, which is the main reason for its distinctive turquoise color.",
    // observation sources: 大理石教堂：岩体约 3 亿年（古生代），但**洞穴是末次冰期结束后数千年间掏蚀出来的**。原文把岩石年龄当成了地貌年龄，差三个数量级。2026-09-10 核。
    observation:
      "From the air, the lake's vivid turquoise water contrasts sharply with the barren Patagonian highland around it; on the Chilean side, the 'Marble Caves' are a cave system carved into a marble formation over the few thousand years since the ice age ended, accessible by boat directly from the water.",
    distinguish:
      "Lake General Carrera and lakes Llanquihue and Villarrica to the north are all of glacial origin, but General Carrera is far larger, its water color far more distinctive, and it spans two countries rather than lying entirely within Chile.",
    concept:
      "The lake's turquoise color is a classic case study of how 'glacial flour' — extremely fine mineral particles produced by glacial abrasion of bedrock — affects the optical properties of a water body: the suspended particles scatter specific wavelengths of light, producing this distinctive hue.",
    history:
      "The Marble Caves have long been known to local fishermen and travelers as a hidden gem; in recent years their striking water-level cave scenery has made them one of the most visited natural sites in Chilean Patagonia, typically reached by boat from Puerto Río Tranquilo on the Chilean shore.",
  },
  "rio-loa": {
    // 全六段 sources: 全长约 440 km，智利最长河流；流域面积 33,570 km² 为智利最大流域。3 级多方一致。2026-09-10 核，verdict: ok。
    seeing:
      "The Loa is Chile's longest river, about 440 km long, flowing south and then bending west across the Atacama Desert before emptying into the Pacific — one of the few year-round surface flows in the heart of the desert.",
    formation:
      "The Loa originates from snowmelt and rainfall in the northern Andes; as it crosses the desert basin, terrain changes force the river into a pronounced U-shaped bend before it finally cuts through the Coastal Range to reach the Pacific.",
    observation:
      "From the air, the Loa traces a winding, deep-green river valley across reddish-brown desert, with oasis towns such as Calama scattered along its banks — a striking color contrast against the barren desert around it.",
    distinguish:
      "The Loa and the Elqui River that feeds Elqui Valley are both important water sources in Chile's northern desert belt, but the Loa runs through the drier core of the Atacama and is longer, while the Elqui irrigates a valley oasis famous for viticulture.",
    concept:
      "The Loa is a classic case study of an 'exotic river' — one that originates in a humid region and crosses an arid region without drying up. Without continuous high-altitude snowmelt from the Andes, this river could not cross such an arid desert without running dry.",
    history:
      "The Loa's banks have long served as an important corridor for human activity in the Atacama Desert; Calama and the surrounding oasis settlements have long relied on the river for irrigation and drinking water, and since the 20th century the river has also been a key water source for nearby copper mining.",
  },
  "rio-baker": {
    // seeing / formation / concept sources: 智利流量最大的河流（均值约 870—1500 m³/s，**正文没有写具体流量数字**，无过度精确风险）。3 级多方一致。2026-09-10 核，verdict: ok。
    seeing:
      "The Baker is Chile's highest-volume river, originating at Lake General Carrera and flowing west to the Pacific; its water takes on a distinctive turquoise color from glacial meltwater.",
    formation:
      "The Baker carries the enormous volume of water draining Lake General Carrera and the surrounding Patagonian Ice Field; the river carves a deep valley through the Patagonian mountains before reaching a fjord near Tortel.",
    observation:
      "From the air, the Baker is broad and powerful, its signature turquoise water winding through dense Patagonian old-growth forest on both banks, with the boardwalk village of Tortel scattered near its mouth.",
    distinguish:
      "The Baker and the Loa are both among Chile's most representative rivers, but the Baker is Chile's highest-volume river, originating from Patagonian lakes and ice fields in a wet, water-rich region; the Loa is Chile's longest river, originating in and crossing the extremely arid northern desert.",
    concept:
      "The Baker's high flow directly reflects the role of the Patagonian Ice Field as a 'natural water tower' — its continuous meltwater supplies the river with far more water than local rainfall alone could sustain, making it a classic case study of a glacier-fed river.",
    // history sources: 「2008年才通电」无出处，删去。核实 2026-09-12
    history:
      "Tortel is one of the few villages in Chile with no road access, its residents relying on wooden boardwalks and boats to get around; because of its distinctive 'village on stilts' way of life, the Chilean government designated it a Zona Típica — a protected typical zone — in 2001.",
  },
  "elqui-valley": {
    // 其余 sources: ✅ **天文台选址专项复核**：正文把「海拔适中、空气洁净、晴夜多」三重因素并列写出，
    //   **没有把海拔当成唯一原因**。皮斯科白兰地产区史属广泛记载。2026-09-10 核，verdict: ok。
    seeing:
      "Elqui Valley is a narrow oasis valley in northern Chile irrigated by the Elqui River, its floor layered with vineyards and pisco brandy distilleries, flanked by arid Andean foothills.",
    formation:
      "The valley was carved by the Elqui River as it long eroded the Andean foothills; its fertile, irrigated floor stands in sharp contrast to the dry, barren slopes on either side.",
    observation:
      "From the air, Elqui Valley is a narrow green corridor cutting through dry, tan-colored mountains, with terraced vineyards laid out along the valley floor; at night, because the valley sees almost no cloud cover year-round, the sky above is exceptionally clear.",
    distinguish:
      "Elqui Valley and Cajón del Maipo are both Andean-foothill valley landforms, but Elqui is defined by irrigated agriculture and viticulture in a dry, low-rainfall climate, while Cajón del Maipo is known for hot springs and near-capital Andean scenery, closer to Santiago.",
    concept:
      "Elqui Valley is a sample for studying 'arid-zone oasis agriculture' landforms: river irrigation carves out a band of arable land in otherwise dry mountains, illustrating how water availability determines the pattern of agriculture and settlement in an extreme arid environment.",
    // history sources: 晴夜：年均 280—300 个晴夜（约占全年 77%—82%），原文「几乎全年无云」是无限定的绝对化表述。✅ 天文台选址的三重因素（海拔适中／空气洁净／晴夜多）正文并列写出，**没有把海拔当成唯一原因**。2026-09-10 核。
    history:
      "Because of its moderate elevation, clean air and an average of more than 280 clear nights a year, the upper valley hosts several international observatories including Cerro Tololo Inter-American Observatory, and is a globally recognized stargazing destination; the valley is also one of Chile's principal pisco-producing regions, with distilling traditions dating back to the Spanish colonial era.",
  },
  "cajon-del-maipo": {
    // 全六段 sources: 迈波河下切构造山体、圣何塞火山邻近、供水圣地亚哥、埃尔莫拉多冰川徒步——
    //   因果链与地质常识一致，未见成因颠倒；无会过期的数字断言。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "Cajón del Maipo is a deep canyon carved by the Maipo River through the western foothills of the Andes, about an hour's drive from Santiago — the Andean landform Santiago residents visit most often.",
    formation:
      "The canyon was carved by the long-term downcutting of the Maipo River through the tectonic mass of the Andean foothills; its walls are steep on both sides, and traces of glacial landforms and geothermal activity survive along its length.",
    observation:
      "From the air, Cajón del Maipo shows a classic V-shaped valley cross-section, with the Maipo River winding along its floor; upstream, Maipo Volcano and glacier-fed alpine lakes come into view, with vegetation shifting from shrubland to bare alpine rock as elevation increases.",
    distinguish:
      "Cajón del Maipo and Elqui Valley are both Andean-foothill valley landforms, but Cajón del Maipo lies right next to the capital, Santiago, and functions mainly as a short getaway destination, while Elqui Valley lies farther north in an arid zone, known for irrigated agriculture and stargazing tourism.",
    concept:
      "Cajón del Maipo is a sample for understanding the relationship between 'Andean foothill canyon' landforms and urban water supply: the Maipo River not only carved this canyon but is also a critical source of water for the capital, Santiago, illustrating the close link between mountain river systems and downstream metropolises.",
    history:
      "Cajón del Maipo has been a traditional weekend destination for Santiago residents since the 19th century, with hot-spring resorts developed early along its length; the El Morado Glacier and its glacial lake within the canyon have become a popular hiking destination in recent years.",
  },
  "chilean-fjords": {
    // formation / history sources: ✅ **成因专项复核**：正文写的是「更新世冰川深切 U 形谷 + 冰期结束后海侵淹没」这套标准两段式解释，
    //   **没有**写成「构造断裂」或「河流下切」。族群称谓用**卡维斯卡尔人（Kawésqar）、雅甘人（Yaghan）**——均为现行官方名，未用已废弃的 Alacalufe 旧称；未涉人口锐减史。✅ 红线通过。2026-09-10 核，verdict: ok。
    seeing:
      "The Chilean Fjords are a system of fjords and channels formed as glaciers deeply carved the coastline from the Aysén to Magallanes regions in southern Chile; the shoreline is long, convoluted, and dotted with countless islands, making it one of the most complex fjord coastlines in the world.",
    formation:
      "During the Pleistocene ice ages, the Patagonian Ice Field extended west to the coastline, and glaciers carved deep U-shaped valleys; when the ice age ended and sea levels rose, seawater flooded these valleys, creating a maze of interlocking fjords and channels.",
    observation:
      "From the air, the Chilean Fjords show an extraordinarily fragmented coastline, with steep cliffs plunging directly into the sea and narrow channels winding among the islands; glaciers frequently calve directly into the water along the way, producing dramatic ice-calving scenes.",
    distinguish:
      "The Chilean Fjords and the Strait of Magellan both lie at Chile's southern tip, but the fjords are a complex coastal belt made up of countless branching channels and islands, while the Strait of Magellan is a single natural passage connecting the Atlantic and Pacific.",
    concept:
      "The Chilean Fjords are a classic case study of fjord-coast formation, sharing the same origin as Norway's fjords, illustrating how glacial erosion combined with sea-level change can produce one of the world's most complex coastal landforms.",
    history:
      "These waters have long served as traditional canoe routes for seafaring Indigenous peoples such as the Kawésqar and Yaghan; today they form one of South America's most important cruise routes and important habitat for South American sea lions and Magellanic penguins.",
  },
  "strait-of-magellan": {
    // seeing sources: 全长常见口径 565 km（西语维基按 305 海里换算），智利海军水道局 DIRECTEMAR 用另一组端点给 611 km——
    //   **端点定义不同导致的差异**，正文「约 570 公里」落在合理区间内。第一海峡最窄处官方 3.7 km，正文「约 3 公里」属可接受取整（DIRECTEMAR，1 级）。
    //   ✅ **零争议红线专项复核**：未描述智利—阿根廷边界线，未提 1881 年边界条约或 1978 年比格尔海峡危机；只写麦哲伦 1520 年通过海峡的航海史实。通过。2026-09-10 核，verdict: ok。
    seeing:
      "The Strait of Magellan is a natural passage connecting the Atlantic and Pacific oceans, about 570 km long, running between mainland South America and Tierra del Fuego; it is named for Portuguese navigator Ferdinand Magellan, whose expedition passed through it in 1520 during humanity's first circumnavigation of the globe.",
    formation:
      "The strait's formation is linked to Pleistocene glacial erosion and tectonic subsidence in Patagonia; when the ice age ended, seawater filled this low-lying passage, eventually linking the Pacific and Atlantic oceans.",
    observation:
      "From the air, the strait varies in width, narrowing to about 3 km at the 'First Narrows'; its shores are covered in sub-Antarctic grassland and sparse southern beech forest, and constant strong winds whip whitecaps across the water year-round.",
    distinguish:
      "The Strait of Magellan and the Drake Passage further south are both channels connecting the two oceans, but the Strait of Magellan runs between the mainland and Tierra del Fuego, is relatively narrow, and is sheltered by islands, making it far calmer to navigate than the open, exposed Drake Passage.",
    concept:
      "The Strait of Magellan is a key landmark in the history of the Age of Exploration: before the Panama Canal opened in 1914, this strait was one of the most important passages linking the Atlantic and Pacific, profoundly shaping global shipping routes for centuries afterward.",
    history:
      "In 1520, Magellan's fleet took 38 days to cross this strait, becoming, by the historical record, among the first Europeans to complete this key leg of a circumnavigation; Punta Arenas, the main city on the strait's northern shore, grew rapidly in the late 19th century on shipping and the wool trade, at one point becoming the southernmost major port city in the Southern Hemisphere.",
  },
  "la-portada-coast": {
    // seeing sources: 海蚀岩柱高约 43 m（CONAF 官网，1 级）。成因为差异侵蚀 + 海浪掏蚀，未写成风蚀。2026-09-10 核，verdict: ok。
    seeing:
      "La Portada is a sea arch near Antofagasta, about 43 m high, carved from Tertiary sedimentary rock by long-term wave erosion — a representative landmark of the 'desert meets coast' boundary where the Atacama Desert reaches the Pacific.",
    formation:
      "The rock hosting the arch is Tertiary marine sedimentary rock, long eroded by Pacific waves; the softer layers were gradually hollowed out, leaving only the harder rock to form the isolated arch and sea stack landforms.",
    observation:
      "From the air, La Portada stands between golden sand and deep blue water, set sharply against the endless Atacama Desert behind it — a classic cross-section of desert meeting ocean directly.",
    distinguish:
      "La Portada shares a similar formation process with sea-stack coastlines such as the Twelve Apostles, but La Portada sits right beside the extremely arid Atacama Desert, illustrating the unusual 'desert meets coast' boundary rather than a typical temperate coastal erosion landform.",
    concept:
      "La Portada is a textbook sample for studying how a sea arch forms: waves repeatedly erode a weak point in the rock to form a sea cave, which enlarges and breaks through to form an arch; if the arch's roof eventually collapses, an isolated sea stack remains.",
    // history sources: 设立年份：**1990 年**（农业部最高法令第 51 号，CONAF 官网 1 级），原文的 1945 年差了 45 年。海蚀岩柱高约 43 m 核实无误（同源）。2026-09-10 核。
    history:
      "La Portada was designated a national natural monument by the Chilean government in 1990, under Supreme Decree No. 51, the most representative natural landmark around Antofagasta, and an important habitat for local seabirds and sea lions.",
  },
  "chiloe-archipelago": {
    // seeing sources: 主岛面积约 8,394 km²（另有约 9,000 km² 的宽口径），智利岛屿面积第二（次于智利一侧火地岛）。
    //   ✅ 零争议红线：木教堂与传统文化只作建筑与遗产事实，**未写殖民时期传教与原住民关系的评价**。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Chiloé Archipelago is made up of the main island, Chiloé — about 8,400 km² and Chile's second-largest island by area — and its surrounding island group, and has a consistently rainy, humid climate. Its distinctive stilted wooden churches and folklore are cultural hallmarks of the region.",
    formation:
      "The archipelago is the remaining high ground of the southern Coastal Range, partially submerged by the sea — part of the transitional landscape where the Andes and the Coastal Range gradually converge and dissolve into the ocean in southern Chile.",
    observation:
      "From the air, the Chiloé Archipelago has a deeply convoluted coastline, its islands covered in temperate rainforest and traditional stilt-house fishing villages, with the pointed towers of wooden churches standing out sharply against green fields and gray bays.",
    distinguish:
      "Chiloé and the Chilean Fjords further south are both fragmented, complex coastal belts in southern Chile, but Chiloé has a relatively mild climate and extensive settled farming and fishing communities, while the area south of the fjords is far more sparsely populated and dominated by wilderness scenery.",
    concept:
      "Chiloé is a classic sample for studying how the Coastal Range, as it extends south, is gradually submerged by the sea to form an archipelago landform; it is also a human-geography case study of how a distinctive folk wooden-building tradition evolved within an isolated island setting.",
    // history sources: UNESCO 列入：**2000-12 先列 14 座，2001-06 增补 2 座**，合计 16。原文写成 2000 年整体列入，把分两次的事合并成了一次（2 级，智利文化部下属机构）。2026-09-10 核。
    history:
      "The archipelago's 16 wooden churches blend European Catholic architectural tradition with local Indigenous building techniques; Spanish colonizers founded the town of Castro in 1567, and fourteen of the churches were inscribed as a UNESCO World Heritage Site in 2000, with two more added in 2001 to make sixteen.",
  },
  "easter-island": {
    // 史实 sources: 波利尼西亚人约公元 1200—1250 年定居（Hunt & Lipo 的「迟到定居说」为当前学界主流，旧说 400—800 年已被推翻）；
    //   1722-04-05 罗赫芬于复活节主日抵达；1888 年并入智利；1995 年拉帕努伊国家公园列入 UNESCO 世界遗产。
    //   ✅ **零争议红线专项复核**：未提及 1862—63 年秘鲁奴隶劫掠、未提土地权与自治诉求；
    //   `concept` 段处理「生态自毁 vs 外部因素」这一学界激烈争论时用的是「学界对具体成因仍有不同解读」的**并列、不下结论**写法，符合要求。
    //   ⚠️ 可优化（非错）：英文侧全篇只用 Easter Island、未并列官方并用名 Rapa Nui，与仓库「有并用名以事实并列」的一般做法相比略欠，下一轮可补。2026-09-10 核，verdict: ok。
    seeing:
      "Easter Island is a triangular volcanic island in the South Pacific formed from three merged volcanoes, about 3,700 km from mainland Chile — one of the most isolated inhabited islands in the world, famous worldwide for its nearly 900 moai statues.",
    formation:
      "Easter Island formed from lava layered up by three shield volcanoes, producing its roughly triangular outline; Rano Raraku, one of the island's largest craters, has relatively soft tuff and was the main quarry where the moai were carved.",
    observation:
      "From the air, Easter Island is low-lying and open, with almost no trees; grass-covered volcanic terrain is dotted with moai statues facing inland, and hundreds of unfinished or unmoved statues still remain in and around the Rano Raraku crater.",
    distinguish:
      "Easter Island and the Juan Fernández Archipelago are both remote Chilean Pacific islands, but Easter Island belongs to the Polynesian cultural sphere and is famed for its moai statues, while Juan Fernández is famed as the real-life inspiration behind Robinson Crusoe — the two have entirely different cultural backgrounds.",
    concept:
      "Easter Island is a classic case study of the effects of extreme island isolation on human society: that isolation produced a uniquely concentrated moai-carving culture, but also, because of limited resources, gave rise to well-known debates in island social and ecological history — scholars still hold differing interpretations of the exact causes.",
    history:
      "Polynesians arrived and settled the island around 1200–1250 CE, gradually developing the distinctive moai-carving culture; Dutch explorer Jacob Roggeveen 'discovered' the island on Easter Sunday in 1722, giving it its name; the island was annexed by Chile in 1888, and the entire island was inscribed as a UNESCO World Heritage Site in 1995.",
  },
  "juan-fernandez-archipelago": {
    // 全六段 sources: 距智利大陆约 670 km；埃永克峰 915 m；塞尔柯克 1704 年被弃、1709-02 获救（四年零四个月，与「四年多」吻合）；
    //   1977 年列入 UNESCO 人与生物圈保护区（CONAF，1 级）。
    //   📌 事前提示的「2010 年海啸／人口需带时点」在本条**不适用**——正文完全没提人口规模或海啸，无需处理。2026-09-10 核，verdict: ok。
    seeing:
      "The Juan Fernández Archipelago is a volcanic island group about 670 km from mainland Chile; its main island is now named Robinson Crusoe Island, and its highest point, El Yunque, reaches 915 m.",
    formation:
      "The archipelago consists of volcanic islands formed by undersea eruptions, geologically young and steeply rugged; long-term oceanic isolation has driven the evolution of an unusually high proportion of endemic species.",
    observation:
      "From the air, the archipelago's terrain is steep and rugged, with volcanic cliffs plunging directly into the sea; forested slopes alternate with bare volcanic ridges, and the main island's only settlement, San Juan Bautista, sits on a narrow strip of flat land beside a bay.",
    distinguish:
      "Juan Fernández and Easter Island are both remote Chilean Pacific islands, but Juan Fernández lies closer to the mainland with younger, steeper volcanic geology, while Easter Island is known for its gentler volcanic landforms and Polynesian culture.",
    concept:
      "The Juan Fernández Archipelago is a classic case study of endemic species evolution on islands: long isolation from the mainland has produced an exceptionally high proportion of endemic plant species, making it an important site for island biogeography research.",
    history:
      "In 1704, Scottish sailor Alexander Selkirk was marooned on the island after a dispute with his captain and survived alone for more than four years before being rescued; his experience inspired Daniel Defoe's 1719 novel Robinson Crusoe. The archipelago was designated a UNESCO Biosphere Reserve in 1977.",
  },
  "tierra-del-fuego-chile": {
    // seeing sources: 智利一侧约占主岛 61.4%（约 29,485 / 48,100 km²），正文「约西部三分之二」属合理取整。
    //   ✅ **零争议红线专项复核（本批重点）**：未描述智利—阿根廷边界线本身（只给面积占比）、未提 1881 年条约或任何边界争端；
    //   族称用**雅甘人、塞尔克南人**（现行规范名，非已废弃的「奥纳人」Ona）；**未涉 19 世纪末至 20 世纪初的原住民人口锐减史**，
    //   只以过去式笼统写「曾是……家园」而不展开原因。波韦尼尔的淘金与养羊史属客观地方史。通过。2026-09-10 核，verdict: ok。
    seeing:
      "Tierra del Fuego is the main island of the archipelago at the southernmost tip of South America, split between Chile and Argentina; the Chilean side accounts for roughly the western two-thirds and is dominated by sub-Antarctic grassland, southern beech forest, and the old-growth forest of Karukinka Natural Park.",
    formation:
      "Tierra del Fuego is where the southernmost Andes extend into the sea, separated from the mainland by the Strait of Magellan and the Beagle Channel — geologically, a natural continuation of the South American mountain chain.",
    observation:
      "From the air, the northern part of Tierra del Fuego is relatively flat, covered in open sub-Antarctic grassland; the south is much steeper, covered in dense southern beech forest, with permanently snow-capped peaks interwoven with narrow channels and fjords.",
    distinguish:
      "Tierra del Fuego and the Chiloé Archipelago further north are both large islands in southern Chile, but Tierra del Fuego lies at a higher latitude with a harsher climate, dominated by sub-Antarctic ecosystems; Chiloé's climate is relatively mild and known for its farming and fishing communities.",
    concept:
      "The name 'Tierra del Fuego' ('Land of Fire') comes from 1520, when Magellan's fleet passing through the strait saw distant fires lit by the island's Indigenous inhabitants — a naming history that offers a classic case study of how European navigators named newly encountered lands.",
    history:
      "The island was long home to Indigenous peoples such as the Yaghan and Selk'nam, who developed distinctive ways of life adapted to the polar climate; Porvenir was founded in the late 19th century during a gold rush and sheep-ranching boom, and remains the largest settlement on the Chilean side.",
  },
  "patagonian-steppe-chile": {
    // formation sources: ✅ **专项复核**：巴塔哥尼亚草原的干旱**确系安第斯雨影单一主导机制**——
    //   与阿塔卡马的「三重叠加」不同，这里不需要强行叠加纬度或洋流因素，正文的单一机制表述本身准确。
    //   帕利艾克国家公园的火山渣锥与熔岩流描述与该火山场的通行记述一致。2026-09-10 核，verdict: ok。
    seeing:
      "The Chilean Patagonian Steppe is an open, arid grassland in the eastern Magallanes Region; lying in the Andes' rain shadow with sparse precipitation, its vegetation is dominated by low grasses and shrubs, traditionally used for sheep grazing.",
    formation:
      "The steppe lies in the rain shadow east of the Andes; westerly winds drop most of their moisture crossing the mountains, arriving at the steppe already dry, and this sustained low rainfall has shaped a semi-arid grassland ecosystem.",
    observation:
      "From the air, the steppe is broad and flat, its endless tawny grassland dotted with sheep flocks and scattered ranch infrastructure; within Pali Aike National Park, dozens of volcanic scoria cones and black lava flows punctuate the landscape.",
    distinguish:
      "The Chilean Patagonian Steppe and the Southern Patagonian Ice Field both belong to the Patagonia region, but the steppe sits in the dry rain-shadow belt east of the Andes, while the ice field occupies the high-precipitation zone within the Andes themselves — their climate conditions are nearly opposite.",
    concept:
      "This steppe is a direct case study of how the 'rain shadow effect' can produce sharply different climate zones within a single region — just tens of kilometers away, the western slope of the Andes receives heavy rainfall and supports dense forest, while the eastern slope is already dry grassland.",
    // history sources: 位置：米洛敦洞穴在**普埃尔托纳塔莱斯**西北约 24 km，不在帕利艾克国家公园附近（后者在蓬塔阿雷纳斯东北约 196 km），两地相距逾 200 km。1895 年埃伯哈德发现地懒化石属实。1 级。2026-09-10 核。
    history:
      "The Cueva del Milodón near Puerto Natales yielded fossilized fur and bones of the extinct giant ground sloth in 1895, making it an important site for studying the relationship between Patagonia's late-Pleistocene fauna and early human activity; the steppe remains the core area for traditional sheep ranching today.",
  },
};
