# Visual-language catalog

Choose one primary direction based on the product's real context. Use these as decision systems, not presets to copy wholesale.

| Direction | Best fit | Type roles | Palette and surface | Composition and motion |
| --- | --- | --- | --- | --- |
| Editorial / cultural | Publishing, ideas, institutions, cultural products | Expressive serif or condensed display; quiet serif or sans body | Paper, ink, one sharp accent, visible rules | Asymmetry, generous margins, a single image or typographic statement; restrained reveals |
| Utilitarian / systems | Developer tools, operations, productivity, infrastructure | Clear sans; mono for labels and values | Neutral surfaces, functional status color, high legibility | Compact grids and strong alignment; state changes over decorative motion |
| Warm craft | Food, makers, studios, local services, hospitality | Humanist serif or soft display; approachable sans | Natural pigments, tactile material surfaces, low-gloss contrast | Image-led rhythm, imperfect detail, comfortable spacing; tactile feedback |
| Quiet premium | Fashion, travel, architecture, high-consideration services | High-contrast display serif; minimalist sans utility | Narrow palette, tonal depth, measured accent use | Sparse composition, intentional crops, slow or near-static motion; never generic luxury gradients |
| Optimistic playful | Consumer apps, learning, community, youth-facing tools | Rounded or lively display; highly readable sans body | Bright but limited colors, generous contrast, confident neutrals | Clear modules, playful scale shifts, direct feedback; use rounded forms only when they reinforce the brand |
| Technical future | Browsers, research tools, creative technology, advanced hardware | Condensed/grotesk display; mono utility; readable serif only for long-form reading | Deep ink or pale technical ground, one vivid signal color, diagrams or data marks | Product UI as the visual anchor, precise lines, purposeful parallax or transitions; avoid sci-fi clutter |
| Natural / experiential | Travel, outdoors, wellness, climate, place-based products | Humanist sans or calm serif; utility sans | Earth, sky, water, or seasonal palettes from real imagery | Full-bleed photography, immersive sections, generous pacing; motion should feel environmental and subtle |
| Civic / trusted | Healthcare, public service, education, finance, nonprofit | Highly legible sans or sober serif; utility text with strong hierarchy | Accessible neutral base, semantic color, low visual noise | Clear task flow, practical spacing, explicit states; avoid decorative complexity that obscures trust |
| Raw / expressive | Music, events, portfolios, independent brands | Strong display face with simple supporting text | High contrast, bold ink coverage, limited but assertive accents | Intentional disruption, poster-like type, abrupt scale, decisive motion; retain readability and keyboard usability |

## Selection questions

Answer these before choosing a direction:

1. What should a first-time visitor feel within three seconds?
2. Is the product primarily a tool, a place, a story, a status object, or a relationship?
3. Does the interface need calm concentration, fast scanning, trust, delight, or immersion?
4. What visual material is authentic to the product: photography, product UI, illustration, data, texture, type, or none?
5. What would be clearly wrong for this audience—for example playful motion in clinical care or a luxury sparse layout for an urgent workflow?

## Theme construction

Define a semantic token set rather than hard-coding a palette:

```css
:root {
  --surface: ...;
  --surface-raised: ...;
  --text: ...;
  --text-muted: ...;
  --line: ...;
  --action: ...;
  --signal: ...;
  --focus: ...;
}
```

For optional dark or alternate themes, change token values and re-check contrast and imagery. Do not invert colors mechanically. Change atmosphere, image overlays, borders, and secondary text deliberately while preserving the same information hierarchy.

## Typography construction

Choose a role-based combination:

- **Display:** establish character and first-read hierarchy. Use a serif, grotesk, condensed face, or expressive variable family appropriate to the direction.
- **Body:** optimize for sustained reading and available font sizes; use open counters and comfortable line height.
- **UI:** optimize for fast recognition, controls, and dense labels. It may be the body family at a different weight.
- **Utility:** use monospace only when it communicates technical precision, metadata, or code-like structure.

Limit a page to two or three families. Define a type scale and use it consistently. Verify wrapping at the narrowest supported viewport before treating the pairing as final.

## Anti-repetition check

Before implementation, compare the planned direction to the last project. Change at least three of these when a brand system does not require reuse: surface mode, palette temperature, display type category, body/UI pairing, hero composition, image treatment, geometry, and motion character.
