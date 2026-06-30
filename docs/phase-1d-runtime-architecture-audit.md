# Phase 1D-A0: Runtime Architecture Audit

> 目标：回答"点击某个地形之后，到底是哪份数据决定了最终画面？"
> 日期：2026-06-19

---

## 一、原始数据层（Data Sources）

### 1. `data/*.json` — 新疆地形数据 (32 files)

| 属性 | 值 |
|------|---|
| 坐标 | `lat`, `lon` (各 1 个) |
| 内容 | `lesson` (seeing/formation/history/observation), `knowledge`, `cards`, `flyoverCue` |
| 分类 | `category` (mountain_range/lake/desert/basin/river/city/scenic/oasis) |
| 权威度 | ⚠️ 仅新疆 32 个地形有，全国 15 个没有 |
| 状态 | 🟢 在用 — `handleSelectTerrain()` 的输入源 |
| 坐标精度 | ✅ 手动校准过，基本正确 |

**覆盖地形 (32个)**: 天山、昆仑山、阿尔泰山、帕米尔、塔克拉玛干、赛里木湖、准噶尔盆地、塔里木盆地、博斯腾湖、喀纳斯、天池、博格达、慕士塔格、火焰山、和田、喀什、库车、纳拉提、巴音布鲁克、巴楚、麦盖提、额尔齐斯河、塔里木河、 Lop Nur、吐鲁番盆地、吐鲁番市、伊犁河谷、古尔班通古特、卡拉昆仑、艾比湖

**不在 features 文件中的 24 个**: 博斯腾湖、喀纳斯、天池、博格达、慕士塔格、火焰山、和田、喀什、库车、纳拉提、巴音布鲁克、巴楚、麦盖提、额尔齐斯河、塔里木河、Lop Nur、吐鲁番盆地、吐鲁番市、伊犁河谷、古尔班通古特、卡拉昆仑、艾比湖、和田、喀什 → **只有 JSON，无法通过 Feature 路径选择**

### 2. `features/xinjiang-core-features.ts` — 新疆 8 个 GeographicFeature

| 属性 | 值 |
|------|---|
| 坐标 | `identityGeometry` (LineString/Polygon), `hoverGeometry` (RidgeCorridor/Polygon), `cameraGeometry` (target + heading/pitch/range) |
| 内容 | `story` (4 sections), `label`, `interaction`, `visibility`, `maturityLevel: 2` |
| 权威度 | ⚠️ geometry 是手工估算，不是 GIS 数据 |
| 状态 | 🟢 在用 — 地图渲染 (maturityLevel >= 2) + `debugBoundaries()` |
| 坐标精度 | ⚠️ 手工估算，约 5-15km 偏差 |

**8 个地形**: 天山、昆仑山、阿尔泰山、准噶尔盆地、塔里木盆地、帕米尔、塔克拉玛干、赛里木湖

### 3. `features/china-core-features.ts` — 全国 15 个 GeographicFeature

| 属性 | 值 |
|------|---|
| 坐标 | `cameraGeometry` (target + heading/pitch/range) — **唯一的几何数据** |
| 内容 | `story` (4 sections), `label`, `interaction`, `visibility`, `maturityLevel: 1` |
| 权威度 | ❌ **无 geometry，只有 cameraGeometry** |
| 状态 | 🟢 在用 — `handleSelectFeature()` 的输入源 |
| 坐标精度 | ⚠️ 手写，约 10-50km 偏差 |

**15 个地形**: 秦岭、祁连山、太行山、大兴安岭、横断山脉、喜马拉雅山、青藏高原、黄土高原、内蒙古高原、云贵高原、四川盆地、柴达木盆地、东北平原、华北平原、长江中下游平原

### 4. `features/types.ts` — GeographicFeature 类型定义

| 属性 | 值 |
|------|---|
| 定义 | 4 种 Geometry 类型 (LineString/Polygon/RidgeCorridor/Point) + CameraViewpoint + StoryNode + IdentityDefinition + InteractionDefinition + StoryDefinition |
| 权威度 | ✅ 类型定义，无数据 |
| 状态 | 🟢 在用 — 被多个文件 import |
| 废弃计划 | 合并到 TerrainFeatureV2 的 type 定义 |

