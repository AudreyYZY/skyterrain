# Flight Geography Explorer

> 飞机视角地貌认知系统 · [English](./README_EN.md)

从飞机舷窗的视角认知地球的纪录片式 Web 应用。

不是 GIS 仪表盘，不是飞行模拟器，不是游戏 —— 是让你在三维地球上以巡航高度俯瞰一处地方，
看清它最标志性的地物，并配合权威、易懂的讲解，把它真正"看懂、记住"。

**两种模式**（顶栏一键切换，`localStorage` 记住）：

| 模式 | 面向的问题 | 内容 |
|---|---|---|
| **学习模式** | "这片是什么地形？怎么形成的？" | 地形地貌图鉴 —— 301 处地貌 + 6 板块权威讲解 |
| **旅游出行模式** | "到了这个陌生城市，衣食住行要注意什么？" | 城市概览 —— 地理格局 / 衣食住行 / 人文习俗 / 出行提示 |

两套内容系统平行、互不影响。

**当前范围**：
- 学习模式 —— 亚洲（中国 84 + 日本 26）· 大洋洲（澳大利亚 22 + 新西兰 30）·
  北美洲（美国 26 + 加拿大 25）· 欧洲（英国 33 + 冰岛 28 + 瑞士 27），共 301 处，中英双语
- 旅游模式 —— 澳大利亚（国家概览 + 7 城市）+ 中国（11 城市），中英双语

**规划**：中国旅游模式 → 全球主要地形（学习模式）→ 按旅游热度扩展各国旅游模式。

---

## 核心特性

### 地形集 —— 单一真实源

- **301 处地貌**统一注册在 [`lib/terrain-registry.ts`](lib/terrain-registry.ts)，15 类：
  `mountain_system` / `plateau` / `basin` / `plain` / `hills` / `desert` / `lake` / `river` /
  `valley` / `gorge` / `island` / `grassland` / `coast` / `inselberg` / `settlement`。
- 每处记录**锚点**（主峰 / 主湖 / 枢纽城市 + 经纬度 + 海拔）、**边界框**、**走向轴**、
  **中英名**、**数据来源**。侧边栏、地图标签、相机、区域高亮全部由这一份注册表驱动。
- 选取标准与分类判据见 [`docs/terrain-taxonomy.md`](docs/terrain-taxonomy.md)
  （T1 骨架 / T2 地貌省 / T3 标志地点；`settlement` 人文层的收录方法）—— 勿凭感觉加条目。

### 旅游模式 —— 城市，不是地形

- 城市与国家概览注册在 [`lib/places-registry.ts`](lib/places-registry.ts)：
  经纬度 / 级别（capital / major / notable）/ 机场 / 来源。
- 讲解为 **6 段 `TravelGuide`**（[`lib/travel-lesson.ts`](lib/travel-lesson.ts)）：
  概览 / 地理与格局 / 衣食住行 / 人文与习俗 / 看什么·体验什么 / 何时去·提示。
- 内容写在 [`lib/travel-content.{zh,en}.ts`](lib/travel-content.zh.ts)，依据各国官方旅游机构 /
  气象机构气候平均值 / 入境信息 / 通行旅行指南共识总结，去比较性与主观评价。
- 地图上只显示**城市点 + 机场**（[`CityMarkers.tsx`](components/CityMarkers.tsx)，按相机高度分级）。
- 自检：`node --experimental-strip-types scripts/check-places.ts`。

### 数据驱动相机 —— 不写死

点击任意地形 → [`computeTerrainCamera()`](lib/terrain-camera.ts) 从边界框规模 + 走向轴
推导 `{ 目标点, 朝向, 俯角, 距离 }`，让相机停在**能清楚看到该地形最标志地物**的位置，
锚点落在画面中部，模拟舷窗视角。

- 朝向由地形走向 + 可选的 `viewFrom`（相机在锚点哪一侧，编辑决策）推导。
- 俯角 / 距离由地形尺度推导；大面积高原 / 大盆地 / 大平原 / 大沙漠在注册表的 `WIDE_VIEW` 里
  给 `viewScale`，取景放宽到能看出"一整片高地 / 盆地"的地貌特征，而非锚点周边一个局部景物。
