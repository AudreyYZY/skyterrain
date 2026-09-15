import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 瑞士（regionId: "europe"，country: "switzerland"）
// 坐标据 swisstopo（联邦地形局）/ Swiss Geological Survey /
// SLF·WSL / 瑞士国家公园 / UNESCO；多语地名按 swisstopo 用法并列
// ============================================================

const BERNESE_ALPS: TerrainEntry = {
  id: "bernese-alps",
  nameZh: "伯尔尼阿尔卑斯山脉",
  nameEn: "Bernese Alps / Berner Alpen",
  category: "mountain_system",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "少女峰（Jungfrau，4158m）与僧侣峰、艾格峰", lon: 7.962, lat: 46.537, elevation: 4158, kind: "peak" },
  bbox: [7.35, 46.30, 8.55, 46.70],
  axis: [[7.45, 46.45], [8.45, 46.55]],
  viewFrom: 0,
  viewScale: 1.6,
  label: { lon: 7.95, lat: 46.55, rotation: -8 },
  pois: [
    { name: "芬斯特拉尔峰（Finsteraarhorn，4274m）", lon: 8.126, lat: 46.537, note: "伯尔尼阿尔卑斯最高峰" },
    { name: "艾格峰北壁（Eigernordwand）", lon: 8.005, lat: 46.577, note: "约1800m 的著名岩壁" },
  ],
  source: "伯尔尼阿尔卑斯：阿尔卑斯山内冰川覆盖面积最大的一片；少女峰-阿莱奇地区（少女峰、僧侣峰、艾格峰、芬斯特拉尔峰、阿莱奇冰川）是阿尔卑斯山第一处世界自然遗产（UNESCO / swisstopo）",
};

const PENNINE_ALPS: TerrainEntry = {
  id: "pennine-alps",
  nameZh: "瓦莱阿尔卑斯山脉",
  nameEn: "Pennine Alps / Walliser Alpen",
  category: "mountain_system",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "杜富尔峰（Dufourspitze / 罗莎峰主峰，4634m）", lon: 7.867, lat: 45.937, elevation: 4634, kind: "peak" },
  bbox: [7.30, 45.88, 8.35, 46.25],
  axis: [[7.40, 46.05], [8.25, 46.05]],
  viewFrom: 0,
  viewScale: 1.5,
  label: { lon: 7.85, lat: 46.05, rotation: -6 },
  source: "瓦莱阿尔卑斯：集中了阿尔卑斯山大多数4000米级山峰；杜富尔峰（罗莎峰主峰）4634米，是瑞士的最高点、阿尔卑斯第二高峰（swisstopo）",
};

const MATTERHORN: TerrainEntry = {
  id: "matterhorn",
  nameZh: "马特洪峰",
  nameEn: "Matterhorn / Cervino / Cervin",
  category: "mountain_system",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "马特洪峰", lon: 7.6586, lat: 45.9763, elevation: 4478, kind: "peak" },
  bbox: [7.58, 45.92, 7.74, 46.03],
  label: { lon: 7.659, lat: 45.976, rotation: 0 },
  source: "马特洪峰（意/法语作 Cervino / Cervin）：海拔4478米，在瑞士与意大利边界上；从三四个方向的冰斗同时向内侵蚀一条山脊，把它削成锥形的“角峰”；峰顶岩体是非洲板块的一片、叠在欧洲基底之上（swisstopo / Swiss Geological Survey）",
};

const RHAETIAN_ALPS: TerrainEntry = {
  id: "rhaetian-alps",
  nameZh: "雷蒂亚阿尔卑斯山脉",
  nameEn: "Rhaetian Alps / Berninagruppe",
  category: "mountain_system",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "伯尔尼纳峰（Piz Bernina，4049m）", lon: 9.9083, lat: 46.3828, elevation: 4049, kind: "peak" },
  bbox: [9.65, 46.28, 10.15, 46.52],
  axis: [[9.75, 46.35], [10.05, 46.45]],
  viewScale: 1.4,
  label: { lon: 9.91, lat: 46.40, rotation: -20 },
  source: "雷蒂亚阿尔卑斯（伯尔尼纳山群）：伯尔尼纳峰4049米，是东阿尔卑斯山唯一、也是阿尔卑斯最东端的4000米级山峰；穿越它的雷蒂亚铁路（阿尔布拉线 / 伯尔尼纳线）是世界遗产（swisstopo / UNESCO）",
};

