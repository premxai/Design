---
name: human-first-frontend
description: Design, build, redesign, or polish high-quality web interfaces that feel deliberately art-directed and genuinely useful rather than template-generated. Use for websites, landing pages, application screens, dashboards, component sets, and responsive UI work, especially when visual quality, UX clarity, fidelity to a reference, or screenshot-based refinement matters.
---

# Human-First Frontend

Create interfaces that solve a real user problem, communicate a clear point of view, and work as carefully as they look. Do not treat visual polish as decoration added after layout; make hierarchy, content, interaction, responsiveness, and visual character support one another.

## Precedence

Resolve design decisions in this order:

1. Explicit user requirements, product constraints, and existing brand/accessibility standards.
2. A user-provided or explicitly approved visual reference. Treat it as the source of truth for UI direction, not loose inspiration.
3. The existing product's recognizable structure when improving rather than redesigning it.
4. The chosen visual thesis and the rules in this skill.

If requirements conflict, preserve usability and accessibility, explain the tradeoff briefly, and make the smallest deviation that resolves it.

## Workflow

### 1. Establish the job and the visual thesis

Before editing code, identify:

- audience, task, and the one thing the interface must help them do or understand;
- target surface, viewport(s), content density, technical constraints, and existing system constraints;
- one memorable visual idea: for example editorial, calm utility, archival, tactile, playful, industrial, luxurious, or stripped-back;
- the dominant visual anchor and the intended first-read hierarchy.

Write a short internal brief. Commit to one direction and execute it precisely. Do not combine unrelated fashionable treatments just to make the page feel "designed."

### 1a. Select a visual language deliberately

Do not inherit the previous project's look or default to an editorial CHORUS-like treatment. Select a visual language that fits the product, audience, and desired emotional effect. Read [the visual-language catalog](references/visual-languages.md) before choosing a direction for a new brand or a substantial redesign.

Create a **style contract** before implementation. State:

- the chosen visual language and the reason it fits this product;
- the intended emotional temperature: for example calm, energetic, trusted, intimate, playful, severe, or expansive;
- the surface mode: light, dark, mid-tone, or an intentional transition between surfaces;
- the typography roles: display, body, UI/utility, and numeric/technical when needed;
- the palette roles: base surface, primary text, secondary text, border, action accent, and optional signal color;
- the geometry and motion character: square/precise, soft/organic, bold/rounded, dense/compact, static/quiet, or kinetic.

Keep one primary visual language. Borrow at most one supporting trait from another style when it solves a specific product need. If the user asks for multiple themes, express them through semantic tokens and preserve hierarchy and accessibility in every mode; do not create disconnected skins.

### 2. Obtain or create a visual target

For visually led work, use a concrete target before implementation:

- If the user provides screenshots, a design file, or an approved mockup, inspect it closely.
- For an iteration, capture the current experience first and preserve what the request does not ask to change.
- If image generation is available and the user has not opted out, generate a full-screen UI reference for a new direction. Generate real raster artwork separately when the composition needs it.
- If image generation is unavailable, create a concise visual specification with the same level of specificity before coding.

Analyze the target in practical terms: viewport framing, section proportions, alignment, grid, type scale, color relationships, geometry, background treatment, asset crops, layers, density, and implied motion. Measure relative proportions whenever possible.

Use a generated image as a target to translate, not a license to reproduce its unreadable copy or impossible details. Replace illegible text with concise real copy that preserves the intended hierarchy and line length.

### 3. Build the system before the ornament

Create or reuse a small visual system:

- semantic color tokens for surfaces, text, borders, and accents;
- a spacing scale and responsive gutters;
- purposeful display and body typography with readable fallbacks;
- component geometry, focus treatment, and motion timings;
- image slots with intentional aspect ratio, crop, and layering rules.

Build macro composition first: page rhythm, columns, section heights, major contrast, and the dominant visual. Then tune type, spacing, borders, controls, and micro-interactions. Implement multi-section pages one section at a time; do not rough in everything and hope later polish will repair the composition.

Use real image assets for photos, illustration, collage, texture, or rendered artwork. Do not approximate them with decorative CSS shapes, gradients, or placeholder boxes. Put project-bound assets in a stable project path and reference them from the interface.

### Typography and theme rules

Choose typefaces by role and product character, not from a fixed pair:

