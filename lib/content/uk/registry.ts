import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 英国（regionId: "europe"，country: "uk"）
// 坐标据 British Geological Survey（BGS）/ Ordnance Survey /
// NatureScot / Natural England / Natural Resources Wales / UNESCO
// ============================================================

const SCOTTISH_HIGHLANDS: TerrainEntry = {
  id: "scottish-highlands",
  nameZh: "苏格兰高地",
  nameEn: "Scottish Highlands",
  category: "mountain_system",
  regionId: "europe",
  country: "uk",
  landmark: { name: "本尼维斯山（Ben Nevis）", lon: -5.0037, lat: 56.7969, elevation: 1345, kind: "peak" },
  bbox: [-6.5, 56.3, -3.3, 58.6],
  axis: [[-5.8, 56.6], [-4.2, 58.4]],
  viewFrom: 135,
  viewScale: 2.2,
  label: { lon: -4.8, lat: 57.3, rotation: -40 },
  pois: [
    { name: "大峡谷（Great Glen）", lon: -4.7, lat: 57.1, note: "沿大峡谷断层的直线谷地，串起尼斯湖等" },
  ],
  source: "苏格兰高地：加里东造山运动（约4.9–3.9亿年前）形成、后经反复冰川作用的古老山地；本尼维斯山1345m 为英国最高峰（BGS / Ordnance Survey）",
};

const CAIRNGORMS: TerrainEntry = {
  id: "cairngorms",
  nameZh: "凯恩戈姆山",
  nameEn: "Cairngorms",
  category: "plateau",
  regionId: "europe",
  country: "uk",
  landmark: { name: "本麦克杜伊山（Ben Macdui）", lon: -3.6690, lat: 57.0703, elevation: 1309, kind: "peak" },
  bbox: [-4.0, 56.9, -3.3, 57.25],
  viewScale: 1.7,
  label: { lon: -3.65, lat: 57.08, rotation: 0 },
  source: "凯恩戈姆山：约4.27亿年前侵位的花岗岩被抬升、剥露形成的高原，含英国多座最高峰；顶面接近苔原环境，冰斗发育；英国面积最大的国家公园（BGS / NatureScot）",
};

const SOUTHERN_UPLANDS: TerrainEntry = {
  id: "southern-uplands",
  nameZh: "南部高地",
  nameEn: "Southern Uplands",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "梅里克山（Merrick）", lon: -4.4700, lat: 55.1400, elevation: 843, kind: "peak" },
  bbox: [-5.1, 54.6, -2.0, 55.7],
  axis: [[-4.8, 54.8], [-2.3, 55.5]],
  viewScale: 2.0,
  label: { lon: -3.6, lat: 55.3, rotation: -60 },
  source: "南部高地：南部高地断层与英格兰边界之间的浑圆丘陵，由奥陶纪—志留纪硬砂岩、页岩组成的增生楔抬升而成（BGS）",
};

const SNOWDONIA: TerrainEntry = {
  id: "snowdonia",
  nameZh: "斯诺登尼亚",
  nameEn: "Eryri / Snowdonia",
  category: "mountain_system",
  regionId: "europe",
  country: "uk",
  landmark: { name: "斯诺登峰（Yr Wyddfa / Snowdon）", lon: -4.0765, lat: 53.0685, elevation: 1085, kind: "peak" },
  bbox: [-4.35, 52.75, -3.75, 53.20],
  axis: [[-4.15, 52.85], [-3.85, 53.15]],
  viewFrom: 90,
  viewScale: 1.5,
  label: { lon: -4.05, lat: 53.05, rotation: -50 },
  source: "Eryri（旧英语名 Snowdonia，2023-11 起国家公园管理局以威尔士语名为官方名；核实 2026-09-09）：威尔士西北部，寒武纪—奥陶纪沉积岩与火山岩强烈冰蚀的山地；斯诺登峰1085m 为威尔士暨英格兰-威尔士最高峰（BGS / Natural Resources Wales）",
};