const GOTTHARD_MASSIF: TerrainEntry = {
  id: "gotthard-massif",
  nameZh: "圣哥达山地",
  nameEn: "Gotthard Massif",
  category: "mountain_system",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "圣哥达山口（Gotthardpass，2106m）", lon: 8.5665, lat: 46.5566, elevation: 2106, kind: "pass" },
  bbox: [8.30, 46.42, 8.85, 46.72],
  viewScale: 1.5,
  label: { lon: 8.57, lat: 46.56, rotation: 0 },
  source: "圣哥达山地：欧洲的分水中枢——莱茵河、罗讷河、罗伊斯河、提契诺河都发源于它周围，水分别流向北海、地中海和亚得里亚海；圣哥达山口自13世纪起是阿尔卑斯南北交通要道（swisstopo）",
};

const JURA_MOUNTAINS: TerrainEntry = {
  id: "jura-mountains",
  nameZh: "汝拉山脉",
  nameEn: "Jura Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "汝拉山脉瑞士段（Mont Tendre，1679m）", lon: 6.312, lat: 46.601, elevation: 1679, kind: "peak" },
  bbox: [5.95, 46.15, 8.55, 47.55],
  axis: [[6.10, 46.25], [8.40, 47.45]],
  viewFrom: 315,
  viewScale: 2.0,
  label: { lon: 6.9, lat: 47.0, rotation: -35 },
  source: "汝拉山脉：一条褶皱-逆冲带——随着阿尔卑斯向北推进，一楔形的沉积岩（主要是侏罗纪石灰岩，“侏罗纪”一名即源自此）沿底部的三叠纪岩盐/泥岩滑脱面被褶皱、推挤成一列列平行的山脊与谷（swisstopo / Swiss Geological Survey）",
};

const GLARUS_THRUST: TerrainEntry = {
  id: "glarus-thrust",
  nameZh: "格拉鲁斯逆冲断层（萨多纳构造区）",
  nameEn: "Glarus Thrust / Tectonic Arena Sardona",
  category: "mountain_system",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "青格尔峰（Tschingelhörner）与“马丁洞”", lon: 9.264, lat: 46.902, elevation: 2846, kind: "escarpment" },
  bbox: [9.00, 46.78, 9.55, 47.02],
  viewScale: 1.4,
  label: { lon: 9.26, lat: 46.90, rotation: 0 },
  source: "格拉鲁斯逆冲断层（萨多纳构造区，世界遗产）：一条近水平的逆冲面，约2.5—3亿年前的岩石沿它被向北推了约35公里、叠在约3500—5000万年前的岩层之上——“老岩在上、新岩在下”，山坡上是一条清晰的界线（“洛克塞滕线”）；19世纪以来的经典造山研究地（UNESCO / Swiss Geological Survey）",
};

const MONTE_SAN_GIORGIO: TerrainEntry = {
  id: "monte-san-giorgio",
  nameZh: "圣乔治山",
  nameEn: "Monte San Giorgio",
  category: "mountain_system",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "圣乔治山", lon: 8.919, lat: 45.918, elevation: 1097, kind: "peak" },
  bbox: [8.86, 45.87, 8.97, 45.96],
  label: { lon: 8.919, lat: 45.918, rotation: 0 },
  source: "圣乔治山：卢加诺湖边一座林木覆盖的金字塔形小山，世界遗产——出土了全球保存最好的中三叠世（约2.4亿年前）海洋生物化石群（鱼龙类爬行动物、鱼类、无脊椎动物），保存在缺氧潟湖沉积的黑色沥青质页岩里（UNESCO）",
};

const SAENTIS: TerrainEntry = {
  id: "saentis",
  nameZh: "森蒂斯山",
  nameEn: "Säntis",
  category: "mountain_system",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "森蒂斯山顶（气象站）", lon: 9.343, lat: 47.249, elevation: 2502, kind: "peak" },
  bbox: [9.20, 47.14, 9.50, 47.34],
  viewScale: 1.3,
  label: { lon: 9.343, lat: 47.249, rotation: 0 },
  source: "森蒂斯山：瑞士东北部阿尔普施泰因（Alpstein）石灰岩山群的最高峰，2502米；孤立、地形突出，天气好时能望见周边多国；山顶自1882年起设有重要气象站（swisstopo / MeteoSwiss）",
};

