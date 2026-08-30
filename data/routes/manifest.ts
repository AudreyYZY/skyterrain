/**
 * 航线清单 —— 所有航线 JSON 的唯一注册点。
 * lib/routes.ts 与 scripts/check-routes.ts 都从这里取，新增航线只改这一处。
 *
 * 相对路径 + import attributes，兼容 `node --experimental-strip-types`。
 */

import type { FlightRoute } from "../../types/route.ts";

import pekUrc from "./pek-urc.json" with { type: "json" };
import ctuLxa from "./ctu-lxa.json" with { type: "json" };
import canLxa from "./can-lxa.json" with { type: "json" };
import urcKhg from "./urc-khg.json" with { type: "json" };
// 中国 · 批 1（长江 / 华东 / 西北）
import shaKmg from "./sha-kmg.json" with { type: "json" };
import ctuSha from "./ctu-sha.json" with { type: "json" };
import canPek from "./can-pek.json" with { type: "json" };
import xiyUrc from "./xiy-urc.json" with { type: "json" };
// 中国 · 批 2（青藏 / 华北 / 东北）
import xnnLxa from "./xnn-lxa.json" with { type: "json" };
import ckgLxa from "./ckg-lxa.json" with { type: "json" };
import pekInc from "./pek-inc.json" with { type: "json" };
import pekHrb from "./pek-hrb.json" with { type: "json" };
// 中国 · 批 3（南北纵贯 / 华南 / 海南）
import hrbCan from "./hrb-can.json" with { type: "json" };
import pekSha from "./pek-sha.json" with { type: "json" };
import canHak from "./can-hak.json" with { type: "json" };
import pekKwl from "./pek-kwl.json" with { type: "json" };
// 中国 · 批 4（秦岭 / 塔里木 / 云藏 / 辽东）
import xiyCtu from "./xiy-ctu.json" with { type: "json" };
import urcHtn from "./urc-htn.json" with { type: "json" };
import kmgLxa from "./kmg-lxa.json" with { type: "json" };
import shaHrb from "./sha-hrb.json" with { type: "json" };
// 日本国内
import hndItm from "./hnd-itm.json" with { type: "json" };
import hndCts from "./hnd-cts.json" with { type: "json" };
import hndFuk from "./hnd-fuk.json" with { type: "json" };
import kojOka from "./koj-oka.json" with { type: "json" };
import hndKoj from "./hnd-koj.json" with { type: "json" };
import ctsFuk from "./cts-fuk.json" with { type: "json" };
import ctsMmb from "./cts-mmb.json" with { type: "json" };
import itmCts from "./itm-cts.json" with { type: "json" };
import itmKum from "./itm-kum.json" with { type: "json" };
import hndTtj from "./hnd-ttj.json" with { type: "json" };
// 国际 · 中国 ↔ 日本
import pvgHnd from "./pvg-hnd.json" with { type: "json" };
import pekHnd from "./pek-hnd.json" with { type: "json" };
import pvgKix from "./pvg-kix.json" with { type: "json" };
// 澳大利亚国内
import sydPer from "./syd-per.json" with { type: "json" };
import sydCns from "./syd-cns.json" with { type: "json" };
import melSyd from "./mel-syd.json" with { type: "json" };
import melPer from "./mel-per.json" with { type: "json" };
import melAdl from "./mel-adl.json" with { type: "json" };
import adlAyq from "./adl-ayq.json" with { type: "json" };
import bneDrw from "./bne-drw.json" with { type: "json" };
import melHba from "./mel-hba.json" with { type: "json" };
// 新西兰国内
import aklWlg from "./akl-wlg.json" with { type: "json" };
import aklChc from "./akl-chc.json" with { type: "json" };
import wlgChc from "./wlg-chc.json" with { type: "json" };
import chcZqn from "./chc-zqn.json" with { type: "json" };
import aklRot from "./akl-rot.json" with { type: "json" };
// 美国国内
import jfkLax from "./jfk-lax.json" with { type: "json" };
import jfkSfo from "./jfk-sfo.json" with { type: "json" };
import ordSfo from "./ord-sfo.json" with { type: "json" };
import denLas from "./den-las.json" with { type: "json" };
import sfoLas from "./sfo-las.json" with { type: "json" };
import miaJfk from "./mia-jfk.json" with { type: "json" };
import msyLax from "./msy-lax.json" with { type: "json" };
// 加拿大国内
import yyzYvr from "./yyz-yvr.json" with { type: "json" };
import yulYvr from "./yul-yvr.json" with { type: "json" };
import yyzYul from "./yyz-yul.json" with { type: "json" };
import yyzYhz from "./yyz-yhz.json" with { type: "json" };
import yhzYyt from "./yhz-yyt.json" with { type: "json" };
import yvrYyc from "./yvr-yyc.json" with { type: "json" };
import yycYwg from "./yyc-ywg.json" with { type: "json" };
import yegYyz from "./yeg-yyz.json" with { type: "json" };
// 英国国内
import lhrEdi from "./lhr-edi.json" with { type: "json" };
import lhrGla from "./lhr-gla.json" with { type: "json" };
import lhrInv from "./lhr-inv.json" with { type: "json" };
import lhrBfs from "./lhr-bfs.json" with { type: "json" };
import brsEdi from "./brs-edi.json" with { type: "json" };
import ediBfs from "./edi-bfs.json" with { type: "json" };
import lhrAbz from "./lhr-abz.json" with { type: "json" };
// 冰岛国内
import rkvAey from "./rkv-aey.json" with { type: "json" };
import rkvEgs from "./rkv-egs.json" with { type: "json" };
import rkvIfj from "./rkv-ifj.json" with { type: "json" };
import rkvHfn from "./rkv-hfn.json" with { type: "json" };
import aeyEgs from "./aey-egs.json" with { type: "json" };
import rkvHzk from "./rkv-hzk.json" with { type: "json" };
// 瑞士国内
import zrhLug from "./zrh-lug.json" with { type: "json" };
import zrhGva from "./zrh-gva.json" with { type: "json" };
import gvaLug from "./gva-lug.json" with { type: "json" };
// 挪威国内
import oslBgo from "./osl-bgo.json" with { type: "json" };
import oslTrd from "./osl-trd.json" with { type: "json" };
import oslSvg from "./osl-svg.json" with { type: "json" };
import oslTos from "./osl-tos.json" with { type: "json" };
import trdBoo from "./trd-boo.json" with { type: "json" };
import tosAlf from "./tos-alf.json" with { type: "json" };
import bgoTrd from "./bgo-trd.json" with { type: "json" };
import svgBgo from "./svg-bgo.json" with { type: "json" };

