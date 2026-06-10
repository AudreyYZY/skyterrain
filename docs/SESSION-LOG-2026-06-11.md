# Session Log 2026-06-11

## 1. 停止语音播报后自动恢复

**问题**: 点击地形 → 开始播报 → 点击"停止语音" → 播报真的停了 → 过几秒又自动开始播报

**根因**: `handleSelectFeature` 在 `await flyToTerrainAndWait(...)` 结束后，没有检查 `narrationCancelledRef.current`，直接执行到 `speakLessonWithHighlight(effectiveLesson)`，重新触发一次播报。

而 `handleSelectTerrain` 在同样位置已经有取消检查（第 454 行），行为一致。

**修复**:
- `handleSelectFeature` 在 `flyToTerrainAndWait` 后加 `if (narrationCancelledRef.current) { return; }`
- `handleSelectTerrain` 在 `showTerrainLesson` 后加同样的取消检查
- `handleSelectFeature` 开头 `narrationCancelledRef.current = true` 后，漏了 `= false` 重置（`handleSelectTerrain` 有这行），导致首次点击地形时自己被取消

**代码**: `components/ExplorerApp.tsx`

**验证**: 需要 Vercel 部署后测试

---

## 2. 点击地点不播报

**问题**: 修复 1 之后，点击全国地形（如秦岭），飞行完成但完全不播报

**根因**: `handleSelectFeature` 开头设 `narrationCancelledRef.current = true` 取消旧会话，但缺少 `= false` 重置。首次点击地形（没有旧会话可取消），async 函数飞行结束后检查到 `cancelled === true` 直接 return，自动播报永远不会启动。

**修复**: 在取消旧会话后加 `narrationCancelledRef.current = false;`

**代码**: `components/ExplorerApp.tsx`

**验证**: 需要部署后测试

---

## 3. 地图位置不准——地球曲率

**问题**: 点击地形后，看到地球曲率，地貌不占主体，定位位置偏离

**日志证据**:
```
[AutoCamera] 秦岭: target=[107.76, 33.95] range=1221km
Camera actual position: [107.7600, 33.9500] height=1225096m (1225km)
```

**根因**: `computeCameraFromPolygon/Ridge` 用 `max(spanLon, spanLat) * 111 * 系数` 计算 range。对长条形地貌（如秦岭 spanLon=1018km, spanLat=259km），maxSpan 取的是长度而非宽度，导致 range=1221km，从太空看一条细线。

**四种 range 策略计算结果**:

| 地形 | 1.maxSpan | 2.minSpan | 3.geometric | 4.arithmetic |
|------|-----------|-----------|-------------|--------------|
| 秦岭 | 1222km | 311km | 617km | 767km |
| 祁连山 | 1147km | 545km | 792km | 846km |
| 四川盆地 | 744km | 560km | 645km | 652km |
| 柴达木盆地 | 1054km | 413km | 659km | 734km |
| 云贵高原 | 1500km(上限) | 996km | 1228km | 1500km(上限) |

**临时修复**: 把两个 range 公式统一改为固定 `300_000`（300km），保持 target/heading/pitch 完全不变。作为 A/B 测试。

**代码**: `lib/auto-camera.ts`

**验证**: 部署后秦岭/祁连山/四川盆地/柴达木盆地/云贵高原 height 应该 ≈300km

---

## 4. 发现两套高度系统同时存在

**分析**:
- `handleSelectTerrain`（新疆地形）→ `flyToTerrainAndWait(terrain)` → `viewHeightForTerrain(terrain, terrain.cameraHeight)` → 命中 `TERRAIN_VIEW_HEIGHTS` → 高度 5~16km ✅
- `handleSelectFeature`（全国地形）→ `flyToTerrainAndWait({...cameraHeight: range})` → `viewHeightForTerrain` 检查 `terrain.category` → **undefined** → fallback 到 range（1221km）→ 从未命中 `TERRAIN_VIEW_HEIGHTS` ❌

**根因**: `handleSelectFeature` 传给的 terrain 对象没有 `category` 字段，`viewHeightForTerrain` 永远不会匹配 `TERRAIN_VIEW_HEIGHTS`。

**结论**: `TERRAIN_VIEW_HEIGHTS` 和 `viewHeightForTerrain` 这两套系统从未被使用过。真正问题还是 `auto-camera.ts` 的 range 公式。

---

## 5. Terrain Debug Mode — 调试工具

