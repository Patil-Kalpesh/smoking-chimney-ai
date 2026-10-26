"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideUp, parentContainerVariants } from "@/lib/variants";
import HighlightText from "@/components/ui/HighlightText";
import Link from "next/link";
import {
  Plug, Link2, Building2, Cloud, Webhook, ShieldCheck, Zap, Layers,
  TrendingUp, Lock, Bot, Rocket, Lightbulb, Palette, Code2, Server,
  BarChart3, Timer, BadgeCheck, Blocks, Handshake, ScanFace, Building,
  GitMerge, ShieldAlert, UserCheck, Scale, Brain, Wrench, MessageSquareCode,
  FileSearch, Sparkles, Workflow, LineChart, FlaskConical, PenTool,
  Network, FileCode2, Cable, LayoutDashboard, EyeOff, ActivitySquare,
  Microscope, Users2, Layers2, Gauge, ScrollText, Coins, GitBranch,
  Globe2, KeyRound, Briefcase, Plug2, Link as LinkIcon, Building as BuildingIcon,
} from "lucide-react";

/* ── Icon registry: string name → Lucide component ── */
const ICON_MAP = {
  Plug, Link2, Building2, Cloud, Webhook, ShieldCheck, Zap, Layers,
  TrendingUp, Lock, Bot, Rocket, Lightbulb, Palette, Code2, Server,
  BarChart3, Timer, BadgeCheck, Blocks, Handshake, ScanFace, Building,
  GitMerge, ShieldAlert, UserCheck, Scale, Brain, Wrench, MessageSquareCode,
  FileSearch, Sparkles, Workflow, LineChart, FlaskConical, PenTool,
  Network, FileCode2, Cable, LayoutDashboard, EyeOff, ActivitySquare,
  Microscope, Users2, Layers2, Gauge, ScrollText, Coins, GitBranch,
  Globe2, KeyRound, Briefcase, LinkIcon, BuildingIcon,
};

/* ── Icon renderer ── */
function IconBox({ name, className = "" }) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return (
    <div className={`w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-[#ED57291A] mb-3 flex-shrink-0 ${className}`}>
      <Icon size={26} strokeWidth={1.5} color="#ED5729" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   ServiceHero
───────────────────────────────────────────── */
export function ServiceHero({ eyebrow, headline, subtext, ctaLabel = "Book a Free Consultation", ctaHref = "https://cal.com/smokingchimneystudios/free-consultation?layout=mobile" }) {
  return (
    <div className="banner-bg-img h-[560px] lg:h-[620px] flex items-center justify-center mt-[80px]">
      <div className="mx-auto max-w-7xl px-8 lg:px-10 w-full">
        <motion.div className="text-center" variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {eyebrow && <p className="text-[#ED5729] font-normal text-base lg:text-lg mb-3 tracking-wide uppercase">{eyebrow}</p>}
          <h1 className="font-sofia font-medium text-[42px] lg:text-[68px] text-[#212529] leading-tight lg:leading-[82px] tracking-[-1px] pb-3 max-w-4xl mx-auto">
            {headline}
          </h1>
          {subtext && <p className="font-sofia font-light text-[#212529] text-[18px] lg:text-[22px] text-center max-w-2xl mx-auto pb-6">{subtext}</p>}
          <Link href={ctaHref} target="_blank"><button className="banner-btn">{ctaLabel}</button></Link>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ServiceIntro
───────────────────────────────────────────── */
export function ServiceIntro({ label, headline, highlightWords = [], body }) {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-20 py-16 lg:py-20">
      {label && <p className="text-base lg:text-lg text-center mb-3">{label}</p>}
      <HighlightText text={headline} highlightWords={highlightWords} className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] mb-6" />
      {body && <p className="text-center text-[16px] lg:text-[18px] text-[#00000080] max-w-3xl mx-auto leading-relaxed">{body}</p>}
    </section>
  );
}

/* ─────────────────────────────────────────────
   ServiceCapabilities — icon prop is now a STRING
───────────────────────────────────────────── */
export function ServiceCapabilities({ label, headline, highlightWords = [], items }) {
  return (
    <section className="bg-[#EEF3ED]">
      <div className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">
        {label && <p className="text-lg lg:text-xl pb-3 text-center">{label}</p>}
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
                <IconBox name={item.icon} />
                <h3 className="text-[22px] lg:text-[26px] py-2 leading-8">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-[15px]">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((f, fi) => (
                    <li key={fi} className="flex items-center text-gray-700 text-[14px]">
                      <div className="w-1.5 h-1.5 bg-[#ED5729] rounded-full mr-2 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ServiceWhyUs
───────────────────────────────────────────── */
export function ServiceWhyUs({ label, headline, highlightWords = [], points }) {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">
      {label && <p className="text-lg lg:text-xl pb-3 text-center">{label}</p>}
      <HighlightText text={headline} highlightWords={highlightWords} className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] pb-12" />
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-10"
        variants={parentContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      >
        {points.map((pt, i) => (
          <motion.div key={i} className="card-item lg:p-4" variants={slideUp}>
            <IconBox name={pt.icon} />
            <h3 className="text-lg py-2 border-b-[1px] border-black">{pt.title}</h3>
            <p className="text-[14px] text-[#00000080] pt-2">{pt.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ServiceProcess
───────────────────────────────────────────── */
export function ServiceProcess({ label, headline, highlightWords = [], steps }) {
  return (
    <section className="bg-[#EEF3ED]">
      <div className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">
        {label && <p className="text-lg lg:text-xl pb-3 text-center">{label}</p>}
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

/* ─────────────────────────────────────────────
   ServiceFAQ
───────────────────────────────────────────── */
function FAQItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.div className="card-item" variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
      <button className="w-full flex justify-between items-start py-4 px-5 text-left" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="font-medium text-[16px] pr-4">{question}</span>
        <span className={`text-[#ED5729] text-xl transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-[14px] text-[#00000080] px-5 pb-5 leading-relaxed">{answer}</p>
      </div>
    </motion.div>
  );
}

export function ServiceFAQ({ label, headline, highlightWords = [], faqs }) {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-20 py-[60px]">
      {label && <p className="text-lg lg:text-xl pb-3 text-center">{label}</p>}
      <HighlightText text={headline} highlightWords={highlightWords} className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] pb-10" />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ServiceCTA
───────────────────────────────────────────── */
export function ServiceCTA({ headline, subtext, ctaLabel = "Let's light it up together!", ctaHref = "https://cal.com/smokingchimneystudios/free-consultation?layout=mobile" }) {
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

/* ─────────────────────────────────────────────
   ServiceRelated
───────────────────────────────────────────── */
export function ServiceRelated({ services }) {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-10 py-[60px]">
      <p className="text-center text-lg lg:text-xl pb-3">Explore what else we build</p>
      <HighlightText text="Related Services you might love" highlightWords={["Related", "Services"]} className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[64px] pb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div key={i} variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <Link href={s.href} className="card-item lg:p-6 block group hover:border-[#ED5729] transition-all duration-300">
              <IconBox name={s.icon} className="group-hover:bg-[#ED57294D] transition-colors duration-300" />
              <h3 className="text-[20px] font-medium group-hover:text-[#ED5729] transition-colors duration-300 mb-2">{s.title}</h3>
              <p className="text-[14px] text-[#00000080]">{s.description}</p>
              <span className="inline-block mt-4 text-[#ED5729] text-[13px] font-medium tracking-wide">Learn more →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
