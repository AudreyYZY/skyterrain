/**
 * CameraAnchor — 镜头锚点
 *
 * 不存储具体参数 (heading/pitch/range)
 * 只描述构图策略
 * 具体参数由 Camera System 自动计算
 */

export type FramingStrategy =
  | "mountain-ridge"     // 山脉: 沿山脊方向观察
  | "basin-overview"    // 盆地: 俯视全貌
  | "plateau-overview"  // 高原: 俯视广阔
  | "lake-overview"     // 湖泊: 俯视湖面
  | "desert-overview"   // 沙漠: 俯视沙海
  | "peak-focus"        // 山峰: 聚焦山峰
  | "valley-cross"      // 河谷: 横切视角
  | "plain-overview";   // 平原: 俯视平坦

export interface CameraAnchor {
  /** 关联的 ObservationPoint ID */
  observationPointId: string;
  /** 构图策略 */
  framing: FramingStrategy;
  /** 优先级 (用于选择最佳观察点) */
  priority: number;
  /** 是否手动覆盖 (紧急修复用) */
  manualOverride?: boolean;
}
