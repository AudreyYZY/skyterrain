"use client";

import type { CesiumMapHandle } from "@/components/CesiumMap";
import type { CityEntry, CityPoi } from "@/lib/places-registry";
import { getCityPois } from "@/lib/travel-pois";
import type { Language } from "@/lib/i18n";
import { useEffect, useState } from "react";

interface Props {
  mapRef: React.RefObject<CesiumMapHandle | null>;
  /** 当前选中的城市（无则不渲染） */
  city: CityEntry | null;
  language: Language;
}

interface Marker {
  key: string;
  name: string;
  x: number;
  y: number;
  isAirport: boolean;
}

const POLL_MS = 400;
/** 相机高度对应的 zoomLevel 低于此值时不显示 POI（缩太远会挤成一团） */
const MIN_ZOOM = 6;

export default function TravelPoiMarkers({ mapRef, city, language }: Props) {
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    // 该 effect 的主体是轮询 mapRef 相机状态（外部命令式 API，非纯派生），
    // 无城市时清空是同一控制流的一部分，不单独拆出渲染期间判断
    if (!city) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMarkers([]);
      return;
    }
    const pois: CityPoi[] = getCityPois(city.id);
    const airport = city.airport;
    let alive = true;

    const tick = () => {
      const h = mapRef.current;
      if (!h) return;
      const zoom = h.getCameraState()?.zoomLevel ?? 8;
      if (zoom < MIN_ZOOM) {
        if (alive) setMarkers([]);
        return;
      }
      const next: Marker[] = [];
      if (airport) {
        const p = h.projectToScreen(airport.lat, airport.lon);
        if (p) {
          next.push({
            key: `airport-${airport.iata}`,
            name: language === "zh-CN" ? airport.nameZh : airport.nameEn,
            x: p.x,
            y: p.y,
            isAirport: true,
          });
        }
      }
      for (const poi of pois) {
        const p = h.projectToScreen(poi.lat, poi.lon);
        if (!p) continue;
        next.push({
          key: `${poi.nameEn}`,
          name: language === "zh-CN" ? poi.nameZh : poi.nameEn,
          x: p.x,
          y: p.y,
          isAirport: false,
        });
      }
      if (alive) setMarkers(next);
    };

    tick();
    const id = window.setInterval(tick, POLL_MS);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, [mapRef, city, language]);

  if (markers.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[14]" style={{ overflow: "hidden" }}>
      {markers.map((m) => (
        <div
          key={m.key}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1"
          style={{ left: m.x, top: m.y }}
        >
          <span
            className={`block rounded-full ${
              m.isAirport ? "h-1.5 w-1.5 bg-[color:var(--accent)]/80" : "h-1 w-1 bg-white/60"
            }`}
          />
          <span
            className="whitespace-nowrap text-[10px] text-white/65"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
          >
            {m.isAirport ? `✈ ${m.name}` : m.name}
          </span>
        </div>
      ))}
    </div>
  );
}
