# BIOL 40C — Lab Exam Prep

**Live:** https://producer456.github.io/bio40c-lab-exam/

An interactive multiple-choice practice exam for the BIOL 40C lab practical (fall 2026). This is an unofficial student study aid. The questions are original, written from the content of the lab handouts, and no instructor material is reproduced.

- **237 questions** across 14 topics. Every question has 6 choices: 1 correct and 5 distractors.
- The correct answer and a short explanation appear **after every question**.
- At the end you can **retake only the questions you missed**, round after round, until none are left.
- A **weak-areas report** scores each topic by your *first-try* accuracy, from weakest to strongest, and says what to review.
- You can filter by topic, pick a length (25 / 50 / all), resume an unfinished exam, and answer from the keyboard (1–6 or A–F, then Enter).

Labs covered: Endocrine · Lymphatic & Immune (incl. vaccines) · Fluid Homeostasis, Acid/Base & Lactase Persistence · Urinalysis & Abnormal Urine · Mechanical Digestion · Digestive Physiology & Accessory Organs · Anatomy of Urinary Disease.

## Files
- `questions.js`: the question bank. Each row is `[topic, question, answer, [5 distractors], explanation]`. IDs come from a hash of the question text, so saved progress survives reordering.
- `app.js`: the exam engine. State lives in `localStorage` under the `bio40c_labx_` prefix.
- `tests/check.js`: bank validator. Run `gjs tests/check.js` from the repo root.
