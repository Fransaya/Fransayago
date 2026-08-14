# fransayago.dev — portfolio

Portfolio de Francisco Sayago (AI Engineer & Full Stack Developer).
Editorial, bilingüe (ES/EN), estático, sin frameworks de UI.

## Stack

- **Astro 5** — dos rutas estáticas: `/` (ES) y `/en/` (EN)
- **Tailwind v4** — tokens propios en `src/styles/tokens.css` (`@theme inline` sobre variables CSS que cambian con `[data-theme]`)
- **GSAP + ScrollTrigger** — reveals, contadores y tipografía cinética (ejes `wght`/`wdth` de Archivo)
- **Lenis** — scroll suave (desactivado con `prefers-reduced-motion`)
- **Canvas 2D propio** — campo de señales del hero (`src/lib/hero-field.ts`), sin librerías

## Estructura

```
src/
├── data/content.ts        # TODO el contenido, ES + EN (única fuente de verdad)
├── layouts/Layout.astro   # head, SEO, JSON-LD, tema, boot de motion
├── lib/
│   ├── motion.ts          # Lenis, reveals, kinetic type, contadores, section spy
│   ├── hero-field.ts      # canvas del hero
│   └── i18n.ts            # helper t()
├── components/            # Nav, Hero, Capabilities, Impact, Method, Cases, Path, Toolbox, Contact
└── pages/
    ├── index.astro        # ES
    └── en/index.astro     # EN
```

Para editar textos, métricas, casos o experiencia: **`src/data/content.ts`**. Los componentes no tienen copy hardcodeado (salvo microcopy puntual).

## Comandos

| Comando           | Acción                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Instala dependencias                |
| `npm run dev`     | Dev server en `localhost:4321`      |
| `npm run build`   | Build estático en `./dist/`         |
| `npm run preview` | Preview del build                   |

## Accesibilidad y motion

- Skip link, foco visible en todo elemento interactivo, headings jerárquicos.
- Casos en `<dialog>` nativo (Escape, backdrop, deep link `#case-<id>`).
- Todo el movimiento respeta `prefers-reduced-motion`; sin JS, el contenido se ve igual (fallback en `<noscript>`).
- Tema claro/oscuro con preferencia del sistema + toggle persistido en `localStorage`.