### 5. `features/feature-schema.ts` — Feature 校验器

| 属性 | 值 |
|------|---|
| 定义 | `validateFeature()` 检查 maturityLevel 对应的 geometry 完整性 |
| 权威度 | ℹ️ 工具代码，无数据 |
| 状态 | 🟡 几乎不用 — 无人调用，只在开发时手动跑 |
| 废弃计划 | 迁移完成后删除 |

### 6. `lib/foi-registry.ts` — FeatureOfInterest 注册表

| 属性 | 值 |
|------|---|
| 坐标 | `primary` (lon/lat) + `secondary[]` (lon/lat) + `geometryCoords` ([lon,lat][]) |
| 内容 | terrainId, terrainName, featureType, FOI 描述 |
| 权威度 | ⚠️ geometryCoords 是手绘简化 polygon (6~29 个点) |
| 状态 | 🟢 在用 — `handleSelectFeature()` 的 Camera 首选路径 |
| 坐标精度 | ⚠️ primary 经过校准(接近正确), geometryCoords 是简化版 |

**覆盖地形 (23个)**: 秦岭、祁连山、四川盆地、柴达木盆地、云贵高原、阿尔泰山、内蒙古高原、准噶尔盆地、昆仑山、黄土高原、帕米尔、太行山、塔克拉玛干、塔里木盆地、大兴安岭、横断山脉、喜马拉雅、青藏高原、东北平原、华北平原、长江中下游平原、天山、赛里木湖

**不在 FOI 中的 Feature**: 无 — 所有 15 个 China Feature 都有 FOI 条目

### 7. `lib/auto-camera.ts` — Camera 计算引擎

| 属性 | 值 |
|------|---|
| 输入 | `geometryCoords` + `primary FOI` |
| 输出 | `CameraParams { target, heading, pitch, range }` |
| 权威度 | ✅ 算法本身是正确的，但输入数据质量决定输出 |
| 状态 | 🟢 在用 — `handleSelectFeature()` + `debugBoundaries()` |
| 废弃计划 | 重写为 `MountainCamera/PlateauCamera/BasinCamera/PlainCamera` |

**核心函数**:
- `computeCameraFromRidge(ridgeCoords, primaryFOI)` → 山脉
- `computeCameraFromPolygon(polygonCoords, primaryFOI)` → 盆地/高原
- `offsetPositionForHeading(foiLon, foiLat, heading, pitch, range)` → 偏移计算
- `computeRangeForSpan(spanKm)` → 距离计算
- `computeMountainHeading(bbox)` → 走向判断

### 8. `lib/terrain-label-registry.ts` — 地图标签注册表

| 属性 | 值 |
|------|---|
| 坐标 | `lat`, `lon` (各 1 个) |
| 内容 | name, importance, category, rotation |
| 权威度 | ⚠️ lat/lon 来源混杂 (有的从 JSON, 有的从 cameraGeometry, 有的从 FOI) |
| 状态 | 🟢 在用 — `ExplorerApp` 初始化时注册到 `labelManager` |
| 坐标精度 | ⚠️ 约 5-20km 偏差 |

**覆盖地形 (30个)**: 2 个 Continental + 15 个 National + 7 个 Regional + 6 个 POI

### 9. `lib/terrain-label-theme.ts` — 标签视觉主题

| 属性 | 值 |
|------|---|
| 定义 | `ThemeToken { fontScale, fontWeight, letterSpacing, minZoom, maxZoom }` |
| 权威度 | ✅ 纯视觉参数，无地理数据 |
| 状态 | 🟢 在用 |
| 废弃计划 | 保留 — 与数据模型无关 |

### 10. `lib/terrain.ts` — 新疆地形加载器

| 属性 | 值 |
|------|---|
| 输入 | 32 个 `data/*.json` |
| 输出 | `TerrainPoint[]` (合并 category) |
| 权威度 | ✅ 新疆 32 个地形的运行时入口 |
| 状态 | 🟢 在用 — `handleSelectTerrain()` 的输入源 |
| 废弃计划 | 合并到 TerrainFeatureV2 |

