/**
 * Terrain Registry — 地形位置的单一真实源
 *
 * 取代分散在以下位置的重复/矛盾坐标：
 *   - data/*.json 的 lat/lon/cameraHeight
 *   - features/china-core-features.ts / china-northwest-features.ts 的 cameraGeometry
 *   - lib/foi-registry.ts 的 primary/secondary
 *   - lib/terrain-label-registry.ts 的 lat/lon
 *
 * 每个地形只定义「是什么、在哪、范围多大、走向如何」，
 * 相机参数由 lib/terrain-camera.ts 从这些数据推导，不写死。
 *
 * 坐标来源写入 `source` 字段，便于审计。
 */

export type TerrainCategory =
  | "mountain_system"
  | "plateau"
  | "basin"
  | "plain"
  | "hills"
  | "desert"
  | "lake"
  | "river"
  | "valley"
  | "gorge"
  | "island"
  | "grassland"
  | "coast"
  | "inselberg"
  | "settlement";

// 分类定义与选取标准见 docs/terrain-taxonomy.md
// `delta` 已并入 `plain`；`scenic` 已拆分；`city` + `oasis` 已合并为 `settlement`。

export type LandmarkKind =
  | "peak"
  | "lake"
  | "city"
  | "pass"
  | "gorge"
  | "salt-lake"
  | "escarpment"
  | "delta"
  | "oasis"
  | "dune"
  | "grassland"
  | "meander"
  | "island"
  | "corridor";

/** 观察锚点 — 相机对准的地物，落在画面中心 */
export interface Landmark {
  name: string;
  lon: number;
  lat: number;
  /** 锚点地面海拔（米），用于相机高度补偿 */
  elevation: number;
  kind: LandmarkKind;
}

/** 讲解次级节点 */
export interface TerrainPoi {
  name: string;
  lon: number;
  lat: number;
  note: string;
}

export interface TerrainEntry {
  id: string;
  nameZh: string;
  nameEn: string;
  category: TerrainCategory;
  /** 所属大洲 — 用于顶栏区域切换过滤（asia / oceania / europe / africa / north-america / south-america）*/
  regionId: string;
  /** 所属国家 slug（china / australia / usa / …）— 管理与溯源用，与旅游模式 country 对齐 */
  country: string;
  landmark: Landmark;
  /**
   * 地形范围，[west, south, east, north]。
   * 仅用于推导 range / pitch / 山脉走向，精度要求低。
   */
  bbox: [number, number, number, number];
  /**
   * 线状地形（山脉 / 河谷 / 河流）主脊/主河道两端点 [[lon,lat],[lon,lat]]。
   * 用于推导观察方向（相机垂直于走向观察）。
   */
  axis?: [[number, number], [number, number]];
  /**
   * 观察方位（编辑决策）：相机相对锚点的罗盘方向（landmark→camera 的 bearing，度）。
   * 0=正北看向南, 90=正东看向西, 180=正南看向北, 270=正西看向东。
   * 只在自动推导选错侧时设置；range/pitch/偏移距离仍全部由数据推导。
   */
  viewFrom?: number;
  /**
   * 取景放大系数（默认 1）。大面积高原 / 盆地 / 平原 / 沙漠设 >1，
   * 让相机拉远到能看出"这是一整片高地 / 盆地 / 平原"的地貌特征，
   * 而不是锚点周边一个局部景物。见 lib/terrain-camera.ts SHOW_KM_MAX_WIDE。
   */
  viewScale?: number;
  /** 标签放置点，缺省用 bbox 中心 */
  label?: { lon: number; lat: number; rotation: number };
  pois?: TerrainPoi[];
  /** 坐标来源 / 置信度说明 */
  source: string;
}

// ============================================================
// 中国西北 — 山脉
// ============================================================

const TIANSHAN: TerrainEntry = {
  id: "tianshan",
  nameZh: "天山",
  nameEn: "Tian Shan",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "博格达峰", lon: 88.35, lat: 43.83, elevation: 5445, kind: "peak" },
  bbox: [79.0, 41.2, 95.0, 45.0],
  axis: [[80.0, 42.3], [94.0, 42.6]],
  viewFrom: 0, // 相机在准噶尔盆地一侧，看博格达北坡雪峰
  label: { lon: 88.13, lat: 43.88, rotation: -8 },
  pois: [
    { name: "托木尔峰", lon: 80.12, lat: 42.03, note: "天山最高峰，海拔7443m（国测局）" },
    { name: "博格达峰", lon: 88.35, lat: 43.83, note: "天山东段主峰，海拔5445m，乌鲁木齐旁" },
    { name: "天池", lon: 88.12, lat: 43.88, note: "博格达峰北坡冰蚀湖，海拔1910m" },
    { name: "伊犁河谷", lon: 81.6, lat: 43.6, note: "天山西段绿洲谷地" },
    { name: "博罗科努山", lon: 84.3, lat: 44.0, note: "天山北支，伊犁河谷与准噶尔盆地之间" },
    { name: "塔尔巴哈台山", lon: 83.5, lat: 47.1, note: "天山山系北缘界山，塔城地区北部" },
  ],
  source: "博格达峰: 维基/百科; 托木尔峰 42°02′N 80°07′E: 国测局(WebSearch 2026)",
};

const ALTAI: TerrainEntry = {
  id: "altai",
  nameZh: "阿尔泰山",
  nameEn: "Altai Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "喀纳斯湖", lon: 87.05, lat: 48.72, elevation: 1374, kind: "lake" },
  bbox: [85.5, 46.5, 91.0, 49.2],
  axis: [[86.3, 47.6], [89.5, 49.2]],
  viewFrom: 175, // 相机在喀纳斯湖南端，向北看湖面与友谊峰雪峰
  label: { lon: 88.45, lat: 48.5, rotation: -35 },
  pois: [
    { name: "友谊峰", lon: 87.82, lat: 49.17, note: "阿尔泰山最高峰，海拔4374m，中俄蒙交界" },
    { name: "布尔津", lon: 86.87, lat: 47.71, note: "阿尔泰山区门户城市" },
  ],
  source: "喀纳斯湖: 概略中值; 友谊峰: 维基",
};

const KUNLUN: TerrainEntry = {
  id: "kunlun",
  nameZh: "昆仑山",
  nameEn: "Kunlun Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "玉珠峰", lon: 94.22, lat: 35.63, elevation: 6178, kind: "peak" },
  bbox: [76.0, 35.0, 99.0, 37.7],
  axis: [[78.0, 36.6], [98.0, 36.0]],
  viewFrom: 350, // 相机在柴达木/格尔木一侧，看东昆仑北坡
  label: { lon: 81.65, lat: 35.88, rotation: -5 },
  pois: [
    { name: "昆仑山口", lon: 94.06, lat: 35.62, note: "青藏公路必经关隘，海拔4768m" },
    { name: "公格尔峰", lon: 75.31, lat: 38.59, note: "西昆仑雪峰，海拔7649m" },
  ],
  source: "玉珠峰 E94.2 N35.6: WebSearch 2026; 昆仑山口海拔4768m: 海西州政府",
};

const KARAKORAM: TerrainEntry = {
  id: "karakoram",
  nameZh: "喀喇昆仑山脉",
  nameEn: "Karakoram",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "乔戈里峰（K2）", lon: 76.5133, lat: 35.8825, elevation: 8611, kind: "peak" },
  bbox: [75.5, 35.3, 78.5, 36.9],
  axis: [[75.8, 35.6], [78.2, 36.7]],
  viewFrom: 0, // 相机在中国一侧（北），看乔戈里北壁
  label: { lon: 76.5, lat: 36.2, rotation: -40 },
  pois: [
    { name: "喀喇昆仑山口", lon: 77.82, lat: 35.51, note: "中印传统边境山口，海拔5540m" },
  ],
  source: "乔戈里峰 K2: 维基 35°52′57″N 76°30′48″E",
};


const PAMIR: TerrainEntry = {
  id: "pamir",
  nameZh: "帕米尔高原",
  nameEn: "Pamir Plateau",
  category: "plateau",
  regionId: "asia",
  country: "china",
  landmark: { name: "慕士塔格峰", lon: 75.116, lat: 38.276, elevation: 7509, kind: "peak" },
  bbox: [71.2, 37.0, 77.5, 39.6],
  viewFrom: 90, // 相机在喀拉库勒湖东侧，看慕士塔格峰倒映
  label: { lon: 75.0, lat: 38.5, rotation: 0 },
  pois: [
    { name: "喀拉库勒湖", lon: 75.05, lat: 38.44, note: "湖映慕士塔格峰，帕米尔标志景观" },
    { name: "塔什库尔干", lon: 75.23, lat: 37.77, note: "帕米尔高原门户县城" },
  ],
  source: "慕士塔格峰 38°16′32″N 75°06′57″E: 维基(WebSearch 2026)",
};


// ============================================================
// 中国西北 — 湖泊
// ============================================================

const KANAS: TerrainEntry = {
  id: "kanas",
  nameZh: "喀纳斯湖",
  nameEn: "Kanas Lake",
  category: "lake",
  regionId: "asia",
  country: "china",
  landmark: { name: "喀纳斯湖心", lon: 87.03, lat: 48.7, elevation: 1374, kind: "lake" },
  bbox: [86.85, 48.5, 87.25, 48.95],
  label: { lon: 87.04, lat: 48.71, rotation: 0 },
  pois: [
    { name: "卧龙湾", lon: 87.05, lat: 48.6, note: "河道弯曲成 S 形" },
    { name: "月亮湾", lon: 87.05, lat: 48.63, note: "新月形河湾" },
  ],
  source: "概略中值",
};

const SAYRAM: TerrainEntry = {
  id: "sayram",
  nameZh: "赛里木湖",
  nameEn: "Sayram Lake",
  category: "lake",
  regionId: "asia",
  country: "china",
  landmark: { name: "赛里木湖心", lon: 81.19, lat: 44.6, elevation: 2073, kind: "lake" },
  bbox: [80.9, 44.4, 81.5, 44.8],
  label: { lon: 81.145, lat: 44.607, rotation: 0 },
  source: "湖心概略；湖面海拔2073m",
};

const TIANCHI: TerrainEntry = {
  id: "tianchi",
  nameZh: "天池",
  nameEn: "Heavenly Lake",
  category: "lake",
  regionId: "asia",
  country: "china",
  landmark: { name: "天池", lon: 88.12, lat: 43.88, elevation: 1910, kind: "lake" },
  bbox: [88.03, 43.82, 88.22, 43.95],
  label: { lon: 88.127, lat: 43.885, rotation: 0 },
  source: "天池: 概略中值，海拔1910m",
};

const BOSTEN: TerrainEntry = {
  id: "bosten",
  nameZh: "博斯腾湖",
  nameEn: "Bosten Lake",
  category: "lake",
  regionId: "asia",
  country: "china",
  landmark: { name: "博斯腾湖心", lon: 87.1, lat: 41.98, elevation: 1048, kind: "lake" },
  bbox: [86.5, 41.7, 87.7, 42.3],
  label: { lon: 87.0, lat: 41.96, rotation: 0 },
  source: "湖心概略",
};

const AIBI: TerrainEntry = {
  id: "aibi",
  nameZh: "艾比湖",
  nameEn: "Ebinur Lake",
  category: "lake",
  regionId: "asia",
  country: "china",
  landmark: { name: "艾比湖心", lon: 82.9, lat: 44.9, elevation: 189, kind: "lake" },
  bbox: [82.4, 44.65, 83.4, 45.15],
  label: { lon: 82.9, lat: 44.9, rotation: 0 },
  source: "湖心概略",
};

const LOP_NUR: TerrainEntry = {
  id: "lop-nur",
  nameZh: "罗布泊",
  nameEn: "Lop Nur",
  category: "lake",
  regionId: "asia",
  country: "china",
  landmark: { name: "罗布泊“大耳朵”", lon: 90.4, lat: 40.2, elevation: 780, kind: "lake" },
  bbox: [89.3, 39.4, 91.6, 41.1],
  label: { lon: 90.2, lat: 40.17, rotation: 0 },
  source: "干湖盆“大耳朵”中心概略",
};

// ============================================================
// 中国西北 — 沙漠
// ============================================================

const TAKLAMAKAN: TerrainEntry = {
  id: "taklamakan",
  nameZh: "塔克拉玛干沙漠",
  nameEn: "Taklamakan Desert",
  category: "desert",
  regionId: "asia",
  country: "china",
  landmark: { name: "塔中（沙漠公路中点）", lon: 83.66, lat: 39.0, elevation: 1100, kind: "dune" },
  bbox: [78.0, 37.0, 88.0, 41.0],
  label: { lon: 83.0, lat: 38.5, rotation: 0 },
  pois: [
    { name: "沙漠公路", lon: 84.0, lat: 39.5, note: "世界最长贯穿流动沙漠公路" },
  ],
  source: "塔中镇概略",
};

const GURBANTUNGGUT: TerrainEntry = {
  id: "gurbantunggut",
  nameZh: "古尔班通古特沙漠",
  nameEn: "Gurbantünggüt Desert",
  category: "desert",
  regionId: "asia",
  country: "china",
  landmark: { name: "沙漠中心", lon: 86.7, lat: 45.3, elevation: 500, kind: "dune" },
  bbox: [84.5, 44.3, 88.5, 46.3],
  label: { lon: 88.8, lat: 45.2, rotation: 0 },
  source: "中国第二大沙漠，固定半固定沙丘；中心概略",
};

const KUMTAG: TerrainEntry = {
  id: "kumtag",
  nameZh: "库姆塔格沙漠",
  nameEn: "Kumtag Desert",
  category: "desert",
  regionId: "asia",
  country: "china",
  landmark: { name: "鄯善库姆塔格（城沙相接）", lon: 90.28, lat: 42.78, elevation: 400, kind: "dune" },
  bbox: [89.7, 42.4, 91.2, 43.05],
  label: { lon: 90.5, lat: 40.5, rotation: 0 },
  source: "鄯善城南沙漠概略（待实测）",
};

// ============================================================
// 中国西北 — 盆地
// ============================================================

const JUNGGAR_BASIN: TerrainEntry = {
  id: "junggar-basin",
  nameZh: "准噶尔盆地",
  nameEn: "Junggar Basin",
  category: "basin",
  regionId: "asia",
  country: "china",
  landmark: { name: "古尔班通古特沙漠（盆地中心）", lon: 86.2, lat: 45.3, elevation: 500, kind: "dune" },
  bbox: [82.0, 43.5, 91.5, 47.0],
  label: { lon: 87.0, lat: 45.5, rotation: 0 },
  pois: [
    { name: "克拉玛依", lon: 84.87, lat: 45.6, note: "中国第一个大油田" },
    { name: "艾里克湖", lon: 85.78, lat: 45.93, note: "盆地北部典型湖泊" },
  ],
  source: "盆地中心概略",
};

const TARIM_BASIN: TerrainEntry = {
  id: "tarim-basin",
  nameZh: "塔里木盆地",
  nameEn: "Tarim Basin",
  category: "basin",
  regionId: "asia",
  country: "china",
  landmark: { name: "塔克拉玛干沙海中心", lon: 83.66, lat: 39.0, elevation: 1100, kind: "dune" },
  bbox: [74.5, 36.5, 92.0, 42.0],
  label: { lon: 83.5, lat: 39.5, rotation: 0 },
  pois: [
    { name: "塔里木河", lon: 84.0, lat: 41.0, note: "中国最长内陆河，环绕沙漠北缘" },
    { name: "阿克苏", lon: 80.26, lat: 41.17, note: "盆地北缘中心城市" },
  ],
  source: "沙海中心概略",
};

const TURPAN_BASIN: TerrainEntry = {
  id: "turpan-basin",
  nameZh: "吐鲁番盆地",
  nameEn: "Turpan Depression",
  category: "basin",
  regionId: "asia",
  country: "china",
  landmark: { name: "艾丁湖", lon: 89.33, lat: 42.66, elevation: -154, kind: "salt-lake" },
  bbox: [88.0, 42.2, 90.5, 43.4],
  label: { lon: 89.18, lat: 42.95, rotation: 0 },
  pois: [
    { name: "火焰山", lon: 89.62, lat: 42.93, note: "红色砂岩背斜，盆地北缘" },
  ],
  source: "艾丁湖 中国陆地最低点 -154m: WebSearch 2026",
};

// ============================================================
// 中国西北 — 河谷 / 河流
// ============================================================

const ILI_VALLEY: TerrainEntry = {
  id: "ili-valley",
  nameZh: "伊犁河谷",
  nameEn: "Ili River Valley",
  category: "valley",
  regionId: "asia",
  country: "china",
  landmark: { name: "伊宁—巩乃斯喇叭口", lon: 81.6, lat: 43.6, elevation: 900, kind: "gorge" },
  bbox: [80.2, 42.8, 84.5, 44.3],
  axis: [[84.0, 43.3], [80.5, 43.9]],
  viewFrom: 270, // 相机在河谷西口，向东看喇叭口收窄入天山
  label: { lon: 81.32, lat: 43.92, rotation: 0 },
  pois: [
    { name: "那拉提", lon: 84.0, lat: 43.32, note: "河谷东端空中草原" },
  ],
  source: "河谷概略",
};

const TARIM_RIVER: TerrainEntry = {
  id: "tarim-river",
  nameZh: "塔里木河",
  nameEn: "Tarim River",
  category: "river",
  regionId: "asia",
  country: "china",
  landmark: { name: "阿拉尔（三河汇流）", lon: 81.28, lat: 40.55, elevation: 1010, kind: "delta" },
  bbox: [78.0, 39.5, 87.5, 41.6],
  axis: [[78.0, 39.8], [87.0, 41.2]],
  label: { lon: 84.25, lat: 40.55, rotation: 0 },
  source: "阿拉尔 阿克苏河/叶尔羌河/和田河汇流处概略",
};

const ERTIS: TerrainEntry = {
  id: "ertis",
  nameZh: "额尔齐斯河",
  nameEn: "Irtysh River",
  category: "river",
  regionId: "asia",
  country: "china",
  landmark: { name: "五彩滩（布尔津段）", lon: 86.87, lat: 47.72, elevation: 480, kind: "escarpment" },
  bbox: [85.5, 47.0, 90.5, 48.2],
  axis: [[90.0, 47.9], [85.6, 47.6]],
  label: { lon: 87.5, lat: 47.5, rotation: 0 },
  source: "五彩滩雅丹地貌，布尔津西北；中国唯一北冰洋水系",
};

const YARKANT_RIVER: TerrainEntry = {
  id: "yarkant-river",
  nameZh: "叶尔羌河",
  nameEn: "Yarkand River",
  category: "river",
  regionId: "asia",
  country: "china",
  landmark: { name: "喀群渠首", lon: 76.9, lat: 37.9, elevation: 1400, kind: "gorge" },
  bbox: [74.5, 37.0, 80.5, 40.5],
  axis: [[75.5, 37.2], [80.5, 40.3]],
  label: { lon: 77.3, lat: 38.4, rotation: 0 },
  source: "喀群渠首概略（待实测）",
};

// ============================================================
// 中国西北 — 景观 / 绿洲 / 城市
// ============================================================

const FLAMING_MOUNTAINS: TerrainEntry = {
  id: "flaming-mountains",
  nameZh: "火焰山",
  nameEn: "Flaming Mountains",
  category: "hills",
  regionId: "asia",
  country: "china",
  landmark: { name: "胜金口—吐峪沟段", lon: 89.62, lat: 42.93, elevation: 500, kind: "escarpment" },
  bbox: [88.9, 42.8, 90.3, 43.02],
  label: { lon: 89.5, lat: 43.0, rotation: 0 },
  source: "吐鲁番盆地北缘红层背斜；概略",
};

const NARAT: TerrainEntry = {
  id: "narat",
  nameZh: "那拉提草原",
  nameEn: "Nalati Grassland",
  category: "grassland",
  regionId: "asia",
  country: "china",
  landmark: { name: "那拉提空中草原", lon: 84.0, lat: 43.32, elevation: 1800, kind: "grassland" },
  bbox: [83.6, 43.1, 84.6, 43.5],
  label: { lon: 84.1, lat: 43.3, rotation: 0 },
  source: "巩乃斯河上游；概略",
};

const KUCHE: TerrainEntry = {
  id: "kuche",
  nameZh: "库车大峡谷",
  nameEn: "Kuqa Grand Canyon",
  category: "gorge",
  regionId: "asia",
  country: "china",
  landmark: { name: "天山神秘大峡谷", lon: 83.05, lat: 42.23, elevation: 1600, kind: "gorge" },
  bbox: [82.6, 42.0, 83.5, 42.5],
  label: { lon: 83.0, lat: 41.8, rotation: 0 },
  source: "库车县城以北红层峡谷；概略（待实测）",
};

const BAYANBULAK: TerrainEntry = {
  id: "bayanbulak",
  nameZh: "巴音布鲁克草原",
  nameEn: "Bayanbulak Grassland",
  category: "grassland",
  regionId: "asia",
  country: "china",
  landmark: { name: "九曲十八弯（开都河曲流）", lon: 84.13, lat: 43.0, elevation: 2500, kind: "meander" },
  bbox: [83.5, 42.7, 85.0, 43.4],
  label: { lon: 84.2, lat: 42.9, rotation: 0 },
  source: "开都河高山盆地曲流；概略",
};

const KASHGAR: TerrainEntry = {
  id: "kashgar",
  nameZh: "喀什",
  nameEn: "Kashgar",
  category: "settlement",
  regionId: "asia",
  country: "china",
  landmark: { name: "艾提尕尔—喀什老城", lon: 75.99, lat: 39.47, elevation: 1290, kind: "city" },
  bbox: [75.8, 39.3, 76.2, 39.65],
  label: { lon: 75.99, lat: 39.47, rotation: 0 },
  source: "喀什市中心",
};

const HOTAN: TerrainEntry = {
  id: "hotan",
  nameZh: "和田",
  nameEn: "Hotan",
  category: "settlement",
  regionId: "asia",
  country: "china",
  landmark: { name: "和田市中心", lon: 79.93, lat: 37.11, elevation: 1370, kind: "city" },
  bbox: [79.7, 36.9, 80.2, 37.3],
  label: { lon: 79.9, lat: 37.1, rotation: 0 },
  source: "和田市中心",
};

const TURPAN_CITY: TerrainEntry = {
  id: "turpan-city",
  nameZh: "吐鲁番",
  nameEn: "Turpan",
  category: "settlement",
  regionId: "asia",
  country: "china",
  landmark: { name: "吐鲁番高昌区中心", lon: 89.18, lat: 42.95, elevation: 30, kind: "city" },
  bbox: [89.0, 42.8, 89.4, 43.1],
  label: { lon: 89.17, lat: 42.95, rotation: 0 },
  source: "吐鲁番市中心",
};

const BACHU: TerrainEntry = {
  id: "bachu",
  nameZh: "巴楚",
  nameEn: "Bachu",
  category: "settlement",
  regionId: "asia",
  country: "china",
  landmark: { name: "巴楚绿洲", lon: 78.55, lat: 39.79, elevation: 1150, kind: "oasis" },
  bbox: [78.3, 39.6, 78.9, 40.0],
  label: { lon: 78.55, lat: 39.78, rotation: 0 },
  source: "巴楚县城概略",
};

const MAIGAITI: TerrainEntry = {
  id: "maigaiti",
  nameZh: "麦盖提",
  nameEn: "Makit",
  category: "settlement",
  regionId: "asia",
  country: "china",
  landmark: { name: "麦盖提绿洲（刀郎文化）", lon: 77.65, lat: 38.9, elevation: 1200, kind: "oasis" },
  bbox: [77.4, 38.7, 77.9, 39.1],
  label: { lon: 77.65, lat: 38.9, rotation: 0 },
  source: "麦盖提县城概略",
};

// ============================================================
// 中国 — 山脉
// ============================================================

const QINLING: TerrainEntry = {
  id: "qinling",
  nameZh: "秦岭",
  nameEn: "Qinling Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "太白山拔仙台", lon: 107.76, lat: 33.95, elevation: 3771, kind: "peak" },
  bbox: [104.5, 32.5, 111.5, 34.6],
  axis: [[105.0, 33.6], [111.0, 34.0]],
  viewFrom: 0, // 相机在关中平原一侧，看秦岭北坡断层崖面
  label: { lon: 108.0, lat: 33.5, rotation: -5 },
  pois: [
    { name: "华山", lon: 110.09, lat: 34.48, note: "五岳之一，花岗岩断崖" },
    { name: "终南山", lon: 108.99, lat: 33.93, note: "秦岭中段，道教圣地" },
  ],
  source: "太白山拔仙台 ≈33.95N 107.76E: 百科/地形图",
};

const QILIAN: TerrainEntry = {
  id: "qilian",
  nameZh: "祁连山",
  nameEn: "Qilian Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "团结峰（岗则吾结）", lon: 97.725, lat: 38.5, elevation: 5808, kind: "peak" },
  bbox: [93.5, 36.0, 103.5, 40.0],
  axis: [[96.0, 38.8], [102.0, 37.2]],
  viewFrom: 30, // 相机在河西走廊一侧，看祁连山北坡雪线与冰川
  label: { lon: 100.0, lat: 38.0, rotation: -15 },
  pois: [
    { name: "岗什卡雪峰", lon: 101.08, lat: 38.44, note: "祁连山东段雪峰，海拔5254m" },
    { name: "黑河源区", lon: 99.8, lat: 38.2, note: "河西走廊重要水源地" },
  ],
  source: "团结峰 38°30′N 97°43′30″E: WebSearch 2026(维基/百科)",
};

