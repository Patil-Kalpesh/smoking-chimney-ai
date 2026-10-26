import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  ServiceHero, ServiceIntro, ServiceCapabilities,
  ServiceWhyUs, ServiceProcess, ServiceFAQ, ServiceCTA, ServiceRelated,
} from "@/components/Services/ServicePageLayout";

export const metadata = {
  title: "SaaS MVP Development Services | Smoking Chimney",
  description: "Smoking Chimney is a SaaS MVP development company helping startups and enterprises build, launch, and scale custom SaaS products — from idea validation to production-ready cloud applications.",
  keywords: "SaaS development company, SaaS development services, SaaS MVP development, MVP development company, custom SaaS application development, enterprise SaaS development, startup product development company, custom software development company, end-to-end product development, SaaS product engineering, enterprise application development, software architecture consulting, cloud application development",
  alternates: { canonical: "https://www.smokingchimney.in/services/saas-mvp-development/" },
  openGraph: { title: "SaaS MVP Development Services | Smoking Chimney", description: "From validated idea to revenue-generating SaaS product. Smoking Chimney designs and engineers MVPs that founders are proud to show investors — and customers love to pay for.", url: "https://www.smokingchimney.in/services/saas-mvp-development/", type: "website" },
};

const capabilities = [
  { icon: "Lightbulb", title: "Product Discovery & Architecture", description: "We transform your napkin sketch into a battle-tested product spec — user stories, wireframes, and a cloud-native architecture roadmap before we write line one.", features: ["User story mapping", "Technical architecture design", "Technology stack selection", "MVP scope prioritisation"] },
  { icon: "Palette", title: "UI/UX Design for SaaS", description: "First impressions close deals. We design SaaS interfaces that are intuitive enough for non-technical users yet powerful enough for power users.", features: ["User research & personas", "Interactive prototyping", "Design system creation", "Accessibility compliance"] },
  { icon: "Code2", title: "Full-Stack SaaS Engineering", description: "From multi-tenant databases to real-time dashboards, our engineers build the complete SaaS application stack end-to-end.", features: ["Multi-tenancy architecture", "Role-based access control", "Real-time features (WebSocket)", "Billing & subscription management"] },
  { icon: "Server", title: "Cloud-Native Deployment", description: "We deploy your SaaS on AWS, GCP, or Azure with infrastructure-as-code, auto-scaling, and zero-downtime CI/CD pipelines from the very first release.", features: ["Kubernetes / ECS orchestration", "Terraform / Pulumi IaC", "CDN & edge optimisation", "99.9%+ uptime SLAs"] },
  { icon: "BarChart3", title: "Analytics & Instrumentation", description: "We wire product analytics, error tracking, and business KPI dashboards from day one — so you're never flying blind after launch.", features: ["Event tracking setup", "Funnel & retention analytics", "Error monitoring (Sentry)", "Custom KPI dashboards"] },
  { icon: "TrendingUp", title: "Post-MVP Growth Engineering", description: "After your MVP validates the market, we scale your architecture, add enterprise-grade features, and build the integrations your best customers ask for.", features: ["Horizontal scaling", "Enterprise SSO & SAML", "API & webhook ecosystem", "White-label capabilities"] },
];

const whyUs = [
  { icon: "Timer", title: "Faster time-to-market", body: "Our proven SaaS MVP playbook has shipped production-ready products in as few as 8 weeks. We know which shortcuts to take — and which ones will hurt you at scale." },
  { icon: "BadgeCheck", title: "Investor-ready from day one", body: "We build MVPs that are architecturally sound, not just demo-ready. Investors and technical due-diligence reviewers consistently validate our codebases." },
  { icon: "Blocks", title: "Built to evolve, not rewrite", body: "Our modular SaaS architectures are designed so that new features slot in cleanly — no expensive rewrites 18 months in." },
  { icon: "Handshake", title: "True product partnership", body: "We don't just code tickets. We challenge your assumptions, suggest better UX patterns, and act as a founding engineering partner who's invested in your success." },
];

