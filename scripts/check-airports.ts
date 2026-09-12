/**
 * 机场坐标与 IATA 代码 × OurAirports（公有领域数据集）离线比对。
 *
 * 由来：本库 519 个机场条目的坐标此前只有「公开资料」级别的留痕，**没有任何机器可复算的核对**。
 * `check:routes` 只比「航线航点与城市注册表是否一致」—— 两边一起错它看不见。
 * 2026-09-12 第一次跑（用户批准下载数据集后）：511 个去重条目里
 * **14 个坐标偏差 >3 km、2 个 IATA 代码是错的**：
 *   · `BHZ` → 北海福成机场的正确代码是 **BHY**（坐标本身没错，只有代码错）；
 *   · `AYN` → 安阳红旗渠机场（2023-11 通航，在汤阴县）的代码是 **HQQ**，
 *     `AYN` 是老的安阳殷都机场；本库的坐标离红旗渠 15 km、离殷都 23 km，两个都不是。
 *   · 偏差最大的三个：遵义新舟 34.6 km、合肥新桥 23.1 km、特木科拉阿劳卡尼亚 17.7 km。
 *
 * **数据集不进仓库**（12.7 MB，且会滚动更新）。下载：
 *
 *     mkdir -p .cache/ourairports
 *     curl -sSL -o .cache/ourairports/airports.csv https://davidmegginson.github.io/ourairports-data/airports.csv
 *
 * 没有这个文件时脚本**不报错、只提示**（exit 0）—— 它不是门禁，是一份需要人判断的清单：
 * OurAirports 是社区维护的公有领域数据集（多数条目源自各国 AIP），对**坐标**足够可靠，
 * 但遇到「新机场刚通航 / 老机场停用」这类，它也可能滞后（安阳那一条就是它把 AYN 记在老机场上，
 * 而新机场另有 HQQ —— 两边都要查才判得准）。
 */
import { readFileSync, existsSync } from "node:fs";
import { CITY_REGISTRY } from "@/lib/places-registry";
import { TRAVEL_CONTENT_ZH } from "@/lib/travel-content.zh";

const CSV = process.argv.find((a) => a.startsWith("--csv="))?.slice(6)
  ?? ".cache/ourairports/airports.csv";
const LIMIT_KM = 3;

if (!existsSync(CSV)) {
  console.log(
    `没有找到 ${CSV} —— 这个检查需要 OurAirports 的公有领域数据集（不进仓库）。\n` +
    `  mkdir -p .cache/ourairports\n` +
    `  curl -sSL -o .cache/ourairports/airports.csv https://davidmegginson.github.io/ourairports-data/airports.csv\n` +
    `下载后再跑一次。`,
  );
  process.exit(0);
}

/** 极简 CSV 解析：OurAirports 的字段里有逗号与引号，必须按引号状态切 */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [], cell = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else quoted = false; }
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
    else if (c !== "\r") cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

const rows = parseCsv(readFileSync(CSV, "utf8"));
const head = rows[0];
const col = (n: string) => head.indexOf(n);
const [cIata, cName, cLat, cLon, cType, cMuni, cSched] =
  ["iata_code", "name", "latitude_deg", "longitude_deg", "type", "municipality", "scheduled_service"].map(col);

type Oa = { name: string; lat: number; lon: number; type: string; muni: string; sched: string };
const byIata = new Map<string, Oa[]>();
for (const r of rows.slice(1)) {
  const ia = (r[cIata] ?? "").trim().toUpperCase();
  if (ia.length !== 3) continue;
  const list = byIata.get(ia) ?? [];
  list.push({ name: r[cName], lat: Number(r[cLat]), lon: Number(r[cLon]), type: r[cType], muni: r[cMuni], sched: r[cSched] });
  byIata.set(ia, list);
}

