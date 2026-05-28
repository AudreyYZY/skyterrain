# AI_DEV_LOG.md

Development log for AI-assisted development sessions.

---

## Session: Information Architecture & UX Cleanup

### What Was Removed

1. **Worldview hierarchy** — The two-level collapsible tree with subgroups (天山山脉, 阿尔泰山, etc.) was too academic. Replaced with simple flat categories: 山脉, 湖泊, 沙漠, 盆地, 河谷, 景观, 城市.

2. **GeographyComparison system** — 5 comparison definitions (昆仑山 vs 喀喇昆仑, etc.) and all related types (`GeographyComparison`, `GeographyWorldviewNode`, `WorldviewNode`, `WorldviewSubgroup`) were unused dead code.

3. **`funFact` field** — Removed from `TerrainLesson` interface, all 32 JSON files, `lessonToSpeech()`, narration engine, city lessons, and AI prompt template. The UI only renders 3 sections (seeing, formation, history), so narration was speaking content the user couldn't see.

4. **Unused imports** — `createWaypointLabel` from ExplorerApp.

### What Was Simplified

1. **Sidebar** — `FlightControls` now renders a flat list of categories. Each category is a collapsible section with terrain items. No nested subgroups.

2. **Category system** — `terrain-categories.ts` reduced from 115 lines (worldview hierarchy + comparison definitions) to 27 lines (flat category order + labels + merge map).

3. **Terrain grouping** — `CATEGORY_MERGE` in `lib/terrain.ts` maps `oasis` → "景观", `silk_road` → "景观", `valley` → "河谷". Data categories preserved, display categories simplified.

### New Sidebar Architecture

```
FlightControls
├── 山脉 (7) — collapsible
│   ├── 天山
│   ├── 阿尔泰山
│   └── ...
├── 湖泊 (6) — collapsible
├── 沙漠 (3) — collapsible
├── 盆地 (3) — collapsible
├── 河谷 (4) — collapsible
├── 景观 (6) — collapsible (includes oasis + silk_road)
└── 城市 (3) — collapsible
```

### Narration Synchronization

After removing `funFact`:
- `TerrainLesson` has exactly 3 fields: `seeing`, `formation`, `history`
- `StructuredLesson` renders exactly 3 sections: 飞机窗外, 地貌形成, 历史与人文
- `lessonToSpeech()` concatenates exactly those 3 fields
- Narration audio and UI text are now perfectly synchronized

### Spatial Awareness Labels

New `CesiumOverlayLabels` component:
- Renders major terrain names as HTML overlays on the Cesium globe
- Uses `projectToScreen()` (lat/lon → canvas coordinates) from CesiumMap
- Camera change listener drives position updates (rAF throttled)
- 15 major landmarks: 天山, 昆仑, 喀喇昆仑, 阿尔泰, 塔克拉玛干, 古尔班通古特, 喀纳斯, 赛里木, 罗布泊, 伊犁河谷, 塔里木河, 喀什, 吐鲁番, 火焰山, 巴音布鲁克
- Hidden during route flight to avoid visual clutter
- Click label → `handleSelectTerrain()` → camera flies + narration plays

### Key Architecture Decisions

1. **Categories are display-only** — Terrain data keeps fine-grained categories (`oasis`, `silk_road`), but display merges them into broader groups. This preserves data fidelity while simplifying UI.

2. **Labels are data-driven** — `CinematicLabelManager` holds label data, `CesiumOverlayLabels` renders it. Labels can be added/removed without touching the renderer.

3. **`projectToScreen` is on the ref** — Avoids passing Cesium viewer instance to child components. The ref method encapsulates Cesium API access.

---

## Session: Flight Pacing & Narration Synchronization Fix

### Root Cause Analysis

**Problem 1: Route narration was fire-and-forget**

In `ExplorerApp.tsx`, `narrateWaypoint` called `speakAndWait(...).finally(...)` without awaiting. This meant:
- Camera moved to next waypoint while narration was still playing
- User heard narration for terrain A while looking at terrain B
- Created a "slideshow" feeling

