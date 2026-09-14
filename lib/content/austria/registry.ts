import type { TerrainEntry } from "@/lib/terrain-registry";

// 台丘聚落（terp-mounds）/ 羊角村（giethoorn）2 个 `settlement` 条目已于 2026-09-04 移除
// （settlement 分类整体废弃，见 docs/terrain-taxonomy.md §8）；未迁移到旅游模式（本轮任务范围仅限中国 5 个）。

// ============================================================
// 欧洲 / 奥地利
// ============================================================

const HOHE_TAUERN: TerrainEntry = {
  id: "hohe-tauern",
  nameZh: "高陶恩山",
  nameEn: "Hohe Tauern",
  category: "mountain_system",
  regionId: "europe",
  country: "austria",
  landmark: { name: "大格洛克纳山", lon: 12.6944, lat: 47.0742, elevation: 3798, kind: "peak" },
  bbox: [12.0, 46.9, 13.3, 47.2],
  axis: [[12.0, 47.05], [13.3, 47.05]],
  viewScale: 1.6,
  label: { lon: 12.65, lat: 47.05, rotation: 0 },
  source: "高陶恩山：阿尔卑斯山脉中段一条以片麻岩、片岩为主的高山带，主峰大格洛克纳峰海拔3798米，是奥地利全境最高点，也是阿尔卑斯山脉中仅次于勃朗峰的第二高突起峰；东坡的帕斯特采冰川长约9公里，是奥地利最大的冰川；高陶恩国家公园面积1856平方公里，是阿尔卑斯山区面积最大的保护区，园内有300余座海拔超3000米的山峰、342条冰川、551个高山湖泊（高陶恩国家公园 / 维基）",
};

const OTZTAL_ALPS: TerrainEntry = {
  id: "otztal-alps",
  nameZh: "厄茨塔尔阿尔卑斯山",
  nameEn: "Ötztal Alps",
  category: "mountain_system",
  regionId: "europe",
  country: "austria",
  landmark: { name: "野人峰", lon: 10.8672, lat: 46.8825, elevation: 3768, kind: "peak" },
  bbox: [10.6, 46.75, 11.2, 47.05],
  axis: [[10.65, 46.85], [11.15, 46.95]],
  viewScale: 1.3,
  label: { lon: 10.9, lat: 46.9, rotation: -30 },
  source: "厄茨塔尔阿尔卑斯山：奥地利海拔第二高的山系，主峰野人峰海拔3768米，是蒂罗尔州最高点；山体冰川覆盖广泛，200多条冰川分布其中，盖帕奇冰川面积约17平方公里，是奥地利仅次于帕斯特采冰川的第二大冰川（PeakVisor / 维基）",
};

const ZILLERTAL_ALPS: TerrainEntry = {
  id: "zillertal-alps",
  nameZh: "齐勒河谷阿尔卑斯山",
  nameEn: "Zillertal Alps",
  category: "mountain_system",
  regionId: "europe",
  country: "austria",
  landmark: { name: "霍赫法伊勒峰", lon: 11.6567, lat: 46.9775, elevation: 3510, kind: "peak" },
  bbox: [11.4, 46.9, 12.3, 47.15],
  axis: [[11.45, 47.0], [12.25, 47.0]],
  label: { lon: 11.85, lat: 47.0, rotation: 0 },
  source: "齐勒河谷阿尔卑斯山：位于蒂罗尔州与南蒂罗尔（意大利）交界一带的高山带，主峰霍赫法伊勒峰海拔3510米，山体由结晶岩构成，冰川广泛发育，是奥地利冰川滑雪场集中的区域之一（维基 / PeakVisor）",
};

const KARWENDEL: TerrainEntry = {
  id: "karwendel",
  nameZh: "卡尔文德尔山",
  nameEn: "Karwendel",
  category: "mountain_system",
  regionId: "europe",
  country: "austria",
  landmark: { name: "比尔克峰", lon: 11.4589, lat: 47.4192, elevation: 2749, kind: "peak" },
  bbox: [11.0, 47.35, 12.1, 47.55],
  axis: [[11.05, 47.45], [12.05, 47.45]],
  viewScale: 1.3,
  label: { lon: 11.5, lat: 47.48, rotation: 0 },
  source: "卡尔文德尔山：北石灰岩阿尔卑斯山中面积最大的山系，介于因河谷（蒂罗尔）与伊萨尔河谷（巴伐利亚）之间，主峰比尔克峰海拔2749米；山体石灰岩层约形成于2.5亿年前，陡峭崖壁、冰碛与巨大岩屑坡是典型地貌，南麓紧邻因斯布鲁克市（维基 / PeakVisor）",
};

