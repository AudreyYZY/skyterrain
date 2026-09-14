/**
 * 正文里的「**某地标在<方位>约 N 公里**」× 该地标在 `travel-pois.ts` 里的真实坐标。
 *
 * 由来（2026-09-13）：随机抽样审计（`docs/quality-sampling.md`）第 1–4 批查出 10 处错，
 * **其中 4 处（40%）是方位或距离写粗** —— 归仁富吉机场写「北面」实为西北、
 * 达博的惠灵顿溶洞写「东 50 公里」实为东南 58 公里、斯普利特与的里雅斯特的机场距离各差二成。
 * 这是抽样量出来的**最大单一错型**，而此前没有任何脚本盯着它。
 *
 * 这个检查**主语由构造钉死**：句子里点名的地标必须在该城市的 `POIS_BY_CITY` 里有坐标，
 * 才拿去和城市注册表坐标算方位角与直线距离。不在 POI 表里的名字一律不猜、不比。
 *
 * 两条判据，都刻意留了宽容度：
 *   ① **方位**：正文方位词与实算方位角相差超过 **67.5°**（即差出一格半以上）才报 ——
 *      「西」与「西北」只差 45°，属正常的口语粗度，不报；「北」与「西北」也不报；
 *      但「东」说成「西」、「北」说成「西南」这种一定报。
 *   ② **距离**：正文值 < 直线 × 0.9（**公路里程不可能短于直线**，留 10% 给坐标取点差异），
 *      或 > 直线 × 2.2（绕路也绕不到两倍以上）才报。
 *
 * **清单不是门禁，永远 exit 0** —— 判对错要人看：地标可能有多个入口、城市坐标可能取在老城
 * 而正文从新区算起。标 ⚑ 的是值得先看的。
 */
import { CITY_REGISTRY } from "@/lib/places-registry";
import { TRAVEL_CONTENT_ZH } from "@/lib/travel-content.zh";
import { POIS_BY_CITY } from "@/lib/travel-pois";

const FIELDS = ["identity", "howItWorks", "layout", "gettingAround", "seeAndDo", "whenAndTips"] as const;

/** 中文方位词 → 方位角中心（度，正北为 0，顺时针） */
const DIRS: [string, number][] = [
  ["东北偏北", 22.5], ["东北偏东", 67.5], ["东南偏东", 112.5], ["东南偏南", 157.5],
  ["西南偏南", 202.5], ["西南偏西", 247.5], ["西北偏西", 292.5], ["西北偏北", 337.5],
  ["东北", 45], ["东南", 135], ["西南", 225], ["西北", 315],
  ["正北", 0], ["正东", 90], ["正南", 180], ["正西", 270],
  ["北", 0], ["东", 90], ["南", 180], ["西", 270],
];
const DIR_ALT = DIRS.map(([d]) => d).join("|");
/**
 * 「<地标>在（市区/城区/…）<方位>（面/侧）约 N 公里」。
 *
 * **参照点必须是本城，不能是别的地名** —— 第一版用 `[^。；，]{0,6}?` 兜住中间，结果
 * 「响沙湾在**东胜**以北约 80 公里」把「东胜」的「东」当成了方位词，
 * 「托莱多在**马德里**以南约 70 公里」则把参照点悄悄换成了另一座城。
 * 现在中间只允许出现明确指向本城的词（市区 / 城区 / 市中心 / 城 / 镇 / 县城），
 * 或者什么都不出现；出现别的字一律不匹配。
 */
const RE = new RegExp(
  `([\\u4e00-\\u9fa5A-Za-z·—\\-]{2,12}?)(?:在|位于|距)(?:市区|城区|市中心|老城|城|镇|县城)?以?(${DIR_ALT})(?:面|侧|方|边)?(?:约)?\\s*([\\d.]+)\\s*公里`,
  "g",
);

function km(a: number, b: number, c: number, d: number): number {
  const R = 6371.0088, p = Math.PI / 180;
  return 2 * R * Math.asin(Math.sqrt(
    Math.sin(((c - a) * p) / 2) ** 2 + Math.cos(a * p) * Math.cos(c * p) * Math.sin(((d - b) * p) / 2) ** 2,
  ));
}
function bearing(a: number, b: number, c: number, d: number): number {
  const p = Math.PI / 180;
  const y = Math.sin((d - b) * p) * Math.cos(c * p);
  const x = Math.cos(a * p) * Math.sin(c * p) - Math.sin(a * p) * Math.cos(c * p) * Math.cos((d - b) * p);
  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}
