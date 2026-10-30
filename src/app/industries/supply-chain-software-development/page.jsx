import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  IndustryHero, IndustryIntro, IndustryPainPoints, IndustryCapabilities,
  IndustryProcess, IndustryCompliance, IndustryFAQ, IndustryCTA, IndustryRelated,
} from "@/components/Industries/IndustryPageLayout";

export const metadata = {
  title: "Supply Chain Software Development Services | Smoking Chimney",
  description: "Traceability platforms, ERP and third-party integrations, supplier portals, and multi-party workflows, with permissioned blockchain where it fits.",
  keywords: "supply chain software development services, traceability software development, ERP integration services, supplier onboarding portal development, permissioned blockchain traceability",
  alternates: { canonical: "https://www.smokingchimney.in/industries/supply-chain-software-development/" },
  openGraph: { title: "Supply Chain Software Development Services | Smoking Chimney", description: "Traceability platforms, ERP integrations, supplier KYB portals, and multi-party coordination software — with permissioned blockchain only where it earns its complexity.", url: "https://www.smokingchimney.in/industries/supply-chain-software-development/", type: "website" },
};

const painPoints = [
  { title: "Multi-party data sharing is the structural problem", body: "Provenance, custody, and reconciliation require parties who do not fully trust each other to agree on one record, and the usual solutions — email chains, EDI fragments, one party's database — all fail in familiar ways." },
  { title: "Supplier onboarding is the sibling problem", body: "Vendors arrive with unverifiable documents, and the verification burden lands on procurement teams doing it manually. Structured verification workflows with audit trails are the engineering answer." },
  { title: "Integration debt beneath both", body: "ERPs, WMS, IoT platforms, and partner systems that were never designed to talk to each other. Scope is confirmed against your actual landscape in discovery rather than assumed." },
];

const capabilities = [
  { icon: "Layers", title: "Traceability & Provenance Platforms", body: "Batch and lot tracking, custody records, and document trails across parties. Where the record must be shared and tamper-evident, document hashes and verification metadata can be anchored on a Hyperledger Fabric network — the audit facts on-chain, the sensitive documents off it." },
  { icon: "Cable", title: "ERP & Third-Party Integrations", body: "Connectors and interface layers between your platform and the ERP, WMS, and logistics systems your customers already run, designed around the real constraints of those systems: batch interfaces, awkward APIs, and data models nobody can change quickly." },
  { icon: "Users2", title: "Supplier Portals & Onboarding", body: "Supplier registration, business verification (KYB) workflows, document capture and validation, risk scoring, and auditable approvals — the same verification discipline we apply to financial onboarding, applied to vendor networks." },
  { icon: "GitFork", title: "Multi-Party Coordination & Audit Trails", body: "Approval workflows, reconciliation processes, and shared records where several organizations must act in sequence without losing the history. Whether the underlying store is a ledger or a database is an architecture decision we make with you, documented with its reasoning." },
];

const steps = [
  { title: "Discovery with integration mapping", body: "We inventory your actual ERP, WMS, and partner systems — and the verification requirements your suppliers face — before we propose any architecture." },
  { title: "Architecture with the right store", body: "Database vs. ledger is decided with your parties and audit requirements on the table, with the trade-offs in writing before we commit to a design." },
  { title: "Incremental build", body: "Working software every increment, starting with the highest-value workflow — typically the supplier onboarding or traceability layer." },
  { title: "Integration and hardening", body: "ERP sandbox testing, partner system validation, failure-mode testing, and the operational handover your team needs." },
  { title: "Operate and evolve", body: "Post-launch support, regulatory-driven updates (e.g., new due-diligence requirements), and documented backlog." },
];

const faqs = [
  { q: "Should we use blockchain or a database for our traceability use case?", a: "It depends on who writes the record and who must trust it. One owner, internal audits: a database with immutable logs. Multiple organizations, no natural owner, tamper-evidence required: a permissioned network such as Hyperledger Fabric. Discovery answers this question with your actual parties and audit requirements on the table — and we will recommend the simpler option whenever it is defensible." },
  { q: "Can you integrate with our ERP?", a: "In principle yes; in detail it depends on your ERP version, available interfaces, and how much change your ERP team can absorb. Discovery produces an integration map with the realistic interface strategy per system — API, file, or message-based — before we commit to a design." },
  { q: "How does supplier onboarding verification work in practice?", a: "Suppliers submit registration and ownership documents through the portal; OCR extraction and cross-document validation populate a structured record; risk scoring flags what needs human attention; and reviewers approve or reject with reasons that become part of an audit trail. The output is a verified supplier record your procurement team can query and your auditors can inspect." },
];

const related = [
  { icon: "Landmark", title: "Financial Services & RegTech", description: "KYC/KYB onboarding and permissioned blockchain for regulated financial workflows.", href: "/industries/fintech-regtech-software-development/" },
  { icon: "ShieldHalf", title: "Cybersecurity & Digital Trust", description: "Identity platform integrations and compliance workflow software that apply directly to supplier verification.", href: "/industries/cybersecurity-identity-software-development/" },
  { icon: "Bot", title: "Enterprise SaaS & AI", description: "AI document intelligence and backend engineering for supply chain platform companies.", href: "/industries/enterprise-saas-ai-development/" },
];

export default function SupplyChainPage() {
  return (
    <>
      <Header />
      <main>
        <IndustryHero
          eyebrow="Manufacturing, Supply Chain & Logistics"
          headline="Supply Chain, Manufacturing, and Logistics Software Development"
          subtext="Traceability platforms, ERP integrations, supplier KYB portals, and multi-party coordination — with permissioned blockchain only where the business case is real."
          ctaLabel="Discuss your supply chain project"
        />
        <IndustryIntro
          label="Supply chain software development services"
          headline="Supply chain software judged in operations, not in demos"
          highlightWords={["operations", "demos"]}
          body="We build for the test that matters — traceability platforms, ERP integrations, supplier portals, and multi-party workflow systems for industrial software providers, logistics platforms, procurement suites, and manufacturers modernizing their operations. One position statement up front: enterprise blockchain is compelling when it is tied to a measurable need, not because a company wants to use blockchain."
        />
        <IndustryPainPoints label="The problems worth solving" headline="The problems worth solving in supply chain software" highlightWords={["problems", "solving"]} points={painPoints} />
        <IndustryCapabilities label="What we build" headline="Engineering for supply chain and manufacturing teams" highlightWords={["supply", "manufacturing"]} items={capabilities} />
        <IndustryProcess label="How an engagement works" headline="Discovery, architecture, then build — in that order" highlightWords={["Discovery", "architecture"]} steps={steps} />
        <IndustryCompliance
          headline="When blockchain fits — and when it does not"
          body="A permissioned ledger earns its place when three conditions hold together: multiple organizations write to the record, no single party is trusted to own it, and the history must be tamper-evident for audit or dispute reasons. Certification chains, cross-company reconciliation, and verification networks meet that bar. A single company tracking its own inventory does not — for that, a database with immutable logging is simpler, cheaper, and easier to operate. Our proposals name the architecture we recommend and the alternative we rejected, so the decision is yours with the trade-offs in writing."
        />
        <IndustryFAQ label="Frequently asked questions" headline="Questions supply chain and manufacturing teams ask us" highlightWords={["supply", "manufacturing"]} faqs={faqs} />
        <IndustryCTA headline="Building a traceability, integration, or supplier-verification platform?" subtext="Operations-tested, not just demo-ready." ctaLabel="Contact us to discuss your requirements" />
        <IndustryRelated items={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
