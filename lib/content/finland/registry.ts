import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 欧洲 / 芬兰
// ============================================================

const HALTI_FELL: TerrainEntry = {
  id: "halti-fell",
  nameZh: "哈尔蒂峰",
  nameEn: "Halti",
  category: "mountain_system",
  regionId: "europe",
  country: "finland",
  landmark: { name: "哈尔蒂峰芬兰境内最高点", lon: 21.2789, lat: 69.3228, elevation: 1324, kind: "peak" },
  bbox: [21.05, 69.15, 21.50, 69.40],
  viewScale: 1.2,
  label: { lon: 21.28, lat: 69.28, rotation: 0 },
  source: "哈尔蒂峰：芬兰全境最高点，海拔1324米，位于哈尔蒂山体的芬兰一侧山坡；山体真正的最高点（海拔1365米，名为Ráisduottarháldi）位于挪威境内，距芬兰边界约1公里，边界线恰好穿过山体侧坡（芬兰大地测量研究院）",
};

const PALLAS_YLLASTUNTURI: TerrainEntry = {
  id: "pallas-yllastunturi",
  nameZh: "帕拉斯—于拉斯图恩图里",
  nameEn: "Pallas-Yllästunturi",
  category: "mountain_system",
  regionId: "europe",
  country: "finland",
  landmark: { name: "泰瓦斯凯罗峰", lon: 24.0489, lat: 68.0975, elevation: 807, kind: "peak" },
  bbox: [23.85, 67.75, 24.90, 68.20],
  axis: [[23.90, 68.15], [24.85, 67.80]],
  viewScale: 1.4,
  label: { lon: 24.30, lat: 67.98, rotation: -30 },
  source: "帕拉斯—于拉斯图恩图里：芬兰拉普兰西部一列连绵约40公里的图恩图里（磨蚀残丘状老山），泰瓦斯凯罗峰海拔807米，是芬兰历史最悠久的国家公园之一（1938年设立雏形），也是芬兰徒步旅游的传统热门地（芬兰自然资源局 Metsähallitus）",
};

const LEVI_FELL: TerrainEntry = {
  id: "levi-fell",
  nameZh: "莱维图恩图里",
  nameEn: "Levitunturi",
  category: "mountain_system",
  regionId: "europe",
  country: "finland",
  landmark: { name: "莱维图恩图里", lon: 24.8089, lat: 67.8058, elevation: 531, kind: "peak" },
  bbox: [24.68, 67.75, 24.92, 67.86],
  label: { lon: 24.80, lat: 67.80, rotation: 0 },
  source: "莱维图恩图里：芬兰拉普兰地区最大的滑雪度假地所在的图恩图里，海拔531米，山体浑圆低矮，是末次冰期以前古老山系经长期风化夷平后残留的孤立丘状地貌（芬兰自然资源局）",
};

const URHO_KEKKONEN_WILDERNESS: TerrainEntry = {
  id: "urho-kekkonen-wilderness",
  nameZh: "乌尔霍·凯科宁国家公园荒原",
  nameEn: "Urho Kekkonen National Park",
  category: "plateau",
  regionId: "europe",
  country: "finland",
  landmark: { name: "萨里塞尔卡", lon: 27.4167, lat: 68.4167, elevation: 330, kind: "city" },
  bbox: [27.00, 68.00, 29.50, 68.70],
  viewScale: 1.9,
  label: { lon: 28.20, lat: 68.35, rotation: 0 },
  source: "乌尔霍·凯科宁国家公园：芬兰第二大国家公园，以起伏的图恩图里荒原高地与古老针叶林、河流峡谷交织为特征，是芬兰境内保留原始荒野状态最完整的区域之一（芬兰自然资源局）",
};

