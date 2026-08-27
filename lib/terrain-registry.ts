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
  | "desert"
  | "lake"
  | "river"
  | "valley"
  | "scenic"
  | "oasis"
  | "city";

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
  | "meander";

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
  /** 所属区域 — 用于区域切换过滤 */
  regionId: string;
  landmark: Landmark;
  /**
   * 地形范围（中国境内），[west, south, east, north]。
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
  regionId: "xinjiang",
  landmark: { name: "博格达峰", lon: 88.35, lat: 43.83, elevation: 5445, kind: "peak" },
  bbox: [79.0, 41.2, 95.0, 45.0],
  axis: [[80.0, 42.3], [94.0, 42.6]],
  viewFrom: 0, // 相机在准噶尔盆地一侧，看博格达北坡雪峰
  label: { lon: 88.13, lat: 43.88, rotation: -8 },
  pois: [
    { name: "托木尔峰", lon: 80.12, lat: 42.03, note: "天山最高峰，海拔7443m（国测局）" },
    { name: "天池", lon: 88.12, lat: 43.88, note: "天山冰蚀湖，海拔1910m" },
    { name: "伊犁河谷", lon: 81.6, lat: 43.6, note: "天山西段绿洲谷地" },
  ],
  source: "博格达峰: 维基/百科; 托木尔峰 42°02′N 80°07′E: 国测局(WebSearch 2026)",
};

const ALTAI: TerrainEntry = {
  id: "altai",
  nameZh: "阿尔泰山",
  nameEn: "Altai Mountains",
  category: "mountain_system",
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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

const BOGDA: TerrainEntry = {
  id: "bogda",
  nameZh: "博格达峰",
  nameEn: "Bogda Peak",
  category: "mountain_system",
  regionId: "xinjiang",
  landmark: { name: "博格达峰", lon: 88.35, lat: 43.83, elevation: 5445, kind: "peak" },
  bbox: [87.9, 43.6, 88.8, 44.05],
  label: { lon: 88.3, lat: 43.8, rotation: 0 },
  pois: [
    { name: "天池", lon: 88.12, lat: 43.88, note: "博格达峰北坡冰蚀湖" },
  ],
  source: "博格达峰: 维基/百科",
};

const PAMIR: TerrainEntry = {
  id: "pamir",
  nameZh: "帕米尔高原",
  nameEn: "Pamir Plateau",
  category: "plateau",
  regionId: "xinjiang",
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

const MUZTAGH_ATA: TerrainEntry = {
  id: "muztagh-ata",
  nameZh: "慕士塔格峰",
  nameEn: "Muztagh Ata",
  category: "mountain_system",
  regionId: "xinjiang",
  landmark: { name: "慕士塔格峰", lon: 75.116, lat: 38.276, elevation: 7509, kind: "peak" },
  bbox: [74.8, 38.0, 75.5, 38.6],
  viewFrom: 90, // 相机在喀拉库勒湖东侧
  label: { lon: 75.06, lat: 38.28, rotation: 0 },
  pois: [
    { name: "喀拉库勒湖", lon: 75.05, lat: 38.44, note: "冰川融水湖，倒映峰体" },
  ],
  source: "慕士塔格峰: 维基(WebSearch 2026)",
};

// ============================================================
// 新疆 — 湖泊
// ============================================================

const KANAS: TerrainEntry = {
  id: "kanas",
  nameZh: "喀纳斯湖",
  nameEn: "Kanas Lake",
  category: "lake",
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  regionId: "xinjiang",
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
  category: "scenic",
  regionId: "xinjiang",
  landmark: { name: "胜金口—吐峪沟段", lon: 89.62, lat: 42.93, elevation: 500, kind: "escarpment" },
  bbox: [88.9, 42.8, 90.3, 43.02],
  label: { lon: 89.5, lat: 43.0, rotation: 0 },
  source: "吐鲁番盆地北缘红层背斜；概略",
};

const NARAT: TerrainEntry = {
  id: "narat",
  nameZh: "那拉提草原",
  nameEn: "Nalati Grassland",
  category: "scenic",
  regionId: "xinjiang",
  landmark: { name: "那拉提空中草原", lon: 84.0, lat: 43.32, elevation: 1800, kind: "grassland" },
  bbox: [83.6, 43.1, 84.6, 43.5],
  label: { lon: 84.1, lat: 43.3, rotation: 0 },
  source: "巩乃斯河上游；概略",
};

const KUCHE: TerrainEntry = {
  id: "kuche",
  nameZh: "库车大峡谷",
  nameEn: "Kuqa Grand Canyon",
  category: "scenic",
  regionId: "xinjiang",
  landmark: { name: "天山神秘大峡谷", lon: 83.05, lat: 42.23, elevation: 1600, kind: "gorge" },
  bbox: [82.6, 42.0, 83.5, 42.5],
  label: { lon: 83.0, lat: 41.8, rotation: 0 },
  source: "库车县城以北红层峡谷；概略（待实测）",
};

const BAYANBULAK: TerrainEntry = {
  id: "bayanbulak",
  nameZh: "巴音布鲁克草原",
  nameEn: "Bayanbulak Grassland",
  category: "scenic",
  regionId: "xinjiang",
  landmark: { name: "九曲十八弯（开都河曲流）", lon: 84.13, lat: 43.0, elevation: 2500, kind: "meander" },
  bbox: [83.5, 42.7, 85.0, 43.4],
  label: { lon: 84.2, lat: 42.9, rotation: 0 },
  source: "开都河高山盆地曲流；概略",
};

const KASHGAR: TerrainEntry = {
  id: "kashgar",
  nameZh: "喀什",
  nameEn: "Kashgar",
  category: "city",
  regionId: "xinjiang",
  landmark: { name: "艾提尕尔—喀什老城", lon: 75.99, lat: 39.47, elevation: 1290, kind: "city" },
  bbox: [75.8, 39.3, 76.2, 39.65],
  label: { lon: 75.99, lat: 39.47, rotation: 0 },
  source: "喀什市中心",
};

const HOTAN: TerrainEntry = {
  id: "hotan",
  nameZh: "和田",
  nameEn: "Hotan",
  category: "city",
  regionId: "xinjiang",
  landmark: { name: "和田市中心", lon: 79.93, lat: 37.11, elevation: 1370, kind: "city" },
  bbox: [79.7, 36.9, 80.2, 37.3],
  label: { lon: 79.9, lat: 37.1, rotation: 0 },
  source: "和田市中心",
};

const TURPAN_CITY: TerrainEntry = {
  id: "turpan-city",
  nameZh: "吐鲁番",
  nameEn: "Turpan",
  category: "city",
  regionId: "xinjiang",
  landmark: { name: "吐鲁番高昌区中心", lon: 89.18, lat: 42.95, elevation: 30, kind: "city" },
  bbox: [89.0, 42.8, 89.4, 43.1],
  label: { lon: 89.17, lat: 42.95, rotation: 0 },
  source: "吐鲁番市中心",
};

const BACHU: TerrainEntry = {
  id: "bachu",
  nameZh: "巴楚",
  nameEn: "Bachu",
  category: "oasis",
  regionId: "xinjiang",
  landmark: { name: "巴楚绿洲", lon: 78.55, lat: 39.79, elevation: 1150, kind: "oasis" },
  bbox: [78.3, 39.6, 78.9, 40.0],
  label: { lon: 78.55, lat: 39.78, rotation: 0 },
  source: "巴楚县城概略",
};

const MAIGAITI: TerrainEntry = {
  id: "maigaiti",
  nameZh: "麦盖提",
  nameEn: "Makit",
  category: "oasis",
  regionId: "xinjiang",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
  regionId: "china",
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
// 注册表
// ============================================================

export const TERRAIN_REGISTRY: TerrainEntry[] = [
  // 新疆 — 山脉
  TIANSHAN, ALTAI, KUNLUN, KARAKORAM, BOGDA, PAMIR, MUZTAGH_ATA,
  // 新疆 — 湖泊
  KANAS, SAYRAM, TIANCHI, BOSTEN, AIBI, LOP_NUR,
  // 新疆 — 沙漠
  TAKLAMAKAN, GURBANTUNGGUT, KUMTAG,
  // 新疆 — 盆地
  JUNGGAR_BASIN, TARIM_BASIN, TURPAN_BASIN,
  // 新疆 — 河谷 / 河流
  ILI_VALLEY, TARIM_RIVER, ERTIS, YARKANT_RIVER,
  // 新疆 — 景观 / 绿洲 / 城市
  FLAMING_MOUNTAINS, NARAT, KUCHE, BAYANBULAK, KASHGAR, HOTAN, TURPAN_CITY, BACHU, MAIGAITI,
  // 全国 — 山脉
  QINLING, QILIAN, TAIHANG, DAXINGANLING, HENGDUAN, HIMALAYA,
  // 全国 — 高原
  QINGHAI_TIBET, LOESS, INNER_MONGOLIA, YUNNAN_GUIZHOU,
  // 全国 — 盆地
  SICHUAN, QAIDAM,
  // 全国 — 平原
  NORTHEAST, NORTH_CHINA, YANGTZE,
];

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
