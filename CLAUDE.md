# CLAUDE.md

> Project instructions for Claude Code sessions.
> Read this file first before making any changes.

---

## 产品定位

**Flight Geography Explorer** — 飞机视角地貌认知系统

不是 GIS 仪表盘，不是飞行模拟器，不是游戏。

是一个让用户从飞机舷窗视角，认知地球地貌的纪录片式 Web 应用。

**两种模式**（顶栏切换，`localStorage` 记住 `fge-app-mode`）：
- **学习模式** `study` —— 地形地貌图鉴（默认；下文绝大部分内容都是这条链路，未改动）。
- **旅游出行模式** `travel` —— 城市 / 衣食住行 / 人文习俗 / 出行提示的概览。
  两套内容系统平行、互不影响：travel 只新增文件，study 链路原样保留。

## 范围

- **已有**: 亚洲（中国 84 含新疆 + 日本 26）+ 大洋洲（澳大利亚 22 + 新西兰 30）+
  北美洲（美国 26 + 加拿大 25），中英双语，共 213 个
  - 地形集选取标准与分类定义见 `docs/terrain-taxonomy.md`（T1 骨架 / T2 地貌省 / T3 标志地点；
    分类判据；`settlement` 人文层的收录方法）
- **进行中**: 全球主要地形（按大洲分组，逐国推进，每国 ≥25 个），见
  `docs/superpowers/specs/2026-08-30-world-terrain-expansion-design.md`
- **远期**: 全球地貌探索

**区域 = 大洲**（`lib/regions.ts`：`asia` / `europe` / `africa` / `north-america` /
`south-america` / `oceania`；`DEFAULT_REGION_ID = "asia"`）。注册表条目 `regionId` 填大洲、
`country` 填国家 slug。顶栏 `RegionSelector` 是大洲下拉菜单；`localStorage fge-active-region`
读时把旧值 `china`/`xinjiang`/`australia` 迁移到大洲。
自检：`node --experimental-strip-types scripts/check-regions.ts`（regionId/country 完整性 +
terrainCount 核对）。

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
  StructuredLesson.tsx   — 板块讲解渲染（editorial 衬线排版）；lesson=6 板块 / sections=通用段列表
  ModeToggle.tsx         — 顶栏 学习 / 旅游 切换
  CityMarkers.tsx        — 【旅游模式】地图上的城市点（轮询相机 zoom，按 tier 分级显示）
  TravelPoiMarkers.tsx   — 【旅游模式】选中城市时标注机场 + 攻略提到的地标

