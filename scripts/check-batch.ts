/**
 * 批次门禁：把检查**对准这一批刚动过的条目**（2026-09-18 立）
 *   运行: npm run check:batch            # 与 main 的分叉点比，自动算出这批动了哪些条目
 *         npm run check:batch -- --base=HEAD~2
 *         npm run check:batch -- --ids=kazarman,kogon
 *
 * 为什么要有这个脚本 —— 用户两次报的问题（高亮跟不上语音、播报是机械音）**当时都已经有防线了**，
 * 但两道防线都看不见新内容：
 *   · `check:highlight-sync` 抽 `CITY_REGISTRY.slice(0, 40)`，永远是第一个国家的前 40 座城，
 *     而新城追加在末尾 —— 新内容一次都没进过它的视野；
 *   · `check:tts` 的覆盖率是全库平均且不判失败 —— 一整批 0% 命中藏在 99% 的平均数里。
 *     没命中缓存就要现场合成，中文冷合成实测约 19 秒，`section-narration` 连续 2 段失败
 *     就整篇降级成浏览器 TTS，那正是用户听到的「不自然的 AI 音」。
 *
 * 教训是通用的：**全库口径的平均数与固定抽样，都会把「新加的那一批」漏掉。**
 * 所以这里的每一项都按条目 id 收窄，并且逐项报「实际检查了多少个对象」
 * （CLAUDE.md 的既定要求：任何检查都要能说出自己检查了多少个对象，不能只报总数）。
 *
 * 硬失败 = 这一批不该提交。报告项（⚑）= 值得人看一眼，不拦截。
 */
import { readCache, cacheKeyFor, normalizeText } from "@/lib/tts-cache";
import { collectTtsSegments } from "@/lib/tts-manifest";
import { buildSentenceTimeMap } from "@/lib/sentence-timing";
import { splitForHighlight } from "@/lib/sentences";
import { stripEmojis } from "@/lib/strip-emojis";
import type { WordBoundary } from "@/lib/speech";
import { readFileSync, existsSync } from "node:fs";
import { CITY_REGISTRY } from "@/lib/places-registry";
import { TERRAIN_REGISTRY } from "@/lib/terrain-registry";
import { changedEntries, defaultBase, parseScopeArgs } from "./lib/changed-entries.ts";

/** 一块高亮最多停多久才不显得卡（秒）——与 check:highlight-sync 同一个口径 */
const MAX_BLOCK_SEC = 13;
const MIN_COVERAGE = 0.9;

const { ids: explicitIds, base: baseArg } = parseScopeArgs(process.argv.slice(2));

const base = baseArg ?? defaultBase();
const changed = explicitIds ? null : changedEntries(base);

/** 这一批的条目 id（按类别） */
const scope = {
  terrain: new Set<string>(),
  travel: new Set<string>(),
  route: new Set<string>(),
};
if (explicitIds) {
  // 显式给 id 时不知道是哪一类，按注册表反查
  const terrainIds = new Set(TERRAIN_REGISTRY.map((t) => t.id));
  const cityIds = new Set(CITY_REGISTRY.map((c) => c.id));
  for (const id of explicitIds) {
    if (terrainIds.has(id)) scope.terrain.add(id);
    else if (cityIds.has(id)) scope.travel.add(id);
    else scope.route.add(id);
  }
} else {
  for (const id of changed!.terrain) scope.terrain.add(id);
  for (const id of changed!.city) scope.travel.add(id);
  for (const id of changed!.route) scope.route.add(id);
}

const total = scope.terrain.size + scope.travel.size + scope.route.size;

console.log("批次门禁 —— 只看这一批动过的条目");
console.log(
  explicitIds
    ? `  范围：命令行指定的 ${explicitIds.length} 个 id`
    : `  范围：${base.slice(0, 8)} → 工作区，${changed!.files.length} 个内容文件`,
);
console.log(
  `  条目：地形 ${scope.terrain.size} · 城市 ${scope.travel.size} · 航线 ${scope.route.size}（共 ${total}）`,
);

if (total === 0) {
  console.log("\n这一批没有动内容条目 —— 批次门禁无事可做（代码改动由 npm run check 负责）。");
  process.exit(0);
}
for (const [label, set] of [
  ["地形", scope.terrain],
  ["城市", scope.travel],
  ["航线", scope.route],
] as const) {
  if (set.size > 0) console.log(`    ${label}：${[...set].join(", ")}`);
}

const hardFailures: string[] = [];
const reports: string[] = [];

// ─────────────────────────────────────────────────────────────────────
// 门禁 ①：这一批的播报必须**全部**已经预热进 .tts-cache
// ─────────────────────────────────────────────────────────────────────
const { segments, gaps } = await collectTtsSegments();
const mine = segments.filter(
  (s) =>
    (s.kind === "terrain" && scope.terrain.has(s.id)) ||
    (s.kind === "travel" && scope.travel.has(s.id)) ||
    (s.kind === "route" && scope.route.has(s.id)),
);
const myGaps = gaps.filter(
  (g) =>
    (g.kind === "terrain" && scope.terrain.has(g.id)) ||
    (g.kind === "travel" && scope.travel.has(g.id)) ||
    (g.kind === "route" && scope.route.has(g.id)),
);

