# CLAUDE.md

> Project instructions for Claude Code sessions.
> Read this file first before making any changes.

---

## 产品定位

**Flight Geography Explorer** — 飞机视角地貌认知系统

不是 GIS 仪表盘，不是飞行模拟器，不是游戏。

是一个让用户从飞机舷窗视角，认知地球地貌的纪录片式 Web 应用。

## 范围

- **已有**: 中国全境地貌（88 个）+ 澳大利亚（18 个），中英双语
- **进行中**: 美国、英国，之后按旅游热度扩展其它安全国家
- **远期**: 全球地貌探索

区域由 `lib/regions.ts` 驱动，注册表条目按 `regionId` 归属；顶栏区域切换器 `RegionSelector`。

## 技术栈

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- CesiumJS 1.141 (3D 地球)
- TailwindCSS 4
- Edge TTS (edge-tts-universal)

## 核心架构

### 数据模型

```
TerrainEntity          — 地形实体（天山、秦岭、四川盆地等）
GeometryRecord         — 几何记录（Polygon, LineString, RidgeCorridor）
FeatureOfInterest (FOI) — 讲解兴趣点（太白山、成都、格尔木等）
Story                  — 故事内容（seeing, formation, history, observation）
KnowledgeLink          — 知识关联（地形 ↔ 知识点）
ProvenanceRecord       — 数据溯源（来源、精度、获取时间）
```

### 关键文件

```
components/
  ExplorerApp.tsx        — 主编排器（状态 + 讲解/航线/语音链路 + 组合下面几个 UI）
  CesiumMap.tsx          — 3D 地球、Camera 系统、地形区域抬升高亮（hover/选中）、INTRO_VIEW 初始构图
  CesiumOverlayLabels.tsx — HTML 地形标签层（zoom 自适应、hover/focus 高亮）
  IntroOverlay.tsx       — 初始编辑式标题卡（localStorage 记住已看过）
  IndexRail.tsx          — 左侧地貌目录（窄条 → 浮出分类/地形两级）
  ReadingPanel.tsx       — 右侧单一阅读面板（卡片态 ⇄ 文章态，逐句高亮）
  JourneyBar.tsx         — 底部航线胶片条
  StructuredLesson.tsx   — 6 板块讲解渲染（editorial 衬线排版）

lib/
  terrain-registry.ts    — 【单一真实源】88 个地形的位置/锚点/范围/走向/中英名
  terrain-camera.ts      — 数据驱动相机推导 computeTerrainCamera()
  terrain-content.{zh,en}.ts — 权威 6 板块讲解内容（中/英）；terrain-content.ts = 索引
  terrain-lesson.ts      — resolveLesson(id, lang)：一处决定用哪份讲解（内容→stories→兜底）
  terrain-label-registry.ts — 标签（由 terrain-registry 生成，含 nameEn）
  terrain-label-theme.ts — 标签视觉 token；LABEL_FONT_FAMILY = 通用系统字体栈
  lesson.ts              — 板块顺序 / 标题（中英）/ 拼接
  routes.ts              — 4 条真实商业航线（data/routes/*.json），机场航点 + 地形航点
  route-narration.ts     — 每条航线一段 ~2.5 分钟连贯解说（中英），CesiumMap.flyRoute 播放
  i18n.ts                — UI 国际化；getTerrainName 查注册表
  i18n-stories.ts        — 早期 6 个双语故事（resolveLesson 的次级来源）
  terrain.ts             — 新疆地形注册（坐标由 terrain-registry 覆盖）
  speech.ts              — TTS 系统（Edge TTS + 浏览器回退，跟随 language）

features/
  china-core-features.ts — 全国核心地形定义
  xinjiang-core-features.ts — 新疆地形定义
  types.ts               — GeographicFeature 类型
```

## 当前阶段

**地图/交互/双语已完成**：106 个地形注册表（中国 88 + 澳大利亚 18）+ 数据驱动相机 +
标签分级（双语）+ 地形抬升高亮 + 自然语音（跟随语言）+ 逐句高亮 + 真实航班航线 +
纪录片编辑式界面。

**多国扩展进行中**：新增国家的步骤 =
① `lib/terrain-registry.ts` 加条目（`regionId`）②`lib/regions.ts` 加/开启 region
③`lib/terrain-content.{zh,en}.ts` 写双语 6 板块 ④`lib/terrain-label-registry.ts`
`IMPORTANCE_BY_ID` 补重要度 ⑤`check-terrain-camera.ts` 通过。

