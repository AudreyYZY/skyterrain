import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Finland ============
  "halti-fell": {
    seeing:
      "Halti is the highest point in all of Finland, at 1,324 m, located on the Finnish-side slope of the Halti massif.",
    formation:
      "The massif is built of ancient Caledonian orogeny rock; long weathering and erosion have produced today's low, rounded \"tunturi\" fell profile, quite different from a sharp Alpine peak.",
    observation:
      "From the air, the massif's outline is gentle and open, its summit almost bare of vegetation, blending into the similarly low tunturi wilderness around it; the border marker is the key landmark for identifying Finland's highest point.",
    // distinguish sources: 哈尔蒂 1324 m 为芬兰最高**点**（山体芬兰一侧山坡），真正峰顶 Ráisduottarháldi 1365 m 在挪威一侧 —— 两个数各自准确、未混淆，用词是「最高点」不是「最高峰」，跨境表述中性。帕拉斯山列长度按近百公里改（原「约40公里」查无出处）。核实 2026-09-10
    distinguish:
      "Both Halti and Pallas-Yllästunturi are tunturi fell landforms in Finnish Lapland, but Halti is Finland's absolute highest point, right on the Norwegian border, while Pallas-Yllästunturi is a chain of fells stretching nearly 100 km at a noticeably lower elevation.",
    concept:
      "The determination of Halti's status is a classic case for studying the sometimes complicated relationship between an international border and a natural geographic high point — the massif's true summit lies in Norway, and Finland's highest point is merely the corner of slope the border line happens to cross.",
    history:
      "The course of the border has made this mountain a landmark of shared interest to both Finland and Norway; Finnish hikers commonly regard the trek here as the traditional challenge of \"summiting Finland.\"",
  },
  "pallas-yllastunturi": {
    // seeing sources: 山列长度近百公里（帕拉斯段是 50 km 的 Pallas-Ounastunturi 山系的南段；国家公园地貌由近百公里的山列主导，3 级两处一致）—— 原写的「约40公里」查无出处，且经 distinguish 传染到 halti-fell。泰瓦斯凯罗峰 807 m（另有 809.1 m 一说，差 <0.3%，不改）。核实 2026-09-10
    seeing:
      "Pallas-Yllästunturi is a chain of tunturi fells stretching nearly 100 km across western Finnish Lapland; its highest point, Taivaskero, reaches 807 m, and it is one of Finland's oldest national parks.",
    formation:
      "The chain is built of ancient Precambrian rock; hundreds of millions of years of weathering have worn what may once have been towering peaks down to today's low, rounded hill forms — a classic sample for studying the long-term evolution of an extremely old mountain system.",
    observation:
      "From the air, the continuous chain of tunturi fells shows a wave-like undulation; above the treeline the forest disappears, leaving only tundra vegetation, forming a clear vertical zonation against the dense conifer forest at the fells' base.",
    distinguish:
      "Both Pallas-Yllästunturi and Levitunturi are tunturi fell landforms in Finnish Lapland, but Pallas-Yllästunturi is a chain of fells stretching nearly 100 km with a long national-park history, while Levitunturi is a single, isolated fell known for its ski resort.",
    concept:
      "The tundra vegetation zone above the treeline at Pallas-Yllästunturi is a classic case for studying how elevation gradient compresses vertical vegetation zonation in polar and subpolar regions.",
    history:
      "The area was first protected in a precursor national park as early as 1938, one of the earliest protected natural areas in Finland, and has long been a traditional hiking and skiing destination.",
  },
  "levi-fell": {
    // 全六段 sources: 莱维图恩图里 531 m（多来源一致）；distinguish 段未给出与 pallas-yllastunturi 冲突的公里数，未受该条「40公里」错误传染。核实 2026-09-10，未改动
    seeing:
      "Levitunturi is the fell hosting the largest ski resort in Finnish Lapland, at 531 m, a low, rounded massif.",
    formation:
      "The fell is an isolated hill remnant of an ancient mountain system worn down by long weathering before the last ice age, standing in sharp elevation contrast with the comparatively flat Lapland lowland around it.",
    observation:
      "From the air, the isolated tunturi rises abruptly from the surrounding terrain; in winter its summit is snow-covered with ski runs radiating down every side of the slope, a striking contrast with the low conifer forest landscape around it.",
    distinguish:
      "Both Levitunturi and Pallas-Yllästunturi are tunturi fell landforms in Finnish Lapland, but Levitunturi is a single, isolated fell known for its modern ski-resort industry, while Pallas-Yllästunturi is a continuous chain known for its national-park history.",
    concept:
      "Levitunturi's form as an isolated remnant hill is a classic case for studying how an extremely old mountain system leaves behind isolated peaks after long weathering; its isolation also makes it a natural landmark in the otherwise flat terrain around it.",
    history:
      "The site has been developed as a ski resort since the 1980s and has since grown into one of the best-known winter tourism destinations in the Nordic region.",
  },
  "urho-kekkonen-wilderness": {
    // 全六段 sources: 2549 km²，为芬兰**第二大**国家公园（仅次于莱门约基），1983 年设立，以前总统乌尔霍·凯科宁命名。核实 2026-09-10，未改动
    seeing:
      "Urho Kekkonen National Park is Finland's second-largest national park by area, characterised by undulating tunturi wilderness upland interwoven with old conifer forest and river canyons.",
    formation:
      "The park's surface is a tunturi plateau of ancient Precambrian rock, long shaped by weathering and erosion; rivers have long cut canyons along the plateau's margins, producing an overall landscape of low, undulating wilderness upland.",
    observation:
      "From the air, the vast wilderness upland shows almost no built structures, with old conifer forest alternating with open tunturi tundra — one of the most intact areas of pristine wilderness remaining in Finland.",
    distinguish:
      "Both Urho Kekkonen National Park and Pallas-Yllästunturi are upland wilderness landforms in Finnish Lapland, but Urho Kekkonen is larger and more thoroughly wild, while Pallas-Yllästunturi's fells form a more continuous, concentrated chain.",
    concept:
      "The combination of wilderness upland and river canyons at Urho Kekkonen National Park is a classic case for studying the long erosional evolution of an ancient Precambrian plateau within the Arctic Circle.",
    history:
      "The park is named after former Finnish president Urho Kekkonen; it is Finland's second-largest national park by area and an important part of the traditional reindeer-herding region.",
  },
  saimaa: {
    // 全六段 sources: ⚠️ 两个口径别混 —— 正文「芬兰最大湖、欧洲第四大湖」用的是「大塞马」（Suur-Saimaa）整体水系口径约 4200–4400 km²；SYKE 维护的 Järvi-meriwiki 里单独命名的 varsinainen Saimaa 子湖为 1377 km²，是同一湖泊系统的另一种计量，不是打架。约 14000 座岛屿与 Järviwiki 的 13710 接近。核实 2026-09-10，未改动
    seeing:
      "Saimaa is the largest lake in Finland and the fourth-largest in Europe by area, its shoreline extremely intricate and dotted with about 14,000 islands.",
    formation:
      "The lake basin occupies a complex depression carved by last-glacial erosion; the numerous islands are the emergent tops of glacially eroded high ground, producing today's extraordinarily fragmented shoreline and island pattern.",
    observation:
      "From the air, the water and islands interweave into an extremely complex pattern, making it hard to tell where the main body of water ends and the channels between islands begin; Olavinlinna Castle at Savonlinna stands at a key waterway junction, an important landmark for orienting within the lake system.",
    distinguish:
      "Both Saimaa and Päijänne are important large Finnish lakes, but Saimaa is larger with an extremely fragmented pattern of islands and channels, while Päijänne has a comparatively regular shoreline and greater depth.",
    concept:
      "Saimaa is the sole habitat of the Saimaa ringed seal, the world's most endangered extant freshwater seal species; its complex, fragmented shoreline and islands provide a unique ecological refuge for this relict species, making it a classic case for studying the relationship between glacially eroded lake landforms and relict-species conservation.",
    history:
      "The lake area has historically been an important channel for timber floating and inland shipping in Finland, and is now an important lake-district tourist destination as well as a key protected area for the Saimaa ringed seal.",
  },
  paijanne: {
    // 全六段 sources: 派耶内湖 1083 km² 为芬兰第二大湖，最大水深 95.3 m（vesi.fi，2 级）；与 saimaa（最大）、inari-lake（第三大）三条排名并排核对自洽。核实 2026-09-10，未改动
    seeing:
      "Päijänne is Finland's second-largest lake and one of its deepest, with a maximum depth of about 95 m.",
    formation:
      "The lake basin occupies a long, narrow, deep trough carved by last-glacial erosion, giving the lake a pronounced north-south orientation — one of the more textbook examples of glacial erosion among Finnish lakes.",
    observation:
      "From the air, the lake runs long, narrow and straight, its shoreline comparatively regular, in sharp contrast with Saimaa's fragmented cluster of islands; it is an important drinking-water source for the greater Helsinki area.",
    distinguish:
      "Both Päijänne and Saimaa are important large Finnish lakes, but Päijänne has a comparatively regular shoreline and greater depth, while Saimaa has an extremely fragmented pattern of islands and channels and a larger area.",
    concept:
      "Päijänne's long, narrow, straight basin is a classic case for studying how last-glacial ice, cutting deeply along a single structural trough, produces a long, narrow, deep lake.",
    history:
      "Since the early 20th century the lake has been connected to Helsinki's water supply system via the Päijänne Water Tunnel, making it an important safeguard for the city's drinking water.",
  },
  "inari-lake": {
    // 全六段 sources: 约 1040–1084 km²（各来源略异），芬兰第三大湖、北极圈内芬兰最大湖；约 3318 座岛屿，正文「约3300」贴近。核实 2026-09-10，未改动
    seeing:
      "Inari is Finland's third-largest lake by area and the largest lake within the Finnish Arctic Circle, dotted with about 3,300 islands.",
    formation:
      "The lake basin occupies a depression carved by last-glacial erosion in an ancient bedrock zone within the Arctic Circle; the numerous islands are the emergent tops of glacially eroded high ground.",
    observation:
      "From the air, the lake surface is broad and dotted with dense small islands; the region has a severe climate with several months of ice cover each year, and the lake is an important geographic and cultural landmark of Lapland.",
    distinguish:
      "Both Inari and Saimaa are large Finnish lakes densely dotted with islands, but Inari lies within the Arctic Circle and is the largest lake in Lapland, while Saimaa lies in southern Finland's lake district and is larger overall.",
    concept:
      "As a large lake within the Arctic Circle, Inari is a classic case for studying the long coexistence between polar/subpolar lake ecosystems and traditional human settlement — the Sámi fishing and hunting culture.",
    history:
      "The Inari region has been a traditional Sámi homeland since ancient times, and the lake's fishing and hunting culture continues today, making it an important geographic and cultural core of Finnish Sámi heritage.",
  },
  nasijarvi: {
    // 全六段 sources: 内西湖（95 m）与皮哈耶尔维湖（77 m）水位差 18 m，与正文一致；坦佩雷建于两湖间地峡、历史上开发为水力工业基地属实。核实 2026-09-10，未改动
    seeing:
      "Näsijärvi is a long, narrow lake on the north-western side of the city of Tampere, separated from Lake Pyhäjärvi to the south-east by a difference in level of only about 18 m.",
    formation:
      "The difference in level between the two lakes is separated by an isthmus carved by last-glacial erosion; the city of Tampere is built on this narrow isthmus, and the water-power resource created by the level difference was heavily exploited historically.",
    observation:
      "From the air, Näsijärvi and Pyhäjärvi flank the city of Tampere on either side, with dense urban buildings covering the isthmus between them — a rare \"city sandwiched between two lakes\" landform pattern in Finland.",
    distinguish:
      "Both Näsijärvi and Kallavesi are important lakes beside Finnish lake-district cities, but Näsijärvi has a significant level difference with the adjoining Pyhäjärvi, historically an important water-power resource, while Kallavesi is comparatively level and known for its hilltop viewing tower.",
    concept:
      "The water-level difference between Näsijärvi and Pyhäjärvi, and its historical exploitation for water power, is a classic case for studying how a lake's hydropower resource can shape the siting of urban industrialisation.",
    history:
      "From the 19th century, Tampere harnessed the water-power drop between the two lakes to develop textile and paper industries, earning it the nickname \"the Manchester of Finland\" — an important witness city to Finland's industrial history.",
  },
  puurijarvi: {
    seeing:
      "Puurijärvi is a shallow, eutrophic lake in south-western Finland, less than 1 m deep, forming a national park together with the adjoining Isosuo peat bog.",
    formation:
      "The lake basin occupies a shallow depression carved by last-glacial erosion; the extremely shallow water and long process of eutrophication have created a close ecological link between the lake and the surrounding peat bog.",
    observation:
      "From the air, the open, shallow water interweaves with the dark brown peat bog around it, with reeds and wetland vegetation widespread — a landscape typical of an important Finnish bird habitat.",
    distinguish:
      "Both Puurijärvi and Sweden's Tåkern are shallow, eutrophic bird-habitat lakes, but Puurijärvi forms a national park together with its adjoining peat bog, illustrating a classic model of integrated lake-and-wetland conservation.",
    concept:
      "The close link between Puurijärvi's shallow, eutrophic lake ecosystem and its adjoining peat bog is a classic case for studying how a combined lake-wetland ecosystem together supports a bird-habitat function.",
    // history sources: 国家公园 1993 年设立；平均水深约 0.5 m，正文「水深不足1米」准确。核实 2026-09-10
    history:
      "The area historically remained in a natural state because its shallow water and wetland were difficult to farm; a national park was established in 1993 to protect this important bird habitat.",
  },
  kallavesi: {
    // seeing sources: 普宜奥山体 232 m（高出湖面约 150 m），306 m 是山顶观景塔塔顶海拔 —— 原文把塔顶值当成了山体海拔。核实 2026-09-10
    seeing:
      "Kallavesi is an important part of Finland's central-eastern lake district; the city of Kuopio is built on its shore, and lakeside Puijo hill reaches 232 m, with the top of its observation tower at 306 m.",
    formation:
      "The lake basin was carved by last-glacial erosion, while Puijo hill is a relatively high remnant of ancient bedrock left standing after long weathering — a landmark that stands out sharply against the otherwise gentle terrain of the Finnish lake district.",
    observation:
      "From the air, the lake is broad, with islands and channels interweaving; the viewing tower atop Puijo hill overlooks the entire lake and archipelago landscape, an important high point for orienting within the Kuopio region.",
    distinguish:
      "Both Kallavesi and Näsijärvi are important lakes beside Finnish lake-district cities, but Kallavesi is known for the rare high point of Puijo hill, while Näsijärvi is known for its significant level difference with the adjoining Pyhäjärvi.",
    concept:
      "As one of the few high points of relief in the Finnish lake district, Puijo hill is a classic case for studying how a locally surviving remnant of ancient bedrock can become a regional landmark amid otherwise gentle lake-district terrain.",
    history:
      "Kuopio has been an important trading city in Finland's central-eastern lake district since the 19th century, and the viewing tower on Puijo hill remains an important local tourist landmark today.",
  },
  "vuoksi-river": {
    // 全六段 sources: 全长约 162 km，源出塞马湖、注入拉多加湖；伊马特拉急流的水电开发史与夏季定期放水重现景观与多方市政/旅游信息一致。跨境表述中性。核实 2026-09-10，未改动
    seeing:
      "The Vuoksi is Saimaa's main outlet river, running about 162 km before ultimately flowing into Lake Ladoga in Russia.",
    formation:
      "The river follows the structural lowland between Saimaa and Lake Ladoga; at Imatra, comparatively hard bedrock concentrates the river's drop, historically producing Finland's famous natural rapids landform.",
    observation:
      "From the air, the channel is generally gentle, with a clearly defined stretch of rapids only around Imatra, where the terrain drops sharply; a hydroelectric station now regulates the flow, and the sluice gates are opened on a regular summer schedule to recreate the original rapids display.",
    distinguish:
      "Both the Vuoksi and Kemijoki are important Finnish rivers, but the Vuoksi is Saimaa's comparatively short outlet channel, while the Kemijoki is Finland's longest river, rising in the Lapland wilderness.",
    concept:
      "The evolution of the Imatra rapids — from a natural landscape, to hydroelectric development, to a regularly recreated summer display — is a classic case for studying how a river landform resource seeks a balance between natural conservation and hydropower development.",
    history:
      "The Imatra rapids have been a famous Finnish natural tourist attraction since the 19th century; after a hydroelectric station was built in the early 20th century the rapids ran dry year-round, and today the sluice gates are opened on a regular summer schedule to recreate the historic display, now an important local tourist event.",
  },
  kemijoki: {
    // 全六段 sources: 全长约 550 km，为芬兰最长河流，经罗瓦涅米后于凯米附近注入波的尼亚湾。核实 2026-09-10，未改动
    seeing:
      "The Kemijoki is Finland's longest river, running about 550 km from its source in the wilderness of eastern Lapland, through Rovaniemi, to enter the Gulf of Bothnia near Kemi.",
    formation:
      "The river rises in the Lapland upland wilderness and flows south-west along an ancient structural lowland; the many hydroelectric dams built along its banks have substantially altered the river's natural hydrological rhythm.",
    observation:
      "From the air, the channel winds through Lapland's forest and tundra; its middle course passes through Rovaniemi, the iconic Arctic Circle city, and its lower reaches open into a broad delta entering the Gulf of Bothnia.",
    distinguish:
      "Both the Kemijoki and the Vuoksi are important Finnish rivers, but the Kemijoki is Finland's longest river, extensively used for hydropower along its course, while the Vuoksi is shorter and known for the Imatra rapids landscape.",
    concept:
      "The alteration of the Kemijoki's natural hydrological rhythm by its many hydroelectric dams is a classic case for studying how large-scale hydropower development reshapes a river's ecology and hydrology.",
    history:
      "The river's banks were historically an important timber-floating channel in Finland; large-scale hydropower development from the mid-20th century made the Kemijoki Finland's main river for hydroelectricity, providing the country with substantial clean energy.",
  },
  "tornionjoki-fi": {
    seeing:
      "The Tornionjoki is the Sweden-Finland border river, running about 520 km; at its mouth, the town of Tornio and Haparanda across the river in Sweden form a cross-border twin city.",
    formation:
      "The river follows the structural lowland between Sweden and Finland; never dammed, its channel retains natural seasonal flow variation, and together with the Torne River on the Swedish side of the same system forms a cross-border natural river valley.",
    observation:
      "From the air, the winding channel marks the border between the two countries; at the river mouth, Tornio and Haparanda face each other across the water, their built-up areas almost merging into one — a classic case for observing the landform and human geography of a cross-border twin city.",
    distinguish:
      "Both the Tornionjoki and the Kemijoki are important rivers in northern Finland, but the Tornionjoki is the Sweden-Finland border river, never developed for hydropower, while the Kemijoki lies entirely within Finland and is extensively used for hydropower along its course.",
    concept:
      "The pattern of shared municipal infrastructure between Tornio and Haparanda at the Tornionjoki's mouth is a classic case for studying cross-border urban cooperation and governance along a border river.",
    // history sources: Struve 测地弧 2005 年列入 UNESCO（whc.unesco.org/en/list/1187，1 级）；中文原写的遗产名「梅尔梅奥河谷」查无实据，已删。与本库 torne-river/history 同一事实，同日一并清理。核实 2026-09-10
    history:
      "The river's lower course has historically been an important channel for cross-border trade and movement between Sweden and Finland; survey points along this border reach were inscribed on the UNESCO World Heritage List in 2005 as part of the ten-country Struve Geodetic Arc.",
  },
  "oulanka-canyon": {
    seeing:
      "The Oulanka Canyon was cut by the Oulanka River through ancient bedrock, and is one of the most representative landforms along Finland's famous Karhunkierros (\"Bear's Trail\") long-distance hiking route.",
    formation:
      "The river has long eroded ancient Precambrian bedrock, cutting a narrow canyon through the comparatively hard rock; pine forest and patches of lime-rich ground alternate along its banks, producing a distinctive vegetation-landform combination.",
    observation:
      "From the air, the canyon winds narrowly, with the Kiutaköngäs rapids tumbling through it; dense pine forest and bare rock walls set each other off on either side — one of the areas of most pronounced relief in north-eastern Finland.",
    distinguish:
      "Both the Oulanka Canyon and Repovesi are important Finnish canyon landforms, but the Oulanka Canyon lies at the edge of Lapland along a famous long-distance hiking route, while Repovesi lies in southern Finland and is characterised by fragmented lake-and-cliff terrain.",
    concept:
      "The distinctive plant community that the Oulanka Canyon's patches of lime-rich ground support is a classic case for studying how a canyon's microclimate can nurture a local biodiversity hotspot within an otherwise poor conifer-forest zone.",
    // history sources: 奥兰卡国家公园 1956 年设立；Karhunkierros 步道 1954 年开通，比建园早两年（Metsähallitus luontoon.fi，1 级）。核实 2026-09-10
    history:
      "Oulanka National Park, where the canyon lies, was established in 1956; the Karhunkierros trail opened in 1954 and is one of Finland's most celebrated long-distance hiking routes.",
  },
  "repovesi-gorge": {
    seeing:
      "Repovesi National Park is an area of fragmented terrain in southern Finland built of Precambrian bedrock, where lakes, cliffs and deeply cut gorges interweave.",
    formation:
      "The surface bedrock is ancient Precambrian rock that has undergone multiple episodes of tectonic movement and long erosion, producing today's fragmented mix of lakes, cliffs and gorges; the Olhavanvuori cliff has a vertical drop of about 40-50 m.",
    observation:
      "From the air, lakes, forest and steep cliffs interweave, the terrain showing pronounced relief, in sharp contrast with the comparatively gentle lake-district landscape typical elsewhere in southern Finland.",
    distinguish:
      "Both Repovesi and the Oulanka Canyon are important Finnish canyon landforms, but Repovesi lies in southern Finland and is characterised by fragmented lake-and-cliff terrain, while the Oulanka Canyon lies at the edge of Lapland and is characterised by a narrow canyon cut by a river.",
    concept:
      "Repovesi's fragmented combination of lakes and cliffs is a classic case for studying how ancient Precambrian bedrock, overlaid by multiple episodes of tectonic movement, produces a complex, fragmented terrain.",
    // history sources: 建园经过 —— 1970 年代末提议、搁置近三十年、2001 年 UPM-Kymmene 捐地、2003-01-01 设立（芬兰环境部公告，1 级）。原文的「苏联边境军事管制区、长期禁止公众进入」查无出处且与官方史料相反，已整段改写。奥尔哈万武奥里崖高约 40–50 m（3 级多处一致）。核实 2026-09-10
    history:
      "A national park here was first proposed in the late 1970s, but the plan sat unrealised for nearly three decades; in 2001 the forestry company UPM-Kymmene donated a third of the planned park's land to the state, and the park was formally established in 2003. It is now an important outdoor adventure destination in southern Finland.",
  },
  "kevo-canyon": {
    // 全六段 sources: 凯沃自然保护区 1956 年设立（与奥兰卡同批）；峡谷最深处约 80 m、全长逾 40 km（Metsähallitus 出版物，1 级机构）。核实 2026-09-10，未改动
    seeing:
      "The Kevo Canyon was cut by the Kevo River through ancient gneiss bedrock over thousands of years of erosion, reaching a maximum depth of about 80 m — one of the largest canyons in Northern Europe.",
    formation:
      "The river has long eroded extremely ancient Precambrian gneiss bedrock, slowly cutting a deep canyon through the hard rock — a large canyon landform rarely seen within the Arctic Circle.",
    observation:
      "From the air, the canyon is deep and narrow, its banks rising steeply, with the river winding along its floor, forming an extremely sharp landform contrast with the gentle Lapland tundra wilderness around it.",
    distinguish:
      "Both the Kevo Canyon and the Oulanka Canyon are important canyon landforms in northern Finland, but the Kevo Canyon is deeper and lies within a strict nature reserve further north, while the Oulanka Canyon is comparatively shallower and lies along an open long-distance hiking route.",
    concept:
      "As a rare large canyon within the Arctic Circle, the Kevo Canyon is a classic case for studying how a polar-region river erodes extremely ancient, hard bedrock over vast geological timescales to form a deeply incised canyon.",
    history:
      "The Kevo Strict Nature Reserve was established in 1956, one of Finland's earliest strict nature reserves; access is prohibited outside designated trails, preserving the canyon's original state to the greatest extent possible.",
  },
  "archipelago-sea": {
    // 全六段 sources: 约四万座岛屿、按数量计世界最密集群岛之一（部分来源给约五万上限，四万在常见引用范围内）；与 aland-islands 的约 6500 座形成的数量对比成立。⚠️ 未能拿到 Metsähallitus 一手 PDF（工具无法解析），仅三级来源交叉印证，确信度低于同批其他条目，下轮复核。核实 2026-09-10，未改动
    seeing:
      "The Archipelago Sea is a body of water off south-western Finland made up of about forty thousand islands and skerries, one of the densest island clusters anywhere in the world by island count.",
    formation:
      "The archipelago's bedrock is granite scoured by last-glacial ice; after the ice retreated, isostatic rebound gradually raised much of the once-submerged rock above sea level, producing today's densely islanded landscape.",
    observation:
      "From the air, dense islands and skerries are scattered across shallow waters, criss-crossed by channels between them — the region of highest island density anywhere on the Baltic coast.",
    distinguish:
      "Both the Archipelago Sea and the Åland Islands are granite archipelago landforms in south-western Finland, but the Archipelago Sea is known for its extreme island density (about forty thousand islands), while Åland is known for its autonomous political status and comparatively fewer islands (about 6,500).",
    concept:
      "As the world's densest island cluster by count, the Archipelago Sea is a classic case for studying how a granite basement, scoured by last-glacial ice and subsequently raised by isostatic rebound, can produce an extremely fragmented island landscape.",
    history:
      "The waters have historically been an important Finnish shipping and fishing area; today they are an important summer holiday and sailing recreation area, with many islands still holding traditional summer cottages.",
  },
  "kvarken-archipelago": {
    // seeing sources: 抬升速率约 8.5 mm/年（瓦萨市官网，2 级）—— 略高于本库 hoga-kusten 的约 8 mm/年，distinguish 段的「略高」由此成立；这是会变的量，下轮复核。UNESCO 2000 年列入、2006 年扩展纳入芬兰侧，与瑞典侧 hoga-kusten 表述一致、并排读无冲突。核实 2026-09-10
    seeing:
      "The Kvarken Archipelago is a low-lying island cluster on the Finnish side of the narrowest point of the Gulf of Bothnia; the land here continues to rise at about 8.5 mm per year.",
    formation:
      "The heavy last-glacial ice sheet long depressed the crust here; since the ice retreated, the land has continued to rebound isostatically — one of the areas of greatest post-glacial land uplift anywhere on Earth — producing a distinctive landscape in which new islands continue to emerge from the sea.",
    observation:
      "From the air, numerous low islands and shoals are scattered across the waters at the Gulf of Bothnia's narrowest point, facing the High Coast on the Swedish side across the water — together forming a continuously changing, uplifting coastline.",
    distinguish:
      "Both the Kvarken Archipelago and Sweden's High Coast belong to the same transboundary isostatic-rebound World Heritage Site, but the Kvarken Archipelago is characterised by a low-lying island landscape with a slightly higher uplift rate, while the High Coast is characterised by steep, uplifted sea cliffs.",
    concept:
      "The Kvarken Archipelago's ongoing isostatic rebound is one of the world's most important field laboratories for studying post-glacial crustal rebound after ice-sheet melting, which is why it was inscribed on the UNESCO World Heritage List together with Sweden's High Coast.",
    history:
      "Local fishing villages have historically had to periodically extend their dock facilities seaward as the coastline continued to rise — a living human record of the ongoing land-uplift process.",
  },
  "bothnian-bay-coast": {
    // 全六段 sources: 波的尼亚湾北岸（Perämeri）为波罗的海结冰范围最广、通常冰层最厚的海域（芬兰气象研究所 Ilmatieteen laitos，1 级）。核实 2026-09-10，未改动
    seeing:
      "The Bothnian Bay coast is Finland's northernmost Baltic Sea shoreline, with an ice season lasting several months each winter, and the most extensive and thickest ice cover found anywhere on the Baltic.",
    formation:
      "The coastal bedrock is likewise ancient rock scoured by last-glacial ice, sharing the same isostatic-rebound origin as the Kvarken Archipelago; the region's severe winter climate makes these waters the most heavily iced part of the Baltic.",
    observation:
      "From the air, in winter the sea surface freezes over a vast area, forming an unbroken white ice field, with icebreaker-cleared shipping lanes clearly visible — a strong seasonal contrast with the open blue water of summer.",
    distinguish:
      "Both the Bothnian Bay coast and the Kvarken Archipelago display the isostatic-rebound phenomenon along the Gulf of Bothnia, but the Bothnian Bay coast is defined by its extensive winter ice cover, while the Kvarken Archipelago is defined by its low-lying island landscape.",
    concept:
      "The seasonal formation and melting of extensive sea ice along the Bothnian Bay coast is a classic case for studying the dynamics of sea ice in the shallow, high-latitude waters of the northern Baltic.",
    history:
      "The waters have historically been an important area for Finnish timber and industrial-goods export ports; winter icebreaker operations have kept the ports navigable year-round, an important practice in Finland's shipping history.",
  },
  "aland-islands": {
    seeing:
      "The Åland Islands are an archipelago of about 6,500 islands and skerries at the entrance to the Baltic Sea, Finland's only autonomous region with Swedish as its sole official language.",
    // formation sources: 最高点 Orrdalsklint（萨尔特维克）129.1 m —— 原写的 116 m 查无出处；岛礁数约 6500–6757，正文取下限；1921 年国际联盟裁决、瑞典语单一官方语言、非军事化地位均为公认史实。核实 2026-09-10
    formation:
      "The archipelago's bedrock is likewise granite scoured by last-glacial ice, gradually raised above sea level by isostatic rebound; the archipelago's highest point, Orrdalsklint in Saltvik, is only 129 m, and the terrain overall is low and open.",
    observation:
      "From the air, numerous low islands are scattered at the entrance to the Baltic Sea, with the main town of Mariehamn and other settlements dotted among them — an important transit area for shipping between Finland and Sweden.",
    distinguish:
      "Both the Åland Islands and the Archipelago Sea are granite archipelago landforms in south-western Finland, but Åland is known for its distinctive autonomous, Swedish-speaking political status and comparatively fewer islands, while the Archipelago Sea is known for its extreme density of about forty thousand islands.",
    concept:
      "Åland's autonomous, demilitarised status, established by a League of Nations ruling in 1921, is a classic case for studying how the geographic particularity of an archipelago — a borderland of language, culture and local political history — can give rise to a special administrative arrangement.",
    history:
      "In 1921 the League of Nations ruled on the question of Åland's status, establishing that it would enjoy a high degree of autonomy under Finnish sovereignty, with Swedish as its sole official language and a demilitarised status — an arrangement that continues to this day and is widely regarded as a historic example of the peaceful resolution of an international dispute.",
  },
  hailuoto: {
    // 全六段 sources: 见 seeing 段 issue —— 「每年约1公顷」的面积扩大速率查不到出处也查不到反证；能查到的只有垂直抬升约 0.9–1 cm/年，是另一个量，不可换算。核实 2026-09-10
    // seeing sources: 地壳抬升约 9 mm/年（海卢奥托市，1 级）；「每年1公顷」无出处。核实 2026-09-12
    seeing:
      "Hailuoto is a sandy island in the Gulf of Bothnia that continues to grow through isostatic rebound, the land still rising by about 9 mm a year.",
    formation:
      "The island's foundation is shallow-sea sediment that gradually emerged after the last ice age; long exposure to Gulf of Bothnia wave and wind action has produced extensive dune and beach landforms, with isostatic rebound continually adding new land to the island.",
    observation:
      "From the air, the island's terrain is low and flat, with extensive dunes and beaches along its shoreline; its outline slowly expands as the land continues to rise — a direct landform sample for observing this process.",
    distinguish:
      "Both Hailuoto and the Åland Islands are important Finnish island landforms, but Hailuoto is a single sandy, uplifting island with a continually expanding area, while Åland is a granite archipelago made up of about 6,500 islands and skerries.",
    concept:
      "Hailuoto's continually expanding area is a classic and rare landform case for studying how isostatic rebound can directly and measurably change an island's actual land area.",
    history:
      "As the island has continued to grow, its residents have historically resettled onto the newly emerged coastal land — an important human record of the ongoing land-uplift process in the Gulf of Bothnia.",
  },
  "salpausselka-ridge": {
    seeing:
      "The Salpausselkä ridges run for more than 600 km across southern Finland, a terminal moraine ridge system formed when the ice sheet stalled during the last-glacial Younger Dryas cold period.",
    formation:
      "During the Younger Dryas cold period, roughly 12,900 to 11,600 years ago, the ice sheet's margin stalled for a time, and sand and gravel carried by meltwater accumulated continuously along the ice edge, forming today's terminal moraine ridge system stretching hundreds of kilometres.",
    observation:
      "From the air, the ridge rises in a long east-west line, its two flanks clearly distinct from the gentle lake-district terrain around it; the ski jump at Lahti is built directly on the ridge crest, an important landmark for identifying the landform.",
    distinguish:
      "Both Salpausselkä and Punkaharju are important Finnish glacial-deposition landforms, but Salpausselkä is a terminal moraine ridge formed by a long ice-margin standstill, stretching hundreds of kilometres, while Punkaharju is a much smaller esker formed by subglacial river deposition.",
    // concept sources: 萨尔帕塞尔卡 2022-04-13 获评 UNESCO 世界地质公园，为芬兰第四个（unesco.org/en/iggp，1 级）；2010 年是芬兰首个地质公园罗库阿获批的年份，与本条无关。终碛岭长逾 600 km、成于新仙女木冷期（约 12.9–11.6 ka），与 UNESCO 官方页一致。核实 2026-09-10
    concept:
      "Salpausselkä is one of the world's most important field samples for studying ice-sheet standstill processes during the Younger Dryas cold period and the mechanisms of terminal moraine formation, which is why it was designated a UNESCO Global Geopark in 2022.",
    history:
      "The ridge's abundant groundwater and favourable geological conditions have historically made it an important basis for town siting in southern Finland, with cities such as Lahti built directly along its crest.",
  },
  "punkaharju-esker": {
    // 全六段 sources: 1843 年沙皇尼古拉一世敕令设立「王领公园」（Kruununpuisto）保护该冰碛垄免于采伐。核实 2026-09-10，未改动
    seeing:
      "Punkaharju is a long, narrow esker formed by subglacial river deposition during the last ice age; at its narrowest point the road runs with the waters of Saimaa almost directly on either side.",
    formation:
      "The esker was built up from sand and gravel deposited over a long period in a subglacial meltwater channel; after the ice retreated, this buried channel's deposits emerged at the surface, forming today's long, narrow, winding ridge landform.",
    observation:
      "From the air, the narrow ridge crest winds between the waters of Saimaa, its width at the narrowest point only a few tens of metres, with the lake seemingly within arm's reach on either side — one of Finland's most recognisable landforms.",
    distinguish:
      "Both Punkaharju and Salpausselkä are important Finnish glacial-deposition landforms, but Punkaharju is a long, narrow esker formed by subglacial river deposition, small in scale but exquisitely delicate, while Salpausselkä is a terminal moraine ridge formed by a long ice-margin standstill, stretching hundreds of kilometres.",
    concept:
      "Punkaharju's narrow esker, flanked by lake water on both sides, is a classic sample for studying how subglacial river sediment can form a delicate, long, narrow esker landform after the ice retreats.",
    history:
      "In the 19th century, Russian Tsar Nicholas I ordered this natural landscape protected from logging, making it one of Finland's longest-protected natural landscapes.",
  },
  "koli-hills": {
    // 全六段 sources: 乌科科利峰 347 m（高出皮耶利宁湖约 253 m）；石英岩年代约 20 亿年前（卡累利阿构造带 2500–1900 Ma）。核实 2026-09-10，未改动
    seeing:
      "Koli is a range of hills in eastern Finland built of quartzite roughly 2 billion years old; its peak, Ukko-Koli, at 347 m, overlooks Lake Pielinen and is regarded as Finland's most representative \"national landscape.\"",
    formation:
      "The hills' bedrock is Archean-to-Proterozoic quartzite roughly 2 billion years old, hard and erosion-resistant; long weathering and erosion have worn it into today's low, rounded hill form — one of the oldest exposed rock zones in Finland.",
    observation:
      "From the air, the hills overlook the open expanse of Lake Pielinen, lake and hill scenery reflecting one another; in autumn the forest shows a rich range of colour, making it one of the most dramatically season-changing landforms in Finland.",
    distinguish:
      "Both Koli and Salpausselkä are important uplifted landforms in Finland, but Koli is built of quartzite about 2 billion years old, geologically extremely ancient, while Salpausselkä is a much younger moraine landform formed during the last-glacial Younger Dryas.",
    concept:
      "Koli's roughly 2-billion-year-old quartzite bedrock is an important geological sample for studying the long evolution and weathering history of Finland's extremely ancient Precambrian rock.",
    history:
      "From the early 20th century, Finnish painters and other artists repeatedly visited Koli and took it as a subject for their work, gradually making it an important symbol of Finnish national landscape and cultural identity; a national park was established in 1991.",
  },
  aavasaksa: {
    // 全六段 sources: 阿瓦萨克萨丘 242 m；1736–1737 年莫佩尔蒂率法国科学院拉普兰探险队在此及周边测量子午线弧度以验证牛顿的地球扁球说（maupertuis.fi，2 级）。注：阿瓦萨克萨同时也是斯特鲁维测地弧的芬兰六个保护点位之一（19 世纪的另一段测量史），正文未提及不算错、只是未写全。核实 2026-09-10，未改动
    seeing:
      "Aavasaksa is an isolated hill above the Arctic Circle overlooking the Tornionjoki valley, at 242 m.",
    formation:
      "The hill is built of ancient bedrock; long weathering and erosion have left it as a comparatively prominent isolated high point amid the otherwise gentle terrain of the Tornionjoki valley.",
    observation:
      "From the air, the isolated hill overlooks the broad channel of the Tornionjoki and the farmland on both banks; at midsummer the sun still hangs near the horizon at midnight, making it an excellent spot for observing the polar midnight-sun phenomenon.",
    distinguish:
      "Both Aavasaksa and Levitunturi are comparatively isolated high points in northern Finland, but Aavasaksa is lower and known for scientific expeditions and midnight-sun observation, while Levitunturi is higher and known for its ski-resort industry.",
    concept:
      "The 18th-century French scientific expedition that measured a meridian arc here to test the Earth's shape is a classic historical case for studying how early geodesy used natural high points in the landscape to carry out field observation.",
    history:
      "Between 1736 and 1737, a Lapland expedition dispatched by the French Academy of Sciences measured a meridian arc here and at nearby sites, providing key empirical data to test Newton's theory that the Earth was an oblate spheroid — an important event in the history of science.",
  },
  "ostrobothnia-plain": {
    // 全六段 sources: 无可核实的具体数字断言（仅「地势最平坦、农业最发达区域之一」等定性表述）；地壳均衡抬升持续造陆的机制描述方向准确。核实 2026-09-10，未改动
    seeing:
      "The Ostrobothnia Plain is a low-lying coastal agricultural region on Finland's west coast that continues to expand through isostatic rebound, one of the flattest and most agriculturally developed regions in the country.",
    formation:
      "The plain's surface is made up of sediment left after last-glacial erosion; isostatic rebound continually converts what was once shallow seabed into dry land, making it a classic example of a region in Finland whose land area keeps expanding through crustal uplift.",
    observation:
      "From the air, extensive, regular farmland covers the broad, flat surface; along the coast the land-uplift process remains clearly observable, in sharp contrast with the undulating terrain of Finland's inland lake district.",
    distinguish:
      "Both the Ostrobothnia Plain and Sweden's Skåne Plain are important Nordic agricultural plains, but the Ostrobothnia Plain's land area continues to expand through ongoing isostatic rebound, while the Skåne Plain's terrain is comparatively stable, characterised by moraine and loess-like sediment.",
    concept:
      "The continually expanding land area of the Ostrobothnia Plain through isostatic rebound is a classic case for studying how land uplift along the Gulf of Bothnia directly creates new agricultural land.",
    history:
      "The region has been an important Finnish farming area since the Middle Ages; coastal towns have historically had to periodically relocate their port facilities seaward as the land continued to rise, and today the region remains an important area for Finnish agriculture and fishing.",
  },
};
