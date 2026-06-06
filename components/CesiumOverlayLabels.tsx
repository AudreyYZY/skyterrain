"use client";

import { labelManager, type CinematicLabel } from "@/lib/cinematic-labels";
import type { CesiumMapHandle } from "@/components/CesiumMap";
import type { TerrainPoint } from "@/types/terrain";
import { useCallback, useEffect, useRef, useState } from "react";

interface ScreenLabel {
  label: CinematicLabel;
  x: number;
  y: number;
  visibility: number;
  fontSize: number;
  opacity: number;
}

interface CesiumOverlayLabelsProps {
  mapRef: React.RefObject<CesiumMapHandle | null>;
  onSelectTerrain?: (terrain: TerrainPoint) => void;
  terrains?: TerrainPoint[];
  isRouteFlying?: boolean;
  /** 当前 hover 的边界名称 — 对应标签高亮 */
  hoveredBoundary?: string | null;
}

/** 屏幕边缘安全距离（px） */
const EDGE_MARGIN = 80;
/** 碰撞检测网格单元格大小（px） */
const GRID_CELL_SIZE = 100;
/** 轮询间隔（ms） */
const POLL_INTERVAL_MS = 500;

/** LOD 级别样式配置 — Google Earth 风格 Terrain Label */
const LOD_STYLES = {
  // 全国尺度: 超大字距, 极细体, 覆盖整个地貌范围
  1: { fontSize: 18, opacity: 0.45, fontWeight: 200, letterSpacing: "1.2em" },
  // 区域尺度: 中等字距
  2: { fontSize: 14, opacity: 0.50, fontWeight: 300, letterSpacing: "0.3em" },
  // 地点尺度: 正常字距
  3: { fontSize: 11, opacity: 0.55, fontWeight: 400, letterSpacing: "0.08em" },
} as const;

/**
 * 计算边缘透明度
 */
function edgeFade(x: number, y: number, canvasW: number, canvasH: number): number {
  const fadeStart = EDGE_MARGIN * 2;
  const distLeft = x;
  const distRight = canvasW - x;
  const distTop = y;
  const distBottom = canvasH - y;
  const minDist = Math.min(distLeft, distRight, distTop, distBottom);
  if (minDist < 0) return 0;
  if (minDist > fadeStart) return 1;
  return minDist / fadeStart;
}

/**
 * 屏幕空间碰撞检测 — 网格占用法
 * 高优先级标签优先显示，低优先级标签被隐藏
 */
function resolveOverlaps(labels: ScreenLabel[]): ScreenLabel[] {
  const occupied = new Set<string>();
  const result: ScreenLabel[] = [];

  for (const sl of labels) {
    // 标签占据多个网格单元（根据字号估算）
    const cellSpan = Math.max(1, Math.ceil(sl.fontSize / GRID_CELL_SIZE));
    let blocked = false;

    // 检查标签占据的所有网格
    for (let dx = 0; dx < cellSpan; dx++) {
      for (let dy = 0; dy < cellSpan; dy++) {
        const gx = Math.round((sl.x + dx * GRID_CELL_SIZE * 0.5) / GRID_CELL_SIZE);
        const gy = Math.round((sl.y + dy * GRID_CELL_SIZE * 0.5) / GRID_CELL_SIZE);
        if (occupied.has(`${gx},${gy}`)) {
          blocked = true;
          break;
        }
      }
      if (blocked) break;
    }

    if (blocked) {
      result.push({ ...sl, visibility: 0 });
    } else {
      // 标记所有被占据的网格
      for (let dx = 0; dx < cellSpan; dx++) {
        for (let dy = 0; dy < cellSpan; dy++) {
          const gx = Math.round((sl.x + dx * GRID_CELL_SIZE * 0.5) / GRID_CELL_SIZE);
          const gy = Math.round((sl.y + dy * GRID_CELL_SIZE * 0.5) / GRID_CELL_SIZE);
          occupied.add(`${gx},${gy}`);
        }
      }
      result.push(sl);
    }
  }

  return result;
}