const TAIHANG: TerrainEntry = {
  id: "taihang",
  nameZh: "太行山",
  nameEn: "Taihang Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "五台山叶斗峰", lon: 113.55, lat: 39.06, elevation: 3061, kind: "peak" },
  bbox: [112.5, 35.3, 114.8, 41.3],
  axis: [[113.3, 35.5], [114.0, 41.3]],
  viewFrom: 90, // 相机在华北平原一侧，向西看太行山东缘断壁
  label: { lon: 113.5, lat: 37.0, rotation: -78 },
  pois: [
    { name: "娘子关", lon: 113.63, lat: 37.8, note: "太行山重要隘口，晋冀分界" },
    { name: "南太行绝壁（郭亮）", lon: 113.55, lat: 35.75, note: "东缘断壁跌向华北平原" },
  ],
  source: "五台山叶斗峰 ≈39.06N 113.55E: 百科",
};

const DAXINGANLING: TerrainEntry = {
  id: "daxinganling",
  nameZh: "大兴安岭",
  nameEn: "Greater Khingan Range",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "东坡断坡（加格达奇—大杨树段）", lon: 124.2, lat: 49.4, elevation: 1000, kind: "escarpment" },
  bbox: [119.0, 41.5, 127.0, 53.5],
  axis: [[122.0, 43.0], [124.0, 52.0]],
  viewFrom: 90, // 相机在松嫩平原一侧，向西看森林高原抬升的断坡
  label: { lon: 122.0, lat: 48.0, rotation: -68 },
  pois: [
    { name: "黄岗峰", lon: 117.5, lat: 43.4, note: "大兴安岭最高峰，海拔2029m（克什克腾旗）" },
    { name: "阿尔山火山群", lon: 120.75, lat: 47.18, note: "火山锥与火山口湖" },
  ],
  source:
    "锚点取东坡断坡（森林高原→松嫩平原分界，最醒目的空中特征）；黄岗峰 116°21′–118°26′E 42°33′–44°22′N: WebSearch 2026。锚点选择待用户确认",
};

const HENGDUAN: TerrainEntry = {
  id: "hengduan",
  nameZh: "横断山脉",
  nameEn: "Hengduan Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "贡嘎山", lon: 101.88, lat: 29.595, elevation: 7556, kind: "peak" },
  bbox: [97.0, 24.5, 104.0, 33.0],
  axis: [[100.5, 25.5], [100.0, 32.0]],
  viewFrom: 90, // 相机在四川盆地一侧，向西看贡嘎东壁（蜀山之王）
  label: { lon: 100.0, lat: 30.0, rotation: -82 },
  pois: [
    { name: "梅里雪山（卡瓦格博）", lon: 98.68, lat: 28.44, note: "滇西北最高峰，海拔6740m" },
    { name: "虎跳峡", lon: 100.05, lat: 27.1, note: "金沙江深切峡谷，相对高差超3000m" },
  ],
  source: "贡嘎山 29°35′43″N 101°52′44″E: 维基",
};

const HIMALAYA: TerrainEntry = {
  id: "himalaya",
  nameZh: "喜马拉雅山脉",
  nameEn: "Himalayas",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "珠穆朗玛峰", lon: 86.925, lat: 27.988, elevation: 8849, kind: "peak" },
  bbox: [80.0, 27.0, 92.0, 30.0],
  axis: [[82.0, 29.5], [92.0, 28.0]],
  viewFrom: 175, // 相机在珠峰以南（尼泊尔侧方向），看金字塔形雪顶
  label: { lon: 86.0, lat: 29.0, rotation: 5 },
  pois: [
    { name: "洛子峰", lon: 86.933, lat: 27.962, note: "世界第四高峰，海拔8516m" },
    { name: "希夏邦马峰", lon: 85.78, lat: 28.35, note: "唯一完全在中国境内的8000m级山峰" },
  ],
  source: "珠峰 27°59′17″N 86°55′31″E: 维基",
};

// ============================================================
// 中国 — 高原
// ============================================================

const QINGHAI_TIBET: TerrainEntry = {
  id: "qinghai-tibet",
  nameZh: "青藏高原",
  nameEn: "Tibetan Plateau",
  category: "plateau",
  regionId: "asia",
  country: "china",
  landmark: { name: "纳木错 + 念青唐古拉山", lon: 90.7, lat: 30.65, elevation: 4720, kind: "lake" },
  bbox: [79.0, 28.0, 103.0, 37.0],
  viewFrom: 0, // 相机在纳木错以北，向南看湖面 + 念青唐古拉雪墙
  label: { lon: 90.0, lat: 33.0, rotation: 0 },
  pois: [
    { name: "念青唐古拉峰", lon: 90.6, lat: 30.38, note: "海拔7162m，纳木错南岸雪墙" },
    { name: "青海湖", lon: 100.13, lat: 37.0, note: "中国最大咸水湖，高原东北部蓝色地标" },
  ],
  source:
    "锚点取纳木错南岸+念青唐古拉（高原湖+雪墙，代表高原面而非边缘峰）；纳木错海拔4718m、念青唐古拉峰 E90.6 N30.4: WebSearch 2026",
};

const LOESS: TerrainEntry = {
  id: "loess",
  nameZh: "黄土高原",
  nameEn: "Loess Plateau",
  category: "plateau",
  regionId: "asia",
  country: "china",
  landmark: { name: "延安周边（塬—梁—峁沟壑）", lon: 109.49, lat: 36.6, elevation: 1300, kind: "escarpment" },
  bbox: [104.0, 34.5, 111.5, 38.0],
  label: { lon: 109.0, lat: 36.0, rotation: 0 },
  pois: [
    { name: "晋陕大峡谷 / 乾坤湾", lon: 110.45, lat: 36.83, note: "黄河深切曲流" },
    { name: "榆林", lon: 109.73, lat: 38.28, note: "黄土高原北缘风沙过渡带" },
  ],
  source: "延安 ≈36.6N 109.49E: 百科",
};

const INNER_MONGOLIA: TerrainEntry = {
  id: "inner-mongolia",
  nameZh: "内蒙古高原",
  nameEn: "Inner Mongolian Plateau",
  category: "plateau",
  regionId: "asia",
  country: "china",
  landmark: { name: "锡林郭勒草原", lon: 116.0, lat: 43.9, elevation: 1000, kind: "grassland" },
  bbox: [106.0, 40.5, 120.0, 50.0],
  label: { lon: 112.0, lat: 42.0, rotation: 0 },
  pois: [
    { name: "呼伦贝尔草原", lon: 119.75, lat: 49.22, note: "世界四大草原之一" },
    { name: "浑善达克沙地", lon: 114.5, lat: 42.8, note: "高原南缘沙地" },
  ],
  source: "锡林郭勒草原（锡林浩特一带）概略",
};

const YUNNAN_GUIZHOU: TerrainEntry = {
  id: "yunnan-guizhou",
  nameZh: "云贵高原",
  nameEn: "Yunnan–Guizhou Plateau",
  category: "plateau",
  regionId: "asia",
  country: "china",
  landmark: { name: "石林 + 滇池—昆明", lon: 103.3, lat: 24.85, elevation: 1750, kind: "escarpment" },
  bbox: [98.0, 23.3, 109.0, 27.5],
  label: { lon: 105.0, lat: 25.0, rotation: 0 },
  pois: [
    { name: "滇池", lon: 102.68, lat: 24.83, note: "昆明高原湖，云贵高原核心" },
    { name: "黄果树瀑布", lon: 105.67, lat: 25.99, note: "喀斯特地貌代表" },
  ],
  source: "路南石林 ≈24.82N 103.3E；滇池；概略",
};

// ============================================================
// 中国 — 盆地
// ============================================================

const SICHUAN: TerrainEntry = {
  id: "sichuan",
  nameZh: "四川盆地",
  nameEn: "Sichuan Basin",
  category: "basin",
  regionId: "asia",
  country: "china",
  landmark: { name: "成都平原中心", lon: 104.07, lat: 30.65, elevation: 500, kind: "city" },
  bbox: [102.5, 28.0, 110.5, 32.5],
  label: { lon: 106.0, lat: 30.5, rotation: 0 },
  pois: [
    { name: "重庆", lon: 106.55, lat: 29.56, note: "盆地东部中心，长江嘉陵江交汇" },
    { name: "都江堰", lon: 103.62, lat: 31.0, note: "盆地西缘，岷江出山口" },
  ],
  source: "成都市中心",
};

const QAIDAM: TerrainEntry = {
  id: "qaidam",
  nameZh: "柴达木盆地",
  nameEn: "Qaidam Basin",
  category: "basin",
  regionId: "asia",
  country: "china",
  landmark: { name: "察尔汗盐湖", lon: 94.9, lat: 36.85, elevation: 2680, kind: "salt-lake" },
  bbox: [90.0, 35.0, 99.5, 39.5],
  label: { lon: 94.0, lat: 37.0, rotation: 0 },
  pois: [
    { name: "格尔木", lon: 94.9, lat: 36.42, note: "柴达木盆地重要城市" },
    { name: "水上雅丹", lon: 92.0, lat: 38.0, note: "风蚀地貌" },
  ],
  source: "察尔汗盐湖 ≈36.85N 94.9E: 百科（中国最大盐湖）",
};

// ============================================================
// 中国 — 平原
// ============================================================

const NORTHEAST: TerrainEntry = {
  id: "northeast",
  nameZh: "东北平原",
  nameEn: "Northeast China Plain",
  category: "plain",
  regionId: "asia",
  country: "china",
  landmark: { name: "松嫩平原（哈尔滨—大庆）", lon: 125.3, lat: 45.8, elevation: 150, kind: "city" },
  bbox: [119.0, 42.0, 132.0, 49.0],
  label: { lon: 125.0, lat: 46.0, rotation: 0 },
  pois: [
    { name: "查干湖", lon: 124.49, lat: 45.83, note: "松嫩平原著名湖泊" },
    { name: "三江平原", lon: 133.0, lat: 47.5, note: "黑龙江/松花江/乌苏里江冲积" },
  ],
  source: "松嫩平原中心（哈尔滨—大庆一带）概略",
};

const NORTH_CHINA: TerrainEntry = {
  id: "north-china",
  nameZh: "华北平原",
  nameEn: "North China Plain",
  category: "plain",
  regionId: "asia",
  country: "china",
  landmark: { name: "黄河下游悬河段（濮阳—聊城）", lon: 115.8, lat: 35.9, elevation: 40, kind: "escarpment" },
  bbox: [113.5, 32.0, 119.5, 40.5],
  label: { lon: 116.0, lat: 37.0, rotation: 0 },
  pois: [
    { name: "黄河入海口", lon: 119.05, lat: 37.75, note: "扇形沉积羽流入渤海" },
    { name: "开封地上悬河", lon: 114.35, lat: 34.8, note: "黄河河床高出地面约10m" },
  ],
  source: "黄河下游悬河段概略",
};

const YANGTZE: TerrainEntry = {
  id: "yangtze",
  nameZh: "长江中下游平原",
  nameEn: "Middle–Lower Yangtze Plain",
  category: "plain",
  regionId: "asia",
  country: "china",
  landmark: { name: "鄱阳湖", lon: 116.28, lat: 29.1, elevation: 20, kind: "lake" },
  bbox: [111.0, 28.0, 122.0, 32.5],
  label: { lon: 115.0, lat: 29.5, rotation: 0 },
  pois: [
    { name: "洞庭湖", lon: 112.95, lat: 29.31, note: "第二大淡水湖，湖汊密布" },
    { name: "长江入海口（崇明岛）", lon: 121.9, lat: 31.5, note: "冲积岛群与分流河道" },
  ],
  source: "鄱阳湖 ≈29.1N 116.28E: 百科（中国最大淡水湖）",
};

// ============================================================
// 中国 — 山脉（补充）
// ============================================================

const XIAOXINGANLING: TerrainEntry = {
  id: "xiaoxinganling",
  nameZh: "小兴安岭",
  nameEn: "Lesser Khingan Range",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "平顶山", lon: 128.9, lat: 48.1, elevation: 1429, kind: "peak" },
  bbox: [124.4, 46.4, 131.0, 51.7],
  axis: [[125.5, 51.0], [130.0, 46.8]],
  viewFrom: 225,
  label: { lon: 128.5, lat: 48.5, rotation: -55 },
  source: "小兴安岭 NE 多边形；平顶山 ≈1429m",
};

const CHANGBAI: TerrainEntry = {
  id: "changbai",
  nameZh: "长白山",
  nameEn: "Changbai Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "长白山天池（白云峰）", lon: 128.06, lat: 42.01, elevation: 2691, kind: "peak" },
  bbox: [126.5, 41.0, 129.5, 43.3],
  axis: [[127.0, 43.0], [129.0, 41.3]],
  viewFrom: 90,
  label: { lon: 128.0, lat: 42.0, rotation: -40 },
  pois: [{ name: "长白山天池", lon: 128.06, lat: 42.01, note: "火山口湖，中朝界湖，海拔2189m" }],
  source: "长白山天池 ≈42.0N 128.06E；主峰将军峰(朝)2749m / 白云峰2691m",
};

const YINSHAN: TerrainEntry = {
  id: "yinshan",
  nameZh: "阴山",
  nameEn: "Yin Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "大青山主峰", lon: 111.2, lat: 41.0, elevation: 2338, kind: "peak" },
  bbox: [105.7, 40.8, 111.7, 42.4],
  axis: [[106.0, 41.4], [111.5, 41.4]],
  viewFrom: 180,
  label: { lon: 109.0, lat: 41.4, rotation: -3 },
  pois: [{ name: "阴山岩画", lon: 106.8, lat: 41.2, note: "狼山—色尔腾山岩刻，史前至历代" }],
  source: "阴山 NE 多边形；大青山 ≈2338m，分内蒙古高原与河套平原",
};

const LULIANG: TerrainEntry = {
  id: "luliang",
  nameZh: "吕梁山",
  nameEn: "Lüliang Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "关帝山（孝文山）", lon: 111.4, lat: 37.9, elevation: 2831, kind: "peak" },
  bbox: [111.1, 34.7, 113.0, 41.0],
  axis: [[111.9, 40.5], [111.2, 35.2]],
  viewFrom: 90,
  label: { lon: 111.6, lat: 37.5, rotation: -80 },
  source: "吕梁山 NE 多边形；孝文山 ≈2831m，黄河与汾河分水岭",
};

const HELAN: TerrainEntry = {
  id: "helan",
  nameZh: "贺兰山",
  nameEn: "Helan Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "敖包疙瘩", lon: 105.88, lat: 38.72, elevation: 3556, kind: "peak" },
  bbox: [105.5, 37.8, 106.5, 39.5],
  axis: [[105.9, 39.3], [105.8, 37.9]],
  viewFrom: 90,
  label: { lon: 105.9, lat: 38.7, rotation: -85 },
  pois: [{ name: "贺兰山岩画", lon: 106.05, lat: 38.72, note: "贺兰口，万余幅史前岩画" }],
  source: "贺兰山主峰敖包疙瘩 ≈3556m；隔开宁夏平原与阿拉善沙漠（无 NE 多边形，用 bbox）",
};

const LIUPAN: TerrainEntry = {
  id: "liupan",
  nameZh: "六盘山",
  nameEn: "Liupan Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "米缸山", lon: 106.2, lat: 35.7, elevation: 2942, kind: "peak" },
  bbox: [105.8, 34.5, 106.7, 36.5],
  axis: [[106.3, 36.4], [106.1, 34.6]],
  viewFrom: 90,
  label: { lon: 106.2, lat: 35.7, rotation: -82 },
  source: "六盘山（陇山）米缸山 ≈2942m；红军长征翻越（无 NE 多边形）",
};

const DABASHAN: TerrainEntry = {
  id: "dabashan",
  nameZh: "大巴山",
  nameEn: "Daba Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "化龙山", lon: 109.3, lat: 32.1, elevation: 2917, kind: "peak" },
  bbox: [106.0, 31.2, 112.5, 32.9],
  axis: [[106.5, 31.9], [112.0, 31.9]],
  viewFrom: 0,
  label: { lon: 109.5, lat: 32.0, rotation: -5 },
  source: "大巴山化龙山 ≈2917m；秦岭以南、四川盆地北缘（无 NE 多边形）",
};

const XUEFENG: TerrainEntry = {
  id: "xuefeng",
  nameZh: "雪峰山",
  nameEn: "Xuefeng Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "苏宝顶", lon: 110.6, lat: 27.3, elevation: 1934, kind: "peak" },
  bbox: [109.5, 25.5, 111.6, 29.5],
  axis: [[110.2, 29.3], [110.9, 25.7]],
  viewFrom: 90,
  label: { lon: 110.5, lat: 27.4, rotation: -75 },
  source: "雪峰山苏宝顶 ≈1934m；云贵高原与江南丘陵分界（无 NE 多边形）",
};

const WUYI: TerrainEntry = {
  id: "wuyi",
  nameZh: "武夷山",
  nameEn: "Wuyi Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "黄岗山", lon: 117.65, lat: 27.75, elevation: 2160.8, kind: "peak" },
  bbox: [115.8, 25.4, 118.3, 28.5],
  axis: [[117.0, 28.4], [117.9, 25.6]],
  viewFrom: 90,
  label: { lon: 117.6, lat: 27.4, rotation: -70 },
  pois: [{ name: "九曲溪丹霞", lon: 117.97, lat: 27.7, note: "碧水丹山，世界文化与自然双遗产" }],
  source: "黄岗山 27°33′–27°54′N 117°27′–117°51′E ≈2160.8m: WebSearch 2026（维基/中新网）",
};

const NANLING: TerrainEntry = {
  id: "nanling",
  nameZh: "南岭",
  nameEn: "Nan Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "石坑崆（广东最高峰）", lon: 113.0, lat: 24.55, elevation: 1902, kind: "peak" },
  bbox: [109.4, 23.3, 114.1, 25.9],
  axis: [[109.6, 24.8], [113.9, 24.6]],
  viewFrom: 180,
  label: { lon: 111.7, lat: 24.7, rotation: -3 },
  pois: [{ name: "越城岭（猫儿山）", lon: 110.4, lat: 25.9, note: "华南最高峰 2141m" }],
  source: "南岭 NE 多边形；石坑崆 ≈1902m；长江与珠江水系分水岭",
};

const DABIE: TerrainEntry = {
  id: "dabie",
  nameZh: "大别山",
  nameEn: "Dabie Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "白马尖", lon: 116.1, lat: 31.1, elevation: 1777, kind: "peak" },
  bbox: [112.8, 30.0, 117.2, 32.6],
  axis: [[113.2, 32.3], [116.8, 30.3]],
  viewFrom: 45,
  label: { lon: 115.2, lat: 31.3, rotation: -35 },
  source: "大别山白马尖 ≈1777m（安徽最高）；NE 多边形；鄂豫皖交界",
};

const DALOU: TerrainEntry = {
  id: "dalou",
  nameZh: "大娄山",
  nameEn: "Dalou Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "金佛山", lon: 107.2, lat: 29.02, elevation: 2238, kind: "peak" },
  bbox: [103.9, 26.4, 108.3, 29.6],
  axis: [[104.5, 27.0], [107.8, 28.9]],
  viewFrom: 90,
  label: { lon: 106.5, lat: 28.2, rotation: -50 },
  pois: [{ name: "娄山关", lon: 106.83, lat: 28.13, note: "川黔要隘，红军长征" }],
  source: "大娄山金佛山 ≈2238m；NE 多边形；四川盆地与云贵高原之间",
};

const ALTUN: TerrainEntry = {
  id: "altun",
  nameZh: "阿尔金山",
  nameEn: "Altun Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "china",
  landmark: { name: "阿尔金山主峰", lon: 90.0, lat: 38.4, elevation: 5798, kind: "peak" },
  bbox: [86.5, 37.5, 94.1, 39.5],
  axis: [[87.0, 38.9], [93.8, 38.0]],
  viewFrom: 0,
  label: { lon: 90.5, lat: 38.5, rotation: -6 },
  pois: [{ name: "阿尔金山无人区", lon: 89.5, lat: 38.0, note: "国家级自然保护区，藏羚羊/野牦牛" }],
  source: "阿尔金山 NE 多边形；主峰 ≈5798m；塔里木盆地与青藏高原之间",
};



// ============================================================
// 中国 — 平原 / 三角洲（补充）
// ============================================================

const CHENGDU_PLAIN: TerrainEntry = {
  id: "chengdu-plain",
  nameZh: "成都平原",
  nameEn: "Chengdu Plain",
  category: "plain",
  regionId: "asia",
  country: "china",
  landmark: { name: "都江堰渠首", lon: 103.62, lat: 31.0, elevation: 600, kind: "city" },
  bbox: [103.3, 30.0, 104.9, 31.5],
  label: { lon: 104.0, lat: 30.7, rotation: 0 },
  pois: [{ name: "成都", lon: 104.07, lat: 30.66, note: "平原中心，天府之国" }],
  source: "成都平原（川西平原）；岷江冲积扇，都江堰灌溉（无 NE 多边形，用 bbox）",
};

const GUANZHONG_PLAIN: TerrainEntry = {
  id: "guanzhong-plain",
  nameZh: "关中平原",
  nameEn: "Guanzhong Plain",
  category: "plain",
  regionId: "asia",
  country: "china",
  landmark: { name: "西安", lon: 108.94, lat: 34.27, elevation: 400, kind: "city" },
  bbox: [106.3, 33.9, 110.5, 35.0],
  axis: [[106.5, 34.3], [110.3, 34.5]],
  label: { lon: 108.5, lat: 34.4, rotation: 0 },
  pois: [{ name: "渭河", lon: 109.5, lat: 34.6, note: "关中平原主河，八百里秦川" }],
  source: "关中平原（渭河平原）；西安 ≈34.27N 108.94E（无 NE 多边形，用 bbox）",
};

const HETAO_PLAIN: TerrainEntry = {
  id: "hetao-plain",
  nameZh: "河套平原",
  nameEn: "Hetao Plain",
  category: "plain",
  regionId: "asia",
  country: "china",
  landmark: { name: "临河（后套）", lon: 107.4, lat: 40.75, elevation: 1030, kind: "city" },
  bbox: [106.0, 40.2, 112.0, 41.4],
  axis: [[106.2, 40.7], [111.8, 40.6]],
  label: { lon: 109.0, lat: 40.7, rotation: 0 },
  pois: [{ name: "黄河“几”字弯", lon: 110.5, lat: 40.3, note: "黄河北流转东，冲积成套" }],
  source: "河套平原（前套/后套/西套）；“黄河百害，唯富一套”（无 NE 多边形，用 bbox）",
};

const YANGTZE_DELTA: TerrainEntry = {
  id: "yangtze-delta",
  nameZh: "长江三角洲",
  nameEn: "Yangtze River Delta",
  category: "plain",
  regionId: "asia",
  country: "china",
  landmark: { name: "长江入海口（崇明岛）", lon: 121.8, lat: 31.6, elevation: 5, kind: "delta" },
  bbox: [119.0, 30.0, 122.5, 32.6],
  label: { lon: 120.8, lat: 31.4, rotation: 0 },
  pois: [
    { name: "上海", lon: 121.47, lat: 31.23, note: "三角洲核心城市" },
    { name: "太湖", lon: 120.2, lat: 31.2, note: "三角洲上的大型浅水湖" },
  ],
  source: "长江三角洲；崇明岛为长江泥沙淤积成的世界最大河口冲积岛（无 NE 多边形，用 bbox）",
};

const PEARL_DELTA: TerrainEntry = {
  id: "pearl-delta",
  nameZh: "珠江三角洲",
  nameEn: "Pearl River Delta",
  category: "plain",
  regionId: "asia",
  country: "china",
  landmark: { name: "珠江口（虎门）", lon: 113.6, lat: 22.8, elevation: 5, kind: "delta" },
  bbox: [112.4, 21.7, 114.5, 23.6],
  label: { lon: 113.3, lat: 22.9, rotation: 0 },
  pois: [
    { name: "广州", lon: 113.26, lat: 23.13, note: "三角洲顶点城市" },
    { name: "伶仃洋", lon: 113.7, lat: 22.4, note: "港珠澳大桥跨越处" },
  ],
  source: "珠江三角洲；西江/北江/东江复合三角洲，河网密布（无 NE 多边形，用 bbox）",
};

// ============================================================
// 中国 — 丘陵
// ============================================================

const LIAODONG_HILLS: TerrainEntry = {
  id: "liaodong-hills",
  nameZh: "辽东丘陵",
  nameEn: "Liaodong Hills",
  category: "hills",
  regionId: "asia",
  country: "china",
  landmark: { name: "千山", lon: 122.96, lat: 41.0, elevation: 708, kind: "peak" },
  bbox: [121.1, 38.7, 124.3, 41.2],
  label: { lon: 122.6, lat: 40.2, rotation: 0 },
  source: "辽东丘陵 NE 多边形（辽东半岛）；千山为代表",
};

const SHANDONG_HILLS: TerrainEntry = {
  id: "shandong-hills",
  nameZh: "山东丘陵",
  nameEn: "Shandong Hills",
  category: "hills",
  regionId: "asia",
  country: "china",
  landmark: { name: "泰山", lon: 117.1, lat: 36.25, elevation: 1532.7, kind: "peak" },
  bbox: [117.0, 35.0, 122.7, 37.9],
  label: { lon: 119.5, lat: 36.6, rotation: 0 },
  pois: [{ name: "崂山", lon: 120.6, lat: 36.15, note: "海上第一名山，胶东丘陵" }],
  source: "山东丘陵；NE 多边形仅胶东半岛，锚点用泰山（鲁中南山地，海拔1532.7m）",
};

const JIANGNAN_HILLS: TerrainEntry = {
  id: "jiangnan-hills",
  nameZh: "江南丘陵",
  nameEn: "Jiangnan Hills",
  category: "hills",
  regionId: "asia",
  country: "china",
  landmark: { name: "黄山", lon: 118.17, lat: 30.13, elevation: 1864, kind: "peak" },
  bbox: [110.0, 25.0, 120.0, 30.5],
  label: { lon: 115.0, lat: 27.5, rotation: 0 },
  pois: [
    { name: "庐山", lon: 115.98, lat: 29.55, note: "鄱阳湖畔断块山" },
    { name: "衡山", lon: 112.7, lat: 27.25, note: "南岳，湘中丘陵" },
  ],
  source: "江南丘陵（长江以南、南岭以北）；黄山/庐山为代表（无 NE 多边形，用 bbox）",
};