**问题**: 点击地形后无法判断是"飞错地方"、"边界错误"还是"FOI 偏移"。所有 15 个全国地形没有边界可视化。

**创建**: `CesiumMap.tsx` 中新增 `debugBoundaries(id)` 方法，在 `CesiumMapHandle` ref 上。

**功能**:
- 清除旧的 debug 实体
- 如果有 FOI：画红色 billboard 十字（256x256 Canvas 图标，scale 3x）+ 标签
- 如果有 geometryCoords：画红色 polyline/polygon（3D 空间，不 clampToGround，不贴地形）
- 计算 Camera Target + range + source，画黄色 billboard 十字 + 标签
- console 输出 `[Debug] 地形名: source=..., target=[lon,lat], range=xxx km`

**关键修改历程**:
1. 第一次：用 `point` 实体 → 被 terrain clamp 吃掉，不可见
2. 第二次：去掉 `clampToGround`，加大 pixelSize → 仍然不可见
3. 第三次：改用 `billboard`（永远正对相机）+ `heightReference: NONE`（悬浮 500m）+ Canvas 绘制的 256x256 大十字图标 → 应该可见

**绑定问题**:
- 初始 `window.debugCesium.debugBoundaries` 指向一个旧函数（遍历 ALL_FEATURES 画顶点，完全忽略参数）
- 删除旧函数，不再暴露到 `window.debugCesium`
- 改为 `mapRef.current?.debugBoundaries(feature.id)` 在 ExplorerApp 中自动调用

**调用点**:
- `handleSelectFeature` 中 `flyToTerrainAndWait` 完成后自动调用
- `handleSelectTerrain` 中 `flyToTerrainAndWait` 完成后自动调用

**代码**: `components/CesiumMap.tsx`

---

## 6. 15 个全国地形的 Camera 来源

| 地形 | 类型 | 有 FOI? | 来源 | Range |
|------|------|---------|------|-------|
| 秦岭 | mountain_system | ✅ | AutoCamera(Ridge) | 300km |
| 祁连山 | mountain_system | ✅ | AutoCamera(Ridge) | 300km |
| 太行山 | mountain_system | ❌ | CameraGeometry (manual) | 300km |
| 大兴安岭 | mountain_system | ❌ | CameraGeometry (manual) | 400km |
| 横断山脉 | mountain_system | ❌ | CameraGeometry (manual) | 350km |
| 喜马拉雅 | mountain_system | ❌ | CameraGeometry (manual) | 500km |
| 青藏高原 | plateau | ❌ | CameraGeometry (manual) | 1500km ← |
| 黄土高原 | plateau | ❌ | CameraGeometry (manual) | 600km ← |
| 内蒙古高原 | plateau | ❌ | CameraGeometry (manual) | 1200km ← |
| 云贵高原 | plateau | ✅ | AutoCamera(Polygon) | 300km |
| 四川盆地 | basin | ✅ | AutoCamera(Polygon) | 300km |
| 柴达木盆地 | basin | ✅ | AutoCamera(Polygon) | 300km |
| 东北平原 | basin | ❌ | CameraGeometry (manual) | 1000km ← |
| 华北平原 | basin | ❌ | CameraGeometry (manual) | 800km ← |
| 长江中下游平原 | basin | ❌ | CameraGeometry (manual) | 800km ← |

**有 FOI 的 5 个**: 已通过 AutoCamera + fixed 300km 修复
**没有 FOI 的 10 个**: 走手工 cameraGeometry，其中 7 个 range 在 500~1500km

---

## 7. 地形边界数据源调研

**结论**: 不存在单一的权威 Open API 提供中国地貌边界 GeoJSON。

**推荐方案**:
- **边界数据**: Natural Earth 10m Geography Regions（公共领域，已在使用）
- **盆地边界**: HydroSHEDS（~1km 精度，免费非商）
- **山脉边界**: OSM mountain_range relations（覆盖不全）
- **官方数据**: 地理数据云（resourcedata.cn，中国权威）
- **工具**: QGIS（验证/编辑边界）、Mapshaper CLI（批量简化 GeoJSON）、Cesium Sandcastle（测试 Camera 位置）

---

## 8. 两个飞行链路不一致

**新疆地形**: `handleSelectTerrain` → `TERRAIN_VIEW_HEIGHTS` → 5~16km → 正常
**全国地形**: `handleSelectFeature` → `cameraGeometry` / `AutoCamera` → 300~1500km → 部分不正常

