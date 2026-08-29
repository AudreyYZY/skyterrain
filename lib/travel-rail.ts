import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import type { RailGroup } from "@/components/IndexRail";
import { getCitiesForCountry } from "@/lib/places-registry";

/** 旅游模式左侧目录：国家概览（置顶）+ 城市列表 */
export function travelRailGroups(country: string, language: Language): RailGroup[] {
  const cities = getCitiesForCountry(country);
  const groups: RailGroup[] = [
    {
      type: "overview",
      label: t("rail.countryOverview", language),
      glyph: "◍",
      items: [{ id: `${country}-overview`, name: t("rail.countryOverview", language) }],
    },
  ];
  if (cities.length) {
    groups.push({
      type: "cities",
      label: t("travel.cities", language),
      glyph: "⌂",
      items: cities.map((c) => ({
        id: c.id,
        name: language === "zh-CN" ? c.nameZh : c.nameEn,
      })),
    });
  }
  return groups;
}
