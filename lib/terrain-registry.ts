/**
 * Terrain Registry — 地形位置的单一真实源
 *
 * 取代分散在以下位置的重复/矛盾坐标：
 *   - data/*.json 的 lat/lon/cameraHeight
 *   - features/china-core-features.ts 的 cameraGeometry.target
 *   - features/xinjiang-core-features.ts 的 cameraGeometry
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
// 新疆 — 山脉
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
// 新疆 — 湖泊
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
// 新疆 — 沙漠
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
// 新疆 — 盆地
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
// 新疆 — 河谷 / 河流
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
// 新疆 — 景观 / 绿洲 / 城市
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
// 全国 — 山脉
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
// 全国 — 高原
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
// 全国 — 盆地
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
// 全国 — 平原
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
// 全国 — 山脉（补充）
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
// 全国 — 平原 / 三角洲（补充）
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
// 全国 — 丘陵
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
// 全国 — 沙漠（补充）
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
// 全国 — 河谷 / 峡谷 / 走廊（补充）
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
// 全国 — 湖泊（补充）
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
// 全国 — 岛屿
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

// ============================================================
// 注册表
// ============================================================

export const TERRAIN_REGISTRY: TerrainEntry[] = [
  // 新疆 — 山脉
  TIANSHAN, ALTAI, KUNLUN, KARAKORAM, PAMIR,
  // 新疆 — 湖泊
  KANAS, SAYRAM, TIANCHI, BOSTEN, AIBI, LOP_NUR,
  // 新疆 — 沙漠
  TAKLAMAKAN, GURBANTUNGGUT, KUMTAG,
  // 新疆 — 盆地
  JUNGGAR_BASIN, TARIM_BASIN, TURPAN_BASIN,
  // 新疆 — 河谷 / 河流
  ILI_VALLEY, TARIM_RIVER, ERTIS, YARKANT_RIVER,
  // 新疆 — 草原 / 峡谷 / 丘陵 / 绿洲聚落
  FLAMING_MOUNTAINS, NARAT, KUCHE, BAYANBULAK, KASHGAR, HOTAN, TURPAN_CITY, BACHU, MAIGAITI,
  // 全国 — 山脉
  QINLING, QILIAN, TAIHANG, DAXINGANLING, HENGDUAN, HIMALAYA,
  XIAOXINGANLING, CHANGBAI, YINSHAN, LULIANG, HELAN, LIUPAN,
  DABASHAN, XUEFENG, WUYI, NANLING, DABIE, DALOU, ALTUN,
  // 全国 — 高原
  QINGHAI_TIBET, LOESS, INNER_MONGOLIA, YUNNAN_GUIZHOU,
  // 全国 — 盆地
  SICHUAN, QAIDAM,
  // 全国 — 平原 / 三角洲
  NORTHEAST, NORTH_CHINA, YANGTZE,
  CHENGDU_PLAIN, GUANZHONG_PLAIN, HETAO_PLAIN, YANGTZE_DELTA, PEARL_DELTA,
  // 全国 — 丘陵
  LIAODONG_HILLS, SHANDONG_HILLS, JIANGNAN_HILLS, LIANGGUANG_HILLS,
  // 全国 — 沙漠
  BADAIN_JARAN, TENGGER, KUBUQI, ULAN_BUH, MUUS, GOBI,
  // 全国 — 丘陵（半岛）
  LEIZHOU,
  // 全国 — 河谷 / 峡谷 / 走廊
  HEXI_CORRIDOR, YANGTZE_GORGES, TSANGPO_GORGE, TIGER_LEAPING_GORGE,
  // 全国 — 湖泊
  QINGHAI_LAKE, NAMTSO, POYANG, DONGTING,
  // 全国 — 岛屿
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
