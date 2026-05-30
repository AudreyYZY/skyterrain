# Architecture Decision Records

Flight Geography Explorer — architectural decisions, context, and tradeoffs.

---

## ADR-001: Avoid camera.changed → React State

### Context

During Phase 2 (Cinematic Label Lifecycle), we needed labels to update as the camera moved. The initial approach hooked CesiumJS `camera.changed` event to `setCameraState()` in React, expecting smooth label tracking.

The result was a complete black screen — the Cesium WebGL canvas stopped rendering entirely.

**Root cause:** `camera.changed` fires on every animation frame (~60fps). Each event triggered `setCameraState` → full React reconciliation of ExplorerApp and all children → main thread blocked → Cesium's `requestRender()` missed its frame → black canvas.

Even a 150ms throttle was insufficient — 6-7 React re-renders per second still starved WebGL during camera animations.

### Decision

`camera.changed` must never drive React state. Camera events are decoupled from React entirely.

### Alternatives Considered

| Alternative | Outcome |
|------------|---------|
| `camera.changed` + `useState` (150ms throttle) | **Rejected** — still caused render storm at 6-7 fps |
| `camera.moveEnd` only | **Partial** — fires once when camera stops, not during animation |
| `requestAnimationFrame` polling | **Rejected** — still couples to frame rate, similar risk |
| `setInterval` polling at 500ms | **Accepted** — decoupled from Cesium frame rate, reads camera imperatively |

### Consequences

**Benefits:**
- Cesium WebGL rendering is completely independent of React reconciliation
- No black screen risk from render storms
- Label updates are predictable (every 500ms)

**Limitations:**
- Labels update at 2fps instead of 60fps — acceptable for documentary pacing, not suitable for real-time tracking
- `getCameraState()` reads camera position imperatively via ref, bypassing React's data flow

---

## ADR-002: Use Polling For Label Updates

### Context

CesiumOverlayLabels needs camera altitude (for zoom filtering) and screen projection (for label positioning) to render labels correctly. These values change every frame during camera animation.

### Decision

Label positions are updated via 500ms `setInterval` polling that reads camera state imperatively through `mapRef.current.getCameraState()` and projects labels via `mapRef.current.projectToScreen()`.

### Alternatives Considered

| Alternative | Outcome |
|------------|---------|
| `camera.changed` → React state | **Rejected** — ADR-001, causes black screen |
| `camera.moveEnd` event | **Partial** — only fires when camera stops, not during flight |
| `postRender` Cesium event | **Rejected** — fires every frame, same risk as `camera.changed` |
| `requestAnimationFrame` loop | **Rejected** — couples to frame rate, potential render conflict |
| `setInterval` 500ms polling | **Accepted** — decoupled, predictable, sufficient for documentary pacing |

### Consequences

**Benefits:**
- Zero coupling between Cesium rendering and React reconciliation
- Labels update predictably regardless of camera animation speed
- `getCameraState()` is a pure read — no side effects, no state updates

**Limitations:**
- 500ms latency between camera movement and label position update
- During fast camera moves, labels may briefly lag behind — mitigated by CSS opacity transitions
- `projectToScreen()` is called per-label per-tick — could cache camera state per tick for optimization

---

## ADR-003: Narration Queue Must Be Serial

### Context

When users clicked terrains rapidly or route waypoints triggered narration, multiple `speakAndWait()` calls ran simultaneously. Edge TTS would cancel previous requests, causing garbled audio. The UI showed narration text for one terrain while audio played for another.

### Decision

`NarrationQueue` executes tasks sequentially — each narration completes (or is cancelled) before the next begins. The queue supports priority (high/normal/low) and cancellation.

### Alternatives Considered

| Alternative | Outcome |
|------------|---------|
| Parallel narration | **Rejected** — audio overlap, UI desync |
| Interruption model (new cancels old) | **Partial** — works for user clicks, breaks route narration |
| Event-based model | **Rejected** — complex, hard to synchronize with camera |
| Serial queue with priority | **Accepted** — clean sequencing, cancellation support |

### Consequences

