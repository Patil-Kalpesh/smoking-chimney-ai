import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  IndustryHero, IndustryIntro, IndustryPainPoints, IndustryCapabilities,
  IndustryProcess, IndustryCompliance, IndustryFAQ, IndustryCTA, IndustryRelated,
} from "@/components/Industries/IndustryPageLayout";

export const metadata = {
  title: "SaaS and AI Product Development Services | Smoking Chimney",
  description: "Product engineering for B2B SaaS: AI and document intelligence, API and backend engineering, cloud platforms, and workflow automation built to ship.",
  keywords: "enterprise SaaS development services, AI integration services, SaaS product engineering partner, API development company, cloud application development, document intelligence and OCR development",
  alternates: { canonical: "https://www.smokingchimney.in/industries/enterprise-saas-ai-development/" },
  openGraph: { title: "SaaS and AI Product Development Services | Smoking Chimney", description: "Product engineering for B2B SaaS and AI companies — inside your repositories, your tracker, and your release process.", url: "https://www.smokingchimney.in/industries/enterprise-saas-ai-development/", type: "website" },
};

const painPoints = [
  { title: "Roadmap pressure is the most common entry point", body: "Committed features, enterprise obligations, and platform debt compete for the same engineers, and hiring takes quarters a deal does not have. Contract engineering only works if it plugs into your software development lifecycle without supervision overhead — which is why our engagements start from your standards, your review process, and your definition of done." },
  { title: "Taking AI from prototype to production", body: "A model call is an afternoon; a production feature needs data pipelines, evaluation sets, guardrails, fallbacks, latency budgets, and cost controls — plus honest measurement. Teams that skip the harness ship demos that decay. We scope the harness before we scope the model." },
  { title: "Platform entropy", body: "Multi-tenant SaaS accumulates integrations, queues, event schemas, and one-off scripts until changes feel dangerous. Refactoring that backlog requires a partner who reads the existing system before proposing a new one — and who stabilizes before they beautify." },
];

const capabilities = [
  { icon: "ScanText", title: "AI & Document Intelligence", body: "OCR and structured extraction, document classification, fraud and risk signals, and summarization with human-in-the-loop review. Every model-assisted step ships with an evaluation harness, so quality is measured against a baseline rather than asserted in a demo." },
  { icon: "ServerCog", title: "Backend, API & Integration Engineering", body: "Multi-tenant services, versioned REST APIs, webhooks and events, billing and entitlement integrations, and the developer documentation your partners actually use. Designed for the integration failures that happen in production — schema drift, rate limits, vendor outages." },
  { icon: "Cloud", title: "Cloud Application Development", body: "Cloud-native architectures on AWS with infrastructure as code, CI/CD, environment separation, and observability from the first sprint. Tenancy, data isolation, and cost visibility are designed in — retrofitting any of them is a quarter of work nobody budgeted." },
  { icon: "Settings2", title: "Workflow Automation", body: "Approval chains, case management, SLA-driven routing, and audit trails — the unglamorous workflows that decide whether enterprise software sticks or gets shelved. Auditable, explainable process steps are a feature your enterprise buyers can see." },
  { icon: "RefreshCcw", title: "Product Redesigns & Rescues", body: "Taking over existing codebases: audit first, stabilize second, evolve third. We inherit other teams' systems regularly, so the engagement starts with a written assessment and a stabilization plan instead of a rewrite promise." },
];

const steps = [
  { title: "Discovery sprint", body: "One to two weeks inside your codebase and backlog: architecture review, integration inventory, and a written scope with acceptance criteria for the first package." },
  { title: "Work package delivery", body: "Fixed-scope increments with demo checkpoints; pull requests against your standards, reviewed by your engineers as well as ours." },
  { title: "Embedded rituals", body: "Your standups, your tracker, your release train — no parallel process to reconcile, no reporting theater." },
  { title: "Handover", body: "Documentation, runbooks, and a walkthrough per package, so the knowledge lands in your team, not in a departing contractor's head." },
  { title: "Next package or steady state", body: "Either a follow-on package from the same written roadmap or a clean wind-down; both are normal outcomes." },
];

