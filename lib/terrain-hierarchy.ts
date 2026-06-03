import type { TerrainCategory, TerrainPoint } from "@/types/terrain";
import type { TerrainCategoryGroup } from "@/lib/terrain";

export interface RegionNode {
  id: string;
  name: string;
  /** 默认是否展开 */
  defaultExpanded: boolean;
}

export interface HierarchyNode {
  region: RegionNode;
  categoryGroups: TerrainCategoryGroup[];
  totalCount: number;
}

/**
 * 将地形按 区域 → 分类 构建层级树
 * 当前所有数据都是新疆，但架构支持多区域扩展
 */
export function buildTerrainHierarchy(
  terrains: TerrainPoint[],
  categoryGroups: TerrainCategoryGroup[]
): HierarchyNode[] {
  // 按 region 字段分组（当前所有地形 region = "xinjiang"）
  const regionMap = new Map<string, TerrainPoint[]>();

  for (const t of terrains) {
    const region = t.region ?? "xinjiang";
    if (!regionMap.has(region)) regionMap.set(region, []);
    regionMap.get(region)!.push(t);
  }

  const regionDefs: Record<string, RegionNode> = {
    xinjiang: { id: "xinjiang", name: "新疆", defaultExpanded: true },
    tibet: { id: "tibet", name: "西藏", defaultExpanded: false },
    inner_mongolia: { id: "inner_mongolia", name: "内蒙古", defaultExpanded: false },
    yunnan: { id: "yunnan", name: "云南", defaultExpanded: false },
    sichuan: { id: "sichuan", name: "四川", defaultExpanded: false },
    gansu: { id: "gansu", name: "甘肃", defaultExpanded: false },
  };

  const result: HierarchyNode[] = [];

  for (const [regionId, regionTerrains] of regionMap) {
    const regionDef = regionDefs[regionId] ?? {
      id: regionId,
      name: regionId,
      defaultExpanded: false,
    };

    // 为该区域过滤分类组
    const regionCategoryGroups: TerrainCategoryGroup[] = categoryGroups
      .map((group) => ({
        ...group,
        terrains: group.terrains.filter((t) => {
          const r = t.region ?? "xinjiang";
          return r === regionId;
        }),
      }))
      .filter((group) => group.terrains.length > 0);

    if (regionCategoryGroups.length > 0) {
      result.push({
        region: regionDef,
        categoryGroups: regionCategoryGroups,
        totalCount: regionTerrains.length,
      });
    }
  }

  // 按照默认展开状态排序，新疆排第一
  result.sort((a, b) => {
    if (a.region.defaultExpanded && !b.region.defaultExpanded) return -1;
    if (!a.region.defaultExpanded && b.region.defaultExpanded) return 1;
    return 0;
  });

  return result;
}
