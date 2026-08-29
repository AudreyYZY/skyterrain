# Two-Mode (Study / Travel) — Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a switchable `travel` mode (city-guide overviews) alongside the existing `study` mode (landform atlas), with fully parallel content so the two never interfere; ship it with an Australia country overview + 7 city guides.

**Architecture:** Approach A from the spec — a top-level `AppMode` state in `ExplorerApp`, persisted to `localStorage`. All new travel content lives in new files (`lib/places-registry.ts`, `lib/travel-content.*.ts`, `lib/travel-lesson.ts`). `ExplorerApp` branches on `mode` at ~5 UI points; the study code path is left essentially untouched. Travel mode renders a new `CityMarkers` HTML overlay instead of the terrain labels + region outline.

**Tech Stack:** Next.js 16 (App Router, `--webpack`), React 19, TypeScript 5, CesiumJS 1.141, Tailwind v4, edge-tts-universal.

## Global Constraints

- Bilingual: every user-facing string and every content section has `zh-CN` and `en-US`. Content type: `Record<string, ...>` keyed by id.
- No test framework in this repo. "Tests" = `npx tsc --noEmit`, `npm run build` (run `rm -rf .next` first), the `scripts/check-*.ts` node scripts (`node --experimental-strip-types scripts/<name>.ts`), and specified browser checks via a prod server (`npx next start -p 3011`, prod is more stable than dev for Cesium).
- Study mode must remain byte-for-byte behaviourally unchanged. `node --experimental-strip-types scripts/check-terrain-camera.ts` must stay 106/106 the whole way.
- Cesium: never use `polygon.outline` or `clampToGround` on polylines (lazy-loads worker geometry that can hard-crash on a flaky network).
- Commit after every task. Branch: work stacks on `design/travel-study-modes`. One task = one commit (or a few tight commits).
- Content sourcing: Tourism Australia / state tourism boards / Australian Bureau of Meteorology climate data / Dept. of Home Affairs visa & entry info / established guidebook consensus. Facts stated plainly; judgments ("best season", "worth a visit") written as general guidance, never absolute. Same discipline as `lib/terrain-content.*.ts`.
- `TerrainCategory`, terrain files, `terrain-registry.ts`, `terrain-content.*.ts` are NOT touched by this plan.

---

## File Structure

**New files**

| File | Responsibility |
|---|---|
| `lib/app-mode.ts` | `AppMode` type + `getStoredMode()` / `setStoredMode()` (localStorage, SSR-safe) |
| `lib/places-registry.ts` | Single source of truth for city / airport / country-overview positions. `CityEntry`, `CountryOverviewEntry`, `CITY_REGISTRY`, `COUNTRY_OVERVIEWS`, `getCitiesForCountry`, `getCityById`. |
| `lib/travel-content.zh.ts` / `lib/travel-content.en.ts` | City-guide text, 6 sections per guide. `Record<string, TravelGuide>`. |
| `lib/travel-lesson.ts` | `TravelGuide` type, `TRAVEL_SECTION_ORDER`, `travelSectionHeading()`, `resolveTravelGuide()`, `travelGuideToSections()`. |
| `lib/travel-rail.ts` | `travelRailGroups(country, lang)` — builds `RailGroup[]` for the travel sidebar (overview entry + cities). |
| `components/ModeToggle.tsx` | The header `学习 / 旅游` switch. |
| `components/CityMarkers.tsx` | Travel-mode HTML overlay: city dots + names, tier→zoom gating, hover, click. |
| `scripts/check-places.ts` | Validates `places-registry` + travel-content coverage. |

**Modified files**

| File | Change |
|---|---|
| `lib/route-narration.ts` | Restructure to `Record<routeId, { study: Record<Language,string>; travel: Record<Language,string> }>`; `getRouteNarration(id, lang, mode)`. |
| `components/ReadingPanel.tsx` | Accept optional `sections?: PanelSection[]`; render it when present (falls back to existing `lesson` path). |
| `components/CesiumMap.tsx` | New `mode` prop; in `travel` skip terrain-label sync + hide `terrainRegion` entities; add `focusCity(lon, lat, view?)` to the handle. |
| `components/ExplorerApp.tsx` | `mode` state; render `ModeToggle`; branch map layer / sidebar / select handler / route narration / JourneyBar on `mode`; new `handleSelectCity`. |
| `components/JourneyBar.tsx` | `mode` prop; per-mode chip subtitle; disable "start flight" when travel narration missing. |
| `scripts/check-routes.ts` | Update for the new `ROUTE_NARRATION` shape. |
| `lib/i18n.ts` | Add UI keys: `mode.study`, `mode.travel`, `rail.countryOverview`, travel section headings. |

---

## Task 1: `ReadingPanel` accepts a generic section array

Unblocks travel content rendering without touching the study path.

**Files:**
- Modify: `components/ReadingPanel.tsx`

**Interfaces:**
- Produces: `export interface PanelSection { key: string; heading: string; text: string }` (add to `ReadingPanel.tsx`, export it). New optional prop `sections?: PanelSection[] | null` on `ReadingPanelProps`. When `sections` is non-null it is rendered (name from `terrain.name`, elevation row hidden if `terrain.elevation` is `NaN`); when null, current behaviour is unchanged.

- [ ] **Step 1: Read the current article-state renderer**

Run: `sed -n '60,220p' components/ReadingPanel.tsx`
Note how `lesson` is turned into sections today (it uses `<StructuredLesson>` and/or `lessonSections`). The goal: when `sections` prop is passed, render those `{heading, text}` blocks with the same sentence-highlight markup used for `lesson`.

- [ ] **Step 2: Add the type + prop**

In `components/ReadingPanel.tsx`, after the imports:

```tsx
export interface PanelSection {
  key: string;
  heading: string;
  text: string;
}
```

Add to `ReadingPanelProps`:

```tsx
  /** 通用分节内容（旅游模式攻略）。非空时优先于 lesson 渲染。 */
  sections?: PanelSection[] | null;
```

Add `sections` to the destructured props (default `null`).

- [ ] **Step 3: Branch the render**

Find the block that renders the expanded/article state from `lesson`. Wrap it:

```tsx
{sections && sections.length > 0 ? (
  <div className="reading-body space-y-6">
    {sections.map((s, i) => (
      <section key={s.key}>
        <h3 className="editorial-kicker mb-1.5">{s.heading}</h3>
        {splitSentences(s.text).map((sent, j) => {
          const flatIdx = sections.slice(0, i).reduce((n, x) => n + splitSentences(x.text).length, 0) + j;
          const isActive = activeSentenceIndex === flatIdx;
          return (
            <span
              key={j}
              ref={isActive ? activeRef : undefined}
              className={isActive ? "bg-[color:var(--accent-wash)]" : undefined}
            >
              {sent}{" "}
            </span>
          );
        })}
      </section>
    ))}
  </div>
) : (
  /* existing lesson-based render, unchanged */
)}
```

