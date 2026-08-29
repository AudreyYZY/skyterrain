"use client";

/**
 * Region Selector — 大洲 / 次区域两级切换（下拉菜单）
 *
 * 顶栏右侧。点当前大洲名 → 展开：一级＝大洲，二级＝该大洲下有地形的次区域
 * （按联合国 M49 地理方案）。选大洲 → 飞向大洲中心；选次区域 → 飞向该次区域
 * 地形的地理重心。数据驱动：新增 / 开启大洲只需改 lib/regions.ts。
 */

import { REGIONS, SUBREGIONS, type Region, hasTerrainData } from "@/lib/regions";
import { subregionGeosForContinent, type SubregionGeo } from "@/lib/subregion-geo";
import type { Language } from "@/lib/i18n";
import { useCallback, useEffect, useId, useRef, useState } from "react";

interface RegionSelectorProps {
  activeRegion: string;
  onRegionChange: (region: Region) => void;
  /** 选中某次区域 —— 切到其大洲（若需要）并飞向其重心 */
  onSubregionChange?: (geo: SubregionGeo) => void;
  hidden?: boolean;
  language?: Language;
}

const SUB_NAME = new Map(SUBREGIONS.map((s) => [s.id, s]));

export default function RegionSelector({
  activeRegion,
  onRegionChange,
  onSubregionChange,
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
  const subNameOf = useCallback(
    (id: string) => {
      const s = SUB_NAME.get(id);
      return s ? (language === "en-US" ? s.nameEn : s.name) : id;
    },
    [language],
  );

  const handleSelect = useCallback(
    (region: Region) => {
      setOpen(false);
      if (region.id !== activeRegion) onRegionChange(region);
    },
    [activeRegion, onRegionChange],
  );

  const handleSub = useCallback(
    (geo: SubregionGeo) => {
      setOpen(false);
      onSubregionChange?.(geo);
    },
    [onSubregionChange],
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
            "absolute right-0 top-[calc(100%+6px)] z-50 min-w-[180px] overflow-hidden rounded-xl py-1",
            "border border-[color:var(--hairline)] bg-[color:var(--panel-solid)] backdrop-blur-xl shadow-xl",
          ].join(" ")}
        >
          {REGIONS.map((region) => {
            const isActive = activeRegion === region.id;
            const hasData = hasTerrainData(region);
            const subs = hasData ? subregionGeosForContinent(region.id) : [];
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

                {subs.length > 1 && (
                  <div className="pb-1">
                    {subs.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => handleSub(g)}
                        className={[
                          "flex w-full items-center justify-between gap-3 py-1.5 pl-6 pr-3 text-left text-[11px] transition-colors",
                          "text-[color:var(--ink-dim)] hover:bg-white/[0.05] hover:text-[color:var(--ink)]",
                        ].join(" ")}
                      >
                        <span className="truncate">{subNameOf(g.id)}</span>
                        <span className="text-[9px] tabular-nums opacity-50">{g.count}</span>
                      </button>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
