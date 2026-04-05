export const SITE = {
  name: "CHTZ-Tech",
  domain: "chtz-tech.dev",
  url: "https://chtz-tech.dev",
  email: "hello@chtz-tech.dev",
  tagline: "Senior engineers. Production-grade code.",
} as const;

export const NAV = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Start Your Project", href: "#contact" },
} as const;

export const HERO = {
  h1: "Custom Software Development Studio — Web, AI & Web3",
  subhead:
    "Senior engineers building production-grade applications for startups and enterprises. From architecture to deployment — we own the outcome.",
  ctaPrimary: { label: "Start Your Project", href: "#contact" },
  ctaSecondary: { label: "See How We Work", href: "#process" },
  trustSignals: [
    "40+ products shipped",
    "Senior engineers only",
    "95+ Lighthouse scores",
  ],
  // Animated floating cards (wave animation, 4 cards)
  floatingCards: [
    { label: "TypeScript", sub: "strict mode", color: "purple" },
    { label: "Next.js 16", sub: "App Router", color: "green" },
    { label: "95+", sub: "Lighthouse", color: "orange" },
    { label: "Solidity", sub: "EVM ready", color: "purple" },
  ],
} as const;

// ── How It Works (comparison section) ───────────────────────────
export const HOW = {
  heading: "The Old Way vs The CHTZ-Tech Way",
  label: "How It Works",
  old: {
    title: "Working with typical agencies",
    variant: "sad" as const,
    points: [
      "Junior devs executing without ownership",
      "Architecture decisions deferred until things break",
      "You wait weeks before seeing working code",
      "Codebase needs a rewrite after handoff",
      "Communication gaps and missed deadlines",
    ],
  },
  new: {
    title: "Working with CHTZ-Tech",
    variant: "happy" as const,
    points: [
      "Senior engineers own architecture and execution",
      "System design documented before first commit",
      "Working software shipped every week",
      "Production-grade code you can build on",
      "Clear communication, no surprises",
    ],
  },
} as const;

// ── FastStart (first dark CTA) ───────────────────────────────────
export const FAST_START = {
  heading: "Ship your first feature in\u00a02\u00a0weeks.",
  body: "One discovery call. A detailed technical plan. Working code in your hands — not a deck, not a wireframe.",
  cta: { label: "Book a Discovery Call", href: "#contact" },
} as const;

// ── Benefits (6-card grid + CTA card) ───────────────────────────
export const BENEFITS = {
  heading: "What You Get with Every Project",
  label: "The CHTZ-Tech Standard",
  items: [
    {
      icon: "TS",
      title: "Type-Safe by Default",
      description:
        "TypeScript strict mode across every layer — frontend, backend, and API contracts. Zero runtime type surprises.",
    },
    {
      icon: "95",
      title: "95+ Lighthouse",
      description:
        "Performance is a build requirement, not an afterthought. Every project ships with verified Core Web Vitals.",
    },
    {
      icon: "CI",
      title: "CI/CD from Day 1",
      description:
        "Automated pipelines, test coverage, and zero-manual-deploy from the first commit. No 'we'll add it later'.",
    },
    {
      icon: "⊕",
      title: "Clear Architecture",
      description:
        "System design documented before the first line of code. You know exactly what we're building and why.",
    },
    {
      icon: "▷",
      title: "Weekly Delivery",
      description:
        "Working software in your hands every week. No radio silence, no big-bang releases.",
    },
    {
      icon: "◎",
      title: "You Own the Code",
      description:
        "Clean handoff docs, zero lock-in, full IP transfer. Your codebase, your infrastructure.",
    },
  ],
} as const;

// ── Tech Stack (Products / inverted dot pattern) ─────────────────
export const TECH_STACK = {
  heading: "Our Stack",
  label: "Proven Tools",
  description:
    "Technologies we ship in production — not just list on a CV.",
  groups: [
    {
      comment: "/* web + fullstack */",
      name: "Web & Fullstack",
      techs: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
      ],
    },
    {
      comment: "/* ai + web3 */",
      name: "AI & Web3",
      techs: [
        "Python",
        "LangChain",
        "OpenAI API",
        "Solidity",
        "Hardhat",
        "Wagmi",
      ],
    },
  ],
} as const;

// ── Partnership (second dark CTA) ────────────────────────────────
export const PARTNERSHIP = {
  heading: "Looking for a long-term engineering\u00a0partner?",
  body: "We work with teams that value quality and clear communication. Not just a one-time build\u00a0—\u00a0a working relationship.",
  cta: { label: "Let's Talk", href: "#contact" },
} as const;

