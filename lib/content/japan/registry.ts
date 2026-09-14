import type { TerrainEntry } from "@/lib/terrain-registry";

// ============================================================
// 亚洲 — 日本（regionId: "asia", country: "japan"）
// 坐标 / 高程据 日本国土地理院（GSI）、气象厅（JMA）、环境省国立公园、UNESCO
// ============================================================

const MOUNT_FUJI: TerrainEntry = {
  id: "mount-fuji",
  nameZh: "富士山",
  nameEn: "Mount Fuji",
  category: "mountain_system",
  regionId: "asia",
  country: "japan",
  landmark: { name: "富士山顶（剑峰）", lon: 138.7274, lat: 35.3606, elevation: 3776, kind: "peak" },
  bbox: [138.55, 35.20, 138.90, 35.50],
  axis: [[138.60, 35.30], [138.85, 35.42]],
  viewFrom: 135,
  label: { lon: 138.73, lat: 35.36, rotation: 0 },
  source: "富士山：日本最高峰，海拔3776m，是一座近乎完美圆锥形的活火山（日本国土地理院 / 气象厅）；2013年作为文化景观列入世界遗产",
};

const JAPANESE_ALPS: TerrainEntry = {
  id: "japanese-alps",
  nameZh: "日本阿尔卑斯山脉",
  nameEn: "Japanese Alps",
  category: "mountain_system",
  regionId: "asia",
  country: "japan",
  landmark: { name: "北岳", lon: 138.2394, lat: 35.6745, elevation: 3193, kind: "peak" },
  bbox: [137.2, 35.2, 138.6, 37.0],
  axis: [[138.0, 35.4], [137.6, 36.8]],
  viewFrom: 90,
  label: { lon: 137.7, lat: 36.1, rotation: -75 },
  pois: [
    { name: "北岳", lon: 138.2394, lat: 35.6745, note: "南阿尔卑斯（赤石山脉）最高峰，也是日本第二高峰，3193m" },
    { name: "穗高岳", lon: 137.648, lat: 36.289, note: "北阿尔卑斯（飞驒山脉）标志性岩峰" },
  ],
  source: "日本阿尔卑斯：本州中部的飞驒、木曾、赤石三条平行山脉的总称，含日本多数3000m级山峰；有小规模的现代冰川和典型的冰川地貌（日本国土地理院）",
};

const MOUNT_ASO: TerrainEntry = {
  id: "mount-aso",
  nameZh: "阿苏山",
  nameEn: "Mount Aso",
  category: "basin",
  regionId: "asia",
  country: "japan",
  landmark: { name: "中岳火口", lon: 131.104, lat: 32.884, elevation: 1506, kind: "escarpment" },
  bbox: [130.85, 32.75, 131.30, 33.05],
  axis: [[130.95, 32.80], [131.20, 33.00]],
  viewFrom: 200,
  label: { lon: 131.10, lat: 32.88, rotation: 0 },
  pois: [
    { name: "中岳", lon: 131.104, lat: 32.884, note: "阿苏火山群里持续活动的火口" },
    { name: "外轮山与破火山口平原", lon: 131.05, lat: 32.95, note: "南北约25km的巨型破火山口，里面住着人、种着田" },
  ],
  source: "阿苏山：世界上规模最大的破火山口之一，南北约25km；约27万到9万年前四次巨型喷发塌陷形成，火口原内有城镇和农田，中央火山群仍在活动（气象厅 / 环境省）",
};

const SAKURAJIMA: TerrainEntry = {
  id: "sakurajima",
  nameZh: "樱岛",
  nameEn: "Sakurajima",
  category: "mountain_system",
  regionId: "asia",
  country: "japan",
  landmark: { name: "南岳山顶", lon: 130.657, lat: 31.593, elevation: 1117, kind: "peak" },
  bbox: [130.58, 31.53, 130.74, 31.66],
  axis: [[130.60, 31.56], [130.72, 31.62]],
  viewScale: 1.4,
  label: { lon: 130.66, lat: 31.59, rotation: 0 },
  source: "樱岛：鹿儿岛湾内的一座活火山，是日本最活跃的火山之一，常有小规模爆发式喷发；1914年的大喷发把它和大隅半岛连在了一起（气象厅）",
};

