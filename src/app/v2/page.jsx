"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import EngineeredCapabilitiesSection from "../../components/Component/EngineeredCapabilitiesSection";
import Header from "../../components/Header/Header";
import PortfolioUI from "../../components/Component/PortfolioUI";
import CommercialFrameworks from "../../components/Component/CommercialFrameworks";
import StudioSection from "../../components/Component/StudioSection";
import SkipAgencySection from "../../components/Component/SkipAgencySection";
import Footer from "../../components/Component/Footer";

const serviceTags = [
  "Video & Content Marketing",
  "Branding & Visual Identity",
  "Product Design",
  "UI/UX",
  "Sound Design",
];
const iconPaths = [
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  "M12 8c-3.59 0-6.65 2.91-6.97 6.47C4.46 15.65 5.5 15 6.7 15h1.04c.61 0 1.19.28 1.57.75l.36.45c.38.47.96.75 1.57.75s1.19-.28 1.57-.75l.36-.45c.38-.47.96-.75 1.57-.75H17.3c1.2 0 2.24.65 2.67 1.47C18.65 10.91 15.59 8 12 8z",
  "M12 2a9 9 0 100 18 9 9 0 000-18zm0 4a2 2 0 110 4 2 2 0 010-4zm0 12a6 6 0 01-5-2.68c.05-1.66 3.34-2.57 5-2.57s4.95.91 5 2.57A6 6 0 0112 18z",
  "M19 13H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2zm-7-1.5l2.5-1.5L12 8.5l-2.5 1.5L12 11.5z",
  "M12 2L3.5 20.29a1 1 0 00.9 1.42h15.2a1 1 0 00.9-1.42z",
];
const logos = [
  { name: "Imagine AI", src: "/images/v2/c-1.png" },
  { name: "Queue", src: "/images/v2/c-2.png" },
  { name: "Astra", src: "/images/v2/c-3.png" },
  { name: "Atlas", src: "/images/v2/c-4.png", highlight: true },
  { name: "Audlabs", src: "/images/v2/c-5.png" },
  { name: "Shape", src: "/images/v2/c-6.png" },
  { name: "Base", src: "/images/v2/c-7.png" },
];
const pillars = [
  {
    title: "Effortless on first glance, Filmmaking and motion",
    description:
      "Don't just shoot footage; fix retention rates. Utilize cinema-grade visuals designed specifically to keep the viewer watching.",
    image: "/images/v2/pillar1.png",
  },
  {
    title: "Powerful when needed, Design and experience.",
    description:
      "Beauty is a function of clarity. Build digital systems that remove confusion and guide users effortlessly to the buy button.",
    image: "/images/v2/pillar2.png",
  },
  {
    title: "Killing the Darling, Production acceleration.",
    description:
      "Speed is a feature. Leverage custom models to remove the manual labor from production, saving weeks of downtime also keeping NDA in mind.",
    image: "/images/v2/pillar3.png",
  },
];

// export default function Page() {
  
