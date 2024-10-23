"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

// Section navigation links
const navLinks = [
  { name: "Solutions", target: "/#solutions" },
  { name: "Technology", target: "/#technology" },
  { name: "Company", target: "/#company" },
  { name: "Contact", target: "/#contact" }
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className='flex w-full items-center justify-between px-[20px] py-[20px] lg:mx-auto lg:px-[40px]'>
        <div className="w-full grid lg:grid-cols-3 grid-cols-2 items-center">
          {/* Logo */}
          <div className=''>
            <img src="/images/logo/smoking-chimney-logo.png" alt="Smoking Chimney Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:block'>
            <ul className='flex gap-[24px] justify-center items-center'>
              {navLinks.map((item, index) => (
                <li className='flex justify-center items-center px-4' key={index}>
                  <Link href={item.target} scroll={false}>
                    <span className='group text-[15px] h-[20px] inline-block overflow-y-hidden relative cursor-pointer'>
                      <div className='group-hover:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16, 1, 0.3, 1)] duration-500 opacity-70'>
                        {item.name}
                      </div>
                      <div className='group-hover:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16, 1, 0.3, 1)] duration-500'>
                        {item.name}
                      </div>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className='flex justify-end '>
            <button className='hidden lg:block rounded-lg bg-[#ED5729] text-white px-8 py-1'>
              Find Your Solution here!
            </button>
            <button className='text-end lg:hidden block' onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className='lg:hidden bg-gray-100 w-full p-4 absolute top-20 left-0'>
            <ul className='flex flex-col gap-4'>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.target} scroll={false}>
                    <span className='text-[18px] block py-2 cursor-pointer'>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </nav>
    </div>
  );
}

export default Header;

