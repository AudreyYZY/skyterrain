/**
 * 航线飞行的运动模型 —— 纯函数，不依赖 Cesium 与 React，可以在 Node 里对全部
 * 航线跑断言（见 scripts/check-route-flight.ts）。
 *
 * 解决四个老问题：
 *
 * 1. 所有航线共用同一个时长。原来镜头节拍绑死在「解说播完时航线也飞完」上，
 *    而航线距离相差 108 倍（国内中位 619 km，北京—纽约 14,652 km），同样一段
 *    ~150s 的解说，长航线的镜头地速要到 98 km/s，瓦片根本来不及加载，画面就糊。
 *    改成按距离定时长，并让取景高度跟着**峰值**地速走：地速快就飞得高，
 *    每秒扫过的画面比例保持恒定，瓦片的 LOD 需求随之下降。
 *
 * 2. 进度来自音频时钟。原来 `smoothP = max(smoothP, audio.currentTime/duration)`，
 *    媒体元素的播放位置是台阶式更新的，没有帧间插值，高地速下每一级台阶
 *    就是几公里的跳跃 —— 这是「抖」的主要来源。改成纯帧率驱动。
 *
 * 3. 曲线在航点处不连续。原来用均匀参数化的 Catmull-Rom，但传进去的插值系数
 *    是按段内弧长归一的，航点间距不均时每过一个航点切线就断一次，肉眼是「顿一下」。
 *    改成以弧长为节点的 Barry-Goldman（弦长参数化）形式，天然 C1。
 *
 * 4. 转向速率不受控。原来朝向在段内按弧长线性插值，两个挨得很近、方位差很大的
 *    航点之间会出现每秒几百度的甩头（自检实测最高 389 度/秒）。改成按「固定行进
 *    时间窗」对朝向做滑动平均，转向快慢因此只取决于时间窗，与航点疏密无关。
 */

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

// ── 常量 ──────────────────────────────────────────────────────────────

/** 期望的巡航地速（米/秒）。25 km/s 下 300 秒能飞 7,500 km，覆盖多数洲际航线。 */
const TARGET_GROUND_SPEED = 25_000;
/** 再短的航线也至少飞这么久，否则近距离航线一晃就到 */
const MIN_FLIGHT_SEC = 90;
/** 常规上限 */
const MAX_FLIGHT_SEC = 300;
/** 为压住峰值地速而延长时长时的硬上限 */
const HARD_MAX_FLIGHT_SEC = 420;

/**
 * 取景高度 ≈ 多少秒的峰值航程。相机高度决定画面覆盖的地面宽度，这个比值固定住，
 * 意味着「画面被换掉一遍所需的时间」在长短航线上大致一致。取 2.5 秒，
 * 对应自检里 0.4 的「每秒扫过多少个取景高度」，留在 0.6 的红线之内。
 */
const HEIGHT_PER_PEAK_SPEED_SEC = 2.5;
const MIN_CRUISE_HEIGHT = 42_000;
const MAX_CRUISE_HEIGHT = 320_000;

/** 每个地形/地标航点停留的目标秒数 */
export const WAYPOINT_HOLD_SEC = 1.8;
/** 停留段最多占多少进度 —— 占比越高，迁徙段就得越快，峰值地速随之抬升 */
const MAX_TOTAL_HOLD_FRAC = 0.25;

/** 迁徙段两端各用多长的比例做加减速（其余匀速）。峰值速度 = 1/(1-r) 倍平均速度。 */
const RAMP_FRAC = 0.25;

/**
 * 相邻两个停留点之间至少要飞这么久。
 *
 * 关键性质：每个迁徙段的速度与该段长度无关（段的进度份额本身就按长度分配），
 * 但加减速时间是段时长的固定比例。于是两个挨得很近的航点会得到「同样的峰值速度、
 * 极短的加减速窗口」，加速度爆掉 —— 自检实测到过 5.4 个取景高度/秒²。
 * 这里按距离把过密的停留点合并掉，保证每段至少有这么长的时间可用。
 */
