# ADR-005: GIS Source of Truth

## Status

Accepted

## Date

2026-06-07

## Context

Phase 1A/1B 中所有 Geometry 由 Claude 手工估算，导致：
- 天山 Corridor 覆盖准噶尔盆地南缘
- 准噶尔盆地 Polygon 只覆盖真实盆地 30-40%
- Mountain Corridor 宽度固定，与真实山系不符

Debug Geometry 截图已验证这些问题。

## Decision

Production Geometry 必须来自权威 GIS 数据源。Claude 手工 Geometry 仅用于 Prototype/Debug。

### Feature → 数据源映射

| Feature | identityGeometry | interactionGeometry | 数据源 |
|---------|-----------------|-------------------|--------|
| 天山 | Ridge Line | Ridge Corridor | Natural Earth Mountain Ranges |
| 昆仑山 | Ridge Line | Ridge Corridor | Natural Earth Mountain Ranges |
| 阿尔泰山 | Ridge Line | Ridge Corridor | Natural Earth Mountain Ranges |
| 准噶尔盆地 | Polygon | Polygon | Natural Earth Basins / QGIS |
| 塔里木盆地 | Polygon | Polygon | Natural Earth Basins / QGIS |
| 塔克拉玛干 | Polygon | Polygon | Natural Earth Deserts / OSM |
| 赛里木湖 | Polygon | Polygon | HydroLAKES |
| 帕米尔高原 | Polygon | Polygon | 组合定义 (OSM + 行政边界) |

### 数据源状态

| 数据源 | 状态 | 备注 |
|--------|------|------|
| Natural Earth Mountain Ranges | 待验证 | 需确认是否包含天山/昆仑山/阿尔泰山 |
| Natural Earth Basins | 待验证 | 需确认是否包含准噶尔/塔里木 |
| Natural Earth Deserts | 待验证 | 需确认是否包含塔克拉玛干 |
| HydroLAKES | 待验证 | 需确认赛里木湖精度 |
| OSM | 备选 | 授权 ODbL |

## Consequences

1. Claude 手工 Geometry 禁止进入 Production
2. 每个 Feature 必须有 Geometry Source Record
3. 替换 Geometry 后必须通过 Debug Geometry 验证
4. 如果权威数据源不存在，需要组合多个来源或使用 QGIS 人工提取

## Geometry Pipeline

```
Raw Source (Natural Earth / HydroLAKES / OSM)
    ↓
QGIS / ogr2ogr 提取
    ↓
Xinjiang Clip (裁剪到新疆范围)
    ↓
GeoJSON Export → data/gis/exports/
    ↓
Feature Import (替换 xinjiang-core-features.ts)
    ↓
Debug Geometry 验证 (debugCesium.debugGeometry)
    ↓
Production
```

## Rules

1. 禁止将 Claude 手工估算的 Geometry 用于 Hover/Select/Flight
2. 每个 Feature 的 interactionGeometry 必须有对应的 GIS Source Record
3. 替换 Geometry 后必须通过 Debug Geometry 验证
4. Mountain Corridor 不得使用 Buffer(Ridge, distance) 生成
5. 如果数据源验证失败，必须先解决数据源问题，再继续开发
