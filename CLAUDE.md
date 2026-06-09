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
  CesiumMap.tsx          — 3D 地球、Camera 系统
  NarrationPanel.tsx     — 右侧面板（i18n 支持）
  StructuredLesson.tsx   — 讲解内容渲染

lib/
  i18n.ts                — UI 国际化
  i18n-stories.ts        — 讲解故事翻译
  terrain.ts             — 新疆地形注册
  speech.ts              — TTS 系统（Edge TTS + 浏览器回退）

features/
  china-core-features.ts — 全国核心地形定义
  xinjiang-core-features.ts — 新疆地形定义
  types.ts               — GeographicFeature 类型
```

## 当前阶段

**Terrain Geometry Validation**

目标: 验证 5 个样本地形的 Geometry 数据来源和可用性。

样本地形:
- 秦岭 (mountain_system)
- 祁连山 (mountain_system)
- 四川盆地 (basin)
- 柴达木盆地 (basin)
- 云贵高原 (plateau)

已确认数据源: Natural Earth `ne_10m_geography_regions_polys` (v5.0.0)

## 禁止事项

以下内容不再维护:

- `cameraGeometry` — 手工 Camera 参数
- 手工 `target` 坐标
- 手工 `heading` / `pitch` / `range`
- 逐个修补秦岭、大兴安岭等 Camera 参数

Camera 必须从 Geometry 自动推导。

## 开发规范

- 不要在未完成审计前修改 Camera 逻辑
- 不要在未验证数据源前导入地形数据
- 每完成一个 Phase，先更新文档再提交代码
- 业务代码和文档分开提交
