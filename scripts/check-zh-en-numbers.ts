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
import { TRAVEL_CONTENT_ZH } from "@/lib/travel-content.zh";
import { TRAVEL_CONTENT_EN } from "@/lib/travel-content.en";
import { CITY_REGISTRY } from "@/lib/places-registry";
import { ROUTE_NARRATION } from "@/lib/route-narration";

/** 地形的 6 板块与城市的 7 段，两套字段名不同，各扫各的 */
const TERRAIN_FIELDS = ["seeing", "formation", "observation", "distinguish", "concept", "history"] as const;
const CITY_FIELDS = [
  "identity", "howItWorks", "layout", "gettingAround", "culture", "seeAndDo", "whenAndTips",
] as const;
/**
 * 航线解说是**第三套内容**（2026-09-10 补）。地形与城市各有注册表和字段名，
 * 航线解说的形状不一样：`ROUTE_NARRATION[id].{study,travel}[lang]` 是整段字符串，
 * 没有分字段。这里把 study / travel 当成两个「字段」来比，
 * 双语的键分别是 `zh-CN` / `en-US`（不是 `zh` / `en`）。
 * 之所以要补：这套内容分批核实从来没覆盖过它，而它同样是中英分开写的。
 */
const ROUTE_FIELDS = ["study", "travel"] as const;
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
  /**
   * **汉字数字**（2026-09-11 补）。航线解说的中文大量写「三千六百米」「九千公里」，
   * 第一版只认阿拉伯数字，这一整类都在视野外 —— 梅塞塔中文「平均海拔六七百米」、
   * 英文与本库地形条目都是 600–800 m，中英各挑了一个值，正是这个脚本立项要抓的形状，
   * 却是联网核实的子代理替它抓到的。
   * 「六七百」这种相邻两个数字是**区间**，两端都记下；「数百米」「上千米」没有具体数，解析为 0 后跳过。
   */
  // 前面是「数 / 几 / 上 / 成 / 好」的不是具体数（「数十公里」「上百米」），跳过 ——
  // 第一版漏了这条，「数十公里」被读成 10 km、和英文的 60–100 km 撞出一条假报。
  for (const m of s.matchAll(/(?<![数几上成好零〇一二两三四五六七八九十百千万])([零〇一二两三四五六七八九十百千万]+)(?:多|余)?\s*(平方公里|万平方公里|公里|米)/g)) {
    const u = m[2] === "公里" ? "km" : m[2] === "米" ? "m" : "km2";
    const mul = m[2] === "万平方公里" ? 10000 : 1;
    for (const v of zhNumRange(m[1])) add(u, v * mul);
  }
  // km² 必须先于 km 匹配，否则「7,600 km²」会被读成 7600 km
  for (const m of s.matchAll(/([\d.,]+)\s*(km²|km|m)(?![²a-zA-Z])/g)) {
    const v = Number(m[1].replace(/,/g, ""));
    add(m[2] === "km²" ? "km2" : m[2], v);
  }
  return out;
}
const near = (a: number, b: number) => Math.abs(a - b) <= Math.max(1, a * TOLERANCE);