const SAIMAA: TerrainEntry = {
  id: "saimaa",
  nameZh: "塞马湖",
  nameEn: "Saimaa",
  category: "lake",
  regionId: "europe",
  country: "finland",
  landmark: { name: "萨翁林纳·奥拉维林纳城堡", lon: 28.8783, lat: 61.8681, elevation: 76, kind: "lake" },
  bbox: [27.00, 61.00, 29.80, 62.70],
  viewScale: 1.9,
  label: { lon: 28.40, lat: 61.90, rotation: 0 },
  source: "塞马湖：芬兰面积最大的湖泊，也是继俄罗斯拉多加湖、奥涅加湖与瑞典维纳恩湖之后欧洲第四大湖，湖岸线极为曲折、由约14000座岛屿点缀，是全球现存最濒危的淡水物种塞马环斑海豹的唯一栖息地（芬兰自然资源局）",
};

const PAIJANNE: TerrainEntry = {
  id: "paijanne",
  nameZh: "派耶内湖",
  nameEn: "Päijänne",
  category: "lake",
  regionId: "europe",
  country: "finland",
  landmark: { name: "于韦斯屈莱", lon: 25.5833, lat: 61.6167, elevation: 78, kind: "lake" },
  bbox: [25.15, 61.10, 25.95, 62.35],
  axis: [[25.55, 62.30], [25.65, 61.15]],
  viewScale: 1.6,
  label: { lon: 25.50, lat: 61.75, rotation: -85 },
  source: "派耶内湖：芬兰第二大湖，也是芬兰水深最深的湖泊之一，最大水深约95米，是赫尔辛基都会区重要的饮用水源地（芬兰自然资源局）",
};

const INARI_LAKE: TerrainEntry = {
  id: "inari-lake",
  nameZh: "伊纳里湖",
  nameEn: "Inari",
  category: "lake",
  regionId: "europe",
  country: "finland",
  landmark: { name: "伊纳里村", lon: 27.0272, lat: 68.9061, elevation: 119, kind: "lake" },
  bbox: [26.50, 68.65, 28.30, 69.35],
  viewScale: 1.8,
  label: { lon: 27.60, lat: 69.00, rotation: 0 },
  source: "伊纳里湖：芬兰第三大湖，也是北极圈内芬兰面积最大的湖泊，湖中散布约3300座岛屿，是萨米人传统聚居区伊纳里地区的地理与文化核心（芬兰自然资源局）",
};

const NASIJARVI: TerrainEntry = {
  id: "nasijarvi",
  nameZh: "内西湖",
  nameEn: "Näsijärvi",
  category: "lake",
  regionId: "europe",
  country: "finland",
  landmark: { name: "坦佩雷", lon: 23.7610, lat: 61.4978, elevation: 95, kind: "lake" },
  bbox: [23.55, 61.35, 23.95, 61.85],
  label: { lon: 23.75, lat: 61.60, rotation: 0 },
  source: "内西湖：坦佩雷市西北侧的狭长湖泊，与东南侧的皮哈耶尔维湖之间仅隔约18米落差，坦佩雷城区正建在两湖之间的地峡上，湖间水力落差历史上是坦佩雷工业化的重要动力来源（芬兰自然资源局）",
};

const PUURIJARVI: TerrainEntry = {
  id: "puurijarvi",
  nameZh: "普里湖",
  nameEn: "Puurijärvi",
  category: "lake",
  regionId: "europe",
  country: "finland",
  landmark: { name: "普里湖—伊索苏国家公园", lon: 22.5167, lat: 61.2667, elevation: 46, kind: "lake" },
  bbox: [22.40, 61.20, 22.65, 61.35],
  label: { lon: 22.52, lat: 61.27, rotation: 0 },
  source: "普里湖：芬兰西南部一座水深不足1米的浅水富营养化湖泊，与相邻的伊索苏泥炭沼泽共同构成国家公园，是芬兰重要的候鸟栖息地之一（芬兰自然资源局）",
};

