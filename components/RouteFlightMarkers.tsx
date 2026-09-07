"use client";

import type { CesiumMapHandle } from "@/components/CesiumMap";
import type { Language } from "@/lib/i18n";
import { resolveRouteWaypoints, type ResolvedWaypoint } from "@/lib/routes";
import type { FlightRoute } from "@/types/route";
import { useEffect, useMemo, useState } from "react";

interface Props {
  mapRef: React.RefObject<CesiumMapHandle | null>;
  /** 正在飞的航线（不在飞则传 null） */
  route: FlightRoute | null;
  language: Language;
}

interface Marker {
  key: string;
  name: string;
  x: number;
  y: number;
  kind: ResolvedWaypoint["kind"];
  /** 首尾机场用更醒目的样式 */
  terminal: "dep" | "arr" | null;
}

const POLL_MS = 300;

/**
 * 航线飞行时在地图上标出起降机场与沿途航点。
 *
 * 为什么需要：学习模式不渲染城市点（CityMarkers 只在旅游模式挂载），
 * 而航线飞行原本创建了一个 "route-waypoints" 标注层却从未往里加过任何标注 ——
 * 于是从北京飞到纽约，落地时地图上没有任何东西告诉你这里是纽约，
 * 巡航高度又高达几百公里，肉眼根本认不出城市，用户无法判断航线到底准不准。
 * 这个组件把「飞到哪了、终点在哪」变成可见、可核对的。
 */
export default function RouteFlightMarkers({ mapRef, route, language }: Props) {
  const waypoints = useMemo(
    () => (route ? resolveRouteWaypoints(route) : []),
    [route],
  );
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    if (!route || waypoints.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMarkers([]);
      return;
    }
    let alive = true;
    const last = waypoints.length - 1;

    const tick = () => {
      const h = mapRef.current;
      if (!h) return;
      const next: Marker[] = [];
      waypoints.forEach((w, i) => {
        const p = h.projectToScreen(w.lat, w.lon);
        if (!p) return;
        next.push({
          key: `${w.id}-${i}`,
          name: language === "zh-CN" ? w.name : w.nameEn,
          x: p.x,
          y: p.y,
          kind: w.kind,
          terminal: i === 0 ? "dep" : i === last ? "arr" : null,
        });
      });
      if (alive) setMarkers(next);
    };

    tick();
    const timer = window.setInterval(tick, POLL_MS);
    return () => {
      alive = false;
      window.clearInterval(timer);
    };
  }, [mapRef, route, waypoints, language]);

  if (markers.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {markers.map((m) => {
        const isTerminal = m.terminal !== null;
        return (
          <div
            key={m.key}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: m.x, top: m.y }}
          >
            <div className="flex flex-col items-center gap-1">
              <span
                className={
                  isTerminal
                    ? "block h-[9px] w-[9px] rounded-full border border-[color:var(--accent)] bg-[color:var(--accent)]"
                    : "block h-[5px] w-[5px] rounded-full bg-[color:var(--ink-dim)]"
                }
              />
              <span
                className={`whitespace-nowrap rounded-full px-1.5 py-0.5 text-[10px] leading-none ${
                  isTerminal
                    ? "bg-[color:var(--panel-solid)] text-[color:var(--accent)]"
                    : "bg-[color:var(--panel)] text-[color:var(--ink-dim)]"
                }`}
              >
                {isTerminal && <span className="mr-0.5">✈</span>}
                {m.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
