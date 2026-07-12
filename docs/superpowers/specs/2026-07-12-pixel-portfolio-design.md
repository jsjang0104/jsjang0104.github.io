# Pixel Portfolio Homepage Design

## Goal

Build a backend-free personal homepage for Jisoo Jang at `jsjang0104.github.io`. The site should be project/portfolio-first, cute, and memorable, while still presenting academic and technical work clearly.

The visual concept is a pixel-art campus scene: a playful, symbolic pixel version of the HUFS main building, with a small duck that wanders around the page using lightweight JavaScript.

## Audience

Primary visitors are professors, lab members, collaborators, scholarship/research reviewers, and people arriving from GitHub, LinkedIn, or the CV PDF. The site should quickly communicate:

- Jisoo works at the intersection of language, AI, and digital humanities.
- Jisoo builds practical language/education/digital archive projects.
- Jisoo has research, teaching, and operations experience connected to HUFS.

## Technical Approach

Use a simple static site with no backend and no build step:

- `index.html` for content and semantic structure.
- `style.css` for layout, pixel-art visuals, responsive design, and animation.
- `script.js` for the wandering duck behavior.
- `cv_pdf.pdf` remains available as the downloadable CV.

This keeps deployment compatible with GitHub Pages and makes future edits easy.

## Information Architecture

The homepage is a single-page portfolio with anchor navigation:

1. `Home`
   - Pixel-art HUFS main building scene.
   - Name: Jisoo Jang / 장지수.
   - Short positioning line: language, AI, and digital humanities.
   - Primary links: CV, GitHub, LinkedIn, email.

2. `Featured Projects`
   - Austrian Library HUFS website and archive work.
   - German Declension Trainer.
   - AI digitization project.
   - Research/evaluation tooling or paper-related work where appropriate.
   - Each project card should show title, short description, role, tags, and link.

3. `Research`
   - Multilingual NLP and evaluation methods.
   - The arXiv paper from the CV.
   - Research assistant experience at HUFS.

4. `Experience`
   - Research Assistant.
   - Austrian Library Operations & Website Administrator.
   - GSIT TA.
   - Department Administrative Assistant.
   - Veterinary nurse experience can appear as a compact background item, not the main emphasis.

5. `Awards & Skills`
   - Scholarships and awards as a compact timeline/list.
   - Languages: Korean, English, German.
   - Tooling: PyTorch, Hugging Face, Linux, Photoshop, CAD, SketchUp.

6. `Contact`
   - Email, GitHub, LinkedIn, and CV download.

## Visual Design

The site should feel cute, clean, and competent.

- Use a pixel-art visual language: crisp borders, small grid details, blocky decorative accents, and stepped shadows.
- Avoid making the page look like a game menu only; project content must remain easy to scan.
- Use a warm, bright palette with sky, grass, campus brick/stone, yellow duck accents, and readable dark text.
- Use CSS-generated pixel art rather than external illustration assets for the building and duck.
- Keep cards compact with clear hierarchy.
- Use responsive layouts so the hero scene, project cards, and duck do not cover text on mobile.

## Pixel HUFS Building

Represent the HUFS main building symbolically, not as a precise architectural copy:

- Central tower-like block.
- Symmetric side wings.
- Repeating pixel windows.
- A front plaza/grass strip where the duck can appear.
- Optional small flags, trees, or signs if they do not clutter the page.

The building should be created in HTML/CSS using small div blocks, CSS grid, pseudo-elements, and box shadows as needed.

## Wandering Duck

Use `script.js` to create a small wandering duck:

- The duck is a positioned page element styled with CSS pixel blocks.
- It picks a random reachable viewport position every few seconds.
- It moves smoothly using CSS transforms.
- It flips horizontally depending on movement direction.
- It has a subtle idle bob or step animation.
- On click or keyboard focus, it performs a small bounce or pause.
- It must never block important text or controls for long.
- Respect `prefers-reduced-motion` by disabling wandering and leaving the duck parked.

The duck can be decorative, so the page must remain fully usable if JavaScript fails.

## Accessibility

- Use semantic HTML sections and headings.
- Provide clear link text and visible focus states.
- Keep contrast high enough for readability.
- Mark decorative pixel art and the duck as `aria-hidden="true"` unless an interactive duck label is added.
- Support reduced motion.
- Ensure keyboard navigation reaches all actual links and buttons.

## Error Handling And Degradation

- If JavaScript fails, the duck remains static or absent; all content and links still work.
- If CSS fails, the HTML content remains readable in document order.
- External project links should open normally; no client-side routing is required.

## Testing And Verification

Before calling the implementation complete:

- Open `index.html` locally and verify the page renders without a build step.
- Check desktop and mobile widths.
- Verify CV, GitHub, LinkedIn, project, and email links.
- Verify the duck wanders, flips direction, and does not permanently cover content.
- Verify reduced-motion behavior.
- Confirm the page works without network access.

## Out Of Scope

- Backend, forms, database, analytics, or CMS.
- React, Vite, Astro, or other build tooling.
- Exact architectural reproduction of the HUFS main building.
- Complex game-like duck AI.
