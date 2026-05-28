"use client";

import { compressImageForUpload } from "@/lib/compress-image";
import type { PhotoIdentifyResult } from "@/types/photo-identify";
import { useCallback, useRef, useState } from "react";

interface PhotoModePanelProps {
  onSpeak: (text: string) => void | Promise<void>;
  embedded?: boolean;
}

const SOURCE_LABEL: Record<string, string> = {
  ai: "AI 分析",
  catalog: "航线/关键词推测",
  fallback: "本地知识库",
};

export default function PhotoModePanel({
  onSpeak,
  embedded = false,
}: PhotoModePanelProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [hint, setHint] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PhotoIdentifyResult | null>(null);

  const onFile = useCallback((file: File | null) => {
    setError(null);
    setResult(null);
    if (!file) {
      setPreview(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setError("请上传图片文件（JPG / PNG）");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      void compressImageForUpload(reader.result as string).then(setPreview);
    };
    reader.readAsDataURL(file);
  }, []);

  const analyze = useCallback(async () => {
    if (!preview) {
      setError("请先上传舷窗照片");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/photo-identify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: preview,
          hint: hint.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "识别失败");
      }
      setResult(data as PhotoIdentifyResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "识别失败");
    } finally {
      setLoading(false);
    }
  }, [preview, hint]);

  return (
    <div className="flex h-full flex-col gap-3">
      {!embedded && (
        <div>
          <h2 className="text-lg font-semibold text-white">上传窗外实景</h2>
          <p className="mt-1 text-xs text-white/50">
            建议填写航线（如成都—喀什），即使无法识图也能准确推测
          </p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onFile(e.target.files?.[0] ?? null)}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-white/[0.03] py-6 transition hover:border-amber-400/35 hover:bg-white/[0.06]"
      >
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt="舷窗预览"
            className="max-h-36 w-full rounded-lg object-contain"
          />
        ) : (
          <>
            <span className="text-2xl opacity-40">📷</span>
            <span className="text-sm text-white/55">点击上传舷窗照片</span>
          </>
        )}
      </button>

      <label className="block">
        <span className="text-[11px] text-white/45">
          航线说明（强烈建议）
        </span>
        <textarea
          value={hint}
          onChange={(e) => setHint(e.target.value)}
          placeholder="例如：从成都飞往喀什，下午右侧舷窗"
          rows={2}
          className="mt-1 w-full resize-none rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-amber-400/40 focus:outline-none"
        />
      </label>

      <button
        type="button"
        disabled={loading || !preview}
        onClick={() => void analyze()}
        className="w-full rounded-xl bg-amber-500/90 py-2.5 text-sm font-medium text-[#1a1208] hover:bg-amber-400 disabled:opacity-50"
      >
        {loading ? "正在分析…" : "识别可能地貌"}
      </button>

      {error && <p className="text-sm text-red-300">{error}</p>}

      {result && (
        <div className="space-y-3 rounded-xl border border-white/10 bg-black/20 p-3">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40">
                可能地貌
              </p>
              <p className="mt-0.5 text-base font-semibold text-amber-200">
                {result.possibleTerrain}
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-white/8 px-2 py-0.5 text-[10px] text-white/50">
              {result.confidence}
            </span>
          </div>
          {result.source && (
            <p className="text-[10px] text-white/40">
              来源：{SOURCE_LABEL[result.source] ?? result.source}
            </p>
          )}
          <ul className="space-y-1">
            {result.features.map((f) => (
              <li key={f} className="flex gap-2 text-xs text-white/75">
                <span className="text-amber-400">·</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="whitespace-pre-line text-sm leading-relaxed text-white/85">
            {result.narration}
          </div>
          <button
            type="button"
            onClick={() => onSpeak(result.narration)}
            className="w-full rounded-lg border border-amber-400/30 py-2 text-xs text-amber-200 hover:bg-amber-500/10"
          >
            语音播报
          </button>
        </div>
      )}
    </div>
  );
}
