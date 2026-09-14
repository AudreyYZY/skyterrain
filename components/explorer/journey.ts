/**
 * 底部航线面板的数据：当前大洲下有航线的国家，每国分国内 / 国际两组。
 * 2026-09-14 从 ExplorerApp 的 useMemo 搬出成纯函数，行为不变。
 */
import type { Language } from "@/lib/i18n";
import { countriesForContinent, getCountryMeta } from "@/lib/regions";
import { routeCountriesForContinent, routesForCountry } from "@/lib/routes";

export function journeyCountrySlugsFor(activeRegion: string): string[] {
  return routeCountriesForContinent(countriesForContinent(activeRegion));
}

export function journeyGroupsFor(slugs: string[], language: Language) {
  return slugs.map((slug) => {
    const m = getCountryMeta(slug);
    const { domestic, international } = routesForCountry(slug);
    return {
      slug,
      name: m ? (language === "zh-CN" ? m.name : m.nameEn) : slug,
      domestic,
      international,
    };
  });
}
