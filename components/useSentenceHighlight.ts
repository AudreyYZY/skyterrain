import { stripEmojis } from "@/lib/strip-emojis";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * 将文本按中文句号、问号、感叹号分割成句子
 */
function splitSentences(text: string): string[] {
  if (!text.trim()) return [];
  return text
    .split(/(?<=[。！？])/g)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/**
 * 从 SSML 中提取纯文本
 */
function stripSSML(text: string): string {
  return text
    .replace(/<break[^/]*\/>/g, " ")
    .replace(/<\/?speak[^>]*>/g, "")
    .replace(/<\/?prosody[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * 估算单句朗读时长（毫秒）
 * Edge TTS 慢速朗读约 3-4 字/秒
 * 加上句间停顿 300ms
 */
function estimateSentenceDuration(sentence: string): number {
  const chars = sentence.replace(/\s/g, "").length;
  const msPerChar = 280; // ~3.5 chars/sec at slow rate
  const pauseMs = 300;
  return chars * msPerChar + pauseMs;
}

interface HighlightSection {
  key: string;
  text: string;
}

interface UseSentenceHighlightReturn {
  /** 当前高亮的句子索引（全局） */
  activeSentenceIndex: number | null;
  /** 当前朗读的 section key */
  activeSection: string | null;
  /** 开始高亮循环（朗读开始时调用） */
  startHighlight: (text: string, sectionKey?: string) => void;
  /** 开始多 section 高亮循环 */
  startHighlightSections: (sections: HighlightSection[]) => void;
  /** 停止高亮（朗读停止时调用） */
  stopHighlight: () => void;
}

export function useSentenceHighlight(): UseSentenceHighlightReturn {
  const [activeSentenceIndex, setActiveSentenceIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentIndexRef = useRef(0);

  const stopHighlight = useCallback(() => {
    console.trace("[DEBUG] stopHighlight called");
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setActiveSentenceIndex(null);
    setActiveSection(null);
    currentIndexRef.current = 0;
  }, []);

  // 根据全局索引查找所属 section
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

      // 如果是 SSML，先提取纯文本；再去掉 emoji 以匹配 StructuredLesson 渲染文本
      const plainText = text.trim().startsWith("<speak") ? stripSSML(text) : text;
      const cleanedText = stripEmojis(plainText);
      const sentences = splitSentences(cleanedText);
      if (sentences.length === 0) return;

      setActiveSection(sectionKey);
      setActiveSentenceIndex(0);
      currentIndexRef.current = 0;

      const advance = () => {
        const currentSentence = sentences[currentIndexRef.current];
        if (!currentSentence) return;

        const duration = estimateSentenceDuration(currentSentence);

        timerRef.current = setTimeout(() => {
          currentIndexRef.current += 1;
          if (currentIndexRef.current < sentences.length) {
            setActiveSentenceIndex(currentIndexRef.current);
            advance();
          } else {
            // 所有句子播放完毕
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
      console.log("[DEBUG] startHighlightSections called, sections:", sections.length);
      stopHighlight();

      // 构建全局句子数组 + section 映射
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

      console.log("[DEBUG] total sentences:", allSentences.length, "sectionMap:", sectionMap);

      if (allSentences.length === 0) {
        console.log("[DEBUG] allSentences is empty, returning early");
        return;
      }

      const initialSection = findSectionForIndex(0, sectionMap);
      console.log("[DEBUG] setting initial state:", { activeSentenceIndex: 0, activeSection: initialSection });
      setActiveSection(initialSection);
      setActiveSentenceIndex(0);
      currentIndexRef.current = 0;

      const advance = () => {
        const currentSentence = allSentences[currentIndexRef.current];
        if (!currentSentence) return;

        const duration = estimateSentenceDuration(currentSentence);

        timerRef.current = setTimeout(() => {
          currentIndexRef.current += 1;
          if (currentIndexRef.current < allSentences.length) {
            setActiveSentenceIndex(currentIndexRef.current);
            // 更新当前 section
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

  // 清理定时器
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return {
    activeSentenceIndex,
    activeSection,
    startHighlight,
    startHighlightSections,
    stopHighlight,
  };
}
