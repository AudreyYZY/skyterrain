/**
 * 把一轮核实结果写进航线数据
 *   运行: npm run verify:apply -- <findings.json> [--dry-run]
 *
 * 与 verify-issues.ts 是同一份 findings.json 的两个消费端：
 *   verify:apply   → 改 data/routes/*.json（航班字段 + source 留痕）
 *   verify:report  → 开/关 issue + 记台账
 * 先 apply 再 report，这样 issue 里说的「已修正」是真的已经改完了。
 *
 * 这一步之所以要脚本化：前两轮是手写 python 逐条改的，18 条就要写一大段
 * 字典字面量，第三轮开始必然出错。findings.json 已经是结构化的，直接消费它。
 *
 * findings.json 里与本脚本相关的字段：
 *   verdict     ok | wrong | unknown
 *   resolution  fixed | open | blocked
 *   patch       {airline?, airlineEn?, flightNo?, aircraft?, depIata?, arrIata?, durationMin?}
 *               —— 只在 resolution=fixed 且确实要改数据时给
 *   waypointPatch {index, ...字段}  —— 改某个航点（D5 那类机场对不上）
 *   source      核实来源 URL
 *   finding     写进 source.note 的正文
 *   note        补充说明，接在 note 后面
 */

import { readFile, writeFile } from "node:fs/promises";

interface Finding {
  key: string;
  kind: string;
  id: string;
  field: string;
  verdict: "ok" | "wrong" | "unknown";
  claim: string;
  finding: string;
  source?: string;
  resolution: "fixed" | "open" | "blocked";
  note?: string;
  errorClass?: string;
  patch?: Record<string, string | number>;
  waypointPatch?: { index: number } & Record<string, unknown>;
}

interface Round {
  round: string;
  scope: string;
  umbrella?: number;
  /** 核实日期 YYYY-MM-DD，缺省用今天 */
  checkedOn?: string;
  findings: Finding[];
}

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const path = args.find((a) => !a.startsWith("--"));
if (!path) {
  console.error("用法: npm run verify:apply -- <findings.json> [--dry-run]");
  process.exit(2);
}

const round: Round = JSON.parse(await readFile(path, "utf8"));
const checkedOn = round.checkedOn ?? new Date().toISOString().slice(0, 10);

let changed = 0;
let sourced = 0;
const touched = new Set<string>();

const VERDICTS = new Set(["ok", "wrong", "unknown"]);
const RESOLUTIONS = new Set(["fixed", "open", "blocked"]);

for (const f of round.findings) {
  // 校验枚举值 —— 不校验的话，findings.json 里一个位置写错的参数会让 patch 被静默丢掉，
  // 而 source 照样写成「已核实」。实测踩过：resolution 被误传成一个对象，于是
  // arrIata/waypoint 都没改，条目却被标成了 status: "wrong"。
  if (!VERDICTS.has(f.verdict)) {
    throw new Error(`${f.key}: verdict 非法「${JSON.stringify(f.verdict)}」，只能是 ok / wrong / unknown`);
  }
  if (!RESOLUTIONS.has(f.resolution)) {
    throw new Error(`${f.key}: resolution 非法「${JSON.stringify(f.resolution)}」，只能是 fixed / open / blocked`);
  }
  if ((f.patch || f.waypointPatch) && f.resolution !== "fixed") {
    throw new Error(`${f.key}: 给了 patch 但 resolution 是「${f.resolution}」—— patch 只在 fixed 时应用，这多半是写错了`);
  }
  if (f.kind !== "routes") {
    console.log(`  跳过 ${f.key}（本脚本只处理 kind=routes）`);
    continue;
  }
  const file = `data/routes/${f.id}.json`;
  const raw = await readFile(file, "utf8");
  const d = JSON.parse(raw) as Record<string, unknown> & {
    flight?: Record<string, unknown>;
    waypoints: Record<string, unknown>[];
    source?: unknown;
  };

  if (f.patch && f.resolution === "fixed") {
    if (!d.flight) throw new Error(`${f.id} 没有 flight 字段，无法应用 patch`);
    Object.assign(d.flight, f.patch);
    changed++;
  }
  if (f.waypointPatch && f.resolution === "fixed") {
    const { index, ...rest } = f.waypointPatch;
    Object.assign(d.waypoints[index]!, rest);
    changed++;
  }

  // source 留痕：一条航线可能有多个 finding（flight + waypoint），note 累加
  const prior = (d.source as { note?: string } | undefined)?.note;
  const isWrongOpen = f.verdict !== "ok" && f.resolution !== "fixed";
  const line =
    (f.verdict === "ok" ? "" : f.resolution === "fixed" ? "**已改正**：" : "**查明有误**：") +
    f.finding +
    (f.note ? `。${f.note}` : "");
  const note = prior && touched.has(f.id) ? `${prior}；${line}` : line;

  d.source = {
    ref: f.source ?? "",
    checkedOn,
    ...(isWrongOpen ? { status: "wrong" as const } : {}),
    note,
  };
  sourced++;
  touched.add(f.id);

  if (!DRY) await writeFile(file, `${JSON.stringify(d, null, 2)}\n`);
  const mark = f.verdict === "ok" ? "ok   " : f.resolution === "fixed" ? "fixed" : "wrong";
  console.log(`  ${mark} ${f.id.padEnd(10)} ${f.patch ? JSON.stringify(f.patch) : ""}`);
}

console.log(
  `\n${round.round}：写入 ${sourced} 条 source 留痕，改动字段 ${changed} 处${DRY ? "（dry-run，什么都没真写）" : ""}`,
);
console.log(DRY ? "去掉 --dry-run 真写，然后跑 npm run verify:report 落地 issue 与台账" : "接着跑 npm run verify:report 落地 issue 与台账");