### 11. `data/gis/exports/*.geojson` — 真实 GIS 边界

| 属性 | 值 |
|------|---|
| 文件数 | 13 个 |
| 内容 | Natural Earth 10m 简化的 Polygon/MultiPolygon |
| 权威度 | ✅ 最可靠的边界数据 |
| 状态 | 🟡 部分在用 — 仅在 `CesiumMap` 中作为叠加线渲染 |
| 覆盖地形 | 天山、昆仑山、阿尔泰山、准噶尔盆地、塔里木盆地、塔克拉玛干、帕米尔、秦岭、祁连山、太行山、黄土高原、四川盆地、内蒙古高原 |

**缺失 GeoJSON 的 10 个 Feature**: 喜马拉雅山、横断山脉、大兴安岭、青藏高原、云贵高原、柴达木盆地、东北平原、华北平原、长江中下游平原、天山(新疆版)

---

## 二、运行时 Registry 层 (Data Aggregation)

### 统一注册表 `ALL_FEATURES` (ExplorerApp.tsx:91-108)

```
ALL_FEATURES = [
  // 来自 data/*.json (新疆 32 个)
  ...allTerrains.map(t => ({ id, name, type, source: "xinjiang", terrain: t, feature: null })),
  // 来自 china-core-features.ts (全国 15 个)
  ...CHINA_CORE_FEATURES.map(f => ({ id, name, type, source: "china", terrain: null, feature: f })),
]
```

**关键发现**: 同一地形可能出现在两边！
- 天山/昆仑山/阿尔泰山/帕米尔/塔克拉玛干/赛里木湖/准噶尔盆地/塔里木盆地 → 既有 `data/*.json` 又有 `features/*.ts`
- 但它们通过不同的 source 路径进入系统，使用完全不同的坐标

### 侧边栏点击分流 (ExplorerApp.tsx:829-834)

```
点击地形 → source === "xinjiang" → handleSelectTerrain(terrain: TerrainPoint)
         → source === "china"   → handleSelectFeature(feature: GeographicFeature)
```

**这就是"两条飞行路径"的根源** — 同一座山(如天山)，如果从"新疆"类别点进去走路径 A，如果从"山脉"类别点进去走路径 B，会飞到不同的位置。

### Registry 关系图

```
                    ┌─────────────────────────────┐
                    │     ALL_FEATURES (unified)    │
                    │  ExplorerApp.tsx:91-108       │
                    ├─────────────────────────────┤
                    │ source:"xinjiang" → terrain  │
                    │ source:"china"    → feature  │
                    └────────┬────────────────────┘
                             │
            ┌────────────────┼────────────────┐
            ▼                ▼                ▼
     TerrainPoint      GeographicFeature   TerrainFOI
     (from JSON)      (from features.ts)  (from foi-registry)
            │                │                │
            ▼                ▼                ▼
     lat/lon        cameraGeometry    primary.lon/lat
     category       heading/pitch     geometryCoords[]
     lesson         story             terrainId
     cards          label             featureType
     knowledge      interaction
                    maturityLevel
```

---

## 三、Camera 决策层 (Call Chain Audit)

### 路径 A: `handleSelectTerrain()` (新疆地形, TerrainPoint)

