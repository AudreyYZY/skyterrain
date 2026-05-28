/** 移除 emoji 与常见符号装饰，用于讲解正文展示 */
export function stripEmojis(text: string): string {
  return text
    .replace(/\p{Extended_Pictographic}/gu, "")
    .replace(/[\uFE00-\uFE0F]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}
