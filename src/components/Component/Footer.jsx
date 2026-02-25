import { Settings2, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 pt-24 pb-10 px-6 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/v2/clouds.png"   // 🔥 Put your cloud image in public folder
          alt="clouds background"
          className="w-full h-full object-cover "
        />
        {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div> */}
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Top Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-gray-800">
          
          {/* Expertise */}
          <FooterColumn
            title="Expertise"
            items={[
              "Brand Identity",
              "Cinematic Film",
              "3D & Motion",
              "Digital Strategy",
              "UX/UI Systems",
              "AI Workflows",
            ]}
          />

          {/* Industries */}
          <FooterColumn
            title="Industries"
            items={[
              "Ethical Fintech & Neobanks & SaaS",
              "Luxury Brands",
              "DTC & E-comm",
              "Web3 & Crypto",
              "Luxury Mobility & EV Startups",
            ]}
            highlight="See Every Industry we serve..."
          />

          {/* Pages */}
          <FooterColumn
            title="Pages"
            items={["Work", "Studio", "Process", "Contact"]}
          />

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Connect</h4>
            <p>hello@smokingchimney.com</p>
            <p>+91 987 654 3210</p>

            <div className="pt-6 space-y-1">
              <p className="text-green-600 font-medium">
                Pune, India (HQ)
              </p>
              <p className="text-sm text-gray-600">
                Serving Globally
              </p>
            </div>
          </div>
        </div>

        {/* CTA Glass Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <p className="text-xl sm:text-2xl text-gray-800 max-w-xl">
            Join <span className="font-semibold">5,000+ founders</span>{" "}
            receiving the future of brand building. Need something specific?
          </p>

          <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
            <button className="bg-black text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:opacity-90 transition shadow-md">
              <Settings2 size={18} />
              Remove the friction.
              <ArrowRight size={18} />
            </button>

            <p className="text-sm text-gray-500 mt-3">
              Get a custom solution for your project in 60 seconds.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

/* Footer Column Component */

function FooterColumn({ title, items, highlight }) {
  return (
    <div className="space-y-4">
      <h4 className="font-medium text-gray-900">{title}</h4>

      <ul className="space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="hover:text-black transition cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      {highlight && (
        <p className="text-orange-500 pt-2 cursor-pointer hover:underline">
          {highlight}
        </p>
      )}
    </div>
  );
}