lib/
  terrain-registry.ts    — 【单一真实源】地形的位置/锚点/范围/走向/中英名/regionId(大洲)/country（选取标准见 docs/terrain-taxonomy.md）
  regions.ts             — 大洲配置（asia/europe/africa/north-america/south-america/oceania）+ DEFAULT_REGION_ID
  terrain-camera.ts      — 数据驱动相机推导 computeTerrainCamera()
  terrain-content.{zh,en}.ts — 权威 6 板块讲解内容（中/英）；terrain-content.ts = 索引
  terrain-lesson.ts      — resolveLesson(id, lang)：一处决定用哪份讲解（内容→stories→兜底）
  terrain-label-registry.ts — 标签（由 terrain-registry 生成，含 nameEn）
  terrain-label-theme.ts — 标签视觉 token；LABEL_FONT_FAMILY = 通用系统字体栈
  lesson.ts              — 板块顺序 / 标题（中英）/ 拼接
  routes.ts              — 4 条真实商业航线（data/routes/*.json），机场航点 + 地形航点
  route-narration.ts     — 每条航线两套 ~2.5 分钟连贯解说：ROUTE_NARRATION[id].{study,travel}（中英）；
                           getRouteNarration(id, lang, mode)；CesiumMap.flyRoute 播放
  app-mode.ts            — AppMode 类型 + getStoredMode/setStoredMode（localStorage fge-app-mode）
  places-registry.ts     — 【旅游模式单一真实源】城市 CityEntry（经纬度/tier/机场）+ 国家概览
  travel-content.{zh,en}.ts — 【旅游模式】城市 / 国家概览的 6 段 TravelGuide 中英内容
  travel-lesson.ts       — TravelGuide 类型 + resolveTravelGuide(id, lang) + travelGuideToSections
  travel-rail.ts         — 旅游模式左侧目录（当前大洲下按国家分组）
  travel-speak.ts        — 旅游攻略分段合成 + 预取播报编排（首段先出声）
  travel-pois.ts         — 每城市攻略提到的地标概略坐标（POIS_BY_CITY）
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

**地图/交互/双语已完成**：106 个地形注册表（中国 84 + 澳大利亚 22）+ 数据驱动相机 +
标签分级（双语）+ 地形抬升高亮 + 自然语音（跟随语言）+ 逐句高亮 + 真实航班航线 +
纪录片编辑式界面。

**多国扩展进行中**：新增一个国家的地形（学习模式）=
① `lib/terrain-registry.ts` 加条目（`regionId` 填大洲、`country` 填国家 slug）
②该大洲若此前 `available:false` → 改 true；`terrainCount` 由 `check-regions.ts` 核对
③`lib/terrain-content.{zh,en}.ts` 写双语 6 板块 ④`lib/terrain-label-registry.ts`
`IMPORTANCE_BY_ID` 只对特别重要的补（默认已是 regional）
⑤`check-terrain-camera.ts` + `check-regions.ts` 通过。

**权威文字内容**：讲解改为 6 个通用板块（`TerrainLesson`，顺序见 `lib/lesson.ts`
`LESSON_SECTION_ORDER`）：
`seeing 概述` → `formation 地貌特征` → `observation 从空中怎么看` →
`distinguish 与相似地形的区分` → `concept 地理知识（为何算这类地形/常见误区）` →
`history 历史与人文`。
内容写在 `lib/terrain-content.{zh,en}.ts`（`getTerrainContent(id, lang)`，按注册表 id 索引），
依据中国国家地理 / 中科院 / 自然资源部 / Geoscience Australia / Parks Australia / UNESCO
等公认地理事实总结，非文学化旁白、非凭空生成。
**已逐句核源（Block D，2026-08）**：中国 34 + 澳大利亚 22 + 新疆绿洲聚落 5 = 61 篇双语。
核源标准：去比较性/主观评价，有争议的加限定或并列，查不到宁可删，数字统一到权威口径。
`settlement`（绿洲·聚落）只用 概述/从空中怎么看/历史与人文 三段（`formation` 留空自动跳过）。
**占位地形已全部补齐（2026-08-29）**：其余 45 个（新疆湖河草原、中国次级山脉/平原三角洲/
沙漠/丘陵等）也写了完整 6 板块双语 —— 至此 106 个地形 100% 有讲解，不再出现占位文案。
内容优先级：`getTerrainContent(id)`（zh-CN）> `i18n-stories` 英译 > 新疆 json `lesson` /
`china-core` story > 占位。

## 双模式（学习 / 旅游）

**Approach A：顶层模式开关 + 平行内容系统。** `ExplorerApp` 持 `mode: AppMode`，
分支只在 ~5 个渲染点；travel 全部是新文件，study 链路一行没动。

- **状态**：`mode` / `activeRegion` 首帧用 SSR 默认（`study` / `china`），
  挂载后 `useEffect` 从 `localStorage` 恢复（避免 hydration mismatch）。
- **学习模式**：`CesiumOverlayLabels` 地形标签 + `railGroups`（14 分类）+ `ReadingPanel`
  接 `resolveLesson` 6 板块 + `JourneyBar` 航线。地图 hover 拾取地形（`modeRef` 门控，
  travel 时禁用并清掉高亮）。
- **旅游模式**：`CityMarkers` 城市点（`places-registry`）+ `travelRailGroups`（当前大洲下按国家分组）+
  `ReadingPanel` 接 `travelGuideToSections`（通用段列表，走 `StructuredLesson` 的 `sections` 分支）。
  点城市 → `CesiumMap.focusCity(lon, lat)` 飞过去 **+ 自动开始播报**；点国家概览 → 飞大洲中心。
- **旅游播报（`lib/travel-speak.ts`）**：分段合成 + 预取管线（播第 i 段时合成第 i+1 段），
  首段先出声，不等整篇。`useSentenceHighlight` 逐句高亮（`startHighlightWithTiming` 带 `baseIndex`，
  无 word boundary 时 `startHighlightChunkEstimated` 估时）。按钮有"准备语音…"态（`ReadingPanel.isPreparing`）。
- **旅游 POI 标注**：`lib/travel-pois.ts`（每城市攻略提到的地标概略坐标）+ `TravelPoiMarkers`：
  选中城市时在地图上标机场（✈）+ 地标。只是静态标注，不做与播报同步的高亮（文本↔坐标匹配不可靠）。
  **之后每个国家的旅游模式都要保持这套行为一致。**
- **航线**：一条航线两套解说，跟随当前 `mode`（`getRouteNarration(id, lang, mode)`）；
  某模式解说为空时该模式下航线不播。4 条国内航线 study + travel 解说均已写。
- **新增国家两个模式都要做**：study = 地形注册表 + 6 板块讲解；travel = `places-registry`
  加城市 + `COUNTRY_TO_CONTINENT` 补映射 + `travel-content.{zh,en}.ts` 写 6 段 TravelGuide +
  `COUNTRY_OVERVIEWS` 加概览 + `travel-pois.ts` 补该城市攻略提到的地标坐标。
  自检 `node --experimental-strip-types scripts/check-places.ts`（城市坐标/IATA/来源/双语内容齐全）。
- **进度**：
  - 澳大利亚旅游模式：1 国家概览 + 7 城市（悉尼/墨尔本/布里斯班/珀斯/阿德莱德/凯恩斯/达尔文）。
  - 中国旅游模式：1 国家概览 + 10 城市（北京/上海/广州/深圳/成都/重庆/西安/杭州/昆明/桂林）；
    可继续补南京/三亚/拉萨/哈尔滨/青岛/张家界等。
  - 中国政策类内容口径：签证/免签天数不写死，只说"近年放宽、以国家移民管理局最新公布为准"；
    进藏航线务必写"外国游客需西藏旅行许可 + 随有资质旅行社结伴出行"。
  设计与计划见 `docs/superpowers/specs/2026-08-29-two-mode-travel-study-design.md`、
  `docs/superpowers/plans/2026-08-29-two-mode-phase-1.md`。

## 全球地形扩展（学习模式，进行中）

设计见 `docs/superpowers/specs/2026-08-30-world-terrain-expansion-design.md`。

- **Phase A（已完成）**：区域重构为大洲。中国并入亚洲、澳大利亚并入大洋洲，顶栏改下拉，
  行为与之前等价。
- **Phase B 逐国加地形，每国 ≥25 个 T1/T2/T3**：
  - ✅ 美国 26 · ✅ 加拿大 25（`north-america` 共 51）· ✅ 日本 26（`asia` 84→110）
    · ✅ 新西兰 30（`oceania` 22→52，`country: "new-zealand"`）
  - 优先序（待做）：英国 → 冰岛 → 瑞士 → 挪威 → 法国 → 意大利 → …
  - **新西兰**：官方双语地名按 NZGB 用法并列（Aoraki / Mount Cook、Taranaki Maunga）；
    火山锥归 `mountain_system`、破火山口归 `basin`、峡湾归 `coast`、冰川归 `valley`。
  - **日本：主权争议岛屿（南千岛/北方四岛、竹岛/独岛、尖阁/钓鱼岛）全部不收**；
    琉球条目只用无争议的南西诸岛主链。
  - 每个新国家 = 新分支，stack 在上一个国家的分支上（都改 `regions.ts` 该洲 terrainCount +
    共用 `terrain-content.{zh,en}.ts`）。新大洲则从 `design/world-terrain-expansion` 切。
  - 分批：每 commit 约 6–8 个注册表条目（按分类分组）+ 同 commit 写双语 6 板块，
    每次跑 `check-regions` + `check-terrain-camera`，浏览器抽查。
- **零争议红线**（本轮特别强调）：所有文字查该国官方来源（地质调查局 / 国家公园管理局 /
  官方地名机构 / UNESCO / 官方统计或旅游机构）；地名用中性通用名、有并用名以事实并列、
  不表述主权；`history` 段不碰现代政治 / 领土 / 宗教 / 族群评价；可能有争议 → 删或换中性表述。
- 广度优先：先把注册表 + 双语 6 板块写全；真实边界多边形、相机逐个精校之后再补。

## Camera 推导链路

```
TerrainEntry（registry: 锚点 landmark + bbox + axis + viewFrom）
  → computeTerrainCamera()  推导 { target, heading, pitch, range }
  → flyToTerrainAndWait(payload, { heading, pitch })
  → Cesium flyTo
```

- **锚点 landmark** = 该地形最标志性的地物（主峰/主湖/枢纽城市），相机对准这里。
- **heading/pitch/range** 全部由 bbox 规模 + axis 走向推导，不写死。
  仅 `viewFrom`（相机在锚点的哪一侧）、`viewScale`（取景放大系数）可按地形显式给定。
- **相机位置 target** = 从锚点沿 viewFrom 反方向按几何偏移，使锚点落在画面中部。
- 普通地形：`showKm` 封顶 120km。**大面积高原/大盆地/大平原/大沙漠**（青藏/内蒙古/塔里木/
  云贵/华北平原…）在 `terrain-registry.ts` 的 `WIDE_VIEW` 里给 `viewScale`（1.5–2.7），
  `showKm` 放宽到 320km、range 到 340km —— 让画面看出"一整片高地/盆地/平原"的地貌特征，
  而不是锚点周边一个局部景物（湖 / 城市）。
- 自检: `node --experimental-strip-types scripts/check-terrain-camera.ts`

调参常量集中在 `lib/terrain-camera.ts` 顶部（FRAME_HALF_ANGLE_DEG / PITCH_* /
SHOW_KM_MAX / RANGE_MAX / LANDMARK_SCREEN_FRAC），视觉取景需在真实浏览器中校准。

## 地形集 / 标签 / 区域高亮

- **`TERRAIN_REGISTRY`（106 个）= 单一真实源**：主要地貌 + 少量人文聚落。
  `TerrainCategory`：mountain_system / plateau / basin / plain / hills / desert / lake /
  river / valley / gorge / island / grassland / coast / inselberg / settlement。
  **选取标准与分类判据见 `docs/terrain-taxonomy.md`**（勿凭感觉加条目/改分类）。
  坐标逐个查权威来源，`source` 留痕。
  `settlement`（绿洲·聚落）= 人文-地貌交界层，讲解只用「概述 / 从空中怎么看 / 历史与人文」
  三段（`formation` 留空自动跳过）；收录需满足 H1 区域锚点 / H2 航线沿途 / H3 地貌样本之一。
- **侧边栏 + 地图标签都由注册表驱动**：`ExplorerApp.ALL_FEATURES` = `TERRAIN_REGISTRY.map`；
  `handleSelectById(id)` 统一入口（新疆 json / china-core 有内容则讲解，否则占位）。
- 精确边界：`scripts/extract-ne-landforms.mjs` 从 `data/gis/ne_10m_geography_regions_polys`
  提取 42 个 → `public/data/gis/exports/{id}.geojson`。`CesiumMap.TERRAIN_RING_FILES` 列出这 42
  个 id，其余用 bbox 八边形。
- `CesiumOverlayLabels.tsx`：HTML 标签。
  - `projectToScreen` 用 `EllipsoidalOccluder` 剔除地球背面的点（否则缩小看地球会堆叠）。
  - zoom ≤ 3 不显示；importance→LOD 1:1，按 zoom 分级（大陆/国家/区域/POI）逐级展开。
  - `dynamicFontSize` 随 zoom 缩放，下限 0.8。字体 `LABEL_FONT_FAMILY`（通用系统字体栈）。
- **地形区域抬升高亮**（`CesiumMap.tsx`，每个地形三个实体）：
  - `pick`：贴地透明多边形，仅作拾取命中目标。
  - `lift`：`perPositionHeight` 多边形，顶面**跟随真实地形高程**（首次交互时
    `sampleTerrainMostDetailed` 采样并缓存），hover/focus 时整块 ease 抬升 3km / 5.5km。
  - `rim`：顶面亮边框 polyline（定高度、非 clampToGround）——**任意视角（含俯视）都能看清地块轮廓**。
  - 统一暖琥珀 `REGION_CSS`，hover / focus 只是强弱不同（α .20/.34，rim α .6/.95）。
  - **不要用 `polygon.outline`** —— 会懒加载 `createPolygonOutlineGeometry` worker，网络异常时崩溃。
  - `tickTerrainRegions` rAF 推进；配色/高度/透明度常量在 `CesiumMap.tsx` 顶部（`REGION_*`）。
- hover 走 `ScreenSpaceEventHandler` MOUSE_MOVE → **`scene.drillPick`**，在重叠命中的地块里
  取 `areaDeg2` 最小（最具体）的那个；点击/跳转走 `focusTerrain(id)`。

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
