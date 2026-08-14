export type Lang = "es" | "en";

export const profile = {
  name: "Francisco Sayago",
  fullName: "Francisco Enrique Sayago",
  initials: "FS",
  email: "fransayago04@gmail.com",
  phone: "+54 353 4060236",
  phoneHref: "https://wa.me/543534060236",
  linkedin: "https://linkedin.com/in/francisco-sayago",
  linkedinLabel: "francisco-sayago",
  github: "https://github.com/Fransaya",
  githubLabel: "Fransaya",
  cv: "/Francisco_Enrique_Sayago.pdf",
  location: { es: "Villa María, Córdoba, Argentina", en: "Villa María, Córdoba, Argentina" },
} as const;

type L<T> = { es: T; en: T };

export interface Capability {
  k: string;
  title: L<string>;
  body: L<string>;
  proof: L<string>;
  tools: string[];
}

export interface Metric {
  value: string;
  suffix?: string;
  label: L<string>;
  note: L<string>;
}

export interface Method {
  step: string;
  title: L<string>;
  body: L<string>;
}

export interface CaseStudy {
  id: string;
  year: string;
  title: string;
  context: L<string>;
  role: L<string>;
  headline: L<string>;
  problem: L<string>;
  decisions: L<string[]>;
  result: L<string[]>;
  stack: string[];
  tags: L<string[]>;
}

export interface Job {
  company: string;
  place: L<string>;
  role: L<string>;
  period: L<string>;
  current: boolean;
  bullets: L<string[]>;
}

/* ---------------------------------------------------------- UI strings */

