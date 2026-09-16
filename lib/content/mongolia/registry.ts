import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 — 蒙古
// ============================================================

const MONGOL_ALTAI: TerrainEntry = {
  id: "mongol-altai",
  nameZh: "蒙古阿尔泰山",
  nameEn: "Mongol Altai Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "呼依滕峰（友谊峰）", lon: 87.8567, lat: 49.1289, elevation: 4374, kind: "peak" },
  bbox: [87.5, 45.5, 97.5, 49.4],
  axis: [[87.86, 49.13], [96.0, 45.7]],
  viewScale: 1.6,
  label: { lon: 92.0, lat: 47.5, rotation: -18 },
  source: "呼依滕峰（Khüiten Peak）：蒙古全国最高点，海拔4374米，位于蒙俄中三国交界的塔王博格达（Tavan Bogd，五峰）山群，行政属巴彦乌列盖省；山脉沿蒙古西部边境呈西北—东南走向延伸约900公里（Wikipedia/discoveraltai.com WebSearch 2026）",
};

const KHANGAI_MOUNTAINS: TerrainEntry = {
  id: "khangai-mountains",
  nameZh: "杭爱山",
  nameEn: "Khangai Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "敖特冈腾格尔峰", lon: 97.033, lat: 47.36, elevation: 4021, kind: "peak" },
  bbox: [95.5, 46.0, 102.5, 49.0],
  axis: [[95.7, 48.6], [102.3, 46.3]],
  viewScale: 1.5,
  label: { lon: 99.0, lat: 47.7, rotation: -20 },
  source: "杭爱山：蒙古中部主要山系之一，首都乌兰巴托以西约400公里；最高峰敖特冈腾格尔峰位于扎布汗省，海拔各测量口径在4008至4031米之间（不同年代地形图测法差异），是杭爱山脉唯一保留永久冰川的山峰（Wikipedia/PeakVisor WebSearch 2026）",
};

const KHENTII_MOUNTAINS: TerrainEntry = {
  id: "khentii-mountains",
  nameZh: "肯特山",
  nameEn: "Khentii Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "布尔汗哈勒敦山", lon: 109.033, lat: 48.75, elevation: 2340, kind: "peak" },
  bbox: [107.5, 47.5, 110.8, 49.5],
  axis: [[107.8, 49.4], [110.6, 47.7]],
  viewScale: 1.4,
  label: { lon: 108.8, lat: 48.9, rotation: -25 },
  source: "肯特山：蒙古东北部山系，鄂嫩河与克鲁伦河发源地；其中布尔汗哈勒敦山海拔2340米，2015年以“布尔汗哈勒敦圣山及其周边神圣景观”列入UNESCO世界遗产名录，是蒙古传统信仰中最受尊崇的圣山（UNESCO/Wikipedia WebSearch 2026）",
};

const GOBI_ALTAI: TerrainEntry = {
  id: "gobi-altai",
  nameZh: "戈壁阿尔泰山",
  nameEn: "Gobi Altai Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "伊赫博格德峰", lon: 100.75, lat: 44.95, elevation: 3957, kind: "peak" },
  bbox: [96.0, 43.5, 101.5, 46.0],
  axis: [[96.5, 45.6], [101.0, 44.8]],
  viewScale: 1.4,
  label: { lon: 98.8, lat: 45.2, rotation: -15 },
  source: "戈壁阿尔泰山：蒙古阿尔泰山向东南延伸至戈壁荒漠区的过渡山系，由多个孤立断块山地组成，最高峰伊赫博格德峰海拔3957米，山顶如今已无冰川、仅有季节性积雪（核实 2026-09-11，The Cryosphere 2023），是戈壁荒漠中罕见的高山生态孤岛（Wikipedia WebSearch 2026）",
};

