/**
 * 发布门禁总编排（2026-09-18 立）—— 一条命令跑完「加完内容之后该跑的全部检查」。
 *   npm run gate                 # 全部四段
 *   npm run gate -- --stage=1,2  # 只跑前两段（写内容途中反复跑）
 *   npm run gate -- --base=HEAD~2
 *   npm run gate -- --skip-e2e   # 不跑浏览器冒烟（只在明确只改了内容文本时用）
 *
 * 立这个脚本的原因：该跑什么、什么顺序，此前只存在于会话记忆与 CLAUDE.md 的散落段落里。
 * 于是每开一个新会话，用户都得重新交代一遍「先测再提交、CI 要绿」。
 * 现在流程是**可执行的**：`docs/content-pipeline.md` 是给人读的同一份东西，这里是机器版。
 *
 * 分段的意义在于**失败越早越便宜**：
 *   ① 静态与自洽（秒级）—— 类型、生成文件、注册表、棘轮
 *   ② 批次（十几秒）—— 只看这一批动过的条目：预热、高亮同步、留痕
 *   ③ 内容交叉（分钟级）—— 中英数字、方位、距离、机场、待办；多为报告项
 *   ④ 构建与浏览器（数分钟）—— build + Playwright，等价于 CI
 * 报告项（report-only）永远不拦截，但会在末尾汇总，**要人看一眼再决定**。
 */
import { spawnSync } from "node:child_process";

interface Step {
  stage: 1 | 2 | 3 | 4;
  name: string;
  cmd: string[];
  /** true = 只报告，不拦截（这些脚本自己永远 exit 0，这里记录意图） */
  report?: boolean;
  /** 说明为什么有这一步，失败时打出来 */
  why: string;
}

const { argv } = process;
const arg = (k: string) => {
  const hit = argv.find((a) => a.startsWith(`--${k}=`));
  return hit ? hit.slice(k.length + 3) : undefined;
};
const has = (k: string) => argv.includes(`--${k}`);

const baseArg = arg("base");
const stages = new Set(
  (arg("stage") ?? "1,2,3,4").split(",").map((s) => Number(s.trim())).filter((n) => n >= 1 && n <= 4),
);
const skipE2e = has("skip-e2e");

const batchArgs = baseArg ? [`--base=${baseArg}`] : [];
/**
 * 报告类脚本走**收窄模式**（#310）：它们是全库扫描、输出几百行、永远 exit 0，
 * 存量会把新加的那几行淹没 —— 等于新内容实际上没人看。
 * 收窄之后 check:airports 从 34 条 ⚑ 降到这一批自己的 1 条（kogon，已知的设计内假阳性）。
 * 想看全库时单独跑 `npm run check:airports`（不带参数 = 全库，行为一字未改）。
 * check:pending 故意不收窄 —— 它是「承诺过的年份到了没有」的常驻清单，按定义要看存量。
 */
const narrowArgs = baseArg ? [`--base=${baseArg}`] : ["--only-new"];

const STEPS: Step[] = [
  // ── ① 静态与自洽 ───────────────────────────────────────────────
  { stage: 1, name: "check:content", cmd: ["npm", "run", "check:content"], why: "生成文件没重跑 / 条目放错国家 / id 跨国重复" },
  { stage: 1, name: "check:sentence-split", cmd: ["npm", "run", "check:sentence-split"], why: "切句实现出现了第二份 —— 面板与高亮会错位" },
  { stage: 1, name: "typecheck", cmd: ["npm", "run", "typecheck"], why: "类型" },
  { stage: 1, name: "lint", cmd: ["npm", "run", "lint"], why: "lint" },
  { stage: 1, name: "check:regions", cmd: ["npm", "run", "check:regions"], why: "regionId / country 完整性与计数" },
  { stage: 1, name: "check:camera", cmd: ["npm", "run", "check:camera"], why: "相机推导" },
  { stage: 1, name: "check:places", cmd: ["npm", "run", "check:places"], why: "城市坐标 / IATA / 来源 / 双语内容齐全" },
  { stage: 1, name: "check:routes", cmd: ["npm", "run", "check:routes"], why: "航班留痕、解说时长、承运人与机型一致" },
  { stage: 1, name: "check:claims", cmd: ["npm", "run", "check:claims"], why: "棘轮：人口缺年份 / 主观最高级 / 排名缺口径 —— 只许降不许升" },
  { stage: 1, name: "check:flight", cmd: ["npm", "run", "check:flight"], why: "航线运动模型（画面抖 / 糊的根因就在这里）" },
  { stage: 1, name: "check:anchors", cmd: ["npm", "run", "check:anchors"], why: "改过解说文字却没重跑 gen:anchors" },

  // ── ② 批次（只看这一批） ─────────────────────────────────────────
  { stage: 2, name: "check:batch", cmd: ["npm", "run", "check:batch", "--", ...batchArgs], why: "这一批的预热、逐句高亮、来源留痕 —— 用户能直接感知的三项" },

  // ── ③ 内容交叉 ─────────────────────────────────────────────────
  { stage: 3, name: "check:zhen", cmd: ["npm", "run", "check:zhen"], why: "中英两侧同一字段的数字对不上（单边改动的唯一防线）" },
  { stage: 3, name: "check:distance", cmd: ["npm", "run", "check:distance"], why: "航线声称里程 vs 大圆距离" },
  { stage: 3, name: "check:layout-bearings", cmd: ["npm", "run", "check:layout-bearings", "--", ...narrowArgs], why: "layout 段方位词与 POI 坐标", report: true },
  { stage: 3, name: "check:bearings", cmd: ["npm", "run", "check:bearings", "--", ...narrowArgs], why: "带距离的方位句与 POI 坐标", report: true },
  { stage: 3, name: "check:airports", cmd: ["npm", "run", "check:airports", "--", ...narrowArgs], why: "「没有定期航班」与 OurAirports 对照", report: true },
  { stage: 3, name: "check:rvt", cmd: ["npm", "run", "check:rvt"], why: "航线解说 vs 地形条目的名次冲突", report: true },
  { stage: 3, name: "check:pending", cmd: ["npm", "run", "check:pending"], why: "「在建 / 计划 X 年通车」这类句子里承诺的年份已经到了", report: true },

  // ── ④ 构建与浏览器（等价 CI） ────────────────────────────────────
  { stage: 4, name: "build", cmd: ["npm", "run", "build"], why: "CI 的第二步，本地先过" },
  { stage: 4, name: "test:e2e", cmd: ["npm", "run", "test:e2e"], why: "Playwright 冒烟：讲解懒加载 / 中英切换 / 攻略 / 航线镜头" },
];

