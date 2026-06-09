# ⚠️ DEPRECATED

**This file is deprecated and no longer maintained.**

For current project documentation, see:
- [CLAUDE.md](./CLAUDE.md) — Project instructions
- [PROJECT_MEMORY.md](./PROJECT_MEMORY.md) — Architecture and current state
- [CHANGELOG.md](./CHANGELOG.md) — Change history

---

# Development Summary (Historical)

## Flight Geography Explorer — Cinematic Airplane Geography Documentary System

**Last Updated:** 2025-01-15
**Status:** Active Development
**Stack:** Next.js 16 · React 19 · TypeScript 5 · CesiumJS 1.141 · TailwindCSS 4

---

## 1. Project Overview

Flight Geography Explorer is an AI-powered cinematic geography storytelling web application focused on Xinjiang terrain exploration from an airplane passenger perspective. The application renders 3D terrain using CesiumJS, generates structured Chinese geography narration, and presents it through a documentary-style floating UI.

### Core Experience Goals

- Calm airplane sightseeing experience
- Cinematic geography documentary pacing
- Educational terrain exploration from airplane window perspective
- Structured, accurate Chinese geography narration

### What This Application Is

- Educational geography tool
- Cinematic terrain visualization
- Airplane-window perspective sightseeing system
- Structured geography knowledge base

### What This Application Is Not

- A flight simulator
- A GIS dashboard
- A game or rapid-interaction system
- A generic map browser

---

## 2. Architecture Summary

### 2.1 Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.6 |
| UI Library | React | 19.2.4 |
| Language | TypeScript | 5.x |
| 3D Globe | CesiumJS | 1.141.0 |
| Styling | TailwindCSS | 4.x |
| TTS | Edge TTS (edge-tts-universal) | 1.4.0 |
| AI Narration | OpenAI API | 6.39.0 |

### 2.2 Directory Structure

```
├── app/
│   ├── api/
│   │   ├── narration/route.ts    # AI narration generation endpoint
│   │   ├── photo-identify/route.ts # Photo identification endpoint
│   │   └── tts/route.ts          # Text-to-speech endpoint
│   ├── globals.css               # Global styles, cinematic utilities
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Entry point
├── components/
│   ├── CesiumMap.tsx             # 3D globe, camera system, route flight engine
│   ├── ExplorerApp.tsx           # Main application orchestrator
│   ├── FlightControls.tsx        # Terrain selection with worldview grouping
│   ├── NarrationPanel.tsx        # Primary narration display panel
│   ├── PhotoModePanel.tsx        # Photo identification mode
│   ├── ResizablePanel.tsx        # Glassmorphism side panels
│   ├── RouteControls.tsx         # Flight route selection
│   ├── SourceAttribution.tsx     # Data source attribution display
│   ├── StructuredLesson.tsx      # Lesson content with accent bars
│   ├── TerrainGlanceCards.tsx    # Compact metadata strip
│   ├── TerrainPhotoCarousel.tsx  # Photo overlay carousel (architecture)
│   ├── TerrainSidebar.tsx        # Sidebar wrapper
│   └── VoiceSelector.tsx         # TTS voice selection
├── data/
│   ├── *.json                    # 29 terrain data files
│   ├── routes/*.json             # 3 flight route definitions
│   └── terrain-visuals/          # Photo overlay placeholder architecture
├── lib/
│   ├── city-lessons.ts           # City-specific narration lessons
│   ├── geo.ts                    # Haversine distance, bearing calculations
│   ├── lesson.ts                 # Lesson-to-speech conversion
│   ├── narration-engine.ts       # Structured data → narration generation
│   ├── routes.ts                 # Route resolution and management
│   ├── speech.ts                 # TTS system (Edge TTS + browser fallback)
│   ├── terrain-categories.ts     # Category system + worldview grouping
│   ├── terrain-visuals.ts        # Photo overlay loader (placeholder)
│   ├── terrain.ts                # Terrain registry and queries
│   └── voice-preference.ts       # Voice selection persistence
└── types/
    ├── terrain.ts                # TerrainPoint, TerrainKnowledge, TerrainLesson
    ├── terrain-visual.ts         # TerrainVisualAsset types
    ├── route.ts                  # FlightRoute, RouteWaypoint
    └── photo-identify.ts         # Photo identification result types
```

