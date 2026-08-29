/**
 * Region Selector — 区域选择器
 *
 * 数据驱动的区域切换，支持无限扩展。
 * 新增地区只需添加配置，无需改动 UI 组件。
 */

export interface RegionCenter {
  /** 经度 */
  lon: number;
  /** 纬度 */
  lat: number;
  /** 初始查看高度（米） */
  height: number;
  /** 着陆高度（用户交互后的最终高度） */
  settleHeight?: number;
}

export interface Region {
  /** 唯一标识 */
  id: string;
  /** 显示名称 */
  name: string;
  /** 英文名 */
  nameEn?: string;
  /** 区域中心坐标 */
  center: RegionCenter;
  /** 地貌数量（用于统计显示） */
  terrainCount: number;
  /** 是否已填充内容 */
  available: boolean;
}

/**
 * 区域 = 大洲。中国并入亚洲、澳大利亚并入大洋洲（见
 * docs/superpowers/specs/2026-08-30-world-terrain-expansion-design.md）。
 *
 * 新增一个国家的地形：
 * 1. `lib/terrain-registry.ts` 加条目，`regionId` 填所属大洲、`country` 填国家 slug
 * 2. 若该大洲此前 available:false，改为 true
 * 3. `terrainCount` 由 `scripts/check-regions.ts` 核对（不要手填错）
 * 4. `lib/terrain-content.{zh,en}.ts` 写双语 6 板块
 */
export const REGIONS: Region[] = [
  {
    id: "asia",
    name: "亚洲",
    nameEn: "Asia",
    center: { lon: 90.0, lat: 40.0, height: 14000000 },
    terrainCount: 110,
    available: true,
  },
  {
    id: "europe",
    name: "欧洲",
    nameEn: "Europe",
    center: { lon: 15.0, lat: 52.0, height: 6500000 },
    terrainCount: 88,
    available: true,
  },
  {
    id: "africa",
    name: "非洲",
    nameEn: "Africa",
    center: { lon: 19.0, lat: 3.0, height: 13000000 },
    terrainCount: 0,
    available: false,
  },
  {
    id: "north-america",
    name: "北美洲",
    nameEn: "North America",
    center: { lon: -100.0, lat: 45.0, height: 12000000 },
    terrainCount: 51,
    available: true,
  },
  {
    id: "south-america",
    name: "南美洲",
    nameEn: "South America",
    center: { lon: -60.0, lat: -20.0, height: 11000000 },
    terrainCount: 0,
    available: false,
  },
  {
    id: "oceania",
    name: "大洋洲",
    nameEn: "Oceania",
    center: { lon: 140.0, lat: -25.0, height: 6500000 },
    terrainCount: 52,
    available: true,
  },
];

/** 默认大洲 —— 取代散落的 activeRegion === "china" 硬编码 */
export const DEFAULT_REGION_ID = "asia";

/** 当前激活的区域 ID */
export let activeRegionId: string = DEFAULT_REGION_ID;

/** 设置当前激活区域 */
export function setActiveRegion(id: string): void {
  activeRegionId = id;
}

/** 获取当前激活区域 */
export function getActiveRegion(): Region | undefined {
  return REGIONS.find((r) => r.id === activeRegionId);
}

/** 获取所有可用区域（available=true） */
export function getAvailableRegions(): Region[] {
  return REGIONS.filter((r) => r.available);
}

/** 检查某区域是否有内容可浏览 */
export function hasTerrainData(region: Region): boolean {
  return region.terrainCount > 0 && region.available;
}
