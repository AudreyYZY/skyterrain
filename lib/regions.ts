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
    terrainCount: 175,
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

// ============================================================
// 次区域（大洲 → 次区域两级地理分区，按联合国 M49 地理方案）
// 大洲仍是顶层（RegionSelector / 相机 / 标签过滤）；次区域用于目录分组和国家排序，
// 也是「六大洲」之外更完整的地理依据。
// ============================================================

export interface Subregion {
  id: string;
  /** 所属大洲 id（= REGIONS[*].id） */
  continentId: string;
  name: string;
  nameEn: string;
}

/** M49 全部次区域（覆盖完整，无数据的也列出）。同一大洲内按大致地理顺序排列。 */
export const SUBREGIONS: Subregion[] = [
  // 亚洲
  { id: "eastern-asia", continentId: "asia", name: "东亚", nameEn: "Eastern Asia" },
  { id: "central-asia", continentId: "asia", name: "中亚", nameEn: "Central Asia" },
  { id: "western-asia", continentId: "asia", name: "西亚", nameEn: "Western Asia" },
  { id: "southern-asia", continentId: "asia", name: "南亚", nameEn: "Southern Asia" },
  { id: "south-eastern-asia", continentId: "asia", name: "东南亚", nameEn: "South-Eastern Asia" },
  // 欧洲
  { id: "northern-europe", continentId: "europe", name: "北欧", nameEn: "Northern Europe" },
  { id: "western-europe", continentId: "europe", name: "西欧", nameEn: "Western Europe" },
  { id: "southern-europe", continentId: "europe", name: "南欧", nameEn: "Southern Europe" },
  { id: "eastern-europe", continentId: "europe", name: "东欧", nameEn: "Eastern Europe" },
  // 非洲
  { id: "northern-africa", continentId: "africa", name: "北非", nameEn: "Northern Africa" },
  { id: "western-africa", continentId: "africa", name: "西非", nameEn: "Western Africa" },
  { id: "middle-africa", continentId: "africa", name: "中非", nameEn: "Middle Africa" },
  { id: "eastern-africa", continentId: "africa", name: "东非", nameEn: "Eastern Africa" },
  { id: "southern-africa", continentId: "africa", name: "南部非洲", nameEn: "Southern Africa" },
  // 北美洲
  { id: "northern-america", continentId: "north-america", name: "北美", nameEn: "Northern America" },
  { id: "central-america", continentId: "north-america", name: "中美洲", nameEn: "Central America" },
  { id: "caribbean", continentId: "north-america", name: "加勒比", nameEn: "Caribbean" },
  // 南美洲
  { id: "south-america", continentId: "south-america", name: "南美", nameEn: "South America" },
  // 大洋洲
  { id: "australia-and-new-zealand", continentId: "oceania", name: "澳大利亚和新西兰", nameEn: "Australia and New Zealand" },
  { id: "melanesia", continentId: "oceania", name: "美拉尼西亚", nameEn: "Melanesia" },
  { id: "micronesia", continentId: "oceania", name: "密克罗尼西亚", nameEn: "Micronesia" },
  { id: "polynesia", continentId: "oceania", name: "波利尼西亚", nameEn: "Polynesia" },
];

/**
 * 国家 slug → 次区域 id。新增国家时补一行（次区域的 continentId 必须与该国地形的 regionId 一致）。
 * 大洲归属由此派生（见 continentOfCountry）。
 */
export const COUNTRY_TO_SUBREGION: Record<string, string> = {
  china: "eastern-asia",
  japan: "eastern-asia",
  usa: "northern-america",
  canada: "northern-america",
  australia: "australia-and-new-zealand",
  "new-zealand": "australia-and-new-zealand",
  uk: "northern-europe",
  iceland: "northern-europe",
  norway: "northern-europe",
  france: "western-europe",
  switzerland: "western-europe",
  italy: "southern-europe",
};

export interface CountryMeta {
  slug: string;
  name: string;
  nameEn: string;
  /** 左侧窄 rail 上的两字母字形。取常用国家代码（ISO 3166-1 alpha-2，英国用惯称 UK）。 */
  code: string;
}

/**
 * 已有地形的国家及显示名。数组顺序 = 目录里同一大洲内国家的先后（大致按次区域 + 地理）。
 * 新增国家时在对应位置补一行，并在 COUNTRY_TO_SUBREGION 补映射。
 */
export const COUNTRIES: CountryMeta[] = [
  // 东亚
  { slug: "china", name: "中国", nameEn: "China", code: "CN" },
  { slug: "japan", name: "日本", nameEn: "Japan", code: "JP" },
  // 北美
  { slug: "canada", name: "加拿大", nameEn: "Canada", code: "CA" },
  { slug: "usa", name: "美国", nameEn: "United States", code: "US" },
  // 北欧
  { slug: "iceland", name: "冰岛", nameEn: "Iceland", code: "IS" },
  { slug: "norway", name: "挪威", nameEn: "Norway", code: "NO" },
  { slug: "uk", name: "英国", nameEn: "United Kingdom", code: "UK" },
  // 西欧
  { slug: "france", name: "法国", nameEn: "France", code: "FR" },
  { slug: "switzerland", name: "瑞士", nameEn: "Switzerland", code: "CH" },
  // 南欧
  { slug: "italy", name: "意大利", nameEn: "Italy", code: "IT" },
  // 澳大利亚和新西兰
  { slug: "australia", name: "澳大利亚", nameEn: "Australia", code: "AU" },
  { slug: "new-zealand", name: "新西兰", nameEn: "New Zealand", code: "NZ" },
];

const COUNTRY_BY_SLUG = new Map(COUNTRIES.map((c) => [c.slug, c]));
const COUNTRY_INDEX = new Map(COUNTRIES.map((c, i) => [c.slug, i]));

export function getCountryMeta(slug: string): CountryMeta | undefined {
  return COUNTRY_BY_SLUG.get(slug);
}

/** 某大洲下的国家 slug，按（次区域地理顺序 → COUNTRIES 顺序）排列 */
export function countriesForContinent(continentId: string): string[] {
  const subOrder = new Map(
    SUBREGIONS.filter((s) => s.continentId === continentId).map((s, i) => [s.id, i]),
  );
  return COUNTRIES.filter((c) => COUNTRY_TO_SUBREGION[c.slug] && subregionOfCountry(c.slug)?.continentId === continentId)
    .map((c) => c.slug)
    .sort((a, b) => {
      const sa = subOrder.get(COUNTRY_TO_SUBREGION[a]!) ?? 99;
      const sb = subOrder.get(COUNTRY_TO_SUBREGION[b]!) ?? 99;
      if (sa !== sb) return sa - sb;
      return (COUNTRY_INDEX.get(a) ?? 99) - (COUNTRY_INDEX.get(b) ?? 99);
    });
}

const SUBREGION_BY_ID = new Map(SUBREGIONS.map((s) => [s.id, s]));

export function getSubregion(id: string): Subregion | undefined {
  return SUBREGION_BY_ID.get(id);
}

/** 某国家所属次区域 */
export function subregionOfCountry(country: string): Subregion | undefined {
  const id = COUNTRY_TO_SUBREGION[country];
  return id ? SUBREGION_BY_ID.get(id) : undefined;
}

/** 某国家所属大洲 id（经次区域派生） */
export function continentOfCountrySlug(country: string): string | undefined {
  return subregionOfCountry(country)?.continentId;
}

/** 某大洲下的所有次区域，按 SUBREGIONS 顺序（= 地理顺序） */
export function subregionsForContinent(continentId: string): Subregion[] {
  return SUBREGIONS.filter((s) => s.continentId === continentId);
}

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