### 2.3 Component Hierarchy

```
ExplorerApp
├── CesiumMap (ref: CesiumMapHandle)
│   ├── flyToTerrain / flyToTerrainAndWait
│   ├── flyRoute (continuous flight engine)
│   └── stopFlight
├── ResizablePanel (left)
│   ├── FlightControls (worldview grouping)
│   └── RouteControls
└── Floating Panel (right)
    └── NarrationPanel
        ├── TerrainGlanceCards (compact metadata)
        ├── StructuredLesson (accent-bar sections)
        ├── SourceAttribution
        └── VoiceSelector
```

---

## 3. Systems Modified

### 3.1 Geography Knowledge Engine

**Problem:** Original terrain data was flat and insufficient for accurate narration generation.

**Solution:** Extended the `TerrainPoint` schema with a structured `TerrainKnowledge` interface containing 13 fields for geography data, and created a narration engine that generates cinematic Chinese narration from structured data.

**New Interface: `TerrainKnowledge`**

```typescript
interface TerrainKnowledge {
  terrainFeatures: string[];        // Visible terrain characteristics
  formation: string[];              // Geological formation explanations
  airplaneViewFeatures: string[];   // What's visible from airplane altitude
  historicalTopics: string[];       // Historical significance
  cultureTopics: string[];          // Cultural context
  climateFeatures: string[];        // Climate characteristics
  interestingFacts: string[];       // Notable facts
  visualKeywords: string[];         // Visual descriptors
  recommendedViewingAltitude: string; // Optimal viewing altitude
  representativeReason: string;     // Why this location matters
  sources: { title: string; url?: string }[]; // Data sources
  lastUpdated: string;              // Data freshness
  confidence: "high" | "medium" | "low"; // Data reliability
}
```

**New Module: `lib/narration-engine.ts`**

Three narration generation functions:

| Function | Purpose | Output |
|----------|---------|--------|
| `generateNarrationFromTerrainData()` | Full lesson from structured data | Multi-paragraph Chinese narration |
| `generateFlyoverNarration()` | Short approach narration | 1-2 sentence flyover cue |
| `generateRouteNarration()` | Combined flyover + full lesson | Complete route narration script |

Narration follows a fixed structure:
1. Airplane view description (what the user sees)
2. Terrain features (what characterizes this location)
3. Formation explanation (why it looks this way)
4. Historical/cultural context (why it matters)
5. Interesting fact (notable detail)

All narration is in Simplified Chinese, documentary-style, educational, and avoids excessive literary language.

**Files Modified:**
- `types/terrain.ts` — Added `TerrainKnowledge` interface
- `lib/narration-engine.ts` — New file
- `lib/lesson.ts` — Added `terrainToSpeech()` and `terrainToRouteSpeech()` wrappers
- All 29 `data/*.json` files — Added `knowledge` field

---

### 3.2 Cinematic Camera System

**Problem:** Camera movement felt like Cesium `flyTo` jumps rather than cinematic aerial filming.

**Solution:** Added cubic ease-out easing, lowered camera pitch for airplane-window perspective, and increased animation durations.

**Camera Parameters:**

| Parameter | Before | After | Rationale |
|-----------|--------|-------|-----------|
| `WINDOW_PITCH_DEG` | -28° | -35° | More airplane-window angle |
| Terrain fly duration | 5s | 6s | Slower, more cinematic |
| Route overview duration | 3s | 4s | Longer dwell on overview |
| Leg duration cap | 90s | 120s | Supports longer cinematic legs |

**Easing Function:**

```typescript
function cubicEaseOut(t: number): number {
  return 1 - (1 - t) ** 3;
}
```