const KALLAVESI: TerrainEntry = {
  id: "kallavesi",
  nameZh: "卡拉韦西湖",
  nameEn: "Kallavesi",
  category: "lake",
  regionId: "europe",
  country: "finland",
  landmark: { name: "库奥皮奥·普宜奥观景塔", lon: 27.6783, lat: 62.8924, elevation: 90, kind: "lake" },
  bbox: [27.35, 62.65, 27.95, 63.05],
  label: { lon: 27.65, lat: 62.85, rotation: 0 },
  source: "卡拉韦西湖：芬兰中东部湖区的重要组成部分，库奥皮奥市依湖而建，湖畔普宜奥山海拔306米，是芬兰湖区少有的地势制高点，山顶观景塔可俯瞰整片湖区群岛景观（芬兰自然资源局）",
};

const VUOKSI_RIVER: TerrainEntry = {
  id: "vuoksi-river",
  nameZh: "沃克西河",
  nameEn: "Vuoksi",
  category: "river",
  regionId: "europe",
  country: "finland",
  landmark: { name: "伊马特拉急流", lon: 28.7692, lat: 61.1719, elevation: 65, kind: "gorge" },
  bbox: [28.70, 61.00, 29.40, 61.35],
  axis: [[28.85, 61.30], [29.30, 61.05]],
  label: { lon: 29.00, lat: 61.15, rotation: -40 },
  source: "沃克西河：塞马湖的主要出水河道，全长约162公里，最终注入俄罗斯境内的拉多加湖，伊马特拉急流历史上是芬兰著名的自然景观，如今建有水电站，夏季定期开闸放水重现急流原貌（芬兰自然资源局）",
};

const KEMIJOKI: TerrainEntry = {
  id: "kemijoki",
  nameZh: "凯米约基河",
  nameEn: "Kemijoki",
  category: "river",
  regionId: "europe",
  country: "finland",
  landmark: { name: "罗瓦涅米", lon: 25.7294, lat: 66.5039, elevation: 90, kind: "city" },
  bbox: [24.40, 65.60, 27.60, 68.10],
  axis: [[27.30, 68.00], [24.56, 65.73]],
  viewScale: 1.9,
  label: { lon: 26.00, lat: 66.90, rotation: -55 },
  source: "凯米约基河：芬兰最长的河流，全长约550公里，发源于拉普兰东部荒野，流经罗瓦涅米（北极圈标志性城市）后在凯米附近注入波的尼亚湾，沿岸建有多座水电站为芬兰提供重要的水力发电资源（芬兰自然资源局）",
};

const TORNIONJOKI_FI: TerrainEntry = {
  id: "tornionjoki-fi",
  nameZh: "托尔尼奥河（芬兰段）",
  nameEn: "Tornionjoki (Finnish side)",
  category: "river",
  regionId: "europe",
  country: "finland",
  landmark: { name: "托尔尼奥", lon: 24.1458, lat: 65.8481, elevation: 5, kind: "city" },
  bbox: [23.60, 65.70, 24.30, 68.40],
  axis: [[23.65, 68.35], [24.15, 65.85]],
  viewScale: 1.7,
  label: { lon: 23.90, lat: 67.20, rotation: -70 },
  source: "托尔尼奥河：瑞典—芬兰界河，全长约520公里，河口的托尔尼奥与河对岸瑞典的哈帕兰达形成跨境双子城，两市部分市政设施共享共建，沿岸测量点作为跨十国的“斯特鲁维测地弧”的一部分于2005年列入联合国教科文组织世界遗产名录（UNESCO，核实 2026-09-10）",
};

const OULANKA_CANYON: TerrainEntry = {
  id: "oulanka-canyon",
  nameZh: "奥兰卡峡谷",
  nameEn: "Oulanka Canyon",
  category: "gorge",
  regionId: "europe",
  country: "finland",
  landmark: { name: "基乌塔科斯基急流", lon: 29.3167, lat: 66.3667, elevation: 200, kind: "gorge" },
  bbox: [29.15, 66.28, 29.55, 66.45],
  axis: [[29.20, 66.42], [29.45, 66.32]],
  label: { lon: 29.32, lat: 66.37, rotation: -30 },
  source: "奥兰卡峡谷：奥兰卡河切穿古老基岩形成的峡谷，两岸松林与石灰质地表交替出现，是芬兰著名长距离徒步路线“熊之路”（Karhunkierros）沿线最具代表性的地貌之一（芬兰自然资源局）",
};

