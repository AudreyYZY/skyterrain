"use client";

import SourceAttribution from "@/components/SourceAttribution";
import StructuredLesson from "@/components/StructuredLesson";
import TerrainGlanceCards from "@/components/TerrainGlanceCards";
import VoiceSelector from "@/components/VoiceSelector";
import type { TerrainCards, TerrainKnowledge, TerrainLesson } from "@/types/terrain";

interface NarrationPanelProps {
  title: string;
  subtitle?: string;
  cards: TerrainCards | null;
  lesson: TerrainLesson | null;
  knowledge?: TerrainKnowledge | null;
  aiEnhancing?: boolean;
  error: string | null;
  isFlyover?: boolean;
  isRouteFlying?: boolean;
  canEnhanceWithAi?: boolean;
  onEnhanceWithAi?: () => void;
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
  aiEnhancing = false,
  error,
  isFlyover,
  isRouteFlying,
  canEnhanceWithAi,
  onEnhanceWithAi,
  onSpeak,
  onStopSpeak,
  isSpeaking,
}: NarrationPanelProps) {
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
      </div>

      {/* Source attribution — ultra subtle */}
      {knowledge && <SourceAttribution knowledge={knowledge} />}

      {/* Footer: voice controls */}
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

            {canEnhanceWithAi && onEnhanceWithAi && (
              <button
                type="button"
                disabled={aiEnhancing}
                onClick={onEnhanceWithAi}
                className="rounded-lg bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/30 transition hover:bg-white/[0.06] hover:text-white/50 disabled:opacity-50"
              >
                {aiEnhancing ? "优化中…" : "AI"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
