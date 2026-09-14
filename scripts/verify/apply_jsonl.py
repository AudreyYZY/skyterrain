"""把核实子代理输出的 JSONL（每行一个条目/字段）落地到按国家拆分的内容文件。

每行：{"country","id","field","verdict","zh":{"find","replace"},"en":{...},"source","nextRelease","note"}
- verdict = update / add-year / fix：zh、en 替换走 mkfindings.apply_direct（全有或全无）；
  并在条目键下插一行 `// <field> sources: …` 注释（带核实日期，gen:verify-status 能识别）；
- verdict = keep-exempt / unknown：不改正文，打印出来交给人处理（写豁免表或开 issue）。

用法：python3 scripts/verify/apply_jsonl.py findings.jsonl [--kind travel|terrain|route] [--date 2026-09-15] [--dry]
"""
import json, re, sys
sys.path.insert(0, "scripts/verify")
from mkfindings import apply_direct, path_of, _text, _cache

args = sys.argv[1:]
path = args[0]
kind = args[args.index("--kind") + 1] if "--kind" in args else "travel"
date = args[args.index("--date") + 1] if "--date" in args else "2026-09-15"
dry = "--dry" in args

rows = [json.loads(l) for l in open(path, encoding="utf8") if l.strip().startswith("{")]
edits, notes, skipped = [], [], []
for r in rows:
    if r["verdict"] in ("update", "add-year", "fix", "wrong"):
        for lang in ("zh", "en"):
            spec = r.get(lang)
            if spec and spec.get("find") and spec["find"] != spec.get("replace"):
                edits.append((kind, lang, r["id"], spec["find"], spec["replace"]))
        notes.append(r)
    else:
        skipped.append(r)

done = apply_direct(edits, dry=dry)
if edits and not done:
    sys.exit(1)

if not dry:
    for r in notes:
        for lang in ("zh", "en"):
            p = path_of(kind, lang, r["id"])
            s = _text(p)
            m = re.search(r'^  (?:"%s"|%s): [{\[]\s*$' % (re.escape(r["id"]), re.escape(r["id"])), s, re.M)
            src = r.get("source", "").replace("\n", " ")
            line = f'    // {r["field"]} sources（{date} 核实，{r["verdict"]}）: {src}' + (f'；下一期约 {r["nextRelease"]}' if r.get("nextRelease") else "")
            s = s[: m.end()] + "\n" + line + s[m.end():]
            open(p, "w", encoding="utf8").write(s)
            _cache[p] = s
    print(f"✓ 写来源注释 {len(notes)} 条 × 中英")

for r in skipped:
    print(f"⚑ {r['verdict']}: {r.get('country')}/{r['id']}/{r['field']} — {r.get('note','')[:160]} | {r.get('source','')[:160]} | next {r.get('nextRelease','')}")
