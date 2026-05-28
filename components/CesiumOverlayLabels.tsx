"use client";

import { labelManager, type CinematicLabel } from "@/lib/cinematic-labels";
import type { TerrainPoint } from "@/types/terrain";
import { useCallback, useEffect, useState } from "react";

interface ScreenLabel {
  label: CinematicLabel;
  x: number;
  y: number;
}

interface CesiumOverlayLabelsProps {
  /** 从 CesiumMap 暴露的投影函数 */
  projectToScreen: ((lat: number, lon: number) => { x: number; y: number } | null) | null;
  /** 点击标签时触发 */
  onSelectTerrain?: (terrain: TerrainPoint) => void;
  /** 所有地形数据（用于查找 TerrainPoint） */
  terrains?: TerrainPoint[];
  /** 当前是否在航线飞行中（飞行时隐藏标签避免干扰） */
  isRouteFlying?: boolean;
}

export default function CesiumOverlayLabels({
  projectToScreen,
  onSelectTerrain,
  terrains = [],
  isRouteFlying = false,
}: CesiumOverlayLabelsProps) {
  const [screenLabels, setScreenLabels] = useState<ScreenLabel[]>([]);

  const updatePositions = useCallback(() => {
    if (!projectToScreen) {
      setScreenLabels([]);
      return;
    }

    const labels = labelManager.getVisibleLabels();
    const result: ScreenLabel[] = [];

    for (const label of labels) {
      const pos = projectToScreen(label.position.lat, label.position.lon);
      if (pos) {
        result.push({ label, x: pos.x, y: pos.y });
      }
    }

    setScreenLabels(result);
  }, [projectToScreen]);

  // 当标签数据变化时更新
  useEffect(() => {
    const interval = setInterval(updatePositions, 500);
    return () => clearInterval(interval);
  }, [updatePositions]);

  // 航线飞行时隐藏标签
  if (isRouteFlying) return null;
  if (screenLabels.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-15 overflow-hidden">
      {screenLabels.map(({ label, x, y }) => {
        const terrain = terrains.find((t) => t.id === label.terrainId);

        return (
          <button
            key={label.id}
            type="button"
            className="pointer-events-auto absolute flex items-center gap-1.5 transition-opacity duration-500 hover:opacity-100"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              opacity: label.style?.opacity ?? 0.7,
            }}
            onClick={() => {
              if (terrain && onSelectTerrain) {
                onSelectTerrain(terrain);
              }
            }}
          >
            {/* 标注点 */}
            <span
              className="block h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: label.style?.color ?? "rgba(255,255,255,0.6)",
                boxShadow: "0 0 6px 1px rgba(245,158,11,0.2)",
              }}
            />
            {/* 标注文本 */}
            <span
              className="whitespace-nowrap text-[11px] font-medium tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
              style={{
                color: label.style?.color ?? "rgba(255,255,255,0.7)",
                fontSize: label.style?.fontSize ?? 11,
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
