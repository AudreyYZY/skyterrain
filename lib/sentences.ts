/**
 * 按中英文句末标点切句 —— 面板显示 / 逐句高亮 / 航点同步共用同一套切分。
 *
 * 数字里的小数点不算句号：解说里写「海拔 7508.9 米」「约 3.5 小时」，
 * 裸按句号切会切出一句以「9 米，……」开头的残句 —— 逐句高亮会跳、朗读会
 * 在数字中间停顿、航点锚定还会把这半句当成新的一句去匹配地名。
 *
 * ⚠️ **判据是「小数点在两个数字之间」，不是「句号前面是数字」**（2026-09-18 改）。
 * 原先写的是 `(?<!\d)\.(?!\d)` —— 只要句号**前面**是数字就不算句末，
 * 于是所有以年份 / 数字结尾的英文句子根本不切：
 *   「… a registered population of about 2.42 million in July 2026. The old city lies in the west …」
 * 整段被当成一句，逐句高亮要在同一块上停 **24.1 秒**（台北 howItWorks 英文）。
 * 全库扫下来这样的块有 218 处、涉及 216 段，**其中 217 处是英文、只有 1 处是中文** ——
 * 中文句末用「。」不受这条规则影响，所以 2026-09-17 修中文那轮完全没暴露它。
 * 正确的判据只排除「1300.2」这类两侧都是数字的情况：`\.(?!\d)`。
 * 影响面实测：航线解说 1,180 篇里 14 篇句数变（**必须重跑 `npm run gen:anchors`**）、
 * 地形讲解 75 / 16,224 段、城市攻略 345 / 13,076 段。
 */
