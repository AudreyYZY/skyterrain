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
  activeSentenceIndex?: number | null;
  activeSection?: string | null;
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
  activeSentenceIndex,
  activeSection,
}: NarrationPanelProps) {
  const [showDetail, setShowDetail] = useState(false);

  // 无内容时显示
  if (!lesson && !isRouteFlying) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-[13px] text-white/25 mb-1">选择一个地貌</p>
        <p className="text-[11px] text-white/15">开始空中探索之旅</p>
      </div>
    );
  }

  // 航线飞行中
  if (isRouteFlying && !lesson) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-[12px] text-white/25">飞越时自动讲解</p>
      </div>
    );
  }

  // 讲解进行中 — 纪录片模式
  if (isSpeaking) {
    return (
      <div className="flex flex-col h-full">
        {/* 标题 */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/60 animate-pulse" />
            <h3 className="text-[13px] font-medium text-white/70">正在讲解</h3>
          </div>
          <h2 className="text-[15px] font-medium text-white/85">{title}</h2>
        </div>

        {/* 当前句子 — 纪录片旁白风格 */}
        <div className="flex-1 overflow-y-auto mb-3">
          {lesson && (
            <StructuredLesson
              lesson={lesson}
              hideEmptySections={!lesson.formation.trim() && !lesson.history.trim()}
              activeSentenceIndex={activeSentenceIndex}
              activeSection={activeSection}
            />
          )}
        </div>

        {/* 停止按钮 */}
        <button
          type="button"
          onClick={onStopSpeak}
          className="w-full rounded-lg bg-white/[0.06] px-3 py-2 text-[11px] font-medium text-white/50 transition hover:bg-white/[0.1] hover:text-white/70"
        >
          停止讲解
        </button>
      </div>
    );
  }

  // 默认状态 — 摘要卡 (纪录片入口)
  return (
    <div className="flex flex-col h-full">
      {/* 地貌名称 */}
      <div className="mb-3">
        <h2 className="text-[15px] font-medium text-white/85 leading-tight">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-[10px] text-white/25">{subtitle}</p>
        )}
      </div>

      {/* 元数据 */}
      {cards && (
        <div className="mb-4">
          <TerrainGlanceCards cards={cards} />
        </div>
      )}

      {/* 飞机窗外 — 纪录片第一视角 */}
      {lesson?.seeing && (
        <div className="mb-4">
          <p className="text-[11px] font-medium text-white/30 mb-1.5 tracking-wide">
            飞机窗外
          </p>
          <p className="text-[12px] leading-relaxed text-white/45 line-clamp-3">
            {lesson.seeing}
          </p>
        </div>
      )}

      {/* 错误 */}
      {error && (
        <p className="mb-3 text-[11px] text-red-300/60">{error}</p>
      )}

      {/* 主按钮: 开始讲解 */}
      <div className="mt-auto space-y-2">
        <button
          type="button"
          onClick={onSpeak}
          className="w-full rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2 text-[12px] font-medium text-amber-300/80 transition hover:bg-amber-500/20 hover:text-amber-300"
        >
          开始讲解
        </button>

        {/* 次按钮: 查看详情 */}
        <button
          type="button"
          onClick={() => setShowDetail(!showDetail)}
          className="w-full rounded-lg bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/30 transition hover:bg-white/[0.06] hover:text-white/50"
        >
          {showDetail ? "收起详情" : "查看详情"}
        </button>
      </div>

      {/* 详情展开 */}
      {showDetail && lesson && (
        <div className="mt-3 pt-3 border-t border-white/[0.04] space-y-3 overflow-y-auto">
          <StructuredLesson
            lesson={lesson}
            hideEmptySections={!lesson.formation.trim() && !lesson.history.trim()}
            activeSentenceIndex={null}
            activeSection={null}
          />
          {knowledge && <SourceAttribution knowledge={knowledge} />}
        </div>
      )}
    </div>
  );
}