const MONGOLIA_GOBI: TerrainEntry = {
  id: "mongolia-gobi",
  nameZh: "戈壁（蒙古）",
  nameEn: "Gobi Desert (Mongolia)",
  category: "desert",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "南戈壁省荒漠", lon: 104.5, lat: 43.2, elevation: 1200, kind: "dune" },
  bbox: [95.0, 41.6, 112.0, 46.3],
  viewScale: 2.0,
  label: { lon: 106.0, lat: 44.0, rotation: 0 },
  source: "戈壁：横跨蒙古南部与中国北部的荒漠地带，整体面积约130万平方公里，是世界上面积最大的荒漠之一，主体为砾漠而非沙漠；蒙古境内以南戈壁、东戈壁等省份为主，气候夏热冬寒、年降水仅约194毫米（中国段另见 gobi 词条，锚点取额济纳；Wikipedia/geographical.co.uk WebSearch 2026）",
};

const GREAT_LAKES_DEPRESSION: TerrainEntry = {
  id: "great-lakes-depression",
  nameZh: "大湖盆地",
  nameEn: "Great Lakes Depression",
  category: "basin",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "乌布苏湖", lon: 92.75, lat: 50.42, elevation: 759, kind: "salt-lake" },
  bbox: [87.7, 45.9, 99.1, 51.1],
  viewScale: 1.8,
  label: { lon: 93.5, lat: 48.5, rotation: 0 },
  source: "大湖盆地：蒙古西部一处内流干旱盆地，由蒙古阿尔泰山、戈壁阿尔泰山与杭爱山三面环绕，面积约26.8万平方公里，内含乌布苏湖、吉尔嘎朗图湖、哈尔乌苏湖等六个大湖（三咸三淡），是更新世古大湖的残余（IWA Publishing论文 WebSearch 2026）",
};

const UVS_LAKE: TerrainEntry = {
  id: "uvs-lake",
  nameZh: "乌布苏湖",
  nameEn: "Uvs Lake",
  category: "lake",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "乌布苏湖", lon: 92.75, lat: 50.42, elevation: 759, kind: "salt-lake" },
  bbox: [92.2, 50.1, 93.3, 50.65],
  label: { lon: 92.75, lat: 50.15, rotation: 0 },
  source: "乌布苏湖：蒙古面积最大的湖泊，面积约3350平方公里，海拔759米，是内流盆地中的高盐度浅水湖，平均水深约6米，为更新世巨大古湖萎缩后的残余；2003年与俄罗斯境内相邻保护区共同以“乌布苏盆地”列入UNESCO世界遗产名录及生物圈保护区（Wikipedia/UNESCO WebSearch 2026）",
};

const KHYARGAS_LAKE: TerrainEntry = {
  id: "khyargas-lake",
  nameZh: "吉尔嘎朗图湖",
  nameEn: "Khyargas Lake",
  category: "lake",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "吉尔嘎朗图湖", lon: 93.40, lat: 49.15, elevation: 1029, kind: "salt-lake" },
  bbox: [93.0, 48.9, 93.9, 49.4],
  label: { lon: 93.4, lat: 48.85, rotation: 0 },
  source: "吉尔嘎朗图湖：蒙古大湖盆地内一处咸水湖，经一条5公里长的人工运河与哈尔湖—艾拉格湖水系相连，是大湖盆地咸淡水湖泊链的终端（Wikipedia WebSearch 2026）",
};

const KHAR_US_LAKE: TerrainEntry = {
  id: "khar-us-lake",
  nameZh: "哈尔乌苏湖",
  nameEn: "Khar-Us Lake",
  category: "lake",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "哈尔乌苏湖", lon: 92.20, lat: 48.17, elevation: 1157, kind: "lake" },
  bbox: [91.8, 47.9, 92.7, 48.5],
  label: { lon: 92.2, lat: 47.85, rotation: 0 },
  source: "哈尔乌苏湖：蒙古大湖盆地内一处淡水湖，面积约1578平方公里，海拔约1157米，是哈尔乌苏国家公园主体，1999年列入拉姆萨尔国际重要湿地名录，是哈尔湖—多尔衮湖—艾拉格湖—吉尔嘎朗图湖水系链的最上游湖泊（Wikipedia WebSearch 2026）",
};