export function splitSentences(text: string): string[] {
  if (!text.trim()) return [];
  return text
    .split(/(?<=[。！？!?]|\.(?!\d))/g)
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
 * 中文 4.44 字/秒 → 约 28 字，英文 **14.6** 字符/秒 → 约 80 字符 ——
 * 这两个语速以 `npm run check:tts` 的实测为准，2026-09-17 把英文从 15.24 改到 14.6，本行同日对齐）。
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
/** 英文里一个数字字符折算成多少个字母的朗读时长（2026-09-18 实测拟合，见下方注释） */
const EN_DIGIT_WEIGHT = 4.56;

function spokenWeight(text: string, cjk: boolean): number {
  if (!cjk) {
    // 英文也要按「念起来多长」算，不能按字符数（2026-09-18 改）。
    //
    // 原先非中文直接返回字符数，于是**数字密集的英文句子被严重低估**：
    // 「The 2020 census counted about 8.58 million …」按字符算像 5 秒，实际念 18 秒。
    // 全库 >13 秒的高亮块修掉前两类之后还剩 104 处，几乎全是这一类。
    // 用 .tts-cache 里 2,223 段英文播报的真实 word boundary 做最小二乘拟合
    // （秒 = a×字母 + b×数字 + c）：字母 15.94 字符/秒、**一个数字字符 ≈ 4.56 个字母的时长**，
    // 相对误差中位 2.8% / p90 8.0%。—— 这两个数以实测为准，偏差超过 3% 就回来重拟。
    let w = 0;
    for (const ch of text.trim()) w += ch >= "0" && ch <= "9" ? EN_DIGIT_WEIGHT : 1;
    return w;
  }
  let w = 0;
  for (const ch of text) {
    if (ch === " " || ch === "\t") continue;
    if (ch >= "0" && ch <= "9") w += 1.6;
    else if (/[A-Za-z]/.test(ch)) w += 0.45;
    else w += 1;
  }
  return w;
}

/**
 * 兜底断点：在没有可用标点候选时，按词（中文按字）在目标长度附近切一刀。
 * 返回下一块的起始下标；找不到合适位置时返回 startIdx（调用方据此放弃）。
 */
function fallbackCut(sentence: string, startIdx: number, target: number, cjk: boolean): number {
  // 只在剩余长度明显超标时才动手（超过目标两倍 ≈ 11 秒以上）
  if (spokenWeight(sentence.slice(startIdx), cjk) <= target * 2) return startIdx;
  if (cjk) {
    // 中文没有词边界，逐字累计到目标即切
    let w = 0;
    for (let i = startIdx; i < sentence.length; i++) {
      w += spokenWeight(sentence[i]!, true);
      if (w >= target) return i + 1;
    }
    return startIdx;
  }
  // 英文在空格处切：先累计到目标，再切在**下一个**空格之后，避免切断单词
  let w = 0;
  let lastSpace = -1;
  for (let i = startIdx; i < sentence.length; i++) {
    w += 1;
    if (sentence[i] === " ") {
      lastSpace = i;
      if (w >= target) {
        let j = i + 1;
        while (j < sentence.length && sentence[j] === " ") j++;
        // 切完之后剩下的太短就不切了，免得掉出一个碎片
        if (spokenWeight(sentence.slice(j), cjk) >= target * 0.4) return j;
      }
    }
  }
  return lastSpace > startIdx ? lastSpace + 1 : startIdx;
}

function splitLongSentence(sentence: string): string[] {
  const cjk = isCJK(sentence);
  // 目标 ≈ 5.5 秒朗读（中文 4.44 字/秒；英文按字母 15.94 字符/秒、数字按 4.56 倍折算 —— 都是实测）；
  // 不到目标的 1.25 倍就不折腾，免得把短句切碎
  const target = cjk ? 24 : 88;
  if (spokenWeight(sentence, cjk) <= target * 1.25) return [sentence];
  const min = cjk ? 10 : 36;

  // 候选断点：从句标点、右括号、右引号、破折号之后（含紧跟的空格），以及左括号之前
  const cuts: number[] = [];
  for (let i = 0; i < sentence.length; i++) {
    const ch = sentence[i]!;
    // 左括号**之前**可以断 —— 括注往往整块很长，断在它前面比断在它里面自然
    if (ch === "(" || ch === "（") {
      if (i > 0) cuts.push(i);
      continue;
    }
    // 破折号：中文写「——」两个字符，英文写单个 em dash「—」或 en dash「–」。
    // 原先只认「前一个字符也是 —」，即**只认中文的双破折号** —— 于是本库英文正文里
    // 大量用单破折号代替逗号的长句（「… the largest glacier in France — its main body about 7 km …」）
    // 一个候选都没有，整句成为一块，实测 mer-de-glace/seeing 英文那块念 18.0 秒。
    // 现在把破折号的**连续段**当作一个断点（中文「——」只在第二个字符后断一次）。
    const isDash = ch === "—" || ch === "–";
    if (isDash) {
      let k = i;
      while (k + 1 < sentence.length && (sentence[k + 1] === "—" || sentence[k + 1] === "–")) k++;
      let j = k + 1;
      while (j < sentence.length && sentence[j] === " ") j++;
      if (j < sentence.length) cuts.push(j);
      i = k;
      continue;
    }
    const ok = CLAUSE_END.test(ch) || ch === "）" || ch === ")" || ch === "」" || ch === "”";
    if (!ok) continue;
    let j = i + 1;
    while (j < sentence.length && sentence[j] === " ") j++;
    if (j < sentence.length) cuts.push(j); // 下一块从 j 开始
  }
  cuts.sort((a, b) => a - b);
  if (cuts.length === 0) {
    // 没有任何标点候选，但句子确实过长 —— 按词硬切（否则整句成为一块）
    const out: string[] = [];
    let at = 0;
    for (const _ of sentence) {
      const cut = fallbackCut(sentence, at, target, cjk);
      if (cut <= at) break;
      out.push(sentence.slice(at, cut));
      at = cut;
    }
    const rest = sentence.slice(at);
    if (rest.length > 0) out.push(rest);
    return out.length > 0 ? out : [sentence];
  }

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
    // 最近的标点候选也远远超过目标时，按词切一刀更接近目标就用它（2026-09-18 补）。
    // 只挑「最接近目标的标点」在候选稀疏时还不够：候选可能全都在两倍目标之外。
    if (best > startIdx) {
      const wBest = spokenWeight(sentence.slice(startIdx, best), cjk);
      if (wBest > target * 1.6) {
        const cut = fallbackCut(sentence, startIdx, target, cjk);
        const wCut = cut > startIdx ? spokenWeight(sentence.slice(startIdx, cut), cjk) : Infinity;
        if (Math.abs(wCut - target) < Math.abs(wBest - target)) best = cut;
      }
    }
    if (best < 0) {
      // 一个候选都用不上，而剩下的还很长 —— 退到按词（中文按字）硬切一刀（2026-09-18 补）。
      //
      // 为什么需要兜底：候选断点要求「切完之后剩下的不短于 min」，于是**最后一段长从句里
      // 唯一的逗号恰好离句尾很近**时，所有候选都被否掉、整段原封不动成为一块。
      // 实例：harz-mountains/concept 英文有一块 279 字符、念 19.1 秒
      //（「…forces the moist air around and over it, cooling it.」—— 逗号在结尾前 10 个字符）。
      // 按词硬切读起来不如按标点自然，但**高亮在原地冻住 19 秒**比这难受得多，
      // 而本库自己的红线就是一块不超过 13 秒。
      const cut = fallbackCut(sentence, startIdx, target, cjk);
      if (cut > startIdx) {
        pieces.push(sentence.slice(startIdx, cut));
        startIdx = cut;
        continue;
      }
      break;
    }
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

