import { NextResponse } from "next/server";
import type { CachedResult } from "@/lib/tts-cache";
import {
  ALLOWED_VOICES,
  DEFAULT_VOICE,
  SYNTHESIS_TIMEOUT_MS,
  cacheKeyFor,
  normalizeText,
  readCache,
  synthesizeOnce,
  writeCache,
} from "@/lib/tts-cache";

// Vercel 上显式声明这条路径的最长执行时间（需配合下面的超时/重试预算收紧，
// 避免出现"路由值声明了 45s，但实际最坏情况远超"的情况）。
export const maxDuration = 45;

// 缓存键、白名单、prosody、超时、合成本身全部在 lib/tts-cache.ts —— 与
// scripts/warm-tts.ts 共用同一份实现，保证离线预热出来的文件线上一定命中。
const MAX_RETRIES = 1;

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

function isValidSSML(text: string): boolean {
  if (!text.trim().startsWith("<speak")) return true; // Not SSML, OK
  const openTags = (text.match(/<speak/g) || []).length;
  const closeTags = (text.match(/<\/speak>/g) || []).length;
  return openTags === closeTags;
}

function jsonResult(result: CachedResult): Response {
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

/** 写缓存失败不影响本次已成功的返回，只是下次还会重新合成 */
async function writeCacheBestEffort(key: string, result: CachedResult): Promise<void> {
  try {
    await writeCache(key, result);
  } catch (err) {
    console.warn("[TTS] Cache write failed:", err instanceof Error ? err.message : err);
  }
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

    const clipped = normalizeText(text);
    const cacheKey = cacheKeyFor(voice, clipped);

    const cached = await readCache(cacheKey);
    if (cached) {
      console.log(`[TTS] Cache hit voice=${voice} chars=${clipped.length}`);
      return jsonResult(cached);
    }

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
      const result = await synthesizeOnce(stripped, voice, SYNTHESIS_TIMEOUT_MS);
      await writeCacheBestEffort(cacheKey, result);
      return jsonResult(result);
    }

    // 重试逻辑
    let lastError: Error | null = null;
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const result = await synthesizeOnce(clipped, voice, SYNTHESIS_TIMEOUT_MS);
        const elapsed = Date.now() - startTime;

        console.log(`[TTS] OK voice=${voice} chars=${clipped.length} elapsed=${elapsed}ms words=${result.wordBoundaries.length} attempt=${attempt + 1}`);

        await writeCacheBestEffort(cacheKey, result);
        return jsonResult(result);
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
