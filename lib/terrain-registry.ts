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

// —— 澳大利亚补录（2026-08，Geoscience Australia / Parks Australia / 各州公园管理局 / UNESCO）——

const SHARK_BAY: TerrainEntry = {
  id: "shark-bay",
  nameZh: "鲨鱼湾（Gathaagudu）",
  nameEn: "Shark Bay (Gathaagudu)",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "哈梅林池叠层石", lon: 114.163, lat: -26.405, elevation: 0, kind: "escarpment" },
  bbox: [112.9, -27.0, 114.5, -24.8],
  axis: [[113.3, -26.8], [113.6, -24.9]],
  label: { lon: 113.5, lat: -25.7, rotation: 0 },
  viewScale: 1.4,
  source: "鲨鱼湾：澳大利亚大陆最西端的海湾群，世界自然遗产（UNESCO 1991）；哈梅林池因海水盐度约为普通海水两倍而保存现代叠层石；贝壳滩由鸟蛤壳堆积、长约100km、厚可达约10m（UNESCO / DBCA WA）",
};

const PURNULULU: TerrainEntry = {
  id: "purnululu",
  nameZh: "普努鲁鲁（邦格尔邦格尔山）",
  nameEn: "Purnululu (Bungle Bungle Range)",
  category: "hills",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "邦格尔邦格尔山南缘蜂窝状塔群", lon: 128.383, lat: -17.53, elevation: 578, kind: "escarpment" },
  bbox: [128.2, -17.68, 128.55, -17.32],
  label: { lon: 128.28, lat: -17.42, rotation: 0 },
  source: "普努鲁鲁国家公园：泥盆纪石英砂岩与砾岩经约2000万年侵蚀而成的蜂窝状锥丘，橙灰相间的横向条纹分别是含铁锰的结壳与蓝藻结壳；UNESCO 称其为“砂岩锥状喀斯特的典范”；世界自然遗产（UNESCO 2003 / Parks Australia）",
};

const WAVE_ROCK: TerrainEntry = {
  id: "wave-rock",
  nameZh: "波浪岩",
  nameEn: "Wave Rock",
  category: "inselberg",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "波浪岩（海登岩北壁）", lon: 118.897, lat: -32.443, elevation: 350, kind: "escarpment" },
  bbox: [118.83, -32.49, 118.96, -32.39],
  label: { lon: 118.9, lat: -32.38, rotation: 0 },
  source: "波浪岩：海登岩（Hyden Rock）岛山北侧一段高约15m、长约110m的凹形坡（flared slope）；岩体属伊尔冈克拉通花岗岩、约26亿年；凹面由地下水在基岩根部的化学风化形成，后随土层剥蚀而出露（Wikipedia 引 Twidale；WA DBCA）",
};

const KARLU_KARLU: TerrainEntry = {
  id: "karlu-karlu",
  nameZh: "卡尔卢卡尔卢（魔鬼大理石）",
  nameEn: "Karlu Karlu (Devils Marbles)",
  category: "inselberg",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "卡尔卢卡尔卢巨砾群", lon: 134.267, lat: -20.565, elevation: 400, kind: "escarpment" },
  bbox: [134.19, -20.63, 134.34, -20.49],
  label: { lon: 134.32, lat: -20.48, rotation: 0 },
  source: "卡尔卢卡尔卢／魔鬼大理石保护区：约16亿年的花岗岩体经抬升、节理切割成方块，再经球状风化（沿棱角风化更快）磨圆，巨砾直径约0.5—6m；瓦鲁蒙古／凯特泰／阿利亚瓦拉／瓦尔皮里人的圣地（NT Parks and Wildlife）",
};

const KINGS_CANYON: TerrainEntry = {
  id: "kings-canyon",
  nameZh: "国王峡谷（瓦塔卡）",
  nameEn: "Kings Canyon (Watarrka)",
  category: "gorge",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "国王峡谷砂岩崖壁", lon: 131.573, lat: -24.251, elevation: 700, kind: "gorge" },
  bbox: [131.45, -24.35, 131.70, -24.14],
  axis: [[131.52, -24.30], [131.62, -24.20]],
  label: { lon: 131.60, lat: -24.13, rotation: 0 },
  source: "瓦塔卡国家公园国王峡谷：切入约4亿年前（泥盆纪）风成沙丘沉积的梅里尼砂岩（Mereenie Sandstone），崖壁高约100m；砂岩下有页岩隔水层，托起“伊甸园”水潭；河流沿垂直节理下切，顶面被切成“失落之城”圆丘（NT Parks — Watarrka Geology）",
};

const NITMILUK: TerrainEntry = {
  id: "nitmiluk",
  nameZh: "尼特米卢克（凯瑟琳峡谷）",
  nameEn: "Nitmiluk (Katherine Gorge)",
  category: "gorge",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "凯瑟琳河第一峡谷", lon: 132.438, lat: -14.313, elevation: 120, kind: "gorge" },
  bbox: [132.33, -14.46, 132.62, -14.20],
  axis: [[132.40, -14.42], [132.55, -14.24]],
  label: { lon: 132.36, lat: -14.30, rotation: 0 },
  source: "尼特米卢克国家公园：凯瑟琳河切穿约16.5亿年的孔博尔吉砂岩（Kombolgie Sandstone），沿节理与断层形成一串相互成角的直线状峡谷，共13段；由贾沃因（Jawoyn）人拥有、共同管理，“Nitmiluk”意为“蝉之地”（NT Parks / northernterritory.com）",
};

const GLASSHOUSE_MOUNTAINS: TerrainEntry = {
  id: "glasshouse-mountains",
  nameZh: "玻璃屋山",
  nameEn: "Glass House Mountains",
  category: "inselberg",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "比尔瓦山（Beerwah）", lon: 152.886, lat: -26.856, elevation: 556, kind: "peak" },
  bbox: [152.80, -27.02, 153.02, -26.72],
  label: { lon: 152.78, lat: -26.72, rotation: 0 },
  source: "玻璃屋山：昆士兰东南部一组孤立的火山颈，约2500—2700万年前（中新世）由粗面岩、流纹岩岩浆在浅部凝固，周围较软的砂岩被剥蚀后留存；1770 年由詹姆斯·库克命名；吉尼巴拉（Jinibara）人的重要文化景观（QLD Parks / Oregon State Volcano World）",
};

const GREAT_SANDY_DESERT: TerrainEntry = {
  id: "great-sandy-desert",
  nameZh: "大沙沙漠",
  nameEn: "Great Sandy Desert",
  category: "desert",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "沙脊与丘间走廊", lon: 124.5, lat: -20.6, elevation: 300, kind: "dune" },
  bbox: [121.5, -23.0, 129.0, -18.0],
  axis: [[122.0, -20.8], [128.5, -20.4]],
  label: { lon: 124.5, lat: -20.0, rotation: 0 },
  viewScale: 1.9,
  source: "大沙沙漠：西澳东北部、跨皮尔巴拉与南金伯利并延入北领地，Geoscience Australia 命名沙漠面积约26.7万km²；以低矮沙原与近东西向的纵向（线状）沙丘为主，部分沙脊连续超过40km、丘间走廊有黏土坑与盐湖；沙丘因铁氧化物包膜而呈红色（Geoscience Australia）",
};

const GREAT_AUSTRALIAN_BIGHT: TerrainEntry = {
  id: "great-australian-bight",
  nameZh: "大澳大利亚湾（邦达崖）",
  nameEn: "Great Australian Bight (Bunda Cliffs)",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "邦达崖", lon: 131.2, lat: -31.63, elevation: 90, kind: "escarpment" },
  bbox: [128.8, -32.4, 133.6, -31.4],
  axis: [[129.0, -31.7], [133.4, -31.6]],
  label: { lon: 131.0, lat: -31.9, rotation: 0 },
  viewScale: 1.5,
  source: "大澳大利亚湾：南大洋一段开阔海湾，北缘的邦达崖（又称纳拉伯崖）沿岸连续约210km、高约60—120m，由始新世威尔逊崖石灰岩（Wilson Bluff Limestone，尤克拉盆地）组成，是澳大利亚与南极分离后残留的古海底边缘；比海（Head of Bight）是南露脊鲸重要的繁育海域（Wikipedia 引 Bunda Cliffs；澳大利亚政府 DCCEEW）",
};

const WILLANDRA_LAKES: TerrainEntry = {
  id: "willandra-lakes",
  nameZh: "威兰德拉湖区（芒戈湖）",
  nameEn: "Willandra Lakes Region (Lake Mungo)",
  category: "lake",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "芒戈湖东岸月牙形沙垄（“中国墙”）", lon: 143.05, lat: -33.72, elevation: 60, kind: "lake" },
  bbox: [142.7, -34.1, 143.4, -33.1],
  axis: [[142.9, -34.0], [143.15, -33.3]],
  label: { lon: 142.8, lat: -33.4, rotation: 0 },
  viewScale: 1.4,
  source: "威兰德拉湖区：新南威尔士西南部约17处更新世干涸湖床，由威兰德拉溪（古拉克伦河汊道）补给，约1.85万年前彻底干涸；各湖东岸留有新月形“月牙沙垄”（lunette）；世界自然与文化双遗产（UNESCO 1981）；芒戈湖出土约4万年前的人类遗骸与约460处化石足迹，均有科学发表并经 UNESCO 收录（DCCEEW / UNESCO）",
};

const NAMBUNG_PINNACLES: TerrainEntry = {
  id: "nambung-pinnacles",
  nameZh: "尖峰石阵（南邦）",
  nameEn: "The Pinnacles (Nambung)",
  category: "coast",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "尖峰石阵石灰岩柱群", lon: 115.158, lat: -30.604, elevation: 20, kind: "dune" },
  bbox: [115.08, -30.70, 115.28, -30.49],
  label: { lon: 115.06, lat: -30.5, rotation: 0 },
  source: "南邦国家公园尖峰石阵：黄色石英砂中成千上万根石灰岩柱，最高约3.5m；成岩母质是更新世风成钙质砂岩（塔马拉石灰岩，Tamala Limestone）——由海滩贝屑砂被风吹成沙丘后胶结而成；石柱一般认为是溶蚀管道扩大、合并后残留的产物，具体过程学界仍有讨论（WA DBCA；Lipar & Webb 2014）",
};

const MOUNT_GAMBIER: TerrainEntry = {
  id: "mount-gambier",
  nameZh: "甘比尔山（蓝湖）",
  nameEn: "Mount Gambier (Blue Lake)",
  category: "lake",
  regionId: "oceania",
  country: "australia",
  landmark: { name: "蓝湖（Warwar）", lon: 140.782, lat: -37.845, elevation: 100, kind: "lake" },
  bbox: [140.72, -37.90, 140.85, -37.79],
  label: { lon: 140.7, lat: -37.79, rotation: 0 },
  source: "甘比尔山火山复合体：四个相互叠置的低平火山口（maar），由岩浆与地下水相互作用的爆发形成，蓝湖是其中最大的一个；对最近一次喷发的年代有不同测定（约2.8万年前、约6000年前等），近年一项基于放射性碳的测定认为在约6000年前，若成立则可能是澳大利亚大陆已知最近的一次火山喷发；蓝湖水色在每年11月至次年3月转为钴蓝、其余时间偏灰（SA Dept for Environment and Water）",
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

const GRAN_PARADISO: TerrainEntry = {
  id: "gran-paradiso",
  nameZh: "大帕拉迪索山群",
  nameEn: "Gran Paradiso",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "大帕拉迪索峰（4061m）", lon: 7.2686, lat: 45.5167, elevation: 4061, kind: "peak" },
  bbox: [6.98, 45.33, 7.58, 45.68],
  axis: [[7.05, 45.40], [7.50, 45.62]],
  viewScale: 1.5,
  label: { lon: 7.28, lat: 45.55, rotation: -20 },
  source: "大帕拉迪索山群：意大利阿尔卑斯的一片片麻岩穹隆状高山（“内部结晶岩体”之一），最高峰4061米，是完全在意大利境内的最高峰；1922年在这里设立意大利第一个国家公园——由原王室猎场改建，目的之一是保护当时几乎被猎绝的阿尔卑斯羱羊，与法国的瓦努瓦兹国家公园接壤（Parco Nazionale Gran Paradiso / ISPRA）",
};

const GRAN_SASSO: TerrainEntry = {
  id: "gran-sasso",
  nameZh: "大萨索山",
  nameEn: "Gran Sasso d'Italia",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "大角峰（Corno Grande，2912m）与坎波因佩拉托雷高原", lon: 13.564, lat: 42.469, elevation: 2912, kind: "peak" },
  bbox: [13.28, 42.33, 13.92, 42.62],
  axis: [[13.35, 42.40], [13.85, 42.55]],
  viewScale: 1.6,
  label: { lon: 13.56, lat: 42.50, rotation: -20 },
  source: "大萨索山：亚平宁中段的一片石灰岩高山，最高峰大角峰2912米，是亚平宁的最高点；山上的卡尔代罗内冰川自1913年起是欧洲纬度最南的冰川、现已萎缩到只剩薄薄一层冰；南坡的坎波因佩拉托雷是一片被称作“小西藏”的高山草原（ISPRA / INGV）",
};

const POLLINO: TerrainEntry = {
  id: "pollino",
  nameZh: "波利诺山",
  nameEn: "Pollino",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "多尔切多尔梅峰（Serra Dolcedorme，2267m）", lon: 16.200, lat: 39.900, elevation: 2267, kind: "peak" },
  bbox: [15.88, 39.74, 16.48, 40.06],
  axis: [[15.95, 39.80], [16.40, 40.00]],
  viewScale: 1.7,
  label: { lon: 16.15, lat: 39.90, rotation: -20 },
  source: "波利诺山：亚平宁南段、巴西利卡塔与卡拉布里亚交界的一片石灰岩-白云岩高山，最高峰多尔切多尔梅2267米；波利诺国家公园约1925平方公里，是意大利面积最大的国家公园，以孑遗针叶树“波斯尼亚松”（pino loricato）为标志——园内一株经科学定年约1230岁的波斯尼亚松是欧洲已知最老的树（Parco Nazionale del Pollino）",
};

const GENNARGENTU: TerrainEntry = {
  id: "gennargentu",
  nameZh: "真纳尔真图山",
  nameEn: "Gennargentu",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "拉马莫拉峰（Punta La Marmora，1834m，撒丁岛最高点）", lon: 9.312, lat: 39.992, elevation: 1834, kind: "peak" },
  bbox: [9.10, 39.84, 9.56, 40.16],
  axis: [[9.18, 39.90], [9.45, 40.12]],
  viewScale: 1.5,
  label: { lon: 9.31, lat: 39.99, rotation: -20 },
  source: "真纳尔真图山：撒丁岛中东部的高地，撒丁岛的最高点拉马莫拉峰1834米；岩石是海西造山的古生代片岩、板岩，山形浑圆、林线以上是牧场，是撒丁岛几条主要河流的源头，也是传统牧羊文化区“巴尔巴贾”的核心（ISPRA）",
};

const LAKE_GARDA: TerrainEntry = {
  id: "lake-garda",
  nameZh: "加尔达湖",
  nameEn: "Lake Garda / Lago di Garda",
  category: "lake",
  regionId: "europe",
  country: "italy",
  landmark: { name: "加尔达湖（北段峡谷段 / 南段冰碛丘一带）", lon: 10.65, lat: 45.65, elevation: 65, kind: "lake" },
  bbox: [10.48, 45.38, 10.92, 45.92],
  axis: [[10.72, 45.42], [10.60, 45.88]],
  viewScale: 1.5,
  label: { lon: 10.65, lat: 45.65, rotation: -75 },
  source: "加尔达湖：按面积是意大利最大的湖（约370平方公里）；一条阿尔卑斯的冰川沿构造谷向南流、把谷底刨深（北段最深约346m、两岸是峭壁），在谷口一带堆出一圈同心的终碛丘（南段因此宽浅、四周是低缓的葡萄园）——是典型的“冰蚀-冰碛”湖（ISPRA）",
};

const LAKE_COMO: TerrainEntry = {
  id: "lake-como",
  nameZh: "科莫湖",
  nameEn: "Lake Como / Lago di Como",
  category: "lake",
  regionId: "europe",
  country: "italy",
  landmark: { name: "科莫湖·三汊口（贝拉焦一带）", lon: 9.263, lat: 45.985, elevation: 199, kind: "lake" },
  bbox: [9.04, 45.78, 9.44, 46.22],
  axis: [[9.25, 45.82], [9.28, 46.18]],
  viewScale: 1.5,
  label: { lon: 9.26, lat: 45.99, rotation: -78 },
  source: "科莫湖：阿尔卑斯脚下一个倒“Y”字形的深湖，最深约410m、湖底远低于海平面（隐洼地）；“Y”形来自末次冰期的阿达冰川——冰流被山体分成三股、各刨出一条深槽，三槽在贝拉焦一带交汇（ISPRA）",
};

const VENETIAN_LAGOON: TerrainEntry = {
  id: "venetian-lagoon",
  nameZh: "威尼斯潟湖",
  nameEn: "Venetian Lagoon / Laguna di Venezia",
  category: "coast",
  regionId: "europe",
  country: "italy",
  landmark: { name: "威尼斯潟湖（威尼斯本岛与利多沙洲一带）", lon: 12.35, lat: 45.42, elevation: 0, kind: "escarpment" },
  bbox: [12.13, 45.18, 12.62, 45.62],
  viewScale: 1.5,
  label: { lon: 12.35, lat: 45.42, rotation: 0 },
  source: "威尼斯潟湖：亚得里亚海北端一片约550平方公里的浅水潟湖，被一列沙坝岛（利多）和三个潮汐口与外海隔开；冰后期海面上升淹没波河平原东缘、加上布伦塔、锡莱等河带来的泥沙，共同塑造了潟湖；地面因自然沉降和20世纪抽取地下水，近百年相对海面下降约20多厘米，现有 MOSE 活动闸防潮（ISPRA）",
};

const MOUNT_VESUVIUS: TerrainEntry = {
  id: "mount-vesuvius",
  nameZh: "维苏威火山",
  nameEn: "Mount Vesuvius / Vesuvio",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "维苏威火山锥（约1281m）与索马环形山脊", lon: 14.426, lat: 40.821, elevation: 1281, kind: "peak" },
  bbox: [14.34, 40.77, 14.53, 40.88],
  viewScale: 1.3,
  label: { lon: 14.43, lat: 40.82, rotation: 0 },
  source: "维苏威火山：那不勒斯湾东岸的一座层火山，是欧洲大陆唯一的活火山；今天的锥体套在更老的“索马火山”一圈残缺的环形山脊里；公元79年的一次普林尼式喷发把庞贝、赫库兰尼姆两座罗马城埋在数米厚的火山碎屑下（世界遗产），最近一次喷发在1944年；维苏威国家公园（INGV / UNESCO）",
};

const MOUNT_ETNA: TerrainEntry = {
  id: "mount-etna",
  nameZh: "埃特纳火山",
  nameEn: "Mount Etna",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "埃特纳火山（约3350m，欧洲最高的活火山）", lon: 14.993, lat: 37.751, elevation: 3350, kind: "peak" },
  bbox: [14.83, 37.58, 15.22, 37.92],
  axis: [[14.9, 37.65], [15.1, 37.88]],
  viewScale: 1.5,
  label: { lon: 14.99, lat: 37.75, rotation: 0 },
  source: "埃特纳火山：西西里东岸的一座巨型层火山，约3350m，是欧洲最高、也是世界上活动最频繁的火山之一，几乎常年在喷发或流熔岩；东坡有一个巨大的塌陷凹地“公牛谷”；山坡上一层层熔岩流、火山锥和葡萄园、柑橘园相间；2013年列入世界遗产（INGV / UNESCO）",
};

const CAMPI_FLEGREI: TerrainEntry = {
  id: "campi-flegrei",
  nameZh: "坎皮弗莱格瑞",
  nameEn: "Campi Flegrei / Phlegraean Fields",
  category: "basin",
  regionId: "europe",
  country: "italy",
  landmark: { name: "索尔法塔拉火口与波佐利一带（大破火山口内）", lon: 14.139, lat: 40.827, elevation: 90, kind: "escarpment" },
  bbox: [14.00, 40.77, 14.27, 40.93],
  viewScale: 1.5,
  label: { lon: 14.13, lat: 40.84, rotation: 0 },
  source: "坎皮弗莱格瑞（“燃烧的原野”）：那不勒斯以西一个直径约12—15km 的大破火山口，由约3.9万年前和1.5万年前两次特大喷发塌陷形成，口内散布几十座小火山锥、火口湖和喷气孔（索尔法塔拉）；波佐利一带的地面在缓慢升降（“慢地动”bradyseism），古罗马集市的石柱上留有被海生动物钻蚀的痕迹、记录了几米的升降；INGV 密切监测（INGV）",
};

const AEOLIAN_ISLANDS: TerrainEntry = {
  id: "aeolian-islands",
  nameZh: "伊奥利亚群岛",
  nameEn: "Aeolian Islands / Isole Eolie",
  category: "island",
  regionId: "europe",
  country: "italy",
  landmark: { name: "利帕里岛与武尔卡诺岛（群岛中部）", lon: 14.955, lat: 38.480, elevation: 400, kind: "island" },
  bbox: [14.30, 38.33, 15.30, 38.85],
  axis: [[14.5, 38.55], [15.25, 38.80]],
  viewScale: 1.7,
  label: { lon: 14.8, lat: 38.55, rotation: -20 },
  source: "伊奥利亚群岛：西西里以北一列7座主要火山岛（利帕里、武尔卡诺、萨利纳、斯特龙博利等），是非洲板块俯冲带上升的岩浆堆成的；“火山”（volcano）和两种喷发方式“武尔卡诺式”“斯特龙博利式”都以这里的岛命名；利帕里的黑曜岩和浮岩、武尔卡诺的喷气孔和泥浴很有名；2000年列入世界遗产（INGV / UNESCO）",
};

const STROMBOLI: TerrainEntry = {
  id: "stromboli",
  nameZh: "斯特龙博利火山",
  nameEn: "Stromboli",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "斯特龙博利火山岛（约924m）与“火流”坡（Sciara del Fuoco）", lon: 15.213, lat: 38.789, elevation: 924, kind: "peak" },
  bbox: [15.16, 38.75, 15.27, 38.83],
  viewScale: 1.3,
  label: { lon: 15.21, lat: 38.79, rotation: 0 },
  source: "斯特龙博利火山：伊奥利亚群岛最北的一座火山岛，两千多年来几乎从未停止过每隔几分钟到几十分钟一次的小规模爆炸（“斯特龙博利式”喷发），夜里从海上看像一座灯塔，故有“地中海的灯塔”之称；西北坡有一道叫“火流”的滑塌凹槽，喷出物沿它滚进海里；偶有较强的“阵发”（2019年一次曾造成人员伤亡）（INGV）",
};

const AMALFI_COAST: TerrainEntry = {
  id: "amalfi-coast",
  nameZh: "阿马尔菲海岸",
  nameEn: "Amalfi Coast / Costiera Amalfitana",
  category: "coast",
  regionId: "europe",
  country: "italy",
  landmark: { name: "阿马尔菲 / 波西塔诺一带的石灰岩崖岸", lon: 14.600, lat: 40.630, elevation: 250, kind: "escarpment" },
  bbox: [14.40, 40.58, 14.78, 40.68],
  axis: [[14.42, 40.62], [14.75, 40.64]],
  viewFrom: 180,
  viewScale: 1.4,
  label: { lon: 14.58, lat: 40.63, rotation: -6 },
  source: "阿马尔菲海岸：索伦托半岛南侧约50km 长的一段海岸，拉塔里山的石灰岩崖直插第勒尼安海，被一条条短而陡的深沟切开，村镇沿崖坡层层叠建、坡上是柠檬园的石阶梯田；1997年作为地中海式文化景观列入世界遗产（ISPRA / UNESCO）",
};

const CAPRI: TerrainEntry = {
  id: "capri",
  nameZh: "卡普里岛",
  nameEn: "Capri",
  category: "island",
  regionId: "europe",
  country: "italy",
  landmark: { name: "卡普里岛与法拉利奥尼海蚀柱", lon: 14.233, lat: 40.550, elevation: 400, kind: "island" },
  bbox: [14.18, 40.53, 14.29, 40.575],
  viewScale: 1.3,
  label: { lon: 14.23, lat: 40.55, rotation: 0 },
  source: "卡普里岛：那不勒斯湾口一座石灰岩小岛，原来和索伦托半岛相连、后被海侵隔开；四周是近乎垂直的海崖，海里立着“法拉利奥尼”海蚀柱；“蓝洞”是一个只有小船能钻进去的海蚀洞，阳光从水下的洞口透进来把洞里照成幽蓝色（ISPRA）",
};

const CINQUE_TERRE: TerrainEntry = {
  id: "cinque-terre",
  nameZh: "五渔村海岸",
  nameEn: "Cinque Terre",
  category: "coast",
  regionId: "europe",
  country: "italy",
  landmark: { name: "五渔村（维尔纳扎 / 马纳罗拉一带的梯田崖岸）", lon: 9.710, lat: 44.110, elevation: 150, kind: "escarpment" },
  bbox: [9.64, 44.07, 9.78, 44.16],
  axis: [[9.66, 44.14], [9.76, 44.08]],
  viewFrom: 90,
  viewScale: 1.3,
  label: { lon: 9.71, lat: 44.11, rotation: -55 },
  source: "五渔村：利古里亚东海岸一段陡峭的砂岩-片岩崖岸，五个村子挤在少有的几处溪口小平地上，村后的陡坡被几百公里长的干砌石墙修成一级级葡萄梯田；1997年作为文化景观列入世界遗产，1999年设国家公园；石墙年久失修引发的滑坡是主要威胁（ISPRA / UNESCO）",
};

const TUSCAN_HILLS: TerrainEntry = {
  id: "tuscan-hills",
  nameZh: "托斯卡纳丘陵",
  nameEn: "Tuscan Hills",
  category: "hills",
  regionId: "europe",
  country: "italy",
  landmark: { name: "锡耶纳黏土丘陵（Crete Senesi）与奥尔恰谷", lon: 11.55, lat: 43.20, elevation: 300, kind: "escarpment" },
  bbox: [10.95, 42.85, 11.95, 43.55],
  viewScale: 1.9,
  label: { lon: 11.45, lat: 43.20, rotation: 0 },
  source: "托斯卡纳丘陵：亚平宁西侧一片起伏和缓的丘陵，底子是上新世一片古海留下的黏土、泥灰岩，夹着盐和石膏；锡耶纳以南的“黏土丘陵”几乎无树，被流水冲成沟壑（calanchi）和白色的泥丘（biancane），像月球表面；奥尔恰谷 2004 年作为文化景观列入世界遗产（ISPRA / UNESCO）",
};

const CARSO_KARST: TerrainEntry = {
  id: "carso-karst",
  nameZh: "卡尔索高原",
  nameEn: "The Carso / Karst Plateau",
  category: "plateau",
  regionId: "europe",
  country: "italy",
  landmark: { name: "的里雅斯特北面的卡尔索石灰岩高原", lon: 13.85, lat: 45.70, elevation: 300, kind: "escarpment" },
  bbox: [13.58, 45.58, 14.02, 45.86],
  viewScale: 1.5,
  label: { lon: 13.82, lat: 45.72, rotation: 0 },
  source: "卡尔索高原：的里雅斯特北面一片石灰岩台地，跨意大利与斯洛文尼亚——“喀斯特”（karst）一词就来自这里的地名；地表几乎没有河流、遍布落水洞和溶蚀洼地（doline），地下发育大量洞穴和暗河，蒂马沃河在此“钻”入地下、几十公里后又在海边涌出（ISPRA）",
};

const ALTA_MURGIA: TerrainEntry = {
  id: "alta-murgia",
  nameZh: "上穆尔杰高原",
  nameEn: "Alta Murgia",
  category: "plateau",
  regionId: "europe",
  country: "italy",
  landmark: { name: "上穆尔杰石灰岩台地（阿尔塔穆拉 / 格拉维纳一带）", lon: 16.40, lat: 40.85, elevation: 500, kind: "escarpment" },
  bbox: [15.95, 40.48, 16.85, 41.12],
  viewScale: 1.9,
  label: { lon: 16.40, lat: 40.80, rotation: 0 },
  pois: [
    { name: "马泰拉峡谷与“萨西”窑洞城区（Gravina di Matera）", lon: 16.612, lat: 40.665, note: "台地被切出的干峡谷，谷壁上凿出的窑洞聚落是世界遗产" },
  ],
  source: "上穆尔杰：普利亚中部一片海拔几百米的石灰岩喀斯特台地，地表是一片碎石、矮草的“石漠草原”，被几条只在暴雨时过水的干峡谷（gravina）切开；峡谷壁上从旧石器时代起就有人凿洞居住，马泰拉的“萨西”窑洞城区是延续到20世纪的例子（世界遗产）；上穆尔杰国家公园2004年设立（Parco Nazionale dell'Alta Murgia）",
};

const GARGANO_PROMONTORY: TerrainEntry = {
  id: "gargano-promontory",
  nameZh: "加尔加诺半岛",
  nameEn: "Gargano Promontory",
  category: "hills",
  regionId: "europe",
  country: "italy",
  landmark: { name: "加尔加诺半岛内陆的翁布拉森林一带", lon: 16.00, lat: 41.80, elevation: 700, kind: "escarpment" },
  bbox: [15.58, 41.55, 16.28, 42.02],
  viewScale: 1.6,
  label: { lon: 16.00, lat: 41.78, rotation: 0 },
  source: "加尔加诺半岛：意大利“靴子”的“马刺”，一块石灰岩地垒，原本是亚得里亚海里的一座岛，后来被塔沃利耶雷平原的泥沙连到大陆上；台地上是喀斯特和一片古老的山毛榉-栎树混交林（翁布拉森林，世界遗产），沿海是沙坝拦出的潟湖（莱西纳湖、瓦拉诺湖）和海蚀崖、海蚀柱；加尔加诺国家公园1991年设立（Parco Nazionale del Gargano）",
};

const MARMOLADA: TerrainEntry = {
  id: "marmolada",
  nameZh: "马莫拉达峰",
  nameEn: "Marmolada",
  category: "mountain_system",
  regionId: "europe",
  country: "italy",
  landmark: { name: "马莫拉达峰（Punta Penia，3343m）与马莫拉达冰川", lon: 11.851, lat: 46.434, elevation: 3343, kind: "peak" },
  bbox: [11.77, 46.40, 11.93, 46.48],
  viewScale: 1.3,
  label: { lon: 11.851, lat: 46.434, rotation: 0 },
  source: "马莫拉达峰：多洛米蒂的最高峰（顶峰佩尼亚峰3343m），也是这片山里唯一一座“像样”的山峰——它不是白云岩，而是灰色石灰岩；北坡的马莫拉达冰川是多洛米蒂唯一的冰川，面积已缩到约1.6 km²、退缩极快，可能在本世纪中叶前后消失；2022年一次冰崩造成人员伤亡（ISPRA / Dolomiti UNESCO）",
};

const LAKE_TRASIMENO: TerrainEntry = {
  id: "lake-trasimeno",
  nameZh: "特拉西梅诺湖",
  nameEn: "Lake Trasimeno / Lago Trasimeno",
  category: "lake",
  regionId: "europe",
  country: "italy",
  landmark: { name: "特拉西梅诺湖", lon: 12.10, lat: 43.13, elevation: 257, kind: "lake" },
  bbox: [11.95, 43.03, 12.27, 43.24],
  viewScale: 1.4,
  label: { lon: 12.10, lat: 43.13, rotation: 0 },
  source: "特拉西梅诺湖：翁布里亚一个约128平方公里的浅湖，是亚平宁半岛上最大的湖，但最深只有约6米；它坐落在一个构造洼地里、没有天然出水口（古罗马时代起就靠人工隧道排水），水位随降水大幅波动；公元前217年汉尼拔在此湖畔伏击并大败罗马军队（ISPRA）",
};

const DUNE_DI_PISCINAS: TerrainEntry = {
  id: "dune-di-piscinas",
  nameZh: "皮西纳斯沙丘",
  nameEn: "Dune di Piscinas",
  category: "coast",
  regionId: "europe",
  country: "italy",
  landmark: { name: "皮西纳斯海岸沙丘（撒丁岛西南“绿色海岸”）", lon: 8.440, lat: 39.550, elevation: 30, kind: "dune" },
  bbox: [8.39, 39.49, 8.51, 39.62],
  axis: [[8.46, 39.51], [8.42, 39.60]],
  viewScale: 1.3,
  label: { lon: 8.44, lat: 39.55, rotation: -70 },
  source: "皮西纳斯沙丘：撒丁岛西南“绿色海岸”上一片欧洲少见的大型海岸沙丘，最高处近百米、向内陆延伸数公里；沙来自后方几条河（其中带着19世纪蒙泰韦基奥矿区冲下的物质），被盛行的西风堆上岸、正缓慢埋没后面的刺柏丛，被称作“撒丁岛的撒哈拉”（ISPRA）",
};

// ============================================================
// 欧洲 — 西班牙（regionId: "europe", country: "spain"）
// 坐标 / 高程据西班牙国家地理研究所（IGN）、公园管理机构、UNESCO
// 不含直布罗陀、休达、梅利利亚；跨境地物（比利牛斯）按中性表述、只在西班牙一侧另设专属地物
// ============================================================

const PICOS_DE_EUROPA: TerrainEntry = {
  id: "picos-de-europa",
  nameZh: "欧罗巴峰（欧洲之峰）",
  nameEn: "Picos de Europa",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "布尔内斯尖峰（Naranjo de Bulnes / Picu Urriellu）", lon: -4.836, lat: 43.192, elevation: 2519, kind: "peak" },
  bbox: [-5.15, 43.10, -4.60, 43.30],
  axis: [[-5.1, 43.2], [-4.65, 43.18]],
  label: { lon: -4.9, lat: 43.27, rotation: 0 },
  source: "欧罗巴峰：坎塔布连山脉核心地段，石炭纪石灰岩经阿尔卑斯造山抬升至2600米以上，再叠加冰蚀与喀斯特作用；布尔内斯尖峰（阿斯图里亚斯语 Picu Urriellu）是一根近乎垂直的石灰岩塔，海拔2519m，是西班牙最著名的攀岩地标之一（IGN / 国家公园管理局）",
};

const SISTEMA_CENTRAL: TerrainEntry = {
  id: "sistema-central",
  nameZh: "中央山系",
  nameEn: "Sistema Central",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "阿尔曼索尔峰（格雷多斯山最高峰）", lon: -5.363, lat: 40.267, elevation: 2592, kind: "peak" },
  bbox: [-6.4, 40.0, -3.4, 41.2],
  axis: [[-6.3, 40.35], [-3.5, 41.0]],
  viewScale: 1.5,
  label: { lon: -4.6, lat: 40.9, rotation: -20 },
  source: "中央山系：横贯梅塞塔中部、把它分成南北两块子高原（北子高原属杜罗河流域、南子高原属塔霍河流域）的花岗岩山系，包括瓜达拉马山、格雷多斯山等；主体是海西造山期侵入的花岗岩岩基，在新生代阿尔卑斯造山中被重新抬升、断块化；最高的格雷多斯山阿尔曼索尔峰2592m，保留冰蚀圆谷（IGN）",
};

const SISTEMA_IBERICO: TerrainEntry = {
  id: "sistema-iberico",
  nameZh: "伊比利亚山系",
  nameEn: "Sistema Ibérico",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "乌尔比昂峰（杜罗河发源地）", lon: -2.883, lat: 42.017, elevation: 2228, kind: "peak" },
  bbox: [-3.5, 39.8, -0.5, 42.2],
  axis: [[-2.9, 42.0], [-0.6, 40.0]],
  viewScale: 1.5,
  label: { lon: -1.6, lat: 41.0, rotation: 40 },
  source: "伊比利亚山系：西北—东南向绵延超过500km，是梅塞塔高原与埃布罗盆地、地中海沿岸之间的分水岭，也是伊比利亚半岛大西洋与地中海两大水系的分界——杜罗河、塔霍河向西流，埃布罗河的支流哈隆河等向北流，图里亚河、朱卡尔河向东流；杜罗河即发源于乌尔比昂峰一带；主体为中生代—新生代的灰岩、大理岩与砂岩，阿尔卑斯造山抬升（IGN）",
};

const SIERRA_MORENA: TerrainEntry = {
  id: "sierra-morena",
  nameZh: "莫雷纳山脉",
  nameEn: "Sierra Morena",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "德斯佩尼亚佩罗斯隘口（梅塞塔与瓜达尔基维尔谷地之间的传统关口）", lon: -3.527, lat: 38.383, elevation: 700, kind: "pass" },
  bbox: [-6.8, 37.8, -2.8, 38.6],
  axis: [[-6.5, 38.15], [-3.0, 38.35]],
  viewScale: 1.4,
  label: { lon: -5.0, lat: 38.55, rotation: -6 },
  source: "莫雷纳山脉：梅塞塔高原南缘一道东西向的断块山，把梅塞塔的古生代基底与南边瓜达尔基维尔盆地的新生代沉积陡然分开——山体因阿尔卑斯造山期的挤压沿断裂抬升，北坡缓、南坡（面向盆地一侧）是一道明显的断层崖；最高点不足1400m，山不高但作为南北分界十分连续（IGN）",
};

const SIERRA_NEVADA_ES: TerrainEntry = {
  id: "sierra-nevada-es",
  nameZh: "内华达山脉（西班牙）",
  nameEn: "Sierra Nevada (Spain)",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "穆拉森峰", lon: -3.307, lat: 37.053, elevation: 3479, kind: "peak" },
  bbox: [-3.6, 36.9, -2.9, 37.2],
  axis: [[-3.55, 37.1], [-2.95, 36.95]],
  label: { lon: -3.2, lat: 37.16, rotation: -20 },
  source: "内华达山脉（安达卢西亚）：属贝提科山系（阿尔卑斯造山带的一部分），主要由新生代灰岩与变质岩组成；穆拉森峰3479m，是伊比利亚半岛最高点——比比利牛斯山、坎塔布连山都高，却离地中海海岸只有约40km；山顶保留第四纪冰蚀地貌，冬季有滑雪场（IGN）",
};

const SIERRA_DE_GRAZALEMA: TerrainEntry = {
  id: "sierra-de-grazalema",
  nameZh: "格拉萨莱马山",
  nameEn: "Sierra de Grazalema",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "埃尔托雷翁峰", lon: -5.383, lat: 36.767, elevation: 1648, kind: "peak" },
  bbox: [-5.55, 36.65, -5.15, 36.85],
  label: { lon: -5.42, lat: 36.83, rotation: 0 },
  source: "格拉萨莱马山：安达卢西亚一片石灰岩喀斯特山地，因正对来自大西洋的湿润气流、是水汽遇山抬升的第一道屏障，年均降水量超过2100mm，是西班牙大陆有记录以来最多雨的地方；岩体多孔隙，雨水迅速下渗成地下暗河与溶洞；1977年被列为西班牙第一个联合国教科文组织生物圈保护区（西班牙气象局 / UNESCO）",
};

const GARROTXA_VOLCANIC_ZONE: TerrainEntry = {
  id: "garrotxa-volcanic-zone",
  nameZh: "加罗查火山区",
  nameEn: "La Garrotxa Volcanic Zone",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "克罗斯卡特火山口", lon: 2.530, lat: 42.170, elevation: 835, kind: "peak" },
  bbox: [2.35, 42.05, 2.65, 42.28],
  label: { lon: 2.42, lat: 42.24, rotation: 0 },
  source: "加罗查火山区：伊比利亚半岛东北部一片休眠玄武质火山场，第四纪以来喷发形成40多座火山渣锥、熔岩流与玛珥式火山口；克罗斯卡特火山约1.15万年前喷发，是半岛已知最年轻、保存最完好的火山锥；整个火山区自1982年起为自然公园（IGME / 加泰罗尼亚政府）",
};

const TEIDE: TerrainEntry = {
  id: "teide",
  nameZh: "泰德峰",
  nameEn: "Teide",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "泰德峰火山口", lon: -16.6425, lat: 28.2717, elevation: 3715, kind: "peak" },
  bbox: [-16.75, 28.15, -16.45, 28.35],
  label: { lon: -16.6, lat: 28.36, rotation: 0 },
  source: "泰德峰：加那利群岛特内里费岛上的层状火山，海拔3715m，是西班牙全境最高点；若从大西洋海底基座算起，垂直高度约7500m，是仅次于夏威夷莫纳克亚、莫纳罗亚的世界第三高火山体；山体仍处于休眠期而非死火山；泰德国家公园2007年列入世界自然遗产（UNESCO / 西班牙国家公园管理局）",
};

const MESETA_CENTRAL: TerrainEntry = {
  id: "meseta-central",
  nameZh: "梅塞塔中央高原",
  nameEn: "Meseta Central",
  category: "plateau",
  regionId: "europe",
  country: "spain",
  landmark: { name: "梅塞塔高原腹地（马德里—塞哥维亚一带）", lon: -4.2, lat: 40.7, elevation: 650, kind: "escarpment" },
  bbox: [-7.5, 38.8, -1.0, 42.5],
  viewScale: 2.2,
  label: { lon: -5.0, lat: 41.6, rotation: 0 },
  source: "梅塞塔中央高原：占伊比利亚半岛面积约五分之二的古老台地，平均海拔600—800m，是欧洲面积最大的高原之一；基底是古生代华力西造山形成的伊比利亚地块，长期夷平后又被中央山系一分为二——北为杜罗河流域的北子高原、南为塔霍河与瓜迪亚纳河流域的南子高原；四周被莫雷纳山、伊比利亚山系等更年轻的山地包围（IGN）",
};

const EBRO_BASIN: TerrainEntry = {
  id: "ebro-basin",
  nameZh: "埃布罗盆地",
  nameEn: "Ebro Basin",
  category: "basin",
  regionId: "europe",
  country: "spain",
  landmark: { name: "萨拉戈萨一带（盆地中心）", lon: -0.88, lat: 41.65, elevation: 200, kind: "escarpment" },
  bbox: [-3.0, 41.0, 1.0, 42.8],
  viewScale: 1.7,
  label: { lon: -1.8, lat: 42.3, rotation: 0 },
  source: "埃布罗盆地：夹在比利牛斯山、伊比利亚山系和加泰罗尼亚沿海山脉之间的一个三角形新生代沉积盆地，中新世曾是一个内陆咸水湖盆，之后被埃布罗河体系填满、贯通入海；盆地中心气候干燥，边缘台地上分布着巴德纳斯雷阿莱斯等badland地貌（IGME）",
};

const GUADALQUIVIR_VALLEY: TerrainEntry = {
  id: "guadalquivir-valley",
  nameZh: "瓜达尔基维尔谷地",
  nameEn: "Guadalquivir Valley",
  category: "plain",
  regionId: "europe",
  country: "spain",
  landmark: { name: "科尔多瓦—塞维利亚一带", lon: -5.2, lat: 37.6, elevation: 60, kind: "escarpment" },
  bbox: [-6.3, 36.9, -3.5, 38.3],
  viewScale: 1.6,
  label: { lon: -4.6, lat: 38.1, rotation: 0 },
  source: "瓜达尔基维尔谷地：安达卢西亚一个楔形的新生代前陆盆地，北靠莫雷纳山、南接贝提科山系，瓜达尔基维尔河贯穿其间向西南流入大西洋；是西班牙最肥沃的农业区之一（橄榄、棉花、葵花），塞维利亚是历史上唯一可供远洋帆船溯河直达的内陆港（IGN）",
};

const TABERNAS_DESERT: TerrainEntry = {
  id: "tabernas-desert",
  nameZh: "塔韦纳斯沙漠",
  nameEn: "Tabernas Desert",
  category: "desert",
  regionId: "europe",
  country: "spain",
  landmark: { name: "塔韦纳斯badland地貌", lon: -2.45, lat: 37.09, elevation: 400, kind: "escarpment" },
  bbox: [-2.65, 36.95, -2.25, 37.25],
  label: { lon: -2.55, lat: 37.22, rotation: 0 },
  source: "塔韦纳斯沙漠：位于阿尔梅里亚，夹在洛斯菲拉夫雷斯山与阿拉米利亚山之间的一个构造盆地，约800万年前曾是浅海，之后沉积的海相泥灰岩几乎不含植被、极易被暴雨冲刷成沟壑纵横的badland；年降水量常低于250mm，是欧洲大陆最干旱的地方，被普遍称为“欧洲唯一的沙漠”，虽然按气候学严格标准属半干旱（Junta de Andalucía）",
};

const BARDENAS_REALES: TerrainEntry = {
  id: "bardenas-reales",
  nameZh: "巴德纳斯雷阿莱斯",
  nameEn: "Bardenas Reales",
  category: "desert",
  regionId: "europe",
  country: "spain",
  landmark: { name: "卡斯蒂尔德铁拉孤峰", lon: -1.575, lat: 42.180, elevation: 400, kind: "escarpment" },
  bbox: [-1.75, 42.05, -1.35, 42.35],
  label: { lon: -1.68, lat: 42.32, rotation: 0 },
  source: "巴德纳斯雷阿莱斯：纳瓦拉南部埃布罗盆地边缘一片badland荒漠，由新生代黏土、砂岩、石膏与石灰岩互层构成——黏土松软易被暴雨冲刷，其间夹的硬岩层则抵抗侵蚀，留下孤立的桌状台地与尖塔状孤峰（如卡斯蒂尔德铁拉）；2000年列为联合国教科文组织生物圈保护区（UNESCO）",
};

const TIMANFAYA: TerrainEntry = {
  id: "timanfaya",
  nameZh: "蒂曼法亚",
  nameEn: "Timanfaya",
  category: "plain",
  regionId: "europe",
  country: "spain",
  landmark: { name: "火山山群（Montañas del Fuego）", lon: -13.770, lat: 29.020, elevation: 510, kind: "escarpment" },
  bbox: [-13.87, 28.95, -13.67, 29.10],
  label: { lon: -13.83, lat: 29.09, rotation: 0 },
  source: "蒂曼法亚：加那利群岛兰萨罗特岛西南部一片黑色熔岩原，由1730—1736年一次持续6年的火山喷发形成——一百多个火山口同时或先后喷发，熔岩与火山灰覆盖约200平方公里的农田，摧毁多个村庄；熔岩层最厚处近百米，当地称为“malpaís”（劣地）；如今地表几厘米下仍有余温可点燃干草（西班牙国家公园管理局）",
};

const CALDERA_DE_TABURIENTE: TerrainEntry = {
  id: "caldera-de-taburiente",
  nameZh: "塔布连特火山口",
  nameEn: "Caldera de Taburiente",
  category: "basin",
  regionId: "europe",
  country: "spain",
  landmark: { name: "穆查丘斯岩（火山口北缘最高点）", lon: -17.885, lat: 28.754, elevation: 2426, kind: "peak" },
  bbox: [-17.92, 28.70, -17.83, 28.79],
  label: { lon: -17.86, lat: 28.79, rotation: 0 },
  source: "塔布连特火山口：拉帕尔马岛北部一个巨大的侵蚀火山口，直径约8km、深逾2000m，是世界上最大的侵蚀火山口之一——它不是一次喷发炸出的破火山口，而是约40万年前一座巨大盾状火山的一侧发生山体滑坡后，长期的流水侵蚀掏空内部形成；1954年设为西班牙最早的国家公园之一（Wikipedia / 国家公园管理局）",
};

const RIAS_BAIXAS: TerrainEntry = {
  id: "rias-baixas",
  nameZh: "下利亚斯海湾",
  nameEn: "Rías Baixas",
  category: "coast",
  regionId: "europe",
  country: "spain",
  landmark: { name: "维戈湾", lon: -8.75, lat: 42.23, elevation: 0, kind: "escarpment" },
  bbox: [-9.3, 42.1, -8.6, 42.7],
  axis: [[-9.1, 42.65], [-8.7, 42.15]],
  viewScale: 1.3,
  label: { lon: -8.95, lat: 42.45, rotation: -60 },
  source: "下利亚斯海湾：加利西亚西南海岸四条深入内陆的漏斗状海湾（维戈湾、蓬特维德拉湾、阿罗萨湾、穆罗斯-诺亚湾），是末次冰期后海平面上升淹没原有河谷形成的“溺谷”（ría）——不同于峡湾由冰川挖凿而成，溺谷是未经冰川作用的河谷被海水倒灌，两侧坡度相对平缓；是西班牙重要的贻贝养殖区（IGN）",
};

const COSTA_BRAVA: TerrainEntry = {
  id: "costa-brava",
  nameZh: "布拉瓦海岸",
  nameEn: "Costa Brava",
  category: "coast",
  regionId: "europe",
  country: "spain",
  landmark: { name: "克雷乌斯角", lon: 3.317, lat: 42.317, elevation: 0, kind: "escarpment" },
  bbox: [2.6, 41.6, 3.35, 42.35],
  axis: [[2.65, 41.65], [3.3, 42.3]],
  viewScale: 1.3,
  label: { lon: 2.85, lat: 41.95, rotation: -40 },
  source: "布拉瓦海岸：加泰罗尼亚东北沿海一段以陡峭花岗岩与片岩海崖、细小海湾（cala）交替出现为特征的“险峻海岸”（原意即为此），克雷乌斯角是比利牛斯山脉在地中海的收尾、伊比利亚半岛最东端；强劲的“特拉蒙塔纳风”常年吹拂，把海岸的树木和岩石都塑成偏向一侧的形态（IGN）",
};

const CABO_DE_GATA: TerrainEntry = {
  id: "cabo-de-gata",
  nameZh: "加塔角",
  nameEn: "Cabo de Gata",
  category: "coast",
  regionId: "europe",
  country: "spain",
  landmark: { name: "加塔角灯塔", lon: -2.192, lat: 36.727, elevation: 0, kind: "escarpment" },
  bbox: [-2.30, 36.65, -1.85, 36.95],
  axis: [[-2.28, 36.68], [-1.90, 36.90]],
  label: { lon: -2.05, lat: 36.87, rotation: 30 },
  source: "加塔角：伊比利亚半岛唯一的火山成因海岸，约1300—1400万年前海底安山质—英安质火山喷发形成，如今95%的火山体仍在阿尔沃兰海海面以下；陆上部分是高约百米的火山崖，柱状节理、熔岩穹丘清晰可辨；所在的阿尔梅里亚省是欧洲大陆年均降水量最低的地区（150—170mm），2001年列为联合国教科文组织世界地质公园（UNESCO Global Geopark）",
};

const DONANA: TerrainEntry = {
  id: "donana",
  nameZh: "多尼亚纳湿地",
  nameEn: "Doñana",
  category: "coast",
  regionId: "europe",
  country: "spain",
  landmark: { name: "瓜达尔基维尔河口沼泽", lon: -6.35, lat: 37.0, elevation: 2, kind: "delta" },
  bbox: [-6.55, 36.75, -6.05, 37.25],
  viewScale: 1.4,
  label: { lon: -6.45, lat: 37.2, rotation: 0 },
  source: "多尼亚纳：瓜达尔基维尔河入海口一片约5.4万公顷的季节性沼泽（marisma）、流动沙丘与地中海松林组成的马赛克湿地，是每年数十万只候鸟往返欧洲与非洲的关键中转和越冬地；沼泽夏干冬涝，与沿岸不断向陆地推进的活动沙丘系统相接；1994年列入世界自然遗产（UNESCO）",
};

const DUERO_RIVER: TerrainEntry = {
  id: "duero-river",
  nameZh: "杜罗河",
  nameEn: "Duero River",
  category: "river",
  regionId: "europe",
  country: "spain",
  landmark: { name: "阿里维斯－杜罗峡谷（西班牙与葡萄牙交界）", lon: -6.55, lat: 41.15, elevation: 400, kind: "gorge" },
  bbox: [-6.8, 40.9, -2.9, 41.9],
  axis: [[-2.9, 41.8], [-6.7, 41.1]],
  viewScale: 1.3,
  label: { lon: -4.8, lat: 41.65, rotation: 8 },
  source: "杜罗河：发源于伊比利亚山系乌尔比昂峰一带，全长约900km（其中约570km在西班牙境内），是伊比利亚半岛水量最丰沛的河流，向西流经葡萄牙波尔图入大西洋；在西班牙与葡萄牙交界处切出阿里维斯－杜罗峡谷——一段长逾100km、崖壁陡直的花岗岩峡谷，如今大部分被系列水坝蓄成一串狭长水库（IGN）",
};

const EBRO_RIVER: TerrainEntry = {
  id: "ebro-river",
  nameZh: "埃布罗河",
  nameEn: "Ebro River",
  category: "river",
  regionId: "europe",
  country: "spain",
  landmark: { name: "埃布罗河三角洲", lon: 0.72, lat: 40.72, elevation: 0, kind: "delta" },
  bbox: [0.5, 40.5, 0.9, 40.85],
  label: { lon: 0.65, lat: 40.83, rotation: 0 },
  source: "埃布罗河：西班牙境内最长的河流，全长约930km、流域面积约8.5万平方公里（西班牙最大水系），完全在西班牙境内发源与入海；在塔拉戈纳省注入地中海，河口堆积出一片约320平方公里的鸟足状三角洲——加泰罗尼亚最大的湿地，被稻田和潟湖覆盖，是欧洲候鸟迁徙的重要驿站（IGN）",
};

const ORDESA_CANYON: TerrainEntry = {
  id: "ordesa-canyon",
  nameZh: "奥德萨峡谷",
  nameEn: "Ordesa Canyon",
  category: "gorge",
  regionId: "europe",
  country: "spain",
  landmark: { name: "马蹄尾瀑布（奥德萨谷地尽头）", lon: -0.048, lat: 42.663, elevation: 1780, kind: "gorge" },
  bbox: [-0.20, 42.60, 0.15, 42.75],
  axis: [[-0.15, 42.60], [0.10, 42.72]],
  label: { lon: -0.05, lat: 42.72, rotation: 20 },
  source: "奥德萨峡谷：比利牛斯山脉西班牙一侧、佩尔迪多山（欧洲最高的石灰岩山块，3355m）北坡切出的一道深谷，谷壁近乎垂直、高差可达800余米；与相邻的阿尼斯克洛峡谷（深逾1000m）同属石灰岩喀斯特地貌，谷底常见冰川侵蚀留下的U形槽；“比利牛斯-佩尔迪多山”世界遗产的一部分，法国一侧对应加瓦尔尼冰蚀圆谷（UNESCO / 阿拉贡旅游局）",
};

const SERRA_DE_TRAMUNTANA: TerrainEntry = {
  id: "serra-de-tramuntana",
  nameZh: "特拉蒙塔纳山脉",
  nameEn: "Serra de Tramuntana",
  category: "mountain_system",
  regionId: "europe",
  country: "spain",
  landmark: { name: "梅杰峰（马略卡岛最高峰）", lon: 2.783, lat: 39.807, elevation: 1445, kind: "peak" },
  bbox: [2.35, 39.60, 3.05, 39.95],
  axis: [[2.4, 39.65], [3.0, 39.90]],
  label: { lon: 2.55, lat: 39.93, rotation: -15 },
  source: "特拉蒙塔纳山脉：马略卡岛（巴利阿里群岛）西北岸一道陡直的石灰岩山脉，与海岸线平行，喀斯特地貌发育——溶洞、落水洞与地下水系统丰富（如萨坎帕纳洞深达358m）；千百年梯田农业与引水灌溉系统改造了山地地貌，2011年以“特拉蒙塔纳山脉文化景观”列入世界文化遗产（UNESCO）",
};

const LAGO_DE_SANABRIA: TerrainEntry = {
  id: "lago-de-sanabria",
  nameZh: "萨纳布里亚湖",
  nameEn: "Lago de Sanabria",
  category: "lake",
  regionId: "europe",
  country: "spain",
  landmark: { name: "萨纳布里亚湖", lon: -6.72, lat: 42.128, elevation: 1000, kind: "lake" },
  bbox: [-6.80, 42.08, -6.62, 42.18],
  label: { lon: -6.68, lat: 42.17, rotation: 0 },
  source: "萨纳布里亚湖：西班牙面积最大的天然淡水湖，也是伊比利亚半岛最大的冰川湖，面积约369公顷、最深处53m；末次冰期一条长逾20km的冰舌刨蚀出这条冰蚀谷，冰川退却后终碛垄拦住谷口积水成湖，大约形成于最近一次冰期，约10万年前（Junta de Castilla y León）",
};

const LAGUNA_DE_GALLOCANTA: TerrainEntry = {
  id: "laguna-de-gallocanta",
  nameZh: "加约坎塔湖",
  nameEn: "Laguna de Gallocanta",
  category: "lake",
  regionId: "europe",
  country: "spain",
  landmark: { name: "加约坎塔湖", lon: -1.50, lat: 40.970, elevation: 995, kind: "salt-lake" },
  bbox: [-1.58, 40.90, -1.42, 41.03],
  label: { lon: -1.46, lat: 41.02, rotation: 0 },
  source: "加约坎塔湖：伊比利亚半岛最大的内陆咸水湖，属完全封闭的内流水系（无出海口），湖水靠季节性降雨补给，夏季常大片干涸露出盐滩；每年10月至次年3月，西欧灰鹤种群迁徙途中大批在此停歇，最多时数万只在湖边过夜，是欧洲观鹤的重要地点（Gobierno de Aragón）",
};

const LA_MANCHA_PLAIN: TerrainEntry = {
  id: "la-mancha-plain",
  nameZh: "拉曼恰平原",
  nameEn: "La Mancha Plain",
  category: "plain",
  regionId: "europe",
  country: "spain",
  landmark: { name: "克里普塔纳风车群", lon: -3.183, lat: 39.408, elevation: 650, kind: "escarpment" },
  bbox: [-4.0, 38.8, -2.5, 39.8],
  viewScale: 1.5,
  label: { lon: -3.3, lat: 39.7, rotation: 0 },
  source: "拉曼恰平原：梅塞塔南子高原上一片极其平坦开阔的石灰岩台地，平均海拔约600—700m，地表几乎无起伏、地下蓄水层丰富，是西班牙重要的葡萄种植与灌溉农业区；台地边缘残留的白色传统风车（如克里普塔纳、孔苏埃格拉）是当地风蚀-台地地貌的地标，因《堂吉诃德》而闻名（IGN）",
};

// ============================================================
// 欧洲 — 德国（regionId: "europe", country: "germany"）
// 坐标 / 高程据德国联邦地质与自然资源局（BGR）、各州地质调查局、国家公园管理局、UNESCO
// ============================================================

const BAVARIAN_ALPS: TerrainEntry = {
  id: "bavarian-alps",
  nameZh: "巴伐利亚阿尔卑斯山",
  nameEn: "Bavarian Alps",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "楚格峰", lon: 10.9866, lat: 47.4211, elevation: 2962, kind: "peak" },
  bbox: [10.7, 47.35, 11.35, 47.55],
  label: { lon: 10.98, lat: 47.53, rotation: 0 },
  source: "巴伐利亚阿尔卑斯山：北阿尔卑斯石灰岩带的最北缘，主体维特斯坦山由三叠纪浅海沉积的维特斯坦灰岩经褶皱抬升而成；楚格峰海拔2962m，是德国最高点，峰顶位于德国与奥地利边境上，山顶保留着德国仅存的两小片冰川之一（BGR / 巴伐利亚州测量局）",
};

const BLACK_FOREST: TerrainEntry = {
  id: "black-forest",
  nameZh: "黑森林",
  nameEn: "Black Forest / Schwarzwald",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "费尔德山", lon: 7.9836, lat: 47.8744, elevation: 1493, kind: "peak" },
  bbox: [7.6, 47.55, 8.5, 48.65],
  axis: [[7.9, 47.6], [8.25, 48.55]],
  viewScale: 1.4,
  label: { lon: 8.15, lat: 48.2, rotation: -25 },
  source: "黑森林：德国西南一条南北长约160km的老陆块山地，核心是约10亿年前形成、海西造山期重新固结的片麻岩，外围覆盖较年轻的砂岩；因林木深密、常年荫蔽而得名；最高点费尔德山1493m，是巴登-符腾堡州最高点，也是阿尔卑斯以北德国最高的山（BGR / LGRB）",
};

const HARZ_MOUNTAINS: TerrainEntry = {
  id: "harz-mountains",
  nameZh: "哈茨山",
  nameEn: "Harz Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "布罗肯峰", lon: 10.6156, lat: 51.7991, elevation: 1141, kind: "peak" },
  bbox: [10.3, 51.6, 11.1, 51.95],
  label: { lon: 10.5, lat: 51.92, rotation: 0 },
  source: "哈茨山：德国北部平原上孤立隆起的一片古生代山地，海西造山运动挤压抬升，最古老的岩层逾5.6亿年；主峰布罗肯峰1141m，是德国最北端的高山，因常年多雾（年均起雾天数近300天）、气候近似高出千米的高山而闻名，山顶由约2.9亿年前侵入的布罗肯花岗岩构成（BGR）",
};

const ERZGEBIRGE: TerrainEntry = {
  id: "erzgebirge",
  nameZh: "厄尔士山脉",
  nameEn: "Erzgebirge (Ore Mountains)",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "菲希特尔山", lon: 12.9525, lat: 50.4292, elevation: 1215, kind: "peak" },
  bbox: [12.0, 50.35, 13.5, 50.75],
  axis: [[12.05, 50.55], [13.4, 50.62]],
  viewScale: 1.3,
  label: { lon: 12.6, lat: 50.68, rotation: -6 },
  source: "厄尔士山脉：德国萨克森州与捷克交界一带的海西期山地，最古老岩石约5.7亿年；德国一侧最高点菲希特尔山1215m；因12—20世纪近800年几乎不间断的银、锡、钴矿开采而得名（意为“矿石山”），矿业塑造的采矿聚落、水利系统景观2019年跨德捷两国列入世界遗产（BGR / UNESCO）",
};

const BAVARIAN_FOREST: TerrainEntry = {
  id: "bavarian-forest",
  nameZh: "巴伐利亚森林",
  nameEn: "Bavarian Forest",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "大拉黑尔峰", lon: 13.4013, lat: 49.0894, elevation: 1453, kind: "peak" },
  bbox: [13.0, 48.85, 13.6, 49.2],
  label: { lon: 13.15, lat: 49.18, rotation: 0 },
  source: "巴伐利亚森林：波希米亚地块的德国一侧，海西造山期形成的花岗岩、片麻岩低山，长期夷平后在阿尔卑斯造山期又被抬升；大拉黑尔峰1453m 一带保留着大片花岗岩巨砾“石海”；1970年设立的巴伐利亚森林国家公园是德国第一个国家公园（BGR / 国家公园管理局）",
};

const RHON_MOUNTAINS: TerrainEntry = {
  id: "rhon-mountains",
  nameZh: "罗恩山",
  nameEn: "Rhön Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "瓦塞尔库佩峰", lon: 9.9308, lat: 50.4989, elevation: 950, kind: "peak" },
  bbox: [9.7, 50.35, 10.3, 50.65],
  label: { lon: 9.85, lat: 50.62, rotation: 0 },
  source: "罗恩山：黑森、巴伐利亚、图林根三州交界处一片新生代玄武质火山遗迹，外围三叠纪砂岩地带（称“丘陵罗恩”）散布着许多孤立火山颈；核心“高罗恩”一带最高点瓦塞尔库佩峰950m，是一座已完全停止活动的死火山遗迹；因视野开阔、气流稳定，20世纪初就是德国滑翔机运动的发源地（BGR）",
};

const EIFEL: TerrainEntry = {
  id: "eifel",
  nameZh: "艾费尔",
  nameEn: "Eifel",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "曼德沙伊德玛珥火山群", lon: 6.833, lat: 50.100, elevation: 500, kind: "peak" },
  bbox: [6.3, 50.0, 7.1, 50.6],
  viewScale: 1.4,
  label: { lon: 6.5, lat: 50.5, rotation: 0 },
  source: "艾费尔：德国西部莱茵地堑一侧的第四纪火山场，约70万年前以来喷发形成100多座火山渣锥、玛珥式火山口和穹丘，属大陆裂谷背景下的岩浆活动；地表许多低平的圆形火山口积水成“玛珥湖”，是欧洲大陆内部最典型的玛珥火山群之一（BGR / 火山艾费尔地质公园）",
};

const VOGELSBERG: TerrainEntry = {
  id: "vogelsberg",
  nameZh: "福格尔斯山",
  nameEn: "Vogelsberg",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "陶夫施泰因峰", lon: 9.2333, lat: 50.5333, elevation: 773, kind: "peak" },
  bbox: [9.0, 50.4, 9.5, 50.7],
  label: { lon: 9.15, lat: 50.68, rotation: 0 },
  source: "福格尔斯山：黑森州一片面积约2500平方公里的玄武岩高地，是中欧面积最大的连片火山岩地貌，约1900万年前由无数次玄武岩喷发层层堆叠而成，从中心的“上林”高原向外呈阶梯状台地下降；德国唯一的盾状火山地貌，最高点陶夫施泰因峰773m（BGR / 黑森州地质调查局）",
};

const THURINGIAN_FOREST: TerrainEntry = {
  id: "thuringian-forest",
  nameZh: "图林根森林",
  nameEn: "Thuringian Forest",
  category: "mountain_system",
  regionId: "europe",
  country: "germany",
  landmark: { name: "大贝尔山", lon: 10.7439, lat: 50.6494, elevation: 983, kind: "peak" },
  bbox: [10.4, 50.55, 11.1, 50.85],
  axis: [[10.42, 50.83], [11.05, 50.58]],
  label: { lon: 10.7, lat: 50.82, rotation: -20 },
  source: "图林根森林：图林根州南部一条长约70km、走向西北—东南的古老山地，海西与撒克逊造山期形成，山体浑圆，两侧坡度较陡；最高点大贝尔山983m，山顶保留着图林根森林少数几片高山沼泽之一（BGR / 图林根州地质调查局）",
};

const SWABIAN_JURA: TerrainEntry = {
  id: "swabian-jura",
  nameZh: "施瓦本汝拉山",
  nameEn: "Swabian Jura",
  category: "plateau",
  regionId: "europe",
  country: "germany",
  landmark: { name: "阿尔布陡崖（巴特乌拉赫一带）", lon: 9.40, lat: 48.49, elevation: 750, kind: "escarpment" },
  bbox: [8.7, 48.15, 10.2, 48.7],
  axis: [[8.75, 48.2], [10.15, 48.65]],
  viewScale: 1.6,
  label: { lon: 9.3, lat: 48.6, rotation: 25 },
  source: "施瓦本汝拉山：德国西南一片喀斯特台地，长约220km，宽40—70km，海拔500—1000m；由约1.45—2亿年前侏罗纪浅海沉积的石灰岩构成，最上部“白汝拉”层形成一道连续近180km、高达300m的陡崖（阿尔布陡崖），西北坡陡峭俯瞰内卡河谷，东南坡缓缓过渡到多瑙河谷；台地上溶洞逾2500个（BGR / 施瓦本汝拉山世界地质公园）",
};

const FRANCONIAN_JURA: TerrainEntry = {
  id: "franconian-jura",
  nameZh: "弗兰肯汝拉山",
  nameEn: "Franconian Jura",
  category: "plateau",
  regionId: "europe",
  country: "germany",
  landmark: { name: "索伦霍芬石灰岩产地", lon: 10.9167, lat: 48.9167, elevation: 420, kind: "escarpment" },
  bbox: [10.5, 48.8, 11.8, 49.6],
  axis: [[10.6, 48.85], [11.7, 49.55]],
  viewScale: 1.5,
  label: { lon: 11.3, lat: 49.4, rotation: 30 },
  source: "弗兰肯汝拉山：施瓦本汝拉山向东北延续的同一套侏罗纪石灰岩台地，喀斯特地貌发育，多洞穴与干谷；索伦霍芬一带出产的“索伦霍芬石灰岩”颗粒极细，是特殊潟湖环境沉积形成，因保存了包括始祖鸟在内的大量精美化石而闻名，2022年被国际地质科学联合会列入首批“百大地质遗产”（BGR / IUGS）",
};

const SAXON_SWITZERLAND: TerrainEntry = {
  id: "saxon-switzerland",
  nameZh: "萨克森瑞士",
  nameEn: "Saxon Switzerland",
  category: "hills",
  regionId: "europe",
  country: "germany",
  landmark: { name: "巴斯泰岩", lon: 14.0956, lat: 50.9683, elevation: 305, kind: "escarpment" },
  bbox: [13.9, 50.85, 14.4, 51.05],
  label: { lon: 14.1, lat: 51.02, rotation: 0 },
  source: "萨克森瑞士（易北河砂岩山地）：约1亿年前浅海沉积的砂岩层被抬升后，易北河及支流沿裂隙下切、侵蚀成一片桌状山与深谷交错的地貌；巴斯泰岩是一组高出易北河约194m的砂岩塔群，18世纪末瑞士画家因景色联想到家乡阿尔卑斯而得名“萨克森瑞士”（BGR / 萨克森瑞士国家公园）",
};

const TEUTOBURG_FOREST: TerrainEntry = {
  id: "teutoburg-forest",
  nameZh: "条顿堡森林",
  nameEn: "Teutoburg Forest",
  category: "hills",
  regionId: "europe",
  country: "germany",
  landmark: { name: "埃克斯特施泰因岩柱群", lon: 8.9186, lat: 51.8703, elevation: 300, kind: "escarpment" },
  bbox: [8.3, 51.8, 8.95, 52.1],
  axis: [[8.32, 52.05], [8.9, 51.83]],
  viewScale: 1.3,
  label: { lon: 8.55, lat: 52.05, rotation: -35 },
  source: "条顿堡森林：德国西北部一条由多列平行山脊组成的单面山地带，约1.2亿年前白垩纪浅海沉积的砂岩因富含硅质胶结而抗侵蚀，被造山运动掀斜抬升后突出地表；埃克斯特施泰因是一组由这类硬砂岩风化残留形成的高耸岩柱。公元9年古罗马与日耳曼部落的条顿堡森林之战发生在这一带（具体地点学界仍有讨论），是欧洲古代史上的著名事件（BGR / 北莱茵-威斯特法伦州地质调查局）",
};

const NORTH_GERMAN_PLAIN: TerrainEntry = {
  id: "north-german-plain",
  nameZh: "北德平原",
  nameEn: "North German Plain",
  category: "plain",
  regionId: "europe",
  country: "germany",
  landmark: { name: "吕讷堡石楠草原一带", lon: 10.15, lat: 53.15, elevation: 80, kind: "escarpment" },
  bbox: [7.0, 51.5, 14.5, 54.5],
  viewScale: 2.2,
  label: { lon: 11.0, lat: 52.7, rotation: 0 },
  source: "北德平原：德国中部丘陵以北、南北两海之间的低地，第四纪多次冰期由斯堪的纳维亚冰盖反复覆盖、退却塑造——终碛垄呈西北—东南向断续分布，垄间是冰水沉积的沙质平原与无数冰蚀洼地积水成的小湖；吕讷堡石楠草原是这类冰碛沙地上发育的典型石楠灌丛景观（BGR）",
};

const NORDLINGER_RIES: TerrainEntry = {
  id: "nordlinger-ries",
  nameZh: "讷德林根里斯陨石坑",
  nameEn: "Nördlinger Ries",
  category: "basin",
  regionId: "europe",
  country: "germany",
  landmark: { name: "讷德林根古城（坑内）", lon: 10.4886, lat: 48.8514, elevation: 460, kind: "city" },
  bbox: [10.25, 48.75, 10.7, 48.95],
  label: { lon: 10.35, lat: 48.93, rotation: 0 },
  source: "讷德林根里斯陨石坑：直径约24km、约1480万年前一颗直径逾1km的小行星撞击形成的陨石坑，是欧洲保存最完好、研究最充分的撞击坑之一；撞击产生的冲击石英、苏依长石玻璃等矿物证据于1960年代确认了其撞击成因；讷德林根古城的中世纪城墙就完整地建在坑底平坦的盆地里（BGR / 里斯陨石坑博物馆）",
};

const RHINE_GORGE: TerrainEntry = {
  id: "rhine-gorge",
  nameZh: "莱茵河峡谷",
  nameEn: "Rhine Gorge",
  category: "gorge",
  regionId: "europe",
  country: "germany",
  landmark: { name: "罗蕾莱岩", lon: 7.7297, lat: 50.1428, elevation: 132, kind: "gorge" },
  bbox: [7.55, 49.95, 7.95, 50.38],
  axis: [[7.60, 50.35], [7.90, 49.97]],
  label: { lon: 7.65, lat: 50.30, rotation: 55 },
  source: "莱茵河峡谷（中莱茵河谷）：科布伦茨与宾根之间约65km的河段，莱茵河切穿约4亿年前泥盆纪褶皱形成的莱茵片岩山地；罗蕾莱岩是河道最窄（约130m）、最深处，因岩体是抗蚀的石英岩与板岩、比周边岩石更硬而在河谷持续拓宽过程中残留突出；沿岸城堡林立，2002年列入世界文化遗产（UNESCO / BGR）",
};

const DANUBE_GORGE: TerrainEntry = {
  id: "danube-gorge",
  nameZh: "多瑙河峡谷（魏尔滕堡峡）",
  nameEn: "Danube Gorge (Weltenburg Narrows)",
  category: "gorge",
  regionId: "europe",
  country: "germany",
  landmark: { name: "魏尔滕堡修道院峡口", lon: 11.8333, lat: 48.9083, elevation: 400, kind: "gorge" },
  bbox: [11.75, 48.87, 11.95, 48.95],
  label: { lon: 11.8, lat: 48.94, rotation: 0 },
  source: "多瑙河峡谷：弗兰肯汝拉山南缘，多瑙河切穿约1.5亿年前侏罗纪珊瑚礁灰岩形成的一段长约5km、崖壁高达70m的峡谷；约20万年前古多瑙河的一条支流沿灰岩裂隙下切形成今天的河道；峡谷内的魏尔滕堡修道院据传是巴伐利亚最古老的修道院之一，1978年获欧洲保护地文凭（BGR / 凯尔海姆旅游局）",
};

const MOSELLE_VALLEY: TerrainEntry = {
  id: "moselle-valley",
  nameZh: "摩泽尔河谷",
  nameEn: "Moselle Valley",
  category: "valley",
  regionId: "europe",
  country: "germany",
  landmark: { name: "贝恩卡斯特尔-库斯一带河曲", lon: 7.0708, lat: 49.9167, elevation: 110, kind: "meander" },
  bbox: [6.6, 49.7, 7.6, 50.2],
  axis: [[7.6, 49.75], [6.65, 50.15]],
  viewScale: 1.4,
  label: { lon: 7.1, lat: 50.05, rotation: 20 },
  source: "摩泽尔河谷：摩泽尔河下切泥盆纪板岩形成的深谷，河道极度蜿蜒——直线距离约减半的河段实际河长翻倍；谷坡最陡处近70°，是世界上最陡的葡萄园坡地之一，板岩土壤白天吸热、夜间缓慢释放，利于雷司令葡萄成熟；德国最古老的葡萄种植区，传统可追溯至古罗马时期（BGR / 摩泽尔葡萄酒协会）",
};

const ELBE_RIVER: TerrainEntry = {
  id: "elbe-river",
  nameZh: "易北河",
  nameEn: "Elbe River",
  category: "river",
  regionId: "europe",
  country: "germany",
  landmark: { name: "德累斯顿易北河谷", lon: 13.74, lat: 51.05, elevation: 110, kind: "meander" },
  bbox: [11.9, 51.0, 13.9, 53.9],
  axis: [[13.7, 51.05], [9.9, 53.55]],
  viewScale: 1.6,
  label: { lon: 12.5, lat: 52.3, rotation: -35 },
  source: "易北河：发源于捷克克尔科诺谢山，全长约1094km，其中约727km流经德国，向西北流经德累斯顿、马格德堡，在汉堡附近成为受潮汐影响的宽阔入海口，最终注入北海；历史上是中欧重要的内河航运通道，德累斯顿一段两岸保留着巴洛克城市天际线与河谷葡萄园（BGR / 联邦水道与航运局）",
};

const SPREEWALD: TerrainEntry = {
  id: "spreewald",
  nameZh: "施普雷森林",
  nameEn: "Spreewald",
  category: "river",
  regionId: "europe",
  country: "germany",
  landmark: { name: "吕贝瑙运河码头", lon: 13.95, lat: 51.8667, elevation: 55, kind: "meander" },
  bbox: [13.7, 51.7, 14.2, 52.05],
  label: { lon: 13.85, lat: 52.0, rotation: 0 },
  source: "施普雷森林：柏林东南施普雷河流经的一片内陆三角洲，末次冰期冰川消融形成的低平洼地让河流分汊成200多条自然与人工水道，总长约1500km，穿行于赤杨林与湿草甸之间；传统运输和农业靠平底木船（Kahn）沿水道进行，1991年列为联合国教科文组织生物圈保护区（UNESCO）",
};

const CHIEMSEE: TerrainEntry = {
  id: "chiemsee",
  nameZh: "基姆湖",
  nameEn: "Chiemsee",
  category: "lake",
  regionId: "europe",
  country: "germany",
  landmark: { name: "基姆湖", lon: 12.4167, lat: 47.8667, elevation: 518, kind: "lake" },
  bbox: [12.35, 47.82, 12.52, 47.92],
  label: { lon: 12.42, lat: 47.91, rotation: 0 },
  source: "基姆湖：巴伐利亚州最大的湖泊、德国第三大湖，约1万年前末次冰期一条冰舌刨蚀出的槽形谷地，冰川退却后积水成湖，湖面积约80平方公里，一度是现在的三倍大；湖中海伦岛上的赫伦基姆湖宫是巴伐利亚国王路德维希二世仿凡尔赛宫兴建的行宫（Bayerisches Landesamt für Umwelt）",
};

const MURITZ: TerrainEntry = {
  id: "muritz",
  nameZh: "米里茨湖",
  nameEn: "Müritz",
  category: "lake",
  regionId: "europe",
  country: "germany",
  landmark: { name: "米里茨湖", lon: 12.7167, lat: 53.4167, elevation: 62, kind: "lake" },
  bbox: [12.6, 53.33, 12.85, 53.5],
  label: { lon: 12.65, lat: 53.49, rotation: 0 },
  source: "米里茨湖：面积约117平方公里，是完全在德国境内的最大湖泊（仅次于跨境的博登湖）；由末次冰期冰川刨蚀、冰碛物拦蓄形成，所在的梅克伦堡湖区第四纪冰川作用留下了上千个大小湖泊；米里茨国家公园是德国大陆面积最大的国家公园之一（Nationalpark Müritz）",
};

const LAACHER_SEE: TerrainEntry = {
  id: "laacher-see",
  nameZh: "拉赫湖",
  nameEn: "Laacher See",
  category: "lake",
  regionId: "europe",
  country: "germany",
  landmark: { name: "拉赫湖", lon: 7.2683, lat: 50.4133, elevation: 275, kind: "lake" },
  bbox: [7.20, 50.38, 7.34, 50.44],
  label: { lon: 7.26, lat: 50.44, rotation: 0 },
  source: "拉赫湖：艾费尔火山场中最年轻的一次大喷发（约1.29万年前）留下的破火山口积水而成，喷发规模与1991年皮纳图博火山相当，喷出物质向东远达约400km；虽常被俗称为“玛珥湖”，严格地质定义上它是岩浆房排空后地表塌陷形成的破火山口湖，而非爆炸挖掘出的玛珥；湖东南岸至今有二氧化碳气体从地下渗出（地震监测显示岩浆活动尚未完全停止）（BGR）",
};

const WADDEN_SEA: TerrainEntry = {
  id: "wadden-sea",
  nameZh: "瓦登海",
  nameEn: "Wadden Sea",
  category: "coast",
  regionId: "europe",
  country: "germany",
  landmark: { name: "北弗里西亚潮滩（叙尔特岛一带）", lon: 8.5, lat: 54.6, elevation: 0, kind: "escarpment" },
  bbox: [6.5, 53.3, 9.0, 55.1],
  axis: [[6.6, 53.4], [8.9, 55.0]],
  viewScale: 1.8,
  label: { lon: 7.6, lat: 54.9, rotation: 0 },
  source: "瓦登海：北海东南岸一片世界最大的连续潮间带滩涂，绵延荷兰、德国、丹麦三国海岸，由潮汐水道、沙洲、海草床、盐沼与堡状沙岛共同构成；德国一段沿岸有东弗里西亚、北弗里西亚两串堡状沙岛，退潮时大片滩涂出露；2009年德国与荷兰段、2014年丹麦段先后列入世界自然遗产（UNESCO）",
};

const RUGEN_CHALK_CLIFFS: TerrainEntry = {
  id: "rugen-chalk-cliffs",
  nameZh: "吕根岛白垩崖",
  nameEn: "Rügen Chalk Cliffs",
  category: "coast",
  regionId: "europe",
  country: "germany",
  landmark: { name: "王座崖（柯尼希施图尔）", lon: 13.6461, lat: 54.5578, elevation: 118, kind: "escarpment" },
  bbox: [13.55, 54.50, 13.75, 54.65],
  label: { lon: 13.62, lat: 54.63, rotation: 0 },
  source: "吕根岛白垩崖：波罗的海最大岛屿吕根岛东北岸一段长约12km、最高118m的白垩崖，由约7000万年前晚白垩世海洋微体藻类骨骼堆积成的白垩岩构成；海浪持续侵蚀松软的白垩，崖体不断崩塌后退，浪蚀出的燧石因更耐蚀而铺满崖下海滩，是亚斯蒙德国家公园的核心景观（BGR / 亚斯蒙德国家公园）",
};

const HELGOLAND: TerrainEntry = {
  id: "helgoland",
  nameZh: "黑尔戈兰岛",
  nameEn: "Helgoland",
  category: "island",
  regionId: "europe",
  country: "germany",
  landmark: { name: "黑尔戈兰红色砂岩崖", lon: 7.8875, lat: 54.1842, elevation: 56, kind: "island" },
  bbox: [7.84, 54.16, 7.93, 54.21],
  label: { lon: 7.87, lat: 54.20, rotation: 0 },
  source: "黑尔戈兰岛：德国唯一一座远离大陆的离岸岛屿，距最近海岸约50km；岛屿主体（“上地”）是一块早三叠世红色砂岩台地，四周被高约56m的红色崖壁环绕，在以沙质、泥质海岸为主的德国北海沿岸极为罕见；退潮时可步行前往的沙洲“杜纳”岛是海豹的重要栖息地（BGR）",
};

// ============================================================
// 欧洲 / 希腊
// ============================================================

const MOUNT_OLYMPUS: TerrainEntry = {
  id: "mount-olympus",
  nameZh: "奥林匹斯山",
  nameEn: "Mount Olympus",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "米蒂卡斯峰", lon: 22.3583, lat: 40.0855, elevation: 2917, kind: "peak" },
  bbox: [22.2, 39.98, 22.55, 40.15],
  label: { lon: 22.35, lat: 40.09, rotation: 0 },
  source: "奥林匹斯山：希腊最高峰，主峰米蒂卡斯海拔2917m；主体由石灰岩、大理岩构成，发育典型喀斯特地貌；1938年设为希腊第一座国家公园，1981年列入联合国教科文组织生物圈保护区；古希腊神话中的众神居所（Britannica / 希腊国家公园管理局）",
};

const PINDUS_MOUNTAINS: TerrainEntry = {
  id: "pindus-mountains",
  nameZh: "品都斯山脉",
  nameEn: "Pindus Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "斯莫利卡斯峰", lon: 20.9167, lat: 40.10, elevation: 2637, kind: "peak" },
  bbox: [20.6, 38.7, 21.4, 40.3],
  axis: [[20.75, 40.25], [21.15, 38.75]],
  viewScale: 1.8,
  label: { lon: 20.95, lat: 39.6, rotation: -60 },
  source: "品都斯山脉：贯穿希腊大陆西部的主干山系，从阿尔巴尼亚边境向东南延伸至科林斯湾一带，有“希腊脊梁”之称；第二高峰斯莫利卡斯海拔2637m（仅次于奥林匹斯山）；石灰岩喀斯特地貌发育，维科斯峡谷即位于其中；山脉分隔了西侧多雨的伊庇鲁斯与东侧较干燥的色萨利/马其顿（Britannica / Pindus National Park）",
};

const TAYGETUS: TerrainEntry = {
  id: "taygetus",
  nameZh: "泰格特斯山",
  nameEn: "Taygetus",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "先知伊利亚斯峰", lon: 22.367, lat: 36.933, elevation: 2407, kind: "peak" },
  bbox: [22.2, 36.7, 22.55, 37.2],
  axis: [[22.4, 37.2], [22.37, 36.75]],
  viewScale: 1.2,
  label: { lon: 22.35, lat: 36.95, rotation: -80 },
  source: "泰格特斯山：伯罗奔尼撒半岛南部最高大的山脉，主峰先知伊利亚斯海拔2407m，几乎直接从海边陡然隆起，是希腊本土地势最陡峻的山地之一；山体以大理岩、石灰岩为主；南端延伸为马尼半岛（Britannica）",
};

const MOUNT_PARNASSUS: TerrainEntry = {
  id: "mount-parnassus",
  nameZh: "帕纳索斯山",
  nameEn: "Mount Parnassus",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "利亚库拉峰", lon: 22.5975, lat: 38.5372, elevation: 2457, kind: "peak" },
  bbox: [22.45, 38.45, 22.75, 38.65],
  label: { lon: 22.6, lat: 38.55, rotation: 0 },
  source: "帕纳索斯山：希腊中部石灰岩山地，主峰利亚库拉海拔2457m；山体以三叠纪至白垩纪海相石灰岩为主，夹红色页岩，逆冲断层发育，山中分布多个南北向排列的浅层喀斯特盆地，蕴含铝土矿；南麓的德尔斐是古希腊最重要的神谕圣地之一（Britannica / 地质文献）",
};

const MOUNT_ATHOS: TerrainEntry = {
  id: "mount-athos",
  nameZh: "阿索斯山",
  nameEn: "Mount Athos",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "阿索斯峰", lon: 24.3264, lat: 40.1550, elevation: 2033, kind: "peak" },
  bbox: [23.95, 40.15, 24.45, 40.45],
  axis: [[23.98, 40.42], [24.43, 40.15]],
  viewScale: 1.3,
  label: { lon: 24.2, lat: 40.3, rotation: -50 },
  source: "阿索斯山：哈尔基季基三叉半岛最东侧一条狭长的山地半岛，主峰海拔2033m，山体陡峭直插爱琴海；9世纪起陆续有隐修士在此定居，10世纪拜占庭皇帝颁布特许状确立修道传统，此后千余年间先后建起20座东正教修道院；1988年作为自然与文化双重遗产列入联合国教科文组织世界遗产名录（UNESCO）",
};

const WHITE_MOUNTAINS_CRETE: TerrainEntry = {
  id: "white-mountains-crete",
  nameZh: "白山（克里特）",
  nameEn: "White Mountains (Lefka Ori)",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "帕赫内斯峰", lon: 24.085, lat: 35.3111, elevation: 2453, kind: "peak" },
  bbox: [23.85, 35.15, 24.25, 35.45],
  viewScale: 1.1,
  label: { lon: 24.05, lat: 35.3, rotation: 0 },
  source: "白山：克里特岛西部第二高山群，主峰帕赫内斯海拔2453m；石灰岩喀斯特地貌广布，发育大量深切峡谷（萨马利亚峡谷即源出于此）与高山洼地；因积雪常年保留至初夏、远望呈白色而得名（Britannica）",
};

const SAMOTHRAKI: TerrainEntry = {
  id: "samothraki",
  nameZh: "萨莫色雷斯岛",
  nameEn: "Samothrace / Samothraki",
  category: "island",
  regionId: "europe",
  country: "greece",
  landmark: { name: "芬加里峰", lon: 25.5289, lat: 40.4711, elevation: 1611, kind: "peak" },
  bbox: [25.4, 40.38, 25.65, 40.58],
  viewScale: 1.1,
  label: { lon: 25.53, lat: 40.5, rotation: 0 },
  source: "萨莫色雷斯岛：北爱琴海一座以花岗岩为主体的岛屿，中央的芬加里峰海拔1611m，是整个爱琴海诸岛中的最高点，岛屿面积虽不大但山势陡峭、多瀑布溪流；古代萨莫色雷斯秘仪圣地（发现《萨莫色雷斯的胜利女神》雕像处）即位于岛上（Britannica）",
};

const NISYROS: TerrainEntry = {
  id: "nisyros",
  nameZh: "尼西罗斯火山",
  nameEn: "Nisyros",
  category: "basin",
  regionId: "europe",
  country: "greece",
  landmark: { name: "斯特凡诺斯火山口", lon: 27.1667, lat: 36.5833, elevation: 260, kind: "peak" },
  bbox: [27.13, 36.55, 27.22, 36.62],
  label: { lon: 27.17, lat: 36.59, rotation: 0 },
  source: "尼西罗斯火山：多德卡尼斯群岛中一座近圆形的休眠层状火山岛，中央斯特凡诺斯火山口直径约260m，口底至今仍有活跃的喷气孔与地热活动；与圣托里尼、米洛斯、梅萨纳同属南爱琴火山弧（Global Volcanism Program / GSG）",
};

const MOUNT_PILIO: TerrainEntry = {
  id: "mount-pilio",
  nameZh: "皮利翁山",
  nameEn: "Mount Pelion",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "普利亚西迪峰", lon: 23.0833, lat: 39.3667, elevation: 1624, kind: "peak" },
  bbox: [22.95, 39.15, 23.35, 39.45],
  axis: [[23.05, 39.45], [23.2, 39.15]],
  viewScale: 1.2,
  label: { lon: 23.15, lat: 39.3, rotation: -30 },
  source: "皮利翁山：色萨利东部一条伸入爱琴海的多林山地半岛，最高点普利亚西迪峰海拔1624m，山坡广布山毛榉与栗树林，多石砌传统村落；古希腊神话中半人马族的居所（Britannica）",
};

const METHANA: TerrainEntry = {
  id: "methana",
  nameZh: "梅萨纳火山半岛",
  nameEn: "Methana",
  category: "mountain_system",
  regionId: "europe",
  country: "greece",
  landmark: { name: "卡梅诺武诺熔岩穹丘", lon: 23.3667, lat: 37.5833, elevation: 760, kind: "peak" },
  bbox: [23.32, 37.55, 23.42, 37.65],
  label: { lon: 23.37, lat: 37.6, rotation: 0 },
  source: "梅萨纳：伯罗奔尼撒半岛东北角一座由多个安山岩熔岩穹丘拼合而成的火山半岛，是南爱琴火山弧最西端的活动中心；已知最近一次喷发约公元前230年（弗莱韦斯岛熔岩穹丘），半岛上仍有温泉与硫质喷气活动（Global Volcanism Program）",
};

const LASITHI_PLATEAU: TerrainEntry = {
  id: "lasithi-plateau",
  nameZh: "拉西提高原",
  nameEn: "Lasithi Plateau",
  category: "plateau",
  regionId: "europe",
  country: "greece",
  landmark: { name: "高原中心（提济利维斯附近）", lon: 25.4667, lat: 35.1833, elevation: 850, kind: "city" },
  bbox: [25.4, 35.13, 25.55, 35.24],
  label: { lon: 25.47, lat: 35.19, rotation: 0 },
  source: "拉西提高原：克里特岛东部一处海拔约850m的封闭式喀斯特高原盆地（poljie），四周群山环绕，历史上曾建有数千座白色帆布风车用于抽水灌溉；高原东南边缘的迪克泰洞穴在古希腊神话中被认为是宙斯的出生地（Britannica）",
};

const THESSALY_PLAIN: TerrainEntry = {
  id: "thessaly-plain",
  nameZh: "色萨利平原",
  nameEn: "Thessalian Plain",
  category: "plain",
  regionId: "europe",
  country: "greece",
  landmark: { name: "平原中心（拉里萨附近）", lon: 22.42, lat: 39.64, elevation: 70, kind: "city" },
  bbox: [21.7, 39.1, 23.0, 39.9],
  viewScale: 1.8,
  label: { lon: 22.4, lat: 39.55, rotation: 0 },
  source: "色萨利平原：希腊本土面积最大、最重要的农业平原，由皮尼奥斯河及其支流冲积而成；西邻品都斯山脉，南接奥特里斯山，东靠皮利翁山，东北为奥萨山与奥林匹斯山（间以坦佩谷相通），北面是哈西亚与卡姆武尼亚山地；小麦、棉花、玉米为主要作物，有“希腊粮仓”之称（Britannica / 皮尼奥斯河流域资料）",
};

const SANTORINI_CALDERA: TerrainEntry = {
  id: "santorini-caldera",
  nameZh: "圣托里尼火山口",
  nameEn: "Santorini Caldera",
  category: "basin",
  regionId: "europe",
  country: "greece",
  landmark: { name: "内亚卡梅尼火山穹丘", lon: 25.3967, lat: 36.4028, elevation: 130, kind: "peak" },
  bbox: [25.32, 36.33, 25.48, 36.48],
  viewScale: 1.2,
  label: { lon: 25.4, lat: 36.42, rotation: 0 },
  source: "圣托里尼火山口：公元前约1600年一次青铜时代晚期的大规模喷发（“米诺斯喷发”，火山爆发指数约7级，人类历史上最大规模喷发之一）造成岛屿中央塌陷形成的破火山口，直径约12km，四周残留的岛弧构成如今的锡拉岛主体，费拉、伊亚等城镇建在高约300m的火口崖顶上；口中央的内亚卡梅尼、帕列亚卡梅尼是喷发后陆续隆起的再生熔岩穹丘；喷发掩埋的阿克罗蒂里青铜时代聚落遗址已被系统考古发掘（GSG / 考古文献）",
};

const GULF_OF_CORINTH: TerrainEntry = {
  id: "gulf-of-corinth",
  nameZh: "科林斯湾",
  nameEn: "Gulf of Corinth",
  category: "coast",
  regionId: "europe",
  country: "greece",
  landmark: { name: "里翁—安蒂里翁海峡", lon: 21.78, lat: 38.30, elevation: 0, kind: "escarpment" },
  bbox: [21.7, 38.10, 23.2, 38.45],
  axis: [[21.75, 38.18], [23.15, 38.02]],
  viewScale: 1.6,
  label: { lon: 22.4, lat: 38.2, rotation: -5 },
  source: "科林斯湾：分隔伯罗奔尼撒半岛与希腊大陆的一条狭长海湾，本质是一条活动地堑（裂谷），两岸持续拉张，是全球伸展速率最快的大陆裂谷之一（地质学界估算约每年1cm量级，具体速率尚有不同测算）；最窄处的里翁—安蒂里翁海峡建有斜拉桥连接两岸（地质文献）",
};

const VIKOS_GORGE: TerrainEntry = {
  id: "vikos-gorge",
  nameZh: "维科斯峡谷",
  nameEn: "Vikos Gorge",
  category: "gorge",
  regionId: "europe",
  country: "greece",
  landmark: { name: "奥克夏观景点", lon: 20.7597, lat: 39.9711, elevation: 900, kind: "gorge" },
  bbox: [20.65, 39.92, 20.85, 40.05],
  axis: [[20.75, 40.03], [20.78, 39.93]],
  label: { lon: 20.76, lat: 39.98, rotation: 20 },
  source: "维科斯峡谷：品都斯山脉伊庇鲁斯扎戈里地区的一条石灰岩峡谷，由沃伊多马蒂斯河切蚀而成，峡谷最深处相对宽度之比在同类峡谷中极为突出，曾被吉尼斯世界纪录列为按此口径“世界最深峡谷”；地处维科斯—阿奥斯国家公园内（吉尼斯世界纪录 / 国家公园管理机构）",
};

const SAMARIA_GORGE: TerrainEntry = {
  id: "samaria-gorge",
  nameZh: "萨马利亚峡谷",
  nameEn: "Samaria Gorge",
  category: "gorge",
  regionId: "europe",
  country: "greece",
  landmark: { name: "希洛斯卡洛峡谷入口", lon: 23.9214, lat: 35.3164, elevation: 1250, kind: "gorge" },
  bbox: [23.88, 35.22, 24.00, 35.35],
  axis: [[23.94, 35.33], [23.92, 35.23]],
  label: { lon: 23.93, lat: 35.28, rotation: 15 },
  source: "萨马利亚峡谷：克里特岛白山南麓一条长约16km的石灰岩峡谷，是欧洲最长的峡谷之一，最窄处“铁门”两壁相距仅约3-4m、崖高约300m；1962年设为国家公园，是克里特野山羊（克里克里）的重要栖息地（希腊环境与能源部 / 国家公园管理机构）",
};

const ZAKYNTHOS_NAVAGIO: TerrainEntry = {
  id: "zakynthos-navagio",
  nameZh: "扎金索斯沉船湾",
  nameEn: "Navagio Beach, Zakynthos",
  category: "coast",
  regionId: "europe",
  country: "greece",
  landmark: { name: "沉船湾", lon: 20.6242, lat: 37.8597, elevation: 0, kind: "escarpment" },
  bbox: [20.58, 37.83, 20.66, 37.89],
  label: { lon: 20.62, lat: 37.86, rotation: 0 },
  source: "沉船湾：扎金索斯岛西北岸一处被陡峭白色石灰岩崖壁环抱的狭小海湾，仅能经海路或崖顶观景点抵达，湾内沙滩上搁浅着一艘1980年代的走私船残骸，是伊奥尼亚群岛最具代表性的海岸景观之一（希腊旅游局）",
};

const MANI_PENINSULA: TerrainEntry = {
  id: "mani-peninsula",
  nameZh: "马尼半岛",
  nameEn: "Mani Peninsula",
  category: "coast",
  regionId: "europe",
  country: "greece",
  landmark: { name: "迪罗斯洞穴", lon: 22.3667, lat: 36.6333, elevation: 5, kind: "escarpment" },
  bbox: [22.2, 36.38, 22.85, 36.85],
  axis: [[22.45, 36.85], [22.48, 36.4]],
  viewScale: 1.3,
  label: { lon: 22.45, lat: 36.6, rotation: -85 },
  source: "马尼半岛：伯罗奔尼撒半岛最南端伸出的三条岛脚之一，是泰格特斯山向南的延续，地势崎岖、多裸露石灰岩；西岸的迪罗斯洞穴（弗利哈达洞）是希腊最重要的洞穴之一，内有地下湖泊水系；半岛最南端的泰纳隆角常被视为希腊大陆的最南点；传统石砌塔楼是当地民居的鲜明特征（Britannica）",
};

const CRETE: TerrainEntry = {
  id: "crete",
  nameZh: "克里特岛",
  nameEn: "Crete",
  category: "island",
  regionId: "europe",
  country: "greece",
  landmark: { name: "普西罗里蒂斯峰（伊达山）", lon: 24.8228, lat: 35.2461, elevation: 2456, kind: "peak" },
  bbox: [23.5, 34.75, 26.35, 35.7],
  axis: [[23.6, 35.3], [26.2, 35.35]],
  viewScale: 2.0,
  label: { lon: 25.0, lat: 35.3, rotation: 0 },
  source: "克里特岛：希腊面积最大的岛屿，地处非洲板块向爱琴微板块俯冲形成的希腊弧（Hellenic Arc）之上，长期整体隆升；岛上自西向东分布白山、伊达山（普西罗里蒂斯，海拔2456m，全岛最高点）、迪克蒂山等多条山系，中南部有梅萨拉平原；伊达山的伊代恩洞穴在古希腊神话中被认为是宙斯成长之地（Britannica / 地质文献）",
};

const CORFU: TerrainEntry = {
  id: "corfu",
  nameZh: "科孚岛",
  nameEn: "Corfu / Kerkyra",
  category: "island",
  regionId: "europe",
  country: "greece",
  landmark: { name: "潘托克拉托山", lon: 19.8167, lat: 39.7667, elevation: 906, kind: "peak" },
  bbox: [19.64, 39.35, 20.08, 39.82],
  viewScale: 1.3,
  label: { lon: 19.85, lat: 39.6, rotation: 0 },
  source: "科孚岛：伊奥尼亚群岛最北端的主要岛屿，石灰岩喀斯特地貌为主，最高点潘托克拉托山海拔906m；因降水明显多于爱琴海诸岛，植被终年葱郁，多橄榄林；科孚老城的威尼斯式城防建筑群1386至1797年间陆续建成，2007年列入联合国教科文组织世界遗产（UNESCO）",
};

const MILOS: TerrainEntry = {
  id: "milos",
  nameZh: "米洛斯岛",
  nameEn: "Milos",
  category: "island",
  regionId: "europe",
  country: "greece",
  landmark: { name: "萨拉基尼科海岸", lon: 24.5386, lat: 36.7519, elevation: 20, kind: "escarpment" },
  bbox: [24.38, 36.62, 24.62, 36.78],
  label: { lon: 24.45, lat: 36.7, rotation: 0 },
  source: "米洛斯岛：南爱琴火山弧上一座火山成因的岛屿，岛内多种颜色的火山岩层构成独特景观，其中萨拉基尼科海岸由白色浮岩、凝灰岩经海蚀风蚀形成月球表面般的地貌；岛上自新石器时代起即开采黑曜岩并对外贸易，1820年在岛上发现《米洛斯的维纳斯》雕像；至今仍产高岭土、珍珠岩、膨润土（Britannica / GSG）",
};

const RHODES: TerrainEntry = {
  id: "rhodes",
  nameZh: "罗德岛",
  nameEn: "Rhodes",
  category: "island",
  regionId: "europe",
  country: "greece",
  landmark: { name: "阿塔维罗斯峰", lon: 27.8422, lat: 36.1519, elevation: 1215, kind: "peak" },
  bbox: [27.65, 35.85, 28.25, 36.5],
  viewScale: 1.4,
  label: { lon: 27.95, lat: 36.2, rotation: 0 },
  source: "罗德岛：多德卡尼斯群岛中面积最大的岛屿，以石灰岩地形为主，最高点阿塔维罗斯峰海拔1215m；罗德城中世纪古城由医院骑士团于14至16世纪修筑城防，是欧洲保存最完好的中世纪城防城市之一，1988年列入联合国教科文组织世界遗产（UNESCO）",
};

const LAKE_TRICHONIDA: TerrainEntry = {
  id: "lake-trichonida",
  nameZh: "特里霍尼达湖",
  nameEn: "Lake Trichonida",
  category: "lake",
  regionId: "europe",
  country: "greece",
  landmark: { name: "湖心", lon: 21.6, lat: 38.55, elevation: 15, kind: "lake" },
  bbox: [21.45, 38.48, 21.85, 38.62],
  label: { lon: 21.65, lat: 38.58, rotation: 0 },
  source: "特里霍尼达湖：位于希腊大陆西部埃托利亚—阿卡纳尼亚州，是希腊面积最大的天然湖泊（约96平方公里），系构造成因的湖盆，水深相对较大（Britannica）",
};

const LAKE_PRESPA: TerrainEntry = {
  id: "lake-prespa",
  nameZh: "普雷斯帕湖",
  nameEn: "Lake Prespa",
  category: "lake",
  regionId: "europe",
  country: "greece",
  landmark: { name: "阿吉奥斯阿希利奥斯岛", lon: 21.0, lat: 40.77, elevation: 853, kind: "lake" },
  bbox: [20.9, 40.68, 21.15, 40.95],
  viewScale: 1.3,
  label: { lon: 21.0, lat: 40.85, rotation: 0 },
  source: "普雷斯帕湖：分为大普雷斯帕湖与小普雷斯帕湖两部分，湖区跨希腊、阿尔巴尼亚、北马其顿三国，海拔约853m，属喀斯特构造湖，是卷羽鹈鹕等重要水鸟的栖息地；三国于2000年共同设立跨境普雷斯帕公园开展保护合作（“北马其顿”为2019年《普雷斯帕协议》后的现行正式名称）（Prespa Park / Ramsar）",
};

const ACHELOOS_RIVER: TerrainEntry = {
  id: "acheloos-river",
  nameZh: "阿刻罗俄斯河",
  nameEn: "Acheloos River",
  category: "river",
  regionId: "europe",
  country: "greece",
  landmark: { name: "阿刻罗俄斯河口三角洲", lon: 21.194, lat: 38.334, elevation: 2, kind: "delta" },
  bbox: [21.0, 38.3, 21.7, 39.75],
  axis: [[21.4, 39.7], [21.19, 38.33]],
  viewScale: 1.4,
  label: { lon: 21.3, lat: 39.0, rotation: -75 },
  source: "阿刻罗俄斯河：希腊本土最长的河流，全长约220km，发源于品都斯山脉南段，一路向南穿峡谷、经水库后在埃托利亚—阿卡纳尼亚沿岸注入伊奥尼亚海，河口发育三角洲与潟湖湿地；在古希腊神话中被人格化为河神阿刻罗俄斯（Britannica）",
};

const METEORA: TerrainEntry = {
  id: "meteora",
  nameZh: "迈泰奥拉",
  nameEn: "Meteora",
  category: "inselberg",
  regionId: "europe",
  country: "greece",
  landmark: { name: "大迈泰奥隆修道院岩柱", lon: 21.6300, lat: 39.7214, elevation: 534, kind: "peak" },
  bbox: [21.60, 39.69, 21.66, 39.75],
  label: { lon: 21.63, lat: 39.72, rotation: 0 },
  source: "迈泰奥拉：色萨利平原西北缘一群陡峭孤立的砂岩、砾岩岩柱，约6000万年前由古河流三角洲沉积后经区域隆升与差异侵蚀塑造而成；14世纪起东正教隐修士陆续在岩顶建起修道院，鼎盛时曾有20余座，现存6座仍在使用；1988年作为自然与文化双重遗产列入联合国教科文组织世界遗产名录（UNESCO / 地质文献）",
};

// ============================================================
// 欧洲 / 葡萄牙
// ============================================================

const PENEDA_GERES: TerrainEntry = {
  id: "peneda-geres",
  nameZh: "佩内达-杰雷斯山",
  nameEn: "Peneda-Gerês",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "内沃萨峰", lon: -8.203, lat: 41.828, elevation: 1545, kind: "peak" },
  bbox: [-8.35, 41.70, -7.85, 41.95],
  axis: [[-8.35, 41.90], [-7.90, 41.75]],
  viewScale: 1.3,
  label: { lon: -8.10, lat: 41.80, rotation: -30 },
  source: "佩内达-杰雷斯山：葡萄牙西北角、与西班牙加利西亚交界一带的花岗岩山地，最高点约1545米；1971年设立佩内达-杰雷斯国家公园，是葡萄牙本土唯一的国家公园；山地保留野生阿洛依诺马和多处新石器时代石阵遗迹（葡萄牙自然与森林保护局 ICNF）",
};

const SERRA_DA_ESTRELA: TerrainEntry = {
  id: "serra-da-estrela",
  nameZh: "埃斯特雷拉山",
  nameEn: "Serra da Estrela",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "托雷峰", lon: -7.6144, lat: 40.3213, elevation: 1993, kind: "peak" },
  bbox: [-7.75, 40.25, -7.50, 40.45],
  axis: [[-7.72, 40.42], [-7.55, 40.28]],
  label: { lon: -7.62, lat: 40.35, rotation: -50 },
  source: "埃斯特雷拉山：葡萄牙大陆最高山系，主峰托雷海拔1993米，是葡萄牙大陆最高点；花岗岩山体经第四纪冰期塑造，保留冰蚀谷、冰斗湖等地貌；1976年设立埃斯特雷拉山自然公园，2020年联合国教科文组织将其列为世界地质公园（UNESCO / ICNF）",
};

const SERRA_DE_SINTRA: TerrainEntry = {
  id: "serra-de-sintra",
  nameZh: "辛特拉山",
  nameEn: "Serra de Sintra",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "十字架高地", lon: -9.3988, lat: 38.7876, elevation: 528, kind: "peak" },
  bbox: [-9.47, 38.75, -9.33, 38.82],
  label: { lon: -9.40, lat: 38.79, rotation: 0 },
  source: "辛特拉山：里斯本以西的一列小型花岗岩山地，最高点约528米，因常年受大西洋雾气笼罩、气候独特而自19世纪起成为葡萄牙王室避暑地；山上的佩纳宫等建筑与自然景观于1995年作为文化景观整体列入联合国教科文组织世界遗产名录（UNESCO）",
};

const SERRA_DE_MONCHIQUE: TerrainEntry = {
  id: "serra-de-monchique",
  nameZh: "蒙希克山",
  nameEn: "Serra de Monchique",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "福亚峰", lon: -8.5972, lat: 37.3181, elevation: 902, kind: "peak" },
  bbox: [-8.65, 37.28, -8.50, 37.38],
  label: { lon: -8.58, lat: 37.32, rotation: 0 },
  source: "蒙希克山：阿尔加维内陆的一列碱性侵入岩（正长岩）山地，最高点福亚峰海拔902米，是阿尔加维大区最高点；与周边主要为石灰岩的地质背景不同，山体富含温泉，蒙希克镇自罗马时代起即以温泉疗养闻名（葡萄牙地质调查局 LNEG）",
};

const SERRA_DE_MONTESINHO: TerrainEntry = {
  id: "serra-de-montesinho",
  nameZh: "蒙特西尼奥山",
  nameEn: "Serra de Montesinho",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "蒙特西尼奥峰", lon: -6.85, lat: 41.90, elevation: 1481, kind: "peak" },
  bbox: [-7.05, 41.80, -6.65, 42.00],
  label: { lon: -6.85, lat: 41.90, rotation: 0 },
  source: "蒙特西尼奥山：葡萄牙东北角特拉斯山地区一片古老的板岩、片麻岩山地，最高点约1481米；1979年设立蒙特西尼奥自然公园，是伊比利亚半岛狼群重要栖息地之一，保留大量传统石砌村落（ICNF）",
};

const SERRA_DE_AIRE_CANDEEIROS: TerrainEntry = {
  id: "serra-de-aire-candeeiros",
  nameZh: "艾雷-坎迪埃罗斯山",
  nameEn: "Serra de Aire e Candeeiros",
  category: "plateau",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "皮亚斯高地", lon: -8.70, lat: 39.53, elevation: 679, kind: "escarpment" },
  bbox: [-8.85, 39.40, -8.55, 39.65],
  viewScale: 1.2,
  label: { lon: -8.70, lat: 39.53, rotation: 0 },
  source: "艾雷-坎迪埃罗斯山：葡萄牙中西部一片侏罗纪石灰岩高地，最高点约679米，喀斯特地貌发育，溶洞、落水洞广布，米拉德艾雷洞是葡萄牙已知最大的溶洞系统；1979年设立艾雷-坎迪埃罗斯自然公园（ICNF / 地质文献）",
};

const TRAS_OS_MONTES_PLATEAU: TerrainEntry = {
  id: "tras-os-montes-plateau",
  nameZh: "特拉斯山高原",
  nameEn: "Trás-os-Montes Plateau",
  category: "plateau",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "米兰达高原", lon: -6.27, lat: 41.49, elevation: 700, kind: "escarpment" },
  bbox: [-7.00, 41.20, -6.10, 41.90],
  viewScale: 1.6,
  label: { lon: -6.55, lat: 41.55, rotation: 0 },
  source: "特拉斯山高原：葡萄牙东北角一片古老结晶岩台地，海拔多在600–900米之间，是伊比利亚台地向大西洋的过渡地带；气候冬冷夏热、大陆性明显，与沿海地区差异显著；台地被杜罗河切出的深谷（国际杜罗河谷）分隔（葡萄牙国家统计局 / 地理文献）",
};

const ALENTEJO_PLAIN: TerrainEntry = {
  id: "alentejo-plain",
  nameZh: "阿连特茹平原",
  nameEn: "Alentejo Plain",
  category: "plain",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "埃武拉平原", lon: -7.90, lat: 38.57, elevation: 300, kind: "grassland" },
  bbox: [-8.30, 37.90, -7.20, 39.10],
  viewScale: 1.8,
  label: { lon: -7.80, lat: 38.50, rotation: 0 },
  source: "阿连特茹平原：葡萄牙南部大面积起伏平原，占国土约三分之一，海拔多在200–400米之间，是伊比利亚台地向西南延伸的一部分；地表广布软木橡树与荷兰栎稀树草原（montado），是全球软木塞主要产地，2016年联合国粮农组织将该农林复合系统列为全球重要农业文化遗产（FAO / 葡萄牙农业部）",
};

const DOURO_VALLEY: TerrainEntry = {
  id: "douro-valley",
  nameZh: "杜罗河谷",
  nameEn: "Douro Valley",
  category: "valley",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "皮尼昂葡萄园梯田", lon: -7.546, lat: 41.192, elevation: 120, kind: "escarpment" },
  bbox: [-7.85, 41.10, -7.30, 41.30],
  axis: [[-7.85, 41.20], [-7.30, 41.16]],
  label: { lon: -7.55, lat: 41.14, rotation: 5 },
  source: "杜罗河谷：葡萄牙北部杜罗河中游两岸的陡峭梯田葡萄园区，人工修建的石砌梯田已有约2000年历史，是全世界最古老的受保护法定葡萄酒产区（1756年划定），波特酒即产自此地；2001年作为文化景观列入联合国教科文组织世界遗产名录（UNESCO）",
};

const DOURO_INTERNATIONAL: TerrainEntry = {
  id: "douro-international",
  nameZh: "国际杜罗河谷",
  nameEn: "International Douro",
  category: "gorge",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "米兰达峡谷观景台", lon: -6.60, lat: 41.34, elevation: 200, kind: "gorge" },
  bbox: [-6.85, 41.15, -6.40, 41.55],
  axis: [[-6.85, 41.55], [-6.45, 41.20]],
  viewScale: 1.2,
  label: { lon: -6.62, lat: 41.35, rotation: -60 },
  source: "国际杜罗河谷：杜罗河在葡萄牙、西班牙边境一段切穿古老结晶岩台地形成的深切峡谷，两岸崖壁高达数百米，是伊比利亚半岛内陆金雕、埃及秃鹫等猛禽的重要栖息地；葡、西两国分别设立国际杜罗河谷自然公园对边境两侧共同保护（ICNF）",
};

const TAGUS_RIVER: TerrainEntry = {
  id: "tagus-river",
  nameZh: "特茹河",
  nameEn: "Tagus (Tejo)",
  category: "river",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "圣塔伦河段", lon: -8.68, lat: 39.24, elevation: 20, kind: "meander" },
  bbox: [-8.90, 39.10, -8.40, 39.45],
  axis: [[-8.40, 39.42], [-8.85, 39.15]],
  label: { lon: -8.65, lat: 39.28, rotation: -25 },
  source: "特茹河：伊比利亚半岛最长河流，全长约1038公里，发源于西班牙阿尔巴拉辛山，穿越葡萄牙中部注入大西洋；圣塔伦一带河道宽阔、河谷平坦，是葡萄牙重要的灌溉农业区（葡萄牙环境署 APA）",
};

const MINHO_RIVER: TerrainEntry = {
  id: "minho-river",
  nameZh: "米尼奥河",
  nameEn: "Minho River",
  category: "river",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "瓦伦萨河段", lon: -8.643, lat: 42.031, elevation: 10, kind: "meander" },
  bbox: [-8.85, 41.90, -8.15, 42.13],
  axis: [[-8.15, 42.05], [-8.85, 41.90]],
  label: { lon: -8.50, lat: 41.98, rotation: -15 },
  source: "米尼奥河：发源于西班牙加利西亚、下游约75公里构成葡萄牙与西班牙的边境线，最终在维亚纳堡以北注入大西洋；河口一带是重要的候鸟栖息湿地（葡萄牙环境署 APA）",
};

const MONDEGO_RIVER: TerrainEntry = {
  id: "mondego-river",
  nameZh: "蒙德古河",
  nameEn: "Mondego River",
  category: "river",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "科英布拉河段", lon: -8.4103, lat: 40.2033, elevation: 15, kind: "meander" },
  bbox: [-8.60, 40.05, -8.10, 40.45],
  axis: [[-8.10, 40.42], [-8.55, 40.10]],
  label: { lon: -8.35, lat: 40.25, rotation: -20 },
  source: "蒙德古河：葡萄牙全境在国内发源、全程流经本国的最长河流，全长约227公里，发源于埃斯特雷拉山，流经科英布拉后注入大西洋（葡萄牙环境署 APA）",
};

const GUADIANA_RIVER: TerrainEntry = {
  id: "guadiana-river",
  nameZh: "瓜迪亚纳河",
  nameEn: "Guadiana River",
  category: "river",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "梅尔托拉河段", lon: -7.664, lat: 37.639, elevation: 50, kind: "meander" },
  bbox: [-7.85, 37.50, -7.40, 37.80],
  label: { lon: -7.65, lat: 37.63, rotation: 10 },
  source: "瓜迪亚纳河：发源于西班牙拉曼恰高原，下游一段构成葡、西边境，在维拉雷阿尔迪圣安东尼奥注入大西洋；梅尔托拉一带河谷曲折、两岸为板岩丘陵，历史上曾是重要的铜矿采运通道（葡萄牙环境署 APA）",
};

const ALQUEVA_RESERVOIR: TerrainEntry = {
  id: "alqueva-reservoir",
  nameZh: "阿尔克瓦水库",
  nameEn: "Alqueva Reservoir",
  category: "lake",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "阿尔克瓦大坝", lon: -7.503, lat: 38.187, elevation: 152, kind: "lake" },
  bbox: [-7.65, 38.00, -7.30, 38.45],
  viewScale: 1.3,
  label: { lon: -7.50, lat: 38.25, rotation: 0 },
  source: "阿尔克瓦水库：2002年蓄水完成的人工水库，水面面积约250平方公里，是西欧最大的人工湖；大坝拦截瓜迪亚纳河而成，主要用于灌溉、发电和供水，也是欧洲首个官方认证的“暗夜保护区”之一（葡萄牙国家水资源局 / IUCN）",
};

const TAGUS_ESTUARY: TerrainEntry = {
  id: "tagus-estuary",
  nameZh: "特茹河口",
  nameEn: "Tagus Estuary",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "特茹河口（草海）", lon: -9.05, lat: 38.75, elevation: 0, kind: "delta" },
  bbox: [-9.20, 38.60, -8.85, 38.90],
  label: { lon: -9.00, lat: 38.75, rotation: 0 },
  source: "特茹河口：里斯本以东特茹河汇入大西洋前形成的宽阔河口湾，当地俗称“草海”（Mar da Palha），面积约320平方公里，是欧洲西部最重要的水鸟越冬地之一；1976年设立特茹河口自然保护区（ICNF）",
};

const ALGARVE_COAST: TerrainEntry = {
  id: "algarve-coast",
  nameZh: "阿尔加维海岸",
  nameEn: "Algarve Coast",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "皮耶达德角", lon: -8.667, lat: 37.083, elevation: 20, kind: "escarpment" },
  bbox: [-8.80, 37.05, -8.55, 37.15],
  label: { lon: -8.67, lat: 37.09, rotation: 0 },
  source: "阿尔加维海岸：葡萄牙最南端石灰岩海岸，以金黄色岩壁、海蚀拱、海蚀柱和众多小型海滩闻名，拉戈什一带的皮耶达德角是其中最具代表性的一段；地貌由第三纪石灰岩经海浪长期侵蚀塑造（葡萄牙地质调查局 LNEG）",
};

const RIA_FORMOSA: TerrainEntry = {
  id: "ria-formosa",
  nameZh: "福尔摩沙潟湖",
  nameEn: "Ria Formosa",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "法鲁潟湖", lon: -7.98, lat: 37.02, elevation: 0, kind: "delta" },
  bbox: [-8.15, 36.95, -7.60, 37.08],
  axis: [[-8.15, 37.00], [-7.60, 37.00]],
  label: { lon: -7.90, lat: 37.00, rotation: 0 },
  source: "福尔摩沙潟湖：阿尔加维沿海一条约60公里长的潟湖体系，由一连串沙洲、沙坝与河口湿地组成，随潮汐涨落不断变化；1987年设立福尔摩沙潟湖自然公园，是地中海地区数量最多的白头鹮繁殖地之一（ICNF）",
};

const COSTA_VICENTINA: TerrainEntry = {
  id: "costa-vicentina",
  nameZh: "维森特角海岸",
  nameEn: "Costa Vicentina",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "圣维森特角", lon: -8.972, lat: 37.023, elevation: 60, kind: "escarpment" },
  bbox: [-8.98, 36.95, -8.65, 37.65],
  axis: [[-8.972, 37.02], [-8.78, 37.65]],
  viewScale: 1.2,
  label: { lon: -8.85, lat: 37.30, rotation: 80 },
  source: "维森特角海岸：葡萄牙西南端一段面朝大西洋的陡崖海岸，从圣维森特角向北延伸约百余公里，崖壁多为古生代变质岩，因常年受强风和洋流影响、开发程度低，1995年设立西南海岸暨维森特角自然公园；圣维森特角自古被视为已知世界的西南尽头（ICNF）",
};

const ARRABIDA_COAST: TerrainEntry = {
  id: "arrabida-coast",
  nameZh: "阿拉比达海岸",
  nameEn: "Arrábida Coast",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "波尔蒂尼奥湾", lon: -8.98, lat: 38.48, elevation: 500, kind: "escarpment" },
  bbox: [-9.05, 38.44, -8.80, 38.53],
  label: { lon: -8.95, lat: 38.48, rotation: 0 },
  source: "阿拉比达海岸：里斯本以南塞图巴尔半岛一段石灰岩山地直插大西洋形成的陡峭海岸，最高点约500米，山海高差极大；1976年设立阿拉比达自然公园，海域内清澈的浅蓝色海水和茂密的地中海灌丛是其显著特征（ICNF）",
};

const BERLENGAS: TerrainEntry = {
  id: "berlengas",
  nameZh: "贝尔伦加群岛",
  nameEn: "Berlengas",
  category: "island",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "大贝尔伦加岛", lon: -9.508, lat: 39.410, elevation: 85, kind: "island" },
  bbox: [-9.55, 39.38, -9.46, 39.46],
  label: { lon: -9.51, lat: 39.41, rotation: 0 },
  source: "贝尔伦加群岛：距佩尼谢海岸约10–17公里的一组花岗岩小岛，主岛大贝尔伦加长约1.5公里；1981年成为葡萄牙第一处海洋自然保护区，也是重要的海鸟繁殖地；2011年列入联合国教科文组织生物圈保护区（UNESCO / ICNF）",
};

const PICO_MOUNTAIN: TerrainEntry = {
  id: "pico-mountain",
  nameZh: "皮库山",
  nameEn: "Mount Pico",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "皮库火山口", lon: -28.3979, lat: 38.4699, elevation: 2351, kind: "peak" },
  bbox: [-28.45, 38.42, -28.25, 38.53],
  label: { lon: -28.35, lat: 38.47, rotation: 0 },
  source: "皮库山：亚速尔群岛皮库岛上的层状火山，海拔2351米，是葡萄牙全境最高点，也是大西洋中脊上一处典型的洋岛火山；山麓一带传统的黑色玄武岩石墙葡萄园（葡萄种植于熔岩石圈内以防风）于2004年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const SETE_CIDADES_CALDERA: TerrainEntry = {
  id: "sete-cidades-caldera",
  nameZh: "七城破火山口",
  nameEn: "Sete Cidades Caldera",
  category: "basin",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "七城双湖", lon: -25.7897, lat: 37.8608, elevation: 260, kind: "lake" },
  bbox: [-25.83, 37.83, -25.75, 37.89],
  label: { lon: -25.79, lat: 37.86, rotation: 0 },
  source: "七城破火山口：亚速尔群岛圣米格尔岛西端一座直径约5公里的火山破火山口，口底一大一小两个相连的湖泊因光线折射常呈现一蓝一绿的对比色，当地传说据此附会为“恋人之泪”；活跃的圣米格尔火山系统由葡萄牙火山与地质灾害监测局持续监测（IVAR）",
};

const FURNAS_CALDERA: TerrainEntry = {
  id: "furnas-caldera",
  nameZh: "富尔纳斯破火山口",
  nameEn: "Furnas Caldera",
  category: "basin",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "富尔纳斯地热区", lon: -25.3181, lat: 37.7697, elevation: 360, kind: "escarpment" },
  bbox: [-25.37, 37.73, -25.28, 37.81],
  label: { lon: -25.32, lat: 37.77, rotation: 0 },
  source: "富尔纳斯破火山口：亚速尔群岛圣米格尔岛东部一座活跃火山破火山口，口内地热活动强烈，遍布喷气孔、沸泥塘和温泉，当地传统用地热蒸汽焖煮“火山炖菜”（cozido das Furnas）；由葡萄牙火山与地质灾害监测局持续监测（IVAR）",
};

const MADEIRA_MOUNTAINS: TerrainEntry = {
  id: "madeira-mountains",
  nameZh: "马德拉山地",
  nameEn: "Madeira Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "皮库鲁伊武峰", lon: -16.9425, lat: 32.7597, elevation: 1862, kind: "peak" },
  bbox: [-17.05, 32.70, -16.85, 32.78],
  label: { lon: -16.95, lat: 32.74, rotation: 0 },
  source: "马德拉山地：马德拉岛中央一列由火山喷发堆积形成的高山脊，最高点皮库鲁伊武海拔1862米；岛上保存有大片劳里西尔瓦月桂林（第三纪残遗植被），2007年作为自然遗产列入联合国教科文组织世界遗产名录（UNESCO）",
};

const CABO_GIRAO: TerrainEntry = {
  id: "cabo-girao",
  nameZh: "吉朗角",
  nameEn: "Cabo Girão",
  category: "coast",
  regionId: "europe",
  country: "portugal",
  landmark: { name: "吉朗角观景台", lon: -17.0011, lat: 32.6494, elevation: 580, kind: "escarpment" },
  bbox: [-17.03, 32.63, -16.97, 32.67],
  label: { lon: -17.00, lat: 32.65, rotation: 0 },
  source: "吉朗角：马德拉岛南岸一处近乎垂直的海崖，崖顶到海面落差约580米，是欧洲最高的海崖之一；崖壁由多次火山喷发形成的熔岩与火山碎屑层交替堆叠而成，崖顶设有悬空玻璃观景台（葡萄牙旅游局 Visit Madeira）",
};

// ============================================================
// 欧洲 / 比利时
// ============================================================

const HAUTES_FAGNES: TerrainEntry = {
  id: "hautes-fagnes",
  nameZh: "高地芬（费恩高原）",
  nameEn: "Hautes Fagnes (High Fens)",
  category: "plateau",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "植物园峰（信号博特朗热）", lon: 6.0817, lat: 50.5039, elevation: 694, kind: "peak" },
  bbox: [5.95, 50.45, 6.15, 50.60],
  label: { lon: 6.05, lat: 50.52, rotation: 0 },
  source: "高地芬：阿登高原东部一片泥炭沼泽高原，最高点植物园峰海拔694米，是比利时全境最高点；高原保留着显著的冰缘地貌遗迹（多边形土、冻融构造等），是西北欧periglacial地貌研究的代表地点（维基）",
};

const CONDROZ: TerrainEntry = {
  id: "condroz",
  nameZh: "孔德罗兹高原",
  nameEn: "Condroz",
  category: "plateau",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "希尼镇", lon: 5.1, lat: 50.3, elevation: 250, kind: "city" },
  bbox: [4.6, 50.15, 5.6, 50.45],
  axis: [[4.65, 50.3], [5.55, 50.3]],
  viewScale: 1.5,
  label: { lon: 5.1, lat: 50.32, rotation: 0 },
  source: "孔德罗兹高原：瓦隆大区一处低缓起伏的高原，位于阿登高原与桑布尔—默兹河谷之间，海拔多在200至300米，地表由砂岩、石灰岩相间的条状山脊构成（大英百科 / 维基）",
};

const ARDENNES_FOREST: TerrainEntry = {
  id: "ardennes-forest",
  nameZh: "阿登森林高地",
  nameEn: "Ardennes Forest Uplands",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "圣于贝尔", lon: 5.3733, lat: 50.0311, elevation: 435, kind: "city" },
  bbox: [5.0, 49.7, 6.1, 50.3],
  viewScale: 1.8,
  label: { lon: 5.5, lat: 50.0, rotation: 0 },
  source: "阿登：比利时东南部及卢森堡、法国、德国交界一带的广大森林高地，比利时境内平均海拔约350至400米，最高处即高地芬泥炭高原（694米）；地表多为古生代变质岩，河流切割出陡峭河谷，森林覆盖率是比利时全国最高的地区（维基）",
};

const PAYS_DE_HERVE: TerrainEntry = {
  id: "pays-de-herve",
  nameZh: "埃尔沃地区",
  nameEn: "Pays de Herve",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "埃尔沃镇", lon: 5.7967, lat: 50.6408, elevation: 280, kind: "city" },
  bbox: [5.65, 50.55, 5.95, 50.72],
  label: { lon: 5.8, lat: 50.63, rotation: 0 },
  source: "埃尔沃地区：位于韦斯德河与默兹河之间的一片低缓丘陵，以树篱环绕的果园与草场景观著称，是比利时传统奶酪（埃尔沃奶酪）与糖浆的产区（维基）",
};

const HAGELAND: TerrainEntry = {
  id: "hageland",
  nameZh: "哈赫兰地区",
  nameEn: "Hageland",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "迪斯特镇", lon: 5.05, lat: 50.98, elevation: 45, kind: "city" },
  bbox: [4.75, 50.87, 5.15, 51.0],
  axis: [[4.78, 50.93], [5.12, 50.95]],
  label: { lon: 4.95, lat: 50.95, rotation: -5 },
  source: "哈赫兰地区：佛兰芒布拉班特省东部一系列东西走向的铁矿砂岩条状山脊，山体不高但排列规律，是中新世狄斯特砂层差异侵蚀留下的地貌遗存（维基 / 地质文献）",
};

const CAMPINE: TerrainEntry = {
  id: "campine",
  nameZh: "坎皮讷（肯彭地区）",
  nameEn: "Campine (Kempen)",
  category: "plain",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "莫尔镇", lon: 5.15, lat: 51.15, elevation: 30, kind: "city" },
  bbox: [4.7, 51.05, 6.05, 51.4],
  viewScale: 1.8,
  label: { lon: 5.4, lat: 51.2, rotation: 0 },
  source: "坎皮讷（荷兰语称肯彭）：比利时东北部与荷兰南部交界处一片地势低平的沙质高地，是默兹—莱茵三角洲的一部分，历史上曾大片覆盖着石楠荒原、沙丘与湿地（维基）",
};

const FLANDERS_COASTAL_PLAIN: TerrainEntry = {
  id: "flanders-coastal-plain",
  nameZh: "佛兰德沿海平原",
  nameEn: "Plain of Flanders",
  category: "plain",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "迪克斯梅德", lon: 2.87, lat: 51.03, elevation: 3, kind: "city" },
  bbox: [2.55, 50.85, 3.4, 51.15],
  viewScale: 1.5,
  label: { lon: 2.95, lat: 50.98, rotation: 0 },
  source: "佛兰德沿海平原：比利时西北部一片地势极为低平的沿海平原，向内陆延伸约8至16公里，土壤多为粘质海相沉积，历史上通过筑堤排水从海中围垦而来（大英百科）",
};

const FAGNE_FAMENNE: TerrainEntry = {
  id: "fagne-famenne",
  nameZh: "法涅—法梅讷凹地",
  nameEn: "Fagne-Famenne",
  category: "basin",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "罗什福尔", lon: 5.22, lat: 50.16, elevation: 210, kind: "city" },
  bbox: [4.6, 50.05, 5.6, 50.25],
  axis: [[4.65, 50.15], [5.55, 50.18]],
  viewScale: 1.5,
  label: { lon: 5.1, lat: 50.15, rotation: 0 },
  source: "法涅—法梅讷凹地：夹在孔德罗兹高原与阿登高原之间的一条狭长凹陷地带，由较软的泥盆纪页岩经差异侵蚀而成，凹地南缘是卡雷斯蒂耶讷石灰岩条带——比利时喀斯特地貌最集中的区域（Britannica / 地质文献）",
};

const MEUSE_VALLEY_BE: TerrainEntry = {
  id: "meuse-valley-be",
  nameZh: "默兹河谷（比利时段）",
  nameEn: "Meuse Valley (Belgian stretch)",
  category: "valley",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "迪南", lon: 4.9127, lat: 50.2603, elevation: 100, kind: "city" },
  bbox: [4.75, 50.15, 5.65, 50.65],
  axis: [[4.85, 50.15], [5.6, 50.6]],
  viewScale: 1.3,
  label: { lon: 5.2, lat: 50.4, rotation: 40 },
  source: "默兹河谷：默兹河流经比利时境内的一段，河流切穿孔德罗兹与阿登高原边缘的石灰岩层，两岸崖壁陡峭，迪南、那慕尔、于伊、列日等历史城镇沿河而建；默兹河流域的绝大部分位于比利时境内（维基）",
};

const SEMOIS_VALLEY: TerrainEntry = {
  id: "semois-valley",
  nameZh: "塞穆瓦河谷",
  nameEn: "Semois Valley",
  category: "valley",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "布永", lon: 5.0664, lat: 49.7942, elevation: 220, kind: "city" },
  bbox: [4.75, 49.75, 5.55, 49.9],
  axis: [[4.8, 49.83], [5.5, 49.82]],
  viewScale: 1.3,
  label: { lon: 5.15, lat: 49.83, rotation: 0 },
  source: "塞穆瓦河谷：塞穆瓦河全长约210公里，发源于阿尔隆附近，向北流经阿登高原后转而向西，最终在法国境内汇入默兹河；河道在页岩地层中蜿蜒切出一连串极深的河曲，谷坡覆盖山毛榉与栎树林，2023年谷地大部分被划为瓦隆大区首个自然公园（维基）",
};

const OURTHE_VALLEY: TerrainEntry = {
  id: "ourthe-valley",
  nameZh: "乌尔特河谷",
  nameEn: "Ourthe Valley",
  category: "valley",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "拉罗什昂阿登", lon: 5.5764, lat: 50.1828, elevation: 210, kind: "city" },
  bbox: [5.4, 50.05, 5.85, 50.55],
  axis: [[5.5, 50.1], [5.65, 50.5]],
  viewScale: 1.2,
  label: { lon: 5.6, lat: 50.3, rotation: 75 },
  source: "乌尔特河谷：阿登高原最主要的河谷之一，乌尔特河切穿高原古老的变质岩层，谷坡陡峭、森林茂密，拉罗什昂阿登等古镇坐落在河曲环抱的台地上（维基）",
};

const VESDRE_VALLEY: TerrainEntry = {
  id: "vesdre-valley",
  nameZh: "韦斯德河谷",
  nameEn: "Vesdre Valley",
  category: "valley",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "韦尔维耶", lon: 5.8631, lat: 50.5905, elevation: 260, kind: "city" },
  bbox: [5.75, 50.55, 6.0, 50.68],
  label: { lon: 5.87, lat: 50.6, rotation: 0 },
  source: "韦斯德河谷：韦斯德河切穿阿登高原北缘古老变质岩层形成的狭窄河谷，历史上是比利时呢绒纺织业的发源地之一，韦尔维耶等城镇沿河而建（维基）",
};

const LESSE_VALLEY: TerrainEntry = {
  id: "lesse-valley",
  nameZh: "莱斯河谷",
  nameEn: "Lesse Valley",
  category: "valley",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "上翁—莱斯（莱斯河谷村）", lon: 5.1897, lat: 50.1067, elevation: 180, kind: "city" },
  bbox: [4.9, 50.0, 5.3, 50.2],
  axis: [[4.95, 50.05], [5.25, 50.18]],
  label: { lon: 5.1, lat: 50.1, rotation: -35 },
  source: "莱斯河谷：莱斯河在流经卡雷斯蒂耶讷石灰岩条带一段发育出典型的喀斯特谷地地貌，河道两侧多石灰岩崖壁与地下暗河，上翁—莱斯附近的溶洞群（阿甘溶洞）即由这条河的地下段侵蚀而成（维基）",
};

const AMBLEVE_GORGE: TerrainEntry = {
  id: "ambleve-gorge",
  nameZh: "昂布利沃峡谷",
  nameEn: "Amblève Gorge",
  category: "gorge",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "库瀑布", lon: 5.8386, lat: 50.3919, elevation: 280, kind: "gorge" },
  bbox: [5.79, 50.37, 5.88, 50.41],
  label: { lon: 5.84, lat: 50.39, rotation: 0 },
  source: "昂布利沃峡谷：昂布利沃河切穿阿登高原东部形成的一段河谷，谷中的库瀑布落差约15米，是比利时较知名的瀑布之一；瀑布并非天然形成，而是18世纪当地修士为给磨坊供水，人工截断河曲弯道而成（维基）",
};

const HAN_SUR_LESSE_CAVES: TerrainEntry = {
  id: "han-sur-lesse-caves",
  nameZh: "上翁溶洞",
  nameEn: "Caves of Han-sur-Lesse",
  category: "gorge",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "上翁溶洞入口", lon: 5.1897, lat: 50.1039, elevation: 175, kind: "gorge" },
  bbox: [5.17, 50.09, 5.21, 50.12],
  label: { lon: 5.19, lat: 50.10, rotation: 0 },
  source: "上翁溶洞：莱斯河约50万年前改道穿入布万石灰岩山体，经长期溶蚀后又在约2公里外重新出露地表，途中留下的这套洞穴系统，主厅“穹顶大厅”宽约150米、拱顶高约127米；洞内常年温度约13℃，考古发现青铜时代与石器时代人类活动遗迹（维基）",
};

const VIROIN_VALLEY: TerrainEntry = {
  id: "viroin-valley",
  nameZh: "维鲁安河谷",
  nameEn: "Viroin Valley",
  category: "gorge",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "尼斯姆", lon: 4.5183, lat: 50.0958, elevation: 190, kind: "gorge" },
  bbox: [4.45, 50.05, 4.65, 50.15],
  label: { lon: 4.55, lat: 50.1, rotation: 0 },
  source: "维鲁安河谷：维鲁安河切穿卡雷斯蒂耶讷石灰岩条带形成的一段峡谷型河谷，两岸多裸露的中泥盆世石灰岩崖壁，是比利时喀斯特地貌最集中、洞穴最密集的区段之一，属法梅讷—阿登联合国教科文组织世界地质公园的核心区域（UNESCO / 维基）",
};

const SCHELDT_RIVER_BE: TerrainEntry = {
  id: "scheldt-river-be",
  nameZh: "斯海尔德河（比利时段）",
  nameEn: "Scheldt River (Belgian stretch)",
  category: "river",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "安特卫普", lon: 4.4025, lat: 51.2194, elevation: 5, kind: "city" },
  bbox: [3.6, 50.95, 4.5, 51.35],
  axis: [[3.65, 50.98], [4.4, 51.3]],
  viewScale: 1.4,
  label: { lon: 4.0, lat: 51.15, rotation: 30 },
  source: "斯海尔德河：发源于法国北部，全长约435公里，其中约200公里流经比利时，自罗马时代起即是重要的水运通道；安特卫普港坐落在河道下游，是欧洲第二大港口；河口段（西斯海尔德河）流经荷兰境内出海，比利时与荷兰就这段航道的通行与维护订有长期协议（大英百科 / 维基）",
};

const SAMBRE_RIVER: TerrainEntry = {
  id: "sambre-river",
  nameZh: "桑布尔河",
  nameEn: "Sambre River",
  category: "river",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "沙勒罗瓦", lon: 4.4450, lat: 50.4108, elevation: 120, kind: "city" },
  bbox: [3.6, 50.2, 4.9, 50.47],
  axis: [[3.65, 50.25], [4.85, 50.46]],
  viewScale: 1.4,
  label: { lon: 4.2, lat: 50.35, rotation: 10 },
  source: "桑布尔河：发源于法国北部，全长约193公里，是默兹河左岸支流，在瓦隆大区首府那慕尔汇入默兹河；沙勒罗瓦是桑布尔河沿岸最重要的工业城市，历史上曾是比利时煤铁工业的核心地带（维基）",
};

const MEUSE_RIVER_BE: TerrainEntry = {
  id: "meuse-river-be",
  nameZh: "默兹河（比利时段）",
  nameEn: "Meuse River (Belgian stretch)",
  category: "river",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "列日", lon: 5.5731, lat: 50.6326, elevation: 65, kind: "city" },
  bbox: [4.5, 50.2, 5.75, 50.75],
  axis: [[4.6, 50.25], [5.7, 50.7]],
  viewScale: 1.4,
  label: { lon: 5.1, lat: 50.5, rotation: 35 },
  source: "默兹河：比利时境内最主要的通航大河，默兹河流域的大部分面积都位于比利时境内；下游经列日后转向北流，最终在荷兰境内与莱茵河三角洲汇合入海；列日是默兹河沿岸比利时最大的内河港口城市（维基）",
};

const IJZER_RIVER: TerrainEntry = {
  id: "ijzer-river",
  nameZh: "伊瑟河",
  nameEn: "Yser (IJzer) River",
  category: "river",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "迪克斯梅德伊瑟塔", lon: 2.8664, lat: 51.0322, elevation: 3, kind: "city" },
  bbox: [2.6, 50.7, 2.95, 51.1],
  axis: [[2.75, 50.75], [2.87, 51.05]],
  viewScale: 1.2,
  label: { lon: 2.8, lat: 50.9, rotation: -15 },
  source: "伊瑟河：发源于法国北部，流经比利时西弗兰德省沿海平原，在纽波特附近注入北海；河流下游地势低平、多经人工排水渠道调节，第一次世界大战期间这一带的低洼地形曾被用于防御性放水（维基）",
};

const BELGIAN_COAST_DUNES: TerrainEntry = {
  id: "belgian-coast-dunes",
  nameZh: "比利时海岸沙丘",
  nameEn: "Belgian Coast Dunes",
  category: "coast",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "德帕纳沙丘", lon: 2.5883, lat: 51.0908, elevation: 10, kind: "dune" },
  bbox: [2.53, 51.06, 2.65, 51.12],
  label: { lon: 2.59, lat: 51.09, rotation: 0 },
  source: "比利时海岸沙丘：沿比利时约65公里长的北海海岸分布的一列沙丘带，是从法国敦刻尔克延伸至丹麦的欧洲北海沿岸沙丘系统的一部分，沙丘高出后方平原约10米；受海岸城市化影响，现存沙丘面积已不足历史峰值的三分之二，德帕纳一带保留着较宽的沙丘带（Coastal Wiki）",
};

const ZWIN: TerrainEntry = {
  id: "zwin",
  nameZh: "兹温湿地",
  nameEn: "Zwin",
  category: "coast",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "兹温自然保护区", lon: 3.3667, lat: 51.3667, elevation: 1, kind: "escarpment" },
  bbox: [3.33, 51.35, 3.40, 51.38],
  label: { lon: 3.365, lat: 51.365, rotation: 0 },
  source: "兹温湿地：位于比利时与荷兰边境的一片潮汐盐沼湿地，涨潮时定期被海水淹没，独特的盐分梯度孕育出以海拉凡德拉为代表的耐盐植物群落；比利时境内面积约180公顷，记录到的鸟类种数占比利时全国观测种数的一半以上（维基）",
};

const SONIAN_FOREST: TerrainEntry = {
  id: "sonian-forest",
  nameZh: "索尼森林",
  nameEn: "Sonian Forest",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "格罗嫩达尔", lon: 4.4167, lat: 50.7667, elevation: 100, kind: "city" },
  bbox: [4.35, 50.72, 4.5, 50.82],
  viewScale: 1.1,
  label: { lon: 4.43, lat: 50.77, rotation: 0 },
  source: "索尼森林：布鲁塞尔东南郊一片面积约4421公顷的古老山毛榉林，部分林木树龄超过200年，是欧洲现存最大、最古老的山毛榉林之一，栖息着近600种甲虫与约40种哺乳动物；2017年作为跨国系列遗产“欧洲喀尔巴阡山脉及其他地区古老与原始山毛榉林”的一部分列入联合国教科文组织世界遗产名录（维基 / UNESCO）",
};

const STAVELOT_MASSIF: TerrainEntry = {
  id: "stavelot-massif",
  nameZh: "斯塔沃洛地块",
  nameEn: "Stavelot Massif",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "斯塔沃洛镇", lon: 5.9333, lat: 50.4, elevation: 300, kind: "city" },
  bbox: [5.75, 50.3, 6.15, 50.5],
  viewScale: 1.3,
  label: { lon: 5.95, lat: 50.4, rotation: 0 },
  source: "斯塔沃洛地块：阿登高原东部出露的一片早古生代基岩，由约2500米厚的寒武纪至奥陶纪石英岩与板岩互层构成，是比利时境内出露年代最古老的岩石，先后经历加里东与海西造山运动的挤压变形（维基 / 地质文献）",
};

const HESBAYE: TerrainEntry = {
  id: "hesbaye",
  nameZh: "埃斯巴伊高原",
  nameEn: "Hesbaye",
  category: "plateau",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "瓦雷姆", lon: 5.25, lat: 50.7, elevation: 150, kind: "city" },
  bbox: [5.0, 50.6, 5.6, 50.8],
  viewScale: 1.4,
  label: { lon: 5.3, lat: 50.72, rotation: 0 },
  source: "埃斯巴伊高原：默兹河与斯海尔德河两大流域之间一片开阔的黄土台地，是罗马时代以前即已开垦的农业区，黄土母质发育的壤质土壤十分肥沃，至今仍是比利时最重要的谷物产区之一，有“比利时粮仓”之称（大英百科 / 维基）",
};

const GAUME: TerrainEntry = {
  id: "gaume",
  nameZh: "戈姆地区",
  nameEn: "Gaume",
  category: "hills",
  regionId: "europe",
  country: "belgium",
  landmark: { name: "维尔通", lon: 5.5325, lat: 49.5667, elevation: 320, kind: "city" },
  bbox: [5.3, 49.5, 5.85, 49.65],
  viewScale: 1.3,
  label: { lon: 5.55, lat: 49.58, rotation: 0 },
  source: "戈姆地区：比利时最南端一片海拔低于阿登高原的丘陵地带，与法国洛林地区接壤，因气候相对温暖干燥、盛产果园与葡萄而被称为“比利时的普罗旺斯”（维基）",
};

// ============================================================
// 欧洲 / 荷兰
// ============================================================

const VAALSERBERG: TerrainEntry = {
  id: "vaalserberg",
  nameZh: "瓦尔斯山",
  nameEn: "Vaalserberg",
  category: "hills",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "瓦尔斯山顶", lon: 6.0206, lat: 50.7539, elevation: 322.7, kind: "peak" },
  bbox: [5.97, 50.73, 6.07, 50.78],
  label: { lon: 6.02, lat: 50.75, rotation: 0 },
  source: "瓦尔斯山：荷兰全境最高点，海拔322.7米，位于荷兰、德国、比利时三国交界地带（中性地理表述，不涉边界主权）；山体是阿登高原向北延伸的余脉，覆盖森林，山顶设有观景塔（荷兰地形测量局 Kadaster）",
};

const VELUWE: TerrainEntry = {
  id: "veluwe",
  nameZh: "费吕沃",
  nameEn: "Veluwe",
  category: "hills",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "高费吕沃国家公园", lon: 5.8500, lat: 52.0800, elevation: 110, kind: "escarpment" },
  bbox: [5.65, 51.95, 6.05, 52.30],
  viewScale: 1.3,
  label: { lon: 5.85, lat: 52.15, rotation: 0 },
  source: "费吕沃：荷兰中部一片由末次冰期冰川推挤堆积形成的沙质丘陵，最高点约110米，是荷兰最大的连片森林与荒原保护区；1935年设立高费吕沃国家公园，园内保留大片欧石楠荒原和流动沙丘（荷兰国家林务局 Staatsbosbeheer）",
};

const UTRECHTSE_HEUVELRUG: TerrainEntry = {
  id: "utrechtse-heuvelrug",
  nameZh: "乌得勒支丘陵脊",
  nameEn: "Utrechtse Heuvelrug",
  category: "hills",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "阿默龙恩一带高地", lon: 5.3833, lat: 52.0333, elevation: 69, kind: "escarpment" },
  bbox: [5.15, 51.95, 5.55, 52.15],
  axis: [[5.15, 52.10], [5.55, 51.98]],
  label: { lon: 5.35, lat: 52.05, rotation: -15 },
  source: "乌得勒支丘陵脊：荷兰中部一条狭长的末次冰期冰碛脊，长约30公里、最高点约69米，是同一冰期冰川作用在荷兰留下的另一列丘陵；2003年设立乌得勒支丘陵脊国家公园（荷兰国家林务局 Staatsbosbeheer）",
};

const DRENTHE_HONDSRUG: TerrainEntry = {
  id: "drenthe-hondsrug",
  nameZh: "德伦特洪兹鲁格脊",
  nameEn: "Drenthe Hondsrug",
  category: "hills",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "埃门史前石冢群", lon: 6.8500, lat: 52.8500, elevation: 25, kind: "escarpment" },
  bbox: [6.55, 52.75, 7.05, 53.05],
  axis: [[6.55, 53.00], [7.05, 52.78]],
  label: { lon: 6.80, lat: 52.90, rotation: -20 },
  source: "德伦特洪兹鲁格脊：荷兰东北部德伦特省一条冰碛沙脊，是荷兰境内已知最古老的连续人类定居地带之一；脊上分布着约54座新石器时代巨石墓（hunebedden，公元前3400-3200年），2023年整体作为地质公园列入联合国教科文组织世界地质公园网络（UNESCO）",
};

const FLEVOLAND_POLDER: TerrainEntry = {
  id: "flevoland-polder",
  nameZh: "弗莱福兰围垦地",
  nameEn: "Flevoland Polder",
  category: "plain",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "弗莱福兰中部农田", lon: 5.6000, lat: 52.5300, elevation: -4, kind: "grassland" },
  bbox: [5.30, 52.35, 5.90, 52.75],
  viewScale: 1.5,
  label: { lon: 5.60, lat: 52.55, rotation: 0 },
  source: "弗莱福兰围垦地：1950-1968年间从须德海（今艾瑟尔湖）排水围垦而成的土地，是世界最大的人工岛/围垦地之一，大部分地面低于海平面（低洼处约-4米），完全依靠泵站持续排水维持；1986年设立为荷兰第12个省（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const ZUIDPLASPOLDER: TerrainEntry = {
  id: "zuidplaspolder",
  nameZh: "南普拉斯围垦地",
  nameEn: "Zuidplaspolder",
  category: "basin",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "新韦克尔克-伊瑟尔洼地", lon: 4.6200, lat: 51.9800, elevation: -6.76, kind: "grassland" },
  bbox: [4.50, 51.92, 4.75, 52.05],
  label: { lon: 4.62, lat: 51.98, rotation: 0 },
  source: "南普拉斯围垦地：1840年排干的一片前湖泊洼地，地表最低点约海拔-6.76米，是荷兰全境地势最低点；洼地由风车、后改为蒸汽泵站持续排水维持干燥，是荷兰围垦工程史上的重要样本（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const LOONSE_EN_DRUNENSE_DUINEN: TerrainEntry = {
  id: "loonse-en-drunense-duinen",
  nameZh: "洛嫩-德吕嫩沙丘",
  nameEn: "Loonse en Drunense Duinen",
  category: "desert",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "内陆流动沙丘核心区", lon: 5.0800, lat: 51.6300, elevation: 15, kind: "dune" },
  bbox: [5.00, 51.60, 5.16, 51.67],
  label: { lon: 5.08, lat: 51.63, rotation: 0 },
  source: "洛嫩-德吕嫩沙丘：荷兰南部布拉班特省一片约35平方公里的内陆流动沙丘，中世纪过度放牧与砍伐导致表土流失、风沙外露而形成，因景观酷似沙漠常被称为“布拉班特的撒哈拉”；1971年设立国家公园加以保护，沙丘至今仍在缓慢移动（荷兰国家林务局 Staatsbosbeheer）",
};

const WADDEN_SEA_NL: TerrainEntry = {
  id: "wadden-sea-nl",
  nameZh: "瓦登海",
  nameEn: "Wadden Sea",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "斯希蒙尼克岛外滩涂", lon: 6.2000, lat: 53.4500, elevation: 0, kind: "delta" },
  bbox: [4.70, 52.95, 7.20, 53.55],
  axis: [[4.70, 53.10], [7.20, 53.50]],
  viewScale: 1.6,
  label: { lon: 5.80, lat: 53.30, rotation: 15 },
  source: "瓦登海：北海东南岸一片世界最大的连续潮间带滩涂系统，从荷兰经德国延伸至丹麦（跨三国的自然区域，中性表述），荷兰段沿西弗里西亚群岛内侧展开；2009年荷兰与德国段共同列入联合国教科文组织世界遗产名录，是数百万候鸟的中途停歇地（UNESCO）",
};

const ZEELAND_DELTA: TerrainEntry = {
  id: "zeeland-delta",
  nameZh: "泽兰三角洲",
  nameEn: "Zeeland Delta",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "东斯海尔德风暴潮屏障", lon: 3.9000, lat: 51.6500, elevation: 0, kind: "escarpment" },
  bbox: [3.55, 51.40, 4.20, 51.85],
  label: { lon: 3.85, lat: 51.62, rotation: 0 },
  source: "泽兰三角洲：莱茵河、马斯河、斯海尔德河共同入海处的复杂三角洲地带，1953年一次风暴潮造成严重洪灾后，荷兰启动“三角洲工程”修建了一系列防洪闸坝，东斯海尔德风暴潮屏障（1986年完工，长约9公里）是其中规模最大的一座，平时开放让海水自然流通、仅在预警风暴时关闭（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const WESTERSCHELDE: TerrainEntry = {
  id: "westerschelde",
  nameZh: "西斯海尔德河口",
  nameEn: "Westerschelde",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "弗利辛恩河口段", lon: 3.8000, lat: 51.4000, elevation: 0, kind: "delta" },
  bbox: [3.35, 51.30, 4.10, 51.50],
  axis: [[3.35, 51.35], [4.10, 51.42]],
  label: { lon: 3.75, lat: 51.38, rotation: 5 },
  source: "西斯海尔德河口：斯海尔德河（发源于法国、流经比利时）在荷兰泽兰省境内注入北海前形成的宽阔潮汐河口，是通往比利时安特卫普港的主航道，荷、比两国就该航道的疏浚与维护订有长期协议（中性表述，不涉主权）；河口沿岸有大片盐沼和滩涂湿地（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const HOLLAND_DUNES: TerrainEntry = {
  id: "holland-dunes",
  nameZh: "荷兰沙丘海岸",
  nameEn: "Holland Dunes",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "南肯尼默兰国家公园", lon: 4.5500, lat: 52.4200, elevation: 30, kind: "dune" },
  bbox: [4.45, 52.30, 4.65, 52.55],
  axis: [[4.60, 52.30], [4.50, 52.55]],
  label: { lon: 4.55, lat: 52.42, rotation: -80 },
  source: "荷兰沙丘海岸：北海沿岸一条连续的沙丘带，从泽兰一直延伸到瓦登群岛，是荷兰天然的海岸防线，也是荷兰地下水的重要蓄水层；南肯尼默兰一带的沙丘国家公园保留有荷兰面积最大的连片沙丘荒原（荷兰国家林务局 Staatsbosbeheer）",
};

const BIESBOSCH: TerrainEntry = {
  id: "biesbosch",
  nameZh: "比斯博斯",
  nameEn: "Biesbosch",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "比斯博斯国家公园水道", lon: 4.8000, lat: 51.7500, elevation: 0, kind: "delta" },
  bbox: [4.65, 51.68, 4.95, 51.82],
  label: { lon: 4.80, lat: 51.75, rotation: 0 },
  source: "比斯博斯：马斯河与莱茵河支流汇合处的一片淡水潮汐湿地，1421年一次堤坝溃决引发的洪水（圣伊丽莎白洪水）淹没原有陆地后逐渐演变而成，如今是水道纵横的淡水潮汐三角洲，1994年设立国家公园，是欧洲少有的淡水潮汐湿地样本之一（荷兰国家林务局 Staatsbosbeheer）",
};

const MAASVLAKTE: TerrainEntry = {
  id: "maasvlakte",
  nameZh: "马斯平原（鹿特丹港填海区）",
  nameEn: "Maasvlakte",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "马斯平原二期填海区", lon: 4.0200, lat: 51.9500, elevation: 5, kind: "delta" },
  bbox: [3.90, 51.90, 4.15, 52.00],
  label: { lon: 4.02, lat: 51.95, rotation: 0 },
  source: "马斯平原：鹿特丹港自1970年代起在马斯河口以西的北海海域填海造陆形成的人工陆地，2013年完工的二期工程（Maasvlakte 2）进一步向海推进约2公里，是欧洲最大港口鹿特丹港的核心作业区之一，也是荷兰持续与海争地传统的当代延续（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const AFSLUITDIJK: TerrainEntry = {
  id: "afsluitdijk",
  nameZh: "阿夫鲁戴克大坝",
  nameEn: "Afsluitdijk",
  category: "coast",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "阿夫鲁戴克大坝中段", lon: 5.3000, lat: 53.0700, elevation: 7, kind: "escarpment" },
  bbox: [5.05, 52.98, 5.45, 53.13],
  axis: [[5.05, 53.00], [5.45, 53.08]],
  label: { lon: 5.25, lat: 53.05, rotation: 10 },
  source: "阿夫鲁戴克大坝：1932年完工的一条长约32公里的拦海大坝，将原本与北海相通的须德海封闭为如今的淡水湖艾瑟尔湖，是荷兰围垦史上最具标志性的工程之一，大坝上建有公路和纪念碑（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const IJSSELMEER: TerrainEntry = {
  id: "ijsselmeer",
  nameZh: "艾瑟尔湖",
  nameEn: "IJsselmeer",
  category: "lake",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "艾瑟尔湖中部", lon: 5.3000, lat: 52.7500, elevation: -0.2, kind: "lake" },
  bbox: [4.95, 52.45, 5.75, 53.10],
  viewScale: 1.3,
  label: { lon: 5.30, lat: 52.75, rotation: 0 },
  source: "艾瑟尔湖：荷兰最大的湖泊，面积约1100平方公里，1932年阿夫鲁戴克大坝建成后，原本与北海相通的咸水湾须德海被封闭并逐渐淡化，形成如今的淡水湖；湖区周边多段被围垦为弗莱福兰省的陆地（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const MARKERMEER: TerrainEntry = {
  id: "markermeer",
  nameZh: "马尔默湖",
  nameEn: "Markermeer",
  category: "lake",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "马尔默湖中部", lon: 5.2500, lat: 52.5000, elevation: -0.2, kind: "lake" },
  bbox: [5.00, 52.35, 5.50, 52.65],
  label: { lon: 5.25, lat: 52.50, rotation: 0 },
  source: "马尔默湖：1976年一条拦湖坝（Houtribdijk）将艾瑟尔湖南部隔出的一片独立淡水湖，面积约700平方公里；因水流不畅、泥沙淤积导致水质浑浊，近年荷兰启动“马尔默沃德”生态修复工程，人工建造湿地岛屿改善水质（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const GREVELINGEN: TerrainEntry = {
  id: "grevelingen",
  nameZh: "赫雷弗林恩湖",
  nameEn: "Grevelingen",
  category: "lake",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "赫雷弗林恩湖中部", lon: 3.8500, lat: 51.7500, elevation: 0, kind: "lake" },
  bbox: [3.65, 51.68, 4.05, 51.82],
  label: { lon: 3.85, lat: 51.75, rotation: 0 },
  source: "赫雷弗林恩湖：三角洲工程期间（1971年筑坝完工）由原河口湾封闭形成的咸水湖，是西欧最大的咸水湖之一；因不再受潮汐冲刷，湖区成为潜水和水上运动热点，也是重要的水鸟栖息地（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const LAUWERSMEER: TerrainEntry = {
  id: "lauwersmeer",
  nameZh: "劳沃斯湖",
  nameEn: "Lauwersmeer",
  category: "lake",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "劳沃斯湖国家公园", lon: 6.2500, lat: 53.3500, elevation: -1, kind: "lake" },
  bbox: [6.10, 53.28, 6.40, 53.42],
  label: { lon: 6.25, lat: 53.35, rotation: 0 },
  source: "劳沃斯湖：1969年一条拦海坝将原本与瓦登海相通的劳沃斯湾封闭后逐渐淡化形成的湖泊与湿地，1990年设立国家公园，是荷兰北部重要的候鸟栖息与观测地（荷兰国家林务局 Staatsbosbeheer）",
};

const WEERRIBBEN_WIEDEN: TerrainEntry = {
  id: "weerribben-wieden",
  nameZh: "维里本-维登湿地",
  nameEn: "Weerribben-Wieden",
  category: "lake",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "维里本-维登国家公园", lon: 6.0500, lat: 52.7500, elevation: -1, kind: "lake" },
  bbox: [5.90, 52.68, 6.20, 52.82],
  label: { lon: 6.05, lat: 52.75, rotation: 0 },
  source: "维里本-维登湿地：荷兰西北部一片由历史上大规模泥炭开采形成的湖沼湿地，纵横的水道原是采泥炭留下的沟渠，是西欧现存面积最大的低地泥炭沼泽之一；1992年整合设立国家公园，芦苇收割等传统利用方式延续至今（荷兰国家林务局 Staatsbosbeheer）",
};

const RHINE_DELTA_NL: TerrainEntry = {
  id: "rhine-delta-nl",
  nameZh: "莱茵河荷兰段",
  nameEn: "Rhine Delta (Netherlands)",
  category: "river",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "潘纳尔登运河分流点", lon: 6.1000, lat: 51.8700, elevation: 10, kind: "meander" },
  bbox: [5.80, 51.80, 6.30, 51.95],
  label: { lon: 6.05, lat: 51.87, rotation: 0 },
  source: "莱茵河荷兰段：莱茵河（发源于瑞士阿尔卑斯山）进入荷兰后在潘纳尔登运河一带分流为下莱茵河/莱克河与瓦尔河两支，是欧洲最重要的内河航运通道之一；三条支流最终分别经鹿特丹、代尔夫齐尔等多个入海口汇入北海（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const MEUSE_RIVER_NL: TerrainEntry = {
  id: "meuse-river-nl",
  nameZh: "马斯河荷兰段",
  nameEn: "Meuse (Maas) River",
  category: "river",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "马斯特里赫特河段", lon: 5.6900, lat: 50.8500, elevation: 45, kind: "meander" },
  bbox: [5.55, 50.75, 5.95, 51.15],
  axis: [[5.60, 50.78], [5.90, 51.10]],
  label: { lon: 5.75, lat: 50.95, rotation: -40 },
  source: "马斯河荷兰段：发源于法国、流经比利时后进入荷兰南部林堡省的河流，马斯特里赫特一带河谷较窄、两岸有低丘，向北进入布拉班特省后河道展宽变缓，与莱茵河支流在鹿特丹以西汇合入海（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const IJSSEL_RIVER: TerrainEntry = {
  id: "ijssel-river",
  nameZh: "艾瑟尔河",
  nameEn: "IJssel River",
  category: "river",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "德文特尔河段", lon: 6.1000, lat: 52.3500, elevation: 5, kind: "meander" },
  bbox: [5.90, 52.05, 6.25, 52.60],
  axis: [[5.95, 52.05], [5.90, 52.60]],
  label: { lon: 6.05, lat: 52.35, rotation: -70 },
  source: "艾瑟尔河：莱茵河下莱茵河段在阿纳姆附近分出的一条支流，向北流约120公里注入艾瑟尔湖，是荷兰东部“汉萨城市”（代芬特尔、坎彭等，历史上曾是汉萨同盟贸易网络的成员）沿岸的主要水道（荷兰基础设施与水利部 Rijkswaterstaat）",
};

const VECHT_RIVER: TerrainEntry = {
  id: "vecht-river",
  nameZh: "费赫特河",
  nameEn: "Vecht River",
  category: "river",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "洛嫩镇河段", lon: 5.0300, lat: 52.2200, elevation: 0, kind: "meander" },
  bbox: [4.95, 52.15, 5.15, 52.35],
  label: { lon: 5.03, lat: 52.22, rotation: -30 },
  source: "费赫特河：荷兰中部一条流速平缓的小河，17-18世纪阿姆斯特丹商人沿河修建了大量避暑庄园（buitenplaatsen），至今两岸保留数十座历史庄园和花园，是荷兰黄金时代乡村景观的代表样本（荷兰文化遗产局 Rijksdienst voor het Cultureel Erfgoed）",
};

const WADDEN_ISLANDS: TerrainEntry = {
  id: "wadden-islands",
  nameZh: "西弗里西亚群岛",
  nameEn: "West Frisian Islands",
  category: "island",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "特塞尔岛沙丘", lon: 4.8300, lat: 53.1300, elevation: 15, kind: "dune" },
  bbox: [4.70, 52.95, 6.30, 53.50],
  axis: [[4.75, 53.05], [6.20, 53.48]],
  viewScale: 1.4,
  label: { lon: 5.50, lat: 53.30, rotation: 25 },
  source: "西弗里西亚群岛：荷兰北部瓦登海外侧一列由沙丘构成的堰洲岛链，自西向东主要包括特塞尔、弗利兰、特斯海灵、阿默兰、斯希蒙尼克岛等，是瓦登海生态系统的天然屏障；特塞尔岛是其中面积最大、人口最多的一座（荷兰国家林务局 Staatsbosbeheer）",
};

const TERP_MOUNDS: TerrainEntry = {
  id: "terp-mounds",
  nameZh: "台丘聚落",
  nameEn: "Terp Mounds",
  category: "settlement",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "霍赫拜特姆台丘", lon: 5.7000, lat: 53.3200, elevation: 8.8, kind: "escarpment" },
  bbox: [5.60, 53.25, 5.85, 53.40],
  label: { lon: 5.70, lat: 53.32, rotation: 0 },
  source: "台丘聚落：荷兰北部弗里斯兰、格罗宁根沿海一带自公元前500年左右起，居民在低洼海岸地带人工堆筑的居住土丘（terp/wierde），用以躲避风暴潮，霍赫拜特姆台丘现存高度约8.8米、是荷兰已知最高的台丘之一；这类聚落形态在12-13世纪筑堤技术成熟后逐渐停止新建（弗里斯兰省文化遗产部门）",
};

const GIETHOORN: TerrainEntry = {
  id: "giethoorn",
  nameZh: "羊角村",
  nameEn: "Giethoorn",
  category: "settlement",
  regionId: "europe",
  country: "netherlands",
  landmark: { name: "羊角村水道核心区", lon: 6.0800, lat: 52.7400, elevation: -1, kind: "escarpment" },
  bbox: [6.04, 52.71, 6.13, 52.77],
  label: { lon: 6.08, lat: 52.74, rotation: 0 },
  source: "羊角村：荷兰上艾瑟尔省一座建于13世纪泥炭开采区上的村落，因早期道路稀少、居民长期依赖运河和小船出行，村中心至今保留大片无公路通行的水道区，是荷兰泥炭开采聚落转型为水上村落的代表样本（荷兰国家旅游局 NBTC）",
};

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
  source: "达赫斯坦山：地跨上奥地利州与施泰尔马克州交界（部分延伸至萨尔茨堡州）的石灰岩山地，主峰上达赫斯坦峰海拔2995米，是这两个州的最高点，因地跨三州边界又被称为“三州山”；山体喀斯特地貌发育，已探明240余个洞穴，长毛象洞、巨人冰洞等对外开放；哈尔施塔特冰川是阿尔卑斯山脉最东、最北端的冰川之一（大英百科 / 维基）",
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
  source: "列支敦士登峡谷：萨尔茨堡以南约50公里、圣约翰-蓬高附近的一条石灰岩峡谷，全长约4公里，崖壁最高处约300米；1875年列支敦士登的约翰二世出资修建了栈道，峡谷因此得名，末端有一处瀑布；每年约有10万游客到访（维基）",
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
  source: "穆尔河：发源于拉德施塔特陶恩山，全长约453公里，其中约298公里流经施泰尔马克州，最终经斯洛文尼亚、克罗地亚汇入德拉瓦河；上游河段保留有奥地利面积第二大的河漫滩森林，是多瑙鲑等珍稀鱼类的天然产卵地，被认为是奥地利生态价值最高的河流之一；格拉茨市即坐落在穆尔河畔（欧洲环境署 / 大英百科）",
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

// ============================================================
// 欧洲 / 爱尔兰
// ============================================================

const MACGILLYCUDDYS_REEKS: TerrainEntry = {
  id: "macgillycuddys-reeks",
  nameZh: "麦吉利卡迪山脉",
  nameEn: "MacGillycuddy's Reeks",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "卡朗图希尔峰", lon: -9.7419, lat: 51.9993, elevation: 1038, kind: "peak" },
  bbox: [-9.85, 51.94, -9.55, 52.06],
  axis: [[-9.83, 52.00], [-9.58, 51.97]],
  viewScale: 1.2,
  label: { lon: -9.72, lat: 52.01, rotation: 0 },
  source: "麦吉利卡迪山脉：爱尔兰唯一海拔超过1000米的山脉，由古红砂岩构成，约3.6亿年前华力西造山运动抬升，经末次冰期强烈冰蚀形成尖峰、冰斗与刃脊；卡朗图希尔峰1038.6米为爱尔兰最高峰（维基 / OSI）",
};

const WICKLOW_MOUNTAINS: TerrainEntry = {
  id: "wicklow-mountains",
  nameZh: "威克洛山脉",
  nameEn: "Wicklow Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "卢格纳奎拉峰", lon: -6.4644, lat: 52.9686, elevation: 925, kind: "peak" },
  bbox: [-6.55, 52.85, -6.20, 53.15],
  axis: [[-6.45, 52.88], [-6.35, 53.12]],
  viewScale: 1.2,
  label: { lon: -6.40, lat: 53.00, rotation: -50 },
  source: "威克洛山脉：爱尔兰东部最大的连绵山地，主体为花岗岩岩基，是不列颠群岛最大的花岗岩出露区之一；卢格纳奎拉峰925米为山脉最高点，山地距都柏林市中心仅约30公里（维基 / OSI）",
};

const CONNEMARA_TWELVE_BENS: TerrainEntry = {
  id: "connemara-twelve-bens",
  nameZh: "康尼马拉·十二本斯山",
  nameEn: "Connemara / Twelve Bens",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "本鲍恩峰", lon: -9.8461, lat: 53.5236, elevation: 729, kind: "peak" },
  bbox: [-9.95, 53.44, -9.55, 53.62],
  axis: [[-9.92, 53.48], [-9.65, 53.58]],
  viewScale: 1.3,
  label: { lon: -9.78, lat: 53.53, rotation: -30 },
  source: "康尼马拉·十二本斯山：爱尔兰西部戈尔韦郡的石英岩山峰群，由约12座尖峰组成，山间散布泥炭沼泽与湖泊，是康尼马拉国家公园的核心地貌；本鲍恩峰729米为最高点（爱尔兰国家公园与野生动物管理局）",
};

const COMERAGH_MOUNTAINS: TerrainEntry = {
  id: "comeragh-mountains",
  nameZh: "科默拉山脉",
  nameEn: "Comeragh Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "福斯库姆峰", lon: -7.5833, lat: 52.2167, elevation: 792, kind: "peak" },
  bbox: [-7.68, 52.12, -7.42, 52.32],
  viewScale: 1.2,
  label: { lon: -7.56, lat: 52.22, rotation: 0 },
  source: "科默拉山脉：爱尔兰东南部沃特福德郡的古红砂岩高地，末次冰期冰川作用在山体边缘刻出多个冰斗湖（如科姆申湖），山顶为平缓的高原状台地（维基 / OSI）",
};

const GALTEE_MOUNTAINS: TerrainEntry = {
  id: "galtee-mountains",
  nameZh: "加尔提山脉",
  nameEn: "Galtee Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "加尔提莫尔峰", lon: -8.2306, lat: 52.3608, elevation: 919, kind: "peak" },
  bbox: [-8.38, 52.29, -8.05, 52.42],
  axis: [[-8.36, 52.35], [-8.10, 52.38]],
  label: { lon: -8.22, lat: 52.36, rotation: 0 },
  source: "加尔提山脉：爱尔兰南部内陆最高的山脉，古红砂岩构成，加尔提莫尔峰919米为爱尔兰内陆地区最高峰，山体北坡有多个冰蚀湖（维基 / OSI）",
};

const NEPHIN_BEG_RANGE: TerrainEntry = {
  id: "nephin-beg-range",
  nameZh: "内芬贝格山脉",
  nameEn: "Nephin Beg Range",
  category: "mountain_system",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "斯利夫卡尔峰", lon: -9.6667, lat: 54.0167, elevation: 721, kind: "peak" },
  bbox: [-9.80, 53.92, -9.45, 54.15],
  viewScale: 1.3,
  label: { lon: -9.62, lat: 54.03, rotation: 0 },
  source: "内芬贝格山脉：爱尔兰西北部梅奥郡一片人迹罕至的石英岩荒野山地，山间广布高地泥炭沼泽，是爱尔兰面积最大的连片荒野区之一（爱尔兰国家公园与野生动物管理局）",
};

const SLIEVE_BLOOM_MOUNTAINS: TerrainEntry = {
  id: "slieve-bloom-mountains",
  nameZh: "斯利夫布卢姆山",
  nameEn: "Slieve Bloom Mountains",
  category: "hills",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "阿德林峰", lon: -7.5589, lat: 53.0567, elevation: 527, kind: "peak" },
  bbox: [-7.72, 52.96, -7.35, 53.15],
  label: { lon: -7.55, lat: 53.05, rotation: 0 },
  source: "斯利夫布卢姆山：坐落于爱尔兰中部低地平原正中央的孤立老地块，砂岩与页岩构成，阿德林峰527米，是中部平原上少有的地势起伏地区（维基 / OSI）",
};

const OX_MOUNTAINS: TerrainEntry = {
  id: "ox-mountains",
  nameZh: "牛山",
  nameEn: "Ox Mountains",
  category: "hills",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "诺克隆吉峰", lon: -8.85, lat: 54.09, elevation: 544, kind: "peak" },
  bbox: [-9.05, 53.98, -8.55, 54.20],
  axis: [[-9.00, 54.00], [-8.60, 54.15]],
  label: { lon: -8.80, lat: 54.08, rotation: -20 },
  source: "牛山：爱尔兰西北部斯莱戈郡与梅奥郡交界一条狭长的前寒武纪变质岩山脉，山势低缓浑圆，诺克隆吉峰544米为最高点（维基 / OSI）",
};

const THE_BURREN: TerrainEntry = {
  id: "the-burren",
  nameZh: "伯伦高原",
  nameEn: "The Burren",
  category: "plateau",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "穆拉山", lon: -9.1128, lat: 52.9944, elevation: 191, kind: "peak" },
  bbox: [-9.30, 52.90, -8.95, 53.15],
  viewScale: 1.3,
  label: { lon: -9.12, lat: 53.03, rotation: 0 },
  source: "伯伦高原：爱尔兰西部克莱尔郡一片约250平方公里的石炭纪石灰岩喀斯特台地，地表大面积裸露石灰岩板，几无表土，地下发育溶洞与地下河，是欧洲最典型的喀斯特地貌之一（爱尔兰国家公园与野生动物管理局）",
};

const CENTRAL_LOWLANDS_BOG_OF_ALLEN: TerrainEntry = {
  id: "central-lowlands-bog-of-allen",
  nameZh: "爱尔兰中部低地·艾伦沼泽",
  nameEn: "Central Lowlands / Bog of Allen",
  category: "plain",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "艾伦沼泽自然中心", lon: -6.9083, lat: 53.2830, elevation: 80, kind: "city" },
  bbox: [-7.70, 52.90, -6.60, 53.55],
  viewScale: 1.6,
  label: { lon: -7.15, lat: 53.20, rotation: 0 },
  source: "爱尔兰中部低地：由石炭纪石灰岩构成的低缓向斜盆地，末次冰期后表层沉积物排水不畅，形成大面积隆起泥炭沼泽，艾伦沼泽是其中面积最大、最具代表性的一片，历史上曾是爱尔兰泥炭燃料的主要产地（地质调查局爱尔兰 / Bord na Móna）",
};

const GLENDALOUGH: TerrainEntry = {
  id: "glendalough",
  nameZh: "格兰达洛冰蚀谷",
  nameEn: "Glendalough",
  category: "valley",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "格兰达洛修道院遗址", lon: -6.3305, lat: 53.0087, elevation: 130, kind: "city" },
  bbox: [-6.40, 52.97, -6.27, 53.05],
  axis: [[-6.38, 53.01], [-6.30, 53.00]],
  label: { lon: -6.34, lat: 53.02, rotation: 0 },
  source: "格兰达洛：意为“两湖之谷”，威克洛山脉中一条典型的冰川槽谷，谷底串有上、下两座冰蚀湖，谷口6世纪建有基维尼修道院遗址，是爱尔兰重要的早期基督教遗迹（维基 / OPW）",
};

const GLENVEAGH: TerrainEntry = {
  id: "glenveagh",
  nameZh: "格伦维谷",
  nameEn: "Glenveagh",
  category: "valley",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "格伦维城堡", lon: -8.0119, lat: 55.0361, elevation: 50, kind: "city" },
  bbox: [-8.15, 54.95, -7.85, 55.10],
  axis: [[-8.10, 54.97], [-7.90, 55.08]],
  label: { lon: -8.00, lat: 55.02, rotation: -30 },
  source: "格伦维谷：爱尔兰西北部多尼戈尔郡一条深切的冰川槽谷，谷中的格伦维湖两岸悬崖陡峭，是爱尔兰面积最大的国家公园格伦维国家公园的核心地貌（爱尔兰国家公园与野生动物管理局）",
};

const GAP_OF_DUNLOE: TerrainEntry = {
  id: "gap-of-dunloe",
  nameZh: "邓洛峡口",
  nameEn: "Gap of Dunloe",
  category: "gorge",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "邓洛峡口", lon: -9.6167, lat: 52.0167, elevation: 150, kind: "pass" },
  bbox: [-9.68, 51.97, -9.55, 52.07],
  axis: [[-9.65, 51.99], [-9.60, 52.06]],
  label: { lon: -9.62, lat: 52.02, rotation: -60 },
  source: "邓洛峡口：麦吉利卡迪山脉与紫山之间一条由冰川侵蚀形成的狭窄山口，谷底串联五座小型冰蚀湖，是爱尔兰最著名的山地徒步与马车观光路线之一（维基 / 凯里国家公园）",
};

const LOUGH_CORRIB: TerrainEntry = {
  id: "lough-corrib",
  nameZh: "科里布湖",
  nameEn: "Lough Corrib",
  category: "lake",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "科里布湖", lon: -9.30, lat: 53.48, elevation: 8, kind: "lake" },
  bbox: [-9.42, 53.30, -9.00, 53.65],
  axis: [[-9.10, 53.32], [-9.35, 53.62]],
  label: { lon: -9.18, lat: 53.50, rotation: -70 },
  source: "科里布湖：爱尔兰共和国境内面积最大的湖泊，约176平方公里，湖区石灰岩基底发育喀斯特地貌，湖水经科里布河注入戈尔韦湾（爱尔兰环保署 / 维基）",
};

const KILLARNEY_LAKES: TerrainEntry = {
  id: "killarney-lakes",
  nameZh: "基拉尼湖群",
  nameEn: "Lakes of Killarney",
  category: "lake",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "马克罗斯湖", lon: -9.5333, lat: 52.0167, elevation: 20, kind: "lake" },
  bbox: [-9.62, 51.95, -9.45, 52.10],
  label: { lon: -9.53, lat: 52.03, rotation: 0 },
  source: "基拉尼湖群：由利恩湖、马克罗斯湖与上湖三座冰蚀湖组成，紧邻麦吉利卡迪山脉东麓，马克罗斯湖水深达75米，是爱尔兰最深的湖泊，湖区为基拉尼国家公园核心（维基 / 国家公园与野生动物管理局）",
};

const LOUGH_DERG_SHANNON: TerrainEntry = {
  id: "lough-derg-shannon",
  nameZh: "德格湖（香农河）",
  nameEn: "Lough Derg (River Shannon)",
  category: "lake",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "德格湖", lon: -8.33, lat: 52.93, elevation: 33, kind: "lake" },
  bbox: [-8.55, 52.75, -8.15, 53.08],
  axis: [[-8.45, 52.80], [-8.25, 53.02]],
  label: { lon: -8.30, lat: 52.90, rotation: -70 },
  source: "德格湖：香农河沿线三座主要湖泊中面积最大的一座，约118平方公里，为区别多尼戈尔郡同名朝圣湖，此处特指香农河水系的德格湖（维基 / 香农发展局）",
};

const LOUGH_MASK: TerrainEntry = {
  id: "lough-mask",
  nameZh: "马斯克湖",
  nameEn: "Lough Mask",
  category: "lake",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "马斯克湖", lon: -9.30, lat: 53.63, elevation: 19, kind: "lake" },
  bbox: [-9.45, 53.50, -9.15, 53.75],
  label: { lon: -9.28, lat: 53.65, rotation: -60 },
  source: "马斯克湖：爱尔兰西部石灰岩湖泊，与南侧的科里布湖之间存在地下暗河连通，湖区周边喀斯特溶洞发育（爱尔兰环保署 / 维基）",
};

const RIVER_SHANNON: TerrainEntry = {
  id: "river-shannon",
  nameZh: "香农河",
  nameEn: "River Shannon",
  category: "river",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "阿斯隆", lon: -7.9407, lat: 53.4239, elevation: 40, kind: "city" },
  bbox: [-9.70, 52.50, -7.85, 54.28],
  axis: [[-7.92, 54.27], [-9.65, 52.55]],
  viewScale: 1.4,
  label: { lon: -8.60, lat: 53.30, rotation: -55 },
  source: "香农河：爱尔兰与不列颠群岛最长的河流，全长约360公里，发源于北部香农锅泉，向南流经德格湖、里河等多座湖泊后在利默里克附近汇入大西洋河口湾（爱尔兰环保署 / OSI）",
};

const RIVER_LIFFEY: TerrainEntry = {
  id: "river-liffey",
  nameZh: "利菲河",
  nameEn: "River Liffey",
  category: "river",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "都柏林", lon: -6.2603, lat: 53.3498, elevation: 5, kind: "city" },
  bbox: [-6.62, 53.10, -6.15, 53.40],
  axis: [[-6.55, 53.15], [-6.22, 53.35]],
  label: { lon: -6.40, lat: 53.25, rotation: -30 },
  source: "利菲河：发源于威克洛山脉，全长约125公里，河道呈马蹄形绕经威克洛山地后向东流入都柏林湾，是都柏林城市发展的地理轴线（维基 / OSI）",
};

const RIVER_BLACKWATER_MUNSTER: TerrainEntry = {
  id: "river-blackwater-munster",
  nameZh: "芒斯特黑水河",
  nameEn: "Munster Blackwater",
  category: "river",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "约赫尔", lon: -7.85, lat: 51.95, elevation: 5, kind: "city" },
  bbox: [-9.25, 51.90, -7.80, 52.20],
  axis: [[-9.20, 52.15], [-7.85, 51.95]],
  label: { lon: -8.50, lat: 52.05, rotation: -15 },
  source: "芒斯特黑水河：发源于爱尔兰西南部凯里郡，先向东流经芒斯特平原、又在利斯莫尔附近急转向南，最终在约赫尔汇入大西洋，因流向奇特被称为“爱尔兰的莱茵河”（维基）",
};

const ARAN_ISLANDS: TerrainEntry = {
  id: "aran-islands",
  nameZh: "阿伦群岛",
  nameEn: "Aran Islands",
  category: "island",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "邓恩古堡", lon: -9.7692, lat: 53.1231, elevation: 87, kind: "escarpment" },
  bbox: [-9.90, 53.05, -9.42, 53.28],
  label: { lon: -9.70, lat: 53.13, rotation: -20 },
  source: "阿伦群岛：戈尔韦湾入海口三座石灰岩岛屿，与伯伦高原同属一片喀斯特石灰岩台地，最大岛因希莫尔岛上的邓恩古堡是爱尔兰铁器时代最重要的石造要塞遗址之一（维基 / 国家历史遗迹局）",
};

const SKELLIG_MICHAEL: TerrainEntry = {
  id: "skellig-michael",
  nameZh: "斯凯利格·迈克尔岛",
  nameEn: "Skellig Michael",
  category: "island",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "斯凯利格·迈克尔修道院", lon: -10.5397, lat: 51.7714, elevation: 218, kind: "escarpment" },
  bbox: [-10.58, 51.75, -10.50, 51.80],
  label: { lon: -10.54, lat: 51.78, rotation: 0 },
  source: "斯凯利格·迈克尔岛：爱尔兰西南海岸外约12公里处一座陡峭的锥形寒武纪砂岩海岛，岛顶600年前后建有早期基督教僧侣隐修院，1996年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const ACHILL_ISLAND: TerrainEntry = {
  id: "achill-island",
  nameZh: "阿基尔岛",
  nameEn: "Achill Island",
  category: "island",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "斯利夫莫尔山", lon: -10.0167, lat: 53.9500, elevation: 671, kind: "peak" },
  bbox: [-10.30, 53.90, -9.90, 54.05],
  label: { lon: -10.10, lat: 53.97, rotation: 0 },
  source: "阿基尔岛：爱尔兰面积最大的岛屿，经桥梁与本土相连，岛上基姆湾旁的悬崖高逾600米，是欧洲最高的海崖之一，斯利夫莫尔山671米为岛屿最高点（维基 / 梅奥郡议会）",
};

const CLIFFS_OF_MOHER: TerrainEntry = {
  id: "cliffs-of-moher",
  nameZh: "莫赫悬崖",
  nameEn: "Cliffs of Moher",
  category: "coast",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "奥布莱恩塔", lon: -9.4309, lat: 52.9715, elevation: 214, kind: "escarpment" },
  bbox: [-9.45, 52.94, -9.38, 53.00],
  axis: [[-9.43, 52.94], [-9.42, 53.00]],
  label: { lon: -9.41, lat: 52.97, rotation: -85 },
  source: "莫赫悬崖：爱尔兰西部克莱尔郡一段长约14公里、最高处约214米的大西洋海崖，由石炭纪砂岩与页岩层构成，是爱尔兰访问量最大的自然景点之一（Clare County Council）",
};

const SLIEVE_LEAGUE: TerrainEntry = {
  id: "slieve-league",
  nameZh: "斯利夫利格悬崖",
  nameEn: "Slieve League",
  category: "coast",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "斯利夫利格观景台", lon: -8.6833, lat: 54.6167, elevation: 601, kind: "escarpment" },
  bbox: [-8.75, 54.58, -8.58, 54.66],
  axis: [[-8.72, 54.60], [-8.62, 54.64]],
  label: { lon: -8.66, lat: 54.62, rotation: -60 },
  source: "斯利夫利格悬崖：爱尔兰西北部多尼戈尔郡的大西洋海崖，最高处约601米，是欧洲最高的海崖之一，高度约为莫赫悬崖的三倍（维基 / Fáilte Ireland）",
};

const DINGLE_PENINSULA: TerrainEntry = {
  id: "dingle-peninsula",
  nameZh: "丁格尔半岛",
  nameEn: "Dingle Peninsula",
  category: "coast",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "斯利亚角", lon: -10.4442, lat: 52.0989, elevation: 100, kind: "escarpment" },
  bbox: [-10.55, 52.05, -9.95, 52.25],
  viewScale: 1.2,
  label: { lon: -10.20, lat: 52.15, rotation: -20 },
  source: "丁格尔半岛：爱尔兰最西端的半岛，脊线为布兰登山（952米），半岛沿岸分布陡峭海崖与史前石造遗迹，被《国家地理旅行者》评为“地球上最美的地方”之一（Fáilte Ireland）",
};

const RING_OF_KERRY_IVERAGH: TerrainEntry = {
  id: "ring-of-kerry-iveragh",
  nameZh: "凯里之环·艾弗拉半岛",
  nameEn: "Ring of Kerry / Iveragh Peninsula",
  category: "coast",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "沃特维尔", lon: -10.1739, lat: 51.8258, elevation: 5, kind: "city" },
  bbox: [-10.50, 51.73, -9.85, 52.07],
  viewScale: 1.3,
  label: { lon: -10.15, lat: 51.90, rotation: 0 },
  source: "凯里之环：环绕艾弗拉半岛的沿海景观道路，串联大西洋海岸、沙滩与麦吉利卡迪山脉西南麓，是爱尔兰最经典的自驾观光路线之一（Fáilte Ireland）",
};

const KILLARY_HARBOUR: TerrainEntry = {
  id: "killary-harbour",
  nameZh: "基拉里峡湾",
  nameEn: "Killary Harbour",
  category: "coast",
  regionId: "europe",
  country: "ireland",
  landmark: { name: "基拉里峡湾", lon: -9.85, lat: 53.6167, elevation: 0, kind: "gorge" },
  bbox: [-9.97, 53.58, -9.65, 53.68],
  axis: [[-9.95, 53.62], [-9.68, 53.61]],
  label: { lon: -9.80, lat: 53.63, rotation: 5 },
  source: "基拉里峡湾：爱尔兰唯一的真正峡湾，末次冰期冰川刻蚀出的深水河谷被海水淹没形成，长约16公里，是康尼马拉与梅奥郡的界湾（维基 / 爱尔兰国家公园与野生动物管理局）",
};

// ============================================================
// 欧洲 / 丹麦
// ============================================================

const CENTRAL_JUTLAND_HIGHLANDS: TerrainEntry = {
  id: "central-jutland-highlands",
  nameZh: "日德兰中部高地",
  nameEn: "Central Jutland Highlands",
  category: "hills",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "默勒霍伊", lon: 9.8264, lat: 56.0064, elevation: 171, kind: "peak" },
  bbox: [9.68, 55.94, 9.98, 56.08],
  label: { lon: 9.83, lat: 56.02, rotation: 0 },
  source: "日德兰中部高地：末次冰期终碛垄形成的丘陵地带，默勒霍伊海拔170.86米，2005年新测量确认为丹麦本土最高点，仅比相邻的埃耶尔巴内霍伊高0.5米左右（丹麦地质调查局 GEUS）",
};

const MOLS_BJERGE: TerrainEntry = {
  id: "mols-bjerge",
  nameZh: "莫尔斯山地",
  nameEn: "Mols Bjerge",
  category: "hills",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "阿格里巴内霍伊", lon: 10.5833, lat: 56.2667, elevation: 137, kind: "peak" },
  bbox: [10.45, 56.20, 10.72, 56.35],
  label: { lon: 10.58, lat: 56.27, rotation: 0 },
  source: "莫尔斯山地：位于于特兰半岛东部于兰半岛（迪厄斯兰）的末次冰期终碛丘陵地带，地形起伏是丹麦本土少有的明显丘陵景观，1960年代起划为自然保护区（丹麦自然署 Naturstyrelsen）",
};

const REBILD_BAKKER: TerrainEntry = {
  id: "rebild-bakker",
  nameZh: "雷比尔丘陵",
  nameEn: "Rebild Bakker",
  category: "hills",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "雷比尔丘陵观景点", lon: 9.7461, lat: 56.8339, elevation: 90, kind: "escarpment" },
  bbox: [9.62, 56.78, 9.88, 56.90],
  label: { lon: 9.75, lat: 56.85, rotation: 0 },
  source: "雷比尔丘陵：日德兰半岛北部一片覆盖石楠荒原的冰碛丘陵，毗邻罗尔森林（丹麦面积最大的森林），1912年由旅美丹麦人捐赠建成丹麦第一座国家公园式保护区（丹麦自然署）",
};

const BORNHOLM_ALMINDINGEN: TerrainEntry = {
  id: "bornholm-almindingen",
  nameZh: "博恩霍尔姆·阿尔明丁根高地",
  nameEn: "Bornholm / Almindingen",
  category: "hills",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "骑士峰", lon: 14.8500, lat: 55.1167, elevation: 162, kind: "peak" },
  bbox: [14.75, 55.05, 14.98, 55.20],
  label: { lon: 14.85, lat: 55.13, rotation: 0 },
  source: "博恩霍尔姆岛中部的阿尔明丁根森林高地：全岛约三分之二基岩为花岗岩，是丹麦本土（月石灰岩地区外）唯一可见花岗岩出露的地方，骑士峰海拔162米为全岛最高点（GEUS / 丹麦自然署）",
};

const MONS_KLINT: TerrainEntry = {
  id: "mons-klint",
  nameZh: "默恩岛白垩崖",
  nameEn: "Møns Klint",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "默恩崖观景台", lon: 12.5372, lat: 54.9581, elevation: 128, kind: "escarpment" },
  bbox: [12.48, 54.94, 12.62, 54.99],
  axis: [[12.50, 54.94], [12.58, 54.98]],
  label: { lon: 12.55, lat: 54.97, rotation: -30 },
  source: "默恩岛白垩崖：约7000万年前晚白垩世沉积的石灰质白垩层构成，末次冰期冰川挤压形成褶皱构造，崖顶最高处海拔约128米，是丹麦最高的海岸崖壁（GEUS）",
};

const STEVNS_KLINT: TerrainEntry = {
  id: "stevns-klint",
  nameZh: "斯特文斯崖",
  nameEn: "Stevns Klint",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "赫耶鲁普老教堂", lon: 12.4500, lat: 55.2833, elevation: 41, kind: "escarpment" },
  bbox: [12.40, 55.24, 12.52, 55.33],
  axis: [[12.42, 55.25], [12.48, 55.32]],
  label: { lon: 12.45, lat: 55.29, rotation: -50 },
  source: "斯特文斯崖：崖壁中一层数厘米厚的暗色黏土层（当地称“鱼粘土”）记录了6600万年前白垩纪—古近纪灭绝事件的地质证据，2014年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const SKAGEN_ODDE: TerrainEntry = {
  id: "skagen-odde",
  nameZh: "斯卡恩岬角",
  nameEn: "Skagen Odde",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "格伦角", lon: 10.6333, lat: 57.7500, elevation: 3, kind: "escarpment" },
  bbox: [10.45, 57.55, 10.70, 57.76],
  axis: [[10.50, 57.60], [10.63, 57.75]],
  label: { lon: 10.58, lat: 57.68, rotation: -70 },
  source: "斯卡恩岬角：日德兰半岛最北端一条持续向海延伸的沙嘴，约一万年来由沿岸流搬运沙粒堆积而成，尖端格伦角是北海与卡特加特海峡水流交汇处（GEUS）",
};

const RUBJERG_KNUDE: TerrainEntry = {
  id: "rubjerg-knude",
  nameZh: "鲁比耶克努德沙丘",
  nameEn: "Rubjerg Knude",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "鲁比耶克努德灯塔", lon: 9.7692, lat: 57.4494, elevation: 60, kind: "dune" },
  bbox: [9.70, 57.40, 9.85, 57.50],
  label: { lon: 9.77, lat: 57.45, rotation: 0 },
  source: "鲁比耶克努德：日德兰半岛北海沿岸一处活动沙丘，19世纪末以来持续向内陆迁移，1900年建成的灯塔因沙丘掩埋于2019年被整体迁移，是丹麦风蚀沙丘地貌的典型样本（丹麦自然署）",
};

const LIMFJORD: TerrainEntry = {
  id: "limfjord",
  nameZh: "利姆海峡",
  nameEn: "Limfjord",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "勒斯特厄", lon: 9.2564, lat: 56.9711, elevation: 2, kind: "city" },
  bbox: [8.10, 56.60, 10.60, 57.20],
  axis: [[8.20, 56.70], [10.50, 57.05]],
  viewScale: 1.6,
  label: { lon: 9.30, lat: 56.85, rotation: 0 },
  source: "利姆海峡：横贯日德兰半岛北部的狭长水道，将文茨赛尔—提半岛与半岛主体分隔，1825年一次风暴潮冲开西端与北海的永久通道，此前该水道曾多次因泥沙淤积而与海洋断开（GEUS）",
};

const ISEFJORD_ROSKILDE_FJORD: TerrainEntry = {
  id: "isefjord-roskilde-fjord",
  nameZh: "伊瑟峡湾与罗斯基勒峡湾",
  nameEn: "Isefjord & Roskilde Fjord",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "罗斯基勒", lon: 12.0803, lat: 55.6415, elevation: 5, kind: "city" },
  bbox: [11.65, 55.55, 12.15, 55.95],
  axis: [[11.70, 55.90], [12.08, 55.65]],
  viewScale: 1.3,
  label: { lon: 11.90, lat: 55.75, rotation: -40 },
  source: "伊瑟峡湾与罗斯基勒峡湾：西兰岛北部一条深切入内陆约40公里的峡湾水系，罗斯基勒峡湾为其东侧分支，末次冰期冰川侵蚀塑造了峡湾轮廓（GEUS）",
};

const WADDEN_SEA_DK: TerrainEntry = {
  id: "wadden-sea-dk",
  nameZh: "瓦登海（丹麦段）",
  nameEn: "Wadden Sea (Danish section)",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "勒姆岛", lon: 8.5500, lat: 55.1667, elevation: 2, kind: "island" },
  bbox: [8.30, 54.90, 8.80, 55.45],
  viewScale: 1.2,
  label: { lon: 8.55, lat: 55.15, rotation: 0 },
  source: "瓦登海丹麦段：北海沿岸潮间带滩涂与堰洲岛系统的最北端部分，与德国、荷兰段共同构成世界最大的连续潮间带生态系统，2014年丹麦段并入联合国教科文组织世界遗产瓦登海名录（UNESCO）",
};

const BORNHOLM_GRANITE_COAST: TerrainEntry = {
  id: "bornholm-granite-coast",
  nameZh: "博恩霍尔姆花岗岩海岸",
  nameEn: "Bornholm Granite Coast",
  category: "coast",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "哈默伦岬角", lon: 14.7833, lat: 55.2667, elevation: 30, kind: "escarpment" },
  bbox: [14.70, 55.20, 14.92, 55.32],
  axis: [[14.72, 55.30], [14.86, 55.22]],
  label: { lon: 14.79, lat: 55.27, rotation: -60 },
  source: "博恩霍尔姆花岗岩海岸：岛屿北端哈默伦岬角由前寒武纪花岗岩构成陡峭崖壁，是丹麦全境唯一大面积裸露花岗岩基岩的海岸，与南侧圣地崖等花岗岩海岸共同构成岛屿独特的地质景观（GEUS）",
};

const SILKEBORG_LAKE_DISTRICT: TerrainEntry = {
  id: "silkeborg-lake-district",
  nameZh: "锡尔克堡湖区",
  nameEn: "Silkeborg Lake District",
  category: "lake",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "尤尔湖", lon: 9.6167, lat: 56.1500, elevation: 24, kind: "lake" },
  bbox: [9.45, 56.05, 9.78, 56.25],
  axis: [[9.48, 56.08], [9.75, 56.20]],
  label: { lon: 9.60, lat: 56.15, rotation: -30 },
  source: "锡尔克堡湖区：丹麦最长河流古德诺河中游沿岸串联的一系列冰蚀湖泊，是丹麦本土唯一的湖区式地貌集群，与相邻的日德兰中部丘陵共同构成丹麦地势起伏最明显的区域（GEUS）",
};

const ARRESOE: TerrainEntry = {
  id: "arresoe",
  nameZh: "阿勒瑟湖",
  nameEn: "Arresø",
  category: "lake",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "阿勒瑟湖", lon: 12.0667, lat: 56.0167, elevation: 3, kind: "lake" },
  bbox: [11.95, 55.98, 12.20, 56.08],
  label: { lon: 12.07, lat: 56.02, rotation: 0 },
  source: "阿勒瑟湖：丹麦面积最大的湖泊，约40平方公里，末次冰期冰川侵蚀形成的浅水湖盆，湖水经河道注入伊瑟峡湾（GEUS）",
};

const FURESOE: TerrainEntry = {
  id: "furesoe",
  nameZh: "菲于瑟湖",
  nameEn: "Furesø",
  category: "lake",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "菲于瑟湖", lon: 12.3667, lat: 55.8000, elevation: 19, kind: "lake" },
  bbox: [12.30, 55.75, 12.42, 55.85],
  label: { lon: 12.37, lat: 55.80, rotation: 0 },
  source: "菲于瑟湖：丹麦水深最深的湖泊，最大水深约37.8米，位于哥本哈根北郊，湖盆由末次冰期冰川挖蚀形成的深槽积水而成（GEUS）",
};

const GUDENAA_RIVER: TerrainEntry = {
  id: "gudenaa-river",
  nameZh: "古德诺河",
  nameEn: "Gudenå",
  category: "river",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "兰讷斯", lon: 10.0369, lat: 56.4607, elevation: 5, kind: "city" },
  bbox: [9.30, 55.90, 10.20, 56.60],
  axis: [[9.35, 55.93], [10.15, 56.55]],
  viewScale: 1.3,
  label: { lon: 9.75, lat: 56.25, rotation: -50 },
  source: "古德诺河：丹麦最长的河流，全长约158公里，发源于日德兰中部高地附近，中游流经锡尔克堡湖区，最终在兰讷斯附近汇入兰讷斯峡湾（GEUS）",
};

const SYDFYNSKE_OEHAV_AEROE: TerrainEntry = {
  id: "sydfynske-oehav-aeroe",
  nameZh: "南菲英群岛·埃勒岛",
  nameEn: "South Funen Archipelago / Ærø",
  category: "island",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "埃勒斯考宾", lon: 10.4083, lat: 54.8908, elevation: 5, kind: "city" },
  bbox: [10.10, 54.75, 10.75, 55.05],
  label: { lon: 10.40, lat: 54.90, rotation: 0 },
  source: "南菲英群岛：菲英岛以南由数十座小岛组成的群岛，末次冰期终碛丘陵部分被海水淹没后形成岛链地貌；埃勒岛的埃勒斯考宾保留有丹麦最完整的18世纪木骨石砌小镇街区（丹麦自然署）",
};

const LAESOE: TerrainEntry = {
  id: "laesoe",
  nameZh: "累索岛",
  nameEn: "Læsø",
  category: "island",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "拜鲁姆", lon: 11.0167, lat: 57.2833, elevation: 3, kind: "city" },
  bbox: [10.85, 57.20, 11.20, 57.35],
  label: { lon: 11.02, lat: 57.28, rotation: 0 },
  source: "累索岛：卡特加特海峡中丹麦面积最大的岛屿，岛屿地表以低平沙质冰碛台地为主，历史上因近海盐泉发达制盐业，岛上传统海藻苫顶民居是丹麦独有的建筑形式（丹麦自然署）",
};

const JUTLAND_HEATH: TerrainEntry = {
  id: "jutland-heath",
  nameZh: "日德兰石楠荒原",
  nameEn: "Jutland Heath",
  category: "grassland",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "兰伯尔荒原", lon: 9.1000, lat: 55.6333, elevation: 45, kind: "grassland" },
  bbox: [8.95, 55.55, 9.30, 55.75],
  viewScale: 1.2,
  label: { lon: 9.12, lat: 55.65, rotation: 0 },
  source: "日德兰石楠荒原：19世纪以前曾覆盖日德兰半岛西部大片贫瘠沙质冰水沉积平原，兰伯尔荒原是丹麦现存面积最大的连片石楠荒原残余，19世纪后大部分荒原经排水与植树改造为农林用地（丹麦自然署）",
};

const ANHOLT_OERKENEN: TerrainEntry = {
  id: "anholt-oerkenen",
  nameZh: "安霍尔特岛·“沙漠”",
  nameEn: "Anholt / \"Ørkenen\" (the Desert)",
  category: "grassland",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "沙漠（Ørkenen）", lon: 11.5667, lat: 56.7167, elevation: 8, kind: "dune" },
  bbox: [11.50, 56.68, 11.65, 56.75],
  label: { lon: 11.57, lat: 56.71, rotation: 0 },
  source: "安霍尔特岛东部约四分之三的面积覆盖着当地称为“沙漠”（Ørkenen）的地衣石楠荒原，实为16世纪岛上森林被砍伐后风力搬运沙丘上发育的地衣群落，并非气候意义上的真正沙漠，是北欧最大的地衣荒原（丹麦自然署）",
};

const STORE_VILDMOSE: TerrainEntry = {
  id: "store-vildmose",
  nameZh: "大维尔德沼原",
  nameEn: "Store Vildmose",
  category: "basin",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "大维尔德沼原自然保护区", lon: 9.8833, lat: 57.1667, elevation: 5, kind: "city" },
  bbox: [9.70, 57.10, 10.05, 57.25],
  viewScale: 1.2,
  label: { lon: 9.88, lat: 57.18, rotation: 0 },
  source: "大维尔德沼原：日德兰半岛北部一片曾经的大面积隆起泥炭沼泽洼地，20世纪初通过排水工程改造为农业用地，现存部分区域已恢复为湿地自然保护区（丹麦自然署）",
};

const WEST_JUTLAND_OUTWASH_PLAIN: TerrainEntry = {
  id: "west-jutland-outwash-plain",
  nameZh: "西日德兰外冲平原",
  nameEn: "West Jutland Outwash Plain",
  category: "plain",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "斯克恩河三角洲", lon: 8.3167, lat: 55.9667, elevation: 2, kind: "delta" },
  bbox: [8.10, 55.70, 8.90, 56.20],
  viewScale: 1.3,
  label: { lon: 8.45, lat: 55.95, rotation: 0 },
  source: "西日德兰外冲平原：末次冰期主冰盖边缘融水携带的沙砾沉积形成的大片低平砂质平原，斯克恩河（丹麦流量最大的河流）在此形成三角洲注入灵讷峡湾，20世纪初曾大规模改道排干沿岸湿地（GEUS）",
};

const LOLLAND_FALSTER_LOWLAND: TerrainEntry = {
  id: "lolland-falster-lowland",
  nameZh: "洛兰—法尔斯特低地",
  nameEn: "Lolland-Falster Lowland",
  category: "plain",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "尼克宾法尔斯特", lon: 11.8667, lat: 54.7667, elevation: 3, kind: "city" },
  bbox: [11.30, 54.55, 12.30, 54.95],
  viewScale: 1.4,
  label: { lon: 11.75, lat: 54.75, rotation: 0 },
  source: "洛兰—法尔斯特低地：丹麦最南端两座岛屿构成的低平农业区，海拔多在数米以内，部分沿海低地历史上经堤坝围垦形成，是丹麦重要的甜菜与谷物产区（GEUS）",
};

const FUNEN_ROLLING_FARMLAND: TerrainEntry = {
  id: "funen-rolling-farmland",
  nameZh: "菲英岛缓丘农田",
  nameEn: "Funen Rolling Farmland",
  category: "plain",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "欧登塞", lon: 10.3883, lat: 55.3959, elevation: 15, kind: "city" },
  bbox: [9.90, 55.05, 10.80, 55.60],
  viewScale: 1.3,
  label: { lon: 10.35, lat: 55.30, rotation: 0 },
  source: "菲英岛缓丘农田：末次冰期年轻终碛地貌经长期农业开垦形成的缓丘农田景观，土壤肥沃、田块规整，素有“丹麦花园”之称（丹麦自然署）",
};

const GREJSDALEN: TerrainEntry = {
  id: "grejsdalen",
  nameZh: "格赖斯河谷",
  nameEn: "Grejsdalen",
  category: "valley",
  regionId: "europe",
  country: "denmark",
  landmark: { name: "格赖斯河谷", lon: 9.5333, lat: 55.7333, elevation: 20, kind: "gorge" },
  bbox: [9.45, 55.68, 9.65, 55.80],
  axis: [[9.48, 55.78], [9.60, 55.70]],
  label: { lon: 9.53, lat: 55.74, rotation: -40 },
  source: "格赖斯河谷：末次冰期冰下融水沿冰盖边缘侵蚀形成的隧道谷，谷壁相对陡峭、谷底森林茂密，是日德兰半岛地势起伏较明显的隧道谷地貌代表（GEUS）",
};

// ============================================================
// 欧洲 / 瑞典
// ============================================================

const KEBNEKAISE_MASSIF: TerrainEntry = {
  id: "kebnekaise-massif",
  nameZh: "凯布讷山",
  nameEn: "Kebnekaise",
  category: "mountain_system",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "凯布讷山北峰", lon: 18.5661, lat: 67.9086, elevation: 2097, kind: "peak" },
  bbox: [18.35, 67.82, 18.90, 67.98],
  viewScale: 1.2,
  label: { lon: 18.58, lat: 67.90, rotation: 0 },
  source: "凯布讷山：瑞典拉普兰地区的斯堪的纳维亚山脉组成部分，是瑞典全境最高峰，北峰为裸露岩石峰、海拔固定为2096.8米，南峰覆盖冰川、海拔逐年变化，近年因冰川消融南峰已连续多年低于北峰（斯德哥尔摩大学冰川监测）",
};

const SAREK_MOUNTAINS: TerrainEntry = {
  id: "sarek-mountains",
  nameZh: "萨雷克山地",
  nameEn: "Sarek",
  category: "mountain_system",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "萨雷克塔克峰", lon: 17.7472, lat: 67.4406, elevation: 2089, kind: "peak" },
  bbox: [17.20, 67.15, 18.10, 67.65],
  viewScale: 1.4,
  label: { lon: 17.60, lat: 67.42, rotation: 0 },
  source: "萨雷克山地：1909年设立的萨雷克国家公园核心区域，瑞典最早的国家公园之一，园内有6座海拔超过2000米的山峰（瑞典全境13座之一），无常设步道与住宿设施，常被称为“欧洲最后的荒野”之一（瑞典国家公园管理局 Naturvårdsverket）",
};

const OLAND_ALVAR: TerrainEntry = {
  id: "oland-alvar",
  nameZh: "厄兰岛大阿尔瓦石灰岩荒原",
  nameEn: "Stora Alvaret, Öland",
  category: "plateau",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "大阿尔瓦荒原", lon: 16.50, lat: 56.40, elevation: 15, kind: "escarpment" },
  bbox: [16.35, 56.25, 16.65, 56.55],
  viewScale: 1.2,
  label: { lon: 16.48, lat: 56.42, rotation: 0 },
  source: "大阿尔瓦荒原：厄兰岛南部一片长约40公里的裸露石炭纪石灰岩台地，占岛屿面积约四分之一，是欧洲现存面积最大的同类石灰岩荒原，2000年南厄兰岛农业景观列入联合国教科文组织世界遗产名录（UNESCO）",
};

const VINDELFJALLEN: TerrainEntry = {
  id: "vindelfjallen",
  nameZh: "文德尔山地自然保护区",
  nameEn: "Vindelfjällen",
  category: "plateau",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "阿马纳斯", lon: 16.2167, lat: 65.9667, elevation: 450, kind: "city" },
  bbox: [14.60, 65.55, 16.90, 66.45],
  viewScale: 1.7,
  label: { lon: 15.70, lat: 66.05, rotation: 0 },
  source: "文德尔山地自然保护区：瑞典面积最大的自然保护区（约55.5万公顷），以桦树林带与高山苔原过渡带的山地高原地貌为主，是瑞典拉普兰重要的驯鹿放牧区（瑞典国家公园管理局）",
};

const SILJAN_RING: TerrainEntry = {
  id: "siljan-ring",
  nameZh: "希尔扬陨石坑",
  nameEn: "Siljan Ring",
  category: "basin",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "莫拉", lon: 14.5333, lat: 61.0000, elevation: 165, kind: "city" },
  bbox: [13.75, 60.60, 15.25, 61.35],
  viewScale: 1.7,
  label: { lon: 14.50, lat: 61.00, rotation: 0 },
  source: "希尔扬陨石坑：约3.77亿年前泥盆纪一颗直径约5公里的天体撞击形成，环形构造直径约52公里，是欧洲已知最大的陨石撞击构造，希尔扬湖位于环形构造西南边缘（隆德大学 / 希尔扬地质公园）",
};

const STORE_MOSSE: TerrainEntry = {
  id: "store-mosse",
  nameZh: "斯托雷莫瑟沼泽",
  nameEn: "Store Mosse",
  category: "basin",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "斯托雷莫瑟国家公园游客中心", lon: 13.9667, lat: 57.2667, elevation: 155, kind: "city" },
  bbox: [13.75, 57.15, 14.15, 57.35],
  label: { lon: 13.95, lat: 57.25, rotation: 0 },
  source: "斯托雷莫瑟沼泽：瑞典拉普兰以南面积最大的隆起泥炭沼泽，1982年设立国家公园，是瑞典南部重要的候鸟栖息与泥炭湿地保护区（瑞典国家公园管理局）",
};

const VANERN: TerrainEntry = {
  id: "vanern",
  nameZh: "维纳恩湖",
  nameEn: "Vänern",
  category: "lake",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "莱克城堡", lon: 13.1667, lat: 58.6833, elevation: 44, kind: "lake" },
  bbox: [12.35, 58.15, 14.50, 59.90],
  viewScale: 1.8,
  label: { lon: 13.40, lat: 59.00, rotation: 0 },
  source: "维纳恩湖：欧盟境内面积最大的湖泊，约5650平方公里，末次冰期冰川侵蚀形成的湖盆，湖水经约塔河注入卡特加特海峡，也是瑞典哥塔运河连接北海与波罗的海航道的组成部分（瑞典水文气象局 SMHI）",
};

const VATTERN: TerrainEntry = {
  id: "vattern",
  nameZh: "韦特恩湖",
  nameEn: "Vättern",
  category: "lake",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "瓦兹泰纳", lon: 14.8956, lat: 58.4500, elevation: 88, kind: "city" },
  bbox: [14.20, 57.90, 14.95, 58.90],
  axis: [[14.60, 57.95], [14.70, 58.85]],
  viewScale: 1.5,
  label: { lon: 14.45, lat: 58.40, rotation: -80 },
  source: "韦特恩湖：瑞典第二大湖，也是欧洲水质最清澈的大型湖泊之一，最大水深约128米，湖盆沿一条古老的构造断裂带发育，湖中的维辛索岛保留有中世纪修道院遗址（瑞典水文气象局）",
};

const MALAREN: TerrainEntry = {
  id: "malaren",
  nameZh: "梅拉伦湖",
  nameEn: "Mälaren",
  category: "lake",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "德罗特宁霍尔姆宫", lon: 17.8867, lat: 59.3217, elevation: 1, kind: "lake" },
  bbox: [16.20, 59.10, 18.20, 59.65],
  viewScale: 1.6,
  label: { lon: 17.20, lat: 59.35, rotation: 0 },
  source: "梅拉伦湖：瑞典第三大湖，湖岸线极为曲折、支汊众多，斯德哥尔摩坐落在其东端出海口，历史上是瑞典王室与贵族庄园的聚居水域，德罗特宁霍尔姆宫1991年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const TORNETRASK: TerrainEntry = {
  id: "tornetrask",
  nameZh: "托讷特雷斯克湖",
  nameEn: "Torneträsk",
  category: "lake",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "阿比斯库", lon: 18.7900, lat: 68.3550, elevation: 385, kind: "lake" },
  bbox: [17.80, 68.20, 20.00, 68.50],
  viewScale: 1.6,
  label: { lon: 19.00, lat: 68.35, rotation: 0 },
  source: "托讷特雷斯克湖：瑞典拉普兰地区一座狭长的构造湖，最大水深约168米，湖畔的阿比斯库因地处“雨影区”降水稀少、天空通透，是瑞典观测极光的著名地点（瑞典国家公园管理局）",
};

const TAAKERN: TerrainEntry = {
  id: "taakern",
  nameZh: "托克恩湖",
  nameEn: "Tåkern",
  category: "lake",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "韦弗松达观鸟塔", lon: 14.8333, lat: 58.3667, elevation: 92, kind: "lake" },
  bbox: [14.70, 58.30, 14.95, 58.42],
  label: { lon: 14.83, lat: 58.36, rotation: 0 },
  source: "托克恩湖：瑞典南部一座水深不足1.5米的浅水湖，芦苇沼泽广布，是瑞典重要的候鸟栖息地之一，每年春秋两季数以万计的候鸟在此停歇（瑞典皇家科学院鸟类保护区）",
};

const TORNE_RIVER: TerrainEntry = {
  id: "torne-river",
  nameZh: "托讷河",
  nameEn: "Torne River",
  category: "river",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "哈帕兰达", lon: 24.1361, lat: 65.8378, elevation: 5, kind: "city" },
  bbox: [20.00, 65.70, 24.30, 68.50],
  axis: [[20.50, 68.40], [24.15, 65.85]],
  viewScale: 1.8,
  label: { lon: 22.00, lat: 67.20, rotation: -60 },
  source: "托讷河：瑞典最长的未经水电开发的天然河流之一，全长约520公里，下游河段构成瑞典与芬兰的界河，2000年瑞典—芬兰段跨境列入联合国教科文组织世界遗产“梅尔梅奥河谷”名录（UNESCO）",
};

const DALALVEN: TerrainEntry = {
  id: "dalalven",
  nameZh: "达拉河",
  nameEn: "Dalälven",
  category: "river",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "埃尔夫卡尔比", lon: 17.4667, lat: 60.5667, elevation: 5, kind: "city" },
  bbox: [14.30, 60.40, 17.60, 61.20],
  axis: [[14.50, 61.00], [17.45, 60.57]],
  viewScale: 1.6,
  label: { lon: 16.00, lat: 60.80, rotation: -20 },
  source: "达拉河：流经达拉纳省的瑞典重要河流，源头水系环绕希尔扬陨石坑构造区，下游在埃尔夫卡尔比附近形成三角洲注入波的尼亚湾，沿岸历史上是瑞典水力锯木业的重要基地（瑞典水文气象局）",
};

const KLARALVEN: TerrainEntry = {
  id: "klaralven",
  nameZh: "克拉勒河",
  nameEn: "Klarälven",
  category: "river",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "埃克斯海尔德河曲带", lon: 13.4667, lat: 60.1833, elevation: 165, kind: "meander" },
  bbox: [12.80, 59.30, 13.90, 61.50],
  axis: [[13.20, 61.40], [13.50, 59.38]],
  viewScale: 1.9,
  label: { lon: 13.30, lat: 60.40, rotation: -85 },
  source: "克拉勒河：发源于挪威山地、流经瑞典韦姆兰省注入维纳恩湖的河流，中上游河道在低缓地形中自由摆动，形成大量典型的自由河曲，是北欧研究河流蛇曲地貌的经典样本（瑞典水文气象局）",
};

const LAPPORTEN: TerrainEntry = {
  id: "lapporten",
  nameZh: "拉普门谷",
  nameEn: "Lapporten",
  category: "valley",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "比尔克利登观景点", lon: 18.1667, lat: 68.4167, elevation: 500, kind: "meander" },
  bbox: [18.00, 68.30, 18.45, 68.48],
  axis: [[18.05, 68.44], [18.35, 68.35]],
  label: { lon: 18.20, lat: 68.40, rotation: -20 },
  source: "拉普门谷：琼纳特亚卡山与尼松通约罗山之间一条呈标志性U形的冰川槽谷，因形似大门而得名（萨米语称“拉普门”意为拉普兰之门），是瑞典拉普兰地区辨识度最高的冰蚀地貌之一（瑞典国家公园管理局）",
};

const ABISKO_CANYON: TerrainEntry = {
  id: "abisko-canyon",
  nameZh: "阿比斯库峡谷",
  nameEn: "Abisko Canyon",
  category: "gorge",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "阿比斯库峡谷", lon: 18.7719, lat: 68.3611, elevation: 400, kind: "gorge" },
  bbox: [18.70, 68.33, 18.85, 68.40],
  axis: [[18.72, 68.40], [18.80, 68.34]],
  label: { lon: 18.77, lat: 68.37, rotation: -40 },
  source: "阿比斯库峡谷：阿比斯科约卡河切穿古老构造断裂带形成的峡谷，是瑞典著名徒步路线孔斯莱登（“国王小径”）的北段起点，峡谷两岸生长着受局地小气候庇护的特殊植物群落（瑞典国家公园管理局）",
};

const HOGA_KUSTEN: TerrainEntry = {
  id: "hoga-kusten",
  nameZh: "高海岸",
  nameEn: "Höga Kusten (High Coast)",
  category: "coast",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "高海岸大桥", lon: 18.1975, lat: 62.7958, elevation: 5, kind: "escarpment" },
  bbox: [17.90, 62.60, 18.60, 63.10],
  viewScale: 1.3,
  label: { lon: 18.10, lat: 62.85, rotation: 0 },
  source: "高海岸：波的尼亚湾沿岸一段末次冰期后地壳持续均衡抬升的海岸，当地陆地至今仍以每年约8毫米的速度上升，古海岸线已抬升至海拔约286米处，是全球陆地均衡抬升幅度最大的地区之一，2000年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const BOHUSLAN_COAST: TerrainEntry = {
  id: "bohuslan-coast",
  nameZh: "布胡斯兰海岸",
  nameEn: "Bohuslän Coast",
  category: "coast",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "科斯特群岛", lon: 11.0833, lat: 58.8833, elevation: 5, kind: "island" },
  bbox: [10.90, 58.30, 11.60, 59.00],
  viewScale: 1.3,
  label: { lon: 11.20, lat: 58.65, rotation: 0 },
  source: "布胡斯兰海岸：瑞典西海岸一段裸露花岗岩礁岛密布的海岸，科斯特群岛周边海域2009年设立瑞典第一座海洋国家公园科斯特海国家公园，是瑞典重要的海洋生态保护区（瑞典国家公园管理局）",
};

const BLEKINGE_ARCHIPELAGO: TerrainEntry = {
  id: "blekinge-archipelago",
  nameZh: "布莱金厄群岛",
  nameEn: "Blekinge Archipelago",
  category: "coast",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "卡尔斯克鲁纳", lon: 15.5869, lat: 56.1612, elevation: 5, kind: "city" },
  bbox: [15.30, 55.95, 16.10, 56.30],
  viewScale: 1.2,
  label: { lon: 15.65, lat: 56.10, rotation: 0 },
  source: "布莱金厄群岛：瑞典东南部波罗的海沿岸的花岗岩群岛，卡尔斯克鲁纳自17世纪起即为瑞典皇家海军基地，1998年其海军城规划列入联合国教科文组织世界遗产名录（UNESCO）",
};

const STOCKHOLM_ARCHIPELAGO: TerrainEntry = {
  id: "stockholm-archipelago",
  nameZh: "斯德哥尔摩群岛",
  nameEn: "Stockholm Archipelago",
  category: "coast",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "瓦克斯霍尔姆", lon: 18.3528, lat: 59.4022, elevation: 5, kind: "island" },
  bbox: [17.80, 59.00, 19.30, 59.80],
  viewScale: 1.6,
  label: { lon: 18.60, lat: 59.35, rotation: 0 },
  source: "斯德哥尔摩群岛：波罗的海沿岸由约三万座岛屿、礁石组成的群岛，由末次冰期冰川刮蚀的花岗岩基岩经地壳均衡抬升逐渐出露海面而成，是世界上岛屿密度最高的群岛之一（瑞典国家公园管理局）",
};

const GOTLAND: TerrainEntry = {
  id: "gotland",
  nameZh: "哥得兰岛",
  nameEn: "Gotland",
  category: "island",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "维斯比古城", lon: 18.2948, lat: 57.6348, elevation: 15, kind: "city" },
  bbox: [18.05, 56.90, 19.15, 57.90],
  viewScale: 1.5,
  label: { lon: 18.55, lat: 57.35, rotation: 0 },
  source: "哥得兰岛：波罗的海中瑞典面积最大的岛屿，主体由志留纪石灰岩构成，维斯比古城完整保留中世纪城墙，1995年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const FARO: TerrainEntry = {
  id: "faro",
  nameZh: "法罗岛",
  nameEn: "Fårö",
  category: "island",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "朗哈马斯海蚀柱群", lon: 19.2000, lat: 57.9500, elevation: 5, kind: "escarpment" },
  bbox: [19.05, 57.88, 19.45, 58.00],
  label: { lon: 19.20, lat: 57.94, rotation: 0 },
  source: "法罗岛：哥得兰岛以北的小岛，海岸分布着志留纪石灰岩经长期海浪侵蚀形成的海蚀柱（瑞典语称“raukar”），朗哈马斯海蚀柱群是瑞典境内最密集的海蚀柱地貌（瑞典地质调查局 SGU）",
};

const SODERASEN: TerrainEntry = {
  id: "soderasen",
  nameZh: "苏德罗森岭",
  nameEn: "Söderåsen",
  category: "hills",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "科帕哈滕观景台", lon: 13.2500, lat: 56.0333, elevation: 195, kind: "escarpment" },
  bbox: [13.10, 55.98, 13.45, 56.10],
  label: { lon: 13.25, lat: 56.03, rotation: 0 },
  source: "苏德罗森岭：斯科讷省中北部一条断块隆起的岭脊，长约22公里，两侧断崖陡立，岭上生长着瑞典南部保存最完好的古老阔叶林之一，1988年设立国家公园（瑞典国家公园管理局）",
};

const TIVEDEN: TerrainEntry = {
  id: "tiveden",
  nameZh: "蒂韦登",
  nameEn: "Tiveden",
  category: "hills",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "斯滕谢拉", lon: 14.6667, lat: 58.7333, elevation: 195, kind: "escarpment" },
  bbox: [14.50, 58.60, 14.85, 58.85],
  label: { lon: 14.67, lat: 58.73, rotation: 0 },
  source: "蒂韦登：历史上曾长期是瑞典南北两大传统区域之间的天然屏障，地表散布着末次冰期冰川搬运遗留的大量花岗岩巨砾，古老松林与沼泽湖泊交织，1983年设立国家公园（瑞典国家公园管理局）",
};

const HALLANDSASEN: TerrainEntry = {
  id: "hallandsasen",
  nameZh: "哈兰德斯岭",
  nameEn: "Hallandsåsen",
  category: "hills",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "博斯塔",
    lon: 12.9167, lat: 56.4167, elevation: 150, kind: "escarpment" },
  bbox: [12.65, 56.35, 13.20, 56.50],
  axis: [[12.70, 56.42], [13.15, 56.40]],
  label: { lon: 12.90, lat: 56.43, rotation: 0 },
  source: "哈兰德斯岭：斯科讷省与哈兰省交界处一条东西走向的断块山岭，一条铁路隧道1992年动工穿越山岭、因地质条件复杂历经多次延期，2015年最终通车，是瑞典近代铁路工程史上著名的地质挑战案例（瑞典交通局）",
};

const SKANE_PLAIN: TerrainEntry = {
  id: "skane-plain",
  nameZh: "斯科讷平原",
  nameEn: "Skåne Plain",
  category: "plain",
  regionId: "europe",
  country: "sweden",
  landmark: { name: "隆德", lon: 13.1910, lat: 55.7047, elevation: 40, kind: "city" },
  bbox: [12.80, 55.35, 14.30, 56.30],
  viewScale: 1.4,
  label: { lon: 13.50, lat: 55.85, rotation: 0 },
  source: "斯科讷平原：瑞典最南端由末次冰期冰碛与黄土状沉积构成的低平农业区，土壤肥沃，是瑞典最重要的谷物与油菜种植区，气候也是瑞典全境最温和的地区之一（瑞典水文气象局）",
};

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
  source: "托尔尼奥河：瑞典—芬兰界河，全长约520公里，河口的托尔尼奥与河对岸瑞典的哈帕兰达形成跨境双子城，两市部分市政设施共享共建，2000年瑞典—芬兰跨境段列入联合国教科文组织世界遗产“梅尔梅奥河谷”名录（UNESCO）",
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
  source: "海卢奥托岛：波的尼亚湾中一座持续因地壳均衡抬升而扩大的沙质岛屿，岛屿面积仍以每年约1公顷的速度增长，岛上广布沙丘与沙滩，是芬兰地壳抬升现象最直观的观测点之一（芬兰自然资源局）",
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

// ============================================================
// 欧洲 / 卢森堡
// 国土面积仅约2586平方公里，地貌类型有限；经用户确认，本国地形集合数量
// 低于项目其它国家通常≥25的标准（本国12条），但选取与核实标准不降低。
// ============================================================

const OESLING_PLATEAU: TerrainEntry = {
  id: "oesling-plateau",
  nameZh: "埃斯灵高原",
  nameEn: "Oesling (Éislek)",
  category: "hills",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "克奈夫峰", lon: 6.0269, lat: 50.1806, elevation: 560, kind: "peak" },
  bbox: [5.85, 49.95, 6.35, 50.20],
  viewScale: 1.3,
  label: { lon: 6.05, lat: 50.08, rotation: 0 },
  source: "埃斯灵高原：卢森堡北部约三分之一国土，是阿登山地向东延伸的一部分，与比利时、德国相邻区域同属一片古老高原，克奈夫峰海拔560米，是卢森堡全境最高点，1997年经重新测量确认（卢森堡地籍与地形局 ACT）",
};

const MINETT_RED_LANDS: TerrainEntry = {
  id: "minett-red-lands",
  nameZh: "米内特红土地",
  nameEn: "Minett (Red Lands)",
  category: "hills",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "埃施阿尔泽特", lon: 5.9806, lat: 49.4958, elevation: 300, kind: "city" },
  bbox: [5.85, 49.45, 6.15, 49.60],
  label: { lon: 6.00, lat: 49.52, rotation: 0 },
  source: "米内特红土地：卢森堡最南端因侏罗纪鲕状铁矿层出露而得名的丘陵地带，19世纪起成为卢森堡钢铁工业的发源地，2020年该区域与法国、比利时跨境部分共同列入联合国教科文组织米内特生物圈保护区（UNESCO）",
};

const OUR_VALLEY: TerrainEntry = {
  id: "our-valley",
  nameZh: "奥尔河谷",
  nameEn: "Our Valley",
  category: "valley",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "维安登城堡", lon: 6.2050, lat: 49.9350, elevation: 200, kind: "city" },
  bbox: [6.05, 49.85, 6.35, 50.15],
  axis: [[6.15, 50.12], [6.28, 49.88]],
  viewScale: 1.2,
  label: { lon: 6.20, lat: 50.00, rotation: -70 },
  source: "奥尔河谷：奥尔河切穿埃斯灵高原形成的深切河谷，构成卢森堡与德国的界河，维安登城堡矗立在河谷一侧的悬崖之上，是卢森堡最具代表性的河谷城堡景观（卢森堡地籍与地形局）",
};

const CLERVE_VALLEY: TerrainEntry = {
  id: "clerve-valley",
  nameZh: "克莱尔沃河谷",
  nameEn: "Clerve Valley",
  category: "valley",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "克莱尔沃城堡", lon: 6.0328, lat: 50.0553, elevation: 340, kind: "city" },
  bbox: [5.95, 49.98, 6.15, 50.15],
  label: { lon: 6.03, lat: 50.06, rotation: 0 },
  source: "克莱尔沃河谷：克莱尔沃河（奥尔河支流）切穿埃斯灵高原形成的狭窄河谷，克莱尔沃镇沿河谷两岸而建，中世纪城堡俯瞰整个谷地，是埃斯灵高原地区典型的河谷聚落景观（卢森堡地籍与地形局）",
};

const EISCH_VALLEY: TerrainEntry = {
  id: "eisch-valley",
  nameZh: "艾施河谷（七堡谷）",
  nameEn: "Eisch Valley (Valley of the Seven Castles)",
  category: "valley",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "安森堡城堡", lon: 6.0219, lat: 49.7139, elevation: 240, kind: "city" },
  bbox: [5.90, 49.65, 6.15, 49.80],
  axis: [[6.05, 49.78], [5.93, 49.68]],
  label: { lon: 6.00, lat: 49.73, rotation: -50 },
  source: "艾施河谷：卢森堡中西部艾施河沿岸一条河谷，因谷内分布七座中世纪城堡而俗称“七堡谷”，谷地大部分区域是卢森堡境内面积最大的自然保护区之一（卢森堡环境局）",
};

const MOSELLE_VALLEY_LU: TerrainEntry = {
  id: "moselle-valley-lu",
  nameZh: "摩泽尔河谷（卢森堡段）",
  nameEn: "Moselle Valley (Luxembourg)",
  category: "valley",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "雷米希", lon: 6.3667, lat: 49.5433, elevation: 155, kind: "city" },
  bbox: [6.25, 49.45, 6.40, 49.75],
  axis: [[6.28, 49.73], [6.38, 49.47]],
  viewScale: 1.2,
  label: { lon: 6.33, lat: 49.60, rotation: -75 },
  source: "摩泽尔河谷卢森堡段：摩泽尔河构成卢森堡与德国的界河，沿岸缓坡是卢森堡唯一的葡萄酒产区，气候相对温和，是卢森堡境内地势最低、气候最温和的区域（卢森堡地籍与地形局）",
};

const UPPER_SURE_LAKE: TerrainEntry = {
  id: "upper-sure-lake",
  nameZh: "上苏尔湖",
  nameEn: "Upper Sûre Lake",
  category: "lake",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "埃施叙尔苏尔", lon: 5.9167, lat: 49.9167, elevation: 320, kind: "lake" },
  bbox: [5.75, 49.83, 5.98, 49.97],
  label: { lon: 5.87, lat: 49.90, rotation: 0 },
  source: "上苏尔湖：1961年拦截苏尔河修建大坝形成的人工水库，面积约3.08平方公里，承担卢森堡约70%家庭的饮用水供应，湖区周边设有上苏尔自然公园，埃施叙尔苏尔古堡俯瞰湖畔（卢森堡水务局 / 上苏尔自然公园）",
};

const SURE_RIVER: TerrainEntry = {
  id: "sure-river",
  nameZh: "苏尔河",
  nameEn: "Sûre",
  category: "river",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "迪基希", lon: 6.1594, lat: 49.8683, elevation: 200, kind: "city" },
  bbox: [5.75, 49.75, 6.55, 49.97],
  axis: [[5.78, 49.85], [6.50, 49.72]],
  viewScale: 1.4,
  label: { lon: 6.10, lat: 49.90, rotation: -15 },
  source: "苏尔河：发源于比利时、流经卢森堡北部与中部的河流，全长约206公里（其中约136公里在卢森堡境内），最终在瓦瑟比利希附近注入摩泽尔河，是卢森堡境内最长的河流（卢森堡水务局）",
};

const ALZETTE_RIVER: TerrainEntry = {
  id: "alzette-river",
  nameZh: "阿尔泽特河",
  nameEn: "Alzette",
  category: "river",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "埃施阿尔泽特", lon: 5.9806, lat: 49.4958, elevation: 300, kind: "city" },
  bbox: [5.85, 49.45, 6.15, 49.80],
  axis: [[5.87, 49.53], [6.10, 49.75]],
  viewScale: 1.2,
  label: { lon: 6.00, lat: 49.65, rotation: -70 },
  source: "阿尔泽特河：发源于法国境内，向北流经卢森堡首都卢森堡市与南部米内特工业区，最终在梅尔施附近汇入苏尔河，是贯穿卢森堡人口最密集区域的主要河流（卢森堡地籍与地形局）",
};

const MULLERTHAL_BERDORF: TerrainEntry = {
  id: "mullerthal-berdorf",
  nameZh: "米勒达尔·贝多夫砂岩区（“小瑞士”）",
  nameEn: "Mullerthal / Berdorf (\"Little Switzerland\")",
  category: "gorge",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "贝多夫砂岩地貌区", lon: 6.3536, lat: 49.8161, elevation: 380, kind: "gorge" },
  bbox: [6.28, 49.77, 6.42, 49.87],
  label: { lon: 6.35, lat: 49.82, rotation: 0 },
  source: "米勒达尔地区因侵蚀强烈的砂岩地貌被称为卢森堡“小瑞士”，贝多夫周边密布蜂窝状砂岩石柱与狭窄岩缝，“狼峡”等地名记录了当地民间传说，是卢森堡长距离徒步路线米勒达尔小径沿线最具代表性的地貌（卢森堡旅游局 / 米勒达尔地区旅游局）",
};

const SCHIESSENTUMPEL: TerrainEntry = {
  id: "schiessentumpel",
  nameZh: "希森滕佩尔瀑布",
  nameEn: "Schiessentümpel",
  category: "gorge",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "希森滕佩尔瀑布", lon: 6.3167, lat: 49.8206, elevation: 300, kind: "gorge" },
  bbox: [6.28, 49.79, 6.36, 49.85],
  label: { lon: 6.32, lat: 49.82, rotation: 0 },
  source: "希森滕佩尔瀑布：米勒达尔地区一处小型三级跌水瀑布，瀑布前一座建于1879年的砂岩拱桥已成为米勒达尔“小瑞士”地区的标志性景观（米勒达尔地区旅游局）",
};

const LUXEMBOURG_PLATEAU: TerrainEntry = {
  id: "luxembourg-plateau",
  nameZh: "卢森堡砂岩台地",
  nameEn: "Luxembourg Plateau",
  category: "plateau",
  regionId: "europe",
  country: "luxembourg",
  landmark: { name: "博克岩石与佩特吕斯地堡", lon: 6.1347, lat: 49.6117, elevation: 300, kind: "escarpment" },
  bbox: [6.08, 49.58, 6.19, 49.65],
  label: { lon: 6.13, lat: 49.61, rotation: 0 },
  source: "卢森堡砂岩台地：古特兰地区中南部一片砂岩台地，首都卢森堡市即建于此，阿尔泽特河与佩特吕斯河深切台地形成的峡谷环绕老城，17世纪起在博克岩石中凿建的地堡工事使古城获得“北方直布罗陀”之称，1994年老城与要塞列入联合国教科文组织世界遗产名录（UNESCO）",
};

// ============================================================
// 亚洲 / 越南
// 东南亚次区域第二个国家；黄沙（西沙）/长沙（南沙）群岛主权争议区域不收录，
// 与本项目一贯的南海争议排除原则一致；红河/湄公河上游、板约瀑布（与中国界河瀑布）
// 均中性表述、不涉主权；不写"东海/南海"等有争议海域专有名称
// ============================================================

const FANSIPAN: TerrainEntry = {
  id: "fansipan",
  nameZh: "番西邦峰",
  nameEn: "Fansipan",
  category: "mountain_system",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "番西邦峰主峰", lon: 103.7752, lat: 22.3033, elevation: 3147, kind: "peak" },
  bbox: [103.70, 22.24, 103.86, 22.38],
  label: { lon: 103.78, lat: 22.31, rotation: 0 },
  source: "番西邦峰：越南与中南半岛最高峰(3147米)，是黄连山脉的最高点，山体形成于约2.5亿至2.6亿年前古生代二叠纪至中生代三叠纪之交，山顶终年低温，保存有云雾林与高山植被生态，地处黄连山国家公园（越南林业局/UNESCO）",
};

const PHONG_NHA_KE_BANG: TerrainEntry = {
  id: "phong-nha-ke-bang",
  nameZh: "峰牙己榜",
  nameEn: "Phong Nha-Ke Bang",
  category: "mountain_system",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "峰牙洞", lon: 106.2833, lat: 17.5936, elevation: 200, kind: "gorge" },
  bbox: [106.05, 17.35, 106.55, 17.75],
  viewScale: 1.3,
  label: { lon: 106.25, lat: 17.55, rotation: 0 },
  source: "峰牙己榜：越南中部沿老挝边境一片喀斯特山地，石灰岩地层演化史可追溯至约4亿年前古生代，是亚洲现存规模最大的古老喀斯特地貌之一，境内已探明洞穴与地下水道总长逾220公里，世界最大天然洞穴韶洞即位于此，2003年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const BA_NA_HILLS: TerrainEntry = {
  id: "ba-na-hills",
  nameZh: "巴拿山",
  nameEn: "Ba Na Hills",
  category: "mountain_system",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "巴拿山主峰", lon: 107.9908, lat: 15.9967, elevation: 1487, kind: "peak" },
  bbox: [107.94, 15.95, 108.05, 16.05],
  label: { lon: 108.00, lat: 16.00, rotation: 0 },
  source: "巴拿山：岘港以西一座海拔1487米的山峰，山顶气候比沿海城区低约10摄氏度，20世纪初曾是法国殖民时期的避暑山庄，如今山顶经缆车可达，是越南中部知名的高山旅游目的地（越南国家旅游局）",
};

const BACH_MA_MOUNTAIN: TerrainEntry = {
  id: "bach-ma-mountain",
  nameZh: "白马山",
  nameEn: "Bach Ma",
  category: "mountain_system",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "白马山主峰", lon: 107.8508, lat: 16.1967, elevation: 1448, kind: "peak" },
  bbox: [107.78, 16.14, 107.92, 16.26],
  label: { lon: 107.85, lat: 16.20, rotation: 0 },
  source: "白马山：顺化与岘港之间一座海拔1448米的山峰，山体覆盖900米以上亚热带常绿季风林与900米以下热带常绿季风林两种植被带，1932年法国殖民当局曾在此修建避暑山庄，如今荒废的法式别墅遗迹散落山间，1991年设为国家公园（越南林业局）",
};

const DONG_VAN_KARST_PLATEAU: TerrainEntry = {
  id: "dong-van-karst-plateau",
  nameZh: "同文喀斯特高原",
  nameEn: "Dong Van Karst Plateau",
  category: "plateau",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "苗峰", lon: 105.4667, lat: 23.1667, elevation: 1971, kind: "peak" },
  bbox: [104.90, 22.80, 105.40, 23.40],
  viewScale: 1.3,
  label: { lon: 105.15, lat: 23.10, rotation: 0 },
  source: "同文喀斯特高原：越南最北端河江省四县境内一片喀斯特台地，面积约2345平方公里，石灰岩地层可追溯至约5.5亿年前寒武纪，记录有泥盆纪-石炭纪之交与二叠纪-三叠纪之交两次生物大灭绝的地质证据，2010年成为越南首个联合国教科文组织世界地质公园（UNESCO）",
};

const CENTRAL_HIGHLANDS_TAY_NGUYEN: TerrainEntry = {
  id: "central-highlands-tay-nguyen",
  nameZh: "西原高原",
  nameEn: "Central Highlands (Tây Nguyên)",
  category: "plateau",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "大叻", lon: 108.4419, lat: 11.9404, elevation: 1500, kind: "city" },
  bbox: [107.30, 11.20, 108.70, 15.20],
  viewScale: 1.8,
  label: { lon: 108.00, lat: 13.30, rotation: 0 },
  source: "西原高原：越南中南部一系列连绵高原的统称，海拔大致在500至1500米之间，玄武岩风化形成的红土广泛覆盖高原表面，是越南最主要的咖啡种植区，大叻所在的林园高原海拔约1500米，气候常年温和（越南农业与农村发展部）",
};

const CAT_BA_ISLAND: TerrainEntry = {
  id: "cat-ba-island",
  nameZh: "吉婆岛",
  nameEn: "Cat Ba Island",
  category: "island",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "吉婆镇", lon: 107.0483, lat: 20.8033, elevation: 5, kind: "island" },
  bbox: [106.90, 20.68, 107.20, 20.90],
  label: { lon: 107.05, lat: 20.78, rotation: 0 },
  source: "吉婆岛：越南面积最大的近海岛屿之一，全岛面积约354平方公里，1986年近半岛域及邻近约90平方公里海域设为国家公园，岛上分布亚热带常绿林、淡水沼泽林、红树林与珊瑚礁等多种生态系统（越南林业局）",
};

const CON_DAO: TerrainEntry = {
  id: "con-dao",
  nameZh: "昆岛",
  nameEn: "Con Dao",
  category: "island",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "昆山岛", lon: 106.6000, lat: 8.6833, elevation: 10, kind: "island" },
  bbox: [106.50, 8.60, 106.70, 8.78],
  label: { lon: 106.60, lat: 8.69, rotation: 0 },
  source: "昆岛：越南南部海域一处由16座岛屿组成的群岛，主岛昆山岛为群岛中面积最大者，1993年设为国家公园，周边海域是越南境内绿海龟重要的产卵地之一（越南林业局）",
};

const PHU_QUOC: TerrainEntry = {
  id: "phu-quoc",
  nameZh: "富国岛",
  nameEn: "Phu Quoc",
  category: "island",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "阳东", lon: 103.9670, lat: 10.2270, elevation: 5, kind: "island" },
  bbox: [103.80, 9.90, 104.10, 10.45],
  viewScale: 1.2,
  label: { lon: 103.95, lat: 10.20, rotation: 0 },
  source: "富国岛：越南最大的岛屿，面积约589平方公里，岛屿超过一半面积为富国国家公园森林覆盖，2010年列入联合国教科文组织世界生物圈保护区候选名录相关研究区域，是越南南部重要的海岛旅游目的地（越南林业局）",
};

const LY_SON_ISLAND: TerrainEntry = {
  id: "ly-son-island",
  nameZh: "李山岛",
  nameEn: "Ly Son Island",
  category: "island",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "推楼火山口", lon: 109.1167, lat: 15.3833, elevation: 169, kind: "island" },
  bbox: [109.06, 15.35, 109.18, 15.42],
  label: { lon: 109.12, lat: 15.38, rotation: 0 },
  source: "李山岛：越南中部广义省近海一座火山岛，约2500万至3000万年前的多期次火山活动形成岛上五座已休眠的火山口，岛屿四周环绕珊瑚礁，是越南重要的大蒜种植地与海岛地质旅游目的地（越南地质矿产总局）",
};

const CU_LAO_CHAM: TerrainEntry = {
  id: "cu-lao-cham",
  nameZh: "占婆岛",
  nameEn: "Cu Lao Cham",
  category: "island",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "占婆岛", lon: 108.5167, lat: 15.9500, elevation: 5, kind: "island" },
  bbox: [108.46, 15.90, 108.58, 16.02],
  label: { lon: 108.52, lat: 15.96, rotation: 0 },
  source: "占婆岛：秋盆河入海口下游的一组岛屿，2009年“占婆岛-会安”生物圈保护区列入联合国教科文组织世界生物圈保护区名录，周边海域珊瑚礁与河口生态系统交汇，生物多样性丰富（UNESCO/越南林业局）",
};

const HA_LONG_BAY: TerrainEntry = {
  id: "ha-long-bay",
  nameZh: "下龙湾",
  nameEn: "Ha Long Bay",
  category: "coast",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "斗鸡石", lon: 107.0667, lat: 20.9101, elevation: 15, kind: "escarpment" },
  bbox: [106.95, 20.80, 107.55, 21.05],
  viewScale: 1.3,
  label: { lon: 107.20, lat: 20.90, rotation: 0 },
  source: "下龙湾：越南东北部海域一处淹没型喀斯特海湾，海域面积约1553平方公里，散布约1600座石灰岩塔状岛屿，石灰岩地层沉积始于约5亿年前，经构造抬升与数百万年海蚀溶蚀塑造出如今的塔峰群岛景观，1994年因地质地貌价值、2000年因景观美学价值两次列入联合国教科文组织世界遗产名录（UNESCO）",
};

const MUI_NE_DUNES: TerrainEntry = {
  id: "mui-ne-dunes",
  nameZh: "美奈沙丘",
  nameEn: "Mui Ne Dunes",
  category: "coast",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "红沙丘", lon: 108.2833, lat: 10.9333, elevation: 20, kind: "dune" },
  bbox: [108.20, 10.88, 108.38, 10.98],
  label: { lon: 108.29, lat: 10.93, rotation: 0 },
  source: "美奈沙丘：越南南中部沿海一片红色与白色沙丘群，由长期盛行风搬运沿岸沙粒堆积而成，红沙丘因沙粒中氧化铁矿物含量较高而呈现橙红色，是越南沿海少见的大范围风成沙丘地貌（越南国家旅游局）",
};

const NHA_TRANG_BAY: TerrainEntry = {
  id: "nha-trang-bay",
  nameZh: "芽庄湾",
  nameEn: "Nha Trang Bay",
  category: "coast",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "琴石岬", lon: 109.1922, lat: 12.2444, elevation: 15, kind: "escarpment" },
  bbox: [109.13, 12.15, 109.28, 12.32],
  label: { lon: 109.20, lat: 12.24, rotation: 0 },
  source: "芽庄湾：越南南中部沿海一处开阔海湾，湾内散布多座岛屿与珊瑚礁，琴石岬一带的花岗岩巨石经长期风化呈现出层叠交错的自然纹理，是越南重要的潜水与海湾旅游目的地（越南国家旅游局）",
};

const BA_BE_LAKE: TerrainEntry = {
  id: "ba-be-lake",
  nameZh: "巴别湖",
  nameEn: "Ba Be Lake",
  category: "lake",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "巴别湖", lon: 105.6167, lat: 22.4000, elevation: 178, kind: "lake" },
  bbox: [105.55, 22.35, 105.68, 22.45],
  label: { lon: 105.62, lat: 22.40, rotation: 0 },
  source: "巴别湖：越南北部一处天然淡水湖，实际由三段相连水域组成，四周环绕石灰岩崖壁与常绿林，湖区海拔约178米，是越南面积最大的天然湖泊之一，1992年设为国家公园（越南林业局）",
};

const LAK_LAKE: TerrainEntry = {
  id: "lak-lake",
  nameZh: "拉克湖",
  nameEn: "Lak Lake",
  category: "lake",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "拉克湖", lon: 108.1667, lat: 12.4333, elevation: 420, kind: "lake" },
  bbox: [108.11, 12.39, 108.22, 12.48],
  label: { lon: 108.17, lat: 12.43, rotation: 0 },
  source: "拉克湖：西原高原多乐省境内一处天然淡水湖，距邦美蜀市中心约55公里，湖区周边生态系统丰富，栖息有多种列入越南濒危物种红皮书的动植物（越南农业与农村发展部）",
};

const RED_RIVER: TerrainEntry = {
  id: "red-river",
  nameZh: "红河",
  nameEn: "Red River",
  category: "river",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "河内", lon: 105.8342, lat: 21.0278, elevation: 10, kind: "city" },
  bbox: [102.10, 20.90, 105.90, 22.90],
  axis: [[102.15, 22.85], [105.85, 21.02]],
  viewScale: 1.4,
  label: { lon: 104.00, lat: 22.00, rotation: -30 },
  source: "红河：发源于中国云南，流经越南西北部后于河内附近汇入越南平原水系，全长约1149公里（越南境内约510公里），河水因携带大量红色泥沙而得名，是越南北部最主要的河流水系（越南自然资源与环境部）",
};

const MEKONG_RIVER_VN: TerrainEntry = {
  id: "mekong-river-vn",
  nameZh: "湄公河（越南段）",
  nameEn: "Mekong River (Vietnam)",
  category: "river",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "美湫", lon: 106.3600, lat: 10.3600, elevation: 3, kind: "city" },
  bbox: [105.60, 9.90, 106.70, 10.85],
  axis: [[105.65, 10.75], [106.65, 10.05]],
  viewScale: 1.3,
  label: { lon: 106.10, lat: 10.40, rotation: -20 },
  source: "湄公河越南段：湄公河在越南境内分为前江、后江两大支流，河网密布、支汊纵横，美湫一带是越南南部重要的河运枢纽，河流最终在越南南部沿海多个入海口分流入海（越南自然资源与环境部）",
};

const PERFUME_RIVER: TerrainEntry = {
  id: "perfume-river",
  nameZh: "香江",
  nameEn: "Perfume River",
  category: "river",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "顺化", lon: 107.5909, lat: 16.4637, elevation: 10, kind: "city" },
  bbox: [107.45, 16.20, 107.75, 16.55],
  axis: [[107.50, 16.25], [107.68, 16.52]],
  label: { lon: 107.58, lat: 16.38, rotation: -60 },
  source: "香江：发源于长山山脉，流经越南古都顺化后注入沿海潟湖，因流经区域森林中桂皮与药草落入河中使河水带有淡淡香气而得名，阮朝皇城与多座皇陵沿江分布（越南文化体育与旅游部）",
};

const TRANG_AN_LANDSCAPE_COMPLEX: TerrainEntry = {
  id: "trang-an-landscape-complex",
  nameZh: "长安名胜群",
  nameEn: "Trang An Landscape Complex",
  category: "valley",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "长安溶洞群", lon: 105.9167, lat: 20.2500, elevation: 15, kind: "gorge" },
  bbox: [105.85, 20.20, 105.98, 20.30],
  label: { lon: 105.92, lat: 20.25, rotation: 0 },
  source: "长安名胜群：宁平省境内一片喀斯特塔峰与地下水道交织的谷地，面积约6226公顷，石灰岩地貌演化史逾2.5亿年，谷内密布可乘小舟穿行的水下溶洞，考古发现证实这一区域连续约3万年的人类适应环境活动遗迹，2014年作为越南首个文化与自然混合遗产列入联合国教科文组织世界遗产名录（UNESCO）",
};

const TU_SAN_CANYON: TerrainEntry = {
  id: "tu-san-canyon",
  nameZh: "图产峡谷",
  nameEn: "Tu San Canyon",
  category: "gorge",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "马匹粮山口", lon: 105.4167, lat: 23.2333, elevation: 1500, kind: "pass" },
  bbox: [105.35, 23.18, 105.48, 23.29],
  label: { lon: 105.42, lat: 23.24, rotation: 0 },
  source: "图产峡谷：同文喀斯特高原上一处东南亚地区最深的峡谷之一，深度约700至800米，泥河沿石灰岩断裂带长期下切侵蚀塑造出两岸近乎垂直的崖壁，马匹粮山口是俯瞰峡谷全貌的经典观景点（UNESCO/越南地质矿产总局）",
};

const BAN_GIOC_WATERFALL: TerrainEntry = {
  id: "ban-gioc-waterfall",
  nameZh: "板约瀑布",
  nameEn: "Ban Gioc Waterfall",
  category: "gorge",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "板约瀑布", lon: 106.7275, lat: 22.8503, elevation: 200, kind: "gorge" },
  bbox: [106.68, 22.82, 106.78, 22.88],
  label: { lon: 106.73, lat: 22.85, rotation: 0 },
  source: "板约瀑布：归春河流经中越边境处一处宽约300米、落差约30米的瀑布，是亚洲规模最大的跨境瀑布，也是越南境内规模最大的瀑布，瀑布沿河流天然形成的边境线一分为二，两岸石灰岩崖壁与喀斯特地貌交相辉映（越南自然资源与环境部）",
};

const RED_RIVER_DELTA: TerrainEntry = {
  id: "red-river-delta",
  nameZh: "红河三角洲",
  nameEn: "Red River Delta",
  category: "plain",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "海防", lon: 106.6881, lat: 20.8449, elevation: 3, kind: "city" },
  bbox: [105.60, 20.35, 107.10, 21.40],
  viewScale: 1.4,
  label: { lon: 106.20, lat: 20.70, rotation: 0 },
  source: "红河三角洲：红河及其支流泥沙长期沉积形成的三角形冲积平原，面积约1.5万平方公里，是越南两大农业核心区之一，地势低平、多数区域海拔不足3米，河内与海防两座城市均建于三角洲之上（越南自然资源与环境部）",
};

const MEKONG_DELTA: TerrainEntry = {
  id: "mekong-delta",
  nameZh: "湄公河三角洲",
  nameEn: "Mekong Delta",
  category: "plain",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "芹苴", lon: 105.7469, lat: 10.0452, elevation: 3, kind: "city" },
  bbox: [104.70, 8.60, 106.80, 10.90],
  viewScale: 1.6,
  label: { lon: 105.60, lat: 9.80, rotation: 0 },
  source: "湄公河三角洲：湄公河入海前在越南南部形成的巨大冲积平原，面积约3.9万平方公里，是世界最大的河流三角洲之一，密布的河汊与人工运河网络构成独特的水乡地貌，是越南最重要的稻米与水产养殖产区（越南农业与农村发展部）",
};

const NGU_HANH_SON: TerrainEntry = {
  id: "ngu-hanh-son",
  nameZh: "五行山",
  nameEn: "Ngu Hanh Son (Marble Mountains)",
  category: "hills",
  regionId: "asia",
  country: "vietnam",
  landmark: { name: "水山", lon: 108.2606, lat: 16.0044, elevation: 106, kind: "peak" },
  bbox: [108.24, 15.98, 108.28, 16.02],
  label: { lon: 108.26, lat: 16.00, rotation: 0 },
  source: "五行山：岘港以南沿海一组由五座大理岩丘体组成的低矮山丘，分别以金木水火土五行命名，水山为其中最高者，山体内分布多处天然溶洞与阮朝以来的佛教、印度教石窟造像，是越南中部重要的宗教与地质旅游地（越南文化体育与旅游部）",
};

// ============================================================
// 亚洲 / 泰国
// 东南亚次区域首个国家；不涉及南海主权争议岛屿（泰国无南海领土主张）；
// 湄公河构成泰国-老挝界河段中性表述、不涉主权；南部宋卡/北大年/也拉/
// 陶公府等有安全局势的府份不收录地形
// ============================================================

const DOI_INTHANON: TerrainEntry = {
  id: "doi-inthanon",
  nameZh: "茵他侬山",
  nameEn: "Doi Inthanon",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "茵他侬山主峰", lon: 98.4867, lat: 18.5883, elevation: 2565, kind: "peak" },
  bbox: [98.40, 18.50, 98.60, 18.65],
  label: { lon: 98.49, lat: 18.58, rotation: 0 },
  source: "茵他侬山：泰国最高峰(2565米)，山体为花岗岩岩基，是泰国北部丹伦他吾山脉（缅甸掸邦高原向南延伸的一部分）的最高点，以已故清迈王因他哇洛拉萨命名，1972年设为国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const DOI_LUANG_CHIANG_DAO: TerrainEntry = {
  id: "doi-luang-chiang-dao",
  nameZh: "清道山",
  nameEn: "Doi Luang Chiang Dao",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "清道山主峰", lon: 98.9186, lat: 19.4058, elevation: 2138, kind: "peak" },
  bbox: [98.85, 19.35, 99.00, 19.45],
  label: { lon: 98.92, lat: 19.40, rotation: 0 },
  source: "清道山：泰国第三高峰(2138米)，山体为石灰岩喀斯特地貌，泰国境内规模最大的溶洞系统之一清道岩洞就发育于山体之中，2021年清道山生物圈保护区列入联合国教科文组织人与生物圈计划（UNESCO）",
};

const DOI_SUTHEP_PUI: TerrainEntry = {
  id: "doi-suthep-pui",
  nameZh: "素贴山",
  nameEn: "Doi Suthep",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "素贴寺", lon: 98.9219, lat: 18.8047, elevation: 1676, kind: "peak" },
  bbox: [98.86, 18.76, 98.98, 18.85],
  label: { lon: 98.92, lat: 18.80, rotation: 0 },
  source: "素贴山：清迈城西侧一座海拔1676米的山峰，山腰始建于14世纪的素贴寺是泰国北部最重要的佛教朝圣地之一，1981年山体与相邻的普伊山共同设为国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const KHAO_LUANG: TerrainEntry = {
  id: "khao-luang",
  nameZh: "考銮山",
  nameEn: "Khao Luang",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "考銮山主峰", lon: 99.7833, lat: 8.4667, elevation: 1780, kind: "peak" },
  bbox: [99.70, 8.38, 99.87, 8.55],
  label: { lon: 99.78, lat: 8.47, rotation: 0 },
  source: "考銮山：泰国南部半岛最高峰(1780米)，位于洛坤府境内，山体为花岗岩构成，1974年设为国家公园，湿润的山地气候使其成为泰国南部重要的水果种植区（泰国国家公园、野生动物与植物保护厅）",
};

const KHAO_YAI: TerrainEntry = {
  id: "khao-yai",
  nameZh: "考艾山",
  nameEn: "Khao Yai",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "考隆峰", lon: 101.3725, lat: 14.4386, elevation: 1351, kind: "peak" },
  bbox: [101.15, 14.30, 101.55, 14.55],
  label: { lon: 101.35, lat: 14.42, rotation: 0 },
  source: "考艾山：泰国境内一片跨越呵叻高原西南边缘的山地森林，1962年设为泰国第一座国家公园，2005年“丹辇拉扎-考艾森林群”作为东南亚大陆现存面积最大的常绿林之一列入联合国教科文组织世界遗产名录（UNESCO/泰国国家公园、野生动物与植物保护厅）",
};

const THUNG_YAI_HUAI_KHA_KHAENG: TerrainEntry = {
  id: "thung-yai-huai-kha-khaeng",
  nameZh: "通艾-惠凯野生动物保护区",
  nameEn: "Thung Yai–Huai Kha Khaeng Wildlife Sanctuaries",
  category: "mountain_system",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "惠凯保护区中心", lon: 99.30, lat: 15.50, elevation: 400, kind: "city" },
  bbox: [98.85, 14.90, 99.55, 16.00],
  viewScale: 1.4,
  label: { lon: 99.20, lat: 15.40, rotation: 0 },
  source: "通艾-惠凯野生动物保护区：泰国西部沿缅甸边境一片山地森林，面积约622200公顷，是中南半岛现存面积最大的自然保护区，1991年列入联合国教科文组织世界遗产名录，栖息有泰国境内约77%的大型哺乳动物种群（UNESCO）",
};

const KHORAT_PLATEAU: TerrainEntry = {
  id: "khorat-plateau",
  nameZh: "呵叻高原",
  nameEn: "Khorat Plateau",
  category: "plateau",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "呵叻（那空叻差是玛）", lon: 102.0977, lat: 14.9799, elevation: 190, kind: "city" },
  bbox: [101.00, 14.00, 105.60, 18.50],
  viewScale: 2.0,
  label: { lon: 103.30, lat: 16.20, rotation: 0 },
  source: "呵叻高原：泰国东北部一片广袤的砂岩台地，面积约占泰国国土三分之一，是泰国传统“依善”地区的地理主体，高原边缘的碧差汶山脉与佩差邦山脉将其与中部平原分隔（泰国国土发展局）",
};

const PHU_KRADUENG: TerrainEntry = {
  id: "phu-kradueng",
  nameZh: "普卡东山",
  nameEn: "Phu Kradueng",
  category: "plateau",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "普卡东山顶台地", lon: 101.8167, lat: 16.8667, elevation: 1250, kind: "peak" },
  bbox: [101.72, 16.80, 101.90, 16.93],
  label: { lon: 101.82, lat: 16.87, rotation: 0 },
  source: "普卡东山：泰国东北部黎府境内一座心形砂岩桌山，山顶台地面积约60平方公里、平均海拔约1250米，四周为陡峭崖壁环绕，基岩为侏罗纪呵叻群砂岩，1962年设为泰国第二座国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const SIMILAN_ISLANDS: TerrainEntry = {
  id: "similan-islands",
  nameZh: "斯米兰群岛",
  nameEn: "Similan Islands",
  category: "island",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "斯米兰主岛", lon: 97.6400, lat: 8.6500, elevation: 0, kind: "island" },
  bbox: [97.58, 8.55, 97.72, 8.78],
  label: { lon: 97.65, lat: 8.66, rotation: 0 },
  source: "斯米兰群岛：安达曼海一处由11座岛屿组成的花岗岩群岛，距海岸约70公里，陆地面积约26平方公里，海底巨型花岗岩巨石与水下岩柱是中生代缅甸板块与巽他板块俯冲事件的遗留地貌，1982年设为国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const SURIN_ISLANDS: TerrainEntry = {
  id: "surin-islands",
  nameZh: "苏林群岛",
  nameEn: "Surin Islands",
  category: "island",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "苏林主岛", lon: 97.8667, lat: 9.4667, elevation: 0, kind: "island" },
  bbox: [97.80, 9.40, 97.95, 9.55],
  label: { lon: 97.87, lat: 9.47, rotation: 0 },
  source: "苏林群岛：安达曼海邻近缅甸边境的一组由5座花岗岩岛屿组成的群岛，1981年设为国家海洋公园，是泰国境内莫肯海上游牧民族传统聚居的海域之一（泰国国家公园、野生动物与植物保护厅）",
};

const KO_TARUTAO: TerrainEntry = {
  id: "ko-tarutao",
  nameZh: "达鲁涛岛",
  nameEn: "Ko Tarutao",
  category: "island",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "达鲁涛主岛", lon: 99.6667, lat: 6.6667, elevation: 0, kind: "island" },
  bbox: [99.55, 6.50, 99.85, 6.90],
  viewScale: 1.3,
  label: { lon: 99.68, lat: 6.68, rotation: 0 },
  source: "达鲁涛岛：泰国最南端沿海的一座石灰岩与砂岩岛屿，是1974年设立的泰国首座国家海洋公园的主岛，岛上保留大片原始雨林与石灰岩溶洞（泰国国家公园、野生动物与植物保护厅）",
};

const PHI_PHI_ISLANDS: TerrainEntry = {
  id: "phi-phi-islands",
  nameZh: "皮皮群岛",
  nameEn: "Phi Phi Islands",
  category: "island",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "大皮皮岛", lon: 98.7784, lat: 7.7407, elevation: 0, kind: "island" },
  bbox: [98.72, 7.67, 98.85, 7.80],
  label: { lon: 98.78, lat: 7.74, rotation: 0 },
  source: "皮皮群岛：安达曼海一组由二叠纪石灰岩构成的岛屿，大皮皮岛与小皮皮岛之间由一道狭窄的沙洲相连，形成蝴蝶结状的地貌轮廓，玛雅湾是岛群中最具代表性的封闭式石灰岩海湾（泰国国家公园、野生动物与植物保护厅）",
};

const AO_PHANG_NGA: TerrainEntry = {
  id: "ao-phang-nga",
  nameZh: "攀牙湾",
  nameEn: "Ao Phang Nga",
  category: "coast",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "宾坎岩（“007岛”）", lon: 98.5000, lat: 8.2833, elevation: 20, kind: "escarpment" },
  bbox: [98.40, 8.15, 98.60, 8.40],
  label: { lon: 98.50, lat: 8.28, rotation: 0 },
  source: "攀牙湾：泰国南部安达曼海一处约400平方公里的淹没型喀斯特海湾，二叠纪拉查布里石灰岩地层在末次冰期后海平面上升过程中被淹没，露出海面的部分形成陡峭孤立的塔状岩岛，1981年设为国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const KRABI_KARST_COAST: TerrainEntry = {
  id: "krabi-karst-coast",
  nameZh: "甲米喀斯特海岸",
  nameEn: "Krabi Karst Coast",
  category: "coast",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "莱利岬角", lon: 98.8372, lat: 8.0114, elevation: 30, kind: "escarpment" },
  bbox: [98.75, 7.95, 98.92, 8.10],
  label: { lon: 98.83, lat: 8.02, rotation: 0 },
  source: "甲米喀斯特海岸：安达曼海沿岸一段以陡峭石灰岩塔状崖壁为特征的海岸线，莱利岬角三面被垂直的石灰岩崖壁环绕、仅能经海路抵达，是攀岩与深水抱石运动的知名地点（泰国国家公园、野生动物与植物保护厅）",
};

const KHAO_SAM_ROI_YOT: TerrainEntry = {
  id: "khao-sam-roi-yot",
  nameZh: "三百峰山",
  nameEn: "Khao Sam Roi Yot",
  category: "coast",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "帕耶那空岩洞", lon: 99.9622, lat: 12.1958, elevation: 50, kind: "escarpment" },
  bbox: [99.90, 12.10, 100.05, 12.30],
  label: { lon: 99.96, lat: 12.20, rotation: 0 },
  source: "三百峰山：泰国湾沿岸一列由约300座石灰岩山峰组成的山地，“三百峰”由此得名，最高峰海拔605米，山地西北角的通三百峰淡水沼泽是泰国境内面积最大的湿地之一，1966年设为泰国首座海洋型国家公园（泰国国家公园、野生动物与植物保护厅）",
};

const THUNG_SALAENG_LUANG: TerrainEntry = {
  id: "thung-salaeng-luang",
  nameZh: "通萨兰銮草原",
  nameEn: "Thung Salaeng Luang",
  category: "grassland",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "通萨兰銮草原核心区", lon: 100.8333, lat: 16.8000, elevation: 700, kind: "grassland" },
  bbox: [100.65, 16.65, 101.05, 17.00],
  viewScale: 1.3,
  label: { lon: 100.85, lat: 16.82, rotation: 0 },
  source: "通萨兰銮草原：泰国中北部彭世洛府与碧差汶府交界处一片海拔300至1028米的高原草甸，被称为“泰国的稀树草原”，开阔草地与松林、常绿林交错分布，是泰国少见的大面积非森林高地植被景观（泰国国家公园、野生动物与植物保护厅）",
};

const CHEOW_LARN_LAKE: TerrainEntry = {
  id: "cheow-larn-lake",
  nameZh: "焦拉湖",
  nameEn: "Cheow Larn Lake",
  category: "lake",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "叻差巴帕水坝", lon: 98.8333, lat: 8.9000, elevation: 100, kind: "lake" },
  bbox: [98.60, 8.70, 98.95, 9.10],
  viewScale: 1.2,
  label: { lon: 98.75, lat: 8.90, rotation: 0 },
  source: "焦拉湖：1987年拦截克隆桑河修建叻差巴帕水坝形成的人工水库，湖区位于考索国家公园南缘，数百座石灰岩孤峰从湖面耸立而起，形成喀斯特地貌被淹没后的独特库区景观（泰国国家公园、野生动物与植物保护厅）",
};

const BUENG_BORAPHET: TerrainEntry = {
  id: "bueng-boraphet",
  nameZh: "汶拉帕沼泽湖",
  nameEn: "Bueng Boraphet",
  category: "lake",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "汶拉帕沼泽湖", lon: 100.1667, lat: 15.6667, elevation: 25, kind: "lake" },
  bbox: [100.05, 15.55, 100.30, 15.80],
  label: { lon: 100.18, lat: 15.68, rotation: 0 },
  source: "汶拉帕沼泽湖：泰国中部南河与平河汇流处附近一片天然淡水沼泽湖，面积约224平方公里，是泰国中部面积最大的淡水湿地，1930年经筑坝后形成如今的开阔水面，是重要的候鸟越冬地（泰国国家公园、野生动物与植物保护厅）",
};

const CHAO_PHRAYA_RIVER: TerrainEntry = {
  id: "chao-phraya-river",
  nameZh: "湄南河",
  nameEn: "Chao Phraya River",
  category: "river",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "北榄坡（那空沙旺）汇流处", lon: 100.1189, lat: 15.6906, elevation: 25, kind: "city" },
  bbox: [99.90, 13.60, 100.30, 15.75],
  axis: [[100.12, 15.69], [100.57, 13.60]],
  viewScale: 1.2,
  label: { lon: 100.30, lat: 14.60, rotation: -85 },
  source: "湄南河：宾河与难河在那空沙旺府汇流后始称湄南河干流，全长约372公里，流经泰国中部平原后在曼谷附近注入泰国湾，是泰国中部平原最主要的河流水系（泰国国土发展局）",
};

const MEKONG_RIVER_TH: TerrainEntry = {
  id: "mekong-river-th",
  nameZh: "湄公河（泰国段）",
  nameEn: "Mekong River (Thailand)",
  category: "river",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "清坎", lon: 101.6667, lat: 17.8975, elevation: 155, kind: "city" },
  bbox: [100.40, 15.20, 104.80, 20.40],
  axis: [[100.45, 20.35], [104.75, 15.30]],
  viewScale: 1.6,
  label: { lon: 102.50, lat: 18.00, rotation: -60 },
  source: "湄公河泰国段：湄公河自缅甸、老挝三国交界处进入后，沿泰国东北部边境构成泰国与老挝之间约976公里的界河，最终在泰国东北端离境流入老挝境内，清坎一带的河段以险滩密布著称（泰国国土发展局）",
};

const MUN_RIVER: TerrainEntry = {
  id: "mun-river",
  nameZh: "文河",
  nameEn: "Mun River",
  category: "river",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "乌汶叻差他尼", lon: 104.8564, lat: 15.2286, elevation: 125, kind: "city" },
  bbox: [102.00, 14.60, 105.00, 15.60],
  axis: [[102.05, 14.95], [104.85, 15.23]],
  viewScale: 1.3,
  label: { lon: 103.50, lat: 15.10, rotation: -10 },
  source: "文河：发源于呵叻高原西南部佩差邦山脉，向东流贯呵叻高原南部，是泰国依善地区最主要的河流，在乌汶叻差他尼附近汇入湄公河，沿线接纳支流希河后水量显著增大（泰国国土发展局）",
};

const KWAI_RIVER_VALLEY: TerrainEntry = {
  id: "kwai-river-valley",
  nameZh: "桂河谷地",
  nameEn: "Kwai River Valley",
  category: "valley",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "桂河大桥", lon: 99.5011, lat: 14.0392, elevation: 30, kind: "city" },
  bbox: [98.90, 13.90, 99.60, 14.60],
  axis: [[99.05, 14.55], [99.53, 14.02]],
  viewScale: 1.2,
  label: { lon: 99.20, lat: 14.30, rotation: -30 },
  source: "桂河谷地：夸伊诺伊河切穿泰国西部丹伦他吾山脉南段形成的河谷地带，二战期间日军强征战俘与劳工修建的泰缅铁路沿谷地而建，1943年建成的桂河大桥是这段历史广为人知的见证（泰国国家档案馆/泰国国家公园、野生动物与植物保护厅）",
};

const ERAWAN_WATERFALL: TerrainEntry = {
  id: "erawan-waterfall",
  nameZh: "伊拉旺瀑布",
  nameEn: "Erawan Waterfall",
  category: "gorge",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "伊拉旺瀑布", lon: 99.1500, lat: 14.3667, elevation: 200, kind: "gorge" },
  bbox: [99.08, 14.32, 99.22, 14.42],
  label: { lon: 99.15, lat: 14.37, rotation: 0 },
  source: "伊拉旺瀑布：夸伊诺伊河支流沿石灰岩阶地跌落形成的七级阶梯状瀑布，各级瀑布之间形成天然的碧绿色石灰华水潭，1975年设为国家公园，是泰国西部最具代表性的瀑布地貌之一（泰国国家公园、野生动物与植物保护厅）",
};

const SAM_PHAN_BOK: TerrainEntry = {
  id: "sam-phan-bok",
  nameZh: "三千崩",
  nameEn: "Sam Phan Bok",
  category: "gorge",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "三千崩河床", lon: 105.4167, lat: 15.3333, elevation: 105, kind: "gorge" },
  bbox: [105.35, 15.28, 105.48, 15.38],
  label: { lon: 105.42, lat: 15.33, rotation: 0 },
  source: "三千崩：湄公河干流河床上一片规模最大的砂岩蚀余地貌，“三千崩”意为三千座浅坑，旱季水位下降后河床上密布的圆形壶穴与沟槽出露水面，是湄公河季节性水位变化侵蚀砂岩形成的典型地貌，仅在12月至次年4月旱季可见（泰国国家公园、野生动物与植物保护厅）",
};

const CHAO_PHRAYA_DELTA: TerrainEntry = {
  id: "chao-phraya-delta",
  nameZh: "湄南河三角洲",
  nameEn: "Chao Phraya Delta",
  category: "plain",
  regionId: "asia",
  country: "thailand",
  landmark: { name: "曼谷", lon: 100.5018, lat: 13.7563, elevation: 2, kind: "city" },
  bbox: [99.90, 13.30, 100.90, 14.40],
  viewScale: 1.4,
  label: { lon: 100.30, lat: 13.80, rotation: 0 },
  source: "湄南河三角洲：湄南河入海口处发育的冲积三角洲低地，泰国首都曼谷即建于三角洲之上，部分区域海拔不足2米，长期面临地面沉降与海平面上升的双重压力，是泰国人口最密集、经济最发达的区域（泰国国土发展局）",
};

// ============================================================
// 亚洲 / 韩国
// 东亚次区域第三个国家（中国、日本之后）；独岛/竹岛主权争议岛屿不收录，
// 与日本注册表的排除原则对称；东海/日本海命名争议一律回避海域专有名称，
// 只用"朝鲜半岛以东海域"等中性方位表述
// ============================================================

const TAEBAEK_MOUNTAINS: TerrainEntry = {
  id: "taebaek-mountains",
  nameZh: "太白山脉",
  nameEn: "Taebaek Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "太白山天祭坛", lon: 128.9161, lat: 37.0958, elevation: 1567, kind: "peak" },
  bbox: [128.55, 36.95, 129.15, 38.15],
  axis: [[129.05, 38.10], [128.95, 37.00]],
  viewScale: 1.2,
  label: { lon: 128.95, lat: 37.55, rotation: -80 },
  source: "太白山脉：沿朝鲜半岛东部纵贯南北的骨架山脉，是韩国汉江与洛东江两大水系的共同发源地，主峰太白山(1567米)山顶天祭坛自古为祭天场所（韩国国立公园公团/韩国地质资源研究院KIGAM）",
};

const SEORAKSAN: TerrainEntry = {
  id: "seoraksan",
  nameZh: "雪岳山",
  nameEn: "Seoraksan",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "大青峰", lon: 128.4657, lat: 38.1191, elevation: 1708, kind: "peak" },
  bbox: [128.35, 38.05, 128.60, 38.20],
  label: { lon: 128.47, lat: 38.12, rotation: 0 },
  source: "雪岳山：韩国第三高峰(1708米)，花岗岩峰林与深切峡谷发育典型，1965年设为天然纪念保护区，1982年列入联合国教科文组织生物圈保护区（韩国国立公园公团/UNESCO）",
};

const JIRISAN: TerrainEntry = {
  id: "jirisan",
  nameZh: "智异山",
  nameEn: "Jirisan",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "天王峰", lon: 127.7306, lat: 35.3372, elevation: 1915, kind: "peak" },
  bbox: [127.40, 35.15, 127.85, 35.45],
  label: { lon: 127.65, lat: 35.30, rotation: 0 },
  source: "智异山：韩国内陆最高峰(1915米)，1967年设为韩国第一座国家公园，山体横跨全罗南道、全罗北道、庆尚南道三道（韩国国立公园公团）",
};

const SONGNISAN: TerrainEntry = {
  id: "songnisan",
  nameZh: "俗离山",
  nameEn: "Songnisan",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "天皇峰", lon: 127.8670, lat: 36.5406, elevation: 1058, kind: "peak" },
  bbox: [127.75, 36.45, 127.95, 36.60],
  label: { lon: 127.85, lat: 36.53, rotation: 0 },
  source: "俗离山：韩国中部一座花岗岩与片麻岩构成的孤立山体，主峰天皇峰海拔1058米，1970年设为韩国第六座国家公园，山麓法住寺为韩国重要佛教文化遗产（韩国国立公园公团）",
};

const DEOGYUSAN: TerrainEntry = {
  id: "deogyusan",
  nameZh: "德裕山",
  nameEn: "Deogyusan",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "香积峰", lon: 127.7486, lat: 35.8614, elevation: 1614, kind: "peak" },
  bbox: [127.60, 35.75, 127.85, 35.95],
  label: { lon: 127.73, lat: 35.85, rotation: 0 },
  source: "德裕山：韩国第四高峰(1614米)，1975年设为韩国第十座国家公园，主峰香积峰周边保存亚高山针叶林生态，山麓茂朱一带建有韩国最早的高山滑雪场（韩国国立公园公团）",
};

const HALLASAN: TerrainEntry = {
  id: "hallasan",
  nameZh: "汉拿山",
  nameEn: "Hallasan",
  category: "mountain_system",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "白鹿潭", lon: 126.5292, lat: 33.3617, elevation: 1947, kind: "peak" },
  bbox: [126.42, 33.28, 126.62, 33.45],
  label: { lon: 126.53, lat: 33.36, rotation: 0 },
  source: "汉拿山：韩国最高峰(1947米)，是济州岛中心的盾状火山，山顶白鹿潭为破火山口积水形成的火口湖，2007年\"济州火山岛与熔岩洞\"列入联合国教科文组织世界自然遗产名录（UNESCO/韩国国立公园公团）",
};

const JEJU_ISLAND: TerrainEntry = {
  id: "jeju-island",
  nameZh: "济州岛",
  nameEn: "Jeju Island",
  category: "island",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "城山日出峰", lon: 126.9425, lat: 33.4587, elevation: 182, kind: "peak" },
  bbox: [126.15, 33.10, 126.95, 33.57],
  viewScale: 1.4,
  label: { lon: 126.55, lat: 33.25, rotation: 0 },
  source: "济州岛：韩国最大岛屿，由约180万至25万年前反复的玄武岩火山活动堆积而成，岛上分布368座\"오름\"寄生火山锥，城山日出峰是一座突入海中的水下凝灰岩火山锥，2010年整岛获评联合国教科文组织世界地质公园（UNESCO）",
};

const ULLEUNGDO: TerrainEntry = {
  id: "ulleungdo",
  nameZh: "郁陵岛",
  nameEn: "Ulleungdo",
  category: "island",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "圣人峰", lon: 130.8667, lat: 37.5083, elevation: 984, kind: "peak" },
  bbox: [130.78, 37.45, 130.93, 37.57],
  label: { lon: 130.86, lat: 37.50, rotation: 0 },
  source: "郁陵岛：朝鲜半岛以东海域一座第四纪火山岛，是一座从洋底隆起约3000米的层状火山露出海面的部分，全新世早期纳里破火山口的一次爆炸性喷发曾在日本本州中部沉积火山灰，岛上纳里盆地保留有完整的破火山口地貌（Global Volcanism Program/韩国地质资源研究院）",
};

const HAEAN_BASIN: TerrainEntry = {
  id: "haean-basin",
  nameZh: "海安盆地（\"面盆\"）",
  nameEn: "Haean Basin (\"Punchbowl\")",
  category: "basin",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "海安里", lon: 128.1075, lat: 38.2967, elevation: 450, kind: "city" },
  bbox: [128.03, 38.24, 128.20, 38.35],
  label: { lon: 128.11, lat: 38.29, rotation: 0 },
  source: "海安盆地：江原道杨口郡一处近椭圆形侵蚀盆地，中心为侏罗纪花岗岩、边缘为前寒武纪变质岩，二者抗风化能力的差异被认为是盆地成因，盆地直径约5公里，四周山脊高出盆底500至800米，朝鲜战争期间联合国军因其形似大碗将其称为\"Punchbowl\"（韩国地质资源研究院KIGAM）",
};

const YONGNEUP_DAEAMSAN: TerrainEntry = {
  id: "yongneup-daeamsan",
  nameZh: "大岩山龙沼湿地",
  nameEn: "Yongneup, Mt. Daeam",
  category: "basin",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "龙沼", lon: 128.1333, lat: 38.2333, elevation: 1280, kind: "lake" },
  bbox: [128.10, 38.21, 128.16, 38.26],
  label: { lon: 128.13, lat: 38.24, rotation: 0 },
  source: "大岩山龙沼湿地：大岩山(1340米)西北坡海拔1280米处一片面积约7490平方米的高山泥炭沼泽，是韩国境内唯一保存泥炭层的高位沼泽，1997年成为韩国首个被列入《拉姆萨尔公约》的湿地（韩国环境部/拉姆萨尔公约秘书处）",
};

const CHEORWON_LAVA_PLATEAU: TerrainEntry = {
  id: "cheorwon-lava-plateau",
  nameZh: "铁原熔岩台地",
  nameEn: "Cheorwon Lava Plateau",
  category: "plateau",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "孤石亭", lon: 127.1930, lat: 38.1467, elevation: 200, kind: "escarpment" },
  bbox: [127.05, 38.08, 127.35, 38.25],
  viewScale: 1.3,
  label: { lon: 127.20, lat: 38.16, rotation: 0 },
  source: "铁原熔岩台地：第四纪玄武岩熔岩沿古河谷流淌约95公里后冷凝堆积形成的大范围熔岩台地，熔岩源出朝鲜半岛北部一座休眠火山，汉滩江切穿台地形成的峡谷发育有典型的柱状节理，2020年\"汉滩江熔岩地貌\"列入联合国教科文组织世界地质公园（UNESCO/汉滩江地质公园）",
};

const CHARYEONG_MOUNTAINS: TerrainEntry = {
  id: "charyeong-mountains",
  nameZh: "车岭山脉",
  nameEn: "Charyeong Mountains",
  category: "hills",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "七甲山", lon: 126.7333, lat: 36.4667, elevation: 561, kind: "peak" },
  bbox: [126.55, 36.30, 127.05, 36.65],
  axis: [[126.60, 36.60], [127.00, 36.35]],
  label: { lon: 126.80, lat: 36.48, rotation: -30 },
  source: "车岭山脉：贯穿忠清南道的一条低矮古老山地，历经长期侵蚀夷平，山势浑圆低缓，历史上是韩国传统地理区划\"湖西\"（忠清道）与\"湖南\"（全罗道）的天然分界，主峰七甲山海拔561米（韩国国土地理院）",
};

const WOLCHULSAN: TerrainEntry = {
  id: "wolchulsan",
  nameZh: "月出山",
  nameEn: "Wolchulsan",
  category: "inselberg",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "天皇峰", lon: 126.6961, lat: 34.7561, elevation: 809, kind: "peak" },
  bbox: [126.63, 34.72, 126.76, 34.79],
  label: { lon: 126.70, lat: 34.76, rotation: 0 },
  source: "月出山：从周边平地陡然拔起的一座花岗岩孤峰群，1988年设为韩国面积最小的国家公园(56.6平方公里)，主峰天皇峰海拔809米，山间跨越两峰之间的云桥为标志性景观（韩国国立公园公团）",
};

const SUNCHEON_BAY_WETLAND: TerrainEntry = {
  id: "suncheon-bay-wetland",
  nameZh: "顺天湾湿地",
  nameEn: "Suncheon Bay Wetland",
  category: "coast",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "龙山展望台", lon: 127.5090, lat: 34.9270, elevation: 100, kind: "escarpment" },
  bbox: [127.46, 34.87, 127.56, 34.96],
  label: { lon: 127.51, lat: 34.91, rotation: 0 },
  source: "顺天湾湿地：由约3.5公里溪流、约22.2平方公里滩涂与约2.3平方公里芦苇荡组成的河口湿地，2006年成为韩国首个列入《拉姆萨尔公约》的滨海湿地，2021年作为\"韩国滩涂\"组成部分列入联合国教科文组织世界自然遗产（UNESCO/拉姆萨尔公约秘书处）",
};

const BYEONSAN_PENINSULA_COAST: TerrainEntry = {
  id: "byeonsan-peninsula-coast",
  nameZh: "边山半岛海岸",
  nameEn: "Byeonsan Peninsula Coast",
  category: "coast",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "采石江", lon: 126.4922, lat: 35.6186, elevation: 10, kind: "escarpment" },
  bbox: [126.42, 35.58, 126.58, 35.68],
  label: { lon: 126.50, lat: 35.62, rotation: 0 },
  source: "边山半岛海岸：韩国唯一兼具山地与海岸景观的国家公园所在地，采石江一带海蚀崖由长期波浪侵蚀层状沉积岩形成，岩层纹理层叠如书册堆叠，1988年设为国家公园（韩国国立公园公团）",
};

const TAEAN_COAST_DUNES: TerrainEntry = {
  id: "taean-coast-dunes",
  nameZh: "泰安海岸沙丘",
  nameEn: "Taean Coast Dunes",
  category: "coast",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "新斗里海岸沙丘", lon: 126.1667, lat: 36.8167, elevation: 5, kind: "dune" },
  bbox: [126.10, 36.75, 126.35, 36.95],
  viewScale: 1.3,
  label: { lon: 126.22, lat: 36.84, rotation: 0 },
  source: "泰安海岸：西海岸一段长约230公里的海岸线，1978年设为国家公园，新斗里一带保存有韩国规模最大的海岸沙丘群，沙丘由长期沿岸流搬运的沙粒堆积而成（韩国国立公园公团）",
};

const HALLYEOHAESANG_MARINE_PARK: TerrainEntry = {
  id: "hallyeohaesang-marine-park",
  nameZh: "闲丽海上国立公园",
  nameEn: "Hallyeohaesang Marine National Park",
  category: "coast",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "闲山岛", lon: 128.4967, lat: 34.7844, elevation: 0, kind: "island" },
  bbox: [127.85, 34.60, 129.10, 35.05],
  viewScale: 1.5,
  label: { lon: 128.40, lat: 34.80, rotation: 0 },
  source: "闲丽海上国立公园：韩国南部沿海一片散布数百座岛屿的多岛海域，1968年设为韩国首座海上国家公园，公园名称取自闲山岛与丽水的合称（韩国国立公园公团）",
};

const DAEGWALLYEONG_HIGHLAND: TerrainEntry = {
  id: "daegwallyeong-highland",
  nameZh: "大关岭高原牧场",
  nameEn: "Daegwallyeong Highland Pastures",
  category: "grassland",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "三阳牧场", lon: 128.7239, lat: 37.6889, elevation: 1140, kind: "pass" },
  bbox: [128.65, 37.63, 128.80, 37.75],
  label: { lon: 128.72, lat: 37.69, rotation: 0 },
  source: "大关岭高原牧场：太白山脉一处海拔约1100至1400米的高山隘口地带，冷凉多风的气候条件使其成为韩国少见的大规模高山草场与风力发电场所在地，三阳牧场为其中规模最大的牧场（韩国国立公园公团/江原道）",
};

const HONAM_PLAIN: TerrainEntry = {
  id: "honam-plain",
  nameZh: "湖南平原",
  nameEn: "Honam Plain",
  category: "plain",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "金堤", lon: 126.8808, lat: 35.8033, elevation: 15, kind: "city" },
  bbox: [126.60, 35.55, 127.15, 36.05],
  viewScale: 1.3,
  label: { lon: 126.85, lat: 35.80, rotation: 0 },
  source: "湖南平原：朝鲜半岛面积最大的平原，面积约3500平方公里，是韩国最重要的稻米产区，金堤地处平原中心，境内古代碧骨堤是朝鲜半岛已知最早的大型蓄水灌溉设施之一（韩国国土地理院/金堤市）",
};

const NAKDONG_ESTUARY_EULSUKDO: TerrainEntry = {
  id: "nakdong-estuary-eulsukdo",
  nameZh: "洛东江河口三角洲（乙淑岛）",
  nameEn: "Nakdong River Estuary (Eulsukdo)",
  category: "plain",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "乙淑岛", lon: 128.9581, lat: 35.0964, elevation: 3, kind: "delta" },
  bbox: [128.88, 35.03, 129.03, 35.16],
  label: { lon: 128.96, lat: 35.10, rotation: 0 },
  source: "洛东江河口三角洲：洛东江注入朝鲜半岛西南沿海处发育的辫状三角洲，河道分汊携带泥沙堆积形成多处沙洲与湿地，乙淑岛是其中最大的一处沙洲，为候鸟迁徙的重要中途停歇地（韩国国立公园公团/洛东江河口生态公园）",
};

const HAN_RIVER: TerrainEntry = {
  id: "han-river",
  nameZh: "汉江",
  nameEn: "Han River",
  category: "river",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "两水里", lon: 127.3161, lat: 37.5375, elevation: 45, kind: "city" },
  bbox: [127.10, 37.30, 129.05, 37.65],
  axis: [[128.92, 37.15], [126.85, 37.57]],
  viewScale: 1.3,
  label: { lon: 127.60, lat: 37.45, rotation: -10 },
  source: "汉江：发源于太白山脉金台峰，全长约508公里，流经韩国首都首尔，南汉江与北汉江在两水里交汇后称汉江干流，20世纪后期首尔沿江地区的快速城市化被称为\"汉江奇迹\"（韩国国土地理院）",
};

const NAKDONG_RIVER: TerrainEntry = {
  id: "nakdong-river",
  nameZh: "洛东江",
  nameEn: "Nakdong River",
  category: "river",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "安东", lon: 128.7294, lat: 36.5684, elevation: 70, kind: "city" },
  bbox: [128.20, 35.10, 129.15, 37.20],
  axis: [[128.98, 37.10], [128.90, 35.15]],
  viewScale: 1.4,
  label: { lon: 128.75, lat: 36.20, rotation: -5 },
  source: "洛东江：发源于太白山脉黄池川，全长约510公里，是韩国境内最长的河流，流经安东、大邱等岭南地区主要城市，最终在釜山附近注入海（韩国国土地理院）",
};

const GEUM_RIVER: TerrainEntry = {
  id: "geum-river",
  nameZh: "锦江",
  nameEn: "Geum River",
  category: "river",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "扶余", lon: 126.9099, lat: 36.2758, elevation: 15, kind: "city" },
  bbox: [126.85, 35.75, 127.75, 36.30],
  axis: [[127.65, 35.80], [126.90, 36.28]],
  label: { lon: 127.20, lat: 36.05, rotation: -20 },
  source: "锦江：发源于小白山脉新舞山，全长约397公里，是韩国第三长河流，流经百济故都扶余一段被称为\"白马江\"，沿岸落花岩记录了百济王朝历史（韩国国土地理院）",
};

const HOERYONGPO_ANDONG_MEANDER: TerrainEntry = {
  id: "hoeryongpo-andong-meander",
  nameZh: "安东河回村曲流",
  nameEn: "Hahoe (Andong) Incised Meander",
  category: "valley",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "芙蓉台", lon: 128.5169, lat: 36.5390, elevation: 64, kind: "meander" },
  bbox: [128.47, 36.51, 128.57, 36.57],
  label: { lon: 128.52, lat: 36.54, rotation: 0 },
  source: "安东河回村曲流：洛东江在花岗岩基岩中下切形成的一处马蹄形嵌入式曲流，河流环绕村落三面，隔岸芙蓉台悬崖为俯瞰曲流全貌的观景点，2010年河回村与庆州良洞村列入联合国教科文组织世界遗产名录\"韩国历史村落\"（UNESCO/韩国国立公园公团）",
};

const SOGEUMGANG_GORGE: TerrainEntry = {
  id: "sogeumgang-gorge",
  nameZh: "小金刚峡谷",
  nameEn: "Sogeumgang Gorge",
  category: "gorge",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "九龙瀑布", lon: 128.6664, lat: 37.7864, elevation: 600, kind: "gorge" },
  bbox: [128.62, 37.75, 128.71, 37.82],
  label: { lon: 128.67, lat: 37.79, rotation: 0 },
  source: "小金刚峡谷：五台山国家公园内一段花岗岩深切峡谷，因景致可与朝鲜半岛北部的金刚山媲美而得名，九龙瀑布沿花岗岩崖壁跌落形成九级连瀑（韩国国立公园公团）",
};

const JUWANGSAN_GORGE: TerrainEntry = {
  id: "juwangsan-gorge",
  nameZh: "周王山峡谷",
  nameEn: "Juwangsan Gorge",
  category: "gorge",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "龙湫瀑布", lon: 129.1839, lat: 36.3961, elevation: 400, kind: "gorge" },
  bbox: [129.13, 36.36, 129.24, 36.44],
  label: { lon: 129.18, lat: 36.40, rotation: 0 },
  source: "周王山峡谷：由约7000万年前一次火山喷发冷凝形成的流纹质凝灰岩经周王川长期侵蚀切割而成，两岸石英质悬崖陡峭，龙湫瀑布等多级瀑布沿峡谷分布，2003年周王山成为联合国教科文组织世界地质公园（UNESCO/韩国国立公园公团）",
};

const SOYANG_LAKE: TerrainEntry = {
  id: "soyang-lake",
  nameZh: "昭阳湖",
  nameEn: "Soyang Lake",
  category: "lake",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "昭阳江大坝", lon: 127.8151, lat: 37.9489, elevation: 200, kind: "lake" },
  bbox: [127.68, 37.85, 128.10, 38.15],
  viewScale: 1.2,
  label: { lon: 127.88, lat: 38.00, rotation: 0 },
  source: "昭阳湖：1973年拦截昭阳江修建的人工水库，蓄水量约29亿立方米，是韩国库容最大的水库、亚洲最大的土石坝水库之一，湖区跨越春川、洪川、杨口、麟蹄多地（韩国水资源公社K-water）",
};

const GYEONGPO_LAGOON: TerrainEntry = {
  id: "gyeongpo-lagoon",
  nameZh: "镜浦湖",
  nameEn: "Gyeongpo Lagoon",
  category: "lake",
  regionId: "asia",
  country: "south-korea",
  landmark: { name: "镜浦台", lon: 128.8994, lat: 37.7961, elevation: 5, kind: "lake" },
  bbox: [128.86, 37.78, 128.93, 37.81],
  label: { lon: 128.90, lat: 37.80, rotation: 0 },
  source: "镜浦湖：东海岸一处由沿岸沙嘴封闭海湾形成的潟湖，\"镜浦\"意为\"如镜的湖面\"，湖畔镜浦台等亭台自朝鲜王朝以来即为文人赏月观景之地，\"一月映五处\"（天上月、海中月、湖中月、杯中月、恋人眼中月）的说法流传至今（江陵市）",
};

// ============================================================
// 欧洲 / 波兰
// 东欧次区域首个国家；喀尔巴阡山脉（塔特拉/贝斯基德/皮耶尼内/别什恰迪）沿波兰—
// 斯洛伐克/乌克兰边境分布，仅收录波兰境内部分，中性表述、不涉主权
// ============================================================

const TATRA_MOUNTAINS: TerrainEntry = {
  id: "tatra-mountains",
  nameZh: "塔特拉山脉",
  nameEn: "Tatra Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "雷西峰西北峰", lon: 20.0881, lat: 49.1794, elevation: 2499, kind: "peak" },
  bbox: [19.85, 49.15, 20.25, 49.35],
  viewScale: 1.2,
  label: { lon: 20.05, lat: 49.24, rotation: 0 },
  source: "塔特拉山脉：喀尔巴阡山脉海拔最高的部分，沿波兰与斯洛伐克边境分布；雷西峰西北峰海拔2499米是波兰全境最高点，山体中央峰（2503米）与东南峰均位于斯洛伐克一侧（波兰地形测量与地籍总局 GUGiK）",
};

const SUDETES_KARKONOSZE: TerrainEntry = {
  id: "sudetes-karkonosze",
  nameZh: "苏台德山脉·卡尔科诺谢山",
  nameEn: "Sudetes / Karkonosze",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "希尼耶日卡峰", lon: 15.7397, lat: 50.7361, elevation: 1603, kind: "peak" },
  bbox: [15.55, 50.68, 15.85, 50.85],
  label: { lon: 15.70, lat: 50.76, rotation: 0 },
  source: "苏台德山脉：波兰西南部与捷克交界的古老山系，卡尔科诺谢山是其最高部分，希尼耶日卡峰海拔1603米，为苏台德山脉最高峰，山顶横跨波兰与捷克边境（波兰地形测量与地籍总局）",
};

const BIESZCZADY_MOUNTAINS: TerrainEntry = {
  id: "bieszczady-mountains",
  nameZh: "别什恰迪山脉",
  nameEn: "Bieszczady Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "塔尔尼察峰", lon: 22.7397, lat: 49.0742, elevation: 1346, kind: "peak" },
  bbox: [22.40, 49.00, 22.90, 49.25],
  viewScale: 1.3,
  label: { lon: 22.65, lat: 49.12, rotation: 0 },
  source: "别什恰迪山脉：喀尔巴阡山脉东段位于波兰东南角的部分，与斯洛伐克、乌克兰接壤，塔尔尼察峰海拔1346米为波兰境内最高峰，山体植被以开阔的亚高山草甸“波沃尼纳”著称（波兰地形测量与地籍总局）",
};

const BESKIDY_MOUNTAINS: TerrainEntry = {
  id: "beskidy-mountains",
  nameZh: "贝斯基德山脉",
  nameEn: "Beskids",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "巴比亚古拉峰", lon: 19.5289, lat: 49.5733, elevation: 1725, kind: "peak" },
  bbox: [19.35, 49.50, 19.70, 49.70],
  label: { lon: 19.52, lat: 49.60, rotation: 0 },
  source: "贝斯基德山脉：喀尔巴阡山脉外圈位于波兰南部的组成部分，巴比亚古拉峰海拔1725米，是贝斯基德山脉最高峰，山顶植被垂直分带明显，1977年列入联合国教科文组织人与生物圈保护区（波兰地形测量与地籍总局 / UNESCO）",
};

const PIENINY_MOUNTAINS: TerrainEntry = {
  id: "pieniny-mountains",
  nameZh: "皮耶尼内山",
  nameEn: "Pieniny",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "三王冠峰", lon: 20.4167, lat: 49.4167, elevation: 982, kind: "peak" },
  bbox: [20.30, 49.38, 20.55, 49.48],
  label: { lon: 20.42, lat: 49.42, rotation: 0 },
  source: "皮耶尼内山：喀尔巴阡山脉中一片较为孤立的石灰岩、白云岩山地，三王冠峰海拔982米，因杜纳耶茨河切穿山体形成的峡谷而闻名，1932年设立波兰最早的国家公园之一（波兰地形测量与地籍总局）",
};

const SWIETOKRZYSKIE_MOUNTAINS: TerrainEntry = {
  id: "swietokrzyskie-mountains",
  nameZh: "圣十字山",
  nameEn: "Świętokrzyskie Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "poland",
  landmark: { name: "维希查峰", lon: 20.9539, lat: 50.8797, elevation: 612, kind: "peak" },
  bbox: [20.70, 50.80, 21.10, 50.95],
  label: { lon: 20.90, lat: 50.87, rotation: 0 },
  source: "圣十字山：波兰中南部一列古老的褶皱山系，基岩年代可追溯至古生代，是波兰境内地质年代最古老的山脉之一，与年轻的喀尔巴阡山脉、苏台德山脉形成鲜明的地质年代对比，维希查峰海拔612米为最高点（波兰地形测量与地籍总局）",
};

const KRAKOW_CZESTOCHOWA_UPLAND: TerrainEntry = {
  id: "krakow-czestochowa-upland",
  nameZh: "克拉科夫—琴斯托霍瓦高原",
  nameEn: "Kraków-Częstochowa Upland",
  category: "plateau",
  regionId: "europe",
  country: "poland",
  landmark: { name: "皮耶斯科瓦斯卡拉城堡", lon: 19.7986, lat: 50.2394, elevation: 400, kind: "escarpment" },
  bbox: [19.60, 50.10, 19.95, 50.60],
  axis: [[19.75, 50.15], [19.85, 50.55]],
  viewScale: 1.5,
  label: { lon: 19.78, lat: 50.35, rotation: -85 },
  source: "克拉科夫—琴斯托霍瓦高原（俗称“波兰侏罗”）：由侏罗纪石灰岩构成的狭长台地，长期喀斯特溶蚀形成大量孤立岩塔与洞穴，沿线分布中世纪城堡遗址串成的“雄鹰之巢小径”，皮耶斯科瓦斯卡拉城堡是其中保存最完好的一座（波兰地形测量与地籍总局）",
};

const GORY_STOLOWE: TerrainEntry = {
  id: "gory-stolowe",
  nameZh: "斯托沃韦山（桌山）",
  nameEn: "Table Mountains (Góry Stołowe)",
  category: "plateau",
  regionId: "europe",
  country: "poland",
  landmark: { name: "什切利涅茨维尔基峰", lon: 16.3517, lat: 50.4794, elevation: 919, kind: "peak" },
  bbox: [16.25, 50.42, 16.55, 50.55],
  label: { lon: 16.40, lat: 50.48, rotation: 0 },
  source: "斯托沃韦山：苏台德山脉东段一片顶部平坦的砂岩台地，因水平砂岩层长期风化侵蚀出崖壁陡立、顶部平坦的“桌状”轮廓而得名，什切利涅茨维尔基峰海拔919米，是波兰境内最典型的桌山地貌（波兰地形测量与地籍总局）",
};

const MASURIAN_LAKES: TerrainEntry = {
  id: "masurian-lakes",
  nameZh: "马祖里湖区",
  nameEn: "Masurian Lake District",
  category: "lake",
  regionId: "europe",
  country: "poland",
  landmark: { name: "希尼亚尔德维湖", lon: 21.7500, lat: 53.7333, elevation: 116, kind: "lake" },
  bbox: [21.30, 53.55, 22.30, 54.10],
  viewScale: 1.6,
  label: { lon: 21.80, lat: 53.85, rotation: 0 },
  source: "马祖里湖区：波兰东北部末次冰期冰川侵蚀形成的湖泊密集区，境内湖泊超过2500座，希尼亚尔德维湖长约22公里，是波兰境内面积最大的湖泊，湖区因密布水道与运河而成为欧洲重要的内河航行与帆船活动区域（波兰地形测量与地籍总局）",
};

const LAKE_HANCZA: TerrainEntry = {
  id: "lake-hancza",
  nameZh: "汉查湖",
  nameEn: "Lake Hańcza",
  category: "lake",
  regionId: "europe",
  country: "poland",
  landmark: { name: "汉查湖", lon: 22.7833, lat: 54.2167, elevation: 227, kind: "lake" },
  bbox: [22.70, 54.15, 22.90, 54.28],
  label: { lon: 22.79, lat: 54.21, rotation: 0 },
  source: "汉查湖：位于波兰东北部苏瓦乌基地区的冰蚀湖，最大水深约108米，是波兰境内水深最大的湖泊，也是中欧地区最深的湖泊之一（波兰地形测量与地籍总局）",
};

const VISTULA_RIVER: TerrainEntry = {
  id: "vistula-river",
  nameZh: "维斯瓦河",
  nameEn: "Vistula",
  category: "river",
  regionId: "europe",
  country: "poland",
  landmark: { name: "华沙", lon: 21.0122, lat: 52.2297, elevation: 80, kind: "city" },
  bbox: [18.50, 49.50, 22.00, 54.50],
  axis: [[18.93, 49.55], [18.65, 54.35]],
  viewScale: 2.2,
  label: { lon: 20.20, lat: 51.80, rotation: -30 },
  source: "维斯瓦河：波兰最长的河流，全长约1047公里，发源于贝斯基德山脉，纵贯波兰全境流经克拉科夫、华沙等主要城市，最终在格但斯克附近注入波罗的海，是波兰的国家象征性河流（波兰地形测量与地籍总局）",
};

const ODER_RIVER: TerrainEntry = {
  id: "oder-river",
  nameZh: "奥得河",
  nameEn: "Oder",
  category: "river",
  regionId: "europe",
  country: "poland",
  landmark: { name: "什切青", lon: 14.5528, lat: 53.4285, elevation: 5, kind: "city" },
  bbox: [14.50, 50.00, 17.00, 53.50],
  axis: [[17.00, 50.05], [14.55, 53.40]],
  viewScale: 1.9,
  label: { lon: 15.50, lat: 51.50, rotation: -55 },
  source: "奥得河：波兰第二长河流，发源于捷克，下游构成波兰与德国的界河，最终经什切青附近注入波罗的海，是波兰西部重要的水运通道（波兰地形测量与地籍总局）",
};

const BUG_RIVER: TerrainEntry = {
  id: "bug-river",
  nameZh: "布格河",
  nameEn: "Bug",
  category: "river",
  regionId: "europe",
  country: "poland",
  landmark: { name: "弗沃达瓦", lon: 23.5500, lat: 51.5500, elevation: 160, kind: "city" },
  bbox: [23.00, 50.80, 24.10, 52.50],
  axis: [[23.60, 50.85], [23.50, 52.45]],
  viewScale: 1.5,
  label: { lon: 23.55, lat: 51.70, rotation: -80 },
  source: "布格河：发源于乌克兰，下游构成波兰与白俄罗斯、乌克兰的界河，是欧洲少数几条未经大规模水利调节、保留自然河道形态的大型河流之一（波兰地形测量与地籍总局）",
};

const NAREW_RIVER: TerrainEntry = {
  id: "narew-river",
  nameZh: "纳雷夫河",
  nameEn: "Narew",
  category: "river",
  regionId: "europe",
  country: "poland",
  landmark: { name: "纳雷夫国家公园（库罗沃段）", lon: 22.7500, lat: 52.9167, elevation: 105, kind: "meander" },
  bbox: [22.55, 52.80, 22.95, 53.05],
  label: { lon: 22.75, lat: 52.92, rotation: 0 },
  source: "纳雷夫河：流经纳雷夫国家公园的一段呈罕见的辫状水系形态，河道分汊成数十条并行的支流蜿蜒穿行于湿地沼泽之间，是欧洲低地地区保存最完好的辫状河流地貌之一，当地俗称“波兰的亚马逊”（波兰地形测量与地籍总局）",
};

const DUNAJEC_GORGE: TerrainEntry = {
  id: "dunajec-gorge",
  nameZh: "杜纳耶茨河峡谷",
  nameEn: "Dunajec River Gorge",
  category: "gorge",
  regionId: "europe",
  country: "poland",
  landmark: { name: "斯罗莫夫采漂流码头", lon: 20.3833, lat: 49.4167, elevation: 450, kind: "gorge" },
  bbox: [20.15, 49.38, 20.45, 49.45],
  axis: [[20.20, 49.42], [20.42, 49.40]],
  label: { lon: 20.30, lat: 49.41, rotation: -10 },
  source: "杜纳耶茨河峡谷：杜纳耶茨河切穿皮耶尼内山石灰岩、白云岩山体形成的峡谷，两岸崖壁高耸，是波兰—斯洛伐克跨境著名的木筏漂流河段（波兰地形测量与地籍总局）",
};

const OJCOW_VALLEY: TerrainEntry = {
  id: "ojcow-valley",
  nameZh: "奥伊苏夫谷地",
  nameEn: "Ojców Valley (Prądnik Valley)",
  category: "gorge",
  regionId: "europe",
  country: "poland",
  landmark: { name: "克拉科夫门岩", lon: 19.8300, lat: 50.2064, elevation: 380, kind: "gorge" },
  bbox: [19.78, 50.18, 19.90, 50.24],
  label: { lon: 19.84, lat: 50.21, rotation: 0 },
  source: "奥伊苏夫谷地：普隆德尼克河切穿克拉科夫—琴斯托霍瓦高原石灰岩形成的喀斯特峡谷，两岸密布孤立岩柱与溶洞，克拉科夫门岩是谷内最具代表性的天然岩石拱门，1956年设立波兰面积最小的国家公园（波兰地形测量与地籍总局）",
};

const SLOWINSKI_DUNES: TerrainEntry = {
  id: "slowinski-dunes",
  nameZh: "斯沃文斯基移动沙丘",
  nameEn: "Słowiński Moving Dunes",
  category: "coast",
  regionId: "europe",
  country: "poland",
  landmark: { name: "沃夫佐涅茨基山移动沙丘", lon: 17.4500, lat: 54.7333, elevation: 42, kind: "dune" },
  bbox: [17.30, 54.68, 17.65, 54.80],
  viewScale: 1.2,
  label: { lon: 17.48, lat: 54.74, rotation: 0 },
  source: "斯沃文斯基移动沙丘：波罗的海沿岸欧洲规模最大的活动沙丘群，沙丘高度可达42米，每年在盛行风作用下向内陆移动约3至10米，1967年设立斯沃文斯基国家公园保护这一独特地貌（波兰地形测量与地籍总局）",
};

const HEL_PENINSULA: TerrainEntry = {
  id: "hel-peninsula",
  nameZh: "海尔半岛",
  nameEn: "Hel Peninsula",
  category: "coast",
  regionId: "europe",
  country: "poland",
  landmark: { name: "海尔镇", lon: 18.8083, lat: 54.6081, elevation: 3, kind: "city" },
  bbox: [18.45, 54.58, 18.85, 54.78],
  axis: [[18.55, 54.75], [18.80, 54.61]],
  viewScale: 1.2,
  label: { lon: 18.65, lat: 54.68, rotation: -50 },
  source: "海尔半岛：一条长约35公里、最窄处不足200米的沙嘴，由沿岸流长期搬运沙粒堆积而成，将波罗的海与格但斯克湾分隔开来，末端的海尔镇是波兰重要的海滨度假地（波兰地形测量与地籍总局）",
};

const WOLIN_ISLAND: TerrainEntry = {
  id: "wolin-island",
  nameZh: "沃林岛",
  nameEn: "Wolin Island",
  category: "island",
  regionId: "europe",
  country: "poland",
  landmark: { name: "梅济兹德罗耶悬崖", lon: 14.4497, lat: 53.9294, elevation: 95, kind: "escarpment" },
  bbox: [14.15, 53.85, 14.55, 54.00],
  label: { lon: 14.35, lat: 53.92, rotation: 0 },
  source: "沃林岛：波兰西北部波罗的海沿岸岛屿，岛上沃林国家公园内一段长约15公里的海崖是波罗的海南岸少见的高崖海岸，公园内设有小型欧洲野牛保护区（波兰地形测量与地籍总局）",
};

const GREAT_POLISH_LOWLAND: TerrainEntry = {
  id: "great-polish-lowland",
  nameZh: "大波兰低地",
  nameEn: "Great Polish Lowland",
  category: "plain",
  regionId: "europe",
  country: "poland",
  landmark: { name: "波兹南", lon: 16.9252, lat: 52.4064, elevation: 70, kind: "city" },
  bbox: [15.50, 51.50, 19.00, 53.00],
  viewScale: 2.0,
  label: { lon: 17.30, lat: 52.30, rotation: 0 },
  source: "大波兰低地：中欧平原位于波兰境内的主体部分，由末次冰期冰川堆积物构成，地势平坦开阔，是波兰面积最大的农业区，波兹南等波兰中西部主要城市均坐落于此（波兰地形测量与地籍总局）",
};

const ZULAWY_WISLANE: TerrainEntry = {
  id: "zulawy-wislane",
  nameZh: "维斯瓦三角洲低地",
  nameEn: "Żuławy Wiślane (Vistula Delta Lowland)",
  category: "plain",
  regionId: "europe",
  country: "poland",
  landmark: { name: "新德富尔格但斯基", lon: 19.1167, lat: 54.2000, elevation: -1, kind: "delta" },
  bbox: [18.75, 53.95, 19.45, 54.40],
  viewScale: 1.3,
  label: { lon: 19.10, lat: 54.15, rotation: 0 },
  source: "维斯瓦三角洲低地：维斯瓦河入海口处的冲积三角洲平原，部分区域海拔低于海平面（最低处约海平面下1.8米），历史上经中世纪荷兰移民带来的堤坝排水技术围垦而成，是波兰境内地势最低的区域（波兰地形测量与地籍总局）",
};

const BIALOWIEZA_FOREST: TerrainEntry = {
  id: "bialowieza-forest",
  nameZh: "比亚沃维耶扎森林",
  nameEn: "Białowieża Forest",
  category: "hills",
  regionId: "europe",
  country: "poland",
  landmark: { name: "比亚沃维耶扎村", lon: 23.8667, lat: 52.7000, elevation: 160, kind: "city" },
  bbox: [23.50, 52.60, 23.95, 52.85],
  label: { lon: 23.72, lat: 52.72, rotation: 0 },
  source: "比亚沃维耶扎森林：欧洲平原地区保存最完好的原始森林之一，跨波兰与白俄罗斯边境，是欧洲野牛的重要栖息地，1979年列入联合国教科文组织世界遗产名录（UNESCO）",
};

const ROZTOCZE: TerrainEntry = {
  id: "roztocze",
  nameZh: "罗兹托切丘陵",
  nameEn: "Roztocze",
  category: "hills",
  regionId: "europe",
  country: "poland",
  landmark: { name: "兹维日涅茨", lon: 22.9667, lat: 50.6167, elevation: 310, kind: "city" },
  bbox: [22.75, 50.35, 23.55, 50.75],
  axis: [[22.80, 50.40], [23.50, 50.70]],
  viewScale: 1.4,
  label: { lon: 23.10, lat: 50.55, rotation: -30 },
  source: "罗兹托切丘陵：波兰东南部一条呈狭长带状延伸的石灰岩丘陵，森林覆盖率高，2019年经波兰、乌克兰跨境部分共同列入联合国教科文组织罗兹托切生物圈保护区（UNESCO）",
};

const KASHUBIAN_SWITZERLAND: TerrainEntry = {
  id: "kashubian-switzerland",
  nameZh: "卡舒比“瑞士”",
  nameEn: "Kashubian Switzerland",
  category: "hills",
  regionId: "europe",
  country: "poland",
  landmark: { name: "维耶日察峰", lon: 18.0894, lat: 54.2264, elevation: 329, kind: "peak" },
  bbox: [17.85, 54.10, 18.30, 54.35],
  label: { lon: 18.05, lat: 54.22, rotation: 0 },
  source: "卡舒比“瑞士”：波兰北部波美拉尼亚地区一片末次冰期终碛丘陵，湖泊与森林密布，维耶日察峰海拔329米，是波兰北部地势最高点，因起伏地貌与瑞士山地相似而得名（波兰地形测量与地籍总局）",
};

const BIEBRZA_MARSHES: TerrainEntry = {
  id: "biebrza-marshes",
  nameZh: "别布扎沼泽",
  nameEn: "Biebrza Marshes",
  category: "basin",
  regionId: "europe",
  country: "poland",
  landmark: { name: "奥索维茨要塞", lon: 22.6667, lat: 53.4833, elevation: 110, kind: "city" },
  bbox: [22.30, 53.30, 23.30, 53.75],
  viewScale: 1.6,
  label: { lon: 22.80, lat: 53.55, rotation: 0 },
  source: "别布扎沼泽：波兰面积最大的低位沼泽湿地，沿别布扎河谷分布，末次冰期后排水不畅形成大面积湿地生态系统，是欧洲现存最完整的低地河谷沼泽之一，1993年设立别布扎国家公园（波兰地形测量与地籍总局）",
};

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
  source: "戈壁阿尔泰山：蒙古阿尔泰山向东南延伸至戈壁荒漠区的过渡山系，由多个孤立断块山地组成，最高峰伊赫博格德峰海拔3957米，山顶保留小型冰川，是戈壁荒漠中罕见的高山生态孤岛（Wikipedia WebSearch 2026）",
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
  source: "戈壁：横跨蒙古南部与中国北部的荒漠地带，整体面积约130万平方公里，是世界第六大沙漠，主体为砾漠而非沙漠；蒙古境内以南戈壁、东戈壁等省份为主，气候夏热冬寒、年降水仅约194毫米（中国段另见 gobi 词条，锚点取额济纳；Wikipedia/geographical.co.uk WebSearch 2026）",
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
  source: "吉尔嘎朗图湖：蒙古大湖盆地内一处咸水湖，面积约1481平方公里，海拔约1029米，经一条5公里长的人工运河与哈尔湖—艾拉格湖水系相连，是大湖盆地咸淡水湖泊链的终端（Wikipedia WebSearch 2026）",
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
  source: "库苏古尔湖：蒙古最大的淡水湖，面积约2620平方公里，最大水深267米，蓄水量约占蒙古全国淡水总量的70%、全球淡水总量的0.4%，经额吉音河（色楞格河支流）与俄罗斯贝加尔湖存在水文关联，湖区设有库苏古尔国家公园（Britannica WebSearch 2026）",
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
  source: "巴彦扎格：南戈壁省一处红色砂岩侵蚀崖壁，因岩石在夕照下呈火焰般的橙红色而得名“燃烧的悬崖”；1922年美国自然历史博物馆罗伊·查普曼·安德鲁斯考察队在此首次发现恐龙蛋化石，是戈壁古尔班赛罕国家公园的组成部分（Wikipedia/topasiatour.com WebSearch 2026）",
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
  source: "约林音峡谷：古尔班赛罕山中一条狭窄的深切峡谷，长约8公里，谷内常年积存半永久性冰层、部分年份延续至初夏方才消融；因谷内栖息胡兀鹫（蒙古语称“约尔”）而得名，又称“鹰谷”或“冰谷”，是戈壁古尔班赛罕国家公园的核心景观之一（Wikipedia WebSearch 2026）",
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
  source: "色楞格河：蒙古境内水量最大的河流，由伊德尔河与穆伦河（德勒格尔河）在中戈壁—布尔干省境内汇流而成，向东北流经苏赫巴托尔市后进入俄罗斯，最终注入贝加尔湖，是贝加尔湖最主要的入湖水源（Wikipedia/worldatlas.com WebSearch 2026）",
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
  landmark: { name: "查干苏日格崖壁", lon: 105.40, lat: 46.70, elevation: 1300, kind: "escarpment" },
  bbox: [105.30, 46.60, 105.55, 46.80],
  label: { lon: 105.40, lat: 46.82, rotation: 0 },
  source: "查干苏日格（白塔崖）：中戈壁省乌力吉区一处石灰岩与粘土质侵蚀崖壁，最高处逾60米、延伸长度约400米，岩层记录了这一带曾为古海底沉积环境的地质历史，崖面呈现白、橙、锈红等分层色带，偶见细小化石残片（Wikipedia/travelchinaguide.com WebSearch 2026）",
};

// ============================================================
// 亚洲 — 菲律宾
// ============================================================

const MAYON_VOLCANO: TerrainEntry = {
  id: "mayon-volcano",
  nameZh: "马荣火山",
  nameEn: "Mayon Volcano",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "马荣火山主峰", lon: 123.685, lat: 13.2572, elevation: 2462, kind: "peak" },
  bbox: [123.58, 13.18, 123.79, 13.35],
  viewFrom: 90,
  label: { lon: 123.685, lat: 13.11, rotation: 0 },
  source: "马荣火山：吕宋岛阿尔拜省地标性活火山，海拔2462米，锥体呈近乎完美的对称圆锥形，椭圆度指数低至1.04、为全球层状火山中最低（形态最对称），400年间记录喷发逾49次，是菲律宾最活跃的火山；1938年划设为菲律宾首座国家公园（Britannica/amusingplanet.com WebSearch 2026）",
};

const TAAL_LAKE: TerrainEntry = {
  id: "taal-lake",
  nameZh: "塔阿尔湖",
  nameEn: "Taal Lake",
  category: "lake",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "火山岛主火山口湖", lon: 120.9938, lat: 14.0021, elevation: 311, kind: "salt-lake" },
  bbox: [120.85, 13.90, 121.08, 14.10],
  viewScale: 1.2,
  label: { lon: 120.90, lat: 13.85, rotation: 0 },
  source: "塔阿尔湖：吕宋岛西南部一处火山破火山口湖，面积267平方公里、湖面海拔仅约3米，1754年一次剧烈喷发的大量喷发物堵塞邦西皮特河、切断湖泊与海洋的连通，此后逐渐由咸水湖淡化为淡水湖；湖心矗立“火山岛”（海拔约300米），岛上火山口内又有一处主火山口湖，湖中再有一座“火山点”小岛，构成“湖中岛中湖中岛”的罕见嵌套地貌，自1572年以来记录喷发逾34次（Britannica/livescience.com WebSearch 2026）",
};

const MOUNT_PINATUBO: TerrainEntry = {
  id: "mount-pinatubo",
  nameZh: "皮纳图博火山",
  nameEn: "Mount Pinatubo",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "皮纳图博火山口湖", lon: 120.35, lat: 15.13, elevation: 1486, kind: "peak" },
  bbox: [120.27, 15.06, 120.43, 15.20],
  viewScale: 1.1,
  label: { lon: 120.35, lat: 15.22, rotation: 0 },
  source: "皮纳图博火山：1991年6月15日发生20世纪第二大规模火山喷发，喷发柱高逾40公里、喷出岩浆逾10立方公里，火山爆发指数达VEI 6；剧烈喷发导致山顶塌陷形成宽约2.5公里的破火山口，山体高度较喷发前降低逾300米，山顶如今蓄有一汪蓝绿色火山口湖，是菲律宾知名的徒步目的地（USGS/Global Volcanism Program WebSearch 2026）",
};

const MOUNT_APO: TerrainEntry = {
  id: "mount-apo",
  nameZh: "阿波山",
  nameEn: "Mount Apo",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "阿波山主峰", lon: 125.2725, lat: 6.9875, elevation: 2954, kind: "peak" },
  bbox: [125.18, 6.90, 125.37, 7.08],
  label: { lon: 125.27, lat: 6.80, rotation: 0 },
  source: "阿波山：菲律宾全国最高峰，海拔2954米，是棉兰老岛阿波—塔洛莫山脉的一座休眠层状火山，山体覆盖高大热带硬木林；1936年设立阿波山国家公园，面积约8.09万公顷，是菲律宾鹰等珍稀物种的栖息地（PeakVisor/Britannica WebSearch 2026）",
};

const MOUNT_PULAG: TerrainEntry = {
  id: "mount-pulag",
  nameZh: "普拉格山",
  nameEn: "Mount Pulag",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "普拉格山主峰", lon: 120.90, lat: 16.5947, elevation: 2928, kind: "peak" },
  bbox: [120.82, 16.52, 120.98, 16.67],
  label: { lon: 120.90, lat: 16.44, rotation: 0 },
  source: "普拉格山：吕宋岛最高峰、菲律宾全国第三高峰，海拔2928米，位于本格特、伊富高与新怡诗夏三省交界；以清晨可见的“云海”景观与观测银河的绝佳视野著称，山体划入普拉格山国家公园，是当地原住民的传统文化圣地（PeakVisor/Wikivoyage WebSearch 2026）",
};

const CORDILLERA_CENTRAL_LUZON: TerrainEntry = {
  id: "cordillera-central-luzon",
  nameZh: "科迪勒拉山脉（吕宋）",
  nameEn: "Cordillera Central (Luzon)",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "科迪勒拉山脉中段", lon: 120.9, lat: 16.8, elevation: 2000, kind: "peak" },
  bbox: [120.5, 16.2, 121.4, 18.2],
  axis: [[120.65, 18.05], [121.1, 16.35]],
  viewScale: 1.4,
  label: { lon: 120.75, lat: 17.5, rotation: -15 },
  source: "科迪勒拉山脉：吕宋岛中北部一条南北长约320公里、东西宽约118公里的山系，是菲律宾海拔最高的山脉，涵盖普拉格山等多座高峰；山脉东南端经卡拉巴略山脉与锡拉马德雷山脉相接，是伊富高梯田等高山农业景观所在的地理骨架（Wikipedia WebSearch 2026）",
};

const SIERRA_MADRE_PHILIPPINES: TerrainEntry = {
  id: "sierra-madre-philippines",
  nameZh: "锡拉马德雷山脉",
  nameEn: "Sierra Madre (Philippines)",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "锡拉马德雷山脉中段", lon: 122.0, lat: 16.5, elevation: 1000, kind: "peak" },
  bbox: [121.4, 14.0, 122.3, 18.5],
  axis: [[122.0, 18.3], [121.6, 14.1]],
  viewScale: 1.5,
  label: { lon: 121.75, lat: 16.0, rotation: -12 },
  source: "锡拉马德雷山脉：菲律宾最长的山脉，沿吕宋岛东岸自北部卡加延省延伸至南部奎松省，南北长约540公里；山脉在东南部经卡拉巴略山脉与科迪勒拉山脉相接，是卡加延河的发源山系之一，长期作为吕宋岛东岸抵御太平洋风暴潮的天然屏障（Wikipedia/earthjournalism.net WebSearch 2026）",
};

const MOUNT_KANLAON: TerrainEntry = {
  id: "mount-kanlaon",
  nameZh: "甘伦火山",
  nameEn: "Mount Kanlaon",
  category: "mountain_system",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "甘伦火山口", lon: 123.1322, lat: 10.4119, elevation: 2465, kind: "peak" },
  bbox: [123.05, 10.35, 123.22, 10.48],
  label: { lon: 123.13, lat: 10.30, rotation: 0 },
  source: "甘伦火山：内格罗斯岛最高峰、维萨亚斯群岛最高峰，海拔2465米，是安山质层状活火山，1819年以来记录喷发逾30次、是菲律宾第三活跃的火山；山顶为一处宽约2公里的椭圆形破火山口，内含两个火山口——一处已熄灭并蓄有火山口湖，另一处“卢古德火山口”宽约250米、深150至200米，仍为历史活跃喷发口；1934年设立甘伦国家公园（Wikipedia/volcanodiscovery.com WebSearch 2026）",
};

const CHOCOLATE_HILLS: TerrainEntry = {
  id: "chocolate-hills",
  nameZh: "巧克力山",
  nameEn: "Chocolate Hills",
  category: "hills",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "巧克力山观景台", lon: 124.1697, lat: 9.8264, elevation: 100, kind: "peak" },
  bbox: [124.10, 9.77, 124.24, 9.88],
  viewScale: 1.2,
  label: { lon: 124.17, lat: 9.90, rotation: 0 },
  source: "巧克力山：保和岛一处喀斯特丘陵群，已确认至少1260座、可能逾1776座锥形山丘，分布范围逾50平方公里，山丘高度介于30至120米之间；山体由上新世至更新世海底沉积的珊瑚礁石灰岩经构造抬升出露海面、再经热带降雨长期溶蚀而成，旱季草皮转为棕色时呈现类似巧克力的外观（Wikipedia/geologyscience.com WebSearch 2026）",
};

const BANAUE_IFUGAO_RICE_TERRACES: TerrainEntry = {
  id: "banaue-ifugao-rice-terraces",
  nameZh: "伊富高梯田（班奈梯田）",
  nameEn: "Rice Terraces of the Philippine Cordilleras (Banaue-Ifugao)",
  category: "valley",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "巴塔德梯田观景点", lon: 121.20, lat: 16.93, elevation: 1500, kind: "grassland" },
  bbox: [121.03, 16.83, 121.28, 17.03],
  viewScale: 1.1,
  label: { lon: 121.20, lat: 16.78, rotation: 0 },
  source: "伊富高梯田：科迪勒拉山脉中伊富高族两千余年前开凿的山地梯田系统，逾48处梯田群沿山势层层攀升，仅靠简单工具即建成配套精密的灌溉水利网络；1995年其中巴塔德、邦岸、马约瑶、洪古丹、纳加达坎五处梯田群以“菲律宾科迪勒拉水稻梯田”列入UNESCO世界遗产名录，班奈镇周边梯田因现代建筑密集、完整性评分较低未被纳入名录（UNESCO/newworldencyclopedia.org WebSearch 2026）",
};

const CAMIGUIN_ISLAND: TerrainEntry = {
  id: "camiguin-island",
  nameZh: "卡米金岛",
  nameEn: "Camiguin Island",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "希博克—希博克火山", lon: 124.6742, lat: 9.2033, elevation: 1332, kind: "peak" },
  bbox: [124.60, 9.10, 124.77, 9.28],
  label: { lon: 124.68, lat: 9.06, rotation: 0 },
  source: "卡米金岛：棉兰老岛北部近海一座梨形火山岛，面积约238平方公里，境内密布七座火山、单位面积火山密度居世界前列，因整座岛屿由海底火山喷发堆积而成而俗称“火之岛”；最高峰希博克—希博克火山海拔1332米，是岛上最活跃的火山；岛上另有因1871年火山活动沉入海底的“沉没墓园”遗址（Wikipedia/scmp.com WebSearch 2026）",
};

const BATANES_ISLANDS: TerrainEntry = {
  id: "batanes-islands",
  nameZh: "巴丹群岛",
  nameEn: "Batanes Islands",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "巴丹岛（巴斯科）", lon: 121.9683, lat: 20.4487, elevation: 100, kind: "island" },
  bbox: [121.80, 20.30, 122.10, 20.95],
  label: { lon: 121.95, lat: 20.20, rotation: 0 },
  source: "巴丹群岛：菲律宾最北端的岛群，主要由巴丹岛、萨布唐岛与伊特巴亚特岛三座有人居住的岛屿组成；巴丹岛与萨布唐岛由火山喷发形成、地表起伏为开阔草丘，伊特巴亚特岛则由板块构造运动抬升而成、以更陡峭的悬崖地貌为特征；伊特巴亚特岛是菲律宾最北端的有人岛屿，当地伊瓦坦族保留独特的石屋建筑传统（Wikipedia WebSearch 2026）",
};

const EL_NIDO_BACUIT_ARCHIPELAGO: TerrainEntry = {
  id: "el-nido-bacuit-archipelago",
  nameZh: "艾尔尼多—巴奎特群岛",
  nameEn: "El Nido / Bacuit Archipelago",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "巴奎特湾", lon: 119.3833, lat: 11.2000, elevation: 5, kind: "island" },
  bbox: [119.30, 11.12, 119.50, 11.30],
  label: { lon: 119.38, lat: 11.32, rotation: 0 },
  source: "艾尔尼多—巴奎特群岛：巴拉望岛北端一处由45座石灰岩岛礁组成的群岛，岛礁遍布喀斯特崖壁、落水洞与潟湖，2011年整个区域获认定为UNESCO世界地质公园；“艾尔尼多”（西班牙语意为“巢”）得名于岛礁石灰岩崖壁与洞穴中金丝燕筑巢的现象，是菲律宾知名的跳岛游与潜水目的地（Roughguides/bestdivingphilippines.com WebSearch 2026）",
};

const TUBBATAHA_REEFS: TerrainEntry = {
  id: "tubbataha-reefs",
  nameZh: "图巴塔哈群礁",
  nameEn: "Tubbataha Reefs",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "图巴塔哈北环礁", lon: 119.8664, lat: 8.8500, elevation: 0, kind: "island" },
  bbox: [119.78, 8.68, 119.95, 9.05],
  label: { lon: 119.87, lat: 9.10, rotation: 0 },
  source: "图巴塔哈群礁：苏禄海中央一处由图巴塔哈礁与杰西·比兹利礁组成的珊瑚环礁自然公园，保护面积近10万公顷，1988年设立海洋公园、1993年列入UNESCO世界遗产名录；礁区记录珊瑚物种逾360种、鱼类近700种，是苏禄海海域生物繁殖扩散的核心节点，礁体拥有垂直落差逾百米的珊瑚礁壁（UNESCO/tubbatahareefs.org WebSearch 2026）",
};

const CORON_CALAMIAN_ISLANDS: TerrainEntry = {
  id: "coron-calamian-islands",
  nameZh: "科隆—卡拉棉群岛",
  nameEn: "Coron / Calamian Islands",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "卡杨甘湖", lon: 120.1975, lat: 11.9958, elevation: 40, kind: "lake" },
  bbox: [120.05, 11.90, 120.25, 12.10],
  label: { lon: 120.05, lat: 12.12, rotation: 0 },
  source: "科隆—卡拉棉群岛：巴拉望岛东北海域一组石灰岩岛群，科隆岛周边陡峭的石灰岩崖壁由数百万年前珊瑚礁与贝壳类沉积岩层构成；岛内卡杨甘湖被誉为菲律宾水质最清澈的湖泊，水下能见度逾24米，湖水约七成为淡水、三成为海水（经石灰岩崖壁渗透混合的咸淡水湖），由当地塔格巴努亚族世代守护并视为圣地（divergenttravelers.com/richandsunnytravels.com WebSearch 2026）",
};

const PUERTO_PRINCESA_UNDERGROUND_RIVER: TerrainEntry = {
  id: "puerto-princesa-underground-river",
  nameZh: "普林塞萨港地下河",
  nameEn: "Puerto Princesa Underground River",
  category: "gorge",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "地下河洞口", lon: 118.9219, lat: 10.1996, elevation: 5, kind: "gorge" },
  bbox: [118.85, 10.15, 118.98, 10.25],
  label: { lon: 118.92, lat: 10.27, rotation: 0 },
  source: "普林塞萨港地下河：巴拉望岛圣保罗山脉一条全长8.2公里的地下暗河，是世界上已知最长的直接注入大海的可通航地下河，下游河段因潮汐影响呈咸淡水混合状态；1999年列入UNESCO世界遗产名录，2012年获评“世界新七大自然奇观”；洞内多处洞厅宽达120米、高60米，园区完整保护了从山地到海洋的连续生态系统，记录植物逾800种（UNESCO WebSearch 2026）",
};

const PAGSANJAN_GORGE: TerrainEntry = {
  id: "pagsanjan-gorge",
  nameZh: "帕格森汉峡谷",
  nameEn: "Pagsanjan Gorge",
  category: "gorge",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "马格达皮奥瀑布", lon: 121.4581, lat: 14.2758, elevation: 100, kind: "gorge" },
  bbox: [121.42, 14.24, 121.50, 14.32],
  label: { lon: 121.46, lat: 14.34, rotation: 0 },
  source: "帕格森汉峡谷：吕宋岛拉古纳省一处沿帕格森汉河切割的峡谷地貌，森林覆盖的陡峭崖壁夹峙河道两侧，末端为落差120米、分三级跌落的马格达皮奥瀑布（俗称帕格森汉瀑布）；峡谷地处锡拉马德雷山脉山麓，1939年设立帕格森汉峡谷国家公园，自西班牙殖民时期起当地即以独木舟“冲滩”方式载客溯游而上（national-parks.org/Wikipedia WebSearch 2026）",
};

const CAGAYAN_RIVER: TerrainEntry = {
  id: "cagayan-river",
  nameZh: "卡加延河",
  nameEn: "Cagayan River",
  category: "river",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "阿帕里（卡加延河口）", lon: 121.6417, lat: 18.3667, elevation: 0, kind: "delta" },
  bbox: [121.1, 16.4, 121.9, 18.4],
  axis: [[121.1, 16.4], [121.6417, 18.3667]],
  viewScale: 1.3,
  label: { lon: 121.35, lat: 17.4, rotation: -20 },
  source: "卡加延河：菲律宾最长、流量最大的河流，全长约505公里，发源于卡拉巴略山脉，流域面积约2.78万平方公里，纵贯吕宋岛东北部卡加延河谷，流经新怡诗夏、基里诺、伊莎贝拉与卡加延四省，最终于阿帕里注入巴布延海峡（Wikipedia/Britannica WebSearch 2026）",
};

const LAKE_LANAO: TerrainEntry = {
  id: "lake-lanao",
  nameZh: "拉瑙湖",
  nameEn: "Lake Lanao",
  category: "lake",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "拉瑙湖", lon: 124.25, lat: 7.8667, elevation: 702, kind: "lake" },
  bbox: [124.05, 7.75, 124.45, 8.05],
  viewScale: 1.1,
  label: { lon: 124.25, lat: 7.65, rotation: 0 },
  source: "拉瑙湖：菲律宾第二大湖，面积约340平方公里，位于棉兰老岛拉瑙德尔苏尔省，是全球现存17处古老湖泊之一，由两条山脉间盆地经构造—火山活动共同抬升阻塞、并伴随一座大型火山塌陷而形成；湖水经阿古斯河向北流出，途经玛丽亚克里斯蒂娜瀑布水电站，为棉兰老岛提供约七成用电；湖中栖息18种菲律宾特有鲤科鱼类（Britannica/dost.gov.ph WebSearch 2026）",
};

const AGUSAN_MARSH: TerrainEntry = {
  id: "agusan-marsh",
  nameZh: "阿古桑沼泽",
  nameEn: "Agusan Marsh",
  category: "basin",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "阿古桑沼泽野生动物保护区", lon: 125.85, lat: 8.4667, elevation: 15, kind: "delta" },
  bbox: [125.65, 8.20, 126.05, 8.75],
  viewScale: 1.2,
  label: { lon: 125.65, lat: 8.10, rotation: 0 },
  source: "阿古桑沼泽：棉兰老岛东北部阿古桑河流域中一片广袤的泛滥平原湿地，法定保护面积约4.09万公顷，1999年列入拉姆萨尔国际重要湿地名录；沼泽汇集阿古桑河流域多条支流后向北排入布图安湾，保存有菲律宾现存规模最大的沼泽林与泥炭沼泽森林，2018年获认定为东盟遗产公园（Ramsar/Wikipedia WebSearch 2026）",
};

const HUNDRED_ISLANDS_NATIONAL_PARK: TerrainEntry = {
  id: "hundred-islands-national-park",
  nameZh: "百岛国家公园",
  nameEn: "Hundred Islands National Park",
  category: "island",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "总督岛", lon: 119.90, lat: 16.20, elevation: 5, kind: "island" },
  bbox: [119.83, 16.14, 119.98, 16.28],
  label: { lon: 119.90, lat: 16.11, rotation: 0 },
  source: "百岛国家公园：吕宋岛西北部林加延湾内一处岛礁群，退潮时共有124座、涨潮时123座石灰岩岛屿，散布面积约1844公顷；岛群基底为珊瑚礁构造、地表岩体距今约200万年，1940年设立为菲律宾首座国家公园（Wikipedia/nationalparks.org WebSearch 2026）",
};

const VERDE_ISLAND_PASSAGE: TerrainEntry = {
  id: "verde-island-passage",
  nameZh: "维德岛海峡",
  nameEn: "Verde Island Passage",
  category: "coast",
  regionId: "asia",
  country: "philippines",
  landmark: { name: "维德岛", lon: 121.0667, lat: 13.5333, elevation: 5, kind: "island" },
  bbox: [120.85, 13.35, 121.35, 13.75],
  label: { lon: 121.05, lat: 13.28, rotation: 0 },
  source: "维德岛海峡：巴丹加斯、民都洛、马林杜克与朗布伦四省之间一条狭窄海峡水道，被学界公认为全球海洋鱼类物种多样性“中心之中心”，已记录珊瑚物种逾400种；海峡内设有36处海洋保护区（巴丹加斯24处、东民都洛12处），2010年获国际海洋保护组织“使命蓝”认定为重要海洋生态热点（pemsea.org/calacademy.org WebSearch 2026）",
};

// ============================================================
// 亚洲 — 新加坡
// ============================================================

const BUKIT_TIMAH_NATURE_RESERVE: TerrainEntry = {
  id: "bukit-timah-nature-reserve",
  nameZh: "武吉知马自然保护区",
  nameEn: "Bukit Timah Nature Reserve",
  category: "hills",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "武吉知马山顶", lon: 103.7764, lat: 1.3547, elevation: 164, kind: "peak" },
  bbox: [103.765, 1.345, 103.79, 1.365],
  label: { lon: 103.7764, lat: 1.370, rotation: 0 },
  source: "武吉知马自然保护区：新加坡本岛最高点武吉知马山所在保护区，山体海拔164米，为花岗岩丘陵，19世纪末起曾长期开采花岗岩、20世纪中叶采石活动停止；1883年设立保护区，是新加坡现存为数不多的原始雨林之一，2011年获认定为东盟遗产公园（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const CENTRAL_CATCHMENT_NATURE_RESERVE: TerrainEntry = {
  id: "central-catchment-nature-reserve",
  nameZh: "中央集水区自然保护区",
  nameEn: "Central Catchment Nature Reserve",
  category: "hills",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "麦里芝蓄水池", lon: 103.8322, lat: 1.3417, elevation: 30, kind: "lake" },
  bbox: [103.78, 1.32, 103.84, 1.40],
  viewScale: 1.3,
  label: { lon: 103.81, lat: 1.41, rotation: 0 },
  source: "中央集水区自然保护区：新加坡面积最大的自然保护区，占地2880公顷，环绕麦里芝、上下皮尔斯、上实里达四座蓄水池分布；园内逾2000公顷为次生低地龙脑香林，另有约154公顷原生旱地雨林残片与87公顷梧槽原生淡水沼泽林，麦里芝一带保留有新加坡现存最完整的原生雨林之一（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const SUNGEI_BULOH_WETLAND_RESERVE: TerrainEntry = {
  id: "sungei-buloh-wetland-reserve",
  nameZh: "双溪布洛湿地保护区",
  nameEn: "Sungei Buloh Wetland Reserve",
  category: "coast",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "双溪布洛游客中心", lon: 103.7297, lat: 1.4468, elevation: 2, kind: "delta" },
  bbox: [103.71, 1.435, 103.745, 1.460],
  label: { lon: 103.71, lat: 1.465, rotation: 0 },
  source: "双溪布洛湿地保护区：新加坡西北部一处红树林湿地，紧邻克兰芝蓄水池，占地已从最初130公顷扩展至202公顷，涵盖红树林、泥滩、水塘与次生林，保留新加坡现存最大面积红树林；2003年成为新加坡首个东盟遗产公园，是东亚—澳大利西亚候鸟迁徙路线上的重要中途停歇地（Wikipedia/ASEAN Centre for Biodiversity WebSearch 2026）",
};

const CHEK_JAWA_WETLANDS: TerrainEntry = {
  id: "chek-jawa-wetlands",
  nameZh: "察哈湾湿地",
  nameEn: "Chek Jawa Wetlands",
  category: "coast",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "察哈湾观景塔", lon: 103.9985, lat: 1.4048, elevation: 2, kind: "delta" },
  bbox: [103.99, 1.398, 104.008, 1.412],
  label: { lon: 103.999, lat: 1.415, rotation: 0 },
  source: "察哈湾湿地：乌敏岛东端一处占地约100公顷的潮间带湿地，沙滩、岩岸、海草泻湖、珊瑚砾滩、红树林与海岸林六种生态系统在此交汇，退潮至0.5米以下水位时可见逾500种海洋物种；1992年曾计划填海开发，2001年经公众意见征询后无限期推迟，是新加坡潮间带生物多样性最丰富的地点之一（pulau-ubin.nparks.gov.sg WebSearch 2026）",
};

const PULAU_UBIN: TerrainEntry = {
  id: "pulau-ubin",
  nameZh: "乌敏岛",
  nameEn: "Pulau Ubin",
  category: "island",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "乌敏岛村落", lon: 103.9601, lat: 1.4108, elevation: 5, kind: "island" },
  bbox: [103.945, 1.400, 103.995, 1.420],
  label: { lon: 103.97, lat: 1.425, rotation: 0 },
  source: "乌敏岛：新加坡东北海域一座花岗岩岛屿，19世纪中叶起大规模开采花岗岩，石料曾用于兴建多座灯塔与新柔长堤；至1999年最后一座采石场关闭，岛上现存四座废弃采石场（吉甘、格格、乌敏、峇干），已演变为植被覆盖的景观水塘；岛上保留木屋、鸭寮与橡胶园等乡村景观，是新加坡现存少数保留传统乡村风貌的地区（Wikipedia/roots.gov.sg WebSearch 2026）",
};

const SISTERS_ISLANDS_MARINE_PARK: TerrainEntry = {
  id: "sisters-islands-marine-park",
  nameZh: "姐妹岛海洋公园",
  nameEn: "Sisters' Islands Marine Park",
  category: "island",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "大姐妹岛", lon: 103.8283, lat: 1.2089, elevation: 3, kind: "island" },
  bbox: [103.820, 1.202, 103.836, 1.216],
  label: { lon: 103.828, lat: 1.196, rotation: 0 },
  source: "姐妹岛海洋公园：2014年设立，是新加坡首座海洋公园，面积约40公顷，涵盖大小姐妹岛及圣约翰岛西侧礁盘与德古岛周边水域；园内珊瑚礁、沙滩与海草床生境为海马、砗磲与海绵等珍稀物种提供庇护，实马高岛填海工程中移植的珊瑚群落即安置于此，小姐妹岛设有海龟孵化站（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const LABRADOR_NATURE_RESERVE: TerrainEntry = {
  id: "labrador-nature-reserve",
  nameZh: "拉柏多自然保护区",
  nameEn: "Labrador Nature Reserve",
  category: "coast",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "拉柏多岩岸", lon: 103.8028, lat: 1.2661, elevation: 5, kind: "escarpment" },
  bbox: [103.795, 1.260, 103.810, 1.272],
  label: { lon: 103.803, lat: 1.276, rotation: 0 },
  source: "拉柏多自然保护区：新加坡本岛唯一对公众开放的岩岸海崖，2002年将10公顷次生海岸植被与岩岸划设为保护区；退潮时可见巨型弹涂鱼、蟹类、海葵、珊瑚、沙虫与鲎等多样潮间带生物，填海工程前这一带原是涨潮时的狭长海岸、退潮时露出岩滩（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const BUKIT_BATOK_NATURE_PARK: TerrainEntry = {
  id: "bukit-batok-nature-park",
  nameZh: "武吉巴督自然公园",
  nameEn: "Bukit Batok Nature Park",
  category: "hills",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "小桂林采石崖", lon: 103.7514, lat: 1.3492, elevation: 60, kind: "escarpment" },
  bbox: [103.745, 1.344, 103.758, 1.354],
  label: { lon: 103.751, lat: 1.358, rotation: 0 },
  source: "武吉巴督自然公园：占地36公顷，1988年在废弃的甘蒙采石场（曾开采辉长苏长岩）基础上辟建；高耸的花岗岩崖壁矗立于原采石场积水潭旁，因形似中国桂林喀斯特地貌而俗称“小桂林”；“武吉巴督”意为“咳嗽的山丘”，得名于早年采石作业发出的震动声响，2021年起崖壁曾多次发生滑坡（Wikipedia/littledayout.com WebSearch 2026）",
};

const CONEY_ISLAND_PARK: TerrainEntry = {
  id: "coney-island-park",
  nameZh: "西部海岸公园（甘榜岛）",
  nameEn: "Coney Island Park",
  category: "island",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "甘榜岛（西部海岸公园）", lon: 103.9101, lat: 1.4067, elevation: 3, kind: "island" },
  bbox: [103.90, 1.400, 103.925, 1.413],
  label: { lon: 103.912, lat: 1.417, rotation: 0 },
  source: "甘榜岛（旧称Pulau Serangoon）：新加坡东北海域一座岛屿，原始面积仅13公顷，历经多次填海扩展至约100公顷；园区涵盖木麻黄海岸林、红树林、开阔草地与次生林等多种生境，栖息约157种动物与80种鸟类；2015年西部海岸公园（面积50公顷）建成开放，以倒木改造步道与太阳能设施维持生态可持续（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const KRANJI_MARSHES: TerrainEntry = {
  id: "kranji-marshes",
  nameZh: "克兰芝沼泽",
  nameEn: "Kranji Marshes",
  category: "basin",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "克兰芝沼泽观鸟点", lon: 103.7317, lat: 1.4392, elevation: 3, kind: "delta" },
  bbox: [103.720, 1.432, 103.742, 1.447],
  label: { lon: 103.731, lat: 1.451, rotation: 0 },
  source: "克兰芝沼泽：新加坡面积最大的天然淡水沼泽，占地逾56公顷，1970年代克兰芝河筑坝形成克兰芝蓄水池后，低洼地带因积水意外形成沼泽湿地；栖息逾170种鸟类、54种蝴蝶与33种蜻蜓，2008年新加坡自然学会开始参与沼泽保育维护，目前仅约8公顷对公众开放（Wikipedia/nparks.gov.sg WebSearch 2026）",
};

const SOUTHERN_ISLANDS: TerrainEntry = {
  id: "southern-islands",
  nameZh: "南部离岛（圣约翰岛·拉扎鲁斯岛·龟屿）",
  nameEn: "Southern Islands (St John's, Lazarus & Kusu)",
  category: "island",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "圣约翰岛", lon: 103.8478, lat: 1.2231, elevation: 5, kind: "island" },
  bbox: [103.83, 1.20, 103.86, 1.235],
  label: { lon: 103.845, lat: 1.195, rotation: 0 },
  source: "南部离岛：新加坡本岛以南一组岛屿，圣约翰岛自19世纪末起曾用作检疫隔离站，1950至70年代改为戒毒康复中心；拉扎鲁斯岛因1899年岛上建有脚气病医院而得名“康复岛”；龟屿（“龟”为闽南语岛名意译）设有庙宇与放生龟池，每年农历九月吸引大量信众前往朝拜，三岛及周边水域现为新加坡知名的近岸休闲游憩区（Wikipedia/roots.gov.sg WebSearch 2026）",
};

const PULAU_SEMAKAU: TerrainEntry = {
  id: "pulau-semakau",
  nameZh: "实马高岛",
  nameEn: "Pulau Semakau",
  category: "island",
  regionId: "asia",
  country: "singapore",
  landmark: { name: "实马高垃圾埋置场", lon: 103.7683, lat: 1.1897, elevation: 3, kind: "island" },
  bbox: [103.755, 1.180, 103.780, 1.200],
  label: { lon: 103.768, lat: 1.175, rotation: 0 },
  source: "实马高岛：新加坡本岛以南约8公里一座离岛，1999年起是新加坡唯一在用的垃圾埋置场，1995年由实马高岛与沙金岛之间填筑石堤合并而成，堤身内衬防渗膜与海泥防止污染物渗漏；一期工程曾损毁13公顷红树林，环境局随后在13.6公顷人工滩涂补种40万株红树幼苗，二期工程中逾700群珊瑚移植至姐妹岛海域，如今岛上及周边保留红树林、珊瑚礁与海草床生态（Wikipedia/sg101.gov.sg WebSearch 2026）",
};

// ============================================================
// 亚洲 — 马来西亚
// ============================================================

const TITIWANGSA_MOUNTAINS: TerrainEntry = {
  id: "titiwangsa-mountains",
  nameZh: "蒂蒂旺沙山脉",
  nameEn: "Titiwangsa Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "哥打峰", lon: 101.267, lat: 4.833, elevation: 2183, kind: "peak" },
  bbox: [100.9, 2.2, 101.8, 6.2],
  axis: [[100.95, 5.8], [101.7, 2.6]],
  viewScale: 1.5,
  label: { lon: 101.35, lat: 4.5, rotation: -20 },
  source: "蒂蒂旺沙山脉：马来半岛的脊梁山系，呈西北—东南走向绵延约480公里，是马来半岛最长、最连贯的山脉；最高峰哥打峰海拔2183米，为半岛第二高峰（Wikipedia/worldatlas.com WebSearch 2026）",
};

const GUNUNG_TAHAN: TerrainEntry = {
  id: "gunung-tahan",
  nameZh: "大汉山（塔汉山）",
  nameEn: "Gunung Tahan",
  category: "mountain_system",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "大汉山主峰", lon: 102.24, lat: 4.633, elevation: 2187, kind: "peak" },
  bbox: [102.05, 4.35, 102.55, 4.85],
  viewScale: 1.3,
  label: { lon: 102.25, lat: 4.30, rotation: 0 },
  source: "大汉山：马来半岛最高峰，海拔2187米，位于彭亨与吉兰丹交界，是国家公园（大汉山国家公园）的核心地物，公园涵盖彭亨、吉兰丹、登嘉楼三州交界的大片低地热带雨林，是马来半岛现存最古老的雨林生态系统之一（Britannica/Wikipedia WebSearch 2026）",
};

const CAMERON_HIGHLANDS: TerrainEntry = {
  id: "cameron-highlands",
  nameZh: "金马仑高原",
  nameEn: "Cameron Highlands",
  category: "plateau",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "丹拉打镇", lon: 101.38, lat: 4.470, elevation: 1500, kind: "city" },
  bbox: [101.30, 4.40, 101.50, 4.55],
  viewScale: 1.2,
  label: { lon: 101.38, lat: 4.35, rotation: 0 },
  source: "金马仑高原：蒂蒂旺沙山脉中一片海拔1100至1800米的凉爽高原，1885年由威廉·金马仑勘察得名，20世纪初起被英国殖民当局开发为避暑高地；1929年首个茶园“波爹茶园”建成后发展为马来西亚重要的高山茶产区（Britannica WebSearch 2026）",
};

const MOUNT_KINABALU: TerrainEntry = {
  id: "mount-kinabalu",
  nameZh: "京那巴鲁山（神山）",
  nameEn: "Mount Kinabalu",
  category: "mountain_system",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "罗氏峰", lon: 116.5581, lat: 6.0754, elevation: 4095, kind: "peak" },
  bbox: [116.45, 5.90, 116.70, 6.20],
  viewScale: 1.3,
  label: { lon: 116.55, lat: 5.85, rotation: 0 },
  source: "京那巴鲁山：马来西亚与马来群岛最高峰，海拔4095米，是花岗岩侵入体，约1500万年前形成，为克罗克山脉的一部分；2000年京那巴鲁公园列入UNESCO世界遗产名录，是东南亚植物多样性核心地区之一，园内植物物种约5000至6000种（Britannica/UNESCO WebSearch 2026）",
};

const CROCKER_RANGE: TerrainEntry = {
  id: "crocker-range",
  nameZh: "克罗克山脉",
  nameEn: "Crocker Range",
  category: "mountain_system",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "克罗克山脉中段", lon: 116.30, lat: 5.50, elevation: 1500, kind: "peak" },
  bbox: [116.10, 5.10, 116.50, 6.00],
  axis: [[116.20, 5.90], [116.40, 5.15]],
  viewScale: 1.3,
  label: { lon: 116.20, lat: 5.55, rotation: -15 },
  source: "克罗克山脉：沙巴西部一条南北走向、长约120公里的山系，无突出的单一主峰，海拔介于6至2076米之间；克罗克山脉生物圈保护区面积达35万公顷，是婆罗洲岛上最大的保护区之一，2014年列入UNESCO人与生物圈计划（UNESCO/crbr.sabahparks.org.my WebSearch 2026）",
};

const KELABIT_HIGHLANDS: TerrainEntry = {
  id: "kelabit-highlands",
  nameZh: "格拉比高原",
  nameEn: "Kelabit Highlands",
  category: "plateau",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "巴里奥村", lon: 115.48, lat: 3.74, elevation: 1000, kind: "city" },
  bbox: [115.15, 3.55, 115.75, 4.05],
  viewScale: 1.2,
  label: { lon: 115.48, lat: 3.50, rotation: 0 },
  source: "格拉比高原：砂拉越最北端米里省内一片内陆高原，核心为巴里奥村所在的“巴平原”，海拔1000至1200米、南北延伸约30公里；周边最高峰穆鲁德山海拔2423米；是砂拉越原住民格拉比族的传统聚居地，全区约6800人（Wikipedia WebSearch 2026）",
};

const GUA_TEMPURUNG: TerrainEntry = {
  id: "gua-tempurung",
  nameZh: "东姑洞（椰壳洞）",
  nameEn: "Gua Tempurung",
  category: "gorge",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "东姑洞主厅", lon: 101.187, lat: 4.433, elevation: 100, kind: "gorge" },
  bbox: [101.14, 4.40, 101.23, 4.47],
  label: { lon: 101.19, lat: 4.46, rotation: 0 },
  source: "东姑洞：霹雳州哥打镇一处石灰岩溶洞，洞穴年代约4亿年，晚中新世（约1000万年前）经石灰岩溶蚀作用形成，全长约4.5公里，内有长约1.6公里的地下暗河，因周边石灰岩山体形似椰壳而得名（malaysia.travel/thelandofwanderlust.com WebSearch 2026）",
};

const BATU_CAVES: TerrainEntry = {
  id: "batu-caves",
  nameZh: "黑风洞",
  nameEn: "Batu Caves",
  category: "gorge",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "黑风洞石灰岩丘", lon: 101.6839, lat: 3.2379, elevation: 325, kind: "gorge" },
  bbox: [101.665, 3.225, 101.705, 3.250],
  label: { lon: 101.684, lat: 3.215, rotation: 0 },
  source: "黑风洞：雪兰莪州鹅麦一座海拔325米的石灰岩丘及其洞穴群，主体为志留纪石灰岩，年代约4亿年，三叠纪（约2亿年前）经历地壳抬升、挤压与褶皱等构造变形；洞穴由地下水长期溶蚀石灰岩形成，是马来西亚知名的溶洞地貌（Wikipedia WebSearch 2026）",
};

const GUNUNG_MULU_NP: TerrainEntry = {
  id: "gunung-mulu-np",
  nameZh: "姆鲁山国家公园",
  nameEn: "Gunung Mulu National Park",
  category: "gorge",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "姆鲁山尖峰石林", lon: 114.90, lat: 4.05, elevation: 2377, kind: "peak" },
  bbox: [114.75, 3.95, 115.05, 4.20],
  viewScale: 1.2,
  label: { lon: 114.90, lat: 4.25, rotation: 0 },
  source: "姆鲁山国家公园：砂拉越一处世界研究最深入的热带喀斯特地区，公园面积5.29万公顷，以海拔2377米的姆鲁山砂岩尖峰群与逾295公里已探明洞穴系统著称；砂拉越洞厅长600米、宽415米、高80米，是已知世界最大天然洞穴厅；鹿洞是世界第二大洞穴，2000年列入UNESCO世界遗产名录（UNESCO/Wikipedia WebSearch 2026）",
};

const NIAH_CAVES: TerrainEntry = {
  id: "niah-caves",
  nameZh: "尼亚洞穴",
  nameEn: "Niah Caves",
  category: "gorge",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "大洞（尼亚国家公园）", lon: 113.77, lat: 3.825, elevation: 394, kind: "gorge" },
  bbox: [113.72, 3.78, 113.82, 3.87],
  label: { lon: 113.77, lat: 3.88, rotation: 0 },
  source: "尼亚洞穴：砂拉越海岸平原苏比斯山石灰岩地块北缘的洞穴群，石灰岩层形成于该区域曾没于海底的古地质年代；大洞洞口高逾60米，洞内考古发现可追溯至约4万年前的人类活动痕迹，部分头骨碎片测定距今约6.5万年，是东南亚已知最早的人类遗迹之一，2024年列入UNESCO世界遗产名录（Wikipedia/nationalgeographic.com WebSearch 2026）",
};

const MALIAU_BASIN: TerrainEntry = {
  id: "maliau-basin",
  nameZh: "马利吾盆地（沙巴迷失的世界）",
  nameEn: "Maliau Basin",
  category: "basin",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "马利吾盆地中心", lon: 116.90, lat: 4.75, elevation: 900, kind: "peak" },
  bbox: [116.75, 4.60, 117.05, 4.90],
  viewScale: 1.2,
  label: { lon: 116.90, lat: 4.55, rotation: 0 },
  source: "马利吾盆地（俗称“沙巴迷失的世界”）：沙巴内陆一处近圆形碟状盆地，直径约25公里，外缘陡坡高差300至1600米，形成天然屏障；盆地由约1500万至900万年前三角洲沉积的砂岩与泥岩构成，约500万年前经火山与构造运动整体抬升为高原、中部再受风化侵蚀下陷为盆地（非死火山口）（Geological Society of Malaysia/mysabah.com WebSearch 2026）",
};

const DANUM_VALLEY: TerrainEntry = {
  id: "danum-valley",
  nameZh: "丹浓谷",
  nameEn: "Danum Valley",
  category: "valley",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "丹浓谷研究中心", lon: 117.80, lat: 5.03, elevation: 200, kind: "city" },
  bbox: [117.65, 4.90, 117.95, 5.15],
  label: { lon: 117.80, lat: 4.85, rotation: 0 },
  source: "丹浓谷保护区：沙巴中部一片面积438平方公里、基本未受干扰的低地龙脑香科雨林，1980年设立保护区，森林历史约1.3亿年，是世界现存最古老的雨林之一，95%为混合龙脑香林、5%为山地地形，1968年起被列为沙巴森林法一级（保护）林（Wikipedia/mysabah.com WebSearch 2026）",
};

const ENDAU_ROMPIN: TerrainEntry = {
  id: "endau-rompin",
  nameZh: "安顺—罗宾国家公园",
  nameEn: "Endau-Rompin National Park",
  category: "hills",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "安顺—罗宾公园总部", lon: 103.25, lat: 2.55, elevation: 150, kind: "city" },
  bbox: [103.05, 2.35, 103.55, 2.85],
  viewScale: 1.2,
  label: { lon: 103.25, lat: 2.30, rotation: 0 },
  source: "安顺—罗宾国家公园：横跨柔佛与彭亨两州、马来半岛南部现存最大的保护区，面积4.89万公顷，地貌以起伏丘陵、花岗岩露头、河谷与瀑布群为主；园内岩层年代可追溯至约2.48亿年前，雨林生态系统历史逾1.3亿年，是马来虎、马来貘等濒危旗舰物种的重要栖息地（ASEAN Centre for Biodiversity/Wikipedia WebSearch 2026）",
};

const LANGKAWI_GEOPARK: TerrainEntry = {
  id: "langkawi-geopark",
  nameZh: "浮罗交怡地质公园",
  nameEn: "Langkawi UNESCO Global Geopark",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "基林河喀斯特地质森林公园", lon: 99.85, lat: 6.42, elevation: 50, kind: "island" },
  bbox: [99.62, 6.15, 99.93, 6.50],
  label: { lon: 99.75, lat: 6.10, rotation: 0 },
  source: "浮罗交怡地质公园：2007年获认定为东南亚首个UNESCO世界地质公园，地质记录跨越逾5.5亿年，涵盖马来西亚保存最完整的寒武纪至二叠纪古生代沉积序列；基林河一带以石灰岩喀斯特地貌为主，长期溶蚀作用形成众多海蚀柱与海蚀拱，公园由玛琴昌寒武纪地质森林公园、基林喀斯特地质森林公园、浮罗浮浮大理岩地质森林公园三部分组成（UNESCO WebSearch 2026）",
};

const PENANG_ISLAND: TerrainEntry = {
  id: "penang-island",
  nameZh: "槟榔屿",
  nameEn: "Penang Island",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "升旗山", lon: 100.267, lat: 5.427, elevation: 833, kind: "island" },
  bbox: [100.15, 5.25, 100.35, 5.50],
  label: { lon: 100.30, lat: 5.20, rotation: 0 },
  source: "槟榔屿：马来半岛西北岸外一座花岗岩岛屿，最高点升旗山海拔833米，岛屿中心为森林覆盖的花岗岩丘陵、四周为沿海平原，北部区域岩体形成于早侏罗纪至晚石炭纪，南部区域为中粒至粗粒黑云母长石花岗岩，中央丘陵是重要的集水区，森林历史逾1.3亿年（Wikipedia/gsm.org.my WebSearch 2026）",
};

const TIOMAN_ISLAND: TerrainEntry = {
  id: "tioman-island",
  nameZh: "刁曼岛",
  nameEn: "Tioman Island",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "刁曼岛中央山体", lon: 104.161, lat: 2.786, elevation: 1038, kind: "island" },
  bbox: [104.10, 2.70, 104.20, 2.90],
  label: { lon: 104.10, lat: 2.65, rotation: 0 },
  source: "刁曼岛：彭亨州外南海一座火成岩岛屿，岩体主要由火山岩、深成岩与接触变质岩构成，东、北、南部以火山岩为主（流纹岩与英安岩，局部为安山岩），花岗岩体形成于晚白垩世（约8000万年前），比火山岩晚约880万年侵入，是马来西亚知名的潜水与生态旅游目的地（Geological Society of Malaysia WebSearch 2026）",
};

const PERHENTIAN_ISLANDS: TerrainEntry = {
  id: "perhentian-islands",
  nameZh: "停泊岛",
  nameEn: "Perhentian Islands",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "大停泊岛", lon: 102.73, lat: 5.90, elevation: 100, kind: "island" },
  bbox: [102.68, 5.85, 102.78, 5.97],
  label: { lon: 102.73, lat: 5.80, rotation: 0 },
  source: "停泊岛：登嘉楼州外南海一对花岗岩小岛（大停泊岛与小停泊岛），沿岸多白沙海滩与珊瑚礁，是马来半岛东岸知名的潜水与浮潜目的地，岛名“停泊”源自马来语，历史上曾是往来商船的停靠补给点（公开资料 WebSearch 2026）",
};

const REDANG_ISLAND: TerrainEntry = {
  id: "redang-island",
  nameZh: "热浪岛",
  nameEn: "Redang Island",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "热浪岛主岛", lon: 103.01, lat: 5.77, elevation: 150, kind: "island" },
  bbox: [102.95, 5.72, 103.08, 5.83],
  label: { lon: 103.01, lat: 5.68, rotation: 0 },
  source: "热浪岛：登嘉楼州外南海一座花岗岩岛屿，是马来西亚海洋公园的组成部分，沿岸珊瑚礁生态系统保存完好，是马来半岛东岸重要的珊瑚礁保护区与潜水目的地（公开资料 WebSearch 2026）",
};

const SIPADAN_ISLAND: TerrainEntry = {
  id: "sipadan-island",
  nameZh: "诗巴丹岛",
  nameEn: "Sipadan Island",
  category: "island",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "诗巴丹岛", lon: 118.629, lat: 4.115, elevation: 5, kind: "island" },
  bbox: [118.60, 4.09, 118.66, 4.14],
  label: { lon: 118.629, lat: 4.06, rotation: 0 },
  source: "诗巴丹岛：马来西亚唯一的海洋岛，坐落于西里伯斯海大陆架之外，是一座死火山锥历经数百万年珊瑚持续生长堆积而成的海底尖峰，峰体从海床垂直隆起约600米，四周环绕天然硬珊瑚礁，地处珊瑚三角区核心地带，已记录鱼类逾400种、珊瑚种类数以百计（zubludiving.com WebSearch 2026）",
};

const PAHANG_RIVER: TerrainEntry = {
  id: "pahang-river",
  nameZh: "彭亨河",
  nameEn: "Pahang River",
  category: "river",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "北根（彭亨河口）", lon: 103.39, lat: 3.49, elevation: 0, kind: "delta" },
  bbox: [102.35, 3.45, 103.45, 4.05],
  axis: [[102.36, 3.93], [103.39, 3.49]],
  viewScale: 1.2,
  label: { lon: 102.9, lat: 3.75, rotation: -20 },
  source: "彭亨河：马来半岛最长的河流，全长459公里，由哲莱河与淡美璐河两条源流在杰兰突以北约16公里处汇合而成，流域面积约2.9万平方公里，向南流经淡马鲁后在昔加末转向东流，最终于北根注入南海（Britannica WebSearch 2026）",
};

const KELANTAN_RIVER: TerrainEntry = {
  id: "kelantan-river",
  nameZh: "吉兰丹河",
  nameEn: "Kelantan River",
  category: "river",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "哥打巴鲁（吉兰丹河口）", lon: 102.24, lat: 6.13, elevation: 0, kind: "delta" },
  bbox: [101.85, 4.95, 102.30, 6.20],
  axis: [[101.9, 5.0], [102.24, 6.13]],
  viewScale: 1.2,
  label: { lon: 102.0, lat: 5.6, rotation: -10 },
  source: "吉兰丹河：马来半岛第四长河流，全长248公里，由加拉斯河与勒比河汇流而成，流域面积约1.19万平方公里，向北流经哥打巴鲁后注入南海，流域涵盖大汉山国家公园部分区域（Wikipedia WebSearch 2026）",
};

const PERAK_RIVER: TerrainEntry = {
  id: "perak-river",
  nameZh: "霹雳河",
  nameEn: "Perak River",
  category: "river",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "端洛（霹雳河口）", lon: 100.98, lat: 4.02, elevation: 0, kind: "delta" },
  bbox: [100.98, 4.02, 101.35, 5.65],
  axis: [[101.3, 5.60], [100.98, 4.02]],
  viewScale: 1.2,
  label: { lon: 101.15, lat: 4.8, rotation: -15 },
  source: "霹雳河：马来半岛第二长河流，全长约400公里，发源于霹雳、吉兰丹与泰国三方交界处、皇家贝伦州立公园一带的蒂蒂旺沙山脉，向南流经端洛注入马六甲海峡（Wikipedia WebSearch 2026）",
};

const KINABATANGAN_RIVER: TerrainEntry = {
  id: "kinabatangan-river",
  nameZh: "京那巴当岸河",
  nameEn: "Kinabatangan River",
  category: "river",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "苏高（京那巴当岸下游）", lon: 118.35, lat: 5.50, elevation: 20, kind: "meander" },
  bbox: [116.5, 5.2, 118.5, 5.9],
  axis: [[116.5, 5.3], [118.5, 5.9]],
  viewScale: 1.2,
  label: { lon: 117.5, lat: 5.7, rotation: -8 },
  source: "京那巴当岸河：马来西亚第二长河流，全长约560公里，发源于沙巴西南部克罗克山脉，向东流经桑达坎东南方注入苏禄海；下游河漫滩森林是全球仅有的两处可同时观察到10种灵长类动物的地点之一，2005年沙巴政府划设京那巴当岸野生动物保护区（Wikipedia/borneoecotours.com WebSearch 2026）",
};

const REJANG_RIVER: TerrainEntry = {
  id: "rejang-river",
  nameZh: "拉让江",
  nameEn: "Rejang River",
  category: "river",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "诗巫（拉让江畔最大城镇）", lon: 111.82, lat: 2.29, elevation: 10, kind: "meander" },
  bbox: [111.55, 1.95, 114.15, 2.60],
  axis: [[114.0, 2.30], [111.55, 2.20]],
  viewScale: 1.3,
  label: { lon: 112.8, lat: 2.15, rotation: 5 },
  source: "拉让江：马来西亚最长的河流，全长约563公里，发源于婆罗洲内陆伊兰山脉，向西流入南海，是婆罗洲第七长河流；沿岸最大城镇诗巫距河口约60公里，历史上是砂拉越内陆重要的木材与农产品运输水道（Wikivoyage/etawau.com WebSearch 2026）",
};

const TASIK_CHINI: TerrainEntry = {
  id: "tasik-chini",
  nameZh: "琴宁湖",
  nameEn: "Tasik Chini (Lake Chini)",
  category: "lake",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "琴宁湖", lon: 102.89, lat: 3.42, elevation: 40, kind: "lake" },
  bbox: [102.82, 3.36, 102.95, 3.48],
  label: { lon: 102.89, lat: 3.32, rotation: 0 },
  source: "琴宁湖：马来半岛第二大天然淡水湖，由12个相连的小湖组成，占地约5085公顷，距关丹约100公里；2009年获UNESCO认定为马来西亚首个生物圈保护区，湖区栖息138种植物、300余种非水生生物及144种淡水鱼，湖畔世居原住民奥朗阿斯利雅贡族（UNESCO/scmp.com WebSearch 2026）",
};

const BAKO_NATIONAL_PARK: TerrainEntry = {
  id: "bako-national-park",
  nameZh: "巴哥国家公园",
  nameEn: "Bako National Park",
  category: "coast",
  regionId: "asia",
  country: "malaysia",
  landmark: { name: "巴都卡帕海蚀柱", lon: 110.47, lat: 1.72, elevation: 10, kind: "escarpment" },
  bbox: [110.40, 1.68, 110.53, 1.78],
  label: { lon: 110.47, lat: 1.66, rotation: 0 },
  source: "巴哥国家公园：砂拉越一处沿岸砂岩地貌，历经数百万年海浪侵蚀塑造出陡峭悬崖、岬角与白沙海湾；海蚀作用在岬角处进一步侵蚀出造型奇特的海蚀拱与海蚀柱，柱体最高处约15米，表面因氧化铁沉积呈现橙红色条纹（Wikipedia/thestar.com.my WebSearch 2026）",
};

// ============================================================
// 亚洲 — 印度尼西亚
// ============================================================

const MOUNT_SEMERU: TerrainEntry = {
  id: "mount-semeru",
  nameZh: "塞梅鲁火山",
  nameEn: "Mount Semeru",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "塞梅鲁火山主峰（马哈梅鲁）", lon: 112.9224, lat: -8.1077, elevation: 3676, kind: "peak" },
  bbox: [112.85, -8.20, 113.00, -8.00],
  label: { lon: 112.92, lat: -7.95, rotation: 0 },
  source: "塞梅鲁火山：爪哇岛最高峰，海拔3676米，当地亦称“马哈梅鲁”（意为“伟大之山”），是印度尼西亚最活跃的层状火山之一；火山口平均每20分钟左右喷出一次蒸汽与烟尘，位于布罗莫—腾格尔—塞梅鲁国家公园内（national-parks.org/Wikipedia WebSearch 2026）",
};

const BROMO_TENGGER_CALDERA: TerrainEntry = {
  id: "bromo-tengger-caldera",
  nameZh: "布罗莫—腾格尔破火山口",
  nameEn: "Bromo Tengger Caldera",
  category: "basin",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "布罗莫火山口", lon: 112.9530, lat: -7.9425, elevation: 2329, kind: "peak" },
  bbox: [112.87, -8.00, 113.05, -7.87],
  viewScale: 1.2,
  label: { lon: 112.95, lat: -7.83, rotation: 0 },
  source: "腾格尔破火山口：直径约10公里的古火山破火山口，海拔约2100米，内部平地覆盖细密火山沙、称“沙海”，面积约5250公顷；破火山口内又生出布罗莫（2329米）、巴托克（2470米）等四座新火山锥，布罗莫火山口终年冒出白色硫磺烟雾，是国家公园内最著名的景观（national-parks.org/Wikipedia WebSearch 2026）",
};

const MOUNT_MERAPI: TerrainEntry = {
  id: "mount-merapi",
  nameZh: "默拉皮火山",
  nameEn: "Mount Merapi",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "默拉皮火山主峰", lon: 110.4457, lat: -7.5407, elevation: 2911, kind: "peak" },
  bbox: [110.38, -7.62, 110.51, -7.46],
  label: { lon: 110.44, lat: -7.40, rotation: 0 },
  source: "默拉皮火山：位于日惹以北约32公里的中爪哇层状火山，海拔2911米，是印度尼西亚130余座活火山中最活跃的一座，平均每5至10年喷发一次；历史上多次喷发伴随致命的火山碎屑流，2010年与2021年以来的喷发均造成人员伤亡与大规模疏散（Britannica/USGS WebSearch 2026）",
};

const IJEN_CRATER: TerrainEntry = {
  id: "ijen-crater",
  nameZh: "伊真火山口",
  nameEn: "Ijen Crater",
  category: "basin",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "伊真火山口湖", lon: 114.2422, lat: -8.0581, elevation: 2386, kind: "peak" },
  bbox: [114.17, -8.12, 114.30, -8.00],
  label: { lon: 114.24, lat: -7.96, rotation: 0 },
  source: "伊真火山：东爪哇一座硫磺活动强烈的火山，火山口最高处海拔约2799米，湖面所在的火山口边缘约2386米；火山口内是世界最大的强酸性火山口湖，直径约1公里、深约175米，硫磺气体在裂隙处点燃可达600摄氏度，形成“蓝色火焰”奇观——目前全球仅印尼与冰岛两地可见此现象，当地长期有矿工人工采集硫磺块（VolcanoDiscovery/geologyscience.com WebSearch 2026）",
};

const DIENG_PLATEAU: TerrainEntry = {
  id: "dieng-plateau",
  nameZh: "迪昂高原",
  nameEn: "Dieng Plateau",
  category: "plateau",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "迪昂火山群", lon: 109.9075, lat: -7.2010, elevation: 2000, kind: "peak" },
  bbox: [109.85, -7.28, 110.00, -7.12],
  viewScale: 1.1,
  label: { lon: 109.90, lat: -7.06, rotation: 0 },
  source: "迪昂高原：中爪哇一处海拔约2000米的火山高原，由两座以上层状火山与逾20个小型火山口组成，最高点海拔2565米；高原地热活动活跃，遍布喷气孔、硫磺温泉与火山口湖，1979年西尼拉火山口曾发生致命气体喷涌事故；高原上保留7至8世纪印度教神庙群遗址，各神庙以印度史诗《摩诃婆罗多》人物命名（Global Volcanism Program/Wikipedia WebSearch 2026）",
};

const GUNUNG_SEWU_KARST: TerrainEntry = {
  id: "gunung-sewu-karst",
  nameZh: "塞武山喀斯特",
  nameEn: "Gunung Sewu Karst",
  category: "plateau",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "巽他喀斯特石灰岩丘陵（贡吉德尔区域）", lon: 110.60, lat: -8.05, elevation: 200, kind: "peak" },
  bbox: [110.45, -8.25, 111.20, -7.85],
  axis: [[110.45, -8.05], [111.20, -8.05]],
  viewScale: 1.5,
  label: { lon: 110.80, lat: -7.78, rotation: 0 },
  source: "塞武山（“千山”）喀斯特：横跨日惹贡吉德尔、中爪哇沃诺吉里与东爪哇帕西坦三地的石灰岩喀斯特高原，东西延伸约120公里，2015年列入UNESCO世界地质公园网络；区域内分布逾4万座石灰岩丘陵与119个已勘察溶洞，洞内多见钟乳石、石笋与地下暗河，南侧濒临印度洋、沿岸留存多处未开发海滩（UNESCO/indonesia.travel WebSearch 2026）",
};

const KRAKATOA: TerrainEntry = {
  id: "krakatoa",
  nameZh: "喀拉喀托火山",
  nameEn: "Krakatoa",
  category: "island",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "喀拉喀托之子（阿纳克喀拉喀托）", lon: 105.423, lat: -6.102, elevation: 155, kind: "island" },
  bbox: [105.35, -6.20, 105.50, -6.05],
  label: { lon: 105.42, lat: -6.00, rotation: 0 },
  source: "喀拉喀托火山：位于爪哇岛与苏门答腊岛之间巽他海峡的火山岛，1883年8月26至27日的喷发是现代史上记录到的最强烈火山爆发之一，约三分之二、约23平方公里的岛体在喷发中沉入海峡，产生的海啸造成逾3.6万人死亡，爆炸声响传播逾4800公里；1927年底附近海域重新出现火山活动，1930年“喀拉喀托之子”浮出水面，此后持续生长喷发至今（NASA/Britannica WebSearch 2026）",
};

const LAKE_TOBA: TerrainEntry = {
  id: "lake-toba",
  nameZh: "多巴湖",
  nameEn: "Lake Toba",
  category: "lake",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "萨莫西岛（多巴湖心岛）", lon: 98.8756, lat: 2.6845, elevation: 905, kind: "lake" },
  bbox: [98.35, 2.10, 99.20, 3.10],
  axis: [[98.45, 2.25], [99.05, 2.95]],
  viewScale: 1.6,
  label: { lon: 98.75, lat: 2.05, rotation: 0 },
  source: "多巴湖：北苏门答腊一处火山破火山口湖，是印度尼西亚最大湖泊，长约100公里、宽约30公里，面积约1130平方公里，湖面海拔905米、最深处505米；湖盆由约7.4万年前一次超级火山喷发形成，是过去2500万年间地球已知规模最大的一次爆炸性喷发，火山灰层覆盖印度次大陆等广大区域；湖心矗立的萨莫西岛面积与新加坡相当，是全球最大的湖中岛之一（worldatlas.com/Wikipedia WebSearch 2026）",
};

const GUNUNG_LEUSER: TerrainEntry = {
  id: "gunung-leuser",
  nameZh: "勒塞尔山（古农勒塞尔国家公园）",
  nameEn: "Gunung Leuser National Park",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "勒塞尔山主峰", lon: 97.25, lat: 3.7167, elevation: 3466, kind: "peak" },
  bbox: [96.30, 2.70, 98.30, 4.60],
  axis: [[96.50, 4.50], [98.10, 2.85]],
  viewScale: 1.5,
  label: { lon: 97.30, lat: 4.65, rotation: -20 },
  source: "古农勒塞尔国家公园：横跨苏门答腊亚齐省与北苏门答腊省的国家公园，面积约7927平方公里，最高峰勒塞尔山海拔3466米，约40%的园区海拔超过1500米；2004年与克林芝—塞布拉特、巴里桑塞拉坦两座国家公园共同列入UNESCO“苏门答腊热带雨林遗产”名录，公园内的武吉拉旺是苏门答腊猩猩保护区所在地，也是苏门答腊虎、大象、犀牛等珍稀物种的栖息地（Wikipedia/UNESCO WebSearch 2026）",
};

const MOUNT_KERINCI: TerrainEntry = {
  id: "mount-kerinci",
  nameZh: "格林芝火山",
  nameEn: "Mount Kerinci",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "格林芝火山主峰", lon: 101.2642, lat: -1.6975, elevation: 3805, kind: "peak" },
  bbox: [101.15, -1.80, 101.38, -1.58],
  label: { lon: 101.26, lat: -1.52, rotation: 0 },
  source: "格林芝火山：苏门答腊岛最高峰，海拔3805米，是印度尼西亚全国海拔最高的火山，也是亚洲大陆岛屿中最高的活火山；山体坐落于以苏门答腊虎闻名的克林芝—塞布拉特国家公园内，2004年随“苏门答腊热带雨林遗产”整体列入UNESCO世界遗产名录（Wikipedia/PeakVisor WebSearch 2026）",
};

const MOUNT_AGUNG: TerrainEntry = {
  id: "mount-agung",
  nameZh: "阿贡火山",
  nameEn: "Mount Agung",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "阿贡火山主峰", lon: 115.5081, lat: -8.3405, elevation: 3031, kind: "peak" },
  bbox: [115.42, -8.42, 115.60, -8.25],
  label: { lon: 115.51, lat: -8.19, rotation: 0 },
  source: "阿贡火山：巴厘岛最高点，海拔3031米，是一座活跃层状火山，在巴厘印度教信仰中被视为神圣之山、传说为湿婆神居所，巴厘规模最大、地位最高的贝萨基母庙即建于山腰；沉寂53年后于2017年11月21日起再度喷发，多次喷发导致逾10万人疏散，火山灰云一度迫使伍拉赖国际机场关闭，活动持续至2019年6月（geology.com/USGS WebSearch 2026）",
};

const ULUWATU_CLIFFS: TerrainEntry = {
  id: "uluwatu-cliffs",
  nameZh: "乌鲁瓦图崖岸",
  nameEn: "Uluwatu Cliffs",
  category: "coast",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "乌鲁瓦图海崖", lon: 115.0849, lat: -8.8291, elevation: 70, kind: "escarpment" },
  bbox: [115.05, -8.85, 115.20, -8.75],
  label: { lon: 115.13, lat: -8.71, rotation: 0 },
  source: "乌鲁瓦图崖岸：巴厘岛南端武吉半岛的石灰岩崖岸，武吉半岛整体由古珊瑚礁抬升构成、地表干燥苍白，与岛屿北部的火山地貌形成鲜明对比；崖体从印度洋垂直陡起，部分崖壁高逾70米，崖顶建有悬崖神庙乌鲁瓦图庙，沿岸分布巴厘岛知名冲浪点（Wikivoyage/inbali.org WebSearch 2026）",
};

const NUSA_PENIDA: TerrainEntry = {
  id: "nusa-penida",
  nameZh: "佩尼达岛",
  nameEn: "Nusa Penida",
  category: "island",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "克林金崖", lon: 115.4592, lat: -8.7501, elevation: 150, kind: "escarpment" },
  bbox: [115.42, -8.78, 115.62, -8.66],
  label: { lon: 115.52, lat: -8.62, rotation: 0 },
  source: "佩尼达岛：巴厘岛东南海域的一座离岛，岛屿西南岸克林金崖由古珊瑚礁历经数百万年抬升形成的石灰岩崖体构成，崖顶高出海面约150米、崖下海滩长约80米，因轮廓形似恐龙而得名（当地语“克林金”原意为“小指”）；2016至2017年前后经社交媒体传播成为全球知名景点（nusapenida.org/theworldtravelguy.com WebSearch 2026）",
};

const MOUNT_RINJANI: TerrainEntry = {
  id: "mount-rinjani",
  nameZh: "林贾尼火山",
  nameEn: "Mount Rinjani",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "林贾尼火山主峰", lon: 116.4573, lat: -8.4108, elevation: 3726, kind: "peak" },
  bbox: [116.35, -8.48, 116.56, -8.33],
  label: { lon: 116.46, lat: -8.28, rotation: 0 },
  source: "林贾尼火山：龙目岛最高峰，海拔3726米，是印度尼西亚海拔第二高的火山，仅次于苏门答腊格林芝火山；山体内的塞加拉阿纳克火山口湖由1257年萨马拉斯火山剧烈喷发形成，湖面海拔2004米、面积约11.3平方公里，湖水温度20至22摄氏度、高于同海拔一般湖泊，因地下岩浆加热所致；湖东岸的巴鲁加里火山锥仍在持续活动（Wikipedia/rinjaninationalpark.com WebSearch 2026）",
};

const KELIMUTU: TerrainEntry = {
  id: "kelimutu",
  nameZh: "克利穆图火山湖",
  nameEn: "Kelimutu",
  category: "lake",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "克利穆图三色火山口湖", lon: 121.8177, lat: -8.7686, elevation: 1639, kind: "lake" },
  bbox: [121.77, -8.80, 121.86, -8.73],
  label: { lon: 121.82, lat: -8.68, rotation: 0 },
  source: "克利穆图火山：弗洛雷斯岛中部一座海拔1639米的火山，山顶并列三处火山口湖——蒂乌阿塔布普（“长者湖”）、蒂乌努阿穆里科塔伊（“青年少女湖”）与蒂乌阿塔波洛（“着魔湖”），三湖因矿物成分、水温与气体活动差异而呈现青绿、褐红等不同色泽，且颜色会随时间推移变化，是东南亚罕见的地质景观之一（Wikipedia/earthobservatory.nasa.gov WebSearch 2026）",
};

const KOMODO_NATIONAL_PARK: TerrainEntry = {
  id: "komodo-national-park",
  nameZh: "科莫多国家公园",
  nameEn: "Komodo National Park",
  category: "island",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "科莫多岛", lon: 119.4897, lat: -8.5455, elevation: 500, kind: "island" },
  bbox: [119.35, -8.75, 119.75, -8.40],
  viewScale: 1.3,
  label: { lon: 119.55, lat: -8.35, rotation: 0 },
  source: "科莫多国家公园：位于弗洛雷斯与松巴哇之间海域，面积逾1733平方公里（陆地约603平方公里），包含科莫多、帕达尔、林卡三座主岛与另外26座小岛，园内栖息约5700条科莫多巨蜥——现存体型最大的蜥蜴，也是全球仅存于此的物种；公园同时保护干草原、热带林地与珊瑚礁等多样生态系统，1991年列入UNESCO世界遗产名录（national-parks.org/UNESCO WebSearch 2026）",
};

const MOUNT_TAMBORA: TerrainEntry = {
  id: "mount-tambora",
  nameZh: "坦博拉火山",
  nameEn: "Mount Tambora",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "坦博拉火山破火山口", lon: 118.00, lat: -8.25, elevation: 2850, kind: "peak" },
  bbox: [117.85, -8.35, 118.15, -8.15],
  label: { lon: 118.00, lat: -8.10, rotation: 0 },
  source: "坦博拉火山：松巴哇岛北岸的层状火山，喷发前高度估计约4300米；1815年4月的喷发是人类历史有记录以来规模最大的火山爆发，火山爆发指数达VEI 7，喷出逾37立方公里的岩浆物质，山体喷发后塌陷降低逾1400米、现存海拔约2850米，火山碎屑流、地震与海啸共造成至少1万人直接死亡；喷出的火山灰扩散至全球大气层，导致1816年北半球出现“无夏之年”，欧洲多地夏季气温创1766年以来最低纪录（Britannica/Wikipedia WebSearch 2026）",
};

const TANJUNG_PUTING: TerrainEntry = {
  id: "tanjung-puting",
  nameZh: "丹绒普丁国家公园",
  nameEn: "Tanjung Puting National Park",
  category: "river",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "塞孔耶尔河（丹绒普丁河道）", lon: 111.85, lat: -2.75, elevation: 5, kind: "delta" },
  bbox: [111.55, -3.20, 112.30, -2.55],
  axis: [[111.70, -2.65], [112.10, -3.10]],
  viewScale: 1.3,
  label: { lon: 111.90, lat: -2.50, rotation: 0 },
  source: "丹绒普丁国家公园：中加里曼丹沿岸国家公园，面积约41.6万公顷，由旱地龙脑香林、泥炭沼泽林、石楠林、红树林与海岸林等多种生境组成，是婆罗洲现存面积最大、类型最完整的热带泥炭沼泽林保护区之一；1971年灵长类学家比鲁泰·高尔迪卡斯在此建立利基营地研究站，公园以塞孔耶尔河沿岸的红毛猩猩保育与观察闻名，1935年设为禁猎区、1982年正式升格为国家公园（orangutanfoundation.org.au/Wikivoyage WebSearch 2026）",
};

const KAPUAS_RIVER: TerrainEntry = {
  id: "kapuas-river",
  nameZh: "卡普阿斯河",
  nameEn: "Kapuas River",
  category: "river",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "卡普阿斯河河口（坤甸段）", lon: 109.3333, lat: 0.02, elevation: 5, kind: "delta" },
  bbox: [109.30, -1.20, 113.50, 0.90],
  axis: [[112.90, 0.50], [109.35, 0.05]],
  viewScale: 2.0,
  label: { lon: 111.00, lat: 0.90, rotation: 0 },
  source: "卡普阿斯河：印度尼西亚第一长河、婆罗洲岛第一长河，全长约1143公里，发源于西加里曼丹穆勒山脉，自东向西流经山地、沼泽与低地雨林，最终于坤甸附近注入南海；数百年来一直是西加里曼丹沿海与内陆之间贸易与人员往来的主要水道，全流域是东南亚生物多样性最丰富的河流生态系统之一（Wikipedia/indonesia.travel WebSearch 2026）",
};

const TANA_TORAJA: TerrainEntry = {
  id: "tana-toraja",
  nameZh: "塔纳托拉查高原",
  nameEn: "Tana Toraja",
  category: "plateau",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "兰特包（塔纳托拉查中心城镇）", lon: 119.8233, lat: -3.0875, elevation: 800, kind: "city" },
  bbox: [119.65, -3.25, 119.95, -2.85],
  viewScale: 1.2,
  label: { lon: 119.80, lat: -2.79, rotation: 0 },
  source: "塔纳托拉查：南苏拉威西岛内陆高地，面积约2044平方公里，地势起伏、最低点海拔150米、最高点3083米；地貌以石灰岩喀斯特山地、梯田与竹林为主，中心城镇兰特包四周环绕典型喀斯特峰丛与河流；“托拉查”一词源自布吉语，意为“高地上的人”，指代当地世居民族（Wikipedia/journeybeyondhorizon.com WebSearch 2026）",
};

const BUNAKEN_NATIONAL_PARK: TerrainEntry = {
  id: "bunaken-national-park",
  nameZh: "布纳肯国家公园",
  nameEn: "Bunaken National Park",
  category: "coast",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "布纳肯岛", lon: 124.7614, lat: 1.6214, elevation: 20, kind: "island" },
  bbox: [124.70, 1.55, 124.85, 1.70],
  label: { lon: 124.77, lat: 1.50, rotation: 0 },
  source: "布纳肯国家公园：北苏拉威西万鸦老附近海域的国家公园，面积约890平方公里，97%为海域、3%为布纳肯、马纳多图阿等五座岛屿；园区栖息约390种珊瑚与约2000种鱼类，曼纳多湾水深可达1566米，大陆架构造断层形成的垂直峭壁与陡坡是其标志性水下地貌，1991年设立、是印度尼西亚最早的海洋国家公园体系之一（Wikipedia/indiansinindonesia.org WebSearch 2026）",
};

const WAKATOBI: TerrainEntry = {
  id: "wakatobi",
  nameZh: "瓦卡托比群岛",
  nameEn: "Wakatobi",
  category: "coast",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "旺吉旺吉岛", lon: 123.6167, lat: -5.2833, elevation: 10, kind: "island" },
  bbox: [123.35, -5.85, 124.15, -5.05],
  viewScale: 1.4,
  label: { lon: 123.75, lat: -4.99, rotation: 0 },
  source: "瓦卡托比：位于苏拉威西岛东南端外海的群岛，名称取自旺吉旺吉、卡莱杜帕、托米亚、比农果四座主岛首字母；2002年设立瓦卡托比国家公园，总面积约140万公顷（其中珊瑚礁约90万公顷），拥有25组珊瑚礁群、岸礁与环礁类型齐全，礁体周长逾600公里，记录鱼类942种、珊瑚750种，自2005年起被列入UNESCO世界遗产预备名录，是印度尼西亚境内规模仅次于大堡礁的大型珊瑚礁体系之一（reefresilience.org/nationalparksassociation.org WebSearch 2026）",
};

const BANDA_ISLANDS: TerrainEntry = {
  id: "banda-islands",
  nameZh: "班达群岛",
  nameEn: "Banda Islands",
  category: "island",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "班达阿皮火山", lon: 129.8975, lat: -4.5253, elevation: 670, kind: "island" },
  bbox: [129.83, -4.60, 130.05, -4.45],
  label: { lon: 129.90, lat: -4.40, rotation: 0 },
  source: "班达群岛：马鲁古省一处由内伊拉、班达贝萨尔、班达阿皮等11座小型火山岛组成的群岛，陆地总面积约8150公顷；班达阿皮火山海拔约670米，1820年与1852年两次喷发均造成严重破坏；群岛火山土壤适宜肉豆蔻生长，19世纪中叶以前是全球唯一的肉豆蔻与肉豆蔻干皮产地，长期是南亚、阿拉伯与东亚海上贸易网络的重要枢纽（Britannica/factsanddetails.com WebSearch 2026）",
};

const BELITUNG_ISLAND: TerrainEntry = {
  id: "belitung-island",
  nameZh: "勿里洞岛",
  nameEn: "Belitung Island",
  category: "coast",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "丹绒丁宜海滩花岗岩巨石", lon: 107.6482, lat: -2.7410, elevation: 5, kind: "escarpment" },
  bbox: [107.55, -2.85, 107.85, -2.55],
  label: { lon: 107.70, lat: -2.50, rotation: 0 },
  source: "勿里洞岛：邦加—勿里洞省的一座岛屿，沿岸分布大量花岗岩“托尔”地貌巨石，历经数百万年风化侵蚀形成浑圆巨型岩块、部分体量如房屋高大，与洁白沙滩、浅蓝海水相映；岛上还发现比例达全球已知量18%至19%的“勿里洞石”（一种陨石撞击成因的天然玻璃），2021年列入UNESCO世界地质公园网络（unesco.org/outchasingstars.com WebSearch 2026）",
};

const PUNCAK_JAYA: TerrainEntry = {
  id: "puncak-jaya",
  nameZh: "查亚峰",
  nameEn: "Puncak Jaya",
  category: "mountain_system",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "查亚峰（卡斯滕兹金字塔）", lon: 137.1583, lat: -4.0783, elevation: 4884, kind: "peak" },
  bbox: [137.05, -4.15, 137.30, -4.00],
  label: { lon: 137.18, lat: -3.95, rotation: 0 },
  source: "查亚峰：新几内亚岛苏迪尔曼山脉的主峰，海拔4884米，是印度尼西亚全国最高点，也是大洋洲及全球所有岛屿中的最高峰，登山界常称“卡斯滕兹金字塔”，为“七大洲最高峰”中代表大洋洲的一座；查亚峰是热带地区极少数存在永久冰雪的山峰之一，但当地气象气候地球物理局多年监测显示冰川持续消融，山体所在的洛伦茨国家公园已列入UNESCO世界遗产名录（Wikipedia/nationalgeographic.org WebSearch 2026）",
};

const RAJA_AMPAT: TerrainEntry = {
  id: "raja-ampat",
  nameZh: "拉贾安帕群岛",
  nameEn: "Raja Ampat",
  category: "coast",
  regionId: "asia",
  country: "indonesia",
  landmark: { name: "怀吉奥岛海域（皮亚涅莫观景台一带）", lon: 130.1167, lat: -0.5667, elevation: 20, kind: "island" },
  bbox: [130.00, -0.90, 131.20, -0.10],
  viewScale: 1.4,
  label: { lon: 130.60, lat: -0.05, rotation: 0 },
  source: "拉贾安帕群岛：位于“珊瑚三角区”核心地带的群岛，涵盖逾1500座岛屿，主岛为米索尔、萨拉瓦蒂、巴丹塔与怀吉奥；海域记录鱼类逾1800种、珊瑚逾550种，其中锦鲤角一处潜点单次记录到374种鱼类、创下全球纪录，浅海珊瑚礁物种占全球已知珊瑚物种的75%；印度洋与太平洋在此交汇，深海洋流带来的营养物质造就了这片“物种工厂”式的海洋生态系统（reefresilience.org/wwf.panda.org WebSearch 2026）",
};

// ============================================================
// 亚洲 — 哈萨克斯坦
// ============================================================

const ZAILIYSKY_ALATAU: TerrainEntry = {
  id: "zailiysky-alatau",
  nameZh: "外伊犁阿拉套山",
  nameEn: "Zailiysky Alatau (Trans-Ili Alatau)",
  category: "mountain_system",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "塔尔加尔峰", lon: 77.9989, lat: 42.9503, elevation: 4979, kind: "peak" },
  bbox: [76.20, 42.70, 79.50, 43.35],
  axis: [[76.30, 43.10], [79.30, 42.90]],
  viewScale: 1.4,
  label: { lon: 77.80, lat: 42.65, rotation: 0 },
  source: "外伊犁阿拉套山：北天山的一段，东西延展约350公里，最高峰塔尔加尔峰海拔4979米，南坡科尔任涅夫斯基冰川长约12公里、是山系最大冰川；哈萨克斯坦旧都阿拉木图坐落于山麓北侧，1996年设立伊犁阿拉套国家公园（面积约20万公顷）保护山系北坡（Wikipedia/PeakVisor WebSearch 2026）",
};

const KARKARALY_MOUNTAINS: TerrainEntry = {
  id: "karkaraly-mountains",
  nameZh: "卡尔卡拉雷山",
  nameEn: "Karkaraly Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "卡尔卡拉雷山最高点", lon: 75.833, lat: 49.183, elevation: 1403, kind: "peak" },
  bbox: [75.60, 49.05, 76.10, 49.35],
  label: { lon: 75.83, lat: 49.02, rotation: 0 },
  source: "卡尔卡拉雷山：哈萨克丘陵（萨雷阿尔卡）腹地一处花岗岩山地，约3至4亿年前海水退去、岩层抬升形成，最高点海拔1403米；山地低坡为草原、高坡分布哈萨克斯坦较靠南的松林之一，1998年设立卡尔卡拉雷国家公园（面积约11.2万公顷），是草原深处一块罕见的森林—湖泊—花岗岩山地绿洲（astanatimes.com/Wikipedia WebSearch 2026）",
};

const TARBAGATAI_MOUNTAINS: TerrainEntry = {
  id: "tarbagatai-mountains",
  nameZh: "塔尔巴哈台山",
  nameEn: "Tarbagatai Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "塔尔巴哈台山主脊", lon: 83.00, lat: 47.50, elevation: 2992, kind: "peak" },
  bbox: [81.50, 46.90, 84.50, 48.00],
  axis: [[81.60, 47.10], [84.30, 47.90]],
  viewScale: 1.3,
  label: { lon: 82.90, lat: 48.10, rotation: -15 },
  source: "塔尔巴哈台山：哈萨克斯坦东部沿中哈边境延伸的一段山系，与南侧的萨吾尔山共同构成萨吾尔—塔尔巴哈台山地，山体呈西北—东南走向，是准噶尔盆地北缘与哈萨克丘陵之间的地理过渡带（Wikipedia WebSearch 2026）",
};

const BEKTAU_ATA: TerrainEntry = {
  id: "bektau-ata",
  nameZh: "别克套阿塔花岗岩山",
  nameEn: "Bektau-Ata",
  category: "inselberg",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "别克套阿塔主峰", lon: 75.55, lat: 47.35, elevation: 1214, kind: "peak" },
  bbox: [75.40, 47.25, 75.70, 47.45],
  label: { lon: 75.55, lat: 47.20, rotation: 0 },
  source: "别克套阿塔：巴尔喀什湖以北约70公里处一处碱性花岗岩体，直径约15公里、巨石散布范围逾170平方公里，最高点海拔1214米；石炭—二叠纪之交岩浆侵入地下冷却形成花岗岩穹丘，历经长期风化剥蚀出露地表，常年强风将岩块磨蚀出浑圆轮廓，岩体内奥利耶塔斯洞穴藏有淡水泉，当地视为圣地（mindat.org/aboutkazakhstan.com WebSearch 2026）",
};

const USTYURT_PLATEAU: TerrainEntry = {
  id: "ustyurt-plateau",
  nameZh: "乌斯秋尔特高原",
  nameEn: "Ustyurt Plateau",
  category: "plateau",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "乌斯秋尔特高原（曼格斯套段）", lon: 55.50, lat: 43.50, elevation: 300, kind: "peak" },
  bbox: [52.50, 42.50, 58.00, 45.50],
  viewScale: 1.8,
  label: { lon: 55.50, lat: 45.60, rotation: 0 },
  source: "乌斯秋尔特高原：里海与咸海之间一片广袤的粘土荒漠台地，跨哈萨克斯坦与乌兹别克斯坦，哈萨克斯坦境内主要位于曼格斯套州；高原地表由古海底沉积岩层构成，边缘断崖陡峭，是中亚荒漠中一处典型的台地地貌（Wikipedia/eurasia.travel WebSearch 2026）",
};

const KARAGIYE_DEPRESSION: TerrainEntry = {
  id: "karagiye-depression",
  nameZh: "卡拉吉耶洼地",
  nameEn: "Karagiye Depression",
  category: "basin",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "卡拉吉耶洼地最低点（坎德洼地）", lon: 51.75, lat: 43.60, elevation: -132, kind: "peak" },
  bbox: [51.40, 43.40, 52.20, 43.90],
  label: { lon: 51.75, lat: 43.30, rotation: 0 },
  source: "卡拉吉耶洼地：曼格斯套半岛一处喀斯特凹地，距阿克套约50公里，最低点海拔约-132米，是哈萨克斯坦全国最低点、也是中亚及前苏联地区最低点，全球排名第五（次于死海、阿萨勒湖、吐鲁番盆地与卡塔拉洼地）；地下水长期溶蚀地层形成溶洞与地下空腔，上覆砂层塌陷后形成如今长约40公里、宽约25公里的巨型碗状洼地（Wikipedia/eurasia.travel WebSearch 2026）",
};

const BETPAK_DALA_DESERT: TerrainEntry = {
  id: "betpak-dala-desert",
  nameZh: "别特帕克达拉沙漠",
  nameEn: "Betpak-Dala Desert",
  category: "desert",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "别特帕克达拉沙漠中心", lon: 70.00, lat: 46.50, elevation: 300, kind: "dune" },
  bbox: [68.00, 45.50, 73.00, 47.50],
  viewScale: 1.8,
  label: { lon: 70.00, lat: 47.60, rotation: 0 },
  source: "别特帕克达拉沙漠：哈萨克斯坦中部一片粘土荒漠，南北长约170公里、东西延展约500公里，面积约7.5万平方公里，是世界最大的粘土荒漠之一；西部为中生代褶皱岩层与古近纪松散岩层，东部丘陵区由早古生代沉积—变质岩与花岗岩构成，年降水量仅100至150毫米，几乎无人居住（Britannica/mindat.org WebSearch 2026）",
};

const MOIYNKUM_DESERT: TerrainEntry = {
  id: "moiynkum-desert",
  nameZh: "莫因库姆沙漠",
  nameEn: "Moiynkum Desert",
  category: "desert",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "莫因库姆沙丘", lon: 71.50, lat: 44.50, elevation: 400, kind: "dune" },
  bbox: [69.50, 43.50, 73.50, 45.50],
  viewScale: 1.6,
  label: { lon: 71.50, lat: 45.60, rotation: 0 },
  source: "莫因库姆沙漠：哈萨克斯坦南部图尔克斯坦州与江布尔州境内的沙质荒漠，总面积约3.75万平方公里，是古代丝绸之路商队穿越中亚的传统路线之一，如今部分区域仍可体验骆驼商队式的沙漠旅行（Wikipedia WebSearch 2026）",
};

const CHARYN_CANYON: TerrainEntry = {
  id: "charyn-canyon",
  nameZh: "查伦峡谷",
  nameEn: "Charyn Canyon",
  category: "gorge",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "城堡谷", lon: 79.07, lat: 43.35, elevation: 1100, kind: "gorge" },
  bbox: [79.00, 43.28, 79.20, 43.42],
  label: { lon: 79.07, lat: 43.24, rotation: 0 },
  source: "查伦峡谷：阿拉木图以东约200公里、临近中哈边境的峡谷，全长约154公里，常被称为“中亚大峡谷”，保护区面积约12.7万公顷；峡谷谷底海拔约1100米，崖壁最深处约300米，历经约1200万年风蚀水蚀形成，其中“城堡谷”一段红色砂岩因氧化铁沉积呈暖色调、经风化雕琢出形似中世纪城堡与塔楼的岩体，是峡谷内最具标志性的一段（charyncanyon.org/Wikipedia WebSearch 2026）",
};

const BOZZHYRA: TerrainEntry = {
  id: "bozzhyra",
  nameZh: "博兹吉拉峡谷",
  nameEn: "Bozzhyra",
  category: "gorge",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "博兹吉拉“獠牙”岩塔", lon: 54.15, lat: 43.85, elevation: 200, kind: "gorge" },
  bbox: [54.00, 43.75, 54.35, 43.95],
  label: { lon: 54.15, lat: 43.68, rotation: 0 },
  source: "博兹吉拉：哈萨克语意为“灰色沟壑”，位于乌斯秋尔特高原西缘曼格斯套半岛的一处巨型峡谷群，由5000万至8000万年前的古海底沉积白垩岩层构成，石灰岩层堆积厚度达250米、内含古海洋生物化石；峡谷内两座高逾200米的“獠牙”岩塔是当地拍摄最多的地标，因干燥崎岖的地表常被形容为“火星地貌”（orexca.com/astanatimes.com WebSearch 2026）",
};

const MEDEU_GORGE: TerrainEntry = {
  id: "medeu-gorge",
  nameZh: "梅德奥峡谷",
  nameEn: "Medeu Gorge",
  category: "valley",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "梅德奥高山溜冰场", lon: 77.05, lat: 43.15, elevation: 1691, kind: "peak" },
  bbox: [76.98, 43.10, 77.12, 43.20],
  label: { lon: 77.05, lat: 43.06, rotation: 0 },
  source: "梅德奥峡谷：阿拉木图东南约14公里处、外伊犁阿拉套山麓小阿拉木图河谷内的一处山地峡谷，海拔1520至1750米，1972年在此建成的高山溜冰场是全球海拔最高的人工溜冰场之一；峡谷下游建有梅德奥泥石流防护坝，用于拦截山区季节性泥石流、保护阿拉木图市区（Wikipedia WebSearch 2026）",
};

const LAKE_BALKHASH: TerrainEntry = {
  id: "lake-balkhash",
  nameZh: "巴尔喀什湖",
  nameEn: "Lake Balkhash",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "乌津阿拉尔海峡（湖心窄峡）", lon: 75.70, lat: 46.65, elevation: 340, kind: "lake" },
  bbox: [73.50, 45.50, 79.50, 47.00],
  axis: [[73.60, 46.20], [79.20, 46.70]],
  viewScale: 2.0,
  label: { lon: 76.50, lat: 47.10, rotation: 0 },
  source: "巴尔喀什湖：面积约1.64万至1.82万平方公里（随季节水位波动），是世界第十五大湖、第二大咸水湖；湖泊西半部因伊犁河大量淡水注入、含盐量低于每升1克，东半部河流补给少、蒸发强烈、含盐量达每升3至6克，湖心宽约3.5公里的乌津阿拉尔海峡阻碍东西两半湖水充分混合，是全球罕见的“一湖两水”咸淡并存的湖泊（worldatlas.com/globecharting.com WebSearch 2026）",
};

const KOLSAI_LAKES: TerrainEntry = {
  id: "kolsai-lakes",
  nameZh: "科尔赛湖",
  nameEn: "Kolsai Lakes",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "科尔赛下湖", lon: 78.35, lat: 42.95, elevation: 1818, kind: "lake" },
  bbox: [78.25, 42.85, 78.55, 43.05],
  label: { lon: 78.35, lat: 42.80, rotation: 0 },
  source: "科尔赛湖：北天山一处山谷内自下而上分布的三座梯级湖泊——下湖（海拔1818米）、中湖（2252米）、上湖（2850米），2012年列入UNESCO科尔赛—凯恩迪国家公园生物圈保护区；该区域地震活动频繁，三座湖泊均由历史上的地震滑坡堵塞河谷形成（Wikipedia/thegonegoat.com WebSearch 2026）",
};

const KAINDY_LAKE: TerrainEntry = {
  id: "kaindy-lake",
  nameZh: "凯恩迪湖",
  nameEn: "Kaindy Lake",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "凯恩迪“水下森林”", lon: 78.50, lat: 42.95, elevation: 2000, kind: "lake" },
  bbox: [78.44, 42.90, 78.56, 43.00],
  label: { lon: 78.50, lat: 42.85, rotation: 0 },
  source: "凯恩迪湖：科尔赛—凯恩迪国家公园内一处长约400米、海拔约2000米的山地湖泊，1911年一次地震引发山体滑坡堵塞峡谷、河水蓄积成湖，原本生长在谷底的雪岭云杉被淹没；湖水常年低温（盛夏约6摄氏度）且含氧量低，减缓了树干腐烂速度，逾百年后水下依然可见成排挺立的枯树干，是当地标志性的“水下森林”景观（meganstarr.com/wandersmiles.com WebSearch 2026）",
};

const BIG_ALMATY_LAKE: TerrainEntry = {
  id: "big-almaty-lake",
  nameZh: "大阿拉木图湖",
  nameEn: "Big Almaty Lake",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "大阿拉木图湖", lon: 76.98, lat: 43.05, elevation: 2511, kind: "lake" },
  bbox: [76.93, 43.00, 77.03, 43.09],
  label: { lon: 76.98, lat: 42.96, rotation: 0 },
  source: "大阿拉木图湖：外伊犁阿拉套山中一处冰川湖，位于阿拉木图以南约15公里处、海拔2511米，长约1.6公里、宽0.75至1公里、深30至40米，由冰川侵蚀形成的圈谷积水而成；湖水因冰川侵蚀带来的矿物质呈现独特的青绿色，20世纪50至60年代曾在此建水电站，1980年代起成为阿拉木图市区饮用水源之一（Wikipedia/almaty-travel.com WebSearch 2026）",
};

const KORGALZHYN_RESERVE: TerrainEntry = {
  id: "korgalzhyn-reserve",
  nameZh: "科尔加尔津—滕吉兹湖系",
  nameEn: "Korgalzhyn-Tengiz Lake System",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "滕吉兹湖", lon: 69.00, lat: 50.50, elevation: 304, kind: "lake" },
  bbox: [67.50, 49.80, 70.50, 51.20],
  viewScale: 1.5,
  label: { lon: 69.00, lat: 51.30, rotation: 0 },
  source: "科尔加尔津—滕吉兹湖系：哈萨克斯坦北部草原深处的湿地湖群，1968年设立科尔加尔津国家自然保护区、面积逾54万公顷；滕吉兹湖是区内最大水体，哈萨克语意为“海”，逾1500万只候鸟经此迁徙、逾30万只在此繁殖，科尔加尔津湖是大红鹳全球分布最靠北的营巢地之一；2008年与纳乌尔祖姆保护区共同以“萨雷阿尔卡——哈萨克斯坦北部的草原与湖泊”列入UNESCO世界遗产名录，2012年获认定为哈萨克斯坦首个生物圈保护区（whc.unesco.org/Wikipedia WebSearch 2026）",
};

const NORTH_ARAL_SEA: TerrainEntry = {
  id: "north-aral-sea",
  nameZh: "北咸海",
  nameEn: "North Aral Sea",
  category: "lake",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "北咸海（科克阿拉尔坝以北）", lon: 60.10, lat: 46.10, elevation: 42, kind: "salt-lake" },
  bbox: [59.00, 45.50, 61.80, 46.80],
  viewScale: 1.4,
  label: { lon: 60.10, lat: 46.90, rotation: 0 },
  source: "北咸海：哈萨克斯坦境内咸海北部水域，20世纪中叶以来因上游农业灌溉大量引水，咸海水量急剧萎缩、一度几近干涸；2005年建成长约13公里的科克阿拉尔坝，将北咸海与南部水域分隔并逐步蓄水，此后20年间北咸海面积扩大约36%、水量几近翻倍、含盐度下降约一半，渔业逐步恢复；哈萨克斯坦政府与世界银行正推进二期修复工程，计划进一步扩大水域面积（astanatimes.com/globalvoices.org WebSearch 2026）",
};

const CASPIAN_SEA_COAST_KAZAKHSTAN: TerrainEntry = {
  id: "caspian-sea-coast-kazakhstan",
  nameZh: "里海岸（曼格斯套段）",
  nameEn: "Caspian Sea Coast (Mangystau)",
  category: "coast",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "阿克套海滨", lon: 51.15, lat: 43.65, elevation: 0, kind: "city" },
  bbox: [50.80, 43.30, 51.60, 44.60],
  viewScale: 1.3,
  label: { lon: 51.20, lat: 44.70, rotation: 0 },
  source: "里海：面积约37.1万平方公里、水体约7.82万立方公里，是全球最大的内陆水体，沿岸为俄罗斯、哈萨克斯坦、土库曼斯坦、伊朗与阿塞拜疆五国；哈萨克斯坦境内海岸线主要位于曼格斯套州，阿克套是这段海岸最大城市、气候干燥少雨，历史上盛产鲟鱼与鱼子酱，近年因石油天然气开采等因素，海域水位持续下降引发关注（remotelands.com/astanatimes.com WebSearch 2026）",
};

const ILI_RIVER: TerrainEntry = {
  id: "ili-river",
  nameZh: "伊犁河（哈萨克斯坦段）",
  nameEn: "Ili River (Kazakhstan)",
  category: "river",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "伊犁河三角洲", lon: 74.00, lat: 45.50, elevation: 340, kind: "delta" },
  bbox: [74.00, 44.50, 79.30, 45.90],
  axis: [[79.20, 43.60], [74.10, 45.50]],
  viewScale: 1.4,
  label: { lon: 76.50, lat: 44.30, rotation: -10 },
  source: "伊犁河：发源于中国新疆天山，源头特克斯河与昆盖斯河在哈萨克斯坦境内汇合后始称伊犁河，全长约1439公里、其中约815公里位于哈萨克斯坦境内，最终注入巴尔喀什湖并形成大片湿地三角洲；论水量，伊犁河在哈萨克斯坦境内仅次于额尔齐斯河与乌拉尔河，居全国第三（Wikipedia WebSearch 2026）",
};

const IRTYSH_RIVER_KAZAKHSTAN: TerrainEntry = {
  id: "irtysh-river-kazakhstan",
  nameZh: "额尔齐斯河（哈萨克斯坦段）",
  nameEn: "Irtysh River (Kazakhstan)",
  category: "river",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "谢梅伊河段", lon: 80.2166, lat: 50.4111, elevation: 190, kind: "city" },
  bbox: [76.00, 47.00, 84.90, 53.50],
  axis: [[84.80, 47.50], [76.10, 53.40]],
  viewScale: 1.6,
  label: { lon: 80.50, lat: 47.30, rotation: 20 },
  source: "额尔齐斯河：全长约4248公里，发源于中国新疆阿尔泰山南麓冰川，向西流经中国后进入哈萨克斯坦斋桑泊，再折向西北贯穿哈萨克斯坦东部，最终流入俄罗斯境内汇入鄂毕河，与鄂毕河共同构成全球第七长河流水系；哈萨克斯坦境内的谢梅伊、巴甫洛达尔等城市均沿河而建（Britannica/worldatlas.com WebSearch 2026）",
};

const URAL_RIVER: TerrainEntry = {
  id: "ural-river",
  nameZh: "乌拉尔河（哈萨克斯坦段）",
  nameEn: "Ural River (Kazakhstan)",
  category: "river",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "阿特劳（乌拉尔河入海口）", lon: 51.90, lat: 47.10, elevation: -25, kind: "delta" },
  bbox: [51.00, 46.90, 52.20, 51.90],
  axis: [[51.90, 51.20], [51.95, 47.10]],
  viewScale: 1.3,
  label: { lon: 52.20, lat: 51.30, rotation: 0 },
  source: "乌拉尔河：发源于乌拉尔山南段，流经俄罗斯与哈萨克斯坦，最终于阿特劳附近注入里海，是欧洲第三长河，也是传统上划分欧洲与亚洲两大洲的地理分界河流之一；阿特劳市因乌拉尔河穿城而过，常被称作“跨越两大洲的城市”（Wikipedia WebSearch 2026）",
};

const SARYARKA_STEPPE: TerrainEntry = {
  id: "saryarka-steppe",
  nameZh: "萨雷阿尔卡草原",
  nameEn: "Saryarka Steppe",
  category: "grassland",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "萨雷阿尔卡草原（中部代表区域）", lon: 72.00, lat: 49.50, elevation: 400, kind: "grassland" },
  bbox: [65.00, 47.00, 78.00, 53.00],
  viewScale: 2.2,
  label: { lon: 72.00, lat: 46.50, rotation: 0 },
  source: "萨雷阿尔卡（哈萨克丘陵）：哈萨克斯坦中北部一片广袤的干草原与低缓丘陵地带，是全球残存温带草原中面积最大的区域之一，栖息极度濒危的赛加羚羊等草原特有物种；2008年“萨雷阿尔卡——哈萨克斯坦北部的草原与湖泊”（涵盖纳乌尔祖姆与科尔加尔津两处保护区）列入UNESCO世界遗产名录，是哈萨克斯坦首个自然类世界遗产（whc.unesco.org WebSearch 2026）",
};

const ALTYN_EMEL_SINGING_DUNE: TerrainEntry = {
  id: "altyn-emel-singing-dune",
  nameZh: "阿尔滕埃梅尔鸣沙",
  nameEn: "Altyn-Emel Singing Dune",
  category: "desert",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "鸣沙丘", lon: 78.03, lat: 44.13, elevation: 700, kind: "dune" },
  bbox: [77.95, 44.08, 78.10, 44.18],
  label: { lon: 78.03, lat: 44.02, rotation: 0 },
  source: "鸣沙丘：阿尔滕埃梅尔国家公园内一座长约1.5至3公里、高120至150米的石英沙丘，约1万至1.2万年前由伊犁河沿岸细沙经风力搬运堆积于大、小卡尔坎山之间的风口地带而成；沙丘在特定风力与湿度条件下会发出数公里外可闻的轰鸣声，是全球仅存的少数几处“会唱歌的沙丘”之一，阿尔滕埃梅尔国家公园1996年设立，总面积约52万公顷、是哈萨克斯坦最大的国家公园，2016年随“图兰荒漠寒冬型地貌”列入UNESCO世界遗产名录（meganstarr.com/altynemel.kz WebSearch 2026）",
};

const AKTAU_KATUTAU_HILLS: TerrainEntry = {
  id: "aktau-katutau-hills",
  nameZh: "阿克套—卡图套彩山",
  nameEn: "Aktau-Katutau Hills",
  category: "hills",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "阿克套彩色山丘", lon: 78.40, lat: 44.35, elevation: 900, kind: "peak" },
  bbox: [78.15, 44.15, 78.65, 44.55],
  viewScale: 1.2,
  label: { lon: 78.40, lat: 44.62, rotation: 0 },
  source: "阿克套—卡图套彩山：阿尔滕埃梅尔国家公园内的荒漠丘陵群，阿克套（“白山”）由粉、橙、绿等多色矿物沉积岩层构成，卡图套则是一片深褐色的荒漠丘陵，二者与准噶尔阿拉套山西支共同构成公园内的荒漠山地景观，是公园除鸣沙丘外另一处标志性地貌（altynemel.kz/Wikipedia WebSearch 2026）",
};

const BURABAY_HILLS: TerrainEntry = {
  id: "burabay-hills",
  nameZh: "布拉拜丘陵湖群",
  nameEn: "Burabay Hills",
  category: "hills",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "布拉拜湖", lon: 70.30, lat: 53.13, elevation: 320, kind: "lake" },
  bbox: [69.95, 52.95, 70.65, 53.35],
  viewScale: 1.3,
  label: { lon: 70.30, lat: 52.85, rotation: 0 },
  source: "布拉拜（旧称博罗沃耶）：哈萨克斯坦北部科克舍套丘陵东段一片松林、花岗岩丘陵与湖泊交织的地带，因景致酷似瑞士山地常被称为“哈萨克斯坦的瑞士”，区内湖泊逾30座，花岗岩体历经古生代岩浆侵入、后经风化冰蚀塑造出如今浑圆的岩丘与巨石群，2000年设立布拉拜国家公园（Wikipedia/meganstarr.com WebSearch 2026）",
};

const TORYSH_VALLEY_OF_BALLS: TerrainEntry = {
  id: "torysh-valley-of-balls",
  nameZh: "托雷什球石谷",
  nameEn: "Torysh (Valley of Balls)",
  category: "inselberg",
  regionId: "asia",
  country: "kazakhstan",
  landmark: { name: "托雷什球状结核群", lon: 52.35, lat: 44.28, elevation: 150, kind: "peak" },
  bbox: [52.20, 44.18, 52.50, 44.38],
  label: { lon: 52.35, lat: 44.10, rotation: 0 },
  source: "托雷什（球石谷）：曼格斯套州舍特佩村附近乌斯秋尔特高原边缘一处山谷，谷内散布成千上万颗直径1至3米的球状砂岩结核体，多形成于侏罗纪中期至白垩纪早期（距今约1.2亿至1.8亿年），由矿物质在沉积岩层中围绕核心（如小石块或贝壳碎片）逐层沉积硬化而成；部分球体仍嵌于岩层中、随周边沉积岩风化逐渐“破土而出”，是一种被称为“结核”的自然地质现象（planetesoterica.com/geologyscience.com WebSearch 2026）",
};

// ============================================================
// 亚洲 — 土耳其
// ============================================================

const TAURUS_MOUNTAINS: TerrainEntry = {
  id: "toros-mountains",
  nameZh: "托罗斯山脉",
  nameEn: "Taurus Mountains (Toros Dağları)",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "梅德茨兹峰（博尔卡山）", lon: 34.61, lat: 37.24, elevation: 3524, kind: "peak" },
  bbox: [29.5, 36.2, 37.8, 38.4],
  axis: [[30.0, 37.6], [37.5, 37.3]],
  viewScale: 1.6,
  label: { lon: 33.5, lat: 38.5, rotation: 0 },
  source: "托罗斯山脉：土耳其南部一条弧形山系，沿地中海海岸延伸，将地中海沿岸与中安纳托利亚高原分隔开，西起埃伊尔迪尔湖附近、东至幼发拉底河与底格里斯河上游一带，习惯上分为西托罗斯、中托罗斯与东南托罗斯三段；山系最高峰德米尔卡泽克峰海拔3756米，位于中段的阿拉达山地（Wikipedia WebSearch 2026）",
};

const PONTUS_MOUNTAINS: TerrainEntry = {
  id: "pontus-mountains",
  nameZh: "本都山脉（黑海山脉）",
  nameEn: "Pontic Mountains (Karadeniz Dağları)",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "济甘那山口", lon: 39.32, lat: 40.62, elevation: 2030, kind: "peak" },
  bbox: [30.5, 40.0, 41.3, 41.6],
  axis: [[31.0, 41.1], [41.0, 41.0]],
  viewScale: 1.6,
  label: { lon: 36.0, lat: 41.7, rotation: 0 },
  source: "本都山脉：沿土耳其黑海南岸延伸的山系，古称本都地区因此得名，山体紧邻海岸陡然抬升、将湿润的黑海沿岸与干燥的中安纳托利亚高原分隔开；山系东段（东黑海山脉／卡奇卡尔山）海拔明显更高、发育现代冰川地貌，西段则相对低矮和缓（Britannica/Wikipedia WebSearch 2026）",
};

const CENTRAL_ANATOLIAN_PLATEAU: TerrainEntry = {
  id: "central-anatolian-plateau",
  nameZh: "中安纳托利亚高原",
  nameEn: "Central Anatolian Plateau",
  category: "plateau",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "安卡拉（高原核心城市）", lon: 32.86, lat: 39.93, elevation: 900, kind: "city" },
  bbox: [31.0, 37.5, 36.5, 41.0],
  viewScale: 2.2,
  label: { lon: 33.5, lat: 40.6, rotation: 0 },
  source: "中安纳托利亚高原：土耳其腹地一片相对平缓的高原，平均海拔600至1200米，南北分别被托罗斯山脉与本都山脉环绕，年降水量仅200至300毫米；高原上分布多个内流盆地，其中最大的两个是科尼亚平原与图兹湖盆地，是土耳其的农牧核心区（Britannica/newworldencyclopedia.org WebSearch 2026）",
};

const ALADAGLAR: TerrainEntry = {
  id: "aladaglar",
  nameZh: "阿拉达山地（东托罗斯支脉）",
  nameEn: "Aladağlar (Anti-Taurus)",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "德米尔卡泽克峰", lon: 35.15, lat: 37.82, elevation: 3756, kind: "peak" },
  bbox: [34.9, 37.65, 35.35, 38.05],
  viewScale: 1.2,
  label: { lon: 35.15, lat: 38.12, rotation: 0 },
  source: "阿拉达山地：托罗斯山系东段一处石灰岩、大理岩与火山岩交织的高山地块，1995年设立阿拉达山地国家公园，公园平均海拔约3500米，园内4座山峰超过3700米，最高峰德米尔卡泽克峰海拔3756米，是托罗斯山系除西托罗斯外的最高点；地块内保留多处冰川作用形成的高山湖泊，山体因日落时泛红褐色而得名“阿拉达”（意为“绯红山”）（Wikipedia/nationalparksofturkey.com WebSearch 2026）",
};

const KACKAR_MOUNTAINS: TerrainEntry = {
  id: "kackar-mountains",
  nameZh: "卡奇卡尔山脉",
  nameEn: "Kaçkar Mountains",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "卡奇卡尔峰", lon: 41.17, lat: 40.82, elevation: 3937, kind: "peak" },
  bbox: [40.9, 40.55, 41.65, 41.1],
  axis: [[40.95, 40.65], [41.55, 41.0]],
  label: { lon: 41.25, lat: 41.15, rotation: -10 },
  source: "卡奇卡尔山脉：本都山脉东段海拔最高的一段，最高峰卡奇卡尔峰海拔3937米，山地高原部分区域也达约3000米，距黑海海岸仅约40公里；山系是土耳其冰川地貌最发育的地区之一，陡峭的岩质山峰间散布众多冰蚀湖，山坡覆盖茂密针叶林（Wikipedia/summitpost.org WebSearch 2026）",
};

const MOUNT_ARARAT: TerrainEntry = {
  id: "mount-ararat",
  nameZh: "阿拉拉特山",
  nameEn: "Mount Ararat (Ağrı Dağı)",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "大阿拉拉特峰", lon: 44.30, lat: 39.70, elevation: 5137, kind: "peak" },
  bbox: [43.95, 39.50, 44.60, 39.90],
  viewScale: 1.2,
  label: { lon: 44.30, lat: 39.45, rotation: 0 },
  source: "阿拉拉特山：土耳其最高峰，官方名阿厄勒达（Ağrı Dağı），是一座休眠的复合式层状火山，海拔5137米，位于土耳其伊迪尔省与阿厄勒省交界、靠近土耳其与亚美尼亚边境一带；山体由大、小两座火山锥组成，小阿拉拉特峰海拔3896米，整个山体底部宽度约35公里，末次喷发记录于1840年（Wikipedia/newworldencyclopedia.org WebSearch 2026）",
};

const MOUNT_ERCIYES: TerrainEntry = {
  id: "mount-erciyes",
  nameZh: "埃尔吉耶斯火山",
  nameEn: "Mount Erciyes",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "埃尔吉耶斯峰", lon: 35.45, lat: 38.52, elevation: 3917, kind: "peak" },
  bbox: [35.30, 38.40, 35.62, 38.62],
  label: { lon: 35.45, lat: 38.35, rotation: 0 },
  source: "埃尔吉耶斯火山：中安纳托利亚海拔最高的火山，海拔3917米，是一座周边散布众多单成因火山锥、熔岩穹丘与一处玛珥式火口湖的大型层状火山，距凯塞利市区约15至25公里；现代火山主体在更新世喷发形成，末次喷发约在公元前6880年前后，是休眠火山；火山灰堆积是卡帕多奇亚精灵烟囱地貌的物质来源之一（Wikipedia/mta.gov.tr WebSearch 2026）",
};

const NEMRUT_CALDERA_VAN: TerrainEntry = {
  id: "nemrut-caldera-van",
  nameZh: "内姆鲁特火山口湖（比特利斯）",
  nameEn: "Nemrut Caldera & Lake Nemrut (Bitlis)",
  category: "basin",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "内姆鲁特火口湖", lon: 42.23, lat: 38.65, elevation: 2247, kind: "lake" },
  bbox: [42.05, 38.53, 42.38, 38.78],
  label: { lon: 42.23, lat: 38.48, rotation: 0 },
  source: "内姆鲁特火山：比特利斯省塔特万附近的层状火山，山顶火山口塌陷形成一处新月形破火山口湖——内姆鲁特湖，湖面海拔约2247米、水深176米，是世界第二大、土耳其第一大火口湖；约60万年前该火山的熔岩流曾一度堵塞穆拉特河，是形成凡湖的原因之一。（注：此内姆鲁特火山位于凡湖以西的比特利斯省，与阿德亚曼省内姆鲁特山巨石人像考古遗址为同名不同地的两处地点）（earth.com/kureansiklopedi.com WebSearch 2026）",
};

const LAKE_VAN: TerrainEntry = {
  id: "lake-van",
  nameZh: "凡湖",
  nameEn: "Lake Van",
  category: "lake",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "凡湖", lon: 42.95, lat: 38.62, elevation: 1646, kind: "lake" },
  bbox: [42.50, 38.20, 43.55, 38.95],
  viewScale: 1.4,
  label: { lon: 42.95, lat: 39.05, rotation: 0 },
  source: "凡湖：土耳其面积最大的湖泊，面积约3764平方公里、蓄水量约607立方公里，湖面海拔约1646米；约60万年前内姆鲁特火山熔岩流阻断穆拉特河河道形成如今的封闭湖盆，是一处火山成因湖，也是全球最大的苏打（碱性）湖，湖水高度碱性、含盐量高，仅少数耐盐鱼类可以生存（isdr.org/Wikipedia WebSearch 2026）",
};

const LAKE_TUZ: TerrainEntry = {
  id: "lake-tuz",
  nameZh: "图兹湖（盐湖）",
  nameEn: "Lake Tuz (Tuz Gölü)",
  category: "lake",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "图兹湖", lon: 33.35, lat: 38.75, elevation: 905, kind: "salt-lake" },
  bbox: [32.95, 38.40, 33.75, 39.15],
  viewScale: 1.3,
  label: { lon: 33.35, lat: 39.25, rotation: 0 },
  source: "图兹湖：土耳其第二大湖，面积约1665平方公里，长约80公里、宽约50公里，但平均水深仅0.5米，冬春季蓄水后夏季大面积蒸发干涸、湖底覆盖一层约30厘米厚的盐层；含盐量约32%至33%，与死海相近，是全球盐度最高的湖泊之一，年产盐约30万吨、供应土耳其全国约七成食盐（Wikipedia/naclsalt.com WebSearch 2026）",
};

const KONYA_BASIN: TerrainEntry = {
  id: "konya-basin",
  nameZh: "科尼亚盆地",
  nameEn: "Konya Basin (Konya-Karaman Plain)",
  category: "basin",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "科尼亚（盆地核心城市）", lon: 32.48, lat: 37.87, elevation: 1020, kind: "city" },
  bbox: [31.5, 37.0, 34.2, 38.7],
  viewScale: 2.0,
  label: { lon: 32.5, lat: 36.8, rotation: 0 },
  source: "科尼亚盆地：中安纳托利亚高原上一处大型内流（封闭）盆地，面积约5万平方公里，海拔850至3450米、盆地平坦部分多在900至1050米，北靠本都山系、南依托罗斯山脉；盆地内有图兹湖与贝谢希尔湖两处主要湖泊，因长期地下水过度开采，近年出现较多地表塌陷（天坑）现象（researchgate.net/link.springer.com WebSearch 2026）",
};

const PAMUKKALE_TRAVERTINES: TerrainEntry = {
  id: "pamukkale-travertines",
  nameZh: "棉花堡钙化梯田",
  nameEn: "Pamukkale Travertines",
  category: "hills",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "棉花堡钙化梯田", lon: 29.1189, lat: 37.9203, elevation: 360, kind: "peak" },
  bbox: [29.08, 37.90, 29.16, 37.945],
  label: { lon: 29.12, lat: 37.88, rotation: 0 },
  source: "棉花堡：代尼兹利地堑一处断层沿线的地热泉华台地，逾17处温泉（水温35至100摄氏度）沿断层涌出，富含碳酸氢钙的热水历经数千年沉积、结晶为洁白的碳酸钙（石灰华）层，塑造出一连串阶梯状梯田水池；整片泉华地貌长约2700米、宽约600米、高约160米，公元前2世纪起古希腊罗马城市希拉波利斯即建于台地顶端泉眼旁，1988年与希拉波利斯古城一同列入UNESCO世界遗产（geologyscience.com/Wikipedia WebSearch 2026）",
};

const CAPPADOCIA_FAIRY_CHIMNEYS: TerrainEntry = {
  id: "cappadocia-fairy-chimneys",
  nameZh: "卡帕多奇亚精灵烟囱地貌",
  nameEn: "Cappadocia Fairy Chimneys (Göreme)",
  category: "hills",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "格雷梅露天博物馆一带", lon: 34.8286, lat: 38.6431, elevation: 1150, kind: "peak" },
  bbox: [34.55, 38.55, 35.05, 38.78],
  viewScale: 1.3,
  label: { lon: 34.80, lat: 38.82, rotation: 0 },
  source: "卡帕多奇亚：中新世至上新世（约1000万至300万年前）埃尔吉耶斯、哈桑等火山多次喷发的厚层火山灰堆积、固结为松软的凝灰岩，局部夹杂更坚硬的玄武岩、安山岩或熔结凝灰岩盖层；此后构造抬升与气候变化令这些岩层暴露于雨水、河流与风的侵蚀，软质凝灰岩比坚硬盖层风化更快，逐渐雕琢出顶部戴“帽子”的锥状岩柱（精灵烟囱），侵蚀速率约每千年2至3厘米；区域以埃尔吉耶斯山（3916米）与哈桑山（3253米）两座火山为界，涵盖内夫谢希尔、于尔居普与阿瓦诺斯之间的格雷梅国家公园，1985年列入UNESCO世界遗产（geologyin.com/whc.unesco.org WebSearch 2026）",
};

const IHLARA_VALLEY: TerrainEntry = {
  id: "ihlara-valley",
  nameZh: "伊赫拉拉峡谷",
  nameEn: "Ihlara Valley",
  category: "gorge",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "伊赫拉拉峡谷（梅伦迪兹河段）", lon: 34.31, lat: 38.25, elevation: 1250, kind: "gorge" },
  bbox: [34.25, 38.21, 34.42, 38.31],
  label: { lon: 34.31, lat: 38.17, rotation: 0 },
  source: "伊赫拉拉峡谷：卡帕多奇亚西南部一处深切峡谷，全长约15公里、最深处约150米，由发源于梅伦迪兹山、全长约60公里的梅伦迪兹河历经数千年侵蚀哈桑山喷发后堆积的火山岩层而成；峡谷内保存约50座拜占庭时期开凿于崖壁的岩凿教堂，是研究卡帕多奇亚地区岩凿聚落与早期基督教历史的重要地点（Wikipedia/visitcappadocia.com WebSearch 2026）",
};

const SAKLIKENT_GORGE: TerrainEntry = {
  id: "saklikent-gorge",
  nameZh: "萨克勒肯特峡谷",
  nameEn: "Saklıkent Gorge",
  category: "gorge",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "萨克勒肯特峡谷入口", lon: 29.360, lat: 36.548, elevation: 450, kind: "gorge" },
  bbox: [29.28, 36.48, 29.46, 36.62],
  label: { lon: 29.36, lat: 36.42, rotation: 0 },
  source: "萨克勒肯特峡谷：土耳其西南部费特希耶附近一处峡谷，深约300米、长约18公里，是土耳其最深的峡谷之一；峡谷因托罗斯山脉抬升引发地壳运动、河流持续侵蚀较软岩层而形成，最窄处仅约4至5米宽；“萨克勒肯特”在土耳其语意为“隐藏之城”，1996年设立萨克勒肯特国家公园（Wikipedia/researchgate.net WebSearch 2026）",
};

const BOSPHORUS_STRAIT: TerrainEntry = {
  id: "bosphorus-strait",
  nameZh: "博斯普鲁斯海峡",
  nameEn: "Bosphorus Strait",
  category: "coast",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "博斯普鲁斯海峡（伊斯坦布尔段）", lon: 29.03, lat: 41.10, elevation: 0, kind: "city" },
  bbox: [28.92, 40.97, 29.20, 41.26],
  axis: [[29.15, 41.24], [28.98, 40.98]],
  label: { lon: 28.80, lat: 41.15, rotation: 0 },
  source: "博斯普鲁斯海峡：连接黑海与马尔马拉海的天然海峡，全长约31公里，宽度730米至3300米不等、最深处约110米，是亚洲与欧洲两大洲之间的传统地理分界之一；地质上该处第三纪时曾是河谷，第三纪末期被海水淹没形成海峡，伊斯坦布尔城即跨海峡两岸而建，是全球最繁忙的海上通道之一（marineinsight.com/Wikipedia WebSearch 2026）",
};

const AEGEAN_COAST_TURKEY: TerrainEntry = {
  id: "aegean-coast-turkey",
  nameZh: "爱琴海岸（土耳其段）",
  nameEn: "Aegean Coast (Turkey)",
  category: "coast",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "博德鲁姆半岛海岸", lon: 27.43, lat: 37.03, elevation: 0, kind: "city" },
  bbox: [26.60, 36.60, 28.05, 38.55],
  viewScale: 1.6,
  label: { lon: 26.90, lat: 38.65, rotation: 0 },
  source: "土耳其爱琴海岸：从达达尼尔海峡南口至博德鲁姆半岛一带的深切锯齿状海岸，沿岸半岛、海湾与近岸岛屿交错分布，是新构造运动中地壳伸展、断块沉降形成的沉溺海岸地貌；博德鲁姆半岛一带海岸线曲折、岬湾相间，是土耳其爱琴海旅游区的核心地带（Wikipedia WebSearch 2026）",
};

const LYCIAN_COAST: TerrainEntry = {
  id: "lycian-coast",
  nameZh: "利西亚海岸（绿松石海岸）",
  nameEn: "Lycian Coast (Turquoise Coast)",
  category: "coast",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "卡什海湾", lon: 29.64, lat: 36.20, elevation: 0, kind: "city" },
  bbox: [28.60, 36.10, 30.55, 36.65],
  viewScale: 1.4,
  label: { lon: 29.60, lat: 36.75, rotation: 0 },
  source: "利西亚海岸（绿松石海岸）：土耳其西南部特凯半岛沿岸一段以清澈碧蓝海水得名的地中海海岸，是托罗斯山脉西段直抵海边形成的高山临海地貌，海岸线由众多岬角、深水海湾与陡崖组成；历史上曾是古利西亚地区所在地，如今卡什、卡尔坎等沿海小镇是土耳其地中海旅游的代表地点之一（roughguides.com/spotblue.com WebSearch 2026）",
};

const BLACK_SEA_COAST_TURKEY: TerrainEntry = {
  id: "black-sea-coast-turkey",
  nameZh: "黑海海岸（土耳其段）",
  nameEn: "Black Sea Coast (Turkey)",
  category: "coast",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "特拉布宗海岸", lon: 39.72, lat: 41.00, elevation: 0, kind: "city" },
  bbox: [37.50, 40.90, 41.60, 41.65],
  viewScale: 1.8,
  label: { lon: 39.5, lat: 41.75, rotation: 0 },
  source: "土耳其黑海海岸：本都山脉紧邻海岸陡然抬升形成的狭长沿海地带，海岸线相对平直、少大型海湾，山地迎风坡年降水量可超2000毫米，是土耳其最湿润的地区；沿岸城市特拉布宗历史上曾是丝绸之路支线上的重要港口，山地内保存有建于悬崖上的苏美拉修道院等历史遗迹（Wikipedia/serendipityturkey.com WebSearch 2026）",
};

const MEKE_CRATER_LAKE: TerrainEntry = {
  id: "meke-crater-lake",
  nameZh: "梅凯火口湖",
  nameEn: "Lake Meke",
  category: "lake",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "梅凯火口湖", lon: 33.5967, lat: 37.6842, elevation: 1000, kind: "lake" },
  bbox: [33.55, 37.65, 33.65, 37.72],
  label: { lon: 33.60, lat: 37.60, rotation: 0 },
  source: "梅凯湖：科尼亚省卡拉皮纳尔火山田内一处双层火山湖，约400万年前一次火山喷发形成最初的破火山口湖，约9000年前岩浆遇地下水发生水汽爆炸、在湖内又形成一座嵌套的火山渣锥与内部玛珥火口湖，湖泊整体呈椭圆形、直径约1800米×1600米；卡拉皮纳尔火山田由5座火山渣锥、2处熔岩流与多处爆炸坑及玛珥组成，梅凯湖形似“土耳其蓝眼睛”护身符，是该火山田的标志性景观（mta.gov.tr/grokipedia.com WebSearch 2026）",
};

const EUPHRATES_HEADWATERS: TerrainEntry = {
  id: "euphrates-headwaters",
  nameZh: "幼发拉底河源区（卡拉苏—穆拉特河）",
  nameEn: "Euphrates Headwaters (Karasu–Murat)",
  category: "river",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "凯班（两源汇合处附近）", lon: 38.75, lat: 38.78, elevation: 850, kind: "city" },
  bbox: [39.0, 38.5, 42.5, 40.2],
  axis: [[41.5, 39.9], [38.75, 38.78]],
  viewScale: 1.5,
  label: { lon: 40.5, lat: 40.4, rotation: -15 },
  source: "幼发拉底河：西亚最长河流，由发源于埃尔祖鲁姆省杜姆卢山、长约450公里的西源卡拉苏河，与发源于阿拉拉特山以北、长约722公里的东源穆拉特河，在凯班以北约10公里处汇合后始称幼发拉底河；两条源流均流经东安纳托利亚高原山地地形，河流出土耳其后向东南注入美索不达米亚平原（Wikipedia/Britannica WebSearch 2026）",
};

const TIGRIS_HEADWATERS: TerrainEntry = {
  id: "tigris-headwaters",
  nameZh: "底格里斯河源区（哈扎尔湖）",
  nameEn: "Tigris Headwaters (Lake Hazar)",
  category: "river",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "哈扎尔湖", lon: 39.49, lat: 38.47, elevation: 1150, kind: "lake" },
  bbox: [39.30, 38.30, 40.50, 38.60],
  axis: [[40.30, 38.45], [39.49, 38.47]],
  label: { lon: 40.0, lat: 38.20, rotation: 0 },
  source: "底格里斯河：西亚主要河流之一，公认发源于埃拉泽省东南约22公里处、托罗斯山脉内海拔约1150米的裂谷湖——哈扎尔湖，湖水主要来自高山融雪补给；河流出土耳其境内约400公里后向东南流入美索不达米亚平原，是与幼发拉底河并称的两河流域主要水系之一（Britannica/Wikipedia WebSearch 2026）",
};

const KIZILIRMAK_RIVER: TerrainEntry = {
  id: "kizilirmak-river",
  nameZh: "克孜勒河（红河）",
  nameEn: "Kızılırmak River (Red River)",
  category: "river",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "阿瓦诺斯河湾", lon: 34.85, lat: 38.72, elevation: 950, kind: "city" },
  bbox: [34.9, 38.6, 39.6, 41.75],
  axis: [[39.4, 39.6], [35.9, 41.65]],
  viewScale: 1.4,
  label: { lon: 37.0, lat: 40.6, rotation: -20 },
  source: "克孜勒河：土耳其境内最长河流，全长约1355公里，古称哈勒斯河，发源于锡瓦斯省因拉尼耶附近克孜勒山、海拔约2000米处，流经锡瓦斯、开塞利、内夫谢希尔、安卡拉等省份，最终在黑海沿岸城市巴夫拉附近以宽阔三角洲注入黑海；河流因携带红色沉积物得名“克孜勒”（红），在卡帕多奇亚阿瓦诺斯一带形成显著的河湾，历史上是安纳托利亚重要的农业与文化分界线（alaturka.info/Wikipedia WebSearch 2026）",
};

const SALDA_LAKE: TerrainEntry = {
  id: "salda-lake",
  nameZh: "萨尔达湖",
  nameEn: "Lake Salda",
  category: "lake",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "萨尔达湖白色沙滩", lon: 29.6892, lat: 37.5486, elevation: 1140, kind: "lake" },
  bbox: [29.60, 37.50, 29.78, 37.60],
  label: { lon: 29.69, lat: 37.42, rotation: 0 },
  source: "萨尔达湖：土耳其西南部布尔杜尔省一处火山口成因湖泊，以清澈的蓂蓝色湖水与湖岸洁白的水菱镁矿（氢镁石）沉积滩地著称；湖岸白色沉积被认为由微生物参与形成的“微生物岩”经风化侵蚀而成，其矿物成分与NASA“毅力号”探测的火星耶泽罗撞击坑古湖沉积高度相似，2020至2021年NASA团队曾在此开展地质对比研究，是地球上少数几处公认的火星湖泊沉积类比地点之一（iugs-geoheritage.org/livescience.com WebSearch 2026）",
};

const CUKUROVA_PLAIN: TerrainEntry = {
  id: "cukurova-plain",
  nameZh: "丘库罗瓦平原",
  nameEn: "Çukurova Plain",
  category: "plain",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "阿达纳（平原核心城市）", lon: 35.33, lat: 36.90, elevation: 25, kind: "city" },
  bbox: [34.9, 36.5, 36.2, 37.35],
  viewScale: 1.4,
  label: { lon: 35.5, lat: 37.45, rotation: 0 },
  source: "丘库罗瓦平原：土耳其地中海东岸最大的冲积平原，由塞伊汉河、杰伊汉河与贝尔丹河携带的泥沙历经长期堆积形成，是地中海地区第二大三角洲平原体系，平原被东侧米西斯山与北、西两侧托罗斯山脉环绕；因土壤肥沃、灌溉水源充足，是土耳其最重要的农业区之一，主要城市阿达纳即坐落于平原核心（researchgate.net/tandfonline.com WebSearch 2026）",
};

const LAKE_BEYSEHIR: TerrainEntry = {
  id: "lake-beysehir",
  nameZh: "贝谢希尔湖",
  nameEn: "Lake Beyşehir",
  category: "lake",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "贝谢希尔湖", lon: 31.53, lat: 37.68, elevation: 1121, kind: "lake" },
  bbox: [31.30, 37.50, 31.85, 38.05],
  viewScale: 1.1,
  label: { lon: 31.53, lat: 38.15, rotation: 0 },
  source: "贝谢希尔湖：土耳其最大的淡水湖，也是地中海流域最大的淡水湖，面积约650平方公里、长约45公里、宽约20公里，平均水深5至6米；湖泊水源主要来自苏丹山与阿纳马斯山的溪流补给，湖内散布32座大小不一的岛屿，是重要的候鸟栖息地，1993年设立贝谢希尔湖国家公园（geovillages.fandom.com/thekonyanews.com WebSearch 2026）",
};

const ULUDAG: TerrainEntry = {
  id: "uludag",
  nameZh: "乌鲁山",
  nameEn: "Uludağ",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "乌鲁山主峰", lon: 29.13, lat: 40.08, elevation: 2543, kind: "peak" },
  bbox: [29.00, 40.00, 29.30, 40.16],
  label: { lon: 29.13, lat: 39.96, rotation: 0 },
  source: "乌鲁山：西安纳托利亚地区最高峰，海拔2543米，紧邻布尔萨市南侧，是一处经断块抬升形成的花岗岩、片麻岩山体；山顶保留9处冰蚀湖（夏季多干涸），古称密细亚奥林匹斯山，1961年设立乌鲁山国家公园，是土耳其访客量最高的国家公园与首要滑雪胜地之一，年积雪期约150天（national-parks.org/nomadicniko.com WebSearch 2026）",
};

const MOUNT_SUPHAN: TerrainEntry = {
  id: "mount-suphan",
  nameZh: "苏芬火山",
  nameEn: "Mount Süphan",
  category: "mountain_system",
  regionId: "asia",
  country: "turkey",
  landmark: { name: "苏芬火山峰", lon: 42.82, lat: 38.93, elevation: 4058, kind: "peak" },
  bbox: [42.65, 38.83, 43.00, 39.05],
  label: { lon: 42.82, lat: 38.75, rotation: 0 },
  source: "苏芬火山：土耳其第三高峰、第二高火山，海拔4058米，位于凡湖以北的比特利斯省，是一座层状火山；山顶东西两峰之间有一处宽约1.5公里的洼地，洼地内分布两处小型湖泊；作为凡湖北岸的地标性火山，苏芬火山与南岸的内姆鲁特火山共同构成了这片火山成因湖泊区的骨架地貌（summitpost.org/peakvisor.com WebSearch 2026）",
};

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
  source: "戈尔斯基科塔尔：克罗地亚山地覆盖率最高、森林最茂密的地区，地处阿尔卑斯山系与第纳里克山系的过渡地带，里斯尼亚克峰海拔1528米；1997年设立的里斯尼亚克国家公园内还保留库帕河源头——一处深潭状泉眼，是克罗地亚重要的水源涵养区（Wikipedia/np-risnjak.hr WebSearch 2026）",
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
  source: "内雷特瓦河三角洲：内雷特瓦河进入克罗地亚境内最后约22公里河段冲积形成的三角洲，是克罗地亚境内唯一的河流三角洲，也是地中海地区仅次于尼罗河、波河三角洲的第三大三角洲；三角洲内芦苇荡、湖泊、湿草甸、潟湖与沙洲交织，是东亚得里亚海岸最有价值的湿地，列入拉姆萨尔国际重要湿地名录（Ramsar/Wikipedia WebSearch 2026）",
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
  source: "萨瓦河：多瑙河最长的支流，全长992公里，发源于斯洛文尼亚阿尔卑斯山区，流经萨格勒布后向东南穿过克罗地亚中部，是克罗地亚水量最大的河流与重要的内河航运通道，河谷沿线是克罗地亚人口最密集的农业与城市带之一，锡萨克以下可通航（Wikipedia WebSearch 2026）",
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

// ============================================================
// 欧洲 / 捷克
// 东欧次区域第二个国家（波兰之后）；全境近乎被古老山地环绕
// （捷克—摩拉维亚高地即波希米亚地块基底出露），跨境山脉一律按
// "捷克与德国/波兰/奥地利交界"中性表述，不涉主权
// ============================================================

const KRKONOSE: TerrainEntry = {
  id: "krkonose",
  nameZh: "克尔科诺谢山（巨人山）",
  nameEn: "Krkonoše / Giant Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "斯涅日卡峰", lon: 15.7403, lat: 50.7361, elevation: 1603, kind: "peak" },
  bbox: [15.10, 50.68, 15.85, 50.83],
  axis: [[15.15, 50.78], [15.80, 50.735]],
  label: { lon: 15.45, lat: 50.76, rotation: 0 },
  source: "克尔科诺谢山（巨人山）：苏台德山脉海拔最高的部分，沿捷克与波兰边境分布；斯涅日卡峰海拔1603米，是捷克全境最高点，山顶横跨捷克与波兰边境（Wikipedia/krkonose.eu WebSearch 2026）",
};

const SUMAVA: TerrainEntry = {
  id: "sumava",
  nameZh: "舒马瓦山（波希米亚森林）",
  nameEn: "Šumava / Bohemian Forest",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "普莱希峰", lon: 13.8572, lat: 48.7711, elevation: 1378, kind: "peak" },
  bbox: [13.10, 48.55, 13.95, 49.35],
  axis: [[13.15, 49.30], [13.85, 48.60]],
  viewScale: 1.4,
  label: { lon: 13.5, lat: 48.95, rotation: 0 },
  source: "舒马瓦山（波希米亚森林）：捷克西南部沿德国、奥地利边境延伸的低山，是伏尔塔瓦河的发源地；普莱希峰海拔1378米，是舒马瓦山捷克与奥地利一侧的最高点，德国巴伐利亚一侧的阿尔伯山（1456米）略高于此（Wikipedia/jiznicechy.org WebSearch 2026）",
};

const KRUSNE_HORY: TerrainEntry = {
  id: "krusne-hory",
  nameZh: "克鲁什内山（矿山山脉）",
  nameEn: "Krušné hory / Ore Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "克利诺韦茨峰", lon: 12.9678, lat: 50.3961, elevation: 1244, kind: "peak" },
  bbox: [12.40, 50.35, 13.90, 50.60],
  axis: [[12.40, 50.42], [13.85, 50.55]],
  label: { lon: 13.1, lat: 50.48, rotation: 0 },
  source: "克鲁什内山（矿山山脉）：沿捷克与德国萨克森州边境延伸约130公里的山系，历史上因银、锡、铅等矿藏开采得名；捷克一侧最高点克利诺韦茨峰海拔1244米，德国一侧最高点菲希特尔山1214米（Britannica/krusnehory.cz WebSearch 2026）",
};

const JESENIKY: TerrainEntry = {
  id: "jeseniky",
  nameZh: "耶塞尼克山（大耶塞尼克）",
  nameEn: "Jeseníky / Hrubý Jeseník",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "普拉迭德峰", lon: 17.2333, lat: 50.0833, elevation: 1491, kind: "peak" },
  bbox: [16.85, 49.95, 17.35, 50.25],
  label: { lon: 17.1, lat: 50.1, rotation: 0 },
  source: "耶塞尼克山（大耶塞尼克）：苏台德山脉东段位于捷克摩拉维亚—西里西亚地区的部分；普拉迭德峰海拔1491米，是摩拉维亚与捷克西里西亚地区的最高点、也是捷克全境第五高峰，山顶建有气象观测塔（Wikipedia WebSearch 2026）",
};

const MORAVSKOSLEZSKE_BESKYDY: TerrainEntry = {
  id: "moravskoslezske-beskydy",
  nameZh: "摩拉维亚—西里西亚贝斯基德山",
  nameEn: "Moravian-Silesian Beskids",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "利萨山", lon: 18.4475, lat: 49.5458, elevation: 1323, kind: "peak" },
  bbox: [18.15, 49.38, 18.75, 49.68],
  label: { lon: 18.45, lat: 49.52, rotation: 0 },
  source: "摩拉维亚—西里西亚贝斯基德山：喀尔巴阡山脉在捷克最东端、毗邻斯洛伐克边境的部分，是捷克境内喀尔巴阡山系海拔最高的区域；利萨山海拔1323米为最高峰，因山顶早年缺少树木得名“光头山”，年降水量约1500毫米，是捷克降水最多的地区之一（Wikipedia WebSearch 2026）",
};

const LUZICKE_HORY: TerrainEntry = {
  id: "luzicke-hory",
  nameZh: "卢日采山（卢萨蒂亚山）",
  nameEn: "Lužické hory / Lusatian Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "耶德洛瓦峰", lon: 14.5727, lat: 50.8635, elevation: 776, kind: "peak" },
  bbox: [14.35, 50.75, 14.75, 50.95],
  label: { lon: 14.55, lat: 50.85, rotation: 0 },
  source: "卢日采山（卢萨蒂亚山）：西苏台德山脉沿捷克与德国萨克森州边境分布的一列砂岩山地，多锥状火山岩残丘点缀其间；山系最高峰劳舍峰（793米）地处捷克与德国边境线上，完全位于捷克境内的最高点为耶德洛瓦峰，海拔776米（Wikipedia/doluzihor.cz WebSearch 2026）",
};

const NOVOHRADSKE_HORY: TerrainEntry = {
  id: "novohradske-hory",
  nameZh: "新城山（格拉琴山）",
  nameEn: "Novohradské hory / Gratzen Mountains",
  category: "mountain_system",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "卡梅内茨峰", lon: 14.6694, lat: 48.585, elevation: 1072, kind: "peak" },
  bbox: [14.55, 48.55, 14.95, 48.72],
  label: { lon: 14.7, lat: 48.63, rotation: 0 },
  source: "新城山（格拉琴山）：波希米亚地块南缘沿捷克与奥地利边境延伸的古老山地，山势相对低矮浑圆；捷克一侧最高峰卡梅内茨峰海拔1072米，距奥地利边境仅约400米，奥地利一侧最高点菲堡山（1112米）略高于此（Wikipedia WebSearch 2026）",
};

const CESKOMORAVSKA_VRCHOVINA: TerrainEntry = {
  id: "ceskomoravska-vrchovina",
  nameZh: "捷克—摩拉维亚高地",
  nameEn: "Bohemian-Moravian Highlands",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "亚沃日采峰", lon: 15.3394, lat: 49.2211, elevation: 837, kind: "peak" },
  bbox: [15.00, 49.05, 16.10, 49.55],
  viewScale: 1.5,
  label: { lon: 15.55, lat: 49.30, rotation: 0 },
  source: "捷克—摩拉维亚高地：波希米亚地块基底出露形成的一片古老低矮高地，横贯捷克中南部、构成波希米亚与摩拉维亚两大历史地区的分界；地势整体在500至800米之间起伏和缓，亚沃日采峰海拔837米为最高点，也是欧洲主分水岭（易北河与多瑙河流域分界）经过之处（Wikipedia WebSearch 2026）",
};

const BRDY: TerrainEntry = {
  id: "brdy",
  nameZh: "布尔迪丘陵",
  nameEn: "Brdy",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "托克峰", lon: 13.8768, lat: 49.7042, elevation: 865, kind: "peak" },
  bbox: [13.55, 49.60, 14.05, 49.80],
  label: { lon: 13.8, lat: 49.70, rotation: 0 },
  source: "布尔迪丘陵：捷克中部一列沿西南—东北走向延伸约60公里的森林丘陵，托克峰海拔865米为最高点；1927至2016年长期作为军事训练区对公众封闭，人为活动稀少使区内保留了较为完整的原生林相，2016年设立布尔迪自然保护区向公众开放（VisitCzechia/Wikipedia WebSearch 2026）",
};

const CESKE_STREDOHORI: TerrainEntry = {
  id: "ceske-stredohori",
  nameZh: "捷克中央高地",
  nameEn: "České středohoří / Central Bohemian Uplands",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "米莱绍夫卡峰", lon: 13.9315, lat: 50.5552, elevation: 837, kind: "peak" },
  bbox: [13.65, 50.40, 14.35, 50.70],
  viewScale: 1.3,
  label: { lon: 14.0, lat: 50.55, rotation: 0 },
  source: "捷克中央高地：捷克境内新生代火山活动最显著的地区，沿俄赫热河谷发育出大量玄武岩、粗面岩质的锥状孤丘（约73.6%为玄武岩），地貌上呈现出典型的“群峰林立”景观；米莱绍夫卡峰海拔837米为最高点，因常年多风被称为捷克“风最大的山”（stredohori.cz/Wikipedia WebSearch 2026）",
};

const PAVLOVSKE_VRCHY: TerrainEntry = {
  id: "pavlovske-vrchy",
  nameZh: "巴甫洛夫丘陵（帕拉瓦）",
  nameEn: "Pavlovské vrchy / Pálava",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "杰温峰", lon: 16.6497, lat: 48.8694, elevation: 550, kind: "peak" },
  bbox: [16.58, 48.82, 16.72, 48.90],
  label: { lon: 16.64, lat: 48.86, rotation: 0 },
  source: "巴甫洛夫丘陵（帕拉瓦）：南摩拉维亚一列由侏罗纪白垩质石灰岩构成的狭长孤立山脊，地处摩拉维亚全境最干旱、气候最接近潘诺尼亚型的地区，发育有草原、林草原等稀有生态群落；杰温峰海拔550米为最高点，1986年联合国教科文组织将其纳入下摩拉维亚生物圈保护区，周边是捷克重要的葡萄酒产区（VisitCzechia/Wikipedia WebSearch 2026）",
};

const CESKY_RAJ: TerrainEntry = {
  id: "cesky-raj",
  nameZh: "捷克天堂（波希米亚天堂）",
  nameEn: "Český ráj / Bohemian Paradise",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "普拉霍夫岩城", lon: 15.2840, lat: 50.4676, elevation: 400, kind: "escarpment" },
  bbox: [14.95, 50.40, 15.35, 50.60],
  label: { lon: 15.15, lat: 50.50, rotation: 0 },
  source: "捷克天堂（波希米亚天堂）：捷克最早（1955年）设立的自然保护区之一，由白垩纪晚期海相沉积的巨厚砂岩经长期风化侵蚀，形成成群的岩塔、岩柱与“岩石迷宫”地貌；普拉霍夫岩城是园内最具代表性的一片，岩塔高度可达40米，2015年整片区域列入联合国教科文组织世界地质公园网络（UNESCO/hkregion.cz WebSearch 2026）",
};

const ADRSPACH_TEPLICE_ROCKS: TerrainEntry = {
  id: "adrspach-teplice-rocks",
  nameZh: "阿德尔斯帕赫—捷普利采岩城",
  nameEn: "Adršpach-Teplice Rocks",
  category: "hills",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "阿德尔斯帕赫岩城", lon: 16.1150, lat: 50.6114, elevation: 500, kind: "escarpment" },
  bbox: [16.05, 50.58, 16.20, 50.65],
  label: { lon: 16.12, lat: 50.61, rotation: 0 },
  source: "阿德尔斯帕赫—捷普利采岩城：捷克东北部布鲁莫夫地区一整块砂岩体经风化侵蚀断裂而成的岩塔群与峡谷迷宫，岩塔高度可达40米，是中欧规模最大的连片砂岩“岩城”地貌之一，也是捷克境内最著名、游客最多的砂岩景观；1933年起被列为国家级自然保护区（Springer/Wikipedia WebSearch 2026）",
};

const POLABI_LOWLAND: TerrainEntry = {
  id: "polabi-lowland",
  nameZh: "波拉比低地（易北河低地）",
  nameEn: "Polabí / Elbe Lowland",
  category: "plain",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "梅尔尼克（易北河与伏尔塔瓦河汇流处）", lon: 14.4750, lat: 50.3519, elevation: 156, kind: "city" },
  bbox: [14.40, 50.00, 15.85, 50.40],
  viewScale: 1.6,
  label: { lon: 15.1, lat: 50.2, rotation: 0 },
  source: "波拉比低地（易北河低地）：沿易北河中游、大致在帕尔杜比采与梅尔尼克之间展布的低平沃土带，海拔多在150至300米之间，是捷克重要的粮食与蔬果产区；梅尔尼克是易北河与捷克境内最长河流伏尔塔瓦河的汇流处，也是波拉比低地下游的标志性地点（Wikipedia WebSearch 2026）",
};

const DOLNOMORAVSKY_UVAL: TerrainEntry = {
  id: "dolnomoravsky-uval",
  nameZh: "下摩拉瓦低地",
  nameEn: "Dolnomoravský úval / Lower Morava Valley",
  category: "plain",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "莱德尼采庄园", lon: 16.8033, lat: 48.7997, elevation: 170, kind: "city" },
  bbox: [16.60, 48.65, 17.10, 49.05],
  label: { lon: 16.85, lat: 48.85, rotation: 0 },
  source: "下摩拉瓦低地：摩拉瓦河下游沿捷克与奥地利、斯洛伐克边境展布的低地，气候偏向潘诺尼亚型，夏季炎热少雨、冬季相对温和，年降水量仅550至650毫米，是捷克最干旱的地区；富含钙质的黄土状母质与充足光照使其成为捷克最重要的葡萄酒产区，莱德尼采—瓦尔季采庄园园林群1996年列入联合国教科文组织世界遗产名录（Wikipedia/UNESCO WebSearch 2026）",
};

const LABE_RIVER: TerrainEntry = {
  id: "labe-river",
  nameZh: "易北河（拉贝河）",
  nameEn: "Labe / Elbe",
  category: "river",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "赫热恩斯科河谷", lon: 14.2425, lat: 50.8744, elevation: 130, kind: "gorge" },
  bbox: [14.20, 50.30, 15.60, 50.85],
  axis: [[15.53, 50.78], [14.24, 50.87]],
  viewScale: 1.6,
  label: { lon: 14.9, lat: 50.55, rotation: -40 },
  source: "易北河（拉贝河）：中欧主要大河之一，全长约1165公里，其中约三分之一流经捷克境内；源头在克尔科诺谢山南坡、海拔约1386米的拉贝草甸，向西南、再转北流贯波希米亚盆地，最终在赫热恩斯科附近切穿克鲁什内山进入德国，出境处海拔约115米，是捷克全境地势最低点（Britannica/Wikipedia WebSearch 2026）",
};

const VLTAVA_RIVER: TerrainEntry = {
  id: "vltava-river",
  nameZh: "伏尔塔瓦河",
  nameEn: "Vltava",
  category: "river",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "布拉格城区曲流", lon: 14.4208, lat: 50.0880, elevation: 190, kind: "meander" },
  bbox: [13.55, 48.95, 14.60, 50.40],
  axis: [[13.56, 48.97], [14.475, 50.352]],
  viewScale: 1.8,
  label: { lon: 14.1, lat: 49.6, rotation: -70 },
  source: "伏尔塔瓦河：捷克境内最长的河流，全长430公里，是易北河水量最大的支流；发源于舒马瓦山黑伏尔塔瓦河源头，向南、再折向北纵贯捷克南部与中部，流经切斯基克鲁姆洛夫、捷克布杰约维采、布拉格，最终在梅尔尼克汇入易北河；布拉格市区河段绕城形成一段舒缓曲流，是捷克辨识度最高的城市河景之一（jiznicechy.cz/Wikipedia WebSearch 2026）",
};

const OHRE_RIVER: TerrainEntry = {
  id: "ohre-river",
  nameZh: "俄赫热河（埃格尔河）",
  nameEn: "Ohře / Eger",
  category: "river",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "海布", lon: 12.3706, lat: 50.0794, elevation: 451, kind: "city" },
  bbox: [12.30, 49.95, 14.20, 50.55],
  axis: [[12.37, 50.08], [14.18, 50.53]],
  viewScale: 1.5,
  label: { lon: 13.3, lat: 50.25, rotation: -15 },
  source: "俄赫热河（埃格尔河）：易北河左岸支流，全长约305公里，其中约256公里流经捷克境内，是捷克第四长河；发源于德国菲希特尔山，经海布进入捷克后流经索科洛夫盆地、卡罗维发利盆地，最终在利托梅日采附近汇入易北河；沿河的卡罗维发利、玛丽亚温泉市等温泉城镇因构造断裂带涌出的矿泉水而闻名（Britannica WebSearch 2026）",
};

const MORAVA_RIVER: TerrainEntry = {
  id: "morava-river",
  nameZh: "摩拉瓦河",
  nameEn: "Morava",
  category: "river",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "利托维尔（摩拉维亚威尼斯）", lon: 17.0761, lat: 49.7011, elevation: 225, kind: "meander" },
  bbox: [16.80, 48.75, 17.35, 50.20],
  axis: [[16.85, 50.18], [17.05, 48.78]],
  viewScale: 1.5,
  label: { lon: 17.0, lat: 49.5, rotation: -80 },
  source: "摩拉瓦河：多瑙河支流，全长约365公里，发源于克拉利茨基山南坡，向南纵贯摩拉维亚全境，下游构成捷克与斯洛伐克、进而斯洛伐克与奥地利之间的界河，最终在布拉迪斯拉发附近汇入多瑙河；“摩拉维亚”之名即源自这条河，利托维尔一带河道分汊成数条支流穿城而过，有“摩拉维亚威尼斯”之称（Britannica WebSearch 2026）",
};

const CESKE_SVYCARSKO: TerrainEntry = {
  id: "ceske-svycarsko",
  nameZh: "捷克瑞士（易北河砂岩山地）",
  nameEn: "České Švýcarsko / Bohemian Switzerland",
  category: "gorge",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "普拉夫齐茨卡石拱", lon: 14.2815, lat: 50.8838, elevation: 200, kind: "gorge" },
  bbox: [14.10, 50.83, 14.45, 50.98],
  label: { lon: 14.28, lat: 50.90, rotation: 0 },
  source: "捷克瑞士（易北河砂岩山地）：易北河切穿白垩纪晚期海相砂岩台地形成的深切峡谷与岩塔景观区，两岸崖壁陡立、支流侵蚀出众多狭窄岩缝峡谷；园内的普拉夫齐茨卡石拱跨度26.5米、内部净高16米，是欧洲最大的天然砂岩拱门，2000年设立捷克瑞士国家公园（VisitCzechia/Wikipedia WebSearch 2026）",
};

const PODYJI_GORGE: TerrainEntry = {
  id: "podyji-gorge",
  nameZh: "波迪伊河谷（迪耶河峡谷）",
  nameEn: "Podyjí / Thayatal Gorge",
  category: "gorge",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "兹诺伊莫河曲", lon: 15.900, lat: 48.850, elevation: 220, kind: "meander" },
  bbox: [15.70, 48.78, 16.10, 48.92],
  label: { lon: 15.9, lat: 48.85, rotation: 0 },
  source: "波迪伊河谷（迪耶河峡谷）：迪耶河沿捷克与奥地利边境切穿捷克—摩拉维亚高地东南缘，历经约40公里河段刻蚀出深达220米的峡谷式河谷，谷内多岩石圆丘、崖壁与河曲；1951年后作为“铁幕”边境管制区近40年无人进入，反而使原始生态保存完好，1991年设立波迪伊国家公园（捷克面积最小的国家公园），2000年与奥地利一侧的塔亚河谷国家公园共同构成跨境保护区（Wikipedia/nppodyji.cz WebSearch 2026）",
};

const MORAVSKY_KRAS: TerrainEntry = {
  id: "moravsky-kras",
  nameZh: "摩拉维亚喀斯特",
  nameEn: "Moravský kras / Moravian Karst",
  category: "plateau",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "马措哈深渊", lon: 16.7297, lat: 49.3731, elevation: 410, kind: "escarpment" },
  bbox: [16.65, 49.32, 16.85, 49.45],
  label: { lon: 16.75, lat: 49.38, rotation: 0 },
  source: "摩拉维亚喀斯特：中欧最重要的喀斯特地貌区之一，由泥盆纪石灰岩构成，面积约100平方公里内已探明溶洞与峡谷逾1100处；马措哈深渊由巨大溶洞洞顶塌陷形成，垂直深度138.5米（至下湖水面），是中欧最深的天然竖井状深渊之一，地下的普恩克瓦河可乘船游览、直达深渊底部（VisitCzechia/moravskykras.net WebSearch 2026）",
};

const CHEBSKO_SOKOLOVSKA_PANEV: TerrainEntry = {
  id: "chebsko-sokolovska-panev",
  nameZh: "海布—索科洛夫盆地（卡罗维发利温泉盆地）",
  nameEn: "Cheb-Sokolov Basin / Karlovy Vary Spa Basin",
  category: "basin",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "卡罗维发利温泉回廊", lon: 12.8725, lat: 50.2306, elevation: 447, kind: "escarpment" },
  bbox: [12.30, 49.95, 13.10, 50.40],
  label: { lon: 12.7, lat: 50.15, rotation: 0 },
  source: "海布—索科洛夫盆地（卡罗维发利温泉盆地）：俄赫热河构造断陷带（俄赫热地堑）在捷克西部形成的一系列新生代沉积盆地，地壳断裂活动至今仍在延续，区域内偶有地震活动；断裂带涌出数十处温度、矿化度各异的矿泉，日涌水量约300万升，卡罗维发利即因这些温泉发展成欧洲著名的温泉疗养城市，市内沿捷普拉河两岸建有多条历史悠久的温泉回廊（casopis.ochranaprirody.cz/Springer WebSearch 2026）",
};

const LIPNO_RESERVOIR: TerrainEntry = {
  id: "lipno-reservoir",
  nameZh: "利普诺水库",
  nameEn: "Lipno Reservoir",
  category: "lake",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "利普诺大坝", lon: 14.183, lat: 48.650, elevation: 726, kind: "lake" },
  bbox: [13.95, 48.55, 14.35, 48.95],
  viewScale: 1.3,
  label: { lon: 14.1, lat: 48.72, rotation: 0 },
  source: "利普诺水库：1952至1959年在伏尔塔瓦河上游、舒马瓦山间修建的水利枢纽，正常蓄水位海拔725.6米，水域面积近50平方公里，是捷克境内面积最大的水体，也是捷克最大的人工湖；水库全长约44公里、最宽处约14公里，兼具径流调节、发电与夏季度假功能（ČEZ/Wikipedia WebSearch 2026）",
};

const MACHOVO_JEZERO: TerrainEntry = {
  id: "machovo-jezero",
  nameZh: "马哈湖",
  nameEn: "Lake Mácha",
  category: "lake",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "马哈湖", lon: 14.6497, lat: 50.5831, elevation: 270, kind: "lake" },
  bbox: [14.58, 50.55, 14.72, 50.62],
  label: { lon: 14.65, lat: 50.58, rotation: 0 },
  source: "马哈湖：捷克北部一座人工蓄水塘，面积2.84平方公里，是利贝雷茨地区最大的水面，因规模较大而俗称“湖”；14世纪由查理四世下令蓄水成塘，1930年代经沙滩改造成为避暑胜地，1961年以曾多次到访、并以此为长诗《五月》背景地的捷克浪漫主义诗人卡雷尔·希内克·马哈之名命名（Wikipedia WebSearch 2026）",
};

const VLTAVA_VALLEY_CESKY_KRUMLOV: TerrainEntry = {
  id: "vltava-valley-cesky-krumlov",
  nameZh: "切斯基克鲁姆洛夫伏尔塔瓦河曲流",
  nameEn: "Vltava Meander at Český Krumlov",
  category: "valley",
  regionId: "europe",
  country: "czechia",
  landmark: { name: "切斯基克鲁姆洛夫城堡", lon: 14.3153, lat: 48.8111, elevation: 492, kind: "meander" },
  bbox: [14.28, 48.78, 14.36, 48.84],
  label: { lon: 14.315, lat: 48.81, rotation: 0 },
  source: "切斯基克鲁姆洛夫伏尔塔瓦河曲流：伏尔塔瓦河在舒马瓦山北麓切出的一段深切曲流，河道呈双重马蹄形几乎环绕古城核心，13世纪始建的克鲁姆洛夫城堡即矗立于曲流内侧崖丘之上；这种紧凑的曲流地貌与建成于其上的中世纪城镇格局共同构成完整的历史景观，1992年整座古城列入联合国教科文组织世界遗产名录（UNESCO/Wikipedia WebSearch 2026）",
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
  SHARK_BAY, PURNULULU, GLASSHOUSE_MOUNTAINS,
  WAVE_ROCK, KARLU_KARLU,
  KINGS_CANYON, NITMILUK,
  GREAT_SANDY_DESERT,
  GREAT_AUSTRALIAN_BIGHT, NAMBUNG_PINNACLES,
  WILLANDRA_LAKES, MOUNT_GAMBIER,
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
  GRAN_PARADISO, GRAN_SASSO, POLLINO, GENNARGENTU, LAKE_GARDA, LAKE_COMO, VENETIAN_LAGOON,
  MOUNT_VESUVIUS, MOUNT_ETNA, CAMPI_FLEGREI, AEOLIAN_ISLANDS, STROMBOLI,
  AMALFI_COAST, CAPRI, CINQUE_TERRE,
  TUSCAN_HILLS, CARSO_KARST, ALTA_MURGIA, GARGANO_PROMONTORY, MARMOLADA,
  LAKE_TRASIMENO, DUNE_DI_PISCINAS,
  // ===== 欧洲 / 西班牙 =====
  PICOS_DE_EUROPA, SISTEMA_CENTRAL, SISTEMA_IBERICO, SIERRA_MORENA, SIERRA_NEVADA_ES,
  SIERRA_DE_GRAZALEMA, GARROTXA_VOLCANIC_ZONE, TEIDE, SERRA_DE_TRAMUNTANA,
  MESETA_CENTRAL, EBRO_BASIN, GUADALQUIVIR_VALLEY,
  TABERNAS_DESERT, BARDENAS_REALES,
  TIMANFAYA, LA_MANCHA_PLAIN,
  CALDERA_DE_TABURIENTE,
  RIAS_BAIXAS, COSTA_BRAVA, CABO_DE_GATA, DONANA,
  DUERO_RIVER, EBRO_RIVER,
  ORDESA_CANYON,
  LAGO_DE_SANABRIA, LAGUNA_DE_GALLOCANTA,
  // ===== 欧洲 / 德国 =====
  BAVARIAN_ALPS, BLACK_FOREST, HARZ_MOUNTAINS, ERZGEBIRGE, BAVARIAN_FOREST,
  RHON_MOUNTAINS, EIFEL, VOGELSBERG, THURINGIAN_FOREST,
  SWABIAN_JURA, FRANCONIAN_JURA,
  SAXON_SWITZERLAND, TEUTOBURG_FOREST,
  NORTH_GERMAN_PLAIN,
  NORDLINGER_RIES,
  RHINE_GORGE, DANUBE_GORGE,
  MOSELLE_VALLEY,
  ELBE_RIVER, SPREEWALD,
  CHIEMSEE, MURITZ, LAACHER_SEE,
  WADDEN_SEA, RUGEN_CHALK_CLIFFS,
  HELGOLAND,
  // ===== 欧洲 / 希腊 =====
  MOUNT_OLYMPUS, PINDUS_MOUNTAINS, TAYGETUS, MOUNT_PARNASSUS, MOUNT_ATHOS,
  WHITE_MOUNTAINS_CRETE, MOUNT_PILIO, METHANA,
  LASITHI_PLATEAU, THESSALY_PLAIN,
  SANTORINI_CALDERA, NISYROS,
  GULF_OF_CORINTH,
  VIKOS_GORGE, SAMARIA_GORGE,
  ZAKYNTHOS_NAVAGIO, MANI_PENINSULA,
  CRETE, SAMOTHRAKI, CORFU, MILOS, RHODES,
  LAKE_TRICHONIDA, LAKE_PRESPA,
  ACHELOOS_RIVER,
  METEORA,
  // ===== 欧洲 / 葡萄牙 =====
  PENEDA_GERES, SERRA_DA_ESTRELA, SERRA_DE_SINTRA, SERRA_DE_MONCHIQUE, SERRA_DE_MONTESINHO,
  SERRA_DE_AIRE_CANDEEIROS, TRAS_OS_MONTES_PLATEAU,
  ALENTEJO_PLAIN,
  DOURO_VALLEY, DOURO_INTERNATIONAL,
  TAGUS_RIVER, MINHO_RIVER, MONDEGO_RIVER, GUADIANA_RIVER,
  ALQUEVA_RESERVOIR,
  TAGUS_ESTUARY, ALGARVE_COAST, RIA_FORMOSA, COSTA_VICENTINA, ARRABIDA_COAST,
  BERLENGAS,
  PICO_MOUNTAIN, SETE_CIDADES_CALDERA, FURNAS_CALDERA,
  MADEIRA_MOUNTAINS, CABO_GIRAO,
  // ===== 欧洲 / 荷兰 =====
  VAALSERBERG, VELUWE, UTRECHTSE_HEUVELRUG, DRENTHE_HONDSRUG,
  FLEVOLAND_POLDER,
  ZUIDPLASPOLDER,
  LOONSE_EN_DRUNENSE_DUINEN,
  WADDEN_SEA_NL, ZEELAND_DELTA, WESTERSCHELDE, HOLLAND_DUNES, BIESBOSCH, MAASVLAKTE, AFSLUITDIJK,
  IJSSELMEER, MARKERMEER, GREVELINGEN, LAUWERSMEER, WEERRIBBEN_WIEDEN,
  RHINE_DELTA_NL, MEUSE_RIVER_NL, IJSSEL_RIVER, VECHT_RIVER,
  WADDEN_ISLANDS,
  TERP_MOUNDS, GIETHOORN,
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
  // ===== 欧洲 / 比利时 =====
  HAUTES_FAGNES, CONDROZ, HESBAYE,
  ARDENNES_FOREST, PAYS_DE_HERVE, HAGELAND, SONIAN_FOREST, STAVELOT_MASSIF, GAUME,
  CAMPINE, FLANDERS_COASTAL_PLAIN,
  FAGNE_FAMENNE,
  MEUSE_VALLEY_BE, SEMOIS_VALLEY, OURTHE_VALLEY, VESDRE_VALLEY, LESSE_VALLEY,
  AMBLEVE_GORGE, HAN_SUR_LESSE_CAVES, VIROIN_VALLEY,
  SCHELDT_RIVER_BE, SAMBRE_RIVER, MEUSE_RIVER_BE, IJZER_RIVER,
  BELGIAN_COAST_DUNES, ZWIN,
  // ===== 欧洲 / 爱尔兰 =====
  MACGILLYCUDDYS_REEKS, WICKLOW_MOUNTAINS, CONNEMARA_TWELVE_BENS,
  COMERAGH_MOUNTAINS, GALTEE_MOUNTAINS, NEPHIN_BEG_RANGE,
  SLIEVE_BLOOM_MOUNTAINS, OX_MOUNTAINS,
  THE_BURREN,
  CENTRAL_LOWLANDS_BOG_OF_ALLEN,
  GLENDALOUGH, GLENVEAGH,
  GAP_OF_DUNLOE,
  LOUGH_CORRIB, KILLARNEY_LAKES, LOUGH_DERG_SHANNON, LOUGH_MASK,
  RIVER_SHANNON, RIVER_LIFFEY, RIVER_BLACKWATER_MUNSTER,
  ARAN_ISLANDS, SKELLIG_MICHAEL, ACHILL_ISLAND,
  CLIFFS_OF_MOHER, SLIEVE_LEAGUE, DINGLE_PENINSULA, RING_OF_KERRY_IVERAGH, KILLARY_HARBOUR,
  // ===== 欧洲 / 丹麦 =====
  CENTRAL_JUTLAND_HIGHLANDS, MOLS_BJERGE, REBILD_BAKKER, BORNHOLM_ALMINDINGEN,
  MONS_KLINT, STEVNS_KLINT, SKAGEN_ODDE, RUBJERG_KNUDE, LIMFJORD, ISEFJORD_ROSKILDE_FJORD,
  WADDEN_SEA_DK, BORNHOLM_GRANITE_COAST,
  SILKEBORG_LAKE_DISTRICT, ARRESOE, FURESOE,
  GUDENAA_RIVER,
  SYDFYNSKE_OEHAV_AEROE, LAESOE,
  JUTLAND_HEATH, ANHOLT_OERKENEN,
  STORE_VILDMOSE,
  WEST_JUTLAND_OUTWASH_PLAIN, LOLLAND_FALSTER_LOWLAND, FUNEN_ROLLING_FARMLAND,
  GREJSDALEN,
  // ===== 欧洲 / 瑞典 =====
  KEBNEKAISE_MASSIF, SAREK_MOUNTAINS,
  OLAND_ALVAR, VINDELFJALLEN,
  SILJAN_RING, STORE_MOSSE,
  VANERN, VATTERN, MALAREN, TORNETRASK, TAAKERN,
  TORNE_RIVER, DALALVEN, KLARALVEN,
  LAPPORTEN,
  ABISKO_CANYON,
  HOGA_KUSTEN, BOHUSLAN_COAST, BLEKINGE_ARCHIPELAGO, STOCKHOLM_ARCHIPELAGO,
  GOTLAND, FARO,
  SODERASEN, TIVEDEN, HALLANDSASEN,
  SKANE_PLAIN,
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
  // ===== 欧洲 / 卢森堡 =====
  OESLING_PLATEAU, MINETT_RED_LANDS,
  OUR_VALLEY, CLERVE_VALLEY, EISCH_VALLEY, MOSELLE_VALLEY_LU,
  UPPER_SURE_LAKE,
  SURE_RIVER, ALZETTE_RIVER,
  MULLERTHAL_BERDORF, SCHIESSENTUMPEL,
  LUXEMBOURG_PLATEAU,
  // ===== 亚洲 / 泰国 =====
  DOI_INTHANON, DOI_LUANG_CHIANG_DAO, DOI_SUTHEP_PUI, KHAO_LUANG, KHAO_YAI,
  THUNG_YAI_HUAI_KHA_KHAENG,
  KHORAT_PLATEAU, PHU_KRADUENG,
  SIMILAN_ISLANDS, SURIN_ISLANDS, KO_TARUTAO, PHI_PHI_ISLANDS,
  AO_PHANG_NGA, KRABI_KARST_COAST, KHAO_SAM_ROI_YOT,
  THUNG_SALAENG_LUANG,
  CHEOW_LARN_LAKE, BUENG_BORAPHET,
  CHAO_PHRAYA_RIVER, MEKONG_RIVER_TH, MUN_RIVER,
  KWAI_RIVER_VALLEY,
  ERAWAN_WATERFALL, SAM_PHAN_BOK,
  CHAO_PHRAYA_DELTA,
  // ===== 亚洲 / 韩国 =====
  TAEBAEK_MOUNTAINS, SEORAKSAN, JIRISAN, SONGNISAN, DEOGYUSAN, HALLASAN,
  JEJU_ISLAND, ULLEUNGDO,
  HAEAN_BASIN, YONGNEUP_DAEAMSAN,
  CHEORWON_LAVA_PLATEAU,
  CHARYEONG_MOUNTAINS,
  WOLCHULSAN,
  SUNCHEON_BAY_WETLAND, BYEONSAN_PENINSULA_COAST, TAEAN_COAST_DUNES, HALLYEOHAESANG_MARINE_PARK,
  DAEGWALLYEONG_HIGHLAND,
  HONAM_PLAIN, NAKDONG_ESTUARY_EULSUKDO,
  HAN_RIVER, NAKDONG_RIVER, GEUM_RIVER,
  HOERYONGPO_ANDONG_MEANDER,
  SOGEUMGANG_GORGE, JUWANGSAN_GORGE,
  SOYANG_LAKE, GYEONGPO_LAGOON,
  // ===== 欧洲 / 波兰 =====
  TATRA_MOUNTAINS, SUDETES_KARKONOSZE, BIESZCZADY_MOUNTAINS,
  BESKIDY_MOUNTAINS, PIENINY_MOUNTAINS, SWIETOKRZYSKIE_MOUNTAINS,
  KRAKOW_CZESTOCHOWA_UPLAND, GORY_STOLOWE,
  MASURIAN_LAKES, LAKE_HANCZA,
  VISTULA_RIVER, ODER_RIVER, BUG_RIVER, NAREW_RIVER,
  DUNAJEC_GORGE, OJCOW_VALLEY,
  SLOWINSKI_DUNES, HEL_PENINSULA,
  WOLIN_ISLAND,
  GREAT_POLISH_LOWLAND, ZULAWY_WISLANE,
  BIALOWIEZA_FOREST, ROZTOCZE, KASHUBIAN_SWITZERLAND,
  BIEBRZA_MARSHES,
  // ===== 亚洲 / 越南 =====
  FANSIPAN, PHONG_NHA_KE_BANG, BA_NA_HILLS, BACH_MA_MOUNTAIN,
  DONG_VAN_KARST_PLATEAU, CENTRAL_HIGHLANDS_TAY_NGUYEN,
  CAT_BA_ISLAND, CON_DAO, PHU_QUOC, LY_SON_ISLAND, CU_LAO_CHAM,
  HA_LONG_BAY, MUI_NE_DUNES, NHA_TRANG_BAY,
  BA_BE_LAKE, LAK_LAKE,
  RED_RIVER, MEKONG_RIVER_VN, PERFUME_RIVER,
  TRANG_AN_LANDSCAPE_COMPLEX,
  TU_SAN_CANYON, BAN_GIOC_WATERFALL,
  RED_RIVER_DELTA, MEKONG_DELTA,
  NGU_HANH_SON,
  // ===== 亚洲 / 蒙古 =====
  MONGOL_ALTAI, KHANGAI_MOUNTAINS, KHENTII_MOUNTAINS, GOBI_ALTAI,
  MONGOLIA_GOBI, GREAT_LAKES_DEPRESSION,
  UVS_LAKE, KHYARGAS_LAKE, KHAR_US_LAKE, KHOVSGOL_LAKE,
  TERKHIIN_TSAGAAN_LAKE, KHORGO_VOLCANO, KHONGORYN_ELS, BAYANZAG,
  GURVAN_SAIKHAN, YOLYN_AM, ORKHON_VALLEY, ORKHON_WATERFALL,
  DARIGANGA_VOLCANIC_FIELD,
  SELENGE_RIVER, TUUL_RIVER, KHERLEN_RIVER, ONON_RIVER,
  EASTERN_STEPPE, KHUSTAIN_NURUU, TSAGAAN_SUVARGA,
  // ===== 亚洲 / 马来西亚 =====
  TITIWANGSA_MOUNTAINS, GUNUNG_TAHAN, CAMERON_HIGHLANDS,
  MOUNT_KINABALU, CROCKER_RANGE, KELABIT_HIGHLANDS,
  GUA_TEMPURUNG, BATU_CAVES, GUNUNG_MULU_NP, NIAH_CAVES,
  MALIAU_BASIN, DANUM_VALLEY, ENDAU_ROMPIN,
  LANGKAWI_GEOPARK, PENANG_ISLAND, TIOMAN_ISLAND,
  PERHENTIAN_ISLANDS, REDANG_ISLAND, SIPADAN_ISLAND,
  PAHANG_RIVER, KELANTAN_RIVER, PERAK_RIVER, KINABATANGAN_RIVER,
  REJANG_RIVER, TASIK_CHINI, BAKO_NATIONAL_PARK,
  // ===== 亚洲 / 新加坡 =====
  BUKIT_TIMAH_NATURE_RESERVE, CENTRAL_CATCHMENT_NATURE_RESERVE,
  SUNGEI_BULOH_WETLAND_RESERVE, CHEK_JAWA_WETLANDS, PULAU_UBIN,
  SISTERS_ISLANDS_MARINE_PARK, LABRADOR_NATURE_RESERVE,
  BUKIT_BATOK_NATURE_PARK, CONEY_ISLAND_PARK, KRANJI_MARSHES,
  SOUTHERN_ISLANDS, PULAU_SEMAKAU,
  // ===== 亚洲 / 菲律宾 =====
  MAYON_VOLCANO, TAAL_LAKE, MOUNT_PINATUBO, MOUNT_APO,
  MOUNT_PULAG, CORDILLERA_CENTRAL_LUZON,
  SIERRA_MADRE_PHILIPPINES, MOUNT_KANLAON, CHOCOLATE_HILLS,
  BANAUE_IFUGAO_RICE_TERRACES, CAMIGUIN_ISLAND, BATANES_ISLANDS,
  EL_NIDO_BACUIT_ARCHIPELAGO, TUBBATAHA_REEFS, CORON_CALAMIAN_ISLANDS,
  PUERTO_PRINCESA_UNDERGROUND_RIVER, PAGSANJAN_GORGE,
  CAGAYAN_RIVER, LAKE_LANAO, AGUSAN_MARSH,
  HUNDRED_ISLANDS_NATIONAL_PARK, VERDE_ISLAND_PASSAGE,
  // ===== 亚洲 / 印度尼西亚 =====
  MOUNT_SEMERU, BROMO_TENGGER_CALDERA, MOUNT_MERAPI, IJEN_CRATER,
  DIENG_PLATEAU, GUNUNG_SEWU_KARST, KRAKATOA,
  LAKE_TOBA, GUNUNG_LEUSER, MOUNT_KERINCI,
  MOUNT_AGUNG, ULUWATU_CLIFFS, NUSA_PENIDA,
  MOUNT_RINJANI, KELIMUTU, KOMODO_NATIONAL_PARK, MOUNT_TAMBORA,
  TANJUNG_PUTING, KAPUAS_RIVER,
  TANA_TORAJA, BUNAKEN_NATIONAL_PARK, WAKATOBI,
  BANDA_ISLANDS, BELITUNG_ISLAND,
  PUNCAK_JAYA, RAJA_AMPAT,
  // ===== 亚洲 / 哈萨克斯坦 =====
  ZAILIYSKY_ALATAU, KARKARALY_MOUNTAINS, TARBAGATAI_MOUNTAINS, BEKTAU_ATA,
  USTYURT_PLATEAU, KARAGIYE_DEPRESSION,
  BETPAK_DALA_DESERT, MOIYNKUM_DESERT,
  CHARYN_CANYON, BOZZHYRA, MEDEU_GORGE,
  LAKE_BALKHASH, KOLSAI_LAKES, KAINDY_LAKE, BIG_ALMATY_LAKE,
  KORGALZHYN_RESERVE, NORTH_ARAL_SEA,
  CASPIAN_SEA_COAST_KAZAKHSTAN,
  ILI_RIVER, IRTYSH_RIVER_KAZAKHSTAN, URAL_RIVER,
  SARYARKA_STEPPE,
  ALTYN_EMEL_SINGING_DUNE, AKTAU_KATUTAU_HILLS, BURABAY_HILLS,
  TORYSH_VALLEY_OF_BALLS,
  // ===== 亚洲 / 土耳其 =====
  TAURUS_MOUNTAINS, PONTUS_MOUNTAINS, CENTRAL_ANATOLIAN_PLATEAU,
  ALADAGLAR, KACKAR_MOUNTAINS, MOUNT_ARARAT, MOUNT_ERCIYES,
  NEMRUT_CALDERA_VAN, LAKE_VAN, LAKE_TUZ, KONYA_BASIN,
  PAMUKKALE_TRAVERTINES, CAPPADOCIA_FAIRY_CHIMNEYS,
  IHLARA_VALLEY, SAKLIKENT_GORGE,
  BOSPHORUS_STRAIT, AEGEAN_COAST_TURKEY, LYCIAN_COAST, BLACK_SEA_COAST_TURKEY,
  MEKE_CRATER_LAKE,
  EUPHRATES_HEADWATERS, TIGRIS_HEADWATERS, KIZILIRMAK_RIVER,
  SALDA_LAKE, CUKUROVA_PLAIN, LAKE_BEYSEHIR,
  ULUDAG, MOUNT_SUPHAN,
  // ===== 欧洲 / 克罗地亚 =====
  DINARA, VELEBIT, BIOKOVO, UCKA, GORSKI_KOTAR, PAPUK, MEDVEDNICA,
  PANNONIAN_PLAIN_CROATIA, NERETVA_DELTA, LONJSKO_POLJE, KOPACKI_RIT,
  DALMATIAN_COAST, ISTRIA_COAST, KVARNER_GULF,
  PLITVICE_LAKES, VRANSKO_LAKE,
  KRKA, SAVA_RIVER_CROATIA, DRAVA_RIVER_CROATIA,
  CETINA_CANYON, ZRMANJA_CANYON, PAKLENICA,
  KORNATI, HVAR_ISLAND, MLJET, BRAC_ISLAND,
  // ===== 欧洲 / 捷克 =====
  KRKONOSE, SUMAVA, KRUSNE_HORY, JESENIKY, MORAVSKOSLEZSKE_BESKYDY,
  LUZICKE_HORY, NOVOHRADSKE_HORY,
  CESKOMORAVSKA_VRCHOVINA, BRDY, CESKE_STREDOHORI, PAVLOVSKE_VRCHY,
  CESKY_RAJ, ADRSPACH_TEPLICE_ROCKS,
  POLABI_LOWLAND, DOLNOMORAVSKY_UVAL,
  LABE_RIVER, VLTAVA_RIVER, OHRE_RIVER, MORAVA_RIVER,
  CESKE_SVYCARSKO, PODYJI_GORGE,
  MORAVSKY_KRAS, CHEBSKO_SOKOLOVSKA_PANEV,
  LIPNO_RESERVOIR, MACHOVO_JEZERO, VLTAVA_VALLEY_CESKY_KRUMLOV,
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
