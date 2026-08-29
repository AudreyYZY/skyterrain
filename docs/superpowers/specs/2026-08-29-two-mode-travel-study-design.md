# 两模式（学习 / 旅游）—— 设计文档

> 状态：**待审**。审定后 → 写实施计划（writing-plans）。
> 范围：本文档只定义**两模式架构 + Phase 1（澳大利亚旅游模式）**。
> Phase 2+ 的内容铺量见 §9 路线图，不在本文档的实施范围内。

---

## 1. 问题与目标

现在的 app 是一本"从舷窗看地球骨架"的自然地理图集。它对**地形戏剧、想学地理**的场景很强；
对**到一个陌生国家、需要先搞清城市/衣食住行/人文习俗**的场景几乎没用
（典型症状：用户在澳洲住两年，仍不知道"大自流盆地"是什么，也不关心）。

**目标**：把 app 分成两个可切换的模式，内容与界面各自独立、互不干扰：

| 模式 | 是什么 | 面向 |
|---|---|---|
| **学习模式**（`study`，现有）| 地形地貌图集：一个地区的地表怎么组织、为什么 | 地理好奇者、飞越戏剧性地形时想知道"那是什么" |
| **旅游模式**（`travel`，新增）| 城市攻略式概览：城市性格、衣食住行、人文习俗、何时去 | 到陌生国家/城市、想快速建立整体印象的人 |

**非目标**：不做订票/实时价格/导航/行程规划/账号/收藏/离线。旅游内容是编辑式概览，不是景点数据库。

---

## 2. 架构总览（Approach A：顶层开关 + 平行内容系统）

顶栏加 `学习 / 旅游` 开关（在区域选择器旁），状态存 `localStorage`（key `fge-app-mode`），刷新记住。
切模式时地图内容、侧边栏、右侧讲解、航线解说整套切换；地球、相机、语言、引导页不变。

### 2.1 共用 vs 分开

| 组成 | 共用 | 学习模式 | 旅游模式 |
|---|:---:|---|---|
| Cesium 地球 / 相机系统 / 语言(zh-CN,en-US) / IntroOverlay | ✅ | | |
| 国家轴（`lib/regions.ts`：china / australia） | ✅ | | |
| 航线数据 + `flyRoute` 飞行机制 | ✅ | 解说讲"沿途地貌成因" | 解说讲"起降城市 + 途经 + 目的地速写" |
| 地图图层 | | 地形标签(`CesiumOverlayLabels`) + 细描边(`terrainRegion`) | 城市点 + 机场(`CityMarkers`，新) |
| 侧边栏(`IndexRail`) | | 地貌分类（山脉/高原/…14 组） | 城市列表 + "国家概览"入口 |
| 右侧讲解(`ReadingPanel`) 面板外壳 | ✅ | `terrain-content`（6 段，已完成 106 条） | `travel-content`（6 段，新） |
| 注册表 | | `terrain-registry`（106 条 `TerrainEntry`） | `places-registry`（城市 + 国家概览，新） |

**关键**：学习模式的所有文件一个都不动；旅游模式全部是新增文件。用户的"两套内容互不影响"由此保证。

---

## 3. 数据模型（新增）

### 3.1 `lib/places-registry.ts`

```ts
export type PlaceTier = "capital" | "major" | "notable"; // 决定 zoom 分级显示

export interface CityEntry {
  id: string;                 // kebab-case，如 "sydney"
  nameZh: string;
  nameEn: string;
  country: string;            // regionId，与 regions.ts 对齐："australia" / "china"
  tier: PlaceTier;
  lon: number;
  lat: number;
  airport?: { iata: string; nameZh: string; nameEn: string; lon: number; lat: number };
  /** 相机：城市上空斜视角，给定即可，不做推导 */
  view?: { heightM?: number; pitchDeg?: number; headingDeg?: number };
  source: string;             // 坐标/机场来源留痕
}

export interface CountryOverviewEntry {
  country: string;            // regionId
  nameZh: string;
  nameEn: string;
}

export const CITY_REGISTRY: CityEntry[];
export const COUNTRY_OVERVIEWS: CountryOverviewEntry[];
export function getCitiesForCountry(country: string): CityEntry[];
export function getCityById(id: string): CityEntry | undefined;
```

