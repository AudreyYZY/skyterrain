import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import type { RailGroup } from "@/components/IndexRail";
import {
  getCitiesForCountry,
  getCountriesForContinent,
  getCountryOverview,
} from "@/lib/places-registry";

/**
 * 旅游模式左侧目录 —— 当前大洲下，每个有内容的国家一个分组：
 *   分组标题 = 国家名；组内 = [国家概览] + 该国城市。
 * 只有一个国家时体验和以前一致（一个可展开的分组）。
 */
export function travelRailGroups(continent: string, language: Language): RailGroup[] {
  const countries = getCountriesForContinent(continent);
  return countries.map((slug) => {
    const ov = getCountryOverview(slug);
    const countryName = ov
      ? language === "zh-CN"
        ? ov.nameZh
        : ov.nameEn
      : slug;
    const cities = getCitiesForCountry(slug);
    return {
      type: `country-${slug}`,
      label: countryName,
      glyph: "⌂",
      items: [
        { id: `${slug}-overview`, name: t("rail.countryOverview", language) },
        ...cities.map((c) => ({
          id: c.id,
          name: language === "zh-CN" ? c.nameZh : c.nameEn,
        })),
      ],
    };
  });
}