const DACHSTEIN: TerrainEntry = {
  id: "dachstein",
  nameZh: "达赫斯坦山",
  nameEn: "Dachstein",
  category: "mountain_system",
  regionId: "europe",
  country: "austria",
  landmark: { name: "上达赫斯坦峰", lon: 13.6058, lat: 47.4753, elevation: 2995, kind: "peak" },
  bbox: [13.45, 47.4, 13.75, 47.55],
  label: { lon: 13.6, lat: 47.48, rotation: 0 },
  source: "达赫斯坦山：地跨上奥地利州与施泰尔马克州交界（部分延伸至萨尔茨堡州）的石灰岩山地，主峰上达赫斯坦峰海拔2995米，是这两个州的最高点，整个山块横跨上奥地利、施泰尔马克与萨尔茨堡三州、因而被称为「三州山」（三州交界点在托尔施泰因峰 2,947 m，不在主峰）；山体喀斯特地貌发育，已探明240余个洞穴，长毛象洞、巨人冰洞等对外开放；哈尔施塔特冰川是阿尔卑斯山脉最东端的冰川之一（大英百科 / 维基）",
};

const RAX_SCHNEEBERG: TerrainEntry = {
  id: "rax-schneeberg",
  nameZh: "拉克斯—施内山",
  nameEn: "Rax-Schneeberg Group",
  category: "mountain_system",
  regionId: "europe",
  country: "austria",
  landmark: { name: "施内山（僧衣峰）", lon: 15.8058, lat: 47.7639, elevation: 2076, kind: "peak" },
  bbox: [15.65, 47.68, 15.95, 47.85],
  label: { lon: 15.78, lat: 47.77, rotation: 0 },
  source: "拉克斯—施内山：下奥地利州最高的山地，海拔2076米的施内山是阿尔卑斯山脉向东延伸中最后一座超过2000米的山峰，距维也纳仅约一小时车程，被称为“维也纳人的后山”；山体为石灰岩喀斯特高原，自1873年起经120公里输水管道向维也纳供应饮用水（维基）",
};

const CARNIC_ALPS: TerrainEntry = {
  id: "carnic-alps",
  nameZh: "卡尔尼克阿尔卑斯山",
  nameEn: "Carnic Alps",
  category: "mountain_system",
  regionId: "europe",
  country: "austria",
  landmark: { name: "霍厄瓦特峰", lon: 12.9139, lat: 46.6167, elevation: 2780, kind: "peak" },
  bbox: [12.3, 46.55, 13.4, 46.72],
  axis: [[12.35, 46.63], [13.35, 46.63]],
  viewScale: 1.4,
  label: { lon: 12.85, lat: 46.63, rotation: 0 },
  source: "卡尔尼克阿尔卑斯山：南石灰岩阿尔卑斯山的一部分，主脊线大致沿奥地利与意大利边境延伸约100公里，最高点霍厄瓦特峰海拔2780米；山体记录了泥盆纪至石炭纪的地层界线，是研究这一地质年代过渡的重要区域（大英百科 / 地质文献）",
};

const KITZBUHEL_ALPS: TerrainEntry = {
  id: "kitzbuhel-alps",
  nameZh: "基茨比厄尔阿尔卑斯山",
  nameEn: "Kitzbühel Alps",
  category: "mountain_system",
  regionId: "europe",
  country: "austria",
  landmark: { name: "基茨比厄尔霍恩峰", lon: 12.3897, lat: 47.4658, elevation: 1996, kind: "peak" },
  bbox: [12.0, 47.35, 12.9, 47.55],
  axis: [[12.05, 47.45], [12.85, 47.45]],
  label: { lon: 12.4, lat: 47.45, rotation: 0 },
  source: "基茨比厄尔阿尔卑斯山：东阿尔卑斯山脉中一段以千枚岩、板岩为主的山地，介于齐勒河与萨拉赫河之间，主峰基茨比厄尔霍恩峰海拔1996米；相比北侧石灰岩阿尔卑斯山陡峭的崖壁，这里的板岩山体坡度更缓、轮廓更圆润，是著名的冬季滑雪胜地（大英百科 / 维基）",
};