const BRECON_BEACONS: TerrainEntry = {
  id: "brecon-beacons",
  nameZh: "布雷肯比肯斯",
  nameEn: "Bannau Brycheiniog / Brecon Beacons",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "彭伊范山（Pen y Fan）", lon: -3.4360, lat: 51.8842, elevation: 886, kind: "escarpment" },
  bbox: [-3.9, 51.75, -3.0, 52.05],
  axis: [[-3.8, 51.90], [-3.1, 51.88]],
  viewFrom: 180,
  viewScale: 1.6,
  label: { lon: -3.44, lat: 51.90, rotation: -6 },
  source: "Bannau Brycheiniog（旧英语名 Brecon Beacons，2023-04 起为官方名；核实 2026-09-09）：南威尔士的老红砂岩（泥盆纪）陡崖，北坡有冰蚀凹地；彭伊范山886m 为南不列颠最高点；国际暗夜保护区（Natural Resources Wales / BGS）",
};

const LAKE_DISTRICT: TerrainEntry = {
  id: "lake-district",
  nameZh: "湖区",
  nameEn: "Lake District",
  category: "mountain_system",
  regionId: "europe",
  country: "uk",
  landmark: { name: "斯科费尔峰（Scafell Pike）", lon: -3.2116, lat: 54.4542, elevation: 978, kind: "peak" },
  bbox: [-3.45, 54.35, -2.80, 54.70],
  viewScale: 1.7,
  label: { lon: -3.1, lat: 54.52, rotation: 0 },
  pois: [
    { name: "温德米尔湖", lon: -2.94, lat: 54.36, note: "英格兰最大的天然湖，冰蚀带状湖" },
  ],
  source: "湖区：英格兰西北部，奥陶纪火山岩（Borrowdale 火山群）与板岩组成的穹隆，被冰川刻成放射状谷地和带状湖；斯科费尔峰978m 为英格兰最高峰；世界遗产（UNESCO / BGS）",
};

const PENNINES: TerrainEntry = {
  id: "pennines",
  nameZh: "奔宁山脉",
  nameEn: "Pennines",
  category: "mountain_system",
  regionId: "europe",
  country: "uk",
  landmark: { name: "克罗斯费尔（Cross Fell）", lon: -2.4869, lat: 54.7020, elevation: 893, kind: "escarpment" },
  bbox: [-2.7, 53.0, -1.6, 55.5],
  axis: [[-2.2, 53.2], [-2.3, 55.4]],
  viewFrom: 90,
  viewScale: 2.4,
  label: { lon: -2.1, lat: 54.3, rotation: -80 },
  source: "奔宁山脉：常被称为“英格兰的脊梁”，是石炭纪石灰岩、砂岩和煤系组成的一条南北向背斜隆起，构成英格兰东、西流向河流的分水岭（BGS / Ordnance Survey）",
};

const MOURNE_MOUNTAINS: TerrainEntry = {
  id: "mourne-mountains",
  nameZh: "莫恩山",
  nameEn: "Mourne Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "uk",
  landmark: { name: "多纳德山（Slieve Donard）", lon: -5.9214, lat: 54.1803, elevation: 850, kind: "peak" },
  bbox: [-6.15, 54.08, -5.75, 54.25],
  axis: [[-6.05, 54.12], [-5.80, 54.20]],
  viewFrom: 180,
  label: { lon: -5.95, lat: 54.16, rotation: -20 },
  source: "莫恩山：北爱尔兰东南部，约5600万年前（古近纪）侵位的花岗岩被剥露形成的紧凑山群，紧邻海岸；多纳德山850m 为北爱尔兰最高峰（BGS / Geological Survey of Northern Ireland）",
};

const PEAK_DISTRICT: TerrainEntry = {
  id: "peak-district",
  nameZh: "峰区",
  nameEn: "Peak District",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "金德斯科特高原（Kinder Scout）", lon: -1.871, lat: 53.385, elevation: 636, kind: "escarpment" },
  bbox: [-2.10, 53.00, -1.55, 53.55],
  viewScale: 1.7,
  label: { lon: -1.80, lat: 53.30, rotation: 0 },
  source: "峰区：奔宁山脉南端。北部“暗峰”是磨石粗砂岩的马蹄形沼地高原，南部“白峰”是石炭纪石灰岩台地和干谷；英国第一个国家公园（1951）（BGS / Natural England）",
};

