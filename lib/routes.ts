import { ALL_ROUTES } from "@/data/routes/manifest";
import { getTerrainById } from "@/lib/terrain";
import { getTerrainEntry } from "@/lib/terrain-registry";
import { getCountryMeta } from "@/lib/regions";
import type { FlightRoute, RouteWaypoint } from "@/types/route";
import type { TerrainPoint } from "@/types/terrain";

const ROUTES: FlightRoute[] = ALL_ROUTES;

export interface ResolvedWaypoint {
  id: string;
  name: string;
  nameEn: string;
  lat: number;
  lon: number;
  /** airport = 起降机场；terrain = 地形航点；city = 其它城市；feature = 途中名字标注（海/海峡/河口…）*/
  kind: "airport" | "terrain" | "city" | "feature";
  /** 早期地形 JSON 里自带完整讲解的地形（仅部分地形有）*/
  terrain?: TerrainPoint;
  /** 地形海拔（米），用于面板显示 */
  elevation?: number;
}

export function getAllRoutes(): FlightRoute[] {
  return ROUTES;
}

export function getRouteById(id: string): FlightRoute | undefined {
  return ROUTES.find((r) => r.id === id);
}

export function isDomesticRoute(route: FlightRoute): boolean {
  return route.depCountry === route.arrCountry;
}

/** 某国家相关的航线，分国内 / 国际两组（各自按名称排序）*/
export function routesForCountry(countrySlug: string): {
  domestic: FlightRoute[];
  international: FlightRoute[];
} {
  const domestic: FlightRoute[] = [];
  const international: FlightRoute[] = [];
  for (const r of ROUTES) {
    const involvesDep = r.depCountry === countrySlug;
    const involvesArr = r.arrCountry === countrySlug;
    if (!involvesDep && !involvesArr) continue;
    if (isDomesticRoute(r)) domestic.push(r);
    else international.push(r);
  }
  const byName = (a: FlightRoute, b: FlightRoute) => a.name.localeCompare(b.name, "zh-Hans-CN");
  return { domestic: domestic.sort(byName), international: international.sort(byName) };
}

/** 某大洲下所有有航线的国家 slug（按 COUNTRIES 顺序由调用方决定，这里只去重）*/
export function routeCountriesForContinent(
  continentSlugs: string[],
): string[] {
  const withRoutes = new Set<string>();
  for (const r of ROUTES) {
    withRoutes.add(r.depCountry);
    withRoutes.add(r.arrCountry);
  }
  return continentSlugs.filter((s) => withRoutes.has(s));
}

/**
 * 航线的可搜索文本（航线名 / 城市 / 航班号 / IATA / 沿途地形），全部小写。
 * 供 JourneyBar 的搜索框按「起点终点 / 航班号 / 地形」匹配。
 */
export function routeSearchText(route: FlightRoute): string {
  const parts: string[] = [route.id, route.name];
  if (route.nameEn) parts.push(route.nameEn);
  if (route.description) parts.push(route.description);
  if (route.descriptionEn) parts.push(route.descriptionEn);
  if (route.flight) {
    parts.push(route.flight.flightNo, route.flight.depIata, route.flight.arrIata);
    parts.push(route.flight.airline, route.flight.airlineEn);
  }
  for (const wp of route.waypoints) {
    if (wp.kind === "city") {
      parts.push(wp.name);
      if (wp.nameEn) parts.push(wp.nameEn);
    } else if (wp.kind === "feature") {
      parts.push(wp.name, wp.nameEn);
    } else {
      const e = getTerrainEntry(wp.terrainId);
      if (e) parts.push(e.nameZh, e.nameEn);
    }
  }
  return parts.join(" ").toLowerCase();
}

export function routeMatches(route: FlightRoute, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const hay = routeSearchText(route);
  return q.split(/\s+/).every((tok) => hay.includes(tok));
}

/** 航线在界面上显示的「出发国 → 到达国」标签（国际航线用）*/
export function routeCountryLabel(route: FlightRoute, lang: "zh-CN" | "en-US"): string {
  const dep = getCountryMeta(route.depCountry);
  const arr = getCountryMeta(route.arrCountry);
  const nm = (m: ReturnType<typeof getCountryMeta>) =>
    m ? (lang === "zh-CN" ? m.name : m.nameEn) : "";
  return `${nm(dep)} → ${nm(arr)}`;
}

export function resolveRouteWaypoints(route: FlightRoute): ResolvedWaypoint[] {
  return route.waypoints
    .map((wp) => resolveWaypoint(wp))
    .filter((wp): wp is ResolvedWaypoint => wp !== null);
}

function resolveWaypoint(wp: RouteWaypoint): ResolvedWaypoint | null {
  if (wp.kind === "city") {
    return {
      id: wp.id,
      name: wp.name,
      nameEn: wp.nameEn ?? wp.name,
      lat: wp.lat,
      lon: wp.lon,
      kind: wp.airport ? "airport" : "city",
    };
  }

  if (wp.kind === "feature") {
    return {
      id: `feature:${wp.name}`,
      name: wp.name,
      nameEn: wp.nameEn,
      lat: wp.lat,
      lon: wp.lon,
      kind: "feature",
    };
  }

  // 优先用早期地形 JSON（含完整讲解 / cards / flyoverCue）
  const terrain = getTerrainById(wp.terrainId);
  if (terrain) {
    return {
      id: terrain.id,
      name: terrain.name,
      nameEn: getTerrainEntry(terrain.id)?.nameEn ?? terrain.name,
      lat: terrain.lat,
      lon: terrain.lon,
      kind: "terrain",
      terrain,
      elevation: terrain.elevation,
    };
  }

  // 其余地形从注册表取位置（讲解走 resolveLesson）
  const entry = getTerrainEntry(wp.terrainId);
  if (!entry) return null;
  return {
    id: entry.id,
    name: entry.nameZh,
    nameEn: entry.nameEn,
    lat: entry.landmark.lat,
    lon: entry.landmark.lon,
    kind: "terrain",
    elevation: entry.landmark.elevation,
  };
}
