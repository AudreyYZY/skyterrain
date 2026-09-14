import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 新西兰（regionId: "oceania"）
// 坐标据 GNS Science / Land Information NZ（LINZ）/ NZ Geographic Board /
// Department of Conservation（DOC）；官方双语地名按 NZGB 用法并列
// ============================================================

const AORAKI_SOUTHERN_ALPS: TerrainEntry = {
  id: "aoraki-southern-alps",
  nameZh: "南阿尔卑斯山脉",
  nameEn: "Southern Alps / Kā Tiritiri o te Moana",
  category: "mountain_system",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "库克山 / 奥拉基（Aoraki / Mount Cook）", lon: 170.1416, lat: -43.5951, elevation: 3724, kind: "peak" },
  bbox: [168.0, -45.2, 172.6, -42.0],
  axis: [[168.4, -44.7], [171.9, -42.3]],
  viewFrom: 135,
  label: { lon: 170.2, lat: -43.6, rotation: -40 },
  pois: [
    { name: "库克山 / 奥拉基", lon: 170.1416, lat: -43.5951, note: "新西兰最高峰，3724m（1991年一次岩崩削去部分峰顶后测定）" },
    { name: "阿尔卑斯断层", lon: 169.9, lat: -43.8, note: "太平洋板块与澳大利亚板块的边界断层，沿山脉西麓延伸" },
  ],
  source: "南阿尔卑斯：沿阿尔卑斯断层隆起、长约500km；西南段属蒂瓦希普纳穆（Te Wāhipounamu）世界自然遗产（GNS Science / DOC）",
};

const KAIKOURA_RANGES: TerrainEntry = {
  id: "kaikoura-ranges",
  nameZh: "凯库拉山脉",
  nameEn: "Kaikōura Ranges",
  category: "mountain_system",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "塔普阿埃奥乌埃努库山（Tapuae-o-Uenuku）", lon: 173.663, lat: -42.005, elevation: 2885, kind: "peak" },
  bbox: [173.2, -42.6, 174.2, -41.6],
  axis: [[173.4, -42.5], [173.9, -41.7]],
  viewFrom: 90,
  label: { lon: 173.7, lat: -42.1, rotation: -60 },
  pois: [
    { name: "凯库拉半岛", lon: 173.70, lat: -42.42, note: "山脚下伸入海中的小半岛，外海是凯库拉海底峡谷" },
  ],
  source: "凯库拉的内、外两列硬砂岩山脉，从海岸约40km内升到2885m；2016年凯库拉地震使部分海岸抬升数米（GNS Science / LINZ）",
};

const THE_REMARKABLES: TerrainEntry = {
  id: "the-remarkables",
  nameZh: "卓越山脉",
  nameEn: "The Remarkables / Kawarau",
  category: "mountain_system",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "双锥峰（Double Cone）", lon: 168.808, lat: -45.061, elevation: 2319, kind: "peak" },
  bbox: [168.68, -45.32, 168.93, -44.92],
  axis: [[168.80, -45.30], [168.82, -44.95]],
  viewFrom: 270,
  label: { lon: 168.83, lat: -45.05, rotation: -80 },
  pois: [
    { name: "皇后镇", lon: 168.662, lat: -45.031, note: "山脉西侧、瓦卡蒂普湖畔的旅游城镇" },
  ],
  source: "卓越山脉：瓦卡蒂普湖东岸的断块山，片岩，西坡近乎笔直地从湖面升起到2319m（LINZ / DOC）",
};

const TARARUA_RANGE: TerrainEntry = {
  id: "tararua-range",
  nameZh: "塔拉鲁瓦山脉",
  nameEn: "Tararua Range",
  category: "mountain_system",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "米特雷峰（Mitre）", lon: 175.480, lat: -40.752, elevation: 1571, kind: "peak" },
  bbox: [175.0, -41.35, 176.05, -40.35],
  axis: [[175.25, -41.25], [175.75, -40.45]],
  viewFrom: 90,
  label: { lon: 175.4, lat: -40.85, rotation: -55 },
  source: "塔拉鲁瓦山脉：北岛中轴硬砂岩山脉的一段，隔开惠灵顿与马纳瓦图，以天气骤变和强风著称（GNS Science / DOC）",
};

