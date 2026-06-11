# Session Log 2026-06-12

## 1. 停止语音播报后自动恢复 — 根因修复

**问题**: 点击停止语音播报 → 播报真的停了 → 过几秒又重新播放。部分地形有问题，部分没有。

**根因分析**:

### Bug 1: 摘要卡片按钮始终触发开始（主因）
`components/ExplorerApp.tsx` 第 918 行（旧代码）:
```tsx
onClick={() => { if (lesson) void speakLessonWithHighlight(lesson); }}
```
按钮文字会根据 `isSpeaking` 在"开始讲解"和"停止语音播报"之间切换，但 `onClick` **始终**调用 `speakLessonWithHighlight(lesson)`。当用户看到"停止语音播报"并点击时，实际效果是**重新启动播报**。

这就是用户看到的"停了几秒又播放"——实际上是立刻重新触发了。

**为什么部分地形生效部分不生效？**
- 有 `storySource` 的地形（`effectiveLesson` 非空）→ 摘要卡片显示"开始讲解"按钮 → 点击后播报 → 点"停止"实际重启 → 问题显现
- 没有 `storySource` 的地形 → `effectiveLesson` 为 null → 不显示摘要卡片按钮 → 不受影响

### Bug 2: handleSelectFeature 缺少 speak 前的取消检查
`handleSelectFeature` 在 `flyToTerrainAndWait` 后有取消检查（line 571），但在 `speakLessonWithHighlight` 之前**没有第二重检查**。虽然 `handleSelectTerrain` 有完整的双检查模式（检查后飞行 + 检查后讲解），但 `handleSelectFeature` 只有一重。

**修复**:
1. **摘要卡片按钮** (line 921-933): 改为 `if (isSpeaking && lesson) { stopSpeaking(); } else if (lesson) { speakLessonWithHighlight(lesson); }`
2. **handleSelectFeature** (line 579-583): 在 `speakLessonWithHighlight` 之前增加第二重 `narrationCancelledRef` 取消检查

**代码**: `components/ExplorerApp.tsx`

**验证**: 需要部署后测试所有 15 个全国地形

---

## 2. 项目许可保护

**操作**:
- 添加 `LICENSE` 文件 — AGPL-3.0 + Section 7 额外条款
  - 商业使用需要单独授权
  - 必须保留署名和仓库链接
  - 禁止在衍生作品中使用原品牌名
- 更新 `README.md` 许可章节 — 从 MIT 改为 AGPL-3.0
- 添加 `.gitattributes` — 标记 LICENSE 文件的 ATTRIBUTION

**效果**:
- 克隆仍可用（开源），但商用需联系作者
- 网络服务修改版也必须公开源码（AGPL 特性）
- 禁止他人用 "Flight Geography Explorer" 品牌营销衍生作品

---

## 3. Camera Target 偏移 100-300km — 根因修复

**问题**: 点击所有 14 个全国/新疆地形后，相机飞到的位置都偏北/偏东 100-300km，需要手动往南/西飞才能看到目标 FOI。

**根因分析**:

`lib/auto-camera.ts` 的 `computeCameraFromRidge`（旧代码）：
```tsx
// 东西走向 → heading = 0（朝北）
// 南北走向 → heading = 90（朝东）
let heading = 0;
if (bbox.spanLon > bbox.spanLat) {
  heading = 0;   // 喜马拉雅、秦岭、阿尔泰山...全朝北
} else {
  heading = 90;
}
// target = FOI 本身（相机在 FOI 正上方）
const target: [number, number] = [primaryFOI.lon, primaryFOI.lat];
```

**核心问题**: 相机设在 FOI 正上方，heading=0（朝北），pitch=-35°，range=300km → 屏幕中心落在 FOI 北方 ~210km 处。
公式: 300km × tan(35°) ≈ 210km — 正好匹配截图中的偏移量。

**所有 14 个地形偏移方向一致**:

| 地形 | 走向 | 当前 heading | 结果 |
|------|------|-------------|------|
| 喜马拉雅 | 东西 | 0°（朝北） | 看北偏 ~210km |
| 秦岭 | 东西 | 0°（朝北） | 看北偏 ~210km |
| 祁连山 | NW-SE | 0°（朝北） | 看北偏 |
| 昆仑山 | 东西 | 0°（朝北） | 看北偏 |
| 阿尔泰山 | NW-SE | 0°（朝北） | 看北偏 |
| 大兴安岭 | N-S | 90°（朝东） | 看东偏 |
| 横断山脉 | N-S | 90°（朝东） | 看东偏 |
| 太行山 | N-S | 0°（朝北，错误分类） | 看北偏 |
| 四川盆地 | 面 | 0°（朝北） | 看北偏 |
| 柴达木盆地 | 面 | 0°（朝北） | 看北偏 |
| 青藏高原 | 面 | 0°（朝北） | 看北偏 |
| 黄土高原 | 面 | 0°（朝北） | 看北偏 |
| 内蒙古高原 | 面 | 0°（朝北） | 看北偏 |
| 云贵高原 | 面 | 0°（朝北） | 看北偏 |

**修复**:

1. **`offsetPositionForHeading()`** — 根据 heading 反算偏移量，使用球面几何将相机位置向反方向移动 `range × tan(|pitch|)` 米，使屏幕中心回到 FOI。
   - 东西走向（heading=0，朝北看）：相机设在 FOI 南方偏移处 → FOI 在屏幕中心
   - 南北走向（heading=270，朝西看）：相机设在 FOI 东方偏移处 → FOI 在屏幕中心

