import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 / 斯里兰卡（南亚次区域第一国；联合国 M49 归南亚）
// 零争议红线：亚当桥 / 保克海峡 / 马纳尔岛与马纳尔湾一带、卡恰提武岛一律不收、不作锚点、不入 bbox；
// 北部省（贾夫纳、基利诺奇、穆莱蒂武、瓦武尼亚、马纳尔）本批不收（英国外交部旅行建议 2026-05：北部仍有排雷区与高度安全区）；
// 东部省条目只写地貌、水文与海岸类型；1983–2009 年事件、族群含义、宗教评价、马哈韦利 / 加尔奥耶工程的移民定居叙事、
// 军事与港口设施（亭可马里、汉班托塔等）、2022 年经济危机一律不写；亚当峰只写「多个宗教的信徒前来朝圣」与朝圣季。
// 骨架（统计局《Statistical Abstract 2025》第 1 章，1 级）：中南部是锚形的中央山地（最高皮杜鲁塔拉格勒 2,524 m），
// 周围是海拔约 300 m 以下、占全岛约三分之二的平原，平原上散布残丘；103 个天然流域的河流自中央高地呈放射状流向海岸；
// 岛上没有天然湖泊（FAO 1988，2 级），湖面是古代与现代水库和滨海潟湖；西南与东北海岸以岬湾为主，西北与东南以潟湖、沙坝、沙丘为主（海岸局 2024，1 级）。
// 主要来源：统计局第 1 章与表 1.1（1 级）、中部高地世界遗产申报文本（缔约国 2008，1 级）、UNESCO 世界遗产 1203 / 405 / 202 与预备名录 7008、
// 海岸保护与海岸资源管理局《海岸带管理计划 2024》（1 级）、拉姆萨尔 RSIS 导出表（1 级）、野生动物保护局官网（1 级）；
// FAO 水库与 AQUASTAT 文件为 2 级（1980 年代 / 2011 数据）；测绘局峰高与河长表未取到 —— 除最高峰外的峰高、全部河长只有 2–3 级。
// 乌瓦盆地（无 1 级地貌来源）以康提高原替代；锚点坐标取 OSM / Wikidata；未查到实测海拔的为取景用概略值（注明）。
// ============================================================

const CENTRAL_HIGHLANDS: TerrainEntry = {
  id: "central-highlands-sri-lanka",
  nameZh: "斯里兰卡中部高地",
  nameEn: "Central Highlands of Sri Lanka",
  category: "mountain_system",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "皮杜鲁塔拉格勒山", lon: 80.77365, lat: 7.00095, elevation: 2524, kind: "peak" },
  bbox: [80.40, 6.60, 81.15, 7.20],
  axis: [[80.50, 6.81], [81.11, 6.93]],
  viewScale: 1.6,
  label: { lon: 80.780, lat: 7.150, rotation: 0 },
  source: "斯里兰卡中部高地（非越南西原）：最高峰皮杜鲁塔拉格勒 2,524 m，中央山地核心是山峰、高原、盆地、山脊、河谷与陡崖的复合体，世界尽头是南部山墙边缘发育最好的陡崖之一；平原约占全岛三分之二；康提 488 m 年均约 24.5 °C、努沃勒埃利耶 1,895 m 约 15.8 °C；西南坡局部年雨量逾 5,000 mm（统计局《Statistical Abstract 2025》第 1 章，1 级）；1,000 m 以上的高地只占国土约 3%，主体大致呈锚形，纳克勒斯山被康提高原与杜姆巴拉谷隔开；高地系变质沉积岩与紫苏花岗片麻岩，经历多期变形，长期剥蚀据估计移去逾 3,000 m 岩石、风化产物富集成宝石砂矿；全国几乎所有河流发源于此（中部高地世界遗产申报文本 2008，1 级）；中部高地 2010 年列入世界遗产，由峰野保护区、霍顿平原国家公园、纳克勒斯保护林三部分组成，合计 56,844 ha（UNESCO whc 1203，1 级）。英制旧测 8,296 ft（1911 年版大英百科，3 级）不写；峰顶设施不写；锚点 OSM node 2035834190（研究子代理事实表 2026-09-15）",
};

