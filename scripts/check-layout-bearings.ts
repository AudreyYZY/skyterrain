/**
 * 旅游攻略里**不带距离**的方位词 × POI / 城市坐标离线比对（不联网，永远 exit 0）。
 *
 * 与 `check:bearings` 的分工：那个脚本只认「<地标>在<方位>约 N 公里」这种**带距离**的句式（2026-09-13 立）；
 * 本脚本补上 layout 段里大量**不带距离**的「X 在城北」「往东是 X」「X 在 Y 西北」—— 这周三次写反的方位都是这一类。
 *
 * 由来：`layout` / `howItWorks` 段整段都是「A 在 B 的东 / 西 / 南 / 北」，而这些方位**从来没有脚本对照过坐标**。
 * 2026-09-15/16 一周之内三次靠核实子代理「按 pois.ts 坐标自己算方位角」才抓到写反的方位：
 *   · 大特尔诺沃「特拉佩齐察丘在察雷韦茨西北」实为正西（约 269°）；
 *   · 瓦尔米耶拉「老城在高亚河东岸、火车站在西侧河对岸」东西写反；
 *   · 巴特伊舍尔「皇帝别墅在城北」实在镇中心以西（约 238°），同条 layout 段自己写的是河西岸。
 * 坐标就在同一个目录里，算一下只要一行 —— 所以把它做成清单。
 *
 * 只认三种句式（中文正文，同一个分句内）：
 *   ① 「<POI> 在 / 位于 <市中心|镇中心|城|镇|村|老城…> …<方位>」  —— 相对城市条目坐标
 *   ② 「<POI1> 在 / 位于 <POI2> …<方位>」                          —— 相对另一个 POI
 *   ③ 「<市中心|城|镇…>? 往 / 向 <方位> …是 / 有 <POI>」             —— 相对城市条目坐标
 * 方位与实测方位角相差超过 67.5°（即差出一个半象限以上）才报。
 *
 * **它不是门禁**：地名匹配有假阳性（POI 名在句子里是别的意思、城市坐标不在真正的中心、
 * 「城北」指的是城区北部而 POI 在城外）—— 标出来的每一条要人回原文与地图判断。
 * 每次都打印实际比了多少对，比到 0 对说明句式或数据取不到，不能当「全部通过」。
 *
 * 2026-09-16 第一次跑：408 对里报 28 条，分诊结果 —— 正文写错 4（惠灵顿缆车、巴里阿尔塔穆尔杰、大田西大田站、布达佩斯盖勒特山）、
 * POI 坐标错 1（鹿儿岛樱岛渡轮码头）、城市坐标不在中心 5（广岛、维亚纳堡 ×2、艾森施塔特、圣安东）、假阳性 18。
 * 假阳性里两类可以机械排除（下面已加）：POI 名是更长专名的前缀、「依次」枚举句；其余多是城市坐标≠正文所指的「老城」，只能人看。
 */
import { CITY_REGISTRY } from "@/lib/places-registry";
import { TRAVEL_CONTENT_ZH } from "@/lib/travel-content.zh";
import { POIS_BY_CITY } from "@/lib/travel-pois";
import { makeScopeFilter } from "./lib/scope-filter.ts";

const scope = makeScopeFilter(process.argv.slice(2));
// 「检查要能说出自己查了多少个对象」—— 收窄时尤其要说，否则「0 处命中」看不出是干净还是没查
if (scope.active) console.log(scope.label);

const DIRS: Record<string, number> = {
  东北: 45, 东南: 135, 西南: 225, 西北: 315, 东: 90, 南: 180, 西: 270, 北: 0,
};
const DIR_RE = "(东北|东南|西南|西北|东|南|西|北)";
const CENTER_RE = "(市中心|镇中心|城中心|村中心|老城|城区|市区|镇上|城|镇|村)";
const LIMIT = 67.5;
const FIELDS = ["layout", "howItWorks", "gettingAround", "seeAndDo", "identity"] as const;

function bearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const r = Math.PI / 180;
  const y = Math.sin((lon2 - lon1) * r) * Math.cos(lat2 * r);
  const x = Math.cos(lat1 * r) * Math.sin(lat2 * r) - Math.sin(lat1 * r) * Math.cos(lat2 * r) * Math.cos((lon2 - lon1) * r);
  return (Math.atan2(y, x) / r + 360) % 360;
}
function distKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const r = Math.PI / 180;
  const h = Math.sin((lat2 - lat1) * r / 2) ** 2 + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin((lon2 - lon1) * r / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}