/**
 * **一个条目一段播报都取不到，必须报出来。**
 * 本库踩过三次「取不到值被当成没问题」（`check:zhen` 忘了 await、字段名写错、语言键写错），
 * 前两次都报了「全部通过」。这里同理：id 打错、条目还没进注册表、或者 travel.zh 里有块
 * 而 cities.ts 里没有，`mine` 就是空的 —— 那时候「✓ 全部命中缓存」是**假通过**。
 */
const idsWithSegments = new Set(mine.map((s) => `${s.kind}/${s.id}`));
const silentIds: string[] = [];
for (const [kind, set] of [
  ["terrain", scope.terrain],
  ["travel", scope.travel],
  ["route", scope.route],
] as const) {
  for (const id of set) {
    if (!idsWithSegments.has(`${kind}/${id}`)) silentIds.push(`${kind}/${id}`);
  }
}

interface Cached {
  seg: (typeof mine)[number];
  wb: WordBoundary[] | null;
}
const cachedSegs: Cached[] = [];
const missing: typeof mine = [];
for (const s of mine) {
  const text = normalizeText(s.text);
  const hit = await readCache(cacheKeyFor(s.voice, text));
  if (!hit) missing.push(s);
  else cachedSegs.push({ seg: s, wb: hit.wordBoundaries ?? null });
}

const pct = mine.length > 0 ? ((cachedSegs.length / mine.length) * 100).toFixed(1) : "—";
console.log(
  `\n① 语音预热：这一批 ${mine.length} 段播报，${cachedSegs.length} 段已缓存（${pct}%）`,
);
if (myGaps.length > 0) {
  hardFailures.push(
    `manifest 缺口 ${myGaps.length} 处（解析不出讲解内容）：` +
      myGaps.slice(0, 5).map((g) => `${g.kind}/${g.id} [${g.lang}] ${g.reason}`).join("；"),
  );
}
if (missing.length > 0) {
  const ids = [...new Set(missing.map((m) => `${m.kind}/${m.id}`))];
  hardFailures.push(
    `${missing.length} 段没预热（涉及 ${ids.length} 个条目：${ids.slice(0, 8).join(", ")}${ids.length > 8 ? " …" : ""}）\n` +
      `      → 现场合成中文实测约 19 秒，连续 2 段失败整篇降级成浏览器 TTS，用户听到的就是机械音。\n` +
      `      → 修法：npm run warm:tts -- --ids=${[...new Set(missing.map((m) => m.id))].slice(0, 20).join(",")}`,
  );
} else if (mine.length > 0) {
  console.log("   ✓ 这一批全部命中缓存，点开就是自然人声");
}
if (silentIds.length > 0) {
  // 硬失败：不是「没问题」，是「什么都没查」
  hardFailures.push(
    `${silentIds.length} 个条目一段播报都取不到：${silentIds.join(", ")}\n` +
      `      → 可能是 id 打错、条目还没进注册表（cities.ts / registry.ts），或 travel.zh 有块而 cities.ts 没有。\n` +
      `      → 这种情况下「全部命中缓存」是假通过，所以判失败而不是跳过。`,
  );
}

// ─────────────────────────────────────────────────────────────────────
// 门禁 ②：逐句高亮 × 真实 word boundary —— 只看这一批
// ─────────────────────────────────────────────────────────────────────
let syncChecked = 0;
let maxBlock = 0;
let maxBlockWhere = "";
const syncProblems: string[] = [];
const coverages: number[] = [];

