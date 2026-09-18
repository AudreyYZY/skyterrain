/**
 * 「这一批动了哪些条目」—— 从 git diff 反算条目 id（2026-09-18 立）。
 *
 * 立这个模块的原因，是两道刚立起来的防线都**看不见新内容**：
 *   · `check:highlight-sync` 抽的是 `CITY_REGISTRY.slice(0, 40)` —— 永远是第一个国家（中国）的前 40 座城，
 *     而新城是往文件末尾追加的，它一次都没被检查过；
 *   · `check:tts` 的覆盖率是**全库平均**且不判失败 —— 一批全新条目 0% 命中，藏在 99% 的平均数里看不出来。
 * 于是「加完内容」与「检查内容」之间一直有个缺口：用户点开刚加的城市，撞上的正是这个缺口
 * （高亮错位、机械音）。补法不是再加一道全库检查（跑不动），而是**把检查范围对准这一批**。
 *
 * 判据：git diff 里**新文件的行号**落在哪个条目块里，那个条目就算这批动过。
 * 只按「新增的 id 行」找会漏掉「只改了正文一行」的条目，所以这里按行号映射整块。
 */
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { basename } from "node:path";

export type EntryKind = "terrain" | "city" | "route";

export interface ChangedEntries {
  terrain: Set<string>;
  city: Set<string>;
  route: Set<string>;
  /** 动过的内容文件（相对路径） */
  files: string[];
  /** 比较基准 */
  base: string;
}

function git(args: string[]): string {
  return execFileSync("git", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
}

/** 默认基准：当前分支与 main 的分叉点；分叉点取不到（就在 main 上）时退回 HEAD~1 */
export function defaultBase(): string {
  for (const candidate of ["origin/main", "main"]) {
    try {
      const merged = git(["merge-base", "HEAD", candidate]).trim();
      const head = git(["rev-parse", "HEAD"]).trim();
      if (merged && merged !== head) return merged;
    } catch {
      /* 没有这个 ref，试下一个 */
    }
  }
  try {
    return git(["rev-parse", "HEAD~1"]).trim();
  } catch {
    return git(["rev-parse", "HEAD"]).trim();
  }
}

/** 变更文件 + 每个文件里「新文件侧」被加/改的行号 */
function changedLines(base: string, paths: string[]): Map<string, Set<number>> {
  const out = new Map<string, Set<number>>();
  // 不给第二个 ref：base 与**工作区**比，所以还没 commit 的改动也算在内。
  let diff = "";
  try {
    diff = git(["diff", "-U0", "--no-color", base, "--", ...paths]);
  } catch {
    return out;
  }
  let file = "";
  for (const line of diff.split("\n")) {
    const plus = /^\+\+\+ b\/(.+)$/.exec(line);
    if (plus) {
      file = plus[1]!;
      continue;
    }
    const hunk = /^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/.exec(line);
    if (hunk && file) {
      const start = Number(hunk[1]);
      const count = hunk[2] === undefined ? 1 : Number(hunk[2]);
      const set = out.get(file) ?? new Set<number>();
      out.set(file, set);
      for (let i = 0; i < count; i++) set.add(start + i);
    }
  }
  // 全新文件（新开一个国家目录）还没进索引，diff 看不到 —— 单独捞出来，整份算变更
  try {
    const untracked = git(["ls-files", "--others", "--exclude-standard", "--", ...paths])
      .split("\n")
      .filter(Boolean);
    for (const f of untracked) {
      if (!existsSync(f)) continue;
      const lines = readFileSync(f, "utf8").split("\n").length;
      const set = new Set<number>();
      for (let i = 1; i <= lines; i++) set.add(i);
      out.set(f, set);
    }
  } catch {
    /* ignore */
  }
  return out;
}

/**
 * 条目块的行范围。两种文件形状：
 *   · 数组式（cities.ts / registry.ts）：`{ id: "xxx", …` 开一块
 *   · 键值式（travel.zh.ts / terrain.en.ts / pois.ts / routes.ts）：`  xxx: {` / `  xxx: [` 开一块
 * 一块从它的起始行延伸到下一块的起始行之前。
 */
function entryRanges(src: string): { id: string; from: number; to: number }[] {
  const lines = src.split("\n");
  const starts: { id: string; from: number }[] = [];
  lines.forEach((line, i) => {
    const arrayShape = /^\s*\{?\s*id:\s*"([A-Za-z0-9_-]+)"/.exec(line);
    if (arrayShape) {
      starts.push({ id: arrayShape[1]!, from: i + 1 });
      return;
    }
    // 只认缩进 2 格的顶层键，避免把嵌套字段当成条目
    const keyShape = /^ {2}"?([a-z][A-Za-z0-9_-]*)"?:\s*[[{]/.exec(line);
    if (keyShape) starts.push({ id: keyShape[1]!, from: i + 1 });
  });
  return starts.map((s, i) => ({
    id: s.id,
    from: s.from,
    to: i + 1 < starts.length ? starts[i + 1]!.from - 1 : lines.length,
  }));
}

const KIND_BY_FILE: { test: (f: string) => boolean; kind: EntryKind }[] = [
  { test: (f) => /\/(terrain\.(zh|en)|registry)\.ts$/.test(f), kind: "terrain" },
  { test: (f) => /\/(travel\.(zh|en)|cities|pois)\.ts$/.test(f), kind: "city" },
  { test: (f) => /\/routes\.ts$/.test(f), kind: "route" },
];

export function changedEntries(base = defaultBase()): ChangedEntries {
  const result: ChangedEntries = {
    terrain: new Set(),
    city: new Set(),
    route: new Set(),
    files: [],
    base,
  };
  const byFile = changedLines(base, ["lib/content", "data/routes"]);
  for (const [file, lines] of byFile) {
    result.files.push(file);
    // 航线的结构化数据一个文件就是一条航线
    if (/^data\/routes\/.+\.json$/.test(file)) {
      result.route.add(basename(file, ".json"));
      continue;
    }
    const kind = KIND_BY_FILE.find((k) => k.test(file))?.kind;
    if (!kind) continue;
    if (!existsSync(file)) continue;
    const ranges = entryRanges(readFileSync(file, "utf8"));
    for (const r of ranges) {
      for (const ln of lines) {
        if (ln >= r.from && ln <= r.to) {
          result[kind].add(r.id);
          break;
        }
      }
    }
  }
  result.files.sort();
  return result;
}

/** `--ids=a,b,c` / `--base=<ref>` / `--all` 的统一解析 */
export function parseScopeArgs(argv: string[]): { ids: string[] | null; base?: string; all: boolean } {
  const ids: string[] = [];
  let base: string | undefined;
  let all = false;
  for (const a of argv) {
    const m = /^--ids=(.+)$/.exec(a);
    if (m) ids.push(...m[1]!.split(",").map((s) => s.trim()).filter(Boolean));
    const b = /^--base=(.+)$/.exec(a);
    if (b) base = b[1];
    if (a === "--all") all = true;
  }
  return { ids: ids.length > 0 ? ids : null, base, all };
}
