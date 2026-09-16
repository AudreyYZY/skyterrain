/**
 * 切句实现只许有一份（2026-09-17 立）。
 *
 * 背景：`components/StructuredLesson.tsx` 曾自带一份 `splitSentences`，正则是
 * `/(?<=[。！？.!?])/g` —— 比 `lib/sentences.ts` 那份少了「小数点不算句号」的保护。
 * 于是**面板渲染出来的句子**和**逐句高亮算出来的句子**不是同一套：正文里只要出现
 * 「1300.2 米」「3.5 小时」这样的数，面板就多切一句，此后整篇的全局句子索引全部错位，
 * 用户看到的是「语音已经念到后面了，高亮还停在前面」。
 * 实测全库 12,908 段城市攻略里有 2,650 段（20.5%）、16,224 段地形讲解里有 517 段两边对不上。
 *
 * 这一类错误**没有任何现成脚本看得见**：类型能过、测试能过、两份实现各自都「对」，
 * 错的是它们不一致。防线只能是「不许有第二份」。
 *
 * 本脚本扫 components/ 与 lib/ 下的源码，凡是出现「按句末标点切分」形状的正则、
 * 又不在 lib/sentences.ts 里的，直接失败。
 */
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["components", "lib", "app", "hooks"];
const ALLOWED = new Set(["lib/sentences.ts"]);

/** 「句末标点集合」形状的正则：字符类里同时含中文句号与问号/叹号 */
const SPLITTER_SHAPE = /\[[^\]]*。[^\]]*[！？!?][^\]]*\]/;

async function* walk(dir: string): AsyncGenerator<string> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === ".next") continue;
      yield* walk(p);
    } else if (/\.(ts|tsx)$/.test(e.name)) {
      yield p;
    }
  }
}

const offenders: string[] = [];
let scanned = 0;

for (const dir of SCAN_DIRS) {
  for await (const file of walk(join(ROOT, dir))) {
    const rel = relative(ROOT, file);
    scanned++;
    if (ALLOWED.has(rel)) continue;
    const src = await readFile(file, "utf8");
    src.split("\n").forEach((line, i) => {
      // 只看代码里的正则字面量，注释里提到不算
      const trimmed = line.trim();
      if (trimmed.startsWith("*") || trimmed.startsWith("//")) return;
      if (!line.includes("split(")) return;
      if (SPLITTER_SHAPE.test(line)) {
        offenders.push(`${rel}:${i + 1}  ${trimmed.slice(0, 110)}`);
      }
    });
  }
}

console.log(`切句实现唯一性：扫了 ${scanned} 个源文件（${SCAN_DIRS.join(" / ")}）`);

if (offenders.length > 0) {
  console.error(
    `\n✗ ${offenders.length} 处在 lib/sentences.ts 之外自己按句末标点切句：\n` +
      offenders.map((o) => `    ${o}`).join("\n") +
      `\n\n面板渲染与逐句高亮必须用**同一个**切分函数，否则全局句子索引会错位、` +
      `高亮跟不上语音。请改用 lib/sentences.ts 的 splitSentences（航线解说）` +
      `或 splitForHighlight（讲解 / 攻略 / 面板渲染）。\n`,
  );
  process.exit(1);
}

console.log("✓ 只有 lib/sentences.ts 一份");
