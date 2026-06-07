# Source Matrix

## 8 Core Features — Geometry Source Status

| Feature | Type | Identity Source | Interaction Source | License | Verified |
|---------|------|----------------|-------------------|---------|----------|
| 天山 | mountain_system | Natural Earth geography_regions | OSM / 专业 GIS | PD / ODbL | ⏳ |
| 昆仑山 | mountain_system | Natural Earth geography_regions | OSM / 专业 GIS | PD / ODbL | ⏳ |
| 阿尔泰山 | mountain_system | Natural Earth geography_regions | OSM / 专业 GIS | PD / ODbL | ⏳ |
| 准噶尔盆地 | basin | Natural Earth geography_regions | 专业 GIS / 手工 | PD | ⏳ |
| 塔里木盆地 | basin | Natural Earth geography_regions | 专业 GIS / 手工 | PD | ⏳ |
| 帕米尔高原 | plateau | Natural Earth geography_regions | OSM / 组合 | PD / ODbL | ⏳ |
| 塔克拉玛干 | desert | Natural Earth geography_regions | OSM / 专业 GIS | PD / ODbL | ⏳ |
| 赛里木湖 | lake | HydroLAKES | HydroLAKES | CC BY 4.0 | ⏳ |

## Source Details

### Natural Earth — geography_regions_polys

```
类型:       Cartographic Label Regions
精度:       "roughly accurate to 50m scale"
适用:       identityGeometry (标签放置)
不适用:     interactionGeometry (Hover/Selection)
文件:       ne_10m_geography_regions_polys.zip (1.9MB)
下载状态:   ✅ 已下载
验证状态:   ⏳ 待确认是否包含天山/准噶尔盆地/塔里木盆地
```

### HydroLAKES

```
类型:       Lake Polygons
精度:       高精度
适用:       identityGeometry + interactionGeometry (湖泊)
文件:       hydrolakes.zip
下载状态:   ⏳ 待下载
验证状态:   ⏳ 待确认赛里木湖
```

### OpenStreetMap

```
类型:       Community-mapped boundaries
精度:       变化大，需要验证
适用:       interactionGeometry (山脉、沙漠)
授权:       ODbL
下载状态:   ⏳ 待下载
验证状态:   ⏳ 待确认天山 Relation
```

### 专业 GIS / 手工编辑

```
类型:       人工基于卫星影像绘制
精度:       可控
适用:       interactionGeometry (盆地、高原)
工具:       QGIS
验证状态:   ⏳ 待开始
```

## Sprint 1: 天山 + 准噶尔盆地

### 天山

```
identityGeometry:
  来源: Natural Earth geography_regions_polys
  类型: Ridge Line (需要从 Polygon 提取)
  状态: ⏳ 待验证

interactionGeometry:
  来源: OSM Relation "Tian Shan" / 手工编辑
  类型: Ridge Corridor (不是 Buffer Polygon)
  状态: ⏳ 待验证

验证标准:
  - Ridge Line 沿天山主脊分布
  - Ridge Corridor 不覆盖准噶尔盆地
  - debugCesium.debugGeometry("tianshan") 与卫星影像吻合
```

### 准噶尔盆地

```
identityGeometry:
  来源: Natural Earth geography_regions_polys
  类型: Polygon
  状态: ⏳ 待验证

interactionGeometry:
  来源: 专业 GIS / 手工编辑
  类型: Polygon
  状态: ⏳ 待验证

验证标准:
  - Polygon 覆盖整个准噶尔盆地
  - 不与天山 Corridor 重叠
  - debugCesium.debugGeometry("junggar-basin") 与卫星影像吻合
```

## 完成标准

Source Matrix 完成当：
- [ ] 8 个 Feature 的 identityGeometry 来源全部确认
- [ ] 8 个 Feature 的 interactionGeometry 来源全部确认
- [ ] 天山 + 准噶尔盆地的 Geometry 已替换并验证
- [ ] Debug Geometry 截图与卫星影像吻合