```
ExplorerApp.handleSelectTerrain(terrain: TerrainPoint)
  │
  ├─ labelManager.setFocusedTerrain(terrain.id)
  │
  ├─ mapRef.flyToTerrainAndWait(terrain)
  │   │
  │   ├─ CesiumMap.flyToTerrainAndWait()
  │   │   │
  │   │   ├─ cameraAt(
  │   │   │   lat: terrain.lat,          ← 来自 data/*.json
  │   │   │   lon: terrain.lon,          ← 来自 data/*.json
  │   │   │   heightAboveGround: viewHeightForTerrain(terrain, terrain.cameraHeight),
  │   │   │                              ← 来自 TERRAIN_VIEW_HEIGHTS[terrain.category]
  │   │   │   fallbackElevation: terrain.elevation
  │   │   │ )
  │   │   │
  │   │   └─ viewer.camera.flyTo({
  │   │         destination: cameraAt result,
  │   │         orientation: {
  │   │           heading: 0,              ← 固定 0°
  │   │           pitch: -42°,             ← 固定 WINDOW_PITCH_DEG
  │   │           roll: 0.8°
  │   │         }
  │   │       })
  │   │
  │   └─ debugBoundaries(terrain.id)
  │       ├─ getTerrainFOI(terrain.id)      ← 查 FOI registry
  │       ├─ computeCameraFromRidge/Polygon ← 仅 debug 用，不影响飞行
  │       └─ 画红点(FOI) + 黄点(Camera)
  │
  └─ showTerrainLesson(terrain)
```

**谁决定 Camera?**
| 参数 | 来源 | 文件 | 行号 |
|------|------|------|------|
| `target (lat/lon)` | `terrain.lat/lon` | `data/*.json` | — |
| `heading` | **固定 0°** | `CesiumMap.tsx` | 478 |
| `pitch` | **固定 -42°** | `CesiumMap.tsx` | 479 |
| `range` | `viewHeightForTerrain(terrain.category)` | `CesiumMap.tsx:84-93` | 470 |

**问题**: heading/pitch 全部硬编码，不依赖地形特征。

### 路径 B: `handleSelectFeature()` (全国 Feature, GeographicFeature)

```
ExplorerApp.handleSelectFeature(feature: GeographicFeature)
  │
  ├─ 计算 CameraParams:
  │   foi = getTerrainFOI(feature.id)       ← 查 FOI registry
  │   if (foi) {
  │     if (foi.featureType === "mountain_system") {
  │       cameraParams = computeCameraFromRidge(foi.geometryCoords, foi.primary)
  │     } else {
  │       cameraParams = computeCameraFromPolygon(foi.geometryCoords, foi.primary)
  │     }
  │   } else if (feature.cameraGeometry) {
  │     cameraParams = { ...feature.cameraGeometry }  ← 降级到手写
  │   }
  │
  ├─ labelManager.addLabel(feature.id, ...)
  │   position: cameraParams.target[1], target[0]  ← 用计算出的 target 放 label
  │
  ├─ 构造 flyPayload:
  │   lat: cameraParams.target[1]
  │   lon: cameraParams.target[0]
  │   cameraHeight: cameraParams.range
  │
  ├─ mapRef.flyToTerrainAndWait(flyPayload, {
  │   heading: cameraParams.heading,
  │   pitch: cameraParams.pitch,
  │ })
  │   │
  │   ├─ cameraAt(
  │   │   lat: cameraParams.target[1],   ← 来自 FOI + auto-camera
  │   │   lon: cameraParams.target[0],
  │   │   heightAboveGround: cameraParams.range,
  │   │ )
  │   │
  │   └─ viewer.camera.flyTo({
  │         orientation: {
  │           heading: cameraParams.heading,  ← 来自 auto-camera
  │           pitch: cameraParams.pitch,      ← 来自 auto-camera
  │           roll: 0.8°
  │         }
  │       })
  │
  └─ debugBoundaries(feature.id)
```

**谁决定 Camera?**
| 参数 | 来源 | 文件 | 优先级 |
|------|------|------|--------|
| `target` | `computeCameraFromRidge/Polygon(geometryCoords, primary)` | `auto-camera.ts` | 1st (有 FOI) |
| `target` | `feature.cameraGeometry.target` | `china-core-features.ts` | 2nd (无 FOI 降级) |
| `heading` | 同上 | 同上 | 同上 |
| `pitch` | 同上 | 同上 | 同上 |
| `range` | 同上 | 同上 | 同上 |

**问题**: `geometryCoords` 是手绘简化 polygon → bbox 不准 → range 不准 → offset 不准。

### 路径 A vs 路径 B 对比