const KHOVSGOL_LAKE: TerrainEntry = {
  id: "khovsgol-lake",
  nameZh: "库苏古尔湖",
  nameEn: "Lake Khövsgöl",
  category: "lake",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "库苏古尔湖", lon: 100.5, lat: 51.0, elevation: 1645, kind: "lake" },
  bbox: [100.0, 50.2, 100.9, 51.5],
  viewScale: 1.2,
  label: { lon: 100.5, lat: 50.1, rotation: 0 },
  source: "库苏古尔湖：蒙古最大的淡水湖，面积各测量年份在2600至2770平方公里之间（核实 2026-09-11），最大水深267米，蓄水量约占蒙古全国淡水总量的70%、全球淡水总量的0.4%，经额吉音河（色楞格河支流）与俄罗斯贝加尔湖存在水文关联，湖区设有库苏古尔国家公园（Britannica WebSearch 2026）",
};

const TERKHIIN_TSAGAAN_LAKE: TerrainEntry = {
  id: "terkhiin-tsagaan-lake",
  nameZh: "特日和音查干湖",
  nameEn: "Terkhiin Tsagaan Lake",
  category: "lake",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "特日和音查干湖", lon: 99.70, lat: 48.19, elevation: 2060, kind: "lake" },
  bbox: [99.55, 48.05, 99.85, 48.3],
  label: { lon: 99.7, lat: 48.32, rotation: 0 },
  source: "特日和音查干湖：位于杭爱山北麓，长约16公里、宽6至10公里、平均水深20米，海拔2060米，是科尔戈火山熔岩流阻断特日和河河道后形成的堰塞湖，为贫营养型淡水湖，湖区设有科尔戈—特日和音查干湖国家公园（Wikivoyage/Wikipedia WebSearch 2026）",
};

const KHORGO_VOLCANO: TerrainEntry = {
  id: "khorgo-volcano",
  nameZh: "科尔戈火山",
  nameEn: "Khorgo Volcano",
  category: "mountain_system",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "科尔戈火山口", lon: 99.85, lat: 48.20, elevation: 2210, kind: "peak" },
  bbox: [99.75, 48.13, 99.95, 48.27],
  label: { lon: 99.85, lat: 48.10, rotation: 0 },
  source: "科尔戈火山：海拔2210米的死火山，约8000年前停止喷发，火山口直径约200米、深70至80米，北坡覆盖落叶松林，喷出的熔岩流曾阻断特日和河形成邻近的特日和音查干湖，两者共同构成科尔戈—特日和音查干湖国家公园的核心景观（Wikipedia/bumantourmongolia WebSearch 2026）",
};

const KHONGORYN_ELS: TerrainEntry = {
  id: "khongoryn-els",
  nameZh: "洪戈林额勒斯沙丘",
  nameEn: "Khongoryn Els",
  category: "desert",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "洪戈林额勒斯（歌唱沙丘）", lon: 102.183, lat: 43.75, elevation: 1700, kind: "dune" },
  bbox: [100.9, 43.55, 102.7, 43.9],
  axis: [[100.9, 43.65], [102.7, 43.8]],
  label: { lon: 101.8, lat: 43.92, rotation: 0 },
  source: "洪戈林额勒斯（又称杜特芒罕，俗称“歌唱沙丘”）：戈壁古尔班赛罕国家公园内一片沙丘带，绵延逾100公里，最高处沙丘可达约300米，因风吹过沙面产生类似引擎声的轰鸣而得名（Wikipedia/eternal-landscapes.co.uk WebSearch 2026）",
};

const BAYANZAG: TerrainEntry = {
  id: "bayanzag",
  nameZh: "巴彦扎格（燃烧的悬崖）",
  nameEn: "Bayanzag (Flaming Cliffs)",
  category: "hills",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "巴彦扎格红崖", lon: 103.75, lat: 44.13, elevation: 1250, kind: "escarpment" },
  bbox: [103.65, 44.05, 103.85, 44.20],
  label: { lon: 103.75, lat: 44.22, rotation: 0 },
  source: "巴彦扎格：南戈壁省一处红色砂岩侵蚀崖壁，因岩石在夕照下呈火焰般的橙红色而得名“燃烧的悬崖”；1923年（考察始于1922年）美国自然历史博物馆罗伊·查普曼·安德鲁斯考察队在此首次发现恐龙蛋化石（核实 2026-09-11，AMNH），是戈壁古尔班赛罕国家公园的组成部分（Wikipedia/topasiatour.com WebSearch 2026）",
};

