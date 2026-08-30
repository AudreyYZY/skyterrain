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
] as unknown as FlightRoute[];