//   return (
  //     <>
  //       {/* ...existing JSX and logic for your page, including the mobile menu, header, etc. ... */}
  //     </>
  //   );
  // }
  export default function Page() {
  // Header now manages its own mobile menu state
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-white text-[#1f1f1f] font-sofia">
        <div className="absolute inset-0">
          <Image
            src="/images/v2/bg-1.png"
            alt="Cinematic portrait background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
            style={{ objectPosition: "80% center" }}
          />
        </div>
        {/* Header Section */}
        <Header  />

        <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-6 pt-32 lg:pt-52">
          <div className="space-y-2 lg:max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-[#d44a2d]">
              <span>Accepting Projects with</span>
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#d44a2d]" />
            </div>
            <h1
              className="font-figtree font-light text-[32px] lg:text-[40px] leading-[1.4] lg:text-[#141517] text-white"
              style={{
                letterSpacing: "0.01px",
                fontVariantNumeric: "slashed-zero",
                leadingTrim: "none",
                verticalAlign: "middle",
              }}
            >
              Award winning premiere for brands that <br /> need to move as fast as
              modern culture.
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-3 rounded-lg bg-[#ef582a] px-7 py-2 text-sm font-semibold text-white shadow-lg shadow-[#ef582a]/30 transition hover:translate-y-[-1px] hover:bg-[#df4f24]">
                <span>Start Your Premiere</span>
                <span className="text-lg">→</span>
              </button>
              <div className="flex items-center gap-3 text-xs text-[#5c5c5c]">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((avatar) => (
                    <img
                      key={avatar}
                      src="/uploads/1738944613624.jpeg"
                      alt="Client avatar"
                      className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="text-[14px] lg:text-gray-500 text-white font-light">
                  Trusted by 12k+ clients
                </span>
              </div>
            </div>
            <p className="max-w-2xl text-[18px] font-light lg:text-[#141517] text-white">
              30-min session, Book your call. Just a clear path forward.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-[#4a4a4a] lg:pt-16 pt-1">
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#e5e5e5] bg-white/85 px-4 py-2 shadow-sm backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mx-auto flex flex-col gap-4 rounded-full bg-white/70 lg:px-10 px-4 py-4 shadow-lg shadow-black/5 backdrop-blur md:flex-row md:items-center md:justify-center">
            <div className="flex items-center gap-3 text-sm text-[#4a4a4a]">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ef582a]/10 text-[#ef582a]">
                ★
              </span>
              <div className="leading-tight">
                <div className="text-xs font-light text-[#1f1f1f]">
                  Accepting New Projects
                </div>
                <div className="text-xs font-light text-[#d44a2d]">
                  2 Slots remaining for January
                </div>
              </div>
              </div>
                <button className="flex items-center gap-2 rounded-full bg-[#ef582a] px-5 py-2 text-sm font-light text-white shadow-md transition hover:bg-[#df4f24]">
                <span>Configure New Project</span>
                <span className="text-lg">→</span>
              </button>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center justify-center md:gap-4">
            
              <div className="flex items-center justify-center gap-3 text-[#4a4a4a]">
               <img src="/images/v2/icon-1.png" alt="icon-1" />
               <img src="/images/v2/icon-2.png" alt="icon-2" />
               <img src="/images/v2/icon-3.png" alt="icon-3" /> |
               <img src="/images/v2/icon-4.png" alt="icon-4" />
               <img src="/images/v2/icon-5.png" alt="icon-5" />
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* // Hero Section 2 */}
      <section className="relative min-h-full pt-10 lg:pb-10 pb-6 flex items-center bg-[#f3f3f3] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/v2/clouds.png"
            alt="Cloud background"
            className="w-full h-full object-cover "
          />
          {/* <div className="absolute inset-0 bg-white/60"></div> */}
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-3xl md:text-[36px] font-light leading-tight text-[#141517]">
            Smoking Chimney is a creative-tech studio that turns messy ideas
            into binge-worthy experiences and orchestrate human connections.
          </h1>

          <p className="mt-8 text-lg md:text-[21px] text-gray-600 leading-relaxed max-w-4xl">
            Fluency in Strategy is standard. But the native language here is
            Cinema. Experience it like a film score it needs rhythm, tension,
            and release. Access a friction-removal specialist disguised as a
            high-fidelity production house.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl">
            Logic combines with the soul of a musician to solve the one problem
            that matters: Obscurity. A background in filmmaking isn&apos;t just a
            hobby; it is the empathy tool. It teaches that if the audience
            doesn&apos;t feel something, they won&apos;t do anything.
          </p>

          <a
            href="#"
            className="inline-flex items-center mt-10 text-orange-600 font-normal text-lg hover:underline"
          >
            Read the operating manual
            <span className="ml-2 text-xl">↗</span>
          </a>
        </div>
      </section>
      {/* Tool Section--3 */}
      <section className="bg-[#fff] py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl  font-light leading-tight text-gray-900">
              Cinema-led tools for growth-seeking brands.
            </h2>
            <p className="mt-2 text-base sm:text-lg text-gray-600 leading-relaxed">
              We don&apos;t just &apos;make videos&apos;. We engineer assets using proprietary
              narrative frameworks and AI velocity.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 col-span-1 relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] lg:min-h-[250px] min-h-[160px] flex items-end p-8 md:p-10">
              {/* Background Image */}
              <img
                src="/images/v2/focus.png"
                alt="Focus visual"
                className="absolute inset-0 w-full h-full"
              />
              {/* Soft Overlay */}
              {/* Content */}
              <div className="absolute z-10 max-w-sm top-14">
                <h3 className="text-lg md:text-2xl font-light text-gray-800">
                  We focus on attention
                </h3>
                <p className="mt-2 text-gray-600 text-md text-light ">
                  We make things people actually <br /> want to watch.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h3 className="text-lg md:text-2xl font-light text-gray-800">
                We don&apos;t just edit video.
                <br />
                We engineer attention.
              </h3>
              <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                We engineer assets using proprietary <br /> narrative frameworks and
                visual delight.
              </p>
            </div>
          </div>
          <div className="mt-6  grid lg:grid-cols-5 grid-cols-1 gap-6 ">
            {/* Card 4 */}
            <div
              className="lg:col-span-2 col-span-1 w-full bg-no-repeat  bg-contain  relative rounded-2xl overflow-hidden  lg:min-h-[227px] h-[180px] "
              style={{ backgroundImage: "url('/images/v2/globe.png')" }}
            >
              {/* Background Image */}
              <div className=" ">
                {/* Content */}
                <div className=" pt-4 ps-8">
                  <h3 className="text-lg md:text-2xl font-light text-gray-800">
                    200+ Projects shipped globally
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="lg:col-span-3  col-span-1 w-full bg-no-repeat  bg-contain relative rounded-2xl overflow-hidden  lg:h-[210px] h-[145px] "
              style={{ backgroundImage: "url('/images/v2/mu2.png')" }}
            >
              <h3 className="pt-4  ps-4 text-xl md:text-2xl font-light text-gray-900">
               Effortless video production at scale
              </h3>
            </div>
          </div>
          <div className="mt-6  flex flex-col lg:flex-row gap-6 ">
            {/* TRUST SECTION */}
            <div className="rounded-2xl  bg-white">
            <div className=" flex gap-2 ">
              <div className="max-w-[590px] ps-6">
                <h3 className="mt-10 text-lg md:text-2xl font-light text-gray-800">
                  Trusted by Visionaries and Creators like you.
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed text-sm ">
                  <span className="font-semibold">
                    40+ Global Industry Awards
                  </span>{" "}
                  and real feedback from users who’ve built smarter, faster, and
                  better — and{" "}
                  <span className="font-semibold">
                    20+ more are joining the new wave.
                  </span>
                </p>
              </div>

              <div className="flex justify-center w-[630px]">
                <img
                  src="/images/v2/mascot.png"
                  alt="Mascot"
                  className="h-full object-contain"
                />
              </div>
            </div>
            </div>
            {/* CTA Card */}
            <div className="col-span-1 lg:w-[400px] rounded-2xl p-4 bg-gradient-to-br from-orange-600 to-[#F94A0D] text-white  flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-medium leading-snug">
                  Great Stories Unearth <br /> Hidden Revenue
                </h3>
                <p className="mt-4 text-sm lg:text-lg text-white font-light ">
                  The best conversions come <br /> from evoking the <br /> right emotion.
                </p>
              </div>

              <button className="mt-8  mb-3 inline-flex items-center font-medium text-base md:text-lg hover:opacity-90 transition">
                Start Project Now
                <span className="ml-2 text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Trusted by Section-4 */}
       <section className="w-full bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 text-start">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-nomarl text-gray-800 mb-10">
          Trusted by the best creative teams and companies globally
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center px-2 py-2 rounded-xl 
                ${
                  logo.highlight
                    ? "bg-white shadow-sm"
                    : "bg-white/60"
                }`}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`h-6 md:h-12 object-contain 
                  ${
                    logo.highlight
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
              />
            </div>
          ))}
        </div>
      </div>
       </section>
      {/* Parral section -5 */}
     <section className="w-full bg-[#f3f3f3] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight max-w-4xl mb-16">
          Our each project is lead by three monolithic pillars,
          <br />
          Which lead your project to Effortless Cinema-grade.
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <div key={index} className="space-y-6">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-[420px] object-cover"
                />

                {/* Bottom fade overlay */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-black text-white rounded-xl px-10 py-10 flex items-center justify-between overflow-hidden">
          
          {/* Left Text */}
          <h3 className="text-2xl md:text-3xl font-medium max-w-xl">
            Initialize Blueprint Script or <br /> Request Custom Solution?
          </h3>

          {/* Center Reel Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src="/images/v2/reel.png"
              alt="reel"
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* Right Button */}
          <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-lg text-white font-medium flex items-center gap-2">
            Cinema-grade Solutions →
          </button>
        </div>
      </div>
    </section>
      {/* Production section-6 */}
      <section className="w-full bg-[#f5f5f5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            
            {/* LEFT CARD */}
            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug mb-6">
                We ship while they schedule.
                <br />
                Production ready in 48 hours.
              </h2>

              <p className="text-gray-500 leading-relaxed mb-8">
                Traditional agencies take months. We take hours or mins and seconds depending on rush and wait.
              </p>

              {/* Gradient Button */}
              <button className="relative px-8 py-4 rounded-xl text-white font-medium mb-8 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 hover:opacity-90 transition">
                Shipped in 2 Days*
              </button>

              {/* Bottom muted tag */}
              <div className="bg-gray-100 text-gray-500 px-6 py-4 rounded-xl text-sm w-fit">
                Month’s to launch & millions spend
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug mb-6">
                Frequent, high-fidelity updates.
              </h2>

              <p className="text-gray-500 leading-relaxed mb-10 max-w-md">
                Don’t wait for the &quot;big reveal&quot;. Watch it build. See your project come alive everyday*. No radio silence, just relentless progress.
              </p>

              {/* Timeline UI */}
              <div className="relative border-t border-gray-200 pt-10">

                {/* Floating Tags */}
                <div className="relative h-32">

                  <div className="absolute left-0 top-0 bg-white shadow-md px-5 py-2 rounded-full text-sm">
                    <span className="text-orange-500 mr-2">•</span> Script Lock
                  </div>

                  <div className="absolute left-1/3 top-10 bg-gray-100 px-5 py-2 rounded-full text-sm text-gray-600">
                    Style frame
                  </div>

                  <div className="absolute left-2/3 top-2 bg-gray-100 px-5 py-2 rounded-full text-sm text-gray-600">
                    Color Grade
                  </div>

                  <div className="absolute left-1/2 top-20 bg-gray-100 px-5 py-2 rounded-full text-sm text-gray-600">
                    Rough Cut
                  </div>

                  <div className="absolute right-0 top-16 bg-gray-100 px-5 py-2 rounded-full text-sm text-gray-600">
                    VFX Pass
                  </div>

                  <div className="absolute right-0 bottom-0 bg-orange-500 text-white px-6 py-3 rounded-full text-sm shadow-md">
                    Final Master
                  </div>
                </div>

                {/* Days */}
                <div className="flex justify-between text-xs text-gray-400 mt-6">
                  <span>Day 1</span>
                  <span>Day 2</span>
                  <span>Day 3</span>
                  <span>Day 4</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* VisualEngineeringSection-7 */}
      <section className="w-full bg-[#f5f5f5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            Visual engineering.
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mb-16">
            From brand identity to high-end CGI, we provide the technical and
            creative expertise needed to elevate your brand&apos;s digital presence.
            Select a specialized unit to view the narrative blueprint and
            sub-service specifications.
          </p>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-sm transition">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Retention.
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                If they don&apos;t watch, they don&apos;t buy. We craft stories that don&apos;t
                just interrupt the feed—they become the reason people stop
                scrolling.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-sm transition">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Discovery.
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Being found is an engineering problem. We fuse technical SEO
                with cinematic storytelling to ensure algorithms love you as
                much as humans do.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-sm transition">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Global Scale.
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Your brand doesn&apos;t sleep. Our distributed team chases the sun,
                keeping the creative fires burning 24/7 to meet global timelines.
              </p>
            </div>

            {/* CTA Card */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  Begin production.
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Ready to eliminate the bottlenecks? Configure your production
                  unit and get a preliminary estimate in under 60 seconds.
                </p>
              </div>

              <button className="mt-8 text-left text-lg font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Start Project Now →
              </button>
            </div>

          </div>
        </div>
      </section>
      {/*--- EngineeredCapabilitiesSection---8 */}
      <EngineeredCapabilitiesSection/>
      {/* Portfolio-section---9 */}
      <PortfolioUI/>

      {/* Section----10 */}
      <div className="px-4 sm:px-8 lg:px-16 pt-10">
        <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden">

          {/* Background Image */}
          <div
            className="h-[380px] sm:h-[450px] lg:h-[520px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/v2/photo-bg-1.png')",
            }}
          />

          {/* White Gradient Overlay (Left Fade) */}
          <div className="absolute inset-0 " />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-3xl px-6 sm:px-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
                Proven results. Worthy to share. Box office hits!
              </h1>

              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                Works that moved people, turned heads and Proven to change
                directions. We attach precise performance telemetry to every
                production sequence. Proof isn&apos;t a separate section—it&apos;s the
                core of our aesthetic.
              </p>
                {/* Subheading */}
              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                Join 500+ founders and creative directors who stopped playing safe and started shipping greatness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CommercialFrameworks-section--11 */}
      <CommercialFrameworks/>

      {/* StudioSection--12 */}
      <StudioSection/>
      {/* SkipAngency-section-13 */}
      <SkipAgencySection/>
      {/* Footer */}
      <Footer/>

    </>
  );
}
