/**
 * 把一轮**正文**核实结果写进 travel/terrain 内容文件
 *   运行: npm run verify:apply-text -- <findings.json> [--dry-run]
 *
 * 与 verify-apply.ts 的分工：
 *   verify:apply       → 改 data/routes/*.json 的结构化字段
 *   verify:apply-text  → 改 lib/travel-content.{zh,en}.ts 或 lib/terrain-content.{zh,en}.ts
 *                        里的**句子**，并补条目上方的 `// <field> sources:` 注释
 *                        （按 finding 的 kind 选文件：terrain → 地形讲解，
 *                        route/routes → 航线解说，其余 → 城市）
 *   verify:report      → 开/关 issue + 记台账（两者共用同一份 findings.json）
 *
 * 为什么要脚本化：C6（数字缺年份）一类就有 524 处、367 个条目，中英各改一句、
 * 还要补一条来源注释。手改必然出现"改了中文忘了英文""注释写在了错的条目上"。
 *
 * findings.json 里与本脚本相关的字段：
 *   id          条目 id（travel-content 里的 key，如 shanghai / china-overview）
 *   field       段名（identity / howItWorks / layout …）
 *   textPatch   { zh?: {find, replace}, en?: {find, replace} }
 *               find 必须在**该条目内**唯一命中，命中 0 次或 >1 次都直接报错退出。
 *               注意「条目」是整个 city 块、**不是单个字段** —— identity 与 howItWorks
 *               在同一个块里，所以 identity 的 "with about 25,000 people" 会被
 *               howItWorks 的 "with about 25,000 people in 2021" 一起命中。
 *               短句是前缀时要把后文一起带上（"…people — the largest settlement"）。
 *   sourceNote  写进 `// <field> sources: ...` 的完整来源（可多行，用 \n 分隔）
 *
 * 只有 resolution === "fixed" 才应用 —— 与 verify-apply.ts 同一条规矩。
 */

import { readFile, writeFile } from "node:fs/promises";

/**
 * 两套内容文件，按 finding 的 `kind` 选：
 *   kind: "terrain" → 地形讲解（6 板块：seeing / formation / observation / distinguish / concept / history）
 *   其余（travel / city …） → 旅游模式的城市与国家概览
 * 两个文件的条目形状一样（`  <id>: {` … `  },`），所以补丁逻辑共用。
 */
const FILE_SETS = {
  travel: { zh: "lib/travel-content.zh.ts", en: "lib/travel-content.en.ts" },
  terrain: { zh: "lib/terrain-content.zh.ts", en: "lib/terrain-content.en.ts" },
  // 航线解说的中英文写在**同一个文件**里（`{ study: { "zh-CN": …, "en-US": … } }`），
  // 所以 zh 与 en 指向同一路径 —— 补丁按 textPatch.zh / textPatch.en 分别命中各自那半边。
  route: { zh: "lib/route-narration.ts", en: "lib/route-narration.ts" },
} as const;
/** 航线解说改完必须重跑锚点，否则句数与锚点表对不上、check:anchors 会失败 */
const ROUTE_REMINDER =
  "\n⚠️ 这一轮改了 lib/route-narration.ts 的解说文字 —— **必须跑 `npm run gen:anchors`**，\n" +
  "   否则句数与 lib/route-anchors.data.ts 对不上，`npm run check:anchors` 会报错。\n" +
  "   （`source: \"auto\"` 的锚点会被重跑覆盖，`\"manual\"` 的保留。）";
type FileSet = keyof typeof FILE_SETS;
const setOf = (kind: string): FileSet =>
  kind === "terrain" ? "terrain" : kind === "route" || kind === "routes" ? "route" : "travel";

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

/**
 * 正文是写在 TS 双引号字符串里的，替换文本里出现**未转义的双引号**会直接把文件写坏
 * （踩过：台北那条的替换文本里写了 "Greater Taipei"，写进去之后 travel-content.en.ts
 * 直接语法错误，check:claims / tsc 全挂）。中文用「」、英文改用破折号或单引号。
 */
