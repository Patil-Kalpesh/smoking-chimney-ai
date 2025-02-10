"use client";
import React from 'react'
import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";
import HighlightText from '../ui/HighlightText';
import Image from 'next/image';

export default function Otherservices() {
  return (
    <section >
    <div className='container mx-auto max-w-7xl px-8 lg:px-10 py-[60px] '>
      <p className='text-center text-[26px]'>Enhance the lives of millions of people</p>
      {/* <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /><span className='text-[#ED5729]'>revolutionary projects</span> </h2> */}
      {/* <h2 ref={ref} className={`text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium  ${inView ? 'text-[#ED5729]' : 'text-[#212529]' }`}> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /><span className='text-[#ED5729]'>revolutionary projects</span> </h2> */}

<HighlightText
 text="We are eager to contribute in revolutionary projects"
 highlightWords={["revolutionary", "projects."]}
  className="text-center text-3xl lg:text-5xl font-medium transition-colors duration-500 lg:w-2/3 lg:ml-auto lg:mr-auto"
/>
     

      <div className='pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14'>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, ammount: 0.4, margin: "-100px" }}

        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-1.svg" width={48} height={48} alt="icon2" /></div>
          <h3 className='text-[26px] py-2 border-b-[1px] border-black'>AI </h3>
          <ul className='pt-2 text-lg font-normal list-disc list-inside '>
            <li>AI and Automation</li>
            <li>Chat Bot Development</li>
            <li>Fintech</li>
          </ul>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, ammount: 0.4, margin: "-100px" }}

        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-2.svg" width={48} height={48} alt="icon2" /></div>
          <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Development </h3>
          <ul className='pt-2  text-lg font-normal list-disc list-inside '>
            <li>Mobile App Development</li>
            <li>Website Development</li>
            <li>E-commerce Development</li>
            <li>Game Development</li>
          </ul>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, ammount: 0.4, margin: "-100px" }}

        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-3.svg" width={48} height={48} alt="icon2" /></div>
          <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Tech </h3>
          <ul className='pt-2  text-lg font-normal list-disc list-inside '>
            <li>ERP Software</li>
            <li>CRM Software</li>
            <li>XR Development </li>
            <li>CMS Development</li>
          </ul>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, ammount: 0.4, margin: "-100px" }}

        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-4.svg" width={48} height={48} alt="icon2" /></div>
          <h3 className='text-[26px] py-2 border-b-[1px] border-black'>IT </h3>
          <ul className='pt-2  text-lg font-normal list-disc list-inside '>
            <li>Healthcare IT</li>
            <li>iOT Development </li>
            <li>WordPress Website Development </li>
          </ul>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, ammount: 0.4, margin: "-100px" }}

        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-5.svg" width={48} height={48} alt="icon2" /></div>
          <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Design Solution </h3>
          <ul className='pt-2  text-lg font-normal list-disc list-inside '>
            <li>Digital Transformation</li>
            <li>Software Development</li>
            <li>User Experience </li>
            <li>Product Design</li>
          </ul>
        </motion.div>
        <motion.div className="card-item lg:p-4 "
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, ammount: 0.4, margin: "-100px" }}

        >
          <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-6.svg" width={48} height={48} alt="icon2" /></div>
          <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Testing </h3>
          <ul className='pt-2  text-lg font-normal list-disc list-inside '>
            <li>DevOps</li>
            <li>QA & Testing Services </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
  )
}
