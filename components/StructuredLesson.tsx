import { stripEmojis } from "@/lib/strip-emojis";
import type { TerrainLesson } from "@/types/terrain";

interface StructuredLessonProps {
  lesson: TerrainLesson;
  hideEmptySections?: boolean;
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

export default function StructuredLesson({
  lesson,
  hideEmptySections = false,
}: StructuredLessonProps) {
  const visible = SECTIONS.filter((s) => {
    const text = stripEmojis(lesson[s.key] ?? "");
    return !hideEmptySections || text.length > 0;
  });

  return (
    <div className="space-y-5">
      {visible.map(({ key, heading, primary }) => {
        const body = stripEmojis((lesson[key] as string) ?? "");
        if (!body) return null;

        if (primary) {
          return (
            <section key={key}>
              <p className="narration-hero">{body}</p>
            </section>
          );
        }

        return (
          <section key={key} className="accent-line">
            <h3 className="section-label">{heading}</h3>
            <p className="mt-1.5 narration-secondary">{body}</p>
          </section>
        );
      })}
    </div>
  );
}