const DRY_ZONE_PLAIN: TerrainEntry = {
  id: "sri-lanka-dry-zone-plain",
  nameZh: "北中部干旱带平原",
  nameEn: "North-Central Dry Zone Plain",
  category: "plain",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "阿努拉德普勒", lon: 80.41061, lat: 8.33498, elevation: 90, kind: "city" },
  bbox: [80.00, 7.60, 81.30, 8.75],
  viewScale: 2.0,
  label: { lon: 80.650, lat: 8.100, rotation: 0 },
  source: "环岛低地平原：中央山地被海拔约 300 m 以下、占全岛约三分之二的平原环绕，西南部窄而破碎、北部与东部宽阔平坦，平原上散布残丘（统计局第 1 章，1 级）；三级准平原中最低一级海拔 0–125 m、面积最大、占据北部与东部，该三级模型现被认为过于简化（申报文本 2008，1 级）；地貌学上称环岛准平原，河流自中央山地向外穿过它入海；古代大型灌溉水库几十座、岛上遍布称为 tank / wewa 的人工湖塘（FAO 1988，2 级转引）；干旱区局部年雨量低于 1,000 mm（统计局，1 级）。本条 bbox 北界 8.75°N，不含北部省；锚点阿努拉德普勒只作地名参照（OSM node 566574942），海拔为取景用概略值；古代文明规模、衰落原因与族群起源叙述不写（研究子代理事实表 2026-09-15）",
};

const MAHAWELI_RIVER: TerrainEntry = {
  id: "mahaweli-river",
  nameZh: "马哈韦利河",
  nameEn: "Mahaweli River",
  category: "river",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "马纳姆皮蒂亚一带河段", lon: 81.11192, lat: 7.90885, elevation: 30, kind: "meander" },
  bbox: [80.95, 7.25, 81.30, 8.55],
  axis: [[80.99, 7.25], [81.24, 8.49]],
  viewScale: 1.4,
  label: { lon: 81.180, lat: 7.800, rotation: 70 },
  source: "马哈韦利河（Mahaweli Ganga）：在全国河流中长度与流域面积都居首，比其他任意两条河的长度之和还长（统计局第 1 章，1 级）；长约 335 km、流域约 10,448 km²，是全岛放射状水系的例外，出中央山地后自米尼佩向北流约 90 km 到马纳姆皮蒂亚，再经若干汊流约 70 km 到东海岸（FAO AQUASTAT 2011，2 级；流域面积另有 10,237 km² 一说，FAO 1988 转引测绘局 1983）；经康提高原穿过山区，从发源的西南部流到东部，纳克勒斯山全部水系属马哈韦利水系（申报文本 2008，1 级）；河口开向科迪亚尔湾与坦巴拉加姆湾（海岸局 2024，1 级）；泛滥平原湖（villu）分布在马哈韦利流域与西部卡拉河、莫德拉加姆河流域（FAO 1988，2 级）。开发工程的移民定居叙事不写；锚点为马纳姆皮蒂亚镇参照点（OSM node 2821280145），海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const HORTON_PLAINS: TerrainEntry = {
  id: "horton-plains",
  nameZh: "霍顿平原",
  nameEn: "Horton Plains",
  category: "plateau",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "世界尽头崖", lon: 80.79422, lat: 6.77807, elevation: 2100, kind: "escarpment" },
  bbox: [80.76, 6.77, 80.84, 6.84],
  viewScale: 1.3,
  label: { lon: 80.800, lat: 6.850, rotation: 0 },
  source: "霍顿平原：大部分是缓波状高原台地，位于锚形中央山地弧形部分的南缘，是全国最高的台地、平均海拔 2,200 m；向西升到吉里加尔波塔峰（2,395 m）、向东北升到托图波拉峰（2,357 m），向南是落差近 1,000 m 的陡崖「南墙」，从世界尽头可望到低地；1988-03-16 宣布为国家公园；卫星影像调查显示草地只占约三分之一；年均温 13–15 °C，夜间可降到 0 °C 以下；瓦拉韦河源头在霍顿平原（中部高地世界遗产申报文本 2008，1 级）；霍顿平原国家公园为 2010 年中部高地世界遗产组成部分（UNESCO whc 1203，1 级）。面积 3,160 ha（UNESCO 登记）/ 3,109 ha（申报文本）两说；落差「约 870 m」为旅游站说法不用；锚点 OSM way 408035002（崖线几何中心），崖顶海拔未取到，landmark 海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const ADAMS_PEAK_RANGE: TerrainEntry = {
  id: "adams-peak-range",
  nameZh: "亚当峰山地（斯里帕达）",
  nameEn: "Adam's Peak Range (Sri Pada)",
  category: "mountain_system",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "亚当峰（斯里帕达）", lon: 80.49939, lat: 6.80942, elevation: 2243, kind: "peak" },
  bbox: [80.35, 6.72, 80.72, 6.90],
  viewScale: 1.3,
  label: { lon: 80.520, lat: 6.910, rotation: 0 },
  source: "亚当峰（僧伽罗语 Sri Pada，泰米尔语 Sivanolipatha Malai）与峰野保护区：锥形山顶收成尖峰，海拔 2,243 m，平均海拔约 1,830 m，地形极崎岖、陡崖约占面积一半；紫苏花岗片麻岩与大理岩、石英岩互层出露在主要陡崖上；覆盖凯拉尼河与卡鲁河上游集水区；大部分山地 1940 年宣布为保护区，与霍顿平原国家公园边界相连；山顶有一处形似足印的凹痕，多个宗教的信徒前来朝圣，朝圣季自 12 月月圆日至次年 5 月（中部高地世界遗产申报文本 2008，1 级）；峰野保护区为 2010 年中部高地世界遗产组成部分（UNESCO whc 1203，1 级；面积 22,379 ha 登记值 / 20,596 ha 申报文本两说）。各宗教对足印的说法、最高级引语不写；锚点 OSM node 254036900（研究子代理事实表 2026-09-15）",
};

