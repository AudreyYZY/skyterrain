/**
 * 解说句 → 航点锚点表（学习模式）——**由 npm run gen:anchors 生成，可人工编辑**。
 *
 * perSentence[i] = 第 i 句在讲哪个航点（resolveRouteWaypoints 结果里的下标）。
 * 数组长度必须等于该篇解说的句数，且单调不减 —— npm run check:anchors 会卡这两条。
 *
 * source:
 *   "auto"   脚本按航点名匹配推导出来的，重跑生成脚本会被覆盖
 *   "manual" 人工校对/补写的，生成脚本原样保留、绝不覆盖
 *
 * 改了解说文字就要重跑生成脚本（auto 条目）或手工调整（manual 条目），
 * 否则句数对不上，自检会报错。
 */

import type { Language } from "@/lib/i18n";

export interface RouteAnchorEntry {
  /** 与解说句一一对应的航点下标 */
  perSentence: number[];
  source: "auto" | "manual";
}

export const ROUTE_ANCHORS: Record<string, Partial<Record<Language, RouteAnchorEntry>>> = {
  "akl-chc": {
    "zh-CN": { perSentence: [0, 1, 3, 3, 3, 4, 4, 6], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 3, 3, 4, 5, 6], source: "auto" },
  },
  "akl-rot": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2, 2], source: "auto" },
  },
  "akl-wlg": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3, 4, 4], source: "auto" },
  },
  "ala-cit": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "ala-hsa": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "arn-got": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "arn-klr": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "arn-krn": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "arn-mmx": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "arn-osd": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "arn-vby": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "ath-cfu": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "ath-chq": {
    "zh-CN": { perSentence: [0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "ath-her": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "ath-ioa": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "ath-jtr": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "ath-rho": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "ath-skg": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "bcn-agp": {
    "zh-CN": { perSentence: [0, 0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1], source: "auto" },
  },
  "bcn-pmi": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "ber-cgn": {
    "zh-CN": { perSentence: [0, 1, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2], source: "auto" },
  },
  "ber-muc": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "bgo-trd": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 4, 5], source: "auto" },
  },
  "bkk-cnx": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "bkk-usm": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "bne-drw": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 3, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 3, 3, 3, 3, 3], source: "auto" },
  },
  "brs-edi": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 3, 3], source: "auto" },
  },
  "can-bkk": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 1, 1], source: "auto" },
  },
  "can-hak": {
    "zh-CN": { perSentence: [0, 1, 3, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 4, 4, 4, 4], source: "auto" },
  },
  "can-lxa": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 3], source: "auto" },
  },
  "can-mnl": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2], source: "auto" },
  },
  "can-ngb": {
    "zh-CN": { perSentence: [0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 2], source: "auto" },
  },
  "can-nng": {
    "zh-CN": { perSentence: [0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "can-pek": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1, 2, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 0, 0, 0, 0, 2, 3, 3, 3], source: "auto" },
  },
  "can-syd": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2, 2, 2, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2, 2, 2, 3, 4, 4], source: "auto" },
  },
  "can-tna": {
    "zh-CN": { perSentence: [0, 1, 1, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 3, 4, 4], source: "auto" },
  },
  "can-wnz": {
    "zh-CN": { perSentence: [0, 1, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 2], source: "auto" },
  },
  "cdg-bod": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 2], source: "auto" },
  },
  "cdg-mrs": {
    "zh-CN": { perSentence: [0, 1, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 3, 3], source: "auto" },
  },
  "cdg-nce": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4], source: "auto" },
  },
  "cdg-nte": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "cdg-tls": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "cgk-dps": {
    "zh-CN": { perSentence: [0, 0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1], source: "auto" },
  },
  "cgk-kno": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1], source: "auto" },
  },
  "cgk-sub": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "cgk-yia": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "chc-zqn": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 3, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 3, 3, 4], source: "auto" },
  },
  "ckg-lxa": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2, 2, 2], source: "auto" },
  },
  "cph-aal": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "cph-aar": {
    "zh-CN": { perSentence: [0, 0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1], source: "auto" },
  },
  "cph-bll": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "cph-rnn": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "cts-fuk": {
    "zh-CN": { perSentence: [0, 1, 3, 3, 4, 5, 5, 5], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 4, 4, 5, 5, 5], source: "auto" },
  },
  "cts-mmb": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 1, 1, 1], source: "auto" },
  },
  "ctu-lhw": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "ctu-lxa": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1], source: "auto" },
  },
  "ctu-sha": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4, 5, 5, 5], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4, 4, 4, 4], source: "auto" },
  },
  "dad-sgn": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "den-las": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 2, 3, 3], source: "auto" },
  },
  "dmk-cei": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "dmk-hkt": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "dmk-kbv": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1], source: "auto" },
  },
  "dmk-uth": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "dps-lbj": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "dub-cfn": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "dub-kir": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3], source: "auto" },
  },
  "edi-bfs": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2], source: "auto" },
  },
  "esb-ayt": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "fco-bri": {
    "zh-CN": { perSentence: [0, 1, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 4, 4], source: "auto" },
  },
  "fco-cag": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "fco-cta": {
    "zh-CN": { perSentence: [0, 1, 3, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 4], source: "auto" },
  },
  "fco-lin": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
  },
  "fco-nap": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "fco-vce": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
  },
  "fra-drs": {
    "zh-CN": { perSentence: [0, 1, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2], source: "auto" },
  },
  "fra-ham": {
    "zh-CN": { perSentence: [0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "fra-muc": {
    "zh-CN": { perSentence: [0, 1, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2], source: "auto" },
  },
  "gmp-cju": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "gmp-kpo": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "gmp-pus": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "gmp-rsu": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "gmp-usn": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1], source: "auto" },
  },
  "han-dad": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "han-hui": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "han-sgn": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "han-vca": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "hel-ivl": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "hel-kao": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "hel-kuo": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "hel-mhq": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "hel-oul": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "hel-rvn": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "hnd-cts": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2, 2, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2, 2, 2, 4, 4], source: "auto" },
  },
  "hnd-fuk": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 4, 4, 4], source: "auto" },
  },
  "hnd-itm": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2, 4, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 4, 5, 5, 5], source: "auto" },
  },
  "hnd-koj": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 4, 5, 5, 5], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 3, 4, 5, 5, 5], source: "auto" },
  },
  "hnd-ttj": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 3, 3, 3, 3], source: "auto" },
  },
  "hrb-can": {
    "zh-CN": { perSentence: [0, 1, 3, 5, 6, 6, 6], source: "auto" },
    "en-US": { perSentence: [0, 0, 3, 5, 7, 7, 7], source: "auto" },
  },
  "ist-ayt": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "ist-bjv": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "ist-dnz": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "ist-esb": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "ist-nav": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "ist-tzx": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "itm-cts": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2, 4, 5, 6, 6], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3, 4, 5, 6, 6], source: "auto" },
  },
  "itm-kum": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 3, 3, 3, 3], source: "auto" },
  },
  "jfk-lax": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4, 5], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4, 5], source: "auto" },
  },
  "jfk-sfo": {
    "zh-CN": { perSentence: [0, 1, 1, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
  },
  "kch-myy": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "kmg-jhg": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2], source: "auto" },
  },
  "kmg-lxa": {
    "zh-CN": { perSentence: [0, 0, 2, 3, 3, 3, 5, 6], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 3, 3, 3, 3], source: "auto" },
  },
  "koj-oka": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2, 2, 2, 2], source: "auto" },
  },
  "kul-bki": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "kul-kbr": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "kul-kch": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "kul-lgk": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "lhr-abz": {
    "zh-CN": { perSentence: [0, 1, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 2, 3, 4, 4], source: "auto" },
  },
  "lhr-bfs": {
    "zh-CN": { perSentence: [0, 1, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 0, 3, 4, 4], source: "auto" },
  },
  "lhr-edi": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 2, 4, 4], source: "auto" },
  },
  "lhr-gla": {
    "zh-CN": { perSentence: [0, 1, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 2, 3, 4, 4], source: "auto" },
  },
  "lhr-inv": {
    "zh-CN": { perSentence: [0, 1, 1, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 2, 2, 3, 3, 3], source: "auto" },
  },
  "lin-nap": {
    "zh-CN": { perSentence: [0, 1, 2, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3], source: "auto" },
  },
  "lis-fao": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4], source: "auto" },
  },
  "lis-fnc": {
    "zh-CN": { perSentence: [0, 1, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 3], source: "auto" },
  },
  "lis-pdl": {
    "zh-CN": { perSentence: [0, 0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "lys-mrs": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
  },
  "mad-bcn": {
    "zh-CN": { perSentence: [0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "mad-bio": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "mad-grx": {
    "zh-CN": { perSentence: [0, 1, 2, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3], source: "auto" },
  },
  "mad-scq": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 2, 2, 2], source: "auto" },
  },
  "mad-svq": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "mad-tfn": {
    "zh-CN": { perSentence: [0, 1, 3, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 4], source: "auto" },
  },
  "mel-adl": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 2, 2], source: "auto" },
  },
  "mel-hba": {
    "zh-CN": { perSentence: [0, 1, 1, 1, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1, 1, 1, 1], source: "auto" },
  },
  "mel-per": {
    "zh-CN": { perSentence: [0, 1, 1, 1, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1, 2, 2, 2], source: "auto" },
  },
  "mel-syd": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 1, 2, 2], source: "auto" },
  },
  "mia-jfk": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "mnl-drp": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "mnl-dvo": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "mnl-tag": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "mrs-aja": {
    "zh-CN": { perSentence: [0, 0, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "msy-lax": {
    "zh-CN": { perSentence: [0, 0, 0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 0, 0, 1, 2, 3, 3], source: "auto" },
  },
  "muc-drs": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "muc-ham": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "nap-cta": {
    "zh-CN": { perSentence: [0, 1, 1, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3], source: "auto" },
  },
  "nce-aja": {
    "zh-CN": { perSentence: [0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "nqz-ala": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "nqz-sco": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "opo-fao": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4], source: "auto" },
  },
  "opo-fnc": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "opo-pdl": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "ord-sfo": {
    "zh-CN": { perSentence: [0, 0, 0, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 3, 3], source: "auto" },
  },
  "osl-bgo": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "osl-svg": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "osl-tos": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
  },
  "osl-trd": {
    "zh-CN": { perSentence: [0, 1, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 4, 4], source: "auto" },
  },
  "pek-ber": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
  },
  "pek-bru": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 3, 3, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 3, 3, 4, 4, 4], source: "auto" },
  },
  "pek-cdg": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 3, 3, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 3, 3, 4, 4, 4], source: "auto" },
  },
  "pek-cgk": {
    "zh-CN": { perSentence: [0, 0, 0, 0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 0, 0, 0, 1, 2, 3, 3], source: "auto" },
  },
  "pek-cph": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
  },
  "pek-csx": {
    "zh-CN": { perSentence: [0, 1, 3, 3, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 3, 4], source: "auto" },
  },
  "pek-dlc": {
    "zh-CN": { perSentence: [0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "pek-eny": {
    "zh-CN": { perSentence: [0, 1, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "pek-fco": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 3, 4, 5], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 3, 4, 5], source: "auto" },
  },
  "pek-foc": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 3, 3], source: "auto" },
  },
  "pek-hak": {
    "zh-CN": { perSentence: [0, 1, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 4, 4], source: "auto" },
  },
  "pek-hld": {
    "zh-CN": { perSentence: [0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "pek-hnd": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 2, 4, 4, 4], source: "auto" },
  },
  "pek-hrb": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1, 1, 1, 1], source: "auto" },
  },
  "pek-icn": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 2, 2], source: "auto" },
  },
  "pek-inc": {
    "zh-CN": { perSentence: [0, 0, 1, 2, 2, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 2, 3, 4, 4], source: "auto" },
  },
  "pek-ist": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
  },
  "pek-jfk": {
    "zh-CN": { perSentence: [0, 0, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 7, 8, 9, 9], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 7, 8, 9], source: "auto" },
  },
  "pek-kul": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 2, 2], source: "auto" },
  },
  "pek-kwl": {
    "zh-CN": { perSentence: [0, 1, 3, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 3, 3, 3], source: "auto" },
  },
  "pek-lhr": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 3, 3, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 3, 3, 4, 4, 4], source: "auto" },
  },
  "pek-nqz": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3, 3], source: "auto" },
  },
  "pek-osl": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 2, 2, 3, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 2, 2, 3, 4], source: "auto" },
  },
  "pek-prg": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4, 5, 5], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4, 5, 5], source: "auto" },
  },
  "pek-sha": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3, 3], source: "auto" },
  },
  "pek-sin": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 3, 3], source: "auto" },
  },
  "pek-txn": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 3, 3], source: "auto" },
  },
  "pek-ubn": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2], source: "auto" },
  },
  "pek-urc": {
    "zh-CN": { perSentence: [0, 0, 1, 2, 2, 2, 4, 5, 5, 6, 6, 6], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 2, 2, 4, 5, 5, 5, 5, 5, 5], source: "auto" },
  },
  "pek-waw": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
  },
  "pek-wus": {
    "zh-CN": { perSentence: [0, 1, 2, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3], source: "auto" },
  },
  "pek-yih": {
    "zh-CN": { perSentence: [0, 1, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2], source: "auto" },
  },
  "pek-yty": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "pek-yyz": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 4, 5, 5], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 3, 4, 5, 5], source: "auto" },
  },
  "pek-zuh": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2, 2, 2], source: "auto" },
  },
  "pkx-ams": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 3, 3, 4, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 3, 3, 4, 4, 4], source: "auto" },
  },
  "pkx-hel": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 3, 4, 4], source: "auto" },
  },
  "pkx-lis": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6], source: "auto" },
  },
  "pus-cju": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1], source: "auto" },
  },
  "pvg-akl": {
    "zh-CN": { perSentence: [0, 0, 1, 2, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 2, 3, 4, 4], source: "auto" },
  },
  "pvg-arn": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 3, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 3, 3, 3, 4, 4], source: "auto" },
  },
  "pvg-ath": {
    "zh-CN": { perSentence: [0, 0, 0, 1, 2, 3, 3, 5], source: "auto" },
    "en-US": { perSentence: [0, 0, 0, 1, 2, 3, 4, 5], source: "auto" },
  },
  "pvg-dat": {
    "zh-CN": { perSentence: [0, 1, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2], source: "auto" },
  },
  "pvg-dub": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 3, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 3, 3, 3, 4, 5], source: "auto" },
  },
  "pvg-han": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1, 3, 3], source: "auto" },
  },
  "pvg-hnd": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 2, 3, 4, 4, 4], source: "auto" },
  },
  "pvg-kix": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 3, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 3, 4, 4, 4], source: "auto" },
  },
  "pvg-mad": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 2, 3, 3, 3, 3, 4, 5], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 2, 3, 3, 3, 3, 4, 5], source: "auto" },
  },
  "pvg-vie": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 3, 3, 3, 3, 4, 5], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 3, 3, 3, 3, 4, 5], source: "auto" },
  },
  "pvg-zrh": {
    "zh-CN": { perSentence: [0, 0, 1, 2, 2, 3, 3, 4, 5, 5], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 2, 2, 3, 3, 4, 5, 5], source: "auto" },
  },
  "rkv-aey": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2, 2], source: "auto" },
  },
  "rkv-egs": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
  },
  "rkv-hfn": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
  },
  "rkv-ifj": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 1, 1], source: "auto" },
  },
  "scl-anf": {
    "zh-CN": { perSentence: [0, 0, 0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 0, 1, 1], source: "auto" },
  },
  "scl-ccp": {
    "zh-CN": { perSentence: [0, 1, 1, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1, 1, 1], source: "auto" },
  },
  "scl-cjc": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 1, 1, 1], source: "auto" },
  },
  "scl-ipc": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 2, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 0, 0, 0, 2, 2, 2, 2, 2], source: "auto" },
  },
  "scl-lsc": {
    "zh-CN": { perSentence: [0, 1, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1, 1], source: "auto" },
  },
  "scl-pmc": {
    "zh-CN": { perSentence: [0, 0, 2, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 2, 2, 2], source: "auto" },
  },
  "scl-puq": {
    "zh-CN": { perSentence: [0, 0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 2, 3, 3], source: "auto" },
  },
  "scl-zco": {
    "zh-CN": { perSentence: [0, 0, 2, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 2, 2, 2], source: "auto" },
  },
  "sdk-bki": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "sfo-las": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
  },
  "sgn-pqc": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "sha-hrb": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 2, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 2, 2, 2], source: "auto" },
  },
  "sha-kmg": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 4, 4, 4, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 0, 2, 3, 4, 4, 4, 4], source: "auto" },
  },
  "sha-lya": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 1], source: "auto" },
  },
  "svg-bgo": {
    "zh-CN": { perSentence: [0, 0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "syd-avv": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 2], source: "auto" },
  },
  "syd-cns": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 4, 4], source: "auto" },
  },
  "syd-per": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 4, 5, 5, 5], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 4, 5, 5], source: "auto" },
  },
  "tos-alf": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2], source: "auto" },
  },
  "trd-boo": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 1], source: "auto" },
  },
  "ubn-coq": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "ubn-dlz": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "ubn-hvd": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "ubn-ulg": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "upg-mdc": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "urc-htn": {
    "zh-CN": { perSentence: [0, 1, 1, 2, 2, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 0, 0, 2, 2, 2, 2], source: "auto" },
  },
  "urc-khg": {
    "zh-CN": { perSentence: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2], source: "auto" },
  },
  "vie-grz": {
    "zh-CN": { perSentence: [0, 1, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 3], source: "auto" },
  },
  "vie-inn": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 4], source: "auto" },
  },
  "vie-klu": {
    "zh-CN": { perSentence: [0, 1, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 3], source: "auto" },
  },
  "waw-gdn": {
    "zh-CN": { perSentence: [0, 0, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1], source: "auto" },
  },
  "waw-krk": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "waw-poz": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "waw-rze": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "waw-szz": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "waw-wro": {
    "zh-CN": { perSentence: [0, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "wlg-chc": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3, 3, 3], source: "auto" },
  },
  "xiy-ctu": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2, 2, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 2, 2, 3, 3], source: "auto" },
  },
  "xiy-urc": {
    "zh-CN": { perSentence: [0, 1, 2, 5, 5, 5, 6], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 2, 5, 5, 5, 5], source: "auto" },
  },
  "xiy-yzy": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
  },
  "xnn-lxa": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 2, 3, 5, 5, 5], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 2, 3, 3, 3, 3], source: "auto" },
  },
  "yeg-yyz": {
    "zh-CN": { perSentence: [0, 0, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
  },
  "yhz-yyt": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 2, 2, 2, 2], source: "auto" },
  },
  "yul-yvr": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
  },
  "yvr-yyc": {
    "zh-CN": { perSentence: [0, 0, 1, 1, 1], source: "auto" },
    "en-US": { perSentence: [0, 0, 1, 1, 1], source: "auto" },
  },
  "yyc-ywg": {
    "zh-CN": { perSentence: [0, 1, 1, 3, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 2, 3, 3], source: "auto" },
  },
  "yyz-yhz": {
    "zh-CN": { perSentence: [0, 1, 2, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 3, 3], source: "auto" },
  },
  "yyz-yul": {
    "zh-CN": { perSentence: [0, 1, 2, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1, 1], source: "auto" },
  },
  "yyz-yvr": {
    "zh-CN": { perSentence: [0, 1, 2, 2, 4, 4], source: "auto" },
    "en-US": { perSentence: [0, 1, 2, 3, 4, 4], source: "auto" },
  },
  "zag-dbv": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "zag-osi": {
    "zh-CN": { perSentence: [0, 0, 2], source: "auto" },
    "en-US": { perSentence: [0, 0, 2], source: "auto" },
  },
  "zag-puy": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "zag-spu": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 2], source: "auto" },
  },
  "zag-zad": {
    "zh-CN": { perSentence: [0, 1, 2], source: "auto" },
    "en-US": { perSentence: [0, 1, 1], source: "auto" },
  },
  "zrh-gva": {
    "zh-CN": { perSentence: [0, 1, 3, 3], source: "auto" },
    "en-US": { perSentence: [0, 1, 3, 3], source: "auto" },
  },
};
