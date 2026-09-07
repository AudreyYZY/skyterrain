/**
 * 把一轮**正文**核实结果写进 travel/terrain 内容文件
 *   运行: npm run verify:apply-text -- <findings.json> [--dry-run]
 *
 * 与 verify-apply.ts 的分工：
 *   verify:apply       → 改 data/routes/*.json 的结构化字段
 *   verify:apply-text  → 改 lib/travel-content.{zh,en}.ts 里的**句子**，并补
 *                        条目上方的 `// <field> sources:` 注释
 *   verify:report      → 开/关 issue + 记台账（两者共用同一份 findings.json）
 *
 * 为什么要脚本化：C6（数字缺年份）一类就有 524 处、367 个条目，中英各改一句、
 * 还要补一条来源注释。手改必然出现"改了中文忘了英文""注释写在了错的条目上"。
 *
 * findings.json 里与本脚本相关的字段：
 *   id          条目 id（travel-content 里的 key，如 shanghai / china-overview）
 *   field       段名（identity / howItWorks / layout …）
 *   textPatch   { zh?: {find, replace}, en?: {find, replace} }
 *               find 必须在**该条目内**唯一命中，命中 0 次或 >1 次都直接报错退出
 *   sourceNote  写进 `// <field> sources: ...` 的完整来源（可多行，用 \n 分隔）
 *
 * 只有 resolution === "fixed" 才应用 —— 与 verify-apply.ts 同一条规矩。
 */

import { readFile, writeFile } from "node:fs/promises";

const FILES = {
  zh: "lib/travel-content.zh.ts",
  en: "lib/travel-content.en.ts",
} as const;

interface TextPatch {
  find: string;
  replace: string;
}

interface Finding {
  key: string;
  kind: string;
  id: string;
  field: string;
  verdict: "ok" | "wrong" | "unknown";
  resolution: "fixed" | "open" | "blocked";
  textPatch?: { zh?: TextPatch; en?: TextPatch };
  sourceNote?: string;
}

interface Round {
  round: string;
  scope: string;
  findings: Finding[];
}

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const path = args.find((a) => !a.startsWith("--"));
if (!path) {
  console.error("用法: npm run verify:apply-text -- <findings.json> [--dry-run]");
  process.exit(2);
}

const round: Round = JSON.parse(await readFile(path, "utf8"));

/**
 * 定位一个条目在文件里的字节范围。
 * 条目形如 `  shanghai: {` 或 `  "china-overview": {`，到下一个同缩进的 `  },` 结束。
 */
function entryRange(src: string, id: string): [number, number] {
  const head = new RegExp(`^  (?:"${escapeRe(id)}"|${escapeRe(id)}): \\{$`, "m");
  const m = head.exec(src);
  if (!m) throw new Error(`找不到条目 ${id}`);
  const start = m.index;
  const end = src.indexOf("\n  },", start);
  if (end < 0) throw new Error(`条目 ${id} 没有找到结束的 "  },"`);
  return [start, end + 5];
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** 在条目块里替换一段文本；命中次数不是 1 就报错（别静默改错地方） */
function patchEntry(src: string, id: string, p: TextPatch, where: string): string {
  const [start, end] = entryRange(src, id);
  const block = src.slice(start, end);
  const n = block.split(p.find).length - 1;
  if (n !== 1) throw new Error(`${where}: "${p.find.slice(0, 40)}…" 在条目 ${id} 里命中 ${n} 次，必须正好 1 次`);
  return src.slice(0, start) + block.replace(p.find, p.replace) + src.slice(end);
}

/** 补 `// <field> sources: …` 注释，写在该字段那一行之前；已有的就整段替换 */
function upsertSourceNote(src: string, id: string, field: string, note: string, where: string): string {
  const [start, end] = entryRange(src, id);
  let block = src.slice(start, end);
  const lines = note.split("\n");
  const comment =
    `    // ${field} sources: ${lines[0]}\n` +
    lines.slice(1).map((l) => `    //   ${l}\n`).join("");

  const fieldRe = new RegExp(`^(    (?:"${escapeRe(field)}"|${escapeRe(field)}):)`, "m");
  const fm = fieldRe.exec(block);
  if (!fm) throw new Error(`${where}: 条目 ${id} 里没有字段 ${field}`);

  // 已有的同名注释块（连续的 `    // <field> sources:` 及其续行）先删掉
  const oldRe = new RegExp(`(?:^    // ${escapeRe(field)} sources:.*\\n(?:^    //   .*\\n)*)`, "m");
  if (oldRe.test(block)) block = block.replace(oldRe, "");

  const fm2 = fieldRe.exec(block)!;
  block = block.slice(0, fm2.index) + comment + block.slice(fm2.index);
  return src.slice(0, start) + block + src.slice(end);
}

let zh = await readFile(FILES.zh, "utf8");
let en = await readFile(FILES.en, "utf8");
let patched = 0;
let noted = 0;

for (const f of round.findings) {
  if (!f.textPatch && !f.sourceNote) continue;
  if ((f.textPatch || f.sourceNote) && f.resolution !== "fixed") {
    throw new Error(`${f.key}: 给了 textPatch/sourceNote 但 resolution 是「${f.resolution}」`);
  }
  if (f.textPatch?.zh) {
    zh = patchEntry(zh, f.id, f.textPatch.zh, f.key);
    patched++;
  }
  if (f.textPatch?.en) {
    en = patchEntry(en, f.id, f.textPatch.en, f.key);
    patched++;
  }
  if (f.sourceNote) {
    // 来源注释两边都写：谁单看一个文件都能看到这句话是从哪儿来的
    zh = upsertSourceNote(zh, f.id, f.field, f.sourceNote, f.key);
    en = upsertSourceNote(en, f.id, f.field, f.sourceNote, f.key);
    noted += 2;
  }
  console.log(`  fixed ${f.id.padEnd(22)} ${f.field}`);
}

if (!DRY) {
  await writeFile(FILES.zh, zh);
  await writeFile(FILES.en, en);
}

console.log(
  `\n${round.round}：改句子 ${patched} 处，写来源注释 ${noted} 处${DRY ? "（dry-run，什么都没真写）" : ""}`,
);
console.log(
  DRY
    ? "去掉 --dry-run 真写，然后跑 npm run check:claims 看棘轮，再跑 npm run verify:report"
    : "接着跑 npm run check:claims 看棘轮降了多少，再跑 npm run verify:report 落地 issue 与台账",
);
