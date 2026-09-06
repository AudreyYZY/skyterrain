# CLAUDE.md

> Project instructions for Claude Code sessions.
> Read this file first before making any changes.

---

## 产品定位

**Flight Geography Explorer** — 飞机视角地貌认知系统

不是 GIS 仪表盘，不是飞行模拟器，不是游戏。

是一个让用户从飞机舷窗视角，认知地球地貌的纪录片式 Web 应用。

**两种模式**（顶栏切换，`localStorage` 记住 `fge-app-mode`）：
- **学习模式** `study` —— 地形地貌图鉴（默认；下文绝大部分内容都是这条链路，未改动）。
- **旅游出行模式** `travel` —— 城市 / 衣食住行 / 人文习俗 / 出行提示的概览。
  两套内容系统平行、互不影响：travel 只新增文件，study 链路原样保留。

## 范围

- **已有**: 亚洲（中国 79 + 日本 26 + 韩国 28 + 蒙古 26 + 泰国 25 + 越南 25 + 马来西亚 26 +
  新加坡 12 + 菲律宾 22 + 印度尼西亚 26 + 哈萨克斯坦 26 + 土耳其 28 = 349）+ 欧洲（英国 33 +
  冰岛 28 + 瑞士 27 + 挪威 28 + 法国 29 + 意大利 30 + 西班牙 26 + 德国 26 + 希腊 26 + 葡萄牙 26 +
  荷兰 24 + 奥地利 26 + 比利时 26 + 瑞典 26 + 芬兰 26 + 爱尔兰 28 + 丹麦 25 + 卢森堡 12 +
  波兰 25 + 克罗地亚 26 + 捷克 26 = 549）+ 北美洲（美国 26 + 加拿大 25 = 51）+
  大洋洲（澳大利亚 34 + 新西兰 30 = 64），
  中英双语，共 1013 个
  （`node --experimental-strip-types scripts/check-regions.ts` 每次运行都会打印准确计数，
  这份汇总数字如果又和它对不上，以脚本输出为准并回来改这一行）
  - 地形集选取标准与分类定义见 `docs/terrain-taxonomy.md`（T1 骨架 / T2 地貌省 / T3 标志地点；
    分类判据）
  - **`settlement`（绿洲·聚落）分类已废弃（2026-09-04）**：与真实地貌并排展示时显得违和，
    整体从地形注册表移除。中国 5 个条目（喀什/和田/吐鲁番/巴楚/麦盖提）迁移到旅游模式
    城市（见下方旅游模式进度）；荷兰 2 个条目（台丘聚落/羊角村）直接删除。详见
    `docs/terrain-taxonomy.md` §8 顶部的废弃说明。
- **进行中**: 全球主要地形（按大洲分组，逐国推进，每国 ≥25 个），见
  `docs/superpowers/specs/2026-08-30-world-terrain-expansion-design.md`
- **远期**: 全球地貌探索

**区域 = 大洲 → 次区域两级**（`lib/regions.ts`）。大洲 `REGIONS`：`asia` / `europe` / `africa` /
`north-america` / `south-america` / `oceania`；`DEFAULT_REGION_ID = "asia"`。次区域按联合国 M49
（`SUBREGIONS` 全量 + `COUNTRY_TO_SUBREGION` 每国一行 + `COUNTRIES` 显示名/目录顺序；
辅助 `countriesForContinent` / `subregionOfCountry` / `subregionsForContinent` / `getCountryMeta`）。
注册表条目 `regionId` 填大洲、`country` 填国家 slug（大洲由 `COUNTRY_TO_SUBREGION` 派生，必须一致）。
- 顶栏 `RegionSelector` = 大洲下拉，多次区域的大洲展开二级（点次区域→飞该次区域地形重心，
  重心由 `lib/subregion-geo.ts` 从注册表算）。
- 左侧 `IndexRail` 目录按**当前大洲下的国家**分栏（不再按分类/添加顺序）：国家序 = 次区域地理序 →
  `COUNTRIES` 序；国家内地形序 = T1→T2→T3（`lib/terrain-tier.ts`）再骨架类地貌优先再注册表序；
  次区域名作分隔小标题。
- `ContinentIntro`（学习模式首屏）= shuffle 的大陆滑动卡片，滑到哪片地球飞哪片，「开始探索」进入；
  `localStorage fge-intro-seen` 记住后跳过。旅游模式仍用 `IntroOverlay`。
- 地图任意点击：`CesiumMap` LEFT_CLICK→`drillPick`→最小面积地形→`onTerrainSelect`；
  `ExplorerApp.handleMapTerrainSelect` 自动切到该地形所在大洲再讲解（跨洲可用）。
- `localStorage fge-active-region` 读时把旧值 `china`/`xinjiang`/`australia` 迁移到大洲。
自检：`node --experimental-strip-types scripts/check-regions.ts`（regionId/country 完整性 +
terrainCount 核对 + 次区域↔大洲↔地形一致性）。

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
  ExplorerApp.tsx        — 主编排器（状态 + 讲解/航线/语音链路 + 组合下面几个 UI）
  CesiumMap.tsx          — 3D 地球、Camera 系统、地形区域抬升高亮（hover/选中）、INTRO_VIEW 初始构图
  CesiumOverlayLabels.tsx — HTML 地形标签层（zoom 自适应、hover/focus 高亮）
  IntroOverlay.tsx       — 旅游模式初始标题卡（localStorage 记住已看过）
  ContinentIntro.tsx     — 学习模式初始：shuffle 的大陆滑动卡片，选定即飞入该大洲
  IndexRail.tsx          — 左侧地貌目录（窄条 → 浮出「次区域 → 国家 → 地形」，divider 分隔次区域）
  ReadingPanel.tsx       — 右侧单一阅读面板（卡片态 ⇄ 文章态，逐句高亮）
  JourneyBar.tsx         — 底部航线胶片条
  StructuredLesson.tsx   — 板块讲解渲染（editorial 衬线排版）；lesson=6 板块 / sections=通用段列表
  ModeToggle.tsx         — 顶栏 学习 / 旅游 切换
  CityMarkers.tsx        — 【旅游模式】地图上的城市点（轮询相机 zoom，按 tier 分级显示）
  TravelPoiMarkers.tsx   — 【旅游模式】选中城市时标注机场 + 攻略提到的地标