Applied to all `flyTo` calls: terrain selection, route overview, and route legs. The ease-out curve produces a fast-start, slow-stop motion that mimics real camera deceleration.

**Files Modified:**
- `components/CesiumMap.tsx`

---

### 3.3 Flight Route System

**Problem:** Route mode behaved like a stop-and-go slide presentation: fly → stop → narrate → move.

**Solution:** Implemented continuous flight with non-blocking narration. Camera keeps moving while narration plays in the background.

**Route Flight Flow:**

```
preloadRoute
  ↓
flyToRouteOverview (4s cinematic zoom-in)
  ↓
dwell (overviewDwellSec)
  ↓
for each waypoint:
  flyLeg (camera MOVES continuously)
  ↓
  onWaypointArrival (fire-and-forget: UI + speech starts)
  ↓
  dwell (dwellDuringFlightSec, camera STAYS while narration plays)
  ↓
next flyLeg begins (narration may still be playing)
```

**Key Design Decision:** `onWaypointArrival` is non-blocking. The camera does not wait for narration to finish before moving to the next waypoint. This creates the feeling of continuous flight with narration happening "during" the journey.

**Route Configuration:**

```typescript
interface FlightRoute {
  cruiseHeight: number;          // Meters above ground
  minLegDurationSec: number;     // Minimum leg duration
  dwellSecAtWaypoint: number;    // Legacy field
  cruiseSpeedMps: number;        // Ground speed
  overviewDwellSec: number;      // Overview pause duration
  dwellDuringFlightSec: number;  // Waypoint dwell duration
}
```

**Available Routes:**

| Route | Path | Cruise Height |
|-------|------|---------------|
| 北疆经典航线 | 乌鲁木齐 → 天山 → 赛里木湖 → 伊犁河谷 | 14,000m |
| 帕米尔高原航线 | 喀什 → 帕米尔高原 → 慕士塔格峰 | 12,000m |
| 吐鲁番火焰山航线 | 吐鲁番 → 火焰山 → 库姆塔格沙漠 | 8,000m |

**Files Modified:**
- `types/route.ts` — Added `overviewDwellSec`, `dwellDuringFlightSec`
- `data/routes/*.json` — Added new config values
- `components/CesiumMap.tsx` — Rewrote `flyRoute` with overview + continuous flight
- `components/ExplorerApp.tsx` — Made `narrateWaypoint` non-blocking

---

### 3.4 Geography Curation System

**Problem:** Terrain categories were flat and felt like a random collection.

**Solution:** Implemented hierarchical worldview grouping that organizes locations by geographic system.

**Worldview Groups:**

| Group | Categories | Rationale |
|-------|-----------|-----------|
| 山脉系统 | mountain_range | Tectonic and glacial systems |
| 盆地系统 | basin | Endorheic basin systems |
| 沙漠系统 | desert | Arid environment systems |
| 河流与绿洲 | valley, river | Fluvial and oasis systems |
| 湖泊系统 | lake | Lacustrine systems |
| 人文地理 | city, scenic | Human geography and cultural sites |

**Files Modified:**
- `lib/terrain-categories.ts` — Added `TERRAIN_WORLDVIEW` grouping
- `components/FlightControls.tsx` — Renders worldview-grouped terrain list

---

### 3.5 Photography Overlay Architecture

**Problem:** No visual overlay system existed for terrain imagery.

**Solution:** Created placeholder architecture for future integration with satellite, aerial, and documentary photography.

**Type System:**

```typescript
interface TerrainVisualAsset {
  title: string;
  source: string;
  url: string;
  credit: string;
  type: "satellite" | "aerial" | "airplane" | "documentary";
}
```

**Component: `TerrainPhotoCarousel`**

- Image carousel with smooth transitions
- Source attribution overlay
- Modal view for full-size images
- Responsive layout
- Navigation controls with page indicators

**Integration Status:** Architecture only. The carousel component is complete but not yet wired into NarrationPanel pending real image data. The `getTerrainVisuals()` loader returns empty arrays as a placeholder.

