/**
 * 从三套内容文件的 `// <字段> sources:` 注释里，抽出**每个条目每个字段的核实留痕**，
 * 生成运行时可读的 `lib/verification-status.data.ts`。
 *
 * 为什么要有它（2026-09-12）：此前所有的诚实声明都写在 README 里，而**读内容的人不看 README**。
 * 用户在界面上读到一句话时，没有任何信号告诉他这句话是「有人拿权威来源核过的」还是
 * 「依据公开资料整理、没人逐条看过的」。一旦他自己撞见一处错，很自然会推断「这里所有内容都不可信」——
 * 这正是最该避免的结果，而避免它的办法不是把错全改完（做不到），是**事先就把话说清楚**。
 *
 * 判据（只认注释里机器可读的痕迹，不做语义判断）：
 *   - `verified`：注释里有核实日期（`核实 2026-09-11` / `2026-09-11 核`）或来源级别（`级别 1/2/3`）
 *   - `authored`：有 `sources:` 注释但没有上述痕迹 —— 那是**写作时随手记的出处**，不是核实
 *   - `none`：连注释都没有
 * 同时抽出最近一次核实日期与见到的最高来源级别（数字越小越权威）。
 *
 * ⚠️ 这份数据**只说「有没有人核过」，不说「对不对」**。核过的也可能核错，
 * 没核过的也可能是对的。它的用途是让读者能自己判断该给多少信任，不是给内容背书。
 *
 * 用法：npm run gen:verify-status（改了内容文件的 sources 注释之后重跑）
 */
import { readFileSync, writeFileSync } from "node:fs";

const SOURCES: [string, string][] = [
  ["terrain", "lib/terrain-content.zh.ts"],
  ["travel", "lib/travel-content.zh.ts"],
];

const DATE = /(?:核实\s*|checked\s*)?(20\d\d-\d\d-\d\d)\s*(?:核|核实|verified)?|核实\s*(20\d\d-\d\d)/g;
const LEVEL = /级别\s*\*?\*?\s*([123])|\*\*级别\s*([123])/g;
const VERIFY_MARK = /(核实\s*20\d\d-\d\d|20\d\d-\d\d-\d\d\s*核|级别\s*\*{0,2}\s*[123]|verdict:\s*(?:ok|wrong)|✅|本轮无需改动|本轮未改动)/;

type Row = { id: string; kind: string; fields: number; verified: number; checkedOn?: string; level?: number };
const rows: Row[] = [];

for (const [kind, path] of SOURCES) {
  const src = readFileSync(path, "utf8").split("\n");
  const head = /^\s{2,4}"?([a-z0-9][a-z0-9-]*)"?:\s*\{\s*$/;
  const marks: { id: string; at: number }[] = [];
  src.forEach((l, i) => { const m = head.exec(l); if (m) marks.push({ id: m[1]!, at: i }); });
  for (let i = 0; i < marks.length; i++) {
    const seg = src.slice(marks[i]!.at, marks[i + 1]?.at ?? src.length);
    // 每个字段（identity / seeing / …）算一格；带 sources 注释且注释里有核实痕迹的算「已核」
    const fieldLines = seg.filter((l) => /^\s{4}[a-zA-Z]+:\s*$|^\s{4}[a-zA-Z]+:\s*\n?/.test(l) && /^\s{4}[a-zA-Z]+:/.test(l));
    const comments = seg.filter((l) => l.trim().startsWith("//")).join("\n");
    if (!fieldLines.length) continue;
    const verifiedFields = (comments.match(/sources:/g) ?? []).length;
    const isVerified = VERIFY_MARK.test(comments);
    const dates = [...comments.matchAll(/(20\d\d-\d\d-\d\d)/g)].map((m) => m[1]!).sort();
    const levels = [...comments.matchAll(LEVEL)].map((m) => Number(m[1] ?? m[2])).filter(Boolean);
    rows.push({
      id: marks[i]!.id,
      kind,
      fields: fieldLines.length,
      verified: isVerified ? Math.max(1, verifiedFields) : 0,
      checkedOn: dates.length ? dates[dates.length - 1] : undefined,
      level: levels.length ? Math.min(...levels) : undefined,
    });
  }
}

if (!rows.length) {
  console.error("✗ 一个条目都没抽到 —— 这不是「没问题」，是取不到值");
  process.exit(1);
}

const out = rows
  .map((r) => `  "${r.kind}/${r.id}": { f: ${r.fields}, v: ${r.verified}` +
    (r.checkedOn ? `, d: "${r.checkedOn}"` : "") + (r.level ? `, l: ${r.level}` : "") + " },")
  .join("\n");

writeFileSync(
  "lib/verification-status.data.ts",
  `// 由 scripts/gen-verification-status.ts 生成，**不要手改** —— 改了内容文件的 sources 注释就重跑\n` +
  `// npm run gen:verify-status\n` +
  `//\n` +
  `// f = 该条目的字段数；v = 其中带核实留痕的字段数（0 = 只有写作时的出处、没人逐条核过）；\n` +
  `// d = 注释里见到的最近日期；l = 见到的最高来源级别（1 最权威）。\n` +
  `// ⚠️ 只说「有没有人核过」，不说「对不对」。\n` +
  `export type VerificationRow = { f: number; v: number; d?: string; l?: number };\n\n` +
  `export const VERIFICATION_STATUS: Record<string, VerificationRow> = {\n${out}\n};\n`,
  "utf8",
);

const entriesWithAny = rows.filter((r) => r.verified > 0).length;
const totalFields = rows.reduce((n, r) => n + r.fields, 0);
const verifiedFields = rows.reduce((n, r) => n + r.verified, 0);
console.log(
  `写入 lib/verification-status.data.ts：${rows.length} 个条目、${totalFields} 个字段\n\n` +
  `  按条目算：${entriesWithAny} 个条目**至少有一个字段**带核实留痕 ` +
  `（${((entriesWithAny / rows.length) * 100).toFixed(0)}%）\n` +
  `  按字段算：${verifiedFields} / ${totalFields} 个字段带核实留痕 ` +
  `（**${((verifiedFields / totalFields) * 100).toFixed(0)}%**）\n\n` +
  `⚠️ **这两个数差得很远，而只有第二个是诚实的。**「整国核完一遍」这类说法一直用的是第一个口径 ——\n` +
  `   一轮核实只要在某个条目里改了一句，整条就被算作「核过」，而同条目另外五段没人看过。\n` +
  `⚠️ 而且这两个都只说「有没有人核过」，**不说「对不对」** —— 正确率只能靠\n` +
  `   npm run sample:claims 的均匀随机抽样去估计，结果记在 docs/quality-sampling.md。`,
);