Match the existing classNames actually used in this file (inspect first — `editorial-kicker`, `reading-body`, `--accent-wash` are examples; use whatever the current article render uses).

- [ ] **Step 4: Card-state fallback**

Where the collapsed "card" state shows `lesson.seeing` as the one-line summary, also handle `sections`: use `sections[0].text` truncated. Keep it simple — one ternary.

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit
rm -rf .next && npm run build 2>&1 | grep -E "Compiled|Failed"
```
Expected: `✓ Compiled successfully`. No behaviour change yet (nothing passes `sections`).

Browser: `npx next start -p 3011`, open `http://localhost:3011`, `localStorage.setItem("fge-active-region","china")`, `localStorage.setItem("fge-intro-seen","1")`, reload. Click a terrain (e.g. 秦岭) from the left rail → panel opens, 6 sections render as before. Confirm study panel unchanged.

- [ ] **Step 6: Commit**

```bash
git add components/ReadingPanel.tsx
git commit -m "feat(panel): ReadingPanel can render a generic section array"
```

---

## Task 2: `AppMode` + header toggle + persistence

**Files:**
- Create: `lib/app-mode.ts`
- Create: `components/ModeToggle.tsx`
- Modify: `components/ExplorerApp.tsx`
- Modify: `lib/i18n.ts`

**Interfaces:**
- Produces: `export type AppMode = "study" | "travel"`; `export function getStoredMode(): AppMode`; `export function setStoredMode(m: AppMode): void`. `ModeToggle` props: `{ mode: AppMode; onChange: (m: AppMode) => void; language: Language }`. `ExplorerApp` gains `const [mode, setMode] = useState<AppMode>(getStoredMode)`.

- [ ] **Step 1: `lib/app-mode.ts`**

```ts
export type AppMode = "study" | "travel";

const KEY = "fge-app-mode";

export function getStoredMode(): AppMode {
  if (typeof window === "undefined") return "study";
  const v = window.localStorage.getItem(KEY);
  return v === "travel" ? "travel" : "study";
}

export function setStoredMode(m: AppMode): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, m);
  } catch {
    /* private mode etc. */
  }
}
```

- [ ] **Step 2: i18n keys**

In `lib/i18n.ts` `UI_TEXTS`, add:

```ts
  "mode.study": { "zh-CN": "学习", "en-US": "Study" },
  "mode.travel": { "zh-CN": "旅游", "en-US": "Travel" },
  "rail.countryOverview": { "zh-CN": "国家概览", "en-US": "Country overview" },
```

- [ ] **Step 3: `components/ModeToggle.tsx`**

```tsx
"use client";

import { t, type Language } from "@/lib/i18n";
import type { AppMode } from "@/lib/app-mode";

interface Props {
  mode: AppMode;
  onChange: (m: AppMode) => void;
  language: Language;
}

export default function ModeToggle({ mode, onChange, language }: Props) {
  return (
    <div className="pointer-events-auto flex rounded-full border border-[color:var(--hairline)] text-[11px] font-medium">
      {(["study", "travel"] as const).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => onChange(m)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            mode === m
              ? "bg-[color:var(--accent)] text-[color:var(--bg)]"
              : "text-[color:var(--ink-dim)] hover:text-[color:var(--ink)]"
          }`}
        >
          {t(`mode.${m}`, language)}
        </button>
      ))}
    </div>
  );
}
```

(Match the actual accent/hairline token names in `app/globals.css` — inspect if `--accent` / `--bg` differ.)

- [ ] **Step 4: Wire into ExplorerApp**

`components/ExplorerApp.tsx`:
- Add imports: `import ModeToggle from "@/components/ModeToggle";` and `import { type AppMode, getStoredMode, setStoredMode } from "@/lib/app-mode";`
- Add state near the other `useState`s: `const [mode, setMode] = useState<AppMode>(getStoredMode);`
- Add a handler:

```tsx
const flyToCountryOverview = useCallback(() => {
  const r = REGIONS.find((x) => x.id === activeRegion);
  if (r) mapRef.current?.flyToRegion({
    lon: r.center.lon, lat: r.center.lat, height: r.center.height, duration: 1.5,
  });
}, [activeRegion]);

const handleModeChange = useCallback((m: AppMode) => {
  if (m === mode) return;
  setMode(m);
  setStoredMode(m);
  setActiveTerrain(null);
  setLesson(null);
  setRouteNarration(null);
  setFlyoverName(null);
  closePanel();
  flyToCountryOverview();
}, [mode, closePanel, flyToCountryOverview]);
```

Verified against the codebase: `closePanel` is `const closePanel = () => {…}` (always defined, call it directly). `flyToRegion` on the handle takes `{ lon, lat, height, duration? }` — NOT a region id. `REGIONS` and `activeRegion` are already imported/in scope. `activeRegionName` / `activeRegionNameEn` exist (from `activeRegionObj`).

- In the header's right-side `<div>`, put `<ModeToggle mode={mode} onChange={handleModeChange} language={language} />` before `<RegionSelector>`.

- [ ] **Step 5: Temporary travel placeholder**

For this task only, guard the study-specific overlays so travel mode isn't broken-looking. Change the render conditions:
- `<CesiumOverlayLabels …/>` → wrap with `{mode === "study" && ( … )}`
- `<IndexRail …/>` → `{!showIntro && mode === "study" && ( … )}`
- `<JourneyBar …/>` → add `&& mode === "study"` to its condition
- After the map `<div>`, add:

```tsx
{mode === "travel" && !showIntro && (
  <div className="pointer-events-none absolute inset-x-0 bottom-24 z-30 text-center text-[12px] text-[color:var(--ink-dim)]">
    {language === "zh-CN" ? "旅游模式 —— 建设中" : "Travel mode — under construction"}
  </div>
)}
```

- [ ] **Step 6: Verify**

```bash
npx tsc --noEmit && rm -rf .next && npm run build 2>&1 | grep -E "Compiled|Failed"
node --experimental-strip-types scripts/check-terrain-camera.ts | tail -1
```
Expected: build OK, `106 项, 0 项异常`.

Browser: reload with china region. Header shows `学习 | 旅游`. Click 旅游 → labels/rail/journey vanish, "旅游模式 —— 建设中" shows, globe stays. Reload → still travel. Click 学习 → everything back, click 秦岭 works. Switch language → toggle text follows.

- [ ] **Step 7: Commit**

```bash
git add lib/app-mode.ts components/ModeToggle.tsx components/ExplorerApp.tsx lib/i18n.ts
git commit -m "feat(mode): AppMode state + header Study/Travel toggle, persisted"
```

---

## Task 3: `lib/places-registry.ts` — schema + Australia data

**Files:**
- Create: `lib/places-registry.ts`

**Interfaces:**
- Produces:
```ts
export type PlaceTier = "capital" | "major" | "notable";
export interface CityEntry {
  id: string; nameZh: string; nameEn: string; country: string;
  tier: PlaceTier; lon: number; lat: number;
  airport?: { iata: string; nameZh: string; nameEn: string; lon: number; lat: number };
  view?: { heightM?: number; pitchDeg?: number; headingDeg?: number };
  source: string;
}
export interface CountryOverviewEntry { country: string; nameZh: string; nameEn: string }
export const CITY_REGISTRY: CityEntry[];
export const COUNTRY_OVERVIEWS: CountryOverviewEntry[];
export function getCitiesForCountry(country: string): CityEntry[];
export function getCityById(id: string): CityEntry | undefined;
```

- [ ] **Step 1: Write the file**

```ts
/**
 * Places Registry — 旅游模式的位置单一真实源（城市 / 机场 / 国家概览）。
 * 与 lib/regions.ts 的 regionId 对齐（country 字段）。坐标来源写入 source 便于审计。
 */

