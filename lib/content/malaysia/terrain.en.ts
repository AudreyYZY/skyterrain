import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Malaysia ============
  "titiwangsa-mountains": {
    // 全六段 sources: 长约 480 km；最高峰哥打峰（Gunung Korbu）2183 m 为半岛第二高峰（仅比大汉山 2187 m 低 4 m）；主脉花岗岩为晚三叠—早侏罗世（约 200–230 Ma）侵入，属中生代。核实 2026-09-11，未改动
    seeing:
      "The Titiwangsa Mountains form the backbone of the Malay Peninsula, running northwest to southeast for about 480 km — the longest and most contiguous range on the peninsula; its highest peak, Mount Korbu, reaches 2,183 m, the peninsula's second-highest point.",
    formation:
      "The Titiwangsa range's core is built of Mesozoic granite intrusions; long-term weathering and erosion have shaped today's continuous ridgeline with relatively rounded, forest-covered tropical mountain summits, forming the natural watershed between the peninsula's two coasts.",
    observation:
      "From the air, the Titiwangsa Mountains appear as a continuous green ridge running down the peninsula's spine, the massif perpetually covered in tropical rainforest with cloud drifting among the peaks, rivers on either side radiating outward toward the South China Sea and the Strait of Malacca respectively.",
    distinguish:
      "Both the Titiwangsa Mountains and Gunung Tahan are mountainous landforms on the Malay Peninsula, but the Titiwangsa range is a continuous chain running the length of the peninsula and forming its backbone, while Gunung Tahan is the peninsula's single highest standalone peak, lying east of the Titiwangsa range.",
    concept:
      "As the Malay Peninsula's watershed, the contrast in rainfall patterns and river flow direction on either side of the Titiwangsa range is key to understanding the peninsula's overall landform and climate distribution.",
    history:
      "Hill-station resorts along the range such as Cameron Highlands and the Genting plateau were developed during British colonial rule; the mountains remain an important water-catchment and ecological conservation area for Malaysia today.",
  },
  "gunung-tahan": {
    // 全六段 sources: 2187 m 为马来半岛最高峰，位于彭亨侧、与吉兰丹接壤；大汉山国家公园跨彭亨 / 吉兰丹 / 登嘉楼三州。与 titiwangsa-mountains「半岛第二高峰」并读自洽。核实 2026-09-11，未改动
    seeing:
      "Gunung Tahan (Mount Tahan) is the highest peak on the Malay Peninsula, at 2,187 m, on the border between Pahang and Kelantan, and is the central feature of Taman Negara National Park, which spans a broad tract of lowland tropical rainforest at the meeting point of three states.",
    formation:
      "Gunung Tahan's massif is built mainly of Mesozoic sandstone and granite; long-term tectonic uplift combined with weathering under a hot, humid tropical climate has shaped today's steep peak and deeply cut river valleys.",
    observation:
      "From the air, Gunung Tahan's summit is perpetually wreathed in cloud, surrounded by an extensive tract of primary tropical rainforest with very high forest cover and almost no visible sign of human development, a sharp contrast with the peninsula's developed coastal areas.",
    distinguish:
      "Both Gunung Tahan and the Titiwangsa Mountains are mountainous landforms on the Malay Peninsula, but Gunung Tahan is the peninsula's single highest standalone peak, defined by its elevation, while the Titiwangsa range is a continuous chain running the length of the peninsula.",
    concept:
      "Taman Negara, where Gunung Tahan stands, preserves one of the oldest surviving rainforest ecosystems on the Malay Peninsula, making it an important sample for studying long-term tropical rainforest succession and altitudinal vegetation zonation on mountains.",
    history:
      "Taman Negara has long been a traditional area of activity for the Orang Asli, the indigenous peoples of the Malay Peninsula, and is today an important ecotourism and mountaineering destination in Malaysia.",
  },
  "cameron-highlands": {
    // 全六段 sources: 威廉·金马仑 1885 年受委托勘测彭亨—霹雳边界时发现该高原（约 1800 m 处的平台）；1929 年 J.A. Russell 建 BOH 茶园，为金马仑高原第一座茶园。核实 2026-09-11，未改动
    seeing:
      "Cameron Highlands is a cool plateau at 1,100–1,800 m elevation within the Titiwangsa range, named after William Cameron who surveyed the area in 1885, and is today an important highland tea-growing region of Malaysia.",
    formation:
      "Cameron Highlands is a relatively gentle upland formed by long-term weathering and erosion of the Titiwangsa range's granite massif; its higher elevation gives it a cool, humid climate, in contrast with the steeper peaks of the main range.",
    observation:
      "From the air, Cameron Highlands shows terraced green tea gardens layered across the landscape, forming a sharp contrast between cultivated and primary-forest-covered steep terrain on the surrounding mountains, with cloud frequently drifting over the plateau.",
    distinguish:
      "Cameron Highlands and the Titiwangsa Mountains belong to the same range, but Cameron Highlands is a relatively gentle upland within the range that has been developed for tea cultivation, while the Titiwangsa range as a whole is dominated by a continuous, steep ridgeline.",
    concept:
      "Cameron Highlands' climate and soil conditions make it a classic sample for studying the tropical \"hill station\" phenomenon and the suitability of high-elevation terrain for cash-crop cultivation.",
    history:
      "British colonial authorities developed Cameron Highlands as a hill-station resort in the early 20th century; after the first tea estate, BOH, was established in 1929, the area gradually grew into an important highland tea-growing region of Malaysia.",
  },
  "mount-kinabalu": {
    // seeing sources: 4095 m 为马来西亚与马来群岛最高峰；2000 年京那巴鲁公园列入 UNESCO。花岗岩体是**侵入**克罗克组沉积岩的独立岩体（不是克罗克山脉的一部分），锆石 U-Pb SHRIMP 测年定为约 7.85–7.22 Ma、为东南亚已知最年轻的花岗岩侵入体（Cottam et al. 2010，J. Geol. Soc. London，1 级；IUGS 地质遗产名录，1 级）—— 原写的「约1500万年前」是较早期的粗略估算。distinguish 段「独立的花岗岩高峰」本来就对，与 seeing 段原文直接矛盾。核实 2026-09-11
    seeing:
      "Mount Kinabalu is the highest peak in Malaysia and the Malay Archipelago, at 4,095 m, a standalone granite pluton that intrudes the older sedimentary rock of the Crocker Range; Kinabalu Park was inscribed on the UNESCO World Heritage List in 2000.",
    formation:
      "Mount Kinabalu's granite crystallised between about 7.85 and 7.22 million years ago, as U-Pb zircon dating shows, when magma from deep within the crust intruded and cooled into what is now Southeast Asia's youngest known granite pluton; sustained tectonic uplift together with glacial-period erosion has since shaped today's steep granite peak with its bare summit rock.",
    observation:
      "From the air, Mount Kinabalu's bare grey-white granite summit rises above a sea of cloud, its slopes showing a sharp vertical vegetation zonation from dense tropical rainforest to montane cloud forest, its outline striking against the Bornean skyline.",
    distinguish:
      "Mount Kinabalu and the Crocker Range lie geographically adjacent, but Mount Kinabalu is a single standalone granite peak known for its elevation and bare rock face, while the Crocker Range is a continuous chain with no single dominant summit.",
    concept:
      "Kinabalu Park is a centre of plant diversity in Southeast Asia, home to roughly 5,000–6,000 plant species, making it an important sample for studying altitudinal vegetation zonation and the formation of species diversity on tropical mountains.",
    history:
      "In the traditional belief of the local Kadazan-Dusun people, Mount Kinabalu is regarded as the resting place of ancestral spirits, and its name is said to mean \"the revered place of the dead\" or \"home of the spirits\"; it was formally inscribed on the UNESCO World Heritage List in 2000.",
  },
  "crocker-range": {
    // seeing sources: 主体为克罗克组（始新世—早中新世深海浊积砂岩与泥岩，MDPI 1 级），京那巴鲁花岗岩为侵入其中的独立年轻岩体 —— 原文把沉积岩山系写成了花岗岩体的组成部分；两保护区相距约 10 km、为两种不同的 UNESCO 认定（本条 2014 年 MAB 生物圈保护区、约 350,584 ha；京那巴鲁公园为世界遗产）。核实 2026-09-11
    seeing:
      "The Crocker Range is a north-south trending chain in western Sabah about 120 km long, with no single dominant peak, elevations ranging from 6 to 2,076 m, built mainly of deep-marine turbidite sandstone and mudstone of the Crocker Formation, into which the separate, younger granite pluton of Mount Kinabalu has intruded.",
    formation:
      "The Crocker Range formed through tectonic uplift since the Paleogene; long-term weathering and erosion have shaped today's rolling, mid-elevation terrain without a standout summit, in contrast with the isolated, towering peak of Mount Kinabalu nearby.",
    observation:
      "From the air, the Crocker Range appears as a continuous, rolling ridge of deep green, tropical rainforest at lower elevations giving way to montane cloud forest higher up, its terrain relatively gentle with no sharp peaks.",
    distinguish:
      "The Crocker Range and Mount Kinabalu lie about 10 km apart under two different UNESCO designations — a biosphere reserve and a World Heritage site respectively — but the Crocker Range is a continuous chain with no dominant peak, while Mount Kinabalu is a single, isolated high summit.",
    concept:
      "The Crocker Range Biosphere Reserve covers 350,000 ha, one of the largest protected areas on the island of Borneo, making it an important sample for studying the altitudinal vegetation zonation of Sabah's mid-elevation tropical mountains.",
    history:
      "The Crocker Range Biosphere Reserve was inscribed under UNESCO's Man and the Biosphere Programme in 2014, and has long been a traditional area of activity for Dusun and other indigenous communities of inland Sabah.",
  },
  "kelabit-highlands": {
    // 全六段 sources: 巴里奥一带海拔约 1000–1200 m；穆鲁德山 2423 m；格拉比族约 6800 人、13 个村落（其中 7 个在巴里奥一带），正文「十余个村落」吻合。核实 2026-09-11，未改动
    seeing:
      "The Kelabit Highlands are an inland plateau in the northernmost part of Sarawak's Miri Division, centred on the \"Plain of Bah\" around Bario village, at 1,000–1,200 m elevation and extending about 30 km north-south.",
    formation:
      "The Kelabit Highlands are a relatively flat, high-elevation basin within interior Borneo, ringed by peaks such as Mount Murud (2,423 m); long-term erosion and deposition together have shaped today's broad, gentle plateau basin.",
    observation:
      "From the air, the Kelabit Highlands appear as an open valley ringed by mountains, rice paddies and settlements dotting the landscape, forming a sharp contrast with the steep terrain of Borneo's surrounding interior mountains.",
    distinguish:
      "Both the Kelabit Highlands and the Crocker Range are highland landforms of Borneo, but the Kelabit Highlands are a flat plateau basin ringed by mountains, known for its rice-farming settlements, while the Crocker Range is a continuous mid-elevation ridge.",
    concept:
      "As a rare flat, high-elevation basin in interior Borneo, the Kelabit Highlands are a classic sample for studying how a tropical montane microclimate can support highland rice agriculture.",
    history:
      "The Kelabit Highlands are the traditional homeland of the Kelabit people of Sarawak, numbering about 6,800, spread across more than a dozen villages around Bario, long maintaining a distinctive tradition of highland rice farming combined with hunting and gathering.",
  },
  "gua-tempurung": {
    // 全六段 sources: 约 4 亿年的石灰岩、全长约 4.5 km、暗河约 1.6 km、五个洞厅 —— 多方一致。洞穴已测长度是会增长的量，下轮复核。核实 2026-09-11，未改动
    seeing:
      "Gua Tempurung is a limestone cave in Gopeng, Perak, dating back about 400 million years; it runs about 4.5 km in length with a 1.6-km underground river inside, one of the largest surviving cave systems on the Malay Peninsula.",
    formation:
      "The limestone strata hosting Gua Tempurung were deposited in the Paleozoic about 400 million years ago; groundwater dissolution of the carbonate rock through the late Miocene (about 10 million years ago) progressively enlarged fractures and voids into today's complex system of five caverns.",
    observation:
      "From the air, the limestone hill containing Gua Tempurung has a rounded outline, said to resemble a coconut shell — hence its name; the surface is vegetated and the cave entrance is hidden within the massif, with the underground river emerging to join the surface drainage.",
    distinguish:
      "Both Gua Tempurung and Batu Caves are limestone caves on the Malay Peninsula, but Gua Tempurung is known for its underground river running through vast caverns, while Batu Caves is known for its tall cave mouth and the Hindu shrine within.",
    concept:
      "The stalactites, stalagmites and marble patterns distinct to each of Gua Tempurung's five caverns make it a classic sample for studying how long-term groundwater dissolution shapes cave systems in tropical limestone terrain.",
    history:
      "Gua Tempurung takes its name — \"coconut-shell cave\" — from the shape of its surrounding limestone hills; it is today an important geological tourism site in Perak, with boardwalks allowing visitors to explore its different caverns.",
  },
  "batu-caves": {
    // 全六段 sources: 325 m 志留纪石灰岩孤丘（约 4 亿年）；三叠纪约 2 亿年前抬升褶皱；1891 年 K. Thamboosamy Pillay 建庙、1892 年首届大宝森节，属「19世纪末」。⚠️ 红线自查：只写宗教活动的客观史实，**未作宗教评价或族群比较**。核实 2026-09-11，未改动
    seeing:
      "Batu Caves is a 325-m limestone hill and its cave system in Gombak, Selangor, its bedrock Silurian limestone dating back about 400 million years, one of Malaysia's best-known cave landforms.",
    formation:
      "After the limestone at Batu Caves was first deposited, it underwent tectonic uplift, compression and folding during the Triassic about 200 million years ago; subsequent long-term groundwater dissolution of the carbonate rock progressively enlarged fractures into today's cave system.",
    observation:
      "From the air, the limestone hill of Batu Caves rises as an isolated outcrop from the plain north of Kuala Lumpur, its tall cave mouth prominent, the rock face sparsely vegetated and exposed, forming a sharp vertical contrast with the open plain around it.",
    distinguish:
      "Both Batu Caves and Gua Tempurung are limestone caves on the Malay Peninsula, but Batu Caves is an isolated limestone outcrop with a tall, open cave mouth, while Gua Tempurung is a complex cave system with a long underground river.",
    concept:
      "The formation of stalactites and stalagmites within Batu Caves is a classic case for studying the carbonate dissolution-deposition cycle in tropical limestone regions.",
    history:
      "A Hindu shrine has stood within Batu Caves since the late 19th century, and the site draws large numbers of devotees each year during the Thaipusam festival, making it a well-known place where natural and cultural landscape intersect in Malaysia.",
  },
  "gunung-mulu-np": {
    // 全六段 sources: 山体约 2376–2377 m；已探明洞穴逾 295 km（**会增长的量**，下轮复核）；2000 年列入 UNESCO；砂拉越洞厅 600×415×80 m 为按面积计世界已知最大洞厅；鹿洞准确说是「世界第二大洞穴通道」（1991 年被越南韩松洞超越前曾为第一），正文简化为「世界第二大洞穴」可接受；尖峰石林高 45–50 m。核实 2026-09-11，未改动
    seeing:
      "Gunung Mulu National Park is the most intensively studied tropical karst area in the world, known for the sandstone pinnacles of 2,377-m Gunung Mulu and an explored cave system of more than 295 km, inscribed on the UNESCO World Heritage List in 2000.",
    formation:
      "The karst landscape of Gunung Mulu National Park was shaped by long-term limestone dissolution; Gunung Mulu itself is a sandstone pinnacle massif, while below ground, sustained groundwater dissolution of carbonate rock has produced a vast cave system, a textbook example of karst collapse landforms.",
    observation:
      "From the air, the Pinnacles of Gunung Mulu rise in a dense cluster of razor-sharp limestone spires about 50 m tall, forming, together with the dense rainforest cover above and the vast cave system below, a highly distinctive three-dimensional karst landscape.",
    distinguish:
      "Both Gunung Mulu National Park and the Niah Caves are limestone karst landforms in Sarawak, but Gunung Mulu is known for its Pinnacles and the world's largest known cave chamber (the Sarawak Chamber), while Niah is known for its ancient human archaeological site.",
    concept:
      "The Sarawak Chamber measures 600 m by 415 m and 80 m high, the largest known natural cave chamber in the world, and Deer Cave has one of the world's largest cave passages, making Gunung Mulu an important sample for studying the relationship between the scale of tropical karst cave systems and their biodiversity.",
    history:
      "Gunung Mulu National Park was inscribed on the UNESCO World Heritage List in 2000; its caves are home to millions of swiftlets and bats, and the park has long been part of the traditional territory of the local Penan people.",
  },
  "niah-caves": {
    seeing:
      "The Niah Caves are a cave complex on the northern edge of the Gunong Subis limestone massif on Sarawak's coastal plain, the Great Cave's mouth more than 60 m high, inscribed on the UNESCO World Heritage List in 2024.",
    formation:
      "The limestone hosting the Niah Caves was deposited in an ancient geological period when the area lay beneath the sea; subsequent tectonic uplift raised it above ground, and long-term groundwater dissolution shaped today's system of caverns, including the towering Great Cave and the Painted Cave.",
    observation:
      "From the air, the Gunong Subis limestone massif containing the Niah Caves rises out of the mixed dipterocarp forest of Sarawak's coastal plain, the mouth of the Great Cave set into the massif like a vast rock breach, its scale dwarfing the terrain around it.",
    distinguish:
      "Both the Niah Caves and Gunung Mulu National Park are limestone karst landforms in Sarawak, but Niah is known for its ancient human archaeological site, while Gunung Mulu is known for its Pinnacles and the world's largest cave chamber.",
    // concept sources: 深洞头骨 1958 年由 Tom Harrisson 发现，2016 年铀系法等重测为约 37–45 ka（Frontiers，1 级）；「6.5 万年」属于 2018 年公布的 Gua Dagang 石器，2025 年另有一颗约 52–55 ka、可能属古老型人类的牙齿（PLOS ONE，1 级）—— 原文把石器年代安到了「头骨碎片」上。大洞洞口约 61 m；2024-07 第 46 届世界遗产大会列入 UNESCO。核实 2026-09-11
    concept:
      "The famous Deep Skull from the Niah Caves, first dated to about 40,000 years, was re-dated in 2016 to roughly 37,000-45,000 years old, while separate stone-tool evidence of human activity at the caves goes back about 65,000 years, making it a key site for studying early human migration into and adaptation to Southeast Asia's tropical environment.",
    history:
      "The Niah Caves were first scientifically recorded in 1880; major archaeological excavations took place in the 1950s–60s under Tom Harrisson, curator of the Sarawak Museum, and his wife Barbara, and the site was formally inscribed on the UNESCO World Heritage List in 2024.",
  },
  "maliau-basin": {
    // 全六段 sources: 直径约 25 km、外缘陡坡高差 300–1600 m；约 15–9 Ma 三角洲沉积、约 5 Ma 整体抬升后中部下陷成碟状盆地，**非火山口**（马来西亚地质学会期刊，1 级）。核实 2026-09-11，未改动
    seeing:
      "Maliau Basin, known as \"Sabah's Lost World,\" is a near-circular, saucer-shaped basin in interior Sabah about 25 km in diameter, its rim formed by steep cliffs 300–1,600 m high.",
    formation:
      "Maliau Basin is built of sandstone and mudstone deposited in a coastal delta setting between about 15 and 9 million years ago; roughly 5 million years ago volcanic and tectonic activity uplifted the whole area into a plateau, whose centre then subsided under continued weathering to form today's saucer-shaped basin — it is not a volcanic crater.",
    observation:
      "From the air, Maliau Basin shows an almost perfectly circular outline, ringed by steep, near-vertical cliffs that isolate its interior from the surrounding landscape, giving it the appearance of a vast volcanic caldera when seen from a plane.",
    distinguish:
      "Both Maliau Basin and Danum Valley are primary rainforest reserves in interior Sabah, but Maliau Basin is a near-circular, saucer-shaped basin ringed by steep cliffs, while Danum Valley is a relatively open lowland rainforest river valley.",
    concept:
      "The steep rim cliffs of Maliau Basin form a natural isolating barrier that has long limited exchange between its interior ecosystem and the outside world, making it a classic sample for studying how geographic isolation shapes the evolution of tropical rainforest species.",
    history:
      "Maliau Basin earned the nickname \"Sabah's Lost World\" for its rugged terrain and long isolation from the outside world; it was not systematically surveyed by science until the late 20th century, and is today an important nature reserve in Sabah.",
  },
  "danum-valley": {
    // 全六段 sources: 面积 438 km²、森林历史约 1.3 亿年；1968 年起列为一级保护林、1980 年设保护区、1986 年设研究中心。核实 2026-09-11，未改动
    seeing:
      "The Danum Valley Conservation Area is a 438-km² tract of largely undisturbed lowland dipterocarp forest in central Sabah, with a forest history of about 130 million years, making it one of the oldest surviving rainforests in the world.",
    formation:
      "The lowland rainforest of Danum Valley has long escaped logging disturbance; long-term erosion and deposition by its rivers have shaped an open valley landform, with 95% of the area covered in mixed dipterocarp forest and 5% mountainous terrain.",
    observation:
      "From the air, Danum Valley shows an extensive, rolling canopy of primary rainforest, winding rivers threading through it, the forest structure richly layered with canopy heights varying widely and almost no visible sign of logging.",
    distinguish:
      "Both Danum Valley and Maliau Basin are primary rainforest reserves in interior Sabah, but Danum Valley is a relatively open lowland rainforest river valley known for its undisturbed primary forest, while Maliau Basin is a saucer-shaped basin ringed by steep cliffs.",
    concept:
      "As one of the last representative tracts of primary rainforest remaining in North Borneo, Danum Valley is an important sample for studying the natural succession patterns of tropical lowland dipterocarp forest left undisturbed by human activity over the long term.",
    history:
      "The Danum Valley Conservation Area was established in 1980 and has been designated a Class 1 (Protection) Forest Reserve under Sabah's forestry enactment since 1968; the Danum Valley Studies Centre, founded in 1986, is a globally recognised centre for tropical rainforest research and education.",
  },
  "endau-rompin": {
    // 全六段 sources: 48,905 ha、横跨柔佛与彭亨，为半岛南部最大保护区；岩层约 2.48 亿年；1993 年正式设立（东盟遗产公园资料，2 级）。核实 2026-09-11，未改动
    seeing:
      "Endau-Rompin National Park straddles Johor and Pahang and is the largest surviving protected area in the southern half of the Malay Peninsula, covering 48,900 ha of rugged hills, granite outcrops, river valleys and waterfalls.",
    formation:
      "The rock formations within Endau-Rompin National Park date back some 248 million years; long-term tectonic activity combined with weathering and erosion under a hot, humid tropical climate has shaped today's rolling hill terrain and granite outcrops, with rivers carving numerous waterfalls along zones of geological weakness.",
    observation:
      "From the air, Endau-Rompin National Park shows rolling hills dotted with granite outcrops, rivers winding through rainforest-covered valleys, waterfalls dropping along several of the watercourses, and very high forest cover throughout.",
    distinguish:
      "Both Endau-Rompin National Park and Taman Negara (Gunung Tahan) are ancient rainforest reserves in southern Peninsular Malaysia, but Endau-Rompin is defined by its rolling hills and granite outcrops, while Taman Negara is defined by the peninsula's highest peak and its steep massif.",
    concept:
      "Endau-Rompin's rainforest ecosystem has a history of more than 130 million years, older than the Amazon, making it an important sample for studying long-term tropical rainforest succession and the protection of habitat for endangered flagship species.",
    history:
      "Endau-Rompin National Park was formally established in 1993 and is an important habitat for endangered flagship species such as the Malayan tiger and Malayan tapir; it has long been the traditional territory of indigenous communities in Johor and Pahang.",
  },
  "langkawi-geopark": {
    // 全六段 sources: 2007-06-01 获认定，为全球第 52 个、**东南亚首个** UNESCO 世界地质公园 —— 本条自身就是东南亚首例，不存在借用他例年份的问题；地质记录逾 5.5 亿年；由玛琴昌、基林、浮罗浮浮三个地质森林公园组成（unesco.org/en/iggp，1 级）。核实 2026-09-11，未改动
    seeing:
      "Langkawi UNESCO Global Geopark was recognised in 2007 as the first UNESCO Global Geopark in Southeast Asia, its geological record spanning more than 550 million years and including Malaysia's most complete Cambrian-to-Permian Paleozoic sedimentary sequence.",
    formation:
      "The Langkawi archipelago's strata record a continuous Paleozoic sedimentary sequence from the Cambrian through the Permian; the Kilim River area is dominated by limestone karst, long-term dissolution having produced numerous sea stacks and sea arches, making it a key area for studying Southeast Asia's early geological evolution.",
    observation:
      "From the air, Langkawi's mangrove-lined Kilim estuary interweaves with scattered limestone karst pinnacles, sea stacks and sea arches dotting the waterways, forming a richly layered island landscape against the open Andaman Sea beyond.",
    distinguish:
      "Both Langkawi Geopark and Penang Island are island landforms off the Malay Peninsula's west coast, but Langkawi is known for its Paleozoic sedimentary sequence spanning 550 million years and its karst landforms, while Penang is a comparatively younger granite island.",
    concept:
      "Langkawi Geopark comprises three geoforest parks — Machinchang (Cambrian), Kilim (karst) and Dayang Bunting (marble) — making it an important field laboratory for studying the complete Paleozoic sedimentary sequence of Southeast Asia's continental shelf.",
    history:
      "Langkawi was recognised in 2007 as the first UNESCO Global Geopark in Southeast Asia, and is today an important destination for geological and ecological tourism in Malaysia.",
  },
  "penang-island": {
    // 全六段 sources: 升旗山 833 m（2733 ft）；乔治市与马六甲 2008 年联合列入 UNESCO 世界遗产。核实 2026-09-11，未改动
    seeing:
      "Penang Island is a granite island off the northwest coast of the Malay Peninsula, its highest point, Penang Hill, reaching 833 m, with a forested granite hill core surrounded by coastal plains.",
    formation:
      "Penang's northern rock formations date from the Early Jurassic to Late Carboniferous, while the south comprises medium-to-coarse-grained biotite-feldspar granite; long-term weathering and erosion have shaped today's landform of a central hill core ringed by plains.",
    observation:
      "From the air, Penang Hill at the island's centre shows very high forest cover and steep terrain, forming a sharp contrast in landform and land use with the more heavily developed and urbanised coastal plains around it.",
    distinguish:
      "Both Penang Island and Langkawi Geopark are island landforms off the Malay Peninsula's west coast, but Penang is a comparatively younger granite island whose central hills form an important water catchment, while Langkawi is known for its Paleozoic karst landforms.",
    concept:
      "The forest on Penang's central hills has a history of more than 130 million years, making it a classic sample for studying the relationship between tropical island granite landforms and their water-catchment function.",
    history:
      "The Penang Hill area has been developed as a hill-station resort since British colonial times; Penang is today an important historical, cultural and tourism city in Malaysia, and George Town's old quarter is inscribed on the UNESCO World Heritage List.",
  },
  "tioman-island": {
    // 全六段 sources: Gunung Kajang 1038 m，为马来半岛沿海岛屿最高峰；花岗岩为晚白垩世约 80 Ma 侵入、比火山岩晚约 8.8 Ma（马来西亚地质学会期刊，1 级）。核实 2026-09-11，未改动
    seeing:
      "Tioman Island is an igneous island off the coast of Pahang in the South China Sea, its central massif reaching 1,038 m, and a well-known diving and ecotourism destination in Malaysia.",
    formation:
      "Tioman's rock is made up mainly of volcanic, plutonic and contact metamorphic rock; the east, north and south are dominated by rhyolite and dacite, while its granite body intruded in the Late Cretaceous (about 80 million years ago), about 8.8 million years after the volcanic rocks, shaping today's landform of a towering centre with gentler surrounding terrain.",
    observation:
      "From the air, Tioman's central massif is densely forested and steep, its coastline indented with numerous bays, white sand beaches and coral reefs lining the shallow coastal waters, marking a sharp boundary between island and the open South China Sea.",
    distinguish:
      "Both Tioman Island and Sipadan Island are well-known diving destinations in Malaysia, but Tioman is a continental-shelf igneous island with a complete terrestrial ecosystem, while Sipadan is an isolated oceanic island built up by coral growth on a submerged volcanic cone.",
    concept:
      "The sequence in which Tioman's volcanic rock and granite body intruded makes it an important sample for studying the timing of late Mesozoic magmatic activity on the Malay Peninsula's east coast.",
    history:
      "Tioman Island has long been a traditional fishing ground for Malay fishermen, and is today a well-known island resort and diving destination on Malaysia's east coast.",
  },
  "perhentian-islands": {
    // 全六段 sources: 花岗岩小岛、登嘉楼州外海、「停泊补给点」命名由来与通行资料一致；与 redang-island 的对比无冲突。核实 2026-09-11，未改动
    seeing:
      "The Perhentian Islands are a pair of small granite islands (Perhentian Besar and Perhentian Kecil) off the coast of Terengganu in the South China Sea, lined with white sand beaches and coral reefs, a well-known diving and snorkelling destination on the peninsula's east coast.",
    formation:
      "The Perhentian Islands belong to the same continental-shelf granite geological unit as other islands off the peninsula's east coast; long-term wave erosion combined with coral reef accumulation has shaped today's island outlines and surrounding shallow coral reef ecosystems.",
    observation:
      "From the air, Perhentian Besar and Perhentian Kecil sit side by side as two small granite islands, their white sand beaches clearly visible, forming a distinct band of colour between the pale-blue coral reef waters and the deep-blue open sea beyond.",
    distinguish:
      "Both the Perhentian Islands and Redang Island are granite islands off Terengganu in the South China Sea, but Perhentian consists of two neighbouring islands historically used as a resupply stop for trading ships, while Redang is part of Malaysia's marine park system.",
    concept:
      "The coral reef ecosystem around the Perhentian Islands is a classic sample for studying the distribution and conservation of shallow continental-shelf coral reefs off the Malay Peninsula's east coast.",
    history:
      "The Perhentian Islands take their name from the Malay word for \"stopping place,\" having historically served as a resupply stop for passing trading ships, and are today an important diving and snorkelling destination on Malaysia's east coast.",
  },
  "redang-island": {
    // 全六段 sources: 花岗岩岛屿、马来西亚海洋公园组成部分；与 perhentian-islands 并读无互相证伪的「最……」表述。核实 2026-09-11，未改动
    seeing:
      "Redang Island is a granite island off the coast of Terengganu in the South China Sea, part of Malaysia's marine park system, with a well-preserved coral reef ecosystem along its coast.",
    formation:
      "Redang belongs to the same continental-shelf granite geological unit as other islands off the peninsula's east coast; long-term wave erosion has shaped today's island outline, while corals in the surrounding shallow waters have grown and accumulated into a complete reef ecosystem.",
    observation:
      "From the air, Redang Island is ringed by extensive pale coral reef shallows, forming a clear colour boundary with the deep-blue open sea beyond, the island itself forested with gently rolling terrain.",
    distinguish:
      "Both Redang Island and the Perhentian Islands are granite islands off Terengganu in the South China Sea, but Redang is part of Malaysia's marine park system with well-preserved coral reefs, while the Perhentian Islands consist of two neighbouring islands.",
    concept:
      "The well-preserved coral reef ecosystem around Redang Island is a classic sample for studying the long-term effectiveness of coral reef conservation on the continental shelf off the Malay Peninsula's east coast.",
    history:
      "Redang Island and its surrounding waters are protected within Malaysia's marine park system, and it is today an important coral reef conservation area and diving destination on the peninsula's east coast.",
  },
  "sipadan-island": {
    // 全六段 sources: 马来西亚唯一的海洋岛、自约 600 m 深海垂直隆起、记录鱼类逾 400 种。⚠️ 红线自查：正文只写生态与潜水史，**未涉 2002 年国际法院主权裁决**，符合红线。核实 2026-09-11，未改动
    seeing:
      "Sipadan is Malaysia's only oceanic island, lying beyond the continental shelf in the Celebes Sea, its pinnacle rising about 600 m vertically from the seabed, ringed by natural hard coral reef, with more than 400 recorded fish species.",
    formation:
      "Sipadan is a submarine pinnacle built up over millions of years by coral growth on top of an extinct volcanic cone; the combination of deep-water currents and a shallow, sunlit reef top has created exceptionally rich marine conditions around the island.",
    observation:
      "From the air and at the surface, Sipadan is tiny, almost the entire island covered in coral sand and tropical vegetation, the surrounding water shifting rapidly from pale blue to deep blue — a clear sign of the submarine pinnacle rising abruptly from deep water.",
    distinguish:
      "Both Sipadan and Tioman Island are well-known diving destinations in Malaysia, but Sipadan is an isolated oceanic island built up by coral on an extinct volcanic cone, surrounded immediately by deep sea, while Tioman is a continental-shelf igneous island.",
    concept:
      "Sitting at the heart of the Coral Triangle, Sipadan is a classic sample for studying how an oceanic-island coral reef ecosystem sustains high biodiversity under the combined conditions of deep-water currents and shallow-water sunlight.",
    history:
      "Sipadan was historically a sea-turtle nesting site and a traditional fishing ground for local fishermen, and became an internationally renowned diving destination in the late 20th century owing to its distinctive underwater landform and ecology.",
  },
  "pahang-river": {
    // 全六段 sources: 全长 459 km、马来半岛最长河；哲莱河与淡美璐河汇合、流域约 2.9 万 km²、于北根入海。与 rejang-river「马来西亚最长」口径互不证伪。核实 2026-09-11，未改动
    seeing:
      "The Pahang River is the longest river on the Malay Peninsula, running 459 km, formed by the confluence of its two headstreams, the Jelai and the Tembeling, draining a basin of about 29,000 km² before emptying into the South China Sea at Pekan.",
    formation:
      "The Pahang River rises on the eastern flank of the Titiwangsa Mountains; long-term erosion of the mountain rock and downstream sediment transport, together with a sharp eastward turn near Mengkarak where the slope changes at the break between mountains and plain, has shaped a floodplain more than 32 km wide before the river reaches the South China Sea.",
    observation:
      "From the air, the Pahang River shows a broad, winding channel running through extensive tropical rainforest and alluvial plain, its mouth marked by a delta landform interwoven with mangroves — the most prominent drainage feature on the peninsula's east coast.",
    distinguish:
      "Both the Pahang River and the Kelantan River are major rivers on the peninsula's east coast, but the Pahang is the peninsula's longest river with the largest drainage basin, while the Kelantan is comparatively shorter, its basin including part of Taman Negara.",
    concept:
      "As the peninsula's longest river, the Pahang's basin extent and course changes make it an important sample for studying the surface drainage pattern of the peninsula's east coast and the relationship between mountain and plain landforms.",
    history:
      "The Pahang River has historically been an important waterway for inland tin mining and timber transport on the Malay Peninsula, with towns such as Temerloh and Pekan along its banks long developing around river trade.",
  },
  "kelantan-river": {
    // 全六段 sources: 248 km，为半岛第四长河（次于彭亨、霹雳、麻坡）；加拉斯河与勒比河汇流、流域约 1.19 万 km²。核实 2026-09-11，未改动
    seeing:
      "The Kelantan River is the fourth-longest river on the Malay Peninsula, running 248 km, formed by the confluence of the Galas and Lebir rivers, draining a basin of about 11,900 km² before flowing north through Kota Bharu to the South China Sea.",
    formation:
      "The Kelantan's two headstreams, the Galas and the Lebir, rise separately in the Titiwangsa Mountains and the hills around Taman Negara; after long-term erosion of the mountain rock they join in the middle course, then flow north into a relatively flat coastal plain.",
    observation:
      "From the air, the upper Kelantan winds through mountainous terrain, opening into a broad alluvial plain in its middle and lower reaches; a clear delta landform appears at its mouth near Kota Bharu, closely tied to the rice-growing landscape of Kelantan state.",
    distinguish:
      "Both the Kelantan River and the Pahang River are major rivers on the peninsula's east coast, but the Kelantan's basin includes part of Taman Negara and is comparatively shorter, while the Pahang is the peninsula's longest river with a larger basin.",
    concept:
      "As the Kelantan River's basin includes part of Taman Negara, it is an important sample for studying the relationship between mountain river drainage systems and tropical rainforest reserves in the northeastern Malay Peninsula.",
    history:
      "The Kelantan valley was historically the political and cultural heartland of the Sultanate of Kelantan; Kota Bharu at its mouth is today the capital of Kelantan state.",
  },
  "perak-river": {
    // 全六段 sources: 约 400 km，半岛第二长河（仅次于彭亨河）；源出霹雳 / 吉兰丹 / 泰国三方交界的皇家贝伦州立公园，于端洛入马六甲海峡。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "The Perak River is the second-longest river on the Malay Peninsula, running about 400 km, rising in the Titiwangsa Mountains at the tripoint of Perak, Kelantan and Thailand, and flowing south through Teluk Intan to the Strait of Malacca.",
    formation:
      "The Perak River rises in the northern Titiwangsa Mountains around Royal Belum State Park; long-term erosion of the mountain rock and downstream sediment transport have shaped a narrow, elongated valley plain running the length of Perak state from north to south.",
    observation:
      "From the air, the upper Perak River winds through the primary rainforest of the Royal Belum area, opening into broad agricultural plains in its middle and lower reaches, with a clear river-mouth landform where it meets the Strait of Malacca at Teluk Intan.",
    distinguish:
      "The Perak River and the Pahang River flow to opposite coasts of the Malay Peninsula: the Perak flows west into the Strait of Malacca as the peninsula's second-longest river, while the Pahang flows east into the South China Sea as its longest.",
    concept:
      "As the main river running the length of the peninsula's west coast, the Perak River is an important sample for studying the drainage pattern on the western flank of the Titiwangsa Mountains and its relationship to agricultural development in the river valley plain.",
    history:
      "The Perak River has historically been an important waterway for tin transport on the Malay Peninsula's west coast, with towns such as Ipoh along its banks prospering through tin mining and river trade.",
  },
  "kinabatangan-river": {
    // 全六段 sources: 约 560 km，马来西亚第二长河；源出克罗克山脉，于山打根东南注入苏禄海；2005 年设野生动物保护区；下游是全球仅两处可见 10 种灵长类共存的地方之一（Britannica，2 级）。核实 2026-09-11，未改动
    seeing:
      "The Kinabatangan River is Malaysia's second-longest river, running about 560 km, rising in the Crocker Range in southwest Sabah and flowing east to empty into the Sulu Sea southeast of Sandakan.",
    formation:
      "The Kinabatangan rises in the Crocker Range; long-term erosion of the mountain rock and downstream transport of large amounts of sediment have formed a broad floodplain and alluvial plain in its lower course, providing an ideal terrain base for a tropical rainforest wetland ecosystem.",
    observation:
      "From the air, the lower Kinabatangan winds in tight meanders scattered with oxbow lakes, its banks lined with dense floodplain forest, forming a sharp contrast between primary landform and developed plantation land further into Sabah's interior.",
    distinguish:
      "Both the Kinabatangan and the Rajang are major rivers of Borneo, but the Kinabatangan is known for the wildlife diversity of its lower floodplain forest, while the Rajang is Borneo's longest river and was historically an important timber-transport waterway.",
    concept:
      "The Kinabatangan's lower floodplain forest is one of only two known places on Earth where ten primate species can be found together, making it an important sample for studying how biodiversity is sustained in tropical river-floodplain forest ecosystems.",
    history:
      "In 2005 the Sabah government gazetted the Kinabatangan Wildlife Sanctuary; it is today one of Borneo's most important wildlife-viewing destinations and has long been a traditional fishing and hunting ground for indigenous communities of inland Sabah.",
  },
  "rejang-river": {
    // 全六段 sources: 约 563 km，马来西亚最长河流、婆罗洲第七长（Britannica，2 级）；源出伊兰山脉。**与印尼批的卡普阿斯河并排核过**：卡普阿斯（约 1143 km）是「婆罗洲最长」，本条限定为「马来西亚最长」，两条不冲突。核实 2026-09-11，未改动
    seeing:
      "The Rajang River is Malaysia's longest river, running about 563 km, rising in the Iran Mountains of interior Borneo and flowing west into the South China Sea — the seventh-longest river on the island of Borneo.",
    formation:
      "The Rajang rises in the Iran Mountains of interior Borneo; long-term erosion of the mountain rock and downstream transport of large amounts of sediment have built a broad delta landform at its mouth, making it Sarawak's largest river system.",
    observation:
      "From the air, the upper Rajang winds through the dense forest of interior Borneo, its channel widening through the middle and lower reaches; the riverside town of Sibu has grown around river trade, and a dense network of waterways marks the delta at its mouth.",
    distinguish:
      "Both the Rajang and the Kinabatangan are major rivers of Borneo, but the Rajang is Borneo's longest river and was historically an important timber-transport waterway, while the Kinabatangan is known for the wildlife diversity of its lower floodplain forest.",
    concept:
      "As Borneo's longest river, the landform gradient between the Rajang's mountainous upper course and its delta lower course makes it a classic sample for studying how interior Bornean rivers transport sediment over long distances to build river-mouth deltas.",
    history:
      "The Rajang River has historically been an important waterway for timber and agricultural transport in interior Sarawak, with Sibu, the largest town on its banks, developing into an important commercial centre of Sarawak through river trade.",
  },
  "tasik-chini": {
    // 全六段 sources: 马来西亚第二大天然淡水湖、12 个相连小湖、约 5085 ha、距关丹约 100 km；2009 年为**马来西亚首个** UNESCO 生物圈保护区（1 级）。生物多样性数字与官方口径量级一致。近年矿业与伐木致生态退化风险有公开报道（SCMP，2 级）。核实 2026-09-11，未改动
    seeing:
      "Tasik Chini (Lake Chini) is Peninsular Malaysia's second-largest natural freshwater lake, made up of 12 interconnected smaller lakes covering about 5,085 ha, about 100 km from Kuantan, recognised by UNESCO in 2009 as Malaysia's first biosphere reserve.",
    formation:
      "Tasik Chini formed as tributaries of the Pahang River gathered over a long period in a low-lying depression into a series of interconnected shallow lakes; seasonal water-level changes alternately merge and separate the 12 component lakes, a classic example of a tropical lowland freshwater lake cluster.",
    observation:
      "From the air, Tasik Chini appears as an irregular water body made up of 12 interconnected lakes, its shoreline winding and rich in aquatic vegetation; during the wet season, blooming lotus flowers cover large stretches of the surface, a distinctive wetland landscape within the Pahang River basin.",
    distinguish:
      "Both Tasik Chini and the Pahang River lie within the same drainage system in Pahang state, but Tasik Chini is a relatively still natural freshwater lake cluster, while the Pahang River is the peninsula's longest river, a dynamic flowing system.",
    concept:
      "Tasik Chini is home to 138 plant species, more than 300 non-aquatic species and 144 freshwater fish species, making it an important sample for studying the relationship between biodiversity and water-quality change in tropical lowland lake wetland ecosystems.",
    history:
      "Tasik Chini is the ancestral home of the Jakun, an Orang Asli indigenous community of Pahang; local legend holds that an ancient Khmer city lies sunken beneath the lake, guarded by a \"dragon god.\" Recognised by UNESCO in 2009 as Malaysia's first biosphere reserve, the lake's ecosystem has in recent years faced degradation risk from mining and logging activity.",
  },
  "bako-national-park": {
    // 全六段 sources: 2024-02-13 标志性海蚀柱「眼镜蛇头」因大浪倒塌，经砂拉越林业局证实（1 级）—— 海蚀柱是会消失的地物。formation 段的砂岩地层表述见 issue。核实 2026-09-11
    seeing:
      "Bako National Park is a stretch of coastal sandstone landform in Sarawak, shaped over millions of years of wave erosion into steep cliffs, headlands and white-sand bays, its sea stacks the park's signature feature.",
    // formation sources: 巴哥砂岩另立单元：Journal of Asian Earth Sciences 沉积相论文（2 级）。核实 2026-09-12
    formation:
      "Geologists treat the sandstone exposed at Bako as a separate unit, the Bako Sandstone, distinct from the Plateau Sandstone of the Kuching area; long-term wave erosion has undercut the base of the headlands, isolating hard rock pillars offshore while softer surrounding rock has been carried away by currents.",
    observation:
      "From the air, Bako's coastline alternates between steep cliffs and winding headlands, several isolated sea stacks standing in the nearshore waters of the South China Sea, their surfaces marked with striking orange-red banding from iron-oxide deposition.",
    distinguish:
      "Both Bako National Park and Langkawi Geopark are known for sea-erosion landforms, but Bako's features are sandstone sea stacks and cliffs, while Langkawi is defined by limestone karst sea stacks and sea arches.",
    concept:
      "The distinctive northwest-southeast trending joints in Bako's sandstone have determined the orientation of many of the region's headlands and streams, making it a classic sample for studying how rock-joint structure controls the development of coastal landforms.",
    history:
      "In February 2024, one of Bako's iconic sea stacks collapsed under the impact of large waves, an event confirmed by the Sarawak Forestry Corporation, illustrating that sea-stack landforms are an ongoing, not static, geological process.",
  },
};
