# Geometry Audit

## Purpose

验证当前 Feature interactionGeometry 是否与真实地貌范围吻合。

## Audit Method

1. `debugCesium.debugGeometry("feature-id")` 显示几何体
2. 截图对比卫星影像
3. 记录偏差

## Audit Results

### 天山 (tianshan)

```
当前 interactionGeometry: RidgeCorridor (3 segments, 12 ridge points)
来源: Claude 手工估算

问题:
  - Corridor 覆盖准噶尔盆地南缘
  - Corridor 宽度固定，与真实山系不符
  - 3 个 segment 之间有断开

与准噶尔盆地重叠: ❌ 存在重叠
状态: ❌ 失败

需要: 真实 Mountain Corridor 或 Ridge Line + 独立 Corridor
```

### 昆仑山 (kunlun)

```
当前 interactionGeometry: RidgeCorridor (3 segments, 12 ridge points)
来源: Claude 手工估算

问题:
  - 未单独验证
  - 可能与塔里木盆地重叠

状态: ⏳ 待验证
```

### 阿尔泰山 (altai)

```
当前 interactionGeometry: RidgeCorridor (2 segments, 6 ridge points)
来源: Claude 手工估算

问题:
  - 未单独验证

状态: ⏳ 待验证
```

### 准噶尔盆地 (junggar-basin)

```
当前 interactionGeometry: Polygon (10 vertices)
来源: Claude 手工估算

问题:
  - 范围明显偏小 (约覆盖真实盆地 30-40%)
  - 与天山 Corridor 重叠
  - 不覆盖盆地北部

与天山重叠: ❌ 存在重叠
状态: ❌ 失败

需要: 真实 Basin Polygon
```

### 塔里木盆地 (tarim-basin)

```
当前 interactionGeometry: Polygon (14 vertices)
来源: Claude 手工估算

问题:
  - 未单独验证
  - 精度可能不足

状态: ⏳ 待验证
```

### 帕米尔高原 (pamir)

```
当前 interactionGeometry: Polygon (8 vertices)
来源: Claude 手工估算

问题:
  - 边界不明确
  - 需要组合定义

状态: ⏳ 待验证
```

### 塔克拉玛干沙漠 (taklamakan)

```
当前 interactionGeometry: Polygon (11 vertices)
来源: Claude 手工估算

问题:
  - 未单独验证
  - 可能覆盖整个塔里木盆地而非仅沙漠

状态: ⏳ 待验证
```

### 赛里木湖 (sayram)

```
当前 interactionGeometry: Polygon (7 vertices)
来源: Claude 手工估算

问题:
  - 未单独验证
  - 湖泊边界相对简单，可能偏差较小

状态: ⏳ 待验证
```

## Summary

| Feature | 与相邻 Feature 重叠 | 精度 | 状态 |
|---------|-------------------|------|------|
| 天山 | ❌ 与准噶尔盆地重叠 | 低 | ❌ 失败 |
| 昆仑山 | ⏳ 待验证 | 低 | ⏳ |
| 阿尔泰山 | ⏳ 待验证 | 低 | ⏳ |
| 准噶尔盆地 | ❌ 与天山重叠 | 低 | ❌ 失败 |
| 塔里木盆地 | ⏳ 待验证 | 低 | ⏳ |
| 帕米尔高原 | ⏳ 待验证 | 低 | ⏳ |
| 塔克拉玛干 | ⏳ 待验证 | 低 | ⏳ |
| 赛里木湖 | ⏳ 待验证 | 中 | ⏳ |

## Next Steps

1. 验证天山 + 准噶尔盆地重叠范围
2. 寻找天山真实 Ridge Line 数据源
3. 寻找准噶尔盆地真实 Polygon 数据源
4. 替换后重新验证
