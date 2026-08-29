# 全球地形扩展 —— 设计

> 学习模式从「中国 + 澳大利亚」扩展到全世界主要地形。
> 状态：设计（待用户复核）。

## 目标

把全世界主要地形，准确、完整地加入**学习模式**（study）。每处地形都有：
- 注册表条目（位置 / 锚点 / 范围 / 走向 / 中英名 / 来源）；
- 双语 6 板块权威讲解，核源标准同现有中国 / 澳大利亚内容。

旅游模式（travel）不在本设计范围，但区域重构会顺带调整它的目录组织。

## 用户已确认的决策

1. **按大洲分组**，顶栏区域切换器从横排按钮改为**下拉菜单**。
2. **中国并入「亚洲」，澳大利亚并入「大洋洲」**——不再有独立的「中国」「澳大利亚」region。
   （现有 106 个条目的 `regionId` 从 `china` / `xinjiang` / `australia` 迁移到 `asia` / `oceania`。）
3. 其余大洲按同样方式新增：`europe` / `africa` / `north-america` / `south-america`
   （`antarctica` 视情况，暂缓）。
4. **每个国家先至少 25 个主要地形**，后续可能更细化。
5. **数据完全准确真实，零争议**：
   - 所有文字内容查询**每个国家的官方信息**（地质调查机构 / 国家公园管理局 / 官方地名机构 /
     UNESCO / 官方旅游或统计机构）。
   - **不得出现任何政治、地理、文化争议**。可能有争议的内容 → 删掉，或换成中性、被广泛接受的表述。
6. **广度优先**：先把注册表 + 双语 6 板块讲解都写全；相机精校、真实边界多边形之后再逐步补。

## 架构

### 数据模型改动（`lib/terrain-registry.ts`）

- `TerrainEntry.regionId` 语义改为**大洲 id**：`asia` / `oceania` / `europe` / `africa` /
  `north-america` / `south-america`。
- **新增 `TerrainEntry.country: string`**（国家 slug，如 `china` / `australia` / `usa` /
  `canada` / `japan`）——用于管理、溯源、与旅游模式对齐。现有条目：
  - 30 个 `xinjiang` + 54 个 `china` → `regionId: "asia"`, `country: "china"`
  - 22 个 `australia` → `regionId: "oceania"`, `country: "australia"`
- `WIDE_VIEW`、`label`、`viewFrom`、`viewScale` 等机制不变。

### 区域配置（`lib/regions.ts`）

`REGIONS` 改为大洲数组。每个大洲：
```ts
{ id: "asia", name: "亚洲", nameEn: "Asia",
  center: { lon, lat, height },   // 该洲的取景中心
  terrainCount: <该洲条目数>,       // 由脚本核对，不手填错
  available: true }
```
`center` 取该洲陆地质心附近、`height` 取能框住该洲的高度（浏览器里校准）。

保留一个「默认大洲」常量 `DEFAULT_REGION_ID = "asia"`（取代 ExplorerApp 里散落的
`activeRegion === "china"` 硬编码判断）。

### 顶栏区域切换器（`components/RegionSelector.tsx`）

- 从「N 个横排 pill」改为**下拉菜单**：一个触发按钮显示当前大洲名 + ▾，
  点开是大洲列表（禁用态表示"内容建设中"）。
- 键盘可达（方向键 + Enter + Esc），点外部关闭。
- 视觉沿用现有 token（琥珀选中态、发丝线、`--panel-solid` 背景）。
- 移动端：同一个下拉，列表用较大的点击区。

### `localStorage` 迁移

`fge-active-region` 读时映射旧值：`china` / `xinjiang` → `asia`，`australia` → `oceania`，
其余未知值 → `DEFAULT_REGION_ID`。写入只写新的大洲 id。

### 学习模式过滤（`components/ExplorerApp.tsx`）

- `ALL_FEATURES` 的 `region` 字段：直接用 `e.regionId`（已是大洲），删掉
  `=== "xinjiang" ? "china"` 的特判。
- `.filter((f) => f.region === activeRegion)` 不变（现在按大洲过滤）。
- `activeRegion === "china"` 的两处硬编码（初始 intro gate、初始 fly）改为
  `activeRegion === DEFAULT_REGION_ID`。
- `terrain-label-registry.ts`：删 `xinjiang → china` 映射，`regionId` 直接透传（已是大洲）。

### 旅游模式目录（`lib/travel-rail.ts` / `lib/places-registry.ts`）

