(function (root) {
  "use strict";

  function getNextDuckPosition(bounds, duckSize, rng) {
    const width = Math.max(0, bounds.width - duckSize.width);
    const height = Math.max(0, bounds.height - duckSize.height);
    const safeTop = Math.min(96, height);
    const x = Math.round(rng() * width);
    const y = Math.round(safeTop + rng() * Math.max(0, height - safeTop));

    return { x, y };
  }

  function getDuckDirection(fromX, toX) {
    return toX < fromX ? "left" : "right";
  }

  function getWalkInterval(viewportWidth) {
    return viewportWidth <= 680 ? 6200 : 4200;
  }

  function initDuck() {
    if (!root.document) return;

    const duck = root.document.querySelector(".duck");
    if (!duck) return;

    const reducedMotion = root.matchMedia &&
      root.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let current = { x: 24, y: Math.max(120, root.innerHeight - 120) };
    let timer = null;

    function place(position) {
      const direction = getDuckDirection(current.x, position.x);
      duck.classList.toggle("is-left", direction === "left");
      duck.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      current = position;
    }

    function walk() {
      const rect = duck.getBoundingClientRect();
      const next = getNextDuckPosition(
        { width: root.innerWidth, height: root.innerHeight },
        { width: rect.width || 58, height: rect.height || 44 },
        Math.random
      );
      place(next);
    }

    function schedule() {
      if (reducedMotion) {
        place({ x: 18, y: Math.max(120, root.innerHeight - 88) });
        return;
      }

      walk();
      timer = root.setInterval(walk, getWalkInterval(root.innerWidth));
    }

    duck.addEventListener("click", function () {
      duck.classList.remove("is-bouncing");
      void duck.offsetWidth;
      duck.classList.add("is-bouncing");
    });

    root.addEventListener("resize", function () {
      if (timer) root.clearInterval(timer);
      schedule();
    });

    schedule();
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { getNextDuckPosition, getDuckDirection, getWalkInterval };
  }

  if (root.document) {
    if (root.document.readyState === "loading") {
      root.document.addEventListener("DOMContentLoaded", initDuck);
    } else {
      initDuck();
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
