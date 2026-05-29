# PROJECT_MEMORY.md

> This file is the single source of truth for future Claude sessions.
> Read this first before making any changes.

## Project Identity

**Flight Geography Explorer** — An AI-powered cinematic geography documentary web app.
Users experience Xinjiang terrain from an airplane passenger perspective, with structured Chinese narration.

**NOT** a GIS dashboard, flight simulator, or game.

## Tech Stack

- Next.js 16.2.6 (App Router)
- React 19.2.4
- TypeScript 5.x
- CesiumJS 1.141.0 (3D globe)
- TailwindCSS 4.x
- Edge TTS (edge-tts-universal 1.4.0)
- OpenAI API 6.39.0

## Architecture

```
app/
  api/narration/route.ts    — AI narration endpoint
  api/tts/route.ts          — Edge TTS endpoint
  api/photo-identify/route.ts — Photo ID endpoint
  globals.css               — Cinematic CSS utilities
  layout.tsx                — Root layout
  page.tsx                  — Entry → ExplorerApp

components/
  CesiumMap.tsx             — 3D globe, camera system, route flight engine, projectToScreen
  ExplorerApp.tsx           — Main orchestrator, label initialization
  CesiumOverlayLabels.tsx   — Spatial awareness labels (HTML overlays on Cesium)
  FlightControls.tsx        — Flat category terrain list
  NarrationPanel.tsx        — Right floating panel (primary UI)
  StructuredLesson.tsx      — Lesson content (3 sections: seeing, formation, history)
  TerrainGlanceCards.tsx    — Compact metadata strip
  SourceAttribution.tsx     — Data source footer
  TerrainPhotoCarousel.tsx  — Photo overlay (architecture only)
  ResizablePanel.tsx        — Glassmorphism side panels
  RouteControls.tsx         — Flight route selection
  VoiceSelector.tsx         — TTS voice picker
  PhotoModePanel.tsx        — Photo identification mode

lib/
  terrain.ts                — Terrain registry (32 locations, category merge)
  terrain-categories.ts     — Flat category order + labels (7 categories)
  narration-engine.ts       — Structured data → Chinese narration
  lesson.ts                 — Lesson-to-speech conversion (3 sections: seeing, formation, history)
  speech.ts                 — TTS system (Edge TTS + browser fallback)
  routes.ts                 — Route resolution
  geo.ts                    — Haversine distance, bearing
  city-lessons.ts           — City narration data (4 cities)
  narration-queue.ts        — NarrationQueue class (serial, priority, cancel)
  cinematic-labels.ts       — CinematicLabelManager (decoupled annotation layer)

types/
  terrain.ts                — TerrainPoint, TerrainKnowledge (NO funFact, NO GeographyComparison)
  terrain-visual.ts         — TerrainVisualAsset types
  route.ts                  — FlightRoute, RouteWaypoint
```

## Data Inventory

### Terrains: 32 locations (7 display categories)

| Display Category | Count | Data Categories | Locations |
|----------|-------|-----------------|-----------|
| 山脉 | 7 | mountain_range | tianshan, altai, kunlun, karakoram, bogda, pamir, muztagh-ata |
| 湖泊 | 6 | lake | kanas, sayram, tianchi, bosten, aibi, lop-nur |
| 沙漠 | 3 | desert | taklamakan, gurbantunggut, kumtag |
| 盆地 | 3 | basin | junggar-basin, tarim-basin, turpan-basin |
| 河谷 | 4 | river, valley | ili-valley, tarim-river, ertis, yarkant-river |
| 景观 | 6 | scenic, oasis, silk_road | flaming-mountains, narat, kuche, bayanbulak, bachu, maigaiti |
| 城市 | 3 | city | kashgar, hotan, turpan-city |

### Routes: 3 flight routes

| ID | Path |
|----|------|
| north-xinjiang | 乌鲁木齐 → 天山 → 赛里木湖 → 伊犁河谷 |
| pamir-adventure | 喀什 → 帕米尔高原 → 慕士塔格峰 |
| turpan-flaming | 吐鲁番 → 火焰山 → 库姆塔格沙漠 |

### City Lessons: 4 cities

Urumqi, Kashgar, Hotan, Turpan

## Completed Phases

### Phase 1 — Flight Pacing Fix
- Made `speakText` async, `showTerrainLesson` async
- Added `flyToTerrainAndWait` to CesiumMap
- `handleSelectTerrain` now: await fly → await narrate → await dwell

### Phase 2 — UI Cinematic Redesign
- Glassmorphism panels (`bg-[#0a0e12]/40 backdrop-blur-3xl`)
- Floating right panel (380px, `m-5 mb-5`)
- `.narration-hero` typography (17px, 1.9 line-height)
- `.accent-line` amber gradient borders
- `.panel-vignette` removed (too harsh)
- TerrainGlanceCards: single-line metadata

### Phase 3 — Continuous Flight Mode
- Non-blocking narration (`onWaypointArrival` is fire-and-forget)
- Route overview before flight (`flyToRouteOverview`)
- `dwellDuringFlightSec` controls waypoint pause
- Camera keeps moving while narration plays

### Phase 4 — Geography Expansion (13 → 32 locations)
- Added 19 new terrain JSON files
- 3 flight routes
- 4 city lessons
- New categories: river, city, scenic, oasis, silk_road