const MOUNT_UNZEN: TerrainEntry = {
  id: "mount-unzen",
  nameZh: "云仙岳",
  nameEn: "Mount Unzen",
  category: "mountain_system",
  regionId: "asia",
  country: "japan",
  landmark: { name: "平成新山", lon: 130.299, lat: 32.761, elevation: 1483, kind: "peak" },
  bbox: [130.20, 32.70, 130.40, 32.82],
  axis: [[130.24, 32.72], [130.36, 32.80]],
  viewScale: 1.3,
  label: { lon: 130.30, lat: 32.76, rotation: 0 },
  source: "云仙岳：岛原半岛上的活火山群；1990—1995年的喷发形成了熔岩穹丘“平成新山”，并多次发生火山碎屑流，是研究火山碎屑流的重要地点（气象厅）",
};

const HAKONE_CALDERA: TerrainEntry = {
  id: "hakone-caldera",
  nameZh: "箱根",
  nameEn: "Hakone",
  category: "basin",
  regionId: "asia",
  country: "japan",
  landmark: { name: "芦之湖", lon: 139.017, lat: 35.205, elevation: 723, kind: "escarpment" },
  bbox: [138.92, 35.15, 139.12, 35.30],
  axis: [[138.97, 35.18], [139.07, 35.27]],
  viewScale: 1.3,
  label: { lon: 139.02, lat: 35.22, rotation: 0 },
  pois: [
    { name: "芦之湖", lon: 139.017, lat: 35.205, note: "破火山口内积水成的湖" },
    { name: "大涌谷", lon: 139.021, lat: 35.245, note: "冒着硫磺蒸汽的活跃喷气地" },
  ],
  source: "箱根：一座多重破火山口火山，外轮山围着芦之湖和中央火山锥；地热活动仍然活跃（大涌谷），距东京很近（气象厅 / 箱根地质公园）",
};

const DAISETSUZAN: TerrainEntry = {
  id: "daisetsuzan",
  nameZh: "大雪山",
  nameEn: "Daisetsuzan",
  category: "mountain_system",
  regionId: "asia",
  country: "japan",
  landmark: { name: "旭岳", lon: 142.854, lat: 43.663, elevation: 2291, kind: "peak" },
  bbox: [142.55, 43.40, 143.20, 43.85],
  axis: [[142.70, 43.45], [143.05, 43.80]],
  viewFrom: 200,
  label: { lon: 142.90, lat: 43.63, rotation: 0 },
  source: "大雪山：北海道中部的火山群，含北海道最高峰旭岳（2291m）；纬度高加上海拔，山上有大面积的高山苔原和永久冻土（环境省 / 大雪山国立公园）",
};

const KII_MOUNTAINS: TerrainEntry = {
  id: "kii-mountains",
  nameZh: "纪伊山地",
  nameEn: "Kii Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "japan",
  landmark: { name: "八经岳（大峰山）", lon: 135.905, lat: 34.176, elevation: 1915, kind: "peak" },
  bbox: [135.4, 33.7, 136.4, 34.4],
  axis: [[135.5, 33.8], [136.2, 34.3]],
  viewFrom: 200,
  label: { lon: 135.9, lat: 34.05, rotation: 0 },
  source: "纪伊山地：纪伊半岛内部一片陡峭、多雨、森林茂密的山地，是本州岛降水最多的地区之一；熊野古道等宗教朝圣路线作为文化景观列入世界遗产（环境省 / UNESCO）",
};

const KANTO_PLAIN: TerrainEntry = {
  id: "kanto-plain",
  nameZh: "关东平原",
  nameEn: "Kanto Plain",
  category: "plain",
  regionId: "asia",
  country: "japan",
  landmark: { name: "东京湾北岸", lon: 139.80, lat: 35.68, elevation: 10, kind: "city" },
  bbox: [138.9, 34.9, 140.9, 36.9],
  axis: [[139.0, 35.2], [140.4, 36.6]],
  viewFrom: 200,
  label: { lon: 139.6, lat: 36.0, rotation: 0 },
  source: "关东平原：日本最大的平原，约17000km²，由利根川、荒川等河流冲积和台地组成；东京都市圈就建在这片平原上（日本国土地理院）",
};

