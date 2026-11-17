# BIOL 40C — Lab Exam Prep

**Live:** https://producer456.github.io/bio40c-lab-exam/

An interactive multiple-choice practice exam for the BIOL 40C lab practical (fall 2026). This is an unofficial student study aid. The questions are original, written from the content of the lab handouts, and no instructor material is reproduced.

- **292 questions** across 14 topics in 7 labs. Every question has 6 choices: 1 correct and 5 distractors.
- **Pick a lab** to drill that lab's question bank on its own, or choose All labs. You can also fine-tune by topic.
- **Option length never gives the answer away.** Each question's correct answer was assigned a random length slot (shortest … longest). The validator checks the spread and fails the build if the answer is the longest or the shortest option more than 22% of the time, or if any answer is a length outlier.
- The answers follow standard physiology, not the handwritten notes on the source handouts. The bank also covers material whose pages were missing from the photos: the endocrine organ checklist and slides, stress activity D (mental stress), blood vs lymph, lymph node/spleen histology, vaccines, and the station information sheets.
- The correct answer and a short explanation appear **after every question**.
- At the end you can **retake only the questions you missed**, round after round, until none are left.
- A **weak-areas report** scores each lab and each topic by your *first-try* accuracy, from weakest to strongest, and says what to review.
- You can filter by topic, pick a length (25 / 50 / all), resume an unfinished exam, and answer from the keyboard (1–6 or A–F, then Enter).

Labs covered: Endocrine · Lymphatic & Immune (incl. vaccines) · Fluid Homeostasis, Acid/Base & Lactase Persistence · Urinalysis & Abnormal Urine · Mechanical Digestion · Digestive Physiology & Accessory Organs · Anatomy of Urinary Disease.

## Files
- `labs.js`: the topic → lab mapping that drives the lab picker.
- `questions.js`: the question bank, as `{id, topic, q, a, d: [5 distractors], why}`.
- `tools/build.py`: rebuilds `questions.js` from edited JSON chunks.
- `app.js`: the exam engine. State lives in `localStorage` under the `bio40c_labx_` prefix.
- `tests/check.js`: bank validator. Run `gjs tests/check.js` from the repo root.
