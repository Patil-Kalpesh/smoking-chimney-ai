import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import {
  ServiceHero, ServiceIntro, ServiceCapabilities,
  ServiceWhyUs, ServiceProcess, ServiceFAQ, ServiceCTA, ServiceRelated,
} from "@/components/Services/ServicePageLayout";

export const metadata = {
  title: "AI Development Company & Services | Smoking Chimney",
  description: "Smoking Chimney is a leading AI development company building custom AI solutions — LLM integrations, AI agent development, generative AI, document AI, OCR pipelines, and enterprise AI workflow automation.",
  keywords: "AI development company, AI development services, enterprise AI solutions, AI integration services, custom AI software development, generative AI development company, LLM integration services, AI workflow automation, AI agent development services, document AI development, OCR integration services, AI-powered fraud detection, machine learning development services",
  alternates: { canonical: "https://www.smokingchimney.in/services/ai-development/" },
  openGraph: { title: "AI Development Company & Services | Smoking Chimney", description: "From LLM-powered agents to document AI and ML pipelines — Smoking Chimney engineers enterprise AI solutions that create measurable business value from day one.", url: "https://www.smokingchimney.in/services/ai-development/", type: "website" },
};

const capabilities = [
  { icon: "MessageSquareCode", title: "LLM Integration Services", description: "Embed GPT-4o, Claude, Gemini, Mistral, and open-source LLMs into your products with robust prompt engineering, RAG pipelines, and context-aware response systems.", features: ["RAG pipeline architecture", "Prompt engineering & fine-tuning", "Multi-model orchestration", "LLM cost optimisation"] },
  { icon: "Bot", title: "AI Agent Development", description: "Design and deploy autonomous AI agents that plan, reason, and execute multi-step tasks — from research agents to code-generating copilots and workflow automation bots.", features: ["Multi-agent frameworks (LangGraph, CrewAI)", "Tool-use & function calling", "Memory & state management", "Human-in-the-loop guardrails"] },
  { icon: "FileSearch", title: "Document AI & OCR", description: "Transform unstructured documents — PDFs, scanned forms, contracts, invoices — into structured, actionable data using AI-powered extraction and classification.", features: ["Intelligent document processing", "Multi-format OCR pipelines", "Entity extraction & NER", "Document classification"] },
  { icon: "Sparkles", title: "Generative AI Development", description: "Build product features powered by generative AI — from AI-written content and image generation to synthetic data creation and creative tool suites.", features: ["Text & image generation APIs", "Fine-tuned domain-specific models", "Synthetic data pipelines", "AI content moderation"] },
  { icon: "Workflow", title: "AI Workflow Automation", description: "Replace manual, repetitive knowledge-work with intelligent automation — from email triage and report generation to complex multi-system orchestration.", features: ["Business process automation", "Intelligent data routing", "AI-triggered webhooks", "Human escalation workflows"] },
  { icon: "LineChart", title: "ML & Predictive Analytics", description: "Custom machine learning models — trained on your data — that forecast demand, detect anomalies, score risk, and surface insights your team can act on.", features: ["Supervised & unsupervised learning", "Time-series forecasting", "Anomaly detection", "Model explainability (XAI)"] },
];

const whyUs = [
  { icon: "FlaskConical", title: "Research-to-production AI", body: "We bridge the gap between AI research and production engineering — our team includes ML engineers, MLOps specialists, and AI product designers who build systems that work in the real world, not just in notebooks." },
  { icon: "Building2", title: "AI architecture that scales", body: "We design AI systems with observability, latency budgets, and cost models in mind from day one — so your AI features don't bankrupt you as you scale." },
  { icon: "ShieldCheck", title: "Responsible AI by default", body: "Bias testing, hallucination mitigation, PII redaction, and output safety filters are standard in every AI system we ship — because irresponsible AI is a liability, not a feature." },
  { icon: "PenTool", title: "Domain-specific fine-tuning", body: "Off-the-shelf models aren't always enough. We fine-tune LLMs and vision models on your proprietary data to achieve accuracy levels that generic models can't match in your domain." },
];

