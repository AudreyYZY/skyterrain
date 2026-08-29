"use client";

/**
 * Region Selector — 大洲切换（下拉菜单）
 *
 * 顶栏右侧。点当前大洲名 → 展开大洲列表；选中后 Cesium 平滑飞向该大洲中心。
 * 数据驱动：新增 / 开启大洲只需改 lib/regions.ts。
 * 未填充内容的大洲显示为禁用（"Soon"）。
 */

import { REGIONS, type Region, hasTerrainData } from "@/lib/regions";
import type { Language } from "@/lib/i18n";
import { useCallback, useEffect, useId, useRef, useState } from "react";

interface RegionSelectorProps {
  activeRegion: string;
  onRegionChange: (region: Region) => void;
  hidden?: boolean;
  language?: Language;
}

export default function RegionSelector({
  activeRegion,
  onRegionChange,
  hidden = false,
  language = "zh-CN",
}: RegionSelectorProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const listId = useId();

  const nameOf = useCallback(
    (r: Region) => (language === "en-US" ? r.nameEn ?? r.name : r.name),
    [language],
  );

  const handleSelect = useCallback(
    (region: Region) => {
      setOpen(false);
      if (region.id !== activeRegion) onRegionChange(region);
    },
    [activeRegion, onRegionChange],
  );

  // 点击外部 / Esc 关闭
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (hidden || REGIONS.length === 0) return null;

  const current = REGIONS.find((r) => r.id === activeRegion);
  const currentName = current ? nameOf(current) : language === "en-US" ? "Asia" : "亚洲";

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        className={[
          "pointer-events-auto flex items-center gap-1.5 rounded-full px-3 py-1.5",
          "min-h-[32px] text-[11px] font-medium transition-colors duration-200",
          "border border-[color:var(--hairline)] bg-[color:var(--panel)] backdrop-blur-xl",
          "text-[color:var(--ink-body)] hover:text-[color:var(--ink)]",
        ].join(" ")}
      >
        <span className="truncate">{currentName}</span>
        {current && current.terrainCount > 0 && (
          <span className="text-[9px] tabular-nums opacity-50">{current.terrainCount}</span>
        )}
        <span aria-hidden className="text-[9px] opacity-60">{open ? "▴" : "▾"}</span>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className={[
            "absolute right-0 top-[calc(100%+6px)] z-50 min-w-[150px] overflow-hidden rounded-xl py-1",
            "border border-[color:var(--hairline)] bg-[color:var(--panel-solid)] backdrop-blur-xl shadow-xl",
          ].join(" ")}
        >
          {REGIONS.map((region) => {
            const isActive = activeRegion === region.id;
            const hasData = hasTerrainData(region);
            return (
              <li key={region.id} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  disabled={!hasData}
                  onClick={() => hasData && handleSelect(region)}
                  className={[
                    "flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-[12px] transition-colors",
                    isActive
                      ? "text-[color:var(--accent)]"
                      : hasData
                        ? "text-[color:var(--ink-body)] hover:bg-white/[0.05] hover:text-[color:var(--ink)]"
                        : "cursor-default text-[color:var(--ink-faint)]",
                  ].join(" ")}
                >
                  <span className="truncate">{nameOf(region)}</span>
                  {hasData ? (
                    region.terrainCount > 0 && (
                      <span className="text-[9px] tabular-nums opacity-50">
                        {region.terrainCount}
                      </span>
                    )
                  ) : (
                    <span className="text-[9px] opacity-50">Soon</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