const YORKSHIRE_DALES: TerrainEntry = {
  id: "yorkshire-dales",
  nameZh: "约克郡谷地",
  nameEn: "Yorkshire Dales",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "马勒姆湾（Malham Cove）", lon: -2.155, lat: 54.070, elevation: 250, kind: "escarpment" },
  bbox: [-2.65, 53.95, -1.90, 54.40],
  viewScale: 1.8,
  label: { lon: -2.25, lat: 54.15, rotation: 0 },
  source: "约克郡谷地：石炭纪石灰岩喀斯特——石灰岩铺面、崖坎、竖井和溶洞发育，冰川又把谷地拓宽；含“约克郡三峰”（Natural England / BGS）",
};

const NORTH_YORK_MOORS: TerrainEntry = {
  id: "north-york-moors",
  nameZh: "北约克沼原",
  nameEn: "North York Moors",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "北约克沼原（丹比高沼一带）", lon: -0.90, lat: 54.37, elevation: 300, kind: "escarpment" },
  bbox: [-1.35, 54.20, -0.40, 54.55],
  viewScale: 1.7,
  label: { lon: -0.90, lat: 54.37, rotation: 0 },
  source: "北约克沼原：侏罗纪砂岩台地，覆盖英格兰-威尔士最大的连片欧石南沼地，东缘是英格兰东海岸最高的海崖（Natural England / BGS）",
};

const DARTMOOR: TerrainEntry = {
  id: "dartmoor",
  nameZh: "达特穆尔",
  nameEn: "Dartmoor",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "海威尔黑斯（High Willhays）", lon: -4.010, lat: 50.681, elevation: 621, kind: "escarpment" },
  bbox: [-4.15, 50.44, -3.70, 50.78],
  viewScale: 1.6,
  label: { lon: -3.90, lat: 50.58, rotation: 0 },
  source: "达特穆尔：德文郡的一片花岗岩高地（约2.9亿年前侵位），顶面覆泥炭沼、点缀风化残丘“突岩”（tor）；南英格兰最大的开阔荒野，青铜时代遗迹密集（BGS / Natural England）",
};

const EXMOOR: TerrainEntry = {
  id: "exmoor",
  nameZh: "埃克斯穆尔",
  nameEn: "Exmoor",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "邓克里灯塔山（Dunkery Beacon）", lon: -3.585, lat: 51.161, elevation: 519, kind: "escarpment" },
  bbox: [-3.95, 51.02, -3.35, 51.28],
  viewFrom: 0,
  viewScale: 1.5,
  label: { lon: -3.65, lat: 51.13, rotation: 0 },
  source: "埃克斯穆尔：德文—萨默塞特的泥盆纪砂岩沼地，北缘直接以高海崖跌入布里斯托尔湾（含英格兰最高海崖之一）；国际暗夜保护区（Natural England / BGS）",
};

const CHEVIOT_HILLS: TerrainEntry = {
  id: "cheviot-hills",
  nameZh: "切维厄特丘陵",
  nameEn: "Cheviot Hills",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "切维厄特山（The Cheviot）", lon: -2.145, lat: 55.478, elevation: 815, kind: "peak" },
  bbox: [-2.60, 55.25, -2.00, 55.62],
  viewScale: 1.6,
  label: { lon: -2.30, lat: 55.42, rotation: 0 },
  source: "切维厄特丘陵：跨英格兰-苏格兰边界，核心是约3.9亿年前的“切维厄特火山”留下的安山岩与花岗岩，被侵蚀成浑圆草坡；诺森伯兰国家公园（BGS）",
};

const SOUTH_DOWNS: TerrainEntry = {
  id: "south-downs",
  nameZh: "南唐斯丘陵",
  nameEn: "South Downs",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "比奇角（Beachy Head）", lon: 0.245, lat: 50.735, elevation: 162, kind: "escarpment" },
  bbox: [-1.40, 50.72, 0.30, 51.05],
  axis: [[-1.30, 50.95], [0.25, 50.74]],
  viewFrom: 180,
  viewScale: 1.8,
  label: { lon: -0.55, lat: 50.90, rotation: -12 },
  source: "南唐斯丘陵：从汉普郡延伸到东萨塞克斯海岸的白垩单面山，北坡陡、南坡缓；东端在比奇角以白垩海崖入海；英格兰最新的国家公园（2010/2011）（Natural England / BGS）",
};

