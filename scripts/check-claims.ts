/**
 * 易过期断言扫描（不联网）
 *   运行: npm run check:claims
 *
 * 这个脚本**查不了内容对不对** —— 那要联网，是 /verify-content 的事。
 * 它只查「写法上就已经不可靠」的句子，每一类在 docs/known-errors.md 里都有实例：
 *
 *   C6   人口数字没有年份 —— 「上海都会区人口约 2500 万」是哪一年、什么口径？
 *   C1a  主观最高级 —— 「茶马古道最险峻的一段」这种谁也核实不了的判断
 *   C1b  排名断言没有口径 —— 横滨「日本人口第二多的市」错在把两种口径混了
 *   C6i  同一条目的 identity 与 howItWorks 给出两个互相矛盾的「全市人口」
 *   D1b  「公报未单列市区人口」之后又给出一个市区人口 —— 免责声明与数字自相矛盾
 *   C6k  用了**这个国家官方统计里根本不存在的口径** —— 「市区常住人口」在中国不是官方称谓
 *   D4   拼接漏空格造成的粘连句 —— 「…of the flight.Easter Island lies…」
 *
 * 存量很大，一次性清不完，所以这里不是「有就报错」，而是**棘轮**：
 * 与 docs/claims-baseline.json 里记下的基线比，**只许降不许升**。
 * 新写的内容想加一句没年份的人口数，就会让计数上升，脚本直接失败。
 *
 * 基线刷新（只在真的降下来之后做）：
 *   npm run check:claims -- --update-baseline
 */

import { readFile, writeFile } from "node:fs/promises";
import { collectTtsSegments } from "../lib/tts-manifest.ts";
import { splitSentences } from "../lib/sentences.ts";
import { CITY_REGISTRY } from "../lib/places-registry.ts";
import { TERRAIN_REGISTRY } from "../lib/terrain-registry.ts";
import {
  FRESH_SINCE,
  CENSUS_ZH,
  CENSUS_EN,
  isMissingYear,
  isStale,
  isSubjectiveSuperlative,
  isUnqualifiedRank,
  isPriceWithoutYear,
  isHardcodedVisa,
} from "./claim-rules.ts";

const BASELINE_PATH = "docs/claims-baseline.json";
const EXEMPT_PATH = "docs/claims-stale-exempt.json";
const UPDATE = process.argv.includes("--update-baseline");
const SHOW = Number(process.argv.find((a) => a.startsWith("--show="))?.slice(7) ?? 8);

// ── 规则 ───────────────────────────────────────────────────────────────

/**
 * C6：**人口**这类逐年变化的量。
 *
 * 只盯人口，不盯面积、海拔、长度 —— 后三者基本不随时间变，把它们一起报出来会
 * 淹掉真正会过期的那批（实测面积类占 700 多条，人口类才几十条）。
 * 「上海都会区人口约 2500 万」是这一类的原型：没有年份，也没说是市域常住人口
 * 还是都市圈口径。
 */
// 注：C6/C6d 的「会过期的量」判据在 scripts/claim-rules.ts（isPerishable / isStale），
// 与 list:claims 共用同一份。**这里曾经有一份从未被引用的同名副本**——2026-09-12 有人
// （就是本次）照着注释去改它，改完计数一动不动，才发现是死代码。已删。

/** D4：句号后紧跟大写字母 —— 多段字符串拼接漏了空格 */
const RUN_ON = /[a-z)][.!?][A-Z]/;

/**
 * C6l：**机场的具体航点列表**（2026-09-13 立）。「有北京、上海、成都等航线」「has flights to Beijing, Shanghai and Chengdu」
 * 这类句子随航季增删，交通状态回扫抽 14 条、5 条已有航点停飞或其实是经停（36%，日喀则无重庆、林芝无拉萨直飞、
 * 临沂与腾冲的北京航线已停、长白山的广州是经停大连）。全库一次清掉 45 条之后基线固化为 0 ——
 * 要写就写「有定期航班」，具体航点让读者查机场公布。
 */
const DEST_LIST_ZH = /(?:(?:有|开通了?|通达|可飞)(?:飞往)?[^，。；（）]{0,60}?、[^，。；（）]{0,80}?等(?:国内外|国内|国际|地)?(?:航线|航点|城市的?航班|航班)|(?:有|只有)(?:飞往|往返|航班到|飞)?[^，。；（）]{1,14}、[^，。；（）]{1,14}、[^，。；（）]{1,30}(?:航线|航班))/;
const DEST_LIST_EN = /\b(?:(?:flights|routes|air services)\s+(?:only\s+)?(?:to|from)\s+[A-ZÀ-Þ][\w'’-]*(?:\s+[A-ZÀ-Þ][\w'’-]*){0,3}(?:(?:,\s*|\s+and\s+)(?:to\s+)?[A-ZÀ-Þ][\w'’-]*(?:\s+[A-ZÀ-Þ][\w'’-]*){0,3}){2,}|has\s+[A-ZÀ-Þ][\w'’-]*(?:\s+[A-ZÀ-Þ][\w'’-]*){0,3}(?:(?:,\s*|\s+and\s+)(?:to\s+)?[A-ZÀ-Þ][\w'’-]*(?:\s+[A-ZÀ-Þ][\w'’-]*){0,3}){2,}\s+(?:flights|routes)\b)/;

