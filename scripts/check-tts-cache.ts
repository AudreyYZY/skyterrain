/**
 * 语音缓存覆盖率自检（不联网、不合成，秒级返回）
 *   运行: npm run check:tts
 *
 * 报告:
 *   - 界面上能触发的每一段播报文本共有多少段（地形讲解 / 城市攻略 / 航线解说 × 中英）
 *   - 其中多少段已经在 .tts-cache 里（命中即 0 秒出声，不会回退浏览器 TTS）
 *   - 按已缓存样本推算全量缓存体积
 *   - 「超时高风险」段落：长度落在 Edge TTS 13s 超时线附近的，命中一次就会让
 *     lib/section-narration.ts 的 degraded 开关把整篇剩余段落降级成浏览器语音
 *
 * 硬失败只有一种：manifest 有缺口（某地形/城市解析不出讲解内容）。
 * 覆盖率不做硬门槛——预热是长任务，不该卡住日常 npm run check。
 */

import { statSync } from "node:fs";
import { cacheKeyFor, cachePathFor, normalizeText, readCache } from "../lib/tts-cache.ts";
import { SPEECH_CHARS_PER_SEC } from "../lib/speech.ts";
import { collectTtsSegments, type TtsSegment } from "../lib/tts-manifest.ts";

/** 英文段落超过这个长度时，Edge TTS 合成耗时通常逼近 13s 超时线 */
const EN_RISK_CHARS = 600;
/** 中文段落合成速度快得多，风险线相应放宽 */
const ZH_RISK_CHARS = 400;

const riskChars = (s: TtsSegment) => (s.lang === "en-US" ? EN_RISK_CHARS : ZH_RISK_CHARS);

const { segments, gaps } = await collectTtsSegments();

interface Bucket {
  total: number;
  cached: number;
  chars: number;
  cachedBytes: number;
  cachedChars: number;
  risky: number;
}
const newBucket = (): Bucket => ({
  total: 0,
  cached: 0,
  chars: 0,
  cachedBytes: 0,
  cachedChars: 0,
  risky: 0,
});

const byKey = new Map<string, Bucket>();
const overall = newBucket();
const riskyExamples: TtsSegment[] = [];
/** 已缓存的样本，用于反算实际语速（每语言最多取 120 段，够稳且够快） */
const cachedSamples = new Map<string, TtsSegment[]>();

for (const s of segments) {
  const text = normalizeText(s.text);
  const path = cachePathFor(cacheKeyFor(s.voice, text));
  let bytes = 0;
  try {
    bytes = statSync(path).size;
  } catch {
    bytes = 0;
  }

  const label = `${s.kind}/${s.lang}`;
  const b = byKey.get(label) ?? newBucket();
  byKey.set(label, b);

  for (const t of [b, overall]) {
    t.total++;
    t.chars += text.length;
    if (bytes > 0) {
      t.cached++;
      t.cachedBytes += bytes;
      t.cachedChars += text.length;
    }
    if (text.length > riskChars(s)) t.risky++;
  }
  if (text.length > riskChars(s) && riskyExamples.length < 8) riskyExamples.push(s);
  if (bytes > 0) {
    const arr = cachedSamples.get(s.lang) ?? [];
    if (arr.length < 120) arr.push(s);
    cachedSamples.set(s.lang, arr);
  }
}

const pct = (a: number, b: number) => (b === 0 ? "  -  " : `${((a / b) * 100).toFixed(1)}%`);
const mb = (n: number) => `${(n / 1e6).toFixed(0)} MB`;

console.log("段落分布与缓存覆盖");
console.log(
  `  ${"分类".padEnd(16)}${"段数".padStart(7)}${"已缓存".padStart(9)}${"覆盖".padStart(8)}${"中位字数".padStart(10)}${"超时高风险".padStart(12)}`,
);
const labels = [...byKey.keys()].sort();
for (const label of labels) {
  const b = byKey.get(label)!;
  const median = Math.round(b.chars / Math.max(1, b.total));
  console.log(
    `  ${label.padEnd(16)}${String(b.total).padStart(7)}${String(b.cached).padStart(9)}${pct(b.cached, b.total).padStart(8)}${String(median).padStart(10)}${(`${b.risky} (${pct(b.risky, b.total).trim()})`).padStart(12)}`,
  );
}
console.log(
  `  ${"合计".padEnd(16)}${String(overall.total).padStart(7)}${String(overall.cached).padStart(9)}${pct(overall.cached, overall.total).padStart(8)}`,
);

