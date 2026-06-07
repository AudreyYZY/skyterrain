# ADR-003: Real GIS Geometry Only

## Status

Accepted

## Date

2026-06-07

## Context

Phase 1A/1B 中，所有 Feature 的 Geometry 由 Claude 手工估算：

```
天山 RidgeCorridor: 16 个顶点
准噶尔盆地 Polygon: 10 个顶点
塔里木盆地 Polygon: 14 个顶点
```

Debug Geometry 截图验证：

1. 天山 Corridor 覆盖了准噶尔盆地南缘
2. 准噶尔盆地 Polygon 只覆盖真实盆地的 30-40%
3. Mountain Corridor 宽度固定，与真实山系不符

结论：手工 Geometry 不可用于 Production。

## Decision

所有 interactionGeometry 必须来自权威 GIS 数据源：

| Feature | 数据源 | Geometry |
|---------|--------|----------|
| 天山 Ridge | Natural Earth Mountain Ranges | LineString |
| 昆仑山 Ridge | Natural Earth Mountain Ranges | LineString |
| 阿尔泰山 Ridge | Natural Earth Mountain Ranges | LineString |
| 准噶尔盆地 | Natural Earth Basins / QGIS | Polygon |
| 塔里木盆地 | Natural Earth Basins / QGIS | Polygon |
| 塔克拉玛干 | Natural Earth Deserts / OSM | Polygon |
| 赛里木湖 | HydroLAKES | Polygon |
| 帕米尔高原 | 组合定义 | Polygon |

## Consequences

1. 手工 Geometry 仅用于 Development/Debug，不得进入 Production
2. 每个 Feature 必须记录 Geometry 来源（source, version, confidence）
3. 新增 Feature 必须先验证 Geometry 来源，再实现交互

## Geometry Pipeline

```
Raw Source (Natural Earth / HydroLAKES / OSM)
    ↓
QGIS / ogr2ogr 提取
    ↓
Xinjiang Clip (裁剪到新疆范围)
    ↓
GeoJSON Export
    ↓
Feature Import (替换 xinjiang-core-features.ts)
    ↓
Debug Geometry 验证
    ↓
Production
```

## Rules

1. 禁止将 Claude 手工估算的 Geometry 用于 Hover/Select/Flight
2. 每个 Feature 的 interactionGeometry 必须有对应的 GIS Source Record
3. 替换 Geometry 后必须通过 Debug Geometry 验证
4. Mountain Corridor 不得使用 Buffer(Ridge, distance) 生成
