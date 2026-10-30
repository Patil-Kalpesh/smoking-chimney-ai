"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HighlightText from "@/components/ui/HighlightText";

// Animation variants
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const slideUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const services = [
    {
        title: "SaaS & MVP Development",
        href: "/services/saas-mvp-development/",
        description: "End-to-end custom SaaS application and MVP development. Rapid product engineering for startups and enterprise scaling.",
        tags: ["Custom Software", "Product Engineering", "Cloud Apps"],
        icon: (
            <svg className="w-6 h-6 text-[#ED5729]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
        )
    },
    {
        title: "API & Enterprise Integration",
        href: "/services/api-enterprise-integration/",
        description: "Secure third-party API development and legacy system integration to connect your digital ecosystem seamlessly.",
        tags: ["Third-party APIs", "Webhook Integration", "SaaS Integration"],
        icon: (
            <svg className="w-6 h-6 text-[#ED5729]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
        )
    },
    {
        title: "AI Development",
        href: "/services/ai-development/",
        description: "Generative AI, LLM integration, and intelligent workflow automation to build next-generation enterprise solutions.",
        tags: ["LLM Integration", "AI Agents", "Document AI"],
        icon: (
            <svg className="w-6 h-6 text-[#ED5729]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        )
    },
    {
        title: "KYC & KYB Software",
        href: "/services/kyc-kyb-software-development/",
        description: "AI-powered digital identity verification, compliance workflows, and customer onboarding software for modern businesses.",
        tags: ["Identity Verification", "Fraud Detection", "Compliance"],
        icon: (
            <svg className="w-6 h-6 text-[#ED5729]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        )
    },
    {
        title: "Blockchain Development",
        href: "/services/blockchain-development/",
        description: "End-to-end enterprise blockchain system integration, PoC development, and secure digital asset solutions.",
        tags: ["Enterprise Blockchain", "Smart Contracts", "PoC"],
        icon: (
            <svg className="w-6 h-6 text-[#ED5729]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
        )
    },
    {
        title: "Hyperledger Fabric",
        href: "/services/hyperledger-fabric-development/",
        description: "Private permissioned blockchain development, architecture consulting, and chaincode implementation for secure networks.",
        tags: ["Chaincode", "Private Nodes", "Architecture"],
        icon: (
            <svg className="w-6 h-6 text-[#ED5729]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        )
    }
];

const industries = [
    { name: "FinTech & RegTech", href: "/industries/fintech-regtech-software-development/" },
    { name: "Healthcare & HealthTech", href: "/industries/healthtech-software-development/" },
    { name: "Enterprise SaaS & AI", href: "/industries/enterprise-saas-ai-development/" },
    { name: "Cybersecurity & Identity", href: "/industries/cybersecurity-identity-software-development/" },
    { name: "Supply Chain & Logistics", href: "/industries/supply-chain-software-development/" },
];

export default function ServicesAndIndustries() {
    return (
        <section className="bg-white relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">

                {/* Header Section */}
                <motion.div
                    className="pb-12 lg:pb-12 lg:px-28 text-center"
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="text-lg lg:text-xl pb-3 text-[#4a4a4a]">
                        Architecting the Future of Enterprise Tech
                    </p>
                    <HighlightText
                        className="lg:text-[48px] text-[36px] font-medium lg:leading-[64px] text-[#212529]"
                        text="Core capabilities driving digital transformation at scale"
                        highlightWords={["digital", "transformation", "scale"]}
                    />
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-24"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service, index) => (
                        <motion.article
                            key={index}
                            variants={slideUp}
                            className="group relative flex flex-col justify-between h-full cursor-pointer p-8 rounded-2xl border border-gray-950/[.05] bg-gray-950/[.01] hover:bg-[#ED5729] hover:shadow-xl transition-all duration-300"
                        >
                            <Link href={service.href} className="absolute inset-0 z-10" aria-label={`Learn more about ${service.title}`} />

                            <div>
                                <div className="h-14 w-14 rounded-xl bg-[#ED57291F] flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                                    <div className="group-hover:text-white [&>svg]:text-inherit">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-[22px] font-medium text-[#212529] mb-3 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[15px] text-[#4a4a4a] leading-relaxed group-hover:text-white/90 transition-colors">
                                    {service.description}
                                </p>
                            </div>

                            {/* Keyword SEO Tags */}
                            <div className="mt-8 flex flex-wrap gap-2">
                                {service.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-[12px] font-medium px-3 py-1 rounded-full bg-white/60 text-[#212529] group-hover:bg-white/20 group-hover:text-white transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Industries Section */}
                <motion.div
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="border-t border-gray-100 pt-12 lg:pt-16"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="md:w-1/3 text-center md:text-left">
                            <HighlightText
                                className="text-[28px] font-medium text-[#212529] mb-2"
                                text="Industries We Elevate"
                                highlightWords={["Elevate"]}
                            />
                            <p className="text-[#4a4a4a] text-sm">
                                Specialized domain expertise for sectors that demand security, compliance, and scale.
                            </p>
                        </div>

                        <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-3">
                            {industries.map((industry, index) => (
                                <Link
                                    key={index}
                                    href={industry.href}
                                    className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-[14px] font-medium text-[#4a4a4a] shadow-sm hover:border-[#ED5729] hover:text-[#ED5729] transition-colors"
                                >
                                    {industry.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}