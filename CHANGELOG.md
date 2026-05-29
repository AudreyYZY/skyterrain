# CHANGELOG.md

All notable changes to Flight Geography Explorer are documented here.

---

## Fix: Cesium Initialization Regression

**Status:** Completed

### Problem
- Black screen on startup — Cesium Viewer never created
- `waitForDimensions()` could hang forever if container had 0×0 dimensions
- `camera.changed` event caused 60fps re-render storm in ExplorerApp

### Root Causes
1. `waitForDimensions` used ResizeObserver with no timeout — if container started at 0×0, Promise never resolved
2. `onCameraChange` callback triggered `setCameraVersion` on every camera frame, causing full React re-render cycle at 60fps

### Fix
- `components/CesiumMap.tsx`:
  - Added 3-second timeout to `waitForDimensions` — forces init to proceed even if container is 0×0
  - Removed `onCameraChange` prop and `camera.changed` event listener
  - Added debug console logging for initialization flow
- `components/ExplorerApp.tsx`:
  - Removed `cameraVersion` state (no longer needed)
  - Removed `onCameraChange` prop from CesiumMap

### Label Updates
CesiumOverlayLabels already has a 500ms `setInterval` that polls `projectToScreen` for each label. This is sufficient for smooth label updates without triggering React re-renders on every camera frame.

---

## Phase L — Information Architecture & UX Cleanup

**Status:** Completed

### Task 1: Simplified Sidebar Categories
**Removed:**
- `WorldviewNode`, `WorldviewSubgroup` types from `types/terrain.ts`
- `GeographyComparison`, `GeographyWorldviewNode` types from `types/terrain.ts`
- `GEOGRAPHY_COMPARISONS` array and helper functions from `lib/terrain-categories.ts`
- Two-level collapsible tree from `components/FlightControls.tsx`

**Changed:**
- `lib/terrain-categories.ts` — Rewritten to simple flat category list (7 categories: 山脉, 湖泊, 沙漠, 盆地, 河谷, 景观, 城市)
- `lib/terrain.ts` — Added `CATEGORY_MERGE` mapping to group oasis/silk_road under 景观, valley under 河谷
- `components/FlightControls.tsx` — Simplified to single-level collapsible categories

### Task 2: Fixed Narration/UI Mismatch
**Problem:** `StructuredLesson` only renders 3 sections (seeing, formation, history) but narration was still speaking `funFact` content.

**Removed:**
- `funFact: string` from `TerrainLesson` interface in `types/terrain.ts`
- `funFact` from `lessonToSpeech()` in `lib/lesson.ts`
- `funFact` fallback from `lib/narration-engine.ts`
- `funFact` from `ROUTE_END_LESSON` in `components/ExplorerApp.tsx`
- `funFact` from AI prompt and parser in `lib/mimo.ts`
- `funFact` from all 4 city lessons in `lib/city-lessons.ts`
- `funFact` field from all 32 terrain JSON files

**Result:** Narration speech now exactly matches the 3 visible UI sections.

### Task 3: Fixed Sidebar Overflow
**Problem:** Last route card and buttons partially hidden at bottom.

**Changed:**
- `components/ExplorerApp.tsx` — Overlay div: `h-full pt-12` → `absolute inset-x-0 top-12 bottom-0` (proper viewport containment)
- `components/ResizablePanel.tsx` — Bottom padding: `pb-6` → `pb-8` (more safe area)

### Task 4: Implemented Spatial Awareness Labels
**Added:**
- `components/CesiumOverlayLabels.tsx` — New component rendering cinematic map labels as HTML overlays
- `projectToScreen()` method on `CesiumMapHandle` — projects lat/lon to screen coordinates
- `onCameraChange` callback prop on `CesiumMap` — triggers label position updates

**Changed:**
- `components/CesiumMap.tsx` — Added `projectToScreen` method, camera change listener
- `components/ExplorerApp.tsx` — Integrates CesiumOverlayLabels, initializes 15 major terrain labels on mount

**Label Design:**
- Only shows major landmarks (天山, 昆仑, 塔克拉玛干, etc.)
- Cinematic dot + text with drop shadow
- Hidden during route flight (avoids distraction)
- Click label → fly to terrain + sync narration
- Camera-change driven position updates (rAF throttled)

### Task 5: Architecture Cleanup
**Removed:**
- `GeographyComparison` and `GeographyWorldviewNode` types
- `GEOGRAPHY_COMPARISONS` array and helper functions
- `WorldviewNode` and `WorldviewSubgroup` types
- Unused `createWaypointLabel` import from ExplorerApp

---

## Phase K — Flight Pacing & Narration Synchronization

**Status:** Completed

### Problem
- Route narration was fire-and-forget — camera moved while narration played
- No narration queue — multiple narrations could overlap
- No cancellation — stopping flight didn't stop narration
- App felt like a fast slideshow instead of calm flight

