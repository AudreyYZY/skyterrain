/**
 * 易过期断言扫描（不联网）
 *   运行: npm run check:claims
 *
 * 这个脚本**查不了内容对不对** —— 那要联网，是 /verify-content 的事。
 * 它只查「写法上就已经不可靠」的句子，每一类在 docs/known-errors.md 里都有实例：
 *
 *   C6   人口数字没有年份 —— 「上海都会区人口约 2500 万」是哪一年、什么口径？
 *   C1a  主观最高级 —— 「茶马古道最险峻的一段」这种谁也核实不了的判断
 *   C1b  排名断言没有口径 —— 横滨「日本人口第二多的市」错在把两种口径混了
 *   C6i  同一条目的 identity 与 howItWorks 给出两个互相矛盾的「全市人口」
 *   D1b  「公报未单列市区人口」之后又给出一个市区人口 —— 免责声明与数字自相矛盾
 *   D4   拼接漏空格造成的粘连句 —— 「…of the flight.Easter Island lies…」
 *
 * 存量很大，一次性清不完，所以这里不是「有就报错」，而是**棘轮**：
 * 与 docs/claims-baseline.json 里记下的基线比，**只许降不许升**。
 * 新写的内容想加一句没年份的人口数，就会让计数上升，脚本直接失败。
 *
 * 基线刷新（只在真的降下来之后做）：
 *   npm run check:claims -- --update-baseline
 */

import { readFile, writeFile } from "node:fs/promises";
import { collectTtsSegments } from "../lib/tts-manifest.ts";
import { splitSentences } from "../lib/sentences.ts";
import {
  FRESH_SINCE,
  CENSUS_ZH,
  CENSUS_EN,
  isMissingYear,
  isStale,
  isSubjectiveSuperlative,
  isUnqualifiedRank,
  isPriceWithoutYear,
  isHardcodedVisa,
} from "./claim-rules.ts";

const BASELINE_PATH = "docs/claims-baseline.json";
const EXEMPT_PATH = "docs/claims-stale-exempt.json";
const UPDATE = process.argv.includes("--update-baseline");
const SHOW = Number(process.argv.find((a) => a.startsWith("--show="))?.slice(7) ?? 8);

// ── 规则 ───────────────────────────────────────────────────────────────

/**
 * C6：**人口**这类逐年变化的量。
 *
 * 只盯人口，不盯面积、海拔、长度 —— 后三者基本不随时间变，把它们一起报出来会
 * 淹掉真正会过期的那批（实测面积类占 700 多条，人口类才几十条）。
 * 「上海都会区人口约 2500 万」是这一类的原型：没有年份，也没说是市域常住人口
 * 还是都市圈口径。
 */
const PERISHABLE_ZH =
  /(常住人口|户籍人口|城区人口|都会区人口|市区人口|人口|居民)[^。；！？]{0,20}?\d[\d.,]*\s*(万|亿|人|户)/;
const PERISHABLE_EN =
  /\b(population|inhabitants|residents)\b[^.;!?]{0,40}?[\d.,]+\s*(million|billion|thousand|people|residents|inhabitants)/i;

/** D4：句号后紧跟大写字母 —— 多段字符串拼接漏了空格 */
const RUN_ON = /[a-z)][.!?][A-Z]/;

/**
 * D1b：**一句话里先声明「公报没有单列市区人口」，紧接着又给出一个市区人口**。
 *
 * 三个真实实例（吉林市 / 乐山 / 宜昌，都只在英文版里）：中文老老实实写着
 * 「（公报未单列市区人口）」，英文却在同一句里多出一个「about 1.23 million in the
 * urban area」——那个 123 万还是隔壁镇江条目的数字。乐山 2024 年的城镇人口实为 177.1 万，
 * 与它对不上任何官方口径。
 *
 * 这不是「数字过期」也不是「查错了」，是**免责声明与数字自相矛盾**，
 * 逐条人工核只能撞见其中两个，第三个是靠这条规则扫出来的。
 */
