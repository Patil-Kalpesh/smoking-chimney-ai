import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  ServiceHero, ServiceIntro, ServiceCapabilities,
  ServiceWhyUs, ServiceProcess, ServiceFAQ, ServiceCTA, ServiceRelated,
} from "@/components/Services/ServicePageLayout";

export const metadata = {
  title: "KYC/KYB Software Development Company | Smoking Chimney",
  description: "Build custom KYC and KYB software platforms with Smoking Chimney — AI-powered document verification, identity verification APIs, compliance workflow automation, and fraud detection software for fintechs, banks, and regulated businesses.",
  keywords: "KYC software development company, KYC software development services, KYB software development, KYC platform development, KYB platform development, identity verification software development, business verification software, AI document verification software, digital identity verification solutions, customer onboarding software development, compliance workflow software, fraud detection software development, identity verification API integration",
  alternates: { canonical: "https://www.smokingchimney.in/services/kyc-kyb-software-development/" },
  openGraph: { title: "KYC/KYB Software Development Company | Smoking Chimney", description: "Custom KYC & KYB platforms with AI document verification, identity screening, and compliance automation — purpose-built for fintechs, banks, and regulated businesses.", url: "https://www.smokingchimney.in/services/kyc-kyb-software-development/", type: "website" },
};

const capabilities = [
  { icon: "ScanFace", title: "AI Document Verification", description: "AI-powered OCR and liveness detection that verifies passports, driving licences, and national IDs with 99%+ accuracy in seconds — not hours.", features: ["Multi-document type support", "AI-powered OCR extraction", "Liveness & face match", "Tamper detection algorithms"] },
  { icon: "Building", title: "KYB Business Verification", description: "Automate business entity verification by pulling from company registries, sanctions lists, and beneficial ownership databases across 200+ countries.", features: ["Company registry lookups", "UBO identification", "Sanctions & PEP screening", "Adverse media monitoring"] },
  { icon: "GitMerge", title: "Compliance Workflow Automation", description: "Design end-to-end compliance workflows with automated risk scoring, case management, and escalation rules — so your compliance team focuses on edge cases, not data entry.", features: ["Risk-based scoring engine", "Configurable approval workflows", "Case management tools", "Audit trail & reporting"] },
  { icon: "Link2", title: "Identity Verification API Integration", description: "Integrate best-in-class identity providers — Onfido, Jumio, Sumsub, Stripe Identity — or build a fully custom verification pipeline tailored to your risk model.", features: ["Third-party provider orchestration", "Custom verification pipeline", "Webhook event delivery", "SDK for web & mobile"] },
  { icon: "ShieldAlert", title: "Fraud Detection & AML", description: "Machine learning models that detect synthetic identity fraud, account takeovers, and suspicious transaction patterns before they cause damage.", features: ["Behavioural biometrics", "Device fingerprinting", "AML transaction monitoring", "Real-time risk signals"] },
  { icon: "UserCheck", title: "Custom Onboarding Journeys", description: "Design frictionless onboarding flows that collect only what regulations require — maximising conversion while staying compliant with GDPR, DPDP, and local KYC laws.", features: ["White-label UI components", "Progressive disclosure UX", "Mobile-first SDKs", "Localisation for 50+ countries"] },
];

const whyUs = [
  { icon: "Scale", title: "Compliance expertise baked in", body: "Our team understands FATF guidelines, GDPR, DPDP, AML directives, and sector-specific regulations. We build compliance requirements into the system design — not as an afterthought." },
  { icon: "Brain", title: "AI-native verification", body: "We leverage state-of-the-art computer vision and NLP models for document extraction and fraud detection — achieving accuracy levels that manual processes simply can't match." },
  { icon: "Wrench", title: "Flexible, API-first architecture", body: "Every KYC/KYB platform we build exposes a clean API so you can embed verification into your product, mobile app, or existing workflows with minimal integration effort." },
  { icon: "Zap", title: "Sub-60-second verification", body: "We optimise verification pipelines for speed. In most cases, a new customer can complete KYC in under 60 seconds — dramatically improving onboarding conversion rates." },
];

