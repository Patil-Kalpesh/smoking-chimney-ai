import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  ServiceHero, ServiceIntro, ServiceCapabilities,
  ServiceWhyUs, ServiceProcess, ServiceFAQ, ServiceCTA, ServiceRelated,
} from "@/components/Services/ServicePageLayout";

export const metadata = {
  title: "API & Enterprise Integration Services | Smoking Chimney",
  description:
    "Smoking Chimney is a custom API development company specialising in enterprise systems integration, SaaS API integration, legacy system modernisation, and secure backend integration services.",
  keywords:
    "API integration services, API development company, enterprise systems integration services, custom API development, third-party API integration, enterprise application integration, SaaS API integration, backend integration services, legacy system integration, cloud integration services, webhook integration services, secure API development, software integration company",
  alternates: { canonical: "https://www.smokingchimney.in/services/api-enterprise-integration/" },
  openGraph: {
    title: "API & Enterprise Integration Services | Smoking Chimney",
    description: "Connect every tool, platform, and data source in your enterprise ecosystem with Smoking Chimney's battle-tested API and systems integration services.",
    url: "https://www.smokingchimney.in/services/api-enterprise-integration/",
    type: "website",
  },
};

const capabilities = [
  { icon: "Plug", title: "Custom API Development", description: "Purpose-built REST, GraphQL, and gRPC APIs designed around your exact data contracts, security requirements, and performance SLAs.", features: ["RESTful & GraphQL APIs", "gRPC & WebSocket", "API versioning & docs", "Rate limiting & throttling"] },
  { icon: "Link2", title: "Third-Party API Integration", description: "Seamlessly connect Stripe, Salesforce, HubSpot, Twilio, AWS, and hundreds more third-party services into your product without the integration headaches.", features: ["Payment gateways", "CRM & ERP connectors", "Communication APIs", "Cloud provider SDKs"] },
  { icon: "Building2", title: "Legacy System Modernisation", description: "Breathe new life into monolithic or on-prem systems by wrapping them with modern API layers — zero downtime, maximum ROI.", features: ["API façade patterns", "SOAP-to-REST migration", "Middleware bridging", "Incremental modernisation"] },
  { icon: "Cloud", title: "Cloud & SaaS Integration", description: "Stitch together your SaaS stack — from Shopify to Salesforce — so data flows intelligently across every platform in real time.", features: ["iPaaS orchestration", "Event-driven sync", "Multi-tenant architecture", "Bi-directional data flows"] },
  { icon: "Webhook", title: "Webhook & Event Pipelines", description: "Design reliable, at-least-once delivery webhook systems and event-driven architectures that keep your services in perfect sync.", features: ["Retry & dead-letter queues", "Idempotency keys", "Event schema registry", "Real-time monitoring"] },
  { icon: "ShieldCheck", title: "Secure API Development", description: "Every endpoint ships with OWASP Top-10 protections, OAuth 2.0 / JWT auth, and end-to-end encryption as standard — not an afterthought.", features: ["OAuth 2.0 & OpenID Connect", "API key management", "Input validation & WAF", "Audit logging"] },
];

const whyUs = [
  { icon: "Zap", title: "Speed without cutting corners", body: "Our integration specialists have shipped 100+ enterprise API projects. We move fast because we've solved these problems before — you benefit from accumulated institutional knowledge." },
  { icon: "Layers", title: "Full-stack integration ownership", body: "We own the API layer from schema design to production deployment, monitoring, and documentation — one vendor, zero finger-pointing." },
  { icon: "TrendingUp", title: "Built for scale from day one", body: "Whether you're processing 1,000 or 10 million API calls a day, our architectures are designed to scale horizontally without re-engineering." },
  { icon: "Lock", title: "Security-first by default", body: "Every integration is pen-tested and reviewed against OWASP, SOC 2, and GDPR requirements before it touches production." },
];

