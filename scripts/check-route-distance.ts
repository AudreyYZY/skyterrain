/**
 * 航线解说里的「全程约 X 公里 / about X km in all」，拿去和两端机场坐标算出的大圆距离比 —— 不联网。
 *
 * 由来：2026-09-11 航线解说第一次联网核实，四批里查出两处距离错，**都是算得出来、不必查的**：
 *   · `can-syd`「全程约九千公里」—— 大圆约 7530 km、南航公布 8217 km，原数偏高 10–20%；
 *   · `pek-jfk`「高纬度弧线比沿纬线直飞短两千多公里」—— 按坐标算实为约 3400 km。
 * 机场坐标就写在 `data/routes/<id>.json` 的航点里，这一类不该花一个联网子代理的工夫。
 *
 * 判据（刻意宽）：
 *   ① 声称值 < 大圆 × 0.95 —— 飞机不可能比大圆飞得更短，**一定是错的**；
 *   ② 声称值 > 大圆 × 上限 —— 上限按航程分：≥1000 km 取 1.15，<1000 km 取 1.30
 *      （短航线绕飞、进离场程序占的比例天然更大）；
 *   ③ 同一条航线中英两侧各写了一个数，相差超过 6%（与 `check:zhen` 同一容差）。
 *
 * 中文侧大量用**汉字数字**（「一万一千五百公里」），`check:zhen` 只比阿拉伯数字、看不见它们 ——
 * 这里单独解析。
 *
 * 和 `check:zhen` 同一条规矩：**每一类都要报出自己实际比了多少个，任何一类是 0 直接失败。**
 */
import { readFileSync, readdirSync } from "node:fs";
import { ROUTE_NARRATION } from "@/lib/route-narration";

type Wp = { airport?: boolean; lat?: number; lon?: number };