const MOUNT_RUAPEHU: TerrainEntry = {
  id: "mount-ruapehu",
  nameZh: "鲁阿佩胡火山",
  nameEn: "Mount Ruapehu",
  category: "mountain_system",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "鲁阿佩胡主峰与火口湖", lon: 175.565, lat: -39.281, elevation: 2797, kind: "peak" },
  bbox: [175.35, -39.42, 175.80, -38.95],
  axis: [[175.57, -39.40], [175.62, -39.00]],
  viewFrom: 200,
  label: { lon: 175.57, lat: -39.28, rotation: 0 },
  pois: [
    { name: "瑙鲁霍伊火山（Ngāuruhoe）", lon: 175.632, lat: -39.157, note: "汤加里罗火山群里最年轻的火山锥，2291m" },
    { name: "汤加里罗山（Tongariro）", lon: 175.642, lat: -39.133, note: "多火口的老火山，汤加里罗越山步道经过" },
  ],
  source: "鲁阿佩胡：北岛最高峰、活火山，山顶有火口湖；与瑙鲁霍伊、汤加里罗同属汤加里罗国家公园——新西兰第一个国家公园（1887年），自然与文化双重世界遗产（GNS Science / DOC）",
};

const MOUNT_TARANAKI: TerrainEntry = {
  id: "mount-taranaki",
  nameZh: "塔拉纳基山",
  nameEn: "Taranaki Maunga / Mount Taranaki",
  category: "mountain_system",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "塔拉纳基主峰", lon: 174.064, lat: -39.296, elevation: 2518, kind: "peak" },
  bbox: [173.85, -39.52, 174.28, -39.07],
  label: { lon: 174.064, lat: -39.296, rotation: 0 },
  pois: [
    { name: "国家公园圆形边界（Te Papa-Kura-o-Taranaki，原埃格蒙特国家公园）", lon: 174.09, lat: -39.30, note: "1881年沿距峰顶约9.6km画的近乎正圆的森林保护线，空中看林、牧分明" },
  ],
  source: "塔拉纳基山：近乎对称的安山质层状火山，2518m；官方名2025年定为Taranaki Maunga（此前作Mount Taranaki或Mount Egmont）；同年4月1日国家公园官方名由Egmont National Park改为Te Papa-Kura-o-Taranaki（GNS Science / DOC / LINZ，核实2026-09-09）",
};

const TASMAN_GLACIER: TerrainEntry = {
  id: "tasman-glacier",
  nameZh: "塔斯曼冰川",
  nameEn: "Tasman Glacier / Haupapa",
  category: "valley",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "塔斯曼冰川末端冰湖", lon: 170.176, lat: -43.712, elevation: 730, kind: "gorge" },
  bbox: [170.05, -43.80, 170.42, -43.45],
  axis: [[170.30, -43.48], [170.17, -43.72]],
  viewScale: 1.4,
  label: { lon: 170.23, lat: -43.60, rotation: -55 },
  source: "塔斯曼冰川：新西兰最大的冰川，长约23km，位于奥拉基／库克山国家公园；下段覆满岩屑，末端自1970年代起退缩、形成并扩大的冰川湖（DOC / GNS Science）",
};