/**
 * C6k：**这个国家的官方统计里根本没有这个口径**。
 *
 * `C6-c` 一直是靠人核出来的：「口径先于数字 —— 先确认这个口径在该国官方统计里存不存在」。
 * 2026-09-08 那批把它推到了极端：**福州、济南、长沙、南宁、海口、兰州六个条目的
 * identity 段全都写着「市区常住人口约 N 百万」**，中英同步，而中国地级市年度公报
 * 只有「全市常住人口」与「城镇常住人口」两档官方称谓 —— 「市区常住人口」是编的。
 *
 * 六条一个错误，说明是同一批写出来的。**逐条核实永远发现不了这种错**（每条单看都
 * 「有数字、句式规范」），只有把同一国家的条目并排看才显形。这条规则就是把「并排看」
 * 这件事交给脚本。
 *
 * **判据是按国家的**，因为同一个词在不同国家的合法性不同：
 * 「都会区」在美国（MSA）、日本（都市圏）都有官方口径，在丹麦与中国则没有。
 *
 * **只写已经核实过的国家**。没核过的国家不要凭印象往里加 —— 那等于用一条猜测去
 * 拦另一条猜测。表里每一行都要能指到 known-errors 里的一个实例。
 */
interface FakeCaliber { re: RegExp; why: string }
const FAKE_CALIBER: Record<string, FakeCaliber[]> = {
  // known-errors C6-c / C6-c-5：中国公报只有「全市常住人口」与「城镇常住人口」两档
  china: [
    { re: /(市区|中心城区|主城区)常住人口/, why: "中国地级市年度公报只有「全市常住人口」与「城镇常住人口」两档" },
    // 2026-09-12 补：汕头条目写「中心城区约 168 万」——汕头公报里「中心城区」只用于 GDP 分区，
    // 没有人口这一档，168 万其实接近潮阳区一个区的数。原规则要求紧跟「常住人口」四个字，漏掉了这种写法。
    // 「主城九区」（重庆的官方专名）不在此列：这里只匹配「中心城区/主城区」后面直接跟数字的形状。
    { re: /(中心城区|主城区)[^。；]{0,10}?[\d.,]+\s*万/, why: "中国的市级公报没有「中心城区/主城区人口」这一档（重庆的「主城九区」是例外，属官方专名）" },
    { re: /都会区人口|都会区[^。；]{0,12}?[\d.,]+\s*万/, why: "「都会区」在中国不是官方统计口径" },
  ],
  // known-errors C6-c-5：挪威 SSB 只有 kommune（市镇）与 tettsted（城区）两档，没有「市区」
  // 2026-09-08 那批 8 个挪威条目的 identity 全都写着「市区人口」—— 与中国那批同一形状，
  // 而且更隐蔽：同一个自造标签底下，narvik/alta 的数字其实是 tettsted、其余是 kommune。
  norway: [
    { re: /市区人口/, why: "挪威 SSB 只有 kommune（市镇）与 tettsted（城区）两档" },
    { re: /都会区[^。；]{0,12}?[\d.,]+\s*万/, why: "同上，SSB 没有「都会区」这一档；数字要么是 tettsted 被贴错标签，要么查无官方来源" },
    { re: /\bmetro(?:politan)? area\b/i, why: "SSB publishes no metropolitan-area tier" },
  ],
  // known-errors C6-c-5：CBS 约 2016 报告年度起停止发布 agglomeratie / stadsgewest；
  // 「兰斯塔德」从来不是一张按年发布的统计表。现行只有 gemeente / provincie / COROP。
  netherlands: [
    { re: /都会区[^。；]{0,12}?[\d.,]+\s*万/, why: "CBS 已停止发布 agglomeratie / stadsgewest，现行只有 gemeente / provincie / COROP" },
    { re: /兰斯塔德[^。；]{0,14}?[\d.,]+\s*万/, why: "「兰斯塔德」不是按年发布的官方统计单元" },
    { re: /\bmetro(?:politan)? area\b[^.;]{0,24}?[\d.,]+/i, why: "CBS publishes no agglomeration tier any more" },
  ],
  // known-errors C6-c-5：日本没有「市区人口」这个复合概念（「市」与「区」是平行的不同层级），
  // 也从未使用「都会区」——総務省的官方专名是「東京圏」「近畿大都市圏」「中京大都市圏」。
  japan: [
    { re: /市区人口/, why: "日本按「市区町村」逐一发布人口，没有「市区人口」这个复合口径" },
    { re: /都会区[^。；]{0,12}?[\d.,]+\s*万/, why: "総務省用的是「大都市圏」（東京圏/近畿/中京），从无「都会区」" },
  ],
  // known-errors C6-c-5：ISTAT 只有 comune 常住人口；città metropolitana 是行政建制不是统计口径
  italy: [
    { re: /市区人口/, why: "意大利 ISTAT 只发布 comune（市镇）常住人口" },
    { re: /都会区[^。；]{0,12}?[\d.,]+\s*万/, why: "ISTAT 没有「都会区」这一称谓；该写「大都会市（città metropolitana）」" },
  ],
  // known-errors C6-c-5：Stats NZ 只有 region / territorial authority / urban area 三档，
  // 「都会区」在这批条目里曾同时指代四种不同的东西（大区 / 四市相加 / 自造三区相加 / TA 辖区）。
  "new-zealand": [
    { re: /都会区[^。；]{0,12}?[\d.,]+\s*万/, why: "新西兰 Stats NZ 只有 region / territorial authority / urban area 三档" },
  ],
  // known-errors C6-c-4 ②：丹麦统计局只有 kommune 与 byområde 两档，没有「都会区」
  denmark: [
    { re: /都会区[^。；]{0,12}?[\d.,]+\s*万/, why: "丹麦统计局只有 kommune（市镇）与 byområde（城区）两档，没有「都会区」" },
    { re: /\bmetropolitan (?:area|population)\b[^.;]{0,24}?[\d.,]+\s*(?:million|thousand)/i, why: "Statistics Denmark publishes no metropolitan-area tier" },
  ],
  // 瑞士：BFS 的官方层级是 Gemeinde/commune（市镇）→ Kanton（州）→ Agglomeration（集聚区，
  // 见《Raumgliederungen der Schweiz》）。「市区人口」不是 BFS 用语；「城市连绵区」是本仓库
  // 自己造的说法，两个都不能当口径名用。「都会区」不列进来——巴塞尔的三国区、日内瓦的
  // 大日内瓦确有跨境机构在统计，只要写明发布方就是可核的（2026-09-09 核）。
  switzerland: [
    { re: /市区人口/, why: "瑞士联邦统计局只有市镇（Gemeinde/commune）、州与集聚区（Agglomeration）三档，没有「市区人口」" },
    { re: /城市连绵区/, why: "「城市连绵区」不是 BFS 的口径名，对应的官方档是「集聚区（Agglomeration）」" },
  ],
  // 冰岛：Hagstofa Íslands 的档是 sveitarfélag（市镇）、byggðakjarni/þéttbýlisstaður（城镇聚落）、
  // höfuðborgarsvæðið（首都区）。「市区人口」不是其中任何一档（2026-09-09 核）。
  iceland: [
    { re: /市区人口/, why: "冰岛统计局只有市镇、城镇聚落与首都区三档，没有「市区人口」" },
    { re: /都会区[^。；]{0,12}?[\d.,]+\s*万/, why: "冰岛统计局没有「都会区」这一档，首都区（höfuðborgarsvæðið）才是官方分组" },
  ],
  // 爱尔兰：CSO 的档是普查总人口（全国/各郡）、城市法定辖区（全国仅 5 座法定城市）、
  // 「城市及郊区」建成区（2022 年普查起启用）、以及只到 NUTS3 的年度估计。
  // **没有「都会区 / metro area」这一档**（2026-09-09 核，都柏林与利默里克两条都中过招）。
  // 瑞典**不**列进来：Stormalmö 是通行的统计概念、Göteborgsregionen 是有法人地位的市镇联合体，
  // 只要写明发布方与年份就是可核的 —— 与瑞士的巴塞尔三国区、大日内瓦同理。
  ireland: [
    { re: /都会区[^。；]{0,12}?[\d.,]+\s*万/, why: "爱尔兰 CSO 没有「都会区」这一档，官方档是「城市及郊区」建成区或郡" },
    { re: /\b(?:greater )?metro(?:politan)? area\b[^.;]{0,24}?[\d.,]+/i, why: "Ireland's CSO publishes no metropolitan-area tier — use the census city-and-suburbs count or the county" },
  ],
};