- Use expressive display type only where it earns attention; keep utility text legible, compact, and stable.
- Pair families with meaningful contrast: serif + restrained sans, humanist sans + monospace utility, grotesk + editorial serif, or one flexible family with distinct widths/weights.
- Give typography a scale, line-height, casing, and tracking system. Do not use arbitrary one-off font sizes or uppercase labels as decoration.
- Use color as a system of roles, not a list of favorite hex values. Reserve high-chroma accents for actions, alerts, wayfinding, or one deliberate brand signal.
- Make dark, light, and themed modes semantic-token variants. Verify contrast, focus states, artwork treatment, and disabled states in each supported mode.
- Vary the product's composition, type pairing, palette temperature, geometry, and imagery from prior work unless an existing brand system requires continuity.

### 4. Make the UX real

Use semantic HTML and implement the behavior the interface promises. A visually polished non-functional control is a defect.

- Give forms labels, validation, clear errors, and a truthful submission state.
- Make dialogs, menus, disclosure controls, and navigation keyboard-operable with correct focus behavior and accessible names.
- Design loading, empty, error, hover, focus, pressed, selected, and disabled states when the feature needs them.
- Make touch targets practical and mobile navigation intentional.
- Respect reduced-motion preferences. Use motion to clarify hierarchy, state, or spatial continuity—not as ambient noise.

Do not invent fake dashboards, metrics, testimonials, activity feeds, or product capabilities to fill visual space.

## Art Direction Rules

### Make deliberate choices

- Give every section one clear job, one primary message, and an intentional reading order.
- Make brand and product identity visible early; a first viewport should not be interchangeable with another company's.
- Use type, contrast, negative space, asymmetry, density, and imagery with intent. Both restraint and maximalism can work when they are coherent.
- Pair typefaces by role. Avoid default UI type choices when the product calls for character, but do not sacrifice legibility.
- Use a limited, purposeful palette. Let dominant surfaces and accents have distinct jobs.
- Use one strong hero visual or a strong typographic composition instead of several competing modules.
- Match implementation complexity to the design: refined minimalism needs disciplined spacing and detail; expressive work needs enough structure and assets to feel intentional.

### Reject default AI-UI habits

Remove an element if it does not improve comprehension, interaction, or brand presence. In particular, avoid these unless the product genuinely requires them:

- repeated rounded cards, pill clusters, detached glass panels, blur haze, decorative glow, and generic gradient backdrops;
- dashboard-like hero sections, fake metric grids, donut charts, progress bars, or status badges used as filler;
- generic startup copy, eyebrow-label clutter, unexplained icons, decorative labels, and duplicated calls to action;
- arbitrary blue-purple "premium" palettes, default font stacks, or one-size-fits-all component layouts;
- mobile designs that merely stack desktop columns without reconsidering order, scale, crop, and interaction;
- motion that exists only to attract attention.

This is a filter, not a ban on design elements. Use an element when it has a clear product or communication job, not because it is an easy visual shortcut.

## Visual QA Loop

Do not call the UI finished from source code alone.

1. Run the interface and capture screenshots at the reference viewport or required viewport.
2. Capture at least one narrow/mobile viewport for responsive work.
3. Compare the implementation with the target or visual brief in this order: framing, macro layout, hierarchy, image behavior, type scale, spacing, color/contrast, geometry, then small details.
4. Name the largest visible mismatches, fix them, and capture again.
5. Exercise key interactions and check browser errors, keyboard flow, focus visibility, and reduced-motion behavior.

For reference-driven work, do not stop until the first fold, major section rhythm, asset placement, and responsive intent visibly match the target. For original work, validate that the resulting interface still expresses the chosen thesis rather than drifting into generic patterns.

## Definition of Done

Before handoff, verify all applicable items:

- The UI communicates the intended task and hierarchy without relying on decorative explanation.
- The visual system is coherent and tokens are used for repeated decisions.
- Images and artwork are real assets with deliberate crops and stable paths.
- Desktop and mobile layouts are both intentional and usable.
- Interactive elements work, expose the correct state, and support keyboard use.
- Text contrast, focus indication, semantic structure, and reduced-motion behavior are addressed.
- No visible filler UI, fake content, or unearned visual effects remain.
- Screenshots and interaction checks support the claim that the work is ready.

In the handoff, state what changed, the visual direction, the tests or viewports checked, any deliberate limitations, and the paths of created assets.