const LIANGGUANG_HILLS: TerrainEntry = {
  id: "liangguang-hills",
  nameZh: "两广丘陵",
  nameEn: "Liangguang Hills",
  category: "hills",
  regionId: "asia",
  country: "china",
  landmark: { name: "桂林峰林", lon: 110.3, lat: 25.28, elevation: 400, kind: "peak" },
  bbox: [105.5, 21.5, 116.5, 25.0],
  label: { lon: 111.5, lat: 23.5, rotation: 0 },
  pois: [{ name: "云开大山", lon: 111.0, lat: 22.3, note: "粤桂交界，大田顶1704m" }],
  source: "两广丘陵（南岭以南）；桂林塔状峰林为最典型（无 NE 多边形，用 bbox）",
};

// ============================================================
// 中国 — 沙漠（补充）
// ============================================================

const BADAIN_JARAN: TerrainEntry = {
  id: "badain-jaran",
  nameZh: "巴丹吉林沙漠",
  nameEn: "Badain Jaran Desert",
  category: "desert",
  regionId: "asia",
  country: "china",
  landmark: { name: "必鲁图沙峰", lon: 102.4, lat: 39.78, elevation: 1600, kind: "dune" },
  bbox: [99.5, 39.0, 104.5, 42.0],
  label: { lon: 102.0, lat: 40.0, rotation: 0 },
  pois: [{ name: "沙漠湖泊群", lon: 102.5, lat: 39.7, note: "百余个咸水湖点缀高大沙山之间" }],
  source: "巴丹吉林沙漠（中国第三大）；世界最高沙山（相对高度500m）（无 NE 多边形，用 bbox）",
};

const TENGGER: TerrainEntry = {
  id: "tengger",
  nameZh: "腾格里沙漠",
  nameEn: "Tengger Desert",
  category: "desert",
  regionId: "asia",
  country: "china",
  landmark: { name: "沙坡头", lon: 104.95, lat: 37.45, elevation: 1300, kind: "dune" },
  bbox: [102.5, 37.0, 106.0, 39.5],
  label: { lon: 104.3, lat: 38.2, rotation: 0 },
  pois: [{ name: "沙坡头治沙", lon: 104.95, lat: 37.45, note: "包兰铁路草方格固沙" }],
  source: "腾格里沙漠（中国第四大）；东南缘沙坡头（无 NE 多边形，用 bbox）",
};

const KUBUQI: TerrainEntry = {
  id: "kubuqi",
  nameZh: "库布齐沙漠",
  nameEn: "Kubuqi Desert",
  category: "desert",
  regionId: "asia",
  country: "china",
  landmark: { name: "库布齐沙漠中段", lon: 108.5, lat: 40.3, elevation: 1100, kind: "dune" },
  bbox: [107.0, 39.9, 111.5, 40.6],
  axis: [[107.2, 40.2], [111.2, 40.4]],
  label: { lon: 109.0, lat: 40.3, rotation: 0 },
  source: "库布齐沙漠（中国第七大）；黄河“几”字弯内、鄂尔多斯高原北缘（无 NE 多边形，用 bbox）",
};

const MUUS: TerrainEntry = {
  id: "muus",
  nameZh: "毛乌素沙地",
  nameEn: "Mu Us Sandy Land",
  category: "desert",
  regionId: "asia",
  country: "china",
  landmark: { name: "毛乌素沙地", lon: 108.5, lat: 38.5, elevation: 1300, kind: "dune" },
  bbox: [107.0, 37.2, 111.3, 39.5],
  label: { lon: 109.0, lat: 38.5, rotation: 0 },
  pois: [{ name: "榆林治沙", lon: 109.7, lat: 38.3, note: "几十年造林，沙地大部“绿了”" }],
  source: "毛乌素沙地 NE 多边形（Mu Us Desert）；鄂尔多斯高原南部、长城沿线",
};

const LEIZHOU: TerrainEntry = {
  id: "leizhou",
  nameZh: "雷州半岛",
  nameEn: "Leizhou Peninsula",
  category: "coast",
  regionId: "asia",
  country: "china",
  landmark: { name: "雷州半岛", lon: 110.1, lat: 20.9, elevation: 40, kind: "peak" },
  bbox: [109.6, 20.2, 110.6, 21.6],
  label: { lon: 110.1, lat: 20.9, rotation: 0 },
  pois: [{ name: "湖光岩玛珥湖", lon: 110.28, lat: 21.15, note: "火山口湖，玄武岩台地" }],
  source: "雷州半岛 NE 多边形；中国大陆最南、玄武岩台地与火山地貌",
};

const ULAN_BUH: TerrainEntry = {
  id: "ulan-buh",
  nameZh: "乌兰布和沙漠",
  nameEn: "Ulan Buh Desert",
  category: "desert",
  regionId: "asia",
  country: "china",
  landmark: { name: "乌兰布和沙漠", lon: 106.6, lat: 39.8, elevation: 1050, kind: "dune" },
  bbox: [105.5, 39.0, 107.2, 40.9],
  label: { lon: 106.5, lat: 40.0, rotation: 0 },
  source: "乌兰布和沙漠；黄河西岸、贺兰山北（无 NE 多边形，用 bbox）",
};

const GOBI: TerrainEntry = {
  id: "gobi",
  nameZh: "戈壁（内蒙古）",
  nameEn: "Gobi Desert",
  category: "desert",
  regionId: "asia",
  country: "china",
  landmark: { name: "额济纳戈壁", lon: 101.0, lat: 41.9, elevation: 1000, kind: "dune" },
  bbox: [95.0, 39.5, 111.0, 43.5],
  label: { lon: 103.0, lat: 42.0, rotation: 0 },
  pois: [{ name: "居延海", lon: 101.15, lat: 42.3, note: "黑河尾闾湖" }],
  source: "戈壁 NE 多边形（大部在蒙古，锚点取中国段额济纳）；砾漠，非沙漠",
};

// ============================================================
// 中国 — 河谷 / 峡谷 / 走廊（补充）
// ============================================================

const HEXI_CORRIDOR: TerrainEntry = {
  id: "hexi-corridor",
  nameZh: "河西走廊",
  nameEn: "Hexi Corridor",
  category: "valley",
  regionId: "asia",
  country: "china",
  // 锚点取张掖绿洲本身（走廊廊道 + 南侧祁连雪山 + 北侧荒山），
  // 而非张掖丹霞这一处局部彩色岩层
  landmark: { name: "张掖绿洲", lon: 100.45, lat: 38.93, elevation: 1480, kind: "corridor" },
  bbox: [95.6, 37.7, 103.7, 41.2],
  axis: [[96.0, 39.8], [103.5, 37.9]],
  viewFrom: 20, // 相机在走廊北侧，向南看祁连山雪线 + 山前绿洲带
  label: { lon: 99.5, lat: 39.0, rotation: -30 },
  pois: [
    { name: "嘉峪关", lon: 98.29, lat: 39.8, note: "明长城西端起点" },
    { name: "武威 / 张掖 / 酒泉", lon: 101.0, lat: 38.6, note: "河西四郡绿洲城市链" },
  ],
  source: "河西走廊 NE 多边形；祁连山与北山之间的狭长绿洲廊道，丝路要道",
};

const YANGTZE_GORGES: TerrainEntry = {
  id: "yangtze-gorges",
  nameZh: "长江三峡",
  nameEn: "Yangtze Gorges",
  category: "gorge",
  regionId: "asia",
  country: "china",
  landmark: { name: "瞿塘峡夔门", lon: 109.55, lat: 31.05, elevation: 150, kind: "gorge" },
  bbox: [107.4, 30.0, 111.9, 31.7],
  axis: [[108.5, 31.1], [111.5, 30.7]],
  viewFrom: 0,
  label: { lon: 110.0, lat: 31.0, rotation: -10 },
  pois: [
    { name: "巫峡", lon: 109.9, lat: 31.05, note: "神女峰，最幽深" },
    { name: "三峡大坝", lon: 111.0, lat: 30.82, note: "西陵峡口，世界最大水电站" },
  ],
  source: "长江三峡 NE 多边形；瞿塘峡/巫峡/西陵峡，长江切穿巫山",
};

const TSANGPO_GORGE: TerrainEntry = {
  id: "tsangpo-gorge",
  nameZh: "雅鲁藏布大峡谷",
  nameEn: "Yarlung Tsangpo Grand Canyon",
  category: "gorge",
  regionId: "asia",
  country: "china",
  landmark: { name: "南迦巴瓦峰", lon: 95.0, lat: 29.6, elevation: 7782, kind: "peak" },
  bbox: [94.5, 27.7, 96.0, 30.2],
  axis: [[94.8, 30.0], [95.4, 28.0]],
  viewFrom: 90,
  label: { lon: 95.1, lat: 29.4, rotation: -20 },
  pois: [{ name: "大峡谷马蹄形大拐弯", lon: 94.95, lat: 29.78, note: "雅江绕南迦巴瓦峰急转向南" }],
  source: "南迦巴瓦峰 ≈29.6N 95.0E 7782m: WebSearch 2026；世界最深大峡谷（峰谷高差5000–6000m）",
};

const TIGER_LEAPING_GORGE: TerrainEntry = {
  id: "tiger-leaping-gorge",
  nameZh: "虎跳峡",
  nameEn: "Tiger Leaping Gorge",
  category: "gorge",
  regionId: "asia",
  country: "china",
  landmark: { name: "虎跳峡", lon: 100.1, lat: 27.2, elevation: 1800, kind: "gorge" },
  bbox: [99.9, 27.0, 100.3, 27.35],
  label: { lon: 100.1, lat: 27.1, rotation: 0 },
  pois: [{ name: "玉龙雪山 / 哈巴雪山", lon: 100.15, lat: 27.1, note: "夹峙金沙江，谷深3900m" }],
  source: "虎跳峡；金沙江在玉龙与哈巴雪山间深切，世界最深峡谷之一（无 NE 多边形，用 bbox）",
};

// ============================================================
// 中国 — 湖泊（补充）
// ============================================================

const QINGHAI_LAKE: TerrainEntry = {
  id: "qinghai-lake",
  nameZh: "青海湖",
  nameEn: "Qinghai Lake",
  category: "lake",
  regionId: "asia",
  country: "china",
  landmark: { name: "青海湖", lon: 100.2, lat: 36.9, elevation: 3196, kind: "lake" },
  bbox: [99.5, 36.5, 100.9, 37.4],
  label: { lon: 100.2, lat: 36.9, rotation: 0 },
  pois: [{ name: "鸟岛", lon: 99.75, lat: 37.0, note: "斑头雁/棕头鸥繁殖地" }],
  source: "青海湖；中国最大湖、最大咸水湖，面积约4500km²，海拔3196m（无 NE 多边形，用 bbox）",
};

const NAMTSO: TerrainEntry = {
  id: "namtso",
  nameZh: "纳木错",
  nameEn: "Nam Co",
  category: "lake",
  regionId: "asia",
  country: "china",
  landmark: { name: "纳木错", lon: 90.6, lat: 30.72, elevation: 4718, kind: "lake" },
  bbox: [89.9, 30.5, 91.4, 31.1],
  label: { lon: 90.6, lat: 30.72, rotation: 0 },
  pois: [{ name: "念青唐古拉峰", lon: 90.6, lat: 30.38, note: "湖南岸雪墙，7162m" }],
  source: "纳木错；世界海拔最高的大型湖之一，湖面4718m，藏语“天湖”（无 NE 多边形，用 bbox）",
};

const POYANG: TerrainEntry = {
  id: "poyang",
  nameZh: "鄱阳湖",
  nameEn: "Poyang Lake",
  category: "lake",
  regionId: "asia",
  country: "china",
  landmark: { name: "鄱阳湖", lon: 116.3, lat: 29.1, elevation: 15, kind: "lake" },
  bbox: [115.8, 28.4, 117.0, 29.8],
  label: { lon: 116.3, lat: 29.1, rotation: 0 },
  pois: [{ name: "鄱阳湖候鸟", lon: 116.0, lat: 29.25, note: "白鹤越冬地，丰枯水位差极大" }],
  source: "鄱阳湖；中国最大淡水湖（丰水期），长江汛期调蓄（无 NE 多边形，用 bbox）",
};

const DONGTING: TerrainEntry = {
  id: "dongting",
  nameZh: "洞庭湖",
  nameEn: "Dongting Lake",
  category: "lake",
  regionId: "asia",
  country: "china",
  landmark: { name: "洞庭湖", lon: 112.95, lat: 29.31, elevation: 34, kind: "lake" },
  bbox: [111.8, 28.6, 113.3, 29.9],
  label: { lon: 112.95, lat: 29.31, rotation: 0 },
  pois: [{ name: "岳阳楼", lon: 113.09, lat: 29.37, note: "“先天下之忧而忧”" }],
  source: "洞庭湖；第二大淡水湖，长江与湘资沅澧四水吞吐（无 NE 多边形，用 bbox）",
};

// ============================================================
// 中国 — 岛屿
// ============================================================

const HAINAN: TerrainEntry = {
  id: "hainan",
  nameZh: "海南岛",
  nameEn: "Hainan Island",
  category: "island",
  regionId: "asia",
  country: "china",
  landmark: { name: "五指山", lon: 109.68, lat: 18.9, elevation: 1867, kind: "island" },
  bbox: [108.6, 18.1, 111.1, 20.2],
  label: { lon: 109.7, lat: 19.2, rotation: 0 },
  pois: [
    { name: "海口", lon: 110.35, lat: 20.03, note: "琼北，火山熔岩台地" },
    { name: "三亚", lon: 109.51, lat: 18.25, note: "琼南滨海" },
  ],
  source: "海南岛 NE 多边形；中国第二大岛，中央山地（五指山1867m）向四周环状递降",
};

const TAIWAN: TerrainEntry = {
  id: "taiwan",
  nameZh: "台湾岛",
  nameEn: "Taiwan Island",
  category: "island",
  regionId: "asia",
  country: "china",
  landmark: { name: "玉山", lon: 120.96, lat: 23.47, elevation: 3952, kind: "island" },
  bbox: [120.0, 21.9, 122.0, 25.3],
  axis: [[121.3, 25.2], [120.8, 22.0]],
  label: { lon: 121.0, lat: 23.6, rotation: -12 },
  pois: [
    { name: "中央山脉", lon: 121.1, lat: 23.8, note: "纵贯全岛，东岸陡、西岸平原" },
    { name: "台北 / 台南", lon: 121.0, lat: 24.2, note: "西部冲积平原城市" },
  ],
  source: "台湾岛 NE 多边形；玉山3952m 为中国东部及东亚岛屿最高峰",
};

// ============================================================
// 澳大利亚（regionId: "australia"）
// 坐标据 Geoscience Australia / Parks Australia / 地名委员会
// ============================================================

const GREAT_DIVIDING_RANGE: TerrainEntry = {
  id: "great-dividing-range",
  nameZh: "大分水岭",
  nameEn: "Great Dividing Range",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "新英格兰断崖", lon: 152.4, lat: -30.0, elevation: 1300, kind: "escarpment" },
  bbox: [144.5, -37.5, 153.0, -16.0],
  axis: [[145.5, -37.0], [145.5, -17.0]],
  viewFrom: 90, // 相机在东侧海岸一侧，看陡峭的东坡断崖
  label: { lon: 151.5, lat: -31.5, rotation: -78 },
  source: "大分水岭沿澳大利亚东缘 ~3500km；锚点取新英格兰台地东缘断崖",
};

const AUSTRALIAN_ALPS: TerrainEntry = {
  id: "australian-alps",
  nameZh: "澳大利亚阿尔卑斯山脉",
  nameEn: "Australian Alps",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "科修斯科山", lon: 148.263, lat: -36.456, elevation: 2228, kind: "peak" },
  bbox: [146.0, -37.5, 149.3, -35.3],
  axis: [[147.0, -37.2], [148.6, -35.6]],
  label: { lon: 148.3, lat: -36.6, rotation: -30 },
  source: "科修斯科山 2228m 为澳大利亚大陆最高峰（Geoscience Australia）",
};

const MACDONNELL_RANGES: TerrainEntry = {
  id: "macdonnell-ranges",
  nameZh: "麦克唐奈山脉",
  nameEn: "MacDonnell Ranges",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "齐尔山", lon: 132.36, lat: -23.40, elevation: 1531, kind: "peak" },
  bbox: [131.5, -24.2, 135.0, -23.0],
  axis: [[131.6, -23.6], [134.8, -23.5]],
  label: { lon: 133.0, lat: -23.5, rotation: -4 },
  source: "齐尔山 1531m；麦克唐奈山脉横贯澳大利亚中部，爱丽斯泉一带",
};

const FLINDERS_RANGES: TerrainEntry = {
  id: "flinders-ranges",
  nameZh: "弗林德斯山脉",
  nameEn: "Flinders Ranges",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "圣玛丽峰（威尔佩纳凹地）", lon: 138.59, lat: -31.53, elevation: 1171, kind: "peak" },
  bbox: [137.8, -33.5, 139.6, -30.0],
  axis: [[138.4, -33.3], [138.8, -30.3]],
  label: { lon: 138.6, lat: -31.8, rotation: -80 },
  source: "圣玛丽峰 1171m；威尔佩纳凹地（Ikara）为标志性天然圆形山围",
};

const BLUE_MOUNTAINS: TerrainEntry = {
  id: "blue-mountains",
  nameZh: "蓝山",
  nameEn: "Blue Mountains",
  category: "plateau",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "三姊妹岩（卡通巴）", lon: 150.312, lat: -33.732, elevation: 1000, kind: "escarpment" },
  bbox: [150.0, -34.1, 150.7, -33.3],
  label: { lon: 150.3, lat: -33.6, rotation: 0 },
  source: "蓝山：悉尼以西的砂岩台地，深切峡谷；三姊妹岩、世界遗产区",
};

const PILBARA: TerrainEntry = {
  id: "pilbara",
  nameZh: "哈默斯利岭（皮尔巴拉）",
  nameEn: "Hamersley Range (Pilbara)",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "梅哈里山", lon: 118.59, lat: -22.98, elevation: 1249, kind: "peak" },
  bbox: [116.5, -23.8, 120.5, -21.0],
  axis: [[116.8, -22.3], [120.2, -22.6]],
  label: { lon: 118.3, lat: -22.4, rotation: -6 },
  source: "梅哈里山 1249m（西澳最高）；皮尔巴拉太古宙铁矿区、卡里吉尼峡谷",
};

const KIMBERLEY: TerrainEntry = {
  id: "kimberley",
  nameZh: "金伯利高原",
  nameEn: "The Kimberley",
  category: "plateau",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "班古鲁班古鲁岭（普努鲁鲁）", lon: 128.40, lat: -17.50, elevation: 578, kind: "escarpment" },
  bbox: [124.5, -18.7, 129.0, -14.0],
  label: { lon: 126.5, lat: -16.5, rotation: 0 },
  source: "普努鲁鲁 / 班古鲁班古鲁蜂窝状砂岩塔；金伯利古老砂岩高原、深切峡湾",
};

const SIMPSON_DESERT: TerrainEntry = {
  id: "simpson-desert",
  nameZh: "辛普森沙漠",
  nameEn: "Simpson Desert",
  category: "desert",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "大红丘（Nappanerica）", lon: 139.35, lat: -25.90, elevation: 40, kind: "dune" },
  bbox: [135.5, -27.5, 140.0, -23.0],
  axis: [[137.5, -27.0], [137.6, -23.5]],
  label: { lon: 137.5, lat: -25.2, rotation: -88 },
  source: "辛普森沙漠：世界最长平行沙垄，NNW–SSE 走向，最长逾200km",
};

const GREAT_VICTORIA_DESERT: TerrainEntry = {
  id: "great-victoria-desert",
  nameZh: "大维多利亚沙漠",
  nameEn: "Great Victoria Desert",
  category: "desert",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "沙漠中心", lon: 128.5, lat: -29.0, elevation: 250, kind: "dune" },
  bbox: [124.5, -31.0, 132.5, -27.0],
  label: { lon: 128.5, lat: -29.0, rotation: 0 },
  source: "大维多利亚沙漠：澳大利亚最大沙漠，约35万km²，横跨西澳与南澳",
};

const NULLARBOR_PLAIN: TerrainEntry = {
  id: "nullarbor-plain",
  nameZh: "纳拉伯平原",
  nameEn: "Nullarbor Plain",
  category: "plain",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "邦达断崖（大澳大利亚湾）", lon: 130.30, lat: -31.62, elevation: 90, kind: "escarpment" },
  bbox: [126.0, -32.3, 132.5, -30.0],
  label: { lon: 129.5, lat: -31.0, rotation: -3 },
  source: "纳拉伯：世界最大单块石灰岩，几乎无树；邦达断崖直落大澳大利亚湾",
};

const GREAT_ARTESIAN_BASIN: TerrainEntry = {
  id: "great-artesian-basin",
  nameZh: "大自流盆地",
  nameEn: "Great Artesian Basin",
  category: "basin",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "朗里奇（渠沟之乡）", lon: 144.25, lat: -23.44, elevation: 190, kind: "grassland" },
  bbox: [138.0, -30.0, 148.0, -18.0],
  label: { lon: 143.0, lat: -24.0, rotation: 0 },
  source: "大自流盆地：世界最大最深的自流地下水盆地，占澳大利亚约1/5面积",
};

const LAKE_EYRE: TerrainEntry = {
  id: "lake-eyre",
  nameZh: "埃尔湖（卡蒂坦达）",
  nameEn: "Lake Eyre (Kati Thanda)",
  category: "lake",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "湖心", lon: 137.36, lat: -28.37, elevation: -15, kind: "salt-lake" },
  bbox: [136.0, -29.6, 138.6, -27.4],
  label: { lon: 137.3, lat: -28.4, rotation: 0 },
  source: "卡蒂坦达-埃尔湖：澳大利亚最低点 -15m，最大盐湖，多数年份干涸",
};

const ULURU: TerrainEntry = {
  id: "uluru",
  nameZh: "乌鲁鲁（艾尔斯岩）",
  nameEn: "Uluṟu",
  category: "inselberg",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "乌鲁鲁", lon: 131.036, lat: -25.345, elevation: 863, kind: "peak" },
  bbox: [130.9, -25.45, 131.15, -25.24],
  label: { lon: 131.04, lat: -25.30, rotation: 0 },
  source: "乌鲁鲁：巨型砂岩残丘（岛山），高出周围平原约348m；原住民阿南古圣地",
};

const KATA_TJUTA: TerrainEntry = {
  id: "kata-tjuta",
  nameZh: "卡塔丘塔（奥尔加山）",
  nameEn: "Kata Tjuṯa",
  category: "inselberg",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "奥尔加山", lon: 130.74, lat: -25.30, elevation: 1066, kind: "peak" },
  bbox: [130.65, -25.40, 130.83, -25.22],
  label: { lon: 130.74, lat: -25.28, rotation: 0 },
  source: "卡塔丘塔：36 座砾岩圆丘，最高奥尔加山出露约546m；与乌鲁鲁同属国家公园",
};

const GREAT_BARRIER_REEF: TerrainEntry = {
  id: "great-barrier-reef",
  nameZh: "大堡礁",
  nameEn: "Great Barrier Reef",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "凯恩斯外礁", lon: 146.2, lat: -16.5, elevation: 0, kind: "island" },
  bbox: [143.0, -24.0, 152.0, -10.0],
  axis: [[145.0, -22.0], [147.0, -11.5]],
  label: { lon: 147.5, lat: -18.0, rotation: -70 },
  source: "大堡礁：世界最大珊瑚礁系统，约2300km、3000座礁体；世界自然遗产",
};

const TWELVE_APOSTLES: TerrainEntry = {
  id: "twelve-apostles",
  nameZh: "十二门徒岩",
  nameEn: "Twelve Apostles",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "十二门徒岩", lon: 143.104, lat: -38.665, elevation: 45, kind: "escarpment" },
  bbox: [142.9, -38.75, 143.5, -38.55],
  label: { lon: 143.1, lat: -38.62, rotation: 0 },
  source: "十二门徒岩：大洋路石灰岩海蚀柱，最高约45m；波特坎贝尔国家公园",
};

const TASMANIA: TerrainEntry = {
  id: "tasmania",
  nameZh: "塔斯马尼亚岛",
  nameEn: "Tasmania",
  category: "island",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "摇篮山", lon: 145.95, lat: -41.68, elevation: 1545, kind: "island" },
  bbox: [144.5, -43.7, 148.5, -40.6],
  axis: [[146.0, -43.5], [147.5, -40.8]],
  label: { lon: 146.5, lat: -42.0, rotation: 0 },
  source: "塔斯马尼亚：岛屿州，冰川刨蚀的荒野高地；摇篮山、圣克莱尔湖",
};

const MURRAY_DARLING: TerrainEntry = {
  id: "murray-darling",
  nameZh: "墨累-达令河",
  nameEn: "Murray–Darling",
  category: "river",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "墨累河与达令河汇流处（温特沃斯）", lon: 141.92, lat: -34.11, elevation: 30, kind: "meander" },
  bbox: [138.5, -37.0, 149.5, -25.0],
  axis: [[149.0, -30.0], [139.5, -35.5]],
  label: { lon: 143.5, lat: -34.0, rotation: -20 },
  source: "墨累-达令水系：澳大利亚最大河系（>3500km），横贯东南部内陆",
};

// —— 分类标准审定后补录（docs/terrain-taxonomy.md §4）——

const KGARI: TerrainEntry = {
  id: "kgari",
  nameZh: "弗雷泽岛（K'gari）",
  nameEn: "K'gari (Fraser Island)",
  category: "island",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "麦肯锡湖", lon: 153.055, lat: -25.443, elevation: 100, kind: "lake" },
  bbox: [152.9, -25.95, 153.42, -24.68],
  axis: [[153.15, -25.9], [153.05, -24.75]],
  label: { lon: 153.2, lat: -25.3, rotation: 0 },
  source: "K'gari：世界最大沙岛（约123km、1660km²），沙丘上生长雨林；世界自然遗产（Parks Australia / UNESCO）",
};

