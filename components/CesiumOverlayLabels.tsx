"use client";

import { labelManager, type CinematicLabel } from "@/lib/cinematic-labels";
import type { CesiumMapHandle, CameraState } from "@/components/CesiumMap";
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
  mapRef: React.RefObject<CesiumMapHandle | null>;
  onSelectTerrain?: (terrain: TerrainPoint) => void;
  terrains?: TerrainPoint[];
  isRouteFlying?: boolean;
}

/** 屏幕边缘安全距离（px） */
const EDGE_MARGIN = 60;
/** 标注最小间距（px） — 防重叠 */
const MIN_LABEL_GAP = 80;
/** 轮询间隔（ms） */
const POLL_INTERVAL_MS = 500;

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
 */
function resolveOverlaps(labels: ScreenLabel[]): ScreenLabel[] {
  const grid = new Set<string>();
  const result: ScreenLabel[] = [];

  for (const sl of labels) {
    const gx = Math.round(sl.x / MIN_LABEL_GAP);
    const gy = Math.round(sl.y / MIN_LABEL_GAP);
    const key = `${gx},${gy}`;

    if (grid.has(key)) {
      result.push({ ...sl, visibility: 0 });
    } else {
      grid.add(key);
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

    // 获取画布尺寸
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

      result.push({
        label,
        x: pos.x,
        y: pos.y,
        visibility: fade * (label.style?.opacity ?? 0.9),
      });
    }

    // 碰撞检测
    result.sort((a, b) => b.label.priority - a.label.priority);
    const resolved = resolveOverlaps(result);

    setScreenLabels(resolved);
  }, [mapRef]);

  // 500ms 轮询 — 不触发 React 重渲染风暴
  useEffect(() => {
    // 首次立即更新
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
      {screenLabels.map(({ label, x, y, visibility }) => {
        if (visibility <= 0) return null;
        const terrain = terrains.find((t) => t.id === label.terrainId);
        const isMajor = label.major;

        // 字号随缩放级别缩放 — 远景时 major 更大
        const baseFontSize = label.style?.fontSize ?? 14;
        const fontSize = isMajor ? Math.max(20, baseFontSize) : baseFontSize;

        return (
          <button
            key={label.id}
            type="button"
            className="pointer-events-auto absolute"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              opacity: visibility,
              transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "opacity, left, top",
            }}
            onClick={() => {
              if (terrain && onSelectTerrain) {
                onSelectTerrain(terrain);
              }
            }}
          >
            {/* 纪录片风格纯文本标注 */}
            <span
              className="whitespace-nowrap"
              style={{
                color: isMajor ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.75)",
                fontSize: `${fontSize}px`,
                fontWeight: isMajor ? 600 : 500,
                letterSpacing: isMajor ? "0.08em" : "0.04em",
                lineHeight: 1.2,
                textShadow: isMajor
                  ? "0 2px 6px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.4)"
                  : "0 1px 4px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.5)",
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
