import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 — 克罗地亚
// ============================================================

const DINARA: TerrainEntry = {
  id: "dinara",
  nameZh: "迪纳拉山（锡尼亚尔峰）",
  nameEn: "Dinara (Sinjal)",
  category: "mountain_system",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "锡尼亚尔峰", lon: 16.396, lat: 43.999, elevation: 1831, kind: "peak" },
  bbox: [16.10, 43.85, 16.55, 44.15],
  axis: [[16.15, 44.10], [16.50, 43.90]],
  viewScale: 1.2,
  label: { lon: 16.35, lat: 44.18, rotation: 0 },
  source: "迪纳拉山：克罗地亚最高的山地，主峰锡尼亚尔峰海拔1831米，是克罗地亚全国最高点；山体由石灰岩与白云岩构成，是第纳里克阿尔卑斯造山带的命名地与核心山结，喀斯特地貌广布，山下切季纳河即发源于此（Wikipedia/PeakVisor WebSearch 2026）",
};

const VELEBIT: TerrainEntry = {
  id: "velebit",
  nameZh: "韦莱比特山",
  nameEn: "Velebit",
  category: "mountain_system",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "瓦干斯基峰", lon: 15.225, lat: 44.549, elevation: 1757, kind: "peak" },
  bbox: [14.85, 44.28, 15.85, 45.05],
  axis: [[14.95, 44.95], [15.75, 44.35]],
  viewScale: 1.6,
  label: { lon: 15.35, lat: 44.75, rotation: -35 },
  source: "韦莱比特山：克罗地亚面积最大的山脉，全长约145公里、宽10至30公里，沿亚得里亚海岸延伸、将沿海地带与利卡内陆分隔开，最高峰瓦干斯基峰海拔1757米；山体以石灰岩喀斯特地貌著称，1978年整体列为自然公园，园内又设北韦莱比特与帕克莱尼察两处国家公园（Wikipedia/np-sjeverni-velebit.hr WebSearch 2026）",
};

const BIOKOVO: TerrainEntry = {
  id: "biokovo",
  nameZh: "比奥科沃山",
  nameEn: "Biokovo",
  category: "mountain_system",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "圣尤雷峰", lon: 17.096, lat: 43.328, elevation: 1762, kind: "peak" },
  bbox: [16.95, 43.24, 17.20, 43.42],
  viewScale: 1.1,
  label: { lon: 17.05, lat: 43.44, rotation: 0 },
  source: "比奥科沃山：克罗地亚中达尔马提亚沿海的一道石灰岩喀斯特山体，最高峰圣尤雷峰海拔1762米，是克罗地亚第三高峰；山体从马卡尔斯卡海滨仅约12公里的水平距离内陡然抬升至山顶，坡度极为陡峭，1981年设立比奥科沃自然公园（Wikipedia/PeakVisor WebSearch 2026）",
};

const UCKA: TerrainEntry = {
  id: "ucka",
  nameZh: "乌奇卡山",
  nameEn: "Učka",
  category: "mountain_system",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "沃亚克峰", lon: 14.134, lat: 45.291, elevation: 1401, kind: "peak" },
  bbox: [14.05, 45.20, 14.30, 45.35],
  label: { lon: 14.10, lat: 45.36, rotation: 0 },
  source: "乌奇卡山：伊斯特拉半岛东部一道石灰岩山体，最高峰沃亚克峰海拔1401米，是整个伊斯特拉半岛的最高点，将半岛与克瓦内尔湾沿岸分隔开；山顶建有1911年落成的观景塔，晴天可远眺克瓦内尔湾诸岛，山地设有乌奇卡自然公园（Wikipedia/pp-ucka.hr WebSearch 2026）",
};

const GORSKI_KOTAR: TerrainEntry = {
  id: "gorski-kotar",
  nameZh: "戈尔斯基科塔尔山地（里斯尼亚克）",
  nameEn: "Gorski Kotar (Risnjak)",
  category: "mountain_system",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "里斯尼亚克峰", lon: 14.750, lat: 45.417, elevation: 1528, kind: "peak" },
  bbox: [14.45, 45.28, 14.85, 45.55],
  viewScale: 1.2,
  label: { lon: 14.55, lat: 45.57, rotation: 0 },
  source: "戈尔斯基科塔尔：克罗地亚山地覆盖率最高、森林最茂密的地区，地处阿尔卑斯山系与第纳里克山系的过渡地带，里斯尼亚克峰海拔1528米；里斯尼亚克国家公园（1953年设立、1997年扩大至现有范围）内还保留库帕河源头——一处深潭状泉眼，是克罗地亚重要的水源涵养区（Wikipedia/np-risnjak.hr WebSearch 2026）",
};

