
import React from 'react'
import Hero from '@/components/Hero/index';
import Values from '@/components/Values/index';
import Services from '@/components/Services/index';
import Whoweare from '@/components/Whoweare/index';
import Valuessecond from '@/components/Valuessecond/index';
import Otherservices from '@/components/Otherservices/index';
import Technicalstack from '@/components/Technicalstack/index';
import CTA from '@/components/CTA/index';
import Ethics from '@/components/Ethics/index';
import Contact from '@/components/Contact/index';
import Footer from '@/components/Footer/index';

export default function page() {
  return (
    <>
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
    </>
  )
}