const FRANZ_JOSEF_GLACIER: TerrainEntry = {
  id: "franz-josef-glacier",
  nameZh: "弗朗茨·约瑟夫冰川",
  nameEn: "Franz Josef Glacier / Kā Roimata o Hine Hukatere",
  category: "valley",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "弗朗茨·约瑟夫冰川舌", lon: 170.183, lat: -43.435, elevation: 400, kind: "gorge" },
  bbox: [170.10, -43.55, 170.30, -43.35],
  axis: [[170.22, -43.40], [170.17, -43.47]],
  viewScale: 1.2,
  label: { lon: 170.19, lat: -43.44, rotation: -30 },
  pois: [
    { name: "福克斯冰川 / Te Moeka o Tuawe", lon: 170.170, lat: -43.530, note: "相邻的另一条陡降到雨林里的冰川" },
  ],
  source: "弗朗茨·约瑟夫冰川：从南阿尔卑斯粒雪盆陡降到西海岸温带雨林边缘（约400m海拔）；与福克斯冰川同为少见的“伸进雨林”的冰川，2000年代末以来明显退缩（DOC / GNS Science）",
};

const FIORDLAND: TerrainEntry = {
  id: "fiordland",
  nameZh: "峡湾地区",
  nameEn: "Fiordland / Te Rua-o-te-moko",
  category: "coast",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "神奇峡湾（Doubtful Sound / Patea）", lon: 167.15, lat: -45.30, elevation: 0, kind: "island" },
  bbox: [166.5, -46.2, 167.9, -44.5],
  axis: [[167.0, -46.0], [167.3, -44.6]],
  viewScale: 2.0,
  label: { lon: 167.0, lat: -45.4, rotation: -70 },
  pois: [
    { name: "蒂阿瑙湖", lon: 167.72, lat: -45.20, note: "峡湾东缘的大冰蚀湖，进出峡湾的门户" },
  ],
  source: "峡湾地区：新西兰面积最大的国家公园，属蒂瓦希普纳穆世界自然遗产；冰川刻蚀出的14条峡湾深切进山，是全球降水最多的地区之一（DOC）",
};

const MILFORD_SOUND: TerrainEntry = {
  id: "milford-sound",
  nameZh: "米尔福德峡湾",
  nameEn: "Milford Sound / Piopiotahi",
  category: "coast",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "教冠峰（Mitre Peak / Rahotu）", lon: 167.900, lat: -44.638, elevation: 1683, kind: "peak" },
  bbox: [167.75, -44.72, 168.05, -44.55],
  axis: [[167.85, -44.67], [168.02, -44.60]],
  label: { lon: 167.92, lat: -44.64, rotation: -20 },
  source: "米尔福德峡湾 / Piopiotahi：峡湾地区唯一有公路直达的峡湾；教冠峰约1683m，近乎垂直地从海面升起（DOC / LINZ）",
};

const LAKE_TAUPO: TerrainEntry = {
  id: "lake-taupo",
  nameZh: "陶波湖",
  nameEn: "Lake Taupō / Taupōmoana",
  category: "lake",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "陶波湖面（湖心）", lon: 175.90, lat: -38.80, elevation: 357, kind: "lake" },
  bbox: [175.72, -39.05, 176.10, -38.63],
  viewScale: 1.9,
  label: { lon: 175.90, lat: -38.80, rotation: 0 },
  pois: [
    { name: "陶波镇", lon: 176.078, lat: -38.685, note: "湖东北角、怀卡托河出湖口" },
  ],
  source: "陶波湖：新西兰面积最大的湖（约616km²），是陶波火山破火山口积水而成；约2.55万年前的欧鲁阿努伊喷发、以及公元232年前后的一次喷发都是全球近数千年最猛烈的火山事件之一（GNS Science）",
};

const LAKE_WAKATIPU: TerrainEntry = {
  id: "lake-wakatipu",
  nameZh: "瓦卡蒂普湖",
  nameEn: "Lake Wakatipu",
  category: "lake",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "瓦卡蒂普湖（皇后镇湾）", lon: 168.66, lat: -45.03, elevation: 310, kind: "lake" },
  bbox: [168.30, -45.55, 168.85, -44.75],
  axis: [[168.35, -45.20], [168.75, -44.80]],
  viewScale: 1.7,
  label: { lon: 168.55, lat: -45.15, rotation: -35 },
  source: "瓦卡蒂普湖：南岛冰川刻蚀的“Z”字形长湖，长约80km、最深约380m（湖底低于海平面）；湖面有周期约27分钟的小幅“定振”涨落（LINZ / NIWA）",
};