**Benefits:**
- Narration audio always matches visible terrain
- Route narration plays in correct order
- User-triggered narration (high priority) can preempt queued items
- Clean cancellation on route stop or new terrain selection

**Limitations:**
- Rapid terrain clicks queue up — user must wait for current narration to finish
- Route narration at each waypoint blocks camera movement for the duration of speech

---

## ADR-004: Route Narration Cannot Block Flight System

### Context

Originally, route flight waited for full narration completion at each waypoint before flying to the next. This created a stop-and-go slideshow: fly → stop → narrate → fly → stop → narrate. The experience felt like a presentation, not a flight.

### Decision

Route flight and narration are coordinated but loosely coupled:
- Camera flies to waypoint
- Narration begins (non-blocking — `onWaypointArrival` returns immediately)
- Camera dwells at waypoint for `dwellDuringFlightSec` seconds
- Camera flies to next waypoint (narration may still be playing)

The `narrateWaypoint` function is `async` but `flyRoute` does not `await` it — it fires and moves on after the dwell period.

### Alternatives Considered

| Alternative | Outcome |
|------------|---------|
| Fully synchronous (await narration, then fly) | **Rejected** — stop-and-go slideshow, breaks immersion |
| Fully asynchronous (fire-and-forget, no dwell) | **Rejected** — user sees terrain B while hearing about terrain A |
| Coordinated non-blocking (fire narration, dwell, then fly) | **Accepted** — narration starts at waypoint, camera stays briefly, then continues |

### Consequences

**Benefits:**
- Continuous flight feeling — camera keeps moving
- Narration starts at the correct terrain
- Dwell period gives users time to see terrain while narration plays
- Narration may continue into the next leg — feels like documentary voiceover

**Limitations:**
- If narration is longer than dwell + next leg, user hears about terrain A while looking at terrain B
- No mechanism to extend dwell based on narration length (would require knowing TTS duration upfront)

---

## ADR-005: Protected Infrastructure Policy

### Context

Multiple regressions occurred in the Cesium rendering pipeline:
1. `camera.changed` → black screen (render storm)
2. `waitForDimensions` → black screen (infinite hang)
3. `async` inside `new Promise()` → promise hang (never settles)
4. `new Cesium.Viewer()` on 0×0 container → canvas crash

Each regression required significant debugging. The root cause was always the same: modifying the Cesium ↔ React integration without understanding the adversarial relationship between React reconciliation and WebGL rendering.

### Decision

The following systems are designated as protected infrastructure:
- Cesium initialization (`waitForDimensions`, Viewer creation)
- Viewer lifecycle (destroy, resize)
- Terrain/imagery provider setup
- React ↔ Cesium rendering relationship (no `camera.changed` → state)
- Camera event architecture (polling, not event-driven)

Future modifications require explicit risk assessment and approval.

### Consequences

**Benefits:**
- Prevents regression cycles — each fix is preserved
- Clear boundary between "safe to modify" and "requires approval"
- Future developers (including AI sessions) understand constraints

**Limitations:**
- Some optimizations may be blocked by policy (e.g., frame-perfect label tracking)
- Requires manual override process for legitimate infrastructure changes

---

## ADR-006: Geography Education First

### Context

The project exists to help users understand Xinjiang terrain from an airplane window. It is not a GIS tool, flight tracker, or game. Users should learn:
- What they see outside the window
- Why the terrain looks this way
- How to distinguish it from similar terrain

### Decision

Educational value takes priority over technical complexity. All features should be evaluated against the question: "Does this help a passenger understand what they're seeing?"

### Consequences

**What to prioritize:**
- Observation content (visual patterns, comparison, recognition)
- Clear narration that matches visible terrain
- Structured geography knowledge (sources, confidence, formation)
- Cinematic pacing that allows learning

**What to deprioritize:**
- Dense GIS layers (contour lines, satellite bands, coordinate grids)
- Engineering complexity (real-time terrain streaming, physics simulation)
- Feature quantity over content quality
- Map interaction patterns (zoom controls, layer toggles, measurement tools)

The product should feel like a documentary, not a dashboard.
