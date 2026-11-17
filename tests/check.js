// gjs tests/check.js — validates the question bank
const GLib = imports.gi.GLib;
var window = {};
const src = new TextDecoder().decode(GLib.file_get_contents('questions.js')[1]);
eval(src.replace(/window\./g, 'window.'));
const Q = window.QUESTIONS, T = window.TOPICS;
let fail = 0, longest = 0; const ids = {}, qs = {}, per = {};
function bad(m) { fail++; print('FAIL ' + m); }
Q.forEach(function (q) {
  if (ids[q.id]) bad('dup id ' + q.id); ids[q.id] = 1;
  if (qs[q.q]) bad('dup question ' + q.q); qs[q.q] = 1;
  if (!(q.topic in T)) bad('unknown topic ' + q.topic);
  if (!Array.isArray(q.d) || q.d.length !== 5) bad('need 5 distractors: ' + q.q);
  const all = [q.a].concat(q.d).map(function (x) { return x.trim().toLowerCase(); });
  if (new Set(all).size !== 6) bad('duplicate option: ' + q.q);
  if (!q.why) bad('no explanation: ' + q.q);
  const L = [q.a].concat(q.d).map(function (x) { return x.length; });
  if (q.a.length === Math.max.apply(null, L) && L.filter(function (l) { return l === q.a.length; }).length === 1) longest++;
  per[q.topic] = (per[q.topic] || 0) + 1;
});
Object.keys(T).forEach(function (t) { if (!per[t]) bad('topic with no questions ' + t); });
print(Q.length + ' questions; answer is uniquely longest option in ' + longest + ' (' + Math.round(100 * longest / Q.length) + '%)');
Object.keys(per).forEach(function (t) { print('  ' + per[t] + '  ' + t); });
print(fail ? fail + ' FAILURES' : 'ALL CHECKS PASS');
if (fail) imports.system.exit(1);
