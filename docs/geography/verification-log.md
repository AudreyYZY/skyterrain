# Verification Log

## Purpose

记录每个 Feature 的 Geometry 验证过程，避免重复验证和遗忘。

## Log

| Date | Feature | Geometry | Source | Method | Result | Notes |
|------|---------|----------|--------|--------|--------|-------|
| 2026-06-07 | 天山 | interactionGeometry | Claude 手工估算 | Debug Geometry + 截图 | ❌ FAIL | Corridor 覆盖准噶尔盆地南缘，宽度固定，3 segments 有断开 |
| 2026-06-07 | 准噶尔盆地 | interactionGeometry | Claude 手工估算 | Debug Geometry + 截图 | ❌ FAIL | 范围偏小 (30-40%)，与天山 Corridor 重叠 |
| 2026-06-07 | 昆仑山 | interactionGeometry | Claude 手工估算 | - | ⏳ PENDING | 未单独验证 |
| 2026-06-07 | 阿尔泰山 | interactionGeometry | Claude 手工估算 | - | ⏳ PENDING | 未单独验证 |
| 2026-06-07 | 塔里木盆地 | interactionGeometry | Claude 手工估算 | - | ⏳ PENDING | 未单独验证 |
| 2026-06-07 | 帕米尔高原 | interactionGeometry | Claude 手工估算 | - | ⏳ PENDING | 未单独验证 |
| 2026-06-07 | 塔克拉玛干 | interactionGeometry | Claude 手工估算 | - | ⏳ PENDING | 未单独验证 |
| 2026-06-07 | 赛里木湖 | interactionGeometry | Claude 手工估算 | - | ⏳ PENDING | 未单独验证 |

## Sprint 1: 天山 + 准噶尔盆地

### 天山

```
目标: 找到真实 Ridge Line + Mountain Corridor
候选来源:
  - OSM Relation "Tian Shan"
  - Natural Earth geography_regions (仅作 identityGeometry)
  - 专业 GIS 数据
验证标准:
  - Ridge Line 沿天山主脊分布
  - Corridor 不覆盖准噶尔盆地
  - debugCesium.debugGeometry("tianshan") 与卫星影像吻合
状态: ⏳ 待开始
```

### 准噶尔盆地

```
目标: 找到真实 Basin Polygon
候选来源:
  - Natural Earth geography_regions (仅作 identityGeometry)
  - 专业 GIS 数据
  - QGIS 基于卫星影像人工绘制
验证标准:
  - Polygon 覆盖整个准噶尔盆地
  - 不与天山 Corridor 重叠
  - debugCesium.debugGeometry("junggar-basin") 与卫星影像吻合
状态: ⏳ 待开始
```

## Data Source History

| Date | Source | Action | Result |
|------|--------|--------|--------|
| 2026-06-07 | Natural Earth geography_regions_polys | 下载 (1.9MB) | 确认为 Cartographic Label Regions，不适合 interactionGeometry |
| 2026-06-07 | HydroLAKES | 待下载 | - |
| 2026-06-07 | OSM | 待查询 | - |