const STAGE_NAME: Record<number, string> = {
  1: "静态与自洽",
  2: "批次（只看这一批动过的条目）",
  3: "内容交叉",
  4: "构建与浏览器（等价 CI）",
};

interface Result {
  step: Step;
  ok: boolean;
  ms: number;
  skipped?: boolean;
}
const results: Result[] = [];
let blocked: Result | null = null;

console.log("═".repeat(70));
console.log("发布门禁 —— docs/content-pipeline.md 的机器版");
console.log(`  段：${[...stages].join(" ")}${skipE2e ? "（--skip-e2e）" : ""}${baseArg ? `  基准 ${baseArg}` : ""}`);
console.log("═".repeat(70));

for (const stage of [1, 2, 3, 4] as const) {
  if (!stages.has(stage)) continue;
  const steps = STEPS.filter((s) => s.stage === stage && !(skipE2e && s.name === "test:e2e"));
  if (steps.length === 0) continue;
  console.log(`\n【第 ${stage} 段】${STAGE_NAME[stage]}  ${steps.length} 项`);
  for (const step of steps) {
    const t0 = Date.now();
    process.stdout.write(`  ▶ ${step.name} …\n`);
    const r = spawnSync(step.cmd[0]!, step.cmd.slice(1), { stdio: "inherit", encoding: "utf8" });
    const ms = Date.now() - t0;
    const ok = r.status === 0;
    results.push({ step, ok, ms });
    console.log(`  ${ok ? "✓" : "✗"} ${step.name}（${(ms / 1000).toFixed(0)}s）`);
    if (!ok && !step.report) {
      blocked = { step, ok, ms };
      break;
    }
  }
  if (blocked) break;
}

console.log("\n" + "═".repeat(70));
const pass = results.filter((r) => r.ok).length;
const failReport = results.filter((r) => !r.ok && r.step.report);
console.log(`门禁汇总：${pass}/${results.length} 项通过，用时 ${(results.reduce((a, r) => a + r.ms, 0) / 1000 / 60).toFixed(1)} 分钟`);
if (failReport.length > 0) {
  console.log(`\n⚑ ${failReport.length} 项报告类检查有输出（不拦截，但要人看一眼再决定）：`);
  for (const r of failReport) console.log(`    · ${r.step.name} —— ${r.step.why}`);
}

if (blocked) {
  console.error(`\n✗ 门禁在第 ${blocked.step.stage} 段的 ${blocked.step.name} 停下。`);
  console.error(`    这一项守的是：${blocked.step.why}`);
  console.error(`    修完之后重跑：npm run gate -- --stage=${blocked.step.stage}${baseArg ? `,--base=${baseArg}` : ""}`);
  console.error("    **不要带着这个失败提交** —— CI 跑的是同一套，提交只会把失败搬到 PR 上。\n");
  process.exit(1);
}

console.log("\n✓ 门禁通过。接下来按 docs/content-pipeline.md：");
console.log("    G5 内容核实（/verify-content 或 content-verifier 子代理）→ 应用 findings → 重跑第 1–3 段");
console.log("    G6 代码审查（/code-review）→ G7 提交并推送 → G8 盯 CI 到绿 → G9 记账");
