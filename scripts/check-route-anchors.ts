/**
 * 解说句 → 航点锚点表自检（不联网）
 *   运行: npm run check:anchors
 *
 * 两件事：
 *   1. **硬校验** lib/route-anchors.data.ts —— 每条锚点表的长度必须等于该篇解说
 *      的句数，下标必须合法且单调不减。改了解说文字却没重跑 npm run gen:anchors
 *      （auto 条目）或没手工调整（manual 条目），会在这里报错。
 *   2. **报告**还差多少 —— 自动推导不可用、待人工补的篇目清单。
 *
 * 只覆盖学习模式：旅游模式的解说讲的是高原反应、进藏许可、季节、目的地城市，
 * 不描述沿途地貌，66%–82% 的篇目一个航点都没提到，锚定对它没有意义。
 */

import { getAllRoutes, resolveRouteWaypoints } from "../lib/routes.ts";
import { getRouteNarration } from "../lib/route-narration.ts";
import { deriveAnchors, type AnchorWaypoint } from "../lib/route-anchors.ts";
import { ROUTE_ANCHORS } from "../lib/route-anchors.data.ts";
import { buildAnchoringForNarration } from "../lib/route-anchors.ts";
import { splitSentences } from "../lib/sentences.ts";
import { planRouteFlight } from "../lib/cesium/route-flight.ts";
import { bearingRadians, haversineMeters } from "../lib/geo.ts";
import { estimateSpeechDurationSec } from "../lib/speech.ts";
import type { Language } from "../lib/i18n.ts";

const LANGS: Language[] = ["zh-CN", "en-US"];

let failures = 0;
const fail = (m: string) => {
  console.error(`  ✗ ${m}`);
  failures++;
};

interface Todo {
  id: string;
  lang: Language;
  sentences: number;
  reason: string;
}
const todo: Todo[] = [];
/** 已锚定但镜头跟不上的：解说的地理跨度超出了可看的飞行速度 */
const laggy: { id: string; lang: Language; maxLagKm: number }[] = [];
const lags: number[] = [];
let anchored = 0;
let manualCount = 0;
let totalPieces = 0;
/** 航线本身没有地形/地标航点 —— 无从锚定，也不需要锚定 */
let notApplicable = 0;

for (const route of getAllRoutes()) {
  const wps = resolveRouteWaypoints(route);
  const named: AnchorWaypoint[] = wps
    .map((w, i) => ({ index: i, name: w.name, nameEn: w.nameEn, kind: w.kind }))
    .filter((w) => w.kind === "terrain" || w.kind === "feature");

  for (const lang of LANGS) {
    const text = getRouteNarration(route.id, lang, "study");
    if (!text) continue;
    totalPieces++;
    const sentenceCount = splitSentences(text).length;
    const entry = ROUTE_ANCHORS[route.id]?.[lang];

    if (!entry) {
      if (named.length === 0) {
        notApplicable++;
        continue;
      }
      const r = deriveAnchors(text, named, lang);
      const reason =
        r.distinctHits === 0
          ? "解说未提及任何航点"
          : !r.monotonic
            ? "提及顺序与航线顺序不一致"
            : `只锚到 ${r.distinctHits} / ${named.length} 个航点`;
      todo.push({ id: route.id, lang, sentences: sentenceCount, reason });
      continue;
    }

    anchored++;
    if (entry.source === "manual") manualCount++;

    // 锚了不等于跟得上：解说可能在两句之间跨越几千公里，而镜头有速度上限
    //（超了画面就糊）。这里量实际滞后，把「锚了也同步不了」的篇目摆到台面上，
    // 免得人工补锚点补在注定同步不了的航线上。
    const anchoring = buildAnchoringForNarration(route.id, lang, "study", text);
    if (anchoring && wps.length >= 2) {
      const cum = [0];
      for (let i = 1; i < wps.length; i++) {
        cum.push(cum[i - 1]! + Math.max(1, haversineMeters(wps[i - 1]!.lat, wps[i - 1]!.lon, wps[i]!.lat, wps[i]!.lon)));
      }
      const holdIdx: number[] = [];
      for (let i = 1; i < wps.length - 1; i++) {
        const k = wps[i]!.kind;
        if (k === "terrain" || k === "feature") holdIdx.push(i);
      }
      const plan = planRouteFlight({
        cum,
        total: cum[wps.length - 1]!,
        holdIndices: holdIdx,
        narrationSec: estimateSpeechDurationSec(text, 0.88, lang),
        baseHeightM: route.cruiseHeight ?? 11000,
        headings: wps.map((_, i) =>
          bearingRadians(
            wps[Math.max(0, i - 1)]!.lat, wps[Math.max(0, i - 1)]!.lon,
            wps[Math.min(wps.length - 1, i + 1)]!.lat, wps[Math.min(wps.length - 1, i + 1)]!.lon,
          ),
        ),
        latLon: wps.map((w) => ({ lat: w.lat, lon: w.lon })),
        anchoring,
      });
      let maxLag = 0;
      for (let k = 0; k < anchoring.anchors.length; k++) {
        const t = anchoring.sentenceStartSec[k]!;
        const d = plan.progressToDistance(Math.min(1, t / plan.durationSec));
        maxLag = Math.max(maxLag, Math.abs(cum[anchoring.anchors[k]!]! - d));
      }
      lags.push(maxLag / 1000);
      if (maxLag / 1000 > 800) laggy.push({ id: route.id, lang, maxLagKm: maxLag / 1000 });
    }

    const a = entry.perSentence;
    const label = `${route.id} [${lang}]`;
    if (a.length !== sentenceCount) {
      fail(`${label}: 锚点表 ${a.length} 项，解说 ${sentenceCount} 句 —— 解说改过就要重跑 npm run gen:anchors`);
      continue;
    }
    for (let i = 0; i < a.length; i++) {
      if (!Number.isInteger(a[i]) || a[i]! < 0 || a[i]! >= wps.length) {
        fail(`${label}: 第 ${i + 1} 句锚点 ${a[i]} 超出航点范围 0..${wps.length - 1}`);
        break;
      }
      if (i > 0 && a[i]! < a[i - 1]!) {
        fail(`${label}: 第 ${i + 1} 句锚点回退 ${a[i - 1]} → ${a[i]}`);
        break;
      }
    }
  }
}