export const ALL_ROUTES: FlightRoute[] = [
  pekUrc,
  ctuLxa,
  canLxa,
  urcKhg,
  shaKmg,
  ctuSha,
  canPek,
  xiyUrc,
  xnnLxa,
  ckgLxa,
  pekInc,
  pekHrb,
  hrbCan,
  pekSha,
  canHak,
  pekKwl,
  xiyCtu,
  urcHtn,
  kmgLxa,
  shaHrb,
  hndItm,
  hndCts,
  hndFuk,
  kojOka,
  hndKoj,
  ctsFuk,
  ctsMmb,
  itmCts,
  itmKum,
  hndTtj,
  pvgHnd,
  pekHnd,
  pvgKix,
  sydPer,
  sydCns,
  melSyd,
  melPer,
  melAdl,
  adlAyq,
  bneDrw,
  melHba,
  aklWlg,
  aklChc,
  wlgChc,
  chcZqn,
  aklRot,
  jfkLax,
  jfkSfo,
  ordSfo,
  denLas,
  sfoLas,
  miaJfk,
  msyLax,
  yyzYvr,
  yulYvr,
  yyzYul,
  yyzYhz,
  yhzYyt,
  yvrYyc,
  yycYwg,
  yegYyz,
  lhrEdi,
  lhrGla,
  lhrInv,
  lhrBfs,
  brsEdi,
  ediBfs,
  lhrAbz,
  rkvAey,
  rkvEgs,
  rkvIfj,
  rkvHfn,
  aeyEgs,
  rkvHzk,
  zrhLug,
  zrhGva,
  gvaLug,
  oslBgo,
  oslTrd,
  oslSvg,
  oslTos,
  trdBoo,
  tosAlf,
  bgoTrd,
  svgBgo,
] as unknown as FlightRoute[];