const PAPUK: TerrainEntry = {
  id: "papuk",
  nameZh: "帕普克山",
  nameEn: "Papuk",
  category: "mountain_system",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "帕普克主峰", lon: 17.776, lat: 45.490, elevation: 953, kind: "peak" },
  bbox: [17.45, 45.35, 18.10, 45.62],
  viewScale: 1.2,
  label: { lon: 17.75, lat: 45.64, rotation: 0 },
  source: "帕普克山：斯拉沃尼亚地区最高的山体，主峰海拔953米，是潘诺尼亚平原中一座孤立隆起的古老结晶岩基底残块（曾长期被古潘诺尼亚湖环绕，如同一座“岛山”）；2007年设立帕普克地质公园，是克罗地亚第一个、欧洲第三十个加入欧洲地质公园网络的地质公园，园内保留晚白垩世玄武岩柱状节理等地质遗迹（UNESCO/Wikipedia WebSearch 2026）",
};

const MEDVEDNICA: TerrainEntry = {
  id: "medvednica",
  nameZh: "梅德韦德尼察山",
  nameEn: "Medvednica",
  category: "mountain_system",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "什列梅峰", lon: 15.949, lat: 45.917, elevation: 1035, kind: "peak" },
  bbox: [15.75, 45.85, 16.05, 45.98],
  axis: [[15.75, 45.90], [16.05, 45.95]],
  label: { lon: 15.90, lat: 46.00, rotation: 0 },
  source: "梅德韦德尼察山：紧邻萨格勒布北侧的一道山体，全长约42公里，最高峰什列梅峰海拔1035米，是萨格勒布市民登山与滑雪的传统去处；山体由石灰岩构成，多溶洞（韦特尔尼察洞穴曾有旧石器时代人类活动遗迹），是萨瓦河支流苏特拉河与库帕河的重要分水岭（Wikipedia WebSearch 2026）",
};

const PANNONIAN_PLAIN_CROATIA: TerrainEntry = {
  id: "pannonian-plain-croatia",
  nameZh: "潘诺尼亚平原（斯拉沃尼亚低地）",
  nameEn: "Pannonian Plain (Slavonia Lowland)",
  category: "plain",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "奥西耶克", lon: 18.6955, lat: 45.5550, elevation: 90, kind: "city" },
  bbox: [16.90, 45.05, 19.45, 46.15],
  viewScale: 2.0,
  label: { lon: 18.20, lat: 45.75, rotation: 0 },
  source: "潘诺尼亚平原：克罗地亚地势最低平的地区，主体位于萨瓦河与德拉瓦河之间的斯拉沃尼亚地区，是曾被上新世古潘诺尼亚湖淹没的沉积盆地，境内约53%的国土海拔低于200米；平原土壤肥沃，是克罗地亚最重要的农业区，最大城市奥西耶克位于德拉瓦河畔（Britannica WebSearch 2026）",
};

const NERETVA_DELTA: TerrainEntry = {
  id: "neretva-delta",
  nameZh: "内雷特瓦河三角洲",
  nameEn: "Neretva Delta",
  category: "plain",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "内雷特瓦河口三角洲", lon: 17.567, lat: 43.000, elevation: 0, kind: "delta" },
  bbox: [17.45, 42.95, 17.72, 43.10],
  label: { lon: 17.55, lat: 43.13, rotation: 0 },
  source: "内雷特瓦河三角洲：内雷特瓦河进入克罗地亚境内最后约22公里河段冲积形成的三角洲，是克罗地亚境内唯一的河流三角洲，也是地中海沿岸规模较大的三角洲之一；三角洲内芦苇荡、湖泊、湿草甸、潟湖与沙洲交织，是东亚得里亚海岸最有价值的湿地，列入拉姆萨尔国际重要湿地名录（Ramsar/Wikipedia WebSearch 2026）",
};

