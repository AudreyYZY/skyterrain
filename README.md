# Flight Geography Explorer

> 飞机视角地貌认知系统 · [English](./README_EN.md)

从飞机舷窗的视角认知地球地貌的纪录片式 Web 应用。

不是 GIS 仪表盘，不是飞行模拟器，不是游戏 —— 是让你在三维地球上，以巡航高度俯瞰一处地形，
看清它最标志性的地物，并配合权威、易懂的讲解，把这处地貌真正"看懂、记住"。

**当前范围**：中国全境地貌（新疆全境 + 全国核心地形）。
**规划**：亚洲扩展 → 全球地貌探索。

---

## 核心特性

### 地形集 —— 单一真实源

- **88 处全国地貌**统一注册在 [`lib/terrain-registry.ts`](lib/terrain-registry.ts)：
  山脉 / 高原 / 盆地 / 平原 / 丘陵 / 沙漠 / 湖泊 / 河谷 / 峡谷 / 三角洲 / 岛屿。
- 每处地形记录**锚点**（主峰 / 主湖 / 枢纽城市 + 经纬度 + 海拔）、**边界框**、**走向轴**、
  **数据来源**。侧边栏、地图标签、相机、区域高亮全部由这一份注册表驱动。
- **32 处新疆细节数据集**（`data/*.json`）：含完整讲解、速览卡片、知识条目。

### 数据驱动相机 —— 不写死

点击任意地形 → [`computeTerrainCamera()`](lib/terrain-camera.ts) 从边界框规模 + 走向轴
推导 `{ 目标点, 朝向, 俯角, 距离 }`，让相机停在**能清楚看到该地形最标志地物**的位置，
锚点落在画面中部，模拟舷窗视角。

- 朝向由地形走向 + 可选的 `viewFrom`（相机在锚点哪一侧，编辑决策）推导。
- 俯角 / 距离由地形尺度线性推导；超大地形（青藏 / 昆仑 / 喜马拉雅）聚焦锚点周边代表区段。
- 几何自检：`node --experimental-strip-types scripts/check-terrain-camera.ts`（88/88）。

### 地块抬升高亮

hover 或选中某地形时，**该地形范围内的地表跟随真实高程整块缓缓抬起**（首次交互时
`sampleTerrainMostDetailed` 采样并缓存），像地质板块上升，而不是在静态图层上画一个悬空的框。
材质极淡、保留地表原色，侧壁即地块切面。

- 42 处地形使用 Natural Earth 提取的**真实边界多边形**（`public/data/gis/exports/*.geojson`），
  其余用边界框八边形。
- 提取脚本：`node scripts/extract-ne-landforms.mjs`（无依赖，手写解析 shp/dbf）。

### 自适应地图标签

HTML 标签层（[`CesiumOverlayLabels.tsx`](components/CesiumOverlayLabels.tsx)）：

- 用 `EllipsoidalOccluder` 剔除地球背面的标签，缩小看地球时不堆叠。
- 按 zoom 分级展开（大陆 → 国家 → 区域 → POI），字号随 zoom 缩放。
- hover / 选中时标签与地块高亮联动（琥珀胶囊 + 描边）。

### 自然语音 · 逐句高亮

- Edge TTS（默认 `zh-CN-XiaoxiaoNeural`，最自然的中文女声），word-boundary 精确同步逐句高亮。
- Edge TTS 失败自动回退浏览器 TTS，按字数估时推进高亮。
- 中英双语一键切换，语音与讲解文本同步切换。

### 结构化讲解 —— 权威、非 AI 生成

讲解分 **6 个通用板块**（[`lib/lesson.ts`](lib/lesson.ts) `LESSON_SECTION_ORDER`）：

| 板块 | 内容 |
|---|---|
| 概述 | 是什么、在哪、为什么重要、从空中的整体印象 |
| 地貌特征 | 形态、尺度、组成、成因 |
| 从空中怎么看 | 关键观测点、标志物、颜色与纹理 |
| 与相似地形的区分 | 对比要点（秦岭 vs 南岭、塔里木 vs 准噶尔…） |
| 地理知识 | 为什么算这类地形、常见误区（云贵高原海拔低仍是高原、柴达木海拔高仍是盆地…） |
| 历史与人文 | —— |

- 内容写在 [`lib/terrain-content.ts`](lib/terrain-content.ts)（`getTerrainContent(id)`），
  依据中国国家地理 / 中科院 / 自然资源部等公认地理事实总结，非文学化旁白、非凭空生成。
- 已收录 **34 处**（20 个一级地形 + 长白山 / 横断山脉 / 南岭 / 河西走廊 / 长江三峡 /
  雅鲁藏布大峡谷 / 青海湖 / 鄱阳湖 / 海南岛 / 台湾岛等）。未收录地形显示占位。