| | 路径 A (TerrainPoint) | 路径 B (GeographicFeature) |
|--|------|------|
| 触发源 | `data/*.json` (新疆 32 个) | `features/*.ts` (全国 23 个) |
| target | JSON 的 lat/lon | FOI geometryCoords 计算 |
| heading | **固定 0°** | auto-camera 计算 |
| pitch | **固定 -42°** | auto-camera 计算 |
| range | `TERRAIN_VIEW_HEIGHTS[category]` | `computeRangeForSpan(spanKm)` |
| 坐标来源 | 1 个文件 | 3 个文件交叉 |
| 可预测性 | 稳定但不智能 | 依赖 geometryCoords 精度 |

### 同一地形的双路径问题

| 地形 | 路径 A (JSON) | 路径 B (Feature) | 是否冲突 |
|------|-------------|-----------------|---------|
| 天山 | lat/lon from `data/tianshan.json` | FOI geometryCoords + auto-camera | ✅ 冲突 — 同一座山两个目标 |
| 昆仑山 | lat/lon from `data/kunlun.json` | FOI geometryCoords + auto-camera | ✅ 冲突 |
| 阿尔泰山 | lat/lon from `data/altai.json` | FOI geometryCoords + auto-camera | ✅ 冲突 |
| 秦岭 | **无 JSON** | FOI geometryCoords + auto-camera | ❌ 只有路径 B |
| 喜马拉雅 | **无 JSON** | FOI geometryCoords + auto-camera | ❌ 只有路径 B |

---

## 四、Cesium 执行层 (What Viewer Actually Receives)

### `cameraAt()` — 高度计算

```typescript
cameraAt(Cesium, viewer, lat, lon, heightAboveGround, fallbackElevation, cache)
  → 采样地形高程 ground
  → 返回 Cartesian3(lon, lat, ground + heightAboveGround)
```

**关键**: `heightAboveGround` 是"离地高度"，不是"海拔高度"。

### `viewHeightForTerrain()` — 高度查找表

```typescript
TERRAIN_VIEW_HEIGHTS = {
  mountain_range: 8000,
  lake: 6000,
  desert: 16000,
  basin: 12000,
  valley: 6000,
  river: 8000,
  city: 5000,
  scenic: 7000,
}
```

**问题**: 这个表只被路径 A 使用。路径 B 用 `cameraParams.range` (auto-camera 动态计算)。

### `flyToTerrainAndWait()` — 最终参数

```typescript
// 路径 A 传入:
{ heading: 0, pitch: -42 }  // 固定值，忽略 terrain 的任何特征

// 路径 B 传入:
{ heading: cameraParams.heading, pitch: cameraParams.pitch }
  // cameraParams 来自 computeCameraFromRidge/Polygon(geometryCoords, primary)
```

### CesiumMap 初始化时渲染的静态元素

```
1. Feature hoverGeometry (maturityLevel >= 2, 8 个新疆 Feature)
   → 读 features/xinjiang-core-features.ts
   → 画 Polygon / RidgeCorridor 到 Cesium

2. GeoJSON 边界线 (13 个文件)
   → 读 data/gis/exports/*.geojson
   → 画 Polyline (白色半透明) 到 Cesium
   → 与 Feature hoverGeometry 重叠但不联动

3. labelManager 初始化的 30 个地形标签
   → 读 lib/terrain-label-registry.ts
   → 通过 CinematicLabelManager 管理
```

---

## 五、渲染层 (What User Sees)

| 屏幕元素 | 数据源 | 坐标来源 | 备注 |
|---------|--------|---------|------|
| **地形标签** | `labelManager` | `TERRAIN_LABELS[].lat/lon` | 30 个标签，初始化时注册 |
| **Feature 轮廓** (新疆 8 个) | `CesiumMap` 初始化 | `feature.hoverGeometry` | 手工估算 polygon |
| **GeoJSON 边界线** (13 个) | `CesiumMap` 初始化 | `data/gis/exports/*.geojson` | 叠加在 Feature 轮廓上 |
| **FOI 红点** (debug) | `debugBoundaries()` | `FOI.primary` | 点击后显示 |
| **Camera 黄点** (debug) | `debugBoundaries()` | `computeCameraFromRidge/Polygon()` | 点击后显示 |
| **相机位置** | `flyToTerrainAndWait()` | 路径 A: JSON lat/lon<br>路径 B: auto-camera target | 用户实际看到的位置 |

