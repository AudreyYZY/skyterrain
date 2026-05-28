import northXinjiang from "@/data/routes/north-xinjiang.json";
import pamirAdventure from "@/data/routes/pamir-adventure.json";
import turpanFlaming from "@/data/routes/turpan-flaming.json";
import { getTerrainById } from "@/lib/terrain";
import type { FlightRoute, RouteWaypoint } from "@/types/route";
import type { TerrainPoint } from "@/types/terrain";

const ROUTES: FlightRoute[] = [
  northXinjiang as FlightRoute,
  pamirAdventure as FlightRoute,
  turpanFlaming as FlightRoute,
];

export interface ResolvedWaypoint {
  id: string;
  name: string;
  lat: number;
  lon: number;
  terrain?: TerrainPoint;
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
      lat: wp.lat,
      lon: wp.lon,
    };
  }

  const terrain = getTerrainById(wp.terrainId);
  if (!terrain) return null;

  return {
    id: terrain.id,
    name: terrain.name,
    lat: terrain.lat,
    lon: terrain.lon,
    terrain,
  };
}