const KNUCKLES_RANGE: TerrainEntry = {
  id: "knuckles-range",
  nameZh: "纳克勒斯山脉",
  nameEn: "Knuckles Range",
  category: "mountain_system",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "贡巴尼亚峰", lon: 80.74829, lat: 7.45511, elevation: 1906, kind: "peak" },
  bbox: [80.68, 7.33, 80.92, 7.60],
  axis: [[80.68, 7.33], [80.90, 7.58]],
  viewScale: 1.2,
  label: { lon: 80.800, lat: 7.620, rotation: 0 },
  source: "纳克勒斯山脉（僧伽罗语 Dumbara Kanduvetiya）：位于康提东北，被康提高原与杜姆巴拉谷与中央山地隔开、地质同源；主脉西南—东北走向，山块内 35 座峰、14 座逾 1,500 m，远看像握拳指节的一组 5 座峰、山名由此而来，最高两峰为贡巴尼亚 1,906 m 与纳克勒斯峰 1,863 m；西侧支流沿倾斜坡下切、东北侧是高达数百米的垂直岩壁，倾斜坡与陡崖交替是整个山块的特征；主体是平卧褶皱、后期叠加直立褶皱；年雨量 2,540–5,080 mm，大风致植被矮化，全部水系属马哈韦利水系；2000 年 5 月宣布为纳克勒斯保护林（申报文本 2008，1 级，转引 Cooray 1998）；2010 年作为中部高地世界遗产组成部分列入，31,305 ha（UNESCO whc 1203，1 级）。OSM 峰高 1,903 m 与申报文本差 3 m；锚点 OSM node 7090910868（研究子代理事实表 2026-09-15）",
};

const SINHARAJA: TerrainEntry = {
  id: "sinharaja-forest",
  nameZh: "辛哈拉加森林岭谷",
  nameEn: "Sinharaja Forest",
  category: "hills",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "穆拉韦拉峰", lon: 80.42715, lat: 6.42411, elevation: 735, kind: "peak" },
  bbox: [80.35, 6.35, 80.62, 6.46],
  axis: [[80.36, 6.40], [80.60, 6.43]],
  viewScale: 1.3,
  label: { lon: 80.480, lat: 6.490, rotation: 0 },
  source: "辛哈拉加森林保护区：位于西南低地湿润区，面积 8,864 ha、海拔 300–1,170 m；狭长的起伏地带由一系列山脊与河谷组成、溪流纵横，南界注入金河、北侧注入卡鲁河；近 60 年年雨量 3,614–5,006 mm；保护区内有位于西南组与高地组两种岩类过渡带上的基性岩带；1875 年大部分宣布为森林保护区，1978 年为生物圈保护区，1988 年列为国家遗产荒野区并列入世界遗产，凭许可证进入（UNESCO whc 405，1 级）。最高峰名与坐标无 1–2 级来源，不写；「最后一片大面积原始低地雨林」为排他句，不写；锚点穆拉韦拉峰 735 m 取 OSM node 2711676241（研究子代理事实表 2026-09-15）",
};

const KANDY_PLATEAU: TerrainEntry = {
  id: "kandy-plateau",
  nameZh: "康提高原",
  nameEn: "Kandy Plateau",
  category: "plateau",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "康提", lon: 80.63504, lat: 7.29312, elevation: 488, kind: "city" },
  bbox: [80.52, 7.18, 80.78, 7.40],
  viewScale: 1.2,
  label: { lon: 80.640, lat: 7.420, rotation: 0 },
  source: "康提高原：海拔约 500 m，在三级准平原模型里属中间一级；它与杜姆巴拉谷一起把纳克勒斯山与中央山地隔开，马哈韦利河经康提高原穿过山区（中部高地世界遗产申报文本 2008，1 级）；康提海拔 488 m、年均气温约 24.5 °C（统计局第 1 章，1 级）。本条来源只有这两处，正文少写数字；康提城作为世界文化遗产只作地名参照，宗教评价不写；锚点 OSM node 2908772560（研究子代理事实表 2026-09-15；替代原候选乌瓦盆地，后者无 1 级地貌来源）",
};

