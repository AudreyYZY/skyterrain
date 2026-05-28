import type { TerrainCards } from "@/types/terrain";

interface TerrainGlanceCardsProps {
  cards: TerrainCards;
}

export default function TerrainGlanceCards({ cards }: TerrainGlanceCardsProps) {
  return (
    <p className="text-[11px] text-white/25 tracking-wide leading-relaxed">
      {cards.location}
      <span className="mx-1.5 text-white/10">/</span>
      {cards.peak}
    </p>
  );
}
