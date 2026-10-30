import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Contact from "@/components/CommonSection/Contact";
import { IndustryHero, IndustryCTA } from "@/components/Industries/IndustryPageLayout";
import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | Smoking Chimney Studios",
  description: "Software development for financial services, healthcare, enterprise SaaS, cybersecurity, and supply chain teams building complex, regulated products.",
  keywords: "enterprise software development services, fintech software development company, healthcare software development company, SaaS and AI development services, cybersecurity software development, supply chain software development",
  alternates: { canonical: "https://www.smokingchimney.in/industries/" },
  openGraph: { title: "Industries We Serve | Smoking Chimney Studios", description: "Technology for complex, regulated businesses — FinTech, HealthTech, Enterprise SaaS, Cybersecurity, and Supply Chain.", url: "https://www.smokingchimney.in/industries/", type: "website" },
};

const primaryIndustries = [
  {
    number: "01",
    title: "Financial Services, FinTech & RegTech",
    description: "KYC/KYB onboarding, compliance workflows, fintech platforms, and permissioned blockchain integrations for digital banks, payment companies, lenders, and RegTech vendors.",
    href: "/industries/fintech-regtech-software-development/",
    tags: ["KYC / KYB", "Compliance Workflows", "Blockchain", "Fraud & Risk"],
  },
  {
    number: "02",
    title: "Healthcare & HealthTech",
    description: "Patient and provider portals, HL7 FHIR interoperability, healthcare UI/UX design, and AI-enabled clinical support tools for health systems, digital health vendors, and medical software companies.",
    href: "/industries/healthtech-software-development/",
    tags: ["HL7 FHIR", "Patient Portals", "Healthcare UI/UX", "Clinical AI"],
  },
  {
    number: "03",
    title: "Enterprise SaaS, AI & Data Platforms",
    description: "Product engineering for B2B SaaS and AI companies: document intelligence, backend and API engineering, cloud delivery, and workflow automation — inside your repositories and release process.",
    href: "/industries/enterprise-saas-ai-development/",
    tags: ["Document AI", "API Engineering", "Cloud Architecture", "Workflow Automation"],
  },
];

const secondaryIndustries = [
  {
    title: "Cybersecurity, Identity & Digital Trust",
    description: "Secure backend engineering, identity platform integrations, compliance workflow software, and AI-enabled risk applications for identity vendors, fraud platforms, and security SaaS teams.",
    href: "/industries/cybersecurity-identity-software-development/",
  },
  {
    title: "Manufacturing, Supply Chain & Logistics",
    description: "Traceability platforms, ERP integrations, supplier onboarding with KYB verification, and multi-party workflow coordination — with permissioned blockchain only where the business case is real.",
    href: "/industries/supply-chain-software-development/",
  },
];

export default function IndustriesHubPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <IndustryHero
          eyebrow="Industries We Serve"
          headline="Technology for complex, regulated businesses."
          subtext="We help technology companies and enterprises build secure digital products, integrate complex systems, and deliver AI-powered software."
          ctaLabel="Find your vertical"
        />

        {/* Intro text */}
        <section className="mx-auto max-w-7xl px-8 lg:px-20 py-16 lg:py-20">
          <p className="text-base lg:text-lg text-center mb-3 text-[#4a4a4a]">Hub page</p>
          <h2 className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] mb-6">
            Five industries. One engineering culture.
          </h2>
          <p className="text-center text-[16px] lg:text-[18px] text-[#00000080] max-w-3xl mx-auto leading-relaxed">
            Smoking Chimney Studios® builds for five industries where regulation, integration complexity, and verification burdens are structural rather than occasional. Each page below describes what we engineer, the standards we design for, and how an engagement runs — so your team can judge fit before the first call.
          </p>
        </section>

        {/* Primary verticals */}
        <section className="bg-[#EEF3ED]">
          <div className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">
            <p className="text-lg lg:text-xl pb-3 text-center text-[#4a4a4a]">Primary verticals</p>
            <h2 className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] pb-12">Where our story is strongest</h2>
            <div className="space-y-6">
              {primaryIndustries.map((ind, i) => (
                <Link key={i} href={ind.href} className="card-item lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start group hover:border-[#ED5729] transition-all duration-300 block">
                  <div className="flex-shrink-0">
                    <span className="text-[48px] lg:text-[64px] font-medium text-[#ED57291A] group-hover:text-[#ED572933] transition-colors leading-none">{ind.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[22px] lg:text-[26px] font-medium mb-3 group-hover:text-[#ED5729] transition-colors">{ind.title}</h3>
                    <p className="text-[15px] text-[#00000080] leading-relaxed mb-4">{ind.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {ind.tags.map((tag, ti) => (
                        <span key={ti} className="text-[12px] font-medium px-3 py-1 rounded-full bg-white border border-gray-200 text-[#4a4a4a] group-hover:border-[#ED5729] group-hover:text-[#ED5729] transition-colors">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <span className="text-[#ED5729] text-[13px] font-medium tracking-wide whitespace-nowrap">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary verticals */}
        <section className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">
          <p className="text-lg lg:text-xl pb-3 text-center text-[#4a4a4a]">Also serving</p>
          <h2 className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] pb-12">Secondary verticals</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {secondaryIndustries.map((ind, i) => (
              <Link key={i} href={ind.href} className="card-item lg:p-8 block group hover:border-[#ED5729] transition-all duration-300">
                <h3 className="text-[20px] font-medium mb-3 group-hover:text-[#ED5729] transition-colors">{ind.title}</h3>
                <p className="text-[14px] text-[#00000080] leading-relaxed mb-4">{ind.description}</p>
                <span className="text-[#ED5729] text-[13px] font-medium tracking-wide">Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Not sure CTA */}
        <section className="bg-[#EEF3ED]">
          <div className="mx-auto max-w-7xl px-8 lg:px-20 py-[60px] text-center">
            <h2 className="text-[28px] lg:text-[36px] font-medium mb-4">Not sure which vertical fits?</h2>
            <p className="text-[16px] text-[#00000080] max-w-xl mx-auto mb-8 leading-relaxed">Contact us and tell us what you are building — we will tell you honestly whether it is a fit, and which of the five it belongs to.</p>
            <Link href="https://cal.com/smokingchimneystudios/free-consultation?layout=mobile" target="_blank">
              <button className="banner-btn">Talk to our team</button>
            </Link>
          </div>
        </section>

        <IndustryCTA headline="Ready to build something complex, regulated, and real?" subtext="We just build what others find too hard." ctaLabel="Start the conversation" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
