# Rebuild questions.js from edited JSON chunks: python3 -I tools-build.py out1.json out2.json ...
import json, sys
src = open('questions.js').read()
head = src[:src.index('(function () {')]
rows = []
for f in sys.argv[1:]:
    rows += json.load(open(f))
for r in rows:
    r.pop('target_rank', None)
    assert len(r['d']) == 5, r['q']
body = 'window.QUESTIONS = ' + json.dumps(
    [{k: r[k] for k in ('id', 'topic', 'q', 'a', 'd', 'why')} for r in rows],
    ensure_ascii=False, indent=1) + ';\n'
open('questions.js', 'w').write(head + body)
print(len(rows), 'questions written')
