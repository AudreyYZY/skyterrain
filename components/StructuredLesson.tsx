import { stripEmojis } from "@/lib/strip-emojis";
import { LESSON_SECTION_ORDER, LESSON_SECTION_HEADING } from "@/lib/lesson";
import type { TerrainLesson } from "@/types/terrain";
import { useEffect, useRef } from "react";

interface StructuredLessonProps {
  lesson: TerrainLesson;
  hideEmptySections?: boolean;
  /** 当前高亮的句子索引（用于朗读同步） */
  activeSentenceIndex?: number | null;
  /** 当前朗读的 section key */
  activeSection?: string | null;
}

const SECTIONS: {
  key: keyof TerrainLesson;
  heading: string;
  primary?: boolean;
}[] = LESSON_SECTION_ORDER.map((key, i) => ({
  key: key as keyof TerrainLesson,
  heading: LESSON_SECTION_HEADING[key]!,
  primary: i === 0,
}));

/**
 * 将文本按中文/英文句号、问号、感叹号分割成句子
 */
function splitSentences(text: string): string[] {
  if (!text.trim()) return [];
  const parts = text.split(/(?<=[。！？.!?])/g).filter((s) => s.trim().length > 0);
  return parts;
}

export default function StructuredLesson({
  lesson,
  hideEmptySections = false,
  activeSentenceIndex,
  activeSection,
}: StructuredLessonProps) {
  const activeRef = useRef<HTMLSpanElement>(null);

  // 当前高亮句变化时，滚动到可见区域
  useEffect(() => {
    if (activeSentenceIndex != null && activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeSentenceIndex, activeSection]);

  const visible = SECTIONS.filter((s) => {
    const text = stripEmojis(lesson[s.key] ?? "");
    return !hideEmptySections || text.length > 0;
  });

  // 计算全局句子偏移量 — 用于将 activeSentenceIndex 映射到各 section 内的局部索引
  // 顺序与 SECTIONS 定义一致，与 lessonToSpeech 的拼接顺序匹配
  const sectionOffsets = new Map<string, number>();
  let cumulativeOffset = 0;
  for (const s of SECTIONS) {
    const text = stripEmojis((lesson[s.key] as string) ?? "");
    if (text.length === 0) continue;
    sectionOffsets.set(s.key, cumulativeOffset);
    cumulativeOffset += splitSentences(text).length;
  }

  return (
    <div className="space-y-6">
      {visible.map(({ key, heading, primary }) => {
        const body = stripEmojis((lesson[key] as string) ?? "");
        if (!body) return null;

        const sentences = splitSentences(body);
        const offset = sectionOffsets.get(key) ?? 0;
        const isActiveSection = activeSection === key;

        if (primary) {
          return (
            <section key={key} className="space-y-0">
              {sentences.map((sentence, i) => {
                const globalIndex = offset + i;
                const isActive = isActiveSection && activeSentenceIndex === globalIndex;
                const isPast = isActiveSection && activeSentenceIndex != null && globalIndex < activeSentenceIndex;
                const isFuture = isActiveSection && activeSentenceIndex != null && globalIndex > activeSentenceIndex;

                return (
                  <span
                    key={i}
                    ref={isActive ? activeRef : undefined}
                    className={[
                      "narration-hero inline transition-colors duration-500",
                      isActive ? "text-white/95" : "",
                      isPast ? "text-white/50" : "",
                      isFuture ? "text-white/30" : "",
                      !isActiveSection ? "text-white/80" : "",
                    ].join(" ")}
                  >
                    {sentence}
                  </span>
                );
              })}
            </section>
          );
        }

        return (
          <section key={key} className="accent-line">
            <h3 className="section-label">{heading}</h3>
            <p className="mt-1.5 narration-secondary max-w-[36ch]">
              {sentences.map((sentence, i) => {
                const globalIndex = offset + i;
                const isActive = isActiveSection && activeSentenceIndex === globalIndex;
                const isPast = isActiveSection && activeSentenceIndex != null && globalIndex < activeSentenceIndex;
                const isFuture = isActiveSection && activeSentenceIndex != null && globalIndex > activeSentenceIndex;

                return (
                  <span
                    key={i}
                    ref={isActive ? activeRef : undefined}
                    className={[
                      "inline transition-colors duration-500",
                      isActive ? "text-white/95" : "",
                      isPast ? "text-white/40" : "",
                      isFuture ? "text-white/25" : "",
                      !isActiveSection ? "text-white/35" : "",
                    ].join(" ")}
                  >
                    {sentence}
                  </span>
                );
              })}
            </p>
          </section>
        );
      })}
    </div>
  );
}
