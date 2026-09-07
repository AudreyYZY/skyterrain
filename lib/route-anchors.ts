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

/**
 * 去掉通名后剩下的这些词太常见，不能拿来判定「讲到哪了」：
 *「长江三角洲」剩「长江」，于是每一句提到长江的话都被判成已经飞到入海口
 *（成都—上海几乎每句都在讲长江）；「日本海」剩「日本」同理。
 */
const ZH_CORE_STOPWORDS = new Set(["长江", "黄河", "珠江", "日本", "中国"]);

/** 中文地名的通名后缀 —— 去掉之后再匹配一次，「戈壁沙漠」也能命中「戈壁」 */
const ZH_GENERIC_SUFFIX =
  /(地质公园|国家公园|自然保护区|钙化梯田|梯田|沙漠|沙地|山脉|山地|山系|群山|走廊|谷地|河谷|大峡谷|峡谷|三角洲|半岛|群岛|列岛|诸岛|海岸|沿岸|沿海|海峡|草原|盆地|高原|台地|平原|低地|丘陵|湿地|沼泽|火山区|火山|破火山口|冰川|冰帽|冰原|冰盖|洞穴|溶洞|海蚀拱|山|湖|河|江|海|岛)$/;

/** 名字末尾的括注（「戈壁（蒙古）」「Gobi Desert (Mongolia)」）—— 匹配前先去掉 */
const PARENTHETICAL_SUFFIX = /[（(][^）)]*[）)]\s*$/;

/**
 * 去掉通名后剩下的这些词太常见，不能拿来判定「讲到哪了」：
 * 「North Sea」剩「North」，那么「runs north-west across…」这种开场白
 * 就会被判成已经飞到北海，整篇解说的锚点顺序随之乱掉。
 */
const EN_CORE_STOPWORDS = new Set([
  "north", "south", "east", "west", "central", "upper", "lower", "inner",
  "outer", "great", "new", "red", "black", "white", "yellow", "dead", "high",
  "low", "big", "little", "long", "deep", "blue", "green", "old", "gulf",
]);

/** 英文地名的通名后缀 —— 去掉之后再匹配一次，「Gobi Desert」也能命中「Gobi」 */
const EN_GENERIC_SUFFIX =
  / (?:UNESCO Global Geopark|Global Geopark|Geopark|National Park|National Monument|Natural Monument|Nature Reserve|Desert|Mountains|Range|Plain|Plains|Plateau|Basin|Valley|Gorge|Delta|Peninsula|Islands|Island|Archipelago|Sea|Strait|Lake|River|Coast|Steppe|Uplands|Highlands|Caldera|Travertines|Caves|Cave|Glacier)$/i;

/**
 * 英文按词匹配，不能用裸的 includes：「Easter」会命中「eastern South Pacific」，
 * 于是一句在讲南太平洋的话被判成已经飞到复活节岛。
 */
function wordIndexOf(haystackLower: string, needle: string): number {
  const esc = needle.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = new RegExp(`(^|[^a-z0-9])(${esc})([^a-z0-9]|$)`).exec(haystackLower);
  return m ? m.index + m[1]!.length : -1;
}