const SILVRETTA_ALPS_AT: TerrainEntry = {
  id: "silvretta-alps-at",
  nameZh: "希尔弗雷塔山（奥地利段）",
  nameEn: "Silvretta Alps (Austrian side)",
  category: "mountain_system",
  regionId: "europe",
  country: "austria",
  landmark: { name: "比勒赫厄山口（希尔弗雷塔水库）", lon: 10.0928, lat: 46.9214, elevation: 2032, kind: "pass" },
  bbox: [9.95, 46.85, 10.35, 47.0],
  label: { lon: 10.15, lat: 46.92, rotation: 0 },
  source: "希尔弗雷塔山：中央东阿尔卑斯山脉的一段，横跨奥地利蒂罗尔州、福拉尔贝格州与瑞士格劳宾登州；山体大部分及最高峰皮兹利纳德峰（3411米）在瑞士境内，奥地利一侧地势稍缓，比勒赫厄山口一带建有希尔弗雷塔水库，是阿尔卑斯山区高山水电与冰川观测的代表地点（大英百科 / 维基）",
};

const TOTES_GEBIRGE: TerrainEntry = {
  id: "totes-gebirge",
  nameZh: "陶滕山",
  nameEn: "Totes Gebirge",
  category: "plateau",
  regionId: "europe",
  country: "austria",
  landmark: { name: "大普里尔峰", lon: 14.0625, lat: 47.7169, elevation: 2515, kind: "peak" },
  bbox: [13.75, 47.62, 14.25, 47.78],
  viewScale: 1.2,
  label: { lon: 14.0, lat: 47.72, rotation: 0 },
  source: "陶滕山（字面意为“死亡山”）：北石灰岩阿尔卑斯山的一部分，是中欧面积最大的喀斯特高原，山体崖壁陡峭、顶部相对平坦，多座山峰超过2000米，最高点大普里尔峰海拔2515米；主体由达赫斯坦石灰岩构成，喀斯特漏斗、溶洞广布（维基）",
};

const STEINERNES_MEER: TerrainEntry = {
  id: "steinernes-meer",
  nameZh: "石海高原",
  nameEn: "Steinernes Meer",
  category: "plateau",
  regionId: "europe",
  country: "austria",
  landmark: { name: "泽尔布峰", lon: 12.85, lat: 47.47, elevation: 2655, kind: "peak" },
  bbox: [12.75, 47.42, 12.95, 47.52],
  label: { lon: 12.83, lat: 47.47, rotation: 0 },
  source: "石海高原（字面意为“石头海”）：贝希特斯加登阿尔卑斯山的一部分，地跨奥地利萨尔茨堡州与德国巴伐利亚州，最高点泽尔布峰海拔2655米；海拔2000米以上的区域呈典型的喀斯特台地地貌，山峰多集中在2000至2600米之间，如同一片起伏的石质海面；主体由约2.3亿年前的达赫斯坦石灰岩叠压在拉姆绍白云岩之上构成（维基）",
};

const TENNENGEBIRGE: TerrainEntry = {
  id: "tennengebirge",
  nameZh: "腾嫩山",
  nameEn: "Tennengebirge",
  category: "plateau",
  regionId: "europe",
  country: "austria",
  landmark: { name: "冰巨人世界溶洞入口", lon: 13.19, lat: 47.5186, elevation: 1641, kind: "peak" },
  bbox: [13.1, 47.42, 13.35, 47.58],
  label: { lon: 13.2, lat: 47.5, rotation: 0 },
  source: "腾嫩山：北石灰岩阿尔卑斯山中一处喀斯特台地，位于萨尔茨堡以南约40公里的韦尔芬附近；山体内的“冰巨人世界”是世界上已探明范围最大的冰洞，总长逾42公里（对外开放的部分约1公里覆有冰层），1879年由安东·波塞尔特首次系统考察；冬季积雪从洞口渗入，夏季气流将其塑造成冰层，洞内即使在夏季气温也接近0℃（维基 / 官方景区资料）",
};

const WIENERWALD: TerrainEntry = {
  id: "wienerwald",
  nameZh: "维也纳森林",
  nameEn: "Wienerwald",
  category: "hills",
  regionId: "europe",
  country: "austria",
  landmark: { name: "舍普尔峰", lon: 15.9333, lat: 48.1167, elevation: 893, kind: "peak" },
  bbox: [15.75, 48.05, 16.25, 48.3],
  viewScale: 1.2,
  label: { lon: 16.0, lat: 48.15, rotation: 0 },
  source: "维也纳森林：阿尔卑斯山脉（北石灰岩阿尔卑斯山）向东延伸至维也纳城郊的最后一段丘陵，面积约1000平方公里，最高点舍普尔峰海拔893米；石灰岩、白云岩基岩发育典型喀斯特地貌，雨水易渗入地下形成暗河；2005年被联合国教科文组织列为生物圈保护区（维基）",
};

