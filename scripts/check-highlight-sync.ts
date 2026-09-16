/**
 * 逐句高亮 × 语音：拿**真实缓存的 word boundary** 跑一遍生产用的时间映射，断言对得上（2026-09-17 立）。
 *
 * 背景（用户报的问题）：吉朗的攻略播报时「语音已经念到后面了，文字高亮还停在前面」。
 * 查出来是两件事叠在一起：
 *   ① `StructuredLesson` 自带一份缺了小数点保护的切句实现，与高亮用的 `lib/sentences.ts` 不是同一套 ——
 *      全库 2,650 段城市攻略（20.5%）与 517 段地形讲解两边句数不同，索引整篇错位（已由 check:sentence-split 守住）；
 *   ② 中文正文一句常有 80–100 字、念一句 15–20 秒，而高亮按句号切，一块要停十几秒 —— 看起来就是「卡住」。
 *
 * 这个脚本守的是**第二件事之后的那一层**：切分改细之后，每块高亮映射到的时间区间
 * 必须仍然单调、不重叠、覆盖整段音频，且没有哪一块长到让人觉得卡。
 * 它只读 `.tts-cache/` 里已有的缓存，不联网、不合成（缓存里没有的段直接跳过）。
 */
import { readCache, cacheKeyFor, normalizeText, DEFAULT_VOICE } from "@/lib/tts-cache";
import { buildSentenceTimeMap } from "@/lib/sentence-timing";
import { splitForHighlight } from "@/lib/sentences";
import { stripEmojis } from "@/lib/strip-emojis";
import { CITY_REGISTRY } from "@/lib/places-registry";
import { resolveTravelGuide, travelGuideToSections } from "@/lib/travel-lesson";
import { TERRAIN_REGISTRY } from "@/lib/terrain-registry";
import { resolveLesson } from "@/lib/terrain-lesson";
import { lessonSections } from "@/lib/lesson";

const EN_VOICE = process.env.TTS_VOICE_EN ?? "en-US-AvaNeural";
/** 一块高亮最多停多久才不显得卡（秒） */
const MAX_BLOCK_SEC = 13;
/** 时间映射至少要覆盖音频的这么多比例 */
const MIN_COVERAGE = 0.9;
/** 每种内容各抽多少个条目（够看出问题，又不至于跑很久） */
const SAMPLE = Number(process.env.SYNC_SAMPLE ?? 40);

interface Problem { where: string; what: string }
const problems: Problem[] = [];
let checkedSections = 0;
let cacheMisses = 0;
let maxBlockSec = 0;
let maxBlockWhere = "";
const coverages: number[] = [];

async function wbFor(text: string, lang: "zh-CN" | "en-US") {
  const voice = lang === "zh-CN" ? DEFAULT_VOICE : EN_VOICE;
  const cached = await readCache(cacheKeyFor(voice, normalizeText(text)));
  return cached?.wordBoundaries ?? null;
}

async function checkSection(where: string, text: string, lang: "zh-CN" | "en-US") {
  const clean = stripEmojis(text);
  if (!clean.trim()) return;
  const wb = await wbFor(text, lang);
  if (!wb || wb.length === 0) { cacheMisses++; return; }
  checkedSections++;

  const map = buildSentenceTimeMap([{ key: "s", text: clean }], wb, splitForHighlight);
  const blocks = splitForHighlight(clean);
  if (map.length !== blocks.length) {
    problems.push({ where, what: `时间映射 ${map.length} 段 ≠ 高亮块 ${blocks.length} 段` });
    return;
  }
  const audioEnd = wb[wb.length - 1]!.end;

  let prevEnd = -Infinity;
  for (let i = 0; i < map.length; i++) {
    const r = map[i]!;
    if (r.endSec < r.startSec) problems.push({ where, what: `第 ${i + 1} 块时间倒挂 ${r.startSec.toFixed(1)}–${r.endSec.toFixed(1)}s` });
    if (r.startSec < prevEnd - 0.01) problems.push({ where, what: `第 ${i + 1} 块与上一块重叠` });
    prevEnd = r.endSec;
    const dur = r.endSec - r.startSec;
    if (dur > maxBlockSec) { maxBlockSec = dur; maxBlockWhere = `${where} 第 ${i + 1} 块`; }
    if (dur > MAX_BLOCK_SEC) {
      problems.push({ where, what: `第 ${i + 1} 块要停 ${dur.toFixed(1)} 秒（上限 ${MAX_BLOCK_SEC}s）：${blocks[i]!.slice(0, 28)}…` });
    }
  }
  const coverage = audioEnd > 0 ? prevEnd / audioEnd : 1;
  coverages.push(coverage);
  if (coverage < MIN_COVERAGE) {
    problems.push({ where, what: `只覆盖了音频的 ${(coverage * 100).toFixed(0)}%（末块 ${prevEnd.toFixed(1)}s / 音频 ${audioEnd.toFixed(1)}s）` });
  }
}

for (const lang of ["zh-CN", "en-US"] as const) {
  for (const c of CITY_REGISTRY.slice(0, SAMPLE)) {
    const g = await resolveTravelGuide(c.id, lang);
    if (!g) continue;
    for (const s of travelGuideToSections(g, lang)) await checkSection(`travel/${c.id}/${s.key} [${lang}]`, s.text, lang);
  }
  for (const t of TERRAIN_REGISTRY.slice(0, SAMPLE)) {
    const l = await resolveLesson(t.id, lang);
    if (!l) continue;
    for (const s of lessonSections(l)) await checkSection(`terrain/${t.id}/${s.key} [${lang}]`, s.text, lang);
  }
}

const avgCoverage = coverages.length ? coverages.reduce((a, b) => a + b, 0) / coverages.length : 0;
console.log(
  `逐句高亮 × 真实 word boundary：核对了 ${checkedSections} 段（缓存里没有、跳过 ${cacheMisses} 段）\n` +
  `  平均覆盖音频 ${(avgCoverage * 100).toFixed(1)}%；最长的一块高亮 ${maxBlockSec.toFixed(1)} 秒（${maxBlockWhere}）`,
);

if (checkedSections === 0) {
  console.log("⚠️ 一段缓存都没命中 —— 跑 npm run warm:tts 之后这个检查才有意义（本次不判失败）");
  process.exit(0);
}

if (problems.length > 0) {
  console.error(`\n✗ ${problems.length} 处对不上：`);
  for (const p of problems.slice(0, 20)) console.error(`    ${p.where}：${p.what}`);
  if (problems.length > 20) console.error(`    …还有 ${problems.length - 20} 处`);
  process.exit(1);
}
console.log("✓ 单调、不重叠、覆盖完整，没有超时长的高亮块");