const steps = [
  { title: "Discovery & API audit", body: "We map your existing tech stack, data flows, and integration pain points to design the optimal API architecture before writing a single line of code." },
  { title: "Contract-first API design", body: "OpenAPI / AsyncAPI specs are written and agreed upon upfront — giving every team a single source of truth and enabling parallel development." },
  { title: "Development & unit testing", body: "We build, mock, and unit-test each endpoint in isolation, catching issues at the lowest-cost stage of development." },
  { title: "Integration & load testing", body: "End-to-end integration tests, chaos engineering, and load tests ensure your APIs hold up under real-world traffic before go-live." },
  { title: "Deployment & monitoring setup", body: "We deploy with zero-downtime strategies and configure dashboards, alerting, and distributed tracing from day one." },
  { title: "Documentation & handover", body: "Developer-friendly Swagger / Redoc documentation, runbooks, and a full knowledge-transfer session ensure your team owns what we build." },
];

const faqs = [
  { q: "How long does a typical enterprise API integration project take?", a: "Simple third-party integrations can go live in 2–4 weeks. Complex enterprise integrations involving legacy systems typically take 6–12 weeks, depending on the depth of the audit and the number of systems involved." },
  { q: "Can you integrate with our legacy SOAP-based systems?", a: "Absolutely. We specialise in SOAP-to-REST migrations and API façade patterns that expose modern RESTful endpoints backed by your existing SOAP services — allowing gradual modernisation without disrupting live operations." },
  { q: "Do you provide ongoing API maintenance and support?", a: "Yes. We offer retainer-based maintenance plans that include monitoring, version management, security patching, and SLA-backed support for all APIs we build." },
  { q: "How do you handle API security and compliance?", a: "All APIs are built with OAuth 2.0 / OpenID Connect authentication, HTTPS enforcement, input validation, and rate limiting. We also conduct OWASP Top-10 security reviews and can support SOC 2, HIPAA, and GDPR compliance requirements." },
  { q: "Can you work within our existing DevOps pipeline?", a: "Yes. We integrate into your CI/CD workflow — GitHub Actions, GitLab CI, Jenkins, or any other pipeline — and follow your branching, code review, and deployment conventions." },
];

const related = [
  { icon: "Bot", title: "AI Development", description: "LLM integrations, AI agents, and intelligent workflow automation that plug into your existing systems.", href: "/services/ai-development/" },
  { icon: "Rocket", title: "SaaS MVP Development", description: "Go from idea to a production-ready SaaS product with the right APIs and architecture baked in.", href: "/services/saas-mvp-development/" },
  { icon: "LinkIcon", title: "Blockchain Development", description: "Decentralised backend integrations and smart-contract APIs for enterprise blockchain applications.", href: "/services/blockchain-development/" },
];

export default function APIIntegrationPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero eyebrow="API & Enterprise Integration" headline="Connect Everything. Break Nothing." subtext="We design, build, and maintain the API infrastructure that makes your enterprise ecosystem talk — from legacy ERPs to cutting-edge SaaS platforms." ctaLabel="Get a Free Integration Audit" />
        <ServiceIntro label="Enterprise-grade API integration services" headline="Your stack is only as powerful as how well it connects" highlightWords={["powerful", "connects"]} body="Siloed systems kill productivity. Our API and enterprise integration services eliminate data bottlenecks, automate cross-platform workflows, and give your teams a single, unified view of your business — whether you're connecting three tools or thirty." />
        <ServiceCapabilities label="What we build" headline="API integration services built for every complexity" highlightWords={["every", "complexity"]} items={capabilities} />
        <ServiceWhyUs label="Why Smoking Chimney" headline="The integration partner your engineering team will actually love" highlightWords={["engineering", "love"]} points={whyUs} />
        <ServiceProcess label="Our process" headline="From messy stack to seamless system, step by step" highlightWords={["seamless", "system"]} steps={steps} />
        <ServiceFAQ label="Common questions" headline="Everything you need to know about our API integration services" highlightWords={["API", "integration"]} faqs={faqs} />
        <ServiceCTA headline="Ready to unify your enterprise ecosystem?" subtext="We just connect what others can't." ctaLabel="Start your integration project" />
        <ServiceRelated services={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