**Files Created:**
- `types/terrain-visual.ts`
- `lib/terrain-visuals.ts`
- `components/TerrainPhotoCarousel.tsx`
- `data/terrain-visuals/README.md`

---

### 3.6 UI Evolution

**Problem:** Interface felt like a GIS dashboard rather than a cinematic documentary.

**Solution:** Applied glassmorphism design language, improved typography hierarchy, and added cinematic visual effects.

**Design Language:**

| Element | Treatment |
|---------|-----------|
| Panels | `bg-[#0a0e12]/55 backdrop-blur-2xl border border-white/[0.05]` |
| Borders | `border-white/[0.04]` to `[0.06]` — barely visible |
| Primary text | `text-white/92` with `text-shadow` |
| Secondary text | `text-white/55` to `text-white/30` |
| Accent color | `amber-400/50` to `amber-300/60` |
| Corners | `rounded-2xl` for panels, `rounded-xl` for inner elements |

**Typography Hierarchy:**

| Level | Class | Size | Line Height | Usage |
|-------|-------|------|-------------|-------|
| Hero narration | `.narration-hero` | 16px | 1.85 | Primary lesson text |
| Section heading | accent-bar | 10px | — | Lesson section labels |
| Section body | — | 13px | 1.7 | Secondary lesson text |
| Metadata | — | 11px | — | Terrain cards strip |
| Source attribution | — | 9px | — | Data source footer |

**Cinematic Effects:**

- `.cinematic-enter` — Fade-in with translateY animation
- `.panel-vignette` — Gradient fade at top/bottom edges
- `.accent-bar` — Amber gradient left border for sections
- `.glass-panel` — Reusable glassmorphism base class

**Files Modified:**
- `app/globals.css`
- `components/NarrationPanel.tsx`
- `components/StructuredLesson.tsx`
- `components/ExplorerApp.tsx`
- `components/ResizablePanel.tsx`
- `components/FlightControls.tsx`
- `components/RouteControls.tsx`
- `components/VoiceSelector.tsx`
- `components/TerrainGlanceCards.tsx`

---

### 3.7 Data Reliability Architecture

**Problem:** No source attribution, confidence tracking, or data freshness indicators.

**Solution:** Added reliability metadata to the `TerrainKnowledge` interface and created a `SourceAttribution` component.

**Reliability Fields:**

| Field | Type | Purpose |
|-------|------|---------|
| `sources` | `{ title: string; url?: string }[]` | Data provenance |
| `lastUpdated` | `string` | Data freshness (ISO date) |
| `confidence` | `"high" \| "medium" \| "low"` | Reliability indicator |

**Component: `SourceAttribution`**

Displays data sources, confidence level (color-coded), and last updated date in a subtle footer within the NarrationPanel.

**Files Created:**
- `components/SourceAttribution.tsx`

**Files Modified:**
- `components/NarrationPanel.tsx` — Integrated SourceAttribution

---

## 4. Data Inventory

### 4.1 Terrain Locations (29 total)

| Category | Count | Locations |
|----------|-------|-----------|
| Mountain Ranges | 7 | Tianshan, Altai, Kunlun, Karakoram, Bogda, Pamir, Muztagh Ata |
| Lakes | 6 | Kanas, Sayram, Tianchi, Bosten, Aibi, Lop Nur |
| Deserts | 3 | Taklamakan, Gurbantunggut, Kumtag |
| Basins | 3 | Junggar, Tarim, Turpan |
| Rivers & Valleys | 3 | Ili Valley, Tarim River, Ertis River |
| Scenic Areas | 4 | Flaming Mountains, Narat, Kuche, Bayanbulak |
| Cities | 3 | Kashgar, Hotan, Turpan |

### 4.2 Flight Routes (3 total)