const MIN_MOVE_SPAN_SEC = 8;

/** 朝向的平滑时间窗（秒）：一次大转弯至少摊在这么长的行进时间里 */
const TURN_SMOOTH_SEC = 8;

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}

/** 平滑步：两端导数为 0 */
export function smoothstep(t: number): number {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
}

/**
 * 梯形速度曲线的位置分量：两端各用 RAMP_FRAC 的比例平滑加减速，中间匀速。
 *
 * 比直接用 smoothstep 好在峰值速度低：smoothstep 的峰值是平均速度的 1.5 倍，
 * 梯形是 1/(1-r)（r=0.25 时 1.33 倍）。峰值直接决定取景高度要抬多高，
 * 所以这里每省一点都算数。
 */
export function easeTrapezoid(t: number, r = RAMP_FRAC): number {
  const x = clamp(t, 0, 1);
  if (r <= 0) return x;
  // 速度 v(u)=smoothstep(u/r) 在 [0,r] 上的积分 = r*(y³ - y⁴/2)，y=u/r
  const rampArea = (u: number) => {
    const y = clamp(u / r, 0, 1);
    return r * (y * y * y - (y * y * y * y) / 2);
  };
  const norm = 1 - r; // 全程速度积分，用于归一化
  let raw: number;
  if (x <= r) raw = rampArea(x);
  else if (x <= 1 - r) raw = rampArea(r) + (x - r);
  else raw = norm - rampArea(1 - x);
  return clamp(raw / norm, 0, 1);
}

// ── 进度 → 沿线距离 ───────────────────────────────────────────────────

interface Span {
  p0: number;
  p1: number;
  d0: number;
  d1: number;
  hold: boolean;
}

/** 把过密的停留点合并掉，保证每个迁徙段至少有 MIN_MOVE_SPAN_SEC 的时间 */
export function thinHoldIndices(
  holdIndices: number[],
  cum: number[],
  total: number,
  durationSec: number,
): number[] {
  if (holdIndices.length === 0 || total <= 0 || durationSec <= 0) return [];
  const minGap = (total * MIN_MOVE_SPAN_SEC) / durationSec;
  const kept: number[] = [];
  let lastDist = 0;
  for (const idx of holdIndices) {
    const d = cum[idx]!;
    if (d - lastDist < minGap) continue;
    if (total - d < minGap) continue; // 离终点太近也不停
    kept.push(idx);
    lastDist = d;
  }
  return kept;
}

function buildSpans(
  holdIndices: number[],
  cum: number[],
  total: number,
  holdSecEach: number,
  durationSec: number,
): Span[] {
  if (holdIndices.length === 0 || total <= 0 || durationSec <= 0) {
    return [{ p0: 0, p1: 1, d0: 0, d1: total, hold: false }];
  }
  const holdFrac = Math.min(
    holdSecEach / durationSec,
    MAX_TOTAL_HOLD_FRAC / holdIndices.length,
  );
  const spans: Span[] = [];
  const moveShare = 1 - holdFrac * holdIndices.length;
  let prevP = 0;
  let prevDist = 0;
  for (const idx of holdIndices) {
    const distHere = cum[idx]!;
    const moveFrac = ((distHere - prevDist) / total) * moveShare;
    const pMoveEnd = prevP + moveFrac;
    spans.push({ p0: prevP, p1: pMoveEnd, d0: prevDist, d1: distHere, hold: false });
    spans.push({ p0: pMoveEnd, p1: pMoveEnd + holdFrac, d0: distHere, d1: distHere, hold: true });
    prevP = pMoveEnd + holdFrac;
    prevDist = distHere;
  }
  spans.push({ p0: prevP, p1: 1, d0: prevDist, d1: total, hold: false });
  return spans;
}