const GURVAN_SAIKHAN: TerrainEntry = {
  id: "gurvan-saikhan",
  nameZh: "古尔班赛罕山（三美山）",
  nameEn: "Gurvan Saikhan Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "敦德赛罕山", lon: 103.95, lat: 43.58, elevation: 2825, kind: "peak" },
  bbox: [103.3, 43.35, 104.35, 43.85],
  axis: [[103.3, 43.62], [104.35, 43.55]],
  label: { lon: 103.8, lat: 43.90, rotation: 0 },
  source: "古尔班赛罕山（意为“三美”）：由西赛罕、中赛罕、东赛罕三条平行山脉组成，最高峰位于中赛罕山脉，海拔2825米；山系是戈壁古尔班赛罕国家公园（蒙古面积最大的国家公园）的主体，为岩羊、北山羊、雪豹与胡兀鹫提供栖息地（Wikipedia/Wikidata WebSearch 2026）",
};

const YOLYN_AM: TerrainEntry = {
  id: "yolyn-am",
  nameZh: "约林音峡谷（鹰谷）",
  nameEn: "Yolyn Am",
  category: "gorge",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "约林音峡谷冰川", lon: 104.02, lat: 43.68, elevation: 2500, kind: "gorge" },
  bbox: [103.95, 43.63, 104.12, 43.73],
  label: { lon: 104.02, lat: 43.75, rotation: 0 },
  source: "约林音峡谷：古尔班赛罕山中一条狭窄的深切峡谷，谷内常年积存半永久性冰层、部分年份延续至初夏方才消融；因谷内栖息胡兀鹫（蒙古语称“约尔”）而得名，又称“鹰谷”或“冰谷”，是戈壁古尔班赛罕国家公园的核心景观之一（Wikipedia WebSearch 2026）",
};

const ORKHON_VALLEY: TerrainEntry = {
  id: "orkhon-valley",
  nameZh: "鄂尔浑河谷",
  nameEn: "Orkhon Valley",
  category: "valley",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "哈拉和林（喀喇昆仑城遗址）", lon: 102.845, lat: 47.198, elevation: 1477, kind: "city" },
  bbox: [102.3, 46.85, 103.3, 47.55],
  axis: [[102.4, 46.9], [103.1, 47.5]],
  viewScale: 1.3,
  label: { lon: 102.6, lat: 46.75, rotation: 0 },
  pois: [{ name: "额尔德尼召", lon: 102.842, lat: 47.204, note: "16世纪蒙古首座藏传佛教寺院，紧邻哈拉和林遗址" }],
  source: "鄂尔浑河谷：中蒙古省境内沿鄂尔浑河两岸约12.2万公顷的牧场与考古遗迹带，包含13至14世纪蒙古帝国都城哈拉和林、回鹘汗国都城哈剌巴剌哈逊、以及额尔德尼召寺遗址，2004年以“鄂尔浑河谷文化景观”列入UNESCO世界遗产名录，游牧放牧传统延续至今（UNESCO WebSearch 2026）",
};

const ORKHON_WATERFALL: TerrainEntry = {
  id: "orkhon-waterfall",
  nameZh: "鄂尔浑瀑布（乌兰楚特噶朗瀑布）",
  nameEn: "Orkhon Waterfall (Ulaan Tsutgalan)",
  category: "gorge",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "乌兰楚特噶朗瀑布", lon: 101.99, lat: 46.79, elevation: 1900, kind: "gorge" },
  bbox: [101.90, 46.73, 102.08, 46.85],
  label: { lon: 101.99, lat: 46.87, rotation: 0 },
  source: "鄂尔浑瀑布（又称乌兰楚特噶朗瀑布）：鄂尔浑河流经杭爱山南麓一段古火山岩层时形成的瀑布，落差各口径记载在16至27米之间（较常引用数据为高约20至24米、宽约10米），下游峡谷深约22米，是蒙古境内水量最大的瀑布，约2万年前由火山活动与地震共同作用形成（Wikipedia/discovermongolia.mn WebSearch 2026）",
};

