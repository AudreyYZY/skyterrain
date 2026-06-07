/**
 * GeographicFeature 核心类型定义
 *
 * 设计原则:
 * - Feature 是地图上可感知的地理实体
 * - 每个 Feature 拥有 4 种 Geometry:
 *   - identityGeometry: 标签放置、走向、LOD
 *   - interactionGeometry: Hover、Focus、Selection
 *   - cameraGeometry: 飞行目标、最佳观赏角度
 *   - storyGeometry: 讲解节点、镜头运动路径
 * - 山脉的 identityGeometry 是 RidgeLine，interactionGeometry 是 RidgeCorridor
 * - 盆地/沙漠/湖泊的 identityGeometry 和 interactionGeometry 相同 (Polygon)
 */

/** 地貌类型 */
export type FeatureType =
  | "mountain_system"
  | "basin"
  | "desert"
  | "plateau"
  | "lake"
  | "peak"
  | "valley"
  | "poi";

/** 坐标点 [lon, lat] */
export type Position = [number, number];

/** 坐标点含高程 [lon, lat, height] */
export type Position3D = [number, number, number];

/** 线几何 (山脊线、河谷线) */
export interface LineGeometry {
  type: "LineString" | "MultiLineString";
  coordinates: Position[] | Position[][];
}

/** 面几何 (盆地、沙漠、湖泊) */
export interface PolygonGeometry {
  type: "Polygon" | "MultiPolygon";
  coordinates: Position[][] | Position[][][];
}

/** 点几何 (山峰、兴趣点) */
export interface PointGeometry {
  type: "Point";
  coordinates: Position;
}

/** 山脊走廊 (多段山体区域，不是 Buffer) */
export interface RidgeCorridorGeometry {
  type: "RidgeCorridor";
  /** 主脊线 */
  ridgeLine: Position[];
  /** 局部山体区域 (多个 Polygon，每个 Polygon 是 Position[][]) */
  segments: Position[][][];
}

/** 几何类型联合 */
export type Geometry =
  | LineGeometry
  | PolygonGeometry
  | PointGeometry
  | RidgeCorridorGeometry;

/** 镜头参数 */
export interface CameraViewpoint {
  /** 目标点 [lon, lat] */
  target: Position;
  /** 航向角 (度) */
  heading: number;
  /** 俯角 (度) */
  pitch: number;
  /** 距离目标的距离 (米) */
  range: number;
}

/** 讲解节点 */
export interface StoryNode {
  /** 节点 ID */
  id: string;
  /** 节点名称 */
  name: string;
  /** 节点位置 [lon, lat] */
  position: Position;
  /** 讲解文本 */
  text: string;
  /** 镜头参数 (可选，覆盖默认) */
  camera?: Partial<CameraViewpoint>;
}

/** 讲解路径类型 */
export type StoryPathType =
  | "nodes"     // 离散节点 (盆地、湖泊)
  | "path";     // 连续路径 (山脉、河谷)

/** 标签类型 */
export type LabelType =
  | "ridge"       // 沿山脊方向
  | "region"      // 区域居中
  | "lake"        // 湖心
  | "peak"        // 山峰点
  | "poi";        // 兴趣点

/** 标签定义 */
export interface IdentityDefinition {
  /** 标签文字 */
  labelText: string;
  /** 标签类型 (决定放置策略) */
  labelType: LabelType;
  /** 标签旋转角度 (度, 山脊方向) */
  rotation: number;
  /** 优先级 (越高越早显示) */
  priority: number;
  /** 最小缩放级别 (在此级别以下不显示) */
  minZoom: number;
  /** 最大缩放级别 (在此级别以上不显示) */
  maxZoom: number;
}

/** 可见性定义 */
export interface VisibilityDefinition {
  /** 层级 (2=新疆尺度, 3=区域尺度, 4=探索尺度) */
  hierarchyLevel: 2 | 3 | 4;
  /** 父级 Feature ID (用于层级关系) */
  parentId?: string;
}

/** 交互样式 */
export interface InteractionStyle {
  /** 边界线透明度 */
  outlineAlpha: number;
  /** 边界线宽度 (px) */
  outlineWidth: number;
  /** 边界线颜色 [r, g, b] */
  outlineColor: [number, number, number];
  /** 区域亮度调整 (-1 到 1) */
  brightnessAdjust: number;
  /** 标签透明度倍数 */
  labelOpacityMultiplier: number;
}

/** 交互定义 */
export interface InteractionDefinition {
  /** 是否可 Hover */
  hoverable: boolean;
  /** 是否可选中 */
  selectable: boolean;
  /** Idle 状态样式 */
  idleStyle: InteractionStyle;
  /** Hover 状态样式 */
  hoverStyle: InteractionStyle;
  /** Focus 状态样式 (停留 200ms) */
  focusStyle: InteractionStyle;
  /** Selected 状态样式 */
  selectedStyle: InteractionStyle;
}

/** 故事定义 (讲解内容) */
export interface StoryDefinition {
  /** 飞机窗外 */
  seeing: string;
  /** 地貌形成 */
  formation: string;
  /** 历史与人文 */
  history: string;
  /** 飞机上如何区分 */
  observation?: string;
}

/** 地理要素 (核心数据模型) */
export interface GeographicFeature {
  /** 唯一标识 */
  id: string;
  /** 名称 */
  name: string;
  /** 要素类型 */
  featureType: FeatureType;

  /** 标识几何 (标签放置、走向、LOD) */
  identityGeometry: Geometry;
  /** Hover 几何 (鼠标进入区域，可比真实边界大) */
  hoverGeometry: Geometry;
  /** Focus 几何 (高亮显示内容，如山脊线/湖岸线) */
  focusGeometry: Geometry;
  /** 镜头几何 (飞行目标、最佳观赏角度) */
  cameraGeometry: CameraViewpoint;
  /** 故事几何 (讲解节点、镜头运动路径) */
  storyGeometry: StoryNode[];

  /** 标签定义 */
  label: IdentityDefinition;
  /** 可见性定义 */
  visibility: VisibilityDefinition;
  /** 交互定义 */
  interaction: InteractionDefinition;
  /** 故事定义 (可选) */
  story?: StoryDefinition;
}
