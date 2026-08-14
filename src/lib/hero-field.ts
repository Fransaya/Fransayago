/**
 * Hero "signal field" — a grid of ink ticks that align to a slow flow field and
 * bend toward the pointer. Canvas 2D, no libraries, cheap enough to idle at 60fps.
 * Static single frame when the user prefers reduced motion.
 */

interface FieldOptions {
  spacing?: number;
  length?: number;
}

export function initHeroField(canvas: HTMLCanvasElement, opts: FieldOptions = {}) {
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const spacing = opts.spacing ?? 34;
  const length = opts.length ?? 11;

  let width = 0;
  let height = 0;
  let cols = 0;
  let rows = 0;
  let dpr = 1;
  let raf = 0;
  let running = true;

  // pointer in css px, kept far away until the user actually moves
  const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

  const styles = () => {
    const cs = getComputedStyle(document.documentElement);
    return {
      ink: cs.getPropertyValue("--c-ink").trim() || "#121212",
      signal: cs.getPropertyValue("--c-signal").trim() || "#d93b06",
    };
  };
  let palette = styles();

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(width / spacing) + 1;
    rows = Math.ceil(height / spacing) + 1;
  }

  // cheap value-noise-ish angle field
  function flow(x: number, y: number, t: number) {
    return (
      Math.sin(x * 0.0042 + t * 0.00022) * 1.6 +
      Math.cos(y * 0.0051 - t * 0.00017) * 1.3 +
      Math.sin((x + y) * 0.0016 + t * 0.0001) * 0.9
    );
  }

  function draw(t: number) {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    pointer.x += (pointer.tx - pointer.x) * 0.08;
    pointer.y += (pointer.ty - pointer.y) * 0.08;

    const reach = 190;
    ctx.lineCap = "round";

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing + spacing * 0.5;
        const y = j * spacing + spacing * 0.5;

        let angle = flow(x, y, t);
        let intensity = 0.16;
        let len = length;

        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const dist = Math.hypot(dx, dy);

        if (dist < reach) {
          const pull = 1 - dist / reach;
          angle = Math.atan2(dy, dx) + Math.PI / 2;
          intensity = 0.16 + pull * 0.75;
          len = length + pull * 13;
        }

        const hx = (Math.cos(angle) * len) / 2;
        const hy = (Math.sin(angle) * len) / 2;

        ctx.strokeStyle = dist < reach ? palette.signal : palette.ink;
        ctx.globalAlpha = intensity;
        ctx.lineWidth = dist < reach ? 1.5 : 1;
        ctx.beginPath();
        ctx.moveTo(x - hx, y - hy);
        ctx.lineTo(x + hx, y + hy);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }

  function loop(t: number) {
    if (!running) return;
    draw(t);
    raf = requestAnimationFrame(loop);
  }

  function onPointer(e: PointerEvent) {
    const rect = canvas.getBoundingClientRect();
    pointer.tx = e.clientX - rect.left;
    pointer.ty = e.clientY - rect.top;
  }

  function onLeave() {
    pointer.tx = -9999;
    pointer.ty = -9999;
  }

  const ro = new ResizeObserver(() => {
    resize();
    if (reduced) draw(0);
  });

  resize();
  ro.observe(canvas);

  if (reduced) {
    draw(0);
  } else {
    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });

    // stop burning frames when the hero is off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(loop);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);
  }

  // repaint on theme change so ticks pick up the new ink colour
  const themeObserver = new MutationObserver(() => {
    palette = styles();
    if (reduced) draw(0);
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    ro.disconnect();
    themeObserver.disconnect();
    window.removeEventListener("pointermove", onPointer);
    window.removeEventListener("pointerleave", onLeave);
  };
}
