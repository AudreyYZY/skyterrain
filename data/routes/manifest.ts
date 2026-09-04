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
// 中国 · 批 5（Tier 1 省会缺口：福州/济南/长沙/南宁/海口/兰州）
import pekFoc from "./pek-foc.json" with { type: "json" };
import canTna from "./can-tna.json" with { type: "json" };
import pekCsx from "./pek-csx.json" with { type: "json" };
import canNng from "./can-nng.json" with { type: "json" };
import pekHak from "./pek-hak.json" with { type: "json" };
import ctuLhw from "./ctu-lhw.json" with { type: "json" };
// 中国 · 批 6（Tier 2 热门城市批1：大连/宁波/大同/洛阳/黄山/张掖）
import pekDlc from "./pek-dlc.json" with { type: "json" };
import canNgb from "./can-ngb.json" with { type: "json" };
import pvgDat from "./pvg-dat.json" with { type: "json" };
import shaLya from "./sha-lya.json" with { type: "json" };
import xiyYzy from "./xiy-yzy.json" with { type: "json" };
import pekTxn from "./pek-txn.json" with { type: "json" };
// 中国 · 批 7（Tier 2 热门城市批2：景洪/珠海/景德镇/温州/扬州/武夷山）
import kmgJhg from "./kmg-jhg.json" with { type: "json" };
import pekZuh from "./pek-zuh.json" with { type: "json" };
import shaJdz from "./sha-jdz.json" with { type: "json" };
import canWnz from "./can-wnz.json" with { type: "json" };
import pekYty from "./pek-yty.json" with { type: "json" };
import pekWus from "./pek-wus.json" with { type: "json" };
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
// 法国国内
import cdgNce from "./cdg-nce.json" with { type: "json" };
import cdgMrs from "./cdg-mrs.json" with { type: "json" };
import cdgTls from "./cdg-tls.json" with { type: "json" };
import cdgBod from "./cdg-bod.json" with { type: "json" };
import cdgStr from "./cdg-str.json" with { type: "json" };
import cdgNte from "./cdg-nte.json" with { type: "json" };
import lysMrs from "./lys-mrs.json" with { type: "json" };
import mrsAja from "./mrs-aja.json" with { type: "json" };
import nceAja from "./nce-aja.json" with { type: "json" };
// 意大利国内
import fcoLin from "./fco-lin.json" with { type: "json" };
import fcoVce from "./fco-vce.json" with { type: "json" };
import fcoNap from "./fco-nap.json" with { type: "json" };
import fcoCta from "./fco-cta.json" with { type: "json" };
import fcoCag from "./fco-cag.json" with { type: "json" };
import linVce from "./lin-vce.json" with { type: "json" };
import linNap from "./lin-nap.json" with { type: "json" };
import napCta from "./nap-cta.json" with { type: "json" };
import fcoBri from "./fco-bri.json" with { type: "json" };
// 西班牙
import madBcn from "./mad-bcn.json" with { type: "json" };
import madSvq from "./mad-svq.json" with { type: "json" };
import madGrx from "./mad-grx.json" with { type: "json" };
import madBio from "./mad-bio.json" with { type: "json" };
import madScq from "./mad-scq.json" with { type: "json" };
import bcnPmi from "./bcn-pmi.json" with { type: "json" };
import madTfn from "./mad-tfn.json" with { type: "json" };
import bcnAgp from "./bcn-agp.json" with { type: "json" };
// 德国
import berMuc from "./ber-muc.json" with { type: "json" };
import berHam from "./ber-ham.json" with { type: "json" };
import berCgn from "./ber-cgn.json" with { type: "json" };
import mucHam from "./muc-ham.json" with { type: "json" };
import fraMuc from "./fra-muc.json" with { type: "json" };
import fraDrs from "./fra-drs.json" with { type: "json" };
import mucDrs from "./muc-drs.json" with { type: "json" };
import fraHam from "./fra-ham.json" with { type: "json" };
// 希腊
import athSkg from "./ath-skg.json" with { type: "json" };
import athHer from "./ath-her.json" with { type: "json" };
import athChq from "./ath-chq.json" with { type: "json" };
import athRho from "./ath-rho.json" with { type: "json" };
import athCfu from "./ath-cfu.json" with { type: "json" };
import athIoa from "./ath-ioa.json" with { type: "json" };
import athJtr from "./ath-jtr.json" with { type: "json" };
import athKlx from "./ath-klx.json" with { type: "json" };
// 葡萄牙
import lisFao from "./lis-fao.json" with { type: "json" };
import lisFnc from "./lis-fnc.json" with { type: "json" };
import lisPdl from "./lis-pdl.json" with { type: "json" };
import opoFnc from "./opo-fnc.json" with { type: "json" };
import opoPdl from "./opo-pdl.json" with { type: "json" };
import opoFao from "./opo-fao.json" with { type: "json" };
// 荷兰
import amsMst from "./ams-mst.json" with { type: "json" };
import amsGrq from "./ams-grq.json" with { type: "json" };
// 奥地利
import vieInn from "./vie-inn.json" with { type: "json" };
import vieGrz from "./vie-grz.json" with { type: "json" };
import vieKlu from "./vie-klu.json" with { type: "json" };
// 爱尔兰
import dubKir from "./dub-kir.json" with { type: "json" };
import dubCfn from "./dub-cfn.json" with { type: "json" };
// 丹麦
import cphAar from "./cph-aar.json" with { type: "json" };
import cphAal from "./cph-aal.json" with { type: "json" };
import cphBll from "./cph-bll.json" with { type: "json" };
import cphRnn from "./cph-rnn.json" with { type: "json" };
// 瑞典
import arnKrn from "./arn-krn.json" with { type: "json" };
import arnGot from "./arn-got.json" with { type: "json" };
import arnMmx from "./arn-mmx.json" with { type: "json" };
import arnVby from "./arn-vby.json" with { type: "json" };
import arnKlr from "./arn-klr.json" with { type: "json" };
import arnOsd from "./arn-osd.json" with { type: "json" };
// 芬兰
import helRvn from "./hel-rvn.json" with { type: "json" };
import helOul from "./hel-oul.json" with { type: "json" };
import helKao from "./hel-kao.json" with { type: "json" };
import helIvl from "./hel-ivl.json" with { type: "json" };
import helKuo from "./hel-kuo.json" with { type: "json" };
import helMhq from "./hel-mhq.json" with { type: "json" };
// 泰国
import bkkCnx from "./bkk-cnx.json" with { type: "json" };
import bkkUsm from "./bkk-usm.json" with { type: "json" };
import dmkUth from "./dmk-uth.json" with { type: "json" };
import dmkCei from "./dmk-cei.json" with { type: "json" };
import dmkHkt from "./dmk-hkt.json" with { type: "json" };
import dmkKbv from "./dmk-kbv.json" with { type: "json" };
// 韩国
import gmpCju from "./gmp-cju.json" with { type: "json" };
import gmpPus from "./gmp-pus.json" with { type: "json" };
import gmpUsn from "./gmp-usn.json" with { type: "json" };
import gmpRsu from "./gmp-rsu.json" with { type: "json" };
import gmpKpo from "./gmp-kpo.json" with { type: "json" };
import pusCju from "./pus-cju.json" with { type: "json" };
// 波兰
import wawKrk from "./waw-krk.json" with { type: "json" };
import wawGdn from "./waw-gdn.json" with { type: "json" };
import wawWro from "./waw-wro.json" with { type: "json" };
import wawPoz from "./waw-poz.json" with { type: "json" };
import wawRze from "./waw-rze.json" with { type: "json" };
import wawSzz from "./waw-szz.json" with { type: "json" };
// 越南
import hanSgn from "./han-sgn.json" with { type: "json" };
import hanDad from "./han-dad.json" with { type: "json" };
import sgnPqc from "./sgn-pqc.json" with { type: "json" };
import hanVca from "./han-vca.json" with { type: "json" };
import hanHui from "./han-hui.json" with { type: "json" };
import dadSgn from "./dad-sgn.json" with { type: "json" };
// 蒙古
import ubnHvd from "./ubn-hvd.json" with { type: "json" };
import ubnUlg from "./ubn-ulg.json" with { type: "json" };
import ubnMxv from "./ubn-mxv.json" with { type: "json" };
import ubnDlz from "./ubn-dlz.json" with { type: "json" };
import ubnCoq from "./ubn-coq.json" with { type: "json" };
// 马来西亚
import kulPen from "./kul-pen.json" with { type: "json" };
import kulBki from "./kul-bki.json" with { type: "json" };
import kulKch from "./kul-kch.json" with { type: "json" };
import kulLgk from "./kul-lgk.json" with { type: "json" };
import kulKbr from "./kul-kbr.json" with { type: "json" };
import sdkBki from "./sdk-bki.json" with { type: "json" };
import kchMyy from "./kch-myy.json" with { type: "json" };
// 菲律宾
import mnlCeb from "./mnl-ceb.json" with { type: "json" };
import mnlDvo from "./mnl-dvo.json" with { type: "json" };
import mnlPps from "./mnl-pps.json" with { type: "json" };
import mnlMph from "./mnl-mph.json" with { type: "json" };
import mnlUsu from "./mnl-usu.json" with { type: "json" };
import mnlTag from "./mnl-tag.json" with { type: "json" };
import mnlDrp from "./mnl-drp.json" with { type: "json" };
import cebDvo from "./ceb-dvo.json" with { type: "json" };
// 印度尼西亚
import cgkDps from "./cgk-dps.json" with { type: "json" };
import cgkSub from "./cgk-sub.json" with { type: "json" };
import cgkKno from "./cgk-kno.json" with { type: "json" };
import cgkUpg from "./cgk-upg.json" with { type: "json" };
import cgkBpn from "./cgk-bpn.json" with { type: "json" };
import cgkPkn from "./cgk-pkn.json" with { type: "json" };
import dpsLbj from "./dps-lbj.json" with { type: "json" };
import upgMdc from "./upg-mdc.json" with { type: "json" };
import cgkYia from "./cgk-yia.json" with { type: "json" };
// 哈萨克斯坦
import nqzAla from "./nqz-ala.json" with { type: "json" };
import alaSco from "./ala-sco.json" with { type: "json" };
import nqzCit from "./nqz-cit.json" with { type: "json" };
import alaCit from "./ala-cit.json" with { type: "json" };
import nqzPlx from "./nqz-plx.json" with { type: "json" };
import nqzPwq from "./nqz-pwq.json" with { type: "json" };
import nqzSco from "./nqz-sco.json" with { type: "json" };
import alaHsa from "./ala-hsa.json" with { type: "json" };
// 土耳其
import istEsb from "./ist-esb.json" with { type: "json" };
import istAdb from "./ist-adb.json" with { type: "json" };
import istAyt from "./ist-ayt.json" with { type: "json" };
import istNav from "./ist-nav.json" with { type: "json" };
import istTzx from "./ist-tzx.json" with { type: "json" };
import istDnz from "./ist-dnz.json" with { type: "json" };
import istBjv from "./ist-bjv.json" with { type: "json" };
import esbAyt from "./esb-ayt.json" with { type: "json" };
import esbKya from "./esb-kya.json" with { type: "json" };
// 克罗地亚
import zagSpu from "./zag-spu.json" with { type: "json" };
import zagDbv from "./zag-dbv.json" with { type: "json" };
import zagZad from "./zag-zad.json" with { type: "json" };
import zagPuy from "./zag-puy.json" with { type: "json" };
import zagOsi from "./zag-osi.json" with { type: "json" };
import zagRjk from "./zag-rjk.json" with { type: "json" };
// 中国 · 批 8（Tier 2 批3：呼伦贝尔/宜昌/延安/格尔木）
import pekHld from "./pek-hld.json" with { type: "json" };
import pekYih from "./pek-yih.json" with { type: "json" };
import pekEny from "./pek-eny.json" with { type: "json" };
import ctuGoq from "./ctu-goq.json" with { type: "json" };

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
  pekFoc,
  canTna,
  pekCsx,
  canNng,
  pekHak,
  ctuLhw,
  pekDlc,
  canNgb,
  pvgDat,
  shaLya,
  xiyYzy,
  pekTxn,
  kmgJhg,
  pekZuh,
  shaJdz,
  canWnz,
  pekYty,
  pekWus,
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
  cdgNce,
  cdgMrs,
  cdgTls,
  cdgBod,
  cdgStr,
  cdgNte,
  lysMrs,
  mrsAja,
  nceAja,
  fcoLin,
  fcoVce,
  fcoNap,
  fcoCta,
  fcoCag,
  linVce,
  linNap,
  napCta,
  fcoBri,
  madBcn,
  madSvq,
  madGrx,
  madBio,
  madScq,
  bcnPmi,
  madTfn,
  bcnAgp,
  berMuc,
  berHam,
  berCgn,
  mucHam,
  fraMuc,
  fraDrs,
  mucDrs,
  fraHam,
  athSkg,
  athHer,
  athChq,
  athRho,
  athCfu,
  athIoa,
  athJtr,
  athKlx,
  lisFao,
  lisFnc,
  lisPdl,
  opoFnc,
  opoPdl,
  opoFao,
  amsMst,
  amsGrq,
  vieInn,
  vieGrz,
  vieKlu,
  dubKir,
  dubCfn,
  cphAar,
  cphAal,
  cphBll,
  cphRnn,
  arnKrn,
  arnGot,
  arnMmx,
  arnVby,
  arnKlr,
  arnOsd,
  helRvn,
  helOul,
  helKao,
  helIvl,
  helKuo,
  helMhq,
  bkkCnx,
  bkkUsm,
  dmkUth,
  dmkCei,
  dmkHkt,
  dmkKbv,
  gmpCju,
  gmpPus,
  gmpUsn,
  gmpRsu,
  gmpKpo,
  pusCju,
  wawKrk,
  wawGdn,
  wawWro,
  wawPoz,
  wawRze,
  wawSzz,
  hanSgn,
  hanDad,
  sgnPqc,
  hanVca,
  hanHui,
  dadSgn,
  ubnHvd,
  ubnUlg,
  ubnMxv,
  ubnDlz,
  ubnCoq,
  kulPen,
  kulBki,
  kulKch,
  kulLgk,
  kulKbr,
  sdkBki,
  kchMyy,
  mnlCeb,
  mnlDvo,
  mnlPps,
  mnlMph,
  mnlUsu,
  mnlTag,
  mnlDrp,
  cebDvo,
  cgkDps,
  cgkSub,
  cgkKno,
  cgkUpg,
  cgkBpn,
  cgkPkn,
  dpsLbj,
  upgMdc,
  cgkYia,
  nqzAla,
  alaSco,
  nqzCit,
  alaCit,
  nqzPlx,
  nqzPwq,
  nqzSco,
  alaHsa,
  istEsb,
  istAdb,
  istAyt,
  istNav,
  istTzx,
  istDnz,
  istBjv,
  esbAyt,
  esbKya,
  zagSpu,
  zagDbv,
  zagZad,
  zagPuy,
  zagOsi,
  zagRjk,
  pekHld,
  pekYih,
  pekEny,
  ctuGoq,
] as unknown as FlightRoute[];
