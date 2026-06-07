# Source Matrix

## Core Principle

```
Natural Earth geography_regions = Identity Layer (标签放置)
Natural Earth ≠ Interaction Layer (Hover/Selection)

Interaction Geometry 需要权威区域数据源
```

## 8 Core Features

| Feature | Type | Identity Source | Interaction Source | Verified |
|---------|------|----------------|-------------------|----------|
| 天山 | mountain_system | Natural Earth Label Region | OSM / 专业数据 | ❌ FAIL |
| 昆仑山 | mountain_system | Natural Earth Label Region | OSM / 专业数据 | ⏳ |
| 阿尔泰山 | mountain_system | Natural Earth Label Region | OSM / 专业数据 | ⏳ |
| 准噶尔盆地 | basin | Natural Earth Label Region | 需要验证 | ❌ FAIL |
| 塔里木盆地 | basin | Natural Earth Label Region | 需要验证 | ⏳ |
| 帕米尔高原 | plateau | Natural Earth Label Region | OSM / 组合 | ⏳ |
| 塔克拉玛干 | desert | Natural Earth Label Region | OSM | ⏳ |
| 赛里木湖 | lake | HydroLAKES | HydroLAKES | ⏳ |

## Source Details

### Natural Earth — geography_regions_polys

```
类型:       Cartographic Label Regions
精度:       "roughly accurate to 50m scale"
适用:       identityGeometry (标签放置)
不适用:     interactionGeometry (Hover/Selection)
文件:       ne_10m_geography_regions_polys.zip (1.9MB)
状态:       ✅ 已下载，已验证为 Label Region
```

### HydroLAKES

```
类型:       Lake Polygons
精度:       高精度
适用:       identityGeometry + interactionGeometry (湖泊)
状态:       ⏳ 待下载
```

### OpenStreetMap

```
类型:       Community-mapped boundaries
精度:       变化大，需要验证
适用:       interactionGeometry (山脉、沙漠)
授权:       ODbL
状态:       ⏳ 待查询
```

### 专业 GIS / 手工编辑

```
类型:       人工基于卫星影像绘制
精度:       可控
适用:       interactionGeometry (盆地、高原)
工具:       QGIS
状态:       ⏳ 待开始
```

## Sprint 1: 天山 + 准噶尔盆地

### 天山

```
identityGeometry:
  来源: Natural Earth Label Region
  类型: Ridge Line (从 Polygon 提取)
  状态: ⏳ 待提取

interactionGeometry:
  来源: OSM Relation / 专业数据
  类型: Ridge Corridor
  状态: ⏳ 待验证

验证标准:
  - Ridge Line 沿天山主脊分布
  - Corridor 不覆盖准噶尔盆地
  - debugCesium.debugGeometry("tianshan") 与卫星影像吻合
```

### 准噶尔盆地

```
identityGeometry:
  来源: Natural Earth Label Region
  类型: Polygon
  状态: ⏳ 待提取

interactionGeometry:
  来源: 专业 GIS / 手工编辑
  类型: Polygon
  状态: ⏳ 待验证

验证标准:
  - Polygon 覆盖整个准噶尔盆地
  - 不与天山 Corridor 重叠
  - debugCesium.debugGeometry("junggar-basin") 与卫星影像吻合
```