export const ui = {
  nav: {
    work: { es: "Qué resuelvo", en: "What I Solve" },
    impact: { es: "Impacto", en: "Impact" },
    method: { es: "Cómo trabajo", en: "How I Work" },
    cases: { es: "Casos", en: "Cases" },
    path: { es: "Trayectoria", en: "Track Record" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    status: { es: "Disponible para proyectos remotos", en: "Available for remote work" },
    role: {
      es: "AI Engineer & Full Stack Developer",
      en: "AI Engineer & Full Stack Developer",
    },
    headline: {
      es: ["Convierto problemas", "de negocio en", "sistemas que rinden."],
      en: ["I turn business", "problems into", "systems that pay off."],
    },
    lead: {
      es: "3+ años construyendo producto full stack y sistemas de agentes de IA. Hoy soy responsable de la ingeniería de proyectos en AIAutomatiza (España): diseño automatizaciones que convierten leads, ordeno datos que estaban dispersos y rescato sistemas que ya no aguantaban la carga.",
      en: "3+ years building full-stack product and AI agent systems. Today I lead project engineering at AIAutomatiza (Spain): I design automations that convert leads, consolidate scattered data, and rescue systems that stopped holding load.",
    },
    ctaPrimary: { es: "Ver casos", en: "See Cases" },
    ctaSecondary: { es: "Hablemos", en: "Let's Talk" },
    scroll: { es: "Desplazá", en: "Scroll" },
    since: { es: "Desde 2022", en: "Since 2022" },
  },
  sections: {
    capabilities: {
      index: "01",
      label: { es: "Qué resuelvo", en: "What I Solve" },
      title: {
        es: "No vendo tecnologías. Resuelvo cuellos de botella.",
        en: "I don't sell technologies. I remove bottlenecks.",
      },
      lead: {
        es: "El stack cambia cada dos años; los problemas de fondo no. Esto es lo que sé llevar de un pizarrón a producción.",
        en: "Stacks change every two years; the underlying problems don't. This is what I take from whiteboard to production.",
      },
      aside: { es: "5 frentes", en: "5 fronts" },
    },
    impact: {
      index: "02",
      label: { es: "Impacto", en: "Impact" },
      title: { es: "Números que dejé atrás.", en: "Numbers I left behind." },
      lead: {
        es: "Cada cifra sale de un sistema en producción, con usuarios reales y consecuencias reales.",
        en: "Every figure comes from a production system with real users and real consequences.",
      },
      aside: { es: "Verificable en el CV", en: "Verifiable in my CV" },
    },
    method: {
      index: "03",
      label: { es: "Cómo trabajo", en: "How I Work" },
      title: { es: "IA para la velocidad. Criterio para la calidad.", en: "AI for speed. Judgment for quality." },
      lead: {
        es: "Trabajo a diario con Claude Code y Codex como copilotos: multiplican mi salida, no reemplazan las decisiones. La arquitectura, los límites del dominio y la revisión final son míos.",
        en: "I work daily with Claude Code and Codex as copilots: they multiply my output, they don't replace decisions. Architecture, domain boundaries and final review stay mine.",
      },
      aside: { es: "Velocidad sin deuda", en: "Speed without debt" },
      quote: {
        es: "La IA me dio velocidad. Las buenas prácticas hacen que esa velocidad no se pague seis meses después.",
        en: "AI gave me speed. Good practices keep that speed from being paid for six months later.",
      },
      guardTitle: { es: "Los límites que no negocio", en: "The lines I don't cross" },
      guards: {
        es: [
          "Nada llega a producción sin code review humano.",
          "SOLID y Clean Architecture antes que velocidad de tipeo.",
          "Si no puedo explicar el código, no se mergea.",
          "Contexto del negocio primero: el prompt no adivina reglas de dominio.",
        ],
        en: [
          "Nothing ships without human code review.",
          "SOLID and Clean Architecture before typing speed.",
          "If I can't explain the code, it doesn't merge.",
          "Business context first: a prompt won't guess domain rules.",
        ],
      },
    },
    cases: {
      index: "04",
      label: { es: "Casos", en: "Cases" },
      title: { es: "Problema, decisión, resultado.", en: "Problem, decision, result." },
      lead: {
        es: "Cinco sistemas donde la decisión técnica cambió el número del negocio. Abrí cualquiera para ver el detalle.",
        en: "Five systems where the technical decision moved a business number. Open any one for the detail.",
      },
      aside: { es: "Tocá una fila", en: "Tap a row" },
      open: { es: "Abrir caso", en: "Open case" },
      close: { es: "Cerrar", en: "Close" },
      problem: { es: "El problema", en: "The problem" },
      decisions: { es: "Lo que decidí", en: "What I decided" },
      result: { es: "El resultado", en: "The result" },
      stack: { es: "Stack", en: "Stack" },
      role: { es: "Rol", en: "Role" },
    },
    path: {
      index: "05",
      label: { es: "Trayectoria", en: "Track Record" },
      title: { es: "Dónde aprendí todo esto.", en: "Where I learned all this." },
      lead: {
        es: "De mantener sistemas críticos ajenos a dirigir la ingeniería de proyectos propios.",
        en: "From maintaining other people's critical systems to leading engineering on my own projects.",
      },
      aside: { es: "2022 — hoy", en: "2022 — today" },
      education: { es: "Formación", en: "Education" },
      certs: { es: "Certificaciones", en: "Certifications" },
      langs: { es: "Idiomas", en: "Languages" },
    },
    stack: {
      index: "06",
      label: { es: "Herramientas", en: "Toolbox" },
      title: { es: "Las herramientas, al final.", en: "The tools, last." },
      lead: {
        es: "A propósito acá abajo: son medios, no identidad. Si el problema pide otra cosa, la aprendo.",
        en: "Deliberately at the bottom: they're means, not identity. If the problem asks for something else, I learn it.",
      },
      aside: { es: "Medios, no fines", en: "Means, not ends" },
    },
    contact: {
      index: "07",
      label: { es: "Contacto", en: "Contact" },
      title: { es: "¿Tenés un problema caro?", en: "Got an expensive problem?" },
      lead: {
        es: "Contame qué está frenando tu operación. Respondo con un diagnóstico honesto: qué haría, en qué orden y qué no vale la pena construir.",
        en: "Tell me what's slowing your operation down. You get an honest diagnosis: what I'd do, in what order, and what isn't worth building.",
      },
      aside: { es: "Respuesta en 24 h", en: "Reply within 24h" },
      cta: { es: "Escribime", en: "Email Me" },
      cvCta: { es: "Descargar CV", en: "Download CV" },
    },
  },
  footer: {
    built: { es: "Hecho con Astro, GSAP y criterio propio.", en: "Built with Astro, GSAP and my own judgment." },
    top: { es: "Volver arriba", en: "Back to Top" },
  },
  theme: { es: "Cambiar tema", en: "Toggle theme" },
  langSwitch: { es: "English", en: "Español" },
  menu: { es: "Menú", en: "Menu" },
};

/* ---------------------------------------------------------- capabilities */

export const capabilities: Capability[] = [
  {
    k: "01",
    title: {
      es: "Automatizo lo que hoy te cuesta horas y gente",
      en: "I automate what costs you hours and headcount",
    },
    body: {
      es: "Diseño sistemas de agentes de IA que atienden, califican y hacen seguimiento de leads sin intervención humana. No un chatbot suelto: un flujo con reglas de negocio, estados, reintentos y trazabilidad.",
      en: "I design AI agent systems that answer, qualify and follow up leads without human intervention. Not a loose chatbot: a flow with business rules, states, retries and traceability.",
    },
    proof: {
      es: "10+ sistemas de agentes entregados para clientes internacionales.",
      en: "10+ agent systems delivered for international clients.",
    },
    tools: ["OpenAI API", "n8n", "Flowise", "Prompt Engineering", "NLP"],
  },
  {
    k: "02",
    title: {
      es: "Ordeno datos dispersos y los vuelvo decisiones",
      en: "I consolidate scattered data into decisions",
    },
    body: {
      es: "Cuando la información vive en Meta, Google, el CRM y una planilla, nadie confía en ningún número. Construyo la ingesta, la consolidación y la reconciliación automática que devuelven una única versión de la verdad.",
      en: "When data lives in Meta, Google, the CRM and a spreadsheet, nobody trusts any number. I build the ingestion, consolidation and automatic reconciliation that give back a single source of truth.",
    },
    proof: {
      es: "200.000+ registros procesados con reconciliación nocturna automática.",
      en: "200,000+ records processed with automated nightly reconciliation.",
    },
    tools: ["ETL", "APIs Meta & Google", "PostgreSQL", "Webhooks", "Node.js"],
  },
  {
    k: "03",
    title: {
      es: "Rescato sistemas que ya no aguantan",
      en: "I rescue systems that no longer hold",
    },
    body: {
      es: "Legacy que se cae en los picos, versiones frenadas hace años, endpoints que nadie quiere tocar. Entro, mido, refactorizo por partes y dejo el sistema estable sin frenar al equipo ni apagar el negocio.",
      en: "Legacy that falls over at peak, versions frozen for years, endpoints nobody wants to touch. I come in, measure, refactor in slices and leave the system stable without freezing the team or the business.",
    },
    proof: {
      es: "3.000 solicitudes por hora sostenidas, sin downtime, sobre un sistema que antes caía.",
      en: "3,000 requests per hour sustained, zero downtime, on a system that used to fall over.",
    },
    tools: ["Refactoring", "SOLID", "Angular v9→v16", "PHP", "Node.js"],
  },
  {
    k: "04",
    title: {
      es: "Llevo un producto de la idea al deploy",
      en: "I take a product from idea to deploy",
    },
    body: {
      es: "Modelo el dominio, defino la arquitectura, construyo back y front, integro pagos y lo dejo corriendo. Sirve para un MVP que tiene que salir en semanas y para una plataforma multi-tenant que tiene que durar años.",
      en: "I model the domain, define the architecture, build back and front, integrate payments and ship it. Works for an MVP due in weeks and for a multi-tenant platform meant to last years.",
    },
    proof: {
      es: "Plataformas SaaS multi-tenant, e-commerce y pasarelas de pago en producción.",
      en: "Multi-tenant SaaS platforms, e-commerce and payment gateways in production.",
    },
    tools: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker"],
  },
  {
    k: "05",
    title: {
      es: "Conecto plataformas que no se hablan",
      en: "I connect platforms that don't talk",
    },
    body: {
      es: "Cada herramienta nueva suma una isla más. Integro CRMs, pasarelas y APIs externas con contratos claros, manejo de errores y webhooks que no se pierden cuando el otro lado falla.",
      en: "Every new tool adds another island. I integrate CRMs, gateways and external APIs with clear contracts, error handling and webhooks that survive when the other side fails.",
    },
    proof: {
      es: "10+ CRMs y plataformas integradas; 20% más rápida la respuesta de los sistemas.",
      en: "10+ CRMs and platforms integrated; system response 20% faster.",
    },
    tools: ["REST APIs", "Webhooks", "OAuth2", "MercadoPago", "Microservicios"],
  },
];

/* ---------------------------------------------------------- metrics */

export const metrics: Metric[] = [
  {
    value: "3",
    suffix: "+",
    label: { es: "Años en producción", en: "Years shipping" },
    note: {
      es: "Desde 2022, entre producto propio, agencia y clientes de España.",
      en: "Since 2022, across own product, agency work and clients in Spain.",
    },
  },
  {
    value: "10",
    suffix: "+",
    label: { es: "Sistemas de agentes IA", en: "AI agent systems" },
    note: {
      es: "Entregados end-to-end para conversión de leads en AIAutomatiza.",
      en: "Delivered end-to-end for lead conversion at AIAutomatiza.",
    },
  },
  {
    value: "200",
    suffix: "K+",
    label: { es: "Registros consolidados", en: "Records consolidated" },
    note: {
      es: "Multi-fuente (Meta, Google, CRM) con reconciliación automática.",
      en: "Multi-source (Meta, Google, CRM) with automated reconciliation.",
    },
  },
  {
    value: "3",
    suffix: "K/h",
    label: { es: "Solicitudes sostenidas", en: "Requests sustained" },
    note: {
      es: "Picos de carga sin downtime tras refactorizar la capa de endpoints.",
      en: "Peak load with no downtime after refactoring the endpoint layer.",
    },
  },
  {
    value: "30",
    suffix: "%",
    label: { es: "Más rendimiento", en: "Faster core product" },
    note: {
      es: "Optimización de Sacia, el sistema principal de la empresa.",
      en: "Optimizing Sacia, the company's core system.",
    },
  },
  {
    value: "30",
    suffix: "%",
    label: { es: "Menos tiempo operativo", en: "Less operational time" },
    note: {
      es: "Automatización con LLMs de tareas administrativas y de contenido.",
      en: "LLM automation of admin and content tasks.",
    },
  },
];

/* ---------------------------------------------------------- method */

export const method: Method[] = [
  {
    step: "01",
    title: { es: "Entender el problema, no el pedido", en: "Understand the problem, not the request" },
    body: {
      es: "Antes de escribir una línea pregunto qué duele, cuánto cuesta y cómo se mide. La mitad de los features pedidos se caen solos en esa conversación.",
      en: "Before writing a line I ask what hurts, what it costs and how it's measured. Half the requested features fall away in that conversation.",
    },
  },
  {
    step: "02",
    title: { es: "Especificar antes de generar", en: "Spec before generating" },
    body: {
      es: "Escribo el contrato: dominio, casos borde, criterios de aceptación. Ese documento es lo que le doy a Claude o Codex; sin él, la IA acelera en la dirección equivocada.",
      en: "I write the contract: domain, edge cases, acceptance criteria. That document is what I hand to Claude or Codex; without it, AI just accelerates in the wrong direction.",
    },
  },
  {
    step: "03",
    title: { es: "Ejecutar con IA como copiloto", en: "Execute with AI as copilot" },
    body: {
      es: "Delego el andamiaje, las migraciones repetitivas y los tests base. Yo me quedo con el modelo de dominio, los límites entre módulos y todo lo que toca dinero o datos sensibles.",
      en: "I delegate scaffolding, repetitive migrations and baseline tests. I keep the domain model, module boundaries and anything touching money or sensitive data.",
    },
  },
  {
    step: "04",
    title: { es: "Revisar como si no la hubiera usado", en: "Review as if AI never touched it" },
    body: {
      es: "Code review línea por línea, SOLID, nombres, manejo de errores y performance. El código generado entra al repo con el mismo estándar que el escrito a mano, o no entra.",
      en: "Line-by-line code review, SOLID, naming, error handling and performance. Generated code enters the repo at the same standard as hand-written code, or it doesn't enter.",
    },
  },
];

/* ---------------------------------------------------------- cases */

export const cases: CaseStudy[] = [
  {
    id: "agents",
    year: "2025 — hoy",
    title: "Sistemas de agentes IA",
    context: { es: "AIAutomatiza · España", en: "AIAutomatiza · Spain" },
    role: { es: "AI Engineer & responsable de ingeniería", en: "AI Engineer & engineering lead" },
    headline: {
      es: "10+ sistemas que atienden y califican leads sin humanos en el medio.",
      en: "10+ systems answering and qualifying leads with no human in the middle.",
    },
    problem: {
      es: "Los clientes perdían leads por tiempo de respuesta: consultas que entraban de noche o en pico se contestaban horas después, cuando la intención de compra ya se había enfriado. El equipo comercial vivía copiando conversaciones al CRM a mano.",
      en: "Clients were losing leads to response time: enquiries arriving at night or at peak were answered hours later, once buying intent had cooled. The sales team spent its day copying conversations into the CRM by hand.",
    },
    decisions: {
      es: [
        "Separé la conversación (LLM) de las reglas de negocio: el agente propone, una máquina de estados decide.",
        "Combiné código propio con n8n y Flowise según el caso: orquestación visual donde el cliente necesita tocarla, código donde hace falta control fino.",
        "Puse trazabilidad completa por conversación para poder auditar cada decisión del agente.",
        "Definí fallbacks explícitos: si el modelo duda o la API cae, el lead se deriva a un humano en vez de morir en silencio.",
      ],
      en: [
        "Split conversation (LLM) from business rules: the agent proposes, a state machine decides.",
        "Mixed custom code with n8n and Flowise per case: visual orchestration where the client must edit it, code where fine control matters.",
        "Added full per-conversation traceability to audit every agent decision.",
        "Defined explicit fallbacks: if the model hesitates or the API fails, the lead goes to a human instead of dying silently.",
      ],
    },
    result: {
      es: [
        "Más de 10 sistemas entregados y en producción con clientes internacionales.",
        "Respuesta inmediata 24/7 sobre canales que antes dependían del horario comercial.",
        "Carga administrativa del equipo comercial reducida: el CRM se alimenta solo.",
      ],
      en: [
        "10+ systems delivered and running in production for international clients.",
        "Immediate 24/7 response on channels that used to depend on office hours.",
        "Sales team admin load cut: the CRM feeds itself.",
      ],
    },
    stack: ["OpenAI API", "n8n", "Flowise", "Node.js", "NestJS", "PostgreSQL", "Webhooks"],
    tags: {
      es: ["Agentes IA", "Conversión de leads", "Orquestación"],
      en: ["AI agents", "Lead conversion", "Orchestration"],
    },
  },
  {
    id: "data",
    year: "2026",
    title: "Consolidación multi-fuente",
    context: { es: "AIAutomatiza · España", en: "AIAutomatiza · Spain" },
    role: { es: "Ingeniería de datos", en: "Data engineering" },
    headline: {
      es: "200.000+ registros de Meta, Google y CRM reconciliados cada noche.",
      en: "200,000+ records from Meta, Google and the CRM reconciled every night.",
    },
    problem: {
      es: "Las métricas de campañas, el CRM interno y las plataformas de anuncios daban tres números distintos para la misma pregunta. Nadie sabía cuál era el costo real por lead, así que las decisiones de inversión se tomaban a ciegas.",
      en: "Campaign metrics, the internal CRM and the ad platforms gave three different numbers for the same question. Nobody knew the real cost per lead, so budget decisions were made blind.",
    },
    decisions: {
      es: [
        "Modelé un esquema canónico propio en vez de adaptarme al formato de cada plataforma.",
        "Ingesta incremental con control de duplicados y claves naturales por fuente.",
        "Procesos nocturnos de reconciliación automática que marcan las diferencias en lugar de esconderlas.",
        "Toda discrepancia queda registrada y es consultable: el sistema explica por qué dos fuentes no coinciden.",
      ],
      en: [
        "Modelled a canonical schema instead of bending to each platform's format.",
        "Incremental ingestion with duplicate control and natural keys per source.",
        "Nightly automatic reconciliation jobs that surface differences instead of hiding them.",
        "Every discrepancy is logged and queryable: the system explains why two sources disagree.",
      ],
    },
    result: {
      es: [
        "Más de 200.000 registros procesados y consolidados.",
        "Una sola versión de la verdad para reporting y decisiones de inversión.",
        "Cero conciliación manual: lo que antes era una planilla semanal ahora corre solo.",
      ],
      en: [
        "200,000+ records processed and consolidated.",
        "A single source of truth for reporting and budget decisions.",
        "Zero manual reconciliation: what was a weekly spreadsheet now runs itself.",
      ],
    },
    stack: ["Node.js", "PostgreSQL", "APIs Meta", "APIs Google", "ETL", "Cron jobs"],
    tags: {
      es: ["Ingeniería de datos", "ETL", "Reconciliación"],
      en: ["Data engineering", "ETL", "Reconciliation"],
    },
  },
  {
    id: "legacy",
    year: "2023 — 2025",
    title: "Rescate de sistema crítico",
    context: { es: "Maser Informática · Córdoba", en: "Maser Informática · Córdoba" },
    role: { es: "Full Stack Developer & referente técnico", en: "Full Stack Developer & technical lead" },
    headline: {
      es: "De caídas en cada pico a 3.000 solicitudes por hora sin downtime.",
      en: "From crashing at every peak to 3,000 requests per hour with no downtime.",
    },
    problem: {
      es: "Aplicaciones monolíticas en Angular v9 y endpoints en PHP y Node.js que se caían en los picos de carga. La deuda técnica hacía que cada feature nuevo tardara el doble y que nadie quisiera tocar los módulos críticos.",
      en: "Angular v9 monoliths and PHP/Node endpoints that collapsed at peak load. Technical debt doubled the cost of every new feature and nobody wanted to touch the critical modules.",
    },
    decisions: {
      es: [
        "Migración estratégica de Angular v9 a v16 por etapas, sin congelar el desarrollo de features.",
        "Refactorización de la capa de endpoints bajo principios SOLID, atacando primero los que más caían.",
        "Integración de pasarelas de pago de punta a punta con MercadoPago y arquitectura de webhooks para notificaciones en tiempo real.",
        "Procesos de code review y definición de stack para módulos nuevos, para no reconstruir la misma deuda.",
      ],
      en: [
        "Staged strategic migration from Angular v9 to v16, without freezing feature work.",
        "Refactored the endpoint layer under SOLID principles, starting with the worst offenders.",
        "End-to-end payment gateway integration with MercadoPago plus a webhook architecture for real-time notifications.",
        "Introduced code review and stack definition for new modules, to stop rebuilding the same debt.",
      ],
    },
    result: {
      es: [
        "Picos superiores a 3.000 solicitudes/hora soportados sin tiempo de inactividad.",
        "Deuda técnica reducida y tiempo de carga inicial mejorado en producción.",
        "Flujos transaccionales de pago seguros y trazables end-to-end.",
      ],
      en: [
        "Peaks above 3,000 requests/hour handled with zero downtime.",
        "Technical debt cut and initial load time improved in production.",
        "Secure, traceable end-to-end payment transaction flows.",
      ],
    },
    stack: ["Angular", "Node.js", "PHP", "SQL Server", "MercadoPago", "REST APIs"],
    tags: {
      es: ["Legacy", "Migración", "Pagos"],
      en: ["Legacy", "Migration", "Payments"],
    },
  },
  {
    id: "pedilo",
    year: "2025",
    title: "Pedilo — SaaS multi-tenant",
    context: { es: "Proyecto propio · Tesis en desarrollo", en: "Own project · Thesis in progress" },
    role: { es: "Arquitecto y desarrollador principal", en: "Architect and lead developer" },
    headline: {
      es: "Cada comercio con su menú digital, sus pedidos y su plata directa.",
      en: "Every merchant with their own digital menu, orders and money — direct.",
    },
    problem: {
      es: "Los comercios chicos dependen de plataformas que se quedan con una comisión alta y con la relación con el cliente. Necesitaban vender online sin intermediarios y sin pagar un desarrollo a medida cada uno.",
      en: "Small merchants depend on platforms that keep a high commission and own the customer relationship. They needed to sell online without middlemen and without paying for a bespoke build each.",
    },
    decisions: {
      es: [
        "Multi-tenancy con Row Level Security en PostgreSQL: el aislamiento de datos vive en la base, no en la confianza del código de aplicación.",
        "OAuth2 con MercadoPago por comercio: el dinero va directo a la cuenta del negocio, la plataforma no es intermediaria de fondos.",
        "Arquitectura BFF con NestJS separando el panel de administración del carrito público, con superficies de seguridad distintas.",
        "Motor de notificaciones con webhooks y WhatsApp Business API para el estado del pedido en tiempo real.",
      ],
      en: [
        "Multi-tenancy via PostgreSQL Row Level Security: isolation lives in the database, not in trusting app code.",
        "Per-merchant OAuth2 with MercadoPago: money goes straight to the business account, the platform never holds funds.",
        "BFF architecture with NestJS separating the admin panel from the public cart, with distinct security surfaces.",
        "Notification engine with webhooks and the WhatsApp Business API for real-time order status.",
      ],
    },
    result: {
      es: [
        "Plataforma multi-tenant operativa con aislamiento de datos garantizado a nivel base de datos.",
        "Comercios cobrando sin intermediarios ni comisión de plataforma sobre el ticket.",
        "Base del trabajo final de la carrera de Analista de Sistemas.",
      ],
      en: [
        "Working multi-tenant platform with data isolation guaranteed at the database level.",
        "Merchants collecting payments with no middleman and no platform cut per ticket.",
        "Foundation of my Systems Analyst final thesis.",
      ],
    },
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "Docker", "MercadoPago", "WhatsApp API"],
    tags: {
      es: ["Multi-tenant", "SaaS", "Tiempo real"],
      en: ["Multi-tenant", "SaaS", "Real-time"],
    },
  },
  {
    id: "commerce",
    year: "2024 — 2025",
    title: "E-commerce con IA",
    context: { es: "Sayasoft · Remoto", en: "Sayasoft · Remote" },
    role: { es: "Full Stack Developer & consultor de IA", en: "Full Stack Developer & AI consultant" },
    headline: {
      es: "Una tienda rápida que además escribe su propio contenido.",
      en: "A fast store that also writes its own content.",
    },
    problem: {
      es: "Una marca de indumentaria perdía ventas por una tienda lenta y mal indexada, y el equipo quemaba horas escribiendo descripciones de producto y posteos para redes uno por uno.",
      en: "A clothing brand was losing sales to a slow, poorly indexed store, and the team burned hours writing product descriptions and social posts one by one.",
    },
    decisions: {
      es: [
        "Next.js con renderizado híbrido: velocidad de carga y estructura SEO sin sacrificar la experiencia de compra.",
        "Supabase para auth, base en tiempo real y assets, acelerando el ciclo de despliegue sin montar infraestructura propia.",
        "Módulo con OpenAI API que genera descripciones y contenido de redes a partir de los datos del producto.",
        "Prompts versionados y revisión humana antes de publicar: la IA redacta, la marca aprueba.",
      ],
      en: [
        "Next.js with hybrid rendering: load speed and SEO structure without sacrificing the shopping experience.",
        "Supabase for auth, real-time database and assets, shortening the deploy cycle with no infrastructure to run.",
        "An OpenAI API module generating descriptions and social content from product data.",
        "Versioned prompts and human review before publishing: AI drafts, the brand approves.",
      ],
    },
    result: {
      es: [
        "30% menos tiempo operativo en tareas de contenido y carga de producto.",
        "Tienda con carga rápida y estructura SEO óptima desde el día uno.",
        "Ciclo de despliegue corto sobre arquitectura serverless.",
      ],
      en: [
        "30% less operational time on content and product loading tasks.",
        "Fast-loading store with a solid SEO structure from day one.",
        "Short deploy cycle on a serverless architecture.",
      ],
    },
    stack: ["Next.js", "TailwindCSS", "Supabase", "OpenAI API", "PostgreSQL"],
    tags: {
      es: ["E-commerce", "LLMs", "Serverless"],
      en: ["E-commerce", "LLMs", "Serverless"],
    },
  },
];