const NO_URBAN_FIGURE_ZH = /（?(?:公报)?(?:未|不)单列市(?:区|辖区)人口）?/;
const NO_URBAN_FIGURE_EN =
  /\bdoes not (?:report|give|publish) a separate urban[- ](?:core|district|area)\b/i;
const HAS_URBAN_FIGURE_ZH = /市(?:区|辖区)约\s*[\d.,]+\s*万/;
const HAS_URBAN_FIGURE_EN =
  /\b(?:about|some|roughly)\s+[\d.,]+\s*(?:million|thousand)?\s+in the urban (?:area|core|districts?)\b/i;

/**
 * C6i：**同一个条目的 identity 与 howItWorks 给出两个互相矛盾的「全市人口」**。
 *
 * 这是这一轮反复撞到的形状，而且逐条人工核实很容易滑过去 —— 注意力在「这个数对不对」上，
 * 不在「同一篇里另一段写的是什么」上。已经抓到的：
 *   首尔 950 万 / 960 万（两段都过期，还互相打架）
 *   库尔勒「五十余万」/「2020 年约 78 万」（前者查无出处）
 *   济州市「含外国籍 50 万」/「内国人 49 万」（两个口径都没写明）
 *   胡志明市 900 万 /「2025 年并区后 1400 万」（前者是并区前的数）
 *   芹苴 120 万 / 420 万（同上）
 *   塞萨洛尼基 identity 改对了「地区单位」、howItWorks 还写着「都会区」
 *
 * 判据：两段各取一个「全市档」的人口数（句中带次级口径词的不算），相差超过 5% 就报。
 * 两段年份不同且其中一段是普查数时放过 —— 普查数与年度估计本来就会差一截。
 */
const CROSS_SUB_ZH =
  /(市区|城区|都会区|市辖区|新区|地区单位|城市吸引区|建成区|首都圈|大区|这个省|该省|全省|全国|户籍|城镇人口|游客|学生|外国籍|老城|镇|口径|登记人口)/;
const CROSS_SUB_EN =
  /\b(urban|metropolitan|metro|agglomeration|regional unit|capital area|built-up|province|prefecture|state|nationwide|visitors|students|foreign residents|old town|with the towns of|district|districts|New Area|estates|register|registered)\b/i;
const CROSS_POP_ZH = /(常住人口|登录人口|普查人口|人口|居民)/;
const CROSS_POP_EN = /\b(population|people|residents|inhabitants)\b/i;
/** 中文数字紧跟在「人口」后；英文数字通常在词之前，所以取句中第一个带单位的数 */
const CROSS_NUM_ZH = /(?:人口|居民)[^。；！？]{0,10}?([\d.,]+)\s*(万|亿)/;
const CROSS_NUM_EN = /([\d.,]+)\s*(million|thousand)\b/i;
/**
 * 次级口径词只在**数字所在的那个分句**里才算数。
 *
 * 整句一刀切会误伤：格拉茨的 identity 是「…人口约29万，坐落在穆尔河畔，**老城**1999年列入
 * 世界遗产」——「老城」跟人口毫无关系，却把整句排除掉了，这条真的「两段人口打架」因此漏报。
 * 反过来，定长窗口又太短：「with a **metropolitan** population of about 2.6 million」里
 * 那个词离数字 35 个字符，固定 22 字的窗口够不着，于是都会区人口被当成了市人口。
 * 按分句切（逗号/顿号/分号之间）两头都能兼顾。
 */
const CLAUSE_SPLIT = /[，,、；;—]/;
function clauseOf(s: string, at: number, len: number): string {
  let start = 0;
  for (let i = at - 1; i >= 0; i--) if (CLAUSE_SPLIT.test(s[i]!)) { start = i + 1; break; }
  let end = s.length;
  for (let i = at + len; i < s.length; i++) if (CLAUSE_SPLIT.test(s[i]!)) { end = i; break; }
  return s.slice(start, end);
}
function nearSub(s: string, at: number, len: number, zh: boolean): boolean {
  return (zh ? CROSS_SUB_ZH : CROSS_SUB_EN).test(clauseOf(s, at, len));
}
/**
 * 差多少算矛盾。
 *
 * 定在 20% 而不是 5%：5%–15% 的差绝大多数是「identity 写了个不带年份的整数、
 * howItWorks 写了个带年份的精确值」，那本来就由 **C6（缺年份）** 管，
 * 在这里重报一遍只会把真正的冲突淹掉。20% 以上的差才是这条规则要抓的东西 ——
 * 口径搞错了（拿都会区当市、拿省当市）、主体搞错了、或者行政区划合并后一段没跟上。
 */
