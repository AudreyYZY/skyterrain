import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Indonesia ============
  "mount-semeru": {
    // 全六段 sources: 3676 m、爪哇最高峰、喷发节律约每 20–30 分钟（正文「近乎每20分钟」一致）、公园 1982 年设立（GVP，2 级）。火山高度是会变的量，下轮复核 PVMBG。核实 2026-09-11，未改动
    seeing:
      "At 3,676 m, Mount Semeru — locally also called Mahameru — is the highest peak on Java and one of Indonesia's most active volcanoes, venting a cloud of steam and ash roughly every 20 minutes.",
    formation:
      "Semeru is a stratovolcano on the Java volcanic arc, built up by repeated eruptions of lava and pyroclastic material; it stands just outside the older Tengger caldera's southern rim, a newer cone formed as volcanic activity in the area migrated south.",
    observation:
      "From the air, Semeru shows an almost perfectly conical shape with a wisp of white steam almost always visible at the summit; vegetation cover differs sharply between its two flanks — the north slope is bare, bordering the Tengger sand sea, while the south slope carries dense tropical montane forest.",
    distinguish:
      "Both Semeru and neighbouring Bromo are active volcanoes within the same national park, but Semeru is Java's tallest standalone cone, known for frequent small eruptions, while Bromo is a low, younger cone inside the caldera, known for its perpetually smoking crater.",
    concept:
      "Semeru's near-periodic eruption rhythm makes it a classic sample for studying the relationship between magma-chamber recharge rate and eruption frequency in stratovolcanoes, and it remains one of the most closely monitored volcanoes by Indonesia's volcanological authorities.",
    history:
      "In Javanese tradition Semeru is regarded as the \"nail of the world,\" believed by legend to have been placed by the gods to stabilise Java; the surrounding Bromo Tengger Semeru National Park was formally established in 1982 and remains the traditional homeland and spiritual centre of the Tengger people.",
  },
  "bromo-tengger-caldera": {
    // seeing sources: 沙海破火山口约 9×10 km（外层大破火山口约 16 km，正文说的是内层），内有五座火山：Bromo 2329 / Batok 2470 / Kursi 2581 / Watangan 2661 / Widodaren 2650 m；公园 1982 年设立。核实 2026-09-11
    seeing:
      "The Tengger caldera is an ancient volcanic collapse depression about 16 km across at its outer rim; the younger \"sand sea\" caldera nested inside it measures roughly 9 by 10 km and is floored with fine volcanic sand; five newer cones including Bromo stand within the sand sea, and Bromo's crater continuously vents white sulphurous smoke.",
    formation:
      "The Tengger caldera formed when a prehistoric giant volcano erupted catastrophically and its summit collapsed; several secondary cones, including Bromo and Batok, subsequently grew inside the caldera floor, producing a layered \"cone-within-caldera\" structure.",
    observation:
      "From the air, the grey-white sand sea forms an almost flat, moon-like surface across the caldera floor; Bromo's crater rim is sharply defined and perpetually wreathed in white smoke, contrasting strongly with the green farmland of the surrounding Tengger highlands.",
    distinguish:
      "The Bromo Tengger caldera and Semeru are two distinct landforms within the same national park: the former is a cluster of low secondary cones inside an ancient caldera, while the latter is a tall, standalone conical active volcano — the two are often framed together in the same view.",
    concept:
      "The coexistence of multiple secondary cones within the sand sea offers a direct sample for studying how a magmatic system rebuilds new cones within the same area after a major caldera collapse; the caldera's rim remains clearly traceable today.",
    history:
      "The Tengger highlands are the traditional homeland of the Tengger people, who maintain a distinctive blend of Hindu and native Javanese belief; each year during the Kasada festival, offerings are cast into Bromo's crater. The park was established in 1982, covering the sand sea and surrounding volcanic complex.",
  },
  "mount-merapi": {
    // 全六段 sources: 2911 m、每 5–10 年喷发一次；1006/1786/1822/1872/1930/1976/2006/2010 历次大喷发与公开火山史吻合，2021 年起持续活动；官方记录活火山 127 座，正文「130余座」属可接受约数。核实 2026-09-11，未改动
    seeing:
      "At 2,911 m and located about 32 km north of Yogyakarta, Mount Merapi is the most active of Indonesia's more than 130 active volcanoes, erupting on average every 5 to 10 years.",
    formation:
      "Merapi is a classic stratovolcano on the Java arc, built by alternating layers of lava domes squeezed out from viscous magma and pyroclastic deposits; the instability and collapse of these lava domes is the primary cause of the deadly pyroclastic flows that frequently accompany its eruptions.",
    observation:
      "From the air, Merapi shows a steep conical profile, its lower slopes densely vegetated while the upper slopes and summit remain bare grey-brown volcanic rock; during active eruptive periods the summit lava dome and ash-covered gullies on the flanks are visible.",
    distinguish:
      "Both Merapi and Semeru are highly active Javanese volcanoes, but Merapi is known for the deadly pyroclastic flows triggered by lava-dome collapse and its proximity to the Yogyakarta metropolitan area, while Semeru, farther from major cities, is characterised by periodic small eruptions.",
    concept:
      "Nearly half of Merapi's eruptions have been accompanied by pyroclastic flows, making it an important sample for studying the relationship between viscous lava-dome instability and hazardous pyroclastic-flow generation; it is also one of the most intensively monitored active volcanoes in the world.",
    history:
      "Merapi's earliest recorded major eruption dates to 1006; subsequent major eruptions in 1786, 1822, 1872, 1930, 1976, 2006, 2010 and the ongoing activity since 2021 have all caused casualties and large-scale evacuations, making it a textbook case of the long coexistence of human settlement and volcanic hazard on Java.",
  },
  "ijen-crater": {
    seeing:
      "Ijen Crater, at about 2,799 m in East Java, is a site of intense sulphuric activity home to the world's largest highly acidic crater lake, along with a rare \"blue fire\" phenomenon visible at night.",
    formation:
      "The Ijen crater lake formed from water pooling within the crater; its extreme acidity comes from a high concentration of sulphuric and hydrochloric acid, while sulphuric gas continuously escaping from cracks at the crater rim ignites at temperatures up to 600 °C, producing a visible blue flame.",
    observation:
      "From the air, Ijen crater appears as a roughly circular depression about 1 km across and 175 m deep; the lake water shows a rare turquoise-green colour, with blue fluorescent-like flames visible at cracks after dark, and a constant plume of white sulphurous smoke by day.",
    // distinguish sources: 海拔约 2799 m（2023 年 UNESCO 世界地质公园认定采用的现行值，另有 2769 m 旧值）、火山口直径约 1 km、深约 175 m、世界最大强酸性火山口湖；蓝色硫磺火焰另见于埃塞俄比亚达洛尔（NatGeo，2 级）——原写的「冰岛」无记录。核实 2026-09-11
    distinguish:
      "Ijen differs from the volcanic landforms around Tambora or Tana Toraja: it is distinguished by the rare combination of a highly acidic crater lake and blue sulphuric flames — a visible phenomenon recorded at only a handful of sites worldwide, including Ethiopia's Dallol volcano.",
    concept:
      "Ijen's acidic crater-lake environment and blue sulphuric flames make it an important field sample for studying the geochemistry of volcanic crater gases and the formation mechanisms of sulphur deposits.",
    history:
      "Local miners have long hand-collected solidified blocks of sulphur from within the crater and carried them down the mountain — a physically demanding traditional livelihood; the crater area is now designated for tourism and geological study.",
  },
  "dieng-plateau": {
    // 全六段 sources: 海拔约 2000 m、20 余个火山口；1979-02-20 西尼拉火山口致命毒气事故属实（各方死亡数 142–182 不等，正文只写「致命」未给数字，不必改）。核实 2026-09-11，未改动
    seeing:
      "The Dieng Plateau, a highland at roughly 2,000 m in Central Java, is a volcanic complex of two or more stratovolcanoes and more than 20 small craters, dotted with geothermal fumaroles and sulphur hot springs.",
    formation:
      "The Dieng Plateau is the summit platform of a large volcanic complex, flattened by repeated eruption and collapse; an underlying magma chamber continues to supply heat to the surface, sustaining active geothermal activity and sulphur mineral deposits.",
    observation:
      "From the air, the Dieng Plateau appears as a relatively flat green highland dotted with several pale-coloured crater lakes and white plumes rising from sulphur fumaroles, ringed by taller volcanic cones along its edges.",
    distinguish:
      "Both Dieng and Ijen host active sulphuric geothermal activity, but Dieng is a broad, composite volcanic plateau scattered with many small craters, while Ijen is a single crater lake atop one volcanic cone.",
    concept:
      "The 1979 Sinila crater incident, in which a sudden release of carbon dioxide and other toxic gases proved fatal, makes Dieng an important case study for the risk of invisible gas hazards in volcanic plateau regions.",
    history:
      "The Dieng Plateau preserves a group of Hindu temple ruins dating to the 7th–8th centuries, among the earliest known Hindu structures on Java, each temple named for a figure from the Indian epic the Mahabharata — a rare case of ancient religious architecture coexisting with an active volcanic landscape.",
  },
  "gunung-sewu-karst": {
    // 全六段 sources: 2015-09 列入 UNESCO 世界地质公园（unesco.org/en/iggp，1 级）；已勘察 119 座溶洞与官方地质公园介绍一致。核实 2026-09-11，未改动
    seeing:
      "The Gunung Sewu (\"Thousand Mountains\") Karst is a limestone karst highland spanning Yogyakarta, Central Java and East Java, extending about 120 km east–west and studded with more than 40,000 limestone hills.",
    formation:
      "The Gunung Sewu karst formed as ancient coral-reef limestone was uplifted above sea level over millions of years and then continuously dissolved by a hot, wet tropical climate, producing a classic cluster of cone karst hills and an underground cave system.",
    observation:
      "From the air, Gunung Sewu presents a striking landscape of hundreds upon hundreds of densely packed, cone-shaped limestone hills — a rolling, wave-like \"thousand mountains\" terrain — with its southern edge fronting the Indian Ocean along a coastline that preserves several undeveloped beaches.",
    distinguish:
      "Both Gunung Sewu and Tana Toraja are Indonesian highland karst landscapes, but Gunung Sewu is defined by its dense cluster of cone-shaped limestone hills and an extensive cave system, while Tana Toraja is a highland where karst mountains interweave with terraced fields and bamboo groves.",
    concept:
      "With 119 surveyed caves featuring stalactites, stalagmites and underground rivers, Gunung Sewu is a classic sample for studying the relationship between tropical karst landform development and underground hydrological systems; it was inscribed into the UNESCO Global Geopark Network in 2015.",
    history:
      "The Gunung Sewu karst region preserves traces of ancient human activity and groundwater use, and today serves as an important resource for local communities developing ecotourism and geological education.",
  },
  krakatoa: {
    // 全六段 sources: 1883 年死亡荷兰官方估计 36,417 人，正文「逾3.6万」吻合；声波传至罗德里格斯岛约 4800 km；喀拉喀托之子 1927 年底征兆、1930 年浮出水面。⚠️ 阿纳克喀拉喀托 2018 年侧翼崩塌后高度骤降，若正文给高度须带时点。核实 2026-09-11，未改动
    seeing:
      "Krakatoa sits in the Sunda Strait between Java and Sumatra; its 1883 eruption was one of the most violent volcanic explosions ever recorded in modern history, and a still-active island volcano, Anak Krakatau (\"Child of Krakatoa\"), continues to rise from the sea there today.",
    formation:
      "The 1883 eruption caused roughly two-thirds of the original island to collapse into the strait; magmatic activity beneath the site continued, and by late 1927 renewed volcanic signs appeared nearby, with a new cone, Anak Krakatau, emerging above the surface in 1930 and continuing to grow and erupt since.",
    observation:
      "From the air, Anak Krakatau appears as an isolated black volcanic cone island in the middle of the Sunda Strait, with remnants of the original island visible in the surrounding waters; steam or ash can often be seen rising from its crater during active periods.",
    distinguish:
      "Both Krakatoa and Tambora produced globally significant eruptions in Indonesian history, but Krakatoa's destruction came mainly from the tsunamis it triggered, while Tambora is distinguished by the sheer volume of ejected material and its more pronounced global climate-cooling effect.",
    concept:
      "The ongoing growth of the Krakatoa volcanic island makes it a natural laboratory for studying how a volcanic island rebuilds land and re-establishes ecology after re-emerging from the seafloor following an eruption.",
    history:
      "The eruption of August 26–27, 1883 is considered one of the loudest sounds ever recorded in modern history, with the blast heard more than 4,800 km away; the resulting tsunamis killed more than 36,000 people, making it one of the most consequential natural disasters of the 19th century worldwide.",
  },
  "lake-toba": {
    // 全六段 sources: 约 7.4 万年前 VEI 8 超级喷发、湖面约 100×30 km（GVP，2 级）；「过去2500万年间已知规模最大的爆炸性喷发」与学界「第四纪已知最大」共识同一量级（部分文献作「过去2800万年」），可接受。与航线解说 cgk-kno「世界最大的火山破火山口湖之一」并读不冲突。核实 2026-09-11，未改动
    seeing:
      "Lake Toba, a volcanic caldera lake in North Sumatra, is Indonesia's largest lake, about 100 km long and 30 km wide, with Samosir Island — roughly the size of Singapore — rising from its centre.",
    formation:
      "Lake Toba's basin formed from a supervolcanic eruption about 74,000 years ago, the largest known explosive eruption of the past 25 million years; the eruption caused the crust to collapse into a vast caldera, and subsequent local uplift within the lake produced Samosir Island at its centre.",
    observation:
      "From the air, Lake Toba appears as an elongated body of water ringed by steep caldera walls, with Samosir Island nearly bisecting the lake into eastern and western halves; the shoreline is deeply indented with villages and terraced farmland along its edges.",
    distinguish:
      "Lake Toba, Tambora and Krakatoa are all giant volcanic landforms on the Sumatra–Java volcanic arc, but Lake Toba is a caldera lake formed by a prehistoric supereruption, whose scale far exceeds any single eruption recorded in historical times.",
    concept:
      "Ash from the Toba supereruption blanketed vast areas including the Indian subcontinent, and some researchers have proposed the event may have triggered a global \"volcanic winter\" affecting early human populations, making it a classic case for studying the global climatic impact of supervolcanic eruptions.",
    history:
      "Lake Toba has long been home to the Batak people, whose highland climate and fertile volcanic soil have sustained agriculture and fishing for generations; it remains one of Sumatra's most important natural and cultural destinations today.",
  },
  "gunung-leuser": {
    // 全六段 sources: 面积 7927 km²、最高峰 3466 m；2004 年与 Kerinci Seblat、Bukit Barisan Selatan 共同以「苏门答腊热带雨林遗产」列入 UNESCO —— 本条对应的正是这一期，未串位。核实 2026-09-11，未改动
    seeing:
      "Gunung Leuser National Park straddles Aceh and North Sumatra provinces, covering about 7,927 km²; its highest peak, Gunung Leuser, reaches 3,466 m, and the park is one of the most important wild habitats of the Sumatran orangutan.",
    formation:
      "The Leuser range is part of the Bukit Barisan mountain chain, uplifted by long-term tectonic subduction and orogeny; the perpetually wet equatorial climate has shaped a dense tropical rainforest cover, with about 40% of the park lying above 1,500 m.",
    observation:
      "From the air, Gunung Leuser is a continuous, rolling expanse of mountainous terrain almost entirely covered by primary tropical rainforest, its canopy richly layered and river valleys deeply incised; the orangutan sanctuary around Bukit Lawang lies along one such valley, contrasting with the regular geometric patches of surrounding plantations.",
    distinguish:
      "Both Gunung Leuser and Kerinci Seblat National Park form part of the Tropical Rainforest Heritage of Sumatra, but Gunung Leuser is known for the orangutan sanctuary at Bukit Lawang, while Kerinci Seblat is defined by Mount Kerinci, Indonesia's tallest volcano.",
    concept:
      "Home to flagship endangered species including the Sumatran tiger, elephant, rhinoceros and orangutan, Gunung Leuser is an important sample for studying tropical rainforest biodiversity conservation and habitat connectivity.",
    history:
      "The orangutan sanctuary at Bukit Lawang has conducted rehabilitation and research since the 1970s; the park was jointly inscribed on the UNESCO World Heritage List in 2004 alongside Kerinci Seblat and Bukit Barisan Selatan National Parks, a place where the traditional lands of local communities intersect with international conservation efforts.",
  },
  "mount-kerinci": {
    // 全六段 sources: 3805 m 为苏门答腊最高峰、全印尼最高火山；克林芝—塞布拉特国家公园 2004 年随「苏门答腊热带雨林遗产」列入 UNESCO。核实 2026-09-11，未改动
    seeing:
      "At 3,805 m, Mount Kerinci is the highest peak on Sumatra and the tallest volcano in all of Indonesia, standing within Kerinci Seblat National Park, renowned as a habitat of the Sumatran tiger.",
    formation:
      "Kerinci is an active stratovolcano within the Bukit Barisan range, its steep conical form built up by long-term magmatic eruption and pyroclastic deposition, with an active crater preserved at its summit.",
    observation:
      "From the air, Kerinci's tall, steep profile is usually wreathed in cloud at the summit, surrounded by extensive primary tropical montane rainforest that contrasts sharply with the lower-elevation plantation belts around its base.",
    distinguish:
      "Both Kerinci and Gunung Leuser are major Sumatran mountain systems, but Kerinci is a single, standalone active volcano and the tallest peak on the island and in the country, while Gunung Leuser is an entire range renowned for rainforest biodiversity.",
    concept:
      "As the highest active volcano on any Asian island, Kerinci's ongoing eruptive activity makes it an important sample for studying the relationship between magmatism along the Sunda volcanic arc and high-elevation tropical mountain ecosystems.",
    history:
      "Kerinci Seblat National Park, where the mountain stands, was jointly inscribed on the UNESCO World Heritage List in 2004 as part of the Tropical Rainforest Heritage of Sumatra; it is an important Sumatran tiger habitat and the traditional route for climbers ascending Indonesia's tallest volcano.",
  },
  "mount-agung": {
    seeing:
      "At 3,031 m, Mount Agung is Bali's highest point and is considered a sacred mountain in Balinese Hindu belief; Pura Besakih, Bali's largest temple, sits on its slopes.",
    formation:
      "Agung is an active stratovolcano built up from repeated eruptions of lava and pyroclastic material, its cone taking on an almost perfectly symmetrical conical shape, a signature feature of the Sunda volcanic arc as it crosses Bali.",
    observation:
      "From the air, Agung's tall, symmetrical cone is usually wreathed in cloud at the summit, its lower slopes covered in rice terraces and coconut groves, contrasting sharply with the gentler coastal terrain of southern Bali.",
    distinguish:
      "Both Agung and Rinjani are tall active volcanoes in the Bali–Lombok region, but Agung is Bali's highest point and closely bound up with Balinese Hindu belief, while Rinjani is regarded as a sacred mountain in the traditional beliefs of Lombok's Sasak people.",
    concept:
      "Agung's 2017–2019 eruptive activity makes it an important modern case study for how a stratovolcano dormant for decades can reawaken, and for the impact of volcanic ash on international air travel.",
    // history sources: 3031 m 为巴厘岛最高点；上次大喷发 1963 年，2017-11-21 再度喷发（寂静期 54 年，同行评审口径）；2017-11 伍拉赖机场因喷发关闭（CNN，2 级）。核实 2026-09-11
    history:
      "After 54 years of dormancy, Agung began erupting again on November 21, 2017; repeated eruptions forced the evacuation of more than 100,000 people and volcanic ash clouds temporarily closed Ngurah Rai International Airport, with activity continuing until June 2019 — a modern textbook case of Indonesian volcanic monitoring and emergency response.",
  },
  "uluwatu-cliffs": {
    // 全六段 sources: 崖高各来源 70–79 m，正文「逾70米」取保守下限；武吉半岛古珊瑚礁抬升成因、乌鲁瓦图庙为巴厘六大方位庙之一均有据。核实 2026-09-11，未改动
    seeing:
      "The Uluwatu Cliffs are a stretch of limestone coastline at the southern tip of Bali's Bukit Peninsula, rising sheer from the Indian Ocean to heights of more than 70 m in places, with the famous clifftop Uluwatu Temple perched at the top.",
    formation:
      "The Bukit Peninsula as a whole is an uplifted ancient coral reef exposed above sea level over millions of years; its surface is dry, pale limestone, sharply contrasting with the fertile volcanic soil of northern Bali.",
    observation:
      "From the air, the Uluwatu Cliffs show sheer white limestone walls plunging straight into the Indian Ocean, with sparse vegetation and flat terrain atop the plateau — together with the crashing surf below and nearby surf breaks, this forms one of Bali's most iconic stretches of coastline.",
    distinguish:
      "Both Uluwatu and Nusa Penida feature limestone cliff landforms around Bali, but Uluwatu is part of the uplifted-coral-reef Bukit Peninsula attached to mainland Bali, while Nusa Penida is a separate offshore island southeast of Bali.",
    concept:
      "The coexistence of the uplifted coral-reef Bukit Peninsula with the active volcanic terrain of northern Bali offers a direct sample for studying how two starkly different landform units can coexist on a single island.",
    history:
      "Uluwatu Temple is one of Bali's six \"directional temples\" and has long been an important site of Balinese Hindu worship; today the cliffline is also one of Bali's most celebrated surfing and sunset-viewing destinations.",
  },
  "nusa-penida": {
    // 全六段 sources: 克林金崖约 150 m（个别来源作约 120 m，150 更常见）；崖下海滩约 80 m；2016–2017 年经社交媒体走红。核实 2026-09-11，未改动
    seeing:
      "Nusa Penida is an island off the southeast coast of Bali; a well-known landmark, Kelingking Cliff on the southwest shore, rises about 150 m above sea level and is widely recognised for its dinosaur-like silhouette.",
    formation:
      "Kelingking Cliff is composed of limestone from an ancient coral reef uplifted above sea level over millions of years; sustained wave erosion has gradually undercut the base of the cliff, shaping its current steep profile and the narrow beach below.",
    // observation sources: 80 m 仅见于四级来源且各源互相矛盾（80/200/300 m），已去掉具体数。随机抽样审计（seed=3）判为 unknown。2026-09-13 核。
    observation:
      "From the air, Kelingking Cliff shows a layered limestone rock face, its top vegetated and its base fronted by a short, narrow beach; similar uplifted coral-reef cliff landforms occur at several points along Nusa Penida's coastline.",
    distinguish:
      "Both Nusa Penida and the Uluwatu Cliffs are made of uplifted coral-reef limestone, but Nusa Penida is a separate island east of Bali, while Uluwatu forms part of the Bukit Peninsula attached to mainland Bali.",
    concept:
      "The layered rock face at Kelingking Cliff offers a direct sample for studying how an uplifted coral-reef platform progressively collapses and retreats under sustained wave erosion.",
    history:
      "Kelingking Cliff was once a relatively obscure spot; it rose to global fame around 2016–2017 through social media, and is now Nusa Penida's single most-visited site.",
  },
  "mount-rinjani": {
    // 全六段 sources: 3726 m 为印尼第二高活火山；塞加拉阿纳克湖由 1257 年萨马拉斯喷发形成、湖面 2004 m、约 11.3 km²（PNAS 2013，1 级）。核实 2026-09-11，未改动
    seeing:
      "At 3,726 m, Mount Rinjani is Lombok's highest peak and Indonesia's second-highest volcano; the Segara Anak crater lake within its caldera is its signature feature.",
    formation:
      "Segara Anak crater lake formed when Mount Samalas erupted violently in 1257, causing the summit to collapse; the lake sits at 2,004 m elevation and covers about 11.3 km², and the Gunung Barujari cone on its eastern shore has continued to erupt within the lake, building a new volcanic cone.",
    observation:
      "From the air, Rinjani's tall bulk and intact crater rim are clearly visible, with the crescent-shaped lake curving around Barujari cone; the lake stays slightly warmer than other lakes at similar elevation due to underlying magmatic heating, and natural hot springs are present nearby.",
    distinguish:
      "Both Rinjani and Agung are tall active volcanoes in the Bali–Nusa Tenggara region, but Rinjani is distinguished by its intact caldera lake and an actively growing secondary cone within it, while Agung is a single symmetrical cone closely bound up with Balinese Hindu belief.",
    concept:
      "The \"lake containing an active cone\" structure of Segara Anak offers a direct sample for studying how a magmatic system rebuilds a new cone within a lake basin after a caldera collapse.",
    history:
      "Rinjani is regarded as a sacred mountain in the traditional beliefs of Lombok's Sasak people; the surrounding Mount Rinjani National Park is an important hiking and trekking destination and a site for traditional Sasak ceremonial activities.",
  },
  kelimutu: {
    // 全六段 sources: 1639 m；三色火山口湖颜色随地下热液活动周期性变化，三湖对应的传说与公开资料一致。火口湖颜色是会变的量。核实 2026-09-11，未改动
    seeing:
      "At 1,639 m, Kelimutu is a volcano on Flores whose summit holds three adjacent crater lakes, each a different colour — a rare geological spectacle even by Southeast Asian standards.",
    formation:
      "The three crater lakes formed from water pooling within separate craters; each shows a distinct colour owing to differences in mineral content, water temperature and gas activity, and the colours shift periodically as underlying hydrothermal activity changes, ranging from turquoise and blue-green to reddish-brown.",
    observation:
      "From the air and from the viewing platforms, the three crater lakes sit tightly clustered yet strikingly different in colour, their steep, largely bare shorelines contrasting with the forested volcanic slopes surrounding them.",
    distinguish:
      "Both Kelimutu and Ijen are Indonesian volcanoes known for their crater lakes, but Kelimutu is distinguished by three adjacent, differently coloured lakes that shift over time, while Ijen is a single highly acidic lake accompanied by blue sulphuric flames.",
    concept:
      "The periodic colour changes of Kelimutu's three lakes make it an important field case for studying the dynamic relationship between hydrothermal activity, mineral dissolution and lake-water chemistry within volcanic craters.",
    history:
      "Local Florenese communities believe the three lakes are the resting places of the souls of elders, young men and women, and malevolent spirits respectively, with the changing colours understood to reflect the state of departed souls — a striking example of natural landscape intertwined with local belief.",
  },
  "komodo-national-park": {
    // 全六段 sources: 三座主岛（科莫多 / 帕达尔 / 林卡）+ 26 座小岛；1991 年列入 UNESCO（whc.unesco.org/en/list/609，1 级）。核实 2026-09-11，未改动
    seeing:
      "Komodo National Park lies in the waters between Flores and Sumbawa, comprising the three larger islands of Komodo, Padar and Rinca along with 26 smaller ones, and is the only natural habitat of the Komodo dragon, the largest living lizard.",
    formation:
      "The Komodo archipelago sits along the southern edge of the Sunda volcanic arc; its terrain is dominated by dry volcanic hills and savanna, shaped by a persistently dry climate that sets it apart from Indonesia's generally wetter tropical islands.",
    observation:
      "From the air, the Komodo Islands appear as a scatter of tan-coloured savanna hills within deep blue water, their coastlines deeply indented with natural harbours, forming a striking layered contrast with the pale turquoise waters over the surrounding coral reefs.",
    distinguish:
      "Both Komodo National Park and Wakatobi are important marine protected areas in eastern Indonesia, but Komodo is known for the terrestrial Komodo dragon and its dry savanna landscape, while Wakatobi's core protected asset is its underwater coral reef ecosystem.",
    concept:
      "As the only large lizard confined to such a limited range, the Komodo dragon is a classic case for studying the evolution of a top predator's ecological niche under island-isolation conditions.",
    history:
      "The Komodo Islands have long been the traditional home of local fishing communities living alongside the dragons; recognised for their exceptional geological and biological value, they were inscribed on the UNESCO World Heritage List in 1991 and remain one of Indonesia's most important conservation and ecotourism destinations.",
  },
  "mount-tambora": {
    // 全六段 sources: 1815 年为有文字记录以来规模最大的火山喷发（史前 Toba 等不计入「记录史」）；VEI 7、喷出约 37–45 km³ DRE；山体由约 4300 m 降至约 2850 m；1816「无夏之年」。直接死亡学界估 11,000–12,000，饥荒等间接死亡另计（5 万–9 万余不等）—— 正文「至少1万人直接死亡」保守、不越界。核实 2026-09-11，未改动
    seeing:
      "Mount Tambora stands on the northern coast of Sumbawa; its 1815 eruption is the largest volcanic eruption ever recorded in human history, and the mountain now stands about 2,850 m tall after the event.",
    formation:
      "Before its eruption Tambora was estimated at about 4,300 m; the violent eruption of April 1815 ejected more than 37 km³ of magmatic material with a Volcanic Explosivity Index of 7, causing the summit to collapse by more than 1,400 m and forming today's broad caldera.",
    observation:
      "From the air, Tambora's summit is a vast caldera more than 6 km across, its walls steep and its interior uneven, standing in sharp contrast with the vegetated volcanic slopes surrounding it.",
    distinguish:
      "Both Tambora and Krakatoa produced globally significant eruptions in Indonesian history, but Tambora is distinguished by the sheer volume of ejected material and its pronounced global climate-cooling effect, while Krakatoa's destruction came mainly from the tsunamis it triggered.",
    concept:
      "The \"Year Without a Summer\" of 1816, caused by Tambora's eruption, is a classic case for studying how a single volcanic eruption can affect the global climate system through stratospheric aerosols; Europe recorded its coldest summer temperatures that year since 1766.",
    history:
      "The 1815 eruption and the pyroclastic flows, earthquakes and tsunamis that followed killed at least 10,000 people directly; the ash it ejected triggered severe famines across parts of the Northern Hemisphere the following year, making it a major contributor to the global climate and food crisis of the early 19th century.",
  },
  "tanjung-puting": {
    // 全六段 sources: 公园面积 415,040 ha，正文「约41.6万公顷」差 <0.3%；1935 年设禁猎区、1971 年 Galdikas 建利基营地、1982 年升格国家公园。核实 2026-09-11，未改动
    seeing:
      "Tanjung Puting National Park, on the coast of Central Kalimantan, is renowned for orangutan conservation, covering about 416,000 hectares, with the Sekonyer River serving as the main route into the park's interior.",
    formation:
      "The park sits on the low-lying southern coast of Borneo, where persistently high rainfall and flat terrain have produced extensive seasonally flooded peat swamp forest, its peat layers locally more than two metres deep — a classic example of this distinctive tropical wetland type.",
    observation:
      "From the air, the dark brown Sekonyer River winds through a vast expanse of deep green swamp forest, with mangrove and coastal forest along its lower reaches; dense vegetation lines both banks, leaving little open land visible.",
    distinguish:
      "Both Tanjung Puting and the Kapuas River are important water-linked landscapes of Kalimantan on Borneo, but Tanjung Puting is known for its peat swamp forest and orangutan conservation, while the Kapuas is Indonesia's longest river, running the full width of the island.",
    concept:
      "The park's extensive intact primary peat swamp forest makes it an important sample for studying the carbon-storage function and biodiversity conservation value of tropical peatland wetlands — a habitat type largely converted to agriculture elsewhere on Borneo.",
    history:
      "Primatologist Biruté Galdikas established Camp Leakey research station here in 1971, conducting long-term orangutan rehabilitation and behavioural research; the area was designated a game reserve in 1935 and formally elevated to national park status in 1982.",
  },
  "kapuas-river": {
    // 全六段 sources: 全长约 1143 km，为印尼及婆罗洲最长河流，源出穆勒山脉。**与马来西亚批的拉让江并排核过**：拉让江（约 563 km）是「马来西亚最长」、在婆罗洲排第七，两条口径互不证伪。核实 2026-09-11，未改动
    seeing:
      "At about 1,143 km long, the Kapuas River is Indonesia's longest river and the longest on the island of Borneo, rising in the Müller Mountains of West Kalimantan and flowing west through mountains, swamps and lowland rainforest before emptying into the South China Sea.",
    formation:
      "The Kapuas River basin lies across the low-lying western part of Borneo; long-term sediment deposition by the river has shaped extensive floodplains and a delta, with the terrain flat and the channel heavily braided near the river mouth at Pontianak.",
    observation:
      "From the air, the Kapuas shows a broad, winding channel running through vast tracts of tropical rainforest and swamp wetland, with riverside villages and stilted water settlements strung along its banks; near the coast the channel network becomes intricate and the terrain extremely flat where it meets the South China Sea.",
    distinguish:
      "Both the Kapuas River and Tanjung Puting National Park are important water-linked landscapes of Kalimantan, but the Kapuas is a single trunk river running the full width of the island, while Tanjung Puting is a national park defined chiefly by its peat swamp forest.",
    concept:
      "The Kapuas River basin as a whole is one of Southeast Asia's most biodiverse river ecosystems, making it an important sample for studying the long-term interaction between a major tropical river system and the human settlements along it.",
    history:
      "For centuries the Kapuas River has served as the principal waterway linking West Kalimantan's coast and interior for trade and travel, playing a significant role in cultural exchange and the rise of regional kingdoms in the region.",
  },
  "tana-toraja": {
    // 全六段 sources: 县域约 2044 km²、最高点 3083 m；「托拉查」意为「高地上的人」。⚠️ 红线自查：正文只写喀斯特地貌、梯田景观与文化景观的客观事实，**未作宗教评价或族群比较**。核实 2026-09-11，未改动
    seeing:
      "Tana Toraja is a highland region in the interior of South Sulawesi, covering about 2,044 km² with elevation reaching as high as 3,083 m; its central town of Rantepao is ringed by classic limestone karst mountains and rice terraces.",
    formation:
      "The landscape of Tana Toraja has been shaped by long-term limestone uplift combined with tropical dissolution, producing a terrain where karst mountains and river valleys interweave, with gentle valley floors long converted into terraced paddy fields.",
    observation:
      "From the air, Tana Toraja shows tiered green rice terraces set among grey-white limestone mountains, dotted with bamboo groves and scattered traditional villages, with mist frequently lingering in the valleys.",
    distinguish:
      "Both Tana Toraja and the Gunung Sewu karst are Indonesian highland karst landscapes, but Tana Toraja is a highland where karst mountains interweave with terraced fields, bamboo groves and traditional settlements, while Gunung Sewu is defined by its dense cluster of cone-shaped limestone hills and cave system.",
    concept:
      "The long-term integration of terraced agriculture with karst terrain in the Tana Toraja highlands is a geographic sample for studying how sustainable agriculture can be developed in mountainous karst regions through terracing.",
    history:
      "The name \"Toraja\" derives from the Buginese language, meaning \"people of the uplands,\" referring to the region's indigenous inhabitants; Tana Toraja's climate is cool and misty year-round, making it an important highland settlement area in the interior of Sulawesi.",
  },
  "bunaken-national-park": {
    // 全六段 sources: 面积约 890.65 km²、97% 为海域、1991 年设立；约 390 种珊瑚、约 2000 种鱼类（约占印度—西太平洋鱼类七成）。核实 2026-09-11，未改动
    seeing:
      "Bunaken National Park lies off the coast near Manado in North Sulawesi, covering about 890 km², 97% of it marine; it is home to some 390 coral species and around 2,000 fish species, and is among the earliest marine national parks established in Indonesia.",
    formation:
      "A pronounced tectonic fault runs along the edge of the continental shelf in Manado Bay, producing steep vertical walls and deep drop-offs — with depths reaching 1,566 m — that provide an ideal foundation for coral reef growth.",
    observation:
      "From the air and at the surface, islands including Bunaken and Manado Tua are scattered across deep blue water, with the shallow nearshore zones showing the characteristic pale green and turquoise hues of coral reef, sharply bordered by the deep indigo water beyond.",
    distinguish:
      "Both Bunaken National Park and Wakatobi are important marine protected areas around Sulawesi, but Bunaken is known for its near-shore vertical reef walls, while Wakatobi is distinguished by its larger scale and greater diversity of reef types.",
    concept:
      "The vertical wall terrain created by tectonic faulting along Bunaken's waters is a classic sample for studying how continental-shelf-edge fault structures shape the spatial pattern of coral reef ecosystems.",
    history:
      "Bunaken was designated a national park in 1991, one of the earliest marine protected areas in Indonesia, and has long been an important destination for international diving and marine ecotourism.",
  },
  wakatobi: {
    seeing:
      "Wakatobi lies off the southeastern tip of Sulawesi; Wakatobi National Park, established in 2002, covers about 1.4 million hectares and contains 25 groups of coral reefs spanning every major reef type, with a combined reef perimeter of more than 600 km.",
    formation:
      "The Wakatobi archipelago sits at the core of the Coral Triangle; the long-term convergence of warm ocean currents combined with sustained coral growth has produced a complex reef system encompassing fringing reefs, barrier reefs and atolls.",
    observation:
      "From the air, the main islands of Wakatobi — Wangi-Wangi, Kaledupa and others — are surrounded by broad, pale-coloured reef flats that give way abruptly to deep blue open water beyond, their reef outlines clearly traceable in satellite imagery.",
    distinguish:
      "Both Wakatobi and Bunaken National Park are important marine protected areas around Sulawesi, but Wakatobi is distinguished by its larger reef area and greater diversity of reef types — fringing, barrier and atoll — while Bunaken is known for its near-shore vertical reef walls.",
    // concept sources: 鱼类 942 种（Allen & Erdmann 2003 调查，被多方作为标准参考值）；珊瑚种数 UNESCO MAB 官方页记 396 种、营销文案作 750 种，口径不明，正文不写死；原文「在印尼境内仅次于大堡礁」逻辑不通（大堡礁不在印尼）且无学术出处，已删。国家公园 2002 年设立、约 140 万 ha、2005 年列入 UNESCO 预备名录均核实无误。核实 2026-09-11
    concept:
      "Wakatobi records 942 fish species (per a 2003 survey), while published counts of coral species vary widely with survey methodology, making it an important sample for studying how marine biodiversity forms at the core of the Coral Triangle.",
    history:
      "Wakatobi has been on the UNESCO World Heritage tentative list since 2005; the archipelago's name is an acronym of its four main islands — Wangi-wangi, Kaledupa, Tomia and Binongko — and its waters have long served as the traditional fishing grounds of local communities.",
  },
  "banda-islands": {
    // 全六段 sources: 11 座岛屿、陆地约 8150 ha、班达阿皮火山约 670 m、1820 与 1852 年喷发造成破坏；19 世纪中叶前为全球唯一肉豆蔻产地（Britannica）。⚠️ 红线自查：正文只写「香料贸易中心」这类定位性史实，**未写 17 世纪战争的伤亡或评价**。核实 2026-09-11，未改动
    seeing:
      "The Banda Islands, in Maluku province, are an archipelago of 11 small volcanic islands covering a total land area of about 8,150 hectares; Mount Api, at about 670 m, is the central geological feature of the group.",
    formation:
      "The Banda Islands sit within a geologically active volcanic zone; Mount Api has erupted repeatedly through history, causing severe destruction in both 1820 and 1852, and the islands' fertile volcanic soil provides ideal growing conditions for nutmeg and other spice crops.",
    observation:
      "From the air, Mount Api's intact cone is ringed by islands including Neira and Banda Besar; the surrounding waters are clear, with coral reefs fringing the volcano's base, forming a layered band of colour against the deep blue open water beyond.",
    distinguish:
      "Both the Banda Islands and Belitung Island are Indonesian islands historically renowned for a distinctive resource, but the Banda Islands are known for nutmeg cultivation enabled by their volcanic soil, while Belitung is known for its granite landforms and tin-mining resources.",
    concept:
      "The relationship between the Banda Islands' volcanic soil and the distribution of nutmeg cultivation is a classic case study of how specific geological conditions shape the regional geography of an economic crop.",
    history:
      "Until the mid-19th century the Banda Islands were the world's sole source of nutmeg and mace, making them a vital hub in the maritime trade networks linking South Asia, the Arab world and East Asia, and a focal point of early European maritime interest in the region.",
  },
  "belitung-island": {
    // 全六段 sources: 花岗岩「托尔」巨石地貌；2021-04 列入 UNESCO 世界地质公园（unesco.org/en/iggp，1 级）。⚠️ concept 段「勿里洞石占全球同类天然玻璃 18%–19%」查无出处，见 issue。核实 2026-09-11
    seeing:
      "Belitung Island, in Bangka-Belitung province, is fringed by clusters of granite \"tor\" boulders set against white sand beaches and pale blue water — a distinctive representative of Indonesia's granite coastal landscape.",
    formation:
      "The island's granite boulders have been shaped by millions of years of weathering, gradually breaking apart and rounding along the rock's natural joints to form today's rounded \"tor\" boulder clusters, some as large as houses.",
    observation:
      "From the air, clusters of pale granite boulders are scattered across Belitung's white-sand beaches, their contrast with the pale blue water and white sand forming the coastline's most distinctive visual signature.",
    distinguish:
      "Both Belitung Island and the Uluwatu Cliffs are well-known Indonesian coastal landforms, but Belitung is defined by weathered granite boulders paired with sandy beaches, while Uluwatu is a limestone cliff coastline.",
    // concept sources: 「18%–19%」查无出处，删去。核实 2026-09-12
    concept:
      "\"Billitonite,\" a natural glass found on Belitung and formed by a meteorite impact, makes the island an important sample for studying geological evidence of extraterrestrial impact events.",
    history:
      "Belitung Island was inscribed into the UNESCO Global Geopark Network in 2021; its distinctive granite landforms combined with the tektite discoveries have made it a representative destination combining geological study with coastal tourism.",
  },
  "puncak-jaya": {
    seeing:
      "At 4,884 m, Puncak Jaya is the main summit of the Sudirman Range on the island of New Guinea, the highest point in Indonesia and the highest peak in all of Oceania and among all the world's islands, commonly known to climbers as Carstensz Pyramid.",
    formation:
      "The Sudirman Range, home to Puncak Jaya, was uplifted by New Guinea's prolonged tectonic collision and mountain-building; the mountain is composed mainly of limestone and other sedimentary rock, and its summit preserves a rare permanent glacier for a tropical location.",
    observation:
      "From the air, Puncak Jaya rises tall and steep, its bare summit rock face forming a classic pyramidal profile; the remaining patch of white ice at the top stands out strikingly against the tropical mountain landscape at the equator.",
    distinguish:
      "Both Puncak Jaya and Gunung Leuser are major Indonesian mountain systems, but Puncak Jaya is the country's and Oceania's highest peak, its summit preserving a rare tropical glacier, while Gunung Leuser is known for the rainforest biodiversity of a mid-elevation range.",
    // concept sources: 4884 m 为全球岛屿最高峰（吉尼斯 / Britannica）；「七大洲最高峰」梅斯纳版以查亚峰代表大洋洲、巴斯版以科修斯科山代表 —— 原文只写一种、未注明版本。BMKG 监测显示冰川厚度 2024 年底已降至约 4 m（2010 年装设备时 32 m），持续消融，下轮复核。红线：正文只写冰川与自然地貌，未涉地区政治。核实 2026-09-11
    concept:
      "As Oceania's peak in the Messner version of the Seven Summits list (the Bass version uses Australia's Mount Kosciuszko instead), and as one of the very few mountains anywhere in the tropics with permanent snow and ice, Puncak Jaya is an important observation site for studying how equatorial alpine glaciers respond to global warming.",
    history:
      "Puncak Jaya lies within Lorentz National Park, which has been inscribed on the UNESCO World Heritage List; long-term monitoring by Indonesia's Meteorology, Climatology and Geophysics Agency has shown the summit's \"permanent snow\" continuing to melt, a shrinking-glacier trend that continues to draw sustained scientific attention.",
  },
  "raja-ampat": {
    // 全六段 sources: 逾 1500 座岛屿、四主岛；逾 550 种珊瑚、逾 1800 种礁鱼（CI / TNC 调查）；锦鲤角单次潜水记录 374 种鱼（Gerry Allen 2012，迄今世界纪录）。⚠️ 红线自查：正文只写自然地貌、洋流、珊瑚礁与保护区，**未涉地区政治地位或采矿争议**。核实 2026-09-11，未改动
    seeing:
      "The Raja Ampat archipelago, at the heart of the Coral Triangle, encompasses more than 1,500 islands around its main islands of Misool, Salawati, Batanta and Waigeo, and is one of the most biodiverse marine regions on Earth.",
    formation:
      "Raja Ampat sits where the Indian and Pacific Oceans meet; nutrient-rich deep-sea currents continuously feed shallow coral reefs, blue-water drop-offs, mangrove flats and seagrass beds, forming a complex, multi-layered marine ecosystem foundation.",
    observation:
      "From the air, the waters of Raja Ampat are scattered with hundreds of forest-covered karst islets, with clear pale-green lagoons and deep blue channels between them; the view from the Piaynemo viewpoint near Waigeo is the classic vantage point for taking in this archipelago landscape.",
    distinguish:
      "Raja Ampat, Wakatobi and Bunaken are all major Indonesian marine biodiversity hotspots, but Raja Ampat stands out for having the highest recorded species density anywhere, driven by a \"species factory\" effect from converging deep-sea currents, while the other two are distinguished by their reef scale or near-shore wall formations.",
    concept:
      "Raja Ampat's waters record more than 1,800 fish species and more than 550 coral species — with a single dive at Cape Kri once documenting 374 fish species, a world record — making it a core sample for studying how a marine \"species factory\" forms.",
    history:
      "Raja Ampat has long served as the traditional fishing and marine-resource grounds of local communities; today it is internationally recognised as a core global hotspot for marine biodiversity conservation and a major destination for diving and ecotourism.",
  },
};
