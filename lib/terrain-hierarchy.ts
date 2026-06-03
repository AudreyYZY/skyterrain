import type { TerrainCategory, TerrainPoint } from "@/types/terrain";
import type { TerrainCategoryGroup } from "@/lib/terrain";

export interface ProvinceNode {
  id: string;
  name: string;
  /** 默认是否展开 */
  defaultExpanded: boolean;
}

export interface HierarchyNode {
  province: ProvinceNode;
  categoryGroups: TerrainCategoryGroup[];
  totalCount: number;
}

/**
 * 省级行政区定义 — 支持未来扩展到全国
 */
const PROVINCE_DEFS: Record<string, ProvinceNode> = {
  xinjiang: { id: "xinjiang", name: "新疆", defaultExpanded: true },
  tibet: { id: "tibet", name: "西藏", defaultExpanded: false },
  qinghai: { id: "qinghai", name: "青海", defaultExpanded: false },
  sichuan: { id: "sichuan", name: "四川", defaultExpanded: false },
  yunnan: { id: "yunnan", name: "云南", defaultExpanded: false },
  gansu: { id: "gansu", name: "甘肃", defaultExpanded: false },
  inner_mongolia: { id: "inner_mongolia", name: "内蒙古", defaultExpanded: false },
  guangxi: { id: "guangxi", name: "广西", defaultExpanded: false },
  ningxia: { id: "ningxia", name: "宁夏", defaultExpanded: false },
};

/**
 * 将地形按 省份 → 分类 构建层级树
 * 当前所有数据都是新疆，但架构支持多省份扩展
 */
export function buildTerrainHierarchy(
  terrains: TerrainPoint[],
  categoryGroups: TerrainCategoryGroup[]
): HierarchyNode[] {
  // 按 province 字段分组
  const provinceMap = new Map<string, TerrainPoint[]>();

  for (const t of terrains) {
    const province = t.region ?? "xinjiang";
    if (!provinceMap.has(province)) provinceMap.set(province, []);
    provinceMap.get(province)!.push(t);
  }

  const result: HierarchyNode[] = [];

  for (const [provinceId, provinceTerrains] of provinceMap) {
    const provinceDef = PROVINCE_DEFS[provinceId] ?? {
      id: provinceId,
      name: provinceId,
      defaultExpanded: false,
    };

    // 为该省份过滤分类组
    const provinceCategoryGroups: TerrainCategoryGroup[] = categoryGroups
      .map((group) => ({
        ...group,
        terrains: group.terrains.filter((t) => {
          const r = t.region ?? "xinjiang";
          return r === provinceId;
        }),
      }))
      .filter((group) => group.terrains.length > 0);

    if (provinceCategoryGroups.length > 0) {
      result.push({
        province: provinceDef,
        categoryGroups: provinceCategoryGroups,
        totalCount: provinceTerrains.length,
      });
    }
  }

  // 按照默认展开状态排序，当前展开的排第一
  result.sort((a, b) => {
    if (a.province.defaultExpanded && !b.province.defaultExpanded) return -1;
    if (!a.province.defaultExpanded && b.province.defaultExpanded) return 1;
    return 0;
  });

  return result;
}
