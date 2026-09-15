import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  "hekla": {
    seeing:
      "Hekla is an active volcano in southern Iceland, about 1,491 m high, and one of the most frequently erupting volcanoes in Iceland's history. It is not a cone but a ridge-shaped mountain growing along a fissure, looking from a distance like an overturned boat. After a large eruption in 1104, medieval Europeans imagined Hekla as a \"gateway to Hell\", where the souls of the damned were thrown into its crater.",
    // formation sources: 预警时间：冰岛气象局（Veðurstofa Íslands / IMO）监测专文，量级为「几十分钟，理想条件下不到一小时」。级别 1，2026-09-09 核；原文的「一两个小时」无官方依据，已删。
    //   https://en.vedur.is/earthquakes-and-volcanism/articles/monitoring-hekla
    formation:
      "Hekla sits astride one of Iceland's volcanic fissure zones. Its magma is intermediate between rhyolitic and basaltic in composition, so an eruption begins with a violent explosive phase (throwing out ash and pumice) and then shifts to relatively quiet lava effusion. Because the magma conduit does not fully seal after each eruption, Hekla's warning time from \"dormant\" to \"erupting\" is often only tens of minutes — under optimal conditions less than an hour — among the shortest of any volcano in the world (Icelandic Met Office).",
    observation:
      "From the air Hekla is a dark, elongated, slightly arched ridge at the junction of the southern lowland and the highlands, its body covered in layers of black lava and pale pumice of different ages, with almost no vegetation; a row of fissure craters runs along the ridge crest. Around it is heath buried under successive ashfalls and several glacial rivers.",
    distinguish:
      "Hekla differs from southern Iceland's ice-covered volcanoes such as Eyjafjallajökull and Katla: those have ice caps and their eruptions bring glacial floods; Hekla has no ice, and its main hazards are ash, volcanic bombs and lava flows. Compared with the purely basaltic shield volcanoes of Hawaii, Hekla's magma is more viscous and more explosive.",
    concept:
      "Hekla is a case study in a fissure volcano: the magma does not erupt from one fixed round crater but rises along a tensional fracture in the crust, so an eruption is often a whole row of craters erupting at once, joined into a \"curtain of fire\". To recognise a fissure volcano, look at whether it is a linear ridge with craters in a row. A common misconception is that all volcanoes are symmetrical cones.",
    // history sources: 20 世纪喷发年表（1947 / 1970 / 1980–81 / 1991 / 2000）与「2000 年后至今未再喷发」均据 IMO 监测专文。级别 1，2026-09-09 核，本轮无需改动。
    //   https://en.vedur.is/earthquakes-and-volcanism/articles/monitoring-hekla
    history:
      "Hekla's eruptions are recorded in detail in Iceland's sagas and annals, an important source for the history of volcanic activity. The 1104 eruption destroyed nearby settlements. In the 20th century it was quite active (eruptions in 1947, 1970, 1980, 1991, 2000). Because the warning time is so short, Iceland's civil protection authority issues specific warnings for hikers around Hekla.",
  },

  "katla": {
    seeing:
      "Katla is a volcano in southern Iceland buried under the Mýrdalsjökull ice cap, with a large caldera about 10 km across beneath the ice. It is inconspicuous — all you see at the surface is a large white ice cap — but historically it is one of the most feared volcanoes in Iceland: a violent subglacial eruption melts a huge amount of ice in moments, producing an enormous flood that races down the glacial river valleys.",
    formation:
      "Katla's magma is basaltic. When it erupts under hundreds of metres of ice, the hot magma meeting ice and meltwater causes violent \"phreatomagmatic\" explosions, blasting the magma into fine black ash, and at the same time melting hundreds of millions of tonnes of ice within hours. The meltwater, together with ice blocks and sediment, bursts out from under the ice cap at flows of tens of thousands to over a hundred thousand cubic metres a second — a glacial flood, called a jökulhlaup in Iceland. Historically these floods have dumped so much sediment on the south coast that the coastline has advanced several kilometres.",
    observation:
      "From the air Katla is simply Mýrdalsjökull — Iceland's fourth-largest ice cap by area — with a slightly depressed area of ice in the centre, the caldera beneath almost invisible from the surface. Several outlet glaciers reach out from the southern edge of the ice cap, and in front of them is a large black flood-outwash plain (Mýrdalssandur), a maze of channels with no vegetation at all.",
    distinguish:
      "Katla and Grímsvötn are both subglacial volcanoes and both produce glacial floods, but Katla is on Iceland's south coast near populated areas, and its floods drive straight down toward the Ring Road; Grímsvötn is deep in the interior within Vatnajökull, and its floods discharge mainly across the uninhabited sandur plains. Compared with Hekla, Katla's main hazard is not ash but flood.",
    concept:
      "Katla is a case study in a subglacial volcano and a jökulhlaup: the volcano's heat rapidly melts the overlying ice, and the meltwater may pond up as a lake under the ice and then burst out suddenly, or burst out directly, at a flow that can exceed that of the world's great rivers for a short time. To assess this risk, look at whether the volcano is covered by thick ice and whether there are glacial river valleys downstream. A common misconception is that an ice-covered volcano is relatively \"safe\".",
    // history sources: 1918 年喷发洪水的海岸线推进量：Duller et al. 2014, Geophysical Research Letters（基于历史地形测量与野外调查），约 4 公里。等同级别 2，2026-09-09 核；原文「约 3 公里」无来源支持，已改。
    //   https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014GL060090
    //   「大约每世纪喷发两次」与「过去约 1100 年间 21 次以上、平均间隔约 50 年」一致（3 级交叉印证），本轮保留。
    history:
      "Katla has historically erupted about twice a century, most recently in a large eruption in 1918, whose flood pushed the south coastline out by about 4 km. Katla has had no large eruption since, and is one of the most closely monitored volcanoes in Iceland. The town of Vík has a specific evacuation plan for volcanic floods.",
  },

  "eyjafjallajokull": {
    // seeing sources: 高程 1651 米、2010 年 4–5 月喷发时序、欧洲空域关闭约六天、1821–1823 年前次喷发：多方交叉印证一致，3 级，2026-09-09 核，本轮无需改动。未找到 Landmælingar Íslands 的逐峰高程公开表，1651 米属广泛一致的常见值。
    seeing:
      "Eyjafjallajökull, on Iceland's south coast, is an ice-capped stratovolcano about 1,651 m high. Its awkward Icelandic name (\"the glacier of the island mountains\") became known around the world overnight in 2010 — that April and May a not-especially-large eruption produced fine ash that drifted toward mainland Europe on the wind, closing most of European airspace for nearly a week and stranding millions of travellers.",
    formation:
      "Eyjafjallajökull's magma is intermediate to acidic in composition and fairly viscous. The 2010 eruption had two phases: first a fissure on the mountain's flank quietly effused lava; weeks later the main crater erupted under the ice cap, the magma shattering violently on contact with ice into large amounts of fine, hard, angular ash. This fine ash can be lofted high and carried far on high-altitude winds, and it abrades and can even melt and clog jet engines — which is why it shut down aviation.",
    observation:
      "From the air Eyjafjallajökull is a blunt, white ice-capped volcano on the south coast, right next to the larger Mýrdalsjökull ice cap (Katla is under that). The mountain's south slope is steep, with several glaciers and waterfalls (the famous Seljalandsfoss and Skógafoss are along the line of the old sea cliff at its foot). Since 2010 the summit crater has been ringed by new black eruptive material.",
    distinguish:
      "Eyjafjallajökull and neighbouring Katla are often mentioned together, but Katla is far larger and far more dangerous; Eyjafjallajökull's ice cap is small and its eruption was of moderate size. The scale of the 2010 impact was due less to the vigour of the eruption itself than to the fact that the fine ash from magma-ice interaction coincided with winds blowing it toward Europe.",
    concept:
      "Eyjafjallajökull 2010 is a case study in volcanic ash and aviation: fine, hard, angular ash particles entering a jet engine melt in the hot combustion chamber and then solidify as a crust on the turbine, which can cause the engine to fail. So flights must be grounded wherever an ash cloud reaches. A common misconception is to picture volcanic ash as soft like wood ash — it is in fact abrasive crushed glass and rock.",
    history:
      "Eyjafjallajökull's earlier eruptions (such as 1821–1823) are also recorded, and its eruptions have often been followed soon after by activity at neighbouring Katla — whether Katla would \"follow\" after 2010 has been watched closely, but it has not so far. The 2010 event prompted more rigorous ash-dispersal forecasting and graduated airspace-management rules.",
  },

  "grimsvotn": {
    // seeing sources: 喷发频率：冰岛气象局（IMO）火山档案页，近八千年年均约七次每世纪、60–80 年高发/低发交替。级别 1，2026-09-09 核；原文「近百年十几次」查无依据（可查清单仅七八次），已改。
    //   https://en.vedur.is/volcanoes/about-volcanoes/grimsvotn/
    //   备忘（本轮未写进正文）：IMO 已把格里姆火山的航空颜色码从绿改黄、冰下湖水位接近 2004/2010 年洪水前水位——警戒级别是随时会变的量，若要写进正文必须带「截至 <日期>」。
    seeing:
      "Grímsvötn is a volcano in Iceland's interior, beneath the north-western part of the Vatnajökull ice cap — one of the most frequently erupting volcanoes in Iceland — the Icelandic Met Office puts the long-term average at about seven eruptions a century over the past 8,000 years, alternating between more and less active spells. It is almost invisible at the surface — just a slightly depressed area of the ice cap, often with crevasses and collapse pits, with a geothermally maintained subglacial lake beneath.",
    formation:
      "Grímsvötn sits at one of the most active points of the Iceland hotspot (mantle upwelling). Constant geothermal heat melts the ice above, and the meltwater collects in the caldera as a subglacial lake, \"sealed\" in by the surrounding and overlying ice. When the lake fills to the point where buoyancy lifts the ice dam, the lake water drains suddenly along the base of the glacier as a glacial flood, delivering large amounts of water, sediment and ice blocks to the Skeiðarársandur plain to the south within a few days. Sometimes an eruption itself triggers a flood directly.",
    observation:
      "From the air the site of Grímsvötn is a clear depression and ice cliff in the Vatnajökull ice cap, with arcuate crevasses and pits where the lake has drained and the ice has collapsed. During an eruption a dark ash column rises straight out of the white ice cap. To the south, the Skeiðará river emerges from under the ice cap and crosses a large braided black sand plain.",
    // distinguish sources: 「冰岛最近一次较大喷发」这个未限定排名已删：2014–2015 年霍尔赫劳恩喷发岩浆体积约 1.44 立方公里，为 1783–84 年拉基以来最大的熔岩喷发。等同级别 2，2026-09-09 核。
    //   https://www.frontiersin.org/journals/earth-science/articles/10.3389/feart.2018.00235/full
    //   1996 年 Gjálp 裂隙喷发与随后冲毁环岛公路桥梁的冰川洪水（洪峰约 45,000–53,000 立方米每秒）核实一致，本轮不改。
    distinguish:
      "Grímsvötn and Katla are both subglacial volcanoes and both produce glacial floods, but Grímsvötn is in the uninhabited interior and has a stable subglacial lake, so its floods are more \"regular\"; Katla is near south-coast communities and has no permanent subglacial lake, so its floods are more sudden. Grímsvötn last erupted in 2011; Iceland has erupted repeatedly since, including the larger-by-volume but effusive Holuhraun eruption of 2014–2015 and the Reykjanes Peninsula series from 2021.",
    concept:
      "Grímsvötn is a case study in a subglacial lake outburst: volcanic geothermal heat constantly melts ice, the meltwater is sealed in a hollow by ice, and when the water level rises enough, buoyancy lifts the ice dam and the lake drains out along the glacier base — a glacial flood that can recur, and can sometimes even be predicted. To recognise this system, look for a hollow in the ice cap that periodically collapses and refills. A common misconception is that the ice cap is solid ice underneath.",
    history:
      "The drainage of Grímsvötn's subglacial lake has centuries of observation and folklore in Iceland. In 1996 the nearby Gjálp fissure eruption melted a large volume of water that flowed into the Grímsvötn lake, and the resulting exceptional flood destroyed several bridges of the Ring Road on Skeiðarársandur. Today Iceland monitors the water level of the Grímsvötn lake in real time.",
  },

  "fagradalsfjall": {
    // seeing sources: 雷克雅内斯半岛的喷发序列：法格拉达尔本体 2021 / 2022 / 2023 各一次；2023-12 起活动中心转到桑德努库尔火山口列，至 2026-09-09 已再喷发至少九次（2023-12 / 2024-01 / 02 / 03 / 05 / 08 / 11 / 2025-04 / 2025-07–08），最近一次 2025 年 7–8 月。3 级清单与 IMO / GVP 报告交叉印证，2026-09-09 核。
    //   ⚠️ 这是典型的会过期内容（known-errors C6-j）：**每一轮都要回来刷新这一句**，写法上只给「最近一次在 <年月>」而不给总次数。
    seeing:
      "Fagradalsfjall is on the Reykjanes Peninsula in south-west Iceland, not far from the capital Reykjavík or from Keflavík International Airport. After lying quiet for about 800 years, this area began erupting again from 2021 — once each in 2021, 2022 and 2023 at Fagradalsfjall itself, all relatively quiet fissure eruptions of flowing lava; from late 2023 the centre of activity shifted to the nearby Sundhnúkur crater row, which has erupted repeatedly since, most recently in July–August 2025. Because they were easy to reach and essentially free of explosions and ash, these eruptions drew large numbers of visitors watching from close up.",
    formation:
      "The Reykjanes Peninsula is a section of the Mid-Atlantic Ridge come ashore in Iceland — the two plates pulling apart here at about 2 cm a year. The crust is stretched and thinned, and basaltic magma from depth rises along sets of parallel fractures. The 2021-onward series of eruptions began with magma first intruding sideways a few kilometres down, jacking the ground apart (accompanied by tens of thousands of small earthquakes), then effusing from the fissures as slow-moving lava flows and low lava mounds.",
    observation:
      "From the air the Fagradalsfjall area is a gently rolling hill country on the Reykjanes Peninsula, covered in moss and old lava; during an eruption there is an orange-red fissure with lava flowing from it, gradually spreading and darkening, filling the nearby valleys (such as Geldingadalir and Meradalir). Around it are old and new lava fields, geothermal steam and several small cones.",
    distinguish:
      "Fagradalsfjall's eruptions are completely different from southern Iceland's subglacial volcanoes (Katla, Grímsvötn): there is no ice, no big explosion, no ash cloud, mainly lava flowing quietly; it is more like a small-scale version of the large fissure effusion at Holuhraun north of Vatnajökull in 2014–2015.",
    concept:
      "Fagradalsfjall is a case study in fissure eruption at a plate-rifting zone: where two plates pull apart, the crust is continually thinned and torn, and basaltic magma comes up along these tensional fractures, often not building a large cone but effusing lava along a line and gradually building new ground. To recognise this kind of eruption, look at whether the vent is a fissure rather than a round hole and whether the lava is very fluid and travels far. A common misconception is to picture every volcanic eruption as explosive.",
    // history sources: 现状（截至 2026-09-09）：无正在进行的喷发，但 IMO 监测显示岩浆仍在斯瓦特森伊（Svartsengi）下方积累。正文只写「周期仍在继续、等级由 IMO 更新」，**不写死警戒等级** —— 那是随时会变的量。2 级/主流报道 + IMO 页面，2026-09-09 核。
    history:
      "The Reykjanes Peninsula's last active period was in the 13th century (the \"Reykjanes Fires\"). The new activity from 2021 is thought likely to continue for decades or longer. From late 2023 the centre of activity shifted toward the town of Grindavík, where magma intrusion cracked the ground and the town was evacuated for a time, and lava approached the town and a geothermal power plant — prompting Iceland to accelerate protective works such as barrier walls. This eruptive episode was still going on in 2026, with the Icelandic Met Office updating the alert level and the likely window for the next eruption from current monitoring.",
  },

  "snaefellsjokull": {
    // seeing sources: 高程 1446 米、火山约 70 万年、末次喷发约 1800 年前、2001 年设立国家公园：多方交叉印证一致，3 级，2026-09-09 核，本轮无需改动。
    seeing:
      "Snæfellsjökull, at the very tip of the Snæfellsnes peninsula in western Iceland, is an about 700,000-year-old stratovolcano with a small ice cap on its summit, about 1,446 m high. On a clear day it can be seen from Reykjavík across Faxaflói bay, its symmetrical white summit standing out. In Jules Verne's novel Journey to the Center of the Earth, the entrance to the centre of the Earth is set in this volcano's crater.",
    formation:
      "Snæfellsjökull lies on a secondary volcanic belt that runs oblique to the main rift zone. It was built up layer by layer by successive explosive and lava eruptions into a fairly symmetrical cone; its last eruption was about 1,800 years ago. Because of the altitude and latitude the summit snow never fully melts and has compacted into a small ice cap a few kilometres across, which has thinned markedly in recent decades.",
    observation:
      "From the air Snæfellsjökull is an isolated, symmetrical, ice-capped cone at the tip of the peninsula, with radial gullies on its slopes and several later small craters and lava flows. Around its foot is a ring of black lava field, scoria cones and moss-covered old lava reaching to a jagged sea cliff.",
    distinguish:
      "Snæfellsjökull and southern Iceland's Eyjafjallajökull and Katla are all ice-capped stratovolcanoes, but Snæfellsjökull is more symmetrical and \"more like the textbook picture of a volcano\", and it is far from the main rift zone and far less active. Its ice cap is also much smaller than those in the south.",
    concept:
      "Snæfellsjökull is a case study in a stratovolcano: more viscous magma gives eruptions that are both explosive and effusive, and the ejecta pile up in alternating layers of ash and lava into a fairly steep, symmetrical cone. To recognise a stratovolcano, look at whether it is tall and symmetrical, with fairly steep slopes, made of alternating fragmental and lava layers. A common misconception is to treat every volcano as this type — Iceland is in fact dominated by gently sloping fissure and shield volcanoes.",
    history:
      "The Snæfellsnes peninsula appears frequently in Iceland's saga literature, and the mountain has been regarded as a place of spiritual power, drawing mystics even in the 20th century. Snæfellsjökull National Park was established in 2001, the first national park in Iceland to include the coast.",
  },

  "askja": {
    // seeing sources: 湖深排名：冰岛国家自然历史研究所（Náttúrufræðistofnun Íslands）湖泊页，杰古沙龙约 248 米、厄斯丘湖约 220 米，杰古沙龙自 2009 年起为冰岛最深。级别 1，2026-09-09 核。**这是一条会被冰川退缩改写的排名**（known-errors C6-j），下一轮回来复核。
    //   https://www.natt.is/en/geology/water/lakes
    //   1965 / 1967 年 NASA 阿波罗宇航员在此接受地质训练核实无误（2 级）。备忘：阿斯基亚自 2021 年秋持续隆起，截至 2025-11 约 60 厘米、航空颜色码仍为绿——正文未做现状断言，本轮未写入。
    seeing:
      "Askja, in the Dyngjufjöll mountains of Iceland's central highlands, is a set of nested calderas. The most striking feature is Öskjuvatn, the lake formed by collapse after a large eruption in 1875 — about 220 m at its deepest, the deepest lake in Iceland until 2009 and now the second-deepest, after Jökulsárlón was deepened by glacier retreat — its water icy cold; beside it is a much smaller crater called Víti (\"Hell\"), holding a pool of warm, milky-blue water that visitors can climb down to bathe in. It is over a hundred kilometres from any settlement, one of the remotest places in Iceland.",
    formation:
      "Askja sits on Iceland's northern rift zone. Successive eruptions have emptied the magma chamber below, and the surface has collapsed repeatedly, nesting several calderas of different sizes. The 1875 eruption was a large rhyolitic explosion, whose pumice and ash blanketed the farming districts of north-east Iceland; after it, a block of ground dropped into the emptied magma chamber and filled with water to become Öskjuvatn. Askja also had a basaltic lava eruption in 1961.",
    observation:
      "From the air Askja is a ring-shaped depression surrounded by dark lava and pale pumice, with the near-circular, deep-blue Öskjuvatn in it and a small round pit — Víti — on its shore. Around it the Dyngjufjöll are steep dark rock walls. Beyond, an endless black volcanic desert (Ódáðahraun) stretches away, almost lifeless.",
    distinguish:
      "Askja resembles the rhyolitic calderas of Taupō and Rotorua, all formed by surface collapse after eruption; but Askja is smaller and \"fresher\", nests several generations of calderas, and is overprinted by later basaltic lava. Compared with Grímsvötn beneath Vatnajökull, Askja has no ice cap and its calderas are open and visible.",
    concept:
      "Askja is a case study in nested calderas: if a volcanic centre repeatedly goes through the cycle of \"magma chamber emptied — surface collapse\", it forms a set of calderas of different ages nested one inside another, like a set of concentric bowls. To recognise this, look for several arcuate collapse scarps nested together. A common misconception is to confuse a caldera with a large volcanic crater (the latter is built by ejecta and is far smaller).",
    history:
      "Askja's 1875 eruption and the crop failures that followed were an important push behind the large-scale emigration of Icelanders to North America (especially Canada) in the late 19th century. In 1965 and 1967, NASA twice brought Apollo astronauts to the Askja area for geology training in this Moon-like volcanic desert.",
  },

  "thingvellir": {
    // seeing sources: 扩张速率约 2 厘米/年（2 级）；UNESCO 2004 年列入、冰岛第一处世界遗产；1944-06-17 在此宣告共和国；「现存最古老的议会之一」已带「之一」限定，符合排名断言要写口径的规矩。2026-09-09 核，本轮无需改动。
    //   https://perlan.is/articles/tectonic-plates-iceland
    seeing:
      "Þingvellir (\"assembly plains\"), a short way east of Reykjavík, is a broad rift valley. It is both a geological wonder — you can walk between the fractures where the North American and Eurasian plates are being pulled apart — and Iceland's historic sacred site: from 930 CE the chieftains of Iceland met here each summer for the \"Alþingi\" assembly, one of the oldest surviving parliaments in the world. It is Iceland's first World Heritage Site.",
    formation:
      "Þingvellir sits astride the Mid-Atlantic Ridge. The two plates pull apart at about 2 cm a year, and the whole block of crust in between, losing support on both sides and softened by magmatic activity below, has subsided as a whole, forming a graben — parallel fault cliffs on either side with a stepped, dropped block in the middle. The Almannagjá on the west is the fault scarp along the western edge of the graben, tens of metres high and several kilometres long. New fissures keep opening on the valley floor and old lava is being pulled apart.",
    observation:
      "From the air Þingvellir is a lowland held between two roughly parallel, north-south fault cliffs, the lowland full of fissures parallel to the cliffs (some filled with crystal-clear groundwater), a river winding through it, and at the south end Þingvallavatn, Iceland's largest natural lake. The block as a whole is lower than the highland on either side and still slowly sinking.",
    distinguish:
      "Þingvellir is the same kind of structure as the East African Rift and the Rhine Graben — a graben (rift valley), all formed by crustal stretching and the central block dropping. The difference is that Þingvellir lies right on an active mid-ocean ridge, and that ridge has risen above the sea here, so you can see \"an ocean rifting apart\" directly on land.",
    concept:
      "Þingvellir is a case study in a graben / rift valley: when the crust is stretched by forces pulling in opposite directions, it breaks along a set of parallel normal faults, and the central block slides down the fault surfaces, forming a valley with steep walls, a flat floor, and ongoing subsidence. To recognise a graben, look at whether the two sides of the valley are parallel fault cliffs and whether the valley floor is full of tension fissures. A common misconception is to take a rift valley for a gorge cut down by a river.",
    history:
      "The Alþingi met in the open air at Þingvellir for nearly nine centuries (930–1798), passing laws, settling disputes and making major decisions here — for instance around the year 1000 Iceland voted here to adopt Christianity collectively. In 1944 Iceland formally declared its separation from Denmark and the founding of the republic at Þingvellir. It is a national park today.",
  },

  "vatnajokull": {
    // seeing sources: 冰川面积：瓦特纳冰原国家公园管理局与冰岛国家自然历史研究所，2023 年测得约 7500–7600 平方公里、约占冰岛 7%（原文「7700 / 8%」既偏大又无监测时点）。级别 1，2026-09-09 核。**冰川面积是持续变化量**（known-errors C6-j），下一轮回来刷新。
    //   https://www.vatnajokulsthjodgardur.is/en/melting-glaciers/vatnajokullglacier
    //   https://www.natt.is/en/geology/water/glaciers
    //   最高点华纳达尔斯赫努克峰 2110 米（2005 年官方测量 2109.6 米）核实无误；「按体积算欧洲最大冰帽」已带口径限定、与公园管理局自身表述一致，本轮保留（若把新地岛算作欧洲则另有说法，属地理归属的模糊地带）。2008 年设园、后扩展至约占冰岛 14%、2019 年 UNESCO「冰与火的动态自然」均核实无误。
    seeing:
      "Vatnajökull, in south-eastern Iceland, is the largest ice cap in Iceland and, by volume, the largest in Europe — about 7,500 to 7,600 km² as measured in 2023, covering roughly 7% of Iceland, nearly a kilometre thick at its thickest and still shrinking. It is not a small glacier on a mountain but a whole ice sheet lying on a plateau, sending dozens of outlet glaciers down all around. Hvannadalshnúkur, on its southern rim, is 2,110 m — the highest point in Iceland.",
    formation:
      "Vatnajökull exists because Iceland is at a high latitude and has heavy precipitation: the snow that falls on the plateau in winter does not melt off in summer, and year on year it accumulates and compacts into ice, which flows slowly downhill under its own weight. Beneath the ice cap are several active volcanoes (Grímsvötn, Bárðarbunga and others), whose geothermal heat and eruptions melt subglacial lakes and trigger glacial floods. In recent decades warming has thinned and shrunk Vatnajökull markedly, and its outlet-glacier snouts have generally retreated.",
    observation:
      "From the air Vatnajökull is a large white, slightly domed ice sheet, its surface streaked with blue meltwater channels and arcuate crevasses; dozens of outlet glaciers reach out like fingers into the surrounding black valleys and plains, with grey-green proglacial lakes and black outwash gravel plains often in front of them. Where the subglacial volcanoes lie on the southern part, the ice surface shows slightly depressed circular areas.",
    distinguish:
      "Vatnajökull differs from the \"valley glaciers\" of the Alps and Himalaya that flow along mountain valleys: it is an \"ice cap / ice sheet\" lying on a plateau and flowing outward from the centre, on a far larger scale. Compared with the continental ice sheets of Greenland and Antarctica it is much smaller, and it has active volcanoes beneath it — a place where \"ice and fire\" are in direct contact.",
    concept:
      "Vatnajökull is a case study in an ice cap: when snow accumulates faster than it melts over a relatively flat highland, the ice piles up into a dome, thick in the centre and thin at the edges, flowing outward from the centre in all directions under gravity, with little relation to the underlying terrain. To recognise an ice cap, look at whether it covers the underlying terrain as one body and flows radially from the centre. A common misconception is to conflate an ice cap with a valley glacier.",
    history:
      "For centuries, glacial floods from eruptions beneath Vatnajökull repeatedly destroyed farmland and transport routes on the south coast — the reason the last section of Iceland's Ring Road (across Skeiðarársandur) was only completed in 1974. Vatnajökull National Park was established in 2008 and later expanded to become the largest national park in Europe (about 14% of Iceland); in 2019 it was inscribed as a World Heritage Site for its \"dynamic nature of fire and ice\".",
  },

  "langjokull": {
    // seeing sources: 冰川面积：冰岛国家自然历史研究所冰川页，2023 年测得约 820 平方公里（原文「约 900」偏大约 9%、且无监测时点）。级别 1，2026-09-09 核。持续变化量，下一轮回来刷新。
    //   https://www.natt.is/en/geology/water/glaciers
    seeing:
      "Langjökull (\"long glacier\"), in Iceland's western highlands, is the second-largest ice cap in Iceland, about 820 km² as measured in 2023, fairly gentle and elongated in form. It is not far from Reykjavík or the \"Golden Circle\" attractions. Part of its meltwater feeds, through underground flow, Iceland's largest natural lake Þingvallavatn, and part joins the Hvítá river and finally pours over Gullfoss.",
    formation:
      "Langjökull, like other ice caps, formed from year-round snow on the western highlands compacting and flowing slowly outward. Beneath it are mainly basaltic volcanic rocks and several fissure zones, with subglacial eruptions in the past. Langjökull is thinner than Vatnajökull, slightly lower in altitude, and more exposed to a maritime climate, so it is especially sensitive to warming — at the present melt rate, some studies estimate it could largely disappear within about a century and a half.",
    observation:
      "From the air Langjökull is a north-south, smooth-edged white ice sheet on the western highlands, its surface relatively flat, with crevasses and meltwater channels only near the edges. On its eastern side lie two geothermally active, brightly coloured volcanic areas (Kerlingarfjöll and Hveravellir). To the south, the Hvítá flows out from the ice cap, crosses grassland and races toward Gullfoss.",
    distinguish:
      "Langjökull and Vatnajökull are both ice caps, but Vatnajökull is far thicker and its volcanoes far more active; Langjökull is thinner, flatter and retreating faster, and is regarded as the \"most vulnerable\" of Iceland's ice caps to climate change. It is similar in size to Hofsjökull, but Hofsjökull hides a large caldera beneath.",
    concept:
      "Langjökull is a case study in an ice cap's sensitivity to climate: a thin, not very high ice cap, once mean annual temperature rises a little, has summer melt exceed winter accumulation, and it shrinks continuously and at an accelerating rate until it disappears. To judge an ice cap's \"vulnerability\", look mainly at its thickness and surface altitude — the thinner and lower, the more at risk. A common misconception is that all glaciers melt at about the same rate.",
    history:
      "The area around Langjökull was historically summer grazing and a route across the highlands. From the 20th century the ice cap has been a site for snowmobiling and ice-cave tourism — in 2015 an artificial ice tunnel was cut into the ice cap for visitors. The ice cap's meltwater, recharging Þingvallavatn through an underground aquifer, is one reason for that lake's exceptionally clear water.",
  },

  "hofsjokull": {
    // seeing sources: 冰川面积：冰岛国家自然历史研究所冰川页，2023 年测得约 795 平方公里。级别 1，2026-09-09 核。持续变化量，下一轮回来刷新。
    //   https://www.natt.is/en/geology/water/glaciers
    seeing:
      "Hofsjökull, right in the centre of Iceland, is the third-largest ice cap in Iceland, about 795 km² as measured in 2023, shield-shaped in form. It is not as famous as Vatnajökull, but it is a key place: Iceland's longest river, the Þjórsá, and another large river, the Blanda, both rise on this ice cap. It lies roughly at the geographic centre of Iceland.",
    // formation sources: 破火山口：直径约 6–7 公里、深约 600 米（雷达测冰数据）；史密森尼全球火山活动计划（GVP）记载中央破火山口本体无确认的全新世喷发，全新世熔岩喷发发生在周边侧翼裂隙带。经学术文献转引，等同级别 2，2026-09-09 核。「活动破火山口」这个说法已删。
    //   https://www.sciencedirect.com/science/article/abs/pii/S0377027321001062
    formation:
      "Hofsjökull sits on a shield volcano, with a caldera about 7 km across and some 600 m deep hidden beneath the ice — flank fissures around it erupted lava during the Holocene, but the caldera itself has no confirmed Holocene eruption. The ice cap itself formed from highland snow compacting and flowing outward from the centre. Because there is volcanic geothermal heat below, the base of the ice cap is not frozen everywhere and there is local meltwater; there have also been subglacial eruptions and small glacial floods in the past. The ice cap has likewise been retreating in recent decades.",
    observation:
      "From the air Hofsjökull is a near-circular, smooth-edged white ice sheet in Iceland's interior, surrounded by an endless grey-black volcanic highland desert and a few oasis-like patches of grassland (such as the old highland pastures around Nýidalur and Kerlingarfjöll). Several glacial rivers radiate out from the edge of the ice cap, and the one running south is the source of the Þjórsá.",
    // distinguish sources: 同 formation 段的来源。**这一条是「同一条口径问题在一个条目里几乎总是出现两次」的又一例** —— formation 与 distinguish 各写了一次「活动破火山口」，修的时候要把整个条目搜一遍。
    distinguish:
      "Hofsjökull and Langjökull are similar in size and both on the highlands, but Hofsjökull is a \"shield volcano plus ice cap\" combination with a caldera beneath; Langjökull is underlain mainly by fissure zones. Compared with Vatnajökull, Hofsjökull is much smaller and stands more in isolation in the middle of the highland desert.",
    concept:
      "Hofsjökull is a case study in a volcano beneath an ice cap: if a shield volcano is covered by an ice cap, the volcano's circular outline and the position of its caldera can often be inferred from slight depressions and crevasse patterns in the ice surface, and volcanic activity shows itself through subglacial meltwater and sudden floods. To recognise this system, look at whether the ice cap is an unusually regular circle and whether its edge shows signs of periodic drainage. A common misconception is that the ground beneath an ice cap must be an ordinary rock plateau.",
    history:
      "The highlands around Hofsjökull are traditional Icelandic summer pastures and the site of routes across the interior, recorded in the old sagas. After rising here, the Þjórsá is heavily used downstream for hydropower — several of Iceland's largest hydro stations are in the Þjórsá basin. Iceland's hydrological service maintains long-term mass-balance monitoring points on Hofsjökull.",
  },

  "myrdalsjokull": {
    // seeing sources: 米尔达斯冰盖面积：1980 年 595 km² → 2016 年 540 km² → **2019 年 520 km²**
    //   （Hannesdóttir 等 2020 的测量序列，经 en.wikipedia 转引，3 级）；
    //   卡特拉 UNESCO 地质公园官方页给现势面积 535 km²，
    //   https://www.katlageopark.com/geosites/mainly-geology/myrdalsjoekull/（2 级，2026-09-08 核）。
    //   **冰川面积是逐年缩的量**，和人口一样属于「不带年份等于没说」的那一类 ——
    //   原来写的 590 km² 是四十多年前的值。
    //   卡特拉破火山口直径约 10 km 属实（若按当前冰面 700 m 等高线量则接近 20 km，是另一个口径）。
    seeing:
      "Mýrdalsjökull, on Iceland's south coast, is the fourth-largest ice cap in Iceland, about 520 km² as measured in 2019 and still shrinking. Its key \"identity\" is that directly beneath it lies the Katla volcano's large caldera, about 10 km across. The Sólheimajökull outlet glacier flowing from its south-western edge is one of the easiest glaciers in Iceland to reach and one of the most used for glacier walks.",
    formation:
      "Mýrdalsjökull sits on a volcano cut through by a caldera. The ice cap formed from the abundant snow on the south-coast highlands compacting and flowing outward; being at low latitude, near the sea and with heavy precipitation, it is one of Iceland's ice caps with the most vigorous accumulation and melt. The Katla volcano below gives the base of the ice cap geothermal heat, and an eruption would rapidly melt ice and trigger a glacial flood. Sólheimajökull has retreated hundreds of metres in recent decades, its snout forming a steadily growing proglacial lake.",
    observation:
      "From the air Mýrdalsjökull is a white ice sheet on the south coast, right next to the smaller Eyjafjallajökull ice cap to the west (a snow-linked saddle between them). Several grey-black outlet glaciers (their surfaces covered in volcanic ash) reach out from its southern edge, with black glacial-flood plains (Mýrdalssandur, Sólheimasandur) in front of them.",
    distinguish:
      "Mýrdalsjökull and inland Vatnajökull to the north both cover active volcanoes, but Mýrdalsjökull is small, coastal and at low latitude, with fast accumulation and melt; and the Katla beneath it directly threatens south-coast communities. Sólheimajökull and Skeiðarárjökull are both outlet glaciers, but Sólheimajökull is smaller and more accessible.",
    concept:
      "Mýrdalsjökull is a case study in an outlet glacier: an ice cap \"squeezes out\" faster-flowing tongues from low points on its edge, along hollows in the underlying terrain, like water overflowing a notch in the rim of a basin. The snout positions of these outlet glaciers respond most sensitively to climate change and are a focus of glacier-retreat monitoring. A common misconception is to treat an outlet glacier as an independent valley glacier.",
    history:
      "The glacial floods from Katla eruptions are recorded in detail in Iceland's sagas and parish records, and have repeatedly changed the landforms and settlement pattern of the south coast. There is long-term monitoring of mass balance and snout positions on Mýrdalsjökull. Because it is so accessible, Sólheimajökull is Iceland's most visible \"showcase window\" of glacier retreat and a frequent site for climate education.",
  },

  "skeidararsandur": {
    // seeing sources: 外冲平原面积约 1000 平方公里（可查范围 1000–1300，属区间内的常见估值，3 级）；1996 年 Gjálp 冰下湖溃决洪峰约 5 万立方米每秒（学术文献 45,000–53,000，等同级别 2）；环岛公路最后一段 1974 年通车。2026-09-09 核，本轮无需改动。
    //   https://www.lpi.usra.edu/meetings/polar2000/pdf/4021.pdf
    seeing:
      "Skeiðarársandur, on Iceland's south-east coast, lies between the Skeiðarárjökull outlet glacier of Vatnajökull and the sea — the largest glacial outwash plain (Icelandic sandur, \"sand plain\") in the world, about 1,000 km². It is an almost perfectly flat, vegetation-free black gravel desert cut by countless braided channels — a long straight section of Iceland's Ring Road runs right across it.",
    formation:
      "Skeiðarársandur was \"built up\" by glacial rivers. The base of the glacier grinds up huge amounts of rock, and the meltwater, laden with this gravel, sand and mud, comes out of the mountains; where the slope suddenly flattens and the flow splits into many strands (braided), its carrying capacity drops and the sediment is spread out layer by layer, filling the space between the glacier snout and the sea into a large plain. Besides the everyday glacial rivers, the glacial flood from Grímsvötn every few years brings a sudden, enormous pulse of water and sediment that can reshape the channels of the whole sandur in one event.",
    observation:
      "From the air Skeiðarársandur is a vast pale-grey-to-black, geometrically flat gravel expanse between the ice cap and the sea, carrying a constantly shifting braided river network, bright silver channels weaving and splitting across the dark gravel. To the north is the snout of Skeiðarárjökull and the moraine ridge in front of it, and to the south a dead-straight coastline.",
    distinguish:
      "Skeiðarársandur is similar to an ordinary river delta or alluvial fan, all formed where flow slows and drops its sediment, but the sandur's source is a glacier, the climate is cold, and it is overprinted by periodic glacial floods, so it is flatter, more \"barren\" and its channels shift more violently. Compared with a gravel plain like the Canterbury Plains, built during the ice ages, Skeiðarársandur is forming right now, in front of your eyes.",
    concept:
      "Skeiðarársandur is a case study in an outwash plain (sandur) and a braided river: when a river carrying a lot of coarse sediment has its slope suddenly flatten, it splits into many shallow, wide, constantly migrating, interweaving channels (braided), and spreads its sediment over a large area, forming a flat gravel plain. To recognise a braided river, look at whether the channels are many-stranded, full of sandbars and frequently shifting. A common misconception is to take the sandbars of a braided river for stable islands.",
    history:
      "In 1996, the meltwater from the Gjálp fissure eruption beside Grímsvötn gathered and then burst out suddenly, and an exceptional glacial flood (peak flow about 50,000 cubic metres per second) swept across Skeiðarársandur, destroying several large bridges on the Ring Road; the twisted girders are still kept by the roadside as a monument. Iceland then reinforced the bridges and designed them to \"be washed away rather than dam up\". Deliberately sown sand-stabilising grassland has been slowly spreading over the sandur in recent years.",
  },

  "jokulsarlon": {
    seeing:
      "Jökulsárlón, on Iceland's south-east coast at the southern edge of Vatnajökull, is one of the most famous natural attractions in Iceland: a lake full of floating icebergs, which calve from the Breiðamerkurjökull glacier behind, drift slowly toward the outlet, and some of which are washed back to shore by the waves and stranded on the black sand beach (\"Diamond Beach\").",
    formation:
      "This lake was \"given up\" by a retreating glacier. Before the 1930s, Breiðamerkurjökull reached almost to the sea, and there was no lake. As the climate warmed, the glacier retreated fast, and the deep trough its snout had gouged (below sea level) gradually filled with meltwater and seawater, forming a proglacial lake that keeps growing — it is now the deepest lake in Iceland, about 248 m at its deepest. A short channel connects the lake to the sea, and seawater enters on the flood tide.",
    observation:
      "From the air Jökulsárlón is a deep-blue lake at the edge of the ice cap, dotted with white and pale-blue ice blocks, the crevassed snout of the glacier on its inner side constantly calving ice into it; on the outer side a narrow channel crosses the black beach to the sea, with clear ice blocks washed ashore scattered on the black sand on either side. Beside it is a smaller, more \"clogged\" sister lake (Fjallsárlón).",
    distinguish:
      "Jökulsárlón and the proglacial lake at the snout of the Tasman Glacier in New Zealand are the same kind of \"proglacial lake\", both formed by meltwater filling an over-deepened trough after the glacier retreated. The difference is that Jökulsárlón connects directly to the sea, with tides and seals, and its icebergs can drift all the way out to sea.",
    concept:
      "Jökulsárlón is a case study in a proglacial lake accelerating glacier retreat: when a glacier snout retreats into a trough below the sea or lake surface, water ponds in front of it; the lake water (especially warmer water that can circulate) constantly undercuts the snout and buoys it up, making it more likely to break off, so the glacier retreats faster than it would on land alone. To recognise this positive feedback, look at whether the glacier snout is \"soaking\" in a lake of its own meltwater. A common misconception is that a lake makes a glacier \"more stable\".",
    // history sources: 深度 248 米：冰岛国家自然历史研究所（natt.is，级别 1），与阿斯基亚条目本轮已改好的口径一致。**注意一处来源冲突**：英文维基引 2009 年 Morgunblaðið 报道称 284 米，与官方的 248 米差 36 米 —— 这不是取整误差，是两个来源互相矛盾；有一级来源时以一级为准，本轮维持 248。
    //   https://www.natt.is/en/geology/water/lakes
    //   面积：**没有查到冰岛官方带年份的数字**，二三级来源在 18–27 平方公里之间分歧，正文已改成区间 + 「还在变大」，不假装精确（known-errors C6-j）。1933/1934 年成湖时间与官方一致。2026-09-09 核。
    history:
      "Jökulsárlón went from nothing to its present size in only a few decades — one of the most vivid records of rapid glacier retreat in Iceland. Around 1934 the site was still largely land; today the lake keeps growing — different-year surveys put it at roughly 20 to 25 km², and it expands further as Breiðamerkurjökull retreats. Its distinctive scenery has made it a filming location for several films. In recent years Iceland has been debating how to protect the section of coast road leading to the lagoon — the waves are steadily eroding the road base along the outlet.",
  },

  "laki": {
    seeing:
      "Laki (Icelandic: Lakagígar), in Iceland's southern interior, is a fissure about 25 km long made of around 130 craters strung together. It is now a volcanic landscape covered in grey-green moss, looking almost gently peaceful, but it is the site of one of the largest basaltic lava eruptions in recorded history on Earth — the 1783–84 eruption (the \"Skaftá Fires\") lasted about eight months and produced about 14–15 cubic kilometres of lava.",
    formation:
      "The Laki fissure lies on the rift zone between the Grímsvötn and Katla volcanic systems. In 1783 basaltic magma rose along this fissure in segments, opening vent after vent, forming a long line of scoria cones and lava fountains, the lava filling two river valleys downstream and covering about 600 km². The eruption's real lethality was in its gases: the huge amounts of sulphur dioxide and fluorine released formed a poisonous haze over Iceland, and fluorine-bearing ash landing on pastures poisoned the livestock.",
    observation:
      "From the air Laki is a dead-straight \"seam\" of dozens of red-brown-to-black scoria cones joined end to end, running obliquely across the southern highlands of Iceland, flanked by the lava field spread out in 1783 (\"Eldhraun\") and now covered in thick moss. A mountain called Laki, in the middle of the fissure, is split in two by it.",
    distinguish:
      "Laki, like Hekla and Fagradalsfjall, is a fissure eruption, but the scale, duration and gas output of this one far exceeded any eruption of modern Iceland; it is closer to a small-scale re-run of an ancient large \"flood basalt\" event. Compared with the explosive Eyjafjallajökull, Laki erupted lava and gas, with almost no far-travelling fine ash.",
    concept:
      "Laki is a case study in the lethality of volcanic gas: even if a lava eruption is far from people and the lava itself does not reach the villages, the sulphur dioxide it releases (forming acid haze that damages lungs and plants) and the fluorine (concentrating on the grass and causing fluorosis in livestock) can bring about widespread agricultural collapse and famine. To assess this kind of risk, look at whether the eruption is long-lasting, basaltic and high in gas output. A common misconception is to focus only on lava and ash and ignore the gas.",
    // history sources: 牲畜损失按畜种：牛约 50%、马约 75–76%、羊约 76–79%（可追溯至 Thordarson & Self 2003, JGR）；人口损失约 19%（1783 年初 49,609 → 1786 年初 40,381），2024 年 NHESS 同行评审论文，级别 1，2026-09-09 核。**原文的「约一半的牲畜」是把三个差别很大的数合成了一个，方向没错但明显低估。**
    //   https://nhess.copernicus.org/articles/24/2971/2024/
    //   熔岩量 14.7±1.0 至 15.1 立方公里、裂隙长约 25 公里、约 130 个火山口：多方学术来源交叉确认，正文的「14—15 立方公里」落在区间内，不改。
    history:
      "The 1783–84 Laki eruption caused the \"Mist Hardships\" (Móðuharðindin) in Iceland: the poisonous haze and the severe cold that followed killed about half of Iceland's cattle and roughly three-quarters of its horses and sheep, and the ensuing famine killed roughly a fifth of Iceland's population — the worst natural disaster in Iceland's history. The sulphur haze from the eruption also caused abnormal weather and crop failures in many parts of the Northern Hemisphere that year. Today Lakagígar is within Vatnajökull National Park, its moss landscape extremely fragile, with access only on marked paths.",
  },

  "gullfoss": {
    // seeing sources: 两级落差 11 米 + 21 米（多方一致，3 级）。2026-09-09 核，本轮无需改动。
    seeing:
      "Gullfoss (\"golden falls\"), in south-western Iceland, is one of the three big stops of the \"Golden Circle\" day trip. Here the Hvítá river first drops a step of about 11 m, then turns at a right angle and drops about 21 m more, plunging into a narrow steep gorge in a cloud of spray, with rainbows common on sunny days. The \"golden\" of the name refers to the yellow-brown tone the turbid glacial water takes in sunlight.",
    formation:
      "The gorge below Gullfoss (Gullfossgljúfur) was not cut slowly by the Hvítá over millions of years, but scoured out in a short time by large glacial floods at the end of the ice age. The flood cut a step in the hard basalt; the rock below the step was undercut by the flow and by cavitation and collapsed, so the step retreated steadily upstream — today's waterfall is the current position of that retreating step, and the gorge is the \"trail\" it has left behind.",
    observation:
      "From the air Gullfoss is the Hvítá suddenly \"disappearing\", on a gentle grassy plain, into a winding deep gorge — from upstream you can barely see the falls themselves, only the river turning a corner, throwing up spray and vanishing. The gorge walls are dark basalt in horizontal beds interlayered with volcanic ash, and the gorge floor is churning brown rapids.",
    distinguish:
      "Gullfoss and Dettifoss are both large Icelandic waterfalls, both on glacial rivers, and both with gorges shaped by glacial floods, but Gullfoss has a \"two-step plus right-angle turn plus plunge into a gorge\" form, while Dettifoss is a single wide step spanning the whole river. Like Niagara Falls, both waterfalls are retreating upstream along their rivers.",
    concept:
      "Gullfoss is a case study in the upstream retreat of a waterfall step: at a step the flow concentrates its energy, undercutting the rock at the foot, and the rock above loses support and collapses, so the step (waterfall) moves upstream year by year, leaving a gorge behind it. To recognise this kind of waterfall, look at whether it is immediately followed downstream by a deep narrow gorge whose width matches that of the falls. A common misconception is that a waterfall's position is fixed.",
    history:
      "In the early 20th century foreign investors wanted to build a hydro station on Gullfoss. Sigríður Tómasdóttir, the daughter of the farmer who rented the land the falls are on, campaigned against it for years — reportedly walking to Reykjavík on foot and even threatening to throw herself into the falls. The scheme was never carried out, and she is remembered as one of Iceland's earliest environmentalists, with a memorial stone by the falls. Gullfoss is a protected natural monument today.",
  },

  "dettifoss": {
    // seeing sources: 宽约 100 米、落差 44–45 米、平均流量 193 立方米每秒；瓦特纳冰原国家公园官方称其为「欧洲最强劲的瀑布」（级别 1）。**正文的「常被列为欧洲水流最强劲的瀑布之一」比官方原话更保守，本轮判定不改** —— 保守的限定语不需要为了贴近官方而放宽。2026-09-09 核。
    //   https://www.vatnajokulsthjodgardur.is/en/areas/jokulsargljufur/dettifoss
    seeing:
      "Dettifoss, in north-eastern Iceland on the Jökulsá á Fjöllum river, is about 100 m wide with a drop of about 44 m. By average flow it is the largest waterfall in Iceland, and it is often listed as one of the most powerful in Europe. Its water comes from the Vatnajökull ice cap, carrying large amounts of fine glacial silt, so it is grey-white, and its roar and the spray it throws up can be felt kilometres away.",
    formation:
      "Dettifoss is at a large step in the middle of Jökulsárgljúfur canyon. Like Gullfoss, this step was scoured and undercut in hard basalt by repeated catastrophic Holocene glacial floods (from volcanic eruptions beneath Vatnajökull), and it is retreating upstream. Selfoss is a short way upstream and Hafragilsfoss a short way downstream — the three are the same retreating step showing on different rock layers.",
    observation:
      "From the air Dettifoss is a grey-white curtain of water spanning the whole river across a black basalt desert, plunging into the roughly 100 m deep, sheer-walled Jökulsárgljúfur below; the canyon runs on north from here all the way to the sea. Both banks are almost vegetation-free — black columnar basalt and rock surfaces kept permanently wet by the spray.",
    distinguish:
      "Dettifoss versus Gullfoss: Dettifoss is in the north-east, its water \"wilder\" (grey-white, desolate, few visitor facilities), a single wide step; Gullfoss is in the south-west, a two-step drop with a road and visitor centre beside it. Dettifoss's flow at high water is enormous, but as its drop is not especially high, its \"power\" is mainly in the volume.",
    concept:
      "Dettifoss is a case study in flow versus drop: to measure how \"powerful\" (how much power) a waterfall is, you have to consider both the flow of water and the height it falls — Dettifoss has a moderate drop but a huge flow, so its total energy is among the highest in Europe; some waterfalls are very tall but carry little water, spectacular to look at but not high in \"power\". A common misconception is to compare waterfalls by height alone.",
    history:
      "The Jökulsárgljúfur canyon and the Dettifoss area were designated Jökulsárgljúfur National Park in 1973, absorbed into Vatnajökull National Park in 2008. Roads here were built late and are rough, and this has long been one of the more pristine, less developed parts of Iceland. Because of its desolate character, Dettifoss was used as the opening location of the film Prometheus.",
  },

  "jokulsargljufur": {
    // seeing sources: 峡谷长约 25 公里、深达约 100 米；阿斯比吉长约 3.5 公里、三面百米绝壁（多方交叉确认，3 级）。2026-09-09 核，本轮无需改动。
    seeing:
      "Jökulsárgljúfur (\"canyon of the glacial river\"), in north-eastern Iceland, is a large canyon cut by the Jökulsá á Fjöllum river, about 25 km long and up to about 100 m deep. At the northern end is a place called Ásbyrgi, which is especially strange: a horseshoe-shaped hollow about 3.5 km long, walled on three sides by 100 m cliffs, its floor covered in birch woodland — as if a bite had been taken out of the plateau.",
    formation:
      "Jökulsárgljúfur was not cut bit by bit by the river over tens of thousands of years, but mainly scoured out within a few days by several catastrophic Holocene glacial floods (triggered by ice melted in eruptions beneath Vatnajökull). Each flood's enormous flow and carrying power prised whole blocks of columnar basalt out of the riverbed and swept them away, driving the step violently upstream. Ásbyrgi is generally thought to be a \"temporary\" side channel that one or two of these floods cut beside the main channel; when the flood passed and the water fell, it left this dead-end horseshoe canyon.",
    observation:
      "From the air Jökulsárgljúfur is a deep, straight, sheer-walled slash across a black lava plateau, with the grey-white glacial river tumbling along the floor past several waterfalls (Dettifoss, Selfoss, Hafragilsfoss). At the northern end Ásbyrgi is an isolated, three-sided, greenery-filled horseshoe pit, in sharp contrast with the bare plateau around it.",
    distinguish:
      "Jökulsárgljúfur is similar in origin to the Channeled Scablands of eastern Washington State in the USA — both scoured fast in hard lava by catastrophic ice-age or post-glacial floods rather than by a steady river. Compared with a canyon eroded by an ordinary river, it formed in far less time and its step retreated far faster.",
    concept:
      "Jökulsárgljúfur is a case study in catastrophic-flood landforms: a flood far larger than the everyday flow has an erosive power that does not rise linearly with discharge but is amplified sharply — it can prise up and move boulders an ordinary river could never budge, cutting deep canyons, drilling giant potholes and pushing a step far upstream in a very short time. To recognise this landform, look at whether the scale of the canyon is \"out of proportion\" to the flow in the river now. A common misconception is to explain every canyon by the present river.",
    history:
      "In Norse mythology, Ásbyrgi is the hoofprint left by one hoof of Sleipnir, Odin's eight-legged horse. Icelandic folklore says the \"hidden people\" (huldufólk) live here. A national park was established here in 1973, absorbed into Vatnajökull National Park in 2008. The birch-and-rowan woodland on the floor of Ásbyrgi is a rare stretch of continuous forest in Iceland and is carefully protected.",
  },

  "skogafoss": {
    // seeing sources: 高 60 米、宽 25 米（多方一致，3 级）。2026-09-09 核，本轮无需改动。
    seeing:
      "Skógafoss, on Iceland's south coast, is where the Skógá river drops straight over a cliff about 60 m high and 25 m wide, with a big flow and heavy spray, and there is almost always a rainbow (sometimes a double) on sunny days. What makes it special is not the waterfall itself but the cliff — it is the former coastline.",
    formation:
      "In the ice age the weight of the ice sheet pressed the Icelandic crust down, and the sea reached several kilometres inland of the present coast, cutting a sea cliff along the edge of the low hills of the south. After the ice melted, the land, relieved of its load, slowly rebounded and rose; at the same time glacial rivers kept dumping sediment in front of the cliff, building the large flat outwash plains. Together these pushed the coastline several kilometres south, leaving the old sea cliff \"stranded\" inland — Skógafoss is where the Skógá river drops over this old sea cliff. A string of other waterfalls (Seljalandsfoss and others) drop over the same cliff.",
    observation:
      "From the air, southern Iceland has a roughly east-west cliff running continuously for tens of kilometres, separating the highland to the north from the flat farmland and outwash plains to the south. Skógafoss is the highest-flow point on this cliff, and the Skógá river above it has about 20 more small falls upstream; below the cliff is green pasture and black-sand beach, with the coastline several kilometres away.",
    distinguish:
      "Skógafoss is different from Gullfoss and Dettifoss: those are glacial rivers on lava plateaus, where a flood cut a step and the step keeps retreating upstream; Skógafoss's step is a largely fixed old sea cliff, formed by sea-level change and land uplift, not by headward erosion.",
    concept:
      "The old sea cliff at Skógafoss is a case study in post-glacial rebound (isostatic adjustment): a heavy ice sheet presses the crust down, and after the ice melts the crust, freed of its load, rebounds and rises slowly, like a released spring, so former coastlines, beaches and sea cliffs are lifted above the present sea, or even moved inland. To recognise this landform, look for a cliff or terrace inland that runs parallel to the coast but lies far from the sea. A common misconception is to take an old sea cliff for a fault scarp or a river-cut cliff.",
    history:
      "Legend says the first Viking to settle at Skógar hid a chest of treasure behind the waterfall. Skógar is an old settlement on Iceland's south coast, with an open-air folk museum. The Fimmvörðuháls hiking trail, which starts beside the falls, crosses the pass between the Eyjafjallajökull and Mýrdalsjökull ice caps — the first-phase fissure of the 2010 Eyjafjallajökull eruption opened near this trail.",
  },

  "haukadalur-geysir": {
    // seeing sources: 大盖歇尔（Geysir 本体）自 2000 年地震后基本休眠；斯特罗库尔每 5–10 分钟一次、高 15–20 米（多方一致，3 级）。**这两者常被混为一谈，正文分得很清楚，本轮专门复核过。** 2026-09-09 核，无需改动。
    seeing:
      "Haukadalur is a small geothermally active valley in south-western Iceland, one of the \"Golden Circle\" attractions. In the valley is the \"Great Geysir\" — the English word \"geyser\" comes from its name (from the Old Norse geysa, \"to gush\"). The Great Geysir is now largely dormant, occasionally active after earthquakes; the one that actually erupts regularly, every 5 to 10 minutes, sending a column of water 15–20 m up, is a spring beside it called Strokkur (\"the churn\").",
    formation:
      "Magma or hot rock at depth heats the deep groundwater. In a geyser's plumbing, the water at the bottom, though already above the surface boiling point, cannot boil for the moment because of the pressure of the water column above it (superheated). When the bottom water finally begins to vaporise, the steam bubbles push the water above them up, which reduces the pressure, so the whole column boils violently almost at once and erupts water and steam. After the eruption the pressure recovers, the conduit refills and reheats, and the cycle repeats. The erupted water is rich in silica, which deposits as pale sinter terraces around the vent.",
    observation:
      "From the air Haukadalur is an area of pale, steaming ground dotted with round, silica-rimmed pools of turquoise hot water, plus boiling mud pots and steam vents. Strokkur's vent periodically first swells into a blue dome of water, then \"pops\" open into a white column. Around it are green grassy slopes and a small river.",
    distinguish:
      "A geyser differs from an ordinary hot spring or boiling spring in being \"intermittent\" — it needs a particular underground plumbing geometry that periodically builds up pressure and then suddenly releases it. There are not many places in the world with active geysers (Iceland, Yellowstone in the USA, New Zealand, Chile and a few others), all in volcanic areas with very strong geothermal anomalies and abundant groundwater.",
    concept:
      "Strokkur is a case study in the geyser mechanism: the key is \"superheating plus sudden depressurisation\" — water at depth is held from boiling by pressure, and once a trigger drops the pressure at the top sharply, a large amount of superheated water below flashes to steam in an instant, blasting the water column out of the ground. To recognise a geyser, look at whether it erupts water in regular, periodic bursts rather than steaming continuously. A common misconception is that a geyser erupts all the time.",
    history:
      "The Great Geysir's eruptions have centuries of record in Iceland, and its activity has risen and fallen with nearby earthquakes — in some years it reached 70–80 m, in others it did nothing. In the 19th century soap powder was thrown into it to force eruptions for tourists, later banned. Strokkur resumed regular eruptions after its vent was cleared out in 1963.",
  },

  "krafla": {
    // seeing sources: 克拉夫拉之火 1975–1984 共九幕、伴 20 次岩墙侵入；维提火口 1724-05-17 蒸汽爆炸形成；米湖之火 1724–1729（学术文献交叉确认，级别 1–2）。2026-09-09 核，本轮无需改动。
    seeing:
      "Krafla, in north-eastern Iceland east of Lake Mývatn, is a caldera about 10 km across with a fissure swarm running through it. It is not high and its outline is not obvious, but it is very famous in geology: from 1975 to 1984 a sequence of nine \"rifting-eruption\" episodes happened here (the \"Krafla Fires\"), the ground pulling apart along the fissure swarm a total of several metres — a classic place to observe \"plates in the act of separating\".",
    formation:
      "Krafla sits right on the Mid-Atlantic Ridge. Between 1975 and 1984, magma from depth repeatedly flowed into the magma chamber beneath the caldera and then injected sideways along the fissure swarm, like inserting sheets of \"dike\" into the ground — each injection pushed the ground apart by tens of centimetres to over a metre, while the centre first bulged up and then subsided, and several times the magma broke through the surface and erupted as lava. The whole process was recorded by dense seismometers, distance measurement and levelling, making it a textbook case of rift spreading. The caldera also contains \"Víti\", a crater lake formed by a steam explosion in 1724.",
    observation:
      "From the air Krafla is a gently rolling volcanic area east of Lake Mývatn, covered in black fresh lava flows and pale pumice, with ground fissures, fault scarps and scoria cones parallel to the fissure swarm arranged in a north-south belt. In the caldera is Víti, a round green crater lake, next to a steaming geothermal field and a geothermal power station. The 1975–84 lava flows are still clearly visible on the surface.",
    distinguish:
      "Krafla and Þingvellir are both on the Mid-Atlantic Ridge and both show plate rifting, but Þingvellir is mainly the large-scale graben landform (one big rift valley), while Krafla shows the \"dynamic process\" of rifting — dike intrusion, ground pulling apart, periodic eruption. Compared with a caldera like Askja, Krafla's rifting character is more prominent.",
    concept:
      "The Krafla Fires are a case study in a rifting episode: at a divergent plate boundary, spreading is not steady and continuous but \"held back\" for long periods and then released in a burst over a few years through a series of dike intrusions and eruptions — in one episode the ground can suddenly pull apart by several metres, then be quiet for decades or centuries. To recognise this activity, look at whether the ground fissures are fresh, in parallel sets, and accompanied by dike-like magma intrusion. A common misconception is that plates move at a steady rate every year.",
    history:
      "The \"Mývatn Fires\" of 1724–1729 destroyed farms nearby. In 1975, just as the Krafla geothermal power station began drilling, the \"Krafla Fires\" began, and drilling and eruptions went on at the same time, with the project repeatedly disrupted. This complete observational dataset was later widely used to build physical models of dike intrusion and rift spreading. The Krafla geothermal power station is still operating today, and the nearby Víti crater and lava fields are a popular hiking area.",
  },

  "myvatn": {
    // seeing sources: 鸭 / 水鸟：冰岛环境署官方原话是「more species of duck are said to live there than in any other place on Earth」——**对象是鸭不是水鸟、范围是全世界不是欧洲、语气是「据说」不是断言**。原文三处都改动了，已按官方原话还原。级别 1，2026-09-09 核。
    //   https://ust.is/english/visiting-iceland/protected-areas/myvatn-and-laxa/about-myvatn/
    //   **这一条的形状值得记**：不是把数字写错，而是把一句**带保留的、窄口径的**官方表述，改写成了一句**断言式的、宽口径的**话 —— 每一步都只放宽一点点，合起来就成了另一个说法。
    //   平均水深 2.5 米、面积约 37 平方公里（同一官方页，级别 1）；硅藻土开采 1964–2004 年、1974 年《米湖-拉克斯河保护法》（2004 年被新法取代）核实无误。
    seeing:
      "Mývatn (Icelandic for \"midge lake\"), in north-eastern Iceland, is a shallow, nutrient-rich lake only about 2.5 m deep on average. Around it is a concentrated museum of volcanic landforms: a cluster of small cones (\"pseudocraters\") on the shore, a maze of black lava nearby, a tuff ring, and steaming geothermal areas. The \"midge\" of the name refers to the clouds of non-biting midges that swarm out of the lake in summer — and it is these insects that feed the ducks here — the Icelandic Environment Agency says more species of duck are said to live here than anywhere else on Earth.",
    formation:
      "Today's Mývatn formed about 2,300 years ago: a large basaltic lava flow came from the east and dammed the valley of the Laxá river, and the water ponded behind the lava barrier into a lake. As the scorching lava flowed over the lake bed and the surrounding wetland, it instantly vaporised the water in the ground and mud, and the steam blasted the lava above it apart into a cluster of small cones with no magma conduit — these are \"pseudocraters\" (rootless cones), and the group at Skútustaðir on the lake shore is the classic example.",
    observation:
      "From the air Mývatn is an irregular pale-blue sheet of water full of islands and peninsulas, with dozens of green cones a few metres to tens of metres high (pseudocraters) packed along its southern shore, looking from above like a field of impact craters. East of the lake is black lava field, a near-perfectly circular tuff ring (Hverfjall), and further east the white-steaming Krafla geothermal area.",
    distinguish:
      "Mývatn's \"pseudocraters\" look like real volcanic cones, but they have no magma conduit beneath and were not erupted from magma — they were built by steam explosions where a lava flow \"pressed\" onto wet ground — hence \"pseudocraters\" or \"rootless cones\". To recognise pseudocraters, look at whether they occur in a large group, all on one lava flow, with no fissures connecting them.",
    concept:
      "Mývatn's pseudocraters are a case study in lava-water interaction: when a lava flow moves over water-bearing ground (wetland, lake bed, riverbank), the water below is rapidly heated and vaporised, and the steam builds up pressure within the lava and then bursts out explosively, throwing lava fragments up into a cone. The key difference from a true volcano is that the heat source is \"above\" (the lava flow), not \"below\" (a magma conduit). A common misconception is that all volcanic cones are built by magma erupting from below.",
    history:
      "Diatomite (the shells of diatoms deposited on the lake bed) was mined at Mývatn for filtration and abrasive materials until 2004, when it stopped because of environmental impact. Since 1974 the area has been managed under a specific \"Mývatn-Laxá Conservation Act\". The area's geothermal heat is also used in film and tourism (such as the geothermal bath at Grjótagjá), but over-development and visitor pressure have been ongoing local issues.",
  },

  "reykjanes-peninsula": {
    // seeing sources: ⚠️ 原文「全世界唯一能在陆地上清楚看到这条大洋中脊的一段」**被同条目的 distinguish 与 concept 两段直接否掉**（前者点名辛格维利尔、克拉夫拉也在洋脊上，后者说的是「只有在冰岛这样的地方」），本库的 `thingvellir` 条目亦写明它骑在洋脊上。整个冰岛都在洋脊上，亚速尔亦然。2026-09-10 全库排他性断言扫描发现，改为「少数几处之一 + 登陆的那一段」。
    seeing:
      "The Reykjanes Peninsula, at the south-western corner of Iceland, has Keflavík International Airport on it and is the first piece of Iceland most visitors set foot on. It is geologically remarkable: the Mid-Atlantic Ridge comes \"ashore\" here — most of the world's mid-ocean ridges lie two or three kilometres down, and Iceland is one of the few places where this one can be seen on land at all; Reykjanes is the stretch where it makes landfall. The peninsula is covered in young black lava, open ground fissures, and large high-temperature geothermal areas (the famous Blue Lagoon is the outflow lagoon of the Svartsengi geothermal power station).",
    formation:
      "The Reykjanes Peninsula has four en-echelon (offset parallel) fissure swarms, corresponding to four volcanic systems. The North American and Eurasian plates separate here at about 2 cm a year, the crust is repeatedly thinned and torn, and basaltic magma rises along the fissures and effuses lava, while heat at depth turns groundwater (much of it infiltrated seawater) into high-temperature geothermal fluid. The peninsula's rock is almost all volcanic rock formed in the last ten-odd thousand years.",
    observation:
      "From the air the Reykjanes Peninsula is a gently rolling lowland patched together from lava flows of varying age (new ones black, old ones covered in grey-green moss), crossed by ground fissures and fault scarps parallel to the peninsula's long axis, a line of low scoria cones and shield volcanoes, and several geothermal fields sending up white steam columns. At the western tip the ridge's rift zone drives straight into the Atlantic, with surf breaking on the sea cliffs.",
    distinguish:
      "The Reykjanes Peninsula, Þingvellir and Krafla are all on the Mid-Atlantic Ridge: Þingvellir is a large graben, Krafla is the site of a single rifting episode, and Reykjanes is a whole corridor of \"the mid-ocean ridge come ashore\", where you can follow the ridge and see fissures, geothermal areas and shield volcanoes in sequence. The \"Bridge Between Continents\" footbridge on the peninsula spans a sand-filled fissure, symbolising the two plates.",
    concept:
      "The Reykjanes Peninsula is a case study in a mid-ocean ridge: the great majority of the world's mid-ocean ridges are two or three kilometres down on the sea floor and cannot be seen; only where a mantle hotspot is superimposed on a ridge, as in Iceland, pushing the sea floor above the surface, can you observe the ridge's rift, parallel fissures, ridge-parallel volcanoes and geothermal areas directly on land. A common misconception is that a \"plate boundary\" is an abstract line on a map — here it is real fissures under your feet, still opening.",
    // history sources: 喷发序列：法格拉达尔本体 2021 / 2022 / 2023 各一次；2023-12 起中心转到桑德努库尔火山口列，至 2025 年 7–8 月已喷发至少九次（2023-12 / 2024-01 / 02 / 03 / 05 / 08 / 11 / 2025-04 / 2025-07–08）。截至 2026-09-09 无正在进行的喷发，IMO 监测到斯瓦特森伊下方岩浆持续积累。级别 1（IMO 公告）+ 3 级日期清单交叉印证，2026-09-09 核。
    //   https://en.vedur.is/about-imo/news/ground-uplift-and-magma-accumulation-continue-beneath-svartsengi
    //   **与本国 fagradalsfjall 条目的同一段历史已对齐**（那条上一批刚改过）—— 两个条目讲同一串喷发，改一处必须搜另一处。
    //   ⚠️ 会过期（C6-j）：**每一轮都要回来刷新**，警戒等级一律不写死、只写「以 IMO 最新公布为准」。板块分离速率约 2 厘米/年（学界 1.8–2.5 区间）核实无误。
    history:
      "The Reykjanes Peninsula's last active period was in the 13th century (the \"Reykjanes Fires\"). From 2020 large numbers of earthquakes and magma movement began beneath the peninsula, with Fagradalsfjall erupting once each in 2021, 2022 and 2023; a magma intrusion in November 2023 cracked the ground in the town of Grindavík and the residents were evacuated, and Iceland built barrier walls to protect the town and the Svartsengi geothermal power plant. Activity then shifted to the nearby Sundhnúkur crater row, which erupted at least nine times between December 2023 and August 2025; as of the latest check no eruption was under way, though the Icelandic Met Office was still recording magma accumulating beneath Svartsengi, with hazard levels to be taken from its latest bulletin. In 2015 it was designated a UNESCO Global Geopark.",
  },

  "reynisfjara": {
    // seeing sources: 自 2013 年起 6 人因疯狗浪死亡（最近一起 2025-08）、现场有三级警示灯系统（多方交叉确认，3 级；未取得 SafeTravel.is 可直接引用的原文数字）。**正文的「数起」与 6 起吻合，措辞既未渲染也未淡化，本轮判定不改。** 2026-09-09 核。
    seeing:
      "Reynisfjara, on Iceland's south coast near the town of Vík, is a beach of pure black sand, backed by a cliff of neat hexagonal basalt columns, with black rock stacks (Reynisdrangar) standing offshore. Nearby, Dyrhólaey is a promontory about 120 m high with a large natural sea arch — big enough for a small boat (and, in calm weather, even a small plane) to pass through. This is the southernmost point of mainland Iceland.",
    formation:
      "The black sand comes from a basaltic volcano: lava (especially lava that shattered on rapid contact with water) is ground and sorted by the waves and glacial rivers, and what is left is the hard black mineral grains piled up as a beach. The columnar basalt of the cliff formed as a lava body cooled and contracted slowly and evenly and split vertically (the same process as the Giant's Causeway). The Reynisdrangar stacks and the Dyrhólaey arch are the result of waves hollowing out and breaking through fractures along the headlands.",
    observation:
      "From the air the Reynisfjara area is a stretch of deep-black beach on the south coast, hard against dark columnar basalt cliffs and a green-topped headland; offshore, a few pointed stacks stand alone in the white surf. On the Dyrhólaey headland to the west there is an obvious \"doorway\", through which you can see the sea on the other side. The beach has strong year-round swell from the open Southern Ocean.",
    distinguish:
      "Reynisfjara and Iceland's other black-sand beaches (such as Skeiðarársandur) are all from basaltic volcanic debris, but Reynisfjara is a \"beach\", washed over and finely sorted by the waves, while a sandur is a coarse gravel plain spread out in one go by glacial rivers. Its columnar basalt cliff is the same kind as the Giant's Causeway, only on a smaller scale.",
    concept:
      "Reynisfjara's sea arch and stacks are a case study in the evolutionary sequence of coastal erosion landforms: waves first hollow a sea cave along a weakness in a headland, the cave breaks through both sides into an arch, the arch roof collapses to leave a stack separated from the shore, and the stack is then worn down to a low skerry. To recognise this sequence, look at whether the seaward side of a headland has caves, arches and stacks all at once. A common misconception is to take these stacks for rocks that have always stood isolated in the sea.",
    history:
      "Because of its striking scenery, Reynisfjara is a popular filming location and photo stop. But the \"sneaker waves\" here — waves that appear suddenly after a long interval, far larger than usual and running far up the beach — have caused several fatal accidents to visitors over the years, and the beach has graduated wave-condition warning signs, with the authorities repeatedly urging visitors to stay well back from the waterline.",
  },

  "latrabjarg": {
    // seeing sources: 崖长约 14 公里、最高约 440 米；「欧洲最大的海鸟崖之一」是广泛引用的说法，**没有冰岛官方的量化排名可查，正文已带「之一」限定，本轮判定可以接受、不改**；岩层年代各文献在 10–16 百万年之间取值（常见 12–15），正文的 15–10 百万年落在其中，不构成矛盾。2026-09-09 核。
    seeing:
      "Látrabjarg, in the Westfjords region of north-western Iceland, is a sea cliff about 14 km long and up to about 440 m high — one of the largest bird cliffs in Europe. In summer, millions of seabirds — Atlantic puffin, razorbill, common guillemot, northern fulmar and others — crowd every ledge of the cliff to nest, an overwhelming sight and sound. Bjargtangar, at the cliff's western end, is the westernmost point of Iceland.",
    formation:
      "The cliff face of Látrabjarg is a stack of horizontal basalt lava flows (formed about 15 to 10 million years ago), with softer volcanic debris and palaeosols between the layers. Waves constantly undercut the cliff foot, the hard lava layers collapse to leave a sheer face, and the soft layers are hollowed into horizontal ledges — and these ledges are ideal nesting platforms for seabirds. The whole coast has risen slightly with post-glacial rebound.",
    observation:
      "From the air Látrabjarg is a dead-straight, dark, near-vertical high cliff driving into the Atlantic at the westernmost end of the Westfjords, its top gentle green grassland, its face lined with horizontal rock ledges packed with white specks (seabirds). At the cliff foot is a narrow boulder shore and churning surf, with no beach.",
    distinguish:
      "Látrabjarg differs from the White Cliffs of Dover and the columnar cliff of Reynisfjara: the White Cliffs are chalk and Reynisfjara is columnar basalt, while Látrabjarg is stacked horizontal basalt lava flows, and its horizontal ledge structure is precisely why it became a giant bird cliff. Iceland has several other large bird cliffs (such as Hornstrandir and Dyrhólaey), and Látrabjarg is the largest.",
    concept:
      "Látrabjarg is a case study in rock structure determining ecology: whether a sea cliff can become a large seabird colony depends on whether it has plenty of horizontal ledges of the right width and relative safety (out of reach of land predators) — and that is set directly by the alternation of hard and soft rock layers and the way they weather. To recognise this kind of cliff, look at whether the face is distinctly bedded, with continuous horizontal grooves. A common misconception is that seabirds simply choose cliffs at random.",
    history:
      "Westfjords farmers historically lowered themselves on ropes from the cliff top to collect seabird eggs and birds (\"egging\"), an important local food source that also honed great cliff-climbing skill. In 1947, a British trawler ran aground below Látrabjarg, and the locals used their egging rope-descent techniques to rescue the stranded crew from the foot of the cliff — a rescue later made into a documentary film.",
  },

  "vestmannaeyjar": {
    seeing:
      "Vestmannaeyjar lies about 10–30 km off Iceland's south coast, a group of a dozen or so volcanic islands and skerries, all formed by volcanic eruption and all young. Two of the islands are especially famous: Surtsey rose from the sea in an eruption between 1963 and 1967, and has since been strictly protected, with only scientists allowed to land, to study how life (plants, insects, seabirds) colonises brand-new land step by step; Heimaey, the only permanently inhabited island, had the sudden Eldfell eruption in 1973.",
    formation:
      "Vestmannaeyjar sits on a seaward extension of Iceland's southern volcanic zone, and the whole group is the product of a young submarine volcanic system less than about 12,000 years old. When magma erupts into shallow water on the sea floor, it explodes violently on contact with water, piling ash and debris into an island (Surtsey formed this way, as a \"phreatomagmatic\" volcanic island); later, quieter lava \"welds\" the island together into something firmer and more erosion-resistant.",
    // observation sources: 1973 年海迈岛喷发：约 5300 名居民当晚全部撤离、埋掉约 400 栋建筑（美国地质调查局官方，级别 1）；火山系统年龄不到 1.2 万年（史密森尼全球火山活动计划，级别 1）。
    //   https://pubs.usgs.gov/gip/heimaey/heimaey.pdf
    //   https://volcano.si.edu/volcano.cfm?vn=372010
    //   **「口门收窄了一半」这个比例查无出处**，原始记述只说「变窄但没堵死、港口反而更避风」，已去掉百分比 —— 一个听起来很具体的比例，往往正是没人去查的那一处。
    observation:
      "From the air Vestmannaeyjar is a cluster of steep green-topped black-cliffed small islands on the deep-blue sea off the south coast, Heimaey the largest, with a natural harbour and a town on it, the town flanked by the black scoria cone (Eldfell) left by the 1973 eruption and by the new lava that markedly narrowed the harbour mouth, in fact leaving the harbour more sheltered. The relatively bare island alone to the south-west is Surtsey.",
    distinguish:
      "Vestmannaeyjar is a group of \"volcanic islands\", completely different from a \"continental island\" of ancient rock like the Outer Hebrides of Scotland: these islands were erupted from the sea floor and piled up directly in the sea, and are still \"growing\" (Surtsey) or have just \"grown\" (Heimaey).",
    concept:
      "Surtsey is a case study in primary succession: an island that rose from the sea, initially entirely lifeless, then has seeds, spores and insects brought by wind, ocean currents and birds; pioneer plants first gain a foothold in the bare rock cracks, seabirds come to nest, bringing nutrients and more seeds, soil gradually forms, and the community steadily becomes more complex. To recognise primary succession, look at whether the ground is \"starting from zero\", with no pre-existing soil or seed bank. A common misconception is that vegetation is always \"just there\".",
    history:
      "In the early hours of 23 January 1973, an eruptive fissure suddenly opened at the edge of the town on Heimaey, and all roughly 5,300 residents were evacuated to mainland Iceland that night on the fishing boats moored in the harbour. Over the following months lava buried about 400 buildings and advanced on, and threatened to close, the harbour — people pumped seawater continuously onto the lava front to cool and harden it and slow it down, and the harbour was saved (its mouth in fact became more sheltered). The excavated houses are now the \"Pompeii of the North\" museum (Eldheimar). Surtsey was inscribed as a World Heritage Site in 2008.",
  },

  "thjorsa": {
    // seeing sources: 雷神河约 230 公里（冰岛最长）、菲厄德尔冰川河约 206 公里（第二），冰岛大学科学网（级别 2），**两个条目互相印证、不矛盾**。雷神河大熔岩 8600 年前、巴达本加系统、覆盖约 900 平方公里、全新世最大单次熔岩流（学术交叉确认）。2026-09-09 核，本轮无需改动。
    //   https://www.visindavefur.is/svar.php?id=2212
    seeing:
      "The Þjórsá is the longest river in Iceland, about 230 km. It is a glacial river, rising on the Hofsjökull ice cap in central Iceland, crossing the highland desert, joining the Hvítá and other rivers in the southern lowland, and finally reaching the sea on Iceland's south coast. Its lower course has a large drop and a steady flow, and it is the most heavily developed river for hydropower in Iceland.",
    formation:
      "The Þjórsá's water comes mainly from meltwater off Hofsjökull and precipitation and snowmelt on the highlands. The valley it flows through was once filled by a huge lava flow: about 8,600 years ago, the \"Great Þjórsá lava\" erupted from the Bárðarbunga volcanic system and flowed about 130 km down this valley all the way to the sea, covering about 900 km² — by volume the largest single lava flow on Earth in the Holocene (the last ~11,600 years). Today many reaches of the Þjórsá flow over this old lava.",
    observation:
      "From the air the upper Þjórsá is a pale-grey, many-stranded braided glacial river in the highland desert; the middle course crosses a broad valley paved with old lava, the channel held in a chain of reservoirs by several dams (Búrfell, Sultartangi and others), with power stations and transmission lines below the dams; the lower course meanders broadly across the southern lowland between green pasture, finally splitting into several channels across a black beach to the sea. One tributary has Háifoss, one of the highest waterfalls in Iceland.",
    distinguish:
      "The Þjórsá and the Jökulsá á Fjöllum are the two longest rivers in Iceland, both glacial rivers rising from ice caps; but the Þjórsá is in the relatively populated south and is heavily dammed for power, while the Jökulsá á Fjöllum is in the uninhabited north-eastern highlands and remains essentially natural. The Þjórsá valley having been filled by a giant lava flow is also notable among Iceland's large rivers.",
    concept:
      "The Great Þjórsá lava is a case study in lava flowing long distances down a river valley: very fluid basaltic lava, if the eruption volume is large enough and it finds an existing river valley as a channel, can flow out over a hundred kilometres like a flood, filling the whole valley and \"driving\" the river onto the lava surface to cut a new course. To recognise this kind of lava, look at whether it follows a valley, is continuous, huge in volume, and reaches the sea at its end. A common misconception is that lava cannot flow very far.",
    history:
      "The Þjórsá basin has had settlements since the 10th century, and the river's name may relate to \"bull\". In the 20th century the Þjórsá became one of the pillars of Iceland's national electricity supply, with several large hydro stations built in succession, supporting energy-intensive industry such as aluminium smelting. Whether to build more hydro stations on the lower river (the \"Lower Þjórsá scheme\") has been debated for years in Iceland, because of salmon migration, farmland and landscape.",
  },

  "jokulsa-a-fjollum": {
    // seeing sources: 长约 206 公里（冰岛第二长，来源同 thjorsa 条）；霍尔赫劳恩 2014–15 熔岩量 >1 立方公里、覆盖约 84 平方公里，自 1783–84 年拉基以来冰岛最大的溢流喷发（学术文献，级别 1）。**与上一批 grimsvotn 条目改好的表述一致** —— 同一件事在三个条目里出现（grimsvotn / fagradalsfjall / 这里），改一处要搜另两处。2026-09-09 核，本轮无需改动。
    //   https://www.visindavefur.is/svar.php?id=2212
    seeing:
      "The Jökulsá á Fjöllum (Icelandic for \"glacial river in the mountains\") is the second-longest river in Iceland, about 206 km. It rises at the Dyngjujökull outlet of the Vatnajökull ice cap, runs north through the almost uninhabited volcanic desert of Iceland's interior, drops over Selfoss, Dettifoss, Hafragilsfoss and other large waterfalls in the Jökulsárgljúfur canyon on its lower course, and finally reaches the sea at Öxarfjörður on the north coast.",
    formation:
      "This river's water comes from the Vatnajökull ice cap, carries large amounts of glacial debris, and is grey-white and turbid year-round. It flows across the youngest, most desolate lava plateau in Iceland. Historically, eruptions of the volcanoes beneath Vatnajökull (especially the Bárðarbunga system) melted ice and repeatedly triggered catastrophic glacial floods on this river; these floods, with carrying power far exceeding the everyday flow, are the main sculptors of the Jökulsárgljúfur canyon and the Dettifoss step. The river's upper valley (around Holuhraun) was the site of the 2014–15 fissure eruption, Iceland's largest effusive eruption since Laki.",
    observation:
      "From the air the Jökulsá á Fjöllum is a pale-grey ribbon of water running dead straight north from the ice cap in the south across an endless black-brown volcanic desert, with almost no vegetation or settlement along it; on entering the lava plateau of the lower course it cuts into the deep, straight Jökulsárgljúfur canyon, dropping over several waterfalls within it; below the canyon it splits into channels across a wetland delta at Öxarfjörður.",
    distinguish:
      "The Jökulsá á Fjöllum and the Þjórsá are the two longest glacial rivers in Iceland, but the Jökulsá á Fjöllum is almost entirely in the uninhabited highlands, with no hydro stations, keeping its natural braided form and flood dynamics; the Þjórsá is in the south and heavily developed. The canyon-and-waterfall system on the lower Jökulsá á Fjöllum, shaped by catastrophic floods, is more pronounced than on the Þjórsá.",
    concept:
      "The Jökulsá á Fjöllum is a case study in a glacier-volcano river system: a river rising from an ice cap that covers active volcanoes has its flow and its landform-shaping driven by three overlapping processes — everyday glacial meltwater, seasonal snowmelt, and sudden glacial floods triggered by volcanic eruptions. The one that really does the \"work\" is often the last: the geomorphic work of a few days of catastrophic flood can exceed that of thousands of years of everyday runoff. A common misconception is to understand its canyon using only the river you see in normal times.",
    history:
      "Floods on the Jökulsá á Fjöllum have left traces in Iceland's place names and folklore (Goðafoss, the \"waterfall of the gods\", is on a neighbouring river). Because it is wide, fast, cold and liable to rise suddenly, this river was historically one of the most dangerous obstacles to crossing Iceland's interior, and the old highland routes had to detour far or ford at particular shallows. Today its middle and lower course is within Vatnajökull National Park.",
  },
};
