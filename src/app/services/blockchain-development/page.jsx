import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  ServiceHero, ServiceIntro, ServiceCapabilities,
  ServiceWhyUs, ServiceProcess, ServiceFAQ, ServiceCTA, ServiceRelated,
} from "@/components/Services/ServicePageLayout";

export const metadata = {
  title: "Blockchain Development Company & Services | Smoking Chimney",
  description: "Smoking Chimney is an enterprise blockchain development company offering custom blockchain solutions — smart contract development, private blockchain networks, blockchain consulting, DeFi, and blockchain MVP development.",
  keywords: "blockchain development company, blockchain development services, enterprise blockchain development, blockchain software development company, custom blockchain development, blockchain consulting services, private blockchain development, enterprise blockchain solutions, blockchain application development, blockchain system integration, blockchain proof of concept development, blockchain MVP development",
  alternates: { canonical: "https://www.smokingchimney.in/services/blockchain-development/" },
  openGraph: { title: "Blockchain Development Company & Services | Smoking Chimney", description: "Custom blockchain solutions from smart contracts to full private networks — Ethereum, Polygon, Hyperledger Fabric, Solana, and more. Enterprise blockchain built to last.", url: "https://www.smokingchimney.in/services/blockchain-development/", type: "website" },
};

const capabilities = [
  { icon: "ScrollText", title: "Smart Contract Development", description: "Secure, gas-optimised smart contracts on Ethereum, Polygon, BNB Chain, Solana, and other EVM and non-EVM chains — from simple token contracts to complex multi-party agreements.", features: ["Solidity & Rust development", "Gas optimisation", "Formal verification", "Multi-sig & time-lock patterns"] },
  { icon: "Lock", title: "Private Blockchain Networks", description: "Design and deploy permissioned enterprise blockchain networks using Hyperledger Fabric, Besu, or custom consensus mechanisms tailored to your consortium's governance model.", features: ["Hyperledger Fabric networks", "Ethereum Besu (private)", "Custom consensus design", "Multi-org governance models"] },
  { icon: "Coins", title: "DeFi & Token Development", description: "Build DeFi protocols, governance tokens, utility tokens, NFT platforms, and tokenised asset systems with security-first smart contract architecture.", features: ["ERC-20 / ERC-721 / ERC-1155", "AMM & liquidity pools", "DAO governance systems", "Tokenised real-world assets"] },
  { icon: "GitBranch", title: "Blockchain System Integration", description: "Integrate blockchain infrastructure into your existing enterprise systems — ERP, supply chain platforms, banking systems — via REST APIs, event listeners, and oracle networks.", features: ["Oracle integration (Chainlink)", "Cross-chain bridges", "ERP & CRM connectors", "Blockchain data indexing"] },
  { icon: "FlaskConical", title: "Blockchain PoC & MVP Development", description: "Validate your blockchain concept quickly and cheaply with a focused proof-of-concept or MVP — before committing to full-scale production development.", features: ["2–4 week PoC sprints", "Testnet deployment", "Investor-ready demos", "Architecture validation"] },
  { icon: "ShieldAlert", title: "Smart Contract Audit & Security", description: "Independent security review of existing smart contracts — identifying re-entrancy vulnerabilities, integer overflows, access control issues, and other critical exploits before they cost you.", features: ["Manual code review", "Automated vulnerability scanning", "Attack vector analysis", "Remediation support"] },
];

const whyUs = [
  { icon: "Globe2", title: "Multi-chain expertise", body: "We're not a one-chain shop. Our engineers have shipped production systems on Ethereum, Polygon, BNB Chain, Solana, Avalanche, and Hyperledger Fabric — so we choose the right chain for your use case, not the one we know best." },
  { icon: "KeyRound", title: "Security-first smart contracts", body: "Every smart contract we write goes through internal security review and automated scanning. For high-value contracts, we recommend and coordinate external audits from top-tier firms." },
  { icon: "Briefcase", title: "Enterprise blockchain track record", body: "We've delivered blockchain solutions for supply chain provenance, trade finance, digital identity, and tokenised assets — building credibility with enterprises that can't afford blockchain experiments." },
  { icon: "Lightbulb", title: "Pragmatic blockchain consulting", body: "We'll tell you honestly when blockchain adds value and when it doesn't. Our consulting engagements start with problem-first thinking, not technology evangelism." },
];

