# Agent entrypoint

For any frontend task in this repository:

1. Read [`skills/human-first-frontend/SKILL.md`](skills/human-first-frontend/SKILL.md).
2. For a new brand or substantial redesign, also read [`skills/human-first-frontend/references/visual-languages.md`](skills/human-first-frontend/references/visual-languages.md) and choose a visual language explicitly.
3. Preserve user requirements, existing product constraints, accessibility, and approved references over aesthetic preferences.
4. Do not reuse the CHORUS, ASTER, or CRYO look by default. Treat each example as a quality and implementation reference, not a template.
5. For visually led work, create or inspect a concrete visual target, build real interactions and assets, then verify at desktop and mobile widths.
6. Do not use fake metrics, decorative dashboard filler, generic rounded-card systems, or non-functional calls to action.

Each example is standalone static HTML/CSS/JavaScript and can be run with `python -m http.server 4173` from its folder.
