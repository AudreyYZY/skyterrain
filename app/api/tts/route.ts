import { EdgeTTS } from "edge-tts-universal";
import { NextResponse } from "next/server";

const MAX_CHARS = 6000;
// 晓晓：Azure 中文旗舰女声，最自然流畅
const DEFAULT_VOICE = "zh-CN-XiaoxiaoNeural";
// 轻微放缓 + 自然音高（大幅放缓会引入机械感）；英文语速无需放缓
const PROSODY_ZH = { rate: "-6%", pitch: "+0Hz" } as const;
const PROSODY_EN = { rate: "+0%", pitch: "+0Hz" } as const;
function prosodyFor(voice: string) {
  return voice.toLowerCase().startsWith("en-") ? PROSODY_EN : PROSODY_ZH;
}
const SYNTHESIS_TIMEOUT_MS = 15_000;
const MAX_RETRIES = 2;

interface WordBoundary {
  /** 开始时间（秒） */
  start: number;
  /** 结束时间（秒） */
  end: number;
  /** 词文本 */
  text: string;
}

function isValidSSML(text: string): boolean {
  if (!text.trim().startsWith("<speak")) return true; // Not SSML, OK
  const openTags = (text.match(/<speak/g) || []).length;
  const closeTags = (text.match(/<\/speak>/g) || []).length;
  return openTags === closeTags;
}

async function synthesizeWithTimeout(
  tts: InstanceType<typeof EdgeTTS>,
  timeoutMs: number
): Promise<{ audio: Buffer; wordBoundaries: WordBoundary[] }> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`TTS 合成超时 (${timeoutMs}ms)`));
    }, timeoutMs);

    tts.synthesize()
      .then(({ audio, subtitle }) => {
        clearTimeout(timer);
        // subtitle: [{offset: 100ns, duration: 100ns, text: string}, ...]
        const wordBoundaries: WordBoundary[] = subtitle.map((s: any) => ({
          start: s.offset / 1e7,      // 100ns → seconds
          end: (s.offset + s.duration) / 1e7,
          text: s.text,
        }));
        audio.arrayBuffer().then((ab) => {
          resolve({ audio: Buffer.from(ab), wordBoundaries });
        });
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

export async function POST(request: Request) {
  const startTime = Date.now();

  try {
    const body = await request.json();
    const text = (body?.text as string | undefined)?.trim();
    const voice = (body?.voice as string | undefined) ?? DEFAULT_VOICE;

    if (!text) {
      return NextResponse.json({ error: "请提供 text" }, { status: 400 });
    }

    const clipped = text.slice(0, MAX_CHARS);

    // SSML 格式校验
    if (!isValidSSML(clipped)) {
      console.warn("[TTS] Invalid SSML detected, stripping tags");
      const stripped = clipped
        .replace(/<\/?speak[^>]*>/g, "")
        .replace(/<[^>]+>/g, "")
        .trim();
      if (!stripped) {
        return NextResponse.json({ error: "SSML 内容为空" }, { status: 400 });
      }
      const tts = new EdgeTTS(stripped, voice, { ...prosodyFor(voice) });
      const { audio, wordBoundaries } = await synthesizeWithTimeout(tts, SYNTHESIS_TIMEOUT_MS);
      return new Response(JSON.stringify({ audio: audio.toString("base64"), wordBoundaries }), {
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      });
    }

    // 重试逻辑
    let lastError: Error | null = null;
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const tts = new EdgeTTS(clipped, voice, { ...prosodyFor(voice) });

        const { audio, wordBoundaries } = await synthesizeWithTimeout(tts, SYNTHESIS_TIMEOUT_MS);
        const elapsed = Date.now() - startTime;

        console.log(`[TTS] OK voice=${voice} chars=${clipped.length} elapsed=${elapsed}ms words=${wordBoundaries.length} attempt=${attempt + 1}`);

        return new Response(JSON.stringify({ audio: audio.toString("base64"), wordBoundaries }), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          },
        });
      } catch (err) {
        lastError = err instanceof Error ? err : new Error(String(err));
        const elapsed = Date.now() - startTime;
        console.error(`[TTS] Attempt ${attempt + 1} failed:`, {
          message: lastError.message,
          voice,
          chars: clipped.length,
          elapsed: `${elapsed}ms`,
          isSSML: clipped.trim().startsWith("<speak"),
        });

        if (attempt < MAX_RETRIES) {
          await new Promise((r) => setTimeout(r, (attempt + 1) * 1000));
        }
      }
    }

    const elapsed = Date.now() - startTime;
    console.error(`[TTS] All attempts failed:`, {
      message: lastError?.message,
      voice,
      chars: clipped.length,
      elapsed: `${elapsed}ms`,
    });

    return NextResponse.json(
      { error: lastError?.message ?? "语音合成失败" },
      { status: 500 }
    );
  } catch (err) {
    const elapsed = Date.now() - startTime;
    console.error("[TTS] Request error:", {
      message: err instanceof Error ? err.message : String(err),
      elapsed: `${elapsed}ms`,
    });
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "请求处理失败" },
      { status: 500 }
    );
  }
}
