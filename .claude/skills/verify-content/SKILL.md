---
name: verify-content
description: 每批新增/改动地形、城市、航线之后，把这批内容拿去联网核对权威来源，把结论写回核实台账，事实错误当场改掉。用法 /verify-content [scope] [ids...]
---

# 内容核实流程

这个项目的文字是依据公开资料整理生成的，**没有人逐条审核过**，已经因此犯过一批
事实错误（见 [`docs/known-errors.md`](../../../docs/known-errors.md)）。
`npm run check:*` 那一套只能查"自相矛盾"和"不该出现的写法"，**查不了内容对不对**。
这个流程补的就是那一块。

**什么时候跑**：每加完一批地形 / 城市 / 航线之后，合并之前。
**不要**用它写新内容 —— 它只核对既有内容。

## 用法

```
/verify-content                        # 核自上次台账以来所有新增/改动的条目
/verify-content routes                 # 只核航线
/verify-content cities kul-lgk kch-myy # 指定条目
```

## 步骤

### 1. 算出这一轮要核什么

```bash
# 台账里记的上次核实位置
grep '^lastVerifiedCommit:' docs/verification-ledger.md

# 这之后动过的内容文件
git diff --name-only <lastVerifiedCommit>..HEAD -- lib/terrain-content.*.ts \
  lib/travel-content.*.ts lib/places-registry.ts lib/terrain-registry.ts data/routes/
```

从 diff 里取出**具体条目 id**（不是文件名）：新增的条目全核；改动的条目只核改动的字段。
一轮控制在 **20–40 个条目**，多了就分批。

同时把 `npm run check:claims` 报出来的、属于这批条目的行也一并带上 ——
那些是"写法上已经不可靠"的句子，正好一起核。

### 2. 分批交给 content-verifier 子代理

每批 8–12 个条目，用 `Agent` 工具、`subagent_type: "content-verifier"`。
**多批可以同时开**（互不依赖），但不要一次开超过 4 个。

> **坑**：`.claude/agents/content-verifier.md` 是在会话启动时加载的。如果这个文件是
> 本次会话里刚创建/刚改的，`subagent_type: "content-verifier"` 会报
> `Agent type not found` —— 重开一个会话即可。临时办法是用 `general-purpose`
> 并把 `content-verifier.md` 里的来源优先级、返回格式、红线**原样贴进 prompt**，
> 效果一样，只是每次都要贴。

给子代理的 prompt 里必须包含：
- 条目的 `kind` / `id`
- **要核的原文**（把句子贴进去，不要让它自己去读文件猜）
- 这条属于 `docs/known-errors.md` 的哪一类（如果是 check:claims 报出来的）
- **它要回答什么形态的答案**。核航班号问的是"对不对"；核人口数字问的不是对不对，
  而是"年份 + 口径 + 官方来源"这三样各是什么 —— 不把这一点写进 prompt，
  拿回来的就还是一个没有年份的数字。

**核 C6（数字缺年份）时，要子代理直接给出可以粘贴的成品短句**，中英各一句，格式：

- 中文 `2024年末常住人口约2480万（上海市统计局）`
- 英文 `a population of about 24.8 million at the end of 2024 (Shanghai Municipal Bureau of Statistics)`
- 另外单列完整来源，我方写进条目上方的 `// identity sources:` 注释

正文里的机构名只写**能顺畅朗读的简称** —— 这些句子都会被 TTS 念出来，
《XX年国民经济和社会发展统计公报》这种整名念出来是不可接受的，只进注释。

**逐条核完之后，还要把同一条目的六段并排再读一遍。** 这一类错只在并排读时才显形，
逐条查是查不出来的（`docs/known-errors.md`「条目内部的自相矛盾」）：奥克兰火山场的
`formation` 说「每座火山只喷一次」，而 `observation` 举的范例恰好是那个已知例外；
中奥塔哥的 `distinguish` 说「和美国盆岭省是同类构造」，而**它自己的 `formation` 段
写着「地壳受挤压」**（美国那边是拉张）；麦肯齐盆地中文写「约五六百米」、英文写
「500–700 m」。**中英两侧也要并排读** —— 两侧是分开写的，数字、专名、确定性程度都可能不同步。

**核 C6 时 prompt 里必须再问一句「这是不是最新一期」**。补年份只解决了「不知道是哪一年」，
没解决「拿的不是最新一期」—— 2026 年 9 月给出 2024 年的数就是落后整整一期，用户当场指出过。
要子代理回答：

- 更新一期**发布了没有**？发布了给新数；没发布就写「截至 <今天> 未发布」，
  **并附上该机构的常规发布月份**，好让下次知道什么时候回来刷新。
- 这个**口径在该国官方统计里存不存在**？（「都会区人口」在中国就不存在。）
- 拿到的是**本国官方数字**还是国际机构的推算？（UN / World Bank 是模型推算，不能混用。）

`npm run check:claims` 的 `C6d` 规则会把「统计时点早于当前年 − 1」的句子逐条报出来，
所以这一步偷懒会在下一次跑棘轮时暴露。

