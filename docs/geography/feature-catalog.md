# Feature Catalog

## Core Features (Xinjiang)

### 天山

```
Type:           mountain_system
Hierarchy:      LOD 2 (Xinjiang Scale)

Identity Geometry:
  Type:         LineString (Ridge Line)
  Source:       Natural Earth Mountain Ranges
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (12 点)

Interaction Geometry:
  Type:         RidgeCorridor (ridgeLine + segments)
  Source:       Natural Earth Mountain Ranges
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (3 segments)

Camera Geometry:
  Target:       [87.5, 43.5] (乌鲁木齐南部)
  Heading:      120°
  Pitch:        -28°
  Range:        180000m

Story Geometry:
  4 nodes:      天山西段 → 博格达峰 → 天池 → 伊犁河谷
```

### 昆仑山

```
Type:           mountain_system
Hierarchy:      LOD 2 (Xinjiang Scale)

Identity Geometry:
  Type:         LineString (Ridge Line)
  Source:       Natural Earth Mountain Ranges
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (12 点)

Interaction Geometry:
  Type:         RidgeCorridor (ridgeLine + segments)
  Source:       Natural Earth Mountain Ranges
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (3 segments)

Camera Geometry:
  Target:       [82.0, 36.5]
  Heading:      0°
  Pitch:        -25°
  Range:        200000m

Story Geometry:
  3 nodes:      西昆仑 → 中昆仑 → 东昆仑
```

### 阿尔泰山

```
Type:           mountain_system
Hierarchy:      LOD 2 (Xinjiang Scale)

Identity Geometry:
  Type:         LineString (Ridge Line)
  Source:       Natural Earth Mountain Ranges
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (6 点)

Interaction Geometry:
  Type:         RidgeCorridor (ridgeLine + segments)
  Source:       Natural Earth Mountain Ranges
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (2 segments)

Camera Geometry:
  Target:       [90.0, 48.0]
  Heading:      30°
  Pitch:        -30°
  Range:        150000m

Story Geometry:
  2 nodes:      喀纳斯 → 友谊峰
```

### 准噶尔盆地

```
Type:           basin
Hierarchy:      LOD 2 (Xinjiang Scale)

Identity Geometry:
  Type:         Polygon
  Source:       Natural Earth Basins / QGIS
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (10 点) — 范围明显偏小

Interaction Geometry:
  Type:         Polygon (同 identityGeometry)
  Source:       Natural Earth Basins / QGIS
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (10 点)

Camera Geometry:
  Target:       [87.5, 45.0]
  Heading:      0°
  Pitch:        -35°
  Range:        250000m

Story Geometry:
  2 nodes:      古尔班通古特沙漠 → 克拉玛依
```

### 塔里木盆地

```
Type:           basin
Hierarchy:      LOD 2 (Xinjiang Scale)

Identity Geometry:
  Type:         Polygon
  Source:       Natural Earth Basins / QGIS
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (14 点)

Interaction Geometry:
  Type:         Polygon (同 identityGeometry)
  Source:       Natural Earth Basins / QGIS
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (14 点)

Camera Geometry:
  Target:       [83.0, 39.5]
  Heading:      0°
  Pitch:        -35°
  Range:        300000m

Story Geometry:
  3 nodes:      塔克拉玛干 → 塔里木河 → 库车
```

### 帕米尔高原

```
Type:           plateau
Hierarchy:      LOD 2 (Xinjiang Scale)

Identity Geometry:
  Type:         Polygon
  Source:       组合定义 (OSM + 行政边界)
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (8 点)

Interaction Geometry:
  Type:         Polygon (同 identityGeometry)
  Source:       组合定义
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (8 点)

Camera Geometry:
  Target:       [76.0, 38.5]
  Heading:      45°
  Pitch:        -25°
  Range:        150000m

Story Geometry:
  2 nodes:      慕士塔格峰 → 喀拉库勒湖
```

### 塔克拉玛干沙漠

```
Type:           desert
Hierarchy:      LOD 3 (Regional Scale)

Identity Geometry:
  Type:         Polygon
  Source:       Natural Earth Deserts / OSM
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (11 点)

Interaction Geometry:
  Type:         Polygon (同 identityGeometry)
  Source:       Natural Earth Deserts / OSM
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (11 点)

Camera Geometry:
  Target:       [83.0, 38.5]
  Heading:      0°
  Pitch:        -40°
  Range:        200000m

Story Geometry:
  2 nodes:      沙漠中心 → 沙漠公路
```

### 赛里木湖

```
Type:           lake
Hierarchy:      LOD 3 (Regional Scale)

Identity Geometry:
  Type:         Polygon
  Source:       HydroLAKES
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (7 点)

Interaction Geometry:
  Type:         Polygon (同 identityGeometry)
  Source:       HydroLAKES
  Status:       ⏳ 待验证
  Current:      Claude 手工估算 (7 点)

Camera Geometry:
  Target:       [81.3, 44.5]
  Heading:      0°
  Pitch:        -45°
  Range:        30000m

Story Geometry:
  1 node:       赛里木湖
```

---

## 数据源状态

| 数据源 | 版本 | 下载日期 | 授权 | 状态 |
|--------|------|----------|------|------|
| Natural Earth Mountain Ranges | - | - | Public Domain | ⏳ 待下载 |
| Natural Earth Basins | - | - | Public Domain | ⏳ 待验证 |
| Natural Earth Deserts | - | - | Public Domain | ⏳ 待验证 |
| HydroLAKES | - | - | CC BY 4.0 | ⏳ 待下载 |
| OSM | - | - | ODbL | 备选 |