export type PlaceTier = "capital" | "major" | "notable";

export interface CityEntry {
  id: string;
  nameZh: string;
  nameEn: string;
  country: string; // regionId: "australia" | "china"
  tier: PlaceTier;
  lon: number;
  lat: number;
  airport?: { iata: string; nameZh: string; nameEn: string; lon: number; lat: number };
  /** 相机：城市上空斜视角。缺省用 DEFAULT_CITY_VIEW。 */
  view?: { heightM?: number; pitchDeg?: number; headingDeg?: number };
  source: string;
}

export interface CountryOverviewEntry {
  country: string;
  nameZh: string;
  nameEn: string;
}

export const DEFAULT_CITY_VIEW = { heightM: 26_000, pitchDeg: -45, headingDeg: 0 } as const;

export const COUNTRY_OVERVIEWS: CountryOverviewEntry[] = [
  { country: "australia", nameZh: "澳大利亚", nameEn: "Australia" },
];

export const CITY_REGISTRY: CityEntry[] = [
  {
    id: "sydney", nameZh: "悉尼", nameEn: "Sydney", country: "australia", tier: "major",
    lon: 151.2093, lat: -33.8688,
    airport: { iata: "SYD", nameZh: "悉尼金斯福德·史密斯机场", nameEn: "Sydney Kingsford Smith", lon: 151.177, lat: -33.946 },
    source: "悉尼市中心 -33.8688,151.2093；SYD 机场坐标：公开资料",
  },
  {
    id: "melbourne", nameZh: "墨尔本", nameEn: "Melbourne", country: "australia", tier: "major",
    lon: 144.9631, lat: -37.8136,
    airport: { iata: "MEL", nameZh: "墨尔本机场（图拉马林）", nameEn: "Melbourne (Tullamarine)", lon: 144.843, lat: -37.669 },
    source: "墨尔本 CBD -37.8136,144.9631；MEL 机场：公开资料",
  },
  {
    id: "brisbane", nameZh: "布里斯班", nameEn: "Brisbane", country: "australia", tier: "major",
    lon: 153.0251, lat: -27.4698,
    airport: { iata: "BNE", nameZh: "布里斯班机场", nameEn: "Brisbane", lon: 153.117, lat: -27.384 },
    source: "布里斯班 CBD -27.4698,153.0251；BNE 机场：公开资料",
  },
  {
    id: "perth", nameZh: "珀斯", nameEn: "Perth", country: "australia", tier: "major",
    lon: 115.8605, lat: -31.9523,
    airport: { iata: "PER", nameZh: "珀斯机场", nameEn: "Perth", lon: 115.967, lat: -31.940 },
    source: "珀斯 CBD -31.9523,115.8605；PER 机场：公开资料",
  },
  {
    id: "adelaide", nameZh: "阿德莱德", nameEn: "Adelaide", country: "australia", tier: "major",
    lon: 138.6007, lat: -34.9285,
    airport: { iata: "ADL", nameZh: "阿德莱德机场", nameEn: "Adelaide", lon: 138.531, lat: -34.945 },
    source: "阿德莱德 CBD -34.9285,138.6007；ADL 机场：公开资料",
  },
  {
    id: "cairns", nameZh: "凯恩斯", nameEn: "Cairns", country: "australia", tier: "notable",
    lon: 145.7710, lat: -16.9203,
    airport: { iata: "CNS", nameZh: "凯恩斯机场", nameEn: "Cairns", lon: 145.755, lat: -16.885 },
    source: "凯恩斯 -16.9203,145.7710；CNS 机场：公开资料",
  },
  {
    id: "darwin", nameZh: "达尔文", nameEn: "Darwin", country: "australia", tier: "notable",
    lon: 130.8456, lat: -12.4634,
    airport: { iata: "DRW", nameZh: "达尔文机场", nameEn: "Darwin", lon: 130.877, lat: -12.415 },
    source: "达尔文 -12.4634,130.8456；DRW 机场：公开资料",
  },
];

const BY_ID = new Map(CITY_REGISTRY.map((c) => [c.id, c]));

export function getCitiesForCountry(country: string): CityEntry[] {
  return CITY_REGISTRY.filter((c) => c.country === country);
}
export function getCityById(id: string): CityEntry | undefined {
  return BY_ID.get(id);
}
```

- [ ] **Step 2: Verify**

```bash
npx tsc --noEmit
node --experimental-strip-types -e 'import("./lib/places-registry.ts").then(m=>console.log(m.CITY_REGISTRY.length,"cities;",m.getCitiesForCountry("australia").map(c=>c.id).join(",")))'
```
Expected: `7 cities; sydney,melbourne,brisbane,perth,adelaide,cairns,darwin`

- [ ] **Step 3: Commit**

```bash
git add lib/places-registry.ts
git commit -m "feat(places): places-registry schema + 7 Australian cities"
```

---

## Task 4: `scripts/check-places.ts`

**Files:**
- Create: `scripts/check-places.ts`

**Interfaces:**
- Consumes: `CITY_REGISTRY`, `COUNTRY_OVERVIEWS` from `lib/places-registry.ts`; `REGIONS` from `lib/regions.ts`.

- [ ] **Step 1: Write it (following `scripts/check-routes.ts` style — no framework)**

```ts
/**
 * 旅游地点自检： node --experimental-strip-types scripts/check-places.ts
 * 校验：坐标合法、country 在 regions 中、id 唯一、机场坐标合法。
 * （travel-content 覆盖检查在 Task 5 之后加。）
 */
