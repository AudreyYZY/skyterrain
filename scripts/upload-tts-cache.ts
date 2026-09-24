/**
 * 把本机 `.tts-cache/` 同步到 Vercel Blob（公开只读），使线上部署也能命中缓存。
 *   运行: npm run upload:tts-cache -- [--concurrency=8] [--limit=200] [--dry-run]
 *
 * 背景：`npm run warm:tts` 只把音频合成进本机磁盘的 `.tts-cache/`（gitignore，不进仓库，
 * 也不会被部署到 Vercel）。线上唯一的读取路径是 `TTS_REMOTE_CACHE_URL` 指向的远端只读缓存
 * （见 lib/tts-cache.ts `readRemoteCache`），本脚本就是把这份缓存"推"过去的那一步。
 *
 * 键与路径：Blob 的 pathname 用 `tts/<cacheKey>.json`、`addRandomSuffix: false`，
 * 这样公开 URL 形如 `<base>/tts/<cacheKey>.json`，与 `readRemoteCache` 里
 * `${REMOTE_CACHE_URL}/${key}.json` 的拼接方式完全对应，不需要额外映射表。
 *
 * 可中断可续跑：启动时先分页拉取 Blob store 里已有的 `tts/` 前缀对象列表，
 * 本地已存在于远端的文件直接跳过，不重复上传。
 */

import { readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { Agent, setGlobalDispatcher } from "undici";
import { list, put } from "@vercel/blob";
import { CACHE_DIR } from "../lib/tts-cache.ts";

const argv = process.argv.slice(2);
const arg = (name: string): string | undefined => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit?.slice(name.length + 3);
};
const flag = (name: string) => argv.includes(`--${name}`);

const CONCURRENCY = Number(arg("concurrency") ?? 8);

// Node 的全局 fetch（undici）默认每个源只维护约 6-10 条连接，应用层并发再高也会被这里卡住——
// 上一轮实测 concurrency=64 只跑出约 1.5 请求/秒，就是这个原因。这批都是同一个 host
// （public.blob.vercel-storage.com）的小文件上传，显式调大连接池才能让并发数真正生效。
setGlobalDispatcher(new Agent({ connections: Math.max(CONCURRENCY * 2, 64) }));
const LIMIT = arg("limit") ? Number(arg("limit")) : undefined;
const DRY_RUN = flag("dry-run");
const PREFIX = "tts/";

async function listRemotePathnames(): Promise<Set<string>> {
  const known = new Set<string>();
  let cursor: string | undefined;
  let pages = 0;
  for (;;) {
    const page = await list({ prefix: PREFIX, cursor, limit: 1000 });
    for (const b of page.blobs) known.add(b.pathname);
    pages++;
    process.stdout.write(`\r正在列出远端已有对象… 第 ${pages} 页，累计 ${known.size} 个`);
    if (!page.hasMore || !page.cursor) break;
    cursor = page.cursor;
  }
  process.stdout.write("\n");
  return known;
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("缺少 BLOB_READ_WRITE_TOKEN —— 先 `vercel env pull` 或确认 .env.local 里有这个变量");
    process.exit(1);
  }

  const allFiles = (await readdir(CACHE_DIR)).filter(
    (f) => f.endsWith(".json") && f !== "warm-failures.json",
  );
  console.log(`本机缓存共 ${allFiles.length} 个音频文件`);

  const remote = await listRemotePathnames();
  console.log(`远端已有 ${remote.size} 个对象（前缀 ${PREFIX}）`);

  let pending = allFiles.filter((f) => !remote.has(`${PREFIX}${f}`));
  if (LIMIT) pending = pending.slice(0, LIMIT);
  console.log(`待上传 ${pending.length} 个${DRY_RUN ? "（--dry-run，不会真的上传）" : ""}`);

  if (pending.length === 0) {
    console.log("全部已同步，无需上传");
    return;
  }

  let done = 0;
  let failed = 0;
  let totalBytes = 0;
  const startedAt = Date.now();

  async function uploadOne(filename: string): Promise<void> {
    const filePath = join(CACHE_DIR, filename);
    try {
      const [buf, st] = await Promise.all([readFile(filePath), stat(filePath)]);
      totalBytes += st.size;
      if (!DRY_RUN) {
        await put(`${PREFIX}${filename}`, buf, {
          access: "public",
          addRandomSuffix: false,
          contentType: "application/json",
        });
      }
      done++;
    } catch (err) {
      failed++;
      console.error(`\n上传失败 ${filename}:`, err instanceof Error ? err.message : err);
    }
  }

  // 简单并发池
  let idx = 0;
  async function worker() {
    while (idx < pending.length) {
      const i = idx++;
      await uploadOne(pending[i]!);
      const elapsedSec = (Date.now() - startedAt) / 1000;
      const rate = done / Math.max(elapsedSec, 1);
      const etaSec = rate > 0 ? Math.round((pending.length - done - failed) / rate) : 0;
      process.stdout.write(
        `\r${done + failed}/${pending.length}  成功 ${done}  失败 ${failed}  ` +
          `已用 ${Math.round(elapsedSec)}s  预计还需 ${etaSec}s  ` +
          `已传 ${(totalBytes / 1024 / 1024).toFixed(0)}MB   `,
      );
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  process.stdout.write("\n");
  console.log(
    `\n本次上传 ${done} 个成功, ${failed} 个失败, 共 ${(totalBytes / 1024 / 1024 / 1024).toFixed(2)}GB, 用时 ${Math.round((Date.now() - startedAt) / 1000)}s`,
  );
  if (failed > 0) {
    console.log("有失败项，重跑本脚本会自动跳过已成功的、只重试缺失的");
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
