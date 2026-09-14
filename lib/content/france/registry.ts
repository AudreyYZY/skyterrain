import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 法国（regionId: "europe"，country: "france"）
// 坐标据 BRGM（法国地质调查局）/ IGN / 法国国家公园 / UNESCO；
// 只做法国本土（métropole）与科西嘉，不含海外省与海外领地；
// 跨境山脉（阿尔卑斯 / 比利牛斯）按中性事实表述，不涉主权
// ============================================================

const FRENCH_ALPS: TerrainEntry = {
  id: "french-alps",
  nameZh: "法国阿尔卑斯山脉",
  nameEn: "French Alps / Alpes françaises",
  category: "mountain_system",
  regionId: "europe",
  country: "france",
  landmark: { name: "勃朗峰（Mont Blanc，约4806m）", lon: 6.8652, lat: 45.8326, elevation: 4806, kind: "peak" },
  bbox: [5.5, 43.7, 7.7, 46.3],
  axis: [[5.8, 43.9], [7.0, 46.1]],
  viewFrom: 250,
  viewScale: 1.9,
  label: { lon: 6.4, lat: 45.2, rotation: -50 },
  pois: [
    { name: "梅康图尔 / 埃克兰 / 瓦努瓦兹国家公园", lon: 6.3, lat: 44.9, note: "阿尔卑斯法国一侧的高山国家公园" },
  ],
  source: "法国阿尔卑斯：阿尔卑斯山脉在法国境内的部分，从日内瓦湖向南延伸到地中海；阿尔卑斯造山运动（新生代、非洲与欧洲板块汇聚）形成，山体年轻、构造活跃；最高点勃朗峰约4806米（顶部为雪、逐年略变），是阿尔卑斯与西欧的最高峰，位于法国与意大利交界（IGN / BRGM）",
};

const PYRENEES: TerrainEntry = {
  id: "pyrenees",
  nameZh: "比利牛斯山脉",
  nameEn: "Pyrenees / Pyrénées",
  category: "mountain_system",
  regionId: "europe",
  country: "france",
  landmark: { name: "维涅马勒峰（Vignemale，3298m，法国一侧最高）", lon: -0.144, lat: 42.773, elevation: 3298, kind: "peak" },
  bbox: [-1.8, 42.3, 3.2, 43.4],
  axis: [[-1.6, 42.9], [3.0, 42.5]],
  viewFrom: 0,
  viewScale: 2.0,
  label: { lon: 0.7, lat: 42.8, rotation: -8 },
  source: "比利牛斯山脉：法国与西班牙之间东西向的界山（安道尔位于其中）；骨架来自约3—3.7亿年前的海西造山，之后在阿尔卑斯造山期因伊比利亚与欧洲板块低速汇聚被重新抬升、褶皱；整体海拔低于阿尔卑斯，最高峰阿内托峰3404米在西班牙一侧，法国一侧最高为维涅马勒3298米（BRGM）",
};

const MASSIF_CENTRAL: TerrainEntry = {
  id: "massif-central",
  nameZh: "中央高原",
  nameEn: "Massif Central",
  category: "plateau",
  regionId: "europe",
  country: "france",
  landmark: { name: "桑西山（Puy de Sancy，1885m，中央高原最高点）", lon: 2.813, lat: 45.528, elevation: 1885, kind: "peak" },
  bbox: [1.8, 44.0, 4.6, 46.1],
  viewScale: 2.3,
  label: { lon: 3.0, lat: 45.2, rotation: 0 },
  source: "中央高原：占法国国土约六分之一的一片古老高地，主体是海西造山（约3.6—2.5亿年前）形成的花岗岩、片麻岩、片岩；约2300万年前整体抬升、掀斜，上新世起又有强烈火山活动，堆出一系列火山锥和熔岩高原；桑西山属一座约22万年未活动的老层火山（Britannica / BRGM）",
};

