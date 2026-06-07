# ADR-001: Region First, Label Second

## Status

Accepted

## Date

2026-06-07

## Context

早期版本中，地图上的地貌以 Label（文字标签）为主要表达方式：

```
Hover Label → Label Highlight → 用户感知 "这是网页"
```

用户无法建立空间认知：
- 不知道天山覆盖哪里
- 不知道塔里木盆地边界在哪
- 不知道准噶尔盆地有多大

## Decision

将 GeographicFeature（地理实体）作为一等公民，Label 降级为 Feature 的属性：

```
Hover Region → Region Lift → Label Follow → 用户感知 "这是地貌"
```

## Consequences

### Before

```
TerrainPoint {
  id, name, lat, lon
}
```

Label 是独立的 UI 元素，通过 `projectToScreen` 投影到地图上。

### After

```
GeographicFeature {
  identityGeometry    → 标签放置
  interactionGeometry → Hover/Selection
  cameraGeometry      → 飞行目标
  storyGeometry       → 讲解节点
  label               → 标签定义
  interaction         → 交互样式
}
```

Label 是 Feature 的属性，不是独立元素。

## Evidence

用户截图显示：
- Hover 天山时，准噶尔盆地也亮起
- 原因：Mountain Corridor 与 Basin Polygon 重叠
- 根本问题：Label-first 架构无法表达空间关系

## Rules

1. 所有交互（Hover/Select/FlyTo）基于 Region，不是 Label
2. Label 只是 Region 的说明文字
3. Region 必须来自真实 GIS 数据