**核完之后把发布节奏记进 [`docs/data-refresh-calendar.md`](../../../docs/data-refresh-calendar.md)** ——
那张表回答的是「一个数字什么时候会过期、到时候去哪里取新的」。发布月份是核实过程的
副产品，当时不记，下一轮还得再查一遍。新增一个国家时，把它的统计机构一并补进去。

### 3. 处理结论

先把子代理的输出**整理成一份 findings.json**（格式见下一步），然后：

| verdict | 怎么处理 |
|---|---|
| `ok` | 记进台账，正文不动。若原文缺年份/口径而核实拿到了，**顺手补进正文**。**即使一个字都不用改，也要写一条 `sourceNote` 留痕** |
| `wrong` | **当场改**，中英两边都改；正文类的在条目上方加 `// <字段> sources:` 注释 |
| `unknown` | **不要瞎猜**。要么把无法核实的断言删掉/降级（去掉最高级、去掉排名），要么记成待办 |

**`ok` 也要留痕，否则下一轮会重复派工**（2026-09-08 踩到）：地形讲解批 2 里有 5 篇核完
无需改动，于是 findings 里只写了 `verdict: ok`、没有 `sourceNote` —— 结果这 5 篇在文件里
和从没核过的一模一样，下一轮排批次时又被算进「未核实」。判断一篇有没有核过，看的是
条目上方有没有 `// <字段> sources:` 注释；**没有注释 = 没核过**，这是唯一的机器可读凭据。
所以 `verdict: ok` 的条目也要给一条 `sourceNote`，写明核实日与「本轮无需改动」。

**不要手写 python 逐条改** —— 前两轮航线是手改的，18 条就要写一大段字典字面量，
再多必然出错。findings.json 已经是结构化的，直接让脚本消费。两个应用端按内容类型分：

```bash
# 航线的结构化字段（data/routes/*.json）
npm run verify:apply -- <findings.json> --dry-run
npm run verify:apply -- <findings.json>

# 城市/国家概览的正文句子（lib/travel-content.{zh,en}.ts）
npm run verify:apply-text -- <findings.json> --dry-run
npm run verify:apply-text -- <findings.json>
```

`verify:apply` 按 `patch` / `waypointPatch` 改航班字段与航点，并统一写 `source`
留痕（`resolution` 不是 `fixed` 且 `verdict` 不是 `ok` 的自动打 `status: "wrong"`）。

`verify:apply-text` 按 `textPatch.{zh,en}.{find,replace}` 改句子，并把 `sourceNote`
写成条目上方的 `// <字段> sources:` 注释（中英两个文件都写）。它的关键保护是
**`find` 必须在该条目内正好命中一次** —— 0 次或多次直接报错退出，
不会像手改那样静默改到隔壁条目去。

改完必须跑：

```bash
npm run check:claims   # 棘轮：这几类计数只许降不许升
npm run check:places   # 或 check:routes / check:regions，看改了什么
npx tsc --noEmit && npm run lint
```

改了航线解说文字还要 `npm run gen:anchors && npm run check:anchors`。

### 4. 落地：开 issue、关 issue、记台账 —— 交给脚本，不要手做

同一份 findings.json 交给第二个消费端：

```bash
npm run verify:report -- <findings.json> --dry-run   # 先看它打算做什么
npm run verify:report -- <findings.json>             # 真做
```

**顺序是先 `verify:apply` 再 `verify:report`** —— 这样 issue 里说的「已修正」
是真的已经改完了。

**apply 报错就停下，不要接着跑 report**（踩过）：`verify:apply-text` 遇到 find 命中
0 次或多次会整个退出、一个字都不写；这时候如果习惯性地把 report 也跑了，台账里就会
多出一行「已修正 N 条」而数据其实没动。改完 find 字符串、apply 真的成功之后再跑 report。

脚本把三件事做成机械动作，**不要手工开 issue** —— 手做一定会重复开、忘记关、
正文格式各写各的：

| 这一条的 `resolution` | 脚本做什么 |
|---|---|
| `fixed` | 之前为它开过 issue → 评论写清怎么修的 + 来源，然后**关掉**；没开过就不开（当场修完还开一个再关只是噪音） |
| `open` / `blocked` | **开一个 issue**，正文里埋 `<!-- verify-key: ... -->` 去重；已经开着的只补一条复核评论；已关闭的会**重开** |
| 每一轮 | 在总 issue（`umbrella`）下留一条进度评论 + 往 `docs/verification-ledger.md` 追加一行 + 更新 `lastVerifiedCommit` |

findings JSON 的形状：

