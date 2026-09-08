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

/**
 * C1a：**主观**最高级 —— 「最险峻的一段」这种谁也核实不了的判断。
 *
 * 不报「最高峰是托木尔峰」这类客观最高级：那是有明确定义、可查、且不随时间变的
 * 事实描述，报出来只会把信噪比压垮（实测客观最高级有四千多处）。
 */
const SUBJECTIVE_SUP_ZH =
  /最(险峻|壮观|美丽|漂亮|著名|有名|重要|典型|繁华|精彩|值得|经典|迷人|震撼|优美|独特|舒适|适合|理想|好的)/;
const SUBJECTIVE_SUP_EN =
  /\b(most (spectacular|beautiful|famous|important|impressive|striking|scenic|charming|iconic|dramatic|stunning|picturesque)|finest|best[- ](known|loved|preserved))\b/i;

/**
 * C1b：**排名断言里口径不明的那一类**。横滨「日本人口第二多的市」是原型：
 * 「第二多」按的是哪一档人口？市建制、都会区、还是 23 区？两样都不说就不该写。
 *
 * **只报口径真的会变的排名**。「第二高峰」「第三长的峡湾」这种，被比较的那个量
 * 就写在词里（高度、长度），换个口径也不会变名次 —— 报出来只会逼人往
 * 「日本按海拔计第二高峰」这种句子上加废话。所以 `高 / 长 / 深` 与
 * `highest / longest / deepest` 不进这张网，留下的是 `大 / 多 / largest / most populous`
 * 这类**必须说清按什么算**的。
 *
 * 句子里有年份或限定语（「之一」「按…计」）则放过。
 */
const RANK_ZH = /(第[二三四五六七八九十两]大|排名第|位居第|第[二三四五六七八九十两]多)/;
const RANK_EN = /\b(second|third|fourth|fifth)[- ](largest|biggest|most populous|busiest)\b/i;
/**
 * 限定语：出现任何一个就放过。
 *
 * 「之一」「按…计」是显式限定；**「面积第二大」这类把被比较的量直接写在排名前面的，
 * 同样是显式限定** —— 「面积」两个字已经把口径说清楚了，再要求写成
 * 「按面积计面积第二大」就是废话。
 * 但 **「人口第 N 多」不算**：人口本身还分市建制 / 都会区 / 登记 vs 常住好几档，
 * 横滨那条错的正是这一层（「日本人口第二多的市」把 23 区和市建制混了）。
 */
const QUALIFIER_ZH = /(之一|按|口径|计[，,、]|现存|当时|号称|之称|其中|面积第|长度第|海拔第)/;
const QUALIFIER_EN = /\b(one of|among|by (area|population|land)|at the time|then|largest by area)\b/i;

/**
 * C6-e：**钱**。票价、门票、通票、打车费 —— 这些比人口过期得还快，
 * 而且读者会拿它当预算依据。没有年份的价格等于没有价格。
 * 只报带**具体金额**的句子，「收费参观」这种不带数字的不报。
 */
// 一句话里同时出现「金额」和「与花钱有关的词」才算价格 —— 只看金额会把
// GDP、造价、投资额一起报出来；只看词又会漏掉「一张 365 欧元的年票」这种
// 数字在前、名词在后的语序。两个条件都要，且不限先后。
const AMOUNT_ZH =
  /\d[\d.,]*\s*(元|欧元|美元|日元|英镑|澳元|港币|新元|泰铢|林吉特|比索|卢比|克朗|兹罗提|里拉|坚戈)/;
const PRICE_WORD_ZH =
  /(票价|门票|收费|费用|车费|房价|均价|出租车|打车|年票|月票|通票|车票|船票|缆车|人均|起步价)/;
const AMOUNT_EN =
  /([€$£¥]\s?\d[\d.,]*|\b\d[\d.,]*\s?(euros?|dollars?|pounds?|yen|baht|ringgit|pesos?|kronor|zloty)\b)/i;
const PRICE_WORD_EN =
  /\b(fare|ticket|pass|costs?|price[sd]?|admission|entry fee|taxi|per person|per night)\b/i;
const isPrice = (s: string, zh: boolean) =>
  zh ? AMOUNT_ZH.test(s) && PRICE_WORD_ZH.test(s) : AMOUNT_EN.test(s) && PRICE_WORD_EN.test(s);

/**
 * C6-f：**签证天数写死**。项目早就定过口径（CLAUDE.md「中国政策类内容口径」）：
 * 免签天数不写死，只说"近年放宽、以官方最新公布为准"。这条把那个口径变成脚本。
 *
 * 带了"以…最新公布为准 / check … for the latest"这类**转向官方口径的免责语**就放过 ——
 * 哈萨克斯坦那条「多国公民可享受最长30天免签入境，具体以哈萨克斯坦外交部最新公布为准」
 * 正是正确写法的范例，不该被报出来。
 */
