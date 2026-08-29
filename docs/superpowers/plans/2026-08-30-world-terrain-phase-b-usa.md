# 全球地形 Phase B-1：美国（学习模式，≥25 地形）实施计划

> 设计见 `docs/superpowers/specs/2026-08-30-world-terrain-expansion-design.md`。
> Phase A（大洲重构）已完成（PR #25）。本计划：给 `north-america` 大洲填入美国的主要地形。

**目标**：`lib/terrain-registry.ts` 加 ≥25 个美国地形条目 + `lib/terrain-content.{zh,en}.ts`
双语 6 板块，`north-america` 大洲 `available:true`，四个自检通过，浏览器抽查。

**架构**：沿用现有单一真实源 + 数据驱动相机。新增条目 `regionId: "north-america"`,
`country: "usa"`。`places-registry.COUNTRY_TO_CONTINENT` 加 `usa: "north-america"`。

**全局约束（逐条 copy 自 spec）**：
- 每处坐标查权威来源（USGS / National Park Service / NOAA / USDA），`source` 字段留痕。
- 6 板块双语，核源标准同现有：去比较性 / 主观评价；有多说法的加"一般认为"或并列或不写；
  查不到的删；数字统一到权威口径 + 单位 + 年代。
- **零争议**：地名用 USGS GNIS / NPS 官方名；`history` 段只写自然史 + 被广泛记载的人类活动史，
  不涉及现代政治、原住民主权争议、党派议题；涉及原住民的表述遵循 NPS 官方措辞、只陈述事实。
- 分类按 `docs/terrain-taxonomy.md` 判据。`settlement` 类不收。
- `check-terrain-camera.ts` 每条通过（range/pitch/offset 在阈值内；大地形给 `viewScale`）。

---

## 候选地形清单（28，可增删）

| # | id | zh | en | category | 锚点 | 备注/来源 |
|---|----|----|----|----------|------|-----------|
| 1 | rocky-mountains | 落基山脉 | Rocky Mountains | mountain_system | Longs Peak / Mt Elbert | USGS |
| 2 | appalachian-mountains | 阿巴拉契亚山脉 | Appalachian Mountains | mountain_system | Mount Mitchell | USGS |
| 3 | sierra-nevada-us | 内华达山脉 | Sierra Nevada | mountain_system | Mount Whitney 4421m | USGS/NPS |
| 4 | cascade-range | 喀斯喀特山脉 | Cascade Range | mountain_system | Mount Rainier 4392m | USGS |
| 5 | alaska-range | 阿拉斯加山脉 | Alaska Range | mountain_system | Denali 6190m | NPS |
| 6 | colorado-plateau | 科罗拉多高原 | Colorado Plateau | plateau | 大峡谷北缘一带 | USGS |
| 7 | columbia-plateau | 哥伦比亚高原 | Columbia Plateau | plateau | — | USGS |
| 8 | yellowstone-plateau | 黄石高原 | Yellowstone Plateau | plateau | Yellowstone caldera | NPS/USGS |
| 9 | great-plains-us | 北美大平原（美国部分） | Great Plains | plain | — | USGS |
| 10 | mississippi-alluvial-plain | 密西西比冲积平原 | Mississippi Alluvial Plain | plain | — | USGS |
| 11 | central-valley-ca | 中央谷地 | Central Valley | plain | — | USGS |
| 12 | atlantic-coastal-plain | 大西洋沿岸平原 | Atlantic Coastal Plain | plain | — | USGS |
| 13 | great-basin | 大盆地 | Great Basin | basin | — | NPS/USGS |
| 14 | death-valley | 死亡谷 | Death Valley | basin | Badwater -86m | NPS |
| 15 | mojave-desert | 莫哈韦沙漠 | Mojave Desert | desert | — | NPS |
| 16 | sonoran-desert | 索诺兰沙漠 | Sonoran Desert | desert | Saguaro NP | NPS |
| 17 | chihuahuan-desert-us | 奇瓦瓦沙漠（美国部分） | Chihuahuan Desert | desert | — | NPS |
| 18 | great-salt-lake | 大盐湖 | Great Salt Lake | lake | — | USGS/Utah |
| 19 | great-lakes | 五大湖 | Great Lakes | lake | — | NOAA/USGS |
| 20 | grand-canyon | 大峡谷 | Grand Canyon | gorge | Bright Angel / South Rim | NPS |
| 21 | mississippi-river | 密西西比河 | Mississippi River | river | — | USGS |
| 22 | colorado-river | 科罗拉多河 | Colorado River | river | — | USGS |
| 23 | yosemite-valley | 优胜美地谷 | Yosemite Valley | valley | El Capitan / Half Dome | NPS |
| 24 | monument-valley | 纪念碑谷 | Monument Valley | inselberg | Navajo Nation（表述遵循官方） | NPS/Navajo Parks |
| 25 | everglades | 大沼泽地 | Everglades | plain | — | NPS |
| 26 | florida-peninsula | 佛罗里达半岛 | Florida Peninsula | coast | — | USGS |
| 27 | hawaiian-islands | 夏威夷群岛 | Hawaiian Islands | island | Mauna Loa / Kīlauea | USGS/NPS |
| 28 | outer-banks | 外滩群岛（北卡） | Outer Banks | coast | — | NPS |