const ZH_DIGIT: Record<string, number> = { 零: 0, 〇: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
/** 「一万一千五百」→ 11500；「九千」→ 9000；解析不出具体数（「百」「千」单独出现）返回 0 */
function zhNum(t: string): number {
  let total = 0, section = 0, cur = 0;
  for (const ch of t) {
    if (ch in ZH_DIGIT) cur = ZH_DIGIT[ch];
    else if (ch === "十") { section += (cur || 1) * 10; cur = 0; }
    else if (ch === "百") { section += cur * 100; cur = 0; }
    else if (ch === "千") { section += cur * 1000; cur = 0; }
    else if (ch === "万") { total += (section + cur) * 10000; section = 0; cur = 0; }
  }
  return total + section + cur;
}
/** 「六七百」→ [600, 700]；「一千二三百」→ [1200, 1300]；其余 → [单值]；解析为 0 的丢掉 */
function zhNumRange(t: string): number[] {
  const r = /^(.*?)([一二三四五六七八九])([二三四五六七八九])([十百千万].*)$/.exec(t);
  if (r && ZH_DIGIT[r[3]] === ZH_DIGIT[r[2]] + 1) {
    return [zhNum(r[1] + r[2] + r[4]), zhNum(r[1] + r[3] + r[4])].filter((v) => v > 0);
  }
  const v = zhNum(t);
  return v > 0 ? [v] : [];
}

let pairs = 0, fields = 0;
/** 按内容系统分别计数 —— 见文件末尾的断言：任何一套比到 0 对都当失败 */
const pairsByKind = new Map<string, number>();
const hits: string[] = [];

type Pair = { kind: string; id: string; country: string; zh: any; en: any; fields: readonly string[] };
const all: Pair[] = [];
for (const t of TERRAIN_REGISTRY) {
  const zh = TERRAIN_CONTENT_ZH[t.id], en = TERRAIN_CONTENT_EN[t.id];
  if (zh && en) all.push({ kind: "地形", id: t.id, country: t.country, zh, en, fields: TERRAIN_FIELDS });
}
for (const c of CITY_REGISTRY) {
  const zh = (TRAVEL_CONTENT_ZH as any)[c.id], en = (TRAVEL_CONTENT_EN as any)[c.id];
  if (zh && en) all.push({ kind: "城市", id: c.id, country: c.country, zh, en, fields: CITY_FIELDS });
}
for (const [id, n] of Object.entries(ROUTE_NARRATION)) {
  // 摊平成和上面两套一样的形状：{ study: <中文串>, travel: <中文串> } / 英文同理
  const zh: Record<string, string> = {}, en: Record<string, string> = {};
  for (const f of ROUTE_FIELDS) {
    zh[f] = (n as any)[f]?.["zh-CN"] ?? "";
    en[f] = (n as any)[f]?.["en-US"] ?? "";
  }
  all.push({ kind: "航线", id, country: "-", zh, en, fields: ROUTE_FIELDS });
}

for (const t of all) {
  const { zh, en } = t;
  for (const f of t.fields) {
    const a = nums((zh as any)[f] ?? ""), b = nums((en as any)[f] ?? "");
    for (const [u, av] of a) {
      const bv = b.get(u);
      if (!bv?.size) continue;
      fields++; pairs += av.size * bv.size;
      pairsByKind.set(t.kind, (pairsByKind.get(t.kind) ?? 0) + av.size * bv.size);
      const zhOnly = [...av].filter((v) => ![...bv].some((w) => near(v, w)));
      const enOnly = [...bv].filter((v) => ![...av].some((w) => near(v, w)));
      if (zhOnly.length && enOnly.length) {
        hits.push(
          `\n  [${t.kind}] ${t.country}/${t.id}/${f}  单位 ${u} —— 中文独有 ${zhOnly.join(", ")}｜英文独有 ${enOnly.join(", ")}` +
          `\n     zh: ${((zh as any)[f] ?? "").slice(0, 120)}` +
          `\n     en: ${((en as any)[f] ?? "").slice(0, 120)}`,
        );
      }
    }
  }
}

/**
 * 字段名写错了会**静默跳过**那一段 —— 和忘了 await 是同一种危险。
 * 所以先断言：每个声明的字段名，至少要在一个条目上真的存在。
 * （第一版就把城市段写成了 `food`，而 TravelGuide 里根本没有这个字段。）
 */
const seen = new Set<string>();
for (const t of all) for (const f of t.fields) if (typeof (t.zh as any)[f] === "string") seen.add(f);
const bogus = [...new Set([...TERRAIN_FIELDS, ...CITY_FIELDS, ...ROUTE_FIELDS])].filter((f) => !seen.has(f));
if (bogus.length) {
  console.error(`\n✗ 这些字段名在任何条目上都不存在，等于白扫：${bogus.join(", ")}`);
  process.exit(1);
}

const byKind = new Map<string, number>();
for (const t of all) byKind.set(t.kind, (byKind.get(t.kind) ?? 0) + 1);
console.log(
  `中英同单位数字比对（地形 6 板块 + 城市 7 段 + 航线 2 套解说）：` +
  `扫了 ${[...byKind].map(([k, v]) => `${k} ${v}`).join(" / ")}，` +
  `${fields} 个字段两侧都有可比数字，实际比较 ${pairs} 对`,
);
if (pairs === 0) {
  console.error("\n✗ 一对都没比到 —— 这不是「全部通过」，是这个脚本自己坏了（内容文件的导出改了？）");
  process.exit(1);
}
/**
 * 总数不为 0 还不够：**某一套内容单独取不到值也会被总数盖住**。
 * 航线解说的双语键是 `zh-CN`/`en-US` 而不是 `zh`/`en`，写错一个字母，
 * 那 280 条就会整体变成空串、静默比 0 对，而屏幕上仍然是「全部通过」。
 * 所以逐套断言 —— 和当初忘了 await 是同一个洞。
 */
const emptyKinds = [...byKind.keys()].filter((k) => !(pairsByKind.get(k) ?? 0));
if (emptyKinds.length) {
  console.error(`\n✗ 这几套内容一对都没比到，等于没扫：${emptyKinds.join("、")}（键名或导出改了？）`);
  process.exit(1);
}
if (hits.length) {
  console.error(`\n✗ ${hits.length} 处中英对不上：${hits.join("")}`);
  console.error("\n两侧都写了、值却不一样 —— 先查哪个有出处，再**两侧一起改**；两个值都有出处就写区间。");
  process.exit(1);
}
console.log("✓ 0 处对不上");
