/**
 * 把一轮核实结果落地：开 issue / 关 issue / 记台账
 *   运行: npm run verify:report -- <findings.json> [--dry-run]
 *
 * 为什么要有这个脚本，而不是在 skill 里写「记得去开个 issue」：
 * 靠嘱咐是记不住的，而且人工开 issue 一定会重复开、忘记关、正文格式各写各的。
 * 这里把三件事做成机械动作：
 *
 *   1. **没当场修掉的** → 开一个 issue（正文里埋 <!-- verify-key: ... --> 做去重键，
 *      已经开过的就不再开，只补一条评论）
 *   2. **当场修掉的**   → 如果之前为它开过 issue，评论写清怎么修的 + 来源，然后关掉；
 *      从没开过 issue 的不开（当场修完还开一个再关，只是噪音）
 *   3. **每一轮**       → 在对应的总 issue 下留一条进度评论，并往
 *      docs/verification-ledger.md 追加一行
 *
 * findings.json 的格式见 .claude/skills/verify-content/SKILL.md。
 */

import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";

const LEDGER = "docs/verification-ledger.md";

interface Finding {
  /** 去重键，建议 <kind>/<id>/<字段>。同一个键只会有一个 issue */
  key: string;
  kind: string;
  id: string;
  field: string;
  verdict: "ok" | "wrong" | "unknown";
  /** 原文里被核的那句话或那个值 */
  claim: string;
  /** 查到的事实 */
  finding: string;
  /** 来源 URL —— unknown 之外必须有 */
  source?: string;
  /** 这一轮有没有处理掉 */
  resolution: "fixed" | "open" | "blocked";
  /** 怎么改的 / 为什么没改 */
  note?: string;
  /** 归到 docs/known-errors.md 的哪一类 */
  errorClass?: string;
}

interface Round {
  /** 这一轮的名字，会写进台账 */
  round: string;
  scope: string;
  /** 这一类敞口的总 issue 号（docs/known-errors.md 顶部索引表里的） */
  umbrella?: number;
  findings: Finding[];
}

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const path = args.find((a) => !a.startsWith("--"));
if (!path) {
  console.error("用法: npm run verify:report -- <findings.json> [--dry-run]");
  process.exit(2);
}

const round: Round = JSON.parse(await readFile(path, "utf8"));

const gh = (a: string[]): string => {
  if (DRY) {
    console.log(`  [dry-run] gh ${a.join(" ")}`.slice(0, 160));
    return "";
  }
  return execFileSync("gh", a, { encoding: "utf8", maxBuffer: 1 << 24 });
};

/** 已经为这个 key 开过的 issue（含已关闭的，避免重复开） */
function findIssue(key: string): { number: number; state: string } | null {
  const out = execFileSync(
    "gh",
    ["issue", "list", "--state", "all", "--label", "data-error", "--limit", "200",
     "--search", key, "--json", "number,state,body"],
    { encoding: "utf8", maxBuffer: 1 << 24 },
  );
  const marker = `<!-- verify-key: ${key} -->`;
  for (const it of JSON.parse(out) as { number: number; state: string; body: string }[]) {
    if (it.body?.includes(marker)) return { number: it.number, state: it.state };
  }
  return null;
}

const body = (f: Finding) =>
  [
    `<!-- verify-key: ${f.key} -->`,
    "",
    `归类：\`docs/known-errors.md\` **${f.errorClass ?? "未归类"}**`,
    "",
    `| | |`,
    `|---|---|`,
    `| 条目 | \`${f.kind}/${f.id}\` · ${f.field} |`,
    `| 记录的是 | ${f.claim} |`,
    `| 查到的是 | ${f.finding} |`,
    `| 结论 | \`${f.verdict}\` |`,
    `| 来源 | ${f.source ?? "**查不到可靠来源**"} |`,
    "",
    f.note ? `## 说明\n\n${f.note}\n` : "",
    "## 为什么还开着",
    "",
    f.resolution === "blocked"
      ? "查明有误，但**没找到可靠的替代值**，所以只能先把错的挡住、不显示。找到替代值后改掉并关闭。"
      : "本轮没有处理，留待后续。",
    "",
    `_由 \`npm run verify:report\` 自动开出（${round.round}）_`,
  ].join("\n");