> 逐条落地时：先 WebSearch 官方来源核锚点坐标 + 海拔 + 关键数字，再写条目和讲解。
> 跨境地形（奇瓦瓦沙漠、五大湖、落基山）标注"（美国部分）"或用地理学界通用名，不表述归属。

---

## 任务分解

### Task 1：注册表 —— 美国山脉（5 条）
- **Files**：`lib/terrain-registry.ts`（加 5 个 `TerrainEntry` const + 塞进 `TERRAIN_REGISTRY` 数组，
  新增 `// ===== 北美洲 / 美国 =====` 分节）；`lib/regions.ts`（`north-america` → `available:true`,
  `terrainCount` 先写 5）；`lib/places-registry.ts`（`COUNTRY_TO_CONTINENT.usa = "north-america"`）。
- Step 1：对 rocky-mountains / appalachian / sierra-nevada-us / cascade-range / alaska-range，
  逐个 WebSearch USGS/NPS 核锚点（主峰名 + 经纬度 + 海拔）、bbox、走向 axis。
- Step 2：按 AUSTRALIA 条目的格式写 5 个 const（`regionId:"north-america"`, `country:"usa"`,
  `source` 写来源关键词）。大山系给 `viewScale`（1.8–2.4）。
- Step 3：加进 `TERRAIN_REGISTRY`；`regions.ts` north-america `available:true` + `terrainCount:5`。
- Step 4：`node --experimental-strip-types scripts/check-regions.ts`（期望 111 个、0 异常）
  + `scripts/check-terrain-camera.ts`（期望 111/111）。
- Step 5：commit `feat(terrain): USA mountain systems (5) — north-america region`。

### Task 2：注册表 —— 美国高原/平原/盆地/沙漠/湖/峡谷/河/谷/半岛/岛（其余 ~20）
- 同 Task 1 流程，按 category 分 2–3 个 commit（高原+平原 / 盆地+沙漠+湖 / 峡谷+河+谷+岛+海岸）。
- 每 commit 后更新 `regions.ts` `terrainCount` 并跑 `check-regions` + `check-terrain-camera`。
- 大面积地形（大平原、大盆地、科罗拉多高原、五大湖、密西西比）进 `WIDE_VIEW` 给 `viewScale`。

### Task 3：双语 6 板块讲解 —— 美国（分批）
- **Files**：`lib/terrain-content.zh.ts` / `lib/terrain-content.en.ts`（按注册表 id 加条目）。
- 按 Task 1/2 的分节，每批 5–8 篇：逐地形逐段列可证伪陈述 → WebSearch USGS/NPS/NOAA 核 →
  写。字符串内引号一律中文引号。
- 每批跑 `npx tsc --noEmit`；写完全部后 `resolveLesson` 抽查（浏览器）。
- 每批 commit `content(terrain): USA <批次> lessons (zh + en)`。

### Task 4：标签重要度 + 文档 + 验证
- `lib/terrain-label-registry.ts` `IMPORTANCE_BY_ID`：落基山 / 大峡谷 / 五大湖 / 黄石 / 大平原
  等给 `national`；其余保持默认 `regional`。
- `CLAUDE.md` 范围段 + `docs/...` 进度；`README` 计数。
- 全量验证：`tsc` + `build` + 四个 check 脚本 + 浏览器（切 north-america，看标签 / rail 分类 /
  点若干地形看双语讲解 / 相机取景合理）。
- commit `docs: USA terrain set` + 开 PR。

---

## 验证（Definition of Done）

1. `npx tsc --noEmit` 干净
2. `rm -rf .next && npm run build` 通过
3. `check-regions` / `check-terrain-camera` / `check-places` / `check-routes` 全 0 异常
4. 浏览器：区域下拉里「北美洲」可选、显示条目数；切过去相机到北美；标签双语；
   rail 按分类列出；抽查 8+ 个地形，卡片态 + 文章态 6 段（settlement 除外无）都正常、
   取景是该地貌特征画面
5. 抽查讲解无比较级 / 主观评价 / 未标注争议说法 / 政治或主权表述；数字有来源
