# Flight Geography Explorer

> 飞机视角地貌认知系统 · [English](./README_EN.md)

一个从飞机舷窗视角认知地球的纪录片式 Web 应用：在三维地球上飞到巡航高度，
看清一处地方最标志性的地物，配合成段的地理讲解，把它真正"看懂、记住"。

> **先读这一段再看内容**：本项目的文字与数据是**依据公开资料整理生成的，没有经过
> 人工逐条审核**，其中确实存在过、也仍然会存在事实错误。已知的错误类型、已经修掉的
> 例子和现有的自动防线，都记在 [`docs/known-errors.md`](docs/known-errors.md)；
> 请勿把这里的任何数字、航班号、机场名当作可直接引用的权威信息。详见下面
> 「[数据可靠性](#数据可靠性)」一节。

不是 GIS 仪表盘，不是飞行模拟器，也不是游戏。

**两种模式**（顶栏一键切换，`localStorage` 记住）：

| 模式 | 面向的问题 | 内容 |
|---|---|---|
| **学习模式** | "这片是什么地形？怎么形成的？" | 地形地貌图鉴 —— 1041 处地貌 + 6 板块讲解 |
| **旅游出行模式** | "到了这个陌生城市，衣食住行要注意什么？" | 城市概览 —— 地理格局 / 衣食住行 / 人文习俗 / 出行提示 |

两套内容系统平行、互不影响。

**当前范围**（`node --experimental-strip-types scripts/check-regions.ts` /
`check-places.ts` / `check-routes.ts` 每次运行都会打印准确计数——这三行数字随内容持续
增长，**这里的数字如果对不上，以脚本输出为准**；按国家的详细分布见 [`CLAUDE.md`](CLAUDE.md)
"范围"一节，那里随每次扩展同步更新，本文件不重复维护第二份、避免又和实际脱节）：
- 学习模式 —— 亚洲 · 欧洲 · 北美洲 · 南美洲 · 大洋洲共 38 个国家，1041 处地貌，中英双语
- 旅游模式 —— 覆盖学习模式已上线的全部 38 个国家，共 38 个国家概览 + 691 座城市，中英双语；
  287 条航线（国内 + 国际，每条附机场/地形航点 + 学习/旅游两套双语解说）——
  **其中 192 条的航班号/机型经过核实**，见下面「数据可靠性」

**规划**：继续扩展学习模式地形覆盖（非洲待启动）+ 按旅游热度扩展各国旅游模式覆盖城市。

---

## 核心特性

### 地形集 —— 单一真实源

- **1041 处地貌**统一注册在 [`lib/terrain-registry.ts`](lib/terrain-registry.ts)，14 类：
  `mountain_system` / `plateau` / `basin` / `plain` / `hills` / `desert` / `lake` / `river` /
  `valley` / `gorge` / `island` / `grassland` / `coast` / `inselberg`。
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
- 几何自检：`node --experimental-strip-types scripts/check-terrain-camera.ts`（1041/1041）。

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

### 结构化讲解 —— 依据公开资料整理

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
  参照中国国家地理 / 中科院 / 自然资源部 / Geoscience Australia / Parks Australia / UNESCO
  等公开资料整理而成，不是文学化旁白，但**也不是逐条核过的权威资料**。
- **1041 处全部有中英双语讲解**。写作口径：去比较性 / 主观评价，有争议的加限定或并列，
  查不到宁可删，数字尽量对齐权威口径；新增国家优先查该国官方地质 / 国家公园 / 地名机构。
  **这是写作时的自我要求，不等于事后有人逐条验收过。** `source` 字段留了痕，但只有
  部分条目点名了可复核的具体来源，其余写的是"概略"或笼统的机构名；个别条目明确标注
  "概略坐标 / 待实测"。这些字段是审计线索、不是质检认证——引用具体数字前请自行复核。
- 已知会出错的地方（表述被简化成事实错误、未加限定的最高级、人口/面积数字缺年份与口径）
  与已修掉的实例，见 [`docs/known-errors.md`](docs/known-errors.md)。
- [`lib/terrain-lesson.ts`](lib/terrain-lesson.ts) `resolveLesson(id, lang)` 一处决定用哪份讲解。

### 航线飞行

- **287 条航线**（`data/routes/*.json`，覆盖上面列出的所有国家，含国内航线与
  中国—他国国际航线），每条 = 一对真实通航的城市 + 出发到达机场 + 沿途地形航点，
  数据里另存有航司 / 航班号 / 机型。
  **不要把这 287 条整体当成"真实商业航班"**：城市对与机场是可查的，但写入时给出的
  航班号/机型是当时的一个示例，抽查下来相当一部分对不上（已核完的 15 国国内线里，157 条有 125 条对不上）。
- 一次 ≤3 分钟：镜头立即摆到起点机场上空 → 立刻开始播这条航线**专属的一段连贯解说**
  （[`lib/route-narration.ts`](lib/route-narration.ts)，中英，教材区域地理口径）→
  镜头同时沿航点匀速飞完。
- 一条航线两套解说，跟随当前模式：`ROUTE_NARRATION[id].{study, travel}`。
- 自检：`node --experimental-strip-types scripts/check-routes.ts`。
- **航班号/机型只有核实过才对外显示**：`FlightRoute.source`（`ref` / `checkedOn` /
  `status`）是核实留痕，`lib/routes.ts` 的 `isFlightVerified()` 是唯一出口——没有留痕、
  或留痕结论为 `wrong` 的航线，界面、搜索、解说里都**不出现**航班号与机型，航线照常
  可飞、地理解说照常播。`npm run check:routes` 会硬性拦截"未核实航线的解说里点名机型
  或航班号"。
- 现状：287 条里 **184 条已核实**（161 条属实 + 23 条查明有误），**103 条尚未核实**。
  国际线的错误多是机型漂移；中国国内线抽查 24 条错了 19 条，多是"这个航班号根本不飞
  这条航线"。**即便是已核实的那 59 条，也只是 `checkedOn` 那天的快照**，航司改期换机
  不会自动同步——出行请以航司官网或 OTA 的实时信息为准。

---

## 数据可靠性

这个项目的文字量很大（1041 处地形 × 6 板块 + 691 座城市 × 7 段 + 287 条航线 × 2 套解说，
中英双语），**它是依据公开资料整理生成的，没有人逐条审核过**。已经发现并修掉的事实错误
不在少数，还没被发现的一定也有。下面写清楚哪些是可查的、哪些不可信、以及靠什么防线兜着。

### 分档说明

| 内容 | 可信程度 | 说明 |
|---|---|---|
| 地形的**位置与范围** | 较高 | 逐条查过来源并留在 `source` 字段；相机几何有自检 |
| 地形的**讲解文字** | 中 | 参照公开资料整理，写作时避开比较级与争议表述，但没有事后逐条验收 |
| 城市的**坐标 / IATA / 机场** | 较高 | `check:places` 强制齐全；机场更名等变动靠人工发现后修（见 known-errors） |
| 城市的**运转与生活描述** | 中 | 同地形讲解；人口/面积一类数字**很多没有写年份和口径** |
| 航线的**城市对与机场** | 较高 | 都是真实通航的城市对 |
| 航线的**航班号 / 机型** | **低（默认不显示）** | 192/287 条已核实；未核实的在界面、搜索、解说里一律不出现 |

### 已有的自动防线

```bash
npm run check          # 一次跑完下面全部
npm run check:regions  # 大洲/次区域/国家 ↔ 地形计数一致性
npm run check:camera   # 相机几何（1041/1041）
npm run check:places    # 城市坐标 / IATA / 来源 / 双语内容齐全
npm run check:routes    # 航点单调性、解说时长、机型与数据是否自相矛盾、
                        # 未核实航线的解说不得点名机型或航班号
npm run check:flight    # 镜头运动断言（地速/高度比、加速度、转向、干飞时长）
npm run check:anchors   # 解说逐句锚点表与解说句数一致、镜头滞后统计
npm run check:claims   # 易过期断言扫描：人口数字缺年份、主观最高级、排名断言缺口径
npm run verify:report -- <findings.json>   # 把一轮核实结果落地：开/关 issue + 记台账
```

**这些脚本只能查"自相矛盾"和"不该出现的表述"，查不了"写的内容对不对"。**
对不对要靠联网核实，流程见下。

### 内容核实流程（每批新增内容之后跑）

新增地形 / 城市 / 航线之后，用内置的核实流程把这批内容拿去和权威来源比对：

```
/verify-content            # 核实自上次以来所有新增/改动的条目
/verify-content cities kul-lgk kch-myy   # 或指定范围
```

它做四件事：算出这轮改了哪些条目（git diff + 核实台账）→ 分批交给
`content-verifier` 子代理逐条联网核实（官方来源优先，拿不准就报 unknown，
不许补一个看起来合理的答案）→ 事实错误当场改掉 → 结论交给
`npm run verify:report` **自动落地**：

- 当场修掉的 → 之前若为它开过 issue，评论写清怎么修的 + 来源，然后**关掉**
- 没修掉的（查明有误但找不到替代值）→ **自动开 issue**，正文埋去重键，
  重复跑不会重复开；已关闭的若问题重现会**自动重开**
- 每一轮 → 在对应的总 issue 下留进度评论 + 往
  [`docs/verification-ledger.md`](docs/verification-ledger.md) 追加一行

规则见 [`.claude/skills/verify-content/SKILL.md`](.claude/skills/verify-content/SKILL.md)。

### 发现错误了怎么办

请开一个 [issue](../../issues)（标签 `data-error`）。已知错误类型、根因、修法与现有防线
都在 [`docs/known-errors.md`](docs/known-errors.md)——**新发现的错误先归到那里的某一类，
归不进去说明是新类型，要同时补一条防线**。

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
npm run dev        # 开发（webpack）
npm run build      # 生产构建
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit

npm run check:regions   # 大洲/次区域/国家地形计数一致性自检
npm run check:camera    # 相机几何自检（1041/1041）
npm run check:places    # 旅游地点自检（城市坐标/IATA/来源/双语内容齐全）
npm run check:routes    # 航线自检（waypoint 单调性、解说时长、核实留痕、机型一致性）
npm run check:flight    # 镜头运动自检（地速/高度比、加速度、转向、干飞时长）
npm run check:anchors   # 解说逐句锚点表自检 + 镜头滞后统计
npm run check:claims    # 易过期断言扫描（人口/面积缺年份、未加限定的最高级）
npm run check           # 依次跑完上面全部（typecheck + lint + 自检）

node scripts/extract-ne-landforms.mjs   # 重新提取地形边界
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
  ContinentIntro.tsx       — 首屏大陆滑动卡片（学习/旅游模式共用，数地貌数还是城市数由调用方传入）
  IndexRail.tsx            — 左侧目录（学习：次区域 → 国家 → 地形；旅游：国家 → 省/州 → 城市，
                              省/州分组按拼音/字母序，标题旁彩色圆点提示所属大区）
  ReadingPanel.tsx         — 右侧单一阅读面板（卡片态 ⇄ 文章态，逐句高亮）
  JourneyBar.tsx           — 底部航线胶片条
  StructuredLesson.tsx     — 板块讲解渲染（6 板块 lesson / 通用段列表 sections）
  ModeToggle.tsx           — 顶栏 学习 / 旅游 切换
  RegionSelector.tsx       — 顶栏大洲 / 次区域两级切换

lib/
  terrain-registry.ts       — 【单一真实源】1041 处地形的锚点/范围/走向/中英名/来源
  terrain-camera.ts         — computeTerrainCamera() 数据驱动相机推导
  terrain-content.{zh,en}.ts— 权威 6 板块讲解内容（中/英）
  terrain-lesson.ts         — resolveLesson(id, lang)：一处决定用哪份讲解
  terrain-label-registry.ts — 标签（由注册表生成，含 nameEn）
  lesson.ts                 — 讲解板块顺序 / 标题 / 拼接
  routes.ts / route-narration.ts — 航线（当前 287 条，国内+国际；航班号仅在核实过时对外显示）
                                    + 每条学习/旅游两套连贯解说
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
  routes/                   — 航线定义（当前 287 条，国内+国际，含 source 核实留痕）
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
| [`docs/routes.md`](docs/routes.md) | 航线选取理由与覆盖分析（⚠️ 早期快照，写于仅 4 条航线时，数字已过期，见文档顶部说明） |
| [`docs/architecture-metrics.md`](docs/architecture-metrics.md) | 项目健康度指标、模块耦合度（⚠️ codeatlas 生成于 2026-06-30，早于双模式/世界扩展，数字已过期） |
| [`docs/project-status-2026-09-04.md`](docs/project-status-2026-09-04.md) | 2026-09-04 时间点快照：已知不足评估、当次修复记录、给下一个任务的起点建议（不是持续维护的活文档） |
| [`docs/known-errors.md`](docs/known-errors.md) | **已犯过的错误台账**：错误类型、真实例子、根因、怎么修的、现在有没有防线接住 |
| [`docs/verification-ledger.md`](docs/verification-ledger.md) | 内容核实台账：哪些条目核过、什么时候核的、结论是什么 |
| [`DESIGN.md`](DESIGN.md) | UI / 视觉设计规范 |

---

## 数据来源

| 数据 | 来源 |
|---|---|
| 地形边界 | Natural Earth 10m Geography Regions |
| 卫星影像 | Bing Maps（Cesium Ion） |
| 地形高程 | Cesium World Terrain |
| 地形讲解 | 参照中国国家地理 / 中科院 / 自然资源部 / Geoscience Australia / Parks Australia / UNESCO 等公开资料整理生成，**未经人工逐条审核** |
| 旅游讲解 | 参照各国官方旅游机构 / 气象机构气候平均值 / 入境信息 / 通行旅行指南整理生成，**未经人工逐条审核** |
| 航班号 / 机型 | 写入时查得的示例；只有 `source` 留痕核实过的才对外显示（现 184/287），且只是核实当日的快照 |

---

## 许可

版权所有 © 2026 Audrey Yang。保留所有权利。

未经版权所有人书面许可，不得复制、修改、分发、再授权或商业使用本项目。详见 [LICENSE](LICENSE)。
