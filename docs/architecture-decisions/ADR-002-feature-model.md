# ADR-002: Geographic Feature Model

## Status

Accepted

## Date

2026-06-07

## Context

早期版本中，地貌数据模型为：

```ts
TerrainPoint {
  id: string
  name: string
  lat: number
  lon: number
  elevation: number
  lesson: TerrainLesson
}
```

这是一个 POI（兴趣点）模型，无法表达：
- 山脉的线性特征
- 盆地的面状范围
- 标签与交互的不同几何需求

## Decision

采用 GeographicFeature 模型，每个 Feature 拥有 4 种 Geometry：

```ts
GeographicFeature {
  id: string
  name: string
  featureType: FeatureType

  identityGeometry    // 标签放置、走向、LOD
  interactionGeometry // Hover、Focus、Selection
  cameraGeometry      // 飞行目标、最佳观赏角度
  storyGeometry       // 讲解节点、镜头运动路径

  label: IdentityDefinition
  visibility: VisibilityDefinition
  interaction: InteractionDefinition
  story?: StoryDefinition
}
```

## Geometry 类型映射

| FeatureType | identityGeometry | interactionGeometry |
|-------------|-----------------|-------------------|
| mountain_system | LineString (Ridge) | RidgeCorridor |
| basin | Polygon | Polygon |
| desert | Polygon | Polygon |
| plateau | Polygon | Polygon |
| lake | Polygon | Polygon |
| peak | Point | Point Buffer |
| valley | LineString | Corridor |

## Consequences

1. 山脉的 identity 和 interaction 使用不同 Geometry
2. RidgeCorridor 由 ridgeLine + segments 组成，不是 Buffer
3. cameraGeometry 独立于 identityGeometry
4. storyGeometry 定义讲解路径，不是所有 Feature 都需要

## Rules

1. Mountain 的 interactionGeometry 不得使用 Buffer(Polygon) 生成
2. 每种 Geometry 必须有明确的数据来源
3. cameraGeometry 必须人工定义，不能自动计算