// 体积推算：中英语速差一倍多（同样字符数的英文语音短得多），必须分语言算
// 每字符字节数再外推，否则用混合样本推全量会系统性偏大。
{
  const perLang = new Map<string, { bytes: number; cachedChars: number; chars: number }>();
  for (const label of labels) {
    const lang = label.split("/")[1]!;
    const b = byKey.get(label)!;
    const p = perLang.get(lang) ?? { bytes: 0, cachedChars: 0, chars: 0 };
    p.bytes += b.cachedBytes;
    p.cachedChars += b.cachedChars;
    p.chars += b.chars;
    perLang.set(lang, p);
  }
  let projected = 0;
  let unknown = 0;
  const detail: string[] = [];
  for (const [lang, p] of perLang) {
    if (p.cachedChars > 0) {
      const rate = p.bytes / p.cachedChars;
      projected += rate * p.chars;
      detail.push(`${lang} ${(rate / 1000).toFixed(2)} KB/字符`);
    } else {
      unknown += p.chars;
    }
  }
  console.log(
    `\n体积: 已缓存 ${mb(overall.cachedBytes)}（${overall.cached} 段）→ 全量预计约 ${mb(projected)}` +
      (unknown > 0 ? `（另有 ${unknown} 字符所属语言尚无样本，未计入）` : ""),
  );
  if (detail.length > 0) console.log(`      采样率: ${detail.join(" · ")}`);
}

if (riskyExamples.length > 0) {
  console.log("\n超时高风险样例（单段合成逼近 13s 上限，会触发整篇降级）");
  for (const s of riskyExamples) {
    console.log(`  ${s.kind}/${s.id}/${s.section} [${s.lang}] ${normalizeText(s.text).length} 字符`);
  }
}

// 语速常数校准：lib/speech.ts 的 CHARS_PER_SEC 决定航线飞行的兜底节拍与浏览器 TTS
// 的超时保护。用已缓存音频的 word boundary 末尾时间反算实际语速，和常数比对，
// 内容风格变化（比如段落普遍变长/变短）导致失准时能及早发现。
{
  const lines: string[] = [];
  for (const [lang, list] of cachedSamples) {
    let chars = 0;
    let secs = 0;
    let n = 0;
    for (const s of list) {
      const text = normalizeText(s.text);
      const c = await readCache(cacheKeyFor(s.voice, text));
      const last = c?.wordBoundaries.at(-1)?.end ?? 0;
      if (last <= 0) continue;
      chars += text.trim().length;
      secs += last;
      n++;
    }
    if (n < 5) continue;
    const measured = chars / secs;
    const declared = SPEECH_CHARS_PER_SEC[lang as keyof typeof SPEECH_CHARS_PER_SEC];
    const drift = Math.abs(measured - declared) / declared;
    lines.push(
      `  ${lang}: 实测 ${measured.toFixed(2)} 字符/秒（${n} 段样本） vs 常数 ${declared}` +
        (drift > 0.15 ? `  ⚠ 偏差 ${(drift * 100).toFixed(0)}%，建议更新 lib/speech.ts` : ""),
    );
  }
  if (lines.length > 0) {
    console.log("\n语速常数校准（lib/speech.ts CHARS_PER_SEC）");
    for (const l of lines) console.log(l);
  }
}

if (gaps.length > 0) {
  console.log(`\n✗ manifest 缺口 ${gaps.length} 处：`);
  for (const g of gaps.slice(0, 20)) {
    console.log(`  ${g.kind} ${g.id} [${g.lang}] ${g.reason}`);
  }
  if (gaps.length > 20) console.log(`  …还有 ${gaps.length - 20} 处`);
}

console.log(
  `\n${overall.total} 段播报, ${overall.cached} 段已缓存, ${gaps.length} 项异常`,
);
process.exit(gaps.length > 0 ? 1 : 0);
