# Flight Geography Explorer

> Understand the Earth from an airplane window · [中文](./README.md)

A documentary-style web app for understanding the world from a passenger's window seat:
it drops you onto a 3D globe at cruising altitude looking down at one place, frames its most
telling feature, and pairs it with authoritative, non-AI-generated narration so you actually
*understand* what you're seeing.

Not a GIS dashboard, not a flight simulator, not a game.

**Two modes** (one-click switch in the header, remembered in `localStorage`):

| Mode | The question it answers | Content |
|---|---|---|
| **Study** | "What landform is that? How did it form?" | Terrain atlas — 914 landforms + authoritative 6-section lessons |
| **Travel** | "I've landed in an unfamiliar city — what do I need to know?" | City overviews — layout / getting around / culture / when to go |

The two content systems run in parallel and don't interfere.

**Current scope** (`check-regions.ts` / `check-places.ts` print exact counts on every run —
trust those over this paragraph if they ever disagree):
- Study — Asia (China 84 + Japan 26 + South Korea 28 + Mongolia 26 + Thailand 25 + Vietnam 25 +
  Malaysia 26 + Singapore 12 + Philippines 22 + Indonesia 26 = 300), Europe (UK 33 + Iceland 28 +
  Switzerland 27 + Norway 28 + France 29 + Italy 30 + Spain 26 + Germany 26 + Greece 26 +
  Portugal 26 + Netherlands 26 + Austria 26 + Belgium 26 + Sweden 26 + Finland 26 +
  Ireland 28 + Denmark 25 + Luxembourg 12 + Poland 25 = 499), North America (USA 26 +
  Canada 25 = 51), Oceania (Australia 34 + New Zealand 30 = 64) — 914 total, bilingual
- Travel — covers all 33 countries live in study mode, 33 country overviews + 379 cities, bilingual;
  209 domestic routes with bilingual study/travel narration each

**Roadmap:** keep expanding study-mode terrain coverage (South America / Africa not yet started) + expand travel-mode city coverage by tourism demand.

---

## Highlights

### Terrain set — single source of truth

- **914 landforms** registered in [`lib/terrain-registry.ts`](lib/terrain-registry.ts), 15 categories:
  `mountain_system` / `plateau` / `basin` / `plain` / `hills` / `desert` / `lake` / `river` /
  `valley` / `gorge` / `island` / `grassland` / `coast` / `inselberg` / `settlement`.
- Each entry records an **anchor** (main peak / lake / hub city + lon/lat + elevation), a
  **bounding box**, a **trend axis**, **Chinese & English names**, and a **data source**. The
  sidebar, map labels, camera, and region highlight are all driven by this one registry.
- Selection standard and category criteria: [`docs/terrain-taxonomy.md`](docs/terrain-taxonomy.md)
  (T1 skeleton / T2 physiographic province / T3 landmark; the `settlement` human-geography layer)
  — don't add entries by gut feel.

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
- Geometry self-check: `node --experimental-strip-types scripts/check-terrain-camera.ts` (914/914).

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

### Structured lessons — authoritative, not AI-generated

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
  (`getTerrainContent(id, lang)`), summarized from widely-accepted geography facts (China
  National Geographic, CAS, Ministry of Natural Resources, Geoscience Australia, Parks
  Australia, UNESCO) — not documentary voiceover, not free-form generation.
- **All 914 have bilingual lessons.** An early batch of 61 (China 39 + Australia 22, back when
  those were the only two countries in the registry) went through a dedicated line-by-line
  source-verification pass: comparative / subjective judgments removed, disputed points
  qualified or given side by side, anything unverifiable dropped, figures normalized to
  authoritative sources. **Verification depth is uneven across the registry**: the `source`
  field is populated on every entry, but only a fraction cite a specific, checkable source
  (a named Wikipedia article, a national survey bulletin, etc.) — the rest say something more
  general like "approximate" or just name an agency, and a handful explicitly flag themselves
  as "approximate coordinates / unverified in the field." Treat `source` as an audit trail, not
  a quality certification — double-check any figure you plan to rely on.