const CROSS_TOLERANCE = 0.20;

function crossValue(s: string, zh: boolean): number | null {
  const m = (zh ? CROSS_NUM_ZH : CROSS_NUM_EN).exec(s);
  if (!m) return null;
  const n = parseFloat(m[1]!.replace(/,/g, ""));
  if (!Number.isFinite(n)) return null;
  const unit = m[2]!.toLowerCase();
  const mult = unit === "亿" ? 1e8 : unit === "万" ? 1e4 : unit === "million" ? 1e6 : 1e3;
  return n * mult;
}

interface CrossRow { section: string; sentence: string; v: number; census: boolean }

type Rule =
  | "C6-人口数字缺年份"
  | "C6d-数字不是最新一期"
  | "C6e-价格缺年份"
  | "C6f-签证天数写死"
  | "C1a-主观最高级"
  | "C1b-排名断言缺口径"
  | "C6i-同条目两段人口打架"
  | "D1b-说了没单列市区人口又给出市区人口"
  | "D4-粘连句";

interface Hit {
  rule: Rule;
  kind: string;
  id: string;
  section: string;
  lang: string;
  sentence: string;
}

/**
 * C6d 的豁免表：这些条目的年份**确实旧**，但已经核实过「这就是能查到的最新一期」
 * （该级别公报不含人口 / 那年起只发户籍 / 那一版删了人口章节 / 公报取不到数）。
 *
 * 没有这张表的话，每一轮核实都会把它们重新报出来，然后下一个人再去核一遍、
 * 再得出同样的结论 —— 或者更糟，为了让计数下降而硬填一个没核到的数字。
 * `recheckAfter` 到期会单独提示，那才是这张表真正的用处：它把「什么时候该回来看」
 * 这件事从人的记忆里搬进了脚本。
 */
interface Exempt { key: string; reason: string; confirmedOn: string; recheckAfter: string }
const exemptFile: { entries: Exempt[] } = JSON.parse(await readFile(EXEMPT_PATH, "utf8"));
const exemptBy = new Map(exemptFile.entries.map((e) => [e.key, e]));

const hits: Hit[] = [];
const exempted: { key: string; e: Exempt }[] = [];
/** C6i 用：按「条目 + 语言」攒 identity / howItWorks 两段的全市人口 */
const crossByEntry = new Map<string, { seg: (typeof segments)[number]; rows: CrossRow[] }>();

const { segments } = await collectTtsSegments();

