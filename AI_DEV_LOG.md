# AI_DEV_LOG.md

Development log for AI-assisted development sessions.

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
