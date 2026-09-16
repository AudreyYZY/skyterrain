/**
 * 按中英文句末标点切句 —— 面板显示 / 逐句高亮 / 航点同步共用同一套切分。
 *
 * 数字里的小数点不算句号：解说里写「海拔 7508.9 米」「约 3.5 小时」，
 * 裸按句号切会切出一句以「9 米，……」开头的残句 —— 逐句高亮会跳、朗读会
 * 在数字中间停顿、航点锚定还会把这半句当成新的一句去匹配地名。
 */
export function splitSentences(text: string): string[] {
  if (!text.trim()) return [];
  return text
    .split(/(?<=[。！？!?]|(?<!\d)\.(?!\d))/g)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/**
 * 逐句高亮 / 面板渲染用的**更细**切分（2026-09-17 立）。
 *
 * 为什么需要它：本库的中文正文一句常有 80–100 字，Edge TTS 念一句要 15–20 秒。
 * 高亮按句号切时，一块高亮就得在原地停将近二十秒，而语音一直在往前走 ——
 * 用户看到的是「语音早就念到后面了，高亮还没动」，读起来像卡住。
 * 这里在句末标点之外，再在从句标点（，、；：——）处把过长的句子切开，
 * 使每块高亮大致对应 6 秒上下的朗读时长（按 lib/speech.ts 实测的语速换算：
 * 中文 4.44 字/秒 → 约 28 字，英文 15.24 字符/秒 → 约 90 字符）。
 *
 * ⚠️ **航线解说不要用它**：`lib/route-anchors.data.ts` 的锚点表是按
 * `splitSentences` 的句序生成的，换了切分句数就对不上，`npm run check:anchors` 会失败。
 * 面板渲染与高亮必须用**同一个**切分函数，否则全局句子索引会错位 ——
 * 这正是 2026-09-17 修掉的那个 bug：`StructuredLesson` 曾自带一份缺了小数点保护的
 * 切句实现，全库 2,650 段城市攻略与 517 段地形讲解因此与高亮索引对不上。
 */
export function splitForHighlight(text: string): string[] {
  const sentences = splitSentences(text);
  const out: string[] = [];
  for (const sentence of sentences) out.push(...splitLongSentence(sentence));
  return out;
}

/** 从句标点：在它们**后面**可以断开 */
const CLAUSE_END = /[，、；：,;:]/;

function isCJK(text: string): boolean {
  const cjk = text.match(/[㐀-鿿]/g)?.length ?? 0;
  return cjk / Math.max(1, text.length) > 0.1;
}

/**
 * 「念起来有多长」的权重，不是字数。
 * 中文里一个数字念出来是好几个音节（「2024 年」= 五个音节四个字符），
 * 拉丁字母反过来比汉字快 —— 按字数切会把含数字的句子切得过长（丽江那块曾到 15.1 秒）。
 */
function spokenWeight(text: string, cjk: boolean): number {
  if (!cjk) return text.trim().length;
  let w = 0;
  for (const ch of text) {
    if (ch === " " || ch === "\t") continue;
    if (ch >= "0" && ch <= "9") w += 1.6;
    else if (/[A-Za-z]/.test(ch)) w += 0.45;
    else w += 1;
  }
  return w;
}

function splitLongSentence(sentence: string): string[] {
  const cjk = isCJK(sentence);
  // 目标 ≈ 5.5 秒朗读（中文 4.44 字/秒、英文 15.24 字符/秒）；
  // 不到目标的 1.25 倍就不折腾，免得把短句切碎
  const target = cjk ? 24 : 84;
  if (spokenWeight(sentence, cjk) <= target * 1.25) return [sentence];
  const min = cjk ? 10 : 36;

  // 候选断点：从句标点、右括号、右引号、破折号之后（含紧跟的空格）
  const cuts: number[] = [];
  for (let i = 0; i < sentence.length; i++) {
    const ch = sentence[i]!;
    const ok = CLAUSE_END.test(ch) || ch === "）" || ch === ")" || ch === "」" || ch === "”"
      || (ch === "—" && sentence[i - 1] === "—");
    if (!ok) continue;
    let j = i + 1;
    while (j < sentence.length && sentence[j] === " ") j++;
    if (j < sentence.length) cuts.push(j); // 下一块从 j 开始
  }
  if (cuts.length === 0) return [sentence];

  // 在候选里挑**最接近目标**的那个切 —— 不要「遇到第一个超过目标的就切」：
  // 括号里可能很久没有标点，贪心会切出七十多字、念十五秒的大块（丽江那句就是）。
  const pieces: string[] = [];
  let startIdx = 0;
  for (const _ of sentence) {
    const remainingAll = spokenWeight(sentence.slice(startIdx), cjk);
    if (remainingAll <= target * 1.4) break;
    let best = -1;
    let bestScore = Infinity;
    for (const c of cuts) {
      if (c <= startIdx) continue;
      const w = spokenWeight(sentence.slice(startIdx, c), cjk);
      const rest = spokenWeight(sentence.slice(c), cjk);
      if (rest < min) continue;
      const score = Math.abs(w - target) + (w < min ? 1000 : 0);
      if (score < bestScore) { bestScore = score; best = c; }
      if (w > target * 1.8) break; // 再往后只会更远
    }
    if (best < 0) break;
    pieces.push(sentence.slice(startIdx, best));
    startIdx = best;
  }
  const tail = sentence.slice(startIdx);
  if (tail.length > 0) {
    if (pieces.length > 0 && spokenWeight(tail, cjk) < min) pieces[pieces.length - 1] += tail;
    else pieces.push(tail);
  }
  return pieces.length > 0 ? pieces : [sentence];
}

