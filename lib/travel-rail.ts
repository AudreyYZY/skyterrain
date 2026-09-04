import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import type { RailGroup } from "@/components/IndexRail";
import {
  getCitiesForCountry,
  getCountriesForContinent,
  getCountryOverview,
  zoneColor,
  zoneOrder,
} from "@/lib/places-registry";

/**
 * 旅游模式左侧目录 —— 当前大洲下，每个有内容的国家一个分组：
 *   分组标题 = 国家名；组内 = [国家概览] + 该国城市，城市按官方一级行政区（admin1，
 *   省/州）分组、组内按显示名排序；分组标题旁带一个小圆点标出所属地理大区（zone），
 *   圆点只是提示、不是可点的独立层级（IndexRail inlineCategories 模式）。
 *   admin1 缺省（国家还没补齐）时退回按 zone 分组，保证过渡期间不报错、仍可用。
 *   只有一个国家时体验和以前一致。
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
    const cities = getCitiesForCountry(slug)
      .slice()
      .sort(
        (a, b) =>
          zoneOrder(a.zone) - zoneOrder(b.zone) ||
          (language === "zh-CN" ? a.nameZh : a.nameEn).localeCompare(
            language === "zh-CN" ? b.nameZh : b.nameEn,
            language === "zh-CN" ? "zh-Hans-CN" : "en",
          ),
      );
    return {
      type: `country-${slug}`,
      label: countryName,
      glyph: "⌂",
      items: [
        { id: `${slug}-overview`, name: t("rail.countryOverview", language) },
        ...cities.map((c) => {
          const admin1 = language === "zh-CN" ? c.admin1Zh : c.admin1En;
          const groupLabel = admin1 ?? (language === "zh-CN" ? c.nameZh : c.nameEn);
          const groupKey = admin1 ?? c.id; // 没有 admin1 的城市各自单独一组，不瞎归堆
          return {
            id: c.id,
            name: language === "zh-CN" ? c.nameZh : c.nameEn,
            category: groupKey,
            categoryLabel: groupLabel,
            categoryDotColor: zoneColor(c.zone),
          };
        }),
      ],
    };
  });
}