const KAKADU: TerrainEntry = {
  id: "kakadu",
  nameZh: "卡卡杜",
  nameEn: "Kakadu",
  category: "plain",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "阿纳姆地崖线（吉姆吉姆瀑布）", lon: 132.83, lat: -13.27, elevation: 250, kind: "escarpment" },
  bbox: [131.6, -13.9, 133.1, -12.3],
  label: { lon: 132.3, lat: -12.9, rotation: 0 },
  viewScale: 1.6,
  source: "卡卡杜：热带季风湿地 + 阿纳姆地砂岩崖线，约2万km²；世界自然与文化双遗产（Parks Australia）",
};

const GRAMPIANS: TerrainEntry = {
  id: "grampians",
  nameZh: "格兰坪山（Gariwerd）",
  nameEn: "Grampians (Gariwerd)",
  category: "mountain_system",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "威廉山（Duwul）", lon: 142.604, lat: -37.297, elevation: 1167, kind: "peak" },
  bbox: [141.9, -37.65, 142.75, -36.8],
  axis: [[142.4, -37.6], [142.5, -36.85]],
  label: { lon: 142.5, lat: -37.2, rotation: -6 },
  source: "格兰坪山：维多利亚州西部翘起的砂岩单面山群，最高威廉山1167m（Parks Victoria / Geoscience Australia）",
};

const NINGALOO: TerrainEntry = {
  id: "ningaloo",
  nameZh: "宁格罗礁",
  nameEn: "Ningaloo",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "珊瑚湾外礁", lon: 113.77, lat: -23.14, elevation: 0, kind: "escarpment" },
  bbox: [113.4, -23.7, 114.25, -21.8],
  axis: [[113.9, -23.6], [113.65, -21.9]],
  label: { lon: 113.6, lat: -22.6, rotation: 0 },
  source: "宁格罗礁：西澳裾礁（fringing reef，紧贴海岸，长约260km），与大堡礁的堡礁形成对比；世界自然遗产（Parks Australia）",
};

// ============================================================
// 北美洲 — 美国（regionId: "north-america", country: "usa"）
// 坐标 / 高程据 USGS、NPS、NOAA、Encyclopædia Britannica
// ============================================================

const ROCKY_MOUNTAINS: TerrainEntry = {
  id: "rocky-mountains",
  nameZh: "落基山脉",
  nameEn: "Rocky Mountains",
  category: "mountain_system",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "埃尔伯特山", lon: -106.4453, lat: 39.1178, elevation: 4401, kind: "peak" },
  bbox: [-116.5, 33.0, -104.0, 49.0],
  axis: [[-110.0, 33.5], [-113.5, 49.0]],
  viewFrom: 90, // 从东侧大平原一侧看山墙
  label: { lon: -106.5, lat: 40.5, rotation: -70 },
  pois: [
    { name: "埃尔伯特山", lon: -106.4453, lat: 39.1178, note: "美国落基山脉最高峰，海拔约4401m（14440ft，USGS）" },
    { name: "派克斯峰", lon: -105.0442, lat: 38.8409, note: "科罗拉多前岭标志性山峰，海拔约4302m" },
  ],
  source: "落基山脉沿北美西部约4800km，从加拿大不列颠哥伦比亚到美国新墨西哥；锚点取美国境内最高峰埃尔伯特山（USGS 14440ft）",
};

const APPALACHIAN_MOUNTAINS: TerrainEntry = {
  id: "appalachian-mountains",
  nameZh: "阿巴拉契亚山脉",
  nameEn: "Appalachian Mountains",
  category: "mountain_system",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "米切尔山", lon: -82.2652, lat: 35.7648, elevation: 2037, kind: "peak" },
  bbox: [-84.5, 33.5, -70.0, 46.5],
  axis: [[-84.0, 34.0], [-71.0, 45.5]],
  viewFrom: 135,
  label: { lon: -80.0, lat: 38.5, rotation: -40 },
  pois: [
    { name: "米切尔山", lon: -82.2652, lat: 35.7648, note: "阿巴拉契亚山脉与密西西比河以东最高峰，海拔约2037m（6684ft）" },
    { name: "大烟山", lon: -83.4985, lat: 35.6118, note: "大烟山国家公园，克林曼斯山穹顶约2025m" },
  ],
  source: "阿巴拉契亚山脉沿北美东缘约2400km（从加拿大纽芬兰到美国阿拉巴马）；锚点取米切尔山（NPS / USGS，6684ft）",
};

const SIERRA_NEVADA_US: TerrainEntry = {
  id: "sierra-nevada-us",
  nameZh: "内华达山脉",
  nameEn: "Sierra Nevada",
  category: "mountain_system",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "惠特尼山", lon: -118.2921, lat: 36.5786, elevation: 4421, kind: "peak" },
  bbox: [-121.0, 35.4, -118.0, 40.2],
  axis: [[-118.3, 35.6], [-120.6, 40.0]],
  viewFrom: 100, // 从东侧欧文斯谷一侧看陡峭东坡
  label: { lon: -119.4, lat: 37.6, rotation: -60 },
  pois: [
    { name: "惠特尼山", lon: -118.2921, lat: 36.5786, note: "美国本土48州最高峰，海拔约4421m（14505ft，NAVD88）" },
    { name: "优胜美地谷", lon: -119.5383, lat: 37.7456, note: "冰川刻蚀的花岗岩峡谷" },
  ],
  source: "内华达山脉（Sierra Nevada）：加利福尼亚东部约640km的花岗岩断块山，西缓东陡；锚点取惠特尼山（USGS，14505ft NAVD88）",
};

const CASCADE_RANGE: TerrainEntry = {
  id: "cascade-range",
  nameZh: "喀斯喀特山脉",
  nameEn: "Cascade Range",
  category: "mountain_system",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "雷尼尔山", lon: -121.7603, lat: 46.8523, elevation: 4392, kind: "peak" },
  bbox: [-122.6, 40.3, -120.0, 49.0],
  axis: [[-121.6, 40.5], [-121.3, 49.0]],
  viewFrom: 270, // 从西侧普吉特低地一侧看
  label: { lon: -121.6, lat: 44.5, rotation: -82 },
  pois: [
    { name: "雷尼尔山", lon: -121.7603, lat: 46.8523, note: "喀斯喀特火山弧最高峰，活火山，海拔约4392m（14410ft，NPS）" },
    { name: "圣海伦斯山", lon: -122.1944, lat: 46.1912, note: "1980年剧烈喷发的活火山" },
    { name: "火山口湖", lon: -122.1685, lat: 42.9446, note: "马扎马火山塌陷成的破火山口湖，美国最深湖" },
  ],
  source: "喀斯喀特山脉：北美西北的火山山脉，从加拿大不列颠哥伦比亚到美国北加州，多座层状火山；锚点取雷尼尔山（NPS，14410ft）",
};

const ALASKA_RANGE: TerrainEntry = {
  id: "alaska-range",
  nameZh: "阿拉斯加山脉",
  nameEn: "Alaska Range",
  category: "mountain_system",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "迪纳利峰", lon: -151.0064, lat: 63.0692, elevation: 6190, kind: "peak" },
  bbox: [-153.5, 61.8, -144.5, 63.8],
  axis: [[-152.5, 62.3], [-145.5, 63.4]],
  viewFrom: 180, // 从南侧（安克雷奇方向）看北美最高峰
  label: { lon: -149.5, lat: 62.9, rotation: -12 },
  pois: [
    { name: "迪纳利峰", lon: -151.0064, lat: 63.0692, note: "北美最高峰，海拔约6190m（20310ft，USGS）；联邦官方名亦作麦金利山（Mount McKinley）" },
  ],
  source: "阿拉斯加山脉：阿拉斯加中南部约650km的弧形山脉，含北美最高峰迪纳利（USGS：20310ft）",
};

const COLORADO_PLATEAU: TerrainEntry = {
  id: "colorado-plateau",
  nameZh: "科罗拉多高原",
  nameEn: "Colorado Plateau",
  category: "plateau",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "大峡谷南缘", lon: -112.1130, lat: 36.0575, elevation: 2100, kind: "escarpment" },
  bbox: [-114.0, 35.0, -107.0, 39.5],
  axis: [[-113.0, 35.5], [-108.5, 39.0]],
  viewFrom: 200,
  label: { lon: -110.5, lat: 37.2, rotation: 0 },
  pois: [
    { name: "大峡谷", lon: -112.1130, lat: 36.0575, note: "科罗拉多河切入高原约1800m深" },
    { name: "纪念碑谷", lon: -110.1096, lat: 36.9980, note: "红色砂岩方山与孤峰群（纳瓦霍公园）" },
  ],
  source: "科罗拉多高原：约34万km²，跨科罗拉多/犹他/亚利桑那/新墨西哥四州交界，平均海拔约1500–2100m（USGS）",
};

const GRAND_CANYON: TerrainEntry = {
  id: "grand-canyon",
  nameZh: "大峡谷",
  nameEn: "Grand Canyon",
  category: "gorge",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "光明天使点（南缘）", lon: -112.1401, lat: 36.0575, elevation: 2100, kind: "gorge" },
  bbox: [-114.0, 35.9, -111.8, 36.6],
  axis: [[-113.9, 36.2], [-111.85, 36.1]],
  viewFrom: 20,
  label: { lon: -112.4, lat: 36.25, rotation: -12 },
  pois: [
    { name: "南缘（大峡谷村）", lon: -112.1130, lat: 36.0544, note: "游客主要出入口，海拔约2100m" },
    { name: "北缘", lon: -112.0526, lat: 36.1978, note: "海拔约2500m，比南缘更高更凉" },
  ],
  source: "大峡谷：科罗拉多河切穿科罗拉多高原，长约446km、最宽约29km、最深约1857m；岩层记录约18亿年（NPS）",
};

const GREAT_PLAINS_US: TerrainEntry = {
  id: "great-plains-us",
  nameZh: "北美大平原",
  nameEn: "Great Plains",
  category: "plain",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "内布拉斯加沙丘", lon: -101.5, lat: 41.8, elevation: 900, kind: "grassland" },
  bbox: [-105.0, 32.0, -97.0, 49.0],
  axis: [[-100.0, 32.5], [-100.5, 48.5]],
  viewFrom: 100,
  label: { lon: -100.5, lat: 40.5, rotation: -84 },
  source: "北美大平原：落基山脉以东的广阔缓坡平原，从加拿大草原省份到美国得州；自西向东由约1800m降到约500m（USGS）。此条目取美国部分",
};

const GREAT_BASIN: TerrainEntry = {
  id: "great-basin",
  nameZh: "大盆地",
  nameEn: "Great Basin",
  category: "basin",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "大盐湖", lon: -112.6, lat: 41.15, elevation: 1280, kind: "salt-lake" },
  bbox: [-120.0, 37.0, -111.5, 42.0],
  axis: [[-119.0, 38.0], [-112.5, 41.5]],
  viewFrom: 200,
  label: { lon: -116.0, lat: 39.5, rotation: 0 },
  pois: [
    { name: "大盐湖", lon: -112.6, lat: 41.15, note: "西半球最大的咸水湖，无出海口" },
    { name: "惠勒峰（大盆地国家公园）", lon: -114.3142, lat: 38.9858, note: "海拔约3982m" },
  ],
  source: "大盆地：内华达山脉与瓦萨奇山脉之间的内流区（河水不流入海洋），约50万km²，典型的盆岭地貌（USGS / NPS）",
};

const DEATH_VALLEY: TerrainEntry = {
  id: "death-valley",
  nameZh: "死亡谷",
  nameEn: "Death Valley",
  category: "basin",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "巴德沃特盆地", lon: -116.7669, lat: 36.2295, elevation: -86, kind: "salt-lake" },
  bbox: [-117.3, 35.9, -116.4, 37.1],
  axis: [[-117.0, 36.1], [-116.7, 37.0]],
  viewFrom: 100,
  label: { lon: -116.9, lat: 36.5, rotation: -75 },
  pois: [
    { name: "巴德沃特盆地", lon: -116.7669, lat: 36.2295, note: "北美最低点，海拔-86m（-282ft，NPS）；盐滩约520km²" },
  ],
  source: "死亡谷：加州东部的断陷地堑，含北美最低点巴德沃特盆地（-86m，NPS）；夏季极端高温",
};

const MOJAVE_DESERT: TerrainEntry = {
  id: "mojave-desert",
  nameZh: "莫哈韦沙漠",
  nameEn: "Mojave Desert",
  category: "desert",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "约书亚树", lon: -116.1, lat: 34.1, elevation: 900, kind: "dune" },
  bbox: [-118.2, 33.0, -114.0, 37.2],
  axis: [[-117.5, 33.5], [-114.5, 37.0]],
  viewFrom: 200,
  label: { lon: -116.0, lat: 35.2, rotation: 0 },
  source: "莫哈韦沙漠：加州东南/内华达/亚利桑那/犹他交界的高地荒漠，约上万km²，介于大盆地与索诺兰沙漠之间，以约书亚树为标志植物（NPS）",
};

const GREAT_LAKES: TerrainEntry = {
  id: "great-lakes",
  nameZh: "五大湖",
  nameEn: "Great Lakes",
  category: "lake",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "休伦湖", lon: -82.4, lat: 44.8, elevation: 176, kind: "lake" },
  bbox: [-92.5, 41.0, -76.0, 49.0],
  axis: [[-91.0, 46.5], [-77.0, 43.0]],
  viewFrom: 200,
  label: { lon: -84.0, lat: 45.0, rotation: 0 },
  pois: [
    { name: "苏必利尔湖", lon: -87.5, lat: 47.7, note: "按面积计世界最大的淡水湖" },
    { name: "尼亚加拉瀑布", lon: -79.0747, lat: 43.0828, note: "伊利湖与安大略湖之间的落差" },
  ],
  source: "五大湖（苏必利尔/密歇根/休伦/伊利/安大略）：北美中部的冰川湖群，总面积约24.4万km²，约占全球地表淡水的两成（NOAA / USGS）。跨美加两国，此条目归美国",
};

const YELLOWSTONE: TerrainEntry = {
  id: "yellowstone",
  nameZh: "黄石高原",
  nameEn: "Yellowstone Plateau",
  category: "plateau",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "老忠实喷泉", lon: -110.8281, lat: 44.4605, elevation: 2240, kind: "escarpment" },
  bbox: [-111.2, 44.1, -109.8, 45.1],
  axis: [[-111.0, 44.3], [-110.0, 45.0]],
  viewFrom: 200,
  label: { lon: -110.5, lat: 44.6, rotation: 0 },
  pois: [
    { name: "老忠实喷泉", lon: -110.8281, lat: 44.4605, note: "定时喷发的间歇泉" },
    { name: "黄石大峡谷（下瀑布）", lon: -110.4962, lat: 44.7180, note: "黄石河切出的黄色岩壁峡谷" },
  ],
  source: "黄石高原：落基山脉中的火山高原，一座巨型破火山口约72×55km；世界上间歇泉最集中的地区（USGS / NPS）。1872年设立为国家公园",
};

const YOSEMITE_VALLEY: TerrainEntry = {
  id: "yosemite-valley",
  nameZh: "优胜美地谷",
  nameEn: "Yosemite Valley",
  category: "valley",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "酋长岩", lon: -119.6379, lat: 37.7339, elevation: 2308, kind: "escarpment" },
  bbox: [-119.68, 37.70, -119.50, 37.78],
  axis: [[-119.66, 37.72], [-119.53, 37.75]],
  viewFrom: 200,
  label: { lon: -119.58, lat: 37.745, rotation: -6 },
  pois: [
    { name: "酋长岩", lon: -119.6379, lat: 37.7339, note: "单块花岗岩崖壁，海拔约2308m，崖面高约900m" },
    { name: "半圆顶", lon: -119.5332, lat: 37.7460, note: "被冰川削去一半的花岗岩穹丘，海拔约2696m" },
  ],
  source: "优胜美地谷：内华达山脉中默塞德河与冰川刻出的U形花岗岩谷，谷底海拔约1200m（NPS）；世界自然遗产",
};

const MISSISSIPPI_RIVER: TerrainEntry = {
  id: "mississippi-river",
  nameZh: "密西西比河",
  nameEn: "Mississippi River",
  category: "river",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "密西西比河三角洲（鸟足）", lon: -89.25, lat: 29.15, elevation: 0, kind: "delta" },
  bbox: [-95.0, 29.0, -89.0, 47.5],
  axis: [[-90.2, 47.2], [-89.4, 29.3]],
  viewFrom: 90,
  label: { lon: -91.0, lat: 35.0, rotation: -80 },
  pois: [
    { name: "河源（艾塔斯卡湖）", lon: -95.2075, lat: 47.2419, note: "明尼苏达州，公认的密西西比河源头" },
    { name: "“鸟足”三角洲", lon: -89.25, lat: 29.15, note: "河流带着泥沙冲进墨西哥湾形成的分汊三角洲" },
  ],
  source: "密西西比河：北美最大水系的干流，与密苏里河合计长约6000km；下游是大型泛滥平原和鸟足状三角洲（USGS）",
};

const CENTRAL_VALLEY_CA: TerrainEntry = {
  id: "central-valley-ca",
  nameZh: "中央谷地",
  nameEn: "Central Valley",
  category: "plain",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "萨克拉门托-圣华金三角洲", lon: -121.6, lat: 38.05, elevation: 3, kind: "delta" },
  bbox: [-122.3, 35.0, -118.9, 40.5],
  axis: [[-121.9, 40.2], [-119.3, 35.2]],
  viewFrom: 110,
  label: { lon: -120.5, lat: 37.5, rotation: -70 },
  source: "中央谷地：加州内华达山脉与海岸山脉之间约650km长的构造凹陷冲积平原；美国重要的农业区（USGS）",
};

const EVERGLADES: TerrainEntry = {
  id: "everglades",
  nameZh: "大沼泽地",
  nameEn: "Everglades",
  category: "plain",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "沙河（大沼泽腹地）", lon: -80.85, lat: 25.75, elevation: 1, kind: "grassland" },
  bbox: [-81.6, 25.1, -80.3, 27.2],
  axis: [[-80.9, 27.0], [-80.9, 25.2]],
  viewFrom: 90,
  label: { lon: -80.9, lat: 25.9, rotation: -84 },
  source: "大沼泽地：佛罗里达南部一片极缓的宽阔湿地，雨季从奥基乔比湖向南极慢地漫流入海，被称为“草之河”（NPS）；世界自然遗产",
};

const SONORAN_DESERT: TerrainEntry = {
  id: "sonoran-desert",
  nameZh: "索诺兰沙漠",
  nameEn: "Sonoran Desert",
  category: "desert",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "巨柱仙人掌（萨瓜罗国家公园）", lon: -110.90, lat: 32.25, elevation: 900, kind: "dune" },
  bbox: [-114.5, 31.3, -109.5, 34.5],
  axis: [[-113.5, 31.6], [-110.0, 34.2]],
  viewFrom: 200,
  label: { lon: -112.0, lat: 32.8, rotation: 0 },
  source: "索诺兰沙漠：横跨美国亚利桑那/加州与墨西哥的热荒漠，夏冬两次降水，以巨柱仙人掌（saguaro）为标志（NPS）。此条目取美国部分",
};

const MONUMENT_VALLEY: TerrainEntry = {
  id: "monument-valley",
  nameZh: "纪念碑谷",
  nameEn: "Monument Valley",
  category: "inselberg",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "东、西手套峰", lon: -110.1096, lat: 36.9980, elevation: 1900, kind: "peak" },
  bbox: [-110.3, 36.85, -109.9, 37.15],
  axis: [[-110.2, 36.9], [-109.95, 37.1]],
  viewScale: 1.4,
  label: { lon: -110.1, lat: 37.0, rotation: 0 },
  source: "纪念碑谷：科罗拉多高原上一群红色砂岩方山和孤峰，相对高差约100–300m，由纳瓦霍部落公园管理（Navajo Nation Parks & Recreation）",
};

const HAWAIIAN_ISLANDS: TerrainEntry = {
  id: "hawaiian-islands",
  nameZh: "夏威夷群岛",
  nameEn: "Hawaiian Islands",
  category: "island",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "冒纳罗亚火山", lon: -155.6076, lat: 19.4753, elevation: 4169, kind: "peak" },
  bbox: [-160.3, 18.9, -154.8, 22.3],
  axis: [[-159.6, 22.0], [-155.3, 19.3]],
  viewFrom: 200,
  label: { lon: -157.0, lat: 20.6, rotation: -30 },
  pois: [
    { name: "冒纳罗亚火山", lon: -155.6076, lat: 19.4753, note: "按体积计地球上最大的盾状火山之一，海拔约4169m，活火山" },
    { name: "基拉韦厄火山", lon: -155.2870, lat: 19.4211, note: "夏威夷岛上最活跃的火山" },
  ],
  source: "夏威夷群岛：太平洋中部的火山岛链，由一个地幔热点上方板块移动形成，越往西北岛越老、越低（USGS）",
};

const COLUMBIA_PLATEAU: TerrainEntry = {
  id: "columbia-plateau",
  nameZh: "哥伦比亚高原",
  nameEn: "Columbia Plateau",
  category: "plateau",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "德赖瀑布（干瀑布）", lon: -119.3536, lat: 47.6070, elevation: 500, kind: "escarpment" },
  bbox: [-121.0, 43.8, -116.0, 47.7],
  axis: [[-120.0, 44.2], [-117.0, 47.3]],
  viewFrom: 200,
  label: { lon: -119.0, lat: 46.0, rotation: 0 },
  pois: [
    { name: "哥伦比亚河峡谷", lon: -121.4, lat: 45.7, note: "哥伦比亚河切穿玄武岩和喀斯喀特山脉" },
    { name: "河道疤地", lon: -118.2, lat: 47.0, note: "冰期米苏拉大洪水冲刷出的裸岩沟谷群" },
  ],
  source: "哥伦比亚高原：美国西北部由中新世（约1700–600万年前）溢流玄武岩堆成的高原，玄武岩总覆盖约21万km²（USGS）；冰期米苏拉大洪水冲出“河道疤地”",
};

const GREAT_SALT_LAKE: TerrainEntry = {
  id: "great-salt-lake",
  nameZh: "大盐湖",
  nameEn: "Great Salt Lake",
  category: "lake",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "大盐湖", lon: -112.5, lat: 41.15, elevation: 1280, kind: "salt-lake" },
  bbox: [-113.2, 40.6, -111.9, 41.75],
  axis: [[-112.9, 41.6], [-112.2, 40.7]],
  viewFrom: 200,
  label: { lon: -112.5, lat: 41.2, rotation: 0 },
  source: "大盐湖：西半球最大的咸水湖，冰期邦纳维尔湖的残留；无出海口，靠蒸发平衡，水位和面积随降水大幅波动，近年偏低（USGS / 犹他州）",
};

const COLORADO_RIVER: TerrainEntry = {
  id: "colorado-river",
  nameZh: "科罗拉多河",
  nameEn: "Colorado River",
  category: "river",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "格伦峡谷（马蹄湾）", lon: -111.5104, lat: 36.8791, elevation: 1130, kind: "gorge" },
  bbox: [-115.5, 31.8, -105.5, 40.5],
  axis: [[-105.8, 40.2], [-114.6, 32.0]],
  viewFrom: 20,
  label: { lon: -111.5, lat: 36.5, rotation: -20 },
  pois: [
    { name: "米德湖（胡佛水坝）", lon: -114.7377, lat: 36.0161, note: "美国库容最大的水库之一" },
    { name: "鲍威尔湖（格伦峡谷水坝）", lon: -111.4837, lat: 36.9375, note: "淹没了格伦峡谷" },
  ],
  source: "科罗拉多河：从落基山流向加利福尼亚湾，长约2330km；切出大峡谷，被胡佛、格伦峡谷等大坝分段拦蓄，近几十年多数年份不再入海（USGS）",
};

const ATLANTIC_COASTAL_PLAIN: TerrainEntry = {
  id: "atlantic-coastal-plain",
  nameZh: "大西洋沿岸平原",
  nameEn: "Atlantic Coastal Plain",
  category: "plain",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "切萨皮克湾", lon: -76.1, lat: 37.8, elevation: 2, kind: "delta" },
  bbox: [-82.5, 30.0, -72.0, 40.5],
  axis: [[-74.0, 40.0], [-81.5, 30.5]],
  viewFrom: 110,
  label: { lon: -77.5, lat: 35.5, rotation: -55 },
  source: "大西洋沿岸平原：北美东缘一条自北向南加宽的低平地带，由抬升出海面的松散沉积构成；与阿巴拉契亚山麓之间以“瀑布线”为界（USGS）",
};

const FLORIDA_PENINSULA: TerrainEntry = {
  id: "florida-peninsula",
  nameZh: "佛罗里达半岛",
  nameEn: "Florida Peninsula",
  category: "coast",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "银泉（喀斯特泉）", lon: -82.0578, lat: 29.2108, elevation: 12, kind: "escarpment" },
  bbox: [-83.5, 24.5, -80.0, 30.7],
  axis: [[-81.6, 30.4], [-81.2, 25.2]],
  viewFrom: 90,
  label: { lon: -81.6, lat: 28.3, rotation: -84 },
  source: "佛罗里达半岛：一块巨大的石灰岩台地露出海面的部分，地势极低平，多喀斯特天坑、地下河和大泉；沿岸有障壁岛（USGS / 佛州地质调查）",
};