const km = (aLat: number, aLon: number, bLat: number, bLon: number) => {
  const R = 6371.0088, rad = (d: number) => (d * Math.PI) / 180;
  const dP = rad(bLat - aLat), dL = rad(bLon - aLon);
  const h = Math.sin(dP / 2) ** 2 + Math.cos(rad(aLat)) * Math.cos(rad(bLat)) * Math.sin(dL / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const far: string[] = [], unknown: string[] = [];
let ok = 0, scanned = 0;
for (const c of CITY_REGISTRY) {
  if (!c.airport) continue;
  scanned++;
  const cands = byIata.get(c.airport.iata.toUpperCase());
  if (!cands) { unknown.push(`  ${c.airport.iata}  ${c.id}「${c.airport.nameZh}」—— OurAirports 里没有这个 IATA`); continue; }
  const best = cands.reduce((m, r) => (km(c.airport!.lat, c.airport!.lon, r.lat, r.lon) < km(c.airport!.lat, c.airport!.lon, m.lat, m.lon) ? r : m));
  const d = km(c.airport.lat, c.airport.lon, best.lat, best.lon);
  if (d <= LIMIT_KM) { ok++; continue; }
  far.push(
    `⚑ ${c.airport.iata}  偏差 ${d.toFixed(1)} km  ${c.id}「${c.airport.nameZh}」(${c.airport.lat}, ${c.airport.lon})\n` +
    `     OurAirports：${best.name} (${best.lat}, ${best.lon}) ${best.muni} type=${best.type} 定期航班=${best.sched}`,
  );
}

/** 和别的检查同一条判据：说得出自己查了多少个对象，且任何一类是 0 就是脚本坏了 */
console.log(
  `机场 × OurAirports 离线比对：城市注册表里有机场字段的 ${scanned} 个条目，` +
  `坐标对得上（≤${LIMIT_KM} km）${ok} 个，偏差超限 ${far.length} 个，IATA 查不到 ${unknown.length} 个`,
);
if (!scanned || !byIata.size) {
  console.error("\n✗ 扫到 0 个 —— 这不是「没问题」，是脚本或数据集坏了");
  process.exit(1);
}
for (const l of far) console.log("\n" + l);
if (unknown.length) console.log("\n--- IATA 在 OurAirports 里查不到 ---\n" + unknown.join("\n"));
console.log(
  `\n⚑ 要人判断：偏差大多是本库坐标不准（照 OurAirports 改），但也可能是**新机场刚通航、数据集还没跟上**，\n` +
  `两边都要查。IATA 查不到的未必是错 —— EuroAirport 的 EAP 是官方的联合代码，OurAirports 只收 BSL/MLH。\n` +
  `**这是清单不是门禁，永远 exit 0。**`,
);

// ---------------------------------------------------------------------------
// 第二段：正文里的「机场距市区约 X 公里」× 注册表坐标（不需要数据集）
// ---------------------------------------------------------------------------
const FIELDS = ["identity", "howItWorks", "layout", "gettingAround", "whenAndTips"] as const;
/** 「机场……约 X 公里」与「约 X 公里……机场」两种语序；km 与公里都认 */
const DIST = /机场[^。；，、]{0,18}?约?\s*([\d.]+)\s*(?:公里|km)|约?\s*([\d.]+)\s*(?:公里|km)[^。；，、]{0,8}?机场/g;

type Claim = { field: string; v: number; ctx: string };
const tooShort: string[] = [], conflict: string[] = [];
let entriesWithDistance = 0;

for (const c of CITY_REGISTRY) {
  const guide = TRAVEL_CONTENT_ZH[c.id];
  if (!c.airport || !guide) continue;
  const real = km(c.lat, c.lon, c.airport.lat, c.airport.lon);
  const claims: Claim[] = [];
  for (const f of FIELDS) {
    const raw = (guide as unknown as Record<string, string | undefined>)[f];
    if (!raw) continue;
    const t = raw.replace(/\s+/g, "");
    for (const m of t.matchAll(DIST)) {
      const v = Number(m[1] ?? m[2]);
      if (v >= 0.5 && v <= 400) claims.push({ field: f, v, ctx: t.slice(Math.max(0, m.index - 20), m.index + 28) });
    }
  }
  if (!claims.length) continue;
  entriesWithDistance++;
  const vals = [...new Set(claims.map((x) => Math.round(x.v)))];
  if (vals.length > 1) {
    const lo = Math.min(...vals), hi = Math.max(...vals);
    // 同条目两个值差 >20% **且绝对差 ≥3 km** 才报：一条目里提到两座不同机场是常事，所以这里只是清单、要人看；
    // 绝对差这一条是为了压掉「2 km vs 3 km」这种四舍五入噪音（拉布安巴焦的机场就在镇边上）
    if ((hi - lo) / hi > 0.2 && hi - lo >= 3) {
      conflict.push(
        `⚑ ${c.id}「${c.nameZh}」同条目里的机场距离 ${vals.join(" / ")} 公里（注册表坐标算出 ${real.toFixed(1)} 公里）\n` +
        claims.map((x) => `     [${x.field}] ${x.ctx}`).join("\n"),
      );
    }
  } else if (claims[0].v < real * 0.95 && real - claims[0].v > 2) {
    tooShort.push(
      `⚑ ${c.id}「${c.nameZh}」正文 ${claims[0].v} 公里 < 直线 ${real.toFixed(1)} 公里（${c.airport.iata} ${c.airport.nameZh}）\n` +
      `     [${claims[0].field}] ${claims[0].ctx}`,
    );
  }
}

console.log(
  `\n正文机场距离 × 注册表坐标：${entriesWithDistance} 个条目的正文给了距离，` +
  `比直线还短 ${tooShort.length} 个，同条目自相矛盾 ${conflict.length} 个`,
);
if (!entriesWithDistance) {
  console.error("✗ 一个都没扫到 —— 字段名或正则坏了");
  process.exit(1);
}
for (const l of [...tooShort, ...conflict]) console.log("\n" + l);
if (tooShort.length || conflict.length) {
  console.log(
    "\n「比直线还短」一定错（公路里程不可能短于直线）；「同条目两个值」要人看 —— " +
    "一个条目里提到两座不同机场是常事。**比直线长不报** —— 正文写的多是公路里程。",
  );
}
