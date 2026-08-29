"use client";

import type { CesiumMapHandle } from "@/components/CesiumMap";
import type { CityEntry, PlaceTier } from "@/lib/places-registry";
import type { Language } from "@/lib/i18n";
import { useEffect, useRef, useState } from "react";

interface Props {
  mapRef: React.RefObject<CesiumMapHandle | null>;
  cities: CityEntry[];
  activeId: string | null;
  language: Language;
  onSelect: (id: string) => void;
}

interface Screen {
  id: string;
  name: string;
  x: number;
  y: number;
  tier: PlaceTier;
}

const POLL_MS = 400;
/** tier → 该层级开始显示的 zoomLevel（与地形标签系统同量纲，见 CesiumOverlayLabels）*/
const TIER_MIN_ZOOM: Record<PlaceTier, number> = {
  capital: 3,
  major: 3.5,
  notable: 4.5,
};

export default function CityMarkers({ mapRef, cities, activeId, language, onSelect }: Props) {
  const [screens, setScreens] = useState<Screen[]>([]);
  const hovered = useRef<string | null>(null);

  useEffect(() => {
    let alive = true;
    const tick = () => {
      const h = mapRef.current;
      if (!h) return;
      const zoom = h.getCameraState()?.zoomLevel ?? 6;
      const next: Screen[] = [];
      for (const c of cities) {
        if (zoom < TIER_MIN_ZOOM[c.tier] && c.id !== activeId && c.id !== hovered.current) continue;
        const p = h.projectToScreen(c.lat, c.lon);
        if (!p) continue;
        next.push({
          id: c.id,
          name: language === "zh-CN" ? c.nameZh : c.nameEn,
          x: p.x,
          y: p.y,
          tier: c.tier,
        });
      }
      if (alive) setScreens(next);
    };
    tick();
    const id = window.setInterval(tick, POLL_MS);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, [mapRef, cities, activeId, language]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[15]" style={{ overflow: "hidden" }}>
      {screens.map((s) => {
        const active = s.id === activeId;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(s.id)}
            onMouseEnter={() => (hovered.current = s.id)}
            onMouseLeave={() => (hovered.current = null)}
            className="pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5"
            style={{ left: s.x, top: s.y }}
          >
            <span
              className={`block rounded-full transition-all ${
                active ? "h-2.5 w-2.5 bg-[color:var(--accent)]" : "h-1.5 w-1.5 bg-white/85"
              }`}
            />
            <span
              className={`whitespace-nowrap text-[11px] transition-colors ${
                active ? "text-[color:var(--ink)]" : "text-[color:var(--ink-dim)] hover:text-[color:var(--ink)]"
              }`}
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.75)" }}
            >
              {s.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