const KELANI_RIVER: TerrainEntry = {
  id: "kelani-river",
  nameZh: "凯拉尼河",
  nameEn: "Kelani River",
  category: "river",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "汉韦拉一带河段", lon: 80.08171, lat: 6.90884, elevation: 15, kind: "meander" },
  bbox: [79.86, 6.85, 80.55, 7.05],
  axis: [[79.87, 6.98], [80.50, 6.87]],
  viewScale: 1.2,
  label: { lon: 80.200, lat: 7.050, rotation: 0 },
  source: "凯拉尼河（Kelani Ganga，中文维基作「迦尼耶河」）：峰野保护区覆盖凯拉尼河与卡鲁河的上游集水区（申报文本 2008，1 级）；凯拉尼河是河道型河口的例子（海岸局 2024，1 级）；流域约 2,278 km²（FAO 1988 转引测绘局 1983，2 级）/ 2,292 km²（FAO AQUASTAT 2011，2 级），径流系数约 64%，卡鲁、凯拉尼、金、本托塔、尼尔瓦拉五个流域只占国土 13%、有全国约 38% 的可更新水资源（FAO，2 级）。长度约 145 km 只有 3 级来源，正文不写；河口城市、工业区与洪灾伤亡不写；锚点汉韦拉镇参照点（OSM node 1843491184），海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const WALAWE_RIVER: TerrainEntry = {
  id: "walawe-river",
  nameZh: "瓦拉韦河",
  nameEn: "Walawe River",
  category: "river",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "乌达瓦拉维水库", lon: 80.84402, lat: 6.47724, elevation: 90, kind: "lake" },
  bbox: [80.75, 6.10, 81.05, 6.82],
  axis: [[80.79, 6.80], [81.02, 6.11]],
  viewScale: 1.3,
  label: { lon: 80.950, lat: 6.450, rotation: -70 },
  source: "瓦拉韦河（Walawe Ganga）：源头在霍顿平原，穿过峰野山地东段（申报文本 2008，1 级）；属发源于中央山地边缘、穿过环岛准平原与海岸平原入海的一类河流，坡降大、流量变化大（FAO 1988 转引 Erb 1984，2 级）；流域约 2,442 km²；瓦拉韦河灌溉工程修建乌达瓦拉维水库等主要水库（FAO 1988，2 级）；乌达瓦拉维等国家公园的设立目的是保护大型灌溉工程的集水区（野生动物保护局官网，1 级）。河长 138 km 只有 3 级来源不写；乌达瓦拉维水库面积同一份 FAO 文件三个值、完工与蓄水年份矛盾，正文不写面积与年份；河口港口不写；锚点 OSM relation 7315324（几何中心），海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const KODDIYAR_BAY: TerrainEntry = {
  id: "koddiyar-bay",
  nameZh: "科迪亚尔湾",
  nameEn: "Koddiyar Bay",
  category: "coast",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "科迪亚尔湾", lon: 81.2401, lat: 8.48861, elevation: 0, kind: "delta" },
  bbox: [81.15, 8.40, 81.32, 8.62],
  viewScale: 1.2,
  label: { lon: 81.240, lat: 8.380, rotation: 0 },
  source: "科迪亚尔湾（亭可马里湾南部）：马哈韦利河口开向科迪亚尔湾与坦巴拉加姆湾，坦巴拉加姆湾是科迪亚尔湾向西的湾汊、几乎被沙坝隔断、东北季风期部分冲开；西南与东北两段海岸是由岩质岬角护住的沙湾构成的横向型海岸（海岸保护与海岸资源管理局《海岸带管理计划 2024》，1 级）。海底峡谷数字只有 3 级来源，不写；海岸局海啸段「科迪亚尔（安帕赖县）15 m」县名疑误，不用；「印度洋最完美的天然良港」引语不写；港口、海军与油库设施一律不写，锚点放在湾内水面而非内港（OSM node 4000075604）（研究子代理事实表 2026-09-15）",
};

