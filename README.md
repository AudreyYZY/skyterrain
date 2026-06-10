# Flight Geography Explorer

飞机视角中国地貌探索系统 — 以乘客舷窗视角，结合三维地球、飞行镜头与语音讲解，探索中国壮丽地形。

## 功能

- **三维地球浏览**：CesiumJS 全球地形 + Bing Maps 卫星影像
- **地貌探索**：32 处新疆地形 + 15 处全国核心地貌
- **飞行镜头**：自动飞向目标地貌，模拟飞机舷窗视角
- **语音讲解**：Edge TTS 中英文播报，逐句高亮
- **地貌标签**：Google Earth 风格，沿山脊方向，LOD 分级
- **地貌边界**：Natural Earth GIS 数据，真实地理边界
- **航线飞行**：自动航线讲解，途经地形自动播报
- **中英双语**：一键切换中文/英文，语音同步切换

## 技术栈

- Next.js 16 (App Router) + TypeScript
- CesiumJS 1.141 (3D 地球)
- Tailwind CSS v4
- Edge TTS (edge-tts-universal)

## 快速开始

```bash
npm install
cp .env.example .env.local
# 编辑 .env.local，填入 Cesium Ion Token

npm run dev
```

浏览器打开 http://localhost:3000

### 环境变量

| 变量 | 必填 | 说明 |
|------|------|------|
| `NEXT_PUBLIC_CESIUM_ION_TOKEN` | 是 | Cesium Ion Token |

## 项目结构

```
app/
  api/tts/route.ts          — Edge TTS API
  globals.css               — 样式
  page.tsx                  — 入口

components/
  CesiumMap.tsx             — 3D 地球 + 飞行系统
  CesiumOverlayLabels.tsx   — 地貌标签
  ExplorerApp.tsx           — 主编排器
  FlightControls.tsx        — 侧边栏
  NarrationPanel.tsx        — 信息面板
  StructuredLesson.tsx      — 讲解内容

features/
  china-core-features.ts    — 全国 15 个核心地貌
  xinjiang-core-features.ts — 新疆 8 个核心地貌
  types.ts                  — GeographicFeature 类型

terrain-dataset/
  schema/                   — 数据模型 Schema

lib/
  i18n.ts                   — 国际化 (中/英)
  i18n-stories.ts           — 地形故事翻译
  speech.ts                 — TTS 系统
  terrain.ts                — 地形注册表
  cinematic-labels.ts       — 标签管理器

data/
  *.json                    — 新疆地形数据 (32 处)
  gis/exports/              — GIS 边界数据
```

## 数据模型

```
TerrainEntity      — 地理对象 (事实层)
GeometryRecord     — GIS 几何层
FeatureOfInterest  — 用户探索对象
Story              — 纪录片内容
KnowledgeLink      — 知识图谱
ProvenanceRecord   — 数据来源追溯
```

## 架构决策

详见 `docs/architecture-decisions/`

- ADR-001: Region First, Label Second
- ADR-002: Geographic Feature Model
- ADR-003: Real GIS Geometry Only
- ADR-004: Terrain Identity Layer
- ADR-005: GIS Source of Truth
- ADR-006: Separate Geometry Sources
- ADR-007: Trust Before Beauty

## 数据来源

| 数据 | 来源 |
|------|------|
| 地形边界 | Natural Earth 10m Physical Vectors |
| 湖泊边界 | HydroLAKES |
| 地名 | GeoNames |
| 卫星影像 | Bing Maps (Cesium Ion) |
| 地形高程 | Cesium World Terrain |

## 许可

本项目的源代码根据 [GNU Affero General Public License v3.0](LICENSE) 开源。

**商业使用需要单独授权**。任何商业用途（包括但不限于作为后端服务使用、嵌入商业产品、作为付费服务的一部分提供）需事先获得版权所有者的书面许可。

有关商业授权请联系作者。
