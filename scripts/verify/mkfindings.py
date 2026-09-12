"""核实结果 → findings.json 的生成器，外加一个「只改写法、不开 issue」的直接替换助手。

**为什么要有它**：`npm run verify:apply-text` 是全有或全无的 —— 一条 find 对不上，整批都不落地。
所以每条替换的三个前置条件要在**生成时**就断言掉，而不是等 apply 报错再回头猜是哪一条：

  ① `find` 必须在**该条目块内**正好出现一次（不是整个文件里一次 —— 同一句话常在多个条目里出现）；
  ② `find` 不能跨 `" +` 的片段拼接（航线解说是多段字符串拼出来的）；
  ③ 替换文本里不能有未转义的双引号。

这三条都是踩出来的：曾经一整批 40 条因为其中一条 find 在条目里出现两次而全部回滚。

用法（在仓库根目录跑）：

    import sys; sys.path.insert(0, "scripts/verify")
    from mkfindings import F, build, apply_direct

    F("terrain", "kubuqi", "terrain/kubuqi/area", "seeing", "C6-c",
      claim="面积约1.86万平方公里", finding="国家林草局：1.41 万平方公里", source="forestry.gov.cn（1 级）",
      zh=("面积约1.86万平方公里", "面积约1.41万平方公里"),
      en=("about 18,600 km²", "about 14,100 km²"))
    build("/tmp/f-r30a.json", "R30a", "这一轮核了什么")

然后：

    npm run verify:apply-text -- /tmp/f-r30a.json   # 打进正文 + 来源注释，并回头搜别处
    npm run verify:report     -- /tmp/f-r30a.json   # 关 issue / 开 issue / 记台账

**`apply_direct` 是另一条路**：纯写法改动（降级最高级、统一措辞）不该开 issue，也不需要来源注释，
直接用它改，一样是全有或全无。C1a 那 283 处就是这么落地的。
"""
import json
import re
import sys

SRC = {
    ("terrain", "zh"): "lib/terrain-content.zh.ts",
    ("terrain", "en"): "lib/terrain-content.en.ts",
    ("travel", "zh"): "lib/travel-content.zh.ts",
    ("travel", "en"): "lib/travel-content.en.ts",
    ("route", "zh"): "lib/route-narration.ts",
    ("route", "en"): "lib/route-narration.ts",
    ("registry", "zh"): "lib/terrain-registry.ts",
}
_cache: dict[str, str] = {}
_findings: list[dict] = []


def _text(path: str) -> str:
    if path not in _cache:
        _cache[path] = open(path, encoding="utf8").read()
    return _cache[path]


def block(kind: str, lang: str, eid: str) -> str:
    """条目块：从 `  "<id>": {` 到同缩进的 `}` 为止。注册表的条目形状不同，单独处理。"""
    s = _text(SRC[(kind, lang)])
    if kind == "registry":
        i = s.index(f'id: "{eid}",')
        j = s.index("\n};", i)
        return s[i:j]
    m = re.search(r'^([ \t]*)(?:"%s"|%s|\'%s\')\s*:\s*\{\s*$' % ((re.escape(eid),) * 3), s, re.M)
    assert m, f"找不到条目 {kind}/{eid}"
    e = re.compile(r"^%s\},?\s*$" % re.escape(m.group(1)), re.M).search(s, m.end())
    assert e, f"条目 {kind}/{eid} 没有结束行"
    return s[m.start():e.start()]


def check(kind: str, lang: str, eid: str, find: str, rep: str) -> None:
    b = block(kind, lang, eid)
    n = b.count(find)
    assert n == 1, f"{kind}/{eid} [{lang}]：find 在条目里出现 {n} 次（必须正好 1 次）：{find[:60]}"
    assert any(find in line for line in b.split("\n")), \
        f"{kind}/{eid} [{lang}]：find 跨越了 \" + 片段拼接，拆短一点：{find[:60]}"
    assert not re.search(r'(?<!\\)"', rep), f"{kind}/{eid} [{lang}]：替换文本里有未转义的双引号：{rep[:60]}"


