"use client";

import { resolveRouteWaypoints, routeCountryLabel, routeMatches } from "@/lib/routes";
import { t, type Language } from "@/lib/i18n";
import type { FlightRoute } from "@/types/route";
import { useEffect, useMemo, useState } from "react";

export interface JourneyCountry {
  slug: string;
  name: string;
}

interface JourneyBarProps {
  language: Language;
  /** 当前大洲下有航线的国家（>1 时显示国家切换）*/
  countries: JourneyCountry[];
  activeCountry: string | null;
  onCountryChange: (slug: string) => void;
  /** 已按 activeCountry 过滤好的两组航线 */
  domestic: FlightRoute[];
  international: FlightRoute[];
  activeRouteId: string | null;
  isFlying: boolean;
  preparing: boolean;
  onStart: (route: FlightRoute) => void;
  onStop: () => void;
}

/**
 * 底部航线选择器。
 * 平时是一条窄条（显示已选航线 + 开始/停止）；点开是搜索 + 国内/国际列表；
 * 选中一条航线后自动收起。可按 起点/终点/航班号/沿途地形 搜索。
 */
export default function JourneyBar({
  language,
  countries,
  activeCountry,
  onCountryChange,
  domestic,
  international,
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

  const all = useMemo(() => [...domestic, ...international], [domestic, international]);

  // 飞行中 → 选中项跟随当前航线
  useEffect(() => {
    if (activeRouteId) setSelectedId(activeRouteId);
  }, [activeRouteId]);

  // 换国家 / 列表变化后，若选中项已不在列表里则清掉
  useEffect(() => {
    if (selectedId && !all.some((r) => r.id === selectedId)) setSelectedId(null);
  }, [all, selectedId]);

  if (all.length === 0) return null;

  const selected = all.find((r) => r.id === selectedId) ?? null;
  const flyingThis = selected && activeRouteId === selected.id && (isFlying || preparing);

  const nameOf = (r: FlightRoute) => (en ? r.nameEn ?? r.name : r.name);

  const filterList = (list: FlightRoute[]) => list.filter((r) => routeMatches(r, query));
  const domFiltered = filterList(domestic);
  const intlFiltered = filterList(international);

  const pickRoute = (r: FlightRoute) => {
    setSelectedId(r.id);
    setQuery("");
    setOpen(false);
  };

  const renderItem = (route: FlightRoute, showCountries: boolean) => {
    const wps = resolveRouteWaypoints(route);
    const terrainNames = wps
      .filter((w) => w.kind === "terrain")
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
          {terrainNames.join(" · ")}
        </span>
      </button>
    );
  };

  return (
    <div className="absolute bottom-0 left-[52px] right-0 z-20 flex flex-col items-center pb-3">
      <div className="glass-panel w-full max-w-[720px] rounded-2xl px-3 py-2.5">
        {/* 窄条：已选航线 + 开始/停止 */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex min-w-0 flex-1 items-center gap-2 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-white/[0.04]"
          >
            <span className="editorial-kicker shrink-0 text-[color:var(--ink-faint)]">
              {t("journey.routes", language)}
            </span>
            <span className="truncate editorial-title text-[13px] text-[color:var(--ink)]">
              {selected ? nameOf(selected) : t("journey.pick", language)}
            </span>
            <span className="ml-auto shrink-0 text-[10px] text-[color:var(--ink-faint)]">
              {open ? "▾" : "▸"}
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

        {/* 展开：搜索 + 国家 + 国内/国际列表 */}
        {open && (
          <div className="mt-2.5 border-t border-[color:var(--hairline)] pt-2.5">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("journey.search", language)}
              className="mb-2.5 w-full rounded-lg border border-[color:var(--hairline)] bg-white/[0.03] px-3 py-1.5 text-[12px] text-[color:var(--ink)] placeholder:text-[color:var(--ink-faint)] focus:border-[color:var(--accent-line)] focus:outline-none"
            />

            {countries.length > 1 && (
              <div className="mb-2.5 flex flex-wrap gap-1.5">
                {countries.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => onCountryChange(c.slug)}
                    className={[
                      "rounded-full px-2.5 py-1 text-[11px] transition-colors",
                      c.slug === activeCountry
                        ? "bg-[color:var(--accent-soft)] text-[color:var(--accent)]"
                        : "text-[color:var(--ink-dim)] hover:text-[color:var(--ink)]",
                    ].join(" ")}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            )}

            <div className="max-h-[42vh] space-y-2 overflow-y-auto">
              {domFiltered.length > 0 && (
                <section>
                  <p className="editorial-kicker mb-1.5 text-[color:var(--ink-faint)]">
                    {t("journey.domestic", language)}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3">
                    {domFiltered.map((r) => renderItem(r, false))}
                  </div>
                </section>
              )}
              {intlFiltered.length > 0 && (
                <section>
                  <p className="editorial-kicker mb-1.5 text-[color:var(--ink-faint)]">
                    {t("journey.international", language)}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3">
                    {intlFiltered.map((r) => renderItem(r, true))}
                  </div>
                </section>
              )}
              {domFiltered.length === 0 && intlFiltered.length === 0 && (
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
