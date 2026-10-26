"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';

const serviceLinks = [
  { name: "API & Enterprise Integration", target: "/services/api-enterprise-integration/" },
  { name: "SaaS MVP Development", target: "/services/saas-mvp-development/" },
  { name: "KYC / KYB Software", target: "/services/kyc-kyb-software-development/" },
  { name: "AI Development", target: "/services/ai-development/" },
  { name: "Hyperledger Fabric", target: "/services/hyperledger-fabric-development/" },
  { name: "Blockchain Development", target: "/services/blockchain-development/" },
];

const navLinks = [
  { name: "Solutions", target: "/solutions" },
  { name: "Technology", target: "/technology" },
  { name: "Blog", target: "/blog" },
  { name: "Contact", target: "/contact" },
];

function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => { setIsMenuOpen(false); setServicesOpen(false); };

  return (
    <div className={`header ${isScrollingUp ? 'show-header' : 'hide-header'}`}>
      <header className="container mx-auto w-full bg-white">
        <nav className="flex justify-between items-center px-[20px] py-[20px] lg:mx-auto lg:px-[40px]">
          <div className="w-full grid lg:grid-cols-3 grid-cols-2 items-center">

            {/* ── Logo ── */}
            <div className="flex lg:flex-1">
              <Link href="/"><Image src="/images/logo/Logo.svg" width={40} height={40} alt="Smoking Chimney Logo" /></Link>
            </div>

            {/* ── Desktop nav ── */}
            <ul className="hidden lg:flex items-center space-x-10">

              {/* Services dropdown */}
              <li className="relative group/services">
                <button className="flex items-center gap-[4px] focus:outline-none">
                  <span className="text-[15px] h-[22px] inline-block overflow-y-hidden relative cursor-pointer">
                    <div className="group-hover/services:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-500 opacity-70">
                      Services
                    </div>
                    <div className="group-hover/services:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-500">
                      Services
                    </div>
                  </span>
                  {/* Chevron */}
                  <svg
                    className="w-3 h-3 opacity-50 group-hover/services:opacity-100 group-hover/services:rotate-180 transition-all duration-300 flex-shrink-0"
                    fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown panel */}
                <div className="
                  absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2
                  w-[340px] bg-white border border-gray-100 rounded-2xl shadow-xl
                  opacity-0 invisible translate-y-2
                  group-hover/services:opacity-100 group-hover/services:visible group-hover/services:translate-y-0
                  transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                  z-50 overflow-hidden
                ">
                  <div className="h-[3px] w-full" />
                  <ul className="py-2">
                    {serviceLinks.map((s, i) => (
                      <li key={i}>
                        <Link
                          href={s.target}
                          className="flex items-center gap-3 px-5 py-3 text-[14px] text-[#212529] hover:bg-[#ED57291A] hover:text-[#ED5729] transition-colors duration-200 group/item"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-[#ED5729] transition-colors duration-200 flex-shrink-0" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-100 px-5 py-3">
                    <Link href="/solutions" className="text-[12px] text-[#ED5729] font-medium hover:underline">
                      View all solutions →
                    </Link>
                  </div>
                </div>
              </li>

              {/* Regular nav links */}
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.target} className="flex items-center">
                    <span className="group text-[15px] h-[22px] inline-block overflow-y-hidden relative cursor-pointer">
                      <div className="group-hover:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-500 opacity-70">
                        {link.name}
                      </div>
                      <div className="group-hover:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-500">
                        {link.name}
                      </div>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* ── Right: hamburger + CTA ── */}
            <div className="flex justify-end">
              <button className="lg:hidden text-gray-700 focus:outline-none text-xl" onClick={toggleMenu}>
                {isMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
              </button>
              <Link
                href="https://api.whatsapp.com/send/?phone=7721912611&text=I%27m+inquiring+about+the+solutions%2Fservices&type=phone_number&app_absent=0"
                target="_blank"
                className="hidden lg:block btn-lightup"
              >
                Find Your Solution here!
              </Link>
            </div>

          </div>
        </nav>

        {/* ── Mobile menu ── */}
        {isMenuOpen && (
          <ul className="lg:hidden flex flex-col bg-gray-50 shadow-md p-4 space-y-1 text-gray-700">

            {/* Services accordion */}
            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between items-center py-3 px-1 hover:text-[#ED5729] transition-colors duration-200 text-left"
              >
                <span>Services</span>
                <svg
                  className={`w-3.5 h-3.5 opacity-60 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${servicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="pl-3 pb-2 space-y-0 border-l-2 border-[#ED57294D] ml-1 mt-1">
                  {serviceLinks.map((s, i) => (
                    <li key={i}>
                      <Link
                        href={s.target}
                        onClick={closeMenu}
                        className="flex items-center gap-2 py-2.5 px-2 text-[13px] text-gray-600 hover:text-[#ED5729] transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED5729] flex-shrink-0" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Regular mobile links */}
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-[#ED5729] py-3 px-1 border-t border-gray-100 transition-colors duration-200">
                <Link href={link.target} onClick={closeMenu}>
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="pt-2 border-t border-gray-100">
              <Link
                href="https://api.whatsapp.com/send/?phone=7721912611&text=I%27m+inquiring+about+the+solutions%2Fservices&type=phone_number&app_absent=0"
                target="_blank"
                onClick={closeMenu}
                className="block btn-lightup text-center"
              >
                Find Your Solution here!
              </Link>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
}

export default ResponsiveNavbar;