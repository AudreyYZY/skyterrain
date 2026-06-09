# ADR-006: Identity Geometry and Interaction Geometry Must Use Different Sources

## Status

Accepted

## Date

2026-06-07

## Context

Phase 1A/1B 中隐含了一个错误假设：一个数据源可以同时满足 identityGeometry 和 interactionGeometry。

Debug Geometry 截图验证：
- 天山 Corridor 覆盖了准噶尔盆地南缘
- 准噶尔盆地 Polygon 只覆盖真实盆地 30-40%

Natural Earth `ne_10m_geography_regions_polys` 的文档说明：
- "Area and point labels of major physical features"
- "roughly accurate to 50m scale"

这说明 Natural Earth 的 geography_regions 更接近 **Cartographic Label Regions**，不是 **Authoritative Geographic Boundaries**。

## Decision

Identity Geometry 和 Interaction Geometry 是独立资产，必须使用不同数据源，不得互相派生。

### 天山

```
identityGeometry:
  用途: 标签放置、山脊方向、镜头构图
  来源: Natural Earth Mountain Ranges (可接受)
  精度: 标签级别

interactionGeometry:
  用途: Hover、Outline、Selection、Story Trigger
  来源: OSM Relation / 专业 GIS / 手工编辑
  精度: 边界级别
```

### 准噶尔盆地

```
identityGeometry:
  用途: 标签放置、区域中心
  来源: Natural Earth Basins (可接受)
  精度: 标签级别

interactionGeometry:
  用途: Hover、Outline、Selection
  来源: 专业 GIS / 手工编辑
  精度: 边界级别
```

## Consequences

1. Natural Earth 可用于 identityGeometry（标签放置）
2. Natural Earth 不得自动用于 interactionGeometry（交互边界）
3. interactionGeometry 需要权威区域数据集
4. 如果权威数据集不存在，需要手工编辑 + 卫星影像验证

## Rules

1. 禁止将 identityGeometry 直接复制为 interactionGeometry
2. interactionGeometry 必须独立验证
3. 每个 Geometry 必须记录来源和精度等级
4. 手工编辑的 interactionGeometry 必须通过 Debug Geometry 验证