/**
 * 进度 p∈[0,1] → 已飞距离（米）。
 *
 * 在每个地形/地标航点插一段「停留平台」（进度在走、距离不动），其余「迁徙段」
 * 用梯形速度曲线 —— 速度在每个停留点两侧平滑地降到 0 再升起来，
 * 而不是原来那样瞬间从巡航速跌到 0（那是「停-冲-停」顿挫感的来源）。
 * 整条映射处处连续且单调不减。
 */
export function buildRouteProgressMap(input: {
  holdIndices: number[];
  cum: number[];
  total: number;
  holdSecEach: number;
  durationSec: number;
}): (p: number) => number {
  const spans = buildSpans(
    input.holdIndices, input.cum, input.total, input.holdSecEach, input.durationSec,
  );
  const total = input.total;
  return (p: number) => {
    const q = clamp(p, 0, 1);
    if (q <= 0) return 0;
    if (q >= 1) return total;
    for (const s of spans) {
      if (q <= s.p1) {
        if (s.hold || s.p1 <= s.p0) return s.d0;
        return s.d0 + (s.d1 - s.d0) * easeTrapezoid((q - s.p0) / (s.p1 - s.p0));
      }
    }
    return total;
  };
}

/** 球面近似的地球半径，仅用于估算曲线相对折线的拉伸系数 */
const R_EARTH = 6_371_000;

function sphere(latDeg: number, lonDeg: number): Vec3 {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180;
  const c = Math.cos(lat);
  return { x: R_EARTH * c * Math.cos(lon), y: R_EARTH * c * Math.sin(lon), z: R_EARTH * Math.sin(lat) };
}

/**
 * 峰值地速（米/秒）。
 *
 * 必须量**三维曲线上**的速度，不能只量「进度→距离」的导数：Catmull-Rom 在转折处
 * 会外扩，曲线长于折线，真实镜头速度因此高于按弧长算出来的那个。取景高度由峰值
 * 决定，量错了高度就压不住画面每秒被换掉的比例。
 */
function peakCurveSpeed(
  latLon: { lat: number; lon: number }[],
  cum: number[],
  progressToDistance: (p: number) => number,
  durationSec: number,
  samples = 8000,
): number {
  const pts = latLon.map((w) => sphere(w.lat, w.lon));
  const n = pts.length;
  const at = (d: number): Vec3 => {
    let j = 0;
    while (j < n - 2 && cum[j + 1]! <= d) j++;
    const i0 = Math.max(0, j - 1), i1 = j, i2 = Math.min(n - 1, j + 1), i3 = Math.min(n - 1, j + 2);
    return catmullRomByArcLength(
      pts[i0]!, pts[i1]!, pts[i2]!, pts[i3]!,
      cum[i0]!, cum[i1]!, cum[i2]!, cum[i3]!, d,
    );
  };
  const dt = durationSec / samples;
  let peak = 0;
  let prev = at(progressToDistance(0));
  for (let i = 1; i <= samples; i++) {
    const cur = at(progressToDistance(i / samples));
    peak = Math.max(peak, Math.hypot(cur.x - prev.x, cur.y - prev.y, cur.z - prev.z) / dt);
    prev = cur;
  }
  return peak;
}

// ── 朝向 ──────────────────────────────────────────────────────────────

/** 把一串角度展开成连续序列，避免 ±π 处的跳变污染平滑 */
function unwrap(angles: number[]): number[] {
  const out = [angles[0] ?? 0];
  for (let i = 1; i < angles.length; i++) {
    let d = angles[i]! - angles[i - 1]!;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    out.push(out[i - 1]! + d);
  }
  return out;
}

/**
 * 距离 → 朝向，按固定行进距离窗做滑动平均。
 *
 * 原来朝向在段内按弧长线性插值：两个挨得很近、方位差很大的航点之间，
 * 转向速率 = 方位差 / (段长/地速)，段越短甩得越猛，自检实测到过 389 度/秒。
 * 改成按窗口平滑之后，转向快慢只取决于窗口对应的行进时间（TURN_SMOOTH_SEC），
 * 与航点疏密无关。
 */