/**
 * 免责语：句子本身就在说「这个口径不存在 / 公报没单列」时不算命中 ——
 * 那正是**正确**的写法（D1b 拦的是「说了没有又给出一个数」，不是「说了没有」本身）。
 */
const CALIBER_DISCLAIMER =
  /(未单列|不单列|没有单列|没有这一档|不是[^。；]{0,14}官方|非官方|并未发布|没有发布|口径已停|已停止发布|does not (?:report|give|publish)|no official|not an official|not a single official)/i;

/**
 * **合法的例外**，不算命中：
 *
 * - **普查确实会单列市辖区**。「市区约 122 万（2020 年普查口径）」不是自造口径 ——
 *   人口普查按市辖区汇总，是有的；不存在的是**年度公报**里的「市区常住人口」。
 *   句子里点明了普查/市辖区就放过（与 C6d 对普查的豁免同一个道理：**口径写出来了就不算含糊**）。
 * - **跨境城市群**：哥本哈根—马尔默那句「连成跨国的都会区」说的是厄勒海峡两岸的城市群，
 *   不是在引用丹麦统计局的某一档数字。
 */
const CALIBER_OK =
  /(普查|市辖区|国势调查|跨国|跨境|census|cross-border)/i;

/** 条目 → 国家（travel 走城市注册表，terrain 走地形注册表） */
const COUNTRY_OF = new Map<string, string>();
for (const c of CITY_REGISTRY) COUNTRY_OF.set(`travel/${c.id}`, c.country);
for (const t of TERRAIN_REGISTRY) COUNTRY_OF.set(`terrain/${t.id}`, t.country);

/**
 * D1b：**一句话里先声明「公报没有单列市区人口」，紧接着又给出一个市区人口**。
 *
 * 三个真实实例（吉林市 / 乐山 / 宜昌，都只在英文版里）：中文老老实实写着
 * 「（公报未单列市区人口）」，英文却在同一句里多出一个「about 1.23 million in the
 * urban area」——那个 123 万还是隔壁镇江条目的数字。乐山 2024 年的城镇人口实为 177.1 万，
 * 与它对不上任何官方口径。
 *
 * 这不是「数字过期」也不是「查错了」，是**免责声明与数字自相矛盾**，
 * 逐条人工核只能撞见其中两个，第三个是靠这条规则扫出来的。
 */
