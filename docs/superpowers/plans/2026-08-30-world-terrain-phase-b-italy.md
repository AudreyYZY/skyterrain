# Phase B — 意大利地形（≥25 个 T1/T2/T3）

> 分支 `feat/terrain-italy`，stack 在 `feat/terrain-france` 上。
> `regionId: "europe"`，`country: "italy"`，次区域 `southern-europe`（首个南欧国家）。
> 口径：ISPRA（意大利环境保护与研究院·地质调查）/ INGV（国家地球物理与火山学研究所）/
> 意大利国家公园 / UNESCO。**只做本土与西西里、撒丁，梵蒂冈/圣马力诺按飞地中性提及。**

## 争议规避
- 阿尔卑斯跨境（法/瑞/奥/斯洛文尼亚）：按「意大利与法国 / 瑞士交界」中性表述，
  勃朗峰/马特洪峰/罗莎峰如实标注在交界一带，不描述边界线走向、不涉主权。
- 南蒂罗尔 / 多洛米蒂：`history` 只写地质 + 广泛记载的史前 / 一战山地战（简短事实、不评价）+
  拉迪恩语这类语言事实，不碰现代自治省的政治。
- 火山（维苏威、埃特纳、坎皮弗莱格瑞、斯特龙博利）：按 INGV 口径事实性简述，
  庞贝 79 年、埃特纳近年活动、马莫拉达 2022 冰崩都是客观事件、如实简述。
- 无岛屿主权争议。

## 分类约定
| 地貌 | category |
|---|---|
| 褶皱山系 / 高山 massif / 火山锥 / 老层火山 | `mountain_system` |
| 破火山口 / 火山洼地 | `basin` |
| 白云岩-石灰岩喀斯特台地（卡尔索、穆尔杰）/ 石灰岩高地 | `plateau` |
| 冰川 | `valley` |
| 前陆盆地大平原 | `plain` |
| 三角洲 / 潟湖 / 峡湾岸 / 悬崖岸 / 梯田岸 | `coast` |
| 峡谷 / 天生桥 / 冰蚀圆谷 | `gorge` |
| 湖 | `lake` |
| 河流 | `river` |
| 岛屿 / 火山岛群 | `island` |
| 丘陵（托斯卡纳 / calanchi） | `hills` |

## 清单（30 个）

### T1 骨架（8）— ✅ 批 1（commit 见分支）
italian-alps · apennines · dolomites · po-valley · po-river · tiber-river · sicily · sardinia

### 批 2（7）— 山地国家公园 + 大湖 + 潟湖
gran-paradiso（意大利首个国家公园 1922，完全在意大利境内最高 massif）· gran-sasso（亚平宁最高，卡尔代罗内冰川）·
pollino（意大利最大的国家公园，波斯尼亚松）· gennargentu（撒丁岛内陆山地）·
lake-garda（意大利最大湖）· lake-como（Y 形冰川湖）· venetian-lagoon（威尼斯潟湖）

### 批 3（8）— 火山 + 南部海岸
mount-vesuvius（INGV，庞贝）· mount-etna（UNESCO，欧洲最活跃活火山）· campi-flegrei（破火山口，地面升降 bradyseism）·
aeolian-islands（伊奥利亚群岛，UNESCO）· stromboli（"地中海的灯塔"，持续弱喷发）·
amalfi-coast（阿马尔菲海岸，石灰岩崖岸，UNESCO）· capri（卡普里岛，石灰岩海蚀）· cinque-terre（五渔村梯田崖岸，UNESCO）

### 批 4（7）— 喀斯特 / 丘陵 / 湖 / 冰川
tuscan-hills（托斯卡纳丘陵 + 奥尔恰谷 calanchi/biancane）· carso-karst（的里雅斯特卡尔索——"karst"一词的原产地）·
alta-murgia（普利亚的穆尔杰石灰岩台地 + 马泰拉的峡谷 gravina）· gargano-promontory（加尔加诺半岛，意大利之"马刺"）·
marmolada（多洛米蒂最高峰及其冰川，单列 T3）· lake-trasimeno（半岛最大的浅水湖）·
dune-di-piscinas（撒丁岛西南的欧洲少见海岸大沙丘）

## 每批收尾
1. `lib/regions.ts` europe `terrainCount`：153 →（批 2 +7）160 →（批 3 +8）168 →（批 4 +7）175。最终意大利 30，europe 175。
2. `lib/terrain-label-registry.ts`：批 2 全 `national`；批 3 火山 + 岛群 `national`，其余海岸默认 regional；
   批 4 的 marmolada / dune-di-piscinas 给 `poi`。
3. `tsc` + `build` + `check-regions` + `check-terrain-camera` 通过；浏览器逐批抽查。
