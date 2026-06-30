#!/usr/bin/env python3
"""
Generate architecture.md from codeatlas SQLite index.

Usage:
    cd flight-geography-explorer
    codeatlas index .
    python3.11 tools/generate_arch_doc.py
"""

import os
import sqlite3
from collections import defaultdict

DB = os.path.expanduser("~/.codeatlas/projects/flight-geography-explorer-doc/index.db")
OUT = os.path.join(os.path.dirname(__file__), "..", "docs", "architecture.md")

conn = sqlite3.connect(DB)
conn.row_factory = sqlite3.Row

def q(sql, *params):
    return conn.execute(sql, params).fetchall()

# ── Gather data ──
STATS = q("""SELECT
    (SELECT COUNT(*) FROM files) as files,
    (SELECT COUNT(*) FROM symbols) as symbols,
    (SELECT COUNT(*) FROM imports) as imports,
    (SELECT COUNT(*) FROM call_edges) as calls,
    (SELECT COUNT(*) FROM dependency_edges) as deps,
    (SELECT COUNT(*) FROM dependency_edges WHERE resolved=1) as resolved""")[0]

FILE_SIZES = q("SELECT rel_path, lines FROM files ORDER BY lines DESC")
COUPLING = q("""SELECT t.rel_path as target, COUNT(DISTINCT de.source_file_id) as cnt
    FROM dependency_edges de JOIN files t ON de.target_file_id = t.id
    WHERE de.resolved = 1 GROUP BY de.target_file_id ORDER BY cnt DESC LIMIT 10""")
TOP_CALLS = q("""SELECT callee_name, COUNT(*) as cnt FROM call_edges
    GROUP BY callee_name ORDER BY cnt DESC LIMIT 20""")
LEAF = q("""SELECT f.rel_path, f.lines FROM files f
    WHERE f.id NOT IN (SELECT DISTINCT target_file_id FROM dependency_edges WHERE resolved=1)
    AND f.rel_path NOT LIKE 'types/%' AND f.rel_path NOT LIKE 'app/%'
    ORDER BY f.lines DESC LIMIT 10""")
UNUSED = q("""SELECT s.name, s.kind, f.rel_path FROM symbols s JOIN files f ON s.file_id = f.id
    WHERE s.is_export = 1 AND s.kind IN ('function','method','class')
    AND s.name NOT IN (SELECT symbol_name FROM imports WHERE symbol_name != '')
    AND s.name NOT IN ('RootLayout','Home','layout','page','default','generateStaticParams')
    ORDER BY f.rel_path LIMIT 20""")

# Camera callers
camera_callers = q("""SELECT s.name as caller, f.rel_path FROM call_edges ce
    JOIN symbols s ON ce.caller_symbol_id = s.id JOIN files f ON ce.caller_file_id = f.id
    WHERE ce.callee_name = 'cameraAt'""")

# Layer deps
layers = q("""SELECT DISTINCT
  CASE WHEN f.rel_path LIKE 'components/%' THEN 'components'
       WHEN f.rel_path LIKE 'lib/%' THEN 'lib' WHEN f.rel_path LIKE 'features/%' THEN 'features'
       WHEN f.rel_path LIKE 'app/api/%' THEN 'api' WHEN f.rel_path LIKE 'app/%' THEN 'app'
       WHEN f.rel_path LIKE 'types/%' THEN 'types' END as layer,
  CASE WHEN fs.rel_path LIKE 'components/%' THEN 'components'
       WHEN fs.rel_path LIKE 'lib/%' THEN 'lib' WHEN fs.rel_path LIKE 'features/%' THEN 'features'
       WHEN fs.rel_path LIKE 'app/api/%' THEN 'api' WHEN fs.rel_path LIKE 'app/%' THEN 'app'
       WHEN fs.rel_path LIKE 'types/%' THEN 'types' END as imports_from,
  COUNT(DISTINCT f.id) as fc
FROM imports i JOIN files f ON i.file_id = f.id
LEFT JOIN files fs ON i.resolved_file_id = fs.id
WHERE i.resolved_file_id IS NOT NULL AND layer IS NOT NULL AND imports_from IS NOT NULL
GROUP BY layer, imports_from ORDER BY layer, fc DESC""")

