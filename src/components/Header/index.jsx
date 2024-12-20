"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

const navLinks = [
  { name: "Home", target: "/" },
  { name: "About", target: "/about" },
  { name: "Services", target: "/services" },
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
        <div className="">
        <Link href="/"><Image src="/images/logo/logo.svg" width={40} height={40} alt="Smoking Chimney Logo" /></Link>
        </div>

        {/* Mobile Menu Button */}
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 ">
          {navLinks.map((link, index) => (
            <li key={index} className="">
              <Link href={link.target}>
                  <span className='group text-[15px] h-[20px] inline-block overflow-y-hidden relative cursor-pointer'>
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
            <button className='hidden lg:block btn-lightup'>
            <span className='group text-[15px] h-[20px] inline-block overflow-y-hidden relative cursor-pointer'>
                    <div className='group-hover:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16, 1, 0.3, 1)] duration-400 '>
                    Find Your Solution here!
                    </div>
                    <div className='group-hover:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16, 1, 0.3, 1)] duration-400'>
                    Find Your Solution here!
                    </div>
                  </span>
            
            </button>
        </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col bg-gray-50 shadow-md p-4 space-y-4 text-gray-700">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-blue-600">
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
