"use client";

import SourceAttribution from "@/components/SourceAttribution";
import StructuredLesson from "@/components/StructuredLesson";
import { t, type Language } from "@/lib/i18n";
import type { TerrainKnowledge, TerrainLesson } from "@/types/terrain";
import { useEffect, useState } from "react";

interface ReadingPanelProps {
  language: Language;
  terrain: { name: string; elevation: number } | null;
  lesson: TerrainLesson | null;
  knowledge?: TerrainKnowledge | null;
  isSpeaking: boolean;
  isRouteFlying?: boolean;
  activeSentenceIndex?: number | null;
  activeSection?: string | null;
  onPlay: () => void;
  onStop: () => void;
  onClose: () => void;
}

/**
 * 右侧单一阅读面板，取代原来的 欢迎卡 / 摘要卡 / 详情抽屉三套。
 * 两态：卡片态（名称 + 海拔 + 一句摘要 + 播放/展开）、文章态（6 段全文 + 逐句高亮）。
 * 讲解开始时自动展开。
 */
export default function ReadingPanel({
  language,
  terrain,
  lesson,
  knowledge,
  isSpeaking,
  isRouteFlying,
  activeSentenceIndex,
  activeSection,
  onPlay,
  onStop,
  onClose,
}: ReadingPanelProps) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (isSpeaking) setExpanded(true);
  }, [isSpeaking]);

  useEffect(() => {
    // reset to card state on terrain change
    setExpanded(false);
  }, [terrain?.name]);

  // route flying, nothing selected yet
  if (!terrain && isRouteFlying) {
    return (
      <aside className="absolute right-3 top-14 z-30 w-[290px] panel-slide-in">
        <div className="glass-panel rounded-2xl px-5 py-4">
          <p className="editorial-kicker mb-1">{t("journey.routes", language)}</p>
          <p className="reading-body text-[0.95rem] text-[color:var(--ink-dim)]">
            {t("panel.flyover_hint", language)}
          </p>
        </div>
      </aside>
    );
  }

  if (!terrain) return null;

  const elev = terrain.elevation.toLocaleString(
    language === "zh-CN" ? "zh-CN" : "en-US",
  );
  const elevLabel = `${t("card.elevation", language)} ${elev}${t("card.meters", language)}`;
  const summary = lesson?.seeing?.trim() ?? "";

  // ---- Article state ----
  if (expanded) {
    return (
      <aside className="absolute right-0 top-0 bottom-0 z-30 w-full max-w-[420px] panel-slide-in">
        <div className="flex h-full flex-col border-l border-[color:var(--hairline)] bg-[color:var(--panel-solid)] backdrop-blur-xl">
          {/* sticky header */}
          <div className="flex items-start justify-between gap-3 border-b border-[color:var(--hairline)] px-6 py-4">
            <div className="min-w-0">
              {isSpeaking && (
                <span className="editorial-kicker mb-1 flex items-center gap-1.5 text-[color:var(--accent)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--accent)]" />
                  {t("panel.narrating", language)}
                </span>
              )}
              <h2 className="editorial-title truncate text-[22px] leading-tight">
                {terrain.name}
              </h2>
              <p className="mt-0.5 text-[11px] text-[color:var(--ink-faint)]">
                {elevLabel}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={isSpeaking ? onStop : onPlay}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--accent-line)] text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent-soft)]"
                aria-label={isSpeaking ? t("panel.pause", language) : t("panel.play", language)}
              >
                <span className="text-[11px]">{isSpeaking ? "■" : "▶"}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink)]"
                aria-label={t("panel.close", language)}
              >
                <span className="text-[13px]">✕</span>
              </button>
            </div>
          </div>

          {/* article */}
          <div className="reading-scroll flex-1 overflow-y-auto px-6 py-5">
            {lesson && (
              <StructuredLesson
                lesson={lesson}
                hideEmptySections
                activeSentenceIndex={activeSentenceIndex}
                activeSection={activeSection}
              />
            )}
            {knowledge && (
              <div className="mt-6 border-t border-[color:var(--hairline)] pt-4">
                <SourceAttribution knowledge={knowledge} />
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="border-t border-[color:var(--hairline)] py-2.5 text-[11px] text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink-body)]"
          >
            {t("panel.collapse", language)}
          </button>
        </div>
      </aside>
    );
  }

  // ---- Card state ----
  return (
    <aside className="absolute right-3 top-12 z-30 max-h-[calc(100vh-6rem)] w-[320px] overflow-y-auto panel-slide-in reading-scroll">
      <div className="glass-panel rounded-2xl px-5 py-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h2 className="editorial-title text-[24px] leading-tight">{terrain.name}</h2>
            <p className="mt-1 text-[11px] text-[color:var(--ink-faint)]">{elevLabel}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[color:var(--ink-faint)] transition-colors hover:text-[color:var(--ink)]"
            aria-label={t("panel.close", language)}
          >
            <span className="text-[12px]">✕</span>
          </button>
        </div>

        {summary && (
          <p className="reading-body mt-3 line-clamp-3 text-[0.95rem]">{summary}</p>
        )}

        <div className="mt-5 flex items-center gap-2">
          <button
            type="button"
            onClick={isSpeaking ? onStop : onPlay}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--accent-line)] px-4 py-2 text-[0.8125rem] font-medium text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent-soft)]"
          >
            <span className="text-[10px]">{isSpeaking ? "■" : "▶"}</span>
            {isSpeaking ? t("panel.pause", language) : t("panel.play", language)}
          </button>
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="rounded-full px-4 py-2 text-[0.8125rem] text-[color:var(--ink-dim)] transition-colors hover:bg-white/[0.05] hover:text-[color:var(--ink-body)]"
          >
            {t("panel.expand", language)}
          </button>
        </div>
      </div>
    </aside>
  );
}
