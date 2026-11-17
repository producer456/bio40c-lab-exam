/* BIOL 40C lab exam question bank — original questions written from the lab handouts.
   Each question: {id, topic, q, a (correct), d (5 distractors), why}. Validate with: gjs tests/check.js */
window.TOPICS = {
  'Endocrine glands & hormones': 'which gland/cell makes which hormone — pituitary lobes, thyroid follicle, parathyroid, adrenal zones, pancreas islets, gonads.',
  'Stress response & endocrine drugs': 'sympathetic vs hormonal stress response, the HR/BP protocols, levothyroxine and buserelin (GnRH agonist).',
  'Lymphatic anatomy & lymph flow': 'right lymphatic vs thoracic duct territories, lymph pathways (foot, arm, intestine), lymph node flow, what moves lymph.',
  'Immune definitions & lymphatic organs': 'B vs T cells, primary vs secondary organs, antigen/antibody/agglutinogen, spleen/thymus/tonsils/Peyer\'s patches.',
  'Fluid homeostasis & acid–base': 'tonicity and the egg lab, compartment syndrome, the bicarbonate buffer, phenol red colors.',
  'Lactase persistence': 'why glucose rises / hydrogen rises, reading the data tables, who is persistent vs nonpersistent.',
  'Urinalysis': 'normal urine properties, test-strip terms (-urias), specific gravity, casts vs crystals, acid vs alkaline crystals.',
  'Abnormal urine & urine volume': 'the 5-patient strip results, diabetes mellitus vs nephrogenic DI, early vs end-stage kidney failure.',
  'Mechanical digestion stations': 'mouth/salivary glands, tooth layers, esophagus & GERD, stomach regions & ulcer layers, large intestine & colonoscopy path, fun facts.',
  'Chemical digestion (enzyme lab)': 'which enzyme digests which substrate, organ pH, Benedict\'s reagent colors, water-bath temperatures.',
  'Small intestine, liver, gallbladder & pancreas': 'villi/columnar epithelium, lactase after gastroenteritis, liver lobule & portal triad, bile path, codeine path, pancreatitis jaundice.',
  'Kidney anatomy & blood flow': 'the 9 key kidney parts, the arterial sequence aorta → afferent arteriole, matching veins, blockage pressure effects.',
  'Kidney diseases': 'the 8 presentation diseases — which kidney region each hits, cause, key symptom, treatment.',
  'Bladder & urethra': 'detrusor and sphincters, male vs female urethra, UTIs in females, BPH in older males.'
};

