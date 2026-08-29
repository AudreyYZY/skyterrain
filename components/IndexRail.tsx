"use client";

import { t, type Language } from "@/lib/i18n";
import { useState } from "react";

export interface RailItem {
  id: string;
  name: string;
}
export interface RailGroup {
  type: string;
  label: string;
  glyph: string;
  items: RailItem[];
}

interface IndexRailProps {
  language: Language;
  groups: RailGroup[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

/**
 * 左侧地貌目录。
 * 默认一条窄竖条（只有分类字形）；hover / 点击浮出面板：
 * 一级＝分类，二级＝该分类的地形。选中地形后收起。
 */
export default function IndexRail({
  language,
  groups,
  activeId,
  onSelect,
}: IndexRailProps) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [cat, setCat] = useState<string | null>(null);

  const expanded = open || pinned;
  const activeGroup = groups.find((g) => g.type === cat) ?? null;

  const pick = (id: string) => {
    onSelect(id);
    setPinned(false);
    setOpen(false);
  };

  return (
    <div
      className="absolute top-12 bottom-0 left-0 z-30 flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* the always-visible rail */}
      <div className="relative flex w-[52px] flex-col items-center gap-1 border-r border-[color:var(--hairline)] bg-[color:var(--panel)] py-3 backdrop-blur-xl">
        <button
          type="button"
          onClick={() => setPinned((p) => !p)}
          aria-label={t("rail.title", language)}
          className="mb-1 flex h-8 w-8 items-center justify-center text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink)]"
        >
          <span className="text-[13px]">{expanded ? "‹" : "≡"}</span>
        </button>
        {groups.map((g) => {
          const isActiveCat = activeGroup?.type === g.type;
          const isDirect = g.type === "overview" && g.items.length === 1;
          return (
            <button
              key={g.type}
              type="button"
              onClick={() => {
                if (isDirect) {
                  pick(g.items[0].id);
                  return;
                }
                setPinned(true);
                setCat(g.type);
              }}
              title={g.label}
              className={[
                "flex h-8 w-8 items-center justify-center rounded-md text-[13px] transition-all",
                isActiveCat
                  ? "bg-white/[0.07] text-[color:var(--ink)]"
                  : "text-[color:var(--ink-faint)] hover:bg-white/[0.05] hover:text-[color:var(--ink-body)]",
              ].join(" ")}
            >
              {g.glyph}
            </button>
          );
        })}
      </div>

      {/* fly-out panel */}
      <div
        className={[
          "h-full overflow-hidden border-r border-[color:var(--hairline)] bg-[color:var(--panel-solid)] backdrop-blur-xl",
          "transition-[width] duration-[var(--dur-panel)] ease-[var(--ease)]",
          expanded ? "w-[248px]" : "w-0",
        ].join(" ")}
      >
        <div className="sidebar-scroll flex h-full w-[248px] flex-col overflow-y-auto px-4 py-4">
          {activeGroup ? (
            <>
              <button
                type="button"
                onClick={() => setCat(null)}
                className="mb-3 flex items-center gap-1.5 text-[11px] text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink-body)]"
              >
                <span aria-hidden>←</span>
                <span>{t("rail.title", language)}</span>
              </button>
              <p className="editorial-kicker mb-3">{activeGroup.label}</p>
              <div className="flex flex-col">
                {activeGroup.items.map((it) => (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => pick(it.id)}
                    className={[
                      "editorial-title border-b border-[color:var(--hairline)] py-2.5 text-left text-[15px] transition-colors",
                      activeId === it.id
                        ? "text-[color:var(--accent)]"
                        : "text-[color:var(--ink-body)] hover:text-[color:var(--ink)]",
                    ].join(" ")}
                  >
                    {it.name}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="editorial-kicker mb-4">{t("rail.title", language)}</p>
              <div className="flex flex-col">
                {groups.map((g) => {
                  const isDirect = g.type === "overview" && g.items.length === 1;
                  return (
                    <button
                      key={g.type}
                      type="button"
                      onClick={() => (isDirect ? pick(g.items[0].id) : setCat(g.type))}
                      className="flex items-center justify-between border-b border-[color:var(--hairline)] py-2.5 text-left transition-colors hover:text-[color:var(--ink)]"
                    >
                      <span className="editorial-title text-[15px] text-[color:var(--ink-body)]">
                        {g.label}
                      </span>
                      {!isDirect && (
                        <span className="text-[11px] tabular-nums text-[color:var(--ink-faint)]">
                          {g.items.length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