const angDiff = (x: number, y: number) => { const d = Math.abs(x - y) % 360; return d > 180 ? 360 - d : d; };

const dirHits: string[] = [], distHits: string[] = [];
let pairs = 0, entries = 0;

for (const c of CITY_REGISTRY) {
  const guide = TRAVEL_CONTENT_ZH[c.id];
  const pois = POIS_BY_CITY[c.id];
  if (!guide || !pois?.length) continue;
  entries++;
  for (const f of FIELDS) {
    const raw = (guide as unknown as Record<string, string | undefined>)[f];
    if (!raw) continue;
    const t = raw.replace(/\s+/g, "");
    for (const m of t.matchAll(RE)) {
      const [, name, dirWord, numStr] = m;
      // **只认完全同名**（允许去掉括注）。第一版用前缀匹配，于是「特罗姆瑟在北极圈以北
      // 约 350 公里」里的「特罗姆瑟」匹配到了「特罗姆瑟大学博物馆」—— 主语根本不是那个地标。
      const poi = pois.find((p) => p.nameZh === name || p.nameZh.replace(/（.*?）/g, "") === name);
      if (!poi) continue;                       // 不在 POI 表里 / 不同名 → 不猜、不比
      if (name === c.nameZh || c.nameZh.startsWith(name!)) continue;  // 主语是这座城自己，不是地标
      const claimed = Number(numStr);
      if (!(claimed >= 1 && claimed <= 500)) continue;
      const want = DIRS.find(([d]) => d === dirWord)![1];
      const real = km(c.lat, c.lon, poi.lat, poi.lon);
      const brg = bearing(c.lat, c.lon, poi.lat, poi.lon);
      pairs++;
      const ctx = t.slice(Math.max(0, m.index - 14), m.index + m[0].length + 6);
      if (angDiff(want, brg) > 67.5) {
        dirHits.push(
          `⚑ ${c.id}「${c.nameZh}」[${f}] ${poi.nameZh}：正文写「${dirWord}」（${want}°），` +
          `实算 ${brg.toFixed(0)}°（差 ${angDiff(want, brg).toFixed(0)}°）\n     …${ctx}…`,
        );
      }
      // 绝对差 ≥3 km 才报：短距离上「城市坐标取在哪个点」本身就能差出一两公里，
      // 「圣泽诺大殿在老城西面约 1 公里」对直线 1.2 公里这种不值得占清单。
      if (Math.abs(claimed - real) >= 3 && (claimed < real * 0.85 || claimed > real * 2.2)) {
        distHits.push(
          `⚑ ${c.id}「${c.nameZh}」[${f}] ${poi.nameZh}：正文 ${claimed} 公里，直线 ${real.toFixed(1)} 公里` +
          `（${claimed < real ? "**比直线还短 —— 公路里程不可能短于直线**" : "超过直线两倍以上"}）\n     …${ctx}…`,
        );
      }
    }
  }
}

console.log(
  `正文方位与距离 × travel-pois 坐标：扫了 ${entries} 个有 POI 坐标的城市条目，` +
  `配上了 ${pairs} 对「点名地标 + 方位 + 距离」\n` +
  `  方位差出一格半以上：${dirHits.length} 处\n  距离不可能：${distHits.length} 处`,
);
if (!entries) {
  console.error("✗ 一个条目都没扫到 —— 这不是「没问题」，是取不到值");
  process.exit(1);
}
for (const l of [...dirHits, ...distHits]) console.log("\n" + l);
if (dirHits.length || distHits.length) {
  console.log(
    "\n⚑ 要人看：地标可能有多个入口、城市坐标可能取在老城而正文从新区算起。" +
    "方位容差已放到 67.5°（「西」与「西北」这种口语粗度不报），距离容差 0.85×–2.2× 且绝对差 ≥3 km。\n" +
    "**这是清单不是门禁，永远 exit 0。**",
  );
}