const NOBI_PLAIN: TerrainEntry = {
  id: "nobi-plain",
  nameZh: "浓尾平原",
  nameEn: "Nōbi Plain",
  category: "plain",
  regionId: "asia",
  country: "japan",
  landmark: { name: "木曾三川汇流处", lon: 136.68, lat: 35.10, elevation: 3, kind: "delta" },
  bbox: [136.3, 34.8, 137.1, 35.6],
  axis: [[136.7, 34.9], [136.9, 35.5]],
  viewScale: 1.5,
  label: { lon: 136.7, lat: 35.2, rotation: 0 },
  source: "浓尾平原：名古屋一带的冲积平原，木曾川、长良川、揖斐川三条大河在这里并流入海；西南部低于海平面，历史上靠环形堤（“轮中”）防洪（日本国土地理院）",
};

const OSAKA_PLAIN: TerrainEntry = {
  id: "osaka-plain",
  nameZh: "大阪平原",
  nameEn: "Osaka Plain",
  category: "plain",
  regionId: "asia",
  country: "japan",
  landmark: { name: "大阪湾东岸", lon: 135.50, lat: 34.67, elevation: 5, kind: "city" },
  bbox: [135.2, 34.4, 135.8, 35.0],
  axis: [[135.3, 34.5], [135.7, 34.9]],
  viewScale: 1.5,
  label: { lon: 135.5, lat: 34.7, rotation: 0 },
  source: "大阪平原：淀川、大和川冲积、加上人工填海形成的平原，被生驹山、六甲山等断块山围住；关西的核心城市带（大阪、京都、神户）分布其上（日本国土地理院）",
};

const ISHIKARI_PLAIN: TerrainEntry = {
  id: "ishikari-plain",
  nameZh: "石狩平原",
  nameEn: "Ishikari Plain",
  category: "plain",
  regionId: "asia",
  country: "japan",
  landmark: { name: "札幌一带", lon: 141.35, lat: 43.06, elevation: 20, kind: "city" },
  bbox: [141.0, 42.7, 141.9, 43.7],
  axis: [[141.3, 42.8], [141.5, 43.6]],
  viewFrom: 200,
  label: { lon: 141.4, lat: 43.2, rotation: 0 },
  source: "石狩平原：北海道最大的平原，石狩川冲积形成；曾是大片湿地和泥炭地，明治以后大规模排水、开垦为稻田，札幌建在平原南缘（北海道 / 日本国土地理院）",
};

const TOKACHI_PLAIN: TerrainEntry = {
  id: "tokachi-plain",
  nameZh: "十胜平原",
  nameEn: "Tokachi Plain",
  category: "plain",
  regionId: "asia",
  country: "japan",
  landmark: { name: "带广一带", lon: 143.20, lat: 42.92, elevation: 90, kind: "grassland" },
  bbox: [142.7, 42.3, 143.7, 43.4],
  axis: [[143.1, 42.4], [143.3, 43.3]],
  viewFrom: 200,
  label: { lon: 143.2, lat: 42.9, rotation: 0 },
  source: "十胜平原：北海道东南部由十胜川及其支流的冲积扇拼成的平原，被日高山脉和大雪山围在内侧；是日本大规模、机械化旱作农业和乳业的代表地区（北海道）",
};

const LAKE_BIWA: TerrainEntry = {
  id: "lake-biwa",
  nameZh: "琵琶湖",
  nameEn: "Lake Biwa",
  category: "lake",
  regionId: "asia",
  country: "japan",
  landmark: { name: "琵琶湖", lon: 136.08, lat: 35.25, elevation: 85, kind: "lake" },
  bbox: [135.85, 34.95, 136.35, 35.55],
  axis: [[136.15, 35.05], [136.10, 35.50]],
  viewFrom: 90,
  label: { lon: 136.10, lat: 35.30, rotation: -80 },
  source: "琵琶湖：日本最大的湖，面积约670km²；约400万年前形成，是全球少数几个“古湖”之一，有大量特有物种；为京都、大阪、神户约1400万人供水（滋贺县 / 日本国土地理院）",
};

