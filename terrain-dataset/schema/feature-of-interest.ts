/**
 * FeatureOfInterest (FOI) — 产品核心实体
 *
 * 用户真正探索的对象
 * 观察对象不一定是点，可以是线或区域
 *
 * 例如:
 *   点: 珠峰峰顶
 *   线: 秦岭南北分界线
 *   区域: 三江并流、塔克拉玛干腹地
 */

export type FOICategory =
  | "viewpoint"
  | "peak"
  | "glacier"
  | "lake"
  | "valley"
  | "forest"
  | "geology"
  | "oasis"
  | "salt_lake"
  | "karst"
  | "canyon"
  | "river_delta"
  | "boundary_line"
  | "transition_zone";

export type FOIRank = "iconic" | "major" | "secondary";

export interface FeatureOfInterest {
  id: string;
  parentTerrainIds: string[];
  name: string;
  location: [number, number];  // [lon, lat]
  category: FOICategory;
  tags: string[];
  rank: FOIRank;
  fromAirplane: string;  // 飞机上看到什么
}