const LONJSKO_POLJE: TerrainEntry = {
  id: "lonjsko-polje",
  nameZh: "洛尼斯科波列湿地",
  nameEn: "Lonjsko Polje",
  category: "plain",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "奇戈奇村", lon: 16.6167, lat: 45.2333, elevation: 95, kind: "city" },
  bbox: [16.35, 45.10, 16.85, 45.35],
  axis: [[16.35, 45.15], [16.85, 45.30]],
  viewScale: 1.3,
  label: { lon: 16.60, lat: 45.38, rotation: 0 },
  source: "洛尼斯科波列：沿萨瓦河中游延伸的一片洪泛平原湿地，面积506.5平方公里，是多瑙河流域受保护面积最大的湿地之一；每年河水季节性泛滥造就丰富的鸟类栖息地，园内保留传统波萨维纳木构民居村落，奇戈奇村因白鹳聚居而被称为“欧洲鹳村”；1990年设立自然公园，1993年列入拉姆萨尔湿地名录（Ramsar/savaparks.eu WebSearch 2026）",
};

const KOPACKI_RIT: TerrainEntry = {
  id: "kopacki-rit",
  nameZh: "科帕齐基里特湿地",
  nameEn: "Kopački Rit",
  category: "plain",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "科帕切沃村", lon: 18.7908, lat: 45.5883, elevation: 85, kind: "city" },
  bbox: [18.70, 45.50, 18.95, 45.68],
  label: { lon: 18.80, lat: 45.70, rotation: 0 },
  source: "科帕齐基里特：位于巴拉尼亚地区德拉瓦河与多瑙河交汇处的内陆三角洲式湿地，面积约231平方公里，是欧洲保存最完好的大型湿地之一；园区由湖泊、沼泽、湿草甸、芦苇荡与牛轭湖组成，春季河水泛滥塑造动态生态系统，是多瑙河中上游最重要的鱼类产卵地之一，1967年起受保护、1993年列入拉姆萨尔湿地名录（Ramsar/Wikipedia WebSearch 2026）",
};

const DALMATIAN_COAST: TerrainEntry = {
  id: "dalmatian-coast",
  nameZh: "达尔马提亚海岸",
  nameEn: "Dalmatian Coast",
  category: "coast",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "斯普利特海岸", lon: 16.440, lat: 43.508, elevation: 0, kind: "city" },
  bbox: [15.20, 42.65, 18.05, 44.15],
  viewScale: 2.2,
  label: { lon: 16.60, lat: 43.90, rotation: -25 },
  source: "达尔马提亚海岸：克罗地亚亚得里亚海沿岸最具代表性的海岸类型，因末次冰期后海平面上升、淹没与海岸线近乎平行的第纳里克山系褶皱山脊而成，众多狭长海岛与海峡沿海岸走向排成整齐的平行条带；这种地貌在地学上被称为“达尔马提亚型海岸”，是全球同类海岸的命名范例，克罗地亚沿岸共有1244座岛屿、岛礁与礁石（Britannica/geoexpro.com WebSearch 2026）",
};

const ISTRIA_COAST: TerrainEntry = {
  id: "istria-coast",
  nameZh: "伊斯特拉海岸（红土海岸）",
  nameEn: "Istrian Coast (Red Istria)",
  category: "coast",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "罗维尼老城", lon: 13.6387, lat: 45.0812, elevation: 0, kind: "city" },
  bbox: [13.45, 44.75, 14.05, 45.25],
  viewScale: 1.4,
  label: { lon: 13.60, lat: 44.68, rotation: 0 },
  source: "伊斯特拉海岸：亚得里亚海最大半岛——伊斯特拉半岛的西岸，海岸线绵延约430公里，岸边覆盖一层因铁矿物氧化而呈红色的石灰岩风化土（当地称“红伊斯特拉”），与蓝色海水形成鲜明对比；沿岸坡度平缓，分布罗维尼、波雷奇、普拉等历史港城，半岛整体为一片喀斯特石灰岩台地（Britannica WebSearch 2026）",
};

const KVARNER_GULF: TerrainEntry = {
  id: "kvarner-gulf",
  nameZh: "克瓦内尔湾",
  nameEn: "Kvarner Gulf",
  category: "coast",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "里耶卡海湾", lon: 14.600, lat: 45.100, elevation: 0, kind: "city" },
  bbox: [14.20, 44.60, 15.10, 45.35],
  viewScale: 1.6,
  label: { lon: 14.55, lat: 45.42, rotation: 0 },
  source: "克瓦内尔湾：亚得里亚海北部一处位于伊斯特拉半岛与克罗地亚大陆之间的海湾，湾内水深超过100米，克雷斯岛、克尔克岛、帕格岛、拉布岛与洛希尼岛等岛屿环列其中；湾口城市里耶卡是克罗地亚最大海港，港区水深足以停靠好望角型大型货轮（Wikipedia WebSearch 2026）",
};

