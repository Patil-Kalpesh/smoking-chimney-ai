import React from 'react'
import Navbar from '../app/Navbar/page';
import Hero from '../app/Hero/page';
import Values from '../app/Values/index'
import Services from '../app/Services/index'
import Whoweare from '../app/Whoweare/index'
import Valuessecond from '../app/Valuessecond/index'
import Otherservices from '../app/Otherservices/index'
import Technicalstack from '../app/Technicalstack/index'
import CTA from '../app/CTA/index'
import Ethics from '../app/Ethics/index'
import Contact from '../app/Contact/index'
import Footer from '../app/Footer/index'
function page() {
  return (
    <div>
       <div className='container mx-auto'>
       <Navbar />
       </div>
        <Hero/>
        <div className='bg-[#EEF3ED]'>
          <Values/>
        </div>
        <Services/>
        <div className='bg-[#EEF3ED]'>
          <Whoweare/>
        </div>
        <Valuessecond/>
        <Otherservices/>
        <Technicalstack/>
        <div className='bg-[#ED5729]'>
        <CTA/>
        </div>
        <div className='bg-[#EEF3ED]'>
          <Ethics/>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page