const ALETSCH_GLACIER: TerrainEntry = {
  id: "aletsch-glacier",
  nameZh: "阿莱奇冰川",
  nameEn: "Great Aletsch Glacier / Grosser Aletschgletscher",
  category: "valley",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "康科迪亚广场（三条粒雪流汇合处）", lon: 8.028, lat: 46.502, elevation: 2760, kind: "gorge" },
  bbox: [7.92, 46.35, 8.20, 46.56],
  axis: [[8.05, 46.53], [8.08, 46.40]],
  viewScale: 1.3,
  label: { lon: 8.07, lat: 46.46, rotation: -80 },
  source: "阿莱奇冰川：阿尔卑斯山最大的冰川，长约20公里、面积约78平方公里；三条粒雪流在康科迪亚广场汇合，那里冰厚约800米；属少女峰-阿莱奇世界遗产；退缩明显（swisstopo / UNESCO）",
};

const RHONE_GLACIER: TerrainEntry = {
  id: "rhone-glacier",
  nameZh: "罗讷冰川",
  nameEn: "Rhône Glacier / Rhonegletscher",
  category: "valley",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "罗讷冰川末端（罗讷河源头，富尔卡山口附近）", lon: 8.388, lat: 46.612, elevation: 2200, kind: "gorge" },
  bbox: [8.33, 46.56, 8.45, 46.68],
  label: { lon: 8.388, lat: 46.612, rotation: 0 },
  source: "罗讷冰川：罗讷河的源头，在戈姆斯谷上端、富尔卡山口附近；以每年夏天开凿的蓝色冰洞闻名；自1856年以来末端退缩约1300米、冰体明显变薄（swisstopo / SLF）",
};

const GORNER_GLACIER: TerrainEntry = {
  id: "gorner-glacier",
  nameZh: "戈尔纳冰川",
  nameEn: "Gorner Glacier / Gornergletscher",
  category: "valley",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "戈尔纳冰川（策马特以东）", lon: 7.815, lat: 45.980, elevation: 2500, kind: "gorge" },
  bbox: [7.72, 45.90, 7.92, 46.03],
  axis: [[7.88, 45.92], [7.75, 46.00]],
  viewScale: 1.2,
  label: { lon: 7.81, lat: 45.97, rotation: -40 },
  source: "戈尔纳冰川：策马特东南的冰川系统，是阿尔卑斯山仅次于阿莱奇的第二大冰川区，由罗莎峰、利斯卡姆等的冰汇成；戈尔内格拉特观景铁路正对着它；退缩很快（swisstopo）",
};

const LAUTERBRUNNEN_VALLEY: TerrainEntry = {
  id: "lauterbrunnen-valley",
  nameZh: "劳特布龙嫩谷",
  nameEn: "Lauterbrunnen Valley",
  category: "valley",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "施陶河瀑布（Staubbachfall）与谷底", lon: 7.909, lat: 46.593, elevation: 800, kind: "gorge" },
  bbox: [7.85, 46.50, 7.96, 46.66],
  axis: [[7.90, 46.50], [7.91, 46.64]],
  viewScale: 1.2,
  label: { lon: 7.91, lat: 46.58, rotation: 0 },
  source: "劳特布龙嫩谷：伯尔尼阿尔卑斯北缘一条典型的冰蚀“U”形槽谷，两壁近乎垂直、高数百米；约72条瀑布从两侧的悬谷跌下，施陶河瀑布约300米、特吕默尔巴赫瀑布在山体内部（swisstopo）",
};

const RHONE_VALLEY: TerrainEntry = {
  id: "rhone-valley",
  nameZh: "罗讷河谷（瓦莱）",
  nameEn: "Rhône Valley / Vallée du Rhône (Valais)",
  category: "valley",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "锡永一带（罗讷河谷中段）", lon: 7.359, lat: 46.233, elevation: 500, kind: "meander" },
  bbox: [6.90, 46.05, 8.45, 46.42],
  axis: [[8.35, 46.55], [7.05, 46.15]],
  viewFrom: 0,
  viewScale: 2.0,
  label: { lon: 7.5, lat: 46.25, rotation: -20 },
  source: "罗讷河谷（瓦莱州）：罗讷河从冰川源头向西切出的深槽谷，两侧是阿尔卑斯高山；处在雨影里，是瑞士最干、日照最多的地方之一，谷坡靠灌溉渠（“bisses / Suonen”）种葡萄，是瑞士最大的葡萄酒产区（swisstopo）",
};

