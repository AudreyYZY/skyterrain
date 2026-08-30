"use client";

import { resolveRouteWaypoints, routeCountryLabel, routeMatches } from "@/lib/routes";
import { t, type Language } from "@/lib/i18n";
import type { FlightRoute } from "@/types/route";
import { useEffect, useMemo, useState } from "react";

export interface JourneyGroup {
  slug: string;
  name: string;
  domestic: FlightRoute[];
  international: FlightRoute[];
}

interface JourneyBarProps {
  language: Language;
  /** 当前大洲下每个有航线的国家一组 */
  groups: JourneyGroup[];
  /** 聚焦的国家 slug；null = 显示全部国家 */
  activeCountry: string | null;
  /** 传 null 表示「全部」*/
  onCountryChange: (slug: string | null) => void;
  activeRouteId: string | null;
  isFlying: boolean;
  preparing: boolean;
  onStart: (route: FlightRoute) => void;
  onStop: () => void;
}

/**
 * 底部航线飞行入口。
 * 平时是一条窄条：说明「这是什么」+ 已选航线 + 开始/停止；
 * 点开 = 搜索 + 国家筛选 + 按国家分组的 国内/国际 列表；选中一条后收起。
 */
export default function JourneyBar({
  language,
  groups,
  activeCountry,
  onCountryChange,
  activeRouteId,
  isFlying,
  preparing,
  onStart,
  onStop,
}: JourneyBarProps) {
  const en = language === "en-US";
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const allRoutes = useMemo(
    () => groups.flatMap((g) => [...g.domestic, ...g.international]),
    [groups],
  );
  const totalCount = allRoutes.length;

  // 飞行中 → 选中项跟随当前航线
  useEffect(() => {
    if (activeRouteId) setSelectedId(activeRouteId);
  }, [activeRouteId]);

  // 列表变化后，若选中项已不在列表里则清掉
  useEffect(() => {
    if (selectedId && !allRoutes.some((r) => r.id === selectedId)) setSelectedId(null);
  }, [allRoutes, selectedId]);

  if (totalCount === 0) return null;

  const selected = allRoutes.find((r) => r.id === selectedId) ?? null;
  const flyingThis = selected && activeRouteId === selected.id && (isFlying || preparing);
  const nameOf = (r: FlightRoute) => (en ? r.nameEn ?? r.name : r.name);

  const shownGroups = activeCountry
    ? groups.filter((g) => g.slug === activeCountry)
    : groups;
  const multiCountry = shownGroups.length > 1;

  const pickRoute = (r: FlightRoute) => {
    setSelectedId(r.id);
    setQuery("");
    setOpen(false);
  };

  const renderItem = (route: FlightRoute, showCountries: boolean) => {
    const wps = resolveRouteWaypoints(route);
    const names = wps
      .filter((w) => w.kind === "terrain" || w.kind === "feature")
      .map((w) => (en ? w.nameEn : w.name));
    return (
      <button
        key={route.id}
        type="button"
        onClick={() => pickRoute(route)}
        className={[
          "flex w-full flex-col rounded-lg border p-2.5 text-left transition-colors",
          route.id === selectedId
            ? "border-[color:var(--accent-line)] bg-[color:var(--accent-soft)]"
            : "border-[color:var(--hairline)] bg-white/[0.02] hover:bg-white/[0.05]",
        ].join(" ")}
      >
        <span className="editorial-title text-[13px] text-[color:var(--ink)]">
          {nameOf(route)}
        </span>
        {showCountries && (
          <span className="mt-0.5 text-[10px] text-[color:var(--ink-dim)]">
            {routeCountryLabel(route, language)}
          </span>
        )}
        <span className="mt-0.5 line-clamp-1 text-[10px] text-[color:var(--ink-faint)]">
          {route.flight ? `${route.flight.flightNo} · ` : ""}
          {names.join(" · ")}
        </span>
      </button>
    );
  };

  const renderGroupSections = (g: JourneyGroup) => {
    const dom = g.domestic.filter((r) => routeMatches(r, query));
    const intl = g.international.filter((r) => routeMatches(r, query));
    if (dom.length === 0 && intl.length === 0) return null;
    return (
      <div key={g.slug} className="space-y-2">
        {multiCountry && (
          <p className="editorial-title text-[13px] text-[color:var(--ink-body)]">{g.name}</p>
        )}
        {dom.length > 0 && (
          <section>
            <p className="editorial-kicker mb-1.5 text-[color:var(--ink-faint)]">
              {t("journey.domestic", language)}
            </p>
            <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3">
              {dom.map((r) => renderItem(r, false))}
            </div>
          </section>
        )}
        {intl.length > 0 && (
          <section>
            <p className="editorial-kicker mb-1.5 text-[color:var(--ink-faint)]">
              {t("journey.international", language)}
            </p>
            <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3">
              {intl.map((r) => renderItem(r, true))}
            </div>
          </section>
        )}
      </div>
    );
  };

  const anyMatch = shownGroups.some(
    (g) =>
      g.domestic.some((r) => routeMatches(r, query)) ||
      g.international.some((r) => routeMatches(r, query)),
  );

  return (
    <div className="absolute bottom-0 left-[52px] right-0 z-20 flex flex-col items-center pb-3">
      <div className="glass-panel w-full max-w-[760px] rounded-2xl px-3 py-2.5">
        {/* 窄条 */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex min-w-0 flex-1 items-center gap-2.5 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-white/[0.04]"
          >
            <span className="shrink-0 text-[color:var(--accent)]">✈</span>
            {selected ? (
              <span className="truncate editorial-title text-[13px] text-[color:var(--ink)]">
                {nameOf(selected)}
              </span>
            ) : (
              <span className="min-w-0">
                <span className="editorial-title text-[13px] text-[color:var(--ink)]">
                  {t("journey.title", language)}
                </span>
                <span className="ml-2 text-[11px] text-[color:var(--ink-faint)]">
                  {t("journey.hint", language)}
                </span>
              </span>
            )}
            <span className="ml-auto flex shrink-0 items-center gap-1.5">
              {!selected && (
                <span className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[10px] tabular-nums text-[color:var(--ink-dim)]">
                  {totalCount}
                </span>
              )}
              <span className="text-[10px] text-[color:var(--ink-faint)]">{open ? "▾" : "▸"}</span>
            </span>
          </button>

          {selected && (
            <button
              type="button"
              onClick={() => (flyingThis ? onStop() : onStart(selected))}
              disabled={preparing && !flyingThis}
              className={[
                "shrink-0 rounded-full border px-3.5 py-1.5 text-[11px] font-medium transition-colors disabled:opacity-40",
                flyingThis
                  ? "border-[color:var(--hairline)] text-[color:var(--ink-body)] hover:bg-white/[0.06]"
                  : "border-[color:var(--accent-line)] text-[color:var(--accent)] hover:bg-[color:var(--accent-soft)]",
              ].join(" ")}
            >
              {flyingThis
                ? preparing
                  ? t("journey.preparing", language)
                  : t("journey.stop", language)
                : t("journey.start", language)}
            </button>
          )}
        </div>

        {/* 展开 */}
        {open && (
          <div className="mt-2.5 border-t border-[color:var(--hairline)] pt-2.5">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("journey.search", language)}
              className="mb-2.5 w-full rounded-lg border border-[color:var(--hairline)] bg-white/[0.03] px-3 py-1.5 text-[12px] text-[color:var(--ink)] placeholder:text-[color:var(--ink-faint)] focus:border-[color:var(--accent-line)] focus:outline-none"
            />

            {groups.length > 1 && (
              <div className="mb-2.5 flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => onCountryChange(null)}
                  className={[
                    "rounded-full px-2.5 py-1 text-[11px] transition-colors",
                    activeCountry === null
                      ? "bg-[color:var(--accent-soft)] text-[color:var(--accent)]"
                      : "text-[color:var(--ink-dim)] hover:text-[color:var(--ink)]",
                  ].join(" ")}
                >
                  {t("journey.all", language)}
                </button>
                {groups.map((g) => (
                  <button
                    key={g.slug}
                    type="button"
                    onClick={() => onCountryChange(g.slug === activeCountry ? null : g.slug)}
                    className={[
                      "rounded-full px-2.5 py-1 text-[11px] transition-colors",
                      g.slug === activeCountry
                        ? "bg-[color:var(--accent-soft)] text-[color:var(--accent)]"
                        : "text-[color:var(--ink-dim)] hover:text-[color:var(--ink)]",
                    ].join(" ")}
                  >
                    {g.name}
                  </button>
                ))}
              </div>
            )}

            <div className="max-h-[42vh] space-y-3 overflow-y-auto">
              {anyMatch ? (
                shownGroups.map(renderGroupSections)
              ) : (
                <p className="py-3 text-center text-[11px] text-[color:var(--ink-faint)]">
                  {t("journey.no_match", language)}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
