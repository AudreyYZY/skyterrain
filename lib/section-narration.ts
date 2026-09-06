/**
 * 分段播报编排（学习模式讲解 + 旅游模式攻略共用）。
 *
 * 一次合成整篇要等好几秒；这里按段（identity / layout / …）分别合成，
 * 播第 i 段时预取第 i+1 段 —— 首段只等一小段合成就出声。
 * 每段开始时回调，交给 useSentenceHighlight 做该段的逐句高亮（全局句子索引 = baseIndex + 段内偏移）。
 */

import type { Language } from "@/lib/i18n";
import { splitSentences } from "@/lib/sentences";
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

export interface SectionSpeakHooks {
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

export interface SectionNarration {
  cancel: () => void;
  run: (sections: SpeakSection[], language: Language, hooks: SectionSpeakHooks) => Promise<void>;
}

export function createSectionNarration(): SectionNarration {
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
      // 合成失败后的降级策略。
      //
      // 原来是「一段失败 → 本次播报剩余段落全部回退浏览器 TTS，不再尝试 Edge」。
      // 本意是避免忽好忽坏，实际效果相反：Edge TTS 走的是微软那个逆向接口，长段落
      // （英文攻略 p90 约 850 字符）合成耗时本来就压在 13s 超时线上，一次瞬时超时
      // 就把整篇剩下的段落永久降级 —— 用户听到的就是「只有第一段自然，后面全是机械音」。
      //
      // 改成连续失败计数：偶发失败只影响那一段，连着 DEGRADE_AFTER 段都失败才认为
      // 服务不可用、整篇降级。成功一次即清零。
      const DEGRADE_AFTER = 2;
      let consecutiveFailures = 0;
      let degraded = false;
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

        const got = degraded ? null : await nextSynth;
        if (!degraded) {
          if (got === null) {
            consecutiveFailures++;
            if (consecutiveFailures >= DEGRADE_AFTER) degraded = true;
          } else {
            consecutiveFailures = 0;
          }
        }
        // 播这段时，预取下一段（已降级则不再发起 Edge TTS 请求）
        nextSynth =
          !degraded && i + 1 < parts.length
            ? synthesizeSpeech(parts[i + 1]!.text, language)
            : null;

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
