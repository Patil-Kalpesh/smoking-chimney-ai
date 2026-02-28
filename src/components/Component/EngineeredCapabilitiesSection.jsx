"use client"
import React, { useState } from "react";

const tabs = [
  "Brand Identity & Visual Systems",
  "Cinematic Video & Commercial Production",
  "Motion Graphics, CGI & VFX",
  "Digital Performance & Social Content",
  "Web, UI/UX & Immersive Experiences",
  "Audio, Music & Podcast Production",
  "AI-Powered Creative & Automation",
];

const EngineeredCapabilitiesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#ffffff] py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Small Label */}
        <p className="text-orange-500 text-sm mb-4">
          Accepting Projects with ❤️
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Engineered capabilities.
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-600 text-lg max-w-4xl font-light leading-relaxed mb-4">
          From brand identity to high-end CGI, we provide the technical and
          creative expertise needed to elevate your brand&apos;s digital presence.
          Select a specialized unit to view the narrative blueprint and
          sub-service specifications.
        </p>

        <p className="text-gray-600 text-lg max-w-4xl font-light leading-relaxed mb-16">
          Stop buying generic &quot;creative work&quot;. Purchase specific solutions to
          business friction. Explore how each department eliminates a barrier
          to growth.
        </p>

        {/* Main Container */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200">

          <div className="grid lg:grid-cols-3 gap-12">

            {/* LEFT TABS */}
            <div className="space-y-6">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-full text-left text-sm px-4 py-4 rounded-md transition 
                    ${
                      active === index
                        ? "bg-gray-100 shadow-md text-orange-500"
                        : " text-gray-500 shadow-md hover:bg-gray-50"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-2">

              {/* Intro Text */}
              <p className="text-gray-600 leading-relaxed mb-10">
                Trust is established in milliseconds. If the visual language is
                weak, the price point is capped. Build visual systems that
                signal authority instantly. Remove the friction between the
                brand and the customer with a look that feels expensive and
                established.
              </p>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: "Brand strategy & positioning",
                    desc: "Archetype positioning, messaging architecture, and tonal development.",
                  },
                  {
                    title: "Visual Identity Kits",
                    desc: "Logo design, typography/color systems, and brand guidelines.",
                  },
                  {
                    title: "Design Systems",
                    desc: "Atomic UI components and digital-first brand tokens.",
                  },
                  {
                    title: "Presentation and Decks",
                    desc: "High-stakes pitch decks, sales narratives, and keynote design.",
                  },
                  {
                    title: "Collateral & Print",
                    desc: "Packaging, merchandise, annual reports, and tactile brand experiences.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-4"
                  >
                    <h4 className="font-normal text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-500  font-light text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>


            </div>
          </div>
         <div>
               {/* CTA BAR */}
              <div className="bg-gray-100 rounded-lg p-4 md:flex items-center justify-between gap-6 mb-12">
                <div>
                  <h3 className="text-xl font-normal text-gray-900  mb-2">
                    Initialize Blueprint Script. or Request Custom Solution?
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    Initialize specialized custom services and best conversions
                    that touch right emotion. Configure your timeline, squad
                    allocation, and production investment in our blueprint engine.
                  </p>
                </div>
                <div className="flex flex-col md:flex-col gap-1">
                  <button className="mt-6 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl transition whitespace-nowrap">
                    Configure your project →
                  </button>
                  <button className="mt-6 md:mt-0 bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-xl transition whitespace-nowrap">
                    Request Custom Solution →
                  </button>
                </div>
         
              </div>

              {/* Bottom Features */}
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Chaos to Cinema
                  </h4>
                  <p className="text-sm text-gray-500">
                    Directing messy brand energy into structured narrative.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Speed is a Feature
                  </h4>
                  <p className="text-sm text-gray-500">
                    Removing agency lag through direct synchronization.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Telemetry Driven
                  </h4>
                  <p className="text-sm text-gray-500">
                    Every frame measured for direct market lift.
                  </p>
                </div>
              </div>
         </div>

        </div>
      </div>
    </section>
  );
};

export default EngineeredCapabilitiesSection;