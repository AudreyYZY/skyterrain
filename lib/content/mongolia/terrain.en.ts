import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Mongolia ============
  "mongol-altai": {
    // 全六段 sources: 呼依滕峰 4374 m 为**蒙古国境内最高点**、位于塔王博格达山群跨境山体上 —— ⚠️ 红线自查：正文说明峰在跨境山体上、是蒙古最高点，**未描述边界线如何走、未表述主权、未把中国任何地区与中国并列**；与中国侧 altai 条目对同一山体的高度描述无冲突。三国交界点的具体命名见 issue（来源互相矛盾）。巴彦乌列盖省哈萨克族聚居属定位性事实。核实 2026-09-11
    // seeing sources: 三国交界点：1994 年三国协定文本称 Tavan Bogd-Ula (Kuytunshan)，标高 4082.0 m（PA-X，2 级）；只用有条约支撑的「奎屯峰 / Kuitun Peak」，不再用「纳拉姆达尔峰」。核实 2026-09-12
    seeing:
      "The Mongol Altai Mountains run about 900 km along Mongolia's western border; its highest peak, Khüiten, reaches 4,374 m — the highest point in the country — in the Tavan Bogd massif on the Mongolia–China border, and the Mongolia–Russia–China tripoint is Kuitun Peak (4,082 m) about 2.5 km to its north.",
    formation:
      "The Mongol Altai is part of the Altai orogenic belt, uplifted and folded by crustal compression in the late Paleozoic, then repeatedly carved by glaciation through the Quaternary, producing today's landscape of dense high peaks, glaciers and glacial horns.",
    observation:
      "From the air, the Mongol Altai appears as a continuous belt of snow peaks running northwest to southeast; the Tavan Bogd area holds Mongolia's largest modern glacier cluster, with the range's foothills abutting the Gobi desert and dry steppe in a sharp contrast.",
    distinguish:
      "Both the Mongol Altai and the Gobi Altai belong to the Altai orogenic belt, but the Mongol Altai stands higher and retains modern glaciers, while the Gobi Altai is made up of separate fault-block massifs at lower elevation.",
    concept:
      "The Mongol Altai is the southwestern extension of the wider Central Asian Altai system; its modern glaciers are among the few natural indicators within Mongolia for monitoring climate change.",
    history:
      "The Tavan Bogd area was historically an important route linking nomadic peoples across Mongolia, Russia and China; it now lies administratively within Bayan-Ölgii Province, home to one of Mongolia's Kazakh communities.",
  },
  "khangai-mountains": {
    // 全六段 sources: 敖特冈腾格尔峰各口径 4008（现代测量）/ 4021（旧地形图）/ 4031 m（维基），正文「约4021米（4008至4031之间）」已写成区间，准确；鄂尔浑河谷作为突厥/回鹘/蒙古政治中心属已结束的前现代史。核实 2026-09-11，未改动
    seeing:
      "The Khangai Mountains are a major range in central Mongolia; its highest peak, Otgontenger in Zavkhan Province, reaches about 4,021 m (different surveys give figures between 4,008 and 4,031 m) and is the only peak in the range to carry a permanent glacier.",
    formation:
      "The Khangai is an old folded fault-block range, shaped over time by tectonic uplift together with weathering and erosion into today's relatively gentle, rounded mid-elevation landform, in contrast with the younger, steeper Altai.",
    observation:
      "From the air, the Khangai appears as rolling terrain with forest and alpine meadow interwoven, rivers radiating outward from the range in all directions — the Orkhon, Selenge and other major Mongolian rivers all rise here.",
    distinguish:
      "Both the Khangai and the Mongol Altai are major Mongolian ranges, but the Khangai is gentler and forms the source of several of Mongolia's great rivers, while the Mongol Altai is steeper and retains modern glaciers.",
    concept:
      "As the central watershed range of Mongolia, the Khangai's drainage pattern directly determines the water supply of historic core regions such as the Orkhon valley, making it important for understanding the geographic basis of Mongolia's nomadic civilization.",
    history:
      "The Orkhon valley on the Khangai's southern flank was successively the political heartland of the Turkic Khaganate, the Uyghur Khaganate and the Mongol Empire; the range itself also holds an important place in traditional Mongolian belief.",
  },
  "khentii-mountains": {
    // 全六段 sources: 布尔汗哈勒敦山 2340 m（与 UNESCO 文件配套的常引值）；2015-07-04 以「布尔汗哈勒敦圣山及其周边神圣景观」列入 UNESCO（whc.unesco.org/en/list/1440，1 级）。⚠️ 红线自查：成吉思汗出生/安葬传说属广泛记载的传统信仰，**未作现代民族主义诠释**。核实 2026-09-11，未改动
    seeing:
      "The Khentii Mountains are a range in northeastern Mongolia, source of both the Onon and Kherlen rivers; Burkhan Khaldun within it reaches 2,340 m and was inscribed on the UNESCO World Heritage List in 2015 as \"Great Burkhan Khaldun Mountain and its surrounding sacred landscape.\"",
    formation:
      "The Khentii is an old folded range; long-term weathering and erosion have left it relatively gentle, with denser forest cover than the Khangai, and a radiating pattern of rivers has developed among its slopes.",
    observation:
      "From the air, the Khentii shows high forest cover, with a clear taiga-to-steppe transition zone; the area around Burkhan Khaldun has long been protected under traditional belief, leaving its vegetation relatively well preserved.",
    distinguish:
      "Both the Khentii and the Khangai are important river sources for Mongolia, but the Khentii carries denser forest cover and is known for the sacred-mountain worship of Burkhan Khaldun, while the Khangai is more defined by alpine meadow and radiating river valleys.",
    concept:
      "The Khentii's forest-steppe transition zone is a classic sample of Mongolia's ecotone landscape, useful for studying the distribution patterns of forest-steppe ecosystems in northern Mongolia.",
    history:
      "Burkhan Khaldun is traditionally held to be both the birthplace and burial site of Genghis Khan, and is the most venerated sacred mountain in traditional Mongolian belief; it was formally inscribed on the UNESCO World Heritage List in 2015.",
  },
  "gobi-altai": {
    // seeing sources: 伊赫博格德峰 3957 m；**如今无冰川**（The Cryosphere 2023 原文 Ikh Bogd Massif is unglaciated today，1 级），山顶仅 9 月末至次年 4 月中有季节性积雪；末次冰期古冰川约 20–17 ka 消退，保留的是古冰川侵蚀地貌。最近的现代冰川在 350–550 km 外（敖特冈腾格尔、苏台山）。核实 2026-09-11
    seeing:
      "The Gobi Altai is a transitional range where the Mongol Altai extends southeast into the Gobi desert region, made up of several isolated fault-block massifs; its highest peak, Ikh Bogd, reaches 3,957 m, though it carries no glacier today — only seasonal snow on its summit plateau from late September to mid-April.",
    formation:
      "The Gobi Altai formed through fault-block uplift since the Tertiary, with each block massif standing largely independent, separated by Gobi desert basins — a classic landform of the Altai orogenic belt's transition into desert.",
    observation:
      "From the air, the Gobi Altai appears as a series of isolated massifs rising out of the desert, occasional residual snow visible at their summits, forming a sharp vertical contrast with the open Gobi desert landscape around them.",
    distinguish:
      "Both the Gobi Altai and the Mongol Altai are extensions of the Altai orogenic belt, but the Gobi Altai is made up of isolated fault-block massifs within a desert transition zone, while the Mongol Altai is a continuous belt of high snow peaks.",
    concept:
      "The isolated montane ecosystems of the Gobi Altai are a classic sample of the desert \"ecological island\" phenomenon; the landforms left by Ice Age glaciers at its summit contrast sharply with the surrounding desert, making it an important case for studying arid-region montane ecology.",
    history:
      "The Gobi Altai region was historically an important waypoint for nomadic peoples crossing the Gobi desert, its mountain water sources long providing supply for passing caravans and herders.",
  },
  "mongolia-gobi": {
    // 全六段 sources: 整体约 130 万 km²、按维基主流口径为世界第六大沙漠（另有「亚洲最大、世界第五」一说）；**与中国侧 gobi 条目并排读一致** —— 两边都强调戈壁以砾漠为主、并非连绵沙丘。⚠️ 红线自查：distinguish 段写「与中国境内的戈壁同属一条跨境荒漠带」，是陈述同一地貌带的跨境分布，**未用内外蒙古对举、未作主权或民族评价**。核实 2026-09-11，未改动
    // seeing sources: 「世界第六大沙漠」只有维基（3 级）一说、另有「第五」，说不出口径，降级为「面积最大的荒漠之一」；中文用「荒漠」与本库 gobi 条目一致。航线解说 pek-ubn 英文侧同一处已在 R23c 改。核实 2026-09-11
    seeing:
      "The Gobi spans southern Mongolia and northern China, covering about 1.3 million km² in total — one of the largest deserts in the world; within Mongolia it is centred on provinces such as South Gobi and East Gobi, with a surface mostly of gravel desert rather than continuous dunes.",
    formation:
      "Lying deep inland, far from oceanic moisture sources, and shielded by surrounding ranges from moist air, the Gobi region sits under long-term extreme aridity, where continuous wind erosion and physical weathering have produced a landscape dominated by gravel-covered ground.",
    observation:
      "From the air, Mongolia's Gobi shows broad expanses of grey-brown gravel desert, dotted locally with seasonal oases and isolated massifs, forming a sharp north-south contrast with the alpine meadow landscape of the Khangai and Mongol Altai to the north.",
    distinguish:
      "Mongolia's Gobi and the Gobi within China belong to the same cross-border desert belt, but the Mongolian side is centred administratively on provinces such as South Gobi and East Gobi; landmark dune and desert features within it, such as Khongoryn Els and Bayanzag, are covered in their own separate entries.",
    concept:
      "Though commonly called a \"desert,\" the Gobi's surface is mostly gravel desert rather than sand — a frequently misunderstood point; a gradual transition zone exists between the eastern Gobi and the Mongolian steppe rather than a sharp desert-steppe boundary.",
    history:
      "The Gobi was historically an important trade corridor linking the Chinese heartland with the steppe and the Mongolian plateau with Central Asia; the Mongol Empire's post-station system maintained multiple supply points along Gobi routes.",
  },
  "great-lakes-depression": {
    // 全六段 sources: 面积约 268,309.52 km²（IWA 学术期刊，2 级）；1997 年起为 IGBP 监测全球变暖的站点之一；2003-07-05 乌布苏盆地列入 UNESCO（IUCN 世界遗产展望，2 级）。核实 2026-09-11，未改动
    seeing:
      "The Great Lakes Depression is an endorheic arid basin in western Mongolia, ringed on three sides by the Mongol Altai, the Gobi Altai and the Khangai; it covers about 268,000 km² and contains six large lakes including Uvs Lake.",
    formation:
      "The Great Lakes Depression is a tectonic subsidence basin dating to the Quaternary; during the Pleistocene it was covered by a single vast ancient lake, which later shrank and fragmented under increasing aridity into today's separate saline and freshwater remnant lakes.",
    observation:
      "From the air, the Great Lakes Depression appears as flat, open terrain with multiple lakes scattered across it, saline flats interweaving with dry steppe along the shorelines, and the outline of the surrounding three-sided mountain ring clearly visible.",
    distinguish:
      "Both the Great Lakes Depression and Mongolia's Gobi are arid landforms, but the Great Lakes Depression is an endorheic basin ringed by mountains on three sides, defined by its multiple saline and freshwater lakes, while the Gobi is an open desert plain with a surface mostly of gravel.",
    concept:
      "The coexistence of saline and freshwater lakes within the Great Lakes Depression is a classic sample for studying the evolution of endorheic basin drainage systems and the process of climatic aridification; its lake system has been selected as a monitoring site for the International Geosphere-Biosphere Programme (IGBP) tracking global warming.",
    history:
      "The Great Lakes Depression and the surrounding Uvs Nuur Basin were historically important pastureland for nomadic peoples of western Mongolia; in 2003 the Uvs Nuur Basin was inscribed on the UNESCO World Heritage List as a transboundary natural site (see the Uvs Lake entry).",
  },
  "uvs-lake": {
    // 全六段 sources: 面积约 3350 km²、海拔 759 m、平均水深约 6 m；1997-12-15 设 UNESCO 生物圈保护区、2003-07-05 **俄蒙两国真正共同**以「乌布苏盆地」列入世界遗产、2011 年成立俄蒙联合管理委员会（俄罗斯联合国教科文组织全国委员会，2 级）—— 与卢森堡米内特那种「邻国正在申请被写成共同列入」不同，这一处核实为真正的跨国联合申报。与 khovsgol-lake「最大淡水湖」口径不同、并读不冲突。核实 2026-09-11，未改动
    seeing:
      "Uvs Lake is Mongolia's largest lake by area, covering about 3,350 km² at an elevation of 759 m; it is a shallow, highly saline lake within an endorheic basin, with an average depth of about 6 m.",
    formation:
      "Uvs Lake is a remnant of the vast ancient lake that once covered the entire Great Lakes Depression during the Pleistocene; continuous evaporative concentration over time has steadily raised the water's salinity, producing today's saline lake.",
    observation:
      "From the air, Uvs Lake's surface appears broad and flat, with extensive saline flats along its shoreline forming a clear colour band against the surrounding dry steppe and desert vegetation.",
    distinguish:
      "Both Uvs Lake and Khyargas Lake are saline lakes within the Great Lakes Depression, but Uvs Lake is a self-contained endorheic system and larger in area, while Khyargas Lake is connected by canal to a chain of freshwater lakes including Khar-Us.",
    concept:
      "Uvs Lake and its surrounding reserves bring together desert, steppe, taiga and alpine tundra biomes of eastern Central Asia within close proximity, and the site has been selected as a monitoring station for the International Geosphere-Biosphere Programme tracking global warming.",
    history:
      "In 1997 Uvs Lake and the adjacent reserve on the Russian side were each designated UNESCO Biosphere Reserves; in 2003 the two countries jointly inscribed the \"Uvs Nuur Basin\" on the UNESCO World Heritage List, and in 2011 established a joint Russian-Mongolian management commission.",
  },
  "khyargas-lake": {
    // 全六段 sources: 经运河与哈尔乌苏湖相连、为水系链终端咸水湖属实。⚠️ 面积与海拔为两组数据混用，见 issue。核实 2026-09-11
    // seeing sources: 面积 / 海拔只有两组互相矛盾的 3 级数据，删去。核实 2026-09-12
    seeing:
      "Khyargas Lake is a saline lake within Mongolia's Great Lakes Depression — the terminal lake of the depression's saline-and-freshwater lake chain.",
    formation:
      "Khyargas Lake is likewise a remnant of the fragmented Pleistocene mega-lake, connected to the upstream Khar-Us–Khar–Airag lake system by a roughly 5-km combined natural-and-artificial channel; receiving that inflow and then concentrating through evaporation has left it saline.",
    observation:
      "From the air, Khyargas Lake appears elongated with a relatively straight shoreline, contrasting with the broad, shallow expanse of Khar-Us Lake upstream.",
    distinguish:
      "Both Khyargas Lake and Uvs Lake are saline lakes within the Great Lakes Depression, but Khyargas is the terminal point of a lake chain, concentrated by receiving upstream inflow, while Uvs Lake is a self-contained endorheic system.",
    concept:
      "The Khar-Us–Khar–Airag–Khyargas lake chain that Khyargas Lake belongs to is a classic sample for studying how water quality shifts from fresh to saline down a stepped chain of lakes within an endorheic basin.",
    history:
      "Khyargas Lake and its surroundings have historically been traditional pastureland for nomadic peoples of Uvs Province in western Mongolia.",
  },
  "khar-us-lake": {
    seeing:
      "Khar-Us Lake is a freshwater lake within Mongolia's Great Lakes Depression, covering about 1,578 km² at an elevation of about 1,157 m, and forms the core of Khar Us Nuur National Park.",
    formation:
      "Khar-Us Lake receives its water supply from rivers rising in the Mongol Altai; the abundant, relatively fast-turnover inflow keeps it fresh, making it the best water-quality lake at the top of the Great Lakes Depression's lake chain.",
    observation:
      "From the air, Khar-Us Lake shows a broad open surface with extensive reed marsh and delta wetland — an important stopover site for migratory birds.",
    distinguish:
      "Both Khar-Us Lake and Khyargas Lake belong to the same Great Lakes Depression lake chain, but Khar-Us is the uppermost freshwater lake in the system, while Khyargas is the saline terminal lake downstream.",
    concept:
      "As the uppermost freshwater source of the lake chain, Khar-Us Lake's water volume and quality directly affect the ecological condition of downstream Khar, Airag and Khyargas lakes, making it a key node for studying hydrological linkages in stepped lake systems.",
    // history sources: 面积约 1578 km²、海拔约 1157 m；1999 年列入拉姆萨尔名录；蒙古现共 11 处拉姆萨尔湿地（会增长的计数，下轮复核）—— 原写的「四处之一」过期且从未准确。核实 2026-09-11
    history:
      "In 1999 Khar-Us Lake was inscribed on the Ramsar List of Wetlands of International Importance, one of 11 Ramsar sites Mongolia has as of 2026, and has long provided habitat for migratory birds and fisheries.",
  },
  "khovsgol-lake": {
    // seeing sources: 面积各来源 2620（Britannica 单一来源）/ 2760–2770 km²（多方交叉），写区间；最大水深 267 m、蓄水约占全国淡水七成两项一致。与 uvs-lake「蒙古面积最大的湖（咸水）」口径不同、并读不冲突；与航线解说 ubn-mxv「蒙古最大淡水湖」一致。核实 2026-09-11
    seeing:
      "Lake Khövsgöl is Mongolia's largest freshwater lake, covering between about 2,600 and 2,770 km² depending on the survey with a maximum depth of 267 m, and holds roughly 70% of the country's total freshwater.",
    formation:
      "Lake Khövsgöl is a tectonic rift lake, its basin having subsided along a crustal fault at the southern foot of the East Sayan range; its water is exceptionally clear, making it an important sample for studying the hydrology and water quality of rift lakes.",
    observation:
      "From the air, Lake Khövsgöl's water appears crystal clear to the bottom, ringed by forested mountains with high forest cover, forming a sharp contrast with the desert-steppe landscape of central-southern Mongolia.",
    distinguish:
      "Both Lake Khövsgöl and Uvs Lake are major Mongolian lakes, but Khövsgöl is a freshwater rift lake hydrologically connected to Russia's Lake Baikal, while Uvs Lake is a saline lake within an endorheic basin.",
    concept:
      "Lake Khövsgöl is often compared with Russia's Lake Baikal, both known for exceptional water clarity and hydrologically linked via the Eg River and Selenge — a classic case for studying the connectivity of transboundary lake systems.",
    history:
      "Khövsgöl National Park surrounds the lake, which has long served as a traditional fishing and grazing area for local Tuvan and Darkhad nomadic communities.",
  },
  "terkhiin-tsagaan-lake": {
    // 全六段 sources: 长约 16 km、平均水深 20 m、海拔 2060 m（维基）；宽度维基给 4–10 km，正文「6至10公里」落在区间内。与 khorgo-volcano 的熔岩堰塞成因互相印证。核实 2026-09-11，未改动
    seeing:
      "Terkhiin Tsagaan Lake lies at the northern foot of the Khangai, about 16 km long, 6–10 km wide, with an average depth of 20 m at an elevation of 2,060 m — a freshwater lake dammed by volcanic lava.",
    formation:
      "Several thousand years ago, lava flows from the nearby Khorgo volcano blocked the course of the Terkh River, and water accumulated behind the lava dam to form the lake — a textbook case of a lava-dammed lake.",
    observation:
      "From the air, Terkhiin Tsagaan Lake shows the clear colouring typical of an oligotrophic lake, with dark lava landforms visible along one shore, forming a sharp geological contrast with the lake itself.",
    distinguish:
      "Terkhiin Tsagaan Lake and Khorgo Volcano together form a single volcano-lake landscape complex: the lake is the water body formed by the lava blockage, and the volcano is the lava source that caused it.",
    concept:
      "Terkhiin Tsagaan Lake is a classic sample for studying how volcanic activity reshapes regional drainage patterns by damming river courses with lava.",
    history:
      "The lake and the neighbouring Khorgo volcano are jointly protected as Khorgo-Terkhiin Tsagaan Nuur National Park, an important nature reserve and tourist destination in central Mongolia.",
  },
  "khorgo-volcano": {
    // 全六段 sources: 海拔 2210 m、约 8000 年前停止喷发、火山口直径约 200 m、深 70–80 m（主流口径；另有 500 m 直径的地貌测量值，属方法差异）。核实 2026-09-11，未改动
    seeing:
      "Khorgo is an extinct volcano at 2,210 m elevation that stopped erupting about 8,000 years ago; its crater is about 200 m in diameter and 70–80 m deep, with larch forest covering its northern slope.",
    formation:
      "Khorgo is a Quaternary basaltic volcano at the northern foot of the Khangai; lava flows from its multiple eruptions once blocked the course of the Terkh River, and it is the most representative of the ten volcanoes in this area.",
    observation:
      "From the air, Khorgo shows the classic outline of a volcanic cone with a clearly visible crater, its dark larch forest on the north slope contrasting with the more exposed lava landform to the south.",
    distinguish:
      "Khorgo Volcano and Terkhiin Tsagaan Lake are two parts of the same landscape complex: Khorgo is the source of the lava eruptions, while the lake is the water body formed when that lava blocked the river.",
    concept:
      "Although Khorgo has been extinct for about 8,000 years, its crater and lava-flow landforms remain well preserved, making it an important sample for studying the history of Quaternary basaltic volcanism in central Mongolia.",
    history:
      "Khorgo and its neighbouring lake are jointly protected as a national park; local herders have long held traditional knowledge and oral stories about this volcanic landscape.",
  },
  "khongoryn-els": {
    // 全六段 sources: 又称杜特芒罕，绵延约 100 km、最高沙丘约 300 m（多方一致）。沙丘是会动的量，下轮复核。核实 2026-09-11，未改动
    seeing:
      "Khongoryn Els (also called Duut Mankhan, popularly known as the \"Singing Dunes\") is a dune belt within Gobi Gurvansaikhan National Park, stretching over 100 km with dunes reaching up to about 300 m in height.",
    formation:
      "Khongoryn Els formed as prevailing winds carried fine sand from the surrounding Gobi desert and deposited it against the changing terrain at the southern foot of the Gobi Altai, a textbook example of an aeolian dune landform.",
    observation:
      "From the air, Khongoryn Els appears as a continuous belt of golden, rolling dune ridges, forming a sharp contrast in colour and texture with the grey-brown gravel desert around it.",
    distinguish:
      "Both Khongoryn Els and Bayanzag lie within Gobi Gurvansaikhan National Park, but Khongoryn Els is an aeolian dune landform, while Bayanzag is a red cliff landform shaped by water and wind erosion.",
    concept:
      "Khongoryn Els earned its \"Singing Dunes\" nickname from the engine-like humming sound produced when wind blows across the sand — an acoustic phenomenon that is a classic case for studying the resonance mechanism of dry sand grain friction.",
    history:
      "Khongoryn Els and its surroundings have historically been part of a traditional grazing route for nomadic peoples of the Gobi region, and are today a signature landscape of Mongolia's Gobi tourism.",
  },
  bayanzag: {
    seeing:
      "Bayanzag is a red sandstone erosional cliff in South Gobi Province, known as the \"Flaming Cliffs\" for the flame-like orange-red colour the rock takes on at sunset.",
    formation:
      "Bayanzag's red cliffs are made of Cretaceous-era, river-and-lake-deposited sandstone; long-term wind and water erosion together have carved out today's distinctly layered erosional landform.",
    observation:
      "From the air, Bayanzag's cliffs show a rolling, continuous orange-red landform outline, set off by the sparse saxaul shrub desert vegetation around it.",
    distinguish:
      "Both Bayanzag and Khongoryn Els lie within Gobi Gurvansaikhan National Park, but Bayanzag is a red erosional cliff formed of Cretaceous sedimentary sandstone, while Khongoryn Els is an aeolian dune field.",
    concept:
      "Bayanzag is the site of the first-ever discovery of fossilized dinosaur eggs in the history of paleontology, making it significant for studying Cretaceous dinosaur reproductive behaviour and the ancient environmental history of the Gobi region.",
    // history sources: 恐龙蛋化石发现于 1923-07-13（队员 George Olsen 报告），1922 年是中亚考察（1922–1925）的启动年（AMNH 官方，1 级）。核实 2026-09-11
    history:
      "In 1923 the Central Asiatic Expeditions (under way since 1922), led by Roy Chapman Andrews of the American Museum of Natural History, made the first discovery of dinosaur egg fossils here, establishing Bayanzag as a landmark site in international paleontology.",
  },
  "gurvan-saikhan": {
    // 全六段 sources: 中赛罕山最高峰 2825 m；戈壁古尔班赛罕国家公园约 2.7 万 km²，为蒙古面积最大的国家公园；与航线解说 ubn-dlz 的描述一致。核实 2026-09-11，未改动
    seeing:
      "The Gurvan Saikhan Mountains (\"Three Beauties\") comprise three parallel ranges — Baruun, Dund and Zuun Saikhany Nuruu; their highest peak, in the Dund (Middle) range, reaches 2,825 m, forming the core of Gobi Gurvansaikhan National Park, Mongolia's largest.",
    formation:
      "The three parallel ranges of the Gurvan Saikhan are a product of fault-block uplift within the Gobi desert region; long-term weathering and erosion have left the range relatively gentle in outline, standing in sharp elevation contrast against the open Gobi desert around it.",
    observation:
      "From the air, the Gurvan Saikhan shows three roughly parallel, east-west-trending ridgelines with narrow valleys between them, forming a clear topographic boundary against the desert plain at their base.",
    distinguish:
      "The Gurvan Saikhan, Khongoryn Els and Bayanzag all lie within Gobi Gurvansaikhan National Park, but the Gurvan Saikhan is a mountainous landform of three parallel ranges, while the other two are, respectively, an aeolian dune field and an erosional cliff.",
    concept:
      "As a montane ecological island within the Gobi desert, the Gurvan Saikhan provides habitat for argali, ibex, snow leopard and lammergeier — species adapted to arid mountain environments — making it an important sample for studying biodiversity in desert mountain ecosystems.",
    history:
      "The Gurvan Saikhan region has historically served as traditional summer pastureland for nomadic peoples of southern Mongolia; it is today Mongolia's largest national park and a core destination for Gobi tourism.",
  },
  "yolyn-am": {
    // 全六段 sources: 半永久冰场、现代因气候变化多在 9 月前融化 —— 正文未夸大为「永不融化」；「鹰谷」得名属实。⚠️ 峡谷长度「约8公里」无单一权威来源，见 issue。核实 2026-09-11
    // seeing sources: 峡谷长度没有 1–2 级来源，只删不补。核实 2026-09-12
    seeing:
      "Yolyn Am is a narrow, deep gorge within the Gurvan Saikhan Mountains that holds a semi-permanent ice field year-round, in some years persisting into early summer before melting.",
    formation:
      "Yolyn Am formed as surface water carved deeply along structural fractures in the Gurvan Saikhan massif over a long period; the towering cliffs on either side shade the gorge floor from sunlight year-round, preventing the snow and ice there from fully melting — a rare ice-gorge landscape within the Gobi desert.",
    observation:
      "From the air, Yolyn Am appears as a narrow, deep fissure cut into the mountain; in parts of the year the ice on its floor reflects a distinct band of white light, contrasting sharply with the exposed rock of the surrounding massif.",
    distinguish:
      "Both Yolyn Am and the Orkhon Waterfall are gorge landforms in Mongolia, but Yolyn Am lies within the desert mountains of the Gobi and is known for its rare year-round ice, while the Orkhon Waterfall is a river-fall gorge formed in the Khangai mountains.",
    concept:
      "Yolyn Am's retention of year-round ice deep within the arid Gobi desert is a classic case for studying how terrain shading can locally sustain a microclimate difference in an extremely arid region.",
    history:
      "The gorge takes its name from the lammergeier (\"yol\" in Mongolian) that inhabits it, and is also known as the Valley of the Eagles or Ice Valley; it is one of the signature landscapes of Gobi Gurvansaikhan National Park and has long been a habitat shared by local herders and wildlife.",
  },
  "orkhon-valley": {
    // 全六段 sources: 121,967 ha（UNESCO 官方，正文「约12.2万公顷」一致）；2004 年以「鄂尔浑河谷文化景观」列入；哈拉和林为窝阔台所建、额尔德尼召 16 世纪建立。⚠️ 红线：只写已结束的前现代史。核实 2026-09-11，未改动
    seeing:
      "The Orkhon Valley is a belt of pastureland and archaeological sites covering about 122,000 ha along both banks of the Orkhon River in Övörkhangai Province, including the 13th–14th century Mongol Empire capital of Karakorum.",
    formation:
      "The Orkhon River rises in the Khangai Mountains; long-term erosion and deposition by the river have shaped a broad, flat valley landform, with the fertile alluvial floodplain providing ideal natural conditions for sustained nomadic grazing.",
    observation:
      "From the air, the Orkhon Valley appears as broad green pastureland extending along both sides of the winding river, with the building complexes of Karakorum and Erdene Zuu Monastery dotted within it, standing in sharp contrast to the mountainous terrain of the Khangai foothills around it.",
    distinguish:
      "Both the Orkhon Valley and the Orkhon Waterfall lie within the Orkhon River basin, but the Orkhon Valley is the broad pastureland and historical-site belt of the river's middle course, while the Orkhon Waterfall is a plunging gorge formed where the upper river crosses ancient volcanic rock.",
    concept:
      "The Orkhon Valley is a classic sample for studying how nomadic civilizations built centres of political power on river-valley water and pastureland resources, having historically supported the capitals of three successive empires — Turkic, Uyghur and Mongol.",
    history:
      "The Orkhon Valley was successively the political centre of the Turkic Khaganate, the Uyghur Khaganate and the Mongol Empire; Karakorum was the Mongol Empire capital founded by Ögedei Khan, son of Genghis Khan, while Erdene Zuu, built in the 16th century, was Mongolia's first Tibetan Buddhist monastery. The valley was inscribed on the UNESCO World Heritage List in 2004 as the \"Orkhon Valley Cultural Landscape.\"",
  },
  "orkhon-waterfall": {
    // 全六段 sources: 落差各口径 16 / 20 / 24 / 27 m，正文已写成「16至27米之间」区间；「蒙古境内水量最大的瀑布」经蒙古国家通讯社 Montsame（2 级）确认，**与「最高的瀑布」（Arsai，落差约 70 m 但水量小）是两个口径，正文没有混淆**。核实 2026-09-11，未改动
    seeing:
      "The Orkhon Waterfall (also called Ulaan Tsutgalan) formed where the Orkhon River crosses a layer of ancient volcanic rock at the southern foot of the Khangai; reported heights range from 16 to 27 m across sources, and it is Mongolia's highest-volume waterfall.",
    formation:
      "About 20,000 years ago, a volcanic eruption combined with seismic activity to form a layer of hard basalt at this location; the Orkhon River has since eroded the relatively softer surrounding rock, leaving a step at the hard basalt layer over which the water falls.",
    observation:
      "From the air, the Orkhon Waterfall drops abruptly from the open river-valley grassland into a gorge about 22 m deep, mist rising at the base of the fall, forming a sharp topographic contrast with the gentle, open river course upstream.",
    distinguish:
      "Both the Orkhon Waterfall and the Orkhon Valley lie within the Orkhon River basin, but the Orkhon Waterfall is a plunging gorge formed where the upper river crosses ancient volcanic rock, while the Orkhon Valley is the broad, flat historical pastureland of the river's middle course.",
    concept:
      "The Orkhon Waterfall is one of the few waterfalls in Mongolia formed through the combined action of volcanic rock layers and river erosion, making it a classic case for studying how basalt strata affect a river's headward erosion process.",
    history:
      "The area around the Orkhon Waterfall has historically been a traditional nomadic route for peoples at the southern foot of the Khangai, and is today an important natural landmark within the Orkhon Valley Cultural Landscape.",
  },
  "dariganga-volcanic-field": {
    // 全六段 sources: 逾 200 座渣锥、覆盖约 1.4 万 km²、最高点希林博格德火山 1778 m、火山口直径约 2 km、深逾 300 m（Smithsonian GVP，1 级）；阿拉坦敖包 1913 年为地方神山、2004 年定为国家祭祀山，属传统信仰史实。核实 2026-09-11，未改动
    seeing:
      "The Dariganga Volcanic Field is a Quaternary volcanic field in Sükhbaatar Province, southeastern Mongolia, scattered with over 200 scoria cones and extensive lava flows across an area of about 14,000 km²; its highest point, Shiliin Bogd, reaches 1,778 m.",
    formation:
      "The Dariganga field formed through repeated basaltic eruptions since the Quaternary; each of its more than 200 scoria cones is a small, independent vent, and the basalt lava they erupted has blanketed the surrounding grassland surface.",
    observation:
      "From the air, the Dariganga field appears as a scattering of cone-shaped scoria hills across broad open grassland; Shiliin Bogd's crater, about 2 km in diameter and over 300 m deep, is clearly visible.",
    distinguish:
      "Both the Dariganga Volcanic Field and Khorgo Volcano are Quaternary volcanic landforms in Mongolia, but the Dariganga field consists of more than 200 independent scoria cones spread over a wide area, while Khorgo is a single volcanic cone known for damming a river to form a lake.",
    concept:
      "The dense scattering of over 200 scoria cones across a single stretch of grassland makes the Dariganga field an important sample for studying the eruption pattern and distribution of intraplate basaltic volcanic fields within a continental interior.",
    history:
      "The volcanic field's area has historically been the traditional homeland of the Dariganga Mongol subgroup; Altan Ovoo (Golden Ovoo) within it has been venerated as a local sacred mountain since 1913 and was elevated to a state-worshipped mountain in 2004, while Shiliin Bogd has traditionally been a pilgrimage site for Mongolian men.",
  },
  "selenge-river": {
    // seeing sources: 两条源流为伊德尔河与**德勒格尔河（Delgermörön）**，汇流点在**库苏古尔省特木尔布拉格**（Ider river 条目原文 the confluence with the Delgermörön is in Tömörbulag）—— 原文 seeing 段写成「穆伦河」、formation 段中文写「中戈壁—布尔干省」、英文写「Bulgan Province」，中英两侧给了两个不同且都不对的省份。航线解说 ubn-mxv 本来就写对了「德勒格尔河」。核实 2026-09-11
    seeing:
      "The Selenge River is Mongolia's highest-volume river, formed by the confluence of the Ider and Delgermörön rivers; it flows northeast through Sükhbaatar city before crossing into Russia and eventually draining into Lake Baikal.",
    formation:
      "The Selenge's headwater tributaries rise separately in the Khangai Mountains and the mountains of northern Mongolia; after the two join at Tömörbulag in Khövsgöl Province, the river follows a tectonic depression trending northeast, its long-term erosion and sediment transport shaping a broad valley landform.",
    observation:
      "From the air, the Selenge shows a wide, high-volume channel interweaving with surrounding tributaries into a fan-shaped drainage network, its valley widening and flattening as it approaches the border on its way north-east out of the country.",
    distinguish:
      "Both the Selenge and the Tuul are important river systems in northern Mongolia, but the Selenge is the highest-volume river within Mongolia and the trunk stream that ultimately reaches Russia's Lake Baikal, while the Tuul is an upstream tributary of the Orkhon, itself a tributary of the Selenge.",
    concept:
      "As the largest single source of inflow to Lake Baikal, the Selenge's discharge and water quality directly bear on the ecological balance of the world's largest freshwater lake, making it a key case for studying how transboundary rivers affect downstream lake ecosystems.",
    history:
      "The Selenge valley has historically been an important trade corridor between Mongolia and Russia; Sükhbaatar city, near the Mongolia-Russia border crossing, has developed into an important rail hub in northern Mongolia.",
  },
  "tuul-river": {
    // 全六段 sources: 全长 882.8 km、流域约 49,840 km²（维基）；乌兰巴托 2024 年约 175.15 万人、全国约 347.55 万，占比约 50.4%，正文「全国近半人口」成立。核实 2026-09-11，未改动
    seeing:
      "The Tuul River is 882.8 km long with a drainage area of about 49,840 km²; it rises in the Khentii Mountains and flows southwest through the Mongolian capital Ulaanbaatar before joining the Orkhon River.",
    formation:
      "The Tuul rises at the southern foot of the Khentii Mountains; long-term erosion of the mountain bedrock and downstream sediment transport have formed a relatively broad valley floor around Ulaanbaatar, providing the topographic base for the city's growth.",
    observation:
      "From the air, the Tuul winds through the built-up area of Ulaanbaatar, its riverside greenbelt interwoven with the city's buildings; beyond the city the valley narrows again and the surrounding mountainous terrain reasserts itself.",
    distinguish:
      "Both the Tuul and the Kherlen rise in the Khentii Mountains, but the Tuul flows southwest through the Mongolian capital Ulaanbaatar and ultimately joins the Orkhon system, while the Kherlen flows southeast across Mongolia's eastern steppe and ultimately reaches the Lake Hulun system.",
    concept:
      "As the main water source for Mongolia's most densely populated river valley, the Tuul's basin supplies the Ulaanbaatar metropolitan area — home to nearly half the country's population — making it an important case for studying the relationship between river water resources and rapid urbanization pressure.",
    history:
      "The Tuul valley has been Mongolia's political and cultural centre since the city of Urga (Ulaanbaatar's earlier name) was founded there in the 17th century, the river long providing water for daily life and irrigation as the nomadic settlement transitioned into a fixed city.",
  },
  "kherlen-river": {
    // 全六段 sources: 全长 1254 km，经温都尔汗、乔巴山后进入中国境内并汇入呼伦湖水系（呼伦湖主要入湖水源之一）。⚠️ 红线自查：只陈述水系流向与终点，**未描述边界线**。核实 2026-09-11，未改动
    seeing:
      "The Kherlen River is 1,254 km long, one of the longest rivers in Mongolia; it rises in the Khentii Mountains and flows southeast through Öndörkhaan and Choibalsan before crossing into China's Inner Mongolia.",
    formation:
      "The Kherlen rises at the southeastern foot of the Khentii Mountains and extends a long distance across the relatively gentle terrain of eastern Mongolia; long-term erosion and sediment transport have shaped a narrow, elongated valley plain, making it the principal surface drainage system of Mongolia's eastern steppe belt.",
    observation:
      "From the air, the Kherlen winds through the vast open steppe of eastern Mongolia, its riverside band of green vegetation forming a sharp colour contrast with the surrounding grassland — the most conspicuous surface-water feature across the steppe.",
    distinguish:
      "Both the Kherlen and the Onon rise in the Khentii Mountains, but the Kherlen flows southeast across Mongolia's eastern steppe and ultimately crosses into China to join the Lake Hulun system, while the Onon flows northeast into Russia's Zabaykalsky Krai.",
    concept:
      "As one of the longest rivers within Mongolia, the Kherlen's long course through the eastern steppe makes it a classic sample for studying how rivers in arid and semi-arid steppe regions sustain the distribution of nomadic settlements along their banks.",
    history:
      "The Kherlen valley was an important area of activity before and during the rise of the Mongol Empire; Öndörkhaan on its banks (formerly the seat of the Setsen Khan) is an important historic town in eastern Mongolia.",
  },
  "onon-river": {
    // 全六段 sources: 全长 1032 km、流域约 96,200 km²、源出肯特山、向东北流入俄罗斯外贝加尔边疆区（维基）。达达勒成吉思汗出生地传说属传统史实。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "The Onon River is 1,032 km long with a drainage basin of about 96,200 km²; it rises in the Khentii Mountains and flows northeast into Russia's Zabaykalsky Krai, and the Dadal area on its banks is traditionally held to be the birthplace of Genghis Khan.",
    formation:
      "The Onon rises at the northeastern foot of the Khentii Mountains; long-term erosion of the mountain terrain gives way downstream to a relatively flat forest-steppe transition zone, shaping a classic mountain-to-steppe transitional valley landform.",
    observation:
      "From the air, the upper Onon shows relatively dense forest cover along its banks; further downstream past the Dadal area the valley widens and grassland becomes more prevalent, with the forest-to-steppe transition clearly visible.",
    distinguish:
      "Both the Onon and the Kherlen rise in the Khentii Mountains, but the Onon flows northeast into Russia's Zabaykalsky Krai with denser forest cover upstream, while the Kherlen flows southeast across Mongolia's eastern steppe and ultimately crosses into China.",
    concept:
      "The transition zone between the upper Onon's Khentii forest and the lower Onon's Dadal grassland is a classic sample for studying how forest-steppe ecosystems in northern Mongolia change along a river gradient.",
    history:
      "The Dadal area on the Onon's banks is traditionally held to be the birthplace of Genghis Khan, giving the region a special place in Mongolian history and traditional belief; the sacred Khentii peak of Burkhan Khaldun also lies within the Onon's upper basin.",
  },
  "eastern-steppe": {
    // 全六段 sources: 达乌尔草原生态区逾 100 万 km²；可见世界 13 种鹤中的 6 种（白枕鹤、蓑羽鹤、灰鹤、丹顶鹤繁殖，白鹤、白头鹤过境）；蒙古达乌尔严格保护区 1992 年设立；「达乌里亚景观」2017-07-07 作为蒙俄跨境系列遗产列入 UNESCO（whc.unesco.org/en/list/1448，1 级）。跨境表述未涉中国、未描述边界。核实 2026-09-11，未改动
    seeing:
      "The Eastern Steppe is the Mongolian portion of the Daurian steppe ecosystem, which as a whole covers over 1 million km² spanning eastern Mongolia, Siberian Russia and northeastern China.",
    formation:
      "The Eastern Steppe lies in a relatively low-lying transitional zone in eastern Mongolia; under a semi-arid, deep-continental climate, herbaceous vegetation has long dominated, producing an extensive, continuous temperate steppe ecosystem.",
    observation:
      "From the air, the Eastern Steppe appears as boundless open grassland with gently undulating terrain, scattered wetlands and seasonal lakes, forming a sharp contrast with the mountainous and desert landforms of central and western Mongolia.",
    distinguish:
      "Both the Eastern Steppe and Mongolia's Gobi are large expanses of open terrain in Mongolia, but the Eastern Steppe is dominated by temperate herbaceous vegetation under relatively better precipitation, while the Gobi is an extremely arid gravel desert.",
    concept:
      "The Eastern Steppe preserves one of the most intact large-scale grassland ecosystems remaining on Earth, making it an important sample for studying the relationship between temperate steppe ecosystems and the migration patterns of large ungulates; as many as six crane species can be seen there.",
    history:
      "The Mongol Daguur Strictly Protected Area was established in 1992, and in 2017 the transboundary \"Landscapes of Dauria\" (shared with Russia) was inscribed on the UNESCO World Heritage List; historically this steppe has long served as traditional pastureland for nomadic peoples of eastern Mongolia.",
  },
  "khustain-nuruu": {
    // 全六段 sources: 呼斯泰国家公园 1993 年设立、面积约 50,600 ha（官方网站，1 级；另有个别来源误传 90,000 ha）、距乌兰巴托约 90–100 km；1993 年荷兰普氏野马基金会启动野放，现蒙古三处保护区逾 800 匹野放个体。核实 2026-09-11，未改动
    seeing:
      "Khustain Nuruu is a range of rolling hills in Töv Province, about 100 km from Ulaanbaatar; Khustain Nuruu National Park was established here in 1993, covering about 50,600 ha.",
    formation:
      "Khustain Nuruu belongs to the relatively gentle hill terrain of central Mongolia, its surface a mix of rolling steppe and rocky outcrops, with birch and aspen forest growing along its river valleys — a classic forest-steppe transitional hill landform.",
    observation:
      "From the air, Khustain Nuruu appears as rolling grassland hills, patches of deciduous forest dotting the valleys, forming a clearly layered vegetation pattern against the open hill-steppe around it.",
    distinguish:
      "Both Khustain Nuruu and the Khentii Mountains lie within central Mongolia's forest-steppe transition zone, but Khustain Nuruu is low, gentle hill terrain known for the reintroduction of the Przewalski's horse, while the Khentii is a full mountain range at higher elevation.",
    concept:
      "Khustain Nuruu National Park is one of the world's most successful cases of reintroducing the Przewalski's horse (takhi) to the wild, making it a classic sample for studying the long-term outcomes of endangered-species rewilding programmes.",
    history:
      "In 1993 the Dutch Przewalski's Horse Foundation and the Mongolian Association for Conservation of Nature and Environment launched a reintroduction project, returning takhi — previously surviving only in captive populations — to Khustain Nuruu; today more than 800 free-ranging individuals live across three protected areas in Mongolia.",
  },
  "tsagaan-suvarga": {
    // 全六段 sources: 崖壁高各来源 30–60 m（另有 200 m 离群值），正文「逾60米」取区间上限；长约 400 m；古海洋沉积、富含海洋化石。核实 2026-09-11，未改动
    seeing:
      "Tsagaan Suvarga (the \"White Stupa\") is a limestone-and-clay erosional cliff in Ulziit District, Dundgovi Province, over 60 m tall at its highest point and extending about 400 m in length.",
    formation:
      "The area around Tsagaan Suvarga was once an ancient marine sedimentary environment, its long deposition producing layered strata; subsequent wind erosion together with occasional rainfall-driven water erosion has carved out today's distinctly layered cliff landform.",
    observation:
      "From the air, Tsagaan Suvarga's cliff face shows layered bands of white, orange and rust colouring, forming an abrupt vertical contrast against the open, flat Gobi desert surface around it.",
    distinguish:
      "Both Tsagaan Suvarga and Bayanzag are erosional cliff landforms in Mongolia's Gobi region, but Tsagaan Suvarga is known for its layered limestone-and-clay strata and multicoloured bands, while Bayanzag is a red sandstone cliff known for its dinosaur fossil discoveries.",
    concept:
      "The layered sedimentary record preserved in Tsagaan Suvarga's cliff face documents the area's history as an ancient seabed environment, making it a classic sample for studying the evolution of the Gobi region's ancient environment and the erosion of sedimentary rock strata.",
    history:
      "Dundgovi Province, where Tsagaan Suvarga is located, has historically been part of a traditional route for nomadic peoples crossing the desert region, and the site is today an important geological tourism landmark in Mongolia's Gobi.",
  },
};