const VOSGES: TerrainEntry = {
  id: "vosges",
  nameZh: "孚日山脉",
  nameEn: "Vosges",
  category: "mountain_system",
  regionId: "europe",
  country: "france",
  landmark: { name: "大球峰（Grand Ballon，1424m）", lon: 7.100, lat: 47.902, elevation: 1424, kind: "peak" },
  bbox: [6.55, 47.6, 7.35, 48.55],
  axis: [[6.9, 47.7], [7.0, 48.5]],
  viewFrom: 90,
  viewScale: 1.6,
  label: { lon: 6.95, lat: 48.1, rotation: -84 },
  source: "孚日山脉：法国东部一块海西期的古老地块，与莱茵地堑对侧的黑森林曾是同一片山、被地堑张裂分开；南段是花岗岩、砂岩的圆顶“球峰”（ballons），北段是红砂岩高地；末次冰期山顶有小规模冰川，留下冰斗湖（BRGM）",
};

const ARMORICAN_MASSIF: TerrainEntry = {
  id: "armorican-massif",
  nameZh: "阿摩里卡山地",
  nameEn: "Armorican Massif / Massif armoricain",
  category: "hills",
  regionId: "europe",
  country: "france",
  landmark: { name: "阿雷山（Monts d'Arrée，布列塔尼最高，约385m）", lon: -3.90, lat: 48.38, elevation: 385, kind: "escarpment" },
  bbox: [-5.2, 46.9, -1.0, 49.0],
  viewScale: 2.2,
  label: { lon: -3.2, lat: 48.1, rotation: -10 },
  source: "阿摩里卡山地：法国西北的一块海西期古老地块，覆盖布列塔尼、诺曼底西部和卢瓦尔河地区；早已被夷平成低缓的丘陵和高地（最高仅约385m），石英岩脊突出成一道道长垄；海岸被海侵淹没老河谷形成众多“里亚式”峡湾状海湾（BRGM）",
};

const PARIS_BASIN: TerrainEntry = {
  id: "paris-basin",
  nameZh: "巴黎盆地",
  nameEn: "Paris Basin / Bassin parisien",
  category: "basin",
  regionId: "europe",
  country: "france",
  landmark: { name: "法兰西岛一带（巴黎盆地中心）", lon: 2.6, lat: 48.7, elevation: 90, kind: "escarpment" },
  bbox: [-0.5, 47.2, 5.2, 50.0],
  viewScale: 2.4,
  label: { lon: 2.8, lat: 48.6, rotation: 0 },
  source: "巴黎盆地：法国北-中部一个椭圆形的向斜沉积盆地，海西造山后的老陆块上自三叠纪起接受一层层石灰岩、白垩、砂、黏土沉积，地层像叠起的碗、向中心（巴黎附近）倾伏；东、南缘较硬的石灰岩被侵蚀后突出成一圈朝外的陡崖（cuesta 单面山），香槟、洛林等地形都是这样（BRGM / MINES Paris）",
};

const AQUITAINE_BASIN: TerrainEntry = {
  id: "aquitaine-basin",
  nameZh: "阿基坦盆地",
  nameEn: "Aquitaine Basin / Bassin aquitain",
  category: "basin",
  regionId: "europe",
  country: "france",
  landmark: { name: "加龙河下游 / 波尔多一带", lon: -0.55, lat: 44.8, elevation: 25, kind: "escarpment" },
  bbox: [-1.6, 43.0, 1.6, 46.1],
  viewScale: 2.2,
  label: { lon: 0.0, lat: 44.4, rotation: 0 },
  source: "阿基坦盆地：法国西南象限的中生代—新生代沉积盆地，规模仅次于巴黎盆地，南缘抵比利牛斯、东北经普瓦图门槛与巴黎盆地相连；盆地里有法国重要的天然气田（拉克）和大片葡萄酒产区（波尔多）（Wikipedia / BRGM）",
};

