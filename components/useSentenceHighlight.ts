import type { WordBoundary } from "@/lib/speech";
import { stripEmojis } from "@/lib/strip-emojis";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * 将文本按中文句号、问号、感叹号分割成句子
 */
function splitSentences(text: string): string[] {
  if (!text.trim()) return [];
  return text
    .split(/(?<=[。！？.!?])/g)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

interface HighlightSection {
  key: string;
  text: string;
}

interface SentenceTimeRange {
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
function buildSentenceTimeMap(
  sections: HighlightSection[],
  wordBoundaries: WordBoundary[]
): SentenceTimeRange[] {
  const result: SentenceTimeRange[] = [];

  // 构建全局句子列表
  const allSentences: { sectionKey: string; text: string }[] = [];
  for (const section of sections) {
    const cleaned = stripEmojis(section.text);
    const sentences = splitSentences(cleaned);
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

interface UseSentenceHighlightReturn {
  activeSentenceIndex: number | null;
  activeSection: string | null;
  startHighlight: (text: string, sectionKey?: string) => void;
  startHighlightSections: (sections: HighlightSection[]) => void;
  /** 基于 word boundaries 启动时间同步高亮 */
  startHighlightWithTiming: (sections: HighlightSection[], wordBoundaries: WordBoundary[], audio: HTMLAudioElement) => void;
  stopHighlight: () => void;
}

export function useSentenceHighlight(): UseSentenceHighlightReturn {
  const [activeSentenceIndex, setActiveSentenceIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentIndexRef = useRef(0);
  const timeMapRef = useRef<SentenceTimeRange[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stopHighlight = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    audioRef.current = null;
    timeMapRef.current = [];
    setActiveSentenceIndex(null);
    setActiveSection(null);
    currentIndexRef.current = 0;
  }, []);

  const findSectionForIndex = useCallback(
    (globalIndex: number, sectionMap: { key: string; start: number; end: number }[]): string | null => {
      for (const s of sectionMap) {
        if (globalIndex >= s.start && globalIndex < s.end) return s.key;
      }
      return null;
    },
    []
  );

  const startHighlight = useCallback(
    (text: string, sectionKey: string = "seeing") => {
      stopHighlight();

      const plainText = text.trim().startsWith("<speak")
        ? text.replace(/<break[^/]*\/>/g, " ").replace(/<\/?speak[^>]*>/g, "").replace(/<\/?prosody[^>]*>/g, "").replace(/\s+/g, " ").trim()
        : text;
      const cleanedText = stripEmojis(plainText);
      const sentences = splitSentences(cleanedText);
      if (sentences.length === 0) return;

      setActiveSection(sectionKey);
      setActiveSentenceIndex(0);
      currentIndexRef.current = 0;

      const advance = () => {
        const currentSentence = sentences[currentIndexRef.current];
        if (!currentSentence) return;

        const chars = currentSentence.replace(/\s/g, "").length;
        const duration = chars * 280 + 300;

        timerRef.current = setTimeout(() => {
          currentIndexRef.current += 1;
          if (currentIndexRef.current < sentences.length) {
            setActiveSentenceIndex(currentIndexRef.current);
            advance();
          } else {
            setActiveSentenceIndex(null);
            setActiveSection(null);
          }
        }, duration);
      };

      advance();
    },
    [stopHighlight]
  );

  const startHighlightSections = useCallback(
    (sections: HighlightSection[]) => {
      stopHighlight();

      const allSentences: string[] = [];
      const sectionMap: { key: string; start: number; end: number }[] = [];
      let offset = 0;

      for (const section of sections) {
        const cleanedText = stripEmojis(section.text);
        const sentences = splitSentences(cleanedText);
        if (sentences.length === 0) continue;
        sectionMap.push({ key: section.key, start: offset, end: offset + sentences.length });
        allSentences.push(...sentences);
        offset += sentences.length;
      }

      if (allSentences.length === 0) return;

      const initialSection = findSectionForIndex(0, sectionMap);
      setActiveSection(initialSection);
      setActiveSentenceIndex(0);
      currentIndexRef.current = 0;

      const advance = () => {
        const currentSentence = allSentences[currentIndexRef.current];
        if (!currentSentence) return;

        const chars = currentSentence.replace(/\s/g, "").length;
        const duration = chars * 280 + 300;

        timerRef.current = setTimeout(() => {
          currentIndexRef.current += 1;
          if (currentIndexRef.current < allSentences.length) {
            setActiveSentenceIndex(currentIndexRef.current);
            const newSection = findSectionForIndex(currentIndexRef.current, sectionMap);
            setActiveSection(newSection);
            advance();
          } else {
            setActiveSentenceIndex(null);
            setActiveSection(null);
          }
        }, duration);
      };

      advance();
    },
    [stopHighlight, findSectionForIndex]
  );

  /**
   * 基于 word boundaries + audio.currentTime 的精确同步高亮
   * 通过 requestAnimationFrame 持续跟踪音频播放进度
   */
  const startHighlightWithTiming = useCallback(
    (sections: HighlightSection[], wordBoundaries: WordBoundary[], audio: HTMLAudioElement) => {
      stopHighlight();

      const timeMap = buildSentenceTimeMap(sections, wordBoundaries);
      if (timeMap.length === 0) return;

      timeMapRef.current = timeMap;
      audioRef.current = audio;

      // 找到全局索引对应的 section
      const allSections: { key: string; start: number; end: number }[] = [];
      let offset = 0;
      for (const section of sections) {
        const cleaned = stripEmojis(section.text);
        const count = splitSentences(cleaned).length;
        if (count > 0) {
          allSections.push({ key: section.key, start: offset, end: offset + count });
          offset += count;
        }
      }

      let lastIdx = -1;

      const tick = () => {
        if (!audioRef.current || audioRef.current.paused) {
          animFrameRef.current = requestAnimationFrame(tick);
          return;
        }

        const currentTime = audioRef.current.currentTime;

        // 二分查找当前时间对应的句子
        let lo = 0;
        let hi = timeMap.length - 1;
        let idx = -1;

        while (lo <= hi) {
          const mid = (lo + hi) >> 1;
          const range = timeMap[mid]!;
          if (currentTime < range.startSec) {
            hi = mid - 1;
          } else if (currentTime >= range.endSec) {
            lo = mid + 1;
          } else {
            idx = mid;
            break;
          }
        }

        // 如果超过最后一句的结束时间，清除高亮
        if (idx === -1 && currentTime >= (timeMap[timeMap.length - 1]?.endSec ?? 0)) {
          setActiveSentenceIndex(null);
          setActiveSection(null);
          return;
        }

        if (idx !== -1 && idx !== lastIdx) {
          lastIdx = idx;
          setActiveSentenceIndex(idx);
          const sectionKey = findSectionForIndex(idx, allSections);
          setActiveSection(sectionKey);
        }

        animFrameRef.current = requestAnimationFrame(tick);
      };

      animFrameRef.current = requestAnimationFrame(tick);
    },
    [stopHighlight, findSectionForIndex]
  );

  // 清理
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return {
    activeSentenceIndex,
    activeSection,
    startHighlight,
    startHighlightSections,
    startHighlightWithTiming,
    stopHighlight,
  };
}