const angDiff = (a: number, b: number) => { const d = Math.abs(a - b) % 360; return d > 180 ? 360 - d : d; };
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** POI 名在正文里常只出现一部分：「中心广场与凯瑟琳教堂」→ 也试「凯瑟琳教堂」「中心广场」 */
function aliases(name: string): string[] {
  const parts = name.split(/与|和|（|）|\(|\)|·/).map((s) => s.trim()).filter((s) => s.length >= 3);
  return [...new Set([name, ...parts])].sort((a, b) => b.length - a.length);
}

let pairs = 0;
const hits: string[] = [];
const perField: Record<string, number> = {};

for (const city of CITY_REGISTRY) {
  if (!scope.inScope(city.id)) continue;
  const guide = TRAVEL_CONTENT_ZH[city.id];
  const pois = POIS_BY_CITY[city.id] ?? [];
  if (!guide || pois.length === 0) continue;
  const named = pois.map((p) => ({ p, al: aliases(p.nameZh) }));
  for (const f of FIELDS) {
    const text = (guide as unknown as Record<string, string | undefined>)[f];
    if (!text) continue;
    for (const clause of text.split(/[；。]/)) {
      const check = (label: string, fromLat: number, fromLon: number, to: { lat: number; lon: number; nameZh: string }, dir: string, frag: string) => {
        if (distKm(fromLat, fromLon, to.lat, to.lon) < 0.15) return; // 太近，方位角没有意义
        pairs++; perField[f] = (perField[f] ?? 0) + 1;
        const b = bearing(fromLat, fromLon, to.lat, to.lon);
        const d = angDiff(b, DIRS[dir]);
        if (d > LIMIT) {
          hits.push(`⚑ ${city.id}/${f}  「${frag.trim().slice(0, 60)}」\n     写的是 ${label}${dir}，按坐标算方位角约 ${b.toFixed(0)}°（差 ${d.toFixed(0)}°，直线 ${distKm(fromLat, fromLon, to.lat, to.lon).toFixed(1)} km）`);
        }
      };
      for (const { p, al } of named) {
        for (const a of al) {
          if (!clause.includes(a)) continue;
          // 假阳性一：POI 名只是更长专名的前缀（「三清山」命中「三清山机场」、「大田站」命中「西大田站」）
          const at = clause.indexOf(a);
          if (/^(机场|站|路|街|桥|大道|港)/.test(clause.slice(at + a.length)) || /[东西南北新老]$/.test(clause.slice(0, at))) continue;
          // 假阳性二：枚举句「从南往北依次是 A、B、C」—— 方位描述的是整条序列，不是第一个名字相对城市的方位
          if (clause.includes("依次")) continue;
          // ① POI 在 / 位于 城|镇… …方位
          const r1 = new RegExp(`${esc(a)}[^，]{0,6}?(?:在|位于)${CENTER_RE}(?:的)?(?:以)?${DIR_RE}`);
          const m1 = clause.match(r1);
          if (m1) { check("城市坐标的", city.lat, city.lon, p, m1[2], m1[0]); break; }
          // ② POI1 在 / 位于 POI2 …方位
          let done = false;
          for (const { p: q, al: qal } of named) {
            if (q === p) continue;
            for (const b2 of qal) {
              const r2 = new RegExp(`${esc(a)}[^，]{0,6}?(?:在|位于)${esc(b2)}(?:的)?(?:以)?${DIR_RE}`);
              const m2 = clause.match(r2);
              if (m2) { check(`${q.nameZh} 的`, q.lat, q.lon, p, m2[1], m2[0]); done = true; break; }
            }
            if (done) break;
          }
          if (done) break;
          // ③ 往 / 向 方位 …是 / 有 POI
          const r3 = new RegExp(`(?:往|向)${DIR_RE}[^，]{0,14}?(?:是|有|就是)${esc(a)}`);
          const m3 = clause.match(r3);
          if (m3) { check("城市坐标往", city.lat, city.lon, p, m3[1], m3[0]); break; }
        }
      }
    }
  }
}

console.log(`方位词 × 坐标比对（旅游攻略中文正文，${FIELDS.join(" / ")}）：实际比较 ${pairs} 对`);
console.log(`  分字段：${Object.entries(perField).map(([k, v]) => `${k} ${v}`).join("，") || "（无）"}`);
if (pairs === 0) console.log("⚠️ 一对都没比上 —— 句式或数据取不到，不能当作全部通过。");
console.log(hits.length ? `\n${hits.length} 处方位与坐标差出 ${LIMIT}° 以上（逐条回原文与地图判断，命中不等于写错）：\n\n${hits.join("\n")}` : "\n没有差出阈值的方位。");
