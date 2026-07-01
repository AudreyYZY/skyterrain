/**
 * Terrain Label Registry
 *
 * 定义所有地貌标签的元数据。
 * 不包含视觉参数（字号/颜色），由 TerrainTheme 决定。
 * 新增地貌只需在此文件添加条目。
 */

import type { Importance } from "./terrain-label-theme";

export type LandformCategory = "mountain" | "plateau" | "basin" | "desert" | "lake" | "peak" | "river" | "plain";

export interface TerrainLabel {
  id: string;
  name: string;
  importance: Importance;
  category: LandformCategory;
  lat: number;
  lon: number;
  /** 山脉走向旋转角度 (度)，其他类型为 0 */
  rotation: number;
  /** 所属区域 — 用于区域切换时过滤标签 */
  regionId: string;
}

/**
 * 新疆 + 全国核心地貌标签
 *
 * 数据来源:
 *   Xinjiang: data/*.json lat/lon
 *   China: cameraGeometry.target lat/lon
 *
 * importance 决定:
 *   - 何时可见 (zoom level)
 *   - 字号大小
 *   - 字间距
 */
export const TERRAIN_LABELS: TerrainLabel[] = [
  // ==================== Continental ====================
  { id: "qinghai-tibet", name: "青藏高原", importance: "continental", category: "plateau", lat: 33.0, lon: 90.0, rotation: 0, regionId: "china" },
  { id: "himalaya", name: "喜马拉雅山", importance: "continental", category: "mountain", lat: 29.0, lon: 86.0, rotation: 5, regionId: "china" },

  // ==================== National ====================
  { id: "tianshan", name: "天山", importance: "national", category: "mountain", lat: 43.88, lon: 88.13, rotation: -8, regionId: "china" },
  { id: "kunlun", name: "昆仑山", importance: "national", category: "mountain", lat: 35.88, lon: 81.65, rotation: -5, regionId: "china" },
  { id: "altai", name: "阿尔泰山", importance: "national", category: "mountain", lat: 49.12, lon: 88.45, rotation: -35, regionId: "china" },
  { id: "qinling", name: "秦岭", importance: "national", category: "mountain", lat: 33.5, lon: 108.0, rotation: -5, regionId: "china" },
  { id: "qilian", name: "祁连山", importance: "national", category: "mountain", lat: 38.0, lon: 100.0, rotation: -15, regionId: "china" },
  { id: "taihang", name: "太行山", importance: "national", category: "mountain", lat: 37.0, lon: 113.5, rotation: -78, regionId: "china" },
  { id: "daxinganling", name: "大兴安岭", importance: "national", category: "mountain", lat: 48.0, lon: 122.0, rotation: -68, regionId: "china" },
  { id: "hengduan", name: "横断山脉", importance: "national", category: "mountain", lat: 30.0, lon: 100.0, rotation: -82, regionId: "china" },
  { id: "loess", name: "黄土高原", importance: "national", category: "plateau", lat: 36.0, lon: 109.0, rotation: 0, regionId: "china" },
  { id: "inner-mongolia", name: "内蒙古高原", importance: "national", category: "plateau", lat: 42.0, lon: 112.0, rotation: 0, regionId: "china" },
  { id: "yunnan-guizhou", name: "云贵高原", importance: "national", category: "plateau", lat: 25.0, lon: 105.0, rotation: 0, regionId: "china" },
  { id: "sichuan", name: "四川盆地", importance: "national", category: "basin", lat: 30.5, lon: 106.0, rotation: 0, regionId: "china" },
  { id: "northeast", name: "东北平原", importance: "national", category: "plain", lat: 46.0, lon: 125.0, rotation: 0, regionId: "china" },
  { id: "north-china", name: "华北平原", importance: "national", category: "plain", lat: 37.0, lon: 116.0, rotation: 0, regionId: "china" },
  { id: "yangtze", name: "长江中下游平原", importance: "national", category: "plain", lat: 29.5, lon: 115.0, rotation: 0, regionId: "china" },

  // ==================== Regional ====================
  { id: "junggar-basin", name: "准噶尔盆地", importance: "regional", category: "basin", lat: 45.5, lon: 87.0, rotation: 0, regionId: "china" },
  { id: "tarim-basin", name: "塔里木盆地", importance: "regional", category: "basin", lat: 39.5, lon: 83.5, rotation: 0, regionId: "china" },
  { id: "taklamakan", name: "塔克拉玛干", importance: "regional", category: "desert", lat: 38.5, lon: 83.0, rotation: 0, regionId: "china" },
  { id: "pamir", name: "帕米尔高原", importance: "regional", category: "plateau", lat: 38.5, lon: 75.0, rotation: 0, regionId: "china" },
  { id: "turpan-basin", name: "吐鲁番盆地", importance: "regional", category: "basin", lat: 42.95, lon: 89.18, rotation: 0, regionId: "china" },
  { id: "qaidam", name: "柴达木盆地", importance: "regional", category: "basin", lat: 37.0, lon: 94.0, rotation: 0, regionId: "china" },
  { id: "sayram", name: "赛里木湖", importance: "regional", category: "lake", lat: 44.607, lon: 81.145, rotation: 0, regionId: "china" },

  // ==================== POI ====================
  { id: "bosten", name: "博斯腾湖", importance: "poi", category: "lake", lat: 41.96, lon: 87.0, rotation: 0, regionId: "china" },
  { id: "kanas", name: "喀纳斯湖", importance: "poi", category: "lake", lat: 48.71, lon: 87.04, rotation: 0, regionId: "china" },
  { id: "tianchi", name: "天池", importance: "poi", category: "lake", lat: 43.885, lon: 88.127, rotation: 0, regionId: "china" },
  { id: "bogda", name: "博格达峰", importance: "poi", category: "peak", lat: 43.8, lon: 88.3, rotation: 0, regionId: "china" },
  { id: "muztagh-ata", name: "慕士塔格峰", importance: "poi", category: "peak", lat: 38.28, lon: 75.06, rotation: 0, regionId: "china" },
  { id: "flaming-mountains", name: "火焰山", importance: "poi", category: "mountain", lat: 43.0, lon: 89.5, rotation: 0, regionId: "china" },
];