**核心差异**: 新疆走 `TerrainPoint` 有 `category` 字段；全国走 `GeographicFeature` 通过 `handleSelectFeature` 传给 `flyToTerrainAndWait` 时没有 `category`。

---

## 9. 长江中下游平原/青藏高原飞错位置 — 数据而非 Camera 问题

**问题**: 点击"青藏高原"飞到了新疆区域；点击"长江中下游平原"飞到了华北

**分析**: 这与 Camera range/pitch 无关。这是 target 坐标本身错误。

**根因判断**: `getTerrainFOI(terrainId)` 返回的 `primary.lon/lat` 来自手工维护的 `foi-registry.ts` 配置表。如果某个地形没有 FOI，fallback 到 `feature.cameraGeometry.target`。只要配置表里一个坐标写错（或写成了另一个地形的坐标），整个飞行就飞错。

**验证方法**: 在 `handleSelectFeature` 中打印 console.table：
```js
console.table({
  feature: feature.name,
  foiLon: terrainFOI?.primary.lon,
  foiLat: terrainFOI?.primary.lat,
  cameraLon: target?.[0],
  cameraLat: target?.[1],
  range: range ? (range / 1000).toFixed(0) + 'km' : 'N/A',
  source: source
});
```

测试 4 个地形：青藏高原、长江中下游平原、黄土高原、内蒙古高原。如果打印出：
```
青藏高原 →  foi=[87,46]  → 新疆（正确应该是 [89.6,32] 左右）
```
就已经破案。

**关键**: 地图团队在调试"怎么看见调试点"，真正问题是"调试点本身在错误的省份"。先在控制台打印经纬度确认坐标，再决定是否继续做 billboard 调试。

---

## 10. 停止语音播报后"停几秒又继续" — 三种可能

从用户反馈看：点击停止 → 真的停了 → 过几秒又开始播报。

三种可能：

### 情况1：TTS 队列没有清空
如果用 Web Speech API：`speechSynthesis.cancel()` 应该清空队列。很多项目只做了 `isSpeaking = false` 或 `speechSynthesis.pause()`。结果暂停后后面队列还在，自动恢复。

### 情况2：Narration 被重新触发
停止按钮只是 `setNarrationCancelled(true)`。但 `handleSelectFeature()` 后面还有：
```
await flyTo()
await loadTiles()
speakLessonWithHighlight()  ← 重新触发
```
异步流程没结束，又进入 `speakLessonWithHighlight`。

### 情况3：React 状态闭包
`let narrationCancelled = false`。点击停止时 `narrationCancelled = true`，但异步函数里拿到的是旧值（闭包问题）。

**验证方法**:
- 在 `stopNarration()` 里打印 `[Narration] STOP CLICKED`
- 在 `speakLessonWithHighlight()` 入口打印 `[Narration] START cancelled=`
- 在 `speechSynthesis.cancel()` 之后打印 `[Narration] speech cancelled`
- 如果停止后又看到 `[Narration] START false`，就是被重新触发了

**注意**: 之前修复 1 和 2 时已经在 `handleSelectFeature` 和 `handleSelectTerrain` 中加了取消检查。但如果还有"停几秒又继续"的问题，可能根因在 `speakAndWait` / `speech.ts` 中的 TTS 队列管理，而非 `narrationCancelledRef`。

---

## 待办 / 明天继续

- [ ] 部署后验证"停止语音后自动恢复"是否修复
- [ ] 部署后验证"点击全国地形不播报"是否修复
- [ ] 部署后验证 300km range 在 Cesium 中的视觉效果（地球曲率是否消失）
- [ ] 验证 `debugBoundaries` billboard 是否可见（当前用 256x256 大十字 + heightReference NONE）
- [ ] 如果 debugBoundaries 不可见，在控制台手动输入 `mapRef.current.debugBoundaries('qinling')` 测试
- [ ] 确认没有 FOI 的 10 个全国地形的 target 坐标是否正确（如青藏高原 target [90, 33] 是否偏北）
- [ ] 为没有 FOI 的 10 个地形添加 FOI 注册（foi-registry.ts）
- [ ] 从 Natural Earth 10m 导出所有全国地形的 GeoJSON 边界到 public/data/gis/exports/
- [ ] 统一 `handleSelectFeature` 中 terrain 对象传递 `category` 字段
- [ ] 考虑把 `TERRAIN_VIEW_HEIGHTS` 的 key 与 `featureType` 对齐