const DARIGANGA_VOLCANIC_FIELD: TerrainEntry = {
  id: "dariganga-volcanic-field",
  nameZh: "达里干嘎火山群",
  nameEn: "Dariganga Volcanic Field",
  category: "mountain_system",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "希林博格德火山", lon: 114.80, lat: 45.55, elevation: 1778, kind: "peak" },
  bbox: [113.3, 44.9, 115.3, 46.0],
  viewScale: 1.4,
  label: { lon: 114.3, lat: 45.2, rotation: 0 },
  pois: [{ name: "阿拉坦敖包（金敖包）", lon: 113.90, lat: 45.30, note: "达里干嘎地区最受尊崇的圣山死火山，海拔1354米，1913年起被奉为神山" }],
  source: "达里干嘎火山群：蒙古东南部苏赫巴托尔省一处第四纪火山场，散布逾200座渣锥与大面积熔岩流，覆盖面积约1.4万平方公里；最高点希林博格德火山海拔1778米，火山口直径约2公里、深逾300米，是当地蒙古人重要的传统朝拜山（Global Volcanism Program/Wikipedia WebSearch 2026）",
};

const SELENGE_RIVER: TerrainEntry = {
  id: "selenge-river",
  nameZh: "色楞格河",
  nameEn: "Selenge River",
  category: "river",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "苏赫巴托尔市", lon: 106.20, lat: 50.23, elevation: 620, kind: "city" },
  bbox: [100.8, 48.8, 106.8, 50.5],
  axis: [[101.0, 49.0], [106.5, 50.35]],
  viewScale: 1.3,
  label: { lon: 103.5, lat: 49.6, rotation: -25 },
  source: "色楞格河：蒙古境内水量最大的河流，由伊德尔河与德勒格尔河在库苏古尔省特木尔布拉格附近汇流而成（核实 2026-09-11），向东北流经苏赫巴托尔市后进入俄罗斯，最终注入贝加尔湖，是贝加尔湖最主要的入湖水源（Wikipedia/worldatlas.com WebSearch 2026）",
};

const TUUL_RIVER: TerrainEntry = {
  id: "tuul-river",
  nameZh: "图拉河",
  nameEn: "Tuul River",
  category: "river",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "乌兰巴托", lon: 106.92, lat: 47.92, elevation: 1350, kind: "city" },
  bbox: [104.8, 47.6, 108.5, 48.6],
  axis: [[108.4, 48.4], [104.9, 48.75]],
  label: { lon: 106.9, lat: 48.55, rotation: -10 },
  source: "图拉河：全长882.8公里、流域面积约4.98万平方公里，发源于肯特山，向西南流经蒙古首都乌兰巴托后汇入鄂尔浑河，是蒙古人口最密集河谷的主要水源（Wikipedia WebSearch 2026）",
};

const KHERLEN_RIVER: TerrainEntry = {
  id: "kherlen-river",
  nameZh: "克鲁伦河",
  nameEn: "Kherlen River",
  category: "river",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "温都尔汗", lon: 110.65, lat: 47.32, elevation: 1030, kind: "city" },
  bbox: [108.4, 46.8, 115.8, 48.6],
  axis: [[108.6, 48.5], [115.5, 47.9]],
  viewScale: 1.3,
  label: { lon: 112.0, lat: 46.9, rotation: -10 },
  source: "克鲁伦河：全长1254公里，是蒙古境内最长的河流之一，发源于肯特山，向东南流经温都尔汗、乔巴山后进入中国内蒙古境内，最终汇入呼伦湖水系（Wikipedia WebSearch 2026）",
};

const ONON_RIVER: TerrainEntry = {
  id: "onon-river",
  nameZh: "鄂嫩河",
  nameEn: "Onon River",
  category: "river",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "达达勒", lon: 111.63, lat: 49.00, elevation: 950, kind: "city" },
  bbox: [109.2, 48.7, 112.2, 49.5],
  axis: [[109.3, 48.9], [112.0, 49.4]],
  label: { lon: 110.7, lat: 49.35, rotation: -15 },
  source: "鄂嫩河：全长1032公里，流域面积约9.62万平方公里，发源于肯特山，向东北流入俄罗斯外贝加尔边疆区，河畔的达达勒地区相传是成吉思汗的出生地（Wikipedia WebSearch 2026）",
};

