/**
 * GeographicFeature 核心类型定义
 *
 * 设计原则:
 * - Feature 是地图上可感知的地理实体
 * - identityGeometry 用于标签放置、走向计算、镜头构图
 * - interactionGeometry 用于 Hover、Outline、Glow、Selection
 * - 山脉的 identityGeometry 是 Line，interactionGeometry 是 Polygon
 * - 盆地/沙漠/湖泊的两者相同 (Polygon)
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

/** 几何类型联合 */
export type Geometry = LineGeometry | PolygonGeometry | PointGeometry;

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

  /** 标识几何 (标签放置、走向、镜头构图) */
  identityGeometry: Geometry;
  /** 交互几何 (Hover、Outline、Glow、Selection) */
  interactionGeometry: PolygonGeometry | MultiPolygonGeometry;

  /** 标签定义 */
  label: IdentityDefinition;
  /** 可见性定义 */
  visibility: VisibilityDefinition;
  /** 交互定义 */
  interaction: InteractionDefinition;
  /** 故事定义 (可选) */
  story?: StoryDefinition;
}

/** MultiPolygon 几何 */
export interface MultiPolygonGeometry {
  type: "MultiPolygon";
  coordinates: Position[][][];
}
