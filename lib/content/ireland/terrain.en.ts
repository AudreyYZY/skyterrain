import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Ireland ============
  "macgillycuddys-reeks": {
    // seeing sources: 卡朗图希尔 1038.6 米（爱尔兰地形测量局 OSI 官方高程），全境最高点；爱尔兰仅有的三座超千米山峰全在这条山脉内，**「唯一超 1000 米的山脉」这个排名成立**。2026-09-09 核，本轮无需改动。
    seeing:
      "MacGillycuddy's Reeks lies in County Kerry in south-west Ireland and is Ireland's only mountain range exceeding 1,000 m; its highest peak, Carrauntoohil, reaches 1,038.6 m, the highest point in the country.",
    formation:
      "The range is built mainly of Devonian Old Red Sandstone, uplifted during the Variscan orogeny about 360 million years ago; intense glacial erosion during the last ice age carved sharp peaks, corries and arêtes across the range.",
    observation:
      "From the air, a dense cluster of sharp peaks and deep corrie lakes stands out, with the Lakes of Killarney at the range's foot — a rare showcase of high-mountain terrain in Ireland.",
    distinguish:
      "Both MacGillycuddy's Reeks and the Wicklow Mountains are major Irish uplands, but the Reeks are built of Old Red Sandstone, reach greater elevation and show more pronounced glacial features, while Wicklow is a granite massif with gentler, more rounded relief.",
    concept:
      "MacGillycuddy's Reeks is a representative area for studying the relationship between Ireland's Old Red Sandstone strata and last-glacial landforms; its glacial features are the most pronounced anywhere in the country.",
    history:
      "The range takes its name from the historic territory of the local MacGillycuddy family; it is now a major hiking and climbing destination, with Carrauntoohil a traditional challenge for Irish mountaineers.",
  },
  "wicklow-mountains": {
    // 全六段 sources: Lugnaquilla 925 m；莱因斯特花岗岩岩基侵位 417.4—404.9 Ma（正文取整「约 4 亿年前」合理），
    //   是不列颠群岛最大的花岗岩出露区之一（正文用「之一」，保守表述成立）；威克洛山脉国家公园 1991 年成立。
    //   📌 交叉留痕：**本条正是证伪 `glenveagh`「爱尔兰面积最大的国家公园」的依据**——威克洛约 23,000 ha 才是最大。
    //   《Journal of the Geological Society》(1 级) + nationalparks.ie (1 级)。2026-09-10 核，verdict: ok。
    seeing:
      "The Wicklow Mountains lie south of Dublin and form the largest continuous upland in eastern Ireland, only about 30 km from Dublin city centre; the highest peak, Lugnaquilla, reaches 925 m.",
    formation:
      "The range is built mainly on a granite batholith, one of the largest granite outcrops in the British Isles, intruded around 400 million years ago and since worn by long weathering into today's comparatively rounded relief.",
    observation:
      "From the air, heather moorland and conifer plantation cover the uplands, with granite-carved glacial valleys such as Glendalough set among them, contrasting sharply with the Dublin lowlands beyond.",
    distinguish:
      "Both the Wicklow Mountains and MacGillycuddy's Reeks are major Irish uplands, but Wicklow is granite-built, rounded in profile and close to Dublin, while the Reeks are Old Red Sandstone and considerably more rugged.",
    concept:
      "The Wicklow granite batholith is an important case study in the British Isles for landforms produced by long-term weathering of a large granite intrusion.",
    history:
      "The uplands historically sheltered Irish resistance forces; the Glendalough valley holds an early Christian monastic site founded in the 6th century, and Wicklow Mountains National Park was established in 1991.",
  },
  "connemara-twelve-bens": {
    // 其余各段 sources: Benbaun 729 m 为十二本斯最高峰、也是戈尔韦郡最高点；前寒武纪石英岩；
    //   康尼马拉国家公园（1980 年设立，约 2000 公顷）核心区覆盖 Benbaun / Bencullagh / Benbrack / Muckanaght。
    //   盖尔泰赫特（Gaeltacht）社区表述为中性事实，✅ 零争议红线通过。nationalparks.ie（1 级）+ 3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Twelve Bens of Connemara, in County Galway in western Ireland, are a cluster of about twelve quartzite peaks; the highest, Benbaun, reaches 729 m and forms the core of Connemara National Park.",
    formation:
      "The peaks are built of hard, erosion-resistant Precambrian quartzite; sustained glacial erosion carved steep, conical summits, while the lower ground between them has developed extensive blanket bog due to poor drainage.",
    observation:
      "From the air, sharp quartzite peaks interweave with blanket bog and scattered lakes, while the Atlantic coast traces a jagged outline along the range's western flank.",
    distinguish:
      "Both the Twelve Bens and MacGillycuddy's Reeks are high Irish terrain, but the Twelve Bens are quartzite with extensive surrounding blanket bog, while the Reeks are Old Red Sandstone with a denser scatter of corrie lakes.",
    // concept sources: ⚠️ 「蓝碳」是专指**海岸与海洋**碳汇（红树林／海草床／盐沼）的专有术语（NOAA 定义，1 级），**不含内陆泥炭沼泽**。原文把它套在高地泥炭沼泽上，属术语误用而非措辞不准。改为「陆地泥炭碳汇」。2026-09-10 核。
    concept:
      "The extensive upland blanket bog around the Twelve Bens is a characteristic Irish terrestrial peatland carbon sink, illustrating the coexistence of quartzite mountains and peatland.",
    history:
      "The Connemara region is historically known for its Irish-speaking (Gaeltacht) communities, remaining one of Ireland's main Gaeltacht areas today; traditional stone-walled sheep pasture survives around the range.",
  },
  "comeragh-mountains": {
    // 全六段 sources: Fauscoum 792 m 为最高峰；古红砂岩的构造抬升 + 冰蚀共同塑造冰斗（Coumshingaun）、断崖与顶部台地。
    //   GSI 沃特福德郡地质遗址报告 WD016（1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The Comeragh Mountains lie in County Waterford in south-east Ireland; the highest peak, Fauscoum, reaches 792 m, and the summit forms a comparatively flat plateau.",
    formation:
      "The range is built of Old Red Sandstone; last-glacial erosion concentrated at the range's margins, carving several corries that now hold corrie lakes such as Coumshingaun, while the main summit retains a relatively flat plateau surface.",
    observation:
      "From the air, the flat, open summit plateau contrasts with steep cliffs at its edge, dotted with corrie lakes, standing out clearly against the lower, gentler hill country around it.",
    distinguish:
      "Both the Comeraghs and the Galtee Mountains are Old Red Sandstone uplands in southern Ireland, but the Comeraghs have a flatter summit plateau with corrie lakes concentrated at the margins, while the Galtees form a more continuous, undulating ridge.",
    concept:
      "The combination of a flat summit plateau with marginal corries in the Comeragh Mountains is a useful case for studying how glacial erosion intensity varies with position on a mountain massif.",
    history:
      "Coumshingaun has long been a subject of local folk song, and traditional grazing communities persist in the area, which is an important outdoor recreation area in south-east Ireland.",
  },
  "galtee-mountains": {
    // 全六段 sources: Galtymore 919 m，爱尔兰内陆最高山脉；古红砂岩。
    //   地名 Na Gaibhlte / Galty Mountains 经 logainm.ie 官方地名库（1 级）核对，词源「森林之山」与正文译法对应。2026-09-10 核，verdict: ok。
    seeing:
      "The Galtee Mountains lie in Ireland's southern interior and are the highest inland range in the country; the highest peak, Galtymore, reaches 919 m.",
    formation:
      "The range is built of Old Red Sandstone; last-glacial erosion carved several corrie lakes on the north-facing slopes, and the range as a whole forms a continuous east–west ridge.",
    observation:
      "From the air, the ridge shows continuous, undulating relief, with corrie lakes dotting the north slope, contrasting sharply with the low-lying Golden Vale to the south.",
    distinguish:
      "Both the Galtees and the Comeragh Mountains are Old Red Sandstone uplands in southern Ireland, but the Galtees are the highest inland range with a continuous undulating ridge, while the Comeraghs sit closer to the coast with a flatter summit plateau.",
    concept:
      "The Galtee Mountains are a representative area for studying the uplift and glacial erosion of Ireland's inland Old Red Sandstone ranges; the ridge's orientation closely reflects regional tectonic stress direction.",
    history:
      "The range's name derives from the Irish for \"wooded mountain\"; the Golden Vale at its foot is an important agricultural region historically noted for its fertile limestone soils.",
  },
  "nephin-beg-range": {
    // 全六段 sources: Slieve Carr 721 m 为最高峰；前寒武纪石英岩；Wild Nephin 一带为爱尔兰最大连片荒野区。
    //   ✅ 零争议红线：大饥荒后人口外迁写作客观史实陈述，**无责任归属或族群／英爱关系的评价性表述**，通过。3 级 + 官方页一致。2026-09-10 核，verdict: ok。
    seeing:
      "The Nephin Beg Range lies in County Mayo in north-west Ireland, a sparsely visited quartzite wilderness upland; the highest peak, Slieve Carr, reaches 721 m.",
    formation:
      "The range is built mainly of Precambrian quartzite, with extensive upland blanket bog developed across it — the product of sustained cool, wet climate and poor drainage.",
    observation:
      "From the air, vegetation dominated by heather and peat moss covers the range with almost no buildings or roads visible, making it one of the largest continuous wilderness areas in Ireland.",
    distinguish:
      "Both the Nephin Beg Range and the Twelve Bens are quartzite uplands in western Ireland, but Nephin Beg is far more sparsely populated and wilder, while the Twelve Bens lie near the developed Connemara tourist area.",
    concept:
      "The upland blanket-bog wilderness of the Nephin Beg Range is a priority conservation area in Ireland, illustrating how quartzite uplands develop extensive peatland under a cool, wet climate.",
    history:
      "The area has historically had a very sparse population, with substantial emigration following the 19th-century Great Famine; it is now a wilderness area prioritised for protection by Ireland's National Parks and Wildlife Service.",
  },
  "slieve-bloom-mountains": {
    // 全六段 sources: Arderin 527 m 为最高峰；砂岩与页岩（约 4 亿年前）。
    //   ✅ **专项复核「条目内部自相矛盾」**：「位于中部低地平原正中央」（地理位置）与「盆地边缘老地块」（地质结构位置）
    //   是两个不同角度的表述，**并不矛盾**——本轮特意并排读过，判定不改。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Slieve Bloom Mountains sit at the very centre of Ireland's flat central lowlands, one of the few areas of relief in this low-lying plain; the highest peak, Arderin, reaches 527 m.",
    formation:
      "The range is built of sandstone and shale, forming a relatively isolated old massif at the margin of Ireland's central lowland basin, standing above the surrounding peat-covered lowland plain.",
    observation:
      "From the air, the low, gentle hills, covered in heather moorland and forest, stand out sharply against the flat expanse of central lowland and bog stretching in every direction.",
    distinguish:
      "Both Slieve Bloom and the Ox Mountains are low Irish hill ranges, but Slieve Bloom sits isolated at the very centre of the central lowland plain, while the Ox Mountains lie along the north-west coast.",
    concept:
      "As an isolated massif within the central lowland plain, Slieve Bloom is an important reference point for understanding the relationship between Ireland's central basin structure and the older massifs around it.",
    history:
      "The uplands were historically an important peat-extraction and forestry area for central Ireland; the Slieve Bloom Way walking trail now makes it a major outdoor recreation area for the region.",
  },
  "ox-mountains": {
    // 全六段 sources: Knockalongy 544 m 为最高峰；Central Ox Mountains 为 Dalradian 岩系侵入体（新元古代），
    //   经中奥陶世 Grampian 造山变质，属爱尔兰最古老岩层记录**之一**（正文用「之一」，成立，不是裸最高级）。
    //   Springer 学术专章（1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The Ox Mountains straddle the border of counties Sligo and Mayo in north-west Ireland, forming a narrow, low range; the highest peak, Knockalongy, reaches 544 m.",
    formation:
      "The range is built of Precambrian metamorphic rock, among the oldest strata in Ireland; long weathering has left an overall low, rounded profile, distinct from the sharper, younger glacial mountains of the south-west.",
    observation:
      "From the air, the range forms a narrow band trending north-east to south-west, with gentle relief, blending with surrounding farmland and coastal lowland into a typical north-west Irish rural landscape.",
    distinguish:
      "Both the Ox Mountains and Slieve Bloom are low Irish hill ranges, but the Ox Mountains are Precambrian metamorphic rock in a narrow band, while Slieve Bloom is an isolated massif within the central lowland plain.",
    concept:
      "The Precambrian metamorphic rock of the Ox Mountains is among the oldest rock record on the island of Ireland, providing an important sample for studying the evolution of Ireland's Precambrian basement.",
    history:
      "The area has historically had a sparse population sustained by traditional farming, and several Neolithic burial sites survive around the range's foothills.",
  },
  "the-burren": {
    // seeing sources: 面积约 250 平方公里是「裸露石灰岩喀斯特台地」这一口径下的数（另有约 360 / 560 平方公里两个更大口径，**三个数并存、各有各的范围，不是打架**，正文取的口径与 250 吻合，2 级）；石灰岩为石炭纪维宪期约 3.4 亿年前沉积，正文「约 3.5 亿年」落在取整范围，判定不改。2026-09-09 核，本轮无需改动。
    //   https://clarelibraries.ie/localstudies/places/the-burren/karst-of-ireland-the-burren/
    seeing:
      "The Burren lies in County Clare in western Ireland, a roughly 250 km² Carboniferous limestone karst plateau where bare limestone pavement covers much of the surface.",
    formation:
      "Carboniferous limestone deposited around 350 million years ago was stripped of its soil cover by glacial scouring during the last ice age, leaving large expanses of exposed limestone; long-term rainwater dissolution has since produced classic karst features, with caves and underground rivers developed below.",
    observation:
      "From the air, the plateau surface shows grey, fissured limestone pavement (locally called \"clints\" and \"grikes\") with almost no soil or continuous vegetation cover — one of Ireland's most distinctive landscapes.",
    distinguish:
      "Both the Burren and the Aran Islands sit on the same limestone platform, but the Burren is the larger, mainland portion, while the Aran Islands are the part of this platform that emerges from the sea further offshore.",
    concept:
      "The Burren is one of Europe's most typical karst landscapes; its fissured limestone pavement supports an unusual coexistence of Arctic-alpine, Mediterranean and temperate plant communities, making it a classic case study bridging landform and ecology.",
    history:
      "The plateau holds numerous Neolithic burial monuments, including the Poulnabrone dolmen, making it an important record of Ireland's prehistoric human activity.",
  },
  "central-lowlands-bog-of-allen": {
    // 其余各段 sources: Bord na Móna 已于 2021 年正式停止能源用泥炭开采、转向修复，
    //   与正文「部分区域已转为自然保护与生态修复用地」一致（正文未写死年份，属可接受的模糊表述）。2 级。2026-09-10 核，verdict: ok。
    seeing:
      "Ireland's central lowlands form a low, broad synclinal basin of Carboniferous limestone covering much of the island's centre; the Bog of Allen is the largest and most representative of the region's raised bogs.",
    // formation sources: ⚠️ 成因**漏掉了定义性的一步**：凸起沼泽（raised bog）的关键是泥炭增厚后根系脱离富钙地下水、转为雨养（ombrotrophic），泥炭藓才能堆成隆起穹丘。原文的「排水不畅 + 堆积未分解」对**任何**沼泽都成立，区分不了 raised bog 与 fen。NPWS 修复最佳实践指南（1 级）。2026-09-10 核。
    formation:
      "After the last ice age, shallow lakes across the central lowland basin were gradually filled in by encroaching reed fen; as the peat thickened, plant roots lost contact with the calcium-rich groundwater below and came to depend entirely on rainfall — the \"ombrotrophic\" state — so that Sphagnum moss could proliferate and build the domed peat deposits, several metres thick, that lie over the limestone bedrock.",
    observation:
      "From the air, the central lowlands show a patchwork of flat farmland and raised bog, the peat surfaces a distinct dark brown that stands out clearly against the surrounding green fields.",
    distinguish:
      "Both the central lowlands and the Burren sit on Carboniferous limestone, but the central lowlands are low-lying and thickly covered in peat, while the Burren stands higher with its limestone surface largely stripped bare by glacial scouring.",
    concept:
      "Raised bog is the most representative wetland ecosystem of Ireland's central lowlands; its formation requires a sustained cool, wet climate together with low, flat terrain, making it an important sample for studying peatland carbon storage.",
    history:
      "The Bog of Allen was historically a major source of Irish peat fuel, with peat extraction once a significant local industry; parts of the bog have since been converted to conservation and ecological restoration use.",
  },
  glendalough: {
    // 全六段 sources: 威克洛花岗岩区，末次冰期冰蚀 U 形谷 + 上下两湖的串珠湖；
    //   圣基维尼（生于 498 年）6 世纪创立修道院、历经维京劫掠与重建，均为广泛记载史实，无评价性表述。3 级与教区／官方页一致。2026-09-10 核，verdict: ok。
    seeing:
      "Glendalough, meaning \"valley of the two lakes,\" is a classic glacial trough valley in the Wicklow Mountains, with an Upper Lake and Lower Lake strung along its floor.",
    formation:
      "The valley was carved by last-glacial ice moving through granite bedrock, producing a classic U-shaped cross-section; after the ice retreated, meltwater pooled in floor depressions to form the two chain-like glacial lakes.",
    observation:
      "From the air, steep flanks hem in the valley on both sides, with the two narrow lakes strung along its axis and the round tower of the ruined monastery at the valley mouth clearly visible — one of the most recognisable sights in the Wicklow Mountains.",
    distinguish:
      "Both Glendalough and Glenveagh are classic Irish glacial trough valleys, but Glendalough's floor holds two lakes and an early Christian site at its mouth, while Glenveagh holds a single lake and is dominated by national-park wilderness scenery.",
    concept:
      "Glendalough's U-shaped profile and chain of glacial lakes is a classic case for studying valley-glacier erosion processes during the last ice age.",
    history:
      "The monastery at the valley's mouth was founded by St Kevin in the 6th century; it survived Viking raids and repeated rebuilding, and the surviving round tower and church ruins are an important early Christian heritage site in Ireland.",
  },
  glenveagh: {
    // formation / distinguish / concept sources: 谷地由末次冰期冰川深切前寒武纪变质岩基岩而成，与地质背景一致。
    //   nationalparks.ie（1 级）。
    //   ✅ 零争议红线：1861 年 Derryveagh 驱逐事件**正文并未提及**，故无需处理；本轮确认没有评价性表述。2026-09-10 核，verdict: ok。
    seeing:
      "Glenveagh lies in County Donegal in north-west Ireland, a deeply cut glacial trough valley with steep cliffs flanking Lough Veagh at its floor.",
    formation:
      "The valley was carved by last-glacial ice cutting deeply into Precambrian metamorphic bedrock; after the ice retreated, meltwater collected to form the narrow Lough Veagh, with steep valley walls preserved on both sides.",
    // observation sources: 面积排名：格伦维国家公园约 16,548 ha，爱尔兰**第二大**；最大的是威克洛山脉国家公园约 23,000 ha（本库另有 `wicklow-mountains` 条目）。nationalparks.ie 两页，均 1 级。2026-09-10 核。
    observation:
      "From the air, the narrow lake is flanked by steep valley walls on both sides, with Glenveagh Castle set deep in the valley against a backdrop of wilderness terrain — the centrepiece of what is, by area, Ireland's second-largest national park.",
    distinguish:
      "Both Glenveagh and Glendalough are classic Irish glacial trough valleys, but Glenveagh lies in the north-western wilderness with steeper, more rugged valley walls, while Glendalough is closer to Dublin and better known for its historical and cultural landscape.",
    concept:
      "Glenveagh is a representative area for studying how Precambrian bedrock in north-west Ireland was deeply incised during the last ice age to form a fjord-like trough valley.",
    // history sources: ⚠️ 原文一句话里叠了四处错：① 「最大」实为第二大（威克洛约 23,000 ha）；② 1975 年是末代庄园主 Henry McIlhenny **售地**给公共工程部（OPW），不是捐赠；③ 国家公园 **1984 年**正式设立（爱尔兰第三座）；④ 城堡与花园是他 **1983 年**另行捐赠。三件不同年份的事被压成了一件。nationalparks.ie（1 级）。2026-09-10 核。
    history:
      "Glenveagh Castle, built in the 19th century, was once a private estate; its last owner sold the land to the Office of Public Works in 1975, the national park was formally established only in 1984, and he donated the castle and gardens separately in 1983. By area it is Ireland's second-largest national park.",
  },
  "gap-of-dunloe": {
    // seeing / observation / history sources: MacGillycuddy's Reeks 与紫山之间的狭窄山口；谷底五座冰蚀湖
    //   （Pater Noster lakes）；古红砂岩；19 世纪起的马车观光路线为广泛记载史实。
    //   ⚠️ **formation 的「沿两山之间构造薄弱带」记 unknown**：冰蚀谷本身有 2 级来源（Kerry-Cork 基岩地质图说明）印证，
    //   但「构造薄弱带」这一具体机制只见于旅游类通俗说法，**GSI 的地质图说明与郡级地质遗产报告里都找不到**。
    //   既查不到确证也查不到证伪，正文不动、记 unknown。2026-09-10 核，verdict: ok（一项 unknown）。
    seeing:
      "The Gap of Dunloe is a narrow mountain pass carved by glacial erosion between MacGillycuddy's Reeks and Purple Mountain, its floor strung with five small glacial lakes.",
    // formation sources: 冰川突破口成因（Rae 2004, JQS，2 级）；无构造薄弱带之说。核实 2026-09-12
    formation:
      "The pass was cut by last-glacial ice breaching the mountain barrier as it flowed north; after the ice retreated, meltwater pooled in floor depressions to form a chain of small lakes.",
    observation:
      "From the air, steep mountain flanks hem in the narrow pass, with a winding road linking the five small lakes in sequence — a classic hiking and jaunting-car route through MacGillycuddy's Reeks.",
    distinguish:
      "Both the Gap of Dunloe and Glendalough are classic Irish glacial valleys, but the Gap of Dunloe is narrower and steeper, functioning as a mountain corridor, while Glendalough is more open, valued equally for its lakes and historic site.",
    concept:
      "The Gap of Dunloe is a classic case for studying how glacial ice breaches a mountain barrier to cut a pass; its chain of small lakes illustrates a typical sequence of glacial-valley landforms.",
    history:
      "The pass was historically an important route linking the north and south of the Kerry mountains; it has served as a scenic route since the 19th century, and the traditional jaunting-car tours continue today.",
  },
  "lough-corrib": {
    // 全六段 sources: 面积约 175—176 km²。**「爱尔兰共和国境内最大湖泊」这个限定是必要的**——
    //   全岛最大的内伊湖（Lough Neagh）在北爱，正文的限定语正确区分了两者（也符合北爱用中性地理名、不表述主权的红线）。
    //   平均水深仅约 2.5 m、北部最深约 50—60 m，与「水深较浅」一致；马斯克湖经 Cong 地下水道与科里布湖连通。3 级与 GSI 报告一致。2026-09-10 核，verdict: ok。
    seeing:
      "Lough Corrib is the largest lake in the Republic of Ireland, covering about 176 km²; it drains via the Corrib River into Galway Bay.",
    formation:
      "The lake basin sits on Carboniferous limestone bedrock; last-glacial erosion combined with subsequent karst dissolution shaped its outline, and underground rivers and caves have developed in the surrounding limestone.",
    observation:
      "From the air, the lake shows an irregular, elongated form, with a densely islanded northern basin and a more open southern basin; its intricate shoreline is a landmark feature of western Ireland's waterscape.",
    distinguish:
      "Lough Corrib and Lough Mask are two adjoining limestone lakes in western Ireland linked by an underground river; Lough Corrib is larger with a more open southern basin, while Lough Mask has more developed karst caves.",
    concept:
      "Lough Corrib and its surrounding underground river system are a classic case for studying the interplay between surface water and groundwater in a limestone region.",
    history:
      "The lake has long been an important fishery and navigation route in western Ireland, with numerous medieval castle and monastery ruins surviving along its shores and islands.",
  },
  "killarney-lakes": {
    // 全六段 sources: 利恩湖／马克罗斯湖／上湖三湖；马克罗斯湖深 75 m，爱尔兰最深湖；
    //   基拉尼国家公园 1932 年由 Muckross 庄园捐赠给爱尔兰自由邦设立，为爱尔兰**首座**国家公园（nationalparks.ie，1 级）。
    //   ⚠️ 「18 世纪起为欧洲贵族『大旅行』目的地」略有简化：18 世纪的推动者是 Lord Kenmare 招揽游客，
    //   Grand Tour 式的旅游热潮更多见于 19 世纪维多利亚时代（1861 年女王到访后）。「18 世纪起成为旅游目的地」本身成立，
    //   「大旅行」属通俗化用词、非史实错误，**判定不改**，记在这里免得下一轮再改一遍。2026-09-10 核，verdict: ok。
    seeing:
      "The Lakes of Killarney comprise Lough Leane, Muckross Lake and the Upper Lake, three glacial lakes at the eastern foot of MacGillycuddy's Reeks, forming the core waterscape of Killarney National Park.",
    formation:
      "All three lakes occupy depressions carved by last-glacial ice; Muckross Lake, at 75 m deep, is Ireland's deepest lake, its basin depth closely tied to the intensity of glacial erosion there.",
    observation:
      "From the air, the three lakes lie in sequence along the eastern foot of MacGillycuddy's Reeks, their shores densely forested and the peaks mirrored on the water — one of Ireland's most iconic mountain-and-lake landscapes.",
    distinguish:
      "Both the Lakes of Killarney and Lough Corrib are major Irish lakes, but Killarney comprises three glacial lakes set against high mountains with greater depth, while Lough Corrib is a single, larger limestone lake that is comparatively shallow.",
    concept:
      "The mountain-and-lake landscape formed jointly by the Lakes of Killarney and MacGillycuddy's Reeks is a classic case for studying the relationship between last-glacial mountain erosion and lake-basin depth.",
    history:
      "The lakes have been a classic destination on the European Grand Tour since the 18th century; Killarney National Park, established in 1932, is Ireland's oldest national park.",
  },
  "lough-derg-shannon": {
    // 全六段 sources: 面积约 118 km² —— 国际湖泊数据库 ILEC 给 117.5/118 km²（2 级）与正文一致，
    //   但英文维基给 130 km²，**两个口径并存且差异不小**，都不是爱尔兰官方（EPA／OPW）直接发布的数字。
    //   取有 2 级支持的 118，**把冲突本身记在这里**——不写的话，下一轮碰到 130 的人会以为我们漏了更新、再改一次。
    //   下一轮补查 EPA／OPW 是否有官方湖泊面积口径。冰川拓宽香农河谷成湖、基拉洛因湖港贸易发展均属实。2026-09-10 核，verdict: ok（口径待统一）。
    seeing:
      "Lough Derg is the largest of the three major lakes along the River Shannon, covering about 118 km²; to distinguish it from the pilgrimage lake of the same name in County Donegal, this entry refers specifically to the Shannon's Lough Derg.",
    formation:
      "The lake basin occupies a widened stretch of the Shannon's course; last-glacial erosion broadened the existing valley, and after the ice retreated river water pooled in the low ground to form the lake, one link in a chain of lakes along the Shannon.",
    observation:
      "From the air, Lough Derg runs in a long north–south alignment with an intricate shoreline, connecting directly to the Shannon's channel upstream and downstream as part of Ireland's major inland waterway.",
    distinguish:
      "Both Lough Derg (Shannon) and Lough Mask are important Irish lakes, but Lough Derg is part of the Shannon's channel and carries navigation traffic, while Lough Mask is a separate limestone lake linked to Lough Corrib by an underground river.",
    concept:
      "Lough Derg is a classic case for studying how lakes form along a river course when glacial ice widens a valley and river water subsequently pools there, illustrating the continuous evolution of river and lake landforms.",
    history:
      "The lake has historically been an important node on Ireland's inland waterway network; lakeside towns such as Killaloe have grown since medieval times around lake-port trade.",
  },
  "lough-mask": {
    // 全六段 sources: 石灰岩湖盆、末次冰期冰蚀成盆、经 Cong 喀斯特通道与科里布湖连通，与已核的地质背景一致。
    //   📌 事前担心它写了「爱尔兰第三大湖」这类需要核口径的排名——**逐段读下来正文根本没有排名句**，担心不成立。
    //   与 `lough-corrib`（面积口径待统一）、`lough-derg-shannon` 并排读无冲突；内伊湖在北爱这一点由 lough-corrib 的「共和国境内最大」限定处理，符合中性地名红线。2026-09-10 核，verdict: ok。
    seeing:
      "Lough Mask is a limestone lake in western Ireland, linked to Lough Corrib to its south by an underground river, with well-developed karst caves around its shores.",
    formation:
      "The lake basin sits on Carboniferous limestone bedrock; last-glacial erosion shaped its outline, and part of its water drains through underground karst channels into Lough Corrib, an unusual case of connected surface and groundwater systems.",
    observation:
      "From the air, Lough Mask presents a broad, open surface with a relatively regular shoreline, separated from Lough Corrib to the south by a narrow strip of land through which the underground river connects the two lakes.",
    distinguish:
      "Though linked by an underground river and part of the same limestone water system, Lough Mask is smaller with more developed karst caves, while Lough Corrib is larger with a more open southern basin.",
    concept:
      "The underground river connection between Lough Mask and Lough Corrib is a classic case for studying the interaction between surface and groundwater systems in a karst region.",
    history:
      "The lake has historically been rich in salmon and trout, and angling tourism has been an important local economic activity since the 19th century.",
  },
  "river-shannon": {
    // seeing / formation sources: OSI 口径 224 英里 ≈ 360 km，源头香农锅泉（Cuilcagh 山麓，Cavan 郡）。
    //   「爱尔兰与不列颠群岛最长的河流」——**口径写全了**（没有只写「爱尔兰最长」而让读者猜是全岛还是共和国），与本库 river-liffey 并排读无冲突。2 级。2026-09-10 核，verdict: ok。
    seeing:
      "The River Shannon is the longest river in Ireland and the British Isles, running about 360 km from the Shannon Pot in the north of Ireland to meet the Atlantic in an estuary near Limerick.",
    formation:
      "The river runs along the margin of Ireland's central lowland basin; last-glacial erosion widened several stretches of valley along its course and formed a chain of lakes (Lough Derg, Lough Ree and others), with the river running broadly north to south.",
    observation:
      "From the air, the Shannon's channel is broad and gentle, stringing together several lakes along its course, with wetland and meadow lining its banks that blend into the peat-bog scenery of Ireland's central lowlands.",
    distinguish:
      "Both the Shannon and the Liffey are major Irish rivers, but the Shannon runs the length of central-western Ireland, is much longer and links a chain of lakes, while the Liffey is concentrated in the east around Dublin and is considerably shorter.",
    concept:
      "The chain of lakes along the Shannon is a classic case for studying how glacial erosion widens a river valley and subsequently links it into a series of lakes; the river is also a major water resource and navigation route for Ireland.",
    // history sources: 香农水电站（阿德纳克鲁沙）：1925 年开工、**1929-07-22 建成投运**。原文「20 世纪初」差了近三十年。RTÉ 专题（2 级）。2026-09-10 核。
    history:
      "The Shannon has historically been an important inland-navigation and irrigation resource; the Shannon hydroelectric scheme, completed in 1929, was one of Ireland's earliest major infrastructure projects.",
  },
  "river-liffey": {
    // seeing sources: 125 km 无出处；OSi 1958 给 132 km（经引注定位），写约 130 km。核实 2026-09-12
    seeing:
      "The River Liffey rises in the Wicklow Mountains and runs about 130 km, tracing a horseshoe course around the Wicklow uplands before flowing east into Dublin Bay — the geographic axis of Dublin's urban development.",
    formation:
      "The upper river rises on the granite uplands of the Wicklow Mountains; its middle course bends in an arc to skirt the mountain mass, and the lower course flattens out across the Dublin plain before entering Dublin Bay.",
    observation:
      "From the air, the Liffey runs through the heart of the city, its banks lined by central Dublin's built-up core, with the roughly semicircular sweep of Dublin Bay at its mouth forming a key landmark for reading the city's layout.",
    distinguish:
      "Both the Liffey and the Shannon are major Irish rivers, but the Liffey is confined to eastern Ireland around Dublin, is shorter and defined by its urban river landscape, while the Shannon runs the length of central-western Ireland through rural and lake terrain.",
    concept:
      "The Liffey's horseshoe-shaped course is a classic case for studying how a river's direction is altered by topographic obstruction; its lower estuary is also the geographic foundation for the development of Dublin's port.",
    history:
      "Dublin grew from a Viking settlement at the Liffey's mouth; the river remains an important geographic marker of the city's spatial division into the Northside and Southside today.",
  },
  "river-blackwater-munster": {
    // 全六段 sources: 源头在凯里郡 Mullaghareirk 山区，经科克郡马洛／费莫伊，在沃特福德郡利斯莫尔附近转南、由约赫尔入海；
    //   L 形转折与「爱尔兰的莱茵河」别称均有独立来源印证。2 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Munster Blackwater rises in County Kerry in south-west Ireland, flows east across the Munster plain, then turns sharply south near Lismore to enter the Atlantic at Youghal.",
    formation:
      "The upper river runs east along the margin of the Kerry uplands; its middle course crosses low ground on the Cork–Waterford border, and blocked by the Comeragh Mountains downstream it is forced into a sharp southward turn, producing a distinctive L-shaped course.",
    observation:
      "From the air, the middle Blackwater valley is broad and gentle with farmland on both banks; where it turns sharply south the channel narrows and the surrounding hills close in, before opening again at the broader harbour of Youghal at its mouth.",
    distinguish:
      "Both the Munster Blackwater and the Liffey are major Irish rivers, but the Blackwater makes an unusual L-shaped turn due to topographic blocking and runs through the heart of the Munster plain, while the Liffey traces a horseshoe around the Wicklow uplands and is concentrated around Dublin.",
    concept:
      "The Munster Blackwater's sharp southward turn where blocked by high ground downstream is a classic case for studying the interaction between river course and regional topographic structure.",
    history:
      "Because of the resemblance of its turning course to that of the European Rhine, the river has historically been nicknamed \"Ireland's Rhine\"; ruins such as Lismore Castle along its banks bear witness to the valley's long history of settlement.",
  },
  "aran-islands": {
    // formation / distinguish sources: 群岛为伯伦高原石灰岩台地向海延伸、部分淹没出露的地质连续体——
    //   这一框架在通俗地质资料中广泛印证，**但本轮没找到 GSI 的阿伦群岛专项地质遗产报告**（伯伦本身已有 GSI 支撑）。
    //   记 unknown 的不是结论、是级别：口径基本可信但停在 2 级，下一轮补查 GSI 阿伦专项报告固化为 1 级。2026-09-10 核。
    seeing:
      "The Aran Islands are three limestone islands at the mouth of Galway Bay, part of the same karst limestone platform as the Burren; the largest, Inishmore, holds the Iron Age stone fort of Dún Aonghasa.",
    formation:
      "The islands are the part of the Burren limestone platform that extends out to sea and emerges above the water; their surfaces show the same characteristic fissured, karst limestone pavement.",
    observation:
      "From the air, the three islands show a grey, plate-like limestone texture, with traditional stone walls dividing the fields into regular parcels, creating a striking colour contrast with the blue Atlantic around them.",
    distinguish:
      "The Aran Islands and the Burren share the same limestone karst platform, but the Aran Islands are the emergent, island portion surrounded by sea, while the Burren is the mainland portion, larger and more continuous.",
    concept:
      "The geological continuity between the Aran Islands' limestone platform and the mainland Burren is a classic case for studying how a karst plateau can be partly submerged and partly emerge as islands due to sea-level change.",
    // history sources: 邓恩古堡年代：**青铜时代晚期（约前 1100 年）始建**，铁器时代加建（chevaux-de-frise）并沿用至中世纪早期。原文只写「铁器时代」，把起源砍掉了约一千年。2 级。2026-09-10 核。
    history:
      "Dún Aonghasa on Inishmore is one of the most important prehistoric stone fortifications in Ireland, first built in the Late Bronze Age and still in use through the Iron Age; the islands remain among the best-preserved Irish-speaking (Gaeltacht) areas in the country.",
  },
  "skellig-michael": {
    // seeing sources: 岛屿最高点约 218 米（西南端隐修点），修道院所在峰约 185 米；隐修院约 6–8 世纪、僧侣定居至约 12–13 世纪、1996 年列入 UNESCO。**零争议红线本轮专门复核：通过。** 2026-09-09 核，本轮无需改动。
    seeing:
      "Skellig Michael is a steep, conical island about 12 km off Ireland's south-west coast, its summit holding the ruins of an early Christian monastic hermitage.",
    formation:
      "The island is built of Cambrian sandstone; long exposure to Atlantic wave erosion has produced its steep, conical outline, with its highest point standing about 218 m above sea level.",
    observation:
      "From the air, the island rises as an isolated cone from the Atlantic, with the stone beehive huts of the monastic settlement climbing a steep stairway near its summit — a classic combination of island landform and cultural heritage.",
    distinguish:
      "Both Skellig Michael and the Aran Islands are important islands off the Irish coast, but Skellig Michael is built of Cambrian sandstone with a steep, isolated profile, while the Aran Islands are limestone and comparatively flat and open.",
    concept:
      "Skellig Michael's steep conical form is a classic case for studying the long-term erosion of hard sandstone islands by Atlantic waves; its isolation was also a key geographic factor in the siting of early Christian hermitage communities.",
    history:
      "The summit monastery was founded roughly between the 6th and 8th centuries and remained inhabited by monks until the 12th–13th centuries; it was inscribed on the UNESCO World Heritage List in 1996.",
  },
  "achill-island": {
    // distinguish / concept sources: 阿基尔岛为爱尔兰沿海面积最大的岛屿；克罗根海崖为爱尔兰最高海崖、欧洲第三高
    //   （次于挪威 Hornelen 与法罗群岛 Cape Enniberg）——正文写「欧洲最高的海崖**之一**」与此吻合、未夸大。2 级。2026-09-10 核，verdict: ok。
    // seeing sources: ⚠️ 最高峰是**克罗根 688 m**、不是斯利夫莫尔 671 m（后者第二高）。**克罗根就是基姆湾那道海崖的山体**——原文把最高峰按错了山，又把海崖写成另一件事，等于把同一片地貌拆成两个。MountainViews.ie（2 级）。2026-09-10 核。
    seeing:
      "Achill Island is Ireland's largest island, connected to the mainland by a bridge; its highest peak, Croaghaun, reaches 688 m and drops almost its full height straight into the sea above Keem Bay — those cliffs are the mountain itself; Slievemore, at 671 m, is the island's second summit.",
    formation:
      "The island's geology resembles that of the neighbouring Mayo coast, built mainly of metamorphic rock and sandstone; long exposure to Atlantic wave erosion has carved steep high cliffs along its western side.",
    observation:
      "From the air, the island's relief is pronounced, with the cliffs at Keem Bay dropping almost vertically into the sea on the west, while gentler beaches and peat moorland characterise the east — two contrasting landforms on a single island.",
    distinguish:
      "Both Achill Island and the Aran Islands are important Irish islands, but Achill is larger, bridge-connected to the mainland and shows more pronounced relief, while the Aran Islands are limestone karst and comparatively flat.",
    concept:
      "The cliffs at Keem Bay on Achill Island are among the highest sea cliffs in Europe, a classic case for studying how high-energy Atlantic waves erode hard rock coastlines into towering cliffs over time.",
    history:
      "The island historically relied on traditional fishing and farming; substantial emigration followed the 19th-century Great Famine, and it is now a major outdoor tourism destination in western Ireland.",
  },
  "cliffs-of-moher": {
    seeing:
      "The Cliffs of Moher are a roughly 14-km stretch of Atlantic sea cliffs in County Clare, western Ireland, rising to about 214 m at their highest point — one of Ireland's most visited natural attractions.",
    formation:
      "The cliffs are built of interbedded Carboniferous sandstone and shale; long exposure to Atlantic wave erosion has preferentially worn away the softer shale layers, producing steep cliff faces with clearly visible bedding.",
    observation:
      "From the air, the cliffs curve in an arc along the coastline; O'Brien's Tower at the clifftop is the main viewing landmark, with the Aran Islands and the Twelve Bens of Connemara visible in the distance on a clear day — one of the defining landforms of Ireland's west coast.",
    distinguish:
      "Both the Cliffs of Moher and Slieve League are Atlantic sea cliffs on Ireland's west coast, but the Cliffs of Moher reach about 214 m and are built of interbedded sandstone and shale, while Slieve League reaches about 601 m, roughly three times as high.",
    concept:
      "The clearly interbedded sandstone and shale of the Cliffs of Moher is a classic case for studying how differential erosion produces bedded structure on a sea cliff.",
    // history sources: 奥布莱恩塔为 19 世纪 Sir Cornelius O'Brien 主持修建（英文侧写对了，中文误译为「科克伦爵士」，已改成音译 + 原名并列）。悬崖全长约 14 公里、最高约 214 米（奥布莱恩塔附近）、南端 Hag's Head 约 120 米，官方站，2 级，2026-09-09 核。
    //   https://www.cliffsofmoher.ie/about-the-cliffs-of-moher/
    //   **这一条是「中英两侧各写各的」在专名上的表现**：同一个人在两种语言里成了两个名字，而任何脚本都不会报。
    history:
      "The cliffs have long served as a landmark for local fishermen and sailors; O'Brien's Tower, built in the 19th century under Sir Cornelius O'Brien, remains the cliffs' signature viewing point today.",
  },
  "slieve-league": {
    // seeing sources: 斯利夫利格约 601 米；崖体主体为前寒武纪达尔雷德超群变质岩（地质学会 100 Great Geosites，级别 1）。「约为莫赫悬崖的三倍」：601 ÷ 214 ≈ 2.8，取整表述合理，判定不改。2026-09-09 核，本轮无需改动。
    //   https://www.geolsoc.org.uk/science-and-policy/100-great-geosites/coastal/cliffs-of-slieve-league/
    seeing:
      "Slieve League lies in County Donegal in north-west Ireland; its highest point, at about 601 m, makes it one of the highest sea cliffs in Europe.",
    formation:
      "The cliffs are built of Precambrian metamorphic rock with some sandstone; long exposure to high-energy Atlantic waves, combined with tectonic uplift, has produced cliff faces far taller than typical sea cliffs.",
    observation:
      "From the air, the cliffs drop almost vertically into the Atlantic; a narrow ridge path (locally called \"One Man's Pass\") runs along the cliff crest, with almost no built structures visible within view, giving the scene a raw, dramatic character.",
    distinguish:
      "Both Slieve League and the Cliffs of Moher are famous Atlantic sea cliffs in Ireland, but Slieve League reaches about 601 m, roughly three times the height of the Cliffs of Moher, and receives comparatively fewer visitors, remaining more untouched.",
    concept:
      "Slieve League's height is the product of both tectonic uplift and differential erosion, making it important landform evidence for the dramatic uplift history of Ireland's north-west coast.",
    history:
      "Early Christian hermitage remains survive at the cliff top; historically remote and lightly developed, the site remains a relatively less well-known but landform-rich destination in Ireland today.",
  },
  "dingle-peninsula": {
    // seeing sources: 布兰登山 952 米，古红砂岩，与麦吉利卡迪山脉同一地质单元。**正文有意没写布兰登山的全国排名，这是对的**：它在不同榜单里排第 8 或第 9，写排名就必须写口径。丁格尔为公认的 Gaeltacht 区域之一，加纳鲁斯石屋为知名早期基督教石造遗迹。**零争议红线本轮专门复核：通过。** 2026-09-09 核，本轮无需改动。
    seeing:
      "The Dingle Peninsula is Ireland's westernmost peninsula, its spine formed by Mount Brandon (952 m); its coastline is lined with steep sea cliffs and prehistoric stone remains.",
    formation:
      "The peninsula shares a similar geology with MacGillycuddy's Reeks, built of Old Red Sandstone; sustained tectonic uplift combined with Atlantic wave erosion has shaped both its steep coastline and its inland ridge.",
    observation:
      "From the air, the peninsula juts narrowly into the Atlantic, its Mount Brandon spine interwoven with coastal cliffs and beaches; Slea Head, at its western tip, is one of the westernmost points of land on the European continental shelf.",
    distinguish:
      "Both the Dingle Peninsula and the Iveragh Peninsula (Ring of Kerry) are coastal peninsulas in south-west Ireland, but Dingle's Mount Brandon spine is higher and the peninsula narrower, while Iveragh is more open in profile and better known for its circular scenic drive.",
    concept:
      "The dense scatter of prehistoric stone remains (such as clochán beehive huts) along the Dingle Peninsula's coast, together with its landform evolution, together form the peninsula's distinctive cultural-landform landscape.",
    history:
      "The peninsula is one of Ireland's better-preserved Irish-speaking (Gaeltacht) areas; early Christian remains such as the Gallarus Oratory along its coast bear witness to a long history of settlement.",
  },
  "ring-of-kerry-iveragh": {
    // history sources: 沃特维尔的跨大西洋电报站由商业电缆公司 1884 年设立并登陆电缆（1884—1962 运营）。
    //   正文用「登陆点**之一**」、**没有**与真正的 1866 年瓦伦西亚岛首个登陆点混淆，表述准确。2 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Ring of Kerry is a coastal scenic route circling the Iveragh Peninsula, linking Atlantic coastline, beaches and the south-western foot of MacGillycuddy's Reeks — one of Ireland's classic scenic drives.",
    formation:
      "The Iveragh Peninsula's geology connects directly to MacGillycuddy's Reeks, built of Old Red Sandstone; long wave erosion along its coast has carved numerous bays and beaches, while the interior retains the undulating relief of the mountain range's foothills.",
    observation:
      "From the air, the peninsula's ring-shaped coastline winds intricately, the coast road running now close beside cliffs, now through beaches and small towns, with the continuous peaks of MacGillycuddy's Reeks visible inland as a backdrop.",
    // distinguish sources: ⚠️ **比较方向反了**：布兰登山 952 m，而艾弗拉内陆的卡朗图希尔 1038.6 m 是爱尔兰最高点。**本条目 `observation` 段自己就提到了麦吉利卡迪山脉**——六段并排读才发现。2 级。2026-09-10 核。
    distinguish:
      "Both the Iveragh Peninsula and the Dingle Peninsula are coastal peninsulas in south-west Ireland, but Iveragh's circular scenic route is better known and its terrain more open, while Dingle is the narrower peninsula, its Mount Brandon spine (952 m) standing out sharply; for sheer height, though, it is Iveragh's own MacGillycuddy's Reeks inland that carry Ireland's highest summit, Carrauntoohil, at 1,038.6 m.",
    concept:
      "The combination of diverse coastal landforms (bays, beaches, cliffs) with the inland foothills of a mountain range on the Iveragh Peninsula is a classic case for studying the diversity of land–sea interaction landforms on a peninsula.",
    history:
      "The coastal town of Waterville was historically one of the landing points for transatlantic telegraph cables, bearing witness to the development of transatlantic communication technology in the 19th century.",
  },
  "killary-harbour": {
    // formation sources: ✅ **「它到底算不算真峡湾」这一条专门查了**：爱尔兰地质调查局（GSI）2014／2019 两份
    //   地质遗产报告（MO069、GY077，均 1 级）都把它定性为 fjord，符合真峡湾的关键判据（谷内水深深于其排入的外海）。
    //   坊间确有「该算 fjord 还是较浅的 fjard」的讨论，**官方 1 级口径支持现有写法**，正文不动。
    //   ⚠️ history 的「19 世纪曾计划开发为深水港但未能实现」**记 unknown**：查不到确证也查不到证伪，正文不动。2026-09-10 核。
    seeing:
      "Killary Harbour is Ireland's only true fjord, about 16 km long, forming the boundary between Connemara and County Mayo.",
    formation:
      "The fjord formed when a valley deeply incised by last-glacial ice was subsequently flooded by the sea; steep mountainsides close in on the water on both sides, a classic glacially eroded fjord landform.",
    observation:
      "From the air, the fjord runs long and narrow, deeply set between steep mountains on either side, its winding waterway strikingly different from Ireland's more typical open bays and beaches elsewhere on the coast.",
    distinguish:
      "The key difference between Killary Harbour and Ireland's other coastal landforms (such as the open bays along the Ring of Kerry) lies in its fjord origin — formed by the flooding of a deeply glacially incised valley, rather than ordinary wave-eroded bay formation.",
    concept:
      "Killary Harbour is Ireland's only true fjord landform, a classic — and rare — case for studying how a deeply incised glacial valley combined with sea-level rise produces a fjord.",
    // history sources: 「19世纪深水港计划」查无出处，删去。核实 2026-09-12
    history:
      "The fjord has historically been an important area for local mussel and salmon farming; it is now an important area for ecotourism in western Ireland.",
  },
};