const CORSICA: TerrainEntry = {
  id: "corsica",
  nameZh: "科西嘉岛",
  nameEn: "Corsica / Corse",
  category: "island",
  regionId: "europe",
  country: "france",
  landmark: { name: "钦托山（Monte Cinto，2706m，科西嘉最高峰）", lon: 8.923, lat: 42.379, elevation: 2706, kind: "peak" },
  bbox: [8.5, 41.35, 9.6, 43.05],
  axis: [[8.75, 41.45], [9.35, 42.95]],
  viewScale: 1.6,
  label: { lon: 9.1, lat: 42.15, rotation: -60 },
  source: "科西嘉岛：地中海西部一座多山的岛，一条南北向的中央山脊纵贯全岛、最高点钦托山2706米；西部和主体是海西期的花岗岩，东北的科西嘉角、卡斯塔尼恰一带是阿尔卑斯造山期变质的片岩（“片岩科西嘉”）；GR20 长距离山径沿脊而行（BRGM）",
};

const LOIRE_RIVER: TerrainEntry = {
  id: "loire-river",
  nameZh: "卢瓦尔河",
  nameEn: "Loire",
  category: "river",
  regionId: "europe",
  country: "france",
  landmark: { name: "卢瓦尔河中游（奥尔良 / 布卢瓦一带的辫状河段）", lon: 1.35, lat: 47.60, elevation: 90, kind: "meander" },
  bbox: [-2.35, 44.7, 4.35, 48.0],
  axis: [[4.20, 44.85], [-2.20, 47.30]],
  viewScale: 2.2,
  label: { lon: 1.0, lat: 47.4, rotation: -35 },
  source: "卢瓦尔河：法国最长的河（约1006km），源出中央高原东缘的热尔比耶德容克山，向北再折向西，经奥尔良、图尔、南特在圣纳泽尔注入大西洋；下游河道调节程度低、沙洲密布，是法国大河里最接近自然状态的一条；中游一段（“卢瓦尔河谷”，苏利至沙隆讷）作为文化景观列入世界遗产（IGN / UNESCO）",
};

const RHONE_RIVER: TerrainEntry = {
  id: "rhone-river",
  nameZh: "罗讷河",
  nameEn: "Rhône",
  category: "river",
  regionId: "europe",
  country: "france",
  landmark: { name: "罗讷河谷（里昂以南、瓦朗斯一带）", lon: 4.83, lat: 45.10, elevation: 120, kind: "meander" },
  bbox: [4.0, 43.3, 6.2, 46.4],
  axis: [[4.85, 46.20], [4.60, 43.40]],
  viewScale: 2.0,
  label: { lon: 4.7, lat: 44.7, rotation: -80 },
  source: "罗讷河：按水量是法国最大的河；上游发源于瑞士阿尔卑斯、穿日内瓦湖，进入法国后在里昂接纳索恩河，再沿阿尔卑斯与中央高原之间一条南北向的深谷南下，在阿尔勒分叉、围出卡马尔格三角洲，注入地中海；法国段梯级水电、航运开发充分（IGN / CNR）",
};

const SEINE_RIVER: TerrainEntry = {
  id: "seine-river",
  nameZh: "塞纳河",
  nameEn: "Seine",
  category: "river",
  regionId: "europe",
  country: "france",
  landmark: { name: "塞纳河·巴黎曲流段", lon: 2.32, lat: 48.85, elevation: 28, kind: "meander" },
  bbox: [0.0, 48.25, 5.0, 49.55],
  axis: [[4.70, 47.70], [0.10, 49.45]],
  viewScale: 2.0,
  label: { lon: 2.0, lat: 49.0, rotation: -40 },
  source: "塞纳河：法国第三长的河（约775km），完全在巴黎盆地内发育，源出勃艮第高地，呈树枝状汇聚马恩河、瓦兹河等支流，穿巴黎、经鲁昂一段深切的曲流谷在勒阿弗尔注入英吉利海峡；坡降极小、水量稳定，历史上是通往巴黎的黄金水道（IGN）",
};

