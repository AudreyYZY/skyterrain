"use client";

import { labelManager, type CinematicLabel } from "@/lib/cinematic-labels";
import { TERRAIN_THEME, getFontSize, LABEL_FONT_FAMILY, type Importance } from "@/lib/terrain-label-theme";
import type { CesiumMapHandle } from "@/components/CesiumMap";
import { useCallback, useEffect, useRef, useState } from "react";

interface ScreenLabel {
  label: CinematicLabel;
  x: number;
  y: number;
  visibility: number;
  fontSize: number;
  opacity: number;
  /** hover / 选中 —— 不被碰撞剔除 */
  forced?: boolean;
}

/** 航线飞行时在地图上标注的航点（地形 / 海·海峡 / 机场），跨大洲也显示 */
export interface RouteLabelPoint {
  id: string;
  name: string;
  nameEn: string;
  lat: number;
  lon: number;
  kind: "airport" | "terrain" | "city" | "feature";
}

interface RouteScreenLabel {
  id: string;
  text: string;
  x: number;
  y: number;
  kind: RouteLabelPoint["kind"];
  current: boolean;
}

interface CesiumOverlayLabelsProps {
  mapRef: React.RefObject<CesiumMapHandle | null>;
  /** 点击标签 → 按 terrain id 选择 */
  onSelect?: (id: string) => void;
  isRouteFlying?: boolean;
  /** 航线飞行时沿途要标注的航点（不受当前大洲过滤）*/
  routeWaypoints?: RouteLabelPoint[];
  /** 当前正在飞越的航点名（中文或英文，用于高亮对应标签）*/
  flyoverName?: string | null;
  /** 当前鼠标 hover 的地形 id — 对应标签高亮 */
  hoveredTerrainId?: string | null;
  /** 当前选中/聚焦的地形 id — 对应标签常驻高亮 */
  focusedTerrainId?: string | null;
  /** 当前激活的区域 ID — 用于过滤标签 */
  activeRegion?: string;
  /** 界面语言 — 决定标签显示中文还是英文 */
  language?: "zh-CN" | "en-US";
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
  if (zoomLevel <= 3) return null;        // 太空 / 看整个地球：不显示任何标签
  if (zoomLevel <= 5) return "national";
  if (zoomLevel <= 8) return "regional";
  return "poi";
}

/**
 * 根据 zoomLevel 动态计算字体大小
 * zoomLevel 越大（越近），字体越大
 */
