"use client"
import { Mail, Calendar, ChevronRight } from "lucide-react";

export default function SkipAgencySection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Skip the agency queue.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              This form is a direct line to the production floor, just
              immediate action from the people who actually build the work.
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-gray-700 font-medium">
            <Mail size={18} />
            contact@smokingchimney.com
          </div>

          {/* CTA */}
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl flex items-center gap-3 font-medium shadow-sm">
            <Calendar size={18} />
            Book Strategy call
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Select a directive to route your request to the correct unit.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <DirectiveCard
              title="Start production"
              subtitle="New project"
              active
            />
            <DirectiveCard
              title="Strategic alliance"
              subtitle="Partnership"
            />
            <DirectiveCard
              title="Media inquiry"
              subtitle="Press & PR"
            />
            <DirectiveCard
              title="Join the squad"
              subtitle="Careers"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= Directive Card ================= */

function DirectiveCard({ title, subtitle, active }) {
  return (
    <div
      className={`rounded-2xl p-6 border transition cursor-pointer
      ${
        active
          ? "bg-white shadow-md border-gray-200"
          : "bg-gray-50 hover:bg-white hover:shadow-sm border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>

        <ChevronRight className="text-gray-400" size={20} />
      </div>
    </div>
  );
}