export const SERVICES = {
  heading: "Our Software Development Services",
  items: [
    {
      icon: "⬡",
      title: "Web Application Development",
      description:
        "Production-grade web applications built with Next.js, React, and TypeScript. From marketing sites to complex SaaS platforms.",
    },
    {
      icon: "◈",
      title: "AI Development & Integration",
      description:
        "LLM-powered features, AI automation, and machine learning integration. We bring AI into existing products or build AI-native applications.",
    },
    {
      icon: "⬢",
      title: "Web3 & Blockchain Development",
      description:
        "Smart contracts, DeFi protocols, token infrastructure, and decentralized applications. Solidity, Hardhat, and modern Web3 tooling.",
    },
    {
      icon: "▣",
      title: "Fullstack Product Development",
      description:
        "End-to-end product builds from idea to production. Architecture, frontend, backend, infrastructure — shipped in weeks, not months.",
    },
    {
      icon: "◉",
      title: "Enterprise Software Solutions",
      description:
        "Custom admin dashboards, internal tools, and enterprise platforms. Built for scale, security, and long-term maintainability.",
    },
  ],
} as const;

export const WHY_US = {
  heading: "Why Teams Choose Us",
  items: [
    {
      icon: "01",
      title: "Senior Engineers Only",
      description:
        "No juniors learning on your project. Every team member has 8+ years of production experience across multiple domains.",
    },
    {
      icon: "02",
      title: "Full Lifecycle Ownership",
      description:
        "From architecture to deployment to monitoring. We don't hand off half-finished work — we own the outcome end to end.",
    },
    {
      icon: "03",
      title: "Performance-First Development",
      description:
        "Every project ships with 95+ Lighthouse scores, type-safe code, automated testing, and CI/CD from day one.",
    },
  ],
} as const;

export const PROCESS = {
  heading: "Our Development Process",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "We dive into your requirements, define scope, and identify risks. You get a detailed technical plan and timeline.",
    },
    {
      number: "02",
      title: "Architecture",
      description:
        "System design, tech stack decisions, database schema, API contracts. Everything documented before the first line of code.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "2-week sprints with continuous delivery. You see working software from week one. CI/CD, automated testing, code reviews.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "Production deployment with monitoring, performance audits, and handoff documentation. We stay available for iterations.",
    },
  ],
} as const;

export const CAPABILITIES = {
  heading: "Capabilities",
  description: "The full engineering surface we cover on every project.",
  items: [
    {
      title: "Backend Systems",
      description:
        "APIs, databases, server-side logic, microservices, and authentication — built to scale.",
    },
    {
      title: "Product UI",
      description:
        "React, Next.js, responsive and accessible interfaces with strong visual execution.",
    },
    {
      title: "AI Agents",
      description:
        "LLM integrations, retrieval-augmented generation, automation pipelines, and AI-powered features.",
    },
    {
      title: "SDK & API Integrations",
      description:
        "Third-party services, payment systems, data providers, and webhooks — wired in cleanly.",
    },
    {
      title: "Blockchain & Smart Contracts",
      description:
        "Solidity, ERC standards, DeFi protocols, and on-chain/off-chain architecture.",
    },
    {
      title: "Infra & Reliability",
      description:
        "CI/CD pipelines, monitoring, performance budgets, and zero-downtime deploys.",
    },
  ],
} as const;

export const FAQ = {
  heading: "Frequently Asked Questions",
  items: [
    {
      question: "How much does custom software development cost?",
      answer:
        "Project costs depend on scope, complexity, and timeline. A typical MVP starts at $20K–$40K. Enterprise projects range from $50K–$200K+. We provide detailed estimates after a free discovery call.",
    },
    {
      question: "How long does MVP development take?",
      answer:
        "A focused MVP typically takes 4–8 weeks from kickoff to production. Complex products with AI or Web3 components may take 8–12 weeks. We prioritize shipping fast without cutting corners on code quality.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "Our core stack: Next.js, React, TypeScript, Node.js, PostgreSQL. For AI: Python, LangChain, OpenAI/Anthropic APIs. For Web3: Solidity, Hardhat, Wagmi.",
    },
    {
      question: "Do you work with startups or enterprises?",
      answer:
        "Both. We help startups build MVPs and scale their products, and we help enterprises build custom internal tools, AI integrations, and blockchain infrastructure.",
    },
    {
      question: "How do I choose a software development partner?",
      answer:
        "Look for relevant technical expertise, a clear process, and a portfolio of shipped products. Ask about engineering standards, testing practices, and communication. We recommend starting with a small engagement to evaluate fit.",
    },
    {
      question: "What is your development process?",
      answer:
        "Discovery (1 week) → Architecture (1 week) → Development in 2-week sprints → Launch with monitoring. Every project includes CI/CD, automated testing, and performance budgets from day one.",
    },
  ],
} as const;

