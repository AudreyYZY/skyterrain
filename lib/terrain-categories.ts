import type { TerrainCategory, TerrainPoint } from "@/types/terrain";

export const TERRAIN_CATEGORY_ORDER: TerrainCategory[] = [
  "mountain_range",
  "lake",
  "desert",
  "valley",
  "basin",
  "river",
  "scenic",
  "city",
  "oasis",
  "silk_road",
];

export const TERRAIN_CATEGORY_LABEL: Record<TerrainCategory, string> = {
  mountain_range: "山脉",
  lake: "湖泊",
  desert: "沙漠",
  valley: "河谷",
  basin: "盆地",
  river: "河流",
  scenic: "景观",
  city: "城市",
  oasis: "绿洲",
  silk_road: "丝路",
};

/* ── 地理世界观层级 ── */

export interface WorldviewSubgroup {
  id: string;
  label: string;
  filter: (terrain: TerrainPoint) => boolean;
}

export interface WorldviewNode {
  id: string;
  label: string;
  description: string;
  categories: TerrainCategory[];
  subgroups?: WorldviewSubgroup[];
}

export const TERRAIN_WORLDVIEW: WorldviewNode[] = [
  {
    id: "mountain_systems",
    label: "山脉系统",
    description: "天山、阿尔泰、昆仑、喀喇昆仑、帕米尔",
    categories: ["mountain_range"],
    subgroups: [
      { id: "tianshan_range", label: "天山山脉", filter: (t) => ["tianshan", "bogda"].includes(t.id) },
      { id: "altai_range", label: "阿尔泰山", filter: (t) => t.id === "altai" },
      { id: "kunlun_range", label: "昆仑山脉", filter: (t) => ["kunlun", "muztagh-ata"].includes(t.id) },
      { id: "karakoram_range", label: "喀喇昆仑", filter: (t) => t.id === "karakoram" },
      { id: "pamir_range", label: "帕米尔高原", filter: (t) => t.id === "pamir" },
    ],
  },
  {
    id: "basin_systems",
    label: "高原与盆地",
    description: "准噶尔、塔里木、吐鲁番",
    categories: ["basin"],
    subgroups: [
      { id: "junggar_sys", label: "准噶尔盆地", filter: (t) => t.id === "junggar-basin" },
      { id: "tarim_sys", label: "塔里木盆地", filter: (t) => t.id === "tarim-basin" },
      { id: "turpan_sys", label: "吐鲁番盆地", filter: (t) => t.id === "turpan-basin" },
    ],
  },
  {
    id: "desert_systems",
    label: "沙漠系统",
    description: "塔克拉玛干、古尔班通古特、库姆塔格",
    categories: ["desert"],
    subgroups: [
      { id: "taklamakan_sys", label: "塔克拉玛干", filter: (t) => t.id === "taklamakan" },
      { id: "gurbantunggut_sys", label: "古尔班通古特", filter: (t) => t.id === "gurbantunggut" },
      { id: "kumtag_sys", label: "库姆塔格", filter: (t) => t.id === "kumtag" },
    ],
  },
  {
    id: "river_oasis",
    label: "河流与绿洲",
    description: "叶尔羌河、塔里木河、额尔齐斯河、伊犁河谷",
    categories: ["river", "valley", "oasis"],
    subgroups: [
      { id: "yarkant_sys", label: "叶尔羌河流域", filter: (t) => ["yarkant-river", "bachu", "maigaiti"].includes(t.id) },
      { id: "tarim_river_sys", label: "塔里木河流域", filter: (t) => t.id === "tarim-river" },
      { id: "ili_sys", label: "伊犁河谷", filter: (t) => t.id === "ili-valley" },
      { id: "ertis_sys", label: "额尔齐斯河", filter: (t) => t.id === "ertis" },
    ],
  },
  {
    id: "lake_systems",
    label: "湖泊系统",
    description: "喀纳斯、赛里木、天池、博斯腾、罗布泊",
    categories: ["lake"],
    subgroups: [
      { id: "tianshan_lakes", label: "天山湖泊", filter: (t) => ["tianchi", "sayram", "bosten"].includes(t.id) },
      { id: "altai_lakes", label: "阿尔泰湖泊", filter: (t) => ["kanas", "aibi"].includes(t.id) },
      { id: "lop_nur_sys", label: "罗布泊", filter: (t) => t.id === "lop-nur" },
    ],
  },
  {
    id: "silk_road_human",
    label: "丝绸之路与人类活动",
    description: "喀什、和田、吐鲁番、库车、火焰山",
    categories: ["city", "scenic", "silk_road"],
    subgroups: [
      { id: "silk_road_cities", label: "丝路古城", filter: (t) => ["kashgar", "hotan", "turpan-city"].includes(t.id) },
      { id: "silk_road_sites", label: "丝路遗迹", filter: (t) => ["kuche", "flaming-mountains"].includes(t.id) },
      { id: "pastoral_culture", label: "游牧文化", filter: (t) => ["narat", "bayanbulak"].includes(t.id) },
    ],
  },
];

/* ── 对比地理架构（未来扩展） ── */

export interface GeographyComparison {
  id: string;
  label: string;
  terrainIds: string[];
  description: string;
  dimensions: string[];
}

export const GEOGRAPHY_COMPARISONS: GeographyComparison[] = [
  {
    id: "kunlun_vs_karakoram",
    label: "昆仑山 vs 喀喇昆仑",
    terrainIds: ["kunlun", "karakoram"],
    description: "两条平行的巨型山系，形成机制相似但冰川规模迥异",
    dimensions: ["海拔", "冰川规模", "板块构造", "气候影响"],
  },
  {
    id: "tianshan_vs_altai",
    label: "天山 vs 阿尔泰山",
    terrainIds: ["tianshan", "altai"],
    description: "新疆两大山系，分别塑造了南北疆不同的地理格局",
    dimensions: ["走向", "气候分界", "垂直带谱", "文明影响"],
  },
  {
    id: "taklamakan_vs_gurbantunggut",
    label: "塔克拉玛干 vs 古尔班通古特",
    terrainIds: ["taklamakan", "gurbantunggut"],
    description: "两大沙漠对比：流动 vs 半固定，极端 vs 相对湿润",
    dimensions: ["沙丘类型", "降水量", "植被覆盖", "生态价值"],
  },
  {
    id: "ili_vs_yarkant",
    label: "伊犁河谷 vs 叶尔羌河流域",
    terrainIds: ["ili-valley", "yarkant-river"],
    description: "天山北坡湿润走廊 vs 昆仑山北麓干旱绿洲",
    dimensions: ["水源", "降水量", "农业类型", "文明形态"],
  },
  {
    id: "sayram_vs_kanas",
    label: "赛里木湖 vs 喀纳斯湖",
    terrainIds: ["sayram", "kanas"],
    description: "两大高山湖泊：构造湖 vs 冰蚀湖",
    dimensions: ["成因", "海拔", "水文特征", "生态类型"],
  },
];

/** 获取与指定地貌相关的对比组 */
export function getComparisonsForTerrain(terrainId: string): GeographyComparison[] {
  return GEOGRAPHY_COMPARISONS.filter((c) => c.terrainIds.includes(terrainId));
}

/** 获取对比组中的所有地貌 */
export function getComparisonTerrains(comparisonId: string): string[] {
  const comp = GEOGRAPHY_COMPARISONS.find((c) => c.id === comparisonId);
  return comp?.terrainIds ?? [];
}
