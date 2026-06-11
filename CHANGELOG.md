# CHANGELOG.md

All notable changes to Flight Geography Explorer are documented here.

---

## Camera Target 偏移修复 (2026-06-12)

**问题**: 所有 14 个全国/新疆地形点击后，相机飞到的位置偏北/偏东 100-300km，需要手动往南/西飞才能看到目标 FOI。

**根因**: `lib/auto-camera.ts` 旧代码将相机设在 FOI 正上方，heading=0（朝北看），pitch=-35°，range=300km → 屏幕中心落在 FOI 北方 ~210km 处（300km × tan(35°) ≈ 210km）。

**修复**:
- 新增 `offsetPositionForHeading()` — 根据 heading 反算偏移，相机向反方向移动 ground track 距离，使 FOI 在屏幕中心
- 新增 `computeMountainHeading()` — 正确分类 E-W (heading=0°) / N-S (heading=270°)
- 新增 `computeRangeForSpan()` — 基于地形 span 自动计算相机高度
- 恢复 `computeCameraFromPolygon()` 动态 range/pitch（盆地/高原/平原俯看）

**Files Modified**:
- `lib/auto-camera.ts` — 完整重写 camera target 计算逻辑

---

## Phase 6 — i18n + China Scope + Geometry Validation

**Date:** 2026-06-09
**Status:** In Progress

### FOI 坐标权威数据修正 (2026-06-11)

**背景**: 29 个地形 × 87 个 FOI 条目的坐标经中国国家地理、自然资源部、国家基础地理信息中心等多源交叉验证，发现 23 处坐标偏差，其中 18 处偏差超过 50km。

**修正详情**:

#### 致命错误 (>50km 偏差)

| 地形 | FOI | 原坐标 | 修正坐标 | 偏差 |
|------|-----|--------|---------|------|
| 祁连山 | 岗什卡雪峰 | 101.47, 37.70 | **101.08, 36.69** | 100km |
| 祁连山 | 团结峰 | 98.70, 38.50 | **康兹依秀 97.72, 38.50** | 300km+ |
| 昆仑山 | 昆仑山口 | 94.00, 36.10 | **94.77, 36.23** | 60km |
| 昆仑山 | 团结峰(公格尔) | 94.99, 36.32 | **公格尔峰 75.25, 37.83** | 完全错误 |
| 阿尔泰山 | 喀纳斯湖 | 87.98, 48.73 | **87.05, 48.73** | 70km |
| 大兴安岭 | 阿尔山火山群 | 119.94, 47.15 | **119.80, 46.20** | 105km |
| 柴达木盆地 | 察尔汗盐湖 | 95.30, 36.80 | **95.10, 36.35** | 55km |
| 内蒙古高原 | 锡林郭勒 | 114.50, 44.00 | **锡林浩特 116.09, 43.95** | 150km |
| 准噶尔盆地 | 艾里克湖 | 86.30, 45.00 | **85.78, 45.93** | 100km |
| 准噶尔盆地 | 古尔班通古特 | 88.00, 45.50 | **86.67, 46.28** | 150km |
| 青藏高原 | 纳木错 | 90.683, 28.933 | **90.73, 31.42** | **275km** |
| 东北平原 | 兴凯湖 | 132.42, 45.00 | **132.73, 45.20** | 37km |
| 东北平原 | 查干湖 | 124.28, 45.25 | **124.49, 45.83** | 70km |
| 东北平原 | 辽河口红海滩 | 122.05, 40.41 | **121.98, 40.95** | 60km |
| 塔里木盆地 | 塔什库尔干 | 75.30, 37.77 | **75.43, 37.77** | 12km |
| 塔里木盆地 | 和田 | 79.92, 37.10 | **79.92, 37.02** | 8km |
| 塔克拉玛干 | 策勒 | 80.78, 37.10 | **79.73, 36.69** | 130km |
| 横断山脉 | 卡瓦格博峰 | 98.85, 28.45 | **98.68, 28.44** | 18km |

#### 轻微修正

| 地形 | FOI | 原值 | 修正值 |
|------|-----|------|--------|
| 秦岭 | 太白山 | 107.76, 3771m | **107.62, 3767m** |
| 秦岭 | 终南山 | 109.05 | **108.99** |
| 云贵高原 | 昆明 | 102.83 | **102.72** |
| 天山 | 博格达峰 | 88.30, 43.80 | **88.25, 43.74** |
| 天山 | 天池 | 88.13, 43.89 | **88.11, 43.87** |
| 帕米尔 | 慕士塔格峰 | 75.00, 38.48 | **75.17, 38.39** |

#### Polygon 修复

| 地形 | 问题 | 修正 |
|------|------|------|
| 横断山脉 | 6 点未闭合，仅纵向一条线 | 16 点闭合多边形 |
| 喜马拉雅山 | 16 点 1D 线，非闭合区域 | 26 点闭合区域 |
| 大兴安岭 | 8 点过度简化，向西/南延伸超出 | 13 点合理形状 |

**数据源**: 中国国家地理、自然资源部国家基础地理信息中心、Natural Earth 10m、Wikidata、Geonames

**Files Modified**:
- `lib/foi-registry.ts` — 全部 FOI 坐标修正 + 新增 9 个地形 FOI（大兴安岭、横断山脉、喜马拉雅山、青藏高原、东北平原、华北平原、长江中下游平原、天山、赛里木湖）
- `features/china-core-features.ts` — cameraGeometry targets 同步修正
- `lib/unified-terrain-registry.ts` — 5 个 terrain 的 FOI 同步修正
- `lib/unified-types.ts` — featureType 新增 `"plain"` 类型
- `lib/camera-compute.ts` — 新增统一 Camera 计算模块

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

### Geometry Validation 阶段完成

- 审计当前 Camera 系统（全部手工参数）
- 确认 5 个样本地形缺少真实 Geometry
- 验证 Natural Earth 数据源（5/5 地形 Polygon 存在）
- 确认 Camera 链路: Terrain → Geometry → FOI → Auto Camera

### Phase B — FOI Validation 启动

- 目标: 为 5 个样本地形建立 3~5 个 FeatureOfInterest
- 验证 FOI → Camera → Cesium 是否正确
- 不再继续研究 GMBA / HydroBASINS 数据源

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