---

## 六、完整数据流向图

```
┌─────────────────────────────────────────────────────────────────┐
│                     原始数据层 (Data Sources)                    │
│                                                                 │
│  data/*.json (32)    features/*.ts (23)    foi-registry.ts (23) │
│  terrain-label-      china-core-         geometryCoords[]       │
│  registry.ts (30)    features.ts (15)    primary[]              │
│  geojson/* (13)                                  label[]        │
│                                    terrain-label-registry.ts    │
│                                    (30)                         │
└────────────────┬────────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                   运行时 Registry 层                              │
│                                                                 │
│  ALL_FEATURES (ExplorerApp:91-108)                              │
│  ├─ source:"xinjiang" → TerrainPoint (from JSON)               │
│  └─ source:"china"    → GeographicFeature (from features.ts)   │
│                                                                 │
│  getTerrainFOI(id) → TerrainFOI (from foi-registry.ts)         │
│  getAllTerrains()  → TerrainPoint[] (from data/*.json)         │
│  labelManager      → CinematicLabel[] (from TERRAIN_LABELS)    │
└────────────────┬────────────────────────────────────────────────┘
                 │
                 ▼  用户点击
┌─────────────────────────────────────────────────────────────────┐
│                    点击分流                                       │
│                                                                 │
│  source:"xinjiang" ──→ handleSelectTerrain()                    │
│  source:"china"    ──→ handleSelectFeature()                    │
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │ handleSelectTerrain  │  │ handleSelectFeature  │            │
│  │ (路径 A)             │  │ (路径 B)             │            │
│  │                      │  │                      │            │
│  │ target: JSON lat/lon │  │ target: FOI +        │            │
│  │ heading: 0 (固定)    │  │   auto-camera        │            │
│  │ pitch: -42 (固定)    │  │   computeRidge/      │            │
│  │ range: VIEW_HEIGHTS  │  │   Polygon()          │            │
│  │ [category查表]       │  │                      │            │
│  └──────────┬───────────┘  └──────────┬───────────┘            │
│             │                         │                         │
│             └─────────┬───────────────┘                         │
│                       ▼                                         │
│            CesiumMap.flyToTerrainAndWait()                      │
│                       │                                         │
│                       ▼                                         │
│            viewer.camera.flyTo()                                │
│            destination: [lon, lat, ground+height]               │
│            orientation: { heading, pitch, roll }                │
└─────────────────────────────────────────────────────────────────┘
```

---

## 七、地形覆盖矩阵

### 23 个核心地形 × 数据源覆盖

