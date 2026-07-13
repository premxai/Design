# Design Agent Kit

A portable frontend-design kit for agents that need to create deliberate, human-quality interfaces instead of reusing one template or aesthetic.

## Start here

Before changing or building a frontend, read:

1. [`skills/human-first-frontend/SKILL.md`](skills/human-first-frontend/SKILL.md)
2. [`skills/human-first-frontend/references/visual-languages.md`](skills/human-first-frontend/references/visual-languages.md) for a new brand or substantial redesign

The skill defines the workflow: choose a visual language and style contract, use a concrete visual target when appropriate, implement real interactions and accessible states, then validate with desktop and mobile screenshots.

## Included examples

| Example | Visual language | What to learn from it |
| --- | --- | --- |
| [`examples/chorus-hive-mind`](examples/chorus-hive-mind) | Editorial / cultural | Image-first landing-page process, asymmetrical composition, identity-led branding, and transparent terms. |
| [`examples/aster-browser`](examples/aster-browser) | Technical future, optimistic | A browser product hero with a real image asset, responsive navigation, tabs, reading mode, and a dialog flow. |
| [`examples/cryo-browser`](examples/cryo-browser) | Technical future, frozen Y2K archive | A four-page browser site with search, API/SDK/MCP documentation, and a permission-bounded local agent trace. |

Do not copy an example style by default. Use the examples to study quality, implementation, and interaction patterns; choose the new product's style from its real audience, purpose, and constraints.

## Running an example

Every example is dependency-free static HTML, CSS, and JavaScript. From an example folder:

```bash
python -m http.server 4173
```

Then visit `http://127.0.0.1:4173`.

## For AI agents

[`AGENTS.md`](AGENTS.md) is the short repository entrypoint. The full reusable instructions live in the Human-First Frontend skill. Keep generated raster artwork as real project assets; do not replace it with decorative CSS approximations.

## Provenance

The CHORUS example preserves its original prompts, curated build trace, security review, local image-first frontend skill, and Uncodixify adaptation. Its own README links to the upstream sources that informed the work. The ASTER and CRYO examples were added as intentionally different visual directions to demonstrate that the reusable skill is not a single-style template.
