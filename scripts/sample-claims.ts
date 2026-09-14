/**
 * 随机抽样：**用户随手翻开一句，它错的概率是多少。**
 *
 * 立这个脚本的由来（2026-09-12）：此前所有的「进度」都是**覆盖率** ——
 * 「1041 篇地形全部有 sources 留痕」「38 国整国核完一遍」。但覆盖率回答不了用户真正问的问题：
 * **我现在看到的这句话，是对的吗？**
 *
 * 台账里累计逐条裁决过 2,948 条断言，其中 1,935 条有误 —— 66%。**但这个 66% 不能当错误率用**：
 * 每一轮核实的对象都是脚本或人挑出来的「可疑句」，是**有偏样本**，天然富集错误。
 * 真正的错误率只能靠**均匀随机抽样**估计：从全库所有「可核实的断言句」里等概率抽 N 句，
 * 逐句去核，错 M 句，错误率就是 M/N，并给出置信区间。
 *
 * 这个脚本只做一件事：**按固定随机种子抽一份可复算的样本**，输出成待核清单。
 * 核实由 `content-verifier` 做，结果回填到 `docs/quality-sampling.md`。
 * 换种子 = 换一批样本；**同一个种子永远抽出同一批**，所以两次抽样的结果可以比较。
 *
 * 用法：
 *   npm run sample:claims -- --n=30 --seed=1          # 抽 30 句
 *   npm run sample:claims -- --n=30 --seed=1 --kind=travel
 *
 * ⚠️ **不要用它来「挑」样本**。抽到难核的、抽到自己没把握的，照样要核、照样要记进去 ——
 * 一旦开始换样本，这个数字就和覆盖率一样没有意义了。
 */
import { readFileSync } from "node:fs";

const arg = (k: string, d: string) =>
  process.argv.find((a) => a.startsWith(`--${k}=`))?.split("=")[1] ?? d;
const N = Number(arg("n", "30"));
const SEED = Number(arg("seed", "1"));
const KIND = arg("kind", "all");

/** 可核实的断言句：带数字 / 年份 / 最高级 / 认定的句子。判据与 docs/quality-sampling.md 里写的一致 */
const CHECKABLE =
  /(\d{3,4}\s*年|[\d][\d.,]*\s*(?:米|公里|平方公里|万|亿|人|%|％)|最[一-龥]|唯一|第[一二三四五六七八九十]|列入|设立|始建|建于)/;

const SOURCES: [string, string][] = [
  ["terrain", "lib/terrain-content.zh.ts"],
  ["travel", "lib/travel-content.zh.ts"],
  ["route", "lib/route-narration.ts"],
];

type Claim = { kind: string; entry: string; sentence: string };
const pool: Claim[] = [];

for (const [kind, path] of SOURCES) {
  if (KIND !== "all" && KIND !== kind) continue;
  const raw = readFileSync(path, "utf8");
  // 去注释（注释里的 sources 留痕不是对外文案，不进样本池）
  const body = raw.replace(/^\s*\/\/.*$/gm, "");
  // 逐个条目块，好让样本能报出「哪一条」
  const entryRe = /^\s{2,4}"?([a-z0-9][a-z0-9-]*)"?:\s*\{\s*$/gm;
  const marks: { id: string; at: number }[] = [];
  for (const m of body.matchAll(entryRe)) marks.push({ id: m[1]!, at: m.index! });
  for (let i = 0; i < marks.length; i++) {
    const seg = body.slice(marks[i]!.at, marks[i + 1]?.at ?? body.length);
    for (const sm of seg.matchAll(/"((?:[^"\\]|\\.){40,})"/g)) {
      for (const sent of sm[1]!.split(/(?<=[。；])/)) {
        const s = sent.replace(/\\n|\s+/g, "").trim();
        if (s.length >= 12 && CHECKABLE.test(s)) pool.push({ kind, entry: marks[i]!.id, sentence: s });
      }
    }
  }
}

if (!pool.length) {
  console.error("✗ 样本池是空的 —— 这不是「没问题」，是取不到值");
  process.exit(1);
}

/** mulberry32：小而确定的伪随机数发生器，保证同一个种子抽出同一批 */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = rng(SEED);
const idx = new Set<number>();
while (idx.size < Math.min(N, pool.length)) idx.add(Math.floor(rand() * pool.length));

console.log(
  `样本池：${pool.length} 句可核实的断言（terrain/travel/route 的中文正文，已去掉注释）\n` +
  `抽样：seed=${SEED}，n=${idx.size}。**同一个种子永远抽出同一批**，可复算、可比较。\n`,
);
let i = 1;
for (const k of idx) {
  const c = pool[k]!;
  console.log(`${String(i++).padStart(2, " ")}. [${c.kind}/${c.entry}] ${c.sentence}`);
}
console.log(
  `\n下一步：把这 ${idx.size} 句交给 content-verifier 逐句核，结果回填 docs/quality-sampling.md。\n` +
  `**抽到难核的照样要核、照样要记** —— 一旦开始换样本，这个数就和覆盖率一样没有意义了。`,
);
