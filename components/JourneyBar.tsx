"use client";

import { resolveRouteWaypoints, routeCountryLabel } from "@/lib/routes";
import { t, type Language } from "@/lib/i18n";
import type { FlightRoute } from "@/types/route";
import { useState } from "react";

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
 * 底部航线面板。
 * - 顶部：大洲下各国切换（当地图在某国 / 选了某国地形时自动定位到该国）
 * - 国内航线 / 国际航线两个分区，网格平铺、一次看全，不横向滚动
 * - 只显示与 activeCountry 相关的航线
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
  const [collapsed, setCollapsed] = useState(false);
  const en = language === "en-US";

  if (domestic.length === 0 && international.length === 0) return null;

  const renderRoute = (route: FlightRoute, showCountries: boolean) => {
    const wps = resolveRouteWaypoints(route);
    const active = activeRouteId === route.id && (isFlying || preparing);
    const terrainNames = wps
      .filter((w) => w.kind === "terrain")
      .map((w) => (en ? w.nameEn : w.name));
    return (
      <button
        key={route.id}
        type="button"
        onClick={() => (active ? onStop() : onStart(route))}
        disabled={preparing && !active}
        className={[
          "flex flex-col rounded-lg border p-2.5 text-left transition-colors disabled:opacity-40",
          active
            ? "border-[color:var(--accent-line)] bg-[color:var(--accent-soft)]"
            : "border-[color:var(--hairline)] bg-white/[0.02] hover:bg-white/[0.05]",
        ].join(" ")}
      >
        <span className="flex items-center justify-between gap-2">
          <span className="editorial-title text-[13px] text-[color:var(--ink)]">
            {en ? route.nameEn ?? route.name : route.name}
          </span>
          <span
            className={[
              "shrink-0 text-[10px] font-medium",
              active ? "text-[color:var(--ink-body)]" : "text-[color:var(--accent)]",
            ].join(" ")}
          >
            {active
              ? preparing
                ? t("journey.preparing", language)
                : t("journey.stop", language)
              : t("journey.start", language)}
          </span>
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
      {collapsed ? (
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="glass-panel rounded-full px-4 py-1.5 text-[11px] text-[color:var(--ink-dim)] transition-colors hover:text-[color:var(--ink)]"
        >
          {t("journey.routes", language)}
        </button>
      ) : (
        <div className="glass-panel max-h-[46vh] w-full max-w-[960px] overflow-y-auto rounded-2xl px-3.5 py-3">
          <div className="mb-2 flex items-center justify-between px-1">
            <span className="editorial-kicker">{t("journey.routes", language)}</span>
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              className="text-[10px] text-[color:var(--ink-faint)] transition-colors hover:text-[color:var(--ink-body)]"
            >
              {t("journey.collapse", language)}
            </button>
          </div>

          {countries.length > 1 && (
            <div className="mb-2.5 flex flex-wrap gap-1.5 px-1">
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

          {domestic.length > 0 && (
            <section className="mb-2 px-1">
              <p className="editorial-kicker mb-1.5 text-[color:var(--ink-faint)]">
                {t("journey.domestic", language)}
              </p>
              <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3">
                {domestic.map((r) => renderRoute(r, false))}
              </div>
            </section>
          )}

          {international.length > 0 && (
            <section className="px-1">
              <p className="editorial-kicker mb-1.5 text-[color:var(--ink-faint)]">
                {t("journey.international", language)}
              </p>
              <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3">
                {international.map((r) => renderRoute(r, true))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
