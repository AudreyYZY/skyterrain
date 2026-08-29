# Phase B — 挪威地形（≥25 个 T1/T2/T3）

> **状态：完成（2026-08-30）。** 28 个条目、4 个 commit（批 1 `a1f89cf` / 批 2 `4acc6d6` /
> 批 3 `6b3de92` / 批 4 `63165be`），分支 `feat/terrain-norway`。europe 88→116，全站 329。
> `check-regions` / `check-terrain-camera` 通过，浏览器逐批抽查。
> 计划里 `preikestolen` / `kjerag` 未单列，作为 `lysefjord` 的 `pois`；`hornindalsvatnet`
> （欧洲最深湖）替补进第 28 个。

> 分支 `feat/terrain-norway`，stack 在 `feat/terrain-switzerland` 上。
> `regionId: "europe"`，`country: "norway"`，次区域 `northern-europe`（`lib/regions.ts` 已加映射）。
> 口径：NGU（挪威地质调查局）/ Miljødirektoratet（环境署，国家公园）/ Kartverket（地名）/
> UNESCO（西挪威峡湾）/ Norsk Polarinstitutt。零争议红线同 `docs/terrain-taxonomy.md`。

## 争议规避（本国特有）

- **斯瓦尔巴（Svalbard）/ 扬马延（Jan Mayen）本轮不收** —— 只做挪威本土（Fastlands-Norge）。
- **芬马克 / Sápmi**：`history` 段只写"广泛记载的土地利用"（萨米驯鹿放牧、狩猎）作客观事实，
  不写任何现代政治 / 土地权 / 族群评价。地名用 Kartverket 的挪威语 + 北萨米语并列（如
  Finnmarksvidda / Finnmárkkoduottar）。
- 海洋 / 海上边界一律不碰。
- 跨境山脉（斯堪的纳维亚山脉）按中性事实表述"由挪威与瑞典共有"，不表述归属。

## 分类约定（沿用欧洲各国既有约定）

| 地貌 | category |
|---|---|
| 山系 / 高山massif / 孤立断块 | `mountain_system` |
| 山地高原 / 冰帽 | `plateau` |
| 冰川 / 冰蚀谷 | `valley` |
| 峡湾 | `coast` |
| 湖 | `lake` |
| 峡谷 / 瀑布 / 急流 | `gorge` |
| 平原 / 滨海低地（strandflat、Jæren） | `plain` |
| 群岛 | `island` |
| 河流 | `river` |

## 选取清单（28 个）

### T1 骨架（8）
1. **scandinavian-mountains-norway** 斯堪的纳维亚山脉（挪威段）/ Scandinavian Mountains — `mountain_system`
   —— 加里东造山带残余，挪威国土的脊梁；与瑞典共有（中性表述）。
2. **jotunheimen** 尤通黑门山 / Jotunheimen — `mountain_system` —— 北欧最高，Galdhøpiggen 2469 m、
   Glittertind 2465 m；辉长岩massif 被冰川深切。（Miljødirektoratet / NGU）
3. **hardangervidda** 哈当厄高原 / Hardangervidda — `plateau` —— 约 6500 km²、平均约 1100 m，
   欧洲最大的同类山地高原；最高点 Sandfloegga 1721 m。（Miljødirektoratet）
4. **finnmarksvidda** 芬马克高原 / Finnmarksvidda（Finnmárkkoduottar）— `plateau` —— 挪威最大高原，
   >22000 km²、海拔约 300–500 m；前寒武纪基岩磨蚀面。（Britannica / NGU）
5. **sognefjord** 松恩峡湾 / Sognefjorden — `coast` —— 挪威最长（约 205 km）最深（约 1308 m）的峡湾。
   （Kartverket / NGU）
6. **glomma** 格洛马河 / Glomma — `river` —— 挪威最长河流（约 620 km），流域约占本土 13%。（NVE）
7. **lofoten** 罗弗敦群岛 / Lofoten — `island` —— 陡峭的加里东 / 前寒武纪山岛链，"罗弗敦墙"；
   外侧有强潮流与冷水珊瑚礁。（NGU）
8. **jaeren** 耶伦 / Jæren — `plain` —— 挪威少有的大片低地平原，末次冰期冰碛 + 海岸沙丘，
   与西挪威峡湾-山地地貌形成对照。（NGU）

### T2 地貌省（14）
9. **dovrefjell** 多夫勒山 / Dovrefjell — `mountain_system` —— 分水岭massif，Snøhetta 2286 m；
   麝牛引入种群。（Miljødirektoratet）
10. **rondane** 龙达讷山 / Rondane — `mountain_system` —— 挪威首个国家公园（1962），10 座逾 2000 m，
    圆缓的石英岩峰与冰斗。（Miljødirektoratet）