**权威文字内容 — 进行中**：讲解改为 6 个通用板块（`TerrainLesson`，顺序见 `lib/lesson.ts`
`LESSON_SECTION_ORDER`）：
`seeing 概述` → `formation 地貌特征` → `observation 从空中怎么看` →
`distinguish 与相似地形的区分` → `concept 地理知识（为何算这类地形/常见误区）` →
`history 历史与人文`。
内容写在 `lib/terrain-content.ts`（`getTerrainContent(id)`，按注册表 id 索引），
依据中国国家地理 / 中科院 / 自然资源部等公认地理事实总结，非文学化旁白、非凭空生成。
已收录 34 个（20 个一级地形 + 长白山/南岭/贺兰山/河西走廊/长江三峡/雅鲁藏布大峡谷/
青海湖/鄱阳湖/海南岛/台湾岛等）。未收录地形面板显示 `PLACEHOLDER_LESSON` 占位。
内容优先级：`getTerrainContent(id)`（zh-CN）> `i18n-stories` 英译 > 新疆 json `lesson` /
`china-core` story > 占位。

## Camera 推导链路

```
TerrainEntry（registry: 锚点 landmark + bbox + axis + viewFrom）
  → computeTerrainCamera()  推导 { target, heading, pitch, range }
  → flyToTerrainAndWait(payload, { heading, pitch })
  → Cesium flyTo
```

- **锚点 landmark** = 该地形最标志性的地物（主峰/主湖/枢纽城市），相机对准这里。
- **heading/pitch/range** 全部由 bbox 规模 + axis 走向推导，不写死。
  仅 `viewFrom`（相机在锚点的哪一侧，编辑决策）可按地形显式给定。
- **相机位置 target** = 从锚点沿 viewFrom 反方向按几何偏移，使锚点落在画面中部。
- 超大地形（青藏/昆仑/喜马拉雅）：`showKm` 封顶 → 聚焦锚点周边代表性区段。
- 自检: `node --experimental-strip-types scripts/check-terrain-camera.ts`

调参常量集中在 `lib/terrain-camera.ts` 顶部（FRAME_HALF_ANGLE_DEG / PITCH_* /
SHOW_KM_MAX / RANGE_MAX / LANDMARK_SCREEN_FRAC），视觉取景需在真实浏览器中校准。

## 地形集 / 标签 / 区域高亮

- **`TERRAIN_REGISTRY`（88 个）= 单一真实源**：全国主要地貌（山脉/高原/盆地/平原/丘陵/
  峡谷/河谷/湖泊/沙漠/岛屿）。分类见 `TerrainCategory`。坐标逐个查权威来源，`source` 留痕。
- **侧边栏 + 地图标签都由注册表驱动**：`ExplorerApp.ALL_FEATURES` = `TERRAIN_REGISTRY.map`；
  `handleSelectById(id)` 统一入口（新疆 json / china-core 有内容则讲解，否则占位）。
- 精确边界：`scripts/extract-ne-landforms.mjs` 从 `data/gis/ne_10m_geography_regions_polys`
  提取 42 个 → `public/data/gis/exports/{id}.geojson`。`CesiumMap.TERRAIN_RING_FILES` 列出这 42
  个 id，其余用 bbox 八边形。
- `CesiumOverlayLabels.tsx`：HTML 标签。
  - `projectToScreen` 用 `EllipsoidalOccluder` 剔除地球背面的点（否则缩小看地球会堆叠）。
  - zoom ≤ 3 不显示；importance→LOD 1:1，按 zoom 分级（大陆/国家/区域/POI）逐级展开。
  - `dynamicFontSize` 随 zoom 缩放，下限 0.8。字体 `LABEL_FONT_FAMILY`（通用系统字体栈）。
- **地形区域抬升高亮**（`CesiumMap.tsx`，每个地形两个多边形）：
  - `pick`：贴地透明，仅作 `scene.pick` 命中目标。
  - `lift`：`perPositionHeight` 多边形，顶面**跟随真实地形高程**（首次交互时
    `sampleTerrainMostDetailed` 采样并缓存），hover/focus 时整块 ease 抬升 ≈4.5km / 7km；
    侧壁 = 地块切面。材质极淡（α .11 / .17，暖白 / 琥珀），保留原色。`tickTerrainRegions` rAF 推进。
  - **不要用 `polygon.outline`** —— 会懒加载 `createPolygonOutlineGeometry` worker，网络异常时崩溃。
  - 配色/抬升高度/透明度常量在 `CesiumMap.tsx` 顶部（`REGION_*`）。
