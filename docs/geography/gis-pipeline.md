# GIS Pipeline

## Overview

```
Raw Source (Natural Earth / HydroLAKES / OSM)
    ↓
data/gis/raw/
    ↓
QGIS / ogr2ogr
    ↓
Feature Extraction
    ↓
Xinjiang Clip
    ↓
data/gis/exports/
    ↓
Feature Import
    ↓
data/gis/processed/
    ↓
Debug Geometry 验证
    ↓
Production
```

## Directory Structure

```
data/gis/
├── raw/                    # 原始下载数据
│   ├── natural-earth/
│   ├── hydrolakes/
│   └── osm/
├── processed/              # QGIS 处理后的中间文件
├── exports/                # 最终 GeoJSON (用于 Production)
└── manifest.yaml           # 数据源清单
```

## Data Sources

### Natural Earth

```
Website:    https://www.naturalearthdata.com
License:    Public Domain
Scale:      10m (1:10,000,000)

Datasets:
  - ne_10m_geography_regions_polys.shp
    包含: 山脉、盆地、高原、沙漠等自然地理区域
    用途: Mountain Ridge, Basin Polygon, Desert Polygon

  - ne_10m_geography_regions_points.shp
    包含: 自然地理区域标注点
    用途: Label 锚点参考
```

### HydroLAKES

```
Website:    https://www.hydrosheds.org/products/hydrolakes
License:    CC BY 4.0
Scale:      Polygons

Datasets:
  - hydrolakes.shp
    包含: 全球湖泊多边形
    用途: Lake Polygon (赛里木湖、博斯腾湖等)
```

### OpenStreetMap (备选)

```
Website:    https://www.openstreetmap.org
License:    ODbL
用途:       补充 Natural Earth 缺失的 Feature
```

## Extraction Process

### Step 1: Download

```bash
# Natural Earth
cd data/gis/raw/natural-earth/
curl -L -o ne_10m_geography_regions_polys.zip \
  "https://naciscdn.org/naturalearth/10m/physical/ne_10m_geography_regions_polys.zip"
unzip ne_10m_geography_regions_polys.zip

# HydroLAKES
cd data/gis/raw/hydrolakes/
# 需要手动从 HydroLAKES 网站下载
```

### Step 2: QGIS Extraction

1. 打开 QGIS
2. 加载 `ne_10m_geography_regions_polys.shp`
3. 搜索 "Tian Shan" / "Junggar" / "Tarim"
4. 选中 Feature → 导出为 GeoJSON
5. 裁剪到新疆范围 (73°E-96°E, 35°N-49°N)

### Step 3: Export

```bash
# 导出到 exports 目录
ogr2ogr -f GeoJSON data/gis/exports/tianshan-ridge.geojson \
  data/gis/raw/natural-earth/ne_10m_geography_regions_polys.shp \
  -where "name LIKE '%Tian Shan%'"
```

### Step 4: Validation

```javascript
// 在浏览器 Console 验证
debugCesium.debugGeometry("tianshan")
// 截图对比卫星影像
```

## Feature-Specific Notes

### 天山 Ridge

```
Natural Earth 字段: name = "Tian Shan"
Geometry 类型: Polygon (不是 LineString)
需要: 提取边界或转为 Ridge Line
注意: Natural Earth 的 Mountain 通常是 Polygon，不是 Line
```

### 准噶尔盆地

```
Natural Earth 字段: 需要验证是否存在
备选: QGIS 人工提取
注意: 当前 Claude 估算的 Polygon 范围明显偏小
```

### 塔克拉玛干沙漠

```
Natural Earth 字段: 需要验证是否存在
备选: OSM 搜索 "Taklamakan Desert"
```

## Quality Checklist

每个 GeoJSON 导出后必须验证：

- [ ] 与卫星影像对齐
- [ ] 范围合理 (不偏小/偏大)
- [ ] 不与相邻 Feature 重叠
- [ ] 坐标系为 WGS84 (EPSG:4326)
- [ ] 文件大小合理 (< 1MB)