const CHIHUAHUAN_DESERT_US: TerrainEntry = {
  id: "chihuahuan-desert-us",
  nameZh: "奇瓦瓦沙漠",
  nameEn: "Chihuahuan Desert",
  category: "desert",
  regionId: "north-america",
  country: "usa",
  landmark: { name: "白沙（石膏沙丘）", lon: -106.1746, lat: 32.7872, elevation: 1200, kind: "dune" },
  bbox: [-107.8, 28.8, -102.8, 34.2],
  axis: [[-106.8, 29.2], [-103.5, 33.8]],
  viewFrom: 200,
  label: { lon: -105.0, lat: 31.5, rotation: 0 },
  source: "奇瓦瓦沙漠：北美按面积最大的荒漠，主体在墨西哥，美国部分在西得州、新墨西哥南部和亚利桑那东南；海拔较高的雨影荒漠，以丝兰和沙漠灌丛为主（NPS）。此条目取美国部分",
};

// ============================================================
// 北美洲 — 加拿大（regionId: "north-america", country: "canada"）
// 坐标 / 高程据 Natural Resources Canada、Parks Canada、The Canadian Encyclopedia
// ============================================================

const CANADIAN_SHIELD: TerrainEntry = {
  id: "canadian-shield",
  nameZh: "加拿大地盾",
  nameEn: "Canadian Shield",
  category: "plateau",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "苏必利尔湖北岸（地盾出露）", lon: -87.0, lat: 48.7, elevation: 300, kind: "escarpment" },
  bbox: [-102.0, 46.0, -66.0, 63.0],
  axis: [[-95.0, 48.0], [-72.0, 60.0]],
  viewFrom: 200,
  label: { lon: -85.0, lat: 52.0, rotation: 0 },
  source: "加拿大地盾：环绕哈得孙湾的一大片前寒武纪结晶岩，约占加拿大面积一半；被冰川刨蚀成低缓、湖沼密布的古老岩石地形（Natural Resources Canada）",
};

const CANADIAN_ROCKIES: TerrainEntry = {
  id: "canadian-rockies",
  nameZh: "加拿大落基山脉",
  nameEn: "Canadian Rockies",
  category: "mountain_system",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "罗布森山", lon: -119.156, lat: 53.111, elevation: 3954, kind: "peak" },
  bbox: [-120.0, 49.0, -114.0, 54.5],
  axis: [[-114.8, 49.2], [-119.5, 54.2]],
  viewFrom: 90,
  label: { lon: -116.5, lat: 51.5, rotation: -70 },
  pois: [
    { name: "罗布森山", lon: -119.156, lat: 53.111, note: "加拿大落基山脉最高峰，海拔3954m" },
    { name: "哥伦比亚冰原", lon: -117.26, lat: 52.15, note: "落基山脉最大的冰原，是三大洋分水的水源" },
    { name: "路易斯湖", lon: -116.22, lat: 51.42, note: "冰川作用形成的湖，班夫国家公园" },
  ],
  source: "加拿大落基山脉：落基山系在加拿大不列颠哥伦比亚和艾伯塔的一段，以沉积岩层理和大型冰原著称；含班夫、贾斯珀等国家公园（Parks Canada）",
};

const COAST_MOUNTAINS: TerrainEntry = {
  id: "coast-mountains",
  nameZh: "海岸山脉",
  nameEn: "Coast Mountains",
  category: "mountain_system",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "沃丁顿山", lon: -125.263, lat: 51.373, elevation: 4019, kind: "peak" },
  bbox: [-132.0, 48.5, -122.0, 60.0],
  axis: [[-123.0, 49.0], [-131.0, 59.5]],
  viewFrom: 270,
  label: { lon: -127.0, lat: 54.0, rotation: -80 },
  pois: [
    { name: "沃丁顿山", lon: -125.263, lat: 51.373, note: "完全在不列颠哥伦比亚境内的最高峰，海拔4019m" },
  ],
  source: "海岸山脉：沿北美太平洋岸从不列颠哥伦比亚南部延伸到阿拉斯加边界约1600km，多深切的峡湾和大量冰川（Natural Resources Canada）",
};

const SAINT_ELIAS_MOUNTAINS: TerrainEntry = {
  id: "saint-elias-mountains",
  nameZh: "圣伊莱亚斯山脉",
  nameEn: "Saint Elias Mountains",
  category: "mountain_system",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "洛根山", lon: -140.405, lat: 60.567, elevation: 5959, kind: "peak" },
  bbox: [-142.5, 59.3, -136.5, 62.2],
  axis: [[-141.5, 59.8], [-137.5, 61.8]],
  viewFrom: 200,
  label: { lon: -139.5, lat: 60.6, rotation: -20 },
  pois: [
    { name: "洛根山", lon: -140.405, lat: 60.567, note: "加拿大最高峰，海拔5959m；山体基座周长很大" },
  ],
  source: "圣伊莱亚斯山脉：育空西南与阿拉斯加交界，含加拿大最高峰洛根山（5959m）和非极地地区最大的一片冰原（克卢恩国家公园，世界自然遗产）",
};

const TORNGAT_MOUNTAINS: TerrainEntry = {
  id: "torngat-mountains",
  nameZh: "托恩加特山脉",
  nameEn: "Torngat Mountains",
  category: "mountain_system",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "考布维克山（伊贝维尔峰）", lon: -63.724, lat: 58.873, elevation: 1652, kind: "peak" },
  bbox: [-65.5, 57.5, -62.5, 60.4],
  axis: [[-64.5, 57.8], [-63.0, 60.2]],
  viewFrom: 90,
  label: { lon: -63.8, lat: 59.2, rotation: -75 },
  source: "托恩加特山脉：拉布拉多半岛北端、纽芬兰与拉布拉多和魁北克交界，加拿大大陆东部最高的山地；由古老地盾岩石构成，被冰川刻出峡湾和角峰（Parks Canada）",
};

const LONG_RANGE_MOUNTAINS: TerrainEntry = {
  id: "long-range-mountains",
  nameZh: "长岭山脉",
  nameEn: "Long Range Mountains",
  category: "mountain_system",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "台地山（格罗莫讷）", lon: -57.960, lat: 49.473, elevation: 700, kind: "escarpment" },
  bbox: [-58.7, 47.5, -56.3, 51.5],
  axis: [[-57.5, 47.8], [-57.5, 51.3]],
  viewFrom: 90,
  label: { lon: -57.6, lat: 49.6, rotation: -84 },
  pois: [
    { name: "台地山", lon: -57.960, lat: 49.473, note: "格罗莫讷国家公园；地表出露的是本应在地下几十公里深的地幔橄榄岩" },
    { name: "西布鲁克塘峡湾", lon: -57.83, lat: 49.55, note: "被冰川刻出、后与海隔断的内陆峡湾式湖" },
  ],
  source: "长岭山脉：纽芬兰岛西缘的阿巴拉契亚山脉北端；格罗莫讷国家公园因出露的地幔岩和峡湾式湖被列为世界自然遗产（Parks Canada）",
};

const INTERIOR_PLAINS_CA: TerrainEntry = {
  id: "interior-plains-ca",
  nameZh: "加拿大内陆平原",
  nameEn: "Interior Plains",
  category: "plain",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "萨斯喀彻温省麦田带", lon: -106.0, lat: 51.5, elevation: 500, kind: "grassland" },
  bbox: [-114.0, 49.0, -97.0, 60.0],
  axis: [[-106.0, 49.2], [-116.0, 60.0]],
  viewFrom: 90,
  label: { lon: -106.0, lat: 52.5, rotation: -80 },
  source: "加拿大内陆平原：落基山脉与加拿大地盾之间的沉积岩平原，南部是草原三省的“大草原”，向北进入北方森林和马更些低地（Natural Resources Canada）",
};

const HUDSON_BAY_LOWLANDS: TerrainEntry = {
  id: "hudson-bay-lowlands",
  nameZh: "哈得孙湾低地",
  nameEn: "Hudson Bay Lowlands",
  category: "plain",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "波拉尔贝尔（丘吉尔一带）", lon: -85.0, lat: 54.5, elevation: 60, kind: "grassland" },
  bbox: [-92.5, 51.0, -78.0, 59.0],
  axis: [[-90.0, 51.5], [-80.0, 58.0]],
  viewFrom: 200,
  label: { lon: -85.0, lat: 54.5, rotation: 0 },
  source: "哈得孙湾低地：环哈得孙湾南岸的一片极平坦的沼泽平原，是世界上最大的连续湿地之一；因冰盖融化后地面持续回弹而不断加宽（Natural Resources Canada）",
};

const SAINT_LAWRENCE_LOWLANDS: TerrainEntry = {
  id: "saint-lawrence-lowlands",
  nameZh: "圣劳伦斯低地",
  nameEn: "St. Lawrence Lowlands",
  category: "plain",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "蒙特利尔平原", lon: -73.55, lat: 45.5, elevation: 30, kind: "grassland" },
  bbox: [-79.5, 43.5, -70.0, 47.5],
  axis: [[-79.0, 43.7], [-71.0, 47.2]],
  viewFrom: 200,
  label: { lon: -74.5, lat: 45.7, rotation: -30 },
  source: "圣劳伦斯低地：五大湖与圣劳伦斯河之间一条狭长的低平沉积岩谷地，是加拿大人口最密集、农业最集中的地带之一（Natural Resources Canada）",
};

const GREAT_SLAVE_LAKE: TerrainEntry = {
  id: "great-slave-lake",
  nameZh: "大奴湖",
  nameEn: "Great Slave Lake",
  category: "lake",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "大奴湖东臂", lon: -111.0, lat: 62.5, elevation: 156, kind: "lake" },
  bbox: [-117.5, 60.8, -108.5, 63.2],
  axis: [[-116.5, 61.3], [-109.5, 62.9]],
  viewFrom: 200,
  label: { lon: -113.5, lat: 62.0, rotation: 0 },
  source: "大奴湖：北美最深的湖（最深约614m）；西半部在沉积岩上、较浅，东臂切进加拿大地盾、又深又多岛，是马更些河的源头之一（Natural Resources Canada）",
};

const GREAT_BEAR_LAKE: TerrainEntry = {
  id: "great-bear-lake",
  nameZh: "大熊湖",
  nameEn: "Great Bear Lake",
  category: "lake",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "大熊湖", lon: -120.8, lat: 65.9, elevation: 186, kind: "lake" },
  bbox: [-125.5, 64.7, -117.0, 67.2],
  axis: [[-124.5, 65.2], [-118.5, 66.8]],
  viewFrom: 200,
  label: { lon: -121.0, lat: 65.9, rotation: 0 },
  source: "大熊湖：完全在加拿大境内的最大湖，横跨北极圈；湖盆一半在地盾、一半在沉积岩上，一年中大部分时间封冻（Natural Resources Canada）",
};

const MACKENZIE_RIVER: TerrainEntry = {
  id: "mackenzie-river",
  nameZh: "马更些河",
  nameEn: "Mackenzie River",
  category: "river",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "马更些河三角洲", lon: -134.8, lat: 68.7, elevation: 5, kind: "delta" },
  bbox: [-136.0, 61.0, -116.0, 69.5],
  axis: [[-117.0, 61.5], [-134.5, 68.9]],
  viewFrom: 90,
  label: { lon: -125.0, lat: 65.0, rotation: -60 },
  source: "马更些河：加拿大最长的河（连同上源约4200km），从大奴湖流向北冰洋波弗特海；下游是北美最大的北极三角洲之一，冬季长期封冻（Natural Resources Canada）",
};

const HUDSON_BAY: TerrainEntry = {
  id: "hudson-bay",
  nameZh: "哈得孙湾",
  nameEn: "Hudson Bay",
  category: "coast",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "哈得孙湾中部", lon: -85.0, lat: 59.0, elevation: 0, kind: "escarpment" },
  bbox: [-95.0, 51.0, -76.0, 64.0],
  axis: [[-90.0, 52.0], [-80.0, 63.0]],
  viewFrom: 200,
  label: { lon: -85.0, lat: 59.0, rotation: 0 },
  source: "哈得孙湾：坐落在加拿大地盾中央凹陷里的一片巨大、很浅的内海，通过哈得孙海峡与大西洋相连；曾被冰盖压低，如今周边地面正快速回弹（Natural Resources Canada）",
};

const BAFFIN_ISLAND: TerrainEntry = {
  id: "baffin-island",
  nameZh: "巴芬岛",
  nameEn: "Baffin Island",
  category: "island",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "奥丁山（奥尤伊图克国家公园）", lon: -65.35, lat: 67.05, elevation: 2143, kind: "peak" },
  bbox: [-83.0, 61.0, -61.0, 74.0],
  axis: [[-79.0, 62.0], [-63.0, 73.0]],
  viewFrom: 90,
  label: { lon: -70.0, lat: 68.0, rotation: -40 },
  source: "巴芬岛：加拿大最大、世界第五大岛；东缘是地盾岩石构成的高山，有花岗岩大崖壁、峡湾和冰帽，西侧是低平的地台（Natural Resources Canada）",
};

const ELLESMERE_ISLAND: TerrainEntry = {
  id: "ellesmere-island",
  nameZh: "埃尔斯米尔岛",
  nameEn: "Ellesmere Island",
  category: "island",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "巴伯峰（库蒂尼尔帕克国家公园）", lon: -75.9, lat: 81.9, elevation: 2616, kind: "peak" },
  bbox: [-90.0, 76.0, -60.0, 83.5],
  axis: [[-85.0, 77.0], [-65.0, 82.5]],
  viewFrom: 200,
  label: { lon: -78.0, lat: 80.0, rotation: 0 },
  source: "埃尔斯米尔岛：加拿大最北的大岛，世界第十大岛；含加拿大东部最高峰巴伯峰（2616m）和大片冰帽，是极地荒漠（几乎不降水）（Parks Canada）",
};

const VANCOUVER_ISLAND: TerrainEntry = {
  id: "vancouver-island",
  nameZh: "温哥华岛",
  nameEn: "Vancouver Island",
  category: "island",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "金背山（斯特拉思科纳省立公园）", lon: -125.75, lat: 49.66, elevation: 2195, kind: "peak" },
  bbox: [-128.5, 48.3, -123.0, 51.1],
  axis: [[-123.5, 48.5], [-128.0, 50.9]],
  viewFrom: 270,
  label: { lon: -125.5, lat: 49.7, rotation: -55 },
  source: "温哥华岛：不列颠哥伦比亚外海的大岛，山脊纵贯全岛，西岸多峡湾和温带雨林，东岸较平缓，省会维多利亚在南端（Natural Resources Canada）",
};

const PRINCE_EDWARD_ISLAND: TerrainEntry = {
  id: "prince-edward-island",
  nameZh: "爱德华王子岛",
  nameEn: "Prince Edward Island",
  category: "island",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "北岸沙丘（爱德华王子岛国家公园）", lon: -63.1, lat: 46.42, elevation: 10, kind: "dune" },
  bbox: [-64.5, 45.9, -62.0, 47.1],
  axis: [[-64.2, 46.2], [-62.2, 46.5]],
  viewScale: 1.5,
  label: { lon: -63.2, lat: 46.4, rotation: -20 },
  source: "爱德华王子岛：圣劳伦斯湾里一座低平的岛，加拿大面积最小的省；基岩是红色砂岩，岸边有红土崖、沙嘴和沙丘（Natural Resources Canada）",
};

const BAY_OF_FUNDY: TerrainEntry = {
  id: "bay-of-fundy",
  nameZh: "芬迪湾",
  nameEn: "Bay of Fundy",
  category: "coast",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "霍普韦尔礁石（米纳斯湾一侧）", lon: -64.58, lat: 45.82, elevation: 0, kind: "escarpment" },
  bbox: [-67.2, 44.5, -63.3, 46.2],
  axis: [[-67.0, 44.7], [-63.7, 46.0]],
  viewFrom: 200,
  label: { lon: -65.5, lat: 45.3, rotation: -35 },
  source: "芬迪湾：新斯科舍与新不伦瑞克之间的漏斗形海湾，潮差在湾顶米纳斯湾可达约16m，是世界上最大的潮差之一（Natural Resources Canada / 加拿大海洋局）",
};

const GASPE_PENINSULA: TerrainEntry = {
  id: "gaspe-peninsula",
  nameZh: "加斯佩半岛",
  nameEn: "Gaspé Peninsula",
  category: "coast",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "佩尔塞岩", lon: -64.212, lat: 48.523, elevation: 0, kind: "escarpment" },
  bbox: [-67.5, 48.0, -64.0, 49.4],
  axis: [[-67.2, 48.3], [-64.2, 49.0]],
  viewFrom: 20,
  label: { lon: -65.7, lat: 48.7, rotation: -20 },
  pois: [
    { name: "佩尔塞岩", lon: -64.212, lat: 48.523, note: "一整块带天然拱门的石灰岩海蚀柱" },
    { name: "希克-乔克山（雅克-卡蒂埃山）", lon: -65.94, lat: 48.99, note: "阿巴拉契亚山脉在加拿大的最高点之一，1268m" },
  ],
  source: "加斯佩半岛：魁北克东端伸入圣劳伦斯湾的半岛，是阿巴拉契亚山脉的北端；海岸多断崖，佩尔塞岩是标志（Parks Canada / 魁北克）",
};

const NIAGARA_ESCARPMENT: TerrainEntry = {
  id: "niagara-escarpment",
  nameZh: "尼亚加拉断崖",
  nameEn: "Niagara Escarpment",
  category: "hills",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "尼亚加拉瀑布", lon: -79.0747, lat: 43.0828, elevation: 100, kind: "escarpment" },
  bbox: [-84.0, 43.0, -78.0, 46.3],
  axis: [[-79.0, 43.1], [-82.0, 46.0]],
  viewFrom: 110,
  label: { lon: -80.5, lat: 44.5, rotation: -55 },
  pois: [
    { name: "尼亚加拉瀑布", lon: -79.0747, lat: 43.0828, note: "河水从坚硬的白云岩崖顶跌下断崖" },
    { name: "布鲁斯半岛", lon: -81.5, lat: 45.2, note: "断崖伸进休伦湖的一段，两侧水色不同" },
  ],
  source: "尼亚加拉断崖：一条长约725km的单面山（cuesta），从尼亚加拉延伸到布鲁斯半岛和马尼图林岛；坚硬的白云岩“帽岩”托住崖顶，尼亚加拉瀑布就跌落在这条崖上（联合国教科文组织生物圈保护区）",
};

const ALBERTA_BADLANDS: TerrainEntry = {
  id: "alberta-badlands",
  nameZh: "艾伯塔荒地",
  nameEn: "Alberta Badlands",
  category: "hills",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "恐龙省立公园（红鹿河谷）", lon: -111.49, lat: 50.76, elevation: 700, kind: "escarpment" },
  bbox: [-113.5, 49.7, -110.0, 51.7],
  axis: [[-112.5, 50.0], [-110.5, 51.5]],
  viewScale: 1.5,
  label: { lon: -111.5, lat: 50.8, rotation: 0 },
  source: "艾伯塔荒地：草原平原被红鹿河及其支流切出的一带侵蚀沟壑地，出露晚白垩世岩层，是世界上最丰富的恐龙化石产地之一（恐龙省立公园为世界自然遗产）",
};

const MANICOUAGAN_RESERVOIR: TerrainEntry = {
  id: "manicouagan-reservoir",
  nameZh: "曼尼古根环形湖",
  nameEn: "Manicouagan Reservoir",
  category: "lake",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "勒内-勒瓦瑟尔岛", lon: -68.72, lat: 51.38, elevation: 350, kind: "lake" },
  bbox: [-69.5, 50.6, -68.0, 52.1],
  axis: [[-69.2, 50.8], [-68.3, 51.9]],
  viewScale: 1.4,
  label: { lon: -68.7, lat: 51.4, rotation: 0 },
  source: "曼尼古根环形湖（“魁北克之眼”）：约2.14亿年前一次大陨石撞击留下的环形构造，被水库淹没后呈标志性的环状湖，中央是勒内-勒瓦瑟尔岛（加拿大地质调查局）",
};

const ATHABASCA_SAND_DUNES: TerrainEntry = {
  id: "athabasca-sand-dunes",
  nameZh: "阿萨巴斯卡沙丘",
  nameEn: "Athabasca Sand Dunes",
  category: "desert",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "威廉河沙丘", lon: -108.9, lat: 59.28, elevation: 220, kind: "dune" },
  bbox: [-110.2, 59.0, -107.5, 59.6],
  axis: [[-109.8, 59.1], [-108.0, 59.4]],
  viewScale: 1.4,
  label: { lon: -108.9, lat: 59.3, rotation: 0 },
  source: "阿萨巴斯卡沙丘：萨斯喀彻温省阿萨巴斯卡湖南岸约100km的活动沙丘带，是世界上纬度最高的大型活动沙丘；沙来自冰期湖相沉积（萨斯喀彻温省立公园）",
};

const LAKE_WINNIPEG: TerrainEntry = {
  id: "lake-winnipeg",
  nameZh: "温尼伯湖",
  nameEn: "Lake Winnipeg",
  category: "lake",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "温尼伯湖", lon: -97.2, lat: 52.1, elevation: 217, kind: "lake" },
  bbox: [-99.5, 50.3, -96.0, 54.0],
  axis: [[-98.3, 50.6], [-97.2, 53.8]],
  viewFrom: 90,
  label: { lon: -97.5, lat: 52.3, rotation: -78 },
  source: "温尼伯湖：曼尼托巴省一片面积很大但很浅的湖（平均水深约12m），是冰期巨大的阿加西湖的残留；纳凯湖东岸是地盾、西岸是平原（Natural Resources Canada）",
};

const NAHANNI: TerrainEntry = {
  id: "nahanni",
  nameZh: "南纳汉尼河峡谷",
  nameEn: "Nahanni Canyons",
  category: "gorge",
  regionId: "north-america",
  country: "canada",
  landmark: { name: "弗吉尼亚瀑布（纳伊利乔）", lon: -125.755, lat: 61.603, elevation: 500, kind: "gorge" },
  bbox: [-127.5, 60.7, -123.0, 62.3],
  axis: [[-126.8, 61.0], [-123.5, 62.0]],
  viewFrom: 20,
  label: { lon: -125.5, lat: 61.6, rotation: -20 },
  pois: [
    { name: "弗吉尼亚瀑布", lon: -125.755, lat: 61.603, note: "南纳汉尼河上的大瀑布，落差约96m" },
    { name: "第一峡谷", lon: -124.5, lat: 61.3, note: "南纳汉尼河切穿山脉、深逾千米的峡谷" },
  ],
  source: "南纳汉尼河峡谷：南纳汉尼河横切马更些山脉切出的一系列深逾千米的峡谷，含落差约96m的弗吉尼亚瀑布；纳汉尼国家公园保护区是1978年首批世界自然遗产之一（Parks Canada）",
};

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
    { name: "埃格蒙特国家公园圆形边界", lon: 174.09, lat: -39.30, note: "1881年沿距峰顶约9.6km画的近乎正圆的森林保护线，空中看林、牧分明" },
  ],
  source: "塔拉纳基山：近乎对称的安山质层状火山，2518m；官方名2025年定为Taranaki Maunga（此前作Mount Taranaki或Mount Egmont）（GNS Science / DOC / LINZ）",
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
  nameEn: "Snowdonia / Eryri",
  category: "mountain_system",
  regionId: "europe",
  country: "uk",
  landmark: { name: "斯诺登峰（Yr Wyddfa / Snowdon）", lon: -4.0765, lat: 53.0685, elevation: 1085, kind: "peak" },
  bbox: [-4.35, 52.75, -3.75, 53.20],
  axis: [[-4.15, 52.85], [-3.85, 53.15]],
  viewFrom: 90,
  viewScale: 1.5,
  label: { lon: -4.05, lat: 53.05, rotation: -50 },
  source: "斯诺登尼亚 / Eryri：威尔士西北部，寒武纪—奥陶纪沉积岩与火山岩强烈冰蚀的山地；斯诺登峰1085m 为威尔士暨英格兰-威尔士最高峰（BGS / Natural Resources Wales）",
};

const BRECON_BEACONS: TerrainEntry = {
  id: "brecon-beacons",
  nameZh: "布雷肯比肯斯",
  nameEn: "Brecon Beacons / Bannau Brycheiniog",
  category: "hills",
  regionId: "europe",
  country: "uk",
  landmark: { name: "彭伊范山（Pen y Fan）", lon: -3.4360, lat: 51.8842, elevation: 886, kind: "escarpment" },
  bbox: [-3.9, 51.75, -3.0, 52.05],
  axis: [[-3.8, 51.90], [-3.1, 51.88]],
  viewFrom: 180,
  viewScale: 1.6,
  label: { lon: -3.44, lat: 51.90, rotation: -6 },
  source: "布雷肯比肯斯 / Bannau Brycheiniog：南威尔士的老红砂岩（泥盆纪）陡崖，北坡有冰蚀凹地；彭伊范山886m 为南不列颠最高点；国际暗夜保护区（Natural Resources Wales / BGS）",
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
  source: "高尔半岛：斯旺西以西的小半岛，1956年成为英国第一个“杰出自然风景区”；石炭纪石灰岩海崖 + 老红砂岩山脊 + 罗西利大沙湾（Natural Resources Wales）",
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

// ============================================================
// 冰岛（regionId: "europe"，country: "iceland"）
// 坐标据 Icelandic Meteorological Office（Veðurstofa Íslands）/
// National Land Survey of Iceland / Institute of Earth Sciences /
// Vatnajökull National Park / UNESCO
// ============================================================

const HEKLA: TerrainEntry = {
  id: "hekla",
  nameZh: "海克拉火山",
  nameEn: "Hekla",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "海克拉主脊", lon: -19.667, lat: 63.983, elevation: 1491, kind: "peak" },
  bbox: [-19.85, 63.88, -19.45, 64.08],
  axis: [[-19.78, 63.90], [-19.55, 64.05]],
  viewFrom: 200,
  label: { lon: -19.67, lat: 63.98, rotation: -35 },
  source: "海克拉：冰岛最活跃的火山之一，一座沿裂隙发育的脊状层状火山（约1491m）；1104年以来多次喷发，中世纪欧洲称之为“地狱之门”（Icelandic Meteorological Office）",
};

