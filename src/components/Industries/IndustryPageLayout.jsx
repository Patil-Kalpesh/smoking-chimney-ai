"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideUp, parentContainerVariants } from "@/lib/variants";
import HighlightText from "@/components/ui/HighlightText";
import Link from "next/link";
import {
  ShieldCheck, Workflow, FileBarChart2, Plug, Link2,
  HeartPulse, GitMerge, Palette, BrainCircuit, Database,
  ScanText, ServerCog, Cloud, Settings2, RefreshCcw,
  KeyRound, Lock, FolderCheck, AlertTriangle,
  Layers, Cable, Users2, GitFork,
  Landmark, Stethoscope, Bot, ShieldHalf, Truck,
  ArrowRight,
} from "lucide-react";

const ICON_MAP = {
  ShieldCheck, Workflow, FileBarChart2, Plug, Link2,
  HeartPulse, GitMerge, Palette, BrainCircuit, Database,
  ScanText, ServerCog, Cloud, Settings2, RefreshCcw,
  KeyRound, Lock, FolderCheck, AlertTriangle,
  Layers, Cable, Users2, GitFork,
  Landmark, Stethoscope, Bot, ShieldHalf, Truck,
};

function IconBox({ name, size = 24, className = "" }) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return (
    <div className={`w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-[#ED57291A] flex-shrink-0 ${className}`}>
      <Icon size={size} strokeWidth={1.5} color="#ED5729" />
    </div>
  );
}

export function IndustryHero({ eyebrow, headline, subtext, ctaLabel = "Discuss your project", ctaHref = "https://cal.com/smokingchimneystudios/free-consultation?layout=mobile" }) {
  return (
    <div className="banner-bg-img h-[560px] lg:h-[620px] flex items-center justify-center mt-[80px]">
      <div className="mx-auto max-w-7xl px-8 lg:px-10 w-full">
        <motion.div className="text-center" variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {eyebrow && <p className="text-[#ED5729] font-normal text-base lg:text-lg mb-3 tracking-wide uppercase">{eyebrow}</p>}
          <h1 className="font-sofia font-medium text-[38px] lg:text-[62px] text-[#212529] leading-tight lg:leading-[76px] tracking-[-1px] pb-3 max-w-5xl mx-auto">
            {headline}
          </h1>
          {subtext && <p className="font-sofia font-light text-[#212529] text-[18px] lg:text-[22px] text-center max-w-2xl mx-auto pb-6">{subtext}</p>}
          <Link href={ctaHref} target="_blank"><button className="banner-btn">{ctaLabel}</button></Link>
        </motion.div>
      </div>
    </div>
  );
}

export function IndustryIntro({ label, headline, highlightWords = [], body }) {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-20 py-16 lg:py-20">
      {label && <p className="text-base lg:text-lg text-center mb-3 text-[#4a4a4a]">{label}</p>}
      <HighlightText text={headline} highlightWords={highlightWords} className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] mb-6" />
      {body && <p className="text-center text-[16px] lg:text-[18px] text-[#00000080] max-w-3xl mx-auto leading-relaxed">{body}</p>}
    </section>
  );
}