### Added
- `lib/narration-queue.ts` — NarrationQueue class with priority, cancellation, serial execution
- `lib/cinematic-labels.ts` — CinematicLabelManager for decoupled annotation layer

### Changed
- `components/ExplorerApp.tsx` — `narrateWaypoint` is now async/await, uses `narrationCancelledRef`, integrates cinematic labels
- `components/CesiumMap.tsx` — `onWaypointArrival` is now `await`ed, added post-narration dwell

### Synchronization Architecture
```
flyLeg → await onWaypointArrival → dwell → next flyLeg
              ↓
              await speakAndWait (camera waits at waypoint)
              await POST_NARRATION_DWELL_MS (2s digest)
```

### Key Constants
- `POST_NARRATION_DWELL_MS = 2000` — Digest pause after narration
- `narrationQueue.gapMs = 800` — Gap between sequential narrations

---

## Phase A — Cinematic Narration Panel Redesign

**Status:** Completed

### Changed
- `app/globals.css` — Removed harsh `panel-vignette`, replaced `accent-bar` with `accent-line`, added `narration-hero` / `narration-secondary` / `section-label` classes
- `components/StructuredLesson.tsx` — Removed `funFact` section, renamed headings to `飞机窗外`, `地貌形成`, `历史与人文`
- `components/NarrationPanel.tsx` — Simplified title, ultra-compact metadata, muted buttons (`bg-white/[0.06]`)
- `components/TerrainGlanceCards.tsx` — Single-line `location / elevation` format
- `components/SourceAttribution.tsx` — Stripped to single-line source names
- `components/VoiceSelector.tsx` — Transparent background, smaller text
- `components/ExplorerApp.tsx` — Panel: 380px, `bg-[#0a0e12]/40`, `backdrop-blur-3xl`

### Design Decisions
- Removed `funFact` — doesn't fit documentary tone
- Removed `panel-vignette` — too harsh, replaced with natural transparency
- Hero narration at 17px/1.9 — dominant, cinematic
- Secondary sections at 13px/white/45 — supportive, not competing

---

## Phase B — Cinematic Flight Camera System

**Status:** Completed

### Changed
- `components/CesiumMap.tsx` — Complete camera system overhaul
- `data/routes/north-xinjiang.json` — Adjusted pacing parameters

### Camera Design
- Pitch: -35° → -42° (realistic airplane window angle)
- Roll: 0° → 0.8° (subtle turbulence simulation)
- Easing: `cubicEaseOut` → `quarticEaseOut` (gravity-weighted deceleration)
- Overview: `smoothStep` easing with -30° pitch (cinematic reveal)
- Terrain-aware heights via `viewHeightForTerrain()`
- Duration: 6s → 7s for terrain, 4s → 5s for overview

### Terrain View Heights
| Type | Height | Rationale |
|------|--------|-----------|
| mountain_range | 8,000m | Lower pass for mountain scale |
| lake | 6,000m | Close enough for water color |
| desert | 16,000m | Higher for vastness |
| valley | 6,000m | Low flight through corridor |
| city | 5,000m | Close for urban structure |

---

## Phase C — Geography Worldview System

**Status:** Completed

### Added
- `data/bachu.json` — 巴楚绿洲 (oasis category)
- `data/maigaiti.json` — 麦盖提绿洲 (oasis category)
- `data/yarkant-river.json` — 叶尔羌河 (river category)

### Changed
- `types/terrain.ts` — Added `oasis`, `silk_road` categories; added `GeographyComparison`, `GeographyWorldviewNode` types
- `lib/terrain-categories.ts` — Complete rewrite: 6 worldview nodes with subgroups, 5 comparison definitions
- `lib/terrain.ts` — Registered 3 new terrains (total: 32)
- `components/FlightControls.tsx` — Two-level collapsible tree with subgroup support

### Worldview Hierarchy
```
山脉系统 → 天山/阿尔泰/昆仑/喀喇昆仑/帕米尔
高原与盆地 → 准噶尔/塔里木/吐鲁番
沙漠系统 → 塔克拉玛干/古尔班通古特/库姆塔格
河流与绿洲 → 叶尔羌河/塔里木河/伊犁河谷/额尔齐斯河
湖泊系统 → 天山湖泊/阿尔泰湖泊/罗布泊
丝绸之路与人类活动 → 丝路古城/丝路遗迹/游牧文化
```

### Comparison Architecture (5 definitions)
- 昆仑山 vs 喀喇昆仑
- 天山 vs 阿尔泰山
- 塔克拉玛干 vs 古尔班通古特
- 伊犁河谷 vs 叶尔羌河流域
- 赛里木湖 vs 喀纳斯湖

---

## Phase D — Sidebar Scroll & Layout Fix

**Status:** Completed

### Changed
- `components/ResizablePanel.tsx` — Fixed height containment, added `sidebar-scroll` class, `pb-6` bottom padding
- `components/FlightControls.tsx` — Removed heavy borders, indented list, muted colors
- `components/RouteControls.tsx` — Route cards in `bg-white/[0.02]` containers
- `app/globals.css` — Added `.sidebar-scroll` with cinematic scrollbar + `overscroll-behavior: contain`