const LAKE_TOWADA: TerrainEntry = {
  id: "lake-towada",
  nameZh: "十和田湖",
  nameEn: "Lake Towada",
  category: "lake",
  regionId: "asia",
  country: "japan",
  landmark: { name: "十和田湖", lon: 140.88, lat: 40.46, elevation: 400, kind: "lake" },
  bbox: [140.75, 40.38, 141.02, 40.55],
  axis: [[140.80, 40.42], [140.98, 40.50]],
  viewScale: 1.3,
  label: { lon: 140.88, lat: 40.46, rotation: 0 },
  source: "十和田湖：本州北端的破火山口湖，两重破火山口套叠，湖最深约327m；奥入濑溪流从湖的东岸流出，一带是十和田八幡平国立公园（环境省）",
};

const SHIKOTSU_TOYA: TerrainEntry = {
  id: "shikotsu-toya",
  nameZh: "支笏洞爷火山区",
  nameEn: "Shikotsu-Tōya Volcanic Area",
  category: "lake",
  regionId: "asia",
  country: "japan",
  landmark: { name: "洞爷湖与有珠山", lon: 140.84, lat: 42.60, elevation: 84, kind: "lake" },
  bbox: [140.7, 42.4, 141.5, 42.9],
  axis: [[140.85, 42.5], [141.4, 42.8]],
  viewScale: 1.4,
  label: { lon: 141.1, lat: 42.65, rotation: 0 },
  pois: [
    { name: "洞爷湖", lon: 140.84, lat: 42.60, note: "破火山口湖，湖中有中岛" },
    { name: "有珠山 / 昭和新山", lon: 140.84, lat: 42.53, note: "20世纪多次喷发、并从麦田里长出一座新山的活火山" },
    { name: "支笏湖", lon: 141.35, lat: 42.75, note: "日本第二深的湖，冬天不结冰" },
  ],
  source: "支笏洞爷：北海道西南部一片以两个破火山口湖（支笏湖、洞爷湖）和多座活火山（有珠山、樽前山等）为核心的地区；洞爷湖有珠山是联合国教科文组织世界地质公园（环境省）",
};

const KUROBE_GORGE: TerrainEntry = {
  id: "kurobe-gorge",
  nameZh: "黑部峡谷",
  nameEn: "Kurobe Gorge",
  category: "gorge",
  regionId: "asia",
  country: "japan",
  landmark: { name: "黑部峡谷（宇奈月一带）", lon: 137.66, lat: 36.57, elevation: 600, kind: "gorge" },
  bbox: [137.55, 36.45, 137.75, 36.68],
  axis: [[137.68, 36.48], [137.60, 36.66]],
  viewScale: 1.3,
  label: { lon: 137.66, lat: 36.57, rotation: -30 },
  source: "黑部峡谷：黑部川在北阿尔卑斯（飞驒山脉）里切出的V形深峡谷，是日本落差和深度最大的峡谷之一；上游有黑部水坝（日本最高的拱坝）（环境省 / 中部山岳国立公园）",
};

const KAMIKOCHI: TerrainEntry = {
  id: "kamikochi",
  nameZh: "上高地",
  nameEn: "Kamikōchi",
  category: "valley",
  regionId: "asia",
  country: "japan",
  landmark: { name: "河童桥（梓川谷）", lon: 137.634, lat: 36.251, elevation: 1500, kind: "gorge" },
  bbox: [137.55, 36.20, 137.75, 36.35],
  axis: [[137.60, 36.22], [137.70, 36.33]],
  viewScale: 1.3,
  label: { lon: 137.63, lat: 36.25, rotation: -25 },
  pois: [
    { name: "大正池", lon: 137.626, lat: 36.234, note: "1915年烧岳喷发的泥石流堵住梓川形成的湖" },
    { name: "穗高连峰", lon: 137.648, lat: 36.289, note: "谷东侧的3000m级岩峰群" },
  ],
  source: "上高地：北阿尔卑斯里梓川上游一段海拔约1500m的宽谷，被穗高、烧岳等高山围住；谷底平坦，是冰川和河流共同作用的结果（环境省 / 中部山岳国立公园）",
};