const REPOVESI_GORGE: TerrainEntry = {
  id: "repovesi-gorge",
  nameZh: "雷波韦西峡谷",
  nameEn: "Repovesi",
  category: "gorge",
  regionId: "europe",
  country: "finland",
  landmark: { name: "奥尔哈万武奥里断崖", lon: 26.6667, lat: 61.1333, elevation: 100, kind: "gorge" },
  bbox: [26.55, 61.05, 26.80, 61.20],
  label: { lon: 26.68, lat: 61.13, rotation: 0 },
  source: "雷波韦西国家公园：芬兰南部一片由前寒武纪基岩构成的破碎地形，湖泊、断崖与深切峡谷交错分布，奥尔哈万武奥里断崖垂直落差达约30米，是芬兰南部地势起伏最显著的区域之一（芬兰自然资源局）",
};

const KEVO_CANYON: TerrainEntry = {
  id: "kevo-canyon",
  nameZh: "凯沃峡谷",
  nameEn: "Kevo Canyon",
  category: "gorge",
  regionId: "europe",
  country: "finland",
  landmark: { name: "凯沃自然保护区峡谷", lon: 27.0000, lat: 69.7500, elevation: 200, kind: "gorge" },
  bbox: [26.70, 69.60, 27.30, 69.90],
  axis: [[26.80, 69.85], [27.20, 69.65]],
  viewScale: 1.3,
  label: { lon: 27.00, lat: 69.75, rotation: -35 },
  source: "凯沃峡谷：凯沃河历经数千年侵蚀切穿古老片麻岩基岩形成的峡谷，谷深最深处约80米，是北欧地区规模最大的峡谷之一，1956年设立严格自然保护区，除指定步道外禁止进入（芬兰自然资源局）",
};

const ARCHIPELAGO_SEA: TerrainEntry = {
  id: "archipelago-sea",
  nameZh: "群岛海",
  nameEn: "Archipelago Sea",
  category: "coast",
  regionId: "europe",
  country: "finland",
  landmark: { name: "科尔波斯特伦", lon: 21.7167, lat: 60.2167, elevation: 5, kind: "island" },
  bbox: [21.00, 59.75, 22.60, 60.55],
  viewScale: 1.7,
  label: { lon: 21.80, lat: 60.15, rotation: 0 },
  source: "群岛海：芬兰西南沿海由约四万座岛屿与礁石组成的水域，是世界上按岛屿数量计最密集的群岛之一，末次冰期冰川刮蚀的花岗岩基岩经地壳均衡抬升逐渐出露海面而成（芬兰自然资源局）",
};

const KVARKEN_ARCHIPELAGO: TerrainEntry = {
  id: "kvarken-archipelago",
  nameZh: "克瓦尔肯群岛",
  nameEn: "Kvarken Archipelago",
  category: "coast",
  regionId: "europe",
  country: "finland",
  landmark: { name: "比耶尔克岛", lon: 21.1167, lat: 63.2167, elevation: 5, kind: "island" },
  bbox: [20.85, 63.00, 21.35, 63.40],
  viewScale: 1.2,
  label: { lon: 21.10, lat: 63.20, rotation: 0 },
  source: "克瓦尔肯群岛：波的尼亚湾最狭窄处芬兰一侧的低平群岛，末次冰期后地壳持续均衡抬升，当地陆地至今仍以每年约1厘米的速度上升，形成不断有新岛屿露出水面的独特地貌，与瑞典高海岸共同组成跨境的联合国教科文组织世界遗产（UNESCO）",
};