- 几何自检：`node --experimental-strip-types scripts/check-terrain-camera.ts`（301/301）。

### 区域高亮 —— 克制的轮廓

hover 或选中某地形时，在该地形范围上画一条**很细、很淡的暖色轮廓**
（定高度 polyline，非贴地，任意视角含俯视都能看清地块范围）。不是任何官方地理边界，
只是"当前就是这一块"的提示，因此刻意做得不夸张、不遮挡地表细节。

- 42 处地形使用 Natural Earth 提取的**真实边界多边形**（`public/data/gis/exports/*.geojson`），
  其余用边界框八边形。
- hover 命中走 `scene.drillPick`，在重叠地块里取面积最小（最具体）的那个。
- 旅游模式下地形拾取与高亮整体关闭。

### 自适应地图标签

HTML 标签层（[`CesiumOverlayLabels.tsx`](components/CesiumOverlayLabels.tsx)）：

- 用 `EllipsoidalOccluder` 剔除地球背面的标签，缩小看地球时不堆叠。
- 按 zoom 分级展开（大陆 → 国家 → 区域 → POI），字号随 zoom 缩放。
- hover / 选中时标签与地块高亮联动；中英双语跟随语言切换。

### 自然语音 · 逐句高亮

- Edge TTS（中文 `zh-CN-XiaoxiaoNeural`，英文 `en-US-AvaMultilingualNeural`），
  word-boundary 精确同步逐句高亮。
- Edge TTS 失败自动回退浏览器 TTS，按字数估时推进高亮。
- 中英双语一键切换，语音与讲解文本同步切换。

### 结构化讲解 —— 权威、非 AI 生成

学习模式讲解分 **6 个通用板块**（[`lib/lesson.ts`](lib/lesson.ts) `LESSON_SECTION_ORDER`）：

| 板块 | 内容 |
|---|---|
| 概述 | 是什么、在哪、为什么重要、从空中的整体印象 |
| 地貌特征 | 形态、尺度、组成、成因 |
| 从空中怎么看 | 关键观测点、标志物、颜色与纹理 |
| 与相似地形的区分 | 对比要点（秦岭 vs 南岭、塔里木 vs 准噶尔…） |
| 地理知识 | 为什么算这类地形、常见误区（云贵高原海拔低仍是高原、柴达木海拔高仍是盆地…） |
| 历史与人文 | —— |

- 内容写在 [`lib/terrain-content.{zh,en}.ts`](lib/terrain-content.zh.ts)（`getTerrainContent(id, lang)`），
  依据中国国家地理 / 中科院 / 自然资源部 / Geoscience Australia / Parks Australia / UNESCO
  等公认地理事实总结，非文学化旁白、非凭空生成。
- **301 处全部有中英双语讲解**。核源标准：去比较性 / 主观评价，有争议的加限定或并列，
  查不到宁可删，数字统一到权威口径；新增国家一律查该国官方地质 / 国家公园 / 地名机构口径。
- `settlement`（绿洲·聚落）只用「概述 / 从空中怎么看 / 历史与人文」三段。
- [`lib/terrain-lesson.ts`](lib/terrain-lesson.ts) `resolveLesson(id, lang)` 一处决定用哪份讲解。

### 航线飞行

- 4 条**真实商业航线**（`data/routes/*.json`）：北京–乌鲁木齐 / 成都–拉萨 / 广州–拉萨 /
  乌鲁木齐–喀什，含航司 / 航班号 / 机型、出发到达机场、沿途地形航点。
- 一次 ≤3 分钟：镜头立即摆到起点机场上空 → 立刻开始播这条航线**专属的一段连贯解说**
  （[`lib/route-narration.ts`](lib/route-narration.ts)，中英，教材区域地理口径）→
  镜头同时沿航点匀速飞完。
- 一条航线两套解说，跟随当前模式：`ROUTE_NARRATION[id].{study, travel}`。
- 自检：`node --experimental-strip-types scripts/check-routes.ts`。