- 相机默认值（未给 `view` 时）：`heightM = 26000`，`pitchDeg = -45`，`headingDeg = 0`。城市不需要复杂取景。
- 无 geojson、无边界，纯点。

### 3.2 `lib/travel-content.{zh,en}.ts`

`Record<string, TravelGuide>`，id 同 `places-registry` / 或 `"<country>-overview"`。

```ts
export interface TravelGuide {
  /** 1. 这是座什么城 —— 性格、地位、第一印象 */
  identity: string;
  /** 2. 地理与格局 —— 为什么在这里、坐落在什么地形、分几个片区 */
  layout: string;
  /** 3. 衣食住行 —— 气候穿衣、当地饮食、住哪片、怎么走动 */
  gettingAround: string;
  /** 4. 人文与习俗 —— 语言/方言、生活节奏、习俗与禁忌、节庆 */
  culture: string;
  /** 5. 看什么 · 体验什么 —— 标志性去处与体验，讲精髓非穷举 */
  seeAndDo: string;
  /** 6. 什么时候去 · 实用提示 —— 最佳季节、注意事项、与周边连接 */
  whenAndTips: string;
}
```

- 面板 / 朗读的板块顺序与标题在 `lib/travel-lesson.ts` 里定义（与 `lib/lesson.ts` 平行）。
  中文标题：概览 / 地理与格局 / 衣食住行 / 人文与习俗 / 看什么·体验什么 / 何时去·提示。
  英文：Overview / Layout / Getting around / Culture / See & do / When to go & tips。
- **国家概览**（`"australia-overview"` 等）也用同一 `TravelGuide` 结构，语义微调：
  identity=这个国家的整体印象；layout=地理分区（如"东岸城市带 / 中部内陆 / 西部 / 塔州"）；
  其余段落讲全国层面的气候带、饮食、习俗、签证与入境、什么季节来。

### 3.3 `lib/travel-lesson.ts`

```ts
export const TRAVEL_SECTION_ORDER = ["identity","layout","gettingAround","culture","seeAndDo","whenAndTips"] as const;
export function travelSectionHeading(key: string, lang: Language): string;
export function resolveTravelGuide(id: string, lang: Language): TravelGuide | null;
// 优先级：travel-content(该语言) → travel-content(另一语言兜底) → null（面板显示占位）
```

### 3.4 航线旅游解说

`lib/route-narration.ts` 现为 `Record<routeId, Record<Language, string>>`。改为：

```ts
type RouteNarration = Record<"study" | "travel", Record<Language, string>>;
export const ROUTE_NARRATION: Record<string, RouteNarration>;
export function getRouteNarration(routeId: string, lang: Language, mode: "study" | "travel"): string | null;
```

- 现有 4 条航线的 `study` 解说原样迁入 `ROUTE_NARRATION[id].study`。
- `travel` 解说 **Phase 2 才写**（4 条航线全是中国航线，随中国旅游内容一起做）。
  在 `travel` 缺失时 `getRouteNarration` 返回 `null`，旅游模式对该航线不显示"开始飞行"。

---

## 4. 模式接线

### 4.1 新增 `lib/travel-mode.ts` / `lib/study-mode.ts`

ExplorerApp 现在把"地形"逻辑内联在约 5 处：① 喂地图的实体列表 ② 侧边栏分组
③ 点击选中 → 解析讲解 ④ 航线解说 ⑤ 传给 CesiumMap 的图层类型。

把每个模式这 5 处需要的装配抽成一个模块，各导出一个 `ModeConfig`：

```ts
export interface ModeConfig {
  mode: "study" | "travel";
  mapLayer: "terrain" | "cities";
  /** 侧边栏分组（按当前国家、语言） */
  sidebarGroups(country: string, lang: Language): RailGroup[];
  /** 侧边栏/地图选中某 id 后，右侧面板要显示的分节内容 */
  resolveSections(id: string, lang: Language): { key: string; heading: string; text: string }[] | null;
  /** 航线解说 */
  routeNarration(routeId: string, lang: Language): string | null;
  /** 地图图层数据（terrain: 用现有 TERRAIN_LABELS；cities: CITY_REGISTRY 过滤本国） */
}
```