for (const seg of segments) {
  const zh = seg.lang === "zh-CN";

  const noUrban = zh ? NO_URBAN_FIGURE_ZH : NO_URBAN_FIGURE_EN;
  const hasUrban = zh ? HAS_URBAN_FIGURE_ZH : HAS_URBAN_FIGURE_EN;
  if (noUrban.test(seg.text) && hasUrban.test(seg.text)) {
    hits.push({
      ...seg,
      rule: "D1b-说了没单列市区人口又给出市区人口",
      sentence: seg.text.match(/.{0,40}(?:未单列|does not (?:report|give|publish) a separate).{0,90}/i)?.[0] ?? "",
    });
  }

  if (RUN_ON.test(seg.text)) {
    hits.push({ ...seg, rule: "D4-粘连句", sentence: seg.text.match(/.{0,30}[a-z)][.!?][A-Z].{0,30}/)?.[0] ?? "" });
  }

  const crossable =
    seg.kind === "travel" && (seg.section === "identity" || seg.section === "howItWorks");

  for (const s of splitSentences(seg.text)) {
    if (crossable && (zh ? CROSS_POP_ZH : CROSS_POP_EN).test(s)) {
      const nm = (zh ? CROSS_NUM_ZH : CROSS_NUM_EN).exec(s);
      const v = nm && !nearSub(s, nm.index, nm[0].length, zh) ? crossValue(s, zh) : null;
      if (v !== null && v >= 1000) {
        const key = `${seg.id}|${seg.lang}`;
        if (!crossByEntry.has(key)) crossByEntry.set(key, { seg, rows: [] });
        crossByEntry.get(key)!.rows.push({
          section: seg.section,
          sentence: s,
          v,
          census: (zh ? CENSUS_ZH : CENSUS_EN).test(s),
        });
      }
    }
    if (isMissingYear(s, zh)) {
      hits.push({ ...seg, rule: "C6-人口数字缺年份", sentence: s });
    }
    if (isStale(s, zh)) {
      const key = `${seg.kind}/${seg.id}/${seg.section}`;
      const ex = exemptBy.get(key);
      if (ex) {
        if (!exempted.some((x) => x.key === key)) exempted.push({ key, e: ex });
      } else {
        hits.push({ ...seg, rule: "C6d-数字不是最新一期", sentence: s });
      }
    }
    // 判据全部来自 scripts/claim-rules.ts —— 与 list:claims 共用同一份，
    // 「之一」「按…计」这类限定语的豁免也在那里（达沃「按行政区划面积计菲律宾最大」
    // 是正确写法的范例，不该被报出来）。
    if (isSubjectiveSuperlative(s, zh)) {
      hits.push({ ...seg, rule: "C1a-主观最高级", sentence: s });
    }
    if (isPriceWithoutYear(s, zh)) {
      hits.push({ ...seg, rule: "C6e-价格缺年份", sentence: s });
    }
    if (isHardcodedVisa(s, zh)) {
      hits.push({ ...seg, rule: "C6f-签证天数写死", sentence: s });
    }
    if (isUnqualifiedRank(s, zh)) {
      hits.push({ ...seg, rule: "C1b-排名断言缺口径", sentence: s });
    }
  }
}

// C6i：两段的「全市档」人口对不上
for (const [, { seg, rows }] of crossByEntry) {
  const ident = rows.filter((r) => r.section === "identity");
  const hiw = rows.filter((r) => r.section === "howItWorks");
  if (!ident.length || !hiw.length) continue;
  const a = ident.reduce((m, r) => (r.v > m.v ? r : m));
  const b = hiw.reduce((m, r) => (r.v > m.v ? r : m));
  // 普查数与年度估计本来就会差一截，只要写明了就不算矛盾
  if (a.census !== b.census) continue;
  if (Math.abs(a.v - b.v) / Math.max(a.v, b.v) <= CROSS_TOLERANCE) continue;
  hits.push({
    ...seg,
    rule: "C6i-同条目两段人口打架",
    sentence: `identity「${a.sentence.slice(0, 45)}」 vs howItWorks「${b.sentence.slice(0, 45)}」`,
  });
}

// ── 报告 ───────────────────────────────────────────────────────────────

const counts: Record<string, number> = {};
for (const h of hits) counts[h.rule] = (counts[h.rule] ?? 0) + 1;

const RULES: Rule[] = [
  "C6-人口数字缺年份",
  "C6d-数字不是最新一期",
  "C6e-价格缺年份",
  "C6f-签证天数写死",
  "C1a-主观最高级",
  "C1b-排名断言缺口径",
  "C6i-同条目两段人口打架",
  "D1b-说了没单列市区人口又给出市区人口",
  "D4-粘连句",
];

// ── C6d 豁免：已核实「这就是最新一期」的条目 ────────────────────────────
const today = new Date().toISOString().slice(0, 7);
const due = exempted.filter((x) => x.e.recheckAfter <= today);
const stale = [...exemptBy.keys()].filter((k) => !exempted.some((x) => x.key === k));

console.log("易过期断言扫描（对应 docs/known-errors.md 的错误类型）");
console.log(`  扫描了 ${segments.length} 段正文`);
console.log(`  今年 ${FRESH_SINCE + 1}，统计时点早于 ${FRESH_SINCE} 年的算「不是最新一期」（普查、法定人口等定义上滞后的口径除外）\n`);

