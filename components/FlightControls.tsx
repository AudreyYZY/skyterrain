"use client";

import type { TerrainCategoryGroup } from "@/lib/terrain";
import type { TerrainPoint } from "@/types/terrain";
import { useCallback, useState } from "react";

interface FlightControlsProps {
  groups: TerrainCategoryGroup[];
  activeId: string | null;
  disabled?: boolean;
  onSelect: (terrain: TerrainPoint) => void | Promise<void>;
}

export default function FlightControls({
  groups,
  activeId,
  disabled,
  onSelect,
}: FlightControlsProps) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggleCategory = useCallback((id: string) => {
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const total = groups.reduce((n, g) => n + g.terrains.length, 0);

  return (
    <div className="flex flex-col">
      <p className="mb-3 text-[10px] text-white/25 tracking-wide">{total} 个地貌</p>

      <div className="flex flex-col gap-0.5">
        {groups.map((group) => {
          const isCollapsed = collapsed[group.category] ?? false;

          return (
            <section key={group.category} className="mb-1">
              <button
                type="button"
                onClick={() => toggleCategory(group.category)}
                className="flex w-full items-center gap-2 px-1 py-2 text-left transition hover:bg-white/[0.03] rounded-lg"
                aria-expanded={!isCollapsed}
              >
                <span
                  className={[
                    "flex h-3 w-3 items-center justify-center text-[7px] text-amber-400/30 transition-transform",
                    isCollapsed ? "" : "rotate-90",
                  ].join(" ")}
                >
                  ›
                </span>
                <span className="flex-1 text-[11px] font-medium text-white/45 tracking-wide">
                  {group.label}
                </span>
                <span className="text-[9px] tabular-nums text-white/12">
                  {group.terrains.length}
                </span>
              </button>

              {!isCollapsed && (
                <ul className="ml-1.5 space-y-0.5 pb-1.5 pt-0.5">
                  {group.terrains.map((terrain) => (
                    <TerrainItem
                      key={terrain.id}
                      terrain={terrain}
                      isActive={terrain.id === activeId}
                      disabled={disabled}
                      onSelect={onSelect}
                    />
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

function TerrainItem({
  terrain,
  isActive,
  disabled,
  onSelect,
}: {
  terrain: TerrainPoint;
  isActive: boolean;
  disabled?: boolean;
  onSelect: (terrain: TerrainPoint) => void | Promise<void>;
}) {
  return (
    <li>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onSelect(terrain)}
        className={[
          "w-full rounded-md px-2 py-1.5 text-left text-[12px] transition",
          "disabled:cursor-not-allowed disabled:opacity-50",
          isActive
            ? "bg-white/[0.06] text-white/80"
            : "text-white/35 hover:bg-white/[0.03] hover:text-white/60",
        ].join(" ")}
      >
        {terrain.name}
      </button>
    </li>
  );
}
