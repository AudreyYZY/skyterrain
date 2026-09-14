import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // Kashgar / Hotan / Turpan (city) / Bachu / Makit (Maigaiti)
  // These 5 `settlement` writeups were removed 2026-09-04 (category retired, see
  // docs/terrain-taxonomy.md §8); content rewritten as travel-mode TravelGuides,
  // see lib/travel-content.en.ts.

  // ============ North America · United States ============
  "rocky-mountains": {
    // seeing sources: 长约 4800 km、最高峰埃尔伯特山 4401 m、拉勒米造山运动约 8000 万—5500 万年前、
    //   科罗拉多五十余座 14,000 英尺峰 —— 2026-09-09 逐句核实，全篇 6 板块无误，本轮无需改动。
    seeing:
      "The Rocky Mountains are the backbone of western North America, running about 4,800 km from British Columbia in Canada to New Mexico in the United States. They carry the Continental Divide — rivers on the two sides of the crest drain to the Pacific and (via the Gulf of Mexico) to the Atlantic. The highest peak on the U.S. side is Mount Elbert in Colorado, about 4,401 m.",
    formation:
      "The Rockies largely formed in the Laramide orogeny, roughly 80 to 55 million years ago. The general view is that an oceanic plate then subducted at a very shallow angle beneath North America, buckling continental crust far inland. The core of the ranges is ancient Precambrian crystalline rock; once uplifted it was carved by rivers and Quaternary glaciers into today's spires, cirques and U-shaped valleys. Colorado alone has more than fifty peaks above 4,267 m (14,000 ft).",
    observation:
      "From the air the Rockies are a broad, roughly north–south belt of high mountains of uneven width, with a sharp edge against the Great Plains to the east — plain on one side, peaks on the other, with almost no foothill transition. In summer, bare grey rock and lingering snow lie above the tree line and dark conifer forest below it; many of the intermontane basins are open high country, known locally as \"parks\". The volcanic and fault-block country around Yellowstone and the Tetons is a distinctive stretch.",
    distinguish:
      "The Rockies and the Appalachians to the east both run broadly north–south, but the Rockies are young and high, with modern glaciers and peaks over 4,000 m; the Appalachians are old, low and rounded, topping out below 2,100 m. Versus the Sierra Nevada: the Sierra is a single tilted granite fault block along the edge of California, gentle on the west and steep on the east; the Rockies are a collection of parallel ranges with high basins between them.",
    concept:
      "The Rockies are a mountain system, not a single range — dozens of roughly parallel ranges with broad valleys and high country between them. A common misconception is to call all of the mountainous American West \"the Rockies\": the Pacific-side Coast ranges, the Sierra Nevada and the Cascades are not part of the Rockies, and arid uplands such as the Great Basin lie between them.",
    history:
      "The Rockies were long home to, and a travel corridor for, many Native American nations. The 19th-century fur trade, the Colorado gold rush and the building of the transcontinental railroad drove the growth of mountain settlements. The ranges hold Yellowstone (established 1872, among the first national parks in the world), Rocky Mountain and Grand Teton national parks.",
  },

  "appalachian-mountains": {
    // seeing sources: 长约 2400 km、最高峰米切尔山 2037 m、4.8 亿—2.6 亿年前造山、
    //   阿巴拉契亚步道约 3500 km / 跨 14 州 —— 2026-09-09 逐句核实，全篇 6 板块无误。
    seeing:
      "The Appalachian Mountains run about 2,400 km along the eastern edge of North America, from Newfoundland in Canada to Alabama in the United States. They are not high — the highest, Mount Mitchell, is about 2,037 m — but they are continuous, parallel and heavily forested, the main topographic barrier of eastern North America, and long an obstacle to European settlers moving inland.",
    formation:
      "The Appalachians are an ancient fold mountain belt, raised mainly in a series of continental collisions between about 480 and 260 million years ago that ultimately assembled the supercontinent Pangaea; they are generally thought to have stood as high then as the Alps do today. Hundreds of millions of years of erosion since have worn them down and rounded them, so that what is seen now is the resistant rock layers of a stripped-down old range — a set of parallel long ridges with valleys between them, the \"Ridge and Valley\".",
    observation:
      "From the air the Appalachians are a set of rounded, parallel ridges trending south-west to north-east, of similar crest height, with no standout peaks; the range is forested almost end to end in mixed hardwood and conifer, turning colour widely in autumn. A wide valley (the Great Valley) runs the length of the belt through its middle. In the south, the Great Smoky Mountains often carry a blue-grey haze over the ridgetops.",
    distinguish:
      "Among \"American mountains\" the Appalachians are most easily confused with the Rockies. The test: the Appalachians are old, low, rounded, continuous, forested almost throughout, and have no modern glaciers; the Rockies are young, high, with bare rock spires, peaks over 4,000 m and modern glaciers. The Appalachians are comparable to Europe's Ural Mountains — both are ancient fold ranges planed down by long erosion.",
    concept:
      "The Appalachians are a classic old fold mountain range: their significance is not in height but in the record of a continental collision. A common misconception is that \"low means unimportant\" — they set the river drainage divide, the climate zones and the early population pattern of eastern North America. \"Appalachia\" is also used for a larger cultural-geographic region that does not exactly match the mountains as a landform.",
    history:
      "The Appalachians are the traditional homeland of the Cherokee and many other Native American nations. From the 18th century, a few passes such as the Cumberland Gap became the routes by which settlers crossed the mountains into the Ohio Valley. Appalachian coal underpinned U.S. industrialisation in the 19th and 20th centuries. The roughly 3,500 km Appalachian National Scenic Trail follows the crest through 14 states.",
  },

  "sierra-nevada-us": {
    // seeing sources: 长约 640 km、惠特尼山 4421 m（本土 48 州最高峰，限定语正确）、内华达岩基逾 1 亿年、
    //   断块抬升 + 冰川雕刻的机制表述准确 —— 2026-09-09 核。
    //   **条目已主动澄清它与西班牙的 Sierra Nevada 同名不同地** —— 同名不同地正是本项目反复踩的一类，
    //   这里处理得当。
    seeing:
      "The Sierra Nevada is a range in eastern California about 640 km long, running north–south. Its western slope rises gently from the Central Valley; its eastern side drops as a steep fault scarp into the Owens Valley, a fall of up to about 3,000 m. The high point, Mount Whitney, is about 4,421 m — the highest peak in the 48 contiguous United States. Winter moisture off the Pacific falls here as heavy snow, making the range an important natural reservoir for California.",
    formation:
      "The core of the Sierra Nevada is a large body of granite that cooled deep underground more than 100 million years ago (the Sierra Nevada batholith). A few million years ago, crustal extension tilted the whole block up along a fault on its eastern edge and westward, producing today's fault-block mountain, gentle west and steep east. Quaternary glaciers carved the upper range into spires, cirques and U-shaped valleys; Yosemite Valley is a well-known example.",
    observation:
      "From the air the Sierra Nevada is a straight north–south wall, its eastern fault scarp standing knife-cut above the flat Owens Valley with a very clear boundary; the western side is a long series of steadily descending forested slopes. Broad exposures of pale granite and alpine lakes lie along the crest, with giant sequoia and pine forest lower down. Lake Tahoe is a large deep-blue lake at the northern end of the crest.",
    distinguish:
      "The Sierra Nevada and the Rockies to the east are both \"mountains of the American West\"; the difference is that the Sierra is a single granite fault block — one continuous crest, gentle west and steep east — while the Rockies are a collection of parallel ranges. Versus the Cascades: the Cascades are a line of separate volcanic cones (Rainier, St. Helens and others); the Sierra Nevada has no active volcanoes and is the product of fault-block uplift and glacial carving. It shares its name with Spain's Sierra Nevada but is unrelated.",
    concept:
      "The Sierra Nevada is a classic fault-block mountain — not folded up, but a single slab of crust lifted and tilted along a fault. A common misconception is to group it with volcanic ranges: there has been almost no Quaternary volcanic activity in the range. \"Sierra\" is Spanish for a jagged, saw-toothed ridge — a description of its skyline.",
    history:
      "The Sierra Nevada is the traditional homeland of the Paiute, Maidu and other Native American nations. Gold was found in the western foothills in 1848, setting off the California Gold Rush and a large influx of people. The range holds Yosemite, Sequoia and Kings Canyon national parks, which protect the giant sequoia — the largest tree in the world by volume.",
  },

  "cascade-range": {
    seeing:
      "The Cascade Range is a volcanic mountain range in the Pacific Northwest of North America, running from southern British Columbia in Canada into northern California. Its signature is a line of widely spaced, steep-sided stratovolcano cones, of which Mount Rainier, about 4,392 m, is the highest and is an active volcano. The range separates the wet coastal region from the dry interior plateau.",
    // formation sources: 雷尼尔山 4392 m；卡斯卡迪亚俯冲带的火山弧机制（约 100 km 深处脱水熔融产生岩浆）与地质教材一致；
    //   1980-05-18 圣海伦斯侧向喷发 —— 2026-09-09 核，全篇 6 板块无误。
    formation:
      "The Cascades are a subduction-zone volcanic arc: the Juan de Fuca plate subducts beneath North America from the west, melting at about 100 km depth to produce magma that rises to build volcanoes. The range has two parts — an older, eroded base of volcanic rock in the west, and a line of young stratovolcanoes sitting on it (Rainier, Adams, St. Helens, Hood, Shasta and others). Mount St. Helens had a major lateral eruption in 1980.",
    observation:
      "From the air the bulk of the Cascades is a forested belt of moderate height; what stands out is the handful of symmetrical, permanently snow-capped volcanic cones rising alone out of that belt — one or two thousand metres above the surrounding ridges, and easy to pick out. Dense temperate rainforest lies west of the crest; east of it the land turns quickly to dry open woodland and shrub. Crater Lake in Oregon is a deep-blue caldera lake in a collapsed volcano.",
    distinguish:
      "The Cascades meet the Sierra Nevada in the American West (around Mount Shasta in northern California), but their origins are entirely different: the Cascades are an active subduction-zone volcanic arc, with symmetrical cones and eruptive histories; the Sierra Nevada is an inactive granite fault block. Versus the Rockies: the Cascades are near the coast and volcanic; the Rockies are interior and have no active volcanoes.",
    concept:
      "The Cascades are a classic volcanic arc — the peaks were not squeezed up but built one volcano at a time, which is why they stand isolated and symmetrical. A common misconception is to treat the range as an ordinary fold mountain: several of its main peaks are active volcanoes with eruption potential, monitored continuously by the U.S. Geological Survey.",
    history:
      "The Cascade volcanoes appear in the oral traditions of many Native American nations. In the 19th century, emigrant wagon trains had to cross the range's passes to reach the Willamette Valley in Oregon. The range holds Mount Rainier, Crater Lake and North Cascades national parks; after its 1980 eruption Mount St. Helens was set aside as a national volcanic monument for the study of ecological recovery.",
  },

  "alaska-range": {
    // seeing sources: 海拔 **约 6190 m**，USGS **2015 年**实测（此前流传 6,194 m）——
    //   https://www.usgs.gov/news/national-news-release/new-elevation-nations-highest-peak（1 级，2026-09-09 核）。
    //   **名称问题按零争议红线处理，正文不断言哪个是「官方名」**：
    //   联邦名 2015 年由 McKinley 改为 Denali，2025 年 1 月的行政令与 2 月的内政部命令又把 GNIS 主名
    //   改回 Mount McKinley（迪纳利国家公园与保护区的名称未变，阿拉斯加州政府仍用 Denali）。
    //   **这不是地质意义上的不确定，而是会随执政更替反复变的政治决定** —— 断言任何一方都会
    //   ① 过期、② 读作立场表态。现在两个名字并列、都说明在使用。
    //   山脉长约 650 km；迪纳利断层走滑 + 太平洋板块推挤（Yakutat 地体碰撞）驱动抬升；
    //   迪纳利国家公园 1917 年设立、约 2.4 万 km² —— 均核实无误。
    // seeing sources: 2026-09-13 核（抽样 seed=8）：长度两说 —— Britannica 约 400 mi（650 km）、Wikipedia 约 600 mi（970 km），差异来自西南端点划法，并列两说
    seeing:
      "The Alaska Range is an arc-shaped range in south-central Alaska, about 650 to 970 km long depending on where its south-western end is drawn, separating the Pacific coast from the Alaskan interior. Rising from its middle is the highest peak in North America, Denali, about 6,190 m (measured by the U.S. Geological Survey in 2015). The peak goes by two current names — Denali, from a local Native language, meaning \"the high one\", and Mount McKinley — and both are in use. Because the lowland at its base is so low, Denali's rise from base to summit is among the greatest of any land mountain on Earth.",
    formation:
      "The Alaska Range runs along a large strike-slip fault (the Denali Fault) and is the result of the Pacific-side plate pushing north, compressing and displacing crust upward; it is still slowly rising and is seismically active. The rock is mostly sedimentary and granitic, and the upper range is covered by huge valley glaciers — the Kahiltna and others flow tens of kilometres down from around Denali.",
    observation:
      "From the air the Alaska Range is a continuous white wall of snow mountains lying between the green interior lowland and the coast to the south. Denali and neighbouring Mount Foraker stand well above the main crest, their upper parts under permanent snow and threaded with glaciers, many of which end in the lowland as grey meltwater rivers and braided channels. North of the range is open tundra and boreal forest, and beyond that no more high mountains.",
    distinguish:
      "The Alaska Range and the Rockies are both major North American mountain systems, but the Alaska Range is at high latitude and far more heavily glaciated — the whole upper range is under ice, whereas the Rockies carry only small glaciers on a few high summits. It runs parallel to the coastal Chugach and Wrangell ranges and is the more inland one.",
    concept:
      "Two figures for Denali's height are often confused: an elevation of about 6,190 m (above sea level), and a base-to-summit rise of about 5,500 m measured from lowland at roughly 600 m. The first makes it the highest point in North America by elevation; the second explains why it looks so tall from below. The mountain has two names in use: Denali (from a local Native language, meaning \"the high one\") and Mount McKinley.",
    history:
      "The Alaska Range area is the traditional land of several Athabaskan-speaking Native nations. Denali National Park and Preserve, established in 1917, covers about 24,000 km² and is an important area for observing northern ecosystems and for mountaineering.",
  },

  "colorado-plateau": {
    seeing:
      "The Colorado Plateau spans the meeting point of Colorado, Utah, Arizona and New Mexico (the \"Four Corners\"), an area of about 337,000 km². It is a high, arid tableland, averaging roughly 1,500 to 2,100 m, cut into countless deep canyons by the Colorado River and its tributaries. It concentrates a set of national parks famous for bare rock layers and red landforms — the Grand Canyon, Monument Valley, Arches, Zion, Bryce.",
    formation:
      "The Colorado Plateau is built of roughly flat-lying sedimentary rock (sandstone, shale, limestone) recording hundreds of millions of years of deposition. Since the start of the Cenozoic the whole plateau has been raised about 1,500 to 2,000 m fairly evenly, without the layers being folded — they stay horizontal. After uplift, rivers cut down hard, carving the tableland into mesas, buttes and canyons; the dry climate keeps the colour and bedding of the layers clearly visible.",
    observation:
      "From the air the Colorado Plateau is a large, reddish-brown upland of low relief, its surface split by a branching network of dark canyons — the Colorado River system. The plateau's edges are often stepped, retreating cliffs (a \"staircase\"); isolated mesas and volcanic necks dot the surface. Vegetation is sparse and rock is exposed — it is one of the easiest landscapes anywhere to \"read\" rock structure from above.",
    distinguish:
      "The Colorado Plateau and the Tibetan Plateau are both \"plateaus\", but the Tibetan Plateau was squeezed up by continental collision, sits above 4,000 m and has strongly deformed rock; the Colorado Plateau is only 1,500 to 2,100 m, its layers are essentially flat, and it was raised evenly as a block. Versus the neighbouring Great Basin: the Great Basin has been pulled apart into a set of fault troughs and parallel ranges; the Colorado Plateau is one intact block that was not torn.",
    concept:
      "The Colorado Plateau shows that what matters for a \"plateau\" is a large area raised relatively intact — not necessarily great height. A common misconception is that canyons were \"ripped open\": the Grand Canyon was sawn down over millions of years by the Colorado River, faster where the plateau rose faster. Flat layers plus a dry climate make this a classic region worldwide for studying sedimentary rock and river erosion.",
    // history sources: **「Anasazi」是 NPS 已弃用的他称** —— 纳瓦霍语词，本意接近「敌人的祖先」；
    //   霍皮等普韦布洛部落自 1990 年代起提出异议，梅萨维德等国家公园的官方材料改用
    //   Ancestral Puebloan / Ancestral Pueblo people ——
    //   https://www.nps.gov/meve/learn/historyculture/upload/ancestral_pueblo_people_2018_508_01-24-18-2.pdf（1 级，2026-09-09 核）。
    //   **这同时是一处中英不同步**：英文版本身没有这个括注，只有中文加了 —— 已删。
    //   **族群名称的「哪个词现在还在用」是会变的**，与地名更名同类，要按管理机构的现行用法写。
    //   高原面积约 33.7 万—34 万 km²、平均海拔 1500—2100 m、抬升 1500—2000 m 而岩层未褶皱、
    //   纳瓦霍族保留地为美国面积最大的印第安保留地，均核实无误。
    history:
      "The Colorado Plateau is home to the Navajo, Hopi, Ute and other Native nations; the Navajo Nation is the largest Indian reservation in the United States, and places such as Monument Valley are managed by Navajo Parks. The plateau also holds many Ancestral Puebloan cliff-dwelling sites, such as Mesa Verde. Today it is dominated by its cluster of national parks and outdoor tourism.",
  },

  "grand-canyon": {
    seeing:
      "The Grand Canyon is the vast canyon the Colorado River cut through the Colorado Plateau, in northern Arizona — about 446 km long, up to about 29 km wide, and up to about 1,857 m deep. Its walls of clearly bedded red and yellow rock record nearly 1.8 billion years of Earth history. Most visitors look out from the South Rim, at about 2,100 m.",
    formation:
      "The continuous canyon seen today is, on the mainstream view, the work of the past 5 to 6 million years, as the Colorado River kept cutting down while the Colorado Plateau rose and linked up several older palaeocanyon segments — some cut nearly to their present depth as long as about 70 million years ago. The timing and mechanism of the individual segments are still debated. The river does the \"cutting deeper\"; wall retreat and side gullies do the \"widening\"; and the dry climate slows collapse and plant cover, keeping the layers sharp. The Vishnu Schist exposed at the bottom is about 1.8 billion years old, among the oldest rock in North America; the Kaibab Limestone at the top is about 270 million years old.",
    observation:
      "From the air the Grand Canyon is an extremely deep, wide, crook-edged gash in the plateau surface; inside are stepped-back terraces and cliffs, colours shading from pale at the top to deep, from yellow to red to grey-black going down. A deep-green ribbon of river runs along the bottom. The North Rim is clearly higher than the South Rim and more forested. Low sun at sunrise and sunset makes the layering most three-dimensional.",
    distinguish:
      "The Grand Canyon and China's Yangtze Three Gorges are both canyons cut by a big river, but the Three Gorges is the Yangtze cutting across a mountain belt, with steep V-shaped rock walls; the Grand Canyon is the Colorado cutting into a plateau of flat layers, so its walls are stepped, wider and paler. Versus the Yarlung Tsangpo Grand Canyon: that one is deeper, narrower, wetter and more forested; the Grand Canyon is wider, drier and bare-rock.",
    concept:
      "The Grand Canyon is often wrongly called the \"deepest\" or \"largest\" canyon — by depth and length it is neither first (the Yarlung Tsangpo Grand Canyon is deeper and longer). What is genuinely special is its width, its continuous exposure of rock layers, and the way the dry climate makes about 1.8 billion years of geology legible at a glance. It is a classic case of river down-cutting combined with block uplift.",
    // history sources: NPS 官方的大峡谷国家公园「传统关联部落」共 11 个：Havasupai、Hopi、Hualapai、
    //   Kaibab Band of Paiute、Las Vegas Paiute、Moapa Band of Paiute、Navajo Nation、
    //   Paiute Indian Tribe of Utah、San Juan Southern Paiute、Pueblo of Zuni、Yavapai-Apache Nation ——
    //   https://www.nps.gov/grca/learn/historyculture/associated-tribes.htm（1 级，2026-09-09 核）。
    //   **原文写的「犹特（Ute）」不在名单里** —— Ute 与 Paiute 是两个不同的民族，名字相近极易混。
    //   **写族名要照着管理机构的官方名单核，不能凭发音相近推**。
    //   长 446 km / 最宽 29 km / 最深 1857 m、南缘约 2100 m、毗湿奴片岩约 18 亿年、
    //   凯巴布石灰岩约 2.7 亿年、1919 年设园、1979 年列入世界遗产，均核实无误。
    history:
      "The Grand Canyon and its surroundings have long been home to the Havasupai, Hualapai, Navajo, Hopi, Paiute and other Native nations, and tribal communities still live in and around the canyon. Grand Canyon National Park was established in 1919 and listed as a World Heritage site in 1979. Grand Canyon Village on the South Rim is the main visitor hub.",
  },

  "great-plains-us": {
    // seeing sources: 西部约 1800 m 降至东部约 500 m、奥加拉拉含水层、内布拉斯加沙丘、1930 年代黑风暴、
    //   100°W 与 500 mm 年降水线大致重合作为分界 —— 2026-09-09 核，全篇 6 板块无误。
    seeing:
      "The Great Plains are a broad, gently sloping plain east of the Rocky Mountains, running from the Prairie provinces of Canada down to Texas and several hundred kilometres wide. They fall from about 1,800 m in the west to about 500 m in the east so gradually that the slope is barely perceptible. Once continuous tall- and short-grass prairie with huge bison herds, they are now a major U.S. wheat, corn and cattle belt.",
    formation:
      "The material of the Great Plains came mostly from the Rocky Mountains — as the ranges rose, wind and rivers carried large amounts of debris and silt out onto the mountain front and spread it flat, building an east-tilted apron of sediment. Quaternary glaciers left till and loess in the north; the central-south has wind-blown dune fields (such as the Nebraska Sandhills). Beneath lies the vast Ogallala Aquifer, which supports the region's irrigated farming.",
    observation:
      "From the air the Great Plains are an endless, near-level pale yellow-green surface; what stands out is the regular grid of fields and the green discs left by centre-pivot irrigation. Rivers are among the few landform clues — they run out from the Rockies in the west and cut shallow, broad valleys across the plain. Near the mountains in the west there are flat-topped erosion remnants and badlands.",
    distinguish:
      "The Great Plains and China's North China Plain are both plains built by rivers moving sediment, but the North China Plain is the alluvial fans and floodplains of the Yellow River and others — extremely flat and densely populated; the Great Plains are mostly a piedmont \"alluvial-aeolian\" apron with a clear but gentle overall westward-to-eastward tilt, and are thinly populated. Compared with the wetter Central Lowland to the east, the Great Plains are higher, drier and more given to grazing.",
    concept:
      "The Great Plains remind us that a \"plain\" need not be near sea level. Their western edge reaches 1,800 m, yet because the surface is flat, continuous and built of sediment, it is still a plain, not a plateau. A common misconception is to lump them with the wetter \"Midwest farmland\" further east — the boundary between the two runs roughly along the 500 mm rainfall line (about the 100th meridian).",
    history:
      "The Great Plains were long the territory of the Cheyenne, Lakota (Sioux), Comanche, Blackfeet and other bison-based Native nations. The 19th-century railroads, the Homestead Act, and the near-extermination of the bison brought large-scale farming and ranching settlement. Poor farming practice plus drought in the 1930s produced the Dust Bowl. Today the region's agriculture is highly mechanised and many counties continue to lose population.",
  },

  "great-basin": {
    seeing:
      "The Great Basin is a large area of \"internal drainage\" between the Sierra Nevada and the Wasatch Range — rivers and snowmelt here never reach the ocean, ending instead in salt lakes, salt flats or by soaking into the ground. It covers about 500,000 km², filling almost all of Nevada and spilling into neighbouring states, and is one of the driest parts of North America. The Great Salt Lake is the remnant water body at its lowest point.",
    formation:
      "The Great Basin is the result of the crust being stretched east–west: blocks break along north–south normal faults, half rising into parallel ranges and half dropping into the valleys between, producing classic \"Basin and Range\" topography — dozens of north–south ranges lined up like a row of caterpillars. During the ice ages the basins held large lakes such as Lake Bonneville; most are now dry, leaving the Great Salt Lake and broad salt flats.",
    observation:
      "From the air the Great Basin is a strikingly regular set of north–south stripes: brown ranges alternating with pale, flat valleys, one after another. The valley centres often hold white salt flats or dry lake beds (playas). Vegetation is mostly grey-green sagebrush, thinning toward the basin floors. The Great Salt Lake is a shallow, salty, pinkish-white sheet of water in the north-east corner.",
    distinguish:
      "The Great Basin and the Tarim Basin are both dry, internally drained basins, but the Tarim is a single large basin ringed by high mountains with one continuous desert in the middle; the Great Basin is not a basin at all but a whole \"Basin and Range\" province of dozens of small basins and small ranges. Versus the Colorado Plateau: the plateau is an intact block that was not torn; the Great Basin is a block that was stretched apart.",
    // concept sources: 面积约 50 万 km²、盆岭构造的地壳抻张机制、邦纳维尔湖为冰期古湖、1847 年摩门教徒定居大盐湖畔 ——
    //   2026-09-09 核，全篇 6 板块无误。
    //   **「大盆地」有三个不完全重合的范围**：地貌省、水文内流区、沙漠生态区 ——
    //   **正文自己就把这一点写明了**，是正确写法的范例（与「戈壁」那篇分清地表类型与地名同一类处理）。
    concept:
      "The name \"Great Basin\" is misleading — it is not one bowl-shaped hollow but an area where all water is trapped inland, made of many small basins. The test is the drainage: any region whose rivers ultimately do not reach the sea and vanish inland is an area of internal drainage. It is at once a landform region (Basin and Range), a hydrologic region (internal drainage) and a desert region (the Great Basin Desert), and the three do not match exactly.",
    history:
      "The Great Basin is the traditional homeland of the Western Shoshone, Paiute, Washoe, Ute and other Native nations, who developed gathering and hunting practices suited to extreme drought. In the 19th century emigrant trains had to struggle across the basin to reach California; Mormon settlers established themselves by the Great Salt Lake in 1847. Today it holds Great Basin National Park, protecting ancient bristlecone pines and limestone caves.",
  },

  "death-valley": {
    // seeing sources: 望远镜峰 3,366 m、巴德沃特盆地 −86 m，高差 11,331 英尺（约 3,454 m）——
    //   NPS https://www.nps.gov/deva/planyourvisit/telescope-peak.htm（1 级，2026-09-09 核），与正文海拔差吻合。
    //   **水平距离约 15—17 英里（24—27 km）**（3 级，多来源一致）；NPS 官方页面本身没给这个距离。
    //   **原文的「约 30 公里」偏高 10%—25%，是一次性写错，不属于会被修正的动态数字。**
    seeing:
      "Death Valley is a deep north–south valley in eastern California, part of the Great Basin. Its floor at Badwater Basin lies at −86 m, the lowest point in North America, while Telescope Peak on its western side rises to 3,366 m — only about 24 to 27 km apart horizontally. Summers are extremely hot, among the hottest recorded anywhere on Earth, and it is the driest place in the contiguous United States.",
    formation:
      "Death Valley is a \"pull-apart basin\" — the crust has been stretched along faults so that the whole valley floor keeps dropping relative to the ranges on either side, while receiving debris washed down from the mountains. With almost no outlet and very strong evaporation, the floor has accumulated thick salt, mud and sand, forming large salt flats, cracked salt crust and seasonal shallow salt lakes. The alluvial fans along the valley edge are large and steep.",
    observation:
      "From the air Death Valley is a long, narrow trough between two brown ranges; the lowest part of the floor is a glaring white salt flat, edged by pale alluvial fans spreading out from the mountain mouths. In places there are wind-eroded yellow dunes and multi-coloured oxidised rock faces (the \"Artist's Palette\"). Almost no green shows along the valley, only small patches of vegetation near springs.",
    distinguish:
      "Death Valley and China's Turpan Basin are both hot, dry basins below sea level, but Turpan is a structural basin ringed by the Tianshan, kept as an oasis by karez channels bringing snowmelt; Death Valley is a fault-opened graben with almost no oasis, hotter and lower. Versus the Qaidam Basin: Qaidam is high, cold and dry; Death Valley is below sea level and extremely hot.",
    concept:
      "Death Valley shows that a \"basin\" is defined by form and drainage, not elevation — it lies below sea level and is still a basin (an internally drained one). A common misconception is to equate \"lowest\" with \"deepest\": Badwater is the lowest point relative to sea level, but the roughly 3,400 m difference between the valley floor and the adjacent summit is a better measure of how deep it is. Hiking on the valley floor in summer carries a real health risk.",
    history:
      "Death Valley is home to the Timbisha Shoshone, who still have a community within the valley. The name comes from a group of emigrants who became trapped here in the mid-19th century while looking for a shortcut. Borax was briefly mined here in the late 19th century and hauled out of the desert by twenty-mule teams. Death Valley National Park was established in 1994 and is one of the largest national parks in the contiguous United States.",
  },

  "mojave-desert": {
    // seeing sources: 海拔 600—1200 m、约书亚树为标志植物、内华达山脉与横断山脉的雨影机制、
    //   与大盆地（更冷、灌木荒漠）和索诺兰沙漠（夏季降水、柱状仙人掌）按降水季节与植被区分 ——
    //   2026-09-09 核，全篇 6 板块无误。
    seeing:
      "The Mojave Desert lies in south-eastern California, southern Nevada and the neighbouring corners of Arizona and Utah, wedged between the Great Basin to the north and the Sonoran Desert to the south. It is a relatively high desert, mostly 600 to 1,200 m. Its signature plant is the Joshua tree, a tall yucca that grows only in the Mojave. Las Vegas, Death Valley and Joshua Tree National Park are all within it.",
    formation:
      "The Mojave's dryness comes from rain shadow: Pacific moisture is stripped out by the Sierra Nevada and other ranges, leaving little by the time it reaches here. In landform terms it is part of the Basin and Range — broad basins between low fault-block ranges, the basins holding dry lake beds, salt flats and dunes. It too had lakes during the ice ages, now reduced to traces.",
    observation:
      "From the air the Mojave is an open surface of pale brown to pale red, dotted with isolated dark ranges and white dry lake beds. Around Joshua Tree National Park the ground is strewn with piles of dark granite boulders. Overall it is emptier than the Sonoran Desert to the south, with lower, sparser vegetation. Large solar power plants and dead-straight highways are conspicuous human marks.",
    distinguish:
      "The Mojave, Great Basin and Sonoran deserts meet in the American South-West. The test is mostly plants and rainfall season: the Great Basin is a \"cold desert\", with winter snow and dominated by sagebrush; the Sonoran is a \"hot desert\", with summer and winter rain and giant columnar saguaro cactus; the Mojave is in between, its rain concentrated in winter, marked by the Joshua tree.",
    concept:
      "The Mojave shows that desert boundaries are set mainly by climate and vegetation, not by a clear landform line. In landform terms the Mojave and the Great Basin are both Basin and Range — the Mojave is simply warmer and further south. A common misconception is that deserts are all low: most of the Mojave floor is above 600 m, higher than many humid regions.",
    history:
      "The Mojave Desert is the traditional land of the Mojave, Chemehuevi, Southern Paiute and other Native nations, and old trade routes crossed it linking the Colorado River with the Pacific coast. The 19th-century \"Old Spanish Trail\" and later Route 66 and the railroads all crossed on similar lines. Today it holds Joshua Tree and Mojave National Preserve, and the parts near Las Vegas are developing quickly.",
  },

  "great-lakes": {
    // seeing sources: 总面积约 24.4 万 km²、约占全球地表淡水两成、末次冰盖约 1.4 万年前退去 ——
    //   Michigan Sea Grant（2/3 级，2026-09-09 核）。
    //   **「密歇根湖与休伦湖在水文上是一体（经麦基诺水道连通、同一水位），习惯上算两个湖」——
    //   正文写明了这一点**，是正确写法；与东非大湖（裂谷成因）、里海（咸水、内流）的区分也写清了。
    seeing:
      "The Great Lakes are a set of connected large freshwater lakes in the middle of North America — Superior, Michigan, Huron, Erie and Ontario, running from west to east across the U.S.–Canada border. Their combined area is about 244,000 km², and they hold roughly a fifth of the world's surface liquid fresh water. Their water eventually reaches the Atlantic via the St. Lawrence River. Chicago, Toronto and Detroit are among the big cities on their shores.",
    formation:
      "The Great Lakes basins were mainly gouged out by Quaternary glaciers. As the ice sheet advanced south again and again, it scoured the ground deeper along belts of softer rock and piled up the sides; after the ice withdrew about 14,000 years ago, meltwater and the ice-depressed land together formed today's lakes. The crust is still slowly rebounding, so the shorelines are still adjusting.",
    observation:
      "From the air the Great Lakes are several huge, complex-edged sheets of deep-blue water, strung together like a chain opening to the south-east. Short channels and falls connect them (Niagara Falls sits between Erie and Ontario). In winter the lakes partly freeze and the downwind shores get heavy \"lake-effect\" snow. At night the shoreline cities run together in a band of light.",
    distinguish:
      "The Great Lakes and the African Great Lakes are both clusters of large freshwater lakes, but the African lakes mostly sit in crustal rifts and are deep and narrow; the Great Lakes were scraped out by glaciers and are relatively wide, shallow and irregular. Versus the Caspian Sea: the Caspian is an internally drained salt \"lake\" (really an enclosed sea); the Great Lakes are freshwater lakes with an outlet, linked to the ocean by the St. Lawrence.",
    concept:
      "The Great Lakes are named together but are not one lake: the five stand at different levels and drain step by step through connecting channels. Lakes Michigan and Huron are at the same surface elevation and joined by the wide Straits of Mackinac, so hydrologically they are one body (\"Lake Michigan–Huron\"), just conventionally counted as two. What makes a \"Great Lake\" is not whether it is connected but its area and volume.",
    history:
      "The shores of the Great Lakes are home to the Anishinaabe, Haudenosaunee (Iroquois), Huron and other Native nations, and the lakes were an important water route. The fur trade spread along them from the 17th century; in the 19th century canals (the Erie Canal and others) linked the Great Lakes to the Atlantic and the Mississippi system, driving the industrialisation of the American Midwest. Today the lakes are a major shipping, water-supply and fishing region, and face pressure from pollution and invasive species.",
  },

  yellowstone: {
    // seeing sources: 黄石破火山口 **85 × 45 km（53 × 28 mi）** —— USGS https://www.usgs.gov/volcanoes/yellowstone
    //   （1 级，2026-09-09 核）；原文写的 72×55 km 不是这个口径。
    //   三次超大规模喷发年代 **208 万 / 130 万 / 63.1 万年前**，与正文「过去约 210 万年、最近一次约 64 万年前」一致。
    //   **「超级火山即将喷发」一类说法**：YVO 明确表示没有迹象表明近期会喷发 —— 正文 concept 段的口径与此一致。
    //   **「世界上最早的国家公园之一」这句反而比 NPS 自己的表述更保守**（NPS 官网径直写 The World's First
    //   National Park），正文加了「之一」，稳妥。热点固定 + 北美板块西南移 + 斯内克河平原轨迹的机制与 USGS 一致。
    seeing:
      "The Yellowstone Plateau lies in the northern Rockies across Wyoming, Montana and Idaho, at about 2,400 m. It sits on top of a large active volcano — an underground magma chamber has domed the surface into an upland — and in the past 2.1 million years it has had three enormous eruptions, the most recent about 640,000 years ago, which collapsed a caldera about 85 by 45 km (53 by 28 miles). As a result the surface has the densest concentration of geysers, hot springs and mud pots in the world, and Yellowstone (1872) was one of the first national parks anywhere.",
    formation:
      "The energy of the Yellowstone volcano comes from a roughly fixed mantle hot spot. As the North American plate moves south-west, it has left a line of older eruptive centres trailing north-east (the Snake River Plain). The current magma chamber is still there, heating the surface: rain and snowmelt sink underground, are heated, and rise back along fractures; where they pass through travertine or silica plumbing they build geysers. The Grand Canyon of the Yellowstone is where the Yellowstone River has cut into volcanic rock stained yellow by hydrothermal alteration.",
    observation:
      "From the air the Yellowstone Plateau is a relatively gentle, forested upland among the peaks of the Rockies, with the shallow saucer outline of the giant caldera in the middle and ring-fracture ridges around the edge. The thermal areas are patches of white, grey and coloured bare ground in the sea of forest, steaming; Yellowstone Lake is a large water body inside the caldera. The Yellowstone River cuts a bright yellow canyon at the northern edge. Large fires have left stands of dead standing trees.",
    distinguish:
      "The Yellowstone Plateau and the Colorado Plateau are both \"plateaus\", but the Colorado Plateau is flat-lying sedimentary rock raised as a block — dry, known for canyons; the Yellowstone Plateau was pushed up by volcanism, is covered in volcanic rock and forest, and is known for hot springs and geysers. Versus Hawaii's shield volcanoes: Hawaii is an oceanic hot spot beneath thin plate, erupting mostly fluid lava; Yellowstone is a hot spot beneath thick continental crust, and its big eruptions are explosive.",
    concept:
      "Yellowstone is often called a \"supervolcano\", which can suggest a catastrophic eruption is imminent. The scientific statement is that it is an active volcano with a history of very large eruptions, currently in a quiet interval, monitored continuously by the U.S. Geological Survey's Yellowstone Volcano Observatory, with no sign of an eruption in the near future. The geysers and hot springs are the normal expression of residual magmatic heat, not a warning sign.",
    history:
      "The Yellowstone area was used for thousands of years for hunting and gathering by the Shoshone, Crow, Blackfeet, Nez Perce and other Native nations. In 1872 the U.S. Congress set it aside as a national park — the starting point of the national-park idea, later copied by many countries. Today Yellowstone is a World Heritage site and an important place for the study of volcanism, geothermal systems and wildlife (grizzly bears, wolves, bison).",
  },

  "yosemite-valley": {
    // seeing sources: 谷长 7.5 英里（约 12.1 km）、谷底约 4,000 英尺（约 1,200 m）—— NPS 溯源资料（3 级但直接标注 NPS 出处，2026-09-09 核）。
    //   正文「约 11 公里」比 NPS 数字略短约 10%，用了「约」字、海拔完全吻合，本轮不判为错；
    //   **若要更精确可改成「约 12 公里」**，记在这里供下一轮参考。
    //   **1864 年林肯签署的是优胜美地授地法案（州级保护），1890 年才设立国家公园** ——
    //   正文把两件事分开写了，没有把 1864 年说成建园年，处理正确。
    seeing:
      "Yosemite Valley is a deep valley about 11 km long in the Sierra Nevada, its floor at about 1,200 m, walled by nearly vertical pale granite cliffs — El Capitan, Half Dome, Sentinel Rock. The Merced River runs through it, and side streams drop straight off the rim as high waterfalls including Yosemite Falls. The valley is the heart of Yosemite National Park and one of the birthplaces of rock climbing.",
    formation:
      "Yosemite Valley was first cut by the Merced River along a structural weakness into a V-shape, then repeatedly scraped, deepened and widened into today's U-shape by valley glaciers over the Quaternary ice ages. Granite breaks apart along sets of parallel joints, producing single cliff faces like El Capitan and domes like Half Dome (Half Dome was not \"sliced in half\" by a glacier — the missing side's rock was never complete, and fell away as the joints allowed). After the ice retreated the valley floor was a lake, which filled with sediment to become the flat meadows.",
    observation:
      "From the air Yosemite Valley is a straight, flat-bottomed cleft in a sea of conifer forest, its walls bare, whitish granite, its floor green meadow and a winding river. El Capitan is a nearly vertical single face on the north side at the valley mouth; Half Dome is a round-topped dome with one side sheared flat at the eastern end. The falls run hardest at spring snowmelt, and some dry up by late summer.",
    distinguish:
      "Yosemite Valley and Norway's Sognefjord are both glacier-cut U-shaped valleys; the difference is that Sognefjord's floor is drowned by the sea to make a fjord, while Yosemite Valley is in the interior highlands with a river and meadows on its floor. Versus an ordinary river valley: a river valley is V-shaped in cross-section with slopes descending all the way; a glacial valley is U-shaped with steep straight walls and a flat floor, and often \"hanging valleys\" (side valleys left high on the main wall, from which waterfalls drop).",
    concept:
      "Yosemite Valley is a textbook glacial U-shaped valley. A common misconception explains Half Dome's shape as a glacier having \"cut off half\" of it — the geological evidence shows glaciers never overtopped Half Dome, and its shape is controlled mainly by granite jointing. Another misconception is that the granite here is volcanic: it is an intrusive rock that crystallised slowly deep underground, and was only later uplifted, exposed and glaciated.",
    history:
      "Yosemite Valley is the home of the Ahwahneechee (a group of the Southern Miwok); the name \"Yosemite\" comes from a neighbouring people's term for them. It became known to outsiders after gold seekers entered the mountains in the mid-19th century. In 1864 the U.S. federal government set Yosemite Valley aside for protection — one of the earliest acts anywhere by a government to reserve a natural landscape for the public; a national park followed in 1890. Today it is a World Heritage site.",
  },

  "mississippi-river": {
    // seeing sources: USGS：密西西比干流 **2,340 英里（约 3,766 km）**；密苏里—密西西比水系合计 **3,710 英里（约 5,971 km）**；
    //   流域约占美国本土 41%—42%（不同 USGS 出版物给 40%—42%）——1 级，2026-09-09 核。
    //   **正文已经把「干流」与「含最长支流」两套口径分开写了，是正确写法的范例** ——
    //   与塔里木河「约 2000 公里」、达令河「约 2700 公里」那两条把两套口径混成一个数的错正好构成对照。
    seeing:
      "The Mississippi River is the main stem of the largest river system in North America, rising at Lake Itasca in Minnesota and flowing about 3,700 km south to the Gulf of Mexico; measured from its longest tributary, the Missouri, the system is about 6,000 km long. Together with its tributaries it drains roughly 40% of the surface runoff of the contiguous United States. Its lower reaches run through a broad, flat floodplain, and its mouth is a \"bird's-foot\" delta reaching into the sea.",
    formation:
      "The plain the lower Mississippi crosses was itself built, layer by layer, by this river and its predecessors over millions of years, and by the sediment carried in Quaternary glacial meltwater. The channel swings freely across the plain, leaving many oxbow lakes and natural levees. At the mouth the current slows sharply, sediment drops out, and a branching delta builds seaward; because the sediment leaves through a few fixed passes, the shape resembles a bird's foot.",
    observation:
      "From the air the middle and lower Mississippi is a wide brown band looping back and forth across flat farmland, flanked by crescent oxbow lakes and abandoned channels, with built levees running along the banks. Toward the mouth the channel splits into several arms, edged by broad wetlands and mudflats sinking into the sea. Offshore of the delta the water is often stained yellow-brown for a large area.",
    distinguish:
      "The Mississippi Delta and the Yellow River Delta are both built by a heavily silt-laden river, but the Yellow River Delta is fan-shaped and its channel shifts drastically and often; the Mississippi's \"bird's-foot\" delta is a set of long fingers extended seaward along fixed passes, kept from shifting mainly by engineering. Compared with the Nile Delta, which is a classic triangle, the Mississippi is bird's-foot shaped.",
    concept:
      "The Mississippi shows that a large river has two sides to its landform work: erosion and transport dominate the upper and middle river, deposition dominates the lower river and mouth. A common misconception is that a delta only ever grows — in recent decades the Mississippi Delta has been shrinking, because upstream dams trap sediment, the channel is fixed for navigation and flood control, and the ground is subsiding, so the coastal wetlands are being lost.",
    history:
      "The Mississippi was long a central axis of life and travel for many Native nations, and its valley holds large earthwork-mound cities such as Cahokia. It served in turn as a border and trade route for France, Spain and the United States; 19th-century steamboats and later barge traffic made it the economic artery of the American interior. Today the U.S. Army Corps of Engineers manages the river with an extensive system of locks, levees and floodways.",
  },

  "central-valley-ca": {
    // seeing sources: 长约 400 英里（约 644 km）、平均宽约 50 英里（约 80 km）—— USGS 加州水科学中心（1 级，2026-09-09 核）。
    //   正文的「80 到 100 公里宽」上限略宽于平均值，但 USGS 自己也说局部更宽，落在合理范围内。
    seeing:
      "The Central Valley is a flat lowland about 650 km long and 80 to 100 km wide between the Sierra Nevada and the Coast Ranges of California. Its northern half is drained by the Sacramento River and its southern half by the San Joaquin River; the two meet in a delta that reaches the sea through San Francisco Bay. The climate is dry summers and wet winters, the soil is deep, and it is one of the most productive agricultural regions in the United States.",
    formation:
      "The Central Valley is a structural trough — with the Sierra Nevada rising on one side and the Coast Ranges on the other, the block between sank relatively and has long received debris and river sediment from the mountains on both sides, filling in to several kilometres of sediment. The valley once held large seasonal lakes and marshes (such as Tulare Lake), most of them drained since the late 19th century and turned into farmland.",
    observation:
      "From the air the Central Valley is an extremely flat green-to-brown ribbon among mountains, almost entirely covered by regular fields whose colour changes with the crop and the season. The Sacramento and San Joaquin rivers are among the few natural curves; the delta in the middle is a grid of leveed islands and channels. At the edges of the valley the mountains rise abruptly, with a clear boundary.",
    distinguish:
      "The Central Valley and China's Chengdu Plain are both structural basin-plains ringed by mountains and filled by river sediment, but the Chengdu Plain is the alluvial fan of the Min River — small, irrigated from the Dujiangyan works for over two thousand years; the Central Valley is much longer and relies on inter-basin water transfers and groundwater. Versus the Great Plains: the Great Plains are a gently tilted piedmont apron given to dryland farming and grazing; the Central Valley is a closed trough given to irrigated agriculture.",
    concept:
      "The Central Valley is a reminder that a \"plain\" can be the result of structural sinking plus sediment fill, not just a river spreading out over open ground. A recurring concern is groundwater: long-term over-pumping has caused parts of the valley floor to keep subsiding (locally by several metres), making it one of the best-known cases of land subsidence in the world.",
    history:
      "The Central Valley is the traditional home of the Yokuts, Miwok, Wintun and other Native nations. Gold was found at the valley's eastern edge in 1848, and California's population surged. From the late 19th century, large-scale drainage, irrigation canals and later the Central Valley Project and State Water Project turned it into an intensively farmed belt. Today the valley is also one of California's faster-growing and more air-quality-challenged regions.",
  },

  everglades: {
    // seeing sources: **全球唯一美洲鳄与短吻鳄野外共存之地** —— 美洲鳄分布的最北端与短吻鳄分布的最南端在此重叠
    //   （3 级转述 NPS 材料，2026-09-09 核）。
    //   **1947-12-06 建园，是美国第一个主要为保护生态系统（而非风景）而设立的国家公园** —— 与官方史料一致。
    seeing:
      "The Everglades are a very broad, very gently sloping wetland at the southern end of the Florida peninsula. In the wet season, water spills from Lake Okeechobee in the centre and forms a sheet tens of centimetres deep and over a hundred kilometres wide, creeping south across sawgrass prairie at a few hundred metres a day and finally spreading into Florida Bay — which is why it is called the \"river of grass\". It is the only place where the American alligator and the American crocodile live side by side.",
    formation:
      "The Everglades sit on a nearly level limestone platform, the ground falling only a few metres from Lake Okeechobee to the coast. A thin layer of peat and marl over the limestone holds the seasonal shallow water. Its \"river\" has no defined channel — it is one wide, shallow sheet flow. Along the coast it becomes mangrove swamp; sawgrass prairie, tree islands (hammocks) and mangrove alternate with differences of only a few centimetres in ground height.",
    observation:
      "From the air the Everglades are a huge expanse of yellow-green grass, cut by countless narrow water tracks and dotted with oval tree islands, both the tracks and the islands stretched out along the direction of flow. In the wet season it is a sheet of water; in the dry season it retreats to scattered pools. Near the southern coast the prairie gives way to a dark-green maze of mangrove and winding tidal estuaries. Dead-straight canals and levee roads stand out sharply.",
    distinguish:
      "The Everglades are unlike an ordinary delta or estuarine wetland: they were not built by one large river carrying sediment, but are rainwater spreading over a flat limestone platform, carrying almost no sediment. Compared with an inland marsh such as Zoigê: Zoigê is a cold-climate peat bog on a poorly drained plateau; the Everglades are a warm, wide, shallow sheet-flow wetland.",
    concept:
      "The Everglades are a classic example of a \"flowing wetland\" — the water moves slowly as a whole, rather than sitting still. In the 20th century, canals and levees built for flood control and development changed the paths and volume of the flow, markedly shrinking the wetland and its ecosystem; a large \"Everglades restoration\" programme has since aimed to return the natural pattern of water movement.",
    history:
      "The Everglades and their surroundings are home to Seminole peoples including the Miccosukee, and after repeated 19th-century conflicts between the U.S. Army and the Seminole, some Seminole people remained deep in the wetland. Everglades National Park was established in 1947 — the first U.S. national park set aside chiefly to protect an ecosystem rather than scenery; it is also a World Heritage site and a Wetland of International Importance.",
  },

  "sonoran-desert": {
    // seeing sources: 巨柱仙人掌（saguaro）天然**仅分布于索诺兰沙漠** —— USGS（1 级，2026-09-09 核）；
    //   不见于莫哈韦、奇瓦瓦、大盆地三大荒漠。
    //   索诺兰沙漠纬度约北纬 25°—33°，是北美四大荒漠中最靠南、最热的一个，正文用了「之一」限定，稳妥。
    seeing:
      "The Sonoran Desert covers southern Arizona, a small part of south-eastern California, and the Mexican states of Sonora and Baja California — one of the lowest-latitude and hottest deserts in North America. Its signature is the saguaro cactus, which can grow more than ten metres tall and live over a century, and grows only in the Sonoran Desert. Phoenix and Tucson are both within it.",
    formation:
      "The Sonoran Desert's dryness comes from the sinking air of the subtropical high-pressure belt, plus the rain shadow of the peninsular ranges to the west. In landform terms it is the southern extension of the Basin and Range — broad basins between low fault-block ranges, with large gravel alluvial fans at the mountain feet. Unlike the Mojave and Great Basin to the north, the Sonoran has two rainy seasons: winter frontal rain off the Pacific, and summer \"monsoon\" thunderstorms from the south-east.",
    observation:
      "From the air the Sonoran Desert looks \"greener\" than the Mojave — the basin floors are densely covered with dark shrubs and cactus of various heights, and the alluvial fans at the mountain feet are pale spreading cones. Between isolated brown ranges run dead-straight highways and grids of irrigated fields and cities. Dry washes (arroyos) show as pale branching lines, carrying water only after storms.",
    distinguish:
      "The Sonoran, Mojave, Chihuahuan and Great Basin deserts are the four great deserts of North America and meet one another. The test is vegetation and rainfall: the Great Basin is a cold desert dominated by sagebrush; the Mojave is between cold and hot, marked by the Joshua tree; the Sonoran is a hot desert with saguaro and tree-like plants and two rainy seasons; the Chihuahuan is further inland and east, dominated by yucca and desert scrub.",
    concept:
      "The Sonoran Desert shows that \"desert\" does not mean \"barren\" — because it has two rainy seasons, it is one of the most plant- and animal-rich deserts in the world. A common misconception is to picture all deserts as sand dunes: most of the Sonoran surface is gravel, shrub and cactus, and true dune fields (such as the Algodones Dunes) are only local.",
    history:
      "The Sonoran Desert is home to the O'odham, Cocopah and other Native nations, who developed farming that relies on the summer monsoon rains. It also holds the remains of large irrigation canals built by the Hohokam. In the 18th century Spanish missionaries built a string of mission villages along the rivers. Today the Phoenix–Tucson area of Arizona is one of the faster-growing regions in the United States, its water supply heavily dependent on transfers from the Colorado River and on groundwater.",
  },

  "monument-valley": {
    // seeing sources: 纪念碑谷由**纳瓦霍部落公园与游憩局（Navajo Nation Parks & Recreation）**管理，**不是国家公园** ——
    //   https://navajonationparks.org/navajo-tribal-parks/monument-valley/（1 级，部落官方机构，2026-09-09 核）。
    //   **这是很常见的误解，正文避开了。** 进入核心区需购票、部分区域需向导，正文也写明了；
    //   未把「原住民早已知道的地方」写成「被发现」。
    //   **地层年代（二叠纪至三叠纪红色砂岩与页岩）本轮未能核到官方一手表述，已另记 unknown。**
    seeing:
      "Monument Valley lies on the Colorado Plateau at the Utah–Arizona border — a group of red sandstone mesas and buttes standing on a flat red desert, with a relief of about 100 to 300 m. Classic forms such as the East and West Mitten Buttes and the Merrick Butte appear often in films and photographs. It is managed by the Navajo Nation as a tribal park and is part of the Navajo reservation.",
    formation:
      "The rock of Monument Valley is Permian to Triassic red sandstone and shale that was once a single continuous set of layers. After the Colorado Plateau was uplifted, water and wind eroded away the softer beds, leaving columns and tables only where a hard \"cap rock\" protects them: a continuous cliff wastes back into a mesa, the mesa shrinks to a pointed butte, the butte thins to a spire, and finally it collapses. Iron oxide in the sandstone gives it its deep red colour.",
    observation:
      "From the air Monument Valley is a large, nearly level pale-red desert floor, out of which stand a dozen or so red rock bodies with steep sides and flat tops, widely spaced and not connected to one another. Each usually has a gentle apron of collapsed debris at its base. The floor carries sparse shrub and a few dirt roads, and casts very long shadows — the place is known for its light at sunrise and sunset.",
    distinguish:
      "The mesas and buttes of Monument Valley and the sandstone pinnacles of Zhangjiajie are both sandstone shaped by erosion, but Zhangjiajie is a humid climate cutting hundreds of dense, slender, vegetation-covered columns along closely spaced vertical joints; Monument Valley is a dry climate leaving a few isolated, stout, bare red rock bodies from flat layers.",
    concept:
      "Monument Valley is a viewing window on the \"mesa–butte–spire\" erosion sequence: the same set of flat layers, cut and worn back to different degrees, shows different forms. A common misconception is to treat it as a \"canyon\" — it is not a river-cut valley but a broad low area between erosion remnants on a former plateau surface.",
    history:
      "Monument Valley has long been Navajo land for living and grazing, and Navajo families still live within it. From the mid-20th century it was filmed extensively as a location for American Westerns, becoming one of the visual symbols of \"the American West\" in global popular culture. Entering the core area requires a ticket from the Navajo tribal park, and some areas may be visited only with a Navajo guide.",
  },

  "hawaiian-islands": {
    // seeing sources: 夏威夷主要岛屿共 8 个（夏威夷岛/毛伊/瓦胡/考爱/摩洛凯/拉奈/尼豪/卡霍奥拉威），
    //   **其中卡霍奥拉威岛目前没有常住人口** —— 由夏威夷州卡霍奥拉威岛保留地委员会（KIRC）管理、
    //   仅限文化与生态活动准入，官方称 uninhabited：https://kahoolawe.hawaii.gov/（1 级，2026-09-09 核）。
    //   太平洋板块以约 7—10 cm/年向西北移动；夏威夷—天皇海山链的拐弯约 4700 万年前，
    //   主流解释是板块运动方向改变（另有 2019 年论文提出热点自身漂移说，学界仍在讨论）——
    //   正文用的是通行表述，不算错。
    //   **火山活动是持续更新的事实**：基拉韦厄自 2024-12-23 起的哈雷毛毛火口喷发序列到 2026 年 8 月仍在持续；
    //   冒纳罗亚 2022 年那次已结束。**正文只写「是活火山」、没点名具体喷发年份，这是正确的保守处理** ——
    //   日后若要加「最近一次喷发」必须带年份，并知道下一轮要回来刷新。
    seeing:
      "The Hawaiian Islands are a chain of volcanic islands in the middle of the Pacific, forming the U.S. state of Hawaii. There are 8 main islands, 7 of them inhabited; the largest and youngest is the Island of Hawaii (the \"Big Island\") at the south-east end, where Mauna Loa and Kīlauea are active volcanoes. Toward the north-west the islands get older, lower and smaller, and finally sink below the surface as reefs and seamounts.",
    formation:
      "The Hawaiian Islands sit above a roughly fixed mantle hot spot. The Pacific plate moves north-west at about 7 to 10 cm a year, carrying away, one by one like a conveyor belt, the volcanoes that form over the hot spot — leaving a chain of volcanoes that gets progressively younger from north-west to south-east. Each island above the surface is one or several shield volcanoes, built up gradually by layer on layer of very fluid basalt lava, with gentle slopes and a shield-like outline.",
    observation:
      "From the air the Hawaiian Islands are a line of green islands in the deep-blue ocean, aligned north-west to south-east. The Big Island is largest, showing the gentle rounded outlines of several shield volcanoes and the craters at their summits; the windward north-east slopes are lush and cloudy, the leeward south-west slopes dry and yellow. The older islands (such as Kauai) are deeply eroded into ridges and gorges, with tall cliffs along the coast. Pale coral reefs fringe the islands.",
    distinguish:
      "The Hawaiian Islands are \"hot spot volcanic islands\", different from the \"island arcs\" of Japan or Indonesia: an island arc sits on a subduction zone, is made of a row of andesitic volcanoes, and has explosive eruptions and earthquakes; Hawaii sits on a hot spot in the middle of a plate, erupts mostly fluid basalt, is relatively gentle, and is strung out in a line with age changing regularly along it.",
    concept:
      "The Hawaiian Islands are classic evidence for \"plate motion plus a fixed hot spot\" — if the hot spot is still and the plate moves, it should leave a chain of volcanoes with ages changing along it, and the Hawaiian–Emperor chain does exactly that; the bend in the chain even records a change in the plate's direction of motion about 47 million years ago. A common misconception is that Hawaii is on a plate boundary: it is far from any plate boundary, in the interior of the Pacific plate.",
    history:
      "Polynesian voyagers reached and settled the Hawaiian Islands more than a thousand years ago and developed an independent Hawaiian Kingdom. After Europeans arrived in 1778, disease, trade and outside powers deeply changed the society; the islands were annexed by the United States in 1898 and became the 50th state in 1959. Today the Hawaiian language and culture are undergoing a revival, and volcanic activity, tourism and military bases are focal points of the islands' economy and land questions.",
  },

  "columbia-plateau": {
    // seeing sources: 哥伦比亚河玄武岩群（CRBG）覆盖 **over 210,000 km²**；主体喷发约 **16.7—5.5 Ma**，
    //   其中 93% 的体积集中在 16.7—15.6 Ma —— USGS（1 级，2026-09-09 核）。
    //   正文的「约 1700 万到 600 万年前」在合理取整范围内。
    seeing:
      "The Columbia Plateau is in the north-western United States, across eastern Washington, eastern Oregon and western Idaho — a broad upland built of basalt. In the Miocene (about 17 to 6 million years ago) large volumes of very fluid lava poured out of a set of fissures and spread across the region in sheet after sheet; the basalt covers a total of about 210,000 km². The Columbia and Snake rivers have cut deep canyons into the plateau.",
    formation:
      "The Columbia Plateau is a \"flood basalt\" landscape: the lava did not erupt from a cone but flowed quietly in huge volumes from long cracks in the crust, spread out like water, cooled into a layer, and was buried by the next flow — stacked several kilometres thick in places. During the ice ages, repeated bursting of ice dams sent the \"Missoula floods\" across the eastern plateau, stripping off the topsoil and carving a maze of bare-rock coulees into the basalt — the \"Channeled Scablands\". Dry Falls is the dry bed left by one enormous former waterfall.",
    observation:
      "From the air the Columbia Plateau is a gently rolling, yellow-brown upland, split by a few deeply cut river valleys (the Columbia, the Snake) whose walls often show layer upon layer of horizontal dark basalt steps. The Channeled Scablands in the east are an unusual terrain — a crisscross of dry coulees, bare rock islands and dry waterfalls. In the south-west the loess-covered Palouse Hills have been turned into wheat fields.",
    distinguish:
      "The Columbia Plateau and the Colorado Plateau are both \"plateaus\", but the Colorado Plateau is flat-lying sedimentary rock raised as a block; the Columbia Plateau was built up by lava piling on lava. Versus the Yellowstone Plateau: Yellowstone was domed up by a hot spot and its big eruptions are explosive; the Columbia Plateau's flood basalts came out quietly and on a far larger, flatter scale.",
    concept:
      "The Columbia Plateau shows that a \"plateau\" can be built up, not only pushed up. It is one of the youngest and best-preserved large continental flood-basalt provinces on Earth. A common misconception is to picture flood basalt as one great eruption — it was actually hundreds of separate lava flows laid down over two or three million years.",
    history:
      "The Columbia Plateau is home to the Nez Perce, Yakama, Cayuse and other Plateau Native nations, for whom the salmon runs were central to life. The 19th-century Oregon Trail crossed the region. In the 20th century, dams on the Columbia such as Grand Coulee turned it into an irrigated farming region and also deeply affected the salmon populations.",
  },

  "great-salt-lake": {
    // seeing sources: USGS Saltair 监测站（10010000）**2026-08-08 读数约海拔 4,190.4 英尺**，低于犹他州认定的
    //   生态健康水位 **4,198 英尺**；2022 年 11 月的历史最低是 4,188 英尺；2026 年冬季雪量不足往年一半 ——
    //   https://waterdata.usgs.gov/ut/nwis/uv?site_no=10010000（1 级实时站）与犹他州 DNR（1 级），2026-09-09 核。
    //   **这是 known-errors C6-j 里风险最高的一类：每次核实都必须回去查实时监测站，不能沿用任何一次查到的数字。**
    //   原文用「近年偏低」这种相对时间词回避了具体数字 —— 看似稳妥，其实「近年」本身就会过期。
    //   **含盐量那句**（「从略高于海水到接近饱和」）是定性描述、不随年份作废，本轮未逐一核具体百分比；
    //   若日后要写具体盐度，同样必须带年份（盐度随水位波动，水位越低南北两半差异越极端）。
    //   邦纳维尔湖约 1.3 万—1.45 万年前骤降（犹他州地质调查局，1 级）、1847 年摩门教移民定居，均核实无误。
    seeing:
      "The Great Salt Lake is in north-western Utah, the largest saltwater lake in the Western Hemisphere. It has no outlet — rivers flow in and water leaves only by evaporation, so salt keeps concentrating, and salinity ranges from a little above seawater to near-saturation in different parts of the lake. The lake is shallow, only a few metres deep over much of its area, so a small change in level moves the shoreline a long way. Sustained drought and upstream water use have kept the lake low: the USGS gauge at Saltair read about 4,190 ft in August 2026, below the 4,198 ft that Utah treats as a healthy level. The reading swings from year to year with precipitation and upstream use, so it is worth checking the current gauge.",
    formation:
      "The Great Salt Lake is the remnant of a much larger freshwater lake of the ice ages, Lake Bonneville. About 14,000 years ago the climate dried, Bonneville shrank drastically, and only the Great Salt Lake was left in the lowest ground; the old shorelines are still cut into the hillsides around it like contour lines. The south-east shore has river deltas and wetlands; the rest is mostly flat salt flat.",
    observation:
      "From the air the Great Salt Lake is a shallow, broad sheet of water, pinkish-white or blue-green — a causeway splits it in two, and the northern half, which gets almost no fresh water and is saltier, is stained a distinct pink by salt-loving microbes, in contrast with the blue-green southern half. Around the lake are broad white salt flats and plains, and beyond them the brown parallel ranges of the Basin and Range.",
    distinguish:
      "The Great Salt Lake and China's Qinghai Lake are both internally drained salt lakes and both remnants of larger ice-age lakes, but Qinghai Lake sits high on the Tibetan Plateau, is deeper, and is about half as salty as seawater; the Great Salt Lake is lower, extremely shallow, much saltier, and swings widely with rainfall. Compared with the Dead Sea, the Dead Sea is smaller, deeper, saltier and falling fast and steadily.",
    concept:
      "The Great Salt Lake is a classic \"terminal lake\" — water only enters and leaves by evaporation. Its area and level have no \"normal\" value, only a range that shifts with the climate. A common misconception is to read its shrinking as permanent loss — it has risen and fallen many times; but if upstream use stays above the inflow, dust from the exposed lakebed affects the region's air, which is a current real concern.",
    history:
      "The Great Salt Lake area is the traditional land of the Shoshone, Ute, Goshute and other Native nations. Mormon settlers established Salt Lake City on the south-east shore in 1847. In the 19th century some emigrants tried to cut across the salt flats west of the lake as a shortcut and became stranded repeatedly. Today the lake area has brine extraction, salt works and migratory-bird refuges, and the lake level is a matter of active public discussion in Utah.",
  },

  "colorado-river": {
    // seeing sources: 科罗拉多河长约 2,330 km（≈1,450 mi，不同来源在 1,400—1,450 mi 区间），
    //   美方流经怀俄明/科罗拉多/犹他/新墨西哥/亚利桑那/内华达/加利福尼亚七州 ——
    //   USGS《The Colorado》https://pubs.usgs.gov/gip/70039371/report.pdf（1 级，2026-09-08 核）。
    //   **入海口的表述经专门复核**：条目没有简单断言「注入加利福尼亚湾」，
    //   而是紧接着写明近几十年多数年份在到达河口前就已断流 —— 这是正确处理。
    //   history 段只记《科罗拉多河契约》与美墨条约等制度事实，未涉主权表态。
    seeing:
      "The Colorado River rises in the Rocky Mountains and flows south-west through seven states for about 2,330 km to the Gulf of California. It cut the Grand Canyon, Glen Canyon and a series of other deep gorges, and is a principal water source for the arid South-West. The Hoover Dam, Glen Canyon Dam and others built in the 20th century divide it into a chain of reservoirs, and its water is so fully allocated that in most years of recent decades the Colorado runs dry before reaching its mouth.",
    formation:
      "The Colorado's landform work is known for down-cutting: as the Colorado Plateau rose over the past few million years, the river cut down to keep its gradient, sawing the flat layers into deep canyons, the Grand Canyon being the deepest stretch. The river originally carried a heavy sediment load (\"Colorado\" is Spanish for \"red\"); since the dams, much of that sediment is trapped in reservoirs, the water downstream runs clear, and the supply to the riverbed and delta has fallen.",
    observation:
      "From the air the upper Colorado is an ordinary mountain river in the Rockies; on entering the Colorado Plateau it becomes a deep, winding green thread set in red rock, with stepped-back canyon walls on either side. Lake Mead and Lake Powell are two artificial blue sheets on the river's course, shaped like drowned branching canyons. Downstream in the Sonoran Desert the channel is canalised and the banks are irrigated fields.",
    distinguish:
      "The Colorado and the Yellow River are both heavily silt-laden, heavily dammed rivers with strained downstream water supplies, but the lower Yellow River is a \"suspended river\", its bed raised above the plain by silt and held in by levees; the lower Colorado is a canyon river cut into rock, and its problem is mainly that the water is fully divided and it barely reaches the sea. Compared with the Mississippi, the Mississippi carries far more water and is managed mostly for navigation and flood control; the Colorado is managed mostly for water supply and power.",
    concept:
      "The Colorado shows that river landforms are shaped not only by natural processes but deeply by human engineering. A common misconception is that a big river always reaches the sea — because of interstate water allocation and a chain of large dams, the Colorado's natural delta has largely dried and turned saline, recovering only briefly in occasional release years. It is also a classic case of canyon-cutting by river down-cutting plus block uplift.",
    history:
      "The Colorado River and its canyons have long been home to many Native nations, and dozens of federally recognised tribes are in the basin today. In the early 20th century seven states signed the Colorado River Compact allocating water rights, later layered with a treaty with Mexico and a series of court rulings into a complex body of \"river law\". Today about 40 million people use its water, and the long drought under climate change has made the allocation an ongoing public issue.",
  },

  "atlantic-coastal-plain": {
    seeing:
      "The Atlantic Coastal Plain is a low, flat belt along the eastern edge of North America, beginning around New York and New Jersey and widening southward all the way to Florida and around into the Gulf coast. It is relatively recently emerged sea floor, made of loose sand, mud and shell material, very gently sloping, with a coast of barrier islands, lagoons and drowned river mouths. Cities such as Washington and Richmond sit roughly along its boundary with the Appalachian foothills.",
    // formation sources: 「瀑布线」（Fall Line）成因：河流从阿巴拉契亚山麓的坚硬结晶岩基底跌到沿岸平原的松散沉积层上，
    //   差异侵蚀形成一串小瀑布与急流 —— 教科书级地质共识，2026-09-09 复核未见与权威资料矛盾。
    //   对比用的大平原海拔（落基山麓约 1,500—1,800 m）与 Britannica 一致。
    formation:
      "The Atlantic Coastal Plain is essentially the landward extension of the continental shelf — over the past tens of millions of years, sea level has risen and fallen repeatedly, flooding and exposing this shallow sea floor, each time leaving a nearly horizontal, seaward-tilted layer of sediment. When sea level was low in the ice ages, rivers cut valleys across the plain; when it rose afterward, the valley mouths were drowned into wide bays (such as Chesapeake Bay). The plain's edge against the foothills is the \"Fall Line\", where rivers drop from hard old rock onto soft sediment in a set of small falls and rapids.",
    observation:
      "From the air the Atlantic Coastal Plain is an extremely flat, water-laced lowland of alternating forest and farmland, wider toward the south. The coastline is not a solid line but a string of long thin barrier islands, with narrow lagoons and salt marsh between them and the mainland; several large rivers open into funnel-shaped bays reaching inland. There is no visible high ground, only very gentle undulation.",
    distinguish:
      "The Atlantic Coastal Plain and the Great Plains are both flat, but the Great Plains lie east of the Rockies, are high (up to 1,800 m), are built of mountain debris, and are relatively dry; the Atlantic Coastal Plain hugs the sea, is only tens of metres above sea level, is built of marine sediment, and is humid. Compared with the North China Plain, that is an inland river-alluvial plain; the Atlantic Coastal Plain was shaped by marine transgression and regression along a coast.",
    concept:
      "The Atlantic Coastal Plain reminds us that a \"plain\" can be a \"former sea floor\". The test is the material and the history — it is made of loose marine sediment in near-horizontal, seaward-dipping beds, different in origin from a river-alluvial plain or a structural-basin plain. The \"Fall Line\" is one of its important geographic boundaries: many early cities were built on it, because it offered both water power and the head of navigation.",
    history:
      "The Atlantic Coastal Plain is home to the Powhatan, Lenni-Lenape, Creek and many other Native nations. From the 17th century, Europeans built some of the earliest colonial settlements along its bays and river mouths (Jamestown, Charleston and others). The warm, humid lowlands of the southern part developed a plantation economy based on enslaved labour. Today the region is city-dense and heavily populated, and its low coast makes it especially sensitive to sea-level rise and storm surge.",
  },

  "florida-peninsula": {
    // seeing sources: 佛罗里达**半岛**最高点为莱克县的 Sugarloaf Mountain **95 m（312 ft）**，正文「约 100 米左右」准确。
    //   **注意别与佛罗里达「州」全境最高点 Britton Hill（105 m）混淆** —— 后者在狭长地带（panhandle）、
    //   不属于半岛。**正文没有混，处理正确**（3 级，2026-09-09 核）。
    //   半岛长约 650 km 与常见地理描述一致；1513 年庞塞·德莱昂登陆命名 La Florida、
    //   1821 年《亚当斯-奥尼斯条约》后归美国，均属公认史实。
    seeing:
      "The Florida Peninsula is a low, flat strip of land reaching south-east into the sea from North America, about 650 km long. It is really the emerged part of a huge limestone platform; even its highest point is only about 100 m above sea level. Limestone dissolves easily in water, so the peninsula is full of sinkholes, underground rivers and clear large springs; the southern end is the Everglades, and the coast is fringed with barrier islands and coral reefs (the Florida Keys).",
    formation:
      "The Florida Peninsula's foundation is a thick layer of limestone built up over tens of millions of years in warm shallow seas and by the accumulation of the remains of organisms. When sea level fell, the platform emerged as land, and rain and groundwater dissolved the limestone along cracks, forming caves; where a cave roof collapses, a sinkhole forms, some filling with water to make round lakes. Beneath the peninsula lies a huge aquifer, and the springs are simply where that groundwater emerges in low places.",
    observation:
      "From the air the Florida Peninsula is an extremely flat, extremely green, lake-dotted lowland — the many round lakes scattered across the centre are mostly water-filled sinkholes. The coastline is edged by a nearly continuous string of thin barrier islands, with narrow lagoons between them and the land. At the southern end the grass-green Everglades spread toward Florida Bay, and beyond that is an arc of reef islands.",
    distinguish:
      "The Florida Peninsula and China's Leizhou Peninsula are both low, flat coastal peninsulas, but Leizhou is capped with basalt and has volcanic landforms; the Florida Peninsula is a limestone platform with karst features (sinkholes, underground rivers, springs). Compared with the Atlantic Coastal Plain, the Florida Peninsula is the section of that plain that juts furthest south and is surrounded by sea, where the limestone base is nearer the surface and karst is better developed.",
    concept:
      "The Florida Peninsula shows that \"coast\" landforms can be governed by rock type: a soluble rock like limestone lets water hollow out both the surface and the subsurface into a distinctive form. A common misconception is to take the round lakes here for volcanic craters or artificial ponds — most are sinkholes. Because the ground is porous limestone and the land is low, groundwater, land subsidence and saltwater intrusion are long-standing management problems.",
    history:
      "The Florida Peninsula is home to the Tequesta, Calusa and later the Seminole and other Native nations. Spain reached and named \"La Florida\" in 1513; Spanish and then British control followed, and it passed to the United States in 1821. In the 20th century, drainage works, air conditioning and railways and highways turned this hot, wet lowland into one of the fastest-growing regions in the United States, with an ongoing tension between wetland protection and urban expansion.",
  },

  "chihuahuan-desert-us": {
    // seeing / concept sources: 约 64.75 万 km²，北美面积最大的沙漠（略大于大盆地沙漠约 49 万 km²）；
    //   正文的「按面积」口径写明了，排名成立（NPS，1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The Chihuahuan Desert is the largest desert in North America by area; its main body is in Mexico, and the part in the United States is in west Texas, southern New Mexico and south-eastern Arizona. It is a relatively high rain-shadow desert (mostly 1,100 to 1,500 m), with ranges on the east and west blocking the moisture. The vegetation is dominated by yucca, agave and creosote bush, and the large gypsum dune field of White Sands National Park is its most distinctive corner.",
    formation:
      "The Chihuahuan Desert's dryness is mainly topographic: the Sierra Madre to the west and a series of mountains to the east strip out the moisture from the seas on either side. It is the southern extension of the Basin and Range — broad basins between north–south fault-block ranges, the basins holding dry salt lakes. The gypsum at White Sands comes from the surrounding mountains, dissolved by rain, carried into a closed basin, and left as gypsum crystals when the water evaporates, then blown by the wind into the largest gypsum dune field in the world.",
    observation:
      "From the air the Chihuahuan Desert is an open, pale-brown, shrub-dotted set of basins, separated by rows of isolated brown ranges. White Sands is a glaring pure-white sand sea within it, in sharp contrast with the surrounding brown. The Rio Grande cuts a deep canyon around Big Bend National Park — an uncommon landform clue in the desert. Unlike the Sonoran Desert further west, there are no giant saguaro cactus here.",
    distinguish:
      "The Chihuahuan, Sonoran, Mojave and Great Basin are the four great deserts of North America. The test is elevation, temperature and vegetation: the Great Basin is a cold desert dominated by sagebrush; the Mojave is marked by the Joshua tree; the Sonoran is a low, hot desert with giant saguaro; the Chihuahuan is higher, further inland and east, colder in winter, and dominated by yucca, agave and desert scrub.",
    concept:
      "The Chihuahuan Desert shows that \"largest desert\" is not the same as \"hottest desert\" — it is the largest by area, but because it is high it gets frost and even snow in winter. A common misconception is to take White Sands for ordinary quartz dunes: it is water-soluble gypsum, which barely absorbs heat, so it is not hot underfoot even at midday, and it hardens briefly after rain.",
    history:
      "The Chihuahuan Desert is the traditional land of the Mescalero Apache and other Native nations. The Rio Grande valley has had irrigated farming for a very long time, and Spanish settlers built a string of towns along the river in the 17th century. In the 20th century the region's open space and clear skies made it a site for U.S. military testing and spaceflight (the White Sands Missile Range is next to the dunes). Today Big Bend, Guadalupe Mountains and White Sands national parks protect its core landforms.",
  },
};
