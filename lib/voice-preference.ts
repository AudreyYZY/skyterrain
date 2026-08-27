/** Edge 神经网络中文语音（免费，音质明显好于浏览器默认 TTS） */
export const EDGE_TTS_VOICES = [
  { id: "zh-CN-XiaoxiaoNeural", label: "晓晓（女声，推荐）" },
  { id: "zh-CN-XiaoyiNeural", label: "晓伊（女声）" },
  { id: "zh-CN-YunxiNeural", label: "云希（男声）" },
] as const;

export type EdgeTtsVoiceId = (typeof EDGE_TTS_VOICES)[number]["id"];

const DEFAULT_VOICE: EdgeTtsVoiceId = "zh-CN-XiaoxiaoNeural";
const STORAGE_KEY = "fge-tts-voice";

export function getPreferredEdgeVoice(): EdgeTtsVoiceId {
  if (typeof window === "undefined") return DEFAULT_VOICE;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && EDGE_TTS_VOICES.some((v) => v.id === saved)) {
    return saved as EdgeTtsVoiceId;
  }
  return DEFAULT_VOICE;
}

export function setPreferredEdgeVoice(id: EdgeTtsVoiceId): void {
  localStorage.setItem(STORAGE_KEY, id);
}