import { CITY_REGISTRY, COUNTRY_OVERVIEWS } from "../lib/places-registry.ts";
import { REGIONS } from "../lib/regions.ts";

let failures = 0;
const fail = (m: string) => { console.log("✗ " + m); failures++; };
const regionIds = new Set(REGIONS.map((r) => r.id));
const seen = new Set<string>();

for (const c of CITY_REGISTRY) {
  if (seen.has(c.id)) fail(`duplicate id ${c.id}`);
  seen.add(c.id);
  if (!regionIds.has(c.country)) fail(`${c.id}: country "${c.country}" not in REGIONS`);
  if (c.lat < -90 || c.lat > 90 || c.lon < -180 || c.lon > 180) fail(`${c.id}: bad coord ${c.lat},${c.lon}`);
  if (c.airport) {
    const a = c.airport;
    if (a.lat < -90 || a.lat > 90 || a.lon < -180 || a.lon > 180) fail(`${c.id}: bad airport coord`);
    if (!/^[A-Z]{3}$/.test(a.iata)) fail(`${c.id}: bad IATA ${a.iata}`);
  }
  if (!c.source) fail(`${c.id}: missing source`);
}
for (const o of COUNTRY_OVERVIEWS) {
  if (!regionIds.has(o.country)) fail(`overview: country "${o.country}" not in REGIONS`);
}

console.log(`\n${CITY_REGISTRY.length} 城市, ${COUNTRY_OVERVIEWS.length} 概览, ${failures} 项异常`);
process.exit(failures > 0 ? 1 : 0);
```

- [ ] **Step 2: Verify**

Run: `node --experimental-strip-types scripts/check-places.ts`
Expected: `7 城市, 1 概览, 0 项异常`, exit 0.

- [ ] **Step 3: Commit**

```bash
git add scripts/check-places.ts
git commit -m "test(places): check-places validates registry + regions"
```

---

## Task 5: `travel-content` schema + `travel-lesson.ts` resolver + Sydney

**Files:**
- Create: `lib/travel-lesson.ts`
- Create: `lib/travel-content.zh.ts`
- Create: `lib/travel-content.en.ts`
- Modify: `lib/i18n.ts` (section-heading keys)

**Interfaces:**
- Produces:
```ts
export interface TravelGuide {
  identity: string; layout: string; gettingAround: string;
  culture: string; seeAndDo: string; whenAndTips: string;
}
export const TRAVEL_SECTION_ORDER: readonly (keyof TravelGuide)[];
export function travelSectionHeading(key: string, lang: Language): string;
export function resolveTravelGuide(id: string, lang: Language): TravelGuide | null;
export function travelGuideToSections(g: TravelGuide, lang: Language): { key: string; heading: string; text: string }[];
```

- [ ] **Step 1: i18n section-heading keys**

`lib/i18n.ts` `UI_TEXTS`:

```ts
  "travel.identity":      { "zh-CN": "概览",           "en-US": "Overview" },
  "travel.layout":        { "zh-CN": "地理与格局",     "en-US": "Layout" },
  "travel.gettingAround": { "zh-CN": "衣食住行",       "en-US": "Getting around" },
  "travel.culture":       { "zh-CN": "人文与习俗",     "en-US": "Culture" },
  "travel.seeAndDo":      { "zh-CN": "看什么·体验什么", "en-US": "See & do" },
  "travel.whenAndTips":   { "zh-CN": "何时去·提示",    "en-US": "When to go & tips" },
```

- [ ] **Step 2: `lib/travel-lesson.ts`**

```ts
import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { TRAVEL_CONTENT_ZH } from "@/lib/travel-content.zh";
import { TRAVEL_CONTENT_EN } from "@/lib/travel-content.en";

export interface TravelGuide {
  identity: string;
  layout: string;
  gettingAround: string;
  culture: string;
  seeAndDo: string;
  whenAndTips: string;
}

export const TRAVEL_SECTION_ORDER = [
  "identity", "layout", "gettingAround", "culture", "seeAndDo", "whenAndTips",
] as const;

export function travelSectionHeading(key: string, lang: Language): string {
  return t(`travel.${key}`, lang);
}

export function resolveTravelGuide(id: string, lang: Language): TravelGuide | null {
  const primary = lang === "zh-CN" ? TRAVEL_CONTENT_ZH : TRAVEL_CONTENT_EN;
  const fallback = lang === "zh-CN" ? TRAVEL_CONTENT_EN : TRAVEL_CONTENT_ZH;
  return primary[id] ?? fallback[id] ?? null;
}

export function travelGuideToSections(g: TravelGuide, lang: Language) {
  return TRAVEL_SECTION_ORDER
    .map((key) => ({ key, heading: travelSectionHeading(key, lang), text: g[key] ?? "" }))
    .filter((s) => s.text.trim().length > 0);
}
```

- [ ] **Step 3: `lib/travel-content.zh.ts` (Sydney + Australia overview only for now)**

```ts
import type { TravelGuide } from "@/lib/travel-lesson";

