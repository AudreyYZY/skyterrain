/** 按中英文句末标点切句 —— 逐句高亮 / 面板显示 / 航点同步共用同一套切分。 */
export function splitSentences(text: string): string[] {
  if (!text.trim()) return [];
  return text
    .split(/(?<=[。！？.!?])/g)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}
