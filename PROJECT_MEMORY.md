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
- Edge TTS (edge-tts-universal 1.4.0) — plain text input, XiaoyiNeural default
- OpenAI API 6.39.0 (mimo.ts — dead code, kept for future LLM narration)

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
  CesiumMap.tsx             — 3D globe, camera system, route flight engine, projectToScreen, imagery provider
  ExplorerApp.tsx           — Main orchestrator, label initialization, speakLessonWithHighlight
  CesiumOverlayLabels.tsx   — Spatial awareness labels (HTML overlays on Cesium, zoom-aware, edge-fade)
  FlightControls.tsx        — Hierarchical sidebar (region → category → terrain)
  NarrationPanel.tsx        — Right floating panel (primary UI)
  StructuredLesson.tsx      — Lesson content (4 sections: seeing, formation, history, observation)
  TerrainGlanceCards.tsx    — Compact metadata strip
  SourceAttribution.tsx     — Data source footer
  TerrainPhotoCarousel.tsx  — Photo overlay (architecture only)
  ResizablePanel.tsx        — Glassmorphism side panels
  RouteControls.tsx         — Flight route selection
  VoiceSelector.tsx         — TTS voice picker
  PhotoModePanel.tsx        — Photo identification mode
  useSentenceHighlight.ts   — Sentence timing estimation hook (multi-section support)

lib/
  terrain.ts                — Terrain registry (32 locations, category merge, region assignment)
  terrain-categories.ts     — Flat category order + labels (7 categories)
  terrain-hierarchy.ts      — Continent→Region→Category tree builder
  narration-engine.ts       — Structured data → Chinese narration
  lesson.ts                 — Lesson-to-speech conversion (plain text, no SSML)
  speech.ts                 — TTS system (Edge TTS + browser fallback)
  routes.ts                 — Route resolution
  geo.ts                    — Haversine distance, bearing
  city-lessons.ts           — City narration data (4 cities)
  narration-queue.ts        — NarrationQueue class (serial, priority, cancel)
  cinematic-labels.ts       — CinematicLabelManager (decoupled annotation layer, major labels)

types/
  terrain.ts                — TerrainPoint, TerrainKnowledge (NO funFact, NO GeographyComparison)
  terrain-visual.ts         — TerrainVisualAsset types
  route.ts                  — FlightRoute, RouteWaypoint
