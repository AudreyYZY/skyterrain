"use client";

import { resolveRouteWaypoints } from "@/lib/routes";
import { t, type Language } from "@/lib/i18n";
import type { FlightRoute } from "@/types/route";
import { useState } from "react";

interface JourneyBarProps {
  language: Language;
  routes: FlightRoute[];
  activeRouteId: string | null;
  isFlying: boolean;
  preparing: boolean;
  onStart: (route: FlightRoute) => void;
  onStop: () => void;
}

/**
 * 底部航线胶片条。横向滚动的航线卡片，可整条收起。
 */
export default function JourneyBar({
  language,
  routes,
  activeRouteId,
  isFlying,
  preparing,
  onStart,
  onStop,
}: JourneyBarProps) {
  const [collapsed, setCollapsed] = useState(false);

  if (routes.length === 0) return null;

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
        <div className="glass-panel w-full max-w-[900px] rounded-2xl px-3 py-2.5">
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

          <div className="filmstrip-scroll flex gap-2 overflow-x-auto">
            {routes.map((route) => {
              const wps = resolveRouteWaypoints(route);
              const active = activeRouteId === route.id && (isFlying || preparing);
              const en = language === "en-US";
              const terrainNames = wps
                .filter((w) => w.kind === "terrain")
                .map((w) => (en ? w.nameEn : w.name));
              return (
                <div
                  key={route.id}
                  className={[
                    "flex w-[248px] shrink-0 flex-col rounded-xl border p-3",
                    active
                      ? "border-[color:var(--accent-line)] bg-[color:var(--accent-soft)]"
                      : "border-[color:var(--hairline)] bg-white/[0.02]",
                  ].join(" ")}
                >
                  <p className="editorial-title text-[14px] text-[color:var(--ink)]">
                    {en ? route.nameEn ?? route.name : route.name}
                  </p>
                  {route.flight && (
                    <p className="mt-0.5 text-[10px] text-[color:var(--ink-dim)]">
                      {(en ? route.flight.airlineEn : route.flight.airline)} · {route.flight.flightNo} · {route.flight.aircraft}
                    </p>
                  )}
                  <p className="mt-1 line-clamp-1 text-[10px] text-[color:var(--ink-faint)]">
                    {terrainNames.join(" · ")}
                  </p>
                  <button
                    type="button"
                    onClick={() => (active ? onStop() : onStart(route))}
                    disabled={preparing && !active}
                    className={[
                      "mt-2.5 rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors disabled:opacity-40",
                      active
                        ? "border border-[color:var(--hairline)] text-[color:var(--ink-body)] hover:bg-white/[0.06]"
                        : "border border-[color:var(--accent-line)] text-[color:var(--accent)] hover:bg-[color:var(--accent-soft)]",
                    ].join(" ")}
                  >
                    {active
                      ? preparing
                        ? t("journey.preparing", language)
                        : t("journey.stop", language)
                      : t("journey.start", language)}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