let created = 0;
let closed = 0;
let skipped = 0;

for (const f of round.findings) {
  if (f.verdict === "ok" && f.resolution === "fixed") {
    skipped++;
    continue;
  }
  const existing = findIssue(f.key);

  if (f.resolution === "fixed") {
    if (existing && existing.state === "OPEN") {
      gh(["issue", "comment", String(existing.number), "--body",
        `已修正（${round.round}）。\n\n- 改成：${f.finding}\n- 来源：${f.source ?? "—"}\n${f.note ? `- 说明：${f.note}\n` : ""}`]);
      gh(["issue", "close", String(existing.number), "--reason", "completed"]);
      closed++;
      console.log(`  关闭 #${existing.number}  ${f.key}`);
    } else {
      // 当场修完、之前也没开过 issue —— 不开。台账里有记录就够了。
      skipped++;
    }
    continue;
  }

  if (existing) {
    if (existing.state === "OPEN") {
      gh(["issue", "comment", String(existing.number), "--body",
        `${round.round} 复核：仍未解决。\n\n- 查到：${f.finding}\n- 来源：${f.source ?? "—"}`]);
      console.log(`  已存在 #${existing.number}（补评论）  ${f.key}`);
    } else {
      gh(["issue", "reopen", String(existing.number)]);
      gh(["issue", "comment", String(existing.number), "--body",
        `${round.round} 复核发现问题重现或未真正解决。\n\n- 查到：${f.finding}\n- 来源：${f.source ?? "—"}`]);
      console.log(`  重开 #${existing.number}  ${f.key}`);
    }
    continue;
  }

  const title = `[${f.errorClass ?? "data"}] ${f.kind}/${f.id} · ${f.field}：${f.claim.slice(0, 40)}`;
  gh(["issue", "create", "--label", "data-error", "--title", title, "--body", body(f)]);
  created++;
  console.log(`  新开  ${f.key}`);
}

// ── 总 issue 下的进度评论 ────────────────────────────────────────────────
const n = round.findings.length;
const by = (v: string) => round.findings.filter((f) => f.verdict === v).length;
const summary =
  `**${round.round}**\n\n` +
  `范围：${round.scope} · 核了 ${n} 条 · ok ${by("ok")} / wrong ${by("wrong")} / unknown ${by("unknown")}\n\n` +
  `本轮当场修掉 ${round.findings.filter((f) => f.resolution === "fixed").length} 条，` +
  `新开 ${created} 个 issue，关掉 ${closed} 个。\n\n` +
  `明细见 \`${LEDGER}\`。`;

if (round.umbrella) {
  gh(["issue", "comment", String(round.umbrella), "--body", summary]);
  console.log(`  总 issue #${round.umbrella} 已留进度评论`);
}

// ── 台账 ────────────────────────────────────────────────────────────────
const head = execFileSync("git", ["rev-parse", "--short", "HEAD"], { encoding: "utf8" }).trim();
const today = new Date().toISOString().slice(0, 10);
let ledger = await readFile(LEDGER, "utf8");
const row =
  `| ${today} | ${round.scope}（${round.round}） | ${n} | ${by("ok")} / ${by("wrong")} / ${by("unknown")} | ` +
  `当场修 ${round.findings.filter((f) => f.resolution === "fixed").length} 条；新开 issue ${created}、关闭 ${closed} |`;
ledger = ledger.replace(/^(\| 日期 \| 范围 .*\n\|[-| ]+\|\n)/m, `$1${row}\n`);
ledger = ledger.replace(/^lastVerifiedCommit: .*$/m, `lastVerifiedCommit: ${head}`);
if (!DRY) await writeFile(LEDGER, ledger);

console.log(
  `\n${round.round}：核 ${n} 条（ok ${by("ok")} / wrong ${by("wrong")} / unknown ${by("unknown")}）` +
    `，新开 issue ${created}、关闭 ${closed}、无需开 ${skipped}${DRY ? "（dry-run，什么都没真做）" : ""}`,
);