const NO_URBAN_FIGURE_ZH = /（?(?:公报)?(?:未|不)单列市(?:区|辖区)人口）?/;
const NO_URBAN_FIGURE_EN =
  /\bdoes not (?:report|give|publish) a separate urban[- ](?:core|district|area)\b/i;
const HAS_URBAN_FIGURE_ZH = /市(?:区|辖区)约\s*[\d.,]+\s*万/;
const HAS_URBAN_FIGURE_EN =
  /\b(?:about|some|roughly)\s+[\d.,]+\s*(?:million|thousand)?\s+in the urban (?:area|core|districts?)\b/i;

/**
 * C6i：**同一个条目的 identity 与 howItWorks 给出两个互相矛盾的「全市人口」**。
 *
 * 这是这一轮反复撞到的形状，而且逐条人工核实很容易滑过去 —— 注意力在「这个数对不对」上，
 * 不在「同一篇里另一段写的是什么」上。已经抓到的：
 *   首尔 950 万 / 960 万（两段都过期，还互相打架）
 *   库尔勒「五十余万」/「2020 年约 78 万」（前者查无出处）
 *   济州市「含外国籍 50 万」/「内国人 49 万」（两个口径都没写明）
 *   胡志明市 900 万 /「2025 年并区后 1400 万」（前者是并区前的数）
 *   芹苴 120 万 / 420 万（同上）
 *   塞萨洛尼基 identity 改对了「地区单位」、howItWorks 还写着「都会区」
 *
 * 判据：两段各取一个「全市档」的人口数（句中带次级口径词的不算），相差超过 5% 就报。
 * 两段年份不同且其中一段是普查数时放过 —— 普查数与年度估计本来就会差一截。
 */
const CROSS_SUB_ZH =
  /(市区|城区|都会区|市辖区|新区|地区单位|城市吸引区|建成区|首都圈|都市圈|都市圏|大都市圈|大都市圏|东京圈|特别区|区部|大区|这个省|该省|全省|全国|户籍|城镇人口|游客|学生|外国籍|老城|镇|口径|登记人口|城市本身|市镇|县|岛上|全岛|府|州|旧城|市中心)/;
const CROSS_SUB_EN =
  /\b(urban|metropolitan|metro|agglomeration|regional unit|capital area|built-up|province|prefecture|state|nationwide|visitors|students|foreign residents|old town|with the towns of|district|districts|special wards|New Area|estates|register|registered)\b/i;
/**
 * **这里曾经有和 C6 一模一样的洞**（2026-09-09 修）：判据要求句子里出现「人口 / 居民」，
 * 于是「温尼伯……**都会区约 85 万人**」这种句子 C6i 根本看不见 —— 那一段压根没进比较。
 * C6 的同一个洞在 2026-09-08 补过一次（`PERISHABLE_ZH` 加了「口径词 + 数字 + 万人」分支），
 * **但补一处不等于补了另一处**：两条规则各有一份自己的正则，改一份的时候没想到另一份。
 * 这也是为什么温尼伯「把 CSD 的数贴上都会区标签」那条要靠人工核实才发现。
 */
const CROSS_POP_ZH = /(常住人口|登录人口|普查人口|人口|居民)|(都会区|大都会市|城区|市域|全市|全岛|连绵区)[^。；！？]{0,8}?\d[\d.,]*\s*万人/;
const CROSS_POP_EN = /\b(population|people|residents|inhabitants)\b|\b(metro(?:politan)? area|urban area|conurbation)\b[^.;!?]{0,24}?[\d,]{4,}/i;
/** 中文数字紧跟在「人口」后；英文数字通常在词之前，所以取句中第一个带单位的数 */
const CROSS_NUM_ZH = /(?:人口|居民)[^。；！？]{0,10}?([\d.,]+)\s*(万|亿)/;
const CROSS_NUM_EN = /([\d.,]+)\s*(million|thousand)\b/i;
/** 口径词直接接数字的写法（「都会区约 85 万人」），C6 那边也补过同一条分支 */
const CROSS_NUM_ZH_CALIBER = /(?:都会区|大都会市|城区|市域|全市|全岛|连绵区)[^。；！？]{0,8}?([\d.,]+)\s*(万|亿)人/;
const CROSS_NUM_EN_CALIBER = /(?:metro(?:politan)? area|urban area|conurbation)[^.;!?]{0,24}?([\d,]{4,})(?!\s*(?:million|thousand))/i;
/** 两种写法都试一遍，先试带「人口/居民」的那种 */
function crossNumMatch(s: string, zh: boolean): RegExpExecArray | null {
  return (zh ? CROSS_NUM_ZH : CROSS_NUM_EN).exec(s)
    ?? (zh ? CROSS_NUM_ZH_CALIBER : CROSS_NUM_EN_CALIBER).exec(s);
}
/**
 * 次级口径词只在**数字所在的那个分句**里才算数。
 *
 * 整句一刀切会误伤：格拉茨的 identity 是「…人口约29万，坐落在穆尔河畔，**老城**1999年列入
 * 世界遗产」——「老城」跟人口毫无关系，却把整句排除掉了，这条真的「两段人口打架」因此漏报。
 * 反过来，定长窗口又太短：「with a **metropolitan** population of about 2.6 million」里
 * 那个词离数字 35 个字符，固定 22 字的窗口够不着，于是都会区人口被当成了市人口。
 * 按分句切（逗号/顿号/分号之间）两头都能兼顾。
 */
