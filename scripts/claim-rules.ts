/**
 * check:claims 与 list:claims 共用的判据。
 *
 * 这两个脚本原本各抄了一份正则，2026-09-08 就出现了漂移：check-claims 给 C6d 加了
 * 「法定人口 / 参照人口」豁免（法国 INSEE 那套按法律滞后三年），list-claims 没跟上，
 * 于是两边报出来的数不一样（317 vs 327）。判据只能有一份。
 */

/** 句子里出现年份就算交代了时点 */
export const HAS_YEAR = /(1[89]|20)\d{2}/;

/** C6：**人口**这类逐年变化的量（只盯人口，面积/海拔/长度基本不随时间变） */
export const PERISHABLE_ZH =
  /(常住人口|户籍人口|城区人口|都会区人口|市区人口|人口|居民)[^。；！？]{0,20}?\d[\d.,]*\s*(万|亿|人|户)/;
export const PERISHABLE_EN =
  /\b(population|inhabitants|residents)\b[^.;!?]{0,40}?[\d.,]+\s*(million|billion|thousand|people|residents|inhabitants)/i;

/**
 * 「定义上就不逐年更新」的系列 —— 报出来只会让人去改一个本来就正确的句子。
 *
 *   普查：五年或十年一次（菲律宾 2024、澳大利亚 2021、英国建成区口径都是）
 *   法国 INSEE 的 populations de référence（原 populations légales）：**按法律滞后三年**
 *     —— 2026-01-01 生效的那一版参照 2023 年，这不是过期，是这套口径的定义。
 *
 * 豁免的前提是**句子里点明了口径**（写「法定人口」「参照人口」「人口普查」），
 * 只写个年份不够 —— 这样豁免本身也是一种交代。
 */
export const CENSUS_ZH = /(普查|人口普查|国势调查|法定人口|参照人口)/;
export const CENSUS_EN = /\b(census|legal population|reference population)\b/i;

/** 早于这一年的统计时点视为「不是最新一期」 */
export const FRESH_SINCE = new Date().getFullYear() - 1;

/** 句子里出现的最大年份 —— 用它当这句话的统计时点 */
export function latestYear(s: string): number | null {
  const ys = [...s.matchAll(/(?:1[89]|20)\d{2}/g)].map((m) => Number(m[0]));
  return ys.length ? Math.max(...ys) : null;
}

export const isPerishable = (s: string, zh: boolean) =>
  zh ? PERISHABLE_ZH.test(s) : PERISHABLE_EN.test(s);

/** C6：易过期量却没有年份 */
export const isMissingYear = (s: string, zh: boolean) =>
  isPerishable(s, zh) && !HAS_YEAR.test(s);

/** C6d：有年份，但不是最新一期（普查/法定人口这类定义上滞后的口径除外） */
export function isStale(s: string, zh: boolean): boolean {
  if (!isPerishable(s, zh) || !HAS_YEAR.test(s)) return false;
  if ((zh ? CENSUS_ZH : CENSUS_EN).test(s)) return false;
  const y = latestYear(s);
  return y !== null && y < FRESH_SINCE;
}
