/**
 * 把 check:claims 报出的某一类命中，按国家/条目列出来，供分批核实使用
 *   运行: npm run list:claims -- --rule C6d --country canada
 *         npm run list:claims -- --rule C6d --countries        # 只看各国还剩多少
 *         npm run list:claims -- --rule C6 --ids tokyo,kyoto
 *
 * check-claims.ts 负责「有没有问题、比基线好了还是差了」，这个脚本负责
 * 「下一批该核哪些条目、原文是哪几句」—— 分批清存量时每轮都要用，
 * 手写 node -e 重复三十遍必然出错。
 */

import { collectTtsSegments } from "../lib/tts-manifest.ts";
import { splitSentences } from "../lib/sentences.ts";
import { CITY_REGISTRY } from "../lib/places-registry.ts";

const args = process.argv.slice(2);
const val = (k: string) => {
  const i = args.indexOf(k);
  return i >= 0 ? args[i + 1] : undefined;
};
const RULE = val("--rule") ?? "C6d";
const COUNTRY = val("--country");
const IDS = val("--ids")?.split(",");
const ONLY_COUNTS = args.includes("--countries");

const HAS_YEAR = /(1[89]|20)\d{2}/;
const PERISHABLE_ZH =
  /(常住人口|户籍人口|城区人口|都会区人口|市区人口|人口|居民)[^。；！？]{0,20}?\d[\d.,]*\s*(万|亿|人|户)/;
const PERISHABLE_EN =
  /\b(population|inhabitants|residents)\b[^.;!?]{0,40}?[\d.,]+\s*(million|billion|thousand|people|residents|inhabitants)/i;
const CENSUS_ZH = /(普查|人口普查|国势调查)/;
const CENSUS_EN = /\bcensus\b/i;
const FRESH_SINCE = new Date().getFullYear() - 1;

const latestYear = (s: string): number | null => {
  const ys = [...s.matchAll(/(?:1[89]|20)\d{2}/g)].map((m) => Number(m[0]));
  return ys.length ? Math.max(...ys) : null;
};

const { segments } = await collectTtsSegments();
interface Hit { id: string; section: string; lang: string; sentence: string; country: string }
const hits: Hit[] = [];

for (const seg of segments) {
  const zh = seg.lang === "zh-CN";
  for (const s of splitSentences(seg.text)) {
    const perishable = zh ? PERISHABLE_ZH.test(s) : PERISHABLE_EN.test(s);
    if (!perishable) continue;
    let match = false;
    if (RULE === "C6") match = !HAS_YEAR.test(s);
    else if (RULE === "C6d") {
      if (!HAS_YEAR.test(s) || (zh ? CENSUS_ZH : CENSUS_EN).test(s)) continue;
      const y = latestYear(s);
      match = y !== null && y < FRESH_SINCE;
    }
    if (!match) continue;
    const country = CITY_REGISTRY.find((c) => c.id === seg.id)?.country ?? "(概览/其他)";
    hits.push({ id: seg.id, section: seg.section, lang: seg.lang, sentence: s, country });
  }
}

const keep = hits.filter(
  (h) => (!COUNTRY || h.country === COUNTRY) && (!IDS || IDS.includes(h.id)),
);

if (ONLY_COUNTS) {
  const by: Record<string, Set<string>> = {};
  for (const h of hits) (by[h.country] ??= new Set()).add(h.id);
  const rows = Object.entries(by).sort((a, b) => b[1].size - a[1].size);
  console.log(`${RULE}：${hits.length} 处命中，涉及 ${new Set(hits.map((h) => h.id)).size} 个条目\n`);
  for (const [c, ids] of rows) console.log(`${String(ids.size).padStart(3)}  ${c}`);
  process.exit(0);
}

const byId: Record<string, Hit[]> = {};
for (const h of keep) (byId[h.id] ??= []).push(h);
console.log(`${RULE}${COUNTRY ? ` · ${COUNTRY}` : ""}：${keep.length} 处，${Object.keys(byId).length} 个条目\n`);
for (const [id, hs] of Object.entries(byId)) {
  console.log(`## ${id}`);
  for (const h of hs) console.log(`  [${h.section}/${h.lang}] ${h.sentence}`);
  console.log();
}
