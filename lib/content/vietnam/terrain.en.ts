import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Vietnam ============
  fansipan: {
    // 全六段 sources: 3147 m（2019 年复测）为越南与中南半岛最高峰；山体为约 250–260 Ma 二叠—三叠之交的花岗质侵入体；法属时期测绘首测 3143 m。核实 2026-09-11，未改动
    seeing:
      "Fansipan is the highest peak in Vietnam and mainland Southeast Asia at 3,147 m, the high point of the Hoang Lien Son range, cold year-round, its summit preserving a cloud-forest and alpine vegetation ecosystem.",
    formation:
      "The massif formed around 250–260 million years ago at the Permian-Triassic boundary between the Palaeozoic and Mesozoic eras; long tectonic uplift and weathering have shaped today's steep peak profile.",
    observation:
      "From the air, Fansipan's summit is wreathed in cloud year-round; vegetation transitions with elevation from tropical rainforest at the foot to cloud forest and alpine scrub near the top, a sharp contrast with the lower valley landforms around it.",
    distinguish:
      "Fansipan and Phong Nha-Ke Bang are both representative mountain landforms in Vietnam, but Fansipan is a granitic metamorphic-rock peak defined by its elevation, while Phong Nha-Ke Bang is limestone karst known for its cave systems.",
    concept:
      "As the highest peak on the Southeast Asian mainland, Fansipan is an important reference for studying vertical vegetation zonation and the eastward structural extension of the Himalayas.",
    history:
      "The peak sits within Hoang Lien National Park, an important nature reserve in Vietnam; it was surveyed and confirmed as mainland Southeast Asia's highest point during the French colonial period.",
  },
  "phong-nha-ke-bang": {
    // 全六段 sources: 石灰岩演化约 4 亿年（古生代泥盆—石炭纪），为亚洲现存最古老、最大的喀斯特之一；UNESCO 三期未串位 —— 2003 年首次列入（标准 viii）、2015 年依生物多样性标准扩展（85,754 → 126,236 ha）、2026-06-05 第 38 届 MAB-ICC 认定为世界生物圈保护区（1 级）。洞穴总长见 issue。核实 2026-09-11
    // seeing sources: 洞穴总长 243 km（2023 年联合测绘，人民报，2 级）；会增长的量，下轮复核。核实 2026-09-12
    seeing:
      "Phong Nha-Ke Bang is a karst mountain area in central Vietnam along the Laos border, with about 243 km of caves and underground waterways surveyed as of 2023 (new caves are still being found), home to Son Doong, the world's largest natural cave.",
    formation:
      "The limestone strata date back roughly 400 million years to the Palaeozoic, making this one of the largest and oldest karst landscapes remaining in Asia; long groundwater dissolution has shaped a vast cave network.",
    observation:
      "From the air, Phong Nha-Ke Bang's terrain rolls continuously under dense forest cover, the internal network of caves almost invisible from the surface, with an underground river flowing gently out from the mouth of Phong Nha Cave.",
    distinguish:
      "Phong Nha-Ke Bang and Fansipan are both representative mountain areas in Vietnam, but Phong Nha-Ke Bang is known for its limestone cave system and greater geological age, while Fansipan is a granitic metamorphic-rock peak defined by elevation.",
    concept:
      "As one of Asia's oldest large-scale surviving karst landscapes, Phong Nha-Ke Bang is a classic case for studying how long-term groundwater dissolution in tropical karst regions produces large cave systems.",
    history:
      "Inscribed on the UNESCO World Heritage List in 2003, with the listing extended in 2015 following new cave discoveries, and recognised as a UNESCO Biosphere Reserve in 2026.",
  },
  "ba-na-hills": {
    // 全六段 sources: 1487 m；山顶较沿海低约 7–10°C，正文「约10摄氏度」落在区间内；法属时期山顶避暑山庄史实属实。核实 2026-09-11，未改动
    seeing:
      "Ba Na Hills is a 1,487 m peak west of Da Nang, its summit climate roughly 10°C cooler than the coastal city below, and a well-known highland tourist destination in central Vietnam.",
    formation:
      "The massif is granite; long weathering and erosion have produced a comparatively gentle summit plateau, and the elevation-driven climate difference preserves a cooler vegetation environment than the coastal plain.",
    observation:
      "From the air, Ba Na Hills' summit is wrapped in cloud year-round, a sharp contrast with the hot climate of the coastal plain and Da Nang below; a cable car winds up the mountainside.",
    distinguish:
      "Ba Na Hills and Bach Ma are both coastal mountain retreats in central Vietnam, but Ba Na Hills has been developed to a much greater degree with cable cars and summit resort facilities, while Bach Ma retains more of its original, weathered French villa ruins.",
    concept:
      "The roughly 10°C temperature difference between Ba Na Hills' summit and its foot is a direct sample for studying how elevation gradients affect local climate in the tropics.",
    history:
      "French colonial authorities built a hill-station retreat at the summit in the early 20th century; today the summit is reachable by cable car, continuing this area's historic role as a mountain retreat.",
  },
  "bach-ma-mountain": {
    // 全六段 sources: 1448 m；1932-07 法国工程师 Girard 勘定为避暑山庄选址 → 1934 年道路完工 → 1936 年首批别墅法令 → 1942 年建成约 139 栋，正文「十年间约140座」与之相符；1991 年设为国家公园。核实 2026-09-11，未改动
    seeing:
      "Bach Ma is a 1,448 m peak between Hue and Da Nang; French colonial authorities built a hill-station retreat here in 1932, and weathered French villa ruins remain scattered across the mountainside today.",
    formation:
      "The massif carries two vegetation zones — subtropical evergreen monsoon forest above 900 m and tropical evergreen monsoon forest below — and long erosion has shaped numerous stream valleys and waterfalls.",
    observation:
      "From the air, Bach Ma's vegetation shows a clear elevation banding, with waterfalls dropping along several stream valleys and weathered French villas faintly visible among the trees.",
    distinguish:
      "Bach Ma and Ba Na Hills are both sites of French colonial hill-station development, but Bach Ma's French-era architectural remains are left comparatively untouched and weathered, while Ba Na Hills has been highly developed into a modern resort.",
    concept:
      "Bach Ma's vertically zoned forest vegetation is a sample for studying how elevation gradients affect vegetation type in tropical mountains.",
    history:
      "In 1932 the French engineer Girard selected the summit as a hill-station retreat for the colonial administration of Hue; about 140 buildings were built over the following decade, and the mountain was designated a national park in 1991.",
  },
  "dong-van-karst-plateau": {
    // 全六段 sources: 2010-10-03 列入 UNESCO 世界地质公园网络，为**越南首个**（东南亚第二个）—— 未与越南其他地质公园（Dak Nong 2020、Lang Son 2024）串位；面积各来源 2265.7–2356 km²，正文「约2345」落在区间内。⚠️ 两次大灭绝的表述里，第一次严格说是晚泥盆世 F-F 事件（约 364 Ma，位于泥盆纪内部）而非泥盆—石炭系界线，多数资料同样用通俗说法，暂不改。族群定居年代见 issue。核实 2026-09-11
    // seeing sources: 行政建制：**河江省 2025 年并入宣光省**，县级一级自 2025-07-01 起撤销，所以原文「河江省四县境内」两个成分都已失效；地质公园的范围、面积与 2010 年的认定不受影响，只改建制表述。2026-09-12 核。⚠️ 注册表 `dong-van-karst-plateau` 的 `source` 留痕里也写着「河江省四县」，已同步加注。
    seeing:
      "The Dong Van Karst Plateau lies at Vietnam's northernmost edge and spans about 2,345 km², in what were the four northernmost districts of Ha Giang province, which was merged into Tuyen Quang in 2025 when the district tier was abolished; in 2010 it became Vietnam's first UNESCO Global Geopark.",
    formation:
      "The limestone strata date back roughly 550 million years to the Cambrian, recording geological evidence of two mass-extinction events at the Devonian-Carboniferous and Permian-Triassic boundaries; long uplift and dissolution have shaped the plateau's dense peaks and deep gorges.",
    observation:
      "From the air, the Dong Van Karst Plateau's relief is dramatic, with sharp limestone peak clusters interwoven with deep-cut canyons; terraced fields step down the hillsides, making it one of northern Vietnam's most visually striking plateau landscapes.",
    distinguish:
      "The Dong Van Karst Plateau and Tu San Canyon share the same geological unit, but the plateau refers to the whole tableland, while Tu San Canyon is a specific gorge on the plateau roughly 700–800 m deep.",
    concept:
      "The Dong Van Karst Plateau preserves geological evidence of two mass-extinction events, making it an important sample for studying the relationship between the history of life on Earth and long-term karst landscape evolution.",
    history:
      "The plateau is home to 17 ethnic groups including the Hmong, Lo Lo and Bo Y, their terraced farming traditions closely interwoven with the karst landscape.",
  },
  "central-highlands-tay-nguyen": {
    // 全六段 sources: 海拔约 500–1500 m；玄武岩红土；大叻 1893 年由耶尔森发现并经法方开发为避暑地。⚠️ 红线自查：正文只写高原地貌、玄武岩土壤与咖啡种植这类地理—农业事实，**未涉族群构成、移民或土地议题**。核实 2026-09-11，未改动
    seeing:
      "The Central Highlands (Tây Nguyên) is a collective name for a series of connected plateaus in south-central Vietnam at roughly 500–1,500 m elevation, the country's main coffee-growing region.",
    formation:
      "The plateau's bedrock is mainly basalt; long weathering has produced fertile red laterite soil widely covering the surface, providing ideal conditions for large-scale cash-crop cultivation.",
    observation:
      "From the air, the Central Highlands roll gently, with extensive coffee and rubber plantations covering the plateau surface; Da Lat, on the Lam Vien Plateau at about 1,500 m, enjoys a mild climate year-round, a contrast with the hot lowlands.",
    distinguish:
      "The Central Highlands and the Dong Van Karst Plateau are both highland landforms in Vietnam, but the Central Highlands' bedrock is basalt, known for its red laterite agriculture, while the Dong Van Karst Plateau is limestone karst known for its peak clusters and canyons.",
    concept:
      "The red laterite landform produced by basalt weathering in the Central Highlands is an important sample for studying how volcanic-rock weathering products shape tropical highland agricultural landscapes.",
    history:
      "Da Lat has been developed as a hill retreat for its cool climate since the French colonial period and still preserves extensive French-era architecture, making it an important highland tourist city in Vietnam.",
  },
  "cat-ba-island": {
    seeing:
      "Cat Ba Island is one of Vietnam's largest offshore islands, covering about 354 km²; in 1986 nearly half the island and about 90 km² of adjacent waters were designated a national park.",
    formation:
      "The island's bedrock is limestone, part of the same karst geological unit as Ha Long Bay; long marine erosion and dissolution have shaped the island's diverse coastal and inland karst landforms.",
    observation:
      "From the air, Cat Ba's terrain is undulating and densely forested, with numerous small limestone islands scattered around it, echoing the karst tower-island scenery of Ha Long Bay nearby.",
    distinguish:
      "Cat Ba Island and Ha Long Bay belong to the same limestone karst geological unit, but Cat Ba is a comparatively intact large island preserving multiple terrestrial ecosystems, while Ha Long Bay is known for its scattered tower-shaped islets.",
    concept:
      "Cat Ba Island hosts a range of ecosystems including subtropical evergreen forest, freshwater swamp forest, mangroves, and coral reefs, making it an important sample for studying ecosystem diversity on limestone islands.",
    // history sources: 全岛约 354 km²，1986 年设国家公园（含约 90 km² 近岸水域）；2023-09-16 经边界修改与下龙湾合并为跨省遗产 —— 原文写「近年」，既会过期又把一个有确切日期的事件写成了趋势。核实 2026-09-11
    history:
      "Designated a national park in 1986, one of Vietnam's earlier national parks; in 2023 a World Heritage boundary modification merged it with Ha Long Bay into the Ha Long Bay - Cat Ba Archipelago site, which spans Quang Ninh province and the municipality of Hai Phong.",
  },
  "con-dao": {
    seeing:
      "Con Dao is an archipelago of 16 islands in Vietnam's southern waters; Con Son, the main island, is the largest of the group, and the whole was designated a national park in 1993.",
    formation:
      "The archipelago's bedrock is mainly granite and metamorphic rock; long marine erosion has shaped steep coastal cliffs and numerous bay beaches across the islands.",
    observation:
      "From the air, the Con Dao islands are scattered across open water, their outlines steep and densely forested, the surrounding waters clear with extensive coral reefs.",
    distinguish:
      "Con Dao and Phu Quoc are both important islands in southern Vietnam, but Con Dao is smaller and known for nature conservation and historic sites, while Phu Quoc is larger and known for large-scale tourism development.",
    concept:
      "The waters around Con Dao are an important nesting site for green sea turtles in Vietnam, making it an important sample for studying marine ecological conservation on tropical islands.",
    // history sources: 16 座岛屿、主岛昆山岛最大、1993 年设为国家公园（覆盖 16 岛中 14 岛、约 2 万 ha，昆岛国家公园官网 1 级）；周边海域约占越南绿海龟产卵量九成，正文用「重要产卵地之一」更保守。⚠️ history 段原写的 20 世纪监狱史按零争议红线移除。核实 2026-09-11
    history:
      "The whole archipelago was designated Con Dao National Park in 1993, an important nature reserve and a key habitat for marine life including green sea turtles.",
  },
  "phu-quoc": {
    // 全六段 sources: ⚠️ 口径提示 —— 589 km² 对应的是**富国特区**（含周边 28 座小岛）总面积，仅主岛约 574 km²，两个数都见于官方/旅游资料、差约 2.6%；下轮考虑在正文写明口径。核实 2026-09-11，未改动
    seeing:
      "Phu Quoc is Vietnam's largest island, covering about 589 km², with more than half its area forested within Phu Quoc National Park.",
    formation:
      "The island's bedrock is mainly sandstone and granite; long erosion has shaped rolling hills across the island's interior and broad sandy beaches along its coast.",
    observation:
      "From the air, Phu Quoc rises in the middle and is low around its edges, with extensive forest covering the central hills and a long beach along the west coast resembling resort-island landscapes elsewhere in Southeast Asia.",
    distinguish:
      "Phu Quoc and Con Dao are both important islands in southern Vietnam, but Phu Quoc is larger and more heavily developed for tourism, while Con Dao is smaller and known for its historic sites and nature conservation.",
    concept:
      "The combination of central hills and surrounding coastal plain and beaches on Phu Quoc is a sample for studying the relationship between tropical island landform differentiation and tourism development.",
    history:
      "An important island tourism destination in southern Vietnam; rapid infrastructure development in recent years has made it one of Vietnam's more internationally open tourist islands.",
  },
  "ly-son-island": {
    // 全六段 sources: 五座命名火山口（Thoi Loi / Gieng Soi / Gieng Tien / Chua Hang / Hang Cau）与大蒜种植地位均确认（岛上另有约 10 处火山口遗迹、含 3 处海底，正文取地表五座不冲突）；整体成因约 25–30 Ma，个别火山口另有 9–11 Ma 的定年，正文「多期次」已隐含这一点。核实 2026-09-11，未改动
    seeing:
      "Ly Son is a volcanic island off the coast of Quang Ngai Province in central Vietnam; its five dormant volcanic craters are named after the five classical elements, and the island is an important garlic-growing area.",
    formation:
      "Multiple phases of volcanic activity roughly 25–30 million years ago formed the island's five craters; long marine erosion has shaped coral reef and basalt sea-erosion landforms around the island.",
    observation:
      "From the air, Ly Son's outline is an irregular polygon, its volcanic-crater terrain clearly undulating, with extensive garlic and onion fields covering the volcanic-ash soil, a sharp contrast with the turquoise water around it.",
    distinguish:
      "Ly Son and Cat Ba are both important coastal islands in Vietnam, but Ly Son is volcanic in origin, known for its crater landforms and agriculture, while Cat Ba is limestone karst, known for its karst ecosystem.",
    concept:
      "The way Ly Son's volcanic-ash soil nourishes local agriculture is a sample for studying the relationship between volcanic-island landforms and distinctive agricultural development.",
    history:
      "The island's long-standing garlic-growing tradition is closely tied to the fertility of its volcanic-ash soil, a classic case of Vietnamese coastal-island agriculture depending on geological conditions.",
  },
  "cu-lao-cham": {
    // 全六段 sources: 「占婆岛—会安」生物圈保护区 2009-05-26 经 UNESCO MAB 国际协调理事会批准；会安古城本身 1999 年列入文化遗产，两个年份未混淆。核实 2026-09-11，未改动
    seeing:
      "Cu Lao Cham is a group of islands downstream of the Thu Bon River's mouth; in 2009 the \"Cu Lao Cham-Hoi An\" Biosphere Reserve was inscribed on UNESCO's World Network of Biosphere Reserves.",
    formation:
      "The islands' bedrock is granite and metamorphic rock; long marine erosion has shaped steep rocky coastlines, and coral reefs are well developed in the surrounding waters.",
    observation:
      "From the air, the Cu Lao Cham islands are scattered in open water off the Thu Bon River's mouth, densely forested, with a clear transition between estuarine and coral-reef ecosystems in the surrounding waters.",
    distinguish:
      "Cu Lao Cham and Ly Son are both coastal islands in central Vietnam, but Cu Lao Cham sits downstream of a river mouth, its biosphere reserve spanning both estuarine and marine ecology, while Ly Son is volcanic, known for its crater landforms and agriculture.",
    concept:
      "The transition between estuarine and coral-reef ecosystems at Cu Lao Cham is an important sample for studying ecosystem diversity on near-shore islands.",
    history:
      "Inscribed on UNESCO's World Network of Biosphere Reserves in 2009, forming a protected area alongside the nearby ancient town of Hoi An that links cultural and natural heritage.",
  },
  "ha-long-bay": {
    seeing:
      "Ha Long Bay is a drowned karst bay in Vietnam's north-eastern waters, covering about 1,553 km² and scattered with roughly 1,600 limestone tower islands.",
    formation:
      "Limestone deposition began roughly 500 million years ago; tectonic uplift combined with millions of years of marine erosion and dissolution shaped today's tower-island landscape, and rising sea level after the last glacial period drowned the once-terrestrial karst towers, leaving only their tops above water.",
    observation:
      "From the air, thousands of limestone tower islets are scattered across the emerald water, each with its own distinctive shape; some islands contain natural caves, and Hon Trong Mai (\"Fighting Cocks\" islet) is one of the bay's best-known landmarks.",
    distinguish:
      "Ha Long Bay and Cat Ba Island belong to the same limestone karst geological unit, but Ha Long Bay is known for its scattered tower islets on open water, while Cat Ba is a comparatively intact large island.",
    concept:
      "Ha Long Bay's drowned karst landform is a classic case for studying how sea-level change transforms a terrestrial karst-tower landscape into an offshore island group.",
    // history sources: 海域约 1553 km²、岛屿数各口径 1133（严格遗产区内）–1969（含未命名小岛），正文「约1600座」落在区间内；UNESCO 三期 —— 1994-12-17 依标准 vii（景观美学）首次列入、2000-11-29 依标准 viii（地质地貌）扩展、2023-09-16 边界修改与吉婆群岛合并为跨省遗产（whc.unesco.org/en/list/672，1 级）。**原文把 1994/2000 两期的依据标准对调了，且漏掉 2023 这一期。** 核实 2026-09-11
    history:
      "Inscribed on the UNESCO World Heritage List twice — in 1994 for its scenic and aesthetic value (criterion vii), and in 2000 for its geological and geomorphological value (criterion viii) — and extended in 2023 by a boundary modification that merged it with the Cat Ba Archipelago as the Ha Long Bay - Cat Ba Archipelago site spanning Quang Ninh province and the municipality of Hai Phong, Ha Long Bay is one of Vietnam's most iconic natural landscapes.",
  },
  "mui-ne-dunes": {
    // 全六段 sources: 红沙丘因沉积物富含氧化铁而呈橙红色；美奈自 20 世纪末由渔村发展为风筝冲浪与沙丘旅游地。核实 2026-09-11，未改动
    seeing:
      "The Mui Ne Dunes are a field of red and white sand dunes on the south-central Vietnamese coast, built up from coastal sand long carried by prevailing winds.",
    formation:
      "The red dunes owe their orange-red colour to a relatively high iron-oxide mineral content in the sand; the dune forms continuously shift and reshape with the wind, a rare large-scale aeolian dune landform along Vietnam's coast.",
    observation:
      "From the air, the red and white dunes form a striking colour contrast along the coastline, their surfaces showing fine wind-formed ripple patterns, interwoven with coconut groves and the shoreline nearby.",
    distinguish:
      "The Mui Ne Dunes and Nha Trang Bay are both south-central Vietnamese coastal landforms, but Mui Ne is known for its aeolian dune landforms, while Nha Trang Bay is known for its granite headland and open bay.",
    concept:
      "The colour variation in Mui Ne's red dunes, driven by differing mineral content, is a sample for studying the relationship between mineral composition and depositional environment in aeolian dune landforms.",
    history:
      "Mui Ne has developed since the late 20th century from a fishing village into a well-known Vietnamese destination for kitesurfing and dune tourism.",
  },
  "nha-trang-bay": {
    // 全六段 sources: 琴石岬为石英、长石、云母构成的花岗岩，经潮汐与风化侵蚀成层叠巨石。核实 2026-09-11，未改动
    seeing:
      "Nha Trang Bay is an open bay on Vietnam's south-central coast, scattered with islands and coral reefs, and an important diving and bay-tourism destination in the country.",
    formation:
      "The bedrock around Hon Chong Promontory is granite; long weathering and marine erosion have left giant granite boulders stacked in an interlocking, layered pattern.",
    observation:
      "From the air, Nha Trang Bay's waters are broad and calm, dotted with islands; the granite boulder cluster at Hon Chong Promontory extends out into the sea, contrasting with the fine sandy beaches nearby.",
    distinguish:
      "Nha Trang Bay and the Mui Ne Dunes are both south-central Vietnamese coastal landscapes, but Nha Trang Bay is known for its granite headland and island-studded bay, while Mui Ne is known for its aeolian dune landforms.",
    concept:
      "The layered pattern formed by long weathering of the granite boulders at Hon Chong Promontory is a sample for studying the weathering process of granite coastal landforms.",
    history:
      "Nha Trang has developed since the 20th century into an important Vietnamese seaside resort city; its island and coral-reef resources have made it a popular diving destination.",
  },
  "ba-be-lake": {
    // 全六段 sources: 由三段相连水域（Pe Leng / Pe Lu / Pe Lam）组成，「巴别」即「三个湖湾」；公认为越南最大天然淡水湖；1992 年设为国家公园（越南第 8 座）。核实 2026-09-11，未改动
    seeing:
      "Ba Be Lake is a natural freshwater lake in northern Vietnam, actually made up of three connected bodies of water, and one of the largest natural lakes in the country.",
    formation:
      "The lakebed's bedrock is limestone; long tectonic movement combined with river erosion formed today's lake basin, ringed by steep limestone cliffs.",
    observation:
      "From the air, Ba Be Lake's surface is long and winding, its three connected sections forming one continuous body of water, ringed by evergreen forest and limestone cliffs that blend seamlessly with the surrounding valley landform.",
    distinguish:
      "Ba Be Lake and Lak Lake are both important natural freshwater lakes in Vietnam, but Ba Be's bedrock is limestone in the northern mountains, while Lak Lake sits on the Central Highlands, associated with the basalt plateau landform.",
    concept:
      "As one of Vietnam's largest natural lakes, Ba Be Lake is a sample for studying how tectonic movement in limestone mountains forms lake basins.",
    history:
      "Designated a national park in 1992, Ba Be is an important area for ecotourism and ethnic-minority communities in northern Vietnam.",
  },
  "lak-lake": {
    // 全六段 sources: 距邦美蜀市中心各来源 50–56 km，正文「约55公里」落在区间内；玄武岩高原地表径流汇聚成湖。核实 2026-09-11，未改动
    seeing:
      "Lak Lake is a natural freshwater lake in Dak Lak Province on the Central Highlands, about 55 km from the centre of Buon Ma Thuot, with a rich surrounding ecosystem.",
    formation:
      "The lake sits within the basalt highland zone; long accumulation of surface runoff combined with locally low-lying terrain formed the lake basin, fed mainly by surrounding streams and rainfall.",
    observation:
      "From the air, Lak Lake's water is calm, ringed by highland forest and farmland, blending seamlessly with the broad, rolling terrain of the Central Highlands.",
    distinguish:
      "Lak Lake and Ba Be Lake are both important natural freshwater lakes in Vietnam, but Lak Lake sits on the Central Highlands' basalt plateau, surrounded mainly by farmland and forest, while Ba Be sits in the northern limestone mountains, surrounded mainly by steep cliffs.",
    concept:
      "As a natural lake on the Central Highlands, Lak Lake is a sample for studying the relationship between surface water distribution and ecosystems on a basalt plateau.",
    history:
      "The lake's surrounding ecosystem is home to several species listed in Vietnam's Red Data Book of endangered species, making it an important ecological conservation area on the Central Highlands.",
  },
  "red-river": {
    // 全六段 sources: 全长约 1149 km（各来源 1149–1200 收敛），源出中国云南、经河内注入北部湾。跨境表述中性。核实 2026-09-11，未改动
    seeing:
      "The Red River rises in China's Yunnan province, flows through north-western Vietnam, and joins Vietnam's lowland river system near Hanoi, running about 1,149 km in total and the main river system of northern Vietnam.",
    formation:
      "The river takes its name from the large volume of red-coloured sediment it carries; long-term deposition of this sediment in the lower plain has shaped today's Red River Delta.",
    observation:
      "From the air, the Red River winds between the mountains and plains of northern Vietnam, its water a muddy reddish-brown from the heavy sediment load, with Hanoi's urban area spread along both banks.",
    distinguish:
      "The Red River and the Vietnamese stretch of the Mekong are both important international rivers in Vietnam, but the Red River rises in China's Yunnan and flows through northern Vietnam, while the Mekong's Vietnamese stretch lies in the south with a much denser channel network.",
    concept:
      "The large sediment load carried by the Red River is a key factor shaping the landform of northern Vietnam's plain, making it an important sample for studying how a transboundary river's deposition shapes a downstream delta plain.",
    history:
      "The Red River's banks have long been the core area of population and civilisation in northern Vietnam, and Hanoi has developed around this river system to this day.",
  },
  "mekong-river-vn": {
    // 全六段 sources: ✅ **本条没给湄公河总长数字**，恰好避开了同批泰国条目那个「各口径 4350–4909 km 差异极大」的坑 —— 进越南后分前江、后江两支、南部多口入海，只写可核的分流事实。核实 2026-09-11，未改动
    seeing:
      "Within Vietnam the Mekong splits into two main branches, the Tien and Hau rivers, with a dense network of channels before finally splitting into multiple mouths along Vietnam's southern coast.",
    formation:
      "Sediment long carried by the Mekong has deposited in southern Vietnam, shaping a delta water network dense with channels and man-made canals; the area around My Tho is an important river-transport hub in southern Vietnam.",
    observation:
      "From the air, the Vietnamese stretch of the Mekong splits into numerous channels in a densely interwoven water network, with rice paddies and orchards lining both banks and boats moving between the various branches — a classic water-town landscape.",
    distinguish:
      "The Vietnamese stretch of the Mekong and the Red River are both important international rivers in Vietnam, but the Mekong's Vietnamese stretch lies in the south with a dense channel network, while the Red River rises in China's Yunnan and flows through the north.",
    concept:
      "The dense channel network of the Mekong's Vietnamese stretch is a classic sample for studying how a great river splits into a complex delta water system before reaching the sea.",
    history:
      "Riverside towns such as My Tho have long served as important water-transport trading posts in southern Vietnam, and the Mekong's water system remains central to local livelihoods today.",
  },
  "perfume-river": {
    // 全六段 sources: 阮朝 1802–1945 年定都顺化；顺化古迹群 1993-12 列入 UNESCO，为越南首个世界遗产（whc.unesco.org/en/list/678，1 级）。核实 2026-09-11，未改动
    seeing:
      "The Perfume River rises in the Truong Son Range, flows through the former Vietnamese capital of Hue, and empties into a coastal lagoon; it takes its name from the faint fragrance the water carries after cinnamon bark and medicinal herbs fall into it from the forests along its course.",
    formation:
      "The river's upper course runs through the Truong Son Range's mountains; in its middle and lower reaches it slows as it crosses the Hue basin, its banks comparatively flat and well suited to the siting of an ancient capital.",
    observation:
      "From the air, the Perfume River is broad and calm as it passes through Hue, with the Nguyen dynasty's imperial citadel and several royal tombs lined along its banks, forming a river landscape that combines natural and cultural features.",
    distinguish:
      "The Perfume River, the Red River, and the Vietnamese stretch of the Mekong are all important rivers in Vietnam, but the Perfume River is comparatively short and flows mainly through the Hue area, while the Red River and the Mekong's Vietnamese stretch are transboundary rivers with much larger basins.",
    concept:
      "The siting of the Nguyen dynasty's imperial citadel and tombs along the Perfume River is a sample for studying how an ancient Vietnamese capital was planned and built around a river landform.",
    history:
      "The Nguyen dynasty (1802–1945) made Hue its capital; the imperial citadel and tombs along the Perfume River bear witness to the rise and fall of Vietnam's last feudal dynasty, and the Complex of Hue Monuments was inscribed on the UNESCO World Heritage List in 1993.",
  },
  "trang-an-landscape-complex": {
    // 全六段 sources: 面积 6226 ha；石灰岩演化逾 2.5 亿年；洞穴考古显示逾 3 万年连续人类活动；2014 年列入，为**越南首个文化与自然混合遗产**。核实 2026-09-11，未改动
    seeing:
      "The Trang An Landscape Complex is a valley in Ninh Binh Province where karst towers interweave with underground waterways, covering about 6,226 ha, its valleys threaded with submerged caves navigable by small boat.",
    formation:
      "The limestone landform has been evolving for more than 250 million years; long groundwater dissolution has carved a network of interlocking underground waterways and caves between the towers, some navigable by small boat between different valleys.",
    observation:
      "From the air, Trang An's karst towers stand close together, its valleys and waterways interconnected; boating through the caves is the classic way to explore the area, with temples and rice paddies dotting the valley floor between the towers.",
    distinguish:
      "Trang An and Ha Long Bay are both limestone karst landforms, but Trang An is an inland combination of valleys and underground waterways, while Ha Long Bay is a drowned tower-island group at sea.",
    concept:
      "The dense underground waterway system within Trang An is an important sample for studying how surface karst towers and underground cave-water systems co-evolve.",
    history:
      "Archaeological findings confirm roughly 30,000 years of continuous human adaptation to the changing environment in this area; in 2014 Trang An was inscribed on the UNESCO World Heritage List as Vietnam's first mixed cultural and natural heritage site.",
  },
  "tu-san-canyon": {
    // 全六段 sources: 深度各来源 700–800 m 与 900–1000 m 两说，正文取较保守的 700–800 m（越通社 VietnamPlus，2 级）；马匹粮山口为经典观景点。⚠️ 红线：正文只写峡谷与观景，未涉边界。核实 2026-09-11，未改动
    seeing:
      "Tu San Canyon, on the Dong Van Karst Plateau, is one of the deepest canyons in Southeast Asia at roughly 700–800 m deep; the Ma Pi Leng Pass is the classic viewpoint for the full canyon.",
    formation:
      "The Nho Que River has long cut down along a limestone fault line, shaping near-vertical cliffs on both sides; the canyon's depth continues to increase as the river's erosion continues.",
    observation:
      "From the air, the Nho Que River winds along the canyon floor, its near-vertical cliff walls a stark visual contrast with the undulating peak-cluster landform of the Dong Van Karst Plateau around it.",
    distinguish:
      "Tu San Canyon and the Dong Van Karst Plateau share the same geological unit, but Tu San Canyon is a specific deep-cut gorge landform on the plateau, while the Dong Van Karst Plateau is the whole tableland it sits within.",
    concept:
      "As one of the deepest canyons in Southeast Asia, Tu San Canyon is an important sample for studying how a river cutting down along a fault line shapes a deep gorge landform.",
    history:
      "The Ma Pi Leng Pass, the classic viewpoint over the canyon, is an important geological-tourism node on the Dong Van Karst Plateau.",
  },
  "ban-gioc-waterfall": {
    seeing:
      "Ban Gioc Waterfall, on the Quay Son River at the Vietnam-China border, is about 300 m wide with a drop of about 30 m — Asia's largest transboundary waterfall and the largest waterfall in Vietnam.",
    // 全六段 sources: ⚠️ 零争议红线 —— 原 formation / concept / history 三段都把**边界线**写进了正文（「沿边境线一分为二」「国际边界线自然划定」「沿边境线分布」），本轮一并改为纯地貌表述。瀑布宽约 300 m、落差约 30 m、为亚洲规模最大的跨境瀑布，这些是中性地理事实、保留；「跨境河流」作为中性地理描述也保留（与本库克罗地亚等国的处理一致）。核实 2026-09-11
    formation:
      "The bedrock of this river stretch is limestone; long water erosion has shaped a stepped cascade in the riverbed, and near the top the flow is split by an island in the river into a main fall and a smaller secondary one, each dropping as its own curtain of water.",
    observation:
      "From the air, Ban Gioc's water drops in several tiers, limestone cliffs and karst landforms on both banks setting off the scene, with a clear emerald pool below the falls.",
    distinguish:
      "Ban Gioc Waterfall and Tu San Canyon are both landforms shaped by flowing water, but Ban Gioc is a stepped waterfall on a transboundary river, while Tu San Canyon is a deep-cut gorge on the plateau.",
    concept:
      "As Asia's largest transboundary waterfall, Ban Gioc is a sample for studying how long-term river erosion shapes a stepped waterfall.",
    history:
      "The waterfall lies on a downstream stretch of the Quay Son River and is a well-known natural landmark in the area.",
  },
  "red-river-delta": {
    // 全六段 sources: ✅ **口径分得很清**：越南统计口径里「红河三角洲经济社会区」（含 11 省市的行政规划区）约 2.13 万 km²，而地貌意义上的冲积平原本身约 1.5 万 km² —— 正文写的是「三角形冲积平原」，采用地貌口径正确，**没有与行政区划口径混淆**。河内（升龙）1010 年李朝定都。核实 2026-09-11，未改动
    seeing:
      "The Red River Delta is a triangular alluvial plain built up by long-term sediment deposition from the Red River and its tributaries, covering about 15,000 km² and one of Vietnam's two main agricultural core regions.",
    formation:
      "Sediment long carried by the Red River has deposited near its mouth, forming today's low, flat delta plain, with most areas under 3 m in elevation.",
    observation:
      "From the air, the Red River Delta is broad and flat, densely interwoven with rice paddies and villages; both Hanoi and Hai Phong are built on the delta, with river channels winding through the plain.",
    distinguish:
      "The Red River Delta and the Red River itself are different stretches of the same river system: the Red River specifically refers to the main channel from China's Yunnan to Hanoi, while the Red River Delta refers to the low-plain landform built by sediment deposition near the river's mouth.",
    concept:
      "As one of Vietnam's two main agricultural core regions, the Red River Delta is an important sample for studying how long-term deposition at a great river's delta shapes a dense agricultural plain.",
    history:
      "The Red River Delta has long been the most densely populated and agriculturally developed region of northern Vietnam, and Hanoi's history as a capital dates back to the 11th century.",
  },
  "mekong-delta": {
    // 全六段 sources: 越南境内约 3.9–4.05 万 km²；✅ 正文写「世界最大河流三角洲**之一**」而非具体排名（公认排在亚马逊、恒河—布拉马普特拉之后第三），**说不出精确排名就降级为不带排名的表述**，符合本库规范。核实 2026-09-11，未改动
    seeing:
      "The Mekong Delta is the vast alluvial plain the Mekong builds in southern Vietnam before reaching the sea, covering about 39,000 km² and one of the largest river deltas in the world.",
    formation:
      "Sediment long carried by the Mekong has deposited near its mouths, and a dense network of channels and man-made canals has further shaped the delta's distinctive water-town landform on this base.",
    observation:
      "From the air, the Mekong Delta is crisscrossed with channels and canals, extensive rice paddies and orchards covering the plain, with floating markets lining the waterways — a classic tropical river-delta water-town landscape.",
    distinguish:
      "The Mekong Delta and the Vietnamese stretch of the Mekong are different scales of the same river system: the river's Vietnamese stretch refers to the main channel and major branches, while the Mekong Delta refers to the whole alluvial plain landform built near the river's mouths.",
    concept:
      "As one of the largest river deltas in the world, the Mekong Delta is a classic sample for studying how long-term deposition at a great river's delta shapes a dense agricultural and waterway network.",
    history:
      "The Mekong Delta is Vietnam's main rice and aquaculture production region, and traditional water-town ways of life such as floating markets continue there to this day.",
  },
  "ngu-hanh-son": {
    seeing:
      "Ngu Hanh Son (the Marble Mountains) is a cluster of five low marble hills on the coast south of Da Nang, each named after one of the five classical elements, with Thuy Son (\"Water Mountain\") the tallest.",
    formation:
      "The massif's bedrock is marble; long dissolution and weathering have carved numerous natural caves within the hills, each of the five standing independently above the flat terrain around it.",
    observation:
      "From the air, the five low marble hills are scattered across the flat coastal land, a sharp contrast with the level terrain around them, their internal caves hiding Buddhist and Hindu rock-cut sculptures.",
    distinguish:
      "Ngu Hanh Son and Ba Na Hills are both representative landforms around Da Nang, but Ngu Hanh Son is a set of low coastal hills known for its marble caves and religious grottoes, while Ba Na Hills is a high-elevation peak known for its cloud climate and cable-car resort.",
    concept:
      "Ngu Hanh Son's hills rising independently from flat land are a sample for studying how a marble body left standing as isolated residual hills through differential weathering on flat terrain.",
    // history sources: 占婆造像约 10 世纪中叶、佛寺兴建记载见于 18 世纪（五行山管委会官网，1 级）。核实 2026-09-12
    history:
      "The Cham-style Hindu carvings in the hills date to around the 10th century, while the Buddhist temples are much later, with recorded construction in the 18th century, making it an important religious and geological tourism site in central Vietnam.",
  },
};