- `places-registry.ts`：`CityEntry` / `CountryOverviewEntry` 的 `country` 字段保留（国家 slug）。
  新增 `COUNTRY_TO_CONTINENT: Record<string, string>` 与 `getCountriesForContinent(continent)`。
- `travelRailGroups(continent, language)`：改为**按国家分组**——
  该大洲下每个「有城市或有概览」的国家 = 一个分组，组内 = [国家概览项 + 该国城市列表]。
  只有一个国家时（如大洋洲目前只有澳大利亚）自动展开，与现在体验一致。
- `CityMarkers`：`getCitiesForContinent(activeRegion)`（新）取代 `getCitiesForCountry(activeRegion)`。
- `flyToCountryOverview`：改为 `flyToRegionOverview`（飞当前大洲中心）；国家概览项点击时
  飞该国的一个代表城市 / 该国质心（`places-registry` 里给国家一个 `overviewView`）。

### 自检脚本

- `scripts/check-terrain-camera.ts`：不变（遍历全注册表）。新增条目需通过 range / pitch / offset。
- `scripts/check-places.ts`：`country ∈ COUNTRY_TO_CONTINENT`；continent ∈ REGIONS。
- **新增 `scripts/check-regions.ts`**：
  - `REGIONS[*].terrainCount` == 该大洲实际条目数；
  - 每个 `TerrainEntry.regionId ∈ REGIONS`、`country` 非空；
  - 每个大洲至少 1 个条目才 `available: true`；
  - 打印每洲 / 每国条目数一览。

## 内容标准（沿用并强化）

- **来源**：每处地形注明查证来源关键词（该国地质调查局 / 国家公园管理局 / 官方地名机构 /
  UNESCO / 官方统计或旅游机构）。写进 `source` 字段和（必要时）段末。
- **核源**：去比较性 / 主观评价（"最壮观""举世无双"）；有多种说法的加"一般认为"或并列或不写；
  查不到可靠来源的删；数字统一到权威口径、注明单位。
- **零争议**（本次特别强调）：
  - **地名**：用被广泛接受的中性地理名；有并用名的以事实方式并列（"A，也称 B"），
    不表述主权归属。跨境地形用地理学界通用名。
  - **政治 / 文化**：`history` 段只写公认的自然史与被广泛记载的人类活动史，
    不涉及现代政治争议、领土争议、宗教或族群评价。可能踩线 → 删该句或换中性表述。
  - 分类争议：按 `docs/terrain-taxonomy.md` 判据；说不清的宁可不收。
- `settlement` 类（人文聚落）在国际扩展里**默认不收**，除非满足 taxonomy 的 H1–H3 且无争议。

## 分期

### Phase A —— 大洲重构（无新内容）

把现有 106 个地形从「国家 region」迁到「大洲 region」，顶栏改下拉，旅游目录改按国家分组，
localStorage 迁移，全部自检 + 浏览器回归通过。**产出：可用的大洲结构，行为与现在等价。**

### Phase B 起 —— 逐国内容（每期 1 国，≥25 地形）

优先顺序（按地形代表性 + 旅行热度，可调）：
1. 美国 · 2. 加拿大 · 3. 日本 · 4. 新西兰 · 5. 英国 · 6. 冰岛 · 7. 瑞士 · 8. 挪威 ·
9. 法国 · 10. 意大利 · 11. 尼泊尔 · 12. 印度 · 13. 巴西 · 14. 秘鲁 · 15. 智利 · 16. 阿根廷 ·
17. 南非 · 18. 埃及 · 19. 肯尼亚/坦桑尼亚 · 20. 印度尼西亚 · …（其余滚动）

每期：注册表条目（坐标核源）+ 双语 6 板块讲解 + 标签重要度 + `regions.ts` terrainCount 更新 +
三个自检通过 + 浏览器抽查 + 单独 PR。

## 复用

- `computeTerrainCamera` / `TERRAIN_REGISTRY` / `WIDE_VIEW`（相机与单一源）
- `resolveLesson` / `getTerrainContent` / 6 板块 `TerrainLesson`
- `importanceOf` 默认 `regional`（新条目自动出标签，无需逐条补）
- `flyToRegion` / `CesiumOverlayLabels` regionId 过滤（已支持多 region）
- bbox 八边形高亮兜底（无真实边界 geojson 也能用）

## 不做 / 暂缓

- 真实边界多边形（`extract-ne-landforms`）—— 广度优先，之后补
- 相机逐个精校 —— 先让自检过，浏览器里发现明显问题再调
- 南极洲 region
- 各国旅游模式内容（travel）—— 另行按旅游热度推进
- 各国航线 —— 另行推进