const KATLA: TerrainEntry = {
  id: "katla",
  nameZh: "卡特拉火山",
  nameEn: "Katla",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "卡特拉破火山口（米尔达斯冰盖下）", lon: -19.05, lat: 63.63, elevation: 1490, kind: "escarpment" },
  bbox: [-19.30, 63.50, -18.75, 63.75],
  label: { lon: -19.05, lat: 63.63, rotation: 0 },
  source: "卡特拉：位于米尔达斯冰盖之下的大型破火山口（直径约10km），冰下爆发常引发巨大的冰川洪水（jökulhlaup）；上一次大喷发在1918年（Icelandic Meteorological Office）",
};

const EYJAFJALLAJOKULL: TerrainEntry = {
  id: "eyjafjallajokull",
  nameZh: "埃亚菲亚德拉冰盖火山",
  nameEn: "Eyjafjallajökull",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "埃亚菲亚德拉冰盖火山顶", lon: -19.613, lat: 63.633, elevation: 1651, kind: "peak" },
  bbox: [-19.80, 63.55, -19.42, 63.70],
  label: { lon: -19.61, lat: 63.63, rotation: 0 },
  source: "埃亚菲亚德拉冰盖火山：冰帽覆盖的层状火山（约1651m）；2010年4—5月的喷发产生大量细火山灰，加上盛行风向，一度使欧洲大部分空域关闭数日（Icelandic Meteorological Office）",
};

const GRIMSVOTN: TerrainEntry = {
  id: "grimsvotn",
  nameZh: "格里姆火山",
  nameEn: "Grímsvötn",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "格里姆火山冰下湖（瓦特纳冰原西北）", lon: -17.33, lat: 64.42, elevation: 1725, kind: "escarpment" },
  bbox: [-17.60, 64.32, -17.05, 64.52],
  label: { lon: -17.33, lat: 64.42, rotation: 0 },
  source: "格里姆火山：瓦特纳冰原西北部冰下的破火山口，是冰岛喷发最频繁的火山；冰下湖会周期性溃决、沿斯凯扎拉河形成冰川洪水（Icelandic Meteorological Office / Vatnajökull NP）",
};

const FAGRADALSFJALL: TerrainEntry = {
  id: "fagradalsfjall",
  nameZh: "法格拉达尔火山",
  nameEn: "Fagradalsfjall",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "法格拉达尔火山（雷克雅内斯半岛）", lon: -22.27, lat: 63.90, elevation: 385, kind: "peak" },
  bbox: [-22.42, 63.83, -22.10, 63.97],
  label: { lon: -22.27, lat: 63.90, rotation: 0 },
  source: "法格拉达尔火山：雷克雅内斯半岛沉寂约800年后于2021、2022、2023年发生的一系列以熔岩溢流为主的裂隙喷发地点；标志雷克雅内斯进入新的活动期（Icelandic Meteorological Office）",
};

const SNAEFELLSJOKULL: TerrainEntry = {
  id: "snaefellsjokull",
  nameZh: "斯奈山冰川火山",
  nameEn: "Snæfellsjökull",
  category: "mountain_system",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "斯奈山冰川火山顶", lon: -23.767, lat: 64.808, elevation: 1446, kind: "peak" },
  bbox: [-23.95, 64.72, -23.55, 64.88],
  label: { lon: -23.77, lat: 64.81, rotation: 0 },
  source: "斯奈山冰川火山：斯奈山半岛尖端一座约70万年、冰帽覆盖的层状火山（约1446m），上一次喷发约在1800年前；儒勒·凡尔纳《地心游记》的入口；斯奈山国家公园（Icelandic Met Office / 环境署）",
};

const ASKJA: TerrainEntry = {
  id: "askja",
  nameZh: "阿斯基亚破火山口",
  nameEn: "Askja",
  category: "basin",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "厄斯丘湖（Öskjuvatn）", lon: -16.75, lat: 65.03, elevation: 1050, kind: "lake" },
  bbox: [-16.95, 64.92, -16.55, 65.12],
  viewScale: 1.5,
  label: { lon: -16.75, lat: 65.03, rotation: 0 },
  source: "阿斯基亚：中部高地丁久山（Dyngjufjöll）里的破火山口群；1875年喷发的火山灰迫使冰岛东北部大量居民外迁；口内的厄斯丘湖是冰岛最深的湖，NASA 阿波罗宇航员曾在此训练（Institute of Earth Sciences）",
};

const THINGVELLIR: TerrainEntry = {
  id: "thingvellir",
  nameZh: "辛格维利尔",
  nameEn: "Þingvellir",
  category: "valley",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "阿尔曼纳陷谷（Almannagjá）", lon: -21.128, lat: 64.256, elevation: 110, kind: "gorge" },
  bbox: [-21.30, 64.10, -20.95, 64.40],
  axis: [[-21.15, 64.10], [-21.10, 64.40]],
  viewScale: 1.5,
  label: { lon: -21.13, lat: 64.28, rotation: 0 },
  pois: [
    { name: "辛格瓦德拉湖（Þingvallavatn）", lon: -21.10, lat: 64.18, note: "冰岛最大的天然湖" },
  ],
  source: "辛格维利尔：北美与欧亚两大板块拉张、地壳下陷形成的地堑（裂谷）；930年起在此召开“阿尔庭”议会——世界现存最古老的议会之一；世界文化遗产（UNESCO / Þingvellir NP）",
};

const VATNAJOKULL: TerrainEntry = {
  id: "vatnajokull",
  nameZh: "瓦特纳冰原",
  nameEn: "Vatnajökull",
  category: "plateau",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "华纳达尔斯赫努克（Hvannadalshnúkur，冰原南缘）", lon: -16.678, lat: 64.016, elevation: 2110, kind: "peak" },
  bbox: [-18.60, 63.85, -15.30, 64.95],
  viewScale: 2.5,
  label: { lon: -17.0, lat: 64.4, rotation: 0 },
  pois: [
    { name: "冰河湖（Breiðárlón / 布雷达默克冰舌）", lon: -16.30, lat: 64.10, note: "南缘退缩的冰舌前形成的冰河湖" },
  ],
  source: "瓦特纳冰原：冰岛最大、按体积计欧洲最大的冰帽，约7700km²（占冰岛约8%），最厚近1km；冰下有多座活火山，南缘华纳达尔斯赫努克2110m 为冰岛最高点；世界遗产（UNESCO / Vatnajökull NP）",
};

const LANGJOKULL: TerrainEntry = {
  id: "langjokull",
  nameZh: "朗格冰原",
  nameEn: "Langjökull",
  category: "plateau",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "朗格冰原（西部高地）", lon: -20.00, lat: 64.65, elevation: 1300, kind: "escarpment" },
  bbox: [-20.60, 64.38, -19.35, 64.92],
  viewScale: 1.8,
  label: { lon: -20.00, lat: 64.65, rotation: 0 },
  source: "朗格冰原：冰岛第二大冰帽（约900km²），位于西部高地，形态较平缓；融水补给辛格瓦德拉湖的地下泉、以及经黄金瀑布下泄的白河（Hvítá）；近年退缩很快（Institute of Earth Sciences）",
};

const HOFSJOKULL: TerrainEntry = {
  id: "hofsjokull",
  nameZh: "霍夫斯冰原",
  nameEn: "Hofsjökull",
  category: "plateau",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "霍夫斯冰原（冰岛中部）", lon: -18.80, lat: 64.80, elevation: 1600, kind: "escarpment" },
  bbox: [-19.30, 64.60, -18.30, 65.02],
  viewScale: 1.7,
  label: { lon: -18.80, lat: 64.80, rotation: 0 },
  source: "霍夫斯冰原：冰岛第三大冰帽（约800km²），盾状，冰下藏着一个大型活动破火山口；冰岛最长的河雷神河（Þjórsá）和布兰达河都发源于此；大致位于冰岛地理中心（Institute of Earth Sciences）",
};

const MYRDALSJOKULL: TerrainEntry = {
  id: "myrdalsjokull",
  nameZh: "米尔达斯冰盖",
  nameEn: "Mýrdalsjökull",
  category: "plateau",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "米尔达斯冰盖", lon: -19.10, lat: 63.65, elevation: 1450, kind: "escarpment" },
  bbox: [-19.55, 63.48, -18.70, 63.82],
  viewScale: 1.5,
  label: { lon: -19.10, lat: 63.65, rotation: 0 },
  pois: [
    { name: "索尔海马冰舌（Sólheimajökull）", lon: -19.37, lat: 63.53, note: "西南缘的出口冰川，近几十年退缩数百米" },
  ],
  source: "米尔达斯冰盖：冰岛第四大冰帽（约590km²），直接盖在卡特拉火山之上；西南缘的索尔海马冰舌是热门的冰川徒步点、退缩明显（Icelandic Met Office）",
};

const SKEIDARARSANDUR: TerrainEntry = {
  id: "skeidararsandur",
  nameZh: "斯凯扎拉桑德",
  nameEn: "Skeiðarársandur",
  category: "plain",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "斯凯扎拉桑德（斯凯扎拉冰舌与海之间）", lon: -17.50, lat: 63.95, elevation: 20, kind: "delta" },
  bbox: [-18.20, 63.78, -16.90, 64.12],
  viewScale: 2.2,
  label: { lon: -17.50, lat: 63.95, rotation: 0 },
  source: "斯凯扎拉桑德：世界上最大的冰川外冲平原（sandur），约1000km²，由辫状冰川河和格里姆火山的冰川洪水堆积；1996年的特大冰川洪水冲毁了这里环岛公路的多座桥梁（Vatnajökull NP / Icelandic Met Office）",
};

const JOKULSARLON: TerrainEntry = {
  id: "jokulsarlon",
  nameZh: "杰古沙龙冰河湖",
  nameEn: "Jökulsárlón",
  category: "lake",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "杰古沙龙冰河湖", lon: -16.180, lat: 64.048, elevation: 5, kind: "lake" },
  bbox: [-16.35, 63.95, -16.00, 64.13],
  label: { lon: -16.18, lat: 64.05, rotation: 0 },
  pois: [
    { name: "钻石冰沙滩（Breiðamerkursandur）", lon: -16.23, lat: 64.03, note: "冰山碎块被冲上黑沙滩" },
  ],
  source: "杰古沙龙冰河湖：瓦特纳冰原布雷达默克冰舌退缩后、约1935年起形成并快速扩大的冰前湖；现为冰岛最深的湖（约248m），与海相通，冰山从湖里漂向大海（Vatnajökull NP）",
};

const LAKI: TerrainEntry = {
  id: "laki",
  nameZh: "拉基火山口列",
  nameEn: "Laki / Lakagígar",
  category: "hills",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "拉基火山口列", lon: -18.230, lat: 64.070, elevation: 800, kind: "escarpment" },
  bbox: [-18.55, 63.92, -17.95, 64.22],
  axis: [[-18.45, 63.95], [-18.05, 64.20]],
  viewScale: 1.6,
  label: { lon: -18.23, lat: 64.07, rotation: -35 },
  source: "拉基火山口列（Lakagígar）：1783—84年沿约25km裂隙喷发形成的约130个火山口，是有记载以来最大的玄武质熔岩喷发之一；释放的气体导致牲畜大批死亡和随后的大饥荒（“迷雾之灾”）（Institute of Earth Sciences）",
};

const GULLFOSS: TerrainEntry = {
  id: "gullfoss",
  nameZh: "黄金瀑布",
  nameEn: "Gullfoss",
  category: "gorge",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "黄金瀑布", lon: -20.123, lat: 64.327, elevation: 100, kind: "gorge" },
  bbox: [-20.22, 64.29, -20.02, 64.37],
  axis: [[-20.15, 64.30], [-20.08, 64.36]],
  label: { lon: -20.12, lat: 64.33, rotation: -30 },
  source: "黄金瀑布：白河（Hvítá，源自朗格冰原）分两级、成直角跌入古维斯河谷（Gullfossgljúfur）——一条冰期末冰川洪水冲刷、向上游后退切成的峡谷；20世纪初曾险被筑坝发电（National Land Survey of Iceland）",
};

const DETTIFOSS: TerrainEntry = {
  id: "dettifoss",
  nameZh: "黛提瀑布",
  nameEn: "Dettifoss",
  category: "gorge",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "黛提瀑布", lon: -16.385, lat: 65.815, elevation: 330, kind: "gorge" },
  bbox: [-16.48, 65.78, -16.30, 65.86],
  axis: [[-16.40, 65.80], [-16.37, 65.84]],
  label: { lon: -16.385, lat: 65.815, rotation: 0 },
  source: "黛提瀑布：菲厄德尔冰川河（Jökulsá á Fjöllum，源自瓦特纳冰原）上、宽约100m、落差约44m 的瀑布，按平均流量是冰岛最大、常被列为欧洲最强的瀑布之一（Vatnajökull NP）",
};

const JOKULSARGLJUFUR: TerrainEntry = {
  id: "jokulsargljufur",
  nameZh: "约克尔萨峡谷",
  nameEn: "Jökulsárgljúfur",
  category: "gorge",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "阿斯比吉马蹄形峡谷（Ásbyrgi）", lon: -16.510, lat: 66.020, elevation: 60, kind: "gorge" },
  bbox: [-16.62, 65.80, -16.35, 66.10],
  axis: [[-16.42, 65.82], [-16.52, 66.08]],
  viewScale: 1.6,
  label: { lon: -16.52, lat: 65.95, rotation: -70 },
  source: "约克尔萨峡谷：菲厄德尔冰川河下切的峡谷，长约25km、深达约100m；主要由全新世多次冰下喷发引发的特大冰川洪水冲刷而成；北端的阿斯比吉是一处马蹄形的天然峡湾（Vatnajökull NP）",
};

const SKOGAFOSS: TerrainEntry = {
  id: "skogafoss",
  nameZh: "斯科加瀑布",
  nameEn: "Skógafoss",
  category: "gorge",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "斯科加瀑布", lon: -19.511, lat: 63.532, elevation: 60, kind: "escarpment" },
  bbox: [-19.58, 63.50, -19.44, 63.57],
  label: { lon: -19.51, lat: 63.53, rotation: 0 },
  source: "斯科加瀑布：斯科加河从一道约60m高的陡崖跌下——这道横贯冰岛南部的陡崖是过去的海岸线，如今海岸已因陆地抬升和外冲平原向前推进而南移数公里（National Land Survey of Iceland）",
};

const HAUKADALUR_GEYSIR: TerrainEntry = {
  id: "haukadalur-geysir",
  nameZh: "盖歇尔间歇泉区",
  nameEn: "Haukadalur (Geysir)",
  category: "basin",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "斯特罗库尔间歇泉（Strokkur）", lon: -20.301, lat: 64.313, elevation: 110, kind: "escarpment" },
  bbox: [-20.35, 64.29, -20.25, 64.34],
  label: { lon: -20.30, lat: 64.313, rotation: 0 },
  source: "豪卡达鲁尔地热谷：含“大盖歇尔”（Geysir，英文 geyser 一词的词源，现基本休眠）和每5—10分钟喷发一次的斯特罗库尔；“黄金圈”景区之一（Institute of Earth Sciences）",
};

const KRAFLA: TerrainEntry = {
  id: "krafla",
  nameZh: "克拉夫拉火山",
  nameEn: "Krafla",
  category: "basin",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "维提火口与克拉夫拉破火山口", lon: -16.755, lat: 65.716, elevation: 500, kind: "escarpment" },
  bbox: [-16.95, 65.60, -16.55, 65.80],
  viewScale: 1.5,
  label: { lon: -16.76, lat: 65.72, rotation: 0 },
  source: "克拉夫拉火山：米湖附近一个直径约10km 的破火山口，附带一条裂隙带；1975—84年的“克拉夫拉之火”是九幕裂谷张裂-喷发，地面沿裂隙带累计拉开数米，是研究离散板块边界的经典地点（Icelandic Met Office / Institute of Earth Sciences）",
};

const MYVATN: TerrainEntry = {
  id: "myvatn",
  nameZh: "米湖",
  nameEn: "Mývatn",
  category: "lake",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "米湖（斯库图斯塔济尔假火山群一带）", lon: -17.03, lat: 65.57, elevation: 278, kind: "lake" },
  bbox: [-17.18, 65.50, -16.85, 65.70],
  viewScale: 1.5,
  label: { lon: -17.03, lat: 65.60, rotation: 0 },
  source: "米湖（Mývatn，意为“蚊虫之湖”）：约2300年前一次玄武岩熔岩流堵住河谷形成的浅水营养湖；湖畔的“假火山”是熔岩流过湿地时的蒸汽爆炸锥；水鸟种类居欧洲之首（Institute of Earth Sciences / 环境署）",
};

const REYKJANES_PENINSULA: TerrainEntry = {
  id: "reykjanes-peninsula",
  nameZh: "雷克雅内斯半岛",
  nameEn: "Reykjanes Peninsula",
  category: "coast",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "格纳胡佛地热区与瓦拉赫努克海崖（半岛西端）", lon: -22.68, lat: 63.82, elevation: 30, kind: "escarpment" },
  bbox: [-22.75, 63.78, -21.80, 64.08],
  axis: [[-22.70, 63.83], [-21.90, 64.00]],
  viewScale: 1.7,
  label: { lon: -22.3, lat: 63.9, rotation: -20 },
  source: "雷克雅内斯半岛：大西洋中脊在陆地上出露的唯一一段——一组雁行排列的裂隙带和年轻熔岩原；含斯瓦特森吉、克里苏维克等高温地热区、“大陆桥”步行桥；雷克雅内斯世界地质公园（Icelandic Met Office）",
};

const REYNISFJARA: TerrainEntry = {
  id: "reynisfjara",
  nameZh: "雷尼斯黑沙滩",
  nameEn: "Reynisfjara / Dyrhólaey",
  category: "coast",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "雷尼斯黑沙滩与柱状玄武岩崖", lon: -19.045, lat: 63.404, elevation: 15, kind: "escarpment" },
  bbox: [-19.16, 63.38, -18.95, 63.46],
  label: { lon: -19.05, lat: 63.41, rotation: 0 },
  pois: [
    { name: "迪尔霍拉里海蚀拱（Dyrhólaey）", lon: -19.128, lat: 63.402, note: "120m 高岬角上的大海蚀拱，冰岛本土最南点" },
  ],
  source: "雷尼斯黑沙滩：维克镇附近的玄武质黑沙海滩，衬着柱状玄武岩崖和外海的雷尼斯德朗格岩柱；以突发的“疯狗浪”危险著称，海边设有警示（National Land Survey of Iceland）",
};

const LATRABJARG: TerrainEntry = {
  id: "latrabjarg",
  nameZh: "拉特拉尔角海鸟崖",
  nameEn: "Látrabjarg",
  category: "coast",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "拉特拉尔角海崖（Bjargtangar）", lon: -24.532, lat: 65.501, elevation: 440, kind: "escarpment" },
  bbox: [-24.56, 65.46, -24.05, 65.53],
  axis: [[-24.53, 65.50], [-24.10, 65.50]],
  viewFrom: 180,
  label: { lon: -24.35, lat: 65.50, rotation: -3 },
  source: "拉特拉尔角：西峡湾一段长约14km、高达约440m 的海崖，是欧洲最大的海鸟崖之一（海鹦、刀嘴海雀、崖海鸦等数以百万计）；西端的比雅尔唐加是冰岛最西点（Icelandic Institute of Natural History）",
};

const VESTMANNAEYJAR: TerrainEntry = {
  id: "vestmannaeyjar",
  nameZh: "韦斯特曼纳群岛",
  nameEn: "Vestmannaeyjar",
  category: "island",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "海梅岛与埃尔德费尔火山（1973年）", lon: -20.253, lat: 63.432, elevation: 200, kind: "island" },
  bbox: [-20.60, 63.25, -20.10, 63.52],
  viewScale: 1.5,
  label: { lon: -20.28, lat: 63.42, rotation: 0 },
  pois: [
    { name: "叙尔特塞岛（Surtsey）", lon: -20.604, lat: 63.303, note: "1963—67年从海里喷发形成，此后作为“生命如何定居新陆地”的自然实验室受严格保护" },
  ],
  source: "韦斯特曼纳群岛：冰岛南岸外一组年轻的火山岛；叙尔特塞1963—67年从海中升起（世界遗产）；有人居住的海梅岛1973年埃尔德费尔喷发，居民一夜乘渔船撤离、熔岩被海水冷却阻挡以保住港口（UNESCO / Icelandic Met Office）",
};

const THJORSA: TerrainEntry = {
  id: "thjorsa",
  nameZh: "雷神河",
  nameEn: "Þjórsá",
  category: "river",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "雷神河中游（布尔费德一带）", lon: -19.75, lat: 64.10, elevation: 200, kind: "meander" },
  bbox: [-20.90, 63.80, -18.60, 64.75],
  axis: [[-19.10, 64.65], [-20.75, 63.85]],
  viewScale: 2.0,
  label: { lon: -20.0, lat: 64.2, rotation: -55 },
  source: "雷神河（Þjórsá）：冰岛最长的河（约230km），冰川河，源自霍夫斯冰原；约8600年前的“雷神河大熔岩”沿河谷流了约130km，是全新世体积最大的单次熔岩流；下游梯级水电开发（National Land Survey of Iceland）",
};

const JOKULSA_A_FJOLLUM: TerrainEntry = {
  id: "jokulsa-a-fjollum",
  nameZh: "菲厄德尔冰川河",
  nameEn: "Jökulsá á Fjöllum",
  category: "river",
  regionId: "europe",
  country: "iceland",
  landmark: { name: "菲厄德尔冰川河中游（高地荒漠段）", lon: -16.55, lat: 65.20, elevation: 400, kind: "meander" },
  bbox: [-16.95, 64.55, -16.30, 66.20],
  axis: [[-16.55, 64.60], [-16.45, 66.15]],
  viewScale: 2.0,
  label: { lon: -16.7, lat: 65.3, rotation: -80 },
  source: "菲厄德尔冰川河（Jökulsá á Fjöllum）：冰岛第二长的河（约206km），源自瓦特纳冰原的丁久冰舌，穿过高地荒漠，在约克尔萨峡谷跌下黛提等瀑布，注入厄克萨峡湾；易发冰川洪水（Vatnajökull NP）",
};

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

// ============================================================
// 挪威（regionId: "europe"，country: "norway"）
// 坐标据 NGU（挪威地质调查局）/ Miljødirektoratet（环境署·国家公园）/
// Kartverket（地图与地名局）/ NVE（水资源能源局）/ UNESCO；只做挪威本土，
// 不含斯瓦尔巴与扬马延；地名挪威语为主，北萨米语并列
// ============================================================

const SCANDINAVIAN_MOUNTAINS_NORWAY: TerrainEntry = {
  id: "scandinavian-mountains-norway",
  nameZh: "斯堪的纳维亚山脉（挪威段）",
  nameEn: "Scandinavian Mountains (Norway)",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "加尔赫皮根峰（Galdhøpiggen，2469m，全脉最高点）", lon: 8.3125, lat: 61.6364, elevation: 2469, kind: "peak" },
  bbox: [4.5, 58.3, 25.5, 69.8],
  axis: [[6.0, 58.5], [24.0, 69.5]],
  viewScale: 2.6,
  label: { lon: 12.0, lat: 64.5, rotation: -38 },
  source: "斯堪的纳维亚山脉（挪威语 Kjølen / Den skandinaviske fjellkjede）：纵贯挪威全境的山脉骨架，由约4亿年前加里东造山带的岩石构成，其上是长期夷平的古夷平面（paleic surface）；今日高度部分由新近纪以来的抬升重新塑造，具体机制学界仍有讨论；与瑞典共有（NGU）",
};

const JOTUNHEIMEN: TerrainEntry = {
  id: "jotunheimen",
  nameZh: "尤通黑门山",
  nameEn: "Jotunheimen",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "耶恩湖与贝赛根山脊（Gjende / Besseggen）", lon: 8.790, lat: 61.497, elevation: 984, kind: "lake" },
  bbox: [7.55, 61.20, 8.95, 61.80],
  axis: [[7.65, 61.35], [8.85, 61.65]],
  viewFrom: 200,
  viewScale: 1.5,
  label: { lon: 8.30, lat: 61.55, rotation: -12 },
  pois: [
    { name: "加尔赫皮根峰（Galdhøpiggen，2469m）", lon: 8.3125, lat: 61.6364, note: "挪威与北欧最高峰" },
    { name: "斯卡加斯特山（Store Skagastølstind，2405m）", lon: 7.812, lat: 61.475, note: "许伦加内群峰，北欧第三高" },
  ],
  source: "尤通黑门（挪威语意为“巨人之家”，1862年诗人 Aasmund Olavsson Vinje 定名）：挪威最高的一片山地，含全国29座最高峰、逾250座逾1900m 的山峰；主要由坚硬的辉长岩构成，加里东造山期成山、后经冰川深切；冰川多在西坡；尤通黑门国家公园1980年设立（Miljødirektoratet / NGU）",
};

const HARDANGERVIDDA: TerrainEntry = {
  id: "hardangervidda",
  nameZh: "哈当厄高原",
  nameEn: "Hardangervidda",
  category: "plateau",
  regionId: "europe",
  country: "norway",
  landmark: { name: "哈当厄冰帽（Hardangerjøkulen）", lon: 7.167, lat: 60.548, elevation: 1863, kind: "escarpment" },
  bbox: [6.75, 59.80, 8.20, 60.75],
  viewScale: 2.2,
  label: { lon: 7.50, lat: 60.25, rotation: 0 },
  source: "哈当厄高原：面积约6500 km²、平均海拔约1100m 的山地高原，是北欧最大的同类高原；地表是一片抬升的古夷平面，最高点桑德弗洛加（Sandfloegga）1721m；西缘有哈当厄冰帽，边坡被瀑布与冰蚀谷切割；欧洲最大的野生驯鹿群之一在此活动；哈当厄高原国家公园（Miljødirektoratet）",
};