```

## Product Vision

A cinematic documentary experience where users fly over Xinjiang's terrain, hearing professional Chinese narration synchronized with the landscape. The map is always the hero — UI panels are minimal, translucent, and never dominate the view.

## Cesium Rendering Constraints

### Map Layers

```
Terrain Layer:   Cesium World Terrain (STK)    — Cesium.Ion asset 1
Imagery Layer:   Bing Maps                     — Cesium.IonImageryProvider.fromAssetId(2)
3D Tiles Layer:  无                             — 未使用 Google Photorealistic 3D Tiles
```

### Rendering Config

```ts
requestRenderMode: false           // continuous rendering, tiles always refine
maximumScreenSpaceError: 2.0       // default, balanced quality/performance
depthTestAgainstTerrain: true      // terrain occlusion enabled
fog.enabled: true                  // atmospheric fog
```

### Camera System

- Pitch: -42° (airplane window angle)
- Roll: 0.8° (subtle turbulence)
- Easing: `quarticEaseOut` (gravity-weighted)
- Terrain-aware heights (mountains 8000m, deserts 16000m, etc.)
- Duration: 7s for terrain flyTo

## Label System

### Documentary-Style Map Labels

Major landforms always visible at any zoom level, pure text with cinematic typography:

| Type | Font Size | Weight | Letter Spacing | Shadow |
|------|-----------|--------|----------------|--------|
| Major | 28px | 600 | 0.08em | Triple-layer: 0 2px 6px, 0 0 20px, 0 0 40px |
| Minor | 14px | 500 | 0.04em | Double-layer: 0 1px 4px, 0 0 12px |

### 6 Major Landforms (always visible)

- 天山 (tianshan)
- 昆仑山 (kunlun)
- 阿尔泰山 (altai)
- 准噶尔盆地 (junggar-basin)
- 塔里木盆地 (tarim-basin)
- 塔克拉玛干沙漠 (taklamakan)

### Label Rendering

- No background bubbles — pure cinematic text
- No dot markers
- Edge fade at 60px from screen edge
- Grid-based overlap prevention (80px cells)
- CSS transitions: opacity 0.6s
- Font: Noto Sans SC / PingFang SC / Microsoft YaHei

## Terrain System

### Data: 32 locations (7 display categories)

| Display Category | Count | Data Categories |
|----------|-------|-----------------|
| 山脉 | 7 | mountain_range |
| 湖泊 | 6 | lake |
| 沙漠 | 3 | desert |
| 盆地 | 3 | basin |
| 河谷 | 4 | river, valley |
| 景观 | 6 | scenic, oasis, silk_road |
| 城市 | 3 | city |

### Routes: 3 flight routes

| ID | Path |
|----|------|
| north-xinjiang | 乌鲁木齐 → 天山 → 赛里木湖 → 伊犁河谷 |
| pamir-adventure | 喀什 → 帕米尔高原 → 慕士塔格峰 |
| turpan-flaming | 吐鲁番 → 火焰山 → 库姆塔格沙漠 |

## TTS System

### Edge TTS Configuration

- **Library:** edge-tts-universal 1.4.0
- **Voice:** zh-CN-XiaoyiNeural (default)
- **Rate:** -18% (slow, documentary pacing)
- **Pitch:** -2Hz (slightly lower, warmer)
- **Input format:** Plain text (NOT SSML — edge-tts-universal wraps input in its own SSML)

### Critical: No SSML Tags

`edge-tts-universal` always wraps input in `<speak><voice><prosody>`. Passing SSML tags (`<break>`, `<p>`, `<prosody>`) causes nested tags that the Edge TTS service reads as literal text (e.g., "t_breaktime=1200ms").

**Fix:** `lessonToSSML()` now returns plain text. Rate/pitch controlled by EdgeTTS constructor params.

### Highlighting System

- `useSentenceHighlight` hook estimates sentence timing (~280ms/char)
- `startHighlightSections()` tracks multiple sections with global index
- `activeSection` updates as highlight advances through seeing → formation → history → observation
- `speakLessonWithHighlight()` is the shared entry point for both auto-narration and manual speak

### Audio/Highlight Separation

- `stopAudio()` — stops audio only, preserves highlight state
- `stopSpeaking()` — stops audio + highlight (user-initiated cancel)
- `speakText()` uses `stopAudio()` to avoid clearing highlight set by `startHighlightSections()`

## Deployment Workflow

1. `npm run build` — verify no TypeScript/build errors
2. `git add . && git commit -m "..."`
3. `git push origin main`
4. Vercel auto-deploys from main branch
5. Verify on https://skyterrain.vercel.app

### Vercel Config

- `serverExternalPackages: ["ws", "bufferutil"]` — prevents webpack bundling of ws library (fixes `b.mask is not a function`)

## UI Principles

### Visual Language

- **Glass panels**: `bg-[#0a0e12]/30 backdrop-blur-xl border border-white/[0.04]`
- **Borders**: `white/[0.03]` to `white/[0.06]` — barely visible
- **Typography**: Noto Sans SC / PingFang SC / SF Pro
- **Accent color**: `amber-400/30` to `amber-400/50` — subtle, not dominant
- **Spacing**: generous, cinematic breathing room

### Narration Hierarchy

1. Terrain name (18px, medium, white/90)
2. Metadata (11px, white/25, single line)
3. Hero narration (1rem, white/80, 1.9 line-height)
4. Section labels (10px, amber/40)
5. Secondary text (13px, white/45)
6. Source attribution (9px, white/15)

### Camera Philosophy

- Airplane window: -42° pitch, 0.8° roll
- Gravity-weighted easing (quarticEaseOut)
- Terrain-aware altitude (mountains low, deserts high)
- Calm, heavy, atmospheric — NOT game camera

---

# DO NOT BREAK AGAIN

## Historical Regressions

### 1. Black Cesium Globe (Phase 2)

**Root cause:** `camera.changed` event → React re-render storm → WebGL starvation

**Fix:** Removed `camera.changed` entirely. Replaced with 500ms `setInterval` polling via imperative handle.

**Prevention rule:** NEVER hook `camera.changed` to React state. Use `camera.moveEnd` for one-shot events, or polling for continuous tracking.

### 2. React/Cesium Render Loop

**Root cause:** `onCameraChange` → `setCameraState` → 60fps re-renders → main thread contention

**Fix:** CesiumOverlayLabels polls `getCameraState()` via `setInterval`, not camera events.

**Prevention rule:** Camera-driven React state is FORBIDDEN. Read camera imperatively via ref.

### 3. requestRender Regressions

**Root cause:** `requestRenderMode: true` (default) stops rendering after camera stops. Tiles loaded in background never display.

**Fix:** `requestRenderMode: false` for continuous rendering. `camera.moveEnd` → `requestRender()` as belt-and-suspenders.

**Prevention rule:** Keep `requestRenderMode: false`. Never rely on Cesium's default render-on-change.

### 4. camera.changed Feedback Loops

**Root cause:** `camera.changed` → state update → re-render → camera change → infinite loop

**Fix:** Remove all camera event → React state connections.

**Prevention rule:** Camera state flows ONE WAY: Cesium → imperative read → polling. Never React state → Cesium camera.

### 5. Vercel Chunk Loading Failures

**Root cause:** Cesium's octal escape sequences (`\060`) break in strict mode

**Fix:** Webpack plugin converts octal escapes to hex escapes in all JS assets.

**Prevention rule:** Keep the `FixOctalEscapes` webpack plugin. Never remove it.

### 6. TTS `b.mask is not a function`

**Root cause:** `ws@8.21.0`'s `buffer-util.js` uses conditional `require('bufferutil')` to swap the `mask` function. Webpack's static analysis drops the JS fallback during bundling.

**Fix:** `serverExternalPackages: ["ws", "bufferutil"]` in next.config.ts.

**Prevention rule:** Keep `ws` and `bufferutil` in `serverExternalPackages`. Never remove them.

### 7. TTS Highlighting Regressions

**Root cause:** `speakText()` called `stopSpeaking()` → `stopHighlight()`, immediately clearing state set by `startHighlightSections()`.

**Fix:** Separate `stopAudio()` (audio only) from `stopSpeaking()` (audio + highlight). `speakText()` uses `stopAudio()`.

**Prevention rule:** `speakText()` must NEVER call `stopHighlight()`. Only user-initiated stops or narration completion should clear highlight.

### 8. CSS Priority Override (`.narration-hero` color)

**Root cause:** `.narration-hero` had `color: rgba(255,255,255,0.8)` which overrode all Tailwind text color utilities due to equal specificity.

**Fix:** Removed `color` from `.narration-hero` CSS. Colors now controlled entirely by Tailwind utilities in JSX.

**Prevention rule:** CSS utility classes must NOT set `color` on shared classes. Use Tailwind utilities for all color overrides.

### 9. SSML Tags Read as Literal Text

**Root cause:** `edge-tts-universal` always wraps input in `<speak><voice><prosody>`. Passing SSML with `<break>`/`<p>`/`<prosody>` caused nested tags that Edge TTS couldn't parse.

**Fix:** `lessonToSSML()` returns plain text. Removed all manual SSML construction.

**Prevention rule:** Never pass SSML tags to `edge-tts-universal`. Use plain text only. Rate/pitch via constructor params.

### 10. Trackpad Zoom Blocked by Overlay

**Root cause:** `CesiumOverlayLabels` overlay at `z-[15]` had `touch-action: none` which blocked pinch gestures from reaching Cesium canvas.

**Fix:** Removed `touch-action` from overlay. `pointer-events: none` already handles event pass-through.

**Prevention rule:** Never set `touch-action` on overlay elements above Cesium. Only the canvas itself should have `touch-action: none`.

## Protected Cesium Architecture

> **PERMANENT SECTION — Do not remove or weaken.**

The following systems are protected. Do not modify without explicit approval.

### Protected Systems

- **Cesium initialization** — `waitForDimensions`, dynamic import, Viewer creation
- **Viewer creation** — `new Cesium.Viewer()` config, WebGL canvas setup
- **Terrain loading** — `createWorldTerrainAsync()`, `EllipsoidTerrainProvider` fallback
- **Imagery provider** — `IonImageryProvider.fromAssetId(2)`, `imageryLayers` management
- **requestRenderMode** — must remain `false` for continuous rendering
- **camera lifecycle** — `flyTo`, `flyToTerrainAndWait`, `flyRoute`, easing functions, pitch/roll constants
- **React ↔ Cesium render bridge** — 500ms polling, imperative handle, no camera.changed → React state
- **flight system** — `flyLeg`, `flyToRouteOverview`, `preloadRoute`, `drawRouteLine`

### Before Changing Any Protected System

1. **Explain reason** — why is modification necessary?
2. **Explain risk** — what regressions could this cause?
3. **Provide diff plan** — exact files and lines to change
4. **Wait for approval** — do not proceed without explicit approval

### Why These Are Protected

Historical regressions caused by modifying these systems:

| Regression | Impact |
|-----------|--------|
| Black globe | `camera.changed` → React re-render storm → WebGL starvation |
| Missing terrain | `waitForDimensions` hung forever on 0×0 container |
| Chunk failures | Cesium octal escapes broke in strict mode |
| Render loops | Camera state → React state → camera change → infinite loop |
| Camera recursion | `async` inside `new Promise()` anti-pattern → Promise never settles |

### Rule

**Never "refactor" protected systems while working on unrelated tasks.**

If a task appears to require touching protected infrastructure:
1. STOP
2. Explain the conflict
3. Propose an alternative that avoids protected systems
4. Wait for guidance

## Forbidden Modification Areas

Unless explicitly requested with risk assessment:

1. **DO NOT** add `camera.changed` event listeners
2. **DO NOT** hook camera events to React state
3. **DO NOT** modify the Cesium Viewer initialization sequence
4. **DO NOT** change the `waitForDimensions` timeout mechanism
5. **DO NOT** modify the `useImperativeHandle` dependency array
6. **DO NOT** remove the `viewer.isDestroyed()` guards
7. **DO NOT** change the `setInterval` polling in CesiumOverlayLabels to camera-event-driven updates
8. **DO NOT** modify the `quarticEaseOut` or `smoothStep` easing functions
9. **DO NOT** change the `WINDOW_PITCH_DEG` (-42) or `CRUISE_ROLL_DEG` (0.8) constants
10. **DO NOT** pass SSML tags to edge-tts-universal
11. **DO NOT** set `touch-action` on overlay elements above Cesium
12. **DO NOT** remove `serverExternalPackages: ["ws", "bufferutil"]`
13. **DO NOT** remove the `FixOctalEscapes` webpack plugin
14. **DO NOT** add `color` CSS property to `.narration-hero` or other shared classes

## Safe Extension Points

These areas CAN be modified safely:

- **Content**: terrain JSON files, narration text, observation data, route definitions
- **UI**: NarrationPanel, StructuredLesson, FlightControls, RouteControls (styling/layout)
- **Labels**: CinematicLabelManager data, label priorities, zoom thresholds, typography
- **Camera parameters**: duration values, easing function selection (not the functions themselves)
- **New features**: photo carousel, terrain search, comparison panel (as separate components)
- **New routes**: add JSON files + register in routes.ts

## Development Principle

**Extend content systems, not rendering infrastructure.**

If a feature appears to require modifying protected infrastructure:
1. STOP
2. Explain why modification is necessary
3. Explain risks involved
4. Propose alternative solutions
5. Wait for approval

---

## Phase History

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Flight Pacing Fix | ✅ |
| 2 | UI Cinematic Redesign | ✅ |
| 3 | Continuous Flight Mode | ✅ |
| 4 | Geography Expansion (13→32) | ✅ |
| 5 | Geography Knowledge Engine | ✅ |
| 6 | Cinematic Camera System | ✅ |
| 7 | Geography Worldview System | ✅ |
| 8 | Narration Panel Redesign | ✅ |
| 9 | Sidebar Scroll Fix | ✅ |
| 10 | Flight Pacing & Narration Sync | ✅ |
| 11 | Information Architecture Cleanup | ✅ |
| 12 | Terrain Label Interaction | ✅ |
| 13 | Cinematic Label Lifecycle | ✅ |
| 14 | Airplane Observation Education | ✅ |
| 4A | Narration Voice Upgrade & AI Mode Removal | ✅ |
| 4A | Multi-Task Polish (imagery, labels, sidebar, TTS) | ✅ |
| 5A | Highlighting, Tile Loading, Hierarchy Fixes | ✅ |
| 5B | TTS Fix (SSML nesting, ws bundling) | ✅ |
| 5C | Sentence Highlighting (multi-section) | ✅ |
| 5D | Documentary Map Labeling System | ✅ |
