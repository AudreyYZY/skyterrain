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
 *               **只写正文**，前缀由本脚本加；自带前缀会被剥掉（防 `// x sources: // x sources:`）
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
  /**
   * `sourceNote` 只写正文，**不要自带 `// <field> sources:` 前缀** —— 这里会加。
   * 自带了就会写出 `// history sources: // history sources: ……`（2026-09-10 一轮里写出 28 处，
   * 中英各 28）。前缀重复不影响编译、不影响任何检查、肉眼扫过去也像正常留痕，
   * 所以只能在写入这一刻拦。既然是我自己反复犯的手误，就地剥掉而不是报错。
   */
  // 标签可能是英文字段名（`history`）、斜杠并列（`seeing/formation`），也可能是中文（`全六段`）——
  // 第一版只认 [A-Za-z/]，于是「// 全六段 sources: …」照样叠出了重复前缀。
  const body = note.replace(/^\s*\/\/\s*[A-Za-z/\u4e00-\u9fa5]+\s+sources:\s*/, "");
  const lines = body.split("\n");
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

/**
 * 改完之后，**拿那个「错的值」在全库再搜一遍** —— 把一条靠自觉执行的判据变成机械动作。
 *
 * 为什么必须自动做：2026-09-10 一天之内栽了三次，每次都是「改了查出问题的那一条、
 * 没回头搜别处」：
 *   · `oland-alvar` 的「石炭纪」改了，`gotland` 里对同一片荒原的交叉引用原样留着；
 *   · `bardenas-reales` 的「阿拉贡王室」改了，`ebro-basin` 里还写着阿拉贡；
 *   · `torne-river` 里捏造的遗产名「梅尔梅奥河谷」改了，而它**一共住在四个地方**
 *     （还有 tornionjoki-fi 的中英两段 + terrain-registry 的两条 source）。
 * 三次都是子代理在**后面那一批**里替我抓出来的 —— 也就是说，全靠运气。
 *
 * 做法：把 find 与 replace 逐字比对，取出**被删掉的那些片段**（中文 ≥4 字、英文 ≥12 字符），
 * 拿它们去搜五个内容文件 + 注册表。搜到的都列出来，**由人判断是不是同一回事** ——
 * 命中不代表有错（「安特卫普港」在别处出现 8 次都是正常的地理指代）。
 *
 * 这里只报告、不拦截：真要拦，就会变成每次改个措辞都要解释一遍。
 */
/** 扫的是**改完之后**的文本：内容文件用内存里已打好补丁的那份（dry-run 也能扫），注册表另读 */
const scanTargets: Array<[string, string]> = [
  [FILE_SETS.terrain.zh, src.terrain.zh],
  [FILE_SETS.terrain.en, src.terrain.en],
  [FILE_SETS.travel.zh, src.travel.zh],
  [FILE_SETS.travel.en, src.travel.en],
  [FILE_SETS.route.zh, src.route.zh],
  ["lib/terrain-registry.ts", await readFile("lib/terrain-registry.ts", "utf8").catch(() => "")],
];
/**
 * 被删掉的片段 —— 这次真正改掉的是**哪几个字**。
 *
 * 不能用「掐公共前后缀」：`石炭纪` → `密西西比亚纪` 两侧都以「纪」结尾，
 * 后缀会把「纪」吃掉、只剩「石炭」两字；而补丁经常在句尾**追加**从句，
 * 公共后缀直接变成 0，整句都被当成「改掉的部分」，拿去搜只会命中它自己。
 *
 * 改用 n-gram 覆盖：find 里每个位置，只要它所在的某个 4 字窗口在 replace 里出现过，
 * 就算「没动」；剩下连成片的位置就是真正改掉的那几个字。
 * `……的石炭纪石灰岩……` → 「石炭纪」（因为「纪石灰」在 replace 里有，覆盖到了）。
 * `the Kingdom of Aragon's royal house` → 「Aragon」。
 *
 * 门槛：中文 ≥2 字、拉丁 ≥5 字符 —— 「最大」→「第二大」删掉的是一个「最」字，1 字不搜；
 * 而「石炭纪」→「密西西比亚纪」因为共享结尾的「纪」，只剩「石炭」两字，这两字拿去搜是有效的。
 * 超过 40 就跳过 —— 那是整句重写，别处不会一字不差地重复。
 */
function removedFragments(find: string, replace: string): string[] {
  const W = 4;
  const covered = new Array(find.length).fill(false);
  for (let j = 0; j + W <= find.length; j++) {
    if (replace.includes(find.slice(j, j + W))) {
      for (let i = j; i < j + W; i++) covered[i] = true;
    }
  }
  const out: string[] = [];
  let buf = "";
  for (let i = 0; i < find.length; i++) {
    if (covered[i]) { if (buf) { out.push(buf); buf = ""; } }
    else buf += find[i];
  }
  if (buf) out.push(buf);
  return out
    .map((t) => t.trim())
    .filter((t) => {
      const min = /[\u4e00-\u9fa5]/.test(t) ? 2 : 5;
      return t.length >= min && t.length <= 40;
    });
}

const stale: string[] = [];
const seenFrag = new Set<string>();
for (const f of round.findings) {
  for (const lang of ["zh", "en"] as const) {
    const p = f.textPatch?.[lang];
    if (!p) continue;
    for (const frag of removedFragments(p.find, p.replace)) {
      if (seenFrag.has(frag)) continue;
      seenFrag.add(frag);
      /**
       * **出现太多次的片段一律不报** —— 它是常用词，不是某条具体说法。
       * 实测（2026-09-11，全库六个文件合计）：
       *   有用的：`梅尔梅奥` 2 · `Aragon` 6 · `阿拉贡` 7
       *   纯噪音：`Middle Ages,` 15 · `纳瓦拉` 18 · `tradition of` 26 · `石炭` 46 · `transport` 306
       * 门槛取 10 —— 第一版没有这道过滤，波兰批一次报出「transport 仍出现在 213 处」这种，
       * **报告太长就等于没人看**，和当初 ⚑ 标了 50 组是同一个毛病。
       */
      const hits = scanTargets
        .filter(([, text]) => text)
        .map(([file, text]) => [file, text.split(frag).length - 1] as const)
        .filter(([, n]) => n > 0);
      const total = hits.reduce((a, [, n]) => a + n, 0);
      if (total > 10) continue;
      for (const [file, n] of hits) {
        stale.push(`  「${frag}」仍出现在 ${file}（${n} 处）  ← ${f.key}`);
      }
    }
  }
}
if (stale.length) {
  console.log(
    `\n⚠️ 回头搜：刚改掉的说法在别处还留着 ${stale.length} 条 —— **逐条看一遍**，\n` +
    `   同一件事就一起改；只是碰巧同字（比如作为地理指代的港口名）就放过：\n` + stale.join("\n"),
  );
} else {
  console.log("\n✓ 回头搜：刚改掉的说法在全库别处没有残留");
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
