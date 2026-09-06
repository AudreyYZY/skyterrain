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

// ── 按解说锚点排的进度映射 ────────────────────────────────────────────

/**
 * 一段锚点连续相同的句子在整段解说里占的时间，前多少比例用来「停下来看」，
 * 其余用来飞向下一个锚点。取 0.35：讲到某个地方时先停着看一会儿，
 * 再一边说完这段一边飞过去，正好在下一句开口时到位。
 */
const ANCHOR_HOLD_FRAC = 0.35;

/** 限速后抹平速度突变的时间窗（秒）——直接决定加速度上限 */
const SPEED_SMOOTH_SEC = 3;

export interface AnchoredMapInput {
  /** 每句话锚在哪个航点（下标），长度 = 句数，单调不减 */
  anchors: number[];
  /** 每句话的起始时间（秒），长度 = 句数 */
  sentenceStartSec: number[];
  /** 解说总时长（秒） */
  narrationSec: number;
  cum: number[];
  total: number;
  durationSec: number;
}

/**
 * 进度 → 距离，按解说锚点排：讲到某个航点时，镜头正好在那里。
 *
 * 这是「文字播报的地方和地图上的位置对不上」的正解 —— 原来镜头位置只由时间
 * 均匀推进，与解说内容毫无关系，文稿前三成还在讲北京，镜头已经到西伯利亚了。
 *
 * 排法：把锚点相同的连续句子合成一「段」，段首镜头必须已经到达该航点，
 * 段的前 ANCHOR_HOLD_FRAC 停住看，剩下的时间飞向下一段的航点，
 * 恰好在下一段第一句开口时到位。解说播完后若还有航程，匀速收到终点。
 */
