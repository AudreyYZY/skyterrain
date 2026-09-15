import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // Terp mounds / Giethoorn — 2 `settlement` writeups removed 2026-09-04 (category
  // retired, see docs/terrain-taxonomy.md §8); not migrated to travel mode.

  // ============ Austria ============
  "hohe-tauern": {
    // concept sources: 国家公园面积 1856 km²（萨尔茨堡 805 + 克恩顿 440 + 蒂罗尔 611，官网 1 级），阿尔卑斯山区最大保护区。
    //   📌 正文**没有**提三州分三阶段（1981／1983—84／1991—92）设立的过程，因此不存在「把三步压成一步」的问题。2026-09-10 核。
    seeing:
      "The Hohe Tauern range crosses south-central Austria, a high-mountain belt of gneiss and schist at the heart of the Alps; its highest peak, Grossglockner, reaches 3,798 m — the highest point in all of Austria. Glaciers and lakes are densely packed across the range, which holds the largest protected area in the Alps.",
    // formation sources: ⚠️ 帕斯特泽冰川：长约 8.3—8.4 km（非 9 km）；**「奥地利最大冰川」这个排名本身正在过期** —— GeoSphere Austria（1 级）2025-03 指出它自 2022 年起年减薄超 2 米、冰舌年减薄 5—10 米，可能不久被加珀奇冰川取代。属 C8 里「过期的是排名、不是数字」的一种。2026-09-10 核。
    formation:
      "The Hohe Tauern was raised by Alpine orogeny and is built mainly of Paleozoic gneiss and schist; sustained uplift combined with glacial erosion carved sharp horn peaks and U-shaped valleys — the Pasterze Glacier on the eastern slope, about 8.4 km long, is for now Austria's largest — though GeoSphere Austria's 2025 monitoring shows it retreating fast enough that it may soon cede that place to the Gepatschferner in Tyrol.",
    // observation sources: 冰川数：国家公园官网 **332 条**（总面积 126 km²，1 级）。同句的 300 余座 3000 m 峰、551 个高山湖泊经同源核实无误。国家公园面积 1856 km²（萨尔茨堡 805 + 克恩顿 440 + 蒂罗尔 611）亦无误。2026-09-10 核。
    observation:
      "From the air, identify the Hohe Tauern by its rolling, snow-crowned skyline — over 300 peaks above 3,000 m and 332 glaciers scattered through the range, with Grossglockner's sharp conical summit especially prominent, and 551 alpine lakes catching the light in varying shades of blue.",
    distinguish:
      "Both the Hohe Tauern and the Ötztal Alps are crystalline-rock high-mountain belts, but the Hohe Tauern has more and larger glaciers and holds Austria's highest peak, while the Ötztal Alps are Austria's second-highest range.",
    concept:
      "Hohe Tauern National Park covers 1,856 km², the largest protected area in the Alps, with an intact high-mountain ecosystem — an important base for studying Alpine glacier retreat and alpine ecology.",
    history:
      "The Grossglockner High Alpine Road, a well-known scenic route through the Hohe Tauern, offers views of the Pasterze Glacier along the way and is one of Austria's major Alpine touring routes.",
  },

  "otztal-alps": {
    seeing:
      "The Ötztal Alps lie in western Tyrol and are Austria's second-highest range; the highest peak, Wildspitze, reaches 3,768 m, and the range is extensively covered in glacial ice.",
    // formation sources: 盖帕奇冰川约 **14.6 km²**、帕斯特采约 16.7 km²（奥地利冰川清查 Gletscherinventar 2023）——
    //   Alpenverein 官方新闻稿 https://www.alpenverein.at/portal/news/2026/2026_07_02_pasterze-am-seidenen-faden.php
    //   （2 级）与 tirol.ORF.at（3 级），2026-09-08 核。原文的 17 km² 已过期。
    //   **这是一个随时会翻的排名**：帕斯特采因「马蹄形冰裂」（Hufeisenbruch）濒临断裂，
    //   2026 年 7 月的报道称一旦断开，盖帕奇很可能反超成为奥地利最大冰川 —— 下一轮必须回来看。
    //   野人峰 3,768 m 为奥地利第二高峰（次于大格洛克纳 3,798 m）；
    //   冰人奥兹 1991 年发现、测年约公元前 3300 年，均核实属实。
    formation:
      "The range is built of crystalline rock from the Alpine orogenic belt and lies largely above the snowline; over 200 glaciers cover it, including the Gepatschferner, about 14.6 km² in the 2023 Austrian glacier inventory — still Austria's second-largest after the Pasterze, though the gap has narrowed sharply as both shrink.",
    observation:
      "From the air, the Ötztal Alps show broad expanses of white glacial ice against the deep-green valley forests below; Wildspitze's sharp conical summit is the clearest marker for identifying the range.",
    distinguish:
      "Both the Ötztal Alps and the Hohe Tauern are crystalline-rock high-mountain belts, but the Ötztal Alps have a higher proportion of glacial cover and hold the greatest concentration of glacier ski areas in Austria.",
    concept:
      "The north-facing valleys of the Ötztal Alps retain snow and glacial ice more effectively — a useful case study in the relationship between Alpine glacier distribution and slope aspect.",
    history:
      "Ötzi the Iceman — a remarkably well-preserved Neolithic mummy dated to around 3300 BCE — was discovered in the Ötztal Alps in 1991, one of the most significant archaeological finds in European history.",
  },

  "zillertal-alps": {
    // 全六段 sources: 霍赫法伊勒峰 3509—3510 m，位于奥意交界。与 `hohe-tauern`（大格洛克纳 3798 m）、
    //   厄茨塔尔（魏斯峰 3768 m）并排读自洽——正文「最高峰略低于厄茨塔尔阿尔卑斯山」方向正确。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Zillertal Alps straddle the border between Tyrol and South Tyrol (Italy); the highest peak, Hochfeiler, reaches 3,510 m, and the range is one of Austria's important glacier ski areas.",
    formation:
      "The range is built of crystalline rock from the Alpine orogenic belt; sustained uplift combined with glacial erosion carved steep high-mountain terrain, and several modern glaciers persist among the peaks.",
    observation:
      "From the air, the Zillertal Alps show steep terrain crowned with glacial ice, while traditional Tyrolean villages and meadows line the Ziller valley floor below.",
    distinguish:
      "The Zillertal Alps neighbour the Ötztal Alps and are both glaciated high-mountain belts in Tyrol, but the Zillertal Alps straddle the Austria-Italy border and their highest peak is somewhat lower than the Ötztal Alps' Wildspitze.",
    concept:
      "The Zillertal Alps illustrate the classic landform character of high-elevation crystalline-rock Alpine terrain — sharp summits, glacial cover and deeply cut valleys together.",
    history:
      "The Zillertal has traditionally been known for dairy farming and Alpine pasture culture, and the seasonal practice of moving cattle to high summer pastures continues in the valley today.",
  },

  karwendel: {
    // 全六段 sources: 比尔克峰 2749 m 为卡尔文德尔最高峰；卡尔文德尔为北石灰岩阿尔卑斯山中面积最大的单一山系
    //   （长逾 45 km、宽约 30 km），南麓紧邻因斯布鲁克。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Karwendel is the largest single range of the Northern Limestone Alps, lying between the Inn Valley and the Isar Valley; its highest peak, Birkkarspitze, reaches 2,749 m, and its southern flank rises directly above the city of Innsbruck.",
    formation:
      "The range's limestone was deposited in Triassic marine conditions roughly 250 million years ago; after Alpine uplift, long-term water and glacial erosion carved steep cliff faces, moraines and vast scree slopes.",
    observation:
      "From the air, the Karwendel shows classic limestone high-mountain form — grey-white sheer cliffs interwoven with grey scree slopes; the southern face rises almost directly above Innsbruck, forming the city's most distinctive backdrop.",
    distinguish:
      "Both the Karwendel and the Dachstein belong to the Northern Limestone Alps, but the Karwendel is the largest single range in this belt, while the Dachstein is better known for its extensive karst cave systems.",
    concept:
      "The Karwendel's limestone cliffs and vast scree slopes are a textbook case study in physical weathering and gravity-driven erosion in limestone high-mountain terrain.",
    history:
      "The Karwendel Nature Park is one of Austria's largest nature parks, preserving a relatively unspoiled high-mountain ecosystem.",
  },

  dachstein: {
    // seeing / observation / history sources: 上达赫斯坦峰 2995 m，地跨上奥地利、施泰尔马克、萨尔茨堡三州（「三州山」）；
    //   达赫斯坦石灰岩为上三叠统（约 2.35—2.01 亿年前），正文「约 2 亿年前」落在区间内；
    //   哈尔施塔特—达赫斯坦／萨尔茨卡默古特文化景观 1997 年列入 UNESCO。3 级。2026-09-10 核，verdict: ok。
    // seeing sources: 「三州山」指整个山块，不指主峰；三州交界点在 Torstein（2,947 m）。英文侧原本写的就是 massif、没错，**中文侧单侧错**。**随机抽样审计（seed=1）抽中**。2026-09-12 核。
    seeing:
      "The Dachstein straddles the border between Upper Austria and Styria; its highest peak, Hoher Dachstein, reaches 2,995 m, and because the massif also touches Salzburg it is sometimes called the \"three-state mountain.\"",
    // formation sources: 达赫斯坦冰川群为阿尔卑斯最东端冰川（ANISA 2023，2 级）；「最北」无来源。核实 2026-09-12
    formation:
      "The massif is built mainly of Dachstein limestone formed roughly 200 million years ago; sustained karst dissolution has carved an extensive cave system, with nearly 800 caves recorded in a 2023 survey — the Dachstein glaciers, the Hallstatt Glacier among them, are the easternmost in the Alps.",
    observation:
      "From the air, the Dachstein shows classic karst high-mountain form — grey-white limestone dotted with dissolution hollows and cave entrances, the white ice of the summit's Hallstatt Glacier standing out sharply against the grey rock around it.",
    distinguish:
      "Both the Dachstein and the Karwendel belong to the Northern Limestone Alps, but the Dachstein's karst cave system is more extensively developed (the Mammoth Cave, the Giant Ice Cave and others are open to visitors), while the Karwendel is defined by its intact cliff faces and scree slopes.",
    concept:
      "The Dachstein's karst cave system illustrates the complete process by which surface water dissolves limestone over long periods to form an underground cave network — an important case study in Central European karst landforms.",
    history:
      "The Dachstein-Hallstatt area has a long history of salt mining; the village of Hallstatt at its foot was inscribed as a UNESCO World Heritage cultural landscape in 1997.",
  },

  "rax-schneeberg": {
    // 全六段 sources: 施内山 2076 m，是阿尔卑斯向东延伸中最后一座超过 2000 米的山峰。
    //   第一维也纳高山泉水管道由 Eduard Suess 规划、**1873-10-24 由弗朗茨·约瑟夫一世启用、全长 120 公里**，
    //   水源即取自施内山一带（Kaiserbrunn 等泉眼）——维也纳市政府官网（1 级）逐项确认。2026-09-10 核，verdict: ok。
    seeing:
      "The Rax-Schneeberg Group is Lower Austria's highest mountain area; the Schneeberg reaches 2,076 m and is the easternmost peak in the Alps to exceed 2,000 m, only about an hour's drive from Vienna.",
    formation:
      "The massif is a limestone karst highland, structurally the easternmost extension of the Northern Limestone Alps, with extensive karst development.",
    observation:
      "From the air, the Rax-Schneeberg Group shows a comparatively gentle karst-highland outline, in clear contrast with the sharp, snow-crowned peaks of the Hohe Tauern further west — the point where the Alps visibly \"taper off\" toward the east.",
    distinguish:
      "Both the Rax-Schneeberg Group and the Totes Gebirge are karst-highland massifs, but Rax-Schneeberg is lower and sits at the easternmost tip of the Alps, while the Totes Gebirge is one of Central Europe's largest karst plateaus.",
    concept:
      "Sitting at the easternmost edge of the Alps near Vienna, the Rax-Schneeberg Group offers a direct case study in how the Alpine chain's overall trend and terrain gradually change along its length.",
    history:
      "Since 1873, karst springs around the Schneeberg have supplied Vienna's drinking water via a 120 km pipeline; known as Vienna's \"local mountain,\" it has long been a favoured hiking destination for the city's residents.",
  },

  "carnic-alps": {
    // 全六段 sources: 霍厄瓦特峰（Monte Coglians）2780 m，位于奥意交界。
    //   ✅ **零争议红线复核**：普勒肯山口与一战前线只作简短事实陈述、无评价、不描述边界线与主权 ——
    //   与 CLAUDE.md 对意大利「一战山地战（简短事实）」的处理一致，通过。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Carnic Alps are part of the Southern Limestone Alps, their main ridge running roughly 100 km along the Austria-Italy border; the highest point, Hohe Warte, reaches 2,780 m.",
    formation:
      "The range preserves a continuous Devonian-to-Carboniferous stratigraphic sequence, making it an important site for studying this geological transition; sustained uplift combined with river erosion shaped today's mountain terrain.",
    observation:
      "From the air, the Carnic Alps form a continuous east-west ridge running along the Austria-Italy border, with vegetation and landform differing slightly between the north- and south-facing slopes.",
    distinguish:
      "Both the Carnic Alps and the Silvretta Alps are cross-border ranges for Austria, but the Carnic Alps border Italy and are known for their Paleozoic strata, while the Silvretta Alps border Switzerland and are known for their modern glacial landforms.",
    concept:
      "The Carnic Alps preserve an intact marine stratigraphic sequence spanning the Devonian to Carboniferous, making them an important reference section for geologists studying this geological boundary worldwide.",
    history:
      "The Plöcken Pass through the Carnic Alps has long served as a key route between Austria and Italy; during the First World War this area was one of the fronts of the Alpine mountain war.",
  },

  "kitzbuhel-alps": {
    // seeing sources: 基茨比厄尔霍恩峰 1996 m 为该山系最高峰。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Kitzbühel Alps are a stretch of slate-and-phyllite terrain in the Eastern Alps, lying between the Ziller and Saalach rivers; the highest peak, Kitzbüheler Horn, reaches 1,996 m.",
    formation:
      "The range is built mainly of Paleozoic phyllite and slate with some older limestone; being softer rock than the limestone Alps to the north, uplift and erosion together shaped gentler slopes and more rounded terrain.",
    observation:
      "From the air, the Kitzbühel Alps show a comparatively gentle, green mountain outline, in sharp contrast with the steep grey-white limestone cliffs of the Karwendel to the north — a clear illustration of how differing rock types shape terrain.",
    distinguish:
      "The Kitzbühel Alps and the Karwendel lie next to each other but differ entirely in rock type — the Kitzbühel Alps are gentle-sloped terrain built of phyllite and slate, while the Karwendel is steep terrain built of limestone.",
    concept:
      "The Kitzbühel Alps illustrate how differing rock types within the same orogenic belt shape landform differently — softer metamorphic rock erodes into rounder terrain than hard limestone.",
    history:
      "The town of Kitzbühel has been a renowned winter ski resort since the early 20th century, and the Hahnenkamm alpine skiing World Cup race held nearby each year is internationally famous.",
  },

  "silvretta-alps-at": {
    // formation sources: 皮兹利纳德峰 3410—3411 m（不同测绘口径略有差异），在瑞士格劳宾登州境内，为希尔弗雷塔山最高峰。
    //   跨境表述保持中性、不描述边界线、不表述主权。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Silvretta Alps are a stretch of the Central Eastern Alps spanning Tyrol and Vorarlberg in Austria and Graubünden in Switzerland; the terrain on the Austrian side is comparatively gentle.",
    formation:
      "The range is built mainly of crystalline rock as part of the Alpine orogenic belt; most of the massif, including its highest peak, Piz Linard (3,411 m), lies within Switzerland, with the Austrian side sitting at somewhat lower elevation.",
    observation:
      "From the air, the Silvretta Alps show classic high-mountain crystalline-rock terrain; the Silvretta reservoir near the Bielerhöhe pass stands out among the peaks, its water surface contrasting with the bare rock and sparse vegetation around it.",
    distinguish:
      "Both the Silvretta Alps and the Carnic Alps are cross-border ranges for Austria, but the Silvretta Alps border Switzerland and are known for high-mountain hydropower development and glacier monitoring, while the Carnic Alps border Italy and are known for Paleozoic strata.",
    concept:
      "The Bielerhöhe pass area of the Silvretta Alps is a representative site for high-mountain hydropower development and long-term glacier monitoring in the Alps.",
    // history sources: 水库年代：1938 年动工、1943 年首次部分蓄水、1951 年首次完全蓄水。原文「20 世纪初」前移了三四十年。3 级。2026-09-10 核。
    history:
      "The Silvretta reservoir, begun in 1938 and first filled completely in 1951, has been generating hydroelectric power ever since, a representative case in the history of high-mountain hydropower development in the Austrian Alps.",
  },

  "totes-gebirge": {
    // 全六段 sources: 大普里尔峰 2515 m；「中欧面积最大的喀斯特高原」与德语维基口径一致。
    //   ✅ 与 `steinernes-meer`、`tennengebirge` 并排读：三条都是北部石灰岩阿尔卑斯的喀斯特高原、**写的是同一套成因**（三叠纪石灰岩 + 抬升 + 冰蚀 + 溶蚀），没有被写成三套。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Totes Gebirge, part of the Northern Limestone Alps, is Central Europe's largest karst plateau; its highest point, Großer Priel, reaches 2,515 m.",
    formation:
      "The massif is built mainly of Dachstein limestone; sustained karst dissolution has carved numerous funnel-shaped hollows and caves, leaving steep cliff faces and a comparatively flat summit plateau.",
    observation:
      "From the air, the Totes Gebirge shows classic karst-plateau form — a broad, comparatively flat top dropping away sharply at the edges, scattered with numerous circular dissolution hollows, with several peaks exceeding 2,000 m.",
    distinguish:
      "Both the Totes Gebirge and the Steinernes Meer are karst-plateau massifs, but the Totes Gebirge is larger and is Central Europe's largest karst plateau, while the Steinernes Meer straddles the Austria-Germany border and is known as part of the Berchtesgaden Alps.",
    concept:
      "The Totes Gebirge (literally \"Dead Mountains\") takes its name from its sparse surface vegetation and well-developed underground drainage — a useful case study in the interaction between surface and underground water systems on karst plateaus.",
    history:
      "The Totes Gebirge has historically been sparsely visited, its name directly reflecting the bleak plateau landscape; today it draws hikers and alpinists seeking out its untouched karst terrain.",
  },

  "steinernes-meer": {
    // 全六段 sources: 泽尔布峰 2655 m；地跨萨尔茨堡州与巴伐利亚；主体为约 2.3 亿年前的达赫斯坦石灰岩叠于拉姆绍白云岩之上。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Steinernes Meer, part of the Berchtesgaden Alps, straddles Austria's Salzburg state and Germany's Bavaria; its highest point, Selbhorn, reaches 2,655 m.",
    formation:
      "The massif is built mainly of Dachstein limestone, roughly 230 million years old, layered over Ramsau dolomite; above 2,000 m elevation it shows classic karst-plateau form.",
    observation:
      "From the air, the peaks of the Steinernes Meer above 2,000 m sit closely packed and nearly level with one another, resembling a rippled sea of stone — the origin of the name \"Stone Sea.\"",
    distinguish:
      "Both the Steinernes Meer and the Totes Gebirge are karst-plateau massifs, but the Steinernes Meer straddles the Austria-Germany border, while the Totes Gebirge lies entirely within Austria and is larger.",
    concept:
      "With most of its peaks clustered between 2,000 and 2,600 m and little variation in height, the Steinernes Meer is a direct case study in the \"levelling\" erosion process characteristic of karst plateaus.",
    history:
      "Historically rugged and sparsely visited, the Steinernes Meer remains one of the less-developed high-mountain wilderness areas of the Alps.",
  },

  tennengebirge: {
    // seeing / formation / history sources: 冰巨人世界洞穴系统总长逾 42 km、世界最大冰洞；
    //   1879 年 Anton Posselt 首次系统考察、当时只探到最初约 200 米（Posselt-Kreuz）；洞口在霍赫科格尔峰下。3 级中英互证。
    //   ⚠️ 「洞口宽约 20 米、高约 18 米」**记 unknown**：德英维基与洞穴官网都只给入口海拔 1640 m，未给宽高，查不到支持或反驳。2026-09-10 核。
    seeing:
      "The Tennengebirge is a karst plateau of the Northern Limestone Alps near Werfen, about 40 km south of Salzburg; inside the massif, Eisriesenwelt is the largest known ice cave in the world.",
    formation:
      "The massif is built of thick limestone; karst dissolution has carved a cave system stretching more than 42 km. Winter snow seeps in through the entrance, and summer airflow shapes it into ice, producing the cave's distinctive ice formations.",
    // observation sources: 洞口尺寸疑为洞内通道尺寸，删去。核实 2026-09-12
    observation:
      "From the air, the Tennengebirge shows the classic outline of a karst plateau; the cave entrance beneath the Hochkogel peak in the middle of the massif marks the location of Eisriesenwelt.",
    distinguish:
      "Both the Tennengebirge and the Dachstein host major karst cave systems, but the Tennengebirge's Eisriesenwelt is famous for its massive ice formations, while the Dachstein's cave system is known for a network of caves including the Mammoth Cave.",
    concept:
      "Eisriesenwelt illustrates a distinctive \"wind-driven ice formation\" mechanism in karst caves — cold winter air sinks and pools inside the cave, and in summer warm, moist air from outside condenses and freezes on contact, keeping the cave near 0°C even in summer.",
    history:
      "The cave was known only to locals for a long time until Anton Posselt made the first systematic exploration in 1879, covering just the first 200 m; it was gradually explored further and developed into the world's largest ice cave.",
  },

  wienerwald: {
    // 全六段 sources: 舍普尔峰 893 m；2005 年列为 UNESCO 生物圈保护区。官方常引面积 1056.45 km²，正文「约 1000 平方公里」已带「约」字、量级一致，不改。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Wienerwald (Vienna Woods) is the final stretch of hills where the Alps taper off toward Vienna's outskirts, covering about 1,000 km²; its highest point, Schöpfl, reaches 893 m.",
    formation:
      "The bedrock is mainly limestone and dolomite, the easternmost extension of the Northern Limestone Alps; limestone's ease of dissolution lets rainwater seep underground to form subterranean streams, producing typical karst landforms.",
    observation:
      "From the air, the Wienerwald shows low, gently rolling, densely forested hills, in sharp contrast with the flat, urbanised Vienna Basin to the east — a clear marker of the transition zone between the Alps and the Pannonian Plain.",
    distinguish:
      "Both the Wienerwald and the Waldviertel plateau are low hills near Vienna, but the Wienerwald is the eastern extension of the Alpine limestone system, while the Waldviertel sits on the granite-and-gneiss basement of the Bohemian Massif — entirely different rock types and origins.",
    concept:
      "The Wienerwald is a textbook example of the Alps gradually tapering from towering snow peaks into plains and hills, illustrating how differing degrees of uplift along the same orogenic belt produce differing relief.",
    history:
      "The Wienerwald has been an important recreational area for Vienna's residents since the 19th century, and was designated a UNESCO Biosphere Reserve in 2005.",
  },

  waldviertel: {
    // seeing sources: 最高峰：**蒂施贝格峰 1063 m**（下奥地利／上奥地利／波希米亚三邦交界的 Freiwald 一带）；内贝尔峰 1017 m 是第二高、只是更有名。3 级多方一致。2026-09-10 核。
    seeing:
      "The Waldviertel is a low, gently rolling plateau in north-western Lower Austria, an extension of the Bohemian Massif within Austria; its highest point is the Tischberg at 1,063 m, while the better-known Nebelstein, 1,017 m, is only the second-highest.",
    formation:
      "The plateau's bedrock is mainly ancient granite and gneiss, part of the Bohemian Massif formed in Precambrian to Paleozoic times on the European continent; long-term weathering and erosion have shaped today's low, gently rolling surface.",
    observation:
      "From the air, the Waldviertel shows a low plateau landscape interwoven with extensive forest and grassland, its relief gentle and sloping, in clear contrast with the steep high-mountain outline of the Alps to the south.",
    distinguish:
      "Both the Waldviertel and the Wienerwald are low hill regions, but the Waldviertel's bedrock is the ancient granite and gneiss of the Bohemian Massif, while the Wienerwald's bedrock is the geologically younger limestone and dolomite of the Alpine orogenic belt.",
    concept:
      "The Waldviertel exposes some of the oldest crystalline basement rock in Austria, an important window into the Precambrian-to-Paleozoic crustal evolution of the European continent.",
    history:
      "The Waldviertel has historically been less developed due to poor soil and limited transport links, and still preserves extensive forest and traditional farming landscapes today — it remains one of Austria's least densely populated regions.",
  },

  "vienna-basin": {
    // 全六段 sources: ✅ **构造类型专项复核**：正文写的正是**走滑拉分盆地（Pull-Apart-Becken）**，没有写成普通断陷或冲积盆地。
    //   沉降自约 1700 万年前（中新世 Karpatium 末）开始，构造活动延续至今，每年约 3—4 次有感地震，集中在维也纳新城与温泉线断裂带。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Vienna Basin sits at the junction of the Alps, the Carpathians and the Pannonian Plain — a geologically young tectonic subsidence basin that topographically separates the Alps from the Western Carpathians.",
    formation:
      "The basin formed through sustained extensional subsidence along strike-slip faults since the Miocene; underlying rock layers show that the Alps and Carpathians were once geologically continuous, only separated at the surface by this young basin's subsidence — Quaternary faulting continues to this day.",
    observation:
      "From the air, the Vienna Basin shows broad, flat terrain, in sharp contrast with the mountainous outlines of the Alps and Carpathians to its south and north — the core lowland where Vienna, Austria's capital, and surrounding towns are located.",
    distinguish:
      "Both the Vienna Basin and the Wachau lie in eastern Austria, but the Vienna Basin is a tectonic subsidence basin with broad, flat terrain, while the Wachau is a narrow valley cut by the Danube with undulating terrain along its banks.",
    concept:
      "Ongoing fault activity in the Vienna Basin makes this one of Austria's relatively more seismically active areas, and an important case study in the tectonic evolution at the junction of the Alps and Carpathians.",
    history:
      "The Vienna Basin has been an important transport hub and agricultural region since Roman times; Vienna, Austria's capital, sits at the basin's north-western edge.",
  },

  wachau: {
    // 全六段 sources: 梅尔克—克雷姆斯之间约 35—36 km 的多瑙河谷；2000 年作为文化景观列入 UNESCO
    //   （连同梅尔克／格特魏格修道院与克雷姆斯古城）。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Wachau is a roughly 36 km stretch of valley cut by the Danube between Melk and Krems, its banks lined with terraced vineyards, medieval monasteries and castles.",
    formation:
      "The valley was carved by long-term erosion of the surrounding highlands by the Danube; the valley floor is covered with a loess layer, with river terraces of gravel and fine flood sediment providing well-suited soil for viticulture on both banks.",
    observation:
      "From the air, the Wachau shows the Danube winding through terraced vineyards layered along both banks, with monasteries and castles along the river marking this stretch of valley unmistakably.",
    distinguish:
      "Both the Wachau and the Inn Valley are important river valleys in Austria, but the Wachau was cut by the Danube and is known for viticulture and historic architecture, while the Inn Valley is a broad glacial valley centred on the Alpine city of Innsbruck.",
    concept:
      "The loess and river-terrace deposits along the Wachau provide ideal drainage and heat retention for viticulture — a useful case study in the relationship between valley landform and agricultural land use.",
    history:
      "The Wachau shows traces of human activity dating to prehistoric times; numerous monasteries and castles were built along the river from the medieval period onward, and it was inscribed as a UNESCO World Heritage cultural landscape in 2000.",
  },

  inntal: {
    // seeing sources: 山系归属：因斯布鲁克北侧卡尔文德尔北链、**南侧为施图拜／图克斯阿尔卑斯山（帕彻科费尔）**；基茨比厄尔阿尔卑斯山在更东段（沃格尔—基茨比厄尔—库夫施泰因）。原文把它挂错了河段。3 级。2026-09-10 核。
    seeing:
      "The Inn Valley (Inntal) is a broad, west-to-east glacial valley cut through the Eastern Alps by the Inn River, flanked by the Karwendel to the north; around Innsbruck the southern wall is the Stubai and Tuxer Alps (the Patscherkofel side), while the Kitzbühel Alps line a stretch of the valley farther east. Innsbruck sits in the valley's middle stretch.",
    formation:
      "The valley was carved by repeated glaciation during the ice ages; its slopes preserve moraine terraces from the Würm glaciation, while the lower plain was built up by long-term alluvial deposition from the Inn River, with the valley floor generally between 500 and 1,000 m elevation.",
    observation:
      "From the air, the Inn Valley shows a sharp contrast between its broad, flat floor and the steep, towering mountains on either side — classic Alpine glacial-valley form, with Innsbruck's urban area stretching east-west along the valley floor.",
    distinguish:
      "Both the Inn Valley and the Wachau are important valley landforms in Austria, but the Inn Valley is a broad U-shaped valley of glacial origin, while the Wachau is a narrow V-shaped valley cut by the Danube.",
    concept:
      "The moraine terraces preserved on the slopes of the Inn Valley are important landform evidence for studying the Alps' ice-age history, illustrating how repeated glacial advance and retreat shaped the valley's form.",
    history:
      "The Inn Valley has long served as an important transport corridor through the Alps; Innsbruck, as the capital of Tyrol, has historically been a key hub linking the German-speaking lands with Italy.",
  },

  liechtensteinklamm: {
    // seeing / formation / history sources: 圣约翰-蓬高附近；全长约 4 km（游览段约 1 km）、崖壁最高处约 300 m；
    //   1875 年动工（本地蓬高登山会先启动、经费不足后由列支敦士登亲王约翰二世捐 600 古尔登续建）、1876 年完工。3 级中英互证。
    //   ⚠️ 「每年约 10 万游客」**记 unknown**：英文维基与正文一致给约 10 万，**德语维基给 2025 年约 22.7 万人次**，两个 3 级来源互相矛盾，
    //   且正文没写年份。下一轮向运营方 liechtensteinklamm.at 要逐年统计，按 C8 加时点后再定。2026-09-10 核。
    seeing:
      "Liechtensteinklamm is a limestone gorge near St. Johann im Pongau, about 50 km south of Salzburg, roughly 4 km long with cliff walls up to about 300 m high.",
    formation:
      "The gorge was cut by long-term river downcutting through the surrounding limestone, leaving near-vertical walls; a waterfall marks the gorge's end, a classic limestone-gorge landform.",
    observation:
      "From the air, Liechtensteinklamm is a narrow, dark cleft cut into the mountainside, its steep walls pressing close together; the rushing water at its floor and the waterfall at its end are the clearest markers of this gorge.",
    distinguish:
      "Both Liechtensteinklamm and the Krimml Waterfalls are well-known gorge/waterfall landforms in Austria, but Liechtensteinklamm's main feature is the narrow, deep gorge itself, while the Krimml Waterfalls are centred on a three-tiered waterfall with a 380 m drop.",
    concept:
      "Liechtensteinklamm illustrates the classic process by which a river cuts a deep, narrow gorge into limestone over long periods — a representative example of limestone gorge landforms in the Alps.",
    // history sources: 2016 年半年逾 20 万人次（圣约翰-蓬高市政府，1 级）；会变的量。核实 2026-09-12
    history:
      "In 1875 Johann II of Liechtenstein funded the wooden walkways built through the gorge, which take their name from him; in 2016 alone, more than 200,000 visitors walked it in six months.",
  },

  "krimml-waterfalls": {
    // seeing sources: 总落差 380 m，奥地利与欧洲最高、世界第五（官方运营方 wasserfaelle-krimml.at，2 级）。
    //   三级落差约 145/100/140 m，与正文的 140/100/140 基本一致，不动。2026-09-10 核。
    seeing:
      "The Krimml Waterfalls are a three-tiered cascade on the Krimmler Ache with a total drop of about 380 m — Austria's highest waterfall, the highest in Europe and the fifth-highest in the world.",
    // formation sources: 下泄河谷：**萨尔察赫河谷（平茨高）**，不是因河谷——萨尔察赫要到远下游才汇入因河。总落差 380 m、奥地利与欧洲最高、世界第五（官方运营方 wasserfaelle-krimml.at，2 级）核实无误。2026-09-10 核。
    formation:
      "The falls are fed by glacial meltwater from the Hohe Tauern; before reaching the floor of the Salzach valley in the Pinzgau of Salzburg, the Krimmler Ache drops over three tiers of roughly 140 m, 100 m and 140 m, with flow varying enormously with the season's snow and ice melt.",
    observation:
      "From the air, the Krimml Waterfalls appear as a vertical white curtain of water set in green mountain forest, its three-tiered, stepped form clearly visible, with the surrounding spray creating a permanently humid microclimate.",
    distinguish:
      "Both the Krimml Waterfalls and Liechtensteinklamm are notable water-carved landforms in Austria, but the Krimml Waterfalls are defined by the volume and drop of a vertical cascade, while Liechtensteinklamm is defined by the narrow gorge itself.",
    concept:
      "The Krimml Waterfalls' flow varies dramatically by season (up to 5.6 m³/s in summer, as low as 0.14 m³/s in winter) — a useful case study in the seasonal hydrology of glacier-melt-fed rivers.",
    history:
      "The Krimml Waterfalls lie within Hohe Tauern National Park and draw about 350,000 visitors a year, one of the most important natural landmarks in the Austrian Alps.",
  },

  "danube-river-at": {
    // seeing sources: 多瑙河欧洲第二长（全长约 2,888 km），约 350 km 流经奥地利 ——
    //   奥地利国家旅游局 https://www.austria.info/en-gb/regions/danube/（2 级，2026-09-08 核）。
    //   **奥地利境内的走向**：约霍恩施泰因入境 → 林茨盆地 → 施特鲁登高/尼伯龙根高/瓦豪河谷 →
    //   维也纳盆地 → 入斯洛伐克。
    //   **不流经因河谷** —— 因河是蒂罗尔州的另一条河，与多瑙河在**德国帕绍**（奥地利境外）汇合，
    //   两条河在奥地利境内没有共同河段。原文在 seeing 与 history 两处都把这两条河混成了一条，
    //   而同条目的 distinguish 段自己写着「因河则是……区域性河流」—— **一篇之内自相矛盾**。
    seeing:
      "The Danube is Europe's second-longest river, about 2,888 km in total, with roughly 350 km flowing through Austria, running west to east through the Linz basin, the Wachau and the Vienna Basin before continuing into Slovakia.",
    formation:
      "Within Austria the Danube crosses several distinct landform zones, and its channel form changes accordingly — narrowing into the Wachau's confined valley as it cuts through the hills there, then widening into a broad alluvial plain across the Vienna Basin.",
    observation:
      "From the air, the Danube in Austria alternates between narrow and broad stretches: hemmed in by hills through the Wachau, then opening into a wide, flat-banked channel across the Vienna Basin, linking major cities including Linz and Vienna along its course.",
    distinguish:
      "Both the Danube and the Inn are important rivers in Austria, but the Danube is a Europe-scale river running west to east across the whole country, while the Inn is a regional river flowing through western Tyrol before eventually joining the Danube via its own tributary system in Germany.",
    concept:
      "The Danube's alternating gorge-like and plain-like stretches within Austria are a useful case study in how a major river's channel form adjusts to tectonic structure as it crosses orogenic belts and subsidence basins.",
    history:
      "The Danube has long been Austria's main waterway, linking major cities including Linz and Vienna and serving as the historical core artery of trade and cultural exchange.",
  },

  "mur-river": {
    // concept sources: 上游河段的河漫滩森林为奥地利面积第二大（施泰尔马克 Murauen UNESCO 生物圈公园）；
    //   多瑙鲑（Huchen）作为受威胁物种在该河记录在案。3 级。2026-09-10 核，verdict: ok。
    // seeing sources: Unteres Murtal（2019 年 UNESCO 生物圈公园）在下游边境段。随机抽样审计（seed=3）抽中。2026-09-13 核。
    seeing:
      "The Mur rises in the Ankogel Group of the High Tauern, in the Lungau of Salzburg and runs about 453 km in total, much of it through Styria; the city of Graz sits on its banks.",
    formation:
      "The upper Mur runs through Alpine terrain, its middle and lower reaches crossing the hills and valleys of Styria before eventually joining the Drava via Slovenia and Croatia; the lower river, along the Slovenian border, preserves Austria's second-largest floodplain forest by area.",
    observation:
      "From the air, the upper Mur winds through mountain gorges, its middle and lower channel widening, with floodplain forest running in a band along the river; Graz's old town, laid out along both banks, is the clearest marker for identifying this river.",
    distinguish:
      "Both the Mur and the Danube are important rivers in Austria, but the Mur flows mainly through Styria and eventually joins the Drava (a Danube tributary within the Black Sea drainage), while the Danube runs directly across the whole of Austria.",
    concept:
      "The floodplain forest along the upper Mur is one of Europe's most species-rich habitats and the natural spawning ground for the endangered Danube salmon — an important case study in the conservation value of river ecosystems.",
    history:
      "Graz, the capital of Styria, grew historically thanks to the water transport and irrigation the Mur provided, and remains Austria's second-largest city by population today.",
  },

  worthersee: {
    seeing:
      "Wörthersee is Carinthia's largest lake, about 19.4 km² in area with a maximum depth of about 85 m; its comparatively warm summer water makes it an important resort destination in southern Austria.",
    formation:
      "The lake basin was carved by glacial erosion during the last ice age; after the glacier retreated, the hollow filled with water, with comparatively gentle terrain around it — a classic glacially carved lake on the southern flank of the Alps.",
    observation:
      "From the air, Wörthersee forms a long, narrow oval, its shoreline lined with resorts and marinas, the water taking on a warm, light-blue tone in the sun.",
    distinguish:
      "Both Wörthersee and the Attersee are well-known glacially carved lakes in Austria, but Wörthersee lies in Carinthia with comparatively warm summer water well-suited to swimming, while the Attersee lies in the Salzkammergut and is considerably deeper.",
    // concept sources: ⚠️ 夏季水温高的机制是**湖盆背风 + 水体交换缓慢 + 部分混合型（meromiktisch，仅上层 50—60 m 季节性混合）**，不是「地中海式微气候」。原文把湖泊物理换成了区域气候。面积 19.39 km²、最大水深 85.2 m、克恩顿州最大湖，均核实无误。3 级。2026-09-10 核。
    concept:
      "Wörthersee's warm summer water comes mostly from the basin itself: sheltered from wind and slow to exchange water, it is meromictic — only the top 50 to 60 m turn over seasonally, so heat piles up in the surface layer. It is not that the regional climate is milder.",
    history:
      "Wörthersee has been a favoured summer resort for Austria's upper class since the late 19th century, and its shores still preserve numerous Victorian-era villas.",
  },

  attersee: {
    // 全六段 sources: 面积 46.2 km²、平均水深 85 m、最大 169 m，**是完全位于奥地利境内面积最大的湖泊**。
    //   ✅ **排名口径专项复核**：这个「完全境内」的限定是必要的——新锡德尔湖跨奥匈两国，不计入这一档；
    //   与本库 `worthersee`（19.4 km²，克恩顿州最大）、`neusiedler-see` 三条并排读，三个排名同时成立。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Attersee is a glacially carved lake in the Salzkammergut region, about 46.2 km² in area — the largest lake lying entirely within Austrian territory.",
    formation:
      "The lake basin was carved by Alpine glacial erosion during the last ice age; after the glacier retreated, the hollow filled with water, with an average depth of about 85 m and a maximum of 169 m — clear water typical of a deep Alpine glacially carved lake.",
    observation:
      "From the air, the Attersee runs long and narrow on a north-south axis, its open water clear and deep blue, ringed by Alpine peaks, with traditional villages lining its eastern shore.",
    distinguish:
      "Both the Attersee and Wörthersee are important glacially carved lakes in Austria, but the Attersee is the largest lake entirely within Austria and considerably deeper, while Wörthersee is smaller in area but has warmer summer water.",
    concept:
      "The Attersee's clear, deep-water environment is an important case study in water-quality research for Alpine glacially carved lakes, and the surrounding area preserves a comparatively intact natural ecosystem.",
    history:
      "The Salzkammergut region around the Attersee has been known since antiquity for its salt deposits, and the lake remains an important tourist and resort destination in Austria today.",
  },

  "neusiedler-see": {
    // history sources: 2001 年作为奥匈共同申报的「费尔特／新锡德尔湖文化景观」列入 UNESCO。
    //   ✅ 零争议红线：跨境只作事实陈述、不描述边界线与主权；**未涉 1989 年泛欧野餐及相关冷战／边境议题**。2026-09-10 核。
    // seeing sources: 水深：**平均约 1 m、最大约 1.8 m**（两个独立来源一致），原文 50—60 cm 低估约一半。⚠️ C8：这是草原型内流浅湖，**面积与水深随年份大幅波动**、历史上多次近乎完全干涸，近年干旱屡创新低（布尔根兰州水文部门，1 级）——所以正文写波动而不是写死一个数。2026-09-10 核。
    seeing:
      "The Neusiedler See is the westernmost steppe lake in Europe, straddling Austria's Burgenland and Hungary — the largest endorheic lake in Central Europe, about 309 km² in area averaging about 1 m deep and reaching some 1.8 m — figures that swing widely, since the lake has repeatedly come close to drying out entirely and recent prolonged drought has driven it to record lows.",
    // formation sources: ⚠️ **区域古海史 ≠ 湖的年龄**：1600 万年前的古海是潘诺尼亚／维也纳盆地的区域地质史，而湖盆是末次冰期后（约 1.2—1.8 万年前）构造沉降形成的。原文把两件差了三个数量级的事连成一条因果链。
    //   ✅ 2001 年奥匈共同申报的「费尔特／新锡德尔湖文化景观」列入 UNESCO 属实；红线复核通过——未描述边界线、未涉 1989 年泛欧野餐。2026-09-10 核。
    formation:
      "Around 16 million years ago the area now spanning the Vienna Basin and the Hungarian plain was covered by an ancient sea, but the lake itself is far younger: its basin formed by tectonic subsidence after the last glaciation, roughly 12,000 to 18,000 years ago, rather than surviving from that ancient sea; as a typical steppe lake, it undergoes cycles of filling and complete drying before refilling again.",
    observation:
      "From the air, the Neusiedler See shows an open, flat, shallow water surface ringed by extensive reed beds, blending almost seamlessly with the flat Pannonian Plain around it — a highly distinctive steppe-lake landscape for Europe.",
    distinguish:
      "The Neusiedler See's origin differs entirely from Austria's other Alpine lakes (such as Wörthersee and the Attersee) — it is a shallow steppe lake on the Pannonian Plain, while the others are deep, glacially carved Alpine lakes.",
    concept:
      "The Neusiedler See's cyclical water-level fluctuations, extremely shallow depth and extensive reed wetlands make it an important case study in European steppe-lake ecosystems and a key stopover habitat for migratory birds.",
    history:
      "The Neusiedler See and its surrounding area, valued for their rich biodiversity and distinctive steppe-lake landscape, were inscribed as the cross-border \"Fertő / Neusiedlersee Cultural Landscape\" on the UNESCO World Heritage List in 2001.",
  },

  "millstatter-see": {
    // 全六段 sources: 米尔施泰特湖水深/面积与湖畔修道院史实本轮逐段核对无出入（Land Kärnten 官方湖泊数据，1 级），未改动；核实 2026-09-10
    seeing:
      "The Millstätter See is Carinthia's second-largest lake, about 13.3 km² in area with an average depth of about 89 m and a maximum of 142 m — among the deepest lakes in Austria.",
    formation:
      "The lake basin was carved by Alpine glacial erosion during the last ice age; the lake is long and narrow, ringed by mountains — a classic deep glacially carved lake on the southern flank of the Alps in Carinthia.",
    observation:
      "From the air, the Millstätter See forms a long, narrow band, its considerable depth giving the water a deep blue-green tone, with steep, densely forested mountains along its shores.",
    distinguish:
      "Both the Millstätter See and Wörthersee lie in Carinthia, but the Millstätter See is markedly deeper with a smaller surface area, while Wörthersee is known for its warmer summer water and larger surface area.",
    concept:
      "The Millstätter See's considerable depth produces pronounced thermal stratification — a useful case study in water stratification and ecosystems in deep Alpine lakes.",
    history:
      "The town of Millstatt has grown around its lakeside monastery since medieval times and remains an important lakeside resort destination in Carinthia today.",
  },

  hallstattersee: {
    // 全六段 sources: 哈尔施塔特湖冰蚀成因、盐矿开采史与 1997 年 UNESCO 文化景观列入本轮逐段核对无出入（whc.unesco.org/en/list/806，1 级），未改动；核实 2026-09-10
    seeing:
      "The Hallstättersee is a long, narrow glacially carved lake in the Salzkammergut, about 8.55 km² in area with a maximum depth of about 125 m; the village of Hallstatt sits on its eastern shore at the foot of the Dachstein.",
    formation:
      "The lake basin was carved by Alpine glacial erosion during the last ice age, forming a long, narrow trough set deep between the Dachstein and the surrounding mountains — one of many glacially carved lakes in the Salzkammergut.",
    observation:
      "From the air, the Hallstättersee is long, narrow and deep-set, with the colourful houses of Hallstatt village built up against the mountainside on its eastern shore, forming an unmistakable scene against the steep Dachstein massif to the west.",
    distinguish:
      "Both the Hallstättersee and the Millstätter See are long, narrow glacially carved lakes, but the Hallstättersee sits directly beside the Dachstein and is known for its historic lakeside village, while the Millstätter See is known for its greater depth and Carinthian resort atmosphere.",
    concept:
      "The area around the Hallstättersee is one of Europe's oldest sites of salt mining, and the lake together with this mining history forms a distinctive cultural-landform landscape.",
    history:
      "The village of Hallstatt was inscribed as part of the \"Hallstatt-Dachstein Salzkammergut Cultural Landscape\" on the UNESCO World Heritage List in 1997; local salt mining traces back to prehistoric times, making it one of the oldest sites of salt extraction in Europe.",
  },
};
