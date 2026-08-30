# Phase B — 法国地形（≥25 个 T1/T2/T3）

> 分支 `feat/terrain-france`，stack 在 `feat/terrain-norway` 上。
> `regionId: "europe"`，`country: "france"`，次区域 `western-europe`。
> 口径：BRGM（法国地质调查局）/ IGN / 法国国家公园 / UNESCO。
> **只做法国本土（métropole）与科西嘉，不含海外省 / 海外领地。**

## 争议规避
- 跨境山脉（阿尔卑斯 / 比利牛斯 / 汝拉）按中性事实表述"法国与意大利 / 西班牙 / 瑞士交界"，
  不涉主权、不描述边界线走向。安道尔按"位于比利牛斯山中的国家"中性提及。
- 科西嘉：`history` 只写地质 + 广泛记载的史前 / 中世纪史（菲利托萨、热那亚塔、1768 并入法国），
  不碰任何现代自治 / 独立议题。
- 汝拉山脉瑞士条目已有（`jura-mountains` country switzerland）——法国不再单列 Jura，
  改收孚日；孚日讲解里提一句"莱茵地堑对侧的黑森林"作中性事实。
- 阿尔卑斯 / 比利牛斯的最高峰（勃朗峰在法意交界；阿内托在西班牙一侧）如实标注，不争。

## 分类约定
| 地貌 | category |
|---|---|
| 褶皱山系 / 高山 massif | `mountain_system` |
| 被抬升的老陆块高地（中央高原） | `plateau`；低缓老地块（阿摩里卡） | `hills` |
| 沉积盆地 | `basin` |
| 石灰岩喀斯特台地（科斯、韦科尔） | `plateau` |
| 火山锥群 / 老层火山（普伊、坎塔尔、多尔山） | `mountain_system` |
| 冰川 | `valley` |
| 峡谷 / 悬崖 / 峡湾岸 | `gorge` / `coast` |
| 三角洲 / 沿海低地（卡马尔格、朗德） | `plain` |
| 河流 | `river` |
| 岛屿 | `island` |
| 沙丘 / 白垩崖 / 潮滩海岸 | `coast` |

## 清单（29 个）

### T1 骨架（8）— ✅ 批 1（commit `f03b04b`）
french-alps · pyrenees · massif-central · vosges · armorican-massif · paris-basin · aquitaine-basin · corsica

### 批 2（7）— 河流 + 阿尔卑斯法国一侧 + 三角洲
loire-river（法国最长河）· rhone-river · seine-river · ecrins（全法国境内最高 massif，Barre des Écrins 4102m）· vanoise（法国首个国家公园 1963）· mer-de-glace（法国最大冰川）· camargue（罗讷河三角洲）

### 批 3（7）— 中央高原火山 + 喀斯特 + 峡谷
chaine-des-puys（普伊火山群，UNESCO）· cantal（欧洲最大的死火山，面积计）· monts-dore（多尔山，桑西所在的层火山群）· grands-causses（大科斯，石灰岩喀斯特台地，UNESCO 文化景观）· vercors（韦科尔，石灰岩前阿尔卑斯台地）· cevennes（塞文山，中央高原东南缘，UNESCO 文化景观）· verdon-gorge（凡尔登峡谷，"欧洲大峡谷"）

### 批 4（7）— 峡谷 / 沿海 / T3
ardeche-gorge（阿尔代什峡谷 + 阿尔克桥天生桥）· landes-de-gascogne（朗德松林沙地）· calanques（马赛峡湾岸国家公园）· dune-du-pilat（欧洲最高沙丘）· etretat（埃特勒塔白垩海蚀拱）· mont-saint-michel-bay（圣米歇尔山湾，大潮差潮滩）· cirque-de-gavarnie（加瓦尔尼冰蚀圆谷，比利牛斯，UNESCO）

## 每批收尾
1. `lib/regions.ts` europe `terrainCount`：124 → 131（批 2）→ 138（批 3）→ 145（批 4）。最终法国 29，europe 145。
2. `lib/terrain-label-registry.ts`：批 2 河流 + Écrins/Vanoise/Mer de Glace/Camargue 给 `national`（都是国家级），
   其余批默认 regional 足够；批 4 的 dune-du-pilat / etretat / cirque-de-gavarnie 给 `poi`。
3. `tsc` + `build` + `check-regions` + `check-terrain-camera` 通过；浏览器抽查。
