// Adds .is-visible to [data-reveal] elements when they enter the viewport.
// Content stays visible without JS and with prefers-reduced-motion.
// Clipped elements (patient questions use clip-path) are observed through their parent,
// because a fully clipped box never reports an intersection.
const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("is-visible"));
} else {
  const targets = new Map<Element, HTMLElement>();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        targets.get(e.target)?.classList.add("is-visible");
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
  items.forEach((el) => {
    const watch = el.parentElement ?? el;
    targets.set(watch, el);
    io.observe(watch);
  });
}