const LAKE_TEKAPO: TerrainEntry = {
  id: "lake-tekapo",
  nameZh: "特卡波湖",
  nameEn: "Lake Tekapo / Takapō",
  category: "lake",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "特卡波湖南岸（好牧人教堂一带）", lon: 170.516, lat: -44.004, elevation: 710, kind: "lake" },
  bbox: [170.40, -44.10, 170.62, -43.70],
  label: { lon: 170.51, lat: -43.90, rotation: 0 },
  pois: [
    { name: "普卡基湖", lon: 170.19, lat: -44.10, note: "相邻的更大冰蚀湖，湖尽头正对库克山" },
  ],
  source: "特卡波湖：麦肯齐盆地里的冰蚀-冰碛堰塞湖，湖水因冰川“岩粉”呈乳蓝色；属奥拉基·麦肯齐国际暗夜保护区（DOC / LINZ）",
};

const LAKE_WANAKA: TerrainEntry = {
  id: "lake-wanaka",
  nameZh: "瓦纳卡湖",
  nameEn: "Lake Wānaka",
  category: "lake",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "瓦纳卡湖南岸（瓦纳卡镇）", lon: 169.15, lat: -44.70, elevation: 277, kind: "lake" },
  bbox: [168.90, -44.75, 169.35, -44.25],
  axis: [[169.10, -44.72], [169.20, -44.30]],
  viewScale: 1.5,
  label: { lon: 169.17, lat: -44.55, rotation: -20 },
  pois: [
    { name: "哈威亚湖与“the Neck”", lon: 169.25, lat: -44.55, note: "隔一道狭窄地峡的姊妹湖" },
  ],
  source: "瓦纳卡湖：南岛冰川刻蚀的长湖，新西兰第四大湖，经克卢萨河 / Mata-Au 外流；与哈威亚湖仅隔一道窄地峡（LINZ / DOC）",
};

const CANTERBURY_PLAINS: TerrainEntry = {
  id: "canterbury-plains",
  nameZh: "坎特伯雷平原",
  nameEn: "Canterbury Plains",
  category: "plain",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "坎特伯雷平原（拉凯亚河一带）", lon: 172.0, lat: -43.7, elevation: 120, kind: "delta" },
  bbox: [171.3, -44.3, 172.9, -42.9],
  viewScale: 2.2,
  label: { lon: 172.0, lat: -43.7, rotation: -30 },
  pois: [
    { name: "克赖斯特彻奇", lon: 172.636, lat: -43.532, note: "平原东缘、太平洋岸的城市" },
  ],
  source: "坎特伯雷平原：新西兰最大的连片平地，宽约50km，由南阿尔卑斯多条河流的砾石冲积扇并合而成；辫状河横穿（GNS Science / LINZ）",
};

const MACKENZIE_BASIN: TerrainEntry = {
  id: "mackenzie-basin",
  nameZh: "麦肯齐盆地",
  nameEn: "Mackenzie Basin / Te Manahuna",
  category: "basin",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "麦肯齐盆地（普卡基湖一带）", lon: 170.25, lat: -44.05, elevation: 520, kind: "grassland" },
  bbox: [169.8, -44.5, 170.7, -43.6],
  viewScale: 2.0,
  label: { lon: 170.25, lat: -44.05, rotation: 0 },
  source: "麦肯齐盆地：南阿尔卑斯东侧的山间盆地，处在雨影区、半干旱，遍布黄色针茅草原和乳蓝色冰蚀湖；属奥拉基·麦肯齐国际暗夜保护区（DOC / LINZ）",
};

