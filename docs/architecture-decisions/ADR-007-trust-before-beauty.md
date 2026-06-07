# ADR-007: Trust Before Beauty

## Status

Accepted

## Date

2026-06-07

## Context

Phase 2 期间，团队投入大量时间优化视觉效果（Halo、Glow、Region Lift、Fade 动画）。但用户截图显示：

- Hover 天山时准噶尔盆地一起亮
- 边界明显不符合真实地貌
- 用户第一反应是 "范围不对"，不是 "效果不好"

这说明视觉效果无法弥补地理数据不准确带来的信任损失。

## Decision

如果地理范围不可信，禁止继续视觉开发。

优先级：

```
真实边界 > Hover 动画 > Glow > Story Layer
```

## Consequences

1. Phase 2（视觉开发）暂停，直到 Phase 1C（真实 GIS 数据）完成
2. 天山 + 准噶尔盆地的 Geometry 必须通过验证，才能继续其他 Feature
3. Debug Geometry 截图与卫星影像吻合是唯一验收标准
4. 不得用 "效果差不多" 替代 "数据准确"

## Rules

1. 禁止在手工 Geometry 上开发视觉效果
2. 每个 Feature 的 interactionGeometry 必须有验证记录
3. 验证标准：用户第一眼就能说 "对，这就是天山"
4. 如果验证失败，必须先解决数据源问题

## Evidence

Debug Geometry 截图：
- 天山 Corridor 覆盖准噶尔盆地南缘 → ❌ FAIL
- 准噶尔盆地 Polygon 只覆盖 30-40% → ❌ FAIL

这些是数据问题，不是渲染问题。任何视觉优化都无法修复。
