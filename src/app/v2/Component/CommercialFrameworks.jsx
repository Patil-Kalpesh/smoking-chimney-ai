
import React from "react";
import { Check } from "lucide-react";

export default function CommercialFrameworks() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Commercial frameworks
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We don't sell hours. We sell outcomes. Choose the trajectory that
            matches your current mission phase. whether you're starting fresh
            or going global, we've bundled everything you need to stand out and
            sell more. no fluff, just results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {/* Card 1 */}
          <FrameworkCard
            title="Build conviction."
            subtitle="Project Base Cycle"
            description="Investors don't read decks. They scan for signals. We build the visual authority that makes the valuation stick."
            points={[
              "Narrative Architecture",
              "Visual identity core",
              "Investor Asset Suite",
            ]}
            buttonText="Request Briefing"
          />

          {/* Highlighted Card */}
          <FrameworkCard
            title="Accelerate growth."
            subtitle="Weekly or Monthly Cycle"
            description="Stop burning cash on ads nobody watches. We deploy a high-velocity content loop designed to arrest the scroll."
            points={[
              "Performance Creative",
              "Marketing & Sales loops",
              "Multivariate Audit & Testing",
              "Conversion audit",
            ]}
            buttonText="Check Availability"
            highlighted
          />

          {/* Card 3 */}
          <FrameworkCard
            title="The Studio Partner"
            subtitle="Retainer or Partnership"
            description="Stop buying hours. Start buying outcomes. Choose the trajectory that matches the current mission phase."
            points={[
              "Full Stack Production",
              "Broadcast & TVC",
              "Global Design Systems",
            ]}
            buttonText="Contact Partners"
          />
        </div>
      </div>
    </section>
  );
}

/* Card Component */
function FrameworkCard({
  title,
  subtitle,
  description,
  points,
  buttonText,
  highlighted,
}) {
  return (
    <div
      className={`rounded-2xl p-8 transition ${
        highlighted
          ? "bg-white shadow-2xl scale-105"
          : "bg-transparent"
      }`}
    >
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>

      <p className="text-orange-500 font-medium mt-2">{subtitle}</p>

      <p className="text-gray-600 mt-6 leading-relaxed">{description}</p>

      <ul className="mt-8 space-y-4">
        {points.map((point, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-800">
            <Check className="w-4 h-4 text-orange-500" />
            {point}
          </li>
        ))}
      </ul>

      <button
        className={`mt-10 w-full py-3 rounded-xl font-medium transition ${
          highlighted
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "border border-gray-300 text-gray-700 hover:bg-gray-200"
        }`}
      >
        {buttonText} →
      </button>
    </div>
  );
}