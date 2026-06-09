/**
 * ObservationPoint — 观察点
 *
 * 产品核心资产
 * 未来价值远高于地理边界
 * 用户真正点击和交互的对象
 */

export type ObservationCategory =
  | "viewpoint"    // 观景点
  | "peak"         // 山峰
  | "glacier"      // 冰川
  | "lake"         // 湖泊
  | "valley"       // 山谷
  | "forest"       // 森林
  | "geology"      // 地质特征
  | "oasis"        // 绿洲
  | "salt_lake"    // 盐湖
  | "karst"        // 喀斯特地貌
  | "canyon"       // 峡谷
  | "river_delta"; // 河口三角洲

export interface ObservationPoint {
  /** 唯一标识 */
  id: string;
  /** 关联的 Terrain ID */
  terrainId: string;
  /** 名称 */
  name: string;
  /** 经纬度 [lon, lat] */
  location: [number, number];
  /** 观察类型 */
  category: ObservationCategory;
  /** 标签 */
  tags: string[];
  /** 重要性 1-5 */
  importance: 1 | 2 | 3 | 4 | 5;
  /** 飞机视角描述 */
  fromAirplane: string;
}