window.QUESTIONS = [
 {
  "id": "qdsmq1o",
  "topic": "Endocrine glands & hormones",
  "q": "What is the main difference between an endocrine and an exocrine gland?",
  "a": "Endocrine glands secrete hormones into blood; exocrine glands use ducts",
  "d": [
   "Endocrine glands secrete through ducts; exocrine glands secrete hormones into blood",
   "Endocrine glands are found only in the brain; exocrine glands only in the abdomen",
   "Endocrine glands secrete digestive enzymes; exocrine glands secrete only hormones",
   "Endocrine glands act only on nearby cells; exocrine glands act throughout the body",
   "Endocrine glands are simply larger; otherwise the two have identical structure"
  ],
  "why": "Endocrine = ductless, hormone into bloodstream. Exocrine = duct onto a surface or into a lumen (e.g., sweat, digestive enzymes)."
 },
 {
  "id": "q100fao2",
  "topic": "Endocrine glands & hormones",
  "q": "Which cells form the EXOCRINE part of the pancreas?",
  "a": "Acinar cells, which secrete digestive enzymes",
  "d": [
   "Alpha cells, which make glucagon",
   "Beta cells, which make insulin",
   "Chief cells, which make parathyroid hormone",
   "Chromaffin cells, which make epinephrine",
   "Follicular cells, which make thyroxine"
  ],
  "why": "Acinar cells = exocrine (enzymes → pancreatic duct → duodenum). Islets (alpha/beta) = endocrine."
 },
 {
  "id": "q1c9is9t",
  "topic": "Endocrine glands & hormones",
  "q": "In the pancreatic islets, which cell type secretes insulin?",
  "a": "Beta cells",
  "d": [
   "D cells",
   "PP cells",
   "Alpha cells",
   "Chief cells",
   "Acinar cells"
  ],
  "why": "Beta → insulin (lowers blood glucose); alpha → glucagon (raises it)."
 },
 {
  "id": "q1hptr2p",
  "topic": "Endocrine glands & hormones",
  "q": "In the pancreatic islets, which cell type secretes glucagon?",
  "a": "Alpha cells",
  "d": [
   "PP cells",
   "Beta cells",
   "Delta cells",
   "Acinar cells",
   "Chromaffin cells"
  ],
  "why": "Alpha → glucagon; beta → insulin."
 },
 {
  "id": "q1wxesre",
  "topic": "Endocrine glands & hormones",
  "q": "How do hypothalamic releasing and inhibiting hormones reach the anterior pituitary?",
  "a": "Through the hypophyseal portal blood vessels",
  "d": [
   "Along axons that run down the infundibulum into the anterior pituitary",
   "Through the cerebrospinal fluid of the third ventricle",
   "Through lymphatic vessels from the hypothalamus",
   "By diffusing across the sella turcica bone",
   "Through the general systemic circulation after passing through the heart"
  ],
  "why": "Hypothalamus → portal capillaries → anterior pituitary. (The POSTERIOR pituitary is the one reached by axons.)"
 },
 {
  "id": "qrfeep4",
  "topic": "Endocrine glands & hormones",
  "q": "Which hypothalamic hormone stimulates the anterior pituitary to release TSH?",
  "a": "TRH (thyrotropin-releasing hormone)",
  "d": [
   "CRH (corticotropin-releasing hormone)",
   "GnRH (gonadotropin-releasing hormone)",
   "GHRH (GH-releasing hormone)",
   "PIH (prolactin-inhibiting hormone)",
   "GHIH (GH-inhibiting hormone)"
  ],
  "why": "TRH → TSH → thyroid releases T3/T4."
 },
 {
  "id": "qm39k2x",
  "topic": "Endocrine glands & hormones",
  "q": "Which hypothalamic hormone INHIBITS prolactin release from the anterior pituitary?",
  "a": "Dopamine (a catecholamine neurohormone)",
  "d": [
   "TRH (thyrotropin-releasing hormone)",
   "Oxytocin from the posterior lobe",
   "GnRH (gonadotropin-releasing hormone)",
   "CRH (corticotropin-releasing hormone)",
   "ADH (antidiuretic hormone)"
  ],
  "why": "Dopamine from the hypothalamus is the main brake on prolactin."
 },
 {
  "id": "q129vv1l",
  "topic": "Endocrine glands & hormones",
  "q": "Which two hormones are released by the POSTERIOR pituitary?",
  "a": "ADH and oxytocin",
  "d": [
   "GH and prolactin",
   "TSH and ACTH",
   "FSH and LH",
   "Melatonin and serotonin",
   "Calcitonin and PTH"
  ],
  "why": "The posterior pituitary stores and releases ADH and oxytocin; it does not make them."
 },
 {
  "id": "qkofc8g",
  "topic": "Endocrine glands & hormones",
  "q": "The cells that make posterior pituitary hormones are called neurosecretory cells. Where are their cell bodies?",
  "a": "Hypothalamus (supraoptic & paraventricular nuclei)",
  "d": [
   "Anterior pituitary (pars distalis and pars tuberalis)",
   "Posterior pituitary (pars nervosa and infundibulum)",
   "Thalamus (lateral and medial geniculate nuclei)",
   "Adrenal medulla (chromaffin cells above the kidney)",
   "Pineal gland (pinealocytes of the epithalamus)"
  ],
  "why": "Cell bodies in the hypothalamus; axons run down the infundibulum to the posterior pituitary, where the hormones are released."
 },
 {
  "id": "q5srgm1",
  "topic": "Endocrine glands & hormones",
  "q": "Which set lists hormones secreted by the ANTERIOR pituitary?",
  "a": "GH, TSH, ACTH, FSH, LH, prolactin",
  "d": [
   "ADH, oxytocin, GH, TSH",
   "T3, T4, calcitonin, PTH",
   "Aldosterone, cortisol, androgens",
   "Insulin, glucagon, somatostatin",
   "Melatonin, ADH, oxytocin, PRL"
  ],
  "why": "The 6 anterior pituitary hormones: GH, TSH, ACTH, FSH, LH, PRL."
 },
 {
  "id": "q124nlz",
  "topic": "Endocrine glands & hormones",
  "q": "What is the histological structural unit of the thyroid gland?",
  "a": "The thyroid follicle",
  "d": [
   "The serous acinus",
   "The pancreatic islet",
   "The hepatic lobule",
   "The zona glomerulosa",
   "The renal corpuscle"
  ],
  "why": "Follicles = spheres of follicular cells around colloid."
 },
 {
  "id": "qblnbqw",
  "topic": "Endocrine glands & hormones",
  "q": "Which thyroid cells secrete T3 and T4?",
  "a": "Follicular cells",
  "d": [
   "Parafollicular (C) cells",
   "Parathyroid chief cells",
   "Oxyphil cells",
   "Adrenal chromaffin cells",
   "Acinar cells"
  ],
  "why": "Follicular cells line the follicle and make T3/T4 from colloid."
 },
 {
  "id": "q1vhon1e",
  "topic": "Endocrine glands & hormones",
  "q": "Which thyroid cells secrete calcitonin?",
  "a": "Parafollicular cells (C cells)",
  "d": [
   "Thyroid follicular cells",
   "Chief cells of the parathyroid",
   "Pancreatic beta cells",
   "Adrenal chromaffin cells",
   "Parathyroid oxyphil cells"
  ],
  "why": "Parafollicular = \"beside the follicle\"; calcitonin lowers blood calcium."
 },
 {
  "id": "q1owqidc",
  "topic": "Endocrine glands & hormones",
  "q": "Which cells of the parathyroid gland secrete parathyroid hormone (PTH)?",
  "a": "Parathyroid chief cells",
  "d": [
   "Thyroid C cells",
   "Pituitary thyrotrophs",
   "Thyroid follicular cells",
   "Adrenal chromaffin cells",
   "Pancreatic acinar cells"
  ],
  "why": "Parathyroid chief cells → PTH (raises blood calcium)."
 },
 {
  "id": "q3otwlc",
  "topic": "Endocrine glands & hormones",
  "q": "Directly below the adrenal capsule, the outermost cortical layer is the ____ , which secretes ____.",
  "a": "Zona glomerulosa — aldosterone",
  "d": [
   "Zona fasciculata — cortisol",
   "Zona reticularis — androgens",
   "Adrenal medulla — epinephrine",
   "Zona glomerulosa — cortisol",
   "Zona reticularis — aldosterone"
  ],
  "why": "Outer→inner: glomerulosa (salt: aldosterone), fasciculata (sugar: cortisol), reticularis (sex: androgens). \"Salt, sugar, sex.\""
 },
 {
  "id": "q77x43d",
  "topic": "Endocrine glands & hormones",
  "q": "What is the MIDDLE layer of the adrenal cortex and its main hormone?",
  "a": "Zona fasciculata — cortisol",
  "d": [
   "Zona glomerulosa — aldosterone",
   "Zona reticularis — androgens",
   "Zona fasciculata — aldosterone",
   "Adrenal medulla — norepinephrine",
   "Zona reticularis — cortisol"
  ],
  "why": "The fasciculata is the thickest layer, with cells in parallel cords; it makes cortisol."
 },
 {
  "id": "qj60627",
  "topic": "Endocrine glands & hormones",
  "q": "What is the INNERMOST layer of the adrenal cortex and its main hormone?",
  "a": "Zona reticularis — androgens",
  "d": [
   "Zona glomerulosa — cortisol",
   "Zona fasciculata — cortisol",
   "Medulla — epinephrine",
   "Zona fasciculata — androgens",
   "Capsule — mineralocorticoids"
  ],
  "why": "Reticularis sits next to the medulla and makes weak androgens (e.g., DHEA)."
 },
 {
  "id": "qi3qp1s",
  "topic": "Endocrine glands & hormones",
  "q": "Which cells make up the adrenal medulla, and what do they secrete?",
  "a": "Chromaffin cells — catecholamines",
  "d": [
   "Chief cells — cortisol and corticosterone",
   "Follicular cells — aldosterone and cortisol",
   "Parafollicular cells — epinephrine",
   "Chromaffin cells — cortisol and aldosterone",
   "Acinar cells — norepinephrine and renin"
  ],
  "why": "The medulla is a modified sympathetic ganglion: chromaffin cells release catecholamines."
 },
 {
  "id": "q1xlhdpu",
  "topic": "Endocrine glands & hormones",
  "q": "From the capsule inward, what is the correct order of adrenal gland layers?",
  "a": "Capsule → zona glomerulosa → zona fasciculata → zona reticularis → medulla",
  "d": [
   "Capsule → zona fasciculata → zona glomerulosa → zona reticularis → medulla",
   "Capsule → medulla → zona reticularis → zona fasciculata → zona glomerulosa",
   "Capsule → zona reticularis → zona fasciculata → zona glomerulosa → medulla",
   "Capsule → zona glomerulosa → zona reticularis → zona fasciculata → medulla",
   "Medulla → capsule → zona glomerulosa → zona fasciculata → zona reticularis"
  ],
  "why": "G-F-R from the outside in, with the medulla in the center (\"GFR — salt, sugar, sex\")."
 },
 {
  "id": "q1t3wm0s",
  "topic": "Endocrine glands & hormones",
  "q": "Which hormones do the ovaries secrete?",
  "a": "Estrogen, progesterone, inhibin",
  "d": [
   "Testosterone, FSH, luteinizing hormone",
   "Oxytocin, prolactin, growth hormone",
   "Estrogen, LH, and thyroid hormone",
   "Cortisol, progesterone, aldosterone",
   "FSH, LH, gonadotropin-releasing hormone"
  ],
  "why": "The ovaries make estrogen and progesterone (which maintain the uterine lining) and inhibin."
 },
 {
  "id": "qt5w863",
  "topic": "Endocrine glands & hormones",
  "q": "Inhibin, made by both the ovaries and the testes, acts by:",
  "a": "Suppressing FSH release from the anterior pituitary",
  "d": [
   "Stimulating LH release from the anterior pituitary",
   "Blocking testosterone receptors in the testes",
   "Stimulating GnRH release from the hypothalamus",
   "Inhibiting ADH release from the posterior pituitary",
   "Suppressing insulin release from the pancreas"
  ],
  "why": "Inhibin = negative feedback specifically on FSH."
 },
 {
  "id": "q1avr0vg",
  "topic": "Endocrine glands & hormones",
  "q": "Which endocrine gland on the lab models sits deep in the brain, near the roof of the third ventricle?",
  "a": "The pineal gland",
  "d": [
   "The pituitary",
   "The thymus",
   "The hypothalamus",
   "The thyroid gland",
   "The parathyroid gland"
  ],
  "why": "The pineal gland (it secretes melatonin) is posterior and dorsal. The pituitary hangs below the hypothalamus."
 },
 {
  "id": "q1pxb6z9",
  "topic": "Endocrine glands & hormones",
  "q": "On an adrenal slide, a band of cells arranged in long, straight, parallel cords would be the:",
  "a": "Zona fasciculata",
  "d": [
   "Zona glomerulosa",
   "Zona reticularis",
   "The adrenal medulla",
   "The fibrous capsule",
   "A thyroid follicle"
  ],
  "why": "Fasciculata = \"bundles\": straight cords. Glomerulosa = rounded clusters. Reticularis = a branching network."
 },
 {
  "id": "qu7vlcr",
  "topic": "Stress response & endocrine drugs",
  "q": "In the stress lab, which branch of the nervous system produces the fast rise in heart rate and blood pressure?",
  "a": "The sympathetic division",
  "d": [
   "The parasympathetic division",
   "The somatic division",
   "The enteric division",
   "The afferent division",
   "The vagus nerve firing faster"
  ],
  "why": "Sympathetic activation → norepinephrine on the SA node (↑HR, ↑contractility) and vasoconstriction (↑BP). Vagal (parasympathetic) tone falls at the same time."
 },
 {
  "id": "q7slizc",
  "topic": "Stress response & endocrine drugs",
  "q": "Which hormones from the adrenal medulla reinforce the stress response by raising HR and BP?",
  "a": "Epinephrine and norepinephrine",
  "d": [
   "Aldosterone and cortisol",
   "Insulin and glucagon",
   "ADH and oxytocin",
   "Calcitonin and PTH",
   "Melatonin and serotonin"
  ],
  "why": "Chromaffin cells release catecholamines into the blood when sympathetic preganglionic fibers stimulate them."
 },
 {
  "id": "q1w22s95",
  "topic": "Stress response & endocrine drugs",
  "q": "Why do HR and BP take several minutes to return to baseline after a stressor is removed?",
  "a": "Stress hormones like epinephrine stay in blood until cleared",
  "d": [
   "The heart muscle is permanently damaged by each stressor",
   "The parasympathetic system shuts off for the rest of the day",
   "Neural signals take minutes to travel from the brain to the heart",
   "The blood pressure cuff keeps the arteries compressed",
   "Baroreceptors stop working entirely during a stress response"
  ],
  "why": "Neural effects end in seconds. Circulating hormones last until they are cleared (their half-life), so recovery lags."
 },
 {
  "id": "q1v0f3c6",
  "topic": "Stress response & endocrine drugs",
  "q": "In the Temperature Stress protocol, what is the stressor?",
  "a": "Holding a hand in ice water for 3 minutes",
  "d": [
   "Stepping on a step box in time with a metronome",
   "Standing up quickly from a lying position",
   "Solving timed math problems aloud",
   "Holding your breath for 1 minute",
   "Running in place for three straight minutes"
  ],
  "why": "This is the cold pressor test: ice water → pain and cold → sympathetic surge → ↑BP."
 },
 {
  "id": "qafwk8k",
  "topic": "Stress response & endocrine drugs",
  "q": "In the Orthostatic protocol, when should the test be stopped?",
  "a": "If the subject starts sweating or feels light-headed",
  "d": [
   "As soon as the heart rate rises above its resting value",
   "After exactly 30 seconds of standing",
   "When the blood pressure cuff is deflated",
   "When the subject reaches 24 steps per minute",
   "When the subject's skin turns red"
  ],
  "why": "Standing pools blood in the legs, so BP can drop (orthostatic hypotension). Light-headedness means poor brain perfusion."
 },
 {
  "id": "q1hcwf9c",
  "topic": "Stress response & endocrine drugs",
  "q": "In the Exercise Stress protocol, what is the metronome set to?",
  "a": "98 beats/min (about 24 steps/min)",
  "d": [
   "60 beats/min (about 15 steps per minute)",
   "120 beats/min (about 60 steps per minute)",
   "72 beats/min (one step per heartbeat)",
   "98 steps per minute (one step per click)",
   "150 beats/min (about 40 steps per minute)"
  ],
  "why": "Metronome 98 bpm; up-up-down-down gives about 24 full steps per minute."
 },
 {
  "id": "q1l8zs3u",
  "topic": "Stress response & endocrine drugs",
  "q": "Levothyroxine (Levoxyl) is used to treat which condition?",
  "a": "Hypothyroidism (e.g., Hashimoto's)",
  "d": [
   "Hyperthyroidism (Graves' disease)",
   "Type 1 diabetes mellitus",
   "Addison's (adrenal insufficiency)",
   "Advanced prostate cancer",
   "Diabetes insipidus (low ADH)"
  ],
  "why": "Levothyroxine is synthetic T4, a hormone replacement for an underactive thyroid."
 },
 {
  "id": "qt540bo",
  "topic": "Stress response & endocrine drugs",
  "q": "Levothyroxine is a copy of a natural hormone. Which cells normally make that hormone?",
  "a": "Thyroid follicular cells",
  "d": [
   "Thyroid parafollicular cells",
   "Parathyroid chief cells",
   "Pituitary thyrotrophs",
   "Hypothalamic neurons",
   "Adrenal chromaffin cells"
  ],
  "why": "T4 (thyroxine) comes from the follicular cells."
 },
 {
  "id": "q1x5o6rp",
  "topic": "Stress response & endocrine drugs",
  "q": "Why does a person with Hashimoto's disease need hormone replacement?",
  "a": "Autoimmune damage to the thyroid cuts T4",
  "d": [
   "A pituitary tumor makes too much TSH",
   "The thyroid makes too much calcitonin",
   "An iodine overdose blocks thyroid receptors",
   "The adrenal cortex stops making cortisol",
   "The parathyroids were removed during surgery"
  ],
  "why": "Hashimoto's = autoimmune thyroiditis, the most common cause of hypothyroidism."
 },
 {
  "id": "q4xgjze",
  "topic": "Stress response & endocrine drugs",
  "q": "Buserelin is a GnRH agonist. Which cells does it act on most directly?",
  "a": "Gonadotroph cells of the anterior pituitary",
  "d": [
   "Follicular cells of the thyroid",
   "Leydig cells of the testes",
   "Chromaffin cells of the adrenal medulla",
   "Neurosecretory cells of the hypothalamus",
   "Beta cells of the pancreas"
  ],
  "why": "GnRH receptors sit on the gonadotrophs, which release LH and FSH."
 },
 {
  "id": "qgn6jao",
  "topic": "Stress response & endocrine drugs",
  "q": "Continuous buserelin treats prostate cancer because, after an initial surge, it:",
  "a": "Pituitary desensitizes; LH, FSH, and testosterone fall",
  "d": [
   "Keeps raising LH and FSH, which directly kills cancer cells",
   "Directly destroys prostate cells by binding to their DNA",
   "Blocks testosterone receptors directly on the prostate cells",
   "Raises estrogen output by the testes, which shrinks the tumor",
   "Stimulates the adrenal cortex to make much more cortisol"
  ],
  "why": "A brief \"flare\" first, then desensitization → a medical castration effect. Testosterone feeds prostate cancer, so lowering it helps."
 },
 {
  "id": "q1i357g9",
  "topic": "Stress response & endocrine drugs",
  "q": "Why are hormones good drug targets, according to the lab?",
  "a": "They reach most cells, last hours, and use specific receptors",
  "d": [
   "They act only in the brain, so they rarely cause side effects",
   "They are all proteins, so they are cheap and easy to manufacture",
   "They never cross cell membranes, so they cannot cause toxicity",
   "They have no receptors, so any dose produces the same effect",
   "They are produced only in childhood, so adults lack them"
  ],
  "why": "Wide circulation, long duration, and receptor-defined targets."
 },
 {
  "id": "qgmt4lz",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Which is NOT one of the three primary functions of the lymphatic system listed in the lab?",
  "a": "Pumping blood through the systemic arteries",
  "d": [
   "Returning excess interstitial fluid to the bloodstream",
   "Absorbing dietary fats from the small intestine",
   "Activating the immune system against pathogens",
   "Carrying absorbed dietary lipids (chyle) to the blood",
   "Returning tissue fluid to maintain blood volume"
  ],
  "why": "The three functions: return interstitial fluid, absorb dietary fat, activate immunity. The heart pumps blood; lymphatics do not."
 },
 {
  "id": "q1uuyrsi",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Which region of the body does the RIGHT lymphatic duct drain?",
  "a": "Right head, neck, arm, and thorax",
  "d": [
   "The entire right half of the body, head to foot",
   "Both lower limbs and the whole abdomen",
   "The left arm and left side of the head",
   "Only the right lung and the heart",
   "Only the small and large intestines"
  ],
  "why": "The right lymphatic duct drains the right upper quadrant. Everything else goes to the thoracic duct."
 },
 {
  "id": "q929ffj",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Where does the right lymphatic duct empty?",
  "a": "Into the right venous angle (right subclavian/internal jugular junction)",
  "d": [
   "Into the left subclavian vein at the left venous angle",
   "Into the cisterna chyli in front of the lumbar vertebrae",
   "Into the superior vena cava directly above the heart",
   "Into the right atrium through its own opening",
   "Into the right axillary lymph nodes for filtering"
  ],
  "why": "The right venous angle. The thoracic duct uses the left one."
 },
 {
  "id": "qmky349",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Where does the thoracic duct empty?",
  "a": "Into the left venous angle (left subclavian vein)",
  "d": [
   "Into the right venous angle (right subclavian)",
   "Into the inferior vena cava below the diaphragm",
   "Into the hepatic portal vein near the liver",
   "Into the cisterna chyli in the abdomen",
   "Into the left atrium of the heart"
  ],
  "why": "The thoracic duct drains about 3/4 of the body and empties at the left venous angle."
 },
 {
  "id": "qixoaw6",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Lymph from the LEFT arm returns to the blood through the:",
  "a": "Thoracic duct, emptying into the left subclavian vein",
  "d": [
   "Right lymphatic duct into the right subclavian vein",
   "Inferior vena cava via the cisterna chyli",
   "Left axillary artery and then the aorta",
   "Cisterna chyli into the hepatic portal vein",
   "Left axillary vein directly, skipping all ducts"
  ],
  "why": "Only the right upper quadrant uses the right lymphatic duct."
 },
 {
  "id": "q10pfvbm",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "What is the correct lymph pathway from the RIGHT FOOT?",
  "a": "Capillaries → inguinal nodes → right lumbar trunk → cisterna chyli → thoracic duct → left subclavian vein",
  "d": [
   "Capillaries → inguinal nodes → right lumbar trunk → right lymphatic duct → right subclavian vein",
   "Capillaries → femoral vein → inferior vena cava → right atrium → pulmonary trunk",
   "Capillaries → inguinal nodes → intestinal trunk → right lymphatic duct → right subclavian vein",
   "Capillaries → popliteal nodes → cisterna chyli → right lumbar trunk → thoracic duct → right subclavian vein",
   "Capillaries → inguinal nodes → right lumbar trunk → cisterna chyli → right lymphatic duct → right subclavian vein"
  ],
  "why": "The right leg is NOT in the right lymphatic duct's territory, so it goes via the cisterna chyli and thoracic duct to the LEFT side."
 },
 {
  "id": "qosffby",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "What is the correct lymph pathway from the RIGHT ARM?",
  "a": "Capillaries → axillary nodes → right subclavian trunk → right lymphatic duct → right subclavian vein",
  "d": [
   "Capillaries → axillary nodes → right subclavian trunk → thoracic duct → left subclavian vein",
   "Capillaries → axillary nodes → collecting vessels → cisterna chyli → thoracic duct → left subclavian vein",
   "Capillaries → deep cervical nodes → right jugular trunk → thoracic duct → left internal jugular vein",
   "Capillaries → inguinal nodes → right lumbar trunk → right lymphatic duct → right internal jugular vein",
   "Capillaries → axillary nodes → right subclavian trunk → cisterna chyli → thoracic duct → left subclavian vein"
  ],
  "why": "The right arm is in the right lymphatic duct's territory, so lymph drains via the axillary nodes and right subclavian trunk."
 },
 {
  "id": "q1ecc4nj",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Fat-rich lymph (chyle) from the intestines travels:",
  "a": "Lacteals → intestinal trunk → cisterna chyli → thoracic duct → left subclavian vein",
  "d": [
   "Lacteals → hepatic portal vein → liver → hepatic veins → inferior vena cava",
   "Lacteals → intestinal trunk → right lymphatic duct → right subclavian vein",
   "Villus blood capillaries → mesenteric veins → hepatic portal vein → liver",
   "Lacteals → inguinal nodes → right lumbar trunk → right subclavian vein",
   "Lacteals → spleen → splenic vein → hepatic portal vein → liver"
  ],
  "why": "Dietary fat (chylomicrons) enters the lacteals, not blood capillaries, and so bypasses the liver at first."
 },
 {
  "id": "q1gkk0ta",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "The cisterna chyli is:",
  "a": "The sac at the start of the thoracic duct",
  "d": [
   "A cluster of lymph nodes in the neck",
   "The opening of the right lymphatic duct",
   "A lacteal inside an intestinal villus",
   "The hilum where blood vessels enter the spleen",
   "A valve inside the left subclavian vein"
  ],
  "why": "It sits in front of L1–L2 and receives lymph from the lower body and the gut."
 },
 {
  "id": "qclwobs",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Which vessels carry lymph INTO a lymph node?",
  "a": "Afferent vessels, on the convex side",
  "d": [
   "Efferent vessels, at the hilum",
   "Afferent vessels, entering only at the hilum",
   "Efferent vessels, on the convex surface",
   "Arterioles entering the node at the hilum",
   "Lacteals piercing the fibrous capsule"
  ],
  "why": "Afferent = \"arrive.\" Many afferents enter around the node; fewer efferents leave at the hilum, which slows the flow for filtering."
 },
 {
  "id": "qqrr89p",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Where do efferent lymphatic vessels leave a lymph node?",
  "a": "At the hilum (the indented side)",
  "d": [
   "All around the convex surface",
   "Through the inner trabeculae",
   "From the germinal centers",
   "Through the capsule at the opposite pole",
   "They don't; lymph is absorbed in the node"
  ],
  "why": "Efferent = \"exit,\" at the hilum, along with the node's blood vessels."
 },
 {
  "id": "qf22g17",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Which feature of a lymphatic capillary lets interstitial fluid enter but not leak back out?",
  "a": "Overlapping endothelial cells that act as one-way flaps",
  "d": [
   "A thick smooth-muscle wall that actively pumps fluid in",
   "Tight junctions that completely seal the capillary wall",
   "Fenestrations that open only under high arterial pressure",
   "A collagen basement membrane that filters out the water",
   "Red blood cells that plug the openings between the cells"
  ],
  "why": "Lymphatic capillaries are blind-ended, with mini-valves formed by overlapping endothelium; anchoring filaments tether them open."
 },
 {
  "id": "q17tic1l",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Which is NOT a mechanism that moves lymph?",
  "a": "The pumping action of the heart",
  "d": [
   "Skeletal muscles squeezing the vessels",
   "Pressure changes during breathing",
   "Valves in lymphatic vessels",
   "Smooth muscle in the vessel walls",
   "Pulsation of nearby arteries"
  ],
  "why": "Lymph has no central pump. It relies on the skeletal muscle pump, the respiratory pump, valves, and intrinsic smooth muscle."
 },
 {
  "id": "q734ksl",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "On a capillary-bed diagram, which vessel brings blood INTO the capillary bed?",
  "a": "The arteriole",
  "d": [
   "The small venule",
   "The lymph capillary",
   "The lymph vessel",
   "The thoracic duct",
   "The interstitium"
  ],
  "why": "Arteriole → blood capillaries → venule. Lymphatic capillaries pick up the leftover interstitial fluid."
 },
 {
  "id": "qy46hbu",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "How do plasma, interstitial fluid, and lymph differ?",
  "a": "One fluid in three places: vessels, around cells, lymphatics",
  "d": [
   "They are three unrelated fluids, each made by its own organ",
   "Lymph is plasma with red blood cells still suspended in it",
   "Interstitial fluid is inside cells; plasma surrounds the cells",
   "Lymph is made from scratch inside the lymph nodes",
   "Plasma is found only inside lymphatic vessels, never in blood"
  ],
  "why": "It is the same fluid in different locations: plasma → (filtered) → interstitial fluid → (picked up) → lymph → back to plasma."
 },
 {
  "id": "qndj5o",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "How do lymphatic vessels and veins compare?",
  "a": "Both have valves and flow toward the heart; lymph vessels are thinner",
  "d": [
   "Both carry blood, but lymphatics carry it away from the heart under high pressure",
   "Lymphatics have thicker walls and higher pressure than veins, and no valves",
   "Veins pass through lymph nodes for filtering; lymphatic vessels never do",
   "Neither has valves; both rely only on the heart's pumping to move fluid",
   "Lymphatics form a closed loop with the heart, while veins are open-ended"
  ],
  "why": "They are similar in design (valves, low pressure), but lymphatics are thinner, begin blind-ended, and drain through nodes."
 },
 {
  "id": "q1pjw37m",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Compared with blood circulation, lymph circulation is:",
  "a": "One-way, open-ended, and low-pressure, with no pump",
  "d": [
   "Closed, two-way, and high-pressure, pumped by the heart",
   "A closed loop driven by rhythmic contractions of the spleen",
   "Faster than arterial blood flow and higher in pressure",
   "Pumped along by the lymph nodes acting as small hearts",
   "Mostly red blood cells moving around a closed circuit"
  ],
  "why": "Blood is a closed loop pumped by the heart. Lymph is a one-way open drainage system."
 },
 {
  "id": "ql1jnig",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Which cells would you expect to find inside a lymph node?",
  "a": "Lymphocytes and macrophages",
  "d": [
   "Red blood cells and platelets only",
   "Hepatocytes and Kupffer cells",
   "Chief cells and parietal cells",
   "Osteoclasts and osteoblasts",
   "Neurons and supporting glial cells"
  ],
  "why": "Nodes are filters: macrophages eat debris while lymphocytes are activated (B cells in the follicles, T cells in the paracortex)."
 },
 {
  "id": "q1ke000o",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Swelling caused by fluid building up in the tissues is called:",
  "a": "Edema",
  "d": [
   "Chyle",
   "Lymph",
   "Polyp",
   "Shock",
   "Gout"
  ],
  "why": "If lymphatic drainage fails (or filtration is too high), interstitial fluid accumulates → edema."
 },
 {
  "id": "q1rhkngm",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Which lymphocytes produce antibodies (via plasma cells)?",
  "a": "B lymphocytes",
  "d": [
   "T lymphocytes",
   "Macrophages",
   "Neutrophils",
   "NK lymphocytes",
   "Dendritic cells"
  ],
  "why": "Activated B cells become plasma cells, which secrete antibodies."
 },
 {
  "id": "qbac5u3",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Which lymphocytes destroy the body's own cells that are virus-infected or cancerous?",
  "a": "T lymphocytes",
  "d": [
   "B lymphocytes",
   "Plasma cells",
   "Erythrocytes",
   "Mast cells",
   "Memory B cells"
  ],
  "why": "Cytotoxic T cells kill infected or cancerous host cells; B cells handle antibodies."
 },
 {
  "id": "q1xvwg9d",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Primary lymphatic organs are where:",
  "a": "Lymphocytes are made and become immunocompetent (marrow, thymus)",
  "d": [
   "Lymph is filtered and immune responses launched (nodes, spleen)",
   "Dietary fats are absorbed into the lacteals of the villi",
   "Old red blood cells are broken down and recycled",
   "Antibodies are stored for the rest of a person's life",
   "Lymph is emptied back into the subclavian veins"
  ],
  "why": "Primary = where cells are made and trained (marrow and thymus). Secondary = where they fight (nodes, spleen, nodules)."
 },
 {
  "id": "qrj9je",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Which of these is a SECONDARY lymphatic organ?",
  "a": "The spleen",
  "d": [
   "The thymus",
   "Red bone marrow",
   "The kidney",
   "The pancreas",
   "The thyroid"
  ],
  "why": "Secondary lymphatic organs: lymph nodes, spleen, and lymphatic nodules (tonsils, Peyer's patches)."
 },
 {
  "id": "q1g4w0oa",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Which organ supports T cell development during childhood?",
  "a": "The thymus gland",
  "d": [
   "The spleen",
   "The tonsils",
   "The appendix",
   "Peyer's patches",
   "The pineal gland"
  ],
  "why": "T cells mature in the Thymus. The thymus is large in childhood and shrinks after puberty."
 },
 {
  "id": "q1n8d3a2",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Which organ filters blood and destroys old red blood cells?",
  "a": "The spleen",
  "d": [
   "The thymus",
   "A lymph node",
   "A tonsil",
   "The kidney",
   "The pancreas"
  ],
  "why": "The spleen filters BLOOD. Lymph nodes filter LYMPH."
 },
 {
  "id": "qq03039",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Which structures trap and remove bacteria entering the throat?",
  "a": "Tonsils",
  "d": [
   "Peyer's patches",
   "Thymus gland",
   "Appendix",
   "Lacteals",
   "Cisterna chyli"
  ],
  "why": "The tonsils (palatine, lingual, pharyngeal) form a ring of lymphoid tissue at the entrance to the throat."
 },
 {
  "id": "q175cozq",
  "topic": "Immune definitions & lymphatic organs",
  "q": "What is lymphoid tissue located in the wall of the small intestine called?",
  "a": "Peyer's patches",
  "d": [
   "Lingual tonsils",
   "Gastric rugae",
   "Lacteal vessels",
   "Thymic lobules",
   "Brunner glands"
  ],
  "why": "Peyer's patches are aggregated lymphoid nodules, mostly in the ileum."
 },
 {
  "id": "q1vu2vid",
  "topic": "Immune definitions & lymphatic organs",
  "q": "An antigen is best defined as a substance that:",
  "a": "Provokes an immune response and reacts with its products",
  "d": [
   "Is a protein made by plasma cells to neutralize invaders",
   "Is a white blood cell that engulfs and digests bacteria",
   "Is found only on the surface of red blood cells",
   "Clumps red blood cells together without any antibody",
   "Carries cancer cells from one site to another"
  ],
  "why": "Antigen = the target. Antibody = the protein made against it."
 },
 {
  "id": "qmfbazs",
  "topic": "Immune definitions & lymphatic organs",
  "q": "An antibody is:",
  "a": "A plasma cell protein that binds a specific antigen",
  "d": [
   "A substance that triggers an immune response in the body",
   "A white blood cell that engulfs and digests bacteria",
   "An antigen found on the surface of red blood cells",
   "A cancer cell that has spread to a lymph node",
   "A hormone secreted by the thymus during childhood"
  ],
  "why": "Antibodies = immunoglobulins that circulate in the serum, so they are often named \"anti-X serum.\""
 },
 {
  "id": "qnelndd",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Antigens on the surface of red blood cells that cause agglutination are called:",
  "a": "Agglutinogens",
  "d": [
   "Agglutinins",
   "Immunoglobulins",
   "Phagocytes",
   "Lymphocytes",
   "Haptens"
  ],
  "why": "Agglutinogen = an RBC surface antigen (e.g., A, B, Rh). The antibody against it causes clumping."
 },
 {
  "id": "q1gc5j7l",
  "topic": "Immune definitions & lymphatic organs",
  "q": "A cell that engulfs and absorbs bacteria and other small particles is a:",
  "a": "Phagocyte",
  "d": [
   "Plasma cell",
   "Agglutinogen",
   "Erythrocyte",
   "Platelet",
   "Chief cell"
  ],
  "why": "Phago = eat. Examples are macrophages and neutrophils."
 },
 {
  "id": "qjq4sed",
  "topic": "Immune definitions & lymphatic organs",
  "q": "The spread of cancer cells from the primary site to another part of the body is called:",
  "a": "Metastasis",
  "d": [
   "Agglutination",
   "Necrosis",
   "Mitosis",
   "Apoptosis",
   "Hematuria"
  ],
  "why": "Cancer often metastasizes through lymphatic vessels, which is why lymph nodes are checked."
 },
 {
  "id": "q5dmxag",
  "topic": "Immune definitions & lymphatic organs",
  "q": "\"Anti-Rh serum\" refers to:",
  "a": "An antibody that binds the Rh factor",
  "d": [
   "The Rh antigen itself on red cells",
   "A phagocyte that eats Rh-positive cells",
   "A vaccine that protects against the Rh virus",
   "Plasma with all antibodies removed",
   "A lymphocyte trained in the thymus"
  ],
  "why": "Antibodies circulate in serum, so they are named \"anti-(antigen) serum.\""
 },
 {
  "id": "q1j05po1",
  "topic": "Immune definitions & lymphatic organs",
  "q": "In the measles presentation notes, which groups are most severely affected by measles?",
  "a": "The unvaccinated, young children, pregnant women, the immunocompromised",
  "d": [
   "Fully vaccinated adults aged 20 to 40 who travel often",
   "Only adults over 80 who live in nursing homes or long-term care centers",
   "Only people with type A blood, plus their immediate household family members",
   "Healthy teenagers who have already had chickenpox",
   "Only health-care workers in hospitals, clinics, and urgent-care centers"
  ],
  "why": "These are the CDC high-risk groups. The MMR vaccine protects against measles."
 },
 {
  "id": "q2tw8uh",
  "topic": "Immune definitions & lymphatic organs",
  "q": "How does a vaccine prepare the immune system?",
  "a": "It presents a safe antigen so that memory cells form",
  "d": [
   "It supplies ready-made red blood cells to the body",
   "It permanently raises the body's resting temperature",
   "It destroys the thymus to prevent autoimmune disease",
   "It removes all foreign antigens from the bloodstream",
   "It replaces the lymph with fresh blood plasma"
  ],
  "why": "This is active immunity: a primary response now gives a faster, stronger secondary response on real exposure."
 },
 {
  "id": "q14ut81h",
  "topic": "Fluid homeostasis & acid–base",
  "q": "A solution with a LOWER solute concentration (more water) than the cell is:",
  "a": "Hypotonic — water moves into the cell",
  "d": [
   "Hypertonic — water enters the cell",
   "Hypotonic — water moves out of the cell",
   "Isotonic — water moves into the cell",
   "Hypertonic — water does not move",
   "Isotonic — the cell shrinks"
  ],
  "why": "Hypo = less solute outside → water enters → the cell swells."
 },
 {
  "id": "q3z9r5a",
  "topic": "Fluid homeostasis & acid–base",
  "q": "A solution with a HIGHER solute concentration than the cell is:",
  "a": "Hypertonic — water moves out of the cell",
  "d": [
   "Hypotonic — water moves out of the cell",
   "Hypertonic — water moves into the cell",
   "Isotonic — water moves out of the cell",
   "Hypotonic — the cell swells and then bursts",
   "Isotonic — no water moves"
  ],
  "why": "Hyper = more solute outside → water leaves → the cell shrinks (crenates)."
 },
 {
  "id": "q1ci7cfa",
  "topic": "Fluid homeostasis & acid–base",
  "q": "In the egg osmosis lab, the de-shelled egg in 20% salt LOST mass. That solution was:",
  "a": "Hypertonic to the egg",
  "d": [
   "Hypotonic to the egg",
   "Isotonic to the egg",
   "Neutral to the egg",
   "Semipermeable to the egg",
   "Acidic relative to the egg"
  ],
  "why": "Water left the egg by osmosis into the more concentrated solution."
 },
 {
  "id": "q1dgufz1",
  "topic": "Fluid homeostasis & acid–base",
  "q": "The egg in distilled (0%) water GAINED mass over time. Why?",
  "a": "Water was hypotonic, so water entered the egg by osmosis",
  "d": [
   "Salt diffused out of the egg, so water followed it",
   "Water was hypertonic, so water was drawn into the egg by osmosis",
   "The egg absorbed dissolved oxygen from the water, adding to its mass",
   "The egg was isotonic with the water, so it took up water freely",
   "Water was hypotonic, so solutes moved into the egg by active transport"
  ],
  "why": "Water moves toward the higher solute concentration (the egg's interior)."
 },
 {
  "id": "qiikxkh",
  "topic": "Fluid homeostasis & acid–base",
  "q": "What would you predict for an egg placed in a 40% salt solution?",
  "a": "It would lose even more water and shrink",
  "d": [
   "It would gain water and swell up noticeably",
   "It would stay the same mass as at time zero",
   "It would gain salt and swell up as a result",
   "It would burst immediately from osmotic pressure",
   "It would become isotonic at once, with no change"
  ],
  "why": "An even more hypertonic solution pulls even more water out."
 },
 {
  "id": "q1fyqbaz",
  "topic": "Fluid homeostasis & acid–base",
  "q": "In the egg lab, what did the egg and the beaker fluid represent?",
  "a": "The egg was a body cell (ICF); the beaker was the ECF around it",
  "d": [
   "The egg was the ECF; the beaker was a body cell (ICF)",
   "The egg was a kidney (nephron); the beaker was urine",
   "The egg was blood plasma; the beaker was lymph in the vessels",
   "The egg was a capillary; the beaker was the interstitial fluid around it",
   "The egg was a fascial compartment; the beaker was a muscle"
  ],
  "why": "The egg is a single large cell with a selectively permeable membrane."
 },
 {
  "id": "qzf6x9c",
  "topic": "Fluid homeostasis & acid–base",
  "q": "Why did the lab record CHANGE in mass rather than raw mass?",
  "a": "To compensate for the eggs having different starting masses",
  "d": [
   "Because the scales could not read raw mass accurately",
   "Because change in mass equals the salt concentration",
   "To convert grams of egg mass into a percent salt value",
   "Because raw mass is always identical for every egg in the lab",
   "To measure the egg's pH change from the mass difference"
  ],
  "why": "Subtracting each egg's time-0 mass lets you compare eggs fairly."
 },
 {
  "id": "q7wmhtw",
  "topic": "Fluid homeostasis & acid–base",
  "q": "If you drank a large volume of water and diluted your plasma, your red blood cells would:",
  "a": "Swell, and might even burst",
  "d": [
   "Shrink as water leaves them",
   "Stay the same size",
   "Gain salt and shrink",
   "Turn into white blood cells",
   "Clump together (agglutinate)"
  ],
  "why": "Diluted plasma is hypotonic to the RBCs, so water enters the cells."
 },
 {
  "id": "q2rr2qs",
  "topic": "Fluid homeostasis & acid–base",
  "q": "Which are common signs of compartment syndrome?",
  "a": "Severe pain, swelling, tightness, and numbness",
  "d": [
   "Fever, a spreading rash, and a dry cough",
   "Low blood glucose with shaking and sweating",
   "Yellow skin with dark urine and pale stools",
   "Hair loss with weight gain and cold intolerance",
   "Painless swelling with no other symptoms"
  ],
  "why": "Pressure trapped under fascia crushes the nerves and vessels. Pain out of proportion to the injury is the classic sign."
 },
 {
  "id": "qljayyb",
  "topic": "Fluid homeostasis & acid–base",
  "q": "Severe compartment syndrome is treated with:",
  "a": "An emergency fasciotomy",
  "d": [
   "Tighter bandaging of the limb",
   "A hypertonic oral salt drink",
   "A course of antibiotics alone",
   "An urgent blood transfusion",
   "A tourniquet above the injury"
  ],
  "why": "First remove tight casts or bandages; in severe cases, emergency fasciotomy."
 },
 {
  "id": "ql1ulj3",
  "topic": "Fluid homeostasis & acid–base",
  "q": "Normal blood pH is maintained around:",
  "a": "7.4",
  "d": [
   "6.0",
   "7.0",
   "8.0",
   "5.5",
   "2.0"
  ],
  "why": "Normal is 7.35–7.45. Below that is acidosis; above it is alkalosis."
 },
 {
  "id": "qwizmx7",
  "topic": "Fluid homeostasis & acid–base",
  "q": "Which reaction occurs when CO₂ from respiring cells enters the blood?",
  "a": "CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻",
  "d": [
   "CO₂ + O₂ → H₂CO₃ → H⁺ + HCO₃⁻",
   "CO₂ + H₂O → H₂CO₃ → OH⁻ + HCO₃⁺",
   "HCl + NaOH → NaCl + H₂O",
   "CO₂ + H₂O → C₆H₁₂O₆ + O₂",
   "HCO₃⁻ + O₂ → CO₂ + OH⁻ + H₂O"
  ],
  "why": "CO₂ + water makes carbonic acid, which dissociates and releases H⁺, so the pH falls."
 },
 {
  "id": "qd9podb",
  "topic": "Fluid homeostasis & acid–base",
  "q": "When HCl is added to blood plasma, which buffer component neutralizes the extra H⁺?",
  "a": "Bicarbonate ions (HCO₃⁻)",
  "d": [
   "Carbonic acid (H₂CO₃)",
   "Chloride ions (Cl⁻) in plasma",
   "Glucose (C₆H₁₂O₆) molecules",
   "Hemoglobin's iron atom (Fe²⁺)",
   "Sodium ions (Na⁺) in the plasma"
  ],
  "why": "HCO₃⁻ + H⁺ → H₂CO₃. Bicarbonate is the base half of the buffer pair."
 },
 {
  "id": "q12um2b",
  "topic": "Fluid homeostasis & acid–base",
  "q": "If blood becomes too ALKALINE, the carbonic acid–bicarbonate system responds by:",
  "a": "Carbonic acid releasing H⁺ into the plasma",
  "d": [
   "Bicarbonate binding up more free H⁺",
   "The kidneys releasing more bicarbonate ions",
   "The lungs exhaling extra CO₂ from the blood",
   "Converting the extra H⁺ into H₂ gas",
   "Hemoglobin releasing O₂ to neutralize OH⁻ ions"
  ],
  "why": "The weak acid (H₂CO₃) donates H⁺ to bring the pH back down."
 },
 {
  "id": "qwwdaig",
  "topic": "Fluid homeostasis & acid–base",
  "q": "Two drops of 0.01 M HCl barely change the pH of plasma but noticeably lower the pH of water. This shows that:",
  "a": "Plasma is a good buffer; water is not",
  "d": [
   "Water is a better buffer than plasma is",
   "Plasma has no buffers; water has many",
   "Water contains bicarbonate; plasma does not",
   "pH paper cannot measure the pH of plasma",
   "Plasma is more acidic than water to start"
  ],
  "why": "Buffers resist pH change. Pure water has no buffer, so the acid shows up directly."
 },
 {
  "id": "q3dvv9p",
  "topic": "Fluid homeostasis & acid–base",
  "q": "Phenol red is ____ in alkaline, ____ in neutral, and ____ in acidic solutions.",
  "a": "Magenta; red; yellow",
  "d": [
   "Yellow; red; magenta",
   "Blue; green; yellow",
   "Red; magenta; yellow",
   "Clear; pink; red",
   "Magenta; yellow; red"
  ],
  "why": "Magenta = basic, red = neutral, yellow = acidic."
 },
 {
  "id": "q176oq30",
  "topic": "Fluid homeostasis & acid–base",
  "q": "Water + 0.5 mL of 0.05 M NaOH + phenol red, BEFORE blowing bubbles, is:",
  "a": "Alkaline (magenta)",
  "d": [
   "Acidic (yellow)",
   "Neutral (red)",
   "Acidic (magenta)",
   "Alkaline (yellow)",
   "Neutral (colorless)"
  ],
  "why": "NaOH is a base, so the starting solution is alkaline."
 },
 {
  "id": "q1o7n3l9",
  "topic": "Fluid homeostasis & acid–base",
  "q": "Blowing exhaled breath through a straw into the phenol red solution turns it:",
  "a": "Yellow, because exhaled CO₂ forms carbonic acid",
  "d": [
   "Magenta, because exhaled O₂ makes it basic",
   "Blue, because the CO₂ in exhaled breath is a base",
   "Clear, because the indicator gets used up by the CO₂",
   "Red, because exhaled breath is perfectly neutral",
   "Magenta, because exhaled CO₂ removes H⁺ from water"
  ],
  "why": "CO₂ + H₂O → H₂CO₃ → H⁺, so the pH drops and the solution turns yellow. This models how the lungs help control blood pH."
 },
 {
  "id": "qx9lhk5",
  "topic": "Fluid homeostasis & acid–base",
  "q": "How does breathing out CO₂ help maintain blood pH?",
  "a": "Less CO₂ means less carbonic acid, so less H⁺ forms",
  "d": [
   "Exhaling CO₂ adds bicarbonate to the blood",
   "Exhaling CO₂ leaves more carbonic acid, so more H⁺ forms",
   "It removes oxygen, which acts as an acid in the blood",
   "Breathing has no effect at all on blood pH in healthy people",
   "It converts the excess H⁺ ions in the blood into glucose"
  ],
  "why": "Hyperventilation → less CO₂ → less H⁺ → more alkaline. Hypoventilation does the opposite."
 },
 {
  "id": "qqtnsib",
  "topic": "Lactase persistence",
  "q": "Lactase breaks lactose down into:",
  "a": "Glucose and galactose",
  "d": [
   "Glucose and fructose",
   "Two glucose molecules",
   "Amino acids and urea",
   "Fatty acids and glycerol",
   "Galactose and sucrose"
  ],
  "why": "Lactose = glucose + galactose (sucrose = glucose + fructose; maltose = glucose + glucose)."
 },
 {
  "id": "q12w6rha",
  "topic": "Lactase persistence",
  "q": "Where is lactase produced?",
  "a": "The small intestine",
  "d": [
   "The stomach lining",
   "The sublingual glands",
   "The pancreatic acini",
   "The liver hepatocytes",
   "The large bowel lining"
  ],
  "why": "Lactase is a brush-border enzyme on the small-intestine microvilli."
 },
 {
  "id": "q268dq7",
  "topic": "Lactase persistence",
  "q": "What does \"lactase nonpersistence\" mean?",
  "a": "Lactase production declines after weaning",
  "d": [
   "Lactase is made throughout adulthood",
   "The person is allergic to cow's milk protein",
   "The person cannot absorb any glucose",
   "Lactase is made only in the large intestine",
   "The person makes too much lactase as an adult"
  ],
  "why": "Nonpersistence is the ancestral mammal pattern. About 35% of adults worldwide are lactase PERSISTENT."
 },
 {
  "id": "qzyuwmf",
  "topic": "Lactase persistence",
  "q": "Why do lactose-intolerant people get gas, bloating, and diarrhea after drinking milk?",
  "a": "Colon bacteria ferment the undigested lactose",
  "d": [
   "Lactose blocks the common bile duct",
   "Lactose is absorbed too quickly into the blood",
   "The stomach makes extra acid in response to milk",
   "The liver converts lactose into intestinal gas",
   "Too much galactose is absorbed into the bloodstream"
  ],
  "why": "Bacterial fermentation produces H₂ and CH₄ gas plus acids; the lactose also pulls water into the gut."
 },
 {
  "id": "q1n0y8vf",
  "topic": "Lactase persistence",
  "q": "Why does blood glucose indicate lactase activity after drinking milk?",
  "a": "Lactose digestion releases glucose, which enters the blood",
  "d": [
   "Milk contains free glucose that everyone absorbs equally",
   "Lactase is itself a form of glucose released into blood",
   "Blood glucose rises only when lactose is NOT digested",
   "Bacteria in the colon release glucose into the bloodstream",
   "The pancreas converts lactose into glucose and releases insulin"
  ],
  "why": "A rise in blood glucose means the lactose was digested, so the person is lactase persistent."
 },
 {
  "id": "q1ck5hmy",
  "topic": "Lactase persistence",
  "q": "Blood glucose after 1 L of milk — Rachel: 96 → 105 → 98; Peter: 97 → 154 → 143. Which is correct?",
  "a": "Peter is lactase persistent; Rachel is intolerant",
  "d": [
   "Rachel is lactase persistent; Peter is intolerant",
   "Both Peter and Rachel are lactase persistent",
   "Both Peter and Rachel are lactose intolerant",
   "Rachel is diabetic; Peter has normal glucose control",
   "The data cannot distinguish between Peter and Rachel"
  ],
  "why": "A large rise (Peter) = lactose digested. A flat line (Rachel) = little lactase."
 },
 {
  "id": "qxtfgj7",
  "topic": "Lactase persistence",
  "q": "Which group from the blood glucose data were lactose INTOLERANT?",
  "a": "Rachel, Katherine, and Arthur",
  "d": [
   "Peter, Sarah, and Michael",
   "Spencer Wells, Peter, and Arthur",
   "Sarah and Michael only",
   "Everyone except Arthur",
   "Katherine and Peter"
  ],
  "why": "Their glucose stayed flat at about 83–105 mg/dL. Spencer, Peter, Sarah, and Michael rose to about 140–160 mg/dL."
 },
 {
  "id": "q2q685m",
  "topic": "Lactase persistence",
  "q": "Why must a patient fast before the blood glucose lactose test?",
  "a": "So other foods don't raise blood glucose",
  "d": [
   "Fasting increases lactase production",
   "Fasting lowers blood pH to normal",
   "Food damages the glucose meter strips",
   "Fasting makes the milk much easier to swallow",
   "So the stomach can make extra lactase first"
  ],
  "why": "Any glucose rise should come only from the milk."
 },
 {
  "id": "qhiavkz",
  "topic": "Lactase persistence",
  "q": "The hydrogen breath test detects lactose intolerance because:",
  "a": "Colon bacteria ferment the leftover lactose and make H₂ gas",
  "d": [
   "Lactase releases hydrogen gas as it works in the small intestine",
   "Glucose is converted into hydrogen gas inside the lungs' alveoli",
   "Stomach acid releases H₂ gas whenever milk is present in the stomach",
   "The liver converts absorbed galactose into H₂ gas that is exhaled",
   "Only lactase-persistent people produce hydrogen gas from milk sugar"
  ],
  "why": "More breath H₂ = more fermentation = more undigested lactose."
 },
 {
  "id": "q1wr2jb5",
  "topic": "Lactase persistence",
  "q": "Hydrogen breath (ppm) at 0 → 120 min — Dan: 4 → 35; Brian: 4 → 6. Which is correct?",
  "a": "Dan is nonpersistent; Brian is lactase persistent",
  "d": [
   "Dan is lactase persistent; Brian is nonpersistent",
   "Both Dan and Brian are lactase persistent",
   "Both Dan and Brian are lactase nonpersistent",
   "Dan has diabetes; Brian has normal digestion",
   "Brian has a bacterial gut infection; Dan is normal"
  ],
  "why": "A big H₂ rise means lactose reached the colon bacteria, so lactase is missing."
 },
 {
  "id": "q14wzo97",
  "topic": "Lactase persistence",
  "q": "Will H₂ gas absorbed into the blood lower blood pH?",
  "a": "No — H₂ gas does not release H⁺",
  "d": [
   "Yes — each H₂ becomes two H⁺ ions",
   "Yes — it forms carbonic acid in plasma",
   "No — because H₂ is a strong base",
   "Yes — it binds and removes bicarbonate",
   "No — H₂ cannot dissolve in plasma at all"
  ],
  "why": "pH depends on H⁺ ions, not hydrogen gas."
 },
 {
  "id": "qp60db3",
  "topic": "Lactase persistence",
  "q": "Which is another valid way to test someone's lactase status?",
  "a": "A genetic test for the lactase-persistence variant",
  "d": [
   "A urine nitrite test strip after drinking milk",
   "A chest X-ray taken an hour after drinking milk",
   "An ABO/Rh blood typing test before and after milk",
   "A thyroid TSH blood test after a lactose meal",
   "Measuring resting heart rate after a glass of milk"
  ],
  "why": "Other options: blood glucose after milk, breath H₂, genotyping, stool acidity, or a dairy elimination trial."
 },
 {
  "id": "q1krl2kz",
  "topic": "Lactase persistence",
  "q": "About what share of the world's adults are lactase persistent?",
  "a": "About 35%",
  "d": [
   "About 95%",
   "About 75%",
   "About 50%",
   "About 5%",
   "About 100%"
  ],
  "why": "A minority. Most adults worldwide are lactase nonpersistent."
 },
 {
  "id": "ql3btmo",
  "topic": "Urinalysis",
  "q": "What pigment gives urine its yellow color?",
  "a": "Urochrome (urobilin)",
  "d": [
   "Bilirubin (bile pigment)",
   "Hemoglobin (heme)",
   "Melanin (skin pigment)",
   "Carotene (from diet)",
   "Creatinine (from muscle)"
  ],
  "why": "Urochrome makes urine yellow; how concentrated the urine is sets how dark the yellow is."
 },
 {
  "id": "qizij9l",
  "topic": "Urinalysis",
  "q": "Darker amber urine most often means the urine is:",
  "a": "More concentrated",
  "d": [
   "More dilute than usual",
   "Infected with bacteria",
   "Full of glucose",
   "Strongly alkaline",
   "Full of protein"
  ],
  "why": "Darker urine = more solute per volume, often from dehydration."
 },
 {
  "id": "qbvglqc",
  "topic": "Urinalysis",
  "q": "Fresh urine left standing develops an ammonia-like odor because:",
  "a": "Bacteria break down urea into ammonia",
  "d": [
   "Glucose in it ferments into alcohol",
   "Oxygen reacts with the urochrome pigment",
   "The pH drops to about 2 as it sits",
   "Creatinine evaporates from the urine",
   "Red blood cells in it break down to ammonia"
  ],
  "why": "Bacterial urease converts urea to ammonia (which also raises the pH)."
 },
 {
  "id": "q1dyvujo",
  "topic": "Urinalysis",
  "q": "Which is NOT a normal constituent of urine?",
  "a": "Glucose",
  "d": [
   "Chloride",
   "Creatinine",
   "Uric acid",
   "Sodium",
   "Water"
  ],
  "why": "Glucose is normally fully reabsorbed. Glucose in the urine is called glucosuria."
 },
 {
  "id": "q1qf8y93",
  "topic": "Urinalysis",
  "q": "White blood cells (pus) in the urine is called ____ and indicates ____.",
  "a": "Pyuria — infection or inflammation of the urinary tract",
  "d": [
   "Hematuria — kidney stones in the renal pelvis",
   "Albuminuria — damage to the glomerular membrane",
   "Ketonuria — starvation or a very low-carb diet",
   "Glucosuria — uncontrolled diabetes mellitus",
   "Bilirubinuria — liver disease or a bile duct block"
  ],
  "why": "Pyuria = pus/leukocytes, which fits a UTI."
 },
 {
  "id": "qxmf225",
  "topic": "Urinalysis",
  "q": "A positive NITRITE test suggests:",
  "a": "A bacterial UTI, often from gram-negative E. coli",
  "d": [
   "Uncontrolled diabetes mellitus with ketones",
   "Liver cirrhosis or a blocked bile duct",
   "Kidney stones blocking the ureter",
   "Dehydration with a high specific gravity",
   "A high-protein diet acidifying the urine"
  ],
  "why": "Gram-negative bacteria convert nitrate into nitrite."
 },
 {
  "id": "qhxj9si",
  "topic": "Urinalysis",
  "q": "Protein (albumin) in the urine is called albuminuria. Why is it abnormal?",
  "a": "Albumin is too large to pass a healthy glomerular membrane",
  "d": [
   "Albumin is normally secreted by the bladder lining",
   "Albumin only means the person ate too much protein",
   "Albumin is a waste product the kidney must excrete",
   "Albumin in urine always means a bacterial bladder infection",
   "Albumin only forms in strongly alkaline, concentrated urine"
  ],
  "why": "Albuminuria suggests glomerular damage (e.g., from diabetes or hypertension)."
 },
 {
  "id": "q1fu5byp",
  "topic": "Urinalysis",
  "q": "Red blood cells in the urine is called:",
  "a": "Hematuria",
  "d": [
   "Leukocyturia",
   "Albuminuria",
   "Ketonuria",
   "Glucosuria",
   "Bilirubinuria"
  ],
  "why": "Possible causes: UTI, kidney stones, trauma, cancer, or contamination from menstrual flow."
 },
 {
  "id": "qqeen92",
  "topic": "Urinalysis",
  "q": "What is the normal pH range of urine, and the average?",
  "a": "4.5–8.0; average 6.0",
  "d": [
   "7.35–7.45; average 7.4",
   "1.0–3.0; average about 2.0",
   "8.0–10.0; average 9.0",
   "6.8–7.2; average about 7.0",
   "5.0–5.5; average about 5.2"
  ],
  "why": "Diet has the biggest effect: high protein makes urine more acidic; a vegetarian diet makes it less acidic."
 },
 {
  "id": "q9jepry",
  "topic": "Urinalysis",
  "q": "Which diet makes urine LESS acidic (more alkaline)?",
  "a": "A mostly vegetarian diet",
  "d": [
   "A high-protein diet",
   "A diet high in whole wheat",
   "A very-low-carb diet",
   "A meat-heavy diet",
   "Prolonged fasting (ketosis)"
  ],
  "why": "Protein and whole wheat acidify urine; fruit and vegetables alkalinize it."
 },
 {
  "id": "qh2ayk5",
  "topic": "Urinalysis",
  "q": "What is the normal specific gravity range of urine?",
  "a": "1.001–1.030",
  "d": [
   "1.000 exactly",
   "0.900–1.000",
   "1.100–1.300",
   "1.050–1.080",
   "2.000–3.000"
  ],
  "why": "Distilled water = 1.000. A higher number means more solute in the urine."
 },
 {
  "id": "q16wd7ku",
  "topic": "Urinalysis",
  "q": "Which condition would RAISE urine specific gravity?",
  "a": "Limited fluid intake or fever (dehydration)",
  "d": [
   "Drinking large volumes of water",
   "Nephrogenic diabetes insipidus",
   "Taking a diuretic and drinking a lot",
   "Early kidney failure with dilute urine",
   "Alcohol suppressing ADH while drinking water"
  ],
  "why": "Less water → more concentrated urine → higher specific gravity. Very concentrated urine can precipitate into kidney stones."
 },
 {
  "id": "q3jdxbr",
  "topic": "Urinalysis",
  "q": "Ketones in the urine (ketonuria) are expected during:",
  "a": "Starvation or a low-carb diet",
  "d": [
   "Drinking lots of water",
   "A high-carbohydrate, sugary diet",
   "A urinary tract infection (UTI)",
   "Passing a calcium kidney stone",
   "Normal, well-fed resting conditions"
  ],
  "why": "When carbohydrate is scarce, fat is burned and the liver makes ketone bodies. (Ketones also appear in uncontrolled type 1 diabetes.)"
 },
 {
  "id": "q1t6gqzj",
  "topic": "Urinalysis",
  "q": "Bilirubin in the urine most often points to:",
  "a": "Liver disease or a blockage of the bile ducts",
  "d": [
   "Kidney stones in the renal pelvis",
   "Uncontrolled diabetes mellitus",
   "A bacterial urinary tract infection",
   "Dehydration with concentrated urine",
   "A high-protein, low-vegetable diet"
  ],
  "why": "Conjugated bilirubin backs up into the blood when bile cannot drain, then spills into the urine."
 },
 {
  "id": "q1pfn00e",
  "topic": "Urinalysis",
  "q": "Glucose in the urine (glucosuria) usually indicates:",
  "a": "High blood glucose, as in diabetes",
  "d": [
   "Normal, healthy kidney function",
   "Liver failure with bile duct blockage",
   "A bacterial bladder infection",
   "Dehydration from limited fluid intake",
   "Low blood glucose from fasting"
  ],
  "why": "Normal blood glucose is about 80–100 mg/dL. Above the renal threshold, glucose spills into the urine."
 },
 {
  "id": "qv2m7fh",
  "topic": "Urinalysis",
  "q": "According to the lab, a complete ABSENCE of urobilinogen may indicate:",
  "a": "Renal disease",
  "d": [
   "Hepatitis A",
   "Cirrhosis",
   "A healthy diet",
   "Mild dehydration",
   "Diabetes mellitus"
  ],
  "why": "Normal urine contains a small amount of urobilinogen. None suggests renal disease; increased levels suggest liver disease (hepatitis, cirrhosis). (Clinically, absent urobilinogen more often points to complete bile duct obstruction — but this is what the lab handout states.)"
 },
 {
  "id": "q3z63v5",
  "topic": "Urinalysis",
  "q": "Where is urobilinogen formed?",
  "a": "In the intestines, from bilirubin",
  "d": [
   "In the kidney tubules, from excess urea",
   "In the bladder wall, from urochrome",
   "In the red bone marrow, from heme iron",
   "In the pancreas, from secreted bile salts",
   "In the stomach, from hemoglobin"
  ],
  "why": "Some urobilinogen is reabsorbed; part is returned to the gut by the liver and part is excreted by the kidneys."
 },
 {
  "id": "q1n7ydsm",
  "topic": "Urinalysis",
  "q": "Where do urinary CASTS form?",
  "a": "In the renal tubules",
  "d": [
   "In the bladder",
   "In the urethra",
   "In the renal pelvis",
   "In the cup after voiding",
   "In the ureters"
  ],
  "why": "Casts are protein molds of the tubule lumen, formed from concentrated urine or kidney disease."
 },
 {
  "id": "qq4i2v3",
  "topic": "Urinalysis",
  "q": "Which crystals are typical of ALKALINE urine?",
  "a": "Triple phosphate (\"coffin-lid\")",
  "d": [
   "Uric acid (rhomboid plates)",
   "Calcium oxalate (envelopes)",
   "Cystine (hexagonal plates)",
   "Sodium urate (needle bundles)",
   "Tyrosine (fine needles)"
  ],
  "why": "Alkaline: triple phosphate, calcium phosphate, ammonium urate (\"thorny apple\"), calcium carbonate, amorphous phosphates."
 },
 {
  "id": "q9n1c26",
  "topic": "Urinalysis",
  "q": "Which crystal is found in ACIDIC urine?",
  "a": "Calcium oxalate",
  "d": [
   "Triple phosphate",
   "Ammonium urate",
   "Calcium carbonate",
   "Calcium phosphate",
   "Amorphous phosphates"
  ],
  "why": "Acid urine: uric acid, calcium oxalate, cystine, sodium urate, tyrosine, leucine, amorphous urates."
 },
 {
  "id": "q1wa20ol",
  "topic": "Urinalysis",
  "q": "\"Thorny apple\"–shaped crystals in urine sediment are:",
  "a": "Ammonium urate crystals (alkaline urine)",
  "d": [
   "Calcium oxalate dihydrate crystals (acid urine)",
   "Cystine crystals (acid urine)",
   "Uric acid crystals (acid urine)",
   "Hyaline casts (from the renal tubule lumen)",
   "Budding yeast cells (a fungal contaminant)"
  ],
  "why": "Ammonium urate = spiky dark balls, found in alkaline urine."
 },
 {
  "id": "q1d4mxt2",
  "topic": "Urinalysis",
  "q": "Hexagonal plate crystals in acid urine are:",
  "a": "Cystine crystals",
  "d": [
   "Triple phosphate crystals",
   "Calcium carbonate crystals",
   "Ammonium urate crystals",
   "Leucine crystal spheres",
   "Waxy cast fragments"
  ],
  "why": "Cystine = flat hexagons. They indicate cystinuria, a cause of cystine stones."
 },
 {
  "id": "qx6blye",
  "topic": "Urinalysis",
  "q": "Why must tubes be placed opposite each other in the centrifuge?",
  "a": "To keep the rotor balanced as it spins",
  "d": [
   "So the separate samples do not mix together",
   "So the dye spreads evenly through each tube",
   "To keep the urine warm while it spins",
   "So the tubes can be read by color afterward",
   "To prevent crystals from forming in the urine"
  ],
  "why": "An unbalanced rotor vibrates and can damage the centrifuge."
 },
 {
  "id": "q174tb24",
  "topic": "Urinalysis",
  "q": "After centrifuging urine, how is a sediment slide made?",
  "a": "Decant the fluid, then stain and coverslip a sediment drop",
  "d": [
   "Smear the clear top fluid on a slide without any stain",
   "Heat-fix the whole sample, then add Benedict's reagent to it",
   "Add phenol red to the cup and record the color change seen",
   "Dip a test strip into the sediment and read each of the pads",
   "Freeze the tube, then slice the frozen pellet into thin sections"
  ],
  "why": "The pellet at the bottom holds the cells, casts, and crystals."
 },
 {
  "id": "qhzcaap",
  "topic": "Urinalysis",
  "q": "When reading a urinometer, you record the value where:",
  "a": "The bottom of the meniscus crosses the stem",
  "d": [
   "The top of the meniscus crosses the stem",
   "The float touches the bottom of the tube",
   "The urine level reaches the rim of the cylinder",
   "The urine color matches the chart on the bottle",
   "The float stops spinning and settles in the urine"
  ],
  "why": "Always read the bottom of the meniscus."
 },
 {
  "id": "qfdgxe4",
  "topic": "Urinalysis",
  "q": "Which is a common cause of abnormally cloudy (turbid) urine?",
  "a": "Crystals, bacteria, or lipids in suspension",
  "d": [
   "A high level of urochrome pigment",
   "Eating beets the night before the test",
   "A low specific gravity from drinking extra water",
   "A low sodium content from a strict low-salt diet",
   "Eating a high-fiber breakfast cereal that morning"
  ],
  "why": "Suspended particles cause turbidity. Beets change the color, not the clarity."
 },
 {
  "id": "qj5nunz",
  "topic": "Urinalysis",
  "q": "Which foods or diseases are known to change urine ODOR?",
  "a": "Asparagus and diabetes mellitus",
  "d": [
   "Beets and hypothyroidism",
   "Carrots and chronic bronchial asthma",
   "White bread and calcium kidney stones",
   "Whole milk and iron-deficiency anemia",
   "Brown rice and essential hypertension"
  ],
  "why": "Asparagus gives a sulfurous odor. Diabetes gives a sweet, fruity (ketone) odor. Beets change the COLOR."
 },
 {
  "id": "ql0rxpb",
  "topic": "Urinalysis",
  "q": "Why should red blood cells NOT normally appear in urine?",
  "a": "They are too large to pass the glomerular filter",
  "d": [
   "They are all destroyed inside the bladder",
   "The kidney converts them into urea before voiding",
   "They are dissolved by the acid normally present in urine",
   "They are all reabsorbed whole in the loop of Henle",
   "They are filtered but always reabsorbed later on"
  ],
  "why": "Blood cells and large proteins stay in the blood. Finding them in urine means damage or bleeding along the urinary tract."
 },
 {
  "id": "q14wctas",
  "topic": "Abnormal urine & urine volume",
  "q": "A patient's urine strip is positive for glucose with everything else normal. The most likely condition is:",
  "a": "Diabetes mellitus",
  "d": [
   "Diabetes insipidus",
   "Kidney stones",
   "Urinary tract infection",
   "Chronic liver cirrhosis",
   "Dehydration"
  ],
  "why": "Glucosuria is the hallmark of uncontrolled diabetes mellitus."
 },
 {
  "id": "q1l8wcwq",
  "topic": "Abnormal urine & urine volume",
  "q": "A patient's urine has protein (proteinuria) with other values normal. This suggests:",
  "a": "Kidney (glomerular) damage",
  "d": [
   "Diabetes insipidus",
   "Normal healthy urine",
   "Acute liver failure",
   "Low-carbohydrate diet",
   "Mild dehydration only"
  ],
  "why": "Protein leaking through the glomerulus suggests a damaged filtration membrane."
 },
 {
  "id": "qozowjm",
  "topic": "Abnormal urine & urine volume",
  "q": "Untreated diabetes mellitus changes urine by:",
  "a": "Increasing volume, with glucose in it (osmotic diuresis)",
  "d": [
   "Decreasing its volume to almost nothing (anuria)",
   "Increasing volume, but very dilute with no solutes (as in DI)",
   "Making it strongly alkaline and dark red from spilled hemoglobin",
   "Removing all urea from it, so it becomes nearly odorless",
   "Stopping urine output entirely because of renal shutdown"
  ],
  "why": "Filtered glucose that isn't reabsorbed holds water in the tubule → polyuria with high specific gravity."
 },
 {
  "id": "q115163k",
  "topic": "Abnormal urine & urine volume",
  "q": "In untreated NEPHROGENIC diabetes insipidus, urine is:",
  "a": "Large in volume and very dilute",
  "d": [
   "Small in volume and very concentrated",
   "Large in volume and full of glucose",
   "Normal in volume but full of blood",
   "Small in volume and full of protein",
   "Normal in volume and concentration"
  ],
  "why": "Without an ADH response, the collecting ducts cannot reabsorb water → lots of watery, low-specific-gravity urine."
 },
 {
  "id": "qkmn1r0",
  "topic": "Abnormal urine & urine volume",
  "q": "What is the key difference between diabetes mellitus and diabetes insipidus in the urine?",
  "a": "Only mellitus urine has glucose; insipidus urine is dilute",
  "d": [
   "Both types of diabetes put large amounts of glucose in the urine",
   "Only insipidus urine has glucose; mellitus urine is very dilute",
   "Mellitus causes low urine volume; insipidus causes high volume",
   "Both cause very low urine volume with highly concentrated urine",
   "Insipidus urine is bloody; mellitus urine is cloudy with bacteria"
  ],
  "why": "Mellitus = \"sweet\" (sugar problem); insipidus = \"tasteless\" (water/ADH problem). Both cause polyuria."
 },
 {
  "id": "q12rnvwq",
  "topic": "Abnormal urine & urine volume",
  "q": "In EARLY kidney failure, urine output tends to:",
  "a": "Increase, with more dilute urine (especially at night)",
  "d": [
   "Drop to almost zero (anuria), even early on",
   "Increase, with glucose spilling into the urine",
   "Decrease, with very concentrated urine (high SG)",
   "Stay normal in volume but turn strongly alkaline and dark red",
   "Stay completely normal in volume and concentration (no change)"
  ],
  "why": "Early on: polyuria and nocturia with dilute urine."
 },
 {
  "id": "qtvsuwf",
  "topic": "Abnormal urine & urine volume",
  "q": "In END-STAGE kidney failure, urine output tends to:",
  "a": "Fall to very little (oliguria or anuria)",
  "d": [
   "Rise to several liters of dilute urine per day",
   "Become sweet with large amounts of spilled glucose",
   "Become extremely concentrated (SG about 1.040)",
   "Stay normal in volume while blood urea falls",
   "Turn bright yellow from extra urochrome pigment"
  ],
  "why": "End stage: filtration collapses → little urine, and the kidneys can no longer adjust its concentration."
 },
 {
  "id": "qqamtiw",
  "topic": "Abnormal urine & urine volume",
  "q": "The abnormal urine lab used one control patient and four others, each with:",
  "a": "One major abnormality each",
  "d": [
   "No abnormalities at all",
   "Four abnormalities each",
   "The same single disease",
   "Only abnormal colors",
   "Only bacterial growth"
  ],
  "why": "Each abnormal patient had ONE distinct problem — e.g., glucose, protein, blood, or abnormal pH/specific gravity."
 },
 {
  "id": "qukj0tx",
  "topic": "Abnormal urine & urine volume",
  "q": "For the abnormal urine samples, which tool measured pH?",
  "a": "pH test paper",
  "d": [
   "A urinometer",
   "Benedict's reagent",
   "A centrifuge",
   "Phenol red solution",
   "A light microscope"
  ],
  "why": "pH paper for pH; Chemstix for the other constituents; a urinometer for specific gravity."
 },
 {
  "id": "q1c8xwvz",
  "topic": "Mechanical digestion stations",
  "q": "Which salivary gland lies just in front of and below the ear?",
  "a": "Parotid salivary gland",
  "d": [
   "Submandibular gland",
   "Sublingual gland",
   "Palatine tonsil",
   "Lingual tonsil",
   "Thyroid gland (isthmus)"
  ],
  "why": "Parotid = \"beside the ear.\" It is the largest salivary gland."
 },
 {
  "id": "quux7v5",
  "topic": "Mechanical digestion stations",
  "q": "Which salivary gland lies under the tongue in the floor of the mouth?",
  "a": "Sublingual gland",
  "d": [
   "Parotid salivary gland",
   "Submandibular gland",
   "Palatine tonsils",
   "Pharyngeal tonsil",
   "Buccal mucous glands"
  ],
  "why": "Sub-lingual = under the tongue. The submandibular gland lies along the inner surface of the mandible."
 },
 {
  "id": "qj47a48",
  "topic": "Mechanical digestion stations",
  "q": "Which tonsil sits at the back (base) of the tongue?",
  "a": "Lingual tonsil",
  "d": [
   "Palatine tonsil",
   "Pharyngeal tonsil",
   "Tubal tonsil",
   "Laryngeal tonsil",
   "Epiglottic tonsil"
  ],
  "why": "Lingual = tongue. The palatine tonsils sit at the sides of the throat between the palatal arches."
 },
 {
  "id": "qg68p8d",
  "topic": "Mechanical digestion stations",
  "q": "The bony front part of the roof of the mouth is the ____; the muscular back part is the ____.",
  "a": "Hard palate; soft palate",
  "d": [
   "Soft palate; hard palate",
   "Uvula; epiglottis",
   "Hard palate; epiglottis",
   "Lingual tonsil; palatine tonsil",
   "Soft palate; uvula"
  ],
  "why": "The hard palate is the maxilla and palatine bones. The soft palate rises during swallowing to close off the nasopharynx."
 },
 {
  "id": "qqrdi37",
  "topic": "Mechanical digestion stations",
  "q": "The most common type of oral cancer arises from which cells?",
  "a": "Squamous epithelial cells",
  "d": [
   "Sensory neurons of the tongue",
   "Osteocytes of the mandible",
   "Enamel-forming ameloblasts",
   "Acinar cells of the parotid",
   "Lymphocytes of the tonsils"
  ],
  "why": "Oral cancer types in the lab: squamous cell carcinoma (most common), minor salivary gland carcinoma, and lymphoma."
 },
 {
  "id": "q136r9eo",
  "topic": "Mechanical digestion stations",
  "q": "From outside to inside, what are the layers of a tooth crown?",
  "a": "Enamel → dentin → pulp",
  "d": [
   "Dentin → enamel → pulp",
   "Pulp → dentin → enamel",
   "Enamel → pulp → dentin",
   "Cementum → enamel → dentin",
   "Dentin → pulp → enamel"
  ],
  "why": "Enamel covers the crown, dentin forms the bulk, and the pulp holds the nerves and vessels."
 },
 {
  "id": "q8go21z",
  "topic": "Mechanical digestion stations",
  "q": "What are the three external regions of a tooth?",
  "a": "Crown, neck, root",
  "d": [
   "Enamel, dentin, pulp",
   "Incisor, canine, molar",
   "Cusp, ridge, pit",
   "Crown, pulp, apex only",
   "Gingiva, socket, ligament"
  ],
  "why": "Crown above the gum, neck at the gum line, root in the socket."
 },
 {
  "id": "q104wyga",
  "topic": "Mechanical digestion stations",
  "q": "What is the hardest substance in the body?",
  "a": "Tooth enamel",
  "d": [
   "Root dentin",
   "Cortical bone",
   "Cartilage",
   "Cementum",
   "Keratin"
  ],
  "why": "Enamel is about 96% mineral (hydroxyapatite)."
 },
 {
  "id": "qu6ylzb",
  "topic": "Mechanical digestion stations",
  "q": "A cavity that has reached the dentin but NOT the pulp has damaged:",
  "a": "Enamel and dentin",
  "d": [
   "Only the pulp",
   "Only the enamel",
   "Enamel, dentin, and pulp",
   "Pulp and root canal",
   "Dentin and pulp, not enamel"
  ],
  "why": "Caries progress from the outside in: enamel → dentin → pulp."
 },
 {
  "id": "q1w2uli1",
  "topic": "Mechanical digestion stations",
  "q": "Which tooth type has NO deciduous (baby-tooth) version?",
  "a": "Premolars",
  "d": [
   "Lateral incisors",
   "Central incisors",
   "Canine teeth",
   "First molars",
   "Second molars"
  ],
  "why": "The 20 baby teeth are incisors, canines, and molars. Premolars only appear in the permanent set."
 },
 {
  "id": "q2l9rp",
  "topic": "Mechanical digestion stations",
  "q": "Animal skulls (e.g., carnivores) differ from human skulls mainly by having:",
  "a": "Long, pointed canines for tearing flesh",
  "d": [
   "Broad, flat molars built for grinding plants",
   "Smaller canines than a human's",
   "Incisors only, with no canines or molars",
   "Thicker enamel but identical tooth shapes to ours",
   "Teeth with no enamel layer at all"
  ],
  "why": "Tooth shape follows diet: carnivores tear (long canines); herbivores grind (broad molars)."
 },
 {
  "id": "q1s3fcjo",
  "topic": "Mechanical digestion stations",
  "q": "Which structure is most directly responsible for letting stomach acid reflux into the esophagus in GERD?",
  "a": "The lower esophageal sphincter",
  "d": [
   "The pyloric sphincter",
   "The upper esophageal sphincter (UES)",
   "The epiglottis covering the larynx",
   "The hepatopancreatic sphincter (Oddi)",
   "The gastric rugae of the cardia"
  ],
  "why": "A weak or relaxed LES lets acid back up and burn the esophageal mucosa."
 },
 {
  "id": "q1erwqs8",
  "topic": "Mechanical digestion stations",
  "q": "What is the epithelium lining the esophagus?",
  "a": "Nonkeratinized stratified squamous epithelium",
  "d": [
   "Simple columnar epithelium with many goblet cells",
   "Thickly keratinized stratified squamous epithelium",
   "Simple cuboidal epithelium with a brush border",
   "Pseudostratified columnar epithelium with cilia",
   "Transitional epithelium with dome-shaped cells"
  ],
  "why": "Many layers resist abrasion from food; nonkeratinized keeps it moist. The stomach switches to simple columnar."
 },
 {
  "id": "q4w5w0k",
  "topic": "Mechanical digestion stations",
  "q": "From the lumen outward, what are the layers of the esophageal wall?",
  "a": "Mucosa → submucosa → muscularis → adventitia",
  "d": [
   "Muscularis → submucosa → mucosa → serosa",
   "Serosa → mucosa → submucosa → muscularis",
   "Submucosa → mucosa → muscularis externa → adventitia",
   "Mucosa → muscularis externa → submucosa → adventitia",
   "Mucosa → serosa → submucosa → muscularis externa"
  ],
  "why": "The same basic GI wall plan everywhere: mucosa, submucosa, muscularis externa, then serosa (or adventitia for the esophagus)."
 },
 {
  "id": "qhddn10",
  "topic": "Mechanical digestion stations",
  "q": "Swallowed fish bones have occasionally punctured the aorta. Which digestive organ is most responsible, and why?",
  "a": "The esophagus — it runs right beside the aorta",
  "d": [
   "The stomach — it rests on the aortic arch",
   "The pharynx — the aorta passes through it",
   "The large intestine — the aorta runs inside it",
   "The duodenum — it wraps tightly around the aorta",
   "The liver — food passes through it first"
  ],
  "why": "The esophagus passes through the posterior mediastinum next to the aorta."
 },
 {
  "id": "q1yhzlhy",
  "topic": "Mechanical digestion stations",
  "q": "Which stomach region surrounds the opening from the esophagus?",
  "a": "The cardia",
  "d": [
   "The body",
   "The fundus",
   "The antrum",
   "The pylorus",
   "The incisura"
  ],
  "why": "The cardia is next to the esophageal opening. The fundus domes above it; the pylorus is at the far (duodenal) end."
 },
 {
  "id": "qom1cq2",
  "topic": "Mechanical digestion stations",
  "q": "The folds of the stomach lining that flatten out as the stomach fills are called:",
  "a": "Gastric rugae",
  "d": [
   "Microvilli",
   "Gastric pits",
   "Taeniae coli",
   "Haustra coli",
   "Plicae circulares"
  ],
  "why": "Rugae allow the stomach to expand. (Villi and plicae are in the small intestine; haustra are in the colon.)"
 },
 {
  "id": "qh8srzo",
  "topic": "Mechanical digestion stations",
  "q": "Which digestive organ has an extra, third layer of muscle in its wall?",
  "a": "The stomach",
  "d": [
   "The cecum",
   "The ileum",
   "The rectum",
   "The colon",
   "The esophagus"
  ],
  "why": "The stomach has oblique, circular, and longitudinal layers for churning."
 },
 {
  "id": "q3l1rgk",
  "topic": "Mechanical digestion stations",
  "q": "For an ulcer to PERFORATE the stomach, in what order must it destroy the layers?",
  "a": "Mucosa → submucosa → muscularis externa → serosa",
  "d": [
   "Serosa → muscularis externa → submucosa → mucosa",
   "Submucosa → mucosa → serosa → muscularis",
   "Mucosa → muscularis externa → submucosa → serosa",
   "Muscularis → mucosa → serosa → submucosa",
   "Mucosa → serosa → submucosa → muscularis"
  ],
  "why": "Ulcers erode from the lumen (mucosa) outward; perforation happens once the serosa is breached."
 },
 {
  "id": "qr851p8",
  "topic": "Mechanical digestion stations",
  "q": "During a colonoscopy, in what order does the scope pass through the large intestine?",
  "a": "Anus → rectum → sigmoid → descending → transverse → ascending → cecum",
  "d": [
   "Cecum → ascending → transverse → descending → sigmoid → rectum → anus",
   "Anus → rectum → ascending → transverse → descending → sigmoid → cecum",
   "Rectum → anus → sigmoid → descending → transverse → cecum",
   "Anus → sigmoid → rectum → descending → transverse → ascending → cecum → ileum",
   "Anus → rectum → descending → sigmoid → transverse → ascending → cecum → appendix"
  ],
  "why": "The scope enters from the anus and travels backward against the normal flow of feces, ending at the cecum."
 },
 {
  "id": "q12aypum",
  "topic": "Mechanical digestion stations",
  "q": "What does a goblet cell in the large intestine secrete?",
  "a": "Lubricating mucus",
  "d": [
   "Pepsinogen",
   "Bile salts",
   "Intrinsic factor",
   "Hydrochloric acid (HCl)",
   "Pancreatic amylase"
  ],
  "why": "The colon's simple columnar epithelium is packed with mucus-secreting goblet cells."
 },
 {
  "id": "q1hb5cn5",
  "topic": "Mechanical digestion stations",
  "q": "Where is the appendix attached?",
  "a": "To the cecum",
  "d": [
   "To the ileum",
   "To the rectum",
   "To the stomach",
   "To the duodenum",
   "To the sigmoid colon"
  ],
  "why": "The vermiform appendix hangs from the cecum at the start of the large intestine."
 },
 {
  "id": "q1lvlkwl",
  "topic": "Mechanical digestion stations",
  "q": "Which part of the digestive tract can be completely removed without major effects on DIGESTION (per the lab)?",
  "a": "The large intestine",
  "d": [
   "The esophagus",
   "The stomach mucosa",
   "The jejunum and ileum",
   "The exocrine pancreas",
   "The liver and bile ducts"
  ],
  "why": "Nutrient digestion and absorption happen mostly in the small intestine; the colon mainly absorbs water. Removing it does upset water and electrolyte balance, but not nutrient digestion."
 },
 {
  "id": "qx0luua",
  "topic": "Mechanical digestion stations",
  "q": "Which region studied at the mechanical digestion stations has the strongest muscle in the body for its size?",
  "a": "The mouth (oral cavity)",
  "d": [
   "The stomach (fundus)",
   "The esophagus (upper third)",
   "The rectum (anal sphincter)",
   "The small intestine",
   "The large intestine"
  ],
  "why": "The jaw muscles (masseter) and the tongue are the usual candidates. Both are in the mouth."
 },
 {
  "id": "q1uzpg21",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "In the enzyme lab, which enzyme simulates digestion in the ORAL CAVITY?",
  "a": "Salivary amylase, pH 7",
  "d": [
   "Gastric pepsin, pH 2",
   "Gastric lipase, pH 2",
   "Lactase, pH 7",
   "Amylase at pH 2",
   "Pancreatic trypsin, pH 8"
  ],
  "why": "Salivary amylase starts starch digestion in the near-neutral mouth."
 },
 {
  "id": "q1r5dpj0",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "Which enzyme and pH simulate the STOMACH?",
  "a": "Pepsin, at about pH 1–2",
  "d": [
   "Trypsin, at about pH 2",
   "Amylase, at about pH 7",
   "Pepsin, at about pH 8",
   "Lipase, at about pH 7",
   "Amylase, at about pH 1–2"
  ],
  "why": "Pepsin digests protein and works best in strong acid."
 },
 {
  "id": "q1coa0p8",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "Which enzyme digests the egg white (protein) in the DUODENUM tube?",
  "a": "Pancreatic trypsin",
  "d": [
   "Salivary amylase",
   "Gastric pepsin",
   "Pancreatic lipase",
   "Bile salts",
   "Gastric lipase"
  ],
  "why": "Trypsin is a pancreatic protease that works in the near-neutral duodenum."
 },
 {
  "id": "q1rnd0yc",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "Which enzyme digests STARCH in the duodenum?",
  "a": "Pancreatic amylase",
  "d": [
   "Gastric pepsin",
   "Pancreatic lipase",
   "Trypsin from the pancreas",
   "Hydrochloric acid (HCl)",
   "Bile salts from the liver"
  ],
  "why": "Trypsin is a protease and does NOT digest starch. Pancreatic amylase finishes starch digestion."
 },
 {
  "id": "q1soq1t8",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "What is the approximate pH in the duodenum?",
  "a": "About 7–8, near neutral",
  "d": [
   "About 4, mildly acidic",
   "About 1, very acidic",
   "About 2, as in stomach",
   "About 5, weakly acidic",
   "About 10–11, strongly basic"
  ],
  "why": "Pancreatic bicarbonate neutralizes the acidic chyme from the stomach."
 },
 {
  "id": "q1v3oa35",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "Which tube should show NO protein digestion?",
  "a": "Egg white + salivary amylase, pH 7 (tube 1e)",
  "d": [
   "Egg white + pepsin, pH 2 (tube 2e)",
   "Egg white + pancreatic trypsin (tube 3e)",
   "The pepsin tube (2e), because acid inactivates pepsin",
   "The trypsin tube (3e), because trypsin needs strong acid",
   "All three egg tubes, since egg white resists enzymes"
  ],
  "why": "Amylase digests starch, not protein, so the egg white in the \"mouth\" tube should stay intact."
 },
 {
  "id": "qpg7hsb",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "Which starch tube should test NEGATIVE for sugar?",
  "a": "Starch with pepsin at pH 2 (tube 2s)",
  "d": [
   "Starch with salivary amylase at pH 7 (tube 1s)",
   "Starch with pancreatic amylase (tube 3s)",
   "Only the mouth tube (1s), since amylase needs acid",
   "Only the duodenum tube (3s), since bile blocks amylase",
   "Both amylase tubes, 1s and 3s, but not 2s"
  ],
  "why": "Pepsin is a protease, and acid inactivates amylase, so no starch is broken into sugar."
 },
 {
  "id": "q1aof7gg",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "Benedict's reagent that STAYS BLUE after heating means:",
  "a": "No reducing sugar is present",
  "d": [
   "Reducing sugar is present",
   "The solution is too acidic",
   "Starch has been fully digested",
   "Protein is present in the sample",
   "Lipid (fat) is present in the tube"
  ],
  "why": "Blue = negative. Green, yellow, orange, or cloudy = reducing sugar (e.g., maltose from starch digestion)."
 },
 {
  "id": "q14y8cr",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "A starch tube turns green or yellow after heating with Benedict's. This means:",
  "a": "Starch was digested into sugar by amylase",
  "d": [
   "No digestion of starch occurred",
   "Protein was digested into amino acids by pepsin",
   "The pH in the tube was too acidic for amylase",
   "The tube was contaminated with egg white protein",
   "Benedict's reagent reacts directly with intact starch"
  ],
  "why": "Benedict's detects reducing sugars, the products of starch digestion."
 },
 {
  "id": "q1p2a0km",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "At what temperature were the enzyme tubes incubated, and why?",
  "a": "37 °C — to match body temperature",
  "d": [
   "90 °C — to speed up the enzymes",
   "0 °C — to preserve the enzymes",
   "100 °C — to sterilize the tubes",
   "25 °C — room temperature is simpler",
   "60 °C — to denature unwanted proteins"
  ],
  "why": "37 °C for digestion. The 90 °C bath is only for developing the Benedict's test."
 },
 {
  "id": "q1t1wz07",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "Why does the Benedict's test need the ~90 °C hot bath?",
  "a": "To drive the color reaction, which needs heat",
  "d": [
   "To digest any remaining starch",
   "To activate the amylase enzyme",
   "To neutralize the pH buffer",
   "To kill bacteria in the tube",
   "To dissolve the egg white so the dye can bind"
  ],
  "why": "The Benedict's reaction needs heat; below 90 °C it develops more slowly."
 },
 {
  "id": "q1q3odew",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "How would digested egg white look in a positive tube?",
  "a": "Smaller, with eroded, ragged edges",
  "d": [
   "Larger and harder than before",
   "Bright blue after heating",
   "Unchanged and perfectly smooth",
   "Turned completely into starch",
   "Covered in tiny gas bubbles"
  ],
  "why": "A shrinking, eroded slice means protein digestion."
 },
 {
  "id": "q1ybrxdu",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "Why were the lab solutions spread around to different areas of the room?",
  "a": "To avoid cross-contaminating the solutions",
  "d": [
   "To keep them at different temperatures",
   "To keep light off light-sensitive dyes",
   "Because they react explosively if mixed together",
   "To test students' memory of where things are",
   "Because each table ran a different experiment"
  ],
  "why": "Also, never reuse a pipette between different solutions."
 },
 {
  "id": "q1fdeur2",
  "topic": "Chemical digestion (enzyme lab)",
  "q": "How do the test tubes differ from a real digestive tract?",
  "a": "The real tract also churns and moves food, using more enzymes",
  "d": [
   "Real digestion happens at about 90 °C, not at 37 °C",
   "The real stomach contains no acid at all, unlike tube 2",
   "Real digestive enzymes work the same at any pH level",
   "Test tubes held more kinds of enzymes than the real gut",
   "The real tract has no water, so enzymes work only on dry food"
  ],
  "why": "The tubes did model the enzyme, pH, and 37 °C, but not peristalsis, mixing, bile, or brush-border enzymes."
 },
 {
  "id": "q13wy9j6",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "From the stomach onward, what are the three regions of the small intestine in order?",
  "a": "Duodenum → jejunum → ileum",
  "d": [
   "Jejunum → duodenum → ileum",
   "Ileum → jejunum → duodenum",
   "Duodenum → ileum → jejunum",
   "Cecum → jejunum → ileum",
   "Duodenum → jejunum → cecum"
  ],
  "why": "D-J-I. The duodenum is short and C-shaped; the ileum ends at the cecum."
 },
 {
  "id": "q1ybc1vi",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "What lines the villi of the small intestine?",
  "a": "Simple columnar epithelium with microvilli",
  "d": [
   "Stratified squamous epithelium",
   "Transitional epithelium with dome cells",
   "Simple squamous epithelium with cilia",
   "Pseudostratified ciliated epithelium",
   "Stratified cuboidal epithelium"
  ],
  "why": "Tall absorptive cells plus a brush border of microvilli → huge surface area."
 },
 {
  "id": "qusvis4",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "Why can gastroenteritis cause temporary lactose intolerance?",
  "a": "It damages villi whose brush border carries lactase",
  "d": [
   "It inflames the liver cells that make lactase",
   "It makes the gastric glands release too much lactase",
   "It destroys the pancreatic acinar cells that make lactase",
   "It blocks the common bile duct, so lactose isn't emulsified",
   "It damages the salivary glands that normally secrete lactase"
  ],
  "why": "Lactase is on the microvilli of small-intestine cells. Damage there → lactase deficiency until the lining regrows."
 },
 {
  "id": "qo7708o",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "Which region of the gut is MOST related to lactose intolerance after gastroenteritis?",
  "a": "The small intestine (jejunum)",
  "d": [
   "The large intestine (colon)",
   "The stomach (cardia and fundus)",
   "The esophagus (its distal end)",
   "The liver (and its bile ducts)",
   "The rectum (and the anal canal)"
  ],
  "why": "Lactase is made in the small intestine. The stomach and colon do not make it."
 },
 {
  "id": "qk6m0td",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "Which ligament attaches the liver to the diaphragm and anterior abdominal wall, separating the right and left lobes?",
  "a": "Falciform ligament",
  "d": [
   "Hepatoduodenal ligament",
   "Hepatogastric ligament",
   "Median umbilical ligament",
   "Gastrosplenic ligament",
   "Gastrocolic ligament"
  ],
  "why": "The falciform ligament is a sickle-shaped fold of peritoneum on the anterior liver."
 },
 {
  "id": "qwg30nf",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "On the liver slide, the hexagonal structural unit with a central vein is the:",
  "a": "Hepatic lobule with a central vein",
  "d": [
   "Renal corpuscle with a glomerulus",
   "Pancreatic acinus with a central duct",
   "Islet of Langerhans with beta cells",
   "Thyroid follicle with stored colloid",
   "Lymph node follicle with a germinal center"
  ],
  "why": "Hexagonal lobule: plates of hepatocytes radiate from a central vein, with portal triads at the corners."
 },
 {
  "id": "qi9y9y8",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "What three structures make up a portal triad?",
  "a": "Portal vein branch, hepatic artery branch, and bile ductule",
  "d": [
   "Central vein, hepatic vein, and bile duct",
   "Hepatic artery, renal artery, and cystic duct",
   "Hepatic portal vein branch, central vein, and a lymphatic vessel",
   "Bile ductule, pancreatic duct branch, and the main cystic duct",
   "Hepatic vein branch, inferior vena cava branch, and hepatic artery"
  ],
  "why": "Two vessels bring blood in (portal vein: nutrient-rich; hepatic artery: O₂-rich) and one duct carries bile out."
 },
 {
  "id": "q5bxcbk",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "What does the hepatic portal vein bring to the liver?",
  "a": "Nutrient-rich blood from the digestive tract",
  "d": [
   "Oxygen-rich blood straight from the aorta",
   "Bile from the gallbladder for storage",
   "Blood leaving the liver bound for the heart",
   "Lymph from the intestinal lacteals",
   "Filtered blood returning from the kidneys"
  ],
  "why": "Absorbed nutrients (and drugs) go to the liver first for processing."
 },
 {
  "id": "q1ffuih6",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "Which cells produce bile?",
  "a": "Hepatocytes (liver cells)",
  "d": [
   "Gallbladder lining cells",
   "Pancreatic acinar cells",
   "Sinusoidal Kupffer cells",
   "Duodenal goblet cells",
   "Gastric chief cells"
  ],
  "why": "Hepatocytes make bile; the gallbladder only stores and concentrates it."
 },
 {
  "id": "q1g36cty",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "What is the normal path of bile from the liver into the gallbladder?",
  "a": "Hepatocytes → canaliculi → ductules → hepatic ducts → cystic duct → gallbladder",
  "d": [
   "Hepatocytes → central vein → hepatic vein → common bile duct → gallbladder",
   "Gallbladder → cystic duct → hepatic ducts → canaliculi → hepatocytes",
   "Hepatocytes → pancreatic duct → common bile duct → cystic duct → gallbladder",
   "Hepatocytes → canaliculi → common bile duct → duodenum → cystic duct → gallbladder",
   "Hepatocytes → sinusoids → hepatic portal vein → hepatic ducts → cystic duct → gallbladder"
  ],
  "why": "Bile flows in the opposite direction to blood in the lobule — outward to the triads — then down to the cystic duct."
 },
 {
  "id": "q1r04diw",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "Swallowed codeine is absorbed in the intestine. Which vessel carries it INTO the liver?",
  "a": "The hepatic portal vein",
  "d": [
   "The hepatic artery",
   "The thoracic (lymphatic) duct",
   "The central vein of the lobule",
   "The superior mesenteric artery",
   "The right and left hepatic veins"
  ],
  "why": "Gut → hepatic portal vein → liver (this is \"first-pass metabolism\")."
 },
 {
  "id": "q1exa6dh",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "Where is codeine converted to morphine?",
  "a": "In the hepatocytes",
  "d": [
   "In the central vein",
   "In the gallbladder wall",
   "In the common bile duct",
   "In the pancreatic islets",
   "In circulating red blood cells"
  ],
  "why": "Hepatocyte enzymes (CYP2D6) metabolize the drug."
 },
 {
  "id": "qe5m3if",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "After the liver has processed a drug, how does it reach the general circulation?",
  "a": "Central vein → hepatic veins → inferior vena cava",
  "d": [
   "Hepatic portal vein → aorta → systemic arteries",
   "Bile duct → duodenum → mesenteric veins",
   "Hepatic artery → heart → pulmonary trunk",
   "Cystic duct → gallbladder → splenic vein",
   "Central vein → hepatic portal vein → small intestine"
  ],
  "why": "Blood drains from each lobule's central vein into the hepatic veins and then the IVC."
 },
 {
  "id": "q2nrtcw",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "If the bile duct is blocked, how does bile get into the blood?",
  "a": "It backs up into hepatocytes and leaks into the blood",
  "d": [
   "It is absorbed through the duodenal villi instead",
   "It is filtered into the blood by the kidneys",
   "It diffuses out of the gallbladder into the aorta",
   "It is converted into glucose and then released",
   "It is taken up by the pancreas and secreted"
  ],
  "why": "Conjugated bilirubin builds up in the blood → yellow skin and sclera, plus dark urine."
 },
 {
  "id": "qmwamji",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "What is the heaviest INTERNAL organ in the body?",
  "a": "The liver",
  "d": [
   "The skin",
   "The lungs",
   "The brain",
   "The spleen",
   "The stomach"
  ],
  "why": "The liver weighs about 1.5 kg. (The skin is the heaviest organ overall but is not internal.)"
 },
 {
  "id": "qt15ipf",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "Which organ was once thought to be nothing more than a shock absorber (cushion) in the gut?",
  "a": "The pancreas",
  "d": [
   "The liver",
   "The colon",
   "The spleen",
   "The stomach",
   "The gallbladder"
  ],
  "why": "Galen believed the pancreas cushioned the blood vessels and stomach."
 },
 {
  "id": "qlgt5ei",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "Which part of the pancreas nestles in the C-shaped curve of the duodenum?",
  "a": "The head of the pancreas",
  "d": [
   "The pyloric sphincter",
   "The tail of the pancreas",
   "The body of the pancreas",
   "The fundus of the stomach",
   "The neck of the gallbladder"
  ],
  "why": "The head sits in the duodenal C; the tail extends toward the spleen."
 },
 {
  "id": "qj7goz",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "On a pancreas slide, which clusters of cells make digestive enzymes?",
  "a": "Acinar cells",
  "d": [
   "Goblet cells",
   "Islet beta cells",
   "Islet alpha cells",
   "Islet delta cells",
   "Duct lining cells"
  ],
  "why": "Acini drain through small ducts into the pancreatic duct; the islets are scattered, pale endocrine patches."
 },
 {
  "id": "qzx8vad",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "How can pancreatitis cause jaundice?",
  "a": "A swollen pancreatic head compresses the common bile duct",
  "d": [
   "Pancreatitis destroys red blood cells passing through the pancreas",
   "The inflamed pancreas begins producing its own bilirubin pigment",
   "Inflamed acinar cells secrete bile directly into the bloodstream",
   "Pancreatitis blocks the hepatic artery, killing liver tissue",
   "It stops the kidneys from excreting urochrome, which builds up"
  ],
  "why": "This is obstructive (post-hepatic) jaundice."
 },
 {
  "id": "qkng2i1",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "The duct formed when the cystic duct joins the common hepatic duct is the:",
  "a": "Common bile duct",
  "d": [
   "Thoracic duct",
   "Pancreatic duct",
   "Common hepatic duct",
   "Hepatic portal vein",
   "Hepatopancreatic ampulla"
  ],
  "why": "The common bile duct runs through or behind the pancreatic head to the duodenum (usually joining the pancreatic duct)."
 },
 {
  "id": "qs1teli",
  "topic": "Kidney anatomy & blood flow",
  "q": "The kidney is cut along which plane to see the cortex, medulla, and pelvis in the dissection?",
  "a": "A frontal (coronal) plane",
  "d": [
   "An oblique plane",
   "A midsagittal plane",
   "No cut; view it intact",
   "A cut along the ureter",
   "A transverse (axial) plane"
  ],
  "why": "The frontal cut splits the kidney into front and back halves, matching the diagram."
 },
 {
  "id": "q5mr71k",
  "topic": "Kidney anatomy & blood flow",
  "q": "What is the tough outer layer covering the kidney?",
  "a": "The fibrous capsule",
  "d": [
   "The renal cortex",
   "The renal pelvis",
   "The renal column",
   "The adventitia",
   "The detrusor"
  ],
  "why": "The thin, shiny fibrous capsule peels off the cortex in the specimen."
 },
 {
  "id": "q1pvri4q",
  "topic": "Kidney anatomy & blood flow",
  "q": "The cone-shaped, striped regions of the medulla are the:",
  "a": "Renal pyramids",
  "d": [
   "Renal pelvis",
   "Medullary rays",
   "Renal sinus fat",
   "Renal corpuscles",
   "Cortical labyrinths"
  ],
  "why": "The medulla IS the pyramids. Their stripes come from the loops of Henle and collecting ducts."
 },
 {
  "id": "q157w0k8",
  "topic": "Kidney anatomy & blood flow",
  "q": "Bands of cortex-like tissue that extend down BETWEEN the pyramids are the:",
  "a": "Renal columns",
  "d": [
   "Renal papillae",
   "Medullary rays",
   "Renal sinus fat",
   "Renal corpuscles",
   "Cortical labyrinths"
  ],
  "why": "Renal columns carry the interlobar vessels between the pyramids."
 },
 {
  "id": "q16k7o1o",
  "topic": "Kidney anatomy & blood flow",
  "q": "What is the correct urine drainage path out of the kidney?",
  "a": "Papilla → minor calyx → major calyx → renal pelvis → ureter",
  "d": [
   "Major calyx → minor calyx → renal pelvis → ureter",
   "Renal pelvis → minor calyx → major calyx → ureter",
   "Minor calyx → renal pelvis → major calyx → ureter",
   "Papilla → renal pelvis → minor calyx → urethra",
   "Papilla → minor calyx → major calyx → renal pelvis → urethra"
  ],
  "why": "Small cups (minor) → larger cups (major) → funnel (pelvis) → ureter."
 },
 {
  "id": "qdx60xx",
  "topic": "Kidney anatomy & blood flow",
  "q": "About what fraction of cardiac output goes to the kidneys?",
  "a": "About 20–25%",
  "d": [
   "About 1–2%",
   "About 5–10%",
   "About 50%",
   "About 60%",
   "About 75%"
  ],
  "why": "About 20–25%, even though the kidneys are less than 1% of body mass."
 },
 {
  "id": "q1w0v453",
  "topic": "Kidney anatomy & blood flow",
  "q": "What is the correct ARTERIAL sequence into the kidney?",
  "a": "Renal artery → segmental → interlobar → arcuate → cortical radiate → afferent arteriole",
  "d": [
   "Renal artery → interlobar → segmental → arcuate → afferent arteriole",
   "Renal artery → segmental → arcuate → interlobar → cortical radiate → afferent arteriole",
   "Renal artery → segmental → interlobar → cortical radiate → arcuate → afferent arteriole",
   "Renal artery → segmental → interlobar → arcuate → cortical radiate → efferent arteriole",
   "Renal artery → arcuate → segmental → interlobar → cortical radiate → peritubular → afferent arteriole"
  ],
  "why": "Mnemonic: \"Some Interns Are Constantly Asleep\" = Segmental, Interlobar, Arcuate, Cortical radiate, Afferent."
 },
 {
  "id": "q1eqpwmo",
  "topic": "Kidney anatomy & blood flow",
  "q": "Which arteries arch over the bases of the renal pyramids at the cortex–medulla border?",
  "a": "Arcuate arteries",
  "d": [
   "Vasa recta",
   "Renal arteries",
   "Lobar arteries",
   "Spiral arteries",
   "Efferent vessels"
  ],
  "why": "Arcuate = \"arched.\" They run along the corticomedullary junction."
 },
 {
  "id": "qvuuklk",
  "topic": "Kidney anatomy & blood flow",
  "q": "Which arteries run through the renal columns BETWEEN the pyramids?",
  "a": "Interlobar arteries",
  "d": [
   "Renal arteries",
   "Arcuate arteries",
   "Segmental arteries",
   "Afferent arterioles",
   "Cortical radiate arteries"
  ],
  "why": "Interlobar = between the lobes (pyramids)."
 },
 {
  "id": "qjofv9f",
  "topic": "Kidney anatomy & blood flow",
  "q": "After the glomerulus, blood leaves through the ____ and then flows into the ____.",
  "a": "Efferent arteriole; peritubular capillaries",
  "d": [
   "Afferent arteriole; arcuate vein",
   "Efferent arteriole; renal artery",
   "Afferent arteriole; glomerulus again",
   "Cortical radiate artery; renal pelvis",
   "Interlobar vein; Bowman's capsule"
  ],
  "why": "This is a second capillary bed that serves tubular reabsorption."
 },
 {
  "id": "qzv9vbt",
  "topic": "Kidney anatomy & blood flow",
  "q": "Which vein matches the descending aorta in the kidney blood-flow table?",
  "a": "Inferior vena cava",
  "d": [
   "Left renal vein",
   "Superior vena cava",
   "Hepatic portal vein",
   "Internal jugular vein",
   "Superior mesenteric vein"
  ],
  "why": "Renal veins drain into the IVC, just as the renal arteries branch from the aorta."
 },
 {
  "id": "q2redes",
  "topic": "Kidney anatomy & blood flow",
  "q": "A blockage raises blood pressure on which side of the obstruction?",
  "a": "The upstream (afferent) side",
  "d": [
   "Both sides, equally raised",
   "The downstream (efferent) side",
   "Neither side — pressure is unchanged",
   "Whichever side has the larger vessel",
   "Only in the veins, never the arteries"
  ],
  "why": "Fluid backs up behind a blockage and pressure falls beyond it."
 },
 {
  "id": "q1qq8pd0",
  "topic": "Kidney anatomy & blood flow",
  "q": "Where would a blockage DECREASE BP going into the kidney AND in the glomerulus?",
  "a": "In the renal artery",
  "d": [
   "In the ureter",
   "In the renal vein",
   "In an arcuate vein",
   "In the efferent arteriole",
   "In a cortical radiate vein"
  ],
  "why": "Everything downstream of the renal artery — including the glomerulus — receives less pressure."
 },
 {
  "id": "q529kg2",
  "topic": "Kidney anatomy & blood flow",
  "q": "Where would a blockage INCREASE BP going into the kidney AND in the glomerulus?",
  "a": "In the efferent arteriole or renal vein",
  "d": [
   "In a segmental artery branch",
   "In the afferent arteriole only",
   "In an arcuate or interlobar artery",
   "In the aorta above the renal arteries",
   "In the renal artery or a segmental artery"
  ],
  "why": "Blocking the outflow backs pressure up into the glomerulus."
 },
 {
  "id": "qxfnu57",
  "topic": "Kidney anatomy & blood flow",
  "q": "A blockage that INCREASES BP going into the kidney but DECREASES BP in the glomerulus would be in:",
  "a": "A segmental artery or afferent arteriole",
  "d": [
   "The peritubular capillaries",
   "The renal vein leaving the kidney",
   "The ureter draining the renal pelvis",
   "The efferent arteriole after the glomerulus",
   "Either the renal vein or the inferior vena cava"
  ],
  "why": "Upstream (the kidney's entrance) is high; downstream (the glomerulus) is low."
 },
 {
  "id": "q825crz",
  "topic": "Kidney anatomy & blood flow",
  "q": "A blockage that INCREASES BP in the interlobar artery but DECREASES BP in the cortical radiate arteries is in the:",
  "a": "Arcuate artery",
  "d": [
   "Segmental artery",
   "Renal artery",
   "Efferent arteriole",
   "Renal vein",
   "Afferent arteriole"
  ],
  "why": "The arcuate artery sits between the interlobar (upstream) and cortical radiate (downstream) arteries."
 },
 {
  "id": "q1l0bdy7",
  "topic": "Kidney anatomy & blood flow",
  "q": "\"Interlobular arteries\" is an older name for the:",
  "a": "Cortical radiate arteries",
  "d": [
   "Arcuate (arched) arteries",
   "Segmental branch arteries",
   "Interlobar (column) arteries",
   "Afferent glomerular arterioles",
   "Efferent glomerular arterioles"
  ],
  "why": "They radiate out through the cortex from the arcuate arteries. Don't confuse interLOBULAR with interLOBAR."
 },
 {
  "id": "qnv0m1f",
  "topic": "Kidney diseases",
  "q": "Renal (artery) stenosis is:",
  "a": "Narrowing of the renal artery by plaque",
  "d": [
   "Cysts forming in the renal medulla",
   "A bacterial infection of the pelvis",
   "Blood in the urine from any cause",
   "Ischemic death of the entire renal cortex",
   "Mineral stones lodged in the renal pelvis"
  ],
  "why": "Plaque narrows the renal artery and reduces flow to that kidney."
 },
 {
  "id": "q1qbf0sq",
  "topic": "Kidney diseases",
  "q": "Why does renal artery stenosis cause high blood pressure throughout the body?",
  "a": "Low kidney perfusion triggers renin release (RAAS)",
  "d": [
   "The blockage directly raises pressure in every artery",
   "The kidney stops making urine, so blood volume falls",
   "The narrowed artery wall itself releases epinephrine",
   "It destroys the adrenal medulla that sits above the kidney",
   "It lowers ADH secretion from the posterior pituitary"
  ],
  "why": "This is renovascular hypertension: low perfusion → renin → angiotensin II → vasoconstriction and aldosterone."
 },
 {
  "id": "qd6g37t",
  "topic": "Kidney diseases",
  "q": "Medullary cystic kidney disease (MCKD) mainly affects the ____ and causes ____.",
  "a": "Medulla and tubules — dilute urine (polyuria) and salt wasting",
  "d": [
   "Cortex only — sudden anuria after an episode of shock",
   "Renal artery — high blood pressure from arterial plaque",
   "Renal pelvis — stones that cause severe colicky flank pain",
   "Bladder wall — a bacterial infection with fever and chills",
   "Glomerulus only — heavy protein loss with no other change"
  ],
  "why": "MCKD is an inherited (autosomal dominant) tubulointerstitial disease that progresses to kidney failure."
 },
 {
  "id": "q1x71t40",
  "topic": "Kidney diseases",
  "q": "Renal cortical necrosis is:",
  "a": "Death of the cortex from severe ischemia, as in shock",
  "d": [
   "Inherited cysts in both kidneys from a gene mutation",
   "A bacterial infection ascending from the bladder",
   "Narrowing of the renal artery by atherosclerotic plaque",
   "Mineral deposits that block the minor and major calyces",
   "A slow-growing tumor arising deep in the renal medulla"
  ],
  "why": "It presents as acute kidney injury with little or no urine; treatment is supportive, often dialysis."
 },
 {
  "id": "qjtxh7h",
  "topic": "Kidney diseases",
  "q": "What is the most common type of kidney stone?",
  "a": "Calcium stones (oxalate or phosphate)",
  "d": [
   "Cystine stones (hexagonal)",
   "Uric acid stones (from gout)",
   "Struvite stones (from infection)",
   "Cholesterol stones (from bile)",
   "Bilirubin stones (pigment)"
  ],
  "why": "The four types: calcium (most common), uric acid, struvite (infection-related), and cystine."
 },
 {
  "id": "q7d0bqe",
  "topic": "Kidney diseases",
  "q": "Which kidney regions are most affected by kidney stones?",
  "a": "Renal pelvis, calyces, and papillae",
  "d": [
   "Renal cortex and fibrous capsule",
   "Fibrous capsule and perirenal fat",
   "Adrenal cortex and medulla",
   "The renal artery and segmental arteries",
   "Renal columns between adjacent pyramids"
  ],
  "why": "Stones form and lodge in the collecting system; a blockage backs up urine and can flatten the pyramids."
 },
 {
  "id": "q1ribphr",
  "topic": "Kidney diseases",
  "q": "How are kidney stones treated?",
  "a": "Small ones pass; large ones need lithotripsy or surgery",
  "d": [
   "Antibiotics, which dissolve every type of stone",
   "Dialysis until the stone dissolves on its own",
   "All need open surgery; none ever pass on their own",
   "Small ones need surgery; large ones pass with fluids alone",
   "Large ones pass; small ones need IV antibiotics or dialysis"
  ],
  "why": "Pain control and fluids for small stones; shock-wave lithotripsy or ureteroscopy for large ones."
 },
 {
  "id": "q1ii9zke",
  "topic": "Kidney diseases",
  "q": "Polycystic kidney disease (PKD) is characterized by:",
  "a": "Inherited cysts that enlarge both kidneys",
  "d": [
   "Narrowing of the renal artery by plaque",
   "Ischemic death of the renal cortex after shock",
   "A single large stone lodged in the renal pelvis",
   "A bacterial infection of the calyces and pelvis",
   "Cancer arising in the lining of the proximal tubule"
  ],
  "why": "The kidneys can grow to football size, and function is gradually lost."
 },
 {
  "id": "qkxh6hq",
  "topic": "Kidney diseases",
  "q": "When do symptoms of the COMMON (autosomal dominant) form of PKD usually appear?",
  "a": "In adulthood, usually 30–50",
  "d": [
   "Only during pregnancy",
   "Within the first days of life",
   "In early childhood, before age 5",
   "Only in old age, after age 80",
   "Never; it stays symptom-free for life"
  ],
  "why": "The rare autosomal RECESSIVE form shows up in infancy. ADPKD shows up in adults."
 },
 {
  "id": "q1n85aga",
  "topic": "Kidney diseases",
  "q": "Which complication OUTSIDE the kidney is linked to PKD?",
  "a": "Berry aneurysms in the cerebral arteries",
  "d": [
   "Autoimmune (Hashimoto's) thyroiditis",
   "Lactose intolerance in the gut",
   "Peptic ulcers of the duodenum",
   "Celiac disease of the small bowel",
   "Allergic asthma of the airways"
  ],
  "why": "PKD is also linked to hypertension, liver cysts, UTIs, and kidney stones."
 },
 {
  "id": "q1amcyx0",
  "topic": "Kidney diseases",
  "q": "Hematuria is best described as:",
  "a": "A sign (blood in urine) with many possible causes",
  "d": [
   "A single inherited kidney disease (one gene)",
   "A sign (protein in urine) of kidney failure",
   "A disease (pus in urine) caused by bacteria",
   "A sign (glucose in urine) of uncontrolled diabetes",
   "A tumor (renal cell carcinoma) of the proximal tubule"
  ],
  "why": "Causes include UTI, stones, glomerulonephritis, an enlarged prostate, cancer, and trauma. Treat the cause."
 },
 {
  "id": "qtsf9s3",
  "topic": "Kidney diseases",
  "q": "Where does renal cell carcinoma usually begin?",
  "a": "In the renal cortex (proximal tubule)",
  "d": [
   "In the renal pelvis (transitional lining)",
   "In the bladder wall (detrusor)",
   "In the renal artery (tunica media)",
   "In the adrenal medulla (chromaffin cells)",
   "In the ureter (near the pelvis)"
  ],
  "why": "Risk factors: smoking, hypertension, obesity, genetics, and chemical exposure. Treatment: nephrectomy."
 },
 {
  "id": "q1lu2j0q",
  "topic": "Kidney diseases",
  "q": "Acute pyelonephritis is:",
  "a": "A bacterial infection of the renal pelvis and kidney",
  "d": [
   "A viral infection of the renal pelvis and the kidney tissue",
   "Narrowing of the renal artery by atherosclerotic plaque",
   "Inherited fluid-filled cysts throughout the renal medulla",
   "Mineral stones lodged in the renal calyces and the pelvis",
   "Ischemic death of the renal cortex after severe shock"
  ],
  "why": "Pyelo = pelvis. It most often ascends from a UTI; the hematogenous (blood-borne) route is less common."
 },
 {
  "id": "q1duntr3",
  "topic": "Kidney diseases",
  "q": "Which symptoms are typical of acute pyelonephritis?",
  "a": "Fever, chills, flank pain, and painful urination",
  "d": [
   "Painless enlargement of both kidneys over decades",
   "Very dilute polyuria with no fever and no flank pain",
   "Jaundice, itching, and pale clay-colored stools",
   "Sudden anuria after childbirth with no fever at all",
   "High blood pressure with no urinary symptoms at all"
  ],
  "why": "It is an infection, so fever and flank pain (costovertebral angle tenderness) are key. Treatment is antibiotics."
 },
 {
  "id": "qrmdntn",
  "topic": "Kidney diseases",
  "q": "About what share of acute pyelonephritis cases are caused by E. coli?",
  "a": "About 75–95%",
  "d": [
   "About 1–5%",
   "About 5–10%",
   "Roughly 40–50%",
   "Roughly 25–35%",
   "None; it is viral"
  ],
  "why": "E. coli from the gut flora is by far the most common cause."
 },
 {
  "id": "q2bn4km",
  "topic": "Kidney diseases",
  "q": "Which disease is MOST associated with cysts at the corticomedullary junction and salt wasting?",
  "a": "Medullary cystic kidney disease",
  "d": [
   "Renal artery stenosis",
   "Calcium oxalate kidney stones",
   "Acute pyelonephritis",
   "Renal cell carcinoma",
   "Renal cortical necrosis after shock"
  ],
  "why": "MCKD hits the tubules: the kidneys fail to reclaim sodium and cannot concentrate urine."
 },
 {
  "id": "qoyfs8s",
  "topic": "Bladder & urethra",
  "q": "What is the smooth muscle of the bladder wall that contracts to expel urine?",
  "a": "Detrusor muscle",
  "d": [
   "Levator ani",
   "Trigone muscle",
   "Internal oblique",
   "Urethral sphincter",
   "Cremaster muscle"
  ],
  "why": "The detrusor contracts (parasympathetic) during urination."
 },
 {
  "id": "q767kof",
  "topic": "Bladder & urethra",
  "q": "Which urethral sphincter is under VOLUNTARY control?",
  "a": "The external sphincter (skeletal muscle)",
  "d": [
   "The detrusor muscle (smooth muscle)",
   "The trigone (smooth muscle)",
   "The internal urethral sphincter (smooth muscle)",
   "Both sphincters equally (skeletal muscle)",
   "Neither sphincter (both are smooth muscle)"
  ],
  "why": "Internal = smooth muscle, involuntary. External = skeletal muscle, voluntary."
 },
 {
  "id": "q1r1ru2e",
  "topic": "Bladder & urethra",
  "q": "Why are females much more prone to urinary tract infections?",
  "a": "Their urethra is short and opens near the anus",
  "d": [
   "Their urethra is about 20 cm long",
   "Females have no urethral sphincters",
   "Female urine is always strongly alkaline",
   "Females lack a detrusor muscle",
   "Their urethra passes through the prostate gland"
  ],
  "why": "A short path with fecal bacteria nearby makes it easier for bacteria to ascend."
 },
 {
  "id": "qy246ey",
  "topic": "Bladder & urethra",
  "q": "Why do older males often have slow, frequent, or difficult urination?",
  "a": "An enlarged prostate (BPH) squeezes the urethra",
  "d": [
   "Their urethra becomes shorter with age",
   "The detrusor turns into skeletal muscle",
   "The kidneys stop making urine with age",
   "The ureters close off where they enter the bladder",
   "The bladder (detrusor) shrinks to half its old size"
  ],
  "why": "The prostate surrounds the first part of the male urethra."
 },
 {
  "id": "q1814q2",
  "topic": "Bladder & urethra",
  "q": "How can you tell a male bladder/urethra diagram from a female one?",
  "a": "The male shows a prostate and a long urethra",
  "d": [
   "The female diagram shows a prostate below the bladder",
   "The male has no internal urethral sphincter at the neck",
   "The female urethra is the longer one, at about 20 cm",
   "The male bladder has no detrusor muscle in its wall",
   "They look identical, so you cannot tell them apart"
  ],
  "why": "Male urethra about 20 cm, passing through the prostate and penis; female about 4 cm."
 },
 {
  "id": "q1sfblrz",
  "topic": "Bladder & urethra",
  "q": "Why can urine problems affect fertility more in males than in females?",
  "a": "The male urethra carries both urine and semen",
  "d": [
   "Females have no urethra, so urine never meets eggs",
   "Male urine is always strongly acidic and kills sperm",
   "Females store their eggs inside the bladder wall",
   "The male bladder wall is where the sperm are made",
   "Female kidneys secrete estrogen that protects the urine"
  ],
  "why": "Infections or blockages in the male urethra or prostate can affect semen."
 },
 {
  "id": "q8ht71p",
  "topic": "Bladder & urethra",
  "q": "Which structures carry urine from the kidneys to the bladder?",
  "a": "The two ureters",
  "d": [
   "The urethra",
   "The calyces",
   "The renal arteries",
   "The vas deferens",
   "The collecting ducts"
  ],
  "why": "Ureters run kidney → bladder; the urethra runs bladder → outside."
 },
 {
  "id": "q1jkz4a5",
  "topic": "Endocrine glands & hormones",
  "q": "On the lab models, where are the parathyroid glands found?",
  "a": "On the posterior surface of the thyroid gland",
  "d": [
   "On the anterior surface of the trachea below the thyroid",
   "Inside the sella turcica beneath the hypothalamus",
   "On the superior pole of each kidney",
   "In the superior mediastinum behind the sternum",
   "Embedded in the head of the pancreas near the duodenum"
  ],
  "why": "There are usually four small parathyroids on the back of the thyroid lobes."
 },
 {
  "id": "q4ejumm",
  "topic": "Endocrine glands & hormones",
  "q": "On the lab models, where do the adrenal glands sit?",
  "a": "On the superior pole of each kidney",
  "d": [
   "On the posterior surface of the thyroid",
   "Inside the renal pelvis of each kidney",
   "In the fat between the stomach and spleen",
   "Under the brain in the sella turcica",
   "Along the inferior pole of each kidney"
  ],
  "why": "Ad-renal = \"near the kidney.\" They sit like caps on top of each kidney."
 },
 {
  "id": "q1go8d0x",
  "topic": "Endocrine glands & hormones",
  "q": "In which bony depression does the pituitary gland sit?",
  "a": "The sella turcica of the sphenoid bone",
  "d": [
   "The foramen magnum of the occipital bone",
   "The jugular foramen of the temporal bone",
   "The cribriform plate of the ethmoid bone",
   "The mandibular fossa of the temporal bone",
   "The supraorbital notch of the frontal bone"
  ],
  "why": "The pituitary hangs from the hypothalamus by the infundibulum and rests in the sella turcica."
 },
 {
  "id": "q1t0wwm5",
  "topic": "Endocrine glands & hormones",
  "q": "What stalk connects the pituitary gland to the hypothalamus?",
  "a": "The infundibulum",
  "d": [
   "The fornix",
   "The epithalamus",
   "The optic tract",
   "The corpus callosum",
   "The cerebral aqueduct"
  ],
  "why": "Hypothalamic axons to the posterior pituitary and the portal vessels to the anterior pituitary both run through the infundibulum."
 },
 {
  "id": "q1b6au4z",
  "topic": "Endocrine glands & hormones",
  "q": "Which hormone does the pineal gland secrete?",
  "a": "Melatonin, which helps set the sleep–wake cycle",
  "d": [
   "Oxytocin, which drives uterine contraction",
   "Thymosin, which helps T cells mature",
   "Cortisol, which raises blood glucose",
   "Calcitonin, which lowers blood calcium",
   "Prolactin, which drives milk production after birth"
  ],
  "why": "Melatonin rises in darkness and sets circadian rhythm."
 },
 {
  "id": "q1bk8ls0",
  "topic": "Endocrine glands & hormones",
  "q": "Where is the thymus on the models, and what does it secrete?",
  "a": "Superior mediastinum, behind the sternum; thymosins",
  "d": [
   "On top of each kidney; aldosterone",
   "Left upper abdomen, near the stomach; insulin",
   "Posterior surface of the thyroid; parathyroid hormone",
   "Deep in the brain, behind the third ventricle; melatonin",
   "In the pelvis, behind the urinary bladder; inhibin B"
  ],
  "why": "The thymus is large in children and shrinks (involutes) after puberty."
 },
 {
  "id": "qzfzl9i",
  "topic": "Endocrine glands & hormones",
  "q": "On a pituitary slide, how does the ANTERIOR lobe look compared with the posterior lobe?",
  "a": "Densely packed gland cells stained in several colors",
  "d": [
   "Pale, fibrous tissue made mostly of unmyelinated axons",
   "Hollow follicles, each filled with pink-staining colloid",
   "Long parallel cords of pale, lipid-filled cells",
   "Rows of seminiferous tubules lined by germ cells",
   "Hexagonal liver lobules, each arranged around a central vein"
  ],
  "why": "The anterior lobe is glandular, with acidophils, basophils, and chromophobes. The posterior lobe is pale nervous tissue."
 },
 {
  "id": "qx3dzhp",
  "topic": "Endocrine glands & hormones",
  "q": "On a pituitary slide, the POSTERIOR lobe looks pale and fibrous because it is mostly:",
  "a": "Axons from the hypothalamus plus pituicytes",
  "d": [
   "Densely packed acidophils and basophils",
   "Thyroid follicles filled with pink colloid",
   "Clusters of chromaffin cells and capillaries",
   "Hepatocyte plates and sinusoids",
   "Lymphatic nodules with germinal centers"
  ],
  "why": "The posterior pituitary is neural tissue: it stores and releases ADH and oxytocin made in the hypothalamus."
 },
 {
  "id": "q1g962jk",
  "topic": "Endocrine glands & hormones",
  "q": "On a thyroid slide, what is the pink material filling each follicle?",
  "a": "Colloid, which stores thyroglobulin (T3/T4 precursor)",
  "d": [
   "Red blood cells that leaked from capillaries (a hemorrhage)",
   "Calcitonin made by the parafollicular (C) cells",
   "Mucus secreted by goblet cells (lubrication)",
   "Bile made by the follicular cells (fat digestion)",
   "Lymph that drains in from the deep cervical (neck) nodes"
  ],
  "why": "The follicular cells make thyroglobulin, store it as colloid, and cleave T3/T4 from it when TSH stimulates them."
 },
 {
  "id": "q132bxhl",
  "topic": "Endocrine glands & hormones",
  "q": "On a testis slide, which cells between the seminiferous tubules secrete testosterone?",
  "a": "Interstitial (Leydig) cells",
  "d": [
   "Sertoli (sustentacular) cells",
   "Primary spermatocytes",
   "Granulosa (follicular) cells",
   "Myoid (peritubular) cells",
   "Parafollicular (C) cells"
  ],
  "why": "LH stimulates the Leydig cells. Sertoli cells (inside the tubules) support sperm and secrete inhibin."
 },
 {
  "id": "q1fi3gvi",
  "topic": "Endocrine glands & hormones",
  "q": "Which testis cells secrete inhibin?",
  "a": "Sertoli (sustentacular) cells",
  "d": [
   "Interstitial (Leydig) cells",
   "Spermatids (late germ cells)",
   "Chromaffin (medulla) cells",
   "Theca (ovarian follicle) cells",
   "Parafollicular (thyroid C) cells"
  ],
  "why": "FSH acts on the Sertoli cells; they secrete inhibin, which feeds back to suppress FSH."
 },
 {
  "id": "q1e5ubtj",
  "topic": "Endocrine glands & hormones",
  "q": "On an ovary slide, which cells of a developing follicle secrete estrogen?",
  "a": "Granulosa (follicle) cells",
  "d": [
   "Corpus albicans cells",
   "Interstitial (Leydig) cells",
   "Sertoli (nurse) cells",
   "The oocyte cytoplasm",
   "Tunica albuginea fibroblasts"
  ],
  "why": "Granulosa cells (with the theca cells) make estrogen as the follicle grows."
 },
 {
  "id": "q1wakimm",
  "topic": "Endocrine glands & hormones",
  "q": "After ovulation, which ovarian structure secretes mainly progesterone?",
  "a": "The corpus luteum (yellow body)",
  "d": [
   "The corpus albicans (scar)",
   "The primordial follicle",
   "The ovarian medulla (core)",
   "The tunica albuginea",
   "The germinal epithelium"
  ],
  "why": "The corpus luteum forms from the ruptured follicle. Progesterone maintains the uterine lining; if there is no pregnancy, it degenerates into the corpus albicans."
 },
 {
  "id": "q1t68jh3",
  "topic": "Endocrine glands & hormones",
  "q": "On a pancreas slide, how do the islets of Langerhans appear?",
  "a": "As pale clusters scattered among darker acini",
  "d": [
   "As hollow follicles filled with pink colloid",
   "As the darkest, most tightly packed acinar clusters",
   "As long cords of cells arranged in parallel rows",
   "As hexagonal lobules arranged around a central vein",
   "As striated bands of skeletal muscle between ducts"
  ],
  "why": "The islets are endocrine \"islands\" within the exocrine acinar tissue."
 },
 {
  "id": "qekkhp1",
  "topic": "Endocrine glands & hormones",
  "q": "Where is the hypothalamus located?",
  "a": "Below the thalamus, in the third ventricle's floor",
  "d": [
   "In the cerebellum, behind the brainstem",
   "Inside the sella turcica, below the pituitary",
   "Above the corpus callosum, deep in the frontal lobe",
   "In the posterior epithalamus, as a pinecone-shaped body",
   "Above the thalamus, in the roof of the third ventricle"
  ],
  "why": "The hypothalamus is part of the diencephalon. The pituitary hangs below it."
 },
 {
  "id": "q172aess",
  "topic": "Endocrine glands & hormones",
  "q": "What do PTH and calcitonin do to blood calcium?",
  "a": "PTH raises blood calcium, and calcitonin lowers it",
  "d": [
   "PTH lowers blood calcium; calcitonin raises it",
   "Both raise blood calcium, so they work together",
   "Neither affects calcium; both mainly control glucose",
   "PTH raises blood glucose, while calcitonin lowers it",
   "Both lower blood calcium by depositing it into the bone"
  ],
  "why": "They are antagonists: PTH pulls calcium from bone and tells the kidney to keep it; calcitonin deposits it in bone."
 },
 {
  "id": "qm7u0kq",
  "topic": "Stress response & endocrine drugs",
  "q": "The stress lab materials include a \"Set of Math Problems.\" What kind of stressor do they provide?",
  "a": "A mental (psychological) stressor",
  "d": [
   "A temperature (cold) stressor",
   "A postural (orthostatic) stressor",
   "A physical (exercise) stressor",
   "A pain (nociceptive) stressor",
   "A fluid-loss (dehydration) stressor"
  ],
  "why": "Timed mental work (e.g., arithmetic) also triggers a sympathetic response that raises HR and BP."
 },
 {
  "id": "qgux41q",
  "topic": "Stress response & endocrine drugs",
  "q": "In the Orthostatic protocol, what happens right after standing up?",
  "a": "Blood pools in the legs, BP dips, and the baroreflex raises HR",
  "d": [
   "BP rises sharply, so the HR slows to compensate",
   "Blood rushes to the head, so the HR stops briefly",
   "The parasympathetic system takes over and HR falls",
   "Nothing changes, because posture has no real effect on BP at all",
   "Blood pools in the head, BP rises, and the baroreflex slows the HR"
  ],
  "why": "Gravity pools venous blood → less venous return → BP dips → baroreceptors trigger sympathetic output → HR and BP recover."
 },
 {
  "id": "q1pw1rjt",
  "topic": "Stress response & endocrine drugs",
  "q": "In the ice-water (cold pressor) test, what is the typical cardiovascular response?",
  "a": "BP rises from sympathetic vasoconstriction",
  "d": [
   "BP falls from reflex vasodilation in the hand",
   "HR stops increasing after the very first second",
   "BP stays exactly the same in every test subject",
   "HR drops below resting from vagal activation",
   "BP rises only after the hand is removed from ice"
  ],
  "why": "Cold and pain → sympathetic surge → arteriolar constriction → higher BP."
 },
 {
  "id": "qn71trk",
  "topic": "Stress response & endocrine drugs",
  "q": "What is the slower HORMONAL stress axis that supports the response over minutes to hours?",
  "a": "CRH → ACTH → cortisol from the adrenal cortex",
  "d": [
   "TRH → TSH → calcitonin from the thyroid gland",
   "GnRH → LH → testosterone from the Leydig cells",
   "Oxytocin → prolactin → milk from the mammary gland",
   "Renin → angiotensin → epinephrine from the medulla",
   "CRH → ACTH → epinephrine from the adrenal medulla"
  ],
  "why": "This is the HPA axis. Cortisol raises blood glucose and supports BP during prolonged stress."
 },
 {
  "id": "q1adkvoz",
  "topic": "Stress response & endocrine drugs",
  "q": "Why does the stress lab average HR and BP across everyone at the table?",
  "a": "To reduce the effect of individual variation",
  "d": [
   "Because one person's data is never accurate",
   "Because the BP cuffs only work on groups",
   "Because each person tests a different stressor",
   "To avoid having to take before-and-after values",
   "To make the bars on the bar graph look taller"
  ],
  "why": "Averaging makes the group's pattern (before → during → after) clearer than any one person's."
 },
 {
  "id": "q1ot9krm",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Which is a function of BLOOD but not of lymph?",
  "a": "Carrying oxygen bound to red blood cells",
  "d": [
   "Being filtered through lymph nodes",
   "Carrying absorbed dietary fats from the lacteals",
   "Moving through thin-walled vessels that have valves",
   "Collecting excess fluid that leaks out of capillaries",
   "Picking up stray pathogens from the tissue spaces"
  ],
  "why": "Lymph has no RBCs. Blood transports O₂, nutrients, CO₂, and hormones; it clots, distributes heat, and helps with immunity."
 },
 {
  "id": "qt1rwh4",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Which is NOT a function of blood?",
  "a": "Absorbing dietary fats from the intestinal villi",
  "d": [
   "Transporting O₂ and nutrients to the tissues",
   "Carrying CO₂ from the tissues to the lungs",
   "Clotting to stop bleeding from a wound",
   "Carrying hormones to their target cells",
   "Distributing body heat to the skin"
  ],
  "why": "Fat absorption is the job of the lacteals (lymphatic capillaries), not blood capillaries."
 },
 {
  "id": "q1s269r6",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "How does lymph differ from blood in its contents?",
  "a": "It lacks RBCs; it is mostly water, solutes, and lymphocytes",
  "d": [
   "It has more RBCs than blood, plus platelets and plasma",
   "It has platelets but no water; it is mostly protein",
   "It is identical to whole blood, cell for cell",
   "It has only red blood cells and no white cells at all",
   "It is pure plasma protein, with no water, salts, or any cells"
  ],
  "why": "Lymph resembles interstitial fluid; after a fatty meal, intestinal lymph (chyle) is milky with fat."
 },
 {
  "id": "qnobw6",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "In a lymph node, what are the lymphatic follicles of the outer cortex, with their germinal centers, mostly made of?",
  "a": "B lymphocytes",
  "d": [
   "Neutrophils",
   "Hepatocytes",
   "Helper T cells",
   "Red blood cells",
   "Smooth muscle cells"
  ],
  "why": "Germinal centers are where activated B cells multiply. T cells live mainly in the deeper paracortex."
 },
 {
  "id": "qyc7m6l",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "What is the path of lymph through a lymph node?",
  "a": "Afferent → subcapsular → cortical → medullary sinuses → efferent",
  "d": [
   "Efferent → medullary → cortical → subcapsular sinus → afferent",
   "Afferent → medullary → cortical → subcapsular sinus → efferent",
   "Afferent → germinal center → capsule → efferent",
   "Afferent → efferent vessel directly, skipping all of the sinuses",
   "Hilum → medullary → cortical → subcapsular sinuses → afferent vessel"
  ],
  "why": "Lymph percolates through the sinuses past macrophages and lymphocytes before leaving at the hilum."
 },
 {
  "id": "qmrx5hm",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "Where is the spleen, and what do its gastric, colic, and renal impressions show?",
  "a": "Left upper abdomen; dents from the stomach, colon, and left kidney",
  "d": [
   "Right upper abdomen; dents from the liver and gallbladder",
   "Pelvis; dents from the bladder, uterus, and rectum",
   "Behind the sternum; dents from the heart and lungs",
   "Left upper abdomen; dents from the heart, lung, and liver",
   "Left lower abdomen; dents from the ovary, uterus, and sigmoid colon"
  ],
  "why": "The spleen sits under ribs 9–11 on the left. The impressions are dents made by neighboring organs."
 },
 {
  "id": "q17cvm82",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "In the spleen, what is the difference between white pulp and red pulp?",
  "a": "White pulp holds lymphocytes; red pulp removes old RBCs",
  "d": [
   "White pulp destroys old RBCs; red pulp makes the lymphocytes",
   "White pulp is fat tissue; red pulp is smooth muscle tissue",
   "White pulp makes bile; red pulp stores and concentrates it",
   "Both are made only of red cells; the names reflect stain color",
   "White pulp stores platelets; red pulp makes new red blood cells"
  ],
  "why": "White pulp is immune function; red pulp (venous sinuses and splenic cords) is the blood filter and RBC graveyard."
 },
 {
  "id": "q1fwkq2w",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "On a lymphatic vessel slide, what feature prevents lymph from flowing backward?",
  "a": "Valves formed from folds of the inner lining",
  "d": [
   "A thick layer of skeletal muscle",
   "Sphincters made of hyaline cartilage",
   "Tight elastic arteries pressing on them",
   "Cilia that sweep the lymph forward",
   "Red blood cells that pack into and block the lumen"
  ],
  "why": "Lymphatics are thin-walled vessels with many valves, which gives them a beaded look."
 },
 {
  "id": "q1l6xjuh",
  "topic": "Lymphatic anatomy & lymph flow",
  "q": "What is a lacteal?",
  "a": "A lymphatic capillary in a villus that absorbs fat",
  "d": [
   "A blood capillary inside a liver lobule",
   "A milk-producing gland in the stomach wall",
   "A lymph node in the mesentery of the gut",
   "A duct carrying bile into the duodenum",
   "A one-way valve inside the thoracic duct"
  ],
  "why": "Lacteals carry chylomicrons (fat) as milky chyle into the lymphatic system."
 },
 {
  "id": "qlot6d5",
  "topic": "Immune definitions & lymphatic organs",
  "q": "The MMR vaccine protects against which diseases?",
  "a": "Measles, mumps, and rubella",
  "d": [
   "Measles, mumps, and rabies",
   "Measles, mpox, and rotavirus",
   "Meningitis, malaria, and rabies",
   "Mumps, meningococcus, and RSV",
   "Malaria, measles, and rubella"
  ],
  "why": "All three are viral; MMR is a live attenuated vaccine."
 },
 {
  "id": "q1mb9cnn",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Why is the tetanus vaccine a toxoid vaccine?",
  "a": "The disease is caused by a toxin, so it uses an inactivated toxin",
  "d": [
   "Tetanus is a virus, so it cannot be grown in a lab to make a vaccine",
   "Tetanus is caused by a soil fungus, so it uses killed fungal spores",
   "The vaccine contains live bacteria, weakened so that they cannot spread",
   "It spreads by coughing, so the vaccine is given as an inhaled nasal spray",
   "It is made only from horse antibodies, so it gives passive immunity"
  ],
  "why": "The toxin (tetanospasmin) causes the muscle spasms (\"lockjaw\"); antibodies against the toxoid neutralize it."
 },
 {
  "id": "q1437dqg",
  "topic": "Immune definitions & lymphatic organs",
  "q": "The HPV vaccine helps prevent which of the following?",
  "a": "Cervical and other HPV-related cancers",
  "d": [
   "Hepatitis B and liver cancer",
   "Shingles and its nerve pain",
   "Pneumonia and bacterial meningitis",
   "Measles and measles encephalitis",
   "Polio and the resulting paralysis"
  ],
  "why": "High-risk HPV types cause most cervical cancers, along with some throat, anal, and genital cancers."
 },
 {
  "id": "q1qfsykn",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Shingles (herpes zoster) is caused by:",
  "a": "Reactivation of the chickenpox virus (VZV)",
  "d": [
   "A new infection with the measles virus",
   "The bacterium that causes whooping cough",
   "The influenza virus infecting the skin",
   "A fungal infection of the sensory nerves",
   "Reactivation of the rubella (German measles) virus"
  ],
  "why": "After chickenpox, the virus hides in sensory ganglia and can reactivate later in life."
 },
 {
  "id": "q1v9blad",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Hib (Haemophilus influenzae type b) is:",
  "a": "A bacterium that can cause meningitis in children",
  "d": [
   "The virus that causes seasonal influenza",
   "A fungus that infects the lungs of infants",
   "The virus that causes chickenpox and later shingles",
   "A parasite spread to young children by mosquito bites",
   "A toxin produced by the bacterium that causes tetanus"
  ],
  "why": "Despite the name, Hib is not influenza. It was a leading cause of childhood bacterial meningitis before the vaccine."
 },
 {
  "id": "qsg7tv8",
  "topic": "Immune definitions & lymphatic organs",
  "q": "Hepatitis B vaccination mainly protects which organ?",
  "a": "The liver",
  "d": [
   "The skin",
   "The kidneys",
   "The spleen",
   "The pancreas",
   "The stomach"
  ],
  "why": "Chronic hepatitis B can lead to cirrhosis and liver cancer, so the vaccine also prevents a cancer."
 },
 {
  "id": "qz0qp9x",
  "topic": "Immune definitions & lymphatic organs",
  "q": "What is herd (community) immunity?",
  "a": "When enough people are immune that even the unvaccinated are shielded",
  "d": [
   "When one person becomes immune to every disease at once",
   "When animals pass their immunity on to nearby humans",
   "When antibodies are shared between people through the air",
   "When a vaccine only works if given to large groups",
   "When everyone in a community catches the same disease at the same time"
  ],
  "why": "High coverage protects infants, the immunocompromised, and others who cannot be vaccinated."
 },
 {
  "id": "qe9x7lp",
  "topic": "Mechanical digestion stations",
  "q": "What are the two most common causes of gastric (peptic) ulcers?",
  "a": "Helicobacter pylori infection and NSAID use",
  "d": [
   "Spicy food and emotional stress",
   "Lactose intolerance and a gluten sensitivity",
   "Too little stomach acid and heavy caffeine use",
   "Gallstones and inflammation of the pancreas",
   "E. coli food poisoning and severe dehydration"
  ],
  "why": "H. pylori and NSAIDs (aspirin, ibuprofen) weaken the protective mucus barrier."
 },
 {
  "id": "qtcpra1",
  "topic": "Mechanical digestion stations",
  "q": "Which stomach cells secrete hydrochloric acid?",
  "a": "Parietal cells",
  "d": [
   "Chief cells",
   "Goblet cells",
   "Acinar cells",
   "Kupffer cells",
   "Mucous neck cells"
  ],
  "why": "Parietal cells make HCl (and intrinsic factor). Chief cells make pepsinogen."
 },
 {
  "id": "q1ncknss",
  "topic": "Mechanical digestion stations",
  "q": "Which stomach cells secrete pepsinogen?",
  "a": "Chief (zymogenic) cells",
  "d": [
   "Parietal cells",
   "G (gastrin) cells",
   "Mucous neck cells",
   "Enteroendocrine cells",
   "Goblet cells"
  ],
  "why": "Pepsinogen is activated to pepsin by stomach acid."
 },
 {
  "id": "qbi4g7x",
  "topic": "Mechanical digestion stations",
  "q": "What lines the stomach mucosa?",
  "a": "Simple columnar epithelium with gastric pits",
  "d": [
   "Nonkeratinized stratified squamous epithelium",
   "Transitional epithelium (urothelium)",
   "Simple squamous epithelium (mesothelium)",
   "Keratinized stratified squamous epithelium",
   "Pseudostratified ciliated epithelium"
  ],
  "why": "At the gastroesophageal junction, stratified squamous (esophagus) abruptly changes to simple columnar (stomach)."
 },
 {
  "id": "qf7loyd",
  "topic": "Mechanical digestion stations",
  "q": "What muscle type is in the muscularis externa of the esophagus?",
  "a": "Skeletal above, mixed in the middle, smooth below",
  "d": [
   "Smooth muscle along the entire length",
   "Skeletal muscle along the entire length of the tube",
   "Smooth above, mixed in the middle, and skeletal below",
   "Smooth above, with cardiac muscle in the lower third",
   "No muscle at all; only dense connective tissue layers"
  ],
  "why": "This is why swallowing starts voluntarily and finishes involuntarily (peristalsis)."
 },
 {
  "id": "q1y5ppuw",
  "topic": "Mechanical digestion stations",
  "q": "Colorectal cancer usually begins as:",
  "a": "A polyp (adenoma) growing from the mucosa",
  "d": [
   "A tumor of the muscularis externa (sarcoma)",
   "A fluid-filled cyst (pouch) in the serosa layer",
   "An infection of the appendix (appendicitis)",
   "An ulcer (sore) caused by H. pylori infection",
   "A stone (fecalith) blocking the anal canal"
  ],
  "why": "Colonoscopy finds and removes polyps before they become cancer."
 },
 {
  "id": "qiltcgj",
  "topic": "Mechanical digestion stations",
  "q": "Which features are found in the large intestine but not the small intestine?",
  "a": "Haustra and taeniae coli, with no villi",
  "d": [
   "Long villi and Peyer's patches",
   "Plicae circulares and lacteals",
   "Rugae and deep gastric pits",
   "Brush-border lactase and long villi",
   "Villi and microvilli, with no muscle bands"
  ],
  "why": "Taeniae coli are three bands of longitudinal muscle that bunch the colon into pouches (haustra)."
 },
 {
  "id": "qup8qe7",
  "topic": "Mechanical digestion stations",
  "q": "How many deciduous (baby) and permanent teeth do humans have?",
  "a": "20 deciduous and 32 permanent",
  "d": [
   "32 deciduous, 20 permanent",
   "24 deciduous, 28 permanent",
   "20 deciduous, 28 permanent",
   "16 deciduous and 32 permanent teeth",
   "28 deciduous and 36 permanent teeth"
  ],
  "why": "There are no premolars or third molars in the deciduous set."
 },
 {
  "id": "q2ch1w5",
  "topic": "Mechanical digestion stations",
  "q": "What does the tooth pulp contain?",
  "a": "Nerves and blood vessels in loose connective tissue",
  "d": [
   "Hard dentin filled with tiny parallel tubules",
   "Mineralized enamel prisms (hydroxyapatite)",
   "Cementum that anchors the root to the bone",
   "Saliva that seeps in from the salivary ducts",
   "Periodontal ligament fibers anchoring it to the socket"
  ],
  "why": "When a cavity reaches the pulp, it hurts and may need a root canal."
 },
 {
  "id": "q13l8fj5",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "What does the gallbladder do?",
  "a": "Stores and concentrates bile made by the liver",
  "d": [
   "Produces bile from old red blood cells",
   "Secretes lipase and other enzymes into the duodenum",
   "Produces insulin and glucagon from its own islets",
   "Absorbs fats directly from the gut into the blood",
   "Filters old red blood cells out of the bloodstream"
  ],
  "why": "When fat enters the duodenum, the hormone CCK makes the gallbladder contract and release bile."
 },
 {
  "id": "q15i32nk",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "What does bile do in fat digestion?",
  "a": "Bile salts emulsify fat into droplets for lipase",
  "d": [
   "Bile neutralizes pepsin in the stomach",
   "Bile is a lipase enzyme that splits fat into glycerol",
   "Bile salts absorb fatty acids straight into the blood",
   "Bile salts convert fat into glucose for the liver",
   "Bile salts digest proteins into amino acids in the duodenum"
  ],
  "why": "Emulsification increases surface area; bile itself contains no digestive enzymes."
 },
 {
  "id": "q1q7jcsw",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "What are Kupffer cells in the liver?",
  "a": "Sinusoid macrophages that clear bacteria and old RBCs",
  "d": [
   "The hepatocytes that produce and secrete bile",
   "Cuboidal epithelial cells lining the bile ducts",
   "Stellate cells that store fat and vitamin A",
   "Endocrine cells that secrete insulin into blood",
   "Smooth muscle cells in the central vein wall"
  ],
  "why": "Kupffer cells clean blood arriving from the gut through the hepatic portal vein."
 },
 {
  "id": "q1mwqbvd",
  "topic": "Small intestine, liver, gallbladder & pancreas",
  "q": "Where do the common bile duct and the main pancreatic duct usually empty?",
  "a": "Into the duodenum at the hepatopancreatic ampulla",
  "d": [
   "Separately into the stomach and the jejunum",
   "Back into the gallbladder for storage",
   "Into the hepatic portal vein near the liver",
   "Into the ileum near the ileocecal valve",
   "Into the cystic duct above the gallbladder"
  ],
  "why": "The sphincter of Oddi controls the release of bile and pancreatic juice into the duodenum."
 },
 {
  "id": "q7mn6i0",
  "topic": "Urinalysis",
  "q": "In the urinometer exercise, urine F reads 1.005 and urine G reads 1.028. Which is correct?",
  "a": "F is more dilute; G is more concentrated",
  "d": [
   "F is more concentrated; G is the more dilute",
   "Both are equally concentrated urine samples",
   "Both are abnormal and must contain glucose",
   "G is essentially pure water with no solutes",
   "F must contain protein because it is so low"
  ],
  "why": "A specific gravity near 1.000 (water) means dilute; values near 1.030 mean concentrated."
 },
 {
  "id": "q4wk39u",
  "topic": "Kidney anatomy & blood flow",
  "q": "What is the renal hilum?",
  "a": "The medial notch where vessels and the ureter enter or leave",
  "d": [
   "The outer layer of cortex just beneath the capsule",
   "The tip of a renal pyramid that drains into a calyx",
   "The band of cortex that dips between two pyramids",
   "The cup-shaped chamber that collects the urine from one papilla",
   "The fat-filled capsule that surrounds the adrenal gland on top"
  ],
  "why": "The hilum opens into the renal sinus, which holds the pelvis, calyces, vessels, and fat."
 },
 {
  "id": "q1fnhtli",
  "topic": "Kidney anatomy & blood flow",
  "q": "What is a renal papilla?",
  "a": "The tip of a pyramid that drains into a minor calyx",
  "d": [
   "A band of cortex between two pyramids",
   "The tough outer fibrous capsule that encloses the kidney",
   "The point at the hilum where the ureter leaves the kidney",
   "An arcuate artery arching over the base of a pyramid",
   "A small fluid-filled cyst found deep in the renal medulla"
  ],
  "why": "Collecting ducts open at the papilla. Stones and papillary necrosis affect this region."
 },
 {
  "id": "qdym2nr",
  "topic": "Bladder & urethra",
  "q": "What is the trigone of the bladder?",
  "a": "The triangle formed by the ureter and urethra openings",
  "d": [
   "The muscle layer that contracts to empty the bladder",
   "The voluntary skeletal-muscle sphincter around the urethra",
   "The fold where each ureter joins the renal pelvis of the kidney",
   "The dome-shaped top of the bladder, covered by peritoneum",
   "The gland that surrounds the first part of the male urethra"
  ],
  "why": "The trigone is smooth (no rugae), and infections often persist there."
 },
 {
  "id": "q1xitd5h",
  "topic": "Bladder & urethra",
  "q": "What epithelium lines the bladder, and why?",
  "a": "Transitional epithelium, which stretches as the bladder fills",
  "d": [
   "Simple columnar epithelium, which absorbs water from urine",
   "Simple cuboidal epithelium, which secretes into the urine",
   "Simple squamous epithelium, which allows rapid diffusion of waste",
   "Pseudostratified ciliated epithelium, whose cilia move the urine",
   "Keratinized stratified squamous, which resists acidic urine wear"
  ],
  "why": "Its cells flatten when the bladder is stretched and look rounded when it is empty."
 }
];
