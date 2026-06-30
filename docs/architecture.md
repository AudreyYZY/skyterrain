# Flight Geography Explorer — 完整架构文档

> 由 [codeatlas](https://github.com/AudreyYZY/codeatlas) 自动生成，基于 tree-sitter 静态索引 (59 files, 1,049 symbols)

---

## 1. 项目概览

**Flight Geography Explorer** — 飞机视角地貌认知系统。用户从飞机舷窗视角认知地球地貌的纪录片式 Web 应用。

### 技术栈: Next.js 16 + React 19 + TypeScript 5 + CesiumJS 1.141 + TailwindCSS 4 + Edge TTS

| 指标 | 值 |
|---|---|
| 源文件 | 59 (.ts/.tsx) |
| 总符号 | 1049 |
| 导入关系 | 247 |
| 调用边 | 1598 |
| 内部依赖 | 153/200 resolved (76%) |
| 索引耗时 | 0.1s |

---

## 2. 架构分层

```
┌─────────────────────────────────────────┐
│  app/     页面 + API Routes             │
│  components/   React UI (17 files)      │
│  lib/      业务逻辑 (26 files)           │
│  features/ 地形数据 (next-gen)           │
│  types/    共享类型 (4 files)            │
│  data/     静态 JSON (35 files)          │
└─────────────────────────────────────────┘
```

### 层间依赖矩阵

| 源层 | → 目标层 | 文件数 |
|---|---|---|
| api/ | → lib/ | 2 |
| app/ | → components/ | 1 |
| components/ | → lib/ | 12 |
| components/ | → types/ | 11 |
| components/ | → features/ | 3 |
| components/ | → components/ | 3 |
| lib/ | → types/ | 11 |
| lib/ | → lib/ | 8 |

---

## 3. 文件规模分布

- **≤50** lines: 19 files
- **51-100** lines: 14 files
- **101-200** lines: 13 files
- **201-500** lines: 9 files
- **501-1000** lines: 1 files
- **1000+** lines: 3 files

### 最大的文件

| Lines | 文件 | 风险 |
|---|---|---|
| 1707 | `components/CesiumMap.tsx` | 🔴 God Component (1,707 lines, 292 symbols) |
| 1183 | `lib/foi-registry.ts` | 🟡 大数据文件 (1,183 lines) |
| 1114 | `components/ExplorerApp.tsx` | 🟡 大型编排器 (1,114 lines) |
| 672 | `features/xinjiang-core-features.ts` | 🟢 |
| 461 | `features/china-core-features.ts` | 🟢 |
| 313 | `components/useSentenceHighlight.ts` | 🟢 |
| 261 | `components/CesiumOverlayLabels.tsx` | 🟢 |
| 255 | `lib/auto-camera.ts` | 🟢 |
| 227 | `lib/cinematic-labels.ts` | 🟢 |
| 217 | `lib/i18n.ts` | 🟢 |

---

## 4. 符号种类

- **variable**: 788
- **function**: 121
- **interface**: 63
- **method**: 47
- **type_alias**: 21
- **arrow_function**: 6
- **class**: 3

---

## 5. 模块耦合度

### 被引用最多的内部模块

| # | 模块 | 角色 |
|---|---|---|
| 16 | `types/terrain.ts` | TerrainPoint 基础类型 |
| 7 | `lib/terrain.ts` | 地形数据 Hub |
| 4 | `types/route.ts` | 航线类型 |
| 4 | `lib/strip-emojis.ts` | 工具 |
| 3 | `types/photo-identify.ts` | 拍照类型 |
| 3 | `features/types.ts` | GeographicFeature 类型 |
| 3 | `lib/routes.ts` | 航线加载 |
| 3 | `lib/i18n.ts` | 国际化 |
| 2 | `types/terrain-visual.ts` |  |
| 2 | `features/china-core-features.ts` |  |
| 2 | `components/CesiumMap.tsx` |  |
| 2 | `lib/speech.ts` |  |
| 2 | `lib/voice-preference.ts` |  |
| 2 | `lib/auto-camera.ts` |  |
| 2 | `lib/foi-registry.ts` |  |

### 调用最多的函数

| 次数 | 函数 |
|---|---|
| 119 | `log()` |
| 61 | `toFixed()` |
| 57 | `map()` |
| 50 | `push()` |
| 44 | `fromDegrees()` |
| 38 | `round()` |
| 35 | `add()` |
| 34 | `useState()` |
| 33 | `filter()` |
| 32 | `trim()` |
| 31 | `requestRender()` |
| 27 | `useCallback()` |
| 26 | `join()` |
| 26 | `resolve()` |
| 26 | `toDegrees()` |
| 25 | `withAlpha()` |
| 24 | `find()` |
| 21 | `t()` |
| 20 | `replace()` |
| 19 | `fromBytes()` |

---

## 6. 核心模块详解

### `components/ExplorerApp.tsx`
**应用主编排器** — 1114 lines
- 管理全局状态 (activeTerrain, activeRoute, isSpeaking, isFlyover, appMode)
- 协调 CesiumMap ↔ NarrationPanel ↔ FlightControls ↔ RouteControls 的数据流
- ALL_FEATURES: 统一 TerrainPoint (xinjiang) + GeographicFeature (china) 的 sidebar
- 直接导入 18 个内部模块 + 7 个自身子组件

| L# | Type | Name |
|---|---|---|
| 49 | type_alias | `SidebarCategory` |
| 67 | function | `normalizeType` |
| 134 | type_alias | `AppMode` |
| 161 | 📤 function | `ExplorerApp` |
| 162 | 📤 variable | `mapRef` |
| 163 | 📤 variable | `[mode, setMode]` |
| 164 | 📤 variable | `[activeTerrain, setActiveTerrain]` |
| 165 | 📤 variable | `[displayCards, setDisplayCards]` |
| 166 | 📤 variable | `[lesson, setLesson]` |
| 167 | 📤 variable | `[error, setError]` |
| 168 | 📤 variable | `[isSpeaking, setIsSpeaking]` |
| 169 | 📤 variable | `[terrainMode, setTerrainMode]` |
| ... | ... | (+72 more) |

**消费方**:
- `app/page.tsx` → ExplorerApp

### `components/CesiumMap.tsx`
**Cesium 3D 渲染引擎** — 1707 lines
- 整个项目唯一的 3D 渲染入口 (1,707 lines, 292 symbols)
- 导出 CesiumMapHandle: ExplorerApp 通过 ref 控制所有 3D 操作
- 6 大子系统: Camera / Flight / Geometry / Boundary / Debug / Interaction
- init() → waitForDimensions() → createWorldTerrainAsync() → flyTo() → 事件绑定

| L# | Type | Name |
|---|---|---|
| 23 | 📤 interface | `CameraState` |
| 34 | 📤 interface | `CesiumMapHandle` |
| 52 | 📤 interface | `RouteFlyCallbacks` |
| 64 | 📤 type_alias | `TerrainMode` |
| 66 | interface | `CesiumMapProps` |
| 98 | function | `heightCacheKey` |
| 102 | function | `sleep` |
| 107 | function | `quarticEaseOut` |
| 112 | function | `smoothStep` |
| 122 | function | `waitForTilesSettled` |
| 161 | function | `viewHeightForTerrain` |
| 172 | function | `makeDebugMarkerImage` |
| ... | ... | (+30 more) |

**消费方**:
- `components/CesiumOverlayLabels.tsx` → CesiumMapHandle
- `components/ExplorerApp.tsx` → CesiumMap, CesiumMapHandle, TerrainMode

### `features/types.ts`
**Next-gen 数据模型 — GeographicFeature** — 211 lines
- 19 个导出符号: FeatureType → Geometry → CameraViewpoint → StoryNode → StoryDefinition
- MaturityLevel 0-4: Label → Identity → Hover → Focus → Story Ready
- 4 种 Geometry: LineGeometry, PolygonGeometry, PointGeometry, RidgeCorridorGeometry
- 被 3 个文件消费 (全是 3D 渲染链): CesiumMap, CesiumOverlayLabels, ExplorerApp

| L# | Type | Name |
|---|---|---|
| 16 | 📤 type_alias | `FeatureType` |
| 27 | 📤 type_alias | `Position` |
| 30 | 📤 type_alias | `Position3D` |
| 33 | 📤 interface | `LineGeometry` |
| 39 | 📤 interface | `PolygonGeometry` |
| 45 | 📤 interface | `PointGeometry` |
| 51 | 📤 interface | `RidgeCorridorGeometry` |
| 60 | 📤 type_alias | `Geometry` |
| 67 | 📤 interface | `CameraViewpoint` |
| 79 | 📤 interface | `StoryNode` |
| 93 | 📤 type_alias | `StoryPathType` |
| 98 | 📤 type_alias | `LabelType` |
| ... | ... | (+7 more) |

**消费方**:
- `components/CesiumMap.tsx` → GeographicFeature
- `components/CesiumOverlayLabels.tsx` → GeographicFeature
- `components/ExplorerApp.tsx` → GeographicFeature

### `types/terrain.ts`
**Legacy 数据模型 — TerrainPoint** — 76 lines
- 6 个导出: TerrainPoint, TerrainLesson, TerrainCards, TerrainKnowledge, TerrainCategory, TerrainType
- 被 16 个文件引用 — 是项目中使用最广的类型模块
- 与 GeographicFeature 平行共存，迁移方向: TerrainPoint → GeographicFeature

| L# | Type | Name |
|---|---|---|
| 1 | 📤 type_alias | `TerrainCategory` |
| 13 | 📤 type_alias | `TerrainType` |
| 26 | 📤 interface | `TerrainKnowledge` |
| 43 | 📤 interface | `TerrainCards` |
| 50 | 📤 interface | `TerrainLesson` |
| 58 | 📤 interface | `TerrainPoint` |

**消费方**:
- `components/CesiumMap.tsx` → TerrainPoint
- `components/CesiumOverlayLabels.tsx` → TerrainPoint
- `components/ExplorerApp.tsx` → TerrainCards, TerrainLesson, TerrainPoint
- `components/FlightControls.tsx` → TerrainPoint
- `components/NarrationPanel.tsx` → TerrainCards, TerrainKnowledge, TerrainLesson
- `components/SourceAttribution.tsx` → TerrainKnowledge
- `components/StructuredLesson.tsx` → TerrainLesson
- `components/TerrainGlanceCards.tsx` → TerrainCards
- `lib/city-lessons.ts` → TerrainCards, TerrainLesson
- `lib/lesson.ts` → TerrainLesson, TerrainPoint
- `lib/mimo.ts` → TerrainLesson, TerrainPoint
- `lib/narration-engine.ts` → TerrainPoint
- `lib/routes.ts` → TerrainPoint
- `lib/terrain-categories.ts` → TerrainCategory
- `lib/terrain-hierarchy.ts` → TerrainCategory, TerrainPoint
- `lib/terrain.ts` → TerrainCategory, TerrainPoint

### `lib/terrain.ts`
**地形数据 Hub** — 126 lines
- 加载 34 个 data/*.json → RAW_TERRAINS → TERRAINS (已排序+分类)
- 3 个导出函数: getAllTerrains(), getTerrainsByCategory(), getTerrainById()
- 被 7 个文件消费 (ExplorerApp, FlightControls, routes, mimo-photo, photo-fallback, terrain-hierarchy, narration API)

| L# | Type | Name |
|---|---|---|
| 87 | 📤 interface | `TerrainCategoryGroup` |
| 93 | 📤 function | `getAllTerrains` |
| 111 | 📤 function | `getTerrainsByCategory` |
| 122 | 📤 variable | `TERRAIN_CATEGORY_GROUPS` |
| 124 | 📤 function | `getTerrainById` |

**消费方**:
- `app/api/narration/route.ts` → getTerrainById
- `components/ExplorerApp.tsx` → getAllTerrains, getTerrainsByCategory
- `components/FlightControls.tsx` → TerrainCategoryGroup
- `lib/mimo-photo.ts` → getAllTerrains
- `lib/photo-fallback.ts` → getAllTerrains, getTerrainById
- `lib/routes.ts` → getTerrainById
- `lib/terrain-hierarchy.ts` → TerrainCategoryGroup

### `lib/foi-registry.ts`
**FOI 注册表** — 1183 lines
- 1,183 行 — 项目第二大文件。每个地形定义 primary FOI + secondary FOIs + geometryCoords
- 导出: TerrainFOI 接口, TERRAIN_FOIS 静态数据, getTerrainFOI()
- 被 CesiumMap 和 ExplorerApp 消费

| L# | Type | Name |
|---|---|---|
| 10 | 📤 interface | `TerrainFOI` |
| 1156 | 📤 variable | `TERRAIN_FOIS` |
| 1181 | 📤 function | `getTerrainFOI` |

**消费方**:
- `components/CesiumMap.tsx` → getTerrainFOI
- `components/ExplorerApp.tsx` → getTerrainFOI

### `lib/auto-camera.ts`
**Camera 自动推导引擎** — 255 lines
- 8 个导出函数: extractPolygonCoords, extractLineCoords, computeCameraFromPolygon, computeCameraFromRidge
- 核心调用链: computeCameraFromRidge → computeBBox → computeMountainHeading → computeRangeForSpan → clamp → offsetPositionForHeading → bearingDeg
- 被 CesiumMap (计算) 和 ExplorerApp (调试) 消费

| L# | Type | Name |
|---|---|---|
| 24 | 📤 interface | `CameraParams` |
| 31 | 📤 interface | `FOI` |
| 40 | function | `computeBBox` |
| 62 | 📤 function | `extractPolygonCoords` |
| 67 | 📤 variable | `maxArea` |
| 68 | 📤 variable | `best` |
| 70 | 📤 variable | `coords` |
| 71 | 📤 variable | `bbox` |
| 72 | 📤 variable | `area` |
| 84 | 📤 function | `extractLineCoords` |
| 94 | function | `bearingDeg` |
| 122 | function | `offsetPositionForHeading` |
| ... | ... | (+17 more) |

**消费方**:
- `components/CesiumMap.tsx` → computeCameraFromPolygon, computeCameraFromRidge
- `components/ExplorerApp.tsx` → computeCameraFromPolygon, computeCameraFromRidge, extractPolygonCoords, extractLineCoords, CameraParams

### `lib/speech.ts`
**TTS 语音合成** — 203 lines
- 12 个导出: speakAndWait, stopSpeech, speak, getCurrentAudio, getCurrentWordBoundaries, warmupSpeechVoices
- WordBoundary + SpeakResult 接口定义
- speakAndWait() 被 ExplorerApp 调用 6 次

| L# | Type | Name |
|---|---|---|
| 4 | 📤 interface | `WordBoundary` |
| 10 | 📤 interface | `SpeakResult` |
| 19 | 📤 function | `getCurrentAudio` |
| 24 | 📤 function | `getCurrentWordBoundaries` |
| 29 | 📤 function | `estimateSpeechDurationSec` |
| 33 | 📤 variable | `chars` |
| 38 | function | `isSSML` |
| 43 | function | `stripSSML` |
| 54 | function | `pickBrowserChineseVoice` |
| 79 | function | `speakBrowserAndWait` |
| 100 | function | `speakEdgeAndWait` |
| 154 | 📤 function | `stopSpeech` |
| ... | ... | (+5 more) |

**消费方**:
- `components/ExplorerApp.tsx` → speakAndWait, stopSpeech, warmupSpeechVoices, getCurrentAudio, getCurrentWordBoundaries, WordBoundary
- `components/useSentenceHighlight.ts` → WordBoundary

### `lib/narration-queue.ts`
**解说优先队列** — 176 lines
- NarrationQueue class: enqueue/playImmediate/cancel/processNext/clearQueue
- enqueue → processNext → speak → 自调用 processNext 形成链式处理

| L# | Type | Name |
|---|---|---|
| 6 | 📤 type_alias | `NarrationPriority` |
| 8 | interface | `NarrationTask` |
| 18 | interface | `NarrationQueueOptions` |
| 30 | 📤 class | `NarrationQueue` |
| 39 | 📤 method | `constructor` |
| 44 | 📤 method | `register` |
| 53 | 📤 method | `enqueue` |
| 62 | 📤 variable | `task` |
| 84 | 📤 method | `playImmediate` |
| 105 | 📤 method | `processNext` |
| 108 | 📤 variable | `task` |
| 140 | 📤 method | `cancel` |
| ... | ... | (+5 more) |

**消费方**:
- `components/ExplorerApp.tsx` → narrationQueue

### `lib/cinematic-labels.ts`
**电影级标签系统** — 227 lines
- CinematicLabelManager class: 12 个方法
- LabelLayer + CinematicLabel 体系: Layer 创建 → Label 添加 → Animation → Visibility

| L# | Type | Name |
|---|---|---|
| 12 | 📤 type_alias | `LabelAnimation` |
| 13 | 📤 type_alias | `LabelVisibility` |
| 15 | 📤 interface | `CinematicLabel` |
| 49 | 📤 interface | `LabelLayer` |
| 63 | 📤 class | `CinematicLabelManager` |
| 69 | 📤 method | `createLayer` |
| 70 | 📤 variable | `layer` |
| 76 | 📤 method | `addLabel` |
| 77 | 📤 variable | `layer` |
| 86 | 📤 method | `removeLayer` |
| 91 | 📤 method | `removeLabel` |
| 92 | 📤 variable | `layer` |
| ... | ... | (+12 more) |

**消费方**:
- `components/CesiumOverlayLabels.tsx` → labelManager, CinematicLabel
- `components/ExplorerApp.tsx` → labelManager, createTerrainLabel

### `lib/routes.ts`
**航线系统** — 56 lines
- ROUTES 静态数据 (3 条航线 JSON) → ResolvedWaypoint 接口
- resolveRouteWaypoints() → resolveWaypoint() → getTerrainById()

| L# | Type | Name |
|---|---|---|
| 14 | 📤 interface | `ResolvedWaypoint` |
| 22 | 📤 function | `getAllRoutes` |
| 26 | 📤 function | `getRouteById` |
| 30 | 📤 function | `resolveRouteWaypoints` |
| 36 | function | `resolveWaypoint` |

**消费方**:
- `components/CesiumMap.tsx` → resolveRouteWaypoints, ResolvedWaypoint
- `components/ExplorerApp.tsx` → getAllRoutes, ResolvedWaypoint
- `components/RouteControls.tsx` → resolveRouteWaypoints

### `lib/regions.ts`
**区域管理** — 93 lines
- Region interface + REGIONS 静态数据 + activeRegionId 全局状态
- setActiveRegion/getActiveRegion/getAvailableRegions/hasTerrainData

| L# | Type | Name |
|---|---|---|
| 8 | 📤 interface | `RegionCenter` |
| 19 | 📤 interface | `Region` |
| 43 | 📤 variable | `REGIONS` |
| 73 | 📤 variable | `activeRegionId` |
| 76 | 📤 function | `setActiveRegion` |
| 81 | 📤 function | `getActiveRegion` |
| 86 | 📤 function | `getAvailableRegions` |
| 91 | 📤 function | `hasTerrainData` |

**消费方**:
- `components/ExplorerApp.tsx` → REGIONS, getActiveRegion, setActiveRegion, Region
- `components/RegionSelector.tsx` → REGIONS, Region, hasTerrainData

### `lib/terrain-hierarchy.ts`
**地形层级树** — 86 lines
- ProvinceNode → HierarchyNode → buildTerrainHierarchy()
- 从 TerrainPoint[] + CategoryGroup[] 构建层级树 → FlightControls 渲染

| L# | Type | Name |
|---|---|---|
| 4 | 📤 interface | `ProvinceNode` |
| 11 | 📤 interface | `HierarchyNode` |
| 36 | 📤 function | `buildTerrainHierarchy` |
| 41 | 📤 variable | `provinceMap` |
| 44 | 📤 variable | `province` |
| 49 | 📤 variable | `result` |
| 52 | 📤 variable | `provinceDef` |
| 59 | 📤 variable | `provinceCategoryGroups` |
| 63 | 📤 variable | `r` |

**消费方**:
- `components/FlightControls.tsx` → buildTerrainHierarchy, HierarchyNode

### `lib/i18n.ts`
**国际化** — 217 lines
- UI_TEXTS (中英 UI) + TERRAIN_NAMES + TTS_VOICE_IDS
- getTerrainName() / t() / getTTSVoice()

| L# | Type | Name |
|---|---|---|
| 10 | 📤 type_alias | `Language` |
| 145 | 📤 variable | `TERRAIN_NAMES` |
| 199 | 📤 function | `getTerrainName` |
| 204 | 📤 function | `t` |
| 209 | 📤 variable | `TTS_VOICE_IDS` |
| 215 | 📤 function | `getTTSVoice` |

**消费方**:
- `components/ExplorerApp.tsx` → t, getTerrainName, Language
- `components/NarrationPanel.tsx` → t, Language
- `lib/speech.ts` → getTTSVoice, Language

### `lib/mimo.ts`
**AI 解说生成** — 82 lines
- buildPrompt() → OpenAI API → parseLesson() → TerrainLesson
- 被 api/narration/route.ts 调用

| L# | Type | Name |
|---|---|---|
| 5 | function | `buildPrompt` |
| 40 | function | `parseLesson` |
| 56 | 📤 function | `generateLesson` |
| 59 | 📤 variable | `apiKey` |
| 60 | 📤 variable | `baseURL` |
| 66 | 📤 variable | `client` |
| 68 | 📤 variable | `completion` |
| 75 | 📤 variable | `content` |

**消费方**:
- `app/api/narration/route.ts` → generateLesson

### `lib/mimo-photo.ts`
**AI 拍照识别** — 168 lines
- buildCatalog() → buildTextPrompt() → callTextModel() → parseResult()
- fallback: photo-fallback.ts (规则匹配)

| L# | Type | Name |
|---|---|---|
| 12 | function | `buildCatalog` |
| 21 | function | `buildTextPrompt` |
| 39 | function | `parseResult` |
| 59 | function | `extractContent` |
| 67 | function | `callTextModel` |
| 86 | function | `callVisionModel` |
| 114 | 📤 function | `identifyPhotoFromWindow` |
| 118 | 📤 variable | `catalogGuess` |
| 120 | 📤 variable | `apiKey` |
| 121 | 📤 variable | `baseURL` |
| 127 | 📤 variable | `client` |
| 128 | 📤 variable | `model` |
| ... | ... | (+4 more) |

**消费方**:
- `app/api/photo-identify/route.ts` → identifyPhotoFromWindow

---

## 7. 双数据模型

| | TerrainPoint | GeographicFeature |
|---|---|---|
| 定义 | `types/terrain.ts` | `features/types.ts` |
| 数据源 | 34 x `data/*.json` | `features/china-core-features.ts` (461 lines) + `features/xinjiang-core-features.ts` (672 lines) |
| 成熟度 | 无 | MaturityLevel 0-4 |
| Story | lesson.cards + lesson.facts | StoryDefinition (seeing/formation/history/observation) |
| 引用方 | 16 files | 3 files (渲染链 only) |
| 状态 | **Legacy** | **Next-gen (迁移目标)** |

---

## 8. 关键数据流管线

### Camera 推导
```
GeographicFeature.geometry  →  foi-registry/getTerrainFOI()  →  auto-camera.ts
  extractPolygonCoords → computeBBox → computeCameraFromRidge
    ├─ computeMountainHeading
    ├─ computeRangeForSpan → min()
    ├─ clamp → max()/min()
    └─ offsetPositionForHeading → tan/abs/asin/sin/cos/atan2
  → CameraParams {target, heading, pitch, range}
  → CesiumMap.cameraAt() → Cesium.Camera.flyTo()
```

**cameraAt 的直接调用者**:
- flyToTerrain() in `components/CesiumMap.tsx`
- flyToTerrainAndWait() in `components/CesiumMap.tsx`
- flyLeg() in `components/CesiumMap.tsx`

### 解说管线
```
TerrainPoint (34 JSON)
  ├─ narration-engine.ts   → generateNarrationFromTerrainData / generateFlyoverNarration / generateRouteNarration
  ├─ lesson.ts             → lessonToSpeech / lessonToSSML / terrainToSpeech
  ├─ mimo.ts (OpenAI)      → generateLesson → api/narration/route.ts
  └─ speech.ts             → speakAndWait() → Edge TTS / 浏览器回退
       └─ useSentenceHighlight → WordBoundary 逐词高亮 → StructuredLesson
```

### 拍照识别管线
```
PhotoModePanel → compress-image → api/photo-identify → mimo-photo.ts
  ├─ buildCatalog → buildTextPrompt → callTextModel (OpenAI Vision) → parseResult
  └─ (AI fail) → photo-fallback → resultFromTerrain / guessPhotoFromHint
```

### 航线飞行管线
```
ExplorerApp → CesiumMap.flyRoute(route, callbacks)
  └─ resolveRouteWaypoints → for each waypoint → flyLeg(from, to)
       ├─ cameraAt(dest) → sampleTerrainMostDetailed
       ├─ legDurationSec → flyTo → waitForTilesSettled
       └─ preloadRoute → 预加载地形 tiles
```

---

## 9. 初始生命周期

**CesiumMap.init() 调用链**:
- `log()` (34x)
- `fromDegrees()` (20x)
- `add()` (18x)
- `map()` (15x)
- `requestRender()` (14x)
- `toFixed()` (14x)
- `withAlpha()` (14x)
- `round()` (13x)
- `fromBytes()` (10x)
- `toDegrees()` (9x)
- `filter()` (7x)
- `push()` (7x)
- `find()` (5x)
- `getValue()` (5x)
- `forEach()` (4x)

**流程**: mount → waitForDimensions → createWorldTerrainAsync → fromAssetId → addImageryProvider → flyTo(globalView) → 事件绑定 → Natural Earth 边界加载

---

## 10. Architecture Smells

| Severity | Smell | Detail |
|---|---|---|
| 🔴 | God Component | CesiumMap.tsx: 1,707 lines, 292 symbols, ~40 methods |
| 🟡 | Duplicate Code | splitSentences() in StructuredLesson.tsx + useSentenceHighlight.ts |
| 🟡 | Dual Data Model | TerrainPoint (16 consumers) vs GeographicFeature (3 consumers) |
| 🟡 | Large Static Data | foi-registry.ts (1,183), i18n.ts (217): inline dictionaries |
| 🟡 | Leaf Module | `lib/terrain-boundaries.ts` (179 lines, no internal consumers) |
| 🟡 | Leaf Module | `components/TerrainPhotoCarousel.tsx` (134 lines, no internal consumers) |
| 🟡 | Leaf Module | `features/feature-schema.ts` (88 lines, no internal consumers) |
| 🟡 | Leaf Module | `next.config.ts` (55 lines, no internal consumers) |
| 🟡 | Leaf Module | `features/feature-types.ts` (51 lines, no internal consumers) |
| 🟡 | Leaf Module | `next-env.d.ts` (6 lines, no internal consumers) |
| 🟡 | Leaf Module | `components/TerrainSidebar.tsx` (6 lines, no internal consumers) |
| 🟢 | Unused Export | `class` NarrationQueue in `lib/narration-queue.ts` |
| 🟢 | Unused Export | `class` CinematicLabelManager in `lib/cinematic-labels.ts` |
| 🟢 | Unused Export | `function` POST in `app/api/narration/route.ts` |
| 🟢 | Unused Export | `function` POST in `app/api/tts/route.ts` |
| 🟢 | Unused Export | `function` POST in `app/api/photo-identify/route.ts` |

---

## 11. 完整模块索引

### components (17)
- **CesiumMap.tsx** (1707 lines)
- **ExplorerApp.tsx** (1114 lines)
- **useSentenceHighlight.ts** (313 lines)
- **CesiumOverlayLabels.tsx** (261 lines)
- **FlightControls.tsx** (205 lines)
- **PhotoModePanel.tsx** (183 lines)
- **NarrationPanel.tsx** (172 lines)
- **ResizablePanel.tsx** (157 lines)
- **StructuredLesson.tsx** (139 lines)
- **TerrainPhotoCarousel.tsx** (134 lines)
- **RegionSelector.tsx** (110 lines)
- **RouteControls.tsx** (70 lines)
- **VoiceSelector.tsx** (38 lines)
- **SourceAttribution.tsx** (19 lines)
- **TerrainGlanceCards.tsx** (15 lines)
- **TerrainSidebar.tsx** (6 lines)

### lib (26)
- **foi-registry.ts** (1183 lines)
- **auto-camera.ts** (255 lines)
- **cinematic-labels.ts** (227 lines)
- **i18n.ts** (217 lines)
- **speech.ts** (203 lines)
- **terrain-boundaries.ts** (179 lines)
- **narration-queue.ts** (176 lines)
- **mimo-photo.ts** (168 lines)
- **terrain.ts** (126 lines)
- **i18n-stories.ts** (113 lines)
- **photo-fallback.ts** (107 lines)
- **regions.ts** (93 lines)
- **terrain-hierarchy.ts** (86 lines)
- **narration-engine.ts** (84 lines)
- **mimo.ts** (82 lines)
- **terrain-label-registry.ts** (74 lines)
- **narration-manager.ts** (72 lines)
- **terrain-label-theme.ts** (66 lines)
- **city-lessons.ts** (61 lines)
- **routes.ts** (56 lines)
- **lesson.ts** (45 lines)
- **geo.ts** (34 lines)
- **compress-image.ts** (31 lines)
- **terrain-visuals.ts** (28 lines)
- **terrain-categories.ts** (24 lines)
- **voice-preference.ts** (23 lines)
- **strip-emojis.ts** (8 lines)

### features (5)
- **xinjiang-core-features.ts** (672 lines)
- **china-core-features.ts** (461 lines)
- **types.ts** (211 lines)
- **feature-schema.ts** (88 lines)
- **feature-types.ts** (51 lines)

### types (4)
- **terrain.ts** (76 lines)
- **route.ts** (33 lines)
- **terrain-visual.ts** (14 lines)
- **photo-identify.ts** (7 lines)

### app (5)
- **route.ts** (145 lines)
- **route.ts** (40 lines)
- **layout.tsx** (34 lines)
- **route.ts** (31 lines)
- **page.tsx** (5 lines)

---

> 本文档由 [codeatlas](https://github.com/AudreyYZY/codeatlas) v0.2.0 自动生成 · 2026-06-30 · 更新: `codeatlas index . && python3.11 tools/generate_arch_doc.py`
