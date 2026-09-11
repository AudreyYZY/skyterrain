/**
 * 航线解说里的最高级／排名，拿去和**本库已核过的地形条目**对 —— 不联网。
 *
 * 由来：`CLAUDE.md` 规则 ⑥-a 说过「不花钱的第一步」就是这件事，但一直没做。
 * 2026-09-11 第一次跑，61 个配对里捞出 4 处真错，**全是同一个形状**：
 * 地形条目在之前某一轮被核实改对了，**航线解说没跟上**。
 *   · `dub-cfn`：格伦维「爱尔兰面积最大的国家公园」—— 地形条目早已改成「第二大」（威克洛更大，1 级）
 *   · `scl-zco`：利亚伊马「喷发超过 50 次」—— 地形留痕明写 SERNAGEOMIN 约 48 次、学术统计 50 次，两者都不支持「超过」
 *   · `cdg-nce`：凡尔登「欧洲最大的峡谷之一」—— 地形条目已改成「常称欧洲最深的峡谷之一 + 没有统一国际口径」
 *   · `cph-rnn`：博恩霍尔姆「唯一大面积可见花岗岩基岩的地区」—— 地形与**英文侧**都有「之一」，只有中文丢了限定
 *
 * ⚠️ **这不是棘轮，也不是门禁 —— 它永远 exit 0。**
 * 它做不到自动判对错：同一件事换个说法就不同字，绝大多数配对是一致的。
 * 它能做的是**把该并排读的两段摆在一起**，人两分钟扫一遍。
 * 之所以留着，是因为它零成本（不联网）、且第一次跑的命中率就有 4/61。
 *
 * 标了 ⚑ 的是启发式认为**值得先看**的：
 *   ① 一侧带「之一」这类限定、另一侧没带；
 *   ② 两侧的名次词不同（最大 vs 第二大）。
 * 没标的也可能有问题，只是优先级低。
 */
import { ROUTE_NARRATION } from "@/lib/route-narration";
import { TERRAIN_CONTENT_ZH } from "@/lib/terrain-content.zh";
import { TERRAIN_REGISTRY } from "@/lib/terrain-registry";

const SUP_WORDS = [
  "最大", "最高", "最长", "最深", "最古老", "最年轻", "最早", "唯一",
  "第一", "第二", "第三",
] as const;
const SUP = new RegExp(`(${SUP_WORDS.join("|")})`);
const SENT = new RegExp(`[^。；！？\\n]*?(?:${SUP_WORDS.join("|")})[^。；！？\\n]*`, "g");
/**
 * 限定语：带了这些的**排名断言**是「软」的，两侧一软一硬就值得看。
 * ⚠️ 只收真正给排名兜底的词。第一版把「约 / 左右 / 大致」也算进来，
 * 结果「面积约 1.7 万平方公里」这种句子全被当成软断言，50 个 ⚑ 里绝大多数是这么来的 ——
 * 那是**数值**的约数，不是**排名**的限定，两者不是一回事。
 */
const HEDGE = /(之一|常被称|常称|据称|一般认为)/;

const zhOf = (id: string) => {
  const n = (ROUTE_NARRATION as any)[id];
  return [n?.study?.["zh-CN"] ?? "", n?.travel?.["zh-CN"] ?? ""].join("\n");
};

/**
 * 地形 id → 参与匹配的中文名。
 * **两个来源都要用**：`nameZh`（地形本身）与 `landmark.name`（锚点地物）——
 * 航线解说点名的往往是锚点（「贡嘎山」「布罗肯峰」「穆拉森峰」），而不是地形名（「横断山脉」）。
 * 第一版只取了 `name`（这个字段在注册表上根本不存在），于是配出 0 组 —— 被文件末尾的断言当场拦住。
 * 去掉括注、太短的名字不参与匹配，否则满屏假阳性。
 */
const terrainNames = new Map<string, string[]>();
for (const t of TERRAIN_REGISTRY) {
  if (!TERRAIN_CONTENT_ZH[t.id]) continue;
  const cands = [t.nameZh, t.landmark?.name]
    .map((n) => (n ?? "").replace(/[（(].*?[)）]/g, "").trim())
    .filter((n) => n.length >= 3);
  if (cands.length) terrainNames.set(t.id, [...new Set(cands)]);
}

/** 地形条目的正文（六段拼一起），注释不算 —— 读者听到的是正文 */
const terrainBody = new Map<string, string>();
for (const [id] of terrainNames) {
  const c: any = TERRAIN_CONTENT_ZH[id];
  terrainBody.set(id, ["seeing", "formation", "observation", "distinguish", "concept", "history"]
    .map((f) => c?.[f] ?? "").join("\n"));
}

type Pair = { flagged: boolean; why: string; text: string };
const pairs: Pair[] = [];
let routesScanned = 0, sentencesScanned = 0;

for (const routeId of Object.keys(ROUTE_NARRATION)) {
  routesScanned++;
  const body = zhOf(routeId);
  for (const sentence of body.match(SENT) ?? []) {
    const s = sentence.trim();
    if (s.length < 8) continue;
    sentencesScanned++;
    for (const [id, names] of terrainNames) {
      const name = names.find((n) => s.includes(n));
      if (!name) continue;
      const word = SUP.exec(s)?.[1];
      if (!word) continue;
      const own = (terrainBody.get(id)!.match(SENT) ?? [])
        .map((x) => x.trim())
        .filter((x) => x.includes(word));

      // 启发式：只用来排序，不用来判对错
      const routeHedged = HEDGE.test(s);
      const ownHedged = own.some((o) => HEDGE.test(o));
      const rankMismatch = own.length > 0 && !own.some((o) => o.includes(word));
      const hedgeMismatch = own.length > 0 && routeHedged !== ownHedged;
      const why = rankMismatch ? "名次词对不上" : hedgeMismatch ? "一侧带限定、一侧没带" : "";

      pairs.push({
        flagged: Boolean(why),
        why,
        text:
          `${why ? "⚑ " : "  "}[${routeId}] × ${id}（${name}）｜「${word}」${why ? ` —— ${why}` : ""}\n` +
          `     航线：${s}\n` +
          (own.length
            ? own.slice(0, 2).map((o) => `     地形：${o}`).join("\n")
            : "     地形：（该条目正文里没有同属性词的句子）"),
      });
      break; // 一句只配一个地形，避免同一句刷屏
    }
  }
}

/**
 * 和 `check:zhen` 同一条判据：**任何检查都要能说出自己实际检查了多少个对象。**
 * 这里三个数都要非零 —— 任何一个是 0 都说明导出改了、这个脚本白跑了。
 */
console.log(
  `航线解说 × 地形条目 的最高级／排名交叉核对（不联网）：` +
  `扫了 ${routesScanned} 条航线、${sentencesScanned} 个含最高级的句子，配出 ${pairs.length} 组`,
);
if (!routesScanned || !sentencesScanned || !pairs.length) {
  console.error("\n✗ 有一项是 0 —— 这不是「没问题」，是这个脚本自己坏了（导出或字段名改了？）");
  process.exit(1);
}

const flagged = pairs.filter((p) => p.flagged);
for (const p of [...flagged, ...pairs.filter((p) => !p.flagged)]) console.log("\n" + p.text);

console.log(
  `\n⚑ ${flagged.length} 组值得先看（名次词对不上，或一侧带限定一侧没带）；其余 ${pairs.length - flagged.length} 组优先级低。\n` +
  `这是**给人读的清单，不是门禁** —— 判对错要人看，所以永远 exit 0。\n` +
  `⚠️ 改了 route-narration.ts 之后必须重跑 npm run gen:anchors。`,
);
