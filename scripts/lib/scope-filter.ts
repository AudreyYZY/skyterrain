/**
 * 「只看这一批」的通用收窄器（2026-09-18 立，配合 #310）。
 *
 * 报告类脚本（check:bearings / check:layout-bearings / check:airports / check:pending / check:rvt）
 * 是全库扫描、输出几百行、永远 exit 0 —— 存量很大，所以**新加的那几行会被存量淹没**，
 * 等于新内容实际上没人看。这与 G1/G2 是同一个病：检查跑了，但没对准这一批。
 *
 * 用法（每个脚本加两行）：
 *   const scope = makeScopeFilter(process.argv.slice(2));
 *   console.log(scope.label);
 *   … for (const c of CITY_REGISTRY) { if (!scope.inScope(c.id)) continue; … }
 *
 * 不给参数时 `active === false`、`inScope()` 恒为 true —— 全库行为**一字不改**，
 * 所以既有的用法（人工全库回扫、基线比对）不受影响。
 */
import { changedEntries, defaultBase, parseScopeArgs } from "./changed-entries.ts";

export interface ScopeFilter {
  /** 这个 id 要不要看 */
  inScope: (id: string) => boolean;
  /** 打在输出开头的一行，说明这次实际覆盖了什么 —— 「检查要能说出自己查了多少个对象」 */
  label: string;
  /** 有没有收窄（false = 全库） */
  active: boolean;
  /** 收窄时的 id 集合（全库时为 null） */
  ids: Set<string> | null;
}

export function makeScopeFilter(argv: string[]): ScopeFilter {
  const { ids: explicit, base: baseArg } = parseScopeArgs(argv);
  const wantsDiff = baseArg !== undefined || argv.includes("--only-new");

  if (explicit) {
    const set = new Set(explicit);
    return {
      inScope: (id) => set.has(id),
      label: `范围：命令行指定的 ${set.size} 个条目（${[...set].slice(0, 6).join(", ")}${set.size > 6 ? " …" : ""}）`,
      active: true,
      ids: set,
    };
  }
  if (wantsDiff) {
    const base = baseArg ?? defaultBase();
    const changed = changedEntries(base);
    const set = new Set([...changed.terrain, ...changed.city, ...changed.route]);
    return {
      inScope: (id) => set.has(id),
      label:
        `范围：${base.slice(0, 8)} → 工作区动过的 ${set.size} 个条目` +
        (set.size > 0 ? `（${[...set].slice(0, 8).join(", ")}${set.size > 8 ? " …" : ""}）` : "（这一批没动内容条目）"),
      active: true,
      ids: set,
    };
  }
  return { inScope: () => true, label: "范围：全库", active: false, ids: null };
}
