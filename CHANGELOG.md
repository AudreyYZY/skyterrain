# CHANGELOG.md

All notable changes to Flight Geography Explorer are documented here.

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
