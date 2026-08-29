import { getPreferredEdgeVoice, type EdgeTtsVoiceId } from "@/lib/voice-preference";
import { getTTSVoice, type Language } from "@/lib/i18n";

export interface WordBoundary {
  start: number;  // seconds
  end: number;    // seconds
  text: string;
}

export interface SpeakResult {
  wordBoundaries: WordBoundary[];
}

let currentAudio: HTMLAudioElement | null = null;
let currentObjectUrl: string | null = null;
let currentWordBoundaries: WordBoundary[] = [];

/**
 * 播报“代次”。每次 stopSpeech() 或新的 speakAndWait() 开始时 +1。
 * 合成请求（/api/tts）可能耗时数秒（尤其含外语词的文本），期间用户若切换到别的地形，
 * 旧请求返回后不能再 play —— 否则会和新地形的音频重叠，听感变“糊/小”，且 currentAudio
 * 引用错乱导致后续 stopSpeech() 停不掉。这里用代次令牌把过期请求丢弃。
 */
let speakGen = 0;
let inflightFetch: AbortController | null = null;

function bumpGen(): number {
  speakGen += 1;
  if (inflightFetch) {
    inflightFetch.abort();
    inflightFetch = null;
  }
  return speakGen;
}

/** 获取当前正在播放的 Audio 元素（用于外部同步） */
export function getCurrentAudio(): HTMLAudioElement | null {
  return currentAudio;
}

/** 获取当前音频的 word boundaries（在 onPlaying 回调中可用） */
export function getCurrentWordBoundaries(): WordBoundary[] {
  return currentWordBoundaries;
}

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

function pickBrowserVoice(lang: Language): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;

  const voices = window.speechSynthesis.getVoices();

  if (lang === "en-US") {
    // 优先挑更自然的系统/在线语音；Samantha(macOS)、Ava/Aria(Edge)、Google
    const preferred = ["ava", "samantha", "google us english", "aria", "jenny", "en-us"];
    for (const key of preferred) {
      const hit = voices.find(
        (v) => v.lang.toLowerCase().startsWith("en") && v.name.toLowerCase().includes(key),
      );
      if (hit) return hit;
    }
    return voices.find((v) => v.lang.toLowerCase().startsWith("en")) ?? null;
  }

  const preferredNames = ["tingting", "meijia", "sin-ji", "yunxi", "xiaoxiao", "zh-cn"];
  for (const key of preferredNames) {
    const hit = voices.find(
      (v) => v.lang.toLowerCase().includes("zh") && v.name.toLowerCase().includes(key),
    );
    if (hit) return hit;
  }
  return voices.find((v) => v.lang.toLowerCase().startsWith("zh")) ?? null;
}

export function speakBrowserAndWait(
  text: string,
  rate = 0.92,
  onPlaying?: () => void,
  lang: Language = "zh-CN"
): Promise<void> {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return Promise.resolve();
  }

  // 浏览器 TTS 不支持 SSML，提取纯文本
  const plainText = isSSML(text) ? stripSSML(text) : text;

  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(plainText);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = 1;
    const voice = pickBrowserVoice(lang);
    if (voice) utterance.voice = voice;
    let started = false;
    const markStarted = () => {
      if (started) return;
      started = true;
      onPlaying?.(); // 语音真正开始时才触发逐句高亮
    };
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };
    utterance.onstart = markStarted;
    utterance.onend = finish;
    utterance.onerror = finish;
    window.speechSynthesis.speak(utterance);
    // 部分浏览器不触发 onstart，兜底：短延迟后视为已开始
    setTimeout(markStarted, 250);
    // Chrome 对长文本的 speechSynthesis 有时不触发 onend（会在 ~15s 处静默截断）。
    // 按字数估时兜底 resolve，避免 Promise 永久挂起、后续播报卡住。
    setTimeout(finish, (estimateSpeechDurationSec(plainText, rate) + 5) * 1000);
  });
}

