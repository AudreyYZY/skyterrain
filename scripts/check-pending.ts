/**
 * 「会过期的状态」清单 —— 不联网。
 *
 * 由来：`CLAUDE.md` 规则 ⑦ 与 `docs/known-errors.md` **C6-j** 说得很清楚：会过期的量不止人口，
 * 而 `C6`/`C6d` 的正则**只匹配人口**，「在建 / 计划于 / 预计 X 年通车 / 尚未发布 / 停航」这一整类
 * **没有任何脚本盯着**。已经栽过两次都是人撞见的：呼和浩特机场的转场被提前写成已完成；
 * 牡丹江机场 2025-03 停航之后一直写着「复航时间以机场公告为准」，没人知道该什么时候回来看。
 *
 * 这个脚本不判断对错 —— 它只把「写下时是未完成、此后会自己变成过期」的句子逐条摆出来，
 * 好让每一轮核实有一份**可以重新分诊的固定清单**。
 *
 * ⚑ 的判据：句子里承诺的年份**已经到了或已经过去**（≤ 今年）。那种句子基本可以断定要么已经发生、
 * 要么已经延期，两种情况正文都得改。没有年份的（「在建」「尚未」）只是待复核，不标 ⚑。
 *
 * ⚠️ **不是门禁，也不是棘轮 —— 永远 exit 0**（除了自检失败）。存量本来就有几十条，
 * 其中大部分是合法的「确实还没建成」。
 */
import { ROUTE_NARRATION } from "@/lib/route-narration";
import { TERRAIN_CONTENT_ZH } from "@/lib/terrain-content.zh";
import { TERRAIN_CONTENT_EN } from "@/lib/terrain-content.en";
import { TRAVEL_CONTENT_ZH } from "@/lib/travel-content.zh";
import { TRAVEL_CONTENT_EN } from "@/lib/travel-content.en";

/**
 * 中文的「会过期」措辞。**刻意不收的**：「即将入海」「在建筑里」这类把关键词当成别的意思用的
 * —— 靠下面的 EXCLUDE 排掉，而不是靠把关键词写得更长（写长了就漏）。
 */
const ZH = /(计划(于|在|中)|预计[^，。]{0,12}(年|月)|在建|正在建设|建设中|施工中|将于|将在|拟于|尚未|停航|暂停|筹备阶段|规划中)/;
const EN = /(under construction|due to open|expected to open|planned for|scheduled to|not yet|suspended|has been closed|is being built)/i;
/** 误伤：这些词里含关键词但说的不是「未完成的工程/状态」 */
const EXCLUDE = /(即将入海|即将注入|在建筑|用在建|留在建|住在建|痕迹在建|遗风在建|历史在建)/;
/**
 * 过去式叙述：「2018 年**曾**因环境压力暂停开放半年」讲的是已经结束的事，
 * 年份早于今年是正常的，不该标 ⚑。只降级、不剔除 —— 万一那件事其实还没结束，清单里还看得到。
 */
const PAST = /(曾|此后|历史上|当年|used to|formerly|had been)/;

const YEAR = /(19|20)\d{2}/g;
const NOW = new Date().getFullYear();

type Hit = { system: string; id: string; field: string; lang: string; text: string; due?: number };
const hits: Hit[] = [];
const scanned: Record<string, number> = { terrain: 0, travel: 0, route: 0 };

function harvest(system: string, id: string, field: string, lang: "zh" | "en", body?: string): void {
  if (!body) return;
  scanned[system]++;
  const re = lang === "zh" ? ZH : EN;
  const split = lang === "zh" ? /[。；！？\n]/ : /(?<=[.;!?])\s+/;
  for (const raw of body.split(split)) {
    const s = raw.trim();
    if (s.length < 8 || !re.test(s) || EXCLUDE.test(s)) continue;
    // 承诺的年份：句子里出现的、不早于 2015 的年份中最大的那个（更早的基本是历史叙述）
    const years = [...s.matchAll(YEAR)].map((m) => Number(m[0])).filter((y) => y >= 2015);
    const due = years.length && !PAST.test(s) ? Math.max(...years) : undefined;
    hits.push({ system, id, field, lang, text: s, due });
  }
}

const TF = ["seeing", "formation", "observation", "distinguish", "concept", "history"] as const;
for (const [id, l] of Object.entries(TERRAIN_CONTENT_ZH)) for (const f of TF) harvest("terrain", id, f, "zh", l[f]);
for (const [id, l] of Object.entries(TERRAIN_CONTENT_EN)) for (const f of TF) harvest("terrain", id, f, "en", l[f]);

const VF = ["identity", "howItWorks", "layout", "gettingAround", "culture", "seeAndDo", "whenAndTips"] as const;
for (const [id, g] of Object.entries(TRAVEL_CONTENT_ZH)) for (const f of VF) harvest("travel", id, f, "zh", g[f]);
for (const [id, g] of Object.entries(TRAVEL_CONTENT_EN)) for (const f of VF) harvest("travel", id, f, "en", g[f]);

for (const [id, n] of Object.entries(ROUTE_NARRATION)) {
  harvest("route", id, "study", "zh", n?.study?.["zh-CN"]);
  harvest("route", id, "travel", "zh", n?.travel?.["zh-CN"]);
  harvest("route", id, "study", "en", n?.study?.["en-US"]);
  harvest("route", id, "travel", "en", n?.travel?.["en-US"]);
}