| ID | Name | Waypoints |
|----|------|-----------|
| `north-xinjiang` | 北疆经典航线 | Urumqi → Tianshan → Sayram → Ili Valley |
| `pamir-adventure` | 帕米尔高原航线 | Kashgar → Pamir → Muztagh Ata |
| `turpan-flaming` | 吐鲁番火焰山航线 | Turpan → Flaming Mountains → Kumtag |

### 4.3 City Lessons (4 cities)

Urumqi, Kashgar, Hotan, Turpan — each with full `TerrainCards` and `TerrainLesson` data.

---

## 5. Narration System

### 5.1 Architecture

The narration system has two layers:

**Layer 1: Structured Data (primary)**

The `TerrainKnowledge` interface provides structured geography data that the narration engine assembles into cinematic Chinese text. This ensures factual accuracy and consistency.

**Layer 2: Legacy Lesson (fallback)**

The `TerrainLesson` interface (`seeing`, `formation`, `history`, `funFact`) provides pre-written narration segments. Used when structured data is insufficient.

### 5.2 Narration Generation Flow

```
TerrainPoint
  ↓
narration-engine.ts
  ├── generateNarrationFromTerrainData() → Full lesson
  ├── generateFlyoverNarration() → Short flyover cue
  └── generateRouteNarration() → Combined script
  ↓
lesson.ts
  ├── terrainToSpeech() → Full narration
  └── terrainToRouteSpeech() → Route narration
  ↓
speech.ts
  └── speakAndWait() → Edge TTS or browser TTS
```

### 5.3 Narration Structure

Every generated narration follows this structure:

1. **Airplane view** — What the user sees from the window
2. **Terrain features** — Key characteristics of the landscape
3. **Formation** — Geological explanation of why it looks this way
4. **History/Culture** — Why this place matters
5. **Fun fact** — Notable detail

### 5.4 TTS System

**Primary:** Edge TTS (Neural voices) via `/api/tts` endpoint
- Voices: Xiaoxiao (female), Yunxi (male), Xiaoyi (female)
- Rate: 0.88x (slightly slower for clarity)
- Quality: High (neural network synthesis)

**Fallback:** Browser `SpeechSynthesis` API
- Automatic Chinese voice selection
- Rate: 0.92x

---

## 6. Flight System

### 6.1 Camera Behavior

| Mode | Behavior |
|------|----------|
| Terrain selection | `flyToTerrainAndWait` — 6s ease-out, -35° pitch, waits for completion |
| Route overview | `flyToRouteOverview` — 4s ease-out, rectangle view of full route |
| Route leg | `flyLeg` — Variable duration (45-120s), ease-out, heading-aligned |
| Route waypoint | Non-blocking narration, 10s dwell, camera stays at waypoint |

### 6.2 Easing

All camera movements use cubic ease-out:

```typescript
function cubicEaseOut(t: number): number {
  return 1 - (1 - t) ** 3;
}
```

This produces fast initial movement that decelerates smoothly, mimicking real camera behavior.

### 6.3 Route Flight Engine

The route flight engine in `CesiumMap.tsx` operates in two phases:

**Phase 1: Preload and Overview**
1. Preload terrain tiles for all waypoints
2. Sample terrain heights for camera positioning
3. Fly to route overview rectangle
4. Dwell for `overviewDwellSec` seconds

**Phase 2: Continuous Flight**
1. Fly to next waypoint (`flyLeg`)
2. Trigger narration (non-blocking `onWaypointArrival`)
3. Dwell at waypoint for `dwellDuringFlightSec` seconds
4. Repeat until all waypoints visited

The narration fires without awaiting, so the camera continues to the next leg while audio may still be playing. This creates the feeling of continuous flight.

---

## 7. UI System

### 7.1 Layout Structure

```
┌─────────────────────────────────────────────────┐
│  Header (minimal, transparent)                   │
├────────┬────────────────────────────┬────────────┤
│        │                            │            │
│  Left  │     Cesium Map (full)      │   Right    │
│ Panel  │                            │  Floating  │
│ (glass)│                            │   Panel    │
│        │                            │  (glass)   │
│  - Terrains                          │  - Title   │
│  - Routes                            │  - Cards   │
│        │                            │  - Lesson  │
│        │                            │  - Sources │
│        │                            │  - Voice   │
└────────┴────────────────────────────┴────────────┘
```

