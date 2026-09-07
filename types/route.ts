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

/**
 * 只作飞行途中的名字标注（解说里提到、但不在地形注册表里的地点：
 * 海 / 海峡 / 河口 / 小地物）。不停镜头、不进目录，纯粹让飞行途中「知道在哪」。
 */
export interface RouteFeatureWaypoint {
  kind: "feature";
  name: string;
  nameEn: string;
  lat: number;
  lon: number;
}

export type RouteWaypoint =
  | RouteCityWaypoint
  | RouteTerrainWaypoint
  | RouteFeatureWaypoint;

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

export interface RouteSource {
  /** 核实所依据的来源（航司官网 / 航班追踪站 / 机场时刻表等） */
  ref: string;
  /** 核实日期 YYYY-MM-DD */
  checkedOn: string;
  /**
   * 核实结论。缺省视为 "verified"。
   *
   * "wrong" = 查过了，且查明记录里的航班信息不对（航班号不飞这条航线、
   * 实际是经停航班、落地机场不同等），但暂时没找到可靠的替代航班号。
   * 这类同样按「未核实」处理：界面与搜索都不显示航班号/机型。
   * 单独留这个状态是为了**记住已经查过**，避免下一轮重复劳动。
   */
  status?: "verified" | "wrong";
  /** 核实到的要点，便于下次比对（如「每日执飞，11h05m，777-300ER」） */
  note?: string;
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
  /**
   * 航班信息的核查留痕：核实用的来源 + 核实日期（YYYY-MM-DD）。
   *
   * 城市与地形注册表一直强制 `source`，航线此前是唯一没有的一档 —— 于是
   * 「这条航线是真的吗、机型对不对」没法离线回答，只能重新上网查。
   * 实测确有失效案例：上海—奥克兰 MU779 的机型原记为 787-9，实际是 777-300ER。
   *
   * **航班号、机型、时长都是核实当日的快照**，航司改期换机不会自动同步；
   * checkedOn 就是用来判断这份快照有多旧的。
   */
  source?: RouteSource;
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
