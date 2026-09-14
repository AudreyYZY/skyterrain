import type { TerrainLesson } from "@/types/terrain";

export const TERRAIN_EN: Record<string, TerrainLesson> = {
  // ============ Philippines ============
  "mayon-volcano": {
    seeing:
      "Mayon Volcano is the landmark active volcano of Albay Province on Luzon, standing 2,462 m tall with an almost perfectly symmetrical cone; it has erupted more than 49 times in 400 years of record, making it the Philippines' most active volcano.",
    formation:
      "Mayon is a stratovolcano on the Pacific Ring of Fire, built up layer by layer from repeated eruptions of lava and pyroclastic material; despite its long eruptive history, the cone has retained its symmetry without any major landslide or structural collapse.",
    observation:
      "From the air, Mayon shows a textbook symmetrical cone, its upper slopes at 35–40 degrees rising directly from the shore of Albay Gulf in one continuous sweep, with almost no visible break or irregularity along its ridgeline.",
    distinguish:
      "Both Mayon and Mount Pinatubo are active Philippine volcanoes, but Mayon is known for maintaining a perfect cone with the lowest ellipticity index of any stratovolcano globally, while Pinatubo's summit collapsed into a caldera during its violent 1991 eruption.",
    concept:
      "Mayon's ellipticity index of 1.04 is recognised in volcanic geomorphology as the highest degree of symmetry among stratovolcanoes worldwide, making it a classic sample for studying how a stratovolcano can maintain stable cone geometry through repeated eruptions.",
    // history sources: 1938 年设国家公园（Proclamation No. 292），**不是菲律宾首座** —— 阿波山 1936 年更早（Proclamation No. 59）。海拔 2462 m、椭圆度 1.04（Grosse et al. 2012）、1616 年以来喷发逾 49 次（PHIVOLCS 汇编至 2014 年为 51 次）。与航线解说 mnl-lgp 并读一致。核实 2026-09-11
    history:
      "Mayon Volcano was declared a national park in 1938, one of the country's earliest (Mount Apo had been designated in 1936); historical landmarks at its foot, such as the ruins of Cagsawa, record the impact of past eruptions on local communities.",
  },
  "taal-lake": {
    // 全六段 sources: 湖面 267 km²（GVP，2 级；另有无出处的 234.2 km² 流传）；1754 年喷发堵塞潘西皮特河、湖水转为淡水；1911 年喷发死亡 1334–1335 人；「1572 年以来喷发逾 34 次」是下限值（至 2020 年为 34 次，之后又有多次喷发），会变的量，若补精确次数须注监测时点。核实 2026-09-11，未改动
    seeing:
      "Taal Lake is a volcanic caldera lake in southwestern Luzon covering 267 km², with Volcano Island rising at its centre; the island itself holds a main crater lake, producing a rare nested landform of \"an island within a lake, within an island within a lake.\"",
    formation:
      "Taal Lake was originally a saline lagoon fed by the sea; a violent eruption in 1754 deposited enough material to block the Pansipit River and cut the lake off from the ocean, after which it became a rain-fed catchment and gradually freshened into a freshwater lake.",
    observation:
      "From the air, Taal Lake shows a multi-layered nested landscape — the lake ringing Volcano Island, which itself holds a main crater lake — its broad, calm surface forming a sharp contrast with the hilly interior terrain of Luzon around it.",
    distinguish:
      "Both Taal Lake and Mayon Volcano are active volcanic landforms in the Philippines, but Taal is a nested lake system formed within a flooded caldera, while Mayon is a stratovolcano that has retained an intact cone.",
    concept:
      "Taal Lake's nested \"island within a lake within an island\" landform is a globally rare case of volcanic geomorphology, making it an important sample for studying how repeated caldera eruptions and subsequent flooding produce multi-layered water bodies.",
    history:
      "Taal Volcano has erupted more than 34 times since 1572; a 1911 eruption killed 1,334 people and sent ash as far as Manila, making it one of the deadliest volcanic eruptions in Philippine history.",
  },
  "mount-pinatubo": {
    seeing:
      "Mount Pinatubo's June 15, 1991 eruption was the second-largest volcanic eruption of the 20th century, its ash column rising more than 40 km; the violent collapse of its summit formed a caldera about 2.5 km wide, now filled with a turquoise crater lake.",
    // formation sources: 1991-06-15 VEI 6、20 世纪第二大喷发；总喷出物约 8–10 km³、折合致密岩浆约 4–5 km³；山顶 1745 → 1486 m、降约 260 m（GVP，2 级）—— 原写「岩浆逾 10 km³」「降低逾 300 m」。其余段（847 人死亡、云雅台风、2.5 km 破火山口）与 GVP/USGS 一致。核实 2026-09-11
    formation:
      "The 1991 eruption ejected roughly 8–10 km³ of tephra and pyroclastic material in total (about 4–5 km³ of magma in dense-rock equivalent) at a VEI 6 intensity; the violence of the event triggered multiple earthquakes and caused the summit to collapse in on itself, lowering the mountain's height by about 260 m and producing today's caldera landform.",
    observation:
      "From the air, Pinatubo's caldera shows an almost circular collapsed outline, its turquoise crater lake standing in sharp colour contrast against the grey-brown pyroclastic deposits around it — direct geological evidence of the 1991 eruption.",
    distinguish:
      "Both Mount Pinatubo and Mayon Volcano are active Philippine volcanoes, but Pinatubo's summit collapsed into a caldera lake during its 1991 eruption, while Mayon has retained an intact, symmetrical cone without major collapse.",
    concept:
      "The 1991 Pinatubo eruption, the second-largest of the 20th century, released enough sulfur dioxide aerosol to briefly lower global average temperatures, making it a classic case for studying the global climate impact of large volcanic eruptions.",
    history:
      "The 1991 eruption coincided with Typhoon Yunya, and ash-laden rain added extra weight to roofs; a large share of the 847 deaths resulted from roof collapses. The resulting crater lake is today a well-known hiking destination in the Philippines.",
  },
  "mount-apo": {
    // 全六段 sources: 海拔 2954 m（主流口径；另有 2956 m 流传，未见 NAMRIA 重测）、菲律宾最高峰；1880 年达沃总督 Joaquín Rajal 首登；1936 年设国家公园（Proclamation No. 59）—— 为本库 mayon-volcano / hundred-islands-national-park「首座国家公园」改正提供了时间锚点。核实 2026-09-11，未改动
    seeing:
      "Mount Apo is the highest peak in the Philippines at 2,954 m, a dormant stratovolcano within the Apo-Talomo Mountain Range on Mindanao, its slopes covered in tall tropical hardwood forest.",
    formation:
      "Mount Apo is a dormant stratovolcano on the Pacific Ring of Fire, built up by long-term magmatic activity and the accumulation of pyroclastic material into its towering cone; solfataric (sulfur) vent activity persists near its summit, showing it remains dormant rather than extinct.",
    observation:
      "From the air, Mount Apo appears as a tall peak densely covered in tropical hardwood forest, its outline visible from Davao City 45 km away, forming a sharp vertical contrast with the lower-elevation terrain of Mindanao around it.",
    distinguish:
      "Both Mount Apo and Mount Pinatubo are Philippine stratovolcanoes, but Apo is the country's highest peak, a dormant volcano with ongoing summit sulfur-vent activity, while Pinatubo underwent a violent eruption in 1991 that formed a caldera.",
    concept:
      "Mount Apo National Park is an important habitat for the Philippine eagle and other rare species, making it an important sample for studying the relationship between altitudinal vegetation zonation on tropical mountains and the conservation of endangered flagship species.",
    history:
      "\"Apo\" means \"grandfather\" or \"revered elder\" in the local Manobo and Kalagan languages; the mountain is regarded as the home of the guardian spirit Apo Sandawa. Its first recorded ascent was in 1880, led by Davao governor Joaquin Rajal.",
  },
  "mount-pulag": {
    // 全六段 sources: 海拔 2928 m、吕宋岛最高、全国第三（阿波山 2954 > 杜朗杜朗 2938 > 普拉格）—— 与 cordillera-central-luzon、mount-apo 并读一致。核实 2026-09-11，未改动
    seeing:
      "Mount Pulag is Luzon's highest peak and the Philippines' third-highest overall, at 2,928 m, known for its early-morning \"sea of clouds\" and its exceptional view of the Milky Way.",
    formation:
      "Mount Pulag is part of the Cordillera Central, its towering form shaped by long-term tectonic uplift; the open alpine grassland at its summit is a vegetation type distinctive to tropical high elevations, forming a layered transition with the pine belt on its slopes below.",
    observation:
      "From the air, Mount Pulag's summit is often shrouded each morning in a dense sea of cloud with only its peak breaking through, interweaving with the continuous mountainous terrain of the surrounding Cordillera Central to form one of the Philippines' best-known highland viewpoints.",
    distinguish:
      "Both Mount Pulag and Mount Apo are high peaks in the Philippines, but Pulag is a non-volcanic high mountain within the Cordillera Central known for its sea-of-clouds views, while Apo is a dormant volcano still showing signs of activity.",
    concept:
      "The open alpine grassland ecosystem at Mount Pulag's summit is an important sample for studying how non-forest vegetation zones form at high elevation in the tropics.",
    history:
      "Mount Pulag holds important traditional cultural significance for local indigenous communities; the mountain is protected within Mount Pulag National Park, which safeguards both local biodiversity and indigenous cultural heritage.",
  },
  "cordillera-central-luzon": {
    // 全六段 sources: 南北约 320 km、东西约 118 km、菲律宾最高山脉、最高峰普拉格山（3 级，与 mount-pulag 一致）。核实 2026-09-11，未改动
    seeing:
      "The Cordillera Central is a mountain system in north-central Luzon running about 320 km north-south and 118 km east-west, the highest mountain range in the Philippines, encompassing peaks such as Mount Pulag.",
    formation:
      "The Cordillera Central formed through long-term tectonic uplift as a product of crustal compression on Luzon; at its southeastern end it connects to the Sierra Madre via the Caraballo Mountains, and long-term erosion of its river valleys has shaped the stepped terrain suited to terrace agriculture.",
    observation:
      "From the air, the Cordillera Central shows continuous, rolling mountainous terrain, terraced settlements carved into the slopes dotting the landscape, forming a sharp contrast with the coastal plains of Luzon.",
    distinguish:
      "Both the Cordillera Central and the Sierra Madre are major mountain systems on Luzon, but the Cordillera Central is higher in elevation and is the Philippines' tallest range, while the Sierra Madre is the country's longest range, running along Luzon's eastern coast.",
    concept:
      "The Cordillera Central is the geographic backbone underlying the Ifugao rice terraces and other highland agricultural landscapes, making it an important sample for studying how mountainous terrain supports high-elevation terrace farming systems.",
    history:
      "The Cordillera Central has long been the traditional homeland of the Ifugao and other indigenous peoples of the Philippines, whose mountain terrace farming tradition has continued for more than two thousand years.",
  },
  "sierra-madre-philippines": {
    // 全六段 sources: 南北约 540 km、菲律宾最长山脉（3 级，定性排名与 cordillera-central-luzon「最高」不同属性、不冲突）。核实 2026-09-11，未改动
    seeing:
      "The Sierra Madre is the longest mountain range in the Philippines, running along Luzon's east coast from Cagayan Province in the north to Quezon Province in the south, about 540 km end to end.",
    formation:
      "The Sierra Madre formed through long-term tectonic uplift; at its southeastern end it connects to the Cordillera Central via the Caraballo Mountains, and it is one of the source ranges of the Cagayan River and other major rivers of eastern Luzon, its long-term erosion shaping continuous, rolling mountainous terrain.",
    observation:
      "From the air, the Sierra Madre appears as a continuous green mountain belt running along Luzon's east coast, the Cagayan Valley plain bordering it to the west and the open Pacific Ocean facing it to the east.",
    distinguish:
      "Both the Sierra Madre and the Cordillera Central are major mountain systems on Luzon, but the Sierra Madre is the Philippines' longest range, running along the east coast, while the Cordillera Central is the country's highest range, in the north-central interior.",
    concept:
      "The Sierra Madre has long served as a natural buffer shielding Luzon's east coast from Pacific typhoon storm surges, making it an important sample for studying how mountainous terrain buffers coastal areas against extreme weather.",
    history:
      "Extensive tracts of primary forest survive along the Sierra Madre, making it a key biodiversity conservation area in the Philippines, and it has long been the traditional territory of indigenous communities on Luzon's east coast.",
  },
  "mount-kanlaon": {
    // 全六段 sources: 海拔 2465 m；1819 年以来喷发逾 30 次、菲律宾第三活跃；山顶约 2 km 椭圆破火山口；1934 年设国家公园（PHIVOLCS 火山档案转述，2 级）—— 注意 1934 早于阿波山 1936，但本条未自称「首座」，不构成冲突。近年喷发为持续过程，下轮复核。核实 2026-09-11，未改动
    seeing:
      "Mount Kanlaon is the highest peak on Negros Island and in the Visayas at 2,465 m; it has erupted more than 30 times since 1819, making it the Philippines' third-most-active volcano.",
    formation:
      "Kanlaon is an andesitic stratovolcano on the Pacific Ring of Fire, its cone built up through long-term eruptive activity; its summit holds an elongated caldera about 2 km wide containing two craters — one extinct and now filled with a crater lake, and the other, the still-active Lugud Crater.",
    observation:
      "From the air, the two craters within Kanlaon's elongated summit caldera are clearly distinguishable, a deep-blue crater lake standing in sharp contrast with the deep, still-active vent nearby, the whole massif ringed by dense forest.",
    distinguish:
      "Both Mount Kanlaon and Mayon Volcano are active Philippine volcanoes, but Kanlaon's summit holds an elongated caldera with two craters, while Mayon has retained a single, intact, symmetrical cone.",
    concept:
      "The coexistence at Kanlaon's summit of an extinct, water-filled crater alongside a still-actively erupting one makes it a classic sample for studying differing activity cycles between separate vents within the same caldera.",
    history:
      "Mount Kanlaon National Park was established in 1934, encompassing the crater, hot springs and diverse wildlife habitat, and has long served as an important nature reserve in the Visayas.",
  },
  "chocolate-hills": {
    // 全六段 sources: 「已确认至少 1260 座、可能逾 1776 座」—— 1776 是 1997 年第 1037 号公告的法定计数，1260–1268 为较早的旅游口径，正文并列两者的写法与常见口径一致；分布逾 50 km²、晚上新世至早更新世海相石灰岩。核实 2026-09-11，未改动
    seeing:
      "The Chocolate Hills are a cluster of karst hills on Bohol Island, with at least 1,260 and possibly more than 1,776 confirmed cone-shaped mounds spread across an area of more than 50 km², each 30–120 m tall.",
    formation:
      "The coral-reef limestone hosting the Chocolate Hills was deposited on the seafloor during the Late Pliocene to Early Pleistocene; subsequent tectonic uplift raised it above sea level, and long-term tropical rainfall dissolution of the limestone carved today's dense field of conical hills, a classic example of karst topography.",
    observation:
      "From the air, the Chocolate Hills present a distinctive landscape of hundreds to thousands of densely packed cone-shaped mounds; as the dry season turns their grass cover brown, the hills take on a chocolate-like appearance, forming a sharp contrast with the otherwise flat terrain of Bohol.",
    distinguish:
      "The Chocolate Hills and other Southeast Asian karst landforms such as Endau-Rompin are all shaped by limestone dissolution, but the Chocolate Hills are known for their sheer number and dense packing of conical mounds, a textbook example of a karst hill field.",
    concept:
      "Several scientific hypotheses exist for the Chocolate Hills' formation (including differential dissolution of an uplifted coral platform), making them an important subject for studying how dense clusters of tropical karst hills form.",
    history:
      "The Chocolate Hills are a famous natural landmark of Bohol and have long been the subject of local legend and folklore; they are today an important geotourism destination in the central Visayas.",
  },
  "banaue-ifugao-rice-terraces": {
    // 全六段 sources: 1995 年巴塔德、邦岸、马约瑶、洪古丹、纳加达坎五处列入 UNESCO；班奈镇观景台梯田因完整性不足未纳入 —— 与名录一致。⚠️ 红线自查：只写工程与名录机制，未作族群评价。核实 2026-09-11，未改动
    seeing:
      "The Ifugao rice terraces are a mountainside terrace-farming system carved by the Ifugao people more than two thousand years ago within the Cordillera Central, more than 48 terrace clusters climbing the mountain slopes tier upon tier, served by a precisely engineered irrigation network.",
    formation:
      "The Ifugao terraces are a stepped agricultural landform hand-carved into steep mountain terrain using only simple tools; a precise gravity-fed irrigation network, sustained by mountain streams and rainfall, is a model of how mountainous terrain has been artificially reshaped to serve agriculture.",
    observation:
      "From the air, the Ifugao terraces present a green, stepped landscape spiralling up the mountainside tier by tier; during the wet season, water-filled paddies reflect the sky like a string of mirrors, interweaving with the untouched mountainous terrain of the surrounding Cordillera Central.",
    distinguish:
      "Both the Ifugao rice terraces and the Cordillera Central as a whole lie within north-central Luzon's mountains, but the terraces are an artificially carved agricultural stepped landform, while the Cordillera Central is the natural mountain framework that carries them.",
    concept:
      "The more than two thousand years of continuous cultivation at the Ifugao terraces make them a classic sample for studying how traditional agricultural knowledge can achieve precise mountain water-resource management without modern engineering technology.",
    history:
      "In 1995, five terrace clusters — Batad, Bangaan, Mayoyao, Hungduan and Nagacadan — were inscribed on the UNESCO World Heritage List as the \"Rice Terraces of the Philippine Cordilleras\"; the terraces around Banaue town itself were excluded due to lower integrity scores from dense modern construction, but remain an important agricultural cultural landscape locally.",
  },
  "camiguin-island": {
    // 全六段 sources: 面积约 238 km²、七座火山、希博克—希博克为其中现存活火山；1871 年伏尔甘山喷发致墓园沉没（3 级，多来源一致）。核实 2026-09-11，未改动
    seeing:
      "Camiguin is a pear-shaped volcanic island off the north coast of Mindanao, covering about 238 km², home to seven volcanoes, earning it the nickname \"Island Born of Fire\" since the whole island was built up by undersea volcanic eruptions.",
    formation:
      "Camiguin was built up over millions of years from lava and pyroclastic material erupted repeatedly by undersea volcanoes; its seven volcanoes give it one of the highest volcano densities per unit area in the world, with its highest peak, Mount Hibok-Hibok, still active, ongoing volcanic and seismic activity remaining the dominant force shaping the island's landform.",
    observation:
      "From the air, Camiguin shows a pear-shaped outline with multiple volcanic cones densely packed onto a small island, together with hot and cold springs and waterfalls forming a richly layered volcanic island landscape.",
    distinguish:
      "Both Camiguin and Mayon Volcano are active Philippine volcanic landforms, but Camiguin is an entire island densely packed with seven volcanoes, while Mayon is a single standalone symmetrical cone on Luzon.",
    concept:
      "Camiguin's volcano density per unit area is among the highest in the world, making it an important sample for studying how a dense cluster of volcanoes can form and erupt on a small island.",
    history:
      "The island's \"Sunken Cemetery\" marks the site where a cemetery sank beneath the sea following volcanic activity in 1871; a large cross now marks the spot, a historical testament to how volcanic activity on Camiguin has affected human settlement.",
  },
  "batanes-islands": {
    seeing:
      "The Batanes Islands are the Philippines' northernmost island group, made up chiefly of the three inhabited islands of Batan, Sabtang and Itbayat, known for their open rolling hills and dramatic cliffs.",
    // formation sources: 巴坦群岛东弧（巴丹岛）为火山岛、西弧（萨布唐、伊特巴亚特）为抬升珊瑚礁石灰岩（ANU Press《The Batanes Islands》第 17 章，学术出版）—— formation 与 concept 两段原把萨布唐归入火山成因，已改。伊特巴亚特为菲律宾最北端有人常住岛屿（更北的 Y'Ami 无人）。⚠️ 红线自查：只写地质与伊瓦坦石屋，未涉海域 / 主权。核实 2026-09-11
    formation:
      "Batan formed through volcanic eruption, long-term weathering and erosion shaping today's open, rolling grass-hill terrain; Sabtang and Itbayat, by contrast, are built mainly of coral-reef limestone repeatedly uplifted by tectonic plate movement, presenting a steeper, cliff-dominated coastal landform distinct from Batan.",
    observation:
      "From the air, the Batanes Islands show continuous, rolling green grass hills covering the terrain, dark grey rock outcrops dotted throughout, wild horses roaming freely across the open grassland — a sharp contrast with the tropical rainforest landscapes elsewhere in the Philippines.",
    distinguish:
      "Both the Batanes Islands and Camiguin are volcanically formed Philippine islands, but Batanes is known for its open grass-hill terrain and temperate-leaning climate, while Camiguin is a classic tropical volcanic island densely packed with seven volcanoes.",
    concept:
      "Within Batanes, the tectonic-uplift origin of Sabtang and Itbayat, distinct from Batan's volcanic origin, makes the group an important sample for studying how differing geological origins shape contrasting landforms within a single island cluster.",
    history:
      "Itbayat is the northernmost inhabited island in the Philippines; the local Ivatan people retain a distinctive tradition of stone-house architecture, developed to withstand the region's frequent typhoons.",
  },
  "el-nido-bacuit-archipelago": {
    // seeing sources: 45 座石灰岩岛礁、「El Nido」西语意为「巢」、金丝燕筑巢 —— 与多来源一致。seeing 段原写「2011 年整个区域获认定为 UNESCO 世界地质公园」：**查无此认定**，菲律宾唯一的 UNESCO 世界地质公园是 2023 年的保和岛（unesco.org，1 级），已删。核实 2026-09-11
    seeing:
      "El Nido / the Bacuit Archipelago is a group of 45 limestone islets at the northern tip of Palawan, riddled with karst cliffs, sinkholes and lagoons.",
    formation:
      "The limestone islets of the Bacuit Archipelago have been shaped by the combined action of sea erosion and surface dissolution over a long period, carving today's steep, near-vertical karst cliff landform, with dissolution within the islets producing numerous sinkholes and hidden lagoons.",
    observation:
      "From the air, the Bacuit Archipelago shows dozens of tropical-forest-covered limestone tower islets scattered across turquoise water, white-sand beaches and hidden lagoons dotting the spaces between them — a classic tropical karst island landscape.",
    distinguish:
      "Both El Nido / the Bacuit Archipelago and the Coron / Calamian Islands are limestone island groups off Palawan, but Bacuit is known for its dense field of 45 karst tower islets and hidden lagoons, while Coron is known for mixed saline-freshwater lakes such as Kayangan.",
    concept:
      "The nesting of swiftlets in the cliffs and caves of the Bacuit Archipelago makes it a classic sample for studying the relationship between tropical karst island ecosystems and the roosting behaviour of specific bird species.",
    history:
      "\"El Nido\" comes from the Spanish for \"the nest,\" named for the local tradition of harvesting swiftlet nests from the area's limestone cliffs and caves; it is today a well-known island-hopping and diving destination in the Philippines.",
  },
  "tubbataha-reefs": {
    // 全六段 sources: 97,030 ha（tubbatahareefs.org，1 级）；「逾 360 种珊瑚、近 700 种鱼类」与 UNESCO 名录原文一致；1988 年设海洋公园、1993 年列入 UNESCO（whc.unesco.org/en/list/653，1 级）。⚠️ 红线自查：只写礁体生态，未涉南海主权 / 海域划界。核实 2026-09-11，未改动
    seeing:
      "The Tubbataha Reefs are a coral atoll natural park at the centre of the Sulu Sea, made up of the Tubbataha and Jessie Beazley Reefs, protecting an area of nearly 100,000 ha and recording more than 360 coral species and almost 700 fish species.",
    formation:
      "The Tubbataha Reefs are an isolated coral atoll system in the deep waters of the Sulu Sea, built up through long-term coral growth into a reef structure with walls dropping vertically more than 100 m — a classic sample of ongoing coral growth in an isolated, deep-sea setting.",
    observation:
      "From the air, Tubbataha shows the classic atoll outline of pale reef flats ringing a deep-blue lagoon, surrounded by the open, deep waters of the Sulu Sea, far from land and largely free of land-based pollution.",
    distinguish:
      "Both the Tubbataha Reefs and El Nido / the Bacuit Archipelago are well-known Philippine coral reef ecosystems, but Tubbataha is an isolated deep-sea atoll system at the centre of the Sulu Sea, while El Nido is a near-shore karst island group off Palawan.",
    concept:
      "As a key node for the reproduction and dispersal of marine life across the Sulu Sea, Tubbataha is an important sample for studying how an isolated deep-sea coral reef system replenishes the wider regional marine ecosystem.",
    history:
      "Tubbataha was established as a marine park in 1988 and inscribed on the UNESCO World Heritage List in 1993, making it one of the world's natural laboratories for studying coral reef formation.",
  },
  "coron-calamian-islands": {
    // 全六段 sources: 卡杨甘湖水下能见度逾 24 m、约七成淡水三成海水（3 级，多来源一致）。⚠️ 红线自查：未涉南海议题。核实 2026-09-11，未改动
    seeing:
      "Coron / the Calamian Islands are a group of limestone islands off Palawan's northeast coast; Kayangan Lake within them is regarded as the clearest lake in the Philippines, with underwater visibility exceeding 24 m.",
    formation:
      "The steep limestone cliffs around Coron Island are built of sedimentary rock formed from coral reefs and shells millions of years ago; Kayangan Lake is a karst lake where seawater has long seeped through the limestone cliffs and mixed with rainwater, producing a distinctive mixed lake of about 70% freshwater and 30% seawater.",
    observation:
      "From the air, Coron shows steep limestone cliffs ringing deep lakes and bays; Kayangan Lake, enclosed on all sides by towering cliffs, has crystal-clear water visible to the bottom, forming a richly layered scene against the green, vegetation-covered karst massif around it.",
    distinguish:
      "Both Coron / the Calamian Islands and El Nido / the Bacuit Archipelago are limestone island groups off Palawan, but Coron is known for mixed saline-freshwater lakes such as Kayangan, while El Nido is known for its dense field of karst tower islets and hidden lagoons.",
    concept:
      "Kayangan Lake's distinctive layered mix of saline and fresh water makes it a classic sample for studying how the combined action of seawater seepage and rainwater recharge in karst terrain produces a distinctive lake ecosystem.",
    history:
      "Kayangan Lake has been guarded for generations by the local Tagbanua people, who regard it as sacred; it is today a well-known diving and island-hopping destination in the Philippines and an important case of indigenous-led nature conservation on Palawan.",
  },
  "puerto-princesa-underground-river": {
    // 全六段 sources: 全长 8.2 km；「已知最长的直接入海可通航地下河」—— 限定语正确（「最长地下河」本身已被 2007 年墨西哥发现推翻，本条没有这么写）；洞厅宽达 120 m、高 60 m；1999 年列入 UNESCO；New7Wonders 2012-01-28 正式确认，正文作为与 UNESCO 并列的另一件事、未混为官方认定。核实 2026-09-11，未改动
    seeing:
      "The Puerto Princesa Underground River is an 8.2-km underground river within Palawan's Saint Paul Mountain Range, the longest known navigable underground river that flows directly into the sea, inscribed on the UNESCO World Heritage List in 1999.",
    formation:
      "The limestone massif hosting the Puerto Princesa Underground River has been shaped by long-term groundwater dissolution of the carbonate rock into a vast cave system; its lower reaches, near the sea outlet, are tidally influenced and brackish — a distinctive case of karst landform interacting with ocean tides.",
    observation:
      "From the air, the Saint Paul Mountain Range hosting the underground river is densely forested, its cave mouth hidden within the massif, several chambers inside as much as 120 m wide and 60 m high, the vast underground river network almost invisible from the surface.",
    distinguish:
      "Both the Puerto Princesa Underground River and the Chocolate Hills are representative karst landforms in the Philippines, but the underground river is known for its navigable underground channel flowing directly into the sea, while the Chocolate Hills are a dense field of conical karst mounds.",
    concept:
      "The Puerto Princesa Underground River fully protects a continuous mountain-to-sea ecosystem, making it an important sample for studying how a karst underground river system sustains biodiversity across the land-sea transition zone.",
    history:
      "The Puerto Princesa Underground River was inscribed on the UNESCO World Heritage List in 1999 and named one of the New7Wonders of Nature in 2012, a landmark achievement in Philippine natural heritage conservation.",
  },
  "pagsanjan-gorge": {
    // 全六段 sources: 落差约 120 m、三级跌落；1939-03-29 设国家公园（Proclamation No. 392）。核实 2026-09-11，未改动
    seeing:
      "Pagsanjan Gorge is a canyon landform on Luzon carved by the Pagsanjan River in Laguna Province, ending in the three-tiered, 120-m Magdapio Falls, popularly known as Pagsanjan Falls.",
    formation:
      "Pagsanjan Gorge lies at the foot of the Sierra Madre; long-term erosion of the mountain rock by the river has carved a gorge landform with steep, forest-covered walls on both sides of the channel, the river forming a tiered waterfall where it meets a drop in the rock strata at its end.",
    observation:
      "From the air, Pagsanjan Gorge shows a winding river channel set deep within a densely forested valley, the three-tiered Magdapio Falls at its end, blending into the primary-forest landscape at the foot of the surrounding Sierra Madre.",
    distinguish:
      "Both Pagsanjan Gorge and the Puerto Princesa Underground River are representative gorge and cave landforms in the Philippines, but Pagsanjan is an open surface-river gorge and waterfall carved by erosion, while Puerto Princesa is an underground karst river system.",
    concept:
      "Pagsanjan Gorge's traditional dugout-canoe \"shooting the rapids\" journey upriver makes it a classic case for studying how a gorge landform and a traditional form of water transport have coexisted and developed into a tourism experience over the long term.",
    history:
      "Pagsanjan Gorge National Park was established in 1939; the tradition of carrying visitors upriver by dugout canoe dates to the Spanish colonial era and continues today, making it one of the Philippines' longest-running river adventure tourism experiences.",
  },
  "cagayan-river": {
    // 全六段 sources: 全长约 505 km、菲律宾最长且流量最大的河流、源出卡拉巴略山脉、于阿帕里注入巴布延海峡（Britannica，2 级）。核实 2026-09-11，未改动
    seeing:
      "The Cagayan River is the Philippines' longest river and the one with the greatest discharge, running about 505 km from its source in the Caraballo Mountains through the Cagayan Valley of northeastern Luzon before emptying into the Babuyan Channel at Aparri.",
    formation:
      "The Cagayan rises in the Caraballo Mountains, where the Cordillera Central meets the Sierra Madre; long-term erosion of the mountain rock and downstream sediment transport have shaped the elongated valley plain running the length of northeastern Luzon.",
    observation:
      "From the air, the Cagayan River shows a broad, winding channel running through the extensive agricultural plain of the Cagayan Valley in northeastern Luzon, rice paddies and dryland crops interweaving along its banks, with a clear delta landform at its mouth near Aparri.",
    distinguish:
      "Both the Cagayan River and Lake Lanao are important water bodies in the Philippines, but the Cagayan is a dynamic, flowing river running the length of Luzon, while Lake Lanao is a comparatively still tectonic lake on Mindanao.",
    concept:
      "As the Philippines' highest-discharge river, the Cagayan's basin pattern is an important sample for studying the relationship between the mountain-valley-plain landform gradient of northeastern Luzon and agricultural development.",
    history:
      "The Cagayan Valley has historically been an important agricultural and population centre in northern Luzon, the river long providing irrigation water and inland shipping routes for the provinces of Cagayan, Isabela and others along its banks.",
  },
  "lake-lanao": {
    seeing:
      "Lake Lanao is the Philippines' second-largest lake, covering about 340 km² in Lanao del Sur Province on Mindanao, and one of the world's few so-called ancient lakes.",
    formation:
      "Lake Lanao formed when a basin between two mountain ranges was dammed by combined tectonic and volcanic activity, accompanied by the collapse of a large volcano — a classic case of tectonic and volcanic processes together shaping a large lake basin.",
    observation:
      "From the air, Lake Lanao's broad water surface is set among the interior mountains of Mindanao, mosque architecture dotting its shores, its water flowing north via the Agus River over the dramatic drop of Maria Cristina Falls.",
    distinguish:
      "Both Lake Lanao and Agusan Marsh are important wetland water bodies on Mindanao, but Lake Lanao is a higher-elevation lake of tectonic-volcanic origin, while Agusan Marsh is a low-elevation marsh wetland formed on a river floodplain.",
    concept:
      "Lake Lanao is home to 18 endemic Philippine cyprinid fish species, making it an important sample for studying how long-term evolution in an isolated ancient lake produces endemic species radiation.",
    // history sources: 面积约 340 km²、菲律宾第二大湖、18 种特有鲤科鱼类。「古老湖泊」全球计数文献 15–20 不等，原 seeing 写 17、concept 写 15 自相矛盾，两处都改为不带计数。阿古斯水电占棉兰老岛用电：原写「约七成」（约 2013–2015 年状态）；NPC 官方「逾 50%」未注时点、DOE 2023–24 经媒体转述约三成，冲突且最新值只有 3 级来源，**只写定性下降、不补数字**，下轮找 DOE 原始数据回来补。⚠️ 红线自查：玛拉瑙人信仰只作人口学事实，未涉自治 / 冲突。核实 2026-09-11
    history:
      "The Agus River hydroelectric system fed by Lake Lanao has long been one of Mindanao's main power sources (its share has fallen markedly in recent years as coal-fired capacity expanded); the Maranao people who live around the lake are almost entirely Muslim, and numerous mosques are found around its shores.",
  },
  "agusan-marsh": {
    // 全六段 sources: 40,940.96 ha；1999-11-12 列入拉姆萨尔（Ramsar RIS 1009，1 级）；2018-11-08 东盟遗产公园（ASEAN Centre for Biodiversity，1 级）。⚠️ 红线自查：未涉棉兰老自治 / 冲突。核实 2026-09-11，未改动
    seeing:
      "Agusan Marsh is an extensive floodplain wetland in the Agusan River basin of northeastern Mindanao, its legislated protected area covering about 40,941 ha, inscribed on the Ramsar List of Wetlands of International Importance in 1999.",
    formation:
      "Agusan Marsh is a low-lying floodplain formed where multiple tributaries of the Agusan River basin converge over a long period; seasonal floods repeatedly inundate the marsh, and long-term vegetation colonisation combined with peat accumulation has shaped today's extensive swamp forest and peat swamp forest.",
    observation:
      "From the air, Agusan Marsh shows open water interwoven with dense swamp forest, a crisscrossing network of channels, forming Mindanao's largest contiguous inland wetland ecosystem.",
    distinguish:
      "Both Agusan Marsh and Lake Lanao are important wetland water bodies on Mindanao, but Agusan Marsh is a low-elevation river floodplain marsh known for its peat swamp forest, while Lake Lanao is a higher-elevation lake of tectonic-volcanic origin.",
    concept:
      "Agusan Marsh preserves the largest surviving peat swamp forest in the Philippines, making it an important sample for studying the long-term flood-storage and carbon-storage functions of tropical river floodplain wetlands.",
    history:
      "Agusan Marsh has long provided flood-storage capacity for Butuan City and the surrounding area, easing downstream flood pressure; it was recognised as an ASEAN Heritage Park in 2018.",
  },
  "hundred-islands-national-park": {
    seeing:
      "Hundred Islands National Park is an island cluster in Lingayen Gulf off northwestern Luzon, comprising 124 limestone islands at low tide and 123 at high tide, established as a national park in 1940, one of the Philippines' earliest.",
    formation:
      "The islands of Hundred Islands National Park sit on a coral-reef foundation with rock dating back about two million years; long-term wave erosion combined with coral reef deposition has shaped today's dense cluster of small limestone islands scattered across Lingayen Gulf.",
    observation:
      "From the air, Hundred Islands National Park shows a hundred-odd limestone islands of varying sizes scattered across the turquoise waters of Lingayen Gulf, white-sand beaches and shallow coral reefs dotting the spaces between them — a distinctive dense island-cluster landscape on Luzon's northwest coast.",
    distinguish:
      "Both Hundred Islands National Park and the Chocolate Hills are Philippine landforms formed by uplifted coral-reef limestone, but Hundred Islands is a cluster of islands scattered across a bay, while the Chocolate Hills are a dense field of conical karst mounds on land.",
    concept:
      "The hundreds of small limestone islands densely clustered within a single bay at Hundred Islands make it a classic sample for studying how an uplifted coral-reef foundation fragments through wave erosion into a dense island cluster.",
    // history sources: 退潮 124 座 / 涨潮 123 座；1940-01-18 设国家公园（Proclamation No. 667），常被称「第一座」但阿波山 1936、马荣 1938 更早 —— seeing 与 history 两段原写「首座」「最悠久」；开放四岛 Governor's / Marcos / Quezon / Children's（中文原把 Marcos 译成「市长岛」）。核实 2026-09-11
    history:
      "Hundred Islands National Park was established in 1940, often called the Philippines' first national park, though Mount Apo (1936) and Mayon (1938) were designated earlier; today only four islands — Marcos, Governor's, Quezon and Children's — have been developed and opened to visitors.",
  },
  "verde-island-passage": {
    seeing:
      "The Verde Island Passage is a narrow marine channel between the provinces of Batangas, Mindoro, Marinduque and Romblon, widely recognised in scientific literature as the global \"centre of the centre\" of marine fish biodiversity, with more than 300 recorded coral species.",
    formation:
      "The Verde Island Passage is a narrow marine corridor at the centre of the Philippine archipelago, sitting at the heart of the Coral Triangle; long-term convergence of warm ocean currents combined with sustained coral growth has shaped today's exceptionally biodiverse marine ecological corridor.",
    observation:
      "From the air and at the surface, the Verde Island Passage shows dense coral reefs and multiple marine habitats lining both sides of a narrow channel, an important shipping route connecting Luzon and Mindoro, its clear waters teeming with marine life.",
    distinguish:
      "Both the Verde Island Passage and the Tubbataha Reefs are important Philippine coral reef ecosystems, but the Passage is a biodiversity hotspot within a narrow strait, while Tubbataha is an isolated deep-sea atoll system at the centre of the Sulu Sea.",
    concept:
      "As the \"centre of the centre\" of the Coral Triangle, the Verde Island Passage is an important sample for studying how a narrow strait's terrain concentrates ocean currents and biodiversity into a global biodiversity hotspot.",
    // history sources: 「中心之中心」出自 Carpenter & Springer 2005；珊瑚物种主流口径 300（Rappler）/ 338（CI），原写「逾 400」已改为「逾 300」；36 处海洋保护区（巴丹加斯 24 + 东民都洛 12）；Mission Blue Hope Spot **2023-07-21** 认定（missionblue.org），原写 2010 已改。⚠️ 红线自查：未涉南海主权 / 海域划界。核实 2026-09-11
    history:
      "The Verde Island Passage hosts 36 marine protected areas; it was designated a \"Hope Spot\" by the international ocean conservation organisation Mission Blue in 2023, and remains a priority area for marine ecological conservation in the Philippines.",
  },
};