/* ---------------------------------------------------------- experience */

export const jobs: Job[] = [
  {
    company: "AIAutomatiza",
    place: { es: "Remoto — España", en: "Remote — Spain" },
    role: { es: "AI Engineer · Ingeniero de Proyectos", en: "AI Engineer · Project Engineer" },
    period: { es: "Dic 2025 — Actualidad", en: "Dec 2025 — Present" },
    current: true,
    bullets: {
      es: [
        "Responsable de la ingeniería de proyectos para clientes y desarrollos internos.",
        "Entrega de 10+ sistemas de agentes de IA para conversión de leads (código, n8n, Flowise).",
        "Mantenimiento y evolución de Sacia, el producto principal: 30% más de rendimiento.",
        "Consolidación multi-fuente de 200.000+ registros con reconciliación nocturna.",
        "10+ CRMs y plataformas integradas; 20% más rápida la respuesta de los sistemas.",
      ],
      en: [
        "Responsible for project engineering across client and internal work.",
        "Delivered 10+ AI agent systems for lead conversion (code, n8n, Flowise).",
        "Maintained and evolved Sacia, the core product: 30% better performance.",
        "Multi-source consolidation of 200,000+ records with nightly reconciliation.",
        "10+ CRMs and platforms integrated; 20% faster system response.",
      ],
    },
  },
  {
    company: "Sayasoft",
    place: { es: "Remoto", en: "Remote" },
    role: { es: "Full Stack Developer & Consultor de IA", en: "Full Stack Developer & AI Consultant" },
    period: { es: "Ene 2024 — Nov 2025", en: "Jan 2024 — Nov 2025" },
    current: false,
    bullets: {
      es: [
        "E-commerce integral en Next.js y TailwindCSS con estructura SEO óptima.",
        "Arquitectura serverless con Supabase: auth, tiempo real y assets.",
        "Agente con LLMs para registro de gastos y generación de contenido: 30% menos tiempo operativo.",
      ],
      en: [
        "End-to-end e-commerce in Next.js and TailwindCSS with a solid SEO structure.",
        "Serverless architecture on Supabase: auth, real-time and assets.",
        "LLM agent for expense tracking and content generation: 30% less operational time.",
      ],
    },
  },
  {
    company: "Maser Informática",
    place: { es: "Córdoba, Argentina", en: "Córdoba, Argentina" },
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: { es: "Oct 2023 — Jun 2025", en: "Oct 2023 — Jun 2025" },
    current: false,
    bullets: {
      es: [
        "Refactorización de endpoints PHP y Node.js: picos de 3.000+ solicitudes/hora sin downtime.",
        "Migración de monolitos Angular v9 a v16 reduciendo deuda técnica.",
        "Pasarelas de pago end-to-end con MercadoPago y arquitectura de webhooks.",
        "Definición de stacks y liderazgo de code reviews bajo principios SOLID.",
      ],
      en: [
        "Refactored PHP and Node.js endpoints: peaks of 3,000+ requests/hour with no downtime.",
        "Migrated Angular v9 monoliths to v16, cutting technical debt.",
        "End-to-end MercadoPago payment gateways with a webhook architecture.",
        "Defined stacks and led code reviews under SOLID principles.",
      ],
    },
  },
];

