---
name: add-content
description: 加一批城市 / 地形 / 航线的标准流程（研究 → 写入 → 门禁 → 核实 → 代码审查 → 提交 → CI 到绿 → 记账）。用法 /add-content [国家或批次说明]
---

# 加一批内容：标准流程

**完整定义在 [`docs/content-pipeline.md`](../../../docs/content-pipeline.md)，先读那份。**
这里只是可执行的清单，两份东西描述的是同一个流程。

**不需要等用户审批**（2026-09-17 授权）。但 G3–G8 一项都不能跳；
查明有问题却当轮修不了的，**必须留成 GitHub issue 再往下走**。

## 用法

```
/add-content                      # 按进度文档 §3 的候选表接着做下一批
/add-content 保加利亚 4 城         # 指定这一批做什么
/add-content routes 中国—华沙      # 航线批
/add-content terrain 拉脱维亚      # 地形批
```

## 清单

### G0 安全前置
- [ ] 取 FCDO 该国旅行建议页，记更新日期
- [ ] 劝阻地区 20 km 内的城市 / 地形 / 航线一律不收
- [ ] 零争议红线：现代政治 / 领土 / 族群 / 宗教评价不碰

### G1 研究
- [ ] `general-purpose` 子代理 → 事实表落 scratchpad（**不要边查边写正文**）
- [ ] prompt 里必带：「请求头里不要放任何个人信息（User-Agent 用通用字符串）」
- [ ] 数字连年份 + 口径 + 机构 + 发布月份一起记；人口数**逐位自检**（与本库已有条目对同一张表）

### G2 写入
- [ ] `lib/content/<country>/…`；新城必写 `howItWorks`，主线要是本库没写过的结构层次
- [ ] 每个条目带 `sources` 注释（没注释 = 没核过）
- [ ] 排他性断言（唯一 / 最大 / 首座）先在本库同国家条目里搜一遍

### G3 生成 + 静态门禁
```bash
npm run gen:content
npm run gen:anchors          # 只在改过航线解说文字之后
npm run gate -- --stage=1
```

### G4 预热 + 批次门禁  ← 最容易被跳过、也最直接对应用户报过的两个问题
```bash
npm run warm:tts -- --ids=<这批新增的 id>
npm run gate -- --stage=2
```
`check:batch` 从 git diff 反算这一批的条目 id，只看这些条目：
① 播报全部已预热（否则用户听到机械音）② 逐句高亮对得上真实 word boundary
③ 来源留痕。**①② 是硬失败。**

### G5 内容核实
- [ ] `/verify-content`（或 `content-verifier` 子代理，每批 8–12 条）
- [ ] `verify:apply-text` / `verify:apply` → `verify:report`
- [ ] 改完重跑 `npm run gate -- --stage=1,3`
- [ ] 拿不准记 `unknown`；已查明写法有问题的先删掉表述，issue 继续开着

### G6 代码审查（动过 components / lib / scripts 才需要）
- [ ] `/code-review`
- [ ] 专门看两个本项目特有的错误类型：
      **同一件事有第二份实现**（两份各自都对、错在不一致）；
      **检查看不见新内容**（取样范围不含新追加的条目）

### G7 提交
```bash
npm run gate                 # 全四段 = 与 CI 等价
```
- [ ] 内容 / 文档分两个 commit；在 `main` 上则先切分支
- [ ] `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`

### G8 CI 到绿
- [ ] 盯 PR 的 CI 跑完再继续下一批；红了先修

### G9 记账
- [ ] `CLAUDE.md` 计数 + 该国说明段
- [ ] `docs/city-expansion-progress-2026-09-05.md` 加一行
- [ ] 新错误类型 → `docs/known-errors.md` + `data-error` issue
- [ ] 未修问题 → **一定要有 issue**
- [ ] 核实结论 → `docs/verification-ledger.md`

## 红线

- **全库口径的平均数与固定抽样会漏掉新加的那一批** —— 写任何新检查都要自问
  「它看得见新内容吗」。看不见的检查，通过了不说明任何事。
- **不要为了让计数下降而硬填一个没核到的数字。**
- 不要写「权威」「人工审核」「真实商业航班」这类断言。