const CLAUSE_SPLIT = /[，,、；;—]/;
/**
 * 取数字所在的分句，**再往前多带一个分句** —— 口径词经常落在前一个分句里：
 * 「而 1990 年起开发的**浦东新区**，面积约 1,210 平方公里，2025 年末常住人口约 580 万」
 * 「华欣是巴蜀府下的一个**县**和一个"镇级自治市"，**县**约 840 平方公里，2025 年人口约 12 万」
 * 只看数字那一句，这两个都会被当成全市人口。往后不多带：格拉茨的「老城1999年列入世界遗产」
 * 在数字之后，多带就会把一条真的冲突排除掉。
 */
function clauseOf(s: string, at: number, len: number): string {
  let start = 0;
  let seen = 0;
  for (let i = at - 1; i >= 0; i--) {
    if (CLAUSE_SPLIT.test(s[i]!)) {
      seen++;
      if (seen === 2) { start = i + 1; break; }
    }
  }
  let end = s.length;
  for (let i = at + len; i < s.length; i++) if (CLAUSE_SPLIT.test(s[i]!)) { end = i; break; }
  return s.slice(start, end);
}
function nearSub(s: string, at: number, len: number, zh: boolean): boolean {
  return (zh ? CROSS_SUB_ZH : CROSS_SUB_EN).test(clauseOf(s, at, len));
}
/**
 * 差多少算矛盾。
 *
 * 原本定在 20% 而不是 5%：5%–15% 的差绝大多数是「identity 写了个不带年份的整数、
 * howItWorks 写了个带年份的精确值」，那本来就由 **C6（缺年份）** 管，
 * 在这里重报一遍只会把真正的冲突淹掉。20% 以上的差才是这条规则要抓的东西 ——
 * 口径搞错了（拿都会区当市、拿省当市）、主体搞错了、或者行政区划合并后一段没跟上。
 *
 * **2026-09-12 收到 0.15，依据是一次回测。** 越南那一轮人工核实抓到 `quy-nhon`：
 * identity 写「约 58 万（2024 年，改制前口径）」、howItWorks 写「2022 年约 48 万」，
 * 而 58 万**查无出处**（平定省政府官网给原归仁市 481,110／2022）。两数相差 **17.2%** ——
 * 正好卡在 20% 阈值之下，所以 C6i 一声不响，只能靠人读出来。
 * 把阈值收到 0.15 之后：① 拿修正前的 `lib/travel-content.*`（commit `da11de7`）回测，**这一条报了出来**；
 * ② 在修正后的全库上跑，**新增 0 处误报**。两边都验过才改的 —— 不然就是拿一个猜测换另一个猜测。
 */
const CROSS_TOLERANCE = 0.15;

/**
 * **C6i-b：两段都点名「都会区」这一档，数字却对不上**（2026-09-09 加）。
 *
 * C6i 主轨**有意只比「全市档」** —— `CROSS_SUB_ZH` 里明明白白列着「都会区」，
 * 带子口径的数字一律被 `nearSub` 排除掉。这个设计是对的（拿都会区的数去和市的数比会满屏误报），
 * 但它留下一个盲区：**两段都写「都会区」、数字却对不上**的情况，主轨根本看不见。
 *
 * 温尼伯就是这么漏掉的：identity 写「**都会区**约 85 万」，howItWorks 写
 * 「市域约 85 万、**都会区**约 95 万」—— 85 万其实是 CSD（市镇）的数被贴上了都会区的标签，
 * 两个数字都是真的、错的是标签。卡尔加里（161 万 vs 184 万）是同一种。
 *
 * 所以另开一条轨：**只在两段都点名同一档口径时比**，容差收到 5% ——
 * 都指同一个东西，就没有「一段取整、一段精确」的余地了。
 */
const SAME_CALIBER_TOLERANCE = 0.05;
const METRO_CALIBER_ZH = /(都会区|大都会市|城市连绵区|连绵建成区)/;
const METRO_CALIBER_EN = /\b(metro(?:politan)? area|metropolitan region|conurbation)\b/i;
/** 取**紧跟在口径词之后**的那个数字（同一句里往往还有市域人口，不能取错） */
const METRO_NUM_ZH = /(?:都会区|大都会市|城市连绵区|连绵建成区)[^。；！？]{0,10}?([\d.,]+)\s*(万|亿)/;
const METRO_NUM_EN_FWD =
  /(?:metro(?:politan)? area|metropolitan region|conurbation)[^.;!?]{0,30}?([\d.,]+)\s*(million|thousand)?/i;
const METRO_NUM_EN_BACK =
  /([\d.,]+)\s*(million|thousand)?\s+in the (?:metro(?:politan)? area|metropolitan region)/i;
function metroValue(s: string, zh: boolean): number | null {
  const m = zh
    ? METRO_NUM_ZH.exec(s)
    : (METRO_NUM_EN_BACK.exec(s) ?? METRO_NUM_EN_FWD.exec(s));
  if (!m) return null;
  const n = parseFloat(m[1]!.replace(/,/g, ""));
  if (!Number.isFinite(n)) return null;
  const unit = (m[2] ?? "").toLowerCase();
  return n * (unit === "亿" ? 1e8 : unit === "万" ? 1e4 : unit === "million" ? 1e6 : unit === "thousand" ? 1e3 : 1);
}

