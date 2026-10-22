# Francisco Sayago — portfolio

Portfolio profesional bilingüe, construido con Astro y CSS propio.

## Desarrollo

Requiere Node.js 24 (configurado en `package.json`).

- `npm install`
- `npm run dev` — http://localhost:4321
- `npm run build` — genera `dist/`
- `npm run preview` — sirve el build de producción

## Estructura

- `src/data/portfolio.ts`: textos y casos en español e inglés.
- `src/components/Site.astro`: página y casos en diálogos nativos.
- `src/styles/portfolio.css`: diseño, componentes y responsive.
- `src/lib/portfolio.ts`: reveals progresivos, sección activa, diálogos y copia del email.
- `src/layouts/Layout.astro`: SEO, metadatos sociales, fuentes y datos estructurados.
- `src/pages/index.astro` y `src/pages/en/index.astro`: rutas ES/EN.
- `public/`: foto, favicon, imagen social y CVs actualizados.

## Contenido y contacto

Email: **fransayago.dev@gmail.com**. La fuente de los enlaces está en `src/data/portfolio.ts`. Al cambiar el email, actualizar también los PDF descargables.

Los casos describen trabajo real en SACIA, agentes de AIAutomatiza y el proyecto independiente DoctaInnova. Los gráficos son esquemas ilustrativos, no capturas del producto. No se publican datos privados ni métricas sin respaldo.

## Accesibilidad y rendimiento

Scroll nativo; no hay dependencias JavaScript de animación. La animación respeta `prefers-reduced-motion`. El contenido se renderiza en el servidor y permanece disponible sin JavaScript; los detalles tienen fallback de lectura. Diálogos con Escape, foco contenido y devolución al botón que los abrió. Enlaces de descarga independientes por idioma.

## Publicación

Compatible con despliegue estático en Vercel: comando `npm run build`, directorio `dist`. El dominio canónico actual sigue siendo `https://fransayago.vercel.app`. Los cambios de esta revisión se prepararon y probaron en local; el despliegue público se realiza por separado.
