# CLAUDE.md

> Project instructions for Claude Code sessions.
> Read this file first before making any changes.

---

## 产品定位

**Flight Geography Explorer** — 飞机视角地貌认知系统

不是 GIS 仪表盘，不是飞行模拟器，不是游戏。

是一个让用户从飞机舷窗视角，认知地球地貌的纪录片式 Web 应用。

## 范围

- **当前**: 中国全境地貌（新疆 + 全国核心地形）
- **近期**: 亚洲扩展（澳大利亚等）
- **远期**: 全球地貌探索

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
  ExplorerApp.tsx        — 主编排器
  CesiumMap.tsx          — 3D 地球、Camera 系统、地形区域抬升高亮（hover/选中）
  CesiumOverlayLabels.tsx — HTML 地形标签层（zoom 自适应、hover/focus 高亮）
  NarrationPanel.tsx     — 右侧面板（i18n 支持）
  StructuredLesson.tsx   — 讲解内容渲染

lib/
  terrain-registry.ts    — 【单一真实源】47 个地形的位置/锚点/范围/走向
  terrain-camera.ts      — 数据驱动相机推导 computeTerrainCamera()
  terrain-label-registry.ts — 标签（由 terrain-registry 生成，位置=锚点）
  terrain-label-theme.ts — 标签视觉 token；LABEL_FONT_FAMILY = 通用系统字体栈
  i18n.ts                — UI 国际化
  i18n-stories.ts        — 讲解故事翻译
  terrain.ts             — 新疆地形注册（坐标由 terrain-registry 覆盖）
  speech.ts              — TTS 系统（Edge TTS + 浏览器回退）

features/
  china-core-features.ts — 全国核心地形定义
  xinjiang-core-features.ts — 新疆地形定义
  types.ts               — GeographicFeature 类型
```

## 当前阶段

**Phase B — FOI Validation**

目标: 针对 5 个样本地形，建立 3~5 个 FeatureOfInterest，验证 FOI → Camera → Cesium 是否正确。

样本地形:
- 秦岭 (mountain_system)
- 祁连山 (mountain_system)
- 四川盆地 (basin)
- 柴达木盆地 (basin)
- 云贵高原 (plateau)

Geometry 验证已完成: Natural Earth `ne_10m_geography_regions_polys` (5/5 地形 Polygon 存在)

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

## 地形标签 / 区域高亮

- 标签数据全部来自 `TERRAIN_REGISTRY`（47 个），位置 = 锚点，无其它标记源。
- `CesiumOverlayLabels.tsx`：HTML 标签。
  - `projectToScreen` 用 `EllipsoidalOccluder` 剔除地球背面的点（否则缩小看地球会堆叠）。
  - zoom ≤ 3 不显示；importance→LOD 1:1，按 zoom 分级（大陆/国家/区域/POI）逐级展开。
  - `dynamicFontSize` 随 zoom 缩放，下限 0.8。
- `CesiumMap.tsx` 地形区域：每个地形两个多边形——
  - `pick`：贴地、透明，仅作 `scene.pick` 命中目标（形状用 GeoJSON 或 bbox 八边形）；
  - `lift`：同形状的挤出体，hover/focus 时 `extrudedHeight` 动画抬升
    （白色 ≈9km / 琥珀 ≈16km），像整块地形升起。动画由 `tickTerrainRegions` rAF 推进。
  - 形状优先 `data/gis/exports/{id}.geojson`（13 个），否则 bbox 八边形。
  - 配色/抬升高度/透明度常量在 `CesiumMap.tsx` 顶部（`REGION_*`）。
- hover 走 `ScreenSpaceEventHandler` MOUSE_MOVE → `scene.pick` 取 `terrainId`；
  点击/跳转走 `focusTerrain(id)`；标签同步高亮（琥珀胶囊 / 白色描边）。
- 字体：`lib/terrain-label-theme.ts` 的 `LABEL_FONT_FAMILY`（通用系统字体栈）。

## 语音播报

- `app/api/tts/route.ts`：Edge TTS，默认 `zh-CN-XiaoxiaoNeural`（最自然的中文女声），
  `PROSODY` 常量控制 rate/pitch（大幅放缓会有机械感，保持 -6% 左右）。
- 逐句高亮：Edge TTS 成功 → `startHighlightWithTiming`（word boundary 精确同步）；
  失败回退浏览器 TTS → `speakBrowserAndWait` 在 `utterance.onstart` 触发 `onPlaying`
  （不是等播完），`startHighlightSections` 按字数估时推进。

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