const SWISS_PLATEAU: TerrainEntry = {
  id: "swiss-plateau",
  nameZh: "瑞士高原（中央高地）",
  nameEn: "Swiss Plateau / Mittelland / Plateau suisse",
  category: "hills",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "伯尔尼—苏黎世之间的丘陵湖区", lon: 7.9, lat: 47.05, elevation: 550, kind: "grassland" },
  bbox: [6.10, 46.30, 9.50, 47.60],
  axis: [[6.30, 46.45], [9.30, 47.55]],
  viewScale: 2.4,
  label: { lon: 7.7, lat: 47.1, rotation: -30 },
  source: "瑞士高原：夹在汝拉山脉和阿尔卑斯山之间、约300公里长的低地带，海拔多在400—600米；基岩是阿尔卑斯剥蚀下来堆积的“磨拉石”，表层是冰期冰川留下的冰碛丘（drumlin）、砾石平原和漂砾；集中了瑞士约三分之二人口和大多数城市（swisstopo）",
};

const LAKE_GENEVA: TerrainEntry = {
  id: "lake-geneva",
  nameZh: "日内瓦湖",
  nameEn: "Lake Geneva / Lac Léman",
  category: "lake",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "日内瓦湖（洛桑—埃维昂之间的宽湖面）", lon: 6.55, lat: 46.42, elevation: 372, kind: "lake" },
  bbox: [6.13, 46.18, 6.95, 46.55],
  axis: [[6.15, 46.36], [6.90, 46.40]],
  viewScale: 1.8,
  label: { lon: 6.55, lat: 46.42, rotation: -10 },
  source: "日内瓦湖（法语 Lac Léman）：西欧最大的湖之一，弯月形，面积约580平方公里、最深约310米；南岸属法国、北岸属瑞士；罗讷河从东端流入、在日内瓦流出（swisstopo）",
};

const LAKE_CONSTANCE: TerrainEntry = {
  id: "lake-constance",
  nameZh: "博登湖",
  nameEn: "Lake Constance / Bodensee",
  category: "lake",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "博登湖上湖（Obersee）", lon: 9.35, lat: 47.60, elevation: 395, kind: "lake" },
  bbox: [9.00, 47.48, 9.75, 47.78],
  axis: [[9.05, 47.53], [9.72, 47.55]],
  viewScale: 1.7,
  label: { lon: 9.35, lat: 47.62, rotation: -4 },
  source: "博登湖：由莱茵冰川挖掘、面积约536平方公里的大湖，湖岸分属瑞士、德国、奥地利，主湖区没有正式划定的国界；莱茵河从东端流入、西端流出（swisstopo / 联邦地形局）",
};

const LAKE_LUCERNE: TerrainEntry = {
  id: "lake-lucerne",
  nameZh: "卢塞恩湖（四林州湖）",
  nameEn: "Lake Lucerne / Vierwaldstättersee",
  category: "lake",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "卢塞恩湖（毕尔根山—里吉山之间）", lon: 8.50, lat: 47.00, elevation: 434, kind: "lake" },
  bbox: [8.28, 46.85, 8.78, 47.10],
  viewScale: 1.5,
  label: { lon: 8.50, lat: 47.00, rotation: 0 },
  pois: [
    { name: "吕特利草地（Rütli）", lon: 8.594, lat: 46.968, note: "瑞士建国传说中1291年结盟宣誓的地方" },
  ],
  source: "卢塞恩湖（德语 Vierwaldstättersee，“四林州湖”）：一个由多个峡湾状湖汊和湖盆经狭窄水道相连的复杂湖，面积约114平方公里；里吉山、皮拉图斯山等直接从湖边拔起（swisstopo）",
};

