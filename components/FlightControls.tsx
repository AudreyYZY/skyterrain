"use client";

import type { TerrainPoint } from "@/types/terrain";
import type { TerrainCategoryGroup } from "@/lib/terrain";
import { buildTerrainHierarchy, type HierarchyNode } from "@/lib/terrain-hierarchy";
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
  // 从 localStorage 恢复展开状态，或使用默认值
  const [expandedRegions, setExpandedRegions] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const saved = localStorage.getItem("fge-province-expanded");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const hierarchy = useMemo(() => {
    const allTerrains = groups.flatMap((g) => g.terrains);
    return buildTerrainHierarchy(allTerrains, groups);
  }, [groups]);

  // 持久化展开状态
  const toggleRegion = useCallback((regionId: string) => {
    setExpandedRegions((prev) => {
      const next = { ...prev, [regionId]: !prev[regionId] };
      try {
        localStorage.setItem("fge-province-expanded", JSON.stringify(next));
      } catch { /* ignore */ }
      return next;
    });
  }, []);

  const toggleCategory = useCallback((id: string) => {
    setExpandedCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const total = groups.reduce((n, g) => n + g.terrains.length, 0);

  return (
    <div className="flex flex-col">
      <p className="mb-3 text-[10px] text-white/25 tracking-wide">{total} 个地貌</p>

      <div className="flex flex-col">
        {hierarchy.map((node) => (
          <RegionNode
            key={node.province.id}
            node={node}
            activeId={activeId}
            disabled={disabled}
            onSelect={onSelect}
            isExpanded={expandedRegions[node.province.id] ?? node.province.defaultExpanded}
            expandedCategories={expandedCategories}
            onToggleRegion={toggleRegion}
            onToggleCategory={toggleCategory}
          />
        ))}
      </div>
    </div>
  );
}

function RegionNode({
  node,
  activeId,
  disabled,
  onSelect,
  isExpanded,
  expandedCategories,
  onToggleRegion,
  onToggleCategory,
}: {
  node: HierarchyNode;
  activeId: string | null;
  disabled?: boolean;
  onSelect: (terrain: TerrainPoint) => void | Promise<void>;
  isExpanded: boolean;
  expandedCategories: Record<string, boolean>;
  onToggleRegion: (id: string) => void;
  onToggleCategory: (id: string) => void;
}) {
  return (
    <section className="mb-1">
      {/* 区域标题 */}
      <button
        type="button"
        onClick={() => onToggleRegion(node.province.id)}
        className="flex w-full items-center gap-2 px-1 py-2 text-left transition hover:bg-white/[0.03] rounded-lg"
        aria-expanded={isExpanded}
      >
        <span
          className={[
            "flex h-3 w-3 items-center justify-center text-[7px] text-amber-400/30 transition-transform",
            isExpanded ? "" : "rotate-90",
          ].join(" ")}
        >
          ›
        </span>
        <span className="flex-1 text-[11px] font-medium text-white/50 tracking-wide">
          {node.province.name}
        </span>
        <span className="text-[9px] tabular-nums text-white/12">
          {node.totalCount}
        </span>
      </button>

      {/* 分类列表 */}
      {isExpanded && (
        <div className="ml-1.5">
          {node.categoryGroups.map((group) => {
            const catKey = `${node.province.id}-${group.category}`;
            const isCatExpanded = expandedCategories[catKey] ?? true;

            return (
              <div key={group.category} className="mb-0.5">
                <button
                  type="button"
                  onClick={() => onToggleCategory(catKey)}
                  className="flex w-full items-center gap-1.5 px-1 py-1.5 text-left transition hover:bg-white/[0.02] rounded-md"
                  aria-expanded={isCatExpanded}
                >
                  <span
                    className={[
                      "text-[6px] text-white/15 transition-transform inline-block",
                      isCatExpanded ? "rotate-90" : "",
                    ].join(" ")}
                  >
                    ›
                  </span>
                  <span className="flex-1 text-[10px] text-white/35 tracking-wide">
                    {group.label}
                  </span>
                  <span className="text-[8px] tabular-nums text-white/10">
                    {group.terrains.length}
                  </span>
                </button>

                {isCatExpanded && (
                  <ul className="ml-2 space-y-0.5 pb-1 pt-0.5">
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
            );
          })}
        </div>
      )}
    </section>
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