ExplorerApp：`const cfg = mode === "travel" ? TRAVEL_MODE : STUDY_MODE;`，把现在内联地形逻辑的
5 处改成走 `cfg.*`。**顺手给已偏大的 ExplorerApp 减负**——把学习模式那套装配也搬进 `study-mode.ts`。

> 不追求一步到位的完美抽象：先"分支 + 分文件"。若后续分支点增多再统一。

### 4.2 CesiumMap 收 `mode` prop

- `mode === "study"`：现有行为（地形标签 + 细描边 + 区域抬升拾取），不变。
- `mode === "travel"`：隐藏地形标签层和 `terrainRegion` 三件套；挂载 `CityMarkers` 层；
  点击城市点 → `focusCity(id)` → 相机飞到城市斜视角（用 `CityEntry.view` 或默认值）。

### 4.3 ExplorerApp 状态

新增 `const [mode, setMode] = useState<AppMode>(() => localStorage 读取 ?? "study")`；
`setMode` 时写 localStorage、清空当前选中项（`activeTerrain`/`lesson`/`routeNarration` 等）、
调用 `mapRef.current.flyToRegion(activeRegion)` 把相机拉回当前国家的总览视角。
切模式**不**改 `activeRegion`（国家轴共用）。

### 4.4 ReadingPanel 通用化

`ReadingPanel` 现在直接吃 `TerrainLesson` 类型。改为吃一个通用分节数组
`{ key: string; heading: string; text: string }[]`（由 `ModeConfig.resolveSections` 产出），
面板只负责渲染分节 + 逐句高亮，不关心是地形还是攻略。学习模式的调用点把 `TerrainLesson`
经 `lessonSections` + `sectionHeading` 转成这个数组即可，渲染行为不变。

---

## 5. 城市地图图层：`components/CityMarkers.tsx`

参照 `components/CesiumOverlayLabels.tsx` 的实现路子——HTML 覆盖层（不是 Cesium entity）。

- 复用 `CesiumOverlayLabels` 里的 `projectToScreen`（含 `EllipsoidalOccluder` 地球背面剔除）。
  可把这个函数抽到 `lib/cesium-project.ts` 供两个覆盖层共用。
- 每个城市渲染：一个小圆点 + 城市名（`nameZh` / `nameEn` 跟随语言）。机场：更小的次级图标。
- `tier` → zoom 分级：`capital` 早显示，`notable` 放大到一定程度才显示（阈值参照标签系统）。
- `hover` 放大高亮；`click` 触发选中（走 ExplorerApp 的统一入口）。
- 碰撞剔除：同 `resolveOverlaps` 思路，`tier` 高的优先占格。

---

## 6. 航线双解说

- `flyRoute` 机制不动；`onNarrate` 回调按 `mode` 取 `getRouteNarration(id, lang, mode)`。
- `JourneyBar` 的航线 chip 副标题按 mode 换：`study` 显示地形串（"太行山·黄土高原·…"），
  `travel` 显示城市串（"北京 → 途经 X、Y → 乌鲁木齐"）。
- `travel` 解说缺失的航线（Phase 1 全部）：chip 仍显示航班信息，但"开始飞行"按钮禁用/隐藏。

---

## 7. Phase 1 交付内容（本设计的实施范围）

**代码：**
1. `AppMode` 状态 + 顶栏开关 + localStorage 持久化
2. `lib/places-registry.ts` `lib/travel-content.{zh,en}.ts` `lib/travel-lesson.ts`（结构 + 澳洲数据）
3. `lib/travel-mode.ts` `lib/study-mode.ts` `ModeConfig` 接线
4. `components/CityMarkers.tsx` + `lib/cesium-project.ts`（抽公共投影）
5. CesiumMap 收 `mode` prop，按模式切图层
6. `route-narration.ts` 结构改造（`study`/`travel` 两层），现有 4 条迁入 `study`
7. `IndexRail` / `ReadingPanel` / `JourneyBar` 接受 `mode`，旅游模式渲染城市列表 / 攻略 / 城市串