| Terrain | JSON<br>(data/*.json) | Feature<br>(xinjiang) | Feature<br>(china) | FOI | Label | GeoJSON |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **天山** | ✅ | ✅ | — | ✅ | ✅ | ✅ |
| **昆仑山** | ✅ | ✅ | — | ✅ | ✅ | ✅ |
| **阿尔泰山** | ✅ | ✅ | — | ✅ | ✅ | ✅ |
| **帕米尔** | ✅ | ✅ | — | ✅ | ✅ | ✅ |
| **塔克拉玛干** | ✅ | ✅ | — | ✅ | ✅ | ✅ |
| **赛里木湖** | ✅ | ✅ | — | ✅ | ✅ | ❌ |
| **准噶尔盆地** | ✅ | ✅ | — | ✅ | ✅ | ✅ |
| **塔里木盆地** | ✅ | ✅ | — | ✅ | ✅ | ✅ |
| **秦岭** | ❌ | — | ✅ | ✅ | ✅ | ✅ |
| **祁连山** | ❌ | — | ✅ | ✅ | ✅ | ✅ |
| **太行山** | ❌ | — | ✅ | ✅ | ✅ | ✅ |
| **大兴安岭** | ❌ | — | ✅ | ✅ | ✅ | ❌ |
| **横断山脉** | ❌ | — | ✅ | ✅ | ✅ | ❌ |
| **喜马拉雅** | ❌ | — | ✅ | ✅ | ✅ | ❌ |
| **青藏高原** | ❌ | — | ✅ | ✅ | ✅ | ❌ |
| **黄土高原** | ❌ | — | ✅ | ✅ | ✅ | ✅ |
| **内蒙古高原** | ❌ | — | ✅ | ✅ | ✅ | ✅ |
| **云贵高原** | ❌ | — | ✅ | ✅ | ✅ | ❌ |
| **四川盆地** | ❌ | — | ✅ | ✅ | ✅ | ✅ |
| **柴达木盆地** | ❌ | — | ✅ | ✅ | ✅ | ❌ |
| **东北平原** | ❌ | — | ✅ | ✅ | ✅ | ❌ |
| **华北平原** | ❌ | — | ✅ | ✅ | ✅ | ❌ |
| **长江中下游** | ❌ | — | ✅ | ✅ | ✅ | ❌ |

### 关键发现

1. **新疆 8 个地形走双路径**: 天山/昆仑山/阿尔泰山/帕米尔/塔克拉玛干/赛里木湖/准噶尔/塔里木 — 既有 JSON 又有 Feature，点击来源不同 → 飞到不同位置
2. **全国 15 个地形只有路径 B**: 没有 JSON，只能通过 Feature → FOI 路径
3. **13 个有 GeoJSON + 8 个有 Feature hoverGeometry**: 但两者不联动，地图上同时显示两套轮廓
4. **30 个 Label 覆盖 23 个 Feature + 7 个 POI**: Label 坐标来源混杂

---

## 八、废弃风险评估

| 文件/模块 | 实际使用频率 | 是否可废弃 | 废弃条件 |
|-----------|------------|-----------|---------|
| `cameraGeometry` (in Feature) | 🟡 中 — 路径 B 的降级路径 (无 FOI 时) | ⚠️ 暂缓 | 所有 Feature 都有 FOI 后可删 |
| `foi-registry.ts` | 🟢 高 — 路径 B 的主输入源 | ❌ 不能删 | 迁移到 V2 |
| `terrain-label-registry.ts` | 🟢 高 — 30 个标签初始化 | ⚠️ 可合并 | 坐标来源统一到 V2 |
| `data/*.json` | 🟢 高 — 路径 A 的输入源 | ⚠️ 可合并 | 迁移到 V2 |
| `xinjiang-core-features.ts` | 🟡 中 — Feature 渲染 + 路径 B | ⚠️ 可合并 | 迁移到 V2 |
| `china-core-features.ts` | 🟢 高 — 15 个 Feature 的唯一定义 | ❌ 不能删 | 迁移到 V2 |
| `feature-schema.ts` | 🔴 几乎不用 — 无人调用 | ✅ 可删 | 随时 |
| `BOUNDARY_FILES` (in CesiumMap) | 🟡 中 — 仅叠加线渲染 | ⚠️ 可整合 | 合并到 V2 geometry |
| `TERRAIN_VIEW_HEIGHTS` (in CesiumMap) | 🟡 中 — 仅路径 A 用 | ⚠️ 可合并 | 被 auto-camera 替代 |

---

## 九、TerrainFeatureV2 设计

### 目标结构

```typescript
interface TerrainFeatureV2 {
  // === 身份 ===
  id: string;                    // 唯一标识
  name: string;                  // 中文名称
  category: string;              // mountain_range / basin / plateau / plain / lake / desert
  featureType: string;           // mountain_system / basin / plateau / plain (UI 分类用)

  // === 几何 (单一权威来源) ===
  geometry: {
    boundary: GeoJSON;           // 真实 GIS 边界 (Polygon/MultiPolygon)
    ridgeLine?: Position[];      // 山脊线 (mountain_system 专用)
    centroid: Position;          // 自动从 boundary 计算
    bbox: BoundingBox;          // 自动从 boundary 计算
    spanKm: number;             // 自动从 bbox 计算
  };

  // === FOI (从 geometry 派生，不再独立存储) ===
  foi: {
    primary: {                   // 主兴趣点
      name: string;
      position: Position;        // 在 boundary 内
      type: "peak" | "city" | "center";
    };
    secondary: {                 // 辅助兴趣点
      name: string;
      position: Position;
      type: string;
    }[];
  };

  // === 标签 (从 geometry.centroid 派生) ===
  label: {
    text: string;
    importance: Importance;      // continental / national / regional / poi
    rotation?: number;           // 山脉走向
  };

  // === 内容 ===
  story: StoryDefinition;        // seeing / formation / history / observation
  lesson: TerrainLesson;         // 同上，兼容旧系统
  knowledge: TerrainKnowledge;   // 结构化知识

  // === 元数据 ===
  elevation: number;             // 主峰/平均海拔
  maturityLevel: MaturityLevel;  // 0-4
  geojsonSource?: string;        // "natural-earth" | "hydrosheds" | "manual"
  foiSource?: string;            // 标注 FOI 的来源
}
```

### 从 V2 自动派生的值

```
centroid        = boundary 的质心 (自动计算)
bbox            = boundary 的包围盒 (自动计算)
spanKm          = max(bbox.width, bbox.height) 转为 km (自动计算)
heading         = computeMountainHeading(bbox) (自动计算)
range           = computeRangeForSpan(spanKm) (自动计算)
pitch           = computePitchForCategory(category, spanKm) (自动计算)
labelPosition   = centroid (自动计算)
```

### 迁移策略

```
旧系统                          新系统
─────────────────────────────────────────────
data/*.json      ──迁移──→     TerrainFeatureV2
china-core-features.ts ──合并──→
foi-registry.ts  ──合并──→     (geometry + foi 合一)
terrain-label-registry.ts ──派生──→ (从 centroid 自动计算)
geojson/*.geojson ──嵌入──→    geometry.boundary
auto-camera.ts   ──重构──→     MountainCamera / PlateauCamera / BasinCamera / PlainCamera
```

```
时间线:
Week 1: TerrainFeatureV2 定义 + 迁移 23 个核心地形
Week 2: 补全 GeoJSON (10 个缺失的边界)
Week 3: 重写 Camera 算法 (4 类)
Week 4: 切换入口 + 删除旧系统
```

---

## 十、系统性问题总结

### 问题 1: 同一地形多套坐标

天山有 **6 套**不同的坐标:
1. `data/tianshan.json` → lat/lon (路径 A target)
2. `xinjiang-core-features.ts` → identityGeometry (渲染轮廓)
3. `xinjiang-core-features.ts` → cameraGeometry (路径 A 降级)
4. `foi-registry.ts` → primary (路径 B 输入)
5. `foi-registry.ts` → geometryCoords (路径 B 计算)
6. `terrain-label-registry.ts` → lat/lon (标签位置)
7. `geojson/tianshan.geojson` → 叠加线

### 问题 2: 两条飞行路径不互通

路径 A (TerrainPoint): 固定 heading=0, pitch=-42, 高度查表
路径 B (GeographicFeature): 动态计算 heading/pitch/range, 但依赖手绘 geometryCoords

**同一座山，从不同入口进，飞到不同位置，用不同角度，不同高度。**

### 问题 3: Debug 和 Production 用不同数据

`debugBoundaries()` 调用 `computeCameraFromRidge/Polygon(FOI.geometryCoords, FOI.primary)`
`handleSelectFeature()` 也调用同样的函数

但 `debugBoundaries()` 画的红点是 `FOI.primary`，黄点是计算后的 `target`。
如果 geometryCoords 不准 → 黄点位置不准 → 但红点(FOI)是对的 → 用户看到"红点对黄点偏"。

### 问题 4: 新疆 8 个地形同时存在于 JSON 和 Feature 中

用户从侧边栏"新疆"分类点天山 → 走路径 A
用户从侧边栏"山脉"分类点天山 → 走路径 B

**同一个按钮列表里出现了两次天山。**