const BATTICALOA_LAGOON: TerrainEntry = {
  id: "batticaloa-lagoon",
  nameZh: "拜蒂克洛潟湖",
  nameEn: "Batticaloa Lagoon",
  category: "coast",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "拜蒂克洛潟湖", lon: 81.6942, lat: 7.7356, elevation: 0, kind: "lake" },
  bbox: [81.65, 7.40, 81.86, 7.80],
  axis: [[81.66, 7.78], [81.83, 7.41]],
  viewScale: 1.2,
  label: { lon: 81.600, lat: 7.600, rotation: 0 },
  source: "拜蒂克洛潟湖：与普塔勒姆、尼甘布同属盆地型河口（河水先注入较浅的盆地再入海）；河口沙嘴不稳定会移位，拜蒂克洛河口的入海口已从原位置向北移了约 5 km；潟湖与河口是海草床的主要分布地之一；2004 年海啸在拜蒂克洛最大淹没距离约 2 km（海岸局 2024，1 级）。潟湖本身面积、长度只有 3 级来源，不写；县级「潟湖与河口合计」不是本潟湖面积，不写；近代事件与城市族群构成不写；锚点取拜蒂克洛市参照点（OSM node 3668151968，潟湖很窄、Wikidata 点未确认落水）（研究子代理事实表 2026-09-15）",
};

const PUTTALAM_LAGOON: TerrainEntry = {
  id: "puttalam-lagoon",
  nameZh: "普塔勒姆潟湖与卡尔皮蒂亚半岛",
  nameEn: "Puttalam Lagoon and Kalpitiya",
  category: "coast",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "卡尔皮蒂亚", lon: 79.76615, lat: 8.23681, elevation: 3, kind: "dune" },
  bbox: [79.70, 7.95, 79.90, 8.40],
  axis: [[79.72, 8.38], [79.83, 8.00]],
  viewScale: 1.2,
  label: { lon: 79.950, lat: 8.200, rotation: 0 },
  source: "普塔勒姆潟湖：盆地型河口的例子，卡拉河的河道型河口开向荷兰湾；卡尔皮蒂亚是沙坝与沙嘴伴生大片沙丘的例子，有高逾 5 m 的横向原生沙丘与高逾 3 m 的次生迁移沙丘；卡尔皮蒂亚半岛以西近海有斑块珊瑚礁（海岸局 2024，1 级；同段北延部分不写）；潟湖面积约 32,750 ha，北端自然通海，水深多不超过 1–2 m，北部为正常海水盐度、南部因强蒸发而超盐；东岸低山由第三纪砂岩与石灰岩组成（IUCN / FAO 普塔勒姆潟湖环境概况约 2011，2 级）。bbox 北界 8.40°N 不伸向马纳尔方向；锚点距马纳尔市约 84 km；电厂与登陆传说不写；锚点 OSM node 1150550162（研究子代理事实表 2026-09-15）",
};

const YALA_COAST: TerrainEntry = {
  id: "yala-coast",
  nameZh: "雅拉海岸",
  nameEn: "Yala Coast",
  category: "coast",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "帕塔南加拉岩", lon: 81.49831, lat: 6.33865, elevation: 20, kind: "escarpment" },
  bbox: [81.25, 6.20, 81.65, 6.62],
  axis: [[81.25, 6.20], [81.65, 6.45]],
  viewScale: 1.3,
  label: { lon: 81.450, lat: 6.550, rotation: 0 },
  source: "雅拉：20 世纪初与威尔帕图一起划为森林保护区作试验，1937 年《动植物保护条例》通过后陆续宣布野生动物保护区；雅拉与威尔帕图是全国较早设立的国家公园；雅拉严格自然保护区是全国三处严格自然保护区之一（野生动物保护局官网，1 级）；全国显著的沙丘在东北、西北与东南海岸，东南一段从安巴兰托塔延伸到安帕赖县的桑加曼坎德角；西北与东南海岸以潟湖、沙坝、沙洲与沙嘴为主、部分地段因淤积向海推进；2004 年海啸在基林达一带浪高约 10 m（海岸局 2024，1 级；「最靠近赤道的最长沙丘带」为夸张引语不写）。国家公园面积与设立日期只有 3 级来源不写；保护区内宗教遗址与近代事件不写；锚点帕塔南加拉岩（OSM relation 18215753），高度与岩性未取到，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const SOUTHERN_COAST: TerrainEntry = {
  id: "southern-coast-sri-lanka",
  nameZh: "斯里兰卡南部岬湾海岸",
  nameEn: "Southern Coast of Sri Lanka",
  category: "coast",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "栋德拉", lon: 80.58936, lat: 5.92810, elevation: 5, kind: "city" },
  bbox: [80.10, 5.90, 80.85, 6.20],
  axis: [[80.10, 6.18], [80.85, 6.00]],
  viewScale: 1.4,
  label: { lon: 80.450, lat: 6.250, rotation: 0 },
  source: "南部海岸（加勒—栋德拉—坦加勒一带）：全岛纬度下限约 5°55′N（统计局第 1 章，1 级）；西南与东北海岸是由岩质岬角护住的一连串沙湾构成的横向型海岸，西南海岸还有许多形状曲折的湖泊与潟湖系统；约 2% 的海岸线有岸礁，希卡杜瓦、乌纳瓦图纳与鲁马萨拉是西南海岸主要岸礁；栋德拉至安巴兰托塔之间有若干沙坝海滩，雷卡瓦、科斯戈达的海滩把潟湖与海隔开；西南海岸部分地段在后退，原因是海浪侵蚀叠加河沙开采与岸礁破坏；2004 年海啸在佩拉利亚淹没约 2 km 内陆、浪高约 8 m（海岸局 2024，1 级）。栋德拉角精确岬角点未取到，锚点为栋德拉镇（OSM node 77369078）；正文写「岛的南端一带」；港口与伤亡数字不写（研究子代理事实表 2026-09-15）",
};

