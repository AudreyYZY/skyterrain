"use client";

import { labelManager, type CinematicLabel } from "@/lib/cinematic-labels";
import type { CameraState } from "@/components/CesiumMap";
import type { TerrainPoint } from "@/types/terrain";
import { useCallback, useEffect, useRef, useState } from "react";

interface ScreenLabel {
  label: CinematicLabel;
  x: number;
  y: number;
  /** 0-1, 1=完全可见, 0=隐藏 */
  visibility: number;
}

interface CesiumOverlayLabelsProps {
  projectToScreen: ((lat: number, lon: number) => { x: number; y: number } | null) | null;
  cameraState: CameraState | null;
  onSelectTerrain?: (terrain: TerrainPoint) => void;
  terrains?: TerrainPoint[];
  isRouteFlying?: boolean;
}

/** 屏幕边缘安全距离（px） */
const EDGE_MARGIN = 40;
/** 标注最小间距（px）— 防重叠 */
const MIN_LABEL_GAP = 60;
/** 标注文本预估宽度（px） */
const LABEL_WIDTH_ESTIMATE = 80;
/** 标注文本预估高度（px） */
const LABEL_HEIGHT_ESTIMATE = 24;

/**
 * 将相机高度映射到缩放级别 (1-20)
 * 已在 CesiumMap 中实现，这里作为 fallback
 */
function altitudeToZoom(altitude: number): number {
  return Math.max(1, Math.min(20, Math.round(20 - Math.log2(altitude / 50))));
}

/**
 * 计算边缘透明度 — 越靠近边缘越透明
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
 * 简单的网格碰撞检测 — 防止标签重叠
 * 按优先级排序后，逐个放入网格，跳过重叠的低优先级标签
 */
function resolveOverlaps(labels: ScreenLabel[]): ScreenLabel[] {
  const grid = new Set<string>();
  const result: ScreenLabel[] = [];

  // 已按优先级降序排列
  for (const sl of labels) {
    // 将坐标量化到网格
    const gx = Math.round(sl.x / MIN_LABEL_GAP);
    const gy = Math.round(sl.y / MIN_LABEL_GAP);
    const key = `${gx},${gy}`;

    if (grid.has(key)) {
      // 该网格已被更高优先级标签占用 → 隐藏
      result.push({ ...sl, visibility: 0 });
    } else {
      grid.add(key);
      result.push(sl);
    }
  }

  return result;
}

export default function CesiumOverlayLabels({
  projectToScreen,
  cameraState,
  onSelectTerrain,
  terrains = [],
  isRouteFlying = false,
}: CesiumOverlayLabelsProps) {
  const [screenLabels, setScreenLabels] = useState<ScreenLabel[]>([]);
  const canvasSizeRef = useRef({ w: 0, h: 0 });

  const updateLabels = useCallback(() => {
    if (!projectToScreen) {
      setScreenLabels([]);
      return;
    }

    const zoomLevel = cameraState?.zoomLevel ?? 10;
    const labels = labelManager.getVisibleLabels(zoomLevel);
    const result: ScreenLabel[] = [];

    // 获取画布尺寸（用于边缘检测）
    const canvas = document.querySelector(".cesium-widget canvas") as HTMLCanvasElement | null;
    const canvasW = canvas?.width ?? window.innerWidth;
    const canvasH = canvas?.height ?? window.innerHeight;
    canvasSizeRef.current = { w: canvasW, h: canvasH };

    for (const label of labels) {
      const pos = projectToScreen(label.position.lat, label.position.lon);
      if (!pos) continue;

      // 边缘检测 — 超出安全区域直接跳过
      if (pos.x < -EDGE_MARGIN || pos.y < -EDGE_MARGIN ||
          pos.x > canvasW + EDGE_MARGIN || pos.y > canvasH + EDGE_MARGIN) {
        continue;
      }

      // 计算边缘淡出透明度
      const fade = edgeFade(pos.x, pos.y, canvasW, canvasH);
      if (fade < 0.05) continue; // 几乎不可见则跳过

      result.push({
        label,
        x: pos.x,
        y: pos.y,
        visibility: fade * (label.style?.opacity ?? 0.9),
      });
    }

    // 按优先级排序后碰撞检测
    result.sort((a, b) => b.label.priority - a.label.priority);
    const resolved = resolveOverlaps(result);

    setScreenLabels(resolved);
  }, [projectToScreen, cameraState]);

  // 相机变化时更新标签
  useEffect(() => {
    updateLabels();
  }, [updateLabels]);

  // 航线飞行时隐藏标签
  if (isRouteFlying) return null;
  if (screenLabels.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[15] overflow-hidden">
      {screenLabels.map(({ label, x, y, visibility }) => {
        if (visibility <= 0) return null;
        const terrain = terrains.find((t) => t.id === label.terrainId);

        return (
          <button
            key={label.id}
            type="button"
            className="pointer-events-auto absolute flex items-center gap-1.5"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              opacity: visibility,
              transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "opacity, left, top",
            }}
            onClick={() => {
              if (terrain && onSelectTerrain) {
                onSelectTerrain(terrain);
              }
            }}
          >
            {/* 标注点 */}
            <span
              className="block h-1.5 w-1.5 rounded-full shrink-0"
              style={{
                backgroundColor: label.style?.color ?? "rgba(255,255,255,0.6)",
                boxShadow: "0 0 6px 1px rgba(245,158,11,0.15)",
              }}
            />
            {/* 标注文本 */}
            <span
              className="whitespace-nowrap font-medium tracking-wide"
              style={{
                color: label.style?.color ?? "rgba(255,255,255,0.7)",
                fontSize: label.style?.fontSize ?? 11,
                textShadow: "0 1px 3px rgba(0,0,0,0.6), 0 0 8px rgba(0,0,0,0.3)",
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