export const education = {
  title: { es: "Analista de Sistemas", en: "Systems Analyst" },
  school: "Instituto Leibnitz",
  place: { es: "Villa María, Córdoba", en: "Villa María, Córdoba" },
  note: { es: "Tesis en desarrollo (Pedilo)", en: "Thesis in progress (Pedilo)" },
} as const;

export const certifications = [
  { name: { es: "Oracle Cloud Infrastructure AI", en: "Oracle Cloud Infrastructure AI" }, meta: { es: "Certificación Profesional · Ene 2025", en: "Professional Certification · Jan 2025" } },
  { name: { es: "Desarrollo con Inteligencia Artificial", en: "Development with Artificial Intelligence" }, meta: { es: "Especialización · Jul 2024", en: "Specialization · Jul 2024" } },
  { name: { es: "Desarrollo Backend", en: "Backend Development" }, meta: { es: "Certificación Técnica · Jun 2022", en: "Technical Certification · Jun 2022" } },
];

export const languages = [
  { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
  { name: { es: "Inglés", en: "English" }, level: { es: "Técnico B2 · documentación y comunicación", en: "Technical B2 · documentation and communication" } },
];

/* ---------------------------------------------------------- toolbox */

export const toolbox = [
  {
    group: { es: "IA & automatización", en: "AI & automation" },
    items: ["Agentes de IA", "OpenAI API", "Claude Code", "Codex", "Prompt Engineering", "n8n", "Flowise", "NLP"],
  },
  {
    group: { es: "Frontend", en: "Frontend" },
    items: ["TypeScript", "Angular v9–v17+", "React", "Next.js", "Astro", "TailwindCSS", "Bootstrap"],
  },
  {
    group: { es: "Backend", en: "Backend" },
    items: ["Node.js", "NestJS", "Express", "PHP / Laravel", "REST APIs", "Microservicios"],
  },
  {
    group: { es: "Datos & cloud", en: "Data & cloud" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Supabase", "Docker", "GCP"],
  },
  {
    group: { es: "Arquitectura & proceso", en: "Architecture & process" },
    items: ["SOLID", "Clean Architecture", "Code Review", "Refactoring", "Scrum", "ETL"],
  },
];

/* ---------------------------------------------------------- ticker */

export const tickerItems = {
  es: [
    "Agentes de IA",
    "Ingeniería de datos",
    "Rescate de legacy",
    "Producto end-to-end",
    "Integraciones & CRMs",
    "Pagos online",
    "Arquitectura escalable",
  ],
  en: [
    "AI agents",
    "Data engineering",
    "Legacy rescue",
    "End-to-end product",
    "Integrations & CRMs",
    "Online payments",
    "Scalable architecture",
  ],
} as const;