/**
 * 第二份清单：**交通线路编号与航线目的地列表**（2026-09-13 立）。
 *
 * 由来：同一天里两次撞到「写时对、后来变了」的交通状态，句子里却没有「在建 / 停航」这类词，上面的正则看不见 ——
 * 马耳他机场直达瓦莱塔的 **X4 路 2025-04 已撤销**（改为 TD4，当批核实才发现，旅游博客大多还写 X4）；
 * 赫尔辛格去哥本哈根机场的**直通火车 2022-12 已取消**（抽样独立复核才发现）。
 * 线路编号、「直达 / 直通」、「有 A、B、C 等航线」都是运营方一纸公告就会变的东西。
 * 这里只列出来，供每一轮按国家复核；不判对错。`--transit` 打印全文，默认只报数。
 */
const TRANSIT_ZH = /([A-Z]{0,3}\d{1,4}[A-Z]?\s*路(?:公交|巴士|大巴|快线|电车|循环)?|(?:地铁|轻轨)\s*[A-Z]?\d+\s*号?线|机场(?:大巴|快线)|直通(?:机场|首尔|市区)|有[^。；]{2,40}等(?:国内外)?航线)/;
const TRANSIT_EN = /(\b(?:bus|route|tram|line|express|shuttle)\s+(?:no\.?\s*)?[A-Z]{0,3}\d{1,4}[A-Z]?\b|\bruns? (?:direct|through) to\b|\bflights to [^.;]{3,80}\bamong others\b)/i;
const transit: Hit[] = [];
function harvestTransit(system: string, id: string, field: string, lang: "zh" | "en", body?: string): void {
  if (!body) return;
  const re = lang === "zh" ? TRANSIT_ZH : TRANSIT_EN;
  const split = lang === "zh" ? /[。；！？\n]/ : /(?<=[.;!?])\s+/;
  for (const raw of body.split(split)) {
    const t = raw.trim();
    if (t.length >= 8 && re.test(t)) transit.push({ system, id, field, lang, text: t });
  }
}
for (const [id, g] of Object.entries(TRAVEL_CONTENT_ZH)) for (const f of VF) harvestTransit("travel", id, f, "zh", g[f]);
for (const [id, g] of Object.entries(TRAVEL_CONTENT_EN)) for (const f of VF) harvestTransit("travel", id, f, "en", g[f]);
for (const [id, n] of Object.entries(ROUTE_NARRATION)) {
  harvestTransit("route", id, "travel", "zh", n?.travel?.["zh-CN"]);
  harvestTransit("route", id, "travel", "en", n?.travel?.["en-US"]);
}

const expired = hits.filter((h) => h.due !== undefined && h.due <= NOW);
const pending = hits.filter((h) => !expired.includes(h));

/** 和 `check:zhen` / `check:rvt` 同一条判据：要能说出自己实际检查了多少个对象，且分到每一类上。 */
console.log(
  `会过期的状态清单（不联网）：\n` +
  `  地形讲解  扫了 ${scanned.terrain} 段\n` +
  `  城市攻略  扫了 ${scanned.travel} 段\n` +
  `  航线解说  扫了 ${scanned.route} 段\n` +
  `  命中 ${hits.length} 句：其中 ⚑ ${expired.length} 句承诺的年份已经到了或过去了（≤ ${NOW}），` +
  `另 ${pending.length} 句没有年份、只是待复核`,
);
if (!scanned.terrain || !scanned.travel || !scanned.route) {
  console.error("\n✗ 有一套扫到 0 段 —— 这不是「没问题」，是这个脚本自己坏了（导出或字段名改了？）");
  process.exit(1);
}

const show = (list: Hit[]) => {
  for (const h of list) {
    console.log(`\n${h.due !== undefined && h.due <= NOW ? "⚑" : " "} ${h.system}/${h.id}/${h.field} [${h.lang}]` +
      `${h.due ? `（句中年份 ${h.due}）` : ""}\n    ${h.text}`);
  }
};
show(expired);
show(pending);

const byEntry = new Set(transit.map((h) => `${h.system}/${h.id}`));
console.log(
  `\n交通线路编号 / 直达直通 / 航线目的地列表：${transit.length} 句，分布在 ${byEntry.size} 个条目` +
  `（城市 ${transit.filter((h) => h.system === "travel").length} 句 · 航线旅游解说 ${transit.filter((h) => h.system === "route").length} 句）` +
  (process.argv.includes("--transit") ? "" : " —— 加 --transit 看全文"),
);
if (process.argv.includes("--transit")) {
  for (const h of transit) console.log(`\n  ${h.system}/${h.id}/${h.field} [${h.lang}]\n    ${h.text}`);
}

console.log(
  `\n⚑ = 句子里承诺的年份已经到了，正文要么该改成「已完成」要么该改成「已延期」。\n` +
  `**这是给人读的清单，不是门禁** —— 判对错要联网核，所以永远 exit 0。\n` +
  `核完把结论落到条目上方的 sources 注释里，写清「下一轮什么时候回来看」。`,
);
