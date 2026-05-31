"use client";

import SourceAttribution from "@/components/SourceAttribution";
import StructuredLesson from "@/components/StructuredLesson";
import TerrainGlanceCards from "@/components/TerrainGlanceCards";
import VoiceSelector from "@/components/VoiceSelector";
import type { TerrainCards, TerrainKnowledge, TerrainLesson } from "@/types/terrain";
import { useState } from "react";

interface NarrationPanelProps {
  title: string;
  subtitle?: string;
  cards: TerrainCards | null;
  lesson: TerrainLesson | null;
  knowledge?: TerrainKnowledge | null;
  error: string | null;
  isFlyover?: boolean;
  isRouteFlying?: boolean;
  onSpeak: () => void | Promise<void>;
  onStopSpeak: () => void;
  isSpeaking: boolean;
  embedded?: boolean;
}

export default function NarrationPanel({
  title,
  subtitle,
  cards,
  lesson,
  knowledge,
  error,
  isFlyover,
  isRouteFlying,
  onSpeak,
  onStopSpeak,
  isSpeaking,
}: NarrationPanelProps) {
  const [showExtended, setShowExtended] = useState(false);

  return (
    <div className="flex h-full flex-col">
      {/* Terrain name — cinematic title */}
      <div className="mb-5">
        <h2 className="text-[1.125rem] font-medium tracking-tight text-white/90 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-[11px] text-white/25 tracking-wide">{subtitle}</p>
        )}
      </div>

      {/* Route flying hint */}
      {isRouteFlying && !lesson && (
        <p className="mb-4 text-[12px] text-white/20 tracking-wide">
          飞越时自动讲解
        </p>
      )}

      {/* Compact metadata — single line, minimal */}
      {cards && (
        <div className="mb-5">
          <TerrainGlanceCards cards={cards} />
        </div>
      )}

      {/* Lesson content — the dominant block */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {error && (
          <p className="mb-4 text-[13px] leading-relaxed text-red-300/70">{error}</p>
        )}

        {!lesson && (
          <p className="text-[13px] leading-relaxed text-white/20">
            {isRouteFlying
              ? "请等待飞机飞越下一处地貌…"
              : "选择目的地或开始航线"}
          </p>
        )}

        {lesson && (
          <StructuredLesson
            lesson={lesson}
            hideEmptySections={
              !lesson.formation.trim() && !lesson.history.trim()
            }
          />
        )}

        {/* 延伸阅读 — 本地知识库 */}
        {knowledge && showExtended && (
          <div className="mt-5 space-y-3 border-t border-white/[0.04] pt-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-amber-300/40">
              延伸阅读
            </p>

            {knowledge.terrainFeatures.length > 0 && (
              <div>
                <p className="text-[11px] font-medium text-white/50 mb-1">地形特征</p>
                <p className="text-[12px] leading-relaxed text-white/35">
                  {knowledge.terrainFeatures.join("、")}
                </p>
              </div>
            )}

            {knowledge.climateFeatures.length > 0 && (
              <div>
                <p className="text-[11px] font-medium text-white/50 mb-1">气候特点</p>
                <p className="text-[12px] leading-relaxed text-white/35">
                  {knowledge.climateFeatures.join("、")}
                </p>
              </div>
            )}

            {knowledge.historicalTopics.length > 0 && (
              <div>
                <p className="text-[11px] font-medium text-white/50 mb-1">历史脉络</p>
                <p className="text-[12px] leading-relaxed text-white/35">
                  {knowledge.historicalTopics.join("、")}
                </p>
              </div>
            )}

            {knowledge.cultureTopics.length > 0 && (
              <div>
                <p className="text-[11px] font-medium text-white/50 mb-1">人文背景</p>
                <p className="text-[12px] leading-relaxed text-white/35">
                  {knowledge.cultureTopics.join("、")}
                </p>
              </div>
            )}

            {knowledge.interestingFacts.length > 0 && (
              <div>
                <p className="text-[11px] font-medium text-white/50 mb-1">趣味知识</p>
                <ul className="space-y-1">
                  {knowledge.interestingFacts.map((fact, i) => (
                    <li key={i} className="text-[12px] leading-relaxed text-white/35">
                      · {fact}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Source attribution — ultra subtle */}
      {knowledge && <SourceAttribution knowledge={knowledge} />}

      {/* Footer: voice controls + extended reading */}
      <div className="mt-4 pt-3 border-t border-white/[0.03] space-y-2">
        <VoiceSelector />

        {lesson && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={isSpeaking ? onStopSpeak : onSpeak}
              className="flex-1 rounded-lg bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium text-white/70 transition hover:bg-white/[0.1] hover:text-white/90"
            >
              {isSpeaking ? "停止" : "朗读"}
            </button>

            {knowledge && (
              <button
                type="button"
                onClick={() => setShowExtended(!showExtended)}
                className="rounded-lg bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/30 transition hover:bg-white/[0.06] hover:text-white/50"
              >
                {showExtended ? "收起" : "延伸"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