const ECRINS: TerrainEntry = {
  id: "ecrins",
  nameZh: "埃克兰山群",
  nameEn: "Massif des Écrins",
  category: "mountain_system",
  regionId: "europe",
  country: "france",
  landmark: { name: "埃克兰峰（Barre des Écrins，4102m）", lon: 6.3647, lat: 44.9217, elevation: 4102, kind: "peak" },
  bbox: [6.0, 44.7, 6.6, 45.1],
  axis: [[6.1, 44.78], [6.5, 45.05]],
  viewScale: 1.5,
  label: { lon: 6.32, lat: 44.97, rotation: -20 },
  source: "埃克兰山群：法国阿尔卑斯的一片结晶岩高山（花岗岩、片麻岩），最高峰埃克兰峰4102米，是勃朗峰山群之外全法国唯一的四千米峰、也是完全在法国境内的最高点；埃克兰国家公园（1973年设立，法国面积最大的国家公园之一）（IGN / 埃克兰国家公园）",
};

const VANOISE: TerrainEntry = {
  id: "vanoise",
  nameZh: "瓦努瓦兹山群",
  nameEn: "Vanoise",
  category: "mountain_system",
  regionId: "europe",
  country: "france",
  landmark: { name: "大卡斯峰（Grande Casse，3855m）", lon: 6.803, lat: 45.402, elevation: 3855, kind: "peak" },
  bbox: [6.45, 45.2, 7.1, 45.6],
  axis: [[6.55, 45.28], [7.0, 45.52]],
  viewScale: 1.5,
  label: { lon: 6.78, lat: 45.45, rotation: -22 },
  source: "瓦努瓦兹山群：法国阿尔卑斯塔朗泰斯谷和莫里耶讷谷之间的一片山地，最高点大卡斯峰3855米，有阿尔卑斯法国一侧较大的一片冰川群；瓦努瓦兹国家公园1963年设立，是法国第一个国家公园，与意大利的大帕拉迪索国家公园接壤（法国国家公园 / IGN）",
};

const MER_DE_GLACE: TerrainEntry = {
  id: "mer-de-glace",
  nameZh: "冰海冰川",
  nameEn: "Mer de Glace",
  category: "valley",
  regionId: "europe",
  country: "france",
  landmark: { name: "冰海冰川（蒙唐维尔一侧）", lon: 6.940, lat: 45.905, elevation: 1900, kind: "escarpment" },
  bbox: [6.87, 45.83, 7.02, 45.97],
  axis: [[6.95, 45.86], [6.92, 45.95]],
  viewScale: 1.3,
  label: { lon: 6.94, lat: 45.90, rotation: -75 },
  source: "冰海冰川：勃朗峰山群北坡的一条山谷冰川，主体长约7.5km、厚约200m；把上游几条支冰川合起来算，是法国最长、最大的冰川，也是阿尔卑斯山第二长（次于阿莱奇冰川）；蒙唐维尔齿轨列车通到冰川旁，20世纪以来退缩显著（IUGS / IGN）",
};

const CAMARGUE: TerrainEntry = {
  id: "camargue",
  nameZh: "卡马尔格",
  nameEn: "Camargue",
  category: "plain",
  regionId: "europe",
  country: "france",
  landmark: { name: "卡马尔格（瓦卡雷斯潟湖一带，罗讷河三角洲）", lon: 4.55, lat: 43.52, elevation: 0, kind: "delta" },
  bbox: [4.10, 43.30, 4.95, 43.78],
  viewScale: 1.6,
  label: { lon: 4.55, lat: 43.52, rotation: 0 },
  source: "卡马尔格：罗讷河在阿尔勒分成大、小两支，两支之间围出的三角洲，约850平方公里的沼泽、潟湖（瓦卡雷斯）和盐田，是西欧最大的三角洲之一；水鸟众多（大红鹳在此繁殖）、产稻和海盐；1971年列入《拉姆萨尔公约》湿地、设地区自然公园（Ramsar / 卡马尔格地区自然公园）",
};

