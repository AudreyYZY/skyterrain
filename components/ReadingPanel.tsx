"use client";

import SourceAttribution from "@/components/SourceAttribution";
import StructuredLesson, { type GenericSection } from "@/components/StructuredLesson";
import { t, type Language } from "@/lib/i18n";
import { splitSentences } from "@/lib/sentences";
import type { TerrainKnowledge, TerrainLesson } from "@/types/terrain";
import { useEffect, useRef, useState } from "react";

export type PanelSection = GenericSection;

interface ReadingPanelProps {
  language: Language;
  terrain: { name: string; elevation: number } | null;
  lesson: TerrainLesson | null;
  /** 通用分节内容（旅游模式攻略）。非空时优先于 lesson 渲染。 */
  sections?: PanelSection[] | null;
  knowledge?: TerrainKnowledge | null;
  isSpeaking: boolean;
  /** 旅游模式：正在合成首段语音 */
  isPreparing?: boolean;
  isRouteFlying?: boolean;
  /** 航线飞行中：整条航线的解说稿 */
  routeNarration?: string | null;
  /** 航线飞行中：当前飞越的地形名 */
  flyoverName?: string | null;
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
  sections = null,
  knowledge,
  isSpeaking,
  isPreparing = false,
  isRouteFlying,
  routeNarration,
  flyoverName,
  activeSentenceIndex,
  activeSection,
  onPlay,
  onStop,
  onClose,
}: ReadingPanelProps) {
  const [expanded, setExpanded] = useState(false);
  const [routeCollapsed, setRouteCollapsed] = useState(false);
  const activeRef = useRef<HTMLSpanElement>(null);

  // 讲解开始时自动展开、地形切换时收回卡片态——在渲染期间比较上一次的值
  // 代替 effect+setState（避免多一次级联渲染，见 react-hooks/set-state-in-effect）
  const [prevTerrainName, setPrevTerrainName] = useState(terrain?.name);
  if (terrain?.name !== prevTerrainName) {
    setPrevTerrainName(terrain?.name);
    setExpanded(false);
  }
  const speakingOrPreparing = isSpeaking || isPreparing;
  const [prevSpeakingOrPreparing, setPrevSpeakingOrPreparing] = useState(speakingOrPreparing);
  if (speakingOrPreparing !== prevSpeakingOrPreparing) {
    setPrevSpeakingOrPreparing(speakingOrPreparing);
    if (speakingOrPreparing) setExpanded(true);
  }

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [activeSentenceIndex]);

  // ---- 航线飞行中：一段连贯解说 + 当前飞越地形 ----
  if (isRouteFlying) {
    const sentences = routeNarration ? splitSentences(routeNarration) : [];

    // 最小化：右上角一个小条，点开恢复内容（解说不受影响，一直在播）
    if (routeCollapsed) {
      return (
        <button
          type="button"
          onClick={() => setRouteCollapsed(false)}
          className="glass-panel absolute right-3 top-14 z-30 flex items-center gap-2 rounded-full px-3.5 py-2 text-left panel-slide-in"
          aria-label={t("panel.expand", language)}
        >
          <span className="text-[color:var(--accent)]">✈</span>
          <span className="editorial-title max-w-[160px] truncate text-[13px] text-[color:var(--ink)]">
            {flyoverName ?? t("journey.routes", language)}
          </span>
          <span className="text-[10px] text-[color:var(--ink-faint)]">▸</span>
        </button>
      );
    }

    return (
      <aside className="absolute right-0 top-0 bottom-0 z-30 w-full max-w-[420px] panel-slide-in">
        <div className="flex h-full flex-col border-l border-[color:var(--hairline)] bg-[color:var(--panel-solid)] backdrop-blur-xl">
          <div className="flex items-start justify-between gap-3 border-b border-[color:var(--hairline)] px-6 py-4">
            <div className="min-w-0">
              <span className="editorial-kicker text-[color:var(--accent)]">
                {t("journey.routes", language)}
              </span>
              {flyoverName && (
                <h2 className="editorial-title mt-1 text-[20px] leading-tight">
                  {flyoverName}
                </h2>
              )}
            </div>
            <button
              type="button"
              onClick={() => setRouteCollapsed(true)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink)]"
              aria-label={t("panel.minimize", language)}
            >
              <span className="text-[15px]">–</span>
            </button>
          </div>
          <div className="reading-scroll flex-1 overflow-y-auto px-6 py-5">
            {sentences.length > 0 ? (
              <p className="reading-body">
                {sentences.map((s, i) => {
                  const isActive = activeSentenceIndex === i;
                  const isPast =
                    activeSentenceIndex != null && i < activeSentenceIndex;
                  return (
                    <span
                      key={i}
                      ref={isActive ? activeRef : undefined}
                      className={[
                        "transition-colors duration-500",
                        isActive ? "text-[color:var(--ink)]" : "",
                        isPast ? "text-[color:var(--ink-faint)]" : "",
                        !isActive && !isPast ? "text-[color:var(--ink-dim)]" : "",
                      ].join(" ")}
                    >
                      {s}
                    </span>
                  );
                })}
              </p>
            ) : (
              <p className="reading-body text-[color:var(--ink-dim)]">
                {t("panel.flyover_hint", language)}
              </p>
            )}
          </div>
        </div>
      </aside>
    );
  }

  if (!terrain) return null;

  const hasElevation = Number.isFinite(terrain.elevation);
  const elev = hasElevation
    ? terrain.elevation.toLocaleString(language === "zh-CN" ? "zh-CN" : "en-US")
    : "";
  const elevLabel = hasElevation
    ? `${t("card.elevation", language)} ${elev}${t("card.meters", language)}`
    : "";
  const summary =
    (sections && sections.length > 0 ? sections[0].text : lesson?.seeing)?.trim() ?? "";

  // ---- Article state ----
  if (expanded) {
    return (
      <aside className="absolute right-0 top-0 bottom-0 z-30 w-full max-w-[420px] panel-slide-in">
        <div className="flex h-full flex-col border-l border-[color:var(--hairline)] bg-[color:var(--panel-solid)] backdrop-blur-xl">
          {/* sticky header */}
          <div className="flex items-start justify-between gap-3 border-b border-[color:var(--hairline)] px-6 py-4">
            <div className="min-w-0">
              {(isSpeaking || isPreparing) && (
                <span className="editorial-kicker mb-1 flex items-center gap-1.5 text-[color:var(--accent)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--accent)]" />
                  {isPreparing ? t("panel.preparing", language) : t("panel.narrating", language)}
                </span>
              )}
              <h2 className="editorial-title truncate text-[22px] leading-tight">
                {terrain.name}
              </h2>
              {elevLabel && (
                <p className="mt-0.5 text-[11px] text-[color:var(--ink-faint)]">
                  {elevLabel}
                </p>
              )}
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={isSpeaking || isPreparing ? onStop : onPlay}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--accent-line)] text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent-soft)]"
                aria-label={
                  isPreparing
                    ? t("panel.preparing", language)
                    : isSpeaking
                      ? t("panel.pause", language)
                      : t("panel.play", language)
                }
              >
                <span className={`text-[11px] ${isPreparing ? "animate-pulse" : ""}`}>
                  {isPreparing ? "◌" : isSpeaking ? "■" : "▶"}
                </span>
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
            {(lesson || (sections && sections.length > 0)) && (
              <StructuredLesson
                lesson={lesson}
                sections={sections}
                hideEmptySections
                activeSentenceIndex={activeSentenceIndex}
                activeSection={activeSection}
                language={language}
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
            {elevLabel && (
              <p className="mt-1 text-[11px] text-[color:var(--ink-faint)]">{elevLabel}</p>
            )}
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
            onClick={isSpeaking || isPreparing ? onStop : onPlay}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--accent-line)] px-4 py-2 text-[0.8125rem] font-medium text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent-soft)]"
          >
            <span className={`text-[10px] ${isPreparing ? "animate-pulse" : ""}`}>
              {isPreparing ? "◌" : isSpeaking ? "■" : "▶"}
            </span>
            {isPreparing
              ? t("panel.preparing", language)
              : isSpeaking
                ? t("panel.pause", language)
                : t("panel.play", language)}
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
