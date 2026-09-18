import type { WordBoundary } from "@/lib/speech";
import { stripEmojis } from "@/lib/strip-emojis";
import { splitSentences, splitForHighlight } from "@/lib/sentences";
import { buildSentenceTimeMap, estimateSentenceMs, type HighlightSection, type SentenceTimeRange } from "@/lib/sentence-timing";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseSentenceHighlightReturn {
  activeSentenceIndex: number | null;
  activeSection: string | null;
  startHighlight: (text: string, sectionKey?: string) => void;
  startHighlightSections: (sections: HighlightSection[]) => void;
  /** 基于 word boundaries 启动时间同步高亮。baseIndex：本段第一句的全局索引（分段播放用）。 */
  startHighlightWithTiming: (sections: HighlightSection[], wordBoundaries: WordBoundary[], audio: HTMLAudioElement, baseIndex?: number, fine?: boolean) => void;
  /** 分段播放的估时高亮（无 word boundary 时）：只高亮 sectionKey 段，全局索引从 baseIndex 起。 */
  startHighlightChunkEstimated: (sectionKey: string, text: string, baseIndex: number) => void;
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

        const duration = estimateSentenceMs(currentSentence);

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

        const duration = estimateSentenceMs(currentSentence);

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
    (sections: HighlightSection[], wordBoundaries: WordBoundary[], audio: HTMLAudioElement, baseIndex = 0, fine = false) => {
      stopHighlight();

      // fine = 讲解 / 攻略（与面板的 splitForHighlight 一致）；航线解说用粗切分，
      // 因为 route-anchors.data.ts 的锚点表是按 splitSentences 的句序生成的。
      const split = fine ? splitForHighlight : splitSentences;
      const timeMap = buildSentenceTimeMap(sections, wordBoundaries, split);
      if (timeMap.length === 0) return;

      timeMapRef.current = timeMap;
      audioRef.current = audio;

      // 找到全局索引对应的 section（全局索引 = baseIndex + 段内偏移）
      const allSections: { key: string; start: number; end: number }[] = [];
      let offset = baseIndex;
      for (const section of sections) {
        const cleaned = stripEmojis(section.text);
        const count = split(cleaned).length;
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

        // 如果超过最后一句的结束时间：分段播放（baseIndex>0）时不清，等下一段接力
        if (idx === -1 && currentTime >= (timeMap[timeMap.length - 1]?.endSec ?? 0)) {
          if (baseIndex === 0) {
            setActiveSentenceIndex(null);
            setActiveSection(null);
          }
          return;
        }

        if (idx !== -1 && idx !== lastIdx) {
          lastIdx = idx;
          const globalIdx = baseIndex + idx;
          setActiveSentenceIndex(globalIdx);
          const sectionKey = findSectionForIndex(globalIdx, allSections);
          setActiveSection(sectionKey);
        }

        animFrameRef.current = requestAnimationFrame(tick);
      };

      animFrameRef.current = requestAnimationFrame(tick);
    },
    [stopHighlight, findSectionForIndex]
  );

  /** 分段估时高亮：只处理一段，全局索引从 baseIndex 起。Edge TTS 无 boundary 或浏览器回退时用。 */
  const startHighlightChunkEstimated = useCallback(
    (sectionKey: string, text: string, baseIndex: number) => {
      stopHighlight();
      const sentences = splitForHighlight(stripEmojis(text));
      if (sentences.length === 0) return;

      setActiveSection(sectionKey);
      setActiveSentenceIndex(baseIndex);
      currentIndexRef.current = 0;

      const advance = () => {
        const cur = sentences[currentIndexRef.current];
        if (!cur) return;
        timerRef.current = setTimeout(() => {
          currentIndexRef.current += 1;
          if (currentIndexRef.current < sentences.length) {
            setActiveSentenceIndex(baseIndex + currentIndexRef.current);
            advance();
          }
          // 段末不清高亮，等编排器调用下一段（或 stopHighlight）
        }, estimateSentenceMs(cur));
      };
      advance();
    },
    [stopHighlight]
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
    startHighlightChunkEstimated,
    stopHighlight,
  };
}