const EASTERN_STEPPE: TerrainEntry = {
  id: "eastern-steppe",
  nameZh: "东部草原（达乌尔草原）",
  nameEn: "Eastern Steppe (Daurian Steppe)",
  category: "grassland",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "蒙古达乌尔严格保护区", lon: 118.5, lat: 49.5, elevation: 650, kind: "grassland" },
  bbox: [112.5, 46.0, 119.5, 49.8],
  viewScale: 1.8,
  label: { lon: 115.5, lat: 47.5, rotation: 0 },
  source: "东部草原：达乌尔草原生态系统的蒙古境内部分，达乌尔草原整体面积逾100万平方公里、横跨蒙古东部、俄罗斯西伯利亚与中国东北；蒙古达乌尔严格保护区面积约2000平方公里，1992年设立，2017年蒙俄跨境“达乌里亚景观”列入UNESCO世界遗产名录，是蒙古原羚（黄羊）的主要栖息地，成群可达约2万只（UNESCO/One Earth WebSearch 2026）",
};

const KHUSTAIN_NURUU: TerrainEntry = {
  id: "khustain-nuruu",
  nameZh: "呼斯泰山",
  nameEn: "Khustain Nuruu",
  category: "hills",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "呼斯泰国家公园", lon: 105.75, lat: 47.75, elevation: 1500, kind: "grassland" },
  bbox: [105.55, 47.60, 105.95, 47.90],
  label: { lon: 105.75, lat: 47.58, rotation: 0 },
  source: "呼斯泰山：中央省境内一片起伏丘陵地带，距乌兰巴托约100公里，1993年设立呼斯泰国家公园，面积约5.06万公顷，地形以起伏草原、岩石露头与河谷桦树林为主；1993年荷兰普氏野马基金会与蒙古环境保护协会启动野放项目，是普氏野马（陶赫）重新引入野外的三处保护区之一（national-parks.org/eternal-landscapes.co.uk WebSearch 2026）",
};

const TSAGAAN_SUVARGA: TerrainEntry = {
  id: "tsagaan-suvarga",
  nameZh: "查干苏日格（白塔崖）",
  nameEn: "Tsagaan Suvarga (White Stupa)",
  category: "hills",
  regionId: "asia",
  country: "mongolia",
  landmark: { name: "查干苏日格崖壁", lon: 105.7173, lat: 44.5769, elevation: 1300, kind: "escarpment" },
  bbox: [105.62, 44.50, 105.82, 44.66],
  label: { lon: 105.7173, lat: 44.68, rotation: 0 },
  source: "查干苏日格（白塔崖）：中戈壁省南部一处石灰岩与粘土质侵蚀崖壁，最高处逾60米、延伸长度约400米，岩层记录了这一带曾为古海底沉积环境的地质历史，崖面呈现白、橙、锈红等分层色带，偶见细小化石残片（Wikipedia/travelchinaguide.com WebSearch 2026）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 蒙古 =====
  MONGOL_ALTAI, KHANGAI_MOUNTAINS, KHENTII_MOUNTAINS, GOBI_ALTAI,
  MONGOLIA_GOBI, GREAT_LAKES_DEPRESSION,
  UVS_LAKE, KHYARGAS_LAKE, KHAR_US_LAKE, KHOVSGOL_LAKE,
  TERKHIIN_TSAGAAN_LAKE, KHORGO_VOLCANO, KHONGORYN_ELS, BAYANZAG,
  GURVAN_SAIKHAN, YOLYN_AM, ORKHON_VALLEY, ORKHON_WATERFALL,
  DARIGANGA_VOLCANIC_FIELD,
  SELENGE_RIVER, TUUL_RIVER, KHERLEN_RIVER, ONON_RIVER,
  EASTERN_STEPPE, KHUSTAIN_NURUU, TSAGAAN_SUVARGA,
];