const steps = [
  { title: "Regulatory & risk assessment", body: "We map your regulatory obligations — jurisdiction, sector, risk appetite — and identify the verification data points, third-party providers, and workflow logic your platform needs." },
  { title: "Data architecture & privacy design", body: "Sensitive PII and document data are handled with encryption-at-rest, data minimisation principles, and jurisdiction-aware storage policies from the ground up." },
  { title: "Verification pipeline development", body: "We build the core verification flows — document upload, OCR extraction, liveness check, sanctions screening — with configurable pass/fail thresholds." },
  { title: "Compliance workflow & admin tooling", body: "Case management dashboards, manual review queues, audit logs, and regulatory reporting tools are built for your compliance team alongside the customer-facing product." },
  { title: "Integration & end-to-end testing", body: "Full integration testing with real identity providers, edge-case document variants, and penetration testing of all data-handling endpoints." },
  { title: "Launch, monitoring & iteration", body: "Go live with real-time fraud monitoring, compliance dashboards, and a plan to iterate verification flows based on conversion and false-positive data." },
];

const faqs = [
  { q: "Which countries and document types can your KYC platform support?", a: "Our platforms are built to support 200+ countries and accept passports, national IDs, driving licences, and utility bills. The exact document coverage depends on the identity provider(s) we integrate — most major providers cover 190+ countries." },
  { q: "Can you build a KYB platform for corporate client onboarding?", a: "Yes. KYB is a core specialisation for us. We integrate with company registries, build beneficial ownership mapping tools, and automate sanctions and PEP screening for legal entities across multiple jurisdictions." },
  { q: "How do you ensure GDPR and data privacy compliance?", a: "PII and biometric data are stored with AES-256 encryption, access-controlled by role, and never retained longer than legally required. We implement data subject rights (access, deletion, portability) into the platform from day one." },
  { q: "Can the KYC platform integrate with our existing core banking or CRM system?", a: "Yes. We expose a comprehensive webhook and REST API layer that integrates with Salesforce, Temenos, Mambu, Finastra, and most banking and CRM platforms." },
  { q: "Do you support ongoing re-verification and periodic KYC refresh?", a: "Absolutely. We build continuous monitoring and scheduled re-verification workflows — including automated data refresh from sanctions lists and adverse media feeds — to support ongoing due diligence obligations." },
];

const related = [
  { icon: "Bot", title: "AI Development", description: "AI document processing, OCR pipelines, and fraud detection models to power your KYC platform.", href: "/services/ai-development/" },
  { icon: "Plug", title: "API & Enterprise Integration", description: "Connect your KYC/KYB platform to your core systems, CRM, and third-party verification providers.", href: "/services/api-enterprise-integration/" },
  { icon: "LinkIcon", title: "Blockchain Development", description: "Decentralised identity and verifiable credentials for next-generation KYC infrastructure.", href: "/services/blockchain-development/" },
];

export default function KYCKYBPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero eyebrow="KYC / KYB Software Development" headline="Know Your Customer. Know Your Business. Stay Compliant." subtext="Custom identity verification and business compliance platforms built for fintechs, banks, and any regulated business that needs to onboard customers at speed without cutting compliance corners." ctaLabel="Book a Free Compliance Scoping Call" />
        <ServiceIntro label="Custom KYC & KYB software development" headline="Compliance that converts, not compliance that kills conversion" highlightWords={["converts", "conversion"]} body="The best KYC experience is one your customers barely notice. We build verification workflows that collect exactly what regulations require, in the fewest steps possible — protecting your business while maximising onboarding conversion rates." />
        <ServiceCapabilities label="What we build" headline="End-to-end KYC & KYB platform capabilities" highlightWords={["KYC", "KYB"]} items={capabilities} />
        <ServiceWhyUs label="Why Smoking Chimney" headline="Built by engineers who understand both code and compliance" highlightWords={["code", "compliance"]} points={whyUs} />
        <ServiceProcess label="How we deliver" headline="Our compliance-first development process" highlightWords={["compliance-first", "development"]} steps={steps} />
        <ServiceFAQ label="Common questions" headline="Your KYC/KYB development questions, answered" highlightWords={["KYC/KYB", "answered"]} faqs={faqs} />
        <ServiceCTA headline="Ready to build a KYC platform your customers trust?" subtext="Onboard faster. Stay compliant. Reduce fraud." ctaLabel="Start your KYC project" />
        <ServiceRelated services={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
