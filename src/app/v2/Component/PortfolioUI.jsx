import React from "react";

const categories = [
  "Video & Content Marketing",
  "Branding & Visual Identity",
  "Product Design",
  "UI/UX",
  "Sound Design",
];

export default function PortfolioUI() {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Proven results. Worthy to share. Box office hits!
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl">
            Works that moved people, turned heads and Proven to change
            directions. We attach precise performance telemetry to every
            production sequence. Proof isn't a separate section—it's the
            core of our aesthetic.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`whitespace-nowrap px-5 py-2 rounded-full border text-sm transition ${
                index === 0
                  ? "bg-white shadow text-gray-900"
                  : "bg-gray-200 text-gray-600 hover:bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Card */}
        <div className="mt-10">
          <div className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[400px]">
            <img
              src="/images/v2/photo-1.png"
              alt="Featured"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-80">TVC Commercial</p>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-1">
                Seedha Baitho - Frido
              </h2>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          
          {/* Card 1 */}
          <Card
            image="/images/v2/photo-2.png"
            title="Kiosk Kaffee"
            subtitle="VFX/CGI"
          />

          {/* Card 2 */}
          <Card
            image="/images/v2/photo-3.png"
            title="TBS-Studio"
            subtitle="Video Production"
          />

          {/* Card 3 */}
          <Card
            image="/images/v2/photo-4.png"
            title="Revamp Moto"
            subtitle="TVC Commercial"
          />

          {/* Archive Card */}
          <div className="bg-gray-200 rounded-2xl flex flex-col items-center justify-center text-center p-6 hover:bg-gray-300 transition">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center text-xl mb-4">
              →
            </div>
            <h3 className="text-lg font-medium">Full archive.</h3>
            <p className="text-sm text-gray-600 mt-1">
              View all 500+ projects
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

function Card({ image, title, subtitle }) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-60 group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </div>
  );
}