const CHILTERNS: TerrainEntry = {
  id: "chilterns",
  nameZh: "奇尔特恩丘陵",
  nameEn: "Chiltern Hills",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "库姆山（Coombe Hill）", lon: -0.720, lat: 51.732, elevation: 267, kind: "escarpment" },
  bbox: [-1.10, 51.55, -0.35, 51.92],
  axis: [[-1.05, 51.60], [-0.40, 51.88]],
  viewFrom: 315,
  viewScale: 1.7,
  label: { lon: -0.72, lat: 51.72, rotation: -50 },
  source: "奇尔特恩丘陵：伦敦西北的白垩单面山，西北坡陡（陡崖上挂着山毛榉林）、东南坡缓；泰晤士河在戈灵一带切穿它（Natural England / BGS）",
};

const WHITE_CLIFFS_OF_DOVER: TerrainEntry = {
  id: "white-cliffs-of-dover",
  nameZh: "多佛白崖",
  nameEn: "White Cliffs of Dover",
  category: "coast",
  regionId: "europe",
  country: "uk",
  landmark: { name: "多佛白崖", lon: 1.360, lat: 51.130, elevation: 110, kind: "escarpment" },
  bbox: [1.26, 51.08, 1.46, 51.18],
  label: { lon: 1.36, lat: 51.13, rotation: 0 },
  source: "多佛白崖：英吉利海峡最窄处（距法国约34km）的白垩海崖，白垩为白垩纪球石藻骨骼堆积而成的近纯碳酸钙软岩（BGS）",
};

const JURASSIC_COAST: TerrainEntry = {
  id: "jurassic-coast",
  nameZh: "侏罗纪海岸",
  nameEn: "Jurassic Coast",
  category: "coast",
  regionId: "europe",
  country: "uk",
  landmark: { name: "杜德尔门（Durdle Door）", lon: -2.276, lat: 50.621, elevation: 20, kind: "escarpment" },
  bbox: [-3.50, 50.55, -1.90, 50.78],
  axis: [[-3.40, 50.62], [-1.95, 50.63]],
  viewFrom: 0,
  viewScale: 1.9,
  label: { lon: -2.60, lat: 50.65, rotation: -6 },
  source: "侏罗纪海岸：从德文郡到多塞特郡约155km，海崖岩层连续记录三叠纪、侏罗纪、白垩纪约1.85亿年；含拉尔沃思湾、切西尔滩等；世界遗产（UNESCO / BGS）",
};

const GIANTS_CAUSEWAY: TerrainEntry = {
  id: "giants-causeway",
  nameZh: "巨人堤道",
  nameEn: "Giant's Causeway",
  category: "coast",
  regionId: "europe",
  country: "uk",
  landmark: { name: "巨人堤道柱状玄武岩", lon: -6.511, lat: 55.241, elevation: 15, kind: "escarpment" },
  bbox: [-6.55, 55.22, -6.46, 55.26],
  label: { lon: -6.511, lat: 55.241, rotation: 0 },
  source: "巨人堤道：北爱尔兰安特里姆海岸，约6000万年前熔岩冷却收缩形成的约4万根多边形玄武岩柱；世界遗产（UNESCO / Geological Survey of Northern Ireland）",
};

const SEVEN_SISTERS: TerrainEntry = {
  id: "seven-sisters",
  nameZh: "七姊妹崖",
  nameEn: "Seven Sisters",
  category: "coast",
  regionId: "europe",
  country: "uk",
  landmark: { name: "七姊妹崖与库克米尔河口", lon: 0.155, lat: 50.752, elevation: 80, kind: "escarpment" },
  bbox: [0.09, 50.72, 0.26, 50.80],
  label: { lon: 0.16, lat: 50.75, rotation: 0 },
  source: "七姊妹崖：南唐斯东端一段起伏的白垩海崖，波状起伏是被海崖后退截断的一串干谷；南唐斯国家公园（Natural England / BGS）",
};