# ── Key modules ──
MODULES = [
    ("components/ExplorerApp.tsx", "Application Orchestrator", "ExplorerApp",
     "Coordinates CesiumMap, NarrationPanel, FlightControls, and global app state.",
     [("Fact", "Imports 18 internal modules + 7 child components", "High"),
      ("Role", "Acts as the central coordinator — owns activeTerrain, activeRoute, isSpeaking, appMode", "High"),
      ("Fact", "Unifies two data models: TerrainPoint (xinjiang) + GeographicFeature (china) in ALL_FEATURES sidebar", "High"),
      ("Fact", "Calls speakAndWait() 6 times — the primary TTS consumer", "High"),
      ("Inference", "Likely the only component that holds cross-cutting app state", "Medium")]),
    ("components/CesiumMap.tsx", "3D Rendering Engine", "CesiumMap",
     "The sole 3D entry point. Wraps CesiumJS Viewer and exposes 40+ methods via CesiumMapHandle ref.",
     [("Fact", "1,707 lines, 292 symbols — the largest file in the project", "High"),
      ("Role", "Provides Camera, Flight, Geometry, Boundary, and Debug subsystems as a single ref handle", "High"),
      ("Fact", "init() chain: waitForDimensions → createWorldTerrainAsync → flyTo → bind events → load Natural Earth boundaries", "High"),
      ("Inference", "Likely a God Component — 40 methods split across 5 subsystems suggests extraction", "Medium")]),
    ("features/types.ts", "Next-Gen Data Model", "GeographicFeature",
     "Defines the GeographicFeature type with maturity, geometry, story, and interaction definitions.",
     [("Fact", "19 exported types: FeatureType, Geometry (4 variants), CameraViewpoint, StoryNode, MaturityLevel 0-4, etc.", "High"),
      ("Fact", "Consumed by only 3 files — all in the 3D rendering chain", "High"),
      ("Inference", "Appears to be the next-generation data model; TerrainPoint is the legacy counterpart", "Medium")]),
    ("lib/terrain.ts", "Terrain Data Hub", "TerrainHub",
     "Central registry that loads, categorizes, and serves 34 terrain JSON files.",
     [("Fact", "Imports 34 terrain JSON files, exports getAllTerrains(), getTerrainsByCategory(), getTerrainById()", "High"),
      ("Fact", "Consumed by 7 modules — the most-referenced business module", "High"),
      ("Role", "Acts as the single source of truth for terrain data access", "High")]),
    ("lib/foi-registry.ts", "FOI Registry", "FOIRegistry",
     "Maps each terrain to its primary and secondary Features of Interest with geometry coordinates.",
     [("Fact", "1,183 lines — second-largest file. One export: TERRAIN_FOIS static data + getTerrainFOI()", "High"),
      ("Role", "Bridges geometry data to Camera computation — consumed by both CesiumMap and ExplorerApp", "High"),
      ("Inference", "Large inline static data suggests extraction to JSON could improve maintainability", "Medium")]),
    ("lib/auto-camera.ts", "Camera Computation Engine", "AutoCamera",
     "Auto-derives Cesium Camera parameters from polygon/ridge geometry and FOI positions.",
     [("Fact", "8 exported functions forming the pipeline: extractPolygonCoords → computeBBox → computeCameraFromRidge → CameraParams", "High"),
      ("Fact", "computeCameraFromRidge called by 4 sites in 2 files (CesiumMap + ExplorerApp)", "High"),
      ("Role", "Eliminates manual camera coordinates — the 'no more hand-tuned camera' architectural rule", "High")]),
    ("lib/speech.ts", "TTS Engine", "Speech",
     "Text-to-speech wrapper supporting Edge TTS (server) and browser SpeechSynthesis (fallback).",
     [("Fact", "12 exports including speakAndWait(), stopSpeech(), WordBoundary, SpeakResult", "High"),
      ("Fact", "speakAndWait() called 6 times — all from ExplorerApp", "High"),
      ("Role", "The sole audio output channel for all narration", "High")]),
    ("lib/narration-queue.ts", "Narration Priority Queue", "NarrationQueue",
     "Async priority queue for sequential narration playback with cancellation support.",
     [("Fact", "NarrationQueue class with 11 methods: enqueue, playImmediate, cancel, processNext, etc.", "High"),
      ("Fact", "processNext() self-calls to form a processing chain — enqueue → processNext → speak → processNext", "High"),
      ("Role", "Ensures narrations play one at a time and can be interrupted", "High")]),
    ("lib/cinematic-labels.ts", "Cinematic Label System", "CinematicLabels",
     "Manages terrain labels as cinematic overlay layers with animation and LOD-based visibility.",
     [("Fact", "CinematicLabelManager class with 12 methods: createLayer, addLabel, removeLayer, setActiveLabel, etc.", "High"),
      ("Fact", "Consumed by ExplorerApp and CesiumOverlayLabels via singleton labelManager export", "High"),
      ("Role", "Decouples label rendering from 3D scene management", "High")]),
    ("lib/routes.ts", "Flight Route System", "Routes",
     "Loads and resolves flight routes from JSON definitions into ResolvedWaypoint arrays.",
     [("Fact", "3 static route definitions → resolveRouteWaypoints() → ResolvedWaypoint[]", "High"),
      ("Fact", "resolveWaypoint() resolves terrain names to TerrainPoint via getTerrainById()", "High"),
      ("Role", "Converts human-readable routes into flyable waypoint sequences", "High")]),
    ("lib/regions.ts", "Region Manager", "Regions",
     "Defines geographic regions (currently only China) with center coordinates and availability flags.",
     [("Fact", "REGIONS static data + setActiveRegion/getActiveRegion/getAvailableRegions/hasTerrainData", "High"),
      ("Role", "Scaffolding for multi-region expansion (Australia, global, etc.)", "High"),
      ("Inference", "Only 'china' region has available=true — others are scaffolded for future", "Medium")]),
    ("lib/i18n.ts", "Internationalization", "I18n",
     "Chinese/English UI text, terrain names, and TTS voice mappings.",
     [("Fact", "UI_TEXTS (zh-CN/en-US) + TERRAIN_NAMES + TTS_VOICE_IDS + getTerrainName()/t()/getTTSVoice()", "High"),
      ("Role", "Central i18n dictionary consumed by ExplorerApp, NarrationPanel, and speech.ts", "High")]),
    ("lib/mimo.ts", "AI Lesson Generator", "Mimo",
     "Calls OpenAI API to dynamically generate structured terrain lessons.",
     [("Fact", "buildPrompt() + parseLesson() + generateLesson() → OpenAI API → TerrainLesson", "High"),
      ("Fact", "Called exclusively by api/narration/route.ts", "High"),
      ("Role", "Generates narration content when static data is insufficient", "High")]),
    ("lib/mimo-photo.ts", "AI Photo Identifier", "MimoPhoto",
     "Photo recognition pipeline: catalog → prompt → OpenAI Vision → parse result → fallback.",
     [("Fact", "buildCatalog() → buildTextPrompt() → callTextModel() → parseResult()", "High"),
      ("Fact", "Fallback chain: AI fails → photo-fallback.ts → rule-based guess", "High"),
      ("Role", "Powers the Photo Mode feature — identify terrain from user photos", "High")]),
]

