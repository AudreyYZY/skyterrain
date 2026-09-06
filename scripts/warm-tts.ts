/**
 * 语音离线预热 —— 把界面上能触发的每一段播报提前合成好、落到 .tts-cache。
 *   运行: npm run warm:tts -- [--kinds=travel,terrain,route] [--langs=zh-CN,en-US]
 *                            [--concurrency=4] [--retries=2] [--limit=200] [--dry-run]
 *
 * 为什么需要它：Edge TTS 走的是微软那个逆向接口，单次 5-13s 且会失败。线上
 * 现场合成导致三件事同时发生 —— 点开要等好几秒、失败就回退浏览器语音（英文听着
 * 一字一顿）、而 lib/section-narration.ts 的 degraded 开关会因为一次失败把整篇
 * 剩余段落全部降级。缓存命中后这三件事同时消失：0 秒出声、永远是同一份 Edge 音频。
 *
 * 可中断可续跑：已缓存的段落直接跳过，Ctrl+C 之后重跑即可接着做。
 * 失败清单写到 .tts-cache/warm-failures.json，便于只重试失败的那些。
 */

import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import {
  CACHE_DIR,
  SYNTHESIS_TIMEOUT_MS,
  cacheKeyFor,
  normalizeText,
  readCache,
  synthesizeOnce,
  writeCache,
} from "../lib/tts-cache.ts";
import {
  collectTtsSegments,
  type TtsSegment,
  type TtsSegmentKind,
} from "../lib/tts-manifest.ts";
import type { Language } from "../lib/i18n.ts";

// ── 参数 ──────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const arg = (name: string): string | undefined => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit?.slice(name.length + 3);
};
const flag = (name: string) => argv.includes(`--${name}`);

const kinds = arg("kinds")?.split(",").map((s) => s.trim()) as TtsSegmentKind[] | undefined;
const langs = arg("langs")?.split(",").map((s) => s.trim()) as Language[] | undefined;
/** 只预热这几个地形/城市/航线 id —— 用于定向补做或重试单条 */
const onlyIds = arg("ids")
  ? new Set(arg("ids")!.split(",").map((s) => s.trim()))
  : null;
const limit = Number(arg("limit") ?? Infinity);
// 对面是逆向接口，并发开大只会更容易被限流；4 是实测比较稳的档位
const concurrency = Math.max(1, Number(arg("concurrency") ?? 4));
const retries = Math.max(0, Number(arg("retries") ?? 2));
const timeoutMs = Number(arg("timeout") ?? SYNTHESIS_TIMEOUT_MS);
const dryRun = flag("dry-run");

// ── 收集待办 ──────────────────────────────────────────────────────────
console.log("正在枚举播报段落…");
const { segments, gaps } = await collectTtsSegments({ kinds, langs });
if (gaps.length > 0) {
  console.log(`· manifest 有 ${gaps.length} 处缺口（无讲解内容，跳过）`);
}

interface Job {
  seg: TtsSegment;
  text: string;
  key: string;
}

const jobs: Job[] = [];
let alreadyCached = 0;
for (const seg of segments) {
  if (onlyIds && !onlyIds.has(seg.id)) continue;
  const text = normalizeText(seg.text);
  const key = cacheKeyFor(seg.voice, text);
  if (await readCache(key)) {
    alreadyCached++;
    continue;
  }
  jobs.push({ seg, text, key });
}

const todo = jobs.slice(0, Number.isFinite(limit) ? limit : undefined);
const scope = onlyIds ? `（--ids 限定 ${onlyIds.size} 个 id）` : "";
console.log(
  `共 ${segments.length} 段${scope}，已缓存 ${alreadyCached} 段，本次待合成 ${todo.length} 段` +
    (todo.length < jobs.length ? `（--limit 截断，剩余 ${jobs.length - todo.length} 段）` : ""),
);

if (dryRun || todo.length === 0) {
  if (dryRun) console.log("--dry-run：不实际合成，退出");
  process.exit(0);
}

// ── 执行 ──────────────────────────────────────────────────────────────
interface Failure {
  kind: string;
  id: string;
  section: string;
  lang: string;
  chars: number;
  error: string;
}

const durations: number[] = [];
const failures: Failure[] = [];
let done = 0;
let ok = 0;
let stopping = false;
const startedAt = Date.now();

process.on("SIGINT", () => {
  if (stopping) process.exit(130);
  stopping = true;
  console.log("\n收到中断，等当前批次结束后退出（已完成的都已落盘，重跑会接着做）…");
});

const fmtDur = (ms: number) => {
  const s = Math.round(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h > 0 ? `${h}h${String(m).padStart(2, "0")}m` : `${m}m${String(s % 60).padStart(2, "0")}s`;
};

function reportProgress(): void {
  const elapsed = Date.now() - startedAt;
  const rate = done / Math.max(1, elapsed); // 段/毫秒
  const remain = todo.length - done;
  const eta = rate > 0 ? remain / rate : 0;
  process.stdout.write(
    `\r  ${done}/${todo.length}  成功 ${ok}  失败 ${failures.length}  已用 ${fmtDur(elapsed)}  预计还需 ${fmtDur(eta)}   `,
  );
}

async function runJob(job: Job): Promise<void> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    if (stopping) return;
    const t0 = Date.now();
    try {
      const result = await synthesizeOnce(job.text, job.seg.voice, timeoutMs);
      await writeCache(job.key, result);
      durations.push(Date.now() - t0);
      ok++;
      return;
    } catch (err) {
      if (attempt === retries) {
        failures.push({
          kind: job.seg.kind,
          id: job.seg.id,
          section: job.seg.section,
          lang: job.seg.lang,
          chars: job.text.length,
          error: err instanceof Error ? err.message : String(err),
        });
      } else {
        // 退避后重试：这个接口的失败多是短时限流，隔一会儿就好
        await new Promise((r) => setTimeout(r, (attempt + 1) * 1500));
      }
    }
  }
}

// 固定大小的工作池，按顺序取任务
let cursor = 0;
async function worker(): Promise<void> {
  while (!stopping) {
    const i = cursor++;
    if (i >= todo.length) return;
    await runJob(todo[i]!);
    done++;
    if (done % 5 === 0 || done === todo.length) reportProgress();
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));
reportProgress();
console.log();

// ── 报告 ──────────────────────────────────────────────────────────────
durations.sort((a, b) => a - b);
const at = (q: number) => durations[Math.min(durations.length - 1, Math.floor(durations.length * q))] ?? 0;

console.log(`\n本次合成 ${ok} 段成功, ${failures.length} 段失败, 用时 ${fmtDur(Date.now() - startedAt)}`);
if (durations.length > 0) {
  console.log(
    `单段耗时 中位 ${(at(0.5) / 1000).toFixed(1)}s · p90 ${(at(0.9) / 1000).toFixed(1)}s · 最长 ${(at(1) / 1000).toFixed(1)}s`,
  );
}

if (failures.length > 0) {
  const path = join(CACHE_DIR, "warm-failures.json");
  await writeFile(path, JSON.stringify(failures, null, 2));
  const byReason = new Map<string, number>();
  for (const f of failures) {
    const reason = f.error.includes("超时") ? "合成超时" : f.error.slice(0, 40);
    byReason.set(reason, (byReason.get(reason) ?? 0) + 1);
  }
  console.log("失败原因分布:");
  for (const [reason, n] of [...byReason].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${n.toString().padStart(5)}  ${reason}`);
  }
  console.log(`失败清单已写入 ${path}（重跑本脚本会自动只做未缓存的那些）`);
}

process.exit(failures.length > 0 ? 1 : 0);