const CORNWALL_COAST: TerrainEntry = {
  id: "cornwall-coast",
  nameZh: "康沃尔海岸",
  nameEn: "Cornwall Coast",
  category: "coast",
  regionId: "europe",
  country: "uk",
  landmark: { name: "兰兹角（Land's End）", lon: -5.713, lat: 50.066, elevation: 60, kind: "escarpment" },
  bbox: [-5.75, 49.95, -4.55, 50.55],
  axis: [[-5.70, 50.10], [-4.60, 50.35]],
  viewFrom: 180,
  viewScale: 1.8,
  label: { lon: -5.30, lat: 50.15, rotation: -25 },
  source: "康沃尔海岸：不列颠西南尖端，约2.8亿年前侵位的花岗岩（康沃尔岩基）出露形成的高海崖；历史上采锡、采铜，采矿景观列入世界遗产（BGS / UNESCO）",
};

const PEMBROKESHIRE_COAST: TerrainEntry = {
  id: "pembrokeshire-coast",
  nameZh: "彭布罗克郡海岸",
  nameEn: "Pembrokeshire Coast",
  category: "coast",
  regionId: "europe",
  country: "uk",
  landmark: { name: "圣戴维兹半岛", lon: -5.27, lat: 51.88, elevation: 40, kind: "escarpment" },
  bbox: [-5.45, 51.58, -4.65, 52.12],
  viewScale: 1.7,
  label: { lon: -5.05, lat: 51.85, rotation: 0 },
  source: "彭布罗克郡海岸：威尔士唯一的海岸型国家公园，岩石从前寒武纪到石炭纪；含米尔福德港这条大溺谷、火山岬角和抬升海滩（Natural Resources Wales / BGS）",
};

const GOWER_PENINSULA: TerrainEntry = {
  id: "gower-peninsula",
  nameZh: "高尔半岛",
  nameEn: "Gower Peninsula / Y Gŵyr",
  category: "coast",
  regionId: "europe",
  country: "uk",
  landmark: { name: "沃姆斯角（Worm's Head）", lon: -4.334, lat: 51.567, elevation: 30, kind: "escarpment" },
  bbox: [-4.35, 51.53, -3.95, 51.63],
  label: { lon: -4.15, lat: 51.57, rotation: 0 },
  source: "高尔半岛：斯旺西以西的小半岛，1956年成为英国第一个“杰出自然风景区”（该分类 2023-11 起对外改称“国家风景区”National Landscape，法定名不变；核实 2026-09-09）；石炭纪石灰岩海崖 + 老红砂岩山脊 + 罗西利大沙湾（Natural Resources Wales）",
};

const CHEDDAR_GORGE: TerrainEntry = {
  id: "cheddar-gorge",
  nameZh: "切达峡谷",
  nameEn: "Cheddar Gorge",
  category: "gorge",
  regionId: "europe",
  country: "uk",
  landmark: { name: "切达峡谷", lon: -2.765, lat: 51.281, elevation: 120, kind: "gorge" },
  bbox: [-2.80, 51.26, -2.71, 51.30],
  axis: [[-2.79, 51.275], [-2.72, 51.285]],
  label: { lon: -2.765, lat: 51.281, rotation: -20 },
  source: "切达峡谷：门迪普丘陵里的石炭纪石灰岩峡谷，崖高约135m，为英格兰最深的峡谷；一般认为由冰期融雪水在冻土上冲刷而成；古夫洞出土约9000年前的“切达人”（BGS / Natural England）",
};

const GREAT_GLEN: TerrainEntry = {
  id: "great-glen",
  nameZh: "大峡谷",
  nameEn: "Great Glen / Glen Mòr",
  category: "valley",
  regionId: "europe",
  country: "uk",
  landmark: { name: "尼斯湖", lon: -4.42, lat: 57.32, elevation: 16, kind: "meander" },
  bbox: [-5.15, 56.75, -4.20, 57.50],
  axis: [[-5.10, 56.82], [-4.25, 57.48]],
  viewScale: 1.7,
  label: { lon: -4.7, lat: 57.1, rotation: -55 },
  source: "大峡谷：沿“大峡谷断层”（一条大型走滑断层，左行错移约100km）发育的笔直谷地，后经冰川深挖；串起尼斯湖等，喀里多尼亚运河把它们连通（BGS）",
};