```json
{
  "round": "2026-09-07 中国国内航线批5",
  "scope": "routes · 中国国内",
  "umbrella": 143,
  "checkedOn": "2026-09-07",
  "findings": [
    {
      "key": "routes/sha-hrb/flight",
      "kind": "routes", "id": "sha-hrb", "field": "flight",
      "verdict": "wrong",
      "claim": "MU5620 / A321",
      "finding": "MU5620 实际飞的是…（含来源级别）",
      "source": "https://…",
      "resolution": "blocked",
      "note": "找不到可靠替代航班号",
      "errorClass": "A1"
    },
    {
      "key": "routes/kmg-jhg/flight",
      "kind": "routes", "id": "kmg-jhg", "field": "flight",
      "verdict": "wrong", "claim": "8L9285 / A320",
      "finding": "查不到这个航班号；该航段由东航执飞",
      "source": "https://…", "resolution": "fixed", "errorClass": "A1",
      "patch": { "airline": "中国东方航空", "airlineEn": "China Eastern Airlines",
                 "flightNo": "MU5903", "aircraft": "Boeing 737-700" }
    }
  ]
}
```

`patch` 只在 `resolution: "fixed"` 时给，字段名与 `FlightInfo` 一致；
改航点用 `waypointPatch: { "index": 0, "id": "ctu", "name": "成都双流", … }`。

`key` 是去重键，**同一个键永远只有一个 issue**。字段含义见
[`scripts/verify-issues.ts`](../../../scripts/verify-issues.ts) 顶部注释。

**核到「这就是最新一期」的，写进豁免表，不要只留在注释里**：
`docs/claims-stale-exempt.json` 记 `key / reason / confirmedOn / recheckAfter`，
`npm run check:claims` 会把它们从 `C6d` 计数里摘出来单列，并在 `recheckAfter` 到期时提示回来复核
（到期日照 [`docs/data-refresh-calendar.md`](../../../docs/data-refresh-calendar.md) 里那个机构的发布月份填）。
不写进去的话，下一轮核实会把同一批条目重新报一遍 —— 或者更糟，
**有人为了让计数下降而硬填一个没核到的数字**。加豁免的前提是条目上方已有
`// <field> sources:` 注释写清为什么。

**`key` 与 `kind` 必须沿用既有写法，否则去重会失效**（2026-09-08 踩过）：

| 档 | `kind` | `key` | `verify:apply-text` 改哪个文件 |
|---|---|---|---|
| 城市 / 国家概览 | `travel` | `travel/<id>/<话题>`，如 `travel/hanzhong/population-2025` | `lib/travel-content.{zh,en}.ts` |
| 地形 | `terrain` | `terrain/<id>/<话题>` | `lib/terrain-content.{zh,en}.ts` |
| 航线的航班信息 | `routes` | `routes/<id>/flight` | `data/routes/*.json`（走 `verify:apply`，不是 apply-text） |
| 航线的**解说文字** | `route` | `route/<id>/<话题>` | `lib/route-narration.ts`，`field` 是 `study` 或 `travel` |

⚠️ **改了航线解说文字必须跑 `npm run gen:anchors`**，否则句数与
`lib/route-anchors.data.ts` 对不上、`npm run check:anchors` 会报错
（`source: "auto"` 的锚点会被重跑覆盖，`"manual"` 的保留）。
`verify:apply-text` 在动过 `route-narration.ts` 之后会把这句提醒打出来。
航线解说的中英文写在**同一个文件**里，脚本已按这一点处理。

地形条目的 `field` 是那 6 个板块之一：`seeing` / `formation` / `observation` /
`distinguish` / `concept` / `history`。

踩过的坑：中国人口刷新那几批把 `kind` 写成了 `city`、`key` 写成了 `cn7-hanzhong-pop`，
于是 `travel/hanzhong/population-2025` 这个既有 issue 没被命中，**又重开了一个一模一样的**
（#209 与 #206、#211 与 #202）。写 findings 之前先 `gh issue list --state all --label
data-error --search <id>` 看看这个条目有没有已经开着的 issue，有就沿用它正文里
`<!-- verify-key: -->` 中的那个键。

### 5. 新错误类型 → 补进错误台账

如果这轮发现的错误**归不进 `docs/known-errors.md` 现有的任何一类**，那就是新类型：

1. 在 `known-errors.md` 新开一节，写清症状 / 实例 / 根因 / 修法 / **防线**
2. 防线只有三种可能：加一条 `check:*` 断言、写进这个流程、或者老实写"目前无防线"
3. 把新类的敞口 issue 号补进 `known-errors.md` 顶部的索引表

（单条错误的 issue 由 `verify:report` 自动开，这一步只管**类型**层面的登记。）

## 红线

- **拿不准就报 unknown，不要补一个看起来合理的答案。** 这个项目犯过的错里，
  相当一部分正是"看起来很合理"。
- **中英分开核。** 两种语言各自成文，可能只有一边错（横滨那条就只在中文里错）。
- **经停不算直飞。** 航班核实时同机号经停必须记 `wrong`。
- **不要为了让台账好看而把 unknown 记成 ok。** 台账的价值全在它诚实。

**`unknown` 不等于「原样留着」。** 「拿不准就记 unknown」说的是**不要编一个替代值**。
如果已经查清「这个写法本身有问题」（用了不存在的口径、名次给不出限定语、
限定语的范围是错的），那就**先把有问题的表述删掉**，issue 继续开着找正确的说法 ——
留着一个已知有问题的句子，比暂时缺这句话更糟。
2026-09-08 奥胡斯「东日德兰的都会区约 140 万」就是这么从 unknown 改判成删除的。