const CHAINE_DES_PUYS: TerrainEntry = {
  id: "chaine-des-puys",
  nameZh: "普伊山链",
  nameEn: "Chaîne des Puys",
  category: "mountain_system",
  regionId: "europe",
  country: "france",
  landmark: { name: "多姆山（Puy de Dôme，1465m，山链最高的熔岩穹丘）", lon: 2.964, lat: 45.772, elevation: 1465, kind: "peak" },
  bbox: [2.83, 45.58, 3.06, 46.00],
  axis: [[2.95, 45.62], [2.98, 45.98]],
  viewScale: 1.5,
  label: { lon: 2.98, lat: 45.80, rotation: -84 },
  source: "普伊山链：中央高原奥弗涅一段约45km 长的南北向火山带，约80座火山锥、熔岩穹丘和低平火山口（maar）排成一列，最年轻的一次喷发约7000年前；与它西侧的利马涅大断层一起2018年列入世界遗产，清楚展示大陆地壳如何张裂、崩落、深部岩浆上涌（UNESCO / 奥弗涅火山地区自然公园）",
};

const CANTAL_VOLCANO: TerrainEntry = {
  id: "cantal-volcano",
  nameZh: "坎塔尔火山",
  nameEn: "Monts du Cantal",
  category: "mountain_system",
  regionId: "europe",
  country: "france",
  landmark: { name: "坎塔尔铅峰（Plomb du Cantal，1855m）与皮伊马里", lon: 2.756, lat: 45.048, elevation: 1855, kind: "peak" },
  bbox: [2.35, 44.80, 3.15, 45.40],
  viewScale: 2.1,
  label: { lon: 2.75, lat: 45.05, rotation: 0 },
  source: "坎塔尔火山：中央高原南部一座约1300—200万年前活动的老层火山，底面直径约70km、体积逾400 km³，按底面积算是欧洲最大的层火山之一；中央的锥体已被侵蚀成一圈残峰（铅峰、皮伊马里等），四周是呈放射状展开、被深谷分隔的玄武岩台地板块（“planèze”）（BRGM）",
};

const MONTS_DORE: TerrainEntry = {
  id: "monts-dore",
  nameZh: "多尔山",
  nameEn: "Massif du Sancy (Monts Dore)",
  category: "mountain_system",
  regionId: "europe",
  country: "france",
  landmark: { name: "桑西山（Puy de Sancy，1885m）与桑西冰蚀圆谷", lon: 2.813, lat: 45.528, elevation: 1885, kind: "peak" },
  bbox: [2.64, 45.40, 3.00, 45.66],
  viewScale: 1.6,
  label: { lon: 2.82, lat: 45.53, rotation: 0 },
  source: "多尔山：中央高原一座约300—25万年前活动的层火山群，位于普伊山链（更年轻）和坎塔尔火山（更老）之间；侵蚀把它的锥体切成一圈残峰，最高的桑西山1885米是整个中央高原的最高点；多尔多涅河的两条源流在此发源，末次冰期山上有小冰川、留下冰斗（BRGM）",
};

const GRANDS_CAUSSES: TerrainEntry = {
  id: "grands-causses",
  nameZh: "大科斯高原",
  nameEn: "Grands Causses",
  category: "plateau",
  regionId: "europe",
  country: "france",
  landmark: { name: "梅让科斯与塔恩峡谷（Causse Méjean / Gorges du Tarn）", lon: 3.40, lat: 44.30, elevation: 1000, kind: "escarpment" },
  bbox: [2.85, 43.85, 3.75, 44.55],
  viewScale: 1.9,
  label: { lon: 3.35, lat: 44.20, rotation: 0 },
  source: "大科斯：中央高原南缘几片海拔约800—1200m 的石灰岩喀斯特台地（梅让、拉尔扎克、诺尔、索沃泰尔科斯），干旱、少地表水、遍布落水洞和洞穴，被塔恩河、若恩特河、杜尔比河切出数百米深的峡谷；罗克福尔奶酪在科斯边缘一处滑坡形成的天然岩洞里熟成；“科斯与塞文”地中海式农牧文化景观2011年列入世界遗产（UNESCO / BRGM）",
};

