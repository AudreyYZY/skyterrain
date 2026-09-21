"use client";

/**
 * Region Selector — 大洲 / 次区域两级切换（下拉菜单）
 *
 * 顶栏右侧。点当前大洲名 → 展开：一级＝大洲，二级＝该大洲下有地形的次区域
 * （按联合国 M49 地理方案）。选大洲 → 飞向大洲中心；选次区域 → 飞向该次区域
 * 地形的地理重心。数据驱动：新增 / 开启大洲只需改 lib/regions.ts。
 */

import type { AppMode } from "@/lib/app-mode";
import { continentAvailabilities } from "@/lib/continent-availability";
import { REGIONS, SUBREGIONS, type Region } from "@/lib/regions";
import { subregionGeosForContinent, type SubregionGeo } from "@/lib/subregion-geo";
import type { Language } from "@/lib/i18n";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

interface RegionSelectorProps {
  mode: AppMode;
  activeRegion: string;
  onRegionChange: (region: Region) => void;
  /** 选中某次区域 —— 切到其大洲（若需要）并飞向其重心 */
  onSubregionChange?: (geo: SubregionGeo) => void;
  hidden?: boolean;
  language?: Language;
}

const SUB_NAME = new Map(SUBREGIONS.map((s) => [s.id, s]));

export default function RegionSelector({
  mode,
  activeRegion,
  onRegionChange,
  onSubregionChange,
  hidden = false,
  language = "zh-CN",
}: RegionSelectorProps) {
  const [open, setOpen] = useState(false);
  const [browseRegionId, setBrowseRegionId] = useState(activeRegion);
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

  const options = useMemo(() => continentAvailabilities(mode), [mode]);
  const currentOption = options.find((o) => o.region.id === activeRegion);
  const browseOption = options.find((o) => o.region.id === browseRegionId)
    ?? options.find((o) => o.available)
    ?? options[0];
  const browseSubs = browseOption?.available
    ? subregionGeosForContinent(browseOption.region.id, mode)
    : [];

  const toggleOpen = useCallback(() => {
    setOpen((wasOpen) => {
      if (!wasOpen) {
        const active = options.find((o) => o.region.id === activeRegion && o.available);
        setBrowseRegionId((active ?? options.find((o) => o.available) ?? options[0])?.region.id ?? activeRegion);
      }
      return !wasOpen;
    });
  }, [activeRegion, options]);

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
        onClick={toggleOpen}
        data-testid="region-toggle"
        aria-haspopup="dialog"
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
        {currentOption && currentOption.count > 0 && (
          <span className="text-[9px] tabular-nums opacity-50">{currentOption.count}</span>
        )}
        <span aria-hidden className="text-[9px] opacity-60">{open ? "▴" : "▾"}</span>
      </button>

      {open && (
        <div
          id={listId}
          role="dialog"
          aria-label={language === "en-US" ? "Choose region" : "选择区域"}
          className={[
            "fixed left-2 right-2 top-12 z-50 flex w-auto overflow-hidden rounded-xl",
            "sm:absolute sm:left-auto sm:right-0 sm:top-[calc(100%+6px)] sm:w-[min(92vw,440px)]",
            "max-h-[min(70vh,520px)]",
            "border border-[color:var(--hairline)] bg-[color:var(--panel-solid)] backdrop-blur-xl shadow-xl",
          ].join(" ")}
        >
          <div className="w-[46%] min-w-0 overflow-y-auto border-r border-[color:var(--hairline)] py-1">
            {options.map(({ region, count, available }) => {
              const isActive = activeRegion === region.id;
              const isBrowsing = browseOption?.region.id === region.id;
              return (
                <button
                  key={region.id}
                  type="button"
                  data-testid={`region-${region.id}`}
                  disabled={!available}
                  onClick={() => available && setBrowseRegionId(region.id)}
                  onFocus={() => available && setBrowseRegionId(region.id)}
                  onMouseEnter={() => available && setBrowseRegionId(region.id)}
                  className={[
                    "flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-[12px] transition-colors",
                    isBrowsing ? "bg-white/[0.06] text-[color:var(--ink)]" : "",
                    isActive ? "text-[color:var(--accent)]" : "",
                    available
                      ? "hover:bg-white/[0.05]"
                      : "cursor-default text-[color:var(--ink-faint)]",
                  ].join(" ")}
                >
                  <span className="truncate">{nameOf(region)}</span>
                  {available ? (
                    <span className="text-[9px] tabular-nums opacity-50">{count}</span>
                  ) : (
                    <span className="text-[9px] opacity-50">Soon</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="min-w-0 flex-1 overflow-y-auto py-1" data-testid="region-subregions">
            {browseOption && (
              <>
                <p className="px-3 pb-1 pt-2 text-[9px] uppercase tracking-[0.14em] text-[color:var(--ink-faint)]">
                  {nameOf(browseOption.region)}
                </p>
                <button
                  type="button"
                  data-testid={`region-all-${browseOption.region.id}`}
                  onClick={() => handleSelect(browseOption.region)}
                  className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-[12px] text-[color:var(--ink-body)] transition-colors hover:bg-white/[0.05] hover:text-[color:var(--ink)]"
                >
                  <span>{language === "en-US" ? "View whole continent" : "查看整个大洲"}</span>
                  <span aria-hidden className="opacity-50">→</span>
                </button>
                {browseSubs.length > 0 && (
                  <div className="border-t border-[color:var(--hairline)] pt-1">
                    {browseSubs.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        data-testid={`subregion-${g.id}`}
                        onClick={() => handleSub(g)}
                        className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-[11px] text-[color:var(--ink-dim)] transition-colors hover:bg-white/[0.05] hover:text-[color:var(--ink)]"
                      >
                        <span className="truncate">{subNameOf(g.id)}</span>
                        <span className="text-[9px] tabular-nums opacity-50">{g.count}</span>
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