**Problem 2: CesiumMap's `flyRoute` didn't await narration**

In `CesiumMap.tsx`, `callbacks.onWaypointArrival(wp, i)` was called without `await`. The `sleep(dwellDuringFlightSec)` was a fixed timer, not connected to actual narration completion.

**Problem 3: No narration cancellation**

When user stopped a flight or selected a new terrain, narration continued playing. No `cancelled` flag existed to abort in-flight narration.

**Problem 4: No narration queue**

Multiple rapid terrain selections could trigger overlapping narrations. No queue system existed to serialize speech.

### Synchronization Architecture

**Before (broken):**
```
flyLeg → onWaypointArrival (fire-and-forget) → sleep(10s) → next flyLeg
         ↓
         speakAndWait (running in background, not awaited)
```

**After (fixed):**
```
flyLeg → await onWaypointArrival → sleep(dwell) → next flyLeg
              ↓
              await speakAndWait (camera waits at waypoint)
              ↓
              await sleep(POST_NARRATION_DWELL_MS) (digest pause)
```

**New flow for terrain selection:**
```
handleSelectTerrain:
  1. Cancel any in-flight narration (narrationCancelledRef = true)
  2. Cancel narration queue
  3. Stop flight
  4. await flyToTerrainAndWait (camera moves)
  5. await showTerrainLesson (narration plays)
  6. await POST_NARRATION_DWELL_MS (2s digest pause)
```

**New flow for route flight:**
```
flyRoute:
  for each waypoint:
    1. await flyLeg (camera moves to waypoint)
    2. await onWaypointArrival (narration plays, camera stays)
       - Inside: await speakAndWait (waits for speech completion)
       - Inside: await POST_NARRATION_DWELL_MS (2s digest)
    3. await dwellDuringFlightSec (additional dwell)
    4. Next flyLeg begins
```

### New Modules

**`lib/narration-queue.ts`**
- `NarrationQueue` class — serializes narration tasks
- Supports priority (high/normal/low)
- `enqueue()` — adds task to queue, returns Promise
- `playImmediate()` — plays now, clears queue
- `cancel()` — stops current and clears queue
- Global instance: `narrationQueue`

**`lib/cinematic-labels.ts`**
- `CinematicLabelManager` class — manages annotation layers
- Decoupled from Cesium entities
- Supports: hover, fade, zoom-level filtering, focus mode
- `CinematicLabel` type — terrain, waypoint, annotation, highlight
- `LabelLayer` type — groups labels with visibility and zIndex
- Global instance: `labelManager`
- Helper functions: `createTerrainLabel()`, `createWaypointLabel()`

### Files Modified

| File | Change |
|------|--------|
| `components/ExplorerApp.tsx` | Uses narration queue, `narrateWaypoint` is now async/await, cancellation via `narrationCancelledRef`, cinematic label integration |
| `components/CesiumMap.tsx` | `onWaypointArrival` is now `await`ed, added post-narration dwell |
| `lib/narration-queue.ts` | New — narration queue system |
| `lib/cinematic-labels.ts` | New — cinematic annotation layer |

### Key Design Decisions

1. **Narration completes before camera moves** — The user sees terrain while hearing about it, not after.
2. **2-second POST_NARRATION_DWELL_MS** — Gives users time to digest before the next transition.
3. **`narrationCancelledRef`** — Prevents stale narration callbacks from firing after user action.
4. **Cinematic labels decoupled from Cesium** — Labels are data, not Cesium entities. Future rendering can use HTML overlay, canvas, or Cesium entities.
5. **Narration queue with priority** — Route narration is normal priority, user-triggered narration is high priority.

### Testing Notes

- Route flight: narration should complete at each waypoint before camera moves
- Terrain selection: camera flies first, then narration plays, then 2s dwell
- Stop route: narration stops immediately
- Rapid terrain clicks: previous narration cancelled, new one starts