const VERCORS: TerrainEntry = {
  id: "vercors",
  nameZh: "韦科尔高原",
  nameEn: "Vercors",
  category: "plateau",
  regionId: "europe",
  country: "france",
  landmark: { name: "韦科尔东缘峭壁（大穆什罗尔峰一带）", lon: 5.55, lat: 45.05, elevation: 1500, kind: "escarpment" },
  bbox: [5.18, 44.68, 5.72, 45.32],
  axis: [[5.35, 44.72], [5.45, 45.28]],
  viewFrom: 90,
  viewScale: 1.7,
  label: { lon: 5.45, lat: 45.00, rotation: -80 },
  source: "韦科尔：格勒诺布尔西南一块石灰岩前阿尔卑斯台地，东缘是朝格勒诺布尔的一道千米高陡崖，内部被布尔讷河等切出深峡谷（“大峡口”），地下发育大量竖井和洞穴系统（贝尔热竖井一度是已知最深的洞穴之一）；地表是大片森林和高山牧场；韦科尔地区自然公园（BRGM / 韦科尔地区自然公园）",
};

const CEVENNES: TerrainEntry = {
  id: "cevennes",
  nameZh: "塞文山",
  nameEn: "Cévennes",
  category: "mountain_system",
  regionId: "europe",
  country: "france",
  landmark: { name: "洛泽尔山（Mont Lozère，1699m）与埃古阿勒山", lon: 3.73, lat: 44.42, elevation: 1699, kind: "peak" },
  bbox: [3.30, 44.00, 4.25, 44.60],
  axis: [[3.45, 44.10], [4.10, 44.50]],
  viewScale: 1.9,
  label: { lon: 3.80, lat: 44.30, rotation: -30 },
  source: "塞文山：中央高原的东南缘，花岗岩和片岩的长脊被无数溪流深切成梳齿状；地中海气候一侧秋季常有暴雨（“塞文式暴雨”）引发山洪；史上是牧羊转场（“drailles”牧道）和新教徒避难的山区；塞文山国家公园1970年设立，“科斯与塞文”文化景观2011年列入世界遗产（UNESCO / 塞文山国家公园）",
};

const VERDON_GORGE: TerrainEntry = {
  id: "verdon-gorge",
  nameZh: "凡尔登峡谷",
  nameEn: "Gorges du Verdon",
  category: "gorge",
  regionId: "europe",
  country: "france",
  landmark: { name: "凡尔登峡谷（最深处一带）", lon: 6.350, lat: 43.750, elevation: 700, kind: "gorge" },
  bbox: [6.15, 43.68, 6.60, 43.84],
  axis: [[6.20, 43.75], [6.55, 43.77]],
  viewScale: 1.4,
  label: { lon: 6.35, lat: 43.76, rotation: -6 },
  source: "凡尔登峡谷：凡尔登河在阿尔卑斯和普罗旺斯之间的石灰岩高地上切出的峡谷，长约25km、最深处约700m，常被称为欧洲最大的峡谷；石灰岩里溶蚀出大量洞穴（如史前的博姆博纳洞）；下游被圣克鲁瓦水库拦蓄；凡尔登地区自然公园（BRGM / 凡尔登地区自然公园）",
};

const ARDECHE_GORGE: TerrainEntry = {
  id: "ardeche-gorge",
  nameZh: "阿尔代什峡谷",
  nameEn: "Gorges de l'Ardèche",
  category: "gorge",
  regionId: "europe",
  country: "france",
  landmark: { name: "阿尔克桥（Pont d'Arc，天生桥，跨度约59m、高约34m）", lon: 4.4133, lat: 44.3808, elevation: 100, kind: "gorge" },
  bbox: [4.35, 44.26, 4.68, 44.42],
  axis: [[4.40, 44.38], [4.65, 44.32]],
  viewScale: 1.4,
  label: { lon: 4.50, lat: 44.34, rotation: -25 },
  source: "阿尔代什峡谷：阿尔代什河在中央高原东南缘的石灰岩台地上切出的一段约30km 长、深达约300m 的峡谷；入口处的阿尔克桥是河流截穿一个曲流的窄颈、留下的天生桥；附近的肖维洞里有约3.6万年前的旧石器时代壁画（2014年列入世界遗产）；阿尔代什峡谷自然保护区（BRGM / UNESCO）",
};

