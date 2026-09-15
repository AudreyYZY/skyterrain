"use client";
/** 顶栏：当前大洲 + 地形数 · 学习/旅游切换 · 大洲下拉 · 中英切换（2026-09-14 从 ExplorerApp 搬出，外观不变） */
import ModeToggle from "@/components/ModeToggle";
import RegionSelector from "@/components/RegionSelector";
import type { AppMode } from "@/lib/app-mode";
import type { Language } from "@/lib/i18n";
import type { Region } from "@/lib/regions";

type SubregionGeo = Parameters<NonNullable<React.ComponentProps<typeof RegionSelector>["onSubregionChange"]>>[0];

export default function ExplorerHeader(props: {
  showIntro: boolean;
  regionName: string;
  terrainCount: number;
  mode: AppMode;
  onModeChange: (m: AppMode) => void;
  activeRegion: string;
  onRegionChange: (r: Region) => void;
  onSubregionChange: (geo: SubregionGeo) => void;
  language: Language;
  onToggleLanguage: () => void;
}) {
  const { showIntro, regionName, terrainCount, mode, onModeChange, activeRegion, onRegionChange, onSubregionChange, language, onToggleLanguage } = props;
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-4 py-2.5">
      <div className={`flex items-baseline gap-2.5 transition-opacity duration-300 ${showIntro ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`}>
        <span className="editorial-title text-[15px] text-[color:var(--ink)]">
          {regionName}
        </span>
        <span className="text-[10px] tabular-nums text-[color:var(--ink-faint)]">
          {terrainCount}
        </span>
      </div>
      <div className={`flex items-center gap-3 transition-opacity duration-300 ${showIntro ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`}>
        <ModeToggle mode={mode} onChange={onModeChange} language={language} />
        <RegionSelector
          activeRegion={activeRegion}
          onRegionChange={onRegionChange}
          onSubregionChange={onSubregionChange}
          language={language}
        />
        <button
          type="button"
          onClick={onToggleLanguage}
          data-testid="language-toggle"
          className="rounded-full border border-[color:var(--hairline)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink)]"
        >
          {language === "zh-CN" ? "EN" : "中"}
        </button>
      </div>
    </header>
  );
}
