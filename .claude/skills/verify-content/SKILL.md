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

### 3. 处理结论

先把子代理的输出**整理成一份 findings.json**（格式见下一步），然后：

| verdict | 怎么处理 |
|---|---|
| `ok` | 记进台账，正文不动。若原文缺年份/口径而核实拿到了，**顺手补进正文** |
| `wrong` | **当场改**，中英两边都改；正文类的在条目上方加 `// <字段> sources:` 注释 |
| `unknown` | **不要瞎猜**。要么把无法核实的断言删掉/降级（去掉最高级、去掉排名），要么记成待办 |

**航线类不要手写 python 逐条改** —— 前两轮是手改的，18 条就要写一大段字典字面量，
再多必然出错。findings.json 已经是结构化的，直接让脚本消费：

```bash
npm run verify:apply -- <findings.json> --dry-run   # 先看它打算改什么
npm run verify:apply -- <findings.json>             # 改 data/routes/*.json
```

`verify:apply` 按 `patch` / `waypointPatch` 改航班字段与航点，并统一写 `source`
留痕（`resolution` 不是 `fixed` 且 `verdict` 不是 `ok` 的自动打 `status: "wrong"`）。

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
