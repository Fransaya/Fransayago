import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------ smooth scroll */

let lenis: Lenis | null = null;

function initSmoothScroll() {
  if (reduced) return;

  lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.6,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

export function scrollTo(target: string | HTMLElement) {
  if (lenis) {
    lenis.scrollTo(target as HTMLElement, { duration: 1.1, offset: -8 });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}

/* ------------------------------------------------------------ reveals */

function initReveals() {
  const items = document.querySelectorAll<HTMLElement>(".reveal, .line-mask");

  if (reduced) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }

  items.forEach((el) => {
    const delay = Number(el.dataset.delay ?? 0);
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => window.setTimeout(() => el.classList.add("is-in"), delay),
    });
  });
}

/* ------------------------------------------------------------ hero intro */

function initHeroIntro() {
  const hero = document.querySelector("[data-hero]");
  if (!hero) return;

  const lines = hero.querySelectorAll<HTMLElement>(".line-mask");
  if (reduced) {
    lines.forEach((l) => l.classList.add("is-in"));
    hero.querySelectorAll<HTMLElement>("[data-hero-fade]").forEach((el) => (el.style.opacity = "1"));
    return;
  }

  lines.forEach((line, i) => window.setTimeout(() => line.classList.add("is-in"), 120 + i * 110));

  gsap.to("[data-hero-fade]", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.09,
    delay: 0.45,
  });
}

/* ------------------------------------------------------------ kinetic type */

/** Maps scroll progress to the display font's weight + width axes. */
function initKineticType() {
  if (reduced) return;

  document.querySelectorAll<HTMLElement>("[data-kinetic]").forEach((el) => {
    const state = { wght: 420, wdth: 92 };
    gsap.to(state, {
      wght: 880,
      wdth: 112,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top 92%", end: "top 32%", scrub: 0.5 },
      onUpdate: () => {
        el.style.fontVariationSettings = `"wght" ${state.wght.toFixed(0)}, "wdth" ${state.wdth.toFixed(0)}`;
      },
    });
  });
}

/* ------------------------------------------------------------ counters */

function initCounters() {
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count ?? 0);
    if (reduced) {
      el.textContent = String(target);
      return;
    }
    const state = { n: 0 };
    gsap.to(state, {
      n: target,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        el.textContent = String(Math.round(state.n));
      },
    });
  });
}

/* ------------------------------------------------------------ scroll progress */

function initProgress() {
  const bar = document.querySelector<HTMLElement>("[data-progress]");
  if (!bar) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${p})`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
}

/* ------------------------------------------------------------ active section */

function initSectionSpy() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-spy]"));
  if (!links.length) return;

  const byId = new Map(links.map((l) => [l.getAttribute("href")!.slice(1), l]));
  const sections = Array.from(byId.keys())
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.removeAttribute("aria-current"));
        byId.get(entry.target.id)?.setAttribute("aria-current", "true");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  sections.forEach((s) => io.observe(s));
}

/* ------------------------------------------------------------ anchors */

function initAnchors() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      scrollTo(target as HTMLElement);
      history.replaceState(null, "", id);
    });
  });
}

/* ------------------------------------------------------------ boot */

export function initMotion() {
  initSmoothScroll();
  initHeroIntro();
  initReveals();
  initKineticType();
  initCounters();
  initProgress();
  initSectionSpy();
  initAnchors();
  ScrollTrigger.refresh();
}
