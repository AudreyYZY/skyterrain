/**
 * 解说句 → 航点的锚定 —— 纯函数，供离线推导脚本与运行时共用。
 *
 * 要解决的是「文字播报的地方和地图上的位置对不上」：解说是一整段连续文稿，
 * 镜头位置只由时间推进，两者之间没有任何绑定。文稿前三成的字还在讲北京，
 * 镜头已经飞到西伯利亚了。
 *
 * 做法是先给每一句找出「它在讲哪个航点」，得到一张单调不减的锚点表，
 * 之后镜头的进度映射就按这张表来排：讲到某个航点时，镜头正好到那里。
 *
 * 匹配靠航点名本身（中文还要去掉「山脉/高原/湖」这类通名后缀再试一次），
 * 匹配不到的句子沿用上一句的锚点（同一段话往往连着讲同一个地方）。
 */

import { splitSentences } from "@/lib/sentences";
import { estimateSpeechDurationSec } from "@/lib/speech";
import { ROUTE_ANCHORS } from "@/lib/route-anchors.data";
import type { Language } from "@/lib/i18n";

/** 中文地名的通名后缀 —— 去掉之后再匹配一次，「戈壁沙漠」也能命中「戈壁」 */
const ZH_GENERIC_SUFFIX =
  /(沙漠|沙地|山脉|山地|群山|走廊|谷地|河谷|大峡谷|峡谷|三角洲|半岛|群岛|列岛|诸岛|海岸|海峡|草原|盆地|高原|平原|火山区|火山|破火山口|山|湖|河|江|海|岛)$/;

export interface AnchorWaypoint {
  /** 在 resolveRouteWaypoints 结果中的下标 */
  index: number;
  name: string;
  nameEn: string;
  kind: string;
}

export interface AnchorResult {
  /** 与句子一一对应的航点下标；-1 表示该句之前没有任何命中 */
  perSentence: number[];
  /** 直接命中（非沿用上一句）的句数 */
  matched: number;
  /** 句子总数 */
  sentences: number;
  /** 命中的不同航点数 */
  distinctHits: number;
  /** 是否单调不减（解说顺序与航线顺序一致） */
  monotonic: boolean;
}

/**
 * 一句话里命中的航点下标；一句提到多个时取**最靠前**的那个。
 *
 * 取最靠前而不是最靠后：解说常在一句里连着走好几处（「掠过戈壁荒漠，再北上进入
 * 贝加尔湖一带」），这句开口时镜头该在戈壁，后面那几处是这句话说下去的过程中
 * 陆续飞到的 —— 由到下一句锚点之间的插值自然完成。取最靠后会让镜头在这句一开口
 * 就跳到句末那个地方。
 */
export function matchWaypointInSentence(
  sentence: string,
  waypoints: AnchorWaypoint[],
  lang: "zh-CN" | "en-US",
): number {
  const en = lang === "en-US";
  const hay = en ? sentence.toLowerCase() : sentence;
  for (let i = 0; i < waypoints.length; i++) {
    const w = waypoints[i]!;
    const nm = en ? w.nameEn : w.name;
    if (!nm) continue;
    if (en) {
      if (hay.includes(nm.toLowerCase())) return w.index;
      continue;
    }
    if (sentence.includes(nm)) return w.index;
    const core = nm.replace(ZH_GENERIC_SUFFIX, "");
    if (core.length >= 2 && sentence.includes(core)) return w.index;
  }
  return -1;
}

/**
 * 推导一整篇解说的锚点表。
 *
 * 沿用规则：某句没命中就跟着上一句走；开头连着几句都没命中则记 -1，
 * 由调用方决定当作起点还是留空。
 */
export function deriveAnchors(
  narration: string,
  waypoints: AnchorWaypoint[],
  lang: "zh-CN" | "en-US",
): AnchorResult {
  const sentences = splitSentences(narration);
  const perSentence: number[] = [];
  const hits = new Set<number>();
  let matched = 0;
  let last = -1;
  for (const s of sentences) {
    const hit = matchWaypointInSentence(s, waypoints, lang);
    if (hit >= 0) {
      matched++;
      hits.add(hit);
      last = hit;
    }
    perSentence.push(last);
  }
  let monotonic = true;
  for (let i = 1; i < perSentence.length; i++) {
    if (perSentence[i]! < perSentence[i - 1]!) {
      monotonic = false;
      break;
    }
  }
  return {
    perSentence,
    matched,
    sentences: sentences.length,
    distinctHits: hits.size,
    monotonic,
  };
}

/**
 * 取出某条航线某语言的锚定输入，交给 CesiumMap.flyRoute 排镜头。
 *
 * 逐句起始时间按各句字数占比切分整篇估算时长。用真实 TTS word boundary 会更准，
 * 但那要求镜头等音频合成完才能起飞；估算的误差在一两秒量级，而镜头本身还有
 * 3 秒的速度平滑窗，够用。以后要提高精度可以把真实时间点传进来替换。
 *
 * 只有学习模式有锚点表：旅游模式的解说讲的是高原反应、许可、季节、目的地城市，
 * 不描述沿途地貌，锚定对它没有意义。
 */
export function buildAnchoringForNarration(
  routeId: string,
  lang: Language,
  mode: "study" | "travel",
  narration: string,
): { anchors: number[]; sentenceStartSec: number[]; narrationSec: number } | null {
  if (mode !== "study") return null;
  const entry = ROUTE_ANCHORS[routeId]?.[lang];
  if (!entry) return null;

  const sentences = splitSentences(narration);
  // 解说改过但锚点表没跟着更新 —— 宁可不锚，也不要按错位的表排镜头
  if (sentences.length !== entry.perSentence.length) return null;

  const totalChars = sentences.reduce((a, x) => a + x.trim().length, 0);
  if (totalChars === 0) return null;
  const narrationSec = estimateSpeechDurationSec(narration, 0.88, lang);

  const sentenceStartSec: number[] = [];
  let acc = 0;
  for (const x of sentences) {
    sentenceStartSec.push((acc / totalChars) * narrationSec);
    acc += x.trim().length;
  }
  return { anchors: entry.perSentence, sentenceStartSec, narrationSec };
}
