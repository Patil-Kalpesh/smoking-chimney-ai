import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  IndustryHero, IndustryIntro, IndustryPainPoints, IndustryCapabilities,
  IndustryProcess, IndustryCompliance, IndustryFAQ, IndustryCTA, IndustryRelated,
} from "@/components/Industries/IndustryPageLayout";

export const metadata = {
  title: "FinTech and RegTech Software Development | Smoking Chimney",
  description: "KYC and KYB onboarding, fraud and risk workflows, compliance reporting, and permissioned blockchain for financial products. Talk to our engineers.",
  keywords: "fintech software development services, RegTech software development company, KYC and KYB software development, banking compliance workflow software, financial services API development, blockchain for financial services",
  alternates: { canonical: "https://www.smokingchimney.in/industries/fintech-regtech-software-development/" },
  openGraph: { title: "FinTech and RegTech Software Development | Smoking Chimney", description: "KYC/KYB onboarding, fraud workflows, compliance reporting, and permissioned blockchain for regulated financial products.", url: "https://www.smokingchimney.in/industries/fintech-regtech-software-development/", type: "website" },
};

const painPoints = [
  { title: "Onboarding is the first bottleneck", body: "Manual document review throttles activation precisely where growth teams need speed. The fix is automating extraction and validation so analysts spend time on genuinely ambiguous cases — not retyping passports. That requires document pipelines, screening hooks, and reviewer tooling built as one system." },
  { title: "Compliance bolted on last", body: "When evidence lives in spreadsheets, inboxes, and engineers' memories, every audit becomes an excavation and every regulator question becomes a fire drill. The alternative: treat compliance requirements as product requirements from day one — policies become workflow rules, audit obligations become event schemas." },
  { title: "Integration debt compounds quietly", body: "Core banking platforms, card processors, credit bureaus, identity vendors, and data warehouses all expose APIs that version, throttle, and change shape. Products that treat integration as an afterthought accumulate fragile point-to-point scripts. Integration design must be a first-class workstream from architecture onward." },
];

const capabilities = [
  { icon: "ShieldCheck", title: "KYC & KYB Onboarding Platforms", body: "Individual and business onboarding flows with document capture, OCR extraction, cross-document validation, screening hooks, and reviewer dashboards. Every flow records who approved what, when, and on which evidence." },
  { icon: "Workflow", title: "Fraud Signals & Risk-Scoring Workflows", body: "Scoring assembled from document signals, behavioral checks, and third-party data, combining deterministic rules with model-assisted components — with manual review steps, override logging, and reason codes a reviewer can read." },
  { icon: "FileBarChart2", title: "Compliance Reporting & Audit Trails", body: "Reporting generated from structured events instead of manual exports, with evidence packs, case histories, and append-only logs. Hyperledger Fabric can anchor document hashes and verification metadata on a permissioned ledger." },
  { icon: "Plug", title: "Enterprise APIs & Integrations", body: "Versioned REST APIs, webhooks, and event streams connecting your product to core banking, payment rails, screening vendors, identity providers, and data platforms — designed for the failures that actually happen in production." },
  { icon: "Link2", title: "Permissioned Audit Trails", body: "For verification networks and correspondent workflows where institutions need one shared record, we develop on Hyperledger Fabric — the permissioned enterprise ledger under LF Decentralized Trust. We document when a database with immutable logs is honestly the better answer." },
];

const steps = [
  { title: "Discovery and scope", body: "We inventory your systems, screening vendors, and compliance constraints, then write the scope down: what ships first, what integrates, what is explicitly out. You get a written scope and an integration map, not a slide deck." },
  { title: "Architecture and governance design", body: "Data models, event schemas, role and permission design, and the audit-trail design your reviewers will live with. Regulated builds are won or lost here, before the first sprint." },
  { title: "Incremental build", body: "Working software every increment, demonstrated against your scenarios. Our scoped reference plan for a KYC/KYB verification MVP targets a first release in the 15–16 week range; your actual timeline is committed after discovery." },
  { title: "Integration and hardening", body: "Vendor sandboxes, failure-mode testing, load and security passes, and the operational handover your SRE or platform team needs." },
  { title: "Operate and evolve", body: "Post-launch fixes, regulatory-driven changes, and a documented backlog so the next increment starts from knowledge, not archaeology." },
];