const PLITVICE_LAKES: TerrainEntry = {
  id: "plitvice-lakes",
  nameZh: "普利特维采湖群",
  nameEn: "Plitvice Lakes",
  category: "lake",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "科扎克湖", lon: 15.611, lat: 44.881, elevation: 534, kind: "lake" },
  bbox: [15.56, 44.83, 15.68, 44.93],
  axis: [[15.60, 44.90], [15.63, 44.85]],
  viewScale: 1.2,
  label: { lon: 15.63, lat: 44.95, rotation: 0 },
  source: "普利特维采湖群国家公园：由16座湖泊沿约8公里落差912米（367至1279米）的谷地串联而成的钙华坝湖泊系统，湖间以钙华堤坝与瀑布相连，堤坝由碳酸钙沉积每年增长约1至3厘米、历经数千年形成；1979年成为克罗地亚首个列入世界遗产名录的自然遗产，公园总面积296.85平方公里（UNESCO/national-parks.org WebSearch 2026）",
};

const VRANSKO_LAKE: TerrainEntry = {
  id: "vransko-lake",
  nameZh: "弗兰斯科湖",
  nameEn: "Lake Vrana (Dalmatia)",
  category: "lake",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "弗兰斯科湖", lon: 15.567, lat: 43.833, elevation: -1, kind: "lake" },
  bbox: [15.35, 43.78, 15.75, 43.92],
  axis: [[15.38, 43.82], [15.72, 43.85]],
  label: { lon: 15.55, lat: 43.75, rotation: 0 },
  source: "弗兰斯科湖：克罗地亚最大的天然淡水湖，面积30.2平方公里，长13.6公里、宽1.4至3.4公里，湖面低于海平面约4米（属地质学上的“隐没洼地”）；湖体是一处被水淹没的喀斯特原野，湖水浅（2至6米）且富含鸟类食物，记录鸟类逾260种、是克罗地亚重要的候鸟越冬地，1999年设立自然公园（pp-vransko-jezero.hr/Wikipedia WebSearch 2026）",
};

const KRKA: TerrainEntry = {
  id: "krka",
  nameZh: "克尔卡河（斯克拉丁瀑布）",
  nameEn: "Krka River (Skradinski Buk)",
  category: "river",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "斯克拉丁瀑布", lon: 15.958, lat: 43.810, elevation: 45, kind: "gorge" },
  bbox: [15.85, 43.72, 16.10, 43.88],
  axis: [[15.85, 43.85], [16.05, 43.75]],
  viewScale: 1.2,
  label: { lon: 16.00, lat: 43.90, rotation: -30 },
  source: "克尔卡河：达尔马提亚北部一条石灰岩喀斯特河流，沿途形成7道钙华堤坝，最下游、也是最长最壮观的一道——斯克拉丁瀑布，由17级钙华台阶组成、总落差45.7米、宽度可达400米，是欧洲规模最大的钙华瀑布群之一；1985年设立克尔卡国家公园（krkanationalpark.com/Wikipedia WebSearch 2026）",
};

const SAVA_RIVER_CROATIA: TerrainEntry = {
  id: "sava-river-croatia",
  nameZh: "萨瓦河（萨格勒布段）",
  nameEn: "Sava River (Zagreb Reach)",
  category: "river",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "萨格勒布萨瓦河段", lon: 15.982, lat: 45.785, elevation: 108, kind: "city" },
  bbox: [15.60, 45.35, 16.60, 45.85],
  axis: [[15.65, 45.75], [16.55, 45.40]],
  viewScale: 1.3,
  label: { lon: 16.10, lat: 45.90, rotation: -15 },
  source: "萨瓦河：多瑙河水量最大的支流，全长945公里（计入较长的源头萨瓦多林卡河为990公里），发源于阿尔卑斯山区，流经萨格勒布后向东南穿过克罗地亚中部，是克罗地亚水量最大的河流与重要的内河航运通道，河谷沿线是克罗地亚人口最密集的农业与城市带之一，锡萨克以下可通航（国际萨瓦河流域委员会 / ICPDR，核实 2026-09-11）",
};