const LANDES_DE_GASCOGNE: TerrainEntry = {
  id: "landes-de-gascogne",
  nameZh: "加斯科涅朗德",
  nameEn: "Landes de Gascogne",
  category: "plain",
  regionId: "europe",
  country: "france",
  landmark: { name: "朗德松林沙地（萨巴尔 / 皮索一带）", lon: -0.70, lat: 44.30, elevation: 60, kind: "escarpment" },
  bbox: [-1.45, 43.70, 0.25, 44.95],
  viewScale: 2.0,
  label: { lon: -0.55, lat: 44.30, rotation: 0 },
  source: "加斯科涅朗德：阿基坦盆地西部一大片近乎水平的砂质低地，约1万平方公里，上覆末次冰期以来的风成砂和一层不透水的“铁磐”（alios），历史上排水不畅、多沼泽；19世纪立法排水、种下大片海岸松，成为欧洲最大的人工林之一；加斯科涅朗德地区自然公园（BRGM / 地区自然公园）",
};

const CALANQUES: TerrainEntry = {
  id: "calanques",
  nameZh: "卡朗格峡湾岸",
  nameEn: "Calanques",
  category: "coast",
  regionId: "europe",
  country: "france",
  landmark: { name: "卡朗格国家公园（马赛与卡西斯之间的石灰岩峡湾岸）", lon: 5.44, lat: 43.21, elevation: 250, kind: "escarpment" },
  bbox: [5.33, 43.17, 5.58, 43.28],
  axis: [[5.35, 43.22], [5.56, 43.20]],
  viewFrom: 180,
  viewScale: 1.4,
  label: { lon: 5.46, lat: 43.20, rotation: -6 },
  source: "卡朗格：马赛和卡西斯之间一段白色石灰岩海岸，被溶蚀和河流切出一条条又窄又深的入海裂口（“calanque”），两侧是近乎垂直的崖壁，谷底是透亮的海水；成因是被淹没的岩溶谷 + 海侵；卡朗格国家公园2012年设立，是欧洲少见的“陆-海-城”一体的国家公园（BRGM / 卡朗格国家公园）",
};

const DUNE_DU_PILAT: TerrainEntry = {
  id: "dune-du-pilat",
  nameZh: "皮拉沙丘",
  nameEn: "Dune du Pilat",
  category: "coast",
  regionId: "europe",
  country: "france",
  landmark: { name: "皮拉大沙丘（阿卡雄湾南口）", lon: -1.213, lat: 44.588, elevation: 100, kind: "dune" },
  bbox: [-1.26, 44.55, -1.17, 44.63],
  axis: [[-1.21, 44.56], [-1.21, 44.62]],
  viewScale: 1.3,
  label: { lon: -1.21, lat: 44.59, rotation: -84 },
  source: "皮拉沙丘：阿卡雄湾南口的一座沙丘，高逾100m、长约2.7km，是欧洲最高的沙丘；大西洋的沙被西风堆上岸、缓慢向内陆移动（每年约1—5m），正把后面的朗德松林一点点埋掉；沙丘剖面里夹着几层古土壤，记录了它的分期生长（BRGM / 皮拉大沙丘管理机构）",
};

