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
import { HAS_YEAR, FRESH_SINCE, isMissingYear, isStale } from "./claim-rules.ts";

const BASELINE_PATH = "docs/claims-baseline.json";
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

/**
 * C1a：**主观**最高级 —— 「最险峻的一段」这种谁也核实不了的判断。
 *
 * 不报「最高峰是托木尔峰」这类客观最高级：那是有明确定义、可查、且不随时间变的
 * 事实描述，报出来只会把信噪比压垮（实测客观最高级有四千多处）。
 */
const SUBJECTIVE_SUP_ZH =
  /最(险峻|壮观|美丽|漂亮|著名|有名|重要|典型|繁华|精彩|值得|经典|迷人|震撼|优美|独特|舒适|适合|理想|好的)/;
const SUBJECTIVE_SUP_EN =
  /\b(most (spectacular|beautiful|famous|important|impressive|striking|scenic|charming|iconic|dramatic|stunning|picturesque)|finest|best[- ](known|loved|preserved))\b/i;

/**
 * C1b：**排名**断言（第二大、第三高…）。横滨「日本人口第二多的市」就是这一类：
 * 排名要看口径（是"市"建制还是都会区？）和年份，两样都没有就不该写。
 * 句子里有年份或限定语则放过。
 */
const RANK_ZH = /(第[二三四五六七八九十两]大|第[二三四五六七八九十两]高|排名第|位居第|第[二三四五六七八九十两]多)/;
const RANK_EN = /\b(second|third|fourth|fifth)[- ](largest|biggest|highest|longest|most populous|busiest)\b/i;
const QUALIFIER_ZH = /(之一|按|口径|计[，,、]|现存|当时|号称|之称|其中)/;
const QUALIFIER_EN = /\b(one of|among|by (area|population|land)|at the time|then)\b/i;

/**
 * C6-e：**钱**。票价、门票、通票、打车费 —— 这些比人口过期得还快，
 * 而且读者会拿它当预算依据。没有年份的价格等于没有价格。
 * 只报带**具体金额**的句子，「收费参观」这种不带数字的不报。
 */
// 一句话里同时出现「金额」和「与花钱有关的词」才算价格 —— 只看金额会把
// GDP、造价、投资额一起报出来；只看词又会漏掉「一张 365 欧元的年票」这种
// 数字在前、名词在后的语序。两个条件都要，且不限先后。
const AMOUNT_ZH =
  /\d[\d.,]*\s*(元|欧元|美元|日元|英镑|澳元|港币|新元|泰铢|林吉特|比索|卢比|克朗|兹罗提|里拉|坚戈)/;
const PRICE_WORD_ZH =
  /(票价|门票|收费|费用|车费|房价|均价|出租车|打车|年票|月票|通票|车票|船票|缆车|人均|起步价)/;
const AMOUNT_EN =
  /([€$£¥]\s?\d[\d.,]*|\b\d[\d.,]*\s?(euros?|dollars?|pounds?|yen|baht|ringgit|pesos?|kronor|zloty)\b)/i;
const PRICE_WORD_EN =
  /\b(fare|ticket|pass|costs?|price[sd]?|admission|entry fee|taxi|per person|per night)\b/i;
const isPrice = (s: string, zh: boolean) =>
  zh ? AMOUNT_ZH.test(s) && PRICE_WORD_ZH.test(s) : AMOUNT_EN.test(s) && PRICE_WORD_EN.test(s);

/**
 * C6-f：**签证天数写死**。项目早就定过口径（CLAUDE.md「中国政策类内容口径」）：
 * 免签天数不写死，只说"近年放宽、以官方最新公布为准"。这条把那个口径变成脚本。
 *
 * 带了"以…最新公布为准 / check … for the latest"这类**转向官方口径的免责语**就放过 ——
 * 哈萨克斯坦那条「多国公民可享受最长30天免签入境，具体以哈萨克斯坦外交部最新公布为准」
 * 正是正确写法的范例，不该被报出来。
 */
const VISA_ZH =
  /(免签|落地签|免办签证)[^。；！？]{0,14}?\d{1,3}\s*(天|日)|\d{1,3}\s*(天|日)[^。；！？]{0,6}(免签|落地签)/;
const VISA_EN =
  /\b(visa[- ]free|visa on arrival)\b[^.;!?]{0,20}?\b\d{1,3}[\s-]?days?\b|\b\d{1,3}[\s-]?days?\b[^.;!?]{0,14}\b(visa[- ]free|visa on arrival)\b/i;
/** 转向官方口径的免责语 —— 有它就说明作者没把政策写死 */
const DEFER_ZH = /(最新公布|最新规定|最新政策|以.{0,12}(官网|部|局|署).{0,6}为准|请以.{0,10}为准)/;
const DEFER_EN = /\b(check|refer to|consult)\b[^.;!?]{0,60}\b(latest|current|official|before you (travel|fly|go))\b/i;

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

type Rule =
  | "C6-人口数字缺年份"
  | "C6d-数字不是最新一期"
  | "C6e-价格缺年份"
  | "C6f-签证天数写死"
  | "C1a-主观最高级"
  | "C1b-排名断言缺口径"
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

const hits: Hit[] = [];

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

  for (const s of splitSentences(seg.text)) {
    if (isMissingYear(s, zh)) {
      hits.push({ ...seg, rule: "C6-人口数字缺年份", sentence: s });
    }
    if (isStale(s, zh)) {
      hits.push({ ...seg, rule: "C6d-数字不是最新一期", sentence: s });
    }
    // 「之一」「按…计」这类限定语一出现就放过 —— 达沃「按行政区划面积计菲律宾最大」
    // 是正确写法的范例，不该被报出来。
    const qual = (zh ? QUALIFIER_ZH.test(s) : QUALIFIER_EN.test(s)) || HAS_YEAR.test(s);
    if (!qual && (zh ? SUBJECTIVE_SUP_ZH.test(s) : SUBJECTIVE_SUP_EN.test(s))) {
      hits.push({ ...seg, rule: "C1a-主观最高级", sentence: s });
    }
    if (!HAS_YEAR.test(s) && isPrice(s, zh)) {
      hits.push({ ...seg, rule: "C6e-价格缺年份", sentence: s });
    }
    if ((zh ? VISA_ZH : VISA_EN).test(s) && !(zh ? DEFER_ZH : DEFER_EN).test(s)) {
      hits.push({ ...seg, rule: "C6f-签证天数写死", sentence: s });
    }
    const rank = zh ? RANK_ZH.test(s) : RANK_EN.test(s);
    if (rank && !qual) {
      hits.push({ ...seg, rule: "C1b-排名断言缺口径", sentence: s });
    }
  }
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
  "D1b-说了没单列市区人口又给出市区人口",
  "D4-粘连句",
];

console.log("易过期断言扫描（对应 docs/known-errors.md 的错误类型）");
console.log(`  扫描了 ${segments.length} 段正文`);
console.log(`  今年 ${FRESH_SINCE + 1}，统计时点早于 ${FRESH_SINCE} 年的算「不是最新一期」（普查、法定人口等定义上滞后的口径除外）\n`);

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
process.exit(failures > 0 ? 1 : 0);