function crossValue(s: string, zh: boolean): number | null {
  const m = crossNumMatch(s, zh);
  if (!m) return null;
  const n = parseFloat(m[1]!.replace(/,/g, ""));
  if (!Number.isFinite(n)) return null;
  // 口径词分支（英文）没有单位词，数字本身就是人数
  const unit = (m[2] ?? "").toLowerCase();
  const mult =
    unit === "亿" ? 1e8 : unit === "万" ? 1e4 : unit === "million" ? 1e6 : unit === "thousand" ? 1e3 : 1;
  return n * mult;
}

interface CrossRow { section: string; sentence: string; v: number; census: boolean }

type Rule =
  | "C6-人口数字缺年份"
  | "C6d-数字不是最新一期"
  | "C6e-价格缺年份"
  | "C6f-签证天数写死"
  | "C1a-主观最高级"
  | "C1b-排名断言缺口径"
  | "C6i-同条目两段人口打架"
  | "D1b-说了没单列市区人口又给出市区人口"
  | "C6k-用了这个国家没有的口径"
  | "D4-粘连句"
  | "C6l-机场航点列表";

interface Hit {
  rule: Rule;
  kind: string;
  id: string;
  section: string;
  lang: string;
  sentence: string;
}

/**
 * C6d 的豁免表：这些条目的年份**确实旧**，但已经核实过「这就是能查到的最新一期」
 * （该级别公报不含人口 / 那年起只发户籍 / 那一版删了人口章节 / 公报取不到数）。
 *
 * 没有这张表的话，每一轮核实都会把它们重新报出来，然后下一个人再去核一遍、
 * 再得出同样的结论 —— 或者更糟，为了让计数下降而硬填一个没核到的数字。
 * `recheckAfter` 到期会单独提示，那才是这张表真正的用处：它把「什么时候该回来看」
 * 这件事从人的记忆里搬进了脚本。
 */
interface Exempt { key: string; reason: string; confirmedOn: string; recheckAfter: string }
const exemptFile: { entries: Exempt[] } = JSON.parse(await readFile(EXEMPT_PATH, "utf8"));
const exemptBy = new Map(exemptFile.entries.map((e) => [e.key, e]));

const hits: Hit[] = [];
const exempted: { key: string; e: Exempt }[] = [];
/** C6i 用：按「条目 + 语言」攒 identity / howItWorks 两段的全市人口 */
const crossByEntry = new Map<string, { seg: (typeof segments)[number]; rows: CrossRow[] }>();
/** C6i-b 用：同样按条目+语言，但只攒**点名了「都会区」这一档**的数字 */
const metroByEntry = new Map<string, { seg: (typeof segments)[number]; rows: CrossRow[] }>();

const { segments } = await collectTtsSegments();

for (const seg of segments) {
  const zh = seg.lang === "zh-CN";

  const noUrban = zh ? NO_URBAN_FIGURE_ZH : NO_URBAN_FIGURE_EN;
  const hasUrban = zh ? HAS_URBAN_FIGURE_ZH : HAS_URBAN_FIGURE_EN;
  if (noUrban.test(seg.text) && hasUrban.test(seg.text)) {
    hits.push({
      ...seg,
      rule: "D1b-说了没单列市区人口又给出市区人口",
      sentence: seg.text.match(/.{0,40}(?:未单列|does not (?:report|give|publish) a separate).{0,90}/i)?.[0] ?? "",
    });
  }

  if ((zh ? DEST_LIST_ZH : DEST_LIST_EN).test(seg.text)) {
    hits.push({ ...seg, rule: "C6l-机场航点列表", sentence: seg.text.match(zh ? DEST_LIST_ZH : DEST_LIST_EN)?.[0] ?? "" });
  }

  if (RUN_ON.test(seg.text)) {
    hits.push({ ...seg, rule: "D4-粘连句", sentence: seg.text.match(/.{0,30}[a-z)][.!?][A-Z].{0,30}/)?.[0] ?? "" });
  }

  const crossable =
    seg.kind === "travel" && (seg.section === "identity" || seg.section === "howItWorks");

  for (const s of splitSentences(seg.text)) {
    if (crossable && (zh ? METRO_CALIBER_ZH : METRO_CALIBER_EN).test(s)) {
      const mv = metroValue(s, zh);
      if (mv !== null && mv >= 1000) {
        const key = `${seg.id}|${seg.lang}`;
        if (!metroByEntry.has(key)) metroByEntry.set(key, { seg, rows: [] });
        metroByEntry.get(key)!.rows.push({ section: seg.section, sentence: s, v: mv, census: false });
      }
    }
    if (crossable && (zh ? CROSS_POP_ZH : CROSS_POP_EN).test(s)) {
      const nm = crossNumMatch(s, zh);
      const v = nm && !nearSub(s, nm.index, nm[0].length, zh) ? crossValue(s, zh) : null;
      if (v !== null && v >= 1000) {
        const key = `${seg.id}|${seg.lang}`;
        if (!crossByEntry.has(key)) crossByEntry.set(key, { seg, rows: [] });
        crossByEntry.get(key)!.rows.push({
          section: seg.section,
          sentence: s,
          v,
          census: (zh ? CENSUS_ZH : CENSUS_EN).test(s),
        });
      }
    }
    if (isMissingYear(s, zh)) {
      hits.push({ ...seg, rule: "C6-人口数字缺年份", sentence: s });
    }
    if (isStale(s, zh)) {
      const key = `${seg.kind}/${seg.id}/${seg.section}`;
      const ex = exemptBy.get(key);
      if (ex) {
        if (!exempted.some((x) => x.key === key)) exempted.push({ key, e: ex });
      } else {
        hits.push({ ...seg, rule: "C6d-数字不是最新一期", sentence: s });
      }
    }
    // 判据全部来自 scripts/claim-rules.ts —— 与 list:claims 共用同一份，
    // 「之一」「按…计」这类限定语的豁免也在那里（达沃「按行政区划面积计菲律宾最大」
    // 是正确写法的范例，不该被报出来）。
    if (isSubjectiveSuperlative(s, zh)) {
      hits.push({ ...seg, rule: "C1a-主观最高级", sentence: s });
    }
    if (isPriceWithoutYear(s, zh)) {
      hits.push({ ...seg, rule: "C6e-价格缺年份", sentence: s });
    }
    if (isHardcodedVisa(s, zh)) {
      hits.push({ ...seg, rule: "C6f-签证天数写死", sentence: s });
    }
    if (isUnqualifiedRank(s, zh)) {
      hits.push({ ...seg, rule: "C1b-排名断言缺口径", sentence: s });
    }
    // C6k：按条目所属国家查「这个国家没有的口径」；句子自己在说「没有这一档」时放过
    const country = COUNTRY_OF.get(`${seg.kind}/${seg.id}`);
    const fakes = country ? FAKE_CALIBER[country] : undefined;
    if (fakes && !CALIBER_DISCLAIMER.test(s) && !CALIBER_OK.test(s)) {
      for (const f of fakes) {
        if (f.re.test(s)) {
          hits.push({ ...seg, rule: "C6k-用了这个国家没有的口径", sentence: `${s}  ← ${f.why}` });
          break;
        }
      }
    }
  }
}