const WALDVIERTEL: TerrainEntry = {
  id: "waldviertel",
  nameZh: "瓦尔德维尔特尔高原",
  nameEn: "Waldviertel",
  category: "hills",
  regionId: "europe",
  country: "austria",
  landmark: { name: "内贝尔峰", lon: 14.8494, lat: 48.7994, elevation: 1017, kind: "peak" },
  bbox: [14.4, 48.55, 15.4, 48.95],
  viewScale: 1.4,
  label: { lon: 14.9, lat: 48.75, rotation: 0 },
  source: "瓦尔德维尔特尔（字面意为“森林区”）：下奥地利州西北部一片低缓起伏的花岗岩、片麻岩高原，是波希米亚地块在奥地利境内的延伸部分，最高点内贝尔峰海拔1017米；地表覆盖大片森林与草地，是奥地利最古老结晶基岩出露的地区之一（维基）",
};

const VIENNA_BASIN: TerrainEntry = {
  id: "vienna-basin",
  nameZh: "维也纳盆地",
  nameEn: "Vienna Basin",
  category: "basin",
  regionId: "europe",
  country: "austria",
  landmark: { name: "新城（维也纳新城）", lon: 16.25, lat: 47.95, elevation: 265, kind: "city" },
  bbox: [16.0, 47.75, 16.6, 48.15],
  viewScale: 1.4,
  label: { lon: 16.3, lat: 47.9, rotation: 0 },
  source: "维也纳盆地：位于阿尔卑斯山脉、喀尔巴阡山脉与潘诺尼亚平原交接处的年轻构造沉降盆地，地形上把阿尔卑斯山与西喀尔巴阡山分隔开，但地下岩层证明两者原本相连；盆地成因与中新世以来沿走滑断层的持续拉张沉降有关，第四纪断裂活动至今仍在延续（地质文献）",
};

const WACHAU: TerrainEntry = {
  id: "wachau",
  nameZh: "瓦豪河谷",
  nameEn: "Wachau",
  category: "valley",
  regionId: "europe",
  country: "austria",
  landmark: { name: "杜恩施泰因", lon: 15.5219, lat: 48.3958, elevation: 210, kind: "city" },
  bbox: [15.25, 48.35, 15.65, 48.45],
  axis: [[15.30, 48.40], [15.60, 48.38]],
  label: { lon: 15.45, lat: 48.4, rotation: -10 },
  source: "瓦豪河谷：多瑙河在梅尔克与克雷姆斯之间切出的一段长约36公里的河谷，两岸梯田葡萄园、中世纪修道院与古堡沿河分布；谷底覆盖有黄土层，河流阶地上是砾石与洪泛细沙沉积；2000年作为文化景观列入联合国教科文组织世界遗产名录（维基 / UNESCO）",
};

const INNTAL: TerrainEntry = {
  id: "inntal",
  nameZh: "因河谷",
  nameEn: "Inn Valley (Inntal)",
  category: "valley",
  regionId: "europe",
  country: "austria",
  landmark: { name: "因斯布鲁克", lon: 11.4041, lat: 47.2692, elevation: 574, kind: "city" },
  bbox: [11.0, 47.15, 12.1, 47.35],
  axis: [[11.05, 47.2], [12.05, 47.3]],
  viewScale: 1.3,
  label: { lon: 11.5, lat: 47.25, rotation: 0 },
  source: "因河谷：因河切穿东阿尔卑斯山脉形成的一条自西向东的宽阔冰川谷地，北依卡尔文德尔山、南邻基茨比厄尔阿尔卑斯山，谷底海拔多在500至1000米之间；谷坡保留有沃尔姆冰期的冰碛台地，下游平原由因河长期冲积而成；因斯布鲁克即坐落在谷地中段（维基）",
};

