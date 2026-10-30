import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  IndustryHero, IndustryIntro, IndustryPainPoints, IndustryCapabilities,
  IndustryProcess, IndustryCompliance, IndustryFAQ, IndustryCTA, IndustryRelated,
} from "@/components/Industries/IndustryPageLayout";

export const metadata = {
  title: "HealthTech Software Development Services | Smoking Chimney",
  description: "Patient and provider portals, HL7 FHIR interoperability, healthcare UI and UX, and AI-enabled health applications built with compliance in view.",
  keywords: "healthcare software development services, healthtech product development company, patient portal development, HL7 FHIR integration services, healthcare UI UX design, clinical workflow automation",
  alternates: { canonical: "https://www.smokingchimney.in/industries/healthtech-software-development/" },
  openGraph: { title: "HealthTech Software Development Services | Smoking Chimney", description: "Patient portals, HL7 FHIR interoperability, healthcare UI/UX, and AI-enabled clinical tools built with PHI discipline from day one.", url: "https://www.smokingchimney.in/industries/healthtech-software-development/", type: "website" },
};

const painPoints = [
  { title: "Adoption stalls when software fights clinical routines", body: "Clinicians work in interruptions; patients work in anxiety. Interfaces that assume uninterrupted attention — deep menus, redundant data entry, desktop-only layouts — quietly die in pilots. Designing for the real context means observing the routine first, then shaping the tool around it." },
  { title: "Interoperability is the chronic drag", body: "Patient data sits in EHRs, lab systems, billing platforms, and scheduling tools, speaking a mix of HL7 v2 messages and newer FHIR APIs. Implementations vary by vendor and version, terminology mapping is real work, and legacy feeds do not retire themselves." },
  { title: "Compliance overhead slows shipping when retrofitted", body: "HIPAA, GDPR, UK GDPR, and — where software is a component of a medical device — IEC 62304 lifecycle expectations all shape architecture. Built in from the start, these are defaults; bolted on late, they are a rewrite." },
];

const capabilities = [
  { icon: "HeartPulse", title: "Patient & Provider Portals", body: "Secure portals for appointments and intake, results viewing, secure messaging, referral tracking, and clinician dashboards — designed for the contexts they are used in: one hand, one eye, interrupted. WCAG accessibility targets treated as requirements from the first wireframe." },
  { icon: "GitMerge", title: "Interoperability & Integration", body: "HL7 v2 interface work, FHIR-based integrations, SMART on FHIR app embedding, and connections to labs, billing, and scheduling systems. Terminology mapping and vendor test cycles treated as first-class scope." },
  { icon: "Palette", title: "Healthcare UI & UX", body: "Research, interaction design, and design systems for clinical and patient-facing products, including usability passes constrained by real clinical settings. We design the boring parts — error states, confirmations, handoffs — because that is where patient safety and usability actually live." },
  { icon: "BrainCircuit", title: "AI-Enabled Applications & Document Workflows", body: "Intake digitization, clinical document classification, and summarization assistance built with human-in-the-loop review: the model drafts, a qualified human decides. We frame AI as decision support and build the evaluation harnesses that measure whether it is helping." },
  { icon: "Database", title: "Secure Data Platforms", body: "Consent-aware storage, role-based access, audit logging, and de-identification pipelines for analytics. Data minimization is an architectural principle: collect what the workflow needs, retain it for as long as the policy says, and make both decisions visible to your privacy team." },
];

const steps = [
  { title: "Discovery with workflow shadowing", body: "We map your clinical routines, data flows, and every system PHI touches — not a requirements wish-list, but actual observation of how the software will be used." },
  { title: "Architecture with data discipline", body: "PHI handling, consent models, access control, and audit logging designed as architecture inputs — not retrofitted after the build." },
  { title: "Incremental build with usability passes", body: "Working software every increment, with usability passes using representative users before each release candidate is called done." },
  { title: "Integration and hardening", body: "EHR vendor sandbox testing, failure-mode testing, and the security and documentation trail your clinical and compliance reviewers need." },
  { title: "Operate and evolve", body: "Post-launch support, regulatory-driven updates, and documented backlog so the next phase starts from knowledge, not archaeology." },
];

