/**
 * 按中英文句末标点切句 —— 逐句高亮 / 面板显示 / 航点同步共用同一套切分。
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
