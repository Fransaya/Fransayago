/** Public portfolio copy. Both languages expose the same structure. */
export type Lang = "es" | "en";
export interface PortfolioCase { id: string; category: string; title: string; summary: string; context: string; contribution: string[]; result: string; stack: string[]; privacy: string }
export interface PortfolioContent {
  nav: { work: string; about: string; contact: string };
  hero: { eyebrow: string; headline: string[]; intro: string; primary: string; secondary: string; location: string; status: string };
  work: { eyebrow: string; title: string; intro: string; cases: PortfolioCase[] };
  about: { eyebrow: string; title: string; paragraphs: string[]; timeline: { company: string; role: string; period: string; description: string }[]; stack: { title: string; items: string[] }[] };
  contact: { eyebrow: string; headline: string; body: string; email: string; linkedin: string; github: string };
  ui: { caseOpen: string; caseClose: string; context: string; contribution: string; result: string; stack: string; privateWork: string; experience: string; tools: string; copyEmail: string; emailCopied: string; backToTop: string; language: string; menu: string; footer: string; skipToContent: string };
}
const email = "fransayago.dev@gmail.com";
const linkedin = "https://www.linkedin.com/in/francisco-sayago/";
const github = "https://github.com/Fransaya";
export const portfolio: Record<Lang, PortfolioContent> = {
  es: {
    nav: { work: "Trabajo", about: "Sobre mí", contact: "Contacto" },
    hero: {
      eyebrow: "Full Stack Developer",
      headline: ["Aplicaciones web.", "Backend.", "Agentes de IA."],
      intro: "Soy Francisco Sayago. Desarrollo productos web y agentes de IA, desde la conversación con el cliente hasta el despliegue. Hoy trabajo en AIAutomatiza, donde también contribuyo a la evolución de SACIA, nuestro CRM principal.",
      primary: "Ver mi trabajo", secondary: "Conocerme", location: "Villa María, Córdoba · Argentina", status: "Interesado en oportunidades remotas internacionales",
    },
    work: {
      eyebrow: "Trabajo seleccionado", title: "El trabajo detrás del producto.",
      intro: "Tres ejemplos de lo que hago: mejorar un sistema en producción, desarrollar agentes y construir productos propios.",
      cases: [
        {
          id: "sacia", category: "Backend · Rendimiento", title: "SACIA",
          summary: "Optimización del CRM principal de AIAutomatiza, desde PostgreSQL hasta el frontend.",
          context: "El consumo de CPU y memoria en Supabase se acercaba al límite. El trabajo requería revisar cómo consultaba y procesaba datos la aplicación, además de seguir manteniendo el producto.",
          contribution: ["Optimicé consultas, índices y funciones de PostgreSQL.", "Revisé las llamadas del frontend y las suscripciones en tiempo real.", "Ajusté procesos en segundo plano para reducir el consumo de recursos.", "Continúo desarrollando funcionalidades y resolviendo incidencias del CRM."],
          result: "Reduje el consumo observado de CPU y memoria en Supabase. La mejora abarcó la base de datos y la forma en que la aplicación solicita y procesa información.",
          stack: ["PostgreSQL", "Supabase", "TypeScript"], privacy: "Trabajo interno de AIAutomatiza. Código y datos privados.",
        },
        {
          id: "agents", category: "IA · Automatización", title: "Agentes para tareas concretas",
          summary: "Atención al cliente, agendamiento de citas y análisis de información.",
          context: "En AIAutomatiza desarrollo agentes según las necesidades de cada cliente. Mi trabajo incluye conversar con el cliente, implementar la solución y mantenerla después del despliegue.",
          contribution: ["Desarrollo agentes con las APIs de OpenAI y Anthropic.", "Construyo flujos de automatización con n8n y Flowise.", "Mantengo las implementaciones, corrijo errores e incorporo mejoras según las necesidades del proyecto."],
          result: "Agentes implementados en proyectos de clientes, con seguimiento técnico y mejoras continuas.",
          stack: ["OpenAI API", "Anthropic API", "n8n", "Flowise"], privacy: "Los detalles de cada implementación y los datos de clientes son privados.",
        },
        {
          id: "doctainnova", category: "Producto propio · En desarrollo", title: "DoctaInnova",
          summary: "Mi espacio para desarrollar productos propios. Actualmente, una aplicación mobile.",
          context: "Además de mi trabajo en AIAutomatiza, desarrollo una aplicación mobile como proyecto personal de DoctaInnova. El producto todavía no es público.",
          contribution: ["Trabajo en el desarrollo del producto y en sus decisiones técnicas.", "Exploro ideas propias y las llevo a una implementación concreta."],
          result: "Producto en desarrollo. Compartiré más detalles cuando esté listo para presentarlo.",
          stack: ["Producto mobile", "Proyecto privado"], privacy: "El concepto, las funcionalidades y el código todavía no son públicos.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre mí", title: "Me gusta entender lo que estoy construyendo.",
      paragraphs: [
        "Soy desarrollador full stack en Villa María, Córdoba. Me interesa especialmente el backend, la arquitectura y el desarrollo de productos con IA.",
        "En AIAutomatiza somos dos desarrolladores, cada uno con proyectos asignados. Hablo con clientes, programo, defino arquitectura, reviso código, despliego y atiendo incidencias. Esa continuidad me permite ver cómo funcionan las decisiones técnicas una vez que el producto está en uso.",
        "También contribuyo a organizar y documentar el trabajo del equipo. Busco seguir creciendo en un equipo de producto donde pueda aportar esa autonomía y aprender de otros desarrolladores.",
      ],
      timeline: [
        { company: "AIAutomatiza", role: "Full Stack Developer · Aplicaciones y agentes de IA", period: "Dic 2025 — Actualidad", description: "Desarrollo, arquitectura y mantenimiento de proyectos de clientes. Evolución de SACIA en un equipo de dos desarrolladores." },
        { company: "DoctaInnova", role: "Proyecto independiente", period: "En desarrollo", description: "Desarrollo de productos propios, con una aplicación mobile en curso." },
        { company: "Maser Informática", role: "Full Stack Developer", period: "Oct 2023 — Jun 2025", description: "Desarrollo y mantenimiento de aplicaciones de e-commerce con Angular, Node.js, PHP y bases de datos relacionales." },
      ],
      stack: [
        { title: "Frontend", items: ["TypeScript", "React", "Next.js"] },
        { title: "Backend y datos", items: ["Node.js", "NestJS", "PostgreSQL", "Supabase"] },
        { title: "IA y automatización", items: ["OpenAI API", "Anthropic API", "n8n", "Flowise"] },
        { title: "Despliegue", items: ["Railway", "Fly.io", "Google Cloud"] },
      ],
    },
    contact: { eyebrow: "Contacto", headline: "¿Trabajamos en el próximo producto?", body: "Me interesan oportunidades remotas en desarrollo full stack y backend, especialmente en equipos que construyan productos con IA. Si mi experiencia encaja con lo que están haciendo, escribime.", email, linkedin, github },
    ui: { caseOpen: "Ver el detalle", caseClose: "Cerrar detalle", context: "El contexto", contribution: "Mi trabajo", result: "Resultado", stack: "Herramientas", privateWork: "Proyecto privado", experience: "Experiencia", tools: "Mi stack actual", copyEmail: "Copiar email", emailCopied: "Email copiado", backToTop: "Volver arriba", language: "English", menu: "Abrir menú", footer: "Francisco Sayago · Villa María, Argentina", skipToContent: "Ir al contenido" },
  },
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Full Stack Developer", headline: ["Web applications.", "Backend.", "AI agents."],
      intro: "I'm Francisco Sayago. I build web products and AI agents, from client conversations to deployment. I currently work at AIAutomatiza, where I also contribute to SACIA, our core CRM.",
      primary: "Explore my work", secondary: "About me", location: "Villa María, Córdoba · Argentina", status: "Interested in international remote opportunities",
    },
    work: {
      eyebrow: "Selected work", title: "The work behind the product.",
      intro: "Three examples of what I do: improving a production system, developing agents, and building my own products.",
      cases: [
        {
          id: "sacia", category: "Backend · Performance", title: "SACIA",
          summary: "Optimizing AIAutomatiza's core CRM, from PostgreSQL to the frontend.",
          context: "CPU and memory usage in Supabase were approaching their limits. The work involved reviewing how the application queried and processed data while continuing to maintain the product.",
          contribution: ["Optimized PostgreSQL queries, indexes, and database functions.", "Reviewed frontend requests and realtime subscriptions.", "Adjusted background processes to reduce resource usage.", "Continue to develop features and resolve CRM incidents."],
          result: "Reduced observed CPU and memory usage in Supabase. The improvements covered both the database and how the application requests and processes information.",
          stack: ["PostgreSQL", "Supabase", "TypeScript"], privacy: "Internal work at AIAutomatiza. Source code and data are private.",
        },
        {
          id: "agents", category: "AI · Automation", title: "Agents for specific tasks",
          summary: "Customer support, appointment scheduling, and information analysis.",
          context: "At AIAutomatiza, I develop agents around each client's needs. My work includes client conversations, implementation, and ongoing maintenance after deployment.",
          contribution: ["Develop agents using the OpenAI and Anthropic APIs.", "Build automation workflows with n8n and Flowise.", "Maintain implementations, fix issues, and make improvements as project requirements evolve."],
          result: "Agents implemented in client projects, with ongoing technical support and improvements.",
          stack: ["OpenAI API", "Anthropic API", "n8n", "Flowise"], privacy: "Implementation details and client data are private.",
        },
        {
          id: "doctainnova", category: "Independent product · In development", title: "DoctaInnova",
          summary: "A space to build my own products. Currently, a mobile application.",
          context: "Alongside my work at AIAutomatiza, I'm developing a mobile application as a personal DoctaInnova project. The product is not public yet.",
          contribution: ["Work on product development and technical decisions.", "Explore my own ideas and turn them into working software."],
          result: "Product in development. I'll share more when it's ready to introduce.",
          stack: ["Mobile product", "Private project"], privacy: "The concept, features, and source code are not public yet.",
        },
      ],
    },
    about: {
      eyebrow: "About me", title: "I like understanding what I'm building.",
      paragraphs: [
        "I'm a full stack developer based in Villa María, Córdoba, Argentina. I'm particularly interested in backend development, architecture, and products built with AI.",
        "At AIAutomatiza, we're a team of two developers, each with assigned projects. I speak with clients, write code, make architecture decisions, review changes, deploy applications, and handle incidents. Following a project through these stages lets me see how technical decisions hold up in use.",
        "I also help organize and document our work. I'm looking to grow within a product team where I can bring that ownership and learn from other developers.",
      ],
      timeline: [
        { company: "AIAutomatiza", role: "Full Stack Developer · Applications & AI Agents", period: "Dec 2025 — Present", description: "Development, architecture, and maintenance of client projects. Contributing to SACIA in a two-developer team." },
        { company: "DoctaInnova", role: "Independent project", period: "In development", description: "Building personal software products, including a mobile application currently in development." },
        { company: "Maser Informática", role: "Full Stack Developer", period: "Oct 2023 — Jun 2025", description: "Developed and maintained e-commerce applications with Angular, Node.js, PHP, and relational databases." },
      ],
      stack: [
        { title: "Frontend", items: ["TypeScript", "React", "Next.js"] },
        { title: "Backend & data", items: ["Node.js", "NestJS", "PostgreSQL", "Supabase"] },
        { title: "AI & automation", items: ["OpenAI API", "Anthropic API", "n8n", "Flowise"] },
        { title: "Deployment", items: ["Railway", "Fly.io", "Google Cloud"] },
      ],
    },
    contact: { eyebrow: "Contact", headline: "Let's work on the next product.", body: "I'm interested in remote full stack and backend roles, particularly on teams building products with AI. If my experience fits what you're working on, get in touch.", email, linkedin, github },
    ui: { caseOpen: "View details", caseClose: "Close details", context: "Context", contribution: "My contribution", result: "Outcome", stack: "Tools", privateWork: "Private project", experience: "Experience", tools: "My current stack", copyEmail: "Copy email", emailCopied: "Email copied", backToTop: "Back to top", language: "Español", menu: "Open menu", footer: "Francisco Sayago · Villa María, Argentina", skipToContent: "Skip to content" },
  },
};