const LOCH_LOMOND: TerrainEntry = {
  id: "loch-lomond",
  nameZh: "洛蒙德湖",
  nameEn: "Loch Lomond",
  category: "lake",
  regionId: "europe",
  country: "uk",
  landmark: { name: "洛蒙德湖（南部宽湖面）", lon: -4.60, lat: 56.08, elevation: 8, kind: "lake" },
  bbox: [-4.78, 55.98, -4.53, 56.43],
  axis: [[-4.62, 56.42], [-4.58, 56.00]],
  viewScale: 1.6,
  label: { lon: -4.60, lat: 56.15, rotation: -6 },
  source: "洛蒙德湖：大不列颠岛面积最大的湖（约71km²），跨“高地边界断层”——北段窄深（在高地里），南段宽浅、多岛（在低地沉积区）；苏格兰第一个国家公园（NatureScot / BGS）",
};

const LOUGH_NEAGH: TerrainEntry = {
  id: "lough-neagh",
  nameZh: "内伊湖",
  nameEn: "Lough Neagh",
  category: "lake",
  regionId: "europe",
  country: "uk",
  landmark: { name: "内伊湖", lon: -6.42, lat: 54.63, elevation: 12, kind: "lake" },
  bbox: [-6.58, 54.47, -6.28, 54.79],
  viewScale: 1.6,
  label: { lon: -6.42, lat: 54.63, rotation: 0 },
  source: "内伊湖：面积约392km²，是英国和不列颠群岛面积最大的湖，但很浅（平均约9m）；位于安特里姆玄武岩下沉形成的构造洼地里，由班恩河排水（Geological Survey of Northern Ireland）",
};

const RIVER_THAMES: TerrainEntry = {
  id: "river-thames",
  nameZh: "泰晤士河",
  nameEn: "River Thames",
  category: "river",
  regionId: "europe",
  country: "uk",
  landmark: { name: "伦敦市中心河段", lon: -0.12, lat: 51.508, elevation: 2, kind: "meander" },
  bbox: [-2.05, 51.30, 0.95, 51.95],
  axis: [[-1.95, 51.68], [0.85, 51.46]],
  viewScale: 2.2,
  label: { lon: -0.6, lat: 51.55, rotation: -12 },
  source: "泰晤士河：约346km，发源于科茨沃尔德丘陵，向东经伦敦注入北海；泰丁顿以下受潮汐影响，伦敦建在河的最下游可架桥处、也是潮汐河口的顶端（Ordnance Survey / BGS）",
};

const RIVER_SEVERN: TerrainEntry = {
  id: "river-severn",
  nameZh: "塞文河",
  nameEn: "River Severn / Afon Hafren",
  category: "river",
  regionId: "europe",
  country: "uk",
  landmark: { name: "铁桥峡（Ironbridge Gorge）", lon: -2.485, lat: 52.627, elevation: 40, kind: "meander" },
  bbox: [-3.95, 51.55, -2.10, 52.65],
  axis: [[-3.78, 52.47], [-2.55, 51.60]],
  viewScale: 2.0,
  label: { lon: -2.9, lat: 52.1, rotation: -60 },
  source: "塞文河：约354km，是英国最长的河，发源于中威尔士的普林利蒙山，经铁桥峡注入塞文河口；河口潮差居世界前列（大潮约15m），有“塞文涌潮”（BGS / Ordnance Survey）",
};

const THE_FENS: TerrainEntry = {
  id: "the-fens",
  nameZh: "沼泽地",
  nameEn: "The Fens",
  category: "plain",
  regionId: "europe",
  country: "uk",
  landmark: { name: "伊利一带（沼泽地中部）", lon: 0.10, lat: 52.40, elevation: 1, kind: "delta" },
  bbox: [-0.45, 52.20, 0.55, 53.10],
  viewScale: 2.2,
  label: { lon: 0.10, lat: 52.55, rotation: 0 },
  source: "沼泽地：英格兰东部沃什湾周围的一大片低平湿地，很多地方接近或低于海平面；自17世纪起被人工排水开垦、至今靠泵站维持，是英国最肥沃的耕地之一（Ordnance Survey / BGS）",
};

