const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("static homepage files exist", () => {
  assert.ok(fs.existsSync(path.join(root, "index.html")));
  assert.ok(fs.existsSync(path.join(root, "style.css")));
  assert.ok(fs.existsSync(path.join(root, "script.js")));
});

test("homepage is project-first and links required assets", () => {
  const html = read("index.html");

  assert.match(html, /<link[^>]+href="style\.css"/);
  assert.match(html, /<script[^>]+src="script\.js"/);
  assert.match(html, /href="cv_pdf\.pdf"/);
  assert.match(html, /id="projects"/);
  assert.match(html, /Austrian Library HUFS/);
  assert.match(html, /German Declension Trainer/);
  assert.ok(html.indexOf('id="projects"') < html.indexOf('id="research"'));
});

test("pixel campus scene and duck are present", () => {
  const html = read("index.html");
  const css = read("style.css");

  assert.match(html, /class="[^"]*pixel-campus/);
  assert.match(html, /class="[^"]*main-building/);
  assert.match(html, /class="[^"]*duck/);
  assert.match(css, /\.main-building/);
  assert.match(css, /\.duck/);
});

test("duck movement API keeps positions in bounds and reports direction", () => {
  const duck = require("../script.js");
  const rng = () => 0.5;
  const position = duck.getNextDuckPosition(
    { width: 1000, height: 800 },
    { width: 64, height: 64 },
    rng
  );

  assert.ok(position.x >= 0);
  assert.ok(position.y >= 0);
  assert.ok(position.x <= 936);
  assert.ok(position.y <= 736);
  assert.equal(duck.getDuckDirection(10, 20), "right");
  assert.equal(duck.getDuckDirection(20, 10), "left");
});


test("duck behavior supports reduced motion and calmer mobile walking", () => {
  const css = read("style.css");
  const js = read("script.js");
  const duck = require("../script.js");

  assert.match(css, /prefers-reduced-motion/);
  assert.match(js, /prefers-reduced-motion/);
  assert.equal(duck.getWalkInterval(1200), 4200);
  assert.equal(duck.getWalkInterval(500), 6200);
});

test("homepage includes representative research, skills, and contact content", () => {
  const html = read("index.html");

  assert.match(html, /Multilingual NLP/);
  assert.match(html, /PyTorch/);
  assert.match(html, /Hugging Face/);
  assert.match(html, /mailto:jsjang0104@hufs\.ac\.kr/);
  assert.match(html, /id="contact"/);
});
