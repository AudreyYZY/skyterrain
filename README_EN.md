# Flight Geography Explorer

> Learn the Earth's landforms from an airplane window · [中文](./README.md)

A documentary-style web app for understanding terrain from a passenger's window seat.

Not a GIS dashboard, not a flight simulator, not a game — it drops you onto a 3D globe at
cruising altitude looking down at one landform, frames its most iconic feature, and pairs it
with authoritative, easy-to-remember narration so you actually *understand* what you're seeing.

**Current scope:** all of China (all of Xinjiang + national core terrain).
**Roadmap:** Asia → global.

---

## Highlights

### Terrain set — single source of truth

- **88 national landforms** registered in [`lib/terrain-registry.ts`](lib/terrain-registry.ts):
  mountain systems / plateaus / basins / plains / hills / deserts / lakes / valleys / gorges /
  deltas / islands.
- Each entry records an **anchor** (main peak / lake / hub city + lon/lat + elevation), a
  **bounding box**, a **trend axis**, and a **data source**. The sidebar, map labels, camera,
  and region highlight are all driven by this one registry.
- **32-location detailed Xinjiang dataset** (`data/*.json`) with full lessons, glance cards,
  and knowledge entries.

### Data-driven camera — nothing hardcoded

Click any terrain → [`computeTerrainCamera()`](lib/terrain-camera.ts) derives
`{ target, heading, pitch, range }` from the bbox scale and trend axis, parking the camera
where its **most iconic feature is clearly in view**, anchor centered in frame — an airplane
window shot.

- Heading comes from the terrain's trend plus an optional editorial `viewFrom` hint (which
  side of the anchor the camera sits on).
- Pitch / range scale with terrain size; for huge terrains (Tibetan Plateau, Kunlun,
  Himalaya) the camera focuses on a representative section around the anchor.
- Geometry self-check: `node --experimental-strip-types scripts/check-terrain-camera.ts` (88/88).

### Tectonic-lift highlight

On hover or selection, **the ground within the terrain's outline rises as one block,
following the real elevation profile** (sampled once via `sampleTerrainMostDetailed` and
cached) — like a tectonic plate lifting, not a floating frame drawn on a static layer. The
material is very faint and keeps the original surface colors; the side walls are the block's
cross-section.

- 42 terrains use **real boundary polygons** extracted from Natural Earth
  (`public/data/gis/exports/*.geojson`); the rest fall back to a bbox octagon.
- Extraction script: `node scripts/extract-ne-landforms.mjs` (zero-dependency, hand-written
  shp/dbf parser).

### Zoom-adaptive map labels

HTML label layer ([`CesiumOverlayLabels.tsx`](components/CesiumOverlayLabels.tsx)):

- `EllipsoidalOccluder` culls labels on the back of the globe so they don't pile up when
  zoomed out.
- Labels reveal by tier as you zoom in (continental → national → regional → POI); font size
  scales with zoom.
- Labels light up in sync with the block highlight on hover / selection (amber pill + outline).

### Natural voice · sentence highlight

- Edge TTS (default `zh-CN-XiaoxiaoNeural`, the most natural Mandarin female voice) with
  word-boundary-accurate sentence highlighting.
- Falls back to browser TTS if Edge TTS fails, advancing the highlight on a character-count
  estimate.
- One-click Chinese / English switch; voice and lesson text switch together.

### Structured lessons — authoritative, not AI-generated

Each lesson has **6 universal sections** ([`lib/lesson.ts`](lib/lesson.ts) `LESSON_SECTION_ORDER`):

| Section | Content |
|---|---|
| Overview | what it is, where, why it matters, the overall impression from the air |
| Landform | shape, scale, composition, origin |
| From the air | key vantage points, landmarks, colors and textures |
| Telling it apart | contrasts with similar terrain (Qinling vs Nanling, Tarim vs Junggar…) |
| Geography note | why it counts as this landform type, common misconceptions (a low-elevation plateau is still a plateau; a high-elevation basin is still a basin…) |
| History & people | — |

- Content lives in [`lib/terrain-content.ts`](lib/terrain-content.ts) (`getTerrainContent(id)`),
  summarized from widely-accepted geography facts (China National Geographic, CAS, Ministry of
  Natural Resources) — not documentary voiceover, not free-form generation.
- **34 terrains** written so far (20 first-tier terrains plus Changbai, Hengduan, Nanling,
  Hexi Corridor, Yangtze Gorges, Yarlung Tsangpo Grand Canyon, Qinghai Lake, Poyang Lake,
  Hainan Island, Taiwan Island, and more). Others show a placeholder.

### Route flights

