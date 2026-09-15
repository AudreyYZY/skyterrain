import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Turkey ============
  "toros-mountains": {
    // seeing sources: 托罗斯最高峰：2008 年 HGM + 土耳其登山联合会 GPS 复测把最高点从德米尔卡泽克（3756 m）改到克孜勒卡亚（3771.418 m）。**只查到 2 级转引 HGM，PeakVisor 另给 3767 m** —— 故正文写「约 3770 米」不写死精确值。属 C8「海拔也会过期」。2026-09-10 核。
    seeing:
      "The Taurus Mountains form an arcing range along Turkey's southern Mediterranean coast, separating the coastal lowlands from the Central Anatolian Plateau, running over 1,500 km; its highest peak is Kızılkaya in the Aladağlar massif, about 3,770 m — before a 2008 GPS resurvey that distinction was long assigned to neighbouring Demirkazık, at 3,756 m.",
    formation:
      "The range is part of the Alpine-Himalayan orogenic belt, folded and uplifted by long-term collision between the African plate and the Anatolian block; it is predominantly limestone, with extensive karst development including caves and underground rivers.",
    observation:
      "From the air, the Taurus Mountains form a continuous arcing wall hugging the coastline, with a steep southern slope dropping to the sea and a gentler northern slope transitioning into the Anatolian Plateau; the ridgeline is steepest and most continuous through the central section.",
    distinguish:
      "The Taurus and Pontic Mountains form Anatolia's southern and northern border ranges respectively; the Taurus is known for limestone karst and higher elevations, while the Pontic Mountains sit closer to the coast with heavier rainfall and denser forest cover.",
    concept:
      "The Taurus Mountains are key to understanding the southern edge of Turkey's three-step topography (coastal lowland — border mountains — central plateau), and their karst terrain is an important sample for studying Mediterranean-climate karst landforms.",
    history:
      "The range has long been a natural barrier for north-south movement across the Anatolian peninsula; several passes historically served as traditional routes for caravans and armies, and numerous ancient settlement remains survive in the mountains.",
  },
  "pontus-mountains": {
    // 全六段 sources: 阿尔卑斯—喜马拉雅带构造归属、东段（卡奇卡尔一带）更高更冰蚀化、迎风坡多雨森林更密、
    //   本都王国古代史 —— 逐段交叉核对未见数字硬伤（3 级，未找到 MTA 一手页面）。
    //   ✅ 零争议红线：未涉及东南安纳托利亚 / 库尔德议题，通过。2026-09-10 核，verdict: ok。
    seeing:
      "The Pontic Mountains run along Turkey's Black Sea coast, named for the ancient region of Pontus; the range rises abruptly from the shoreline, separating the humid Black Sea coast from the arid Central Anatolian Plateau.",
    formation:
      "Also part of the Alpine-Himalayan orogenic belt, the range was folded and uplifted by crustal compression; its eastern section (around the Kaçkar Mountains) reaches notably higher elevations with modern glacial landforms, while the western section is lower and more subdued.",
    observation:
      "From the air, the Pontic Mountains form a band hugging the Black Sea coastline, with dense, dark-green forest on the windward northern slope contrasting sharply with the drier transition zone on the southern slope toward the plateau.",
    distinguish:
      "The Pontic and Taurus Mountains are Anatolia's two edge ranges, but the Pontic Mountains face the moist Black Sea airflow and receive far more precipitation than the Taurus, giving them denser, more continuous forest cover.",
    concept:
      "The Pontic Mountains are a key topographic barrier producing the rain-shadow aridity of the Central Anatolian Plateau; the sharp contrast in vegetation and rainfall between windward and leeward slopes is a classic sample for understanding mountain-driven climate differentiation.",
    history:
      "Named for the ancient region of Pontus, the range was the core territory of the Kingdom of Pontus in antiquity; coastal passes historically served as important routes for Silk Road branches and Byzantine and Ottoman-era trade.",
  },
  "central-anatolian-plateau": {
    seeing:
      "The Central Anatolian Plateau is a relatively gentle upland in Turkey's interior, averaging 600 to 1,200 m in elevation, ringed by the Taurus Mountains to the south and the Pontic Mountains to the north, and forming the core of Turkey's population and agro-pastoral economy.",
    formation:
      "Geologically the plateau is the stable core of the Anatolian block, uplifted gradually in tandem with the folding of the surrounding ranges; it retains multiple Tertiary-to-Quaternary interior drainage basins and traces of past volcanic activity.",
    observation:
      "From the air, the plateau shows broad, gently undulating terrain interwoven with farmland and steppe; interior lakes such as Lake Tuz display a distinct white salt crust during the dry season, contrasting sharply with the darker mountains around the rim.",
    distinguish:
      "Unlike young orogenic plateaus such as the Qinghai-Tibet Plateau, the Central Anatolian Plateau has gentler terrain made up mostly of separate interior drainage basins rather than continuous highland, and receives far less rainfall than the surrounding mountains.",
    // concept sources: 年降水：MGM 科尼亚站 1991–2020 平年值 326 mm（1 级）；综述文献给高原内部 300–500 mm。原文「仅 200–300 毫米」低于实测均值。写平年值时段而不是单一年份——气候平均值每十年换一版，不属 C6d。2026-09-10 核。
    concept:
      "The plateau typically receives 250 to 400 mm of rainfall a year (Konya's 1991–2020 average is 326 mm, MGM), but most falls in winter and infiltrates to recharge groundwater, supporting both rain-fed and irrigated agriculture — a classic sample for understanding water use in semi-arid plateau regions.",
    history:
      "The plateau has a long history of human settlement dating to the Neolithic (as at Çatalhöyük in the Konya Basin), passing through Hittite, Roman, Byzantine, Seljuk and Ottoman periods; Ankara has been the capital of the Republic of Turkey since 1923.",
  },
  aladaglar: {
    // seeing sources: 同 toros-mountains：最高峰是克孜勒卡亚而非德米尔卡泽克（2008 HGM GPS 复测，2 级转引）。德米尔卡泽克连阿拉达山地自身最高峰都不是。2026-09-10 核。
    seeing:
      "The Aladağlar massif is a high mountain block in the eastern Taurus range; Aladağlar National Park, established in 1995, averages about 3,500 m in elevation, with the highest peak, Kızılkaya, at about 3,770 m — the highest point in the whole Taurus system; neighbouring Demirkazık, at 3,756 m, held that distinction until a 2008 GPS resurvey.",
    formation:
      "The massif is composed of interwoven limestone, marble and volcanic rock, sculpted by regional uplift and glacial action; it is steep and rugged, preserving multiple glacial lakes and U-shaped valleys.",
    observation:
      "From the air, Aladağlar appears as a rugged, rock-walled highland block that often glows crimson at sunset (the name means 'crimson mountains'), contrasting sharply with the gentler plateau terrain around it.",
    distinguish:
      "Aladağlar belongs to the same orogenic belt as the main Taurus range but is distinguished by its concentrated cluster of high peaks, well-developed glacial landforms, and rock-climbing terrain, making it one of the most distinctive massifs within the Taurus system.",
    concept:
      "The glacial lakes and U-shaped valleys preserved in Aladağlar are an important geological sample for studying the extent and scale of last-glacial mountain glaciation at mid-latitude in a Mediterranean-climate high range.",
    history:
      "Historically used as seasonal high-altitude pasture by local herders, the massif became a major base for mountaineering and rock climbing in Turkey after the national park was established in 1995.",
  },
  "kackar-mountains": {
    // seeing sources: 卡奇卡尔峰高程**两说并存** —— 多数土耳其媒体给 3937 m，另有国家公园相关资料给 3932 m，
    //   均为 3 级、未见 HGM 权威值。5 米之差落在测量口径差异内，**正文保留 3937 不改**（比照伯尔尼纳峰 4048/4049 那一例：
    //   同一测量的不同取整，不该靠 3 级来源推翻）。「距黑海海岸约 40 公里」与检索到的 40–50 km 区间吻合。
    //   2026-09-10 核，verdict: ok（两个值都记在这里，下一轮别再改一遍）。
    seeing:
      "The Kaçkar Mountains form the highest section of the eastern Pontic range, with the summit of Mount Kaçkar reaching 3,937 m and its high plateau areas around 3,000 m, only about 40 km from the Black Sea coast.",
    formation:
      "Uplifted by crustal compression, the range has undergone intense glacial erosion since the last ice age, making it one of Turkey's most glaciated mountain areas, with numerous glacial lakes scattered among its steep rocky peaks.",
    observation:
      "From the air, the Kaçkar Mountains present a sharp, jagged alpine profile with dense coniferous forest on the slopes; rocky summits and scattered glacial lakes are clearly visible in the sunlight, forming a distinct vertical zonation against the green Black Sea lowlands.",
    distinguish:
      "Compared with the rest of the Pontic range, the Kaçkar Mountains are higher and more glacially developed, the only section of the Pontic range to retain pronounced modern glacial features, and stand in contrast with the drier, inland Aladağlar massif in both climate and vegetation.",
    concept:
      "The Kaçkar Mountains are a classic sample for studying the relationship between windward precipitation and glaciation along the Black Sea coast, with a clear vertical vegetation belt from coastal broadleaf forest to alpine conifers to bare rock.",
    history:
      "The mountains have historically been home to Laz and Georgian communities, with stone-built highland shelters and old trails still surviving; today the range is a major hiking destination in Turkey.",
  },
  "mount-ararat": {
    // seeing sources: 官方名：Ağrı Dağı。原文「阿厄勒达」是打乱字序的错误音译，改为原文名 + 通行中文名并列，不生造音译。英文侧本来就用 Ağrı Dağı、未动。2026-09-10 核。
    seeing:
      "Mount Ararat is Turkey's highest peak, officially known as Ağrı Dağı, at 5,137 m, located in eastern Turkey near Turkey's border with Armenia; the mountain is permanently snow-capped and stands as a massive isolated volcanic cone.",
    formation:
      "Mount Ararat is a dormant compound stratovolcano built up from repeated lava flows and pyroclastic deposits; it consists of two cones, Greater and Little Ararat (the latter at 3,896 m), with the whole massif about 35 km wide at its base.",
    observation:
      "From the air, Mount Ararat rises as an isolated, massive snow peak on the East Anatolian Plateau, creating a striking contrast with the comparatively gentle plateau terrain around it; the summit remains snow- and ice-covered year-round.",
    // distinguish sources: 「唯一有常年冰帽的孤立火山」不成立：苏芬火山（4058 m）山顶同样有永久冰帽（Smithsonian GVP，1 级）。苏芬火山就在本库注册表里（mount-suphan）——本库另一条目即可证伪的排他性断言。2026-09-10 核。
    distinguish:
      "Along with Mount Süphan and the Nemrut volcano, Ararat is one of eastern Turkey's volcanoes, but it is the highest and most massive of these isolated stratovolcanoes; Süphan likewise carries a permanent summit ice cap.",
    concept:
      "As an isolated, massive stratovolcano, Mount Ararat is a geographic sample for studying how large solitary volcanoes form at the margins of plate-collision zones.",
    history:
      "Mount Ararat's last recorded eruption was in 1840, and it has remained dormant since; owing to its massive scale and isolated setting, it has long served as an important regional landmark and mountaineering destination.",
  },
  "mount-erciyes": {
    seeing:
      "Mount Erciyes is the highest volcano in Central Anatolia at 3,917 m, located about 15 to 25 km from the city of Kayseri; it is a large stratovolcano surrounded by numerous monogenetic cinder cones and lava domes.",
    // formation sources: Cora Maar：玛珥式火山口属实，但**没有常年湖**，原文的「火口湖」不准确。是否有季节性积水未查到一级来源，记 unknown、正文往回缩不写湖。2026-09-10 核。
    formation:
      "The current stratovolcano formed during Pleistocene eruptions of andesitic and dacitic lava; a maar-type crater sits near the volcano (Cora Maar, which holds no permanent lake), and its last eruption dates to around 6880 BCE, making it a dormant volcano.",
    observation:
      "From the air, Mount Erciyes appears as a complete conical stratovolcano, snow-capped year-round in winter and connected to the volcanic ash terrain of Cappadocia at its base, making it the most prominent landmark peak in the region.",
    distinguish:
      "Together with Mount Hasan, Erciyes is one of the two volcanic sources that shaped the Cappadocia landscape, but Erciyes is higher and more massive, making it the highest point in the Central Anatolian Volcanic Province.",
    concept:
      "The thick volcanic ash deposited by Erciyes's past eruptions is the direct source material for Cappadocia's fairy-chimney landforms, making it a key node for understanding the relationship between regional volcanism and subsequent erosional landforms.",
    history:
      "The city of Kayseri at the volcano's foot has long been an important trade and craft center in Anatolia; today Erciyes is also one of Turkey's major ski destinations.",
  },
  "nemrut-caldera-van": {
    // seeing sources: 「世界第二大火口湖」删掉：只见土耳其媒体转述（3 级），查不到国际权威给出的火口湖全球排名口径与年份，属 C1b「排名断言缺口径」。土耳其第一大、海拔 2247 m、水深 176 m 三项保留（多来源吻合）。2026-09-10 核。
    seeing:
      "The Nemrut volcano, near Tatvan in Bitlis Province west of Lake Van, has a collapsed summit forming a crescent-shaped caldera lake — Lake Nemrut — at about 2,247 m elevation and 176 m deep, Turkey's largest crater lake.",
    formation:
      "After the volcano's magma chamber emptied, the summit lost support and collapsed, forming a huge caldera that gradually filled with water to become today's crater lake; roughly 600,000 years ago, lava flows from this volcano also blocked the Murat River, contributing to the formation of Lake Van.",
    observation:
      "From the air, the Nemrut volcano presents a clearly defined giant ring-shaped caldera, with the crescent lake and an inner secondary cone set against the comparatively gentle outer volcanic slopes.",
    distinguish:
      "Note this Nemrut volcano lies in Bitlis Province west of Lake Van — a different location from the Mount Nemrut colossal-statue archaeological site in Adıyaman Province, despite sharing the same name. As a caldera lake, it differs from Lake Van in that Van formed when lava dammed a river, while Lake Nemrut formed when the volcano's own summit collapsed and filled with water.",
    concept:
      "The formation of the Nemrut caldera is a classic sample for studying the geological mechanism by which a large stratovolcano's magma chamber empties and its summit subsequently collapses to form a caldera.",
    history:
      "The area around the volcano has historically been used by pastoral and farming communities of the Lake Van basin; today it is an important geological tourism and mountaineering destination in eastern Turkey.",
  },
  "lake-van": {
    // seeing sources: 面积/水位两套来源打架：塔特万区公所（1 级）给 3713 km²、平均水深 171 m、长期均值约 1648 m；国际文献（3 级）给 3764 km² / 607 km³。取 1 级并写成「约 3700 平方公里」。**原文的 1646 米其实是接近 1963 年历史最低的枯水值**，不是常态水位——2025 年 9 月因干旱又逼近该值。属 C8，正文改为「长期均值 + 近年走低」两层。2026-09-10 核。
    seeing:
      "Lake Van is Turkey's largest lake by area, covering about 3,700 km², its surface averaging around 1,648 m over the long run — sustained drought has drawn it down markedly in recent years, and in September 2025 it approached the 1,646 m record low first set in 1963 — and it is the world's largest soda (alkaline) lake.",
    formation:
      "About 600,000 years ago, lava flows from the Nemrut volcano blocked the course of the Murat River; unable to drain, the water gradually accumulated to form today's closed basin — a classic case of a volcanically dammed lake.",
    observation:
      "From the air, Lake Van's vast waters take on a distinctive turquoise-blue hue from high carbonate concentration, with an irregular shoreline; Mount Süphan rises on the north shore and the Nemrut volcano on the south, together forming the skeletal landforms of this plateau lake district.",
    distinguish:
      "Though both are volcanically formed lakes, Lake Van is a large closed basin created when lava blocked a river, far exceeding the smaller caldera lake of Nemrut in area.",
    concept:
      "As the world's largest soda lake, Lake Van's highly alkaline, saline water supports only a few salt-tolerant fish species, making it an important sample for studying how long-term evaporative concentration in interior-drainage lakes produces distinctive water chemistry.",
    history:
      "The Lake Van basin was historically a core territory of the Kingdom of Urartu, and numerous ancient fortress ruins survive along the shore today; the lake remains a major geographic landmark in eastern Turkey.",
  },
  "lake-tuz": {
    // seeing sources: 面积/水深：**季节性盐湖，写固定值本身就是错的**。3 级来源两套数字打架（1665 km²/0.5 m vs 1500 km²/1 m），分歧本身说明无一致口径。按 C8 改为区间 + 季节机制。2026-09-10 核。
    seeing:
      "Lake Tuz is Turkey's second-largest lake, covering some 1,500 to 1,665 km² at its spring high water, roughly 80 km long and 50 km wide but nowhere much more than a metre deep, and drying out across most of its bed in high summer, making it one of the most saline lakes on Earth.",
    formation:
      "Lake Tuz sits at the lowest point of an interior drainage basin on the Central Anatolian Plateau; winter and spring precipitation and groundwater fill the lake, while intense summer evaporation dries out large areas, leaving a salt crust roughly 30 cm thick on the lakebed.",
    observation:
      "From the air, Lake Tuz shows a vast, nearly pure-white salt crust in sharp color contrast with the tan-and-ochre arid plateau around it; the lake surface often takes on pink or orange tones from algae and mineral content in sunlight.",
    distinguish:
      "Both Lake Tuz and Lake Van are major interior-drainage lakes in Turkey, but Lake Tuz is a shallow, seasonally dry salt lake with far higher salinity, while Lake Van holds water year-round at comparatively lower salinity.",
    concept:
      "With a salinity of about 32 to 33 percent — close to the Dead Sea — Lake Tuz is a classic sample for studying how long-term evaporative concentration in interior basins produces highly saline lakes, and it is also an important salt-producing region for Turkey.",
    // history sources: 产盐量：原文 30 万吨**量级错了约五倍**。3 级来源一致给百万吨级（1997 年 170.8 万吨，占当年全国 233 万吨的 73.3%，与「约七成」吻合）。只有 3 级 → 正文写「百万吨量级」不写死精确值，等找到带年份的官方产量序列再收紧。2026-09-10 核。
    history:
      "Lake Tuz has long been an important source of salt in Anatolia; today it yields salt on the order of a million tonnes a year, supplying about 70 percent of Turkey's salt needs.",
  },
  "konya-basin": {
    // seeing sources: 盆地底部 850–1000 m（HTED 2013，2 级）；海拔上限无可靠来源，删去。核实 2026-09-12
    seeing:
      "The Konya Basin is a large interior-drainage basin on the Central Anatolian Plateau, covering about 50,000 km², its floor at about 850–1,000 m, bounded by the Pontic Mountains to the north and the Taurus Mountains to the south, and forming an important agricultural heartland for Turkey.",
    formation:
      "The basin is a structural depression within the high-elevation orogenic plateau, having long accumulated sediment eroded from the surrounding mountains to form an extensive flat alluvial-lacustrine plain; it retains landform traces left by the retreat of an ancient large lake.",
    observation:
      "From the air, the Konya Basin shows an expansive, flat farmland landscape with orderly irrigation channels and field plots; Lake Tuz and Lake Beyşehir, its two main lakes, show varying extents between wet and dry seasons.",
    distinguish:
      "Both the Konya Basin and the Lake Tuz basin are interior-drainage units on the Central Anatolian Plateau, but the Konya Basin is larger and dominated by agricultural plains, while the Lake Tuz basin is characterized primarily by its saline lake.",
    concept:
      "Due to prolonged over-extraction of groundwater, the Konya Basin has seen increasing surface subsidence (sinkholes) in recent years, making it an important real-world sample for studying how large-scale irrigated agriculture in arid regions affects groundwater systems and surface stability.",
    history:
      "Konya, within the basin, was the capital of the Seljuk Sultanate in Anatolia; the 13th-century Sufi poet Rumi lived there and founded the Mevlevi Order (the whirling dervishes), and the Çatalhöyük site within the basin is a major Neolithic archaeological site.",
  },
  "pamukkale-travertines": {
    // 全六段 sources: 钙华台地约 2700 m × 600 m × 160 m；17 处以上温泉（35–100 ℃）；1988 年与希拉波利斯古城一同列入 UNESCO。
    //   ✅ **成因机制专项复核**：正文写的是「二氧化碳逸出后碳酸钙结晶析出」，**没有落进「温泉水蒸发」这个常见错误说法**——
    //   这正是 C7 要防的那一类，本条通过。3 级复核。2026-09-10 核，verdict: ok。
    seeing:
      "Pamukkale ('Cotton Castle') is a geothermal travertine terrace formation in the Denizli graben, named for its brilliant white, stepped calcium-carbonate terraces, spanning about 2,700 m long, 600 m wide and 160 m high.",
    formation:
      "More than 17 hot springs (35 to 100°C) rise along a fault line; the calcium-bicarbonate-rich water has deposited over thousands of years, releasing carbon dioxide and precipitating calcium carbonate crystals that build up layer by layer into today's white, stepped terrace pools.",
    observation:
      "From the air, Pamukkale shows a brilliant white, terraced formation cascading down the hillside, its stacked pools gleaming with the distinctive sheen of calcified crystal, in sharp color contrast with the grey-green hills around it.",
    distinguish:
      "Both Pamukkale's travertine terraces and Cappadocia's tuff landscape relate to regional volcanic-geothermal activity, but Pamukkale is a positive landform built up by ongoing calcium-carbonate deposition from hot springs, while Cappadocia is a negative, erosional landform carved from volcanic ash rock.",
    concept:
      "Pamukkale's stepped travertine terraces are a textbook case for studying the geological process by which hot springs rising along a fault deposit calcium carbonate to build a surface travertine formation; large-scale examples of this kind are rare worldwide.",
    history:
      "From the 2nd century BCE, the Greco-Roman city of Hierapolis was built beside the springs atop the terrace, its people believing the thermal waters had healing and sacred properties; Pamukkale was inscribed as a UNESCO World Heritage Site alongside Hierapolis in 1988.",
  },
  "cappadocia-fairy-chimneys": {
    // formation / history sources: 凝灰岩来自埃尔吉耶斯、哈桑、梅伦迪兹等火山自中新世持续至上新世的多次喷发，
    //   堆积约 1 万 km² 的凝灰岩／熔结凝灰岩；软质凝灰岩快速侵蚀、硬质盖层保护形成「精灵烟囱」——差异风化机制表述正确，
    //   未见因果颠倒。格雷梅国家公园 1985 年列入 UNESCO（whc.unesco.org/en/list/357，1 级）。
    //   ⚠️ 「侵蚀速率每千年 2 至 3 厘米」未能独立核实，记 unknown、正文不动。2026-09-10 核，verdict: ok（一项 unknown）。
    seeing:
      "Cappadocia is a volcanic-ash landscape in Central Anatolia renowned for its 'fairy chimney' rock pillars, encompassing Göreme National Park between Nevşehir, Ürgüp and Avanos, inscribed as a UNESCO World Heritage Site in 1985.",
    formation:
      "From the Miocene to Pliocene (roughly 10 to 3 million years ago), repeated eruptions of volcanoes including Erciyes and Hasan deposited thick layers of ash that consolidated into soft tuff, locally interbedded with harder basalt or andesite caprock; subsequent tectonic uplift exposed these layers to erosion, and since the soft tuff weathers faster than the resistant caprock, tall cone-shaped pillars capped with harder boulders were gradually sculpted.",
    observation:
      "From the air, Cappadocia's surface is covered with densely packed conical rock pillars and honeycombed cave dwellings, interwoven with pale tan, pink and white rock layers; the rock-cut settlements and underground-city entrances around Göreme are clearly visible, forming a highly distinctive eroded landscape.",
    distinguish:
      "Both Cappadocia's fairy chimneys and Pamukkale's travertine terraces relate to the region's geothermal-volcanic activity, but Cappadocia is a negative, erosional landform of conical pillars carved from volcanic ash rock, while Pamukkale is a positive terrace formation built up by hot-spring calcium-carbonate deposition.",
    // concept sources: 分阶段侵蚀速率（Sarıkaya et al. 2015, Geomorphology，2 级）。核实 2026-09-12
    concept:
      "Cosmogenic-nuclide dating shows erosion rates that vary widely by stage — under 1 cm per 1,000 years on the intact plateau, a little over 3 cm on chimney caps, and close to 30 cm once a cap is lost — and the fairy chimneys are a textbook field sample for studying how differential weathering of soft and hard rock layers — rapid erosion of soft tuff protected in places by resistant caprock — sculpts conical pillars.",
    history:
      "Cappadocia was historically a refuge where Byzantine-era Christians carved underground cities and rock-cut churches; the Göreme area preserves numerous rock-cut monasteries and frescoes, and today a sunrise hot-air balloon flight over this pillar landscape is the region's signature visitor experience.",
  },
  "ihlara-valley": {
    // 全六段 sources: 峡谷长约 15 km（多来源 14–18 km 区间内）、最深约 150 m（100–150 m 区间内）；
    //   梅伦迪兹河全长约 60 km、发源于梅伦迪兹山；**「最终流入图兹湖」经专项核实成立**——该河经马马森水坝与乌卢河水道
    //   汇入图兹湖，其流域本就在图兹湖封闭流域内。约 50 座拜占庭岩凿教堂与资料一致。
    //   ✅ 零争议红线：history 只写宗教避难史实，无现代政治内容，通过。3 级复核。2026-09-10 核，verdict: ok。
    seeing:
      "Ihlara Valley, in southwestern Cappadocia, is a deeply incised canyon about 15 km long and up to 150 m deep, carved by the Melendiz River over thousands of years through volcanic rock.",
    formation:
      "The canyon was cut by the roughly 60-km-long Melendiz River, which rises on Melendiz Mountain and has spent thousands of years eroding the soft volcanic rock deposited by the eruption of Mount Hasan; the river ultimately flows into Lake Tuz.",
    observation:
      "From the air, Ihlara Valley appears as a winding, deeply cut green corridor; the river at its base and the dense vegetation along its banks form a sharp contrast in color and relief with the dry, open plateau surrounding it.",
    distinguish:
      "Both Ihlara and Saklıkent are deeply cut canyons in Turkey, but Ihlara is carved through volcanic rock, has a lushly vegetated floor, and preserves numerous rock-cut churches, while Saklıkent cuts through limestone and is known for its narrow cliffs and fast-flowing water.",
    concept:
      "Ihlara Valley is a sample for studying how a river's long-term erosion of soft volcanic rock produces a deeply incised canyon; its roughly 50 Byzantine rock-cut churches also make it an important site for studying early Christian rock-hewn settlement patterns.",
    history:
      "The valley preserves about 50 Byzantine-era rock-cut churches carved into its cliffs, historically a place of refuge and retreat for monks and Christians, and an important witness to Cappadocia's early Christian history.",
  },
  "saklikent-gorge": {
    // 全六段 sources: 深约 300 m、长约 18 km；1996-06-06 设立国家公园。3 级多方一致。
    //   ⚠️ 「最窄处约 4 至 5 米」记 unknown：3 级来源互相打架（另有说最窄处约 2 米），都不是官方实测，
    //   两说量级接近、只是范围表述不同，**连「量级错了」都证不到**，故不改。下一轮若拿到 DKMP／MTA 一手实测再收紧。2026-09-10 核，verdict: ok。
    seeing:
      "Saklıkent Gorge, near Fethiye in southwestern Turkey, is about 300 m deep and 18 km long, one of Turkey's deepest gorges; 'Saklıkent' means 'hidden city' in Turkish.",
    // formation sources: 最窄处宽度无 1–2 级来源、3 级两说，删去。核实 2026-09-12
    formation:
      "The gorge formed as continued uplift of the Taurus Mountains drove crustal movement while a river steadily eroded the comparatively soft limestone; its cliff walls are near-vertical.",
    observation:
      "From the air, Saklıkent Gorge appears as a narrow fissure deeply embedded in the Taurus mountain terrain, its swift snowmelt-fed torrent at the base contrasting sharply in light and relief with the steep, pale grey cliff walls on either side.",
    distinguish:
      "Both Saklıkent and Ihlara are deeply cut canyons in Turkey, but Saklıkent cuts through Taurus limestone and is deeper and narrower, while Ihlara cuts through Cappadocian volcanic rock and has a more open, gentle valley floor.",
    concept:
      "The narrow, near-vertical cliff form of Saklıkent Gorge is a sample for studying how, in limestone terrain, a river's downcutting erosion rate outpacing lateral wall collapse produces a deep, narrow canyon.",
    history:
      "Saklıkent National Park was established in 1996; the gorge historically earned its name 'hidden city' from its rugged, hard-to-reach terrain, and today it is a major nature-adventure destination near Fethiye.",
  },
  "bosphorus-strait": {
    // 其余各段 sources: 长约 31 km、宽 730—3300 m、最深约 110 m —— 3 级来源给长约 30 km、宽 750 m—3.7 km、
    //   最深 124 m，差异落在测量口径之内（比照卡奇卡尔峰 3937/3932 那一例），不改。
    //   ✅ 零争议红线：未涉蒙特勒公约的现代争议、也未涉伊斯坦布尔运河项目，通过。2026-09-10 核，verdict: ok。
    seeing:
      "The Bosphorus is the natural strait connecting the Black Sea and the Sea of Marmara, about 31 km long, 730 to 3,300 m wide, and up to about 110 m deep, with the city of Istanbul built astride both its shores.",
    // formation sources: 成因年代：原文写「第三纪 / 第三纪末期」**差了一整个时间尺度**——第三纪终于约 258 万年前，而海峡是末次冰期后的全新世海侵产物。海峡底部为晚更新世河流—湖沼相沉积，被中—晚全新世（约 8400 年前起）海侵淹没；海平面先后越过达达尼尔（-80 m）与博斯普鲁斯（-35 m）槛深。2 级学术综述。2026-09-10 核。
    formation:
      "Geologically the site was a prehistoric river valley; after the last glacial period sea levels rose until, by the mid-Holocene some eight thousand years ago, they topped the old valley's sill and flooded it, gradually forming today's strait linking the two seas.",
    observation:
      "From the air, the Bosphorus appears as a winding, narrow waterway, its banks densely built up with Istanbul's cityscape and spanned by bridges — a clearly visible natural boundary between the continents of Asia and Europe.",
    distinguish:
      "Both the Bosphorus and the Dardanelles in western Turkey are key straits linking the Black Sea, the Sea of Marmara and the Aegean, but the Bosphorus is shorter and narrower and runs directly through a major city, while the Dardanelles is longer with less urbanized shores.",
    concept:
      "The Bosphorus is one of the traditional geographic boundaries between Asia and Europe and the Black Sea's only maritime outlet to the Mediterranean and the wider ocean, making it a classic sample for studying the relationship between strait landforms and shipping strategy.",
    history:
      "Istanbul, on both banks of the strait, was successively the capital of the Byzantine and Ottoman empires; the strait has long been a strategic route linking Eurasian trade and military movement, and today it is one of the world's busiest shipping passages.",
  },
  "aegean-coast-turkey": {
    // 全六段 sources: 东西向地堑—地垒（horst-graben）伸展构造控制，山谷沉溺成海湾、山脊出露成半岛与岛屿，
    //   与正文成因一致；博德鲁姆半岛属破火山口地貌（另一机制），**正文没有把两者混为一谈**。3 级综述。2026-09-10 核，verdict: ok。
    seeing:
      "Turkey's Aegean coast, running from the southern mouth of the Dardanelles to the Bodrum Peninsula, is a deeply indented, jagged coastline of interlocking peninsulas, bays and offshore islands, and an important tourism and port zone for Turkey.",
    formation:
      "The coastal landform is a drowned coast produced by crustal extension and block subsidence during neotectonic activity; former valleys and ridges were submerged as sea levels rose, becoming today's bays and peninsulas, shaping the intricately indented shoreline.",
    observation:
      "From the air, Turkey's Aegean coast alternates between bays of varying depth and protruding peninsulas; around the Bodrum Peninsula the shoreline is especially fragmented, with turquoise water contrasting against whitewashed coastal towns.",
    distinguish:
      "The Aegean and Lycian coasts are both in southwestern Turkey, but the Aegean coast has deeper bays and a more fragmented peninsula pattern (a block-subsidence coast), while the Lycian coast is dominated by the western Taurus Mountains descending directly to the sea.",
    concept:
      "The intricately fragmented Aegean shoreline is a classic sample for studying how crustal extension and block faulting produce a drowned coast, turning former valleys into bays.",
    history:
      "The Aegean coast was historically an important cradle of ancient Greek Ionian civilization, with numerous Greco-Roman city-state ruins along its shores; today towns such as Bodrum form the core of Turkey's Aegean tourism region.",
  },
  "lycian-coast": {
    // 全六段 sources: 与已核的西托罗斯地质地理及利西亚古文明史实一致；**与 aegean-coast-turkey 的对比段互为镜像、并排读无矛盾**
    //   （本轮专门并排核过——上一批托罗斯／阿拉达山地就是靠并排才发现两条共用一个错的峰名）。2026-09-10 核，verdict: ok。
    seeing:
      "The Lycian Coast (Turquoise Coast), along the Teke Peninsula in southwestern Turkey, is a Mediterranean shoreline named for its clear, brilliant blue waters, formed where the western Taurus Mountains meet the sea directly.",
    formation:
      "The coastal landform results from the western Taurus range extending directly into the sea; steep mountain uplift combined with sea-level change has shaped today's coastline of headlands, deep bays and cliffs.",
    observation:
      "From the air, the Lycian Coast shows a steep profile where mountain and sea meet directly, with deep-blue bays set into green mountainsides; towns such as Kaş and Kalkan cluster along the edges of these bays.",
    distinguish:
      "Both the Lycian and Aegean coasts are important southwestern Turkish coastlines, but the Lycian Coast is a high-mountain shoreline where mountains descend directly to the sea with greater water depth, while the Aegean coast is dominated by a fragmented pattern of peninsulas and bays formed by block subsidence.",
    concept:
      "The Lycian Coast's landform, where a folded mountain range meets the shoreline directly, is a sample for studying this coastal landform type, and its deep, steep waters make it an ideal setting for sailing and diving.",
    history:
      "Historically the territory of ancient Lycia, the coast is dense with ancient cities, harbors and tombs over 2,000 years old; today towns such as Kaş and Kalkan are representative destinations of Turkey's Mediterranean tourism.",
  },
  "black-sea-coast-turkey": {
    // 全六段 sources: 本都山脉紧贴海岸、岸线平直少湾、土耳其最湿润地区之一；特拉布宗为丝路黑海段港口、
    //   1204—1461 年特拉比松帝国都城；苏美拉修道院建于阿尔滕代雷峡谷崖壁。3 级复核。2026-09-10 核，verdict: ok。
    seeing:
      "Turkey's Black Sea coast is a narrow coastal strip where the Pontic Mountains rise abruptly right at the shoreline; the coastline is relatively straight with few large bays, and the region is one of Turkey's wettest.",
    formation:
      "The coastal landform results from the Pontic Mountains rising directly against the shore, lacking the drowned-bay terrain seen on the Aegean coast; the shore is mostly a narrow coastal strip transitioning directly into steep mountain slopes.",
    observation:
      "From the air, Turkey's Black Sea coast appears as a narrow strip with mountains hugging the shoreline; the dense, dark-green forest on the windward slope contrasts sharply with the deep blue sea, forming a distinct vertical zonation.",
    distinguish:
      "Compared with the Aegean and Lycian coasts, the Black Sea coast has a straighter shoreline with fewer deep bays and offshore islands, but notably higher rainfall and forest cover, making it Turkey's most humid coastal region.",
    concept:
      "Because the Pontic Mountains block moist airflow, the Black Sea coast shows a pronounced windward-slope rainfall effect, making it a classic sample for studying how mountains influence coastal climate zonation.",
    history:
      "The coastal city of Trabzon was historically an important port on a Silk Road branch and the capital of the Byzantine-era Empire of Trebizond; the mountains preserve historic sites such as the Sümela Monastery, built into a cliff face.",
  },
  "meke-crater-lake": {
    // seeing sources: 尺寸：原文 1800×1600 米**大了一倍以上**，多方独立 3 级来源一致给约 800×500 米（平均深 12 m、内湖 25 m）。替代值只有 3 级，故写「约」值；下一轮若拿到 MTA／DSİ 实测再收紧。2026-09-10 核。
    seeing:
      "Lake Meke, in the Karapınar volcanic field of Konya Province, is a nested double volcanic lake, roughly elliptical at about 800 by 500 m, resembling a Turkish blue-eye amulet.",
    formation:
      "An initial caldera lake formed about 4 million years ago from a volcanic eruption; about 9,000 years ago, rising magma meeting groundwater caused a steam explosion that formed a nested cinder cone with its own inner maar-crater lake within the original lake, producing today's lake-within-a-lake structure.",
    observation:
      "From the air, Lake Meke shows a distinctive 'lake-within-a-lake' pattern, an outer ring of water enclosing a small inner volcanic cone and lake, standing out sharply against the flat surrounding terrain of the Karapınar volcanic field.",
    distinguish:
      "Both Lake Meke and Lake Nemrut are volcanically formed lakes, but Lake Meke is far smaller and has a rare nested double structure, while Lake Nemrut is a single large caldera lake.",
    concept:
      "Lake Meke's nested double structure is a classic sample for studying how a single volcanic system, through different eruption styles at different stages (an earlier large-scale caldera collapse followed by a smaller steam-explosion maar), produces compound landforms.",
    // history sources: ⚠️ **状态整个变了，不只是数字过期**：梅凯湖因干旱与地下水超采自 2010 年代起持续萎缩，2020 年代以来大部分时间近乎干涸。科尼亚大都会市 2025-09 公布中水回补计划（Daily Sabah，2 级）。**正文刻意不写「2027 年底前恢复」这个目标日期**——那是一个会自己过期的承诺，只写计划与公布年份。2026-09-10 核。
    history:
      "Lake Meke is the signature landmark of the Karapınar volcanic field, which was active at various points during the Quaternary. Drought and groundwater over-extraction have shrunk the lake steadily since the 2010s, and through the 2020s it has stood largely dry; in 2025 Konya's metropolitan municipality announced a plan to pipe in treated wastewater to refill it. It remains an important geological tourism destination in Central Anatolia, though what visitors find is not necessarily water.",
  },
  "euphrates-headwaters": {
    // 全六段 sources: 西源卡拉苏河约 450 km、东源穆拉特河约 722 km，凯班以北约 10 km 汇合（3 级，多方一致）。
    //   ✅ **零争议红线逐句复核**（本条事前判为高风险）：全文只写源区地貌与汇流，**未涉及 GAP 项目、阿塔图尔克／伊利苏水坝、
    //   跨境用水分配、库尔德议题或哈桑凯伊夫**，通过。2026-09-10 核，verdict: ok。
    seeing:
      "The Euphrates, the longest river in West Asia, forms from the confluence of the western source Karasu River (about 450 km, rising in Erzurum Province) and the eastern source Murat River (about 722 km, rising north of Mount Ararat), meeting about 10 km north of Keban.",
    formation:
      "Both source rivers rise in the mountainous terrain of the East Anatolian Plateau, eroding long mountain valleys before joining near Keban; after leaving Turkey the river continues southeast into the Mesopotamian plain.",
    observation:
      "From the air, the Euphrates headwaters show two mountain rivers converging from east and west, their channels winding through the folded highlands of the East Anatolian Plateau before widening noticeably after the confluence.",
    distinguish:
      "Both the Euphrates and the Tigris rise on Turkey's eastern plateau, but the Euphrates forms from two converging sources and has a longer course, while the Tigris rises from a single source at Lake Hazar and is comparatively shorter.",
    concept:
      "The dual-source confluence pattern of the Euphrates headwaters is an important sample for studying how upland mountain river systems progressively converge to form a major river's main stem.",
    history:
      "The Euphrates historically nurtured Mesopotamian civilization, one of the earliest cradles of agricultural civilization in human history; the East Anatolian Plateau, where it rises, has historically been a traditional route connecting Anatolia and the Tigris-Euphrates basin.",
  },
  "tigris-headwaters": {
    // 全六段 sources: 哈扎尔湖为公认源头（构造裂谷湖，埃拉泽省东南约 22 km，湖面约 1150 m），境内流程约 400 km。
    //   ✅ **零争议红线逐句复核**（本条事前判为高风险）：正文未提及下游边境段、水坝、跨境用水分配或库尔德议题，通过。
    //   3 级复核（Britannica / WorldAtlas）。2026-09-10 核，verdict: ok。
    seeing:
      "The Tigris, one of the major rivers of West Asia, is generally recognized as originating at Lake Hazar, a rift lake in the Taurus Mountains at about 1,150 m elevation, roughly 22 km southeast of Elazığ.",
    formation:
      "Lake Hazar is a tectonic rift lake within the Taurus Mountains, fed mainly by snowmelt from the surrounding high peaks; the river flows out of the lake and runs about 400 km southeast through Turkey, gradually forming the main stem of the Tigris.",
    observation:
      "From the air, Lake Hazar appears as a narrow blue body of water set within the Taurus terrain, its outflow channel winding southeast through the mountains, forming a clear color boundary against the grey-brown mountains around it.",
    distinguish:
      "Both the Tigris and Euphrates headwaters lie on Turkey's eastern plateau, but the Tigris is generally recognized as rising from the single rift lake of Hazar, while the Euphrates forms from two independent converging sources.",
    concept:
      "As the generally recognized source of the Tigris, Lake Hazar is a classic sample for studying the landform-hydrology relationship of how a tectonic rift lake becomes the headwater of a major river system.",
    history:
      "The Tigris and Euphrates together nurtured Mesopotamian civilization, providing the water base for irrigated agriculture and early urban civilization in the Tigris-Euphrates basin; the upland region where they rise has historically been a traditional route linking Anatolia and Mesopotamia.",
  },
  "kizilirmak-river": {
    // 全六段 sources: 土耳其境内最长河流，全长 1355 km；源于锡瓦斯省因拉尼耶附近克孜勒山约 2000 m；古称哈勒斯（Halys）；
    //   经巴夫拉三角洲入黑海。与正文完全一致（Hürriyet Daily News，2 级）。2026-09-10 核，verdict: ok。
    seeing:
      "The Kızılırmak (Red River) is Turkey's longest river, about 1,355 km long, historically known as the Halys, named for the red sediment it carries; it enters the Black Sea near the coastal city of Bafra through a broad delta.",
    formation:
      "The river rises near Kızıldağ in Sivas Province at about 2,000 m elevation, flowing through the mountains and plateau of several Central Anatolian provinces, carrying red sediment eroded along its course and depositing it into a broad delta at its mouth.",
    observation:
      "From the air, the Kızılırmak forms a winding, reddish-brown channel across the Central Anatolian Plateau, forming a notable bend near Avanos in Cappadocia, its green riverside vegetation belt forming a clear boundary against the dry plateau around it.",
    distinguish:
      "Unlike the Euphrates and Tigris, the Kızılırmak rises, flows and reaches the sea entirely within Turkey, and it is the longest river within Turkish territory, whereas the other two are international rivers flowing across borders into Mesopotamia.",
    concept:
      "Named for the red sediment it carries, the Kızılırmak is a classic sample for studying the complete hydro-geomorphic process by which a river erodes red sedimentary rock along its course and transports the material long distances to build a delta at its mouth.",
    history:
      "The Kızılırmak has historically served as an important agricultural and cultural dividing line in Anatolia, with numerous ancient cities along its banks; Avanos, wrapped by the river's bend in Cappadocia, remains a center of local pottery tradition today.",
  },
  "salda-lake": {
    // 全六段 sources: 火山口成因湖，白色滩地为微生物岩风化的水菱镁矿；NASA 2021-03 公开萨尔达湖矿物成分与
    //   「毅力号」耶泽罗撞击坑古湖沉积最接近的研究，与正文 2020—2021 年的时间窗吻合。
    //   ✅ **专项复核「有没有把类比写成等同」**：正文用的是「高度相似」「参考价值」，没有写成等同，通过。2/3 级。2026-09-10 核，verdict: ok。
    seeing:
      "Lake Salda, in Burdur Province in southwestern Turkey, is a crater-formed lake known for its clear turquoise water and brilliant white shoreline deposits of hydromagnesite, often called 'Turkey's Maldives.'",
    formation:
      "The lake formed from ancient volcanic activity that left a water-filled crater; its white shoreline deposits are thought to have eroded from 'microbialites' formed with the help of microbes, giving the lake its distinctive appearance.",
    observation:
      "From the air, Lake Salda's water shows a rare turquoise hue, with white sandy beaches and shallows around the shoreline standing out vividly against the grey-brown mountains beyond, creating a striking color contrast.",
    distinguish:
      "Both Lake Salda and Lake Nemrut are volcanically formed lakes, but Salda is known for its distinctive white microbialite deposits and turquoise water, while Nemrut is characterized by its huge caldera landform.",
    concept:
      "The hydromagnesite deposits on Lake Salda's shore closely match the mineral composition of the ancient lakebed deposits NASA's Perseverance rover has studied at Jezero Crater on Mars, making Salda one of the few recognized terrestrial analogs for Martian paleolake deposits and a reference for studying ancient Martian lake environments.",
    history:
      "Between 2020 and 2021, a NASA team conducted comparative geological research here to inform the search for signs of ancient life during the Perseverance Mars mission; today Lake Salda is also an important ecotourism destination in Turkey.",
  },
  "cukurova-plain": {
    // 全六段 sources: 塞伊汉 + 杰伊汉 + 贝尔丹（塔尔苏斯）三河冲积的三角洲复合体，为地中海地区继尼罗河三角洲之后
    //   第二大的农业平原体系；东为米西斯山、北与西为托罗斯山，阿达纳为核心，古称西里西亚。3 级。2026-09-10 核，verdict: ok。
    seeing:
      "The Çukurova Plain is the largest alluvial plain on Turkey's eastern Mediterranean coast, built up over a long period by sediment carried by the Seyhan, Ceyhan and Berdan rivers, forming one of the larger delta-plain systems on the Mediterranean coast.",
    formation:
      "The plain was built up by three rivers carrying sediment eroded from the upstream mountains and depositing it near their mouths; it is enclosed by the Misis Mountains to the east and the Taurus Mountains to the north and west, forming a relatively closed alluvial-plain unit.",
    observation:
      "From the air, the Çukurova Plain shows extensive, orderly farmland with a dense network of rivers and crisscrossing irrigation channels, forming a sharp plain-versus-mountain contrast against the ranges enclosing it.",
    distinguish:
      "Both the Çukurova Plain and the Konya Basin are important agricultural plains in Turkey, but Çukurova is a coastal alluvial-delta plain shaped by exorheic rivers, while the Konya Basin is an inland, closed interior-drainage basin.",
    concept:
      "The Çukurova Plain is a classic sample for studying a compound alluvial-delta landform shaped by the combined action of multiple rivers, and a representative case in Turkish agricultural geography contrasting coastal plains with the interior plateau.",
    history:
      "The plain has long been an important agricultural region in Anatolia, historically the core territory of ancient Cilicia; today its main city, Adana, is one of Turkey's important agricultural and industrial centers.",
  },
  "lake-beysehir": {
    // 全六段 sources: 面积约 650 km²、长 45 km、宽 20 km、32 座岛屿；水源来自苏丹山与阿纳马斯山溪流；
    //   国家公园经内阁决议 1993-02-20 设立。3 级多方一致。
    //   ⚠️ C8：湖面受灌溉取水影响逐年变化，正文未给带时点的水位数字；下一轮若要补必须走 DSİ 口径。2026-09-10 核，verdict: ok。
    seeing:
      "Lake Beyşehir is Turkey's largest freshwater lake and also the largest freshwater lake in the Mediterranean basin, covering about 650 km², roughly 45 km long and 20 km wide, dotted with 32 islands of varying size.",
    formation:
      "The lake sits at the southwestern edge of the Konya Basin, fed mainly by streams from the Sultan and Anamas mountains, which have accumulated over a long period to form today's shallow freshwater lake.",
    observation:
      "From the air, Lake Beyşehir shows an expansive, pale-blue body of water dotted with numerous scattered islands, together with the surrounding mountains and plains forming a richly layered lake-district landscape.",
    distinguish:
      "Both Lake Beyşehir and Lake Tuz lie within the Konya Basin, but Beyşehir is a perennially water-filled freshwater lake with rich biodiversity, while Lake Tuz is a seasonally dry, highly saline salt lake.",
    concept:
      "As Turkey's largest freshwater lake, Lake Beyşehir is an important sample for studying the ecosystem of a mountain-stream-fed freshwater lake and its role as a bird habitat.",
    history:
      "Lake Beyşehir National Park was established in 1993; the lake has historically been an important water source for local fishing and irrigated agriculture, and today it is a major bird habitat and ecotourism destination.",
  },
  uludag: {
    // seeing / formation / history sources: 海拔 2543 m、西安纳托利亚最高峰；9 处冰蚀湖；国家公园 1961-09-20 依 11,338 公顷设立。
    //   history 只写密细亚奥林匹斯古称与拜占庭修道院史实，✅ 零争议红线通过。3 级复核。2026-09-10 核，verdict: ok。
    seeing:
      "Uludağ is the highest peak in western Anatolia at 2,543 m, immediately south of the city of Bursa; historically known as Mysian Olympus, it is Turkey's most-visited national park and a premier ski destination.",
    formation:
      "Uludağ is a granite-and-gneiss mountain block uplifted along a fault; its summit developed glaciers during the last ice age, and nine glacial lakes (mostly dry in summer) survive at the top today.",
    observation:
      "From the air, Uludağ rises as a massive fault-block mountain over the Bursa plain, its summit covered in forest and alpine meadow, with snow-covered ski runs clearly visible in winter against the sharp relief drop to the city plain below.",
    // distinguish sources: 「西安纳托利亚唯一发育过冰川地貌的高峰」**被证伪**：特凯半岛（西托罗斯）的桑德拉斯、卡拉达、阿克达等山地共发育 31 处冰蚀圈谷（3 级学术专题），穆拉特山亦有记录。改写只陈述本山有什么、并点出别处也有，**不另起一个新排名**。2026-09-10 核。
    distinguish:
      "Unlike volcanic Anatolian high peaks such as Mount Erciyes or Ararat, Uludağ is a non-volcanic fault-block massif, and its summit area preserves glacial landforms such as cirques and tarns; mountains like Sandıras and Karadağ on the Teke Peninsula in south-western Turkey carry glacial cirques of their own.",
    concept:
      "The glacial lakes preserved atop Uludağ are an important geological sample for studying the extent of last-glacial mountain glaciation in western Anatolia.",
    history:
      "Known historically as Mysian Olympus, the mountain was an important center of Byzantine-era monasteries; the national park was established in 1961, and today it is Turkey's most-visited national park.",
  },
  "mount-suphan": {
    // 全六段 sources: 海拔 4058 m，土耳其第三高峰、第二高火山；比特利斯省阿迪尔杰瓦兹县、凡湖北岸；
    //   东西双峰间约 1.5 km 宽洼地内有两处小湖。乌拉尔图王国（约前 9—前 6 世纪）以凡湖盆地为中心，属前现代史实。
    //   ✅ 零争议红线：未涉现代政治／族群／宗教归属，通过。
    //   📌 交叉留痕：**本条的常年冰帽正是证伪 `mount-ararat`「土耳其唯一有常年冰帽的孤立火山」的依据**（Smithsonian GVP，1 级）。2026-09-10 核，verdict: ok。
    seeing:
      "Mount Süphan is Turkey's third-highest peak and second-highest volcano at 4,058 m, located in Bitlis Province north of Lake Van; a basin about 1.5 km wide separates its eastern and western summits.",
    formation:
      "Mount Süphan is a stratovolcano built up from repeated eruptions of lava and pyroclastic material; two small lakes sit in the summit basin, formed when the terrain subsided and filled with water in the volcano's later activity.",
    observation:
      "From the air, Mount Süphan presents a complete conical volcanic profile, mirroring the Nemrut volcano on Lake Van's southern shore to form the skeletal volcanic landforms on the lake's north and south sides.",
    distinguish:
      "Both Mount Süphan and the Nemrut volcano are part of the Lake Van volcanic system, but Süphan is higher and more massive with small lakes in a summit basin, while Nemrut has a much larger caldera lake.",
    concept:
      "Standing on opposite shores of Lake Van, Mount Süphan and the Nemrut volcano together form a classic sample for studying how multiple volcanoes within a single tectonic region jointly shape a regional lake-drainage pattern.",
    history:
      "The area around Mount Süphan was historically part of the territory of the Kingdom of Urartu in the Lake Van basin; today it is an important mountaineering and geological survey destination in eastern Turkey.",
  },
};
