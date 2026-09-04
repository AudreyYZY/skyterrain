"use client";

import { useMemo, useState } from "react";

export interface RailItem {
  id: string;
  name: string;
  /** 所属分类（学习模式=地貌类型，旅游模式=官方一级行政区）；同一 key 的条目归为一组 */
  category?: string;
  /** 分类显示名——只需在该分类第一个条目上给出，本组件自己去重取值 */
  categoryLabel?: string;
  /**
   * 分类旁的彩色圆点（旅游模式：该省/州所属大区的提示色，不占文字空间）。
   * 只需在该分类第一个条目上给出，跟 categoryLabel 一样去重取值。不给则不画圆点
   * （学习模式的地貌分类不需要这个）。
   */
  categoryDotColor?: string;
}
export interface RailGroup {
  type: string;
  label: string;
  glyph: string;
  items: RailItem[];
  /** 次区域标题（该组是所属次区域里的第一个国家时给出）— 目录里作分隔小标题 */
  divider?: string;
}

interface IndexRailProps {
  groups: RailGroup[];
  activeId: string | null;
  onSelect: (id: string) => void;
  /** 目录标题 —— 学习模式「地貌目录」、旅游模式「旅游目录」，由调用方按当前模式传入 */
  title: string;
  searchPlaceholder: string;
  noMatchLabel: string;
  /**
   * true＝分类不再是要点进去的独立一屏，直接在条目列表里以小标题分隔展示
   * （旅游模式：城市按省/州分组，省份多、每省城市数少，点进点出反而麻烦）。
   * false/缺省＝保留原来的「点分类进入」中转屏（学习模式：地貌类型数量少但
   * 每类条目多，中转屏更合适）。
   */
  inlineCategories?: boolean;
}

interface CategoryBucket {
  key: string;
  label: string;
  dotColor?: string;
  items: RailItem[];
}

/**
 * 左侧目录（学习模式＝地貌目录，旅游模式＝旅游目录，标题由 title prop 决定）。
 * 默认一条窄竖条（只有国家字形）；hover / 点击浮出面板，三层结构：
 *   一级＝国家，二级＝该国内的分类（地貌类型 / 地理片区），三级＝该分类下的具体条目。
 * 顶部搜索框任意层级都能用——一旦输入内容，忽略当前所在层级，直接在*全部*
 * 国家里按名称做子串匹配、列出结果，不必先手动逐层展开找。
 * 两套内容（study 的 terrain category / travel 的 city zone）复用同一套分类/搜索逻辑，
 * 靠 RailItem.category/categoryLabel 这两个字段统一驱动，组件本身不关心用途。
 */
