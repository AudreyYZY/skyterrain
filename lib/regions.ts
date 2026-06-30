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
 * 区域配置
 *
 * 新增地区步骤：
 * 1. 在此数组添加配置对象
 * 2. 创建 data/<region>/ 存放地形 JSON
 * 3. 创建 features/<region>-features.ts 定义 GeographicFeature
 * 4. ExplorerApp 自动注册（通过 getAllTerrains + CHINA_CORE_FEATURES 模式）
 */
export const REGIONS: Region[] = [
  {
    id: "china",
    name: "中国",
    nameEn: "China",
    center: {
      lon: 104.0,
      lat: 35.0,
      height: 15000000,     // 从太空看中国的起始高度
      settleHeight: 8000000, // 着陆到详细浏览的高度
    },
    terrainCount: 32,
    available: true,
  },
  {
    id: "australia",
    name: "Australia",
    nameEn: "Australia",
    center: {
      lon: 135.0,
      lat: -25.0,
      height: 18000000,
      settleHeight: 10000000,
    },
    terrainCount: 0,
    available: false,
  },
];

/** 当前激活的区域 ID */
export let activeRegionId = "china";

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
