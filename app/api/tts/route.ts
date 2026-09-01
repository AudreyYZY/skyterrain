import { EdgeTTS } from "edge-tts-universal";
import { NextResponse } from "next/server";

// Vercel 上显式声明这条路径的最长执行时间（需配合下面的超时/重试预算收紧，
// 避免出现"路由值声明了 45s，但实际最坏情况远超"的情况）。
export const maxDuration = 45;

const MAX_CHARS = 6000;
// 晓晓：Azure 中文旗舰女声，最自然流畅
const DEFAULT_VOICE = "zh-CN-XiaoxiaoNeural";
// 前端实际会用到的语音——见 lib/voice-preference.ts EDGE_TTS_VOICES + lib/i18n.ts TTS_VOICE_IDS。
// 任何不在这个白名单里的 voice 一律拒绝，避免这个接口被当成任意文本转任意 Edge TTS 语音的免费代理。
const ALLOWED_VOICES = new Set([
  "zh-CN-XiaoxiaoNeural",
  "zh-CN-XiaoyiNeural",
  "zh-CN-YunxiNeural",
  "en-US-AvaMultilingualNeural",
]);
// 轻微放缓 + 自然音高（大幅放缓会引入机械感）
const PROSODY_ZH = { rate: "-6%", pitch: "+0Hz" } as const;
// Ava 多语种女声本身节奏自然，轻微放缓贴合纪录片旁白
const PROSODY_EN = { rate: "-4%", pitch: "+0Hz" } as const;
function prosodyFor(voice: string) {
  return voice.toLowerCase().startsWith("en-") ? PROSODY_EN : PROSODY_ZH;
}
const SYNTHESIS_TIMEOUT_MS = 12_000;
const MAX_RETRIES = 2;

/**
 * 极简内存限流 —— 每个 IP 每分钟最多 MAX_REQ_PER_MIN 次请求。
 * 这不是分布式限流（多实例/冷启动会各自维护自己的计数），但对当前单人项目的
 * 部署规模足以挡住"写个 for 循环无限调用"这类最直接的滥用，成本为零。
 * 后续如果真的上量，应换成 Upstash/Redis 之类的跨实例限流。
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQ_PER_MIN = 60;
const requestLog = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(key, timestamps);
  // 顺手清理，避免这张表随进程存活时间无限增长
  if (requestLog.size > 5000) {
    for (const [k, v] of requestLog) {
      if (v.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) requestLog.delete(k);
    }
  }
  return timestamps.length > MAX_REQ_PER_MIN;
}

function getClientKey(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/** 同源校验——只挡带 Origin 头的跨站请求；同源导航/无 Origin 的请求不拦（不是完整的 CSRF 方案，只挡最直接的跨站滥用）。 */
function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

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
        const wordBoundaries: WordBoundary[] = subtitle.map((s) => ({
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
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: "跨站请求被拒绝" }, { status: 403 });
    }
    if (isRateLimited(getClientKey(request))) {
      return NextResponse.json(
        { error: "请求过于频繁，请稍后再试" },
        { status: 429 }
      );
    }

    const body = await request.json();
    const text = (body?.text as string | undefined)?.trim();
    const voice = (body?.voice as string | undefined) ?? DEFAULT_VOICE;

    if (!text) {
      return NextResponse.json({ error: "请提供 text" }, { status: 400 });
    }
    if (!ALLOWED_VOICES.has(voice)) {
      return NextResponse.json({ error: "不支持的 voice" }, { status: 400 });
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