export function buildHeadingCurve(
  cum: number[],
  headings: number[],
  total: number,
  smoothMeters: number,
  samples = 512,
): (d: number) => number {
  const unwrapped = unwrap(headings);
  const step = total / samples;

  // 先按距离等间隔重采样（段内线性）
  const raw: number[] = [];
  let seg = 0;
  for (let i = 0; i <= samples; i++) {
    const d = i * step;
    while (seg < cum.length - 2 && cum[seg + 1]! < d) seg++;
    const a = cum[seg]!;
    const b = cum[seg + 1] ?? a + 1;
    const t = b > a ? clamp((d - a) / (b - a), 0, 1) : 0;
    raw.push(unwrapped[seg]! + (unwrapped[seg + 1]! - unwrapped[seg]!) * t);
  }

  // 盒式滤波：半窗按距离折算成样本数，至少 1 个样本
  const half = Math.max(1, Math.round(smoothMeters / 2 / Math.max(1, step)));
  const smooth: number[] = [];
  for (let i = 0; i < raw.length; i++) {
    let sum = 0;
    let n = 0;
    for (let k = i - half; k <= i + half; k++) {
      sum += raw[clamp(k, 0, raw.length - 1)]!;
      n++;
    }
    smooth.push(sum / n);
  }

  return (d: number) => {
    const x = clamp(d / Math.max(1, step), 0, samples);
    const i = Math.floor(x);
    const t = x - i;
    const a = smooth[i]!;
    const b = smooth[Math.min(samples, i + 1)]!;
    return a + (b - a) * t;
  };
}

// ── 位置曲线 ──────────────────────────────────────────────────────────

/**
 * 以弧长为节点的 Catmull-Rom（Barry-Goldman 金字塔形式）。
 *
 * 均匀参数化的 Catmull-Rom 假设四个控制点等间距；航点实际间距相差几十倍，
 * 用均匀式再把段内参数按弧长归一，曲线在每个节点处的切线是断的 —— 镜头过航点
 * 就会顿一下。这里直接把累计弧长当节点，得到的曲线在节点处 C1 连续。
 */
export function catmullRomByArcLength(
  p0: Vec3, p1: Vec3, p2: Vec3, p3: Vec3,
  t0: number, t1: number, t2: number, t3: number,
  t: number,
): Vec3 {
  const lerp = (a: Vec3, b: Vec3, w: number): Vec3 => ({
    x: a.x + (b.x - a.x) * w,
    y: a.y + (b.y - a.y) * w,
    z: a.z + (b.z - a.z) * w,
  });
  // 节点重合（首尾复用控制点、或两航点距离为 0）时退化成线性，避免除零
  const safe = (num: number, den: number) => (Math.abs(den) < 1e-9 ? 0 : num / den);

  const A1 = lerp(p0, p1, safe(t - t0, t1 - t0));
  const A2 = lerp(p1, p2, safe(t - t1, t2 - t1));
  const A3 = lerp(p2, p3, safe(t - t2, t3 - t2));
  const B1 = lerp(A1, A2, safe(t - t0, t2 - t0));
  const B2 = lerp(A2, A3, safe(t - t1, t3 - t1));
  return lerp(B1, B2, safe(t - t1, t2 - t1));
}

// ── 总装 ──────────────────────────────────────────────────────────────

export interface RoutePlanInput {
  /** 每个航点的累计弧长（米） */
  cum: number[];
  /** 总弧长（米） */
  total: number;
  /** 会触发停留的航点下标（不含首尾机场） */
  holdIndices: number[];
  /** 解说估算时长（秒）。飞行时长不会短于它，解说因此不会被切 */
  narrationSec: number;
  /** 沿途地貌要求的最低取景高度（米） */
  baseHeightM: number;
}

export interface RoutePlan {
  /** 全程秒数 */
  durationSec: number;
  /** 巡航取景高度（米，离地） */
  cruiseHeightM: number;
  /** 平均地速（米/秒） */
  meanGroundSpeed: number;
  /** 峰值地速（米/秒）——取景高度由它推出 */
  peakGroundSpeed: number;
  /** 进度 → 已飞距离 */
  progressToDistance: (p: number) => number;
  /** 已飞距离 → 朝向（弧度，已展开，可直接用） */
  headingAtDistance: (d: number) => number;
}

