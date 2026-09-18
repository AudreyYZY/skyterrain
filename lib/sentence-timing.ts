/**
 * 逐句高亮的**纯计算**部分：朗读时长估算 + word boundary → 句子时间区间。
 * 2026-09-17 从 components/useSentenceHighlight.ts 抽出来，好让 scripts/check-highlight-sync.ts
 * 能拿真实缓存的 word boundary 直接跑这段逻辑（组件里的那份带 React，脚本不好测）。
 */
import type { WordBoundary } from "@/lib/speech";
import { SPEECH_CHARS_PER_SEC } from "@/lib/speech";
import { stripEmojis } from "@/lib/strip-emojis";

export interface HighlightSection {
  key: string;
  text: string;
}

/**
 * 估算一句话的朗读时长（毫秒）—— 仅用于浏览器 TTS 回退（Edge TTS 有精确 word boundary）。
 *
 * 语速直接用 `lib/speech.ts` 里那两个**从缓存音频的 word boundary 实测**出来的常数
 * （中文 4.44 字/秒、英文 15.24 字符/秒），不要再在这里写第二套数字 ——
 * 2026-09-17 之前这里写死的是「中文 280 毫秒/字、英文 360 毫秒/词」，
 * 折合中文 3.57 字/秒（比实测慢 24%，高亮越走越落后）、英文约 2.8 词/秒
 * （比实测快约 9%，高亮抢在语音前面）。**一慢一快，正是两种语言表现相反的原因。**
 * 浏览器回退按 rate 0.9 播（见 section-narration），所以再除以 0.9。
 */
const BROWSER_TTS_RATE = 0.9;

export function estimateSentenceMs(sentence: string): number {
  const hasCJK = /[一-鿿]/.test(sentence);
  const lang = hasCJK ? "zh-CN" : "en-US";
  const chars = hasCJK ? sentence.replace(/\s/g, "").length : sentence.trim().length;
  const seconds = chars / SPEECH_CHARS_PER_SEC[lang] / BROWSER_TTS_RATE;
  return Math.round(seconds * 1000) + 250;
}

export interface SentenceTimeRange {
  sectionKey: string;
  /** 开始时间（秒） */
  startSec: number;
  /** 结束时间（秒） */
  endSec: number;
}

/**
 * 将 word boundaries 映射到句子时间范围
 * 通过匹配词文本累积到句子中，确定每句的开始/结束时间
 */
export function buildSentenceTimeMap(
  sections: HighlightSection[],
  wordBoundaries: WordBoundary[],
  split: (t: string) => string[]
): SentenceTimeRange[] {
  const result: SentenceTimeRange[] = [];

  // 构建全局句子列表
  const allSentences: { sectionKey: string; text: string }[] = [];
  for (const section of sections) {
    const cleaned = stripEmojis(section.text);
    const sentences = split(cleaned);
    for (const s of sentences) {
      allSentences.push({ sectionKey: section.key, text: s });
    }
  }

  if (allSentences.length === 0 || wordBoundaries.length === 0) return result;

  // 将 word boundaries 匹配到句子
  // 同时支持中文和英文标点
  const punctuationRegex = /[。，！？、；：""''（）.,!?;:'"()\s]/g;
  let wordIdx = 0;
  let sentenceStartSec = wordBoundaries[0]?.start ?? 0;

  for (let si = 0; si < allSentences.length; si++) {
    const sentence = allSentences[si]!;
    // 清理句子中的标点和空格，用于匹配
    const sentenceChars = sentence.text.replace(punctuationRegex, "");

    let matchedChars = 0;
    let lastMatchEnd = sentenceStartSec;
    const sentenceStart = sentenceStartSec;

    // 消耗 word boundaries 直到匹配完这个句子
    while (wordIdx < wordBoundaries.length && matchedChars < sentenceChars.length) {
      const word = wordBoundaries[wordIdx]!;
      const wordClean = word.text.replace(punctuationRegex, "");
      matchedChars += wordClean.length;
      lastMatchEnd = word.end;
      wordIdx++;
    }

    result.push({
      sectionKey: sentence.sectionKey,
      startSec: sentenceStart,
      endSec: lastMatchEnd,
    });

    sentenceStartSec = lastMatchEnd;
  }

  return result;
}