const CENTRAL_OTAGO: TerrainEntry = {
  id: "central-otago",
  nameZh: "中奥塔哥",
  nameEn: "Central Otago",
  category: "basin",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "中奥塔哥（克伦威尔 / 克卢萨河谷）", lon: 169.20, lat: -45.05, elevation: 220, kind: "grassland" },
  bbox: [168.7, -45.6, 170.2, -44.5],
  axis: [[169.0, -45.5], [169.6, -44.6]],
  viewScale: 2.0,
  label: { lon: 169.4, lat: -45.1, rotation: -35 },
  source: "中奥塔哥：一系列平行的片岩断块山和它们之间的断陷盆地（“盆岭地貌”）；新西兰最“大陆性”的气候，降水最少（GNS Science / NIWA）",
};

const ROTORUA_CALDERA: TerrainEntry = {
  id: "rotorua-caldera",
  nameZh: "罗托鲁瓦破火山口",
  nameEn: "Rotorua Caldera",
  category: "basin",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "罗托鲁瓦湖", lon: 176.27, lat: -38.08, elevation: 280, kind: "lake" },
  bbox: [176.0, -38.25, 176.5, -37.9],
  viewScale: 1.6,
  label: { lon: 176.27, lat: -38.08, rotation: 0 },
  pois: [
    { name: "华卡雷瓦雷瓦地热区", lon: 176.253, lat: -38.165, note: "间歇泉、沸泥塘、硅华台地" },
    { name: "莫科亚岛", lon: 176.283, lat: -38.078, note: "湖心的流纹岩穹丘" },
  ],
  source: "罗托鲁瓦破火山口：约24万年前一次大喷发塌陷形成，直径约22km，罗托鲁瓦湖占据其中一部分；周边是新西兰最活跃的地热区之一（GNS Science）",
};

const WAIKATO_RIVER: TerrainEntry = {
  id: "waikato-river",
  nameZh: "怀卡托河",
  nameEn: "Waikato River",
  category: "river",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "怀卡托河中游（汉密尔顿一带）", lon: 175.28, lat: -37.78, elevation: 40, kind: "meander" },
  bbox: [174.7, -38.70, 176.20, -37.35],
  axis: [[176.08, -38.65], [174.75, -37.38]],
  viewScale: 2.2,
  label: { lon: 175.4, lat: -37.9, rotation: -55 },
  pois: [
    { name: "胡卡瀑布", lon: 176.090, lat: -38.649, note: "陶波湖出口不远处，河水挤过窄硬岩槽" },
    { name: "怀卡托河口（Port Waikato）", lon: 174.72, lat: -37.38, note: "在奥克兰以南注入塔斯曼海" },
  ],
  source: "怀卡托河：新西兰最长的河（约425km），从陶波湖流出，经一连串水电站和汉密尔顿盆地，在奥克兰以南注入塔斯曼海（LINZ / NIWA）",
};

const CLUTHA_RIVER: TerrainEntry = {
  id: "clutha-river",
  nameZh: "克卢萨河",
  nameEn: "Clutha River / Mata-Au",
  category: "river",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "克卢萨河（罗克斯堡一带）", lon: 169.32, lat: -45.55, elevation: 100, kind: "meander" },
  bbox: [168.9, -46.35, 169.85, -44.45],
  axis: [[169.15, -44.70], [169.75, -46.30]],
  viewScale: 2.0,
  label: { lon: 169.4, lat: -45.5, rotation: -75 },
  source: "克卢萨河 / Mata-Au：新西兰水量最大、长度第二（约338km）的河；从瓦纳卡湖流出，穿过中奥塔哥的峡谷和水库，在巴尔克卢萨附近分汊入海（LINZ / NIWA）",
};

const BAY_OF_ISLANDS: TerrainEntry = {
  id: "bay-of-islands",
  nameZh: "岛屿湾",
  nameEn: "Bay of Islands / Ipipiri",
  category: "coast",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "岛屿湾（派希亚 / 拉塞尔一带）", lon: 174.12, lat: -35.24, elevation: 0, kind: "island" },
  bbox: [173.95, -35.42, 174.35, -35.05],
  viewScale: 1.5,
  label: { lon: 174.12, lat: -35.24, rotation: 0 },
  source: "岛屿湾：北岛北部亚热带海岸，河谷被海水淹没形成的“溺谷”海湾，散布约140余个小岛（LINZ / DOC）",
};

