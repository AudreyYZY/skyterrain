"use client";

/**
 * Region Selector — 区域选择器
 *
 * 浮层组件，显示在地图右上角（桌面端）或底部（移动端）。
 * 用户点击区域按钮后，Cesium 地球平滑飞向该区域中心。
 *
 * 设计原则:
 * - 数据驱动: 新增地区只需改 lib/regions.ts
 * - 渐进展示: 未填充内容的区域显示为"即将推出"
 * - 响应式: 桌面端水平排列，移动端底部横排
 */

import {
  REGIONS,
  type Region,
  hasTerrainData,
} from "@/lib/regions";
import { useCallback, useState } from "react";

interface RegionSelectorProps {
  /** 当前激活的区域 ID */
  activeRegion: string;
  /** 切换区域回调 */
  onRegionChange: (region: Region) => void;
  /** 是否隐藏（由父组件控制显隐） */
  hidden?: boolean;
}

export default function RegionSelector({
  activeRegion,
  onRegionChange,
  hidden = false,
}: RegionSelectorProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelect = useCallback(
    (region: Region) => {
      onRegionChange(region);
    },
    [onRegionChange],
  );

  if (hidden || REGIONS.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      {REGIONS.map((region, index) => {
        const isActive = activeRegion === region.id;
        const isHovered = hoveredIndex === index;
        const hasData = hasTerrainData(region);

        return (
          <button
            key={region.id}
            type="button"
            onClick={() => hasData && handleSelect(region)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            disabled={!hasData}
            aria-pressed={isActive}
            aria-label={`${region.name} ${!hasData ? "coming soon" : ""}`}
            className={[
              "relative flex items-center gap-1.5 rounded-full px-3 py-1.5",
              "text-[11px] font-medium transition-all duration-300 ease-out",
              "pointer-events-auto",
              // 状态样式
              isActive
                ? "bg-amber-500/15 text-amber-300/90 border border-amber-500/25"
                : isHovered && hasData
                  ? "bg-white/[0.06] text-white/60 border border-white/[0.08]"
                  : !hasData
                    ? "text-white/15 border border-transparent cursor-default"
                    : "text-white/30 border border-transparent hover:text-white/50",
              // 触控区域
              "min-h-[32px]",
              // 禁用状态
              !hasData ? "opacity-40" : "opacity-100",
            ].join(" ")}
          >
            {/* 区域名称 */}
            <span className="truncate">{region.name}</span>

            {/* 地貌计数 */}
            {hasData && region.terrainCount > 0 && (
              <span className="text-[9px] tabular-nums opacity-50">
                {region.terrainCount}
              </span>
            )}

            {/* 未填充内容的提示 */}
            {!hasData && (
              <span className="text-[9px] opacity-40">
                Soon
              </span>
            )}

            {/* 活跃指示器 — 脉冲动画 */}
            {isActive && (
              <span className="absolute -bottom-px left-1/2 h-px -translate-x-1/2 w-[60%] rounded-full bg-amber-400/50" />
            )}
          </button>
        );
      })}
    </div>
  );
}