const SETO_INLAND_SEA: TerrainEntry = {
  id: "seto-inland-sea",
  nameZh: "濑户内海",
  nameEn: "Seto Inland Sea",
  category: "coast",
  regionId: "asia",
  country: "japan",
  landmark: { name: "备赞濑户（濑户大桥一带）", lon: 133.80, lat: 34.35, elevation: 0, kind: "island" },
  bbox: [130.9, 33.0, 135.4, 34.8],
  axis: [[131.5, 33.6], [135.0, 34.5]],
  viewScale: 2.2,
  label: { lon: 133.2, lat: 34.2, rotation: -12 },
  source: "濑户内海：本州、四国、九州之间的一片半封闭内海，散布着约700座岛屿；是被海水淹没的山地-谷地地形，1934年成为日本最早的国立公园之一（环境省）",
};

const SANRIKU_COAST: TerrainEntry = {
  id: "sanriku-coast",
  nameZh: "三陆海岸",
  nameEn: "Sanriku Coast",
  category: "coast",
  regionId: "asia",
  country: "japan",
  landmark: { name: "北山崎断崖", lon: 141.95, lat: 40.02, elevation: 0, kind: "escarpment" },
  bbox: [141.4, 37.8, 142.2, 40.5],
  axis: [[141.9, 38.0], [141.9, 40.4]],
  viewFrom: 90,
  label: { lon: 141.7, lat: 39.2, rotation: -80 },
  source: "三陆海岸：本州东北部太平洋岸约600km的岸段，北段是抬升的海岸阶地和断崖，南段是溺谷式的锯齿状里亚海岸；2011年东日本大地震海啸在这里最为严重（环境省 / 三陆复兴国立公园）",
};

const SHIRETOKO_PENINSULA: TerrainEntry = {
  id: "shiretoko-peninsula",
  nameZh: "知床半岛",
  nameEn: "Shiretoko Peninsula",
  category: "coast",
  regionId: "asia",
  country: "japan",
  landmark: { name: "知床岳一带", lon: 145.30, lat: 44.20, elevation: 1254, kind: "escarpment" },
  bbox: [144.9, 43.85, 145.55, 44.42],
  axis: [[145.05, 43.95], [145.40, 44.35]],
  viewScale: 1.5,
  label: { lon: 145.2, lat: 44.15, rotation: -35 },
  source: "知床半岛：北海道东北端伸进鄂霍次克海的火山半岛，冬季有全球北半球最南的季节性海冰（流冰）上岸；因海陆生态系统的完整性2005年列入世界自然遗产（环境省 / UNESCO）",
};

const TOTTORI_SAND_DUNES: TerrainEntry = {
  id: "tottori-sand-dunes",
  nameZh: "鸟取沙丘",
  nameEn: "Tottori Sand Dunes",
  category: "desert",
  regionId: "asia",
  country: "japan",
  landmark: { name: "鸟取沙丘", lon: 134.232, lat: 35.539, elevation: 30, kind: "dune" },
  bbox: [134.18, 35.51, 134.30, 35.56],
  axis: [[134.19, 35.53], [134.29, 35.54]],
  viewScale: 1.6,
  label: { lon: 134.23, lat: 35.54, rotation: 0 },
  source: "鸟取沙丘：日本最大的沙丘群，东西约16km、局部高差约47m；千代川带来的泥沙入海后，被日本海的风重新吹上岸堆积而成（鸟取县 / 山阴海岸地质公园）",
};