const ETRETAT: TerrainEntry = {
  id: "etretat",
  nameZh: "埃特勒塔海崖",
  nameEn: "Étretat",
  category: "coast",
  regionId: "europe",
  country: "france",
  landmark: { name: "埃特勒塔（阿瓦尔门海蚀拱与“针尖”岩柱）", lon: 0.204, lat: 49.707, elevation: 80, kind: "escarpment" },
  bbox: [0.14, 49.68, 0.27, 49.74],
  axis: [[0.17, 49.73], [0.24, 49.69]],
  viewFrom: 270,
  viewScale: 1.3,
  label: { lon: 0.21, lat: 49.70, rotation: -35 },
  source: "埃特勒塔：上诺曼底“雪花石海岸”上一段白垩海崖，白垩里夹着黑色的燧石条带；海浪沿岩石的裂隙掏蚀，形成三座海蚀拱（阿蒙门、阿瓦尔门、大门）和一根约70m 高的“针尖”岩柱；崖壁每年后退约20cm；莫奈、库尔贝等反复描绘（BRGM）",
};

const MONT_SAINT_MICHEL_BAY: TerrainEntry = {
  id: "mont-saint-michel-bay",
  nameZh: "圣米歇尔山湾",
  nameEn: "Bay of Mont-Saint-Michel",
  category: "coast",
  regionId: "europe",
  country: "france",
  landmark: { name: "圣米歇尔山与大潮滩", lon: -1.511, lat: 48.636, elevation: 0, kind: "escarpment" },
  bbox: [-1.90, 48.52, -1.30, 48.78],
  viewScale: 1.7,
  label: { lon: -1.55, lat: 48.65, rotation: 0 },
  source: "圣米歇尔山湾：布列塔尼与诺曼底之间一个宽浅的海湾，潮差可达约14—15m，是欧洲大陆最大的潮差之一；退潮时露出大片砂泥质潮滩（“tangue”），涨潮很快、有涌潮（mascaret）；花岗岩残丘上的圣米歇尔山修道院1979年列入世界遗产，2010年代拆坝清淤恢复了海岛周围的潮汐冲刷（UNESCO / BRGM）",
};

const CIRQUE_DE_GAVARNIE: TerrainEntry = {
  id: "cirque-de-gavarnie",
  nameZh: "加瓦尔尼冰蚀圆谷",
  nameEn: "Cirque de Gavarnie",
  category: "gorge",
  regionId: "europe",
  country: "france",
  landmark: { name: "加瓦尔尼圆谷与大瀑布（落差约420m）", lon: -0.009, lat: 42.696, elevation: 1400, kind: "gorge" },
  bbox: [-0.09, 42.65, 0.06, 42.75],
  axis: [[-0.05, 42.68], [0.03, 42.73]],
  viewFrom: 0,
  viewScale: 1.4,
  label: { lon: -0.01, lat: 42.70, rotation: 0 },
  source: "加瓦尔尼冰蚀圆谷：比利牛斯中段、法国与西班牙交界一带一个巨大的半圆形冰斗，三级台阶状的岩壁高出谷底达约1500m；由冰川强烈的挖蚀 + 褶皱的石灰岩/大理岩地层共同造就；壁上跌下加瓦尔尼大瀑布（约420m，欧洲落差最大的瀑布之一）；“比利牛斯-珀杜山”世界遗产的一部分（UNESCO / 比利牛斯国家公园）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 法国 =====
  FRENCH_ALPS, PYRENEES, MASSIF_CENTRAL, VOSGES, ARMORICAN_MASSIF,
  PARIS_BASIN, AQUITAINE_BASIN, CORSICA,
  LOIRE_RIVER, RHONE_RIVER, SEINE_RIVER, ECRINS, VANOISE, MER_DE_GLACE, CAMARGUE,
  CHAINE_DES_PUYS, CANTAL_VOLCANO, MONTS_DORE, GRANDS_CAUSSES, VERCORS, CEVENNES, VERDON_GORGE,
  ARDECHE_GORGE, LANDES_DE_GASCOGNE, CALANQUES, DUNE_DU_PILAT, ETRETAT,
  MONT_SAINT_MICHEL_BAY, CIRQUE_DE_GAVARNIE,
];