const pct = (a: number, b: number) => (b === 0 ? "-" : `${((a / b) * 100).toFixed(0)}%`);

const applicable = totalPieces - notApplicable;
console.log("学习模式航点锚定进度");
console.log(`  解说篇数        ${totalPieces}`);
console.log(`  不适用          ${notApplicable}（航线本身没有地形/地标航点，无从锚定也不需要）`);
console.log(`  已有锚点表      ${anchored}（占适用的 ${pct(anchored, applicable)}），其中人工 ${manualCount} 篇`);
console.log(`  待人工补        ${todo.length}（占适用的 ${pct(todo.length, applicable)}）`);

if (todo.length > 0) {
  const byReason = new Map<string, number>();
  for (const t of todo) byReason.set(t.reason, (byReason.get(t.reason) ?? 0) + 1);
  console.log("\n待补原因分布");
  for (const [reason, n] of [...byReason].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(4)}  ${reason}`);
  }
  console.log("\n待补清单（前 15 条）");
  for (const t of todo.slice(0, 15)) {
    console.log(`  ${t.id.padEnd(10)} ${t.lang}  ${String(t.sentences).padStart(2)} 句  ${t.reason}`);
  }
  if (todo.length > 15) console.log(`  …还有 ${todo.length - 15} 条`);
}

if (lags.length > 0) {
  const sorted = [...lags].sort((a, b) => a - b);
  const q = (x: number) => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * x))]!.toFixed(0);
  console.log("\n已锚定篇目的镜头滞后（讲到某处时镜头离该处多远）");
  console.log(`  中位 ${q(0.5)} km · p90 ${q(0.9)} km · 最大 ${q(1)} km`);
  console.log(`  滞后超过 800 km 的 ${laggy.length} 篇 —— 解说的地理跨度超出了可看的飞行速度，`);
  console.log("  这类篇目补再多锚点也同步不了，除非改写解说或接受镜头落后");
  for (const l of [...laggy].sort((a, b) => b.maxLagKm - a.maxLagKm).slice(0, 6)) {
    console.log(`    ${l.id.padEnd(10)} ${l.lang}  最大滞后 ${l.maxLagKm.toFixed(0)} km`);
  }
}

console.log(`\n${totalPieces} 篇学习模式解说, ${anchored} 篇已锚定, ${todo.length} 篇待补, ${failures} 项异常`);
process.exit(failures > 0 ? 1 : 0);
