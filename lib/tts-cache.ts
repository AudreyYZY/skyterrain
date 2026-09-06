/**
 * TTS 磁盘缓存与合成 —— 服务端专用（用到 node:crypto / node:fs），
 * 由 `app/api/tts/route.ts`（线上请求）与 `scripts/warm-tts.ts`（离线预热）共用。
 *
 * 为什么要抽出来：缓存键是 sha256(`${voice} ${text}`)，预热脚本必须和线上接口
 * **逐字节**算出同一个键，否则预热出来的文件线上一个也命中不了。两处各写一份
 * 迟早漂移，所以这里是唯一实现，两边都从这里 import。
 */

import { EdgeTTS } from "edge-tts-universal";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

/** 单次请求的文本上限；超出部分截断后再算缓存键 */
export const MAX_CHARS = 6000;

/** 晓晓：Azure 中文旗舰女声 */
export const DEFAULT_VOICE = "zh-CN-XiaoxiaoNeural";

/**
 * 前端实际会用到的语音——见 lib/voice-preference.ts EDGE_TTS_VOICES + lib/i18n.ts TTS_VOICE_IDS。
 * 白名单之外一律拒绝，避免这个接口被当成任意文本转任意 Edge TTS 语音的免费代理。
 */
export const ALLOWED_VOICES = new Set([
  "zh-CN-XiaoxiaoNeural",
  "zh-CN-XiaoyiNeural",
  "zh-CN-YunxiNeural",
  "en-US-AvaMultilingualNeural",
]);

/** 轻微放缓 + 自然音高（大幅放缓会引入机械感） */
const PROSODY_ZH = { rate: "-6%", pitch: "+0Hz" } as const;
/** Ava 多语种女声本身节奏自然，轻微放缓贴合纪录片旁白 */
const PROSODY_EN = { rate: "-4%", pitch: "+0Hz" } as const;

export function prosodyFor(voice: string): { rate: string; pitch: string } {
  return voice.toLowerCase().startsWith("en-") ? PROSODY_EN : PROSODY_ZH;
}

/**
 * edge-tts-universal 调的是微软 Edge 内部「朗读」服务的逆向接口，非官方 API。
 * 短文本（<300 字符）实测 5-9s；en-US-AvaMultilingualNeural 合成 700-1400 字符
 * 稳定要 10-11.5s，所以上限取 13s：长文本绝大多数能一次成功，不必然触发重试。
 */
export const SYNTHESIS_TIMEOUT_MS = 13_000;

export interface WordBoundary {
  /** 开始时间（秒） */
  start: number;
  /** 结束时间（秒） */
  end: number;
  /** 词文本 */
  text: string;
}

export interface CachedResult {
  audio: string; // base64
  wordBoundaries: WordBoundary[];
}

/**
 * 磁盘缓存 —— 所有讲解/攻略文字都是提前写好的静态内容，同一 (voice, text) 组合
 * 合成一次之后结果永远不变。缓存命中后直接读文件返回，不再调用 Edge TTS，
 * 同一段内容永远是同一份音频、同一个自然语速。
 */
export const CACHE_DIR = join(process.cwd(), ".tts-cache");

/** 与线上接口完全一致的键算法——改这里必须同时作废整个缓存目录 */
export function cacheKeyFor(voice: string, text: string): string {
  return createHash("sha256").update(`${voice} ${text}`).digest("hex");
}

/** 线上接口对入参文本做的唯一处理：截断到 MAX_CHARS。预热脚本必须照做。 */
export function normalizeText(text: string): string {
  return text.slice(0, MAX_CHARS);
}

export function cachePathFor(key: string): string {
  return join(CACHE_DIR, `${key}.json`);
}

export async function readCache(key: string): Promise<CachedResult | null> {
  try {
    const raw = await readFile(cachePathFor(key), "utf-8");
    return JSON.parse(raw) as CachedResult;
  } catch {
    return null; // 不存在或读取失败——当作未命中，走正常合成路径
  }
}

export async function writeCache(key: string, result: CachedResult): Promise<void> {
  await mkdir(CACHE_DIR, { recursive: true });
  await writeFile(cachePathFor(key), JSON.stringify(result));
}

/** 调一次 Edge TTS，超时即 reject（该库自身没有超时，不加会无限挂起） */
export function synthesizeOnce(
  text: string,
  voice: string,
  timeoutMs = SYNTHESIS_TIMEOUT_MS,
): Promise<CachedResult> {
  const tts = new EdgeTTS(text, voice, { ...prosodyFor(voice) });
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`TTS 合成超时 (${timeoutMs}ms)`));
    }, timeoutMs);

    tts
      .synthesize()
      .then(({ audio, subtitle }) => {
        clearTimeout(timer);
        // subtitle: [{offset: 100ns, duration: 100ns, text: string}, ...]
        const wordBoundaries: WordBoundary[] = subtitle.map((s) => ({
          start: s.offset / 1e7, // 100ns → seconds
          end: (s.offset + s.duration) / 1e7,
          text: s.text,
        }));
        audio
          .arrayBuffer()
          .then((ab) => {
            resolve({
              audio: Buffer.from(ab).toString("base64"),
              wordBoundaries,
            });
          })
          .catch(reject);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}