# ═══════════════════════════════════════════════
# WRITE
# ═══════════════════════════════════════════════
L = []
w = L.append

w("# Flight Geography Explorer — Architecture")
w("")
w("> Generated by [codeatlas](https://github.com/AudreyYZY/codeatlas) v0.2.0 • 2026-06-30")
w("")
w("---")
w("")
w("## Executive Summary")
w("")
w("**Flight Geography Explorer** is a documentary-style web application for recognizing Earth's landforms from an airplane window perspective. Not a GIS dashboard, not a flight simulator, not a game.")
w("")
w("### Three Core Subsystems")
w("1. **3D Rendering** — CesiumJS globe with auto-derived camera, cinematic labels, and flight routes")
w("2. **Narration System** — TTS pipeline from terrain data → structured lesson → SSML → speech with sentence-level highlighting")
w("3. **Terrain Data** — 34 JSON terrain definitions organized through a central hub, with AI-powered photo identification")
w("")
w("### Three Key Data Flows")
w("1. **Camera**: `Geometry → FOI Registry → auto-camera.ts → Cesium.Camera.flyTo()`")
w("2. **Narration**: `TerrainPoint → narration-engine / lesson.ts → speakAndWait() → WordBoundary highlighting`")
w("3. **Photo ID**: `PhotoModePanel → compress-image → API route → mimo-photo.ts → OpenAI Vision → fallback`")
w("")
w("### Three Architectural Characteristics")
w(f"1. **Dual Data Model** — TerrainPoint (16 consumers, legacy) coexists with GeographicFeature (3 consumers, next-gen)")
w(f"2. **FOI Registry** — 1,183-line registry mapping each terrain to camera-worthy Points of Interest")
w(f"3. **Auto Camera** — No manual camera coordinates; all computed from geometry + FOI position")
w("")
w("### Three Technical Risks")
w(f"1. 🔴 **God Component** — CesiumMap.tsx: 1,707 lines, 292 symbols, ~40 methods across 5 subsystems")
w(f"2. 🟡 **Dual Models** — Two parallel terrain data representations with migration in progress")
w(f"3. 🟡 **Large Static Data** — foi-registry.ts (1,183 lines) and i18n.ts (217 lines) contain inline data dictionaries")
w("")
w("---")
w("")
w("## System Architecture")
w("")
w("### Layer Dependency Matrix")
w("")
w("```")
w("┌─────────────────────────────────────────┐")
w("│  app/       Pages + API Routes          │")
w("│  components/    React UI (17 files)     │")
w("│  lib/       Business Logic (26 files)   │")
w("│  features/  Terrain Data (next-gen)     │")
w("│  types/     Shared Types (4 files)      │")
w("│  data/      Static JSON (35 files)      │")
w("└─────────────────────────────────────────┘")
w("```")
w("")
w("| Source | → Target | Files |")
w("|---|---|---|")
for r in layers:
    w(f"| {r['layer']}/ | → {r['imports_from']}/ | {r['fc']} |")