const faqs = [
  { q: "Can you work within our existing stack and development process?", a: "That is the default, not an accommodation. We join your repositories, tracker, and rituals, submit pull requests against your standards, and adopt your definition of done. Stack decisions that already exist — languages, cloud, frameworks — are constraints we work within, not debates we reopen." },
  { q: "How do you price AI features?", a: "By scoped work package, after a discovery sprint establishes data readiness, acceptance criteria, and evaluation approach. We avoid open-ended time-and-materials for AI work deliberately: in our experience the risk sits in evaluation and data quality, not in writing code, so the scope has to make those explicit." },
  { q: "Can you take over an existing codebase mid-roadmap?", a: "Yes — rescues are a normal engagement for us. The first package is an audit and stabilization plan, not a rewrite proposal: we map the system, fix what is on fire, document what we found, and only then plan evolution. You get a written assessment you can act on even if you never hire us again." },
  { q: "Do you build the AI models yourselves?", a: "We build applications on the right foundations — managed foundation models, cloud AI services, and purpose-built components where warranted — and we are candid about the trade-offs of each. When a rules-based solution is more reliable, cheaper, or more explainable than a model, we recommend it; the goal is the outcome, not the AI." },
];

const related = [
  { icon: "Landmark", title: "Financial Services & RegTech", description: "Document intelligence and verification pipelines for KYC/KYB and compliance platforms.", href: "/industries/fintech-regtech-software-development/" },
  { icon: "Stethoscope", title: "Healthcare & HealthTech", description: "AI-enabled clinical workflows and document automation for health products.", href: "/industries/healthtech-software-development/" },
  { icon: "ShieldHalf", title: "Cybersecurity & Digital Trust", description: "AI risk applications, secure backends, and identity engineering for trust platforms.", href: "/industries/cybersecurity-identity-software-development/" },
];

export default function EnterpriseSaasAIPage() {
  return (
    <>
      <Header />
      <main>
        <IndustryHero
          eyebrow="Enterprise SaaS, AI & Data Platforms"
          headline="Enterprise SaaS and AI Product Development"
          subtext="Product engineering for B2B SaaS and AI companies — backend, document intelligence, cloud, and workflow automation inside your repositories and release process."
          ctaLabel="Discuss your roadmap"
        />
        <IndustryIntro
          label="SaaS and AI product development services"
          headline="When the roadmap is outrunning the org chart"
          highlightWords={["roadmap", "org"]}
          body="Established B2B SaaS and AI companies come to Smoking Chimney Studios® when they need delivery capacity with senior judgment — a committed release, an enterprise customer integration, or a refactor nobody has bandwidth for. We work as a product engineering partner, inside your repositories and release process rather than parallel to them."
        />
        <IndustryPainPoints label="What teams bring us" headline="What SaaS and AI teams bring us" highlightWords={["SaaS", "AI"]} points={painPoints} />
        <IndustryCapabilities label="What we build" headline="Engineering capabilities for SaaS and AI product teams" highlightWords={["SaaS", "AI"]} items={capabilities} />
        <IndustryProcess label="How an engagement works" headline="Scoped work packages — not open-ended retainers" highlightWords={["Scoped", "retainers"]} steps={steps} />
        <IndustryCompliance
          headline="Working with AI responsibly"
          body="Three commitments apply to every AI feature we build. First, evaluation before exposure: no model-assisted step ships without an evaluation set, a baseline, and a definition of what 'better' means for your metric. Second, humans where it matters: review steps are designed into the workflow, with override logging, wherever an error would cost a customer money, reputation, or regulatory standing. Third, data discipline: training and inference data are minimized, retention is explicit, and your customers' data is never an experiment. If a candidate feature cannot survive those three commitments, we will tell you it should not be an AI feature — and usually, a deterministic version ships faster anyway."
        />
        <IndustryFAQ label="Frequently asked questions" headline="Questions SaaS and AI engineering leaders ask us" highlightWords={["SaaS", "AI"]} faqs={faqs} />
        <IndustryCTA headline="Planning an AI-enabled release, a platform refactor, or a new SaaS module?" subtext="We plug in and ship. No supervision overhead." ctaLabel="Contact us to discuss your requirements" />
        <IndustryRelated items={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
