import Image from "next/image";

const navItems = ["Services", "Studio", "Work", "Process"];
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

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#1f1f1f] font-sofia">
      <div className="absolute inset-0">
        <Image
          src="/v2/bg-1.png"
          alt="Cinematic portrait background"
          fill
          priority
           sizes="100vw"
           className="object-cover object-right"
           style={{ objectPosition: "80% center" }}
        />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />
        <div className="absolute -left-32 top-16 h-[22rem] w-[22rem] rounded-full bg-white/70 blur-3xl" />
        <div className="absolute bottom-6 right-6 h-[18rem] w-[18rem] rounded-full bg-white/60 blur-3xl" />
      </div>

      <header className="absolute left-0 right-0 top-6 z-20 flex justify-center px-4">
        <nav className="flex items-center gap-6 rounded-full bg-white/95 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-md ring-1 ring-black/5">
          <div className="flex items-center gap-3 pr-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold uppercase text-white">
              SCS
            </div>
            <div className="text-sm font-medium text-[#1f1f1f]">Smoking Chimney Studios</div>
          </div>
          <div className="flex items-center gap-5 text-sm text-[#4a4a4a]">
            {navItems.map((item) => (
              <button key={item} className="transition-colors hover:text-black">
                {item}
              </button>
            ))}
          </div>
          <button className="ml-2 flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#181818]">
            <span>Configure New Project</span>
            <span className="text-lg">→</span>
          </button>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-32 lg:pt-40">
        <div className="space-y-5 lg:max-w-3xl">
          <div className="flex items-center gap-2 text-sm font-medium text-[#d44a2d]">
            <span>Accepting Projects with</span>
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#d44a2d]" />
          </div>
          <h1 className="font-figtree font-light text-[32px] leading-[1.4] text-[#181818]" style={{ letterSpacing: '0.01px', fontVariantNumeric: 'slashed-zero' }}>
            Award winning premiere for brands that need to move as fast as modern culture.
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-3 rounded-lg bg-[#ef582a] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ef582a]/30 transition hover:translate-y-[-1px] hover:bg-[#df4f24]">
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
              <span className="text-[11px] tracking-tight">Trusted by 12k+ clients</span>
            </div>
          </div>
          <p className="max-w-2xl text-sm text-[#4a4a4a]">
            30-min session, Book your call. Just a clear path forward.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-[#4a4a4a]">
          {serviceTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#e5e5e5] bg-white/85 px-4 py-2 shadow-sm backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-full bg-white/92 px-6 py-4 shadow-lg shadow-black/5 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm text-[#4a4a4a]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ef582a]/10 text-[#ef582a]">★</span>
            <div className="leading-tight">
              <div className="font-semibold text-[#1f1f1f]">Accepting New Projects</div>
              <div className="text-xs text-[#d44a2d]">2 Slots remaining for January</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#ef582a] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#df4f24]">
              <span>Configure New Project</span>
              <span className="text-lg">→</span>
            </button>
            <div className="flex items-center gap-3 text-[#4a4a4a]">
              {iconPaths.map((d, idx) => (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-none stroke-[#4a4a4a] stroke-[1.4]"
                >
                  <path d={d} />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