/**
 * 定飞行时长、取景高度与整条运动曲线。
 *
 * 时长取「按距离算出来的」与「解说时长」两者的较大值：解说因此永远不会被镜头
 * 甩在后面（原来长航线是解说播完镜头才飞到三成，然后 1.5 秒冲到终点）。
 * 若按此时长算出的峰值地速会把取景高度顶到上限之上，再按比例延长时长压回来。
 */
export function planRouteFlight(
  input: RoutePlanInput & { headings: number[]; latLon: { lat: number; lon: number }[] },
): RoutePlan {
  const { cum, total, holdIndices, narrationSec, baseHeightM, headings, latLon } = input;

  const byDistance = clamp(total / TARGET_GROUND_SPEED, MIN_FLIGHT_SEC, MAX_FLIGHT_SEC);
  let durationSec = Math.max(byDistance, Math.max(0, narrationSec));

  const solve = (sec: number) => {
    const holds = thinHoldIndices(holdIndices, cum, total, sec);
    const map = buildRouteProgressMap({
      holdIndices: holds, cum, total, holdSecEach: WAYPOINT_HOLD_SEC, durationSec: sec,
    });
    return { map, peak: peakCurveSpeed(latLon, cum, map, sec) };
  };

  let { map, peak } = solve(durationSec);

  // 峰值太高 → 高度会被顶到上限，压不住每秒扫过的画面比例，改为延长时长
  const needed = peak * HEIGHT_PER_PEAK_SPEED_SEC;
  if (needed > MAX_CRUISE_HEIGHT) {
    const stretched = Math.min(HARD_MAX_FLIGHT_SEC, durationSec * (needed / MAX_CRUISE_HEIGHT));
    if (stretched > durationSec) {
      durationSec = stretched;
      ({ map, peak } = solve(durationSec));
    }
  }

  const cruiseHeightM = clamp(
    Math.max(baseHeightM, peak * HEIGHT_PER_PEAK_SPEED_SEC),
    MIN_CRUISE_HEIGHT,
    MAX_CRUISE_HEIGHT,
  );

  return {
    durationSec,
    cruiseHeightM,
    meanGroundSpeed: total / Math.max(1, durationSec),
    peakGroundSpeed: peak,
    progressToDistance: map,
    headingAtDistance: buildHeadingCurve(cum, headings, total, peak * TURN_SMOOTH_SEC),
  };
}

// ── 采样 ──────────────────────────────────────────────────────────────

export interface FlightCurve {
  /** 相机位置控制点，与航点一一对应 */
  camPoints: Vec3[];
  /** 每个航点的累计弧长（米） */
  cum: number[];
  plan: RoutePlan;
}

export interface FlightSample {
  position: Vec3;
  /** 罗盘朝向（弧度） */
  heading: number;
  /** 已飞距离（米） */
  distance: number;
  /** 当前所在航段的起点航点下标 */
  segmentIndex: number;
}

/** 在进度 p 处采样相机位姿 */
export function sampleFlight(curve: FlightCurve, p: number): FlightSample {
  const { camPoints, cum, plan } = curve;
  const n = camPoints.length;
  const distance = plan.progressToDistance(p);

  let j = 0;
  while (j < n - 2 && cum[j + 1]! <= distance) j++;

  const i0 = Math.max(0, j - 1);
  const i1 = j;
  const i2 = Math.min(n - 1, j + 1);
  const i3 = Math.min(n - 1, j + 2);

  const position = catmullRomByArcLength(
    camPoints[i0]!, camPoints[i1]!, camPoints[i2]!, camPoints[i3]!,
    cum[i0]!, cum[i1]!, cum[i2]!, cum[i3]!,
    distance,
  );

  return { position, heading: plan.headingAtDistance(distance), distance, segmentIndex: j };
}