function dynamicFontSize(importance: Importance, zoomLevel: number): number {
  const base = getFontSize(importance);
  // 常见观看区间约 zoom 6–13，此区间内字号平滑放大；两端夹紧保证可读且不过大
  const scaleFactor = Math.max(0.8, Math.min(1.35, (zoomLevel - 4) / 9));
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
    // hover / 选中的标签永远显示，并抢占网格
    if (sl.forced) {
      const span = Math.max(1, Math.ceil(sl.fontSize / GRID_CELL_SIZE));
      for (let dx = 0; dx < span; dx++) {
        for (let dy = 0; dy < span; dy++) {
          const gx = Math.round((sl.x + dx * GRID_CELL_SIZE * 0.5) / GRID_CELL_SIZE);
          const gy = Math.round((sl.y + dy * GRID_CELL_SIZE * 0.5) / GRID_CELL_SIZE);
          occupied.add(`${gx},${gy}`);
        }
      }
      result.push(sl);
      continue;
    }

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
  onSelect,
  isRouteFlying = false,
  routeWaypoints,
  flyoverName,
  hoveredTerrainId,
  focusedTerrainId,
  activeRegion = "asia",
  language = "zh-CN",
}: CesiumOverlayLabelsProps) {
  const [screenLabels, setScreenLabels] = useState<ScreenLabel[]>([]);
  const [routeScreenLabels, setRouteScreenLabels] = useState<RouteScreenLabel[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateRouteLabels = useCallback(() => {
    const handle = mapRef.current;
    if (!handle || !isRouteFlying || !routeWaypoints || routeWaypoints.length === 0) {
      setRouteScreenLabels([]);
      return;
    }
    const canvas = document.querySelector(".cesium-widget canvas") as HTMLCanvasElement | null;
    const canvasW = canvas?.width ?? window.innerWidth;
    const canvasH = canvas?.height ?? window.innerHeight;
    const fly = (flyoverName ?? "").trim();
    const out: RouteScreenLabel[] = [];
    for (const wp of routeWaypoints) {
      const text = language === "en-US" ? wp.nameEn : wp.name;
      const pos = handle.projectToScreen(wp.lat, wp.lon);
      if (!pos) continue; // 地球背面的点被剔除
      if (
        pos.x < -EDGE_MARGIN ||
        pos.y < -EDGE_MARGIN ||
        pos.x > canvasW + EDGE_MARGIN ||
        pos.y > canvasH + EDGE_MARGIN
      )
        continue;
      const current = fly.length > 0 && (fly === text || fly.includes(wp.name) || fly.includes(wp.nameEn));
      out.push({ id: wp.id, text, x: pos.x, y: pos.y, kind: wp.kind, current });
    }
    setRouteScreenLabels(out);
  }, [mapRef, isRouteFlying, routeWaypoints, flyoverName, language]);

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

    // 太远的视角（太空 / 看整个地球）：不渲染任何标签
    if (zoomLevel <= 3) {
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
      // hover / 选中的地形 —— 标签强制显示，绕过 zoom 分级与碰撞剔除
      const forced =
        !!label.terrainId &&
        (label.terrainId === hoveredTerrainId || label.terrainId === focusedTerrainId);

      // 检查标签的重要性是否在当前 zoomLevel 的可见范围内
      const labelImportance = label.lodLevel ? lodToImportance(label.lodLevel) : "poi";
      if (!forced && !importanceVisibleAtZoom(labelImportance, zoomLevel)) {
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
      if (!forced && fade < 0.05) continue;

      // 动态字号：随 zoomLevel 缩放
      const lodLevel = (label.lodLevel ?? 4) as 1 | 2 | 3 | 4;
      const lodImportance = lodToImportance(lodLevel);
      const dynamicSize = dynamicFontSize(lodImportance, zoomLevel);

      // LOD 1-2 标签始终完全可见，不被边缘淡出影响
      // LOD 3-4 标签受边缘淡出影响
      const edgeFadeFactor = lodLevel <= 2 ? 1.0 : fade;
      const finalOpacity = edgeFadeFactor;

      result.push({
        label,
        x: pos.x,
        y: pos.y,
        visibility: forced ? 1 : finalOpacity,
        fontSize: dynamicSize,
        opacity: forced ? 1 : finalOpacity,
        forced,
      });
    }

    // 碰撞检测: forced 优先，其次按 LOD 级别 (1 > 2 > 3)，同级按优先级
    result.sort((a, b) => {
      if (!!a.forced !== !!b.forced) return a.forced ? -1 : 1;
      const lodA = a.label.lodLevel ?? 3;
      const lodB = b.label.lodLevel ?? 3;
      if (lodA !== lodB) return lodA - lodB;
      return b.label.priority - a.label.priority;
    });

    const resolved = resolveOverlaps(result);
    setScreenLabels(resolved);
  }, [mapRef, activeRegion, hoveredTerrainId, focusedTerrainId]);

  useEffect(() => {
    const tick = () => {
      updateLabels();
      updateRouteLabels();
    };
    tick();
    // 航线飞行时相机在动，用更短的轮询让标签跟得上
    intervalRef.current = setInterval(tick, isRouteFlying ? 120 : POLL_INTERVAL_MS);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [updateLabels, updateRouteLabels, isRouteFlying]);

  // 航线飞行时：只显示沿途航点标注（跨大洲也显示），不显示常规地形标签
  if (isRouteFlying) {
    if (routeScreenLabels.length === 0) return null;
    return (
      <div className="pointer-events-none absolute inset-0 z-[15]" style={{ overflow: "hidden" }}>
        {routeScreenLabels.map(({ id, text, x, y, kind, current }) => (
          <div
            key={id}
            className="absolute whitespace-nowrap select-none"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              transition: "left 0.4s ease-out, top 0.4s ease-out, opacity 0.3s ease-out",
              willChange: "left, top",
              fontFamily: LABEL_FONT_FAMILY,
              fontSize: current ? "15px" : "12px",
              fontWeight: current ? 600 : 400,
              lineHeight: 1.2,
              padding: current ? "3px 9px" : "1px 6px",
              borderRadius: "7px",
              color: kind === "feature" ? "rgba(226,232,240,0.92)" : "#ffffff",
              fontStyle: kind === "feature" ? "italic" : "normal",
              background: current ? "rgba(251, 191, 36, 0.18)" : "rgba(7,10,15,0.32)",
              boxShadow: current ? "0 0 0 1px rgba(251,191,36,0.5)" : "none",
              WebkitTextStroke: "0.5px rgba(0,0,0,0.6)",
              textShadow:
                "0 0 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.8)",
              opacity: current ? 1 : 0.85,
              zIndex: current ? 2 : 1,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    );
  }
  if (screenLabels.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[15]" style={{ overflow: "hidden" }}>
      {screenLabels.map(({ label, x, y, visibility, fontSize }) => {
        if (visibility <= 0) return null;
        const lodLevel = label.lodLevel ?? 3;
        const lodImportance = lodToImportance(lodLevel);
        const lodStyle = {
          fontWeight: TERRAIN_THEME[lodImportance].fontWeight,
          letterSpacing: TERRAIN_THEME[lodImportance].letterSpacing,
        };
        // 英文名较长，旋转后很难读 —— 英文标签一律水平
        const rotation = language === "en-US" ? 0 : (label.rotation ?? 0);
        const isHovered = !!label.terrainId && label.terrainId === hoveredTerrainId;
        const isFocused = !!label.terrainId && label.terrainId === focusedTerrainId;
        const isActive = isHovered || isFocused;

        return (
          <button
            key={label.id}
            type="button"
            className="pointer-events-auto absolute"
            style={{
              left: x,
              top: y,
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              opacity: isActive ? 1 : visibility,
              transition: "opacity 0.25s ease-out, left 0.5s ease-out, top 0.5s ease-out",
              willChange: "opacity, left, top",
              zIndex: isFocused ? 3 : isHovered ? 2 : 1,
            }}
            onClick={() => {
              if (label.terrainId && onSelect) onSelect(label.terrainId);
            }}
          >
            <span
              className="whitespace-nowrap select-none"
              style={{
                display: "inline-block",
                color: "#ffffff",
                fontSize: `${Math.round(fontSize * (isFocused ? 1.15 : isHovered ? 1.08 : 1))}px`,
                fontWeight: isActive ? Math.max(lodStyle.fontWeight, 500) : lodStyle.fontWeight,
                letterSpacing: lodStyle.letterSpacing,
                lineHeight: 1.2,
                padding: isActive ? "2px 8px" : "0",
                borderRadius: "6px",
                background: isFocused
                  ? "rgba(251, 191, 36, 0.16)"
                  : isHovered
                    ? "rgba(255, 255, 255, 0.10)"
                    : "transparent",
                boxShadow: isFocused ? "0 0 0 1px rgba(251,191,36,0.35)" : "none",
                WebkitTextStroke: "0.5px rgba(0,0,0,0.6)",
                textShadow: isActive
                  ? "0 0 4px rgba(0,0,0,0.95), 0 0 12px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.9)"
                  : "0 0 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.8)",
                fontFamily: LABEL_FONT_FAMILY,
                transition: "background 0.2s ease-out, font-size 0.2s ease-out, padding 0.2s ease-out",
              }}
            >
              {language === "en-US" ? label.textEn ?? label.text : label.text}
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
  if (importance === "continental") return zoomLevel >= 4;
  if (importance === "national") return zoomLevel >= 4;
  if (importance === "regional") return zoomLevel >= 6;
  return zoomLevel >= 9; // poi

}