const FINNMARKSVIDDA: TerrainEntry = {
  id: "finnmarksvidda",
  nameZh: "芬马克高原",
  nameEn: "Finnmarksvidda / Finnmárkkoduottar",
  category: "plateau",
  regionId: "europe",
  country: "norway",
  landmark: { name: "考托凯诺一带（Kautokeino / Guovdageaidnu）", lon: 23.040, lat: 69.011, elevation: 307, kind: "escarpment" },
  bbox: [21.8, 68.5, 26.6, 70.0],
  axis: [[22.0, 68.7], [26.2, 69.8]],
  viewScale: 2.4,
  label: { lon: 24.0, lat: 69.2, rotation: -20 },
  source: "芬马克高原（北萨米语 Finnmárkkoduottar）：挪威最大的高原，面积逾22000 km²、海拔约300—500m，是前寒武纪基岩长期风化剥蚀形成的低缓磨蚀面，散布大量湖泊与沼泽；广泛记载的土地利用是萨米人的驯鹿放牧；冬季严寒、盛夏多蚊（NGU / Britannica）",
};

const SOGNEFJORD: TerrainEntry = {
  id: "sognefjord",
  nameZh: "松恩峡湾",
  nameEn: "Sognefjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "松恩峡湾内段（巴莱斯特兰 / 维克一带）", lon: 6.75, lat: 61.16, elevation: 0, kind: "escarpment" },
  bbox: [4.75, 60.85, 7.85, 61.40],
  axis: [[4.90, 61.05], [7.30, 61.18]],
  viewScale: 1.8,
  label: { lon: 6.10, lat: 61.20, rotation: -6 },
  pois: [
    { name: "纳柔依峡湾（Nærøyfjorden）", lon: 6.90, lat: 60.90, note: "松恩峡湾的一条支汊，世界遗产" },
  ],
  source: "松恩峡湾：挪威最长（约205km）、最深（约1308m）的峡湾，有“峡湾之王”之称；冰川沿断裂带与古河谷反复下切、过度加深而成，内段仍深逾1000m；两侧支汊延伸入尤通黑门与约斯特达尔冰川脚下（Kartverket / NGU）",
};

const GLOMMA: TerrainEntry = {
  id: "glomma",
  nameZh: "格洛马河",
  nameEn: "Glomma",
  category: "river",
  regionId: "europe",
  country: "norway",
  landmark: { name: "格洛马河·厄斯特达尔段（埃尔沃吕姆一带）", lon: 11.56, lat: 60.88, elevation: 185, kind: "meander" },
  bbox: [10.3, 59.20, 11.95, 62.70],
  axis: [[11.30, 62.55], [10.95, 59.25]],
  viewScale: 2.0,
  label: { lon: 11.10, lat: 61.0, rotation: -78 },
  source: "格洛马河（挪威语 Glomma / Glåma）：挪威最长、水量最大的河，长约620km，流域约42000 km²、约占本土面积13%；从勒罗斯附近的奥尔松湖流出，沿厄斯特达尔南下，经厄耶伦湖在弗雷德里克斯塔注入奥斯陆峡湾（NVE / Kartverket）",
};

const LOFOTEN: TerrainEntry = {
  id: "lofoten",
  nameZh: "罗弗敦群岛",
  nameEn: "Lofoten",
  category: "island",
  regionId: "europe",
  country: "norway",
  landmark: { name: "莫斯克内斯岛·雷讷一带（“罗弗敦墙”）", lon: 13.10, lat: 67.94, elevation: 400, kind: "island" },
  bbox: [12.0, 67.70, 16.6, 68.50],
  axis: [[12.9, 67.85], [16.3, 68.40]],
  viewFrom: 200,
  viewScale: 1.6,
  label: { lon: 14.4, lat: 68.25, rotation: -30 },
  pois: [
    { name: "莫斯克流（Moskstraumen）", lon: 12.95, lat: 67.89, note: "群岛南端的强潮流，历史上“大漩涡 Maelstrom”一词即源于此" },
  ],
  source: "罗弗敦群岛：挪威海中一列陡峭山岛，是一条大体被海水淹没、经强烈剥蚀的山脊出露的顶部，岩石以前寒武纪片麻岩、花岗岩为主，沿加里东造山期的断层抬升；山峰常直逼海面形成“罗弗敦墙”；南端有莫斯克流（NGU）",
};

const JAEREN: TerrainEntry = {
  id: "jaeren",
  nameZh: "耶伦",
  nameEn: "Jæren",
  category: "plain",
  regionId: "europe",
  country: "norway",
  landmark: { name: "耶伦低地（克莱普 / 奥勒一带）", lon: 5.55, lat: 58.77, elevation: 20, kind: "escarpment" },
  bbox: [5.35, 58.42, 6.10, 59.10],
  viewScale: 1.6,
  label: { lon: 5.60, lat: 58.72, rotation: 0 },
  source: "耶伦：挪威最大的一片低平陆地，位于西南端；坐落在一道延入海中的大终碛之上，下伏片麻岩与花岗岩，表层是冰川带来的砂与黏土，土壤肥沃、是挪威主要农牧区之一；海岸“耶伦海滩”（Jærstrendene）长约70km，砂滩、砾滩与碛石海岸相间，为景观保护区（NGU / Miljødirektoratet）",
};

const DOVREFJELL: TerrainEntry = {
  id: "dovrefjell",
  nameZh: "多夫勒山",
  nameEn: "Dovrefjell",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "斯诺赫塔峰（Snøhetta，2286m）", lon: 9.267, lat: 62.332, elevation: 2286, kind: "peak" },
  bbox: [8.30, 62.05, 9.95, 62.70],
  axis: [[8.45, 62.25], [9.85, 62.45]],
  viewScale: 1.7,
  label: { lon: 9.10, lat: 62.40, rotation: -14 },
  source: "多夫勒山：挪威中部一片东西向约160km 的山地高原，是东挪威与特伦德拉格之间的天然屏障，也横跨斯堪的纳维亚主分水岭；最高点斯诺赫塔峰2286m；麝牛1930年代从格陵兰引入、二战后重新引入，多夫勒是挪威唯一能见到麝牛的地方；多夫勒山-松达尔山国家公园是挪威最大的连片保护区（Miljødirektoratet）",
};

const RONDANE: TerrainEntry = {
  id: "rondane",
  nameZh: "龙达讷山",
  nameEn: "Rondane",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "龙达讷宫（Rondeslottet，2178m）", lon: 9.816, lat: 61.906, elevation: 2178, kind: "peak" },
  bbox: [9.55, 61.70, 10.15, 62.10],
  axis: [[9.65, 61.78], [10.05, 62.02]],
  viewScale: 1.6,
  label: { lon: 9.85, lat: 61.95, rotation: -20 },
  source: "龙达讷山：1962年设立、挪威第一个国家公园，10 座逾2000m 的山峰围着大片高原；基岩是约5—6亿年前浅海沉积后变质的石英岩类，冰期的冰川刻出圆缓的峰顶、冰斗和 U 形谷；重要的野生驯鹿栖息地；易卜生《培尔·金特》部分场景设在龙达讷（Miljødirektoratet）",
};

const TROLLHEIMEN: TerrainEntry = {
  id: "trollheimen",
  nameZh: "巨魔山",
  nameEn: "Trollheimen",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "因讷达尔谷与因讷达尔塔（Innerdalstårnet，1394m）", lon: 8.870, lat: 62.716, elevation: 900, kind: "escarpment" },
  bbox: [8.60, 62.55, 9.55, 62.90],
  axis: [[8.75, 62.62], [9.40, 62.82]],
  viewScale: 1.5,
  label: { lon: 9.10, lat: 62.78, rotation: -16 },
  source: "巨魔山：特伦德拉格与诺尔穆勒之间的山地，处在海洋性与大陆性气候的过渡带，岩性多变——西部岩石坚硬、山形尖峭（如“大教堂”般的因讷达尔塔），东部多片岩、山形浑圆；最高点大特罗拉峰约1850m；因讷达尔1967年成为挪威第一个自然保护区；巨魔山景观保护区（Miljødirektoratet）",
};

const JOSTEDALSBREEN: TerrainEntry = {
  id: "jostedalsbreen",
  nameZh: "约斯特达尔冰川",
  nameEn: "Jostedalsbreen",
  category: "valley",
  regionId: "europe",
  country: "norway",
  landmark: { name: "约斯特达尔冰原（尼加冰舌 Nigardsbreen 上方）", lon: 7.050, lat: 61.660, elevation: 1900, kind: "escarpment" },
  bbox: [6.65, 61.30, 7.55, 61.95],
  axis: [[6.85, 61.40], [7.25, 61.90]],
  viewScale: 1.7,
  label: { lon: 7.05, lat: 61.62, rotation: -70 },
  pois: [
    { name: "尼加冰舌（Nigardsbreen）", lon: 7.133, lat: 61.717, note: "最著名的冰舌之一，下伸至谷底湖" },
    { name: "布里克斯达尔冰舌（Briksdalsbreen）", lon: 6.895, lat: 61.664, note: "1990年代曾一度前进、后快速退缩" },
  ],
  source: "约斯特达尔冰川：欧洲大陆最大的冰川，冰盖面积约458 km²（2022年），呈南北向的高原冰帽，向四周谷地伸出几十条冰舌（尼加、布里克斯达尔等）；它并非上一次冰期的残留——约8000年前曾完全消融，之后在全新世重新形成；约斯特达尔冰川国家公园；NVE 长期监测其物质平衡（NVE / Norsk Polarinstitutt）",
};

const FOLGEFONNA: TerrainEntry = {
  id: "folgefonna",
  nameZh: "佛尔格冰川",
  nameEn: "Folgefonna",
  category: "valley",
  regionId: "europe",
  country: "norway",
  landmark: { name: "南佛尔格冰帽（Søndre Folgefonna）", lon: 6.350, lat: 60.030, elevation: 1550, kind: "escarpment" },
  bbox: [6.10, 59.80, 6.60, 60.35],
  axis: [[6.30, 59.85], [6.40, 60.30]],
  viewScale: 1.6,
  label: { lon: 6.35, lat: 60.05, rotation: -78 },
  source: "佛尔格冰川：佛尔格半岛上的三块温冰帽（北、中、南），合计面积约207 km²、最厚近400m，是挪威本土第三大冰川；夹在哈当厄峡湾和挪威海之间，属海洋性冰川，降雪极丰；佛尔格冰川国家公园（NVE / Miljødirektoratet）",
};

const SVARTISEN: TerrainEntry = {
  id: "svartisen",
  nameZh: "斯瓦蒂森冰川",
  nameEn: "Svartisen",
  category: "valley",
  regionId: "europe",
  country: "norway",
  landmark: { name: "西斯瓦蒂森（Vestisen）与恩加冰舌（Engabreen）", lon: 13.800, lat: 66.640, elevation: 1200, kind: "escarpment" },
  bbox: [13.45, 66.35, 14.30, 66.90],
  axis: [[13.60, 66.45], [14.10, 66.85]],
  viewScale: 1.7,
  label: { lon: 13.85, lat: 66.68, rotation: -60 },
  pois: [
    { name: "恩加冰舌（Engabreen）", lon: 13.720, lat: 66.660, note: "冰舌前缘一度下伸到近海平面，是欧洲大陆位置最低的冰川末端之一；NVE 在其下设有冰下实验室" },
  ],
  source: "斯瓦蒂森（“黑冰”）：挪威本土第二大冰川，分为西斯瓦蒂森与东斯瓦蒂森两片，合计约370 km²，位于诺尔兰郡；北极圈从冰川南部穿过；恩加冰舌一度下伸到近海平面；NVE 自1970年代监测，并在恩加冰舌下设有冰下实验室（NVE）",
};

const GEIRANGERFJORD: TerrainEntry = {
  id: "geirangerfjord",
  nameZh: "盖朗厄尔峡湾",
  nameEn: "Geirangerfjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "盖朗厄尔峡湾（“七姊妹”瀑布一带）", lon: 7.100, lat: 62.105, elevation: 0, kind: "escarpment" },
  bbox: [6.95, 62.02, 7.30, 62.18],
  axis: [[7.00, 62.10], [7.28, 62.10]],
  viewScale: 1.3,
  label: { lon: 7.14, lat: 62.11, rotation: -4 },
  source: "盖朗厄尔峡湾：松恩峡湾支系斯托尔峡湾的一条约15km 长的支汊，两侧结晶岩壁高达约1400m、水深达约海平面下500m，悬谷瀑布（“七姊妹”“求婚者”等）成排跌下；与纳柔依峡湾同列“西挪威峡湾”世界遗产（UNESCO / 2005）",
};

const NAEROYFJORD: TerrainEntry = {
  id: "naeroyfjord",
  nameZh: "纳柔依峡湾",
  nameEn: "Nærøyfjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "纳柔依峡湾（古德旺恩一带）", lon: 6.900, lat: 60.905, elevation: 0, kind: "escarpment" },
  bbox: [6.78, 60.83, 7.02, 61.10],
  axis: [[6.87, 60.86], [6.93, 61.08]],
  viewScale: 1.3,
  label: { lon: 6.86, lat: 60.97, rotation: -78 },
  source: "纳柔依峡湾：松恩峡湾的一条支汊，长约17km，最窄处仅约250m，两岸岩壁高逾1600m；被视为峡湾景观的“原型”，与盖朗厄尔峡湾同列“西挪威峡湾”世界遗产（UNESCO / 2005）",
};

const HARDANGERFJORD: TerrainEntry = {
  id: "hardangerfjord",
  nameZh: "哈当厄峡湾",
  nameEn: "Hardangerfjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "哈当厄峡湾内段（艾德峡湾 / 金萨维克，背靠哈当厄高原）", lon: 6.720, lat: 60.420, elevation: 0, kind: "escarpment" },
  bbox: [5.30, 59.70, 7.15, 60.60],
  axis: [[5.45, 59.85], [7.05, 60.45]],
  viewScale: 1.9,
  label: { lon: 6.20, lat: 60.20, rotation: -30 },
  source: "哈当厄峡湾：挪威第二长的峡湾，自大西洋向内陆伸约179km，直抵哈当厄高原脚下；主干分出瑟尔峡湾、艾德峡湾等支汊；峡湾内坡因气候温和多果园，是挪威著名的水果产区（Kartverket / NGU）",
};

const LYSEFJORD: TerrainEntry = {
  id: "lysefjord",
  nameZh: "吕瑟峡湾",
  nameEn: "Lysefjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "布道石（Preikestolen，峡湾北岸约604m 高的水平岩台）", lon: 6.190, lat: 58.986, elevation: 604, kind: "escarpment" },
  bbox: [6.05, 58.90, 6.80, 59.08],
  axis: [[6.10, 58.98], [6.75, 59.03]],
  viewScale: 1.4,
  label: { lon: 6.40, lat: 59.02, rotation: -6 },
  pois: [
    { name: "谢拉格（Kjerag）与卡石（Kjeragbolten）", lon: 6.593, lat: 59.035, note: "峡湾南岸约1000m 的岩壁，卡石是卡在裂缝里的一块巨砾" },
  ],
  source: "吕瑟峡湾：斯塔万格东北一条长约42km、深达约海平面下400m 的花岗-片麻岩峡湾，两岸岩壁陡直、局部逾1000m；北岸的布道石是一块水平节理花岗岩形成的平顶悬崖，约在海平面上604m（Kartverket / NGU）",
};

const TRONDHEIMSFJORD: TerrainEntry = {
  id: "trondheimsfjord",
  nameZh: "特隆赫姆峡湾",
  nameEn: "Trondheimsfjorden",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "特隆赫姆峡湾（特隆赫姆与蒙克岛一带）", lon: 10.35, lat: 63.47, elevation: 0, kind: "escarpment" },
  bbox: [9.55, 63.30, 11.45, 64.20],
  axis: [[9.70, 63.60], [11.35, 64.05]],
  viewScale: 1.9,
  label: { lon: 10.60, lat: 63.75, rotation: -34 },
  source: "特隆赫姆峡湾：挪威第三长的峡湾，长约130km、最深约617m；比西部的峡湾宽阔得多，主段全年不冻；生物生产力居挪威峡湾之首，记录鱼类逾90种、深水有冷水珊瑚（Lophelia），沿岸有多条挪威顶级鲑鱼河；自维京时代就是重要水道（Kartverket / 海洋研究所）",
};

const ROMSDALEN: TerrainEntry = {
  id: "romsdalen",
  nameZh: "罗姆斯达尔谷",
  nameEn: "Romsdalen",
  category: "valley",
  regionId: "europe",
  country: "norway",
  landmark: { name: "巨魔墙（Trollveggen）与劳马河谷底", lon: 7.760, lat: 62.503, elevation: 120, kind: "escarpment" },
  bbox: [7.55, 62.30, 8.10, 62.62],
  axis: [[7.68, 62.58], [7.95, 62.32]],
  viewFrom: 270,
  viewScale: 1.4,
  label: { lon: 7.80, lat: 62.48, rotation: -70 },
  source: "罗姆斯达尔谷：劳马河切过的一条深 U 形谷，西侧的巨魔墙（Trollveggen）是欧洲最高的垂直岩壁，从谷底到巨魔诸峰顶落差约1700m、崖面上部外倾近50m；谷底并行着劳马河、E136 公路和劳马铁路（NGU）",
};

const GUDBRANDSDALEN: TerrainEntry = {
  id: "gudbrandsdalen",
  nameZh: "古德布兰河谷",
  nameEn: "Gudbrandsdalen",
  category: "valley",
  regionId: "europe",
  country: "norway",
  landmark: { name: "古德布兰河谷·劳根河中段（南弗龙 / 温斯特拉一带）", lon: 9.75, lat: 61.55, elevation: 250, kind: "meander" },
  bbox: [9.10, 61.10, 10.30, 62.20],
  axis: [[9.30, 61.20], [10.00, 62.10]],
  viewScale: 1.9,
  label: { lon: 9.60, lat: 61.65, rotation: -55 },
  source: "古德布兰河谷：挪威东部主干河谷之一，劳根河（Gudbrandsdalslågen）自约特山地流向姆约萨湖，谷长约230km；冰川把一条构造低谷拓宽成宽 U 形谷，谷底有厚层冰川与河流沉积、多级河流阶地，是历史上东挪威南北往来的主通道（Kartverket / NGU）",
};

const LYNGEN_ALPS: TerrainEntry = {
  id: "lyngen-alps",
  nameZh: "林根阿尔卑斯山",
  nameEn: "Lyngen Alps / Lyngsalpan",
  category: "mountain_system",
  regionId: "europe",
  country: "norway",
  landmark: { name: "耶克瓦里峰（Jiehkkevárri，1834m）", lon: 19.980, lat: 69.475, elevation: 1834, kind: "peak" },
  bbox: [19.55, 69.30, 20.40, 69.85],
  axis: [[19.70, 69.35], [20.20, 69.80]],
  viewScale: 1.5,
  label: { lon: 20.00, lat: 69.60, rotation: -18 },
  source: "林根阿尔卑斯（林根半岛，特罗姆瑟东北）：夹在乌尔峡湾和林根峡湾之间的一条尖峰-冰川山脊，最高点耶克瓦里峰1834m；角峰、刀脊和几十条小冰川直逼峡湾水面；林根阿尔卑斯景观保护区（Miljødirektoratet）",
};

const MJOSA: TerrainEntry = {
  id: "mjosa",
  nameZh: "姆约萨湖",
  nameEn: "Mjøsa",
  category: "lake",
  regionId: "europe",
  country: "norway",
  landmark: { name: "姆约萨湖（哈马尔 / 耶维克一带）", lon: 10.95, lat: 60.75, elevation: 123, kind: "lake" },
  bbox: [10.60, 60.35, 11.30, 61.15],
  axis: [[10.75, 60.40], [11.20, 61.10]],
  viewScale: 1.7,
  label: { lon: 10.95, lat: 60.75, rotation: -60 },
  source: "姆约萨湖：挪威最大的湖，面积约365 km²、最深约450m、长约117km；沿古德布兰河谷的构造低带发育、被冰川深挖，湖底低于海平面（冰蚀-断裂谷湖）；1970—80年代的“姆约萨行动”是挪威著名的湖泊治污案例（NVE / 环境署）",
};

const FEMUNDEN: TerrainEntry = {
  id: "femund",
  nameZh: "费蒙湖",
  nameEn: "Femunden",
  category: "lake",
  regionId: "europe",
  country: "norway",
  landmark: { name: "费蒙湖（费蒙斯马卡一侧）", lon: 11.870, lat: 62.150, elevation: 662, kind: "lake" },
  bbox: [11.60, 61.85, 12.15, 62.45],
  axis: [[11.75, 61.90], [12.00, 62.40]],
  viewScale: 1.6,
  label: { lon: 11.87, lat: 62.15, rotation: -70 },
  source: "费蒙湖：挪威第三大湖、第二大天然（几乎未受水位调节）湖，面积约204 km²、最深约150m，海拔662m；东岸是费蒙斯马卡国家公园，湖水部分向东经特吕西尔河系流入瑞典（Kartverket / Miljødirektoratet）",
};

const HORNINDALSVATNET: TerrainEntry = {
  id: "hornindalsvatnet",
  nameZh: "霍宁达尔湖",
  nameEn: "Hornindalsvatnet",
  category: "lake",
  regionId: "europe",
  country: "norway",
  landmark: { name: "霍宁达尔湖", lon: 6.350, lat: 61.920, elevation: 53, kind: "lake" },
  bbox: [6.00, 61.86, 6.75, 61.99],
  axis: [[6.05, 61.90], [6.70, 61.94]],
  viewScale: 1.4,
  label: { lon: 6.35, lat: 61.92, rotation: -4 },
  source: "霍宁达尔湖：欧洲最深的湖，深约514m（湖面海拔约53m，湖底远低于海平面）；由冰川沿一条谷强烈过度加深而成；不受冰川河补给，水质格外清澈（NVE）",
};

const TROLLTUNGA: TerrainEntry = {
  id: "trolltunga",
  nameZh: "巨魔舌",
  nameEn: "Trolltunga",
  category: "gorge",
  regionId: "europe",
  country: "norway",
  landmark: { name: "巨魔舌（林厄达尔湖上方约700m 的水平悬挑岩台）", lon: 6.740, lat: 60.124, elevation: 1100, kind: "escarpment" },
  bbox: [6.66, 60.08, 6.84, 60.17],
  label: { lon: 6.74, lat: 60.124, rotation: 0 },
  source: "巨魔舌：奥达附近、哈当厄高原西缘一块水平伸出的薄岩台，悬在林厄达尔湖上方约700m；岩石沿一组水平节理被冰川拔蚀和冻融作用一层层剥离，留下这条悬挑的“舌头”（NGU）",
};

const SALTSTRAUMEN: TerrainEntry = {
  id: "saltstraumen",
  nameZh: "萨尔特急流",
  nameEn: "Saltstraumen",
  category: "gorge",
  regionId: "europe",
  country: "norway",
  landmark: { name: "萨尔特海峡（萨尔特桥一带）", lon: 14.625, lat: 67.232, elevation: 0, kind: "escarpment" },
  bbox: [14.55, 67.19, 14.72, 67.27],
  axis: [[14.58, 67.21], [14.70, 67.25]],
  viewScale: 1.2,
  label: { lon: 14.63, lat: 67.235, rotation: -30 },
  source: "萨尔特急流：博德附近连接萨尔特峡湾与谢尔斯塔峡湾的一条约3km 长、最窄约150m 的海峡；每6小时约4亿 m³ 海水涌过，流速可达约20节（约10m/s），形成直径达约10m 的漩涡，是世界上最强的潮流（Kartverket）",
};

const VARANGERHALVOYA: TerrainEntry = {
  id: "varangerhalvoya",
  nameZh: "瓦朗厄尔半岛",
  nameEn: "Varangerhalvøya / Várnjárga",
  category: "coast",
  regionId: "europe",
  country: "norway",
  landmark: { name: "瓦朗厄尔半岛内陆苔原高地", lon: 29.60, lat: 70.35, elevation: 300, kind: "escarpment" },
  bbox: [28.4, 69.95, 31.0, 70.95],
  axis: [[28.7, 70.10], [30.6, 70.80]],
  viewScale: 2.0,
  label: { lon: 29.8, lat: 70.5, rotation: -22 },
  source: "瓦朗厄尔半岛（北萨米语 Várnjárga）：挪威最东北的半岛，是本土唯一有真正北极苔原和多年冻土的地方；地表大体是末次冰期之前就形成的低缓高地和无植被的碎石原（felsenmeer），冰期冰盖在此几乎静止、少有改造；弱变质的新元古代—早寒武纪岩层里保存有著名的“瓦兰吉尔冰期”冰碛岩；瓦朗厄尔半岛国家公园（NGU / Miljødirektoratet）",
};

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

// ============================================================
// 意大利（regionId: "europe"，country: "italy"）
// 坐标据 ISPRA（意大利环境保护与研究院·地质调查）/ INGV（国家地球物理与火山学研究所）/
// 意大利国家公园 / UNESCO；只做本土与西西里、撒丁；跨境山脉（阿尔卑斯）按中性事实表述
// ============================================================

const ITALIAN_ALPS: TerrainEntry = {
  id: "italian-alps",
  nameZh: "意大利阿尔卑斯山脉",
  nameEn: "Italian Alps / Alpi italiane",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "大帕拉迪索峰（Gran Paradiso，4061m，完全在意大利境内的最高峰）", lon: 7.2686, lat: 45.5167, elevation: 4061, kind: "peak" },
  bbox: [6.55, 44.05, 13.75, 47.10],
  axis: [[6.9, 44.6], [13.4, 46.6]],
  viewFrom: 180,
  viewScale: 2.4,
  label: { lon: 9.5, lat: 46.2, rotation: -20 },
  pois: [
    { name: "勃朗峰（Monte Bianco / Mont Blanc）", lon: 6.865, lat: 45.833, note: "在意大利与法国交界一带" },
    { name: "马特洪峰（Cervino / Matterhorn）", lon: 7.658, lat: 45.976, note: "在意大利与瑞士交界一带" },
    { name: "罗莎峰（Monte Rosa）", lon: 7.867, lat: 45.937, note: "在意大利与瑞士交界一带" },
  ],
  source: "意大利阿尔卑斯：阿尔卑斯山脉沿意大利北界呈弧形的一段，构成波河平原和北方各国之间的屏障；勃朗峰、马特洪峰、罗莎峰都在意大利与法国 / 瑞士交界一带，完全落在意大利境内的最高峰是大帕拉迪索4061米（ISPRA）",
};

