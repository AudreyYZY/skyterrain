import pekUrc from "@/data/routes/pek-urc.json";
import ctuLxa from "@/data/routes/ctu-lxa.json";
import canLxa from "@/data/routes/can-lxa.json";
import urcKhg from "@/data/routes/urc-khg.json";
import { getTerrainById } from "@/lib/terrain";
import { getTerrainEntry } from "@/lib/terrain-registry";
import type { FlightRoute, RouteWaypoint } from "@/types/route";
import type { TerrainPoint } from "@/types/terrain";

const ROUTES: FlightRoute[] = [
  pekUrc as FlightRoute,
  ctuLxa as FlightRoute,
  canLxa as FlightRoute,
  urcKhg as FlightRoute,
];

export interface ResolvedWaypoint {
  id: string;
  name: string;
  nameEn: string;
  lat: number;
  lon: number;
  /** airport = 起降机场；terrain = 地形航点；city = 其它城市 */
  kind: "airport" | "terrain" | "city";
  /** 新疆 json 里带完整讲解的地形（仅部分地形有）*/
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

  // 优先用新疆 json（含完整讲解 / cards / flyoverCue）
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
