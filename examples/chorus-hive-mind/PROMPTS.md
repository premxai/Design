# Prompts

## Original user prompt

```text
Generate a landing page as a marketing page for joining our Hive Mind. The unique perks of our Hive Mind is that you still get your individual identity. You just pretty much have access to everyone else's mind. And you do get some objectives, but you only work for the Hive Mind one day a week from 9 to 5. You also need to pay 5% on income. In exchange, you get access to a wide network of professionals and opportunities. You come up with the name.
```

## Follow-up instruction

The first turn was interrupted while the agent was preparing to follow a standing delegation rule. The user clarified:

```text
A quick interruption: don't delegate this to Antigravity or anything. That instruction doesn't apply for this test.
```

The rest of the page was designed, implemented, and verified directly by Codex.

## UI reference-generation prompt

```text
Use case: ui-mockup
Asset type: full-screen desktop landing page design reference, 1440x1000 viewport
Primary request: Create a polished marketing landing page mockup for a professional collective named CHORUS. The core promise is: keep your individual identity while gaining access to everyone else's expertise and network. Membership terms are unusually transparent: contribute one weekday per week, 9 to 5, and 5% of income; in exchange receive access to a wide professional network, opportunities, expertise, and shared objectives.
Visual direction: bold editorial Swiss-modernist meets 1970s systems manual, distinctive and credible, not sci-fi and not a generic SaaS page. Warm ivory paper background, near-black typography, vivid vermilion red accent, fine cobalt-blue technical line details. Expressive condensed serif or grotesk display typography paired with readable editorial body type. Full-bleed hero as one composition, no cards, no pills, no purple, no glass, no rounded UI.
Hero copy (render verbatim where possible): brand “CHORUS”; headline “KEEP YOUR NAME. GAIN EVERYONE ELSE’S MIND.”; subcopy “A professional collective for fiercely individual people.”; primary CTA “APPLY TO JOIN”; secondary CTA “READ THE TERMS”.
Dominant visual: an abstract but human network portrait made from many distinct black-and-white face fragments, profile line drawings, fingerprints, hand-drawn marks, and red connector lines converging into a single circular field, while every individual remains visibly distinct. It should span the right half and bleed to the viewport edge, not sit inside a card.
Below the fold visible at bottom: a bold section start “THE EXCHANGE IS SIMPLE.” with three large horizontal terms integrated into the grid: “1 DAY / WEEK”, “9–5”, and “5% OF INCOME”.
Composition/framing: realistic desktop web screenshot, 1440px wide, precise grid, asymmetrical hero, strong CHORUS brand in upper left, sparse utilitarian nav upper right, tight hero budget, refined whitespace, thin rules, editorial numbering.
Motion cues implied by layered linework and staggered type.
Constraints: no dashboard chrome, no hero cards, no pricing cards, no testimonial avatars, no fake metrics, no tiny eyebrow headline, no rounded rectangles, no pill buttons, no purple gradients, no glossy 3D, no watermark.
```

Result: [generated reference mockup](docs/reference-mockup.png)

## Hero artwork-generation prompt

```text
Use case: ads-marketing
Asset type: full-bleed editorial landing page hero artwork, no UI and no text
Primary request: Create the dominant visual artwork for CHORUS, a professional collective where people keep their individual identities while gaining access to everyone else's expertise and network.
Scene/backdrop: warm ivory archival paper with subtle natural grain.
Subject: a large circular systems-map collage containing 24 visibly distinct black-and-white human profile portraits of diverse professionals, arranged around and within concentric technical arcs. Include fingerprint fragments, eye and ear study fragments, handwritten marginal notation shapes without legible words, small grid diagrams, cobalt-blue registration marks, and thin vermilion-red connection lines converging into one central red node. Every portrait should remain separate and recognizable; the network should feel like a chorus of individuals, not merged faces.
Style/medium: sophisticated 1970s systems manual meets contemporary editorial collage; analog cut-paper portrait photography plus precise technical drafting; premium art-direction; credible and slightly uncanny but welcoming.
Composition/framing: wide landscape 3:2 artwork; circular network fills most of frame and is biased slightly right; transparent-feeling negative ivory space at far left for page copy; full-bleed edges; no container/card.
Lighting/mood: flat archival print, tactile, intelligent, collective energy.
Color palette: warm ivory, near-black, vivid vermilion, sparse cobalt blue only.
Constraints: no words, no letters, no numbers, no logos, no UI, no cards, no purple, no neon, no glossy 3D, no watermark.
```

Result: [hero artwork used by the page](assets/chorus-network.png)
