"use client";

import { labelManager, type CinematicLabel } from "@/lib/cinematic-labels";
import { TERRAIN_THEME, getFontSize, LABEL_TEXT_STYLE, type Importance } from "@/lib/terrain-label-theme";
import type { CesiumMapHandle } from "@/components/CesiumMap";
import type { TerrainPoint } from "@/types/terrain";
import type { GeographicFeature } from "@/features/types";
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
  onSelectFeature?: (feature: GeographicFeature) => void;
  terrains?: TerrainPoint[];
  features?: GeographicFeature[];
  isRouteFlying?: boolean;
  /** 当前 hover 的边界名称 — 对应标签高亮 */
  hoveredBoundary?: string | null;
  /** 当前激活的区域 ID — 用于过滤标签 */
  activeRegion?: string;
}

/** 屏幕边缘安全距离（px） */
const EDGE_MARGIN = 80;
/** 碰撞检测网格单元格大小（px） */
const GRID_CELL_SIZE = 100;
/** 轮询间隔（ms） */
const POLL_INTERVAL_MS = 500;

/**
 * LOD 级别 → Importance 映射
 * zoomLevel 越小（看得越远），重要性阈值越高
 */
function zoomLevelToImportance(zoomLevel: number): Importance | null {
  if (zoomLevel <= 2) return null;        // 太空视角：不显示任何标签
  if (zoomLevel <= 4) return "continental";
  if (zoomLevel <= 6) return "national";
  if (zoomLevel <= 9) return "regional";
  return "poi";
}

/**
 * 根据 zoomLevel 动态计算字体大小
 * zoomLevel 越大（越近），字体越大
 */
function dynamicFontSize(importance: Importance, zoomLevel: number): number {
  const base = getFontSize(importance);
  // zoomLevel 4-20，线性缩放
  const scaleFactor = Math.max(0.5, Math.min(1.5, (zoomLevel - 3) / 17));
  return Math.round(base * scaleFactor);
}

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
  onSelectFeature,
  terrains = [],
  features = [],
  isRouteFlying = false,
  hoveredBoundary,
  activeRegion = "china",
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

    // 太远的视角：不渲染任何标签
    if (zoomLevel <= 2) {
      setScreenLabels([]);
      return;
    }

    // 根据 zoomLevel 计算当前可见的最高 Importance 级别
    const visibleImportance = zoomLevelToImportance(zoomLevel);
    if (!visibleImportance) {
      setScreenLabels([]);
      return;
    }

    // 获取当前区域匹配的标签
    const labels = labelManager.getVisibleLabelsForRegion(zoomLevel, activeRegion);
    const result: ScreenLabel[] = [];

    const canvas = document.querySelector(".cesium-widget canvas") as HTMLCanvasElement | null;
    const canvasW = canvas?.width ?? window.innerWidth;
    const canvasH = canvas?.height ?? window.innerHeight;

    for (const label of labels) {
      // 检查标签的重要性是否在当前 zoomLevel 的可见范围内
      const labelImportance = label.lodLevel ? lodToImportance(label.lodLevel) : "poi";
      if (!importanceVisibleAtZoom(labelImportance, zoomLevel)) {
        continue;
      }

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

      // 动态字号：随 zoomLevel 缩放
      const lodLevel = (label.lodLevel ?? 4) as 1 | 2 | 3 | 4;
      const lodImportance = lodToImportance(lodLevel);
      const baseFontSize = getFontSize(lodImportance);
      const dynamicSize = dynamicFontSize(lodImportance, zoomLevel);

      // LOD 1-2 标签始终完全可见，不被边缘淡出影响
      // LOD 3-4 标签受边缘淡出影响
      const edgeFadeFactor = lodLevel <= 2 ? 1.0 : fade;
      const finalOpacity = edgeFadeFactor;

      result.push({
        label,
        x: pos.x,
        y: pos.y,
        visibility: finalOpacity,
        fontSize: dynamicSize,
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
  }, [mapRef, activeRegion]);

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
        const feature = features.find((f) => f.id === label.terrainId);
        const lodLevel = label.lodLevel ?? 3;
        const lodImportance = lodToImportance(lodLevel);
        const lodStyle = {
          fontWeight: TERRAIN_THEME[lodImportance].fontWeight,
          letterSpacing: TERRAIN_THEME[lodImportance].letterSpacing,
        };
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
              } else if (feature && onSelectFeature) {
                onSelectFeature(feature);
              }
            }}
          >
            <span
              className="whitespace-nowrap select-none"
              style={{
                color: "#ffffff",
                fontSize: `${isHovered ? Math.round(fontSize * 1.1) : fontSize}px`,
                fontWeight: lodStyle.fontWeight,
                letterSpacing: lodStyle.letterSpacing,
                lineHeight: 1.2,
                WebkitTextStroke: "0.5px rgba(0,0,0,0.6)",
                textShadow: "0 0 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.8)",
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

/** LOD 级别 → Importance 映射 */
function lodToImportance(lod: number): Importance {
  if (lod <= 1) return "continental";
  if (lod <= 2) return "national";
  if (lod <= 3) return "regional";
  return "poi";
}

/**
 * 判断某个 importance 是否在指定 zoomLevel 下可见
 * zoomLevel 越小（看得越远），只有更高重要性的标签可见
 */
function importanceVisibleAtZoom(importance: Importance, zoomLevel: number): boolean {
  // continental: zoomLevel >= 4
  if (importance === "continental") return zoomLevel >= 4;
  // national: zoomLevel >= 6
  if (importance === "national") return zoomLevel >= 6;
  // regional: zoomLevel >= 9
  if (importance === "regional") return zoomLevel >= 9;
  // poi: zoomLevel >= 12
  return zoomLevel >= 12;
}