for (const { seg, wb } of cachedSegs) {
  if (!wb || wb.length === 0) continue;
  const clean = stripEmojis(seg.text);
  if (!clean.trim()) continue;
  syncChecked++;
  const where = `${seg.kind}/${seg.id}/${seg.section} [${seg.lang}]`;
  const blocks = splitForHighlight(clean);
  const map = buildSentenceTimeMap([{ key: "s", text: clean }], wb, splitForHighlight);
  if (map.length !== blocks.length) {
    syncProblems.push(`${where}：时间映射 ${map.length} 段 ≠ 高亮块 ${blocks.length} 段`);
    continue;
  }
  const audioEnd = wb[wb.length - 1]!.end;
  let prevEnd = -Infinity;
  for (let i = 0; i < map.length; i++) {
    const r = map[i]!;
    if (r.endSec < r.startSec) syncProblems.push(`${where}：第 ${i + 1} 块时间倒挂`);
    if (r.startSec < prevEnd - 0.01) syncProblems.push(`${where}：第 ${i + 1} 块与上一块重叠`);
    prevEnd = r.endSec;
    const dur = r.endSec - r.startSec;
    if (dur > maxBlock) {
      maxBlock = dur;
      maxBlockWhere = `${where} 第 ${i + 1} 块`;
    }
    if (dur > MAX_BLOCK_SEC) {
      syncProblems.push(
        `${where}：第 ${i + 1} 块要停 ${dur.toFixed(1)} 秒（上限 ${MAX_BLOCK_SEC}s）：${blocks[i]!.slice(0, 26)}…`,
      );
    }
  }
  const coverage = audioEnd > 0 ? prevEnd / audioEnd : 1;
  coverages.push(coverage);
  if (coverage < MIN_COVERAGE) {
    syncProblems.push(
      `${where}：只覆盖音频的 ${(coverage * 100).toFixed(0)}%（末块 ${prevEnd.toFixed(1)}s / 音频 ${audioEnd.toFixed(1)}s）`,
    );
  }
}
const avgCov = coverages.length ? (coverages.reduce((a, b) => a + b, 0) / coverages.length) * 100 : 0;
console.log(
  `\n② 逐句高亮 × 真实 word boundary：核对了 ${syncChecked} 段` +
    (syncChecked > 0
      ? `，平均覆盖音频 ${avgCov.toFixed(1)}%，最长一块 ${maxBlock.toFixed(1)} 秒（${maxBlockWhere}）`
      : ""),
);
if (syncChecked === 0 && missing.length === 0) {
  reports.push("一段都没核到高亮同步 —— 这一批的播报文本可能都是空的，值得看一眼");
}
if (syncProblems.length > 0) {
  hardFailures.push(
    `逐句高亮对不上 ${syncProblems.length} 处：\n` +
      syncProblems.slice(0, 12).map((p) => `      ${p}`).join("\n") +
      (syncProblems.length > 12 ? `\n      …还有 ${syncProblems.length - 12} 处` : ""),
  );
} else if (syncChecked > 0) {
  console.log("   ✓ 单调、不重叠、覆盖完整，没有超时长的高亮块");
}

// ─────────────────────────────────────────────────────────────────────
// 门禁 ③：留痕 —— 新条目必须有 `// <字段> sources:` 注释
//   「没有注释 = 没核过」是本库唯一机器可读的凭据（CLAUDE.md 硬性习惯 ⑧ 的旁证）。
//   报告项而不是硬失败：注释可能写在国家块顶部而不是逐条上方。
// ─────────────────────────────────────────────────────────────────────
const noSources: string[] = [];
let sourceChecked = 0;
for (const [kind, set] of [
  ["travel", scope.travel],
  ["terrain", scope.terrain],
] as const) {
  for (const id of set) {
    const country =
      kind === "travel"
        ? CITY_REGISTRY.find((c) => c.id === id)?.country
        : TERRAIN_REGISTRY.find((t) => t.id === id)?.country;
    if (!country) continue;
    const file = `lib/content/${country}/${kind === "travel" ? "travel.zh" : "terrain.zh"}.ts`;
    if (!existsSync(file)) continue;
    sourceChecked++;
    const src = readFileSync(file, "utf8");
    const at = src.indexOf(`\n  ${id}: {`);
    if (at < 0) continue;
    // 留痕注释有两种落点：条目**上方**（早期的 `// identity sources: …`）与条目**块内**
    // （新国家常写在 `{` 之后的第一行，「全七段 sources（…）」）—— 两处都算。
    const prevBlockEnd = src.lastIndexOf("\n  },", at);
    const above = src.slice(prevBlockEnd < 0 ? 0 : prevBlockEnd, at);
    const blockEnd = src.indexOf("\n  },", at + 1);
    const inside = src.slice(at, blockEnd < 0 ? src.length : blockEnd);
    if (!/sources\s*[:：(（]/i.test(above + inside)) noSources.push(`${kind}/${id}`);
  }
}
console.log(`\n③ 来源留痕：查了 ${sourceChecked} 个条目的 \`// … sources:\` 注释（条目上方或块内）`);
if (noSources.length > 0) {
  reports.push(
    `${noSources.length} 个条目上方没找到 sources 注释：${noSources.join(", ")}\n` +
      `      （「没有注释 = 没核过」是本库唯一机器可读的凭据；若注释写在国家块顶部可忽略）`,
  );
} else if (sourceChecked > 0) {
  console.log("   ✓ 都有留痕");
}

// ─────────────────────────────────────────────────────────────────────
console.log("\n" + "─".repeat(64));
if (reports.length > 0) {
  console.log(`⚑ ${reports.length} 项值得看一眼（不拦截）：`);
  for (const r of reports) console.log(`    · ${r}`);
}
if (hardFailures.length > 0) {
  console.error(`\n✗ 批次门禁不通过，${hardFailures.length} 项：`);
  for (const f of hardFailures) console.error(`    · ${f}`);
  console.error(
    "\n这一批不要提交。这些项都是用户能直接感知的（高亮错位、机械音），" +
      "修完再跑一次 npm run check:batch。\n",
  );
  process.exit(1);
}
console.log("✓ 批次门禁通过");