const faqs = [
  { q: "Can you integrate with our existing onboarding, core banking, or screening systems?", a: "Yes — integration is a first-class workstream, not an afterthought. Discovery begins with an inventory of your CRM, core banking, screening vendors, and data platforms; we map the data models, then design versioned APIs, webhooks, and retry semantics so onboarding changes do not break partner systems." },
  { q: "Do you work with our compliance team or around them?", a: "With them, from the first week. We treat compliance constraints as requirements: policies become workflow rules, audit obligations become event schemas, and reviewer steps become product features with their own test coverage. We do not provide legal advice — we make the technical implementation match what your advisers specify." },
  { q: "When is blockchain actually worth it in financial services?", a: "When institutions that do not fully trust one another need a shared, tamper-evident record and no single party should own the database — verification networks, correspondent workflows, multi-party audit. When one institution owns the record, a well-designed database with immutable logging is simpler, cheaper, and easier to operate. We document both options in writing before you commit." },
  { q: "How fast can an onboarding or verification MVP go live?", a: "Our scoped reference plan for a KYC/KYB verification MVP targets a first release in roughly 15–16 weeks. Real timelines depend on the number of integrations, screening vendor setup, and your compliance review cycles, so we commit to milestones after discovery rather than before it." },
];

const related = [
  { icon: "Stethoscope", title: "Healthcare & HealthTech", description: "Patient portals, HL7 FHIR interoperability, and AI-enabled clinical workflows.", href: "/industries/healthtech-software-development/" },
  { icon: "ShieldHalf", title: "Cybersecurity & Digital Trust", description: "Identity platform integrations, secure backends, and compliance workflow software.", href: "/industries/cybersecurity-identity-software-development/" },
  { icon: "Bot", title: "Enterprise SaaS & AI", description: "AI and document intelligence, backend engineering, and cloud platform delivery.", href: "/industries/enterprise-saas-ai-development/" },
];

export default function FintechRegtechPage() {
  return (
    <>
      <Header />
      <main>
        <IndustryHero
          eyebrow="Financial Services, FinTech & RegTech"
          headline="FinTech and RegTech Software Development for Regulated Financial Products"
          subtext="Onboarding platforms, fraud workflows, compliance reporting, and permissioned blockchain for digital banks, payment companies, lenders, and RegTech vendors."
          ctaLabel="Talk to our engineers"
        />
        <IndustryIntro
          label="FinTech software development services"
          headline="Financial software that treats compliance as a product requirement"
          highlightWords={["compliance", "product"]}
          body="We design and build onboarding and verification platforms, fraud and risk workflows, compliance reporting tools, and the enterprise APIs that connect them to banking, payments, and lending systems. Every build is engineered so that decisions are explainable and evidence is inspectable — the two properties financial buyers are actually purchasing."
        />
        <IndustryPainPoints label="Where projects stall" headline="Where financial technology projects stall" highlightWords={["stall"]} points={painPoints} />
        <IndustryCapabilities label="What we build" headline="Engineering for financial services and RegTech teams" highlightWords={["financial", "RegTech"]} items={capabilities} />
        <IndustryProcess label="How an engagement works" headline="Five stages, each with a reviewable output" highlightWords={["five", "stages"]} steps={steps} />
        <IndustryCompliance
          headline="Compliance and security considerations"
          body="We do not issue legal opinions, and nothing on this page is compliance advice. What we do is build the technical controls your compliance team, auditors, and assessors work with. Where cardholder data flows, PCI DSS v4.0.1 applies — its future-dated requirements became mandatory 31 March 2025. AML and KYC obligations, GDPR and UK GDPR handling of personal data, and SOC 2-style audit expectations from enterprise customers all translate into concrete engineering requirements: least-privilege access, encryption in transit and at rest, secret management, environment separation, structured logging, and dependency management. We implement those controls and document them so your assessors can test what we built."
        />
        <IndustryFAQ label="Frequently asked questions" headline="Questions every FinTech and RegTech team asks" highlightWords={["FinTech", "RegTech"]} faqs={faqs} />
        <IndustryCTA headline="Planning an onboarding, verification, or compliance platform?" subtext="Auditability is a product feature. We build it that way." ctaLabel="Contact us to discuss your requirements" />
        <IndustryRelated items={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
