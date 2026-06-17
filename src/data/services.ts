export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string; // lucide name
  highlights: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "seo",
    title: "Search Engine Optimization",
    tagline: "Rank where it matters. Convert who matters.",
    description:
      "Data-driven SEO that compounds. We engineer technical foundations, authoritative content, and link equity that move you to page one — and keep you there.",
    icon: "Search",
    highlights: ["Technical SEO audits", "Keyword & intent mapping", "On-page & schema", "Authority link building"],
    deliverables: ["Monthly ranking reports", "Custom content calendar", "Backlink acquisition", "Core Web Vitals tuning"],
    process: [
      { step: "Audit", detail: "Full technical, content, and competitor analysis." },
      { step: "Strategy", detail: "Keyword clusters mapped to funnel stages." },
      { step: "Execute", detail: "On-page optimization, content, outreach." },
      { step: "Scale", detail: "Iterate on what wins, double down on intent." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Sites engineered for speed, scale, and conversion.",
    description:
      "From marketing sites to complex platforms — we ship fast, accessible, beautifully-engineered websites using modern stacks built to last.",
    icon: "Code2",
    highlights: ["Next.js & TanStack", "Headless CMS", "E-commerce builds", "Performance budgets"],
    deliverables: ["Custom design system", "CMS integration", "Analytics & A/B testing", "99.9% uptime hosting"],
    process: [
      { step: "Discover", detail: "Stakeholder interviews and product framing." },
      { step: "Design", detail: "Wireframes → high-fidelity prototypes." },
      { step: "Build", detail: "Component-driven engineering with reviews." },
      { step: "Launch", detail: "Monitoring, training, and continuous care." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Full-funnel growth, measured and accountable.",
    description:
      "Paid media, lifecycle marketing, and CRO that work as a system. Every dollar tracked, every channel attributed, every quarter compounding.",
    icon: "TrendingUp",
    highlights: ["Google & Meta Ads", "Email & lifecycle", "Conversion rate optimization", "Attribution & analytics"],
    deliverables: ["Campaign management", "Creative production", "Landing page builds", "Weekly performance reports"],
    process: [
      { step: "Diagnose", detail: "Find the bottleneck in your funnel." },
      { step: "Test", detail: "Disciplined experimentation framework." },
      { step: "Optimize", detail: "Compound winners across channels." },
      { step: "Report", detail: "Transparent dashboards, real numbers." },
    ],
  },
  {
    slug: "branding",
    title: "Branding & Design",
    tagline: "Identities that earn trust on first glance.",
    description:
      "Strategic brand systems — names, marks, voice, and visual language — built to differentiate, scale, and resonate across every touchpoint.",
    icon: "Palette",
    highlights: ["Brand strategy", "Logo & identity", "Design systems", "Pitch & sales decks"],
    deliverables: ["Brand guidelines", "Logo suite", "Typography & color tokens", "Launch assets"],
    process: [
      { step: "Research", detail: "Market, audience, and category analysis." },
      { step: "Define", detail: "Positioning, voice, and visual territory." },
      { step: "Design", detail: "Identity system across surfaces." },
      { step: "Activate", detail: "Rollout playbook and guidelines." },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    tagline: "Native-feel apps for iOS and Android.",
    description:
      "We design and ship cross-platform mobile experiences with React Native and native modules — fast iteration, App Store quality.",
    icon: "Smartphone",
    highlights: ["React Native & Swift/Kotlin", "Offline-first architecture", "Push & deep linking", "App Store submission"],
    deliverables: ["Designed UI kit", "Production app builds", "CI/CD pipelines", "Post-launch support"],
    process: [
      { step: "Scope", detail: "MVP definition and feature prioritization." },
      { step: "Prototype", detail: "Interactive flows tested with users." },
      { step: "Engineer", detail: "Sprint-based delivery with QA." },
      { step: "Release", detail: "Submission, monitoring, iteration." },
    ],
  },
  {
    slug: "content-social",
    title: "Content & Social Media",
    tagline: "Stories your audience actually shares.",
    description:
      "Editorial-grade content and social systems that build authority, community, and demand — across long-form, short-form, and everything in between.",
    icon: "Megaphone",
    highlights: ["Content strategy", "Long & short-form video", "Social management", "Community building"],
    deliverables: ["Monthly content calendar", "Original videos & graphics", "Community moderation", "Engagement reports"],
    process: [
      { step: "Listen", detail: "Audience research and trend mining." },
      { step: "Plan", detail: "Pillars, formats, posting cadence." },
      { step: "Produce", detail: "In-house studio quality at scale." },
      { step: "Grow", detail: "Optimize for reach, save, and share." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
