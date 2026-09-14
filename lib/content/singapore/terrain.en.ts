import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Singapore ============
  "bukit-timah-nature-reserve": {
    // 全六段 sources: 163.63 m（正文 164 为合理取整），NParks 称其为新加坡最高**自然**点，正文「本岛最高点」的限定与之一致；1883 年设为 Bukit Timah Forest Reserve；2011-10-18 列为东盟遗产公园（与双溪布洛并列，新加坡共 2 处）。核实 2026-09-11，未改动
    seeing:
      "Bukit Timah Nature Reserve is home to Bukit Timah Hill, at 164 m the highest point on mainland Singapore, a granite hill whose reserve preserves one of Singapore's few remaining tracts of primary rainforest.",
    formation:
      "Bukit Timah Hill is built of a Mesozoic granite intrusion; long-term weathering and erosion under a hot, humid tropical climate shaped today's low, rounded hill form, its granite quarried extensively from the late 19th century until quarrying ceased in the mid-20th century.",
    observation:
      "From the air, Bukit Timah appears as an isolated patch of deep-green forested high ground within mainland Singapore's urbanised plain, its primary rainforest canopy richly layered, in sharp contrast with the high-rise cityscape around it.",
    distinguish:
      "Bukit Timah Nature Reserve and the Central Catchment Nature Reserve lie adjacent and are linked by an ecological corridor, but Bukit Timah is known for its isolated granite high ground with primary rainforest, while the Central Catchment is a larger tract of secondary forest ringing several reservoirs.",
    concept:
      "The survival of primary rainforest at Bukit Timah within highly urbanised mainland Singapore makes it a classic sample for studying the fragmentation and conservation of native ecosystems through the process of tropical island urbanization.",
    history:
      "Bukit Timah Nature Reserve was established in 1883, one of Singapore's oldest nature reserves, and was recognised as an ASEAN Heritage Park in 2011.",
  },
  "central-catchment-nature-reserve": {
    // 全六段 sources: 2880 ha（NParks 官方现行数，1 级；另有第三方给 3043 ha，与官方冲突，采信官方），为新加坡最大自然保护区；园内有原生旱地雨林残片约 154 ha 与梧槽原生淡水沼泽林约 87–96 ha（新加坡现存最后一片），其余逾 2000 ha 为次生林。核实 2026-09-11，未改动
    seeing:
      "The Central Catchment Nature Reserve is Singapore's largest nature reserve, covering 2,880 ha, ringing the MacRitchie, Upper and Lower Peirce, and Upper Seletar reservoirs.",
    formation:
      "The low hilly terrain of the Central Catchment has long been eroded under a hot, humid tropical climate; the reserve holds more than 2,000 ha of secondary lowland dipterocarp forest along with scattered patches of primary dryland rainforest and the primary freshwater swamp forest at Nee Soon, forming mainland Singapore's most topographically varied core area.",
    observation:
      "From the air, the Central Catchment shows an extensive, continuous deep-green forest canopy covering the surfaces of several reservoirs, forest and water interweaving in layers — mainland Singapore's largest single stretch of continuous green space.",
    distinguish:
      "The Central Catchment Nature Reserve and Bukit Timah Nature Reserve are linked by an ecological corridor and together form mainland Singapore's green core, but the Central Catchment is far larger and dominated by secondary forest ringing reservoirs, while Bukit Timah is an isolated granite high ground of primary rainforest.",
    concept:
      "The surviving patches of primary rainforest around MacRitchie within the Central Catchment are an important sample for studying long-term secondary-forest succession and the conservation of native ecosystems as isolated fragments.",
    history:
      "The reservoirs ringed by the Central Catchment Nature Reserve were historically an important freshwater supply facility for Singapore; the reserve today serves as an important ecological and recreational green space on mainland Singapore.",
  },
  "sungei-buloh-wetland-reserve": {
    // 全六段 sources: 现行面积 202 ha（历经 1989 约 87 ha → 2002 正式划为 130 ha → 扩展至 202 ha 多次变化，**正文用的是现值、没把某个历史阶段的数当成现值**）；2003 年成为新加坡**首个**东盟遗产公园，早于武吉知马（2011）。核实 2026-09-11，未改动
    seeing:
      "Sungei Buloh Wetland Reserve is a mangrove wetland in northwestern Singapore, expanded to 202 ha, preserving Singapore's largest surviving mangrove area and recognised in 2003 as Singapore's first ASEAN Heritage Park.",
    formation:
      "The northwest coast where Sungei Buloh sits has long been shaped by the combined action of tides and river-borne sediment; mangrove plants have continuously colonised the intertidal mudflats, forming today's composite wetland ecosystem of mangroves, mudflats, ponds and secondary forest.",
    observation:
      "From the air, Sungei Buloh shows a dense mangrove canopy winding along the coastline, mudflats and ponds dotted within it, forming a sharp ecological and development contrast with the adjacent Kranji Reservoir and urbanised areas.",
    distinguish:
      "Both Sungei Buloh Wetland Reserve and the Chek Jawa Wetlands are representative intertidal wetlands in Singapore, but Sungei Buloh is known for its extensive mangroves and role as a migratory bird stopover, while Chek Jawa is known for the convergence of six distinct ecosystems.",
    concept:
      "Sungei Buloh is an important stopover site on the East Asian-Australasian Flyway, making it a classic sample for studying how a tropical urban mangrove wetland ecosystem supports global migratory bird patterns.",
    history:
      "Sungei Buloh Wetland Reserve became Singapore's first ASEAN Heritage Park in 2003, and has long served as the core base for Singapore's mangrove conservation and environmental education efforts.",
  },
  "chek-jawa-wetlands": {
    // 全六段 sources: 1992 年批准乌敏岛东岸填海 → 2000 年底生态价值被公众发现 → 经公众意见征询与专家评估，2001-12-20（原定填海前数日）国家发展部宣布无限期推迟（新加坡国家文物局 Roots.gov.sg，1 级）。✅ 正文把年份、顺序与决策机制都写对了，**没有写成戏剧化叙事**。核实 2026-09-11，未改动
    seeing:
      "Chek Jawa Wetlands is an intertidal wetland of about 100 ha at the eastern tip of Pulau Ubin, where six distinct ecosystems — sandy beach, rocky beach, seagrass lagoon, coral rubble, mangroves and coastal forest — converge.",
    formation:
      "Chek Jawa sits on a relatively gentle stretch of coast at the eastern tip of Pulau Ubin; long-term tidal action and wave processes have shaped a composite intertidal landform alternating between sandy beach, rocky shore and mudflat, a classic sample of multiple shallow tropical marine habitats converging in one place.",
    observation:
      "From the air, Chek Jawa at low tide shows broad expanses of exposed sandy beach, rocky shore and coral rubble, the boundaries between its six ecosystems clearly visible, before most of the area submerges again at high tide.",
    distinguish:
      "Both Chek Jawa Wetlands and Sungei Buloh Wetland Reserve are representative intertidal wetlands in Singapore, but Chek Jawa is known for the convergence of six ecosystems within a small area, while Sungei Buloh is characterised by extensive continuous mangrove.",
    concept:
      "More than 500 marine species can be seen at Chek Jawa during low tides of 0.5 m and below, making it an important sample for studying how biodiversity is sustained where multiple tropical intertidal habitats converge.",
    history:
      "Chek Jawa was slated for land reclamation in 1992; after public consultation and expert review in 2001, the reclamation was deferred indefinitely, a representative case in Singapore's conservation history of public participation in decision-making.",
  },
  "pulau-ubin": {
    // 全六段 sources: 采石始于 19 世纪早中期、1930 年代达峰；最后一座采石场（Ketam Quarry，原 Aik Hwa，1964–1999）1999-05 关闭；花岗岩曾用于 1851 年 Horsburgh 灯塔、1858 年 Fort Canning、1923 年新柔长堤（NParks 乌敏岛官方专题，1 级）。核实 2026-09-11，未改动
    seeing:
      "Pulau Ubin is a granite island off Singapore's northeast coast, extensively quarried for granite from the mid-19th century, its four surviving disused quarries now evolved into vegetated scenic ponds.",
    formation:
      "Pulau Ubin's main body is built of granite; long-term weathering and erosion shaped its low, rolling hill terrain, and extensive quarrying from the mid-19th century onward left multiple artificial ponds on the island, with the last quarry closing in 1999.",
    observation:
      "From the air, Pulau Ubin shows low hills interwoven with scattered quarry ponds, wooden houses, duck ponds and rubber plantations dotting the greenery, forming a sharp contrast with the high-density cityscape of mainland Singapore.",
    distinguish:
      "Both Pulau Ubin and Singapore's Southern Islands are coastal island landforms, but Pulau Ubin is known for its granite-quarrying history and preserved rural character, while the Southern Islands are known for their quarantine-and-rehabilitation history and role as a near-shore leisure destination.",
    concept:
      "The evolution of Pulau Ubin's disused quarries into scenic ponds is a classic sample for studying how tropical island mining landforms recover into semi-natural ecosystems through natural succession.",
    history:
      "Granite from Pulau Ubin was used to build several lighthouses and the Causeway; the island's last quarry closed in 1999, and it is today one of the few places in Singapore that retains a traditional rural character.",
  },
  "sisters-islands-marine-park": {
    // 全六段 sources: 2014 年设立，新加坡首座海洋公园，约 40 ha；范围除大小姐妹岛外还含圣约翰岛与 Pulau Tekukor 西侧礁盘 —— 正文只提圣约翰岛属表述不完整，但**未作排他性穷举断言**，不改。核实 2026-09-11，未改动
    seeing:
      "Sisters' Islands Marine Park, established in 2014, is Singapore's first marine park, covering about 40 ha and encompassing the Sisters' Islands and the waters around the western reef of St John's Island.",
    formation:
      "The waters around the Sisters' Islands have long been shaped by a shallow tropical marine environment; coral has continuously grown and accumulated on the reef flats, forming today's composite marine ecosystem of coral reef, sandy shore and seagrass meadow.",
    observation:
      "From the air and at the surface, the waters around the Sisters' Islands show pale coral reef flats interweaving with the deep-blue open sea, Big Sister's Island and Small Sister's Island standing side by side — one of the most concentrated areas of coral reef in Singapore's coastal waters.",
    distinguish:
      "Sisters' Islands Marine Park and the Southern Islands lie geographically close together, but the marine park's core function is coral reef conservation, while the Southern Islands are primarily known for their historical sites and near-shore leisure use.",
    concept:
      "Sisters' Islands Marine Park received coral colonies relocated from the Pulau Semakau reclamation works, making it an important sample for studying the effectiveness of coral reef translocation conservation in urbanised tropical waters.",
    history:
      "Sisters' Islands Marine Park was established in 2014 as Singapore's first marine park; Small Sister's Island hosts a sea-turtle hatchery, and the park has long carried out turtle conservation and coral reef restoration work.",
  },
  "labrador-nature-reserve": {
    // 全六段 sources: 2002 年将 10 ha 次生海岸植被与岩岸划设为保护区，是新加坡本岛唯一对公众开放的天然岩岸海崖。核实 2026-09-11，未改动
    seeing:
      "Labrador Nature Reserve is the only publicly accessible rocky sea cliff on mainland Singapore; 10 ha of secondary coastal vegetation and rocky shore were gazetted as a reserve in 2002.",
    formation:
      "Labrador's coastal ground is made of reddish-brown fine sandy clay with basalt stones and boulders scattered on low rises; long-term wave erosion has shaped today's rocky shore landform, which before land reclamation was a narrow strip of coast at high tide and an exposed rocky flat at low tide.",
    observation:
      "From the air, Labrador's rocky shore shows exposed rock flats along the coastline, extensively bared at low tide, forming a sharp contrast with the mostly artificial coastline elsewhere on mainland Singapore.",
    distinguish:
      "Labrador Nature Reserve and Singapore's other coastal parks all lie along the coast, but Labrador is known as mainland Singapore's only surviving natural rocky sea cliff, while most other coastal stretches have been reclaimed into artificial beaches or sea walls.",
    concept:
      "The community of giant mudskippers, crabs, sea anemones and other intertidal life exposed at low tide on Labrador's rocky shore makes it a classic sample for studying the isolated survival of a tropical rocky-shore ecosystem within a highly urbanised coastline.",
    history:
      "The Labrador area historically held several coastal defence gun batteries; it was gazetted as a nature reserve in 2002, and is today a representative site where Singapore's natural and historical heritage intersect.",
  },
  "bukit-batok-nature-park": {
    // seeing sources: ⚠️ 两个相邻公园别混 —— **Bukit Batok Town Park（42 ha，前身 Gammon Quarry，1984 停用）才是官方的「小桂林」**（NParks 页面原文 Also known as Little Guilin）；本条目的 Bukit Batok **Nature** Park（36 ha，1988 辟建）官方页未提 Little Guilin。本条前身采石场名在 3 级来源里作 Poh Kim / Poh Hin，写法不一，按判据不填专名。岩性为辉长苏长岩（Gombak Norite）。核实 2026-09-11
    seeing:
      "Bukit Batok Nature Park covers 36 ha, developed in 1988 on the site of a disused quarry, with a towering granite cliff face beside the former quarry's flooded pit. The nickname Little Guilin, for the resemblance to the karst landscape of Guilin in China, officially belongs to the neighbouring Bukit Batok Town Park — a separate former-quarry park next door.",
    formation:
      "The quarry at Bukit Batok once extracted gabbro-norite (part of the Gombak Norite formation); long-term quarrying left a steep, near-vertical cliff face, and after quarrying ceased, groundwater seeped in to form the flooded pit that, together with the cliff, makes up today's landscape.",
    observation:
      "From the air, Bukit Batok Nature Park is dominated by a near-vertical granite cliff at its centre, reflected in the still water of the pit below, forming a clearly layered landscape against the dense secondary forest around it.",
    distinguish:
      "Both Bukit Batok Nature Park and Bukit Timah Nature Reserve are granite hill landforms on mainland Singapore, but Bukit Batok is known for its vertical cliff landscape formed by quarrying, while Bukit Timah is a natural granite high ground preserving primary rainforest.",
    concept:
      "Since 2021, the Bukit Batok cliff face has experienced repeated landslips, making it a real-world case for studying the natural weathering of a disused quarry's steep cliff once artificial maintenance has stopped.",
    history:
      "\"Bukit Batok\" means \"coughing hill,\" a name derived from the vibration and noise of early quarrying operations; the park also preserves several sites associated with the Second World War.",
  },
  "coney-island-park": {
    // 全六段 sources: 岛屿原 13 ha，经填海扩至约 100 ha；胡文虎、胡文豹兄弟 1930 年代购岛建「虎豹岛」别墅；公园 2015-10 开放（正文只写 2015 年，未误植月份）。注：岛上公园本身 50 ha 是 100 ha 岛屿的一部分，正文未混淆两者。核实 2026-09-11，未改动
    seeing:
      "Coney Island (formerly Pulau Serangoon) is an island off Singapore's northeast coast, originally just 13 ha and expanded through successive reclamation projects to about 100 ha, its park encompassing casuarina coastal forest, mangroves and open grassland.",
    formation:
      "Coney Island was originally a small natural island; reclamation work from the 1990s, tied to the Punggol 21 planning initiative, expanded its southern area, shaping today's island outline and its varied coastal habitats.",
    observation:
      "From the air, Coney Island shows casuarina coastal forest, mangroves and open grassland interwoven across the landscape, a 2.5-km boardwalk winding along the coast, the island facing mainland Singapore across the water.",
    distinguish:
      "Both Coney Island and Pulau Ubin are islands off Singapore's northeast coast, but Coney Island is known for its planned nature park built through land reclamation, while Pulau Ubin preserves a granite-quarrying history and traditional rural character.",
    concept:
      "Coney Island's surviving population of locally rare plant species makes it a contemporary sample for studying how a reclaimed island can balance ecological conservation with public recreational use.",
    history:
      "In the 1930s Coney Island was purchased by the brothers Aw Boon Haw and Aw Boon Par, who renamed it Haw Par Island and built a private beach villa there; Coney Island Park opened in 2015.",
  },
  "kranji-marshes": {
    // 全六段 sources: 56–57 ha，为新加坡最大天然淡水沼泽；170+ 鸟种 / 54 蝶种 / 33 蜻蜓种；核心保育区（约八成面积）不开放，仅约 8 ha 开放参观（NParks 栖息地修复手册，1 级）。核实 2026-09-11，未改动
    seeing:
      "Kranji Marshes is Singapore's largest natural freshwater marsh, covering more than 56 ha, home to over 170 bird species, 54 butterfly species and 33 dragonfly species.",
    formation:
      "After the Kranji River was dammed to form Kranji Reservoir in the 1970s, the low-lying surrounding ground flooded and unintentionally formed a freshwater marsh; long-term vegetation colonisation and hydrological processes together shaped today's freshwater marsh ecosystem.",
    observation:
      "From the air, Kranji Marshes shows open water interwoven with reeds and aquatic vegetation, two small artificial mud islands dotting the surface to provide roosting and breeding habitat for birds.",
    distinguish:
      "Both Kranji Marshes and Sungei Buloh Wetland Reserve are important wetlands in northwestern Singapore, but Kranji Marshes is an accidentally formed freshwater marsh known for birdwatching, while Sungei Buloh is a tidal mangrove wetland.",
    concept:
      "Kranji Marshes' wetland ecosystem, unintentionally created by dam construction, is a classic case for studying how human hydrological engineering can indirectly create new ecological habitat.",
    history:
      "In 2008 the Nature Society (Singapore) began participating in the conservation and management of Kranji Marshes, clearing some vegetation and building birdwatching facilities; the core conservation area remains closed to the public, with only about 8 ha open for visitors.",
  },
  "southern-islands": {
    // 全六段 sources: 圣约翰岛 19 世纪起为检疫隔离站，1954 年设鸦片戒治中心、1973 年改综合戒毒中心、1975 年关闭，与正文「1950至70年代」吻合；拉扎鲁斯岛 1899-03-25 正式命名为 Lazarus or Convalescent Island，因脚气病医院得名；龟屿庙宇、放生龟池与农历九月朝圣传统均确认（国家文物局，1 级）。核实 2026-09-11，未改动
    seeing:
      "The Southern Islands are a group of islands south of mainland Singapore; St John's Island, Lazarus Island and Kusu Island are the best known among them, today a well-known near-shore leisure destination.",
    formation:
      "The Southern Islands share the same shallow continental shelf as mainland Singapore; long-term sea-level change and sedimentation have shaped today's scattered group of small islands, each low-lying and modest in area.",
    observation:
      "From the air, the Southern Islands appear as several small green islands scattered across pale-blue coastal waters, connected by ferry routes, facing mainland Singapore and its port anchorage across the water.",
    distinguish:
      "The Southern Islands and Sisters' Islands Marine Park lie geographically close together, but the Southern Islands' main function is historical heritage and near-shore leisure, while Sisters' Islands Marine Park's core function is coral reef conservation.",
    concept:
      "The Southern Islands' successive historical roles in quarantine and drug rehabilitation make them a classic case for studying how the geographic isolation of islands has been applied to public health management.",
    history:
      "St John's Island served as a quarantine station from the late 19th century and was converted into a drug rehabilitation centre from the 1950s to the 1970s; Lazarus Island earned the name \"Convalescent Island\" after a beriberi hospital was built there in 1899; Kusu Island holds temples and a turtle sanctuary pond, drawing large numbers of pilgrims each year during the ninth lunar month.",
  },
  "pulau-semakau": {
    // 全六段 sources: 填埋场 1995–1999 年建设（石堤合并工程在此窗口内）、1999-04-01 启用；一期毁 13 ha 红树林、补种 40 万株红树幼苗；2014-09 至 2015-01 珊瑚迁地工程共移植 761 个珊瑚群体（42 属）至姐妹岛海洋公园，正文「逾700群」吻合（国家文物局 1 级 + DHI 2 级）。核实 2026-09-11，未改动
    seeing:
      "Pulau Semakau is an island about 8 km south of mainland Singapore, home since 1999 to Singapore's sole operating landfill, formed in 1995 by joining Pulau Semakau and Pulau Sakeng with a rock bund.",
    formation:
      "The landfill's rock bund is lined with an impermeable membrane and marine clay to prevent pollutant leakage, sealing incinerated ash and other waste within the enclosed sea space — a product combining artificial geotechnical engineering with the island's existing landform.",
    observation:
      "From the air, Pulau Semakau shows the regular outline of bunds dividing what was once open sea into separate landfill cells, while mangroves replanted by hand and transplanted coral reef zones survive around the island's edges.",
    distinguish:
      "Pulau Semakau and Singapore's other Southern Islands all lie south of the Singapore Strait, but Semakau is known for its function as an active landfill, while the other Southern Islands are known for their historical heritage or coral reef conservation.",
    concept:
      "Pulau Semakau's maintenance of mangrove, coral reef and seagrass ecosystems alongside ongoing landfill operations makes it a contemporary case for studying how urban solid-waste infrastructure and marine ecological conservation can coexist in the same space.",
    history:
      "Phase I of the Semakau landfill destroyed 13 ha of mangrove, which the National Environment Agency replaced by planting 400,000 mangrove saplings on artificial mudflats; during Phase II, more than 700 coral colonies were transplanted to the waters around the Sisters' Islands, and mangrove, coral reef and seagrass ecosystems survive on and around the island today.",
  },
};
