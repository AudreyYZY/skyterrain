export interface RouteCityWaypoint {
  kind: "city";
  id: string;
  name: string;
  lat: number;
  lon: number;
}

export interface RouteTerrainWaypoint {
  kind: "terrain";
  terrainId: string;
}

export type RouteWaypoint = RouteCityWaypoint | RouteTerrainWaypoint;

export interface FlightRoute {
  id: string;
  name: string;
  description: string;
  waypoints: RouteWaypoint[];
  /** 巡航高度（米，离地） */
  cruiseHeight: number;
  /** 航段最短飞行时间（秒），模拟真实客机航速 */
  minLegDurationSec: number;
  /** 抵达航点后至少停留时间（秒），与语音取较长者 */
  dwellSecAtWaypoint: number;
  /** 巡航地速（米/秒），约 220 m/s ≈ 792 km/h */
  cruiseSpeedMps: number;
  /** 航线概览停留时间（秒）：起飞前展示全航线 */
  overviewDwellSec: number;
  /** 飞越航点时停留时间（秒）：镜头停留，讲解同时播放 */
  dwellDuringFlightSec: number;
}