const VISA_ZH =
  /(免签|落地签|免办签证)[^。；！？]{0,14}?\d{1,3}\s*(天|日)|\d{1,3}\s*(天|日)[^。；！？]{0,6}(免签|落地签)/;
const VISA_EN =
  /\b(visa[- ]free|visa on arrival)\b[^.;!?]{0,20}?\b\d{1,3}[\s-]?days?\b|\b\d{1,3}[\s-]?days?\b[^.;!?]{0,14}\b(visa[- ]free|visa on arrival)\b/i;
/** 转向官方口径的免责语 —— 有它就说明作者没把政策写死 */
const DEFER_ZH = /(最新公布|最新规定|最新政策|以.{0,12}(官网|部|局|署).{0,6}为准|请以.{0,10}为准)/;
const DEFER_EN = /\b(check|refer to|consult)\b[^.;!?]{0,60}\b(latest|current|official|before you (travel|fly|go))\b/i;

/**
 * **同一条目内部的时间比较不算这一类。**
 *
 * 「4–5月、10–11月气候最舒适」比较的是同一座城市的**月份之间**，不是这座城市与别的
 * 地方之间 —— 它既可核实又无争议，和「茶马古道最险峻的一段」完全不是一回事。
 * 这类占了 C1a 的三分之一（`最舒适` 114 处 + `最适合` 46 处，几乎全在 `whenAndTips` 段）。
 *
 * 还有一个旁证：**英文那边一处都没报** —— 英文的判据里本来就没有 "most comfortable"，
 * 于是同一句话中文报、英文不报。两种语言说的是同一件事却只有一边被标出来，
 * 说明是中文这条判据画得太宽了。
 *
 * 实现上是**逐个匹配**判断，不是整句放过：一句话里如果既有时间比较、
 * 又有一个跨地点的最高级（「5月最适合来看最壮观的瀑布」），后者照样要报。
 */
const TIME_EXPR_ZH = /(\d+\s*[–\-~至]\s*\d+\s*月|\d+\s*月|春季|夏季|秋季|冬季|春秋|旺季|淡季|雨季|旱季)/;
const TEMPORAL_SUP_ZH = /^最(舒适|适合|好的时候)/;

/** C1a：主观最高级（句子里有年份或限定语则放过 —— 那是正确写法的范例） */
export function isSubjectiveSuperlative(s: string, zh: boolean): boolean {
  const qual = (zh ? QUALIFIER_ZH : QUALIFIER_EN).test(s) || HAS_YEAR.test(s);
  if (qual) return false;
  const re = new RegExp((zh ? SUBJECTIVE_SUP_ZH : SUBJECTIVE_SUP_EN).source, zh ? "g" : "gi");
  const hasTime = zh && TIME_EXPR_ZH.test(s);
  for (const m of s.matchAll(re)) {
    if (hasTime && TEMPORAL_SUP_ZH.test(m[0])) continue;
    return true;
  }
  return false;
}

/** C1b：排名断言缺口径 */
export function isUnqualifiedRank(s: string, zh: boolean): boolean {
  const qual = (zh ? QUALIFIER_ZH : QUALIFIER_EN).test(s) || HAS_YEAR.test(s);
  if (qual) return false;
  return (zh ? RANK_ZH : RANK_EN).test(s);
}

/** C6e：价格缺年份 */
export const isPriceWithoutYear = (s: string, zh: boolean) => !HAS_YEAR.test(s) && isPrice(s, zh);

/** C6f：签证天数写死（带转向官方口径的免责语则放过） */
export const isHardcodedVisa = (s: string, zh: boolean) =>
  (zh ? VISA_ZH : VISA_EN).test(s) && !(zh ? DEFER_ZH : DEFER_EN).test(s);

/**
 * **逐句判据的唯一注册表**。`check:claims` 与 `list:claims` 都从这里取 ——
 * 2026-09-08 发现 `list:claims` 只实现了 C6 与 C6d，传别的规则名会**静默地按 C6d 跑**
 * 却在表头印着你要的那个规则名（`--rule C1b` 报出来的其实是 C6d 的命中）。
 * 这是与 check:flight 那个「断言的分母写错了对象」同一形状的错：
 * 工具报出来的东西不是它自称的那个东西。加了这张表之后，未知规则名一律硬失败。
 */
export const SENTENCE_RULES: Record<string, (s: string, zh: boolean) => boolean> = {
  C6: isMissingYear,
  C6d: isStale,
  C6e: isPriceWithoutYear,
  C6f: isHardcodedVisa,
  C1a: isSubjectiveSuperlative,
  C1b: isUnqualifiedRank,
};
