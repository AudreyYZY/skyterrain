"use client";

import {
  EDGE_TTS_VOICES,
  getPreferredEdgeVoice,
  setPreferredEdgeVoice,
  type EdgeTtsVoiceId,
} from "@/lib/voice-preference";
import { useEffect, useState } from "react";

export default function VoiceSelector() {
  const [voice, setVoice] = useState<EdgeTtsVoiceId>("zh-CN-XiaoxiaoNeural");

  useEffect(() => {
    setVoice(getPreferredEdgeVoice());
  }, []);

  return (
    <label className="flex items-center gap-2">
      <span className="shrink-0 text-[10px] text-white/15">音色</span>
      <select
        value={voice}
        onChange={(e) => {
          const id = e.target.value as EdgeTtsVoiceId;
          setVoice(id);
          setPreferredEdgeVoice(id);
        }}
        className="min-w-0 flex-1 rounded-md border border-white/[0.04] bg-transparent px-2 py-1 text-[10px] text-white/40 transition focus:border-white/[0.08] focus:outline-none appearance-none"
      >
        {EDGE_TTS_VOICES.map((v) => (
          <option key={v.id} value={v.id}>
            {v.label}
          </option>
        ))}
      </select>
    </label>
  );
}