export function buildAnchoredProgressMap(
  input: AnchoredMapInput & { maxAlongSpeed: number },
): { map: (p: number) => number; reachedTotal: boolean } {
  const { anchors, sentenceStartSec, narrationSec, cum, total, durationSec, maxAlongSpeed } = input;
  const n = anchors.length;
  if (n === 0 || n !== sentenceStartSec.length || durationSec <= 0 || total <= 0) {
    return { map: (p: number) => clamp(p, 0, 1) * total, reachedTotal: true };
  }

  // 锚点相同的连续句子合成一段
  const runs: { anchor: number; tStart: number }[] = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || anchors[i] !== anchors[i - 1]) {
      runs.push({ anchor: anchors[i]!, tStart: sentenceStartSec[i]! });
    }
  }

  const pts: { t: number; d: number }[] = [{ t: 0, d: 0 }];
  const pushPt = (t: number, d: number) => {
    const last = pts[pts.length - 1]!;
    // 时间/距离都不允许回退；同一时刻重复给点则以后者为准
    const tt = Math.max(last.t, t);
    const dd = Math.max(last.d, d);
    if (tt === last.t) last.d = dd;
    else pts.push({ t: tt, d: dd });
  };

  for (let i = 0; i < runs.length; i++) {
    const run = runs[i]!;
    const tEnd = i + 1 < runs.length ? runs[i + 1]!.tStart : narrationSec;
    const d = cum[Math.min(run.anchor, cum.length - 1)] ?? 0;
    pushPt(run.tStart, d);                                        // 到位
    pushPt(run.tStart + (tEnd - run.tStart) * ANCHOR_HOLD_FRAC, d); // 停着看
  }
  pushPt(durationSec, total);

  const idealAt = (t: number): number => {
    if (t <= 0) return 0;
    if (t >= durationSec) return total;
    for (let i = 1; i < pts.length; i++) {
      const b = pts[i]!;
      if (t <= b.t) {
        const a = pts[i - 1]!;
        if (b.t <= a.t || b.d === a.d) return a.d;
        return a.d + (b.d - a.d) * easeTrapezoid((t - a.t) / (b.t - a.t));
      }
    }
    return total;
  };

  // 限速。
  //
  // 严格按解说排镜头在物理上是走不通的：解说会在两句之间从一个地方跳到三千公里
  // 外的另一个地方，照排镜头地速要到每秒几百公里（自检实测最高 460 km/s），
  // 那不是画面是糊团。这里把速度卡在「不锚定时本来就会达到的峰值」以内 ——
  // 锚定改的是「什么时候在哪」，不该让镜头飞得更快。
  //
  // 代价是文字跳得太急时镜头会落在后面，之后利用停留段追回来。这是有意的取舍：
  // 宁可短暂不同步，也不要一段糊掉的画面。
  const SAMPLES = 2000;
  const dt = durationSec / SAMPLES;
  const step = Math.max(1, maxAlongSpeed) * dt;
  const raw = new Float64Array(SAMPLES + 1);
  for (let i = 1; i <= SAMPLES; i++) {
    const ideal = idealAt(i * dt);
    raw[i] = Math.min(Math.max(ideal, raw[i - 1]!), raw[i - 1]! + step);
  }

  // 限速会把速度削成「顶着上限跑 → 追上理想曲线后戛然而止」的方波，
  // 加速度因此爆掉（自检实测最高 17 个取景高度/秒²）。用时间窗做滑动平均把
  // 速度变化摊开；均值滤波不破坏单调性，边界按端值补齐以免把终点拉回来。
  const hw = Math.max(1, Math.round(SPEED_SMOOTH_SEC / 2 / dt));
  const table = new Float64Array(SAMPLES + 1);
  let acc = 0;
  for (let k = -hw; k <= hw; k++) acc += raw[clamp(k, 0, SAMPLES)]!;
  const win = 2 * hw + 1;
  for (let i = 0; i <= SAMPLES; i++) {
    table[i] = acc / win;
    acc -= raw[clamp(i - hw, 0, SAMPLES)]!;
    acc += raw[clamp(i + hw + 1, 0, SAMPLES)]!;
  }
  table[0] = 0;
  for (let i = 1; i <= SAMPLES; i++) if (table[i]! < table[i - 1]!) table[i] = table[i - 1]!;

  // 滑动平均会把终点略微拉回来。差得少就整体按比例拉满（单调性与平滑性都不破坏，
  // 距离只被拉伸千分之几）；差得多说明限速下本来就飞不完，交给上层延长时长。
  const shortfall = total - table[SAMPLES]!;
  const reachedTotal = shortfall <= total * 0.02;
  if (reachedTotal && shortfall > 0 && table[SAMPLES]! > 0) {
    const k = total / table[SAMPLES]!;
    for (let i = 0; i <= SAMPLES; i++) table[i] *= k;
  }

  return {
    reachedTotal,
    map: (p: number) => {
      const x = clamp(p, 0, 1) * SAMPLES;
      const i = Math.floor(x);
      if (i >= SAMPLES) return table[SAMPLES]!;
      const a = table[i]!;
      return a + (table[i + 1]! - a) * (x - i);
    },
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

/** 有锚点与逐句时间时，镜头按解说内容排；缺任一项则退回按航点均匀停留 */
export interface RouteAnchoring {
  anchors: number[];
  sentenceStartSec: number[];
  narrationSec: number;
}

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
  /** 解说锚点（可选）。给了就按解说排镜头，否则按航点均匀停留 */
  anchoring?: RouteAnchoring | null;
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
  const { cum, total, holdIndices, narrationSec, baseHeightM, headings, latLon, anchoring } = input;

  const byDistance = clamp(total / TARGET_GROUND_SPEED, MIN_FLIGHT_SEC, MAX_FLIGHT_SEC);
  let durationSec = Math.max(byDistance, Math.max(0, narrationSec));

  /** 不锚定时的均匀映射，同时用作锚定映射的限速基准 */
  const uniformMap = (sec: number) =>
    buildRouteProgressMap({
      holdIndices: thinHoldIndices(holdIndices, cum, total, sec),
      cum,
      total,
      holdSecEach: WAYPOINT_HOLD_SEC,
      durationSec: sec,
    });

  /** 沿线（非三维曲线）的最大推进速度，供限速用 */
  const maxAlongSpeedOf = (f: (p: number) => number, sec: number, samples = 2000) => {
    let peakV = 0;
    let prev = f(0);
    for (let i = 1; i <= samples; i++) {
      const cur = f(i / samples);
      peakV = Math.max(peakV, (cur - prev) / (sec / samples));
      prev = cur;
    }
    return peakV;
  };

  let reachedTotal = true;
  const solve = (sec: number) => {
    const uni = uniformMap(sec);
    if (!anchoring) {
      reachedTotal = true;
      return { map: uni, peak: peakCurveSpeed(latLon, cum, uni, sec) };
    }
    const limit = maxAlongSpeedOf(uni, sec);
    const built = buildAnchoredProgressMap({
      ...anchoring, cum, total, durationSec: sec, maxAlongSpeed: limit,
    });
    reachedTotal = built.reachedTotal;
    return { map: built.map, peak: peakCurveSpeed(latLon, cum, built.map, sec) };
  };

  let { map, peak } = solve(durationSec);

  // 限速之后没能飞到终点 → 延长时长（解说时间点不变，多出来的时间全给收尾航段）
  if (!reachedTotal && durationSec < HARD_MAX_FLIGHT_SEC) {
    durationSec = Math.min(HARD_MAX_FLIGHT_SEC, durationSec * 1.6);
    ({ map, peak } = solve(durationSec));
  }

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
