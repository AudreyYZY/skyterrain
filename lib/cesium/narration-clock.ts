/**
 * 航线飞行时钟 —— 让镜头跟着**真正在播放的解说**走，而不是跟着「开始请求解说」的那一刻走。
 *
 * 由来（2026-09-14 在浏览器里实测塔林—库雷萨雷）：飞行时钟在调用 onNarrate() 的同一帧就开始走，
 * 而解说要先等 /api/tts 合成完才出声 —— 缓存命中时几百毫秒，没命中时 3–14 秒（长解说更久）。
 * 排镜表（lib/route-anchors.ts）假设「解说在飞行时钟 0 秒时开口」，于是镜头整段提前：
 * 画面已经飞到萨列马岛，高亮还停在第一句。缓存预热能缩小这个差，但线上任何一次缓存未命中都会复现。
 *
 * 做法（纯函数，逐帧调用）：
 *   ① 解说还没开口 → 镜头停在起飞位等（最多 START_WAIT_MAX_MS，超时就不等了，免得 TTS 彻底失败时卡死）；
 *   ② 解说在播 → 把「解说播到第几秒」换算到排镜时间轴上，镜头时钟按误差**平滑调速**追上去：
 *      rate = 1 + 误差 / CORRECTION_TAU_MS，夹在 [RATE_MIN, rateMax] 之间。
 *      不直接把进度设成音频位置 —— audio.currentTime 是台阶式更新的，直接用会重新引入「抖」
 *      （见 CesiumMap.flyRoute 里那段注释）；平滑调速保留了帧率驱动的顺滑，只是节拍跟着解说。
 *   ③ 解说播完或失败 → 恢复 1 倍速把剩下的航程飞完。
 *
 * 加速有上限：rateMax 由调用方按当前帧的「地速 / 取景高度」算，保证追赶时也不越过 MAX_SPEED_OVER_HEIGHT
 * 的糊画面红线。追不上就落后 —— 与锚定排镜本身的限速是同一个取舍。
 */

/** 解说还没开口时，镜头最多在起飞位等多久 */
export const START_WAIT_MAX_MS = 12_000;
/** 追赶的时间常数：误差 2.5 秒时速率 ±100%（再被上下限夹住） */
export const CORRECTION_TAU_MS = 2_500;
/** 镜头最慢放到几倍速（领先于解说时） */
export const RATE_MIN = 0.4;
/** 镜头最快几倍速（落后于解说时；调用方还会按糊画面红线再压低） */
export const RATE_MAX = 1.3;
/** 单帧推进封顶（标签页切走再切回来，不要一帧走完积攒的时间） */
export const MAX_FRAME_MS = 100;

export interface NarrationSignal {
  /** 音频（或系统语音）已经开口 */
  started: boolean;
  /** 已播完、被取消或失败 —— 镜头不再等它 */
  done: boolean;
  /** 已开口时：换算到排镜时间轴上的秒数（0 = 解说第一个字） */
  planSec: number;
}

export interface FlightClock {
  /** 排镜时间轴上的毫秒数（喂给 progress = elapsedMs / durationMs） */
  elapsedMs: number;
  /** 为了等解说开口已经停了多久 */
  waitedMs: number;
  /** 这一帧用的倍速（观测用） */
  rate: number;
}

export function newFlightClock(): FlightClock {
  return { elapsedMs: 0, waitedMs: 0, rate: 1 };
}

/**
 * 推进一帧。`signal` 为 null 表示这次飞行不跟解说同步（没有解说），按 1 倍速走。
 * `rateMax` 是调用方按当前取景高度算出的「不糊」上限（≥ 1 时才允许追赶）。
 */
export function stepFlightClock(
  clock: FlightClock,
  frameMs: number,
  signal: NarrationSignal | null,
  rateMax = RATE_MAX,
): FlightClock {
  const dt = Math.min(MAX_FRAME_MS, Math.max(0, frameMs));
  if (!signal || signal.done) {
    return { elapsedMs: clock.elapsedMs + dt, waitedMs: clock.waitedMs, rate: 1 };
  }
  if (!signal.started) {
    if (clock.waitedMs < START_WAIT_MAX_MS) {
      return { elapsedMs: clock.elapsedMs, waitedMs: clock.waitedMs + dt, rate: 0 };
    }
    return { elapsedMs: clock.elapsedMs + dt, waitedMs: clock.waitedMs, rate: 1 };
  }
  const errMs = signal.planSec * 1000 - clock.elapsedMs;
  const hi = Math.max(1, Math.min(RATE_MAX, rateMax));
  const rate = Math.min(hi, Math.max(RATE_MIN, 1 + errMs / CORRECTION_TAU_MS));
  return { elapsedMs: clock.elapsedMs + dt * rate, waitedMs: clock.waitedMs, rate };
}

/**
 * 把「音频播到第几秒」换算到排镜时间轴：排镜表按字数估算的语速排的，真实音频可能快或慢一成，
 * 按总时长等比缩放，最后一句才会和最后一个航点对上。拿不到音频总时长（系统语音）时原样返回。
 */
export function audioToPlanSec(audioSec: number, audioDurationSec: number | null, planNarrationSec: number): number {
  if (!audioDurationSec || !Number.isFinite(audioDurationSec) || audioDurationSec <= 0 || planNarrationSec <= 0) {
    return audioSec;
  }
  return (audioSec / audioDurationSec) * planNarrationSec;
}