const LIECHTENSTEINKLAMM: TerrainEntry = {
  id: "liechtensteinklamm",
  nameZh: "列支敦士登峡谷",
  nameEn: "Liechtensteinklamm",
  category: "gorge",
  regionId: "europe",
  country: "austria",
  landmark: { name: "峡谷步道入口", lon: 13.1964, lat: 47.3444, elevation: 640, kind: "gorge" },
  bbox: [13.17, 47.32, 13.22, 47.36],
  label: { lon: 13.19, lat: 47.34, rotation: 0 },
  source: "列支敦士登峡谷：萨尔茨堡以南约50公里、圣约翰-蓬高附近的一条石灰岩峡谷，全长约4公里，崖壁最高处约300米；1875年列支敦士登的约翰二世出资修建了栈道，峡谷因此得名，末端有一处瀑布；2016年仅半年就有超过20万人次到访（圣约翰-蓬高市政府，1 级，核实 2026-09-12）",
};

const KRIMML_WATERFALLS: TerrainEntry = {
  id: "krimml-waterfalls",
  nameZh: "克里姆尔瀑布",
  nameEn: "Krimml Waterfalls",
  category: "gorge",
  regionId: "europe",
  country: "austria",
  landmark: { name: "克里姆尔瀑布", lon: 12.1719, lat: 47.2144, elevation: 1076, kind: "gorge" },
  bbox: [12.15, 47.20, 12.20, 47.23],
  label: { lon: 12.17, lat: 47.21, rotation: 0 },
  source: "克里姆尔瀑布：克里姆尔河（源自高陶恩山冰川）分三级跌落形成的瀑布群，总落差约380米，是奥地利落差最大的瀑布，在欧洲名列第一、世界第五；三级落差分别约为140米、100米、140米；瀑布位于高陶恩国家公园内，每年约35万人到访（维基 / 大英百科）",
};

const DANUBE_RIVER_AT: TerrainEntry = {
  id: "danube-river-at",
  nameZh: "多瑙河（奥地利段）",
  nameEn: "Danube (Austrian stretch)",
  category: "river",
  regionId: "europe",
  country: "austria",
  landmark: { name: "林茨", lon: 14.29, lat: 48.3, elevation: 255, kind: "city" },
  bbox: [13.0, 48.1, 16.9, 48.5],
  axis: [[13.05, 48.35], [16.85, 48.15]],
  viewScale: 2.0,
  label: { lon: 14.8, lat: 48.3, rotation: -8 },
  source: "多瑙河：欧洲第二长河，全长约2888公里，其中约350公里流经奥地利，自西向东贯穿因河谷下游、林茨盆地、瓦豪河谷、维也纳盆地，最终流向斯洛伐克；沿岸串起因斯布鲁克以东的多座重要城市，是奥地利历史上最重要的水运通道（维基）",
};

const MUR_RIVER: TerrainEntry = {
  id: "mur-river",
  nameZh: "穆尔河",
  nameEn: "Mur River",
  category: "river",
  regionId: "europe",
  country: "austria",
  landmark: { name: "格拉茨", lon: 15.4395, lat: 47.0707, elevation: 353, kind: "city" },
  bbox: [13.6, 46.9, 15.6, 47.4],
  axis: [[13.65, 47.35], [15.55, 46.95]],
  viewScale: 1.5,
  label: { lon: 14.6, lat: 47.15, rotation: -15 },
  source: "穆尔河：发源于拉德施塔特陶恩山，全长约453公里，其中很长一段流经施泰尔马克州，最终经斯洛文尼亚、克罗地亚汇入德拉瓦河；下游与斯洛文尼亚交界的河段（Unteres Murtal，2019 年 UNESCO 生物圈公园）保留有奥地利面积第二大的河漫滩森林，是多瑙鲑等珍稀鱼类的天然产卵地，被认为是奥地利生态价值最高的河流之一；格拉茨市即坐落在穆尔河畔（欧洲环境署 / 大英百科）",
};

const WORTHERSEE: TerrainEntry = {
  id: "worthersee",
  nameZh: "沃尔特湖",
  nameEn: "Wörthersee",
  category: "lake",
  regionId: "europe",
  country: "austria",
  landmark: { name: "湖心", lon: 14.15, lat: 46.6333, elevation: 439, kind: "lake" },
  bbox: [14.05, 46.60, 14.30, 46.67],
  axis: [[14.06, 46.62], [14.28, 46.65]],
  label: { lon: 14.17, lat: 46.63, rotation: 0 },
  source: "沃尔特湖：克恩顿州最大的湖泊，面积约19.4平方公里，最大水深约85米；湖区夏季水温较高，是奥地利南部重要的避暑度假区（Lake-River Dr Katrin Teubner）",
};