const THE_BROADS: TerrainEntry = {
  id: "the-broads",
  nameZh: "布罗兹湿地",
  nameEn: "The Broads",
  category: "plain",
  regionId: "europe",
  country: "uk",
  landmark: { name: "威罗比一带（布罗兹湿地）", lon: 1.50, lat: 52.68, elevation: 2, kind: "meander" },
  bbox: [1.28, 52.55, 1.78, 52.88],
  viewScale: 1.7,
  label: { lon: 1.50, lat: 52.68, rotation: 0 },
  source: "布罗兹湿地：诺福克—萨福克的一片浅湖与河道网络，1950年代查明这些浅湖是中世纪挖泥炭的坑、后因水位相对上升而被淹没形成；英国最大的受保护湿地（Broads Authority / BGS）",
};

const ISLE_OF_SKYE: TerrainEntry = {
  id: "isle-of-skye",
  nameZh: "斯凯岛",
  nameEn: "Isle of Skye / An t-Eilean Sgitheanach",
  category: "island",
  regionId: "europe",
  country: "uk",
  landmark: { name: "库林山（黑库林）", lon: -6.220, lat: 57.211, elevation: 992, kind: "island" },
  bbox: [-6.80, 57.00, -5.85, 57.70],
  viewScale: 1.6,
  label: { lon: -6.25, lat: 57.35, rotation: 0 },
  pois: [
    { name: "特罗特尼什山脊（老人峰 / Quiraing）", lon: -6.18, lat: 57.53, note: "英国最长的滑坡体——玄武岩盖层沿软弱的侏罗纪岩层下滑" },
  ],
  source: "斯凯岛：内赫布里底最大的岛。黑库林是约5800万年前岩浆房的辉长岩（尖锐），红库林是花岗岩（浑圆）；特罗特尼什是英国最长的滑坡地貌（NatureScot / BGS）",
};

const OUTER_HEBRIDES: TerrainEntry = {
  id: "outer-hebrides",
  nameZh: "外赫布里底群岛",
  nameEn: "Outer Hebrides / Na h-Eileanan Siar",
  category: "island",
  regionId: "europe",
  country: "uk",
  landmark: { name: "刘易斯岛与哈里斯岛", lon: -6.85, lat: 58.00, elevation: 60, kind: "island" },
  bbox: [-7.75, 56.75, -6.15, 58.55],
  axis: [[-7.30, 56.90], [-6.30, 58.45]],
  viewScale: 1.9,
  label: { lon: -7.1, lat: 57.7, rotation: -30 },
  source: "外赫布里底群岛：长约200km的岛链，主体是刘易斯片麻岩——约30亿年前的太古宙岩石，是欧洲最古老的岩石之一；冰川刨蚀出“岩丘-小湖”地貌，大西洋岸有贝壳沙草原“machair”（NatureScot / BGS）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 欧洲 / 英国 =====
  SCOTTISH_HIGHLANDS, CAIRNGORMS, SOUTHERN_UPLANDS, SNOWDONIA,
  BRECON_BEACONS, LAKE_DISTRICT, PENNINES, MOURNE_MOUNTAINS,
  PEAK_DISTRICT, YORKSHIRE_DALES, NORTH_YORK_MOORS, DARTMOOR,
  EXMOOR, CHEVIOT_HILLS, SOUTH_DOWNS, CHILTERNS,
  WHITE_CLIFFS_OF_DOVER, JURASSIC_COAST, GIANTS_CAUSEWAY, SEVEN_SISTERS,
  CORNWALL_COAST, PEMBROKESHIRE_COAST, GOWER_PENINSULA, CHEDDAR_GORGE, GREAT_GLEN,
  LOCH_LOMOND, LOUGH_NEAGH, RIVER_THAMES, RIVER_SEVERN,
  THE_FENS, THE_BROADS, ISLE_OF_SKYE, OUTER_HEBRIDES,
];