const steps = [
  { title: "AI opportunity assessment", body: "We audit your existing processes, data assets, and tech stack to identify the highest-ROI AI use cases — and the ones that sound exciting but won't deliver value." },
  { title: "Data readiness & pipeline design", body: "AI is only as good as its training data. We assess data quality, design collection and labelling pipelines, and build the vector stores and feature stores your AI models need." },
  { title: "Model selection & prototyping", body: "We rapidly prototype with the best-fit model architectures — fine-tuning vs. RAG, open-source vs. API-based — and benchmark performance against your acceptance criteria." },
  { title: "Production engineering & MLOps", body: "We productionise models with serving infrastructure, monitoring, A/B testing frameworks, and automated retraining pipelines so your AI gets smarter over time." },
  { title: "Integration & user experience", body: "AI features are embedded into your product's UX with thoughtful human-in-the-loop design — ensuring AI augments your users rather than frustrating them." },
  { title: "Monitoring, evaluation & iteration", body: "We set up LLM evaluation frameworks, output quality monitoring, and feedback loops so you always know how your AI is performing and when to improve it." },
];

const faqs = [
  { q: "Which AI models and frameworks do you work with?", a: "We work across the full ecosystem — OpenAI (GPT-4o, o1), Anthropic (Claude), Google (Gemini), Meta (LLaMA), Mistral, and open-source models via Hugging Face. For frameworks, we use LangChain, LangGraph, CrewAI, LlamaIndex, and custom orchestration layers depending on requirements." },
  { q: "How do you prevent AI hallucinations in production systems?", a: "We use a combination of RAG (retrieval-augmented generation) to ground LLM outputs in your data, structured output parsing, output validation layers, confidence scoring, and human-review escalation for low-confidence responses." },
  { q: "Can you work with our proprietary data without it leaving our infrastructure?", a: "Yes. We support fully on-premises AI deployments using open-source LLMs (LLaMA, Mistral, Phi) on your own cloud infrastructure — ensuring your proprietary data never touches a third-party API." },
  { q: "How long does a typical AI development project take?", a: "A focused AI feature (e.g., document extraction, Q&A bot) typically takes 4–8 weeks to production. Complex AI agent systems or full ML pipelines take 10–20 weeks depending on data readiness and integration complexity." },
  { q: "Do you provide AI model maintenance and retraining?", a: "Yes. We offer ongoing MLOps retainers that include model performance monitoring, drift detection, periodic retraining on new data, and prompt tuning as your use cases evolve." },
];

const related = [
  { icon: "ScanFace", title: "KYC/KYB Software", description: "AI document verification, liveness detection, and fraud detection for regulated customer onboarding.", href: "/services/kyc-kyb-software-development/" },
  { icon: "Plug", title: "API & Enterprise Integration", description: "Connect your AI features to existing enterprise systems and third-party platforms.", href: "/services/api-enterprise-integration/" },
  { icon: "LinkIcon", title: "Blockchain Development", description: "Combine AI with blockchain for tamper-proof audit trails and decentralised AI model governance.", href: "/services/blockchain-development/" },
];

export default function AIDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero eyebrow="AI Development Services" headline="Your Imagination, Amplified by Artificial Intelligence." subtext="We build production-grade AI systems — LLM-powered agents, document AI, generative AI features, and ML pipelines — that create measurable business value from day one." ctaLabel="Book a Free AI Strategy Session" />
        <ServiceIntro label="Custom AI software development" headline="AI that works in production, not just in a pitch deck" highlightWords={["production", "pitch"]} body="Most enterprises are sitting on a goldmine of unstructured data and repetitive processes that AI can transform. Smoking Chimney's AI engineers turn that potential into working software — faster, cheaper, and more reliably than building an in-house AI team." />
        <ServiceCapabilities label="What we build" headline="Enterprise AI capabilities across every use case" highlightWords={["Enterprise", "every"]} items={capabilities} />
        <ServiceWhyUs label="Why Smoking Chimney" headline="The AI development partner that ships, not just demos" highlightWords={["ships", "demos"]} points={whyUs} />
        <ServiceProcess label="Our AI development process" headline="From raw data to production AI in weeks, not years" highlightWords={["weeks", "years"]} steps={steps} />
        <ServiceFAQ label="Common questions" headline="Your AI development questions, honestly answered" highlightWords={["AI", "honestly"]} faqs={faqs} />
        <ServiceCTA headline="Ready to put AI to work in your business?" subtext="We just see and do what others don't." ctaLabel="Start your AI project" />
        <ServiceRelated services={related} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