### 7.2 Panel Design

**Left Panel (ResizablePanel)**
- Resizable width (220-420px, default 280px)
- Collapsible to 52px
- Glassmorphism: `bg-[#0a0e12]/60 backdrop-blur-2xl`
- Contains FlightControls and RouteControls

**Right Panel (Floating)**
- Fixed width: 360px
- Floating with margin: `m-4 mb-4`
- Glassmorphism: `bg-[#0a0e12]/55 backdrop-blur-2xl`
- Contains NarrationPanel with all content
- Vignette gradient at top/bottom edges

### 7.3 Visual Hierarchy

1. **Terrain map** — Full-bleed, visually dominant
2. **Terrain name** — Prominent in floating panel
3. **Narration text** — Hero typography (16px, 1.85 line-height)
4. **Compact metadata** — Inline dots, 11px
5. **Secondary sections** — Accent bars, 13px, 55% opacity
6. **Source attribution** — 9px, 20% opacity
7. **Controls** — Minimal footer

---

## 8. Known Limitations

### 8.1 Data Limitations

- **No real photography:** `TerrainPhotoCarousel` is architecture-only. No actual images are loaded. The `data/terrain-visuals/` directory contains only a README.
- **Narration engine simplicity:** `generateNarrationFromTerrainData()` uses simple string concatenation. It does not perform intelligent text synthesis or handle edge cases in data quality.
- **Static knowledge:** All terrain data is hardcoded in JSON files. There is no dynamic knowledge retrieval or real-time data integration.
- **No AI narration pipeline:** The `/api/narration` endpoint exists but the narration engine generates text locally from structured data rather than calling an LLM for each terrain.

### 8.2 Camera Limitations

- **No terrain-following:** Camera altitude is fixed per waypoint (`cameraHeight`). It does not dynamically adjust based on terrain elevation changes during flight.
- **No smooth heading transitions:** Heading is set once at the start of each leg. There is no interpolation between legs for smooth directional changes.
- **Fixed pitch:** Camera pitch is constant at -35°. There is no variation based on terrain type or altitude.
- **No roll simulation:** Camera roll is always 0. There is no subtle banking effect during turns.

### 8.3 UI Limitations

- **No photo integration:** The NarrationPanel does not display photos. The TerrainPhotoCarousel component exists but is not wired in.
- **No terrain comparison:** Users cannot compare two terrains side by side.
- **No search:** There is no search functionality for finding specific terrains.
- **No favorites/history:** There is no persistence of user selections or viewing history.
- **No offline support:** The application requires an internet connection for TTS and AI narration.

### 8.4 Performance Limitations

- **No terrain tile preloading for single selection:** When a user selects a single terrain (not via route), there is no preloading of terrain tiles. The camera may fly to an area before terrain details are loaded.
- **No LOD optimization:** Cesium's `maximumScreenSpaceError` is set to 2 globally. There is no dynamic LOD based on camera altitude or movement speed.
- **No lazy loading of terrain data:** All 29 terrain JSON files are imported at build time. There is no dynamic loading based on viewport or selection.

### 8.5 Accessibility Limitations

- **No keyboard navigation:** Terrain selection and route controls are mouse/touch only.
- **No screen reader support:** The 3D map and narration system have no ARIA labels or screen reader integration.
- **No reduced-motion support:** The cinematic animations do not respect `prefers-reduced-motion`.

---

## 9. Future Roadmap

### 9.1 Short Term

- **Populate terrain-visuals:** Integrate NASA Earth Observatory, Copernicus Sentinel, or other open-source imagery into the `data/terrain-visuals/` directory.
- **Wire TerrainPhotoCarousel:** Connect the carousel component to NarrationPanel when images are available.
- **Add more routes:** Cover southern Xinjiang (Kashgar → Hotan → Taklamakan rim) and eastern Xinjiang (Hami → Turpan → Urumqi).
- **Terrain search:** Add a search input to FlightControls for quick terrain lookup.

