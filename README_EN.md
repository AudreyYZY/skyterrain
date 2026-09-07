# Flight Geography Explorer

> Understand the Earth from an airplane window · [中文](./README.md)

A documentary-style web app for understanding the world from a passenger's window seat:
it drops you onto a 3D globe at cruising altitude looking down at one place, frames its most
telling feature, and pairs it with a written geography lesson so you actually
*understand* what you're seeing.

Not a GIS dashboard, not a flight simulator, not a game.

> **Read this before you rely on anything here**: the text and data in this project were
> **compiled from public sources without a line-by-line human review**. Factual errors have
> been found before and more certainly remain. The error classes, the ones already fixed, and
> the automated guards now in place are recorded in
> [`docs/known-errors.md`](docs/known-errors.md). Do not treat any figure, flight number or
> airport name here as citable. See [Data reliability](#data-reliability) below.

**Two modes** (one-click switch in the header, remembered in `localStorage`):

| Mode | The question it answers | Content |
|---|---|---|
| **Study** | "What landform is that? How did it form?" | Terrain atlas — 1041 landforms + 6-section lessons |
| **Travel** | "I've landed in an unfamiliar city — what do I need to know?" | City overviews — layout / getting around / culture / when to go |

The two content systems run in parallel and don't interfere.

**Current scope** (`check-regions.ts` / `check-places.ts` / `check-routes.ts` print exact
counts on every run — **trust those over this paragraph if they ever disagree**; the
country-by-country breakdown lives in `CLAUDE.md`'s "范围" section, kept current on every
expansion, and isn't duplicated here to avoid a second copy going stale):
- Study — Asia · Europe · North America · South America · Oceania, 38 countries, 1041 landforms, bilingual
- Travel — covers all 38 countries live in study mode, 38 country overviews + 691 cities, bilingual;
  295 commercial routes (domestic + international) with bilingual study/travel narration each

**Roadmap:** keep expanding study-mode terrain coverage (Africa not yet started) + expand travel-mode city coverage by tourism demand.

---

## Highlights

### Terrain set — single source of truth

- **1041 landforms** registered in [`lib/terrain-registry.ts`](lib/terrain-registry.ts), 14 categories:
  `mountain_system` / `plateau` / `basin` / `plain` / `hills` / `desert` / `lake` / `river` /
  `valley` / `gorge` / `island` / `grassland` / `coast` / `inselberg`.
- Each entry records an **anchor** (main peak / lake / hub city + lon/lat + elevation), a
  **bounding box**, a **trend axis**, **Chinese & English names**, and a **data source**. The
  sidebar, map labels, camera, and region highlight are all driven by this one registry.
- Selection standard and category criteria: [`docs/terrain-taxonomy.md`](docs/terrain-taxonomy.md)
  (T1 skeleton / T2 physiographic province / T3 landmark) — don't add entries by gut feel.

### Travel mode — cities, not landforms

- Cities and country overviews are registered in [`lib/places-registry.ts`](lib/places-registry.ts):
  lon/lat, tier (capital / major / notable), airport, source.
- Each guide has **6 `TravelGuide` sections** ([`lib/travel-lesson.ts`](lib/travel-lesson.ts)):
  overview / layout / getting around / culture / see & do / when to go & tips.
- Content lives in [`lib/travel-content.{zh,en}.ts`](lib/travel-content.zh.ts), summarized from
  national tourism boards / meteorological-agency climate normals / entry information /
  established guidebook consensus — comparative and subjective claims removed.
- The map shows only **city points + airports** ([`CityMarkers.tsx`](components/CityMarkers.tsx),
  revealed by tier as the camera descends).
- Self-check: `node --experimental-strip-types scripts/check-places.ts`.

### Data-driven camera — nothing hardcoded

Click any terrain → [`computeTerrainCamera()`](lib/terrain-camera.ts) derives
`{ target, heading, pitch, range }` from the bbox scale and trend axis, parking the camera
where its **most iconic feature is clearly in view**, anchor centered in frame — an airplane
window shot.

- Heading comes from the terrain's trend plus an optional editorial `viewFrom` hint (which
  side of the anchor the camera sits on).
- Pitch / range scale with terrain size; large plateaus / basins / plains / deserts get a
  `viewScale` in the registry's `WIDE_VIEW` so the shot pulls back far enough to read as
  "a whole upland / basin," not one local feature (a lake, a city) near the anchor.
- Geometry self-check: `node --experimental-strip-types scripts/check-terrain-camera.ts` (1041/1041).

### Region highlight — a restrained outline

On hover or selection, a **thin, faint warm outline** is drawn over the terrain's extent
(a fixed-height polyline, not clamped to ground, so the block reads from any angle including
straight down). It is not an official geographic boundary — just a "this is the block you're
looking at" cue, deliberately kept subtle so it doesn't obscure surface detail.

- 42 terrains use **real boundary polygons** extracted from Natural Earth
  (`public/data/gis/exports/*.geojson`); the rest fall back to a bbox octagon.
- Hover hit-testing uses `scene.drillPick` and picks the smallest (most specific) block among
  overlapping hits.
- In travel mode, terrain picking and highlighting are turned off entirely.

### Zoom-adaptive map labels

HTML label layer ([`CesiumOverlayLabels.tsx`](components/CesiumOverlayLabels.tsx)):

- `EllipsoidalOccluder` culls labels on the back of the globe so they don't pile up when
  zoomed out.
- Labels reveal by tier as you zoom in (continental → national → regional → POI); font size
  scales with zoom.
- Labels light up in sync with the block highlight on hover / selection; Chinese / English
  follows the language toggle.

### Natural voice · sentence highlight

- Edge TTS (`zh-CN-XiaoxiaoNeural` for Chinese, `en-US-AvaMultilingualNeural` for English)
  with word-boundary-accurate sentence highlighting.
- Falls back to browser TTS if Edge TTS fails, advancing the highlight on a character-count
  estimate.
- One-click Chinese / English switch; voice and lesson text switch together.

### Structured lessons — compiled from public sources

Study-mode lessons have **6 universal sections** ([`lib/lesson.ts`](lib/lesson.ts) `LESSON_SECTION_ORDER`):

| Section | Content |
|---|---|
| Overview | what it is, where, why it matters, the overall impression from the air |
| Landform | shape, scale, composition, origin |
| From the air | key vantage points, landmarks, colors and textures |
| Telling it apart | contrasts with similar terrain (Qinling vs Nanling, Tarim vs Junggar…) |
| Geography note | why it counts as this landform type, common misconceptions (a low-elevation plateau is still a plateau; a high-elevation basin is still a basin…) |
| History & people | — |

- Content lives in [`lib/terrain-content.{zh,en}.ts`](lib/terrain-content.zh.ts)
  (`getTerrainContent(id, lang)`), compiled with reference to widely-accepted geography
  sources (China National Geographic, CAS, Ministry of Natural Resources, Geoscience
  Australia, Parks Australia, UNESCO) — not documentary voiceover, but **not
  individually verified against those sources either**.
- **All 1041 have bilingual lessons.** An early batch of 61 (China 39 + Australia 22, back when
  those were the only two countries in the registry) went through a dedicated line-by-line
  source-verification pass: comparative / subjective judgments removed, disputed points
  qualified or given side by side, anything unverifiable dropped, figures normalized to
  authoritative sources. **That was the writing standard, not a sign-off by a reviewer.**
  **Verification depth is uneven across the registry**: the `source`
  field is populated on every entry, but only a fraction cite a specific, checkable source
  (a named Wikipedia article, a national survey bulletin, etc.) — the rest say something more
  general like "approximate" or just name an agency, and a handful explicitly flag themselves
  as "approximate coordinates / unverified in the field." Treat `source` as an audit trail, not
  a quality certification — double-check any figure you plan to rely on.
- [`lib/terrain-lesson.ts`](lib/terrain-lesson.ts) `resolveLesson(id, lang)` decides which
  lesson to use, in one place.
- Known failure modes (a mechanism simplified into an outright error, an unqualified
  superlative, population/area figures with no year or definition) and the specific instances
  already fixed are listed in [`docs/known-errors.md`](docs/known-errors.md).

### Route flights

- **295 routes** (`data/routes/*.json`) across the countries listed above, domestic and
  China–other-country international. Each is a genuinely connected city pair plus departure
  and arrival airports and terrain waypoints along the way; the data also carries an
  airline / flight number / aircraft.
  **Do not read the set as 295 real commercial flights**: the city pairs and airports check
  out, but the flight number and aircraft recorded at writing time were an example, and a
  substantial share do not hold up (of 24 Chinese domestic routes sampled, 19 carried a
  flight number that does not fly that route at all).
- Under 3 minutes each: the camera jumps to a slanted view over the departure airport →
  immediately starts a **single continuous narration written for that route**
  ([`lib/route-narration.ts`](lib/route-narration.ts), bilingual, regional-geography-textbook
  register) → and flies the waypoints at a steady pace.
- Each route has two narrations, following the current mode: `ROUTE_NARRATION[id].{study, travel}`.
- Self-check: `node --experimental-strip-types scripts/check-routes.ts`.
- **Flight numbers and aircraft are shown only when verified.** `FlightRoute.source`
  (`ref` / `checkedOn` / `status`) is the verification trail and `isFlightVerified()` in
  [`lib/routes.ts`](lib/routes.ts) is the single gate: a route with no trail, or one whose
  trail concluded `wrong`, shows **no** flight number or aircraft anywhere — not in the UI,
  not in search, not in the narration. The route still flies and its geography narration still
  plays. `npm run check:routes` hard-fails if an unverified route's narration names an
  aircraft or a flight number.
- Where it stands: **59 of 295 verified** (45 confirmed + 14 checked and found wrong),
  **236 not yet checked**. International routes mostly drifted on aircraft type; Chinese
  domestic routes were wrong 19 times out of 24 sampled, usually because the flight number
  does not serve that city pair. **Even the verified 59 are a snapshot taken on `checkedOn`** —
  airlines renumber and swap aircraft without notice. Check the airline or an OTA before you fly.

---

## Data reliability

This project carries a lot of prose (1041 landforms × 6 sections + 691 cities × 7 sections +
295 routes × 2 narrations, in two languages). **It was compiled from public sources and nobody
reviewed it line by line.** A fair number of factual errors have already been found and fixed;
more are certainly still in there. Here is what holds up, what does not, and what catches it.

### By content type

| Content | Confidence | Notes |
|---|---|---|
| Terrain **position and extent** | Higher | Each entry cites a source in `source`; camera geometry is asserted in CI |
| Terrain **lesson text** | Medium | Compiled from public sources, written to avoid comparatives and disputed claims — but never signed off entry by entry |
| City **coordinates / IATA / airport** | Higher | `check:places` enforces completeness; renamings are caught only when someone notices (see known-errors) |
| City **structure and daily-life text** | Medium | Same as terrain lessons; many population/area figures **carry no year or definition** |
| Route **city pairs and airports** | Higher | All genuinely connected city pairs |
| Route **flight number / aircraft** | **Low — hidden by default** | Only 59/295 verified; the rest never appear in UI, search or narration |

### Automated guards

```bash
npm run check          # runs everything below
npm run check:regions  # continent / subregion / country ↔ terrain count consistency
npm run check:camera   # camera geometry (1041/1041)
npm run check:places   # city coordinates / IATA / source / bilingual completeness
npm run check:routes   # waypoint monotonicity, narration length, verification trail, aircraft consistency
npm run check:flight   # camera-motion assertions (speed/height ratio, acceleration, turn rate, silent tail)
npm run check:anchors  # sentence→waypoint anchor tables, camera-lag statistics
npm run check:claims   # perishable-claim scan (population figures with no year, subjective superlatives, rank claims)
npm run verify:report -- <findings.json>   # land a verification round: open/close issues + ledger
```

**These only catch self-contradiction and forbidden phrasing — they cannot tell you whether a
statement is true.** That needs the web, which is what the flow below is for.

### Content verification flow (run after each batch)

After adding terrain / cities / routes, check the new material against authoritative sources:

```
/verify-content            # everything added or changed since the last run
/verify-content cities kul-lgk kch-myy   # or a specific scope
```

It works out what changed (git diff + the ledger), hands the entries to the
`content-verifier` subagent in batches to check online against official sources first
(reporting `unknown` rather than inventing a plausible answer), fixes outright errors on the
spot, and then hands the verdicts to `npm run verify:report`, which lands them mechanically:

- fixed → if an issue was open for it, comment with the fix and the source, then **close** it
- not fixed (wrong but no reliable replacement found) → **open an issue** automatically, with
  a dedupe key in the body so re-runs don't duplicate it, and **reopen** it if the problem
  recurs after being closed
- every round → a progress comment on the umbrella issue plus a row appended to
  [`docs/verification-ledger.md`](docs/verification-ledger.md)

Rules live in [`.claude/skills/verify-content/SKILL.md`](.claude/skills/verify-content/SKILL.md).

### Found an error?

Please open an [issue](../../issues) with the `data-error` label. Known error classes, their
root causes, how they were fixed and which guard now catches them are in
[`docs/known-errors.md`](docs/known-errors.md) — **file a new finding under one of those
classes; if it doesn't fit, it's a new class and needs a new guard alongside the fix.**

---

## Tech stack

- **Next.js 16** (App Router, `--webpack`) + **React 19** + **TypeScript 5**
- **CesiumJS 1.141** — 3D globe, camera system, terrain elevation sampling
- **Tailwind CSS v4** · **Newsreader** serif (editorial typography)
- **edge-tts-universal** — Edge TTS

---

## Quick start

```bash
npm install
cp .env.example .env.local
# Edit .env.local — at minimum set NEXT_PUBLIC_CESIUM_ION_TOKEN

npm run dev
```

Open http://localhost:3000

### Environment variables

| Variable | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_CESIUM_ION_TOKEN` | strongly recommended | Cesium Ion token ([free signup](https://ion.cesium.com/tokens)). Without it the globe is a flat ellipsoid with no relief. |

### Common commands

```bash
npm run dev        # dev (webpack)
npm run build      # production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit

npm run check:regions   # continent/sub-region/country terrain-count consistency
npm run check:camera    # camera geometry self-check (1041/1041)
npm run check:places    # travel-place self-check (city coords/IATA/sources/bilingual content)
npm run check:routes    # route self-check (waypoint monotonicity, narration length, airports, …)
npm run check            # runs all of the above (typecheck + lint + 4 checks)

node scripts/extract-ne-landforms.mjs   # re-extract terrain boundaries
```

---

## Project structure

```
app/
  api/tts/            — Edge TTS (per-language PROSODY)
  page.tsx layout.tsx globals.css

components/
  ExplorerApp.tsx          — main orchestrator (mode / lesson / route / voice + UI composition)
  CesiumMap.tsx            — 3D globe, camera, region outline highlight, appMode / focusCity
  CesiumOverlayLabels.tsx  — HTML terrain label layer (zoom-adaptive, study mode)
  CityMarkers.tsx          — map city points (travel mode, revealed by camera altitude)
  ContinentIntro.tsx       — opening swipe carousel of continents (shared by study/travel mode;
                              caller passes whether the count is landforms or cities)
  IndexRail.tsx            — left index (study: sub-region → country → terrain; travel: country →
                              province/state → city, sorted alphabetically, colored dot hints the
                              broader region)
  ReadingPanel.tsx         — single right-side reading panel (card ⇄ article, sentence highlight)
  JourneyBar.tsx           — bottom route filmstrip
  StructuredLesson.tsx     — section renderer (6-section lesson / generic section array)
  ModeToggle.tsx           — header Study / Travel switch
  RegionSelector.tsx       — header continent / sub-region two-level switch

lib/
  terrain-registry.ts       — [single source of truth] anchor/extent/axis/names/source for 1041 terrains
  terrain-camera.ts         — computeTerrainCamera() data-driven camera derivation
  terrain-content.{zh,en}.ts— authoritative 6-section lesson content (zh / en)
  terrain-lesson.ts         — resolveLesson(id, lang): one place decides which lesson to use
  terrain-label-registry.ts — labels (generated from the registry, with nameEn)
  lesson.ts                 — lesson section order / headings / assembly
  routes.ts / route-narration.ts — routes (295 currently, domestic + international; flight numbers surface only when verified) + two continuous narrations each
  app-mode.ts               — AppMode type + localStorage read/write
  places-registry.ts        — [travel-mode single source of truth] cities + country overviews
  travel-content.{zh,en}.ts — travel-mode 6-section TravelGuide content (zh / en)
  travel-lesson.ts          — resolveTravelGuide + travelGuideToSections
  travel-rail.ts            — travel-mode left index
  regions.ts                — continent + sub-region (M49) config + country mapping + helpers + DEFAULT_REGION_ID
  subregion-geo.ts          — per-sub-region terrain count / geographic centroid (for the 2-level dropdown fly-to)
  terrain-tier.ts           — terrainTier(id) → T1/T2/T3 + categoryOrder (catalog sort)
  speech.ts                 — TTS system (Edge TTS + browser fallback, follows language)
  i18n.ts / i18n-stories.ts — UI i18n / early lesson translations

features/
  china-core-features.ts       — early core terrain definitions (GeographicFeature)
  china-northwest-features.ts  — early core terrain definitions (NW China: Tianshan / Kunlun / Altai …)

data/
  *.json                    — early terrain data (coordinates now superseded by terrain-registry)
  routes/                   — real route definitions (295 currently, domestic + international)
  gis/                      — raw Natural Earth shp/dbf (git-ignored)

public/data/gis/exports/    — 42 extracted terrain-boundary geojson files

scripts/
  check-terrain-camera.ts   — camera geometry self-check
  check-routes.ts           — route self-check
  check-places.ts           — travel-place self-check
  extract-ne-landforms.mjs  — extract terrain boundaries from Natural Earth
  copy-cesium.mjs           — copy Cesium static assets (postinstall)
```

---

## Camera derivation chain

```
TerrainEntry (registry: anchor landmark + bbox + axis + viewFrom)
  → computeTerrainCamera()   derives { target, heading, pitch, range }
  → flyToTerrainAndWait(payload, { heading, pitch })
  → Cesium camera.flyTo
```

Tuning constants sit at the top of [`lib/terrain-camera.ts`](lib/terrain-camera.ts)
(`FRAME_HALF_ANGLE_DEG` / `PITCH_*` / `SHOW_KM_MAX` / `RANGE_MAX` / `LANDMARK_SCREEN_FRAC`);
framing must be calibrated in a real browser.

---

## Adding a new country

**Study mode:**
1. Add terrain entries to `lib/terrain-registry.ts` (`regionId`); look up each coordinate from
   an authoritative source and record it in `source`
2. Add / enable the region in `lib/regions.ts`
3. Write bilingual 6-section lessons in `lib/terrain-content.{zh,en}.ts`
4. Fill in importance in `lib/terrain-label-registry.ts`
5. `scripts/check-terrain-camera.ts` passes

**Travel mode:**
1. Add cities to `lib/places-registry.ts` and a country overview to `COUNTRY_OVERVIEWS`
2. Write 6-section `TravelGuide` content in `lib/travel-content.{zh,en}.ts`
3. `scripts/check-places.ts` passes (coords / IATA / source / bilingual content complete)

Selection standard: [`docs/terrain-taxonomy.md`](docs/terrain-taxonomy.md).

---

## Docs

| Doc | Content |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | product positioning, architecture, dev conventions, do-not list |
| [`docs/terrain-taxonomy.md`](docs/terrain-taxonomy.md) | terrain-set selection standard and category definitions |
| [`docs/routes.md`](docs/routes.md) | route selection rationale and coverage analysis (⚠️ early snapshot written when there were only 4 routes — numbers are stale, see the note at the top of the doc) |
| [`docs/architecture-metrics.md`](docs/architecture-metrics.md) | project health metrics, module coupling (⚠️ codeatlas report from 2026-06-30, predates the two-mode redesign and world expansion — numbers are stale) |
| [`docs/project-status-2026-09-04.md`](docs/project-status-2026-09-04.md) | 2026-09-04 point-in-time snapshot (Chinese): known-issue triage, what got fixed that day, suggested starting points for the next task — not a living document |
| [`DESIGN.md`](DESIGN.md) | UI / visual design spec |

---

## Data sources

| Data | Source |
|---|---|
| Terrain boundaries | Natural Earth 10m Geography Regions |
| Satellite imagery | Bing Maps (Cesium Ion) |
| Terrain elevation | Cesium World Terrain |
| Terrain lessons | Compiled with reference to China National Geographic, CAS, Ministry of Natural Resources, Geoscience Australia, Parks Australia, UNESCO and similar public sources — **not individually reviewed by a person** |
| Travel guides | Compiled with reference to national tourism boards / meteorological climate normals / entry information / established guidebooks — **not individually reviewed by a person** |
| Flight numbers / aircraft | An example found at writing time; shown only where a `source` trail records a check (currently 59/295), and only as a snapshot of that date |

---

## License

Copyright © 2026 Audrey Yang. All Rights Reserved.

No copying, modification, distribution, sublicensing, or commercial use without the copyright
holder's written permission. See [LICENSE](LICENSE).
