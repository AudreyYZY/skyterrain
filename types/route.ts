export interface RouteCityWaypoint {
  kind: "city";
  id: string;
  name: string;
  nameEn?: string;
  lat: number;
  lon: number;
  /** 该点是机场（出发/到达），用于飞行起降处理 */
  airport?: boolean;
}

export interface RouteTerrainWaypoint {
  kind: "terrain";
  terrainId: string;
}

export type RouteWaypoint = RouteCityWaypoint | RouteTerrainWaypoint;

/** 真实航班信息（展示用；航班号 / 机型以实际时刻表为准）*/
export interface FlightInfo {
  airline: string;
  airlineEn: string;
  flightNo: string;
  aircraft: string;
  /** 出发 / 到达机场 IATA 三字码 */
  depIata: string;
  arrIata: string;
  /** 大致航程（分钟）*/
  durationMin: number;
}

export interface FlightRoute {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  /** 出发国家 slug（= COUNTRIES[*].slug）*/
  depCountry: string;
  /** 到达国家 slug。与 depCountry 相同 → 国内航线；不同 → 国际航线 */
  arrCountry: string;
  flight?: FlightInfo;
  waypoints: RouteWaypoint[];
  /** 巡航高度（米，离地） */
  cruiseHeight: number;
  /**
   * 以下几个逐段计时参数已弃用：现在整条航线镜头匀速飞完，总时长固定
   * （见 CesiumMap `ROUTE_FLIGHT_SEC`），与解说并行。保留为可选，兼容旧 JSON。
   */
  minLegDurationSec?: number;
  dwellSecAtWaypoint?: number;
  cruiseSpeedMps?: number;
  overviewDwellSec?: number;
  dwellDuringFlightSec?: number;
}