### 9.2 Medium Term

- **Dynamic narration with LLM:** Use the `/api/narration` endpoint to generate richer, context-aware narration using an LLM, with the structured knowledge data as input context.
- **Terrain-following camera:** Implement dynamic altitude adjustment during flight legs based on real-time terrain sampling.
- **Smooth heading interpolation:** Add heading transitions between legs for more natural camera movement.
- **Terrain comparison mode:** Allow users to select two terrains and see side-by-side narration and metadata.

### 9.3 Long Term

- **Multi-region support:** Expand beyond Xinjiang to other Chinese regions (Tibet, Inner Mongolia, Yunnan).
- **Real-time weather integration:** Overlay weather data on the 3D globe to show current conditions.
- **User-generated content:** Allow users to contribute terrain observations and photos.
- **Offline mode:** Cache terrain data and narration for offline use.
- **VR support:** Adapt the camera system for VR headset viewing.

---

## 10. Performance Impact Notes

### 10.1 Build Size

- CesiumJS is the largest dependency (~30MB bundled). It is loaded via dynamic `import()` to avoid blocking initial page load.
- All 29 terrain JSON files are bundled statically. Total data size is approximately 50KB.
- The narration engine and terrain-visuals modules add minimal bundle size.

### 10.2 Runtime Performance

- **Cesium initialization:** ~2-4 seconds on first load (depends on terrain provider).
- **Terrain tile loading:** Variable. World terrain requires Cesium Ion token.
- **TTS latency:** Edge TTS synthesis takes 1-3 seconds per narration segment. Browser TTS is instantaneous.
- **Camera animations:** GPU-accelerated via Cesium. No measurable impact on frame rate.

### 10.3 Memory Usage

- Height cache (`Map<string, number>`) grows with each terrain visited. For 29 terrains, this is negligible.
- Route entity cleanup (`routeEntityRef`) prevents entity accumulation.
- Audio cleanup (`currentAudio`, `currentObjectUrl`) prevents memory leaks from TTS.

---

## 11. Tradeoffs Made

| Decision | Tradeoff | Rationale |
|----------|----------|-----------|
| Structured knowledge over LLM generation | Less creative narration, but more accurate | Educational priority over entertainment |
| Non-blocking narration in route mode | Narration may overlap with next leg | Continuous flight feel is more important than sequential narration |
| Fixed camera pitch | Less dynamic, but more consistent | Airplane window perspective requires stability |
| Glassmorphism panels | Slightly reduced readability | Cinematic immersion over maximum text clarity |
| Static JSON data | No real-time updates | Simplicity and reliability over freshness |
| Architecture-only photo overlay | No immediate visual benefit | Clean separation of concerns, future-ready |
| Cubic ease-out easing | Not physically accurate | Visually pleasing and recognizable as "cinematic" |
| Worldview grouping | More complex UI structure | Better geographic education over flat list simplicity |

---

## 12. Verification

### 12.1 Build Verification

```bash
npx tsc --noEmit    # TypeScript type checking — must pass with no errors
npm run build        # Next.js production build — must succeed
```

### 12.2 Visual Verification

1. Start dev server: `npm run dev`
2. Verify terrain list shows 29 locations grouped by worldview
3. Select a terrain — camera should fly smoothly with easing
4. Verify narration panel shows structured lesson with accent bars
5. Verify source attribution appears at bottom of panel
6. Start a route — verify continuous flight with non-blocking narration
7. Verify route overview appears before flight begins
8. Verify camera pitch feels like airplane window (-35°)

### 12.3 Data Verification

- All 29 terrain JSON files must have valid `knowledge` fields
- All 3 route JSON files must have `overviewDwellSec` and `dwellDuringFlightSec`
- All city lessons must be registered in `ExplorerApp.tsx`