**内容（澳大利亚旅游，中英双语，6 段模板）：**
- 澳大利亚国家概览 1 篇（`australia-overview`）
- 城市攻略 **7 篇**：悉尼、墨尔本、布里斯班、珀斯、阿德莱德、凯恩斯、达尔文
  （黄金海岸紧邻布里斯班，暂不单列）
- 来源：Tourism Australia / 各州旅游局 / 澳大利亚气象局气候数据 / 内政部签证入境信息 /
  公认旅行指南共识。可查的照实；主观的（"最佳季节""值得一去"）写成一般性建议、不绝对化。

**验证：**
- `npx tsc --noEmit` / `npm run build` 干净
- `node --experimental-strip-types scripts/check-terrain-camera.ts` 106/106（学习模式不受影响）
- 新增 `scripts/check-places.ts`：每个城市坐标合法、有对应 travel-content、country 在 regions 中
- 浏览器：切到旅游模式 → 地形层消失、城市点出现 → 点悉尼 → 相机飞过去 + 右侧 6 段攻略 →
  切回学习模式一切如常 → 切语言两模式都跟随

---

## 8. 明确不做（YAGNI）

- 不加新的地形国家、不加新航线（`docs/routes.md` §5 的 6 条候选继续搁置）
- 不做订票 / 实时价格 / 地图导航 / 行程规划
- 不做账号、不做收藏（收藏见 `memory/feature-ideas.md`，单独排期）
- 不做离线 / PWA
- 旅游内容不做景点数据库、不做"必去清单"打分
- 国家概览每国一篇，不按大区拆
- 城市不画边界多边形（纯点）
- 旅游模式的区域高亮：不做（城市是点，选中靠相机 + 面板）

---

## 9. 路线图（本设计实施范围之外，用户已确认的意图）

1. **Phase 1** — 两模式架构 + 澳大利亚旅游模式（6–8 城）← 本设计
2. **Phase 2** — 中国旅游模式（约 15–25 城）+ 给现有 4 条中国航线补旅游版解说 +
   `docs/routes.md` §5 里的中国候选航线（北京—广州、上海—成都、重庆—上海、哈尔滨—上海等）落地
3. **Phase 3+** — 按国家滚动，每国**两个模式都尽量做全**：先旅游模式（陌生国家的刚需），
   地形模式紧随

> **规模提示（供决策，非阻塞）**：Phase 3 "全世界大部分国家" 是很大的持续内容工程——
> 每国旅游模式约 10–20 城 × 6 段 × 双语；地形模式约 15–25 条 × 6 段 × 双语 + 坐标核实 +
> 相机自检（+ 部分 geojson）。建议每国按 "旅游模式先行、地形模式随后" 分两批交付，
> 低起伏国家（欧洲低地、美东等）的地形模式可只做骨架级（少而精），把精力放在旅游模式。
> 每国单独一个 PR。

---

## 10. 单元职责一览（Approach A 的模块边界）

| 模块 | 做什么 | 依赖 | 谁用它 |
|---|---|---|---|
| `lib/places-registry.ts` | 城市/机场/国家概览的**位置单一真实源** | regions | travel-mode、CityMarkers、check-places |
| `lib/travel-content.{zh,en}.ts` | 城市攻略文本（6 段） | 类型 | travel-lesson |
| `lib/travel-lesson.ts` | 一处决定"某城某语言用哪份攻略" + 板块顺序/标题 | travel-content | travel-mode |
| `lib/travel-mode.ts` / `study-mode.ts` | 把一个模式在 ExplorerApp 5 处需要的装配打包成 `ModeConfig` | 各自的 registry/content | ExplorerApp |
| `components/CityMarkers.tsx` | 旅游模式的城市点覆盖层（投影 + 分级 + 点击） | cesium-project、places-registry | CesiumMap（mode=travel 时） |
| `lib/cesium-project.ts` | 经纬度 → 屏幕坐标 + 背面剔除（从 CesiumOverlayLabels 抽出） | cesium | CesiumOverlayLabels、CityMarkers |
| `route-narration.ts` | 每条航线 × 模式 × 语言 一段解说 | i18n | ExplorerApp（onNarrate） |