const LAKE_ZURICH: TerrainEntry = {
  id: "lake-zurich",
  nameZh: "苏黎世湖",
  nameEn: "Lake Zurich / Zürichsee",
  category: "lake",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "苏黎世湖（拉珀斯维尔—苏黎世之间）", lon: 8.72, lat: 47.23, elevation: 406, kind: "lake" },
  bbox: [8.53, 47.13, 8.92, 47.32],
  axis: [[8.90, 47.20], [8.55, 47.30]],
  viewScale: 1.4,
  label: { lon: 8.72, lat: 47.23, rotation: -30 },
  source: "苏黎世湖：瑞士高原上一个香蕉形的冰蚀湖，面积约88平方公里；拉珀斯维尔附近的“湖堤”（Seedamm）建在一道天然冰碛浅滩上，把湖分成上下两段（swisstopo）",
};

const LAKE_MAGGIORE: TerrainEntry = {
  id: "lake-maggiore",
  nameZh: "马焦雷湖",
  nameEn: "Lake Maggiore / Lago Maggiore",
  category: "lake",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "马焦雷湖北端（洛迦诺 / 阿斯科纳）", lon: 8.78, lat: 46.02, elevation: 193, kind: "lake" },
  bbox: [8.60, 45.88, 8.98, 46.18],
  viewScale: 1.5,
  label: { lon: 8.80, lat: 46.05, rotation: 0 },
  source: "马焦雷湖：一个又深又长的“因苏布里克”冰蚀湖（最深约370米，湖底低于海平面），大部分在意大利，北端约五分之一在瑞士提契诺州；阿斯科纳一带的湖岸海拔193米，是瑞士的最低点（swisstopo）",
};

const CREUX_DU_VAN: TerrainEntry = {
  id: "creux-du-van",
  nameZh: "凡岩谷（Creux du Van）",
  nameEn: "Creux du Van",
  category: "gorge",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "凡岩谷岩壁圆弧", lon: 6.728, lat: 46.933, elevation: 1400, kind: "escarpment" },
  bbox: [6.68, 46.90, 6.78, 46.97],
  label: { lon: 6.728, lat: 46.933, rotation: 0 },
  source: "凡岩谷：汝拉山脉里一个天然的岩石“圆形剧场”——一道高约160米、弧长约1.4公里的马蹄形石灰岩崖壁；由冻融风化和泉水掏蚀在一个背斜里“啃”出来的凹谷（swisstopo / 纳沙泰尔州）",
};

const EMMENTAL_HILLS: TerrainEntry = {
  id: "emmental-hills",
  nameZh: "埃门塔尔丘陵（纳普夫）",
  nameEn: "Emmental Hills / Napf",
  category: "hills",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "纳普夫山（Napf，1408m）", lon: 7.939, lat: 47.005, elevation: 1408, kind: "grassland" },
  bbox: [7.60, 46.85, 8.15, 47.15],
  viewScale: 1.7,
  label: { lon: 7.9, lat: 47.0, rotation: 0 },
  source: "埃门塔尔丘陵：瑞士高原南缘、由坚硬的“纳普夫砾岩”（Nagelfluh，胶结的古代阿尔卑斯河流砾石扇）构成、被众多小溪呈放射状深切的丘陵；纳普夫山1408米为最高点（swisstopo）",
};

const AARE_RIVER: TerrainEntry = {
  id: "aare-river",
  nameZh: "阿勒河",
  nameEn: "Aare",
  category: "river",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "伯尔尼老城的阿勒河曲流环", lon: 7.451, lat: 46.948, elevation: 500, kind: "meander" },
  bbox: [7.10, 46.55, 8.35, 47.60],
  axis: [[8.25, 46.60], [8.20, 47.55]],
  viewScale: 2.2,
  label: { lon: 7.6, lat: 47.1, rotation: -55 },
  source: "阿勒河：完全在瑞士境内最长的河（约288公里），发源于伯尔尼阿尔卑斯的阿勒冰川，穿过布里恩茨湖、图恩湖，绕过伯尔尼老城的曲流环，最后在科布伦茨（阿尔高州）汇入莱茵河——汇合处阿勒河的水量比莱茵河还大（swisstopo）",
};

