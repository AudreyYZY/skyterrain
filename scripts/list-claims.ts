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
import { isMissingYear, isStale } from "./claim-rules.ts";

const args = process.argv.slice(2);
const val = (k: string) => {
  const i = args.indexOf(k);
  return i >= 0 ? args[i + 1] : undefined;
};
const RULE = val("--rule") ?? "C6d";
const COUNTRY = val("--country");
const IDS = val("--ids")?.split(",");
const ONLY_COUNTS = args.includes("--countries");

const { segments } = await collectTtsSegments();
interface Hit { id: string; section: string; lang: string; sentence: string; country: string }
const hits: Hit[] = [];

for (const seg of segments) {
  const zh = seg.lang === "zh-CN";
  for (const s of splitSentences(seg.text)) {
    const match = RULE === "C6" ? isMissingYear(s, zh) : isStale(s, zh);
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
