# AI_DEV_LOG.md

Development log for AI-assisted development sessions.

---

## Phase 5D — Documentary Map Labeling System

**Date:** 2026-06-04
**Commit:** 342dc4a
**Status:** Verified

### Summary

Redesigned map labeling system for documentary-style presentation. 6 major landforms (天山, 昆仑山, 阿尔泰山, 准噶尔盆地, 塔里木盆地, 塔克拉玛干沙漠) now always visible at any zoom level with cinematic typography.

### Changes

- `lib/cinematic-labels.ts`: Added `major` field to `CinematicLabel`, major labels bypass zoom filtering, font size 28px for major / 14px for minor
- `components/CesiumOverlayLabels.tsx`: Removed background bubbles and dot markers, pure text with triple-layer shadow, letter-spacing 0.08em, edge fade 60px, gap 80px
- `components/ExplorerApp.tsx`: 6 major landforms registered with `major: true`

### Risk

Low — label rendering only, no Cesium/terrain/camera changes.

### Verification

- Major labels visible in overview mode
- Labels scale with zoom
- No background bubbles
- Cinematic text shadow

---

## Phase 5C — Sentence Highlighting Fix

**Date:** 2026-06-04
**Commits:** ac2a7cd, 8a4b92e
**Status:** Verified

### Summary

Fixed sentence highlighting not working during narration. Root cause: `speakText()` called `stopSpeaking()` → `stopHighlight()`, immediately clearing state set by `startHighlightSections()`.

### Changes

- `components/ExplorerApp.tsx`: Added `stopAudio()` (audio only), `speakLessonWithHighlight()` (shared entry point), updated `onSpeak` button
- `components/useSentenceHighlight.ts`: Added `startHighlightSections()` with multi-section tracking, `findSectionForIndex()` for section boundary detection
- `components/StructuredLesson.tsx`: All sections render sentence-level highlighting with cumulative offset mapping

### Risk

Medium — changes to highlight timing and audio lifecycle. Verified with multiple terrain selections.

### Verification

- Click terrain → highlight advances through all sections
- Click "朗读" button → same highlight behavior
- Highlight covers seeing → formation → history → observation
- No highlight flickering or early termination

---

## Phase 5B — TTS Fix

**Date:** 2026-06-04
**Commits:** 3ad9e01, e3212ee, dc38a2c, 1848bdc
**Status:** Verified

### Summary

Fixed 4 TTS-related issues:

1. `b.mask is not a function` — ws bundling issue
2. SSML tags read as literal text — nested `<speak>` tags
3. Trackpad zoom blocked — overlay `touch-action`
4. CSS priority override — `.narration-hero` color

### Changes

- `next.config.ts`: `serverExternalPackages: ["ws", "bufferutil"]`
- `lib/lesson.ts`: `wrapSSML` returns plain text, removed `escapeSSML`
- `components/ExplorerApp.tsx`: Removed all manual SSML construction
- `components/CesiumOverlayLabels.tsx`: Removed `touch-action: "none"`
- `app/globals.css`: Removed `color` from `.narration-hero`

### Risk

Medium — TTS pipeline changes. Verified with production deployment.

### Verification

- TTS returns 200 with valid audio
- No "t_breaktime" in audio output
- Trackpad pinch zoom works
- Sentence highlighting visible

---

## Phase 5A — Highlighting, Tile Loading, Hierarchy Fixes

**Date:** 2026-06-03
**Commit:** cf1d784
**Status:** Verified

### Summary

Initial fix attempt for sentence highlighting, trackpad zoom, and terrain tile artifacts.

### Changes

- `components/ExplorerApp.tsx`: `startHighlight` uses `lesson.seeing` only
- `components/useSentenceHighlight.ts`: Added `stripEmojis` before `splitSentences`
- `components/CesiumMap.tsx`: `maximumScreenSpaceError` 1.5 → 2.0

### Risk

Low — configuration changes only.

### Verification

- Build passes
- Trackpad zoom works (partial — full fix in 5B)
- Tile artifacts reduced (not eliminated — needs further investigation)

---

## Debug Session — Highlighting Chain Tracing