const ABEL_TASMAN_COAST: TerrainEntry = {
  id: "abel-tasman-coast",
  nameZh: "阿贝尔·塔斯曼海岸",
  nameEn: "Abel Tasman Coast",
  category: "coast",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "阿贝尔·塔斯曼海岸（托伦特湾一带）", lon: 173.03, lat: -40.88, elevation: 0, kind: "island" },
  bbox: [172.88, -41.05, 173.15, -40.68],
  label: { lon: 173.03, lat: -40.88, rotation: 0 },
  source: "阿贝尔·塔斯曼海岸：新西兰面积最小的国家公园，风化的金黄色花岗岩岬角与弧形海滩、潮汐河口相间（DOC）",
};

const COROMANDEL_PENINSULA: TerrainEntry = {
  id: "coromandel-peninsula",
  nameZh: "科罗曼德半岛",
  nameEn: "Coromandel Peninsula",
  category: "coast",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "科罗曼德山脉主脊", lon: 175.62, lat: -36.78, elevation: 700, kind: "escarpment" },
  bbox: [175.32, -37.15, 175.95, -36.35],
  axis: [[175.55, -37.05], [175.75, -36.45]],
  viewFrom: 90,
  viewScale: 1.6,
  label: { lon: 175.62, lat: -36.78, rotation: -75 },
  source: "科罗曼德半岛：中新世—上新世火山岩被侵蚀后留下的崎岖山脊，两侧是曲折海岸；历史上采金、伐贝壳杉（GNS Science / DOC）",
};

const PUNAKAIKI: TerrainEntry = {
  id: "punakaiki",
  nameZh: "普纳凯基（薄饼岩）",
  nameEn: "Punakaiki (Pancake Rocks)",
  category: "coast",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "薄饼岩与喷水孔", lon: 171.336, lat: -42.114, elevation: 10, kind: "escarpment" },
  bbox: [171.28, -42.20, 171.42, -42.03],
  label: { lon: 171.34, lat: -42.11, rotation: 0 },
  source: "普纳凯基：西海岸帕帕罗瓦国家公园，层状石灰岩经差异风化形成“千层饼”状海崖，涨潮时有喷水孔（DOC / GNS Science）",
};

const MARLBOROUGH_SOUNDS: TerrainEntry = {
  id: "marlborough-sounds",
  nameZh: "马尔堡峡湾",
  nameEn: "Marlborough Sounds / Te Tau Ihu",
  category: "coast",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "夏洛特女王湾（Tōtaranui）", lon: 174.10, lat: -41.15, elevation: 0, kind: "island" },
  bbox: [173.7, -41.45, 174.45, -40.75],
  viewScale: 1.8,
  label: { lon: 174.05, lat: -41.15, rotation: -30 },
  source: "马尔堡峡湾：南岛北端一片被海水淹没的河谷网络（“溺谷”），因当地陆块沉降与冰后海面上升共同作用而成（GNS Science / LINZ）",
};

const WHAKAARI_WHITE_ISLAND: TerrainEntry = {
  id: "whakaari-white-island",
  nameZh: "怀特岛",
  nameEn: "Whakaari / White Island",
  category: "island",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "怀特岛火山口", lon: 177.182, lat: -37.521, elevation: 321, kind: "island" },
  bbox: [177.14, -37.55, 177.22, -37.49],
  label: { lon: 177.182, lat: -37.521, rotation: 0 },
  source: "怀特岛 / Whakaari：丰盛湾外海的安山—英安质火山岛，是新西兰最活跃的火山，大部分位于海面以下；2019年喷发造成人员伤亡，现登岛受限（GNS Science）",
};

