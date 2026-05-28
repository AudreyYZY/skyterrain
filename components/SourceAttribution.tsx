"use client";

import type { TerrainKnowledge } from "@/types/terrain";

interface SourceAttributionProps {
  knowledge: TerrainKnowledge;
}

export default function SourceAttribution({ knowledge }: SourceAttributionProps) {
  if (!knowledge.sources || knowledge.sources.length === 0) return null;

  return (
    <div className="mt-4 pt-2">
      <p className="text-[9px] text-white/15 tracking-wide">
        {knowledge.sources.map((s) => s.title).join(" · ")}
      </p>
    </div>
  );
}