const WILPATTU: TerrainEntry = {
  id: "wilpattu-villus",
  nameZh: "威尔帕图湖群",
  nameEn: "Wilpattu Villus",
  category: "plain",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "昆布克维拉", lon: 80.00683, lat: 8.42059, elevation: 20, kind: "lake" },
  bbox: [79.85, 8.20, 80.30, 8.60],
  viewScale: 1.3,
  label: { lon: 80.080, lat: 8.320, rotation: 0 },
  source: "威尔帕图（Willu-pattu）：拉姆萨尔湿地「威尔帕图湿地群」2013-02-02 指定、165,800 ha，覆盖整个威尔帕图国家公园（1938 年宣布），公园内识别出约 205 处天然与人工水体，最大特色是众多 villu —— 天然的、沙质边缘的积雨洼地，面积 10–160 ha、含盐量各不相同（拉姆萨尔 RSIS 2095，1 级）；20 世纪初与雅拉一起划为森林保护区作试验（野生动物保护局官网，1 级）；FAO（1988，2 级）对 villu 的定义是与河道相连的泛滥平原湖，与拉姆萨尔定义不同，正文分清。国家公园面积只有 3 级来源不写；bbox 北界 8.60°N 不越过莫德拉加姆河；周边土地与安置争议不写；锚点 OSM way 278804757（几何中心），距马纳尔市约 63 km，海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const SENANAYAKE_SAMUDRA: TerrainEntry = {
  id: "senanayake-samudra",
  nameZh: "塞纳纳亚克水库",
  nameEn: "Senanayake Samudraya",
  category: "lake",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "塞纳纳亚克水库", lon: 81.47993, lat: 7.18586, elevation: 70, kind: "lake" },
  bbox: [81.38, 7.08, 81.58, 7.30],
  viewScale: 1.2,
  label: { lon: 81.480, lat: 7.330, rotation: 0 },
  source: "塞纳纳亚克水库（加尔奥耶）：加尔河多用途工程与水库 1952 年启动，据 FAO（2011）是斯里兰卡第一个大型多用途工程，库容约 0.95 km³；坝高 FAO 写 34 m、其他资料写 140 ft（约 43 m），两说不一，正文不写（当批核实 2026-09-15）（FAO AQUASTAT 2011，2 级）；集水面积 983 km²、水面约 7,680 ha（FAO 1988，2 级；同文件另有 7,825 ha 渔业统计口径）；加尔奥耶等国家公园的设立目的是保护大型灌溉工程的集水区（野生动物保护局官网，1 级）。「全岛最大水库」是 1988 年判断，现状排名未知不写；工程移民定居叙事不写；锚点 OSM relation 5427835（几何中心），海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const RITIGALA: TerrainEntry = {
  id: "ritigala",
  nameZh: "利蒂加拉山",
  nameEn: "Ritigala",
  category: "inselberg",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "利蒂加拉峰", lon: 80.65684, lat: 8.10902, elevation: 766, kind: "peak" },
  bbox: [80.62, 8.06, 80.70, 8.15],
  label: { lon: 80.660, lat: 8.170, rotation: 0 },
  source: "利蒂加拉：孤立山丘，是突出的侵蚀残余体，从周围准平原的 180 m 升到 768 m；山体长 6.5 km，被浅的马哈德加拉峡谷分为南北两块；马尔瓦图河发源于此流向西北，是西北干旱区重要的集水区之一；1941-11-07 宣布为严格自然保护区、1,528.2 ha，禁止进入；年均温 27.3 °C、年雨量约 1,500 mm；植被有清楚的垂直分带，山顶与上坡是矮林；山中有古代寺院遗址（野生动物保护局官网严格自然保护区页，1 级）；2026 年列入 UNESCO 世界遗产预备名录（whc 预备名录 7008，1 级）。高程 768 m（野生动物保护局）/ 766 m（OSM）/ 753 m（1982 年年鉴转引，3 级）多说；宗教评价与传说不写；锚点 OSM node 3723116036（研究子代理事实表 2026-09-15）",
};

