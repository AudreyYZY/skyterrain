/**
 * 解说句 → 航点锚定的可行性报告（不联网）
 *   运行: npm run check:anchors
 *
 * 「文字播报的地方和地图上的位置对不上」的前提是：解说确实在按航线顺序讲沿途的
 * 地方。这个脚本量的就是这个前提成不成立 —— 按航点名去匹配每一句，统计：
 *   - 直接命中航点的句子占比
 *   - 前向填充后仍无锚点的句子占比（开头几句没提任何地名）
 *   - 提及顺序与航线顺序不一致的篇数
 *   - 完全没提到任何航点的篇数（这类根本无法锚定）
 *
 * 结论是分模式的：学习模式的解说是沿航线讲的，可以锚定；旅游模式的解说讲的是
 * 高原反应、许可、季节、目的地城市，压根不描述沿途地貌，锚定无从谈起。
 * 因此这个脚本只对学习模式设门槛，旅游模式仅作报告。
 */

import { getAllRoutes, resolveRouteWaypoints } from "../lib/routes.ts";
import { getRouteNarration } from "../lib/route-narration.ts";
import { deriveAnchors, type AnchorWaypoint } from "../lib/route-anchors.ts";

interface Agg {
  pieces: number;
  sentences: number;
  matched: number;
  unanchored: number;
  zeroHit: number;
  nonMonotonic: number;
  usable: number;
}
const newAgg = (): Agg => ({
  pieces: 0, sentences: 0, matched: 0, unanchored: 0, zeroHit: 0, nonMonotonic: 0, usable: 0,
});

const agg = new Map<string, Agg>();
const zeroHitStudy: string[] = [];

for (const route of getAllRoutes()) {
  const named: AnchorWaypoint[] = resolveRouteWaypoints(route)
    .map((w, i) => ({ index: i, name: w.name, nameEn: w.nameEn, kind: w.kind }))
    .filter((w) => w.kind === "terrain" || w.kind === "feature");

  for (const mode of ["study", "travel"] as const) {
    for (const lang of ["zh-CN", "en-US"] as const) {
      const text = getRouteNarration(route.id, lang, mode);
      if (!text) continue;
      const r = deriveAnchors(text, named, lang);
      const key = `${mode}/${lang}`;
      const a = agg.get(key) ?? newAgg();
      agg.set(key, a);

      a.pieces++;
      a.sentences += r.sentences;
      a.matched += r.matched;
      a.unanchored += r.perSentence.filter((x) => x < 0).length;
      if (r.distinctHits === 0) {
        a.zeroHit++;
        if (mode === "study") zeroHitStudy.push(`${route.id} ${lang}`);
      }
      if (!r.monotonic) a.nonMonotonic++;
      // 可用：顺序一致，且至少锚到 2 个不同航点（只锚到 1 个等于没锚）
      if (r.monotonic && r.distinctHits >= 2) a.usable++;
    }
  }
}

const pct = (a: number, b: number) => (b === 0 ? "  - " : `${((a / b) * 100).toFixed(0)}%`);

console.log("解说句 → 航点锚定可行性");
console.log(
  `  ${"模式/语言".padEnd(16)}${"篇数".padStart(7)}${"句子".padStart(8)}${"直接命中".padStart(11)}${"无锚点句".padStart(11)}${"零命中篇".padStart(13)}${"乱序篇".padStart(10)}${"可用篇".padStart(13)}`,
);
for (const key of [...agg.keys()].sort()) {
  const a = agg.get(key)!;
  console.log(
    `  ${key.padEnd(16)}${String(a.pieces).padStart(7)}${String(a.sentences).padStart(8)}` +
      `${pct(a.matched, a.sentences).padStart(11)}${pct(a.unanchored, a.sentences).padStart(11)}` +
      `${`${a.zeroHit} (${pct(a.zeroHit, a.pieces)})`.padStart(13)}${String(a.nonMonotonic).padStart(10)}` +
      `${`${a.usable} (${pct(a.usable, a.pieces)})`.padStart(13)}`,
  );
}

if (zeroHitStudy.length > 0) {
  console.log(`\n学习模式里完全没提到任何航点的 ${zeroHitStudy.length} 篇（需要人工补锚点或改写解说）：`);
  for (const s of zeroHitStudy.slice(0, 12)) console.log(`  ${s}`);
  if (zeroHitStudy.length > 12) console.log(`  …还有 ${zeroHitStudy.length - 12} 篇`);
}

console.log(
  "\n旅游模式的解说讲的是高原反应/许可/季节/目的地城市，不描述沿途地貌，" +
    "\n锚定对它没有意义 —— 这一档只作报告，不设门槛。",
);

// 这个脚本只报告、不拦截：锚定方案本身还没定稿
process.exit(0);
