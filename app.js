/* BIOL 40C lab exam prep — exam engine.
   Questions come from questions.js: window.QUESTIONS = [{id, topic, q, a, d:[5 distractors], why}],
   window.TOPICS = {topicName: "what to review"}. */
(function () {
  'use strict';
  var NS = 'bio40c_labx_';
  var QS = window.QUESTIONS || [];
  var TOPICS = window.TOPICS || {};
  var byId = {};
  QS.forEach(function (q) { byId[q.id] = q; });
  var topicNames = Object.keys(TOPICS).filter(function (t) {
    return QS.some(function (q) { return q.topic === t; });
  });

  function load(k, dflt) {
    try { var v = localStorage.getItem(NS + k); return v ? JSON.parse(v) : dflt; } catch (e) { return dflt; }
  }
  function save(k, v) { try { localStorage.setItem(NS + k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function drop(k) { try { localStorage.removeItem(NS + k); } catch (e) { /* ignore */ } }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function show(v) { ['v-start', 'v-q', 'v-res'].forEach(function (x) { $(x).hidden = x !== v; }); window.scrollTo(0, 0); }

  // ---- state ----
  // S = {round, queue:[ids], i, answered:{id:chosenText} for current round, first:{id:bool}, missed:[ids], total}
  var S = null;
  var cur = null; // {q, opts, locked}

  // ---- start view ----
  var selTopics = load('topics', null) || topicNames.slice();
  selTopics = selTopics.filter(function (t) { return topicNames.indexOf(t) >= 0; });
  var lenN = load('len', 0);

  var LABS = (window.LABS || []).map(function (l) {
    return { name: l.name, short: l.short || l.name, topics: l.topics.filter(function (t) { return topicNames.indexOf(t) >= 0; }) };
  }).filter(function (l) { return l.topics.length; });
  // any topic not assigned to a lab still gets shown
  var orphan = topicNames.filter(function (t) { return !LABS.some(function (l) { return l.topics.indexOf(t) >= 0; }); });
  if (orphan.length) LABS.push({ name: 'Other', short: 'Other', topics: orphan });
  function labOf(t) { for (var i = 0; i < LABS.length; i++) if (LABS[i].topics.indexOf(t) >= 0) return LABS[i]; return null; }
  function countIn(ts) { return QS.filter(function (q) { return ts.indexOf(q.topic) >= 0; }).length; }
  function sameSet(a, b) { return a.length === b.length && a.every(function (x) { return b.indexOf(x) >= 0; }); }
  function setTopics(ts) { selTopics = topicNames.filter(function (t) { return ts.indexOf(t) >= 0; }); save('topics', selTopics); renderStart(); }

  function renderStart() {
    // lab chips
    var chips = $('lab-chips'); chips.textContent = '';
    function chip(label, n, ts) {
      var b = el('button', sameSet(selTopics, ts) ? 'on' : null, label);
      b.appendChild(el('span', 'n', n));
      b.addEventListener('click', function () { setTopics(ts); });
      chips.appendChild(b);
    }
    chip('All labs', QS.length, topicNames);
    LABS.forEach(function (l) { chip(l.short, countIn(l.topics), l.topics); });

    // topics grouped by lab
    var list = $('topic-list'); list.textContent = '';
    LABS.forEach(function (l) {
      var on = l.topics.filter(function (t) { return selTopics.indexOf(t) >= 0; }).length;
      var h = el('label', 'labhead'), hc = el('input'); hc.type = 'checkbox';
      hc.checked = on === l.topics.length; hc.indeterminate = on > 0 && on < l.topics.length;
      hc.addEventListener('change', function () {
        var next = selTopics.filter(function (t) { return l.topics.indexOf(t) < 0; });
        if (hc.checked) next = next.concat(l.topics);
        setTopics(next);
      });
      h.appendChild(hc); h.appendChild(el('span', null, l.name)); list.appendChild(h);
      l.topics.forEach(function (t) {
        var lab = el('label', 't'), cb = el('input'); cb.type = 'checkbox'; cb.checked = selTopics.indexOf(t) >= 0;
        cb.addEventListener('change', function () {
          setTopics(cb.checked ? selTopics.concat([t]) : selTopics.filter(function (x) { return x !== t; }));
        });
        lab.appendChild(cb); lab.appendChild(el('span', null, t)); lab.appendChild(el('span', 'n', countIn([t])));
        list.appendChild(lab);
      });
    });
    Array.prototype.forEach.call($('len').children, function (b) { b.classList.toggle('on', +b.dataset.n === lenN); });
    hint();
    var rb = $('resume-box'); rb.textContent = '';
    var saved = load('state', null);
    if (saved && saved.queue && saved.i < saved.queue.length && saved.queue.every(function (id) { return byId[id]; })) {
      var b = el('button', 'ghost', 'Resume exam in progress — round ' + saved.round + ', question ' + (saved.i + 1) + ' of ' + saved.queue.length);
      b.style.width = '100%'; b.style.marginTop = '10px';
      b.addEventListener('click', function () { S = saved; showQ(); });
      rb.appendChild(b);
    }
  }
  function selLabel() {
    if (sameSet(selTopics, topicNames)) return 'All labs';
    var whole = LABS.filter(function (l) { return sameSet(selTopics, l.topics); });
    if (whole.length) return whole[0].name;
    return selTopics.length + ' topic' + (selTopics.length === 1 ? '' : 's');
  }
  function pool() { return QS.filter(function (q) { return selTopics.indexOf(q.topic) >= 0; }); }
  function hint() {
    var n = pool().length, take = lenN && lenN < n ? lenN : n;
    $('count-hint').textContent = n ? take + ' questions · ' + selLabel() : 'Pick at least one topic.';
    $('start').disabled = !n;
  }
  $('all-on').addEventListener('click', function () { setTopics(topicNames); });
  $('all-off').addEventListener('click', function () { setTopics([]); });
  $('len').addEventListener('click', function (e) {
    if (!e.target.dataset.n) return; lenN = +e.target.dataset.n; save('len', lenN); renderStart();
  });
  $('start').addEventListener('click', function () {
    var p = shuffle(pool()); if (lenN && lenN < p.length) p = p.slice(0, lenN);
    S = { round: 1, queue: p.map(function (q) { return q.id; }), i: 0, first: {}, missed: [], total: p.length, label: selLabel() };
    save('state', S); showQ();
  });

  // ---- question view ----
  function showQ() {
    show('v-q');
    var id = S.queue[S.i], q = byId[id];
    cur = { q: q, opts: shuffle([q.a].concat(q.d)), locked: false };
    $('qnum').textContent = (S.round > 1 ? 'RETAKE ' + (S.round - 1) + ' · ' : '') + 'Q ' + (S.i + 1) + ' / ' + S.queue.length;
    var lb = labOf(q.topic); $('qtopic').textContent = (lb ? lb.short + ' · ' : '') + q.topic;
    $('qtext').textContent = q.q;
    $('bar').style.width = (100 * S.i / S.queue.length) + '%';
    $('meta').textContent = (S.label ? S.label + ' · ' : '') + (S.round > 1 ? 'retake round ' + (S.round - 1) : 'first pass');
    var ol = $('choices'); ol.textContent = '';
    cur.opts.forEach(function (o, k) {
      var li = el('li'), b = el('button', null, o);
      b.addEventListener('click', function () { pick(k); });
      li.appendChild(b); ol.appendChild(li);
    });
    $('feedback').hidden = true; $('next').hidden = true;
  }
  function pick(k) {
    if (cur.locked) return; cur.locked = true;
    var q = cur.q, chosen = cur.opts[k], ok = chosen === q.a;
    var btns = $('choices').querySelectorAll('button');
    Array.prototype.forEach.call(btns, function (b, j) {
      b.disabled = true;
      if (cur.opts[j] === q.a) b.classList.add('correct');
      else if (j === k) b.classList.add('wrong');
      else b.classList.add('fade');
    });
    if (S.round === 1 && !(q.id in S.first)) S.first[q.id] = ok;
    if (!ok) { S.missed.push(q.id); (S.wrongPick = S.wrongPick || {})[q.id] = chosen; }
    var fb = $('feedback'); fb.textContent = '';
    fb.appendChild(el('div', 'verdict ' + (ok ? 'ok' : 'bad'), ok ? 'Correct' : 'Incorrect'));
    var ans = el('div', 'ans'); ans.appendChild(el('b', null, 'Answer: ')); ans.appendChild(document.createTextNode(q.a)); fb.appendChild(ans);
    if (q.why) fb.appendChild(el('div', 'why', q.why));
    fb.hidden = false;
    S.i++; save('state', S);
    var nb = $('next'); nb.hidden = false; nb.textContent = S.i >= S.queue.length ? 'See results' : 'Next'; nb.focus();
  }
  $('next').addEventListener('click', function () { if (S.i >= S.queue.length) results(); else showQ(); });
  $('quit').addEventListener('click', function () {
    // end the round here: unanswered questions don't count either way
    S.queue = S.queue.slice(0, S.i); results();
  });
  document.addEventListener('keydown', function (e) {
    if ($('v-q').hidden || e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key.toLowerCase();
    if (!cur.locked) {
      var n = '123456'.indexOf(k); if (n < 0) n = 'abcdef'.indexOf(k);
      if (n >= 0 && n < cur.opts.length) { e.preventDefault(); pick(n); }
    } else if (k === 'enter' || k === ' ') { e.preventDefault(); $('next').click(); }
  });

  // ---- results ----
  function results() {
    show('v-res'); $('meta').textContent = 'results';
    var answered = S.queue.length, missed = S.missed.slice();
    var right = answered - missed.length;
    $('res-title').textContent = S.round === 1 ? 'Exam complete' : 'Retake round ' + (S.round - 1) + ' complete';
    $('res-score').textContent = answered ? Math.round(100 * right / answered) + '%' : '—';
    if (!missed.length) {
      $('res-line').textContent = answered
        ? (S.round === 1 ? 'Perfect — ' + right + ' / ' + answered + ' on the first try.' : 'All cleared. You have now answered every question correctly.')
        : 'No questions answered.';
    } else {
      $('res-line').textContent = right + ' / ' + answered + ' correct this round. ' + missed.length + ' missed — retake them until none remain.';
    }
    var rt = $('retake');
    rt.hidden = !missed.length;
    rt.textContent = 'Retake the ' + missed.length + ' missed question' + (missed.length === 1 ? '' : 's');
    rt.onclick = function () {
      S = { round: S.round + 1, queue: shuffle(missed), i: 0, first: S.first, missed: [], total: S.total, label: S.label };
      save('state', S); showQ();
    };
    if (!missed.length) drop('state'); else save('state', S);

    // weak areas: first-try accuracy per topic
    var stat = {};
    Object.keys(S.first).forEach(function (id) {
      var q = byId[id]; if (!q) return;
      var t = stat[q.topic] || (stat[q.topic] = { n: 0, ok: 0, miss: [] });
      t.n++; if (S.first[id]) t.ok++; else t.miss.push(q);
    });
    var rows = Object.keys(stat).map(function (t) { var s = stat[t]; s.t = t; s.p = s.ok / s.n; return s; })
      .sort(function (a, b) { return a.p - b.p || b.n - a.n; });
    var bl = $('bylab'); bl.textContent = '';
    var labRows = LABS.map(function (l) {
      var n = 0, ok = 0;
      l.topics.forEach(function (t) { if (stat[t]) { n += stat[t].n; ok += stat[t].ok; } });
      return { l: l, n: n, ok: ok, p: n ? ok / n : 1 };
    }).filter(function (r) { return r.n; }).sort(function (a, b) { return a.p - b.p; });
    if (labRows.length) {
      var g = el('div', 'bylab');
      labRows.forEach(function (r) {
        var pct = Math.round(100 * r.p);
        g.appendChild(el('span', null, r.l.name));
        g.appendChild(el('span', 'p ' + (pct < 70 ? 'bad' : pct < 85 ? 'mid' : 'ok'), pct + '%  (' + r.ok + '/' + r.n + ')'));
      });
      bl.appendChild(g);
    }
    $('bylab').previousElementSibling.hidden = labRows.length < 2; bl.hidden = labRows.length < 2;
    var w = $('weak'); w.textContent = '';
    if (!rows.length) w.appendChild(el('p', 'hint', 'Answer some questions first.'));
    rows.forEach(function (s) {
      var pct = Math.round(100 * s.p), lvl = pct < 70 ? 'bad' : pct < 85 ? 'mid' : 'ok';
      var box = el('div', 'weak lvl-' + lvl), h = el('div', 'h');
      h.appendChild(el('span', null, s.t)); h.appendChild(el('span', 'pct', pct + '%  (' + s.ok + '/' + s.n + ')'));
      box.appendChild(h);
      var m = el('div', 'meter'), f = el('div'); f.style.width = pct + '%'; m.appendChild(f); box.appendChild(m);
      var verdict = lvl === 'bad' ? 'WEAK — study this before the exam. ' : lvl === 'mid' ? 'Shaky — worth another pass. ' : 'Solid. ';
      box.appendChild(el('div', 's', verdict + (lvl !== 'ok' && TOPICS[s.t] ? 'Review: ' + TOPICS[s.t] : '')));
      if (s.miss.length) {
        var ul = el('ul');
        s.miss.slice(0, 6).forEach(function (q) { ul.appendChild(el('li', null, q.q + ' → ' + q.a)); });
        if (s.miss.length > 6) ul.appendChild(el('li', null, '…and ' + (s.miss.length - 6) + ' more'));
        box.appendChild(ul);
      }
      w.appendChild(box);
    });

    var ms = $('missed'); ms.textContent = '';
    $('missed-h').hidden = !missed.length;
    missed.forEach(function (id) {
      var q = byId[id], d = el('div', 'miss');
      d.appendChild(el('div', 'q', q.q));
      if (S.wrongPick && S.wrongPick[id]) d.appendChild(el('div', 'y', 'You chose: ' + S.wrongPick[id]));
      d.appendChild(el('div', 'a', 'Answer: ' + q.a));
      ms.appendChild(d);
    });
    S.wrongPick = {};
  }
  $('restart').addEventListener('click', function () { drop('state'); S = null; renderStart(); show('v-start'); $('meta').textContent = ''; });

  renderStart();
  $('meta').textContent = QS.length + ' questions';
})();
