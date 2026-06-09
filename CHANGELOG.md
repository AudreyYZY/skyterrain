# CHANGELOG.md

All notable changes to Flight Geography Explorer are documented here.

---

## Phase 6 — i18n + China Scope + Geometry Validation

**Date:** 2026-06-09
**Status:** In Progress

### i18n 语言切换完成

- 中英文切换 (zh-CN / en-US)
- UI 文本通过 `t()` 函数翻译
- 讲解故事通过 `getTerrainStory()` 翻译
- 地形名称通过 `getTerrainName()` 翻译
- TTS 语音跟随语言设置

### Narration 翻译同步修复

- **Bug**: `handleSelectFeature` 显示用翻译故事，语音用 `feature.story`
- **Fix**: 统一使用 `effectiveLesson`（含翻译）
- NarrationPanel 全面 i18n 支持（language prop）

### 中国地貌探索替代新疆空中地貌探索

- 标题: "新疆空中地貌探索" → "飞行地貌探索"
- Meta 描述: "新疆 15 处地貌" → "中国地貌"
- 头部标签: "新疆 · N" → "中国 · N"
- 范围从新疆扩展到全国

### Geometry Validation 阶段启动

- 审计当前 Camera 系统（全部手工参数）
- 确认 5 个样本地形缺少真实 Geometry
- 验证 Natural Earth 数据源（5/5 地形 Polygon 存在）
- 确认 Camera 必须从 Geometry 自动推导

### 数据源验证结果

| 地形 | Natural Earth | Points | BBox |
|------|--------------|--------|------|
| 秦岭 | ✅ Polygon | 88 | [105°, 32°] → [114°, 35°] |
| 祁连山 | ✅ Polygon | 71 | [94°, 36°] → [103°, 40°] |
| 四川盆地 | ✅ Polygon | 62 | [103°, 29°] → [108°, 32°] |
| 柴达木盆地 | ✅ Polygon | 51 | [92°, 36°] → [98°, 38°] |
| 云贵高原 | ✅ Polygon | 65 | [98°, 23°] → [107°, 29°] |

### Files Modified

- `lib/i18n.ts` — welcome.title 更新
- `lib/i18n-stories.ts` — 6 地形中英文故事
- `components/ExplorerApp.tsx` — handleSelectFeature 修复 + 标题更新
- `components/NarrationPanel.tsx` — i18n 支持 (language prop)
- `app/layout.tsx` — Meta 描述更新
- `CLAUDE.md` — 项目指令更新
- `PROJECT_MEMORY.md` — 项目记忆更新

---

## Phase 5D — Documentary Map Labeling System

**Date:** 2026-06-04
**Status:** Completed

### Changes

**Label System Redesign:**
- 6 major landforms (天山, 昆仑山, 阿尔泰山, 准噶尔盆地, 塔里木盆地, 塔克拉玛干沙漠) always visible at any zoom level
- Major labels: 28px, weight 600, letter-spacing 0.08em
- Triple-layer text shadow for cinematic depth
- Removed background bubbles and dot markers — pure text
- Font: Noto Sans SC / PingFang SC / Microsoft YaHei

**Files Modified:**
- `lib/cinematic-labels.ts` — Added `major` field, major labels always visible, larger font sizes
- `components/CesiumOverlayLabels.tsx` — Cinematic typography, no background, wider edge fade (60px), larger gap (80px)
- `components/ExplorerApp.tsx` — 6 major landforms with `major: true`

---

## Phase 5C — Sentence Highlighting Fix (Multi-Section)

**Date:** 2026-06-04
**Status:** Completed

### Root Cause

`speakText()` called `stopSpeaking()` which called `stopHighlight()`, immediately clearing the state set by `startHighlightSections()`.

### Fix

- Added `stopAudio()` — stops audio only, preserves highlight state
- `speakText()` uses `stopAudio()` instead of `stopSpeaking()`
- `stopSpeaking()` preserved for user-initiated stops
- Extracted `speakLessonWithHighlight()` — shared by auto-narration and manual speak button
- `startHighlightSections()` now tracks `activeSection` as highlight advances through sections

**Files Modified:**
- `components/ExplorerApp.tsx` — Added `stopAudio()`, `speakLessonWithHighlight()`, updated `onSpeak` button
- `components/useSentenceHighlight.ts` — Added `startHighlightSections()`, `findSectionForIndex()`, multi-section tracking
- `components/StructuredLesson.tsx` — All sections render sentence-level highlighting with cumulative offset

---

## Phase 5B — TTS Fix

**Date:** 2026-06-04
**Status:** Completed

### Problem 1: `b.mask is not a function`

**Root cause:** `ws@8.21.0`'s `buffer-util.js` uses conditional `require('bufferutil')`. Webpack drops the JS fallback during bundling.

**Fix:** `serverExternalPackages: ["ws", "bufferutil"]` in next.config.ts.

### Problem 2: SSML Tags Read as Literal Text

**Root cause:** `edge-tts-universal` always wraps input in `<speak><voice><prosody>`. Passing SSML with `<break>` caused nested tags.

**Fix:** `lessonToSSML()` returns plain text. Removed all manual SSML construction in ExplorerApp.

### Problem 3: Trackpad Zoom Blocked

**Root cause:** `CesiumOverlayLabels` overlay had `touch-action: none` blocking pinch gestures.

**Fix:** Removed `touch-action` from overlay.

