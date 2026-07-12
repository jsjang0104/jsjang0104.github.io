# Pixel Portfolio Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static project-first personal homepage with a CSS pixel-art HUFS building and a JavaScript wandering duck.

**Architecture:** The site uses plain `index.html`, `style.css`, and `script.js` with no build step. Content is semantic HTML, visual styling and pixel art live in CSS, and the duck behavior is isolated in small JavaScript functions that can be tested with Node's built-in test runner.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node built-in `node:test` for file/content and pure-function checks.

## Global Constraints

- No backend.
- No build tool or framework.
- Keep `cv_pdf.pdf` available as the downloadable CV.
- Project/portfolio content appears before research, experience, awards, and skills.
- The visual concept is a cute pixel-art campus scene inspired by the HUFS main building.
- The duck uses lightweight JavaScript for random wandering.
- The page remains usable if JavaScript fails.
- Respect `prefers-reduced-motion`.

---

### Task 1: Static Site Shell And Test Harness

**Files:**
- Create: `tests/site.test.js`
- Create: `index.html`
- Create: `style.css`
- Create: `script.js`

**Interfaces:**
- Produces: `index.html` links `style.css`, `script.js`, and `cv_pdf.pdf`.
- Produces: `script.js` exports `getNextDuckPosition(bounds, duckSize, rng)` and `getDuckDirection(fromX, toX)` when loaded in Node.

- [ ] **Step 1: Write the failing test**

Create `tests/site.test.js` with assertions that the expected files, sections, CV link, pixel building, and duck API exist.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.js`

Expected: FAIL because `index.html`, `style.css`, and `script.js` do not exist.

- [ ] **Step 3: Write minimal implementation**

Create the three static site files with semantic sections, linked assets, project-first content, pixel building markup, CSS, and duck functions.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/site.test.js`

Expected: PASS.

### Task 2: Visual And Interaction Verification

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`
- Modify: `tests/site.test.js`

**Interfaces:**
- Consumes: site files from Task 1.
- Produces: a responsive static homepage that can be opened directly in a browser.

- [ ] **Step 1: Add tests for reduced motion, mobile-safe duck bounds, and key content**

Extend `tests/site.test.js` to check `prefers-reduced-motion`, bounded random positions, and representative project/research/contact copy.

- [ ] **Step 2: Run test to verify it fails if behavior is incomplete**

Run: `node --test tests/site.test.js`

Expected: FAIL if any behavior or content is missing.

- [ ] **Step 3: Complete styling and interaction details**

Polish CSS pixel-art details, responsive layout, focus states, duck movement safety, and content hierarchy.

- [ ] **Step 4: Run final automated verification**

Run: `node --test tests/site.test.js`

Expected: PASS.

- [ ] **Step 5: Manual static verification**

Open `index.html` or serve the directory locally and verify the hero, cards, links, and duck behavior.
