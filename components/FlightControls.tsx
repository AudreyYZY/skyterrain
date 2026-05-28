"use client";

import type { TerrainCategoryGroup } from "@/lib/terrain";
import { TERRAIN_WORLDVIEW, type WorldviewNode } from "@/lib/terrain-categories";
import type { TerrainPoint } from "@/types/terrain";
import { useCallback, useMemo, useState } from "react";

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
  const [subgroupCollapsed, setSubgroupCollapsed] = useState<Record<string, boolean>>({});

  const toggleCategory = useCallback((id: string) => {
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleSubgroup = useCallback((id: string) => {
    setSubgroupCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const total = groups.reduce((n, g) => n + g.terrains.length, 0);

  // 构建世界观层级数据
  const worldviewGroups = useMemo(() => {
    return TERRAIN_WORLDVIEW.map((node: WorldviewNode) => {
      const matchedGroups = groups.filter((g) => node.categories.includes(g.category));
      const terrains = matchedGroups.flatMap((g) => g.terrains);

      // 构建子分组
      const subgroups = node.subgroups
        ?.map((sg) => ({
          ...sg,
          terrains: terrains.filter(sg.filter),
        }))
        .filter((sg) => sg.terrains.length > 0);

      return { ...node, terrains, subgroups };
    }).filter((wg) => wg.terrains.length > 0);
  }, [groups]);

  return (
    <div className="flex flex-col">
      <p className="mb-3 text-[10px] text-white/25 tracking-wide">{total} 个地貌</p>

      <div className="flex flex-col gap-0.5">
        {worldviewGroups.map((group) => {
          const isCollapsed = collapsed[group.id] ?? false;
          const hasSubgroups = group.subgroups && group.subgroups.length > 1;

          return (
            <section key={group.id} className="mb-1">
              {/* 主分组标题 */}
              <button
                type="button"
                onClick={() => toggleCategory(group.id)}
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
                <div className="ml-1.5">
                  {hasSubgroups ? (
                    // 有子分组：渲染子分组
                    <div className="flex flex-col">
                      {group.subgroups!.map((sg) => {
                        const isSgCollapsed = subgroupCollapsed[sg.id] ?? false;

                        return (
                          <div key={sg.id} className="mb-0.5">
                            <button
                              type="button"
                              onClick={() => toggleSubgroup(sg.id)}
                              className="flex w-full items-center gap-1.5 px-1 py-1 text-left transition hover:bg-white/[0.02] rounded-md"
                              aria-expanded={!isSgCollapsed}
                            >
                              <span
                                className={[
                                  "text-[6px] text-white/15 transition-transform",
                                  isSgCollapsed ? "" : "rotate-90",
                                ].join(" ")}
                              >
                                ›
                              </span>
                              <span className="text-[10px] text-white/30 tracking-wide">
                                {sg.label}
                              </span>
                              <span className="text-[8px] text-white/10">
                                {sg.terrains.length}
                              </span>
                            </button>

                            {!isSgCollapsed && (
                              <ul className="ml-3 space-y-0.5 pb-1 pt-0.5">
                                {sg.terrains.map((terrain) => (
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
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    // 无子分组：直接渲染地貌列表
                    <ul className="space-y-0.5 pb-1.5 pt-0.5">
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
                </div>
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