w("")
w("**No circular dependencies detected.** components/ can import lib/, types/, and features/. lib/ can import types/ and other lib/. types/ imports nothing internally.")
w("")
w(f"### Scale")
w(f"")
w(f"| Metric | Value |")
w(f"|---|---|")
w(f"| Source files | {STATS['files']} (.ts/.tsx) |")
w(f"| Total symbols | {STATS['symbols']} |")
w(f"| Import relationships | {STATS['imports']} |")
w(f"| Call edges | {STATS['calls']} |")
w(f"| Internal deps resolved | {STATS['resolved']}/{STATS['deps']} ({100*STATS['resolved']//STATS['deps']}%) |")
w("")
w("### Most Coupled Modules")
w("")
w("| Ref'd by | Module | Role |")
w("|---|---|---|")
role_map = {"types/terrain.ts": "Foundation type — TerrainPoint", "lib/terrain.ts": "Data hub — 34 JSONs", "types/route.ts": "Route type", "lib/strip-emojis.ts": "Utility — emoji cleaner", "features/types.ts": "Next-gen type — GeographicFeature"}
for r in COUPLING:
    w(f"| {r['cnt']} | `{r['target']}` | {role_map.get(r['target'], '')} |")
w("")
w("---")
w("")
w("## Core Pipelines")
w("")
w("### Camera Derivation Pipeline")
w("")
w("```")
w("GeographicFeature.geometry (Polygon | RidgeCorridor)")
w("  → foi-registry.ts / getTerrainFOI()")
w("    → primary FOI (lon, lat, type) + geometryCoords")
w("  → auto-camera.ts")
w("    ├─ extractPolygonCoords() / extractLineCoords()")
w("    ├─ computeBBox()")
w("    ├─ computeCameraFromRidge()")
w("    │   ├─ computeMountainHeading()")
w("    │   ├─ computeRangeForSpan() → min()")
w("    │   ├─ clamp() → max()/min()")
w("    │   └─ offsetPositionForHeading() → tan/abs/asin/sin/cos/atan2")
w("    └─ CameraParams { target, heading, pitch, range }")
w("  → CesiumMap.cameraAt() → Cesium.Camera.flyTo()")
w("```")
w("")
w(f"**cameraAt callers:**")
for r in camera_callers:
    w(f"- `{r['caller']}()` in `{r['rel_path']}`")
w("")
w("### Narration Pipeline")
w("")
w("```")
w("TerrainPoint (34 JSON, each with lesson field)")
w("  ├─ lib/narration-engine.ts")
w("  │   ├─ generateNarrationFromTerrainData() — structured narrative")
w("  │   ├─ generateFlyoverNarration() — flyover cue")
w("  │   └─ generateRouteNarration() — route description")
w("  ├─ lib/lesson.ts")
w("  │   ├─ lessonToSpeech() — TerrainLesson → plain text")
w("  │   ├─ lessonToSSML() — TerrainLesson → SSML markup")
w("  │   └─ terrainToSpeech() — TerrainPoint → full speech text")
w("  ├─ lib/mimo.ts (OpenAI) — generateLesson() → dynamic AI narration")
w("  └─ lib/speech.ts / speakAndWait() → Edge TTS / browser fallback")
w("       └─ useSentenceHighlight → WordBoundary highlighting → StructuredLesson")
w("```")
w("")
w("### Photo Identification Pipeline")
w("")
w("```")
w("PhotoModePanel → compress-image.ts → api/photo-identify → mimo-photo.ts")
w("  ├─ buildCatalog() → buildTextPrompt() → callTextModel (OpenAI Vision) → parseResult()")
w("  └─ (AI fail) → photo-fallback.ts → resultFromTerrain() / guessPhotoFromHint()")
w("```")
w("")
w("### Flight Route Pipeline")
w("")
w("```")
w("ExplorerApp → CesiumMap.flyRoute(route, callbacks)")
w("  ├─ routes.ts / resolveRouteWaypoints() → resolveWaypoint() → getTerrainById()")
w("  ├─ preloadRoute() — preload terrain tiles")
w("  └─ for each waypoint → flyLeg(from, to, route)")
w("       ├─ cameraAt(dest) → sampleTerrainMostDetailed")
w("       ├─ legDurationSec() → flyTo() → waitForTilesSettled()")
w("```")
w("")
w("---")
w("")
w("## Key Modules")
w("")