- `settlement` (oasis · settlement) uses only overview / from the air / history & people.
- [`lib/terrain-lesson.ts`](lib/terrain-lesson.ts) `resolveLesson(id, lang)` decides which
  lesson to use, in one place.

### Route flights

- **209 real commercial routes** (`data/routes/*.json`) across the countries listed above
  (the first 4 — Beijing–Ürümqi / Chengdu–Lhasa / Guangzhou–Lhasa / Ürümqi–Kashgar — were the
  original set), each with airline / flight number / aircraft, departure and arrival airports,
  and terrain waypoints along the way.
- Under 3 minutes each: the camera jumps to a slanted view over the departure airport →
  immediately starts a **single continuous narration written for that route**
  ([`lib/route-narration.ts`](lib/route-narration.ts), bilingual, regional-geography-textbook
  register) → and flies the waypoints at a steady pace.
- Each route has two narrations, following the current mode: `ROUTE_NARRATION[id].{study, travel}`.
- Self-check: `node --experimental-strip-types scripts/check-routes.ts`.
- **The city pairs, airlines, and terrain waypoints are researched** (the route genuinely
  exists, and the terrain it flies over genuinely lies along that path); **the specific flight
  number / aircraft type is a real example captured at the time the route was written, not a
  live timetable** — airlines renumber routes, swap aircraft, and drop seasonal service
  constantly, so these figures aren't guaranteed still accurate. Check the airline's own site
  or an OTA for current schedules before you fly.

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
npm run check:camera    # camera geometry self-check (914/914)
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
  IntroOverlay.tsx         — travel-mode opening title card (localStorage remembers "seen")
  ContinentIntro.tsx       — study-mode opening: shuffled swipe carousel of continents, pick one to fly in
  IndexRail.tsx            — left index (study: sub-region → country → terrain; travel: overview + cities)
  ReadingPanel.tsx         — single right-side reading panel (card ⇄ article, sentence highlight)
  JourneyBar.tsx           — bottom route filmstrip
  StructuredLesson.tsx     — section renderer (6-section lesson / generic section array)
  ModeToggle.tsx           — header Study / Travel switch
  RegionSelector.tsx       — header continent / sub-region two-level switch

lib/
  terrain-registry.ts       — [single source of truth] anchor/extent/axis/names/source for 914 terrains
  terrain-camera.ts         — computeTerrainCamera() data-driven camera derivation
  terrain-content.{zh,en}.ts— authoritative 6-section lesson content (zh / en)
  terrain-lesson.ts         — resolveLesson(id, lang): one place decides which lesson to use
  terrain-label-registry.ts — labels (generated from the registry, with nameEn)
  lesson.ts                 — lesson section order / headings / assembly
  routes.ts / route-narration.ts — real commercial routes (209 currently) + two continuous narrations each
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
  routes/                   — real route definitions (209 currently)
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
| [`docs/routes.md`](docs/routes.md) | route selection rationale and coverage analysis |
| [`docs/architecture-metrics.md`](docs/architecture-metrics.md) | project health metrics, module coupling |
| [`DESIGN.md`](DESIGN.md) | UI / visual design spec |

---

## Data sources

| Data | Source |
|---|---|
| Terrain boundaries | Natural Earth 10m Geography Regions |
| Satellite imagery | Bing Maps (Cesium Ion) |
| Terrain elevation | Cesium World Terrain |
| Terrain lessons | Widely-accepted geography facts (China National Geographic, CAS, Ministry of Natural Resources, Geoscience Australia, Parks Australia, UNESCO), hand-summarized and line-by-line source-verified |
| Travel guides | National tourism boards / meteorological-agency climate normals / entry information / established guidebook consensus, hand-summarized |

---

## License

Copyright © 2026 Audrey Yang. All Rights Reserved.

No copying, modification, distribution, sublicensing, or commercial use without the copyright
holder's written permission. See [LICENSE](LICENSE).