const BOTHNIAN_BAY_COAST: TerrainEntry = {
  id: "bothnian-bay-coast",
  nameZh: "波的尼亚湾北岸",
  nameEn: "Bothnian Bay Coast",
  category: "coast",
  regionId: "europe",
  country: "finland",
  landmark: { name: "奥卢", lon: 25.4651, lat: 65.0121, elevation: 5, kind: "city" },
  bbox: [24.60, 64.80, 25.60, 65.40],
  viewScale: 1.3,
  label: { lon: 25.10, lat: 65.10, rotation: 0 },
  source: "波的尼亚湾北岸：芬兰最北端的波罗的海海岸，冬季结冰期长达数月，是波罗的海结冰范围最广、冰层最厚的海域，沿岸地壳均衡抬升现象同样显著（芬兰自然资源局）",
};

const ALAND_ISLANDS: TerrainEntry = {
  id: "aland-islands",
  nameZh: "奥兰群岛",
  nameEn: "Åland Islands",
  category: "island",
  regionId: "europe",
  country: "finland",
  landmark: { name: "玛丽港", lon: 19.9348, lat: 60.0973, elevation: 5, kind: "city" },
  bbox: [19.50, 59.70, 21.30, 60.50],
  viewScale: 1.6,
  label: { lon: 20.20, lat: 60.15, rotation: 0 },
  source: "奥兰群岛：波罗的海入口处由约6500座岛屿、礁石组成的群岛，是芬兰唯一的瑞典语单一官方语言自治区，1921年国际联盟裁决确立其芬兰主权下的高度自治与非军事化地位，群岛最高点海拔仅116米（芬兰自然资源局 / 奥兰自治政府）",
};

const HAILUOTO: TerrainEntry = {
  id: "hailuoto",
  nameZh: "海卢奥托岛",
  nameEn: "Hailuoto",
  category: "island",
  regionId: "europe",
  country: "finland",
  landmark: { name: "海卢奥托村", lon: 24.7500, lat: 65.0333, elevation: 5, kind: "city" },
  bbox: [24.55, 64.95, 25.15, 65.15],
  label: { lon: 24.85, lat: 65.03, rotation: 0 },
  source: "海卢奥托岛：波的尼亚湾中一座持续因地壳均衡抬升而扩大的沙质岛屿，陆地至今仍以每年约9毫米的速度抬升，岛上广布沙丘与沙滩，是芬兰地壳抬升现象最直观的观测点之一（芬兰自然资源局）",
};

const SALPAUSSELKA_RIDGE: TerrainEntry = {
  id: "salpausselka-ridge",
  nameZh: "萨尔帕塞尔卡终碛岭",
  nameEn: "Salpausselkä",
  category: "hills",
  regionId: "europe",
  country: "finland",
  landmark: { name: "拉赫蒂萨尔帕塞尔卡滑雪跳台", lon: 25.6615, lat: 60.9827, elevation: 145, kind: "escarpment" },
  bbox: [25.30, 60.85, 26.00, 61.05],
  axis: [[25.35, 60.90], [25.95, 61.00]],
  label: { lon: 25.65, lat: 60.95, rotation: 10 },
  source: "萨尔帕塞尔卡终碛岭：末次冰期新仙女木冷期（约1.29万至1.16万年前）冰川停滞、大量融水沙砾在冰川前缘持续堆积形成的终碛岭系统，横贯芬兰南部长达600余公里，拉赫蒂市段落建有著名的滑雪跳台，2010年设立萨尔帕塞尔卡联合国教科文组织世界地质公园（UNESCO）",
};