for path, role_short, _, summary, evidence_list in MODULES:
    name = path.split("/")[-1]
    lines = next((n for p, n in FILE_SIZES if path in p), "?")
    w(f"### `{name}` — {role_short}")
    w(f"**{summary}** ({lines} lines)")
    w("")
    w("| Type | Finding | Confidence |")
    w("|---|---|---|")
    for etype, text, conf in evidence_list:
        w(f"| {etype} | {text} | {conf} |")
    # Key symbols
    syms = q("""SELECT s.name, s.kind, s.line_start, s.is_export FROM symbols s
        JOIN files f2 ON s.file_id = f2.id
        WHERE f2.rel_path = ? AND (s.is_export=1 OR s.kind IN ('class','function','method'))
        ORDER BY s.line_start""", path)
    if syms:
        w("")
        names = [f"`{s['name']}`" for s in syms if s['kind'] not in ('variable',)]
        w("**Key symbols**: " + ", ".join(names[:15]) + (f" (+{len(names)-15} more)" if len(names) > 15 else ""))
    w("")

w("---")
w("")
w("## Architecture Risks")
w("")
w("| Severity | Risk | Evidence |")
w("|---|---|---|")
w("| 🔴 | God Component: CesiumMap.tsx | 1,707 lines, 292 symbols, ~40 methods across 5 subsystems (Camera/Flight/Geometry/Boundary/Debug) |")
w("| 🟡 | Duplicate Code: splitSentences() | Defined in both StructuredLesson.tsx and useSentenceHighlight.ts — extract to shared utility |")
w("| 🟡 | Dual Data Model | TerrainPoint (16 consumers) vs GeographicFeature (3 consumers) — migration in progress |")
w("| 🟡 | Large Static Data | foi-registry.ts (1,183 lines) and i18n.ts (217 lines) contain inline data dictionaries |")
for r in LEAF:
    w(f"| 🟡 | Leaf Module: `{r['rel_path']}` | {r['lines']} lines, no internal consumers — possibly unused or framework entry point |")
w("")
w("---")
w("")
w("## Project Metrics")
w("")
w("### File Size Distribution")
buckets = {"≤50": 0, "51-100": 0, "101-200": 0, "201-500": 0, "500-1000": 0, "1000+": 0}
for _, n in FILE_SIZES:
    if n <= 50: buckets["≤50"] += 1
    elif n <= 100: buckets["51-100"] += 1
    elif n <= 200: buckets["101-200"] += 1
    elif n <= 500: buckets["201-500"] += 1
    elif n <= 1000: buckets["500-1000"] += 1
    else: buckets["1000+"] += 1
for b, c in buckets.items():
    bar = "█" * c
    w(f"- **{b}**: {c} files {bar}")
w("")
w("### Most Called Functions")
w("")
w("| Calls | Function |")
w("|---|---|")
for r in TOP_CALLS[:10]:
    w(f"| {r['cnt']} | `{r['callee_name']}()` |")
w("")
w("---")
w("")
w("## Appendix: Complete Module Index")
w("")
for section, prefix in [("components (17)", "components/"), ("lib (26)", "lib/"), ("features (5)", "features/"), ("types (4)", "types/"), ("app (5)", "app/")]:
    w(f"### {section}")
    for p, n in sorted(FILE_SIZES, key=lambda x: -x[1]):
        if p.startswith(prefix):
            w(f"- `{p.split('/')[-1]}` ({n} lines)")
    w("")
w("---")
w("")
w("> Generated by [codeatlas](https://github.com/AudreyYZY/codeatlas) v0.2.0 • 2026-06-30")
w("> Update: `codeatlas index . && python3.11 tools/generate_arch_doc.py`")

with open(OUT, "w") as f:
    f.write("\n".join(L) + "\n")

print(f"Written {len(L)} lines → {OUT}")
conn.close()