/** 拆出航点名里的并列名/别名（「A / B」「A·B」「A, B」），长的排前面先试 */
function splitAliases(name: string): string[] {
  const parts = name
    .split(/\s*\/\s*|·|\s*,\s*/)
    .map((x) => x.trim())
    .filter(Boolean);
  const all = parts.length > 1 ? [name, ...parts] : [name];
  return [...new Set(all)].sort((a, b) => b.length - a.length);
}

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
 * 一句话里命中的航点下标；一句提到多个时取**在句子里出现得最早**的那个。
 *
 * 按句中位置挑，不是按航点顺序挑：「进入雪峰山一带——它是江南丘陵和云贵高原
 * 之间的过渡山地」这句讲的是雪峰山，江南丘陵只是用来说明它夹在哪两者之间；
 * 按航点顺序挑会返回排在前面的江南丘陵，锚点于是回退、整篇被判成乱序。
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
  /** 命中位置最靠前的那个航点；同一位置上取匹配得更长的那个 */
  let bestAt = Infinity;
  let bestLen = 0;
  let best = -1;
  const take = (at: number, len: number, index: number) => {
    if (at < 0) return;
    // 同位置取更长：「日本阿尔卑斯山脉」这句里「日本海」的核心「日本」和
    // 全名都从同一个字开始，取短的会把讲阿尔卑斯的句子判成日本海。
    if (at < bestAt || (at === bestAt && len > bestLen)) {
      bestAt = at;
      bestLen = len;
      best = index;
    }
  };
  for (let i = 0; i < waypoints.length; i++) {
    const w = waypoints[i]!;
    const nm0 = en ? w.nameEn : w.name;
    if (!nm0) continue;
    // 括注是用来消歧的，不是名字的一部分：「戈壁（蒙古）」/「Gobi Desert (Mongolia)」
    // 谁都不会这么写进句子里，不去掉的话这类航点在两种语言下都永远匹配不上 ——
    // 而它偏偏是跨欧亚航线上跨度最大的那个航点。
    const nm = nm0.replace(PARENTHETICAL_SUFFIX, "").trim();
    if (!nm) continue;
    // 一个航点常带并列名：「Lake Lucerne / Vierwaldstättersee」「Corsica / Corse」
    //「博恩霍尔姆·阿尔明丁根高地」「Stora Alvaret, Öland」。整串谁都不会写进
    // 句子里，逐个别名试才行。
    for (const alt of splitAliases(nm)) {
      if (en) {
        take(wordIndexOf(hay, alt), alt.length, w.index);
        // 「Gobi Desert」→「Gobi」：英文通名后缀同样可省
        const core = alt.replace(EN_GENERIC_SUFFIX, "").trim();
        if (core.length >= 4 && !EN_CORE_STOPWORDS.has(core.toLowerCase())) {
          take(wordIndexOf(hay, core), core.length, w.index);
        }
        continue;
      }
      take(sentence.indexOf(alt), alt.length, w.index);
      const core = alt.replace(ZH_GENERIC_SUFFIX, "");
      if (core.length >= 2 && !ZH_CORE_STOPWORDS.has(core)) {
        take(sentence.indexOf(core), core.length, w.index);
      }
    }
  }
  return best;
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
  opts: {
    /**
     * 把第一句当作起点，忽略它命中的地名。
     *
     * 开场白几乎都在预告整条航线要飞越什么、终点是哪（「终点是赤道附近的
     * 爪哇岛」「Santiago to Easter Island is…」）——那是预告，不是镜头此刻
     * 的位置。直接采信不只让首句跳到半路，还会顺着「没命中就沿用上一句」
     * 一路带偏后面几句，直到下一次真正命中为止。
     *
     * 同时也忽略**最后一句**命中的地名：收尾句几乎都是回望式的总结
     *（「这趟航班穿越了从戈壁到欧亚大草原的连续地貌带」），提到的是起点
     * 一带，采信它等于让锚点在最后一句往回跳，整篇被判成乱序。
     */
    firstSentenceIsStart?: boolean;
  } = {},
): AnchorResult {
  const sentences = splitSentences(narration);
  const perSentence: number[] = [];
  const hits = new Set<number>();
  let matched = 0;
  let last = -1;
  for (let i = 0; i < sentences.length; i++) {
    if (opts.firstSentenceIsStart && i === 0) {
      last = 0;
      perSentence.push(0);
      continue;
    }
    if (opts.firstSentenceIsStart && i > 0 && i === sentences.length - 1) {
      // 收尾句往回跳 = 回望式总结（「这趟航班穿越了从戈壁到欧亚大草原的连续
      // 地貌带」），不是位置；往前走则是真的在讲落地，照常采信。
      const hit = matchWaypointInSentence(sentences[i]!, waypoints, lang);
      if (hit >= 0 && hit >= last) {
        matched++;
        hits.add(hit);
        last = hit;
      }
      perSentence.push(last);
      continue;
    }
    const hit = matchWaypointInSentence(sentences[i]!, waypoints, lang);
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