const steps = [
  { title: "Blockchain feasibility & chain selection", body: "We assess your use case, identify whether blockchain genuinely adds value over a traditional database, and select the optimal chain (public vs. private, EVM vs. non-EVM) based on your requirements." },
  { title: "Architecture design & tokenomics", body: "System architecture, data models, on-chain vs. off-chain data partitioning, smart contract interfaces, and (where applicable) token economic design are all defined before development begins." },
  { title: "Smart contract development & testing", body: "Contracts are developed with test-driven development, tested on local hardhat/foundry environments, and deployed to testnets for multi-stakeholder review before mainnet." },
  { title: "Backend & integration layer", body: "We build the indexing, API, and event-listening backend that makes your blockchain data accessible to your applications and enterprise systems in real-time." },
  { title: "Frontend dApp or enterprise dashboard", body: "User-facing applications — whether a Web3 dApp with wallet connection or an enterprise admin dashboard — are built with your end-users' technical sophistication in mind." },
  { title: "Audit, deployment & monitoring", body: "Smart contracts undergo security review, are deployed with multi-sig governance, and are monitored with on-chain analytics dashboards for the long term." },
];

const faqs = [
  { q: "Which blockchains do you develop on?", a: "We develop on Ethereum, Polygon, BNB Chain, Avalanche, Solana, Hyperledger Fabric, Hyperledger Besu, and other EVM-compatible chains. We help you choose the right chain based on your use case, transaction volume, privacy requirements, and regulatory environment." },
  { q: "What is the difference between public and private blockchain development?", a: "Public blockchains (Ethereum, Polygon) are permissionless — anyone can participate, and all transactions are visible. Private blockchains (Hyperledger Fabric, Besu) are permissioned — only invited participants join, and transaction visibility can be restricted. Enterprise use cases often prefer private chains for compliance and confidentiality reasons." },
  { q: "How long does a blockchain development project take?", a: "A focused blockchain PoC takes 4–6 weeks. An MVP with smart contracts, backend, and basic frontend typically takes 10–16 weeks. Full enterprise blockchain networks with multi-org governance can take 4–9 months depending on complexity." },
  { q: "Do you provide smart contract security audits?", a: "Yes. We conduct internal security reviews for all smart contracts we develop. For contracts managing significant value (>$100K), we strongly recommend and coordinate external audits from firms like Certik, Trail of Bits, or Consensys Diligence." },
  { q: "Can blockchain be integrated with our existing enterprise systems?", a: "Absolutely. We build REST API layers, GraphQL indexers (The Graph), and event-driven integration services that make blockchain data accessible to existing ERPs, CRMs, and supply chain platforms — without requiring those systems to know anything about blockchain." },
];

const related = [
  { icon: "Network", title: "Hyperledger Fabric", description: "Enterprise permissioned blockchain networks with channel-based privacy and modular consensus.", href: "/services/hyperledger-fabric-development/" },
  { icon: "Plug", title: "API & Enterprise Integration", description: "Connect your blockchain infrastructure to your existing enterprise systems and data pipelines.", href: "/services/api-enterprise-integration/" },
  { icon: "Bot", title: "AI Development", description: "AI-powered analytics on blockchain data — anomaly detection, pattern recognition, and predictive insights.", href: "/services/ai-development/" },
];

export default function BlockchainDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero eyebrow="Blockchain Development Services" headline="Build the Trustless Infrastructure Your Business Deserves." subtext="From smart contracts to full enterprise blockchain networks — we build the blockchain infrastructure that eliminates intermediaries, enforces transparency, and creates immutable records your business can rely on." ctaLabel="Book a Free Blockchain Consultation" />
        <ServiceIntro label="Custom blockchain development services" headline="Blockchain that solves real business problems — not just technology theatre" highlightWords={["real", "theatre"]} body="Too many blockchain projects are built around the technology instead of the problem. At Smoking Chimney, we start with your business challenge — then determine whether blockchain is the right tool, which chain fits best, and how to deliver maximum ROI from your investment." />
        <ServiceCapabilities label="What we build" headline="End-to-end blockchain development capabilities" highlightWords={["End-to-end", "blockchain"]} items={capabilities} />
        <ServiceWhyUs label="Why Smoking Chimney" headline="Blockchain engineers who prioritise your outcomes over our ideology" highlightWords={["outcomes", "ideology"]} points={whyUs} />
        <ServiceProcess label="How we deliver" headline="Our blockchain development process, from PoC to production" highlightWords={["PoC", "production"]} steps={steps} />
        <ServiceFAQ label="Common questions" headline="Blockchain development questions every enterprise asks" highlightWords={["Blockchain", "enterprise"]} faqs={faqs} />
        <ServiceCTA headline="Ready to build blockchain infrastructure that actually delivers?" subtext="We just build what others can't." ctaLabel="Start your blockchain project" />
        <ServiceRelated services={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