export default function IndexRail({
  groups,
  activeId,
  onSelect,
  title,
  searchPlaceholder,
  noMatchLabel,
  inlineCategories = false,
}: IndexRailProps) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [cat, setCat] = useState<string | null>(null);
  const [subcat, setSubcat] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const expanded = open || pinned;
  const activeGroup = groups.find((g) => g.type === cat) ?? null;

  const pick = (id: string) => {
    onSelect(id);
    setPinned(false);
    setOpen(false);
    setQuery("");
  };

  const openGroup = (type: string) => {
    setPinned(true);
    setCat(type);
    setSubcat(null);
  };

  const backToCountries = () => {
    setCat(null);
    setSubcat(null);
  };

  // 全局搜索：不管当前在哪一层，按名称子串匹配全部国家的全部条目
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    const results: { item: RailItem; countryLabel: string }[] = [];
    for (const g of groups) {
      for (const it of g.items) {
        if (it.name.toLowerCase().includes(q)) {
          results.push({ item: it, countryLabel: g.label });
        }
      }
    }
    return results;
  }, [groups, query]);

  // 当前国家内按分类分桶；没有 category 的条目（如「国家概览」）不分桶，直接列在最前
  const { buckets, ungrouped } = useMemo(() => {
    if (!activeGroup) return { buckets: [] as CategoryBucket[], ungrouped: [] as RailItem[] };
    const map = new Map<string, CategoryBucket>();
    const loose: RailItem[] = [];
    for (const it of activeGroup.items) {
      if (!it.category) {
        loose.push(it);
        continue;
      }
      let bucket = map.get(it.category);
      if (!bucket) {
        bucket = { key: it.category, label: it.categoryLabel ?? it.category, dotColor: it.categoryDotColor, items: [] };
        map.set(it.category, bucket);
      } else {
        if (it.categoryLabel) bucket.label = it.categoryLabel;
        if (it.categoryDotColor) bucket.dotColor = it.categoryDotColor;
      }
      bucket.items.push(it);
    }
    return { buckets: Array.from(map.values()), ungrouped: loose };
  }, [activeGroup]);

  // 只有一个分类时，跳过分类中转页，直接显示条目——避免"只有一类还要多点一下"
  // （inlineCategories 模式有自己的渲染分支，不走这条中转页逻辑）
  const skipCategoryLevel = !inlineCategories && buckets.length <= 1;
  const activeBucket = skipCategoryLevel ? (buckets[0] ?? null) : (buckets.find((b) => b.key === subcat) ?? null);
  const showingItems = !inlineCategories && (skipCategoryLevel ? activeGroup !== null : activeBucket !== null);
  const showInlineList = inlineCategories && activeGroup !== null;

  const itemButtonClass = (id: string) =>
    [
      "editorial-title border-b border-[color:var(--hairline)] py-2.5 text-left text-[15px] transition-colors",
      activeId === id
        ? "text-[color:var(--accent)]"
        : "text-[color:var(--ink-body)] hover:text-[color:var(--ink)]",
    ].join(" ");

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
          aria-label={title}
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
                openGroup(g.type);
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
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="mb-3 w-full shrink-0 rounded-lg border border-[color:var(--hairline)] bg-white/[0.03] px-3 py-1.5 text-[12px] text-[color:var(--ink)] placeholder:text-[color:var(--ink-faint)] focus:border-[color:var(--accent-line)] focus:outline-none"
          />

          {searchResults ? (
            searchResults.length > 0 ? (
              <div className="flex flex-col">
                {searchResults.map(({ item, countryLabel }) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => pick(item.id)}
                    className={[
                      "flex flex-col border-b border-[color:var(--hairline)] py-2.5 text-left transition-colors",
                      activeId === item.id ? "text-[color:var(--accent)]" : "text-[color:var(--ink-body)] hover:text-[color:var(--ink)]",
                    ].join(" ")}
                  >
                    <span className="editorial-title text-[15px]">{item.name}</span>
                    <span className="mt-0.5 text-[10px] text-[color:var(--ink-faint)]">
                      {countryLabel}
                      {item.categoryLabel ? ` · ${item.categoryLabel}` : ""}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="py-3 text-center text-[11px] text-[color:var(--ink-faint)]">{noMatchLabel}</p>
            )
          ) : showInlineList && activeGroup ? (
            <>
              <button
                type="button"
                onClick={backToCountries}
                className="mb-3 flex items-center gap-1.5 text-[11px] text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink-body)]"
              >
                <span aria-hidden>←</span>
                <span>{title}</span>
              </button>
              <p className="editorial-kicker mb-3">{activeGroup.label}</p>
              <div className="flex flex-col">
                {ungrouped.map((it) => (
                  <button key={it.id} type="button" onClick={() => pick(it.id)} className={itemButtonClass(it.id)}>
                    {it.name}
                  </button>
                ))}
                {buckets.map((b) => (
                  <div key={b.key} className="flex flex-col">
                    <p className="mt-3 mb-1 flex items-center gap-1.5 text-[11px] text-[color:var(--ink-faint)] first:mt-0">
                      {b.dotColor && (
                        <span
                          className="inline-block h-[6px] w-[6px] shrink-0 rounded-full"
                          style={{ backgroundColor: b.dotColor }}
                          aria-hidden
                        />
                      )}
                      <span>{b.label}</span>
                    </p>
                    {b.items.map((it) => (
                      <button key={it.id} type="button" onClick={() => pick(it.id)} className={itemButtonClass(it.id)}>
                        {it.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </>
          ) : showingItems && activeGroup ? (
            <>
              <button
                type="button"
                onClick={() => (skipCategoryLevel ? backToCountries() : setSubcat(null))}
                className="mb-3 flex items-center gap-1.5 text-[11px] text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink-body)]"
              >
                <span aria-hidden>←</span>
                <span>{skipCategoryLevel ? title : activeGroup.label}</span>
              </button>
              <p className="editorial-kicker mb-3">{skipCategoryLevel ? activeGroup.label : (activeBucket?.label ?? "")}</p>
              <div className="flex flex-col">
                {skipCategoryLevel && ungrouped.map((it) => (
                  <button key={it.id} type="button" onClick={() => pick(it.id)} className={itemButtonClass(it.id)}>
                    {it.name}
                  </button>
                ))}
                {(skipCategoryLevel ? (buckets[0]?.items ?? []) : (activeBucket?.items ?? [])).map((it) => (
                  <button key={it.id} type="button" onClick={() => pick(it.id)} className={itemButtonClass(it.id)}>
                    {it.name}
                  </button>
                ))}
              </div>
            </>
          ) : activeGroup ? (
            <>
              <button
                type="button"
                onClick={backToCountries}
                className="mb-3 flex items-center gap-1.5 text-[11px] text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink-body)]"
              >
                <span aria-hidden>←</span>
                <span>{title}</span>
              </button>
              <p className="editorial-kicker mb-3">{activeGroup.label}</p>
              <div className="flex flex-col">
                {ungrouped.map((it) => (
                  <button key={it.id} type="button" onClick={() => pick(it.id)} className={itemButtonClass(it.id)}>
                    {it.name}
                  </button>
                ))}
                {buckets.map((b) => (
                  <button
                    key={b.key}
                    type="button"
                    onClick={() => setSubcat(b.key)}
                    className="flex items-center justify-between border-b border-[color:var(--hairline)] py-2.5 text-left transition-colors hover:text-[color:var(--ink)]"
                  >
                    <span className="editorial-title text-[15px] text-[color:var(--ink-body)]">{b.label}</span>
                    <span className="text-[11px] tabular-nums text-[color:var(--ink-faint)]">{b.items.length}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="editorial-kicker mb-4">{title}</p>
              <div className="flex flex-col">
                {groups.map((g) => {
                  const isDirect = g.type === "overview" && g.items.length === 1;
                  return (
                    <div key={g.type} className="flex flex-col">
                      {g.divider && (
                        <p className="editorial-kicker mt-3 mb-1 first:mt-0 text-[color:var(--ink-faint)]">
                          {g.divider}
                        </p>
                      )}
                      <button
                        type="button"
                        onClick={() => (isDirect ? pick(g.items[0].id) : openGroup(g.type))}
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
                    </div>
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