// C6i：两段的「全市档」人口对不上
for (const [, { seg, rows }] of crossByEntry) {
  const ident = rows.filter((r) => r.section === "identity");
  const hiw = rows.filter((r) => r.section === "howItWorks");
  if (!ident.length || !hiw.length) continue;
  const a = ident.reduce((m, r) => (r.v > m.v ? r : m));
  const b = hiw.reduce((m, r) => (r.v > m.v ? r : m));
  // 普查数与年度估计本来就会差一截，只要写明了就不算矛盾
  if (a.census !== b.census) continue;
  if (Math.abs(a.v - b.v) / Math.max(a.v, b.v) <= CROSS_TOLERANCE) continue;
  hits.push({
    ...seg,
    rule: "C6i-同条目两段人口打架",
    sentence: `identity「${a.sentence.slice(0, 45)}」 vs howItWorks「${b.sentence.slice(0, 45)}」`,
  });
}

// C6i-b：两段都点名「都会区」这一档，数字却对不上（容差 5%）
for (const [, { seg, rows }] of metroByEntry) {
  const ident = rows.filter((r) => r.section === "identity");
  const hiw = rows.filter((r) => r.section === "howItWorks");
  if (!ident.length || !hiw.length) continue;
  const a = ident.reduce((m, r) => (r.v > m.v ? r : m));
  const b = hiw.reduce((m, r) => (r.v > m.v ? r : m));
  if (Math.abs(a.v - b.v) / Math.max(a.v, b.v) <= SAME_CALIBER_TOLERANCE) continue;
  hits.push({
    ...seg,
    rule: "C6i-同条目两段人口打架",
    sentence: `【都会区档】identity「${a.sentence.slice(0, 40)}」 vs howItWorks「${b.sentence.slice(0, 40)}」`,
  });
}

// ── 报告 ───────────────────────────────────────────────────────────────

const counts: Record<string, number> = {};
for (const h of hits) counts[h.rule] = (counts[h.rule] ?? 0) + 1;

const RULES: Rule[] = [
  "C6-人口数字缺年份",
  "C6d-数字不是最新一期",
  "C6e-价格缺年份",
  "C6f-签证天数写死",
  "C1a-主观最高级",
  "C1b-排名断言缺口径",
  "C6i-同条目两段人口打架",
  "D1b-说了没单列市区人口又给出市区人口",
  "C6k-用了这个国家没有的口径",
  "D4-粘连句",
  "C6l-机场航点列表",
];

// ── C6d 豁免：已核实「这就是最新一期」的条目 ────────────────────────────
const today = new Date().toISOString().slice(0, 7);
const due = exempted.filter((x) => x.e.recheckAfter <= today);
const stale = [...exemptBy.keys()].filter((k) => !exempted.some((x) => x.key === k));

console.log("易过期断言扫描（对应 docs/known-errors.md 的错误类型）");
console.log(`  扫描了 ${segments.length} 段正文`);
console.log(`  今年 ${FRESH_SINCE + 1}，统计时点早于 ${FRESH_SINCE} 年的算「不是最新一期」（普查、法定人口等定义上滞后的口径除外）\n`);

console.log(
  `  C6d 另有 ${exempted.length} 个条目已核实「这就是最新一期」，列在 ${EXEMPT_PATH} 里不计入\n`,
);