const faqs = [
  { q: "Do you build HIPAA-compliant software?", a: "We build software with the technical safeguards HIPAA expects — access control, audit logging, encryption, and the documentation trails your program needs. Compliance is an organizational program covering policies, training, and business associate agreements; no vendor can ship it as a feature. What we deliver is engineering output your compliance program can actually assess and certify." },
  { q: "Can you integrate with Epic, Cerner, or our EHR?", a: "Where the EHR vendor exposes supported interfaces — FHIR APIs, HL7 v2 feeds, SMART on FHIR — yes. Exact scope depends on the vendor program, your agreements, and sandbox access, so we scope integration work after reviewing those with your team rather than promising universal connectivity. Where no interface exists, we design the bridging layer and document its limits." },
  { q: "Can AI features in our product diagnose patients?", a: "No, and we design so they never have to. We build AI as decision support with human-in-the-loop review: the model drafts or flags, a qualified human decides, and every suggestion is logged. If your roadmap includes diagnostic claims, that is a medical device pathway your regulatory team owns — we can implement what they specify, with the traceability the pathway demands." },
  { q: "How do you handle legacy HL7 v2 environments?", a: "Pragmatically. Most real deployments run HL7 v2 alongside FHIR for years, so we build interface layers that translate between them instead of pretending v2 will disappear. That keeps existing feeds stable while new FHIR-based features ship on top, and it gives you a migration path that can be scheduled rather than forced." },
];

const related = [
  { icon: "Landmark", title: "Financial Services & RegTech", description: "KYC/KYB onboarding, compliance workflows, and permissioned blockchain for regulated financial products.", href: "/industries/fintech-regtech-software-development/" },
  { icon: "Bot", title: "Enterprise SaaS & AI", description: "AI and document intelligence for patient intake, clinical workflows, and data platform engineering.", href: "/industries/enterprise-saas-ai-development/" },
  { icon: "ShieldHalf", title: "Cybersecurity & Digital Trust", description: "Secure backend engineering and identity platform integrations for health data systems.", href: "/industries/cybersecurity-identity-software-development/" },
];

export default function HealthTechPage() {
  return (
    <>
      <Header />
      <main>
        <IndustryHero
          eyebrow="Healthcare & HealthTech"
          headline="HealthTech Software Development for Products Clinicians and Patients Rely On"
          subtext="Patient portals, HL7 FHIR interoperability, healthcare UI/UX, and AI-enabled clinical support tools built with PHI discipline from the first sprint."
          ctaLabel="Discuss your health product"
        />
        <IndustryIntro
          label="Healthcare software development services"
          headline="Software that works in the room where care happens"
          highlightWords={["works", "care"]}
          body="We build healthcare software for health systems, digital health vendors, and medical software companies — pairing clinical workflow fit with disciplined handling of protected health information. Design decisions and data decisions are made together, not in sequence."
        />
        <IndustryPainPoints label="Where it gets hard" headline="Where healthtech product teams feel the pain" highlightWords={["pain"]} points={painPoints} />
        <IndustryCapabilities label="What we build" headline="Healthcare engineering capabilities across the stack" highlightWords={["Healthcare", "stack"]} items={capabilities} />
        <IndustryProcess label="How an engagement works" headline="Discovery, build, and hardening for regulated health products" highlightWords={["regulated", "health"]} steps={steps} />
        <IndustryCompliance
          headline="Compliance and security considerations"
          body="HIPAA's administrative, physical, and technical safeguards shape how US deployments are engineered: unique user identification, emergency access procedures, audit controls, integrity protections, and transmission security are the technical baseline your security rule assessments will test. GDPR and UK GDPR add lawful-basis handling, data subject rights workflows, and retention discipline for European users. Where your product is or contains a medical device component, IEC 62304 defines the software lifecycle — planning, requirements, traceability, and verification — that development must follow. We build the technical safeguards and the documentation your assessors need; the legal determinations belong to your regulatory advisers, and our architecture is designed to make their review faster."
        />
        <IndustryFAQ label="Frequently asked questions" headline="Questions healthcare and healthtech teams ask us" highlightWords={["healthcare", "healthtech"]} faqs={faqs} />
        <IndustryCTA headline="Planning a patient-facing portal, an interoperability project, or an AI-enabled clinical workflow?" subtext="Clinical software is different. We build like it is." ctaLabel="Contact us to discuss your requirements" />
        <IndustryRelated items={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
