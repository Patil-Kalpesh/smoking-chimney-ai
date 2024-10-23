"use client";
import React, { useEffect, useState } from 'react';
import Header from '../app/header/page';
import Hero from '../app/Hero/page';
import Values from '../app/Values/index';
import Services from '../app/Services/index';
import Whoweare from '../app/Whoweare/index';
import Valuessecond from '../app/Valuessecond/index';
import Otherservices from '../app/Otherservices/index';
import Technicalstack from '../app/Technicalstack/index';
import CTA from '../app/CTA/index';
import Ethics from '../app/Ethics/index';
import Contact from '../app/Contact/index';
import Footer from '../app/Footer/index';

function Page() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down
        setIsScrollingUp(false);
      } else {
        // User is scrolling up
        setIsScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <div className={`header ${isScrollingUp ? 'show-header' : 'hide-header'}`}>
        <Header />
      </div>
      <Hero />
      <div className='bg-[#EEF3ED]'>
        <Values />
      </div>
      <Services />
      <div className='bg-[#EEF3ED]'>
        <Whoweare />
      </div>
      <Valuessecond />
      <Otherservices />
      <Technicalstack />
      <div className='bg-[#ED5729]'>
        <CTA />
      </div>
      <div className='bg-[#EEF3ED]'>
        <Ethics />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Page;
