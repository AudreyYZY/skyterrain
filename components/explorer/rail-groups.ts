/**
 * 学习模式左侧目录：当前大洲下按国家分栏（次区域变化处加分隔小标题），国家内按分类 → T1/T2/T3 → 注册表序。
 * 2026-09-14 从 ExplorerApp 的 useMemo 搬出成纯函数，行为不变。
 */
import type { RailGroup } from "@/components/IndexRail";
import { getTerrainName, type Language } from "@/lib/i18n";
import { countriesForContinent, getCountryMeta, subregionOfCountry } from "@/lib/regions";
import { categoryLabel, categoryOrder } from "@/lib/terrain-tier";
import { ALL_FEATURES } from "@/components/explorer/helpers";

export function studyRailGroups(activeRegion: string, language: Language): RailGroup[] {
  const slugs = countriesForContinent(activeRegion);
  // 每个国家的分隔小标题只在「次区域变化」时显示；prevSubIds[i] = 处理到 slugs[i] 之前
  // 沿途最近一个非空次区域 id（无次区域的国家不重置，沿用上一个）——用 reduce 折叠，
  // 避免在 .map 回调里改写外层 let（react-hooks/immutability）
  const prevSubIds = slugs.reduce<{ prevId: string | null; out: (string | null)[] }>(
    (acc, slug) => {
      acc.out.push(acc.prevId);
      const sub = subregionOfCountry(slug);
      return { prevId: sub?.id ?? acc.prevId, out: acc.out };
    },
    { prevId: null, out: [] }
  ).out;
  return slugs
    .map((slug, slugIndex) => {
      const meta = getCountryMeta(slug);
      let prevCat: string | null = null;
      const items = ALL_FEATURES.filter((f) => f.country === slug)
        .slice()
        .sort(
          (a, b) =>
            categoryOrder(a.category) - categoryOrder(b.category) ||
            a.tier - b.tier ||
            a.registryIndex - b.registryIndex,
        )
        .map((f) => {
          const catLabel =
            f.category !== prevCat ? categoryLabel(f.category, language) : undefined;
          prevCat = f.category;
          return {
            id: f.id,
            name: getTerrainName(f.name, language),
            category: f.category,
            categoryLabel: catLabel,
          };
        });
      const sub = subregionOfCountry(slug);
      const divider =
        sub && sub.id !== prevSubIds[slugIndex]
          ? language === "zh-CN"
            ? sub.name
            : sub.nameEn
          : undefined;
      return {
        type: slug,
        label: meta ? (language === "zh-CN" ? meta.name : meta.nameEn) : slug,
        glyph: meta?.code ?? slug.slice(0, 2).toUpperCase(),
        divider,
        items,
      };
    })
    .filter((g) => g.items.length > 0);
}