### Phase 5 — Geography Knowledge Engine
- `TerrainKnowledge` interface (13 structured fields)
- `lib/narration-engine.ts` — generates narration from structured data
- All 32 terrain files have `knowledge` field
- `SourceAttribution` component shows data sources

### Phase 6 — Cinematic Camera System
- Pitch: -42° (airplane window angle)
- Roll: 0.8° (subtle turbulence)
- Easing: `quarticEaseOut` (gravity-weighted)
- Terrain-aware heights (mountains 8000m, deserts 16000m, etc.)
- Overview uses `smoothStep` easing

### Phase 7 — Geography Worldview System
- 6 worldview nodes with subgroups
- `WorldviewNode` + `WorldviewSubgroup` types
- 5 pre-defined `GeographyComparison` definitions
- FlightControls renders two-level collapsible tree

### Phase 8 — Narration Panel Redesign
- Removed `funFact` section
- Headings: 飞机窗外, 地貌形成, 历史与人文
- `.section-label` class (10px, amber/40)
- `.narration-secondary` class (13px, white/45)
- SourceAttribution: single-line, ultra-subtle
- VoiceSelector: transparent, minimal

### Phase 9 — Sidebar Scroll Fix
- `height: 100%` on ResizablePanel root
- `min-h-0 flex-1` on scroll area
- `pb-6` bottom safe padding
- `overscroll-behavior: contain` (prevents Cesium scroll theft)
- Cinematic scrollbar (3px, barely visible)

### Phase 10 — Flight Pacing & Narration Synchronization
- `lib/narration-queue.ts` — NarrationQueue class (serial, priority, cancel)
- `lib/cinematic-labels.ts` — CinematicLabelManager (decoupled annotation layer)
- `narrateWaypoint` is now async/await — camera waits at waypoint for narration
- `narrationCancelledRef` — prevents stale callbacks after user action
- `POST_NARRATION_DWELL_MS = 2000` — digest pause after narration
- `onWaypointArrival` is now `await`ed in CesiumMap flyRoute

### Phase 11 — Information Architecture & UX Cleanup
- Simplified sidebar: flat 7 categories (山脉, 湖泊, 沙漠, 盆地, 河谷, 景观, 城市)
- Removed worldview hierarchy, GeographyComparison system, all unused types
- Removed `funFact` from TerrainLesson, all 32 JSON files, narration engine, city lessons, mimo prompt
- Narration/UI synchronized: 3 sections (seeing, formation, history) match exactly
- Fixed sidebar overflow: overlay uses `absolute inset-x-0 top-12 bottom-0`
- Implemented spatial awareness labels: CesiumOverlayLabels + projectToScreen + 15 major landmarks
- New file: `components/CesiumOverlayLabels.tsx`

## Design Philosophy

### Visual Language
- **Glass panels**: `bg-[#0a0e12]/40 backdrop-blur-3xl border border-white/[0.04]`
- **Borders**: `white/[0.03]` to `white/[0.06]` — barely visible
- **Typography**: SF Pro / PingFang SC / Helvetica Neue
- **Accent color**: `amber-400/30` to `amber-400/50` — subtle, not dominant
- **Spacing**: generous, cinematic breathing room

### Narration Hierarchy
1. Terrain name (18px, medium, white/90)
2. Metadata (11px, white/25, single line)
3. Hero narration (17px, white/88, 1.9 line-height)
4. Section labels (10px, amber/40)
5. Secondary text (13px, white/45)
6. Source attribution (9px, white/15)

### Camera Philosophy
- Airplane window: -42° pitch, 0.8° roll
- Gravity-weighted easing (quarticEaseOut)
- Terrain-aware altitude (mountains low, deserts high)
- Calm, heavy, atmospheric — NOT game camera

### Flight System
- Continuous flight (non-blocking narration)
- Route overview before flight
- `dwellDuringFlightSec` for waypoint pauses
- Terrain-aware heights via `viewHeightForTerrain()`

## Known Issues

1. **TerrainPhotoCarousel** — Architecture only, no real images wired in
2. **No terrain tile preloading** for single terrain selection
3. **No keyboard navigation** for terrain selection
4. **No terrain search** functionality
5. **Static knowledge data** — no dynamic retrieval
6. **No offline support** — requires internet for TTS
7. **No reduced-motion support** — animations ignore `prefers-reduced-motion`
8. **`labelManager.clear()` in handleSelectTerrain** — clears all labels including the 15 major landmarks initialized on mount
9. **`flyToTerrain` re-imports cesium** — uses `import("cesium")` instead of `cesiumRef.current` (minor perf)

## Next Recommended Priorities

1. **Populate terrain-visuals** with real NASA/Sentinel imagery metadata
2. **Add terrain search** to FlightControls
3. **Build ComparisonPanel** using existing `GEOGRAPHY_COMPARISONS` data
4. **Add more routes** (southern Xinjiang, eastern Xinjiang)
5. **Dynamic narration** via LLM with structured knowledge as context
6. **Terrain tile preloading** for single selection
7. **Keyboard navigation** for accessibility
8. **Remove dead code** (`speak` wrapper, unused imports)

## File Count Summary

- **32** terrain JSON files in `data/`
- **3** route JSON files in `data/routes/`
- **13** React components in `components/`
- **15** utility modules in `lib/`
- **4** type definition files in `types/`
