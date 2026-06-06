import { getPreferredEdgeVoice, type EdgeTtsVoiceId } from "@/lib/voice-preference";

let currentAudio: HTMLAudioElement | null = null;
let currentObjectUrl: string | null = null;

/** 中文语速粗估 */
export function estimateSpeechDurationSec(
  text: string,
  rate = 0.92
): number {
  const chars = text.replace(/\s/g, "").length;
  return Math.max(3, chars / 4.5 / rate);
}

/** 检测是否为 SSML 格式 */
function isSSML(text: string): boolean {
  return text.trim().startsWith("<speak");
}

/** 从 SSML 中提取纯文本（用于浏览器回退） */
function stripSSML(ssml: string): string {
  return ssml
    .replace(/<break[^>]*\/>/g, " ")  // break → 空格
    .replace(/<\/?p>/g, " ")           // p → 空格
    .replace(/<\/?prosody[^>]*>/g, "") // prosody → 移除
    .replace(/<\/?speak>/g, "")        // speak → 移除
    .replace(/<[^>]+>/g, "")           // 其他标签 → 移除
    .replace(/\s+/g, " ")              // 多空格 → 单空格
    .trim();
}

function pickBrowserChineseVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;

  const voices = window.speechSynthesis.getVoices();
  const preferredNames = [
    "tingting",
    "meijia",
    "sin-ji",
    "yunxi",
    "xiaoxiao",
    "zh-cn",
  ];

  for (const key of preferredNames) {
    const hit = voices.find(
      (v) =>
        v.lang.toLowerCase().includes("zh") &&
        v.name.toLowerCase().includes(key)
    );
    if (hit) return hit;
  }

  return voices.find((v) => v.lang.toLowerCase().startsWith("zh")) ?? null;
}

function speakBrowserAndWait(text: string, rate = 0.92): Promise<void> {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return Promise.resolve();
  }

  // 浏览器 TTS 不支持 SSML，提取纯文本
  const plainText = isSSML(text) ? stripSSML(text) : text;

  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(plainText);
    utterance.lang = "zh-CN";
    utterance.rate = rate;
    utterance.pitch = 1;
    const voice = pickBrowserChineseVoice();
    if (voice) utterance.voice = voice;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

async function speakEdgeAndWait(
  text: string,
  voice: EdgeTtsVoiceId,
  onPlaying?: () => void
): Promise<boolean> {
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice }),
  });

  if (!res.ok) return false;

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);

  return new Promise((resolve) => {
    const audio = new Audio(url);
    currentAudio = audio;
    currentObjectUrl = url;

    const cleanup = () => {
      URL.revokeObjectURL(url);
      if (currentObjectUrl === url) currentObjectUrl = null;
      if (currentAudio === audio) currentAudio = null;
    };

    audio.onplaying = () => {
      onPlaying?.();
    };

    audio.onended = () => {
      cleanup();
      resolve(true);
    };
    audio.onerror = () => {
      cleanup();
      resolve(false);
    };

    void audio.play().catch(() => {
      cleanup();
      resolve(false);
    });
  });
}

export function stopSpeech(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = null;
  }
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

/** 优先 Edge 神经网络语音，失败时回退系统语音 */
export async function speakAndWait(
  text: string,
  rate = 0.92,
  onPlaying?: () => void
): Promise<void> {
  stopSpeech();

  if (typeof window === "undefined") return;

  const voice = getPreferredEdgeVoice();
  try {
    const ok = await speakEdgeAndWait(text, voice, onPlaying);
    if (ok) return;
  } catch {
    /* 回退 */
  }

  await speakBrowserAndWait(text, rate);
  onPlaying?.();
}

export async function speak(text: string, rate = 0.92): Promise<void> {
  await speakAndWait(text, rate);
}

/** 预加载系统语音列表（Safari 需要） */
export function warmupSpeechVoices(): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