const steps = [
  { title: "Discovery sprint (Week 1–2)", body: "We run structured workshops to define your target user, core value proposition, and the minimum feature set needed to prove market fit." },
  { title: "Architecture & stack design (Week 2–3)", body: "We choose the right cloud-native stack, define the data model, design the multi-tenant architecture, and create an API contract for all services." },
  { title: "Design system & UX sprint (Week 3–4)", body: "High-fidelity prototypes that reflect your brand and solve real user jobs — reviewed with you in weekly design critiques before any frontend code is written." },
  { title: "Iterative development sprints (Week 4–10)", body: "Two-week agile sprints with a working, deployable increment at the end of each — so you're always seeing real progress, not slideware." },
  { title: "Beta testing & QA (Week 10–12)", body: "We run your beta with real users, fix critical feedback, and harden the product through automated and manual QA before public launch." },
  { title: "Launch & growth roadmap", body: "Public launch, post-launch monitoring, and a prioritised backlog of growth features to take you from MVP to market leader." },
];

const faqs = [
  { q: "How much does a SaaS MVP development project typically cost?", a: "SaaS MVP budgets vary widely based on complexity. A focused, well-scoped MVP typically ranges from $20,000 to $80,000. We always provide a detailed scope-of-work and fixed-price quote after a free discovery call so there are no surprises." },
  { q: "How long does it take to build a SaaS MVP?", a: "A well-scoped MVP typically takes 8–14 weeks from kickoff to production launch. Projects with more complex features like AI pipelines, payment infrastructure, or real-time collaboration add 2–4 additional weeks." },
  { q: "Do you help with the technical architecture, or just coding?", a: "We handle both. Our senior architects are involved from day one — technology selection, data modelling, API design, and infrastructure planning all happen before we write any code. You get a full technical blueprint as a deliverable." },
  { q: "Can you integrate AI features into the SaaS MVP?", a: "Absolutely. We regularly integrate LLMs (GPT-4, Claude, Gemini), RAG pipelines, vector databases, and AI-powered features into SaaS products. If AI is a differentiator for your product, we'll design the architecture accordingly." },
  { q: "What happens after the MVP launches?", a: "We offer ongoing retainer-based engagement for feature development, scaling, and maintenance. Many clients continue with us as their de facto engineering team until they hire in-house." },
];

const related = [
  { icon: "Plug", title: "API & Enterprise Integration", description: "Wire your SaaS into the tools your customers already use — CRMs, ERPs, payment gateways and more.", href: "/services/api-enterprise-integration/" },
  { icon: "Bot", title: "AI Development", description: "Add LLM-powered features, AI agents, and intelligent automation to your SaaS product.", href: "/services/ai-development/" },
  { icon: "ShieldCheck", title: "KYC/KYB Software", description: "Build compliant user onboarding and identity verification into your SaaS from day one.", href: "/services/kyc-kyb-software-development/" },
];

export default function SaaSMVPPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero eyebrow="SaaS MVP Development" headline="From Idea to Revenue-Generating SaaS — Fast." subtext="We design, engineer, and launch SaaS products that founders are proud to demo and customers love to pay for. Your MVP, built the right way from day one." ctaLabel="Book a Free Product Discovery Call" />
        <ServiceIntro label="End-to-end SaaS product engineering" headline="Great SaaS products need great engineering partners" highlightWords={["great", "engineering"]} body="Most MVPs fail not because the idea was bad, but because they were built too quickly, with the wrong architecture, by people who didn't understand the product. Smoking Chimney brings founder-level product thinking to every SaaS engagement — so you ship with confidence." />
        <ServiceCapabilities label="What we deliver" headline="Every capability you need to launch and scale your SaaS" highlightWords={["launch", "scale"]} items={capabilities} />
        <ServiceWhyUs label="Why Smoking Chimney" headline="Your startup's first engineering team, without the hiring risk" highlightWords={["engineering", "hiring"]} points={whyUs} />
        <ServiceProcess label="How we work" headline="12 weeks from validated idea to live SaaS product" highlightWords={["12", "weeks"]} steps={steps} />
        <ServiceFAQ label="Common questions" headline="Everything founders ask before starting a SaaS project" highlightWords={["founders", "SaaS"]} faqs={faqs} />
        <ServiceCTA headline="Ready to build the SaaS your customers have been waiting for?" subtext="Ideas are cheap. Execution is everything." ctaLabel="Let's build your MVP" />
        <ServiceRelated services={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