function assertNoRawQuote(s: string, where: string, lang: string): void {
  const bad = s.replace(/\\"/g, "").includes('"');
  if (bad) {
    throw new Error(
      `${where}（${lang}）: 替换文本里有未转义的双引号 —— 正文是写在 TS 双引号字符串里的，` +
        `这样会把文件写坏。中文用「」，英文改用破折号或单引号，真要双引号就写成 \\"。`,
    );
  }
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

const src: Record<FileSet, { zh: string; en: string }> = {
  travel: {
    zh: await readFile(FILE_SETS.travel.zh, "utf8"),
    en: await readFile(FILE_SETS.travel.en, "utf8"),
  },
  terrain: {
    zh: await readFile(FILE_SETS.terrain.zh, "utf8"),
    en: await readFile(FILE_SETS.terrain.en, "utf8"),
  },
  route: {
    zh: await readFile(FILE_SETS.route.zh, "utf8"),
    en: await readFile(FILE_SETS.route.en, "utf8"),
  },
};
const touched = new Set<FileSet>();
let patched = 0;
let noted = 0;

for (const f of round.findings) {
  if (!f.textPatch && !f.sourceNote) continue;
  if ((f.textPatch || f.sourceNote) && f.resolution !== "fixed") {
    throw new Error(`${f.key}: 给了 textPatch/sourceNote 但 resolution 是「${f.resolution}」`);
  }
  const fs = setOf(f.kind);
  touched.add(fs);
  // 航线：zh 与 en 是同一个文件，两半补丁必须落在同一份字符串上
  const sameFile = FILE_SETS[fs].en === FILE_SETS[fs].zh;
  if (f.textPatch?.zh) {
    assertNoRawQuote(f.textPatch.zh.replace, f.key, "zh");
    src[fs].zh = patchEntry(src[fs].zh, f.id, f.textPatch.zh, f.key);
    if (sameFile) src[fs].en = src[fs].zh;
    patched++;
  }
  if (f.textPatch?.en) {
    assertNoRawQuote(f.textPatch.en.replace, f.key, "en");
    src[fs].en = patchEntry(src[fs].en, f.id, f.textPatch.en, f.key);
    if (sameFile) src[fs].zh = src[fs].en;
    patched++;
  }
  if (f.sourceNote) {
    // 来源注释两边都写：谁单看一个文件都能看到这句话是从哪儿来的
    src[fs].zh = upsertSourceNote(src[fs].zh, f.id, f.field, f.sourceNote, f.key);
    if (sameFile) src[fs].en = src[fs].zh;
    else src[fs].en = upsertSourceNote(src[fs].en, f.id, f.field, f.sourceNote, f.key);
    noted += sameFile ? 1 : 2;
  }
  console.log(`  fixed ${fs === "terrain" ? "[地形] " : ""}${f.id.padEnd(22)} ${f.field}`);
}

if (!DRY) {
  for (const fs of touched) {
    await writeFile(FILE_SETS[fs].zh, src[fs].zh);
    // 航线解说的 zh/en 是同一个文件，写两次会把第二次的内容覆盖掉第一次的补丁
    if (FILE_SETS[fs].en !== FILE_SETS[fs].zh) await writeFile(FILE_SETS[fs].en, src[fs].en);
  }
}

console.log(
  `\n${round.round}：改句子 ${patched} 处，写来源注释 ${noted} 处${DRY ? "（dry-run，什么都没真写）" : ""}`,
);
console.log(
  DRY
    ? "去掉 --dry-run 真写，然后跑 npm run check:claims 看棘轮，再跑 npm run verify:report"
    : "接着跑 npm run check:claims 看棘轮降了多少，再跑 npm run verify:report 落地 issue 与台账",
);
if (touched.has("route")) console.log(ROUTE_REMINDER);