11. **trollheimen** 巨魔山 / Trollheimen — `mountain_system` —— 从圆丘到尖峰过渡的山地。
12. **jostedalsbreen** 约斯特达尔冰川 / Jostedalsbreen — `valley` —— 欧洲大陆最大冰川（约 474 km²），
    多条冰舌下伸至低地。（Norsk Polarinstitutt / NVE）
13. **folgefonna** 佛尔格冰川 / Folgefonna — `valley` —— 挪威第三大冰川，三块冰帽。
14. **svartisen** 斯瓦蒂森冰川 / Svartisen — `valley` —— 挪威第二大冰川，跨北极圈，
    Engabreen 冰舌下伸近海平面。（NVE）
15. **geirangerfjord** 盖朗厄尔峡湾 / Geirangerfjorden — `coast` —— UNESCO 西挪威峡湾，
    悬谷瀑布（"七姊妹"）。（UNESCO）
16. **naeroyfjord** 纳柔依峡湾 / Nærøyfjorden — `coast` —— UNESCO，最窄处约 250 m。（UNESCO）
17. **hardangerfjord** 哈当厄峡湾 / Hardangerfjorden — `coast` —— 挪威第二长峡湾（约 179 km）。
18. **lysefjord** 吕瑟峡湾 / Lysefjorden — `coast` —— 花岗-片麻岩峡湾；两侧有 Preikestolen（布道石）、
    Kjerag。landmark 用布道石。
19. **trondheimsfjord** 特隆赫姆峡湾 / Trondheimsfjorden — `coast` —— 挪威第三长，宽阔、有潮滩。
20. **romsdalen** 罗姆斯达尔谷 / Romsdalen — `valley` —— U 形谷，Trollveggen（巨魔墙）约 1000 m
    垂直岩壁，欧洲最高。（NGU）
21. **gudbrandsdalen** 古德布兰河谷 / Gudbrandsdalen — `valley` —— 挪威主干河谷之一，
    Lågen 河 + 深厚冰碛/河积。
22. **lyngen-alps** 林根阿尔卑斯 / Lyngsalpan — `mountain_system` —— 特罗姆斯的尖峰-冰川山脊。
23. **mjosa** 姆约萨湖 / Mjøsa — `lake` —— 挪威最大湖（约 365 km²，最深约 453 m），冰蚀 + 断裂谷。
24. **femund** 费蒙湖 / Femunden — `lake` —— 挪威第三大湖，几乎未受调节的天然湖。

### T3 标志地点（6）
25. **preikestolen** 布道石 / Preikestolen — `gorge`（悬崖）—— 吕瑟峡湾上方约 604 m 的水平节理花岗岩台。
    （若与 lysefjord 重复则并入，改收 **trolltunga**）
26. **trolltunga** 巨魔舌 / Trolltunga — `gorge` —— Ringedalsvatnet 上方约 700 m 的水平悬挑岩舌
    （冰川拔蚀 + 节理）。
27. **saltstraumen** 萨尔特急流 / Saltstraumen — `gorge` —— 世界最强潮流之一，
    每 6 小时约 4 亿 m³ 海水过一条约 150 m 窄口。（Kartverket）
28. **atlanterhavsveien** —— 视情况；否则用 **kjerag**（Kjeragbolten 卡石）。

## 批次（每批一个 commit：注册表条目 + 同 commit 双语 6 板块 + check-regions + check-terrain-camera + 浏览器抽查）

- **批 1**：T1 骨架 1–8（`scandinavian-mountains-norway` / `jotunheimen` / `hardangervidda` /
  `finnmarksvidda` / `sognefjord` / `glomma` / `lofoten` / `jaeren`）
- **批 2**：山地 9–14（`dovrefjell` / `rondane` / `trollheimen` / `jostedalsbreen` / `folgefonna` /
  `svartisen`）
- **批 3**：峡湾 15–19（`geirangerfjord` / `naeroyfjord` / `hardangerfjord` / `lysefjord` /
  `trondheimsfjord`）
- **批 4**：谷/湖/标志 20–28（`romsdalen` / `gudbrandsdalen` / `lyngen-alps` / `mjosa` / `femund` /
  `preikestolen` / `trolltunga` / `saltstraumen` / 第 28）

## 每批收尾

1. `lib/regions.ts` europe `terrainCount` 88 → 逐批加（+8 → 96、+6 → 102、+5 → 107、+9 → 116）。
   最终挪威 28 个，europe 116。
2. `lib/terrain-label-registry.ts` `IMPORTANCE_BY_ID`：T1 八个填 `national`，其余默认 regional 足够；
   T3 三个（preikestolen/trolltunga/saltstraumen）填 `poi`。
3. `npx tsc --noEmit` + `rm -rf .next && npm run build` +
   `node --experimental-strip-types scripts/check-regions.ts` +
   `node --experimental-strip-types scripts/check-terrain-camera.ts` 全过。
4. 浏览器：切欧洲 → 顶栏二级下拉出现"北欧"计数增加；rail 出现"挪威"分栏；点几个地形核对相机取景。