export const TRAVEL_CONTENT_ZH: Record<string, TravelGuide> = {
  "australia-overview": {
    identity:
      "澳大利亚是一个国土面积接近整个欧洲、人口只有约2600万的国家，绝大多数人住在东部和西南沿海的几座大城市里，广袤的内陆几乎无人。它气候跨度很大：北部是热带、南部是温带，季节和北半球相反（12月是盛夏）。",
    layout:
      "可以把澳大利亚大致分成四块：东岸城市带（悉尼、墨尔本、布里斯班，人口和经济的重心）；干旱的中部内陆（红色荒漠、乌鲁鲁、少数矿业和牧业据点）；西部（珀斯一座大城 + 大片矿区）；以及独立的岛屿州塔斯马尼亚。首都堪培拉是内陆一座规划出来的中等城市。",
    gettingAround:
      "城市之间距离极大，跨州基本靠飞机（悉尼—珀斯航程约5小时）。大城市内有火车、电车和公交，但公共交通不如东亚密集，很多地方开车更方便，靠左行驶。气候上：北部全年炎热潮湿（有旱季/雨季之分），南部四季分明、夏热冬凉，内陆昼夜温差大、防晒极重要（紫外线强）。饮食多元，咖啡文化发达，各国餐馆齐全。",
    culture:
      "澳大利亚是移民国家，官方语言英语，口音和用词有本地特色。社会节奏相对松弛，重视户外生活和周末。原住民是这片大陆最早的居民，有数万年的连续文化，很多地名和自然圣地属于原住民，参观时遵守当地指引。给小费不是义务。商店和景点在公共假日常关门或缩短营业。",
    seeAndDo:
      "海岸线是澳大利亚的精华：悉尼港与海滩、大洋路、大堡礁、西澳的珊瑚海岸。内陆的红色荒漠与乌鲁鲁是另一种极致体验。城市各有性格——悉尼外向、墨尔本文艺、布里斯班悠闲。野生动物（袋鼠、考拉、海豚）在很多地方能就近看到。",
    whenAndTips:
      "南部城市（悉尼、墨尔本、阿德莱德）春秋（9–11月、3–5月）最舒服；北部（凯恩斯、达尔文）避开11–4月的雨季和酷热，5–10月旱季最好。入境对食品、木制品、动植物制品检查极严，如实申报。多数国家公民需提前在线申请电子签证或ETA。防晒、带足水、内陆自驾要做好准备。",
  },

  sydney: {
    identity:
      "悉尼是澳大利亚最大的城市，新南威尔士州首府，约530万人口。它是一座外向、以港湾和海滩为中心的城市，也是很多人进入澳大利亚的第一站。金融、旅游和文化都很发达，生活成本在全国最高。",
    layout:
      "悉尼建在一个巨大的天然深水港（杰克逊港）周围，海湾把城市切成许多半岛和海湾社区。市中心（CBD）在港湾南岸，歌剧院和海港大桥就在这里；往东是邦迪等海滩区，往西是广阔的居民区一直延伸到蓝山脚下。城市没有特别高的地形，整体是起伏和缓的砂岩台地。",
    gettingAround:
      "从机场到市区有机场线火车（约20分钟）。市内以火车、轻轨、公交和渡轮为主，用一张 Opal 卡或非接触银行卡即可。渡轮是看港湾最好的方式。气候温和：夏季（12–2月）约26°C、偶有高温和雷阵雨，冬季（6–8月）约13–18°C、少见严寒。全年紫外线强，务必防晒。饮食极其多元，唐人街、韩国城、越南区都有成规模的社区。",
    culture:
      "悉尼是移民城市，英语为主，街上能听到很多种语言。生活重心在户外——海滩、公园、周末烧烤。节奏比墨尔本更快、更商业。跨年烟花（悉尼港）是全球最早的大型跨年庆典之一。给小费非必须。公共假日很多商店关门。",
    seeAndDo:
      "标志性的是港湾：歌剧院、海港大桥（可攀桥）、环形码头坐渡轮到曼利或塔龙加动物园。邦迪到库吉的海崖步道是经典徒步。城里有皇家植物园、岩石区（殖民时期老街）、达令港。往西一小时是蓝山的砂岩峡谷和三姊妹岩。",
    whenAndTips:
      "最舒服是春秋（9–11月、3–5月），气候宜人、人也不算太多。盛夏是旺季、海滩最热闹但也最贵最挤。1月26日澳大利亚日、复活节、圣诞前后价格高、需早订。海滩游泳只在有旗帜的区域、听从救生员。入境海关对食品和动植物制品检查很严，如实申报。",
  },
};
```

- [ ] **Step 4: `lib/travel-content.en.ts` (parallel, same two ids)**

Write `TRAVEL_CONTENT_EN` with `australia-overview` and `sydney`, English, same 6 keys, ~150–220 words per section, faithful to the zh meaning but idiomatic English (not machine translation). Follow the tone of `lib/terrain-content.en.ts`.

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit
node --experimental-strip-types -e 'import("./lib/travel-lesson.ts").then(m=>{const g=m.resolveTravelGuide("sydney","zh-CN"); console.log(g?Object.keys(g).length+" sections":"MISSING"); console.log(m.travelGuideToSections(g,"zh-CN").map(s=>s.heading).join(" / "))})'
```
Expected: `6 sections` then `概览 / 地理与格局 / 衣食住行 / 人文与习俗 / 看什么·体验什么 / 何时去·提示`

- [ ] **Step 6: Extend `check-places.ts`**

Add near the top: `import { resolveTravelGuide } from "../lib/travel-lesson.ts";` and inside the city loop:

```ts
  if (!resolveTravelGuide(c.id, "zh-CN")) fail(`${c.id}: no zh travel-content`);
  if (!resolveTravelGuide(c.id, "en-US")) fail(`${c.id}: no en travel-content`);
```