const ALPINE_RHINE: TerrainEntry = {
  id: "alpine-rhine",
  nameZh: "阿尔卑斯莱茵河",
  nameEn: "Alpine Rhine / Alpenrhein",
  category: "river",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "前后莱茵河汇流处（赖兴瑙，库尔附近）", lon: 9.406, lat: 46.851, elevation: 585, kind: "meander" },
  bbox: [8.70, 46.50, 9.65, 47.55],
  axis: [[9.20, 46.60], [9.55, 47.50]],
  viewScale: 2.0,
  label: { lon: 9.4, lat: 47.1, rotation: -75 },
  source: "阿尔卑斯莱茵河：前莱茵河与后莱茵河在赖兴瑙汇合后，向北流过莱茵河谷（这一段是瑞士与列支敦士登、奥地利的界河），注入博登湖；河道19世纪以来经大规模裁弯、束堤治理（swisstopo）",
};

const RHINE_FALLS: TerrainEntry = {
  id: "rhine-falls",
  nameZh: "莱茵瀑布",
  nameEn: "Rhine Falls / Rheinfall",
  category: "gorge",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "莱茵瀑布（沙夫豪森附近）", lon: 8.6155, lat: 47.6779, elevation: 390, kind: "gorge" },
  bbox: [8.58, 47.66, 8.66, 47.70],
  label: { lon: 8.6155, lat: 47.6779, rotation: 0 },
  source: "莱茵瀑布：宽约150米、落差约23米，平均流量约370立方米/秒，按水量与宽度算是欧洲最大的瀑布之一；冰期冰川把莱茵河逼离旧河道，新河道横切一道坚硬的侏罗纪石灰岩，才形成这道年轻的瀑布（swisstopo）",
};

const AARESCHLUCHT: TerrainEntry = {
  id: "aareschlucht",
  nameZh: "阿勒峡（阿勒河峡谷）",
  nameEn: "Aare Gorge / Aareschlucht",
  category: "gorge",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "阿勒峡（迈林根附近，基尔谢特岩坎）", lon: 8.201, lat: 46.719, elevation: 630, kind: "gorge" },
  bbox: [8.17, 46.70, 8.24, 46.74],
  axis: [[8.185, 46.712], [8.22, 46.725]],
  label: { lon: 8.201, lat: 46.719, rotation: -25 },
  source: "阿勒峡：迈林根附近，阿勒河横切一道叫“基尔谢特”的坚硬岩坎形成的窄深峡谷，长约1.4公里、最深约200米、最窄处仅约1米；1888年架起栈道对外开放（swisstopo）",
};

const RUINAULTA: TerrainEntry = {
  id: "ruinaulta",
  nameZh: "鲁伊瑙尔塔峡谷（莱茵峡谷）",
  nameEn: "Ruinaulta (Rhine Gorge)",
  category: "gorge",
  regionId: "europe",
  country: "switzerland",
  landmark: { name: "鲁伊瑙尔塔（前莱茵河峡谷）", lon: 9.283, lat: 46.797, elevation: 650, kind: "gorge" },
  bbox: [9.20, 46.76, 9.42, 46.84],
  axis: [[9.22, 46.79], [9.40, 46.80]],
  viewScale: 1.3,
  label: { lon: 9.30, lat: 46.80, rotation: -6 },
  source: "鲁伊瑙尔塔（也称“莱茵峡谷”“瑞士大峡谷”）：约一万年前的弗利姆斯大滑坡（体积约8—12立方公里，阿尔卑斯山最大的滑坡之一）堵住前莱茵河、形成湖；此后河水切穿滑坡碎屑，掏出一条长约13公里、深达约350米的白色峡谷（Swiss Geological Survey / swisstopo）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 瑞士 =====
  BERNESE_ALPS, PENNINE_ALPS, MATTERHORN, RHAETIAN_ALPS, GOTTHARD_MASSIF,
  JURA_MOUNTAINS, GLARUS_THRUST, MONTE_SAN_GIORGIO,
  SAENTIS, ALETSCH_GLACIER, RHONE_GLACIER, GORNER_GLACIER,
  LAUTERBRUNNEN_VALLEY, RHONE_VALLEY, SWISS_PLATEAU,
  LAKE_GENEVA, LAKE_CONSTANCE, LAKE_LUCERNE, LAKE_ZURICH, LAKE_MAGGIORE,
  CREUX_DU_VAN, EMMENTAL_HILLS,
  AARE_RIVER, ALPINE_RHINE, RHINE_FALLS, AARESCHLUCHT, RUINAULTA,
];