### Layout Fixes
- `height: 100%` on root container (enables `flex-1` constraint)
- `min-h-0` on scroll area (allows shrink below content height)
- `pb-6` bottom padding (last route card fully reachable)
- `overscroll-behavior: contain` (prevents Cesium scroll theft)
- 3px scrollbar at `white/0.08` opacity

---

## Phase E — Flight Pacing & Async Sequencing

**Status:** Completed

### Changed
- `components/ExplorerApp.tsx` — `speakText` async, `showTerrainLesson` async, `handleSelectTerrain` uses await chain
- `components/CesiumMap.tsx` — Added `flyToTerrainAndWait` method
- `components/FlightControls.tsx` — Type: `onSelect` accepts `Promise<void>`
- `components/NarrationPanel.tsx` — Type: `onSpeak` accepts `Promise<void>`
- `components/PhotoModePanel.tsx` — Type: `onSpeak` accepts `Promise<void>`

### Flow
```
handleSelectTerrain:
  1. await flyToTerrainAndWait(terrain)
  2. await showTerrainLesson(terrain)  // includes speakAndWait
  3. await dwellAfterNarration(null, 0)
```

---

## Phase F — Continuous Flight Mode

**Status:** Completed

### Changed
- `types/route.ts` — Added `overviewDwellSec`, `dwellDuringFlightSec`
- `data/routes/*.json` — Added new config values
- `components/CesiumMap.tsx` — Rewrote `flyRoute` with overview + continuous flight
- `components/ExplorerApp.tsx` — `narrateWaypoint` is non-blocking (fire-and-forget)

### Flow
```
flyRoute:
  1. preloadRoute
  2. flyToRouteOverview (4s)
  3. for each waypoint:
     a. flyLeg (camera moves)
     b. onWaypointArrival (fire-and-forget)
     c. sleep(dwellDuringFlightSec)
  4. onComplete
```

---

## Phase G — Geography Knowledge Engine

**Status:** Completed

### Added
- `lib/narration-engine.ts` — `generateNarrationFromTerrainData()`, `generateFlyoverNarration()`, `generateRouteNarration()`
- `components/SourceAttribution.tsx` — Data source display

### Changed
- `types/terrain.ts` — Added `TerrainKnowledge` interface (13 fields)
- `lib/lesson.ts` — Added `terrainToSpeech()`, `terrainToRouteSpeech()`
- All 32 `data/*.json` — Added `knowledge` field with structured data
- `components/NarrationPanel.tsx` — Added `knowledge` prop, integrated SourceAttribution
- `components/ExplorerApp.tsx` — Passes `activeTerrain?.knowledge` to panel

---

## Phase H — UI Cinematic Redesign

**Status:** Completed

### Changed
- `app/globals.css` — `.glass-panel`, `.accent-bar`, `.cinematic-enter`, `.narration-hero`, `.metadata-text`, `.panel-vignette`
- `components/ResizablePanel.tsx` — Glassmorphism: `bg-[#0a0e12]/60 backdrop-blur-2xl`
- `components/ExplorerApp.tsx` — Right panel: floating `rounded-2xl bg-[#0a0e12]/55`
- `components/FlightControls.tsx` — Removed boxing, subtle dividers
- `components/RouteControls.tsx` — Simplified route cards
- `components/VoiceSelector.tsx` — Minimal inline style
- `components/TerrainGlanceCards.tsx` — Compact dot-separated metadata

---

## Phase I — Geography Expansion

**Status:** Completed

### Added (19 terrain files)
- Mountains: karakoram, muztagh-ata, pamir, bogda
- Lakes: bosten, aibi, lop-nur
- Rivers: ertis, yarkant-river (later)
- Deserts: kumtag
- Scenic: flaming-mountains, narat, kuche, bayanbulak
- Cities: kashgar, hotan, turpan-city
- Oasis: bachu, maigaiti (later)

### Added (2 route files)
- `data/routes/pamir-adventure.json` — 喀什 → 帕米尔 → 慕士塔格
- `data/routes/turpan-flaming.json` — 吐鲁番 → 火焰山 → 库姆塔格

### Changed
- `types/terrain.ts` — Added river, city, scenic categories
- `lib/terrain-categories.ts` — Added labels for new categories
- `lib/terrain.ts` — Imported and registered all new terrains
- `lib/routes.ts` — Imported and registered new routes
- `lib/city-lessons.ts` — Added lessons for kashgar, hotan, turpan-city
- `components/ExplorerApp.tsx` — Registered new city lessons

---

## Phase J — Terrain Type System

**Status:** Completed

### Changed
- `types/terrain.ts` — Added `TerrainCategory` and `TerrainType` unions
- `lib/terrain-categories.ts` — Added category labels and ordering
