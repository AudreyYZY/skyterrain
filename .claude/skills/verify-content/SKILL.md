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

给子代理的 prompt 里必须包含：
- 条目的 `kind` / `id`
- **要核的原文**（把句子贴进去，不要让它自己去读文件猜）
- 这条属于 `docs/known-errors.md` 的哪一类（如果是 check:claims 报出来的）

### 3. 处理结论

| verdict | 怎么处理 |
|---|---|
| `ok` | 记进台账，正文不动。若原文缺年份/口径而核实拿到了，**顺手补进正文** |
| `wrong` | **当场改正文**，中英两边都改，并在条目上方加 `// <字段> sources:` 注释写清来源与年份 |
| `unknown` | **不要瞎猜**。要么把无法核实的断言删掉/降级（去掉最高级、去掉排名），要么记成待办 |

改完必须跑：

```bash
npm run check:claims   # 棘轮：这几类计数只许降不许升
npm run check:places   # 或 check:routes / check:regions，看改了什么
npx tsc --noEmit && npm run lint
```

改了航线解说文字还要 `npm run gen:anchors && npm run check:anchors`。

### 4. 写回台账

在 `docs/verification-ledger.md` 追加一行本轮记录，并把 `lastVerifiedCommit:`
更新为当前 HEAD。台账要记：日期、范围、核了多少条、ok/wrong/unknown 各多少、
改了什么、还欠什么。

### 5. 新错误类型 → 补进错误台账 + 开 issue

如果这轮发现的错误**归不进 `docs/known-errors.md` 现有的任何一类**，那就是新类型：

1. 在 `known-errors.md` 新开一节，写清症状 / 实例 / 根因 / 修法 / **防线**
2. 防线只有三种可能：加一条 `check:*` 断言、写进这个流程、或者老实写"目前无防线"
3. 开一个 GitHub issue（标签 `data-error`），正文第一行写它属于哪一类

```bash
gh issue create --label data-error --title "..." --body "..."
```

## 红线

- **拿不准就报 unknown，不要补一个看起来合理的答案。** 这个项目犯过的错里，
  相当一部分正是"看起来很合理"。
- **中英分开核。** 两种语言各自成文，可能只有一边错（横滨那条就只在中文里错）。
- **经停不算直飞。** 航班核实时同机号经停必须记 `wrong`。
- **不要为了让台账好看而把 unknown 记成 ok。** 台账的价值全在它诚实。