const DRAVA_RIVER_CROATIA: TerrainEntry = {
  id: "drava-river-croatia",
  nameZh: "德拉瓦河（克罗地亚段）",
  nameEn: "Drava River (Croatia)",
  category: "river",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "奥西耶克德拉瓦河段", lon: 18.680, lat: 45.560, elevation: 90, kind: "city" },
  bbox: [16.90, 45.55, 18.95, 46.05],
  axis: [[16.95, 45.85], [18.85, 45.60]],
  viewScale: 1.4,
  label: { lon: 17.80, lat: 46.08, rotation: -8 },
  source: "德拉瓦河：多瑙河重要支流，全长约725公里，流经克罗地亚境内约323公里，构成克罗地亚与匈牙利界河的一段，在阿良姆什附近注入多瑙河；下游河段冲积平原发育大量河汊、牛轭湖与滩地，是穆拉—德拉瓦—多瑙河跨国生物圈保护区（欧洲最大河流保护区之一）的骨干河流，流经克罗地亚第四大城市奥西耶克（drava-life.hr/Wikipedia WebSearch 2026）",
};

const CETINA_CANYON: TerrainEntry = {
  id: "cetina-canyon",
  nameZh: "切蒂纳河峡谷",
  nameEn: "Cetina River Canyon",
  category: "gorge",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "奥米什河口峡谷", lon: 16.687, lat: 43.443, elevation: 5, kind: "gorge" },
  bbox: [16.65, 43.38, 17.05, 43.62],
  axis: [[17.00, 43.58], [16.68, 43.44]],
  viewScale: 1.2,
  label: { lon: 16.80, lat: 43.65, rotation: 20 },
  source: "切蒂纳河峡谷：切蒂纳河在注入亚得里亚海前最后约8公里河段切穿莫索尔山与迪纳拉山之间的石灰岩地块形成的峡谷，谷壁高度可达300米；切蒂纳河全长约105公里，发源于迪纳拉山西北坡海拔385米处，是达尔马提亚地区最长的河流，古比察瀑布（落差48米）是沿途最大瀑布之一，峡谷1963年起受保护（visitomis.hr/omisinfo.com WebSearch 2026）",
};

const ZRMANJA_CANYON: TerrainEntry = {
  id: "zrmanja-canyon",
  nameZh: "兹尔曼尼亚河峡谷",
  nameEn: "Zrmanja River Canyon",
  category: "gorge",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "兹尔曼尼亚峡谷观景点", lon: 15.817, lat: 44.283, elevation: 180, kind: "gorge" },
  bbox: [15.55, 44.15, 16.05, 44.45],
  axis: [[15.60, 44.42], [16.00, 44.18]],
  viewScale: 1.2,
  label: { lon: 15.70, lat: 44.48, rotation: 15 },
  source: "兹尔曼尼亚河峡谷：兹尔曼尼亚河全长69公里，流经利卡南部与达尔马提亚北部的喀斯特地带，河道在石灰岩中蜿蜒切出多处深切峡谷与瀑布群，河水因矿物质呈现独特的翠绿色，与两岸白色岩壁形成强烈反差，最终在诺维格勒海湾注入亚得里亚海（camping-simuni.hr/hotelamare.com WebSearch 2026）",
};

const PAKLENICA: TerrainEntry = {
  id: "paklenica",
  nameZh: "帕克莱尼察峡谷",
  nameEn: "Paklenica Canyon",
  category: "gorge",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "阿尼奇库克崖壁", lon: 15.443, lat: 44.331, elevation: 712, kind: "gorge" },
  bbox: [15.35, 44.28, 15.55, 44.40],
  viewScale: 1.1,
  label: { lon: 15.40, lat: 44.42, rotation: 0 },
  source: "帕克莱尼察：韦莱比特山西南坡两条紧邻的石灰岩深切峡谷——大帕克莱尼察（长约14公里，谷壁高逾700米）与小帕克莱尼察（长约12公里，最窄处仅约10米宽）；1949年设立帕克莱尼察国家公园，园内保留茂密森林、洞穴与陡峭岩壁，阿尼奇库克崖壁是克罗地亚攀岩运动的地标（national-parks.org/summitpost.org WebSearch 2026）",
};