3 preset routes (`data/routes/`): North Xinjiang Classic, Pamir Plateau, Turpan Flaming
Mountains. Auto-fly along the path with narration triggered at each terrain.

### Window-photo mode (optional)

Upload a window-seat photo and an OpenAI-compatible multimodal model (DeepSeek by default)
guesses the terrain. Requires the `MIMO_*` environment variables.

---

## Tech stack

- **Next.js 16** (App Router, `--webpack`) + **React 19** + **TypeScript 5**
- **CesiumJS 1.141** — 3D globe, camera system, terrain elevation sampling
- **Tailwind CSS v4**
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
| `MIMO_API_KEY` / `MIMO_BASE_URL` / `MIMO_MODEL` | optional | Window-photo identification (OpenAI-compatible multimodal API) |
| `MIMO_VISION_MODEL` | optional | Pin a vision-capable model |

### Common commands

```bash
npm run dev      # dev (webpack)
npm run build    # production build
npm run lint     # ESLint
node --experimental-strip-types scripts/check-terrain-camera.ts   # camera geometry self-check
node scripts/extract-ne-landforms.mjs                             # re-extract terrain boundaries
```

---

## Project structure

```
app/
  api/tts/            — Edge TTS
  api/narration/      — lesson script generation
  api/photo-identify/ — window-photo identification
  page.tsx layout.tsx globals.css

components/
  ExplorerApp.tsx          — main orchestrator
  CesiumMap.tsx            — 3D globe, camera, tectonic-lift highlight
  CesiumOverlayLabels.tsx  — HTML terrain label layer (zoom-adaptive)
  TerrainSidebar.tsx       — sidebar (category navigation)
  NarrationPanel.tsx       — right-side lesson panel
  StructuredLesson.tsx     — 6-section lesson renderer
  RouteControls.tsx        — route controls
  PhotoModePanel.tsx       — window-photo mode
  VoiceSelector.tsx        — voice pack selector

lib/
  terrain-registry.ts       — [single source of truth] anchor/extent/axis/source for 88 terrains
  terrain-camera.ts         — computeTerrainCamera() data-driven camera derivation
  terrain-content.ts        — authoritative structured lesson content (getTerrainContent)
  lesson.ts                 — lesson section order / assembly / speech text
  terrain-label-registry.ts — labels (generated from the registry)
  terrain-label-theme.ts    — label visual tokens
  terrain.ts                — Xinjiang terrain registration (coords overridden by the registry)
  speech.ts                 — TTS system (Edge TTS + browser fallback)
  i18n.ts / i18n-stories.ts — UI i18n / lesson translations
  routes.ts                 — flight routes
  narration-*.ts            — lesson script engine / queue / session manager

features/
  china-core-features.ts    — national core terrain definitions
  xinjiang-core-features.ts — Xinjiang terrain definitions
  types.ts                  — GeographicFeature types

data/
  *.json                    — Xinjiang terrain data (32 locations)
  routes/                   — route definitions
  gis/                      — raw Natural Earth shp/dbf (git-ignored)

public/data/gis/exports/    — 42 extracted terrain-boundary geojson files

scripts/
  check-terrain-camera.ts   — camera geometry self-check
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

## Data model

```
TerrainEntity     — terrain entity (Tianshan, Qinling, Sichuan Basin…)
GeometryRecord    — geometry record (Polygon / LineString / bbox)
FeatureOfInterest — narration point of interest (Mt. Taibai, Chengdu, Golmud…)
Story             — lesson content (6 sections)
KnowledgeLink     — knowledge link (terrain ↔ concept)
ProvenanceRecord  — data provenance (source, precision, retrieval time)
```

---

## Docs

| Doc | Content |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | product positioning, architecture, dev conventions, do-not list |
| [`docs/architecture.md`](docs/architecture.md) | layers, modules, data flows, architecture smells |
| [`docs/architecture-metrics.md`](docs/architecture-metrics.md) | project health metrics, module coupling |
| [`DESIGN.md`](DESIGN.md) | UI / visual design spec |

---

## Data sources

| Data | Source |
|---|---|
| Terrain boundaries | Natural Earth 10m Geography Regions |
| Satellite imagery | Bing Maps (Cesium Ion) |
| Terrain elevation | Cesium World Terrain |
| Terrain lessons | Widely-accepted geography facts (China National Geographic, CAS, Ministry of Natural Resources), hand-summarized |

---

## License

Copyright © 2026 Audrey Yang. All Rights Reserved.

No copying, modification, distribution, sublicensing, or commercial use without the copyright
holder's written permission. See [LICENSE](LICENSE).
