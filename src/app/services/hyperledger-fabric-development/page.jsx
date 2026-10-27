import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  ServiceHero, ServiceIntro, ServiceCapabilities,
  ServiceWhyUs, ServiceProcess, ServiceFAQ, ServiceCTA, ServiceRelated,
} from "@/components/Services/ServicePageLayout";

export const metadata = {
  title: "Hyperledger Fabric Development Company | Smoking Chimney",
  description: "Smoking Chimney is a Hyperledger Fabric development company specialising in enterprise permissioned blockchain networks, chaincode development, Hyperledger Fabric consulting, and private blockchain application development.",
  keywords: "Hyperledger Fabric development company, Hyperledger Fabric development services, Hyperledger Fabric consulting, Hyperledger Fabric developers, enterprise Hyperledger solutions, Hyperledger Fabric implementation, Hyperledger Fabric integration, Hyperledger chaincode development, private permissioned blockchain development, Hyperledger Fabric network architecture, Hyperledger Fabric application development, Hyperledger Fabric maintenance and support",
  alternates: { canonical: "https://www.smokingchimney.in/services/hyperledger-fabric-development/" },
  openGraph: { title: "Hyperledger Fabric Development Company | Smoking Chimney", description: "Enterprise-grade Hyperledger Fabric networks — from permissioned network architecture to chaincode development and production deployment. Built for industries where trust and auditability are non-negotiable.", url: "https://www.smokingchimney.in/services/hyperledger-fabric-development/", type: "website" },
};

const capabilities = [
  { icon: "Network", title: "Hyperledger Fabric Network Architecture", description: "Design and deploy production-ready Hyperledger Fabric networks — from channel configuration and peer topology to MSP setup and consensus configuration.", features: ["Multi-org network design", "Channel & policy configuration", "MSP & CA setup", "Raft consensus configuration"] },
  { icon: "FileCode2", title: "Chaincode Development", description: "Custom smart contracts (chaincode) written in Go, Node.js, or Java — business logic that enforces your rules on-chain with deterministic, auditable execution.", features: ["Go & Node.js chaincode", "Complex business logic", "CRUD & event-driven patterns", "Unit & integration testing"] },
  { icon: "Cable", title: "Hyperledger Fabric Integration", description: "Integrate Fabric networks into your existing enterprise architecture — ERP, CRM, supply chain, banking systems — through secure Gateway APIs and event listeners.", features: ["Fabric Gateway SDK integration", "REST API layer for Fabric", "Event listener services", "Legacy system connectors"] },
  { icon: "LayoutDashboard", title: "Fabric Application Development", description: "End-to-end web and mobile applications on top of Hyperledger Fabric — dashboards, transaction explorers, and role-based portals for every network participant.", features: ["Web & mobile frontends", "Transaction explorer UI", "Role-based participant portals", "Real-time event dashboards"] },
  { icon: "EyeOff", title: "Private Data & Confidential Transactions", description: "Leverage Fabric's Private Data Collections (PDC) to keep sensitive transaction data off the main ledger while still benefiting from network-wide consensus.", features: ["Private Data Collections", "Transient data handling", "Selective disclosure patterns", "Zero-knowledge proof integration"] },
  { icon: "ActivitySquare", title: "Maintenance, Monitoring & Upgrades", description: "Keep your Fabric network healthy with proactive monitoring, chaincode lifecycle management, peer upgrades, and SLA-backed support.", features: ["24/7 network monitoring", "Chaincode versioning & upgrades", "Peer & orderer management", "Disaster recovery planning"] },
];

const whyUs = [
  { icon: "Microscope", title: "Deep Hyperledger Fabric expertise", body: "Our team has architected and deployed Hyperledger Fabric networks for supply chain, trade finance, healthcare, and financial services — we know where the gotchas are before you hit them." },
  { icon: "Users2", title: "Multi-org consortium experience", body: "Managing multiple organisations, MSPs, and channel policies in a consortium is complex. We've navigated governance challenges across complex multi-party deployments." },
  { icon: "Layers2", title: "Full-stack Fabric capability", body: "From network infrastructure to chaincode to the web application your end-users touch — we own the entire Hyperledger Fabric stack, eliminating integration risk between vendors." },
  { icon: "Gauge", title: "Enterprise-scale deployments", body: "We design for throughput and latency from the start — batch sizes, endorsement policies, CouchDB vs LevelDB, and Kafka vs Raft are decisions we make deliberately, not accidentally." },
];