const R = 6371.0088;
function gc(a: Wp, b: Wp): number {
  const rad = Math.PI / 180;
  const φ1 = a.lat! * rad, φ2 = b.lat! * rad;
  const dφ = φ2 - φ1, dλ = (b.lon! - a.lon!) * rad;
  const h = Math.sin(dφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(dλ / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

const DIGIT: Record<string, number> = { 零: 0, 〇: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
/** 「一万一千五百」→ 11500；「九千」→ 9000；「八千四百」→ 8400；阿拉伯数字原样 */
function zhNum(s: string): number | null {
  const t = s.replace(/[,，]/g, "");
  if (/^\d+(\.\d+)?$/.test(t)) return Number(t);
  let total = 0, section = 0, cur = 0;
  for (const ch of t) {
    if (ch in DIGIT) cur = DIGIT[ch];
    else if (ch === "十") { section += (cur || 1) * 10; cur = 0; }
    else if (ch === "百") { section += cur * 100; cur = 0; }
    else if (ch === "千") { section += cur * 1000; cur = 0; }
    else if (ch === "万") { total += (section + cur) * 10000; section = 0; cur = 0; }
    else return null;
  }
  return total + section + cur || null;
}

const ZH_RE = /全程(?:距离)?(约|超过|接近|近)?([0-9,]+|[零〇一二两三四五六七八九十百千万]+)(?:多)?(?:公里|千米)/g;
const EN_RE = /(about|some|nearly|over|more than)?\s*([0-9][0-9,]*)\s*km in all/g;

type Hit = { lang: "zh" | "en"; field: string; qual: string; km: number; raw: string };
const rows: string[] = [];
let routes = 0, zhN = 0, enN = 0, pairN = 0, flagged = 0;

for (const f of readdirSync("data/routes").filter((x) => x.endsWith(".json"))) {
  const r = JSON.parse(readFileSync(`data/routes/${f}`, "utf8"));
  const aps: Wp[] = (r.waypoints ?? []).filter((w: Wp) => w.airport && w.lat != null && w.lon != null);
  const n = ROUTE_NARRATION[r.id as string];
  if (!n || aps.length < 2) continue;
  routes++;
  const d = gc(aps[0], aps[aps.length - 1]);
  const hi = d >= 1000 ? 1.15 : 1.3;

  const hits: Hit[] = [];
  for (const field of ["study", "travel"] as const) {
    const zh: string = n[field]?.["zh-CN"] ?? "";
    const en: string = n[field]?.["en-US"] ?? "";
    for (const m of zh.matchAll(ZH_RE)) {
      const km = zhNum(m[2]);
      if (km) { hits.push({ lang: "zh", field, qual: m[1] ?? "", km, raw: m[0] }); zhN++; }
    }
    // 英文侧有三种写法：「X km in all」「spanning / covering about X km」，以及首句里夹着的「about X km」。
    // 只认这三个位置 —— 全文随便抓「about X km」会把「距市中心约 20 km」一类句子也抓进来。
    // `(?![²2])`：`km²` 是面积不是距离（第一版漏了，湄公河三角洲「covering about 15,000 km²」被当成了全程距离）。
    const first = en.split(/(?<=\.)\s/)[0] ?? "";
    const enHits = [
      ...en.matchAll(EN_RE),
      ...en.matchAll(/(?:spanning|covering)\s+(about|some|nearly|over|more than)?\s*([0-9][0-9,]*)\s*km(?![²2])/g),
      ...first.matchAll(/(about|some|nearly|over|more than)\s+([0-9][0-9,]*)\s*km(?![²2])\b(?! (?:from|north|south|east|west|away|inland|across|long|wide))/g),
    ];
    const seenKm = new Set<number>();
    for (const m of enHits) {
      const km = Number(m[2].replace(/,/g, ""));
      if (seenKm.has(km)) continue; // 同一个数被两条正则各抓一次
      seenKm.add(km);
      hits.push({ lang: "en", field, qual: m[1] ?? "", km, raw: m[0].trim() }); enN++;
    }
  }
  if (!hits.length) continue;

  const why: string[] = [];
  for (const h of hits) {
    const ratio = h.km / d;
    // 「超过 X」只要求 X ≤ 实际；「接近 / 近 X」按约数处理
    if (h.qual !== "超过" && h.qual !== "over" && h.qual !== "more than" && ratio < 0.95)
      why.push(`${h.lang}「${h.raw}」比大圆还短 ${Math.round((1 - ratio) * 100)}%`);
    if (ratio > hi) why.push(`${h.lang}「${h.raw}」比大圆长 ${Math.round((ratio - 1) * 100)}%（上限 ${Math.round((hi - 1) * 100)}%）`);
  }
  for (const field of ["study", "travel"]) {
    const z = hits.find((h) => h.lang === "zh" && h.field === field);
    const e = hits.find((h) => h.lang === "en" && h.field === field);
    if (z && e) {
      pairN++;
      if (Math.abs(z.km - e.km) / Math.max(z.km, e.km) > 0.06) why.push(`${field} 中英对不上：${z.km} vs ${e.km}`);
    }
  }
  const line = `${why.length ? "✗" : "✓"} ${r.id.padEnd(8)} 大圆 ${Math.round(d)} km ｜ ` +
    hits.map((h) => `${h.lang}/${h.field} ${h.km}（${(h.km / d).toFixed(2)}×）`).join("  ");
  if (why.length) { flagged++; rows.push(line + "\n     " + why.join("；")); }
}

console.log(
  `航线「全程约 X 公里」× 两端机场大圆距离（不联网）：扫了 ${routes} 条航线，` +
  `抽到中文 ${zhN} 处、英文 ${enN} 处、中英同段配对 ${pairN} 组`,
);
if (!routes || !zhN || !enN || !pairN) {
  console.error("\n✗ 有一项是 0 —— 这不是「没问题」，是这个脚本自己坏了（字段名、正则或导出改了？）");
  process.exit(1);
}
if (rows.length) console.log("\n" + rows.join("\n"));
console.log(flagged ? `\n✗ ${flagged} 条航线的距离对不上` : "\n✓ 全部在容差内");
process.exit(flagged ? 1 : 0);
