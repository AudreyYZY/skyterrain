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

import { ALL_TERRAINS } from "@/lib/content/_generated/terrain-registry";

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
  | "inselberg";

// 分类定义与选取标准见 docs/terrain-taxonomy.md
// `delta` 已并入 `plain`；`scenic` 已拆分。
// `settlement`（原 `city` + `oasis` 合并）已于 2026-09-04 移除，5 个中国条目迁移到旅游模式，见 docs/terrain-taxonomy.md §8。

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

/** 地形条目按国家存放在 lib/content/<country>/registry.ts，这里是合并结果（顺序与 CONTENT_COUNTRIES 一致，拆分前后逐项相同）。 */
export const TERRAIN_REGISTRY: TerrainEntry[] = ALL_TERRAINS;

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
