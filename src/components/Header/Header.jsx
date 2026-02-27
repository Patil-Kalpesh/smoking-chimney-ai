"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const navItems = ["Services", "Studio", "Work", "Process"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-6 left-0 right-0 z-20 flex justify-center px-4 transition-all duration-300 `}> 
        <nav className={`flex items-center gap-6 rounded-full  px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-md ring-1 ring-black/5 w-full max-w-2xl md:max-w-4xl ${scrolled ? 'backdrop-blur-md bg-slate-100/30 shadow-lg' : 'bg-white/95'}`}>
          <div className="flex items-center gap-3 pr-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold uppercase text-white">
              <img src="/images/logo/SC_logo-2.avif" alt="Smoking Chimney Studios Logo" className="h-6 w-6 object-contain" />
            </div>
            <div className="text-sm font-medium text-[#1f1f1f]">
              Smoking Chimney Studios
            </div>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 text-sm text-[#4a4a4a]">
            {navItems.map((item) => (
              <button
                key={item}
                className="transition-colors hover:text-black"
              >
                {item}
              </button>
            ))}
          </div>
          <button className="hidden md:flex ml-2 items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#181818]">
            <span>Configure New Project</span>
            <span className="text-lg">→</span>
          </button>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-auto flex items-center justify-center h-10 w-10 rounded-full hover:bg-black/10 transition"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </nav>
      </header>
      {/* Mobile Menu Slide from Bottom */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex items-end md:hidden"
          style={{ background: 'rgba(0,0,0,0.18)' }}
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay to close */}
          <div className="absolute inset-0" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative w-full rounded-t-3xl bg-white px-6 pt-8 pb-10 shadow-2xl animate-slideUp">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                  <img src="/images/logo/SC_logo-2.avif" alt="Logo" className="h-6 w-6 object-contain" />
                </div>
                <span className="text-base font-semibold text-[#1f1f1f]">Smoking Chimney Studios</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-black/10 transition" aria-label="Close menu">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="w-full text-left py-3 px-2 rounded-lg text-lg font-medium text-[#181818] hover:bg-[#f5f5f5] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="w-full flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-base font-semibold text-white transition hover:bg-[#181818]">
              <span>Configure New Project</span>
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