Run it — expect failures for the 6 cities without content yet (that's fine, those land in Task 11). To keep CI-style green in the meantime, make the travel-content check a **warning** (print, do not `failures++`) until Task 11, then flip to hard fail in Task 11.

- [ ] **Step 7: Commit**

```bash
git add lib/travel-lesson.ts lib/travel-content.zh.ts lib/travel-content.en.ts lib/i18n.ts scripts/check-places.ts
git commit -m "feat(travel): TravelGuide schema + resolver + Sydney & AU overview"
```

---

## Task 6: `route-narration.ts` — study/travel structure

**Files:**
- Modify: `lib/route-narration.ts`
- Modify: `components/ExplorerApp.tsx` (the `getRouteNarration` call site)
- Modify: `scripts/check-routes.ts`

**Interfaces:**
- Produces: `export function getRouteNarration(routeId: string, lang: Language, mode: "study" | "travel"): string | null`. `ROUTE_NARRATION: Record<string, { study: Record<Language, string>; travel: Record<Language, string> }>`.

- [ ] **Step 1: Restructure the data**

In `lib/route-narration.ts`, wrap each existing `{ "zh-CN": …, "en-US": … }` as the `study` value and add an empty `travel`:

```ts
export const ROUTE_NARRATION: Record<
  string,
  { study: Record<Language, string>; travel: Record<Language, string> }
> = {
  "pek-urc": {
    study: {
      "zh-CN": "…existing text…",
      "en-US": "…existing text…",
    },
    travel: { "zh-CN": "", "en-US": "" },
  },
  // …same for ctu-lxa, can-lxa, urc-khg
};

export function getRouteNarration(
  routeId: string,
  lang: Language,
  mode: "study" | "travel",
): string | null {
  const text = ROUTE_NARRATION[routeId]?.[mode]?.[lang];
  return text && text.trim() ? text : null;
}
```

- [ ] **Step 2: Update ExplorerApp call site**

`components/ExplorerApp.tsx` around line 676 — change:

```ts
getRouteNarration(route.id, language) ?? routeEndLesson(language).seeing;
```
to:
```ts
getRouteNarration(route.id, language, mode) ?? routeEndLesson(language).seeing;
```

- [ ] **Step 3: Update `scripts/check-routes.ts`**

Find the `ROUTE_NARRATION` check. Change it to look at `.study`:

```ts
const narr = (ROUTE_NARRATION as any)[r.id];
if (!narr?.study?.["zh-CN"] || !narr?.study?.["en-US"]) fail(`${r.id}: missing study narration`);
else if (narr.study["zh-CN"].length < 200) fail(`${r.id}: study zh narration too short`);
```

- [ ] **Step 4: Verify**

```bash
npx tsc --noEmit
node --experimental-strip-types scripts/check-routes.ts | tail -2
rm -rf .next && npm run build 2>&1 | grep -E "Compiled|Failed"
```
Expected: `4 条航线, 0 项异常`; build OK.

Browser (study mode, china): click 北京—乌鲁木齐 "开始飞行" → narration plays as before.

- [ ] **Step 5: Commit**

```bash
git add lib/route-narration.ts components/ExplorerApp.tsx scripts/check-routes.ts
git commit -m "refactor(routes): route narration keyed by mode (study/travel)"
```

---

## Task 7: `components/CityMarkers.tsx`

**Files:**
- Create: `components/CityMarkers.tsx`

**Interfaces:**
- Consumes: `CesiumMapHandle` — verified: `projectToScreen(lat, lon): {x,y}|null` and `getCameraState(): { altitude, zoomLevel, lon, lat } | null` (zoomLevel is `20 - log2(altitude/50)` clamped 1–20). `CityEntry`, `PlaceTier` from `lib/places-registry.ts`.
- Produces: default export `CityMarkers`. Props `{ mapRef: React.RefObject<CesiumMapHandle | null>; cities: CityEntry[]; activeId: string | null; language: Language; onSelect: (id: string) => void }`.

- [ ] **Step 1: Write the component (mirror `CesiumOverlayLabels` structure)**

```tsx
"use client";

import type { CesiumMapHandle } from "@/components/CesiumMap";
import type { CityEntry, PlaceTier } from "@/lib/places-registry";
import type { Language } from "@/lib/i18n";
import { useEffect, useRef, useState } from "react";

interface Props {
  mapRef: React.RefObject<CesiumMapHandle | null>;
  cities: CityEntry[];
  activeId: string | null;
  language: Language;
  onSelect: (id: string) => void;
}

interface Screen { id: string; name: string; x: number; y: number; tier: PlaceTier }

const POLL_MS = 400;
// tier → 该层级开始显示的 zoomLevel（与地形标签系统同量纲，见 CesiumOverlayLabels）
const TIER_MIN_ZOOM: Record<PlaceTier, number> = { capital: 3, major: 3.5, notable: 4.5 };

export default function CityMarkers({ mapRef, cities, activeId, language, onSelect }: Props) {
  const [screens, setScreens] = useState<Screen[]>([]);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let alive = true;
    const tick = () => {
      const h = mapRef.current;
      if (!h) return;
      const zoom = h.getCameraState()?.zoomLevel ?? 6;
      const next: Screen[] = [];
      for (const c of cities) {
        if (zoom < TIER_MIN_ZOOM[c.tier] && c.id !== activeId) continue;
        const p = h.projectToScreen(c.lat, c.lon);
        if (!p) continue;
        next.push({ id: c.id, name: language === "zh-CN" ? c.nameZh : c.nameEn, x: p.x, y: p.y, tier: c.tier });
      }
      if (alive) setScreens(next);
    };
    const id = window.setInterval(tick, POLL_MS);
    tick();
    return () => { alive = false; window.clearInterval(id); if (raf.current) cancelAnimationFrame(raf.current); };
  }, [mapRef, cities, activeId, language]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[15]" style={{ overflow: "hidden" }}>
      {screens.map((s) => (
        <button
          key={s.id}
          type="button"
          onClick={() => onSelect(s.id)}
          className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5"
          style={{ left: s.x, top: s.y }}
        >
          <span
            className={`block rounded-full ${
              s.id === activeId ? "h-2.5 w-2.5 bg-[color:var(--accent)]" : "h-1.5 w-1.5 bg-white/80"
            }`}
          />
          <span
            className={`whitespace-nowrap text-[11px] ${
              s.id === activeId ? "text-[color:var(--ink)]" : "text-[color:var(--ink-dim)]"
            }`}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}
          >
            {s.name}
          </span>
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verify (compile only — wired in Task 8)**

```bash
npx tsc --noEmit
```
Expected: clean.

- [ ] **Step 3: Commit**

```bash
git add components/CityMarkers.tsx
git commit -m "feat(travel): CityMarkers overlay component"
```

---

## Task 8: `CesiumMap` `mode` prop + `focusCity`

**Files:**
- Modify: `components/CesiumMap.tsx`

**Interfaces:**
- Produces: `CesiumMap` gains prop `mode?: "study" | "travel"` (default `"study"`). Handle gains `focusCity(lon: number, lat: number, view?: { heightM?: number; pitchDeg?: number; headingDeg?: number }): void`.

- [ ] **Step 1: Add the prop + gate terrain work**

In `CesiumMapProps` add `mode?: "study" | "travel";`. Default it in the component: `const activeMode = mode ?? "study";`

Find where terrain labels are synced to `labelManager` and where the `terrainRegion*` entities are created / ticked. Guard the *visual* parts with `activeMode === "study"`:
- The MOUSE_MOVE `drillPick` → hover handler: early-return when `activeMode !== "study"`.
- `tickTerrainRegions` rAF: skip when `activeMode !== "study"` (or hide all `r.rim.show`).
- Label sync to `labelManager`: skip pushing terrain labels when travel. (`CesiumOverlayLabels` is already not rendered by ExplorerApp in travel mode after Task 2, but the manager population still happens here — gate it so nothing lingers.)

Do NOT remove the entities; just keep them hidden. Keep `check-terrain-camera` passing (it imports the registry + camera math, not this component — unaffected).

- [ ] **Step 2: Add `focusCity` to the imperative handle**

In the `useImperativeHandle` block:

```ts
focusCity(lon: number, lat: number, view?: { heightM?: number; pitchDeg?: number; headingDeg?: number }) {
  const v = viewerRef.current;
  if (!v || v.isDestroyed()) return;
  const height = view?.heightM ?? 26_000;
  const pitch = Cesium.Math.toRadians(view?.pitchDeg ?? -45);
  const heading = Cesium.Math.toRadians(view?.headingDeg ?? 0);
  // 从城市点沿 pitch 反方向后退，让城市落在画面中部
  const ground = height / Math.tan(Math.abs(pitch));
  const back = Cesium.Cartesian3.fromDegrees(lon, lat - ground / 111_000, height);
  v.camera.flyTo({ destination: back, orientation: { heading, pitch, roll: 0 }, duration: 1.6 });
}
```

(Match the real viewer ref name — grep `viewerRef` / `viewer` in the handle.)

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit && rm -rf .next && npm run build 2>&1 | grep -E "Compiled|Failed"
node --experimental-strip-types scripts/check-terrain-camera.ts | tail -1
```
Expected: build OK; `106 项, 0 项异常`.

Browser: study mode still fully works (labels, hover highlight, click). Travel mode: no crash, globe spins, no terrain labels.

- [ ] **Step 4: Commit**

```bash
git add components/CesiumMap.tsx
git commit -m "feat(map): CesiumMap mode prop + focusCity; gate terrain layer in travel"
```

---

## Task 9: Wire travel mode into `ExplorerApp`

**Files:**
- Create: `lib/travel-rail.ts`
- Modify: `components/ExplorerApp.tsx`

**Interfaces:**
- Consumes: `getCitiesForCountry`, `getCityById` (places-registry); `resolveTravelGuide`, `travelGuideToSections` (travel-lesson); `CityMarkers`; `CesiumMap.focusCity`.
- Produces: `lib/travel-rail.ts` → `export function travelRailGroups(country: string, language: Language): RailGroup[]`. `ExplorerApp` gains `handleSelectCity(id: string)` and `const [travelSections, setTravelSections] = useState<PanelSection[] | null>(null)`.

- [ ] **Step 1: `lib/travel-rail.ts`**

```ts
import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import type { RailGroup } from "@/components/IndexRail";
import { getCitiesForCountry } from "@/lib/places-registry";

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
  const cityGroup: RailGroup = {
    type: "cities",
    label: language === "zh-CN" ? "城市" : "Cities",
    glyph: "⌂",
    items: cities.map((c) => ({ id: c.id, name: language === "zh-CN" ? c.nameZh : c.nameEn })),
  };
  if (cityGroup.items.length) groups.push(cityGroup);
  return groups;
}
```

- [ ] **Step 2: ExplorerApp — imports + state**

```ts
import CityMarkers from "@/components/CityMarkers";
import { getCityById, getCitiesForCountry } from "@/lib/places-registry";
import { resolveTravelGuide, travelGuideToSections } from "@/lib/travel-lesson";
import { travelRailGroups } from "@/lib/travel-rail";
import type { PanelSection } from "@/components/ReadingPanel";
```

State: `const [travelSections, setTravelSections] = useState<PanelSection[] | null>(null);`
Also a `travelPlace` for the panel header: `const [travelPlace, setTravelPlace] = useState<{ name: string } | null>(null);`

- [ ] **Step 3: `handleSelectCity`**

```ts
const handleSelectCity = useCallback((id: string) => {
  const guide = resolveTravelGuide(id, language);
  if (!guide) return;
  const isOverview = id.endsWith("-overview");
  const name = isOverview
    ? (language === "zh-CN" ? activeRegionName : activeRegionNameEn)
    : (() => {
        const c = getCityById(id);
        return c ? (language === "zh-CN" ? c.nameZh : c.nameEn) : id;
      })();
  setTravelPlace({ name });
  setTravelSections(travelGuideToSections(guide, language));
  setActiveTerrain(null);
  setLesson(null);
  const c = getCityById(id);
  if (c) mapRef.current?.focusCity(c.lon, c.lat, c.view);
  else mapRef.current?.flyToRegion?.(activeRegion);
}, [language, activeRegion, activeRegionName, activeRegionNameEn]);
```

Recompute `travelSections` on language change: add an effect that, if `travelPlace` is set, re-resolves. Simplest — key the current selection id in state and re-run `handleSelectCity(currentId)` when `language` changes.

- [ ] **Step 4: Branch the render**

Replace the Task-2 temporary placeholder and guards:

- Map overlay:
```tsx
{mode === "study" && (
  <CesiumOverlayLabels mapRef={mapRef} … />
)}
{mode === "travel" && (
  <CityMarkers
    mapRef={mapRef}
    cities={getCitiesForCountry(activeRegion)}
    activeId={/* current travel selection id */ null}
    language={language}
    onSelect={handleSelectCity}
  />
)}
```

- `<CesiumMap … mode={mode} />`

- IndexRail:
```tsx
{!showIntro && (
  <IndexRail
    language={language}
    groups={mode === "travel" ? travelRailGroups(activeRegion, language) : railGroups}
    activeId={mode === "travel" ? /* travel id */ null : (activeTerrain?.id ?? null)}
    onSelect={mode === "travel" ? handleSelectCity : handleSelectById}
  />
)}
```

- ReadingPanel: pass `sections={mode === "travel" ? travelSections : null}` and, when travel, `terrain={travelPlace ? { name: travelPlace.name, elevation: NaN } : null}`.

- JourneyBar: keep `mode === "study"` gate for now (travel routes are Phase 2). Remove the `activeRegion === "china"` special-case? No — leave as is.

- Remove the "建设中" placeholder from Task 2.

Track the current travel selection id in state (`const [travelId, setTravelId] = useState<string | null>(null)`) and set it in `handleSelectCity`; use it for `activeId` above.

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit && rm -rf .next && npm run build 2>&1 | grep -E "Compiled|Failed"
node --experimental-strip-types scripts/check-terrain-camera.ts | tail -1
node --experimental-strip-types scripts/check-places.ts | tail -1
```

Browser (prod server, australia region — set `localStorage.setItem("fge-active-region","australia")`):
1. Toggle to 旅游 → terrain labels gone, city dots appear (悉尼 visible; zoom in → all 7).
2. Left rail → "国家概览" + "城市" groups. Click 悉尼 → camera flies to Sydney, right panel shows 6 sections (概览 / 地理与格局 / …).
3. Click "澳大利亚概览" → panel shows the country overview.
4. Toggle back to 学习 → China terrain atlas intact, click 秦岭 works.
5. Switch language mid-travel → panel + rail + markers follow.

- [ ] **Step 6: Commit**

```bash
git add lib/travel-rail.ts components/ExplorerApp.tsx
git commit -m "feat(travel): wire travel mode into ExplorerApp (markers, rail, panel)"
```

---

## Task 10: `IndexRail` + `JourneyBar` mode polish

**Files:**
- Modify: `components/IndexRail.tsx`
- Modify: `components/JourneyBar.tsx`
- Modify: `components/ExplorerApp.tsx`

**Interfaces:**
- `JourneyBar` gains `mode: "study" | "travel"`.

- [ ] **Step 1: IndexRail — pin the overview entry**

In `IndexRail.tsx`, if a group has `type === "overview"`, render its single item as a top-level pinned button above the category strip (not nested under a category). Small conditional in the render. No prop change needed — detect `type === "overview"`.

- [ ] **Step 2: JourneyBar — mode subtitle**

Add `mode` prop. When `mode === "travel"`, the chip subtitle uses the city string (dep → arr) instead of the terrain string. Since travel routes are Phase 2, JourneyBar is still only rendered in study mode — so this is a no-op guard for now; add the prop and the branch so Phase 2 needs no JourneyBar change. Pass `mode={mode}` from ExplorerApp.

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit && rm -rf .next && npm run build 2>&1 | grep -E "Compiled|Failed"
```
Browser: travel rail shows "国家概览" as a distinct pinned entry at the top; study rail unchanged.

- [ ] **Step 4: Commit**

```bash
git add components/IndexRail.tsx components/JourneyBar.tsx components/ExplorerApp.tsx
git commit -m "feat(travel): pinned overview entry in rail; JourneyBar mode prop"
```

---

## Task 11: Australia travel content — 6 more cities

**Files:**
- Modify: `lib/travel-content.zh.ts`
- Modify: `lib/travel-content.en.ts`
- Modify: `scripts/check-places.ts`

- [ ] **Step 1: Write the guides**

Add to both `TRAVEL_CONTENT_ZH` and `TRAVEL_CONTENT_EN`, using the exact 6-key `TravelGuide` shape (`identity / layout / gettingAround / culture / seeAndDo / whenAndTips`), ~150–220 words per section per language:

- `melbourne` — 维多利亚州首府；文艺/咖啡/体育之城；网格状 CBD + 电车网；四季分明、"一天四季"多变天气；周边大洋路、亚拉河谷。
- `brisbane` — 昆士兰州首府；亚热带、全年温暖；布里斯班河穿城；通往阳光海岸、黄金海岸、摩顿岛的门户。
- `perth` — 西澳首府；全国最孤立的大城市；地中海式气候、日照极多；天鹅河、国王公园、罗特尼斯岛；与东岸有 2–3 小时时差。
- `adelaide` — 南澳首府；规划出来的"教堂之城"、四周环绕公园带；干热夏季；巴罗萨/麦克拉伦谷葡萄酒产区、袋鼠岛的门户。
- `cairns` — 热带昆士兰北部；通往大堡礁和戴恩树雨林的基地；旱季（5–10 月）最好，雨季炎热潮湿、有热带气旋风险；城市小、以旅游为主。
- `darwin` — 北领地首府；全澳最靠近亚洲的首府；只有旱季/雨季；通往卡卡杜和利奇菲尔德的门户；二战与原住民文化背景。

Source discipline: Tourism Australia / state boards / BoM climate normals / Home Affairs entry rules. Climate months, transit systems, visa basics = stated as fact. "Best time", "worth seeing" = general guidance, hedged.

- [ ] **Step 2: Flip travel-content check to hard fail**

In `scripts/check-places.ts`, change the two travel-content lines from warning to `fail(...)` (i.e. `failures++`).

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit && rm -rf .next && npm run build 2>&1 | grep -E "Compiled|Failed"
node --experimental-strip-types scripts/check-places.ts
```
Expected: `7 城市, 1 概览, 0 项异常`.

Browser (australia, travel): click 墨尔本, 珀斯, 达尔文 — each opens a full 6-section guide; switch to EN, re-check 2 of them read as native English.

- [ ] **Step 4: Commit**

```bash
git add lib/travel-content.zh.ts lib/travel-content.en.ts scripts/check-places.ts
git commit -m "content(travel): Australia — 6 more city guides (zh + en)"
```

---

## Task 12: Docs + CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`
- Modify: memory (`content-audit` / new `two-mode` memory)

- [ ] **Step 1: CLAUDE.md**

Under 核心架构 / 关键文件, add the travel-mode files and the `AppMode` concept:
- `lib/app-mode.ts` — `AppMode` study|travel, localStorage
- `lib/places-registry.ts` — 旅游模式城市/机场/国家概览单一真实源
- `lib/travel-content.{zh,en}.ts` + `lib/travel-lesson.ts` — 城市攻略 6 段
- `components/CityMarkers.tsx` — 旅游模式城市点覆盖层
- Note: study mode = terrain atlas (unchanged); travel mode = city guides; toggle in header; routes get per-mode narration (`ROUTE_NARRATION[id].{study,travel}`).

Under 当前阶段, add: 两模式 Phase 1 完成（架构 + 澳洲国家概览 + 7 城）；Phase 2 = 中国旅游 + 补中国航线。

- [ ] **Step 2: Verify + commit**

```bash
git add CLAUDE.md
git commit -m "docs: two-mode Phase 1 in CLAUDE.md"
```

---

## Final verification (run after Task 12)

```bash
npx tsc --noEmit
rm -rf .next && npm run build 2>&1 | grep -E "Compiled|Failed"
node --experimental-strip-types scripts/check-terrain-camera.ts | tail -1   # 106/106
node --experimental-strip-types scripts/check-routes.ts | tail -1           # 4/4
node --experimental-strip-types scripts/check-places.ts                     # 7 城市 0 异常
```

Browser regression pass (prod server):
- Study mode / China: intro, rail 14 groups, click 秦岭 → 6 sections + narration (Ava voice EN), route flight works, region highlight is the thin dim outline.
- Study mode / Australia: 22 terrains, click K'gari.
- Travel mode / Australia: 7 city dots + overview, click Sydney → camera + guide, language switch follows, no JourneyBar.
- Mode toggle persists across reload; region selector still works in both modes.

Then open PR (base `fill/placeholders` or whatever is current tip) titled "feat: two-mode (study/travel) — Phase 1 + Australia travel".

---

## Self-review notes (checked against the spec)

- Spec §2 mode switch → Task 2. §3.1 places-registry → Task 3. §3.2 travel-content → Tasks 5, 11. §3.3 travel-lesson → Task 5. §3.4 route narration → Task 6. §4.1 mode wiring → Task 9 (lighter than the `ModeConfig` abstraction in the spec — the plan branches inline + `travel-rail.ts`; the full `ModeConfig` is deferred as the spec allows "不追求一步到位"). §4.2 CesiumMap mode prop → Task 8. §4.3 mode state → Task 2. §4.4 ReadingPanel generic sections → Task 1. §5 CityMarkers → Task 7. §6 route dual narration → Task 6 (structure) + Phase 2 (travel text). §7 deliverables → all tasks. §8 out-of-scope respected (no new countries/routes/accounts). §9 roadmap → not implemented, documented in Task 12.
- `study-mode.ts` from the spec §4.1 is NOT created in Phase 1 — the plan keeps study wiring in place and only adds travel wiring, which is lower-risk. If ExplorerApp branching gets messy in Phase 2, extract then.
- Type names consistent: `AppMode`, `PlaceTier`, `CityEntry`, `TravelGuide`, `PanelSection`, `getRouteNarration(id,lang,mode)`, `resolveTravelGuide(id,lang)`, `travelGuideToSections(g,lang)`, `travelRailGroups(country,lang)`, `focusCity(lon,lat,view?)` — same everywhere they appear.
