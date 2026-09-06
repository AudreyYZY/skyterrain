/**
 * 生成 lib/route-anchors.data.ts —— 解说句 → 航点的锚点表（仅学习模式）
 *   运行: npm run gen:anchors
 *
 * 只写入「自动推导且可用」的条目（顺序单调 + 至少锚到 2 个不同航点）。
 * 推导不可用的那些不写，由 npm run check:anchors 列成待办，人工逐条补成
 * source: "manual"。**重跑本脚本不会覆盖任何 manual 条目**，只补 auto 的部分。
 *
 * 为什么只做学习模式：旅游模式的解说讲的是高原反应、进藏许可、季节、目的地
 * 城市，不描述沿途地貌，66%–82% 的篇目一个航点都没提到，锚定对它没有意义。
 */

import { writeFile } from "node:fs/promises";
import { getAllRoutes, resolveRouteWaypoints } from "../lib/routes.ts";
import { getRouteNarration } from "../lib/route-narration.ts";
import { deriveAnchors, type AnchorWaypoint } from "../lib/route-anchors.ts";
import { ROUTE_ANCHORS, type RouteAnchorEntry } from "../lib/route-anchors.data.ts";
import type { Language } from "../lib/i18n.ts";

const LANGS: Language[] = ["zh-CN", "en-US"];

const out: Record<string, Partial<Record<Language, RouteAnchorEntry>>> = {};
let kept = 0;
let manual = 0;
let skipped = 0;

for (const route of getAllRoutes()) {
  const named: AnchorWaypoint[] = resolveRouteWaypoints(route)
    .map((w, i) => ({ index: i, name: w.name, nameEn: w.nameEn, kind: w.kind }))
    .filter((w) => w.kind === "terrain" || w.kind === "feature");

  for (const lang of LANGS) {
    const existing = ROUTE_ANCHORS[route.id]?.[lang];
    // 人工校对过的条目原样保留，脚本不碰
    if (existing?.source === "manual") {
      (out[route.id] ??= {})[lang] = existing;
      manual++;
      continue;
    }

    const text = getRouteNarration(route.id, lang, "study");
    if (!text) continue;
    const r = deriveAnchors(text, named, lang);
    // 只保留可用的：顺序单调，且锚到的航点数达到「该航线可锚航点数」与 2 的较小值。
    // 用 min(2, 可锚航点数) 而不是死磕 2：126 篇解说所属的航线本来就只有一个
    // 可锚航点，锚到那一个已经是全覆盖，按 2 卡会把它们误判成待人工补。
    const needHits = Math.min(2, named.length);
    if (!r.monotonic || r.distinctHits < needHits || needHits === 0) {
      skipped++;
      continue;
    }
    // 开头几句没提任何地名 → 归到起点机场。
    // 另外强制第一句锚在起点：解说常在起飞时就先预告整条航线要飞越什么
    //（「这条航线要越过南阿尔卑斯山」），那是预告不是当前位置，直接采信会让
    // 镜头一上来就跳到半路。
    const perSentence = r.perSentence.map((x) => (x < 0 ? 0 : x));
    if (perSentence.length > 0) perSentence[0] = 0;
    (out[route.id] ??= {})[lang] = { perSentence, source: "auto" };
    kept++;
  }
}

const body = Object.keys(out)
  .sort()
  .map((id) => {
    const langs = Object.entries(out[id]!)
      .map(([lang, e]) => `    "${lang}": { perSentence: [${e!.perSentence.join(", ")}], source: "${e!.source}" },`)
      .join("\n");
    return `  "${id}": {\n${langs}\n  },`;
  })
  .join("\n");

const file = `/**
 * 解说句 → 航点锚点表（学习模式）——**由 npm run gen:anchors 生成，可人工编辑**。
 *
 * perSentence[i] = 第 i 句在讲哪个航点（resolveRouteWaypoints 结果里的下标）。
 * 数组长度必须等于该篇解说的句数，且单调不减 —— npm run check:anchors 会卡这两条。
 *
 * source:
 *   "auto"   脚本按航点名匹配推导出来的，重跑生成脚本会被覆盖
 *   "manual" 人工校对/补写的，生成脚本原样保留、绝不覆盖
 *
 * 改了解说文字就要重跑生成脚本（auto 条目）或手工调整（manual 条目），
 * 否则句数对不上，自检会报错。
 */

import type { Language } from "@/lib/i18n";

export interface RouteAnchorEntry {
  /** 与解说句一一对应的航点下标 */
  perSentence: number[];
  source: "auto" | "manual";
}

export const ROUTE_ANCHORS: Record<string, Partial<Record<Language, RouteAnchorEntry>>> = {
${body}
};
`;

await writeFile("lib/route-anchors.data.ts", file);
console.log(`写入 lib/route-anchors.data.ts`);
console.log(`  自动推导可用 ${kept} 篇 · 保留人工条目 ${manual} 篇 · 推导不可用跳过 ${skipped} 篇`);
console.log(`跑 npm run check:anchors 看待人工补的清单`);