export const CTA_SECTION = {
  heading: "Start Your Software Project",
  body: "Have an idea or a project that needs senior engineering? Tell us about it. We respond within 24 hours.",
  budgetOptions: [
    { label: "Select a budget range", value: "" },
    { label: "Under $20K", value: "under-20k" },
    { label: "$20K – $50K", value: "20k-50k" },
    { label: "$50K – $150K", value: "50k-150k" },
    { label: "$150K+", value: "150k-plus" },
  ],
} as const;

export const FOOTER = {
  tagline: "Senior engineers. Production-grade code.",
  links: [
    { label: "GitHub", href: "https://github.com/chtz-tech" },
    { label: "LinkedIn", href: "#" },
    { label: "hello@chtz-tech.dev", href: "mailto:hello@chtz-tech.dev" },
  ],
  copyright: `© ${new Date().getFullYear()} CHTZ-Tech`,
} as const;

// ── V2 Content ───────────────────────────────────────────────────

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$20K – $40K',
    description: 'For focused MVPs and early-stage products',
    badge: null,
    features: [
      '4–6 week delivery',
      'MVP scope + architecture plan',
      'TypeScript strict mode + 95+ Lighthouse',
      'CI/CD pipeline from day one',
      'Full code handoff + documentation',
      '1 month post-launch support',
    ],
    cta: 'Book a Discovery Call',
    ctaHref: 'mailto:hello@chtz-tech.dev',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$40K – $100K',
    description: 'For products that need AI or Web3 integration',
    badge: 'Most Popular',
    features: [
      '6–10 week delivery',
      'All Starter features',
      'AI integration or Web3 layer',
      'Multi-service architecture',
      'Monitoring + alerting setup',
      '3 months post-launch support',
    ],
    cta: 'Book a Discovery Call',
    ctaHref: 'mailto:hello@chtz-tech.dev',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams that need a long-term engineering partner',
    badge: null,
    features: [
      'Full scope discovery call',
      'All Growth features',
      'Dedicated senior engineer',
      'Long-term partnership model',
      'Architecture review + audit',
      'On-call + SLA options',
    ],
    cta: 'Contact Us',
    ctaHref: 'mailto:hello@chtz-tech.dev',
  },
]

export const PRINCIPLES = [
  {
    id: 'outcomes',
    type: 'statement' as const,
    content: "We don't ship code. We ship outcomes. Every architectural decision is documented and justified.",
    label: 'Engineering First',
    large: true,
  },
  {
    id: 'typesafe',
    type: 'metric' as const,
    title: 'Type-Safe by Default',
    body: 'TypeScript strict mode on every project. No exceptions.',
    tag: '// strict: true',
  },
  {
    id: 'weekly',
    type: 'metric' as const,
    title: 'Weekly Delivery',
    body: 'Working software shipped every sprint — not just updates.',
    tag: '// ship weekly',
  },
  {
    id: 'lighthouse',
    type: 'metric' as const,
    title: '95+ Lighthouse',
    body: 'Performance is not an afterthought. It is a requirement.',
    tag: '// perf budget',
  },
  {
    id: 'cicd',
    type: 'metric' as const,
    title: 'CI/CD from Day 1',
    body: 'Automated pipelines, testing, and deployment configured before the first feature.',
    tag: '// automate all',
  },
  {
    id: 'ownership',
    type: 'statement' as const,
    content: 'You own everything. Clean handoff, full documentation, zero lock-in.',
    label: 'Your Code',
    large: true,
  },
]

export const TECH_LOGOS = [
  { src: 'https://svgl.app/library/nextjs_icon_dark.svg', alt: 'Next.js' },
  { src: 'https://svgl.app/library/typescript.svg', alt: 'TypeScript' },
  { src: 'https://svgl.app/library/react.svg', alt: 'React' },
  { src: 'https://svgl.app/library/nodejs.svg', alt: 'Node.js' },
  { src: 'https://svgl.app/library/postgresql.svg', alt: 'PostgreSQL' },
  { src: 'https://svgl.app/library/prisma.svg', alt: 'Prisma' },
  { src: 'https://svgl.app/library/python.svg', alt: 'Python' },
  { src: 'https://svgl.app/library/openai.svg', alt: 'OpenAI' },
  { src: 'https://svgl.app/library/solidity.svg', alt: 'Solidity' },
  { src: 'https://svgl.app/library/tailwindcss.svg', alt: 'Tailwind CSS' },
  { src: 'https://svgl.app/library/vercel.svg', alt: 'Vercel' },
  { src: 'https://svgl.app/library/github.svg', alt: 'GitHub' },
]

export const FOOTER_LINKS = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'AI Development', href: '#services' },
      { label: 'Web3 & Blockchain', href: '#services' },
      { label: 'Enterprise Software', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How We Work', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]
