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
] as unknown as FlightRoute[];