async function speakEdgeAndWait(
  text: string,
  voice: EdgeTtsVoiceId,
  onPlaying: (() => void) | undefined,
  gen: number
): Promise<{ ok: boolean; wordBoundaries: WordBoundary[] }> {
  const ac = new AbortController();
  inflightFetch = ac;
  let res: Response;
  try {
    res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice }),
      signal: ac.signal,
    });
  } catch {
    return { ok: false, wordBoundaries: [] }; // abort 或网络错误
  } finally {
    if (inflightFetch === ac) inflightFetch = null;
  }

  if (!res.ok) return { ok: false, wordBoundaries: [] };

  const data = await res.json();
  // 请求返回时已被更新的播报取代 → 丢弃，不播放
  if (gen !== speakGen) return { ok: true, wordBoundaries: [] };
  const wordBoundaries: WordBoundary[] = data.wordBoundaries ?? [];

  // 存储 word boundaries 到模块变量，供 onPlaying 回调时使用
  currentWordBoundaries = wordBoundaries;

  const audioBytes = Uint8Array.from(atob(data.audio), (c) => c.charCodeAt(0));
  const blob = new Blob([audioBytes], { type: "audio/mpeg" });
  const url = URL.createObjectURL(blob);

  return new Promise((resolve) => {
    const audio = new Audio(url);
    audio.volume = 1;
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
      resolve({ ok: true, wordBoundaries });
    };
    audio.onerror = () => {
      cleanup();
      resolve({ ok: false, wordBoundaries: [] });
    };

    void audio.play().catch(() => {
      cleanup();
      resolve({ ok: false, wordBoundaries: [] });
    });
  });
}

export function stopSpeech(): void {
  bumpGen();
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
  onPlaying?: () => void,
  language?: Language
): Promise<SpeakResult> {
  stopSpeech();
  const gen = speakGen; // stopSpeech() 刚 bump 过，这是本次播报的代次

  if (typeof window === "undefined") return { wordBoundaries: [] };

  const voice = language ? getTTSVoice(language) as EdgeTtsVoiceId : getPreferredEdgeVoice();
  try {
    const result = await speakEdgeAndWait(text, voice, onPlaying, gen);
    if (result.ok) return { wordBoundaries: result.wordBoundaries };
  } catch {
    /* 回退 */
  }

  // 已被新的播报取代 → 不再回退浏览器 TTS
  if (gen !== speakGen) return { wordBoundaries: [] };

  // Edge 失败 → 浏览器 TTS。onPlaying 在语音真正开始时触发（不是等播完），
  // 否则逐句高亮会等到播报结束才启动 → 看起来"卡在第一句"。
  currentWordBoundaries = [];
  await speakBrowserAndWait(text, rate, onPlaying, language ?? "zh-CN");
  return { wordBoundaries: [] };
}

export async function speak(text: string, rate = 0.92): Promise<void> {
  await speakAndWait(text, rate);
}

// ── 分段播报（旅游模式攻略）：先合成再播放，可并行预取，首段更快出声 ──

/** 仅调用 Edge TTS 合成，返回可播放的 blob url + word boundaries。失败返回 null（调用方回退浏览器 TTS）。 */
export async function synthesizeSpeech(
  text: string,
  language?: Language
): Promise<{ url: string; wordBoundaries: WordBoundary[] } | null> {
  if (typeof window === "undefined") return null;
  const gen = speakGen;
  const voice = language ? (getTTSVoice(language) as EdgeTtsVoiceId) : getPreferredEdgeVoice();
  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (gen !== speakGen) return null; // 期间被 stopSpeech()/新播报取代
    const wordBoundaries: WordBoundary[] = data.wordBoundaries ?? [];
    const audioBytes = Uint8Array.from(atob(data.audio), (c) => c.charCodeAt(0));
    const blob = new Blob([audioBytes], { type: "audio/mpeg" });
    return { url: URL.createObjectURL(blob), wordBoundaries };
  } catch {
    return null;
  }
}

/** 播放一段已合成的音频。设置 module currentAudio / currentWordBoundaries，供高亮同步。 */
export function playSynthesized(
  url: string,
  wordBoundaries: WordBoundary[],
  onPlaying?: () => void
): Promise<{ ok: boolean }> {
  return new Promise((resolve) => {
    // 上一段已 onended，这里不再 stopSpeech（避免打断）；只接管 module 引用
    currentWordBoundaries = wordBoundaries;
    const audio = new Audio(url);
    audio.volume = 1;
    currentAudio = audio;
    currentObjectUrl = url;

    const cleanup = () => {
      URL.revokeObjectURL(url);
      if (currentObjectUrl === url) currentObjectUrl = null;
      if (currentAudio === audio) currentAudio = null;
    };

    audio.onplaying = () => onPlaying?.();
    audio.onended = () => {
      cleanup();
      resolve({ ok: true });
    };
    audio.onerror = () => {
      cleanup();
      resolve({ ok: false });
    };
    void audio.play().catch(() => {
      cleanup();
      resolve({ ok: false });
    });
  });
}

/** 预加载系统语音列表（Safari 需要） */
export function warmupSpeechVoices(): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
