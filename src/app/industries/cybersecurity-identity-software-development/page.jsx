import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  IndustryHero, IndustryIntro, IndustryPainPoints, IndustryCapabilities,
  IndustryProcess, IndustryFAQ, IndustryCTA, IndustryRelated,
} from "@/components/Industries/IndustryPageLayout";

export const metadata = {
  title: "Identity and Fraud Software Development | Smoking Chimney",
  description: "Identity platform integrations, secure backend engineering, compliance workflow software, and AI-enabled risk applications for digital trust teams.",
  keywords: "identity verification software development services, fraud prevention software development, secure backend development services, compliance workflow automation, RegTech engineering partner",
  alternates: { canonical: "https://www.smokingchimney.in/industries/cybersecurity-identity-software-development/" },
  openGraph: { title: "Identity and Fraud Software Development | Smoking Chimney", description: "Secure backends, identity platform integrations, compliance workflow software, and AI-enabled risk applications for identity vendors and fraud platforms.", url: "https://www.smokingchimney.in/industries/cybersecurity-identity-software-development/", type: "website" },
};

const painPoints = [
  { title: "Integration surface is the first pressure", body: "An identity or fraud product that cannot plug into a customer's stack does not get bought. The real product is the integration layer: SDKs, APIs, webhook discipline, and support for the authentication and data standards your buyers already run." },
  { title: "Adversarial quality is a product feature", body: "Fraud patterns shift faster than release trains, which makes measurement, retraining loops, and human review paths product features rather than internal details. Evaluation baselines and explainable reason codes are what auditors and analysts need." },
  { title: "Procurement demands proof in writing", body: "Enterprise buyers ask hard security questions before the pilot, and the answers have to exist in writing: data-flow diagrams, retention and deletion behavior, audit logging they can query, and failure behavior described honestly. Teams that engineer these answers in advance close procurement faster." },
];

const capabilities = [
  { icon: "KeyRound", title: "Identity Platform Integrations", body: "Verification vendor orchestration, SSO and identity provider integrations, SDK and API surface design, and webhook/event architectures that keep customer systems in sync. Built so a failing vendor check is a contained incident, not an onboarding outage." },
  { icon: "Lock", title: "Secure Backend Engineering", body: "Services designed around least privilege, encryption in transit and at rest, secret management, structured audit logging, dependency and vulnerability management, and environment separation. Security review is part of definition-of-done, not a pre-launch gate." },
  { icon: "FolderCheck", title: "Compliance Workflow Software", body: "Case management, review queues, escalation paths, and audit-ready evidence trails for KYC/KYB, AML, and fraud operations — the workflow layer where analyst time and regulator questions actually land." },
  { icon: "AlertTriangle", title: "AI-Enabled Risk Applications", body: "Document intelligence, risk scoring with reason codes, and anomaly detection designed for adversarial drift — shipped with evaluation baselines, human-in-the-loop review, and override logging so the system stays explainable to auditors and analysts alike." },
];

const steps = [
  { title: "Integration inventory and security requirements review", body: "We map your integration surface, the security requirements your customers impose, and the audit obligations your platform carries — before we write a line of code." },
  { title: "Written scope with acceptance criteria", body: "Discovery ends with a written scope: what ships first, what integrates, what the security acceptance criteria are. Your customers' security requirements become acceptance criteria for the work package." },
  { title: "Delivery in your repositories", body: "Pull requests against your standards, reviewed by your engineers as well as ours. No parallel process, no reporting theater." },
  { title: "Handover documentation", body: "Architecture documentation, data-flow diagrams, retention and deletion behavior stated in writing — the answers that close procurement questionnaires." },
];

const faqs = [
  { q: "How do you approach security in the development lifecycle itself?", a: "Security requirements are written into the definition of done: least-privilege access, encryption, secret management, structured logging, and dependency management are baseline practices on every service we ship, with code review and environment separation on top. For customer security reviews, we provide architecture documentation and complete questionnaires; formal attestations are organizational matters — ask us directly about current status and we will answer without overclaiming." },
  { q: "Can you work to our customers' security requirements, not just yours?", a: "Yes — discovery includes a review of the security requirements your customers impose, and those become acceptance criteria for the work package. Where a requirement conflicts with the architecture, we surface the conflict early with options, rather than discovering it during an audit." },
  { q: "How do you handle data in AI risk features?", a: "By minimization and explicit policy: collect only what the workflow needs, set retention limits up front, and keep human review in the loop wherever an automated decision affects a customer. Every model-assisted step ships with an evaluation baseline and reason codes, so risk decisions can be explained to analysts, auditors, and the people they affect." },
];

const related = [
  { icon: "Landmark", title: "Financial Services & RegTech", description: "KYC/KYB onboarding, compliance workflows, and permissioned blockchain — where identity and fraud engineering has the deepest story.", href: "/industries/fintech-regtech-software-development/" },
  { icon: "Truck", title: "Supply Chain & Logistics", description: "Supplier onboarding with KYB verification and audit-ready approval trails for vendor networks.", href: "/industries/supply-chain-software-development/" },
  { icon: "Bot", title: "Enterprise SaaS & AI", description: "AI risk applications, secure API engineering, and platform refactoring for SaaS and data companies.", href: "/industries/enterprise-saas-ai-development/" },
];

export default function CybersecurityIdentityPage() {
  return (
    <>
      <Header />
      <main>
        <IndustryHero
          eyebrow="Cybersecurity, Identity & Digital Trust"
          headline="Identity, Fraud, and Digital Trust Software Development"
          subtext="Secure backends, identity platform integrations, compliance workflow software, and AI-enabled risk applications for identity vendors, fraud platforms, and RegTech teams."
          ctaLabel="Discuss your engineering requirements"
        />
        <IndustryIntro
          label="Identity and fraud software development"
          headline="If you sell trust, your product is judged by the company it keeps"
          highlightWords={["trust", "company"]}
          body="Smoking Chimney Studios® builds the engineering layer of digital trust products — secure backends, identity platform integrations, compliance workflow software, and AI-enabled risk applications. Our own product scope is an AI-powered KYC/KYB verification platform, so we know this market from the inside: verification logic that is explainable, integrations that degrade gracefully, and evidence that is structured rather than reconstructed."
        />
        <IndustryPainPoints label="What digital trust teams bring us" headline="The structural pressures on identity and fraud products" highlightWords={["structural", "pressures"]} points={painPoints} />
        <IndustryCapabilities label="What we build" headline="Engineering for identity, fraud, and security teams" highlightWords={["identity", "fraud"]} items={capabilities} />
        <IndustryProcess label="How we engage" headline="Scoped packages that close procurement, not just ship code" highlightWords={["procurement", "code"]} steps={steps} />
        <IndustryFAQ label="Frequently asked questions" headline="Questions identity and fraud teams ask us" highlightWords={["identity", "fraud"]} faqs={faqs} />
        <IndustryCTA headline="Building an identity, fraud, or compliance product that has to earn trust?" subtext="We build so the documentation falls out of the architecture." ctaLabel="Contact us to discuss your requirements" />
        <IndustryRelated items={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