const steps = [
  { title: "Use-case feasibility assessment", body: "Not every problem needs a blockchain. We objectively assess whether Hyperledger Fabric is the right tool — and design the network topology and consensus model if it is." },
  { title: "Network design & governance model", body: "We define channel structure, organisation MSPs, endorsement policies, and the off-chain governance model before a single peer is provisioned." },
  { title: "Development environment & CA setup", body: "Cryptographic authorities, orderer nodes, peer nodes, and the development environment are configured using Fabric test networks and Docker Compose for rapid iteration." },
  { title: "Chaincode development & testing", body: "Business logic is implemented as chaincode with comprehensive unit tests and integration tests against a multi-org Fabric network before any production deployment." },
  { title: "Production network deployment", body: "We deploy to Kubernetes (on-premises or cloud), configure monitoring with Prometheus/Grafana, and set up chaincode lifecycle management for zero-downtime upgrades." },
  { title: "Application integration & go-live", body: "We integrate the Fabric backend with your application layer, set up event listeners, and validate end-to-end transaction flows before production go-live." },
];

const faqs = [
  { q: "Is Hyperledger Fabric the right blockchain for my enterprise use case?", a: "Hyperledger Fabric is ideal when you need a permissioned blockchain — i.e., you know who the participants are, need privacy between subsets of participants, and require high transaction throughput without cryptocurrency tokens. Common use cases include supply chain provenance, trade finance, healthcare data exchange, and regulatory reporting." },
  { q: "What programming languages can chaincode be written in?", a: "Hyperledger Fabric supports Go (recommended for performance and full SDK support), Node.js, and Java. Our team primarily develops chaincode in Go for production systems, with Node.js for rapid prototyping." },
  { q: "How does Hyperledger Fabric handle data privacy between organisations?", a: "Fabric uses Private Data Collections (PDC) to keep sensitive transaction data between a subset of organisations, with only a hash stored on the shared ledger. This enables you to prove a transaction happened without revealing its contents to all network members." },
  { q: "Can Hyperledger Fabric integrate with public blockchains like Ethereum?", a: "Yes. We can design hybrid architectures where Hyperledger Fabric handles private enterprise transactions and public blockchain anchoring (e.g., Ethereum, Polygon) provides external auditability. Cross-chain oracle bridges can be used to link the two." },
  { q: "What is the typical maintenance overhead of a Hyperledger Fabric network?", a: "A well-designed Fabric network running on Kubernetes requires ongoing monitoring, periodic chaincode upgrades, CA certificate rotation, and peer software updates. We offer retainer-based managed services that cover all of this with SLA-backed response times." },
];

const related = [
  { icon: "LinkIcon", title: "Blockchain Development", description: "Public and private blockchain solutions beyond Hyperledger Fabric — Ethereum, Solana, and custom chains.", href: "/services/blockchain-development/" },
  { icon: "Plug", title: "API & Enterprise Integration", description: "REST APIs and event bridges that connect your Fabric network to existing enterprise systems.", href: "/services/api-enterprise-integration/" },
  { icon: "Bot", title: "AI Development", description: "Combine AI analytics with blockchain audit trails for intelligent, tamper-proof data processing.", href: "/services/ai-development/" },
];

export default function HyperledgerFabricPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero eyebrow="Hyperledger Fabric Development" headline="Enterprise Blockchain Built on a Foundation of Trust." subtext="We design, develop, and deploy production-grade Hyperledger Fabric networks for industries where data integrity, participant privacy, and regulatory auditability are non-negotiable." ctaLabel="Book a Free Fabric Consultation" />
        <ServiceIntro label="Hyperledger Fabric development services" headline="Permissioned blockchain for enterprises that can't afford to get it wrong" highlightWords={["Permissioned", "wrong"]} body="Hyperledger Fabric's modular architecture makes it the enterprise blockchain of choice for supply chains, financial services, healthcare, and government — but getting it right requires deep protocol expertise. That's where we come in." />
        <ServiceCapabilities label="What we deliver" headline="End-to-end Hyperledger Fabric capabilities" highlightWords={["Hyperledger", "Fabric"]} items={capabilities} />
        <ServiceWhyUs label="Why Smoking Chimney" headline="Hyperledger Fabric developers who've been in production" highlightWords={["production"]} points={whyUs} />
        <ServiceProcess label="Our process" headline="From network design to production Fabric deployment" highlightWords={["production", "Fabric"]} steps={steps} />
        <ServiceFAQ label="Common questions" headline="Hyperledger Fabric questions enterprises always ask" highlightWords={["Hyperledger", "Fabric"]} faqs={faqs} />
        <ServiceCTA headline="Ready to build your enterprise Hyperledger Fabric network?" subtext="Trust is the infrastructure. We build the infrastructure." ctaLabel="Start your Fabric project" />
        <ServiceRelated services={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
