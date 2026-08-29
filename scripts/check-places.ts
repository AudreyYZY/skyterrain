/**
 * 旅游地点自检（无测试框架依赖）
 *   运行: node --experimental-strip-types scripts/check-places.ts
 *
 * 校验:
 *   - 城市 / 机场坐标合法
 *   - country 在 COUNTRY_TO_CONTINENT 中，且其大洲 ∈ REGIONS
 *   - id 唯一、有 source
 *   - 机场 IATA 三字码
 *   - 每个城市 + 每个国家概览有 zh + en travel-content
 */

import {
  CITY_REGISTRY,
  COUNTRY_OVERVIEWS,
  COUNTRY_TO_CONTINENT,
} from "../lib/places-registry.ts";
import { REGIONS } from "../lib/regions.ts";
import { TRAVEL_CONTENT_ZH } from "../lib/travel-content.zh.ts";
import { TRAVEL_CONTENT_EN } from "../lib/travel-content.en.ts";

const hasZh = (id: string) => Boolean(TRAVEL_CONTENT_ZH[id]);
const hasEn = (id: string) => Boolean(TRAVEL_CONTENT_EN[id]);

/** 缺 travel-content 视为硬失败 */
const CONTENT_REQUIRED = true;

let failures = 0;
const fail = (m: string) => {
  console.log("✗ " + m);
  failures++;
};
const warn = (m: string) => console.log("· " + m);

const regionIds = new Set(REGIONS.map((r) => r.id));
const seen = new Set<string>();

const checkCountry = (label: string, country: string) => {
  const continent = COUNTRY_TO_CONTINENT[country];
  if (!continent) fail(`${label}: country "${country}" 不在 COUNTRY_TO_CONTINENT`);
  else if (!regionIds.has(continent))
    fail(`${label}: country "${country}" → 大洲 "${continent}" 不在 REGIONS`);
};

for (const c of CITY_REGISTRY) {
  if (seen.has(c.id)) fail(`duplicate id ${c.id}`);
  seen.add(c.id);
  checkCountry(c.id, c.country);
  if (c.lat < -90 || c.lat > 90 || c.lon < -180 || c.lon > 180)
    fail(`${c.id}: bad coord ${c.lat},${c.lon}`);
  if (c.airport) {
    const a = c.airport;
    if (a.lat < -90 || a.lat > 90 || a.lon < -180 || a.lon > 180)
      fail(`${c.id}: bad airport coord`);
    if (!/^[A-Z]{3}$/.test(a.iata)) fail(`${c.id}: bad IATA ${a.iata}`);
  }
  if (!c.source) fail(`${c.id}: missing source`);

  if (!hasZh(c.id)) (CONTENT_REQUIRED ? fail : warn)(`${c.id}: no zh travel-content`);
  if (!hasEn(c.id)) (CONTENT_REQUIRED ? fail : warn)(`${c.id}: no en travel-content`);
}

for (const o of COUNTRY_OVERVIEWS) {
  checkCountry(`${o.country}-overview`, o.country);
  const id = `${o.country}-overview`;
  if (!hasZh(id)) (CONTENT_REQUIRED ? fail : warn)(`${id}: no zh content`);
  if (!hasEn(id)) (CONTENT_REQUIRED ? fail : warn)(`${id}: no en content`);
}

console.log(
  `\n${CITY_REGISTRY.length} 城市, ${COUNTRY_OVERVIEWS.length} 概览, ${failures} 项异常`,
);
process.exit(failures > 0 ? 1 : 0);