const APENNINES: TerrainEntry = {
  id: "apennines",
  nameZh: "亚平宁山脉",
  nameEn: "Apennines / Appennini",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "大萨索山·大角峰（Corno Grande，2912m，亚平宁最高峰）", lon: 13.564, lat: 42.469, elevation: 2912, kind: "peak" },
  bbox: [7.5, 38.0, 16.6, 44.5],
  axis: [[8.0, 44.3], [16.2, 38.2]],
  viewScale: 2.6,
  label: { lon: 13.0, lat: 42.0, rotation: -40 },
  source: "亚平宁山脉：纵贯意大利半岛约1200km 的“脊梁”，是亚得里亚板块与欧洲板块汇聚形成的年轻褶皱-逆冲山脉，至今地震频繁、滑坡多；最高峰大角峰2912米，山上的卡尔代罗内冰川曾是欧洲纬度最南的冰川、现已所剩无几（ISPRA / INGV）",
};

const DOLOMITES: TerrainEntry = {
  id: "dolomites",
  nameZh: "多洛米蒂山",
  nameEn: "Dolomites / Dolomiti",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "拉瓦雷多三峰（Tre Cime di Lavaredo）", lon: 12.305, lat: 46.618, elevation: 2999, kind: "peak" },
  bbox: [11.35, 46.00, 12.65, 46.85],
  axis: [[11.5, 46.15], [12.5, 46.70]],
  viewScale: 1.7,
  label: { lon: 11.90, lat: 46.45, rotation: -18 },
  pois: [
    { name: "马莫拉达峰（Marmolada，3343m）与其冰川", lon: 11.851, lat: 46.434, note: "多洛米蒂最高峰、也是这片山里唯一像样的冰川，近年退缩极快" },
  ],
  source: "多洛米蒂山：意大利东北的一片浅色碳酸盐岩山峰，岩石是约2.5亿年前特提斯海里的碳酸盐台地和珊瑚-藻礁，后来白云石化、又被阿尔卑斯造山抬升、断块化；垂直的岩壁、尖塔和台地是这片山的标志；2009年列入世界遗产（UNESCO / ISPRA）",
};

const PO_VALLEY: TerrainEntry = {
  id: "po-valley",
  nameZh: "波河平原",
  nameEn: "Po Valley / Pianura Padana",
  category: "plain",
  regionId: "europe",
  country: "italy",
  landmark: { name: "波河平原中部（曼托瓦 / 克雷莫纳一带）", lon: 10.30, lat: 45.10, elevation: 35, kind: "escarpment" },
  bbox: [7.0, 44.4, 12.6, 45.9],
  viewScale: 2.4,
  label: { lon: 10.0, lat: 45.1, rotation: 0 },
  source: "波河平原（Pianura Padana）：意大利最大的低地，东西向约650km、约4.6万平方公里，从西阿尔卑斯一直铺到亚得里亚海；本质是阿尔卑斯和亚平宁之间一个持续下沉的前陆盆地，被两侧山脉的碎屑和波河水系的冲积物填满；地势极平、常年多雾，是意大利的农业和工业核心（ISPRA）",
};

const PO_RIVER: TerrainEntry = {
  id: "po-river",
  nameZh: "波河",
  nameEn: "Po",
  category: "river",
  regionId: "europe",
  country: "italy",
  landmark: { name: "波河中游（皮亚琴察 / 克雷莫纳一带的堤防河段）", lon: 9.90, lat: 45.05, elevation: 40, kind: "meander" },
  bbox: [6.9, 44.6, 12.6, 45.6],
  axis: [[7.05, 44.70], [12.50, 44.95]],
  viewScale: 2.2,
  label: { lon: 9.8, lat: 45.0, rotation: -4 },
  source: "波河：意大利最长的河（约652km），源出西阿尔卑斯的蒙维索山，横穿波河平原、接纳阿尔卑斯和亚平宁下来的大量支流，在亚得里亚海堆出一个大三角洲；下游全程束在人工堤防之间，河床因泥沙淤积高出两岸农田（“悬河”），是意大利防洪的重点（ISPRA / AIPo）",
};

const TIBER_RIVER: TerrainEntry = {
  id: "tiber-river",
  nameZh: "台伯河",
  nameEn: "Tiber / Tevere",
  category: "river",
  regionId: "europe",
  country: "italy",
  landmark: { name: "台伯河·罗马市区曲流段", lon: 12.472, lat: 41.900, elevation: 15, kind: "meander" },
  bbox: [11.65, 41.65, 12.60, 43.95],
  axis: [[12.10, 43.85], [12.30, 41.75]],
  viewScale: 2.0,
  label: { lon: 12.15, lat: 42.6, rotation: -78 },
  source: "台伯河（Tevere）：意大利第三长的河（约406km），源出亚平宁的富马约洛山，向南穿翁布里亚和拉齐奥、经罗马，在奥斯蒂亚附近注入第勒尼安海；历史上是罗马城的生命线和防线，古代常泛滥，19世纪末在市区两岸筑起高堤（Britannica）",
};

const SICILY: TerrainEntry = {
  id: "sicily",
  nameZh: "西西里岛",
  nameEn: "Sicily / Sicilia",
  category: "island",
  regionId: "europe",
  country: "italy",
  landmark: { name: "埃特纳火山（Etna，约3350m）", lon: 14.993, lat: 37.751, elevation: 3350, kind: "peak" },
  bbox: [12.35, 36.60, 15.70, 38.35],
  axis: [[12.5, 37.9], [15.5, 37.3]],
  viewScale: 1.6,
  label: { lon: 14.0, lat: 37.5, rotation: -12 },
  source: "西西里岛：地中海最大的岛，形状近三角形；北部是亚平宁的延续（马多尼耶、内布罗迪山），中南部是被褶皱抬升的沉积岩丘陵和硫、盐矿区，东岸立着埃特纳——欧洲最高、活动最频繁的活火山之一（ISPRA / INGV）",
};

const SARDINIA: TerrainEntry = {
  id: "sardinia",
  nameZh: "撒丁岛",
  nameEn: "Sardinia / Sardegna",
  category: "island",
  regionId: "europe",
  country: "italy",
  landmark: { name: "真纳尔真图山（Gennargentu，最高点拉马莫拉峰1834m）", lon: 9.310, lat: 40.000, elevation: 1834, kind: "peak" },
  bbox: [8.10, 38.85, 9.90, 41.30],
  axis: [[8.9, 39.1], [9.4, 41.1]],
  viewScale: 1.6,
  label: { lon: 8.9, lat: 40.1, rotation: -75 },
  source: "撒丁岛：地中海第二大岛，是一块古老的地块——主体是海西造山的花岗岩和更老的古生代基岩，只在东部有石灰岩高地（苏普拉蒙泰）；它和科西嘉曾是同一块“撒丁-科西嘉”微陆块，在地中海张开时被转动、分开；地震和火山活动都很弱（ISPRA）",
};

// ============================================================
// 注册表
// ============================================================

export const TERRAIN_REGISTRY: TerrainEntry[] = [
  // 中国西北 — 山脉
  TIANSHAN, ALTAI, KUNLUN, KARAKORAM, PAMIR,
  // 中国西北 — 湖泊
  KANAS, SAYRAM, TIANCHI, BOSTEN, AIBI, LOP_NUR,
  // 中国西北 — 沙漠
  TAKLAMAKAN, GURBANTUNGGUT, KUMTAG,
  // 中国西北 — 盆地
  JUNGGAR_BASIN, TARIM_BASIN, TURPAN_BASIN,
  // 中国西北 — 河谷 / 河流
  ILI_VALLEY, TARIM_RIVER, ERTIS, YARKANT_RIVER,
  // 中国西北 — 草原 / 峡谷 / 丘陵 / 绿洲聚落
  FLAMING_MOUNTAINS, NARAT, KUCHE, BAYANBULAK, KASHGAR, HOTAN, TURPAN_CITY, BACHU, MAIGAITI,
  // 中国 — 山脉
  QINLING, QILIAN, TAIHANG, DAXINGANLING, HENGDUAN, HIMALAYA,
  XIAOXINGANLING, CHANGBAI, YINSHAN, LULIANG, HELAN, LIUPAN,
  DABASHAN, XUEFENG, WUYI, NANLING, DABIE, DALOU, ALTUN,
  // 中国 — 高原
  QINGHAI_TIBET, LOESS, INNER_MONGOLIA, YUNNAN_GUIZHOU,
  // 中国 — 盆地
  SICHUAN, QAIDAM,
  // 中国 — 平原 / 三角洲
  NORTHEAST, NORTH_CHINA, YANGTZE,
  CHENGDU_PLAIN, GUANZHONG_PLAIN, HETAO_PLAIN, YANGTZE_DELTA, PEARL_DELTA,
  // 中国 — 丘陵
  LIAODONG_HILLS, SHANDONG_HILLS, JIANGNAN_HILLS, LIANGGUANG_HILLS,
  // 中国 — 沙漠
  BADAIN_JARAN, TENGGER, KUBUQI, ULAN_BUH, MUUS, GOBI,
  // 中国 — 丘陵（半岛）
  LEIZHOU,
  // 中国 — 河谷 / 峡谷 / 走廊
  HEXI_CORRIDOR, YANGTZE_GORGES, TSANGPO_GORGE, TIGER_LEAPING_GORGE,
  // 中国 — 湖泊
  QINGHAI_LAKE, NAMTSO, POYANG, DONGTING,
  // 中国 — 岛屿
  HAINAN, TAIWAN,
  // ===== 澳大利亚 =====
  GREAT_DIVIDING_RANGE, AUSTRALIAN_ALPS, MACDONNELL_RANGES, FLINDERS_RANGES,
  PILBARA,
  BLUE_MOUNTAINS, KIMBERLEY,
  SIMPSON_DESERT, GREAT_VICTORIA_DESERT,
  NULLARBOR_PLAIN,
  GREAT_ARTESIAN_BASIN,
  LAKE_EYRE,
  ULURU, KATA_TJUTA, GREAT_BARRIER_REEF, TWELVE_APOSTLES,
  TASMANIA, KGARI,
  MURRAY_DARLING,
  KAKADU, GRAMPIANS, NINGALOO,
  // ===== 北美洲 / 美国 =====
  ROCKY_MOUNTAINS, APPALACHIAN_MOUNTAINS, SIERRA_NEVADA_US, CASCADE_RANGE, ALASKA_RANGE,
  COLORADO_PLATEAU, GRAND_CANYON, GREAT_PLAINS_US, GREAT_BASIN, DEATH_VALLEY,
  MOJAVE_DESERT, GREAT_LAKES,
  YELLOWSTONE, YOSEMITE_VALLEY, MISSISSIPPI_RIVER, CENTRAL_VALLEY_CA, EVERGLADES,
  SONORAN_DESERT, MONUMENT_VALLEY, HAWAIIAN_ISLANDS,
  COLUMBIA_PLATEAU, GREAT_SALT_LAKE, COLORADO_RIVER, ATLANTIC_COASTAL_PLAIN,
  FLORIDA_PENINSULA, CHIHUAHUAN_DESERT_US,
  // ===== 北美洲 / 加拿大 =====
  CANADIAN_SHIELD, CANADIAN_ROCKIES, COAST_MOUNTAINS, SAINT_ELIAS_MOUNTAINS,
  TORNGAT_MOUNTAINS, LONG_RANGE_MOUNTAINS,
  INTERIOR_PLAINS_CA, HUDSON_BAY_LOWLANDS, SAINT_LAWRENCE_LOWLANDS,
  GREAT_SLAVE_LAKE, GREAT_BEAR_LAKE, MACKENZIE_RIVER, HUDSON_BAY,
  BAFFIN_ISLAND, ELLESMERE_ISLAND, VANCOUVER_ISLAND, PRINCE_EDWARD_ISLAND,
  BAY_OF_FUNDY, GASPE_PENINSULA, NIAGARA_ESCARPMENT, ALBERTA_BADLANDS,
  MANICOUAGAN_RESERVOIR, ATHABASCA_SAND_DUNES, LAKE_WINNIPEG, NAHANNI,
  // ===== 亚洲 / 日本 =====
  MOUNT_FUJI, JAPANESE_ALPS, MOUNT_ASO, SAKURAJIMA, MOUNT_UNZEN,
  HAKONE_CALDERA, DAISETSUZAN, KII_MOUNTAINS,
  KANTO_PLAIN, NOBI_PLAIN, OSAKA_PLAIN, ISHIKARI_PLAIN, TOKACHI_PLAIN,
  LAKE_BIWA, LAKE_TOWADA, SHIKOTSU_TOYA,
  KUROBE_GORGE, KAMIKOCHI, SETO_INLAND_SEA, SANRIKU_COAST, SHIRETOKO_PENINSULA,
  TOTTORI_SAND_DUNES, YAKUSHIMA, RYUKYU_ISLANDS, SHINANO_RIVER, TONE_RIVER,
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
  // ===== 欧洲 / 英国 =====
  SCOTTISH_HIGHLANDS, CAIRNGORMS, SOUTHERN_UPLANDS, SNOWDONIA,
  BRECON_BEACONS, LAKE_DISTRICT, PENNINES, MOURNE_MOUNTAINS,
  PEAK_DISTRICT, YORKSHIRE_DALES, NORTH_YORK_MOORS, DARTMOOR,
  EXMOOR, CHEVIOT_HILLS, SOUTH_DOWNS, CHILTERNS,
  WHITE_CLIFFS_OF_DOVER, JURASSIC_COAST, GIANTS_CAUSEWAY, SEVEN_SISTERS,
  CORNWALL_COAST, PEMBROKESHIRE_COAST, GOWER_PENINSULA, CHEDDAR_GORGE, GREAT_GLEN,
  LOCH_LOMOND, LOUGH_NEAGH, RIVER_THAMES, RIVER_SEVERN,
  THE_FENS, THE_BROADS, ISLE_OF_SKYE, OUTER_HEBRIDES,
  // ===== 欧洲 / 冰岛 =====
  HEKLA, KATLA, EYJAFJALLAJOKULL, GRIMSVOTN, FAGRADALSFJALL, SNAEFELLSJOKULL,
  ASKJA, THINGVELLIR,
  VATNAJOKULL, LANGJOKULL, HOFSJOKULL, MYRDALSJOKULL,
  SKEIDARARSANDUR, JOKULSARLON, LAKI,
  GULLFOSS, DETTIFOSS, JOKULSARGLJUFUR, SKOGAFOSS, HAUKADALUR_GEYSIR, KRAFLA,
  MYVATN, REYKJANES_PENINSULA, REYNISFJARA, LATRABJARG, VESTMANNAEYJAR,
  THJORSA, JOKULSA_A_FJOLLUM,
  // ===== 欧洲 / 瑞士 =====
  BERNESE_ALPS, PENNINE_ALPS, MATTERHORN, RHAETIAN_ALPS, GOTTHARD_MASSIF,
  JURA_MOUNTAINS, GLARUS_THRUST, MONTE_SAN_GIORGIO,
  SAENTIS, ALETSCH_GLACIER, RHONE_GLACIER, GORNER_GLACIER,
  LAUTERBRUNNEN_VALLEY, RHONE_VALLEY, SWISS_PLATEAU,
  LAKE_GENEVA, LAKE_CONSTANCE, LAKE_LUCERNE, LAKE_ZURICH, LAKE_MAGGIORE,
  CREUX_DU_VAN, EMMENTAL_HILLS,
  AARE_RIVER, ALPINE_RHINE, RHINE_FALLS, AARESCHLUCHT, RUINAULTA,
  // ===== 欧洲 / 挪威 =====
  SCANDINAVIAN_MOUNTAINS_NORWAY, JOTUNHEIMEN, HARDANGERVIDDA, FINNMARKSVIDDA,
  SOGNEFJORD, GLOMMA, LOFOTEN, JAEREN,
  DOVREFJELL, RONDANE, TROLLHEIMEN, JOSTEDALSBREEN, FOLGEFONNA, SVARTISEN,
  GEIRANGERFJORD, NAEROYFJORD, HARDANGERFJORD, LYSEFJORD, TRONDHEIMSFJORD,
  ROMSDALEN, GUDBRANDSDALEN, LYNGEN_ALPS, MJOSA, FEMUNDEN, HORNINDALSVATNET,
  TROLLTUNGA, SALTSTRAUMEN, VARANGERHALVOYA,
  // ===== 欧洲 / 法国 =====
  FRENCH_ALPS, PYRENEES, MASSIF_CENTRAL, VOSGES, ARMORICAN_MASSIF,
  PARIS_BASIN, AQUITAINE_BASIN, CORSICA,
  LOIRE_RIVER, RHONE_RIVER, SEINE_RIVER, ECRINS, VANOISE, MER_DE_GLACE, CAMARGUE,
  CHAINE_DES_PUYS, CANTAL_VOLCANO, MONTS_DORE, GRANDS_CAUSSES, VERCORS, CEVENNES, VERDON_GORGE,
  ARDECHE_GORGE, LANDES_DE_GASCOGNE, CALANQUES, DUNE_DU_PILAT, ETRETAT,
  MONT_SAINT_MICHEL_BAY, CIRQUE_DE_GAVARNIE,
  // ===== 欧洲 / 意大利 =====
  ITALIAN_ALPS, APENNINES, DOLOMITES, PO_VALLEY, PO_RIVER, TIBER_RIVER, SICILY, SARDINIA,
];

/**
 * 大面积地形取景放大系数（见 lib/terrain-camera.ts `SHOW_KM_MAX_WIDE`）。
 * 只给"拉近看只会看到一个局部景物、看不出地貌本身"的高原 / 大盆地 / 大平原 / 大沙漠。
 * 集中在这里维护，避免逐条改。
 */
const WIDE_VIEW: Record<string, number> = {
  // 看出"一整片"的超大地貌
  "qinghai-tibet": 2.7,
  "inner-mongolia": 2.5,
  "tarim-basin": 2.6,
  "junggar-basin": 2.4,
  taklamakan: 2.5,
  gobi: 2.6,
  northeast: 2.4,
  "great-artesian-basin": 2.6,
  "great-victoria-desert": 2.5,
  "great-dividing-range": 2.4,
  "murray-darling": 2.4,
  kimberley: 2.2,
  // 大高原 / 大盆地 / 大平原
  loess: 1.9,
  "yunnan-guizhou": 1.9,
  qaidam: 1.9,
  sichuan: 1.8,
  "north-china": 2.0,
  yangtze: 2.0,
  "hexi-corridor": 1.9,
  "simpson-desert": 2.0,
  "nullarbor-plain": 1.9,
  "badain-jaran": 1.8,
  "lake-eyre": 1.8,
  "jiangnan-hills": 1.8,
  "liangguang-hills": 1.9,
  pilbara: 1.7,
  "great-barrier-reef": 1.8,
  // 北美 / 美国 —— 大型线状山系
  "rocky-mountains": 2.6,
  "appalachian-mountains": 2.5,
  "sierra-nevada-us": 2.0,
  "cascade-range": 2.2,
  "alaska-range": 1.9,
  // 北美 / 美国 —— 大面积高原 / 平原 / 盆地 / 沙漠 / 湖群
  "colorado-plateau": 2.3,
  "great-plains-us": 2.6,
  "great-basin": 2.5,
  "mojave-desert": 2.0,
  "great-lakes": 2.6,
  "death-valley": 1.6,
  yellowstone: 1.8,
  "mississippi-river": 2.6,
  "central-valley-ca": 2.2,
  everglades: 2.0,
  "sonoran-desert": 2.2,
  "hawaiian-islands": 2.4,
  "columbia-plateau": 2.2,
  "colorado-river": 2.6,
  "atlantic-coastal-plain": 2.5,
  "florida-peninsula": 2.2,
  "chihuahuan-desert-us": 2.2,
  // 北美 / 加拿大
  "canadian-shield": 2.7,
  "canadian-rockies": 2.4,
  "coast-mountains": 2.5,
  "saint-elias-mountains": 2.0,
  "long-range-mountains": 1.8,
  "interior-plains-ca": 2.6,
  "hudson-bay-lowlands": 2.5,
  "saint-lawrence-lowlands": 2.0,
  "great-slave-lake": 2.0,
  "great-bear-lake": 2.0,
  "mackenzie-river": 2.6,
  "hudson-bay": 2.7,
  "baffin-island": 2.6,
  "ellesmere-island": 2.5,
  "vancouver-island": 2.0,
  "bay-of-fundy": 1.9,
  "gaspe-peninsula": 1.9,
  "niagara-escarpment": 2.2,
  "lake-winnipeg": 2.3,
  "nahanni": 1.7,
  // 亚洲 / 日本
  "japanese-alps": 2.0,
  "mount-aso": 1.6,
  daisetsuzan: 1.8,
  "kii-mountains": 1.8,
  "kanto-plain": 1.9,
  "ishikari-plain": 1.8,
  "tokachi-plain": 1.8,
  "seto-inland-sea": 2.4,
  "sanriku-coast": 2.2,
  "shiretoko-peninsula": 1.6,
  yakushima: 1.4,
  "ryukyu-islands": 2.6,
  "shinano-river": 2.0,
  "tone-river": 2.1,
  // 欧洲 / 瑞士
  "bernese-alps": 1.6,
  "pennine-alps": 1.5,
  "rhaetian-alps": 1.4,
  "gotthard-massif": 1.5,
  "jura-mountains": 2.2,
  "glarus-thrust": 1.4,
  "rhone-valley": 2.0,
  "swiss-plateau": 2.4,
  "lake-geneva": 1.7,
  "lake-constance": 1.6,
  "emmental-hills": 1.6,
  "aare-river": 2.2,
  "alpine-rhine": 2.0,
  ruinaulta: 1.3,
  // 欧洲 / 冰岛
  askja: 1.5,
  thingvellir: 1.6,
  langjokull: 1.9,
  hofsjokull: 1.8,
  myrdalsjokull: 1.6,
  skeidararsandur: 2.0,
  laki: 1.7,
  jokulsargljufur: 1.6,
  krafla: 1.5,
  "reykjanes-peninsula": 1.8,
  latrabjarg: 1.6,
  thjorsa: 2.1,
  "jokulsa-a-fjollum": 2.1,
  // 欧洲 / 英国
  "scottish-highlands": 2.4,
  cairngorms: 1.8,
  "southern-uplands": 2.2,
  snowdonia: 1.6,
  "brecon-beacons": 1.7,
  "lake-district": 1.8,
  pennines: 2.5,
  "peak-district": 1.6,
  "yorkshire-dales": 1.7,
  "north-york-moors": 1.7,
  dartmoor: 1.5,
  exmoor: 1.5,
  "cheviot-hills": 1.6,
  "south-downs": 2.0,
  chilterns: 1.8,
  "jurassic-coast": 2.0,
  "cornwall-coast": 2.0,
  "pembrokeshire-coast": 1.8,
  "great-glen": 1.9,
  "river-thames": 2.3,
  "river-severn": 2.2,
  "the-fens": 2.1,
  "loch-lomond": 1.5,
  "lough-neagh": 1.5,
  "outer-hebrides": 2.0,
  "isle-of-skye": 1.6,
  // 大洋洲 / 新西兰
  "aoraki-southern-alps": 2.4,
  "kaikoura-ranges": 1.7,
  "tararua-range": 1.8,
  "mount-ruapehu": 1.7,
  fiordland: 2.2,
  "lake-taupo": 1.9,
  "lake-wakatipu": 1.8,
  "lake-wanaka": 1.6,
  "tasman-glacier": 1.5,
  "canterbury-plains": 2.3,
  "mackenzie-basin": 2.0,
  "central-otago": 2.0,
  "rotorua-caldera": 1.6,
  "waikato-river": 2.3,
  "clutha-river": 2.1,
  "marlborough-sounds": 1.8,
  "stewart-island": 1.7,
  "auckland-volcanic-field": 1.6,
  "banks-peninsula": 1.5,
  "coromandel-peninsula": 1.6,
  // 中等
  pamir: 1.5,
  "turpan-basin": 1.5,
  gurbantunggut: 1.6,
  tengger: 1.6,
  "ulan-buh": 1.5,
  kubuqi: 1.6,
  muus: 1.5,
  "guanzhong-plain": 1.5,
  "hetao-plain": 1.5,
  "yangtze-delta": 1.5,
  "pearl-delta": 1.5,
  ertis: 1.5,
  "tarim-river": 1.7,
  "yarkant-river": 1.6,
};
for (const e of TERRAIN_REGISTRY) {
  const s = WIDE_VIEW[e.id];
  if (s && e.viewScale === undefined) e.viewScale = s;
}

const REGISTRY_BY_ID: Map<string, TerrainEntry> = new Map(
  TERRAIN_REGISTRY.map((e) => [e.id, e])
);

export function getTerrainEntry(id: string): TerrainEntry | undefined {
  return REGISTRY_BY_ID.get(id);
}

/** bbox 中心 [lon, lat] */
export function bboxCenter(bbox: [number, number, number, number]): [number, number] {
  return [(bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2];
}

/**
 * 标签放置点 — 固定在锚点（相机对准处、hover/高亮的中心），
 * 旋转角沿用 entry.label.rotation（山脉沿走向）。
 */
export function labelPosOf(entry: TerrainEntry): { lon: number; lat: number; rotation: number } {
  return {
    lon: entry.landmark.lon,
    lat: entry.landmark.lat,
    rotation: entry.label?.rotation ?? 0,
  };
}