const SIGIRIYA: TerrainEntry = {
  id: "sigiriya-rock",
  nameZh: "锡吉里耶岩",
  nameEn: "Sigiriya Rock",
  category: "inselberg",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "锡吉里耶岩顶", lon: 80.75993, lat: 7.95666, elevation: 363, kind: "peak" },
  bbox: [80.74, 7.94, 80.78, 7.98],
  label: { lon: 80.760, lat: 7.990, rotation: 0 },
  source: "锡吉里耶：平原上散布的残丘，当地名如 Ethugala、Ibbagala、锡吉里耶（统计局第 1 章，1 级）；遗址位于一座高约 180 m 的岩峰陡坡与顶部，岩峰从四面俯视丛林；「锡吉里耶古城」1982 年列入世界遗产（UNESCO whc 202，1 级；UNESCO 称花岗质岩峰）；岩体剖面为片麻岩（锡吉里耶博物馆剖面图转述，3 级）。「古火山岩浆栓」说法无地质依据，不写；岩性正文只写「结晶岩」；相对高度约 180 m 与岩顶海拔 363 m（OSM）不要混；人物定性不写；锚点 OSM node 4366143463（研究子代理事实表 2026-09-15）",
};

const MINNERIYA_TANK: TerrainEntry = {
  id: "minneriya-tank",
  nameZh: "明内里耶水库",
  nameEn: "Minneriya Tank",
  category: "lake",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "明内里耶水库", lon: 80.87634, lat: 8.02357, elevation: 90, kind: "lake" },
  bbox: [80.83, 7.97, 80.92, 8.07],
  label: { lon: 80.880, lat: 8.090, rotation: 0 },
  source: "明内里耶水库（Minneriya Wewa）：马哈韦利河支流安班河上的埃拉赫拉引水堰始建于公元 1 世纪、3 世纪扩建，向明内里耶水库供水；20 世纪 30 年代中期（FAO 写 1935，另有资料写 1934 年启动）明内里耶水库的修复被视为近代有计划开发干旱区的起点；水面约 2,550 ha（1976–84 渔业统计口径）（FAO 1988 转引，2 级；同段移民叙事不写）；「卡乌杜拉—明内里耶」是全国两处丛林走廊之一（野生动物保护局官网，1 级）。水库始建者正文写「3 世纪扩建」而不写「修建」；国家公园面积与设立日期只有 3 级来源不写；古代王的功绩评价不写；锚点 OSM relation 5683597（几何中心），海拔为取景用概略值（研究子代理事实表 2026-09-15）",
};

const NEGOMBO_LAGOON: TerrainEntry = {
  id: "negombo-lagoon",
  nameZh: "尼甘布潟湖",
  nameEn: "Negombo Lagoon",
  category: "coast",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "尼甘布潟湖", lon: 79.85, lat: 7.15, elevation: 0, kind: "lake" },
  bbox: [79.83, 7.00, 79.90, 7.22],
  viewScale: 1.2,
  label: { lon: 79.930, lat: 7.150, rotation: 0 },
  source: "尼甘布潟湖：盆地型河口的例子；河口口门处季节性堆积沙洲，是沙嘴与河口伴生的例子；尼甘布潟湖是海草床分布地之一（海岸局 2024，1 级）。潟湖面积无 1–2 级来源不写；南侧穆图拉贾韦拉湿地只有 3 级来源，正文只作方位一笔、不写面积与名次；电站、油库与填海开发不写；机场只作方位参照；锚点取 Wikidata Q4315972 概略点（研究子代理事实表 2026-09-15）",
};

const BUNDALA: TerrainEntry = {
  id: "bundala-lagoons",
  nameZh: "邦德拉潟湖群",
  nameEn: "Bundala Lagoons",
  category: "coast",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "邦德拉潟湖群", lon: 81.20089, lat: 6.19779, elevation: 0, kind: "salt-lake" },
  bbox: [81.12, 6.12, 81.28, 6.24],
  label: { lon: 81.200, lat: 6.270, rotation: 0 },
  source: "邦德拉：1990-06-15 指定为拉姆萨尔湿地（6,210 ha），由水道相连的四个浅咸水潟湖与盐田组成，伴有沼泽、沙丘与灌丛，是南部迁徙涉禽的重要越冬地，人类活动包括制盐与渔业（拉姆萨尔 RSIS 487，1 级；导出表表头坐标录入错误，用正文坐标 06°10′N 081°12′E）；邦德拉生物圈保护区 2005 年列入人与生物圈网络，国家公园为核心区、含四个咸水潟湖（UNESCO MAB，1 级）。国家公园现状面积多次重新公告，正文不写；「最重要的越冬地」不写；锚点 OSM relation 5403980 中心（研究子代理事实表 2026-09-15）",
};

