import { stripEmojis } from "@/lib/strip-emojis";
import type { TerrainLesson } from "@/types/terrain";

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
}[] = [
  { key: "seeing", heading: "飞机窗外", primary: true },
  { key: "formation", heading: "地貌形成" },
  { key: "history", heading: "历史与人文" },
  { key: "observation", heading: "飞机上如何区分" },
];

/**
 * 将文本按中文句号、问号、感叹号分割成句子
 */
function splitSentences(text: string): string[] {
  if (!text.trim()) return [];
  // 按中文标点分句，保留标点
  const parts = text.split(/(?<=[。！？])/g).filter((s) => s.trim().length > 0);
  return parts;
}

export default function StructuredLesson({
  lesson,
  hideEmptySections = false,
  activeSentenceIndex,
  activeSection,
}: StructuredLessonProps) {
  const visible = SECTIONS.filter((s) => {
    const text = stripEmojis(lesson[s.key] ?? "");
    return !hideEmptySections || text.length > 0;
  });

  return (
    <div className="space-y-6">
      {visible.map(({ key, heading, primary }) => {
        const body = stripEmojis((lesson[key] as string) ?? "");
        if (!body) return null;

        if (primary) {
          // 主叙事：分句渲染，支持高亮
          const sentences = splitSentences(body);
          const isActiveSection = activeSection === key;

          return (
            <section key={key} className="space-y-0">
              {sentences.map((sentence, i) => {
                const isActive = isActiveSection && activeSentenceIndex === i;
                const isPast = isActiveSection && activeSentenceIndex != null && i < activeSentenceIndex;
                const isFuture = isActiveSection && activeSentenceIndex != null && i > activeSentenceIndex;

                return (
                  <span
                    key={i}
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

        // 次要章节：紧凑段落
        return (
          <section key={key} className="accent-line">
            <h3 className="section-label">{heading}</h3>
            <p className="mt-1.5 narration-secondary max-w-[36ch]">{body}</p>
          </section>
        );
      })}
    </div>
  );
}