for (const rule of RULES) {
  const n = counts[rule] ?? 0;
  console.log(`${rule}  ${n} 处`);
  const sample = hits.filter((h) => h.rule === rule).slice(0, SHOW);
  for (const h of sample) {
    const where = `${h.kind}/${h.id}/${h.section} [${h.lang}]`;
    console.log(`    ${where.padEnd(46)} ${h.sentence.slice(0, 60)}`);
  }
  if (n > SHOW) console.log(`    …还有 ${n - SHOW} 处（--show=N 看更多）`);
  console.log();
}

// ── 棘轮 ───────────────────────────────────────────────────────────────

interface Baseline {
  note: string;
  updatedOn: string;
  counts: Record<string, number>;
}

if (UPDATE) {
  const baseline: Baseline = {
    note: "npm run check:claims 的棘轮基线：这几类计数只许降不许升。降下来之后用 --update-baseline 刷新。",
    updatedOn: new Date().toISOString().slice(0, 10),
    counts: Object.fromEntries(RULES.map((r) => [r, counts[r] ?? 0])),
  };
  await writeFile(BASELINE_PATH, `${JSON.stringify(baseline, null, 2)}\n`);
  console.log(`已刷新基线 ${BASELINE_PATH}`);
  process.exit(0);
}

let baseline: Baseline | null = null;
try {
  baseline = JSON.parse(await readFile(BASELINE_PATH, "utf8")) as Baseline;
} catch {
  console.log(`没有找到 ${BASELINE_PATH} —— 先跑一次 npm run check:claims -- --update-baseline 建立基线`);
  process.exit(0);
}

/**
 * **C6 与 C6d 合成一个预算**，而不是各卡各的。
 *
 * 给一个没年份的数字补上年份，是明确要求的做法（CLAUDE.md「写新内容时的硬性习惯」①），
 * 但它会把这一句从 C6 挪到 C6d —— 如果那个年份比去年还早的话。分开卡的结果是：
 * 补年份反而让棘轮变红，于是**正确的做法被惩罚，最省事的做法是干脆不写年份**。
 * 2026-09-08 印尼那批就撞上了：C6 −14、C6d +10，总量其实降了 4。
 *
 * 合成一个预算之后，「把无年份改成有年份」不会失败，
 * 而「凭空多写一句没年份的人口」照样会失败 —— 后者才是这条棘轮要拦的东西。
 */
const COMBINED: Record<string, Rule[]> = {
  "C6 族（缺年份 + 不是最新一期）": ["C6-人口数字缺年份", "C6d-数字不是最新一期"],
};
const COMBINED_MEMBERS = new Set(Object.values(COMBINED).flat());

let failures = 0;
console.log(`棘轮（基线 ${baseline.updatedOn}，只许降不许升）`);
for (const rule of RULES) {
  const now = counts[rule] ?? 0;
  const was = baseline.counts[rule] ?? 0;
  const delta = now - was;
  const inCombined = COMBINED_MEMBERS.has(rule);
  const mark = inCombined ? "·" : delta > 0 ? "✗" : delta < 0 ? "↓" : " ";
  console.log(`  ${mark} ${rule.padEnd(22)} 基线 ${String(was).padStart(5)} → 现在 ${String(now).padStart(5)}${delta === 0 ? "" : `（${delta > 0 ? "+" : ""}${delta}）`}`);
  if (delta > 0 && !inCombined) failures++;
}
for (const [name, members] of Object.entries(COMBINED)) {
  const now = members.reduce((a, r) => a + (counts[r] ?? 0), 0);
  const was = members.reduce((a, r) => a + (baseline!.counts[r] ?? 0), 0);
  const delta = now - was;
  const mark = delta > 0 ? "✗" : delta < 0 ? "↓" : " ";
  console.log(`  ${mark} ${name.padEnd(20)} 基线 ${String(was).padStart(5)} → 现在 ${String(now).padStart(5)}${delta === 0 ? "" : `（${delta > 0 ? "+" : ""}${delta}）`}  ← 这一行才卡`);
  if (delta > 0) failures++;
}

if (failures > 0) {
  console.error(
    `\n${failures} 类比基线更差了 —— 新写的内容里加进了没年份的数字、引的不是最新一期、` +
      `没加限定的最高级，或者拼接漏了空格。` +
      `要么改掉，要么在 docs/known-errors.md 里说明为什么这次是例外。`,
  );
} else {
  const down = RULES.filter((r) => (counts[r] ?? 0) < (baseline!.counts[r] ?? 0)).length;
  if (down > 0) console.log(`\n有 ${down} 类降下来了 —— 可以跑 npm run check:claims -- --update-baseline 固化`);
}

// ── 豁免表的两条提醒（不计入失败，但必须看得见）────────────────────────
if (due.length) {
  console.log(`\n⏰ ${EXEMPT_PATH} 里有 ${due.length} 条到了该回去复核的时间（recheckAfter ≤ ${today}）：`);
  for (const x of due) console.log(`   ${x.key}  —— ${x.e.reason.slice(0, 60)}…（${x.e.recheckAfter} 起）`);
  console.log("   到期不等于数字错了，只是「该去看看有没有新一期」。核完把 confirmedOn / recheckAfter 往后推。");
}
if (stale.length) {
  console.log(`\n🧹 ${EXEMPT_PATH} 里有 ${stale.length} 条已经用不上了（对应句子不再触发 C6d，可能是已经更新到最新一期）：`);
  for (const k of stale) console.log(`   ${k}`);
  console.log("   留着会掩盖以后真的过期 —— 确认之后删掉。");
}

process.exit(failures > 0 ? 1 : 0);