**Date:** 2026-06-04
**Commits:** bb47472, 94b3fa8, 1620737
**Status:** Completed (debug logs removed)

### Summary

Added console.trace and debug logging to trace the highlighting call chain. Identified that `speakText()` → `stopSpeaking()` → `stopHighlight()` was the root cause.

### Debug Logs Added

- ExplorerApp: before/after startHighlightSections, before/after speakText
- useSentenceHighlight: startHighlightSections entry, total sentences, section map, initial state, stopHighlight with stack trace
- StructuredLesson: received props, total sentences, active sentence

### Result

Confirmed: `stopHighlight` called immediately after `startHighlightSections` via `speakText()` → `stopSpeaking()` chain.

---

## Debug Session — Terrain/Imagery Diagnosis

**Date:** 2026-06-04
**Commits:** 68bb488, 2343377
**Status:** In Progress (awaiting user verification)

### Summary

Added `window.debugCesium` for runtime terrain/imagery diagnosis. Available in production.

### Functions

- `debugCesium.toggleTerrain()` — switch between WorldTerrain and Ellipsoid
- `debugCesium.toggleImagery()` — show/hide imagery layer
- `debugCesium.printLayers()` — log all imagery layer properties
- `debugCesium.printTerrain()` — log terrain provider and globe settings

### Awaiting

User verification of博斯腾湖 and 赛里木湖 rectangular block source (terrain vs imagery).

---

## Fix: Cesium Tile Refinement & Trackpad Zoom

**Date:** 2026-06-01
**Commit:** 080ec7f
**Status:** Verified

### Root Cause

`requestRenderMode` default behavior stops rendering after camera stops. Tiles loaded in background never display.

### Fix

1. `requestRenderMode: false` — continuous rendering
2. `maximumScreenSpaceError = 1.5` — sharper tiles
3. `camera.moveEnd` → `requestRender()`
4. `touch-action: none` on canvas

---

## Phase 4A — Narration Voice Upgrade & AI Mode Removal

**Date:** 2026-05-30
**Commit:** a4d77c2
**Status:** Verified

### Summary

- Default voice: XiaoyiNeural
- Rate: -18%, Pitch: -2Hz
- Removed AI mode, replaced with extended reading

---

## Fix: Cesium Render Regression After Phase 2

**Date:** 2026-05-29
**Status:** Verified

### Root Cause

`camera.changed` → React re-render storm → WebGL starvation

### Fix

Removed `camera.changed` entirely. Replaced with 500ms polling.

---

## Fix: Cesium Initialization Regression

**Date:** 2026-05-29
**Status:** Verified

### Root Cause

`waitForDimensions` hung forever on 0×0 container.

### Fix

Added 3s timeout.

---

## Phase 3 — Airplane Observation Education

**Date:** 2026-05-29
**Status:** Verified

### Summary

Added `observation` field to TerrainLesson. 28 terrain files have comparison-based educational content.

---

## Phase 2 — Cinematic Label Lifecycle

**Date:** 2026-05-28
**Status:** Reverted to polling (caused render regression)

### Summary

Camera-driven label system. Later replaced with 500ms polling due to render storm.

---

## Phase 1 — Terrain Label Interaction System

**Date:** 2026-05-28
**Status:** Verified

### Root Cause

`async` inside `new Promise()` anti-pattern in `flyToTerrainAndWait`.

### Fix

`cameraAt()` runs before Promise creation via `.then()` chain.

---

## Session: Information Architecture & UX Cleanup

**Date:** 2026-05-28
**Status:** Verified

### Summary

- Simplified sidebar: 7 flat categories
- Removed worldview hierarchy
- Removed `funFact` from all data
- Implemented spatial awareness labels

---

## Session: Flight Pacing & Narration Synchronization

**Date:** 2026-05-28
**Status:** Verified

### Summary

- `NarrationQueue` class
- `CinematicLabelManager`
- `narrateWaypoint` async/await
- `narrationCancelledRef`

---

## Phase 4 — UI/UX Refinement

**Date:** 2026-06-01
**Status:** Verified

### Summary

- Layout: right panel 320px, closer to edge
- Typography: sentence segmentation
- Highlighting: `useSentenceHighlight` hook
- Visual: warmer tones, lighter panels
