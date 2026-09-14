/**
 * 开着的 `data-error` issue × `check:claims` 现在还报不报 —— 找出「已经修好/已豁免、但 issue 还开着」的。
 *
 * 由来（2026-09-12）：开着的 issue 有 47 条，看上去像一大堆没修完的错。逐条对完发现
 * **9 条 C6-d issue 里有 7 条早就不再命中了** —— 有的在后来的轮次里改对了，有的核实为
 * 「该地确实没有更新的数」进了豁免表，但**没有人回来关 issue**。于是同一件事被反复读、
 * 反复排进下一轮的清单，而真正还没解决的那两条被淹在里面。
 *
 * 判据只有一条、且由构造钉死：issue 标题里写着 `travel/<id> · <字段>`（`verify:report` 开 issue
 * 时就是这么写的），把它还原成 `travel/<id>/<字段>` 这个 key，去 `check:claims` 的**当前输出**里找。
 * **找不到 = 这条规则现在不报它了**，可以关（或者至少该回去看一眼为什么不报了）。
 *
 * 它不改任何东西，也不自动关 issue —— 只出清单，永远 exit 0。关不关要人判断：
 * 「不再命中」可能是修好了、可能是进了豁免表，也可能是**正文被删掉了**，后者不是解决。
 *
 * 用法：npm run check:issues        （需要 gh 已登录；没有 gh 就跳过并提示）
 */
import { execFileSync } from "node:child_process";

function sh(cmd: string, args: string[]): string {
  try {
    return execFileSync(cmd, args, { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
  } catch {
    return "";
  }
}

const raw = sh("gh", ["issue", "list", "--label", "data-error", "--state", "open",
  "--limit", "200", "--json", "number,title", "--jq", ".[]|\"\\(.number)\\t\\(.title)\""]);
if (!raw.trim()) {
  console.log("拿不到 issue 列表（gh 未登录或不在仓库里）—— 跳过。");
  process.exit(0);
}

const claims = sh("npm", ["run", "--silent", "check:claims", "--", "--show=500"]);
if (!claims.trim()) {
  console.error("✗ check:claims 没有输出 —— 这不是「没问题」，是取不到值");
  process.exit(1);
}
const live = new Set(
  [...claims.matchAll(/\b((?:travel|terrain|city|route)\/[a-z0-9-]+\/[a-zA-Z]+)\b/g)].map((m) => m[1]!),
);

/** issue 标题形如 `[C6-d] travel/sendai · identity：…`；还原成 travel/sendai/identity */
const KEY = /\b((?:travel|terrain|city|route)\/[a-z0-9-]+)\s*·\s*([a-zA-Z]+)/;
/**
 * **只对 `check:claims` 真的实现了的错型下结论。** 第一版没有这一层，于是 C6-j（会过期的状态，
 * 归 `check:pending` 管）和 C6-c / C3-b（根本没有脚本）也被判成「不再命中、可以关」——
 * 那不是「解决了」，是**这条规则从来就看不见它**。判据：脚本看不见的类，一律不表态。
 */
const SCRIPTED = /^\[(C6|C6-?d|C6-?e|C6-?f|C6-?i|C6-?k|C1a|C1b|D1b|D4)\]/i;
const closable: string[] = [];
let withKey = 0, stillLive = 0, noKey = 0, unscripted = 0;

for (const line of raw.trim().split("\n")) {
  const [num, ...rest] = line.split("\t");
  const title = rest.join("\t");
  const m = title.match(KEY);
  if (!m) { noKey++; continue; }
  if (!SCRIPTED.test(title.trim())) { unscripted++; continue; }
  withKey++;
  const key = `${m[1]}/${m[2]}`;
  if (live.has(key)) stillLive++;
  else closable.push(`#${num}  ${key}\n     ${title.slice(0, 100)}`);
}

console.log(
  `开着的 data-error issue：${raw.trim().split("\n").length} 条。其中 ${withKey} 条既有条目 key、` +
  `错型又是 check:claims 真的实现了的，本脚本只对这些表态；\n` +
  `另 ${noKey} 条没有 key（航班号 / 总伞），${unscripted} 条的错型没有脚本（C6-j 归 check:pending，C6-c / C3-b 没有脚本）—— 两类都不表态。\n` +
  `check:claims 当前仍在命中的 key：${live.size} 个。`,
);
console.log(`\n仍然命中、确实没解决：${stillLive} 条`);
console.log(`**不再命中、可以回去关掉：${closable.length} 条**`);
for (const c of closable) console.log("\n⚑ " + c);
if (closable.length) {
  console.log(
    "\n⚑ 「不再命中」有三种可能：① 后来的轮次改对了；② 核实为「确实没有更新的数」进了" +
    "docs/claims-stale-exempt.json；③ **正文那句被删掉了**。前两种可以关，第三种不是解决 —— 要人看。\n" +
    "**这是清单不是门禁，永远 exit 0。**",
  );
}
