// gjs tests/check.js — validates the question bank, the lab mapping, and that option length never gives the answer away
const GLib = imports.gi.GLib;
var window = {};
function load(f) { eval(new TextDecoder().decode(GLib.file_get_contents(f)[1])); }
load('labs.js'); load('questions.js');
const Q = window.QUESTIONS, T = window.TOPICS, LABS = window.LABS;
let fail = 0; const ids = {}, qs = {}, per = {}, rankCount = [0, 0, 0, 0, 0, 0];
function bad(m) { fail++; print('FAIL ' + m); }
Q.forEach(function (q) {
  if (ids[q.id]) bad('dup id ' + q.id); ids[q.id] = 1;
  if (qs[q.q]) bad('dup question ' + q.q); qs[q.q] = 1;
  if (!(q.topic in T)) bad('unknown topic ' + q.topic);
  if (!Array.isArray(q.d) || q.d.length !== 5) bad('need 5 distractors: ' + q.q);
  const opts = [q.a].concat(q.d);
  if (new Set(opts.map(function (x) { return x.trim().toLowerCase(); })).size !== 6) bad('duplicate option: ' + q.q);
  if (!q.why) bad('no explanation: ' + q.q);
  // length tell: answer's rank among the 6 (average rank over ties), and no outliers
  const L = opts.map(function (x) { return x.length; }), a = L[0];
  const below = L.filter(function (l) { return l < a; }).length, ties = L.filter(function (l) { return l === a; }).length;
  rankCount[Math.min(5, Math.floor(below + (ties - 1) / 2))]++;
  const sorted = L.slice().sort(function (x, y) { return x - y; }), med = (sorted[2] + sorted[3]) / 2;
  if (a > 1.6 * med || a < 0.55 * med) bad('answer length outlier (' + a + ' vs median ' + med + '): ' + q.q);
  per[q.topic] = (per[q.topic] || 0) + 1;
});
Object.keys(T).forEach(function (t) {
  if (!per[t]) bad('topic with no questions ' + t);
  const n = LABS.filter(function (l) { return l.topics.indexOf(t) >= 0; }).length;
  if (n !== 1) bad('topic must be in exactly one lab: ' + t + ' (' + n + ')');
});
LABS.forEach(function (l) { l.topics.forEach(function (t) { if (!(t in T)) bad('lab ' + l.name + ' lists unknown topic ' + t); }); });
print(Q.length + ' questions');
print('answer length rank (1=shortest … 6=longest): ' + rankCount.join(' / ') + '  — even ≈ ' + Math.round(Q.length / 6) + ' each');
const longest = rankCount[5] / Q.length;
if (longest > 0.22) bad('answer is the longest option too often: ' + Math.round(100 * longest) + '%');
if (rankCount[0] / Q.length > 0.22) bad('answer is the shortest option too often');
LABS.forEach(function (l) { print('  ' + l.name + ': ' + l.topics.map(function (t) { return per[t] || 0; }).reduce(function (a, b) { return a + b; }, 0)); });
print(fail ? fail + ' FAILURES' : 'ALL CHECKS PASS');
if (fail) imports.system.exit(1);