- hover 走 `ScreenSpaceEventHandler` MOUSE_MOVE → `scene.pick` 取 `terrainId`；
  点击/跳转走 `focusTerrain(id)`；标签同步高亮（琥珀胶囊 / 白色描边）。

## 语音播报

- `app/api/tts/route.ts`：Edge TTS，默认 `zh-CN-XiaoxiaoNeural`（最自然的中文女声），
  `PROSODY` 常量控制 rate/pitch（大幅放缓会有机械感，保持 -6% 左右）。
- 逐句高亮：Edge TTS 成功 → `startHighlightWithTiming`（word boundary 精确同步）；
  失败回退浏览器 TTS → `speakBrowserAndWait` 在 `utterance.onstart` 触发 `onPlaying`
  （不是等播完），`startHighlightSections` 按字数估时推进。

## 航线飞行

- 每条航线一次 ≤3 分钟：`CesiumMap.flyRoute` 把镜头立即摆到起点机场上空 → 立刻开始播
  `route-narration.ts` 里这条航线专属的连贯解说 → 同时镜头沿航点匀速飞完
  （总时长 `ROUTE_FLIGHT_SEC ≈165s`，`LINEAR_NONE` 缓动）。
- **不再逐个航点念地形讲解**。`onFlyoverWaypoint` 只把当前飞越的地形名同步到右侧面板，
  面板显示整条解说 + 逐句高亮。
- `RouteFlyCallbacks`：`onNarrate`（返回 Promise，播解说）/ `onFlyoverWaypoint` / `onComplete` / `onCancelled`。
- 弃用：`flyLeg` / `flyToRouteOverview` / `legDurationSec`；`FlightRoute` 的
  `minLegDurationSec` 等逐段计时字段改为可选、不再读取。

## 禁止事项

以下内容不再维护:

- `cameraGeometry`（china/xinjiang-core-features 中的字段，已停止读取）
- `lib/foi-registry.ts` / `lib/auto-camera.ts`（仅 CesiumMap debug 残留引用，待清理）
- Feature hoverGeometry/RidgeCorridor 渲染、`data/gis/exports/*.geojson` 边界线
  （geojson 现只用于地形区域抬升体的形状，不再画常驻边界）
- 手工 `target` / `heading` / `pitch` / `range`
- 逐个修补秦岭、大兴安岭等 Camera 参数
- 分散在 data/*.json、cameraGeometry、terrain-label-registry 的重复坐标
  → 统一到 `lib/terrain-registry.ts`
- 继续研究 GMBA / HydroBASINS 数据源（已验证完成）

## 代码分析工具

本项目使用 `codeatlas` 进行代码分析和架构理解。

```bash
# 安装（一次性）
cd ~/Github_Projects/codeatlas && pip install -e . --break-system-packages

# 索引项目
codeatlas index . --verbose

# 常用命令
codeatlas stats                          # 项目统计
codeatlas symbols <name>                 # 查找符号
codeatlas callers <function>             # 谁调用了这个函数
codeatlas callees <function>             # 这个函数调用了谁
codeatlas chain <function> --depth 3     # 调用链
codeatlas deps <file>                    # 文件依赖
codeatlas graph <name> --type calls      # Mermaid 调用图
```

详细说明见 `~/Github_Projects/codeatlas/README.md`

## 架构文档

- `docs/architecture-metrics.md` — 项目健康度指标、模块耦合度、Architecture Smells（codeatlas 自动生成）
- CesiumMap 六维分析 → `codeatlas file components/CesiumMap.tsx`
- 完整架构报告 → `codeatlas stats && codeatlas deps components/ExplorerApp.tsx --depth 2`

编排路线参考：[[architecture-intelligence-direction]]

---
## 开发规范

- 不要在未完成审计前修改 Camera 逻辑
- 不要在未验证数据源前导入地形数据
- 每完成一个 Phase，先更新文档再提交代码
- 业务代码和文档分开提交
- 修改 codeatlas 后先跑 `cd ~/Github_Projects/codeatlas && pytest -q && ruff check codeatlas/` 再 push