def F(kind, eid, key, field, cls, claim, finding, source,
      zh=None, en=None, resolution="fixed", note=None, verdict=None):
    """加一条 finding。zh/en 是 (find, replace)；resolution='open' = 这轮没解决，只在 issue 下留记录。"""
    f = {
        "key": key, "kind": kind, "id": eid, "field": field,
        "verdict": verdict or ("wrong" if resolution == "fixed" else "unknown"),
        "claim": claim, "finding": finding, "source": source,
        "resolution": resolution, "errorClass": cls,
    }
    patch = {}
    for lang, spec in (("zh", zh), ("en", en)):
        if spec:
            check(kind, lang, eid, *spec)
            patch[lang] = {"find": spec[0], "replace": spec[1]}
    if patch:
        f["textPatch"] = patch
    if note:
        f["sourceNote"] = note
    _findings.append(f)
    return f


def build(path: str, rnd: str, scope: str, findings=None, checked_on=None, umbrella=147) -> None:
    fs = findings if findings is not None else _findings
    keys = [f["key"] for f in fs]
    dup = {k for k in keys if keys.count(k) > 1}
    assert not dup, f"key 重复（verify:report 会按 key 去重，重复等于互相覆盖）：{dup}"
    import datetime
    json.dump(
        {"round": rnd, "scope": scope, "umbrella": umbrella,
         "checkedOn": checked_on or datetime.date.today().isoformat(), "findings": fs},
        open(path, "w", encoding="utf8"), ensure_ascii=False, indent=1,
    )
    print(f"{path}  {len(fs)} findings")


def _variants(find: str, rep: str):
    """英文源文件里引号可能写成 \\" 或 ’ —— 逐个试，避免为了一个撇号手工找半天。"""
    out = [(find, rep)]
    if '"' in find:
        out.append((find.replace('"', '\\"'), rep.replace('"', '\\"')))
    if "'" in find:
        out.append((find.replace("'", "’"), rep.replace("'", "’")))
    if "’" in find:
        out.append((find.replace("’", "'"), rep.replace("’", "'")))
    return out


def apply_direct(edits, dry=False) -> int:
    """edits = [(kind, lang, id, find, replace), ...]。**全部断言通过才写盘**，一条不过整批不落地。"""
    texts = {}
    errs, done = [], 0
    for kind, lang, eid, find, rep in edits:
        path = SRC[(kind, lang)]
        texts.setdefault(path, _text(path))
        s = texts[path]
        if kind == "registry":
            i = s.index(f'id: "{eid}",')
            a, b_end = i, s.index("\n};", i)
        else:
            m = re.search(r'^([ \t]*)(?:"%s"|%s|\'%s\')\s*:\s*\{\s*$' % ((re.escape(eid),) * 3), s, re.M)
            if not m:
                errs.append(f"{kind}/{eid}：找不到条目")
                continue
            e = re.compile(r"^%s\},?\s*$" % re.escape(m.group(1)), re.M).search(s, m.end())
            a, b_end = m.start(), e.start()
        blk = s[a:b_end]
        hit = None
        for f, r in _variants(find, rep):
            c = blk.count(f)
            if c == 1:
                hit = (f, r)
                break
            if c > 1:
                errs.append(f"{kind}/{eid}：find 出现 {c} 次：{f[:50]}")
                hit = False
                break
        if hit is None:
            errs.append(f"{kind}/{eid}：找不到 {find[:60]}")
            continue
        if hit is False:
            continue
        assert not re.search(r'(?<!\\)"', hit[1]), f"{kind}/{eid}：替换里有未转义双引号"
        texts[path] = s[:a] + blk.replace(*hit) + s[b_end:]
        done += 1
    if errs:
        print("\n".join(errs))
        print(f"✗ {len(errs)} 条失败，未写盘")
        return 0
    if not dry:
        for path, s in texts.items():
            open(path, "w", encoding="utf8").write(s)
            _cache[path] = s
    print(f"✓ {done} 处替换" + ("（dry）" if dry else " 已写盘"))
    return done


if __name__ == "__main__":
    # 自检：拿一个真实条目跑一遍块定位与三条断言，确认脚本本身没坏
    b = block("terrain", "zh", "kubuqi")
    assert "库布齐" in b, "块定位坏了"
    try:
        check("terrain", "zh", "kubuqi", "沙漠", "x")
    except AssertionError as ex:
        print("✓ 断言生效：", str(ex)[:60])
    print(f"✓ 自检通过（kubuqi 条目 {len(b)} 字）")
