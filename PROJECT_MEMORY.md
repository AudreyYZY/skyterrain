# PROJECT_MEMORY.md

> Single source of truth for future Claude sessions.
> Read this first before making any changes.

---

## Project Identity

**Flight Geography Explorer** — 飞机视角地貌认知系统

用户从飞机舷窗视角，通过 3D 地球 + 纪录片式讲解，认知地球地貌。

**不是** GIS 仪表盘、飞行模拟器、游戏。

## Tech Stack

- Next.js 16.2.6 (App Router)
- React 19.2.4
- TypeScript 5.x
- CesiumJS 1.141.0 (3D 地球)
- TailwindCSS 4.x
- Edge TTS (edge-tts-universal 1.4.0)

## Architecture

### 数据层

```
app/
  api/narration/route.ts    — AI 讲解端点
  api/tts/route.ts          — Edge TTS 端点
  api/photo-identify/route.ts — 照片识别端点
  layout.tsx                — 根布局
  page.tsx                  — 入口 → ExplorerApp
```

### 组件层

```
components/
  ExplorerApp.tsx           — 主编排器，标签初始化，speakLessonWithHighlight
  CesiumMap.tsx             — 3D 地球，Camera 系统，航线飞行引擎
  CesiumOverlayLabels.tsx   — 空间感知标签（HTML overlay，缩放自适应）
  NarrationPanel.tsx        — 右侧浮动面板（i18n 支持）
  StructuredLesson.tsx      — 讲解内容（4 段：seeing, formation, history, observation）
  TerrainGlanceCards.tsx    — 元数据速览
  RouteControls.tsx         — 航线选择
  VoiceSelector.tsx         — TTS 语音选择
  useSentenceHighlight.ts   — 句子高亮同步 hook
```

### 数据层

```
lib/
  terrain.ts                — 新疆地形注册（32 个位置）
  terrain-categories.ts     — 分类顺序 + 标签
  i18n.ts                   — UI 国际化（zh-CN / en-US）
  i18n-stories.ts           — 讲解故事翻译（6 个地形）
  narration-engine.ts       — 结构化数据 → 中文讲解
  lesson.ts                 — Lesson → 语音转换
  speech.ts                 — TTS 系统（Edge TTS + 浏览器回退）
  routes.ts                 — 航线解析
  city-lessons.ts           — 城市讲解（4 个城市）
  narration-queue.ts        — 叙述队列（串行、优先级、取消）
```

### Feature 层

```
features/
  types.ts                  — GeographicFeature 类型定义
  china-core-features.ts    — 全国核心地形（15 个）
  xinjiang-core-features.ts — 新疆地形定义
```

## 全国地貌架构

### 当前覆盖

| 类型 | 数量 | 示例 |
|------|------|------|
| mountain_system | 6 | 秦岭、祁连山、太行山、大兴安岭、横断山脉、喜马拉雅山 |
| plateau | 4 | 青藏高原、黄土高原、内蒙古高原、云贵高原 |
| basin | 5 | 四川盆地、柴达木盆地、东北平原、华北平原、长江中下游平原 |

### 数据来源

- 新疆地形: `data/*.json` 文件（32 个位置）
- 全国地形: `features/china-core-features.ts`（手工定义）

## Camera 问题

### 当前问题

点击全国地形后:
1. Camera 飞到错误区域
2. 画面中心不是目标地形
3. 经常看到地球曲率
4. 大型山脉与小型湖泊使用同一种 Camera 逻辑
5. 所有参数都是手工估算

### 根源

全国 Feature 没有真实 Geometry，只有手工 `cameraGeometry`。

### 解决方案

**Geometry + FOI 驱动 Camera**

```
Terrain → Geometry → FOI → Auto Camera
```

不是简单的 `Geometry → bbox → center`。

原因: 秦岭长约 900km，Polygon 中心不代表最佳观察位置。需要 FOI 定义观察兴趣点，Camera 从 FOI + Geometry 共同推导。

不再维护 `cameraGeometry`。

## Geometry Validation 阶段（已完成）

### 结果

Natural Earth `ne_10m_geography_regions_polys` v5.0.0 包含全部 5 个地形的 Polygon。

| 地形 | 类型 | Points | BBox |
|------|------|--------|------|
| 秦岭 | mountain_system | 88 | [105°, 32°] → [114°, 35°] |
| 祁连山 | mountain_system | 71 | [94°, 36°] → [103°, 40°] |
| 四川盆地 | basin | 62 | [103°, 29°] → [108°, 32°] |
| 柴达木盆地 | basin | 51 | [92°, 36°] → [98°, 38°] |
| 云贵高原 | plateau | 65 | [98°, 23°] → [107°, 29°] |

GMBA / HydroBASINS 验证已暂停（非当前优先级）。

## Phase B — FOI Validation（当前阶段）

### 目标

针对 5 个样本地形，建立 3~5 个 FeatureOfInterest。

### 为什么需要 FOI

Camera 推导链路: `Terrain → Geometry → FOI → Auto Camera`

不是: `Terrain → Geometry → Camera`

原因: 秦岭长约 900km，Polygon 中心不代表最佳观察位置。

### 每个地形需要

1. FOI 名称
2. FOI 类型（山峰 / 谷地 / 城市 / 观察点）
3. 经纬度
4. 飞机视角观察价值
5. 推荐 Camera Target

## FOI 设计

FeatureOfInterest 是讲解兴趣点。

```typescript
interface StoryGeometry {
  id: string;
  name: string;         // 太白山、成都、格尔木
  position: [lon, lat];
  text: string;         // 该点的讲解文本
}
```

每个地形有 1-3 个 FOI，用于:
- 讲解节点定位
- 镜头运动路径
- 叙述节奏控制

## Story 设计

4 段式结构化讲解:

```typescript
interface TerrainLesson {
  seeing: string;       // 飞机窗外看到什么
  formation: string;    // 地貌如何形成
  history: string;      // 历史与人文
  observation?: string; // 飞机上如何区分
}
```

故事数据:
- `i18n-stories.ts` — 6 个核心地形的中英文故事
- `china-core-features.ts` — 全国地形的中文故事
- `data/*.json` — 新疆地形的中文故事

## KnowledgeLink 设计

关联地形与知识来源:

```typescript
interface TerrainKnowledge {
  terrainFeatures: string[];
  formation: string[];
  airplaneViewFeatures: string[];
  historicalTopics: string[];
  cultureTopics: string[];
  climateFeatures: string[];
  interestingFacts: string[];
  sources: { title: string; url?: string }[];
  confidence: "high" | "medium" | "low";
}
```

## 国际化

- UI 文本: `lib/i18n.ts` 的 `t()` 函数
- 讲解故事: `lib/i18n-stories.ts` 的 `getTerrainStory()` 函数
- 地形名称: `lib/i18n.ts` 的 `getTerrainName()` 函数
- TTS 语音: `lib/i18n.ts` 的 `getTTSVoice()` 函数

当前支持: zh-CN, en-US

## 航线系统

当前航线是手工定义的，不是真实航班数据。

未来需要:
- 接入真实航班信息
- 飞机地面投影阴影
- 真实地形 + 阴影效果

## 开发规范

1. 不要在未完成审计前修改 Camera 逻辑
2. 不要在未验证数据源前导入地形数据
3. 每完成一个 Phase，先更新文档再提交代码
4. 业务代码和文档分开提交
5. 读 `node_modules/next/dist/docs/` 了解 Next.js 最新变更