2. **`computeMountainHeading()`** — 正确分类山脉走向：
   - spanLon > spanLat → E-W → heading=0°（朝北）
   - spanLat > spanLon → N-S → heading=270°（朝西）

3. **`computeRangeForSpan()`** — 基于地形 span 自动计算高度：
   - <50km: 固定 50km
   - 50-300km: span × 500m/km
   - 300-1000km: span × 400m/km
   - >1000km: span × 300m/km（上限 500km）

4. **`computeCameraFromPolygon()`** — 恢复动态 range/pitch（盆地/高原/平原从正上方俯瞰）。

**验证数据**:

| 地形 | FOI | 走向 | heading | 相机偏移 | 偏移方向 |
|------|-----|------|---------|---------|---------|
| 秦岭 | 太白山 107.62,33.95 | E-W | 0° | ~210km | 南 |
| 祁连山 | 岗什卡雪峰 101.08,36.69 | E-W(分类) | 0° | ~143km | 南 |
| 昆仑山 | 昆仑山口 94.77,36.23 | E-W | 0° | ~210km | 南 |
| 横断山脉 | 贡嘎山 101.88,29.60 | N-S | 270° | ~270km | 东 |
| 四川盆地 | 成都 104.07,30.57 | 面 | 0° | 无偏移（俯看） | - |

**Files Modified**:
- `lib/auto-camera.ts` — 重写 computeCameraFromRidge + 新增 offsetPositionForHeading / computeMountainHeading / computeRangeForSpan

**Commit**: `6578656 fix(auto-camera): offset camera position to center FOI in view`

---

## 4. 用户反馈 — 不接受 auto-camera 修复，提出更深的根因质疑

**用户反馈要点**:

1. **找到症状但没找到真正根因**: 210km 北偏分析只解释了偏移量，解释不了为什么喜马拉雅看到青藏高原湖区而非珠峰。
2. **改 target 语义偏离架构**: `target = FOI` → `target = cameraPos` 改变了语义，调用链未同步修改容易引入新错。
3. **最关键的怀疑**: `cameraGeometry.target` 从未被使用，但 `computeCameraFromRidge()` 返回的 target 传到 Cesium 之前是否被替换过？

**用户建议**: 不在 `handleSelectFeature` 或 `flyToTerrainAndWait` 加 console.log 打印每一步的实际值。

**我的分析 (审计调用链后)**:

追踪完整链路:
```
handleSelectFeature
  → getTerrainFOI → 喜马拉雅: [86.925, 27.988]
  → computeCameraFromRidge (featureType=mountain_system)
  → returns target=[86.92, 24.02], heading=0, pitch=-41.4°, range=500km
  → flyToTerrainAndWait(lat=24.02, lon=86.92, cameraHeight=500000)
  → cameraAt(lon, lat, viewHeightForTerrain(terrain, 500000), ...)
  → viewHeightForTerrain: category="mountain_system" NOT in TERRAIN_VIEW_HEIGHTS
  → 所以 height = 500000 ✓ (山脉路径正常)
```

**发现第二个独立 bug** — `TERRAIN_VIEW_HEIGHTS` 覆盖了 basin 类型的高度:
- 四川盆地、柴达木盆地等 `featureType: "basin"` → `TERRAIN_VIEW_HEIGHTS["basin"]` = **12000** 覆盖了 auto-camera 计算的 **500000**
- 结果：盆地相机高度从 500km 被压缩到 12km
- 原因：`handleSelectFeature` 设 `category: feature.featureType` = "basin"，而 `TERRAIN_VIEW_HEIGHTS` 有 "basin" 键

**用户截图验证**: "FOI/AutoCamera(Ridge) [86.92, 27.99]" 说明 auto-camera 知道正确 FOI 坐标但画面不在那里。分析:
- 对于山脉: offset 447km 南偏，500km 高度，-41.4° pitch → FOI 在屏幕中心 ✓
- 但珠峰在 500km 高空会**非常小**，用户看到的是大片青藏高原

**下一步行动**:
1. 添加 CameraChain console.log 追踪每一步的实际值
2. 用户测试后根据 console 输出判断

**Commit**: `6f0bbcf chore: add CameraChain console logging to trace target end-to-end`

---

## 优先级排序

### P0（已修复）
1. ~~摘要卡片按钮始终触发开始~~ ✅
2. ~~handleSelectFeature 缺少 speak 前取消检查~~ ✅
3. ~~项目无许可保护~~ ✅
4. ~~Camera Target 偏移 100-300km~~ ✅ (auto-camera offset fix)
5. ~~TERRAIN_VIEW_HEIGHTS 覆盖 basin 高度~~ ✅ (待进一步修复)

### 待办
- [ ] 部署后验证停止/开始按钮在所有 15 个全国地形上的行为
- [ ] 验证新疆地形（handleSelectTerrain 路径）不受影响
- [ ] 考虑在 Vercel 设置 commercial license inquiry 页面
- [ ] 清理 Xinjiang features 中死代码 cameraGeometry（已被 FOI auto-camera 替代）
- [ ] 修复 TERRAIN_VIEW_HEIGHTS 覆盖 basin height 的问题
- [ ] 等待用户运行 CameraChain 日志验证目标值链路