const ATTERSEE: TerrainEntry = {
  id: "attersee",
  nameZh: "阿特尔湖",
  nameEn: "Attersee",
  category: "lake",
  regionId: "europe",
  country: "austria",
  landmark: { name: "湖心", lon: 13.55, lat: 47.8833, elevation: 469, kind: "lake" },
  bbox: [13.50, 47.75, 13.60, 48.00],
  axis: [[13.53, 48.0], [13.55, 47.76]],
  label: { lon: 13.55, lat: 47.88, rotation: 0 },
  source: "阿特尔湖：萨尔茨卡默古特地区的一座冰蚀湖，面积约46.2平方公里，是完全位于奥地利境内面积最大的湖泊；平均水深约85米，最大水深169米（Lake-River Dr Katrin Teubner）",
};

const NEUSIEDLER_SEE: TerrainEntry = {
  id: "neusiedler-see",
  nameZh: "新锡德尔湖",
  nameEn: "Neusiedler See",
  category: "lake",
  regionId: "europe",
  country: "austria",
  landmark: { name: "湖心（奥地利一侧）", lon: 16.7667, lat: 47.8167, elevation: 115, kind: "lake" },
  bbox: [16.68, 47.68, 16.86, 47.98],
  viewScale: 1.3,
  label: { lon: 16.77, lat: 47.85, rotation: 0 },
  source: "新锡德尔湖：欧洲最西端的草原湖，湖区跨奥地利布尔根兰州与匈牙利，是中欧最大的内流湖，也是欧洲最大的咸水湖之一，面积约309平方公里，平均水深仅约50至60厘米；作为典型草原湖，水位会经历周期性的丰盈与干涸；2001年跨境的“新锡德尔湖—费尔特湖文化景观”列入联合国教科文组织世界遗产名录（联合国教科文组织 / 维基）",
};

const MILLSTATTER_SEE: TerrainEntry = {
  id: "millstatter-see",
  nameZh: "米尔施塔特湖",
  nameEn: "Millstätter See",
  category: "lake",
  regionId: "europe",
  country: "austria",
  landmark: { name: "湖心", lon: 13.5833, lat: 46.7833, elevation: 588, kind: "lake" },
  bbox: [13.53, 46.76, 13.68, 46.82],
  axis: [[13.55, 46.81], [13.66, 46.77]],
  label: { lon: 13.6, lat: 46.79, rotation: -20 },
  source: "米尔施塔特湖：克恩顿州第二大湖，面积约13.3平方公里，平均水深约89米，最大水深142米，是奥地利水深最深的湖泊之一（Lake-River Dr Katrin Teubner）",
};

const HALLSTATTERSEE: TerrainEntry = {
  id: "hallstattersee",
  nameZh: "哈尔施塔特湖",
  nameEn: "Hallstättersee",
  category: "lake",
  regionId: "europe",
  country: "austria",
  landmark: { name: "哈尔施塔特村", lon: 13.6486, lat: 47.5622, elevation: 511, kind: "city" },
  bbox: [13.62, 47.53, 13.68, 47.68],
  axis: [[13.65, 47.67], [13.65, 47.54]],
  label: { lon: 13.66, lat: 47.6, rotation: 0 },
  source: "哈尔施塔特湖：萨尔茨卡默古特地区一座狭长的冰蚀湖，面积约8.55平方公里，最大水深约125米，湖东岸的哈尔施塔特村依达赫斯坦山而建，是欧洲最古老的盐矿开采地之一，1997年作为“哈尔施塔特—达赫斯坦文化景观”列入联合国教科文组织世界遗产名录（维基 / UNESCO）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 奥地利 =====
  HOHE_TAUERN, OTZTAL_ALPS, ZILLERTAL_ALPS, KARWENDEL, DACHSTEIN,
  RAX_SCHNEEBERG, CARNIC_ALPS, KITZBUHEL_ALPS, SILVRETTA_ALPS_AT,
  TOTES_GEBIRGE, STEINERNES_MEER, TENNENGEBIRGE,
  WIENERWALD, WALDVIERTEL,
  VIENNA_BASIN,
  WACHAU, INNTAL,
  LIECHTENSTEINKLAMM, KRIMML_WATERFALLS,
  DANUBE_RIVER_AT, MUR_RIVER,
  WORTHERSEE, ATTERSEE, NEUSIEDLER_SEE, MILLSTATTER_SEE, HALLSTATTERSEE,
];
