/**
 * 中英两侧同一字段里的**同单位数字对不上** —— 逐段读、逐语言读都读不出来的一类错。
 *
 * 由来（2026-09-10）：`romsdalen` 的中文写巨魔墙岩壁「约 1000 米」、英文写 about 1,100 m。
 * 上一轮**已经查明这里有两个值、还把冲突写进了注释**（SNL 给约 1000、英文维基给 1100），
 * 却在中文侧挑了一个、英文侧挑了另一个 —— 不是没查，是查完没把结论同步到两侧。
 *
 * 中英是分开写的，所以这一类天然容易发生；而人核实时是**按语言**读的，
 * 除非特意并排，否则看不见。这正是脚本擅长的形状：**机械、精确、无歧义**。
 *
 * 判据刻意保守，宁可漏不可吵：
 *   · 只比**同一条目、同一字段、同一单位**的数字；
 *   · 两侧都得有该单位的数字才比（一侧没写不算错 —— 中英详略本来就可以不同）；
 *   · 容差 6%，吸收取整与换算差（「约 500 米」vs 480 m 不报）；
 *   · **两侧都出现了对方没有的值**才报 —— 单侧多写一个数字是补充，不是矛盾。
 *
 * ⚠️ 这个脚本本身踩过一次坑：`getTerrainContent` 是 async，第一版忘了 await，
 * 于是每个字段都是 undefined、比较了 0 对、却报「0 处，全部通过」。
 * **所以它每次都打印「实际比较了多少对」** —— 一个静默取不到值的检查
 * 比一个会报假阳性的检查危险得多，因为屏幕上什么都不会出现。
 */
import { TERRAIN_CONTENT_ZH } from "@/lib/terrain-content.zh";
import { TERRAIN_CONTENT_EN } from "@/lib/terrain-content.en";
import { TERRAIN_REGISTRY } from "@/lib/terrain-registry";

const FIELDS = ["seeing", "formation", "observation", "distinguish", "concept", "history"] as const;
const TOLERANCE = 0.06;

function nums(s: string): Map<string, Set<number>> {
  const out = new Map<string, Set<number>>();
  const add = (u: string, v: number) => {
    if (!isFinite(v)) return;
    if (!out.has(u)) out.set(u, new Set());
    out.get(u)!.add(v);
  };
  for (const m of s.matchAll(/([\d.,]+)\s*(米|公里|平方公里|万平方公里)/g)) {
    const v = Number(m[1].replace(/,/g, ""));
    if (m[2] === "万平方公里") add("km2", v * 10000);
    else add(m[2] === "平方公里" ? "km2" : m[2] === "公里" ? "km" : "m", v);
  }
  // km² 必须先于 km 匹配，否则「7,600 km²」会被读成 7600 km
  for (const m of s.matchAll(/([\d.,]+)\s*(km²|km|m)(?![²a-zA-Z])/g)) {
    const v = Number(m[1].replace(/,/g, ""));
    add(m[2] === "km²" ? "km2" : m[2], v);
  }
  return out;
}
const near = (a: number, b: number) => Math.abs(a - b) <= Math.max(1, a * TOLERANCE);

let pairs = 0, fields = 0;
const hits: string[] = [];
for (const t of TERRAIN_REGISTRY) {
  const zh = TERRAIN_CONTENT_ZH[t.id], en = TERRAIN_CONTENT_EN[t.id];
  if (!zh || !en) continue;
  for (const f of FIELDS) {
    const a = nums(zh[f] ?? ""), b = nums(en[f] ?? "");
    for (const [u, av] of a) {
      const bv = b.get(u);
      if (!bv?.size) continue;
      fields++; pairs += av.size * bv.size;
      const zhOnly = [...av].filter((v) => ![...bv].some((w) => near(v, w)));
      const enOnly = [...bv].filter((v) => ![...av].some((w) => near(v, w)));
      if (zhOnly.length && enOnly.length) {
        hits.push(
          `\n  ${t.country}/${t.id}/${f}  单位 ${u} —— 中文独有 ${zhOnly.join(", ")}｜英文独有 ${enOnly.join(", ")}` +
          `\n     zh: ${(zh[f] ?? "").slice(0, 120)}` +
          `\n     en: ${(en[f] ?? "").slice(0, 120)}`,
        );
      }
    }
  }
}

console.log(`中英同单位数字比对：${fields} 个字段两侧都有可比数字，实际比较 ${pairs} 对`);
if (pairs === 0) {
  console.error("\n✗ 一对都没比到 —— 这不是「全部通过」，是这个脚本自己坏了（内容文件的导出改了？）");
  process.exit(1);
}
if (hits.length) {
  console.error(`\n✗ ${hits.length} 处中英对不上：${hits.join("")}`);
  console.error("\n两侧都写了、值却不一样 —— 先查哪个有出处，再**两侧一起改**；两个值都有出处就写区间。");
  process.exit(1);
}
console.log("✓ 0 处对不上");