lib/
  terrain-registry.ts    — 【单一真实源】地形的位置/锚点/范围/走向/中英名/regionId(大洲)/country（选取标准见 docs/terrain-taxonomy.md）
  regions.ts             — 大洲配置 + 次区域(M49) SUBREGIONS/COUNTRY_TO_SUBREGION/COUNTRIES + 辅助函数 + DEFAULT_REGION_ID
  subregion-geo.ts       — 每个次区域的地形数量与地理重心（由 terrain-registry 派生，供顶栏二级下拉飞行）
  terrain-tier.ts        — terrainTier(id) → T1/T2/T3（由标签重要性派生）+ categoryOrder（目录排序用）
  terrain-camera.ts      — 数据驱动相机推导 computeTerrainCamera()
  terrain-content.{zh,en}.ts — 权威 6 板块讲解内容（中/英）；terrain-content.ts = 索引
  terrain-lesson.ts      — resolveLesson(id, lang)：一处决定用哪份讲解（内容→stories→兜底）
  terrain-label-registry.ts — 标签（由 terrain-registry 生成，含 nameEn）
  terrain-label-theme.ts — 标签视觉 token；LABEL_FONT_FAMILY = 通用系统字体栈
  lesson.ts              — 板块顺序 / 标题（中英）/ 拼接
  routes.ts              — 真实商业航线（data/routes/*.json，当前 127 条），机场航点 + 地形航点
  route-narration.ts     — 每条航线两套 ~2.5 分钟连贯解说：ROUTE_NARRATION[id].{study,travel}（中英）；
                           getRouteNarration(id, lang, mode)；CesiumMap.flyRoute 播放
  app-mode.ts            — AppMode 类型 + getStoredMode/setStoredMode（localStorage fge-app-mode）
  places-registry.ts     — 【旅游模式单一真实源】城市 CityEntry（经纬度/tier/机场）+ 国家概览
  travel-content.{zh,en}.ts — 【旅游模式】城市 / 国家概览的 6 段 TravelGuide 中英内容
  travel-lesson.ts       — TravelGuide 类型 + resolveTravelGuide(id, lang) + travelGuideToSections
  travel-rail.ts         — 旅游模式左侧目录（当前大洲下按国家分组）
  travel-speak.ts        — 旅游攻略分段合成 + 预取播报编排（首段先出声）
  travel-pois.ts         — 每城市攻略提到的地标概略坐标（POIS_BY_CITY）
  i18n.ts                — UI 国际化；getTerrainName 查注册表
  i18n-stories.ts        — 早期 6 个双语故事（resolveLesson 的次级来源）
  terrain.ts             — 早期地形 JSON 数据的注册入口（坐标由 terrain-registry 覆盖）
  speech.ts              — TTS 系统（Edge TTS + 浏览器回退，跟随 language）

features/
  china-core-features.ts       — 早期核心地形定义（GeographicFeature）
  china-northwest-features.ts  — 早期核心地形定义（中国西北：天山 / 昆仑 / 阿尔泰 等）
  types.ts                     — GeographicFeature 类型
```

## 当前阶段

**地图/交互/双语已完成**：地形注册表（见 §范围，当前 301 个）+ 数据驱动相机 +
标签分级（双语）+ 地形抬升高亮 + 自然语音（跟随语言）+ 逐句高亮 + 真实航班航线 +
纪录片编辑式界面。

**多国扩展进行中**：新增一个国家的地形（学习模式）=
① `lib/terrain-registry.ts` 加条目（`regionId` 填大洲、`country` 填国家 slug）
②该大洲若此前 `available:false` → 改 true；`terrainCount` 由 `check-regions.ts` 核对
③`lib/terrain-content.{zh,en}.ts` 写双语 6 板块 ④`lib/terrain-label-registry.ts`
`IMPORTANCE_BY_ID` 只对特别重要的补（默认已是 regional）
⑤`check-terrain-camera.ts` + `check-regions.ts` 通过。

**权威文字内容**：讲解改为 6 个通用板块（`TerrainLesson`，顺序见 `lib/lesson.ts`
`LESSON_SECTION_ORDER`）：
`seeing 概述` → `formation 地貌特征` → `observation 从空中怎么看` →
`distinguish 与相似地形的区分` → `concept 地理知识（为何算这类地形/常见误区）` →
`history 历史与人文`。
内容写在 `lib/terrain-content.{zh,en}.ts`（`getTerrainContent(id, lang)`，按注册表 id 索引），
依据中国国家地理 / 中科院 / 自然资源部 / Geoscience Australia / Parks Australia / UNESCO
等公认地理事实总结，非文学化旁白、非凭空生成。
**已逐句核源（Block D，2026-08）**：中国 39 + 澳大利亚 22 = 61 篇双语。
核源标准：去比较性/主观评价，有争议的加限定或并列，查不到宁可删，数字统一到权威口径。
**占位地形已全部补齐（2026-08-29）**：中国其余的次级山脉、丘陵、湖泊、河流、草原、沙漠等
也写了完整 6 板块双语 —— 至此所有地形 100% 有讲解，不再出现占位文案。
内容优先级：`getTerrainContent(id)`（zh-CN）> `i18n-stories` 英译 > 早期地形 JSON `lesson` /
`core-features` story > 占位。

## 双模式（学习 / 旅游）

**Approach A：顶层模式开关 + 平行内容系统。** `ExplorerApp` 持 `mode: AppMode`，
分支只在 ~5 个渲染点；travel 全部是新文件，study 链路一行没动。

- **状态**：`mode` / `activeRegion` 首帧用 SSR 默认（`study` / `china`），
  挂载后 `useEffect` 从 `localStorage` 恢复（避免 hydration mismatch）。
- **学习模式**：`CesiumOverlayLabels` 地形标签 + `railGroups`（14 分类）+ `ReadingPanel`
  接 `resolveLesson` 6 板块 + `JourneyBar` 航线。地图 hover 拾取地形（`modeRef` 门控，
  travel 时禁用并清掉高亮）。
- **旅游模式**：`CityMarkers` 城市点（`places-registry`）+ `travelRailGroups`（当前大洲下按国家分组）+
  `ReadingPanel` 接 `travelGuideToSections`（通用段列表，走 `StructuredLesson` 的 `sections` 分支）。
  点城市 → `CesiumMap.focusCity(lon, lat)` 飞过去 **+ 自动开始播报**；点国家概览 → 飞大洲中心。
- **旅游播报（`lib/travel-speak.ts`）**：分段合成 + 预取管线（播第 i 段时合成第 i+1 段），
  首段先出声，不等整篇。`useSentenceHighlight` 逐句高亮（`startHighlightWithTiming` 带 `baseIndex`，
  无 word boundary 时 `startHighlightChunkEstimated` 估时）。按钮有"准备语音…"态（`ReadingPanel.isPreparing`）。
- **旅游 POI 标注**：`lib/travel-pois.ts`（每城市攻略提到的地标概略坐标）+ `TravelPoiMarkers`：
  选中城市时在地图上标机场（✈）+ 地标。只是静态标注，不做与播报同步的高亮（文本↔坐标匹配不可靠）。
  **之后每个国家的旅游模式都要保持这套行为一致。**
- **航线**：一条航线两套解说，跟随当前 `mode`（`getRouteNarration(id, lang, mode)`）；
  某模式解说为空时该模式下航线不播。当前 287 条航线（252 国内 + 35 国际）study + travel
  解说均已写。**航班号/机型是写入时的真实示例，不是实时时刻表**——没有随航司改期自动更新
  的机制，引用具体航班号前建议自行核对。
  **中国国际航线（Phase 3，已完成，2026-09-04）**：中日既有 3 条之外，分 7 批（A–F2，
  F 批因研究量较大拆分 F1/F2 并行）新增 32 条中国—他国真实直飞航线，覆盖已收录的 35 个
  国家中的 32 个（每国落地该国已收录的 Tier 1 首都/首府或次一级已收城市）；Luxembourg、
  Iceland、Croatia 3 国查无真正不经停的客运直飞（分别是纯货运航司、经停哥本哈根的第五
  航权航线、经停布加勒斯特的同机号航线），如实标注缺口未收录，不编造经停航班冒充直飞。
  完成标准与分批记录见 `docs/expansion-playbook.md` §6.3。
- **新增国家两个模式都要做**：study = 地形注册表 + 6 板块讲解；travel = `places-registry`
  加城市 + `COUNTRY_TO_CONTINENT` 补映射 + `travel-content.{zh,en}.ts` 写 6 段 TravelGuide +
  `COUNTRY_OVERVIEWS` 加概览 + `travel-pois.ts` 补该城市攻略提到的地标坐标。
  自检 `node --experimental-strip-types scripts/check-places.ts`（城市坐标/IATA/来源/双语内容齐全）。
- **进度**：
  - 澳大利亚旅游模式：1 国家概览 + 8 城市（悉尼/墨尔本/布里斯班/珀斯/阿德莱德/凯恩斯/达尔文/
    吉朗）；2026-09-04 补齐维多利亚州第二城市吉朗（大洋路门户，呼应"十二门徒岩"地形），
    同批修正达尔文 tier 误标（notable→major），见 `docs/expansion-playbook.md` §6.2——
    澳大利亚 8 个州/领地 Tier 2 骨架（每州≥2城市，ACT 单一城市豁免）至此收尾。
  - 中国旅游模式：1 国家概览 + 73 城市，34 个省级行政区 Tier 1（首府/主要城市）已全部收全
    （2026-09-02 补齐福州/济南/长沙/南宁/海口/兰州 6 个缺口，见 `docs/expansion-playbook.md` §6）；
    Tier 2 批1（2026-09-02）新增大连/宁波/苏州/洛阳/大同/黄山/泉州/张掖 8 城，同批 6 条国内航线
    （北京-大连、广州-宁波、上海-大同、上海-洛阳、西安-张掖、北京-黄山）；
    Tier 2 批2（2026-09-03）新增温州/扬州/珠海/承德/武夷山/景德镇/景洪/无锡 8 城，同批 6 条
    国内航线（昆明-景洪、北京-珠海、上海-景德镇、广州-温州、北京-扬州、北京-武夷山）；
    承德因紧邻北京未找到有意义的商业直飞航线，如实未收录；无锡与已收录的苏州共用同一机场
    （苏南硕放国际机场）；2026-09-04 新增南疆绿洲聚落 5 城（喀什/和田/吐鲁番/巴楚/麦盖提，
    原地形注册表 `settlement` 分类废弃后迁移而来）——喀什、和田均有真实商用机场并已有
    `urc-khg`/`urc-htn` 国内航线；吐鲁番交河机场（TLQ）实际在正常运营，但未找到可核实的
    固定航线，如实未收录航线；巴楚、麦盖提均无民用机场，如实按公路/铁路描述，不编造航线；
    Tier 2 批4（2026-09-04，见 `docs/expansion-playbook.md` §6.1）——审计发现内蒙古/吉林/
    黑龙江/湖北/四川/贵州/陕西/青海/宁夏 9 个省级行政区只收了首府、没有第二座城市，逐一补
    呼伦贝尔/吉林市/漠河/宜昌/乐山/凯里/延安/格尔木/中卫，**中国 Tier 2 骨架至此收尾**；
    同批新增 4 条国内航线（北京-呼伦贝尔、北京-宜昌、北京-延安、成都-格尔木）；吉林市、
    乐山均无在运营民用机场，如实未收录；漠河/凯里/中卫的机场航线现有资料均只能核实到
    经停枢纽中转、非不经停直飞，如实未收录航线。
    之后按热度继续扩 Tier 2/3。
    **Tier 2 批5（2026-09-05，跨 session 长任务开始，见 `docs/expansion-playbook.md` §6.4 与
    `docs/city-expansion-progress-2026-09-05.md`）**：新增 16 座省内重点城市（大理/香格里拉/
    开封/平遥/曲阜/泰安/烟台/秦皇岛/延吉/林芝/遵义/汕头/潮州/绍兴/北海/嘉峪关，中国旅游
    模式城市 73 → 89），并把北京/上海/天津/重庆/香港/澳门/台北 7 个条目的 layout 段补成
    按区（堂区）详述——不拆成独立地点。无机场城市如实不写机场字段（开封/平遥/曲阜/
    泰安/绍兴）；本批未加航线。
    **同日续做**：批6/7/8 又加 33 座中国城市（中国旅游城市 → 122），澳大利亚批2 加 15 城
    （18 → 33，8 个州/领地各 ≥2 城，按 ABS 主要城区口径），详见 playbook §6.4/§6.4.1 与
    进度文档。后续：中国批9 / 澳大利亚批3 候选已列在进度文档 §3，然后转其他国家。
  - **城市介绍深度重构（2026-09-06 起，优先于继续加城）**：`TravelGuide` 新增可选第 7 段
    `howItWorks`「这座城怎么运转」（渲染在概览之后），固定回答 5 个问题：谁在管 / 中心在哪 /
    本地人的地址语言 / 生活半径由什么决定 / 外来者最常见的结构性误解。全局视角、只写可核验的
    制度与结构事实、不用个人经历。规则与来源记录见 `docs/city-depth-redesign-2026-09-06.md`；
    试点 5 城（悉尼/上海/墨尔本/东京/伦敦）用户审阅后定稿为「纪录片旁白」语体（设计文档 §1 第三版）；
    **全部 691 座城市已于 2026-09-06 写完**——Tier A（capital + major）228 座分 12 批、
    Tier B（notable）463 座分 13 批，中英各自成文，每城带 `// howItWorks sources:` 注释，
    共 25 个内容 commit 在 PR #136 分支上，铺开记录见设计文档 §3.1/§3.2。
    Tier B 篇幅与 Tier A 取齐（中文约 280–330 字），设计文档原定的「≤120 字」已作废。
    **此后新增任何城市都必须同时写 `howItWorks`**，否则新条目会比既有条目少一段。
  - 中国政策类内容口径：签证/免签天数不写死，只说"近年放宽、以国家移民管理局最新公布为准"；
    进藏航线务必写"外国游客需西藏旅行许可 + 随有资质旅行社结伴出行"。
  设计与计划见 `docs/superpowers/specs/2026-08-29-two-mode-travel-study-design.md`、
  `docs/superpowers/plans/2026-08-29-two-mode-phase-1.md`。

## 全球地形扩展（学习模式，进行中）

设计见 `docs/superpowers/specs/2026-08-30-world-terrain-expansion-design.md`。

- **Phase A（已完成）**：区域重构为大洲。中国并入亚洲、澳大利亚并入大洋洲，顶栏改下拉，
  行为与之前等价。
- **Phase B 逐国加地形，每国 ≥25 个 T1/T2/T3**：
  - ✅ 美国 26 · ✅ 加拿大 25（`north-america` 共 51）· ✅ 日本 26（`asia` 84→110）
    · ✅ 新西兰 30（`oceania` 首批 22→52，之后澳大利亚自身又补 12 条 → oceania 现为 64）
    · ✅ 英国 33（`europe` 0→33，首个欧洲国家）
    · ✅ 冰岛 28（`europe` 33→61）· ✅ 瑞士 27（`europe` 61→88）· ✅ 挪威 28（`europe` 88→116）
    · ✅ 法国 29（`europe` 116→145）· ✅ 意大利 30（`europe` 145→175，首个南欧国家）
    · ✅ 西班牙 26（`europe` 175→201）· ✅ 德国 26（`europe` 201→227）
    · ✅ 希腊 26（`europe` 227→253，PR #65）
    · 之后陆续合并：葡萄牙 / 荷兰 / 奥地利 / 比利时 / 瑞典 / 芬兰 / 爱尔兰 / 丹麦 / 卢森堡 /
      波兰（`europe` 现为 499）· 泰国 / 越南 / 韩国 / 蒙古 / 马来西亚 / 新加坡 / 菲律宾 /
      印度尼西亚（东南亚全覆盖）
    · ✅ 哈萨克斯坦 26（`asia` 300→326，开启中亚次区域 `central-asia`）
    · ✅ 土耳其 28（`asia` 326→354，开启西亚次区域 `western-asia`）
    · ✅ 克罗地亚 26（`europe` 499→525，南欧第五国）
    · ✅ 捷克 26（`europe` 525→551，东欧第二国，本轮新增）
  - **土耳其**：`country: "turkey"`（西亚首个国家，中亚之后第二个新开的亚洲次区域）；零争议红线
    从严执行——阿拉拉特山只作「土耳其最高峰 + 层状火山」的地质地理事实，不涉亚美尼亚民族象征 /
    种族屠杀议题，边境表述比照阿尔卑斯法意瑞交界的中性写法；东南安纳托利亚 / 库尔德相关地形一律
    不收；内姆鲁特火山（比特利斯，凡湖旁的火口湖）与阿德亚曼内姆鲁特山巨石人像遗址为同名不同地，
    条目内已注明区分。旅游模式因安全考量未收加济安泰普等靠近叙利亚/伊拉克边境的城市，以布尔萨/
    科尼亚替代。层状火山 / 山系→`mountain_system`、破火山口→`basin`、高原→`plateau`、
    钙化梯田 / 火山灰侵蚀地貌→`hills`、峡谷→`gorge`、海峡 / 深切海岸→`coast`、湖→`lake`、
    河源区→`river`、冲积平原→`plain`。
  - **克罗地亚**：`country: "croatia"`（南欧第五国，意大利/西班牙/希腊/葡萄牙之后）；
    `COUNTRIES` 按拼音插入最前（克罗地亚 Kèluódìyà < 葡萄牙 Pútáoyá），南欧注释块同步更新。
    达尔马提亚海岸按地学命名范例表述（"达尔马提亚型海岸"一词的原产地，与意大利卡尔索是"karst"
    原产地同一手法）；跨境地形（迪纳拉山、洛尼斯科波列等）一律不提及邻国名称，纯境内地貌表述——
    比意大利/法国的"与邻国交界"中性表述更进一步，因克罗地亚周边巴尔干国家均在安全排除名单内
    （见 `docs/expansion-playbook.md` §2.1），任何提及都可能读作立场表态，故直接省略。`history`
    段仅写地质史、广泛记载的古罗马/拜占庭/威尼斯共和国/哈布斯堡等前现代史，1990 年代及以后的
    政治/民族/战争议题一律不碰（零争议红线本轮特别强调项）。旅游模式里耶卡的 identity 段同样只写
    奥匈帝国港口史实，不写后续治理更迭。褶皱山系 / 孤立结晶岩残丘→`mountain_system`、
    潘诺尼亚沉积平原 / 三角洲 / 洪泛湿地→`plain`、达尔马提亚型淹没海岸 / 红土海岸 / 海湾→`coast`、
    钙华堤坝湖 / 喀斯特原野积水湖→`lake`、喀斯特河流→`river`、深切喀斯特峡谷→`gorge`、
    淹没山脊型岛屿→`island`。
  - **捷克**：`country: "czechia"`（东欧次区域第二国，波兰之后）；`COUNTRIES` 按拼音插入波兰
    之后（波兰 Bōlán < 捷克 Jiékè），东欧注释块同步更新。全境近乎被古老山地环绕（苏台德山系的
    克尔科诺谢山/克鲁什内山/耶塞尼克山/卢日采山 + 独立的舒马瓦山/新城山/摩拉维亚—西里西亚
    贝斯基德山），跨境峰顶（斯涅日卡峰、劳舍峰、卡梅内茨峰等）一律按"捷克与德国/波兰/奥地利
    交界"中性表述、不涉主权，如实标注在交界一带。布尔迪丘陵、波迪伊河谷的冷战边境管制历史
    按客观事实简述（人为活动限制客观促成生态保护），不碰现代政治评价；`history` 段仅写地质史、
    广泛记载的中世纪至近代史与 UNESCO 认定。旅游模式：布拉格（首都）+ 布尔诺/皮尔森/卡罗维发利/
    切斯基克鲁姆洛夫/库特纳霍拉/奥洛穆茨 6 城，均系真实调研（WebSearch 核实机场代码/坐标/地标）。
    国内航线：核实后捷克国内**无真实商业航空网络**——原捷克航空（ČSA）布拉格—布尔诺/俄斯特拉发/
    卡罗维发利三条国内航线已于 2024 年 ČSA 停止运营前更早即停飞，境内城市间以铁路/大巴为主，
    诚实起见本国**不收录任何国内航线**，不编造。褶皱古老山系→`mountain_system`、结晶岩基底出露
    准平原→`hills`、砂岩风化"岩城"→`hills`、构造断陷盆地→`basin`、喀斯特台地→`plateau`、
    地表下切峡谷→`gorge`、低平冲积低地→`plain`、干流河段→`river`、人工蓄水湖/水库→`lake`、
    深切曲流→`valley`。
  - 优先序（待做）：东欧候选匈牙利 / 斯洛伐克（见 expansion playbook）；南欧候选斯洛文尼亚 /
    马耳他；或转回中国 Tier 1 城市缺口（福州/济南/长沙/南宁/海口/兰州）
  - **意大利**：`country: "italy"`（首个南欧国家）；只做本土 + 西西里 + 撒丁，海外无。
    阿尔卑斯跨境按「意大利与法国 / 瑞士交界」中性表述、不涉主权、不描述边界线；勃朗峰 / 马特洪峰 /
    罗莎峰如实标注在交界一带。南蒂罗尔 / 多洛米蒂的 `history` 只写地质 + 广泛记载的史前 + 一战山地战
    （简短事实）+ 拉迪恩语，不碰自治省政治；火山（维苏威 / 埃特纳 / 坎皮弗莱格瑞 / 斯特龙博利）按 INGV
    口径事实简述（庞贝 79 年、马莫拉达 2022 冰崩、坎皮弗莱格瑞 bradyseism 都如实）；卡尔索按「跨意大利
    与斯洛文尼亚」中性表述（"karst"一词的原产地）。褶皱山系 / 火山锥 / 高山 massif→`mountain_system`、
    破火山口→`basin`、中央高原式老陆块 & 喀斯特台地→`plateau`、软岩丘陵 & 低缓老地块→`hills`、
    前陆盆地大平原→`plain`、冰川→`valley`、峡谷 / 冰蚀圆谷→`gorge`、湖→`lake`、
    河→`river`、岛 / 火山岛群→`island`、峡湾岸 / 沙丘 / 白垩崖 / 潮滩 / 潟湖→`coast`。
    计划见 `docs/superpowers/plans/2026-08-30-world-terrain-phase-b-italy.md`。
  - **法国**：`country: "france"`；只做本土（métropole）与科西嘉，**海外省 / 海外领地不收**。
    跨境山脉（阿尔卑斯 / 比利牛斯）按「法国与意大利 / 西班牙交界」中性表述、不涉主权、不描述边界线；
    汝拉山脉瑞士条目已有、法国不再单列。褶皱山系 / 高山 massif / 火山锥群→`mountain_system`、
    中央高原→`plateau`、喀斯特台地（科斯 / 韦科尔）→`plateau`、低缓老地块（阿摩里卡）→`hills`、
    沉积盆地→`basin`、冰川→`valley`、峡谷 / 冰蚀圆谷→`gorge`、三角洲 / 沿海砂地→`plain`、
    峡湾岸 / 沙丘 / 白垩崖 / 潮滩→`coast`。科西嘉 `history` 只到广泛记载的史前 / 中世纪史
    （菲利托萨、热那亚塔、1768 并入法国），不碰现代自治 / 独立议题；韦科尔 / 塞文山的二战史保持简短事实。
    计划见 `docs/superpowers/plans/2026-08-30-world-terrain-phase-b-france.md`。
  - **挪威**：`country: "norway"`；地名挪威语为主、北萨米语并列（Finnmarksvidda / Finnmárkkoduottar）。
    只做挪威本土，**斯瓦尔巴 / 扬马延不收**。山系→`mountain_system`、山地高原/冰帽→`plateau`、
    冰川/冰蚀谷→`valley`、峡湾→`coast`、湖→`lake`、悬崖/急流→`gorge`、平原→`plain`。
    芬马克 / Sápmi 的 `history` 只写萨米驯鹿放牧这类广泛记载的土地利用作客观事实，不碰现代政治；
    斯堪的纳维亚山脉「与瑞典共有」中性表述、抬升机制按学界有争论表述。计划见
    `docs/superpowers/plans/2026-08-30-world-terrain-phase-b-norway.md`。
  - **瑞士**：`country: "switzerland"`；多语地名按 swisstopo 用法并列（DE/FR/IT）。
    山峰/山系→`mountain_system`（含孤峰马特洪峰、逆冲断层构造区）、冰川→`valley`、
    冰蚀谷→`valley`、湖→`lake`、瀑布/隘谷→`gorge`、中央高地→`hills`。博登湖主湖区无
    正式国界，按中性事实表述。
  - **冰岛**：`country: "iceland"`；无主权争议。火山锥→`mountain_system`、破火山口/地热盆地→`basin`、
    裂谷→`valley`、冰帽→`plateau`、外冲平原→`plain`、瀑布/峡谷→`gorge`。近年火山活动
    （雷克雅内斯/格林达维克）按 IMO 口径事实性简述。
  - **新西兰**：官方双语地名按 NZGB 用法并列（Aoraki / Mount Cook、Taranaki Maunga）；
    火山锥归 `mountain_system`、破火山口归 `basin`、峡湾归 `coast`、冰川归 `valley`。
  - **英国**：`country: "uk"`；威尔士语、盖尔语地名按官方用法并列；`history` 段只写自然史
    + 广泛记载的人类活动，不碰现代政治。北爱尔兰地形用中性地理名。
  - **日本：主权争议岛屿（南千岛/北方四岛、竹岛/独岛、尖阁/钓鱼岛）全部不收**；
    琉球条目只用无争议的南西诸岛主链。
  - 每个新国家 = 新分支，stack 在上一个国家的分支上（都改 `regions.ts` 该洲 terrainCount +
    共用 `terrain-content.{zh,en}.ts`）。新大洲则从 `design/world-terrain-expansion` 切。
  - 分批：每 commit 约 6–8 个注册表条目（按分类分组）+ 同 commit 写双语 6 板块，
    每次跑 `check-regions` + `check-terrain-camera`，浏览器抽查。
- **零争议红线**（本轮特别强调）：所有文字查该国官方来源（地质调查局 / 国家公园管理局 /
  官方地名机构 / UNESCO / 官方统计或旅游机构）；地名用中性通用名、有并用名以事实并列、
  不表述主权；`history` 段不碰现代政治 / 领土 / 宗教 / 族群评价；可能有争议 → 删或换中性表述。
- 广度优先：先把注册表 + 双语 6 板块写全；真实边界多边形、相机逐个精校之后再补。

## Camera 推导链路

```
TerrainEntry（registry: 锚点 landmark + bbox + axis + viewFrom）
  → computeTerrainCamera()  推导 { target, heading, pitch, range }
  → flyToTerrainAndWait(payload, { heading, pitch })
  → Cesium flyTo
```

- **锚点 landmark** = 该地形最标志性的地物（主峰/主湖/枢纽城市），相机对准这里。
- **heading/pitch/range** 全部由 bbox 规模 + axis 走向推导，不写死。
  仅 `viewFrom`（相机在锚点的哪一侧）、`viewScale`（取景放大系数）可按地形显式给定。
- **相机位置 target** = 从锚点沿 viewFrom 反方向按几何偏移，使锚点落在画面中部。
- 普通地形：`showKm` 封顶 120km。**大面积高原/大盆地/大平原/大沙漠**（青藏/内蒙古/塔里木/
  云贵/华北平原…）在 `terrain-registry.ts` 的 `WIDE_VIEW` 里给 `viewScale`（1.5–2.7），
  `showKm` 放宽到 320km、range 到 340km —— 让画面看出"一整片高地/盆地/平原"的地貌特征，
  而不是锚点周边一个局部景物（湖 / 城市）。
- 自检: `node --experimental-strip-types scripts/check-terrain-camera.ts`

调参常量集中在 `lib/terrain-camera.ts` 顶部（FRAME_HALF_ANGLE_DEG / PITCH_* /
SHOW_KM_MAX / RANGE_MAX / LANDMARK_SCREEN_FRAC），视觉取景需在真实浏览器中校准。

## 地形集 / 标签 / 区域高亮

- **`TERRAIN_REGISTRY`（当前 301 个，见 §范围）= 单一真实源**：纯地貌图鉴，不含人文聚落
  （`settlement` 分类已于 2026-09-04 废弃移除，见 `docs/terrain-taxonomy.md` §8）。
  `TerrainCategory`：mountain_system / plateau / basin / plain / hills / desert / lake /
  river / valley / gorge / island / grassland / coast / inselberg。
  **选取标准与分类判据见 `docs/terrain-taxonomy.md`**（勿凭感觉加条目/改分类）。
  坐标逐个查权威来源，`source` 留痕。
- **侧边栏 + 地图标签都由注册表驱动**：`ExplorerApp.ALL_FEATURES` = `TERRAIN_REGISTRY.map`；
  `handleSelectById(id)` 统一入口（早期地形 JSON / core-features 有内容则讲解，否则占位）。
- 精确边界：`scripts/extract-ne-landforms.mjs` 从 `data/gis/ne_10m_geography_regions_polys`
  提取 42 个 → `public/data/gis/exports/{id}.geojson`。`CesiumMap.TERRAIN_RING_FILES` 列出这 42
  个 id，其余用 bbox 八边形。
- `CesiumOverlayLabels.tsx`：HTML 标签。
  - `projectToScreen` 用 `EllipsoidalOccluder` 剔除地球背面的点（否则缩小看地球会堆叠）。
  - zoom ≤ 3 不显示；importance→LOD 1:1，按 zoom 分级（大陆/国家/区域/POI）逐级展开。
  - `dynamicFontSize` 随 zoom 缩放，下限 0.8。字体 `LABEL_FONT_FAMILY`（通用系统字体栈）。
- **地形区域抬升高亮**（`CesiumMap.tsx`，每个地形三个实体）：
  - `pick`：贴地透明多边形，仅作拾取命中目标。
  - `lift`：`perPositionHeight` 多边形，顶面**跟随真实地形高程**（首次交互时
    `sampleTerrainMostDetailed` 采样并缓存），hover/focus 时整块 ease 抬升 3km / 5.5km。
  - `rim`：顶面亮边框 polyline（定高度、非 clampToGround）——**任意视角（含俯视）都能看清地块轮廓**。
  - 统一暖琥珀 `REGION_CSS`，hover / focus 只是强弱不同（α .20/.34，rim α .6/.95）。
  - **不要用 `polygon.outline`** —— 会懒加载 `createPolygonOutlineGeometry` worker，网络异常时崩溃。
  - `tickTerrainRegions` rAF 推进；配色/高度/透明度常量在 `CesiumMap.tsx` 顶部（`REGION_*`）。
- hover 走 `ScreenSpaceEventHandler` MOUSE_MOVE → **`scene.drillPick`**，在重叠命中的地块里
  取 `areaDeg2` 最小（最具体）的那个；LEFT_CLICK 同样 drillPick 取最小面积 → `onTerrainSelect(id)`
  → `ExplorerApp.handleMapTerrainSelect` 自动切大洲再讲解（跨洲直接点地图也能跳）。
  已知：`CesiumOverlayLabels` 仍只渲染当前大洲的文字标签，非当前洲的地形有 hover 抬升高亮但无标签，
  点一下才切过去。

## 语音播报

- **缓存是第一道防线，不是优化**：`lib/tts-cache.ts` 是缓存键/白名单/超时/合成的
  唯一实现，`app/api/tts/route.ts` 与 `scripts/warm-tts.ts` 共用。缓存键是
  `sha256(voice + " " + text)`，改键算法等于作废整个 `.tts-cache/`。
  预热 `npm run warm:tts`（可中断可续跑，支持 `--kinds/--langs/--ids/--limit`），
  覆盖率 `npm run check:tts`。全站 23,802 段播报、约 4.9 GB、167 小时音频。
  **`.tts-cache/` 是本机 gitignore 目录，不进仓库**；换机器/换服务器重跑预热即可。
- 播报文本清单由 `lib/tts-manifest.ts` 生成，一律调用客户端同一套函数
  （`resolveLesson`+`lessonSections` / `resolveTravelGuide`+`travelGuideToSections` /
  `getRouteNarration`），保证与线上请求逐字节一致 —— 不一致则预热白做。
- **语速常数分语言**（`lib/speech.ts` `CHARS_PER_SEC`：zh 4.44 / en 15.24 字符每秒），
  从缓存音频的 word boundary 实测而来；`npm run check:tts` 会复算并比对。
  以前只有一个按中文校准的 4.5，英文被高估 3.4 倍，航线兜底节拍因此错得离谱。
- 降级策略是**连续失败计数**（`lib/section-narration.ts`，连续 2 段才整篇降级），
  不是「一段失败就永久降级」——后者会让一次瞬时超时把整篇变成机械音。
- `app/api/tts/route.ts`：Edge TTS，默认 `zh-CN-XiaoxiaoNeural`（最自然的中文女声），
  `PROSODY` 常量控制 rate/pitch（大幅放缓会有机械感，保持 -6% 左右）。
- 逐句高亮：Edge TTS 成功 → `startHighlightWithTiming`（word boundary 精确同步）；
  失败回退浏览器 TTS → `speakBrowserAndWait` 在 `utterance.onstart` 触发 `onPlaying`
  （不是等播完），`startHighlightSections` 按字数估时推进。

## 航线飞行

- **运动模型全部在 `lib/cesium/route-flight.ts`（纯函数，不依赖 Cesium/React）**，
  自检 `npm run check:flight` 对全部 295 条航线按 60 Hz 跑断言：进度映射单调、
  地速/取景高度比 ≤0.6、加速度、转向速率 ≤25 度/秒、飞行时长 ≥ 解说时长。
  **改这块必须先跑这个脚本**，别靠肉眼看。
- 时长**按距离分级**（90–300s，必要时延到 420s），且永远 ≥ 解说时长；
  取景高度跟随**峰值**地速（高度 = 峰值 × 2.5 秒），保证「每秒扫过多少个取景高度」
  在长短航线上恒定（实测国内 0.41 / 国际 0.42）。航线距离相差 108 倍，
  用同一个时长必然让长航线糊掉。
- 进度是**帧率驱动**，单帧推进封顶 100ms。**不要改回跟随 `audio.currentTime`**——
  媒体元素的播放位置是台阶式更新的，高地速下每级台阶就是几公里跳跃，那是「抖」的来源。
- 位置曲线用以弧长为节点的 Barry-Goldman（弦长参数化）Catmull-Rom，航点处 C1 连续；
  停留平台两侧用梯形速度曲线；朝向按固定行进时间窗滑动平均（否则密集航点会甩头几百度/秒）。
- `CesiumMap.flyRoute` 把镜头摆到起点机场上空 → 开始播 `route-narration.ts` 里这条
  航线专属的连贯解说 → 同时镜头沿航点飞完。
- **不再逐个航点念地形讲解**。`onFlyoverWaypoint` 只把当前飞越的地形名同步到右侧面板，
  面板显示整条解说 + 逐句高亮。
- `RouteFlyCallbacks`：`onNarrate`（返回 Promise，播解说）/ `onFlyoverWaypoint` / `onComplete` / `onCancelled`。
- 弃用：`flyLeg` / `flyToRouteOverview` / `legDurationSec`；`FlightRoute` 的
  `minLegDurationSec` 等逐段计时字段改为可选、不再读取。

## 禁止事项

以下内容不再维护:

- `cameraGeometry`（china-core-features / china-northwest-features 中的字段，已停止读取）
- `lib/foi-registry.ts` / `lib/auto-camera.ts`（已删除，2026-09 技术债清理轮确认零引用后移除）
- Feature hoverGeometry/RidgeCorridor 渲染、`data/gis/exports/*.geojson` 边界线
  （geojson 现只用于地形区域抬升体的形状，不再画常驻边界）
- 手工 `target` / `heading` / `pitch` / `range`
- 逐个修补秦岭、大兴安岭等 Camera 参数
- 分散在 data/*.json、cameraGeometry、terrain-label-registry 的重复坐标
  → 统一到 `lib/terrain-registry.ts`
- 继续研究 GMBA / HydroBASINS 数据源（已验证完成）

## 代码分析工具

本项目使用 `codeatlas` 进行代码分析和架构理解。

```bash
# 安装（一次性）
cd ~/Github_Projects/codeatlas && pip install -e . --break-system-packages

# 索引项目
codeatlas index . --verbose

# 常用命令
codeatlas stats                          # 项目统计
codeatlas symbols <name>                 # 查找符号
codeatlas callers <function>             # 谁调用了这个函数
codeatlas callees <function>             # 这个函数调用了谁
codeatlas chain <function> --depth 3     # 调用链
codeatlas deps <file>                    # 文件依赖
codeatlas graph <name> --type calls      # Mermaid 调用图
```

详细说明见 `~/Github_Projects/codeatlas/README.md`

## 架构文档

- `docs/architecture-metrics.md` — 项目健康度指标、模块耦合度、Architecture Smells（codeatlas 自动生成）
- CesiumMap 六维分析 → `codeatlas file components/CesiumMap.tsx`
- 完整架构报告 → `codeatlas stats && codeatlas deps components/ExplorerApp.tsx --depth 2`

编排路线参考：[[architecture-intelligence-direction]]

---
## 首屏相机飞行约束（反复出现过的回归，务必遵守）

**相机的每一次自动飞行，必须能追溯到本次会话里一个真实发生的用户动作**
（点「开始探索」、点顶栏大洲下拉、点次区域、点地形/城市……），绝不能由
"地图初始化好了"或"localStorage 里记着上次停留在哪"这类跟*当次访问*无关的
时机来触发。恢复 `activeRegion`这个**状态**（让侧栏/标签显示对的大洲）没问题，
但恢复状态绝不能连带触发一次相机飞行。

**已经踩过的坑，不要重犯**：`IntroOverlay`（旅游模式欢迎卡）对"已看过引导页"的
用户会静默跳过，不显示卡片、直接把 `showIntro` 置为 `false`——这个跳过发生在
Cesium 完成初始化*之前*。任何在"Cesium ready"或"showIntro 变 false"这类时机点上
挂钩自动飞行的代码，都会把"用户以前看过一次引导页"误判成"用户这次访问已经
确认过了"，造成"没等用户选择，首屏加载页面就自动飞到上次的大洲"这个 bug——
这个 bug 已经复现过不止一次。详细背景见 `components/ExplorerApp.tsx` 里
（原 `handleMapReady` 所在位置）的说明注释。

---
## 开发规范

- 不要在未完成审计前修改 Camera 逻辑
- 不要在未验证数据源前导入地形数据
- 每完成一个 Phase，先更新文档再提交代码
- 业务代码和文档分开提交
- 修改 codeatlas 后先跑 `cd ~/Github_Projects/codeatlas && pytest -q && ruff check codeatlas/` 再 push