const YAKUSHIMA: TerrainEntry = {
  id: "yakushima",
  nameZh: "屋久岛",
  nameEn: "Yakushima",
  category: "island",
  regionId: "asia",
  country: "japan",
  landmark: { name: "宫之浦岳", lon: 130.505, lat: 30.343, elevation: 1936, kind: "peak" },
  bbox: [130.35, 30.20, 130.68, 30.48],
  axis: [[130.40, 30.25], [130.62, 30.43]],
  viewScale: 1.4,
  label: { lon: 130.50, lat: 30.34, rotation: 0 },
  source: "屋久岛：九州南方海上一座近乎圆形的花岗岩岛，中央是九州以南最高峰宫之浦岳（1936m）；极端多雨、垂直自然带完整、有树龄数千年的柳杉，1993年列入世界自然遗产（环境省 / UNESCO）",
};

const RYUKYU_ISLANDS: TerrainEntry = {
  id: "ryukyu-islands",
  nameZh: "琉球群岛",
  nameEn: "Ryukyu Islands",
  category: "island",
  regionId: "asia",
  country: "japan",
  landmark: { name: "冲绳岛", lon: 127.80, lat: 26.35, elevation: 30, kind: "island" },
  bbox: [122.9, 24.0, 131.0, 28.5],
  axis: [[130.5, 28.2], [123.5, 24.3]],
  viewScale: 2.4,
  label: { lon: 127.5, lat: 26.5, rotation: -35 },
  source: "琉球群岛（南西诸岛）：从九州向西南延伸约1000km的岛弧，多珊瑚礁和隆起的琉球石灰岩（喀斯特、钟乳洞）；奄美、冲绳等岛因亚热带照叶林生态2021年列入世界自然遗产（环境省 / UNESCO）",
};

const SHINANO_RIVER: TerrainEntry = {
  id: "shinano-river",
  nameZh: "信浓川",
  nameEn: "Shinano River",
  category: "river",
  regionId: "asia",
  country: "japan",
  landmark: { name: "越后平原（新潟一带）", lon: 139.02, lat: 37.85, elevation: 5, kind: "meander" },
  bbox: [138.0, 35.9, 139.3, 38.0],
  axis: [[138.4, 36.0], [139.05, 37.9]],
  viewScale: 1.8,
  label: { lon: 138.7, lat: 37.0, rotation: -70 },
  source: "信浓川：日本最长的河（约367km），发源于关东山地，穿过长野盆地，在新潟的越后平原注入日本海；下游靠“大河津分水”等分洪工程防洪（日本国土地理院）",
};

const TONE_RIVER: TerrainEntry = {
  id: "tone-river",
  nameZh: "利根川",
  nameEn: "Tone River",
  category: "river",
  regionId: "asia",
  country: "japan",
  landmark: { name: "利根川下游（铫子一带）", lon: 140.83, lat: 35.73, elevation: 3, kind: "meander" },
  bbox: [138.7, 35.6, 141.0, 37.1],
  axis: [[139.0, 36.8], [140.8, 35.75]],
  viewScale: 1.9,
  label: { lon: 139.9, lat: 36.2, rotation: -35 },
  source: "利根川：流域面积日本最大的河（约16800km²），横贯关东平原；江户时代经过约60年的“利根川东迁”工程，把原本注入东京湾的河道改向东、从铫子入太平洋（日本国土地理院）",
};

export const TERRAINS: TerrainEntry[] = [
  // ===== 亚洲 / 日本 =====
  MOUNT_FUJI, JAPANESE_ALPS, MOUNT_ASO, SAKURAJIMA, MOUNT_UNZEN,
  HAKONE_CALDERA, DAISETSUZAN, KII_MOUNTAINS,
  KANTO_PLAIN, NOBI_PLAIN, OSAKA_PLAIN, ISHIKARI_PLAIN, TOKACHI_PLAIN,
  LAKE_BIWA, LAKE_TOWADA, SHIKOTSU_TOYA,
  KUROBE_GORGE, KAMIKOCHI, SETO_INLAND_SEA, SANRIKU_COAST, SHIRETOKO_PENINSULA,
  TOTTORI_SAND_DUNES, YAKUSHIMA, RYUKYU_ISLANDS, SHINANO_RIVER, TONE_RIVER,
];