console.log(
  `  C6d 另有 ${exempted.length} 个条目已核实「这就是最新一期」，列在 ${EXEMPT_PATH} 里不计入\n`,
);

for (const rule of RULES) {
  const n = counts[rule] ?? 0;
  console.log(`${rule}  ${n} 处`);
  const sample = hits.filter((h) => h.rule === rule).slice(0, SHOW);
  for (const h of sample) {
    const where = `${h.kind}/${h.id}/${h.section} [${h.lang}]`;
    console.log(`    ${where.padEnd(46)} ${h.sentence.slice(0, 60)}`);
  }
  if (n > SHOW) console.log(`    …还有 ${n - SHOW} 处（--show=N 看更多）`);
  console.log();
}

// ── 棘轮 ───────────────────────────────────────────────────────────────

interface Baseline {
  note: string;
  updatedOn: string;
  counts: Record<string, number>;
}

if (UPDATE) {
  const baseline: Baseline = {
    note: "npm run check:claims 的棘轮基线：这几类计数只许降不许升。降下来之后用 --update-baseline 刷新。",
    updatedOn: new Date().toISOString().slice(0, 10),
    counts: Object.fromEntries(RULES.map((r) => [r, counts[r] ?? 0])),
  };
  await writeFile(BASELINE_PATH, `${JSON.stringify(baseline, null, 2)}\n`);
  console.log(`已刷新基线 ${BASELINE_PATH}`);
  process.exit(0);
}

let baseline: Baseline | null = null;
try {
  baseline = JSON.parse(await readFile(BASELINE_PATH, "utf8")) as Baseline;
} catch {
  console.log(`没有找到 ${BASELINE_PATH} —— 先跑一次 npm run check:claims -- --update-baseline 建立基线`);
  process.exit(0);
}

let failures = 0;
console.log(`棘轮（基线 ${baseline.updatedOn}，只许降不许升）`);
for (const rule of RULES) {
  const now = counts[rule] ?? 0;
  const was = baseline.counts[rule] ?? 0;
  const delta = now - was;
  const mark = delta > 0 ? "✗" : delta < 0 ? "↓" : " ";
  console.log(`  ${mark} ${rule.padEnd(22)} 基线 ${String(was).padStart(5)} → 现在 ${String(now).padStart(5)}${delta === 0 ? "" : `（${delta > 0 ? "+" : ""}${delta}）`}`);
  if (delta > 0) failures++;
}

if (failures > 0) {
  console.error(
    `\n${failures} 类比基线更差了 —— 新写的内容里加进了没年份的数字、引的不是最新一期、` +
      `没加限定的最高级，或者拼接漏了空格。` +
      `要么改掉，要么在 docs/known-errors.md 里说明为什么这次是例外。`,
  );
} else {
  const down = RULES.filter((r) => (counts[r] ?? 0) < (baseline!.counts[r] ?? 0)).length;
  if (down > 0) console.log(`\n有 ${down} 类降下来了 —— 可以跑 npm run check:claims -- --update-baseline 固化`);
}

// ── 豁免表的两条提醒（不计入失败，但必须看得见）────────────────────────
if (due.length) {
  console.log(`\n⏰ ${EXEMPT_PATH} 里有 ${due.length} 条到了该回去复核的时间（recheckAfter ≤ ${today}）：`);
  for (const x of due) console.log(`   ${x.key}  —— ${x.e.reason.slice(0, 60)}…（${x.e.recheckAfter} 起）`);
  console.log("   到期不等于数字错了，只是「该去看看有没有新一期」。核完把 confirmedOn / recheckAfter 往后推。");
}
if (stale.length) {
  console.log(`\n🧹 ${EXEMPT_PATH} 里有 ${stale.length} 条已经用不上了（对应句子不再触发 C6d，可能是已经更新到最新一期）：`);
  for (const k of stale) console.log(`   ${k}`);
  console.log("   留着会掩盖以后真的过期 —— 确认之后删掉。");
}

process.exit(failures > 0 ? 1 : 0);
