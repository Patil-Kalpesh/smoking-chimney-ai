"use client"
import { useState } from "react";
import { Calendar, Settings2, Clock, DollarSign } from "lucide-react";

export default function StudioSection() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <TopBanner />
        <HowWeWork />
        <StudioOperations />
      </div>
    </div>
  );
}

/* ================= Top Banner ================= */

function TopBanner() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <p className="text-lg sm:text-xl text-gray-700 max-w-xl">
        Join <span className="font-semibold">5,000+ founders</span> receiving
        the future of brand building. Need something specific?
      </p>

      <button className="bg-black text-white px-6 py-4 rounded-xl w-full lg:w-auto flex flex-col items-center justify-center hover:opacity-90 transition">
        <span className="flex items-center gap-2 font-medium">
          <Settings2 size={18} />
          Custom Project Requirement
        </span>
        <span className="text-xs text-gray-400 mt-1">
          Own the industry's ears and audience trust
        </span>
      </button>
    </div>
  );
}

/* ================= How We Work ================= */

function HowWeWork() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-8">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        🤝 How we work together
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <InfoCard
          icon={<DollarSign size={20} />}
          title="Payment Rules"
          desc="50% to start, 50% when we finish. Simple, direct, easy."
        />
        <InfoCard
          icon={<Settings2 size={20} />}
          title="100% ownership"
          desc="You own all final designs and videos. They are yours forever."
        />
        <InfoCard
          icon={<Clock size={20} />}
          title="Revision Cycles"
          desc="2 rounds of edits for every project. We aim to nail it first time."
        />
      </div>

      <p className="text-sm text-orange-600">
        The Home Discount ❤️ If you're a local business in India, ask us about
        our special local rates.
      </p>
    </div>
  );
}

function InfoCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-sm transition">
      <div className="text-orange-500 mb-3">{icon}</div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

/* ================= Studio Operations ================= */

function StudioOperations() {
  return (
    <div className="grid lg:grid-cols-3 gap-12 items-start">
      {/* Left Content */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">How the studio operates.</h2>

        <p className="text-gray-600 leading-relaxed">
          Just direct access to the creative team and clear deliverables. We
          removed the agency friction. No account managers. No hourly billing.
          Just direct access to the creative team and clear deliverables.
        </p>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Still have questions? Skip the reading. Talk directly to a producer
            about your specific bottleneck.
          </p>

          <button className="bg-black text-white px-6 py-4 rounded-xl flex items-center gap-3 hover:opacity-90 transition">
            <Calendar size={18} />
            Book Strategy call
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="lg:col-span-2 space-y-4">
        <FAQItem
          question="Can you handle broadcast-grade production?"
          answer="Yes. Our pipeline is built for high-fidelity TV commercials and global campaigns, handling everything from narrative architecture to master color grading on-site."
          defaultOpen
        />
        <FAQItem
          question="Who will I actually be working with?"
          answer="You will work directly with our senior creative team — designers, strategists, and producers."
        />
        <FAQItem
          question="How does the pricing model work?"
          answer="We work on a clear milestone-based pricing model. 50% upfront and 50% on completion."
        />
      </div>
    </div>
  );
}

function FAQItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border rounded-xl">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <span className="font-medium">{question}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}