const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-links a")];

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setActiveLink(visible.target.id);
      }
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: [0.1, 0.25, 0.5],
    }
  );

  sections.forEach((section) => observer.observe(section));
} else if (sections[0]) {
  setActiveLink(sections[0].id);
}

const createPixelDuck = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const duck = document.createElement("div");
  duck.className = "pixel-duck is-walking";
  duck.setAttribute("aria-hidden", "true");

  const palette = {
    outline: "#2a2522",
    body: "#f8d84a",
    shade: "#e8b83f",
    wing: "#f2c94c",
    beak: "#e87822",
    eye: "#111",
    foot: "#c9631f",
  };

  const pixels = [
    [7, 2, "outline"], [8, 2, "outline"], [9, 2, "outline"],
    [6, 3, "outline"], [7, 3, "body"], [8, 3, "body"], [9, 3, "body"], [10, 3, "outline"],
    [5, 4, "outline"], [6, 4, "body"], [7, 4, "body"], [8, 4, "eye"], [9, 4, "body"], [10, 4, "body"], [11, 4, "outline"], [12, 4, "beak"],
    [5, 5, "outline"], [6, 5, "body"], [7, 5, "body"], [8, 5, "body"], [9, 5, "body"], [10, 5, "body"], [11, 5, "outline"], [12, 5, "beak"], [13, 5, "beak"],
    [4, 6, "outline"], [5, 6, "body"], [6, 6, "body"], [7, 6, "body"], [8, 6, "body"], [9, 6, "body"], [10, 6, "outline"], [11, 6, "outline"],
    [2, 7, "outline"], [3, 7, "outline"], [4, 7, "body"], [5, 7, "body"], [6, 7, "body"], [7, 7, "body"], [8, 7, "body"], [9, 7, "body"], [10, 7, "outline"],
    [1, 8, "outline"], [2, 8, "body"], [3, 8, "body"], [4, 8, "body"], [5, 8, "wing"], [6, 8, "wing"], [7, 8, "body"], [8, 8, "body"], [9, 8, "body"], [10, 8, "outline"],
    [1, 9, "outline"], [2, 9, "body"], [3, 9, "body"], [4, 9, "wing"], [5, 9, "wing"], [6, 9, "shade"], [7, 9, "body"], [8, 9, "body"], [9, 9, "body"], [10, 9, "outline"],
    [2, 10, "outline"], [3, 10, "body"], [4, 10, "body"], [5, 10, "shade"], [6, 10, "shade"], [7, 10, "body"], [8, 10, "body"], [9, 10, "outline"],
    [3, 11, "outline"], [4, 11, "outline"], [5, 11, "body"], [6, 11, "body"], [7, 11, "outline"], [8, 11, "outline"],
    [4, 12, "foot"], [5, 12, "foot"], [7, 12, "foot"], [8, 12, "foot"],
  ];

  const byColor = new Map();
  pixels.forEach(([x, y, color]) => {
    if (!byColor.has(color)) {
      byColor.set(color, []);
    }
    byColor.get(color).push(`${x * 4}px ${y * 4}px 0 ${palette[color]}`);
  });

  byColor.forEach((shadows, color) => {
    const cell = document.createElement("span");
    cell.className = "pixel-duck__cell";
    cell.style.setProperty("--duck-shadow", shadows.join(", "));
    duck.appendChild(cell);
  });

  document.body.appendChild(duck);

  let x = Math.max(24, window.innerWidth - 120);
  let y = Math.max(92, window.innerHeight - 130);
  let vx = -0.55;
  let vy = 0.32;
  let pauseUntil = 0;

  const move = (time) => {
    const maxX = window.innerWidth - 72;
    const maxY = window.innerHeight - 74;

    if (time > pauseUntil) {
      x += vx;
      y += vy;

      if (x <= 8 || x >= maxX) {
        vx *= -1;
        x = Math.min(Math.max(x, 8), maxX);
        pauseUntil = time + 350;
      }

      if (y <= 78 || y >= maxY) {
        vy *= -1;
        y = Math.min(Math.max(y, 78), maxY);
        pauseUntil = time + 250;
      }
    }

    duck.classList.toggle("is-walking", time > pauseUntil);
    duck.style.setProperty("--duck-x", `${x}px`);
    duck.style.setProperty("--duck-y", `${y}px`);
    duck.style.setProperty("--duck-facing", vx >= 0 ? "1" : "-1");

    requestAnimationFrame(move);
  };

  requestAnimationFrame(move);
};

createPixelDuck();

