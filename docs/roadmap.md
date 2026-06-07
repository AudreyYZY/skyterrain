# Flight Geography Explorer — Roadmap

## Completed

### Phase 1A: Feature Data Model ✅

- GeographicFeature 接口定义
- FeatureType 枚举
- Geometry 类型 (LineString, Polygon, Point, RidgeCorridor)
- IdentityDefinition, InteractionDefinition, VisibilityDefinition
- 8 个核心 Feature 数据 (手工估算)

### Phase 1B: Feature Hierarchy ✅

- 4 种 Geometry: identity, interaction, camera, story
- RidgeCorridor 模型 (ridgeLine + segments)
- CameraViewpoint 模型
- StoryNode 模型
- 新疆 Visibility Matrix

### Phase 2A: Feature Outline ✅

- CesiumMap 渲染 GeographicFeature
- Polygon outline (盆地/沙漠/湖泊)
- Ridge line + corridor outline (山脉)
- Hover 样式切换

### Phase 2B: Region Lift (部分) ✅

- Hover 时 outline 加强
- 但白色填充效果不理想

### Phase 2C: Region Halo ✅

- Halo 实体 (白色半透明填充)
- 300ms fade-in 动画
- Mountain 多 segment 支持

---

## Current

### Phase 1C: Real GIS Geometry ← 当前

**目标:** 替换手工 Geometry 为真实 GIS 数据

**核心原则:** Natural Earth = Identity Layer，不是 Interaction Layer

**拆分:**

| Step | 内容 | 状态 |
|------|------|------|
| 1C.1 | Source Discovery (确认每个 Feature 的权威来源) | ⏳ |
| 1C.2 | 天山 Verification (Ridge Line + Corridor) | ⏳ |
| 1C.3 | 准噶尔盆地 Verification (Polygon) | ⏳ |
| 1C.4 | 替换第一个真实 Feature | ⏳ |
| 1C.5 | 视觉验证 (Debug Geometry + Hover) | ⏳ |

**验证标准:**

- `debugCesium.debugGeometry("tianshan")` → 天山 Corridor 沿雪线分布
- `debugCesium.debugGeometry("junggar-basin")` → 填满整个准噶尔盆地
- Hover 天山 → 只亮天山，不影响准噶尔盆地

**Pipeline:**

```
Raw Source → QGIS → Xinjiang Clip → GeoJSON → Feature Import → Debug Verify
```

---

## Next

### Phase 2: Terrain Identity Layer

**目标:** 用户不 Hover 也能识别地貌

**内容:**
- Region 持续可见轮廓
- Label 跟随地形
- 缩放级别 LOD 切换

### Phase 3: Region Interaction Layer

**目标:** Hover → Region 被识别

**内容:**
- Region Halo (已部分完成)
- Region Glow (边缘发光)
- Region Focus (停留 200ms 后加强)
- Region Select (点击飞行 + 讲解)

### Phase 4: Story Layer

**目标:** 纪录片式讲解

**内容:**
- Camera Flight 路径
- Narration 同步
- Knowledge Card

---

## Architecture Decisions

- [ADR-001: Region First, Label Second](architecture-decisions/ADR-001-region-first.md)
- [ADR-002: Geographic Feature Model](architecture-decisions/ADR-002-feature-model.md)
- [ADR-003: Real GIS Geometry Only](architecture-decisions/ADR-003-real-gis-only.md)
- [ADR-004: Terrain Identity Layer](architecture-decisions/ADR-004-terrain-identity-layer.md)
- [ADR-005: GIS Source of Truth](architecture-decisions/ADR-005-gis-source-of-truth.md)
- [ADR-006: Separate Geometry Sources](architecture-decisions/ADR-006-separate-geometry-sources.md)
- [ADR-007: Trust Before Beauty](architecture-decisions/ADR-007-trust-before-beauty.md)
