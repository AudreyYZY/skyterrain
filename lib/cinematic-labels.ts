/**
 * 电影级标注层 — 与 Cesium 实体解耦
 *
 * 设计原则：
 * - 标注数据与 Cesium 实体分离
 * - 支持 hover、fade、zoom-level 过滤
 * - 支持电影级过渡动画
 * - 支持聚焦模式和引导飞行模式
 * - 不在 Cesium 回调中硬编码叙述
 */

export type LabelAnimation = "fade" | "slide" | "scale" | "none";
export type LabelVisibility = "always" | "zoom-adaptive" | "focus-only";

export interface CinematicLabel {
  /** 唯一标识 */
  id: string;
  /** 显示文本 */
  text: string;
  /** 地理位置 */
  position: { lat: number; lon: number };
  /** 标注类型 */
  type: "terrain" | "waypoint" | "annotation" | "highlight";
  /** 可见性控制 */
  visibility: LabelVisibility;
  /** 动画类型 */
  animation: LabelAnimation;
  /** 优先级（影响渲染顺序） */
  priority: number;
  /** 关联的地形 ID */
  terrainId?: string;
  /** 自定义样式 */
  style?: {
    fontSize?: number;
    color?: string;
    opacity?: number;
    offset?: { x: number; y: number };
  };
  /** 元数据 */
  metadata?: Record<string, unknown>;
}

export interface LabelLayer {
  /** 图层 ID */
  id: string;
  /** 图层名称 */
  name: string;
  /** 是否可见 */
  visible: boolean;
  /** 标注列表 */
  labels: CinematicLabel[];
  /** 渲染顺序 */
  zIndex: number;
}

/** 标注管理器 — 管理所有电影级标注 */
export class CinematicLabelManager {
  private layers: Map<string, LabelLayer> = new Map();
  private activeLabelId: string | null = null;
  private focusedTerrainId: string | null = null;

  /** 创建新图层 */
  createLayer(id: string, name: string, zIndex = 0): LabelLayer {
    const layer: LabelLayer = { id, name, visible: true, labels: [], zIndex };
    this.layers.set(id, layer);
    return layer;
  }

  /** 添加标注到图层 */
  addLabel(layerId: string, label: CinematicLabel): void {
    const layer = this.layers.get(layerId);
    if (!layer) return;
    // 避免重复
    layer.labels = layer.labels.filter((l) => l.id !== label.id);
    layer.labels.push(label);
    layer.labels.sort((a, b) => b.priority - a.priority);
  }

  /** 移除标注 */
  removeLabel(layerId: string, labelId: string): void {
    const layer = this.layers.get(layerId);
    if (!layer) return;
    layer.labels = layer.labels.filter((l) => l.id !== labelId);
  }

  /** 设置活跃标注（当前正在讲解的） */
  setActiveLabel(labelId: string | null): void {
    this.activeLabelId = labelId;
  }

  /** 设置聚焦地形 */
  setFocusedTerrain(terrainId: string | null): void {
    this.focusedTerrainId = terrainId;
  }

  /** 获取当前应该显示的标注 */
  getVisibleLabels(zoomLevel?: number): CinematicLabel[] {
    const result: CinematicLabel[] = [];

    for (const layer of this.layers.values()) {
      if (!layer.visible) continue;

      for (const label of layer.labels) {
        if (this.shouldShowLabel(label, zoomLevel)) {
          result.push(label);
        }
      }
    }

    return result.sort((a, b) => b.priority - a.priority);
  }

  /** 判断标注是否应该显示 */
  private shouldShowLabel(label: CinematicLabel, zoomLevel?: number): boolean {
    switch (label.visibility) {
      case "always":
        return true;
      case "zoom-adaptive":
        // 在高缩放级别显示更多标注
        if (zoomLevel !== undefined && zoomLevel < 8) {
          return label.priority >= 80; // 只显示高优先级
        }
        return true;
      case "focus-only":
        return label.terrainId === this.focusedTerrainId;
      default:
        return true;
    }
  }

  /** 获取所有图层 */
  getLayers(): LabelLayer[] {
    return Array.from(this.layers.values()).sort((a, b) => a.zIndex - b.zIndex);
  }

  /** 清除所有标注 */
  clear(): void {
    this.layers.clear();
    this.activeLabelId = null;
    this.focusedTerrainId = null;
  }

  /** 获取活跃标注 */
  getActiveLabel(): CinematicLabel | null {
    if (!this.activeLabelId) return null;
    for (const layer of this.layers.values()) {
      const found = layer.labels.find((l) => l.id === this.activeLabelId);
      if (found) return found;
    }
    return null;
  }
}

/** 全局标注管理器实例 */
export const labelManager = new CinematicLabelManager();

/** 创建地形标注 */
export function createTerrainLabel(
  terrainId: string,
  name: string,
  lat: number,
  lon: number,
  priority = 50
): CinematicLabel {
  return {
    id: `terrain-${terrainId}`,
    text: name,
    position: { lat, lon },
    type: "terrain",
    visibility: "zoom-adaptive",
    animation: "fade",
    priority,
    terrainId,
    style: {
      fontSize: 13,
      color: "rgba(255, 255, 255, 0.7)",
      opacity: 0.9,
    },
  };
}

/** 创建航点标注 */
export function createWaypointLabel(
  waypointId: string,
  name: string,
  lat: number,
  lon: number,
  index: number
): CinematicLabel {
  return {
    id: `waypoint-${waypointId}-${index}`,
    text: name,
    position: { lat, lon },
    type: "waypoint",
    visibility: "always",
    animation: "scale",
    priority: 90,
    style: {
      fontSize: 14,
      color: "rgba(251, 191, 36, 0.9)",
      opacity: 1,
    },
  };
}
