/**
 * 旅游模式攻略的分段播报编排。
 *
 * 一次合成整篇要等好几秒；这里按段（identity / layout / …）分别合成，
 * 播第 i 段时预取第 i+1 段 —— 首段只等一小段合成就出声。
 * 每段开始时回调，交给 useSentenceHighlight 做该段的逐句高亮（全局句子索引 = baseIndex + 段内偏移）。
 */

import type { Language } from "@/lib/i18n";
import {
  synthesizeSpeech,
  playSynthesized,
  speakBrowserAndWait,
  stopSpeech,
  getCurrentAudio,
  type WordBoundary,
} from "@/lib/speech";

export interface SpeakSection {
  key: string;
  text: string;
}

function splitSentences(text: string): string[] {
  if (!text.trim()) return [];
  return text
    .split(/(?<=[。！？.!?])/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

export interface TravelSpeakHooks {
  /** 首段音频真正开始（用于收起“准备中”状态） */
  onFirstAudio?: () => void;
  /** 每段开始播放：交给高亮系统 */
  onSectionStart: (info: {
    key: string;
    baseIndex: number;
    text: string;
    wordBoundaries: WordBoundary[];
    audio: HTMLAudioElement | null;
  }) => void;
  /** 全部播完或被取消 */
  onDone: (cancelled: boolean) => void;
}

export interface TravelNarration {
  cancel: () => void;
  run: (sections: SpeakSection[], language: Language, hooks: TravelSpeakHooks) => Promise<void>;
}

export function createTravelNarration(): TravelNarration {
  let cancelled = false;
  return {
    cancel() {
      cancelled = true;
      stopSpeech();
    },
    async run(sections, language, hooks) {
      cancelled = false;
      stopSpeech();

      const parts = sections.filter((s) => s.text.trim().length > 0);
      if (parts.length === 0) {
        hooks.onDone(false);
        return;
      }

      let baseIndex = 0;
      let firstFired = false;
      // 预取管线：先合成第 0 段，播放时再合成下一段
      let nextSynth: Promise<{ url: string; wordBoundaries: WordBoundary[] } | null> | null =
        synthesizeSpeech(parts[0]!.text, language);

      for (let i = 0; i < parts.length; i++) {
        if (cancelled) {
          if (nextSynth) void nextSynth.then((r) => r && URL.revokeObjectURL(r.url));
          hooks.onDone(true);
          return;
        }
        const s = parts[i]!;
        const sentenceCount = splitSentences(s.text).length;

        const got = await nextSynth;
        // 播这段时，预取下一段
        nextSynth =
          i + 1 < parts.length ? synthesizeSpeech(parts[i + 1]!.text, language) : null;

        if (cancelled) {
          if (got) URL.revokeObjectURL(got.url);
          if (nextSynth) void nextSynth.then((r) => r && URL.revokeObjectURL(r.url));
          hooks.onDone(true);
          return;
        }

        const fireStart = (wordBoundaries: WordBoundary[], audio: HTMLAudioElement | null) => {
          if (cancelled) return;
          if (!firstFired) {
            firstFired = true;
            hooks.onFirstAudio?.();
          }
          hooks.onSectionStart({ key: s.key, baseIndex, text: s.text, wordBoundaries, audio });
        };

        if (got) {
          await playSynthesized(got.url, got.wordBoundaries, () =>
            fireStart(got.wordBoundaries, getCurrentAudio()),
          );
        } else {
          await speakBrowserAndWait(s.text, 0.9, () => fireStart([], null), language);
        }

        baseIndex += sentenceCount;
      }

      hooks.onDone(cancelled);
    },
  };
}