const KUMANA: TerrainEntry = {
  id: "kumana-wetlands",
  nameZh: "库马纳湿地群",
  nameEn: "Kumana Wetlands",
  category: "coast",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "库马纳湖", lon: 81.70545, lat: 6.52321, elevation: 5, kind: "lake" },
  bbox: [81.62, 6.48, 81.82, 6.80],
  viewScale: 1.2,
  label: { lon: 81.720, lat: 6.830, rotation: 0 },
  source: "库马纳湿地群：2010-10-29 指定为拉姆萨尔湿地、19,011 ha，位于安帕赖县，范围在库马纳国家公园与帕纳马—库敦比加拉保护区内，由潟湖、河口、灌溉水库、红树林、盐沼等滨海湿地组成，其间穿插沙丘、灌丛与森林，三种海龟在此觅食（拉姆萨尔 RSIS 1931，1 级）；帕纳马的海滩是把潟湖与沼泽隔离于海的沙坝海滩的例子；东南沙丘带东端到桑加曼坎德角（海岸局 2024，1 级）。国家公园面积与设立日期只有 3 级来源不写；古代岩洞与近代事件不写；锚点 OSM way 711110890（几何中心）（研究子代理事实表 2026-09-15）",
};

const MADU_GANGA: TerrainEntry = {
  id: "madu-ganga",
  nameZh: "马杜河湿地",
  nameEn: "Madu Ganga",
  category: "coast",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "马杜河", lon: 80.05548, lat: 6.28284, elevation: 0, kind: "lake" },
  bbox: [80.02, 6.24, 80.09, 6.32],
  label: { lon: 80.060, lat: 6.340, rotation: 0 },
  source: "马杜河：2003-12-11 指定为拉姆萨尔湿地、915 ha；一个经狭窄水道通海的红树林潟湖，湖内有 15 座大小不一的岛（部分有人居住），由马杜河与较小的兰东贝湖两片浅水体经两条窄水道相连组成，岛上与岸边保存较好的红树林，雨季蓄洪（拉姆萨尔 RSIS 1372，1 级；RIS 最近更新 2003 年）；河口受椰壳沤麻影响而退化（海岸局 2024，1 级）。古寺只一笔、不写宗教内容；锚点 OSM relation 2034083（几何中心）（研究子代理事实表 2026-09-15）",
};

const PASIKUDAH: TerrainEntry = {
  id: "pasikudah-bay",
  nameZh: "帕西库达湾",
  nameEn: "Pasikudah Bay",
  category: "coast",
  regionId: "asia",
  country: "sri-lanka",
  landmark: { name: "帕西库达海滩", lon: 81.56900, lat: 7.92940, elevation: 0, kind: "escarpment" },
  bbox: [81.54, 7.90, 81.60, 7.95],
  label: { lon: 81.570, lat: 7.970, rotation: 0 },
  source: "帕西库达：东海岸已知的岸礁之一；西南、东、北海岸都有紧贴岸边、通常以岩石为核生长的岸礁，约占海岸线 2%；帕西库达—卡尔库达一带珊瑚礁受破坏性捕捞与沉积的压力为中等；2004 年海啸在邻近的普奈库达浪高约 10 m（海岸局 2024，1 级）。海湾水深、礁坪宽度无来源，「退潮可走很远」不写具体距离；旅游开发与土地问题、近代事件不写；锚点 OSM way 179218768（海滩几何中心）（研究子代理事实表 2026-09-15）",
};

export const TERRAINS: TerrainEntry[] = [
  CENTRAL_HIGHLANDS, DRY_ZONE_PLAIN, MAHAWELI_RIVER, HORTON_PLAINS,
  ADAMS_PEAK_RANGE, KNUCKLES_RANGE, SINHARAJA, KANDY_PLATEAU,
  KELANI_RIVER, WALAWE_RIVER, KODDIYAR_BAY, BATTICALOA_LAGOON,
  PUTTALAM_LAGOON, YALA_COAST, SOUTHERN_COAST, WILPATTU,
  SENANAYAKE_SAMUDRA, RITIGALA, SIGIRIYA, MINNERIYA_TANK,
  NEGOMBO_LAGOON, BUNDALA, KUMANA, MADU_GANGA,
  PASIKUDAH,
];
