import React from 'react'
import HeroSection from '../CommonSection/HeroSection'
import ValueSection from '../CommonSection/ValueSection'
import ServiceSection from '../CommonSection/ServiceSection'
import WhoweareSection from '../CommonSection/WhoweareSection'
import ValuesTwo from '../CommonSection/ValuesTwo'
import Otherservices from '../CommonSection/Otherservices'
import Technicalstack from '../CommonSection/Technicalstack'
import CTA from '../CommonSection/CTA'
import Ethics from '../CommonSection/Ethics'
import Contact from '../CommonSection/Contact'

export default function index() {
  return (
    <div>
        <HeroSection/>
        <ValueSection/>
        <ServiceSection/>
        <WhoweareSection/>
        <ValuesTwo/>
        <Otherservices/>
        <Technicalstack/>
        <CTA/>
        <Ethics/>
        <Contact/>
    </div>
  )
}