### Problem 4: CSS Priority Override

**Root cause:** `.narration-hero` had `color: rgba(255,255,255,0.8)` overriding Tailwind utilities.

**Fix:** Removed `color` from `.narration-hero`.

**Files Modified:**
- `next.config.ts` — Added `serverExternalPackages`
- `lib/lesson.ts` — `wrapSSML` returns plain text, removed `escapeSSML`
- `components/ExplorerApp.tsx` — Removed manual SSML construction
- `components/CesiumOverlayLabels.tsx` — Removed `touch-action`
- `app/globals.css` — Removed `color` from `.narration-hero`

---

## Phase 5A — Highlighting, Tile Loading, Hierarchy Fixes

**Date:** 2026-06-03
**Status:** Completed

### Changes

1. **Sentence Highlighting:** `startHighlight` now uses `lesson.seeing` only, matching `StructuredLesson` render text. Added `stripEmojis` before `splitSentences`.

2. **Trackpad Zoom:** Removed `touchAction: "pan-x pan-y"` from overlay div.

3. **Terrain Tiles:** Reset `maximumScreenSpaceError` from 1.5 to 2.0 (default).

**Files Modified:**
- `components/ExplorerApp.tsx`
- `components/useSentenceHighlight.ts`
- `components/CesiumMap.tsx`

---

## Phase 4A — Multi-Task: Imagery, Labels, Sidebar, TTS

**Status:** Completed

### P0: Imagery Provider Fix
- Explicit `IonImageryProvider.fromAssetId(2)` (Bing Maps)

### P0: Sentence Highlighting
- `scrollIntoView` on active sentence during narration

### P1: Hierarchical Sidebar
- `terrain-hierarchy.ts` — region → category → terrain tree

### P1: Label Readability
- Font 12px, opacity 0.9, background pill, stronger text shadow

### P1: TTS 500 Fix
- 15s timeout, retry with backoff, SSML validation

---

## Phase 4A — Narration Voice Upgrade & AI Mode Removal

**Status:** Completed

### Narration Voice Upgrade
- Default voice: XiaoyiNeural (calmer, documentary-style)
- Rate: -18%, Pitch: -2Hz
- Browser fallback strips SSML to plain text

### Remove AI Mode
- Replaced "AI" button with "扩展解读" (expandable local knowledge)
- No API calls — all data is local JSON

---

## Phase 4 — UI/UX Refinement

**Status:** Completed

- Right panel: 380px → 320px, closer to edge, increased transparency
- Sentence segmentation in StructuredLesson
- `useSentenceHighlight` hook for narration sync
- Warmer tones, lighter panels

---

## Phase 3 — Airplane Observation Education

**Status:** Completed

- Added `observation` field to `TerrainLesson` (4th section)
- 28 terrain files have observation data
- Comparison pairs: 天山 vs 阿尔泰, 昆仑 vs 喀喇昆仑, etc.

---

## Phase 2 — Cinematic Label Lifecycle

**Status:** Completed (later reverted to polling)

- Camera-driven label system (later replaced with 500ms polling)
- Zoom-level visibility, edge fade, overlap prevention

---

## Phase 1 — Terrain Label Interaction System

**Status:** Completed

- Fixed `async` inside `new Promise()` anti-pattern
- All terrain selection paths converge on `handleSelectTerrain`

---

## Fix: Cesium Render Regression After Phase 2

**Status:** Completed

- Removed `camera.changed` listener (caused 60fps re-render storm)
- Replaced with 500ms `setInterval` polling

---

## Fix: Cesium Initialization Regression

**Status:** Completed

- Added 3s timeout to `waitForDimensions`
- Removed `onCameraChange` prop

---

## Architecture Decision Records

| ADR | Title |
|-----|-------|
| 001 | camera.changed must never drive React state |
| 002 | Use 500ms polling for label updates |
| 003 | Narration queue must be serial |
| 004 | Route narration cannot block flight |
| 005 | Protected infrastructure policy |
| 006 | Geography education first |

---

## Phase K — Flight Pacing & Narration Synchronization

**Status:** Completed

- `NarrationQueue` class (serial, priority, cancel)
- `CinematicLabelManager` for decoupled annotation
- `narrateWaypoint` async/await with `narrationCancelledRef`

---

## Phase E — Flight Pacing & Async Sequencing

**Status:** Completed

- `speakText` async, `showTerrainLesson` async
- `flyToTerrainAndWait` method

---

## Phase F — Continuous Flight Mode

**Status:** Completed

- Non-blocking narration
- Route overview before flight
- `dwellDuringFlightSec` for waypoint pauses

---

## Phase G — Geography Knowledge Engine

**Status:** Completed

- `TerrainKnowledge` interface (13 fields)
- `narration-engine.ts` — generates narration from structured data

---

## Phase H — UI Cinematic Redesign

**Status:** Completed

- Glassmorphism panels
- `.narration-hero` typography
- `.accent-line` amber gradient borders

---

## Phase I — Geography Expansion (13 → 32 locations)

**Status:** Completed

- 19 new terrain JSON files
- 3 flight routes
- 4 city lessons

---

## Phase L — Information Architecture & UX Cleanup

**Status:** Completed

- Simplified sidebar: 7 flat categories
- Removed worldview hierarchy, GeographyComparison
- Removed `funFact` from all data
- Implemented spatial awareness labels