export default function CesiumOverlayLabels({
  mapRef,
  onSelectTerrain,
  terrains = [],
  isRouteFlying = false,
  hoveredBoundary,
}: CesiumOverlayLabelsProps) {
  const [screenLabels, setScreenLabels] = useState<ScreenLabel[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateLabels = useCallback(() => {
    const handle = mapRef.current;
    if (!handle) {
      setScreenLabels([]);
      return;
    }

    const cameraState = handle.getCameraState();
    if (!cameraState) {
      setScreenLabels([]);
      return;
    }

    const zoomLevel = cameraState.zoomLevel;
    const labels = labelManager.getVisibleLabels(zoomLevel);
    const result: ScreenLabel[] = [];

    const canvas = document.querySelector(".cesium-widget canvas") as HTMLCanvasElement | null;
    const canvasW = canvas?.width ?? window.innerWidth;
    const canvasH = canvas?.height ?? window.innerHeight;

    for (const label of labels) {
      const pos = handle.projectToScreen(label.position.lat, label.position.lon);
      if (!pos) continue;

      // 边缘检测
      if (pos.x < -EDGE_MARGIN || pos.y < -EDGE_MARGIN ||
          pos.x > canvasW + EDGE_MARGIN || pos.y > canvasH + EDGE_MARGIN) {
        continue;
      }

      // 边缘淡出
      const fade = edgeFade(pos.x, pos.y, canvasW, canvasH);
      if (fade < 0.05) continue;

      // LOD 样式
      const lodLevel = (label.lodLevel ?? 3) as 1 | 2 | 3;
      const lodStyle = LOD_STYLES[lodLevel];

      // 计算最终透明度: LOD 基础透明度 × 边缘淡出
      const finalOpacity = lodStyle.opacity * fade;

      result.push({
        label,
        x: pos.x,
        y: pos.y,
        visibility: finalOpacity,
        fontSize: lodStyle.fontSize,
        opacity: finalOpacity,
      });
    }

    // 碰撞检测: 按 LOD 级别排序 (1 > 2 > 3), 同级按优先级排序
    result.sort((a, b) => {
      const lodA = a.label.lodLevel ?? 3;
      const lodB = b.label.lodLevel ?? 3;
      if (lodA !== lodB) return lodA - lodB;
      return b.label.priority - a.label.priority;
    });

    const resolved = resolveOverlaps(result);
    setScreenLabels(resolved);
  }, [mapRef]);

  useEffect(() => {
    updateLabels();
    intervalRef.current = setInterval(updateLabels, POLL_INTERVAL_MS);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [updateLabels]);

  // 航线飞行时隐藏标签
  if (isRouteFlying) return null;
  if (screenLabels.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[15]" style={{ overflow: "hidden" }}>
      {screenLabels.map(({ label, x, y, visibility, fontSize }) => {
        if (visibility <= 0) return null;
        const terrain = terrains.find((t) => t.id === label.terrainId);
        const lodLevel = label.lodLevel ?? 3;
        const lodStyle = LOD_STYLES[lodLevel as keyof typeof LOD_STYLES];
        const rotation = label.rotation ?? 0;
        const isHovered = hoveredBoundary === label.text;

        return (
          <button
            key={label.id}
            type="button"
            className="pointer-events-auto absolute"
            style={{
              left: x,
              top: y,
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              opacity: isHovered ? Math.min(1, visibility * 1.8) : visibility,
              transition: "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), left 0.5s ease-out, top 0.5s ease-out",
              willChange: "opacity, left, top",
            }}
            onClick={() => {
              if (terrain && onSelectTerrain) {
                onSelectTerrain(terrain);
              }
            }}
          >
            <span
              className="whitespace-nowrap select-none"
              style={{
                color: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.9)",
                fontSize: `${isHovered ? fontSize * 1.1 : fontSize}px`,
                fontWeight: isHovered ? 500 : lodStyle.fontWeight,
                letterSpacing: lodStyle.letterSpacing,
                lineHeight: 1.2,
                textShadow: "0 1px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.3)",
                fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif",
              }}
            >
              {label.text}
            </span>
          </button>
        );
      })}
    </div>
  );
}