---

## 技术栈

- **Next.js 16**（App Router，`--webpack`）+ **React 19** + **TypeScript 5**
- **CesiumJS 1.141** —— 三维地球、相机系统、地形高程采样
- **Tailwind CSS v4** · **Newsreader** 衬线（编辑式排版）
- **edge-tts-universal** —— Edge TTS

---

## 快速开始

```bash
npm install
cp .env.example .env.local
# 编辑 .env.local，至少填入 NEXT_PUBLIC_CESIUM_ION_TOKEN

npm run dev
```

浏览器打开 http://localhost:3000

### 环境变量

| 变量 | 必填 | 说明 |
|---|---|---|
| `NEXT_PUBLIC_CESIUM_ION_TOKEN` | 强烈建议 | Cesium Ion Token（[免费注册](https://ion.cesium.com/tokens)）。不填时地球为平坦椭球，无山脊起伏。 |

### 常用命令

```bash
npm run dev      # 开发（webpack）
npm run build    # 生产构建
npm run lint     # ESLint

node --experimental-strip-types scripts/check-terrain-camera.ts   # 相机几何自检（301/301）
node --experimental-strip-types scripts/check-routes.ts           # 航线自检
node --experimental-strip-types scripts/check-places.ts           # 旅游地点自检
node scripts/extract-ne-landforms.mjs                             # 重新提取地形边界
```

---

## 项目结构

```
app/
  api/tts/            — Edge TTS（PROSODY 按语言分）
  page.tsx layout.tsx globals.css

components/
  ExplorerApp.tsx          — 主编排器（模式 / 讲解 / 航线 / 语音链路 + 组合 UI）
  CesiumMap.tsx            — 三维地球、相机、区域轮廓高亮、appMode / focusCity
  CesiumOverlayLabels.tsx  — HTML 地形标签层（zoom 自适应，学习模式）
  CityMarkers.tsx          — 地图城市点（旅游模式，按相机高度分级）
  IntroOverlay.tsx         — 旅游模式初始标题卡（localStorage 记住已看过）
  ContinentIntro.tsx       — 学习模式初始：shuffle 的大陆滑动卡片，选定即飞入
  IndexRail.tsx            — 左侧目录（学习：次区域 → 国家 → 地形；旅游：国家概览 + 城市）
  ReadingPanel.tsx         — 右侧单一阅读面板（卡片态 ⇄ 文章态，逐句高亮）
  JourneyBar.tsx           — 底部航线胶片条
  StructuredLesson.tsx     — 板块讲解渲染（6 板块 lesson / 通用段列表 sections）
  ModeToggle.tsx           — 顶栏 学习 / 旅游 切换
  RegionSelector.tsx       — 顶栏大洲 / 次区域两级切换

lib/
  terrain-registry.ts       — 【单一真实源】301 处地形的锚点/范围/走向/中英名/来源
  terrain-camera.ts         — computeTerrainCamera() 数据驱动相机推导
  terrain-content.{zh,en}.ts— 权威 6 板块讲解内容（中/英）
  terrain-lesson.ts         — resolveLesson(id, lang)：一处决定用哪份讲解
  terrain-label-registry.ts — 标签（由注册表生成，含 nameEn）
  lesson.ts                 — 讲解板块顺序 / 标题 / 拼接
  routes.ts / route-narration.ts — 4 条真实航线 + 每条两套连贯解说
  app-mode.ts               — AppMode 类型 + localStorage 读写
  places-registry.ts        — 【旅游模式单一真实源】城市 + 国家概览
  travel-content.{zh,en}.ts — 旅游模式 6 段 TravelGuide 中英内容
  travel-lesson.ts          — resolveTravelGuide + travelGuideToSections
  travel-rail.ts            — 旅游模式左侧目录
  regions.ts                — 大洲 + 次区域(M49) 配置 + 国家归属 + 辅助函数 + DEFAULT_REGION_ID
  subregion-geo.ts          — 次区域地形数量 / 地理重心（供顶栏二级下拉飞行）
  terrain-tier.ts           — terrainTier(id) → T1/T2/T3 + categoryOrder（目录排序）
  speech.ts                 — TTS 系统（Edge TTS + 浏览器回退，跟随 language）
  i18n.ts / i18n-stories.ts — UI 国际化 / 早期讲解翻译

features/
  china-core-features.ts       — 早期核心地形定义（GeographicFeature）
  china-northwest-features.ts  — 早期核心地形定义（中国西北：天山 / 昆仑 / 阿尔泰 等）

data/
  *.json                    — 早期地形数据（坐标现由 terrain-registry 覆盖）
  routes/                   — 4 条真实航线定义
  gis/                      — Natural Earth 原始 shp/dbf（不入库）

public/data/gis/exports/    — 提取出的 42 个地形边界 geojson

scripts/
  check-terrain-camera.ts   — 相机几何自检
  check-routes.ts           — 航线自检
  check-places.ts           — 旅游地点自检
  extract-ne-landforms.mjs  — 从 Natural Earth 提取地形边界
  copy-cesium.mjs           — 拷贝 Cesium 静态资源（postinstall）
```

---

## 相机推导链路

```
TerrainEntry（注册表：锚点 landmark + bbox + axis + viewFrom）
  → computeTerrainCamera()   推导 { target, heading, pitch, range }
  → flyToTerrainAndWait(payload, { heading, pitch })
  → Cesium camera.flyTo
```

调参常量集中在 [`lib/terrain-camera.ts`](lib/terrain-camera.ts) 顶部
（`FRAME_HALF_ANGLE_DEG` / `PITCH_*` / `SHOW_KM_MAX` / `RANGE_MAX` / `LANDMARK_SCREEN_FRAC`），
视觉取景需在真实浏览器中校准。

---

## 添加一个新国家

**学习模式**：
1. `lib/terrain-registry.ts` 加地形条目（`regionId`），坐标逐个查权威来源，`source` 留痕
2. `lib/regions.ts` 加 / 开启 region
3. `lib/terrain-content.{zh,en}.ts` 写双语 6 板块讲解
4. `lib/terrain-label-registry.ts` 补重要度
5. `scripts/check-terrain-camera.ts` 通过

**旅游模式**：
1. `lib/places-registry.ts` 加城市 + `COUNTRY_OVERVIEWS` 加国家概览
2. `lib/travel-content.{zh,en}.ts` 写 6 段 `TravelGuide` 中英内容
3. `scripts/check-places.ts` 通过（坐标 / IATA / 来源 / 双语内容齐全）

选取标准见 [`docs/terrain-taxonomy.md`](docs/terrain-taxonomy.md)。

---

## 文档

| 文档 | 内容 |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | 产品定位、架构、开发规范、禁止事项 |
| [`docs/terrain-taxonomy.md`](docs/terrain-taxonomy.md) | 地形集选取标准与分类定义 |
| [`docs/routes.md`](docs/routes.md) | 航线选取理由与覆盖分析 |
| [`docs/architecture-metrics.md`](docs/architecture-metrics.md) | 项目健康度指标、模块耦合度 |
| [`DESIGN.md`](DESIGN.md) | UI / 视觉设计规范 |

---

## 数据来源

| 数据 | 来源 |
|---|---|
| 地形边界 | Natural Earth 10m Geography Regions |
| 卫星影像 | Bing Maps（Cesium Ion） |
| 地形高程 | Cesium World Terrain |
| 地形讲解 | 中国国家地理 / 中科院 / 自然资源部 / Geoscience Australia / Parks Australia / UNESCO 等公认地理事实（人工总结、逐句核源） |
| 旅游讲解 | 各国官方旅游机构 / 气象机构气候平均值 / 入境信息 / 通行旅行指南共识（人工总结） |

---

## 许可

版权所有 © 2026 Audrey Yang。保留所有权利。

未经版权所有人书面许可，不得复制、修改、分发、再授权或商业使用本项目。详见 [LICENSE](LICENSE)。
