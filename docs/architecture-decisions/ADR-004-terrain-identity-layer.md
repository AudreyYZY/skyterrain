# ADR-004: Terrain Identity Layer

## Status

Accepted

## Date

2026-06-07

## Context

用户打开地图后，需要在 3 秒内建立新疆空间认知，不依赖 Hover、Story 或 Side Panel。

核心问题：用户看到卫星影像后，不知道 "这里是天山" "那里是塔里木盆地"。

## Decision

建立 Terrain Identity Layer，通过标签 + 轮廓让用户在全景尺度下识别主要地貌。

### 认知树

```
新疆
├── 阿尔泰山 (mountain_system, LOD 2)
├── 天山 (mountain_system, LOD 2)
├── 昆仑山 (mountain_system, LOD 2)
├── 帕米尔高原 (plateau, LOD 2)
├── 准噶尔盆地 (basin, LOD 2)
├── 塔里木盆地 (basin, LOD 2)
├── 塔克拉玛干沙漠 (desert, LOD 3)
├── 吐鲁番盆地 (basin, LOD 3)
├── 赛里木湖 (lake, LOD 3)
├── 博斯腾湖 (lake, LOD 4)
├── 天池 (lake, LOD 4)
├── 喀纳斯湖 (lake, LOD 4)
├── 博格达峰 (peak, LOD 4)
├── 慕士塔格峰 (peak, LOD 4)
└── 火焰山 (mountain_system, LOD 4)
```

### Visibility Matrix

| Level | Scale | 显示内容 |
|-------|-------|---------|
| LOD 2 | Xinjiang (800km+) | 三山两盆一高原 |
| LOD 3 | Regional (300km+) | 沙漠/吐鲁番/赛里木湖 |
| LOD 4 | Explore (100km+) | 湖泊/山峰/火焰山 |

### 用户认知路径

```
3 秒: 三山两盆一高原 → "新疆被三条山脉分割"
10 秒: 塔克拉玛干/赛里木湖 → "盆地里有沙漠和湖泊"
30 秒: 博格达峰/天池 → "可以去探索具体地点"
```

## Consequences

1. 标签必须跟随地形（Cesium Entity Label, CLAMP_TO_GROUND）
2. 山脉标签沿山脊方向展开（rotation）
3. 盆地标签居中（centroid）
4. 标签透明度随缩放级别变化
5. 优先级：LOD 2 > LOD 3 > LOD 4

## Rules

1. LOD 2 标签在任何缩放级别都可见
2. 山脉标签必须沿山脊方向，不能水平
3. 标签不得重叠（碰撞检测）
4. 标签样式必须像地图原生文字，不像 UI
