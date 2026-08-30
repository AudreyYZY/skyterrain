# 航线扩展 —— 每国国内航线 + 国际航线 + JourneyBar 重做

> 用户要求（2026-08-30）：先把各国航线做全，再更新旅游城市，然后继续其它国家地形。
> 航线要「准确无争议」、解说 ≤3 分钟、点其它国家/城市时不显示无关航线。

## 数据模型（已完成）

- `FlightRoute` 加 `depCountry` / `arrCountry`（slug）。相同 = 国内，不同 = 国际。
- `data/routes/manifest.ts` 统一注册所有航线 JSON —— **新增航线只改这一处**
  （`lib/routes.ts` 和 `scripts/check-routes.ts` 都从这里 import）。
- `lib/routes.ts`：`routesForCountry(slug)` → `{domestic, international}`；
  `routeCountriesForContinent`、`routeCountryLabel`、`isDomesticRoute`、
  `routeSearchText` / `routeMatches`（按起点/终点/航班号/沿途地形搜索）。
- `components/JourneyBar.tsx`（PR #42 重做）：平时窄条（已选航线 + 开始/停止）；
  点开 = 搜索框 + 国家 pill + 国内/国际列表；选中一条即收起。
  `ExplorerApp` 的 `routeCountry` state：选某国地形 → 自动切到该国航线。
- `CesiumMap.flyRoute`（PR #42 重写）：预取全部航点镜头位置，一条 rAF 曲线一次飞完
  （Catmull-Rom + smoothstep + 切向朝向），恒定巡航高度；用户滚轮/拖动即交还镜头。
  地图底部「✈ 正在飞越 · {地形}」浮层；ReadingPanel 航线态可 ✕（停止）/ ▾（折叠）。

## 每条航线的做法

1. `data/routes/<dep>-<arr>.json`：真实商业航线（`flight.flightNo` / `aircraft`
   以公开时刻表为准，注意可能变动），waypoints = 起降机场 + 沿途 terrain id
   （必须在 `TERRAIN_REGISTRY`，相邻不能同坐标，整体航程与时长量级一致）。
2. `manifest.ts` 加 import + 数组项。
3. `lib/route-narration.ts` 写 `ROUTE_NARRATION[id].{study,travel}` 中英四段：
   - study：这条线依次飞越的地貌 + 彼此地理关系 + 关键知识点，区域地理教材口径，
     不写比较级/主观评价，少用需逐一核实的精确数字。~500–700 中文字。
   - travel：落地城市的气候/交通/季节/注意事项，~330–450 字。
   - **进藏航线（LXA 到达）travel 必须写「外国游客需西藏旅行许可 +
     随有资质旅行社结伴、按报备行程出行」。**
   - `check-routes` 上限：中文任一段 > 900 字 = 超 3 分钟，报错。
4. `node --experimental-strip-types scripts/check-routes.ts` 通过；浏览器抽查。

## 进度

### 中国国内 —— ✅ 20 条（`feat/routes-china`，stack 在 `fix/rail-intro-ui` / PR #39 上）
- 原有 4：pek-urc · ctu-lxa · can-lxa · urc-khg
- 批 1：sha-kmg · ctu-sha · can-pek · xiy-urc
- 批 2：xnn-lxa · ckg-lxa · pek-inc · pek-hrb
- 批 3：hrb-can · pek-sha · can-hak · pek-kwl
- 批 4：xiy-ctu · urc-htn · kmg-lxa · sha-hrb
- 覆盖：华北/东北/长江中下游/关中/成都/黄土/河西走廊/祁连/天山/横断/青藏/塔克拉玛干/
  云贵/南岭/珠三角/长三角/山东丘陵/辽东丘陵/秦岭/大巴山/贺兰山/毛乌素/雷州/海南/
  两广喀斯特/洞庭/青海湖/昆仑/念青唐古拉/虎跳峡/雅鲁藏布大峡谷/三峡 等。
- 待补（批 5，可选）：大兴安岭（呼和浩特—海拉尔）· 长白山（沈阳/长春—延吉）·
  柴达木（西宁—格尔木）· 帕米尔（喀什—塔什库尔干？多为陆路）· 三亚 / 张家界 / 黄山方向。

### 中国国际 —— ⬜ 待做
连接其它已收录国家、可跳转（航线飞完 → 切到到达国大洲 + routeCountry）：
- 北京 / 上海 — 东京（日本，`asia`，同洲）
- 昆明 — 曼谷？（泰国未收录，先跳过）
- 乌鲁木齐 — 阿拉木图？（哈萨克未收录）
- 先做中日之间 1–2 条，其余等目的国收录。
`ExplorerApp.handleStartRoute` 的 `onComplete` 已预留：`arrCountry !== depCountry`
时可切大洲 + `setRouteCountry(arrCountry)`（当前未接，接的时候加 `continentOfCountrySlug`）。

### 其它国家 —— ⬜ 逐国国内航线 + 旅游城市（一个国家一起做）
顺序：**日本** → 澳大利亚 → 新西兰 → 美国 → 加拿大 → 英国 → 冰岛 → 瑞士 → 挪威 → 法国 → 意大利。
每国：国内航线（真实航班，覆盖代表性地形，双语解说 ≤3 分钟）+ 旅游城市
（4–6 座，places-registry + travel-content 6 段 + travel-pois）。
分支 `feat/routes-<country>`，stack 在上一个上。

PR 栈：main ← #39 ← #40 ← #41 ← #42 ←（日本…）。按序合并，合并后把下一个 PR base 改 main。

## 相关：旅游城市扩充

**中国 —— ✅ 18 城（`feat/travel-cities-china` / PR #41，stack 在 #40 上）**
原 10 + 南京 · 三亚 · 拉萨 · 哈尔滨 · 青岛 · 张家界 · 丽江 · 敦煌。
每城：`places-registry` + `travel-content.{zh,en}` 6 段 + `travel-pois`；`check-places` 25/0。
拉萨含西藏许可提示 + 参观礼仪、不涉现代政治。
待补（可选）：苏州 / 大理 / 乌鲁木齐 / 平遥 等。

**其它国家 —— ⬜** 随各国航线一起做（每国 4–6 城）。