### 航线飞行

3 条预设航线（`data/routes/`）：北疆经典航线、帕米尔高原航线、吐鲁番火焰山航线。
自动沿途飞行 + 经过地形自动播报。

### 舷窗照片模式（可选）

上传舷窗照片，调用兼容 OpenAI 的多模态模型（默认 DeepSeek）推测拍到的地形。需配置 `MIMO_*` 环境变量。

---

## 技术栈

- **Next.js 16**（App Router，`--webpack`）+ **React 19** + **TypeScript 5**
- **CesiumJS 1.141** —— 三维地球、相机系统、地形高程采样
- **Tailwind CSS v4**
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
| `MIMO_API_KEY` / `MIMO_BASE_URL` / `MIMO_MODEL` | 可选 | 舷窗照片识别（兼容 OpenAI 的多模态 API） |
| `MIMO_VISION_MODEL` | 可选 | 指定支持识图的模型 |

### 常用命令

```bash
npm run dev      # 开发（webpack）
npm run build    # 生产构建
npm run lint     # ESLint
node --experimental-strip-types scripts/check-terrain-camera.ts   # 相机几何自检
node scripts/extract-ne-landforms.mjs                             # 重新提取地形边界
```

---

## 项目结构

```
app/
  api/tts/            — Edge TTS
  api/narration/      — 讲解脚本生成
  api/photo-identify/ — 舷窗照片识别
  page.tsx layout.tsx globals.css

components/
  ExplorerApp.tsx          — 主编排器
  CesiumMap.tsx            — 三维地球、相机、地块抬升高亮
  CesiumOverlayLabels.tsx  — HTML 地形标签层（zoom 自适应）
  TerrainSidebar.tsx       — 侧边栏（分类导航）
  NarrationPanel.tsx       — 右侧讲解面板
  StructuredLesson.tsx     — 6 板块讲解渲染
  RouteControls.tsx        — 航线控制
  PhotoModePanel.tsx       — 舷窗照片模式
  VoiceSelector.tsx        — 语音包选择

lib/
  terrain-registry.ts      — 【单一真实源】88 处地形的锚点/范围/走向/来源
  terrain-camera.ts        — computeTerrainCamera() 数据驱动相机推导
  terrain-content.ts       — 权威结构化讲解内容（getTerrainContent）
  lesson.ts                — 讲解板块顺序 / 拼接 / 朗读文本
  terrain-label-registry.ts— 标签（由注册表生成）
  terrain-label-theme.ts   — 标签视觉 token
  terrain.ts               — 新疆地形注册（坐标由注册表覆盖）
  speech.ts                — TTS 系统（Edge TTS + 浏览器回退）
  i18n.ts / i18n-stories.ts— UI 国际化 / 讲解翻译
  routes.ts                — 航线
  narration-*.ts           — 讲解脚本引擎 / 队列 / 会话管理

features/
  china-core-features.ts    — 全国核心地形定义
  xinjiang-core-features.ts — 新疆地形定义
  types.ts                  — GeographicFeature 类型

data/
  *.json                    — 新疆地形数据（32 处）
  routes/                   — 航线定义
  gis/                      — Natural Earth 原始 shp/dbf（不入库）

public/data/gis/exports/    — 提取出的 42 个地形边界 geojson

scripts/
  check-terrain-camera.ts   — 相机几何自检
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

## 数据模型

```
TerrainEntity     — 地形实体（天山、秦岭、四川盆地…）
GeometryRecord    — 几何记录（Polygon / LineString / bbox）
FeatureOfInterest — 讲解兴趣点（太白山、成都、格尔木…）
Story             — 讲解内容（6 板块）
KnowledgeLink     — 知识关联（地形 ↔ 知识点）
ProvenanceRecord  — 数据溯源（来源、精度、获取时间）
```

---

## 文档

| 文档 | 内容 |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | 产品定位、架构、开发规范、禁止事项 |
| [`docs/architecture.md`](docs/architecture.md) | 分层、模块、数据流、Architecture Smells |
| [`docs/architecture-metrics.md`](docs/architecture-metrics.md) | 项目健康度指标、模块耦合度 |
| [`DESIGN.md`](DESIGN.md) | UI / 视觉设计规范 |

---

## 数据来源

| 数据 | 来源 |
|---|---|
| 地形边界 | Natural Earth 10m Geography Regions |
| 卫星影像 | Bing Maps（Cesium Ion） |
| 地形高程 | Cesium World Terrain |
| 地形讲解 | 中国国家地理 / 中科院 / 自然资源部等公认地理事实（人工总结） |

---

## 许可

版权所有 © 2026 Audrey Yang。保留所有权利。

未经版权所有人书面许可，不得复制、修改、分发、再授权或商业使用本项目。详见 [LICENSE](LICENSE)。