const PUNKAHARJU_ESKER: TerrainEntry = {
  id: "punkaharju-esker",
  nameZh: "蓬卡哈尔尤蛇形丘",
  nameEn: "Punkaharju",
  category: "hills",
  regionId: "europe",
  country: "finland",
  landmark: { name: "蓬卡哈尔尤观景点", lon: 29.3269, lat: 61.7967, elevation: 90, kind: "escarpment" },
  bbox: [29.20, 61.72, 29.45, 61.87],
  axis: [[29.24, 61.85], [29.42, 61.75]],
  label: { lon: 29.33, lat: 61.80, rotation: -35 },
  source: "蓬卡哈尔尤蛇形丘：末次冰期冰下河道沉积形成的狭长蛇形丘，最窄处路面两侧几乎直接紧邻塞马湖水面，是芬兰最著名的蛇形丘地貌景观，19世纪起即为俄国沙皇尼古拉一世下令保护的自然景观（芬兰自然资源局）",
};

const KOLI_HILLS: TerrainEntry = {
  id: "koli-hills",
  nameZh: "科利丘陵",
  nameEn: "Koli",
  category: "hills",
  regionId: "europe",
  country: "finland",
  landmark: { name: "乌科科利峰", lon: 29.5008, lat: 63.0967, elevation: 347, kind: "peak" },
  bbox: [29.40, 63.02, 29.60, 63.15],
  label: { lon: 29.50, lat: 63.08, rotation: 0 },
  source: "科利丘陵：芬兰东部一列由约20亿年前古老石英岩构成的丘陵，长期风化侵蚀形成低缓浑圆的山势，乌科科利峰347米俯瞰皮耶利宁湖，被视为芬兰最具代表性的“国家风景”，20世纪初画家等艺术家的创作使其成为芬兰民族景观的象征（芬兰自然资源局）",
};

const AAVASAKSA: TerrainEntry = {
  id: "aavasaksa",
  nameZh: "阿瓦萨克萨丘",
  nameEn: "Aavasaksa",
  category: "hills",
  regionId: "europe",
  country: "finland",
  landmark: { name: "阿瓦萨克萨观景台", lon: 23.6683, lat: 66.5386, elevation: 242, kind: "escarpment" },
  bbox: [23.55, 66.48, 23.80, 66.60],
  label: { lon: 23.67, lat: 66.54, rotation: 0 },
  source: "阿瓦萨克萨丘：位于北极圈之上、俯瞰托尔尼奥河谷的一座孤立丘陵，18世纪法国科学考察队曾在此测量子午线弧度以验证地球形状，如今是观测仲夏夜不落之日的著名地点（芬兰自然资源局）",
};

const OSTROBOTHNIA_PLAIN: TerrainEntry = {
  id: "ostrobothnia-plain",
  nameZh: "奥斯特罗博特尼亚平原",
  nameEn: "Ostrobothnia Plain",
  category: "plain",
  regionId: "europe",
  country: "finland",
  landmark: { name: "瓦萨", lon: 21.6216, lat: 62.7903, elevation: 5, kind: "city" },
  bbox: [21.00, 62.30, 22.80, 63.40],
  viewScale: 1.4,
  label: { lon: 21.90, lat: 62.90, rotation: 0 },
  source: "奥斯特罗博特尼亚平原：芬兰西海岸一片因地壳均衡抬升而持续扩大的低平沿海农业区，是芬兰地势最平坦、农业最发达的区域之一，沿海仍能观测到明显的陆地抬升现象（芬兰自然资源局）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 芬兰 =====
  HALTI_FELL, PALLAS_YLLASTUNTURI, LEVI_FELL,
  URHO_KEKKONEN_WILDERNESS,
  SAIMAA, PAIJANNE, INARI_LAKE, NASIJARVI, PUURIJARVI, KALLAVESI,
  VUOKSI_RIVER, KEMIJOKI, TORNIONJOKI_FI,
  OULANKA_CANYON, REPOVESI_GORGE, KEVO_CANYON,
  ARCHIPELAGO_SEA, KVARKEN_ARCHIPELAGO, BOTHNIAN_BAY_COAST,
  ALAND_ISLANDS, HAILUOTO,
  SALPAUSSELKA_RIDGE, PUNKAHARJU_ESKER, KOLI_HILLS, AAVASAKSA,
  OSTROBOTHNIA_PLAIN,
];