const KORNATI: TerrainEntry = {
  id: "kornati",
  nameZh: "科尔纳蒂群岛",
  nameEn: "Kornati Islands",
  category: "island",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "科尔纳特岛", lon: 15.317, lat: 43.800, elevation: 237, kind: "island" },
  bbox: [15.10, 43.70, 15.35, 44.05],
  axis: [[15.20, 44.02], [15.30, 43.72]],
  viewScale: 1.3,
  label: { lon: 15.12, lat: 44.08, rotation: 0 },
  source: "科尔纳蒂群岛：由约140座岛屿与礁石组成的群岛，是亚得里亚海岛屿分布最密集的区域之一，其中89座岛屿于1980年划入科尔纳蒂国家公园；群岛主岛科尔纳特岛长约25公里、宽仅2.5公里，岛体为典型喀斯特地貌，遍布裂隙、洞穴与陡崖，岛上常年无人定居（visit-croatia.co.uk/Wikipedia WebSearch 2026）",
};

const HVAR_ISLAND: TerrainEntry = {
  id: "hvar-island",
  nameZh: "赫瓦尔岛",
  nameEn: "Hvar Island",
  category: "island",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "圣尼古拉峰", lon: 16.633, lat: 43.167, elevation: 626, kind: "peak" },
  bbox: [16.35, 43.10, 17.15, 43.23],
  axis: [[16.40, 43.20], [17.10, 43.13]],
  viewScale: 1.2,
  label: { lon: 16.75, lat: 43.26, rotation: -8 },
  source: "赫瓦尔岛：亚得里亚海最长的岛屿，全长约69公里，面积约300平方公里，岛脊由中生代石灰岩与白云岩构成的东西向山脊线组成，最高点圣尼古拉峰海拔626米；岛上有克罗地亚少见的大片沿海肥沃平原与淡水泉，年日照逾2700小时，以薰衣草种植闻名（Britannica WebSearch 2026）",
};

const MLJET: TerrainEntry = {
  id: "mljet",
  nameZh: "姆列特岛",
  nameEn: "Mljet Island",
  category: "island",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "大湖（维利科湖）", lon: 17.367, lat: 42.767, elevation: 0, kind: "lake" },
  bbox: [17.25, 42.70, 17.75, 42.80],
  axis: [[17.25, 42.75], [17.75, 42.72]],
  viewScale: 1.1,
  label: { lon: 17.45, lat: 42.83, rotation: 0 },
  source: "姆列特岛：南达尔马提亚一座狭长岛屿，岛屿西端约三成面积于1960年划为姆列特国家公园——地中海历史最悠久的海洋保护区；公园核心是大湖与小湖两处与海相通的咸水湖，湖中央圣玛丽亚岛屿上保留一座12世纪本笃会修道院，全岛因茂密的阿勒颇松林而有“绿岛”之称（croatianwonders.com/expatincroatia.com WebSearch 2026）",
};

const BRAC_ISLAND: TerrainEntry = {
  id: "brac-island",
  nameZh: "布拉奇岛",
  nameEn: "Brač Island",
  category: "island",
  regionId: "europe",
  country: "croatia",
  landmark: { name: "维多瓦戈拉峰", lon: 16.639, lat: 43.317, elevation: 778, kind: "peak" },
  bbox: [16.45, 43.25, 17.05, 43.40],
  axis: [[16.45, 43.32], [17.00, 43.30]],
  viewScale: 1.2,
  label: { lon: 16.75, lat: 43.42, rotation: 0 },
  source: "布拉奇岛：达尔马提亚地区面积最大的岛屿，面积396平方公里，最高点维多瓦戈拉峰海拔778米，是亚得里亚海全部岛屿中的最高点；岛上开采的白色石灰岩石材曾用于建造戴克里先宫等古迹；南岸博尔附近的黄金角海滩是一处随风浪季节性变形的砾石沙嘴，是克罗地亚旅游的标志性景观之一（total-croatia-news.com/Wikipedia WebSearch 2026）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 克罗地亚 =====
  DINARA, VELEBIT, BIOKOVO, UCKA, GORSKI_KOTAR, PAPUK, MEDVEDNICA,
  PANNONIAN_PLAIN_CROATIA, NERETVA_DELTA, LONJSKO_POLJE, KOPACKI_RIT,
  DALMATIAN_COAST, ISTRIA_COAST, KVARNER_GULF,
  PLITVICE_LAKES, VRANSKO_LAKE,
  KRKA, SAVA_RIVER_CROATIA, DRAVA_RIVER_CROATIA,
  CETINA_CANYON, ZRMANJA_CANYON, PAKLENICA,
  KORNATI, HVAR_ISLAND, MLJET, BRAC_ISLAND,
];
