"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

const navLinks = [
  { name: "Solutions", target: "/solutions" },
  { name: "Technology", target: "/technology" },
  // { name: "Company", target: "/company" },
  { name: "Blog", target: "/blog" },
  { name: "Contact", target: "/contact" },
];

function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className=" container mx-auto w-full bg-white ">
      <nav className="flex justify-between items-center px-[20px] py-[20px] lg:mx-auto lg:px-[40px]">
        {/* Logo */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-2 items-center">
        <div className="flex lg:flex-1">
        <Link href="/"><Image src="/images/logo/Logo.svg" width={40} height={40} alt="Smoking Chimney Logo" /></Link>
        </div>

        {/* Mobile Menu Button */}
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 ">
          {navLinks.map((link, index) => (
            <li key={index} className="">
              <Link href={link.target}>
                  <span className='group text-[15px] h-[22px] inline-block overflow-y-hidden relative cursor-pointer'>
                    <div className='group-hover:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16, 1, 0.3, 1)] duration-500 opacity-70'>
                      {link.name}
                    </div>
                    <div className='group-hover:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16, 1, 0.3, 1)] duration-500'>
                      {link.name}
                    </div>
                  </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex justify-end '>
          <button
              className="lg:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
          {isMenuOpen ? (
            <span>&#10005; {/* Close Icon */}</span>
          ) : (
            <span>&#9776; {/* Menu Icon */}</span>
          )}
        </button>
            <Link href={'https://api.whatsapp.com/send/?phone=7721912611&text=I%27m+inquiring+about+the+solutions%2Fservices&type=phone_number&app_absent=0 '} target="_blank" className='hidden lg:block btn-lightup'>
              Find Your Solution here!
            </Link>
        </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col bg-gray-50 shadow-md p-4 space-y-4 text-gray-700">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-[#ED5729]">
              <Link href={link.target} onClick={closeMenu}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default ResponsiveNavbar;
