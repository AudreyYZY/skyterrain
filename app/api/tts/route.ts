import { EdgeTTS } from "edge-tts-universal";
import { NextResponse } from "next/server";

const MAX_CHARS = 6000;
const DEFAULT_VOICE = "zh-CN-XiaoyiNeural";
const SYNTHESIS_TIMEOUT_MS = 15_000;
const MAX_RETRIES = 2;

function isValidSSML(text: string): boolean {
  if (!text.trim().startsWith("<speak")) return true; // Not SSML, OK
  // Basic SSML validation
  const openTags = (text.match(/<speak/g) || []).length;
  const closeTags = (text.match(/<\/speak>/g) || []).length;
  return openTags === closeTags;
}

async function synthesizeWithTimeout(
  tts: InstanceType<typeof EdgeTTS>,
  timeoutMs: number
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`TTS 合成超时 (${timeoutMs}ms)`));
    }, timeoutMs);

    tts.synthesize()
      .then(({ audio }) => audio.arrayBuffer())
      .then((ab) => {
        clearTimeout(timer);
        resolve(Buffer.from(ab));
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
      const tts = new EdgeTTS(stripped, voice, { rate: "-18%", pitch: "-2Hz" });
      const buffer = await synthesizeWithTimeout(tts, SYNTHESIS_TIMEOUT_MS);
      return new Response(new Uint8Array(buffer), {
        headers: { "Content-Type": "audio/mpeg", "Cache-Control": "no-store" },
      });
    }

    // 重试逻辑
    let lastError: Error | null = null;
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const tts = new EdgeTTS(clipped, voice, {
          rate: "-18%",
          pitch: "-2Hz",
        });

        const buffer = await synthesizeWithTimeout(tts, SYNTHESIS_TIMEOUT_MS);
        const elapsed = Date.now() - startTime;

        console.log(`[TTS] OK voice=${voice} chars=${clipped.length} elapsed=${elapsed}ms attempt=${attempt + 1}`);

        return new Response(new Uint8Array(buffer), {
          headers: {
            "Content-Type": "audio/mpeg",
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
          // 指数退避
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