export function IndustryPainPoints({ label, headline, highlightWords = [], points }) {
  return (
    <section className="bg-[#EEF3ED]">
      <div className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">
        {label && <p className="text-lg lg:text-xl pb-3 text-center text-[#4a4a4a]">{label}</p>}
        <HighlightText text={headline} highlightWords={highlightWords} className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] pb-12" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={parentContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-80px" }}
        >
          {points.map((pt, i) => (
            <motion.div key={i} className="card-item lg:p-6" variants={slideUp}>
              <div className="w-8 h-8 rounded-full bg-[#ED5729] text-white flex items-center justify-center text-sm font-medium mb-4 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[18px] font-medium mb-2">{pt.title}</h3>
              <p className="text-[14px] text-[#00000080] leading-relaxed">{pt.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function IndustryCapabilities({ label, headline, highlightWords = [], items }) {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">
      {label && <p className="text-lg lg:text-xl pb-3 text-center text-[#4a4a4a]">{label}</p>}
      <HighlightText text={headline} highlightWords={highlightWords} className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] pb-12" />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10 lg:gap-y-6"
        variants={parentContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      >
        {items.map((item, index) => {
          const isCenterCard = index % 3 === 1;
          return (
            <motion.div key={index} className="card-item lg:p-4 relative" variants={slideUp}>
              {isCenterCard && (
                <div className="absolute inset-0 lg:before:content-[''] lg:after:content-[''] lg:before:absolute lg:after:absolute lg:before:w-[2px] lg:after:w-[2px] lg:before:bg-gray-300 lg:after:bg-gray-300 lg:before:left-[-6px] lg:after:right-1 lg:before:top-14 lg:after:top-14 lg:before:h-48 lg:after:h-48" />
              )}
              <IconBox name={item.icon} className="mb-3" />
              <h3 className="text-[22px] lg:text-[24px] py-2 leading-8">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.body}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export function IndustryProcess({ label, headline, highlightWords = [], steps }) {
  return (
    <section className="bg-[#EEF3ED]">
      <div className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">
        {label && <p className="text-lg lg:text-xl pb-3 text-center text-[#4a4a4a]">{label}</p>}
        <HighlightText text={headline} highlightWords={highlightWords} className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] pb-12" />
        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <motion.div key={i} className="flex gap-5" variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2, margin: "-80px" }}>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#ED5729] text-white flex items-center justify-center text-sm font-medium flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {i < steps.length - 1 && <div className="w-[1px] flex-1 bg-gray-300 mt-2" />}
              </div>
              <div className="card-item p-5 mb-4 flex-1">
                <h3 className="text-[18px] font-medium mb-2">{step.title}</h3>
                <p className="text-[14px] text-[#00000080] leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryCompliance({ headline, body }) {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-20 py-[60px]">
      <motion.div
        className="card-item lg:p-10 border-l-4 border-[#ED5729]"
        variants={slideUp} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2 className="text-[26px] lg:text-[32px] font-medium mb-4">{headline}</h2>
        <p className="text-[15px] lg:text-[16px] text-[#00000080] leading-relaxed">{body}</p>
      </motion.div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.div className="card-item" variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
      <button className="w-full flex justify-between items-start py-4 px-5 text-left" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="font-medium text-[16px] pr-4">{question}</span>
        <span className={`text-[#ED5729] text-xl transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-[14px] text-[#00000080] px-5 pb-5 leading-relaxed">{answer}</p>
      </div>
    </motion.div>
  );
}

export function IndustryFAQ({ label, headline, highlightWords = [], faqs }) {
  return (
    <section className="bg-[#EEF3ED]">
      <div className="mx-auto max-w-7xl px-8 lg:px-20 py-[60px]">
        {label && <p className="text-lg lg:text-xl pb-3 text-center text-[#4a4a4a]">{label}</p>}
        <HighlightText text={headline} highlightWords={highlightWords} className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] pb-10" />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
        </div>
      </div>
    </section>
  );
}

export function IndustryCTA({ headline, subtext, ctaLabel = "Discuss your requirements", ctaHref = "https://cal.com/smokingchimneystudios/free-consultation?layout=mobile" }) {
  return (
    <div className="mx-auto max-w-7xl h-100 w-full bg-[#ED5729]">
      <div className="banner-bg-img-2">
        <motion.div className="text-center px-[20px] py-[80px]" variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2, margin: "-100px" }}>
          {subtext && <p className="text-xl lg:text-2xl font-normal mb-2">{subtext}</p>}
          <h2 className="lg:text-[48px] text-[36px] font-medium lg:leading-[64px] text-white pb-6">{headline}</h2>
          <Link href={ctaHref} target="_blank"><button className="white-btn">{ctaLabel}</button></Link>
        </motion.div>
      </div>
    </div>
  );
}

export function IndustryRelated({ items }) {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">
      <p className="text-center text-lg lg:text-xl pb-3 text-[#4a4a4a]">Also served by Smoking Chimney</p>
      <HighlightText text="Related industries we build for" highlightWords={["Related", "industries"]} className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] pb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s, i) => (
          <motion.div key={i} variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <Link href={s.href} className="card-item lg:p-6 block group hover:border-[#ED5729] transition-all duration-300">
              <IconBox name={s.icon} className="mb-3 group-hover:bg-[#ED57294D] transition-colors duration-300" />
              <h3 className="text-[18px] font-medium group-hover:text-[#ED5729] transition-colors duration-300 mb-2">{s.title}</h3>
              <p className="text-[14px] text-[#00000080] mb-4">{s.description}</p>
              <span className="inline-flex items-center gap-1 text-[#ED5729] text-[13px] font-medium tracking-wide">
                Learn more <ArrowRight size={13} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
