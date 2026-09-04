import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import type { RailGroup } from "@/components/IndexRail";
import {
  getCitiesForCountry,
  getCountriesForContinent,
  getCountryOverview,
  zoneColor,
  zoneLabel,
} from "@/lib/places-registry";

/**
 * 旅游模式左侧目录 —— 当前大洲下，每个有内容的国家一个分组：
 *   分组标题 = 国家名；组内 = [国家概览] + 该国城市，城市按官方一级行政区（admin1，
 *   省/州）分组、**admin1 组按显示名字母/拼音序排列**（不是按大区，那样排列顺序
 *   会显得没有规律，且跟大区分界无关的省份会被拆得很远）；组内城市按显示名排序。
 *   分组标题旁带一个小圆点标出所属地理大区（zone，鼠标悬停显示大区名），圆点只是
 *   提示、不是可点的独立层级（IndexRail inlineCategories 模式）。
 *   admin1 缺省（国家还没补齐）时退回该城市自己单独一组，保证过渡期间不报错、仍可用。
 *   只有一个国家时体验和以前一致。
 */
export function travelRailGroups(continent: string, language: Language): RailGroup[] {
  const countries = getCountriesForContinent(continent);
  const collator = language === "zh-CN" ? "zh-Hans-CN" : "en";
  return countries.map((slug) => {
    const ov = getCountryOverview(slug);
    const countryName = ov
      ? language === "zh-CN"
        ? ov.nameZh
        : ov.nameEn
      : slug;
    const cities = getCitiesForCountry(slug)
      .slice()
      .sort((a, b) => {
        const aName = language === "zh-CN" ? a.nameZh : a.nameEn;
        const bName = language === "zh-CN" ? b.nameZh : b.nameEn;
        const aAdmin1 = (language === "zh-CN" ? a.admin1Zh : a.admin1En) ?? aName;
        const bAdmin1 = (language === "zh-CN" ? b.admin1Zh : b.admin1En) ?? bName;
        return aAdmin1.localeCompare(bAdmin1, collator) || aName.localeCompare(bName, collator);
      });
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
            categoryDotTitle: zoneLabel(c.zone, language),
          };
        }),
      ],
    };
  });
}
