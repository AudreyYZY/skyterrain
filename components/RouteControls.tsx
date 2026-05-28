"use client";

import type { FlightRoute } from "@/types/route";
import { resolveRouteWaypoints } from "@/lib/routes";

interface RouteControlsProps {
  routes: FlightRoute[];
  activeRouteId: string | null;
  isFlying: boolean;
  disabled?: boolean;
  onStartRoute: (route: FlightRoute) => void;
  onStopRoute: () => void;
}

export default function RouteControls({
  routes,
  activeRouteId,
  isFlying,
  disabled,
  onStartRoute,
  onStopRoute,
}: RouteControlsProps) {
  return (
    <div className="mt-4 pt-4 border-t border-white/[0.03]">
      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-300/50">
        航线飞行
      </p>
      <p className="mt-1 text-[10px] leading-relaxed text-white/20">
        连续飞越，自动解说
      </p>

      <div className="mt-3 flex flex-col gap-2">
        {routes.map((route) => {
          const waypoints = resolveRouteWaypoints(route);
          const isActive = activeRouteId === route.id && isFlying;

          return (
            <div key={route.id} className="rounded-lg bg-white/[0.02] p-3">
              <p className="text-[12px] font-medium text-white/70">{route.name}</p>
              <p className="mt-1 text-[10px] leading-relaxed text-white/25">
                {waypoints.map((w) => w.name).join(" → ")}
              </p>
              <div className="mt-2.5">
                {isActive ? (
                  <button
                    type="button"
                    disabled={disabled}
                    onClick={onStopRoute}
                    className="w-full rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/50 transition hover:bg-white/[0.08] hover:text-white/70 disabled:opacity-50"
                  >
                    停止
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={disabled || isFlying}
                    onClick={() => onStartRoute(route)}
                    className="w-full rounded-lg bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium text-white/70 transition hover:bg-white/[0.1] hover:text-white/90 disabled:opacity-50"
                  >
                    开始飞行
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