const STEWART_ISLAND: TerrainEntry = {
  id: "stewart-island",
  nameZh: "斯图尔特岛",
  nameEn: "Stewart Island / Rakiura",
  category: "island",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "帕特森湾与哈夫穆恩湾（Oban）", lon: 168.13, lat: -46.90, elevation: 100, kind: "island" },
  bbox: [167.6, -47.30, 168.35, -46.55],
  viewScale: 1.6,
  label: { lon: 167.95, lat: -46.95, rotation: 0 },
  source: "斯图尔特岛 / Rakiura：新西兰第三大岛，约85%为拉基乌拉国家公园，花岗岩与老沉积岩，气候凉湿，常见南极光和野生几维鸟（DOC）",
};

const WAITOMO: TerrainEntry = {
  id: "waitomo",
  nameZh: "怀托摩",
  nameEn: "Waitomo",
  category: "hills",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "怀托摩萤火虫洞一带", lon: 175.103, lat: -38.261, elevation: 60, kind: "gorge" },
  bbox: [175.0, -38.35, 175.25, -38.15],
  label: { lon: 175.10, lat: -38.26, rotation: 0 },
  source: "怀托摩：渐新世石灰岩喀斯特区，发育溶洞、天生桥、落水洞；洞内有新西兰特有的发光蕈蚊（“萤火虫”）（DOC / GNS Science）",
};

const AUCKLAND_VOLCANIC_FIELD: TerrainEntry = {
  id: "auckland-volcanic-field",
  nameZh: "奥克兰火山区",
  nameEn: "Auckland Volcanic Field",
  category: "hills",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "朗伊托托岛", lon: 174.860, lat: -36.786, elevation: 260, kind: "island" },
  bbox: [174.63, -37.02, 175.0, -36.68],
  viewScale: 1.6,
  label: { lon: 174.80, lat: -36.87, rotation: 0 },
  pois: [
    { name: "伊甸山 / Maungawhau", lon: 174.764, lat: -36.877, note: "市中心的火山锥，顶部有火口" },
    { name: "普普科湖 / Pupuke", lon: 174.767, lat: -36.783, note: "爆裂形成的圆形“低平火山口”湖" },
  ],
  source: "奥克兰火山区：约50余座单成因玄武质火山散布在城区之下，仍属活动状态；最年轻、最大的朗伊托托岛约在600年前喷发形成（GNS Science）",
};

const BANKS_PENINSULA: TerrainEntry = {
  id: "banks-peninsula",
  nameZh: "班克斯半岛",
  nameEn: "Banks Peninsula",
  category: "hills",
  regionId: "oceania",
  country: "new-zealand",
  landmark: { name: "阿卡罗阿港（淹没的火山口）", lon: 172.80, lat: -43.80, elevation: 200, kind: "escarpment" },
  bbox: [172.55, -43.92, 173.12, -43.55],
  viewScale: 1.5,
  label: { lon: 172.80, lat: -43.78, rotation: 0 },
  source: "班克斯半岛：两座中新世盾状火山被侵蚀后相叠的残体，原为岛屿，后被坎特伯雷平原砾石连到陆地；利特尔顿港、阿卡罗阿港是被海水淹没的火山谷（GNS Science）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 大洋洲 / 新西兰 =====
  AORAKI_SOUTHERN_ALPS, KAIKOURA_RANGES, THE_REMARKABLES, TARARUA_RANGE,
  MOUNT_RUAPEHU, MOUNT_TARANAKI,
  TASMAN_GLACIER, FRANZ_JOSEF_GLACIER, FIORDLAND, MILFORD_SOUND,
  LAKE_TAUPO, LAKE_WAKATIPU, LAKE_TEKAPO, LAKE_WANAKA,
  CANTERBURY_PLAINS, MACKENZIE_BASIN, CENTRAL_OTAGO, ROTORUA_CALDERA,
  WAIKATO_RIVER, CLUTHA_RIVER,
  BAY_OF_ISLANDS, ABEL_TASMAN_COAST, COROMANDEL_PENINSULA, PUNAKAIKI, MARLBOROUGH_SOUNDS,
  WHAKAARI_WHITE_ISLAND, STEWART_ISLAND,
  WAITOMO, AUCKLAND_VOLCANIC_FIELD, BANKS_PENINSULA,
];
